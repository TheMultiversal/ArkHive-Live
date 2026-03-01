const fs = require('fs');
const path = 'src/app/entities/organizations/[slug]/page.tsx';
let f = fs.readFileSync(path, 'utf8');

// Find source entries missing 'date' field and add date: '2024'
// Pattern: { title: '...', url: '...' } without a date field
// We need to add date to source objects that don't have one

// Match source objects: { title: '...', url: '...' } that lack date
const re = /\{\s*title:\s*'[^']*(?:\\.[^']*)*',\s*url:\s*'[^']*(?:\\.[^']*)*'\s*\}/g;
let match;
let replacements = [];

while (match = re.exec(f)) {
  // Check if this match is inside a sources array
  const before = f.substring(Math.max(0, match.index - 100), match.index);
  if (!before.includes('sources:') && !before.includes("title: '")) {
    // Not in a sources context, skip
  }
  
  // Check if it already has date
  if (match[0].includes('date:')) continue;
  
  // Only modify if it's within a sources array context
  const lineStart = f.lastIndexOf('\n', match.index);
  const lineText = f.substring(lineStart, match.index + match[0].length + 50);
  if (!lineText.includes('sources:') && !lineText.includes("url: '")) continue;
  
  replacements.push({
    offset: match.index,
    length: match[0].length,
    original: match[0]
  });
}

console.log(`Found ${replacements.length} source entries without date field`);

// Apply in reverse
replacements.reverse();
for (const r of replacements) {
  // Insert date: '2024' before the closing }
  const newStr = r.original.replace(/\s*\}$/, ", date: '2024' }");
  f = f.substring(0, r.offset) + newStr + f.substring(r.offset + r.length);
}

fs.writeFileSync(path, f, 'utf8');

// Verify
const check = fs.readFileSync(path, 'utf8');
const remaining = check.match(/\{\s*title:\s*'[^']*(?:\\.[^']*)*',\s*url:\s*'[^']*(?:\\.[^']*)*'\s*\}/g) || [];
const noDate = remaining.filter(m => !m.includes('date:'));
console.log(`Remaining source entries without date: ${noDate.length}`);
