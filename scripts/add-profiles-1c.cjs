// Script to add individual profiles for missing defendants from Investigation #1 (1980s Insider Trading)
// Profiles: Lowell Milken (l.ts), Terren Peizer (t.ts), David Solomon (d.ts), James Dahl (j.ts),
//           Timothy Tabor (t.ts), Peter Brant (p.ts), Victor Posner (v.ts)

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'individuals');

function addToIndFile(letter, slug, profileText) {
  const filePath = path.join(BASE, `${letter}.ts`);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes(`'${slug}'`)) {
    console.log(`SKIP: ${slug} already exists in ${letter}.ts`);
    return;
  }

  const anchor = '};\n\nexport default profiles;';
  if (!content.includes(anchor)) {
    console.error(`ERROR: Cannot find anchor in ${letter}.ts`);
    return;
  }

  const insertion = `},\n\n\n ${profileText}\n};\n\nexport default profiles;`;
  content = content.replace(anchor, insertion);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`ADDED: ${slug} to ${letter}.ts`);
}

// 1. LOWELL MILKEN -> l.ts
addToIndFile('l', 'lowell-milken', `'lowell-milken': {
 name: 'Lowell Milken',
 title: 'Former Senior Vice President, Drexel Burnham Lambert High-Yield Bond Department',
 role: 'Michael Milken\\'s younger brother who served as SVP in the high-yield bond department and was indicted on 13 counts of racketeering and fraud as part of the government\\'s case against the Drexel operation',
 riskLevel: 'high',
 description: 'Lowell Jay Milken served as a senior vice president in his brother Michael Milken\\'s high-yield bond department at Drexel Burnham Lambert from 1979 until his resignation in 1989. In March 1989, a federal grand jury indicted Lowell alongside Michael and Bruce Lee Newberg on 98 total counts of racketeering and fraud. Lowell was specifically charged with 2 counts of racketeering and 11 counts of fraud based on his administrative role in the department. Critics condemned the indictment as a deliberate pressure tactic to force Michael into a plea deal by threatening his brother. Columbia Law professor Vivian Berger called the practice "troubling." When Michael pleaded guilty in April 1990, all charges against Lowell were dropped as part of the deal. In March 1991, Lowell was barred from the securities industry by an SEC settlement. He was never tried, never convicted, and never imprisoned despite being named in one of the largest financial crime indictments in American history. He has since become a prominent businessman and philanthropist, co-founding Knowledge Universe with his brother and Larry Ellison, and founding the Milken Educator Awards program.',
 birthDate: 'November 29, 1948',
 birthPlace: 'Encino, California, USA',
 education: ['University of California, Berkeley (B.A., Phi Beta Kappa, summa cum laude)', 'UCLA School of Law (J.D., Order of the Coif, top 10% of class)'],
 affiliations: [
  { name: 'Drexel Burnham Lambert', role: 'Senior Vice President, High-Yield Bond Department (1979-1989)', type: 'corporation' },
  { name: 'Knowledge Universe', role: 'Co-Founder (1996)', type: 'corporation' },
  { name: 'Milken Family Foundation', role: 'Co-Founder and Chairman', type: 'organization' },
  { name: 'Irell & Manella', role: 'Associate Attorney (1975-1979)', type: 'corporation' },
 ],
 controversies: [
  'Indicted March 1989 on 2 counts of racketeering and 11 counts of fraud alongside brother Michael Milken and Bruce Lee Newberg in 98-count indictment',
  'Government allegedly used Lowell\\'s indictment as leverage to pressure Michael into a plea deal, using family member as "bargaining chip"',
  'All charges dropped April 1990 as part of Michael\\'s plea agreement, without Lowell ever facing trial',
  'Barred from the securities industry by SEC settlement in March 1991',
  'Funded a $1.6 million lawsuit challenging James B. Stewart\\'s "Den of Thieves" book',
 ],
 charges: [
  { statute: '18 U.S.C. § 1962', description: 'Racketeering (RICO) (2 counts)', category: 'Financial Crimes' },
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud (11 counts)', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1948', event: 'Born in Encino, California; younger brother of Michael Milken' },
  { date: '1970', event: 'Graduates Phi Beta Kappa, summa cum laude from UC Berkeley' },
  { date: '1973', event: 'Graduates UCLA School of Law, Order of the Coif' },
  { date: '1975', event: 'Joins law firm Irell & Manella as associate attorney' },
  { date: '1979', event: 'Joins Drexel Burnham Lambert\\'s high-yield bond department as senior vice president' },
  { date: '1989-03', event: 'Indicted alongside Michael Milken and Bruce Newberg on 98 counts; Lowell charged with 2 racketeering and 11 fraud counts' },
  { date: '1989', event: 'Resigns from Drexel Burnham Lambert' },
  { date: '1990-04', event: 'All charges dropped as part of Michael\\'s guilty plea agreement' },
  { date: '1991-03', event: 'Barred from securities industry by SEC settlement' },
  { date: '1996', event: 'Co-founds Knowledge Universe with Michael Milken and Larry Ellison' },
 ],
 socialMedia: [],
 sources: [
  { title: 'NY Times: "U.S. Sees New Milken Indictment" (Aug. 1989)', url: 'https://www.nytimes.com/1989/08/08/business/us-sees-new-milken-indictment.html', date: '1989' },
  { title: 'LA Times: "For Lowell Milken, the Case Is Closed" (Apr. 21, 1990)', url: 'https://www.latimes.com/archives/la-xpm-1990-04-21-fi-1282-story.html', date: '1990' },
  { title: 'NY Times: "Tactics in Wall Street Cases Troubling Some Lawyers" (May 6, 1990)', url: 'https://www.nytimes.com/1990/05/06/weekinreview/tactics-in-wall-street-cases-troubling-some-lawyers.html', date: '1990' },
  { title: 'LA Times: "Lowell Milken Is Much More Than Older Brother\\'s Shadow" (Jan. 26, 1989)', url: 'https://www.latimes.com/archives/la-xpm-1989-01-26-fi-2009-story.html', date: '1989' },
 ],
 aliases: ['The Other Milken'],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Brother; co-indicted; charges dropped as part of Michael\\'s plea', href: '/entities/individuals/michael-milken' },
  { name: 'Bruce Lee Newberg', relationship: 'Co-indicted on 98-count indictment along with the Milken brothers', href: '/entities/individuals/bruce-lee-newberg' },
  { name: 'Fred Joseph', relationship: 'CEO of Drexel Burnham Lambert', href: '/entities/individuals/fred-joseph' },
 ],
 }`);

