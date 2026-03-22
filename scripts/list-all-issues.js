const fs = require('fs');
const path = require('path');

const invDir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const shardFiles = fs.readdirSync(invDir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

// Quick parse - extract slug and key fields
const allIssues = { noContent: [], noEventOrigin: [], sparseTimeline: [], fewSources: [], fewAffiliations: [], noMoneyTrails: [] };

let moneyTrailSlugs = new Set();
try {
  const mtContent = fs.readFileSync(path.join(invDir, 'moneyTrails.ts'), 'utf8');
  const mtMatches = mtContent.match(/'([a-z0-9-]+)':\s*\{/g) || [];
  mtMatches.forEach(m => moneyTrailSlugs.add(m.match(/'([^']+)'/)[1]));
} catch(e) {}

for (const file of shardFiles) {
  if (file === 'moneyTrails.ts') continue;
  const content = fs.readFileSync(path.join(invDir, file), 'utf8');
  
  // Match each investigation entry
  const slugRegex = /^\s*'([a-z0-9-]+)':\s*\{/gm;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    const startPos = match.index;
    
    // Find the content block for this investigation
    let depth = 0;
    let blockEnd = startPos;
    let foundStart = false;
    for (let i = startPos; i < content.length; i++) {
      if (content[i] === '{') { depth++; foundStart = true; }
      if (content[i] === '}') { depth--; }
      if (foundStart && depth === 0) { blockEnd = i; break; }
    }
    
    const block = content.substring(startPos, blockEnd + 1);
    
    // Check content length
    const contentMatch = block.match(/content:\s*\[/);
    if (contentMatch) {
      const contentStart = block.indexOf('content: [');
      let d = 0; let contentEnd = contentStart;
      for (let i = contentStart; i < block.length; i++) {
        if (block[i] === '[') d++;
        if (block[i] === ']') { d--; if (d === 0) { contentEnd = i; break; } }
      }
      const contentBlock = block.substring(contentStart, contentEnd + 1);
      const items = contentBlock.split(/'\s*,\s*'/).length;
      if (items < 3) {
        allIssues.noContent.push({ file, slug, count: items });
      }
    }
    
    // Check eventOriginDate
    if (!block.includes('eventOriginDate')) {
      allIssues.noEventOrigin.push({ file, slug });
    }
    
    // Check timeline
    const timelineEntries = (block.match(/\{\s*date:/g) || []).length;
    const timelineInTimeline = block.includes('timeline:');
    if (timelineInTimeline && timelineEntries < 4) {
      allIssues.sparseTimeline.push({ file, slug, count: timelineEntries });
    }
    
    // Check sources
    const sourceEntries = (block.match(/\{\s*title:/g) || []).length;
    const sourcesInSources = block.includes('sources:');
    if (sourcesInSources && sourceEntries < 2) {
      allIssues.fewSources.push({ file, slug, count: sourceEntries });
    }
    
    // Check affiliations
    const affMatch = block.match(/affiliations:\s*\[/);
    if (affMatch) {
      const affStart = block.indexOf('affiliations: [');
      let d = 0; let affEnd = affStart;
      for (let i = affStart; i < block.length; i++) {
        if (block[i] === '[') d++;
        if (block[i] === ']') { d--; if (d === 0) { affEnd = i; break; } }
      }
      const affBlock = block.substring(affStart, affEnd + 1);
      const affCount = (affBlock.match(/id:\s*'/g) || []).length;
      if (affCount < 2) {
        allIssues.fewAffiliations.push({ file, slug, count: affCount });
      }
    }
    
    // Check money trails
    if (!moneyTrailSlugs.has(slug)) {
      allIssues.noMoneyTrails.push({ file, slug });
    }
  }
}

console.log('=== INVESTIGATIONS WITH SHORT/NO CONTENT (' + allIssues.noContent.length + ') ===');
allIssues.noContent.forEach(i => console.log(`  ${i.file}:${i.slug} (${i.count} content items)`));

console.log('\n=== MISSING eventOriginDate (' + allIssues.noEventOrigin.length + ') ===');
allIssues.noEventOrigin.forEach(i => console.log(`  ${i.file}:${i.slug}`));

console.log('\n=== SPARSE TIMELINE <4 entries (' + allIssues.sparseTimeline.length + ') ===');
allIssues.sparseTimeline.forEach(i => console.log(`  ${i.file}:${i.slug} (${i.count} entries)`));

console.log('\n=== FEW SOURCES <2 (' + allIssues.fewSources.length + ') ===');
allIssues.fewSources.forEach(i => console.log(`  ${i.file}:${i.slug} (${i.count} sources)`));

console.log('\n=== FEW AFFILIATIONS <2 (' + allIssues.fewAffiliations.length + ') ===');
allIssues.fewAffiliations.forEach(i => console.log(`  ${i.file}:${i.slug} (${i.count} affiliations)`));

console.log('\n=== NO MONEY TRAILS (' + allIssues.noMoneyTrails.length + ') ===');
allIssues.noMoneyTrails.forEach(i => console.log(`  ${i.file}:${i.slug}`));
