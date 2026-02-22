const fs = require('fs');
const filePath = 'src/app/entities/individuals/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find all string values that use single quotes and have unescaped single quotes inside
// Pattern: field: 'value with unescaped ' quotes',
// We need to find these and escape the inner quotes

// Strategy: find all role: '...' and description: '...' patterns
// and escape any single quotes that appear inside the string value

let fixCount = 0;

// Fix role fields - they're typically single-line
content = content.replace(/(role:\s*')([^]*?)(',?\s*\r?\n)/g, (match, prefix, value, suffix) => {
  // If the value contains unescaped single quotes, we need to handle it
  // But this regex is greedy - let's use a different approach
  return match;
});

// Better approach: line by line
const lines = content.split('\n');
const result = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Check for role: 'value with problem'
  const roleMatch = line.match(/^(\s*role:\s*')(.+)$/);
  if (roleMatch) {
    const prefix = roleMatch[1];
    let rest = roleMatch[2];
    
    // The string should end with ', or ',\r
    // Find the last occurrence of ', or ',\r
    const endMatch = rest.match(/(.*)'(,?\s*\r?)$/);
    if (endMatch) {
      const innerValue = endMatch[1];
      const endPart = endMatch[2];
      
      // Check if inner value has unescaped single quotes
      if (innerValue.includes("'") && !innerValue.includes("\\'")) {
        const fixed = innerValue.replace(/'/g, "\\'");
        result.push(prefix + fixed + "'" + endPart);
        fixCount++;
        i++;
        continue;
      }
    }
  }
  
  // Check for description: 'value with problem'  
  const descMatch = line.match(/^(\s*description:\s*')(.+)$/);
  if (descMatch) {
    const prefix = descMatch[1];
    let rest = descMatch[2];
    
    const endMatch = rest.match(/(.*)'(,?\s*\r?)$/);
    if (endMatch) {
      const innerValue = endMatch[1];
      const endPart = endMatch[2];
      
      if (innerValue.includes("'") && !innerValue.includes("\\'")) {
        const fixed = innerValue.replace(/'/g, "\\'");
        result.push(prefix + fixed + "'" + endPart);
        fixCount++;
        i++;
        continue;
      }
    }
  }

  // Check for name: 'value with problem'
  const nameMatch = line.match(/^(\s*name:\s*')(.+)$/);
  if (nameMatch) {
    const prefix = nameMatch[1];
    let rest = nameMatch[2];
    
    const endMatch = rest.match(/(.*)'(,?\s*\r?)$/);
    if (endMatch) {
      const innerValue = endMatch[1];
      const endPart = endMatch[2];
      
      if (innerValue.includes("'") && !innerValue.includes("\\'")) {
        const fixed = innerValue.replace(/'/g, "\\'");
        result.push(prefix + fixed + "'" + endPart);
        fixCount++;
        i++;
        continue;
      }
    }
  }
  
  result.push(line);
  i++;
}

const newContent = result.join('\n');
fs.writeFileSync(filePath, newContent);
console.log(`Fixed ${fixCount} lines with unescaped quotes`);

// Verify by trying to find remaining issues
const check = fs.readFileSync(filePath, 'utf8');
const checkLines = check.split('\n');
let issues = 0;
for (let j = 0; j < checkLines.length; j++) {
  const cl = checkLines[j];
  // Simple heuristic: if a line starts with role: ' and the last ' is followed by a letter
  const m = cl.match(/^\s*(role|description|name):\s*'(.+)$/);
  if (m) {
    const val = m[2];
    // Remove trailing ,\r or ,
    const cleaned = val.replace(/,?\s*\r?$/, '');
    // Should end with a single quote
    if (!cleaned.endsWith("'")) {
      console.log(`  Still broken at line ${j+1}: ${cl.trim().substring(0, 80)}`);
      issues++;
    }
  }
}
console.log(`Remaining issues: ${issues}`);
