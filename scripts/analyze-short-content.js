// Better content counting that handles escaped quotes
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

let shorts = 0;
let falsePositives = 0;
const realShorts = [];

for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.ts')).sort()) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s{2,4}'([a-z0-9-]+)':\s*\{/);
    if (!m) continue;
    const slug = m[1];
    
    // Find content block
    let contentStart = -1, contentEnd = -1;
    for (let j = i + 1; j < Math.min(lines.length, i + 300); j++) {
      if (lines[j].trim().match(/^'[a-z0-9-]+':\s*\{/) || lines[j].trim() === '};') break;
      
      if (lines[j].trim().startsWith('content: [') || lines[j].trim() === 'content: [') {
        contentStart = j;
        // Find matching ]
        let depth = 0;
        for (let k = j; k < Math.min(lines.length, j + 100); k++) {
          depth += (lines[k].match(/\[/g) || []).length;
          depth -= (lines[k].match(/\]/g) || []).length;
          if (depth === 0) { contentEnd = k; break; }
        }
        break;
      }
    }
    
    if (contentStart === -1 || contentEnd === -1) continue;
    
    // Count actual content paragraphs by tracking quote openings
    const contentBlock = lines.slice(contentStart, contentEnd + 1).join('\n');
    
    // Method: use audit's split method
    const auditCount = contentBlock.split(/'\s*,\s*'/).length;
    
    // Better method: count lines that start a new string in the array
    let lineCount = 0;
    for (let k = contentStart + 1; k < contentEnd; k++) {
      const trimmed = lines[k].trim();
      // A content line starts with a quote character
      if (trimmed.match(/^['"]/) || trimmed.match(/^`/)) lineCount++;
    }
    
    if (auditCount < 3) {
      // The audit thinks this is short. Check if it really is.
      if (lineCount >= 3) {
        falsePositives++;
      } else {
        realShorts.push({ file: f, slug, auditCount, lineCount });
      }
    }
  }
}

console.log(`Audit flagged as SHORT: ${realShorts.length + falsePositives}`);
console.log(`False positives (actually have 3+ paras): ${falsePositives}`);
console.log(`Real short content (< 3 paras): ${realShorts.length}\n`);
for (const s of realShorts) {
  console.log(`  ${s.file}:${s.slug} (audit=${s.auditCount}, lines=${s.lineCount})`);
}
