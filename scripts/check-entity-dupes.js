// More thorough duplicate detection - handles varying indentation
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'individuals');
const files = fs.readdirSync(dir).filter(f => /^[a-z]\.ts$/.test(f));

let totalDupes = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match any indentation level: key followed by object start
  const keyPattern = /^\s+'([a-z0-9][-a-z0-9]*)':\s*\{/gm;
  const keyCounts = {};
  let match;
  while ((match = keyPattern.exec(content)) !== null) {
    const slug = match[1];
    keyCounts[slug] = (keyCounts[slug] || 0) + 1;
  }

  const dupes = Object.entries(keyCounts).filter(([, count]) => count > 1);
  if (dupes.length > 0) {
    console.log(`${file}:`);
    for (const [slug, count] of dupes) {
      console.log(`  ${slug} x${count}`);
      totalDupes++;
    }
  }
}

console.log(`\nTotal still-duplicate keys: ${totalDupes}`);
