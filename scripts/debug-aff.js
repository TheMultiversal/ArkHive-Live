const fs = require('fs');
const d = fs.readFileSync('src/data/investigations/f.ts', 'utf8');
const m = d.indexOf("'financial-crisis-accountability-failure'");
if (m >= 0) {
  const chunk = d.substring(m, m + 10000);
  const idx = chunk.indexOf('affiliations:');
  console.log('Affiliations found at offset:', idx);
  if (idx > 0) {
    console.log('Content around affiliations:');
    console.log(chunk.substring(idx, idx + 500));
  } else {
    // Check total entry length
    const nextEntry = chunk.match(/^\s*'[\w-]+':\s*\{/m);
    console.log('No affiliations in chunk. Next entry at:', nextEntry ? nextEntry.index : 'none');
    console.log('First 200 chars:', chunk.substring(0, 200));
  }
} else {
  console.log('slug not found');
}
