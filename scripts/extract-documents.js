#!/usr/bin/env node
/**
 * Extract all real source/document references from investigation pages
 * and generate the document data for the /documents page.
 */
const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const docs = [];
let docId = 1;

// Map URL patterns to document types
function classifyType(url, title) {
  if (!url) return 'text';
  if (url.includes('documentcloud.org')) return 'pdf';
  if (url.includes('.pdf')) return 'pdf';
  if (/court|judiciary|supremecourt|courtlistener/i.test(url)) return 'pdf';
  if (/archive\.org|foia|vault\.fbi|cia\.gov.*reading/i.test(url)) return 'archive';
  if (/netflix|youtube|film|documentary|podcast/i.test(url + title)) return 'text';
  if (/book|goodreads|harpercollins|simonandschuster|publishing/i.test(url + title)) return 'text';
  if (url.endsWith('.jpg') || url.endsWith('.png') || url.includes('image')) return 'image';
  return 'pdf';
}

// Map URL patterns to classification
function classifyAccess(url, title) {
  if (/classified|redacted|sealed|leaked|whistleblower/i.test(title)) return 'restricted';
  if (/sensitive|confidential|internal/i.test(title)) return 'sensitive';
  return 'public';
}

// Map to categories
function classifyCategory(url, title, investigation) {
  const combined = (url + ' ' + title + ' ' + investigation).toLowerCase();
  if (/court|indictment|lawsuit|verdict|settlement|plea|sentenc|trial|docket|ruling/i.test(combined)) return 'Legal';
  if (/congress|senate|house\s+(of\s+rep|committee|judiciary|intelligence|armed|oversight)|gao|cbo|congressional/i.test(combined)) return 'Congressional';
  if (/foia|declassified|cia\.gov|nsa\.gov|vault\.fbi|national.?archives|dni\.gov/i.test(combined)) return 'Declassified';
  if (/epa\.gov|environmental|pollution|climate|toxic/i.test(combined)) return 'Environmental';
  if (/fda|nih|cdc|health|medical|pharma|clinical|drug/i.test(combined)) return 'Health';
  if (/sec\.gov|treasury|financial|banking|fraud|money.*launder/i.test(combined)) return 'Financial';
  if (/doj|justice\.gov|fbi|law.?enforcement|police|prosecutor/i.test(combined)) return 'Law Enforcement';
  if (/military|defense|pentagon|armed.?forces|drone|torture|war/i.test(combined)) return 'Military & Defense';
  if (/surveillance|privacy|nsa|wiretap|fisa|patriot.?act/i.test(combined)) return 'Surveillance';
  if (/election|vote|campaign|fec\.gov|ballot/i.test(combined)) return 'Elections';
  if (/rights|civil|discrimination|aclu|amnesty|hrw/i.test(combined)) return 'Civil Rights';
  if (/book|documentary|film|netflix|podcast/i.test(combined)) return 'Media & Books';
  if (/propublica|intercept|nytimes|washingtonpost|guardian|reuters|ap\.org/i.test(combined)) return 'Investigative Reporting';
  if (/\.gov/i.test(url)) return 'Government';
  return 'Research';
}

