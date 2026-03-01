const fs = require('fs');
const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Use regex to find profile slug followed eventually by empty knownAssociates
const profiles = {};
let currentSlug = null;
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  // Match profile key - uses single quotes
  const slugMatch = lines[i].match(/^  '([a-z][a-z0-9-]*)': \{/);
  if (slugMatch) {
    currentSlug = slugMatch[1];
    profiles[currentSlug] = { hasKA: false, emptyKA: false, hasContro: false, emptyContro: false };
  }
  if (currentSlug) {
    if (lines[i].includes('knownAssociates:')) {
      profiles[currentSlug].hasKA = true;
      if (lines[i].includes('knownAssociates: []')) {
        profiles[currentSlug].emptyKA = true;
      }
    }
    if (lines[i].includes('controversies:')) {
      profiles[currentSlug].hasContro = true;
      if (lines[i].includes('controversies: []')) {
        profiles[currentSlug].emptyContro = true;
      }
    }
  }
}

const slugs = Object.keys(profiles);
const emptyKA = slugs.filter(s => profiles[s].emptyKA);
const missingKA = slugs.filter(s => !profiles[s].hasKA);
const emptyContro = slugs.filter(s => profiles[s].emptyContro);

console.log('Total profiles:', slugs.length);
console.log('Empty knownAssociates:', emptyKA.length);
console.log('Missing knownAssociates field:', missingKA.length);
console.log('Empty controversies:', emptyContro.length);

console.log('\n=== EMPTY knownAssociates ===');
emptyKA.forEach(s => console.log(s));

console.log('\n=== EMPTY controversies ===');
emptyContro.forEach(s => console.log(s));
