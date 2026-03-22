// List all SHORT_CONTENT entries more accurately
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

const shorts = [];
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.ts')).sort()) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s{2,4}'([a-z0-9-]+)':\s*\{/);
    if (!m) continue;
    const slug = m[1];
    
    let title = '', category = '', contentCount = 0;
    let inContent = false;
    let bracketDepth = 0;
    
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j].trim();
      
      if (line.match(/^\s*'[a-z0-9-]+':\s*\{/) && j > i + 1) break;
      
      if (!title) {
        const tm = line.match(/title:\s*['"]([^'"]+)/);
        if (tm) title = tm[1];
      }
      if (!category) {
        const cm = line.match(/category:\s*['"]([^'"]+)/);
        if (cm) category = cm[1];
      }
      
      if (line.startsWith('content: [') || line === 'content: [') {
        inContent = true;
        bracketDepth = 1;
        continue;
      }
      
      if (inContent) {
        if (line === '],') { inContent = false; break; }
        // Count lines that start a new string element
        if (line.startsWith("'") || line.startsWith('"')) contentCount++;
      }
    }
    
    if (contentCount < 3 && contentCount > 0) {
      shorts.push({ file: f, slug, title: title.substring(0, 80), category, paras: contentCount });
    }
  }
}

console.log(`Total SHORT_CONTENT entries: ${shorts.length}\n`);
for (const s of shorts) {
  console.log(`  ${s.file}:${s.slug} (${s.paras} paras) [${s.category}] - ${s.title}`);
}
