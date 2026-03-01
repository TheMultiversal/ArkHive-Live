const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

const descTargets = [
  'michael-cohen', 'les-wexner', 'sean-hannity', 'ali-alexander', 'merrick-garland',
  'alexander-torshin', 'paul-erickson', 'mitch-mcconnell', 'dan-scavino', 'brad-parscale',
  'juan-merchan', 'tanya-chutkan', 'jenna-ellis', 'paula-white', 'benjamin-netanyahu',
  'volodymyr-zelensky', 'jair-bolsonaro', 'mary-trump', 'maryanne-trump-barry',
  'johnny-mcentee', 'marla-maples', 'ivana-trump'
];

const results = [];
descTargets.forEach(slug => {
  const key = "'" + slug + "':";
  const idx = c.indexOf(key);
  if (idx < 0) { results.push(`${slug}: NOT FOUND`); return; }
  
  const block = c.substring(idx, idx + 3000);
  const descMatch = block.match(/description:\s*'((?:[^'\\]|\\.)*)'/s);
  if (descMatch) {
    results.push(`${slug}: (${descMatch[1].length} chars) "${descMatch[1].substring(0, 120)}"`);
  } else {
    results.push(`${slug}: DESC NOT MATCHED`);
  }
});

fs.writeFileSync('scripts/desc-check-output.txt', results.join('\n'));
console.log(results.join('\n'));