// 2. TERREN PEIZER -> t.ts
addToIndFile('t', 'terren-peizer', `'terren-peizer': {
 name: 'Terren Peizer',
 title: 'Former Drexel Burnham Lambert Junk Bond Salesman; Former CEO, Ontrak Inc.',
 role: 'Milken prot\u00e9g\u00e9 who received immunity for testimony against Milken in 1990, then was himself convicted of insider trading in 2024 and pardoned by Trump in 2026',
 riskLevel: 'critical',
 description: 'Terren Scott Peizer was hired by Michael Milken at Drexel Burnham Lambert in 1985 as a junk bond salesman. He managed the Drexel account of David Solomon\\'s fund management firm, Solomon Asset Management, which had an illegal arrangement with Drexel that included insider trading and phony tax losses. He worked directly under Milken, sometimes pretending to be him on the phone and calling him "Dad." Beginning in 1988, Peizer provided material evidence to prosecutors against Milken and Solomon. At Milken\\'s 1990 pre-sentencing hearing, Peizer testified against his former boss in exchange for complete immunity from both criminal prosecution and SEC sanctions. In a dark irony, Peizer himself was convicted in June 2024 of insider trading and securities fraud for a separate $12.5 million scheme at healthcare company Ontrak Inc. He was sentenced to 42 months in prison and fined $5.25 million. On January 16, 2026, President Donald Trump granted Peizer a full and unconditional pardon.',
 birthDate: 'July 31, 1959',
 birthPlace: 'Beachwood, Ohio, USA',
 education: ['Wharton School of the University of Pennsylvania (B.S., Economics, 1982)'],
 affiliations: [
  { name: 'Drexel Burnham Lambert', role: 'Junk Bond Salesman (1985-1989)', type: 'corporation' },
  { name: 'Goldman Sachs', role: 'Brief stint (1983)', type: 'corporation' },
  { name: 'First Boston', role: 'High-yield bond salesman (1983)', type: 'corporation' },
  { name: 'Ontrak Inc. (formerly Catasys/Hythiam)', role: 'Founder, CEO, and Chairman (2003-2023)', type: 'corporation' },
 ],
 controversies: [
  'Managed Drexel account with illegal arrangement including insider trading and phony tax losses with Solomon Asset Management',
  'Received complete immunity from criminal prosecution and SEC sanctions in exchange for testimony against Michael Milken (1988-1990)',
  'Founded and promoted Hythiam Inc., which marketed an unproven addiction treatment called Prometa that proved completely ineffective; stock dropped 99.7%',
  'Indicted March 2023 for insider trading at Ontrak Inc. after FBI investigation; accused of selling $20 million in stock while possessing material nonpublic information',
  'Convicted June 2024 of 3 counts of insider trading and securities fraud; sentenced to 42 months in prison',
  'Pardoned by President Trump January 16, 2026',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud (Ontrak Inc.)', category: 'Financial Crimes' },
  { statute: '15 U.S.C. § 78ff', description: 'Insider trading (2 counts, Ontrak Inc.)', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1959', event: 'Born in Beachwood, Ohio' },
  { date: '1982', event: 'Graduates from Wharton School, University of Pennsylvania' },
  { date: '1983', event: 'Brief stints at Goldman Sachs and First Boston' },
  { date: '1985', event: 'Hired by Michael Milken at Drexel Burnham Lambert as junk bond salesman' },
  { date: '1988', event: 'Begins providing material evidence to prosecutors against Milken and Solomon' },
  { date: '1988-12', event: 'Receives immunity deal as fourth Drexel employee to cooperate' },
  { date: '1990', event: 'Testifies against Milken at pre-sentencing hearing under immunity' },
  { date: '2003', event: 'Founds Catasys Inc. (later Ontrak), a healthcare company' },
  { date: '2023-03-01', event: 'Indicted for insider trading and securities fraud at Ontrak after FBI investigation' },
  { date: '2024-06-21', event: 'Convicted by federal jury of 3 counts of insider trading and securities fraud' },
  { date: '2025-06-23', event: 'Sentenced to 42 months in prison, fined $5.25 million, ordered to forfeit $12.7 million' },
  { date: '2026-01-16', event: 'Granted full and unconditional pardon by President Donald Trump' },
 ],
 socialMedia: [],
 sources: [
  { title: 'NY Times: "4th Drexel Employee in Immunity Bargain" (Dec. 10, 1988)', url: 'https://www.nytimes.com/1988/12/10/business/4th-drexel-employee-in-immunity-bargain.html', date: '1988' },
  { title: 'Wall Street Journal: "Jury Convicts Milken Prot\u00e9g\u00e9 Terren Peizer of Insider Trading" (June 21, 2024)', url: 'https://www.wsj.com/finance/regulation/jury-convicts-milken-protege-terren-peizer-of-insider-trading-7c78ba2a', date: '2024' },
  { title: 'DOJ: United States v. Terren S. Peizer', url: 'https://www.justice.gov/criminal-vns/case/united-states-v-terren-s-peizer', date: '2023' },
  { title: 'SEC: Charges Ontrak Chairman Terren Peizer With Insider Trading', url: 'https://www.sec.gov/news/press-release/2023-42', date: '2023' },
 ],
 aliases: ['Milken\\'s Prot\u00e9g\u00e9'],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Boss at Drexel; mentor; Peizer testified against him under immunity', href: '/entities/individuals/michael-milken' },
  { name: 'David Solomon', relationship: 'Fund manager whose account Peizer managed; illegal arrangement with Drexel', href: '/entities/individuals/david-solomon-fund-manager' },
  { name: 'Ivan Boesky', relationship: 'Part of the broader insider trading conspiracy', href: '/entities/individuals/ivan-boesky' },
 ],
 }`);

