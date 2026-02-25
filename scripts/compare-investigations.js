const fs = require('fs');
const path = require('path');

// Read both files
const listingFile = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', 'investigations', 'page.tsx'),
  'utf-8'
);
const detailFile = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', 'investigations', '[slug]', 'page.tsx'),
  'utf-8'
);

// Extract slugs from the listing page (allInvestigations array)
// Match: slug: "some-slug",
const listingSlugs = [];
const listingInvestigations = {};

// Parse the allInvestigations array - extract each investigation object
const slugRegex = /slug:\s*"([^"]+)"/g;
const listingMatch = listingFile.match(/const allInvestigations[\s\S]*?^];/m);
if (!listingMatch) {
  console.error('Could not find allInvestigations array');
  process.exit(1);
}
const listingSection = listingMatch[0];

// Extract all investigation objects from the listing
const objRegex = /\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*slug:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)",\s*\n\s*summary:\s*"([^"]*(?:"[^{]*)?)",\s*\n\s*category:\s*"([^"]+)",\s*\n\s*severity:\s*"([^"]+)"/g;

// Simpler approach: split by objects and extract fields
let match;
const slugRe = /slug:\s*"([^"]+)"/g;
while ((match = slugRe.exec(listingSection)) !== null) {
  listingSlugs.push(match[1]);
}

// Now extract full metadata for each slug
for (const slug of listingSlugs) {
  // Find the block containing this slug
  const slugIdx = listingSection.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) continue;
  
  // Go backwards to find the start of the object (look for 'id:')
  const beforeSlug = listingSection.substring(Math.max(0, slugIdx - 200), slugIdx);
  const idMatch = beforeSlug.match(/id:\s*"([^"]+)"/);
  
  // Go forward to find the rest of the fields
  const afterSlug = listingSection.substring(slugIdx, slugIdx + 2000);
  
  const titleMatch = afterSlug.match(/title:\s*"([^"]+)"/);
  const summaryMatch = afterSlug.match(/summary:\s*"([^"]*?)"/);
  const categoryMatch = afterSlug.match(/category:\s*"([^"]+)"/);
  const severityMatch = afterSlug.match(/severity:\s*"([^"]+)"/);
  const dateMatch = afterSlug.match(/date:\s*"([^"]+)"/);
  const tagsMatch = afterSlug.match(/tags:\s*\[([^\]]+)\]/);
  
  let tags = [];
  if (tagsMatch) {
    tags = tagsMatch[1].match(/"([^"]+)"/g)?.map(t => t.replace(/"/g, '')) || [];
  }
  
  listingInvestigations[slug] = {
    id: idMatch ? idMatch[1] : 'unknown',
    slug,
    title: titleMatch ? titleMatch[1] : 'unknown',
    summary: summaryMatch ? summaryMatch[1].substring(0, 200) + '...' : 'unknown',
    category: categoryMatch ? categoryMatch[1] : 'unknown',
    severity: severityMatch ? severityMatch[1] : 'unknown',
    date: dateMatch ? dateMatch[1] : 'unknown',
    tags
  };
}

// Extract keys from investigationDatabase in the detail page
const detailSlugs = [];
const dbKeyRegex = /^\s{2}'([a-z0-9-]+)':\s*\{/gm;
while ((match = dbKeyRegex.exec(detailFile)) !== null) {
  detailSlugs.push(match[1]);
}

// Also check for dedicated page directories (like trump-criminal-compendium)
const investigationsDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const dirs = fs.readdirSync(investigationsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== '[slug]')
  .map(d => d.name);

const allDetailSlugs = new Set([...detailSlugs, ...dirs]);

// Compare
const listingSet = new Set(listingSlugs);
const missingFromDetail = listingSlugs.filter(s => !allDetailSlugs.has(s));
const inDetailNotListing = [...allDetailSlugs].filter(s => !listingSet.has(s));

const result = {
  summary: {
    totalListingSlugs: listingSlugs.length,
    totalDetailSlugs: allDetailSlugs.size,
    detailDatabaseKeys: detailSlugs.length,
    dedicatedPageDirs: dirs.length,
    missingFromDetailCount: missingFromDetail.length,
    inDetailNotListingCount: inDetailNotListing.length,
  },
  missingFromDetail: missingFromDetail.map(slug => listingInvestigations[slug]),
  inDetailButNotListing: inDetailNotListing,
  dedicatedPageDirs: dirs,
};

console.log(JSON.stringify(result, null, 2));
