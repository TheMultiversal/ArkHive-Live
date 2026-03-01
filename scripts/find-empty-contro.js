const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const lines = c.split('\n');
let slug = '';
let empty = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^  '([a-z][a-z0-9-]*)': \{/);
  if (m) slug = m[1];
  if (lines[i].includes('controversies: []')) empty.push(slug);
}
console.log('Empty controversies:', empty.length);
empty.forEach(s => console.log(s));
