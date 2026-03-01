const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

function removeDuplicateBlock(filePath, firstEntityKey) {
  const fullPath = path.join(projectRoot, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  const firstIdx = content.indexOf(`'${firstEntityKey}':`);
  if (firstIdx === -1) {
    console.log(`  Could not find '${firstEntityKey}' in ${filePath}`);
    return false;
  }
  
  const secondIdx = content.indexOf(`'${firstEntityKey}':`, firstIdx + 1);
  if (secondIdx === -1) {
    console.log(`  No duplicate found for '${firstEntityKey}' in ${filePath}`);
    return false;
  }
  
  // Find }; after the second block using regex to handle varying whitespace
  const searchFrom = content.slice(secondIdx);
  const match = searchFrom.match(/\n\s*\};\s*\n/);
  if (!match) {
    console.log(`  Could not find end of duplicate block in ${filePath}`);
    return false;
  }
  
  const endOffset = secondIdx + match.index;
  
  // Cut from before the second occurrence to the }; 
  let cutStart = secondIdx;
  while (cutStart > 0 && content[cutStart - 1] !== '\n') cutStart--;
  if (cutStart > 0) cutStart--; // include the newline
  
  const cutEnd = endOffset;
  
  const removed = content.slice(cutStart, cutEnd);
  const removedLines = removed.split('\n').length;
  
  content = content.slice(0, cutStart) + content.slice(cutEnd);
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`  Removed duplicate block (~${removedLines} lines) from ${filePath}`);
  return true;
}

console.log('Removing remaining duplicate blocks...\n');

console.log('Agencies:');
removeDuplicateBlock('src/app/entities/agencies/[slug]/page.tsx', 'mossad');

console.log('Corporations:');
removeDuplicateBlock('src/app/entities/corporations/[slug]/page.tsx', 'dalton-school');

console.log('Organizations:');
removeDuplicateBlock('src/app/entities/organizations/[slug]/page.tsx', 'terramar');

console.log('\nDone!');
