const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// For each slug, specify [file, keepOccurrence] (1-indexed)
// keepOccurrence = which instance number to KEEP (remove all others)
const dedupeMap = {
  'asset-forfeiture-abuse': { file: 'a.ts', keep: 2 },        // keep 2390, remove 2097
  'environmental-racism': { file: 'e.ts', keep: 2 },           // keep 1753, remove 652
  'exxon-climate-fraud': { file: 'e.ts', keep: 2 },            // keep 1946, remove 1037
  'goldman-sachs-fraud': { file: 'g.ts', keep: 1 },            // keep 987, remove 1549
  'iraq-sanctions': { file: 'i.ts', keep: 1 },                 // keep 93, remove 1259
  'immigration-detention-abuse': { file: 'i.ts', keep: 1 },    // keep 1416, remove 1528
  'kissinger-foreign-policy-war-crimes': { file: 'k.ts', keep: 2 }, // keep 557 (massive), remove 445
  'school-to-prison-pipeline': { file: 's.ts', keep: 1 },      // keep 2617, remove 2996
  'tuskegee-syphilis-experiment': { file: 't.ts', keep: 3 },   // keep 2618 (3rd), remove 2060 and 2527
};

// Also need to remove pfas from x.ts entirely (keep p.ts version)
const crossFileRemove = {
  slug: 'pfas-forever-chemicals-contamination',
  removeFrom: 'x.ts',
};

function findEntryBounds(content, slug, occurrence) {
  // Find the N-th occurrence of this slug key
  const pattern = new RegExp("  '" + slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "':\\s*\\{", 'g');
  let match;
  let found = 0;
  let startIdx = -1;
  
  while ((match = pattern.exec(content)) !== null) {
    found++;
    if (found === occurrence) {
      startIdx = match.index;
      break;
    }
  }
  
  if (startIdx === -1) return null;
  
  // Find end of this top-level entry
  // Look for the next top-level key pattern: \n  'some-slug': { 
  // or end of the object (just before };\n)
  const restContent = content.substring(startIdx + 1);
  const nextKeyMatch = restContent.match(/\n  '[a-z0-9][a-z0-9-]*':\s*\{/);
  
  let endIdx;
  if (nextKeyMatch) {
    endIdx = startIdx + 1 + nextKeyMatch.index;
  } else {
    // This is the last entry - find the closing of the main object
    // Look for "\n};" pattern
    const closeMatch = restContent.match(/\n\};\s*\n/);
    if (closeMatch) {
      endIdx = startIdx + 1 + closeMatch.index;
    } else {
      console.error(`Cannot find end boundary for ${slug} occurrence ${occurrence}`);
      return null;
    }
  }
  
  // Include the preceding newline in removal (to avoid blank lines)
  // But start from beginning of the line with the slug
  const lineStart = content.lastIndexOf('\n', startIdx - 1);
  const adjustedStart = lineStart >= 0 ? lineStart : startIdx;
  
  return { start: adjustedStart, end: endIdx };
}

function countOccurrences(content, slug) {
  const pattern = new RegExp("'" + slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "':\\s*\\{", 'g');
  const matches = content.match(pattern);
  return matches ? matches.length : 0;
}

// Process same-file duplicates
const filesModified = new Set();

for (const [slug, config] of Object.entries(dedupeMap)) {
  const filePath = path.join(dir, config.file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const total = countOccurrences(content, slug);
  if (total <= 1) {
    console.log(`SKIP: ${slug} in ${config.file} — only ${total} occurrence(s)`);
    continue;
  }
  
  console.log(`\nProcessing ${slug} in ${config.file} (${total} occurrences, keeping #${config.keep})...`);
  
  // Remove occurrences in reverse order (to preserve line numbers)
  const toRemove = [];
  for (let i = total; i >= 1; i--) {
    if (i !== config.keep) {
      toRemove.push(i);
    }
  }
  
  for (const occ of toRemove) {
    const bounds = findEntryBounds(content, slug, occ);
    if (!bounds) {
      console.error(`  ERROR: Could not find bounds for occurrence #${occ}`);
      continue;
    }
    const removedLines = content.substring(bounds.start, bounds.end).split('\n').length;
    console.log(`  Removing occurrence #${occ}: chars ${bounds.start}-${bounds.end} (~${removedLines} lines)`);
    content = content.substring(0, bounds.start) + content.substring(bounds.end);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  filesModified.add(config.file);
  
  // Verify
  const verify = countOccurrences(content, slug);
  console.log(`  Result: ${verify} occurrence(s) remaining ${verify === 1 ? '✓' : '✗ ERROR'}`);
}

// Process cross-file removal (pfas in x.ts)
{
  const { slug, removeFrom } = crossFileRemove;
  const filePath = path.join(dir, removeFrom);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const total = countOccurrences(content, slug);
  if (total === 0) {
    console.log(`\nSKIP: ${slug} in ${removeFrom} — not found`);
  } else {
    console.log(`\nProcessing cross-file: ${slug} in ${removeFrom} (${total} occurrence(s), removing all)...`);
    
    for (let occ = total; occ >= 1; occ--) {
      const bounds = findEntryBounds(content, slug, occ);
      if (!bounds) {
        console.error(`  ERROR: Could not find bounds for occurrence #${occ}`);
        continue;
      }
      const removedLines = content.substring(bounds.start, bounds.end).split('\n').length;
      console.log(`  Removing occurrence #${occ}: chars ${bounds.start}-${bounds.end} (~${removedLines} lines)`);
      content = content.substring(0, bounds.start) + content.substring(bounds.end);
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    filesModified.add(removeFrom);
    
    const verify = countOccurrences(content, slug);
    console.log(`  Result: ${verify} occurrence(s) remaining ${verify === 0 ? '✓' : '✗ ERROR'}`);
  }
}

console.log(`\nFiles modified: ${[...filesModified].join(', ')}`);

// Final verification - check ALL files for any remaining duplicates
console.log('\n=== FINAL DUPLICATE CHECK ===');
const allFiles = fs.readdirSync(dir).filter(f => /^[a-z0-9]\.ts$/.test(f));
const slugCounts = {};

for (const file of allFiles) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const pattern = /'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g;
  let match;
  while ((match = pattern.exec(content)) !== null) {
    const s = match[1];
    if (!slugCounts[s]) slugCounts[s] = [];
    slugCounts[s].push(file);
  }
}

let dupeFound = false;
for (const [s, files] of Object.entries(slugCounts)) {
  if (files.length > 1) {
    console.log(`DUPLICATE: ${s} in ${files.join(', ')}`);
    dupeFound = true;
  }
}
if (!dupeFound) {
  console.log('No duplicates found! ✓');
}
