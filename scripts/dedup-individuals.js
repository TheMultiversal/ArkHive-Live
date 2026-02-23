const fs = require('fs');
const content = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// Find the individuals array
const arrStart = content.indexOf('const individuals = [');
const returnStart = content.indexOf('export default function');

// Extract just the array portion
const beforeArr = content.substring(0, arrStart);
const afterArr = content.substring(returnStart);
const arrSection = content.substring(arrStart, returnStart);

// Parse individual entries - each entry is { ... },
// Split by finding entry boundaries
const entries = [];
let depth = 0;
let entryStart = -1;
const arrContent = arrSection.substring(arrSection.indexOf('[') + 1);

for (let i = 0; i < arrContent.length; i++) {
  const ch = arrContent[i];
  if (ch === '{' && depth === 0) {
    entryStart = i;
    depth = 1;
  } else if (ch === '{') {
    depth++;
  } else if (ch === '}') {
    depth--;
    if (depth === 0 && entryStart !== -1) {
      entries.push(arrContent.substring(entryStart, i + 1));
      entryStart = -1;
    }
  }
}

console.log(`Total entries found: ${entries.length}`);

// Extract slug from each entry
const slugMap = new Map();
const unique = [];
let dupes = 0;

for (const entry of entries) {
  const slugMatch = entry.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) {
    unique.push(entry);
    continue;
  }
  const slug = slugMatch[1];
  if (slugMap.has(slug)) {
    dupes++;
  } else {
    slugMap.set(slug, true);
    unique.push(entry);
  }
}

console.log(`Unique entries: ${unique.length}`);
console.log(`Duplicates removed: ${dupes}`);

// Rebuild the file
const newContent = beforeArr + 'const individuals = [\n' + unique.map(e => '  ' + e.trim()).join(',\n') + '\n];\n\n' + afterArr;

fs.writeFileSync('src/app/entities/individuals/page.tsx', newContent);
console.log(`File written. New length: ${newContent.split('\n').length} lines`);
