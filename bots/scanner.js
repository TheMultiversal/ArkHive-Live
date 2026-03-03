// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — PROFILE SCANNER
//  All-seeing eye: finds every gap, every missing connection
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('./logger').child('SCANNER');
const utils = require('./utils');

class Scanner {
  constructor() {
    this.existingSlugs = new Map();    // type -> Set<slug>
    this.allReferences = new Map();    // slug -> { name, type, referencedBy, relationships }
    this.missingProfiles = new Map();  // slug -> { name, type, priority, referencedBy, relationships }
    this.sparseProfiles = [];          // slugs with incomplete data
    this.orphanProfiles = [];          // slugs with zero inbound links
    this.brokenLinks = [];             // { source, target, type }
    this.lastScanTime = null;
    this.scanCount = 0;
    this.stats = {
      totalExisting: 0,
      totalReferences: 0,
      totalMissing: 0,
      totalSparse: 0,
      totalOrphans: 0,
      totalBrokenLinks: 0,
    };
  }

  /**
   * Full scan: parse all entity pages and find missing profiles
   * This is the comprehensive scan that rebuilds the entire view
   */
  async fullScan() {
    const startTime = Date.now();
    this.scanCount++;

    logger.scan(`Starting full scan #${this.scanCount}...`);
    logger.divider();

    // Reset state
    this.existingSlugs.clear();
    this.allReferences.clear();
    this.missingProfiles.clear();
    this.sparseProfiles = [];
    this.orphanProfiles = [];
    this.brokenLinks = [];

    // Scan each entity type
    await this._scanIndividuals();
    await this._scanAgencies();
    await this._scanCorporations();
    await this._scanInvestigations();

    // Cross-reference: find missing profiles
    this._crossReference();

    // Calculate stats
    this._calculateStats();

    const elapsed = Date.now() - startTime;
    this.lastScanTime = new Date().toISOString();

    logger.scan(`Full scan complete in ${utils.formatDuration(elapsed)}`);
    logger.table({
      'Existing Profiles': utils.formatNumber(this.stats.totalExisting),
      'Total References': utils.formatNumber(this.stats.totalReferences),
      'Missing Profiles': utils.formatNumber(this.stats.totalMissing),
      'Sparse Profiles': utils.formatNumber(this.stats.totalSparse),
      'Orphan Profiles': utils.formatNumber(this.stats.totalOrphans),
      'Broken Links': utils.formatNumber(this.stats.totalBrokenLinks),
    });
    logger.divider();

    return this.getResults();
  }

  /**
   * Quick delta scan: only check for new references since last scan
   * Much faster than full scan
   */
  async quickScan() {
    if (!this.lastScanTime) {
      return this.fullScan();
    }

    logger.scan('Running quick delta scan...');
    const startTime = Date.now();

    // Re-read individuals file for new entries
    const content = utils.readFileSafe(config.paths.individuals);
    if (!content) return this.getResults();

    const currentSlugs = utils.extractExistingIndividualSlugs(content);
    const previousSlugs = this.existingSlugs.get('individual') || new Set();

    const newSlugs = currentSlugs.filter(s => !previousSlugs.has(s));
    if (newSlugs.length > 0) {
      logger.scan(`Found ${newSlugs.length} new profiles since last scan`);
      this.existingSlugs.set('individual', new Set(currentSlugs));

      // Re-do cross-reference for new entries
      this._crossReference();
      this._calculateStats();
    }

    logger.scan(`Quick scan complete in ${utils.formatDuration(Date.now() - startTime)}`);
    return this.getResults();
  }

  // ── Entity Type Scanners ───────────────────────────────────────

  async _scanIndividuals() {
    logger.scan('Scanning individuals...');
    const content = utils.readFileSafe(config.paths.individuals);
    if (!content) {
      logger.warn('Could not read individuals page');
      return;
    }

    // Extract existing profile slugs
    const slugs = utils.extractExistingIndividualSlugs(content);
    this.existingSlugs.set('individual', new Set(slugs));
    logger.scan(`Found ${slugs.length} individual profiles`);

    // Extract all known associate references
    const associates = utils.extractKnownAssociateLinks(content);
    for (const [slug, data] of associates) {
      if (!this.allReferences.has(slug)) {
        this.allReferences.set(slug, {
          name: data.name,
          type: 'individual',
          referencedBy: [],
          relationships: [],
        });
      }
      const ref = this.allReferences.get(slug);
      for (const rb of data.referencedBy) {
        if (!ref.referencedBy.includes(rb)) ref.referencedBy.push(rb);
      }
      for (const rel of data.relationships) {
        if (!ref.relationships.includes(rel)) ref.relationships.push(rel);
      }
    }

    logger.scan(`Found ${associates.size} unique associate references`);

    // Find sparse profiles (profiles that exist but are thin)
    this._findSparseProfiles(content, slugs);
  }

