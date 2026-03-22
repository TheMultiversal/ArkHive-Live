const fs = require('fs');
const path = require('path');

const invDir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(invDir).filter(f => /^[a-z0-9]\.ts$/.test(f));

const stats = { total: 0, noTimeline: 0, noSources: 0, noAffiliations: 0, noEventOrigin: 0, shortContent: 0, noTags: 0, fewSources: 0, fewAffiliations: 0, sparseTimeline: 0 };
const issues = [];
const allSlugs = [];

for (const f of files) {
  const c = fs.readFileSync(path.join(invDir, f), 'utf-8');
  const re = /'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(c)) !== null) {
    stats.total++;
    const slug = m[1];
    const start = m.index;
    const nextEntry = c.indexOf("\n  '", start + 1);
    const block = nextEntry > 0 ? c.substring(start, nextEntry) : c.substring(start, start + 15000);

    const probs = [];

    // Timeline check
    const hasTimeline = block.includes('timeline:') && block.includes('date:');
    if (!hasTimeline) { stats.noTimeline++; probs.push('NO_TIMELINE'); }
    else {
      const timelineDates = (block.match(/\{\s*date:/g) || []).length;
      if (timelineDates < 4) { stats.sparseTimeline++; probs.push(`SPARSE_TIMELINE(${timelineDates})`); }
    }

    // Sources check
    if (!block.includes('sources:')) { stats.noSources++; probs.push('NO_SOURCES'); }
    else {
      const sourceUrls = (block.match(/url:/g) || []).length;
      if (sourceUrls < 2) { stats.fewSources++; probs.push(`FEW_SOURCES(${sourceUrls})`); }
    }

    // Affiliations check
    if (!block.includes('affiliations:')) { stats.noAffiliations++; probs.push('NO_AFFILIATIONS'); }
    else {
      const affCount = (block.match(/name:\s*'/g) || []).length;
      if (affCount < 2) { stats.fewAffiliations++; probs.push(`FEW_AFFILIATIONS(${affCount})`); }
    }

    // Metadata checks
    if (!block.includes('eventOriginDate:')) { stats.noEventOrigin++; probs.push('NO_EVENT_ORIGIN'); }
    if (!block.includes('tags:')) { stats.noTags++; probs.push('NO_TAGS'); }

    // Content length
    const contentIdx = block.indexOf('content: [');
    if (contentIdx >= 0) {
      const contentEnd = block.indexOf('],', contentIdx);
      if (contentEnd > contentIdx) {
        const contentBlock = block.substring(contentIdx, contentEnd);
        // Count content paragraphs by counting lines that start a new quoted string
        const contentLines = contentBlock.split('\n').filter(l => l.trim().match(/^['"]/));
        const entries = contentLines.length;
        if (entries < 3) { stats.shortContent++; probs.push(`SHORT_CONTENT(${entries})`); }
      }
    } else {
      stats.shortContent++;
      probs.push('NO_CONTENT');
    }

    allSlugs.push({ slug, file: f, issues: probs });
    if (probs.length > 0) {
      issues.push({ slug, file: f, probs });
    }
  }
}

// Check for broken affiliation hrefs (point to entities that exist)
const entityDirs = ['agencies', 'corporations', 'individuals', 'organizations'];
const entitySlugs = new Set();
for (const ed of entityDirs) {
  const dir = path.join(__dirname, '..', 'src', 'data', ed);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.ts'))) {
    const c = fs.readFileSync(path.join(dir, f), 'utf-8');
    const re2 = /'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/g;
    let m2;
    while ((m2 = re2.exec(c)) !== null) {
      entitySlugs.add(`/entities/${ed}/${m2[1]}`);
    }
  }
}

// Check investigation affiliations point to valid entities
let brokenAffCount = 0;
const brokenAffs = [];
for (const f of files) {
  const c = fs.readFileSync(path.join(invDir, f), 'utf-8');
  const hrefRe = /href:\s*'(\/entities\/[^']+)'/g;
  let hm;
  while ((hm = hrefRe.exec(c)) !== null) {
    if (!entitySlugs.has(hm[1])) {
      brokenAffCount++;
      if (brokenAffs.length < 20) brokenAffs.push(hm[1]);
    }
  }
}

// Check moneyTrails coverage
const mtFile = path.join(invDir, 'moneyTrails.ts');
const mtContent = fs.readFileSync(mtFile, 'utf-8');
const mtSlugs = new Set();
const mtRe = /'([a-z0-9][a-z0-9-]*)'\s*:\s*\[/g;
let mtm;
while ((mtm = mtRe.exec(mtContent)) !== null) {
  mtSlugs.add(mtm[1]);
}
let noMoneyTrails = 0;
for (const s of allSlugs) {
  if (!mtSlugs.has(s.slug)) noMoneyTrails++;
}

console.log('=== ARKHIVE PLATFORM-WIDE AUDIT ===');
console.log('Total investigations:', stats.total);
console.log('');
console.log('--- CRITICAL ISSUES ---');
console.log('Missing timeline:', stats.noTimeline);
console.log('Missing sources:', stats.noSources);
console.log('Missing affiliations:', stats.noAffiliations);
console.log('Missing eventOriginDate:', stats.noEventOrigin);
console.log('No content:', stats.shortContent);
console.log('');
console.log('--- QUALITY ISSUES ---');
console.log('Sparse timeline (<4 entries):', stats.sparseTimeline);
console.log('Few sources (<2):', stats.fewSources);
console.log('Few affiliations (<2):', stats.fewAffiliations);
console.log('No money trails:', noMoneyTrails);
console.log('Missing tags:', stats.noTags);
console.log('');
console.log('--- ENTITY REFERENCE INTEGRITY ---');
console.log('Total entity slugs:', entitySlugs.size);
console.log('Broken affiliation hrefs:', brokenAffCount);
if (brokenAffs.length > 0) {
  console.log('Sample broken:', brokenAffs.slice(0, 10).join(', '));
}
console.log('');

// Priority: most issues
const sorted = issues.sort((a, b) => b.probs.length - a.probs.length);
console.log('--- TOP 30 INVESTIGATIONS NEEDING MOST WORK ---');
sorted.slice(0, 30).forEach(i => console.log(`  ${i.file}:${i.slug} -> ${i.probs.join(', ')}`));
console.log('');

// Count perfect entries (no issues)
const perfect = allSlugs.filter(s => s.issues.length === 0).length;
console.log('Perfect entries (no issues):', perfect, `(${(perfect/stats.total*100).toFixed(1)}%)`);
console.log('Entries with issues:', issues.length, `(${(issues.length/stats.total*100).toFixed(1)}%)`);
