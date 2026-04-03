// add-round4-defendants.cjs
// Adds Bank Leu officers and Princeton/Newport Partners defendants to Investigation #1
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'investigations', '1.ts');
let content = fs.readFileSync(filePath, 'utf-8');
const nl = content.includes('\r\n') ? '\r\n' : '\n';
let changeCount = 0;

function insertAfter(marker, insertion, label) {
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.error(`FAILED: Marker not found for "${label}"`);
    console.error(`Looking for: ${marker.substring(0, 80)}...`);
    process.exit(1);
  }
  const secondIdx = content.indexOf(marker, idx + 1);
  if (secondIdx !== -1) {
    console.error(`FAILED: Marker not unique for "${label}"`);
    process.exit(1);
  }
  content = content.slice(0, idx + marker.length) + insertion + content.slice(idx + marker.length);
  changeCount++;
  console.log(`OK: ${label}`);
}

function replaceExact(oldStr, newStr, label) {
  const idx = content.indexOf(oldStr);
  if (idx === -1) {
    console.error(`FAILED: String not found for "${label}"`);
    console.error(`Looking for: ${oldStr.substring(0, 80)}...`);
    process.exit(1);
  }
  const secondIdx = content.indexOf(oldStr, idx + 1);
  if (secondIdx !== -1) {
    console.error(`FAILED: String not unique for "${label}"`);
    process.exit(1);
  }
  content = content.slice(0, idx) + newStr + content.slice(idx + oldStr.length);
  changeCount++;
  console.log(`OK: ${label}`);
}

// ================================================================
// 1. ADD CONTENT PARAGRAPHS (after last paragraph, before ],)
// ================================================================
insertAfter(
  `merely created the appearance of accountability.'`,
  `,${nl}      'The corruption at Bank Leu in the Bahamas extended beyond merely holding Dennis Levine\\'s secret accounts. Bruno Pletscher, the bank\\'s vice president and deputy manager in Nassau, and Bernhard Meier, a portfolio manager, began systematically copying Levine\\'s trades for their own personal profit -- piggybacking on his stolen inside information about pending mergers and acquisitions. When the SEC\\'s investigation began closing in during 1985, the Bank Leu officers initially attempted a cover-up, forging documents and fabricating records. Pletscher eventually broke ranks and became the crucial cooperating witness whose testimony led directly to Levine\\'s arrest in May 1986. Meier initially resisted but was eventually convicted of securities fraud. Their piggybacking demonstrated that financial crime is contagious: even the bankers charged with merely holding Levine\\'s secret accounts could not resist profiting from the information that flowed through them.',${nl}      'Perhaps the most controversial prosecution in the broader insider trading crackdown targeted Princeton/Newport Partners, a highly successful quantitative hedge fund co-founded by mathematician Edward Thorp. The firm was indicted in August 1988 on RICO charges for engaging in illegal tax-motivated stock parking transactions with Drexel Burnham Lambert trader Bruce Lee Newberg. Six defendants -- managing general partner James Sutton Regan, general partners Charles Zarzecki, Jack Rabinowitz, and Paul Berkman, controller Steven Smotrich, and Newberg -- were convicted on over 60 counts in August 1989 in the first RICO conviction arising from the Wall Street investigations. They were sentenced in November 1989, with Regan receiving 6 months in prison and the others 3 months each, plus Zarzecki was ordered to forfeit $1.4 million and Newberg $200,000. However, on June 29, 1991, ALL convictions were overturned on appeal when the court found the government had improperly applied RICO -- a statute designed for organized crime -- to what were essentially tax and regulatory disputes. The prosecution had already achieved its destructive purpose: Princeton/Newport Partners was forced to liquidate, destroying the fund and the careers of those involved. The case became a lightning rod for criticism of Giuliani\\'s aggressive tactics and raised fundamental questions about prosecutorial overreach in white-collar cases. Yet from an accountability perspective, it also demonstrates how legal technicalities can nullify convictions even when the underlying conduct -- illegal tax-motivated trades designed to defraud the IRS -- was never seriously disputed.'`,
  'Add content paragraphs'
);

// ================================================================
// 2. UPDATE TAGS
// ================================================================
replaceExact(
  `'GAF Corporation'],`,
  `'GAF Corporation', 'Princeton Newport Partners', 'Bank Leu', 'Edward Thorp'],`,
  'Update tags'
);

