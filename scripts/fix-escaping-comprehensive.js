const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Comprehensive fix: find ALL instances of \' that are at the boundary
// of a string value (i.e., where \' is immediately before }] or }, or ') 
// These are cases where the escaped quote IS the closing quote, which is wrong

// Strategy: Go line by line and fix source and timeline entries
const lines = f.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Only process lines containing sources: or timeline: with potential issues
  if (!line.includes("sources:") && !line.includes("timeline:") && !line.includes("event:") && !line.includes("title:") && !line.includes("url:")) continue;
  
  let fixed = line;
  
  // Fix pattern: some text\' }] -> some text' }]  (remove backslash before terminal quote)
  // The \' at end of a property value where ' is the string delimiter
  fixed = fixed.replace(/\\'\s*\}/g, "' }");
  
  // Fix pattern: some text\', -> some text',
  // But ONLY when this is at a string boundary, not mid-string like "O\'Leary"
  // Mid-string: "O\'Leary" - the \' is followed by more word characters
  // Boundary: "Sinclair\'" - the \' is followed by } or , or ] or whitespace
  
  // Actually the simple fix above should handle most cases
  // Let's also fix URLs that end with \'
  fixed = fixed.replace(/\\'\s*,/g, "',");
  
  if (fixed !== line) {
    // But we need to NOT fix legitimate mid-string escaped quotes like "O\'Leary"
    // Let's be smarter - only fix \' that is NOT followed by a word character
    fixed = line;
    // Use a more precise regex: \' followed by non-word (end of string contexts)
    fixed = fixed.replace(/\\'(\s*[}\],])/g, "'$1");
    
    if (fixed !== line) {
      lines[i] = fixed;
      fixes++;
    }
  }
}

f = lines.join('\n');
fs.writeFileSync(file, f);
console.log('Fixed', fixes, 'lines');

// Verify the specific error line
const newLines = f.split('\n');
if (newLines[43351]) { // 0-indexed
  console.log('Line 43352:', newLines[43351].substring(0, 150));
}

// Count remaining potential issues
const remaining = (f.match(/\\'\s*[}\]]/g) || []).length;
console.log('Remaining \\\\\\047 before } or ]:', remaining);
