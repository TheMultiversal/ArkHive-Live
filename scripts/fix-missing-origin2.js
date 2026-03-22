// Fix missing eventOriginDate by inferring from the date field
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let count = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const regex = /  '([a-z0-9-]+)':\s*\{/g;
  let m;
  const slugs = [];
  while ((m = regex.exec(content)) !== null) {
    slugs.push({ slug: m[1], index: m.index });
  }
  
  // Process in reverse to preserve indices
  for (let i = slugs.length - 1; i >= 0; i--) {
    const start = slugs[i].index;
    const end = i + 1 < slugs.length ? slugs[i + 1].index : content.length;
    const chunk = content.substring(start, end);
    
    if (chunk.includes('eventOriginDate')) continue;
    
    // Get the date field
    const dateMatch = chunk.match(/date:\s*['"]([^'"]+)['"]/);
    const lastUpdatedMatch = chunk.match(/lastUpdated:\s*['"]([^'"]+)['"]/);
    
    if (!dateMatch) continue;
    
    // Parse date
    const dateStr = dateMatch[1];
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) continue;
    const eventOriginDate = parsed.toISOString().split('T')[0];
    
    const lastActivity = lastUpdatedMatch ? new Date(lastUpdatedMatch[1]) : new Date();
    const lastActivityDate = isNaN(lastActivity.getTime()) ? '2026-03-18' : lastActivity.toISOString().split('T')[0];
    
    // Insert after affiliations array or after sources array
    const insertPoint = chunk.match(/affiliations:\s*\[[\s\S]*?\],?\n/);
    if (insertPoint) {
      const insertIdx = start + insertPoint.index + insertPoint[0].length;
      const insertText = `   eventOriginDate: '${eventOriginDate}',\n   lastActivityDate: '${lastActivityDate}',\n   pageUpdatedDate: '2026-03-18',\n`;
      content = content.substring(0, insertIdx) + insertText + content.substring(insertIdx);
      modified = true;
      count++;
      console.log(`  ${file}:${slugs[i].slug} - Added eventOriginDate: ${eventOriginDate}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log(`\nDone! Fixed ${count} entries`);
