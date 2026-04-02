const fs = require('fs');
const path = require('path');
const DIR = 'src/data/investigations';
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();
let total = 0, low = 0;
const lowList = [];
for (const file of files) {
  const text = fs.readFileSync(path.join(DIR, file), 'utf-8');
  const re = /'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const slug = m[1];
    const pos = m.index;
    const after = text.slice(pos, pos + 5000);
    const srcMatch = after.match(/sources:\s*\[/);
    if (!srcMatch) continue;
    total++;
    const srcStart = pos + srcMatch.index;
    let depth = 0, count = 0, inSrc = false;
    for (let i = srcStart; i < text.length; i++) {
      if (text[i] === '[') { depth++; inSrc = true; }
      if (text[i] === ']') { depth--; if (depth === 0 && inSrc) break; }
      if (text[i] === '{' && depth === 1) count++;
    }
    if (count <= 2) { low++; lowList.push(`${slug} (${count}) [${file}]`); }
  }
}
console.log(`Total: ${total}, Low (<=2): ${low}`);
lowList.forEach(l => console.log(`  ${l}`));
