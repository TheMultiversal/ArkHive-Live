const fs = require('fs');
const filePath = 'src/app/entities/individuals/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Strategy: Parse the generated entries section and fix all string issues
// The entries were added after line ~980 (original end), through the end of the array

// Approach: Use regex to find problematic patterns:

// 1. Fix role fields with escaped closing quote: role: 'Something\'  -> role: 'Something',
// Pattern: backslash+quote+comma at end of role/description line
let count1 = 0;
content = content.replace(/((?:role|description|name):\s*'(?:[^'\\]|\\.)*?)\\',(\s*\r?\n)/g, (match, before, after) => {
  // This catches cases where the last char before ', is a backslash
  // But we need to be smarter - sometimes \' is intentional (like "Stone's")
  return match; // Skip this approach, too complex
});

// Better: line-by-line approach
const lines = content.split('\n');
const fixed = [];
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Fix 1: role/description/name ending with \', (backslash escaping the closing quote)
  // e.g. role: 'Mercenary King, Mass Murderer\',
  // Should be: role: 'Mercenary King, Mass Murderer',
  const endEscapeMatch = line.match(/^(\s*(?:role|description|name):\s*'.*)\\(',[^\S\r\n]*\r?)$/);
  if (endEscapeMatch) {
    line = endEscapeMatch[1] + endEscapeMatch[2];
    console.log(`Fix end-escape L${i+1}: ${line.trim().substring(0, 80)}`);
    fixes++;
  }
  
  // Fix 2: Truncated descriptions ending with ...'
  // These are fine actually - ... is just the text ending
  
  // Fix 3: description values that have unescaped single quotes in them
  // Need to detect strings that are malformed
  // This is harder to detect line-by-line without a proper parser
  
  fixed.push(line);
}

content = fixed.join('\n');
fs.writeFileSync(filePath, content);
console.log(`\nTotal fixes: ${fixes}`);

// Now try a more thorough check - parse as JS to catch any remaining issues  
console.log('\nChecking for remaining syntax issues...');
const checkContent = fs.readFileSync(filePath, 'utf8');

// Extract just the array portion and try to evaluate it
const arrayStart = checkContent.indexOf('const individuals: Entity[] = [');
const arrayEnd = checkContent.indexOf('];', arrayStart);
if (arrayStart !== -1 && arrayEnd !== -1) {
  const arrayStr = checkContent.substring(
    checkContent.indexOf('[', arrayStart),
    arrayEnd + 1
  );
  
  // Try to detect unmatched quotes
  let inString = false;
  let stringChar = null;
  let escaped = false;
  let lineNum = checkContent.substring(0, arrayStart).split('\n').length;
  let colNum = 0;
  let issues = [];
  
  for (let i = 0; i < arrayStr.length; i++) {
    const ch = arrayStr[i];
    colNum++;
    
    if (ch === '\n') {
      lineNum++;
      colNum = 0;
      continue;
    }
    
    if (escaped) {
      escaped = false;
      continue;
    }
    
    if (ch === '\\' && inString) {
      escaped = true;
      continue;
    }
    
    if (inString) {
      if (ch === stringChar) {
        inString = false;
        stringChar = null;
      }
    } else {
      if (ch === "'" || ch === '"' || ch === '`') {
        inString = true;
        stringChar = ch;
      }
    }
  }
  
  if (inString) {
    console.log(`WARNING: Unterminated string found near line ${lineNum}`);
  } else {
    console.log('No unterminated strings detected in the array');
  }
}
