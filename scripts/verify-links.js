// Verify: find any remaining broken individual links
const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const individualsDetailPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// Get all existing individual slugs
const detailContent = fs.readFileSync(individualsDetailPath, 'utf8');
const existingSlugs = new Set();
const slugKeyRegex = /^\s*'([a-z0-9-]+)':\s*\{/gm;
let match;
while ((match = slugKeyRegex.exec(detailContent)) !== null) {
  existingSlugs.add(match[1]);
}
console.log(`Total profiles: ${existingSlugs.size}`);

// Scan all investigation pages for ALL hrefs to /entities/individuals/
const dirs = fs.readdirSync(investigationsDir).filter(d => {
  const fullPath = path.join(investigationsDir, d);
  return fs.statSync(fullPath).isDirectory() && d !== '[slug]';
});

const stillMissing = new Map();
for (const dir of dirs) {
  const pagePath = path.join(investigationsDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Find ALL /entities/individuals/SLUG references
  const hrefRegex = /\/entities\/individuals\/([a-z0-9-]+)/g;
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    const slug = m[1];
    if (!existingSlugs.has(slug)) {
      if (!stillMissing.has(slug)) stillMissing.set(slug, new Set());
      stillMissing.get(slug).add(dir);
    }
  }
}

if (stillMissing.size === 0) {
  console.log('All individual links are valid!');
} else {
  console.log(`\nStill missing ${stillMissing.size} individuals:`);
  for (const [slug, investigations] of [...stillMissing.entries()].sort()) {
    console.log(`  ${slug} (from: ${[...investigations].join(', ')})`);
  }
}

// Also check agency and corporation links
const agencyDetailPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'agencies', '[slug]', 'page.tsx');
const corpDetailPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'corporations', '[slug]', 'page.tsx');

const agencyContent = fs.readFileSync(agencyDetailPath, 'utf8');
const agencySlugs = new Set();
const aMatch = /^\s*'([a-z0-9-]+)':\s*\{/gm;
while ((match = aMatch.exec(agencyContent)) !== null) agencySlugs.add(match[1]);

const corpContent = fs.readFileSync(corpDetailPath, 'utf8');
const corpSlugs = new Set();
const cMatch = /^\s*'([a-z0-9-]+)':\s*\{/gm;
while ((match = cMatch.exec(corpContent)) !== null) corpSlugs.add(match[1]);

const missingAgencies = new Map();
const missingCorps = new Map();

for (const dir of dirs) {
  const pagePath = path.join(investigationsDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const content = fs.readFileSync(pagePath, 'utf8');
  
  const agencyRefRegex = /\/entities\/agencies\/([a-z0-9-]+)/g;
  while ((m = agencyRefRegex.exec(content)) !== null) {
    if (!agencySlugs.has(m[1])) {
      if (!missingAgencies.has(m[1])) missingAgencies.set(m[1], new Set());
      missingAgencies.get(m[1]).add(dir);
    }
  }
  
  const corpRefRegex = /\/entities\/corporations\/([a-z0-9-]+)/g;
  while ((m = corpRefRegex.exec(content)) !== null) {
    if (!corpSlugs.has(m[1])) {
      if (!missingCorps.has(m[1])) missingCorps.set(m[1], new Set());
      missingCorps.get(m[1]).add(dir);
    }
  }
}

if (missingAgencies.size > 0) {
  console.log(`\nMissing ${missingAgencies.size} agencies:`);
  for (const [slug, inv] of [...missingAgencies.entries()].sort()) {
    console.log(`  ${slug} (from: ${[...inv].join(', ')})`);
  }
}

if (missingCorps.size > 0) {
  console.log(`\nMissing ${missingCorps.size} corporations:`);
  for (const [slug, inv] of [...missingCorps.entries()].sort()) {
    console.log(`  ${slug} (from: ${[...inv].join(', ')})`);
  }
}
