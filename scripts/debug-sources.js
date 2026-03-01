const fs = require('fs');
const f = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const re = /sources:\s*\[\s*\]/g;
let m;
while (m = re.exec(f)) {
  const start = Math.max(0, m.index - 100);
  const end = Math.min(f.length, m.index + m[0].length + 50);
  const snippet = f.substring(start, end).replace(/\n/g, '\\n');
  console.log(`Offset ${m.index}: matched="${m[0]}" context: ...${snippet}...`);
}