// 3. DAVID SOLOMON (Fund Manager) -> d.ts
addToIndFile('d', 'david-solomon-fund-manager', `'david-solomon-fund-manager': {
 name: 'David Solomon',
 title: 'Former Fund Manager, Solomon Asset Management',
 role: 'Fund manager whose firm had illegal arrangements with Michael Milken\\'s department at Drexel Burnham Lambert; two of Milken\\'s six felony counts involved transactions with Solomon\\'s fund',
 riskLevel: 'high',
 description: 'David Solomon was the manager of Solomon Asset Management, a fund that maintained illegal arrangements with Michael Milken\\'s high-yield bond department at Drexel Burnham Lambert. These arrangements included insider trading and the creation of phony tax losses. The fund\\'s account at Drexel was managed by Terren Peizer, one of Milken\\'s prot\u00e9g\u00e9s. Two of the six felony counts to which Milken pled guilty in April 1990 directly involved illegal transactions with Solomon\\'s fund, specifically related to tax evasion schemes. Solomon was convicted of securities fraud. His case demonstrated that Milken\\'s criminal network extended beyond Wall Street firms to the money managers who were supposed to be independent investors.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Solomon Asset Management', role: 'Fund Manager', type: 'corporation' },
 ],
 controversies: [
  'Illegal arrangement with Drexel Burnham Lambert involving insider trading and phony tax losses',
  'Two of Michael Milken\\'s six felony guilty plea counts involved transactions with Solomon\\'s fund',
  'Convicted of securities fraud',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1985-1989', event: 'Solomon Asset Management maintains illegal arrangement with Milken\\'s department at Drexel' },
  { date: '1988', event: 'Terren Peizer begins cooperating with prosecutors, providing evidence about Solomon arrangements' },
  { date: '1990', event: 'Two of Milken\\'s six felony counts involve transactions with Solomon\\'s fund' },
  { date: '1990', event: 'Convicted of securities fraud' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Jesse Kornbluth, "Highly Confident" (William Morrow, 1992)', url: 'https://archive.org/details/highlyconfidentc00korn', date: '1992' },
  { title: 'NY Times: "Witness Against Milken Settles S.E.C. Charges" (Nov. 28, 1990)', url: 'https://www.nytimes.com/1990/11/28/business/witness-against-milken-settles-sec-charges.html', date: '1990' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Two of Milken\\'s guilty plea counts involved Solomon\\'s fund', href: '/entities/individuals/michael-milken' },
  { name: 'Terren Peizer', relationship: 'Drexel salesman who managed Solomon\\'s account; later testified against Milken', href: '/entities/individuals/terren-peizer' },
 ],
 }`);

