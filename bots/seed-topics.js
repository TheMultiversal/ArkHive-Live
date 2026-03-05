#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE TOPIC SEEDER — Mass inject investigation & entity topics
//  Seeds the queue with high-priority tasks for autonomous expansion
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const config = require('./config');

const QUEUE_PATH = config.paths.queue;

// ── Helper Functions ─────────────────────────────────────────────

function generateId() {
  return crypto.randomBytes(8).toString('hex');
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function makeTask(name, type, action = 'create', priority = 800, context = {}) {
  return {
    id: generateId(),
    slug: slugify(name),
    name,
    type,
    action,
    priority,
    status: 'pending',
    context,
    createdAt: new Date().toISOString(),
    attempts: 0,
  };
}

// ── Collect All Existing Slugs ───────────────────────────────────

function getExistingSlugs() {
  const slugs = new Set();
  const dataDirs = config.paths.dataDir;

  for (const [type, dir] of Object.entries(dataDirs)) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      // Match slug patterns: 'some-slug': { or "some-slug": {
      const regex = /['"]([a-z0-9-]+)['"]\s*:\s*\{/g;
      let m;
      while ((m = regex.exec(content)) !== null) {
        slugs.add(m[1]);
      }
    }
  }
  return slugs;
}

// ═══════════════════════════════════════════════════════════════════
//  MASSIVE TOPIC SEEDS
// ═══════════════════════════════════════════════════════════════════

// ── INVESTIGATIONS (Priority 900+) ──────────────────────────────

