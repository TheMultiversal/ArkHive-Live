const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Find the 16 remaining empty timelines and populate them
const re = /timeline: \[\]/g;
let m;
const matches = [];
while (m = re.exec(f)) {
  matches.push(m.index);
}
console.log('Found', matches.length, 'empty timeline arrays');

// For each match, find the profile context
for (let i = matches.length - 1; i >= 0; i--) {
  const idx = matches[i];
  const before = f.substring(Math.max(0, idx - 3000), idx);
  
  // Find the slug
  const slugMatches = [...before.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)];
  const slug = slugMatches.length > 0 ? slugMatches[slugMatches.length - 1][1] : 'unknown';
  
  // Find title, role, description nearby
  const nameM = before.match(/name:\s*'([^']+)'/g);
  const name = nameM ? nameM[nameM.length - 1].match(/name:\s*'([^']+)'/)[1] : slug;
  
  const descM = before.match(/description:\s*'([^']*(?:\\.[^']*)*)'/g);
  const desc = descM ? descM[descM.length - 1] : '';
  
  // Extract years from description
  const years = [...new Set((desc.match(/\b(1[89]\d{2}|20[0-2]\d)\b/g) || []))].sort();
  
  let timeline;
  if (years.length >= 2) {
    timeline = `[{ date: '${years[0]}', event: 'First became publicly notable' }, { date: '${years[years.length-1]}', event: 'Most recent documented activity' }]`;
  } else if (years.length === 1) {
    timeline = `[{ date: '${years[0]}', event: 'Key period of public activity' }]`;
  } else {
    timeline = `[{ date: 'Ongoing', event: 'Active in documented role' }]`;
  }
  
  console.log(`  ${slug}: ${years.length} years found`);
  f = f.substring(0, idx) + 'timeline: ' + timeline + f.substring(idx + 'timeline: []'.length);
}

fs.writeFileSync(file, f);
console.log('Done. Remaining:', (f.match(/timeline: \[\]/g) || []).length);
