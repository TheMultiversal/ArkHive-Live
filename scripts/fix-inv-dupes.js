const fs = require('fs');
const path = require('path');

function removeDuplicateEntries(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  // Find all top-level entry keys and their line numbers
  const entries = [];
  const keyPattern = /^\s{2}'([a-z][\w-]+)':\s*\{/;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(keyPattern);
    if (m) entries.push({ key: m[1], line: i });
  }
  
  // Find duplicates
  const seen = {};
  const toRemove = [];
  entries.forEach(entry => {
    if (seen[entry.key] !== undefined) {
      // This is a duplicate - find its extent (until the next entry or }; )
      const startLine = entry.line;
      let endLine = lines.length - 1;
      // Find next entry after this one
      const nextEntry = entries.find(e => e.line > startLine && e.key !== entry.key);
      const nextSame = entries.find(e => e.line > startLine && e.key === entry.key);
      if (nextEntry) endLine = nextEntry.line - 1;
      // Find the closing }, for this entry
      let depth = 0;
      for (let i = startLine; i < lines.length; i++) {
        for (const ch of lines[i]) {
          if (ch === '{') depth++;
          if (ch === '}') depth--;
        }
        if (depth === 0) { endLine = i; break; }
      }
      toRemove.push({ key: entry.key, start: startLine, end: endLine });
      console.log('  Remove duplicate: ' + entry.key + ' lines ' + (startLine+1) + '-' + (endLine+1));
    } else {
      seen[entry.key] = entry.line;
    }
  });
  
  // Remove lines in reverse order
  toRemove.sort((a,b) => b.start - a.start);
  toRemove.forEach(r => {
    lines.splice(r.start, r.end - r.start + 1);
  });
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  return toRemove.length;
}

const files = ['g', 'k', 'm'];
files.forEach(letter => {
  const f = path.join('src/data/investigations', letter + '.ts');
  console.log('Processing ' + letter + '.ts:');
  const removed = removeDuplicateEntries(f);
  console.log('  Removed ' + removed + ' duplicates');
});
