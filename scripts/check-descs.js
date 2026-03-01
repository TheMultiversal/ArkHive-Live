const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Check descriptions for script 2 targets
const descTargets = [
  'michael-cohen', 'les-wexner', 'sean-hannity', 'ali-alexander', 'merrick-garland',
  'alexander-torshin', 'paul-erickson', 'mitch-mcconnell', 'dan-scavino', 'brad-parscale',
  'juan-merchan', 'tanya-chutkan', 'jenna-ellis', 'paula-white', 'benjamin-netanyahu',
  'volodymyr-zelensky', 'jair-bolsonaro', 'mary-trump', 'maryanne-trump-barry',
  'johnny-mcentee', 'marla-maples', 'ivana-trump'
];

descTargets.forEach(slug => {
  const key = "'" + slug + "'";
  const idx = c.indexOf(key);
  if (idx < 0) { console.log(`${slug}: NOT FOUND`); return; }
  
  // Find description field after this slug
  const block = c.substring(idx, idx + 3000);
  const descMatch = block.match(/description:\s*'((?:[^'\\]|\\.)*)'/);
  if (descMatch) {
    const desc = descMatch[1];
    console.log(`${slug}: (${desc.length} chars) ${desc.substring(0, 100)}...`);
  } else {
    // Try backtick description
    const descMatch2 = block.match(/description:\s*`([^`]*)`/);
    if (descMatch2) {
      console.log(`${slug}: (${descMatch2[1].length} chars) ${descMatch2[1].substring(0, 100)}...`);
    } else {
      console.log(`${slug}: DESCRIPTION NOT FOUND`);
    }
  }
});

// Also check the structure of a profile that needs knownAssociates
console.log('\n--- Sample profile without knownAssociates (mary-trump) ---');
const maryIdx = c.indexOf("'mary-trump'");
if (maryIdx > 0) {
  // Find the affiliations closing
  const block = c.substring(maryIdx, maryIdx + 3000);
  const lines = block.split('\n');
  for (let i = 0; i < Math.min(lines.length, 60); i++) {
    if (lines[i].includes('affiliations') || lines[i].includes('],') || lines[i].includes('controversies') || lines[i].includes('knownAssociates')) {
      console.log(`  line+${i}: ${lines[i]}`);
    }
  }
}

console.log('\n--- Sample profile WITH knownAssociates (shou-zi-chew) ---');
const shouIdx = c.indexOf("'shou-zi-chew'");
if (shouIdx > 0) {
  const block = c.substring(shouIdx, shouIdx + 4000);
  const lines = block.split('\n');
  for (let i = 0; i < Math.min(lines.length, 80); i++) {
    if (lines[i].includes('affiliations') || lines[i].includes('],') || lines[i].includes('controversies') || lines[i].includes('knownAssociates')) {
      console.log(`  line+${i}: ${lines[i]}`);
    }
  }
}
