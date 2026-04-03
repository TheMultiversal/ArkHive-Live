const fs = require('fs'), path = require('path');
const DIR = path.resolve('src/data/investigations');
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();
let total = 0, withD = 0;
const without = [];

for (const f of files) {
  const txt = fs.readFileSync(path.join(DIR, f), 'utf-8');
  const re = /'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(txt)) !== null) {
    const slug = m[1];
    total++;
    const start = m.index;
    // Find the investigation block
    let depth = 0, end = -1;
    const brace = txt.indexOf('{', start + m[0].indexOf('{'));
    for (let j = brace; j < txt.length; j++) {
      if (txt[j] === '{') depth++;
      if (txt[j] === '}') { depth--; if (depth === 0) { end = j; break; } }
    }
    const block = txt.slice(start, end + 1);
    if (/defendants:\s*\[/.test(block)) withD++;
    else without.push(slug);
  }
}

console.log('Total:', total, 'With defendants:', withD, 'Without:', without.length);
console.log('\nMissing defendants:');
console.log(without.join('\n'));
