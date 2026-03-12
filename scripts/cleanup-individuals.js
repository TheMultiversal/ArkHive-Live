#!/usr/bin/env node
/**
 * Cleanup script: Remove non-individual entries from individuals shard files.
 * These are organizations, corporations, agencies, and placeholders that were
 * incorrectly placed in the individuals directory by the enrichment bots.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

// Complete list of non-individual slugs to remove, organized by shard file
const SLUGS_TO_REMOVE = {
  'a.ts': [
    'aclu',
    'american-water',
    'affinity-partners',
    'alfa-bank',
    'alliance-defending-freedom',
    'american-media-inc',
    'american-enterprise-institute',
    'americans-for-prosperity',
    'alden-global-capital',
    'africom',
    'army-corps',
    'american-petroleum-institute',
    'amazon',
    'associate-1-slug',
    'associate-2-slug',
  ],
  'b.ts': [
    'bayrock-group',
  ],
  'c.ts': [
    'cia',
    'congress',
    'citadel',
    'ccp',
    'chamber-of-commerce',
    'confucius-institute',
  ],
  'd.ts': [
    'deutsche-bank',
    'dod',
    'department-of-defense',
    'department-of-state',
  ],
  'e.ts': [
    'epa',
    'ecohealth-alliance',
  ],
  'f.ts': [
    'french-officials',
    'fbi',
    'family-research-council',
    'fox-corporation',
  ],
  'g.ts': [
    'geo-group',
  ],
  'h.ts': [
    'heritage-foundation',
    'heartland-institute',
  ],
  'i.ts': [
    'imf',
    'interior-department',
    'irs',
    'internet-research-agency',
  ],
  'm.ts': [
    'ministry-of-state-security',
  ],
  'n.ts': [
    'nsa',
    'news-corp',
  ],
  'o.ts': [
    'open-society-foundations',
  ],
  'p.ts': [
    'pentagon',
    'phrma',
  ],
  's.ts': [
    'sec',
    'state-department',
    'sinclair',
    'sinclair-broadcast-group',
  ],
  't.ts': [
    'trilateral-commission',
  ],
  'u.ts': [
    'usda',
    'usaid',
    'un-security-council',
    'us-chamber',
    'united-nations',
    'us-senate',
    'us-army',
  ],
  'w.ts': [
    'world-bank',
    'wuhan-institute-virology',
    'wagner-group',
    'wuhan-institute-of-virology',
  ],
};

function removeEntriesFromFile(filePath, slugsToRemove) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const removedSlugs = [];
  const notFoundSlugs = [];
  
  // For each slug, find its entry boundaries and mark lines for removal
  const linesToRemove = new Set();
  
  for (const slug of slugsToRemove) {
    // Find the entry start: line matching `  'slug': {`
    const entryPattern = new RegExp(`^\\s+'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{`);
    let startLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (entryPattern.test(lines[i])) {
        startLine = i;
        break;
      }
    }
    
    if (startLine === -1) {
      notFoundSlugs.push(slug);
      continue;
    }
    
    // Find the entry end by tracking brace depth
    let braceDepth = 0;
    let endLine = -1;
    
    for (let i = startLine; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === '{') braceDepth++;
        if (ch === '}') braceDepth--;
      }
      if (braceDepth === 0) {
        endLine = i;
        break;
      }
    }
    
    if (endLine === -1) {
      console.error(`  ERROR: Could not find closing brace for '${slug}' starting at line ${startLine + 1}`);
      continue;
    }
    
    // Mark lines for removal (including trailing comma if on same line as closing brace)
    for (let i = startLine; i <= endLine; i++) {
      linesToRemove.add(i);
    }
    
    removedSlugs.push({ slug, startLine: startLine + 1, endLine: endLine + 1, lines: endLine - startLine + 1 });
  }
  
  if (removedSlugs.length === 0 && notFoundSlugs.length === slugsToRemove.length) {
    return { removedSlugs, notFoundSlugs, linesRemoved: 0 };
  }
  
  // Build new content excluding marked lines
  const newLines = lines.filter((_, idx) => !linesToRemove.has(idx));
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
  
  return { removedSlugs, notFoundSlugs, linesRemoved: linesToRemove.size };
}

// Main execution
console.log('=== ArkHive Individuals Cleanup ===\n');

let totalRemoved = 0;
let totalLinesRemoved = 0;
let totalNotFound = 0;

for (const [filename, slugs] of Object.entries(SLUGS_TO_REMOVE)) {
  const filePath = path.join(INDIVIDUALS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filename} does not exist`);
    continue;
  }
  
  console.log(`Processing ${filename} (${slugs.length} entries to remove)...`);
  const result = removeEntriesFromFile(filePath, slugs);
  
  for (const entry of result.removedSlugs) {
    console.log(`  REMOVED: '${entry.slug}' (lines ${entry.startLine}-${entry.endLine}, ${entry.lines} lines)`);
  }
  
  for (const slug of result.notFoundSlugs) {
    console.log(`  NOT FOUND: '${slug}'`);
  }
  
  totalRemoved += result.removedSlugs.length;
  totalLinesRemoved += result.linesRemoved;
  totalNotFound += result.notFoundSlugs.length;
  
  console.log(`  -> Removed ${result.removedSlugs.length} entries (${result.linesRemoved} lines)\n`);
}

console.log('=== Summary ===');
console.log(`Entries removed: ${totalRemoved}`);
console.log(`Lines removed: ${totalLinesRemoved}`);
console.log(`Entries not found: ${totalNotFound}`);
console.log('Done!');