const INVESTIGATION_SEEDS = [
  // === Election & Democracy ===
  'Election Interference Networks',
  'Gerrymandering Systematic Voter Dilution',
  'Citizens United Dark Money Pipeline',
  'Electronic Voting Machine Vulnerabilities',
  'Foreign Election Interference Operations',
  'Voter Roll Purges and Suppression Tactics',
  'Super PAC Coordination Scandals',
  'Cambridge Analytica Global Operations',
  'Disinformation Warfare Infrastructure',
  'Electoral College Manipulation',

  // === Financial Crime ===
  'Financial Fraud Network Mapping',
  'Offshore Tax Haven Architecture',
  'Cryptocurrency Money Laundering Networks',
  'PPP Loan Fraud Epidemic',
  'Insider Trading Congressional Members',
  'Hedge Fund Market Manipulation',
  'Credit Default Swap Fraud',
  'SPAC Fraud and Regulatory Failures',
  'Predatory Lending Systematic Exploitation',
  'Penny Stock Pump and Dump Networks',
  'Wire Fraud Transnational Networks',
  'Corporate Tax Avoidance Schemes',
  'FTX Crypto Collapse Cover-Up',
  'Deutsche Bank Money Laundering',
  'Swiss Bank Secrecy Complicity',

  // === Human Trafficking ===
  'Human Trafficking Global Networks',
  'Labor Trafficking in Agriculture',
  'Child Exploitation Online Networks',
  'Epstein Network Full Mapping',
  'Trafficking Corridors Central America',
  'Sex Trafficking and Hotel Industry Complicity',
  'Forced Labor in US Prison System',
  'Domestic Servitude Hidden Victims',
  'Human Smuggling Cartel Operations',
  'Trafficking in Conflict Zones',

  // === RICO & Organized Crime ===
  'RICO Enterprise Criminal Networks',
  'Cartel Money Laundering Through Real Estate',
  'Russian Oligarch US Asset Networks',
  'Italian American Mafia Modern Operations',
  'Chinese Triad Financial Networks',
  'MS-13 Transnational Operations',
  'Corruption in Union Leadership',
  'Organized Crime in Construction Industry',
  'Drug Trafficking Supply Chain Analysis',
  'Casino Money Laundering Operations',

  // === Government Programs & Cover-Ups ===
  'MKUltra Full Declassification Analysis',
  'COINTELPRO Domestic Surveillance Legacy',
  'Operation Mockingbird Media Infiltration',
  'Operation Northwoods False Flag Planning',
  'Operation Paperclip Nazi Scientist Import',
  'Operation Condor Latin America Terror',
  'Operation Gladio Stay-Behind Networks',
  'Project MKULTRA Subproject Registry',
  'Operation Chaos Domestic Spying',
  'ECHELON Global Surveillance Network',
  'Five Eyes Intelligence Sharing Overreach',
  'NSA Stellarwind Warrantless Wiretapping',
  'CIA Black Site Torture Program',
  'Extraordinary Rendition Flight Logs',
  'Operation Fast and Furious Gun Walking',
  'Iran-Contra Full Financial Trail',
  'Gulf of Tonkin Fabricated Incident',
  'Pentagon Papers Full Implications',
  'Church Committee Revelations',
  'Operation PBSUCCESS Guatemala Coup',
  'Bay of Pigs Cover-Up',
  'Operation Ajax Iran Coup 1953',
  'PRISM Surveillance Program',
  'XKeyscore Universal Data Collection',

  // === Pharmaceutical & Health ===
  'Pharmaceutical Influence on FDA Decisions',
  'Opioid Crisis Manufacturer Liability',
  'Vaccine Injury Compensation Cover-Up',
  'Drug Price Gouging Insulin Crisis',
  'Clinical Trial Data Manipulation',
  'Pharmaceutical Lobbying Machine',
  'Big Pharma Patent Evergreening',
  'Generic Drug Price Fixing Conspiracy',
  'Hospital Price Transparency Failures',
  'Medicare Fraud Systematic Exploitation',
  'Pharmaceutical Ghost Writing',
  'Thalidomide to Vioxx Pattern of Harm',
  'SSRI Antidepressant Hidden Trial Data',
  'Tobacco Industry Playbook in Pharma',

  // === Regulatory Capture ===
  'Regulatory Capture Federal Agencies',
  'Revolving Door Lobbyist Pipeline',
  'Industry Self-Regulation Failures',
  'Corporate Capture of EPA',
  'Wall Street Capture of SEC',
  'Telecom Capture of FCC',
  'Fossil Fuel Capture of DOE',
  'Agribusiness Capture of USDA',
  'Banking Lobby Capture of Fed',
  'Tech Industry Capture of FTC',

  // === Suppressed Research ===
  'Depopulation Agendas Exposed',
  'Mind Control Programs Modern Era',
  'Fluoride Controversy Scientific Suppression',
  'EMF Radiation Research Suppression',
  'Glyphosate Cancer Link Cover-Up',
  'Lead Industry Crime Against Humanity',
  'Asbestos Cover-Up Decades of Death',
  'Agent Orange Dioxin Legacy',
  'DU Weapons Health Effects Suppression',
  'PFAS Forever Chemicals Cover-Up',
  'Microplastics Health Crisis',
  'Food Industry Nutritional Science Manipulation',
  'Sugar Industry Harvard Corruption',
  'Pesticide Bee Colony Collapse',

  // === Surveillance & Privacy ===
  'Mass Surveillance Domestic Architecture',
  'Social Credit System Western Adoption',
  'Facial Recognition Policing Bias',
  'Predictive Policing Algorithmic Racism',
  'Cell Phone Location Data Brokers',
  'Social Media Surveillance Partnerships',
  'Smart City Surveillance Infrastructure',
  'License Plate Reader Mass Collection',
  'DNA Database Privacy Violations',
  'Financial Surveillance Reporting System',

  // === Military Industrial Complex ===
  'Military Industrial Complex Profit Pipeline',
  'Defense Contractor Fraud and Waste',
  'Private Military Contractor Accountability',
  'Nuclear Weapons Complex Environmental Crime',
  'Drone Warfare Civilian Casualties',
  'Arms Export to Authoritarian Regimes',
  'Pentagon Budget Black Programs',
  'War Profiteering Iraq Afghanistan',
  'Military Base Environmental Contamination',
  'Depleted Uranium Battlefield Legacy',

  // === Technology & AI ===
  'Big Tech Antitrust Failures',
  'AI Surveillance State Infrastructure',
  'Social Media Radicalization Pipeline',
  'Algorithmic Discrimination in Lending',
  'Tech Worker Exploitation Visa System',
  'Data Broker Industry Exposé',
  'Election Manipulation Through Algorithms',
  'Deepfake Technology Weaponization',
  'Crypto Exchange Fraud Ecosystem',
  'Autonomous Weapons Development Race',

  // === Environmental Crime ===
  'Climate Change Denial Industry',
  'Fossil Fuel Subsidy Hidden Costs',
  'Oil Spill Cover-Up History',
  'Fracking Groundwater Contamination',
  'Chemical Plant Safety Failures',
  'Toxic Waste Dumping Developing Nations',
  'Deforestation Corporate Responsibility',
  'Ocean Pollution Industrial Scale',
  'Coal Ash Contamination Cover-Up',
  'Methane Emissions Underreporting',

  // === Media & Information ===
  'Media Consolidation Democracy Threat',
  'Operation Mockingbird Modern Successors',
  'Social Media Censorship Industrial Complex',
  'Journalistic Source Protection Failures',
  'Propaganda Networks Domestic Operations',
  'Think Tank Dark Money Influence',
  'Astroturfing Campaigns Corporate',
  'Local News Desert Information Crisis',
  'Foreign Influence Through Media Ownership',
  'Whistleblower Retaliation Systematic',

  // === Criminal Justice ===
  'Wrongful Convictions Systemic Crisis',
  'Death Penalty Innocence Cases',
  'Prosecutorial Misconduct Database',
  'Cash Bail System Economic Racism',
  'Civil Asset Forfeiture Abuse',
  'Qualified Immunity Police Accountability Gap',
  'Prison Industrial Complex Profit Motive',
  'Juvenile Justice System Failures',
  'Drug War Racial Disparities',
  'Police Union Misconduct Protection',
];

