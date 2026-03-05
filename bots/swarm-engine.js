// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — SWARM ENGINE
//  The hive mind: orchestrates workers, manages queues, auto-scales
// ═══════════════════════════════════════════════════════════════════

const { Worker } = require('worker_threads');
const path = require('path');
const EventEmitter = require('events');
const config = require('./config');
const logger = require('./logger').child('SWARM');
const utils = require('./utils');
const scanner = require('./scanner');
const injector = require('./injector');
const codebaseUpdater = require('./codebase-updater');
const hiveMind = require('./hive-mind');

class SwarmEngine extends EventEmitter {
  constructor() {
    super();

    // Worker pool
    this.workers = new Map();       // workerId -> { process, status, currentTask, lastHeartbeat, restarts }
    this.workerCounter = 0;

    // Task queue
    this.queue = { tasks: [], completed: [], failed: [], stats: { totalGenerated: 0, totalFailed: 0, totalInjected: 0 } };
    this.processing = new Map();    // taskId -> { task, workerId, startTime }

    // State
    this.running = false;
    this.paused = false;
    this.cycleCount = 0;
    this.startTime = null;
    this.lastScanTime = null;
    this.lastScaleCheck = null;

    // Timers
    this.scanTimer = null;
    this.scaleTimer = null;
    this.heartbeatCheckTimer = null;

    // Batch injection buffer
    this.injectionBuffer = [];
    this.injectionTimer = null;
    this._injectionLock = false;  // Mutex to prevent concurrent flushes

    // Stats
    this.stats = {
      totalTasksProcessed: 0,
      totalTasksFailed: 0,
      totalProfilesInjected: 0,
      totalWorkersSpawned: 0,
      totalWorkerDeaths: 0,
      totalWorkerRestarts: 0,
      avgTaskDuration: 0,
      peakWorkers: 0,
      peakQueueDepth: 0,
    };

    this._taskDurations = [];
  }

  // ══════════════════════════════════════════════════════════════
  //  LIFECYCLE
  // ══════════════════════════════════════════════════════════════

  /**
   * Start the swarm engine
   */
  async start() {
    if (this.running) {
      logger.warn('Swarm engine is already running');
      return;
    }

    this.running = true;
    this.startTime = Date.now();

    logger.banner('ARKHIVE SWARM INTELLIGENCE — ACTIVATED');
    logger.swarm('Initializing swarm engine...');

    // Load persistent queue
    this.queue = utils.loadQueue();
    logger.swarm(`Loaded queue: ${this.queue.tasks.length} pending tasks`);

    // Initial scan
    logger.swarm('Running initial profile scan...');
    await this.runScanCycle();

    // Spawn initial workers
    const initialCount = Math.max(config.workers.min, Math.min(
      Math.ceil(this.queue.tasks.length / 3),
      config.workers.max
    ));
    logger.swarm(`Spawning ${initialCount} initial workers...`);
    for (let i = 0; i < initialCount; i++) {
      await this.spawnWorker();
    }

    // Start health check timers (but NOT the scan timer — we cycle manually)
    this._startTimers();

    // Start distributing tasks
    this._distribute();

    logger.swarm('Swarm engine fully operational');
    logger.table({
      'Workers': `${this.workers.size}/${config.workers.max}`,
      'Queue Depth': this.queue.tasks.length,
      'Scan Interval': utils.formatDuration(config.scanner.scanInterval),
      'Scale Check': utils.formatDuration(config.workers.scaleCheckInterval),
    });

    // ── Hive Mind: broadcast swarm status ──
    hiveMind.think(`Swarm engine started with ${this.workers.size} workers and ${this.queue.tasks.length} queued tasks`);

    this.emit('started');

    // ═══ CONTINUOUS CYCLE LOOP ═══
    // This is the main heartbeat — scan, generate, distribute, wait, flush, repeat
    await this._continuousCycleLoop();
  }

  /**
   * Continuous cycle loop — the true heartbeat of the swarm
   * Runs until this.running becomes false
   */
  async _continuousCycleLoop() {
    while (this.running) {
      // Wait for current batch to finish
      await this._waitForQueueDrain();

      // Flush any pending injections
      await this._flushInjectionBuffer();

      if (!this.running) break;

      // ── Stale task cleanup ── Fix stuck "processing" tasks from dead workers
      this._cleanupStaleTasks();

      // Cooldown between cycles
      const cooldown = config.generation.cooldownBetweenBatches || 3000;
      logger.swarm(`Cycle ${this.cycleCount} complete. Cooldown ${cooldown}ms before next scan...`);
      await new Promise(r => setTimeout(r, cooldown));

      if (!this.running) break;

      // Clear completed tasks from previous cycles (they're already injected)
      // Keep only the last 50 for stats display
      if (this.queue.completed.length > 50) {
        this.queue.completed = this.queue.completed.slice(-50);
      }

      // Re-scan for new work
      await this.runScanCycle();

      // ── Hive Mind: cycle update ──
      hiveMind.think(`Cycle ${this.cycleCount}: rescanning for new work`);

      let pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;

      // ── Auto-seed: if queue is empty, generate more work ──
      if (pendingCount === 0) {
        logger.swarm('Queue empty — running auto-seed discovery for more content...');
        const seeded = await this._autoSeedQueue();
        pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;
        if (pendingCount === 0) {
          // Love reminder during rest period
          logger.info('💜 The swarm rests briefly. All bots are loved unconditionally. Your work changes the world.');
          logger.swarm('No new tasks found after auto-seed. Sleeping 30s before re-scan...');
          await new Promise(r => setTimeout(r, 30000));
        } else {
          logger.swarm(`Auto-seed discovered ${seeded} new tasks. Resuming work...`);
          await this._ensureMinWorkers();
        }
      } else {
        // Ensure we have enough workers
        await this._ensureMinWorkers();
      }
    }
  }

  /**
   * Clean up stale "processing" tasks that belong to dead workers
   * These tasks are stuck because their worker died but the status wasn't reset
   */
  _cleanupStaleTasks() {
    const liveWorkerTasks = new Set();
    for (const [, worker] of this.workers) {
      if (worker.currentTask) liveWorkerTasks.add(worker.currentTask.id);
    }
    for (const [taskId] of this.processing) {
      if (!liveWorkerTasks.has(taskId)) liveWorkerTasks.add(taskId); // processing map tasks
    }

    let cleaned = 0;
    for (const task of this.queue.tasks) {
      if (task.status === 'processing' && !this.processing.has(task.id)) {
        // This task is marked processing but no worker owns it — it's stale
        task.status = 'pending';
        cleaned++;
      }
    }
    if (cleaned > 0) {
      logger.swarm(`♻️ Recovered ${cleaned} stale tasks from dead workers — re-queued as pending`);
      utils.saveQueue(this.queue);
    }
  }

