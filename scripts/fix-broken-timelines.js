/**
 * Fix timeline entries that contain literal newlines or unescaped double quotes.
 * These were caused by the fix-timelines.js script extracting text from double-quoted
 * content strings without properly sanitizing the output.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => /^[a-z0-9]\.ts$/.test(f)).sort();

let totalFixes = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // Find all timeline blocks
  const timelineRegex = /timeline:\s*\[/g;
  let match;
  
  while ((match = timelineRegex.exec(content)) !== null) {
    const startIdx = match.index;
    
    // Find the matching ], for this timeline array
    // Need to track nesting since there could be [ ] inside strings
    let depth = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let escaped = false;
    let endIdx = -1;
    
    const searchStart = content.indexOf('[', startIdx + 'timeline:'.length);
    
    for (let i = searchStart; i < content.length && i < searchStart + 10000; i++) {
      const ch = content[i];
      
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      
      if (ch === "'" && !inDoubleQuote) { inSingleQuote = !inSingleQuote; continue; }
      if (ch === '"' && !inSingleQuote) { inDoubleQuote = !inDoubleQuote; continue; }
      
      if (inSingleQuote || inDoubleQuote) continue;
      
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) { endIdx = i; break; }
      }
    }
    
    if (endIdx === -1) continue;
    
    const timelineBlock = content.slice(searchStart, endIdx + 1);
    
    // Check if this block contains issues:
    // 1. Literal newlines inside event strings (between { date: and }, )
    // 2. Double quotes that break string boundaries
    
    // Parse individual timeline entries
    const entryRegex = /\{\s*date:\s*'([^']*)'\s*,\s*event:\s*'([\s\S]*?)'\s*,\s*type:\s*'([^']*)'\s*\}/g;
    let entryMatch;
    let fixedBlock = timelineBlock;
    let blockModified = false;
    
    // Find broken entries - lines that start with { date: but the event contains newlines
    const lines = timelineBlock.split('\n');
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      const dateMatch = line.match(/^\{\s*date:\s*'([^']*)'\s*,\s*event:\s*'(.*)$/);
      
      if (dateMatch) {
        // Check if this line has a complete entry (ends with type: '....' },)
        if (/,\s*type:\s*'[^']*'\s*\},?$/.test(line)) {
          // Complete entry on one line - check for issues in the event text
          i++;
          continue;
        }
        
        // Incomplete entry - spans multiple lines (this is a problem!)
        // Collect all lines until we find the closing }, or a new { date:
        const brokenLines = [lines[i]];
        let j = i + 1;
        while (j < lines.length) {
          const nextLine = lines[j].trim();
          if (nextLine.startsWith('{ date:') || nextLine.startsWith('],') || nextLine === '],' || nextLine === ']') {
            break;
          }
          brokenLines.push(lines[j]);
          j++;
        }
        
        if (brokenLines.length > 1) {
          // This is a broken multi-line entry
          const fullText = brokenLines.join(' ').replace(/\s+/g, ' ').trim();
          
          // Try to reconstruct the entry
          const reconstructMatch = fullText.match(/\{\s*date:\s*'([^']*)'\s*,\s*event:\s*'(.*?)'\s*,\s*type:\s*'([^']*)'\s*\}/);
          
          if (reconstructMatch) {
            // Clean up the event text
            let event = reconstructMatch[2]
              .replace(/"\s*,\s*"[A-Z][A-Z\s&,/-]+:.*$/g, '') // Remove adjacent content sections
              .replace(/"\s*$/g, '') // Remove trailing double quote
              .replace(/^[^a-zA-Z0-9]*/g, '') // Remove leading non-alnum
              .replace(/\s+/g, ' ')
              .trim();
            
            if (event.length > 220) {
              event = event.slice(0, 217);
              const lastSpace = event.lastIndexOf(' ');
              if (lastSpace > 160) event = event.slice(0, lastSpace);
              event += '...';
            }
            
            const fixedEntry = `     { date: '${reconstructMatch[1]}', event: '${event.replace(/'/g, "\\'")}', type: '${reconstructMatch[3]}' },`;
            
            // Replace the broken lines with the fixed entry
            lines.splice(i, brokenLines.length, fixedEntry);
            blockModified = true;
            totalFixes++;
            console.log(`  Fixed broken entry in ${file}: date=${reconstructMatch[1]}`);
          } else {
            // Can't reconstruct - try harder
            // Extract date and remove the whole broken entry
            const dateOnly = fullText.match(/date:\s*'([^']*)'/);
            const typeMatch = fullText.match(/type:\s*'([^']*)'/);
            
            if (dateOnly) {
              // Find any usable text for the event
              let eventText = fullText.replace(/\{.*?event:\s*'/, '').replace(/'.*$/, '');
              // Clean up double-quote boundaries
              eventText = eventText.replace(/",\s*"[A-Z]/g, '. ').replace(/"/g, '').replace(/\s+/g, ' ').trim();
              
              if (eventText.length > 220) {
                eventText = eventText.slice(0, 217);
                const ls = eventText.lastIndexOf(' ');
                if (ls > 160) eventText = eventText.slice(0, ls);
                eventText += '...';
              }
              
              if (eventText.length > 20) {
                const type = typeMatch ? typeMatch[1] : 'default';
                const fixedEntry = `     { date: '${dateOnly[1]}', event: '${eventText.replace(/'/g, "\\'")}', type: '${type}' },`;
                lines.splice(i, brokenLines.length, fixedEntry);
                blockModified = true;
                totalFixes++;
                console.log(`  Fixed broken entry (reconstructed) in ${file}: date=${dateOnly[1]}`);
              } else {
                // Remove the broken entry entirely
                lines.splice(i, brokenLines.length);
                blockModified = true;
                totalFixes++;
                console.log(`  Removed unfixable entry in ${file}: date=${dateOnly[1]}`);
              }
            } else {
              i = j;
              continue;
            }
          }
        }
      }
      i++;
    }
    
    if (blockModified) {
      const newBlock = lines.join('\n');
      content = content.slice(0, searchStart) + newBlock + content.slice(endIdx + 1);
      modified = true;
      // Reset regex position since content length changed
      timelineRegex.lastIndex = searchStart + newBlock.length;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Saved: ${file}`);
  }
}

console.log(`\nTotal fixes: ${totalFixes}`);
