const fs = require('fs');
const path = require('path');

// Collect ALL href links across all entity files
const entityDirs = ['individuals', 'agencies', 'corporations', 'organizations'];
const allHrefs = new Map(); // href -> Set of files referencing it
const existingSlugs = {
  individuals: new Set(),
  agencies: new Set(),
  corporations: new Set(),
  organizations: new Set(),
};

// 1. Collect all existing slugs from [slug]/page.tsx files
for (const dir of entityDirs) {
  const slugFile = `src/app/entities/${dir}/[slug]/page.tsx`;
  if (!fs.existsSync(slugFile)) continue;
  const content = fs.readFileSync(slugFile, 'utf-8');
  // Match keys like 'some-slug': {
  const re = /^\s+'([\w-]+)':\s*\{/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    existingSlugs[dir].add(m[1]);
  }
}

console.log('Existing entity counts:');
for (const dir of entityDirs) {
  console.log(`  ${dir}: ${existingSlugs[dir].size}`);
}

// 2. Scan ALL tsx files for href links to entities
function scanDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      // Match href patterns pointing to entities
      const hrefRe = /href[=:]\s*['"`]\/entities\/(individuals|agencies|corporations|organizations)\/([\w-]+)['"`]/g;
      let m;
      while ((m = hrefRe.exec(content)) !== null) {
        const href = `/entities/${m[1]}/${m[2]}`;
        const type = m[1];
        const slug = m[2];
        if (!allHrefs.has(href)) {
          allHrefs.set(href, { type, slug, files: new Set() });
        }
        allHrefs.get(href).files.add(fullPath.replace(/\\/g, '/'));
      }
    }
  }
}

scanDir('src');

// 3. Find broken links (referenced but no profile exists)
const broken = [];
const valid = [];
for (const [href, info] of allHrefs) {
  if (existingSlugs[info.type].has(info.slug)) {
    valid.push(href);
  } else {
    broken.push({ href, type: info.type, slug: info.slug, referencedIn: [...info.files] });
  }
}

console.log(`\nTotal unique entity links found: ${allHrefs.size}`);
console.log(`Valid links: ${valid.length}`);
console.log(`BROKEN links (no profile exists): ${broken.length}`);

if (broken.length > 0) {
  console.log('\n=== BROKEN LINKS ===');
  // Group by type
  for (const type of entityDirs) {
    const ofType = broken.filter(b => b.type === type);
    if (ofType.length === 0) continue;
    console.log(`\n--- ${type} (${ofType.length} missing) ---`);
    for (const b of ofType) {
      console.log(`  ${b.slug}`);
      for (const f of b.referencedIn) {
        console.log(`    <- ${f}`);
      }
    }
  }
}

// 4. Also check for profiles with very thin data (few fields)
console.log('\n=== THIN PROFILES (knownAssociates < 2) ===');
for (const dir of entityDirs) {
  const slugFile = `src/app/entities/${dir}/[slug]/page.tsx`;
  if (!fs.existsSync(slugFile)) continue;
  const content = fs.readFileSync(slugFile, 'utf-8');
  
  for (const slug of existingSlugs[dir]) {
    const keyIdx = content.indexOf(`'${slug}': {`);
    if (keyIdx === -1) continue;
    
    // Find the knownAssociates array
    const kaIdx = content.indexOf('knownAssociates:', keyIdx);
    if (kaIdx === -1 || kaIdx - keyIdx > 8000) continue;
    
    // Count entries in knownAssociates
    const bracketStart = content.indexOf('[', kaIdx);
    if (bracketStart === -1) continue;
    
    let depth = 0;
    let bracketEnd = -1;
    for (let i = bracketStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      if (content[i] === ']') { depth--; if (depth === 0) { bracketEnd = i; break; } }
    }
    
    if (bracketEnd === -1) continue;
    const kaBlock = content.substring(bracketStart, bracketEnd);
    const count = (kaBlock.match(/name:/g) || []).length;
    
    if (count < 2) {
      console.log(`  ${dir}/${slug}: ${count} associates`);
    }
  }
}

// 5. Summary stats
console.log('\n=== SUMMARY ===');
console.log(`Total entities: ${Object.values(existingSlugs).reduce((a, s) => a + s.size, 0)}`);
console.log(`Total cross-references: ${allHrefs.size}`);
console.log(`Broken links to fix: ${broken.length}`);
