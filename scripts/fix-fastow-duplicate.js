const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');
const lines = f.split('\n');

// Fix: Remove the duplicate/orphaned lines 43772-43778 (0-indexed: 43771-43777)
// Line 43772 has "  },\r }],\r" which is garbage + duplicate knownAssociates follows
// Lines 43773-43778 are duplicates of 43766-43771

// Remove lines 43772-43778 (indices 43771-43777)
lines.splice(43771, 7);

// Also need to fix line that's now at position ~43771 (was 43779): should just be "  },"
// Check what's there now
console.log('After splice, line at 43771:', JSON.stringify(lines[43771]));
console.log('After splice, line at 43772:', JSON.stringify(lines[43772]));

fs.writeFileSync(file, lines.join('\n'));
console.log('Fixed orphaned duplicate lines');
