const fs = require('fs');

// Collect all existing investigation slugs
const dynFile = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
const dynSlugs = new Set();
const dynRe = /['"]([\w][\w-]*)['"]\s*:\s*\{/g;
let m;
while (m = dynRe.exec(dynFile)) {
  if (['title','subtitle','severity','category','date','lastUpdated','summary','content',
       'tags','sources','affiliations','url','type','name','role','href','entityType'].includes(m[1])) continue;
  dynSlugs.add(m[1]);
}

const invDir = fs.readdirSync('src/app/investigations').filter(d => d !== '[slug]' && d !== 'page.tsx');
const hardcodedSlugs = new Set(invDir);
const allExisting = new Set([...dynSlugs, ...hardcodedSlugs]);
console.log(`Dynamic: ${dynSlugs.size}, Hardcoded: ${hardcodedSlugs.size}, Total: ${allExisting.size}`);

// Collect all referenced investigation slugs from entities
const entityFiles = [
  'src/app/entities/individuals/[slug]/page.tsx',
  'src/app/entities/agencies/[slug]/page.tsx',
  'src/app/entities/corporations/[slug]/page.tsx',
  'src/app/entities/organizations/[slug]/page.tsx',
];

const referenced = new Set();
for (const file of entityFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  while (m = re.exec(content)) {
    const before = content.substring(Math.max(0, m.index - 200), m.index);
    if (before.includes('relatedInvestigations')) {
      referenced.add(m[1]);
    }
  }
}
console.log(`Referenced: ${referenced.size}`);

const missing = [];
for (const slug of referenced) {
  if (!allExisting.has(slug)) {
    missing.push(slug);
  }
}
missing.sort();
console.log(`Missing: ${missing.length}`);
console.log(JSON.stringify(missing));
