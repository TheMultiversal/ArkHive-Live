// Add Steven Posner individual profile to s.ts shard
const fs = require('fs');
const path = require('path');

const sFile = path.join(__dirname, '..', 'src', 'data', 'individuals', 's.ts');
let content = fs.readFileSync(sFile, 'utf8');

// Detect line endings
const crlfCount = (content.match(/\r\n/g) || []).length;
const lfCount = (content.match(/(?<!\r)\n/g) || []).length;
const eol = crlfCount > lfCount ? '\r\n' : '\n';
console.log(`Line endings: CRLF=${crlfCount}, LF=${lfCount}, using ${eol === '\r\n' ? 'CRLF' : 'LF'}`);

// The closing pattern after the last profile
const closingMarker = "};" + eol + eol + "export default profiles;";
const closingIdx = content.indexOf(closingMarker);

if (closingIdx === -1) {
  // Try with single newline
  const alt1 = "};\n\nexport default profiles;";
  const alt2 = "};\r\n\r\nexport default profiles;";
  let idx = content.indexOf(alt1);
  if (idx === -1) idx = content.indexOf(alt2);
  if (idx === -1) {
    console.error('FAILED: Could not find closing marker in s.ts');
    process.exit(1);
  }
  // Use the found marker
  console.log('Found closing marker (alternate match)');
}

// Find the last profile's closing: the `},` followed by `};` then export
// We need to insert after the last profile's closing `},` and before the `};`
// Actually: the structure is:
//   'steven-smotrich': { ... },
// };
// export default profiles;
// We need to insert BETWEEN the closing `},` of steven-smotrich and the `};` of the Record

// Find `};` followed by `export default profiles;`
const exportIdx = content.indexOf('export default profiles;');
if (exportIdx === -1) {
  console.error('FAILED: Could not find export statement');
  process.exit(1);
}

