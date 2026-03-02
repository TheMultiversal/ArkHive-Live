const fs = require('fs');

const file = 'src/data/categories.ts';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// Find lines where title has a backslash before the closing quote
// Pattern: title: 'SomeText\', riskLevel  -- the \' is meant to be end of string but backslash breaks it
const bad = [];
lines.forEach((l, i) => {
  // Look for pattern: title: '...\', where the backslash before ' causes parse error
  const match = l.match(/title:\s*'(.*?)\\',\s*riskLevel/);
  if (match) {
    bad.push({ line: i + 1, title: match[1], full: l.trim() });
  }
});

console.log('Found', bad.length, 'broken title strings');
bad.forEach(b => {
  console.log('  Line', b.line, ':', b.title);
});

// Fix them: replace \' with just '
// The issue is the title got truncated and has a trailing backslash
// We need to remove the backslash
let fixed = 0;
for (const b of bad) {
  const oldPattern = `title: '${b.title}\\'`;
  const newPattern = `title: '${b.title}'`;
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    fixed++;
  }
}

console.log('Fixed', fixed, 'titles by removing trailing backslash');

// Also check for any remaining issues - unmatched quotes in title fields
const newLines = content.split('\n');
const remaining = [];
newLines.forEach((l, i) => {
  if (l.includes('title:')) {
    // Count single quotes after 'title:'
    const afterTitle = l.substring(l.indexOf('title:') + 6);
    const quotes = (afterTitle.match(/'/g) || []).length;
    // Escaped quotes don't count, but we already removed those
    // There should be exactly 2 quotes (open and close)
    if (quotes < 2) {
      remaining.push({ line: i + 1, text: l.trim().substring(0, 150) });
    }
  }
});

if (remaining.length > 0) {
  console.log('\nStill have', remaining.length, 'problematic lines:');
  remaining.forEach(r => console.log('  Line', r.line, ':', r.text));
} else {
  console.log('\nAll title strings look correct now');
}

fs.writeFileSync(file, content);
console.log('Done');
