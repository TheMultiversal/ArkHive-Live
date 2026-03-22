const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Fix double-escaped apostrophes: \\' -> '
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixes = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Count occurrences of \\' (literal two chars backslash + backslash + apostrophe)
  const matches = content.match(/\\\\'/g);
  if (matches && matches.length > 0) {
    console.log(`${file}: ${matches.length} double-escaped apostrophes found`);
    // Replace \\' with \' (which is the proper JS escape for apostrophe in single-quoted strings)
    content = content.replace(/\\\\'/g, "\\'");
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixes += matches.length;
  }
}

console.log(`\nTotal fixes: ${totalFixes}`);
