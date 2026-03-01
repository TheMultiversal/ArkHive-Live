const fs = require('fs');
const path = require('path');

// Step 1: Merge profiles in individuals/[slug]/page.tsx
const indivPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
let content = fs.readFileSync(indivPath, 'utf8');

// Remove bill-barr profile entirely
const billBarrStart = content.indexOf("'bill-barr': {");
if (billBarrStart === -1) { console.log('bill-barr not found!'); process.exit(1); }

// Find the end: look for the next profile or the closing of the map
let depth = 0;
let billBarrEnd = -1;
let inStr = false;
let esc = false;
for (let i = billBarrStart + 14; i < content.length; i++) {
  const ch = content[i];
  if (esc) { esc = false; continue; }
  if (ch === '\\') { esc = true; continue; }
  if (ch === "'" && !inStr) { inStr = true; continue; }
  if (ch === "'" && inStr) { inStr = false; continue; }
  if (inStr) continue;
  if (ch === '{') depth++;
  if (ch === '}') {
    depth--;
    if (depth === 0) {
      // This closes the bill-barr profile object
      // Find the comma after it
      let end = i + 1;
      while (end < content.length && (content[end] === ',' || content[end] === '\n' || content[end] === ' ')) end++;
      billBarrEnd = end;
      break;
    }
  }
}

if (billBarrEnd === -1) { console.log('Could not find end of bill-barr'); process.exit(1); }
console.log('Removing bill-barr profile (' + (billBarrEnd - billBarrStart) + ' chars)');
content = content.substring(0, billBarrStart) + content.substring(billBarrEnd);

// Now enhance william-barr with merged content
// Replace the william-barr profile with a comprehensive merged version
const wbStart = content.indexOf("'william-barr': {");
if (wbStart === -1) { console.log('william-barr not found!'); process.exit(1); }

// Find end of william-barr  
depth = 0;
let wbEnd = -1;
inStr = false;
esc = false;
for (let i = wbStart + 17; i < content.length; i++) {
  const ch = content[i];
  if (esc) { esc = false; continue; }
  if (ch === '\\') { esc = true; continue; }
  if (ch === "'" && !inStr) { inStr = true; continue; }
  if (ch === "'" && inStr) { inStr = false; continue; }
  if (inStr) continue;
  if (ch === '{') depth++;
  if (ch === '}') {
    depth--;
    if (depth === 0) {
      wbEnd = i + 1;
      break;
    }
  }
}

