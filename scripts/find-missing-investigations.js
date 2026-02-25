#!/usr/bin/env node

/**
 * find-missing-investigations.js
 *
 * Finds investigation slugs referenced by entity profiles (individuals,
 * agencies, corporations, organizations) that don't have actual pages.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── helpers ────────────────────────────────────────────────────────────────

/** Extract all relatedInvestigations entries from a page.tsx file */
function extractRelatedInvestigations(filePath) {
  const src = fs.readFileSync(filePath, 'utf-8');

  // First, find every entity key in the top-level data record
  // Pattern: 'entity-slug': { ... relatedInvestigations: [ ... ] ...}
  // We'll extract per-entity by matching the record keys first.

  const results = []; // { entitySlug, entityName?, investigations: [{title,slug,severity}] }

  // Match top-level keys of the record (e.g.  'donald-trump': {)
  const entityKeyRe = /['"]([a-z0-9-]+)['"]\s*:\s*\{/g;
  const entityStarts = [];
  let m;
  while ((m = entityKeyRe.exec(src)) !== null) {
    entityStarts.push({ slug: m[1], index: m.index });
  }

  for (let i = 0; i < entityStarts.length; i++) {
    const start = entityStarts[i].index;
    const end = i + 1 < entityStarts.length ? entityStarts[i + 1].index : src.length;
    const block = src.slice(start, end);

    // Try to grab name field
    const nameMatch = block.match(/name:\s*['"](.+?)['"]/);
    const entityName = nameMatch ? nameMatch[1] : entityStarts[i].slug;

    // Find relatedInvestigations array
    const riIdx = block.indexOf('relatedInvestigations');
    if (riIdx === -1) continue;

    // Get the array content: find the opening [ after relatedInvestigations
    const afterRI = block.slice(riIdx);
    const bracketStart = afterRI.indexOf('[');
    if (bracketStart === -1) continue;

    // Walk to find matching ]
    let depth = 0;
    let bracketEnd = -1;
    for (let j = bracketStart; j < afterRI.length; j++) {
      if (afterRI[j] === '[') depth++;
      if (afterRI[j] === ']') { depth--; if (depth === 0) { bracketEnd = j; break; } }
    }
    if (bracketEnd === -1) continue;

    const arrStr = afterRI.slice(bracketStart, bracketEnd + 1);

    // Extract individual investigation objects
    const invRe = /\{\s*title:\s*['"`](.+?)['"`]\s*,\s*slug:\s*['"`](.+?)['"`]\s*,\s*severity:\s*['"`](.+?)['"`]\s*\}/g;
    let inv;
    const investigations = [];
    while ((inv = invRe.exec(arrStr)) !== null) {
      investigations.push({ title: inv[1], slug: inv[2], severity: inv[3] });
    }

    if (investigations.length > 0) {
      results.push({
        entitySlug: entityStarts[i].slug,
        entityName,
        investigations,
      });
    }
  }

  return results;
}

/** Extract all keys from investigationDatabase in [slug]/page.tsx */
function extractCatchallSlugs(filePath) {
  const src = fs.readFileSync(filePath, 'utf-8');
  const slugs = new Set();
  // Keys are like  'some-slug': {
  const re = /['"]([a-z0-9-]+)['"]\s*:\s*\{/g;
  let m;
  // Only look inside investigationDatabase
  const dbStart = src.indexOf('investigationDatabase');
  if (dbStart === -1) return slugs;
  const after = src.slice(dbStart);
  while ((m = re.exec(after)) !== null) {
    slugs.add(m[1]);
  }
  return slugs;
}

/** Extract all slugs from allInvestigations array in page.tsx listing */
function extractListingSlugs(filePath) {
  const src = fs.readFileSync(filePath, 'utf-8');
  const slugs = new Set();
  const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    slugs.add(m[1]);
  }
  return slugs;
}

/** List all directories under investigations/ (dedicated pages) */
function listDedicatedPages(dir) {
  const slugs = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== '[slug]') {
      slugs.add(entry.name);
    }
  }
  return slugs;
}

// ── main ───────────────────────────────────────────────────────────────────

const entityFiles = {
  individuals: path.join(ROOT, 'src/app/entities/individuals/[slug]/page.tsx'),
  agencies:    path.join(ROOT, 'src/app/entities/agencies/[slug]/page.tsx'),
  corporations:path.join(ROOT, 'src/app/entities/corporations/[slug]/page.tsx'),
  organizations:path.join(ROOT, 'src/app/entities/organizations/[slug]/page.tsx'),
};

// Step 1 - gather all referenced investigation slugs per entity type
const refsByType = {}; // { entityType: { invSlug: [{ entitySlug, entityName, title, severity }] } }
for (const [type, file] of Object.entries(entityFiles)) {
  const entities = extractRelatedInvestigations(file);
  const map = {};
  for (const ent of entities) {
    for (const inv of ent.investigations) {
      if (!map[inv.slug]) map[inv.slug] = [];
      map[inv.slug].push({
        entitySlug: ent.entitySlug,
        entityName: ent.entityName,
        title: inv.title,
        severity: inv.severity,
      });
    }
  }
  refsByType[type] = map;
}

// Step 2 - investigation database keys (catch-all page)
const catchallSlugs = extractCatchallSlugs(
  path.join(ROOT, 'src/app/investigations/[slug]/page.tsx')
);

// Step 3 - dedicated page directories
const dedicatedSlugs = listDedicatedPages(
  path.join(ROOT, 'src/app/investigations')
);

// Step 4 - listing page slugs
const listingSlugs = extractListingSlugs(
  path.join(ROOT, 'src/app/investigations/page.tsx')
);

// Combine all known investigation slugs
const allKnown = new Set([...catchallSlugs, ...dedicatedSlugs, ...listingSlugs]);

console.log(`\n=== INVESTIGATION COVERAGE SUMMARY ===`);
console.log(`  Catch-all DB entries : ${catchallSlugs.size}`);
console.log(`  Dedicated page dirs  : ${dedicatedSlugs.size}`);
console.log(`  Listing page entries : ${listingSlugs.size}`);
console.log(`  Combined known slugs : ${allKnown.size}\n`);

// Step 5 - find missing slugs per entity type
const globalMissing = {}; // invSlug -> { types: { entityType: [...refs] } }

for (const [type, slugMap] of Object.entries(refsByType)) {
  for (const [invSlug, refs] of Object.entries(slugMap)) {
    if (!allKnown.has(invSlug)) {
      if (!globalMissing[invSlug]) globalMissing[invSlug] = {};
      globalMissing[invSlug][type] = refs;
    }
  }
}

const missingSorted = Object.keys(globalMissing).sort();

if (missingSorted.length === 0) {
  console.log('✅ No missing investigation slugs found! All references resolve to existing pages.');
  process.exit(0);
}

console.log(`❌ MISSING INVESTIGATION SLUGS: ${missingSorted.length}\n`);
console.log('These investigation slugs are referenced by entities but have NO page:\n');

// Group by entity type for the summary
const byType = { individuals: [], agencies: [], corporations: [], organizations: [] };

for (const slug of missingSorted) {
  const sources = globalMissing[slug];
  const typeKeys = Object.keys(sources);

  console.log(`─── ${slug} ───`);
  console.log(`  Referenced by entity types: ${typeKeys.join(', ')}`);

  for (const type of typeKeys) {
    if (!byType[type]) byType[type] = [];
    byType[type].push(slug);

    for (const ref of sources[type]) {
      console.log(`    [${type}] ${ref.entityName} (${ref.entitySlug}) → "${ref.title}" (${ref.severity})`);
    }
  }
  console.log();
}

// Summary grouped by entity type
console.log(`\n${'='.repeat(60)}`);
console.log(`SUMMARY BY ENTITY TYPE`);
console.log(`${'='.repeat(60)}\n`);

for (const [type, slugs] of Object.entries(byType)) {
  const unique = [...new Set(slugs)].sort();
  if (unique.length === 0) continue;
  console.log(`${type.toUpperCase()} (${unique.length} missing slugs):`);
  for (const s of unique) {
    console.log(`  - ${s}`);
  }
  console.log();
}

// Also tally total unique entity profiles referencing missing investigations
let totalRefs = 0;
for (const slug of missingSorted) {
  for (const refs of Object.values(globalMissing[slug])) {
    totalRefs += refs.length;
  }
}
console.log(`Total missing slugs : ${missingSorted.length}`);
console.log(`Total entity references to missing slugs: ${totalRefs}`);
