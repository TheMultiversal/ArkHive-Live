#!/usr/bin/env node
/**
 * Deep clean a.ts and b.ts - strip ALL fabricated bot content:
 * 1. ArkHive boilerplate in descriptions
 * 2. Fake controversies (SEC, FinCEN, DOJ, PACER, ArkHive graph analysis, etc.)
 * 3. Fake timeline entries (ArkHive swarm, FOIA tracking, financial disclosure, etc.)
 * 4. Fake sources (generic database URLs with person's name)
 * 5. Fake crime dossier entries
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');
const FILES = ['a.ts', 'b.ts'];

// ── Description boilerplate patterns ──
const DESC_BOILERPLATE = /\s*\S+ has been flagged by ArkHive's distributed investigative intelligence network[^']*?This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network\./g;

// ── Fake controversy line markers ──
const FAKE_CONTROVERSY_MARKERS = [
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
  "ArkHive's analysis of Department of Justice press releases and federal court filings identified",
];

// ── Fake timeline event markers ──
const FAKE_TIMELINE_MARKERS = [
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
];

// ── Fake source markers ──
const FAKE_SOURCE_MARKERS = [
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
];

// ── Fake crime dossier markers ──
const FAKE_DOSSIER_MARKERS = [
  "per ArkHive forensic analysis",
  "per ArkHive analysis of",
  "per ArkHive cross-referencing",
  "per ArkHive network graph analysis",
  "per ArkHive review of corporate filings",
  "per ArkHive enterprise analysis",
  "per ArkHive analysis of FEC filings",
  "per ArkHive analysis of media ownership",
  "per ArkHive analysis of privacy audits",
  "per ArkHive analysis of international monitoring",
  "per ArkHive analysis of EPA records",
  "per ArkHive analysis of FinCEN records",
  "ArkHive forensic financial analysis",
  "ArkHive RICO pattern analysis",
  "ArkHive trading pattern analysis",
];

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function removeFakeArrayEntries(content, markers, entryType) {
  let removed = 0;
  for (const marker of markers) {
    const escaped = escapeRegex(marker);
    // Match full controversy/timeline/source/dossier entries
    // Controversy: single-quoted string in array
    // Pattern: '...marker...',\n  or  '...marker...',
    const stringEntryRe = new RegExp(`\\s*'[^']*${escaped}[^']*',?\\n?`, 'g');
    const before = content;
    content = content.replace(stringEntryRe, '');
    if (content !== before) removed++;

    // Object-style timeline/source entries: { date: '...', event: '...marker...' },
    const objEntryRe = new RegExp(`\\s*\\{[^}]*${escaped}[^}]*\\},?\\n?`, 'g');
    const before2 = content;
    content = content.replace(objEntryRe, '');
    if (content !== before2) removed++;
  }
  return { content, removed };
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  let totalChanges = 0;

  // 1. Strip boilerplate from descriptions
  const before1 = content;
  content = content.replace(DESC_BOILERPLATE, '');
  if (content !== before1) {
    const descCount = (before1.match(DESC_BOILERPLATE) || []).length;
    console.log(`  [${filename}] Stripped ${descCount} description boilerplate blocks`);
    totalChanges += descCount;
  }

  // 2. Remove fake controversies
  const r2 = removeFakeArrayEntries(content, FAKE_CONTROVERSY_MARKERS, 'controversy');
  content = r2.content;
  if (r2.removed > 0) {
    console.log(`  [${filename}] Removed ${r2.removed} fake controversy patterns`);
    totalChanges += r2.removed;
  }

  // 3. Remove fake timeline entries
  const r3 = removeFakeArrayEntries(content, FAKE_TIMELINE_MARKERS, 'timeline');
  content = r3.content;
  if (r3.removed > 0) {
    console.log(`  [${filename}] Removed ${r3.removed} fake timeline patterns`);
    totalChanges += r3.removed;
  }

  // 4. Remove fake sources
  const r4 = removeFakeArrayEntries(content, FAKE_SOURCE_MARKERS, 'source');
  content = r4.content;
  if (r4.removed > 0) {
    console.log(`  [${filename}] Removed ${r4.removed} fake source patterns`);
    totalChanges += r4.removed;
  }

  // 5. Remove fake dossier entries
  const r5 = removeFakeArrayEntries(content, FAKE_DOSSIER_MARKERS, 'dossier');
  content = r5.content;
  if (r5.removed > 0) {
    console.log(`  [${filename}] Removed ${r5.removed} fake dossier patterns`);
    totalChanges += r5.removed;
  }

  // 6. Clean up double newlines, trailing commas before ], etc.
  content = content.replace(/,(\s*)\]/g, '$1]');
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.replace(/  +/g, ' ');

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ ${filename}: ${totalChanges} total cleanup operations applied`);
  } else {
    console.log(`  ✓ ${filename}: already clean`);
  }
  return totalChanges;
}

console.log('═══ Deep Clean: Stripping fabricated bot content from a.ts & b.ts ═══\n');
let grandTotal = 0;
for (const file of FILES) {
  const fp = path.join(INDIVIDUALS_DIR, file);
  if (fs.existsSync(fp)) {
    grandTotal += processFile(fp);
  } else {
    console.log(`  ✗ ${file} not found`);
  }
}
console.log(`\n═══ Complete: ${grandTotal} total operations ═══`);
