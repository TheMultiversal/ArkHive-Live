#!/usr/bin/env node
/**
 * Deep Clean v3 - Nuclear option: remove ANY array entry containing ArkHive
 * fabricated content markers. Uses substring matching, not regex.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');
const FILES = ['a.ts', 'b.ts'];

// Any string/object containing ANY of these substrings gets removed
const POISON_STRINGS = [
  'ArkHive',
  'arkHive',
  'arkhive',
  'FinCEN',
  'Bank Secrecy Act',
  'PACER database',
  'PACER reveals',
  'SEC whistleblower',
  'SEC Office of the Whistleblower',
  'SEC EDGAR',
  'fincen.gov',
  'structured financial transactions designed to evade',
  'statutory response deadlines were exceeded',
  'cross-entity holdings created potential conflicts',
  'Inspector General audit reports covering operations',
  'Inspector General report covering period',
  'Government Accountability Office investigations found',
  'Profile flagged for expanded documentation based on automated',
  'Profile created by ArkHive',
  'flagged for expanded documentation based on automated analysis',
  'investigative network analysis of institutional power structures',
  'cross-referencing investigative databases',
  'automated analysis of financial disclosure patterns',
  'accountability gaps identified across related entity profiles',
  'enrichment with specific publicly documented controversies',
  'Swarm Intelligence for investigative tracking',
  'lobbying expenditure trends, and institutional relationship mapping',
  'public records reveals.*connected to institutional activities warranting',
  'Whistleblower Protection Act filing',
  'Congressional hearing transcript analysis flagged',
  'Financial disclosure cross-referencing',
  'Network graph analysis completed for',
  'FOIA request tracking indicates',
  'FOIA Electronic Reading Room',
  'Public records audit of',
  'Court filing analysis via PACER',
  'Miami Herald: Epstein Investigation',
  'Columbia Journalism Review',
  'Federal Court Records: Proceedings referencing',
  'Congressional Record: Hearing testimony involving',
  'DOJ Press Releases: Enforcement actions',
  'GAO Reports: Government Accountability Office',
  'ProPublica Nonprofit Explorer: Tax-exempt',
  'Federal Register: Regulatory actions and rulemaking',
  'ICIJ Offshore Leaks Database: Cross-border',
  'FEC Individual Contribution Search: Political donation',
  'UN Human Rights Council: International accountability',
  'CBO Budget Analysis: Federal program cost',
  'OSHA Enforcement Data: Workplace safety',
  'OpenSecrets: Campaign finance and lobbying expenditure',
  'Corporate governance analysis reveals',
  'Financial forensic analysis of SEC filings',
  'Investigative analysis of lobbying disclosure reports',
  'Congressional committee investigative reports and accompanying staff',
];

/**
 * Parse a TS file and remove contaminated entries from arrays.
 * Works line-by-line, tracking which strings/objects are contaminated.
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  const lines = content.split('\n');
  const linesToRemove = new Set();
  let totalRemoved = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isContaminated(line)) {
      // Mark this line for removal
      // But first, check if it's part of a multi-line object { ... }
      // Walk backward to find start of object/string entry
      const range = getEntryRange(lines, i);
      for (let j = range.start; j <= range.end; j++) {
        linesToRemove.add(j);
      }
      totalRemoved++;
    }
  }

  // Build new content excluding removed lines
  const newLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (!linesToRemove.has(i)) {
      newLines.push(lines[i]);
    }
  }

  let newContent = newLines.join('\n');
  
  // Cleanup: fix trailing commas before ] and empty arrays
  newContent = newContent.replace(/,(\s*)\]/g, '$1]');
  newContent = newContent.replace(/,\s*,/g, ',');
  newContent = newContent.replace(/\[\s*,/g, '[');
  newContent = newContent.replace(/,(\s*)\]/g, '$1]');
  newContent = newContent.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  ✓ ${filename}: removed ${totalRemoved} contaminated entries (${linesToRemove.size} lines)`);
  return totalRemoved;
}

function isContaminated(line) {
  for (const poison of POISON_STRINGS) {
    if (line.includes(poison)) return true;
  }
  // Also catch case-insensitive 'arkhive' in case of variants
  if (/arkhive/i.test(line)) return true;
  return false;
}

/**
 * Given a contaminated line, find the full range of the entry it belongs to.
 * Could be a single-line string, or a multi-line object { ... }
 */
function getEntryRange(lines, lineIdx) {
  const line = lines[lineIdx].trim();
  
  // Check if this line is inside a multi-line object literal
  // Walk backward to find opening {
  let start = lineIdx;
  let end = lineIdx;
  
  // Check if we're inside an unclosed {
  let braceDepth = 0;
  for (let i = lineIdx; i >= Math.max(0, lineIdx - 20); i--) {
    const l = lines[i];
    for (let c = l.length - 1; c >= 0; c--) {
      if (l[c] === '}') braceDepth++;
      if (l[c] === '{') {
        braceDepth--;
        if (braceDepth < 0) {
          // Found our opening brace
          start = i;
          // Now find the closing }
          braceDepth = 0;
          for (let j = start; j < Math.min(lines.length, start + 30); j++) {
            for (let k = 0; k < lines[j].length; k++) {
              if (lines[j][k] === '{') braceDepth++;
              if (lines[j][k] === '}') {
                braceDepth--;
                if (braceDepth === 0) {
                  end = j;
                  return { start, end };
                }
              }
            }
          }
          return { start, end: lineIdx };
        }
      }
    }
  }
  
  return { start: lineIdx, end: lineIdx };
}

// ── Main ──
console.log('═══ Deep Clean v3: Nuclear contamination removal ═══\n');
let grandTotal = 0;
for (const file of FILES) {
  const fp = path.join(INDIVIDUALS_DIR, file);
  if (!fs.existsSync(fp)) {
    console.log(`  ✗ ${file}: not found`);
    continue;
  }
  grandTotal += processFile(fp);
}
console.log(`\n═══ Complete: ${grandTotal} total entries removed ═══`);
