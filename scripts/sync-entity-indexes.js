const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── TASK 1: Add 6 missing agencies ──────────────────────────────────────────
function syncAgencies() {
  const file = path.join(ROOT, 'src/app/entities/agencies/page.tsx');
  let src = fs.readFileSync(file, 'utf8');

  const missingSlugs = [
    'interior-department',
    'department-of-defense',
    'department-of-state',
    'baltimore-pd',
    'lapd-ig',
    'us-marshals',
  ];

  // Check which are already present
  const toAdd = missingSlugs.filter(s => !src.includes(`slug: "${s}"`));
  if (toAdd.length === 0) {
    console.log('[agencies] All slugs already present, skipping.');
    return;
  }

  const newEntries = [];

  if (toAdd.includes('interior-department')) {
    newEntries.push(`  {
    id: "76",
    slug: "interior-department",
    name: "U.S. Department of the Interior",
    type: "agency",
    description: "Manages federal lands and natural resources. Under Trump, aggressively expanded fossil fuel extraction, rolled back environmental protections, and was at the center of the Lafayette Square clearing operation.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('department-of-defense')) {
    newEntries.push(`  {
    id: "77",
    slug: "department-of-defense",
    name: "United States Department of Defense",
    type: "agency",
    description: "Responsible for coordinating all agencies and functions related to national security. Failed audits with trillions in unaccounted spending, Abu Ghraib scandal, civilian drone casualties, and January 6 inaction.",
    role: "Federal Executive Department",
    investigationCount: 3,
    riskLevel: "extreme",
  }`);
  }

  if (toAdd.includes('department-of-state')) {
    newEntries.push(`  {
    id: "78",
    slug: "department-of-state",
    name: "United States Department of State",
    type: "agency",
    description: "Conducts foreign policy and diplomacy. Under Trump, hollowed out, politicized, and used to pressure Ukraine leading to the first impeachment. Career diplomats purged.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('baltimore-pd')) {
    newEntries.push(`  {
    id: "79",
    slug: "baltimore-pd",
    name: "Baltimore Police Department",
    type: "agency",
    description: "Documented deploying Stingray surveillance devices without warrants. Subject to DOJ consent decree after systemic civil rights violations. Gun Trace Task Force corruption scandal.",
    role: "Municipal Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('lapd-ig')) {
    newEntries.push(`  {
    id: "80",
    slug: "lapd-ig",
    name: "LAPD Inspector General",
    type: "agency",
    description: "Provides civilian oversight of the LAPD, including audits of PredPol predictive policing that revealed racial bias in deployment and disproportionate targeting of minority communities.",
    role: "Civilian Oversight",
    investigationCount: 1,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('us-marshals')) {
    newEntries.push(`  {
    id: "81",
    slug: "us-marshals",
    name: "United States Marshals Service",
    type: "agency",
    description: "Oldest federal law enforcement agency, involved in fugitive operations, witness protection, and asset forfeiture. Documented using Stingray cell-site simulator technology for warrantless surveillance.",
    role: "Federal Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  }`);
  }

  // Insert before the closing ];
  const insertionPoint = '];';
  const idx = src.indexOf(insertionPoint);
  if (idx === -1) {
    console.error('[agencies] Could not find array closing ];');
    return;
  }

  const before = src.slice(0, idx);
  const after = src.slice(idx);

  src = before + newEntries.join(',\n') + ',\n' + after;
  fs.writeFileSync(file, src, 'utf8');

  // Count entries after
  const count = (src.match(/slug:\s*"/g) || []).length;
  console.log(`[agencies] Added ${newEntries.length} entries. Total entries now: ${count}`);
}

// ── TASK 2: Add 5 missing corporations ──────────────────────────────────────
function syncCorporations() {
  const file = path.join(ROOT, 'src/app/entities/corporations/page.tsx');
  let src = fs.readFileSync(file, 'utf8');

  const missingSlugs = [
    '3m-company',
    'arthur-andersen',
    'dominion-voting',
    'harris-corporation',
    'raytheon',
  ];

  const toAdd = missingSlugs.filter(s => !src.includes(`slug: "${s}"`));
  if (toAdd.length === 0) {
    console.log('[corporations] All slugs already present, skipping.');
    return;
  }

  const newEntries = [];

  if (toAdd.includes('3m-company')) {
    newEntries.push(`  {
    id: "3m-company",
    slug: "3m-company",
    name: "3M Company",
    type: "corporation",
    description: "One of the largest producers of PFAS \\"forever chemicals.\\" Knowingly manufactured and disposed of PFAS compounds that contaminated water supplies nationwide. Internal documents revealed decades of concealed health risks. Multi-billion dollar settlements.",
    role: "Manufacturing / Chemicals",
    investigationCount: 1,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('arthur-andersen')) {
    newEntries.push(`  {
    id: "arthur-andersen",
    slug: "arthur-andersen",
    name: "Arthur Andersen LLP",
    type: "corporation",
    description: "One of the Big Five accounting firms that served as Enron's auditor. Convicted of obstruction of justice for shredding Enron documents. Firm collapsed  -  85,000 employees lost jobs. Led to Sarbanes-Oxley Act.",
    role: "Accounting / Professional Services (Dissolved)",
    investigationCount: 1,
    riskLevel: "extreme",
  }`);
  }

  if (toAdd.includes('dominion-voting')) {
    newEntries.push(`  {
    id: "dominion-voting",
    slug: "dominion-voting",
    name: "Dominion Voting Systems",
    type: "corporation",
    description: "Voting technology company targeted by baseless conspiracy theories after the 2020 election. Won a record $787.5 million defamation settlement from Fox News. Dominion was the VICTIM of disinformation.",
    role: "Election Technology",
    investigationCount: 2,
    riskLevel: "low",
  }`);
  }

  if (toAdd.includes('harris-corporation')) {
    newEntries.push(`  {
    id: "harris-corporation",
    slug: "harris-corporation",
    name: "Harris Corporation (now L3Harris Technologies)",
    type: "corporation",
    description: "Manufacturer of the StingRay cell-site simulator used by law enforcement for warrantless surveillance. Requires agencies to sign non-disclosure agreements hiding the technology from courts and the public.",
    role: "Defense / Surveillance Technology",
    investigationCount: 1,
    riskLevel: "high",
  }`);
  }

  if (toAdd.includes('raytheon')) {
    newEntries.push(`  {
    id: "raytheon-company",
    slug: "raytheon",
    name: "Raytheon Company (now RTX Corporation)",
    type: "corporation",
    description: "Major defense contractor whose precision-guided munitions were used in Saudi coalition bombing of Yemen civilians including school bus attacks. Former lobbyist Mark Esper became Secretary of Defense.",
    role: "Defense / Aerospace",
    investigationCount: 3,
    riskLevel: "extreme",
  }`);
  }

  const insertionPoint = '];';
  const idx = src.indexOf(insertionPoint);
  if (idx === -1) {
    console.error('[corporations] Could not find array closing ];');
    return;
  }

  const before = src.slice(0, idx);
  const after = src.slice(idx);

  src = before + newEntries.join(',\n') + ',\n' + after;
  fs.writeFileSync(file, src, 'utf8');

  const count = (src.match(/slug:\s*"/g) || []).length;
  console.log(`[corporations] Added ${newEntries.length} entries. Total entries now: ${count}`);
}

// ── TASK 3: Add 11 missing organizations ────────────────────────────────────
function syncOrganizations() {
  const file = path.join(ROOT, 'src/app/entities/organizations/page.tsx');
  let src = fs.readFileSync(file, 'utf8');

  const missingSlugs = [
    'cia',
    'fbi-org',
    'nsa-org',
    'api',
    'ccp',
    'china-gov',
    'chamber-of-commerce',
    'us-chamber',
    'fop',
    'wef',
    'wuhan-institute-virology',
  ];

  const toAdd = missingSlugs.filter(s => {
    // Need exact match to avoid partial hits (e.g. 'cia' matching 'special-cia-thing')
    const re = new RegExp(`slug:\\s*'${s}'`);
    return !re.test(src);
  });

  if (toAdd.length === 0) {
    console.log('[organizations] All slugs already present, skipping.');
    return;
  }

  const newEntries = [];

  if (toAdd.includes('cia')) {
    newEntries.push(`  {
    name: 'Central Intelligence Agency',
    slug: 'cia',
    type: 'Intelligence Agency',
    description: 'Foreign intelligence service with history of overthrowing governments, torture programs, drug trafficking, MKULTRA mind control experiments, and illegal domestic surveillance',
    riskLevel: 'critical' as const,
    members: '21,000+ employees',
  }`);
  }

  if (toAdd.includes('fbi-org')) {
    newEntries.push(`  {
    name: 'Federal Bureau of Investigation',
    slug: 'fbi-org',
    type: 'Law Enforcement Agency',
    description: 'Domestic intelligence and security service that conducted COINTELPRO  -  systematic campaign to surveil, infiltrate, and destroy civil rights and anti-war movements',
    riskLevel: 'critical' as const,
    members: '35,000+ employees',
  }`);
  }

  if (toAdd.includes('nsa-org')) {
    newEntries.push(`  {
    name: 'National Security Agency',
    slug: 'nsa-org',
    type: 'Intelligence Agency',
    description: 'Signals intelligence agency whose mass surveillance programs were exposed by Edward Snowden  -  collecting data on every American phone call, email, and internet activity',
    riskLevel: 'critical' as const,
    members: '30,000-40,000 employees',
  }`);
  }

  if (toAdd.includes('api')) {
    newEntries.push(`  {
    name: 'American Petroleum Institute',
    slug: 'api',
    type: 'Oil Industry Trade Association',
    description: 'Oil industry trade group that has funded climate disinformation campaigns for decades',
    riskLevel: 'critical' as const,
    members: '600+ member companies',
  }`);
  }

  if (toAdd.includes('ccp')) {
    newEntries.push(`  {
    name: 'Chinese Communist Party',
    slug: 'ccp',
    type: 'Political Party / Government',
    description: 'Ruling party of China engaged in Uyghur genocide, Hong Kong crackdown, Taiwan threats, and massive cyber espionage',
    riskLevel: 'critical' as const,
    members: '98 million+',
  }`);
  }

  if (toAdd.includes('china-gov')) {
    newEntries.push(`  {
    name: 'Government of China',
    slug: 'china-gov',
    type: 'Government',
    description: 'CCP-controlled government engaged in genocide, surveillance state operations, and suppression of COVID-19 origins information',
    riskLevel: 'critical' as const,
    members: 'N/A',
  }`);
  }

  if (toAdd.includes('chamber-of-commerce')) {
    newEntries.push(`  {
    name: 'U.S. Chamber of Commerce',
    slug: 'chamber-of-commerce',
    type: 'Business Lobbying Organization',
    description: 'Largest lobbying group in America. Fights labor rights, environmental regulations, and consumer protections while hiding corporate funders',
    riskLevel: 'high' as const,
    members: '3 million+ businesses',
  }`);
  }

  if (toAdd.includes('us-chamber')) {
    newEntries.push(`  {
    name: 'U.S. Chamber of Commerce',
    slug: 'us-chamber',
    type: 'Business Lobbying Organization',
    description: 'Largest dark money spender in American politics, representing corporate interests in government',
    riskLevel: 'high' as const,
    members: '3 million+ businesses',
  }`);
  }

  if (toAdd.includes('fop')) {
    newEntries.push(`  {
    name: 'Fraternal Order of Police',
    slug: 'fop',
    type: 'Police Union',
    description: 'Largest police union in the U.S. that consistently opposes police accountability measures and defends officers accused of misconduct',
    riskLevel: 'medium' as const,
    members: '350,000+ members',
  }`);
  }

  if (toAdd.includes('wef')) {
    newEntries.push(`  {
    name: 'World Economic Forum',
    slug: 'wef',
    type: 'International Organization',
    description: 'International organization hosting annual Davos meetings of global elites. Subject of numerous conspiracy theories',
    riskLevel: 'medium' as const,
    members: '1,000+ member companies',
  }`);
  }

  if (toAdd.includes('wuhan-institute-virology')) {
    newEntries.push(`  {
    name: 'Wuhan Institute of Virology',
    slug: 'wuhan-institute-virology',
    type: 'Research Institution',
    description: 'Chinese research laboratory at the center of COVID-19 lab leak hypothesis investigations',
    riskLevel: 'high' as const,
    members: 'N/A',
  }`);
  }

  // The organizations array ends with ];  -  find it
  const insertionPoint = '];\n\nconst riskColors';
  const idx = src.indexOf(insertionPoint);
  if (idx === -1) {
    console.error('[organizations] Could not find array closing pattern. Trying fallback...');
    // Fallback: find the first ]; that appears before riskColors
    const riskIdx = src.indexOf('const riskColors');
    if (riskIdx === -1) {
      console.error('[organizations] Could not find riskColors either. Aborting.');
      return;
    }
    const closingIdx = src.lastIndexOf('];', riskIdx);
    if (closingIdx === -1) {
      console.error('[organizations] Could not find ]; before riskColors. Aborting.');
      return;
    }
    const before = src.slice(0, closingIdx);
    const after = src.slice(closingIdx);
    src = before + newEntries.join(',\n') + ',\n' + after;
  } else {
    const before = src.slice(0, idx);
    const after = src.slice(idx);
    src = before + newEntries.join(',\n') + ',\n' + after;
  }

  fs.writeFileSync(file, src, 'utf8');

  const count = (src.match(/slug:\s*'/g) || []).length;
  console.log(`[organizations] Added ${newEntries.length} entries. Total entries now: ${count}`);
}

// ── Run all ─────────────────────────────────────────────────────────────────
console.log('=== Syncing entity indexes ===\n');
syncAgencies();
syncCorporations();
syncOrganizations();
console.log('\n=== Done ===');
