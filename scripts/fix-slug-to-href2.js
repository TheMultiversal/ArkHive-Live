const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Count slug: that are NOT inside investigation objects (which have title: and severity:)
// In KA entries, slug: appears on the same line as relationship:
const lines = f.split('\n');
let fixCount = 0;
const newLines = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  // If line has slug: but also has relationship: (or immediately follows a line with relationship:)
  // it's a KA entry, not an investigation entry
  if (line.includes('slug:') && !line.includes('severity:') && !line.includes('title:')) {
    // Check if this line or previous lines in the same object have 'relationship:'
    const isKA = line.includes('relationship:') || 
      (i > 0 && lines[i-1].includes('relationship:')) ||
      (i > 1 && lines[i-2].includes('relationship:'));
    if (isKA) {
      line = line.replace(/slug:/g, 'href:');
      fixCount++;
    }
  }
  newLines.push(line);
}

console.log('Fixed lines:', fixCount);
fs.writeFileSync(file, newLines.join('\n'));

// Now fix bare slugs that got converted to href: but don't have /entities/ prefix
let f2 = fs.readFileSync(file, 'utf8');
const bareCount = (f2.match(/href:\s*'(?!\/)[^']+'/g) || []).length;
console.log('Bare href values to fix:', bareCount);
f2 = f2.replace(/(href:\s*')(?!\/)([^']+)(')/g, "$1/entities/individuals/$2$3");
fs.writeFileSync(file, f2);
const remaining = (f2.match(/href:\s*'(?!\/)[^']+'/g) || []).length;
console.log('Remaining bare hrefs:', remaining);
console.log('Done.');
