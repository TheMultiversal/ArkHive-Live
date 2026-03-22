// Bulk fix script for investigations missing eventOriginDate
// This adds eventOriginDate, lastActivityDate, and pageUpdatedDate to entries that lack them
const fs = require('fs');
const path = require('path');

const invDir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Map of slug -> eventOriginDate based on the investigation's date field or content
const dateMap = {
  // From the "NO EVENT ORIGIN" list
  'abu-ghraib-systematic-torture': '2003-10-01',
  'boeing-safety': '2018-10-29',
  'corporate-consolidation': '2000-01-01',
  'cia-dark-history': '1947-09-18',
  'climate-change-coverup': '1988-06-23',
  'corporate-labor': '1935-07-05',
  'covid-vaccine-profits': '2020-12-11',
  'cosby-sexual-assault': '2004-01-01',
  'chicago-police-torture-ring': '1972-01-01',
  'drug-pricing-crisis': '2015-09-10',
  'domestic-terrorism': '1995-04-19',
  'daniel-shaver-killing': '2016-01-18', // already fixed
  'drone-strikes-civilian-casualties': '2001-10-07',
  'exxon-valdez': '1989-03-24',
  'evidence-destruction': '2001-01-01',
  'el-paso-massacre': '2019-08-03',
  'enhanced-interrogation-cia-black-sites': '2002-03-28',
  'fox-news-sexual-harassment': '1996-10-07', // already fixed
  'forced-sterilization-eugenics-programs': '1907-03-09',
  'george-floyd': '2020-05-25',
  'global-terrorism': '2001-09-11',
  'genocide-native-american-boarding-schools': '1819-03-03',
  'healthcare-profiteering': '2010-03-23',
  'infrastructure-failures': '2005-08-29',
  'influencer-abuse': '2016-01-01', // already fixed
  'iraq-war-false-intelligence': '2002-09-12',
  'japanese-american-internment': '1942-02-19',
  'khashoggi-murder': '2018-10-02',
  'kissinger-foreign-policy-war-crimes': '1969-03-18',
  'las-vegas-shooting': '2017-10-01',
  'medical-misinfo': '2020-01-01',
  'mass-shootings': '1999-04-20',
  'mk-ultra-cia-mind-control': '1953-04-13',
  'oxford-shooting': '2021-11-30',
  'oversight-abuse': '2012-09-11', // already fixed
  'operation-chaos': '1967-08-15',
  'opioid-distribution': '2006-01-01',
  'parental-accountability': '2021-11-30', // already fixed
  'police-reform': '1991-03-03',
  'police-brutality-crisis': '1991-03-03', // already fixed
  'pharmaceutical-corruption': '2000-01-01',
  'parkland-shooting': '2018-02-14',
  'police-accountability': '1967-01-01', // already fixed
  'pine-ridge-reign-of-terror': '1973-02-27',
  'reagan-crimes': '1981-01-20',
  'syrian-chemical-weapons': '2013-08-21',
  'uvalde-police-failure': '2022-05-24',
  'world-bank': '1944-07-01',
};

const shardFiles = fs.readdirSync(invDir).filter(f => f.endsWith('.ts') && !['types.ts','index.ts','moneyTrails.ts'].includes(f));

let totalFixed = 0;
for (const file of shardFiles) {
  const filePath = path.join(invDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [slug, originDate] of Object.entries(dateMap)) {
    // Check if this slug is in this file and needs eventOriginDate
    const slugIndex = content.indexOf(`'${slug}': {`);
    if (slugIndex === -1) continue;
    
    // Check if it already has eventOriginDate
    const nextSlugIndex = content.indexOf("': {", slugIndex + slug.length + 10);
    const block = nextSlugIndex === -1 ? content.substring(slugIndex) : content.substring(slugIndex, nextSlugIndex);
    
    if (block.includes('eventOriginDate')) continue;
    
    // Find the timeline: [ or the closing },  of affiliations to insert before
    // Look for timeline: within this block
    const timelineIndex = content.indexOf('timeline:', slugIndex);
    if (timelineIndex === -1 || (nextSlugIndex !== -1 && timelineIndex > nextSlugIndex)) {
      // No timeline found in this entry, skip
      continue;
    }
    
    // Insert eventOriginDate before timeline
    const indent = '   ';
    const insert = `${indent}eventOriginDate: '${originDate}',\n${indent}lastActivityDate: '2026-03-21',\n${indent}pageUpdatedDate: '2026-03-21',\n`;
    
    // Find the line start before timeline
    let lineStart = timelineIndex;
    while (lineStart > 0 && content[lineStart - 1] !== '\n') lineStart--;
    
    content = content.substring(0, lineStart) + insert + content.substring(lineStart);
    modified = true;
    totalFixed++;
    console.log(`  Added eventOriginDate to ${slug} in ${file}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);