// ── AGENCIES (Priority 800) ────────────────────────────────────

const AGENCY_SEEDS = [
  { name: 'Defense Intelligence Agency', role: 'Military intelligence collection and analysis' },
  { name: 'National Reconnaissance Office', role: 'Satellite intelligence operations' },
  { name: 'National Geospatial-Intelligence Agency', role: 'Geospatial intelligence and mapping' },
  { name: 'Bureau of Alcohol Tobacco Firearms', role: 'Federal law enforcement and regulation' },
  { name: 'Drug Enforcement Administration', role: 'Federal drug law enforcement' },
  { name: 'Immigration and Customs Enforcement', role: 'Immigration enforcement and investigation' },
  { name: 'Customs and Border Protection', role: 'Border security and trade enforcement' },
  { name: 'Federal Communications Commission', role: 'Telecom and broadcast regulation' },
  { name: 'Federal Trade Commission', role: 'Consumer protection and antitrust' },
  { name: 'Securities and Exchange Commission', role: 'Securities regulation and enforcement' },
  { name: 'Consumer Financial Protection Bureau', role: 'Consumer financial protection' },
  { name: 'Environmental Protection Agency', role: 'Environmental regulation and enforcement' },
  { name: 'Food and Drug Administration', role: 'Food and drug safety regulation' },
  { name: 'Nuclear Regulatory Commission', role: 'Nuclear safety and licensing' },
  { name: 'Federal Election Commission', role: 'Campaign finance regulation' },
  { name: 'Office of the Director of National Intelligence', role: 'Intelligence community coordination' },
  { name: 'National Security Council', role: 'Presidential national security advice' },
  { name: 'Defense Advanced Research Projects Agency', role: 'Military technology development' },
  { name: 'US Marshals Service', role: 'Federal fugitive apprehension and court security' },
  { name: 'Internal Revenue Service', role: 'Federal tax collection and enforcement' },
  { name: 'Federal Bureau of Prisons', role: 'Federal prison system management' },
  { name: 'Transportation Security Administration', role: 'Transportation security screening' },
  { name: 'Secret Service', role: 'Presidential protection and financial crimes' },
  { name: 'US Coast Guard', role: 'Maritime law enforcement and safety' },
  { name: 'Government Accountability Office', role: 'Congressional watchdog and audit' },
  { name: 'Office of Inspector General DOJ', role: 'DOJ internal oversight and investigation' },
  { name: 'Office of Inspector General DOD', role: 'Pentagon waste fraud and abuse oversight' },
  { name: 'Federal Reserve Board', role: 'Monetary policy and banking regulation' },
  { name: 'Commodity Futures Trading Commission', role: 'Derivatives market regulation' },
  { name: 'Office of Foreign Assets Control', role: 'Sanctions enforcement' },
  { name: 'Financial Crimes Enforcement Network', role: 'Anti-money laundering enforcement' },
  { name: 'Cybersecurity Infrastructure Security Agency', role: 'Cybersecurity and critical infrastructure protection' },
  { name: 'National Institute of Standards and Technology', role: 'Technology standards and measurement' },
  { name: 'Bureau of Land Management', role: 'Federal land management' },
  { name: 'Army Corps of Engineers', role: 'Military and civil engineering' },
  { name: 'US Agency for International Development', role: 'Foreign aid and development' },
  { name: 'Voice of America', role: 'US government-funded international media' },
  { name: 'Peace Corps', role: 'International volunteer service' },
  { name: 'Small Business Administration', role: 'Small business support and loans' },
  { name: 'Federal Aviation Administration', role: 'Aviation safety and regulation' },
];

