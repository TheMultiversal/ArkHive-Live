const fs = require('fs');

// Correct historical dates for each investigation slug
const dateMap = {
  'trump-criminal-compendium': 'June 16, 2015',
  'epstein-network': 'June 30, 2008',
  'january-6-insurrection': 'January 6, 2021',
  'russian-interference': 'June 14, 2016',
  'mar-a-lago-documents': 'August 8, 2022',
  'georgia-rico': 'January 2, 2021',
  'trump-org-fraud': 'July 1, 2021',
  'hush-money': 'October 27, 2016',
  'ukraine-extortion': 'July 25, 2019',
  'family-separation': 'April 6, 2018',
  'saudi-connections': 'October 2, 2018',
  'emoluments': 'January 20, 2017',
  'covid-response': 'February 7, 2020',
  'muslim-ban': 'January 27, 2017',
  'tax-evasion': 'October 2, 2018',
  'obstruction-of-justice': 'May 9, 2017',
  'climate-sabotage': 'June 1, 2017',
  'trump-university': 'May 23, 2005',
  'trump-foundation': 'June 14, 2018',
  'voter-suppression': 'August 18, 2020',
  'money-laundering': 'March 6, 2013',
  'sexual-assault': 'October 7, 2016',
  'pardons-corruption': 'December 23, 2020',
  'cambridge-analytica': 'March 17, 2018',
  'opioid-crisis': 'October 26, 2017',
  'build-the-wall-fraud': 'December 17, 2018',
  'proud-boys-sedition': 'January 6, 2021',
  'oath-keepers-sedition': 'January 6, 2021',
  'fake-electors': 'December 14, 2020',
  'dominion-defamation': 'November 7, 2020',
  'deutsche-bank': 'November 17, 1998',
  'inaugural-committee': 'January 20, 2017',
  'charlottesville': 'August 12, 2017',
  'lafayette-square': 'June 1, 2020',
  'puerto-rico': 'September 20, 2017',
  'defamation': 'June 21, 2019',
  'saudi-arms-deal': 'May 20, 2017',
};

// Fix investigations index page
let inv = fs.readFileSync('src/app/investigations/page.tsx', 'utf8');
let count = 0;
for (const [slug, date] of Object.entries(dateMap)) {
  const slugMarker = 'slug: "' + slug + '"';
  const slugIdx = inv.indexOf(slugMarker);
  if (slugIdx === -1) {
    console.log('MISSING slug:', slug);
    continue;
  }
  const dateSearch = 'date: "February 8, 2026"';
  const dateIdx = inv.indexOf(dateSearch, slugIdx);
  if (dateIdx === -1 || dateIdx - slugIdx > 500) {
    console.log('No Feb date near:', slug);
    continue;
  }
  const replacement = 'date: "' + date + '"';
  inv = inv.substring(0, dateIdx) + replacement + inv.substring(dateIdx + dateSearch.length);
  count++;
}
fs.writeFileSync('src/app/investigations/page.tsx', inv);
console.log('Fixed', count, 'dates in investigations index');

// Fix front page
let fp = fs.readFileSync('src/app/page.tsx', 'utf8');
const fpDateMap = {
  'trump-criminal-compendium': 'June 2015',
  'epstein-network': 'June 2008',
  'january-6-insurrection': 'January 2021',
};
let fpCount = 0;
for (const [slug, date] of Object.entries(fpDateMap)) {
  const slugMarker = 'slug: "' + slug + '"';
  const slugIdx = fp.indexOf(slugMarker);
  if (slugIdx === -1) {
    console.log('FP MISSING slug:', slug);
    continue;
  }
  const dateSearch = 'date: "February 2026"';
  const dateIdx = fp.indexOf(dateSearch, slugIdx);
  if (dateIdx === -1 || dateIdx - slugIdx > 500) {
    console.log('FP No Feb date near:', slug);
    continue;
  }
  const replacement = 'date: "' + date + '"';
  fp = fp.substring(0, dateIdx) + replacement + fp.substring(dateIdx + dateSearch.length);
  fpCount++;
}
fs.writeFileSync('src/app/page.tsx', fp);
console.log('Fixed', fpCount, 'dates on front page');
