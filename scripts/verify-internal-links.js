#!/usr/bin/env node
/**
 * Verify that every slug referenced in categories.ts has a matching
 * individual profile in the [slug]/page.tsx file.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CATEGORIES_FILE = path.join(ROOT, 'src/data/categories.ts');
const PROFILES_FILE = path.join(ROOT, 'src/app/entities/individuals/[slug]/page.tsx');
const REPORT_FILE = path.join(__dirname, 'internal-links-report.json');

// 1. Extract all unique slugs from categories.ts
const catSrc = fs.readFileSync(CATEGORIES_FILE, 'utf8');
const catSlugRe = /slug:\s*'([^']+)'/g;
const categorySlugs = new Set();
const categorySlugsByCategory = {};
let m;
// Also track which category each slug belongs to
const catBlockRe = /'([a-z0-9-]+)':\s*\{\s*name:\s*'[^']*',\s*description:\s*'[^']*',\s*individuals:\s*\[([\s\S]*?)\],?\s*\}/g;
while ((m = catBlockRe.exec(catSrc)) !== null) {
  const catKey = m[1];
  const block = m[2];
  const slugs = [];
  let sm;
  const slugInBlock = /slug:\s*'([^']+)'/g;
  while ((sm = slugInBlock.exec(block)) !== null) {
    slugs.push(sm[1]);
    categorySlugs.add(sm[1]);
  }
  categorySlugsByCategory[catKey] = slugs;
}

console.log(`Found ${categorySlugs.size} unique slugs across ${Object.keys(categorySlugsByCategory).length} categories in categories.ts`);

// 2. Extract all profile slugs from page.tsx
//    Profile keys appear as:  'some-slug': {  at the start of a line (inside individualData)
const profileSrc = fs.readFileSync(PROFILES_FILE, 'utf8');
const profileKeyRe = /^ '([a-z0-9][a-z0-9-]*)'\s*:\s*\{/gm;
const profileSlugs = new Set();
while ((m = profileKeyRe.exec(profileSrc)) !== null) {
  profileSlugs.add(m[1]);
}
console.log(`Found ${profileSlugs.size} profile keys in page.tsx`);

// 3. Compare
const missingSlugs = [];
const presentSlugs = [];

for (const slug of [...categorySlugs].sort()) {
  if (profileSlugs.has(slug)) {
    presentSlugs.push(slug);
  } else {
    // find which categories reference this slug
    const inCategories = [];
    for (const [cat, slugs] of Object.entries(categorySlugsByCategory)) {
      if (slugs.includes(slug)) inCategories.push(cat);
    }
    missingSlugs.push({ slug, categories: inCategories });
  }
}

// 4. Report
const report = {
  generatedAt: new Date().toISOString(),
  totalUniqueCategorySlugs: categorySlugs.size,
  totalProfileSlugs: profileSlugs.size,
  matchedCount: presentSlugs.length,
  missingCount: missingSlugs.length,
  missingSlugs,
  // Also list profile slugs NOT referenced in any category (orphans)
  orphanProfileSlugs: [...profileSlugs].filter(s => !categorySlugs.has(s)).sort(),
};

fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

console.log(`\n=== RESULTS ===`);
console.log(`Matched: ${presentSlugs.length}/${categorySlugs.size}`);
console.log(`Missing profiles: ${missingSlugs.length}`);
if (missingSlugs.length > 0) {
  console.log(`\nMISSING PROFILES (slug → categories):`);
  for (const { slug, categories } of missingSlugs) {
    console.log(`  ${slug}  [${categories.join(', ')}]`);
  }
}
console.log(`\nOrphan profiles (in page.tsx but not in any category): ${report.orphanProfileSlugs.length}`);
console.log(`\nReport saved to ${REPORT_FILE}`);
