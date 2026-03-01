const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

const before = (f.match(/relationship:\s*'[^']*',\s*slug:\s*'/g) || []).length;
console.log('KA entries with slug:', before);

// Replace slug: with href: ONLY in knownAssociates entries
// Pattern: relationship: '...', slug: '...' -> relationship: '...', href: '...'
f = f.replace(/(relationship:\s*'[^']*',\s*)slug:/g, '$1href:');

const after = (f.match(/relationship:\s*'[^']*',\s*slug:\s*'/g) || []).length;
console.log('After fix:', after);
console.log('Fixed:', before - after);

fs.writeFileSync(file, f);
console.log('File written.');
