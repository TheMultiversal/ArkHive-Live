import db from '../src/data/investigations/index';

const hrefSet = new Set<string>();
for (const slug of Object.keys(db)) {
  const inv = db[slug];
  for (const aff of inv.affiliations || []) {
    if (aff.href) hrefSet.add(aff.href);
  }
}
console.log('Unique entity hrefs referenced: ' + hrefSet.size);

const byType: Record<string,number> = {};
for (const h of hrefSet) {
  const parts = h.split('/');
  const type = parts[2] || 'unknown';
  byType[type] = (byType[type] || 0) + 1;
}
for (const [k,v] of Object.entries(byType).sort((a,b) => b[1]-a[1])) {
  console.log('  ' + k + ': ' + v);
}

// Check moneyTrails coverage and generated file
import moneyTrails from '../src/data/investigations/moneyTrails';
const mtSlugs = Object.keys(moneyTrails);
console.log('\nmoneyTrails.ts entries: ' + mtSlugs.length);
const dbSlugs = Object.keys(db);
const missing = dbSlugs.filter(s => !moneyTrails[s] && (!db[s].moneyTrail || db[s].moneyTrail!.length === 0));
console.log('DB slugs without any money trail (file or inline): ' + missing.length);
if (missing.length > 0) console.log('Missing: ' + missing.slice(0, 10).join(', '));
