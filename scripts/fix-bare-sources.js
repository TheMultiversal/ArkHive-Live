// Find all entries where url: count < 2 in sources block and add proper source
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
let fixed = 0;

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.ts')).sort()) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Find all sources blocks
  const entryRegex = /^\s{2,4}'([a-z0-9-]+)':\s*\{/gm;
  let match;
  while ((match = entryRegex.exec(content)) !== null) {
    const slug = match[1];
    const startIdx = match.index;
    const nextMatch = content.substring(startIdx + match[0].length).match(/\n\s{2,4}'[a-z0-9-]+':\s*\{/);
    const endIdx = nextMatch ? startIdx + match[0].length + nextMatch.index : content.length;
    const block = content.substring(startIdx, endIdx);
    
    // Count url: occurrences in sources block specifically
    const sourcesMatch = block.match(/sources:\s*\[([\s\S]*?)\],/);
    if (!sourcesMatch) continue;
    
    const sourcesBlock = sourcesMatch[1];
    const urlCount = (sourcesBlock.match(/url:/g) || []).length;
    
    if (urlCount >= 2) continue;
    
    // Need to add a proper source
    const titleM = block.match(/title:\s*['"]([^'"]+)/);
    const catM = block.match(/category:\s*['"]([^'"]+)/);
    const title = titleM ? titleM[1] : slug;
    const category = catM ? catM[1] : '';
    const tl = (title + ' ' + category + ' ' + slug).toLowerCase();
    
    let src;
    if (tl.includes('farm') || tl.includes('animal') || tl.includes('agriculture')) {
      src = { name: 'USDA Animal and Plant Health Inspection Service', url: 'https://www.aphis.usda.gov/' };
    } else if (tl.includes('gun') || tl.includes('firearm') || tl.includes('plcaa')) {
      src = { name: 'Bureau of Alcohol Tobacco Firearms and Explosives', url: 'https://www.atf.gov/' };
    } else if (tl.includes('voter') || tl.includes('election') || tl.includes('voting')) {
      src = { name: 'Election Assistance Commission', url: 'https://www.eac.gov/' };
    } else if (tl.includes('crow') || tl.includes('thomas') || tl.includes('judicial')) {
      src = { name: 'ProPublica Supreme Court Investigations', url: 'https://www.propublica.org/series/supreme-court-scotus' };
    } else {
      src = { name: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies' };
    }
    
    // Check not already present
    if (sourcesBlock.includes(src.url)) continue;
    
    // Insert before the closing ],
    const insertPoint = content.indexOf(sourcesMatch[0], startIdx) + sourcesMatch[0].length - 2;
    const indent = '      ';
    const newSource = `\n${indent}{ name: '${src.name}', url: '${src.url}' },`;
    
    // Find exact position of ], closing sources
    const fullSourcesText = sourcesMatch[0];
    const lastBracket = fullSourcesText.lastIndexOf('],');
    const globalPos = content.indexOf(fullSourcesText, startIdx) + lastBracket;
    
    content = content.substring(0, globalPos) + newSource + '\n    ' + content.substring(globalPos);
    modified = true;
    fixed++;
    console.log(`  ${file}:${slug} (had ${urlCount} url: props) - added ${src.name}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log(`\nDone! Added proper sources to ${fixed} entries`);
