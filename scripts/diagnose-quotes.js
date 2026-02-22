const fs = require('fs');
const filePath = 'src/app/entities/individuals/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Show exact bytes around line 1156
const line = lines[1155]; // 0-indexed
console.log('Line 1156 length:', line.length);
console.log('Line 1156 repr:', JSON.stringify(line));

// Also check line 1155
console.log('Line 1155 repr:', JSON.stringify(lines[1154]));

// Check for all lines where role/description end with backslash-quote
const issues = [];
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  // Check for unescaped backslash before closing quote
  if (l.match(/\\'/)) {
    issues.push({ line: i + 1, text: l.trim().substring(0, 120) });
  }
}
console.log('\nLines with backslash-quote:', issues.length);
issues.forEach(x => console.log('L' + x.line + ': ' + x.text));

// Also find truncated descriptions (ending with ...)
const truncated = [];
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.includes("...',") || l.includes("...\\',")) {
    truncated.push({ line: i + 1, text: l.trim().substring(0, 120) });
  }
}
console.log('\nTruncated strings:', truncated.length);
truncated.forEach(x => console.log('L' + x.line + ': ' + x.text));