const mergedProfile = `'william-barr': {
    name: 'William Pelham Barr',
    title: 'Former Attorney General',
    role: 'Trump\\'s Attorney General, AG During Epstein Death, Mueller Cover-Up Artist',
    riskLevel: 'critical' as const,
    aliases: ['Bill Barr', 'Trump\\'s Roy Cohn', 'The Cover-Up General'],
    description: 'William Barr served as Trump\\'s Attorney General and systematically corrupted the Department of Justice to serve Trump\\'s personal interests. He issued a deliberately misleading four-page summary of the Mueller Report, intervened in Roger Stone\\'s sentencing, dropped the Michael Flynn prosecution, and ordered the violent clearing of Lafayette Square. Critically, Barr oversaw the Bureau of Prisons during Jeffrey Epstein\\'s death in federal custody at MCC New York on August 10, 2019. His father, Donald Barr, hired the 20-year-old college dropout Epstein as a math teacher at the elite Dalton School in 1973. Barr declared he was "satisfied" Epstein\\'s death was a suicide despite two malfunctioning cameras, two sleeping guards, and removal from suicide watch. He also attempted to fire SDNY US Attorney Geoffrey Berman who was investigating Epstein associates.',
    birthDate: 'May 23, 1950',
    birthPlace: 'New York City, USA',
    education: [
      'J.D. - George Washington University Law School',
      'M.A. - Columbia University (Chinese Studies)',
      'B.A. - Columbia University',
    ],
    netWorth: '$40+ million',
    affiliations: [
      { name: 'Department of Justice', role: 'Attorney General (1991-1993, 2019-2020)', type: 'agency' },
      { name: 'Bureau of Prisons', role: 'Oversight as AG during Epstein death', type: 'agency' },
      { name: 'Time Warner', role: 'General Counsel', type: 'corporation' },
      { name: 'Kirkland & Ellis', role: 'Of Counsel', type: 'corporation' },
      { name: 'CIA', role: 'Analyst (1973-1977)', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Served as personal protector, covered up investigations', href: '/entities/individuals/donald-trump' },
      { name: 'Jeffrey Epstein', relationship: 'AG overseeing BOP during death in custody; father hired Epstein at Dalton', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Donald Barr', relationship: 'Father, hired Epstein at Dalton School in 1974', href: '/entities/individuals/donald-barr' },
      { name: 'Ghislaine Maxwell', relationship: 'DOJ oversaw Maxwell prosecution; attempted to fire SDNY attorney', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Geoffrey Berman', relationship: 'Attempted to fire SDNY prosecutor investigating Epstein associates', href: '/entities/individuals/geoffrey-berman' },
      { name: 'Colette Peters', relationship: 'BOP Director during investigations into Epstein custody failures', href: '/entities/individuals/colette-peters' },
      { name: 'Nicholas Tartaglione', relationship: 'Epstein cellmate investigated in connection with death', href: '/entities/individuals/nicholas-tartaglione' },
      { name: 'Barbara Sampson', relationship: 'NYC Medical Examiner who ruled Epstein death suicide', href: '/entities/individuals/barbara-sampson' },
      { name: 'Roger Stone', relationship: 'Intervened to reduce sentence', href: '/entities/individuals/roger-stone' },
      { name: 'Michael Flynn', relationship: 'Dropped prosecution', href: '/entities/individuals/michael-flynn' },
      { name: 'Robert Mueller', relationship: 'Misrepresented his report findings', href: '/entities/individuals/robert-mueller' },
    ],
    controversies: [
      'Oversaw Bureau of Prisons when Epstein died under suspicious circumstances',
      'Father Donald Barr hired Epstein at Dalton School',
      'Declared satisfaction with suicide ruling despite overwhelming circumstantial evidence',
      'Attempted to fire SDNY US Attorney Geoffrey Berman who was investigating Epstein associates',
      'Recused himself from Epstein case but maintained DOJ oversight',
      'Mueller Report Cover-Up: Issued misleading 4-page summary before anyone read report',
      'Mueller wrote letter: Barr "did not fully capture" findings',
      'Report documented 10+ instances of obstruction',
      'Overruled career prosecutors in Roger Stone sentencing — all four resigned in protest',
      'Ordered Flynn case dropped despite two guilty pleas',
      'Ordered violent clearing of Lafayette Square for Trump photo-op',
      'Deployed federal agents against Portland protesters without local consent',
      'Spread mail-in voting fraud claims before 2020 election',
      'Iran-Contra Cover-Up: Recommended pardons for Iran-Contra criminals in first tenure',
    ],
    charges: [
      { statute: '18 U.S.C. \\u00a7 1503', description: 'Obstruction of Justice - Mueller report cover-up', category: 'Federal' },
      { statute: '18 U.S.C. \\u00a7 1505', description: 'Obstruction of Congressional Proceeding - Misleading Congress', category: 'Federal' },
      { statute: '18 U.S.C. \\u00a7 1512(c)', description: 'Obstruction of Official Proceeding - Stone/Flynn interference', category: 'Federal' },
      { statute: '18 U.S.C. \\u00a7 242', description: 'Deprivation of Rights Under Color of Law - Lafayette Square', category: 'Federal' },
      { statute: '18 U.S.C. \\u00a7 241', description: 'Conspiracy Against Rights - Voter suppression rhetoric', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
      { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
      { title: 'DOJ Politicization', slug: 'doj-politicization', severity: 'critical' },
      { title: 'Mueller Report Suppression', slug: 'mueller-suppression', severity: 'critical' },
    ],
    timeline: [
      { date: 'May 23, 1950', event: 'Born in New York City' },
      { date: '1973-1977', event: 'Works as CIA analyst' },
      { date: '1991-1993', event: 'First term as Attorney General under George H.W. Bush' },
      { date: '1992', event: 'Recommends Iran-Contra pardons, protecting Reagan/Bush officials' },
      { date: 'June 2018', event: 'Sends unsolicited 19-page memo attacking Mueller obstruction theory' },
      { date: 'February 2019', event: 'Confirmed as Attorney General (second term)' },
      { date: 'March 24, 2019', event: 'Issues misleading 4-page Mueller Report summary' },
      { date: 'March 27, 2019', event: 'Mueller writes letter objecting to Barr\\'s characterization' },
      { date: 'April 18, 2019', event: 'Full Mueller Report released, contradicts Barr summary' },
      { date: 'August 10, 2019', event: 'Jeffrey Epstein dies in federal custody under Barr\\'s DOJ oversight' },
      { date: 'August 2019', event: 'Declares satisfaction with suicide ruling despite suspicious circumstances' },
      { date: 'February 2020', event: 'Intervenes in Roger Stone sentencing, prosecutors resign' },
      { date: 'May 2020', event: 'Moves to drop Flynn prosecution' },
      { date: 'June 1, 2020', event: 'Orders Lafayette Square cleared for Trump photo-op' },
      { date: 'June 2020', event: 'Attempts to fire SDNY US Attorney Geoffrey Berman' },
      { date: 'December 1, 2020', event: 'Admits DOJ found no evidence of widespread fraud' },
      { date: 'December 23, 2020', event: 'Resigns rather than support Trump\\'s worst election lies' },
      { date: '2022', event: 'Testifies to January 6 Committee, calls Trump claims "bullshit"' },
    ],
    sources: [
      { title: 'DOJ IG Report on Epstein Death', url: 'https://oig.justice.gov/reports/investigation-and-review-federal-bureau-prisons-monitoring-jeffrey-epstein-following-his', date: '2023' },
      { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
      { title: 'Mueller Letter to Barr', date: 'March 2019' },
      { title: 'House Judiciary Contempt Proceedings', date: '2019' },
      { title: 'January 6 Committee Testimony', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
      { title: 'DOJ IG Lafayette Square Report', date: '2021' },
    ],
  }`;

