// Fix unescaped apostrophes within single-quoted strings in the expansion data
const fs = require('fs');
let content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Only fix lines with relationship or controversy data that have unescaped quotes
  if (line.includes("relationship: '") || (line.trim().startsWith("'") && !line.trim().startsWith("'{"))) {
    // Find all single-quoted string values
    // Match pattern: word'word (apostrophe between letters) inside single-quoted strings
    let newLine = line;
    
    // Strategy: find quoted strings and escape internal apostrophes
    // For relationship strings: relationship: '...'
    const relMatch = line.match(/relationship: '(.+)', href:/);
    if (relMatch) {
      const inner = relMatch[1];
      // Check if there are unescaped apostrophes (word'word patterns)
      if (inner.match(/[a-zA-Z]'[a-zA-Z]/)) {
        const fixed = inner.replace(/([a-zA-Z])'([a-zA-Z])/g, "$1\\'$2");
        newLine = line.replace("relationship: '" + inner + "'", "relationship: '" + fixed + "'");
        if (newLine !== line) {
          lines[i] = newLine;
          fixes++;
        }
      }
    }
    
    // For controversy strings: '...',
    if (line.trim().startsWith("'") && !line.includes('href:') && !line.includes(': {')) {
      // Extract the string content between first ' and last '
      const trimmed = line.trim();
      if (trimmed.endsWith("',") || trimmed.endsWith("',\r")) {
        const start = trimmed.indexOf("'") + 1;
        const end = trimmed.lastIndexOf("'");
        if (start < end) {
          const inner = trimmed.substring(start, end);
          if (inner.match(/[a-zA-Z]'[a-zA-Z]/)) {
            const fixed = inner.replace(/([a-zA-Z])'([a-zA-Z])/g, "$1\\'$2");
            const indent = line.match(/^\s*/)[0];
            const suffix = line.trim().endsWith("\r") ? "\r" : "";
            lines[i] = indent + "'" + fixed + "'," + suffix;
            if (lines[i] !== line) fixes++;
          }
        }
      }
    }
  }
}

content = lines.join('\n');
fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', content);
console.log('Fixed', fixes, 'unescaped apostrophes');