// ── CORPORATIONS (Priority 800) ─────────────────────────────────

const CORPORATION_SEEDS = [
  { name: 'Lockheed Martin', role: 'Defense contractor - largest in the world' },
  { name: 'Raytheon Technologies', role: 'Defense and aerospace systems manufacturer' },
  { name: 'Northrop Grumman', role: 'Defense technology and systems' },
  { name: 'General Dynamics', role: 'Aerospace and defense corporation' },
  { name: 'L3Harris Technologies', role: 'Defense electronics and communication' },
  { name: 'BAE Systems', role: 'British multinational defense corporation' },
  { name: 'Boeing Defense Division', role: 'Military aircraft and weapons systems' },
  { name: 'Palantir Technologies', role: 'Data analytics and surveillance platform' },
  { name: 'Booz Allen Hamilton', role: 'Government consulting and intelligence' },
  { name: 'SAIC', role: 'Government technology services' },
  { name: 'Leidos', role: 'Defense IT and national security' },
  { name: 'Blackstone Group', role: 'Private equity and real estate giant' },
  { name: 'Vanguard Group', role: 'Investment management titan' },
  { name: 'BlackRock Inc', role: 'Largest asset manager in the world' },
  { name: 'State Street Corporation', role: 'Financial services and custodian' },
  { name: 'Citadel LLC', role: 'Hedge fund and market maker' },
  { name: 'Bridgewater Associates', role: 'Largest hedge fund in the world' },
  { name: 'Koch Industries', role: 'Diversified conglomerate with political influence' },
  { name: 'ExxonMobil', role: 'Oil and gas supermajor' },
  { name: 'Chevron Corporation', role: 'Oil and gas supermajor' },
  { name: 'Shell Oil Company', role: 'Oil and gas supermajor' },
  { name: 'BP Corporation', role: 'Oil and gas supermajor' },
  { name: 'Monsanto Bayer', role: 'Agrochemical and biotech giant' },
  { name: 'Dow Chemical Company', role: 'Chemical manufacturing corporation' },
  { name: 'DuPont de Nemours', role: 'Chemical and materials conglomerate' },
  { name: '3M Company', role: 'Chemical manufacturer with PFAS liability' },
  { name: 'Johnson and Johnson', role: 'Healthcare products with legal liabilities' },
  { name: 'Purdue Pharma', role: 'Opioid manufacturer OxyContin' },
  { name: 'McKesson Corporation', role: 'Pharmaceutical distributor opioid chain' },
  { name: 'AmerisourceBergen', role: 'Drug distribution and opioid supply chain' },
  { name: 'Cardinal Health', role: 'Drug distribution and healthcare services' },
  { name: 'Pfizer Inc', role: 'Pharmaceutical corporation' },
  { name: 'Merck and Company', role: 'Pharmaceutical corporation' },
  { name: 'Novartis AG', role: 'Swiss pharmaceutical multinational' },
  { name: 'Meta Platforms', role: 'Social media and data collection empire' },
  { name: 'Alphabet Google', role: 'Technology and surveillance advertising' },
  { name: 'Amazon Corp', role: 'E-commerce and cloud computing monopoly' },
  { name: 'Apple Inc', role: 'Technology hardware and services' },
  { name: 'Microsoft Corporation', role: 'Software and cloud computing' },
  { name: 'Tesla Motors', role: 'Electric vehicles and space technology' },
  { name: 'Saudi Aramco', role: 'Saudi state oil company' },
  { name: 'Gazprom', role: 'Russian state gas corporation' },
  { name: 'Halliburton Company', role: 'Oilfield services and no-bid contracts' },
  { name: 'KBR Inc', role: 'Government services and defense contractor' },
  { name: 'Academi Blackwater', role: 'Private military contractor' },
  { name: 'CoreCivic', role: 'Private prison corporation' },
  { name: 'GEO Group', role: 'Private prison and detention operator' },
  { name: 'Bechtel Corporation', role: 'Engineering and construction megacorporation' },
  { name: 'Carlyle Group', role: 'Private equity with defense connections' },
  { name: 'Goldman Sachs', role: 'Investment banking powerhouse' },
  { name: 'JPMorgan Chase', role: 'Largest US bank by assets' },
  { name: 'Citigroup', role: 'Global banking conglomerate' },
  { name: 'Bank of America', role: 'Major US commercial bank' },
  { name: 'Wells Fargo', role: 'Banking with fraud scandals' },
  { name: 'Credit Suisse', role: 'Swiss bank with money laundering history' },
  { name: 'HSBC Holdings', role: 'Global bank with cartel money laundering' },
  { name: 'Deutsche Bank AG', role: 'German bank with Russian connections' },
  { name: 'Clearview AI', role: 'Facial recognition surveillance company' },
  { name: 'NSO Group', role: 'Pegasus spyware manufacturer' },
  { name: 'Huawei Technologies', role: 'Chinese telecom with espionage concerns' },
];