// ================================================================
// 3. ADD AFFILIATIONS (after GAF Corporation)
// ================================================================
insertAfter(
  `href: '/entities/corporations/gaf-corporation' }`,
  `,${nl}      { id: '19', name: 'Princeton/Newport Partners', type: 'corporation', relationship: 'Quantitative hedge fund destroyed by RICO prosecution; all 6 convictions overturned on appeal; forced to liquidate fund', href: '/entities/corporations/princeton-newport-partners' },${nl}      { id: '20', name: 'Bruno Pletscher', type: 'individual', relationship: 'Bank Leu VP who piggybacked Levine trades and became key cooperating witness leading to Levine\\'s arrest', href: '/entities/individuals/bruno-pletscher' },${nl}      { id: '21', name: 'Bernhard Meier', type: 'individual', relationship: 'Bank Leu portfolio manager convicted of securities fraud for piggybacking Levine\\'s insider trades', href: '/entities/individuals/bernhard-meier' }`,
  'Add affiliations'
);

// ================================================================
// 4. ADD TIMELINE EVENTS (after Peizer pardon, last event)
// ================================================================
insertAfter(
  `granting full and unconditional pardon for his 2024 insider trading conviction', type: 'legal' }`,
  `,${nl}      { date: '1986-04-01', event: 'Bank Leu VP Bruno Pletscher breaks ranks and cooperates with SEC investigators, revealing how he and portfolio manager Bernhard Meier systematically piggybacked Dennis Levine\\'s insider trades for personal profit; Pletscher\\'s testimony provides crucial evidence leading to Levine\\'s arrest the following month', type: 'critical' },${nl}      { date: '1988-08-04', event: 'Princeton/Newport Partners and six principals (James Regan, Charles Zarzecki, Jack Rabinowitz, Paul Berkman, Steven Smotrich, and Drexel\\'s Bruce Newberg) indicted on RICO charges for illegal tax-motivated stock parking; first RICO prosecution arising from Wall Street crackdown', type: 'legal' },${nl}      { date: '1989-08-01', event: 'All six Princeton/Newport defendants convicted on more than 60 counts of racketeering, securities fraud, and tax fraud after six-week jury trial', type: 'legal' },${nl}      { date: '1989-11-09', event: 'Princeton/Newport defendants sentenced: James Regan receives 6 months prison; Charles Zarzecki receives 3 months plus $1.4 million forfeiture; Jack Rabinowitz, Paul Berkman, and Steven Smotrich each receive 3 months; Bruce Newberg receives 3 months plus $200,000 forfeiture', type: 'legal' },${nl}      { date: '1991-06-29', event: 'ALL Princeton/Newport Partners convictions overturned on appeal; court rules government improperly applied RICO to tax and regulatory disputes. Princeton/Newport had already been forced to liquidate, destroying the fund despite the eventual reversal of all convictions.', type: 'legal' }`,
  'Add timeline events'
);

// ================================================================
// 5. ADD MONEY TRAIL ENTRIES (after Victor Posner, last entry)
// ================================================================
insertAfter(
  `5,000 hours community service', documented: true }`,
  `,${nl}      { from: 'Charles Zarzecki', to: 'U.S. Treasury (Forfeiture)', amount: '$1,400,000', date: '1989-11-09', purpose: 'Forfeiture ordered at Princeton/Newport Partners RICO sentencing (all convictions later overturned on appeal)', documented: true },${nl}      { from: 'Bruce Lee Newberg', to: 'U.S. Treasury (Forfeiture - Princeton/Newport)', amount: '$200,000', date: '1989-11-09', purpose: 'Forfeiture ordered at Princeton/Newport Partners RICO sentencing (all convictions later overturned on appeal)', documented: true }`,
  'Add money trail entries'
);

// ================================================================
// 6. UPDATE NEWBERG DEFENDANT ENTRY
// ================================================================
replaceExact(
  `notes: 'Convicted of racketeering and fraud for his role in illegal stock parking and other schemes in Milken\\'s Beverly Hills operation. His conviction proved the fraud was an organized enterprise, not a solo act.'`,
  `notes: 'Also convicted alongside five Princeton/Newport Partners principals on 60+ counts of racketeering and tax fraud (August 1989) for illegal tax-motivated stock parking as Drexel\\'s counterparty; ALL Princeton/Newport convictions overturned on appeal June 29, 1991. Separately convicted of racketeering and fraud in Milken\\'s Beverly Hills operation. His involvement in both the Princeton/Newport and Milken cases demonstrated the interconnected nature of Drexel\\'s criminal enterprise.'`,
  'Update Newberg notes'
);

