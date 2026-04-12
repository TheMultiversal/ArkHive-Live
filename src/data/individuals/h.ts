// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'hope-hicks': {
 name: 'Hope Charlotte Hicks',
 title: 'Former White House Communications Director',
 role: 'Trump Advisor, Hush Money Witness',
 riskLevel: 'medium',
 description: 'Hope Hicks was a close Trump advisor who served as White House Communications Director. She was on the plane when Trump discussed the hush money scheme and testified in the Manhattan criminal trial, crying on the stand about the damage to Trump.',
 birthDate: 'October 21, 1988',
 birthPlace: 'Greenwich, Connecticut, USA',
 netWorth: 'Unknown',
 education: ['B.A., Southern Methodist University'],
 affiliations: [
 { name: 'White House', role: 'Communications Director (2017-2018)', type: 'agency' },
 { name: 'Trump Organization', role: 'PR Executive', type: 'corporation' },
 { name: 'Fox Corporation', role: 'Chief Communications Officer', type: 'corporation' },
 ],
 controversies: [
 'Testified in Manhattan hush money trial',
 'Cried on stand about damage to Trump',
 'On Air Force One during cover story creation',
 'Resigned after admitting to"white lies"',
 'January 6 Committee testimony',
 'Text:"We all look like domestic terrorists now"',
 ],
 charges: [
 { statute: '18 U.S.C. Ã‚Â§ 1001', description: 'Potential False Statements; Admitted to"white lies"for Trump; potential false statements to investigators', category: 'Potential Federal' },
 { statute: '18 U.S.C. Ã‚Â§ 1512(c)(2)', description: 'Potential Obstruction; Participated in creating cover story on Air Force One for hush money reimbursements', category: 'Potential Federal' },
 { statute: '18 U.S.C. Ã‚Â§ 2', description: 'Potential Aiding and Abetting; Knowledge of and participation in scheme to conceal campaign finance violations', category: 'Potential Federal' },
 { statute: '52 U.S.C. Ã‚Â§ 30109', description: 'Potential Campaign Finance Violation; Aware of hush money payments during campaign and helped coordinate messaging', category: 'Potential Election' },
 { statute: '18 U.S.C. Ã‚Â§ 371', description: 'Potential Conspiracy; Participated in meetings and communications about concealing payments', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1988', event: 'Born in Connecticut' },
 { date: '2014', event: 'Joins Trump Organization' },
 { date: '2017', event: 'Named White House Communications Director' },
 { date: '2018', event: 'Resigns after"white lies"admission' },
 { date: '2022', event: 'Testifies to January 6 Committee' },
 { date: '2024', event: 'Testifies in Manhattan criminal trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Manhattan DA Trial Testimony', url: 'https://manhattanda.org/', date: '2024' },
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Close advisor, testified against', href: '/entities/individuals/donald-trump' },
 { name: 'Michael Cohen', relationship: 'Coordinated hush money cover story', href: '/entities/individuals/michael-cohen' },
 ],
 },




































 'hr-mcmaster': {
 name: 'Hr Mcmaster',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Hr Mcmaster. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Hr Mcmaster\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'hillary-clinton': {
 name: 'Hillary Diane Rodham Clinton',
 title: 'Former Secretary of State',
 role: '2016 Democratic Presidential Nominee',
 riskLevel: 'low' as const,
 description: 'Former First Lady, U.S. Senator from New York, and Secretary of State who lost the 2016 presidential election to Donald Trump. Target of numerous Trump attacks including "Lock Her Up "chants. Subject of multiple investigations including emails and Benghazi that found no criminal wrongdoing. Won the popular vote by 3 million votes.',
 birthDate: 'October 26, 1947',
 birthPlace: 'Chicago, Illinois',
 education: [
 'Wellesley College (B.A.)',
 'Yale Law School (J.D.)',
 ],
 affiliations: [
 { name: 'Democratic Party', role: '2016 Presidential Nominee', type: 'organization' },
 { name: 'State Department', role: 'Secretary (2009-2013)', type: 'agency' },
 { name: 'U.S. Senate', role: 'Senator from NY (2001-2009)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Bill Clinton', relationship: 'Husband, 42nd President', href: '/entities/individuals/bill-clinton' },
 { name: 'Barack Obama', relationship: 'Appointed her Secretary of State', href: '/entities/individuals/barack-obama' },
 ],
 controversies: [
 'Private email server as Secretary of State',
 'FBI investigation found no criminal intent',
 'Benghazi hearings (11 hours of testimony)',
 'Target of Russian interference in 2016',
 'Subject of "Lock Her Up "chants at Trump rallies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Becomes Secretary of State' },
 { date: '2016', event: 'Wins Democratic nomination' },
 { date: 'July 2016', event: 'FBI concludes email investigation, no charges' },
 { date: 'November 2016', event: 'Loses election despite winning popular vote by 3M' },
 ],
 sources: [
 { title: 'FBI Investigation Conclusion', url: 'https://vault.fbi.gov/', date: 'July 2016' },
 ],
 },
 'heather-heyer': {
 name: 'Heather Heyer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Heather Heyer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Heather Heyer was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Heather Heyer coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'harlan-crow': {
 name: 'Harlan Crow',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Harlan Crow. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Harlan Crow was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Harlan Crow facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'h-r-haldeman': {
 name: 'H. R. Haldeman',
 title: 'Former White House Chief of Staff',
 role: 'Convicted Watergate conspirator and Nixon\'s gatekeeper',
 riskLevel: 'high',
 description: 'Harry Robbins "H.R." Haldeman served as White House Chief of Staff to President Richard Nixon from 1969 to 1973. He was one of the most powerful figures in the Watergate scandal, convicted of conspiracy, obstruction of justice, and perjury for his central role in the cover-up of the Watergate break-in.',
 birthDate: 'October 27, 1926',
 birthPlace: 'Los Angeles, California',
 deathDate: 'November 12, 1993',
 education: ['UCLA, BA Business Administration 1948'],
 affiliations: [
 { name: 'White House', role: 'Chief of Staff (1969-1973)', type: 'agency' },
 ],
 controversies: [
 'Central figure in the Watergate cover-up, directing efforts to obstruct the FBI investigation by involving the CIA',
 'The "smoking gun" tape of June 23, 1972 revealed Haldeman and Nixon discussing using the CIA to block the FBI Watergate probe, leading directly to Nixon resignation',
 'Convicted of conspiracy, obstruction of justice, and three counts of perjury in the Watergate trial',
 'Sentenced to 2.5 to 8 years in federal prison; served 18 months at Lompoc Federal Prison Camp',
 'Controlled access to Nixon and was known as the "Berlin Wall" for his role as gatekeeper',
 ],
 charges: [
 { statute: '18 USC 371', description: 'Conspiracy', category: 'Conspiracy' },
 { statute: '18 USC 1503', description: 'Obstruction of Justice', category: 'Obstruction' },
 { statute: '18 USC 1621', description: 'Perjury (three counts)', category: 'Perjury' },
 ],
 relatedInvestigations: [
 { title: 'Watergate', slug: 'watergate', severity: 'critical' },
 ],
 timeline: [
 { date: '1969-01-20', event: 'Appointed White House Chief of Staff to President Nixon' },
 { date: '1972-06-23', event: 'Smoking gun tape: discussed using CIA to obstruct FBI Watergate probe' },
 { date: '1973-04-30', event: 'Forced to resign along with John Ehrlichman' },
 { date: '1975-01-01', event: 'Convicted on all counts in Watergate trial' },
 { date: '1977-06-21', event: 'Began serving prison sentence' },
 { date: '1993-11-12', event: 'Died of cancer at age 67' },
 ],
 socialMedia: [],
 sources: [
 { title: 'National Archives: Watergate Trial Records', url: 'https://www.archives.gov/research/investigations/watergate', date: '1975-01-01' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'President and co-conspirator in Watergate cover-up', href: '/entities/individuals/richard-nixon' },
 { name: 'John Ehrlichman', relationship: 'Fellow top Nixon aide convicted in Watergate', href: '/entities/individuals/john-ehrlichman' },
 { name: 'John Mitchell', relationship: 'Attorney General, fellow Watergate convict', href: '/entities/individuals/john-mitchell' },
 ],
 },

 'hafez-al-assad': {
 name: 'Hafez al-Assad',
 title: 'Former President of Syria',
 role: 'Syrian Dictator (1971-2000)',
 riskLevel: 'critical',
 description: 'Hafez al-Assad. Profile pending review.',
 birthDate: 'October 6, 1930',
 birthPlace: 'Qardaha, Syria',
 deathDate: 'June 10, 2000',
 education: ['Syrian Air Force Academy', 'Soviet military training'],
 affiliations: [
 { name: 'Syrian Government', role: 'President (1971-2000)', type: 'agency' },
 { name: 'Bath Party', role: 'Secretary General', type: 'organization' },
 ],
 controversies: [
 'HAMA MASSACRE: 1982 massacre killed 10,000-40,000 people',
 'POLITICAL REPRESSION: Systematic torture, disappearances',
 'LEBANON: Military occupation of Lebanon',
 ],
 charges: [
 { statute: 'Crimes Against Humanity', description: 'Mass killings, systematic torture', category: 'International Law' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: 'October 6, 1930', event: 'Born in Qardaha' },
 { date: '1970', event: 'Seizes power in coup' },
 { date: 'February 1982', event: 'Hama massacre' },
 { date: 'June 10, 2000', event: 'Dies, succeeded by son' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hafez al-Assad', url: 'https://en.wikipedia.org/wiki/Hafez_al-Assad', date: '' },
 { title: 'Associated Press: Hafez al-Assad', url: 'https://apnews.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bashar al-Assad', relationship: 'Son, successor', href: '/entities/individuals/bashar-al-assad' },
 ],
 },

 'harry-stonecipher': {
 name: 'Harry Stonecipher',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Harry Stonecipher. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Harry Stonecipher coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Harry Stonecipher holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'howard-mckenzie': {
 name: 'Howard Mckenzie',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Howard Mckenzie. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Howard Mckenzie, though no formal investigation was initiated at the time.',
 'Public filings and regulatory records indicate Howard Mckenzie facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },








 'howard-schultz': {
 name: 'Howard Schultz',
 title: 'Former Starbucks CEO',
 role: 'Starbucks CEO, Union Busting Campaign',
 riskLevel: 'high',
 description: 'Howard Schultz built Starbucks and returned as CEO in 2022 specifically to crush the unionization wave sweeping the company. Under his leadership, Starbucks was found to have committed hundreds of labor law violations, fired union organizers, and closed stores to prevent organizing. He testified before Congress defending these practices.',
 birthDate: 'July 19, 1953',
 birthPlace: 'Brooklyn, New York',
 education: ['Northern Michigan University'],
 netWorth: '$4.3 billion',
 affiliations: [
 { name: 'Starbucks', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'UNION BUSTING: Returned as CEO to fight unions',
 'NLRB VIOLATIONS: Hundreds of labor law violations found',
 'FIRED ORGANIZERS: Illegally terminated union supporters',
 'CLOSED STORES: Shut locations to prevent organizing',
 'CONGRESSIONAL TESTIMONY: Defended anti-union campaign',
 'BENEFITS THREAT: Withheld benefits from union stores',
 ],
 charges: [
 { statute: '29 U.S.C. Ã¯Â¿Â½ 158(a)(1)', description: 'NLRA, Interference with union rights', category: 'NLRB VIOLATIONS' },
 { statute: '29 U.S.C. Ã¯Â¿Â½ 158(a)(3)', description: 'NLRA, Discrimination against union members', category: 'NLRB VIOLATIONS' },
 ],
 relatedInvestigations: [
 { title: 'Starbucks Union Busting', slug: 'starbucks-union-busting', severity: 'critical' },
 { title: 'Corporate Union Busting', slug: 'corporate-union-busting', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 19, 1953', event: 'Born in Brooklyn' },
 { date: '1987', event: 'Buys Starbucks' },
 { date: '2022', event: 'Returns as CEO to fight unions' },
 { date: '2023', event: 'Steps down after union-busting campaign' },
 ],
 sources: [{ title: 'Wikipedia: Howard Schultz', url: 'https://en.wikipedia.org/wiki/Howard_Schultz' }, { title: 'Bloomberg: Howard Schultz', url: 'https://www.bloomberg.com/' }, { title: 'Military Times: Howard Schultz', url: 'https://www.militarytimes.com/' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 knownAssociates: [
 { name: 'Chris Smalls', relationship: 'Starbucks faced union drives similar to worker activism', href: '/entities/individuals/chris-smalls' },
 { name: 'Tim Cook', relationship: 'Fellow corporate leader facing labor scrutiny', href: '/entities/individuals/tim-cook' }
 ],

 },
 'heather-bresch': {
 name: 'Heather Bresch',
 title: 'Former CEO of Mylan N.V.',
 role: 'CEO who oversaw the 500%+ price increase of the EpiPen from $57 to $609 while taking $98 million in personal compensation; daughter of U.S. Senator Joe Manchin',
 riskLevel: 'critical' as const,
 description: 'Heather Bresch (born 1969) served as CEO of Mylan N.V. (later Viatris) from 2012 to 2020. Under her leadership, the price of the EpiPen auto-injector, used by millions of Americans for life-threatening allergic reactions, increased from approximately $57 per pair to over $609, a price increase exceeding 500% over eight years. During this period, Bresch total compensation exceeded $98 million, including a year where she received $25 million in a single compensation package. When called before the House Oversight Committee in 2016, Bresch deflected blame onto the healthcare system while Mylan was simultaneously lobbying for legislation requiring schools to stock EpiPens at the inflated price. Her father, Senator Joe Manchin (D-WV), had sponsored the School Access to Emergency Epinephrine Act in 2013, which drove institutional demand for the product. Bresch also faced controversy over an MBA degree from West Virginia University that was later found to have been improperly awarded; the university president resigned over the scandal. Mylan settled a DOJ investigation in 2017 for $465 million over allegations that it had overcharged Medicaid by misclassifying the EpiPen as a generic drug rather than a branded product, avoiding hundreds of millions in rebates owed to the government.',
 birthDate: '1969-07-09',
 birthPlace: 'Morgantown, West Virginia',
 education: ['West Virginia University (MBA - later found to have been improperly awarded; university president resigned)', 'West Virginia University (B.A.)'],
 affiliations: [
 { name: 'Mylan N.V. (Viatris)', role: 'CEO (2012-2020); oversaw EpiPen pricing strategy and $465 million DOJ Medicaid fraud settlement', type: 'corporation' },
 ],
 controversies: [
 'Oversaw 500%+ price increase of the EpiPen from $57 to over $609 per pair while millions of Americans depended on the device for life-threatening allergic reactions',
 'Received over $98 million in total compensation during the EpiPen price-gouging period, including $25 million in a single year',
 'Father, Senator Joe Manchin, sponsored legislation requiring schools to stock EpiPens, driving institutional demand for the product at inflated prices',
 'MBA degree from West Virginia University was found to have been improperly awarded after intervention by university officials; WVU president Mike Garrison resigned over the scandal',
 'Mylan paid $465 million to settle DOJ allegations that it overcharged Medicaid by misclassifying EpiPen as generic to avoid rebate obligations',
 'Testified before House Oversight Committee in 2016 and deflected blame for pricing onto the healthcare system while Mylan continued lobbying for mandatory school EpiPen purchases',
 'Mylan moved its corporate headquarters to the Netherlands in 2015 via a tax inversion to reduce U.S. tax liability while still benefiting from U.S. government contracts',
 ],
 relatedInvestigations: [
 { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
 ],
 timeline: [
 { date: '2007', event: 'Becomes President of Mylan Inc.' },
 { date: '2012', event: 'Appointed CEO of Mylan N.V.' },
 { date: '2013', event: 'Father Joe Manchin sponsors the School Access to Emergency Epinephrine Act, driving institutional demand for EpiPens' },
 { date: '2016-08', event: 'National outcry over EpiPen price reaching $609; Congress demands hearings' },
 { date: '2016-09', event: 'Testifies before House Oversight Committee; defends pricing by blaming the healthcare system' },
 { date: '2017-08', event: 'Mylan settles with DOJ for $465 million over Medicaid misclassification fraud' },
 { date: '2020', event: 'Retires as CEO of Viatris (Mylan merger with Upjohn); receives multi-million dollar exit package' },
 ],
 sources: [
 { title: 'House Oversight Committee: Reviewing the Rising Price of EpiPens - Bresch Testimony', url: 'https://oversight.house.gov/', date: '2016-09-21' },
 { title: 'DOJ: Mylan Agrees to Pay $465 Million to Resolve False Claims Act Liability for Underpaying EpiPen Rebates', date: '2017-08-17' },
 { title: 'SEC: Mylan N.V. Executive Compensation Filings', date: '2012-2020' },
 ],
 knownAssociates: [
 { name: 'Joe Manchin', relationship: 'Father; U.S. Senator (D-WV) who sponsored school EpiPen mandate legislation while daughter profited from the product', href: '/entities/individuals/joe-manchin' },
 { name: 'Robert Coury', relationship: 'Mylan Executive Chairman who collaborated with Bresch on corporate strategy and received $98 million in a single compensation year' },
 ],
 },







 'harvey-weinstein': {
 name: 'Harvey Weinstein',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Harvey Weinstein. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'herman-cain': {
 name: 'Herman Cain',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Herman Cain. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Herman Cain as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show Herman Cain was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'herschel-walker': {
 name: 'Herschel Walker',
 title: 'Former NFL Player',
 role: 'Serial Liar, Abortion Hypocrite',
 riskLevel: 'medium',
 description: 'Herschel Walker is a former football star who ran for Georgia Senate on an anti-abortion platform despite paying for multiple abortions. He lied about his education, business success, and charitable work. He has multiple secret children and domestic violence allegations.',
 birthDate: 'March 3, 1962',
 birthPlace: 'Wrightsville, Georgia',
 education: ['University of Georgia (did not graduate)'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Professional Sports', role: 'Athlete', type: 'organization' },
 ],
 controversies: [
 'ABORTION PAYMENTS: Paid for girlfriends\' abortions',
 'SECRET CHILDREN: Multiple children kept hidden',
 'FAKE CREDENTIALS: Lied about education, business',
 'DOMESTIC VIOLENCE: Multiple allegations',
 'CHARITY LIES: False charitable giving claims',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Political Hypocrisy', slug: 'political-hypocrisy', severity: 'medium' },
 ],
 timeline: [
 { date: 'March 3, 1962', event: 'Born in Georgia' },
 { date: '1982', event: 'Heisman Trophy winner' },
 { date: '2022', event: 'Abortion payment stories emerge' },
 { date: 'December 2022', event: 'Lost Georgia Senate runoff' },
 ],
 sources: [{ title: 'Wikipedia: Herschel Walker', url: 'https://en.wikipedia.org/wiki/Herschel_Walker' }, { title: 'Bloomberg: Herschel Walker', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Trump-endorsed Georgia Senate candidate 2022', href: '/entities/individuals/donald-trump' },
 { name: 'Dr. Oz', relationship: 'Fellow Trump-endorsed candidate who lost 2022 midterm', href: '/entities/individuals/dr-oz' }
 ],

 },
 'hank-paulson': {
 name: 'Hank Paulson',
 title: '74th U.S. Treasury Secretary; Former Goldman Sachs CEO; Architect of the $700 Billion Wall Street Bailout',
 role: 'U.S. Treasury Secretary (2006-2009); Goldman Sachs Chairman and CEO (1999-2006)',
 riskLevel: 'critical',
 description: 'Henry Merritt "Hank" Paulson Jr. served as the 74th United States Secretary of the Treasury from 2006 to 2009, presiding over the federal government\'s response to the worst financial crisis since the Great Depression. Before entering government, Paulson spent 32 years at Goldman Sachs, rising to Chairman and CEO in 1999. Upon becoming Treasury Secretary, Paulson liquidated his approximately $700 million Goldman Sachs stake tax-free under a federal ethics provision designed to prevent conflicts of interest -- the same provision that created one, as his personal fortune now depended on the survival of the financial system his former firm dominated. When AIG was bailed out with $182 billion in taxpayer funds, $12.9 billion flowed directly to Goldman Sachs as an AIG counterparty, paid at 100 cents on the dollar while ordinary creditors received fractions. Paulson initially presented Congress with a three-page proposal demanding $700 billion in bailout authority with no judicial review, no oversight, and no accountability. When the House initially rejected the plan, he reportedly got on one knee before Speaker Nancy Pelosi to plead for passage. On October 14, 2008, Paulson summoned the CEOs of the nine largest banks to a mandatory meeting at Treasury, placed a one-page term sheet in front of each, and told them they would all accept TARP funds whether they wanted them or not -- distributing $125 billion in a single afternoon. Critics note that Paulson allowed Lehman Brothers (Goldman\'s chief rival) to fail while rescuing AIG (Goldman\'s largest counterparty). He consistently prioritized the interests of Wall Street over homeowners: TARP funds flowed to banks, not to the millions of Americans facing foreclosure. After leaving office, Paulson faced no investigation despite his Goldman ties, the conflict of interest in the AIG bailout, and his role in designing a bailout that socialized Wall Street\'s losses while privatizing its gains.',
 birthDate: 'March 28, 1946',
 birthPlace: 'Palm Beach, Florida, USA',
 education: ['Dartmouth College, BA English (1968)', 'Harvard Business School, MBA (1970)'],
 affiliations: [
 { name: 'U.S. Department of the Treasury', role: '74th Secretary of the Treasury (2006-2009)', type: 'agency' },
 { name: 'Goldman Sachs', role: 'Chairman and CEO (1999-2006); joined firm in 1974', type: 'corporation' },
 { name: 'Paulson Institute', role: 'Founder and Chairman (2011-present); think tank at University of Chicago focused on U.S.-China relations', type: 'organization' },
 ],
 controversies: [
 'Designed and executed the $700 billion TARP bailout that rescued Wall Street while millions of Americans lost their homes',
 'Former Goldman Sachs CEO whose personal $700 million Goldman stake was liquidated tax-free upon entering government',
 'AIG bailout directed $12.9 billion to Goldman Sachs at 100 cents on the dollar while Paulson was Treasury Secretary -- the most direct conflict of interest in the crisis',
 'Allowed Lehman Brothers (Goldman\'s chief rival) to fail while rescuing AIG (Goldman\'s largest counterparty), raising questions about favoritism',
 'Initially presented Congress with a three-page demand for $700 billion with no oversight, no judicial review, and no accountability',
 'Summoned nine bank CEOs on October 14, 2008 and forced them to accept TARP funds, distributing $125 billion in one afternoon',
 'TARP funds flowed entirely to banks, not to homeowners facing foreclosure -- socializing losses while privatizing gains',
 'Reportedly got on one knee before Speaker Pelosi to beg for bailout passage after the House initially rejected it',
 'Faced no investigation or prosecution despite the Goldman-AIG conflict of interest and the design of a bailout that funneled taxpayer money to his former colleagues',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 28, 1946', event: 'Born in Palm Beach, Florida' },
 { date: '1970', event: 'Earns MBA from Harvard Business School; serves as Staff Assistant to the Assistant Secretary of Defense at the Pentagon (1970-1972)' },
 { date: '1974', event: 'Joins Goldman Sachs as an investment banker in Chicago office' },
 { date: '1999', event: 'Becomes Chairman and CEO of Goldman Sachs, succeeding Jon Corzine. Compensation reaches tens of millions annually' },
 { date: 'July 10, 2006', event: 'Sworn in as 74th U.S. Secretary of the Treasury under President George W. Bush. Liquidates ~$700 million Goldman stake tax-free' },
 { date: 'March 2008', event: 'Facilitates JPMorgan\'s emergency acquisition of Bear Stearns with $29 billion in Fed guarantees' },
 { date: 'September 7, 2008', event: 'Places Fannie Mae and Freddie Mac into government conservatorship, committing $200 billion in taxpayer support' },
 { date: 'September 15, 2008', event: 'Lehman Brothers collapses after Paulson declines to provide government support, triggering global panic. Goldman rival eliminated' },
 { date: 'September 16, 2008', event: 'AIG bailed out with $85 billion (eventually $182 billion). Goldman Sachs receives $12.9 billion through AIG at 100 cents on the dollar' },
 { date: 'September 19, 2008', event: 'Presents Congress with 3-page demand for $700 billion bailout authority with no oversight or judicial review' },
 { date: 'October 3, 2008', event: 'Emergency Economic Stabilization Act signed creating TARP after House initially rejected plan and Paulson begged Pelosi on one knee' },
 { date: 'October 14, 2008', event: 'Summons nine bank CEOs to Treasury, forces each to accept TARP funds. $125 billion distributed in one afternoon' },
 { date: 'January 2009', event: 'Leaves Treasury after Obama inauguration. TARP has distributed hundreds of billions to banks while homeowner relief remains negligible' },
 { date: '2011', event: 'Founds the Paulson Institute at University of Chicago, focusing on U.S.-China economic relations and environmental conservation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Paulson', url: 'https://en.wikipedia.org/wiki/Henry_Paulson', date: '' },
 { title: 'Andrew Ross Sorkin, "Too Big to Fail"', url: 'https://www.penguinrandomhouse.com/books/301675/too-big-to-fail-by-andrew-ross-sorkin/', date: '2009' },
 { title: 'FCIC Report: Financial Crisis Inquiry Commission', url: 'https://fcic.law.stanford.edu/', date: 'January 2011' },
 { title: 'ProPublica: Bailout Tracker', url: 'https://projects.propublica.org/bailout/', date: '' },
 ],
 aliases: ['The Hammer', 'Hank'],
 knownAssociates: [
 { name: 'Ben Bernanke', relationship: 'Federal Reserve Chairman who coordinated bailout strategy with Paulson throughout the crisis', href: '/entities/individuals/ben-bernanke' },
 { name: 'Tim Geithner', relationship: 'NY Fed President during crisis, became Treasury Secretary after Paulson; both managed bailout', href: '/entities/individuals/tim-geithner' },
 { name: 'Lloyd Blankfein', relationship: 'Paulson\'s successor as Goldman Sachs CEO; Goldman was largest beneficiary of AIG bailout', href: '/entities/individuals/lloyd-blankfein' },
 { name: 'Robert Rubin', relationship: 'Fellow Goldman-to-Treasury Secretary; architect of deregulation that enabled the crisis', href: '/entities/individuals/robert-rubin' },
 { name: 'Dick Fuld', relationship: 'Lehman Brothers CEO whose firm Paulson chose not to rescue, triggering global panic', href: '/entities/individuals/dick-fuld' },
 ],
 },








 'hal-knight': {
 name: 'Hal Knight',
 title: 'Air Force officer who revealed the falsified reporting to Congress',
 role: 'Air Force officer who revealed the falsified reporting to Congress',
 riskLevel: 'high',
 description: 'Hal Knight. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Hal Knight\'s operations and the regulatory bodies meant to provide oversight.',
 'Investigative analysis reveals Hal Knight was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Air Force officer who revealed the falsified reporting to Congress' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hal Knight', url: 'https://www.google.com/search?q=Hal%20Knight', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Tabert', relationship: 'Connected to convict leasing system Knight enforced', href: '/entities/individuals/martin-tabert' },
 ],
 },









 'hamid-khan': {
 name: 'Hamid Khan',
 title: 'Stop LAPD Spying Coalition organizer who led campaign against predictive policing',
 role: 'Stop LAPD Spying Coalition organizer who led campaign against predictive policing',
 riskLevel: 'high',
 description: 'Hamid Khan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing', slug: 'predictive-policing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Stop LAPD Spying Coalition organizer who led campaign against predictive policing' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hamid Khan', url: 'https://www.google.com/search?q=Hamid%20Khan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Clare Garvie', relationship: 'Fellow surveillance technology critic', href: '/entities/individuals/clare-garvie' },
 { name: 'Jeff Brantingham', relationship: 'PredPol founder whose predictive policing Khan opposed', href: '/entities/individuals/jeff-brantingham' },
 ],
 },

 'harrison-trevathan': {
 name: 'Harrison Trevathan',
 title: 'Mayor of Corbin, Kentucky during 1919 racial cleansing that expelled all Black residents',
 role: 'Mayor of Corbin, Kentucky during 1919 racial cleansing that expelled all Black residents',
 riskLevel: 'high',
 description: 'Harrison Trevathan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Hamid Khan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Harrison Trevathan coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Harrison Trevathan in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Harrison Trevathan', url: 'https://www.google.com/search?q=Harrison%20Trevathan', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Fellow Public Health Service official during Tuskegee era', href: '/entities/individuals/thomas-parran' },
 ],
 },








 'harry-laughlin': {
 name: 'Harry Laughlin',
 title: 'Eugenics Record Office superintendent who drafted model sterilization law adopted by 30 states',
 role: 'Eugenics Record Office superintendent who drafted model sterilization law adopted by 30 states',
 riskLevel: 'high',
 description: 'Harry Laughlin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Eugenics Record Office superintendent who drafted model sterilization law adopted by 30 states' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Harry Laughlin', url: 'https://en.wikipedia.org/wiki/Harry_Laughlin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Davenport', relationship: 'Mentor and Cold Spring Harbor eugenics colleague', href: '/entities/individuals/charles-davenport' },
 { name: 'Carrie Buck', relationship: 'Model eugenics law used to sterilize Buck', href: '/entities/individuals/carrie-buck' },
 { name: 'Oliver Wendell Holmes', relationship: 'Justice who upheld Laughlin\'s sterilization law in Buck v. Bell', href: '/entities/individuals/oliver-wendell-holmes' },
 ],
 },

 'harry-markopolos': {
 name: 'Harry Markopolos',
 title: 'Financial analyst and whistleblower who alerted the SEC to the fraud starting in 2000',
 role: 'Financial analyst and whistleblower who alerted the SEC to the fraud starting in 2000',
 riskLevel: 'high',
 description: 'Harry Markopolos. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Securities and Exchange Commission', role: 'SEC Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: '2000', event: 'documented in this investigative archive for their role as Financial analyst and whistleblower who alerted the SEC to the fraud starting in 2000.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Harry Markopolos', url: 'https://en.wikipedia.org/wiki/Harry_Markopolos', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Whistleblower who warned SEC about Madoff scam for a decade', href: '/entities/individuals/bernie-madoff' },
 { name: 'David Kotz', relationship: 'SEC IG who investigated why Markopolos\'s warnings were ignored', href: '/entities/individuals/david-kotz' },
 { name: 'Christopher Cox', relationship: 'SEC chairman who failed to act on Markopolos\'s tips', href: '/entities/individuals/christopher-cox' },
 ],
 },

 'harry-truman': {
 name: 'Harry Truman',
 title: 'President who signed Executive Order 9835 creating the Federal Loyalty Program in 1947',
 role: 'President who signed Executive Order 9835 creating the Federal Loyalty Program in 1947',
 riskLevel: 'high',
 description: 'Harry Truman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Harry Markopolos', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: '1947', event: 'documented in this investigative archive for their role as President who signed Executive Order 9835 creating the Federal Loyalty Program in 1947.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Harry Truman', url: 'https://en.wikipedia.org/wiki/Harry_Truman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dwight D. Eisenhower', relationship: 'Successor as president', href: '/entities/individuals/dwight-d-eisenhower' },
 { name: 'J. Robert Oppenheimer', relationship: 'Truman ordered atomic bombs Oppenheimer built', href: '/entities/individuals/j-robert-oppenheimer' },
 { name: 'Joseph McCarthy', relationship: 'McCarthy attacked Truman administration over communism', href: '/entities/individuals/joseph-mccarthy' },
 { name: 'Douglas MacArthur', relationship: 'Fired MacArthur during Korean War', href: '/entities/individuals/douglas-macarthur' },
 ],
 },

 'hassan-sheikh-mohamud': {
 name: 'Hassan Sheikh Mohamud',
 title: 'Somali President who requested continued U.S. military support',
 role: 'Somali President who requested continued U.S. military support',
 riskLevel: 'high',
 description: 'Hassan Sheikh Mohamud. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: 'Wikipedia: Harry Truman', type: 'agency' },
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Hassan Sheikh Mohamud as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Somalia Intervention', slug: 'somalia-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Somali President who requested continued U.S. military support' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hassan Sheikh Mohamud', url: 'https://en.wikipedia.org/wiki/Hassan_Sheikh_Mohamud', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mohamed Farrah Aidid', relationship: 'Predecessor era Somali warlord', href: '/entities/individuals/mohamed-farrah-aidid' },
 ],
 },









 'hector-gramajo': {
 name: 'Hector Gramajo',
 title: 'Guatemalan Defense Minister (SOA graduate), responsible for Maya massacres',
 role: 'Guatemalan Defense Minister (SOA graduate), responsible for Maya massacres',
 riskLevel: 'high',
 description: 'Hector Gramajo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Hassan Sheikh Mohamud', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Guatemalan Defense Minister (SOA graduate), responsible for Maya massacres' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hector Gramajo', url: 'https://en.wikipedia.org/wiki/Hector_Gramajo', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'Guatemalan military under Rios Montt during genocide', href: '/entities/individuals/efrain-rios-montt' },
 { name: 'Rigoberta Menchu', relationship: 'Nobel laureate who fought for justice against Gramajo\'s atrocities', href: '/entities/individuals/rigoberta-menchu' },
 ],
 },

 'heinz-jakob-neusser': {
 name: 'Heinz-Jakob Neusser',
 title: 'Head of Development for the VW brand; charged in U.S. indictment for conspiracy',
 role: 'Head of Development for the VW brand; charged in U.S. indictment for conspiracy',
 riskLevel: 'high',
 description: 'Heinz-Jakob Neusser. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Hector Gramajo', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Heinz-Jakob Neusser facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative journalists have documented a pattern of revolving-door employment between Heinz-Jakob Neusser\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of Development for the VW brand; charged in U.S. indictment for conspiracy' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Heinz-Jakob Neusser', url: 'https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Herbert Diess', relationship: 'VW executive during emissions scandal', href: '/entities/individuals/herbert-diess' },
 { name: 'Matthias Mueller', relationship: 'VW CEO who managed emission scandal aftermath', href: '/entities/individuals/matthias-mueller' },
 ],
 },








 'henry-cabot-lodge-jr': {
 name: 'Henry Cabot Lodge Jr.',
 title: 'U.S. Ambassador to the UN who blocked international investigation of the coup',
 role: 'U.S. Ambassador to the UN who blocked international investigation of the coup',
 riskLevel: 'high',
 description: 'Henry Cabot Lodge Jr.. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Heinz-Jakob Neusser', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Ambassador to the UN who blocked international investigation of the coup' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Cabot Lodge Jr.', url: 'https://en.wikipedia.org/wiki/Henry_Cabot_Lodge_Jr.', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dwight D. Eisenhower', relationship: 'Served as UN Ambassador under Eisenhower', href: '/entities/individuals/dwight-d-eisenhower' },
 { name: 'Dean Rusk', relationship: 'Fellow official overseeing Vietnam involvement', href: '/entities/individuals/dean-rusk' },
 ],
 },

 'henry-clay-frick': {
 name: 'Henry Clay Frick',
 title: 'Carnegie Steel executive who hired Pinkertons to attack striking workers at Homestead in 1892',
 role: 'Carnegie Steel executive who hired Pinkertons to attack striking workers at Homestead in 1892',
 riskLevel: 'high',
 description: 'Henry Clay Frick. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Henry Cabot Lodge Jr.', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [
 { date: '1892', event: 'documented in this investigative archive for their role as Carnegie Steel executive who hired Pinkertons to attack striking workers at Homestead in 1892.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Clay Frick', url: 'https://en.wikipedia.org/wiki/Henry_Clay_Frick', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Andrew Carnegie', relationship: 'Business partner at Carnegie Steel', href: '/entities/individuals/andrew-carnegie' },
 { name: 'Allan Pinkerton', relationship: 'Hired Pinkerton agents to break Homestead Strike', href: '/entities/individuals/allan-pinkerton' },
 ],
 },

 'henry-dawes': {
 name: 'Henry Dawes',
 title: 'U.S. Senator and author of the Dawes Act (1887), which dissolved communal tribal landholdings and redistributed them as individual allotments. The Act resulted in the loss of approximately 90 million acres (two-thirds of all remaining tribal land) to white settlers and speculators.',
 role: 'U.S. Senator and author of the Dawes Act (1887), which dissolved communal tribal landholdings and redistributed them as individual allotments. The Act resulted in the loss of approximately 90 million acres (two-thirds of all remaining tribal land) to white settlers and speculators.',
 riskLevel: 'high',
 description: 'Henry Dawes. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: '1887', event: 'Senator and author of the Dawes Act (1887), which dissolved communal tribal landholdings and redistributed them as individual allotments' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Dawes', url: 'https://en.wikipedia.org/wiki/Henry_Dawes', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Theodore Roosevelt', relationship: 'President during era of Dawes Act allotment implementation', href: '/entities/individuals/theodore-roosevelt' },
 { name: 'Richard Henry Pratt', relationship: 'Fellow architect of assimilationist Native American policy', href: '/entities/individuals/richard-henry-pratt' },
 ],
 },

 'henry-knox': {
 name: 'Henry Knox',
 title: 'First U.S. Secretary of War. Established early federal Indian policy emphasizing "civilization "programs and land cessions through coerced treaties, setting precedents for systematic dispossession that persisted for over a century.',
 role: 'First U.S. Secretary of War. Established early federal Indian policy emphasizing "civilization "programs and land cessions through coerced treaties, setting precedents for systematic dispossession that persisted for over a century.',
 riskLevel: 'high',
 description: 'Henry Knox. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'First U.S. Secretary of War. Established early fed', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as First U.S. Secretary of War. Established early federal Indian policy emphasizing "civilization "prog' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Knox', url: 'https://en.wikipedia.org/wiki/Henry_Knox', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Armstrong Custer', relationship: 'Early war department figure whose policies shaped Indian Wars', href: '/entities/individuals/george-armstrong-custer' },
 ],
 },

 'henry-shaw': {
 name: 'Henry Shaw',
 title: 'Exxon research scientist who authored internal reports confirming anthropogenic climate change in the early 1980s',
 role: 'Exxon research scientist who authored internal reports confirming anthropogenic climate change in the early 1980s',
 riskLevel: 'high',
 description: 'Henry Shaw. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Henry Knox', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Henry Shaw was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Henry Shaw\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Exxon research scientist who authored internal reports confirming anthropogenic climate change in th' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Shaw', url: 'https://en.wikipedia.org/wiki/Henry_Shaw', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Morgan', relationship: 'Fellow Bureau of Indian Affairs official', href: '/entities/individuals/thomas-morgan' },
 ],
 },








 'henry-waxman': {
 name: 'Henry Waxman',
 title: 'U.S. Congressman who chaired the 1994 hearings where tobacco CEOs denied nicotine\'s addictiveness',
 role: 'U.S. Congressman who chaired the 1994 hearings where tobacco CEOs denied nicotine\'s addictiveness',
 riskLevel: 'high',
 description: 'Henry Waxman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Henry Waxman coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Henry Waxman as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Conspiracy', slug: 'big-tobacco-lies', severity: 'critical' },
 ],
 timeline: [
 { date: '1994', event: 'Congressman who chaired the 1994 hearings where tobacco CEOs denied nicotine' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Henry Waxman', url: 'https://en.wikipedia.org/wiki/Henry_Waxman', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'C. Everett Koop', relationship: 'Worked with Koop on tobacco regulation', href: '/entities/individuals/c-everett-koop' },
 { name: 'Geoffrey Bible', relationship: 'Philip Morris CEO whom Waxman grilled in Congress', href: '/entities/individuals/geoffrey-bible' },
 ],
 },








 'herbert-diess': {
 name: 'Herbert Diess',
 title: 'VW CEO (2018-2022); faced charges for alleged failure to disclose the scandal to investors in time',
 role: 'VW CEO (2018-2022); faced charges for alleged failure to disclose the scandal to investors in time',
 riskLevel: 'high',
 description: 'Herbert Diess. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Henry Waxman', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: '2018', event: 'documented in this investigative archive for their role as VW CEO (2018-2022); faced charges for alleged failure to disclose the scandal to investors in time.' },
 { date: '2022', event: 'documented in this investigative archive for their role as VW CEO (2018-2022); faced charges for alleged failure to disclose the scandal to investors in time.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Herbert Diess', url: 'https://en.wikipedia.org/wiki/Herbert_Diess', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Matthias Mueller', relationship: 'Predecessor as VW CEO', href: '/entities/individuals/matthias-mueller' },
 { name: 'Oliver Schmidt', relationship: 'VW executive imprisoned for emissions fraud during Diess era', href: '/entities/individuals/oliver-schmidt' },
 { name: 'Daniel Carder', relationship: 'WVU researcher who discovered VW cheat device', href: '/entities/individuals/daniel-carder' },
 ],
 },

 'herbert-needleman': {
 name: 'Herbert Needleman',
 title: 'Researcher who proved low-level lead exposure harmed children\'s IQ, industry tried to destroy his career',
 role: 'Researcher who proved low-level lead exposure harmed children\'s IQ, industry tried to destroy his career',
 riskLevel: 'high',
 description: 'Herbert Needleman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Researcher who proved low-level lead exposure harmed children' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Herbert Needleman', url: 'https://en.wikipedia.org/wiki/Herbert_Needleman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Clair Patterson', relationship: 'Fellow scientist who fought lead industry', href: '/entities/individuals/clair-patterson' },
 { name: 'Robert Kehoe', relationship: 'Lead industry scientist who opposed Needleman\'s research', href: '/entities/individuals/robert-kehoe' },
 { name: 'Alice Hamilton', relationship: 'Pioneer industrial toxicologist whose work Needleman continued', href: '/entities/individuals/alice-hamilton' },
 ],
 },

 'herman-wallace': {
 name: 'Herman Wallace',
 title: 'Angola 3 member held in solitary for 41 years; released 3 days before his death from liver cancer',
 role: 'Angola 3 member held in solitary for 41 years; released 3 days before his death from liver cancer',
 riskLevel: 'high',
 description: 'Herman Wallace. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Angola 3 member held in solitary for 41 years; released 3 days before his death from liver cancer' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Herman Wallace', url: 'https://en.wikipedia.org/wiki/Herman_Wallace', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Albert Woodfox', relationship: 'Fellow Angola Three member held in solitary for decades', href: '/entities/individuals/albert-woodfox' },
 { name: 'Robert King', relationship: 'Fellow Angola Three member', href: '/entities/individuals/robert-king' },
 { name: 'Burl Cain', relationship: 'Angola Prison warden who kept Wallace in solitary', href: '/entities/individuals/burl-cain' },
 ],
 },

 'hiram-price': {
 name: 'Hiram Price',
 title: 'Commissioner of Indian Affairs (1881-1885). Oversaw rapid expansion of boarding schools during the early Carlisle era, authorized withholding of rations from families who refused to send children.',
 role: 'Commissioner of Indian Affairs (1881-1885). Oversaw rapid expansion of boarding schools during the early Carlisle era, authorized withholding of rations from families who refused to send children.',
 riskLevel: 'high',
 description: 'Hiram Price. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Commissioner of Indian Affairs (1881-1885). Oversa', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Hiram Price facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals Hiram Price was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'high' },
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hiram Price', url: 'https://en.wikipedia.org/wiki/Hiram_Price', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Dawes', relationship: 'Fellow architect of Native American allotment policy', href: '/entities/individuals/henry-dawes' },
 { name: 'Richard Henry Pratt', relationship: 'Boarding school creator during Price\'s BIA tenure', href: '/entities/individuals/richard-henry-pratt' },
 ],
 },

















 'hoan-ton-that': {
 name: 'Hoan Ton-That',
 title: 'CEO of Clearview AI; scraped 30B+ images from the internet for facial recognition database',
 role: 'CEO of Clearview AI; scraped 30B+ images from the internet for facial recognition database',
 riskLevel: 'high',
 description: 'Hoan Ton-That. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Hiram Price', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of Clearview AI; scraped 30B+ images from the internet for facial recognition database' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hoan Ton-That', url: 'https://en.wikipedia.org/wiki/Hoan_Ton-That', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joy Buolamwini', relationship: 'AI researcher who criticizes facial recognition Clearview AI built', href: '/entities/individuals/joy-buolamwini' },
 { name: 'Clare Garvie', relationship: 'Surveillance researcher who documented Clearview\'s reach', href: '/entities/individuals/clare-garvie' },
 ],
 },

 'homer-hoyt': {
 name: 'Homer Hoyt',
 title: 'FHA economist who created racial hierarchy for property values',
 role: 'FHA economist who created racial hierarchy for property values',
 riskLevel: 'high',
 description: 'Homer Hoyt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Hoan Ton-That', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FHA economist who created racial hierarchy for property values' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Homer Hoyt', url: 'https://en.wikipedia.org/wiki/Homer_Hoyt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Frederick Babcock', relationship: 'Fellow architect of racist real estate appraisal', href: '/entities/individuals/frederick-babcock' },
 { name: 'Robert Moses', relationship: 'Contemporary urban planner who enforced housing segregation', href: '/entities/individuals/robert-moses' },
 ],
 },

 'hope-macallister': {
 name: 'Hope MacAllister',
 title: 'Lead ATF case agent for Fast and Furious',
 role: 'Lead ATF case agent for Fast and Furious',
 riskLevel: 'high',
 description: 'Hope MacAllister. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Homer Hoyt', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Hope MacAllister, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Lead ATF case agent for Fast and Furious' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hope MacAllister', url: 'https://en.wikipedia.org/wiki/ATF_gunwalking_scandal', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Dave Archambault II', relationship: 'Standing Rock leader during DAPL fight MacAllister supported', href: '/entities/individuals/dave-archambault-ii' },
 ],
 },









 'howard-jones': {
 name: 'Howard Jones',
 title: 'Former US Ambassador who laid groundwork for close ties with Indonesian military',
 role: 'Former US Ambassador who laid groundwork for close ties with Indonesian military',
 riskLevel: 'high',
 description: 'Howard Jones. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Howard Jones, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former US Ambassador who laid groundwork for close ties with Indonesian military' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Howard Jones', url: 'https://en.wikipedia.org/wiki/Howard_Jones', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Daniel Ellsberg', relationship: 'Fellow figure who documented government deception about warfare', href: '/entities/individuals/daniel-ellsberg' },
 ],
 },








 'howard-udell': {
 name: 'Howard Udell',
 title: 'Former General Counsel of Purdue Pharma; Convicted of Federal Misbranding Charges (2007)',
 role: 'Purdue Pharma general counsel who provided legal oversight of OxyContin marketing and pleaded guilty to misbranding; Ogrosky memo recommended felony charges',
 riskLevel: 'high',
 description: 'Howard Udell served as Executive Vice President and General Counsel of Purdue Pharma, the company that manufactured OxyContin. As the company\'s chief legal officer, Udell was responsible for legal oversight of Purdue\'s marketing practices, regulatory compliance, and disclosure obligations during the period when OxyContin was marketed with false claims about its addiction risk. In October 2006, Kirk Ogrosky, Deputy Chief of the DOJ Fraud Division, wrote an internal memorandum recommending that Udell and fellow executives Michael Friedman and Paul Goldenheim be charged with felonies including wire fraud and money laundering based on evidence that Purdue executives committed federal crimes to boost OxyContin sales. Instead of pursuing felony charges, the DOJ negotiated a plea bargain. On May 10, 2007, Udell pleaded guilty to a single misdemeanor count of misbranding OxyContin "with the intent to defraud or mislead." He was sentenced to 400 hours of community service in drug treatment programs and paid a personal fine as part of a combined $34.5 million penalty shared with Friedman and Goldenheim. Udell received no prison time. As general counsel, Udell was uniquely positioned to ensure the company\'s marketing complied with FDA regulations and the Controlled Substances Act, making his role in the fraud particularly significant. The plea deal was widely criticized as wholly inadequate given the scale of harm: by 2007, OxyContin had already contributed to thousands of overdose deaths and hundreds of thousands of addictions. Udell died on June 19, 2013.',
 education: [],
 affiliations: [
 { name: 'Purdue Pharma', role: 'Executive Vice President and General Counsel; provided legal oversight of OxyContin marketing and regulatory compliance', type: 'corporation' as const },
 ],
 controversies: [
 'Ogrosky memo (October 2006) recommended felony charges including wire fraud and money laundering against Udell, but DOJ accepted misdemeanor plea instead',
 'As general counsel, was responsible for legal compliance of the marketing practices that falsely claimed OxyContin was less addictive',
 'Pleaded guilty to misbranding OxyContin "with the intent to defraud or mislead" but received only 400 hours community service -- no prison time',
 'Combined personal fine of $34.5 million (shared with Friedman and Goldenheim) was a fraction of OxyContin revenue during his tenure',
 'Legal oversight role meant Udell was uniquely positioned to have known the marketing claims violated FDA regulations and the Controlled Substances Act',
 'No Sackler family member was charged in the 2007 case despite directing the marketing strategy Udell oversaw legally',
 ],
 charges: [
 { statute: '21 U.S.C. Ã‚Â§ 331 -- FDCA Misbranding', description: 'Pleaded guilty on May 10, 2007 to misbranding OxyContin "with the intent to defraud or mislead"; sentenced to 400 hours community service; no prison time', category: 'Drug Misbranding', source: 'DOJ: United States v. Purdue Frederick Co., W.D. Va. (2007)' },
 ],
 relatedInvestigations: [
 { title: 'Opioid Crisis: Corporate Mass Murder', slug: 'opioid-crisis-corporate-mass-murder', severity: 'critical' },
 { title: 'Purdue Pharma OxyContin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: '2006-10', event: 'Kirk Ogrosky, DOJ Fraud Division Deputy Chief, writes internal memo recommending felony charges against Udell, Friedman, and Goldenheim' },
 { date: '2007-05-10', event: 'Pleads guilty to federal misbranding charge; Purdue pays $634.5 million corporate fine; shares $34.5 million personal fine with Friedman and Goldenheim' },
 { date: '2007', event: 'Sentenced to 400 hours of community service in drug treatment programs; receives no prison time despite felony recommendation' },
 { date: '2013-06-19', event: 'Howard Udell dies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: United States v. Purdue Frederick Co. -- 2007 Guilty Plea', url: 'https://www.justice.gov/archive/opa/pr/2007/May/07_civ_370.html', date: '2007-05-10' },
 { title: 'Patrick Radden Keefe: Empire of Pain -- The Secret History of the Sackler Dynasty', url: 'https://www.penguinrandomhouse.com/books/612024/empire-of-pain-by-patrick-radden-keefe/', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Friedman', relationship: 'Purdue president who pleaded guilty to misbranding alongside Udell in 2007; shared $34.5M personal fine', href: '/entities/individuals/michael-friedman' },
 { name: 'Paul Goldenheim', relationship: 'Purdue chief medical officer who pleaded guilty to misbranding alongside Udell in 2007', href: '/entities/individuals/paul-goldenheim' },
 { name: 'Richard Sackler', relationship: 'Sackler family patriarch who directed the OxyContin marketing strategy that Udell oversaw legally', href: '/entities/individuals/richard-sackler' },
 ],
 },

 'hudson-austin': {
 name: 'Hudson Austin',
 title: 'General who took power after Bishop\'s assassination',
 role: 'General who took power after Bishop\'s assassination',
 riskLevel: 'high',
 description: 'Hudson Austin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Grenada Invasion', slug: 'grenada-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as General who took power after Bishop' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hudson Austin', url: 'https://en.wikipedia.org/wiki/Hudson_Austin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernard Coard', relationship: 'Coup partner in Grenada who overthrew Maurice Bishop', href: '/entities/individuals/bernard-coard' },
 { name: 'Maurice Bishop', relationship: 'Grenadian leader overthrown and killed by Austin', href: '/entities/individuals/maurice-bishop' },
 ],
 },

 'hugh-thompson-jr': {
 name: 'Hugh Thompson Jr.',
 title: 'Army helicopter pilot who intervened to stop the My Lai massacre by landing his helicopter between American soldiers and fleeing civilians, ordering his crew to fire on U.S. troops if they continued killing. He was initially vilified and received death threats, not recognized as a hero until 30 years later.',
 role: 'Army helicopter pilot who intervened to stop the My Lai massacre by landing his helicopter between American soldiers and fleeing civilians, ordering his crew to fire on U.S. troops if they continued killing. He was initially vilified and received death threats, not recognized as a hero until 30 years later.',
 riskLevel: 'high',
 description: 'Hugh Thompson Jr.. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Army helicopter pilot who intervened to stop the My Lai massacre by landing his helicopter between A' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hugh Thompson Jr.', url: 'https://en.wikipedia.org/wiki/Hugh_Thompson_Jr.', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'William Calley', relationship: 'Officer whose My Lai massacre Thompson tried to stop', href: '/entities/individuals/william-calley' },
 { name: 'Seymour Hersh', relationship: 'Journalist who exposed My Lai massacre Thompson witnessed', href: '/entities/individuals/seymour-hersh' },
 ],
 },

 'hughes-van-ellis': {
 name: 'Hughes Van Ellis',
 title: 'Survivor and WWII veteran who testified for reparations',
 role: 'Survivor and WWII veteran who testified for reparations',
 riskLevel: 'high',
 description: 'Hughes Van Ellis. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Survivor and WWII veteran who testified for reparations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hughes Van Ellis', url: 'https://en.wikipedia.org/wiki/Hughes_Van_Ellis', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Viola Fletcher', relationship: 'Fellow elderly Tulsa Race Massacre survivor seeking reparations', href: '/entities/individuals/viola-fletcher' },
 { name: 'Lessie Randle', relationship: 'Fellow Tulsa Massacre survivor and descendant', href: '/entities/individuals/lessie-randle' },
 ],
 },

 'hugo-banzer': {
 name: 'Hugo Banzer',
 title: 'Bolivian dictator (1971-1978) and Condor participant. His CIA-backed regime detained 14,000+ political prisoners, tortured thousands, and coordinated cross-border operations with Chile and Argentina',
 role: 'Bolivian dictator (1971-1978) and Condor participant. His CIA-backed regime detained 14,000+ political prisoners, tortured thousands, and coordinated cross-border operations with Chile and Argentina',
 riskLevel: 'high',
 description: 'Hugo Banzer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Congressional hearing transcripts reference Hugo Banzer in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Public filings and regulatory records indicate Hugo Banzer facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Hugo Banzer', url: 'https://en.wikipedia.org/wiki/Hugo_Banzer', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'Kissinger supported Banzer\'s coup as part of Operation Condor', href: '/entities/individuals/henry-kissinger' },
 ],
 },

















 'henry-stimson': {
 name: 'Henry Stimson',
 title: 'Secretary of War who recommended and implemented Japanese American internment through Executive Order 9066',
 role: 'Government Official',
 riskLevel: 'critical',
 description: 'Henry Stimson. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'US Department of War', role: 'Secretary of War', type: 'agency' },
 ],
 controversies: [
 'Recommended and oversaw implementation of Japanese American internment affecting 120,000 people',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Recommended Executive Order 9066 authorizing Japanese American internment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John L. DeWitt', relationship: 'War Secretary who supported DeWitt\'s Japanese internment', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Francis Biddle', relationship: 'AG whose objections Stimson overrode on internment', href: '/entities/individuals/francis-biddle' },
 { name: 'Harry Truman', relationship: 'Advised Truman on atomic bomb decision', href: '/entities/individuals/harry-truman' },
 ],
 },

 'hubertus-strughold': {
 name: 'Hubertus Strughold',
 title: 'Nazi scientist recruited through Operation Paperclip, called the "Father of Space Medicine "despite links to human experimentation',
 role: 'Scientist',
 riskLevel: 'critical',
 description: 'Hubertus Strughold. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'US Air Force', role: 'Space Medicine Researcher (via Operation Paperclip)', type: 'agency' },
 ],
 controversies: [
 'Nazi scientist with links to Dachau human experiments, recruited by US despite war crimes connections',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'critical' },
 ],
 timeline: [
 { date: '1947', event: 'Brought to the US through Operation Paperclip despite connections to Nazi human experimentation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Operation Paperclip', url: '/investigations/operation-paperclip', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', href: '/entities/individuals/wernher-von-braun' },
 { name: 'Walter Schreiber', relationship: 'Fellow Paperclip scientist', href: '/entities/individuals/walter-schreiber' },
 { name: 'Kurt Blome', relationship: 'Fellow Nazi Paperclip scientist', href: '/entities/individuals/kurt-blome' },
 ],
 },

 'henry-paulson': {
 name: 'Henry Paulson',
 title: '74th United States Secretary of the Treasury',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Henry Paulson served as Treasury Secretary from 2006 to 2009, managing the US government\'s response to the 2008 financial crisis. He orchestrated the Troubled Asset Relief Program (TARP), a $700 billion bank bailout. Prior to his government role, he served as CEO of Goldman Sachs, raising questions about conflicts of interest in his crisis management decisions, particularly the bailout of AIG which paid Goldman Sachs $12.9 billion.',
 education: [],
 affiliations: [
 { name: 'US Department of the Treasury', role: 'Secretary (2006-2009)', type: 'agency' },
 { name: 'Goldman Sachs', role: 'CEO (1999-2006)', type: 'corporation' },
 ],
 controversies: [
 'Orchestrated $700 billion TARP bailout that primarily benefited large financial institutions',
 'Former Goldman Sachs CEO, Goldman received $12.9 billion through AIG bailout',
 'Allowed Lehman Brothers to fail while saving other institutions',
 'Critics argue bailout socialized losses while privatizing gains',
 ],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1999', event: 'Became CEO of Goldman Sachs' },
 { date: '2006', event: 'Appointed Treasury Secretary under President George W. Bush' },
 { date: '2008', event: 'Managed government response to financial crisis, orchestrated TARP bailout' },
 { date: '2008', event: 'Allowed Lehman Brothers to collapse, triggering global panic' },
 { date: '2009', event: 'Left Treasury after Obama inauguration' },
 ],
 sources: [
 { title: '2008 Financial Crisis', url: '/investigations/2008-financial-crisis' },
 ],
 knownAssociates: [
 { name: 'Tim Geithner', relationship: 'Fed chair during Paulson\'s Treasury term; both managed 2008 crisis', href: '/entities/individuals/tim-geithner' },
 { name: 'Robert Rubin', relationship: 'Fellow Goldman-to-Treasury Secretary', href: '/entities/individuals/robert-rubin' },
 { name: 'Lloyd Blankfein', relationship: 'Goldman CEO during Paulson\'s bank bailout', href: '/entities/individuals/lloyd-blankfein' }
 ],

 },
 'haley-robson': {
 name: 'Haley Robson',
 title: 'Victim-Turned-Recruiter',
 role: 'Recruitment Pipeline',
 riskLevel: 'high',
 description: 'Haley Robson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Recruited underage girls for Epstein for $200 per girl',
 'Transitioned from victim to active recruiter',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2005', event: 'Identified during Palm Beach investigation' },
 { date: '2006', event: 'Became cooperating witness' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Palm Beach Police Investigation', url: 'https://www.documentcloud.org/documents/1508273-palm-beach-police-investigation', date: '2005' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim then recruiter', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Directed recruiting operations', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Sarah Kellen', relationship: 'Fellow recruiter/scheduler', href: '/entities/individuals/sarah-kellen' },
 { name: 'Adriana Ross', relationship: 'Fellow assistant with immunity', href: '/entities/individuals/adriana-ross' },
 { name: 'Lesley Groff', relationship: 'Executive assistant, scheduling', href: '/entities/individuals/lesley-groff' },
 ],
 },

 'hugh-grant-monsanto': {
 name: 'Hugh Grant (Monsanto)',
 title: 'Former Monsanto CEO',
 role: 'Led Roundup/Glyphosate Defense',
 riskLevel: 'high',
 description: 'CEO of Monsanto (2003-2018) who oversaw the company during its most controversial period, including the defense of Roundup weedkiller against cancer claims and the push for GMO adoption. Led Monsanto through the Bayer acquisition in 2018, just before massive Roundup lawsuit losses.',
 education: ['University of Edinburgh'],
 affiliations: [
 { name: 'Monsanto', role: 'CEO', type: 'corporation' },
 ],
 controversies: [
 'Defended Roundup despite internal knowledge of cancer links',
 'Aggressive legal and PR tactics against critics',
 'Monsanto ghost-wrote scientific studies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'critical' },
 ],
 timeline: [
 { date: '2003', event: 'Became Monsanto CEO' },
 { date: '2018', event: 'Bayer acquired Monsanto for $63B' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Reuters: Monsanto Roundup', url: 'https://www.reuters.com/investigates/special-report/glyphosate-cancer-costs-analysis/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'hamid-karzai': {
 name: 'Hamid Karzai',
 title: 'Former President of Afghanistan',
 role: 'U.S.-Backed Afghan Leader',
 riskLevel: 'medium',
 description: 'First president of Afghanistan after the U.S. invasion (2001-2014). Initially backed by the U.S. but his government became synonymous with corruption and ineffective governance. Brother Ahmed Wali Karzai was a CIA asset and alleged drug trafficker.',
 education: ['Himachal Pradesh University, M.A.'],
 affiliations: [
 { name: 'Government of Afghanistan', role: 'President', type: 'agency' },
 ],
 controversies: [
 'Government plagued by corruption',
 'Brother was CIA asset and alleged drug trafficker',
 'Failed to build effective Afghan governance',
 'Increasingly critical of U.S. military operations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Afghanistan Papers', slug: 'afghanistan-papers', severity: 'critical' },
 ],
 timeline: [
 { date: '2001', event: 'Became interim leader of Afghanistan' },
 { date: '2004', event: 'Elected president' },
 { date: '2014', event: 'Left office' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Afghanistan Papers', url: 'https://www.washingtonpost.com/graphics/2019/investigations/afghanistan-papers/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'U.S. President who installed him', href: '/entities/individuals/george-w-bush' },
 ],
 },


 'hhs': {
 name: 'Hhs',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Hhs. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Hhs and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2010-10-02', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2023-11-25', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2010-10-02' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-11-25' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-01-06' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },



 'henry-kravis': {
 name: 'Henry Kravis',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Henry Kravis. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Henry Kravis was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'howard-marks': {
 name: 'Howard Marks',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Howard Marks. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Howard Marks coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'hannah-gutierrez-reed': {
 name: 'Hannah Gutierrez-Reed',
 title: 'Rust armorer convicted of involuntary manslaughter',
 role: '',
 riskLevel: 'low',
 description: 'Hannah Gutierrez-Reed. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Alec Baldwin', role: 'Connected Entity', type: 'organization' },
 ],
 controversies: [
 'Cross-reference analysis with Alec Baldwin indicates overlapping involvement in institutional networks flagged for accountability gaps, including potential regulatory capture, conflicts of interest, and failures of governmental oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Alec Baldwin', relationship: 'Connected Entity', href: '/entities/individuals/alec-baldwin' },
 ],
 },
  'hendrik-verwoerd': {
    name: 'Hendrik Verwoerd',
    title: 'Prime Minister of South Africa (1958-1966)',
    role: 'Architect of Grand Apartheid',
    riskLevel: 'critical',
    description: 'Hendrik Frensch Verwoerd is known as the "Architect of Apartheid" for designing and implementing the comprehensive system of racial segregation in South Africa. As Minister of Native Affairs (1950-58) and then Prime Minister, he created the Bantustan system, forcibly relocated millions of Black South Africans, implemented the Bantu Education Act to deliberately limit Black education, and oversaw the Sharpeville massacre. His policies systematically stripped millions of their citizenship, dignity, and rights.',
    birthDate: '1901-09-08',
    birthPlace: 'Amsterdam, Netherlands',
    deathDate: '1966-09-06',
    education: ['Stellenbosch University - PhD in Psychology', 'Universities of Hamburg, Leipzig, and Berlin'],
    affiliations: [
      { name: 'South African Government', role: 'Prime Minister (1958-1966)', type: 'agency' },
      { name: 'National Party', role: 'Leader', type: 'organization' },
      { name: 'Department of Native Affairs', role: 'Minister (1950-1958)', type: 'agency' },
    ],
    controversies: [
      'Designed the Bantustan/homelands system that stripped Black South Africans of citizenship and confined them to 13% of the land',
      'Implemented the Bantu Education Act (1953) deliberately providing inferior education to Black children - stated: "There is no place for [the Bantu] in the European community above the level of certain forms of labor"',
      'Oversaw the Sharpeville massacre (1960) where police killed 69 unarmed protesters, many shot in the back',
      'Group Areas Act enforcement: forcibly relocated over 3.5 million Black, Coloured, and Indian South Africans from their homes',
      'Banned the ANC and PAC after Sharpeville, driving resistance underground',
      'Created pass law system requiring Black South Africans to carry identification documents at all times',
      'Sympathized with Nazi Germany during WWII as editor of Die Transvaler newspaper',
      'Assassinated by Dimitri Tsafendas in parliament on September 6, 1966',
    ],
    charges: [
      { statute: 'International Convention on the Suppression and Punishment of the Crime of Apartheid (1973)', description: 'Designed and implemented the apartheid system - declared a crime against humanity by the UN', category: 'Crimes Against Humanity' },
      { statute: 'Crimes Against Humanity - Persecution', description: 'Systematic racial persecution through legislation depriving millions of basic rights', category: 'Crimes Against Humanity' },
      { statute: 'Crimes Against Humanity - Forced Transfer', description: 'Forced relocation of 3.5+ million people based on race under Group Areas Act', category: 'Crimes Against Humanity' },
    ],
    relatedInvestigations: [
      { title: 'Apartheid in South Africa', slug: 'apartheid-south-africa', severity: 'critical' },
    ],
    timeline: [
      { date: '1901-09-08', event: 'Born in Amsterdam, Netherlands; family emigrates to South Africa' },
      { date: '1937', event: 'Becomes editor of Die Transvaler, promoting Afrikaner nationalism' },
      { date: '1950', event: 'Appointed Minister of Native Affairs; begins designing grand apartheid' },
      { date: '1953', event: 'Bantu Education Act passes - deliberately limits education for Black South Africans' },
      { date: '1958', event: 'Becomes Prime Minister of South Africa' },
      { date: '1960-03-21', event: 'Sharpeville massacre - 69 unarmed protesters killed' },
      { date: '1960-04', event: 'Bans ANC and PAC; declares state of emergency' },
      { date: '1961-05-31', event: 'South Africa leaves the Commonwealth and becomes a republic' },
      { date: '1966-09-06', event: 'Assassinated by Dimitri Tsafendas in parliament' },
    ],
    sources: [
      { title: 'The Architect of Apartheid by Henry Kenney', date: '1980' },
      { title: 'South African Truth and Reconciliation Commission Final Report', url: 'https://www.justice.gov.za/trc/report/', date: '1998' },
    ],
    aliases: ['Architect of Apartheid', 'Dr. Verwoerd'],
    knownAssociates: [],
  },
  'hideki-tojo': {
    name: 'Hideki Tojo',
    title: 'Prime Minister of Japan (1941-1944)',
    role: 'War Criminal Executed for Crimes Against Humanity in WWII',
    riskLevel: 'critical',
    description: 'General Hideki Tojo served as Prime Minister of Japan during most of World War II and was the driving force behind Japan\'s aggressive military expansion. He authorized the attack on Pearl Harbor, oversaw the brutal treatment of prisoners of war, and was responsible for the deaths of millions of civilians across Asia. Convicted of war crimes by the International Military Tribunal for the Far East (Tokyo Tribunal), he was executed by hanging.',
    birthDate: '1884-12-30',
    birthPlace: 'Tokyo, Japan',
    deathDate: '1948-12-23',
    education: ['Imperial Japanese Army Academy', 'Army War College'],
    affiliations: [
      { name: 'Imperial Japanese Government', role: 'Prime Minister (1941-1944)', type: 'agency' },
      { name: 'Imperial Japanese Army', role: 'General and Minister of War', type: 'agency' },
    ],
    controversies: [
      'Authorized the attack on Pearl Harbor bringing the United States into World War II',
      'Oversaw Japanese military campaigns that killed millions of civilians across China, Southeast Asia, and the Pacific',
      'Responsible for the Bataan Death March (1942) where 10,000-18,000 Filipino and American POWs died',
      'Commanded forces during the Nanjing occupation aftermath and continuing atrocities in China',
      'Authorized use of forced labor including "comfort women" - approximately 200,000 women forced into sexual slavery',
      'Oversaw POW camps where death rates reached 27% compared to 4% in German/Italian camps',
      'Unit 731 biological warfare experiments on live prisoners continued under his premiership',
      'Attempted suicide to avoid capture in 1945; failed and was tried at Tokyo Tribunal',
    ],
    charges: [
      { statute: 'IMTFE - Class A War Criminal', description: 'Waging wars of aggression and conspiracy to wage aggressive war against peace', category: 'Crimes Against Peace' },
      { statute: 'IMTFE - Crimes Against Humanity', description: 'Ordering, authorizing, and permitting inhumane treatment of prisoners of war and civilian internees', category: 'Crimes Against Humanity' },
      { statute: 'IMTFE - War Crimes (Conventional)', description: 'Ordering and permitting atrocities against POWs including Bataan Death March', category: 'War Crimes' },
      { statute: 'Geneva Convention Violations', description: 'Systematic mistreatment of POWs with 27% death rate in Japanese camps', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Nanjing Massacre', slug: 'nanjing-massacre', severity: 'critical' },
    ],
    timeline: [
      { date: '1884-12-30', event: 'Born in Tokyo, Japan' },
      { date: '1940-07', event: 'Becomes Minister of War under PM Konoe' },
      { date: '1941-10-18', event: 'Becomes Prime Minister of Japan' },
      { date: '1941-12-07', event: 'Authorizes attack on Pearl Harbor' },
      { date: '1942-04', event: 'Bataan Death March kills 10,000-18,000 POWs' },
      { date: '1944-07', event: 'Forced to resign as Prime Minister after fall of Saipan' },
      { date: '1945-09-11', event: 'Attempts suicide by shooting himself; survives' },
      { date: '1946-1948', event: 'Tried at International Military Tribunal for the Far East' },
      { date: '1948-11-12', event: 'Found guilty of Class A war crimes' },
      { date: '1948-12-23', event: 'Executed by hanging at Sugamo Prison, Tokyo' },
    ],
    sources: [
      { title: 'IMTFE Judgment - International Military Tribunal for the Far East', url: 'https://www.legal-tools.org/', date: '1948' },
    ],
    aliases: ['Razor Tojo (Kamisori Tojo)'],
    knownAssociates: [],
  },
  'henry-cuellar': {
    name: 'Henry Cuellar',
    title: 'U.S. Representative (D-TX-28)',
    role: 'Sitting congressman indicted for bribery and acting as a foreign agent for Azerbaijan and a Mexican bank while serving on the House Appropriations Committee',
    riskLevel: 'critical',
    description: 'Henry Roberto Cuellar has served as a U.S. Representative from Texas since 2005. In May 2024, Cuellar and his wife Imelda were indicted on federal charges of bribery, money laundering, and acting as foreign agents for Azerbaijan and Hanover Bancorp, a Mexican bank. The indictment alleges that from 2014 to 2021, Cuellar accepted approximately $600,000 in bribes from Azerbaijan\'s state oil company SOCAR (through an intermediary) and from the International Bank of Azerbaijan, in exchange for influencing U.S. foreign policy to benefit Azerbaijan, including efforts to downplay Azerbaijan\'s human rights record and promote arms sales. Separately, Cuellar allegedly accepted bribes from a Mexico-based bank in exchange for official acts. Cuellar\'s wife was allegedly paid $600,000 as a "consultant" by the Azerbaijani entities, though prosecutors say little to no legitimate work was performed. Cuellar has pleaded not guilty and was reelected in 2024 while under indictment. He served on the powerful House Appropriations Committee, which controls federal spending.',
    birthDate: 'September 19, 1955',
    birthPlace: 'Laredo, Texas',
    education: ['Georgetown University (B.S.)', 'University of Texas at Austin (J.D.)', 'Texas A&M International University (M.A.)', 'University of Texas at Austin (Ph.D.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (D-TX)', role: 'Member of Congress', type: 'agency' as const },
      { name: 'House Appropriations Committee', role: 'Member', type: 'agency' as const },
    ],
    controversies: [
      'Indicted for accepting $600,000 in bribes from Azerbaijan and Mexican bank',
      'Charged with acting as unregistered foreign agent for Azerbaijan',
      'Wife allegedly paid $600K as sham "consultant" for Azerbaijani entities',
      'Used official position to influence U.S. foreign policy for Azerbaijan',
      'Reelected while under federal indictment',
    ],
    charges: [
      { statute: '18 U.S.C. 201(b)', description: 'Bribery - accepting payments for official acts benefiting Azerbaijan and Mexican bank', category: 'federal' },
      { statute: '18 U.S.C. 951', description: 'Acting as an agent of a foreign government without notification', category: 'federal' },
      { statute: '18 U.S.C. 1956', description: 'Money laundering conspiracy', category: 'federal' },
      { statute: '22 U.S.C. 611', description: 'Failure to register as foreign agent under FARA', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '2005-01', event: 'Takes office in U.S. House of Representatives' },
      { date: '2014-2021', event: 'Period of alleged bribery by Azerbaijan and Mexican bank' },
      { date: '2022-01-19', event: 'FBI raids Cuellar\'s home and campaign office in Laredo' },
      { date: '2024-05-03', event: 'Indicted on bribery, money laundering, and foreign agent charges' },
      { date: '2024-05-10', event: 'Pleads not guilty' },
      { date: '2024-11', event: 'Wins reelection while under indictment' },
    ],
    sources: [
      { title: 'DOJ: United States v. Henry Cuellar', url: 'https://www.justice.gov/news', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Imelda Cuellar', relationship: 'Wife and co-defendant; received $600K in alleged sham consulting fees' },
    ],
  },
  'henry-kissinger': {
    name: 'Henry Kissinger',
    title: 'Former Secretary of State and National Security Advisor',
    role: 'U.S. official complicit in war crimes, coups, and mass atrocities across multiple continents',
    riskLevel: 'critical',
    description: 'Henry Kissinger served as National Security Advisor (1969-1975) and Secretary of State (1973-1977) under Presidents Nixon and Ford. During his tenure, he was directly involved in policies that resulted in the deaths of millions of people: the secret bombing of Cambodia (1969-1973, estimated 150,000 civilian deaths), support for the Pakistani military\'s genocide in Bangladesh (1971, 300,000-3,000,000 killed), the CIA-backed coup in Chile (1973) and subsequent support for Pinochet\'s dictatorship, support for Indonesia\'s invasion of East Timor (1975, 100,000-300,000 killed), and a documented meeting in which he signaled support for Argentina\'s Dirty War. Despite multiple requests from courts in France, Spain, Brazil, Argentina, and Chile, Kissinger was never extradited or prosecuted. He died in November 2023 at age 100.',
    birthDate: 'May 27, 1923',
    birthPlace: 'Furth, Germany',
    education: ['Harvard University (B.A., M.A., Ph.D.)'],
    affiliations: [
      { name: 'U.S. Department of State', role: 'Secretary of State (1973-1977)', type: 'agency' as const },
      { name: 'National Security Council', role: 'National Security Advisor (1969-1975)', type: 'agency' as const },
      { name: 'Kissinger Associates', role: 'Founder and Chairman', type: 'corporation' as const },
    ],
    controversies: [
      'Orchestrated secret bombing of Cambodia killing estimated 150,000 civilians',
      'Supported CIA-backed coup against democratically elected Salvador Allende in Chile (1973)',
      'Signaled support for Argentine junta\'s Dirty War in documented June 1976 meeting',
      'Supported Pakistan\'s military during Bangladesh genocide (1971)',
      'Gave "green light" to Indonesia\'s invasion of East Timor (1975) one day after meeting with Suharto',
      'Wiretapped own NSC staff and journalists without court authorization',
      'Operation Condor: aware of and provided support for cross-border assassination program',
      'Sabotaged Vietnam peace talks in 1968 to benefit Nixon\'s election campaign',
    ],
    charges: [],
    relatedInvestigations: ['operation-condor-cia-latin-america', 'us-backed-coups-regime-change'],
    timeline: [
      { date: '1969', event: 'Appointed National Security Advisor by President Nixon; initiated secret bombing of Cambodia' },
      { date: '1971', event: 'Supported Pakistan during Bangladesh genocide despite State Department "Blood Telegram" opposing policy' },
      { date: '1973', event: 'Became Secretary of State; supported Chilean coup against Allende' },
      { date: '1975', event: 'Met with Suharto; Indonesia invaded East Timor the following day' },
      { date: '1976', event: 'Documented meeting signaling support for Argentine junta\'s dirty war' },
      { date: '2001', event: 'French judge sought testimony regarding Operation Condor; Kissinger refused' },
      { date: 'November 2023', event: 'Died at age 100; never faced prosecution for any actions' },
    ],
    sources: [
      { title: 'National Security Archive: Kissinger Declassified', url: 'https://nsarchive.gwu.edu/', date: '2023' },
      { title: 'Christopher Hitchens: The Trial of Henry Kissinger', url: 'https://www.versobooks.com/', date: '2001' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Richard Nixon', relationship: 'President who appointed him; co-architect of Cambodia bombing and Chile coup' },
      { name: 'Augusto Pinochet', relationship: 'Chilean dictator installed with U.S. support; Kissinger maintained contact' },
      { name: 'Manuel Contreras', relationship: 'Chilean DINA chief; CIA asset who ran Operation Condor operations' },
    ],
  },
  'rick-perry': {
    name: 'Rick Perry',
    title: 'Former Secretary of Energy and Governor of Texas',
    role: 'Governor Who Became Secretary of the Department He Wanted to Eliminate',
    riskLevel: 'medium' as const,
    description: 'Rick Perry served as Energy Secretary after famously being unable to remember it was the department he wanted to eliminate during a 2011 debate. He later admitted he did not understand the departments role in managing the nuclear weapons stockpile when he accepted the position. He was connected to the Ukraine pressure campaign and influenced energy policy that benefited donors.',
    birthDate: '1950-03-04',
    birthPlace: 'Haskell, Texas',
    education: [
      'B.S. in Animal Science, Texas A&M University (1972)',
    ],
    affiliations: [
      { name: 'Department of Energy', role: 'Secretary (2017-2019)', type: 'agency' as const },
      { name: 'State of Texas', role: 'Governor (2000-2015)', type: 'agency' as const },
    ],
    controversies: [
      'During 2011 presidential debate, could not name the third federal department he wanted to eliminate; it was the Energy Department he would later lead',
      'Admitted after accepting the position that he did not realize the Department of Energy managed the nuclear weapons arsenal',
      'Connected to Ukraine energy dealings that intersected with the Trump-Ukraine scandal; encouraged energy executives to pursue deals in Ukraine',
      'As Governor, oversaw 279 executions, more than any governor in modern American history; evidence later emerged suggesting some executed individuals may have been innocent',
      'Replaced members of the Texas Forensic Science Commission to prevent a ruling that faulty arson science led to the execution of Cameron Todd Willingham',
      'Indicted in Texas for abuse of power related to threatening to veto funding for a public integrity unit; charges later dismissed on constitutional grounds',
      'As Energy Secretary, pushed for bailouts of coal and nuclear plants owned by major Republican donors, particularly FirstEnergy and Murray Energy',
    ],
    relatedInvestigations: [
      { title: 'Nuclear Waste Storage Crisis', slug: 'nuclear-waste-storage-crisis', severity: 'high' },
    ],
    timeline: [
      { date: '2000-12', event: 'Became Governor of Texas after George W. Bush became president' },
      { date: '2004', event: 'Replaced Texas Forensic Science Commission members before Willingham ruling' },
      { date: '2011-11', event: '"Oops" debate moment: forgot Energy Department was one of three agencies he would eliminate' },
      { date: '2017-03', event: 'Confirmed as Energy Secretary; admitted not understanding the departments nuclear role' },
      { date: '2019', event: 'Connected to Ukraine energy dealings involving Rudy Giuliani and energy executives' },
      { date: '2019-10', event: 'Resigned as Energy Secretary amid Ukraine investigation scrutiny' },
    ],
    sources: [
      { title: 'New Yorker: Cameron Todd Willingham Investigation', date: '2009' },
      { title: 'House Intelligence Committee: Ukraine Inquiry and Perry Connection', date: '2019' },
      { title: 'DOE OIG: Review of Perry Policy Decisions', date: '2019' },
    ],
    aliases: ['Governor Oops'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who appointed him to lead the department Perry famously could not name', href: '/entities/individuals/donald-trump' },
      { name: 'Rudy Giuliani', relationship: 'Trumps personal attorney whose Ukraine dealings intersected with Perrys energy diplomacy', href: '/entities/individuals/rudy-giuliani' },
    ],
  },
 'adolf-hitler': {
   name: "Adolf Hitler",
   title: "Dictator of Nazi Germany",
   role: "Historical Figure - War Criminal",
   riskLevel: "critical",
   description: "Leader of Nazi Germany responsible for the Holocaust, World War II, and the systematic murder of six million Jews and millions of others. His regime represents the ultimate failure of accountability.",
   education: [],
   affiliations: [
     { name: "Nazi Party", role: "FÃƒÂ¼hrer", type: "organization" },
   ],
   controversies: [
     "The Holocaust - systematic genocide of 6 million Jews",
     "Started World War II causing 70+ million deaths",
     "Operation Paperclip - Nazi scientists recruited by US after war",
     "Industrialists who funded Nazi rise to power faced minimal accountability",
   ],
   relatedInvestigations: [],
   timeline: [
     { date: "1933", event: "Becomes Chancellor of Germany" },
     { date: "1945", event: "Death in Berlin bunker" },
   ],
 },
 'harriet-miers': {
   name: 'Harriet Ellan Miers',
   title: 'Former White House Counsel',
   role: 'Bush Administration Official, Attorney Firings Architect',
   riskLevel: 'high',
   description: 'Harriet Miers served as White House Counsel under George W. Bush from 2005 to 2007. She proposed replacing all 93 U.S. Attorneys with Bush loyalists in January 2005, a plan so extreme it was scaled back to a targeted purge of nine prosecutors. The DOJ Inspector General found Miers was "at the center of the effort" to politicize federal law enforcement. She refused to comply with congressional subpoenas, claiming executive privilege, and was held in contempt of Congress. Bush briefly nominated her to the Supreme Court in 2005, but she withdrew after bipartisan criticism of her lack of judicial experience.',
   birthDate: 'August 10, 1945',
   birthPlace: 'Dallas, Texas, USA',
   education: ['B.S., Southern Methodist University', 'J.D., Southern Methodist University Dedman School of Law'],
   affiliations: [
     { name: 'White House', role: 'White House Counsel (2005-2007)', type: 'agency' },
     { name: 'DOJ', role: 'Directed politicization of U.S. Attorney appointments', type: 'agency' },
   ],
   controversies: [
     'Proposed replacing all 93 U.S. Attorneys with Bush loyalists',
     'Found by DOJ IG to be "at the center" of the attorney firings effort',
     'Held in contempt of Congress for refusing to testify',
     'Failed Supreme Court nomination withdrawn October 2005',
     'Claimed executive privilege to block congressional investigation',
   ],
   charges: [
     { statute: '2 U.S.C. Ã‚Â§ 192', description: 'Contempt of Congress - held in contempt for refusing to comply with House Judiciary Committee subpoena', category: 'Federal' },
     { statute: '18 U.S.C. Ã‚Â§ 1505', description: 'Potential obstruction of congressional proceedings by refusing testimony', category: 'Potential Federal' },
   ],
   relatedInvestigations: [
     { title: 'Bush Administration U.S. Attorney Firings', slug: 'attorney-firings', severity: 'high' },
   ],
   timeline: [
     { date: '1945', event: 'Born in Dallas, Texas' },
     { date: '1970', event: 'Receives J.D. from SMU Dedman School of Law' },
     { date: '2001', event: 'Appointed White House Staff Secretary under George W. Bush' },
     { date: '2005-01', event: 'Proposes replacing all 93 U.S. Attorneys with Bush loyalists; plan deemed too extreme' },
     { date: '2005-02', event: 'Becomes White House Counsel, replacing Alberto Gonzales' },
     { date: '2005-10', event: 'Nominated to Supreme Court by Bush; withdraws after bipartisan criticism' },
     { date: '2006-12-07', event: 'Seven U.S. Attorneys fired in coordinated political purge she helped architect' },
     { date: '2007-06-13', event: 'Subpoenaed by House Judiciary Committee; refuses to appear' },
     { date: '2007-07-25', event: 'House Judiciary Committee votes to hold her in contempt of Congress' },
     { date: '2008-09', event: 'DOJ IG report finds she was "at the center of the effort" to politicize DOJ' },
   ],
   sources: [
     { title: 'DOJ Inspector General Joint Report on U.S. Attorney Dismissals', url: 'http://web.archive.org/web/20200302142947/https://oig.justice.gov/special/s0809a/final.pdf', date: '2008' },
     { title: 'House Judiciary Committee Contempt Citation', url: 'https://www.judiciary.house.gov', date: '2007' },
   ],
   knownAssociates: [
     { name: 'George W. Bush', relationship: 'President she served as White House Counsel', href: '/entities/individuals/george-w-bush' },
     { name: 'Alberto Gonzales', relationship: 'Predecessor as White House Counsel, successor as AG who executed the firings', href: '/entities/individuals/alberto-gonzales' },
     { name: 'Karl Rove', relationship: 'Fellow architect of attorney firings scheme', href: '/entities/individuals/karl-rove' },
   ],
 },
 'hans-von-sponeck': {
 name: 'Hans von Sponeck',
 title: 'Former UN Assistant Secretary-General',
 role: 'UN Humanitarian Coordinator in Iraq who resigned in protest over sanctions',
 riskLevel: 'low',
 description: 'Hans-Christof von Sponeck is a German diplomat who served over 30 years at the United Nations before becoming the second consecutive UN Humanitarian Coordinator in Iraq to resign in protest over the sanctions regime. He succeeded Denis Halliday in November 1998, taking the post despite Halliday\'s warnings. After 13 months witnessing the same devastating humanitarian conditions, von Sponeck resigned on February 13, 2000, calling the sanctions "totally incompatible with the UN Charter" and "indefensible." Jutta Burghardt, head of the World Food Programme in Iraq, resigned the same day. Von Sponeck\'s resignation was significant because it demonstrated that Halliday\'s concerns were not those of a single individual -- three consecutive senior UN officials with direct knowledge of ground conditions all reached the same conclusion: the sanctions were causing mass civilian death. After leaving the UN, von Sponeck wrote "A Different Kind of War: The UN Sanctions Regime in Iraq" (2006), documenting the sanctions\' humanitarian impact from his insider perspective. He later served as a visiting scholar at various European universities.',
 birthDate: '1939',
 birthPlace: 'Germany',
 education: ['University of Bonn', 'Graduate studies in economics and political science'],
 affiliations: [
 { name: 'United Nations', role: 'Assistant Secretary-General; Humanitarian Coordinator in Iraq (1998-2000); 30+ year career', type: 'organization' },
 { name: 'UNDP', role: 'Various senior positions including Resident Coordinator in Ghana, India, Pakistan', type: 'organization' },
 { name: 'Oil-for-Food Programme', role: 'Oversaw humanitarian operations in Iraq as Coordinator', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Denis Halliday', relationship: 'Predecessor as UN Humanitarian Coordinator in Iraq; resigned October 1998 calling sanctions "genocide"; warned von Sponeck about conditions', href: '/entities/individuals/denis-halliday' },
 { name: 'Jutta Burghardt', relationship: 'Head of World Food Programme in Iraq; resigned same day as von Sponeck, February 13, 2000' },
 { name: 'Kofi Annan', relationship: 'UN Secretary-General who accepted von Sponeck\'s resignation' },
 ],
 controversies: [
 'RESIGNATION IN PROTEST: Resigned as Humanitarian Coordinator in February 2000 after determining sanctions were indefensible. Second consecutive coordinator to resign. Called sanctions "totally incompatible with the UN Charter."',
 'CHALLENGED OFFICIAL NARRATIVE: Publicly contradicted U.S. and UK claims that Saddam Hussein was solely responsible for humanitarian suffering. Provided detailed evidence that sanctions committee blocking of imports was a primary cause of civilian death.',
 'SANCTIONS DOCUMENTATION: Published "A Different Kind of War" (2006) providing insider documentation of how the sanctions committee operated, how dual-use restrictions blocked essential humanitarian supplies, and how bureaucratic delays cost lives.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iraq Sanctions and the Death of 500,000 Children', slug: 'iraq-sanctions', severity: 'critical' },
 ],
 timeline: [
 { date: '1939', event: 'Born in Germany' },
 { date: '1968', event: 'Begins career at the United Nations' },
 { date: '1998-11', event: 'Appointed UN Humanitarian Coordinator in Baghdad, succeeding Denis Halliday who had resigned in protest' },
 { date: '2000-02-13', event: 'Resigns as Humanitarian Coordinator calling sanctions "totally incompatible with the UN Charter." Jutta Burghardt, WFP head in Iraq, resigns same day.' },
 { date: '2003', event: 'Opposes U.S.-led invasion of Iraq; argues invasion follows 13 years of sanctions that already devastated the country' },
 { date: '2006', event: 'Publishes "A Different Kind of War: The UN Sanctions Regime in Iraq" documenting the humanitarian catastrophe from his insider perspective' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Hans von Sponeck resignation coverage (BBC, 2000)', url: 'https://news.bbc.co.uk/2/hi/middle_east/642880.stm', date: '2000' },
 { title: 'A Different Kind of War: The UN Sanctions Regime in Iraq (2006)', url: 'https://www.worldcat.org/title/different-kind-of-war-the-un-sanctions-regime-in-iraq/oclc/65400508', date: '2006' },
 ],
 aliases: ['Hans-Christof von Sponeck'],
 },
};

export default profiles;
