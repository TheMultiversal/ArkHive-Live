const fs = require('fs');
const path = require('path');

// Individuals
const indDir = 'src/data/individuals';
const indFiles = fs.readdirSync(indDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
let individuals = 0;
indFiles.forEach(f => {
  const c = fs.readFileSync(path.join(indDir, f), 'utf8');
  const m = c.match(/'[a-z0-9-]+':\s*\{/g);
  if (m) individuals += m.length;
});

// Agencies
const agc = fs.readFileSync('src/data/agencies/index.ts', 'utf8');
const agencies = (agc.match(/'[a-z0-9-]+':\s*\{/g) || []).length;

// Corporations
const crc = fs.readFileSync('src/data/corporations/index.ts', 'utf8');
const corporations = (crc.match(/'[a-z0-9-]+':\s*\{/g) || []).length;

// Organizations
const orc = fs.readFileSync('src/data/organizations/index.ts', 'utf8');
const organizations = (orc.match(/'[a-z0-9-]+':\s*\{/g) || []).length;

const totalEntities = individuals + agencies + corporations + organizations;

// Documents
const doc = fs.readFileSync('src/data/documents.ts', 'utf8');
const documents = (doc.match(/"url":/g) || []).length;

// Investigation data
const invDir = 'src/data/investigations';
const shardFiles = fs.readdirSync(invDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'categories.ts' && f !== 'types.ts');
let investigations = 0;
let totalConnections = 0;
shardFiles.forEach(f => {
  const c = fs.readFileSync(path.join(invDir, f), 'utf8');
  const m = c.match(/'[a-z0-9-]+':\s*\{/g);
  if (m) investigations += m.length;
  // Count affiliations (connections)
  const aff = c.match(/{ title:/g);
  if (aff) totalConnections += aff.length;
});

// Investigation pages
const invPages = fs.readdirSync('src/app/investigations').filter(f => {
  const p = path.join('src/app/investigations', f);
  return fs.statSync(p).isDirectory() && f !== '[slug]';
}).length;

console.log('=== REAL COUNTS ===');
console.log('Investigation data entries:', investigations);
console.log('Investigation pages:', invPages);
console.log('Individuals:', individuals);
console.log('Agencies:', agencies);
console.log('Corporations:', corporations);
console.log('Organizations:', organizations);
console.log('Total entities:', totalEntities);
console.log('Documents:', documents);
console.log('Connections:', totalConnections);
