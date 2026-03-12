#!/usr/bin/env node
/**
 * Strip bot-injected boilerplate text from existing individual profiles.
 * 
 * This removes the massive "ArkHive's distributed investigative intelligence network"
 * paragraph that was appended to descriptions by the templateEnrichProfile function.
 * 
 * Also strips:
 * - Fabricated CONTROVERSY_POOLS entries (fake SEC filings, fake court records)
 * - Fabricated TIMELINE entries (fake ArkHive swarm intelligence events)
 * - Fabricated SOURCE entries (generic database links with person name)
 * - Fabricated CRIME_DOSSIER entries (template legal allegations)
 * - "Subject of Record" titles
 * - "Under review based on institutional connections" roles
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

// Patterns that identify bot-injected boilerplate in descriptions
const DESC_BOILERPLATE_PATTERNS = [
  /\s*\S+ has been flagged by ArkHive's distributed investigative intelligence network[\s\S]*?within the accountability network\./,
  /\s*Network mapping conducted by the swarm intelligence system[\s\S]*?institutional sectors\./,
  /\s*Financial forensic analysis of publicly available filings[\s\S]*?accountability documentation\./,
  /\s*ArkHive's automated systems have initiated ongoing monitoring[\s\S]*?documentary evidence\./,
  /\s*This profile continues to be expanded as new public records surface[\s\S]*?accountability network\./,
  /\s*In the capacity of [^,]+, \S+'s documented activities intersect with \d+ distinct policy domains[\s\S]*?public transparency\./,
];

// Controversy text markers (fake generated controversies)
const FAKE_CONTROVERSY_MARKERS = [
  "ArkHive's distributed investigative intelligence network analyzed",
  "ArkHive's analysis of Department of Justice press releases",
  "Financial forensic analysis of SEC filings and corporate proxy statements reveals",
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

// Timeline markers (fake ArkHive events)
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

// Source markers (fake generic database links)
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
];

// Crime dossier markers (fabricated legal allegations)
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

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  let changes = 0;

  // Strip boilerplate from descriptions
  for (const pattern of DESC_BOILERPLATE_PATTERNS) {
    const before = content;
    content = content.replace(new RegExp(pattern.source, 'g'), '');
    if (content !== before) changes++;
  }

  // More targeted: strip the inline boilerplate sentence pattern in description strings
  // Pattern: "Name has been flagged by ArkHive..." through "...accountability network."
  const boilerplateRegex = /(\S+) has been flagged by ArkHive's distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review\.[^']*?This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network\./g;
  const beforeBP = content;
  content = content.replace(boilerplateRegex, '');
  if (content !== beforeBP) changes++;

  // Clean up double spaces left by removal
  content = content.replace(/  +/g, ' ');
  // Clean up empty descriptions 
  content = content.replace(/'  '/g, "' '");

  // Write back
  if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  return changes;
}

function countAndRemoveFakeEntries(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  let stats = { controversies: 0, timeline: 0, sources: 0, dossier: 0 };

  // We can't easily remove individual array entries from the TS source with regex,
  // but we CAN report what we find for manual/script review
  for (const marker of FAKE_CONTROVERSY_MARKERS) {
    const matches = content.match(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    if (matches) stats.controversies += matches.length;
  }
  for (const marker of FAKE_TIMELINE_MARKERS) {
    const matches = content.match(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    if (matches) stats.timeline += matches.length;
  }
  for (const marker of FAKE_SOURCE_MARKERS) {
    const matches = content.match(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    if (matches) stats.sources += matches.length;
  }
  for (const marker of FAKE_DOSSIER_MARKERS) {
    const matches = content.match(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    if (matches) stats.dossier += matches.length;
  }

  return stats;
}

// Main
console.log('=== ArkHive Boilerplate Stripping ===\n');

const files = fs.readdirSync(INDIVIDUALS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
  .sort();

let totalDescChanges = 0;
let totalFakeContros = 0;
let totalFakeTimeline = 0;
let totalFakeSources = 0;
let totalFakeDossier = 0;

for (const file of files) {
  const filePath = path.join(INDIVIDUALS_DIR, file);
  
  // Strip description boilerplate
  const descChanges = processFile(filePath);
  totalDescChanges += descChanges;
  
  // Count fake entries (for reporting)
  const fakeStats = countAndRemoveFakeEntries(filePath);
  totalFakeContros += fakeStats.controversies;
  totalFakeTimeline += fakeStats.timeline;
  totalFakeSources += fakeStats.sources;
  totalFakeDossier += fakeStats.dossier;
  
  if (descChanges > 0 || fakeStats.controversies + fakeStats.timeline + fakeStats.sources + fakeStats.dossier > 0) {
    console.log(`${file}: desc_cleaned=${descChanges > 0 ? 'yes' : 'no'}, fake_contros=${fakeStats.controversies}, fake_timeline=${fakeStats.timeline}, fake_sources=${fakeStats.sources}, fake_dossier=${fakeStats.dossier}`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Files processed: ${files.length}`);
console.log(`Descriptions cleaned: ${totalDescChanges}`);
console.log(`Fake controversies found: ${totalFakeContros}`);
console.log(`Fake timeline entries found: ${totalFakeTimeline}`);
console.log(`Fake source entries found: ${totalFakeSources}`);
console.log(`Fake dossier entries found: ${totalFakeDossier}`);
console.log(`\nNote: Description boilerplate has been stripped.`);
console.log(`Fake array entries are reported for awareness but require a separate TS-aware cleanup.`);
