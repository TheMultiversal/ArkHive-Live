const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', 'page.tsx');
const detailPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// Read both files
const indexContent = fs.readFileSync(indexPath, 'utf8');
const detailContent = fs.readFileSync(detailPath, 'utf8');

// 1. Extract all slugs from the index page
const indexSlugRegex = /slug:\s*["']([^"']+)["']/g;
const indexSlugs = new Set();
let m;
while ((m = indexSlugRegex.exec(indexContent)) !== null) {
  indexSlugs.add(m[1]);
}
console.log(`Index page has ${indexSlugs.size} slugs`);

// 2. Extract all slugs from the detail page (keys of individualData object)
//    Pattern: '  'some-slug': {'  at the start of a line
const detailSlugRegex = /^\s+'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/gm;
const detailSlugs = [];
while ((m = detailSlugRegex.exec(detailContent)) !== null) {
  detailSlugs.push(m[1]);
}
console.log(`Detail page has ${detailSlugs.length} slugs`);

// 3. Find missing slugs
const missingSlugs = detailSlugs.filter(s => !indexSlugs.has(s));
console.log(`Missing from index: ${missingSlugs.length}`);

if (missingSlugs.length === 0) {
  console.log('Nothing to do!');
  process.exit(0);
}

// 4. For each missing slug, extract name, title, role, riskLevel, description from detail page
//    We'll parse each profile block
function extractProfile(slug) {
  // Find the profile block starting with 'slug': {
  const escapedSlug = slug.replace(/[-]/g, '\\-');
  const blockStart = detailContent.indexOf(`'${slug}': {`);
  if (blockStart === -1) return null;

  // We need to find the balanced closing brace. Track brace depth.
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let i = detailContent.indexOf('{', blockStart);
  const start = i;

  for (; i < detailContent.length; i++) {
    const ch = detailContent[i];
    if (inString) {
      if (ch === '\\') { i++; continue; }
      if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) break;
    }
  }

  const block = detailContent.substring(start, i + 1);

  // Extract fields using regex on the block
  const nameMatch = block.match(/name:\s*['"](.+?)['"]\s*,/);
  const titleMatch = block.match(/title:\s*['"](.+?)['"]\s*,/);
  const roleMatch = block.match(/role:\s*['"](.+?)['"]\s*,/);
  const riskMatch = block.match(/riskLevel:\s*['"](.+?)['"]\s*,/);
  const descMatch = block.match(/description:\s*['"]([\s\S]*?)['"]\s*,\s*\n/);

  if (!nameMatch) return null;

  return {
    name: nameMatch[1],
    title: titleMatch ? titleMatch[1] : '',
    role: roleMatch ? roleMatch[1] : '',
    riskLevel: riskMatch ? riskMatch[1] : 'low',
    description: descMatch ? descMatch[1] : '',
  };
}

// Map detail riskLevel to index riskLevel
function mapRiskLevel(detailRisk) {
  switch (detailRisk) {
    case 'critical': return 'extreme';
    case 'high': return 'high';
    case 'medium': return 'moderate';
    case 'low': return 'low';
    default: return 'low';
  }
}

// Find the highest existing id number
const idRegex = /id:\s*["'](\d+)["']/g;
let maxId = 0;
while ((m = idRegex.exec(indexContent)) !== null) {
  const num = parseInt(m[1], 10);
  if (num > maxId) maxId = num;
}
console.log(`Highest existing id number: ${maxId}`);

// Build entries
const newEntries = [];
let nextId = maxId + 1;
let skipped = 0;

for (const slug of missingSlugs) {
  const profile = extractProfile(slug);
  if (!profile) {
    console.warn(`  WARN: Could not extract profile for slug: ${slug}`);
    skipped++;
    continue;
  }

  const mappedRisk = mapRiskLevel(profile.riskLevel);
  // Use title as role if role is missing; truncate description for index
  const role = profile.title || profile.role || 'Individual';
  let desc = profile.description || '';
  // Truncate description to ~200 chars for the listing
  if (desc.length > 200) {
    desc = desc.substring(0, 197) + '...';
  }
  // Escape any quotes in strings
  const escapedName = profile.name.replace(/"/g, '\\"');
  const escapedRole = role.replace(/"/g, '\\"');
  const escapedDesc = desc.replace(/"/g, '\\"');

  const entry = `  {
    id: "${nextId}",
    slug: "${slug}",
    name: "${escapedName}",
    type: "individual",
    description: "${escapedDesc}",
    role: "${escapedRole}",
    investigationCount: 1,
    riskLevel: "${mappedRisk}",
  }`;

  newEntries.push(entry);
  nextId++;
}

console.log(`Generated ${newEntries.length} new entries (skipped ${skipped})`);

// 5. Insert into the index page right before the closing '];'
//    Find the position of '];\n' that ends the individuals array
const arrayEndMarker = '\n];\n';
const arrayEndPos = indexContent.indexOf(arrayEndMarker);
if (arrayEndPos === -1) {
  console.error('ERROR: Could not find array end marker "];" in index page');
  process.exit(1);
}

// We insert a comma after the last existing entry, then our new entries
const before = indexContent.substring(0, arrayEndPos);
const after = indexContent.substring(arrayEndPos);

// Check if last entry already ends with comma (looking at trimmed content before arrayEnd)
const trimmedBefore = before.trimEnd();
const needsComma = !trimmedBefore.endsWith(',');

const insertBlock = (needsComma ? ',\n' : '\n') + newEntries.join(',\n');
const newContent = before + insertBlock + after;

fs.writeFileSync(indexPath, newContent, 'utf8');

// Verify
const verifyContent = fs.readFileSync(indexPath, 'utf8');
const verifySlugCount = (verifyContent.match(/slug:\s*["'][^"']+["']/g) || []).length;
const verifyLines = verifyContent.split('\n').length;

console.log(`\nDone!`);
console.log(`New slug count in index: ${verifySlugCount}`);
console.log(`New line count: ${verifyLines}`);
console.log(`Expected slug count: ${indexSlugs.size + newEntries.length}`);
