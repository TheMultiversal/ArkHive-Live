#!/usr/bin/env node
/**
 * Deep Clean v2 - Robust fabricated content removal from a.ts and b.ts
 * Handles escaped quotes within strings properly.
 * 
 * Strategy: Instead of regex on full file, we find contamination markers
 * and remove the enclosing array element (string or object).
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');
const FILES = ['a.ts', 'b.ts'];

// All known fabricated content markers (substrings that identify fake entries)
const CONTAMINATION_MARKERS = [
  // Fake controversies
  "ArkHive's distributed investigative intelligence network analyzed",
  "ArkHive's analysis of Department of Justice press releases",
  "Financial forensic analysis of SEC filings and corporate proxy statements",
  "Investigative analysis of lobbying disclosure reports filed with the Clerk",
  "Congressional committee investigative reports and accompanying staff memoranda",
  "Inspector General audit reports covering operations associated with",
  "Government Accountability Office investigations found that programs",
  "Analysis of FOIA request logs maintained by relevant oversight agencies",
  "Whistleblower disclosures filed with the SEC Office of the Whistleblower",
  "Network analysis conducted by ArkHive's graph intelligence system",
  "Corporate governance analysis reveals",
  "Federal court docket analysis via PACER reveals",
  "Public records analysis of litigation settlements",
  "structured financial transactions designed to evade Bank Secrecy Act",
  "FinCEN's monitoring systems",
  "PACER database",
  "ArkHive's automated investigative intelligence for patterns consistent",
  "ArkHive's automated document analysis systems",
  "statutory response deadlines were exceeded by more than 60 days",
  "cross-entity holdings created potential conflicts of interest",
  "ArkHive forensic financial analysis",
  "ArkHive RICO pattern analysis",
  "ArkHive trading pattern analysis",
  "per ArkHive forensic analysis",
  "per ArkHive analysis of",
  "per ArkHive cross-referencing",
  "per ArkHive network graph analysis",
  "per ArkHive review of corporate filings",
  "per ArkHive enterprise analysis",

  // Fake timeline entries
  "ArkHive swarm intelligence initiated",
  "Network graph analysis completed for",
  "Financial disclosure cross-referencing reveals",
  "Public records audit of",
  "Congressional hearing transcript analysis flagged",
  "Court filing analysis via PACER database identified",
  "FOIA request tracking indicates",
  "ArkHive automated intelligence gathering system identified",
  "Inspector General report covering period of",
  "Whistleblower Protection Act filing related to",

  // Fake sources
  "Federal Court Records: Proceedings referencing",
  "Congressional Record: Hearing testimony involving",
  "SEC EDGAR: Corporate filings and beneficial ownership",
  "OpenSecrets: Campaign finance and lobbying expenditure",
  "DOJ Press Releases: Enforcement actions and indictments",
  "GAO Reports: Government Accountability Office audit",
  "ProPublica Nonprofit Explorer: Tax-exempt",
  "FOIA Electronic Reading Room: Declassified",
  "Federal Register: Regulatory actions and rulemaking",
  "ICIJ Offshore Leaks Database: Cross-border",
  "FinCEN Files: Financial intelligence",
  "FEC Individual Contribution Search: Political donation",
  "UN Human Rights Council: International accountability",
  "CBO Budget Analysis: Federal program cost",
  "OSHA Enforcement Data: Workplace safety",
  "Miami Herald: Epstein Investigation",
  "Columbia Journalism Review",
  
  // Fake source URLs (fincen with future dates)
  "url: 'https://www.fincen.gov'",
  
  // Description boilerplate
  "flagged by ArkHive's distributed investigative intelligence network",
  "continues to be expanded as new public records surface and cross-reference analysis",
  "ArkHive's distributed investigative intelligence network",
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  let totalRemoved = 0;

  for (const marker of CONTAMINATION_MARKERS) {
    let idx = content.indexOf(marker);
    while (idx !== -1) {
      // Find the boundaries of the enclosing element to remove
      const removed = removeEnclosingElement(content, idx, marker);
      if (removed) {
        content = removed.content;
        totalRemoved++;
        // Search again from roughly the same position (content shifted)
        idx = content.indexOf(marker, Math.max(0, idx - 200));
      } else {
        // Can't find enclosing element, skip this occurrence
        idx = content.indexOf(marker, idx + 1);
      }
    }
  }

  // Clean up artifacts: empty arrays [], trailing commas, excess whitespace
  // Fix trailing commas before ]
  content = content.replace(/,(\s*)\]/g, '$1]');
  // Fix double commas
  content = content.replace(/,\s*,/g, ',');
  // Fix leading commas in arrays
  content = content.replace(/\[\s*,/g, '[');
  // Fix trailing commas before ]
  content = content.replace(/,(\s*)\]/g, '$1]');
  // Collapse excessive newlines
  content = content.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ ${filename}: removed ${totalRemoved} contaminated entries`);
  return totalRemoved;
}

/**
 * Given a position inside a contaminated string, find the enclosing
 * array element (either a quoted string or an object { ... }) and remove it.
 */
