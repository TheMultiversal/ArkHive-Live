const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Find all patterns where slug: appears inside knownAssociates entries
// Different patterns to check:

// Pattern 1: name: '...', relationship: '...', slug: '...'  (no href)
const p1 = (f.match(/name:\s*'[^']*',\s*relationship:\s*'[^']*',\s*slug:\s*'/g) || []).length;
console.log('Pattern name,relationship,slug:', p1);

// Pattern 2: name: '...', slug: '...'  (no relationship - shouldn't exist but check)
const p2 = (f.match(/name:\s*'[^']*',\s*slug:\s*'/g) || []).length;
console.log('Pattern name,slug:', p2);

// Pattern 3: relationship: '...', href: '...', slug: '...'  (both href and slug)
const p3 = (f.match(/href:\s*'[^']*',\s*slug:\s*'/g) || []).length;
console.log('Pattern href,slug:', p3);

// Pattern 4: just find all slug: in KA context with broader look
// First show some actual examples
const lines = f.split('\n');
let inKA = false;
let shown = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('knownAssociates:')) inKA = true;
  if (inKA && lines[i].match(/^\s*\]/)) inKA = false;
  if (inKA && lines[i].includes('slug:') && shown < 5) {
    console.log(`\nLine ${i + 1}: ${lines[i].trim()}`);
    shown++;
  }
}