// ── ORGANIZATIONS (Priority 800) ────────────────────────────────

const ORGANIZATION_SEEDS = [
  { name: 'Bilderberg Group', desc: 'Annual private conference of political and financial elites' },
  { name: 'Council on Foreign Relations', desc: 'US foreign policy think tank and influence network' },
  { name: 'Trilateral Commission', desc: 'Elite private discussion group est. 1973' },
  { name: 'World Economic Forum', desc: 'International organization promoting global governance' },
  { name: 'Bohemian Club', desc: 'Exclusive private club with political elite membership' },
  { name: 'Skull and Bones Society', desc: 'Yale secret society with political connections' },
  { name: 'Heritage Foundation', desc: 'Conservative think tank with policy influence' },
  { name: 'Federalist Society', desc: 'Legal organization shaping federal judiciary' },
  { name: 'American Legislative Exchange Council', desc: 'Corporate-funded model legislation factory' },
  { name: 'Brookings Institution', desc: 'Centrist think tank with revolving door' },
  { name: 'RAND Corporation', desc: 'Defense-adjacent research and policy institute' },
  { name: 'Atlantic Council', desc: 'Think tank promoting transatlantic cooperation' },
  { name: 'Council of the Americas', desc: 'Business organization for Western Hemisphere policy' },
  { name: 'Business Roundtable', desc: 'CEO lobby organization' },
  { name: 'US Chamber of Commerce', desc: 'Largest business lobbying group' },
  { name: 'American Petroleum Institute', desc: 'Oil and gas industry trade group' },
  { name: 'PhRMA', desc: 'Pharmaceutical industry lobbying group' },
  { name: 'National Rifle Association', desc: 'Gun lobby with political spending power' },
  { name: 'AIPAC', desc: 'Pro-Israel lobbying organization' },
  { name: 'Koch Network Organizations', desc: 'Political donor network with vast influence' },
  { name: 'Open Society Foundations', desc: 'Soros philanthropy network' },
  { name: 'Clinton Foundation', desc: 'Charitable foundation with political connections' },
  { name: 'Opus Dei', desc: 'Catholic organization with political influence' },
  { name: 'Knights of Malta', desc: 'Catholic order with intelligence community ties' },
  { name: 'Chatham House', desc: 'UK-based international affairs think tank' },
  { name: 'Club of Rome', desc: 'Global think tank on population and resources' },
  { name: 'World Health Organization', desc: 'UN health agency with pandemic authority' },
  { name: 'International Monetary Fund', desc: 'Global financial institution' },
  { name: 'World Bank Group', desc: 'International development financial institution' },
  { name: 'Bank for International Settlements', desc: 'Central bank of central banks' },
  { name: 'Project for the New American Century', desc: 'Neoconservative think tank behind Iraq War' },
  { name: 'Center for Strategic International Studies', desc: 'Bipartisan policy think tank' },
  { name: 'Hudson Institute', desc: 'Conservative foreign policy think tank' },
  { name: 'American Enterprise Institute', desc: 'Conservative policy think tank' },
  { name: 'Hoover Institution', desc: 'Conservative think tank at Stanford' },
];

