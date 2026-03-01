const fs = require('fs');
const filePath = 'src/app/entities/individuals/[slug]/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Extract all profiles with their name field
const profileRegex = /^  '([a-z][a-z0-9-]*)': \{/gm;
const profiles = [];
let m;
while ((m = profileRegex.exec(content)) !== null) {
  profiles.push({ slug: m[1], pos: m.index });
}

const allProfiles = {};
for (let i = 0; i < profiles.length; i++) {
  const start = profiles[i].pos;
  const end = i + 1 < profiles.length ? profiles[i + 1].pos : content.length;
  const block = content.substring(start, end);
  
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const name = nameMatch ? nameMatch[1] : profiles[i].slug;
  const hasKA = block.includes('knownAssociates');
  
  allProfiles[profiles[i].slug] = { name, hasKA };
}

fs.writeFileSync('scripts/all-profiles.json', JSON.stringify(allProfiles, null, 2));
console.log(`Total profiles: ${Object.keys(allProfiles).length}`);
console.log(`With KA: ${Object.values(allProfiles).filter(p => p.hasKA).length}`);
console.log(`Missing KA: ${Object.values(allProfiles).filter(p => !p.hasKA).length}`);

// Also dump the missing slugs grouped by rough category based on what's around them
const missing = Object.entries(allProfiles).filter(([,p]) => !p.hasKA).map(([slug, p]) => `${slug}: ${p.name}`);
fs.writeFileSync('scripts/missing-ka-names.txt', missing.join('\n'));
console.log('Wrote scripts/all-profiles.json and scripts/missing-ka-names.txt');
