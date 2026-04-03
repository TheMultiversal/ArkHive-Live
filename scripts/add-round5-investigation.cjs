// Round 5: Add Steven Posner defendant, MacPherson Partners content, affiliation, timeline, tags
const fs = require('fs');
const path = require('path');

// === Investigation file ===
const invFile = path.join(__dirname, '..', 'src', 'data', 'investigations', '1.ts');
let content = fs.readFileSync(invFile, 'utf8');

// Detect line endings
const crlfCount = (content.match(/\r\n/g) || []).length;
const lfCount = (content.match(/(?<!\r)\n/g) || []).length;
const eol = crlfCount > lfCount ? '\r\n' : '\n';
console.log(`Line endings: CRLF=${crlfCount}, LF=${lfCount}, using ${eol === '\r\n' ? 'CRLF' : 'LF'}`);

let changes = 0;

// 1. Add Steven Posner defendant after Victor Posner
const victorEnd = "Died February 11, 2002.' },";
const victorEndIdx = content.indexOf(victorEnd);
if (victorEndIdx !== -1) {
  const afterVictor = victorEndIdx + victorEnd.length;
  const stevenDef = eol + `      { name: 'Steven Posner', role: 'Son of corporate raider Victor Posner who was charged alongside his father by the SEC for colluding with Ivan Boesky and Michael Milken to conceal stock purchases in Fischbach Corporation during the 1984 Posner-led takeover', status: 'settled', charges: ['Stock concealment (SEC civil)', 'Securities fraud (SEC civil)'], notes: 'Charged by SEC in October 1988 alongside father Victor Posner and Drexel Burnham Lambert. The SEC alleged that Steven and Victor Posner had colluded with Ivan Boesky and Michael Milken to conceal their stock purchases during the 1984 Posner-led takeover of the Fischbach Corporation. While Boesky and Milken agreed to plead guilty to felony counts in relation to their activities in the Fischbach case, the Posners were required to relinquish all financial gains from the deal and to surrender ownership stakes they held in other companies. In 1993, permanently barred by the SEC from serving as an officer or director of any public company. Never criminally charged. Born January 11, 1943 in Baltimore, Maryland. Died November 29, 2010 in a boating accident in Biscayne Bay, Florida.' },`;
  content = content.slice(0, afterVictor) + stevenDef + content.slice(afterVictor);
  changes++;
  console.log('1. Added Steven Posner defendant entry');
} else {
  console.error('FAILED: Could not find Victor Posner defendant end marker');
}

// 2. Add Steven Posner affiliation after Bernhard Meier (last affiliation, no trailing comma)
const meierEnd = "href: '/entities/individuals/bernhard-meier' }";
const meierIdx = content.indexOf(meierEnd);
if (meierIdx !== -1) {
  const afterMeier = meierIdx + meierEnd.length;
  const stevenAff = ',' + eol + `      { id: '22', name: 'Steven Posner', type: 'individual', relationship: 'Victor Posner\\'s son; charged by SEC for colluding with Boesky and Milken to conceal Fischbach Corporation stock purchases; required to relinquish gains; barred from being officer/director of public companies in 1993', href: '/entities/individuals/steven-posner' }`;
  content = content.slice(0, afterMeier) + stevenAff + content.slice(afterMeier);
  changes++;
  console.log('2. Added Steven Posner affiliation');
} else {
  console.error('FAILED: Could not find Bernhard Meier affiliation end marker');
}

// 3. Add MacPherson Partners content paragraph before Princeton/Newport paragraph
const princetonStart = "'Perhaps the most controversial prosecution in the broader insider trading crackdown targeted Princeton/Newport Partners";
const princetonIdx = content.indexOf(princetonStart);
if (princetonIdx !== -1) {
  const macParagraph = `'The discovery of the MacPherson Partners limited partnership proved to be the turning point that shattered Michael Milken\\'s credibility within Drexel and forced the firm into its guilty plea. Just two days before Drexel reached its December 1988 agreement, Drexel\\'s own lawyers discovered that Milken\\'s department had secretly created MacPherson Partners in connection with the issuing of bonds for Storer Broadcasting. Equity warrants from the deal were cycled through a client back to Milken\\'s department, then distributed to the partnership\\'s limited partners \u2014 who included several of Milken\\'s own children and, more damningly, managers of money market funds who had invested in Drexel deals. The arrangement constituted bribes to the fund managers, who received the lucrative warrants as compensation for directing their funds\\' investments to benefit Milken\\'s operations. Several of these fund managers were subsequently convicted on bribery charges in separate federal proceedings. The revelation of MacPherson Partners was devastating because it demonstrated self-dealing and corruption that went beyond securities fraud into outright bribery, and it proved that Milken had hidden the partnership from Drexel\\'s own management. Even Fred Joseph, who had believed in Milken\\'s innocence, concluded after learning of MacPherson Partners that Milken had indeed engaged in illegal activity.',` + eol + '      ';
  content = content.slice(0, princetonIdx) + macParagraph + content.slice(princetonIdx);
  changes++;
  console.log('3. Added MacPherson Partners content paragraph');
} else {
  console.error('FAILED: Could not find Princeton/Newport content marker');
}

// 4. Add MacPherson Partners timeline event before Drexel plea
const drexelPlea = "{ date: '1988-12-21', event: 'Drexel Burnham Lambert pleads guilty to six felonies";
const pleaIdx = content.indexOf(drexelPlea);
if (pleaIdx !== -1) {
  const macTimeline = `{ date: '1988-12-19', event: 'Drexel\\'s own lawyers discover MacPherson Partners, a secret limited partnership created by Milken\\'s department for Storer Broadcasting bonds, with equity warrants distributed to Milken\\'s children and managers of money market funds as bribes; the revelation destroys Milken\\'s credibility within Drexel and makes the firm\\'s guilty plea inevitable', type: 'critical' },` + eol + '      ';
  content = content.slice(0, pleaIdx) + macTimeline + content.slice(pleaIdx);
  changes++;
  console.log('4. Added MacPherson Partners timeline event');
} else {
  console.error('FAILED: Could not find Drexel plea timeline marker');
}

// 5. Add tags
const oldTags = "'Edward Thorp']";
const newTags = "'Edward Thorp', 'Steven Posner', 'MacPherson Partners', 'Fischbach Corporation']";
if (content.includes(oldTags)) {
  content = content.replace(oldTags, newTags);
  changes++;
  console.log('5. Added tags: Steven Posner, MacPherson Partners, Fischbach Corporation');
} else {
  console.error('FAILED: Could not find tags marker');
}

if (changes === 5) {
  fs.writeFileSync(invFile, content, 'utf8');
  console.log(`\nSuccess: All ${changes} changes written to investigation file`);
} else {
  console.error(`\nOnly ${changes}/5 changes succeeded. NOT writing file.`);
}
