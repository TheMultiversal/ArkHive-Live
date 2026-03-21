import db from '../src/data/investigations';

const placeholderOnly: string[] = [];
const allSlugs = Object.keys(db);

for (const slug of allSlugs) {
  const inv = db[slug];
  const sources = inv.sources || [];
  const allPlaceholder = sources.length > 0 && sources.every(s => 
    s.url === 'https://www.documentcloud.org/' || s.url === 'https://www.documentcloud.org'
  );
  if (allPlaceholder) placeholderOnly.push(slug);
}

console.log('Total investigations:', allSlugs.length);
console.log('Placeholder-only:', placeholderOnly.length);
console.log('\nAll placeholder-only slugs:');
placeholderOnly.forEach(s => console.log(s));
