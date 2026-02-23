// Script to extract all missing individual data from investigation pages
// and generate profile entries for the individuals detail page

const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const individualsDetailPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// Step 1: Get all existing individual slugs
console.log('Reading existing individual profiles...');
const detailContent = fs.readFileSync(individualsDetailPath, 'utf8');
const existingSlugs = new Set();
const slugKeyRegex = /^\s*'([a-z0-9-]+)':\s*\{/gm;
let match;
while ((match = slugKeyRegex.exec(detailContent)) !== null) {
  existingSlugs.add(match[1]);
}
console.log(`Found ${existingSlugs.size} existing profiles`);

// Step 2: Scan all investigation pages for keyFigures with hrefs to /entities/individuals/
const missingPersons = new Map(); // slug -> {name, role, investigations}

const dirs = fs.readdirSync(investigationsDir).filter(d => {
  const fullPath = path.join(investigationsDir, d);
  return fs.statSync(fullPath).isDirectory() && d !== '[slug]';
});

console.log(`Scanning ${dirs.length} investigation pages...`);

for (const dir of dirs) {
  const pagePath = path.join(investigationsDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Extract keyFigures entries with href to /entities/individuals/
  // Match name, role, href pattern with flexible whitespace and quote types
  const figureRegex = /name:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]\s*,\s*role:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]\s*,\s*href:\s*['"]\/entities\/individuals\/([a-z0-9-]+)['"]/g;
  
  let figMatch;
  while ((figMatch = figureRegex.exec(content)) !== null) {
    const [, rawName, rawRole, slug] = figMatch;
    const name = rawName.replace(/\\'/g, "'").replace(/\\"/g, '"');
    const role = rawRole.replace(/\\'/g, "'").replace(/\\"/g, '"');
    
    if (!existingSlugs.has(slug)) {
      if (!missingPersons.has(slug)) {
        missingPersons.set(slug, { name, role, investigations: new Set() });
      }
      missingPersons.get(slug).investigations.add(dir);
    }
  }
}

console.log(`Found ${missingPersons.size} missing individuals`);

// Step 3: Generate profile entries
const sorted = [...missingPersons.entries()].sort((a, b) => a[0].localeCompare(b[0]));

let output = '';
for (const [slug, data] of sorted) {
  const escapeName = data.name.replace(/'/g, "\\'");
  const escapeRole = data.role.replace(/'/g, "\\'");
  const invSlugs = [...data.investigations];
  const invLinks = invSlugs.map(s => {
    const title = s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `      { title: '${title.replace(/'/g, "\\'")}', slug: '${s}', severity: 'high' }`;
  });
  
  const escDesc = `${data.name} is documented in ArkHive investigations for their role as ${data.role}.`.replace(/'/g, "\\'");
  
  output += `  '${slug}': {\n`;
  output += `    name: '${escapeName}',\n`;
  output += `    title: '${escapeRole}',\n`;
  output += `    role: '${escapeRole}',\n`;
  output += `    riskLevel: 'high',\n`;
  output += `    description: '${escDesc}',\n`;
  output += `    education: [],\n`;
  output += `    affiliations: [],\n`;
  output += `    controversies: [\n`;
  output += `      'Connected to ${invSlugs.length} documented investigation${invSlugs.length > 1 ? 's' : ''}',\n`;
  output += `    ],\n`;
  output += `    relatedInvestigations: [\n`;
  output += `${invLinks.join(',\n')},\n`;
  output += `    ],\n`;
  output += `    timeline: [],\n`;
  output += `  },\n`;
}

// Step 4: Insert into the detail page before the closing '};'
const closingPattern = /\n\};\s*$/;
const closeMatch = detailContent.match(closingPattern);

if (!closeMatch) {
  // Try finding the last }; 
  const lastClose = detailContent.lastIndexOf('};');
  if (lastClose === -1) {
    console.error('ERROR: Could not find closing }; in detail page');
    process.exit(1);
  }
  const newContent = detailContent.slice(0, lastClose) + output + detailContent.slice(lastClose);
  fs.writeFileSync(individualsDetailPath, newContent, 'utf8');
} else {
  const insertPos = detailContent.lastIndexOf('};');
  const newContent = detailContent.slice(0, insertPos) + output + detailContent.slice(insertPos);
  fs.writeFileSync(individualsDetailPath, newContent, 'utf8');
}

// Count total profiles now
const newContent = fs.readFileSync(individualsDetailPath, 'utf8');
const totalProfiles = (newContent.match(/^\s*'[a-z0-9-]+':\s*\{/gm) || []).length;
console.log(`\nTotal profiles now: ${totalProfiles}`);
console.log('Done!');
