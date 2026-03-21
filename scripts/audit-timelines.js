const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => /^[a-z0-9]\.ts$/.test(f)).sort();

let noTimeline = 0, sparse = 0, good = 0, total = 0;
const issues = [];

for (const f of files) {
  const c = fs.readFileSync(path.join(dir, f), 'utf-8');
  // Find all top-level slug keys
  const slugMatches = [...c.matchAll(/\n\s{1,2}'([a-z0-9][a-z0-9-]+)':\s*\{/g)];
  
  for (const sm of slugMatches) {
    const slug = sm[1];
    total++;
    const si = sm.index;
    
    // Find the boundary of this investigation (next top-level key or end of file)
    const rest = c.slice(si + 1);
    const nextMatch = rest.search(/\n\s{1,2}'[a-z0-9][a-z0-9-]+':\s*\{/);
    const block = nextMatch > 0 ? rest.slice(0, nextMatch) : rest.slice(0, 8000);
    
    // Check for timeline
    if (!block.includes('timeline:')) {
      noTimeline++;
      continue;
    }
    
    // Count timeline entries
    const entries = [...block.matchAll(/\{\s*date:\s*'/g)];
    const timelineStart = block.indexOf('timeline:');
    // Only count entries after "timeline:" appears  
    const timelineBlock = block.slice(timelineStart);
    const closeBracket = timelineBlock.indexOf('],');
    const tBlock = closeBracket > 0 ? timelineBlock.slice(0, closeBracket) : timelineBlock;
    const tEntries = [...tBlock.matchAll(/\{\s*date:\s*'/g)];
    
    if (tEntries.length <= 3) {
      sparse++;
      issues.push({ slug, count: tEntries.length, file: f });
    } else if (tEntries.length > 5) {
      good++;
    }
  }
}

console.log('=== TIMELINE AUDIT ===');
console.log('Total investigations scanned:', total);
console.log('No timeline at all:', noTimeline);
console.log('Sparse (<=3 entries):', sparse);
console.log('Medium (4-5 entries):', total - noTimeline - sparse - good);
console.log('Good (>5 entries):', good);
console.log('\nSparse investigations:');
issues.forEach(i => console.log(`  ${i.slug}: ${i.count} entries (${i.file})`));
