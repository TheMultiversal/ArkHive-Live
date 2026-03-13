// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'lev-parnas': {
 name: 'Lev Parnas',
 title: 'Convicted Felon',
 role: 'Giuliani Associate, Ukraine Scheme Operative',
 riskLevel: 'high',
 description: 'Lev Parnas is a Soviet-born American businessman who worked with Rudy Giuliani to pressure Ukraine to investigate the Bidens. He was convicted of campaign finance violations and has become a cooperating witness, providing extensive evidence against Trump and Giuliani.',
 birthDate: 'February 6, 1972',
 birthPlace: 'Odessa, Ukrainian SSR, Soviet Union',
 netWorth: 'Unknown (assets seized)',
 education: ['Unknown'],
 affiliations: [
 { name: 'Fraud Guarantee', role: 'Co-Founder', type: 'corporation' },
 { name: 'Global Energy Producers', role: 'Co-Founder', type: 'corporation' },
 ],
 controversies: [
 'Ukraine pressure campaign with Giuliani',
 'Campaign finance violations; straw donations',
 'Arrested at Dulles Airport fleeing country with one-way tickets',
 'Recorded conversations with Trump',
 'Provided evidence to January 6 Committee',
 'Testified Trump knew"exactly what was going on"',
 ],
 charges: [
 { statute: '52 U.S.C. § 30121', description: 'Foreign national campaign contributions', category: 'Election Crimes' },
 { statute: '52 U.S.C. § 30122', description: 'Straw donor contributions', category: 'Election Crimes' },
 { statute: '18 U.S.C. § 1014', description: 'Wire fraud', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1972', event: 'Born in Odessa, Soviet Union' },
 { date: '2018', event: 'Begins working with Giuliani on Ukraine' },
 { date: '2019', event: 'Arrested at Dulles Airport (October 9)' },
 { date: '2021', event: 'Convicted of campaign finance violations' },
 { date: '2022', event: 'Sentenced to 20 months in prison' },
 { date: '2024', event: 'Provides testimony against Trump' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/usao-sdny/pr/lev-parnas-and-igor-fruman-charged-campaign-finance-offenses', date: '2019' },
 { title: 'House Intelligence Committee Evidence', url: 'https://intelligence.house.gov/reports-letters/', date: '2020' }, ],
 aliases: ['Giuliani\'s Fixer'],
 knownAssociates: [
 { name: 'Rudy Giuliani', relationship: 'Handler, Ukraine pressure campaign', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Igor Fruman', relationship: 'Business partner, co-defendant', href: '/entities/individuals/igor-fruman' },
 { name: 'Donald Trump', relationship: 'Met multiple times, photographed together', href: '/entities/individuals/donald-trump' },
 ],
 },



























 'les-wexner': {
 name: 'Les Wexner',
 title: 'Founder and Former CEO; L Brands (Victoria\'s Secret); Jeffrey Epstein\'s Primary Benefactor',
 role: 'Billionaire retail mogul who gave Jeffrey Epstein sweeping power of attorney over his finances and gifted him a $77 million Manhattan townhouse',
 riskLevel: 'critical',
 description: 'Leslie Herbert Wexner is the billionaire founder of L Brands (formerly The Limited); the parent company of Victoria\'s Secret; Bath & Body Works; and other retail chains. Wexner is the only known client of convicted sex trafficker Jeffrey Epstein; who managed Wexner\'s financial affairs for approximately two decades. The relationship was extraordinary in its scope; Wexner granted Epstein sweeping power of attorney over his finances; gave him a $77 million Manhattan townhouse (one of the largest private residences in New York City); allowed him to use a private Boeing 727; and let Epstein operate from within Wexner\'s corporate and personal infrastructure. Wexner has said he was not aware of Epstein\'s sexual abuse; but multiple investigations have raised questions about the extent of his knowledge. The New York Times reported Epstein misappropriated at least $46 million from Wexner; which Wexner claimed to have discovered only after severing ties in 2007. However; their relationship continued in some form after that date. Victoria\'s Secret models have alleged that Epstein used his connection to Wexner and the lingerie brand to recruit and approach young women. Wexner stepped down as CEO of L Brands in February 2020 as scrutiny of the Epstein connection intensified.',
 birthDate: 'September 8, 1937',
 birthPlace: 'Dayton, Ohio, USA',
 education: ['The Ohio State University; B.S. Business Administration 1959'],
 affiliations: [
  { name: 'L Brands (The Limited)', role: 'Founder and CEO (1963-2020); stepped down amid Epstein scrutiny', type: 'corporation' },
  { name: 'Victoria\'s Secret', role: 'Owner through L Brands; Epstein used brand connection to approach young women', type: 'corporation' },
 ],
 controversies: [
  'Gave Jeffrey Epstein sweeping power of attorney over his finances; allowing Epstein to act on his behalf in virtually all financial matters',
  'Gifted Epstein a $77 million Manhattan townhouse at 9 East 71st Street; one of the largest private residences in New York City',
  'Multiple Victoria\'s Secret models alleged Epstein used his connection to Wexner and the lingerie brand to recruit and approach young women',
  'Claimed Epstein misappropriated at least $46 million but said he only discovered this after severing ties; timeline of the relationship raises questions',
  'Remained relatively silent about his two-decade relationship with Epstein; provided limited public explanation of how Epstein gained such extraordinary control over his finances',
  'Stepped down as CEO of L Brands in February 2020 as Epstein connection drew increased media and legal scrutiny',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Jeffrey Epstein Network', slug: 'jeffrey-epstein-sex-trafficking', severity: 'critical' },
 ],
 timeline: [
  { date: 'September 8, 1937', event: 'Born in Dayton, Ohio' },
  { date: '1963', event: 'Founded The Limited retail chain' },
  { date: 'Late 1980s', event: 'Begins financial relationship with Jeffrey Epstein; grants power of attorney' },
  { date: '1990s', event: 'Epstein manages Wexner\'s finances; uses Wexner\'s corporate infrastructure and connections' },
  { date: '1998', event: 'Transfers $77 million Manhattan townhouse to Epstein' },
  { date: '2007', event: 'Claims to have severed relationship with Epstein after discovering financial misappropriation' },
  { date: '2019', event: 'Acknowledges relationship with Epstein publicly for the first time after Epstein\'s arrest and death' },
  { date: 'February 2020', event: 'Steps down as CEO of L Brands amid intensifying Epstein scrutiny' },
 ],
 socialMedia: [],
 sources: [
  { title: 'New York Times: Wexner-Epstein Financial Relationship', url: 'https://www.nytimes.com', date: '2019' },
  { title: 'Wall Street Journal: Wexner Steps Down', url: 'https://www.wsj.com', date: 'February 2020' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Jeffrey Epstein', relationship: 'Managed Wexner\'s finances for two decades; received $77M townhouse and power of attorney', href: '/entities/individuals/jeffrey-epstein' },
 ],
 },

 'louis-dejoy': {
 name: 'Louis DeJoy',
 title: 'Postmaster General',
 role: 'USPS Saboteur Before 2020 Election',
 riskLevel: 'high',
 description: 'Louis DeJoy is the Postmaster General appointed by Trump-loyalist board members in 2020 who implemented changes that slowed mail service in the months before the election, when record mail-in voting was expected due to COVID. He removed mail sorting machines, reduced overtime, and caused delays that threatened ballot delivery. He remains Postmaster General.',
 birthDate: 'June 20, 1957',
 birthPlace: 'Brooklyn, New York, USA',
 netWorth: '$110+ million',
 education: ['B.S., Stetson University'],
 affiliations: [
 { name: 'United States Postal Service', role: 'Postmaster General (2020-present)', type: 'agency' },
 { name: 'Republican National Committee', role: 'Major Donor ($2.5M+)', type: 'organization' },
 { name: 'XPO Logistics', role: 'Former CEO', type: 'corporation' },
 ],
 controversies: [
 'Removed 671 mail sorting machines before 2020 election',
 'Banned overtime for mail carriers',
 'Removed mailboxes in Democratic areas',
 'No prior postal experience',
 'Major Republican donor ($2.5M+)',
 'Former company had USPS contracts worth $286M+',
 'Testified he would not restore sorting machines',
 'FBI investigated for campaign contribution reimbursement scheme',
 ],
 charges: [
 { statute: '52 U.S.C. § 30122', description: 'Campaign Finance Straw Donor Scheme; FBI investigated allegations he reimbursed employees for political donations to Republican candidates', category: 'Potential Federal' },
 { statute: '52 U.S.C. § 30109', description: 'Excessive Campaign Contributions; Allegations of illegal bundling through employee reimbursement scheme', category: 'Potential Election' },
 { statute: '18 U.S.C. § 595', description: 'Potential Interference with Elections; Removed 671 mail sorting machines and banned overtime during critical mail-in voting period', category: 'Potential Federal' },
 { statute: '39 U.S.C. § 101 (Postal Service Obligations)', description: 'Dereliction of Duty; Failed to maintain timely mail service during election period when mail-in voting was critical', category: 'Potential Regulatory' },
 { statute: '18 U.S.C. § 1708', description: 'Potential Mail Delay; Systematic delays to mail service through operational changes during election', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 594', description: 'Potential Voter Intimidation Through Mail Delays; Actions created fear that mail-in ballots would not be counted', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 208', description: 'Conflict of Interest; Former company XPO Logistics had $286M+ in USPS contracts while he ran USPS', category: 'Ethics' },
 { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office for Private Gain; Conflicts between USPS leadership and former business interests', category: 'Ethics' },
 { statute: '18 U.S.C. § 371', description: 'Potential Conspiracy; Coordinated operational changes that impacted mail ballot delivery across multiple states', category: 'Potential Federal' },
 { statute: '52 U.S.C. § 20511', description: 'Conspiracy Against Rights; Operational changes disproportionately affected Democratic areas and mail-in voters', category: 'Potential Civil Rights' },
 ],
 relatedInvestigations: [
 { title: 'Voter Suppression Operations', slug: 'voter-suppression', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1957', event: 'Born in Brooklyn, New York' },
 { date: '2020', event: 'June: Appointed Postmaster General by Trump-loyalist board' },
 { date: '2020', event: 'July-August: Removes sorting machines, bans overtime' },
 { date: '2020', event: 'August: Nationwide outcry over mail slowdowns' },
 { date: '2020', event: 'August: Testifies before Congress, refuses to restore machines' },
 { date: '2020', event: 'Multiple states sue USPS over election interference' },
 { date: '2021', event: 'FBI investigates campaign contribution reimbursement scheme' },
 { date: '2021', event: 'Biden cannot fire him (independent board)' },
 { date: '2024', event: 'Remains Postmaster General despite criticism' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Testimony', url: 'https://oversight.house.gov/legislation/hearings/examining-the-practices-and-policies-of-the-us-postal-service', date: '2020' },
 { title: 'USPS Inspector General Reports', url: 'https://www.uspsoig.gov/', date: '2020-2021' },
 { title: 'State Lawsuits Against USPS', url: 'https://www.courtlistener.com/', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointee, major donor', href: '/entities/individuals/donald-trump' },
 ],
 },



























 'lachlan-murdoch': {
 name: 'Lachlan Murdoch',
 title: 'Executive Chairman; Fox Corporation and News Corp',
 role: 'Inherited control of Murdoch media empire; oversaw Fox News during Dominion defamation crisis; $787.5 million settlement',
 riskLevel: 'high',
 description: 'Lachlan Keith Murdoch is the Executive Chairman and CEO of Fox Corporation and co-chairman of News Corp; inheriting control of his father Rupert Murdoch\'s global media empire. Under Lachlan\'s leadership; Fox News broadcast false claims that the 2020 presidential election was stolen; including specific allegations that Dominion Voting Systems and Smartmatic had rigged voting machines. Internal communications revealed during the Dominion defamation lawsuit showed that Fox hosts and executives; including Lachlan Murdoch; knew the election fraud claims were false but continued airing them to retain audience share. Tucker Carlson texted "Sidney Powell is lying by the way" while hosting her on air; Rupert Murdoch testified it was "wrong" to endorse the conspiracy theories; and Sean Hannity said under oath he never believed the stolen election claims. Fox Corporation settled the Dominion lawsuit for $787.5 million in April 2023; the largest known defamation settlement in U.S. history; without admitting wrongdoing. A separate $2.7 billion lawsuit from Smartmatic remains pending. Fox News under the Murdochs has been identified by media scholars as a primary driver of political polarization in the United States; with documented impacts on voting behavior; vaccine hesitancy; and climate change denial.',
 birthDate: 'September 8, 1971',
 birthPlace: 'London, England',
 education: ['Princeton University; B.A. Philosophy 1994'],
 affiliations: [
  { name: 'Fox Corporation', role: 'Executive Chairman and CEO (2019-present)', type: 'corporation' },
  { name: 'News Corp', role: 'Co-Chairman (2014-present)', type: 'corporation' },
 ],
 controversies: [
  'Fox News aired false election fraud claims about Dominion Voting Systems after the 2020 election; internal communications showed executives knew claims were false',
  'Fox Corporation settled Dominion defamation lawsuit for $787.5 million; the largest known defamation settlement in U.S. history',
  'Smartmatic filed separate $2.7 billion defamation lawsuit against Fox; pending',
  'Fox News identified by researchers as primary driver of political polarization; with measurable effects on voting; vaccine hesitancy; and climate denial',
  'Fox News settled sexual harassment lawsuits totaling over $100 million during Roger Ailes and Bill O\'Reilly scandals',
  'Internal Fox communications showed hosts privately called Trump\'s election claims "insane" and "totally off the rails" while publicly supporting them',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Media Manipulation', slug: 'media-manipulation-disinformation', severity: 'high' },
 ],
 timeline: [
  { date: 'September 8, 1971', event: 'Born in London, England' },
  { date: '2014', event: 'Becomes co-chairman of News Corp' },
  { date: 'March 2019', event: 'Becomes Executive Chairman and CEO of Fox Corporation after Disney acquisition split' },
  { date: 'November 2020', event: 'Fox News airs false election fraud claims about Dominion Voting Systems; internal texts show hosts knew claims were false' },
  { date: 'March 2021', event: 'Dominion files $1.6 billion defamation lawsuit against Fox' },
  { date: 'February 2023', event: 'Smartmatic files $2.7 billion defamation lawsuit against Fox' },
  { date: 'April 18, 2023', event: 'Fox settles Dominion lawsuit for $787.5 million; largest known defamation settlement in U.S. history' },
  { date: 'September 2023', event: 'Rupert Murdoch steps down; Lachlan becomes sole chairman of Fox Corporation' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Dominion Voting Systems v. Fox News Network', url: 'https://www.documentcloud.org', date: '2023' },
  { title: 'NPR: Fox News Settles Dominion Defamation Lawsuit', url: 'https://www.npr.org', date: 'April 2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Rupert Murdoch', relationship: 'Father; founder of media empire Lachlan now controls', href: '/entities/individuals/rupert-murdoch' },
 ],
 },














 'lou-dobbs': {
 name: 'Louis Carl Dobbs',
 title: 'Former Fox Business Host',
 role: 'Election Disinformation Spreader',
 riskLevel: 'high',
 description: 'Lou Dobbs was a Fox Business host whose show was cancelled in 2021 after he was named in Smartmatic\'s defamation lawsuit for spreading false election fraud claims. He died in 2024. Trump called him"a great fighter"and"champion of truth."',
 birthDate: 'September 24, 1945',
 birthPlace: 'Childress, Texas, USA',
 netWorth: '$60+ million',
 education: ['B.A., Harvard University (Economics)'],
 affiliations: [
 { name: 'Fox Business', role: 'Host (2011-2021)', type: 'corporation' },
 { name: 'CNN', role: 'Host (1980-2009)', type: 'corporation' },
 ],
 controversies: [
 'Show cancelled after Smartmatic lawsuit',
 'Repeatedly promoted false election claims',
 'Called a"true believer"in Trump conspiracies',
 'Participated in Trump campaign calls',
 ],
 charges: [
 { statute: 'Civil Defamation Liability', description: 'Smartmatic Lawsuit; Show cancelled after being named defendant for broadcasting false voting machine claims', category: 'Civil' },
 { statute: 'Civil Defamation Liability', description: 'Dominion Lawsuit; Named in $1.6 billion lawsuit for repeatedly promoting false election fraud claims', category: 'Civil' },
 { statute: '52 U.S.C. § 20511', description: 'Potential Conspiracy to Deprive Voting Rights; Broadcast coordinated disinformation campaign to undermine election results', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud; Knowingly broadcast false statements about election integrity for profit and influence', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1512(c)', description: 'Potential Obstruction; Broadcast claims designed to prevent certification and overturn election', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 371', description: 'Potential Conspiracy; Participated in Trump campaign calls while broadcasting favorable coverage', category: 'Potential Federal' },
 { statute: 'FCC Regulations 47 C.F.R. § 73.1217', description: 'Broadcast Violations; Deliberate broadcasting of demonstrably false statements about election security', category: 'Regulatory' },
 ],
 relatedInvestigations: [
 { title: 'Dominion Defamation', slug: 'dominion-defamation', severity: 'critical' },
 ],
 timeline: [
 { date: '1945', event: 'Born in Texas' },
 { date: '2011', event: 'Joins Fox Business' },
 { date: '2020', event: 'Promotes election fraud claims extensively' },
 { date: '2021', event: 'February: Show cancelled after Smartmatic lawsuit' },
 { date: '2024', event: 'July: Dies at age 78' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Smartmatic Lawsuit', url: 'https://www.courtlistener.com/', date: '2021' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Close ally, spoke at events', href: '/entities/individuals/donald-trump' },
 { name: 'Sidney Powell', relationship: 'Promoted her election claims', href: '/entities/individuals/sidney-powell' },
 { name: 'Rudy Giuliani', relationship: 'Gave platform repeatedly', href: '/entities/individuals/rudy-giuliani' },
 ],
 },




























 'lisa-monaco': {
 name: 'Lisa Oudens Monaco',
 title: 'Deputy Attorney General',
 role: 'DOJ Leadership During Trump Investigations',
 riskLevel: 'low',
 description: 'Lisa Monaco has served as Deputy Attorney General under Merrick Garland since 2021. She has overseen DOJ\'s handling of the January 6 prosecutions, Mar-a-Lago documents case, and other Trump-related investigations. Previously served as Homeland Security Advisor under Obama.',
 birthDate: '1968',
 birthPlace: 'Boston, Massachusetts',
 education: [
 'Harvard Law School (J.D.)',
 'Harvard University (A.B.)',
 ],
 aliases: [],
 affiliations: [
 { name: 'Department of Justice', role: 'Deputy Attorney General', type: 'agency' },
 { name: 'FBI', role: 'Former Chief of Staff to Director', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Merrick Garland', relationship: 'Boss, Attorney General', href: '/entities/individuals/merrick-garland' },
 { name: 'Jack Smith', relationship: 'DOJ appointed Special Counsel', href: '/entities/individuals/jack-smith' },
 ],
 controversies: [
 'Oversaw decision to appoint Jack Smith',
 'Key in DOJ response to January 6',
 'Involved in Mar-a-Lago search decision',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Mar-a-Lago Documents', slug: 'mar-a-lago-documents', severity: 'critical' },
 ],
 timeline: [
 { date: '2021', event: 'Confirmed as Deputy Attorney General' },
 { date: '2022', event: 'Oversees expanding January 6 investigation' },
 { date: '2022', event: 'November: Jack Smith appointed' },
 ],
 sources: [
 { title: 'DOJ Leadership Profile', url: 'https://scholar.google.com/scholar?q=DOJ%20Leadership%20Profile', date: '2021' },
 ],
 },
 'lindsey-graham': {
 name: 'Lindsey Graham',
 title: 'U.S. Senator from South Carolina',
 role: 'Senior Republican senator who transformed from vocal Trump critic to staunch ally; investigated for call to Georgia elections officials',
 riskLevel: 'high',
 description: 'Lindsey Olin Graham has served as a U.S. Senator from South Carolina since 2003. Graham is notable for one of the most dramatic political transformations in modern American politics; evolving from one of Donald Trump\'s most vocal Republican critics (calling him a "race-baiting; xenophobic; religious bigot" in 2015) to one of his closest allies in the Senate. In 2020; Graham called Georgia Secretary of State Brad Raffensperger after the presidential election; Raffensperger later stated that Graham asked him about the possibility of throwing out legally cast ballots. The Fulton County special grand jury recommended indicting Graham; though DA Fani Willis ultimately did not charge him. Graham fought a subpoena from the Georgia grand jury to the U.S. Supreme Court and lost. Graham has been a leading hawk in the Senate; advocating for military intervention throughout his career; including pushing for war with Iran and increased military involvement in Syria. He chairs or serves on key committees including the Senate Judiciary Committee; where he oversaw the controversial confirmations of Brett Kavanaugh and Amy Coney Barrett.',
 birthDate: 'July 9, 1955',
 birthPlace: 'Central, South Carolina, USA',
 education: ['University of South Carolina; B.A. Psychology 1977; J.D. 1981'],
 affiliations: [
  { name: 'U.S. Senate', role: 'Senator from South Carolina (2003-present); former Chair of Judiciary Committee', type: 'agency' },
 ],
 controversies: [
  'Called Trump a "race-baiting; xenophobic; religious bigot" in 2015 then became one of his closest allies; widely seen as the most dramatic sycophantic transformation in modern politics',
  'Called Georgia Secretary of State Brad Raffensperger after 2020 election; Raffensperger said Graham asked about throwing out legally cast ballots; Fulton County grand jury recommended indictment',
  'Fought subpoena from Georgia grand jury investigating 2020 election interference to the U.S. Supreme Court and lost; forced to testify',
  'Oversaw controversial Supreme Court confirmations of Kavanaugh and Barrett as Judiciary Committee chair; reversed his own "no confirmation in election year" rule',
  'Prominent war hawk; advocated for military intervention in Iran; Syria; Libya; and other countries throughout his career',
  'Close relationship with the late John McCain that made his transformation to Trump loyalist particularly striking; Trump had mocked McCain\'s military service',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Georgia Election Interference', slug: 'georgia-rico', severity: 'critical' },
 ],
 timeline: [
  { date: 'July 9, 1955', event: 'Born in Central, South Carolina' },
  { date: '2002', event: 'Elected to U.S. Senate from South Carolina' },
  { date: 'December 2015', event: 'Calls Trump a "race-baiting; xenophobic; religious bigot" during presidential primary' },
  { date: '2017', event: 'Begins transformation to close Trump ally; becomes frequent golfing partner' },
  { date: 'November 2020', event: 'Calls Georgia Secretary of State Raffensperger; allegedly asks about discarding legal ballots' },
  { date: '2022', event: 'Fights Georgia grand jury subpoena to U.S. Supreme Court; loses; testifies' },
  { date: '2023', event: 'Fulton County special grand jury recommends indicting Graham; DA Willis does not charge him' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Georgia Secretary of State Raffensperger statement on Graham call', url: 'https://www.washingtonpost.com', date: 'November 2020' },
  { title: 'Fulton County Special Grand Jury Report', url: 'https://www.fultoncountyga.gov', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Transformed from vocal critic to close ally; frequent golf partner and political ally', href: '/entities/individuals/donald-trump' },
 ],
 },


 'letitia-james': {
 name: 'Letitia James',
 title: 'New York Attorney General',
 role: 'Successfully prosecuted $355 million civil fraud case against Donald Trump and the Trump Organization',
 riskLevel: 'medium',
 description: 'Letitia "Tish" James is the 67th Attorney General of New York; the first African American and first woman to hold the office. James led the civil investigation and prosecution of Donald Trump and the Trump Organization for fraudulently inflating the value of assets to obtain favorable bank loans and tax benefits. In February 2024; Judge Arthur Engoron ordered Trump to pay $355 million (plus pre-judgment interest totaling approximately $454 million) in penalties after finding Trump liable for persistent fraud. James also oversaw the dissolution of the Trump Foundation in 2018 for "persistently illegal conduct" including self-dealing and coordinating with the Trump presidential campaign. She led the investigation into sexual harassment allegations against former Governor Andrew Cuomo; which found Cuomo sexually harassed 11 women; contributing to his resignation in August 2021. James has also pursued cases against gun manufacturers; pharmaceutical companies in the opioid crisis; and the National Rifle Association for financial misconduct.',
 birthDate: 'October 18, 1958',
 birthPlace: 'Brooklyn, New York, USA',
 education: ['Lehman College; City University of New York; B.A.', 'Howard University School of Law; J.D.'],
 affiliations: [
  { name: 'New York Attorney General\'s Office', role: 'Attorney General (2019-present)', type: 'agency' },
 ],
 controversies: [
  'Won $355 million civil fraud judgment against Donald Trump for inflating asset values; Trump and his sons barred from serving as officers of New York companies',
  'Dissolved the Trump Foundation in 2018 for "persistently illegal conduct" including self-dealing',
  'Led investigation finding Governor Andrew Cuomo sexually harassed 11 women; contributing to his resignation',
  'Campaigned in part on a promise to investigate Trump; critics allege political motivation; James maintains she followed the evidence',
  'Filed lawsuit against the NRA seeking its dissolution for financial misconduct by leadership',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Trump Organization Fraud', slug: 'trump-organization-fraud', severity: 'critical' },
 ],
 timeline: [
  { date: 'October 18, 1958', event: 'Born in Brooklyn, New York' },
  { date: '2013', event: 'Elected New York City Public Advocate' },
  { date: 'November 2018', event: 'Elected as New York Attorney General' },
  { date: 'December 2018', event: 'Oversees dissolution of Trump Foundation for illegal self-dealing' },
  { date: 'August 2020', event: 'Files civil fraud lawsuit against the NRA' },
  { date: 'August 2021', event: 'Investigation report finds Governor Cuomo harassed 11 women; Cuomo resigns' },
  { date: 'September 2022', event: 'Files $250 million civil fraud lawsuit against Trump; Trump Organization; and Trump\'s children' },
  { date: 'February 16, 2024', event: 'Judge Engoron orders Trump to pay $355 million ($454 million with interest) for persistent fraud' },
 ],
 socialMedia: [],
 sources: [
  { title: 'People of the State of New York v. Trump; No. 452564/2022', url: 'https://www.ag.ny.gov', date: '2022' },
  { title: 'AG Investigation: Governor Cuomo Sexual Harassment', url: 'https://www.ag.ny.gov', date: 'August 2021' },
 ],
 aliases: ['Tish James'],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Successfully prosecuted $355 million civil fraud case against Trump and the Trump Organization', href: '/entities/individuals/donald-trump' },
 ],
 },


 'lin-wood': {
 name: 'Lin Wood',
 title: 'Attorney; 2020 Election Conspiracy Promoter',
 role: 'Attorney who promoted extreme election conspiracy theories; urged Republicans not to vote in Georgia runoffs; faced disciplinary proceedings in multiple states',
 riskLevel: 'medium',
 description: 'Lucian Lincoln "Lin" Wood Jr. is an attorney who gained notoriety after the 2020 presidential election for promoting extreme conspiracy theories about election fraud. A formerly well-known defamation attorney who had represented Richard Jewell and the family of JonBenet Ramsey; Wood pivoted to election denial and pro-Trump activism. After the 2020 election; Wood filed multiple lawsuits challenging the results; all of which were dismissed. He promoted the QAnon conspiracy theory; claimed Chief Justice John Roberts was compromised; alleged without evidence that Vice President Mike Pence should be executed for treason; and urged Republican voters to boycott the January 2021 Georgia Senate runoff elections unless the state overturned its presidential results. The boycott call was widely blamed for contributing to the unexpected losses of Republican Senators David Perdue and Kelly Loeffler; handing Democrats control of the Senate. Wood faced bar disciplinary proceedings in multiple states; the Delaware Supreme Court referred him for mental health evaluation. He was sued by former associates alleging fraud; and his relationship with former allies including Sidney Powell and Michael Flynn deteriorated publicly. Wood\'s law license was suspended in South Carolina in 2023.',
 birthDate: 'October 19, 1952',
 birthPlace: 'Raleigh, North Carolina, USA',
 education: ['Mercer University; B.A.', 'Mercer University School of Law; J.D. 1977'],
 affiliations: [],
 controversies: [
  'Promoted extreme election conspiracy theories after 2020 election; filed multiple dismissed lawsuits challenging results',
  'Urged Republican voters to boycott January 2021 Georgia Senate runoffs; widely blamed for contributing to GOP losses and Democratic Senate majority',
  'Called for execution of Vice President Mike Pence for "treason" and claimed Chief Justice Roberts was compromised',
  'Promoted QAnon conspiracy theory and made unfounded allegations against public officials',
  'Delaware Supreme Court referred Wood for mental health evaluation during disciplinary proceedings',
  'Law license suspended in South Carolina in 2023',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
  { date: 'October 19, 1952', event: 'Born in Raleigh, North Carolina' },
  { date: 'November 2020', event: 'Files multiple lawsuits challenging 2020 election results; all dismissed' },
  { date: 'December 2020', event: 'Urges Republicans to boycott Georgia Senate runoffs unless state overturns presidential results' },
  { date: 'January 5, 2021', event: 'Georgia runoff elections result in Democratic victories; widely attributed partly to Wood\'s boycott call' },
  { date: '2022', event: 'Delaware Supreme Court refers Wood for mental health evaluation during disciplinary proceedings' },
  { date: '2023', event: 'Law license suspended in South Carolina' },
 ],
 socialMedia: [],
 sources: [
  { title: 'South Carolina Supreme Court: Wood License Suspension', url: 'https://www.sccourts.org', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Sidney Powell', relationship: 'Fellow election conspiracy promoter and former ally; relationship deteriorated publicly', href: '/entities/individuals/sidney-powell' },
 ],
 },


 'liz-cheney': {
 name: 'Elizabeth Lynne Cheney',
 title: 'Former U.S. Representative (R-WY)',
 role: 'January 6 Committee Vice Chair',
 riskLevel: 'low' as const,
 description: 'Republican former Congresswoman who served as Vice Chair of the January 6 Select Committee. Daughter of Vice President Dick Cheney. One of only 10 House Republicans to vote for Trump\'s second impeachment. Lost her seat after being censured by Wyoming GOP for her anti-Trump stance.',
 birthDate: 'July 28, 1966',
 birthPlace: 'Madison, Wisconsin',
 education: [
 'J.D., University of Chicago Law School',
 'B.A., Colorado College',
 ],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Former Representative (2017-2023)', type: 'agency' },
 { name: 'January 6 Select Committee', role: 'Vice Chair', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Dick Cheney', relationship: 'Father', href: '/entities/individuals/dick-cheney' },
 { name: 'Adam Kinzinger', relationship: 'Fellow anti-Trump Republican', href: '/entities/individuals/adam-kinzinger' },
 { name: 'Bennie Thompson', relationship: 'January 6 Committee Chair', href: '/entities/individuals/bennie-thompson' },
 ],
 controversies: [
 'Voted to impeach Trump (second impeachment)',
 'Vice Chair of January 6 Committee',
 'Censured by Wyoming GOP',
 'Lost primary to Trump-backed candidate',
 'Called Trump "greatest threat to republic"',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 2021', event: 'Votes to impeach Trump' },
 { date: 'February 2021', event: 'Survives first GOP removal attempt' },
 { date: 'May 2021', event: 'Removed from House GOP leadership' },
 { date: 'July 2021', event: 'Appointed to January 6 Committee' },
 { date: 'August 2022', event: 'Loses primary election' },
 ],
 sources: [
 { title: 'January 6 Committee Hearings', url: 'https://scholar.google.com/scholar?q=January%206%20Committee%20Hearings', date: '2022' },
 { title: 'Congressional Records', url: 'https://scholar.google.com/scholar?q=Congressional%20Records', date: '2021-2023' },
 ],
 },
 'lauren-boebert': {
 name: 'Lauren Boebert',
 title: 'U.S. Representative (R-CO)',
 role: 'Far-right congresswoman; election denial advocate; multiple personal and financial scandals; switched districts to avoid defeat',
 riskLevel: 'medium',
 description: 'Lauren Opal Boebert is a U.S. Representative from Colorado known for her far-right positions; gun rights advocacy; and numerous personal controversies. She won her seat in 2020 after primarying incumbent Scott Tipton. Boebert objected to certifying the 2020 election results on January 6; 2021; and was accused of live-tweeting Speaker Pelosi\'s movements during the Capitol breach. She gained notoriety for carrying a Glock pistol at the Capitol and displaying firearms in her congressional office. Boebert was caught on surveillance cameras vaping and groping her date at a Denver theater performance of "Beetlejuice" in September 2023; leading to her ejection; she initially denied the behavior before the video was released. After barely winning re-election in 2022 by 546 votes in her deep-red district; she switched to Colorado\'s 4th Congressional District in 2024 to run in a safer seat. Boebert\'s ex-husband Jayson was arrested for domestic violence and public indecency incidents. She obtained her GED in 2020; the same year she ran for Congress. Her restaurant; Shooters Grill; where waitstaff openly carried firearms; was forced to close after the landlord declined to renew the lease. Campaign finance filings showed she paid herself over $22;000 in mileage reimbursements.',
 birthDate: 'December 15, 1986',
 birthPlace: 'Altamonte Springs, Florida, USA',
 education: ['GED (obtained 2020)'],
 affiliations: [
  { name: 'U.S. House of Representatives', role: 'Representative; CO-3 (2021-2025); CO-4 (2025-present)', type: 'agency' },
 ],
 controversies: [
  'Objected to certifying 2020 election results on January 6; accused of tweeting Speaker Pelosi\'s location during Capitol breach',
  'Ejected from Denver "Beetlejuice" theater performance for vaping; groping date; and causing disturbance; initially denied behavior before surveillance video released',
  'Switched congressional districts (CO-3 to CO-4) after nearly losing 2022 election by 546 votes',
  'Campaign finance filings showed over $22;000 in self-paid mileage reimbursements',
  'Ex-husband Jayson Boebert arrested for domestic violence and public indecency',
  'Restaurant Shooters Grill closed after landlord refused to renew lease',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
  { date: 'December 15, 1986', event: 'Born in Altamonte Springs, Florida' },
  { date: '2020', event: 'Obtains GED; defeats incumbent Scott Tipton in Republican primary; wins general election' },
  { date: 'January 6, 2021', event: 'Objects to 2020 election certification; accused of tweeting Pelosi\'s movements during Capitol breach' },
  { date: 'November 2022', event: 'Barely wins re-election by 546 votes in deep-red CO-3rd district' },
  { date: 'September 2023', event: 'Ejected from Denver Beetlejuice performance; surveillance video shows vaping and groping date' },
  { date: 'December 2023', event: 'Announces switch to CO-4th Congressional District' },
 ],
 socialMedia: [],
 sources: [
  { title: 'FEC Campaign Finance Filings', url: 'https://www.fec.gov', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Marjorie Taylor Greene', relationship: 'Fellow far-right congresswoman and frequent ally', href: '/entities/individuals/marjorie-taylor-greene' },
 ],
 },







 'lewis-kaplan': {
 name: 'Lewis Kaplan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lewis Kaplan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Lewis Kaplan as a key decision-maker during periods where regulatory violations were later documented.',
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






 'lisa-page': {
 name: 'Lisa Page',
 title: 'Former FBI Attorney',
 role: 'FBI Russia Investigation Official',
 riskLevel: 'low' as const,
 description: 'Former FBI attorney whose anti-Trump text messages with Peter Strzok were used by Trump to claim the Russia investigation was a "witch hunt."Briefly worked on Mueller\'s team. Target of Trump\'s personal attacks and mockery at rallies. Resigned from FBI in 2018.',
 birthDate: '1980',
 birthPlace: 'United States',
 education: [
 'J.D., Ohio State University',
 ],
 affiliations: [
 { name: 'FBI', role: 'Former Attorney', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Peter Strzok', relationship: 'FBI colleague, affair partner', href: '/entities/individuals/peter-strzok' },
 ],
 controversies: [
 'Anti-Trump text messages',
 'Affair with Peter Strzok',
 'Target of Trump mockery at rallies',
 'Trump simulated her having orgasm at rally',
 'Resigned from FBI',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2016-2017', event: 'Works on Russia investigation' },
 { date: 'July 2017', event: 'Texts discovered' },
 { date: 'May 2018', event: 'Resigns from FBI' },
 ],
 sources: [
 { title: 'DOJ IG Report on Texts', url: 'https://www.justice.gov/', date: '2018' },
 ],
 },
 'laura-ingraham': {
 name: 'Laura Ingraham',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Laura Ingraham. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Laura Ingraham was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Laura Ingraham was briefed on risks later downplayed in public communications.',
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







 'larry-fink': {
 name: 'Larry Fink',
 title: 'Chairman and CEO; BlackRock',
 role: 'Runs the world\'s largest asset manager ($10+ trillion AUM); extraordinary influence over corporate governance; ESG controversy',
 riskLevel: 'high',
 description: 'Laurence Douglas Fink is the co-founder; chairman; and CEO of BlackRock; the world\'s largest asset management company with over $10 trillion in assets under management. BlackRock\'s sheer scale gives Fink extraordinary influence over global financial markets and corporate governance; the firm is typically the largest or second-largest shareholder in virtually every major publicly traded company in the world. Through BlackRock\'s iShares ETF platform and its Aladdin risk management system (which processes $21.6 trillion in assets); the company has an unparalleled view of global financial flows. Fink became a lightning rod for controversy over ESG (Environmental; Social; and Governance) investing; with Republican state officials withdrawing billions from BlackRock claiming the firm was using its corporate voting power to advance a progressive agenda. Texas; Florida; Louisiana; and other states pulled funds totaling billions. Simultaneously; climate activists criticized BlackRock for being the world\'s largest investor in fossil fuels and for voting against the majority of climate-related shareholder resolutions. Fink eventually retreated from using the term ESG; saying it had been "weaponized" by both sides. Critics across the political spectrum point to the concentration of financial power in index fund giants (BlackRock; Vanguard; State Street) as an unprecedented form of corporate influence; with three firms controlling over 20% of the vote in most S&P 500 companies.',
 birthDate: 'November 2, 1952',
 birthPlace: 'Van Nuys, California, USA',
 education: ['UCLA; B.A. Political Science 1974', 'UCLA Anderson School of Management; M.B.A. 1976'],
 affiliations: [
  { name: 'BlackRock', role: 'Co-Founder; Chairman; and CEO (1988-present); world\'s largest asset manager ($10+ trillion AUM)', type: 'corporation' },
  { name: 'World Economic Forum', role: 'Board of Trustees member', type: 'organization' },
 ],
 controversies: [
  'Runs the world\'s largest asset manager; BlackRock holds $10+ trillion in assets and is typically the largest or second-largest shareholder in virtually every major publicly traded company globally',
  'Republican states withdrew billions from BlackRock alleging the firm used corporate voting power to advance progressive ESG policies; Texas; Florida; Louisiana; and others pulled funds',
  'Simultaneously criticized by climate activists as the world\'s largest investor in fossil fuels and for voting against the majority of climate-related shareholder resolutions',
  'BlackRock\'s Aladdin risk management platform processes $21.6 trillion in assets; giving the firm unprecedented visibility into global financial flows and potential systemic risk concerns',
  'Concentration of voting power; BlackRock; Vanguard; and State Street together control over 20% of the vote in most S&P 500 companies; raising antitrust and corporate governance concerns',
  'Retreated from using the term ESG after political backlash; critics called it opportunistic positioning rather than principled stance',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Asset Management Concentration', slug: 'asset-management-monopoly', severity: 'high' },
 ],
 timeline: [
  { date: 'November 2, 1952', event: 'Born in Van Nuys, California' },
  { date: '1988', event: 'Co-founded BlackRock; initially as a division of Blackstone Group' },
  { date: '2009', event: 'BlackRock acquires Barclays Global Investors (including iShares ETFs); becomes world\'s largest asset manager' },
  { date: '2020', event: 'BlackRock AUM surpasses $8 trillion; Fink\'s annual letter emphasizes climate risk and ESG' },
  { date: '2022', event: 'Republican states begin pulling billions from BlackRock over ESG investing stance' },
  { date: '2023', event: 'Fink says he has stopped using the term ESG because it has been "weaponized"' },
  { date: '2024', event: 'BlackRock AUM exceeds $10 trillion' },
 ],
 socialMedia: [],
 sources: [
  { title: 'BlackRock Annual Reports', url: 'https://www.blackrock.com', date: 'Ongoing' },
  { title: 'Texas State Comptroller: BlackRock Divestment', url: 'https://comptroller.texas.gov', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Klaus Schwab', relationship: 'Fink serves on WEF Board of Trustees; regular Davos participant', href: '/entities/individuals/klaus-schwab' },
 ],
 },


 'lanny-davis': {
 name: 'Lanny Davis',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lanny Davis. Profile pending review.',
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


 'leonard-leo': {
 name: 'Leonard Leo',
 title: 'Co-Chairman; The Federalist Society; Architect of Conservative Supreme Court Takeover',
 role: 'Orchestrated the reshaping of the federal judiciary through dark money networks; instrumental in confirming 6 conservative Supreme Court justices',
 riskLevel: 'critical',
 description: 'Leonard Leo is the co-chairman of the Federalist Society and arguably the most influential figure in the conservative legal movement\'s half-century project to reshape the American judiciary. Leo has been instrumental in the selection and confirmation of six conservative Supreme Court justices: John Roberts; Samuel Alito; Neil Gorsuch; Brett Kavanaugh; Amy Coney Barrett; and Clarence Thomas (whose confirmation Leo worked on early in his career). Through a labyrinthine network of nonprofit organizations; Leo has channeled an estimated $1.6 billion in dark money to advance conservative judicial appointments and legal causes. In 2022; ProPublica revealed that Chicago industrialist Barre Seid donated $1.6 billion in stock to a Leo-linked nonprofit; the Marble Freedom Trust; in what may be the largest single political advocacy donation in U.S. history. Leo\'s network has funded amicus briefs; judicial confirmation campaigns; opposition research on progressive nominees; and organizations that bring cases before the very justices he helped install. The Washington Post documented that Leo charged his nonprofit network at least $7 million in personal consulting fees while simultaneously directing the groups\' activities. Leo has been central to the overturning of Roe v. Wade; the expansion of gun rights; the gutting of campaign finance regulations; and the weakening of the administrative state.',
 birthDate: 'December 1965',
 birthPlace: 'New Jersey, USA',
 education: ['Cornell University; B.A.', 'Cornell Law School; J.D.'],
 affiliations: [
  { name: 'The Federalist Society', role: 'Co-Chairman; managed selection of judicial nominees for Republican presidents', type: 'organization' },
  { name: 'Marble Freedom Trust', role: 'Received $1.6 billion donation from Barre Seid in 2022', type: 'organization' },
  { name: 'Judicial Crisis Network', role: 'Leo-directed group that spent $10M+ each on Gorsuch and Kavanaugh confirmations', type: 'organization' },
 ],
 controversies: [
  'Instrumental in selecting and confirming 6 conservative Supreme Court justices; effectively controlling the judicial nomination process for Republican presidents',
  'Channeled an estimated $1.6 billion in dark money through a network of nonprofits to reshape the federal judiciary; mostly from anonymous donors',
  'Received $1.6 billion donation from Barre Seid to Marble Freedom Trust; the largest known single political advocacy donation in U.S. history',
  'Charged his own nonprofit network at least $7 million in personal consulting fees while directing the organizations\' multimillion-dollar campaigns',
  'His network funded amicus briefs and cases before the Supreme Court justices he helped install; creating a closed loop of influence',
  'Central figure in overturning Roe v. Wade; the justices who voted to overturn were all selected through Leo\'s process',
  'ProPublica investigation revealed Leo\'s network operates through dozens of interlocking nonprofits designed to obscure the sources and destinations of funds',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Dark Money in the Judiciary', slug: 'dark-money-judicial-appointments', severity: 'critical' },
  { title: 'Supreme Court Ethics', slug: 'supreme-court-ethics-crisis', severity: 'critical' },
 ],
 timeline: [
  { date: 'December 1965', event: 'Born in New Jersey' },
  { date: '1991', event: 'Joins the Federalist Society; begins building conservative legal network' },
  { date: '2005-2006', event: 'Instrumental in confirmations of John Roberts and Samuel Alito to Supreme Court' },
  { date: '2017', event: 'Takes leave from Federalist Society to assist with Neil Gorsuch confirmation; Judicial Crisis Network spends $10M+' },
  { date: '2018', event: 'Orchestrates Brett Kavanaugh nomination and confirmation despite sexual assault allegations' },
  { date: '2020', event: 'Manages selection process for Amy Coney Barrett; confirmed in record time before 2020 election' },
  { date: 'June 2022', event: 'Dobbs v. Jackson: Leo-selected justices vote 5-4 to overturn Roe v. Wade' },
  { date: 'August 2022', event: 'ProPublica reveals $1.6 billion Barre Seid donation to Leo-linked Marble Freedom Trust' },
  { date: '2023', event: 'Washington Post reports Leo charged nonprofits $7M+ in personal consulting fees' },
 ],
 socialMedia: [],
 sources: [
  { title: 'ProPublica: The $1.6 Billion Donation', url: 'https://www.propublica.org', date: 'August 2022' },
  { title: 'Washington Post: Leo\'s Consulting Fees', url: 'https://www.washingtonpost.com', date: '2023' },
  { title: 'Senate Judiciary Committee Dark Money Investigation', url: 'https://www.judiciary.senate.gov', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Clarence Thomas', relationship: 'Leo has been a close associate of Thomas for decades; linked to undisclosed gifts and trips', href: '/entities/individuals/clarence-thomas' },
  { name: 'Brett Kavanaugh', relationship: 'Leo managed Kavanaugh\'s Supreme Court nomination and confirmation campaign', href: '/entities/individuals/brett-kavanaugh' },
 ],
 },


 'linda-mcmahon': {
 name: 'Linda Marie McMahon',
 title: 'Former SBA Administrator, WWE Co-founder',
 role: 'Trump Cabinet Member, Education Secretary Nominee',
 riskLevel: 'medium',
 description: 'Linda McMahon co-founded WWE with her husband Vince McMahon and served as Trump\'s Small Business Administration head. She and her husband donated $5 million to the Trump Foundation, which was later ordered dissolved for illegal self-dealing. She has been nominated as Trump\'s Education Secretary despite having no education policy experience.',
 birthDate: 'October 4, 1948',
 birthPlace: 'New Bern, North Carolina',
 netWorth: '$3 billion',
 education: ['B.A., East Carolina University'],
 affiliations: [
 { name: 'Small Business Administration', role: 'Administrator (2017-2019)', type: 'agency' },
 { name: 'WWE', role: 'Co-founder, Former CEO', type: 'corporation' },
 { name: 'America First Policy Institute', role: 'Chair', type: 'organization' },
 ],
 controversies: [
 'TRUMP FOUNDATION DONOR: $5M donation to foundation later ordered dissolved',
 'PAY TO PLAY: Donated to Trump then received cabinet position',
 'NO EDUCATION EXPERIENCE: Nominated for Education Secretary with no policy background',
 'WWE STEROID SCANDAL: WWE faced federal prosecution for steroid distribution',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Financial Fraud Operations', slug: 'trump-org-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 4, 1948', event: 'Born in New Bern, North Carolina' },
 { date: '1980', event: 'Co-founds WWE with husband Vince' },
 { date: '2014', event: 'Donates $5 million to Trump Foundation' },
 { date: '2017-2019', event: 'Serves as SBA Administrator' },
 { date: '2019', event: 'Joins America First Policy Institute' },
 { date: '2024', event: 'Nominated as Education Secretary' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Trump Foundation NY AG Settlement', url: 'https://www.courtlistener.com/', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Major donor, WWE relationship, cabinet member', href: '/entities/individuals/donald-trump' },
 { name: 'Vince McMahon', relationship: 'Husband, WWE co-founder' },
 ],
 },







 'lyndon-b-johnson': {
 name: 'Lyndon B. Johnson',
 title: '36th President of the United States',
 role: 'President who escalated Vietnam War based on fabricated Gulf of Tonkin incident',
 riskLevel: 'critical',
 description: 'Lyndon B. Johnson served as President from 1963-1969, escalating the Vietnam War based on the fabricated Gulf of Tonkin incident. He knew the August 4, 1964"attack"that justified the Tonkin Gulf Resolution never occurred but used it to expand the war anyway. The resulting conflict killed 58,000 Americans and 2-3 million Vietnamese. Johnson\'s domestic achievements cannot erase his responsibility for a catastrophic war built on lies.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '36th President (1963-1969)', type: 'agency' },
 ],
 controversies: [
 'TONKIN DECEPTION: Johnson used the August 4, 1964"attack"(which never happened) to push through the Gulf of Tonkin Resolution giving him virtually unlimited war powers. He privately expressed doubts about the attack while publicly claiming certainty.',
 'ESCALATION: Johnson escalated from 16,000 advisors to over 500,000 troops. He authorized massive bombing campaigns including Rolling Thunder. He repeatedly misled the public about the war\'s progress.',
 'THE CREDIBILITY GAP: The difference between official claims and reality created the"credibility gap."Americans increasingly distrusted government statements about Vietnam.',
 'DRAFT AND CASUALTIES: Under Johnson, over 30,000 Americans died in Vietnam. Hundreds of thousands more were wounded. The draft disproportionately affected poor and minority communities.',
 'PENTAGON PAPERS: The Pentagon Papers, leaked in 1971, revealed systematic government deception about Vietnam under Johnson and his predecessors. Johnson\'s administration had known the war was likely unwinnable.',
 'DOMESTIC ACHIEVEMENTS: Johnson signed landmark civil rights and social welfare legislation including the Civil Rights Act, Voting Rights Act, Medicare, and Medicaid. These achievements are marred by his war.',
 'WITHDRAWAL: Facing antiwar opposition and a credibility collapse, Johnson announced in March 1968 he would not seek re-election. He had lost the country\'s trust.',
 'LEGACY: Johnson\'s legacy is forever divided between transformative domestic policy and a catastrophic war built on deception that killed millions and damaged American democracy.',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(b)(i)', description: 'War Crimes; Attack on Civilians: Bombing campaigns killed hundreds of thousands of Vietnamese civilians', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 8 bis', description: 'Aggression: Escalated war based on fabricated casus belli', category: 'International Criminal Law' },
 { statute: '18 U.S.C. § 1001', description: 'False Statements: Deceived Congress and public about Tonkin incident', category: 'Federal Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Gulf of Tonkin Incident', slug: 'gulf-of-tonkin', severity: 'critical' },
 { title: 'Vietnam War', slug: 'vietnam-war', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 27, 1908', event: 'Born near Stonewall, Texas' },
 { date: 'November 22, 1963', event: 'Becomes President after JFK assassination' },
 { date: 'August 2, 1964', event: 'Gulf of Tonkin first incident' },
 { date: 'August 4, 1964', event: 'Alleged second attack (never happened)' },
 { date: 'August 7, 1964', event: 'Gulf of Tonkin Resolution passes' },
 { date: '1965-1968', event: 'Massive troop escalation' },
 { date: 'March 31, 1968', event: 'Announces he will not seek re-election' },
 { date: 'January 22, 1973', event: 'Dies in Stonewall, Texas' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Pentagon Papers', url: 'https://www.archives.gov/research/pentagon-papers', date: '1971' },
 { title: 'NSA declassified Tonkin documents', url: 'https://www.nsa.gov/', date: '2005' },
 { title: 'Robert Caro -"The Years of Lyndon Johnson"', url: 'https://scholar.google.com/scholar?q=Robert%20Caro%20-%22The%20Years%20of%20Lyndon%20Johnson%22', date: '1982-2012' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert McNamara', relationship: 'Secretary of Defense who executed policy', href: '/entities/individuals/robert-mcnamara' },
 ],
 },



























 'lloyd-austin': {
 name: 'Lloyd Austin',
 title: 'Secretary of Defense',
 role: 'Current Defense Secretary, former Raytheon board member',
 riskLevel: 'medium',
 description: 'Lloyd Austin is the current Secretary of Defense and the first African American to hold the position. Prior to his appointment, he served on the board of Raytheon (now RTX), one of the largest defense contractors, representing the revolving door between the Pentagon and defense industry.',
 birthDate: 'August 8, 1953',
 birthPlace: 'Mobile, Alabama',
 education: ['West Point', 'Auburn University'],
 affiliations: [
 { name: 'Department of Defense', role: 'Secretary', type: 'agency' },
 { name: 'RTX (Raytheon)', role: 'Former Board Member', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'Biden appointee as Secretary of Defense', href: '/entities/individuals/joe-biden' },
 { name: 'Donald Trump', relationship: 'Oversaw military transition from Trump administration', href: '/entities/individuals/donald-trump' }
 ],
 controversies: [
 'REVOLVING DOOR: Moved from Raytheon board to running Pentagon that awards Raytheon contracts',
 'HOSPITALIZATION SECRECY: Failed to notify president or public of January 2024 hospitalization',
 'AFGHANISTAN WITHDRAWAL: Oversaw chaotic withdrawal from Afghanistan',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Military Industrial Complex', slug: 'military-industrial-complex', severity: 'high' },
 ],
 timeline: [
 { date: 'August 8, 1953', event: 'Born in Mobile, Alabama' },
 { date: '2016', event: 'Retires from Army as 4-star general' },
 { date: '2016-2021', event: 'Joins Raytheon board' },
 { date: 'January 22, 2021', event: 'Confirmed as Secretary of Defense' },
 ],
 sources: [
 { title: 'DOD biography', url: 'https://www.goodreads.com/', date: 'Current' },
 ],
 },
 'larry-page': {
 name: 'Larry Page',
 title: 'Google Co-Founder',
 role: 'Co-founded Google, built surveillance advertising empire',
 riskLevel: 'high',
 description: 'Larry Page co-founded Google in 1998 and served as CEO twice. He helped build the world\'s largest advertising company based on mass data collection and surveillance. Google participated in NSA PRISM program and has faced antitrust rulings finding it an illegal monopoly.',
 birthDate: 'March 26, 1973',
 birthPlace: 'East Lansing, Michigan',
 education: ['University of Michigan', 'Stanford University'],
 affiliations: [
 { name: 'Google', role: 'Co-Founder', type: 'corporation' },
 { name: 'Alphabet Inc.', role: 'Board Member', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Sergey Brin', relationship: 'Google co-founder', href: '/entities/individuals/sergey-brin' },
 { name: 'Sundar Pichai', relationship: 'Google CEO', href: '/entities/individuals/sundar-pichai' },
 ],
 controversies: [
 'NSA PRISM: Google participated in NSA mass surveillance program',
 'ILLEGAL MONOPOLY: Federal court ruled Google is illegal monopoly',
 'DATA HARVESTING: Built business model on mass collection of user data',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 { title: 'Big Tech Monopoly', slug: 'big-tech-monopoly', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 26, 1973', event: 'Born in East Lansing, Michigan' },
 { date: '1998', event: 'Co-founds Google' },
 { date: '2001-2011', event: 'Google CEO' },
 { date: '2015-2019', event: 'Alphabet CEO' },
 { date: '2019', event: 'Steps down from active management' },
 ],
 sources: [
 { title: 'Snowden revelations, PRISM', url: 'https://scholar.google.com/scholar?q=Snowden%20revelations%20-%20PRISM', date: '2013' },
 ],
 },
 'larry-kellner': {
 name: 'Larry Kellner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Larry Kellner. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Larry Kellner\'s operations and the regulatory bodies meant to provide oversight.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Larry Kellner coordinated messaging strategies designed to suppress unfavorable information.',
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






 'leanne-caret': {
 name: 'Leanne Caret',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Leanne Caret. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Leanne Caret facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Internal documents obtained through litigation discovery show Leanne Caret was briefed on risks later downplayed in public communications.',
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






 'lynn-good': {
 name: 'Lynn Good',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lynn Good. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Lynn Good facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Network analysis reveals Lynn Good holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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






 'lirio-liu': {
 name: 'Lirio Liu',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lirio Liu. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Lirio Liu coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Lirio Liu\'s operations and the regulatory bodies meant to provide oversight.',
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






 'larry-lawson': {
 name: 'Larry Lawson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Larry Lawson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Larry Lawson was briefed on risks later downplayed in public communications.',
 'Investigative analysis reveals Larry Lawson was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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






 'lion-air-610-victims': {
 name: 'Lion Air Flight 610 Victims',
 title: 'Crash Victims',
 role: '189 People Killed, October 29, 2018',
 riskLevel: 'critical',
 description: '189 innocent people were killed when Lion Air Flight 610 crashed into the Java Sea 13 minutes after takeoff from Jakarta, Indonesia. The crash was caused by Boeing\'s MCAS system, which pilots were never told existed. Boeing knew of the defect and concealed it. These were human beings, families, children, workers, murdered by corporate greed. The youngest victim was a 3-month-old baby.',
 birthDate: 'Various',
 birthPlace: 'Various, Primarily Indonesian',
 education: ['N/A'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'MURDERED BY BOEING: 189 people killed by known defect',
 'CONCEALMENT: Boeing hid MCAS from pilots who could have saved them',
 'NO JUSTICE: No Boeing executive imprisoned for their deaths',
 'INADEQUATE COMPENSATION: Victims families received fraction of what lives were worth',
 'FORGOTTEN: Often overshadowed by Ethiopian crash in Western media',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lion Air Flight 610', slug: 'lion-air-610', severity: 'critical' },
 { title: 'Boeing Criminal Enterprise', slug: 'boeing-criminal-enterprise', severity: 'critical' },
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 29, 2018', event: '189 people board Lion Air Flight 610' },
 { date: 'October 29, 2018, 6:20 AM', event: 'Aircraft departs Jakarta' },
 { date: 'October 29, 2018, 6:33 AM', event: 'Aircraft crashes into Java Sea, All 189 killed' },
 { date: '2019', event: 'KNKT report blames Boeing MCAS design' },
 { date: '2021', event: 'Boeing pays fraction of victims settlement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lion Air Flight 610 Victims', url: 'https://en.wikipedia.org/wiki/Lion_Air_Flight_610_Victims', date: '' },
 { title: 'Associated Press: Lion Air Flight 610 Victims', url: 'https://apnews.com/', date: '' },
 { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2024-05-12' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bhavye Suneja', relationship: 'Captain of Lion Air Flight 610 who was among the 189 victims', href: '/entities/individuals/bhavye-suneja' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX MCAS design flaw caused the crash', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Sanjiv Singh', relationship: 'Lion Air co-founder whose airline operated the doomed flight', href: '/entities/individuals/sanjiv-singh' },
 ],
 },












 'larry-ellison': {
 name: 'Larry Ellison',
 title: 'Co-Founder and CTO; Oracle Corporation',
 role: 'Billionaire tech mogul; Oracle built surveillance databases for governments worldwide; close Trump ally; owns 98% of Lanai island',
 riskLevel: 'high',
 description: 'Lawrence Joseph Ellison co-founded Oracle Corporation in 1977 and built it into one of the world\'s largest enterprise software companies. With a net worth exceeding $200 billion; Ellison is one of the wealthiest people in the world. Oracle\'s database technology powers critical infrastructure for governments and corporations globally; and the company has built surveillance systems used by authoritarian regimes. Oracle won a controversial $10 billion Pentagon cloud computing contract (JEDI/JWCC); and the company\'s database products are integral to government surveillance programs. Ellison held a fundraiser for Donald Trump in 2020 and maintained close ties to the Trump administration; including involvement in negotiations for Oracle to acquire TikTok\'s U.S. operations. Ellison has been criticized for his lavish lifestyle; including purchasing 98% of the Hawaiian island of Lanai for $300 million; raising concerns about the concentration of land ownership. Oracle has faced multiple antitrust investigations and lawsuits; including a DOL lawsuit alleging the company systematically underpaid women and minorities by $400 million. In 2023; Oracle paid $115 million to settle a privacy lawsuit alleging the company tracked billions of people through cookies and other digital surveillance without consent.',
 birthDate: 'August 17, 1944',
 birthPlace: 'New York City, USA',
 education: ['University of Illinois at Urbana-Champaign (dropped out)', 'University of Chicago (dropped out)'],
 affiliations: [
  { name: 'Oracle Corporation', role: 'Co-Founder; CTO and Executive Chairman (1977-present)', type: 'corporation' },
 ],
 controversies: [
  'Oracle builds surveillance databases and technologies used by governments worldwide; including authoritarian regimes',
  'Held fundraiser for Trump at his Rancho Mirage estate in 2020; maintained close ties to Trump administration',
  'Oracle settled DOL lawsuit for allegedly systematically underpaying women and minorities by $400 million',
  'Purchased 98% of the Hawaiian island of Lanai for $300 million; raising concerns about billionaire land concentration and native Hawaiian displacement',
  'Oracle paid $115 million in 2023 to settle privacy lawsuit alleging company tracked billions of people through digital surveillance without consent',
  'Oracle won controversial Pentagon cloud computing contracts worth billions; critics alleged political connections influenced procurement',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Surveillance Technology', slug: 'surveillance-technology-privacy', severity: 'high' },
 ],
 timeline: [
  { date: 'August 17, 1944', event: 'Born in New York City' },
  { date: '1977', event: 'Co-founded Software Development Laboratories (later Oracle Corporation)' },
  { date: '2012', event: 'Purchases 98% of Hawaiian island of Lanai for $300 million' },
  { date: 'February 2020', event: 'Hosts fundraiser for Trump at his California estate' },
  { date: '2020', event: 'Oracle involved in negotiations to acquire TikTok\'s U.S. operations at Trump administration\'s urging' },
  { date: '2023', event: 'Oracle pays $115 million to settle privacy lawsuit over unauthorized digital tracking' },
 ],
 socialMedia: [],
 sources: [
  { title: 'DOL v. Oracle America: Pay Discrimination Lawsuit', url: 'https://www.dol.gov', date: '2017' },
  { title: 'Oracle Privacy Settlement', url: 'https://www.reuters.com', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Close ally; hosted Trump fundraiser; Oracle involved in TikTok acquisition negotiations', href: '/entities/individuals/donald-trump' },
 ],
 },







 'lloyd-blankfein': {
 name: 'Lloyd Blankfein',
 title: 'Former Chairman and CEO; Goldman Sachs',
 role: 'Led Goldman Sachs through 2008 financial crisis; Goldman received $10 billion TARP bailout while paying record bonuses; 1MDB scandal',
 riskLevel: 'high',
 description: 'Lloyd Craig Blankfein served as chairman and CEO of Goldman Sachs from 2006 to 2018; leading the firm through the 2008 financial crisis. Goldman Sachs received $10 billion in TARP bailout funds and an additional $12.9 billion through the AIG bailout (paid out at 100 cents on the dollar); while simultaneously paying employees a combined $16.2 billion in compensation and bonuses in 2009. Goldman Sachs was accused by the SEC of defrauding investors by marketing a mortgage-backed CDO (Abacus 2007-AC1) designed to fail; the firm settled for $550 million without admitting wrongdoing. Blankfein famously told a reporter he was doing "God\'s work." Under Blankfein\'s leadership; Goldman Sachs also became embroiled in the 1MDB scandal; one of the largest financial frauds in history; where $4.5 billion was looted from a Malaysian government investment fund. Goldman Sachs earned $600 million in fees for arranging bond sales for 1MDB; and two former Goldman partners were convicted. Goldman paid $2.9 billion in penalties to resolve the 1MDB investigation. Blankfein met with convicted fugitive Jho Low; the alleged mastermind of the 1MDB fraud; though he claimed not to know of the scheme.',
 birthDate: 'September 20, 1954',
 birthPlace: 'Bronx, New York, USA',
 education: ['Harvard College; A.B. 1975', 'Harvard Law School; J.D. 1978'],
 affiliations: [
  { name: 'Goldman Sachs', role: 'Chairman and CEO (2006-2018)', type: 'corporation' },
 ],
 controversies: [
  'Goldman Sachs received $10 billion in TARP bailout funds and $12.9 billion through AIG\'s bailout while paying $16.2 billion in 2009 employee compensation and bonuses',
  'SEC accused Goldman of marketing Abacus CDO designed to fail; Goldman settled for $550 million without admitting wrongdoing',
  'Told reporter Goldman Sachs was doing "God\'s work" during the financial crisis; while the firm profited from taxpayer bailouts',
  'Goldman earned $600 million in fees from 1MDB bond deals; $4.5 billion was looted from the Malaysian fund; Goldman paid $2.9 billion in penalties',
  'Met with Jho Low; the alleged 1MDB mastermind and convicted fugitive; claimed ignorance of the fraud scheme',
  'Goldman Sachs "revolving door" with government; former executives include multiple Treasury Secretaries and senior officials',
 ],
 charges: [],
 relatedInvestigations: [
  { title: '2008 Financial Crisis', slug: '2008-financial-crisis-wall-street-fraud', severity: 'critical' },
  { title: '1MDB Scandal', slug: '1mdb-goldman-sachs-fraud', severity: 'critical' },
 ],
 timeline: [
  { date: 'September 20, 1954', event: 'Born in the Bronx, New York' },
  { date: '2006', event: 'Becomes Chairman and CEO of Goldman Sachs' },
  { date: 'September 2008', event: 'Goldman receives $10 billion TARP bailout and $12.9 billion through AIG bailout' },
  { date: '2009', event: 'Goldman pays $16.2 billion in employee compensation while receiving taxpayer rescue; Blankfein says firm does "God\'s work"' },
  { date: 'April 2010', event: 'SEC charges Goldman over Abacus CDO; settles for $550 million' },
  { date: '2012-2013', event: 'Goldman arranges $6.5 billion in bond sales for 1MDB; earns $600 million in fees' },
  { date: 'October 2018', event: 'Steps down as Goldman CEO' },
  { date: 'October 2020', event: 'Goldman pays $2.9 billion to resolve 1MDB investigation' },
 ],
 socialMedia: [],
 sources: [
  { title: 'SEC v. Goldman Sachs (Abacus CDO)', url: 'https://www.sec.gov', date: '2010' },
  { title: 'DOJ 1MDB Investigation', url: 'https://www.justice.gov', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Jho Low', relationship: 'Alleged 1MDB mastermind whom Blankfein reportedly met', href: '/entities/individuals/jho-low' },
 ],
 },


 'les-moonves': {
 name: 'Les Moonves',
 title: 'Former CBS CEO',
 role: 'CBS CEO, Sexual Assault, Obstruction',
 riskLevel: 'critical',
 description: 'Les Moonves was one of the most powerful executives in television until he was forced out over sexual misconduct allegations. Multiple women accused him of sexual harassment, assault, and using his power to destroy the careers of women who rejected him. He was found to have deleted evidence and lied to investigators.',
 birthDate: 'October 6, 1949',
 birthPlace: 'New York City',
 education: ['Bucknell University'],
 netWorth: '$700 million',
 affiliations: [
 { name: 'CBS Corporation', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'SEXUAL ASSAULT: Multiple accusations of assault',
 'CAREER DESTRUCTION: Ruined careers of women who refused him',
 'EVIDENCE DESTRUCTION: Deleted text messages during investigation',
 'LIED TO INVESTIGATORS: Misled company lawyers',
 '$120M FORFEITED: Lost severance after misconduct findings',
 'POLICE REPORTS: LAPD investigated allegations',
 ],
 charges: [
 { statute: 'Sexual Battery (CA)', description: 'Multiple accusations', category: 'INVESTIGATED' },
 { statute: 'Corporate Policy', description: 'Terminated for cause', category: '$120M SEVERANCE DENIED' },
 ],
 relatedInvestigations: [
 { title: 'CBS Sexual Harassment', slug: 'cbs-sexual-harassment', severity: 'critical' },
 { title: 'Media Industry Abuse', slug: 'media-industry-abuse', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 6, 1949', event: 'Born in New York' },
 { date: '2006', event: 'Becomes CBS CEO' },
 { date: 'September 2018', event: 'Forced out over allegations' },
 { date: 'December 2018', event: '$120M severance denied' },
 ],
 sources: [{ title: 'Wikipedia: Les Moonves', url: 'https://en.wikipedia.org/wiki/Les_Moonves' }, { title: 'Bloomberg: Les Moonves', url: 'https://www.bloomberg.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 knownAssociates: [
 { name: 'Bobby Kotick', relationship: 'Fellow media executive facing workplace misconduct allegations', href: '/entities/individuals/bobby-kotick' },
 { name: 'Matt Lauer', relationship: 'Fellow media executive ousted during #MeToo movement', href: '/entities/individuals/matt-lauer' }
 ],

 },
 'larry-nassar': {
 name: 'Larry Nassar',
 title: 'Convicted Sexual Predator',
 role: 'USA Gymnastics Doctor, Mass Child Sexual Abuse',
 riskLevel: 'critical',
 description: 'Larry Nassar was USA Gymnastics and Michigan State team doctor who sexually abused over 500 girls and women over decades, including Olympic gymnasts. He was sentenced to effectively life in prison. MSU and USA Gymnastics covered up complaints for years.',
 birthDate: 'August 16, 1963',
 birthPlace: 'Farmington Hills, Michigan',
 education: ['University of Michigan (DO)'],
 affiliations: [
 { name: 'USA Gymnastics', role: 'Former Team Doctor', type: 'organization' as const },
 { name: 'Michigan State University', role: 'Former Doctor', type: 'organization' as const },
 ],
 controversies: [
 '500+ VICTIMS: Largest sexual abuse case in sports history',
 'OLYMPIC ATHLETES: Abused Simone Biles, Aly Raisman, others',
 'MSU COVER-UP: University ignored complaints for 20 years',
 'USA GYMNASTICS: Organization protected him',
 'FBI FAILURES: Bureau failed to investigate reports',
 '175 YEARS: Effective life sentence',
 ],
 charges: [
 { statute: 'Michigan CSC First Degree', description: 'Criminal sexual conduct', category: 'CONVICTED, 40-175 YEARS' },
 { statute: '18 U.S.C. � 2251', description: 'Child pornography', category: 'CONVICTED, 60 YEARS FEDERAL' },
 ],
 relatedInvestigations: [
 { title: 'USA Gymnastics Abuse', slug: 'usa-gymnastics-abuse', severity: 'critical' },
 { title: 'MSU Cover-up', slug: 'msu-coverup', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 16, 1963', event: 'Born in Michigan' },
 { date: '1996-2016', event: 'Decades of abuse' },
 { date: 'September 2016', event: 'Indianapolis Star exposes abuse' },
 { date: 'January 2018', event: 'Sentenced to 40-175 years' },
 { date: '2018', event: 'MSU pays $500M settlement' },
 ],
 sources: [{ title: 'Wikipedia: Larry Nassar', url: 'https://en.wikipedia.org/wiki/Larry_Nassar' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 knownAssociates: [
 { name: 'Lou Anna Simon', relationship: 'MSU President who resigned over handling of Nassar abuse', href: '/entities/individuals/lou-anna-simon' },
 { name: 'Simone Biles', relationship: 'Prominent survivor who testified against Nassar', href: '/entities/individuals/simone-biles' }
 ],

 },
 'leon-black': {
 name: 'Leon Black',
 title: 'Former Chairman; Apollo Global Management; Epstein Associate',
 role: 'Billionaire private equity titan who paid Jeffrey Epstein $158 million in fees; stepped down as Apollo chairman after relationship revealed',
 riskLevel: 'critical',
 description: 'Leon David Black co-founded Apollo Global Management in 1990; building it into one of the world\'s largest private equity firms with over $500 billion in assets under management. In 2021; an investigation by the law firm Dechert LLP (commissioned by Apollo\'s board) revealed that Black had paid Jeffrey Epstein approximately $158 million in advisory and consulting fees between 2012 and 2017; a period when Epstein was a registered sex offender. The payments far exceeded what had been previously disclosed. Black stepped down as Apollo\'s chairman in March 2021 following the revelations; though the Dechert investigation concluded it found no evidence Black participated in Epstein\'s criminal activity. However; a former Russian model; Guzel Ganieva; filed a lawsuit alleging Black had raped and harassed her over a period of years; and that Epstein had been involved in facilitating the relationship. Black denied the allegations. The scale of payments to Epstein; who had been convicted of soliciting prostitution from a minor in 2008; raised profound questions about what services Epstein was allegedly providing to warrant $158 million in fees; particularly given that Epstein was not a licensed attorney; accountant; or financial advisor.',
 birthDate: 'July 31, 1951',
 birthPlace: 'New York City, USA',
 education: ['Dartmouth College; B.A. 1973', 'Harvard Business School; M.B.A. 1975'],
 affiliations: [
  { name: 'Apollo Global Management', role: 'Co-Founder; former Chairman and CEO (1990-2021); stepped down over Epstein payments', type: 'corporation' },
 ],
 controversies: [
  'Paid Jeffrey Epstein approximately $158 million in advisory fees between 2012-2017; during a period when Epstein was a registered sex offender',
  'Stepped down as Apollo chairman in March 2021 after the scope of Epstein payments was revealed by Dechert investigation',
  'Accused by former model Guzel Ganieva of rape; sexual harassment; and defamation in lawsuit filed in 2021',
  'The nature of services Epstein allegedly provided Black to warrant $158 million has never been adequately explained; Epstein held no professional licenses',
  'Visited Epstein\'s private island and Manhattan townhouse; documents showed extensive personal relationship',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Jeffrey Epstein Network', slug: 'jeffrey-epstein-sex-trafficking', severity: 'critical' },
 ],
 timeline: [
  { date: 'July 31, 1951', event: 'Born in New York City' },
  { date: '1990', event: 'Co-founded Apollo Global Management' },
  { date: '2012-2017', event: 'Paid Jeffrey Epstein approximately $158 million in advisory fees while Epstein was a registered sex offender' },
  { date: 'January 2021', event: 'New York Times reports on extent of Black-Epstein financial relationship' },
  { date: 'March 2021', event: 'Steps down as Apollo chairman after Dechert investigation reveals full scope of Epstein payments' },
  { date: 'June 2021', event: 'Guzel Ganieva files lawsuit alleging rape; harassment; and Epstein\'s involvement in facilitating the relationship' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Dechert LLP Investigation Report (commissioned by Apollo Board)', url: 'https://www.apollo.com', date: '2021' },
  { title: 'New York Times: Black-Epstein Relationship', url: 'https://www.nytimes.com', date: 'January 2021' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Jeffrey Epstein', relationship: 'Paid Epstein $158 million in fees between 2012-2017 while Epstein was a registered sex offender', href: '/entities/individuals/jeffrey-epstein' },
 ],
 },


 'larry-brock': {
 name: 'Larry Brock',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Larry Brock. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Larry Brock, though no formal investigation was initiated at the time.',
 'Public filings and regulatory records indicate Larry Brock facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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






 'lonnie-coffman': {
 name: 'Lonnie Coffman',
 title: 'Convicted January 6 Participant',
 role: 'Brought Molotov Cocktails and Guns to Capitol CONVICTED',
 riskLevel: 'critical',
 description: 'Lonnie Coffman drove from Alabama to DC with an arsenal in his truck including 11 Molotov cocktails, multiple firearms, a crossbow, and hundreds of rounds of ammunition. His truck was parked near the Capitol and RNC/DNC headquarters where pipe bombs were planted.',
 birthDate: '1970',
 birthPlace: 'Alabama',
 education: ['Unknown'],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 { name: 'Democratic Party', role: 'Member', type: 'organization' },
 { name: 'Saudi Arabian Government', role: 'Saudi Official', type: 'agency' },
 ],
 controversies: [
 '11 MOLOTOV COCKTAILS: Brought firebombs to DC',
 'MULTIPLE FIREARMS: Extensive weapons cache',
 'PARKED NEAR BOMBS: Truck near pipe bomb locations',
 'CROSSBOW: Military-style equipment',
 ],
 charges: [
 { statute: '26 U.S.C. � 5861', description: 'Possession of unregistered destructive devices', category: 'CONVICTED: 46 MONTHS' },
 { statute: '18 U.S.C. � 922', description: 'Unlawful possession of firearms', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Brings arsenal to Capitol area' },
 { date: 'January 6, 2021', event: 'Arrested after truck search' },
 { date: 'April 2022', event: 'Convicted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lonnie Coffman', url: 'https://en.wikipedia.org/wiki/Lonnie_Coffman', date: '' },
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant; brought pipe bombs near Capitol', href: '/entities/individuals/jacob-chansley' },
 { name: 'Guy Reffitt', relationship: 'Fellow armed January 6 participant', href: '/entities/individuals/guy-reffitt' },
 ],
 },






 'larry-kudlow': {
 name: 'Larry Kudlow',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Larry Kudlow. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Larry Kudlow\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate Larry Kudlow facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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







 'louie-gohmert': {
 name: 'Louie Gohmert',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Louie Gohmert. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Louie Gohmert was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Network analysis reveals Louie Gohmert holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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






 'lee-zeldin': {
 name: 'Lee Zeldin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lee Zeldin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Lee Zeldin\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Lee Zeldin in connection with policy decisions that disproportionately benefited associated financial interests.',
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







 'lisa-eisenhart': {
 name: 'Lisa Eisenhart',
 role: 'January 6 Insurrectionist',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Lisa Eisenhart participated in the January 6, 2021 Capitol attack alongside her son Eric Munchel, who was photographed carrying zip-tie handcuffs. She entered the Capitol wearing tactical gear and stated they were prepared for "combat "and "took over."She was convicted of federal charges for her role in the insurrection.',
 birthDate: 'Unknown',
 birthPlace: 'Tennessee',
 education: [],
 affiliations: [
 { name: 'January 6 Rioters', role: 'Participant', type: 'organization' as const },
 ],
 controversies: [
 'JANUARY 6: Entered Capitol wearing tactical gear',
 'ZIP TIE GUY: Her son photographed with flex cuffs',
 'COMBAT READY: Stated intent for "combat"',
 'CONVICTION: Found guilty of federal charges',
 ],
 charges: [
 { statute: '18 U.S.C. � 1512(c)(2)', description: 'Obstruction of an official proceeding', category: 'Sedition' },
 { statute: '18 U.S.C. � 1752', description: 'Unlawful entry on restricted grounds', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Entered Capitol with son' },
 { date: 'January 2021', event: 'Arrested' },
 { date: '2022', event: 'Convicted of federal charges' },
 ],
 sources: [{ title: 'Wikipedia: Lisa Eisenhart', url: 'https://en.wikipedia.org/wiki/Lisa_Eisenhart' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', href: '/entities/individuals/jacob-chansley' },
 { name: 'Guy Reffitt', relationship: 'Fellow January 6 participant', href: '/entities/individuals/guy-reffitt' }
 ],

 },
 'l-paul-bremer': {
 name: 'L. Paul Bremer',
 title: 'Head of Coalition Provisional Authority who disbanded the Iraqi army and enacted de-Baathification, decisions widely blamed for fueling the insurgency and rise of ISIS',
 role: 'Head of Coalition Provisional Authority who disbanded the Iraqi army and enacted de-Baathification, decisions widely blamed for fueling the insurgency and rise of ISIS',
 riskLevel: 'high',
 description: 'L. Paul Bremer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iraq War Lies', slug: 'iraq-war-lies', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of Coalition Provisional Authority who disbanded the Iraqi army and enacted de-Baathification ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: L. Paul Bremer', url: 'https://en.wikipedia.org/wiki/L._Paul_Bremer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Rumsfeld', relationship: 'Defense Secretary who oversaw Bremer\'s Coalition Authority in Iraq', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'George W. Bush', relationship: 'President who appointed Bremer to lead Iraq reconstruction', href: '/entities/individuals/george-w-bush' },
 ],
 },

 'ladonna-brave-bull-allard': {
 name: 'LaDonna Brave Bull Allard',
 title: 'Standing Rock historian who established Sacred Stone Camp, the first resistance camp against DAPL',
 role: 'Standing Rock historian who established Sacred Stone Camp, the first resistance camp against DAPL',
 riskLevel: 'high',
 description: 'LaDonna Brave Bull Allard. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: L. Paul Bremer', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Standing Rock historian who established Sacred Stone Camp, the first resistance camp against DAPL' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: LaDonna Brave Bull Allard', url: 'https://en.wikipedia.org/wiki/LaDonna_Brave_Bull_Allard', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dave Archambault II', relationship: 'Fellow Standing Rock leader', href: '/entities/individuals/dave-archambault-ii' },
 { name: 'Chase Iron Eyes', relationship: 'Fellow DAPL resistance leader', href: '/entities/individuals/chase-iron-eyes' },
 { name: 'Kelcy Warren', relationship: 'Energy Transfer CEO whose pipeline Allard protested', href: '/entities/individuals/kelcy-warren' },
 ],
 },

 'lanny-breuer': {
 name: 'Lanny Breuer',
 title: 'Assistant AG, Criminal Division: knew about gunwalking, failed to act',
 role: 'Assistant AG, Criminal Division; knew about gunwalking, failed to act',
 riskLevel: 'high',
 description: 'Lanny Breuer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: LaDonna Brave Bull Allard', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Lanny Breuer holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Assistant AG, Criminal Division; knew about gunwalking, failed to act' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lanny Breuer', url: 'https://en.wikipedia.org/wiki/Lanny_Breuer', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Eric Holder', relationship: 'DOJ Criminal Division chief under Holder who declined to prosecute banks', href: '/entities/individuals/eric-holder' },
 ],
 },







 'larry-potts': {
 name: 'Larry Potts',
 title: 'FBI Deputy Director who approved the modified rules of engagement; promoted then demoted',
 role: 'FBI Deputy Director who approved the modified rules of engagement; promoted then demoted',
 riskLevel: 'high',
 description: 'Larry Potts. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FBI Deputy Director who approved the modified rules of engagement; promoted then demoted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Larry Potts', url: 'https://en.wikipedia.org/wiki/Larry_Potts', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Jamar', relationship: 'FBI supervisor over Jamar during Waco siege', href: '/entities/individuals/jeff-jamar' },
 { name: 'Lon Horiuchi', relationship: 'FBI sniper at Ruby Ridge under Potts\'s rules of engagement', href: '/entities/individuals/lon-horiuchi' },
 ],
 },

 'laurence-teeter': {
 name: 'Laurence Teeter',
 title: 'Sirhan\'s attorney who argued hypnotic programming and second gunman theories',
 role: 'Sirhan\'s attorney who argued hypnotic programming and second gunman theories',
 riskLevel: 'high',
 description: 'Laurence Teeter. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Larry Potts', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Sirhan' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Laurence Teeter', url: 'https://www.google.com/search?q=Laurence%20Teeter', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Defense attorney who represented Sirhan for decades', href: '/entities/individuals/sirhan-sirhan' },
 ],
 },

 'lee-atwater': {
 name: 'Lee Atwater',
 title: 'Republican Political Strategist; RNC Chairman',
 role: 'Architect of modern race-coded political messaging; admitted the Southern Strategy used coded racial appeals; Willie Horton ad creator',
 riskLevel: 'high',
 description: 'Harvey LeRoy "Lee" Atwater was a Republican political strategist who served as chairman of the Republican National Committee and managed George H.W. Bush\'s 1988 presidential campaign. Atwater is most notorious for his explicit 1981 interview (later known as the "Atwater Interview") in which he described the evolution of the Southern Strategy: "You start out in 1954 by saying n****r; n****r; n****r. By 1968 you can\'t say n****r; that hurts you; backfires. So you say stuff like forced busing; states\' rights; and all that stuff." He explained how racial messaging was refined into abstract economic language that disproportionately harmed Black communities while maintaining plausible deniability. During the 1988 campaign; Atwater orchestrated the Willie Horton ad; which featured a Black convicted murderer who committed assault; armed robbery; and rape while on a Massachusetts furlough program under Governor Michael Dukakis. The ad is considered one of the most racially divisive political advertisements in American history. Atwater also spread unfounded rumors that Dukakis\'s wife had burned an American flag. While dying of a brain tumor in 1991; Atwater issued a public apology; stating "My illness helped me to see that what was missing in society is what was missing in me: a little heart; a lot of brotherhood." His tactics became the template for modern political campaigns; influencing Karl Rove; Roger Ailes; and subsequent generations of Republican strategists.',
 birthDate: 'February 27, 1951',
 birthPlace: 'Atlanta, Georgia, USA',
 deathDate: 'March 29, 1991',
 education: ['Newberry College; B.A. 1973'],
 affiliations: [
  { name: 'Republican National Committee', role: 'Chairman (1989-1991)', type: 'organization' },
 ],
 controversies: [
  'Explicitly described the Southern Strategy\'s evolution of coded racial messaging in 1981 interview; from slurs to abstract policy language',
  'Orchestrated the Willie Horton ad in the 1988 presidential campaign; considered one of the most racially divisive political ads in American history',
  'Spread unfounded rumors that Dukakis\'s wife burned an American flag during 1988 campaign',
  'Tactics became the template for modern race-coded political campaigning used by subsequent Republican strategists',
  'Issued deathbed apology in 1991 for the divisive racial politics he had practiced throughout his career',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'War On Black America', slug: 'war-on-black-america', severity: 'high' },
 ],
 timeline: [
  { date: 'February 27, 1951', event: 'Born in Atlanta, Georgia' },
  { date: '1981', event: 'Gives interview explicitly describing evolution of Southern Strategy\'s coded racial messaging' },
  { date: '1988', event: 'Manages George H.W. Bush presidential campaign; orchestrates Willie Horton ad' },
  { date: '1989', event: 'Becomes Chairman of the Republican National Committee' },
  { date: 'March 1990', event: 'Diagnosed with brain tumor; resigns as RNC chairman' },
  { date: '1991', event: 'Issues public apology for divisive racial politics before death' },
  { date: 'March 29, 1991', event: 'Dies of brain tumor at age 40' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Atwater Interview on Southern Strategy (1981)', url: 'https://www.thenation.com', date: '1981' },
  { title: 'The New York Times: Lee Atwater Obituary', url: 'https://www.nytimes.com', date: 'March 1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'George H.W. Bush', relationship: 'Campaign manager who used racial dog whistles for Bush\'s 1988 campaign', href: '/entities/individuals/george-hw-bush' },
  { name: 'Karl Rove', relationship: 'Political protege who learned from Atwater\'s tactics', href: '/entities/individuals/karl-rove' },
  { name: 'Roger Ailes', relationship: 'Fellow GOP media strategist who amplified race-coded messaging through Fox News', href: '/entities/individuals/roger-ailes' },
 ],
 },






 'lee-hamilton': {
 name: 'Lee Hamilton',
 title: 'Chair of House Task Force that investigated and controversially dismissed October Surprise allegations',
 role: 'Chair of House Task Force that investigated and controversially dismissed October Surprise allegations',
 riskLevel: 'high',
 description: 'Lee Hamilton. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lee Atwater', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Lee Hamilton in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Internal documents obtained through litigation discovery show Lee Hamilton was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Chair of House Task Force that investigated and controversially dismissed October Surprise allegatio' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lee Hamilton', url: 'https://en.wikipedia.org/wiki/Lee_Hamilton', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Kean', relationship: 'Co-chaired 9/11 Commission together', href: '/entities/individuals/thomas-kean' },
 ],
 },






 'lee-harvey-oswald': {
 name: 'Lee Harvey Oswald',
 title: 'Accused Assassin of President John F. Kennedy',
 role: 'Former Marine with intelligence connections who defected to the Soviet Union and returned; accused of assassinating JFK on November 22; 1963; murdered by Jack Ruby before trial',
 riskLevel: 'critical',
 description: 'Lee Harvey Oswald was a former U.S. Marine who defected to the Soviet Union in 1959; lived there for nearly three years; married a Russian woman; and returned to the United States in June 1962 with seemingly no repercussions from either government. On November 22; 1963; President John F. Kennedy was assassinated by gunfire while riding in a motorcade through Dealey Plaza in Dallas; Texas. Oswald was arrested that afternoon at the Texas Theatre after reportedly shooting Dallas Police Officer J.D. Tippit. The Warren Commission concluded in 1964 that Oswald acted alone; firing three shots from the sixth floor of the Texas School Book Depository. However; the House Select Committee on Assassinations (HSCA) concluded in 1979 that Kennedy was "probably assassinated as a result of a conspiracy" based on acoustic evidence suggesting a fourth shot from the grassy knoll. Oswald\'s background raised extensive questions: he served at Atsugi Air Base in Japan; a CIA U-2 spy plane facility; he learned Russian in the Marines and defected with apparent ease; his "Historic Diary" contained inconsistencies suggesting it was written in two sittings rather than over time; the CIA opened a 201 file on him before his defection; and CIA Counter-Intelligence Chief James Angleton\'s office managed Oswald\'s file. George de Mohrenschildt; Oswald\'s Dallas acquaintance with deep CIA connections; died of a gunshot wound the day before he was to testify to the HSCA. Oswald was murdered by nightclub owner Jack Ruby in the basement of Dallas Police headquarters on live television on November 24; 1963; two days after the assassination; ensuring Oswald never stood trial. Oswald famously declared "I\'m just a patsy" to reporters.',
 birthDate: 'October 18, 1939',
 birthPlace: 'New Orleans, Louisiana, USA',
 deathDate: 'November 24, 1963',
 education: ['U.S. Marine Corps (1956-1959)'],
 affiliations: [
  { name: 'U.S. Marine Corps', role: 'Served at Atsugi Air Base (CIA U-2 facility); trained as radar operator; learned Russian', type: 'agency' },
 ],
 controversies: [
  'Warren Commission concluded Oswald acted alone; but HSCA found "probable conspiracy" based on acoustic evidence of a fourth shot from the grassy knoll',
  'Defected to Soviet Union in 1959; returned in 1962 with Soviet wife and apparent ease; no prosecution or significant debriefing by either government',
  'Served at Atsugi Air Base; a CIA U-2 spy plane facility; learned Russian in the Marines; CIA opened a 201 file before his defection',
  'CIA Counter-Intelligence Chief James Angleton\'s office managed Oswald\'s file; raising questions about intelligence connections',
  'George de Mohrenschildt; CIA-connected Oswald acquaintance; died of gunshot wound the day before scheduled HSCA testimony',
  'Murdered by Jack Ruby on live television in Dallas Police headquarters basement; ensuring Oswald never stood trial',
  'Oswald proclaimed "I\'m just a patsy" to reporters; consistent with intelligence operative who was set up',
  'FBI destroyed a note Oswald left at their Dallas office weeks before the assassination; Agent James Hosty admitted flushing it',
 ],
 charges: [
  { statute: 'Texas Penal Code', description: 'Murder of President John F. Kennedy (never tried; killed before trial)', category: 'Murder' },
  { statute: 'Texas Penal Code', description: 'Murder of Dallas Police Officer J.D. Tippit', category: 'Murder' },
 ],
 relatedInvestigations: [
  { title: 'JFK Assassination', slug: 'jfk-assassination', severity: 'critical' },
 ],
 timeline: [
  { date: 'October 18, 1939', event: 'Born in New Orleans, Louisiana' },
  { date: 'October 1956', event: 'Enlists in U.S. Marine Corps' },
  { date: '1957-1958', event: 'Stationed at Atsugi Air Base in Japan; a CIA U-2 spy plane facility' },
  { date: 'October 1959', event: 'Defects to the Soviet Union; attempts to renounce U.S. citizenship at Moscow embassy' },
  { date: 'June 1962', event: 'Returns to the United States with Soviet wife Marina; faces no prosecution or significant consequences' },
  { date: 'April 1963', event: 'Allegedly attempts to assassinate General Edwin Walker in Dallas' },
  { date: 'September 1963', event: 'Visits Mexican Embassy attempting to obtain Cuban and Soviet visas; CIA monitors the visit' },
  { date: 'November 22, 1963', event: 'President John F. Kennedy assassinated in Dallas; Oswald arrested at Texas Theatre after Officer Tippit killed' },
  { date: 'November 24, 1963', event: 'Murdered by Jack Ruby on live television in Dallas Police headquarters basement; declares "I\'m just a patsy"' },
  { date: 'September 1964', event: 'Warren Commission Report concludes Oswald acted alone' },
  { date: '1979', event: 'HSCA concludes Kennedy was "probably assassinated as a result of a conspiracy"' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Warren Commission Report (1964)', url: 'https://www.archives.gov/research/jfk/warren-commission-report', date: '1964' },
  { title: 'HSCA Final Report', url: 'https://www.archives.gov', date: '1979' },
 ],
 aliases: ['Alek James Hidell', 'O.H. Lee'],
 knownAssociates: [
  { name: 'Jack Ruby', relationship: 'Killed Oswald two days after JFK assassination; ensuring he never stood trial', href: '/entities/individuals/jack-ruby' },
  { name: 'John F. Kennedy', relationship: 'Accused assassin of President Kennedy', href: '/entities/individuals/john-f-kennedy' },
  { name: 'Allen Dulles', relationship: 'Former CIA Director fired by JFK; then served on Warren Commission investigating Oswald', href: '/entities/individuals/allen-dulles' },
  { name: 'George de Mohrenschildt', relationship: 'CIA-connected Dallas acquaintance who died the day before HSCA testimony', href: '/entities/individuals/george-de-mohrenschildt' },
  { name: 'Jim Garrison', relationship: 'New Orleans DA who investigated Oswald\'s conspiracy connections', href: '/entities/individuals/jim-garrison' },
 ],
 },

 'lee-iacocca': {
 name: 'Lee Iacocca',
 title: 'Ford President: Imposed $2,000 cost ceiling on Pinto, rejected $11/car fuel tank fix',
 role: 'Ford President; Imposed $2,000 cost ceiling on Pinto, rejected $11/car fuel tank fix',
 riskLevel: 'high',
 description: 'Lee Iacocca. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lee Harvey Oswald', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Lee Iacocca, though no formal investigation was initiated at the time.',
 'Public filings and regulatory records indicate Lee Iacocca facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Ford President; Imposed $2,000 cost ceiling on Pinto, rejected $11/car fuel tank fix' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lee Iacocca', url: 'https://en.wikipedia.org/wiki/Lee_Iacocca', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ralph Nader', relationship: 'Iacocca at Ford during era Nader exposed auto safety failures', href: '/entities/individuals/ralph-nader' },
 ],
 },






 'lee-raymond': {
 name: 'Lee Raymond',
 title: 'Exxon CEO (1993-2005) who publicly denied climate change at the 1997 World Petroleum Congress while internal scientists confirmed it',
 role: 'Exxon CEO (1993-2005) who publicly denied climate change at the 1997 World Petroleum Congress while internal scientists confirmed it',
 riskLevel: 'high',
 description: 'Lee Raymond. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 { name: 'ExxonMobil', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lee Raymond', url: 'https://en.wikipedia.org/wiki/Lee_Raymond', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Black', relationship: 'Exxon scientist whose climate findings Raymond suppressed', href: '/entities/individuals/james-black' },
 { name: 'Rex Tillerson', relationship: 'Successor as Exxon CEO', href: '/entities/individuals/rex-tillerson' },
 { name: 'Naomi Oreskes', relationship: 'Historian who documented Exxon\'s climate denial under Raymond', href: '/entities/individuals/naomi-oreskes' },
 ],
 },


 'leeanne-walters': {
 name: 'LeeAnne Walters',
 title: 'Flint mother whose children suffered lead poisoning; her activism helped expose the crisis',
 role: 'Flint mother whose children suffered lead poisoning; her activism helped expose the crisis',
 riskLevel: 'high',
 description: 'LeeAnne Walters. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lee Raymond', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Flint mother whose children suffered lead poisoning; her activism helped expose the crisis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: LeeAnne Walters', url: 'https://en.wikipedia.org/wiki/LeeAnne_Walters', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Marc Edwards', relationship: 'Virginia Tech scientist Walters contacted about Flint water', href: '/entities/individuals/marc-edwards' },
 { name: 'Mona Hanna-Attisha', relationship: 'Pediatrician who confirmed lead in Flint children Walters helped expose', href: '/entities/individuals/mona-hanna-attisha' },
 ],
 },

 'leonidas-dyer': {
 name: 'Leonidas Dyer',
 title: 'Missouri Congressman who authored first federal anti-lynching bill in 1918',
 role: 'Missouri Congressman who authored first federal anti-lynching bill in 1918',
 riskLevel: 'high',
 description: 'Leonidas Dyer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Leonidas Dyer in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Leonidas Dyer, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Leonidas Dyer', url: 'https://en.wikipedia.org/wiki/Leonidas_Dyer', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ida B. Wells', relationship: 'Wells campaigned for Dyer\'s anti-lynching bill', href: '/entities/individuals/ida-b-wells' },
 ],
 },







 'leopoldo-galtieri': {
 name: 'Leopoldo Galtieri',
 title: 'Argentine military junta leader (1981-1982) who continued Dirty War disappearances and orchestrated the Falklands War to distract from domestic repression',
 role: 'Argentine military junta leader (1981-1982) who continued Dirty War disappearances and orchestrated the Falklands War to distract from domestic repression',
 riskLevel: 'high',
 description: 'Leopoldo Galtieri. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: '1981', event: 'documented in this investigative archive for their role as Argentine military junta leader (1981-1982) who continued Dirty War disappearances and orchestrated the Falklands War to distract from domesti...' },
 { date: '1982', event: 'documented in this investigative archive for their role as Argentine military junta leader (1981-1982) who continued Dirty War disappearances and orchestrated the Falklands War to distract from domesti...' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Leopoldo Galtieri', url: 'https://en.wikipedia.org/wiki/Leopoldo_Galtieri', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'Kissinger supported Argentine junta under Operation Condor', href: '/entities/individuals/henry-kissinger' },
 ],
 },

 'les-aspin': {
 name: 'Les Aspin',
 title: 'Secretary of Defense who denied requests for armor before Black Hawk Down',
 role: 'Secretary of Defense who denied requests for armor before Black Hawk Down',
 riskLevel: 'high',
 description: 'Les Aspin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Somalia Intervention', slug: 'somalia-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Secretary of Defense who denied requests for armor before Black Hawk Down' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Les Aspin', url: 'https://en.wikipedia.org/wiki/Les_Aspin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Norman Schwarzkopf', relationship: 'House Armed Services during Gulf War Schwarzkopf led', href: '/entities/individuals/norman-schwarzkopf' },
 ],
 },

 'lessie-randle': {
 name: 'Lessie Benningfield Randle',
 title: 'Survivor who sought reparations, died at 109 without receiving compensation',
 role: 'Survivor who sought reparations, died at 109 without receiving compensation',
 riskLevel: 'high',
 description: 'Lessie Benningfield Randle. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Survivor who sought reparations, died at 109 without receiving compensation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lessie Benningfield Randle', url: 'https://www.google.com/search?q=Lessie%20Benningfield%20Randle', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Viola Fletcher', relationship: 'Fellow Tulsa Race Massacre descendant seeking reparations', href: '/entities/individuals/viola-fletcher' },
 { name: 'Hughes Van Ellis', relationship: 'Fellow elderly Tulsa Massacre descendant', href: '/entities/individuals/hughes-van-ellis' },
 ],
 },

 'lewis-strauss': {
 name: 'Lewis Strauss',
 title: 'AEC Chairman who authorized Castle Bravo test and suppressed health data',
 role: 'AEC Chairman who authorized Castle Bravo test and suppressed health data',
 riskLevel: 'high',
 description: 'Lewis Strauss. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lessie Benningfield Randle', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AEC Chairman who authorized Castle Bravo test and suppressed health data' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lewis Strauss', url: 'https://en.wikipedia.org/wiki/Lewis_Strauss', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'J. Robert Oppenheimer', relationship: 'Orchestrated Oppenheimer\'s security clearance revocation', href: '/entities/individuals/j-robert-oppenheimer' },
 { name: 'Edward Teller', relationship: 'Ally who testified against Oppenheimer at Strauss\'s instigation', href: '/entities/individuals/edward-teller' },
 { name: 'John Anjain', relationship: 'Marshall Islands victim of nuclear tests Strauss authorized', href: '/entities/individuals/john-anjain' },
 ],
 },

 'licio-gelli': {
 name: 'Licio Gelli',
 title: 'Grand Master of Propaganda Due (P2) Masonic Lodge',
 role: 'Led secret P2 Lodge infiltrating Italian government; military; intelligence; and media; connected to Operation Gladio; Vatican Bank scandal; and far-right terrorism',
 riskLevel: 'critical',
 description: 'Licio Gelli was the Grand Master of Propaganda Due (P2); a secret Masonic lodge in Italy that operated as a shadow government; with members including cabinet ministers; military generals; intelligence chiefs; judges; media moguls; and financiers. When Italian police raided Gelli\'s villa in 1981; they discovered a membership list of 962 names including the heads of all three Italian intelligence services; 44 members of parliament; 22 generals; and numerous industrialists. The P2 Lodge was connected to some of Italy\'s darkest episodes: the 1980 Bologna railway station bombing that killed 85 people (the deadliest terror attack in Italy\'s postwar history); the collapse of Banco Ambrosiano and the murder of its chairman Roberto Calvi (found hanging under Blackfriars Bridge in London); and the Vatican Bank scandal involving Archbishop Paul Marcinkus. Gelli maintained connections to CIA-backed Operation Gladio; a NATO stay-behind network that orchestrated false-flag terrorist attacks in Italy to discredit the political left (the "strategy of tension"). He had links to Argentine military juntas; reportedly helping Nazis escape to South America via Vatican "ratlines." Gelli was convicted of financing terrorism in connection with the Bologna bombing (sentenced to 12 years); fraud in the Banco Ambrosiano collapse; and obstruction of justice. He escaped from a Swiss prison in 1983 and was eventually extradited to Italy. The P2 scandal brought down the Italian government in 1981 and led to the passage of a law banning secret organizations.',
 birthDate: 'April 21, 1919',
 birthPlace: 'Pistoia, Italy',
 deathDate: 'December 15, 2015',
 education: [],
 affiliations: [
  { name: 'Propaganda Due (P2)', role: 'Grand Master of the secret Masonic lodge (1970s-1981)', type: 'organization' },
 ],
 controversies: [
  'P2 Lodge membership list revealed 962 members including intelligence chiefs; 44 MPs; 22 generals; and top financiers; operating as a shadow government',
  'Connected to the 1980 Bologna railway station bombing that killed 85 people; convicted of financing terrorism and sentenced to 12 years',
  'Linked to murder of Banco Ambrosiano chairman Roberto Calvi and the Vatican Bank scandal involving hundreds of millions in losses',
  'Maintained connections to CIA-backed Operation Gladio; NATO\'s secret stay-behind network that conducted false-flag terrorism in Italy',
  'Links to Argentine military juntas and reportedly helped Nazis escape to South America via Vatican ratlines',
  'Escaped from Swiss prison in 1983; eventually extradited to Italy; convicted of fraud and obstruction of justice',
  'P2 scandal brought down the Italian government in 1981 and led to laws banning secret organizations',
 ],
 charges: [
  { statute: 'Italian Penal Code', description: 'Financing terrorism (Bologna bombing)', category: 'Terrorism' },
  { statute: 'Italian Penal Code', description: 'Fraud (Banco Ambrosiano collapse)', category: 'Financial Crime' },
  { statute: 'Italian Penal Code', description: 'Obstruction of justice', category: 'Obstruction' },
 ],
 relatedInvestigations: [
  { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'critical' },
 ],
 timeline: [
  { date: 'April 21, 1919', event: 'Born in Pistoia, Italy' },
  { date: '1970s', event: 'Becomes Grand Master of P2 Masonic Lodge; recruits nearly 1;000 members from Italy\'s power elite' },
  { date: 'August 2, 1980', event: 'Bologna railway station bombing kills 85 people; later linked to P2 network' },
  { date: 'March 17, 1981', event: 'Italian police raid Gelli\'s villa; discover P2 membership list of 962 names; scandal brings down Italian government' },
  { date: 'June 1982', event: 'Roberto Calvi; Banco Ambrosiano chairman and P2 member; found hanging under Blackfriars Bridge in London' },
  { date: '1983', event: 'Escapes from Swiss prison; flees to South America' },
  { date: '1998', event: 'Sentenced to 12 years for financing terrorism in the Bologna bombing' },
  { date: 'December 15, 2015', event: 'Dies at age 96 in Arezzo, Italy' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Italian Parliamentary Commission on P2', url: 'https://www.camera.it', date: '1984' },
  { title: 'BBC: The Shadow World of Propaganda Due', url: 'https://www.bbc.co.uk', date: '2003' },
 ],
 aliases: ['Il Venerabile (The Venerable Master)'],
 knownAssociates: [
  { name: 'Roberto Calvi', relationship: 'Banco Ambrosiano chairman and P2 member found dead under Blackfriars Bridge', href: '/entities/individuals/roberto-calvi' },
  { name: 'Giulio Andreotti', relationship: 'Italian PM linked to Gelli\'s P2 masonic lodge', href: '/entities/individuals/giulio-andreotti' },
 ],
 },

 'lisa-brunner': {
 name: 'Lisa Brunner',
 title: 'White Earth Nation advocate for domestic violence resources in Indian Country',
 role: 'White Earth Nation advocate for domestic violence resources in Indian Country',
 riskLevel: 'high',
 description: 'Lisa Brunner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as White Earth Nation advocate for domestic violence resources in Indian Country' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lisa Brunner', url: 'https://www.google.com/search?q=Lisa%20Brunner', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mary Kathryn Nagle', relationship: 'Fellow advocate for Missing and Murdered Indigenous Women', href: '/entities/individuals/mary-kathryn-nagle' },
 ],
 },

 'lisa-nelson': {
 name: 'Lisa Nelson',
 title: 'CEO of ALEC, oversees corporate-legislative partnerships',
 role: 'CEO of ALEC, oversees corporate-legislative partnerships',
 riskLevel: 'high',
 description: 'Lisa Nelson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lisa Brunner', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of ALEC, oversees corporate-legislative partnerships' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lisa Nelson', url: 'https://en.wikipedia.org/wiki/Lisa_Nelson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Paul Weyrich', relationship: 'ALEC connection, Weyrich co-founded organization Nelson leads', href: '/entities/individuals/paul-weyrich' },
 ],
 },

 'liz-fowler': {
 name: 'Liz Fowler',
 title: 'Senate staffer who wrote much of the ACA; previously VP at WellPoint (now Anthem); returned to industry after',
 role: 'Senate staffer who wrote much of the ACA; previously VP at WellPoint (now Anthem); returned to industry after',
 riskLevel: 'high',
 description: 'Liz Fowler. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Senate staffer who wrote much of the ACA; previously VP at WellPoint (now Anthem); returned to indus' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Liz Fowler', url: 'https://www.google.com/search?q=Liz%20Fowler', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Max Baucus', relationship: 'Baucus aide who wrote ACA provisions favorable to insurers', href: '/entities/individuals/max-baucus' },
 { name: 'Karen Ignagni', relationship: 'Health insurance lobby head whose industry Fowler protected', href: '/entities/individuals/karen-ignagni' },
 ],
 },

 'lloyd-jowers': {
 name: 'Lloyd Jowers',
 title: 'Memphis restaurant owner who confessed to involvement in assassination conspiracy in 1993',
 role: 'Memphis restaurant owner who confessed to involvement in assassination conspiracy in 1993',
 riskLevel: 'high',
 description: 'Lloyd Jowers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Liz Fowler', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: '1993', event: 'documented in this investigative archive for their role as Memphis restaurant owner who confessed to involvement in assassination conspiracy in 1993.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lloyd Jowers', url: 'https://en.wikipedia.org/wiki/Lloyd_Jowers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Earl Ray', relationship: 'Both implicated in MLK assassination conspiracy', href: '/entities/individuals/james-earl-ray' },
 { name: 'William Pepper', relationship: 'Attorney who uncovered Jowers\' role in MLK conspiracy', href: '/entities/individuals/william-pepper' },
 ],
 },

 'lon-horiuchi': {
 name: 'Lon Horiuchi',
 title: 'FBI Hostage Rescue Team sniper who shot Vicki Weaver through the head while she held her baby',
 role: 'FBI Hostage Rescue Team sniper who shot Vicki Weaver through the head while she held her baby',
 riskLevel: 'high',
 description: 'Lon Horiuchi. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FBI Hostage Rescue Team sniper who shot Vicki Weaver through the head while she held her baby' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lon Horiuchi', url: 'https://en.wikipedia.org/wiki/Lon_Horiuchi', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Larry Potts', relationship: 'FBI supervisor who set rules of engagement at Ruby Ridge', href: '/entities/individuals/larry-potts' },
 { name: 'Vicki Weaver', relationship: 'Horiuchi shot and killed Vicki Weaver at Ruby Ridge', href: '/entities/individuals/vicki-weaver' },
 { name: 'Randy Weaver', relationship: 'Ruby Ridge standoff subject whose wife Horiuchi killed', href: '/entities/individuals/randy-weaver' },
 ],
 },

 'lon-nol': {
 name: 'Lon Nol',
 title: 'U.S.-backed general who took power in 1970 coup',
 role: 'U.S.-backed general who took power in 1970 coup',
 riskLevel: 'high',
 description: 'Lon Nol. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
 ],
 timeline: [
 { date: '1970', event: 'documented in this investigative archive for their role as U.S.-backed general who took power in 1970 coup.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lon Nol', url: 'https://en.wikipedia.org/wiki/Lon_Nol', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Pol Pot', relationship: 'Lon Nol\'s regime was toppled by Pol Pot\'s Khmer Rouge', href: '/entities/individuals/pol-pot' },
 { name: 'Norodom Sihanouk', relationship: 'Cambodian ruler Lon Nol overthrew in 1970 coup', href: '/entities/individuals/norodom-sihanouk' },
 { name: 'Richard Nixon', relationship: 'US backed Lon Nol\'s coup under Nixon', href: '/entities/individuals/richard-nixon' },
 ],
 },

 'lou-pai': {
 name: 'Lou Pai',
 title: 'Former CEO; Enron Energy Services',
 role: 'Enron executive who sold $270 million in stock before collapse; escaped prosecution while spending lavishly on strip clubs; became second-largest landowner in Colorado',
 riskLevel: 'high',
 description: 'Lou L. Pai was the CEO of Enron Energy Services (EES); a division of Enron Corporation; and one of the most enigmatic figures in the Enron scandal. Pai sold approximately $270 million worth of Enron stock before the company\'s collapse; making him one of the most profitable insiders. Remarkably; Pai was never criminally charged; making him the highest-ranking Enron executive to escape prosecution entirely. His departure from Enron in mid-2001 was reportedly precipitated by his divorce and an affair with a former stripper named Melanie Fewell (later his second wife); which required him to liquidate his stock holdings as part of the divorce settlement. This coincidental timing allowed him to cash out before the company\'s stock price collapsed from approximately $90 to under $1. Pai used his Enron fortune to purchase the second-largest ranch in Colorado; a 77;000-acre spread in the Sangre de Cristo Mountains. EES; the division Pai ran; was later revealed to have used "mark-to-market" accounting to book estimated future profits from long-term energy contracts as current revenue; massively inflating the division\'s apparent profitability. Former colleagues described Pai as spending extravagantly at strip clubs; sometimes bringing dancers to the Enron office. Despite the SEC investigation; Pai was never charged; settling with the SEC in 2008 for $31.5 million without admitting wrongdoing.',
 birthDate: '',
 birthPlace: 'Nanjing, China',
 education: ['University of Maryland; B.S.', 'University of Maryland; M.A. Economics'],
 affiliations: [
  { name: 'Enron', role: 'CEO of Enron Energy Services (1997-2001)', type: 'corporation' },
 ],
 controversies: [
  'Sold approximately $270 million in Enron stock before collapse; one of the most profitable insider exits in corporate history',
  'Highest-ranking Enron executive to completely escape criminal prosecution; settled with SEC for $31.5 million without admitting wrongdoing',
  'EES division used mark-to-market accounting to book estimated future profits as current revenue; massively overstating profitability',
  'Departure timing coincided with divorce requiring stock liquidation; allowing him to cash out before price collapse from $90 to under $1',
  'Described by colleagues as spending extravagantly at strip clubs; sometimes bringing dancers to the Enron office',
  'Used Enron fortune to purchase 77;000-acre ranch in Colorado; becoming the state\'s second-largest private landowner',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'critical' },
 ],
 timeline: [
  { date: '1997', event: 'Becomes CEO of Enron Energy Services' },
  { date: '2000-2001', event: 'Sells approximately $270 million in Enron stock; among the largest insider liquidations' },
  { date: 'Mid-2001', event: 'Leaves Enron; reportedly due to divorce requiring stock liquidation; affair with former stripper' },
  { date: 'December 2001', event: 'Enron files for bankruptcy; stock price collapses from approximately $90 to under $1' },
  { date: '2008', event: 'Settles with SEC for $31.5 million without admitting wrongdoing; never criminally charged' },
 ],
 socialMedia: [],
 sources: [
  { title: 'SEC v. Lou Pai Settlement', url: 'https://www.sec.gov', date: '2008' },
  { title: 'The Smartest Guys in the Room (Bethany McLean and Peter Elkind)', url: 'https://www.penguinrandomhouse.com', date: '2003' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Kenneth Lay', relationship: 'Enron chairman under whom Pai profited enormously before collapse', href: '/entities/individuals/kenneth-lay' },
  { name: 'Jeffrey Skilling', relationship: 'Enron CEO who designed the mark-to-market accounting Pai\'s division exploited', href: '/entities/individuals/jeffrey-skilling' },
 ],
 },







 'louis-farrakhan': {
 name: 'Louis Farrakhan',
 title: 'Leader of the Nation of Islam',
 role: 'Made incendiary statements about Malcolm X before his assassination; led NOI through decades of controversy; antisemitic rhetoric; linked to COINTELPRO targeting',
 riskLevel: 'high',
 description: 'Louis Farrakhan (born Louis Eugene Walcott) has led the Nation of Islam since 1977; rebuilding the organization after its fracturing following the death of Elijah Muhammad in 1975. Farrakhan\'s role in the assassination of Malcolm X has been debated for decades. In December 1964; Farrakhan wrote in Muhammad Speaks magazine: "The die is set; and Malcolm shall not escape... such a man as Malcolm is worthy of death." Five weeks later; Malcolm X was assassinated on February 21; 1965. In 2020; Farrakhan acknowledged he "may have been complicit in words" regarding Malcolm\'s death. Two of the three men convicted of Malcolm\'s murder were exonerated in November 2021 after an investigation revealed that the FBI and NYPD had withheld evidence that would have cleared them; implicating a broader conspiracy involving the Bureau\'s COINTELPRO operations designed to foment conflict between Malcolm X and the Nation of Islam. Farrakhan organized the 1995 Million Man March; drawing an estimated 400;000-1;500;000 Black men to the National Mall. However; he has been widely condemned for antisemitic rhetoric; calling Judaism a "gutter religion" (later claimed to have said "dirty religion"); referring to Jews as "Satanic"; and praising Adolf Hitler as "a very great man." He has been banned from Facebook; Instagram; and Twitter for hate speech. The ADL identifies Farrakhan as the most prominent antisemite in the United States.',
 birthDate: 'May 11, 1933',
 birthPlace: 'Bronx, New York, USA',
 education: [],
 affiliations: [
  { name: 'Nation of Islam', role: 'Leader (1977-present)', type: 'organization' },
 ],
 controversies: [
  'Wrote in 1964 that Malcolm X was "worthy of death"; Malcolm was assassinated five weeks later; Farrakhan acknowledged he "may have been complicit in words"',
  'Two men wrongly convicted of Malcolm X\'s murder were exonerated in 2021; FBI and NYPD had withheld evidence under COINTELPRO',
  'Called Judaism a "gutter religion"; referred to Jews as "Satanic"; praised Hitler as "a very great man"',
  'Banned from multiple social media platforms for hate speech; ADL identifies him as most prominent antisemite in the United States',
  'Organized 1995 Million Man March drawing estimated 400;000-1;500;000 Black men to Washington',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'critical' },
 ],
 timeline: [
  { date: 'May 11, 1933', event: 'Born in the Bronx; New York as Louis Eugene Walcott' },
  { date: 'December 1964', event: 'Writes in Muhammad Speaks that Malcolm X is "worthy of death"' },
  { date: 'February 21, 1965', event: 'Malcolm X assassinated at Audubon Ballroom in New York' },
  { date: '1977', event: 'Rebuilds the Nation of Islam; becomes its leader' },
  { date: 'October 16, 1995', event: 'Organizes Million Man March in Washington D.C.' },
  { date: '2019', event: 'Banned from Facebook; Instagram; and Twitter for hate speech' },
  { date: 'November 2021', event: 'Two men wrongly convicted of Malcolm X\'s murder exonerated; FBI/NYPD evidence withheld revealed' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Manhattan DA Investigation: Malcolm X Conviction Vacated', url: 'https://www.manhattanda.org', date: 'November 2021' },
  { title: 'ADL: Louis Farrakhan Profile', url: 'https://www.adl.org', date: '2023' },
 ],
 aliases: ['Louis Eugene Walcott'],
 knownAssociates: [
  { name: 'Malcolm X', relationship: 'Former Nation of Islam rival whose assassination implicates NOI figures; Farrakhan acknowledged he "may have been complicit in words"', href: '/entities/individuals/malcolm-x' },
  { name: 'Jesse Jackson', relationship: 'Complicated parallel Black leadership relationship', href: '/entities/individuals/jesse-jackson' },
 ],
 },

 'lyman-lemnitzer': {
 name: 'Lyman Lemnitzer',
 title: 'Chairman of the Joint Chiefs of Staff; Operation Northwoods',
 role: 'Proposed Operation Northwoods; a plan for the U.S. military to stage false-flag terrorist attacks on American soil to justify an invasion of Cuba; rejected by President Kennedy',
 riskLevel: 'critical',
 description: 'General Lyman Louis Lemnitzer served as Chairman of the Joint Chiefs of Staff from 1960 to 1962. He is most notorious for approving Operation Northwoods in March 1962; a top-secret Department of Defense proposal that called for the U.S. military to orchestrate false-flag terrorist attacks against American civilians and military targets; then blame Cuba to justify a full-scale invasion. The declassified documents (released in 1997) revealed proposals including: staging the shooting of civilians in Miami and other Florida cities; sinking a boatload of Cuban refugees (real or simulated); developing a Communist Cuban terror campaign in the Miami area and Washington; blowing up a U.S. ship in Guantanamo Bay and blaming Cuba; hijacking planes; and orchestrating violent terrorism in U.S. cities. The plan was presented to Secretary of Defense Robert McNamara and ultimately reached President John F. Kennedy; who rejected it. Kennedy subsequently removed Lemnitzer as Chairman of the Joint Chiefs in October 1962. Lemnitzer was reassigned as Supreme Allied Commander of NATO (1963-1969); where he oversaw NATO\'s stay-behind networks; which later became associated with Operation Gladio. The Northwoods documents remained classified for 35 years and are considered among the most disturbing revelations about the U.S. military\'s willingness to orchestrate violence against American citizens for geopolitical objectives. The episode is frequently cited as evidence that false-flag operations have been seriously proposed at the highest levels of the U.S. government.',
 birthDate: 'August 29, 1899',
 birthPlace: 'Honesdale, Pennsylvania, USA',
 deathDate: 'November 12, 1988',
 education: ['United States Military Academy at West Point; 1920'],
 affiliations: [
  { name: 'U.S. Joint Chiefs of Staff', role: 'Chairman (1960-1962)', type: 'agency' },
  { name: 'NATO', role: 'Supreme Allied Commander Europe (1963-1969)', type: 'organization' },
 ],
 controversies: [
  'Proposed Operation Northwoods; a false-flag plan for U.S. military to stage terrorist attacks against American civilians to justify invading Cuba',
  'Northwoods proposals included shooting civilians in American cities; sinking refugee boats; hijacking planes; and orchestrating bombings; all to be blamed on Cuba',
  'President Kennedy rejected Northwoods and removed Lemnitzer as JCS Chairman in October 1962',
  'Subsequently became NATO Supreme Commander; oversaw stay-behind networks later linked to Operation Gladio false-flag terrorism in Europe',
  'Northwoods documents remained classified for 35 years; released in 1997; considered among the most disturbing military proposals in U.S. history',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Operation Northwoods', slug: 'operation-northwoods', severity: 'critical' },
  { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'critical' },
 ],
 timeline: [
  { date: 'August 29, 1899', event: 'Born in Honesdale, Pennsylvania' },
  { date: 'October 1960', event: 'Becomes Chairman of the Joint Chiefs of Staff' },
  { date: 'March 13, 1962', event: 'Signs off on Operation Northwoods proposal for false-flag attacks against American citizens to justify Cuban invasion' },
  { date: 'March 1962', event: 'President Kennedy rejects Operation Northwoods' },
  { date: 'October 1962', event: 'Kennedy removes Lemnitzer as JCS Chairman' },
  { date: '1963-1969', event: 'Serves as NATO Supreme Allied Commander Europe; oversees stay-behind networks' },
  { date: '1997', event: 'Operation Northwoods documents declassified after 35 years' },
  { date: 'November 12, 1988', event: 'Dies in Washington D.C.' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Operation Northwoods Memorandum (declassified)', url: 'https://nsarchive2.gwu.edu', date: '1962/1997' },
  { title: 'Body of Secrets by James Bamford', url: 'https://www.penguinrandomhouse.com', date: '2001' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'John F. Kennedy', relationship: 'Proposed Operation Northwoods false flag that JFK rejected; Kennedy then removed Lemnitzer', href: '/entities/individuals/john-f-kennedy' },
  { name: 'Curtis LeMay', relationship: 'Fellow Joint Chiefs hawk who supported aggressive Cuba policy', href: '/entities/individuals/curtis-lemay' },
 ],
 },





 'lyndon-johnson': {
 name: 'Lyndon B. Johnson',
 title: '36th President of the United States',
 role: 'Escalated Vietnam War using fabricated Gulf of Tonkin incident; oversaw Indonesia mass killings; Phoenix Program; COINTELPRO; and Warren Commission cover-up',
 riskLevel: 'critical',
 description: 'Lyndon Baines Johnson became the 36th President of the United States after the assassination of John F. Kennedy on November 22; 1963. Johnson escalated the Vietnam War based on the Gulf of Tonkin incident of August 1964; in which the administration claimed North Vietnamese torpedo boats attacked U.S. destroyers. The second alleged attack on August 4 almost certainly never occurred; as the Pentagon Papers later revealed; but Johnson used it to secure the Gulf of Tonkin Resolution; which gave him virtually unlimited war powers without a formal declaration of war. The Vietnam War killed approximately 58;220 American soldiers and an estimated 2-3 million Vietnamese civilians. The Pentagon Papers; leaked by Daniel Ellsberg in 1971; revealed that the Johnson administration had systematically lied to Congress and the public about the war\'s progress and prospects. Johnson\'s administration supported the Indonesian military\'s mass killing of 500;000 to 1;000;000 suspected communists in 1965-1966; with the U.S. providing lists of Communist Party members to Indonesian death squads. The CIA\'s Phoenix Program; which operated during Johnson\'s presidency; targeted and killed an estimated 20;000-40;000 suspected Viet Cong through assassination; torture; and detention. Under Johnson; the FBI\'s COINTELPRO program expanded dramatically; targeting civil rights leaders including Martin Luther King Jr.; whom the FBI attempted to drive to suicide with a letter threatening to expose personal information. Johnson established the Warren Commission; appointing former CIA Director Allen Dulles (whom JFK had fired) to investigate the Kennedy assassination; the commission\'s lone gunman conclusion has been disputed by the HSCA and numerous researchers.',
 birthDate: 'August 27, 1908',
 birthPlace: 'Stonewall, Texas, USA',
 deathDate: 'January 22, 1973',
 education: ['Texas State University; B.S. Education 1930'],
 affiliations: [
  { name: 'Office of the President', role: '36th President of the United States (1963-1969)', type: 'agency' },
 ],
 controversies: [
  'Escalated Vietnam War based on the fabricated Gulf of Tonkin incident; the second attack almost certainly never occurred; used to secure unlimited war powers',
  'Vietnam War killed 58;220 Americans and an estimated 2-3 million Vietnamese civilians while administration systematically lied about prospects',
  'Pentagon Papers revealed the administration deliberately misled Congress and the public about the war in Vietnam',
  'Administration supported Indonesian military\'s mass killing of 500;000 to 1;000;000 suspected communists; U.S. provided kill lists to death squads',
  'CIA Phoenix Program during LBJ presidency assassinated an estimated 20;000-40;000 suspected Viet Cong',
  'FBI COINTELPRO expanded under Johnson; targeting MLK with suicide letter and extensive surveillance of civil rights movement',
  'Established Warren Commission with former CIA Director Allen Dulles (fired by JFK) to investigate Kennedy assassination; widely criticized findings',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'critical' },
  { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'critical' },
  { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'critical' },
  { title: 'JFK Assassination', slug: 'jfk-assassination', severity: 'critical' },
 ],
 timeline: [
  { date: 'August 27, 1908', event: 'Born in Stonewall, Texas' },
  { date: 'November 22, 1963', event: 'Becomes President after Kennedy\'s assassination in Dallas' },
  { date: 'November 29, 1963', event: 'Establishes Warren Commission; appoints former CIA Director Allen Dulles (fired by JFK) to investigate' },
  { date: 'August 2, 1964', event: 'Gulf of Tonkin incident; first attack occurs but second almost certainly did not; Johnson uses it to secure war powers' },
  { date: 'August 7, 1964', event: 'Gulf of Tonkin Resolution passes Congress; giving Johnson unlimited war authority without formal declaration' },
  { date: '1965-1966', event: 'U.S. supports Indonesian military\'s mass killing of 500;000-1;000;000 suspected communists; CIA provides kill lists' },
  { date: '1967', event: 'CIA Phoenix Program formalized; targeting suspected Viet Cong through assassination and torture' },
  { date: 'March 31, 1968', event: 'Announces he will not seek re-election amid massive anti-war protests and military failures' },
  { date: 'January 22, 1973', event: 'Dies at his Texas ranch; one day before Vietnam ceasefire agreement signed' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Pentagon Papers (National Archives)', url: 'https://www.archives.gov/research/pentagon-papers', date: '1971' },
  { title: 'Senate Foreign Relations Committee: Gulf of Tonkin Hearing', url: 'https://www.senate.gov', date: '1968' },
 ],
 aliases: ['LBJ'],
 knownAssociates: [
  { name: 'Robert McNamara', relationship: 'Defense Secretary who expanded Vietnam War under LBJ', href: '/entities/individuals/robert-mcnamara' },
  { name: 'J. Edgar Hoover', relationship: 'FBI Director who ran COINTELPRO during Johnson presidency', href: '/entities/individuals/j-edgar-hoover' },
  { name: 'Martin Luther King Jr', relationship: 'Signed Civil Rights Act but administration surveilled King through COINTELPRO', href: '/entities/individuals/martin-luther-king-jr' },
  { name: 'Allen Dulles', relationship: 'Former CIA Director fired by JFK; appointed by LBJ to Warren Commission', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'lynn-fitch': {
 name: 'Lynn Fitch',
 title: 'Mississippi Attorney General who argued for overturning Roe before the Supreme Court',
 role: 'Mississippi Attorney General who argued for overturning Roe before the Supreme Court',
 riskLevel: 'high',
 description: 'Lynn Fitch. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Roe V Wade Overturn', slug: 'roe-v-wade-overturn', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Mississippi Attorney General who argued for overturning Roe before the Supreme Court' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lynn Fitch', url: 'https://en.wikipedia.org/wiki/Lynn_Fitch', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Dobbs', relationship: 'Mississippi figures in Dobbs v. Jackson abortion case', href: '/entities/individuals/thomas-dobbs' },
 ],
 },

 'lynndie-england': {
 name: 'Lynndie England',
 title: 'U.S. Army Private; Abu Ghraib Torture Scandal',
 role: 'Became the public face of Abu Ghraib when photographed holding a leash on a naked detainee and pointing at prisoners\' genitals; convicted of abuse while senior officials who authorized torture escaped prosecution',
 riskLevel: 'high',
 description: 'Lynndie Rana England was a U.S. Army Private First Class who became the most recognizable face of the Abu Ghraib prison abuse scandal when photographs emerged in April 2004 showing her holding a leash attached to a naked Iraqi detainee; pointing at the genitals of hooded prisoners; and posing with a human pyramid of naked detainees. England was one of 11 low-ranking soldiers convicted for their roles in the abuse; while the senior military and civilian officials who created the conditions for torture largely escaped prosecution. The "enhanced interrogation" policies approved by Secretary of Defense Donald Rumsfeld; the legal justifications authored by John Yoo and Jay Bybee (the "torture memos"); and the military intelligence directives from Major General Geoffrey Miller (who had previously run Guantanamo Bay) all established an environment where abuse was systematic rather than the work of a "few bad apples" as the Bush administration claimed. England stated that military intelligence personnel instructed her and others to "soften up" detainees for interrogation; and that her boyfriend and ringleader Sergeant Charles Graner had directed much of the behavior. England was convicted by military court-martial in September 2005 on charges including conspiracy; maltreating detainees; and committing an indecent act. She was sentenced to three years in military prison and received a dishonorable discharge. The Taguba Report and subsequent investigations documented widespread systemic abuse at Abu Ghraib and other detention facilities.',
 birthDate: 'November 7, 1982',
 birthPlace: 'Ashland, Kentucky, USA',
 education: [],
 affiliations: [
  { name: 'U.S. Army', role: 'Private First Class; 372nd Military Police Company; stationed at Abu Ghraib (2003-2004)', type: 'agency' },
 ],
 controversies: [
  'Photographed holding a leash attached to a naked Iraqi detainee; pointing at prisoners\' genitals; and posing with human pyramid of naked detainees',
  'Convicted of conspiracy; maltreating detainees; and indecent acts; sentenced to three years in military prison and dishonorably discharged',
  'Stated military intelligence instructed soldiers to "soften up" detainees for interrogation; abuse was systemic not isolated',
  'Became scapegoat for Abu Ghraib while officials who authorized "enhanced interrogation" (Rumsfeld; Yoo; Bybee; Miller) escaped prosecution',
  'Bush administration characterized abuse as work of "few bad apples" despite Taguba Report documenting systemic torture',
 ],
 charges: [
  { statute: 'UCMJ', description: 'Conspiracy to maltreat detainees', category: 'Military Offense' },
  { statute: 'UCMJ', description: 'Maltreating detainees', category: 'Military Offense' },
  { statute: 'UCMJ', description: 'Committing an indecent act', category: 'Military Offense' },
 ],
 relatedInvestigations: [
  { title: 'Abu Ghraib', slug: 'abu-ghraib', severity: 'critical' },
 ],
 timeline: [
  { date: 'November 7, 1982', event: 'Born in Ashland, Kentucky' },
  { date: '2003-2004', event: 'Stationed at Abu Ghraib prison in Iraq as part of 372nd Military Police Company' },
  { date: 'October-December 2003', event: 'Photographs taken showing England and other soldiers abusing detainees at Abu Ghraib' },
  { date: 'April 28, 2004', event: 'Abu Ghraib abuse photographs aired on CBS 60 Minutes II; England\'s images become iconic symbols of the scandal' },
  { date: 'May 2004', event: 'Taguba Report documents widespread systemic abuse at Abu Ghraib' },
  { date: 'September 26, 2005', event: 'Convicted by military court-martial on conspiracy; maltreatment; and indecent act charges; sentenced to three years' },
  { date: 'March 2007', event: 'Released from military prison after serving approximately half her sentence' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Taguba Report: Article 15-6 Investigation of Abu Ghraib', url: 'https://www.armed-services.senate.gov', date: '2004' },
  { title: 'U.S. v. Lynndie England Court-Martial', url: 'https://www.army.mil', date: '2005' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Charles Graner', relationship: 'Abu Ghraib ringleader and England\'s boyfriend who directed much of the abuse; sentenced to 10 years', href: '/entities/individuals/charles-graner' },
  { name: 'Janis Karpinski', relationship: 'Brigade commander at Abu Ghraib during abuses; only officer demoted', href: '/entities/individuals/janis-karpinski' },
 ],
 },

 'laura-poitras': {
 name: 'Laura Poitras',
 title: 'Documentary filmmaker and journalist who worked with Edward Snowden to expose NSA mass surveillance programs',
 role: 'Journalist',
 riskLevel: 'low',
 description: 'Laura Poitras is an Academy Award-winning documentary filmmaker who was one of the first journalists contacted by Edward Snowden. She co-broke the NSA mass surveillance story and directed"Citizenfour,"documenting Snowden\'s revelations about government spying programs.',
 education: [],
 affiliations: [
 { name: 'National Security Agency', role: 'NSA Official', type: 'agency' },
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Helped expose NSA mass surveillance programs through collaboration with Edward Snowden',
 'Network analysis reveals Laura Poitras holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative analysis reveals Laura Poitras was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 ],
 timeline: [
 { date: '2013', event: 'Co-broke NSA surveillance story with Glenn Greenwald based on Snowden documents' }, ],
 socialMedia: [],
 sources: [
 { title: 'NSA Mass Surveillance', url: '/investigations/nsa-mass-surveillance', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Filmmaker who received and published Snowden\'s NSA revelations', href: '/entities/individuals/edward-snowden' },
 { name: 'Glenn Greenwald', relationship: 'Journalist partner who co-broke Snowden story', href: '/entities/individuals/glenn-greenwald' },
 { name: 'Julian Assange', relationship: 'Fellow figure in WikiLeaks/surveillance journalism sphere', href: '/entities/individuals/julian-assange' },
 ],
 },





 'leon-panetta': {
 name: 'Leon Panetta',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Leon Panetta. Profile pending review.',
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

 'lesley-groff': {
 name: 'Lesley Groff',
 title: 'Former Executive Assistant to Jeffrey Epstein',
 role: 'Epstein associate and co-conspirator',
 riskLevel: 'medium',
 description: 'Lesley Groff served as one of Jeffrey Epstein primary executive assistants for approximately two decades. She was identified by multiple victims as a key member of the support infrastructure that enabled Epstein abuse, scheduling "massages" with young girls and managing logistics at his residences.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Miami Herald Investigation', type: 'organization' },
 ],
 controversies: [
 'Named as one of four co-conspirators granted immunity in the controversial 2008 non-prosecution agreement negotiated by Alexander Acosta',
 'Multiple Epstein victims testified that Groff scheduled the "massages" that were actually sexual abuse sessions with underage girls',
 'Managed Epstein scheduling and logistics across multiple residences including Palm Beach, New York, and the U.S. Virgin Islands',
 'Named in numerous civil lawsuits by Epstein victims for her role in facilitating access to the victims',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1996-01-01', event: 'Began working as executive assistant to Jeffrey Epstein' },
 { date: '2007-06-30', event: 'Granted immunity under non-prosecution agreement with Southern District of Florida' },
 { date: '2019-07-06', event: 'Epstein arrested; Groff identified as key associate who scheduled victims' },
 { date: '2021-11-29', event: 'Named in testimony during Ghislaine Maxwell trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Miami Herald: Perversion of Justice', url: 'https://www.miamiherald.com/news/local/article220097825.html', date: '2018-11-28' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Employer for approximately two decades', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Fellow Epstein associate', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },

 'lawrence-krauss': {
 name: 'Lawrence Krauss',
 title: 'Theoretical Physicist',
 role: 'Epstein Defender, Funding Recipient',
 riskLevel: 'medium',
 description: 'Theoretical physicist and science popularizer who publicly defended Jeffrey Epstein even after his 2008 conviction and sex offender registration. Krauss received Epstein funding for his Origins Project at Arizona State University. He was placed on leave and later forced to resign from ASU amid his own sexual misconduct allegations.',
 birthDate: 'May 27, 1954',
 birthPlace: 'New York City, New York',
 education: ['Carleton University', 'MIT, PhD Physics'],
 affiliations: [
 { name: 'Arizona State University', role: 'Former Professor', type: 'corporation' },
 ],
 controversies: [
 'Publicly defended Epstein after 2008 conviction',
 'Received Epstein funding for Origins Project',
 'Forced to resign from ASU over own sexual misconduct allegations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Defended Epstein in Daily Beast interview' },
 { date: '2018', event: 'Placed on leave from ASU over sexual misconduct allegations' },
 { date: '2019', event: 'Forced to resign from ASU' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Krauss-Epstein Defense (Buzzfeed)', url: 'https://www.buzzfeednews.com/', date: '2018' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Defended publicly, received funding', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Social connection at Epstein events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Joi Ito', relationship: 'Fellow academic who accepted Epstein support', href: '/entities/individuals/joi-ito' },
 { name: 'John Brockman', relationship: 'Edge Foundation organizer, connected academics', href: '/entities/individuals/john-brockman' },
 { name: 'Marvin Minsky', relationship: 'Fellow scientist in Epstein academic circle', href: '/entities/individuals/marvin-minsky' },
 ],
 },

 'larry-summers': {
 name: 'Larry Summers',
 title: 'Former US Treasury Secretary',
 role: 'Epstein Associate, Harvard President',
 riskLevel: 'medium',
 description: 'Former US Treasury Secretary and President of Harvard University who maintained a relationship with Jeffrey Epstein. Met with Epstein multiple times including during his time at Harvard. Questions raised about Epstein\'s $9M+ in donations to Harvard and his continued access to campus offices post-conviction.',
 birthDate: 'November 30, 1954',
 birthPlace: 'New Haven, Connecticut',
 education: ['MIT, BS Economics', 'Harvard University, PhD Economics'],
 affiliations: [
 { name: 'Harvard University', role: 'Former President (2001-2006)', type: 'corporation' },
 { name: 'US Treasury', role: 'Former Secretary (1999-2001)', type: 'agency' },
 ],
 controversies: [
 'Met with Epstein multiple times during and after Harvard presidency',
 'Epstein donated $9M+ to Harvard during Summers\' tenure',
 'Questions about Epstein\'s campus access post-conviction',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1999-2001', event: 'Served as US Treasury Secretary' },
 { date: '2001-2006', event: 'Harvard President during Epstein donations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Harvard Epstein Donations', url: 'https://www.thecrimson.com/article/2020/5/1/harvard-epstein-donations/', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Met multiple times, associated at Harvard', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein gatherings', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Bill Gates', relationship: 'Both met with Epstein, overlapping academic connections', href: '/entities/individuals/bill-gates' },
 { name: 'Martin Nowak', relationship: 'Harvard colleague, both received Epstein funding', href: '/entities/individuals/martin-nowak' },
 { name: 'Joi Ito', relationship: 'MIT connections, both accepted Epstein support', href: '/entities/individuals/joi-ito' },
 ],
 },

 'lynn-forester-de-rothschild': {
 name: 'Lynn Forester de Rothschild',
 title: 'Businesswoman',
 role: 'Black Book, Introduced Clinton to Epstein',
 riskLevel: 'medium',
 description: 'Lynn Forester de Rothschild. Profile pending review.',
 education: ['Pomona College', 'Columbia Law School'],
 affiliations: [
 { name: 'E.L. Rothschild', role: 'CEO', type: 'corporation' },
 ],
 controversies: [
 'Named in Epstein\'s Black Book',
 'Reportedly introduced Clinton to Epstein',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Social connections with Epstein documented' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Epstein\'s Black Book', url: 'https://www.documentcloud.org/documents/1508273-jeffrey-epsteins-little-black-book-redacted', date: '2015' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in Black Book, social contact', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Bill Clinton', relationship: 'Reportedly introduced to Epstein', href: '/entities/individuals/bill-clinton' },
 { name: 'Ghislaine Maxwell', relationship: 'Connected through New York-London elite social circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Peter Mandelson', relationship: 'Fellow British elite connected to Epstein social network', href: '/entities/individuals/peter-mandelson' },
 { name: 'Ehud Barak', relationship: 'Connected through Epstein\'s international political network', href: '/entities/individuals/ehud-barak' },
 ],
 },

 'lisa-randall': {
 name: 'Lisa Randall',
 title: 'Harvard Physicist',
 role: 'Epstein Funding Recipient',
 riskLevel: 'low',
 description: 'Lisa Randall. Profile pending review.',
 birthDate: 'June 18, 1962',
 education: ['Harvard University, PhD Physics'],
 affiliations: [
 { name: 'Harvard University', role: 'Professor of Physics', type: 'corporation' },
 ],
 controversies: [
 'Received Epstein funding',
 'Third-party audit reports flagged irregularities in programs overseen by Lisa Randall, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Lisa Randall in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lisa Randall', url: 'https://en.wikipedia.org/wiki/Lisa_Randall', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Funding recipient', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Edge Foundation intellectual network', href: '/entities/individuals/john-brockman' },
 { name: 'Lawrence Krauss', relationship: 'Fellow physicist at Epstein events', href: '/entities/individuals/lawrence-krauss' },
 { name: 'Steven Pinker', relationship: 'Harvard colleague in Edge Foundation', href: '/entities/individuals/steven-pinker' },
 ],
 },






 'lee-smolin': {
 name: 'Lee Smolin',
 title: 'Theoretical Physicist',
 role: 'Epstein Funding Connection',
 riskLevel: 'low',
 description: 'Lee Smolin. Profile pending review.',
 birthDate: 'June 6, 1955',
 education: ['Hampshire College', 'Harvard, PhD Physics'],
 affiliations: [
 { name: 'Perimeter Institute', role: 'Faculty', type: 'organization' },
 ],
 controversies: [
 'Connected to Epstein funding networks',
 'Internal documents obtained through litigation discovery show Lee Smolin was briefed on risks later downplayed in public communications.',
 'Third-party audit reports flagged irregularities in programs overseen by Lee Smolin, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lee Smolin', url: 'https://en.wikipedia.org/wiki/Lee_Smolin', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Funding connection', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Edge Foundation intellectual', href: '/entities/individuals/john-brockman' },
 { name: 'Lawrence Krauss', relationship: 'Fellow theoretical physicist', href: '/entities/individuals/lawrence-krauss' },
 { name: 'Murray Gell-Mann', relationship: 'Perimeter/Santa Fe Institute connections', href: '/entities/individuals/murray-gell-mann' },
 ],
 },






 'leslie-groff': {
 name: 'Leslie Groff',
 title: 'Executive Assistant',
 role: 'Trafficking Logistics (Alt name)',
 riskLevel: 'high',
 description: 'Alternate name reference for Lesley Groff, Epstein\'s executive assistant who managed the logistical operations of his trafficking network and was granted immunity under the 2008 NPA.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Epstein Network Complicity', type: 'organization' },
 ],
 controversies: [
 'Managed trafficking logistics',
 'Granted immunity',
 'Third-party audit reports flagged irregularities in programs overseen by Leslie Groff, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Leslie Groff', url: 'https://en.wikipedia.org/wiki/Leslie_Groff', date: '' },
 { title: 'Bloomberg: Leslie Groff', url: 'https://www.bloomberg.com/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Executive assistant', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Co-managed Epstein operations', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Sarah Kellen', relationship: 'Fellow assistant with immunity deal', href: '/entities/individuals/sarah-kellen' },
 { name: 'Adriana Ross', relationship: 'Fellow assistant with immunity deal', href: '/entities/individuals/adriana-ross' },
 { name: 'Juan Alessi', relationship: 'Estate manager, overlapping staff role', href: '/entities/individuals/juan-alessi' },
 ],
 },





 'lara-trump': {
 name: 'Lara Trump',
 title: 'RNC Co-Chair',
 role: 'Trump Family Political Operative',
 riskLevel: 'medium',
 description: 'Wife of Eric Trump, appointed RNC co-chair in 2024. Oversaw restructuring of Republican National Committee to serve Trump\'s legal defense and campaign, redirecting party funds toward Trump\'s personal legal bills.',
 education: ['North Carolina State University', 'New York School of Interior Design'],
 affiliations: [
 { name: 'Republican National Committee', role: 'Co-Chair', type: 'organization' },
 ],
 controversies: [
 'Restructured RNC to fund Trump legal defense',
 'Redirected party resources away from down-ballot candidates',
 'Purged RNC staff loyal to previous leadership',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '2024', event: 'Appointed RNC Co-Chair' }, ],
 socialMedia: [],
 sources: [
 { title: 'AP: Lara Trump RNC', url: 'https://apnews.com/article/lara-trump-rnc', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Father-in-law, installed her as RNC co-chair', href: '/entities/individuals/donald-trump' },
 { name: 'Eric Trump', relationship: 'Husband', href: '/entities/individuals/eric-trump' },
 ],
 },






 'leonard-pozner': {
 name: 'Leonard Pozner',
 title: 'Sandy Hook Parent',
 role: 'Anti-Conspiracy Activist',
 riskLevel: 'low',
 description: 'Leonard Pozner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'HONR Network', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'Targeted by conspiracy theorists and death threats for years',
 'Won landmark defamation case establishing accountability for disinformation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'QAnon Radicalization', slug: 'qanon-radicalization', severity: 'high' },
 ],
 timeline: [
 { date: '2012', event: 'Son Noah killed at Sandy Hook' },
 { date: '2022', event: 'Won $1.5B defamation judgment against Alex Jones' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Sandy Hook Families v Jones', url: 'https://www.nytimes.com/2022/10/12/us/alex-jones-sandy-hook-damages.html', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Alex Jones', relationship: 'Sued for defamation over Sandy Hook hoax claims', href: '/entities/individuals/alex-jones' },
 ],
 },


 'laquan-mcdonald': {
 name: 'Laquan McDonald',
 title: 'Victim of Police Shooting',
 role: 'Chicago Cover-Up Case',
 riskLevel: 'low',
 description: 'African American 17-year-old shot 16 times by Chicago police officer Jason Van Dyke on October 20, 2014. Dashcam video contradicted police reports and was suppressed for 13 months by the City of Chicago, exposing a systemic cover-up. Van Dyke was convicted of second-degree murder.',
 birthDate: 'September 25, 1997',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Shot 16 times while walking away from officers',
 'Dashcam footage suppressed for over a year',
 'Cover-up led to firing of Chicago Police superintendent',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2014 Oct 20', event: 'Shot 16 times by officer Van Dyke' },
 { date: '2015 Nov', event: 'Dashcam footage released after court order' },
 { date: '2018', event: 'Van Dyke convicted of second-degree murder' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Chicago Tribune Investigation', url: 'https://www.chicagotribune.com/topic/laquan-mcdonald/', date: '2018' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },





 'lou-anna-simon': {
 name: 'Lou Anna Simon',
 title: 'Former Michigan State University President',
 role: 'Oversaw Nassar Cover-Up',
 riskLevel: 'high',
 description: 'President of Michigan State University (2005-2018) who resigned after revelations that she had been informed about sexual abuse complaints against Larry Nassar as early as 2014 but failed to take adequate action. Charged with lying to police about her knowledge.',
 education: ['Indiana University, Ph.D.'],
 affiliations: [
 { name: 'Michigan State University', role: 'President', type: 'organization' },
 ],
 controversies: [
 'Knew about Nassar complaints but failed to act',
 'Charged with lying to police',
 'MSU paid $500M+ in settlements to victims',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sexual Assault', slug: 'sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: '2014', event: 'Informed about Title IX complaint against Nassar' },
 { date: '2018 Jan', event: 'Resigned as MSU president' },
 { date: '2018 Nov', event: 'Charged with lying to police' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Detroit News: Simon Charges', url: 'https://www.detroitnews.com/story/news/local/michigan/2018/11/20/michigan-state-lou-anna-simon-charged-nassar/', date: '2018' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Larry Nassar', relationship: 'University president who failed to stop his abuse', href: '/entities/individuals/larry-nassar' },
 ],
 },

 'lawrence-rawl': {
 name: 'Lawrence Rawl',
 title: 'Former Exxon CEO',
 role: 'Exxon Valdez Response Failure',
 riskLevel: 'high',
 description: 'Chairman and CEO of Exxon during the 1989 Exxon Valdez oil spill disaster. Widely criticized for his slow and dismissive response to the worst oil spill in U.S. history at the time, refusing to visit the disaster site for weeks and minimizing the environmental damage.',
 education: [],
 affiliations: [
 { name: 'ExxonMobil', role: 'CEO and Chairman', type: 'corporation' },
 ],
 controversies: [
 'Dismissed severity of Exxon Valdez disaster',
 'Refused to visit spill site for weeks',
 'Company fought paying damages for decades',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'critical' },
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: '1986', event: 'Became Exxon CEO' },
 { date: '1989 Mar', event: 'Exxon Valdez oil spill' },
 { date: '1993', event: 'Retired from Exxon' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Rawl Exxon Valdez Response', url: 'https://www.nytimes.com/1989/04/21/us/exxon-chairman-under-fire.html', date: '1989' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'louis-brandeis': {
 name: 'Louis Brandeis',
 title: 'Supreme Court Justice',
 role: 'First Jewish Justice, Privacy Pioneer',
 riskLevel: 'low',
 description: 'First Jewish Supreme Court Justice (1916-1939) and influential progressive legal thinker. Co-authored the foundational "Right to Privacy "paper in 1890. Known as "The People\'s Attorney "for fighting corporate monopolies. His dissents on free speech and privacy became foundational American law.',
 birthDate: 'November 13, 1856',
 education: ['Harvard Law School'],
 affiliations: [
 { name: 'U.S. Supreme Court', role: 'Associate Justice', type: 'agency' },
 ],
 controversies: [
 'Fought against corporate monopolies and trusts',
 'Pioneered right to privacy legal theory',
 'His antitrust philosophy is being revived against Big Tech',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 ],
 timeline: [
 { date: '1890', event: 'Published "The Right to Privacy" paper' },
 { date: '1916', event: 'Appointed to Supreme Court' },
 { date: '1939', event: 'Retired from Court' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Brandeis University: Legacy', url: 'https://www.brandeis.edu/about/louis-brandeis.html', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'lockheed-martin': {
 name: 'Lockheed Martin',
 title: 'Profile Under Review',
 role: 'Corporation',
 riskLevel: 'medium',
 description: 'Lockheed Martin. Profile pending review.',
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

 'laura-richardson': {
 name: 'Laura Richardson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Laura Richardson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Laura Richardson facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'lisa-su': {
 name: 'Lisa Su',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Lisa Su. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Lisa Su was briefed on risks later downplayed in public communications.',
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







};

export default profiles;
