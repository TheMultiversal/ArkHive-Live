import db from '../src/data/investigations/index';
const slugs = Object.keys(db);
let placeholderSources = 0;
let realSources = 0;
let totalSources = 0;
let pagesWithOnlyPlaceholder = 0;
let pagesWithSomePlaceholder = 0;
let pagesAllReal = 0;
for (const slug of slugs) {
  const inv = db[slug];
  let hasPlaceholder = false;
  let hasReal = false;
  for (const s of inv.sources || []) {
    totalSources++;
    if (!s.url || s.url === 'https://www.documentcloud.org/' || s.url.includes('example.com') || s.title === 'Public Records') {
      placeholderSources++;
      hasPlaceholder = true;
    } else {
      realSources++;
      hasReal = true;
    }
  }
  if (hasPlaceholder && !hasReal) pagesWithOnlyPlaceholder++;
  else if (hasPlaceholder && hasReal) pagesWithSomePlaceholder++;
  else pagesAllReal++;
}
console.log('Total sources: ' + totalSources);
console.log('Real sources: ' + realSources);
console.log('Placeholder sources: ' + placeholderSources);
console.log('Pages with ONLY placeholders: ' + pagesWithOnlyPlaceholder);
console.log('Pages with mix: ' + pagesWithSomePlaceholder);
console.log('Pages all real: ' + pagesAllReal);

// Also check money trail quality
let genericMT = 0;
let specificMT = 0;
for (const slug of slugs) {
  const inv = db[slug];
  if (!inv.moneyTrail || inv.moneyTrail.length === 0) continue;
  const first = inv.moneyTrail[0];
  if (first.purpose.includes('Total estimated fraud') || first.purpose.includes('Government spending on') || first.purpose.includes('Revenue from') || first.purpose.includes('Financial flows related') || first.purpose.includes('Funding for surveillance')) {
    genericMT++;
  } else {
    specificMT++;
  }
}
console.log('\nMoney trail quality:');
console.log('Specific/hand-crafted money trails: ' + specificMT);
console.log('Template-generated money trails: ' + genericMT);

// Check internal links (affiliations pointing to entity pages)
let totalAffLinks = 0;
let brokenPatterns = 0;
for (const slug of slugs) {
  const inv = db[slug];
  for (const aff of inv.affiliations || []) {
    totalAffLinks++;
    if (!aff.href || aff.href === '#' || aff.href === '') brokenPatterns++;
  }
}
console.log('\nAffiliation links:');
console.log('Total internal entity links: ' + totalAffLinks);
console.log('Missing/broken href: ' + brokenPatterns);