  async _scanAgencies() {
    logger.scan('Scanning agencies...');
    const content = utils.readFileSafe(config.paths.agencies);
    if (!content) return;

    // Extract agency slugs from the page
    const slugRegex = /slug:\s*'([a-z0-9-]+)'/g;
    const slugs = new Set();
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.add(match[1]);
    }
    this.existingSlugs.set('agency', slugs);

    // Extract cross-references
    const affiliations = utils.extractAffiliationLinks(content);
    for (const aff of affiliations) {
      this._addReference(aff.slug, aff.type, aff.name, 'agencies-page');
    }

    logger.scan(`Found ${slugs.size} agencies`);
  }

  async _scanCorporations() {
    logger.scan('Scanning corporations...');
    const content = utils.readFileSafe(config.paths.corporations);
    if (!content) return;

    const slugRegex = /slug:\s*'([a-z0-9-]+)'/g;
    const slugs = new Set();
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.add(match[1]);
    }
    this.existingSlugs.set('corporation', slugs);

    const affiliations = utils.extractAffiliationLinks(content);
    for (const aff of affiliations) {
      this._addReference(aff.slug, aff.type, aff.name, 'corporations-page');
    }

    logger.scan(`Found ${slugs.size} corporations`);
  }

  async _scanInvestigations() {
    logger.scan('Scanning investigations...');
    const content = utils.readFileSafe(config.paths.investigations);
    if (!content) return;

    // Extract investigation slugs
    const slugRegex = /(?:^|\n)\s*'([a-z0-9-]+)'\s*:\s*\{/g;
    const slugs = new Set();
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.add(match[1]);
    }
    this.existingSlugs.set('investigation', slugs);

    // Extract entity references from investigations
    const affiliations = utils.extractAffiliationLinks(content);
    for (const aff of affiliations) {
      this._addReference(aff.slug, aff.type, aff.name, 'investigations-page');
    }

    logger.scan(`Found ${slugs.size} investigations`);
  }

  // ── Cross-Reference Analysis ───────────────────────────────────

  _addReference(slug, type, name, source) {
    // Normalize type: plural -> singular
    const normalizedType = this._normalizeType(type);

    if (!this.allReferences.has(slug)) {
      this.allReferences.set(slug, {
        name: name || utils.slugToName(slug),
        type: normalizedType,
        referencedBy: [],
        relationships: [],
      });
    }
    const ref = this.allReferences.get(slug);
    if (!ref.referencedBy.includes(source)) {
      ref.referencedBy.push(source);
    }
  }

  /**
   * Normalize entity type strings (plural -> singular)
   */
  _normalizeType(type) {
    if (!type) return 'individual';
    const typeMap = {
      'individuals': 'individual',
      'agencies': 'agency',
      'corporations': 'corporation',
      'organizations': 'organization',
      'investigations': 'investigation',
    };
    return typeMap[type] || type;
  }

  _crossReference() {
    this.missingProfiles.clear();

    // Build a combined set of ALL existing slugs across all types
    const allExisting = new Set();
    for (const slugSet of this.existingSlugs.values()) {
      for (const slug of slugSet) {
        allExisting.add(slug);
      }
    }

    for (const [slug, refData] of this.allReferences) {
      const type = refData.type || 'individual';

      // Check if this slug exists in ANY entity type
      // (entities can be referenced as one type but exist as another)
      if (!allExisting.has(slug)) {
        // This reference points to a profile that doesn't exist anywhere
        const priority = this._calculatePriority(slug, refData);
        this.missingProfiles.set(slug, {
          name: refData.name,
          type,
          priority,
          referencedBy: refData.referencedBy,
          relationships: refData.relationships,
        });
      }
    }

    // Find orphan profiles (exist but have zero inbound references)
    const allReferenced = new Set(this.allReferences.keys());
    this.orphanProfiles = [];
    for (const [type, slugSet] of this.existingSlugs) {
      for (const slug of slugSet) {
        if (!allReferenced.has(slug)) {
          this.orphanProfiles.push({ slug, type });
        }
      }
    }
  }

  _calculatePriority(slug, refData) {
    let priority = 0;

    // More inbound references = higher priority
    priority += refData.referencedBy.length * config.scanner.priorityWeights.inboundLinks;

    // Base priority for being missing
    priority += config.scanner.priorityWeights.missingProfile;

    // Boost based on who references this entity
    // If referenced by high-profile entities, boost further
    for (const refBy of refData.referencedBy) {
      // Give extra weight if referenced by many different entities
      priority += 5;
    }

    return Math.min(priority, 1000); // Cap at 1000
  }

  /**
   * Find profiles that exist but are sparse (need enrichment)
   */
  _findSparseProfiles(content, slugs) {
    this.sparseProfiles = [];

    for (const slug of slugs) {
      // Find the profile block and check its size
      const profileStart = content.indexOf(`'${slug}': {`);
      if (profileStart === -1) continue;

      // Get a chunk of the profile to analyze
      const chunk = content.substring(profileStart, profileStart + 2000);

      // Check for indicators of sparseness
      const hasControversies = /controversies:\s*\[/.test(chunk) && !/controversies:\s*\[\s*\]/.test(chunk);
      const hasSources = /sources:\s*\[/.test(chunk) && !/sources:\s*\[\s*\]/.test(chunk);
      const hasTimeline = /timeline:\s*\[/.test(chunk) && !/timeline:\s*\[\s*\]/.test(chunk);

      if (!hasControversies || !hasSources || !hasTimeline) {
        this.sparseProfiles.push(slug);
      }
    }
  }

  _calculateStats() {
    let totalExisting = 0;
    for (const slugSet of this.existingSlugs.values()) {
      totalExisting += slugSet.size || 0;
    }

    this.stats = {
      totalExisting,
      totalReferences: this.allReferences.size,
      totalMissing: this.missingProfiles.size,
      totalSparse: this.sparseProfiles.length,
      totalOrphans: this.orphanProfiles.length,
      totalBrokenLinks: this.brokenLinks.length,
    };
  }

  // ── Task Generation ────────────────────────────────────────────

  /**
   * Generate a prioritized task list from scan results
   * Returns array of task objects sorted by priority (descending)
   */
  generateTasks(maxTasks = null) {
    const max = maxTasks || config.scanner.maxProfilesPerCycle;
    const tasks = [];

    // 1. Missing profiles (highest priority)
    const sortedMissing = Array.from(this.missingProfiles.entries())
      .sort((a, b) => b[1].priority - a[1].priority)
      .slice(0, max);

    for (const [slug, data] of sortedMissing) {
      tasks.push({
        id: utils.generateId(),
        slug,
        name: data.name,
        type: data.type,
        action: 'create',
        priority: data.priority,
        status: 'pending',
        context: {
          referencedBy: data.referencedBy,
          relationships: data.relationships,
        },
        createdAt: new Date().toISOString(),
        attempts: 0,
      });
    }

    // 2. Sparse profiles (need enrichment)
    if (config.generation.enrichExisting && tasks.length < max) {
      const sparseCount = Math.min(
        this.sparseProfiles.length,
        max - tasks.length
      );
      for (let i = 0; i < sparseCount; i++) {
        tasks.push({
          id: utils.generateId(),
          slug: this.sparseProfiles[i],
          name: utils.slugToName(this.sparseProfiles[i]),
          type: 'individual',
          action: 'enrich',
          priority: config.scanner.priorityWeights.stubProfile,
          status: 'pending',
          context: {},
          createdAt: new Date().toISOString(),
          attempts: 0,
        });
      }
    }

    // Sort by priority descending
    tasks.sort((a, b) => b.priority - a.priority);

    logger.scan(`Generated ${tasks.length} tasks (${sortedMissing.length} create, ${tasks.length - sortedMissing.length} enrich)`);

    return tasks;
  }

  /**
   * Get scan results summary
   */
  getResults() {
    return {
      stats: this.stats,
      existingSlugs: Object.fromEntries(
        Array.from(this.existingSlugs.entries()).map(([k, v]) => [k, Array.from(v)])
      ),
      missingProfiles: Array.from(this.missingProfiles.entries()).map(([slug, data]) => ({
        slug,
        ...data,
      })),
      sparseProfiles: this.sparseProfiles,
      orphanProfiles: this.orphanProfiles,
      brokenLinks: this.brokenLinks,
      lastScanTime: this.lastScanTime,
      scanCount: this.scanCount,
    };
  }

  /**
   * Get a quick summary string for display
   */
  getSummary() {
    const s = this.stats;
    return `${s.totalExisting} profiles | ${s.totalMissing} missing | ${s.totalSparse} sparse | ${s.totalOrphans} orphans`;
  }
}

module.exports = new Scanner();
module.exports.Scanner = Scanner;
