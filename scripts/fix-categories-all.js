const fs = require('fs');

const file = 'src/data/categories.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix all instances of \' that break JS parsing
// Pattern: a backslash followed by a single quote where the backslash is NOT itself escaped
// In the source code, these appear as: D\', Maxwell\', etc.
// We need to find occurrences where \' is used inside a string literal incorrectly

// Strategy: replace all \' within string contexts
// But we need to be careful not to break valid escaped quotes

// Actually, the real problem is simpler:
// The script that generated this file used names/titles containing apostrophes
// and the apostrophe was escaped with a backslash, but the text was also truncated
// So we get things like: name: 'Dinesh D\', title: ...
// where 'Dinesh D\'' was intended but got truncated to 'Dinesh D\'

// Let's find ALL occurrences of \' followed by , (which indicates end of string + next property)
// and fix them

// First, let's count how many \' occurrences there are
const backslashQuotes = content.match(/\\'/g);
console.log('Total \\' + "' occurrences:", backslashQuotes ? backslashQuotes.length : 0);

// Replace \' with just ' everywhere in the data section (not the type definition)
// Actually, let's be smarter - in a valid JS string 'text', a \' would only appear 
// if someone wanted a literal apostrophe inside single quotes. But names like
// "Dinesh D'Souza" would need to be 'Dinesh D\'Souza' which IS valid.
// The problem is when the name got TRUNCATED, so we get 'Dinesh D\' instead of 'Dinesh D\'Souza'

// Better approach: Find entries where the name got truncated (name doesn't match what it should be)
// Or: regenerate the file properly

// Simplest fix: find all lines with \' and check if the string is properly formed
const lines = content.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Skip non-data lines
  if (!line.includes('slug:')) continue;
  
  // Check for \' that ends a string (followed by , or })
  // This pattern catches: name: 'Dinesh D\', title:  -- here \' ends the name string prematurely
  // A valid escape would be: name: 'Dinesh D\'Souza', -- here \' is followed by more text
  
  // Pattern: \', followed by a space or comma or property name
  // Invalid: \',(space) or \',\n
  if (line.match(/\\',\s*(title|name|riskLevel|slug)/)) {
    console.log(`Line ${i + 1}: truncated string found`);
    console.log(`  Before: ${line.trim().substring(0, 120)}`);
    
    // Remove the backslash before the closing quote
    // Replace \', with ',
    lines[i] = line.replace(/\\',/g, "',");
    fixes++;
    
    console.log(`  After:  ${lines[i].trim().substring(0, 120)}`);
  }
}

// Also check for \' at the very end of an object (before })
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('slug:')) continue;
  
  if (line.match(/\\'\s*}/)) {
    console.log(`Line ${i + 1}: truncated string at end of object`);
    lines[i] = line.replace(/\\'\s*}/g, "' }");
    fixes++;
  }
}

console.log(`\nFixed ${fixes} lines with truncated strings`);

content = lines.join('\n');

// Verify: try to count remaining problematic patterns
const remaining = content.match(/\\',\s*(title|name|riskLevel|slug)/g);
console.log('Remaining problematic patterns:', remaining ? remaining.length : 0);

fs.writeFileSync(file, content);
console.log('Done');
