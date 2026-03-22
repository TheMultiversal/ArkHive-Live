const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !['types.ts','index.ts','moneyTrails.ts'].includes(f));
let dupes = 0;
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const slugRegex = /^\s*'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = slugRegex.exec(content)) !== null) {
    const slug = m[1];
    const start = m.index;
    let depth = 0, blockEnd = start, foundStart = false;
    for (let i = start; i < content.length; i++) {
      if (content[i] === '{') { depth++; foundStart = true; }
      if (content[i] === '}') { depth--; }
      if (foundStart && depth === 0) { blockEnd = i; break; }
    }
    const block = content.substring(start, blockEnd + 1);
    const count = (block.match(/eventOriginDate/g) || []).length;
    if (count > 1) {
      console.log(f + ':' + slug + ' has ' + count + ' eventOriginDate entries!');
      dupes++;
    }
  }
}
console.log('Duplicates found: ' + dupes);
