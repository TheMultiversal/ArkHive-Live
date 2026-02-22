const fs = require('fs');
let c = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// Fix descriptions that have truncated/broken strings from single quote escaping
// The issue is descriptions from the detail page had single quotes with \' escaping
// When we moved them into double-quoted strings, the backslashes became literal

// Find all description lines that end with \" (backslash-doublequote) which breaks the string
const lines = c.split('\n');
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check for description lines with backslash before the closing quote
  if (line.includes('description:') && line.match(/\\",\s*$/)) {
    // The line has a trailing \" which means the string broke
    // Fix by removing the backslash before the closing quote
    lines[i] = line.replace(/\\(",\s*)$/, '$1');
    fixCount++;
    console.log('Fixed line', i + 1, ':', lines[i].trim().substring(0, 80));
  }
  
  // Also check for backslash-escaped single quotes inside double-quoted strings
  // In double-quoted strings, \' is unnecessary (just use ')
  if (line.includes('description:')) {
    const before = lines[i];
    lines[i] = lines[i].replace(/\\'/g, "'");
    if (lines[i] !== before && fixCount === 0) {
      // Don't count again if we already fixed the line
    }
  }
}

c = lines.join('\n');

// Also do a global cleanup: in any string field value, replace \' with '
// since these are now in double-quoted strings where \' is unnecessary
let globalFixes = 0;
c = c.replace(/description: "([^"]*?)\\'/g, (match, before) => {
  globalFixes++;
  return 'description: "' + before + "'";
});

// Fix any remaining \" that aren't the string delimiters
// Look for patterns like: some text\" which should be: some text"
// But be careful not to break actual string boundaries

fs.writeFileSync('src/app/entities/individuals/page.tsx', c);
console.log('Fixed', fixCount, 'truncated descriptions');
console.log('Fixed', globalFixes, 'escaped single quotes in descriptions');
