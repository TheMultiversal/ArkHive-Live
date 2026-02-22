// Generate index page entries for all 815 missing individuals
// Reads their profile data from [slug]/page.tsx and creates Entity entries
const fs = require('fs');

const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const indexContent = fs.readFileSync('src/app/entities/individuals/page.tsx', 'utf8');

// Get existing slugs from index
const existingSlugs = new Set();
const existingRe = /slug:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = existingRe.exec(indexContent)) !== null) {
  existingSlugs.add(m[1]);
}

// Extract all profiles from [slug]/page.tsx
const slugRe = /^\s*'([\w-]+)':\s*\{/gm;
const slugs = [];
while ((m = slugRe.exec(content)) !== null) {
  slugs.push({ slug: m[1], startIdx: m.index });
}

// For each slug, extract profile data
const entries = [];
for (let i = 0; i < slugs.length; i++) {
  const { slug, startIdx } = slugs[i];
  if (existingSlugs.has(slug)) continue; // Skip already on index
  
  // Get the content for this profile (up to next profile or 5000 chars)
  const endIdx = i + 1 < slugs.length ? slugs[i + 1].startIdx : startIdx + 5000;
  const chunk = content.substring(startIdx, Math.min(endIdx, startIdx + 5000));
  
  const nameMatch = chunk.match(/name:\s*'([^']+)'/);
  const roleMatch = chunk.match(/role:\s*'([^']+)'/);
  const riskMatch = chunk.match(/riskLevel:\s*'([^']+)'/);
  const descMatch = chunk.match(/description:\s*'((?:[^'\\]|\\.)*)'/);
  
  // Count relatedInvestigations
  const invMatches = chunk.match(/relatedInvestigations:\s*\[/);
  let invCount = 0;
  if (invMatches) {
    const invSection = chunk.substring(chunk.indexOf('relatedInvestigations:'));
    const titleMatches = invSection.match(/title:/g);
    invCount = titleMatches ? titleMatches.length : 0;
  }
  
  const name = nameMatch ? nameMatch[1] : slug;
  const role = roleMatch ? roleMatch[1] : 'Unknown';
  let risk = riskMatch ? riskMatch[1] : 'moderate';
  
  // Map riskLevel values to Entity riskLevel
  // Entity uses: extreme | high | moderate | low
  // Profile uses: critical | high | medium | low
  if (risk === 'critical') risk = 'extreme';
  if (risk === 'medium') risk = 'moderate';
  
  // Truncate description to ~200 chars for index
  let desc = descMatch ? descMatch[1] : `Profile for ${name}`;
  desc = desc.replace(/\\'/g, "'");
  if (desc.length > 250) desc = desc.substring(0, 247) + '...';
  
  entries.push({
    slug,
    name,
    role,
    riskLevel: risk,
    description: desc,
    investigationCount: invCount,
  });
}

console.log(`Generated ${entries.length} new index entries`);

// Generate TypeScript code for these entries
let code = '';
for (const e of entries) {
  // Escape single quotes in strings
  const desc = e.description.replace(/'/g, "\\'");
  const role = e.role.replace(/'/g, "\\'");
  const name = e.name.replace(/'/g, "\\'");
  
  code += `  {\n`;
  code += `    id: '${e.slug}-1',\n`;
  code += `    slug: '${e.slug}',\n`;
  code += `    name: '${name}',\n`;
  code += `    type: 'individual' as const,\n`;
  code += `    description: '${desc}',\n`;
  code += `    role: '${role}',\n`;
  code += `    investigationCount: ${e.investigationCount},\n`;
  code += `    riskLevel: '${e.riskLevel}' as const,\n`;
  code += `  },\n`;
}

fs.writeFileSync('scripts/generated-index-entries.ts', code);
console.log('Saved generated code to scripts/generated-index-entries.ts');

// Show risk distribution
const byRisk = {};
for (const e of entries) {
  byRisk[e.riskLevel] = (byRisk[e.riskLevel] || 0) + 1;
}
console.log('Risk distribution:', JSON.stringify(byRisk));
