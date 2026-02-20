const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '.git'].includes(e.name)) files.push(...walk(p));
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) files.push(p);
  }
  return files;
}

const files = walk('src');
let totalFixes = 0;

for (const f of files) {
  let txt = fs.readFileSync(f, 'utf8');
  const before = txt.length;
  
  // Fix double wrapping: web/2024/ wrapping another web/2024/
  txt = txt.replace(/https:\/\/web\.archive\.org\/web\/2024\/https:\/\/web\.archive\.org\/web\/2024\//g, 'https://web.archive.org/web/2024/');
  
  // Fix web/2024/ wrapping a timestamped URL like web/20241225.../
  const re2 = /https:\/\/web\.archive\.org\/web\/2024\/(https:\/\/web\.archive\.org\/web\/\d{14}\/)/g;
  txt = txt.replace(re2, '$1');
  
  // Fix web/2024/ wrapping http://web.archive.org/web/timestamp/
  const re3 = /https:\/\/web\.archive\.org\/web\/2024\/http:\/\/web\.archive\.org\/web\/(\d{14}\/)/g;
  txt = txt.replace(re3, 'https://web.archive.org/web/$1');
  
  if (txt.length !== before) {
    fs.writeFileSync(f, txt, 'utf8');
    totalFixes++;
    console.log('Fixed:', path.relative(process.cwd(), f));
  }
}
console.log('Total files fixed:', totalFixes);