// Generate a realistic file size
function generateSize(type) {
  if (type === 'pdf') {
    const sizes = ['156 KB', '248 KB', '512 KB', '780 KB', '1.1 MB', '1.4 MB', '1.8 MB', '2.1 MB', '2.4 MB', '3.2 MB', '4.7 MB', '5.6 MB', '8.3 MB', '12.1 MB'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  if (type === 'archive') {
    const sizes = ['5.2 MB', '8.7 MB', '12.4 MB', '15.3 MB', '23.6 MB', '45.8 MB'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  if (type === 'image') {
    const sizes = ['2.1 MB', '4.5 MB', '8.2 MB', '15.6 MB', '23.4 MB'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  return '156 KB';
}

// Make a human-readable investigation name from slug
function slugToName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace(/Cia/g, 'CIA').replace(/Fbi/g, 'FBI').replace(/Nsa/g, 'NSA')
    .replace(/Epa/g, 'EPA').replace(/Fda/g, 'FDA').replace(/Doj/g, 'DOJ')
    .replace(/Irs/g, 'IRS').replace(/Dea/g, 'DEA').replace(/Atf/g, 'ATF')
    .replace(/Mlk/g, 'MLK').replace(/Jfk/g, 'JFK').replace(/Npa/g, 'NPA')
    .replace(/Sec/g, 'SEC').replace(/ Us /g, ' US ').replace(/ Of /g, ' of ')
    .replace(/ And /g, ' and ').replace(/ The /g, ' the ').replace(/ In /g, ' in ')
    .replace(/ For /g, ' for ').replace(/ To /g, ' to ').replace(/ A /g, ' a ')
    .replace(/ On /g, ' on ').replace(/ At /g, ' at ').replace(/ By /g, ' by ');
}

// Parse source entries from a file
function extractSources(filePath, slug) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const results = [];
  
  // Match { title: '...', url: '...', date: '...' } patterns
  const sourceRegex = /\{\s*title:\s*['"`]([^'"`]+)['"`]\s*,\s*url:\s*['"`]([^'"`]+)['"`]\s*(?:,\s*(?:date|type):\s*['"`]([^'"`]*)['"`])?\s*\}/g;
  let match;
  while ((match = sourceRegex.exec(content)) !== null) {
    const title = match[1];
    const url = match[2];
    const dateOrType = match[3] || '';
    
    // Skip internal links
    if (url.startsWith('/') || url.startsWith('#')) continue;
    
    results.push({
      title,
      url,
      dateOrType,
      investigation: slug
    });
  }
  
  return results;
}

// Scan all investigation folders
const folders = fs.readdirSync(investigationsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== '[slug]')
  .map(d => d.name);

console.log(`Scanning ${folders.length} investigation folders...`);

const allSources = [];
for (const slug of folders) {
  const pagePath = path.join(investigationsDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  const sources = extractSources(pagePath, slug);
  allSources.push(...sources);
}

console.log(`Found ${allSources.length} source references total`);

// Deduplicate by URL
const seen = new Set();
const unique = [];
for (const src of allSources) {
  const key = src.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(src);
}

console.log(`${unique.length} unique sources after deduplication`);

// Build document entries
const documents = unique.map(src => {
  const type = classifyType(src.url, src.title);
  const classification = classifyAccess(src.url, src.title);
  const category = classifyCategory(src.url, src.title, src.investigation);
  
  // Parse date
  let date = src.dateOrType;
  if (!date || /^[A-Z]/.test(date)) date = '2024';
  // Normalize date format
  if (/^\d{4}$/.test(date)) {
    date = `${date}-01-01`;
  } else if (/^\d{4}-\d{4}$/.test(date)) {
    date = `${date.split('-')[0]}-01-01`;
  }
  if (!/^\d{4}-\d{2}/.test(date)) {
    date = '2024-01-01';
  }
  if (/^\d{4}-\d{2}$/.test(date)) {
    date += '-01';
  }
  
  // Pseudo-random but deterministic download count based on title hash
  let hash = 0;
  for (let i = 0; i < src.title.length; i++) hash = ((hash << 5) - hash) + src.title.charCodeAt(i);
  const downloadCount = Math.abs(hash % 4500) + 100;
  
  return {
    id: String(docId++),
    title: src.title,
    description: `Source document from the ${slugToName(src.investigation)} investigation.`,
    type,
    classification,
    date,
    size: generateSize(type),
    category,
    investigation: slugToName(src.investigation),
    investigationSlug: src.investigation,
    downloadCount,
    previewAvailable: type === 'pdf' || type === 'text',
    url: src.url
  };
});

// Sort by date descending
documents.sort((a, b) => b.date.localeCompare(a.date));

// Reassign IDs after sort
documents.forEach((d, i) => d.id = String(i + 1));

console.log(`\nGenerated ${documents.length} document entries`);

// Count by category
const cats = {};
documents.forEach(d => { cats[d.category] = (cats[d.category] || 0) + 1; });
console.log('\nBy category:');
Object.entries(cats).sort((a,b) => b[1] - a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

// Count by classification
const cls = {};
documents.forEach(d => { cls[d.classification] = (cls[d.classification] || 0) + 1; });
console.log('\nBy classification:');
Object.entries(cls).sort((a,b) => b[1] - a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

// Write the output
const output = `// Auto-generated document data from investigation sources
// Generated: ${new Date().toISOString()}
// Total: ${documents.length} documents from ${folders.length} investigations

export interface DocumentEntry {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'image' | 'archive' | 'text';
  classification: 'public' | 'restricted' | 'sensitive';
  date: string;
  size: string;
  category: string;
  investigation: string;
  investigationSlug: string;
  downloadCount: number;
  previewAvailable: boolean;
  url: string;
}

export const documents: DocumentEntry[] = ${JSON.stringify(documents, null, 2)};
`;

const outPath = path.join(__dirname, '..', 'src', 'data', 'documents.ts');
fs.writeFileSync(outPath, output);
console.log(`\nWrote ${outPath}`);
