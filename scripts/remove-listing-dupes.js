const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

function removeDuplicateListingBlock(filePath, firstEntryId) {
  const fullPath = path.join(projectRoot, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  const searchStr = `id: "${firstEntryId}"`;
  const firstIdx = content.indexOf(searchStr);
  if (firstIdx === -1) {
    console.log(`  Could not find ${searchStr} in ${filePath}`);
    return false;
  }
  
  const secondIdx = content.indexOf(searchStr, firstIdx + 1);
  if (secondIdx === -1) {
    console.log(`  No duplicate found for ${firstEntryId} in ${filePath}`);
    return false;
  }
  
  // Find ]; after the second block
  const searchFrom = content.slice(secondIdx);
  const match = searchFrom.match(/\n\s*\];\s*\n/);
  if (!match) {
    console.log(`  Could not find end of duplicate block in ${filePath}`);
    return false;
  }
  
  const endOffset = secondIdx + match.index;
  
  let cutStart = secondIdx;
  while (cutStart > 0 && content[cutStart - 1] !== '\n') cutStart--;
  if (cutStart > 0) cutStart--;
  
  const cutEnd = endOffset;
  
  const removed = content.slice(cutStart, cutEnd);
  const removedLines = removed.split('\n').length;
  
  content = content.slice(0, cutStart) + content.slice(cutEnd);
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`  Removed duplicate block (~${removedLines} lines) from ${filePath}`);
  return true;
}

console.log('Removing listing page duplicates...\n');

console.log('Individuals listing:');
removeDuplicateListingBlock('src/app/entities/individuals/page.tsx', 'ehud-barak-ep');

console.log('Agencies listing:');
removeDuplicateListingBlock('src/app/entities/agencies/page.tsx', 'mossad-ep');

console.log('Corporations listing:');
removeDuplicateListingBlock('src/app/entities/corporations/page.tsx', 'dalton-school-ep');

console.log('Organizations listing:');
removeDuplicateListingBlock('src/app/entities/organizations/page.tsx', 'terramar-ep');

console.log('\nDone!');
