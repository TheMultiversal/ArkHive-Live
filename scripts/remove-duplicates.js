const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

function removeDuplicateBlock(filePath, firstEntityKey) {
  const fullPath = path.join(projectRoot, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Find the first occurrence of the entity key (which is in the data object)
  const firstIdx = content.indexOf(`'${firstEntityKey}':`);
  if (firstIdx === -1) {
    console.log(`  Could not find '${firstEntityKey}' in ${filePath}`);
    return false;
  }
  
  // Find the second occurrence (the duplicate)
  const secondIdx = content.indexOf(`'${firstEntityKey}':`, firstIdx + 1);
  if (secondIdx === -1) {
    console.log(`  No duplicate found for '${firstEntityKey}' in ${filePath}`);
    return false;
  }
  
  // Find the end of the duplicate block: it ends with `};\n` or `};\n\n`
  // Look for the closing `};` after the duplicate block
  // The duplicate block ends right before `};` followed by newlines then something not in the data object
  
  // Strategy: find what comes after the data object (e.g. `const riskColors`, or `// Generate static params`)
  // Then find the `};` right before that, and cut from the duplicate start to that `};`
  
  // Actually simpler: the second block was inserted as a clean copy. 
  // Find the `\n};` after the second copy
  const afterSecondStart = content.indexOf('\n};\n', secondIdx);
  if (afterSecondStart === -1) {
    console.log(`  Could not find end of duplicate block in ${filePath}`);
    return false;
  }
  
  // We need to remove from just before the second occurrence to the `};`
  // The duplicate block starts with `\n  '${firstEntityKey}':`
  // Find the newline before it
  let cutStart = secondIdx;
  // Walk back to find the start of the line
  while (cutStart > 0 && content[cutStart - 1] !== '\n') cutStart--;
  // Also include the preceding newline
  if (cutStart > 0 && content[cutStart - 1] === '\n') cutStart--;
  
  // The end is the `};` line - we want to keep it, so cut up to but not including `\n};`
  const cutEnd = afterSecondStart;
  
  const removed = content.slice(cutStart, cutEnd);
  const removedLines = removed.split('\n').length;
  
  content = content.slice(0, cutStart) + content.slice(cutEnd);
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`  Removed duplicate block (~${removedLines} lines) from ${filePath}`);
  return true;
}

console.log('Removing duplicate blocks...\n');

console.log('Agencies:');
removeDuplicateBlock('src/app/entities/agencies/[slug]/page.tsx', 'mossad');

console.log('Corporations:');
removeDuplicateBlock('src/app/entities/corporations/[slug]/page.tsx', 'dalton-school');

console.log('Organizations:');
removeDuplicateBlock('src/app/entities/organizations/[slug]/page.tsx', 'terramar');

console.log('Individuals:');
removeDuplicateBlock('src/app/entities/individuals/[slug]/page.tsx', 'ehud-barak');

console.log('\nDone!');