// 4. JAMES DAHL -> j.ts
addToIndFile('j', 'james-dahl', `'james-dahl': {
 name: 'James Dahl',
 title: 'Former Drexel Burnham Lambert Junk Bond Salesman',
 role: 'Salesman in Michael Milken\\'s Beverly Hills high-yield bond operation who pleaded guilty to securities fraud',
 riskLevel: 'medium',
 description: 'James Dahl was a junk bond salesman who worked in Michael Milken\\'s Beverly Hills high-yield bond department at Drexel Burnham Lambert. He pleaded guilty to securities fraud for his role in illegal trading schemes emanating from Milken\\'s operation. He was one of several Drexel salesmen and traders prosecuted for participating in the systematic misconduct that characterized the Beverly Hills office, which functioned as the nerve center of the 1980s junk bond and insider trading conspiracy.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Drexel Burnham Lambert', role: 'Junk Bond Salesman, Beverly Hills High-Yield Bond Department', type: 'corporation' },
 ],
 controversies: [
  'Participated in illegal trading schemes in Milken\\'s Beverly Hills operation',
  'Pleaded guilty to securities fraud',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1985-1989', event: 'Works as junk bond salesman in Milken\\'s Beverly Hills operation at Drexel' },
  { date: '1990', event: 'Pleads guilty to securities fraud' },
 ],
 socialMedia: [],
 sources: [
  { title: 'James B. Stewart, "Den of Thieves" (Simon & Schuster, 1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Boss at Drexel\\'s Beverly Hills high-yield bond department', href: '/entities/individuals/michael-milken' },
  { name: 'Lisa Ann Jones', relationship: 'Fellow Drexel trader in Milken\\'s operation; convicted of perjury', href: '/entities/individuals/lisa-ann-jones' },
  { name: 'Bruce Lee Newberg', relationship: 'Fellow Drexel trader in Milken\\'s operation; convicted of racketeering', href: '/entities/individuals/bruce-lee-newberg' },
 ],
 }`);

