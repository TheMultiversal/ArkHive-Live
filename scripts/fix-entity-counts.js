const fs = require('fs');

const entityTypes = ['individuals', 'agencies', 'corporations', 'organizations'];
let totalFixed = 0;

for (const entityType of entityTypes) {
  const catchallFile = `src/app/entities/${entityType}/[slug]/page.tsx`;
  const listingFile = `src/app/entities/${entityType}/page.tsx`;
  
  if (!fs.existsSync(catchallFile) || !fs.existsSync(listingFile)) {
    console.log(`Skipping ${entityType} - missing files`);
    continue;
  }
  
  const catchallContent = fs.readFileSync(catchallFile, 'utf8');
  let listingContent = fs.readFileSync(listingFile, 'utf8');
  
  // Find all entity slug positions
  const slugPositions = [];
  const slugRe = /^\s{2}'([\w-]+)':\s*\{/gm;
  let match;
  while ((match = slugRe.exec(catchallContent)) !== null) {
    slugPositions.push({ slug: match[1], index: match.index });
  }
  
  console.log(`\n=== ${entityType}: ${slugPositions.length} entity entries found ===`);
  
  // For each entity, extract the block and count relatedInvestigations
  const entityCounts = {};
  
  for (let i = 0; i < slugPositions.length; i++) {
    const { slug, index: startIdx } = slugPositions[i];
    const endIdx = i + 1 < slugPositions.length ? slugPositions[i + 1].index : catchallContent.length;
    const block = catchallContent.substring(startIdx, endIdx);
    
    // Find relatedInvestigations array within this block
    const riIdx = block.indexOf('relatedInvestigations:');
    if (riIdx === -1) continue;
    
    // Find the opening bracket
    const bracketStart = block.indexOf('[', riIdx);
    if (bracketStart === -1) continue;
    
    // Find matching closing bracket
    let depth = 0;
    let bracketEnd = -1;
    for (let j = bracketStart; j < block.length; j++) {
      if (block[j] === '[') depth++;
      if (block[j] === ']') depth--;
      if (depth === 0) { bracketEnd = j; break; }
    }
    if (bracketEnd === -1) continue;
    
    const riBlock = block.substring(bracketStart, bracketEnd + 1);
    // Count entries by counting slug: patterns (each ri entry has a slug field)
    const count = (riBlock.match(/slug:/g) || []).length;
    if (count > 0) {
      entityCounts[slug] = count;
    }
  }
  
  console.log(`Entities with relatedInvestigations: ${Object.keys(entityCounts).length}`);
  
  // Now update the listing page
  let fixCount = 0;
  
  for (const [slug, actualCount] of Object.entries(entityCounts)) {
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const slugPattern = new RegExp(`slug:\\s*['"]${escapedSlug}['"]`);
    const slugMatch = slugPattern.exec(listingContent);
    
    if (!slugMatch) continue;
    
    // Find investigationCount near this slug (search backwards and forwards)
    const searchStart = Math.max(0, slugMatch.index - 500);
    const searchEnd = Math.min(listingContent.length, slugMatch.index + 500);
    const chunk = listingContent.substring(searchStart, searchEnd);
    
    const icMatch = chunk.match(/investigationCount:\s*(\d+)/);
    if (!icMatch) continue;
    
    const currentCount = parseInt(icMatch[1]);
    if (currentCount !== actualCount) {
      const icFullIdx = searchStart + chunk.indexOf(icMatch[0]);
      listingContent = listingContent.substring(0, icFullIdx) + 
        `investigationCount: ${actualCount}` + 
        listingContent.substring(icFullIdx + icMatch[0].length);
      fixCount++;
    }
  }
  
  if (fixCount > 0) {
    fs.writeFileSync(listingFile, listingContent);
    console.log(`Fixed ${fixCount} investigation counts`);
    totalFixed += fixCount;
  } else {
    console.log(`All counts match or no differences found`);
  }
}

console.log(`\nTotal fixes: ${totalFixed}`);
