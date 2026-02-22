const fs = require('fs');

// Read the detail page to get all profile data
const det = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Read the current index to get existing slugs
const idx = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// Extract existing index slugs
const existingSlugs = new Set([...idx.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]));
console.log('Existing index entries:', existingSlugs.size);

// Extract all detail slugs with their data
const detailBlocks = [...det.matchAll(/^\s+'([a-z][a-z0-9-]+)':\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/gm)];
console.log('Total detail profiles:', detailBlocks.length);

// Find missing entries
const missing = [];
for (const block of detailBlocks) {
  const slug = block[1];
  if (existingSlugs.has(slug)) continue;
  
  const blockText = block[2];
  
  // Extract name
  const nameMatch = blockText.match(/name:\s*'([^']*(?:\\'[^']*)*)'/);
  if (!nameMatch) continue;
  const name = nameMatch[1].replace(/\\'/g, "'");
  
  // Extract role
  const roleMatch = blockText.match(/role:\s*'([^']*(?:\\'[^']*)*)'/);
  const role = roleMatch ? roleMatch[1].replace(/\\'/g, "'") : 'Subject of Investigation';
  
  // Extract riskLevel
  const riskMatch = blockText.match(/riskLevel:\s*'([^']+)'/);
  const riskLevel = riskMatch ? riskMatch[1] : 'high';
  
  // Extract description (first 200 chars)
  const descMatch = blockText.match(/description:\s*'([^']*(?:\\'[^']*)*)'/);
  let description = descMatch ? descMatch[1].replace(/\\'/g, "'") : `Subject of multiple ArkHive investigations.`;
  if (description.length > 200) description = description.substring(0, 197) + '...';
  
  missing.push({ slug, name, role, description, riskLevel });
}

console.log('Missing from index:', missing.length);

// Generate the entries
const entries = missing.map((m, i) => {
  // Escape double quotes in strings for the index file (which uses double quotes)
  const name = m.name.replace(/"/g, '\\"');
  const role = m.role.replace(/"/g, '\\"');
  const desc = m.description.replace(/"/g, '\\"');
  const risk = m.riskLevel === 'critical' ? 'extreme' : m.riskLevel;
  
  return `  {
    id: "${900 + i}",
    slug: "${m.slug}",
    name: "${name}",
    type: "individual",
    description: "${desc}",
    role: "${role}",
    investigationCount: 1,
    riskLevel: "${risk}",
  },`;
}).join('\n');

// Find insertion point - before the closing ];
const insertionMarker = '];\n\n';
const markerIdx = idx.indexOf(insertionMarker, idx.indexOf('const individuals'));
if (markerIdx === -1) {
  // Try alternate pattern
  const altMarker = '];\n\nconst ';
  const altIdx = idx.indexOf(altMarker, idx.indexOf('const individuals'));
  if (altIdx === -1) {
    console.log('ERROR: Could not find insertion point');
    // Let us find what comes after the array
    const arrayEnd = idx.lastIndexOf('];');
    console.log('Last ]; at position:', arrayEnd);
    console.log('Context:', idx.substring(Math.max(0, arrayEnd - 50), arrayEnd + 50));
    process.exit(1);
  }
  const newIdx = idx.substring(0, altIdx) + '\n' + entries + '\n' + idx.substring(altIdx);
  fs.writeFileSync('src/app/entities/individuals/page.tsx', newIdx);
  console.log('Inserted', missing.length, 'entries (alt marker)');
} else {
  const newIdx = idx.substring(0, markerIdx) + '\n' + entries + '\n' + idx.substring(markerIdx);
  fs.writeFileSync('src/app/entities/individuals/page.tsx', newIdx);
  console.log('Inserted', missing.length, 'entries');
}
