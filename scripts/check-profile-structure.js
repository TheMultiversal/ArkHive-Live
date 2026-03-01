const fs = require('fs');
const filePath = 'src/app/entities/individuals/[slug]/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find profiles missing knownAssociates and check their last field
const profileRegex = /^  '([a-z][a-z0-9-]*)': \{/gm;
const profiles = [];
let m;
while ((m = profileRegex.exec(content)) !== null) {
  profiles.push({ slug: m[1], pos: m.index });
}

// Check pattern for first 10 missing profiles
let count = 0;
for (let i = 0; i < profiles.length && count < 10; i++) {
  const start = profiles[i].pos;
  const end = i + 1 < profiles.length ? profiles[i + 1].pos : content.length;
  const block = content.substring(start, end);
  
  if (block.includes('knownAssociates')) continue;
  count++;
  
  // Find the last field before the closing
  // Look for the pattern right before `  },`
  const lines = block.split('\n');
  const lastLines = lines.slice(-8);
  console.log(`\n=== ${profiles[i].slug} (last 8 lines) ===`);
  lastLines.forEach(l => console.log(l));
}
