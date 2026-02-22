// Extract all individual slugs and names from the [slug]/page.tsx data
const fs = require('fs');

const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Extract slugs: 'slug-name': { pattern (inside Record)
const slugRe = /^\s*'([\w-]+)':\s*\{/gm;
const slugs = [];
let m;
while ((m = slugRe.exec(content)) !== null) {
  slugs.push(m[1]);
}

// Also extract names for each slug
const individuals = [];
for (const slug of slugs) {
  // Find the name property after the slug key
  const slugIdx = content.indexOf(`'${slug}':`);
  if (slugIdx === -1) continue;
  
  // Look for name property within the next 1500 chars (profiles can be long)
  const chunk = content.substring(slugIdx, slugIdx + 1500);
  const nameMatch = chunk.match(/name:\s*['"]([^'"]+)['"]/);
  const riskMatch = chunk.match(/riskLevel:\s*['"]([^'"]+)['"]/);
  const roleMatch = chunk.match(/role:\s*['"]([^'"]+)['"]/);
  
  individuals.push({
    slug,
    name: nameMatch ? nameMatch[1] : slug,
    riskLevel: riskMatch ? riskMatch[1] : 'moderate',
    role: roleMatch ? roleMatch[1] : 'Unknown',
  });
}

console.log(`Total individuals in [slug]/page.tsx: ${individuals.length}`);

// Now check which are already on the index page
const indexContent = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');
const indexSlugs = new Set();
const indexSlugRe = /slug:\s*['"]([^'"]+)['"]/g;
while ((m = indexSlugRe.exec(indexContent)) !== null) {
  indexSlugs.add(m[1]);
}
console.log(`Individuals on index page: ${indexSlugs.size}`);

const missing = individuals.filter(i => !indexSlugs.has(i.slug));
console.log(`Missing from index page: ${missing.length}`);

// Show some examples
console.log('\nFirst 30 missing:');
missing.slice(0, 30).forEach(i => console.log(`  ${i.slug} - ${i.name} (${i.riskLevel})`));

// Save full list
fs.writeFileSync('scripts/all-individuals.json', JSON.stringify(individuals, null, 2));
fs.writeFileSync('scripts/missing-from-index.json', JSON.stringify(missing, null, 2));
console.log('\nSaved to scripts/all-individuals.json and scripts/missing-from-index.json');
