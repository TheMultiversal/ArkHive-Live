const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Check around the known character index for ehud-barak  
const idx = c.indexOf('ehud-barak');
if (idx === -1) {
  console.log('ehud-barak NOT FOUND');
} else {
  console.log('Found at char index', idx);
  // Show surrounding 200 chars
  console.log('Context:');
  console.log(c.substring(Math.max(0, idx - 100), idx + 200));
}

// Also check if the profile KEY exists (not just as a reference)
const keyPatterns = [
  "'ehud-barak': {",
  "'ehud-barak' : {",
  '"ehud-barak": {',
  "  'ehud-barak':",
];
for (const p of keyPatterns) {
  const found = c.indexOf(p);
  console.log(`\nPattern "${p}": ${found === -1 ? 'NOT FOUND' : 'found at ' + found}`);
}

// Check for any line that starts with ehud-barak as a key
const lines = c.split('\n');
const matches = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('ehud-barak')) {
    matches.push(`L${i + 1}: ${lines[i].substring(0, 120)}`);
  }
}
console.log(`\nAll lines containing ehud-barak (${matches.length}):`);
matches.forEach(m => console.log(m));