// 5. TIMOTHY TABOR -> t.ts
addToIndFile('t', 'timothy-tabor', `'timothy-tabor': {
 name: 'Timothy Tabor',
 title: 'Former Arbitrageur, Kidder, Peabody & Co.',
 role: 'Kidder Peabody arbitrageur arrested alongside Richard Wigton in the February 1987 insider trading sweep; charges later dropped',
 riskLevel: 'medium',
 description: 'Timothy Tabor was an arbitrageur at Kidder, Peabody & Co. who was arrested alongside Richard Wigton in the same aggressive February 1987 sweep by prosecutors. Like Wigton, Tabor was charged with insider trading conspiracy and securities fraud. The charges against both men were eventually dropped when prosecutors concluded they lacked sufficient evidence to proceed. Tabor\\'s case, like Wigton\\'s, became part of the broader debate about prosecutorial overreach under U.S. Attorney Rudy Giuliani, who favored dramatic public arrests and the use of RICO charges to pressure white-collar defendants. Whether the dropped charges reflected actual innocence or merely the difficulty of proving insider trading in court remains an open question.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Kidder, Peabody & Co.', role: 'Arbitrageur', type: 'corporation' },
 ],
 controversies: [
  'Arrested in February 1987 alongside Richard Wigton in publicized insider trading sweep at Kidder Peabody',
  'Charges dropped when prosecutors concluded insufficient evidence, but career was already destroyed',
  'Case became symbol of prosecutorial overreach debate under Giuliani',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Insider trading conspiracy (DROPPED)', category: 'Financial Crimes' },
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud (DROPPED)', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1987-02', event: 'Arrested alongside Richard Wigton at Kidder Peabody in publicized insider trading sweep' },
  { date: '1989', event: 'Charges dropped when prosecutors concede insufficient evidence' },
 ],
 socialMedia: [],
 sources: [
  { title: 'James B. Stewart, "Den of Thieves" (Simon & Schuster, 1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Richard Wigton', relationship: 'Co-arrested at Kidder Peabody; both had charges dropped', href: '/entities/individuals/richard-wigton' },
  { name: 'Martin Siegel', relationship: 'Kidder Peabody M&A banker whose insider trading exposed others at the firm', href: '/entities/individuals/martin-siegel' },
 ],
 }`);

