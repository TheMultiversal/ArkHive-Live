const fs = require('fs');
const c = fs.readFileSync('src/app/entities/organizations/page.tsx', 'utf8');
const m = c.match(/slug:\s*'([^']+)'/g);
const slugs = m.map(x => x.match(/'([^']+)'/)[1]);
console.log('Total entries:', slugs.length);
console.log('Has cia-organization:', slugs.includes('cia-organization'));
console.log('Has fbi-organization:', slugs.includes('fbi-organization'));
console.log('Has nsa-organization:', slugs.includes('nsa-organization'));
console.log('Has aclu:', slugs.includes('aclu'));
console.log('Has saudi-arabia:', slugs.includes('saudi-arabia'));

// Check detail page for comparison
const detail = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const detailMatches = detail.match(/'([a-z0-9-]+)':\s*\{/g);
const detailSlugs = detailMatches.map(x => x.match(/'([^']+)'/)[1]);
const skipSlugs = ['ccp', 'china-gov', 'chamber-of-commerce', 'us-chamber', 'api', 'fop', 'wef', 'wuhan-institute-virology', 'cia', 'fbi-org', 'nsa-org'];
const stillMissing = detailSlugs.filter(s => !slugs.includes(s) && !skipSlugs.includes(s));
console.log('\nStill missing from index:', stillMissing.length);
if (stillMissing.length > 0) console.log(stillMissing);
