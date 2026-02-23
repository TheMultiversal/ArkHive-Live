const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'app', 'entities');

// ─── INDIVIDUALS ───────────────────────────────────────────────
function syncIndividuals() {
  console.log('\n=== SYNCING INDIVIDUALS ===');
  const detailFile = fs.readFileSync(path.join(BASE, 'individuals', '[slug]', 'page.tsx'), 'utf8');
  const indexFile = fs.readFileSync(path.join(BASE, 'individuals', 'page.tsx'), 'utf8');

  // Extract all slugs from detail page
  const detailSlugs = [];
  const detailRegex = /^\s+'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = detailRegex.exec(detailFile)) !== null) {
    detailSlugs.push(m[1]);
  }

  // Extract all slugs from index page
  const indexSlugs = new Set();
  const indexRegex = /slug:\s*["']([^"']+)["']/g;
  while ((m = indexRegex.exec(indexFile)) !== null) {
    indexSlugs.add(m[1]);
  }

  const missing = detailSlugs.filter(s => !indexSlugs.has(s));
  console.log(`  Detail profiles: ${detailSlugs.length}`);
  console.log(`  Index entries: ${indexSlugs.size}`);
  console.log(`  Missing from index: ${missing.length}`);

  if (missing.length === 0) {
    console.log('  All synced!');
    return;
  }

  // For each missing slug, extract data from detail page
  const entries = [];
  for (const slug of missing) {
    const entryRegex = new RegExp(`'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+':\\s*\\{|\\n\\};)`, 'm');
    const match = detailFile.match(entryRegex);
    if (!match) {
      console.log(`  WARNING: Could not extract data for ${slug}`);
      continue;
    }
    const block = match[0];

    const nameMatch = block.match(/name:\s*['"](.+?)['"]/);
    const titleMatch = block.match(/title:\s*['"](.+?)['"]/);
    const roleMatch = block.match(/role:\s*['"](.+?)['"]/);
    const riskMatch = block.match(/riskLevel:\s*['"](.+?)['"]/);
    const descMatch = block.match(/description:\s*['"](.+?)['"]/);

    const name = nameMatch ? nameMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = titleMatch ? titleMatch[1] : '';
    const role = roleMatch ? roleMatch[1] : (title || 'Key Figure');
    let riskLevel = riskMatch ? riskMatch[1] : 'high';
    const description = descMatch ? descMatch[1].replace(/\\'/g, "'") : 'Key figure connected to documented investigations.';

    // Map riskLevel: individual detail uses critical/high/medium/low
    // Entity index uses extreme/high/moderate/low
    if (riskLevel === 'critical') riskLevel = 'extreme';
    if (riskLevel === 'medium') riskLevel = 'moderate';

    // Count related investigations
    let invCount = 1;
    const invIdx = block.indexOf('relatedInvestigations:');
    if (invIdx !== -1) {
      const invSection = block.substring(invIdx);
      const slugMatches = invSection.match(/slug:/g);
      if (slugMatches) invCount = slugMatches.length;
    }

    entries.push(`  {
    id: "${slug}-1",
    slug: "${slug}",
    name: "${name.replace(/"/g, '\\"')}",
    type: "individual",
    description: "${description.replace(/"/g, '\\"').substring(0, 250)}",
    role: "${(title || role).replace(/"/g, '\\"')}",
    investigationCount: ${invCount},
    riskLevel: "${riskLevel}",
  },`);
  }

  // Insert before the closing ]; of the individuals array
  const insertPoint = indexFile.lastIndexOf('];');
  if (insertPoint === -1) {
    console.log('  ERROR: Could not find insertion point');
    return;
  }

  const newContent = indexFile.slice(0, insertPoint) + entries.join('\n') + '\n' + indexFile.slice(insertPoint);
  fs.writeFileSync(path.join(BASE, 'individuals', 'page.tsx'), newContent, 'utf8');
  console.log(`  Added ${entries.length} entries to index`);
}

// ─── AGENCIES ──────────────────────────────────────────────────
function syncAgencies() {
  console.log('\n=== SYNCING AGENCIES ===');
  const detailFile = fs.readFileSync(path.join(BASE, 'agencies', '[slug]', 'page.tsx'), 'utf8');
  const indexFile = fs.readFileSync(path.join(BASE, 'agencies', 'page.tsx'), 'utf8');

  const detailSlugs = [];
  const detailRegex = /^\s+'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = detailRegex.exec(detailFile)) !== null) {
    detailSlugs.push(m[1]);
  }

  const indexSlugs = new Set();
  const indexRegex = /slug:\s*["']([^"']+)["']/g;
  while ((m = indexRegex.exec(indexFile)) !== null) {
    indexSlugs.add(m[1]);
  }

  const missing = detailSlugs.filter(s => !indexSlugs.has(s));
  console.log(`  Detail profiles: ${detailSlugs.length}`);
  console.log(`  Index entries: ${indexSlugs.size}`);
  console.log(`  Missing from index: ${missing.length}`);

  if (missing.length === 0) {
    console.log('  All synced!');
    return;
  }

  const entries = [];
  for (const slug of missing) {
    const entryRegex = new RegExp(`'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+':\\s*\\{|\\n\\};)`, 'm');
    const match = detailFile.match(entryRegex);
    if (!match) {
      console.log(`  WARNING: Could not extract data for ${slug}`);
      continue;
    }
    const block = match[0];

    const nameMatch = block.match(/name:\s*['"](.+?)['"]/);
    const descMatch = block.match(/description:\s*['"](.+?)['"]/);
    const typeMatch = block.match(/type:\s*['"](.+?)['"]/);
    const riskMatch = block.match(/riskLevel:\s*['"](.+?)['"]/);

    const name = nameMatch ? nameMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const description = descMatch ? descMatch[1].substring(0, 200).replace(/"/g, '\\"') : 'Government agency connected to documented investigations.';
    const role = typeMatch ? typeMatch[1] : 'Government Agency';
    let riskLevel = riskMatch ? riskMatch[1] : 'high';

    let invCount = 1;
    const invIdx = block.indexOf('relatedInvestigations:');
    if (invIdx !== -1) {
      const invSection = block.substring(invIdx);
      const slugMatches = invSection.match(/slug:/g);
      if (slugMatches) invCount = slugMatches.length;
    }

    entries.push(`  {
    id: "${slug}-1",
    slug: "${slug}",
    name: "${name.replace(/"/g, '\\"')}",
    type: "agency",
    description: "${description}",
    role: "${role.replace(/"/g, '\\"')}",
    investigationCount: ${invCount},
    riskLevel: "${riskLevel}",
  },`);
  }

  const insertPoint = indexFile.lastIndexOf('];');
  const newContent = indexFile.slice(0, insertPoint) + entries.join('\n') + '\n' + indexFile.slice(insertPoint);
  fs.writeFileSync(path.join(BASE, 'agencies', 'page.tsx'), newContent, 'utf8');
  console.log(`  Added ${entries.length} entries to index`);
}

// ─── CORPORATIONS ──────────────────────────────────────────────
function syncCorporations() {
  console.log('\n=== SYNCING CORPORATIONS ===');
  const detailFile = fs.readFileSync(path.join(BASE, 'corporations', '[slug]', 'page.tsx'), 'utf8');
  const indexFile = fs.readFileSync(path.join(BASE, 'corporations', 'page.tsx'), 'utf8');

  const detailSlugs = [];
  const detailRegex = /^\s+'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = detailRegex.exec(detailFile)) !== null) {
    detailSlugs.push(m[1]);
  }

  const indexSlugs = new Set();
  const indexRegex = /slug:\s*["']([^"']+)["']/g;
  while ((m = indexRegex.exec(indexFile)) !== null) {
    indexSlugs.add(m[1]);
  }

  const missing = detailSlugs.filter(s => !indexSlugs.has(s));
  console.log(`  Detail profiles: ${detailSlugs.length}`);
  console.log(`  Index entries: ${indexSlugs.size}`);
  console.log(`  Missing from index: ${missing.length}`);

  if (missing.length === 0) {
    console.log('  All synced!');
    return;
  }

  const entries = [];
  for (const slug of missing) {
    const entryRegex = new RegExp(`'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+':\\s*\\{|\\n\\};)`, 'm');
    const match = detailFile.match(entryRegex);
    if (!match) {
      console.log(`  WARNING: Could not extract data for ${slug}`);
      continue;
    }
    const block = match[0];

    const nameMatch = block.match(/name:\s*['"](.+?)['"]/);
    const descMatch = block.match(/description:\s*['"](.+?)['"]/);
    const industryMatch = block.match(/industry:\s*['"](.+?)['"]/);
    const riskMatch = block.match(/riskLevel:\s*['"](.+?)['"]/);

    const name = nameMatch ? nameMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const description = descMatch ? descMatch[1].substring(0, 200).replace(/"/g, '\\"') : 'Corporation connected to documented investigations.';
    const role = industryMatch ? industryMatch[1] : 'Corporation';
    let riskLevel = riskMatch ? riskMatch[1] : 'high';

    let invCount = 1;
    const invIdx = block.indexOf('relatedInvestigations:');
    if (invIdx !== -1) {
      const invSection = block.substring(invIdx);
      const slugMatches = invSection.match(/slug:/g);
      if (slugMatches) invCount = slugMatches.length;
    }

    entries.push(`  {
    id: "${slug}-1",
    slug: "${slug}",
    name: "${name.replace(/"/g, '\\"')}",
    type: "corporation",
    description: "${description}",
    role: "${role.replace(/"/g, '\\"')}",
    investigationCount: ${invCount},
    riskLevel: "${riskLevel}",
  },`);
  }

  const insertPoint = indexFile.lastIndexOf('];');
  const newContent = indexFile.slice(0, insertPoint) + entries.join('\n') + '\n' + indexFile.slice(insertPoint);
  fs.writeFileSync(path.join(BASE, 'corporations', 'page.tsx'), newContent, 'utf8');
  console.log(`  Added ${entries.length} entries to index`);
}

// ─── ORGANIZATIONS ─────────────────────────────────────────────
function syncOrganizations() {
  console.log('\n=== SYNCING ORGANIZATIONS ===');
  const detailFile = fs.readFileSync(path.join(BASE, 'organizations', '[slug]', 'page.tsx'), 'utf8');
  const indexFile = fs.readFileSync(path.join(BASE, 'organizations', 'page.tsx'), 'utf8');

  const detailSlugs = [];
  const detailRegex = /^\s+'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = detailRegex.exec(detailFile)) !== null) {
    detailSlugs.push(m[1]);
  }

  const indexSlugs = new Set();
  const indexRegex = /slug:\s*['"]([^'"]+)['"]/g;
  while ((m = indexRegex.exec(indexFile)) !== null) {
    indexSlugs.add(m[1]);
  }

  const missing = detailSlugs.filter(s => !indexSlugs.has(s));
  console.log(`  Detail profiles: ${detailSlugs.length}`);
  console.log(`  Index entries: ${indexSlugs.size}`);
  console.log(`  Missing from index: ${missing.length}`);

  if (missing.length === 0) {
    console.log('  All synced!');
    return;
  }

  // Org index uses different format: { name, slug, type, description, riskLevel, members }
  const entries = [];
  for (const slug of missing) {
    const entryRegex = new RegExp(`'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+':\\s*\\{|\\n\\};)`, 'm');
    const match = detailFile.match(entryRegex);
    if (!match) {
      console.log(`  WARNING: Could not extract data for ${slug}`);
      continue;
    }
    const block = match[0];

    const nameMatch = block.match(/name:\s*['"](.+?)['"]/);
    const descMatch = block.match(/description:\s*['"](.+?)['"]/);
    const typeMatch = block.match(/type:\s*['"](.+?)['"]/);
    const riskMatch = block.match(/riskLevel:\s*['"](.+?)['"]/);
    const membersMatch = block.match(/members:\s*['"](.+?)['"]/);

    const name = nameMatch ? nameMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const description = descMatch ? descMatch[1].substring(0, 200).replace(/'/g, "\\'") : 'Organization connected to documented investigations.';
    const type = typeMatch ? typeMatch[1] : 'Organization';
    const riskLevel = riskMatch ? riskMatch[1] : 'high';
    const members = membersMatch ? membersMatch[1] : 'Unknown';

    entries.push(`  {
    name: '${name.replace(/'/g, "\\'")}',
    slug: '${slug}',
    type: '${type.replace(/'/g, "\\'")}',
    description: '${description}',
    riskLevel: '${riskLevel}' as const,
    members: '${members}',
  },`);
  }

  // Find the last ]; in the organizations array
  const insertPoint = indexFile.lastIndexOf('];');
  const newContent = indexFile.slice(0, insertPoint) + entries.join('\n') + '\n' + indexFile.slice(insertPoint);
  fs.writeFileSync(path.join(BASE, 'organizations', 'page.tsx'), newContent, 'utf8');
  console.log(`  Added ${entries.length} entries to index`);
}

// ─── RUN ALL ───────────────────────────────────────────────────
syncIndividuals();
syncAgencies();
syncCorporations();
syncOrganizations();
console.log('\nDone!');
