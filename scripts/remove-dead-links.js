// Remove dead link entries from source files
// Dead links appear as object entries like:
//   { title: '...', url: 'https://dead-url.com/...', date: '...' },
// This script removes the entire object entry (possibly multi-line)
const fs = require('fs');
const path = require('path');

const dead = JSON.parse(fs.readFileSync('scripts/dead-urls.json', 'utf8'));
const deadSet = new Set(dead);

function walk(dir) {
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '.git', 'scripts'].includes(e.name)) {
      files.push(...walk(p));
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      files.push(p);
    }
  }
  return files;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const files = walk('src');
let totalRemoved = 0;
const fileChanges = {};

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  for (const deadUrl of dead) {
    if (!content.includes(deadUrl)) continue;
    
    // Strategy: find the object entry containing this URL and remove it
    // Pattern 1: Single-line object entry
    //   { title: '...', url: 'DEAD_URL', date: '...' },
    // Pattern 2: Multi-line object entry - url property on its own line
    //   { title: '...',
    //     url: 'DEAD_URL',
    //     date: '...' },
    // Pattern 3: url: 'DEAD_URL' as part of a larger multi-line object
    
    const escaped = escapeRegex(deadUrl);
    
    // Try single-line object removal first: { ... url: 'DEAD_URL' ... },\n
    // Match from opening { to closing },
    const singleLineRe = new RegExp(
      `^[ \\t]*\\{[^}]*url:\\s*['"]${escaped}['"][^}]*\\},?\\s*\\n`,
      'gm'
    );
    
    const before = content;
    content = content.replace(singleLineRe, '');
    
    if (content !== before) {
      const count = (before.match(singleLineRe) || []).length;
      totalRemoved += count;
      changed = true;
      const rel = path.relative('.', f);
      if (!fileChanges[rel]) fileChanges[rel] = 0;
      fileChanges[rel] += count;
      continue;
    }
    
    // Try multi-line: find the object block that contains this URL
    // Look for the opening { before the url line and closing }, after it
    const lines = content.split('\n');
    const newLines = [];
    let i = 0;
    let removedInThisPass = false;
    
    while (i < lines.length) {
      if (lines[i].includes(deadUrl)) {
        // Found a line with the dead URL
        // Walk backwards to find the opening {
        let start = i;
        let braceDepth = 0;
        // Count braces on the current line first
        for (const ch of lines[i]) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
        
        if (braceDepth <= 0) {
          // Need to find opening brace above
          let tempDepth = braceDepth;
          for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
            for (const ch of lines[j]) {
              if (ch === '{') tempDepth++;
              if (ch === '}') tempDepth--;
            }
            start = j;
            if (tempDepth > 0) break; // Found opening brace
          }
        }
        
        // Walk forward to find closing },
        let end = i;
        braceDepth = 0;
        for (let j = start; j <= Math.min(lines.length - 1, i + 10); j++) {
          for (const ch of lines[j]) {
            if (ch === '{') braceDepth++;
            if (ch === '}') braceDepth--;
          }
          end = j;
          if (braceDepth <= 0 && j >= i) break;
        }
        
        // Remove lines from start to end (inclusive)
        // But verify the block is reasonable (not too big, likely an object entry)
        const blockSize = end - start + 1;
        if (blockSize <= 15) {
          // Skip these lines
          i = end + 1;
          totalRemoved++;
          removedInThisPass = true;
          const rel = path.relative('.', f);
          if (!fileChanges[rel]) fileChanges[rel] = 0;
          fileChanges[rel]++;
          continue;
        }
      }
      newLines.push(lines[i]);
      i++;
    }
    
    if (removedInThisPass) {
      content = newLines.join('\n');
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
  }
}

console.log(`Total entries removed: ${totalRemoved}`);
console.log('\nChanges by file:');
for (const [f, count] of Object.entries(fileChanges).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${f}: ${count} removed`);
}

// Verify no dead URLs remain
let remaining = 0;
for (const f of walk('src')) {
  const txt = fs.readFileSync(f, 'utf8');
  for (const u of dead) {
    if (txt.includes(u)) {
      remaining++;
      console.log(`REMAINING: ${u} in ${path.relative('.', f)}`);
    }
  }
}
console.log(`\nDead URLs still in source: ${remaining}`);
