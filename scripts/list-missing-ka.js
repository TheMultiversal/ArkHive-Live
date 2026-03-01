const fs = require('fs');
const filePath = 'src/app/entities/individuals/[slug]/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find all profile keys
const profileRegex = /^  '([a-z][a-z0-9-]*)': \{/gm;
const profiles = [];
let m;
while ((m = profileRegex.exec(content)) !== null) {
  profiles.push({ slug: m[1], pos: m.index });
}

// For each profile, check if knownAssociates field exists before next profile
const missing = [];
for (let i = 0; i < profiles.length; i++) {
  const start = profiles[i].pos;
  const end = i + 1 < profiles.length ? profiles[i + 1].pos : content.length;
  const block = content.substring(start, end);
  if (!block.includes('knownAssociates')) {
    missing.push(profiles[i].slug);
  }
}

console.log(`Total profiles: ${profiles.length}`);
console.log(`Missing knownAssociates: ${missing.length}`);
fs.writeFileSync('scripts/missing-ka-slugs.json', JSON.stringify(missing, null, 2));
console.log('Wrote scripts/missing-ka-slugs.json');
