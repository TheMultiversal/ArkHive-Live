/**
 * Comprehensive link validator for ArkHive
 * Checks: investigation slugs, entity hrefs in affiliations, entity route coverage,
 * home page featured slugs, footer/header routes
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'data');
const APP = path.join(ROOT, 'src', 'app');

const issues = [];
const warnings = [];
const stats = { checked: 0, broken: 0, fixed: 0 };

function log(type, msg) {
  if (type === 'ERROR') { issues.push(msg); stats.broken++; }
  else if (type === 'WARN') { warnings.push(msg); }
  console.log(`[${type}] ${msg}`);
}

// ── 1. Load investigation database ──
function loadInvestigations() {
  const indexPath = path.join(DATA, 'investigations', 'index.ts');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Get all shard imports
  const shardFiles = fs.readdirSync(path.join(DATA, 'investigations'))
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  
  const allSlugs = new Set();
  const affiliationIssues = [];
  
  for (const sf of shardFiles) {
    const content = fs.readFileSync(path.join(DATA, 'investigations', sf), 'utf8');
    // Extract investigation slugs
    const slugMatches = content.matchAll(/'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g);
    for (const m of slugMatches) {
      allSlugs.add(m[1]);
    }
    
    // Extract affiliation hrefs
    const hrefMatches = content.matchAll(/href:\s*'([^']+)'/g);
    for (const m of hrefMatches) {
      const href = m[1];
      if (href.startsWith('/entities/')) {
        affiliationIssues.push({ file: sf, href });
      }
    }
  }
  
  return { slugs: allSlugs, affiliationHrefs: affiliationIssues };
}

// ── 2. Load entity databases ──
function loadEntitySlugs(type) {
  const indexPath = path.join(DATA, type, 'index.ts');
  if (!fs.existsSync(indexPath)) return new Set();
  
  const content = fs.readFileSync(indexPath, 'utf8');
  const slugs = new Set();
  const matches = content.matchAll(/'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g);
  for (const m of matches) {
    slugs.add(m[1]);
  }
  return slugs;
}

function loadIndividualSlugs() {
  const dir = path.join(DATA, 'individuals');
  const slugs = new Set();
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const matches = content.matchAll(/'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g);
    for (const m of matches) {
      slugs.add(m[1]);
    }
  }
  return slugs;
}

function loadOrganizationSlugs() {
  // Organizations are inline in the route file
  const routePath = path.join(APP, 'entities', 'organizations', '[slug]', 'page.tsx');
  if (!fs.existsSync(routePath)) return new Set();
  const content = fs.readFileSync(routePath, 'utf8');
  const slugs = new Set();
  const matches = content.matchAll(/'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g);
  for (const m of matches) {
    slugs.add(m[1]);
  }
  // Also check the data file if it exists
  const dataPath = path.join(DATA, 'organizations', 'index.ts');
  if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    const dataMatches = dataContent.matchAll(/'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g);
    for (const m of dataMatches) {
      slugs.add(m[1]);
    }
  }
  return slugs;
}

// ── 3. Load route generation slugs (hardcoded arrays) ──
function loadRouteSlugs(entityType) {
  const routePath = path.join(APP, 'entities', entityType, '[slug]', 'page.tsx');
  if (!fs.existsSync(routePath)) return new Set();
  const content = fs.readFileSync(routePath, 'utf8');
  const slugs = new Set();
  // Match strings in arrays
  const matches = content.matchAll(/'([a-z0-9][a-z0-9-]*)'/g);
  for (const m of matches) {
    slugs.add(m[1]);
  }
  return slugs;
}

// ── 4. Check home page featured slugs ──
function checkHomePage(investigationSlugs) {
  const homePath = path.join(APP, 'home', 'page.tsx');
  if (!fs.existsSync(homePath)) {
    log('WARN', 'Home page not found at src/app/home/page.tsx');
    return;
  }
  const content = fs.readFileSync(homePath, 'utf8');
  const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
  for (const m of slugMatches) {
    stats.checked++;
    if (!investigationSlugs.has(m[1])) {
      log('ERROR', `HOME PAGE: Featured investigation slug "${m[1]}" NOT FOUND in investigation database`);
    }
  }
}

// ── 5. Check all app directories exist for nav links ──
function checkNavRoutes() {
  const headerLinks = [
    '/', '/statutes', '/money-trail', '/convictions', '/evidence', '/network',
    '/themes', '/figures', '/geography', '/workspaces',
    '/entities/agencies', '/entities/corporations', '/entities/individuals',
    '/entities/organizations', '/timeline', '/about'
  ];
  
  const footerLinks = [
    '/investigations', '/timeline', '/archives', '/documents', '/sources',
    '/methodology', '/search', '/tags', '/about', '/faq', '/submit',
    '/contact', '/privacy', '/terms', '/recent', '/contributor', '/offline'
  ];
  
  const allLinks = [...new Set([...headerLinks, ...footerLinks])];
  
  for (const link of allLinks) {
    stats.checked++;
    // Convert route to filesystem path
    const routeDir = path.join(APP, ...link.split('/').filter(Boolean));
    const pageFile = path.join(routeDir, 'page.tsx');
    
    if (!fs.existsSync(routeDir) && !fs.existsSync(pageFile)) {
      // Check if it's the root
      if (link === '/') continue;
      log('ERROR', `NAV LINK: "${link}" has NO page directory at ${routeDir}`);
    } else if (!fs.existsSync(pageFile)) {
      log('WARN', `NAV LINK: "${link}" directory exists but no page.tsx found`);
    }
  }
}

// ── MAIN ──
console.log('=== ArkHive Link Validator ===\n');

// Load all data
console.log('Loading investigation database...');
const { slugs: investigationSlugs, affiliationHrefs } = loadInvestigations();
console.log(`  ${investigationSlugs.size} investigations found\n`);

console.log('Loading entity databases...');
const agencySlugs = loadEntitySlugs('agencies');
const corpSlugs = loadEntitySlugs('corporations');
const individualSlugs = loadIndividualSlugs();
const orgSlugs = loadOrganizationSlugs();
console.log(`  Agencies: ${agencySlugs.size}`);
console.log(`  Corporations: ${corpSlugs.size}`);
console.log(`  Individuals: ${individualSlugs.size}`);
console.log(`  Organizations: ${orgSlugs.size}\n`);

// Also load route slugs for agencies/corps (hardcoded arrays)
const agencyRouteSlugs = loadRouteSlugs('agencies');
const corpRouteSlugs = loadRouteSlugs('corporations');
console.log(`  Agency route slugs: ${agencyRouteSlugs.size}`);
console.log(`  Corporation route slugs: ${corpRouteSlugs.size}\n`);

// Build complete entity map
const entityMap = {
  agencies: new Set([...agencySlugs, ...agencyRouteSlugs]),
  corporations: new Set([...corpSlugs, ...corpRouteSlugs]),
  individuals: individualSlugs,
  organizations: orgSlugs,
};

// 1. Check home page featured slugs
console.log('--- Checking Home Page Featured Slugs ---');
checkHomePage(investigationSlugs);

// 2. Check navigation routes
console.log('\n--- Checking Navigation Routes ---');
checkNavRoutes();

// 3. Check affiliation hrefs
console.log('\n--- Checking Affiliation Hrefs (investigation → entity links) ---');
const hrefPattern = /^\/entities\/(agencies|corporations|individuals|organizations)\/([a-z0-9-]+)$/;
const missingEntitySlugs = new Map(); // Track unique missing slugs by type

for (const { file, href } of affiliationHrefs) {
  stats.checked++;
  const match = href.match(hrefPattern);
  if (!match) {
    log('ERROR', `AFFILIATION: Invalid href format "${href}" in ${file}`);
    continue;
  }
  const [, type, slug] = match;
  const entitySet = entityMap[type];
  if (!entitySet) {
    log('ERROR', `AFFILIATION: Unknown entity type "${type}" in href "${href}" (${file})`);
    continue;
  }
  if (!entitySet.has(slug)) {
    const key = `${type}/${slug}`;
    if (!missingEntitySlugs.has(key)) {
      missingEntitySlugs.set(key, []);
    }
    missingEntitySlugs.get(key).push(file);
  }
}

// Report missing entity slugs (deduplicated)
for (const [key, files] of missingEntitySlugs) {
  const [type, slug] = key.split('/');
  log('ERROR', `AFFILIATION: Entity "${slug}" (${type}) referenced in ${files.length} investigation file(s) but NOT found in ${type} data - files: ${files.join(', ')}`);
}

// 4. Check agency data vs route slugs
console.log('\n--- Checking Agency Data vs Route Slugs ---');
for (const slug of agencySlugs) {
  stats.checked++;
  if (!agencyRouteSlugs.has(slug)) {
    log('WARN', `AGENCY: "${slug}" exists in data but NOT in route slug array (page won't be generated)`);
  }
}
for (const slug of agencyRouteSlugs) {
  stats.checked++;
  if (!agencySlugs.has(slug)) {
    log('WARN', `AGENCY: "${slug}" in route array but NOT in data file (page may be empty)`);
  }
}

// 5. Check corporation data vs route slugs
console.log('\n--- Checking Corporation Data vs Route Slugs ---');
for (const slug of corpSlugs) {
  stats.checked++;
  if (!corpRouteSlugs.has(slug)) {
    log('WARN', `CORPORATION: "${slug}" exists in data but NOT in route slug array (page won't be generated)`);
  }
}
for (const slug of corpRouteSlugs) {
  stats.checked++;
  if (!corpSlugs.has(slug)) {
    log('WARN', `CORPORATION: "${slug}" in route array but NOT in data file (page may be empty)`);
  }
}

// ── SUMMARY ──
console.log('\n=== SUMMARY ===');
console.log(`Checks performed: ${stats.checked}`);
console.log(`Errors (broken links): ${issues.length}`);
console.log(`Warnings: ${warnings.length}`);

if (issues.length > 0) {
  console.log('\n=== ALL ERRORS ===');
  issues.forEach((msg, i) => console.log(`  ${i+1}. ${msg}`));
}

if (warnings.length > 0) {
  console.log('\n=== ALL WARNINGS ===');
  warnings.forEach((msg, i) => console.log(`  ${i+1}. ${msg}`));
}
