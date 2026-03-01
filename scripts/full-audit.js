const fs = require('fs');

function audit(label, path) {
  const f = fs.readFileSync(path, 'utf8');
  
  // Count profiles
  const profileMatches = f.match(/['"][a-z0-9-]+['"]\s*:\s*\{/g) || [];
  
  // Count empty arrays
  const emptySources = (f.match(/sources:\s*\[\s*\]/g) || []).length;
  const emptyTimelines = (f.match(/timeline:\s*\[\s*\]/g) || []).length;
  const emptyKA = (f.match(/knownAssociates:\s*\[\s*\]/g) || []).length;
  const emptyControversies = (f.match(/controversies:\s*\[\s*\]/g) || []).length;
  const emptyAffiliations = (f.match(/affiliations:\s*\[\s*\]/g) || []).length;
  
  // Check for em/en dashes
  const emDashes = (f.match(/\u2014/g) || []).length;
  const enDashes = (f.match(/\u2013/g) || []).length;
  
  console.log(`\n=== ${label} ===`);
  console.log(`  Profiles: ~${profileMatches.length}`);
  console.log(`  Empty sources: ${emptySources}`);
  console.log(`  Empty timelines: ${emptyTimelines}`);
  console.log(`  Empty knownAssociates: ${emptyKA}`);
  console.log(`  Empty controversies: ${emptyControversies}`);
  console.log(`  Empty affiliations: ${emptyAffiliations}`);
  console.log(`  Em dashes: ${emDashes}`);
  console.log(`  En dashes: ${enDashes}`);
}

audit('Individuals', 'src/app/entities/individuals/[slug]/page.tsx');
audit('Agencies', 'src/app/entities/agencies/[slug]/page.tsx');
audit('Corporations', 'src/app/entities/corporations/[slug]/page.tsx');
audit('Organizations', 'src/app/entities/organizations/[slug]/page.tsx');

// Check investigations too
const inv = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
const invEmDash = (inv.match(/\u2014/g) || []).length;
const invEnDash = (inv.match(/\u2013/g) || []).length;
console.log(`\n=== Investigations ===`);
console.log(`  Em dashes: ${invEmDash}`);
console.log(`  En dashes: ${invEnDash}`);

console.log('\n=== SUMMARY ===');
console.log('Audit complete.');
