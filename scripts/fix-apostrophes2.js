// More thorough apostrophe fixer - handles all cases
const fs = require('fs');
let content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
let fixes = 0;

// Strategy: Find all single-quoted string literals in relationship and controversy data
// and ensure internal apostrophes are escaped
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Fix relationship strings: relationship: '...', href:
  const relPattern = /relationship: '((?:[^'\\]|\\.)*)'/;
  // Actually we need to handle unescaped quotes. Let's use a different approach.
  
  // For lines with "relationship: '" - extract the string properly
  if (line.includes("relationship: '")) {
    const startIdx = line.indexOf("relationship: '") + "relationship: '".length;
    const hrefIdx = line.indexOf("', href:");
    if (hrefIdx > startIdx) {
      const inner = line.substring(startIdx, hrefIdx);
      // Now check if there are unescaped single quotes
      // An unescaped quote is a ' that is NOT preceded by \
      let hasIssue = false;
      for (let j = 0; j < inner.length; j++) {
        if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
          hasIssue = true;
          break;
        }
      }
      if (hasIssue) {
        // Escape all unescaped single quotes in the inner string
        let fixed = '';
        for (let j = 0; j < inner.length; j++) {
          if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
            fixed += "\\'";
          } else {
            fixed += inner[j];
          }
        }
        const newLine = line.substring(0, startIdx) + fixed + line.substring(hrefIdx);
        if (newLine !== line) {
          lines[i] = newLine;
          fixes++;
          console.log('Fixed L' + (i+1) + ': ' + inner.substring(0, 60) + '...');
        }
      }
    }
  }
  
  // For controversy lines: standalone strings like '...',
  const trimmed = line.trim();
  if (trimmed.startsWith("'") && !trimmed.startsWith("'{'") && !line.includes('href:') && 
      !line.includes(': {') && !line.includes(': [') &&
      (trimmed.endsWith("',") || trimmed.endsWith("',\r"))) {
    const indent = line.match(/^\s*/)[0];
    const hasCR = trimmed.endsWith("\r");
    const start = 1; // after first '
    const end = trimmed.lastIndexOf("'");
    if (end > start) {
      const inner = trimmed.substring(start, end);
      let hasIssue = false;
      for (let j = 0; j < inner.length; j++) {
        if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
          hasIssue = true;
          break;
        }
      }
      if (hasIssue) {
        let fixed = '';
        for (let j = 0; j < inner.length; j++) {
          if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
            fixed += "\\'";
          } else {
            fixed += inner[j];
          }
        }
        lines[i] = indent + "'" + fixed + "'," + (hasCR ? "\r" : "");
        fixes++;
        console.log('Fixed controversy L' + (i+1));
      }
    }
  }
}

content = lines.join('\n');
fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', content);
console.log('\nTotal fixes:', fixes);
