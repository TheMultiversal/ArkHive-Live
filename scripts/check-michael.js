const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Check for michael-m
const hasM = c.includes("'michael-m'");
console.log('michael-m exists:', hasM);

// Find all michael- slugs
const mm = [...c.matchAll(/^\s+'(michael-[a-z0-9-]*)':\s*\{/gm)];
mm.forEach(m => console.log('Found:', m[1]));