content = content.substring(0, wbStart) + mergedProfile + content.substring(wbEnd);
fs.writeFileSync(indivPath, content);
console.log('Merged william-barr profile written, bill-barr removed.');

// Step 2: Update all references to bill-barr across the codebase
const files = [
  'src/app/entities/individuals/page.tsx',
  'src/app/entities/individuals/[slug]/page.tsx',
  'src/app/entities/agencies/[slug]/page.tsx',
  'src/app/entities/corporations/[slug]/page.tsx',
  'src/app/entities/organizations/[slug]/page.tsx',
  'src/app/investigations/epstein-network/page.tsx',
];

// Also search for any other file referencing bill-barr
const { execSync } = require('child_process');
try {
  const grepResult = execSync('findstr /s /i "bill-barr" src\\app\\*.tsx', { encoding: 'utf8' });
  console.log('\nFiles still referencing bill-barr after merge:');
  console.log(grepResult);
} catch (e) {
  // findstr returns exit code 1 if no match found  
  if (e.status === 1) {
    console.log('\nNo remaining bill-barr references in TSX files (already handled in individuals).');
  }
}

// Update the individuals listing page
const listingPath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', 'page.tsx');
if (fs.existsSync(listingPath)) {
  let listing = fs.readFileSync(listingPath, 'utf8');
  const billBarrCount = (listing.match(/bill-barr/g) || []).length;
  if (billBarrCount > 0) {
    // Check if there's a bill-barr listing entry
    const listingIdx = listing.indexOf("'bill-barr'");
    if (listingIdx === -1) {
      // Try href
      const hrefIdx = listing.indexOf('bill-barr');
      if (hrefIdx !== -1) {
        listing = listing.replace(/bill-barr/g, 'william-barr');
        fs.writeFileSync(listingPath, listing);
        console.log('Updated', billBarrCount, 'references in individuals listing page.');
      }
    } else {
      // There's a listing entry for bill-barr - need to remove it or redirect
      // Find and remove the bill-barr entry, keep william-barr
      // First check if william-barr also has a listing entry
      const hasWB = listing.indexOf("'william-barr'") !== -1 || listing.indexOf('william-barr') !== -1;
      if (hasWB) {
        // Both exist — remove bill-barr entry entirely
        // Find the object boundaries
        const entryStart = listing.lastIndexOf('{', listingIdx);
        let entryEnd = listing.indexOf('},', listingIdx);
        if (entryEnd !== -1) {
          entryEnd += 2; // include },
          // Also eat trailing whitespace/newline
          while (entryEnd < listing.length && (listing[entryEnd] === '\n' || listing[entryEnd] === ' ')) entryEnd++;
          listing = listing.substring(0, entryStart) + listing.substring(entryEnd);
          fs.writeFileSync(listingPath, listing);
          console.log('Removed duplicate bill-barr listing entry.');
        }
      } else {
        // Only bill-barr exists — rename to william-barr
        listing = listing.replace(/bill-barr/g, 'william-barr');
        fs.writeFileSync(listingPath, listing);
        console.log('Renamed bill-barr to william-barr in listing page.');
      }
    }
  } else {
    console.log('No bill-barr references in individuals listing page.');
  }
}

// Check all other entity files for bill-barr hrefs
for (const f of ['src/app/entities/agencies/[slug]/page.tsx', 'src/app/entities/corporations/[slug]/page.tsx', 'src/app/entities/organizations/[slug]/page.tsx']) {
  const fp = path.join(__dirname, '..', f);
  if (!fs.existsSync(fp)) continue;
  let fc = fs.readFileSync(fp, 'utf8');
  const cnt = (fc.match(/bill-barr/g) || []).length;
  if (cnt > 0) {
    fc = fc.replace(/bill-barr/g, 'william-barr');
    fs.writeFileSync(fp, fc);
    console.log('Updated', cnt, 'bill-barr references in', f);
  }
}

// Check investigation pages
const investDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
function walkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full);
    else if (item.endsWith('.tsx')) {
      let fc = fs.readFileSync(full, 'utf8');
      const cnt = (fc.match(/bill-barr/g) || []).length;
      if (cnt > 0) {
        fc = fc.replace(/bill-barr/g, 'william-barr');
        fs.writeFileSync(full, fc);
        console.log('Updated', cnt, 'bill-barr references in', path.relative(path.join(__dirname, '..'), full));
      }
    }
  }
}
walkDir(investDir);

console.log('\nMerge complete!');