function removeEnclosingElement(content, markerIdx, marker) {
  // Strategy 1: Check if we're inside a single-quoted string in an array
  // Walk backward from markerIdx to find opening quote
  let stringStart = findStringStart(content, markerIdx);
  if (stringStart !== -1) {
    let stringEnd = findStringEnd(content, stringStart);
    if (stringEnd !== -1 && stringEnd > markerIdx) {
      // Found the enclosing string. Now remove from before it to after it
      return removeArrayElement(content, stringStart, stringEnd);
    }
  }

  // Strategy 2: Check if we're inside an object { ... } in an array
  let objStart = findObjectStart(content, markerIdx);
  if (objStart !== -1) {
    let objEnd = findObjectEnd(content, objStart);
    if (objEnd !== -1 && objEnd > markerIdx) {
      return removeArrayElement(content, objStart, objEnd);
    }
  }

  return null;
}

/**
 * Find the start of the enclosing single-quoted string
 */
function findStringStart(content, pos) {
  // Walk backward to find an unescaped single quote
  for (let i = pos - 1; i >= Math.max(0, pos - 5000); i--) {
    if (content[i] === "'" && (i === 0 || content[i - 1] !== '\\')) {
      return i;
    }
  }
  return -1;
}

/**
 * Find the end of a single-quoted string starting at pos (the opening quote)
 */
function findStringEnd(content, start) {
  for (let i = start + 1; i < Math.min(content.length, start + 10000); i++) {
    if (content[i] === "'" && content[i - 1] !== '\\') {
      return i; // position of closing quote
    }
  }
  return -1;
}

/**
 * Find the start of the enclosing { object
 */
function findObjectStart(content, pos) {
  let depth = 0;
  for (let i = pos - 1; i >= Math.max(0, pos - 5000); i--) {
    if (content[i] === '}') depth++;
    if (content[i] === '{') {
      if (depth === 0) return i;
      depth--;
    }
  }
  return -1;
}

/**
 * Find the end of an object starting at pos (the opening {)
 */
function findObjectEnd(content, start) {
  let depth = 0;
  for (let i = start; i < Math.min(content.length, start + 10000); i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * Remove an array element spanning from elementStart to elementEnd,
 * including any trailing comma and whitespace
 */
function removeArrayElement(content, elementStart, elementEnd) {
  // Extend backward to consume leading whitespace/newline
  let removeStart = elementStart;
  while (removeStart > 0 && (content[removeStart - 1] === ' ' || content[removeStart - 1] === '\t')) {
    removeStart--;
  }
  if (removeStart > 0 && content[removeStart - 1] === '\n') {
    removeStart--;
  }
  if (removeStart > 0 && content[removeStart - 1] === '\r') {
    removeStart--;
  }

  // Extend forward past the element end to consume trailing comma and whitespace
  let removeEnd = elementEnd + 1; // past the closing quote/brace
  // Skip whitespace
  while (removeEnd < content.length && (content[removeEnd] === ' ' || content[removeEnd] === '\t')) {
    removeEnd++;
  }
  // Skip comma
  if (removeEnd < content.length && content[removeEnd] === ',') {
    removeEnd++;
  }
  // Skip trailing whitespace/newline
  while (removeEnd < content.length && (content[removeEnd] === ' ' || content[removeEnd] === '\t')) {
    removeEnd++;
  }
  if (removeEnd < content.length && content[removeEnd] === '\n') {
    removeEnd++;
  }
  if (removeEnd < content.length && content[removeEnd] === '\r') {
    removeEnd++;
  }

  const newContent = content.substring(0, removeStart) + content.substring(removeEnd);
  return { content: newContent };
}

// ── Main ──
console.log('═══ Deep Clean v2: Robust fabricated content removal ═══\n');
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
