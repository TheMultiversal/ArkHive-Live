const fs = require('fs');
const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');

let emptyKA = [];
let emptyContro = [];
let currentSlug = '';

for (let i = 0; i < lines.length; i++) {
  const profileMatch = lines[i].match(/^\s+"([a-z0-9-]+)":\s*\{/);
  if (profileMatch) {
    currentSlug = profileMatch[1];
  }
  if (lines[i].includes('knownAssociates: []') || lines[i].includes('knownAssociates:[]')) {
    emptyKA.push(currentSlug);
  }
  if (lines[i].includes('controversies: []') || lines[i].includes('controversies:[]')) {
    emptyContro.push(currentSlug);
  }
}

console.log('=== EMPTY knownAssociates (' + emptyKA.length + ') ===');
emptyKA.forEach(s => console.log(s));
console.log('\n=== EMPTY controversies (' + emptyContro.length + ') ===');
emptyContro.forEach(s => console.log(s));
