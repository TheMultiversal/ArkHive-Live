const fs = require('fs');
const path = require('path');
// Find duplicate keys in investigation shard files
for (let c = 97; c <= 122; c++) {
  const letter = String.fromCharCode(c);
  const f = path.join('src/data/investigations', letter + '.ts');
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  const keys = content.match(/'([a-z][\w-]+)':\s*\{/g) || [];
  const slugs = keys.map(k => k.match(/'([^']+)'/)[1]);
  const seen = {};
  slugs.forEach(s => { seen[s] = (seen[s] || 0) + 1; });
  const dupes = Object.entries(seen).filter(([,v]) => v > 1);
  if (dupes.length) {
    console.log(letter + '.ts: DUPLICATES -', dupes.map(([k,v]) => k + ' x' + v).join(', '));
  }
}
