const fs = require('fs');
let c = fs.readFileSync('src/app/documents/page.tsx', 'utf8');

// Fix investigation fields missing closing quote: investigation: 'Foo, → investigation: 'Foo',
// Match lines like: investigation: 'Some Text Here,
c = c.replace(/investigation: '([^'\n]+),\n/g, "investigation: '$1',\n");

// Fix missing comma before auto-generated section
c = c.replace('}\n\n  // === Investigation Documents', '},\n\n  // === Investigation Documents');

fs.writeFileSync('src/app/documents/page.tsx', c);

// Verify
const fixed = (c.match(/investigation: '[^']*',/g) || []).length;
const broken = (c.match(/investigation: '[^',\n]+,\n/g) || []).length;
console.log(`Fixed investigation fields: ${fixed}, remaining broken: ${broken}`);
