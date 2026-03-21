/**
 * Comprehensive investigation route audit
 * Checks static pages for content mismatches
 */
const fs = require('fs');
const path = require('path');

const appDir = 'src/app/investigations';
const dataDir = 'src/data/investigations';

// 1. Gather all data slugs and titles
const dataFiles = fs.readdirSync(dataDir).filter(f =>
  f.endsWith('.ts') && !['index.ts','types.ts','moneyTrails.ts'].includes(f)
);
const dataSlugs = {};
for (const f of dataFiles) {
  const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
  const regex = /^\s{2}'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/gm;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const slug = m[1];
    const afterKey = content.substring(m.index, m.index + 500);
    const titleMatch = afterKey.match(/title:\s*'([^']+)'/);
    dataSlugs[slug] = { file: f, title: titleMatch ? titleMatch[1] : '(unknown)' };
  }
}

// 2. Gather all static dirs
const staticDirs = fs.readdirSync(appDir).filter(f => {
  if (f === '[slug]' || f.endsWith('.tsx') || f.endsWith('.ts')) return false;
  try { return fs.statSync(path.join(appDir, f)).isDirectory(); } catch { return false; }
});

// 3. Audit each static page
const issues = [];

for (const dir of staticDirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    issues.push({ slug: dir, issue: 'No page.tsx in static dir', sev: 'warn' });
    continue;
  }
  const content = fs.readFileSync(pagePath, 'utf8');

  // Extract title
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  const pageTitle = titleMatch ? titleMatch[1] : null;

  if (!pageTitle) {
    issues.push({ slug: dir, issue: 'Cannot extract title', sev: 'warn' });
    continue;
  }

  // Check slug vs title relevance
  const slugWords = dir.split('-').filter(w => w.length > 2);
  const titleLower = pageTitle.toLowerCase();
  const matchingWords = slugWords.filter(w => titleLower.includes(w));

  if (slugWords.length > 0 && matchingWords.length === 0) {
    issues.push({
      slug: dir,
      issue: 'WRONG CONTENT: "' + pageTitle + '" has ZERO matching words with slug "' + dir + '"',
      sev: 'CRITICAL'
    });
  } else if (slugWords.length > 2 && matchingWords.length / slugWords.length < 0.3) {
    issues.push({
      slug: dir,
      issue: 'LIKELY WRONG: "' + pageTitle + '" poor match with "' + dir + '"',
      sev: 'HIGH'
    });
  }
}

// 4. Report
const shadows = staticDirs.filter(d => dataSlugs[d]);
console.log('=== INVESTIGATION ROUTE AUDIT ===');
console.log('Data layer: ' + Object.keys(dataSlugs).length + ' investigations');
console.log('Static pages: ' + staticDirs.length + ' directories');
console.log('Overlap: ' + shadows.length + ' (' + shadows.join(', ') + ')');
console.log('');

const critical = issues.filter(i => i.sev === 'CRITICAL');
const high = issues.filter(i => i.sev === 'HIGH');
const warn = issues.filter(i => i.sev === 'warn');

if (critical.length) {
  console.log('CRITICAL MISMATCHES (' + critical.length + '):');
  critical.forEach(i => console.log('  X /investigations/' + i.slug + ': ' + i.issue));
}
if (high.length) {
  console.log('\nHIGH CONCERN (' + high.length + '):');
  high.forEach(i => console.log('  ! /investigations/' + i.slug + ': ' + i.issue));
}
if (warn.length) {
  console.log('\nWARNINGS (' + warn.length + '):');
  warn.forEach(i => console.log('  ? /investigations/' + i.slug + ': ' + i.issue));
}
if (!issues.length) console.log('All static pages match their slugs.');
