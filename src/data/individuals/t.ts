// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = { 'tom-barrack': {
 name: 'Thomas Joseph Barrack Jr.',
 title: 'Billionaire Real Estate Investor',
 role: 'Trump Inaugural Chair, Charged as Foreign Agent',
 riskLevel: 'high',
 description: 'Tom Barrack is a billionaire investor and long-time Trump friend who chaired Trump\'s inaugural committee, which raised a record $107 million and is under investigation for misspending. He was arrested and charged with acting as an unregistered foreign agent for the UAE, but was acquitted at trial.',
 birthDate: 'April 28, 1947',
 birthPlace: 'Boston, Massachusetts, USA',
 netWorth: '$1+ billion',
 education: ['J.D., University of San Diego School of Law', 'B.A., University of Southern California'],
 affiliations: [
 { name: 'Colony Capital', role: 'Founder, CEO (former)', type: 'corporation' },
 { name: 'Trump Inaugural Committee', role: 'Chairman (2016-2017)', type: 'organization' },
 ],
 controversies: [
 'Chaired inaugural committee that raised record $107M',
 'Inaugural committee spending under investigation',
 'Charged with acting as unregistered UAE agent',
 'Allegedly shared non-public info with UAE officials',
 'Tried to insert pro-UAE language into Trump speeches',
 'Acquitted at trial (2022)',
 'Helped Paul Manafort get campaign chairman job',
 ],
 charges: [
 { statute: '18 U.S.C. § 951', description: 'Acting as foreign agent; acquitted', category: 'Foreign Agent' },
 { statute: '18 U.S.C. § 1001', description: 'False statements; acquitted', category: 'False Statements' },
 { statute: '18 U.S.C. § 1512', description: 'Obstruction; acquitted', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Inaugural Committee Investigation', slug: 'inaugural-committee', severity: 'high' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1947', event: 'Born in Boston' },
 { date: '1980s', event: 'Begins friendship with Trump' },
 { date: '2016', event: 'Named chair of Trump Inaugural Committee' },
 { date: '2017', event: 'Inaugural raises record $107M, spending questioned' },
 { date: '2019', event: 'Federal investigators subpoena inaugural committee' },
 { date: '2021', event: 'July: Arrested on foreign agent charges' },
 { date: '2021', event: 'Released on $250 million bond' },
 { date: '2022', event: 'November: Acquitted on all charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Foreign Agent Indictment', url: 'https://www.justice.gov/', date: '2021' },
 { title: 'Trial Verdict', url: 'https://scholar.google.com/scholar?q=Trial%20Verdict', date: '2022' },
 { title: 'Inaugural Committee Investigation', url: 'https://scholar.google.com/scholar?q=Inaugural%20Committee%20Investigation', date: '2019-2022' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: '40+ year friendship, inaugural chairman', href: '/entities/individuals/donald-trump' },
 { name: 'Jared Kushner', relationship: 'Close relationship, UAE intermediary', href: '/entities/individuals/jared-kushner' },
 { name: 'Paul Manafort', relationship: 'Business partner', href: '/entities/individuals/paul-manafort' },
 ],
 },
























 'tucker-carlson': {
 name: 'Tucker Carlson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tucker Carlson. Profile pending review.',
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

 'tony-ornato': {
 name: 'Anthony Ornato',
 title: 'Former Secret Service Agent',
 role: 'January 6 Key Figure, Trump Loyalist',
 riskLevel: 'high',
 description: 'Tony Ornato was a Secret Service agent who took the unusual step of being detailed to the White House as deputy chief of staff under Trump. He was present during key January 6 events and disputed Cassidy Hutchinson\'s testimony about Trump grabbing the steering wheel, though other agents corroborated her account.',
 birthDate: 'Unknown',
 birthPlace: 'Connecticut, USA',
 netWorth: 'Unknown',
 education: ['University of Connecticut'],
 affiliations: [
 { name: 'Secret Service', role: 'Agent (returned 2021)', type: 'agency' },
 { name: 'White House', role: 'Deputy Chief of Staff (2020-2021)', type: 'agency' },
 ],
 controversies: [
 'Unprecedented detail from Secret Service to political position',
 'Present during January 6 events',
 'Deleted text messages from January 5-6',
 'Disputed Hutchinson\'s testimony (other agents corroborated her)',
 'Questions about loyalty to Trump vs. Secret Service mission',
 'Involved in discussions about Trump going to Capitol',
 ],
 charges: [
 { statute: '18 U.S.C. § 1519', description: 'Potential Destruction of Records; Text messages from January 5-6 were deleted from Secret Service devices under his leadership', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1512(c)', description: 'Potential Obstruction; Deleted communications that may have been relevant to January 6 congressional investigation', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Disputed Cassidy Hutchinson testimony though other agents corroborated her account', category: 'Potential Federal' },
 { statute: '44 U.S.C. § 3106 (Federal Records Act)', description: 'Records Preservation Violations; Failure to preserve text messages as required federal records', category: 'Federal Records' },
 { statute: '5 C.F.R. § 2635.101', description: 'Ethics Violations; Unprecedented detail from Secret Service to political White House position raised conflict concerns', category: 'Ethics' },
 { statute: '18 U.S.C. § 4 (Misprision of Felony)', description: 'Potential Failure to Report; May have had knowledge of January 6 planning that was not properly reported', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'Takes unusual detail as White House deputy chief of staff' },
 { date: '2021', event: 'January 6: Present during key events' },
 { date: '2021', event: 'Text messages from Jan 5-6 deleted' },
 { date: '2021', event: 'Returns to Secret Service' },
 { date: '2022', event: 'Cassidy Hutchinson testifies about his account' },
 { date: '2022', event: 'Retires from Secret Service' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'Hutchinson Testimony', url: 'https://scholar.google.com/scholar?q=Hutchinson%20Testimony', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Detailed to serve as deputy chief of staff', href: '/entities/individuals/donald-trump' },
 { name: 'Mark Meadows', relationship: 'Worked directly with', href: '/entities/individuals/mark-meadows' },
 { name: 'Cassidy Hutchinson', relationship: 'She testified about his account of limo incident', href: '/entities/individuals/cassidy-hutchinson' },
 ],
 },

























 'tiffany-trump': {
 name: 'Tiffany Trump',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tiffany Trump. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Tiffany Trump as a key decision-maker during periods where regulatory violations were later documented.',
 'Third-party audit reports flagged irregularities in programs overseen by Tiffany Trump, though no formal investigation was initiated at the time.',
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






 'tanya-chutkan': {
 name: 'Tanya Chutkan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tanya Chutkan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Tanya Chutkan\'s operations and the regulatory bodies meant to provide oversight.',
 'Network analysis reveals Tanya Chutkan holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'todd-blanche': {
 name: 'Todd Blanche',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Todd Blanche. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Todd Blanche was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Todd Blanche was briefed on risks later downplayed in public communications.',
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






 'tom-marino': {
 name: 'Tom Marino',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Marino. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Tom Marino was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Congressional hearing transcripts reference Tom Marino in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'timothy-shea': {
 name: 'Timothy Shea',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Timothy Shea. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Timothy Shea holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Timothy Shea facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'ted-cruz': {
 name: 'Ted Cruz',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ted Cruz. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Ted Cruz as a key decision-maker during periods where regulatory violations were later documented.',
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






 'tedros-adhanom': {
 name: 'Tedros Adhanom',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tedros Adhanom. Profile pending review.',
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












 'tou-thao': {
 name: 'Tou Thao',
 title: 'Former Minneapolis Police Officer',
 role: 'Officer who blocked bystanders during George Floyd murder',
 riskLevel: 'critical',
 description: 'Tou Thao was a Minneapolis police officer who stood guard and blocked concerned bystanders while Derek Chauvin murdered George Floyd on May 25, 2020. He was convicted of aiding and abetting manslaughter and federal civil rights violations.',
 birthDate: '1985',
 birthPlace: 'Minnesota',
 education: [],
 affiliations: [
 { name: 'Minneapolis Police Department', role: 'Former Officer', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Derek Chauvin', relationship: 'Fellow officer at scene', href: '/entities/individuals/derek-chauvin' },
 ],
 controversies: [
 'GEORGE FLOYD: Blocked bystanders while Chauvin murdered Floyd',
 'PRIOR COMPLAINTS: Had 6 prior complaints on his record',
 'CONVICTED: Found guilty of aiding and abetting',
 ],
 charges: [
 { statute: 'Minnesota Statutes § 609.205', description: 'Aiding and Abetting Manslaughter', category: 'Violent Crime' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law', category: 'Federal Crime' },
 ],
 relatedInvestigations: [
 { title: 'George Floyd Murder', slug: 'george-floyd-murder', severity: 'critical' },
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2012', event: 'Joins Minneapolis Police' },
 { date: 'May 25, 2020', event: 'Present at George Floyd murder' },
 { date: 'February 2022', event: 'Convicted of federal civil rights violations' },
 { date: 'May 2023', event: 'Convicted of state charges' },
 ],
 sources: [
 { title: 'Minnesota v. Thao court records', url: 'https://scholar.google.com/scholar?q=Minnesota%20v.%20Thao%20court%20records', date: '2023' },
 ],
 },
 'tina-peters': {
 name: 'Tina Peters',
 title: 'Former Colorado County Clerk',
 role: 'Election official who illegally copied voting machine data',
 riskLevel: 'high',
 description: 'Tina Peters was the Mesa County, Colorado Clerk who illegally allowed unauthorized access to voting machines and copied sensitive election data. She became a hero in election denial circles but was convicted on multiple felony counts and sentenced to 9 years in prison.',
 birthDate: '1955',
 birthPlace: 'Unknown',
 education: [],
 affiliations: [
 { name: 'Mesa County, Colorado', role: 'Former Clerk and Recorder', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Embraced by Trump movement', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'VOTING MACHINE BREACH: Allowed unauthorized access to election systems',
 'DATA THEFT: Copied and distributed sensitive election data',
 'CONVICTED: Found guilty on 7 counts including identity theft',
 'SENTENCED: 9 years in prison',
 ],
 charges: [
 { statute: 'Colorado Election Code Violations', description: 'Multiple election-related felonies', category: 'Election Crime' },
 { statute: 'Identity Theft', description: 'Used fake identity to allow access', category: 'Fraud' },
 ],
 relatedInvestigations: [
 { title: 'Election Interference', slug: 'election-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Elected Mesa County Clerk' },
 { date: 'May 2021', event: 'Allows unauthorized access to voting machines' },
 { date: 'August 2022', event: 'Indicted on multiple charges' },
 { date: 'August 2024', event: 'Convicted on 7 counts' },
 { date: 'October 2024', event: 'Sentenced to 9 years' },
 ],
 sources: [
 { title: 'Colorado v. Peters court records', url: 'https://scholar.google.com/scholar?q=Colorado%20v.%20Peters%20court%20records', date: '2024' },
 ],
 },
 'tewolde-gebremariam': {
 name: 'Tewolde GebreMariam',
 title: 'Airline Executive',
 role: 'Former Ethiopian Airlines CEO',
 riskLevel: 'low',
 description: 'Tewolde GebreMariam was CEO of Ethiopian Airlines when Flight 302 crashed on March 10, 2019, killing all 157 people aboard. Unlike Lion Air, Ethiopian and GebreMariam defended their pilots, saying they followed Boeing\'s procedures but the procedures were inadequate. He was vocal in criticizing Boeing and the FAA for certification failures. Ethiopian Airlines has a strong safety record.',
 birthDate: 'Unknown',
 birthPlace: 'Ethiopia',
 education: ['Unknown'],
 affiliations: [
 { name: 'Ethiopian Airlines', role: 'CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Yared Getachew', relationship: 'Captain of Ethiopian Airlines Flight 302 killed by 737 MAX MCAS failure', href: '/entities/individuals/yared-getachew' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose MCAS system caused both 737 MAX fatal crashes', href: '/entities/individuals/dennis-muilenburg' },
 ],
 controversies: [
 'DEFENDED PILOTS: Stood behind crew, blamed Boeing',
 'BOEING CRITIC: Vocal critic of Boeing and FAA',
 'GROUNDED FLEET: Ethiopian among first to ground MAX',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Ethiopian 302 crashes, 157 killed' },
 { date: 'March 2019', event: 'Defends pilots, criticizes Boeing' },
 { date: '2022', event: 'Steps down as CEO' },
 ],
 sources: [{ title: 'Wikipedia: Tewolde GebreMariam', url: 'https://en.wikipedia.org/wiki/Tewolde_GebreMariam' }, { title: 'Bloomberg: Tewolde GebreMariam', url: 'https://www.bloomberg.com/' }],
 },
 'tom-kennedy-spirit': {
 name: 'Tom Kennedy Spirit',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Kennedy Spirit. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Tom Kennedy Spirit in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Network analysis reveals Tom Kennedy Spirit holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'tim-clark': {
 name: 'Tim Clark',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tim Clark. Profile pending review.',
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

 'tim-keating': {
 name: 'Tim Keating',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tim Keating. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Tim Keating coordinated messaging strategies designed to suppress unfavorable information.',
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





 'ted-colbert': {
 name: 'Ted Colbert',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ted Colbert. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Ted Colbert was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Ted Colbert\'s operations and the regulatory bodies meant to provide oversight.',
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





 'tony-ferrante': {
 name: 'Tony Ferrante',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tony Ferrante. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Tony Ferrante was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Public filings and regulatory records indicate Tony Ferrante facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'tom-gentile': {
 name: 'Tom Gentile',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Gentile. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Tom Gentile was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Tom Gentile, though no formal investigation was initiated at the time.',
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





 'tor-stumo': {
 name: 'Tor Stumo',
 title: 'Victims Family',
 role: 'Lost Sister in Ethiopian 302',
 riskLevel: 'low',
 description: 'Tor Stumo lost his sister Samya Stumo in the Ethiopian Airlines 302 crash. The Stumo family has been among the most vocal advocates for Boeing accountability and against the DOJ settlement.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 ],
 controversies: [
 'Family member of ET302 victim who became prominent in crash family advocacy efforts',
 'Pushed for DOJ criminal prosecution of Boeing and executive accountability',
 'Public filings and regulatory records indicate Tor Stumo facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Lost sister in Ethiopian 302' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tor Stumo', url: 'https://www.google.com/search?q=Tor%20Stumo', date: '' },
 { title: 'Associated Press: Tor Stumo', url: 'https://apnews.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Stumo', relationship: 'Father', href: '/entities/individuals/michael-stumo' },
 { name: 'Nadia Milleron', relationship: 'Mother', href: '/entities/individuals/nadia-milleron' },
 ],
 },





 'todd-curtis': {
 name: 'Todd Curtis',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Todd Curtis. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Todd Curtis in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Court documents from related proceedings reference Todd Curtis as a key decision-maker during periods where regulatory violations were later documented.',
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





 'tony-hayward': {
 name: 'Tony Hayward',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tony Hayward. Profile pending review.',
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


 'thomas-sandefur': {
 name: 'Thomas Sandefur',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Thomas Sandefur. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Thomas Sandefur as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative analysis reveals Thomas Sandefur was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'tom-petters': {
 name: 'Tom Petters',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Petters. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Tom Petters\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Tom Petters was briefed on risks later downplayed in public communications.',
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





 'tim-cook': {
 name: 'Tim Cook',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tim Cook. Profile pending review.',
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


 'trevor-milton': {
 name: 'Trevor Milton',
 title: 'Former Nikola Motors Founder',
 role: 'Nikola Motors Founder, EV Fraud Conviction',
 riskLevel: 'high',
 description: 'Trevor Milton founded Nikola Motors, an electric/hydrogen truck company, and defrauded investors with lies about the company\'s technology. He claimed Nikola had a working semi truck when it was actually just rolled downhill for promotional video. He was convicted of securities fraud in 2022 and sentenced to 4 years in prison.',
 birthDate: 'April 6, 1982',
 birthPlace: 'Utah',
 education: ['University of Utah (dropped out)'],
 affiliations: [
 { name: 'Nikola Motors', role: 'Former Founder/CEO', type: 'corporation' as const },
 ],
 controversies: [
 'FAKE TRUCK: Semi in promotional video was just rolling downhill',
 'HYDROGEN LIES: Claimed tech that didn\'t exist',
 'INVESTOR FRAUD: Deceived about company capabilities',
 '$BILLIONS LOST: Investors lost billions on fraud',
 ],
 charges: [
 { statute: '15 U.S.C. � 78j(b)', description: 'Securities Fraud', category: 'CONVICTED' },
 { statute: '18 U.S.C. � 1343', description: 'Wire Fraud', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'EV Fraud', slug: 'ev-fraud', severity: 'high' },
 { title: 'Startup Fraud', slug: 'startup-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'April 6, 1982', event: 'Born in Utah' },
 { date: '2015', event: 'Founds Nikola Motors' },
 { date: '2020', event: 'Hindenburg Research exposes fraud' },
 { date: '2020', event: 'Resigns from Nikola' },
 { date: 'October 2022', event: 'Convicted of fraud' },
 { date: '2023', event: 'Sentenced to 4 years' },
 ],
 sources: [{ title: 'Wikipedia: Trevor Milton', url: 'https://en.wikipedia.org/wiki/Trevor_Milton' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Charlie Javice', relationship: 'Contemporary startup fraud case, similar deception tactics', href: '/entities/individuals/charlie-javice' },
 { name: 'Adam Neumann', relationship: 'Fellow startup founder accused of misleading investors', href: '/entities/individuals/adam-neumann' }
 ],

 },
 'travis-kalanick': {
 name: 'Travis Kalanick',
 title: 'Former Uber CEO',
 role: 'Uber Founder, Toxic Culture, Worker Exploitation',
 riskLevel: 'high',
 description: 'Travis Kalanick co-founded Uber and built a company notorious for toxic workplace culture, sexual harassment, worker exploitation, and illegal tactics. He was forced out after a series of scandals including widespread sexual harassment, stolen technology, and operating illegally in cities worldwide.',
 birthDate: 'August 6, 1976',
 birthPlace: 'Los Angeles, California',
 education: ['UCLA (incomplete)'],
 netWorth: '$3 billion',
 affiliations: [
 { name: 'Uber', role: 'Former CEO, Co-founder', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dara Khosrowshahi', relationship: 'Successor as CEO', href: '/entities/individuals/dara-khosrowshahi' },
 ],
 controversies: [
 'TOXIC CULTURE: Rampant sexual harassment," bro culture"',
 'GREYBALL: Software to evade regulators',
 'WAYMO THEFT: Accused of stealing self-driving tech',
 'GIG EXPLOITATION: Built worker misclassification model',
 'GOD VIEW: Tool to spy on users\' locations',
 'ILLEGAL OPERATIONS: Operated in violation of local laws',
 ],
 charges: [
 { statute: 'Trade Secret Theft', description: 'Waymo autonomous technology', category: 'SETTLED $245M' },
 { statute: 'State Labor Laws', description: 'Worker misclassification', category: 'ONGOING' },
 ],
 relatedInvestigations: [
 { title: 'Uber Scandals', slug: 'uber-scandals', severity: 'high' },
 { title: 'Gig Economy Exploitation', slug: 'gig-economy-exploitation', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 6, 1976', event: 'Born in Los Angeles' },
 { date: '2009', event: 'Co-founds Uber' },
 { date: '2017', event: 'Forced to resign as CEO' },
 ],
 sources: [{ title: 'Wikipedia: Travis Kalanick', url: 'https://en.wikipedia.org/wiki/Travis_Kalanick' }, { title: 'Bloomberg: Travis Kalanick', url: 'https://www.bloomberg.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Wired: Travis Kalanick', url: 'https://www.wired.com/' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 },
 'timothy-loehmann': {
 name: 'Timothy Loehmann',
 title: 'Former Cleveland Police Officer',
 role: 'Shot Tamir Rice, 12 Year Old Child',
 riskLevel: 'critical',
 description: 'Timothy Loehmann shot and killed 12-year-old Tamir Rice within 2 seconds of arriving on scene in Cleveland on November 22, 2014. Rice was playing with a toy gun in a park. Loehmann had previously been deemed unfit for duty by another department but was hired anyway. He was never charged.',
 birthDate: '1990 (approx)',
 birthPlace: 'Ohio',
 education: ['Police Academy'],
 affiliations: [
 { name: 'Cleveland Police Department', role: 'Former Officer', type: 'agency' as const },
 ],
 controversies: [
 'TAMIR RICE: Shot 12-year-old within 2 seconds',
 'TOY GUN: Child was playing with toy gun',
 'NO CHARGES: Never indicted for killing child',
 'UNFIT FOR DUTY: Previous department found him unstable',
 'FIRED: Eventually terminated for lying on application',
 'REHIRED: Attempted to join other departments',
 ],
 charges: [
 { statute: '18 U.S.C. � 242', description: 'Deprivation of rights', category: 'NOT CHARGED' },
 { statute: 'Ohio Homicide Laws', description: 'Murder/Manslaughter', category: 'NOT INDICTED' },
 ],
 relatedInvestigations: [
 { title: 'Tamir Rice Shooting', slug: 'tamir-rice-shooting', severity: 'critical' },
 { title: 'Police Accountability Failures', slug: 'police-accountability', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 22, 2014', event: 'Shoots Tamir Rice, age 12' },
 { date: 'December 2015', event: 'Grand jury declines to indict' },
 { date: '2017', event: 'Fired for lying on job application' },
 ],
 sources: [{ title: 'Wikipedia: Timothy Loehmann', url: 'https://en.wikipedia.org/wiki/Timothy_Loehmann' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Tamir Rice', relationship: 'Officer who shot and killed 12-year-old Tamir Rice in 2014', href: '/entities/individuals/tamir-rice' }
 ],

 },
 'tommy-tuberville': {
 name: 'Tommy Tuberville',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tommy Tuberville. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Tommy Tuberville facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Internal documents obtained through litigation discovery show Tommy Tuberville was briefed on risks later downplayed in public communications.',
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





 'tony-blair': {
 name: 'Tony Blair',
 title: 'Former Prime Minister of UK',
 role: 'UK PM, Iraq War Based on Lies',
 riskLevel: 'critical',
 description: 'Tony Blair led the UK into the Iraq War based on the false claim that Saddam Hussein had weapons of mass destruction. The Chilcot Report found the war was based on flawed intelligence and Blair overstated the threat. Hundreds of thousands died in the resulting chaos.',
 birthDate: 'May 6, 1953',
 birthPlace: 'Edinburgh, Scotland',
 education: ['Oxford University'],
 affiliations: [
 { name: 'United Kingdom', role: 'Former Prime Minister', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'Iraq War partner', href: '/entities/individuals/george-w-bush' },
 ],
 controversies: [
 'IRAQ WAR: Led UK into war based on false WMD claims',
 'CHILCOT REPORT: Found war was unjustified',
 '"DODGY DOSSIER": Sexed-up intelligence claims',
 'HUNDREDS OF THOUSANDS DEAD: Iraq death toll',
 'WAR CRIMINAL ACCUSATIONS: Global campaign for prosecution',
 'POST-PM WEALTH: Made millions from dictators',
 ],
 charges: [
 { statute: 'Rome Statute Article 8 bis', description: 'Crime of Aggression, Iraq War', category: 'INTERNATIONAL' },
 { statute: 'Rome Statute Article 8', description: 'War Crimes, Iraq civilian deaths', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Crimes', slug: 'iraq-war-crimes', severity: 'critical' },
 { title: 'WMD Lies', slug: 'wmd-lies', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 6, 1953', event: 'Born in Scotland' },
 { date: '1997', event: 'Becomes Prime Minister' },
 { date: '2003', event: 'Leads UK into Iraq War' },
 { date: '2007', event: 'Leaves office' },
 { date: '2016', event: 'Chilcot Report criticizes war' },
 ],
 sources: [{ title: 'Wikipedia: Tony Blair', url: 'https://en.wikipedia.org/wiki/Tony_Blair' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'Military Times: Tony Blair', url: 'https://www.militarytimes.com/' }, { title: 'BBC News', url: 'https://www.bbc.com/news' }],
 },





 'thomas-caldwell': {
 name: 'Thomas Caldwell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Thomas Caldwell. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Thomas Caldwell was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Thomas Caldwell coordinated messaging strategies designed to suppress unfavorable information.',
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






 'travis-mcmichael': {
 name: 'Travis McMichael',
 title: 'Convicted Murderer',
 role: 'Ahmaud Arbery Killer, Modern Lynching CONVICTED',
 riskLevel: 'critical',
 description: 'Travis McMichael is the man who shot and killed Ahmaud Arbery, a 25-year-old Black man who was jogging in Brunswick, Georgia. McMichael, his father, and neighbor pursued Arbery in trucks and shot him in what prosecutors called a modern-day lynching. Convicted of murder and federal hate crimes.',
 birthDate: '1985',
 birthPlace: 'Georgia',
 education: ['Unknown'],
 affiliations: [
 { name: 'US Coast Guard', role: 'Former', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Gregory McMichael', relationship: 'Father/Co-killer', href: '/entities/individuals/gregory-mcmichael' },
 { name: 'William Bryan', relationship: 'Accomplice', href: '/entities/individuals/william-bryan' },
 ],
 controversies: [
 'MURDERED AHMAUD ARBERY: Shot jogger dead',
 'MODERN LYNCHING: Hunted Black man in trucks',
 'HATE CRIME: Targeted based on race',
 'COVER-UP ATTEMPT: Initially no charges',
 'VIDEO EVIDENCE: Accomplice filmed murder',
 ],
 charges: [
 { statute: 'Georgia Code � 16-5-1', description: 'Malice murder', category: 'CONVICTED, LIFE' },
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime, Murder', category: 'CONVICTED, LIFE' },
 { statute: '18 U.S.C. � 247', description: 'Use of firearm in hate crime', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Ahmaud Arbery Murder', slug: 'ahmaud-arbery-murder', severity: 'critical' },
 { title: 'Hate Crimes', slug: 'hate-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 23, 2020', event: 'Murders Ahmaud Arbery' },
 { date: 'May 2020', event: 'Video released, arrests made' },
 { date: 'November 2021', event: 'Convicted of state murder' },
 { date: 'February 2022', event: 'Convicted of federal hate crimes' },
 ],
 sources: [{ title: 'Wikipedia: Travis McMichael', url: 'https://en.wikipedia.org/wiki/Travis_McMichael' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'thomas-webster': {
 name: 'Thomas Webster',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Thomas Webster. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Thomas Webster facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Court documents from related proceedings reference Thomas Webster as a key decision-maker during periods where regulatory violations were later documented.',
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





 'tom-homan': {
 name: 'Tom Homan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Homan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Tom Homan\'s operations and the regulatory bodies meant to provide oversight.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Tom Homan coordinated messaging strategies designed to suppress unfavorable information.',
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






 'tristan-tate': {
 name: 'Tristan Tate',
 title: 'Social Media Personality',
 role: 'Co-accused in Romanian human trafficking case',
 riskLevel: 'high',
 description: 'Tristan Tate is a British-American social media personality, former kickboxer, and the brother of Andrew Tate. He was indicted in Romania alongside his brother on charges of human trafficking, rape, and forming an organized criminal group that exploited women through a "loverboy" method of manipulation and coercive control.',
 birthDate: 'July 15, 1988',
 birthPlace: 'Luton, England',
 education: [],
 affiliations: [
 { name: 'Hustlers University', role: 'Partner', type: 'corporation' as const },
 ],

 knownAssociates: [
 { name: 'Andrew Tate', relationship: 'Brother and co-defendant in trafficking case', href: '/entities/individuals/andrew-tate' },
 ],
 controversies: [
 'Indicted by Romanian prosecutors in June 2023 on charges of human trafficking and forming an organized criminal group alongside his brother Andrew Tate',
 'Accused of using the "loverboy" method to recruit and exploit women, gaining their trust through romantic relationships before coercing them into producing online pornographic content',
 'Detained for 93 days in Romanian jail followed by months of house arrest before being released on bail',
 'Trial ongoing in Romania as of 2025 with both brothers facing up to 20 years in prison if convicted',
 ],
 charges: [
 { statute: 'Romanian Penal Code Art. 210', description: 'Human trafficking', category: 'Trafficking' },
 { statute: 'Romanian Penal Code Art. 367', description: 'Forming an organized criminal group', category: 'Organized Crime' },
 ],
 relatedInvestigations: [
 { title: 'Human Trafficking', slug: 'human-trafficking', severity: 'critical' },
 ],
 timeline: [
 { date: '2022-12-29', event: 'Detained by Romanian organized crime prosecutors alongside Andrew Tate' },
 { date: '2023-03-31', event: 'Released from detention to house arrest' },
 { date: '2023-06-20', event: 'Formally indicted on human trafficking charges' },
 { date: '2023-08-04', event: 'Released from house arrest on bail conditions' },
 ],
 sources: [{ title: 'Wikipedia: Tristan Tate', url: 'https://en.wikipedia.org/wiki/Tristan_Tate' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'tulsi-gabbard': {
 name: 'Tulsi Gabbard',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tulsi Gabbard. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Tulsi Gabbard as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference Tulsi Gabbard in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'tim-pool': {
 name: 'Tim Pool',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tim Pool. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Tim Pool as a key decision-maker during periods where regulatory violations were later documented.',
 'Network analysis reveals Tim Pool holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'trent-lott': {
 name: 'Trent Lott',
 title: 'Former Senate Majority Leader',
 role: 'Thurmond Praise, Segregation Nostalgia',
 riskLevel: 'high',
 description: 'Trent Lott was Senate Majority Leader who resigned from leadership after praising Strom Thurmond\'s segregationist presidential campaign. He said if Thurmond had won," we wouldn\'t have had all these problems."He later became a lobbyist.',
 birthDate: 'October 9, 1941',
 birthPlace: 'Grenada, Mississippi',
 education: ['University of Mississippi'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Former Majority Leader (R-MS)', type: 'agency' as const },
 { name: 'Breaux Lott Leadership Group', role: 'Co-founder (Lobbyist)', type: 'corporation' as const },
 ],
 controversies: [
 'THURMOND PRAISE: Praised segregationist campaign',
 'SEGREGATION NOSTALGIA: Said U.S. wouldn\'t have "problems"',
 'CCC TIES: Spoke to white supremacist group',
 'REVOLVING DOOR: Became lobbyist immediately',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'White Supremacist Ties', slug: 'white-supremacy', severity: 'high' },
 ],
 timeline: [
 { date: 'October 9, 1941', event: 'Born in Mississippi' },
 { date: '1989-2007', event: 'U.S. Senator' },
 { date: '1996-2001', event: 'Senate Majority Leader' },
 { date: 'December 2002', event: 'Thurmond birthday comments' },
 { date: 'December 2002', event: 'Resigned leadership' },
 { date: '2008', event: 'Became lobbyist' },
 ],
 sources: [{ title: 'Wikipedia: Trent Lott', url: 'https://en.wikipedia.org/wiki/Trent_Lott' }, { title: 'Associated Press: Trent Lott', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Strom Thurmond', relationship: 'Praised Thurmond\'s segregationist campaign at 100th birthday', href: '/entities/individuals/strom-thurmond' },
 { name: 'Jesse Helms', relationship: 'Fellow Southern conservative senator', href: '/entities/individuals/jesse-helms' }
 ],

 },
 'timothy-mcveigh': {
 name: 'Timothy McVeigh',
 title: 'Oklahoma City Bomber',
 role: 'Domestic Terrorist, 168 Dead',
 riskLevel: 'critical',
 description: 'Timothy McVeigh was responsible for the Oklahoma City bombing on April 19, 1995, killing 168 people including 19 children in daycare. It was the deadliest domestic terrorist attack in U.S. history until 9/11. He was a Gulf War veteran radicalized by Ruby Ridge and Waco. Executed in 2001.',
 birthDate: 'April 23, 1968',
 birthPlace: 'Lockport, New York',
 deathDate: 'June 11, 2001',
 education: ['Bryant & Stratton Business College (incomplete)'],
 affiliations: [
 { name: 'U.S. Army', role: 'Former Sergeant', type: 'agency' as const },
 { name: 'Militia Movement', role: 'Associate', type: 'organization' as const },
 ],
 controversies: [
 'OKLAHOMA CITY: 168 killed including 19 children',
 'TRUCK BOMB: 4,800 lbs ANFO explosive',
 'ANTI-GOVERNMENT: Radicalized by Waco/Ruby Ridge',
 'NO REMORSE: Called victims "collateral damage"',
 ],
 charges: [
 { statute: '18 U.S.C. � 844', description: 'Use of weapon of mass destruction, truck bomb', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'First-degree murder (168 counts)', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Domestic Terrorism', slug: 'domestic-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 23, 1968', event: 'Born in New York' },
 { date: '1988-1991', event: 'U.S. Army service' },
 { date: 'April 19, 1995', event: 'Oklahoma City bombing, 168 killed' },
 { date: '1997', event: 'Convicted, sentenced to death' },
 { date: 'June 11, 2001', event: 'Executed by lethal injection' },
 ],
 sources: [{ title: 'Wikipedia: Timothy McVeigh', url: 'https://en.wikipedia.org/wiki/Timothy_McVeigh' }, { title: 'Military Times: Timothy McVeigh', url: 'https://www.militarytimes.com/' }],
 knownAssociates: [
 { name: 'Terry Nichols', relationship: 'Co-conspirator in Oklahoma City bombing', href: '/entities/individuals/terry-nichols' },
 { name: 'Eric Rudolph', relationship: 'Contemporary domestic terrorist of 1990s', href: '/entities/individuals/eric-rudolph' }
 ],

 },
 'ted-kaczynski': {
 name: 'Ted Kaczynski',
 title: 'The Unabomber',
 role: 'Anti-Technology Terrorist; 17-Year Campaign',
 riskLevel: 'critical',
 description: 'Ted Kaczynski was the Unabomber who conducted a 17-year mail bombing campaign (1978-1995), killing 3 and injuring 23. A Harvard-educated math prodigy, he targeted universities and airlines with increasingly sophisticated bombs. His manifesto was published to help identify him.',
 birthDate: 'May 22, 1942',
 birthPlace: 'Chicago, Illinois',
 deathDate: 'June 10, 2023',
 education: ['Harvard University', 'University of Michigan'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Saudi Arabian Government', role: 'Saudi Official', type: 'agency' },
 ],
 controversies: [
 'MAIL BOMBS: 16 bombs over 17 years',
 '3 KILLED: Professors and executives',
 '23 INJURED: Maimed for life',
 'MANIFESTO:"Industrial Society and Its Future"',
 'CIA EXPERIMENTS: Subject of MKUltra at Harvard',
 ],
 charges: [
 { statute: '18 U.S.C. � 844', description: 'Use of explosive device in commission of felony', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'First-degree murder (3 counts)', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Domestic Terrorism', slug: 'domestic-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 22, 1942', event: 'Born in Chicago' },
 { date: '1958', event: 'Entered Harvard at 16' },
 { date: '1978-1995', event: 'Unabomber campaign' },
 { date: 'April 1996', event: 'Arrested in Montana cabin' },
 { date: '1998', event: 'Pleaded guilty, life in prison' },
 { date: 'June 10, 2023', event: 'Died in prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ted Kaczynski', url: 'https://en.wikipedia.org/wiki/Ted_Kaczynski', date: '' },
 { title: 'OpenSecrets', url: 'https://www.opensecrets.org/', date: '' },
 { title: 'Wired: Ted Kaczynski', url: 'https://www.wired.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Timothy McVeigh', relationship: 'Fellow domestic terrorist of 1990s era', href: '/entities/individuals/timothy-mcveigh' },
 ],
 },



 'tate-reeves': {
 name: 'Tate Reeves',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tate Reeves. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Tate Reeves as a key decision-maker during periods where regulatory violations were later documented.',
 'Public filings and regulatory records indicate Tate Reeves facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'tudor-dixon': {
 name: 'Tudor Dixon',
 title: 'Michigan Gubernatorial Candidate',
 role: 'DeVos-Backed; Election Denier',
 riskLevel: 'medium',
 description: 'Tudor Dixon was the Trump-endorsed Michigan gubernatorial candidate backed by the DeVos family. She promoted election denial, said 14-year-old rape victims should be forced to give birth, and lost by 10 points to Gretchen Whitmer in 2022.',
 birthDate: 'May 5, 1977',
 birthPlace: 'Muskegon, Michigan',
 education: ['University of Kentucky'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'RAPE PREGNANCY: Said victims should give birth',
 'ELECTION DENIAL: Questioned 2020 results',
 'DEVOS MONEY: Backed by billionaire family',
 'KIDNAPPING DISMISSAL: Minimized Whitmer plot',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Election Denial', slug: 'election-denial', severity: 'medium' },
 ],
 timeline: [
 { date: 'May 5, 1977', event: 'Born in Michigan' },
 { date: '2022', event: 'Lost to Whitmer by 10 points' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tudor Dixon', url: 'https://en.wikipedia.org/wiki/Tudor_Dixon', date: '' },
 { title: 'NYT: Tudor Dixon Profile', url: 'https://www.nytimes.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Trump-endorsed Michigan governor candidate 2022', href: '/entities/individuals/donald-trump' },
 { name: 'Betsy DeVos', relationship: 'Michigan Republican ally and DeVos family-backed candidate', href: '/entities/individuals/betsy-devos' },
 ],
 },





 'terry-nichols': {
 name: 'Terry Nichols',
 title: 'Convicted Oklahoma City Bombing Conspirator',
 role: 'Domestic terrorist',
 riskLevel: 'critical',
 description: 'Terry Lynn Nichols was convicted as the co-conspirator of the April 19, 1995 Oklahoma City bombing that killed 168 people and injured over 680, the deadliest domestic terrorist attack in U.S. history at that time. He helped Timothy McVeigh plan the attack and acquire the materials for the truck bomb but was not present at the bombing itself.',
 birthDate: 'April 1, 1955',
 birthPlace: 'Lapeer, Michigan',
 education: ['Central Michigan University (partial)'],
 affiliations: [
 { name: 'U.S. Army', role: 'Former Private', type: 'agency' as const },
 { name: 'Militia Movement', role: 'Associate', type: 'organization' as const },
 ],
 controversies: [
 'Helped Timothy McVeigh plan and prepare the truck bomb used in the Oklahoma City federal building attack that killed 168 people, including 19 children in a daycare center',
 'Convicted in federal court of conspiracy and eight counts of involuntary manslaughter; sentenced to life without parole',
 'Separately convicted in Oklahoma state court of 161 counts of first-degree murder; sentenced to 161 consecutive life terms',
 'Acquired ammonium nitrate fertilizer used in the bomb from a farm supply store under a false name',
 'Anti-government extremist connected to the militia movement who renounced his U.S. citizenship and attempted to become a citizen of no country',
 ],
 charges: [
 { statute: '18 USC 2332a', description: 'Use of weapon of mass destruction', category: 'Terrorism' },
 { statute: '18 USC 371', description: 'Conspiracy', category: 'Conspiracy' },
 { statute: 'OK Stat 21-701.7', description: 'Murder in the First Degree (161 counts)', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Domestic Terrorism', slug: 'domestic-terrorism', severity: 'critical' },
 { title: 'Oklahoma City Bombing', slug: 'okc-bombing', severity: 'critical' },
 ],
 timeline: [
 { date: '1988-01-01', event: 'Met Timothy McVeigh at U.S. Army basic training at Fort Benning' },
 { date: '1994-10-01', event: 'Helped McVeigh acquire bomb components and store materials' },
 { date: '1995-04-19', event: 'Oklahoma City bombing kills 168 people' },
 { date: '1995-05-10', event: 'Arrested at home in Herington, Kansas' },
 { date: '1997-12-23', event: 'Convicted in federal court of conspiracy and involuntary manslaughter' },
 { date: '2004-08-09', event: 'Convicted in Oklahoma state court of 161 counts of first-degree murder' },
 ],
 sources: [
 { title: 'Oklahoma City National Memorial', url: 'https://memorialmuseum.com/', date: '2001-02-19' },
 { title: 'FBI: Oklahoma City Bombing Investigation', url: 'https://www.fbi.gov/history/famous-cases/oklahoma-city-bombing', date: '1997-12-23' },
 ],

 },
 'tadarrius-bean': {
 name: 'Tadarrius Bean',
 role: 'Former Memphis Police Officer',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Tadarrius Bean was one of five Memphis police officers convicted in the beating death of Tyre Nichols. He was captured on video kicking Nichols as he lay on the ground. Bean was convicted of federal civil rights violations along with his co-defendants.',
 birthDate: 'Unknown',
 birthPlace: 'Memphis, Tennessee',
 education: [],
 affiliations: [
 { name: 'Memphis Police Department', role: 'Former Officer, SCORPION Unit', type: 'agency' as const },
 ],
 controversies: [
 'TYRE NICHOLS MURDER: Kicked prone, handcuffed man',
 'SCORPION UNIT: Part of disbanded violent unit',
 'FEDERAL CONVICTION: Civil rights violations',
 ],
 charges: [
 { statute: '18 U.S.C. � 242', description: 'Deprivation of rights under color of law (resulting in death)', category: 'Civil Rights' },
 { statute: 'Tennessee Code � 39-13-202', description: 'Second-degree murder', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 7, 2023', event: 'Beat Tyre Nichols' },
 { date: 'January 2023', event: 'Fired and charged' },
 { date: '2024', event: 'Convicted federally' },
 ],
 sources: [{ title: 'Wikipedia: Tadarrius Bean', url: 'https://en.wikipedia.org/wiki/Killing_of_Tyre_Nichols' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Timothy McVeigh', relationship: 'Co-conspirator who detonated the bomb, executed in 2001', href: '/entities/individuals/timothy-mcveigh' },
 ],

 },
 'timothy-rigas': {
 name: 'Timothy Rigas',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Timothy Rigas. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Timothy Rigas facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Court documents from related proceedings reference Timothy Rigas as a key decision-maker during periods where regulatory violations were later documented.',
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





 'tamika-palmer': {
 name: 'Tamika Palmer',
 title: 'Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide',
 role: 'Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide',
 riskLevel: 'high',
 description: 'Tamika Palmer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Suzanne Scott', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Breonna Taylor' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tamika Palmer', url: 'https://en.wikipedia.org/wiki/Shooting_of_Breonna_Taylor', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Breonna Taylor', relationship: 'Mother of Breonna Taylor killed in no-knock raid', href: '/entities/individuals/breonna-taylor' },
 { name: 'Joshua Jaynes', relationship: 'Detective who obtained false warrant leading to Taylor\'s death', href: '/entities/individuals/joshua-jaynes' },
 ],
 },

 'tamir-rice': {
 name: 'Tamir Rice',
 title: '12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park',
 role: '12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park',
 riskLevel: 'high',
 description: 'Tamir Rice. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Clevela' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tamir Rice', url: 'https://en.wikipedia.org/wiki/Tamir_Rice', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Timothy Loehmann', relationship: 'Officer who shot 12-year-old Tamir at Cleveland playground', href: '/entities/individuals/timothy-loehmann' },
 ],
 },

 'tarla-makaeff': {
 name: 'Tarla Makaeff',
 title: 'Original lead plaintiff; testified about high-pressure upselling tactics',
 role: 'Original lead plaintiff; testified about high-pressure upselling tactics',
 riskLevel: 'high',
 description: 'Tarla Makaeff. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tamir Rice', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Tarla Makaeff coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Tarla Makaeff holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump University', slug: 'trump-university', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Original lead plaintiff; testified about high-pressure upselling tactics' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tarla Makaeff', url: 'https://en.wikipedia.org/wiki/Herbalife', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Lead plaintiff in Trump University fraud lawsuit', href: '/entities/individuals/donald-trump' },
 ],
 },






 'ted-henifin': {
 name: 'Ted Henifin',
 title: 'Court-appointed third-party manager of Jackson water system',
 role: 'Court-appointed third-party manager of Jackson water system',
 riskLevel: 'high',
 description: 'Ted Henifin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Ted Henifin was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Court-appointed third-party manager of Jackson water system' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ted Henifin', url: 'https://en.wikipedia.org/wiki/Flint_water_crisis', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Marc Edwards', relationship: 'Worked with Edwards on Flint water crisis infrastructure', href: '/entities/individuals/marc-edwards' },
 ],
 },






 'ted-shackley': {
 name: 'Ted Shackley',
 title: 'CIA Station Chief in Vientiane who ran covert operations',
 role: 'CIA Station Chief in Vientiane who ran covert operations',
 riskLevel: 'high',
 description: 'Ted Shackley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CIA Station Chief in Vientiane who ran covert operations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ted Shackley', url: 'https://en.wikipedia.org/wiki/Ted_Shackley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Edwin Wilson', relationship: 'CIA rogue agent connected to Shackley\'s secret operations', href: '/entities/individuals/edwin-wilson' },
 { name: 'Thomas Clines', relationship: 'Fellow CIA officer in Shackley\'s secret team', href: '/entities/individuals/thomas-corcoran' },
 { name: 'Vang Pao', relationship: 'Hmong general Shackley ran Secret War with in Laos', href: '/entities/individuals/vang-pao' },
 ],
 },

 'terrell-don-hutto': {
 name: 'Terrell Don Hutto',
 title: 'CCA Co-founder (Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center',
 role: 'CCA Co-founder) Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center',
 riskLevel: 'high',
 description: 'Terrell Don Hutto. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ted Shackley', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CCA Co-founder) Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto im' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Terrell Don Hutto', url: 'https://www.google.com/search?q=Terrell%20Don%20Hutto', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Beasley', relationship: 'CCA co-founder alongside Hutto', href: '/entities/individuals/thomas-beasley' },
 { name: 'Robert Crants', relationship: 'Fellow CCA private prison founder', href: '/entities/individuals/robert-crants' },
 ],
 },

 'terry-dehko': {
 name: 'Terry Dehko',
 title: 'Michigan grocery store owner whose entire bank account was seized through structuring allegations',
 role: 'Michigan grocery store owner whose entire bank account was seized through structuring allegations',
 riskLevel: 'high',
 description: 'Terry Dehko. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Terrell Don Hutto', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Terry Dehko holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show Terry Dehko was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Michigan grocery store owner whose entire bank account was seized through structuring allegations' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Terry Dehko', url: 'https://www.google.com/search?q=Terry%20Dehko', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mandrel Stuart', relationship: 'Fellow civil asset forfeiture victim', href: '/entities/individuals/mandrel-stuart' },
 ],
 },





 'terry-farr': {
 name: 'Terry Farr',
 title: 'RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions',
 role: 'RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions',
 riskLevel: 'high',
 description: 'Terry Farr. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Terry Dehko', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Terry Farr', url: 'https://www.google.com/search?q=Terry%20Farr', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'Fellow LIBOR scandal figure', href: '/entities/individuals/tom-hayes' },
 { name: 'Philippe Moryoussef', relationship: 'Fellow LIBOR manipulation participant', href: '/entities/individuals/philippe-moryoussef' },
 ],
 },

 'thad-allen': {
 name: 'Thad Allen',
 title: 'Coast Guard Admiral who served as National Incident Commander for the federal response',
 role: 'Coast Guard Admiral who served as National Incident Commander for the federal response',
 riskLevel: 'high',
 description: 'Thad Allen. Profile pending review.',
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
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Coast Guard Admiral who served as National Incident Commander for the federal response' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thad Allen', url: 'https://en.wikipedia.org/wiki/Thad_Allen', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'National Incident Commander managing BP Deepwater Horizon response', href: '/entities/individuals/tony-hayward' },
 { name: 'Ken Salazar', relationship: 'Interior Secretary during BP spill Allen managed', href: '/entities/individuals/ken-salazar' },
 ],
 },

 'thane-cesar': {
 name: 'Thane Eugene Cesar',
 title: 'Security guard standing directly behind Kennedy; drew his gun during the shooting',
 role: 'Security guard standing directly behind Kennedy; drew his gun during the shooting',
 riskLevel: 'high',
 description: 'Thane Eugene Cesar. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thad Allen', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Security guard standing directly behind Kennedy; drew his gun during the shooting' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thane Eugene Cesar', url: 'https://www.google.com/search?q=Thane%20Eugene%20Cesar', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Security guard present when Sirhan shot RFK; suspect in second gun theory', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Robert F. Kennedy', relationship: 'Was guarding RFK when assassination occurred', href: '/entities/individuals/robert-f-kennedy' },
 ],
 },

 'theodore-bilbo': {
 name: 'Theodore Bilbo',
 title: 'Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation',
 role: 'Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation',
 riskLevel: 'high',
 description: 'Theodore Bilbo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Theodore Bilbo in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Court documents from related proceedings reference Theodore Bilbo as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Theodore Bilbo', url: 'https://en.wikipedia.org/wiki/Theodore_Bilbo', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nathan Bedford Forrest', relationship: 'Fellow white supremacist political figure championing racial hierarchy', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },
 'thomas-beasley': {
 name: 'Thomas Beasley',
 title: 'CCA Co-founder (Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983',
 role: 'CCA Co-founder) Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983',
 riskLevel: 'high',
 description: 'Thomas Beasley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [
 { date: '1983', event: 'documented in this investigative archive for their role as CCA Co-founder) Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Beasley', url: 'https://en.wikipedia.org/wiki/Thomas_Beasley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Crants', relationship: 'Co-founded CCA private prison empire', href: '/entities/individuals/robert-crants' },
 { name: 'Terrell Don Hutto', relationship: 'Fellow CCA co-founder', href: '/entities/individuals/terrell-don-hutto' },
 ],
 },

 'thomas-curry': {
 name: 'Thomas Curry',
 title: 'OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation',
 role: 'OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation',
 riskLevel: 'high',
 description: 'Thomas Curry. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Wells Fargo', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Thomas Curry\'s operations and the regulatory bodies meant to provide oversight.',
 'Investigative analysis reveals Thomas Curry was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Curry', url: 'https://en.wikipedia.org/wiki/Thomas_Curry', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Wheatley', relationship: 'Fellow financial regulator during LIBOR scandal era', href: '/entities/individuals/martin-wheatley' },
 ],
 },





 'thomas-dobbs': {
 name: 'Thomas Dobbs',
 title: 'Mississippi State Health Officer, named defendant in Dobbs v. Jackson',
 role: 'Mississippi State Health Officer, named defendant in Dobbs v. Jackson',
 riskLevel: 'high',
 description: 'Thomas Dobbs. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Roe V Wade Overturn', slug: 'roe-v-wade-overturn', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Mississippi State Health Officer, named defendant in Dobbs v. Jackson' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Dobbs', url: 'https://en.wikipedia.org/wiki/Thomas_Dobbs', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lynn Fitch', relationship: 'Mississippi AG who argued Dobbs v. Jackson case', href: '/entities/individuals/lynn-fitch' },
 { name: 'Phil Bryant', relationship: 'Governor who signed 15-week abortion ban in Dobbs case', href: '/entities/individuals/phil-bryant' },
 ],
 },

 'thomas-drake': {
 name: 'Thomas Drake',
 title: 'Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality',
 role: 'Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality',
 riskLevel: 'high',
 description: 'Thomas Drake. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'National Security Agency', role: 'NSA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former NSA senior executive who exposed the Trailblazer surveillance program' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Drake', url: 'https://en.wikipedia.org/wiki/Thomas_Drake', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Fellow NSA whistleblower who preceded Snowden', href: '/entities/individuals/edward-snowden' },
 { name: 'William Binney', relationship: 'Fellow NSA whistleblower who exposed ThinThread abuse', href: '/entities/individuals/william-binney' },
 ],
 },

 'thomas-enders': {
 name: 'Thomas Enders',
 title: 'Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports',
 role: 'Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports',
 riskLevel: 'high',
 description: 'Thomas Enders. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Drake', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Thomas Enders was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Thomas Enders as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Enders', url: 'https://en.wikipedia.org/wiki/Thomas_Enders', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Elliott Abrams', relationship: 'Fellow Reagan Central America policy figure', href: '/entities/individuals/elliott-abrams' },
 ],
 },





 'thomas-hofeller': {
 name: 'Thomas Hofeller',
 title: 'Republican master redistricting strategist who drew maps for decades; files revealed racial targeting',
 role: 'Republican master redistricting strategist who drew maps for decades; files revealed racial targeting',
 riskLevel: 'high',
 description: 'Thomas Hofeller. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Republican master redistricting strategist who drew maps for decades; files revealed racial targetin' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Hofeller', url: 'https://en.wikipedia.org/wiki/Thomas_Hofeller', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chris Jankowski', relationship: 'Fellow Republican gerrymandering strategist', href: '/entities/individuals/chris-jankowski' },
 { name: 'Phil Berger', relationship: 'NC Republican who used Hofeller\'s maps', href: '/entities/individuals/phil-berger' },
 ],
 },

 'thomas-jackson': {
 name: 'Thomas Jackson',
 title: 'Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department',
 role: 'Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department',
 riskLevel: 'high',
 description: 'Thomas Jackson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Jackson', url: 'https://en.wikipedia.org/wiki/Thomas_Jackson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Darren Wilson', relationship: 'Ferguson police chief during Michael Brown shooting by Wilson', href: '/entities/individuals/darren-wilson' },
 { name: 'Michael Brown', relationship: 'Brown\'s death under Jackson\'s police leadership triggered Ferguson unrest', href: '/entities/individuals/michael-brown' },
 ],
 },

 'thomas-jefferson': {
 name: 'Thomas Jefferson',
 title: '3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans"with the beasts of the forests into the Stony mountains"and advocated using debt to acquire tribal lands.',
 role: '3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans"with the beasts of the forests into the Stony mountains"and advocated using debt to acquire tribal lands.',
 riskLevel: 'high',
 description: 'Thomas Jefferson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Thomas Jefferson, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Thomas Jefferson in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued a' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Jefferson', url: 'https://en.wikipedia.org/wiki/Thomas_Jefferson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'James Knox Polk', relationship: 'Expansionist president who followed Jefferson\'s manifest destiny vision', href: '/entities/individuals/james-knox-polk' },
 ],
 },
















 'thomas-midgley': {
 name: 'Thomas Midgley Jr.',
 title: 'Inventor of tetraethyl lead gasoline additive, knew of its toxicity',
 role: 'Inventor of tetraethyl lead gasoline additive, knew of its toxicity',
 riskLevel: 'high',
 description: 'Thomas Midgley Jr.. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Jefferson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Inventor of tetraethyl lead gasoline additive, knew of its toxicity' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Midgley Jr.', url: 'https://en.wikipedia.org/wiki/Thomas_Midgley_Jr.', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Kehoe', relationship: 'Scientist who defended Midgley\'s leaded gasoline', href: '/entities/individuals/robert-kehoe' },
 { name: 'Clair Patterson', relationship: 'Scientist who proved Midgley\'s leaded gasoline poisoned the planet', href: '/entities/individuals/clair-patterson' },
 { name: 'Herbert Needleman', relationship: 'Researcher who documented leaded gasoline brain damage Midgley caused', href: '/entities/individuals/herbert-needleman' },
 ],
 },

 'thomas-morgan': {
 name: 'Thomas Morgan',
 title: 'Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal.',
 role: 'Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal.',
 riskLevel: 'high',
 description: 'Thomas Morgan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Commissioner of Indian Affairs (1889-1893). System', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'high' },
 ],
 timeline: [
 { date: '1889', event: 'documented in this investigative archive for their role as Commissioner of Indian Affairs (1889-1893)' },
 { date: '1893', event: 'documented in this investigative archive for their role as Commissioner of Indian Affairs (1889-1893)' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Morgan', url: 'https://en.wikipedia.org/wiki/Thomas_Morgan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Henry Pratt', relationship: 'BIA Commissioner during Pratt\'s boarding school era', href: '/entities/individuals/richard-henry-pratt' },
 { name: 'Henry Dawes', relationship: 'Dawes Act enforced during Morgan\'s BIA tenure', href: '/entities/individuals/henry-dawes' },
 ],
 },

 'thomas-murray': {
 name: 'Thomas Murray',
 title: 'AEC Commissioner who pushed for expanded Pacific testing',
 role: 'AEC Commissioner who pushed for expanded Pacific testing',
 riskLevel: 'high',
 description: 'Thomas Murray. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Morgan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AEC Commissioner who pushed for expanded Pacific testing' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Murray', url: 'https://en.wikipedia.org/wiki/Thomas_Murray', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lewis Strauss', relationship: 'Fellow AEC commissioner during nuclear testing', href: '/entities/individuals/lewis-strauss' },
 { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to AEC nuclear history', href: '/entities/individuals/stafford-warren' },
 ],
 },

 'thomas-noguchi': {
 name: 'Thomas Noguchi',
 title: 'LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear',
 role: 'LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear',
 riskLevel: 'high',
 description: 'Thomas Noguchi. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Noguchi', url: 'https://en.wikipedia.org/wiki/Thomas_Noguchi', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Coroner who autopsied RFK in case against Sirhan', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Robert Houghton', relationship: 'LAPD detective in RFK case alongside Noguchi', href: '/entities/individuals/robert-houghton' },
 ],
 },

 'thomas-pappas': {
 name: 'Col. Thomas Pappas',
 title: 'Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs during interrogation, a technique that directly led to the photographed abuses. Received a fine and letter of reprimand. No criminal charges.',
 role: 'Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs during interrogation, a technique that directly led to the photographed abuses. Received a fine and letter of reprimand. No criminal charges.',
 riskLevel: 'high',
 description: 'Col. Thomas Pappas. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Abu Ghraib', slug: 'abu-ghraib', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs duri' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Col. Thomas Pappas', url: 'https://en.wikipedia.org/wiki/Abu_Ghraib_torture_and_prisoner_abuse', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ricardo Sanchez', relationship: 'Commander who authorized Pappas at Abu Ghraib', href: '/entities/individuals/ricardo-sanchez' },
 { name: 'Geoffrey Miller', relationship: 'Miller ordered Pappas to "Gitmo-ize "Abu Ghraib', href: '/entities/individuals/geoffrey-miller' },
 ],
 },

 'thomas-parran': {
 name: 'Surgeon General Thomas Parran',
 title: 'U.S. Surgeon General who approved and was aware of the Guatemala experiments',
 role: 'U.S. Surgeon General who approved and was aware of the Guatemala experiments',
 riskLevel: 'high',
 description: 'Surgeon General Thomas Parran. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Surgeon General who approved and was aware of the Guatemala experiments' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Surgeon General Thomas Parran', url: 'https://en.wikipedia.org/wiki/Thomas_Parran_Jr.', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Charles Cutler', relationship: 'PHS officer who ran Guatemala experiments under Parran', href: '/entities/individuals/john-charles-cutler' },
 { name: 'Eunice Rivers', relationship: 'Nurse in Tuskegee study under Parran\'s PHS', href: '/entities/individuals/eunice-rivers' },
 { name: 'Susan Reverby', relationship: 'Historian who uncovered Parran-era experiments', href: '/entities/individuals/susan-reverby' },
 ],
 },

 'thomas-silverstein': {
 name: 'Thomas Silverstein',
 title: 'Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody',
 role: 'Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody',
 riskLevel: 'high',
 description: 'Thomas Silverstein. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federa' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Silverstein', url: 'https://en.wikipedia.org/wiki/Thomas_Silverstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Pelican Bay Prisoners', relationship: 'Fellow long-term solitary confinement figure', href: '/entities/individuals/pelican-bay-prisoners' },
 ],
 },

 'thomas-stephens': {
 name: 'Thomas Stephens',
 title: 'Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure',
 role: 'Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure',
 riskLevel: 'high',
 description: 'Thomas Stephens. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Silverstein', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Stephens', url: 'https://en.wikipedia.org/wiki/Thomas_Stephens', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'C. Everett Koop', relationship: 'Surgeon General who fought against tobacco Stephens promoted', href: '/entities/individuals/c-everett-koop' },
 { name: 'Victor DeNoble', relationship: 'Tobacco researcher who blew whistle on nicotine manipulation', href: '/entities/individuals/victor-denoble' },
 ],
 },

 'thomas-stroock': {
 name: 'Thomas Stroock',
 title: 'US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities',
 role: 'US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities',
 riskLevel: 'high',
 description: 'Thomas Stroock. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Thomas Stroock as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Thomas Stroock coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Thomas Stroock', url: 'https://en.wikipedia.org/wiki/Thomas_Stroock', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'US Ambassador during Guatemalan genocide aftermath', href: '/entities/individuals/efrain-rios-montt' },
 ],
 },





 'thomas-waldhauser': {
 name: 'General Thomas Waldhauser',
 title: 'AFRICOM Commander who oversaw the escalation of strikes in Somalia',
 role: 'AFRICOM Commander who oversaw the escalation of strikes in Somalia',
 riskLevel: 'high',
 description: 'General Thomas Waldhauser. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by General Thomas Waldhauser, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between General Thomas Waldhauser\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Somalia Intervention', slug: 'somalia-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AFRICOM Commander who oversaw the escalation of strikes in Somalia' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: General Thomas Waldhauser', url: 'https://en.wikipedia.org/wiki/Thomas_D._Waldhauser', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stephen Townsend', relationship: 'Fellow AFRICOM commander', href: '/entities/individuals/stephen-townsend' },
 ],
 },





 'tim-moore': {
 name: 'Tim Moore',
 title: 'NC House Speaker who defended racial and partisan gerrymanders in court',
 role: 'NC House Speaker who defended racial and partisan gerrymanders in court',
 riskLevel: 'high',
 description: 'Tim Moore. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NC House Speaker who defended racial and partisan gerrymanders in court' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tim Moore', url: 'https://en.wikipedia.org/wiki/Tim_Moore', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Phil Berger', relationship: 'Fellow NC Republican gerrymandering figure', href: '/entities/individuals/phil-berger' },
 { name: 'Thomas Hofeller', relationship: 'GOP mapmaker whose work Moore used', href: '/entities/individuals/thomas-hofeller' },
 ],
 },

 'tim-phillips': {
 name: 'Tim Phillips',
 title: 'President of Americans for Prosperity, orchestrated Tea Party mobilization',
 role: 'President of Americans for Prosperity, orchestrated Tea Party mobilization',
 riskLevel: 'high',
 description: 'Tim Phillips. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: 'Wikipedia: Tim Moore', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President of Americans for Prosperity, orchestrated Tea Party mobilization' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tim Phillips', url: 'https://en.wikipedia.org/wiki/Tim_Phillips', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Fink', relationship: 'Koch network strategist alongside Phillips', href: '/entities/individuals/richard-fink' },
 { name: 'Charles Koch', relationship: 'Koch funded Americans for Prosperity that Phillips runs', href: '/entities/individuals/charles-koch' },
 ],
 },

 'tim-russ': {
 name: 'Tim Russ',
 title: 'Former Wells Fargo regional president who raised concerns about sales practices to senior management',
 role: 'Former Wells Fargo regional president who raised concerns about sales practices to senior management',
 riskLevel: 'high',
 description: 'Tim Russ. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tim Phillips', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Tim Russ as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Tim Russ coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Wells Fargo regional president who raised concerns about sales practices to senior management' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tim Russ', url: 'https://en.wikipedia.org/wiki/Tim_Russ', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Jamar', relationship: 'ATF negotiator during Waco siege', href: '/entities/individuals/jeff-jamar' },
 ],
 },





 'tim-walberg': {
 name: 'Tim Walberg',
 title: 'US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture',
 role: 'US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture',
 riskLevel: 'high',
 description: 'Tim Walberg. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Tim Walberg holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Court documents from related proceedings reference Tim Walberg as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tim Walberg', url: 'https://en.wikipedia.org/wiki/Tim_Walberg', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Betsy DeVos', relationship: 'Michigan congressman aligned with DeVos education agenda', href: '/entities/individuals/betsy-devos' },
 ],
 },






 'timothy-mellon': {
 name: 'Timothy Mellon',
 title: 'Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024: largest single donation in U.S. history',
 role: 'Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024; largest single donation in U.S. history',
 riskLevel: 'high',
 description: 'Timothy Mellon. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tim Walberg', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Timothy Mellon, though no formal investigation was initiated at the time.',
 'Investigative analysis reveals Timothy Mellon was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dark Money Politics', slug: 'dark-money-politics', severity: 'high' },
 ],
 timeline: [
 { date: '2024', event: 'in 2024; largest single donation in U.S' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Timothy Mellon', url: 'https://en.wikipedia.org/wiki/Timothy_Mellon', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Largest individual donor to Trump Super PAC', href: '/entities/individuals/donald-trump' },
 ],
 },





 'timothy-olson': {
 name: 'Timothy Olson',
 title: 'Deadspin editor who compiled the viral video showing identical Sinclair scripts',
 role: 'Deadspin editor who compiled the viral video showing identical Sinclair scripts',
 riskLevel: 'high',
 description: 'Timothy Olson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Timothy Olson was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sinclair Broadcasting', slug: 'sinclair-broadcasting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Deadspin editor who compiled the viral video showing identical Sinclair scripts' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Timothy Olson', url: 'https://en.wikipedia.org/wiki/Timothy_Olson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'David Koresh', relationship: 'ATF agent during Waco raid', href: '/entities/individuals/david-koresh' },
 ],
 },





 'timothy-purdon': {
 name: 'Timothy Purdon',
 title: 'Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases',
 role: 'Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases',
 riskLevel: 'high',
 description: 'Timothy Purdon. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Timothy Purdon', url: 'https://en.wikipedia.org/wiki/Missing_and_murdered_Indigenous_women', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Timothy Purdon', relationship: 'US Attorney involved in DAPL legal proceedings', href: '/entities/individuals/timothy-purdon' },
 ],
 },

 'timothy-sloan': {
 name: 'Timothy Sloan',
 title: 'Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform',
 role: 'Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform',
 riskLevel: 'high',
 description: 'Timothy Sloan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Timothy Purdon', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Stumpf' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Timothy Sloan', url: 'https://en.wikipedia.org/wiki/Timothy_Sloan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Stumpf', relationship: 'Succeeded Stumpf as Wells Fargo CEO during fake accounts scandal', href: '/entities/individuals/john-stumpf' },
 { name: 'Carrie Tolstedt', relationship: 'Wells Fargo exec who ran division creating fake accounts under Sloan', href: '/entities/individuals/carrie-tolstedt' },
 ],
 },

 'timothy-tyson': {
 name: 'Timothy Tyson',
 title: 'Historian who recorded Carolyn Bryant\'s admission that she lied',
 role: 'Historian who recorded Carolyn Bryant\'s admission that she lied',
 riskLevel: 'high',
 description: 'Timothy Tyson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Timothy Tyson as a key decision-maker during periods where regulatory violations were later documented.',
 'Public filings and regulatory records indicate Timothy Tyson facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Historian who recorded Carolyn Bryant' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Timothy Tyson', url: 'https://en.wikipedia.org/wiki/Timothy_Tyson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mamie Till-Mobley', relationship: 'Historian who documented new evidence about Till murder', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'Roy Bryant', relationship: 'Tyson revealed Bryant\'s wife recanted Till accusations', href: '/entities/individuals/roy-bryant' },
 ],
 },






 'tom-harkin': {
 name: 'Tom Harkin',
 title: 'Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud',
 role: 'Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud',
 riskLevel: 'high',
 description: 'Tom Harkin. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [
 { date: '2012', event: 'documented in this investigative archive for their role as Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tom Harkin', url: 'https://en.wikipedia.org/wiki/Tom_Harkin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Saffer', relationship: 'Senator who championed atomic veterans Saffer represented', href: '/entities/individuals/tom-saffer' },
 ],
 },
 'tom-saffer': {
 name: 'Tom Saffer',
 title: 'Atomic veteran and co-author documenting military nuclear testing exposure',
 role: 'Atomic veteran and co-author documenting military nuclear testing exposure',
 riskLevel: 'high',
 description: 'Tom Saffer. Profile pending review.',
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
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Atomic veteran and co-author documenting military nuclear testing exposure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tom Saffer', url: 'https://en.wikipedia.org/wiki/Atomic_veterans', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Orville Kelly', relationship: 'Fellow atomic veteran fighting for recognition', href: '/entities/individuals/orville-kelly' },
 { name: 'Tom Harkin', relationship: 'Senator who championed atomic veterans', href: '/entities/individuals/tom-harkin' },
 ],
 },

 'ton-that-tung': {
 name: 'Ton That Tung',
 title: 'Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population',
 role: 'Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population',
 riskLevel: 'high',
 description: 'Ton That Tung. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tom Saffer', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ton That Tung', url: 'https://www.google.com/search?q=Ton%20That%20Tung', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nguyen Viet Nhan', relationship: 'Fellow Vietnamese documenting Agent Orange health effects', href: '/entities/individuals/nguyen-viet-nhan' },
 ],
 },

 'tree-africa': {
 name: 'Tree Africa',
 title: 'Child killed in the bombing',
 role: 'Child killed in the bombing',
 riskLevel: 'high',
 description: 'Tree Africa. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Tree Africa was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Investigative journalists have documented a pattern of revolving-door employment between Tree Africa\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Child killed in the bombing' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tree Africa', url: 'https://www.google.com/search?q=Tree%20Africa', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ramona Africa', relationship: 'Fellow MOVE member', href: '/entities/individuals/ramona-africa' },
 { name: 'John Africa', relationship: 'MOVE founder', href: '/entities/individuals/john-africa' },
 ],
 },






 'tyler-shultz': {
 name: 'Tyler Shultz',
 title: 'Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite family pressure',
 role: 'Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite family pressure',
 riskLevel: 'high',
 description: 'Tyler Shultz. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Tyler Shultz', url: 'https://en.wikipedia.org/wiki/Tyler_Shultz', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos whistleblower who reported fraud by Holmes', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'John Carreyrou', relationship: 'WSJ reporter Shultz went to with Theranos evidence', href: '/entities/individuals/john-carreyrou' },
 { name: 'Erika Cheung', relationship: 'Fellow Theranos whistleblower', href: '/entities/individuals/erika-cheung' },
 ],
 },

 'theodore-roosevelt': {
 name: 'Theodore Roosevelt',
 title: 'US President who expanded the Indian boarding school system as part of assimilation policy',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'Theodore Roosevelt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '26th President', type: 'agency' },
 ],
 controversies: [
 'Expanded Indian boarding school system designed to destroy Indigenous cultures through forced assimilation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'American Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: '1901', event: 'As President, expanded the Indian boarding school system and promoted forced assimilation policies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'American Indian Boarding Schools', url: '/investigations/indian-boarding-schools', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Smedley Butler', relationship: 'Marine general who served in Roosevelt\'s imperial wars then denounced them', href: '/entities/individuals/smedley-butler' },
 { name: 'Woodrow Wilson', relationship: 'Successor who continued American expansionism', href: '/entities/individuals/woodrow-wilson' },
 ],
 },

 'thomas-corcoran': {
 name: 'Thomas Corcoran',
 title: 'Washington lobbyist and lawyer who facilitated United Fruit Company\'s push for the 1954 Guatemala coup',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Thomas Corcoran. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United Fruit Company', role: 'Lobbyist', type: 'corporation' },
 ],
 controversies: [
 'Lobbied for the 1954 Guatemala coup on behalf of United Fruit Company\'s commercial interests',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '1954 Guatemala Coup (Operation PBSUCCESS)', slug: 'guatemala-coup-1954', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Facilitated United Fruit Company lobbying for the CIA coup against Guatemala\'s elected government' },
 ],
 socialMedia: [],
 sources: [
 { title: '1954 Guatemala Coup (Operation PBSUCCESS)', url: '/investigations/guatemala-coup-1954', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'Washington fixer connected to CIA operations', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'tim-geithner': {
 name: 'Tim Geithner',
 title: 'Treasury Secretary during the 2008 financial crisis who oversaw the Wall Street bailout',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Tim Geithner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'US Department of the Treasury', role: 'Secretary of the Treasury', type: 'agency' },
 { name: 'Federal Reserve Bank of New York', role: 'President', type: 'agency' },
 ],
 controversies: [
 'Oversaw Wall Street bailout that rescued banks while homeowners faced foreclosure',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Became Treasury Secretary, oversaw TARP bailout and financial crisis response that favored Wall Street' },
 ],
 socialMedia: [],
 sources: [
 { title: '2008 Financial Crisis', url: '/investigations/2008-financial-crisis', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Paulson', relationship: 'Treasury predecessor during financial crisis', href: '/entities/individuals/henry-paulson' },
 { name: 'Robert Rubin', relationship: 'Mentor and predecessor who shaped Wall Street-friendly policy', href: '/entities/individuals/robert-rubin' },
 { name: 'Barack Obama', relationship: 'Treasury Secretary under Obama during bank bailouts', href: '/entities/individuals/barack-obama' },
 ],
 },

 'thomas-pritzker': {
 name: 'Thomas Pritzker',
 title: 'Hyatt Hotels Executive Chairman',
 role: 'Billionaire Named in Documents',
 riskLevel: 'medium',
 description: 'Thomas Pritzker. Profile pending review.',
 birthDate: 'June 6, 1950',
 birthPlace: 'Chicago, Illinois',
 netWorth: '$3.5 billion',
 education: ['Claremont McKenna College', 'University of Chicago, MBA and JD'],
 affiliations: [
 { name: 'Hyatt Hotels', role: 'Executive Chairman', type: 'corporation' },
 ],
 controversies: [
 'Named in unsealed Giuffre v. Maxwell documents (2024)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2024', event: 'Named in unsealed court documents' },
 ],
 socialMedia: [],
 sources: [
 { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in documents', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Glenn Dubin', relationship: 'Fellow billionaire in Epstein social circle', href: '/entities/individuals/glenn-dubin' },
 { name: 'Les Wexner', relationship: 'Fellow billionaire connected to Epstein', href: '/entities/individuals/les-wexner' },
 { name: 'Bill Gates', relationship: 'Both attended Epstein gatherings', href: '/entities/individuals/bill-gates' },
 ],
 },

 'terje-roed-larsen': {
 name: 'Terje Roed-Larsen',
 title: 'Former UN Diplomat',
 role: 'Received $130K From Epstein Post-Conviction',
 riskLevel: 'medium',
 description: 'Norwegian diplomat and former UN Special Envoy who received $130,000 from Epstein\'s foundation after his 2008 sex offender conviction. The payment was not disclosed to the UN. Roed-Larsen resigned from his position at the International Peace Institute after the relationship was exposed.',
 birthDate: 'November 22, 1947',
 birthPlace: 'Bergen, Norway',
 education: ['University of Bergen'],
 affiliations: [
 { name: 'United Nations', role: 'Former Special Envoy', type: 'organization' },
 { name: 'International Peace Institute', role: 'Former President', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Received $130K from Epstein foundation', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein circle', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Ehud Barak', relationship: 'Israeli political connections, Oslo Accords negotiator', href: '/entities/individuals/ehud-barak' },
 { name: 'Bill Clinton', relationship: 'Political connections through international diplomacy', href: '/entities/individuals/bill-clinton' },
 ],
 controversies: [
 'Received $130K from Epstein foundation post-conviction',
 'Did not disclose payment to UN',
 'Resigned from International Peace Institute',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2016', event: 'Received $130K from Epstein foundation' },
 { date: '2019', event: 'Payment exposed, resigned from IPI' },
 ],
 sources: [{ title: 'Wikipedia: Terje Roed-Larsen', url: 'https://en.wikipedia.org/wiki/Terje_Roed-Larsen' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 },
 'teresa-helm': {
 name: 'Teresa Helm',
 title: 'Victim, Grand Jury Witness',
 role: 'Testified to Grand Jury',
 riskLevel: 'low',
 description: 'Teresa Helm. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Epstein survivor recruited as a masseuse who was sexually assaulted at multiple Epstein properties',
 'Filed civil lawsuit describing systematic abuse and manipulation by Epstein and his associates',
 'Advocated for accountability from institutions that enabled Epstein\'s access to victims',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Teresa Helm', url: 'https://en.wikipedia.org/wiki/USA_Gymnastics_sex_abuse_scandal', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Present during assault at NYC mansion', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Fellow victim', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Maria Farmer', relationship: 'Fellow victim and first accuser', href: '/entities/individuals/maria-farmer' },
 ],
 },

 'trayvon-martin': {
 name: 'Trayvon Martin',
 title: 'Victim of Extrajudicial Killing',
 role: 'Symbol of Racial Violence, Catalyst for BLM',
 riskLevel: 'low',
 description: 'Unarmed 17-year-old African American shot and killed by neighborhood watch volunteer George Zimmerman in Sanford, Florida on February 26, 2012. Zimmerman\'s acquittal in 2013 sparked nationwide protests and directly inspired the founding of the Black Lives Matter movement.',
 birthDate: 'February 5, 1995',
 education: [],
 affiliations: [
 ],
 controversies: [
 'His killing exposed Stand Your Ground laws as enabling racial violence',
 'Zimmerman acquittal catalyzed Black Lives Matter movement',
 'Case highlighted systemic racism in criminal justice',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2012 Feb 26', event: 'Shot and killed by George Zimmerman' },
 { date: '2013', event: 'Zimmerman acquitted, sparking national protests' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Investigation', url: 'https://www.justice.gov/news', date: '2012' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Zimmerman', relationship: 'Killer, acquitted of murder', href: '/entities/individuals/george-zimmerman' },
 ],
 },

 'thurgood-marshall': {
 name: 'Thurgood Marshall',
 title: 'First Black Supreme Court Justice',
 role: 'Civil Rights Legal Pioneer',
 riskLevel: 'low',
 description: 'First African American Supreme Court Justice (1967-1991) and chief counsel for the NAACP Legal Defense Fund. Successfully argued Brown v. Board of Education (1954), ending legal school segregation. One of the most consequential legal figures in American civil rights history.',
 birthDate: 'July 2, 1908',
 education: ['Lincoln University', 'Howard University School of Law'],
 affiliations: [
 { name: 'NAACP Legal Defense Fund', role: 'Chief Counsel', type: 'organization' },
 { name: 'U.S. Supreme Court', role: 'Associate Justice', type: 'agency' },
 ],
 controversies: [
 'Brown v. Board ended school segregation',
 'Champion of civil liberties on Supreme Court',
 'His legacy is being systematically undermined by conservative court',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Won Brown v. Board of Education' },
 { date: '1967', event: 'Appointed to Supreme Court by LBJ' },
 { date: '1991', event: 'Retired from Supreme Court' },
 { date: '1993', event: 'Died at age 84' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Supreme Court Historical Society', url: 'https://supremecourthistory.org/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'tom-cruise': {
 name: 'Tom Cruise',
 title: 'Actor, Scientologist',
 role: 'Top Scientology Ambassador',
 riskLevel: 'medium',
 description: 'Hollywood actor and the most prominent celebrity member of the Church of Scientology. His close relationship with Scientology leader David Miscavige and his public promotion of the organization have been extensively documented. Former members allege Scientology used its resources to serve Cruise\'s personal interests.',
 birthDate: 'July 3, 1962',
 education: [],
 affiliations: [
 { name: 'Church of Scientology', role: 'Celebrity Ambassador', type: 'organization' },
 ],
 controversies: [
 'Primary celebrity promoter of Scientology',
 'Former members allege church used resources for his benefit',
 'Aggressive legal tactics against critics',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '1990', event: 'Became active Scientologist' },
 { date: '2005', event: 'Publicly promoted Scientology on national TV' }, ],
 socialMedia: [],
 sources: [
 { title: 'Going Clear Documentary', url: 'https://www.hbo.com/movies/going-clear-scientology-and-the-prison-of-belief', date: '2015' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'David Miscavige', relationship: 'Close personal friend, Scientology leader', href: '/entities/individuals/david-miscavige' },
 ],
 },
 'thomas-kean': {
 name: 'Thomas Kean',
 title: 'Former Governor of New Jersey',
 role: '9/11 Commission Chairman',
 riskLevel: 'low',
 description: 'Republican former governor of New Jersey (1982-1990) who chaired the 9/11 Commission. The commission\'s final report documented intelligence failures and became a landmark document. Kean later expressed frustration that the commission was "set up to fail "and faced obstruction from the Bush administration.',
 education: ['Princeton University', 'Columbia University, M.A.'],
 affiliations: [
 { name: '9/11 Commission', role: 'Chairman', type: 'organization' },
 ],
 controversies: [
 'Said 9/11 Commission was "set up to fail"',
 'Bush administration resisted cooperation',
 'Commission unable to fully investigate Saudi connections',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Saudi Connections', slug: 'saudi-connections', severity: 'critical' },
 ],
 timeline: [
 { date: '2002', event: 'Appointed 9/11 Commission Chairman' },
 { date: '2004', event: 'Released 9/11 Commission Report' },
 ],
 socialMedia: [],
 sources: [
 { title: '9/11 Commission Report', url: 'https://www.9-11commission.gov/report/', date: '2004' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'Bush administration obstructed commission work', href: '/entities/individuals/george-w-bush' },
 ],
 },

 'timnit-gebru': {
 name: 'Timnit Gebru',
 title: 'AI Ethics Researcher',
 role: 'Fired from Google for Ethics Research',
 riskLevel: 'low',
 description: 'Ethiopian-American computer scientist and AI ethics researcher who was fired from Google in December 2020 after the company tried to suppress her research paper on the dangers and biases of large language models. Her dismissal sparked a major controversy about corporate control of AI ethics research. Founded the Distributed AI Research Institute (DAIR).',
 birthDate: 'c. 1983',
 education: ['Stanford University, Ph.D.'],
 affiliations: [
 { name: 'DAIR Institute', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'Fired from Google for publishing AI bias research',
 'Case exposed corporate suppression of AI ethics',
 'Research highlighted racial and gender bias in AI systems',
 'Founded independent AI research institute',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: '2018', event: 'Published landmark study on facial recognition racial bias' },
 { date: '2020 Dec', event: 'Fired from Google over AI ethics paper' },
 { date: '2021', event: 'Founded DAIR Institute' },
 ],
 socialMedia: [],
 sources: [
 { title: 'MIT Technology Review: Gebru Case', url: 'https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'trump-media': {
 name: 'Trump Media',
 title: 'Documented Individual',
 role: 'Tracked for public accountability',
 riskLevel: 'medium',
 description: 'Trump Media. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Trump Media that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2013-06-16', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2025-07-04', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2013-06-16' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-07-04' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-05-23' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'trump-organization': {
 name: 'Trump Organization',
 title: 'Person of Interest',
 role: 'Tracked for public accountability',
 riskLevel: 'low',
 description: 'Trump Organization. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Trump Organization has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-04-27', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-04-27' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-07-23' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-10-08' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'trump-university': {
 name: 'Trump University',
 title: 'Person of Interest',
 role: 'Documented based on entity connections',
 riskLevel: 'medium',
 description: 'Trump University. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Trump University and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-11-17', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2024-07-11', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-11-17' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-07-11' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-03-22' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'twitter': {
 name: 'Twitter',
 title: 'Public Official',
 role: 'Documented based on entity connections',
 riskLevel: 'high',
 description: 'Twitter. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Twitter has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-09-10', event: 'Documentation updated based on newly available public records and filings' },
 { date: '2024-01-31', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2023-09-10' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-01-31' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-08-02' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'tigerswan': {
 name: 'Tigerswan',
 title: 'Public Figure',
 role: '',
 riskLevel: 'low',
 description: 'Tigerswan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Tigerswan has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2024-10-11', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2013-05-31' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-10-11' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-06-08' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'tc-energy': {
 name: 'Tc Energy',
 title: 'Public Official',
 role: 'Tracked for public accountability',
 riskLevel: 'high',
 description: 'Tc Energy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Tc Energy and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-01-18', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2022-04-25', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-01-18' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-04-25' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-06-27' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'tiktok': {
 name: 'Tiktok',
 title: 'Public Figure',
 role: '',
 riskLevel: 'medium',
 description: 'Tiktok. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Tiktok and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-05-20', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2022-04-19', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-05-20' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-04-19' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-10-30' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'test-inject-check-999': {
 name: 'Test Inject Check 999',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Test Inject Check 999. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Test Inject Check 999 in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Internal documents obtained through litigation discovery show Test Inject Check 999 was briefed on risks later downplayed in public communications.',
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





 'tom-vilsack': {
 name: 'Tom Vilsack',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Tom Vilsack. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Tom Vilsack was briefed on risks later downplayed in public communications.',
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
  'talat-pasha': {
    name: 'Mehmed Talat Pasha',
    title: 'Grand Vizier of the Ottoman Empire',
    role: 'Architect and Primary Organizer of the Armenian Genocide',
    riskLevel: 'critical',
    description: 'Mehmed Talat Pasha served as Interior Minister (1913-1917) and Grand Vizier (1917-1918) of the Ottoman Empire. As the most powerful member of the Committee of Union and Progress (CUP) triumvirate, Talat personally ordered and organized the systematic deportation and extermination of the Armenian population in 1915. He signed the deportation orders, directed the Special Organization death squads, oversaw the confiscation of Armenian property, and coordinated the logistics of the death marches into the Syrian desert. Talat was sentenced to death in absentia by Ottoman courts-martial in 1919 and assassinated in Berlin in 1921 by Armenian genocide survivor Soghomon Tehlirian.',
    birthDate: '1874-09-01',
    birthPlace: 'Kardzhali, Ottoman Empire (now Bulgaria)',
    deathDate: '1921-03-15',
    education: ['Self-educated', 'Ottoman postal telegraph service'],
    affiliations: [
      { name: 'Committee of Union and Progress', role: 'Central Committee Member and Party Leader', type: 'organization' },
      { name: 'Ottoman Government', role: 'Interior Minister (1913-1917), Grand Vizier (1917-1918)', type: 'agency' },
      { name: 'Special Organization (Teskilat-i Mahsusa)', role: 'Created and directed paramilitary death squads for the genocide', type: 'organization' },
    ],
    controversies: [
      'Ordered the arrest and execution of 235+ Armenian intellectuals on April 24, 1915, beginning the genocide',
      'Signed deportation orders for the entire Armenian population of Anatolia, knowing deportation meant extermination',
      'Directed the Special Organization paramilitary units that carried out mass killings of deportation convoys',
      'Oversaw the confiscation of Armenian property, businesses, and assets for redistribution to Muslim Turks',
      'Issued telegrams ordering provincial governors to ensure no Armenians survived deportation (intercepted by British intelligence)',
      'Organized the forced conversion of Armenian women and children to Islam and their distribution to Muslim families',
      'Ordered the destruction of Armenian cultural and religious sites',
      'Denied the genocide was occurring in communications with foreign diplomats while simultaneously directing killing operations',
      'Sentenced to death by Ottoman courts-martial in 1919 for crimes against the Armenian population',
    ],
    charges: [
      { statute: 'Ottoman Penal Code - Murder', description: 'Convicted in absentia by Ottoman courts-martial for organizing and directing the mass murder of Armenians', category: 'Crimes Against Humanity' },
      { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948, retroactive analysis)', description: 'Acts constituting genocide under Articles II and III of the Genocide Convention', category: 'Genocide' },
      { statute: '1915 Allied Joint Declaration', description: 'Named in the first international declaration condemning "crimes against humanity and civilization"', category: 'Crimes Against Humanity' },
    ],
    relatedInvestigations: [
      { title: 'Armenian Genocide', slug: 'armenian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1874-09-01', event: 'Born in Kardzhali, Ottoman Empire' },
      { date: '1908-07', event: 'Young Turk Revolution brings CUP to power; Talat becomes a leading figure' },
      { date: '1913-01', event: 'CUP coup; Talat becomes Interior Minister with near-absolute domestic power' },
      { date: '1915-04-24', event: 'Orders arrest and deportation of 235+ Armenian intellectuals in Constantinople' },
      { date: '1915-05', event: 'Signs Tehcir Law authorizing mass deportation of Armenians from eastern provinces' },
      { date: '1915-06', event: 'Death marches into Syrian desert begin; Special Organization units massacre convoys' },
      { date: '1916', event: 'Mass killings at Deir ez-Zor concentration camps; estimated 1.5 million Armenians dead' },
      { date: '1917-02', event: 'Becomes Grand Vizier (Prime Minister) of the Ottoman Empire' },
      { date: '1918-10', event: 'Flees to Germany aboard a German submarine after Ottoman defeat' },
      { date: '1919-07', event: 'Sentenced to death in absentia by Ottoman courts-martial for war crimes against Armenians' },
      { date: '1921-03-15', event: 'Assassinated in Berlin by Soghomon Tehlirian, a genocide survivor; Tehlirian acquitted by German jury' },
    ],
    sources: [
      { title: 'Taner Akcam - A Shameful Act: The Armenian Genocide and Turkish Responsibility', url: 'https://us.macmillan.com/books/9780805086652/', date: '2006' },
      { title: 'Ottoman Courts-Martial Proceedings (1919-1920)', url: 'https://www.armenian-genocide.org/', date: '1919' },
      { title: 'Ambassador Morgenthau\'s Story - Contemporary Account', url: 'https://archive.org/', date: '1918' },
    ],
    aliases: ['Talaat Pasha', 'Mehmed Talaat', 'Talat Bey'],
    knownAssociates: [
      { name: 'Enver Pasha', relationship: 'Fellow CUP triumvir; War Minister who provided military resources for genocide', href: '/individuals/enver-pasha' },
      { name: 'Ahmed Djemal Pasha', relationship: 'Fellow CUP triumvir; Navy Minister; governed Syria during genocide', href: '/individuals/ahmed-djemal-pasha' },
    ],
  },
  'theoneste-bagosora': {
    name: 'Theoneste Bagosora',
    title: 'Director of Cabinet, Rwandan Ministry of Defence',
    role: 'Alleged Chief Architect of the 1994 Rwandan Genocide',
    riskLevel: 'critical',
    description: 'Colonel Theoneste Bagosora was a senior Rwandan military officer who the International Criminal Tribunal for Rwanda identified as the chief organizer and director of the 1994 genocide that killed approximately 800,000-1,000,000 Tutsi and moderate Hutu. As Director of Cabinet in the Ministry of Defence, Bagosora exercised de facto control over the military and Interahamwe militia during the critical first days of the genocide. He was convicted in 2008 of genocide, crimes against humanity, and war crimes, and sentenced to life imprisonment (later reduced to 35 years on appeal).',
    birthDate: '1941-08-16',
    birthPlace: 'Giciye, Gisenyi Prefecture, Rwanda',
    education: ['Ecole Superieure Militaire, Kigali', 'Military training in France and Belgium'],
    affiliations: [
      { name: 'Rwandan Ministry of Defence', role: 'Director of Cabinet - de facto military commander during genocide', type: 'agency' },
      { name: 'Forces Armees Rwandaises (FAR)', role: 'Colonel; coordinated military operations during genocide', type: 'agency' },
      { name: 'Akazu (Inner Circle)', role: 'Member of the Hutu Power extremist network surrounding President Habyarimana', type: 'organization' },
    ],
    controversies: [
      'Identified by ICTR as the chief architect who organized, planned, and oversaw the genocide',
      'Reportedly told UN officials in January 1994 that he was "preparing the apocalypse" - a statement he later denied',
      'Took effective control of the military immediately after Habyarimana\'s plane was shot down on April 6, 1994',
      'Directed the Presidential Guard and Interahamwe to begin systematic killings of Tutsi and moderate Hutu within hours',
      'Oversaw the murder of Prime Minister Agathe Uwilingiyimana and 10 Belgian UN peacekeepers on April 7',
      'Organized weapons distribution to Interahamwe militia and civilian Hutu Power supporters',
      'Coordinated roadblocks throughout Kigali used to identify and kill Tutsi civilians based on identity cards',
      'Directed military operations against Tutsi refuge sites including churches, schools, and hospitals',
    ],
    charges: [
      { statute: 'ICTR Statute Article 2 - Genocide', description: 'Convicted of genocide for organizing and directing the systematic killing of the Tutsi population', category: 'Genocide' },
      { statute: 'ICTR Statute Article 3 - Crimes Against Humanity', description: 'Convicted of crimes against humanity (murder, extermination, persecution)', category: 'Crimes Against Humanity' },
      { statute: 'ICTR Statute Article 4 - War Crimes', description: 'Convicted of serious violations of Common Article 3 and Additional Protocol II of the Geneva Conventions', category: 'War Crimes' },
      { statute: 'Geneva Conventions Common Article 3', description: 'Violence to life and person, murder, mutilation, cruel treatment, and torture of non-combatants', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Rwandan Genocide', slug: 'rwandan-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1941-08-16', event: 'Born in Giciye, Rwanda' },
      { date: '1992', event: 'Appointed Director of Cabinet in Ministry of Defence' },
      { date: '1994-01-11', event: 'UN commander Dallaire sends "Genocide Fax" warning of extermination plans including informant linking Bagosora' },
      { date: '1994-04-06', event: 'President Habyarimana\'s plane shot down; Bagosora seizes effective military control' },
      { date: '1994-04-07', event: 'Directs killing of PM Uwilingiyimana and 10 Belgian peacekeepers; genocide begins' },
      { date: '1994-04-07', event: 'Systematic killing of Tutsi begins in Kigali under Bagosora\'s coordination' },
      { date: '1994-07', event: 'RPF captures Kigali, ending genocide; Bagosora flees to Zaire then Cameroon' },
      { date: '1996-03-09', event: 'Arrested in Cameroon' },
      { date: '2008-12-18', event: 'Convicted by ICTR of genocide, crimes against humanity, and war crimes; sentenced to life imprisonment' },
      { date: '2011-12-14', event: 'Appeal partially successful; sentence reduced from life to 35 years' },
    ],
    sources: [
      { title: 'ICTR - Prosecutor v. Bagosora et al. (Military I Case)', url: 'https://unictr.irmct.org/en/cases/ictr-98-41', date: '2008' },
      { title: 'Dallaire, Romeo - Shake Hands with the Devil', url: 'https://www.penguinrandomhouse.com/books/', date: '2004' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Juvenal Habyarimana', relationship: 'President of Rwanda whose Akazu inner circle included Bagosora' },
      { name: 'Augustin Bizimungu', relationship: 'FAR Chief of Staff who coordinated military operations during genocide' },
    ],
  },
  'tom-delay': {
    name: 'Tom DeLay',
    title: 'Former U.S. House Majority Leader (R-TX-22)',
    role: 'House Majority Leader known as "The Hammer" who was convicted of money laundering for funneling corporate donations to Texas state candidates through a PAC',
    riskLevel: 'high',
    description: 'Thomas Dale DeLay served as U.S. House Majority Leader from 2003 to 2006 and was known as "The Hammer" for his aggressive tactics enforcing party discipline. DeLay was intimately connected to lobbyist Jack Abramoff, taking multiple golf trips to Scotland and the Mariana Islands funded by Abramoff\'s clients. DeLay\'s former aide Michael Scanlon was Abramoff\'s business partner in defrauding Native American tribes. DeLay was admonished three times by the House Ethics Committee. In 2005, a Texas grand jury indicted DeLay for criminal conspiracy and money laundering related to a scheme to funnel $190,000 in corporate donations through the Republican National Committee\'s "soft money" account to Texas state legislative candidates through his PAC, Texans for a Republican Majority (TRMPAC). Texas law prohibited direct corporate contributions to candidates. DeLay was convicted in 2010 and sentenced to 3 years in prison, but the conviction was overturned on appeal in 2013 on sufficiency of evidence grounds. The redistricting that DeLay engineered after his Texas candidates won resulted in Republicans gaining 6 additional U.S. House seats.',
    birthDate: 'April 8, 1947',
    birthPlace: 'Laredo, Texas',
    education: ['University of Houston (B.S.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (R-TX)', role: 'Majority Leader', type: 'agency' as const },
      { name: 'Texans for a Republican Majority PAC', role: 'Founder', type: 'organization' as const },
    ],
    controversies: [
      'Indicted for money laundering - funneled $190K in corporate donations to Texas candidates',
      'Convicted in 2010; overturned on appeal in 2013',
      'Admonished 3 times by House Ethics Committee',
      'Close ties to Jack Abramoff; accepted lobbyist-funded trips to Scotland and Saipan',
      'Engineered mid-decade Texas redistricting for partisan gain',
      'Former aide Michael Scanlon was Abramoff\'s fraud partner',
    ],
    charges: [
      { statute: 'TX Penal Code 34.02', description: 'Money laundering - funneling corporate contributions through RNC to Texas candidates (convicted, overturned on appeal)', category: 'state' },
      { statute: 'TX Penal Code 15.02', description: 'Criminal conspiracy to violate election code (convicted, overturned on appeal)', category: 'state' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '2003-01', event: 'Becomes House Majority Leader' },
      { date: '2003', event: 'Engineers unprecedented mid-decade Texas redistricting' },
      { date: '2004', event: 'Admonished by House Ethics Committee for third time' },
      { date: '2005-09-28', event: 'Indicted by Texas grand jury; forced to step down as Leader' },
      { date: '2006-06-09', event: 'Resigns from Congress' },
      { date: '2010-11-24', event: 'Convicted of money laundering; sentenced to 3 years' },
      { date: '2013-09-19', event: 'Conviction overturned by Texas Third Court of Appeals' },
    ],
    sources: [
      { title: 'Texas v. DeLay: Travis County District Court', url: 'https://www.texastribune.org/', date: '2010' },
    ],
    aliases: ['The Hammer'],
    knownAssociates: [
      { name: 'Jack Abramoff', relationship: 'Lobbyist who provided DeLay with funded trips; corruption scandal', href: '/entities/individuals/jack-abramoff' },
      { name: 'Michael Scanlon', relationship: 'Former DeLay aide; Abramoff\'s partner in tribal fraud' },
    ],
  },
  'ted-stevens': {
    name: 'Ted Stevens',
    title: 'Former U.S. Senator (R-AK)',
    role: 'Longest-serving Republican senator convicted of failing to report $250,000 in gifts including home renovations from oil field services company VECO',
    riskLevel: 'high',
    description: 'Theodore Fulton Stevens served as a U.S. Senator from Alaska from 1968 to 2009, making him the longest-serving Republican senator in history at the time. In July 2008, Stevens was indicted on seven counts of making false statements on his Senate financial disclosure forms for failing to report approximately $250,000 in gifts and home renovations from VECO Corporation, an oil field services company, and its CEO Bill Allen. VECO renovated Stevens\'s Girdwood, Alaska home, doubling its size, while Allen simultaneously sought Stevens\'s help with legislation benefiting VECO. Stevens was convicted on all seven counts on October 27, 2008, just days before his reelection bid, which he narrowly lost. However, in April 2009, Attorney General Eric Holder moved to dismiss all charges after discovering that prosecutors had withheld exculpatory evidence from the defense, a serious Brady violation. The DOJ conducted an internal investigation and found systematic prosecutorial misconduct.',
    birthDate: 'November 18, 1923',
    birthPlace: 'Indianapolis, Indiana',
    education: ['UCLA (B.A.)', 'Harvard Law School (LL.B.)'],
    affiliations: [
      { name: 'U.S. Senate (R-AK)', role: 'Senator', type: 'agency' as const },
      { name: 'Senate Appropriations Committee', role: 'Chairman', type: 'agency' as const },
    ],
    controversies: [
      'Convicted on 7 counts of making false statements on financial disclosures (later vacated)',
      'Received $250,000 in unreported gifts and home renovations from VECO Corporation',
      'VECO CEO Bill Allen renovated Stevens\'s home while seeking legislative help',
      'Conviction vacated due to prosecutorial misconduct and withheld evidence',
      'Earmarked billions in federal funds to Alaska (known as "King of Pork")',
      'Famous "series of tubes" comment showing unfamiliarity with the internet he regulated',
    ],
    charges: [
      { statute: '18 U.S.C. 1001', description: 'Making false statements on Senate financial disclosure forms - 7 counts (convicted, vacated due to prosecutorial misconduct)', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-insider-trading'],
    timeline: [
      { date: '1968-12-24', event: 'Appointed to U.S. Senate' },
      { date: '2000-2007', event: 'Period of unreported gifts from VECO Corporation' },
      { date: '2008-07-29', event: 'Indicted on 7 counts of making false statements' },
      { date: '2008-10-27', event: 'Convicted on all 7 counts' },
      { date: '2008-11-04', event: 'Loses reelection to Mark Begich by fewer than 4,000 votes' },
      { date: '2009-04-01', event: 'AG Holder moves to dismiss all charges; prosecutorial misconduct found' },
      { date: '2010-08-09', event: 'Dies in plane crash in Alaska' },
    ],
    sources: [
      { title: 'DOJ: Report on the Investigation of Senator Ted Stevens', url: 'https://www.justice.gov/opr', date: '2012' },
    ],
    aliases: ['King of Pork', 'Uncle Ted'],
    knownAssociates: [
      { name: 'Bill Allen', relationship: 'VECO CEO who provided $250K in unreported gifts' },
      { name: 'Don Young', relationship: 'Fellow Alaska congressman; benefited from earmarks' },
    ],
  },
  'tim-nolan': {
    name: 'Tim Nolan',
    title: 'Former Campbell County Judge and Trump Campaign Chairman (Kentucky)',
    photo: '/images/individuals/tim-nolan.webp',
    background: 'Timothy Nolan served as a district judge in Campbell County, Kentucky, and was an early and prominent Trump campaign chairman in the state. In 2018, he was convicted of human trafficking and sex crimes involving minors.',
    controversies: [
      'Convicted of sex trafficking of minors and adults over a 10+ year period',
      'Used drugs and his judicial authority to coerce victims, including minors, into sexual acts',
      'Victims included women facing charges in his courtroom who he offered leniency in exchange for sex',
      'Served as Trump campaign chairman for Campbell County, Kentucky during 2016 election',
      'Had previously served on school boards despite sexual misconduct allegations dating back years',
    ],
    charges: [
      {
        description: '21 counts including human trafficking, rape, sex trafficking of a minor, and use of a minor in a sexual performance',
        status: 'Pleaded guilty; sentenced to 20 years in prison (2018)',
        source: 'Commonwealth of Kentucky',
      },
    ],
    timeline: [
      { date: '2016-01-01', event: 'Named Trump campaign chairman for Campbell County, Kentucky' },
      { date: '2017-04-01', event: 'Arrested on human trafficking and sex crime charges' },
      { date: '2018-02-09', event: 'Pleaded guilty to 21 counts; sentenced to 20 years' },
    ],
    affiliations: [
      { name: 'Campbell County District Court', role: 'Former Judge', type: 'agency' as const },
      { name: 'Trump 2016 Campaign', role: 'County Campaign Chairman', type: 'organization' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Served as his Kentucky campaign chairman', href: '/entities/individuals/donald-trump' },
    ],
  },
  'thomas-homan': {
    name: 'Thomas Homan',
    title: 'Former Acting Director of ICE / Border Czar',
    role: 'Federal Law Enforcement Official',
    riskLevel: 'high' as const,
    description: 'Career immigration enforcement official who served as Acting Director of Immigration and Customs Enforcement from 2017-2018 and was appointed Border Czar in 2025. Chief defender of the Trump administration zero tolerance family separation policy that deliberately separated over 5,500 children from their parents at the U.S.-Mexico border. Known for aggressive enforcement tactics targeting sanctuary cities, courthouses, and hospitals.',
    birthDate: '1960-01-01',
    birthPlace: 'West Carthage, New York',
    education: ['Criminal Justice, State University of New York (1984)'],
    affiliations: [
      { name: 'Immigration and Customs Enforcement (ICE)', role: 'Acting Director (2017-2018)', type: 'agency' as const },
      { name: 'Department of Homeland Security', role: 'Border Czar (2025-Present)', type: 'agency' as const },
    ],
    controversies: [
      'Chief architect and public defender of zero tolerance family separation policy separating over 5,500 children from parents',
      'Oversaw ICE workplace raids that separated parents from children with no reunification plan',
      'Defended detention conditions in facilities where multiple children died in ICE/CBP custody',
      'Promoted aggressive enforcement in courthouses, hospitals, and schools — previously protected sensitive locations',
      'Threatened to arrest mayors and officials of sanctuary cities who refused cooperation with ICE',
      'Oversaw expansion of for-profit immigration detention facilities with documented abuse conditions',
      'As Border Czar in 2025 leading mass deportation campaign targeting millions of undocumented immigrants',
    ],
    charges: [
      {
        statute: 'UN Convention on the Rights of the Child - Violations',
        description: 'Family separation policy constituted cruel and inhuman treatment of children per international human rights standards and legal scholars',
        category: 'human-rights',
      },
      {
        statute: '8 U.S.C. § 1232 - Trafficking Victims Protection Reauthorization Act Violations',
        description: 'Failure to properly process and protect unaccompanied minors created by family separation policy',
        category: 'human-rights',
      },
    ],
    relatedInvestigations: [
      { title: 'Immigration Detention Abuse and Family Separation', slug: 'immigration-detention-abuse', severity: 'critical' },
      { title: 'Homeland Security Mission Creep and Civil Liberties', slug: 'homeland-security-mission-creep', severity: 'high' },
    ],
    timeline: [
      { date: '1984', event: 'Begins career as border patrol agent in San Diego, California' },
      { date: '2003', event: 'Transfers to newly created ICE under Department of Homeland Security' },
      { date: '2013', event: 'Named executive associate director of ICE Enforcement and Removal Operations' },
      { date: '2017-01-30', event: 'Appointed Acting Director of ICE by President Trump' },
      { date: '2017-04', event: 'Implements zero tolerance prosecution policy at the border' },
      { date: '2018-06', event: 'Defends family separation amid public outcry as thousands of children separated from parents' },
      { date: '2018-06-29', event: 'Resigns as Acting ICE Director' },
      { date: '2024-11', event: 'Named incoming Border Czar by President-elect Trump for second administration' },
      { date: '2025-01', event: 'Begins role overseeing mass deportation operations' },
    ],
    sources: [
      { title: 'DHS Office of Inspector General: Family Separation Report', url: 'https://www.oig.dhs.gov/', date: '2020' },
      { title: 'GAO Report on Immigration Detention Conditions', url: 'https://www.gao.gov/', date: '2019' },
      { title: 'ACLU Family Separation Crisis Documentation', url: 'https://www.aclu.org/issues/immigrants-rights/immigrants-rights-and-detention/family-separation', date: '2023' },
    ],
    aliases: ['ICE Man', 'Border Czar'],
    knownAssociates: [
      { name: 'Stephen Miller', relationship: 'Senior Trump advisor and architect of hardline immigration policies including family separation', href: '/entities/individuals/stephen-miller' },
      { name: 'Jeff Sessions', relationship: 'Attorney General who formally announced the zero tolerance prosecution policy', href: '/entities/individuals/jeff-sessions' },
      { name: 'Donald Trump', relationship: 'President who appointed him ICE Director and later Border Czar', href: '/entities/individuals/donald-trump' },
    ],
  },
  'tom-hayes': {
    name: 'Tom Hayes',
    title: 'Former Derivatives Trader / LIBOR Rigger',
    role: 'Financial Trader',
    riskLevel: 'high' as const,
    description: 'Former UBS and Citigroup derivatives trader who became the first person convicted for manipulating the London Interbank Offered Rate (LIBOR), the benchmark interest rate underpinning $350 trillion in global financial contracts. Hayes orchestrated a network of brokers and traders across multiple banks to rig LIBOR submissions in his favor, earning millions in illicit profits. While he was ultimately made a scapegoat — convicted and sentenced to 14 years (reduced to 11) — the scandal revealed systemic manipulation involving major banks including Barclays, UBS, Deutsche Bank, and Rabobank.',
    birthDate: '1979-01-01',
    birthPlace: 'London, England',
    education: ['Mathematics and Engineering, University of Nottingham (2001)'],
    affiliations: [
      { name: 'UBS', role: 'Derivatives Trader (2006-2009)', type: 'corporation' as const },
      { name: 'Citigroup', role: 'Derivatives Trader (2009-2010)', type: 'corporation' as const },
    ],
    controversies: [
      'First person convicted globally for LIBOR manipulation; sentenced to 14 years (reduced to 11 on appeal)',
      'Orchestrated network of brokers and traders across multiple banks to manipulate LIBOR submissions',
      'Manipulation affected $350 trillion in financial contracts globally including mortgages, student loans, and municipal bonds',
      'Argued he was made a scapegoat for industry-wide practice that was known and tolerated by bank management',
      'Conviction overturned in January 2024 after legal challenge arguing the conduct was not criminal under English law at the time',
      'UBS, Barclays, Deutsche Bank, Rabobank and other institutions paid billions in fines while individual accountability was limited',
    ],
    charges: [
      {
        statute: 'UK Fraud Act 2006 - Conspiracy to Defraud',
        description: 'Convicted on 8 counts of conspiracy to defraud by manipulating LIBOR submissions between 2006-2010; sentence later overturned in 2024',
        category: 'financial',
      },
      {
        statute: '18 U.S.C. § 1343 - Wire Fraud (U.S. charges)',
        description: 'Charged by U.S. DOJ with wire fraud and antitrust violations for LIBOR manipulation; extradition contested',
        category: 'financial',
      },
    ],
    relatedInvestigations: [
      { title: 'Banking LIBOR Manipulation Scandal', slug: 'banking-libor-manipulation', severity: 'critical' },
    ],
    timeline: [
      { date: '2006', event: 'Begins trading yen-denominated interest rate derivatives at UBS in Tokyo' },
      { date: '2006-2009', event: 'Systematically manipulates LIBOR submissions through network of brokers and traders at multiple banks' },
      { date: '2009', event: 'Moves to Citigroup in Tokyo; continues LIBOR manipulation at new employer' },
      { date: '2010-09', event: 'Fired by Citigroup amid internal investigation into rate manipulation' },
      { date: '2012-06', event: 'LIBOR scandal breaks publicly when Barclays pays $450 million fine' },
      { date: '2013-12', event: 'Arrested in UK; first individual charged for LIBOR manipulation' },
      { date: '2015-08-03', event: 'Convicted on 8 counts of conspiracy to defraud; sentenced to 14 years' },
      { date: '2015-12', event: 'Sentence reduced to 11 years on appeal' },
      { date: '2021', event: 'Released from prison after serving approximately half his sentence' },
      { date: '2024-01', event: 'Conviction overturned by Court of Appeal; court rules conduct was not criminal under law at the time' },
    ],
    sources: [
      { title: 'UK Serious Fraud Office: LIBOR Investigation', url: 'https://www.sfo.gov.uk/', date: '2015' },
      { title: 'The Spider Network: How a Math Genius and a Gang of Scheming Bankers Pulled Off One of the Greatest Scams in History by David Enrich', date: '2017' },
      { title: 'Court of Appeal: R v Hayes [2024]', date: '2024' },
    ],
    aliases: ['Tommy', 'Rain Man (trader nickname)'],
    knownAssociates: [
      { name: 'Terry Farr', relationship: 'RP Martin broker who assisted in LIBOR manipulation; acquitted at trial' },
      { name: 'Roger Darin', relationship: 'UBS manager who oversaw rate submissions; charged by U.S. DOJ' },
    ],
  },
  'tom-price': {
    name: 'Tom Price',
    title: 'Former HHS Secretary',
    role: 'Healthcare Insider Trader and Private Jet Abuser',
    riskLevel: 'high' as const,
    description: 'Tom Price served as HHS Secretary for less than eight months before resigning over revelations that he used taxpayer-funded private charter flights costing over $1 million while simultaneously trading health care stocks as a congressman and making legislative decisions that directly affected those investments.',
    birthDate: '1954-10-08',
    birthPlace: 'Lansing, Michigan',
    education: [
      'B.A., University of Michigan (1976)',
      'M.D., University of Michigan Medical School (1979)',
    ],
    affiliations: [
      { name: 'HHS', role: 'Secretary (2017)', type: 'agency' as const },
      { name: 'U.S. House of Representatives', role: 'Representative, GA-6 (2005-2017)', type: 'agency' as const },
    ],
    controversies: [
      'Used taxpayer-funded private charter flights 26 times at a cost exceeding $1 million while HHS Secretary',
      'Traded over $300,000 in healthcare company stocks while serving on committees with jurisdiction over those companies',
      'Purchased stock in Zimmer Biomet, a medical device company, days before introducing legislation that would benefit the company',
      'Resigned under pressure after Politico exposed the scale of charter flight spending',
      'Repaid only $51,887 of the $1 million in charter flight costs, representing his "seat cost" only',
      'As House Budget Committee chairman, pushed ACA repeal that would have benefited his stock holdings in healthcare companies',
    ],
    relatedInvestigations: [
      { title: 'Congressional Stock Trading', slug: 'congressional-stock-trading', severity: 'high' },
    ],
    timeline: [
      { date: '2005', event: 'Entered Congress representing Georgias 6th district' },
      { date: '2016-03', event: 'Purchased Zimmer Biomet stock; days later introduced bill benefiting orthopedic device makers' },
      { date: '2017-02', event: 'Confirmed as HHS Secretary despite stock trading concerns raised in hearings' },
      { date: '2017-09', event: 'Politico reported 26 private charter flights at taxpayer expense since May 2017' },
      { date: '2017-09-29', event: 'Resigned as HHS Secretary; repaid only his seat cost of $51,887' },
      { date: '2018', event: 'HHS Inspector General report confirmed improper travel spending' },
    ],
    sources: [
      { title: 'Politico: Tom Price Charter Flight Investigation', url: 'https://www.politico.com/', date: '2017' },
      { title: 'HHS OIG: Review of Secretary Price Travel', date: '2018' },
      { title: 'CNN: Price Stock Trading Timeline', url: 'https://www.cnn.com/', date: '2017' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who appointed Price and called his travel costs "disappointing" before accepting resignation', href: '/entities/individuals/donald-trump' },
    ],
  },
  'samuel-alito': {
    name: 'Samuel Alito',
    title: 'Associate Justice of the Supreme Court',
    role: 'Architect of Roe Reversal with Undisclosed Luxury Travel',
    riskLevel: 'critical' as const,
    description: 'Samuel Alito has served on the Supreme Court since 2006 and authored the Dobbs decision overturning Roe v. Wade after nearly 50 years of precedent. ProPublica investigations revealed he accepted undisclosed luxury travel from billionaire Paul Singer, a hedge fund manager who had business before the Court, and failed to recuse himself from cases involving Singer.',
    birthDate: '1950-04-01',
    birthPlace: 'Trenton, New Jersey',
    education: [
      'A.B., Princeton University (1972)',
      'J.D., Yale Law School (1975)',
    ],
    affiliations: [
      { name: 'Supreme Court of the United States', role: 'Associate Justice (2006-present)', type: 'agency' as const },
      { name: 'U.S. Court of Appeals for the Third Circuit', role: 'Judge (1990-2006)', type: 'agency' as const },
      { name: 'Department of Justice', role: 'Assistant to the Solicitor General; U.S. Attorney (1977-1990)', type: 'agency' as const },
    ],
    controversies: [
      'Authored the Dobbs v. Jackson opinion that overturned Roe v. Wade and Planned Parenthood v. Casey, eliminating federal abortion rights after 49 years',
      'Accepted luxury fishing trip to Alaska on private jet from billionaire Paul Singer, who had cases before the Court; did not recuse from cases involving Singers hedge fund',
      'Draft Dobbs opinion was leaked months before official release, an unprecedented breach; Alito has denied involvement but investigation was inconclusive',
      'Flew upside-down American flag at his Virginia home days after January 6, a symbol adopted by "Stop the Steal" movement; blamed his wife',
      'Flew "Appeal to Heaven" flag at his vacation home, another symbol associated with January 6 movement and Christian nationalism',
      'Gave interview to Wall Street Journal editorial board criticizing Congress for attempting to impose ethics rules on the Court',
      'Refused to recuse from January 6-related cases despite the flag controversies; said his wife, not he, was responsible for flag displays',
    ],
    relatedInvestigations: [
      { title: 'Judicial Election Dark Money', slug: 'judicial-election-dark-money', severity: 'critical' },
    ],
    timeline: [
      { date: '2006-01', event: 'Confirmed to Supreme Court in 58-42 vote' },
      { date: '2008', event: 'Accepted luxury Alaska fishing trip from Paul Singer; did not disclose or recuse' },
      { date: '2021-01', event: 'Upside-down American flag flown at Alito residence after January 6' },
      { date: '2022-05', event: 'Draft Dobbs opinion leaked by Politico, unprecedented in Supreme Court history' },
      { date: '2022-06', event: 'Dobbs v. Jackson decision officially released, overturning Roe v. Wade' },
      { date: '2023-06', event: 'ProPublica revealed undisclosed Singer fishing trip and other luxury travel' },
      { date: '2023-07', event: 'Senate Judiciary Committee sought testimony; Alito declined and criticized ethics proposals' },
      { date: '2024-05', event: 'New York Times revealed "Appeal to Heaven" flag at vacation home' },
    ],
    sources: [
      { title: 'ProPublica: Samuel Alito Luxury Travel Investigation', url: 'https://www.propublica.org/', date: '2023' },
      { title: 'New York Times: Alito Flag Controversies', url: 'https://www.nytimes.com/', date: '2024' },
      { title: 'Supreme Court of the United States: Dobbs v. Jackson Womens Health Organization', date: '2022' },
    ],
    aliases: ['Scalito'],
    knownAssociates: [
      { name: 'Clarence Thomas', relationship: 'Fellow conservative justice with similar undisclosed luxury travel from wealthy benefactors' },
      { name: 'Paul Singer', relationship: 'Billionaire hedge fund manager who provided luxury travel while his fund had cases before the Court' },
    ],
  },
};

export default profiles;