// 6. PETER BRANT -> p.ts
addToIndFile('p', 'peter-brant-trader', `'peter-brant-trader': {
 name: 'Peter Brant',
 title: 'Former Equity Trader, Kidder, Peabody & Co.',
 role: 'Kidder Peabody equity trader convicted of perjury for lying about receiving inside information from Martin Siegel',
 riskLevel: 'medium',
 description: 'Peter Brant was an equity trader at Kidder, Peabody & Co. who was convicted of perjury for lying to prosecutors about receiving inside information from Martin Siegel about pending mergers and acquisitions transactions. Siegel, the star M&A banker at Kidder Peabody, had been passing inside information not only to Ivan Boesky but apparently to traders within his own firm. Brant\\'s conviction demonstrated that the insider trading culture at Kidder Peabody extended far deeper than any single individual, with illicit information flowing from the M&A department to traders on the equity desk.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Kidder, Peabody & Co.', role: 'Equity Trader', type: 'corporation' },
 ],
 controversies: [
  'Received inside information from Martin Siegel about pending M&A transactions at Kidder Peabody',
  'Convicted of perjury for lying to prosecutors about receiving the inside information',
  'Part of broader pattern of illicit information sharing at Kidder Peabody',
 ],
 charges: [
  { statute: '18 U.S.C. § 1621', description: 'Perjury', category: 'Obstruction' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1984-1986', event: 'Receives inside information from Martin Siegel about pending M&A deals at Kidder Peabody' },
  { date: '1990', event: 'Convicted of perjury for lying about receiving inside information from Siegel' },
 ],
 socialMedia: [],
 sources: [
  { title: 'James B. Stewart, "Den of Thieves" (Simon & Schuster, 1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Martin Siegel', relationship: 'Source of inside M&A information at Kidder Peabody', href: '/entities/individuals/martin-siegel' },
  { name: 'Richard Wigton', relationship: 'Fellow Kidder Peabody employee caught in insider trading investigation', href: '/entities/individuals/richard-wigton' },
 ],
 }`);

