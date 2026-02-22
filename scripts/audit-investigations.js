const fs = require('fs');
const path = require('path');

// Get all existing directories
const invDir = 'src/app/investigations';
const dirs = fs.readdirSync(invDir).filter(f => {
  return fs.statSync(path.join(invDir, f)).isDirectory() && f !== '[slug]';
});

// Get slugs from the index page
const indexContent = fs.readFileSync('src/app/investigations/page.tsx', 'utf8');
const slugPattern = /href.*?\/investigations\/([a-z0-9-]+)/g;
const indexSlugs = new Set();
let m;
while ((m = slugPattern.exec(indexContent)) !== null) {
  indexSlugs.add(m[1]);
}

// Also check the slug pattern
const slugPattern2 = /slug:\s*["']([a-z0-9-]+)["']/g;
while ((m = slugPattern2.exec(indexContent)) !== null) {
  indexSlugs.add(m[1]);
}

console.log(`Existing directories: ${dirs.length}`);
console.log(`Slugs on index page: ${indexSlugs.size}`);

// Find slugs on index that have NO page.tsx
const missing = [];
for (const slug of indexSlugs) {
  const pagePath = path.join(invDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    missing.push(slug);
  }
}

// Find slugs on index where directory exists but check size
const existing = [];
for (const slug of indexSlugs) {
  const pagePath = path.join(invDir, slug, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    const stat = fs.statSync(pagePath);
    existing.push({ slug, size: stat.size });
  }
}

console.log(`\nMissing pages (no page.tsx): ${missing.length}`);
missing.forEach(s => console.log(`  - ${s}`));

console.log(`\nExisting pages:`);
existing.sort((a, b) => a.size - b.size);
existing.forEach(e => console.log(`  ${e.slug}: ${(e.size / 1024).toFixed(1)}KB`));

// Also check dynamic route for data
const dynamicContent = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
const dynamicSlugs = new Set();
const dynPattern = /'([a-z0-9-]+)':\s*\{/g;
while ((m = dynPattern.exec(dynamicContent)) !== null) {
  dynamicSlugs.add(m[1]);
}

// Which missing ones have dynamic data?
console.log(`\nMissing with dynamic route data:`);
for (const slug of missing) {
  if (dynamicSlugs.has(slug)) {
    console.log(`  ${slug} - HAS dynamic data`);
  } else {
    console.log(`  ${slug} - NO dynamic data`);
  }
}
