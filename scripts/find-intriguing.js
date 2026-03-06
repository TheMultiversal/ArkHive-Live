const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => f !== 'index.ts' && f !== 'types.ts' && f.endsWith('.ts'));
let all = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  
  // Split by top-level keys (investigation slugs)
  const entries = content.split(/\n  '/);
  for (let i = 0; i < entries.length; i++) {
    const entry = (i === 0 ? '' : "'") + entries[i];
    const slugM = entry.match(/^'([^']+)'\s*:\s*\{/);
    if (!slugM) continue;
    
    const titleM = entry.match(/title:\s*'([^']+)'/);
    const sevM = entry.match(/severity:\s*'([^']+)'/);
    const catM = entry.match(/category:\s*'([^']+)'/);
    const dateM = entry.match(/date:\s*'([^']+)'/);
    const sumM = entry.match(/summary:\s*'([\s\S]*?)(?:',\n|'\n)/);
    const tagsM = entry.match(/tags:\s*\[([\s\S]*?)\]/);
    const affM = entry.match(/affiliations:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*\}/);
    
    if (titleM) {
      const entityCount = affM ? (affM[1].match(/\bid:/g) || []).length : 0;
      const tags = tagsM ? (tagsM[1].match(/'([^']+)'/g) || []).map(t => t.replace(/'/g, '')) : [];
      const summaryRaw = sumM ? sumM[1].replace(/\s+/g, ' ').trim() : '';
      // Get first 2 sentences
      const sentences = summaryRaw.match(/[^.!?]+[.!?]+/g) || [summaryRaw];
      const summary = sentences.slice(0, 2).join('').trim();
      
      all.push({
        slug: slugM[1],
        title: titleM[1],
        severity: sevM ? sevM[1] : '?',
        category: catM ? catM[1] : '?',
        date: dateM ? dateM[1] : '?',
        entityCount,
        summary: summary.substring(0, 300),
        tags: tags.slice(0, 5),
        file: f
      });
    }
  }
}

// Sort: critical first, then by entity count
all.sort((a, b) => {
  const sevOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  const sa = sevOrder[a.severity] || 4;
  const sb = sevOrder[b.severity] || 4;
  if (sa !== sb) return sa - sb;
  return b.entityCount - a.entityCount;
});

// Exclude the 3 specified
const exclude = ['trump-criminal-compendium', 'epstein-network-investigation', 'january-6-insurrection'];
const filtered = all.filter(i => !exclude.includes(i.slug));

console.log('Total investigations:', all.length);
console.log('\n=== TOP 60 (sorted by severity + entity count) ===\n');
for (const inv of filtered.slice(0, 60)) {
  console.log(JSON.stringify(inv));
}
