const fs = require('fs');

const indFile = 'src/app/entities/individuals/[slug]/page.tsx';
const indContent = fs.readFileSync(indFile, 'utf-8');

// Find all profile keys
const re = /^\s+'([\w-]+)':\s*\{/gm;
const re2 = /\},\s*'([\w-]+)':\s*\{/g;
const allSlugs = new Set();
let m;
while ((m = re.exec(indContent)) !== null) allSlugs.add(m[1]);
while ((m = re2.exec(indContent)) !== null) allSlugs.add(m[1]);

console.log(`Total individual profiles: ${allSlugs.size}`);

// For each profile, check if it mentions Epstein and count knownAssociates
let epsteinCount = 0;
const thinEpstein = [];
const emptyKA = [];

for (const slug of allSlugs) {
  const keyIdx = indContent.indexOf(`'${slug}': {`);
  if (keyIdx === -1) continue;
  
  // Get roughly the profile block (4000 chars or until next profile key)
  const block = indContent.substring(keyIdx, keyIdx + 6000);
  
  const isEpstein = block.toLowerCase().includes('epstein') || 
    block.includes('Ghislaine') || block.includes('Lolita Express');
  
  // Count knownAssociates
  const kaIdx = block.indexOf('knownAssociates:');
  let kaCount = 0;
  if (kaIdx !== -1) {
    const kaSection = block.substring(kaIdx, kaIdx + 3000);
    const bracketEnd = kaSection.indexOf('],');
    if (bracketEnd !== -1) {
      const kaBlock = kaSection.substring(0, bracketEnd);
      kaCount = (kaBlock.match(/name:/g) || []).length;
    }
  }
  
  if (isEpstein) {
    epsteinCount++;
    if (kaCount <= 2) {
      thinEpstein.push({ slug, kaCount });
    }
  }
  
  if (kaCount === 0) {
    emptyKA.push(slug);
  }
}

console.log(`Epstein-related profiles: ${epsteinCount}`);
console.log(`Thin Epstein profiles (0-2 associates): ${thinEpstein.length}`);
if (thinEpstein.length > 0) {
  console.log('  Thin:');
  thinEpstein.forEach(p => console.log(`    ${p.slug}: ${p.kaCount}`));
}

console.log(`\nProfiles with EMPTY knownAssociates: ${emptyKA.length}`);
if (emptyKA.length > 0 && emptyKA.length < 40) {
  emptyKA.forEach(s => console.log(`  ${s}`));
}

// Check Epstein investigation page
console.log('\n=== EPSTEIN INVESTIGATION PAGE ===');
const epPage = 'src/app/investigations/epstein-network/page.tsx';
if (fs.existsSync(epPage)) {
  const epContent = fs.readFileSync(epPage, 'utf-8');
  console.log(`Lines: ${epContent.split('\n').length}`);
  
  const entityLinks = (epContent.match(/\/entities\/(individuals|agencies|corporations|organizations)\/[\w-]+/g) || []);
  console.log(`Entity links on page: ${entityLinks.length}`);
  const uniqueLinks = [...new Set(entityLinks)];
  console.log(`Unique entity links: ${uniqueLinks.length}`);
} else {
  console.log('NOT FOUND');
}

// Check for duplicate bill-barr/william-barr
console.log('\n=== DUPLICATES ===');
console.log(`bill-barr: ${allSlugs.has('bill-barr')}`);
console.log(`william-barr: ${allSlugs.has('william-barr')}`);

// Check agencies/corps/orgs Epstein connections
console.log('\n=== EPSTEIN IN AGENCIES/CORPS/ORGS ===');
for (const dir of ['agencies', 'corporations', 'organizations']) {
  const f = `src/app/entities/${dir}/[slug]/page.tsx`;
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf-8');
  const slugRe = /^\s+'([\w-]+)':\s*\{/gm;
  const slugRe2 = /\},\s*'([\w-]+)':\s*\{/g;
  const slugs = new Set();
  while ((m = slugRe.exec(c)) !== null) slugs.add(m[1]);
  while ((m = slugRe2.exec(c)) !== null) slugs.add(m[1]);
  
  const epSlugs = [];
  for (const slug of slugs) {
    const idx = c.indexOf(`'${slug}': {`);
    if (idx === -1) continue;
    const block = c.substring(idx, idx + 3000);
    if (block.toLowerCase().includes('epstein')) epSlugs.push(slug);
  }
  console.log(`${dir}: ${epSlugs.length} (${epSlugs.join(', ')})`);
}
