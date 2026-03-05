#!/usr/bin/env node
/**
 * HARDCODE INJECTION SCRIPT
 * Takes all 281 missing entities from bots/generated/ and inserts them
 * into the proper TypeScript data files in src/data/.
 * 
 * - Individuals → src/data/individuals/{letter}.ts (sharded by first letter)
 * - Agencies → src/data/agencies/index.ts
 * - Corporations → src/data/corporations/index.ts
 * - Organizations → src/data/organizations/index.ts
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = path.join(ROOT, 'bots', 'generated');
const DATA_DIR = path.join(ROOT, 'src', 'data');

// ============================================================
// CORRECT TYPE MAPPINGS (manually reviewed)
// ============================================================
const typeOverrides = {
  // These were miscategorized as "individual" - fix them
  'amnesty-international': 'organization',
  'anthropic-pbc': 'corporation',
  'boeing-defense-division': 'corporation',
  'business-roundtable': 'organization',
  'chatham-house': 'organization',
  'citizens-united': 'organization',
  'doj-civil-rights': 'agency',
  'enron': 'corporation',
  'epstein-vcf': 'organization',
  'equifax': 'corporation',
  'federal-reserve-board': 'agency',
  'french-justice': 'agency',
  'hoover-institution': 'organization',
  'national-archives': 'agency',
  'ohio-state': 'organization',
  'private-prison-industry': 'corporation',
  'theranos': 'corporation',
  'transparency-international': 'organization',
  'treasury': 'agency',
  'turning-point-usa': 'organization',
  'us-chamber-of-commerce': 'organization',
  'voice-of-america': 'agency',
  'operation-condor': 'organization',  // historical network
  'dina': 'agency',  // Chilean secret police

  // Fix corp→org misclassifications
  'carnegie-corporation': 'organization',
  'rand-corporation': 'organization',
  'international-monetary-fund': 'organization',
  'international-crisis-group': 'organization',
  'world-bank-group': 'organization',
  'financial-stability-board': 'organization',
  'global-energy-producers': 'organization',
  'federal-reserve-bank-of-new-york': 'agency',
  
  // Fix org→agency
  'centers-for-disease-control-and-prevention': 'agency',
  'national-institute-of-allergy-and-infectious-diseases': 'agency',
  'national-institute-of-standards-and-technology': 'agency',
};

// Load the categorized missing entities
const categorized = JSON.parse(fs.readFileSync(path.join(ROOT, 'bots', 'missing-categorized.json'), 'utf8'));

// Re-categorize with overrides
const final = { individual: [], agency: [], corporation: [], organization: [] };

for (const [type, items] of Object.entries(categorized)) {
  for (const item of items) {
    const correctType = typeOverrides[item.slug] || type;
    final[correctType].push(item);
  }
}

console.log('=== FINAL COUNTS ===');
console.log(`Individuals: ${final.individual.length}`);
console.log(`Agencies: ${final.agency.length}`);
console.log(`Corporations: ${final.corporation.length}`);
console.log(`Organizations: ${final.organization.length}`);
console.log(`Total: ${Object.values(final).reduce((a, b) => a + b.length, 0)}`);

// ============================================================
// HELPER: Escape string for TypeScript
// ============================================================
function esc(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

// ============================================================
// GENERATE TypeScript for an INDIVIDUAL entry
// ============================================================
function genIndividualTS(slug, data) {
  const rl = data.riskLevel === 'critical' || data.riskLevel === 'high' || data.riskLevel === 'medium' || data.riskLevel === 'low' ? data.riskLevel : 'low';
  
  const affiliations = (data.affiliations || []).map(a => 
    `      { name: '${esc(a.name || '')}', role: '${esc(a.role || '')}', type: '${a.type || 'organization'}' },`
  ).join('\n');
  
  const controversies = (data.controversies || []).map(c => 
    `      '${esc(c)}',`
  ).join('\n');
  
  const investigations = (data.relatedInvestigations || []).map(i => 
    `      { title: '${esc(i.title || '')}', slug: '${esc(i.slug || '')}', severity: '${i.severity || 'medium'}' },`
  ).join('\n');
  
  const timeline = (data.timeline || []).map(t => 
    `      { date: '${esc(t.date || '')}', event: '${esc(t.event || '')}' },`
  ).join('\n');
  
  const sources = (data.sources || []).map(s => 
    `      { title: '${esc(s.title || '')}', url: '${esc(s.url || '')}', date: '${esc(s.date || '')}' },`
  ).join('\n');
  
  const aliases = (data.aliases || []).map(a => `      '${esc(a)}',`).join('\n');
  
  const associates = (data.knownAssociates || []).map(a => 
    `      { name: '${esc(a.name || '')}', relationship: '${esc(a.relationship || '')}' },`
  ).join('\n');

  return `  '${slug}': {
    name: '${esc(data.name)}',
    title: '${esc(data.title || 'Public Figure Under Investigation')}',
    role: '${esc(data.role || 'Under Investigation')}',
    riskLevel: '${rl}',
    description: '${esc(data.description || `${data.name} is a public figure identified through ArkHive\\'s investigative network.`)}',
    education: [],
    affiliations: [
${affiliations}
    ],
    controversies: [
${controversies}
    ],
    charges: [],
    relatedInvestigations: [
${investigations}
    ],
    timeline: [
${timeline}
    ],
    socialMedia: [],
    sources: [
${sources}
    ],
    aliases: [
${aliases}
    ],
    knownAssociates: [
${associates}
    ],
  },`;
}

// ============================================================
// GENERATE TypeScript for an AGENCY entry
// ============================================================
function genAgencyTS(slug, data, id) {
  const rl = (data.riskLevel || 'low').replace('critical', 'extreme').replace('medium', 'moderate');
  const validRL = ['extreme', 'high', 'moderate', 'low'].includes(rl) ? rl : 'low';
  
  return `  '${slug}': {
    id: '${slug}',
    slug: '${slug}',
    name: '${esc(data.name)}',
    type: 'agency',
    description: '${esc(data.description || `${data.name} - government agency tracked by ArkHive.`)}',
    role: '${esc(data.role || data.title || 'Government Agency')}',
    investigationCount: ${(data.relatedInvestigations || []).length || 1},
    riskLevel: '${validRL}',
  },`;
}

// ============================================================
// GENERATE TypeScript for a CORPORATION entry
// ============================================================
function genCorpTS(slug, data, id) {
  const rl = (data.riskLevel || 'low').replace('critical', 'extreme').replace('medium', 'moderate');
  const validRL = ['extreme', 'high', 'moderate', 'low'].includes(rl) ? rl : 'low';
  
  return `  '${slug}': {
    id: '${slug}',
    slug: '${slug}',
    name: '${esc(data.name)}',
    type: 'corporation',
    description: '${esc(data.description || `${data.name} - corporation tracked by ArkHive.`)}',
    role: '${esc(data.role || data.title || 'Corporation')}',
    investigationCount: ${(data.relatedInvestigations || []).length || 1},
    riskLevel: '${validRL}',
  },`;
}

// ============================================================
// GENERATE TypeScript for an ORGANIZATION entry
// ============================================================
function genOrgTS(slug, data) {
  const rl = data.riskLevel === 'critical' || data.riskLevel === 'high' || data.riskLevel === 'medium' || data.riskLevel === 'low' ? data.riskLevel : 'low';
  
  return `  '${slug}': {
    name: '${esc(data.name)}',
    slug: '${slug}',
    type: '${esc(data.role || data.title || 'Organization')}',
    description: '${esc(data.description || `${data.name} - organization tracked by ArkHive.`)}',
    riskLevel: '${rl}',
    members: 'Unknown',
  },`;
}

// ============================================================
// INJECT into a file: insert before the closing `};`
// ============================================================
function injectIntoFile(filePath, entries) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the last `};` which closes the main object
  const lastClose = content.lastIndexOf('};');
  if (lastClose === -1) {
    console.error(`  ERROR: Could not find closing }; in ${filePath}`);
    return 0;
  }
  
  // Check what's before the closing - add a newline if needed
  const before = content.substring(0, lastClose).trimEnd();
  const after = content.substring(lastClose);
  
  // Build the injection block
  const block = '\n' + entries.join('\n') + '\n';
  
  content = before + block + after;
  fs.writeFileSync(filePath, content, 'utf8');
  return entries.length;
}

// ============================================================
// MAIN: Inject everything
// ============================================================
let totalInjected = 0;

// 1. INDIVIDUALS - inject into sharded files by first letter
console.log('\n--- Injecting Individuals ---');
const individualsByLetter = {};
for (const item of final.individual) {
  const letter = item.slug[0].toLowerCase();
  if (!individualsByLetter[letter]) individualsByLetter[letter] = [];
  individualsByLetter[letter].push(item);
}

for (const [letter, items] of Object.entries(individualsByLetter)) {
  const filePath = path.join(DATA_DIR, 'individuals', `${letter}.ts`);
  if (!fs.existsSync(filePath)) {
    console.log(`  WARNING: No shard file for letter '${letter}', skipping ${items.length} entries`);
    continue;
  }
  
  // Check which are already in the file
  const content = fs.readFileSync(filePath, 'utf8');
  const toInject = [];
  for (const item of items) {
    if (content.includes(`'${item.slug}':`)) {
      console.log(`  SKIP (exists): ${item.slug}`);
    } else {
      toInject.push(genIndividualTS(item.slug, item.data));
    }
  }
  
  if (toInject.length > 0) {
    const count = injectIntoFile(filePath, toInject);
    console.log(`  ${letter}.ts: +${count} individuals`);
    totalInjected += count;
  }
}

// 2. AGENCIES
console.log('\n--- Injecting Agencies ---');
const agencyFile = path.join(DATA_DIR, 'agencies', 'index.ts');
const agencyContent = fs.readFileSync(agencyFile, 'utf8');
const agencyEntries = [];
for (const item of final.agency) {
  if (agencyContent.includes(`'${item.slug}':`)) {
    console.log(`  SKIP (exists): ${item.slug}`);
  } else {
    agencyEntries.push(genAgencyTS(item.slug, item.data));
  }
}
if (agencyEntries.length > 0) {
  const count = injectIntoFile(agencyFile, agencyEntries);
  console.log(`  agencies/index.ts: +${count} agencies`);
  totalInjected += count;
}

// 3. CORPORATIONS
console.log('\n--- Injecting Corporations ---');
const corpFile = path.join(DATA_DIR, 'corporations', 'index.ts');
const corpContent = fs.readFileSync(corpFile, 'utf8');
const corpEntries = [];
for (const item of final.corporation) {
  if (corpContent.includes(`'${item.slug}':`)) {
    console.log(`  SKIP (exists): ${item.slug}`);
  } else {
    corpEntries.push(genCorpTS(item.slug, item.data));
  }
}
if (corpEntries.length > 0) {
  const count = injectIntoFile(corpFile, corpEntries);
  console.log(`  corporations/index.ts: +${count} corporations`);
  totalInjected += count;
}

// 4. ORGANIZATIONS
console.log('\n--- Injecting Organizations ---');
const orgFile = path.join(DATA_DIR, 'organizations', 'index.ts');
const orgContent = fs.readFileSync(orgFile, 'utf8');
const orgEntries = [];
for (const item of final.organization) {
  if (orgContent.includes(`'${item.slug}':`)) {
    console.log(`  SKIP (exists): ${item.slug}`);
  } else {
    orgEntries.push(genOrgTS(item.slug, item.data));
  }
}
if (orgEntries.length > 0) {
  const count = injectIntoFile(orgFile, orgEntries);
  console.log(`  organizations/index.ts: +${count} organizations`);
  totalInjected += count;
}

console.log(`\n=== DONE: Injected ${totalInjected} entities total ===`);

// 5. Verify final counts
function countEntries(dirPath) {
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  let count = 0;
  const allFiles = files.length > 0 ? files : ['index.ts'];
  for (const f of allFiles) {
    const content = fs.readFileSync(path.join(dirPath, f), 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.match(/^\s+['"][a-z0-9][a-z0-9-]+[a-z0-9]['"]\s*:\s*\{/)) {
        count++;
      }
    }
  }
  return count;
}

console.log('\n=== FINAL ENTITY COUNTS ===');
const indCount = countEntries(path.join(DATA_DIR, 'individuals'));
const agCount = countEntries(path.join(DATA_DIR, 'agencies'));
const corpCount = countEntries(path.join(DATA_DIR, 'corporations'));
const orgCount = countEntries(path.join(DATA_DIR, 'organizations'));
console.log(`Individuals: ${indCount}`);
console.log(`Agencies: ${agCount}`);
console.log(`Corporations: ${corpCount}`);
console.log(`Organizations: ${orgCount}`);
console.log(`TOTAL ENTITIES: ${indCount + agCount + corpCount + orgCount}`);

// Also count investigations
const invCount = countEntries(path.join(DATA_DIR, 'investigations'));
console.log(`Investigations: ${invCount}`);
console.log(`\nGRAND TOTAL (entities + investigations): ${indCount + agCount + corpCount + orgCount + invCount}`);
