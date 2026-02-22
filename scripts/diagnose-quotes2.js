const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');
const lines = c.split('\n');

// Check line 9196 (0-indexed: 9195)
const targetLine = lines[9195];
console.log('Line 9196 raw:');
console.log(JSON.stringify(targetLine));
console.log();

// Check for any lines with unbalanced quotes in the new entries (after line 9000)
let issues = [];
for (let i = 9000; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('description:')) {
    // Count unescaped double quotes
    const stripped = line.replace(/\\"/g, '');
    const quoteCount = (stripped.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      issues.push({ line: i + 1, text: line.trim().substring(0, 120) });
    }
  }
}

console.log('Lines with unbalanced quotes:', issues.length);
issues.forEach(i => console.log(i.line + ': ' + i.text));

// Also check for lines where description value contains a literal backslash before quote
let bsIssues = [];
for (let i = 9000; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('description:') && /\\"/.test(line)) {
    // Check if the \" is at the content level (not the wrapping quotes)
    const match = line.match(/description: "(.*)"/);
    if (match && match[1].includes('\\"')) {
      bsIssues.push({ line: i + 1, content: match[1].substring(0, 80) });
    }
  }
}
console.log('Lines with backslash-quote in content:', bsIssues.length);
bsIssues.forEach(i => console.log(i.line + ': ' + i.content));
