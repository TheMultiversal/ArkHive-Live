// Robust duplicate entity merger - handles any indentation
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'individuals');
const files = fs.readdirSync(dir).filter(f => /^[a-z]\.ts$/.test(f));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all slug keys with any indentation
  const keyPattern = /^(\s+)'([a-z0-9][-a-z0-9]*)':\s*\{/gm;
  const keyCounts = {};
  let match;
  while ((match = keyPattern.exec(content)) !== null) {
    const slug = match[2];
    if (!keyCounts[slug]) keyCounts[slug] = [];
    keyCounts[slug].push({ index: match.index, indent: match[1] });
  }

  const dupes = Object.entries(keyCounts).filter(([, locs]) => locs.length > 1);
  if (dupes.length === 0) continue;

  console.log(`${file}: ${dupes.length} duplicates`);

  // Process from end to start so indices stay valid
  const removals = [];

  for (const [slug, locations] of dupes) {
    // Extract each block
    const blocks = [];
    for (const loc of locations) {
      const start = loc.index;
      // Find end by tracking brace depth
      let depth = 0;
      let inString = false;
      let stringChar = '';
      let escaped = false;
      let blockEnd = start;

      for (let i = start; i < content.length; i++) {
        const ch = content[i];

        if (escaped) {
          escaped = false;
          continue;
        }
        if (ch === '\\') {
          if (inString) escaped = true;
          continue;
        }

        if (inString) {
          if (ch === stringChar) inString = false;
          continue;
        }

        if (ch === "'" || ch === '"' || ch === '`') {
          inString = true;
          stringChar = ch;
          continue;
        }

        if (ch === '{') depth++;
        if (ch === '}') {
          depth--;
          if (depth === 0) {
            // Find the comma after the closing brace
            let endIdx = i + 1;
            // Skip whitespace and comma
            while (endIdx < content.length && (content[endIdx] === ',' || content[endIdx] === ' ' || content[endIdx] === '\r')) {
              endIdx++;
            }
            // Include the newline after
            if (content[endIdx] === '\n') endIdx++;
            blockEnd = endIdx;
            break;
          }
        }
      }

      blocks.push({
        start,
        end: blockEnd,
        length: blockEnd - start,
        text: content.substring(start, blockEnd)
      });
    }

    // Keep the longest block
    let longest = blocks[0];
    for (const b of blocks) {
      if (b.length > longest.length) longest = b;
    }

    for (const block of blocks) {
      if (block !== longest) {
        removals.push({ start: block.start, end: block.end, slug, keptLen: longest.length, removedLen: block.length });
      }
    }
  }

  // Sort removals by start position descending
  removals.sort((a, b) => b.start - a.start);

  for (const r of removals) {
    content = content.substring(0, r.start) + content.substring(r.end);
    console.log(`  Removed '${r.slug}' (${r.removedLen} chars, kept ${r.keptLen} chars)`);
    totalFixed++;
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\nTotal duplicates removed: ${totalFixed}`);
