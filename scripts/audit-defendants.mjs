// Audit script: Check all 21 gold standard investigations for defendant profiles
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const INV_DIR = path.join(ROOT, 'src/data/investigations');
const IND_DIR = path.join(ROOT, 'src/data/individuals');

const GOLD_STANDARDS = [
  { slug: '1980s-insider-trading', file: '1.ts' },
  { slug: 'enron-corporate-fraud-scandal', file: 'e.ts' },
  { slug: 'boeing-safety-crisis', file: 'b.ts' },
  { slug: 'opioid-crisis-corporate-mass-murder', file: 'o.ts' },
  { slug: '2008-financial-crisis', file: '2.ts' },
  { slug: 'george-floyd', file: 'g.ts' },
  { slug: 'iraq-sanctions', file: 'i.ts' },
  { slug: 'cointelpro-domestic-surveillance-legacy', file: 'c.ts' },
  { slug: 'tuskegee-experiment', file: 't.ts' },
  { slug: 'mkultra-cia-human-experimentation', file: 'm.ts' },
  { slug: 'iran-contra-full-financial-trail', file: 'i.ts' },
  { slug: 'watergate', file: 'w.ts' },
  { slug: 'my-lai-massacre', file: 'm.ts' },
  { slug: 'cia-torture-program', file: 'c.ts' },
  { slug: 'nsa-mass-surveillance', file: 'n.ts' },
  { slug: 'drone-assassinations', file: 'd.ts' },
  { slug: 'agent-orange', file: 'a.ts' },
  { slug: 'big-tobacco-lies', file: 'b.ts' },
  { slug: 'flint-water-crisis', file: 'f.ts' },
  { slug: 'wells-fargo-fraud', file: 'w.ts' },
  { slug: 'banking-libor-manipulation', file: 'b.ts' },
];

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Build index of all individual slugs across all files
const individualIndex = {};
const indFiles = fs.readdirSync(IND_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');

for (const file of indFiles) {
  const content = fs.readFileSync(path.join(IND_DIR, file), 'utf-8');
  // Find all slug keys: 'some-slug': {
  const slugRegex = /['"]([a-z0-9-]+)['"]\s*:\s*\{/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    // Estimate profile size: find the content between this match and the next top-level key
    const startPos = match.index;
    // Find next top-level slug entry or end of file
    const remaining = content.slice(startPos + match[0].length);
    // Count lines until next top-level entry
    const nextEntry = remaining.search(/\n\s{1,4}['"][a-z0-9-]+['"]\s*:\s*\{/);
    const profileText = nextEntry > 0 ? remaining.slice(0, nextEntry) : remaining.slice(0, 2000);
    const lineCount = profileText.split('\n').length;
    
    // Check for content/description length as enrichment indicator
    const hasLongContent = profileText.includes('content:') || profileText.includes('description:');
    const contentMatch = profileText.match(/content:\s*[`'"]([\s\S]*?)[`'"]/);
    const descMatch = profileText.match(/description:\s*[`'"]([\s\S]*?)[`'"]/);
    const contentLen = (contentMatch ? contentMatch[1].length : 0) + (descMatch ? descMatch[1].length : 0);
    
    let status = 'stub';
    if (lineCount > 100 || contentLen > 500) status = 'enriched';
    else if (lineCount > 40 || contentLen > 200) status = 'moderate';
    
    individualIndex[slug] = { file, lineCount, contentLen, status };
  }
}

console.log(`Loaded ${Object.keys(individualIndex).length} individual profiles.\n`);

// Now process each investigation
let totalDefendants = 0;
let totalWithProfile = 0;
let totalMissing = 0;
let totalWithImage = 0;
let totalWithoutImage = 0;

const allMissing = [];

for (const inv of GOLD_STANDARDS) {
  const filePath = path.join(INV_DIR, inv.file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the investigation block
  const invStart = content.indexOf(`'${inv.slug}':`);
  if (invStart === -1) {
    console.log(`\n## ${inv.slug} -- NOT FOUND in ${inv.file}`);
    continue;
  }
  
  // Find the defendants array for this specific investigation
  const afterInvStart = content.slice(invStart);
  
  // Find defendants: [ for this investigation (before the next investigation)
  const nextInvMatch = afterInvStart.slice(100).search(/\n\s{1,4}['"][a-z0-9-]+['"]\s*:\s*\{/);
  const invBlock = nextInvMatch > 0 ? afterInvStart.slice(0, nextInvMatch + 100) : afterInvStart;
  
  const defStart = invBlock.indexOf('defendants:');
  if (defStart === -1) {
    console.log(`\n## ${inv.slug} -- NO defendants array found`);
    continue;
  }
  
  // Extract defendants array
  const defBlock = invBlock.slice(defStart);
  
  // Parse defendant names and imageUrl  
  const defendants = [];
  const nameRegex = /name:\s*['"`]([^'"`]+)['"`]/g;
  const imageRegex = /imageUrl:\s*['"`]([^'"`]*)['"`]/g;
  
  // Get all names
  let nameMatch;
  const names = [];
  while ((nameMatch = nameRegex.exec(defBlock)) !== null) {
    names.push({ name: nameMatch[1], index: nameMatch.index });
  }
  
  // Get all imageUrls
  let imgMatch;
  const images = [];
  while ((imgMatch = imageRegex.exec(defBlock)) !== null) {
    images.push({ url: imgMatch[1], index: imgMatch.index });
  }
  
  // Match names with their nearest imageUrl
  for (const n of names) {
    const slug = toSlug(n.name);
    // Find nearest imageUrl after this name
    const nearestImg = images.find(img => img.index > n.index && img.index < n.index + 500);
    const hasImage = nearestImg ? (nearestImg.url.length > 5) : false;
    const imageUrl = nearestImg ? nearestImg.url : '';
    
    defendants.push({
      name: n.name,
      slug,
      hasImage,
      imageUrl: hasImage ? imageUrl.slice(0, 60) + (imageUrl.length > 60 ? '...' : '') : '',
    });
  }
  
  console.log(`\n${'='.repeat(80)}`);
  console.log(`## ${inv.slug} (${defendants.length} defendants)`);
  console.log(`${'='.repeat(80)}`);
  console.log(`${'DEFENDANT NAME'.padEnd(35)} ${'SLUG'.padEnd(35)} ${'IMG'.padEnd(5)} ${'PROFILE'.padEnd(10)} STATUS`);
  console.log(`${'-'.repeat(35)} ${'-'.repeat(35)} ${'-'.repeat(5)} ${'-'.repeat(10)} ${'-'.repeat(10)}`);
  
  let invMissing = 0;
  let invWithProfile = 0;
  
  for (const d of defendants) {
    const profile = individualIndex[d.slug];
    const hasProfile = !!profile;
    const profileStatus = hasProfile ? profile.status : 'MISSING';
    
    if (!hasProfile) {
      invMissing++;
      totalMissing++;
      allMissing.push({ investigation: inv.slug, name: d.name, slug: d.slug, hasImage: d.hasImage });
    } else {
      invWithProfile++;
      totalWithProfile++;
    }
    
    if (d.hasImage) totalWithImage++;
    else totalWithoutImage++;
    
    totalDefendants++;
    
    const imgIcon = d.hasImage ? 'YES' : 'NO';
    const profIcon = hasProfile ? 'YES' : 'NO';
    
    console.log(`${d.name.padEnd(35)} ${d.slug.padEnd(35)} ${imgIcon.padEnd(5)} ${profIcon.padEnd(10)} ${profileStatus}`);
  }
  
  console.log(`  >> ${invWithProfile}/${defendants.length} have profiles, ${invMissing} MISSING`);
}

// Summary
console.log(`\n\n${'#'.repeat(80)}`);
console.log(`## GRAND SUMMARY`);
console.log(`${'#'.repeat(80)}`);
console.log(`Total defendants across 21 investigations: ${totalDefendants}`);
console.log(`With individual profiles: ${totalWithProfile}`);
console.log(`MISSING profiles: ${totalMissing}`);
console.log(`With imageUrl: ${totalWithImage}`);
console.log(`Without imageUrl: ${totalWithoutImage}`);
console.log(`\n## ALL MISSING PROFILES (${allMissing.length} total):`);
console.log(`${'INVESTIGATION'.padEnd(45)} ${'DEFENDANT'.padEnd(35)} ${'SLUG'.padEnd(35)} IMG`);
console.log(`${'-'.repeat(45)} ${'-'.repeat(35)} ${'-'.repeat(35)} ---`);
for (const m of allMissing) {
  console.log(`${m.investigation.padEnd(45)} ${m.name.padEnd(35)} ${m.slug.padEnd(35)} ${m.hasImage ? 'YES' : 'NO'}`);
}
