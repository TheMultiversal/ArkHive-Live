const fs = require('fs');
let c = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// Fix ALL string fields that have backslash-escaped quotes inside double-quoted strings
// Pattern: any field value like: field: "content with \" or \' inside",
// The \' is fine in double quotes (just unnecessary backslash before ')
// The \" inside a "..." string breaks the string

const lines = c.split('\n');
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Skip lines that don't have string assignments
  if (!line.includes(': "')) continue;
  
  // Match field: "value", pattern
  // Look for \" inside the content (not the delimiters)
  const match = line.match(/^(\s*\w+: ")(.*)(","?\s*)$/);
  if (!match) continue;
  
  let content = match[2];
  const original = content;
  
  // Replace \" with ' (escaped double quote → single quote)
  content = content.replace(/\\"/g, "'");
  // Replace \' with ' (unnecessary escape in double-quoted string)  
  content = content.replace(/\\'/g, "'");
  
  if (content !== original) {
    lines[i] = match[1] + content + match[3];
    fixCount++;
    console.log('Fixed line', i + 1, ':', lines[i].trim().substring(0, 80));
  }
}

// Also handle the special case where a backslash at the END of content
// before the closing quote: field: "some text\",  -> field: "some text",
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes(': "')) continue;
  
  // Check for trailing backslash before closing quote-comma
  if (line.match(/\\",\s*$/)) {
    const before = lines[i];
    lines[i] = line.replace(/\\(",\s*)$/, '$1');
    if (lines[i] !== before) {
      fixCount++;
      console.log('Fixed trailing backslash line', i + 1);
    }
  }
}

c = lines.join('\n');
fs.writeFileSync('src/app/entities/individuals/page.tsx', c);
console.log('\nTotal fixes:', fixCount);