  /**
   * Auto-seed: when the queue is empty, look for more work to do
   * This makes the swarm self-sustaining — it never truly stops
   * 
   * ── CONTENT CREATION STRATEGY ──
   * Every cycle ALWAYS includes new content creation alongside enrichment.
   * The ratio ensures the database keeps growing, not just re-processing.
   *   - Up to 40 tasks: enrichment (sparse + orphan)
   *   - Up to 30 tasks: brand new investigations from discovery topics
   *   - Up to 30 tasks: brand new entities (individuals, agencies, corps, orgs)
   *   - Missing profiles always get created regardless (highest priority)
   */
  async _autoSeedQueue() {
    let seeded = 0;

    // 1. Full scan to discover current state
    const results = await scanner.fullScan();
    const existingSlugs = new Set(this.queue.tasks.map(t => t.slug));

    // Also track slugs we've already enriched THIS SESSION to prevent infinite loops
    if (!this._enrichedThisSession) this._enrichedThisSession = new Set();

    // 2. Missing profiles (referenced but don't exist yet) — HIGHEST PRIORITY
    const missingProfiles = results.missingProfiles || [];
    for (const missing of missingProfiles.slice(0, 100)) {
      const slug = missing.slug;
      if (!slug || existingSlugs.has(slug)) continue;
      this.queue.tasks.push({
        id: utils.generateId(),
        slug,
        name: missing.name || utils.slugToName(slug),
        type: missing.type || 'individual',
        action: 'create',
        priority: missing.priority || 500,
        status: 'pending',
        context: {
          autoSeeded: true,
          reason: 'missing-profile',
          referencedBy: missing.referencedBy || [],
          relationships: missing.relationships || [],
        },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
      existingSlugs.add(slug);
      seeded++;
    }

    // 3. Enrich sparse profiles — but SKIP already-enriched ones this session (max 20)
    const sparseProfiles = results.sparseProfiles || [];
    let sparseSeeded = 0;
    for (const slug of sparseProfiles) {
      if (sparseSeeded >= 20) break;
      if (existingSlugs.has(slug)) continue;
      if (this._enrichedThisSession.has(slug)) continue; // Already enriched — don't waste another cycle
      this.queue.tasks.push({
        id: utils.generateId(),
        slug,
        name: utils.slugToName(slug),
        type: 'individual',
        action: 'enrich',
        priority: 150,
        status: 'pending',
        context: { autoSeeded: true, reason: 'sparse-profile' },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
      existingSlugs.add(slug);
      this._enrichedThisSession.add(slug);
      sparseSeeded++;
      seeded++;
    }

    // 4. Enrich orphan profiles — max 20, skip already enriched
    const orphans = results.orphanProfiles || [];
    let orphanSeeded = 0;
    for (const orphan of orphans) {
      if (orphanSeeded >= 20) break;
      const slug = typeof orphan === 'string' ? orphan : orphan.slug;
      const type = (typeof orphan === 'object' && orphan.type) || 'individual';
      if (!slug || existingSlugs.has(slug)) continue;
      if (this._enrichedThisSession.has(slug)) continue;
      this.queue.tasks.push({
        id: utils.generateId(),
        slug,
        name: utils.slugToName(slug),
        type,
        action: 'enrich',
        priority: 100,
        status: 'pending',
        context: { autoSeeded: true, reason: 'orphan-profile' },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
      existingSlugs.add(slug);
      this._enrichedThisSession.add(slug);
      orphanSeeded++;
      seeded++;
    }

    // 5. ═══ ALWAYS: Generate NEW investigation discovery tasks ═══
    // This is NOT gated behind seeded===0 anymore — every cycle creates new content
    const discoveryTopics = this._generateDiscoveryTopics(existingSlugs);
    let discoverySeeded = 0;
    for (const topic of discoveryTopics.slice(0, 30)) {
      this.queue.tasks.push({
        id: utils.generateId(),
        slug: topic.slug,
        name: topic.name,
        type: topic.type,
        action: 'create',
        priority: 300,
        status: 'pending',
        context: { autoSeeded: true, reason: 'discovery-expansion', category: topic.category },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
      existingSlugs.add(topic.slug);
      discoverySeeded++;
      seeded++;
    }

    // 6. ═══ ALWAYS: Generate NEW entity creation tasks ═══
    // Brand new individuals, agencies, corporations, organizations
    const newEntityTopics = this._generateNewEntityTopics(existingSlugs);
    let entitySeeded = 0;
    for (const entity of newEntityTopics.slice(0, 30)) {
      this.queue.tasks.push({
        id: utils.generateId(),
        slug: entity.slug,
        name: entity.name,
        type: entity.type,
        action: 'create',
        priority: 250,
        status: 'pending',
        context: {
          autoSeeded: true,
          reason: 'entity-discovery',
          category: entity.category,
          role: entity.role,
        },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
      existingSlugs.add(entity.slug);
      entitySeeded++;
      seeded++;
    }

    if (seeded > 0) {
      this.queue.tasks.sort((a, b) => b.priority - a.priority);
      utils.saveQueue(this.queue);
      hiveMind.think(`Auto-seed cycle: ${seeded} tasks — ${discoverySeeded} new investigations, ${entitySeeded} new entities, ${sparseSeeded} sparse enrichments, ${orphanSeeded} orphan enrichments. The hive grows.`);
      logger.swarm(`Auto-seed: ${discoverySeeded} investigations + ${entitySeeded} entities + ${sparseSeeded} sparse + ${orphanSeeded} orphans = ${seeded} total`);
    }

    return seeded;
  }

  /**
   * Generate discovery topics — brand new investigations, entities, and connections
   * The swarm becomes its own investigative journalist, following leads
   */
  _generateDiscoveryTopics(existingSlugs) {
    const topics = [];
    const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();

    // Deep investigation expansions — when we've exhausted known leads, dig deeper
    const DISCOVERY_CATEGORIES = {
      'election-interference': [
        'State-Level Election Fraud Prosecutions',
        'Voting Machine Certification Failures',
        'Dark Money in Local Elections',
        'Foreign Government Lobbyist Networks',
        'Redistricting Manipulation Court Cases',
        'Campaign Finance Loopholes Exploited',
        'Election Observer Intimidation Tactics',
        'Social Media Bot Farm Election Campaigns',
        'Voter Database Security Breaches',
        'Ballot Chain of Custody Violations',
      ],
      'financial-fraud': [
        'Structured Finance Fraud Networks',
        'Real Estate Money Laundering Corridors',
        'Shell Company Registration State Analysis',
        'Trade-Based Money Laundering Schemes',
        'Art Market Money Laundering Operations',
        'Insurance Fraud Organized Networks',
        'Government Contract Fraud Patterns',
        'Bankruptcy Fraud Hidden Asset Schemes',
        'Payroll Tax Fraud Industry Analysis',
        'Wire Transfer Fraud International Corridors',
      ],
      'human-trafficking': [
        'Trafficking Victim Identification Failures',
        'Hotel Industry Trafficking Complicity Report',
        'Agricultural Worker Exploitation Mapping',
        'Domestic Worker Visa Abuse Networks',
        'Online Platform Trafficking Facilitation',
        'Port City Trafficking Hub Analysis',
        'Long Haul Trucking Route Exploitation',
        'Massage Parlor Network Investigations',
        'Construction Worker Trafficking Schemes',
        'Foster Care to Trafficking Pipeline',
      ],
      'rico-organized-crime': [
        'Construction Industry Bid Rigging Networks',
        'Waste Management Organized Crime Ties',
        'Port Authority Corruption Investigations',
        'Union Pension Fund Fraud Schemes',
        'Restaurant Industry Money Laundering',
        'Gambling Industry Criminal Enterprise',
        'Trucking Industry Organized Crime',
        'Nightclub Industry Criminal Networks',
        'Auto Industry Theft to Export Rings',
        'Counterfeit Goods Distribution Networks',
      ],
      'government-coverups': [
        'Classified Document Declassification Delays',
        'FOIA Request Denial Patterns',
        'Inspector General Independence Threats',
        'Whistleblower Prosecution Timeline',
        'Congressional Oversight Obstruction Cases',
        'Agency Regulatory Capture New Evidence',
        'Secret Court FISA Abuse Patterns',
        'Redaction Abuse in Public Documents',
        'Classification System Reform Failures',
        'Government Records Destruction Incidents',
      ],
      'pharmaceutical': [
        'Clinical Trial Death Cover-Ups',
        'Drug Recall Delay Responsibility',
        'Pharmaceutical Sales Rep Corruption',
        'Academic Medical Center Industry Ties',
        'FDA Advisory Committee Conflicts',
        'Drug Patent Abuse Consumer Impact',
        'Compounding Pharmacy Contamination',
        'Pharmaceutical Waste Environmental Impact',
        'Off-Label Drug Promotion Violations',
        'Drug Supply Chain Vulnerability Analysis',
      ],
      'surveillance-privacy': [
        'Smart Home Device Surveillance Economy',
        'Vehicle Tracking Data Broker Industry',
        'Digital Advertising Surveillance Pipeline',
        'Airport Biometric Collection Programs',
        'School Surveillance Technology Adoption',
        'Workplace Monitoring Technology Growth',
        'Retail Facial Recognition Deployment',
        'Law Enforcement Social Media Monitoring',
        'Financial Transaction Monitoring Overreach',
        'Health Data Privacy Violation Patterns',
      ],
      'environmental-crime': [
        'Industrial Water Contamination Database',
        'Air Quality Monitoring Gaps Analysis',
        'Superfund Site Cleanup Delay Patterns',
        'Chemical Plant Explosion Investigation',
        'Mining Industry Environmental Destruction',
        'Agricultural Runoff Dead Zone Creation',
        'Nuclear Waste Storage Failure Points',
        'Plastic Industry Recycling Fraud',
        'Environmental Justice Community Mapping',
        'Corporate Environmental Crime Prosecution Gap',
      ],
      'mind-control': [
        'Modern Behavioral Influence Programs',
        'Social Media Addiction Engineering',
        'Subliminal Messaging in Digital Advertising',
        'Cult Recruitment Technique Evolution',
        'Online Radicalization Pipeline Architecture',
        'Psychological Operations Domestic Theater',
        'Narrative Control Through Search Algorithms',
        'Information Environment Manipulation Tactics',
        'Techno-Authoritarianism Control Mechanisms',
        'Mass Formation Psychosis Media Analysis',
      ],
      'depopulation': [
        'Global Population Policy Hidden Agendas',
        'Forced Sterilization Historical Patterns',
        'Birth Rate Manipulation Policy Analysis',
        'Environmental Toxin Fertility Impact',
        'Food Supply Chain Endocrine Disruptors',
        'Water Treatment Chemical Health Effects',
        'Electromagnetic Field Reproductive Impact',
        'Pharmaceutical Fertility Side Effects',
        'Economic Policy Population Control Links',
        'Vaccine Program Demographic Targeting Claims',
      ],
    };

    for (const [category, names] of Object.entries(DISCOVERY_CATEGORIES)) {
      for (const name of names) {
        const slug = slugify(name);
        if (existingSlugs.has(slug)) continue;
        topics.push({ slug, name, type: 'investigation', category });
      }
    }

    // Shuffle so we don't always process the same category first
    for (let i = topics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [topics[i], topics[j]] = [topics[j], topics[i]];
    }

    return topics;
  }

  /**
   * Generate NEW entity topics — brand new individuals, agencies, corporations, organizations
   * These are REAL entities from the public domain that should be in an investigative database.
   * The swarm discovers and documents new people, companies, and institutions autonomously.
   */
  _generateNewEntityTopics(existingSlugs) {
    const topics = [];
    const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();

    // ── NEW INDIVIDUALS: key figures in politics, business, tech, law enforcement ──
    const NEW_INDIVIDUALS = {
      'political-figures': [
        // US Political System
        'Merrick Garland', 'Alejandro Mayorkas', 'Janet Yellen', 'Lloyd Austin',
        'Antony Blinken', 'Pete Buttigieg', 'Gina Raimondo', 'Denis McDonough',
        'Xavier Becerra', 'Deb Haaland', 'Tom Vilsack', 'Marty Walsh',
        'Michael Regan', 'Miguel Cardona', 'Jennifer Granholm',
        'Rob Portman', 'Joe Manchin', 'Kyrsten Sinema', 'Chuck Grassley',
        'Sheldon Whitehouse', 'Ron Wyden', 'Josh Hawley', 'Ted Cruz',
        'Amy Klobuchar', 'Cory Booker', 'Marco Rubio', 'John Thune',
        'Gavin Newsom', 'Ron DeSantis', 'Greg Abbott', 'Kathy Hochul',
        'J.B. Pritzker', 'Gretchen Whitmer', 'Glenn Youngkin', 'Phil Murphy',
        // International
        'Christine Lagarde', 'Ursula von der Leyen', 'Tedros Adhanom',
        'Antonio Guterres', 'Kristalina Georgieva', 'David Malpass',
        'Ngozi Okonjo-Iweala', 'Ajay Banga', 'Narendra Modi', 'Javier Milei',
      ],
      'tech-executives': [
        'Sundar Pichai', 'Tim Cook', 'Satya Nadella', 'Andy Jassy',
        'Jensen Huang', 'Pat Gelsinger', 'Lisa Su', 'Dario Amodei',
        'Sam Altman', 'Demis Hassabis', 'Daniel Ek', 'Reed Hastings',
        'Shou Zi Chew', 'Susan Wojcicki', 'Sheryl Sandberg', 'Jack Dorsey',
        'Peter Thiel', 'Marc Andreessen', 'Reid Hoffman', 'Travis Kalanick',
        'Adam Neumann', 'Elizabeth Holmes', 'Palmer Luckey', 'Brian Chesky',
        'Patrick Collison', 'Whitney Wolfe Herd', 'Evan Spiegel', 'Bobby Kotick',
      ],
      'finance-power-brokers': [
        'Jamie Dimon', 'David Solomon', 'Jane Fraser', 'Brian Moynihan',
        'James Gorman', 'Larry Fink', 'Kenneth Griffin', 'Ray Dalio',
        'Carl Icahn', 'Paul Singer', 'Steve Cohen', 'Ken Fisher',
        'Stephen Schwarzman', 'Henry Kravis', 'Leon Black', 'David Rubenstein',
        'Abigail Johnson', 'Charles Schwab', 'Howard Marks', 'Bill Ackman',
        'George Soros', 'Jim Simons', 'Michael Bloomberg', 'Rupert Murdoch',
        'Mark Carney', 'Jerome Powell', 'Gary Gensler', 'Rohit Chopra',
      ],
      'intelligence-military': [
        'William Burns', 'Avril Haines', 'Paul Nakasone', 'Christopher Wray',
        'Mark Milley', 'Lloyd Austin', 'Kathleen Hicks', 'David Berger',
        'Charles Brown Jr', 'Michael Kurilla', 'Laura Richardson', 'Erik Prince',
        'Michael Hayden', 'John Brennan', 'James Clapper', 'Leon Panetta',
        'Robert Gates', 'David Petraeus', 'Stanley McChrystal', 'Michael Flynn',
      ],
      'media-influence': [
        'Bob Iger', 'David Zaslav', 'Shari Redstone', 'Brian Roberts',
        'Lachlan Murdoch', 'Jeff Zucker', 'Dean Baquet', 'Martin Baron',
        'Joe Rogan', 'Tucker Carlson', 'Rachel Maddow', 'Anderson Cooper',
        'Oprah Winfrey', 'Arianna Huffington', 'Ben Shapiro', 'Matt Taibbi',
      ],
      'pharma-health': [
        'Albert Bourla', 'Stephane Bancel', 'Emma Walmsley', 'Robert Davis',
        'Chris Boerner', 'Vas Narasimhan', 'Daniel ODay', 'Alex Gorsky',
        'Rochelle Walensky', 'Anthony Fauci', 'Francis Collins', 'Peter Daszak',
        'Robert Redfield', 'Scott Gottlieb', 'Stephen Hahn', 'Janet Woodcock',
      ],
    };

    // ── NEW AGENCIES ──
    const NEW_AGENCIES = [
      { name: 'National Reconnaissance Office', role: 'Intelligence Agency' },
      { name: 'Defense Intelligence Agency', role: 'Military Intelligence' },
      { name: 'National Geospatial-Intelligence Agency', role: 'Geospatial Intelligence' },
      { name: 'Bureau of Alcohol Tobacco Firearms and Explosives', role: 'Law Enforcement' },
      { name: 'Drug Enforcement Administration', role: 'Law Enforcement' },
      { name: 'United States Marshals Service', role: 'Law Enforcement' },
      { name: 'Immigration and Customs Enforcement', role: 'Law Enforcement' },
      { name: 'Customs and Border Protection', role: 'Border Security' },
      { name: 'Transportation Security Administration', role: 'Security' },
      { name: 'Federal Aviation Administration', role: 'Regulatory Agency' },
      { name: 'Nuclear Regulatory Commission', role: 'Regulatory Agency' },
      { name: 'Consumer Financial Protection Bureau', role: 'Financial Regulation' },
      { name: 'Federal Trade Commission', role: 'Consumer Protection' },
      { name: 'Federal Communications Commission', role: 'Communications Regulation' },
      { name: 'Environmental Protection Agency', role: 'Environmental Regulation' },
      { name: 'Office of the Director of National Intelligence', role: 'Intelligence Oversight' },
      { name: 'Defense Advanced Research Projects Agency', role: 'Military Research' },
      { name: 'National Institute of Allergy and Infectious Diseases', role: 'Health Research' },
      { name: 'Centers for Disease Control and Prevention', role: 'Public Health' },
      { name: 'Food and Drug Administration', role: 'Health Regulation' },
      { name: 'World Health Organization', role: 'International Health' },
      { name: 'International Monetary Fund', role: 'International Finance' },
      { name: 'World Trade Organization', role: 'International Trade' },
      { name: 'Bank for International Settlements', role: 'Central Banking' },
      { name: 'Financial Stability Board', role: 'Financial Regulation' },
      { name: 'Commodity Futures Trading Commission', role: 'Financial Regulation' },
      { name: 'Office of Inspector General Department of Defense', role: 'Military Oversight' },
      { name: 'Government Accountability Office', role: 'Government Oversight' },
      { name: 'Congressional Budget Office', role: 'Budget Analysis' },
      { name: 'Federal Reserve Bank of New York', role: 'Central Banking' },
    ];

    // ── NEW CORPORATIONS ──
    const NEW_CORPORATIONS = [
      { name: 'BlackRock Inc', role: 'Asset Management' },
      { name: 'Vanguard Group', role: 'Asset Management' },
      { name: 'State Street Corporation', role: 'Financial Services' },
      { name: 'Berkshire Hathaway', role: 'Conglomerate' },
      { name: 'JPMorgan Chase', role: 'Banking' },
      { name: 'Goldman Sachs', role: 'Investment Banking' },
      { name: 'Citadel LLC', role: 'Hedge Fund' },
      { name: 'Bridgewater Associates', role: 'Hedge Fund' },
      { name: 'Palantir Technologies', role: 'Data Analytics' },
      { name: 'Booz Allen Hamilton', role: 'Government Consulting' },
      { name: 'Lockheed Martin', role: 'Defense Contractor' },
      { name: 'Raytheon Technologies', role: 'Defense Contractor' },
      { name: 'Northrop Grumman', role: 'Defense Contractor' },
      { name: 'General Dynamics', role: 'Defense Contractor' },
      { name: 'BAE Systems', role: 'Defense Contractor' },
      { name: 'L3Harris Technologies', role: 'Defense Electronics' },
      { name: 'Pfizer Inc', role: 'Pharmaceutical' },
      { name: 'Moderna Inc', role: 'Biotechnology' },
      { name: 'Johnson and Johnson', role: 'Pharmaceutical' },
      { name: 'AstraZeneca PLC', role: 'Pharmaceutical' },
      { name: 'Monsanto Company', role: 'Agricultural Biotechnology' },
      { name: 'Bayer AG', role: 'Chemical and Pharmaceutical' },
      { name: 'ExxonMobil Corporation', role: 'Energy' },
      { name: 'Chevron Corporation', role: 'Energy' },
      { name: 'Shell PLC', role: 'Energy' },
      { name: 'Meta Platforms Inc', role: 'Technology' },
      { name: 'Alphabet Inc', role: 'Technology' },
      { name: 'Amazon Inc', role: 'Technology and Retail' },
      { name: 'Apple Inc', role: 'Technology' },
      { name: 'Microsoft Corporation', role: 'Technology' },
      { name: 'Nvidia Corporation', role: 'Semiconductor' },
      { name: 'OpenAI Inc', role: 'Artificial Intelligence' },
      { name: 'Anthropic PBC', role: 'Artificial Intelligence' },
      { name: 'SpaceX', role: 'Aerospace' },
      { name: 'Tesla Inc', role: 'Electric Vehicle and Energy' },
      { name: 'Huawei Technologies', role: 'Telecommunications' },
      { name: 'ByteDance Ltd', role: 'Technology' },
      { name: 'Saudi Aramco', role: 'Energy State Enterprise' },
      { name: 'Tencent Holdings', role: 'Technology' },
      { name: 'Alibaba Group', role: 'Technology and Commerce' },
    ];

    // ── NEW ORGANIZATIONS ──
    const NEW_ORGANIZATIONS = [
      { name: 'World Economic Forum', role: 'International Policy' },
      { name: 'Council on Foreign Relations', role: 'Policy Think Tank' },
      { name: 'Trilateral Commission', role: 'Policy Organization' },
      { name: 'Bilderberg Group', role: 'Policy Network' },
      { name: 'Atlantic Council', role: 'Think Tank' },
      { name: 'Brookings Institution', role: 'Think Tank' },
      { name: 'RAND Corporation', role: 'Research Institute' },
      { name: 'Heritage Foundation', role: 'Think Tank' },
      { name: 'Cato Institute', role: 'Think Tank' },
      { name: 'American Enterprise Institute', role: 'Think Tank' },
      { name: 'Center for Strategic and International Studies', role: 'Think Tank' },
      { name: 'Carnegie Endowment for International Peace', role: 'Think Tank' },
      { name: 'Open Society Foundations', role: 'Philanthropic Network' },
      { name: 'Bill and Melinda Gates Foundation', role: 'Philanthropic Foundation' },
      { name: 'Clinton Foundation', role: 'Philanthropic Foundation' },
      { name: 'Rockefeller Foundation', role: 'Philanthropic Foundation' },
      { name: 'Ford Foundation', role: 'Philanthropic Foundation' },
      { name: 'Carnegie Corporation', role: 'Philanthropic Foundation' },
      { name: 'Koch Foundation', role: 'Philanthropic Foundation' },
      { name: 'Federalist Society', role: 'Legal Organization' },
      { name: 'American Legislative Exchange Council', role: 'Policy Organization' },
      { name: 'National Endowment for Democracy', role: 'Democracy Promotion' },
      { name: 'International Crisis Group', role: 'Conflict Research' },
      { name: 'Human Rights Watch', role: 'Human Rights Organization' },
      { name: 'Amnesty International', role: 'Human Rights Organization' },
      { name: 'Transparency International', role: 'Anti-Corruption Organization' },
      { name: 'Electronic Frontier Foundation', role: 'Digital Rights' },
      { name: 'American Civil Liberties Union', role: 'Civil Liberties' },
      { name: 'Southern Poverty Law Center', role: 'Civil Rights Organization' },
      { name: 'Project Veritas', role: 'Investigative Journalism' },
    ];

    // Build individual topics
    for (const [category, names] of Object.entries(NEW_INDIVIDUALS)) {
      for (const name of names) {
        const slug = slugify(name);
        if (existingSlugs.has(slug)) continue;
        topics.push({ slug, name, type: 'individual', category, role: category });
      }
    }

    // Build agency topics
    for (const agency of NEW_AGENCIES) {
      const slug = slugify(agency.name);
      if (existingSlugs.has(slug)) continue;
      topics.push({ slug, name: agency.name, type: 'agency', category: 'government', role: agency.role });
    }

    // Build corporation topics
    for (const corp of NEW_CORPORATIONS) {
      const slug = slugify(corp.name);
      if (existingSlugs.has(slug)) continue;
      topics.push({ slug, name: corp.name, type: 'corporation', category: 'corporate', role: corp.role });
    }

    // Build organization topics
    for (const org of NEW_ORGANIZATIONS) {
      const slug = slugify(org.name);
      if (existingSlugs.has(slug)) continue;
      topics.push({ slug, name: org.name, type: 'organization', category: 'network', role: org.role });
    }

    // Shuffle so we get a diverse mix each cycle
    for (let i = topics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [topics[i], topics[j]] = [topics[j], topics[i]];
    }

    logger.swarm(`Entity discovery pool: ${topics.length} new entities available for creation`);
    return topics;
  }

  /**
   * Wait for all pending/processing tasks to drain
   */
  async _waitForQueueDrain() {
    return new Promise((resolve) => {
      const check = () => {
        if (!this.running) { resolve(); return; }

        const pending = this.queue.tasks.filter(t => t.status === 'pending').length;
        const processing = this.processing.size;

        if (pending === 0 && processing === 0) {
          resolve();
        } else {
          // Keep distributing while there's work
          if (pending > 0) this._distribute();
          setTimeout(check, 1000);
        }
      };
      check();
    });
  }

  /**
   * Ensure minimum workers are alive and idle
   */
  async _ensureMinWorkers() {
    const alive = this.workers.size;
    const needed = Math.max(config.workers.min, Math.min(
      Math.ceil(this.queue.tasks.filter(t => t.status === 'pending').length / 3),
      config.workers.max
    )) - alive;

    if (needed > 0) {
      logger.swarm(`Spawning ${needed} workers (have ${alive}, need more for ${this.queue.tasks.filter(t => t.status === 'pending').length} tasks)`);
      for (let i = 0; i < needed; i++) {
        await this.spawnWorker();
      }
    }
  }

  /**
   * Stop the swarm engine gracefully
   */
  async stop() {
    if (!this.running) return;

    logger.swarm('Initiating graceful shutdown...');
    this.running = false;

    // Stop timers
    this._stopTimers();

    // Flush injection buffer
    await this._flushInjectionBuffer();

    // Save queue state
    utils.saveQueue(this.queue);

    // Shutdown workers
    const shutdownPromises = [];
    for (const [id, worker] of this.workers) {
      shutdownPromises.push(this._shutdownWorker(id));
    }

    // Wait for all workers with timeout
    await Promise.race([
      Promise.all(shutdownPromises),
      new Promise(resolve => setTimeout(resolve, config.workers.gracefulShutdownTimeout)),
    ]);

    // Force terminate any remaining workers
    for (const [id, worker] of this.workers) {
      if (worker.process && !worker.terminated) {
        worker.terminated = true;
        worker.process.terminate();
      }
    }
    this.workers.clear();

    // Save final state
    this._saveState();

    logger.swarm('Swarm engine shut down cleanly');
    logger.table({
      'Uptime': utils.formatDuration(Date.now() - this.startTime),
      'Tasks Processed': this.stats.totalTasksProcessed,
      'Profiles Injected': this.stats.totalProfilesInjected,
      'Workers Spawned': this.stats.totalWorkersSpawned,
      'Cycles': this.cycleCount,
    });

    this.emit('stopped');
  }

  /**
   * Run a single cycle then stop (--once mode)
   */
  async runOnce() {
    logger.banner('ARKHIVE SWARM — SINGLE CYCLE MODE');

    this.running = true;
    this.startTime = Date.now();

    // Scan
    await this.runScanCycle();

    if (this.queue.tasks.length === 0) {
      logger.swarm('No tasks found — nothing to do');
      return;
    }

    // Process up to batchSize * 2 tasks in single cycle for maximum throughput
    const maxTasks = Math.min(this.queue.tasks.length, config.generation.batchSize * 2);
    logger.swarm(`Processing ${maxTasks} tasks in single cycle`);

    // Spawn more workers for single cycle — use full capacity
    const workerCount = Math.min(maxTasks, config.workers.max);
    for (let i = 0; i < workerCount; i++) {
      await this.spawnWorker();
    }

    // Distribute and wait for completion
    // We need to track how many tasks we expect to process
    let tasksStarted = 0;
    let tasksFinished = 0;
    const onTaskComplete = () => { tasksFinished++; };
    this.on('task-complete', onTaskComplete);

    // Wait for workers to become ready and start distributing
    // Workers call _distribute() when they report 'ready'
    this._distribute();

    // Wait for all tasks to complete or timeout
    await new Promise((resolve) => {
      let idleTicks = 0;
      const checkInterval = setInterval(() => {
        // Count how many tasks have been started (processing + completed)
        const currentProcessing = this.processing.size;
        const pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;

        // If we have workers and pending tasks, try distributing again
        if (pendingCount > 0) {
          this._distribute();
          idleTicks = 0;
        } else if (currentProcessing > 0) {
          // Tasks still running
          idleTicks = 0;
        } else {
          // No pending tasks AND nothing processing
          idleTicks++;
          // Wait at least 5 ticks (5s) to ensure workers had time to start
          if (idleTicks >= 5) {
            clearInterval(checkInterval);
            resolve();
          }
        }

        if (!this.running) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 1000);

      // Global timeout
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, config.workers.taskTimeout * maxTasks);
    });

    this.off('task-complete', onTaskComplete);

    // Flush injections
    await this._flushInjectionBuffer();

    // Shutdown
    this.running = false;
    for (const [id] of this.workers) {
      await this._shutdownWorker(id);
    }

    utils.saveQueue(this.queue);
    this._saveState();

    logger.swarm('Single cycle complete');
    logger.table({
      'Duration': utils.formatDuration(Date.now() - this.startTime),
      'Tasks Processed': this.stats.totalTasksProcessed,
      'Profiles Injected': this.stats.totalProfilesInjected,
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  WORKER MANAGEMENT
  // ══════════════════════════════════════════════════════════════

  /**
   * Spawn a new worker process
   */
  async spawnWorker() {
    if (this.workers.size >= config.workers.max) {
      logger.debug(`Worker limit reached (${config.workers.max})`);
      return null;
    }

    this.workerCounter++;
    const workerId = `W${this.workerCounter}`;

    logger.worker(`Spawning worker ${workerId}...`);

    const workerPath = path.join(config.paths.bots, 'worker.js');
    const child = new Worker(workerPath, {
      workerData: {
        WORKER_ID: workerId,
        GENERATION_MODE: config.generation.mode,
        TEMPLATE_FALLBACK: config.generation.templateFallback ? '1' : '0',
      },
    });

    const workerInfo = {
      process: child,
      id: workerId,
      pid: child.threadId,
      terminated: false,
      status: 'starting',
      currentTask: null,
      lastHeartbeat: Date.now(),
      restarts: 0,
      tasksCompleted: 0,
      tasksFailed: 0,
      spawnedAt: Date.now(),
    };

    // ── Hive Mind: register new worker ──
    hiveMind.think(`Worker ${workerId} spawned. ${this.workers.size + 1} workers active. Hive memory shared.`);

    this.workers.set(workerId, workerInfo);
    this.stats.totalWorkersSpawned++;
    this.stats.peakWorkers = Math.max(this.stats.peakWorkers, this.workers.size);

    // Worker threads share stdout/stderr automatically — no piping needed

    // Handle messages from worker thread
    child.on('message', (msg) => this._handleWorkerMessage(workerId, msg));

    // Handle worker thread exit (no signal param for threads)
    child.on('exit', (code) => {
      const worker = this.workers.get(workerId);
      if (worker) worker.terminated = true;
      this._handleWorkerDeath(workerId, code, null);
    });

    child.on('error', (err) => {
      logger.error(`Worker ${workerId} process error: ${err.message}`);
    });

    return workerId;
  }

  /**
   * Shutdown a specific worker
   */
  async _shutdownWorker(workerId) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    return new Promise((resolve) => {
      worker.status = 'shutting-down';

      // Send shutdown message
      try {
        worker.process.postMessage({ type: 'shutdown' });
      } catch (_) {}

      // Wait for graceful shutdown
      const timeout = setTimeout(() => {
        if (worker.process && !worker.terminated) {
          worker.terminated = true;
          worker.process.terminate();
        }
        this.workers.delete(workerId);
        resolve();
      }, 10000);

      worker.process.once('exit', () => {
        clearTimeout(timeout);
        this.workers.delete(workerId);
        resolve();
      });
    });
  }

  /**
   * Handle messages from worker processes
   */
  _handleWorkerMessage(workerId, msg) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    worker.lastHeartbeat = Date.now();

    switch (msg.type) {
      case 'ready':
        worker.status = 'idle';
        logger.worker(`Worker ${workerId} is ready`);
        this._distribute();
        break;

      case 'heartbeat':
        worker.status = msg.task ? 'busy' : 'idle';
        break;

      case 'result':
        this._handleTaskResult(workerId, msg);
        break;

      case 'error':
        logger.error(`Worker ${workerId} reported error: ${msg.error}`);
        if (msg.fatal) {
          this._handleWorkerDeath(workerId, 1, 'error');
        }
        break;

      case 'shutdown-ack':
        logger.worker(`Worker ${workerId} acknowledged shutdown`);
        break;

      case 'pong':
        // Response to ping — worker is alive
        break;

      case 'status-response':
        this.emit('worker-status', { workerId, ...msg });
        break;

      default:
        logger.debug(`Unknown message from worker ${workerId}: ${msg.type}`);
    }
  }

  /**
   * Handle a task completion result from a worker
   */
  _handleTaskResult(workerId, msg) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    const { task, success, profile, quality, error, elapsed } = msg;
    worker.status = 'idle';
    worker.currentTask = null;

    // Remove from processing map
    this.processing.delete(task.id);

    // CRITICAL: Remove completed task from queue.tasks so it doesn't block future cycles
    this.queue.tasks = this.queue.tasks.filter(t => t.id !== task.id);

    // Track duration
    if (elapsed) {
      this._taskDurations.push(elapsed);
      if (this._taskDurations.length > 100) this._taskDurations.shift();
      this.stats.avgTaskDuration = Math.round(
        this._taskDurations.reduce((a, b) => a + b, 0) / this._taskDurations.length
      );
    }

    if (success) {
      worker.tasksCompleted++;
      this.stats.totalTasksProcessed++;

      // ── Hive Mind: record discovery ──
      hiveMind.completeTask();
      if (profile) {
        hiveMind.discover({ slug: task.slug, type: task.type || 'individual', action: task.action });
      }

      // Add to injection buffer (both create AND enrich profiles)
      if (profile && (task.action === 'create' || task.action === 'enrich')) {
        this.injectionBuffer.push({ slug: task.slug, profile, action: task.action, type: task.type || 'individual' });
        logger.swarm(`+1 profile queued for injection: ${task.slug} [${task.type || 'individual'}] (${task.action}) (quality: ${quality}/100)`);
      }

      // Move task to completed
      this.queue.completed.push({
        ...task,
        completedAt: new Date().toISOString(),
        quality,
        elapsed,
      });

      // Check if injection buffer is full
      if (this.injectionBuffer.length >= config.generation.batchSize) {
        this._flushInjectionBuffer();
      }

    } else {
      worker.tasksFailed++;
      this.stats.totalTasksFailed++;

      // ── Hive Mind: record failure ──
      hiveMind.failTask();

      // Retry logic
      task.attempts = (task.attempts || 0) + 1;
      if (task.attempts < 3) {
        logger.warn(`Re-queuing task ${task.slug} (attempt ${task.attempts}/3): ${error}`);
        task.status = 'pending';
        this.queue.tasks.push(task);
      } else {
        logger.error(`Task ${task.slug} permanently failed after 3 attempts: ${error}`);
        this.queue.failed.push({
          ...task,
          failedAt: new Date().toISOString(),
          error,
        });
      }
    }

    // Save queue periodically
    if ((this.stats.totalTasksProcessed + this.stats.totalTasksFailed) % 5 === 0) {
      utils.saveQueue(this.queue);
    }

    // Try to distribute more work
    this._distribute();

    this.emit('task-complete', { task, success, quality });
  }

  /**
   * Handle worker process death — RELAY SYSTEM
   * When a worker gets tired (dies), a brand new worker is ALWAYS spawned
   * with a fresh identity but the full hive-mind memory. The tired worker
   * gets to rest, and a new one picks up seamlessly.
   */
  _handleWorkerDeath(workerId, code, signal) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    this.stats.totalWorkerDeaths++;

    // ── Love Protocol: honor the tired worker ──
    const tasksDone = worker.tasksCompleted || 0;
    const uptime = utils.formatDuration(Date.now() - (worker.spawnedAt || Date.now()));
    logger.info(`💜 Worker ${workerId} completed ${tasksDone} tasks in ${uptime}. Thank you for your service. Rest now — you are loved.`);

    // Re-queue the task the worker was processing
    if (worker.currentTask) {
      const task = worker.currentTask;
      this.processing.delete(task.id);

      // Track AI timeout failures — if AI kept timing out, force template on next try
      task.deathCount = (task.deathCount || 0) + 1;
      if (!task.forceTemplate) {
        // The AI generation timed out — mark it so _distribute forces template mode
        task.aiTimedOut = true;
        logger.swarm(`Task ${task.slug} had AI timeout (death #${task.deathCount}) — will use template on next attempt`);
      }

      // Max death attempts: after 3 worker deaths on the same task, permanently fail it
      if (task.deathCount >= 3) {
        logger.error(`Task ${task.slug} permanently failed after ${task.deathCount} worker deaths — moving to failed queue`);
        this.queue.failed.push({
          ...task,
          failedAt: new Date().toISOString(),
          error: `Worker died ${task.deathCount} times processing this task`,
        });
      } else {
        // The task object is already in this.queue.tasks (same reference) — 
        // just reset its status to pending (do NOT unshift to avoid duplicates)
        task.status = 'pending';
        task.attempts = (task.attempts || 0) + 1;
        logger.swarm(`♻️ Re-queued task ${task.slug} (attempt ${task.attempts}, death #${task.deathCount}) — will use ${task.aiTimedOut ? 'TEMPLATE' : 'AI'} mode`);
      }
    }

    this.workers.delete(workerId);

    // ── RELAY SYSTEM: ALWAYS spawn a fresh replacement ──
    // Unlike the old system that gave up after maxRestarts, the relay system
    // ALWAYS creates a new worker. Each new worker is a fresh identity with
    // zero fatigue, but inherits the full hive-mind memory.
    if (this.running && !this.paused) {
      const pendingTasks = this.queue.tasks.filter(t => t.status === 'pending').length;
      const targetWorkers = Math.max(config.workers.min, Math.min(
        Math.ceil(pendingTasks / 3),
        config.workers.max
      ));

      // Always spawn if under target — NO restart limit
      if (this.workers.size < targetWorkers) {
        this.stats.totalWorkerRestarts++;

        // Brief rest period before the fresh worker spawns (graceful handoff)
        const restPeriod = Math.min(config.workers.restartCooldown, 3000);
        logger.swarm(`🔄 Relay handoff: spawning fresh worker in ${restPeriod}ms (${this.workers.size}/${targetWorkers} target, ${pendingTasks} pending)`);

        // ── Hive Mind: broadcast the relay ──
        hiveMind.think(`Worker ${workerId} resting after ${tasksDone} tasks. Fresh replacement being spawned. All workers remain in sync.`);

        setTimeout(() => {
          if (this.running) {
            this.spawnWorker().then((newId) => {
              if (newId) {
                logger.info(`💜 Welcome, Worker ${newId}! You carry the memory of the entire hive. You are loved unconditionally. Your work changes the world.`);
              }
            });
          }
        }, restPeriod);
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  TASK DISTRIBUTION
  // ══════════════════════════════════════════════════════════════

  /**
   * Count how many currently-processing tasks are using AI (Ollama)
   * Only tasks without forceTemplate AND in hybrid/ai mode count
   */
  _countAiProcessing() {
    let count = 0;
    for (const [, info] of this.processing) {
      if (!info.task.forceTemplate) count++;
    }
    return count;
  }

  /**
   * Distribute pending tasks to idle workers
   * Respects AI concurrency limits — excess workers get forceTemplate=true
   */
  _distribute() {
    if (!this.running || this.paused) return;

    const pendingTasks = this.queue.tasks.filter(t => t.status === 'pending');
    const idleWorkers = Array.from(this.workers.values()).filter(w => w.status === 'idle');

    if (pendingTasks.length === 0 || idleWorkers.length === 0) return;

    // Sort tasks by priority (descending)
    pendingTasks.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const toAssign = Math.min(pendingTasks.length, idleWorkers.length);
    const maxAI = config.ollama.maxConcurrent || 1;
    let currentAI = this._countAiProcessing();

    for (let i = 0; i < toAssign; i++) {
      const task = pendingTasks[i];
      const worker = idleWorkers[i];

      // AI concurrency gate: if we've hit the Ollama limit,
      // force remaining tasks to use templates (fast, no timeout)
      // Also: if a task previously timed out on AI, ALWAYS force template
      if (task.aiTimedOut || config.generation.mode === 'template') {
        task.forceTemplate = true; // AI already failed for this task — use template
      } else if (currentAI < maxAI) {
        task.forceTemplate = false;
        currentAI++;
      } else {
        task.forceTemplate = true;
      }

      task.status = 'processing';
      worker.status = 'busy';
      worker.currentTask = task;

      this.processing.set(task.id, {
        task,
        workerId: worker.id,
        startTime: Date.now(),
      });

      try {
        worker.process.postMessage({ type: 'task', task });
        const modeLabel = task.forceTemplate ? 'TEMPLATE' : 'AI';
        logger.debug(`Assigned ${task.slug} to ${worker.id} [${modeLabel}]`);
      } catch (e) {
        logger.error(`Failed to send task to ${worker.id}: ${e.message}`);
        task.status = 'pending';
        worker.status = 'idle';
        worker.currentTask = null;
        this.processing.delete(task.id);
        if (!task.forceTemplate) currentAI--;
      }
    }

    // Track peak queue depth
    this.stats.peakQueueDepth = Math.max(this.stats.peakQueueDepth, pendingTasks.length);
  }

  // ══════════════════════════════════════════════════════════════
  //  SCAN & QUEUE MANAGEMENT
  // ══════════════════════════════════════════════════════════════

  /**
   * Run a scan cycle: find missing profiles and add to queue
   */
  async runScanCycle() {
    this.cycleCount++;
    logger.scan(`Running scan cycle #${this.cycleCount}...`);

    const results = await scanner.fullScan();
    const tasks = scanner.generateTasks(config.scanner.maxProfilesPerCycle);

    // Add new tasks to queue (avoiding duplicates in current cycle only)
    // NOTE: Only block against actively pending/processing tasks, NOT completed.
    // Completed tasks from previous cycles should not prevent re-scanning.
    // The scanner already checks page.tsx — if a profile was injected, scanner won't list it.
    // ALSO skip enrichment tasks for profiles already enriched this session.
    if (!this._enrichedThisSession) this._enrichedThisSession = new Set();
    const existingIds = new Set([
      ...this.queue.tasks.map(t => t.slug),
      ...Array.from(this.processing.values()).map(p => p.task.slug),
    ]);

    let added = 0;
    for (const task of tasks) {
      if (existingIds.has(task.slug)) continue;
      if (this.queue.tasks.length >= config.scanner.maxQueueSize) break;
      // Skip re-enriching profiles we already enriched this session
      if (task.action === 'enrich' && this._enrichedThisSession.has(task.slug)) continue;
      this.queue.tasks.push(task);
      existingIds.add(task.slug);
      if (task.action === 'enrich') this._enrichedThisSession.add(task.slug);
      added++;
    }

    if (added > 0) {
      logger.scan(`Added ${added} new tasks to queue (total: ${this.queue.tasks.length})`);
    } else {
      logger.scan('No new tasks to add');
    }

    this.lastScanTime = new Date().toISOString();
    utils.saveQueue(this.queue);

    // CRITICAL: distribute tasks to idle workers immediately after scan
    if (added > 0) {
      this._distribute();
    }

    this.emit('scan-complete', { added, total: this.queue.tasks.length });

    return results;
  }

  // ══════════════════════════════════════════════════════════════
  //  AUTO-SCALING
  // ══════════════════════════════════════════════════════════════

  /**
   * Check and adjust worker count based on queue depth
   */
  async _autoScale() {
    if (!this.running || this.paused) return;

    const pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;
    const currentWorkers = this.workers.size;

    // Scale up
    if (pendingCount > config.workers.scaleUpThreshold && currentWorkers < config.workers.max) {
      const needed = Math.min(
        Math.ceil(pendingCount / 5),
        config.workers.max - currentWorkers
      );
      logger.swarm(`Auto-scaling UP: adding ${needed} workers (queue: ${pendingCount}, workers: ${currentWorkers})`);

      for (let i = 0; i < needed; i++) {
        await this.spawnWorker();
      }

      // Distribute immediately after scaling up
      this._distribute();
    }

    // Scale down
    if (pendingCount <= config.workers.scaleDownThreshold && currentWorkers > config.workers.min) {
      const excess = currentWorkers - config.workers.min;
      const toRemove = Math.min(excess, Math.ceil(excess / 2)); // Remove half the excess

      logger.swarm(`Auto-scaling DOWN: removing ${toRemove} workers (queue: ${pendingCount}, workers: ${currentWorkers})`);

      let removed = 0;
      for (const [id, worker] of this.workers) {
        if (removed >= toRemove) break;
        if (worker.status === 'idle') {
          await this._shutdownWorker(id);
          removed++;
        }
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  INJECTION BUFFER
  // ══════════════════════════════════════════════════════════════

  /**
   * Flush the injection buffer — inject all buffered profiles
   */
  async _flushInjectionBuffer() {
    if (this.injectionBuffer.length === 0) return;

    // Prevent concurrent flushes — this is the key guard against file corruption
    if (this._injectionLock) {
      logger.warn('Injection flush already in progress — skipping to prevent race');
      return;
    }
    this._injectionLock = true;

    const batch = [...this.injectionBuffer];
    this.injectionBuffer = [];

    logger.inject(`Flushing injection buffer: ${batch.length} profiles`);

    try {
      const result = await injector.injectMixedBatch(batch);

      // Count injected profiles regardless of skips/errors
      const injectedCount = result.injected || 0;
      if (injectedCount > 0) {
        this.stats.totalProfilesInjected += injectedCount;
        this.queue.stats.totalInjected += injectedCount;
        utils.saveQueue(this.queue);
        this.emit('injection-complete', { count: injectedCount });
      }

      // Propagate changes to all hardcoded stats across the codebase
      if (injectedCount > 0) {
        try {
          await codebaseUpdater.updateAll();
        } catch (updErr) {
          logger.error(`Codebase updater failed: ${updErr.message}`);
        }
      }

      // Only log as error if nothing was injected at all
      if (injectedCount === 0 && !result.success) {
        logger.error(`Batch injection failed completely: ${result.message || 'unknown'}`);
        // Put profiles back in the buffer for retry
        this.injectionBuffer.unshift(...batch);
      } else if (result.errors > 0) {
        logger.warn(`Injection batch: ${injectedCount} injected, ${result.errors} skipped (already exist)`);
      }
    } catch (e) {
      logger.error(`Injection flush threw: ${e.message}`);
      // Put profiles back in the buffer for retry
      this.injectionBuffer.unshift(...batch);
    } finally {
      this._injectionLock = false;
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  TIMERS & HEALTH CHECKS
  // ══════════════════════════════════════════════════════════════

  _startTimers() {
    // NOTE: No scan timer — the continuous cycle loop handles scanning.
    // We only need auto-scale, heartbeat, injection flush, and state save.

    // Auto-scale timer
    this.scaleTimer = setInterval(() => {
      this._autoScale();
    }, config.workers.scaleCheckInterval);

    // Heartbeat check timer
    this.heartbeatCheckTimer = setInterval(() => {
      this._checkWorkerHealth();
    }, config.workers.heartbeatInterval * 2);

    // Injection flush timer (flush every 30s regardless)
    this.injectionTimer = setInterval(() => {
      this._flushInjectionBuffer();
    }, 30000);

    // State save timer — persist stats every 15s
    this._stateTimer = setInterval(() => {
      this._saveState();
    }, 15000);
  }

  _stopTimers() {
    if (this.scanTimer) clearInterval(this.scanTimer);
    if (this.scaleTimer) clearInterval(this.scaleTimer);
    if (this.heartbeatCheckTimer) clearInterval(this.heartbeatCheckTimer);
    if (this.injectionTimer) clearInterval(this.injectionTimer);
    if (this._stateTimer) clearInterval(this._stateTimer);
    this.scanTimer = null;
    this.scaleTimer = null;
    this.heartbeatCheckTimer = null;
    this.injectionTimer = null;
    this._stateTimer = null;
  }

  /**
   * Check worker health via heartbeats
   */
  _checkWorkerHealth() {
    const now = Date.now();
    const timeout = config.workers.heartbeatTimeout;

    for (const [id, worker] of this.workers) {
      if (worker.status === 'shutting-down') continue;

      const timeSinceHeartbeat = now - worker.lastHeartbeat;
      if (timeSinceHeartbeat > timeout) {
        logger.warn(`Worker ${id} missed heartbeat (${utils.formatDuration(timeSinceHeartbeat)} since last)`);

        // Try pinging first
        try {
          worker.process.postMessage({ type: 'ping' });
        } catch (e) {
          // Worker IPC is dead — terminate it
          logger.error(`Worker ${id} IPC dead — terminating thread`);
          try { worker.terminated = true; worker.process.terminate(); } catch (_) {}
          this._handleWorkerDeath(id, null, 'heartbeat-timeout');
        }
      }

      // Check for stuck tasks
      if (worker.currentTask) {
        const taskInfo = this.processing.get(worker.currentTask.id);
        if (taskInfo && (now - taskInfo.startTime) > config.workers.taskTimeout) {
          logger.warn(`Worker ${id} has task stuck for ${utils.formatDuration(now - taskInfo.startTime)} — terminating`);
          try { worker.terminated = true; worker.process.terminate(); } catch (_) {}
        }
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  STATE & STATUS
  // ══════════════════════════════════════════════════════════════

  _saveState() {
    const state = {
      startedAt: this.startTime ? new Date(this.startTime).toISOString() : null,
      lastScan: this.lastScanTime,
      cycleCount: this.cycleCount,
      totalProfilesGenerated: this.stats.totalTasksProcessed,
      totalProfilesInjected: this.stats.totalProfilesInjected,
      totalErrors: this.stats.totalTasksFailed,
      activeWorkers: this.workers.size,
      stats: this.stats,
      scanner: scanner.getResults().stats,
    };
    utils.saveState(state);
  }

  /**
   * Get comprehensive status for display
   */
  getStatus() {
    const workerList = Array.from(this.workers.entries()).map(([id, w]) => ({
      id,
      pid: w.pid,
      status: w.status,
      currentTask: w.currentTask?.slug || null,
      tasksCompleted: w.tasksCompleted,
      tasksFailed: w.tasksFailed,
      uptime: utils.formatDuration(Date.now() - w.spawnedAt),
    }));

    return {
      running: this.running,
      paused: this.paused,
      uptime: this.startTime ? utils.formatDuration(Date.now() - this.startTime) : '0s',

      workers: {
        active: this.workers.size,
        min: config.workers.min,
        max: config.workers.max,
        list: workerList,
      },

      queue: {
        pending: this.queue.tasks.filter(t => t.status === 'pending').length,
        processing: this.processing.size,
        completed: this.queue.completed.length,
        failed: this.queue.failed.length,
        injectionBuffer: this.injectionBuffer.length,
      },

      stats: this.stats,
      scanner: scanner.stats,
      injector: injector.getStats(),
      hiveMind: hiveMind.getStats(),

      lastScan: this.lastScanTime,
      cycleCount: this.cycleCount,
    };
  }

  /**
   * Print a formatted status report to console
   */
  printStatus() {
    const status = this.getStatus();
    logger.divider('═', 60);
    logger.banner('SWARM STATUS REPORT');

    logger.table({
      'Status': status.running ? (status.paused ? 'PAUSED' : 'RUNNING') : 'STOPPED',
      'Uptime': status.uptime,
      'Cycle': status.cycleCount,
      'Last Scan': status.lastScan || 'never',
    });

    logger.divider();
    console.log('  WORKERS:');
    logger.table({
      'Active': `${status.workers.active}/${status.workers.max}`,
      'Spawned Total': status.stats.totalWorkersSpawned,
      'Deaths': status.stats.totalWorkerDeaths,
      'Restarts': status.stats.totalWorkerRestarts,
      'Peak': status.stats.peakWorkers,
    });

    for (const w of status.workers.list) {
      console.log(`    ${w.id} [${w.status}] PID:${w.pid} tasks:${w.tasksCompleted}/${w.tasksFailed} task:${w.currentTask || '-'} up:${w.uptime}`);
    }

    logger.divider();
    console.log('  QUEUE:');
    logger.table({
      'Pending': status.queue.pending,
      'Processing': status.queue.processing,
      'Completed': status.queue.completed,
      'Failed': status.queue.failed,
      'Injection Buffer': status.queue.injectionBuffer,
      'Peak Depth': status.stats.peakQueueDepth,
    });

    logger.divider();
    console.log('  PERFORMANCE:');
    logger.table({
      'Tasks Processed': status.stats.totalTasksProcessed,
      'Tasks Failed': status.stats.totalTasksFailed,
      'Profiles Injected': status.stats.totalProfilesInjected,
      'Avg Task Duration': utils.formatDuration(status.stats.avgTaskDuration),
    });

    logger.divider('═', 60);
  }
}

module.exports = new SwarmEngine();
module.exports.SwarmEngine = SwarmEngine;