// ── INDIVIDUALS (Priority 700-900) ──────────────────────────────

const INDIVIDUAL_SEEDS = [
  // Intelligence Community
  { name: 'Allen Dulles', title: 'Former CIA Director', priority: 900 },
  { name: 'James Jesus Angleton', title: 'CIA Chief of Counterintelligence', priority: 850 },
  { name: 'Sidney Gottlieb', title: 'MKUltra Program Director', priority: 900 },
  { name: 'Richard Helms', title: 'Former CIA Director', priority: 850 },
  { name: 'William Casey', title: 'CIA Director Iran-Contra', priority: 850 },
  { name: 'George HW Bush', title: 'Former CIA Director and President', priority: 900 },
  { name: 'Michael Hayden', title: 'Former CIA and NSA Director', priority: 800 },
  { name: 'John Brennan', title: 'Former CIA Director', priority: 800 },
  { name: 'James Clapper', title: 'Former Director of National Intelligence', priority: 800 },
  { name: 'Keith Alexander', title: 'Former NSA Director', priority: 800 },
  { name: 'Edward Snowden', title: 'NSA Whistleblower', priority: 850 },
  { name: 'Chelsea Manning', title: 'Army Intelligence Whistleblower', priority: 800 },
  { name: 'Daniel Ellsberg', title: 'Pentagon Papers Whistleblower', priority: 850 },

  // Political Figures
  { name: 'Henry Kissinger', title: 'Former Secretary of State War Criminal', priority: 900 },
  { name: 'Dick Cheney', title: 'Former Vice President', priority: 900 },
  { name: 'Donald Rumsfeld', title: 'Former Secretary of Defense', priority: 850 },
  { name: 'Paul Wolfowitz', title: 'Iraq War Architect', priority: 850 },
  { name: 'John Bolton', title: 'War Hawk National Security Advisor', priority: 800 },
  { name: 'Elliott Abrams', title: 'Iran-Contra Convict', priority: 850 },
  { name: 'Oliver North', title: 'Iran-Contra Central Figure', priority: 850 },
  { name: 'John Poindexter', title: 'Total Information Awareness Creator', priority: 800 },
  { name: 'Robert McNamara', title: 'Vietnam War Secretary of Defense', priority: 850 },
  { name: 'J Edgar Hoover', title: 'FBI Director COINTELPRO', priority: 900 },
  { name: 'Joseph McCarthy', title: 'Red Scare Senator', priority: 850 },
  { name: 'Roger Stone', title: 'Political Operative and Dirty Trickster', priority: 800 },
  { name: 'Steve Bannon', title: 'Far-Right Political Strategist', priority: 800 },
  { name: 'Stephen Miller', title: 'Immigration Policy Architect', priority: 800 },
  { name: 'Bill Barr', title: 'Attorney General Cover-Up Artist', priority: 800 },
  { name: 'Clarence Thomas', title: 'Supreme Court Justice Ethics Scandal', priority: 850 },
  { name: 'Samuel Alito', title: 'Supreme Court Justice', priority: 800 },
  { name: 'Leonard Leo', title: 'Federalist Society Judicial Kingmaker', priority: 850 },
  { name: 'Harlan Crow', title: 'Billionaire Justice Benefactor', priority: 800 },

  // Corporate Figures
  { name: 'Larry Fink', title: 'BlackRock CEO', priority: 800 },
  { name: 'Jamie Dimon', title: 'JPMorgan Chase CEO', priority: 800 },
  { name: 'Lloyd Blankfein', title: 'Former Goldman Sachs CEO', priority: 800 },
  { name: 'Ken Griffin', title: 'Citadel Hedge Fund CEO', priority: 800 },
  { name: 'Peter Thiel', title: 'Palantir Co-Founder Surveillance Tech', priority: 850 },
  { name: 'Elon Musk', title: 'Tech Oligarch', priority: 850 },
  { name: 'Jeff Bezos', title: 'Amazon Founder and Media Owner', priority: 800 },
  { name: 'Mark Zuckerberg', title: 'Meta CEO Data Harvesting', priority: 800 },
  { name: 'Sundar Pichai', title: 'Alphabet CEO Surveillance Advertising', priority: 750 },
  { name: 'Sam Bankman-Fried', title: 'FTX Crypto Fraud Architect', priority: 850 },
  { name: 'Elizabeth Holmes', title: 'Theranos Fraud CEO', priority: 800 },
  { name: 'Richard Sackler', title: 'Purdue Pharma Opioid Dynasty', priority: 900 },
  { name: 'Arthur Sackler', title: 'Opioid Marketing Pioneer', priority: 850 },
  { name: 'David Koch', title: 'Koch Industries Political Money', priority: 850 },
  { name: 'Charles Koch', title: 'Koch Industries CEO Political Network', priority: 850 },
  { name: 'Rupert Murdoch', title: 'Media Mogul Propaganda Empire', priority: 900 },
  { name: 'Erik Prince', title: 'Blackwater Founder Private Military', priority: 900 },
  { name: 'Betsy DeVos', title: 'Education Secretary Prince Family', priority: 800 },

  // International Figures
  { name: 'Mohammed bin Salman', title: 'Saudi Crown Prince', priority: 850 },
  { name: 'Vladimir Putin', title: 'Russian President', priority: 850 },
  { name: 'Augusto Pinochet', title: 'Chilean Dictator CIA-Backed', priority: 850 },
  { name: 'Manuel Noriega', title: 'Panama Dictator CIA Asset', priority: 800 },
  { name: 'Saddam Hussein', title: 'Former US Ally and Target', priority: 800 },
  { name: 'Osama bin Laden', title: 'Al Qaeda Leader Former CIA Contact', priority: 850 },
  { name: 'Ghislaine Maxwell', title: 'Trafficking Network Operator', priority: 900 },
  { name: 'Roman Abramovich', title: 'Russian Oligarch', priority: 800 },
  { name: 'Oleg Deripaska', title: 'Russian Oligarch Political Connections', priority: 800 },
];

