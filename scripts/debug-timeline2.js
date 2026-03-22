// Debug: show raw timeline section for sparse entries
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

const targets = ['authoritarian-network','alaska-airlines-1282','ai-safety-concerns','adelphia-scandal','1mdb-scandal'];

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.ts')).sort()) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  for (const slug of targets) {
    const slugPattern = `'${slug}': {`;
    const idx = content.indexOf(slugPattern);
    if (idx === -1) continue;
    
    // Get entry text
    const nextSlug = content.substring(idx + slugPattern.length).match(/\n\s{2,4}'[a-z0-9-]+':\s*\{/);
    const entryEnd = nextSlug ? idx + slugPattern.length + nextSlug.index : content.length;
    const entryText = content.substring(idx, entryEnd);
    
    // Find timeline section
    const tlIdx = entryText.indexOf('timeline:');
    if (tlIdx === -1) { console.log(`${slug}: no timeline found`); continue; }
    
    // Show 20 lines around timeline
    const before = entryText.substring(Math.max(0, tlIdx - 50), tlIdx);
    const after = entryText.substring(tlIdx, Math.min(entryText.length, tlIdx + 600));
    console.log(`\n=== ${slug} (${file}) ===`);
    console.log(before + after);
    console.log('---');
    
    // Test regex
    const match = entryText.match(/(\s*)timeline:\s*\[([\s\S]*?)\n\s*\],/);
    console.log(`Regex match: ${match ? 'YES' : 'NO'}`);
    if (match) {
      const entries = (match[2].match(/\{[^}]+\}/g) || []);
      console.log(`  Parsed entries: ${entries.length}`);
    }
  }
}
