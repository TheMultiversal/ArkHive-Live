// Script to analyze current source counts per investigation
const fs = require('fs');
const path = require('path');

const dir = path.resolve('src/data/investigations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).sort();

let total = 0;
let needsSources = 0;
const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const lines = content.split('\n');
  
  let currentSlug = '';
  let currentTitle = '';
  let inSources = false;
  let bracketDepth = 0;
  let sourceCount = 0;
  
  for (const line of lines) {
    const slugMatch = line.match(/slug:\s*'([^']+)'/);
    if (slugMatch) currentSlug = slugMatch[1];
    
    const titleMatch = line.match(/^\s*title:\s*'([^']+)'/);
    if (titleMatch && !inSources) currentTitle = titleMatch[1];
    
    if (/sources:\s*\[/.test(line) && !inSources) {
      inSources = true;
      bracketDepth = 0;
      sourceCount = 0;
      for (const ch of line) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }
      // Count titles on this line too
      const tc = (line.match(/title:/g) || []).length;
      sourceCount += tc;
      if (bracketDepth <= 0) {
        inSources = false;
        total++;
        if (sourceCount <= 2) {
          needsSources++;
          results.push({ file, slug: currentSlug, title: currentTitle.substring(0, 80), srcCount: sourceCount });
        }
      }
      continue;
    }
    
    if (inSources) {
      for (const ch of line) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }
      const tc = (line.match(/title:/g) || []).length;
      sourceCount += tc;
      
      if (bracketDepth <= 0) {
        inSources = false;
        total++;
        if (sourceCount <= 2) {
          needsSources++;
          results.push({ file, slug: currentSlug, title: currentTitle.substring(0, 80), srcCount: sourceCount });
        }
      }
    }
  }
}

console.log(`Total investigations: ${total}`);
console.log(`Investigations with <=2 sources: ${needsSources}`);
console.log('');
results.forEach(r => console.log(`${r.file} | ${r.slug} | ${r.srcCount} src | ${r.title}`));
