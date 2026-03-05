#!/usr/bin/env node
/**
 * Audit: Compare bots/generated/ JSON files against src/data/ TypeScript files
 * to find what's missing from the codebase.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = path.join(ROOT, 'bots', 'generated');
const DATA_DIR = path.join(ROOT, 'src', 'data');

// 1. Read all generated files and categorize them
const genFiles = fs.readdirSync(GEN_DIR).filter(f => f.endsWith('.json'));
const generated = { investigations: [], entities: [] };

for (const f of genFiles) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(GEN_DIR, f), 'utf8'));
    const slug = f.replace('.json', '');
    if (data.severity && data.content && Array.isArray(data.content)) {
      generated.investigations.push({ slug, data });
    } else if (data.name) {
      generated.entities.push({ slug, data });
    }
  } catch (e) {
    console.error(`Error reading ${f}:`, e.message);
  }
}

console.log(`\n=== GENERATED FILES ===`);
console.log(`Investigations: ${generated.investigations.length}`);
console.log(`Entities: ${generated.entities.length}`);
console.log(`Total: ${genFiles.length}`);

// 2. Read existing investigation slugs from src/data/investigations/
function getExistingInvestigationSlugs() {
  const invDir = path.join(DATA_DIR, 'investigations');
  const files = fs.readdirSync(invDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  const slugs = new Set();
  for (const f of files) {
    const content = fs.readFileSync(path.join(invDir, f), 'utf8');
    // Match top-level keys like "slug-name": {
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*["']([a-z0-9][a-z0-9-]+[a-z0-9])["']\s*:\s*\{/);
      if (match) {
        slugs.add(match[1]);
      }
    }
  }
  return slugs;
}

// 3. Read existing entity slugs from src/data/{individuals,agencies,corporations,organizations}/
function getExistingEntitySlugs() {
  const types = ['individuals', 'agencies', 'corporations', 'organizations'];
  const slugs = new Set();
  for (const type of types) {
    const dir = path.join(DATA_DIR, type);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
    for (const f of files) {
      const content = fs.readFileSync(path.join(dir, f), 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const match = line.match(/^\s*["']([a-z0-9][a-z0-9-]+[a-z0-9])["']\s*:\s*\{/);
        if (match) {
          slugs.add(match[1]);
        }
      }
    }
  }
  return slugs;
}

const existingInvSlugs = getExistingInvestigationSlugs();
const existingEntitySlugs = getExistingEntitySlugs();

console.log(`\n=== EXISTING IN CODEBASE ===`);
console.log(`Investigation slugs: ${existingInvSlugs.size}`);
console.log(`Entity slugs: ${existingEntitySlugs.size}`);

// 4. Find what's missing
const missingInvestigations = generated.investigations.filter(i => !existingInvSlugs.has(i.slug));
const missingEntities = generated.entities.filter(e => !existingEntitySlugs.has(e.slug));

console.log(`\n=== MISSING FROM CODEBASE ===`);
console.log(`Missing investigations: ${missingInvestigations.length}`);
console.log(`Missing entities: ${missingEntities.length}`);
console.log(`Total missing: ${missingInvestigations.length + missingEntities.length}`);

if (missingInvestigations.length > 0) {
  console.log(`\nSample missing investigations:`);
  missingInvestigations.slice(0, 10).forEach(i => console.log(`  - ${i.slug}: ${i.data.title}`));
  if (missingInvestigations.length > 10) console.log(`  ... and ${missingInvestigations.length - 10} more`);
}

if (missingEntities.length > 0) {
  console.log(`\nSample missing entities:`);
  missingEntities.slice(0, 10).forEach(e => console.log(`  - ${e.slug}: ${e.data.name}`));
  if (missingEntities.length > 10) console.log(`  ... and ${missingEntities.length - 10} more`);
}

// 5. Write full missing lists to files for reference
fs.writeFileSync(path.join(ROOT, 'bots', 'missing-investigations.json'), JSON.stringify(missingInvestigations.map(i => i.slug), null, 2));
fs.writeFileSync(path.join(ROOT, 'bots', 'missing-entities.json'), JSON.stringify(missingEntities.map(e => e.slug), null, 2));
console.log(`\nFull lists written to bots/missing-investigations.json and bots/missing-entities.json`);