// ═══════════════════════════════════════════════════════════════════
//  MAIN SEEDER
// ═══════════════════════════════════════════════════════════════════

function main() {
  console.log('\n\x1b[38;2;214;69;69m═══════════════════════════════════════════════════════\x1b[0m');
  console.log('\x1b[38;2;214;69;69m  ARKHIVE TOPIC SEEDER — Mass Content Injection\x1b[0m');
  console.log('\x1b[38;2;214;69;69m═══════════════════════════════════════════════════════\x1b[0m\n');

  // Load existing queue
  let queue;
  try {
    queue = JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'));
  } catch {
    queue = { tasks: [], completed: [], failed: [], stats: { totalGenerated: 0, totalFailed: 0, totalInjected: 0 } };
  }

  // Get all existing slugs across all data dirs
  const existingSlugs = getExistingSlugs();
  console.log(`  Found ${existingSlugs.size} existing entity slugs in data files`);

  // Get slugs already in queue
  const queueSlugs = new Set([
    ...queue.tasks.map(t => t.slug),
    ...(queue.completed || []).map(t => t.slug),
  ]);
  console.log(`  Found ${queueSlugs.size} slugs already in queue\n`);

  let seeded = 0;
  let skipped = 0;

  // Seed investigations
  console.log('  \x1b[33m📋 Seeding Investigations...\x1b[0m');
  for (const name of INVESTIGATION_SEEDS) {
    const slug = slugify(name);
    if (existingSlugs.has(slug) || queueSlugs.has(slug)) {
      skipped++;
      continue;
    }
    queue.tasks.push(makeTask(name, 'investigation', 'create', 900, {
      referencedBy: [],
      relationships: [],
      seedCategory: 'investigation',
    }));
    queueSlugs.add(slug);
    seeded++;
  }
  console.log(`    → ${seeded} investigations queued`);

  // Seed agencies
  let agencyCount = 0;
  console.log('  \x1b[33m🏛️  Seeding Agencies...\x1b[0m');
  for (const { name, role } of AGENCY_SEEDS) {
    const slug = slugify(name);
    if (existingSlugs.has(slug) || queueSlugs.has(slug)) {
      skipped++;
      continue;
    }
    queue.tasks.push(makeTask(name, 'agency', 'create', 800, {
      referencedBy: [],
      relationships: [],
      seedCategory: 'agency',
      role,
    }));
    queueSlugs.add(slug);
    agencyCount++;
    seeded++;
  }
  console.log(`    → ${agencyCount} agencies queued`);

  // Seed corporations
  let corpCount = 0;
  console.log('  \x1b[33m🏢 Seeding Corporations...\x1b[0m');
  for (const { name, role } of CORPORATION_SEEDS) {
    const slug = slugify(name);
    if (existingSlugs.has(slug) || queueSlugs.has(slug)) {
      skipped++;
      continue;
    }
    queue.tasks.push(makeTask(name, 'corporation', 'create', 800, {
      referencedBy: [],
      relationships: [],
      seedCategory: 'corporation',
      role,
    }));
    queueSlugs.add(slug);
    corpCount++;
    seeded++;
  }
  console.log(`    → ${corpCount} corporations queued`);

  // Seed organizations
  let orgCount = 0;
  console.log('  \x1b[33m🔗 Seeding Organizations...\x1b[0m');
  for (const { name, desc } of ORGANIZATION_SEEDS) {
    const slug = slugify(name);
    if (existingSlugs.has(slug) || queueSlugs.has(slug)) {
      skipped++;
      continue;
    }
    queue.tasks.push(makeTask(name, 'organization', 'create', 800, {
      referencedBy: [],
      relationships: [],
      seedCategory: 'organization',
      description: desc,
    }));
    queueSlugs.add(slug);
    orgCount++;
    seeded++;
  }
  console.log(`    → ${orgCount} organizations queued`);

  // Seed individuals
  let indivCount = 0;
  console.log('  \x1b[33m👤 Seeding Individuals...\x1b[0m');
  for (const { name, title, priority } of INDIVIDUAL_SEEDS) {
    const slug = slugify(name);
    if (existingSlugs.has(slug) || queueSlugs.has(slug)) {
      skipped++;
      continue;
    }
    queue.tasks.push(makeTask(name, 'individual', 'create', priority, {
      referencedBy: [],
      relationships: [],
      seedCategory: 'individual',
      title,
    }));
    queueSlugs.add(slug);
    indivCount++;
    seeded++;
  }
  console.log(`    → ${indivCount} individuals queued`);

  // Sort by priority (highest first)
  queue.tasks.sort((a, b) => b.priority - a.priority);

  // Save queue
  fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2));

  console.log('\n\x1b[38;2;214;69;69m═══════════════════════════════════════════════════════\x1b[0m');
  console.log(`  \x1b[32m✓ SEEDED: ${seeded} new tasks\x1b[0m`);
  console.log(`  \x1b[90m⊘ SKIPPED: ${skipped} (already exist)\x1b[0m`);
  console.log(`  \x1b[36m≡ TOTAL QUEUE: ${queue.tasks.length} pending tasks\x1b[0m`);
  console.log('\x1b[38;2;214;69;69m═══════════════════════════════════════════════════════\x1b[0m\n');
}

main();
