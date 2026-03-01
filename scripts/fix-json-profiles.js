const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// The 64 new profiles use JSON format ("key": value) with 4-space indent
// The fix-missing-fields.js added duplicate sources: and timeline: lines
// because it searched for 'sources:' (without quotes) and missed "sources":

// Strategy 1: Remove duplicate sources/timeline lines that follow JSON-formatted ones
// Pattern: "sources": [...]\n    sources: [...] -> keep only the JSON one
// Pattern: after the JSON profile's ] there's an orphan sources: line

const lines = f.split('\n');
let removes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Check for orphaned sources: or timeline: lines that follow a JSON "]" close
  if ((line.startsWith('sources: [') || line.startsWith('timeline: [')) && !line.startsWith('"')) {
    // Check if previous non-empty line ends with ] (JSON array close)
    let prev = i - 1;
    while (prev >= 0 && lines[prev].trim() === '') prev--;
    if (prev >= 0 && lines[prev].trim() === ']') {
      // This is a duplicate - remove it
      lines.splice(i, 1);
      removes++;
      i--; // Re-check this position
    }
  }
}

f = lines.join('\n');

// Strategy 2: Fix the \\\' escaping in JSON double-quoted strings
// In "description": "...Trump\\'s..." the \\' should just be '
// Because in a double-quoted string, ' doesn't need escaping at all
f = f.replace(/"([^"]*?)\\\\'/g, (match, before) => {
  // In double-quoted strings, replace \\' with just '
  return '"' + before + "'";
});

// Handle multiple occurrences on the same line
let prevLen;
do {
  prevLen = f.length;
  f = f.replace(/"([^"]*?)\\\\'/g, (match, before) => '"' + before + "'");
} while (f.length !== prevLen);

fs.writeFileSync(file, f);
console.log('Removed', removes, 'duplicate field lines');

// Verify
const newF = fs.readFileSync(file, 'utf8');
const lines2 = newF.split('\n');
let orphanSources = 0;
for (let i = 0; i < lines2.length; i++) {
  const line = lines2[i].trim();
  if ((line.startsWith('sources: [') || line.startsWith('timeline: [')) && !line.startsWith('"')) {
    let prev = i - 1;
    while (prev >= 0 && lines2[prev].trim() === '') prev--;
    if (prev >= 0 && lines2[prev].trim() === ']') {
      orphanSources++;
      console.log('Still orphan at line', i+1, ':', line.substring(0, 80));
    }
  }
}
console.log('Remaining orphan fields:', orphanSources);
