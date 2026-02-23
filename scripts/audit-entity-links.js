const fs = require('fs');
const path = require('path');

// Extract slugs from entity detail pages
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const slugs = new Set();
  const regex = /^\s*'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/gm;
  let m;
  while ((m = regex.exec(content)) !== null) {
    slugs.add(m[1]);
  }
  return slugs;
}

const individualsFile = path.join('src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
const agenciesFile = path.join('src', 'app', 'entities', 'agencies', '[slug]', 'page.tsx');
const corporationsFile = path.join('src', 'app', 'entities', 'corporations', '[slug]', 'page.tsx');

const individualSlugs = extractSlugs(individualsFile);
const agencySlugs = extractSlugs(agenciesFile);
const corporationSlugs = extractSlugs(corporationsFile);

// Scan all investigation pages
const investigationsDir = path.join('src', 'app', 'investigations');
const invFolders = fs.readdirSync(investigationsDir).filter(f => {
  const fp = path.join(investigationsDir, f, 'page.tsx');
  return fs.existsSync(fp) && f !== '[slug]';
});

const missingIndividuals = {};
const missingAgencies = {};
const missingCorporations = {};

for (const inv of invFolders) {
  const fp = path.join(investigationsDir, inv, 'page.tsx');
  const content = fs.readFileSync(fp, 'utf-8');

  let m;
  const r1 = /href:\s*'\/entities\/individuals\/([a-z0-9-]+)'/g;
  while ((m = r1.exec(content)) !== null) {
    const slug = m[1];
    if (!individualSlugs.has(slug)) {
      if (!missingIndividuals[slug]) missingIndividuals[slug] = new Set();
      missingIndividuals[slug].add(inv);
    }
  }

  const r2 = /href:\s*'\/entities\/agencies\/([a-z0-9-]+)'/g;
  while ((m = r2.exec(content)) !== null) {
    const slug = m[1];
    if (!agencySlugs.has(slug)) {
      if (!missingAgencies[slug]) missingAgencies[slug] = new Set();
      missingAgencies[slug].add(inv);
    }
  }

  const r3 = /href:\s*'\/entities\/corporations\/([a-z0-9-]+)'/g;
  while ((m = r3.exec(content)) !== null) {
    const slug = m[1];
    if (!corporationSlugs.has(slug)) {
      if (!missingCorporations[slug]) missingCorporations[slug] = new Set();
      missingCorporations[slug].add(inv);
    }
  }
}

// Build report
const lines = [];
lines.push('# BROKEN ENTITY LINKS AUDIT');
lines.push(`Date: ${new Date().toISOString()}`);
lines.push(`Investigations scanned: ${invFolders.length}`);
lines.push(`Existing individual slugs: ${individualSlugs.size}`);
lines.push(`Existing agency slugs: ${agencySlugs.size}`);
lines.push(`Existing corporation slugs: ${corporationSlugs.size}`);
lines.push('');

const miCount = Object.keys(missingIndividuals).length;
const maCount = Object.keys(missingAgencies).length;
const mcCount = Object.keys(missingCorporations).length;

lines.push(`## TOTALS: ${miCount} missing individuals, ${maCount} missing agencies, ${mcCount} missing corporations`);
lines.push('');

lines.push(`## MISSING INDIVIDUALS (${miCount})`);
Object.keys(missingIndividuals).sort().forEach(slug => {
  lines.push(`- ${slug} (referenced from: ${[...missingIndividuals[slug]].sort().join(', ')})`);
});
lines.push('');

lines.push(`## MISSING AGENCIES (${maCount})`);
Object.keys(missingAgencies).sort().forEach(slug => {
  lines.push(`- ${slug} (referenced from: ${[...missingAgencies[slug]].sort().join(', ')})`);
});
lines.push('');

lines.push(`## MISSING CORPORATIONS (${mcCount})`);
Object.keys(missingCorporations).sort().forEach(slug => {
  lines.push(`- ${slug} (referenced from: ${[...missingCorporations[slug]].sort().join(', ')})`);
});

fs.writeFileSync('BROKEN_LINKS_AUDIT.md', lines.join('\n'));
console.log('Report written to BROKEN_LINKS_AUDIT.md');
console.log(`${miCount} missing individuals, ${maCount} missing agencies, ${mcCount} missing corporations`);
