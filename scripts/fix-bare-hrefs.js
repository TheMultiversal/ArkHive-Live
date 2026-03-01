const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Find href values that are bare slugs (no /entities/ prefix)
// Pattern: href: 'some-slug' where some-slug doesn't start with /
const before = (f.match(/href:\s*'(?!\/)[^']+'/g) || []).length;
console.log('Bare slug hrefs:', before);

// Replace bare slugs with full paths
f = f.replace(/href:\s*'(?!\/)([^']+)'/g, "href: '/entities/individuals/$1'");

const after = (f.match(/href:\s*'(?!\/)[^']+'/g) || []).length;
console.log('After fix:', after);
console.log('Fixed:', before - after);

fs.writeFileSync(file, f);
console.log('File written.');
