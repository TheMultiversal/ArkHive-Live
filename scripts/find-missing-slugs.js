const fs = require('fs');
const path = require('path');

// Step 1: Get all existing slugs
const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');
const existing = new Set();
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^\s+'([a-z0-9-]+)':\s*\{/);
  if (m) existing.add(m[1]);
}

// Step 2: Walk investigation files
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(f => {
    const fp = path.join(dir, f);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) results = results.concat(walk(fp));
    else results.push(fp);
  });
  return results;
}

const files = walk('src/app/investigations').filter(f => f.endsWith('.tsx'));
const referenced = new Set();
const re = /href:\s*['"]\/entities\/individuals\/([a-z0-9-]+)['"]/g;

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = re.exec(c)) !== null) {
    referenced.add(m[1]);
  }
});

// Step 3: Find missing
const missing = [...referenced].filter(s => !existing.has(s)).sort();

console.log('Existing profiles:', existing.size);
console.log('Referenced slugs:', referenced.size);
console.log('Missing slugs:', missing.length);
console.log('---');
missing.forEach(s => console.log(s));
