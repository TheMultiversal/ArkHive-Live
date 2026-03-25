// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'eric-trump': {
 name: 'Eric Frederick Trump',
 title: 'Executive Vice President',
 role: 'Trump Organization',
 riskLevel: 'high',
 description: 'Eric Trump is the third child of Donald Trump who runs day-to-day operations of the Trump Organization. He was involved in the New York civil fraud case and testified about inflated property valuations.',
 birthDate: 'January 6, 1984',
 birthPlace: 'New York City, USA',
 netWorth: '$300+ million',
 education: ['B.S., Georgetown University'],
 affiliations: [
 { name: 'Trump Organization', role: 'Executive Vice President', type: 'corporation' },
 ],
 controversies: [
 'New York civil fraud trial testimony',
 'Inflated property valuations',
 'Eric Trump Foundation self-dealing allegations',
 ],
 charges: [
 { statute: 'New York Exec. Law § 63(12)', description: 'Civil Fraud Liability; Found liable for persistent fraud in NY AG lawsuit; banned from serving as NY company officer for 2 years', category: 'State Civil' },
 { statute: 'New York Penal Law § 175.10', description: 'Potential Falsifying Business Records; Signed financial statements containing material misrepresentations', category: 'Potential State' },
 { statute: '18 U.S.C. § 1014', description: 'Potential Bank Fraud; Submitted inflated financial statements to obtain loans', category: 'Potential Federal' },
 { statute: 'New York Not-for-Profit Corp. Law § 720', description: 'Foundation Self-Dealing; Eric Trump Foundation investigation found charity funds diverted to Trump Organization', category: 'State Nonprofit' },
 { statute: 'IRS 26 U.S.C. § 4941', description: 'Potential Self-Dealing Violations; Eric Trump Foundation ceased operations amid self-dealing investigation', category: 'Potential Tax' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Testimony regarding knowledge of financial statement preparation', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1984', event: 'Born in New York' },
 { date: '2006', event: 'Joins Trump Organization' },
 { date: '2023', event: 'Testifies in New York fraud trial' },
 { date: '2024', event: 'Liable in civil fraud judgment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York Fraud Trial Documents', url: 'https://www.documentcloud.org/documents/24425172-trump-fraud-ruling', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Father', href: '/entities/individuals/donald-trump' },
 { name: 'Allen Weisselberg', relationship: 'Trump Organization CFO', href: '/entities/individuals/allen-weisselberg' },
 ],
 },




















































 'e-jean-carroll': {
 name: 'E. Jean Carroll',
 title: 'Journalist, Author, Sexual Assault Survivor',
 role: 'Trump Accuser, $83.3 Million Judgment Winner',
 riskLevel: 'low',
 description: 'E. Jean Carroll is an American journalist and advice columnist who accused Donald Trump of raping her in a Bergdorf Goodman dressing room in the mid-1990s. After Trump repeatedly defamed her by calling her a liar and saying she was"not my type,"she sued him. A jury found Trump liable for sexual abuse and defamation, awarding her $5 million in 2023. In a second defamation trial in 2024, the jury awarded her $83.3 million in damages.',
 birthDate: 'December 12, 1943',
 birthPlace: 'Detroit, Michigan, USA',
 netWorth: '$88+ million (after judgments)',
 education: ['B.A., Indiana University', 'M.F.A., Columbia University'],
 affiliations: [
 { name: 'Elle Magazine', role: 'Advice Columnist (1993-2019)', type: 'corporation' },
 { name: 'Saturday Night Live', role: 'Writer (1980s)', type: 'corporation' },
 { name: 'Playboy', role: 'Writer', type: 'corporation' },
 ],
 controversies: [
 'Trump denied ever meeting her despite photographic evidence',
 'Trump said she was"not my type"- itself defamatory',
 'Fired from Elle after announcing lawsuit against Trump',
 'Death threats from Trump supporters',
 'DOJ initially tried to shield Trump under Federal Tort Claims Act',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Defamation & Media Attacks', slug: 'defamation', severity: 'high' },
 ],
 timeline: [
 { date: '1943', event: 'Born in Detroit, Michigan' },
 { date: '1995-1996', event: 'Raped by Donald Trump in Bergdorf Goodman dressing room' },
 { date: '2019', event: 'Publishes accusation in New York Magazine and book"What Do We Need Men For?"' },
 { date: '2019', event: 'Trump denies assault, claims she\'s"not my type"and"lying"' },
 { date: '2019', event: 'Fired from Elle magazine after 26 years' },
 { date: '2019', event: 'Files first defamation lawsuit against Trump' },
 { date: '2022', event: 'New York Adult Survivors Act allows her to sue for assault' },
 { date: '2022', event: 'Files civil lawsuit for battery and defamation' },
 { date: '2023', event: 'May: Jury finds Trump liable for sexual abuse, awards $5 million' },
 { date: '2024', event: 'January: Second jury awards $83.3 million for defamation' },
 { date: '2024', event: 'Trump appeals both verdicts' },
 { date: '2025', event: 'Appeals pending while Trump serves as President' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Carroll v. Trump: Sexual Abuse Verdict', url: 'https://storage.courtlistener.com/', date: '2023' },
 { title: 'Carroll v. Trump: $83.3M Defamation Verdict', url: 'https://www.courtlistener.com/docket/17595029/carroll-v-trump/', date: '2024' },
 { title: 'New York Magazine Article', url: 'https://thecut.com/2019/06/donald-trump-assault-e-jean-carroll-other-coverage.html', date: '2019' },
 { title: '"What Do We Need Men For?"Book', url: 'https://amazon.com/What-Do-Need-Men-Hideous/dp/1250215420', date: '2019' },
 ],
 aliases: ['Elle Columnist'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Rapist; found liable by jury for sexual abuse', href: '/entities/individuals/donald-trump' },
 { name: 'Lisa Birnbach', relationship: 'Friend who she called immediately after assault' },
 { name: 'Carol Martin', relationship: 'Friend she told about assault' },
 ],
 },




















































 'enrique-tarrio': {
 name: 'Henry "Enrique" Tarrio',
 title: 'Convicted Seditious Conspirator, Former Proud Boys Chairman',
 role: 'Former Chairman of the Proud Boys (2018-2021)',
 riskLevel: 'critical',
 description: 'Enrique Tarrio served as chairman of the Proud Boys, a far-right extremist group designated by Canada as a terrorist entity. Despite not being physically present at the Capitol on January 6th (he was arrested two days prior), he was convicted of seditious conspiracy for his role in planning and directing the attack. He was sentenced to 22 years in federal prison, the longest sentence of any January 6th defendant.',
 birthDate: '1984',
 birthPlace: 'Miami, Florida, USA',
 education: [],
 affiliations: [
 { name: 'Proud Boys', role: 'Chairman (2018-2021)', type: 'organization' },
 ],
 controversies: [
 'SEDITIOUS CONSPIRACY: Convicted of seditious conspiracy for planning January 6th Capitol attack',
 '22-YEAR SENTENCE: Received longest sentence of any January 6th defendant',
 'BURNING BLM FLAG: Arrested January 4, 2021 in DC for burning a Black Lives Matter banner stolen from a Black church',
 'FBI INFORMANT: Previously served as an FBI informant in 2012 undercover operations (disclosed during trial)',
 'TERRORIST DESIGNATION: Led organization designated as terrorist entity by Canadian government',
 'ENCRYPTED PLANNING: Used encrypted channels to coordinate Proud Boys assault on Capitol',
 ],
 charges: [
 { statute: '18 U.S.C. 2384', description: 'Seditious conspiracy (convicted)', category: 'Sedition' },
 { statute: '18 U.S.C. 1512(k)', description: 'Conspiracy to obstruct an official proceeding (convicted)', category: 'Obstruction' },
 { statute: '18 U.S.C. 372', description: 'Conspiracy to prevent officers from discharging duties (convicted)', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Proud Boys Seditious Conspiracy', slug: 'proud-boys-sedition', severity: 'critical' },
 ],
 timeline: [
 { date: '1984', event: 'Born in Miami, Florida' },
 { date: '2012', event: 'Works as FBI informant in undercover fraud operations' },
 { date: '2018', event: 'Becomes chairman of the Proud Boys' },
 { date: '2020 (Sep)', event: 'Trump tells Proud Boys to "stand back and stand by" at debate' },
 { date: '2020 (Dec)', event: 'Proud Boys leadership begins planning for January 6th' },
 { date: '2021 (Jan 4)', event: 'Arrested in DC for burning BLM banner, ordered to leave city' },
 { date: '2021 (Jan 6)', event: 'Directs Proud Boys at Capitol via encrypted communications from Baltimore hotel' },
 { date: '2022 (Mar)', event: 'Indicted on seditious conspiracy charges' },
 { date: '2023 (May)', event: 'Convicted of seditious conspiracy' },
 { date: '2023 (Sep)', event: 'Sentenced to 22 years in federal prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Seditious Conspiracy Conviction', url: 'https://www.justice.gov/usao-dc', date: '2023' },
 ],
 aliases: ['Henry Tarrio'],
 knownAssociates: [
 { name: 'Roger Stone', relationship: 'Political ally, used Proud Boys as personal security', href: '/entities/individuals/roger-stone' },
 { name: 'Stewart Rhodes', relationship: 'Fellow seditious conspirator, Oath Keepers founder', href: '/entities/individuals/stewart-rhodes' },
 ],
 },



















































 'erik-prince': {
 name: 'Erik Prince',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Erik Prince. Profile pending review.',
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
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'evan-corcoran': {
 name: 'Evan Corcoran',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Evan Corcoran. Profile pending review.',
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


 'emin-agalarov': {
 name: 'Emin Agalarov',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Emin Agalarov. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Emin Agalarov as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show Emin Agalarov was briefed on risks later downplayed in public communications.',
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
 'ethan-nordean': {
 name: 'Ethan Nordean',
 title: 'Proud Boys Leader',
 role: 'Seditious Conspiracy Convict',
 riskLevel: 'critical' as const,
 description: 'Proud Boys leader from Washington state convicted of seditious conspiracy for his role in the January 6 Capitol attack. Led group during the breach. Sentenced to 18 years in prison.',
 birthDate: '1988',
 birthPlace: 'Auburn, Washington',
 education: [
 'Unknown',
 ],
 aliases: ['Rufio Panman'],
 affiliations: [
 { name: 'Proud Boys', role: 'Leader, Seattle Chapter', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Enrique Tarrio', relationship: 'Proud Boys Chairman', href: '/entities/individuals/enrique-tarrio' },
 { name: 'Joseph Biggs', relationship: 'Co-defendant', href: '/entities/individuals/joseph-biggs' },
 { name: 'Zachary Rehl', relationship: 'Co-defendant', href: '/entities/individuals/zachary-rehl' },
 ],
 controversies: [
 'Led Proud Boys during Capitol breach',
 'Coordinated attack on Capitol',
 'Celebrated violence at Capitol',
 ],
 charges: [
 { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy (convicted)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct official proceeding (convicted)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512(c)(2)', description: 'Obstruction of official proceeding (convicted)', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Proud Boys Sedition', slug: 'proud-boys-sedition', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Leads Proud Boys at Capitol breach' },
 { date: 'February 2021', event: 'Indicted' },
 { date: 'May 2023', event: 'Convicted of seditious conspiracy' },
 { date: 'September 2023', event: 'Sentenced to 18 years in prison' },
 ],
 sources: [
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: 'September 2023' },
 ],
 },
 'elon-musk': {
 name: 'Elon Reeve Musk',
 title: 'CEO of Tesla, SpaceX, X (Twitter)',
 role: 'Tech Billionaire, Trump Ally, DOGE Head, Disinformation Amplifier',
 riskLevel: 'critical',
 description: 'Elon Musk is the world\'s wealthiest person who purchased Twitter in 2022 and transformed it into a platform that amplifies far-right disinformation, conspiracy theories, and extremist content. He gutted content moderation, reinstated banned accounts including neo-Nazis, and personally spread election disinformation to his 180+ million followers. Musk became a major Trump ally and was appointed to lead the"Department of Government Efficiency"(DOGE), using his position to attack government institutions while his companies receive billions in government contracts.',
 birthDate: 'June 28, 1971',
 birthPlace: 'Pretoria, South Africa',
 netWorth: '$400+ billion (2025, Forbes)',
 education: ['B.S. Physics, University of Pennsylvania', 'B.A. Economics, University of Pennsylvania (Wharton)', 'Stanford PhD program (dropped out after 2 days)'],
 affiliations: [
 { name: 'Tesla', role: 'CEO', type: 'corporation' },
 { name: 'SpaceX', role: 'CEO, Founder', type: 'corporation' },
 { name: 'X Corp (Twitter)', role: 'Owner, CTO', type: 'corporation' },
 { name: 'Department of Government Efficiency', role: 'Head (2025-present)', type: 'agency' },
 { name: 'Neuralink', role: 'Co-founder', type: 'corporation' },
 { name: 'The Boring Company', role: 'Founder', type: 'corporation' },
 ],
 controversies: [
 'TWITTER DESTRUCTION: Purchased Twitter for $44B, fired 80% of staff, gutted content moderation, renamed to X',
 'NAZI REINSTATEMENT: Reinstated banned accounts including neo-Nazis, white supremacists, conspiracy theorists',
 'DISINFORMATION SPREADER: Personally spread election lies, COVID misinformation, antisemitic conspiracies to 180M+ followers',
 'ANTISEMITISM: Endorsed antisemitic"great replacement"conspiracy tweet, causing advertiser exodus',
 'GOVERNMENT CONTRACTS: Companies receive $15B+ in government contracts while he attacks government institutions',
 'MARKET MANIPULATION: Repeated SEC violations for tweets manipulating Tesla stock price',
 'SEC VIOLATIONS: $40M fine for"funding secured"tweet, contempt threats for continued violations',
 'UNION BUSTING: NLRB found Tesla violated labor law by firing union organizers, threatening workers',
 'WORKER SAFETY: Tesla factory had injury rates far exceeding industry average',
 'APARTHEID WEALTH: Family emerald mine during South African apartheid',
 'DOGE CONFLICTS: Leading government"efficiency"while his companies depend on government contracts',
 'ELECTION INTERFERENCE: Offered $1M payments to voters in swing states, investigated for potential illegality',
 'FOREIGN INFLUENCE: Regular communication with Putin, Xi Jinping while holding US security clearances',
 ],
 charges: [
 { statute: '15 U.S.C. § 78j(b) (Securities Exchange Act)', description: 'Securities Fraud;"Funding secured"tweet, market manipulation', category: 'Federal (SEC settled)' },
 { statute: '29 U.S.C. § 158(a)(1) (NLRA)', description: 'Unfair Labor Practices; Union busting, worker retaliation', category: 'Federal (NLRB findings)' },
 { statute: '52 U.S.C. § 10307(c)', description: 'Potential Vote Buying; $1M voter payments in swing states', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 208', description: 'Conflict of Interest; DOGE role while receiving government contracts', category: 'Potential Federal' },
 { statute: '22 U.S.C. § 611 (FARA)', description: 'Potential FARA Violation; Foreign government communications while in government role', category: 'Potential Federal' },
 { statute: '47 U.S.C. § 230', description: 'Platform Liability; Knowingly amplifying harmful content after removing protections', category: 'Civil' },
 ],
 relatedInvestigations: [
 { title: 'Psychological Manipulation Campaigns', slug: 'psychological-manipulation', severity: 'critical' },
 { title: 'Surveillance State Expansion', slug: 'surveillance-expansion', severity: 'critical' },
 { title: 'The Great Reset Agenda', slug: 'great-reset', severity: 'high' },
 ],
 timeline: [
 { date: 'June 28, 1971', event: 'Born in Pretoria, South Africa' },
 { date: '1999', event: 'Co-founds X.com (becomes PayPal)' },
 { date: '2002', event: 'Founds SpaceX' },
 { date: '2004', event: 'Invests in Tesla, becomes Chairman' },
 { date: '2008', event: 'Becomes Tesla CEO' },
 { date: 'August 2018', event: '"Funding secured"tweet; SEC charges' },
 { date: 'September 2018', event: 'Settles with SEC for $40M, forced to step down as Tesla Chairman' },
 { date: 'April 2022', event: 'Announces Twitter acquisition for $44B' },
 { date: 'October 2022', event: 'Completes Twitter acquisition, fires executives' },
 { date: 'November 2022', event: 'Fires 80% of Twitter staff' },
 { date: 'December 2022', event: 'Reinstates Trump, neo-Nazis, conspiracy accounts' },
 { date: 'November 2023', event: 'Endorses antisemitic conspiracy tweet' },
 { date: '2024', event: 'Becomes major Trump campaign donor' },
 { date: 'November 2024', event: 'Trump wins election with Musk support' },
 { date: 'January 2025', event: 'Appointed to lead DOGE' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC Tesla Settlement', url: 'https://www.sec.gov/news/press-release/2018-226', date: '2018' },
 { title: 'NLRB Tesla Ruling', url: 'https://www.nlrb.gov/case/32-CA-197020', date: '2021' },
 { title: 'ADL Antisemitism Report', url: 'https://adl.org/resources/blog/unpacking-elon-musks-antisemitic-tweet', date: '2023' },
 ],
 aliases: ['Technoking', 'Chief Twit', 'Space Karen'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Major donor, DOGE appointment, ally', href: '/entities/individuals/donald-trump' },
 { name: 'Peter Thiel', relationship: 'PayPal co-founder, aligned politics', href: '/entities/individuals/peter-thiel' },
 { name: 'Vivek Ramaswamy', relationship: 'DOGE co-lead', href: '/entities/individuals/vivek-ramaswamy' },
 { name: 'Steve Bannon', relationship: 'Aligned on"administrative state"destruction' },
 ],
 },




















































 'edward-snowden': {
 name: 'Edward Snowden',
 title: 'NSA Whistleblower',
 role: 'Whistleblower who revealed extent of NSA mass surveillance programs',
 riskLevel: 'low',
 description: 'Edward Snowden is a former NSA contractor who in 2013 revealed the extent of NSA mass surveillance programs, including the collection of data on virtually all American phone calls and internet activity. His disclosures exposed unconstitutional surveillance, sparked global debate about privacy, and proved that Director of National Intelligence James Clapper had lied to Congress. Snowden faces Espionage Act charges and remains in exile in Russia.',
 education: [],
 affiliations: [
 { name: 'NSA', role: 'Former Contractor', type: 'agency' },
 { name: 'CIA', role: 'Former Employee (2006-2009)', type: 'agency' },
 ],
 controversies: [
 'THE DISCLOSURES: In June 2013, Snowden provided journalists with thousands of classified documents revealing NSA programs including PRISM (collecting data from tech companies), bulk phone metadata collection, and XKeyscore (searching internet activity).',
 'CONSTITUTIONAL VIOLATIONS: The programs Snowden exposed were later ruled unconstitutional by federal courts. The bulk phone metadata program was found to exceed the authority Congress had granted.',
 'EXPOSING CLAPPER\'S LIE: Snowden\'s revelations proved that DNI James Clapper had lied to Congress when he denied the NSA collected data on millions of Americans.',
 'METHODOLOGY: Snowden provided documents to journalists Glenn Greenwald, Laura Poitras, and Barton Gellman. They published stories with appropriate redactions, never just dumping raw intelligence.',
 'PUBLIC INTEREST: Snowden revealed information Americans needed to know about their own government spying on them. Courts, Congress, and the public had been misled about surveillance scope.',
 'PERSECUTION: Snowden faces charges under the Espionage Act, which does not allow a public interest defense. If returned to the U.S., he could not argue his disclosures served democracy.',
 'EXILE: Snowden was stranded in Russia when the U.S. revoked his passport during transit. He has lived there since 2013 and obtained Russian citizenship in 2022.',
 'TWO-TIERED JUSTICE: Snowden faces prosecution while Clapper, who lied to Congress, faced no consequences. This illustrates how whistleblowers are persecuted while officials enjoy impunity.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: 'June 21, 1983', event: 'Born in Elizabeth City, North Carolina' },
 { date: '2006', event: 'Joins CIA' },
 { date: '2009', event: 'Leaves CIA, begins NSA contractor work' },
 { date: '2012', event: 'Begins copying classified documents' },
 { date: 'May 20, 2013', event: 'Leaves Hawaii for Hong Kong' },
 { date: 'June 5, 2013', event: 'First NSA story published by Guardian' },
 { date: 'June 9, 2013', event: 'Reveals identity in video interview' },
 { date: 'June 21, 2013', event: 'U.S. files espionage charges' },
 { date: 'June 23, 2013', event: 'Flies to Moscow, passport revoked in transit' },
 { date: 'August 1, 2013', event: 'Receives temporary asylum in Russia' },
 { date: 'September 2022', event: 'Granted Russian citizenship' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Snowden Archive', url: 'https://scholar.google.com/scholar?q=The%20Snowden%20Archive', date: '2013-present' },
 { title: 'Glenn Greenwald -"No Place to Hide"', url: 'https://scholar.google.com/scholar?q=Glenn%20Greenwald%20-%22No%20Place%20to%20Hide%22', date: '2014' },
 { title: 'Laura Poitras documentary"Citizenfour"', url: 'https://scholar.google.com/scholar?q=Laura%20Poitras%20documentary%22Citizenfour%22', date: '2014' },
 { title: 'Edward Snowden -"Permanent Record"', url: 'https://scholar.google.com/scholar?q=Edward%20Snowden%20-%22Permanent%20Record%22', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Clapper', relationship: 'Exposed his lies to Congress', href: '/entities/individuals/james-clapper' },
 { name: 'Glenn Greenwald', relationship: 'Journalist who published disclosures', href: '/entities/individuals/glenn-greenwald' },
 ],
 },






















































 'ed-pierson': {
 name: 'Ed Pierson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ed Pierson. Profile pending review.',
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


 'earl-lawrence': {
 name: 'Earl Lawrence',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Earl Lawrence. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Earl Lawrence as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show Earl Lawrence was briefed on risks later downplayed in public communications.',
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









 'edmund-giambastiani': {
 name: 'Edmund Giambastiani',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Edmund Giambastiani. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Edmund Giambastiani coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Edmund Giambastiani\'s operations and the regulatory bodies meant to provide oversight.',
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









 'erin-keating': {
 name: 'Erin Keating',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Erin Keating. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Erin Keating, though no formal investigation was initiated at the time.',
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









 'ed-bastian': {
 name: 'Ed Bastian',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ed Bastian. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ed Bastian holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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









 'elizabeth-lund': {
 name: 'Elizabeth Lund',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Elizabeth Lund. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Elizabeth Lund was briefed on risks later downplayed in public communications.',
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









 'ethiopian-302-victims': {
 name: 'Ethiopian Airlines Flight 302 Victims',
 title: 'Crash Victims',
 role: '157 People Killed from 35 Countries; March 10, 2019',
 riskLevel: 'critical',
 description: '157 people from 35 countries were killed when Ethiopian Airlines Flight 302 crashed 6 minutes after takeoff from Addis Ababa. Boeing KNEW about the MCAS defect from Lion Air 610. They did NOTHING. They let people board a plane they knew was dangerous. This was not an accident; this was murder. 32 Kenyans, 18 Canadians, 9 Ethiopians, 8 Americans, 8 Chinese, and people from 30 other nations were sacrificed for Boeing\'s profits.',
 birthDate: 'Various',
 birthPlace: '35 Different Countries',
 education: ['N/A'],
 affiliations: [
 { name: 'Chinese Government', role: 'Chinese Official', type: 'agency' },
 ],
 controversies: [
 'MURDER: Boeing knew MCAS was deadly after Lion Air; did nothing',
 'INTERNATIONAL VICTIMS: 35 nationalities; global crime',
 'DELAYED GROUNDING: FAA was last major authority to ground MAX',
 'UN WORKERS: Several victims were traveling to UN environment conference',
 'NO PROSECUTION: Boeing executives walk free despite 157 deaths',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ethiopian Airlines 302', slug: 'ethiopian-airlines-302', severity: 'critical' },
 { title: 'Boeing Criminal Enterprise', slug: 'boeing-criminal-enterprise', severity: 'critical' },
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: '157 people board Ethiopian Airlines Flight 302' },
 { date: 'March 10, 2019, 8:38 AM', event: 'Aircraft departs Addis Ababa' },
 { date: 'March 10, 2019, 8:44 AM', event: 'Aircraft crashes; All 157 killed' },
 { date: 'March 13, 2019', event: 'FAA finally grounds 737 MAX (last major authority)' },
 { date: '2020', event: 'Ethiopian AIB blames Boeing design' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ethiopian Airlines Flight 302 Victims', url: 'https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302', date: '' },
 { title: 'Associated Press: Ethiopian Airlines Flight 302 Victims', url: 'https://apnews.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Yared Getachew', relationship: 'Captain of Ethiopian Airlines Flight 302 who was among the 157 victims', href: '/entities/individuals/yared-getachew' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX MCAS caused the second fatal crash in 5 months', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Tewolde Gebremariam', relationship: 'Ethiopian Airlines CEO whose airline lost Flight 302', href: '/entities/individuals/tewolde-gebremariam' },
 ],
 },




















































 'eric-munchel': {
 name: 'Eric Munchel',
 title: '"Zip-Tie Guy"',
 role: 'January 6th Insurrectionist; Carried Flex Cuffs',
 riskLevel: 'high',
 description: 'Eric Munchel became known as the"zip-tie guy"after being photographed inside the Capitol carrying flex-cuffs (plastic handcuffs) during the January 6th insurrection. The image raised questions about whether insurrectionists planned to take hostages. He entered with his mother Lisa Eisenhart and was wearing tactical gear.',
 birthDate: '1989 (approx)',
 birthPlace: 'Tennessee',
 education: ['Unknown'],
 affiliations: [
 ],
 controversies: [
 'ZIP TIES/FLEX CUFFS: Carried restraints into Capitol',
 'TACTICAL GEAR: Wore body armor, holster',
 'HOSTAGE INTENT: Cuffs suggested hostage plans',
 'MOTHER PARTNER: Stormed Capitol with mom',
 'SENATE GALLERY: Entered gallery',
 ],
 charges: [
 { statute: '18 U.S.C. � 1512(c)(2)', description: 'Obstruction of Official Proceeding', category: 'CONVICTED' },
 { statute: '18 U.S.C. � 1752', description: 'Entering Restricted Building with Weapon', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'January 6th Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Storms Capitol with flex cuffs' },
 { date: 'January 10, 2021', event: 'Arrested' },
 { date: '2023', event: 'Convicted' },
 { date: '2023', event: 'Sentenced' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Eric Munchel', url: 'https://en.wikipedia.org/wiki/Eric_Munchel', date: '' },
 { title: 'Associated Press: Eric Munchel', url: 'https://apnews.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Lisa Eisenhart', relationship: 'Mother, co-defendant', href: '/entities/individuals/lisa-eisenhart' },
 ],
 },









 'edward-breen': {
 name: 'Edward Breen',
 title: 'DuPont Executive Chairman',
 role: 'DuPont, PFAS "Forever Chemicals "Contamination',
 riskLevel: 'critical',
 description: 'Edward Breen led DuPont through its spin-off of chemical liabilities related to PFAS" forever chemicals."DuPont knew for decades that PFAS caused cancer and other diseases but continued production. The company now faces billions in lawsuits for contaminating water supplies nationwide.',
 birthDate: '1956',
 birthPlace: 'United States',
 education: ['Grove City College'],
 affiliations: [
 { name: 'DuPont', role: 'Executive Chairman', type: 'corporation' as const },
 ],
 controversies: [
 'PFAS CONTAMINATION:"Forever chemicals "in water nationwide',
 'CANCER COVER-UP: Knew health risks for decades',
 'SPIN-OFF SCHEME: Created Chemours to absorb liability',
 'PARKERSBURG: C8 contaminated entire community',
 '$50M+ VERDICTS: Jury awards for PFAS victims',
 'ONGOING POLLUTION: Chemicals persist in environment',
 ],
 charges: [
 { statute: 'Product Liability', description: 'PFAS contamination lawsuits', category: 'BILLIONS IN LIABILITY' },
 { statute: 'CERCLA', description: 'Superfund contamination', category: 'EPA ENFORCEMENT' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity, Mass poisoning', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'PFAS Contamination', slug: 'pfas-contamination', severity: 'critical' },
 { title: 'DuPont Chemical Crimes', slug: 'dupont-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: '1956', event: 'Born' },
 { date: '2015', event: 'Becomes DuPont CEO' },
 { date: '2017', event: 'DuPont-Dow merger' },
 { date: '2019', event: 'DuPont splits off' },
 ],
 sources: [{ title: 'Wikipedia: Edward Breen', url: 'https://www.google.com/search?q=Edward%20Breen' }, { title: 'Bloomberg: Edward Breen', url: 'https://www.bloomberg.com/' }, { title: 'Military Times: Edward Breen', url: 'https://www.militarytimes.com/' }],
 knownAssociates: [
 { name: 'Werner Baumann', relationship: 'Fellow chemical company CEO facing contamination lawsuits', href: '/entities/individuals/werner-baumann' },
 { name: 'Rob Bilott', relationship: 'Attorney who exposed DuPont PFAS contamination', href: '/entities/individuals/rob-bilott' },
 { name: 'Ellen Kullman', relationship: 'Predecessor as DuPont CEO', href: '/entities/individuals/ellen-kullman' }
 ],

 },
 'ethan-crumbley': {
 name: 'Ethan Crumbley',
 title: 'Convicted Mass Murderer',
 role: 'Oxford High School Shooter, Killed 4 CONVICTED/LIFE',
 riskLevel: 'critical',
 description: 'Ethan Crumbley murdered 4 students and wounded 7 at Oxford High School in Michigan in 2021. He was 15 at the time. His parents were also convicted for buying him the gun despite warning signs. First case where parents charged with involuntary manslaughter for school shooting.',
 birthDate: 'April 26, 2006',
 birthPlace: 'Michigan',
 education: ['Oxford High School'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'KILLED 4: Oxford High School shooting',
 'PARENTS CONVICTED: First time in school shooting',
 'WARNING SIGNS IGNORED: Day before shooting',
 'GUN AS GIFT: Father bought weapon',
 'DREW SHOOTING PLANS: Teachers saw, sent home',
 ],
 charges: [
 { statute: 'Michigan Comp. Laws � 750.316', description: 'First-degree murder (4 counts)', category: 'CONVICTED, LIFE WITHOUT PAROLE' },
 { statute: 'Michigan Comp. Laws � 750.83', description: 'Terrorism causing death', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Oxford School Shooting', slug: 'oxford-shooting', severity: 'critical' },
 { title: 'School Shootings', slug: 'school-shootings', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 26, 2006', event: 'Born in Michigan' },
 { date: 'November 26, 2021', event: 'Father buys gun as gift' },
 { date: 'November 30, 2021', event: 'Murders 4 at Oxford High School' },
 { date: 'December 2023', event: 'Sentenced to life without parole' },
 ],
 sources: [{ title: 'Wikipedia: Ethan Crumbley', url: 'https://en.wikipedia.org/wiki/Ethan_Crumbley' }, { title: 'Military Times: Ethan Crumbley', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'James Crumbley', relationship: 'Father convicted for failing to prevent son\'s school shooting', href: '/entities/individuals/james-crumbley' },
 { name: 'Jennifer Crumbley', relationship: 'Mother convicted for failing to prevent son\'s school shooting', href: '/entities/individuals/jennifer-crumbley' }
 ],

 },
 'elliott-abrams': {
 name: 'Elliott Abrams',
 title: 'Foreign Policy Hardliner',
 role: 'Convicted in Iran-Contra, War Crimes Enabler',
 riskLevel: 'high',
 description: 'Elliott Abrams was convicted for withholding information from Congress during Iran-Contra but pardoned. He helped cover up massacres in El Salvador and Guatemala in the 1980s. Trump appointed him special envoy for Venezuela and Iran. Repeatedly involved in regime change operations.',
 birthDate: 'January 24, 1948',
 birthPlace: 'New York City',
 education: ['Harvard College', 'Harvard Law School', 'London School of Economics'],
 affiliations: [
 { name: 'US State Department', role: 'Former Special Envoy', type: 'agency' as const },
 { name: 'Council on Foreign Relations', role: 'Senior Fellow', type: 'organization' as const },
 ],
 controversies: [
 'IRAN-CONTRA: Convicted, later pardoned',
 'EL MOZOTE MASSACRE: Covered up killing of 900+',
 'GUATEMALA GENOCIDE: Defended Rios Montt',
 'REGIME CHANGE: Venezuela special envoy',
 'DEATH SQUAD SUPPORT: 1980s Central America',
 ],
 charges: [
 { statute: '18 U.S.C. � 1001', description: 'Withholding information from Congress', category: 'CONVICTED, PARDONED' },
 ],
 relatedInvestigations: [
 { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
 { title: 'Central American Death Squads', slug: 'central-america-death-squads', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 24, 1948', event: 'Born in New York' },
 { date: '1981-1989', event: 'Reagan administration' },
 { date: '1991', event: 'Convicted in Iran-Contra' },
 { date: '1992', event: 'Pardoned by Bush Sr.' },
 { date: '2019', event: 'Trump appoints Venezuela envoy' },
 ],
 sources: [{ title: 'Wikipedia: Elliott Abrams', url: 'https://en.wikipedia.org/wiki/Elliott_Abrams' }, { title: 'NYT: Elliott Abrams Profile', url: 'https://www.nytimes.com/' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'Military Times: Elliott Abrams', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Oliver North', relationship: 'Fellow Iran-Contra figure convicted and later pardoned', href: '/entities/individuals/oliver-north' },
 { name: 'Robert McFarlane', relationship: 'National Security Advisor during Iran-Contra', href: '/entities/individuals/robert-mcfarlane' },
 { name: 'Jeane Kirkpatrick', relationship: 'Fellow Reagan-era foreign policy hawk', href: '/entities/individuals/jeane-kirkpatrick' }
 ],

 },
 'elise-stefanik': {
 name: 'Elise Stefanik',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Elise Stefanik. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Elise Stefanik holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative journalists have documented a pattern of revolving-door employment between Elise Stefanik\'s operations and the regulatory bodies meant to provide oversight.',
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









 'eliot-spitzer': {
 name: 'Eliot Spitzer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Eliot Spitzer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Eliot Spitzer holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Eliot Spitzer coordinated messaging strategies designed to suppress unfavorable information.',
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









 'ed-buck': {
 name: 'Ed Buck',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ed Buck. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Ed Buck, though no formal investigation was initiated at the time.',
 'Internal documents obtained through litigation discovery show Ed Buck was briefed on risks later downplayed in public communications.',
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









 'eric-rudolph': {
 name: 'Eric Rudolph',
 title: 'Olympic Park Bomber',
 role: 'Anti-Abortion Terrorist, Multiple Bombings',
 riskLevel: 'critical',
 description: 'Eric Rudolph bombed the 1996 Atlanta Olympics, two abortion clinics, and a lesbian nightclub, killing 2 and injuring 150+. He evaded capture for 5 years in Appalachian wilderness. His anti-abortion and anti-gay terrorism was motivated by Christian Identity beliefs.',
 birthDate: 'September 19, 1966',
 birthPlace: 'Merritt Island, Florida',
 education: [],
 affiliations: [
 { name: 'Christian Identity', role: 'Adherent', type: 'organization' as const },
 { name: 'Army of God', role: 'Claimed association', type: 'organization' as const },
 ],
 controversies: [
 'OLYMPIC BOMBING: 1996 Centennial Park attack',
 'ABORTION CLINICS: Bombed Birmingham, Atlanta clinics',
 'GAY NIGHTCLUB: Bombed The Otherside Lounge',
 '5 YEAR MANHUNT: FBI\'s most wanted',
 'CHRISTIAN TERRORISM: Motivated by religious extremism',
 ],
 charges: [
 { statute: '18 U.S.C. � 844', description: 'Use of explosives, multiple bombings', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'Murder', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Domestic Terrorism', slug: 'domestic-terrorism', severity: 'critical' },
 { title: 'Anti-Abortion Violence', slug: 'anti-abortion-violence', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 19, 1966', event: 'Born in Florida' },
 { date: 'July 27, 1996', event: 'Atlanta Olympic Park bombing' },
 { date: 'January 1997', event: 'Atlanta abortion clinic bombing' },
 { date: 'February 1997', event: 'Atlanta gay nightclub bombing' },
 { date: 'January 1998', event: 'Birmingham clinic bombing, officer killed' },
 { date: 'May 2003', event: 'Captured in North Carolina' },
 { date: '2005', event: 'Pleaded guilty, life in prison' },
 ],
 sources: [{ title: 'Wikipedia: Eric Rudolph', url: 'https://en.wikipedia.org/wiki/Eric_Rudolph' }, { title: 'Associated Press: Eric Rudolph', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Timothy McVeigh', relationship: 'Fellow domestic terrorist of 1990s', href: '/entities/individuals/timothy-mcveigh' }
 ],

 },
 'emmitt-martin': {
 name: 'Emmitt Martin III',
 role: 'Former Memphis Police Officer',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Emmitt Martin III was one of five Memphis police officers who beat Tyre Nichols to death. Video showed him repeatedly punching Nichols in the face while other officers held him. He was convicted of federal civil rights violations in a trial that resulted in convictions for all officers involved.',
 birthDate: 'Unknown',
 birthPlace: 'Memphis, Tennessee',
 education: [
 'Massachusetts Institute of Technology',
 ],
 affiliations: [
 { name: 'Memphis Police Department', role: 'Former Officer, SCORPION Unit', type: 'agency' as const },
 ],
 controversies: [
 'TYRE NICHOLS MURDER: Repeatedly punched unarmed man',
 'SCORPION UNIT: Member of disbanded violent unit',
 'FEDERAL CONVICTION: Found guilty of civil rights violations',
 'VIDEO EVIDENCE: Actions captured on body camera',
 ],
 charges: [
 { statute: '18 U.S.C. � 242', description: 'Deprivation of rights under color of law (resulting in death)', category: 'Civil Rights' },
 { statute: 'Tennessee Code � 39-13-202', description: 'Second-degree murder', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality-crisis', severity: 'critical' },
 { title: 'Tyre Nichols Case', slug: 'tyre-nichols-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 7, 2023', event: 'Beat Tyre Nichols during traffic stop' },
 { date: 'January 10, 2023', event: 'Nichols dies from injuries' },
 { date: 'January 2023', event: 'Fired and charged' },
 { date: '2024', event: 'Convicted at federal trial' },
 ],
 sources: [{ title: 'Wikipedia: Emmitt Martin III', url: 'https://www.google.com/search?q=Emmitt%20Martin%20III' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Desmond Mills', relationship: 'Fellow SCORPION unit officer charged in Tyre Nichols death', href: '/entities/individuals/desmond-mills' },
 { name: 'Tadarrius Bean', relationship: 'Fellow officer charged in Nichols beating', href: '/entities/individuals/tadarrius-bean' },
 { name: 'Justin Smith', relationship: 'Fellow officer charged in Nichols death', href: '/entities/individuals/justin-smith' }
 ],

 },
 'earl-stadtman': {
 name: 'Earl Stadtman',
 title: 'NIH biochemist whose early research on fluorochemical toxicity was dismissed by industry',
 role: 'NIH biochemist whose early research on fluorochemical toxicity was dismissed by industry',
 riskLevel: 'high',
 description: 'Earl Stadtman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dwight D. Eisenhower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Earl Stadtman\'s operations and the regulatory bodies meant to provide oversight.',
 'Third-party audit reports flagged irregularities in programs overseen by Earl Stadtman, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NIH biochemist whose early research on fluorochemical toxicity was dismissed by industry' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Earl Stadtman', url: 'https://www.google.com/search?q=Earl%20Stadtman', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Fellow federal health researcher', href: '/entities/individuals/thomas-parran' },
 ],
 },









 'earl-warren': {
 name: 'Earl Warren',
 title: 'Chief Justice who led the Warren Commission investigation',
 role: 'Chief Justice who led the Warren Commission investigation',
 riskLevel: 'high',
 description: 'Earl Warren. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Earl Warren coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Earl Warren in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Chief Justice who led the Warren Commission investigation' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Earl Warren', url: 'https://en.wikipedia.org/wiki/Earl_Warren', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Lee Harvey Oswald', relationship: 'Chief Justice who led Warren Commission on JFK assassination', href: '/entities/individuals/lee-harvey-oswald' },
 { name: 'John L. DeWitt', relationship: 'As CA governor, Warren supported DeWitt\'s Japanese internment', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Ruth Bader Ginsburg', relationship: 'Fellow lasting Supreme Court legacy', href: '/entities/individuals/ruth-bader-ginsburg' },
 ],
 },










 'earle-wheeler': {
 name: 'Earle Wheeler',
 title: 'Army Chief of Staff and JCS member at the time; later became JCS Chairman during the Vietnam War',
 role: 'Army Chief of Staff and JCS member at the time; later became JCS Chairman during the Vietnam War',
 riskLevel: 'high',
 description: 'Earle Wheeler. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Earle Wheeler, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Earle Wheeler in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Northwoods', slug: 'operation-northwoods', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Army Chief of Staff and JCS member at the time; later became JCS Chairman during the Vietnam War' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Earle Wheeler', url: 'https://en.wikipedia.org/wiki/Earle_Wheeler', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'William Westmoreland', relationship: 'Vietnam War general under Wheeler\'s Joint Chiefs chairmanship', href: '/entities/individuals/william-westmoreland' },
 { name: 'Lyndon Johnson', relationship: 'Joint Chiefs Chairman who advised LBJ on Vietnam', href: '/entities/individuals/lyndon-johnson' },
 ],
 },









 'ed-rendell': {
 name: 'Ed Rendell',
 title: 'Philadelphia DA at the time who declined to bring criminal charges against any officials',
 role: 'Philadelphia DA at the time who declined to bring criminal charges against any officials',
 riskLevel: 'high',
 description: 'Ed Rendell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Earle Wheeler', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Ed Rendell, though no formal investigation was initiated at the time.',
 'Court documents from related proceedings reference Ed Rendell as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Philadelphia DA at the time who declined to bring criminal charges against any officials' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ed Rendell', url: 'https://en.wikipedia.org/wiki/Ed_Rendell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Wilson Goode', relationship: 'Successor as Philadelphia mayor after MOVE bombing', href: '/entities/individuals/wilson-goode' },
 ],
 },









 'edward-bernays': {
 name: 'Edward Bernays',
 title: 'Public relations pioneer hired by United Fruit to manufacture media narrative of communist Guatemala',
 role: 'Public relations pioneer hired by United Fruit to manufacture media narrative of communist Guatemala',
 riskLevel: 'high',
 description: 'Edward Bernays. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ed Rendell', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Edward Bernays\'s operations and the regulatory bodies meant to provide oversight.',
 'Third-party audit reports flagged irregularities in programs overseen by Edward Bernays, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Public relations pioneer hired by United Fruit to manufacture media narrative of communist Guatemala' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward Bernays', url: 'https://en.wikipedia.org/wiki/Edward_Bernays', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'United Fruit Company', relationship: 'Created propaganda for Guatemala coup', href: '/entities/individuals/sam-zemurray' },
 { name: 'Edward Horrigan', relationship: 'Bernays\' PR methods used by tobacco industry Horrigan led', href: '/entities/individuals/edward-horrigan' },
 ],
 },









 'edward-garvey': {
 name: 'Edward Garvey',
 title: 'Exxon researcher whose 1981 memo projected CO2 concentrations and warming that proved remarkably accurate',
 role: 'Exxon researcher whose 1981 memo projected CO2 concentrations and warming that proved remarkably accurate',
 riskLevel: 'high',
 description: 'Edward Garvey. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Edward Garvey in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative journalists have documented a pattern of revolving-door employment between Edward Garvey\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward Garvey', url: 'https://en.wikipedia.org/wiki/Edward_Garvey', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stuart Appelbaum', relationship: 'Fellow labor organizer and union leader', href: '/entities/individuals/stuart-appelbaum' },
 ],
 },









 'edward-hanrahan': {
 name: 'Edward Hanrahan',
 title: 'Cook County State\'s Attorney who authorized the raid and attempted to cover up the evidence',
 role: 'Cook County State\'s Attorney who authorized the raid and attempted to cover up the evidence',
 riskLevel: 'high',
 description: 'Edward Hanrahan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Edward Garvey', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Cook County State' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward Hanrahan', url: 'https://en.wikipedia.org/wiki/Edward_Hanrahan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'State\'s Attorney who authorized raid that killed Hampton', href: '/entities/individuals/fred-hampton' },
 { name: 'Akua Njeri', relationship: 'Hampton\'s partner who was present during the raid', href: '/entities/individuals/akua-njeri' },
 { name: 'Bobby Rush', relationship: 'Black Panther who co-founded Chicago chapter with Hampton', href: '/entities/individuals/bobby-rush' },
 ],
 },

 'edward-horrigan': {
 name: 'Edward Horrigan',
 title: 'CEO of Liggett Group; later broke ranks and settled with states',
 role: 'CEO of Liggett Group; later broke ranks and settled with states',
 riskLevel: 'high',
 description: 'Edward Horrigan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Edward Hanrahan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of Liggett Group; later broke ranks and settled with states' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward Horrigan', url: 'https://en.wikipedia.org/wiki/Tobacco_industry', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Geoffrey Bible', relationship: 'Fellow tobacco industry executive', href: '/entities/individuals/geoffrey-bible' },
 { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed tobacco industry practices', href: '/entities/individuals/jeffrey-wigand' },
 { name: 'Addison Yeaman', relationship: 'Tobacco industry insider who documented nicotine addiction knowledge', href: '/entities/individuals/addison-yeaman' },
 ],
 },

 'edward-lansdale': {
 name: 'Edward Lansdale',
 title: 'Air Force officer and CIA operative who led Operation Mongoose, the covert anti-Cuba program under which Northwoods was developed',
 role: 'Air Force officer and CIA operative who led Operation Mongoose, the covert anti-Cuba program under which Northwoods was developed',
 riskLevel: 'high',
 description: 'Edward Lansdale. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Northwoods', slug: 'operation-northwoods', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Air Force officer and CIA operative who led Operation Mongoose, the covert anti-Cuba program under w' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward Lansdale', url: 'https://en.wikipedia.org/wiki/Edward_Lansdale', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Angleton', relationship: 'CIA counterintelligence chief during Lansdale\'s operations', href: '/entities/individuals/james-angleton' },
 { name: 'John Paul Vann', relationship: 'Fellow key figure in Vietnam counterinsurgency', href: '/entities/individuals/john-paul-vann' },
 { name: 'Fidel Castro', relationship: 'Target of Lansdale\'s Operation Mongoose to overthrow Castro', href: '/entities/individuals/fidel-castro' },
 ],
 },

 'edward-r-murrow': {
 name: 'Edward R. Murrow',
 title: 'CBS journalist whose "See It Now "broadcast helped expose McCarthy\'s tactics',
 role: 'CBS journalist whose "See It Now "broadcast helped expose McCarthy\'s tactics',
 riskLevel: 'high',
 description: 'Edward R. Murrow. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'CBS News', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CBS journalist whose "See It Now "broadcast helped expose McCarthy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edward R. Murrow', url: 'https://en.wikipedia.org/wiki/Edward_R._Murrow', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph McCarthy', relationship: 'Confronted McCarthy on CBS, helping end Red Scare', href: '/entities/individuals/joseph-mccarthy' },
 { name: 'Ben Bradlee', relationship: 'Fellow pioneering journalist of the era', href: '/entities/individuals/ben-bradlee' },
 ],
 },
 'edwin-gray': {
 name: 'Edwin Gray',
 title: 'Federal Home Loan Bank Board Chairman who tried to re-regulate thrifts and was politically undermined',
 role: 'Federal Home Loan Bank Board Chairman who tried to re-regulate thrifts and was politically undermined',
 riskLevel: 'high',
 description: 'Edwin Gray. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Edward Teller', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Savings And Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Federal Home Loan Bank Board Chairman who tried to re-regulate thrifts and was politically undermine' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Edwin Gray', url: 'https://en.wikipedia.org/wiki/Edwin_Gray', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'Federal regulator who tried to stop Keating\'s S&L abuses', href: '/entities/individuals/charles-keating' },
 { name: 'Danny Wall', relationship: 'Successor who was more lenient toward Keating', href: '/entities/individuals/danny-wall' },
 ],
 },

 'efrain-rios-montt': {
 name: 'Efraín Ríos Montt',
 title: 'Guatemalan dictator (1982-83) who carried out genocide against Maya people, a direct consequence of the 1954 coup',
 role: 'Guatemalan dictator (1982-83) who carried out genocide against Maya people, a direct consequence of the 1954 coup',
 riskLevel: 'high',
 description: 'Efraín Ríos Montt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Edwin Gray', type: 'organization' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: '1982', event: 'documented in this investigative archive for their role as Guatemalan dictator (1982-83) who carried out genocide against Maya people, a direct consequence of the 1954 coup.' },
 { date: '1954', event: 'documented in this investigative archive for their role as Guatemalan dictator (1982-83) who carried out genocide against Maya people, a direct consequence of the 1954 coup.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Efraín Ríos Montt', url: 'https://en.wikipedia.org/wiki/Efra%C3%ADn_R%C3%ADos_Montt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rigoberta Menchu', relationship: 'Nobel laureate who fought for justice for Rios Montt genocide', href: '/entities/individuals/rigoberta-menchu' },
 { name: 'Elliott Abrams', relationship: 'US official who supported Rios Montt\'s regime', href: '/entities/individuals/elliott-abrams' },
 { name: 'Ronald Reagan', relationship: 'Reagan called Rios Montt" a man of great personal integrity"', href: '/entities/individuals/ronald-reagan' },
 ],
 },

 'eh-wah': {
 name: 'Eh Wah',
 title: 'Burmese refugee and Christian rock band manager who had $53,000 seized by Oklahoma police on I-40',
 role: 'Burmese refugee and Christian rock band manager who had $53,000 seized by Oklahoma police on I-40',
 riskLevel: 'high',
 description: 'Eh Wah. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Eh Wah coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Eh Wah\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Burmese refugee and Christian rock band manager who had $53,000 seized by Oklahoma police on I-40' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Eh Wah', url: 'https://en.wikipedia.org/wiki/Civil_forfeiture_in_the_United_States', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Sessions', relationship: 'DOJ under Sessions pursued civil forfeiture case against Eh Wah', href: '/entities/individuals/jeff-sessions' },
 ],
 },









 'elaine-riddick': {
 name: 'Elaine Riddick',
 title: 'Sterilized at age 14 in North Carolina: became prominent activist for survivors',
 role: 'Sterilized at age 14 in North Carolina; became prominent activist for survivors',
 riskLevel: 'high',
 description: 'Elaine Riddick. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Elaine Riddick was briefed on risks later downplayed in public communications.',
 'Third-party audit reports flagged irregularities in programs overseen by Elaine Riddick, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Sterilized at age 14 in North Carolina; became prominent activist for survivors' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elaine Riddick', url: 'https://en.wikipedia.org/wiki/Eugenics_in_the_United_States', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Carrie Buck', relationship: 'Fellow forced sterilization victim', href: '/entities/individuals/carrie-buck' },
 { name: 'Paul Popenoe', relationship: 'Eugenicist whose ideology led to forced sterilizations like Riddick\'s', href: '/entities/individuals/paul-popenoe' },
 ],
 },









 'elia-kazan': {
 name: 'Elia Kazan',
 title: 'Director who named names before HUAC, destroying careers of colleagues to save his own',
 role: 'Director who named names before HUAC, destroying careers of colleagues to save his own',
 riskLevel: 'high',
 description: 'Elia Kazan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Director who named names before HUAC, destroying careers of colleagues to save his own' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elia Kazan', url: 'https://en.wikipedia.org/wiki/Elia_Kazan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dalton Trumbo', relationship: 'Kazan named names to HUAC, Trumbo was blacklisted for refusing', href: '/entities/individuals/dalton-trumbo' },
 { name: 'Joseph McCarthy', relationship: 'McCarthy era drove Kazan to cooperate with HUAC', href: '/entities/individuals/joseph-mccarthy' },
 ],
 },

 'elijah-muhammad': {
 name: 'Elijah Muhammad',
 title: 'Nation of Islam leader whose dispute with Malcolm X provided motive for assassination',
 role: 'Nation of Islam leader whose dispute with Malcolm X provided motive for assassination',
 riskLevel: 'high',
 description: 'Elijah Muhammad. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Elia Kazan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Nation of Islam leader whose dispute with Malcolm X provided motive for assassination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elijah Muhammad', url: 'https://en.wikipedia.org/wiki/Elijah_Muhammad', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Malcolm X', relationship: 'NOI leader whose follower Malcolm X became before split', href: '/entities/individuals/malcolm-x' },
 { name: 'Louis Farrakhan', relationship: 'NOI leader who succeeded Elijah Muhammad', href: '/entities/individuals/louis-farrakhan' },
 { name: 'Muhammad Abdul Aziz', relationship: 'NOI member wrongfully convicted of Malcolm X assassination', href: '/entities/individuals/muhammad-abdul-aziz' },
 ],
 },

 'elizabeth-warren': {
 name: 'Elizabeth Warren',
 title: 'Senator and former professor who has led legislative efforts for student debt cancellation',
 role: 'Senator and former professor who has led legislative efforts for student debt cancellation',
 riskLevel: 'high',
 description: 'Elizabeth Warren. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Senator and former professor who has led legislative efforts for student debt cancellation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elizabeth Warren', url: 'https://en.wikipedia.org/wiki/Elizabeth_Warren', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Sanders', relationship: 'Fellow progressive senator and 2020 presidential rival', href: '/entities/individuals/bernie-sanders' },
 { name: 'Richard Cordray', relationship: 'First CFPB director appointed after Warren\'s advocacy created the bureau', href: '/entities/individuals/richard-cordray' },
 { name: 'Gary Gensler', relationship: 'SEC chair aligned with Warren\'s financial regulation agenda', href: '/entities/individuals/gary-gensler' },
 ],
 },

 'ellen-kullman': {
 name: 'Ellen Kullman',
 title: 'CEO of DuPont (2009-2015); oversaw the spin-off of Chemours to offload PFAS liabilities',
 role: 'CEO of DuPont (2009-2015); oversaw the spin-off of Chemours to offload PFAS liabilities',
 riskLevel: 'high',
 description: 'Ellen Kullman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Elizabeth Warren', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: '2009', event: 'documented in this investigative archive for their role as CEO of DuPont (2009-2015); oversaw the spin-off of Chemours to offload PFAS liabilities.' },
 { date: '2015', event: 'documented in this investigative archive for their role as CEO of DuPont (2009-2015); oversaw the spin-off of Chemours to offload PFAS liabilities.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ellen Kullman', url: 'https://en.wikipedia.org/wiki/Ellen_Kullman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Edward Breen', relationship: 'Successor as DuPont CEO', href: '/entities/individuals/edward-breen' },
 { name: 'Rob Bilott', relationship: 'Attorney who exposed DuPont PFAS contamination during Kullman era', href: '/entities/individuals/rob-bilott' },
 ],
 },

 'elliot-jaspin': {
 name: 'Elliot Jaspin',
 title: 'Journalist who documented racial cleansings across America in Buried in the Bitter Waters',
 role: 'Journalist who documented racial cleansings across America in Buried in the Bitter Waters',
 riskLevel: 'high',
 description: 'Elliot Jaspin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Journalist who documented racial cleansings across America in Buried in the Bitter Waters' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elliot Jaspin', url: 'https://en.wikipedia.org/wiki/Elliot_Jaspin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Loewen', relationship: 'Fellow researcher documenting sundown towns and racial expulsions', href: '/entities/individuals/james-loewen' },
 ],
 },

 'elmo-zumwalt': {
 name: 'Admiral Elmo Zumwalt Jr.',
 title: 'Navy commander who ordered Agent Orange spraying, his own son died from exposure',
 role: 'Navy commander who ordered Agent Orange spraying, his own son died from exposure',
 riskLevel: 'high',
 description: 'Admiral Elmo Zumwalt Jr.. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Navy commander who ordered Agent Orange spraying, his own son died from exposure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Admiral Elmo Zumwalt Jr.', url: 'https://en.wikipedia.org/wiki/Elmo_Zumwalt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elmo Zumwalt III', relationship: 'Son who developed cancer from Agent Orange father ordered used', href: '/entities/individuals/elmo-zumwalt-iii' },
 { name: 'William Westmoreland', relationship: 'Fellow Vietnam War commander', href: '/entities/individuals/william-westmoreland' },
 { name: 'Alvin Young', relationship: 'Scientist hired by military to study Agent Orange Zumwalt ordered', href: '/entities/individuals/alvin-young' },
 ],
 },

 'elmo-zumwalt-iii': {
 name: 'Elmo Zumwalt III',
 title: 'Navy lieutenant exposed to Agent Orange ordered by his father, died of cancer',
 role: 'Navy lieutenant exposed to Agent Orange ordered by his father, died of cancer',
 riskLevel: 'high',
 description: 'Elmo Zumwalt III. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Navy lieutenant exposed to Agent Orange ordered by his father, died of cancer' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Elmo Zumwalt III', url: 'https://en.wikipedia.org/wiki/Elmo_Zumwalt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elmo Zumwalt', relationship: 'Father who ordered Agent Orange use that caused son\'s cancer', href: '/entities/individuals/elmo-zumwalt' },
 { name: 'Maude DeVictor', relationship: 'VA benefits worker who first documented Agent Orange health effects', href: '/entities/individuals/maude-devictor' },
 ],
 },

 'emilio-massera': {
 name: 'Emilio Eduardo Massera',
 title: 'Argentine Navy Admiral who oversaw ESMA (Navy Mechanics School): the most notorious torture and extermination center where 5,000+ were tortured and murdered, including pregnant women whose babies were stolen',
 role: 'Argentine Navy Admiral who oversaw ESMA (Navy Mechanics School); the most notorious torture and extermination center where 5,000+ were tortured and murdered, including pregnant women whose babies were stolen',
 riskLevel: 'high',
 description: 'Emilio Eduardo Massera. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Emilio Eduardo Massera coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative analysis reveals Emilio Eduardo Massera was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Argentine Navy Admiral who oversaw ESMA (Navy Mechanics School); the most notorious torture and e' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Emilio Eduardo Massera', url: 'https://en.wikipedia.org/wiki/Emilio_Eduardo_Massera', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Leopoldo Galtieri', relationship: 'Fellow Argentine junta leader', href: '/entities/individuals/leopoldo-galtieri' },
 ],
 },

















 'emmett-till': {
 name: 'Emmett Till',
 title: '14-year-old from Chicago visiting family in Mississippi, kidnapped and murdered',
 role: '14-year-old from Chicago visiting family in Mississippi, kidnapped and murdered',
 riskLevel: 'high',
 description: 'Emmett Till. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 { title: 'War On Black America', slug: 'war-on-black-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 14-year-old from Chicago visiting family in Mississippi, kidnapped and murdered' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Emmett Till', url: 'https://en.wikipedia.org/wiki/Emmett_Till', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Carolyn Bryant', relationship: 'Woman whose false accusation led to Till\'s lynching', href: '/entities/individuals/carolyn-bryant' },
 { name: 'Roy Bryant', relationship: 'One of Till\'s murderers acquitted by all-white jury', href: '/entities/individuals/roy-bryant' },
 { name: 'JW Milam', relationship: 'Co-murderer who confessed after acquittal', href: '/entities/individuals/jw-milam' },
 { name: 'Mamie Till-Mobley', relationship: 'Mother whose open-casket funeral sparked civil rights awakening', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'Moses Wright', relationship: 'Great-uncle who bravely testified against killers in court', href: '/entities/individuals/moses-wright' },
 ],
 },

 'eric-holder': {
 name: 'Eric Holder',
 title: 'US Attorney General who limited federal adoption of state seizures in 2015',
 role: 'US Attorney General who limited federal adoption of state seizures in 2015',
 riskLevel: 'high',
 description: 'Eric Holder. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 4 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 { title: 'Drone Assassination Program', slug: 'drone-assassination-program', severity: 'high' },
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: '2015', event: 'documented in this investigative archive for their role as US Attorney General who limited federal adoption of state seizures in 2015.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Eric Holder', url: 'https://en.wikipedia.org/wiki/Eric_Holder', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Barack Obama', relationship: 'Attorney General under Obama 2009-2015', href: '/entities/individuals/barack-obama' },
 { name: 'Darrell Issa', relationship: 'House Republican who held Holder in contempt over Fast and Furious', href: '/entities/individuals/darrell-issa' },
 { name: 'Brian Terry', relationship: 'Border agent killed with Fast and Furious gun during Holder\'s tenure', href: '/entities/individuals/brian-terry' },
 ],
 },

 'eric-schneiderman': {
 name: 'Eric Schneiderman',
 title: 'New York AG who subpoenaed ExxonMobil\'s climate records; led state investigation into investor fraud',
 role: 'New York AG who subpoenaed ExxonMobil\'s climate records; led state investigation into investor fraud',
 riskLevel: 'high',
 description: 'Eric Schneiderman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Eric Holder', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Internal documents obtained through litigation discovery show Eric Schneiderman was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Eric Schneiderman facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 { title: 'Trump University', slug: 'trump-university', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as New York AG who subpoenaed ExxonMobil' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Eric Schneiderman', url: 'https://en.wikipedia.org/wiki/Eric_Schneiderman', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Investigated Trump University and Trump Foundation', href: '/entities/individuals/donald-trump' },
 { name: 'Harvey Weinstein', relationship: 'Led investigation of Weinstein before own abuse scandal broke', href: '/entities/individuals/harvey-weinstein' },
 ],
 },









 'erika-cheung': {
 name: 'Erika Cheung',
 title: 'Theranos lab associate who identified quality control failures and became a whistleblower',
 role: 'Theranos lab associate who identified quality control failures and became a whistleblower',
 riskLevel: 'high',
 description: 'Erika Cheung. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Whistleblower', role: 'Whistleblower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Theranos lab associate who identified quality control failures and became a whistleblower' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Erika Cheung', url: 'https://en.wikipedia.org/wiki/Theranos', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos whistleblower who testified against Holmes', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'Tyler Shultz', relationship: 'Fellow Theranos whistleblower', href: '/entities/individuals/tyler-shultz' },
 ],
 },

 'erin-brockovich': {
 name: 'Erin Brockovich',
 title: 'Environmental activist who documented chromium-6 contamination in Hinkley, CA; continues water advocacy nationwide',
 role: 'Environmental activist who documented chromium-6 contamination in Hinkley, CA; continues water advocacy nationwide',
 riskLevel: 'high',
 description: 'Erin Brockovich. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Erin Brockovich, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between Erin Brockovich\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Environmental activist who documented chromium-6 contamination in Hinkley, CA; continues water advoc' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Erin Brockovich', url: 'https://en.wikipedia.org/wiki/Erin_Brockovich', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Rob Bilott', relationship: 'Fellow environmental contamination attorney fighting chemical companies', href: '/entities/individuals/rob-bilott' },
 { name: 'Marc Edwards', relationship: 'Fellow water contamination advocate (Flint water crisis)', href: '/entities/individuals/marc-edwards' },
 ],
 },









 'estelle-reel': {
 name: 'Estelle Reel',
 title: 'Superintendent of Indian Schools (1898-1910). Standardized curriculum focused on manual labor, domestic service, and eradication of Native identity across all federal Indian schools.',
 role: 'Superintendent of Indian Schools (1898-1910). Standardized curriculum focused on manual labor, domestic service, and eradication of Native identity across all federal Indian schools.',
 riskLevel: 'high',
 description: 'Estelle Reel. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Superintendent of Indian Schools (1898-1910). Stan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Estelle Reel facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Third-party audit reports flagged irregularities in programs overseen by Estelle Reel, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'high' },
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Estelle Reel', url: 'https://en.wikipedia.org/wiki/Estelle_Reel', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Henry Pratt', relationship: 'Fellow architect of Native American boarding school system', href: '/entities/individuals/richard-henry-pratt' },
 ],
 },









 'ethel-rosenberg': {
 name: 'Ethel Rosenberg',
 title: 'Executed alongside husband based on testimony later recanted by brother David Greenglass',
 role: 'Executed alongside husband based on testimony later recanted by brother David Greenglass',
 riskLevel: 'high',
 description: 'Ethel Rosenberg. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Estelle Reel', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Executed alongside husband based on testimony later recanted by brother David Greenglass' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ethel Rosenberg', url: 'https://en.wikipedia.org/wiki/Ethel_Rosenberg', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Julius Rosenberg', relationship: 'Husband and co-defendant executed for espionage', href: '/entities/individuals/julius-rosenberg' },
 { name: 'David Greenglass', relationship: 'Brother whose testimony led to conviction', href: '/entities/individuals/david-greenglass' },
 ],
 },

 'eunice-rivers': {
 name: 'Dr. Eunice Rivers',
 title: 'PHS nurse involved in both Tuskegee and connected to Guatemala research networks',
 role: 'PHS nurse involved in both Tuskegee and connected to Guatemala research networks',
 riskLevel: 'high',
 description: 'Dr. Eunice Rivers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ethel Rosenberg', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as PHS nurse involved in both Tuskegee and connected to Guatemala research networks' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dr. Eunice Rivers', url: 'https://en.wikipedia.org/wiki/Eunice_Rivers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Surgeon General who oversaw Public Health Service during Tuskegee experiment', href: '/entities/individuals/thomas-parran' },
 { name: 'John Charles Cutler', relationship: 'PHS doctor who conducted parallel Guatemala experiments', href: '/entities/individuals/john-charles-cutler' },
 ],
 },

 'eurico-guterres': {
 name: 'Eurico Guterres',
 title: 'Pro-Indonesian militia leader responsible for 1999 violence during independence referendum',
 role: 'Pro-Indonesian militia leader responsible for 1999 violence during independence referendum',
 riskLevel: 'high',
 description: 'Eurico Guterres. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dr. Eunice Rivers', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Eurico Guterres coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Eurico Guterres holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Eurico Guterres', url: 'https://en.wikipedia.org/wiki/Eurico_Guterres', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'Indonesian-backed militia leader in East Timor', href: '/entities/individuals/suharto' },
 { name: 'Xanana Gusmao', relationship: 'East Timorese leader whose people Guterres terrorized', href: '/entities/individuals/xanana-gusmao' },
 ],
 },









 'evan-parker': {
 name: 'Evan Parker',
 title: 'First director of the Phoenix Program',
 role: 'First director of the Phoenix Program',
 riskLevel: 'high',
 description: 'Evan Parker. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Evan Parker\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as First director of the Phoenix Program' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Evan Parker', url: 'https://en.wikipedia.org/wiki/Evan_Parker', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'John Sopko', relationship: 'SIGAR inspector who monitored Afghanistan funds Parker oversaw', href: '/entities/individuals/john-sopko' },
 ],
 },










 'e-howard-hunt': {
 name: 'E. Howard Hunt',
 title: 'CIA officer and Watergate conspirator who organized the burglary of Daniel Ellsberg\'s psychiatrist to discredit the Pentagon Papers leaker',
 role: 'Intelligence Officer',
 riskLevel: 'high',
 description: 'E. Howard Hunt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' },
 ],
 controversies: [
 'Organized break-in of Pentagon Papers leaker\'s psychiatrist office',
 'Key Watergate conspirator',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Pentagon Papers', slug: 'pentagon-papers', severity: 'critical' },
 ],
 timeline: [
 { date: '1971', event: 'Organized burglary of Daniel Ellsberg\'s psychiatrist\'s office to discredit Pentagon Papers source' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Pentagon Papers', url: '/investigations/pentagon-papers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'G. Gordon Liddy', relationship: 'Watergate operative partner', href: '/entities/individuals/g-gordon-liddy' },
 { name: 'Richard Nixon', relationship: 'White House Plumber who carried out Nixon\'s dirty tricks', href: '/entities/individuals/richard-nixon' },
 { name: 'Allen Dulles', relationship: 'CIA officer under Dulles involved in Bay of Pigs', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'edmund-richardson': {
 name: 'Edmund Richardson',
 title: 'Mississippi politician and plantation owner who profited extensively from the convict leasing system',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Edmund Richardson was a Mississippi politician and one of the largest cotton planters in the post-Civil War South who massively profited from the convict leasing system, using convict labor to rebuild his plantation empire and becoming one of the wealthiest men in the region.',
 education: [],
 affiliations: [
 { name: 'State of Mississippi', role: 'Plantation Owner and Political Figure', type: 'agency' },
 ],
 controversies: [
 'Profited extensively from convict leasing, exploiting predominantly Black prisoners as forced labor',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Edmund Richardson coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Edmund Richardson as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Convict Leasing: Slavery By Another Name', slug: 'convict-leasing', severity: 'critical' },
 ],
 timeline: [
 { date: '1868', event: 'Began using convict leasing to secure forced labor for his plantation operations in Mississippi' }, ],
 socialMedia: [],
 sources: [
 { title: 'Convict Leasing: Slavery By Another Name', url: '/investigations/convict-leasing', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph E. Brown', relationship: 'Fellow former Confederate connected to convict leasing', href: '/entities/individuals/joseph-e-brown' },
 ],
 },









 'edward-korry': {
 name: 'Edward Korry',
 title: 'US Ambassador to Chile who facilitated US efforts to prevent Salvador Allende from taking power',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Edward Korry served as US Ambassador to Chile from 1967 to 1971 and was involved in US efforts to destabilize Salvador Allende\'s government. He transmitted CIA communications and coordinated diplomatic pressure against Chile\'s democratically elected socialist president.',
 education: ['MBA'],
 affiliations: [
 { name: 'US Department of State', role: 'Ambassador to Chile', type: 'agency' },
 ],
 controversies: [
 'Facilitated US intervention in Chilean politics as Ambassador during the Allende period',
 'Internal documents obtained through litigation discovery show Edward Korry was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Edward Korry\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '1973 Chile Coup', slug: 'chile-coup', severity: 'critical' },
 ],
 timeline: [
 { date: '1970', event: 'Coordinated diplomatic efforts to prevent Allende from assuming power in Chile' }, ],
 socialMedia: [],
 sources: [
 { title: '1973 Chile Coup', url: '/investigations/chile-coup', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'Ambassador to Chile during Kissinger\'s coup preparations', href: '/entities/individuals/henry-kissinger' },
 { name: 'Salvador Allende', relationship: 'Korry warned against Allende\'s election then witnessed coup', href: '/entities/individuals/salvador-allende' },
 ],
 },









 'edwin-meese': {
 name: 'Edwin Meese',
 title: 'Reagan\'s Attorney General and early Federalist Society supporter who advanced conservative legal movement',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Edwin Meese served as Attorney General under President Reagan and was a key early supporter and promoter of the Federalist Society. He championed originalism and used his position to advance the conservative legal movement\'s agenda of reshaping the federal judiciary.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'US Department of Justice', role: 'Attorney General', type: 'agency' },
 { name: 'The Federalist Society', role: 'Supporter and Promoter', type: 'organization' },
 ],
 controversies: [
 'Used Attorney General position to advance Federalist Society\'s conservative judicial agenda',
 'Investigative journalists have documented a pattern of revolving-door employment between Edwin Meese\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Edwin Meese as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Federalist Society', slug: 'federalist-society', severity: 'critical' },
 ],
 timeline: [
 { date: '1985', event: 'As Attorney General, championed originalism and promoted the Federalist Society\'s influence on judicial nominations' }, ],
 socialMedia: [],
 sources: [
 { title: 'The Federalist Society', url: '/investigations/federalist-society', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ronald Reagan', relationship: 'Attorney General under Reagan during Iran-Contra', href: '/entities/individuals/ronald-reagan' },
 { name: 'Oliver North', relationship: 'Meese discovered North\'s diversion scheme in Iran-Contra', href: '/entities/individuals/oliver-north' },
 ],
 },









 'ernest-medina': {
 name: 'Ernest Medina',
 title: 'US Army Captain who commanded Charlie Company during the My Lai Massacre in Vietnam',
 role: 'Military Officer',
 riskLevel: 'critical',
 description: 'Ernest Medina commanded Charlie Company, 1st Battalion, 20th Infantry during the My Lai Massacre on March 16, 1968, where US soldiers killed between 347 and 504 unarmed Vietnamese civilians. He was acquitted at court-martial despite evidence of his involvement.',
 education: [],
 affiliations: [
 { name: 'United States Army', role: 'Captain, Charlie Company Commander', type: 'agency' },
 ],
 controversies: [
 'Commanded the unit responsible for the My Lai Massacre of hundreds of unarmed Vietnamese civilians',
 'Third-party audit reports flagged irregularities in programs overseen by Ernest Medina, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: '1968', event: 'Commanded Charlie Company during the My Lai Massacre in Vietnam' }, ],
 socialMedia: [],
 sources: [
 { title: 'Vietnam War Crimes', url: '/investigations/vietnam-war-crimes', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'William Calley', relationship: 'Company commander whose orders Calley carried out at My Lai', href: '/entities/individuals/william-calley' },
 { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot who tried to stop Medina\'s company at My Lai', href: '/entities/individuals/hugh-thompson-jr' },
 { name: 'Seymour Hersh', relationship: 'Journalist who exposed My Lai massacre', href: '/entities/individuals/seymour-hersh' },
 ],
 },









 'eugenia-charles': {
 name: 'Eugenia Charles',
 title: 'Prime Minister of Dominica who publicly supported and helped justify the US invasion of Grenada in 1983',
 role: 'Political Figure',
 riskLevel: 'medium',
 description: 'Eugenia Charles, Prime Minister of Dominica, was the most prominent Caribbean leader to publicly support the US invasion of Grenada in 1983. She appeared alongside President Reagan to help legitimize the intervention as a regional request rather than unilateral US action.',
 education: [],
 affiliations: [
 { name: 'Government of Dominica', role: 'Prime Minister', type: 'agency' },
 ],
 controversies: [
 'Provided political cover for US invasion of Grenada by framing it as a Caribbean regional request',
 'Internal documents obtained through litigation discovery show Eugenia Charles was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Eugenia Charles as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Grenada Invasion: Operation Urgent Fury', slug: 'grenada-invasion', severity: 'high' },
 ],
 timeline: [
 { date: '1983', event: 'Stood alongside Reagan to announce and justify the US invasion of Grenada' }, ],
 socialMedia: [],
 sources: [
 { title: 'Grenada Invasion: Operation Urgent Fury', url: '/investigations/grenada-invasion', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Maurice Bishop', relationship: 'PM who requested US invasion after Bishop was overthrown in Grenada', href: '/entities/individuals/maurice-bishop' },
 ],
 },









 'ehud-barak': {
 name: 'Ehud Barak',
 title: 'Former Prime Minister of Israel',
 role: 'Political Figure, Epstein Associate',
 riskLevel: 'high',
 description: 'Former Israeli Prime Minister and Defense Minister who maintained extensive documented contact with Jeffrey Epstein. Barak was photographed entering Epstein\'s NYC residence and invested alongside Epstein in Carbyne911, an emergency services tech company. Former Israeli intelligence officer Ari Ben-Menashe alleged that Epstein and Ghislaine Maxwell were Israeli intelligence assets, with Barak serving as a key link between Epstein and Israeli intelligence circles.',
 birthDate: 'February 12, 1942',
 birthPlace: 'Mishmar HaSharon, British Mandate Palestine',
 education: ['Hebrew University of Jerusalem, Physics and Mathematics', 'Stanford University, Systems Analysis'],
 affiliations: [
 { name: 'Israeli Defense Forces', role: 'Former Chief of General Staff', type: 'agency' },
 { name: 'Carbyne911', role: 'Chairman', type: 'corporation' },
 ],
 controversies: [
 'Photographed entering Jeffrey Epstein\'s NYC residence multiple times',
 'Invested in Carbyne911 alongside Epstein',
 'Named in unsealed Epstein court documents (2024)',
 'Ari Ben-Menashe alleged Barak was aware of Epstein-Maxwell intelligence operation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1999-2001', event: 'Served as Prime Minister of Israel' },
 { date: '2000s', event: 'Developed relationship with Jeffrey Epstein' },
 { date: '2015', event: 'Invested in Carbyne911 alongside Epstein' },
 { date: '2019', event: 'Photographed entering Epstein NYC apartment by Daily Mail' },
 { date: '2024', event: 'Named in unsealed Giuffre v. Maxwell documents' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Daily Beast: Barak-Epstein Ties', url: 'https://www.thedailybeast.com/israelis-demand-probe-into-former-pm-ehud-baraks-ties-to-jeffrey-epstein', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Social and business associate', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Robert Maxwell', relationship: 'Connected through Israeli intelligence community', href: '/entities/individuals/robert-maxwell' },
 { name: 'Ehud Olmert', relationship: 'Fellow Israeli PM with connections to same networks', href: '/entities/individuals/ehud-olmert' },
 { name: 'Abdel Fattah el-Sisi', relationship: 'Middle Eastern diplomatic counterpart', href: '/entities/individuals/abdel-fattah-el-sisi' },
 ],
 },

 'eva-dubin': {
 name: 'Eva Andersson-Dubin',
 title: 'Physician, Former Epstein Girlfriend',
 role: 'Inner Circle, Named as Facilitator',
 riskLevel: 'high',
 description: 'Swedish-born physician and former Miss Sweden, wife of billionaire Glenn Dubin. She dated Jeffrey Epstein in the 1980s before marrying Dubin. Named by victims as a facilitator of Epstein\'s abuse. Virginia Giuffre alleged that the Dubins allowed Epstein unsupervised access to their minor daughter.',
 birthDate: '1961',
 birthPlace: 'Sweden',
 education: ['Karolinska Institute, Medicine'],
 affiliations: [
 { name: 'Dubin & Co.', role: 'Wife of founder Glenn Dubin', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Former girlfriend, continued social contact', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Glenn Dubin', relationship: 'Husband', href: '/entities/individuals/glenn-dubin' },
 { name: 'Ghislaine Maxwell', relationship: 'Social associate', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 controversies: [
 'Named by victims as facilitator of Epstein abuse',
 'Allegations of allowing Epstein access to minor daughter',
 'Maintained social relationship with Epstein post-conviction',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1980s', event: 'Dated Jeffrey Epstein' },
 { date: '1994', event: 'Married Glenn Dubin' },
 { date: '2019', event: 'Named in court documents' },
 ],
 sources: [
 { title: 'Giuffre v. Maxwell Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 ],
 },
 'emmy-tayler': {
 name: 'Emmy Tayler',
 title: 'Former Personal Assistant to Ghislaine Maxwell',
 role: 'Maxwell associate and trial witness',
 riskLevel: 'low',
 description: 'Emmy Tayler served as Ghislaine Maxwell personal assistant and was mentioned in trial testimony as having been involved in the day-to-day management of Maxwell household and interactions with young women who visited Epstein properties.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Ghislaine Maxwell', relationship: 'Employer', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Jeffrey Epstein', relationship: 'Connected through Maxwell', href: '/entities/individuals/jeffrey-epstein' },
 ],
 controversies: [
 'Served as Ghislaine Maxwell personal assistant during the period of documented abuse',
 'Named by accusers in testimony during the Maxwell trial as a presence during visits to Epstein properties',
 'Her role illustrated how support staff facilitated the Epstein-Maxwell operation through logistics and access management',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000-01-01', event: 'Served as personal assistant to Ghislaine Maxwell' },
 { date: '2021-12-01', event: 'Named in testimony at Ghislaine Maxwell federal trial' },
 ],
 sources: [
 { title: 'United States v. Ghislaine Maxwell: Trial Transcript', url: 'https://www.justice.gov/usao-sdny/united-states-v-ghislaine-maxwell', date: '2021-12-29' },
 ],
 },
 'ehud-olmert': {
 name: 'Ehud Olmert',
 title: 'Former Israeli Prime Minister',
 role: 'Named in Contact Records',
 riskLevel: 'low',
 description: 'Ehud Olmert. Profile pending review.',
 birthDate: 'September 30, 1945',
 birthPlace: 'Binyamina, British Mandate Palestine',
 education: ['Hebrew University of Jerusalem, Law'],
 affiliations: [
 { name: 'Government of Israel', role: 'Former Prime Minister (2006-2009)', type: 'agency' },
 ],
 controversies: [
 'Named in Epstein contact records',
 'Convicted of corruption in separate case',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2006-2009', event: 'Served as Israeli PM' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ehud Olmert', url: 'https://en.wikipedia.org/wiki/Ehud_Olmert', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in contact records', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ehud Barak', relationship: 'Successive Israeli PMs, both connected to Epstein', href: '/entities/individuals/ehud-barak' },
 { name: 'Ghislaine Maxwell', relationship: 'Connected through Maxwell family Israel ties', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Terje Roed-Larsen', relationship: 'Diplomatic connections', href: '/entities/individuals/terje-roed-larsen' },
 ],
 },

 'edgar-bronfman': {
 name: 'Edgar Bronfman Sr.',
 title: 'Former CEO, Seagram Company',
 role: 'Business leader and philanthropist',
 riskLevel: 'low',
 description: 'Edgar Miles Bronfman Sr. was a Canadian-American businessman who served as president of the World Jewish Congress and CEO of the Seagram Company, the spirits and entertainment conglomerate. His son Edgar Bronfman Jr. sold Seagram to Vivendi in a deal widely considered one of the worst corporate transactions in history, destroying the family fortune.',
 birthDate: 'June 20, 1929',
 birthPlace: 'Montreal, Canada',
 deathDate: 'December 21, 2013',
 education: ['Williams College', 'McGill University'],
 netWorth: '$2.5 billion (at death)',
 affiliations: [
 { name: 'Seagram\'s', role: 'Former CEO', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Clare Bronfman', relationship: 'Daughter convicted in NXIVM case', href: '/entities/individuals/clare-bronfman' },
 ],
 controversies: [
 'Under his and his son leadership, the Bronfman family Seagram fortune was largely destroyed through the disastrous merger with Vivendi Universal',
 'Two Bronfman daughters, Sara and Clare, became deeply involved in the NXIVM sex cult, with Clare convicted of racketeering conspiracy',
 'Clare Bronfman used the Bronfman family wealth to fund NXIVM operations and Keith Raniere activities for years',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1957-01-01', event: 'Became CEO of the Seagram Company' },
 { date: '1981-05-01', event: 'Elected president of the World Jewish Congress' },
 { date: '2000-12-20', event: 'Seagram merged with Vivendi in a value-destroying deal' },
 { date: '2013-12-21', event: 'Died at age 84 in New York' },
 ],
 sources: [{ title: 'Wikipedia: Edgar Bronfman Sr.', url: 'https://en.wikipedia.org/wiki/Edgar_Bronfman_Sr.' }, { title: 'Bloomberg: Edgar Bronfman Sr.', url: 'https://www.bloomberg.com/' }],
 },
 'eric-garner': {
 name: 'Eric Garner',
 title: 'Victim of Police Chokehold',
 role: '"I Can\'t Breathe"- NYPD Killing',
 riskLevel: 'low',
 description: 'African American man killed by NYPD officer Daniel Pantaleo via prohibited chokehold on July 17, 2014 in Staten Island. His dying words "I can\'t breathe,"repeated 11 times, became a rallying cry for the Black Lives Matter movement. Medical examiner ruled his death a homicide, but a grand jury declined to indict Pantaleo.',
 birthDate: 'September 15, 1970',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Killed via banned chokehold technique',
 'Grand jury declined to indict despite homicide ruling',
 'Officer Pantaleo not fired until 5 years later',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2014 Jul 17', event: 'Killed by NYPD chokehold' },
 { date: '2014 Dec', event: 'Grand jury declined to indict' },
 { date: '2019', event: 'Officer Pantaleo fired' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Eric Garner Case', url: 'https://www.nytimes.com/', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'efraim-zuroff': {
 name: 'Efraim Zuroff',
 title: 'Nazi Hunter',
 role: 'Simon Wiesenthal Center Chief Nazi Hunter',
 riskLevel: 'low',
 description: 'Chief Nazi hunter of the Simon Wiesenthal Center, based in Jerusalem. Has spent decades tracking down suspected Nazi war criminals and their collaborators. Leads Operation Last Chance, which offers rewards for information leading to prosecution of Nazi perpetrators.',
 birthDate: 'September 5, 1948',
 education: ['Yeshiva University', 'Hebrew University, Ph.D.'],
 affiliations: [
 { name: 'Simon Wiesenthal Center', role: 'Chief Nazi Hunter', type: 'organization' },
 ],
 controversies: [
 'Criticized countries for failing to prosecute war criminals',
 'Operation Last Chance offers bounties for Nazi perpetrators',
 'Advocated against statute of limitations for genocide',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'critical' },
 ],
 timeline: [
 { date: '1978', event: 'Began tracking Nazi war criminals' },
 { date: '2002', event: 'Launched Operation Last Chance' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wiesenthal Center', url: 'https://www.wiesenthal.com/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'edwin-wilson': {
 name: 'Edwin Wilson',
 title: 'Former CIA Agent',
 role: 'Illegal Arms Sales to Libya',
 riskLevel: 'high',
 description: 'Former CIA officer convicted in 1983 of illegally selling weapons and explosives to Libya\'s Muammar Gaddafi. Wilson claimed he was acting on CIA orders, and in 2003 his conviction was overturned when a judge found the CIA had lied about its relationship with Wilson. One of the most dramatic cases of CIA betrayal of its own agents.',
 education: ['University of Portland'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' },
 ],
 controversies: [
 'Sold weapons and explosives to Gaddafi\'s Libya',
 'CIA denied involvement then was caught lying',
 'Conviction overturned after 20 years when CIA lies exposed',
 'Case revealed CIA\'s willingness to abandon agents',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: '1976', event: 'Began selling weapons to Libya' },
 { date: '1983', event: 'Convicted of illegal arms sales' },
 { date: '2003', event: 'Conviction overturned, CIA lies exposed' },
 { date: '2012', event: 'Died at age 84' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Wilson Conviction Overturned', url: 'https://www.nytimes.com/2003/10/29/us/ex-cia-agent-is-freed-after-judge-overturns-his-conviction.html', date: '2003' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },



 'elliott-management': {
 name: 'Elliott Management',
 title: 'Public Official',
 role: '',
 riskLevel: 'high',
 description: 'Elliott Management. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Elliott Management and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-03-06', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2025-12-23', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-03-06' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-12-23' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-12-06' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'exxonmobil': {
 name: 'ExxonMobil Corporation',
 title: 'Oil and Gas Supermajor',
 role: 'Largest publicly traded oil and gas company',
 riskLevel: 'critical',
 description: 'ExxonMobil is one of the world\'s largest oil companies and a direct descendant of Standard Oil. Internal documents revealed that Exxon\'s own scientists accurately predicted climate change as early as the 1970s, but the company spent decades funding climate denial to protect its profits. This deliberate campaign of deception contributed to decades of delayed climate action. Multiple state attorneys general have filed lawsuits alleging consumer fraud and securities fraud related to climate deception.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'CLIMATE DECEPTION: Internal scientists accurately predicted climate change in 1970s-80s; company funded denial for decades',
 'EXXON VALDEZ: 1989 oil spill in Alaska devastated ecosystem, company fought damages for 20 years',
 'DARK MONEY CLIMATE DENIAL: Funded climate denial organizations and think tanks for decades',
 'STATE AG LAWSUITS: Multiple states suing for consumer and securities fraud related to climate deception',
 'RECORD PROFITS: Posted $56 billion profit in 2022 during energy crisis while consumers suffered high prices',
 ],
 charges: [
 { statute: 'State Consumer Fraud Statutes', description: 'Lawsuits alleging decades of climate change deception', category: 'Fraud' },
 ],
 relatedInvestigations: [
 { title: 'Climate Change Cover-Up', slug: 'climate-change-coverup', severity: 'critical' },
 { title: 'Corporate Consolidation', slug: 'corporate-consolidation', severity: 'high' },
 ],
 timeline: [
 { date: '1999', event: 'Exxon and Mobil merge, creating world\'s largest oil company' },
 { date: '1977-1982', event: 'Exxon scientists accurately model climate change' },
 { date: '1989', event: 'Exxon Valdez spill in Alaska' },
 { date: '1998-2014', event: 'Funds climate denial organizations' },
 { date: '2015', event: 'InsideClimate News and LA Times reveal internal climate documents' },
 { date: '2023', event: 'State AG lawsuits proceed on climate deception claims' },
 ],
 socialMedia: [],
 sources: [
 { title: 'InsideClimate News: Exxon Knew', url: 'https://insideclimatenews.org/content/Exxon-The-Road-Not-Taken', date: '2015' },
 ],
 aliases: ['Exxon', 'XOM'],
 knownAssociates: [
 ],
 },

 'energy-transfer': {
 name: 'Energy Transfer LP',
 title: 'Pipeline Company, DAPL Operator',
 role: 'Owner and operator of Dakota Access Pipeline',
 riskLevel: 'high',
 description: 'Energy Transfer is a major pipeline company and the owner of the Dakota Access Pipeline (DAPL) that became the focus of massive protests at Standing Rock in 2016-2017. The pipeline runs through sacred Sioux land and under Lake Oahe, the Standing Rock Sioux Tribe\'s primary water source. CEO Kelcy Warren donated to Trump\'s campaign, and Trump signed an executive order to expedite the pipeline five days after taking office.',
 education: [],
 affiliations: [],
 controversies: [
 'STANDING ROCK: Dakota Access Pipeline route through sacred land and under primary water source of Standing Rock Sioux',
 'VIOLENT CRACKDOWN: Private security used dogs and water cannons on peaceful protesters in freezing temperatures',
 'TRUMP CONNECTION: CEO Kelcy Warren donated to Trump campaign; Trump expedited pipeline approval via executive order',
 'ENVIRONMENTAL VIOLATIONS: Pattern of spills and environmental violations across pipeline network',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'critical' },
 ],
 timeline: [
 { date: '2014', event: 'Dakota Access Pipeline proposed' },
 { date: '2016', event: 'Standing Rock protests begin, draw global attention' },
 { date: '2017 (Jan)', event: 'Trump signs executive order expediting DAPL approval' },
 { date: '2017 (Jun)', event: 'Pipeline begins operation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Standing Rock Sioux Tribe Legal Challenge', url: 'https://earthjustice.org/', date: '2016' },
 ],
 aliases: ['ET', 'DAPL Operator'],
 knownAssociates: [],
 },
 'ethiopian-aib': {
 name: 'Ethiopian Aircraft Accident Investigation Bureau',
 title: 'Ethiopian Aviation Safety Authority',
 role: 'Aircraft accident investigation body',
 riskLevel: 'medium',
 description: 'The Ethiopian Aircraft Accident Investigation Bureau led the investigation into Ethiopian Airlines Flight 302, a Boeing 737 MAX that crashed on March 10, 2019, killing all 157 people on board. Their investigation, along with the Lion Air Flight 610 crash investigation, revealed that Boeing\'s MCAS system caused both crashes. The bureau\'s findings were instrumental in the worldwide grounding of the 737 MAX.',
 education: [],
 affiliations: [
 { name: 'Ethiopian Government', role: 'Federal agency', type: 'agency' },
 ],
 controversies: [
 'BOEING 737 MAX: Investigation revealed MCAS system failure caused ET302 crash, all 157 killed',
 'BOEING PRESSURE: Faced pressure from Boeing and FAA during investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Cover-Up', slug: 'boeing-safety', severity: 'critical' },
 ],
 timeline: [
 { date: '2019 (Mar 10)', event: 'ET Flight 302 crashes, kills 157' },
 { date: '2019 (Mar 13)', event: 'Worldwide grounding of 737 MAX following investigation findings' },
 { date: '2020', event: 'Final investigation report confirms MCAS as cause' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Ethiopian AIB Final Report', url: 'https://reports.aviation-safety.net/2019/20190310-0_B38M_ET-AVJ.pdf', date: '2020' },
 ],
 aliases: ['EAIB'],
 knownAssociates: [
 ],
 },

 'emma-walmsley': {
 name: 'Emma Walmsley',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Emma Walmsley. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Emma Walmsley facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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








 'evan-spiegel': {
 name: 'Evan Spiegel',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Evan Spiegel. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Evan Spiegel as a key decision-maker during periods where regulatory violations were later documented.',
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
  'enver-pasha': {
    name: 'Enver Pasha',
    title: 'Minister of War, Ottoman Empire (1914-1918)',
    role: 'Leading Architect of the Armenian Genocide',
    riskLevel: 'critical',
    description: 'Ismail Enver Pasha was one of the Three Pashas who ruled the Ottoman Empire during World War I and orchestrated the Armenian Genocide. As Minister of War, he played a central role in organizing the systematic deportation and extermination of 1.5 million Armenians, as well as the Assyrian and Greek genocides. He used World War I as cover to implement the genocidal plan, issuing orders for mass deportations into the Syrian desert where hundreds of thousands died.',
    birthDate: '1881-11-22',
    birthPlace: 'Istanbul, Ottoman Empire',
    deathDate: '1922-08-04',
    education: ['Ottoman Military Academy', 'Ottoman War College'],
    affiliations: [
      { name: 'Ottoman Empire', role: 'Minister of War (1914-1918)', type: 'agency' },
      { name: 'Committee of Union and Progress (CUP)', role: 'Leading member of ruling triumvirate', type: 'organization' },
      { name: 'Ottoman Military', role: 'Commander at Sarikamish and other campaigns', type: 'agency' },
    ],
    controversies: [
      'Co-architect of the Armenian Genocide that killed 1.5 million Armenians through deportation, massacre, and starvation',
      'Ordered disarmament of Armenian soldiers in the Ottoman army, who were then organized into labor battalions and executed',
      'Sarikamish disaster (1914-15) - his incompetent command killed 90,000 Ottoman soldiers; blamed Armenians for the defeat',
      'Co-organized the Assyrian genocide (Seyfo) killing 150,000-300,000 Assyrian Christians',
      'Co-organized the Greek genocide killing 300,000-900,000 Pontic and Anatolian Greeks',
      'Fled Ottoman Empire after WWI defeat to avoid prosecution; sentenced to death in absentia by Ottoman court-martial',
      'Killed fighting the Red Army in Tajikistan in 1922 while pursuing pan-Turkic ambitions',
    ],
    charges: [
      { statute: 'Ottoman Court-Martial (1919-1920) - Death Sentence', description: 'Sentenced to death in absentia for leading role in Armenian deportations and massacres', category: 'Genocide' },
      { statute: 'Crimes Against Humanity - Extermination', description: 'Organized systematic annihilation of 1.5 million Armenians', category: 'Crimes Against Humanity' },
      { statute: 'War Crimes - Deportation to Death', description: 'Ordered mass deportation marches into Syrian desert designed to kill through exhaustion, starvation, and exposure', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Armenian Genocide', slug: 'armenian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1881-11-22', event: 'Born in Istanbul, Ottoman Empire' },
      { date: '1908', event: 'Young Turk Revolution; becomes prominent CUP leader' },
      { date: '1913-01', event: 'Raid on the Sublime Porte; CUP seizes power' },
      { date: '1914-01', event: 'Becomes Minister of War' },
      { date: '1914-12', event: 'Sarikamish disaster; 90,000 Ottoman troops die under his command' },
      { date: '1915-04-24', event: 'Armenian Genocide begins with arrest of Armenian intellectuals in Constantinople' },
      { date: '1915-05', event: 'Mass deportations of Armenian civilians begin' },
      { date: '1918-10', event: 'Flees Ottoman Empire after armistice' },
      { date: '1919', event: 'Ottoman court-martial sentences him to death in absentia' },
      { date: '1922-08-04', event: 'Killed by Red Army forces in Tajikistan' },
    ],
    sources: [
      { title: 'A Shameful Act by Taner Akcam', url: 'https://www.penguinrandomhouse.com/books/', date: '2006' },
    ],
    aliases: ['Ismail Enver', 'Enver Bey'],
    knownAssociates: [
      { name: 'Talat Pasha', relationship: 'Fellow triumvir and Grand Vizier who co-organized the Armenian Genocide', href: '/individuals/talat-pasha' },
    ],
  },
  'elliott-broidy': {
    name: 'Elliott Broidy',
    title: 'Former RNC Deputy Finance Chairman',
    role: 'Republican fundraiser who pleaded guilty to acting as an unregistered foreign agent in a scheme to lobby the Trump administration on behalf of Chinese and Malaysian interests',
    riskLevel: 'high',
    description: 'Elliott Broidy served as Deputy Finance Chairman of the Republican National Committee in 2017-2018 and was a top fundraiser for Trump. In October 2020, Broidy pleaded guilty to conspiracy to serve as an unregistered agent of a foreign principal. Broidy secretly lobbied Trump administration officials on behalf of Chinese national Jho Low, who was seeking to have the DOJ drop its investigation into the 1MDB Malaysian corruption scandal, one of the largest financial frauds in history ($4.5 billion stolen from Malaysia\'s sovereign wealth fund). Broidy was paid millions by Low. Separately, Broidy lobbied to have the U.S. extradite Chinese dissident Guo Wengui back to China. In a separate scandal, it was revealed that Broidy had paid $1.6 million in hush money to a Playboy model he had impregnated, with Michael Cohen arranging the payment using the same structure as Trump\'s Stormy Daniels payment. Broidy was previously convicted in 2009 of paying $1 million in bribes to New York state pension officials to secure $250 million in investments for his firm. Trump pardoned Broidy in January 2021.',
    birthDate: '1957',
    birthPlace: 'New York',
    education: ['University of Southern California'],
    affiliations: [
      { name: 'Republican National Committee', role: 'Deputy Finance Chairman', type: 'organization' as const },
      { name: 'Broidy Capital Management', role: 'CEO', type: 'corporation' as const },
    ],
    controversies: [
      'Pleaded guilty to secretly lobbying Trump admin for Chinese and Malaysian interests',
      'Paid millions by Jho Low to lobby DOJ to drop 1MDB investigation',
      'Lobbied to extradite Chinese dissident to China',
      'Paid $1.6 million hush money to Playboy model via Michael Cohen',
      'Previously convicted of bribing NY pension officials for $250M in investments',
      'Pardoned by Trump in January 2021',
    ],
    charges: [
      { statute: '18 U.S.C. 371/22 U.S.C. 611', description: 'Conspiracy to act as unregistered foreign agent - lobbying for Chinese/Malaysian interests (guilty plea; pardoned)', category: 'federal' },
      { statute: 'NY Penal Law 200.04', description: 'Rewarding official misconduct - bribing NY pension officials ($1M in bribes; previously convicted 2009)', category: 'state' },
    ],
    relatedInvestigations: ['/investigations/chinese-influence-operations-united-states'],
    timeline: [
      { date: '2009', event: 'Convicted of bribing New York pension officials' },
      { date: '2017', event: 'Appointed RNC Deputy Finance Chairman' },
      { date: '2017-2018', event: 'Period of undisclosed lobbying for Jho Low and Chinese interests' },
      { date: '2018-04', event: 'Hush money payment to Playboy model revealed' },
      { date: '2020-10-20', event: 'Pleads guilty to acting as unregistered foreign agent' },
      { date: '2021-01-20', event: 'Pardoned by President Trump' },
    ],
    sources: [
      { title: 'DOJ: Elliott Broidy Pleads Guilty', url: 'https://www.justice.gov/news', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jho Low', relationship: '1MDB fugitive who paid Broidy to lobby Trump admin' },
      { name: 'Michael Cohen', relationship: 'Trump lawyer who arranged hush money payment', href: '/entities/individuals/michael-cohen' },
      { name: 'Donald Trump', relationship: 'President who pardoned him', href: '/entities/individuals/donald-trump' },
    ],
  },
  'eric-adams': {
    name: 'Eric Adams',
    title: 'Mayor of New York City (2022-present)',
    photo: '/images/individuals/eric-adams.webp',
    background: 'Eric Leroy Adams is the 110th Mayor of New York City. Former NYPD captain and Brooklyn Borough President. In September 2024, Adams became the first sitting New York City mayor to be criminally indicted.',
    controversies: [
      'Indicted on federal charges in September 2024 including bribery, fraud, and solicitation of foreign campaign donations',
      'Allegedly accepted luxury travel, free upgrades, and illegal campaign contributions from Turkish nationals seeking political favors',
      'Accused of pressuring FDNY officials to approve a Turkish consulate building in Manhattan despite fire safety concerns',
      'Multiple top aides resigned or were investigated; phones seized by FBI from multiple administration officials',
      'Campaign fundraising irregularities including straw donor schemes to obtain public matching funds',
      'Accused of receiving over $100,000 in travel benefits from Turkish government-linked entities since 2016',
    ],
    charges: [
      {
        description: 'Five-count federal indictment: bribery, wire fraud, conspiracy to commit wire fraud, solicitation of a contribution by a foreign national, and conspiracy to solicit a contribution by a foreign national',
        status: 'Pending trial (as of 2025)',
        source: 'U.S. Attorney for the Southern District of New York',
      },
    ],
    timeline: [
      { date: '2021-11-02', event: 'Elected Mayor of New York City' },
      { date: '2023-11-02', event: 'FBI raids home of chief fundraiser Brianna Suggs' },
      { date: '2024-02-01', event: 'FBI seizes Adams\'s electronic devices and phones' },
      { date: '2024-09-26', event: 'Indicted on federal bribery and fraud charges; first sitting NYC mayor indicted' },
      { date: '2024-10-01', event: 'Pleads not guilty; refuses to resign as mayor' },
    ],
    affiliations: [
      { name: 'City of New York', role: 'Mayor', type: 'agency' as const },
      { name: 'New York City Police Department', role: 'Former Captain', type: 'agency' as const },
      { name: 'Brooklyn Borough', role: 'Former Borough President', type: 'agency' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Brianna Suggs', relationship: 'Chief fundraiser whose home was raided by FBI' },
      { name: 'Rana Abbasova', relationship: 'Former liaison to Turkish community; cooperating witness' },
    ],
  },
  'eric-greitens': {
    name: 'Eric Greitens',
    title: 'Former Governor of Missouri (2017-2018)',
    photo: '/images/individuals/eric-greitens.webp',
    background: 'Eric Robert Greitens served as the 56th Governor of Missouri. A former Navy SEAL and Rhodes Scholar, he resigned in June 2018 amid overlapping scandals involving sexual misconduct, blackmail, and campaign finance violations. He later ran for U.S. Senate in 2022 but lost the primary after his ex-wife accused him of domestic abuse.',
    controversies: [
      'Photographed a bound and blindfolded woman during an extramarital affair without her consent; accused of using the photo as blackmail',
      'Charged with felony invasion of privacy for taking the non-consensual photograph',
      'Separate felony charge for computer data tampering related to misuse of a veterans charity donor list for campaign fundraising',
      'Used donor list from The Mission Continues (his veterans charity) for political fundraising without authorization',
      'Ex-wife Sheena Greitens filed sworn affidavit alleging physical abuse including striking their 3-year-old son',
      'Allegations that campaign operatives used dark money networks to obscure the source of major campaign donations',
    ],
    charges: [
      {
        description: 'Felony invasion of privacy (photographing partially nude woman without consent); felony computer data tampering (unauthorized use of charity donor list)',
        status: 'Both charges dropped by prosecutors after Greitens agreed to resign as governor (2018)',
        source: 'St. Louis Circuit Attorney',
      },
    ],
    timeline: [
      { date: '2017-01-09', event: 'Inaugurated as Governor of Missouri' },
      { date: '2018-01-10', event: 'Affair and blackmail allegations become public' },
      { date: '2018-02-22', event: 'Indicted on felony invasion of privacy charge' },
      { date: '2018-04-20', event: 'Second felony charge filed for computer data tampering' },
      { date: '2018-06-01', event: 'Resigns as governor; felony charges subsequently dropped' },
      { date: '2022-08-02', event: 'Loses Missouri U.S. Senate Republican primary' },
    ],
    affiliations: [
      { name: 'State of Missouri', role: 'Governor', type: 'agency' as const },
      { name: 'The Mission Continues', role: 'Founder (Veterans Charity)', type: 'organization' as const },
      { name: 'U.S. Navy SEALs', role: 'Former Officer', type: 'agency' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Al Watkins', relationship: 'Attorney for the woman who accused him of blackmail' },
      { name: 'Sheena Greitens', relationship: 'Ex-wife who alleged domestic abuse in sworn affidavit' },
    ],
  },
  'edward-teller': {
    name: 'Edward Teller',
    title: 'Father of the Hydrogen Bomb',
    role: 'Nuclear Physicist',
    riskLevel: 'critical' as const,
    description: 'Hungarian-American theoretical physicist known as the father of the hydrogen bomb. Key figure in the development of thermonuclear weapons that were thousands of times more powerful than the atomic bombs dropped on Japan. Instrumental in destroying J. Robert Oppenheimer\'s security clearance in 1954, effectively ending the career of the scientist who had moral objections to the H-bomb. Lifelong advocate for nuclear weapons proliferation, the Strategic Defense Initiative (Star Wars), and opponent of nuclear test ban treaties.',
    birthDate: '1908-01-15',
    birthPlace: 'Budapest, Austria-Hungary',
    education: ['Ph.D. in Physics, University of Leipzig (1930)', 'Research Fellow, University of Göttingen (1931)'],
    affiliations: [
      { name: 'Lawrence Livermore National Laboratory', role: 'Co-Founder and Director', type: 'agency' as const },
      { name: 'Manhattan Project', role: 'Senior Physicist', type: 'agency' as const },
      { name: 'U.S. Atomic Energy Commission', role: 'Advisor', type: 'agency' as const },
    ],
    controversies: [
      'Drove development of hydrogen bomb thousands of times more powerful than Hiroshima weapon despite scientific opposition',
      'Testified against J. Robert Oppenheimer in 1954 security hearing, destroying career of fellow Manhattan Project scientist',
      'Lobbied against nuclear test ban treaties for decades, enabling continued atmospheric testing that exposed millions to fallout',
      'Advocated for Project Plowshare using nuclear explosions for civil engineering including creating harbors and canals',
      'Pushed for Strategic Defense Initiative (Star Wars) program costing $30+ billion with no viable results',
      'Promoted nuclear weapons testing despite evidence of widespread radiation-related health effects on downwinders',
      'Co-founded Lawrence Livermore National Laboratory specifically to develop thermonuclear weapons',
    ],
    charges: [
      {
        statute: 'Ethical Violations - Scientific Community',
        description: 'Testimony against Oppenheimer widely regarded as betrayal that destroyed a colleague for political reasons; later acknowledged as unjust by AEC',
        category: 'ethics',
      },
      {
        statute: 'Public Health - Promotion of Nuclear Testing',
        description: 'Actively lobbied against test ban treaties enabling continued atmospheric testing that caused cancer clusters among downwinders and veterans',
        category: 'human-rights',
      },
    ],
    relatedInvestigations: [
      { title: 'Nuclear Testing Fallout and Veteran Exposure', slug: 'nuclear-testing-fallout-veterans', severity: 'critical' },
    ],
    timeline: [
      { date: '1908-01-15', event: 'Born in Budapest, Austria-Hungary' },
      { date: '1935', event: 'Emigrates to United States; joins George Washington University faculty' },
      { date: '1943', event: 'Joins Manhattan Project at Los Alamos; pushes for thermonuclear weapon development' },
      { date: '1949-08', event: 'Soviet Union detonates first atomic bomb; Teller lobbies for crash H-bomb program' },
      { date: '1950', event: 'Truman approves hydrogen bomb development over objections of many scientists' },
      { date: '1952-11-01', event: 'First hydrogen bomb (Ivy Mike) detonated at Enewetak Atoll; 10.4 megatons, 700x Hiroshima' },
      { date: '1952', event: 'Co-founds Lawrence Livermore National Laboratory as second nuclear weapons lab' },
      { date: '1954-04', event: 'Testifies against J. Robert Oppenheimer at AEC security hearing; Oppenheimer loses clearance' },
      { date: '1954-03-01', event: 'Castle Bravo H-bomb test yields 15 megatons (2.5x expected); irradiates Marshall Islanders and Japanese fishermen' },
      { date: '1963', event: 'Opposes Partial Nuclear Test Ban Treaty; lobbies Congress against ratification' },
      { date: '1983', event: 'Advises Reagan on Strategic Defense Initiative (Star Wars) missile defense program' },
      { date: '2003-01-15', event: 'Awarded Presidential Medal of Freedom by President George W. Bush' },
      { date: '2003-09-09', event: 'Dies in Stanford, California at age 95' },
    ],
    sources: [
      { title: 'Dark Sun: The Making of the Hydrogen Bomb by Richard Rhodes', date: '1995' },
      { title: 'DOE OpenNet: Declassified Nuclear Testing Documents', url: 'https://www.osti.gov/opennet', date: '2023' },
      { title: 'Atomic Heritage Foundation: Edward Teller Profile', url: 'https://ahf.nuclearmuseum.org/ahf/profile/edward-teller/', date: '2023' },
    ],
    aliases: ['Father of the Hydrogen Bomb', 'Dr. Strangelove (inspiration)'],
    knownAssociates: [
      { name: 'J. Robert Oppenheimer', relationship: 'Manhattan Project director whose career Teller helped destroy through security hearing testimony' },
      { name: 'Stanislaw Ulam', relationship: 'Mathematician who co-developed the Teller-Ulam thermonuclear weapon design' },
      { name: 'Ronald Reagan', relationship: 'President who relied on Teller\'s advice for the Strategic Defense Initiative program' },
    ],
  },
  'andrew-wheeler': {
    name: 'Andrew Wheeler',
    bio: 'Andrew R. Wheeler served as the Administrator of the Environmental Protection Agency from 2019 to 2021, after serving as Acting Administrator from 2018. Before joining the EPA, Wheeler spent a decade as a coal industry lobbyist, representing Murray Energy — the largest private coal company in America — whose CEO Bob Murray had presented Trump with an "action plan" to dismantle Obama-era environmental regulations. As EPA head, Wheeler systematically implemented that plan: rolling back methane emission regulations, weakening fuel efficiency standards, relaxing coal plant pollution rules, narrowing the scope of the Waters of the United States rule, and weakening the scientific basis of EPA rulemaking by restricting which studies could be used. He is the textbook case of regulatory capture — a lobbyist appointed to dismantle the agency he once lobbied against.',
    riskLevel: 'high' as const,
    status: 'active',
    lastKnownLocation: 'Washington, D.C.',
    birthDate: 'January 12, 1964',
    education: [
      'B.A., English, Case Western Reserve University (1987)',
      'M.B.A., George Mason University (1998)',
      'J.D., Washington University School of Law (1990)',
    ],
    affiliations: [
      { name: 'EPA', role: 'Administrator (2019-2021)', type: 'agency' as const },
      { name: 'Murray Energy', role: 'Lobbyist (2009-2017)', type: 'corporation' as const },
    ],
    relatedInvestigations: [
      { title: 'Environmental Racism', slug: 'environmental-racism-toxic-exposure', severity: 'critical' },
      { title: 'Fossil Fuel Subsidies', slug: 'fossil-fuel-subsidies-climate-deception', severity: 'critical' },
      { title: 'PFAS Contamination', slug: 'pfas-forever-chemicals-contamination', severity: 'critical' },
    ],
    charges: [
      { statute: 'N/A - Regulatory Capture', description: 'Implemented coal industry deregulation agenda drafted by former client Murray Energy', category: 'Conflict of interest' },
      { statute: 'N/A - Policy', description: 'Weakened methane regulations, fuel efficiency standards, and water protections; restricted use of scientific studies in EPA rulemaking', category: 'Environmental deregulation' },
    ],
    criminalHistory: 'No criminal charges. GAO found several EPA rollbacks under Wheeler violated procedural requirements. Courts struck down multiple Wheeler-era deregulation actions for being "arbitrary and capricious." Virginia rejected his appointment as state Natural Resources Secretary in 2022 after bipartisan opposition.',
    financialInfo: 'Earned estimated $800,000+ annually as a coal industry lobbyist. Financial disclosures showed continued investment holdings in energy companies while leading the EPA.',
    sources: [
      { title: 'NYT: Murray Energy "Action Plan" for Trump Administration', url: 'https://www.nytimes.com/', date: '2018' },
      { title: 'EPA: Regulatory Rollback Tracker', url: 'https://www.epa.gov/', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Bob Murray', relationship: 'Murray Energy CEO; Wheeler\'s former client who presented Trump with deregulation wishlist that Wheeler implemented' },
      { name: 'Scott Pruitt', relationship: 'Predecessor as EPA head who resigned amid ethics scandals; Wheeler continued Pruitt\'s deregulation agenda' },
    ],
  },
  'elaine-chao': {
    name: 'Elaine Chao',
    title: 'Former Secretary of Transportation',
    role: 'Cabinet Official with Extensive Family Business Conflicts',
    riskLevel: 'high' as const,
    description: 'Elaine Chao served as Transportation Secretary (2017-2021) and previously as Labor Secretary (2001-2009) while her family owned a major shipping company with deep ties to the Chinese government. DOT Inspector General investigations found she used her office to benefit family business interests and directed staff to assist with personal and family tasks.',
    birthDate: '1953-03-26',
    birthPlace: 'Taipei, Taiwan',
    education: [
      'B.A., Mount Holyoke College (1975)',
      'M.B.A., Harvard Business School (1979)',
    ],
    affiliations: [
      { name: 'DOT', role: 'Secretary of Transportation (2017-2021)', type: 'agency' as const },
      { name: 'DOL', role: 'Secretary of Labor (2001-2009)', type: 'agency' as const },
    ],
    controversies: [
      'DOT OIG found she used her position to benefit her familys shipping company, Foremost Group, which builds ships in China with Chinese state financing',
      'Directed DOT staff to assist with personal tasks and help plan events involving her family and their business contacts',
      'Foremost Group received favorable treatment from Chinese government including subsidized shipbuilding at state-owned yards',
      'Failed to fully divest from Vulcan Materials Company, which had business before DOT, despite ethics agreement',
      'Resigned one day after the January 6 attack, later claiming concern about the events but was criticized for not speaking out sooner',
      'As Labor Secretary, OSHA enforcement actions dropped significantly and workplace safety rules were delayed or weakened',
      'DOJ declined to pursue criminal charges despite OIG referral and documented evidence of conflicts',
      'Husband Mitch McConnell received a $5-25 million gift from Chaos father, shipping magnate James Chao, in 2008',
    ],
    relatedInvestigations: [
      { title: 'Congressional Stock Trading', slug: 'congressional-stock-trading', severity: 'high' },
    ],
    timeline: [
      { date: '2001', event: 'Became Secretary of Labor under George W. Bush; served full eight years' },
      { date: '2017-01', event: 'Confirmed as Secretary of Transportation under Trump' },
      { date: '2019', event: 'DOT OIG opened investigation into potential misuse of office for family benefit' },
      { date: '2020', event: 'OIG investigation expanded; staff interviews revealed pattern of personal task direction' },
      { date: '2021-01-07', event: 'Resigned from DOT one day after January 6 Capitol attack' },
      { date: '2021-03', event: 'DOT OIG referred findings to DOJ for potential criminal prosecution' },
      { date: '2022-07', event: 'DOJ declined to prosecute despite OIG referral and documented evidence' },
    ],
    sources: [
      { title: 'DOT OIG: Review of Potential Misuse of Position (Chao Report)', date: '2021' },
      { title: 'New York Times: Chaos Family Business and Transportation Department', url: 'https://www.nytimes.com/', date: '2019' },
      { title: 'Senate Finance Committee: Chao Ethics Review', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Mitch McConnell', relationship: 'Husband; Senate Republican Leader whose political and legislative power intersected with Chaos policy role' },
      { name: 'Donald Trump', relationship: 'President who appointed her; Chao resigned after January 6 but remained largely loyal', href: '/entities/individuals/donald-trump' },
    ],
  },
  'rudy-giuliani': {
    name: 'Rudy Giuliani',
    title: 'Former Mayor of New York City and Personal Attorney to Donald Trump',
    role: 'From Americas Mayor to Disbarred Election Conspiracy Promoter',
    riskLevel: 'critical' as const,
    description: 'Rudolph Giuliani went from celebrated federal prosecutor and post-9/11 mayor to disbarred attorney after leading Trumps efforts to overturn the 2020 election. He promoted conspiracy theories in courts and media, pressured Ukrainian officials to investigate the Biden family, and was found liable for $148 million for defaming Georgia election workers.',
    birthDate: '1944-05-28',
    birthPlace: 'Brooklyn, New York',
    education: [
      'B.A., Manhattan College (1965)',
      'J.D., New York University School of Law (1968)',
    ],
    affiliations: [
      { name: 'City of New York', role: 'Mayor (1994-2001)', type: 'agency' as const },
      { name: 'U.S. Attorneys Office, Southern District of New York', role: 'U.S. Attorney (1983-1989)', type: 'agency' as const },
      { name: 'Giuliani Partners', role: 'Founder and CEO', type: 'corporation' as const },
    ],
    controversies: [
      'Led post-election legal campaign making claims of widespread fraud in over 60 lawsuits; nearly all were rejected by courts for lack of evidence',
      'Pressured Ukrainian President Zelensky to investigate the Biden family; conduct was central to Trumps first impeachment',
      'Found liable for defaming Georgia election workers Ruby Freeman and Shaye Moss; ordered to pay $148 million in damages',
      'Disbarred in New York for making "demonstrably false and misleading statements" about the 2020 election in courts and public',
      'Held press conference at Four Seasons Total Landscaping after confusing it with the Four Seasons Hotel; became symbol of campaigns disorganization',
      'Associates Lev Parnas and Igor Fruman were indicted for campaign finance violations related to the Ukraine pressure campaign',
      'Filed for bankruptcy citing $148 million defamation judgment and extensive legal debts; simultaneously claimed inability to pay while maintaining luxury lifestyle',
      'Indicted in Georgia and Arizona for efforts to overturn election results in those states',
    ],
    relatedInvestigations: [
      { title: 'Voter Purge Disenfranchisement', slug: 'voter-purge-disenfranchisement', severity: 'critical' },
    ],
    timeline: [
      { date: '1983-1989', event: 'Served as U.S. Attorney; prosecuted Mafia Commission case and Wall Street insider trading' },
      { date: '1994-2001', event: 'Served as Mayor of New York City' },
      { date: '2001-09', event: 'Led New York response to 9/11 attacks; dubbed "Americas Mayor"' },
      { date: '2019', event: 'Pressured Ukrainian officials to investigate Biden family; central to first Trump impeachment' },
      { date: '2020-11', event: 'Led post-election legal challenges claiming widespread fraud without evidence' },
      { date: '2020-11-07', event: 'Four Seasons Total Landscaping press conference' },
      { date: '2023-08', event: 'Indicted in Georgia RICO case for election interference' },
      { date: '2023-12', event: 'Found liable for $148 million to Georgia election workers Freeman and Moss' },
      { date: '2024-07', event: 'Disbarred in New York for election-related false statements' },
    ],
    sources: [
      { title: 'D.C. Bar: Giuliani Disbarment Proceedings', date: '2024' },
      { title: 'Freeman v. Giuliani: Defamation Judgment', date: '2023' },
      { title: 'Fulton County DA: Georgia RICO Indictment', date: '2023' },
    ],
    aliases: ['Americas Mayor', 'Rudy'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Personal attorney who led post-election legal campaign and Ukraine pressure operation', href: '/entities/individuals/donald-trump' },
      { name: 'Mark Meadows', relationship: 'White House Chief of Staff who coordinated with Giuliani on election challenges', href: '/entities/individuals/mark-meadows' },
    ],
  },
  'eugene-saenger': {
    name: 'Eugene Saenger',
    title: 'Radiologist, University of Cincinnati',
    role: 'DOD-funded researcher who subjected 88 cancer patients to total body irradiation for military purposes',
    riskLevel: 'critical' as const,
    description: 'Eugene L. Saenger (1917-2007) was a radiologist at the University of Cincinnati who, from 1963 to 1971, conducted Department of Defense-funded total body irradiation experiments on 88 cancer patients. The DOD funding contract specified the purpose as determining the effects of radiation on combat effectiveness, but patients were not told the study was military-funded or that radiation doses were designed to simulate nuclear warfare conditions. Saenger selected patients who were predominantly poor and Black. At least 21 of 88 patients died within weeks of irradiation. A class action lawsuit resulted in a $3.6 million settlement in 1999. Saenger was never criminally charged and insisted the experiments were therapeutic until his death.',
    birthDate: '1917-03-04',
    birthPlace: 'Cincinnati, Ohio',
    deathDate: '2007-10-10',
    education: ['University of Cincinnati (B.A.)', 'University of Cincinnati College of Medicine (M.D., 1942)'],
    affiliations: [
      { name: 'University of Cincinnati', role: 'Professor of Radiology (1947-1986); conducted DOD-funded radiation experiments', type: 'organization' },
      { name: 'Department of Defense', role: 'Received DOD research contracts totaling over $650,000 for military radiation research using hospital patients', type: 'agency' },
    ],
    controversies: [
      'Subjected 88 cancer patients to total body irradiation at doses far exceeding therapeutic levels for DOD military research purposes without informed consent',
      'Selected predominantly poor Black patients for radiation experiments; did not inform them the study was funded by the Pentagon or designed for military purposes',
      'At least 21 of 88 patients died within weeks of irradiation with acute radiation syndrome symptoms',
      'Continued defending the experiments as therapeutic until his death in 2007 despite overwhelming evidence they served military rather than medical purposes',
    ],
    relatedInvestigations: [
      { title: 'Cold War Radiation Experiments on Unwitting American Citizens', slug: 'cold-war-radiation-experiments-united-states', severity: 'critical' },
    ],
    timeline: [
      { date: '1963', event: 'Begins DOD-funded total body irradiation experiments at University of Cincinnati' },
      { date: '1971', event: 'Experiments end after renewed scrutiny following Senator Kennedy hearings' },
      { date: '1994', event: 'Advisory Committee on Human Radiation Experiments investigates the Cincinnati studies' },
      { date: '1999', event: 'Class action lawsuit settled for $3.6 million; Saenger not personally held liable' },
      { date: '2007-10-10', event: 'Dies at age 90; never criminally charged for the experiments' },
    ],
    sources: [
      { title: 'ACHRE Final Report: Cincinnati TBI Experiments', url: 'https://bioethics.georgetown.edu/2015/01/advisory-committee-on-human-radiation-experiments-achre/', date: '1995' },
    ],
    knownAssociates: [
      { name: 'John Charles Cutler', relationship: 'Fellow government-funded researcher who conducted human experiments without consent; contemporaries in the Cold War medical research establishment', href: '/entities/individuals/john-charles-cutler' },
    ],
  },
};

export default profiles;
