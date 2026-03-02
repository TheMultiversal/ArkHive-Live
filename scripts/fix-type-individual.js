const fs = require('fs');
const p = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(p, 'utf8');
const count = (f.match(/type: 'individual'/g) || []).length;
console.log('instances of type individual:', count);
f = f.replaceAll("type: 'individual'", "type: 'organization'");
fs.writeFileSync(p, f, 'utf8');
console.log('fixed');
