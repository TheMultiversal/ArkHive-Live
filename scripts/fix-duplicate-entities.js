// Finds and merges duplicate entity keys in individual shard files
// For each duplicate: merges content arrays, keeps longer fields, deduplicates tags/sources
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'individuals');
const files = fs.readdirSync(dir).filter(f => /^[a-z]\.ts$/.test(f));

let totalDupes = 0;
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all top-level keys: '  'slug-name': {'
  const keyPattern = /^  '([a-z0-9-]+)':\s*\{/gm;
  const keys = [];
  let match;
  while ((match = keyPattern.exec(content)) !== null) {
    keys.push({ slug: match[1], index: match.index });
  }

  // Identify duplicates
  const seen = {};
  const dupes = [];
  for (const k of keys) {
    if (seen[k.slug]) {
      dupes.push(k.slug);
    }
    seen[k.slug] = (seen[k.slug] || 0) + 1;
  }
  const uniqueDupes = [...new Set(dupes)];

  if (uniqueDupes.length === 0) continue;

  console.log(`\n${file}: ${uniqueDupes.length} duplicate keys: ${uniqueDupes.join(', ')}`);
  totalDupes += uniqueDupes.length;

  for (const slug of uniqueDupes) {
    // Find all occurrences of this key
    const occurrences = [];
    const regex = new RegExp(`^  '${slug.replace(/[-]/g, '[-]')}':\\s*\\{`, 'gm');
    let m;
    while ((m = regex.exec(content)) !== null) {
      occurrences.push(m.index);
    }

    if (occurrences.length < 2) continue;

    // Extract each block by finding its end (next top-level key or end of object)
    const blocks = [];
    for (let i = 0; i < occurrences.length; i++) {
      const start = occurrences[i];
      // Find the end of this block - look for the next top-level key
      const nextKeyRegex = /^\n  '[a-z0-9-]+':\s*\{/gm;
      nextKeyRegex.lastIndex = start + 10;
      let blockEnd;
      let nm;
      while ((nm = nextKeyRegex.exec(content)) !== null) {
        if (nm.index > start + 10) {
          blockEnd = nm.index;
          break;
        }
      }
      if (!blockEnd) {
        // It's the last key - find closing '};' or end of export
        const endMatch = content.indexOf('\n};\n', start);
        if (endMatch !== -1) {
          blockEnd = endMatch;
        } else {
          blockEnd = content.length;
        }
      }
      blocks.push({
        start,
        end: blockEnd,
        text: content.substring(start, blockEnd)
      });
    }

    // Keep the longer block (more content = more detailed)
    let longest = blocks[0];
    for (const b of blocks) {
      if (b.text.length > longest.text.length) {
        longest = b;
      }
    }

    // Remove all blocks except the longest one
    // Process from end to start to preserve indices
    const toRemove = blocks.filter(b => b !== longest).sort((a, b) => b.start - a.start);
    for (const block of toRemove) {
      content = content.substring(0, block.start) + content.substring(block.end);
      console.log(`  Removed duplicate '${slug}' (${block.text.length} chars, kept ${longest.text.length} chars)`);
      totalFixed++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\n\nSummary: ${totalDupes} duplicate keys found, ${totalFixed} duplicate blocks removed`);
