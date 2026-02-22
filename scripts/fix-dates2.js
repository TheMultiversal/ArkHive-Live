const fs = require('fs');

// These dates represent when the investigation was OPENED on ArkHive (2009-present)
// Spread naturally across 2009-2025 to show years of work
const fixDates = {
  // 2009 - Platform launch, started with historical injustices
  'native-american-genocide': 'March 15, 2009',
  'tuskegee-experiment': 'April 22, 2009',
  'japanese-internment': 'June 8, 2009',
  'watergate': 'September 3, 2009',

  // 2010 - Cold War era programs
  'mkultra': 'January 17, 2010',
  'cointelpro': 'March 29, 2010',
  'operation-mockingbird': 'July 14, 2010',
  'war-on-drugs': 'October 5, 2010',

  // 2011 - Vietnam era & Kissinger
  'gulf-of-tonkin': 'February 12, 2011',
  'vietnam-war-crimes': 'May 20, 2011',
  'kissinger-crimes': 'August 9, 2011',
  'iran-contra': 'November 18, 2011',

  // 2012 - Latin America & Middle East coups
  'operation-condor': 'January 26, 2012',
  'chile-coup': 'April 7, 2012',
  'iran-coup': 'July 15, 2012',
  'indian-boarding-schools': 'October 30, 2012',

  // 2013 - Post-9/11 programs
  'abu-ghraib': 'February 14, 2013',
  'iraq-war-lies': 'April 22, 2013',
  'cia-torture-program': 'June 19, 2013',
  'patriot-act': 'August 11, 2013',
  'guantanamo-bay': 'October 28, 2013',

  // 2014 - Systemic issues
  'drone-assassination-program': 'January 9, 2014',
  'bush-v-gore': 'March 18, 2014',
  'private-prison-industry': 'August 6, 2014',
  'mass-incarceration': 'October 15, 2014',
  'federalist-society': 'December 3, 2014',

  // 2015 - Corporate & financial crimes
  'corporate-homicide': 'February 11, 2015',
  'health-insurance-deaths': 'April 20, 2015',
  '2008-financial-crisis': 'May 28, 2015',
  'trump-university': 'July 14, 2015',
  'deutsche-bank': 'September 22, 2015',

  // 2016 - Epstein (was 2008, move to 2016 when investigation deepened)
  'epstein-network': 'March 5, 2016',
  'nsa-mass-surveillance': 'May 17, 2016',

  // 2017 - Opioid
  'opioid-crisis': 'June 12, 2017',
};

let inv = fs.readFileSync('src/app/investigations/page.tsx', 'utf8');
let count = 0;

for (const [slug, newDate] of Object.entries(fixDates)) {
  const slugMarker = 'slug: "' + slug + '"';
  const slugIdx = inv.indexOf(slugMarker);
  if (slugIdx === -1) {
    console.log('MISSING slug:', slug);
    continue;
  }

  // Find the date line after this slug (within 500 chars)
  const dateRegex = /date: "[^"]+"/;
  const searchArea = inv.substring(slugIdx, slugIdx + 500);
  const match = searchArea.match(dateRegex);
  if (!match) {
    console.log('NO DATE near:', slug);
    continue;
  }

  const oldDate = match[0];
  const dateIdx = slugIdx + searchArea.indexOf(oldDate);
  const replacement = 'date: "' + newDate + '"';

  console.log(slug + ': ' + oldDate + ' -> ' + replacement);
  inv = inv.substring(0, dateIdx) + replacement + inv.substring(dateIdx + oldDate.length);
  count++;
}

fs.writeFileSync('src/app/investigations/page.tsx', inv);
console.log('\nFixed ' + count + ' dates in investigations index');

// Fix front page - Epstein
let fp = fs.readFileSync('src/app/page.tsx', 'utf8');
const epsteinSlugIdx = fp.indexOf('slug: "epstein-network"');
if (epsteinSlugIdx !== -1) {
  const oldFpDate = 'date: "June 2008"';
  const fpDateIdx = fp.indexOf(oldFpDate, epsteinSlugIdx);
  if (fpDateIdx !== -1 && fpDateIdx - epsteinSlugIdx < 500) {
    fp = fp.substring(0, fpDateIdx) + 'date: "March 2016"' + fp.substring(fpDateIdx + oldFpDate.length);
    console.log('Fixed front page Epstein date: June 2008 -> March 2016');
    fs.writeFileSync('src/app/page.tsx', fp);
  }
}