// 7. VICTOR POSNER -> v.ts
addToIndFile('v', 'victor-posner', `'victor-posner': {
 name: 'Victor Posner',
 title: 'Corporate Raider; Convicted Tax Evader; Pioneer of the Hostile Takeover',
 role: 'Miami-based corporate raider and Milken associate who was charged alongside Drexel Burnham Lambert with stock concealment and convicted of tax evasion',
 riskLevel: 'high',
 description: 'Victor Posner was an American corporate raider who pioneered the hostile takeover and became one of Michael Milken\\'s key clients. He controlled numerous companies including DWG Corporation, Sharon Steel, NVF Company, and Fischbach Corporation. Forbes called him a man with "the arrogance of a banana republic dictator" and The New York Times named him the "dean of the corporate takeover." In 1988, the SEC charged Posner and his son Steven alongside Drexel Burnham Lambert with scheming to conceal their purchases of Fischbach Corporation stock. That same year, Posner pleaded no contest to tax evasion and fraud for inflating the value of land he donated to Miami Christian College, and was ordered to pay more than $6 million in fines and costs and to devote 20 hours per week for five years to working with the homeless. In 1993, both Victor and Steven Posner were permanently barred by the SEC from serving as officers or directors of any public company. Posner\\'s relationship with Milken exemplified the symbiotic corruption between the junk bond machine and the corporate raiders it financed.',
 birthDate: 'September 18, 1918',
 birthPlace: 'Baltimore, Maryland, USA',
 deathDate: 'February 11, 2002',
 education: ['No formal education beyond age 13 (left school early)'],
 affiliations: [
  { name: 'Security Management Corporation', role: 'Head', type: 'corporation' },
  { name: 'DWG Corporation', role: 'Chairman and CEO', type: 'corporation' },
  { name: 'Sharon Steel Corporation', role: 'Chairman', type: 'corporation' },
  { name: 'Fischbach Corporation', role: 'Controlling shareholder (through DWG)', type: 'corporation' },
  { name: 'Drexel Burnham Lambert', role: 'Major client of Milken\\'s junk bond operation', type: 'corporation' },
 ],
 controversies: [
  'Charged by SEC alongside Drexel Burnham Lambert with concealing purchases of Fischbach Corporation stock',
  'Pleaded no contest to tax evasion and fraud for inflating charitable donation values (1988)',
  'Ordered to pay $6 million+ in fines and costs; 5,000 hours community service',
  'SEC permanently barred him and son Steven from serving as officers or directors of public companies (1993)',
  'Directed Sharon Steel pension board to invest in Posner-owned properties; SEC sued in 1971',
  'Removed original Norman Rockwell paintings from Sharon Steel headquarters after acquiring the company; ordered to return them by bankruptcy judge',
  'Sharon Steel operated in Chapter 11 bankruptcy; Posner refused to return $10 million in payouts to himself and son',
  'Known associate of Michael Milken; junk bond-financed raids',
 ],
 charges: [
  { statute: '26 U.S.C. § 7201', description: 'Tax evasion (no contest plea)', category: 'Financial Crimes' },
  { statute: '18 U.S.C. § 1001', description: 'Fraud (inflating charitable donation values)', category: 'Financial Crimes' },
  { statute: '15 U.S.C. § 78j(b)', description: 'Stock concealment (SEC civil)', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1918', event: 'Born in Baltimore, Maryland, one of nine children of Russian-Jewish grocers' },
  { date: '1948', event: 'Begins developing real estate in the Baltimore area' },
  { date: '1954', event: 'Moves to Miami Beach, Florida; continues investing in real estate and public companies' },
  { date: '1969', event: 'Initiates hostile takeover of Sharon Steel Corporation, one of the earliest such takeovers in the US' },
  { date: '1971', event: 'SEC sues over directing Sharon Steel pension investments into Posner-owned properties' },
  { date: '1982-1985', event: 'Aggressive acquisition spree using Milken\\'s junk bond financing' },
  { date: '1987', event: 'Sharon Steel enters Chapter 11 bankruptcy; Posner refuses to return payouts to himself and son' },
  { date: '1988', event: 'SEC charges Posner and son Steven with Drexel for concealing Fischbach stock purchases' },
  { date: '1988', event: 'Pleads no contest to tax evasion and fraud; ordered to pay $6M+ and perform community service' },
  { date: '1992', event: 'Forced to resign as DWG chairman; sells shares to Trian Group (Nelson Peltz and Peter May)' },
  { date: '1993', event: 'Both Victor and Steven Posner permanently barred by SEC from being officer/director of public company' },
  { date: '2002-02-11', event: 'Dies of pneumonia in Miami Beach, Florida, age 83' },
 ],
 socialMedia: [],
 sources: [
  { title: 'NY Times Obituary (Feb. 12, 2002)', url: 'https://query.nytimes.com/gst/fullpage.html?res=9803E1DB1E3CF931A25751C0A9649C8B63', date: '2002' },
  { title: 'Sun-Sentinel: "Milken helped 3 prosper" (Apr. 29, 1990)', url: 'https://www.sun-sentinel.com/news/fl-xpm-1990-04-29-9001050627-story.html', date: '1990' },
  { title: 'The Economist: "Victor Posner, master of the hostile takeover" (Mar. 7, 2002)', url: 'https://web.archive.org/web/20121104084404/http://www.highbeam.com/doc/1G1-87459971.html', date: '2002' },
 ],
 aliases: ['Dean of the Corporate Takeover'],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Key client of Milken\\'s junk bond operation; raids financed by Drexel', href: '/entities/individuals/michael-milken' },
  { name: 'Steven Posner', relationship: 'Son; co-charged by SEC; both barred from public company leadership', href: '/entities/individuals/steven-posner' },
 ],
 }`);

console.log('\\nDone! All profiles for Investigation #1 third batch have been processed.');
