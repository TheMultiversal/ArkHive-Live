const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

const slugs = [
  'shou-zi-chew', 'victoria-nuland', 'ali-khamenei', 'qasem-soleimani',
  'caroline-kennedy', 'j-michael-luttig', 'mary-trump', 'maryanne-trump-barry',
  'ali-alexander', 'merrick-garland', 'tanya-chutkan', 'jenna-ellis',
  'cleta-mitchell', 'richard-donoghue', 'franklin-graham', 'robert-jeffress',
  'aras-agalarov', 'johnny-mcentee', 'marla-maples', 'ivana-trump',
  'rhona-graff', 'jill-harth', 'fred-trump', 'ron-desantis',
  'liz-cheney', 'nancy-pelosi', 'adam-schiff', 'devin-nunes',
  'peter-navarro', 'john-bolton', 'rex-tillerson', 'betsy-devos',
  'ben-carson', 'nikki-haley', 'mike-pompeo', 'william-barr',
  'elaine-chao', 'erik-prince', 'michael-flynn-jr', 'sidney-powell',
  'michael-cohen', 'dan-scavino', 'brad-parscale', 'juan-merchan',
  'paula-white', 'benjamin-netanyahu', 'volodymyr-zelensky', 'jair-bolsonaro',
  'johnny-mcentee', 'alexander-torshin', 'paul-erickson', 'mitch-mcconnell',
  'les-wexner', 'sean-hannity', 'robert-jeffress'
];

const unique = [...new Set(slugs)];
unique.forEach(s => {
  const found = c.includes("'" + s + "'");
  const hasKA = found ? (() => {
    const idx = c.indexOf("'" + s + "'");
    const block = c.substring(idx, idx + 5000);
    const nextSlug = block.indexOf("\n  '", 10);
    const section = nextSlug > 0 ? block.substring(0, nextSlug) : block;
    return section.includes('knownAssociates');
  })() : false;
  console.log(`${s}: ${found ? 'EXISTS' : 'NOT FOUND'} ${found ? (hasKA ? '(has knownAssociates)' : '(NO knownAssociates)') : ''}`);
});

console.log('\nknownAssociates total:', (c.match(/knownAssociates:/g) || []).length);
console.log('File length:', c.length, 'chars,', c.split('\n').length, 'lines');
