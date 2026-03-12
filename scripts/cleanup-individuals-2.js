#!/usr/bin/env node
/**
 * Round 2 Cleanup: Remove additional non-individual entries found in second sweep.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

const SLUGS_TO_REMOVE = {
  'c.ts': ['cbp', 'cdc', 'cisa', 'chinese-communist-party', 'corecivic'],
  'f.ts': ['faa'],
  'g.ts': ['google'],
  'h.ts': ['halliburton'],
  'm.ts': ['microsoft', 'meta'],
  'r.ts': ['rosebud-sioux'],
  'u.ts': ['united-fruit-company'],
};

function removeEntriesFromFile(filePath, slugsToRemove) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const removedSlugs = [];
  const notFoundSlugs = [];
  const linesToRemove = new Set();
  
  for (const slug of slugsToRemove) {
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
      console.error(`  ERROR: Could not find closing brace for '${slug}'`);
      continue;
    }
    
    for (let i = startLine; i <= endLine; i++) {
      linesToRemove.add(i);
    }
    
    removedSlugs.push({ slug, startLine: startLine + 1, endLine: endLine + 1, lines: endLine - startLine + 1 });
  }
  
  if (removedSlugs.length === 0) return { removedSlugs, notFoundSlugs, linesRemoved: 0 };
  
  const newLines = lines.filter((_, idx) => !linesToRemove.has(idx));
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
  
  return { removedSlugs, notFoundSlugs, linesRemoved: linesToRemove.size };
}

console.log('=== ArkHive Individuals Cleanup (Round 2) ===\n');

let totalRemoved = 0;
let totalLinesRemoved = 0;

for (const [filename, slugs] of Object.entries(SLUGS_TO_REMOVE)) {
  const filePath = path.join(INDIVIDUALS_DIR, filename);
  if (!fs.existsSync(filePath)) { console.log(`SKIP: ${filename}`); continue; }
  
  console.log(`Processing ${filename}...`);
  const result = removeEntriesFromFile(filePath, slugs);
  
  for (const entry of result.removedSlugs) {
    console.log(`  REMOVED: '${entry.slug}' (lines ${entry.startLine}-${entry.endLine}, ${entry.lines} lines)`);
  }
  for (const slug of result.notFoundSlugs) {
    console.log(`  NOT FOUND: '${slug}'`);
  }
  
  totalRemoved += result.removedSlugs.length;
  totalLinesRemoved += result.linesRemoved;
}

console.log(`\n=== Summary ===`);
console.log(`Entries removed: ${totalRemoved}`);
console.log(`Lines removed: ${totalLinesRemoved}`);
