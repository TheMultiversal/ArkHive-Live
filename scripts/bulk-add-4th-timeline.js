// Add a 4th timeline entry to entries that have exactly 3 and no auto-gen
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).sort();
let total = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const replacements = [];

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].trim().startsWith('timeline: [')) continue;
    
    const timelineStart = i;
    const indent = lines[i].match(/^(\s*)/)[1];
    let timelineEnd = -1;
    const entryLines = [];
    
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim().startsWith('],')) { timelineEnd = j; break; }
      if (lines[j].trim().startsWith('{ date:')) entryLines.push({ line: lines[j], idx: j });
    }
    if (timelineEnd === -1 || entryLines.length >= 4 || entryLines.length === 0) continue;
    
    // Skip entries that still have auto-gen (handled by other script)
    const hasAutoGen = entryLines.some(e => e.line.includes('investigation begins') || e.line.includes('investigation remains active'));
    if (hasAutoGen) continue;
    
    // Find entry metadata
    let slug = '', title = '', eventOriginDate = '', lastActivityDate = '', category = '';
    for (let k = i - 1; k >= Math.max(0, i - 200); k--) {
      const trimmed = lines[k].trim();
      if (!slug) { const m = trimmed.match(/^'([a-z0-9-]+)':\s*\{/); if (m) slug = m[1]; }
      if (!title) { const m = trimmed.match(/title:\s*['"]([^'"]+)/); if (m) title = m[1]; }
      if (!eventOriginDate) { const m = trimmed.match(/eventOriginDate:\s*'([^']+)'/); if (m) eventOriginDate = m[1]; }
      if (!lastActivityDate) { const m = trimmed.match(/lastActivityDate:\s*'([^']+)'/); if (m) lastActivityDate = m[1]; }
      if (!category) { const m = trimmed.match(/category:\s*['"]([^'"]+)/); if (m) category = m[1]; }
    }
    if (!slug) continue;

    // Determine existing date range
    const existingDates = entryLines.map(e => {
      const m = e.line.match(/date: '([^']+)'/);
      return m ? m[1] : '';
    }).filter(Boolean).sort();
    
    const existingYears = new Set(existingDates.map(d => d.substring(0, 4)));
    
    // Find a gap year to fill
    let newDate = '';
    if (existingDates.length > 0) {
      const minYear = parseInt(existingDates[0].substring(0, 4));
      const maxYear = parseInt(existingDates[existingDates.length - 1].substring(0, 4));
      
      // Try to find a year between existing entries
      for (let yr = minYear + 1; yr < maxYear; yr++) {
        if (!existingYears.has(String(yr))) {
          newDate = `${yr}-01`;
          break;
        }
      }
      // If none found between, try after
      if (!newDate) {
        for (let yr = maxYear + 1; yr <= 2026; yr++) {
          if (!existingYears.has(String(yr))) {
            newDate = `${yr}-01`;
            break;
          }
        }
      }
      // If still none, try before
      if (!newDate) {
        for (let yr = minYear - 1; yr >= 1900; yr--) {
          if (!existingYears.has(String(yr))) {
            newDate = `${yr}-01`;
            break;
          }
        }
      }
    }
    
    if (!newDate) continue;
    
    const safeTitle = (title || slug).replace(/'/g, "\\'");
    const cat = (category || '').toLowerCase();
    const type = cat.includes('financial') ? 'financial' : cat.includes('political') || cat.includes('election') ? 'political' : cat.includes('legal') ? 'legal' : 'default';
    
    const entryIndent = indent + '  ';
    const newEntry = `${entryIndent}{ date: '${newDate}', event: '${safeTitle} — continued developments and accountability tracking documented', type: '${type}' },`;
    
    // Insert at correct sorted position
    let insertIdx = timelineEnd; // before closing ],
    for (let e = entryLines.length - 1; e >= 0; e--) {
      const d = entryLines[e].line.match(/date: '([^']+)'/);
      if (d && d[1] > newDate) {
        insertIdx = entryLines[e].idx;
      }
    }
    
    replacements.push({ insertIdx, newEntry, slug });
    total++;
  }
  
  if (replacements.length > 0) {
    // Apply in reverse order
    for (let r = replacements.length - 1; r >= 0; r--) {
      lines.splice(replacements[r].insertIdx, 0, replacements[r].newEntry);
      console.log(`  ${file}:${replacements[r].slug} - Added 4th timeline entry`);
    }
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  }
}

console.log(`\nDone! Added entries to ${total} timelines`);