// ================================================================
// 7. ADD 7 NEW DEFENDANTS (after Victor Posner, last defendant)
// ================================================================
insertAfter(
  `Died February 11, 2002.' }`,
  `,${nl}      { name: 'Bruno Pletscher', role: 'Vice president at Bank Leu\\'s Nassau branch who piggybacked Dennis Levine\\'s insider trades for personal profit, then became the key cooperating witness who helped unravel the entire scandal', status: 'settled', charges: ['Insider trading', 'Securities fraud'], notes: 'As Bank Leu\\'s deputy manager in Nassau, Pletscher had direct access to Levine\\'s secret trading account. He and portfolio manager Bernhard Meier copied Levine\\'s trades for their own accounts, profiting from stolen information. When the SEC investigated suspicious trading patterns, Pletscher initially participated in a cover-up, forging documents. After retaining separate counsel, he became the first Bank Leu employee to cooperate, providing testimony that led directly to Levine\\'s arrest in May 1986. Received lenient treatment in the US for cooperation but was convicted of insider trading violations in Swiss proceedings.' },${nl}      { name: 'Bernhard Meier', role: 'Portfolio manager at Bank Leu\\'s Nassau branch who piggybacked Dennis Levine\\'s insider trades and initially resisted cooperation with SEC investigators', status: 'convicted', charges: ['Insider trading', 'Securities fraud'], notes: 'Meier copied Levine\\'s trades through the bank\\'s Nassau office for his own personal profit. Unlike colleague Bruno Pletscher, Meier initially resisted cooperation with SEC investigators and participated in efforts to conceal the paper trail. Eventually convicted of securities fraud. His case demonstrated that corruption at Bank Leu extended to active participation in insider trading by the bank\\'s own officers, not merely passive account-holding.' },${nl}      { name: 'James Sutton Regan', role: 'Managing general partner of Princeton/Newport Partners convicted of racketeering in the first RICO prosecution arising from the Wall Street investigations; all convictions overturned on appeal', status: 'acquitted', charges: ['Racketeering (RICO)', 'Securities fraud', 'Tax fraud', 'Conspiracy'], notes: 'Led Princeton/Newport Partners, a quantitative hedge fund co-founded by mathematician Edward Thorp. Indicted August 1988 on RICO charges for illegal tax-motivated trades with Drexel\\'s Bruce Newberg. Convicted on 63 counts in August 1989. Sentenced to 6 months in prison in November 1989. ALL convictions overturned on appeal June 29, 1991, when the court ruled the government had misapplied RICO. The fund was forced to liquidate as a result of the indictment, destroying it despite the reversal.' },${nl}      { name: 'Charles Zarzecki', role: 'General partner and chief trader at Princeton/Newport Partners convicted of racketeering alongside five other defendants in the Wall Street crackdown', status: 'acquitted', charges: ['Racketeering (RICO)', 'Securities fraud', 'Tax fraud', 'Conspiracy'], notes: 'Served as general partner and chief trader at Princeton/Newport. Convicted on 63 counts in August 1989. Sentenced to 3 months in prison and ordered to forfeit $1.4 million. All convictions overturned on appeal June 29, 1991.' },${nl}      { name: 'Jack Rabinowitz', role: 'General partner at Princeton/Newport Partners convicted of racketeering in the government\\'s aggressive Wall Street crackdown; all convictions overturned on appeal', status: 'acquitted', charges: ['Racketeering (RICO)', 'Securities fraud', 'Tax fraud'], notes: 'General partner at the fund. Convicted in August 1989 on multiple counts. Sentenced to 3 months in prison. All convictions overturned on appeal June 29, 1991.' },${nl}      { name: 'Paul Berkman', role: 'General partner at Princeton/Newport Partners convicted of racketeering alongside firm principals in the Wall Street crackdown; all convictions overturned on appeal', status: 'acquitted', charges: ['Racketeering (RICO)', 'Securities fraud', 'Tax fraud'], notes: 'General partner at Princeton/Newport. Convicted in August 1989. Sentenced to 3 months in prison. All convictions overturned on appeal June 29, 1991. Princeton/Newport was forced to liquidate as a result of the RICO indictment, destroying the fund despite the eventual reversal.' },${nl}      { name: 'Steven Smotrich', role: 'Controller at Princeton/Newport Partners convicted of racketeering for his role in illegal tax-motivated trading schemes with Drexel Burnham Lambert', status: 'acquitted', charges: ['Racketeering (RICO)', 'Securities fraud', 'Tax fraud'], notes: 'Served as controller of Princeton/Newport. Convicted in August 1989. Sentenced to 3 months in prison. All convictions overturned on appeal June 29, 1991. The prosecution and reversal of all Princeton/Newport convictions remains one of the most controversial episodes in white-collar criminal enforcement history.' }`,
  'Add 7 new defendants'
);

// ================================================================
// WRITE FILE
// ================================================================
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`\nAll ${changeCount} changes applied successfully.`);
console.log(`File written: ${filePath}`);