// Go backwards from export to find `};`
let searchIdx = exportIdx - 1;
while (searchIdx > 0 && (content[searchIdx] === '\n' || content[searchIdx] === '\r' || content[searchIdx] === ' ')) {
  searchIdx--;
}
// searchIdx should now point to `;` of `};`
if (content[searchIdx] === ';' && content[searchIdx - 1] === '}') {
  // Insert before `};`
  const insertBefore = searchIdx - 1;
  
  // Check if the last profile entry before `};` has a trailing comma
  // Go back from `}` to find the previous non-whitespace char
  let checkIdx = insertBefore - 1;
  while (checkIdx > 0 && (content[checkIdx] === '\n' || content[checkIdx] === '\r' || content[checkIdx] === ' ')) {
    checkIdx--;
  }
  
  let needsComma = '';
  if (content[checkIdx] !== ',') {
    needsComma = ',';
    console.log('Adding trailing comma to previous profile');
  }

  const stevenPosnerProfile = eol + eol + ` 'steven-posner': {` + eol +
`    name: 'Steven Posner',` + eol +
`    title: 'Son of Corporate Raider Victor Posner; Charged by SEC for Fischbach Corporation Stock Concealment in Collusion with Boesky and Milken',` + eol +
`    role: 'Son and Business Associate of Victor Posner',` + eol +
`    riskLevel: 'high',` + eol +
`    description: 'Steven Posner was the son of legendary corporate raider Victor Posner and a participant in his father\\'s business empire. In 1988, the SEC charged that Steven and Victor Posner had colluded with Ivan Boesky and Michael Milken to conceal their stock purchases during the 1984 Posner-led takeover of the Fischbach Corporation. While Boesky and Milken agreed to plead guilty to felony counts in relation to their activities in the Fischbach case, the Posners were required to relinquish all financial gains they had made in the deal and to surrender ownership stakes they held in other companies. In 1993, Steven Posner was permanently barred by the SEC from serving as an officer or director of any public company. He was never criminally charged. Steven Posner died on November 29, 2010, at age 67, in a boating accident in Biscayne Bay, Florida.',` + eol +
`    birthDate: 'January 11, 1943',` + eol +
`    birthPlace: 'Baltimore, Maryland',` + eol +
`    deathDate: 'November 29, 2010',` + eol +
`    education: [],` + eol +
`    affiliations: [` + eol +
`      { name: 'DWG Corporation', role: 'Executive (Posner family controlled)', type: 'corporation' },` + eol +
`      { name: 'Fischbach Corporation', role: 'Associated through Posner family takeover', type: 'corporation' },` + eol +
`    ],` + eol +
`    controversies: [` + eol +
`      'Charged by SEC in 1988 for colluding with Boesky and Milken to conceal Fischbach Corporation stock purchases',` + eol +
`      'Required to relinquish all financial gains from Fischbach deal and surrender ownership stakes in other companies',` + eol +
`      'Permanently barred by SEC in 1993 from serving as officer or director of any public company',` + eol +
`    ],` + eol +
`    charges: [` + eol +
`      { statute: 'SEC Civil Action', description: 'Stock concealment: Colluding with Boesky and Milken to conceal stock purchases during 1984 Fischbach Corporation takeover', category: 'Civil' },` + eol +
`      { statute: 'SEC Civil Action', description: 'Securities fraud: Scheming to conceal stock ownership in connection with Drexel Burnham Lambert\\'s illegal activities', category: 'Civil' },` + eol +
`    ],` + eol +
`    relatedInvestigations: [` + eol +
`      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },` + eol +
`    ],` + eol +
`    timeline: [` + eol +
`      { date: '1943-01-11', event: 'Born in Baltimore, Maryland' },` + eol +
`      { date: '1984', event: 'Posner family launches takeover of Fischbach Corporation; SEC later alleges Steven and Victor Posner colluded with Boesky and Milken to conceal stock purchases' },` + eol +
`      { date: '1988-10-01', event: 'SEC charges Steven Posner and father Victor Posner alongside Drexel Burnham Lambert with concealing purchases of Fischbach Corporation stock' },` + eol +
`      { date: '1988', event: 'Required to relinquish all financial gains from Fischbach deal and surrender ownership stakes in other companies as part of SEC settlement' },` + eol +
`      { date: '1993-06-01', event: 'Permanently barred by SEC from serving as officer or director of any public company' },` + eol +
`      { date: '2010-11-29', event: 'Died at age 67 in a boating accident in Biscayne Bay, Florida' },` + eol +
`    ],` + eol +
`    socialMedia: [],` + eol +
`    sources: [` + eol +
`      { title: 'SEC Litigation: Victor and Steven Posner - Fischbach Corporation', url: 'https://www.sec.gov', date: '1988' },` + eol +
`      { title: 'New York Times: Posners Barred by SEC', url: 'https://www.nytimes.com', date: '1993' },` + eol +
`      { title: 'Steven Posner Obituary', url: 'https://en.wikipedia.org/wiki/Steven_Posner', date: '2010' },` + eol +
`    ],` + eol +
`    aliases: [],` + eol +
`    knownAssociates: [` + eol +
`      { name: 'Victor Posner', relationship: 'Father; corporate raider and Milken client; co-charged by SEC for Fischbach stock concealment', href: '/entities/individuals/victor-posner' },` + eol +
`      { name: 'Michael Milken', relationship: 'Drexel junk bond king who SEC alleged colluded with Posners on Fischbach takeover', href: '/entities/individuals/michael-milken' },` + eol +
`      { name: 'Ivan Boesky', relationship: 'Arbitrageur who SEC alleged colluded with Posners on Fischbach stock concealment', href: '/entities/individuals/ivan-boesky' },` + eol +
`    ],` + eol +
`  },` + eol;

  // Insert: add comma after previous profile if needed, then new profile, then };
  content = content.slice(0, checkIdx + 1) + needsComma + stevenPosnerProfile + content.slice(insertBefore);
  
  fs.writeFileSync(sFile, content, 'utf8');
  console.log('Successfully added Steven Posner profile to s.ts');
} else {
  console.error(`FAILED: Unexpected characters before export. Found '${content[searchIdx]}' and '${content[searchIdx-1]}'`);
  process.exit(1);
}
