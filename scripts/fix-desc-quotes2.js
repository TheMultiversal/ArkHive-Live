const fs = require('fs');
let c = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// The problem: descriptions from single-quoted strings had escaped single quotes (\')
// When moved to double-quoted strings, we need to:
// 1. Remove backslash before single quotes (\' -> ')
// 2. Escape any double quotes inside the description (" -> &quot; or remove)

// Strategy: Find all description: "..." lines and fix their content
let fixCount = 0;
c = c.replace(/description: "([^]*?)(?<!\\)"/gm, (match, content, offset) => {
  // This regex is too greedy. Let's use a different approach.
  return match;
});

// Better approach: process line by line
const lines = c.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('description:')) continue;
  
  // Match: description: "content",
  const match = line.match(/^(\s*description: ")(.*?)(","?\s*)$/);
  if (!match) {
    // Try without trailing comma (shouldn't happen but just in case)
    const match2 = line.match(/^(\s*description: ")(.*?)("\s*,?\s*)$/);
    if (!match2) continue;
    
    let content = match2[2];
    const original = content;
    
    // Replace escaped double quotes with single quotes
    content = content.replace(/\\"/g, "'");
    // Replace escaped single quotes (shouldn't be needed in double-quoted strings)
    content = content.replace(/\\'/g, "'");
    
    if (content !== original) {
      lines[i] = match2[1] + content + match2[3];
      fixCount++;
    }
    continue;
  }
  
  let content = match[2];
  const original = content;
  
  // Replace escaped double quotes with single quotes
  content = content.replace(/\\"/g, "'");
  // Replace escaped single quotes
  content = content.replace(/\\'/g, "'");
  
  if (content !== original) {
    lines[i] = match[1] + content + match[3];
    fixCount++;
  }
}

// Also fix the one unbalanced quote on line ~9095 (single-quoted description)
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes("description: '") && !line.includes('description: "')) {
    // This is a single-quoted description that should be double-quoted
    const converted = line.replace(/description: '(.*)',\s*$/, (m, content) => {
      // Escape double quotes in content, unescape single quotes
      const fixed = content.replace(/\\'/g, "'").replace(/"/g, "'");
      return `description: "${fixed}",`;
    });
    if (converted !== line) {
      lines[i] = converted;
      fixCount++;
      console.log('Converted single-quoted description at line', i + 1);
    }
  }
}

c = lines.join('\n');
fs.writeFileSync('src/app/entities/individuals/page.tsx', c);
console.log('Fixed', fixCount, 'description strings');
