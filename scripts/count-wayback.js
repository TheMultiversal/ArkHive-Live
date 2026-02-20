const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '.git', 'scripts'].includes(e.name)) files.push(...walk(p));
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) files.push(p);
  }
  return files;
}

const files = walk('src');
let count = 0;
const urls = new Set();
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  const re = /https:\/\/web\.archive\.org\/web\/2024\/[^\s'")\]},]+/g;
  let m;
  while ((m = re.exec(txt)) !== null) {
    urls.add(m[0]);
    count++;
  }
}
console.log('Total web/2024/ URL instances in src:', count);
console.log('Unique URLs:', urls.size);
// Print first 20 unique URLs
const arr = [...urls];
for (let i = 0; i < Math.min(arr.length, 30); i++) {
  console.log(' ', arr[i]);
}
if (arr.length > 30) console.log(`  ... and ${arr.length - 30} more`);
