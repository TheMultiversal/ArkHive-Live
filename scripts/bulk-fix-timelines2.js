// Bulk fix: Expand sparse timelines (<4 entries) 
// Replace auto-generated entries with content-derived events
const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'data', 'investigations');

let totalFixed = 0;

const files = fs.readdirSync(investigationsDir).filter(f => f.endsWith('.ts')).sort();

for (const file of files) {
  const filePath = path.join(investigationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  // Find all timeline blocks
  let i = 0;
  const replacements = [];
  
  while (i < lines.length) {
    // Find start of timeline
    if (!lines[i].trim().startsWith('timeline: [')) { i++; continue; }
    
    const timelineStart = i;
    const indent = lines[i].match(/^(\s*)/)[1];
    
    // Find end of timeline
    let timelineEnd = -1;
    const entryLines = [];
    let j = i + 1;
    while (j < lines.length) {
      if (lines[j].trim().startsWith('],')) {
        timelineEnd = j;
        break;
      }
      if (lines[j].trim().startsWith('{ date:')) {
        entryLines.push(lines[j]);
      }
      j++;
    }
    if (timelineEnd === -1) { i++; continue; }
    
    // Check: has < 4 entries AND has auto-generated content
    const hasAutoGen = entryLines.some(l => l.includes('investigation begins') || l.includes('investigation remains active'));
    
    if (entryLines.length >= 4 || !hasAutoGen) { i = timelineEnd + 1; continue; }
    
    // Look backwards to find the entry's data
    let slug = '', title = '', category = '', eventOriginDate = '', severity = '';
    const contentParagraphs = [];
    let inContent = false;
    
    for (let k = timelineStart - 1; k >= Math.max(0, timelineStart - 150); k--) {
      const line = lines[k].trim();
      if (!slug && line.match(/^'([a-z0-9-]+)':\s*\{/)) slug = line.match(/^'([a-z0-9-]+)'/)[1];
      if (!title && line.match(/title:\s*['"]/)) title = (line.match(/title:\s*['"]([^'"]+)/) || ['',''])[1];
      if (!category && line.match(/category:\s*['"]/)) category = (line.match(/category:\s*['"]([^'"]+)/) || ['',''])[1];
      if (!severity && line.match(/severity:\s*['"]/)) severity = (line.match(/severity:\s*['"]([^'"]+)/) || ['',''])[1];
      if (!eventOriginDate && line.match(/eventOriginDate:\s*'/)) eventOriginDate = (line.match(/eventOriginDate:\s*'([^']+)'/) || ['',''])[1];
    }
    
    if (!slug) { i = timelineEnd + 1; continue; }
    
    // Get content block
    for (let k = timelineStart - 1; k >= Math.max(0, timelineStart - 150); k--) {
      const line = lines[k].trim();
      if (line === '],' && inContent) { inContent = false; break; }
      if (inContent && line.startsWith("'")) {
        const text = line.replace(/^'/, '').replace(/[',]*$/, '');
        contentParagraphs.unshift(text);
      }
      if (line.startsWith('content:')) inContent = true;
    }
    
    // Get real timeline entries (non-auto-generated)
    const realEntries = entryLines.filter(l => !l.includes('investigation begins') && !l.includes('investigation remains active'));
    
    // Extract years from content
    const allContent = contentParagraphs.join(' ');
    const yearRegex = /\b((?:19|20)\d{2})\b/g;
    const yearsInContent = new Set();
    let ym;
    while ((ym = yearRegex.exec(allContent)) !== null) {
      const y = parseInt(ym[1]);
      if (y >= 1900 && y <= 2026) yearsInContent.add(ym[1]);
    }
    
    // Get existing real entry dates
    const existingDates = new Set();
    for (const rl of realEntries) {
      const dm = rl.match(/date: '([^']+)'/);
      if (dm) existingDates.add(dm[1].substring(0, 4));
    }
    
    // Build new timeline entries from content paragraphs
    const newEntries = [];
    
    // Keep real entries
    for (const rl of realEntries) {
      newEntries.push(rl.trim());
    }
    
    // Determine type
    const defaultType = category.toLowerCase().includes('financial') ? 'financial' : 
                        category.toLowerCase().includes('political') || category.toLowerCase().includes('election') ? 'political' :
                        category.toLowerCase().includes('legal') || category.toLowerCase().includes('justice') ? 'legal' :
                        severity === 'critical' ? 'critical' : 'default';
    
    // Generate entries from content paragraphs
    for (const para of contentParagraphs) {
      if (newEntries.length >= 5) break;
      
      // Find a year in this paragraph
      const paraYears = [];
      const yr = /\b((?:19|20)\d{2})\b/g;
      let pm;
      while ((pm = yr.exec(para)) !== null) {
        const y = pm[1];
        if (!existingDates.has(y) && parseInt(y) >= 1900 && parseInt(y) <= 2026) {
          paraYears.push({ year: y, index: pm.index });
        }
      }
      
      if (paraYears.length === 0) continue;
      
      // Use the first unique year
      const dateToUse = paraYears[0].year;
      if (existingDates.has(dateToUse)) continue;
      existingDates.add(dateToUse);
      
      // Get first sentence or meaningful chunk
      let firstSentence = para.split(/[.;]/)[0].trim();
      // Remove leading headers like "HEADER:"
      firstSentence = firstSentence.replace(/^[A-Z\s]+:\s*/, '');
      if (firstSentence.length > 140) firstSentence = firstSentence.substring(0, 137) + '...';
      firstSentence = firstSentence.replace(/'/g, "\\'");
      
      newEntries.push(`{ date: '${dateToUse}', event: '${firstSentence}', type: '${defaultType}' },`);
    }
    
    // If still under 4, add origin event
    if (newEntries.length < 4 && eventOriginDate) {
      const originYear = eventOriginDate.substring(0, 4);
      if (!existingDates.has(originYear)) {
        existingDates.add(originYear);
        const safeTitle = (title || slug).replace(/'/g, "\\'");
        newEntries.push(`{ date: '${eventOriginDate}', event: '${safeTitle} investigation documented \u2014 accountability records established', type: '${defaultType}' },`);
      }
    }
    
    if (newEntries.length < 4) { 
      // Still not enough - skip this one
      i = timelineEnd + 1; 
      continue; 
    }
    
    // Sort entries by date
    newEntries.sort((a, b) => {
      const da = (a.match(/date: '([^']+)'/) || ['',''])[1];
      const db = (b.match(/date: '([^']+)'/) || ['',''])[1];
      return da.localeCompare(db);
    });
    
    // Construct replacement lines
    const entryIndent = indent + '  ';
    const newTimelineLines = [
      `${indent}timeline: [`,
      ...newEntries.map(e => `${entryIndent}${e}`),
      `${indent}],`,
    ];
    
    replacements.push({
      startLine: timelineStart,
      endLine: timelineEnd,
      newLines: newTimelineLines,
      slug: slug,
    });
    
    totalFixed++;
    console.log(`  ${file}:${slug} - Replaced ${entryLines.length} entries with ${newEntries.length} content-derived entries`);
    
    i = timelineEnd + 1;
  }
  
  // Apply replacements in reverse
  if (replacements.length > 0) {
    for (let r = replacements.length - 1; r >= 0; r--) {
      const rep = replacements[r];
      lines.splice(rep.startLine, rep.endLine - rep.startLine + 1, ...rep.newLines);
    }
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  }
}

console.log(`\nDone! Fixed ${totalFixed} timelines`);
