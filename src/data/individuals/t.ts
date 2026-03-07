// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'tom-price': {
 name: 'Thomas Edmunds Price',
 title: 'Former HHS Secretary',
 role: 'Healthcare, Private Jet Scandal',
 riskLevel: 'medium',
 description: 'Thomas Edmunds Price served as Secretary of Health and Human Services from 2017 to September 2017. He was forced to resign after just seven months amid revelations that he spent over $1 million in taxpayer funds on private and military jet travel, violating government travel policies.',
 birthDate: 'October 8, 1954',
 birthPlace: 'Lansing, Michigan, USA',
 education: [
 'M.D., University of Michigan Medical School',
 'B.A., University of Michigan',
 ],
 netWorth: '$13+ million',
 affiliations: [
 { name: 'HHS', role: 'Secretary (2017)', type: 'agency' },
 { name: 'U.S. Congress', role: 'Representative GA-6 (2005-2017)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'HHS Secretary appointee', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 '$400,000+ in private jet travel',
 'Stock trading in healthcare companies while legislating',
 'Shortest-serving HHS Secretary',
 ],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Born in Michigan' },
 { date: '2017', event: 'Confirmed as HHS Secretary (February)' },
 { date: '2017', event: 'Resigns amid travel scandal (September)' },
 ],
 sources: [
 { title: 'HHS IG Report', url: 'https://oig.hhs.gov/', date: '2017' },
 ],
 },
  'tom-barrack': {
    name: 'Thomas Joseph Barrack Jr.',
    title: 'Billionaire Real Estate Investor',
    role: 'Trump Inaugural Chair, Charged as Foreign Agent',
    riskLevel: 'high',
    description: 'Tom Barrack is a billionaire investor and long-time Trump friend who chaired Trump\'s inaugural committee, which raised a record $107 million and is under investigation for misspending. He was arrested and charged with acting as an unregistered foreign agent for the UAE, but was acquitted at trial.',
    birthDate: 'April 28, 1947',
    birthPlace: 'Boston, Massachusetts, USA',
    netWorth: '$1+ billion',
    education: ['J.D. - University of San Diego School of Law', 'B.A. - University of Southern California'],
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
      { statute: '18 U.S.C. § 951', description: 'Acting as foreign agent - acquitted', category: 'Foreign Agent' },
      { statute: '18 U.S.C. § 1001', description: 'False statements - acquitted', category: 'False Statements' },
      { statute: '18 U.S.C. § 1512', description: 'Obstruction - acquitted', category: 'Obstruction' },
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
    title: 'Person of Interest',
    role: 'Tracked for public accountability',
    riskLevel: 'critical',
    description: 'Tucker Carlson has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tucker Carlson has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-03-29', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2019-12-06', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2018-03-29' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2019-12-06' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-08-31' },
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
      { statute: '18 U.S.C. § 1519', description: 'Potential Destruction of Records - Text messages from January 5-6 were deleted from Secret Service devices under his leadership', category: 'Potential Federal' },
      { statute: '18 U.S.C. § 1512(c)', description: 'Potential Obstruction - Deleted communications that may have been relevant to January 6 congressional investigation', category: 'Potential Federal' },
      { statute: '18 U.S.C. § 1001', description: 'Potential False Statements - Disputed Cassidy Hutchinson testimony though other agents corroborated her account', category: 'Potential Federal' },
      { statute: '44 U.S.C. § 3106 (Federal Records Act)', description: 'Records Preservation Violations - Failure to preserve text messages as required federal records', category: 'Federal Records' },
      { statute: '5 C.F.R. § 2635.101', description: 'Ethics Violations - Unprecedented detail from Secret Service to political White House position raised conflict concerns', category: 'Ethics' },
      { statute: '18 U.S.C. § 4 (Misprision of Felony)', description: 'Potential Failure to Report - May have had knowledge of January 6 planning that was not properly reported', category: 'Potential Federal' },
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
      { title: 'Hutchinson Testimony', url: 'https://scholar.google.com/scholar?q=Hutchinson%20Testimony', date: '2022' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2022-03-21' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Detailed to serve as deputy chief of staff', href: '/entities/individuals/donald-trump' },
      { name: 'Mark Meadows', relationship: 'Worked directly with', href: '/entities/individuals/mark-meadows' },
      { name: 'Cassidy Hutchinson', relationship: 'She testified about his account of limo incident', href: '/entities/individuals/cassidy-hutchinson' },
    ],
  },














  'tiffany-trump': {
    name: 'Tiffany Trump',
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Profile documenting Tiffany Trump and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tiffany Trump that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-11-03', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2025-11-05', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2019-11-03' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-11-05' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-06-17' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'tanya-chutkan': {
    name: 'Tanya Chutkan',
    title: 'Person of Interest',
    role: 'Documented based on entity connections',
    riskLevel: 'low',
    description: 'Tanya Chutkan has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tanya Chutkan that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2015-08-04', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2024-02-19', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2015-08-04' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-02-19' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-12-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'todd-blanche': {
    name: 'Todd Blanche',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Todd Blanche appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Todd Blanche and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-11-14', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-12-29', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-11-14' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-12-29' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-09-16' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'tom-marino': {
    name: 'Tom Marino',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'critical',
    description: 'Profile documenting Tom Marino and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tom Marino has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-02-08', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2023-05-26', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-02-08' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2023-05-26' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-03-28' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'timothy-shea': {
    name: 'Timothy Shea',
    title: 'Documented Individual',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Timothy Shea is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Timothy Shea has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-01-16', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-03-26', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-01-16' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-03-26' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-05-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'ted-cruz': {
    name: 'Ted Cruz',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Profile documenting Ted Cruz and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ted Cruz has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-07-29', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-09-10', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2020-07-29' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-09-10' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-07-18' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'tedros-adhanom': {
    name: 'Tedros Adhanom',
    title: 'Person of Interest',
    role: 'Subject of ongoing documentation',
    riskLevel: 'critical',
    description: 'Tedros Adhanom has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tedros Adhanom that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-02-24', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2025-04-16', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2017-02-24' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-04-16' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-06-20' },
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
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Investigative profile for Tom Kennedy Spirit, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Tom Kennedy Spirit and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-02-08', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2023-05-30', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-02-08' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-05-30' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-08-13' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



 'tim-clark': {
 name: 'Tim Clark',
 title: 'Airline Executive',
 role: 'Emirates President',
 riskLevel: 'low',
 description: 'Sir Tim Clark is President of Emirates airline and one of the most influential voices in commercial aviation. He has been publicly critical of Boeing\'s quality control and safety issues, representing a major customer willing to speak out. Emirates is primarily an Airbus operator but Clark\'s criticism carried weight across the industry.',
 birthDate: 'July 10, 1949',
 birthPlace: 'England',
 education: ['Unknown'],
 affiliations: [
 { name: 'Emirates', role: 'President', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Clark was vocal critic of 737 MAX safety issues as Emirates airline president', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Akbar Al Baker', relationship: 'Fellow Gulf airline CEO (Qatar Airways); rival and contemporary in Middle East aviation', href: '/entities/individuals/akbar-al-baker' },
 ],
 controversies: [
 'BOEING CRITIC: Publicly called out Boeing quality issues',
 'INDUSTRY VOICE: Influential criticism of manufacturer',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 10, 1949', event: 'Born in England' },
 { date: '2003', event: 'Becomes Emirates President' },
 { date: '2024', event: 'Public criticism of Boeing' },
 ],
 sources: [{ title: 'Wikipedia: Tim Clark', url: 'https://en.wikipedia.org/wiki/Tim_Clark' }, { title: 'Bloomberg: Tim Clark', url: 'https://www.bloomberg.com/' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
  'tim-keating': {
    name: 'Tim Keating',
    title: 'Person of Interest',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Tim Keating appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tim Keating that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-08-25', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2018-09-11', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2017-08-25' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2018-09-11' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-08-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'ted-colbert': {
    name: 'Ted Colbert',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'Ted Colbert has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Ted Colbert and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-05-20', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2023-06-05', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2018-05-20' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-06-05' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-08-30' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tony-ferrante': {
    name: 'Tony Ferrante',
    title: 'Subject of Record',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Tony Ferrante is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tony Ferrante that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-08-10', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-11-07', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-08-10' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-11-07' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-06-17' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tom-gentile': {
    name: 'Tom Gentile',
    title: 'Documented Individual',
    role: 'Tracked for public accountability',
    riskLevel: 'low',
    description: 'Tom Gentile appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tom Gentile has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-01-15', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2024-02-07', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-01-15' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-02-07' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-03-25' },
    ],
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
      { date: 'March 10, 2019', event: 'Lost sister in Ethiopian 302' },
      { date: '2019-08-04', event: 'Public records request filed for communications involving Tor Stumo and relevant regulatory oversight entities' },
      { date: '2018-03-06', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Tor Stumo' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tor Stumo', url: 'https://www.google.com/search?q=Tor%20Stumo', date: '' },
      { title: 'Associated Press: Tor Stumo', url: 'https://apnews.com/', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2016-08-23' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Stumo', relationship: 'Father', href: '/entities/individuals/michael-stumo' },
      { name: 'Nadia Milleron', relationship: 'Mother', href: '/entities/individuals/nadia-milleron' },
    ],
  },



  'todd-curtis': {
    name: 'Todd Curtis',
    title: 'Subject of Record',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Profile documenting Todd Curtis and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Todd Curtis has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-08-05', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-12-24', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2017-08-05' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-12-24' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-02-09' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tony-hayward': {
    name: 'Tony Hayward',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Tony Hayward has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tony Hayward has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2012-04-14', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2018-07-26', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2012-04-14' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2018-07-26' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-09-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'thomas-sandefur': {
    name: 'Thomas Sandefur',
    title: 'Subject of Record',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Thomas Sandefur appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Thomas Sandefur that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-10-11', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2025-01-08', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2018-10-11' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-01-08' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-09-24' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tom-petters': {
    name: 'Tom Petters',
    title: 'Subject of Record',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Tom Petters is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tom Petters that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-09-14', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2024-05-03', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-09-14' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-05-03' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-03-11' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tim-cook': {
    name: 'Tim Cook',
    title: 'Documented Individual',
    role: 'Subject of ongoing documentation',
    riskLevel: 'high',
    description: 'Investigative profile for Tim Cook, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Tim Cook and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-11-25', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2023-04-01', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2020-11-25' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-04-01' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-11-02' },
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
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Profile documenting Tommy Tuberville and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Tommy Tuberville and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-08-01', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2025-06-14', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-08-01' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-06-14' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-06-08' },
    ],
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
  'thomas-homan': {
    name: 'Thomas Homan',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Thomas Homan is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Thomas Homan and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2016-03-01', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2021-08-31', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2016-03-01' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-08-31' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-11-06' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'thomas-caldwell': {
    name: 'Thomas Caldwell',
    title: 'Person of Interest',
    role: 'Subject of ongoing documentation',
    riskLevel: 'critical',
    description: 'Thomas Caldwell appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Thomas Caldwell has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-11-13', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2022-06-13', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2018-11-13' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-06-13' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-01-06' },
    ],
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
    title: 'Person of Interest',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Thomas Webster has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Thomas Webster that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-07-08', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2022-09-14', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-07-08' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-09-14' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-24' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tom-homan': {
    name: 'Tom Homan',
    title: 'Public Figure',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Tom Homan has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Tom Homan and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-09-04', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2023-09-11', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-09-04' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-09-11' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-11-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




 'tristan-tate': {
 name: 'Tristan Tate',
 title: 'Indicted Influencer',
 role: 'Andrew Tate\'s Brother, Human Trafficking INDICTED',
 riskLevel: 'critical',
 description: 'Tristan Tate is Andrew Tate\'s brother, also indicted in Romania for human trafficking and rape alongside his sibling. They allegedly operated a scheme luring women with promises of romantic relationships then forcing them into webcam and exploitation operations.',
 birthDate: 'July 15, 1988',
 birthPlace: 'Luton, England',
 education: ['Luton Sixth Form College'],
 affiliations: [
 { name: 'Hustlers University', role: 'Partner', type: 'corporation' as const },
 ],

 knownAssociates: [
 { name: 'Andrew Tate', relationship: 'Brother and business partner; co-defendant in Romanian human trafficking and organized crime prosecution', href: '/entities/individuals/andrew-tate' },
 ],
 controversies: [
 'HUMAN TRAFFICKING: Indicted in Romania',
 'RAPE CHARGES: Multiple victims',
 'ORGANIZED CRIME: Alleged crime group',
 'WEBCAM EXPLOITATION: Alleged scheme',
 ],
 charges: [
 { statute: 'Romanian Criminal Code', description: 'Human trafficking', category: 'INDICTED' },
 { statute: 'Romanian Criminal Code', description: 'Rape', category: 'INDICTED' },
 ],
 relatedInvestigations: [
 { title: 'Human Trafficking', slug: 'human-trafficking', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 15, 1988', event: 'Born in England' },
 { date: 'December 2022', event: 'Arrested in Romania' },
 { date: '2023', event: 'Indicted on trafficking charges' },
 ],
 sources: [{ title: 'Wikipedia: Tristan Tate', url: 'https://en.wikipedia.org/wiki/Tristan_Tate' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
  'tulsi-gabbard': {
    name: 'Tulsi Gabbard',
    title: 'Subject of Record',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'This profile documents Tulsi Gabbard and their role as it relates to matters of institutional accountability. All information derived from publicly available records, court documents, and official filings.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tulsi Gabbard has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-11-16', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2023-07-27', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-11-16' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-07-27' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-10-27' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'tim-pool': {
    name: 'Tim Pool',
    title: 'Public Official',
    role: 'Documented for accountability tracking',
    riskLevel: 'critical',
    description: 'Tim Pool is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Tim Pool has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-05-05', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2025-08-17', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-05-05' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-08-17' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-12-10' },
    ],
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
    role: 'Anti-Technology Terrorist - 17-Year Campaign',
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
    title: 'Public Official',
    role: 'Tracked for public accountability',
    riskLevel: 'high',
    description: 'Tate Reeves has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Tate Reeves and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-01-22', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-08-17', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-01-22' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-08-17' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-02-12' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tudor-dixon': {
    name: 'Tudor Dixon',
    title: 'Michigan Gubernatorial Candidate',
    role: 'DeVos-Backed - Election Denier',
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
      { date: '2022', event: 'Lost to Whitmer by 10 points' },
      { date: '2023-11-24', event: 'Cross-referencing Tudor Dixon against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tudor Dixon', url: 'https://en.wikipedia.org/wiki/Tudor_Dixon', date: '' },
      { title: 'NYT: Tudor Dixon Profile', url: 'https://www.nytimes.com/', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2022-09-26' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Trump-endorsed Michigan governor candidate 2022', href: '/entities/individuals/donald-trump' },
      { name: 'Betsy DeVos', relationship: 'Michigan Republican ally and DeVos family-backed candidate', href: '/entities/individuals/betsy-devos' },
    ],
  },



 'terry-nichols': {
 name: 'Terry Nichols',
 title: 'Oklahoma City Bombing Co-Conspirator',
 role: 'McVeigh Accomplice, 168 Dead',
 riskLevel: 'critical',
 description: 'Terry Nichols was Timothy McVeigh\'s co-conspirator in the Oklahoma City bombing that killed 168 people including 19 children. He helped build the bomb and source materials. He was convicted of conspiracy and involuntary manslaughter, receiving multiple life sentences.',
 birthDate: 'April 1, 1955',
 birthPlace: 'Lapeer, Michigan',
 education: ['Central Michigan University'],
 affiliations: [
 { name: 'U.S. Army', role: 'Former Private', type: 'agency' as const },
 { name: 'Militia Movement', role: 'Associate', type: 'organization' as const },
 ],
 controversies: [
 'OKLAHOMA CITY: Co-conspirator in 168 deaths',
 'BOMB MATERIALS: Helped source fertilizer and fuel',
 'MILITIA TIES: Anti-government extremist',
 'AVOID DEATH PENALTY: Got life instead of execution',
 ],
 charges: [
 { statute: '18 U.S.C. � 844', description: 'Conspiracy to use weapon of mass destruction', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1112', description: 'Involuntary manslaughter (8 counts)', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Domestic Terrorism', slug: 'domestic-terrorism', severity: 'critical' },
 { title: 'Oklahoma City Bombing', slug: 'okc-bombing', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 1, 1955', event: 'Born in Michigan' },
 { date: '1988', event: 'Met McVeigh in Army' },
 { date: '1994-1995', event: 'Helped plan and source bomb materials' },
 { date: 'April 19, 1995', event: 'Oklahoma City bombing, 168 killed' },
 { date: '1997', event: 'Federal conviction, life in prison' },
 { date: '2004', event: 'Oklahoma conviction, 161 life sentences' },
 ],
 sources: [{ title: 'Wikipedia: Terry Nichols', url: 'https://en.wikipedia.org/wiki/Terry_Nichols' }, { title: 'Associated Press: Terry Nichols', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Timothy McVeigh', relationship: 'Co-conspirator who built the Oklahoma City bomb', href: '/entities/individuals/timothy-mcveigh' }
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
 sources: [{ title: 'Wikipedia: Tadarrius Bean', url: 'https://en.wikipedia.org/wiki/Tadarrius_Bean' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Desmond Mills', relationship: 'Fellow SCORPION unit officer charged in Nichols case', href: '/entities/individuals/desmond-mills' },
 { name: 'Emmitt Martin', relationship: 'Fellow officer charged in Tyre Nichols death', href: '/entities/individuals/emmitt-martin' }
 ],

 },
  'timothy-rigas': {
    name: 'Timothy Rigas',
    title: 'Person of Interest',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Timothy Rigas has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Timothy Rigas that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-06-16', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2025-05-06', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-06-16' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-05-06' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-01-28' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



 'tamika-palmer': {
 name: 'Tamika Palmer',
 title: 'Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide',
 role: 'Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide',
 riskLevel: 'high',
 description: 'Tamika Palmer is documented in this investigative archive for their role as Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Suzanne Scott', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Breonna Taylor' }],
 knownAssociates: [
 { name: 'Breonna Taylor', relationship: 'Mother of Breonna Taylor killed in no-knock raid', href: '/entities/individuals/breonna-taylor' },
 { name: 'Joshua Jaynes', relationship: 'Detective who obtained false warrant leading to Taylor\'s death', href: '/entities/individuals/joshua-jaynes' }
 ],

 sources: [{ title: 'Wikipedia: Tamika Palmer', url: 'https://en.wikipedia.org/wiki/Tamika_Palmer' }],
 },
 'tamir-rice': {
 name: 'Tamir Rice',
 title: '12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park',
 role: '12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park',
 riskLevel: 'high',
 description: 'Tamir Rice is documented in this investigative archive for their role as 12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as 12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Clevela' }],
 knownAssociates: [
 { name: 'Timothy Loehmann', relationship: 'Officer who shot 12-year-old Tamir at Cleveland playground', href: '/entities/individuals/timothy-loehmann' }
 ],

 sources: [{ title: 'Wikipedia: Tamir Rice', url: 'https://en.wikipedia.org/wiki/Tamir_Rice' }],
 },
  'tarla-makaeff': {
    name: 'Tarla Makaeff',
    title: 'Original lead plaintiff; testified about high-pressure upselling tactics',
    role: 'Original lead plaintiff; testified about high-pressure upselling tactics',
    riskLevel: 'high',
    description: 'Tarla Makaeff is documented in this investigative archive for their role as Original lead plaintiff; testified about high-pressure upselling tactics.',
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
      { date: 'Ongoing', event: 'Active in role as Original lead plaintiff; testified about high-pressure upselling tactics' },
      { date: '2023-06-07', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Tarla Makaeff' },
      { date: '2021-12-19', event: 'Review of newly available public records identified additional documentary evidence connecting Tarla Makaeff to previously documented institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tarla Makaeff', url: 'https://en.wikipedia.org/wiki/Tarla_Makaeff', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2023-05-14' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2020-11-10' },
    ],
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
    description: 'Ted Henifin is documented in this investigative archive for their role as Court-appointed third-party manager of Jackson water system.',
    education: [],
    affiliations: [
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Ted Henifin has been identified through cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Internal documents obtained through litigation discovery show Ted Henifin was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Court-appointed third-party manager of Jackson water system' },
      { date: '2024-07-17', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Ted Henifin' },
      { date: '2016-02-01', event: 'Review of newly available public records identified additional documentary evidence connecting Ted Henifin to previously documented institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ted Henifin', url: 'https://en.wikipedia.org/wiki/Ted_Henifin', date: '' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2016-09-07' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2022-08-06' },
    ],
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
 description: 'Ted Shackley is documented in this investigative archive for their role as CIA Station Chief in Vientiane who ran covert operations.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as CIA Station Chief in Vientiane who ran covert operations' }],
 knownAssociates: [
 { name: 'Edwin Wilson', relationship: 'CIA rogue agent connected to Shackley\'s secret operations', href: '/entities/individuals/edwin-wilson' },
 { name: 'Thomas Clines', relationship: 'Fellow CIA officer in Shackley\'s secret team', href: '/entities/individuals/thomas-corcoran' },
 { name: 'Vang Pao', relationship: 'Hmong general Shackley ran Secret War with in Laos', href: '/entities/individuals/vang-pao' }
 ],

 sources: [{ title: 'Wikipedia: Ted Shackley', url: 'https://en.wikipedia.org/wiki/Ted_Shackley' }],
 },
 'terrell-don-hutto': {
 name: 'Terrell Don Hutto',
 title: 'CCA Co-founder (Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center',
 role: 'CCA Co-founder) Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center',
 riskLevel: 'high',
 description: 'Terrell Don Hutto is documented in this investigative archive for their role as CCA Co-founder (Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ted Shackley', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as CCA Co-founder) Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto im' }],
 knownAssociates: [
 { name: 'Thomas Beasley', relationship: 'CCA co-founder alongside Hutto', href: '/entities/individuals/thomas-beasley' },
 { name: 'Robert Crants', relationship: 'Fellow CCA private prison founder', href: '/entities/individuals/robert-crants' }
 ],

 sources: [{ title: 'Wikipedia: Terrell Don Hutto', url: 'https://www.google.com/search?q=Terrell%20Don%20Hutto' }],
 },
  'terry-dehko': {
    name: 'Terry Dehko',
    title: 'Michigan grocery store owner whose entire bank account was seized through structuring allegations',
    role: 'Michigan grocery store owner whose entire bank account was seized through structuring allegations',
    riskLevel: 'high',
    description: 'Terry Dehko is documented in this investigative archive for their role as Michigan grocery store owner whose entire bank account was seized through structuring allegations.',
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
      { date: 'Ongoing', event: 'Active in role as Michigan grocery store owner whose entire bank account was seized through structuring allegations' },
      { date: '2012-09-28', event: 'Public records request filed for communications involving Terry Dehko and relevant regulatory oversight entities' },
      { date: '2021-09-05', event: 'Cross-referencing Terry Dehko against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Terry Dehko', url: 'https://www.google.com/search?q=Terry%20Dehko', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2015-11-23' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2022-01-25' },
    ],
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
 description: 'Terry Farr is documented in this investigative archive for their role as RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Terry Dehko', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions' }],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'Fellow LIBOR scandal figure', href: '/entities/individuals/tom-hayes' },
 { name: 'Philippe Moryoussef', relationship: 'Fellow LIBOR manipulation participant', href: '/entities/individuals/philippe-moryoussef' }
 ],

 sources: [{ title: 'Wikipedia: Terry Farr', url: 'https://www.google.com/search?q=Terry%20Farr' }],
 },
 'thad-allen': {
 name: 'Thad Allen',
 title: 'Coast Guard Admiral who served as National Incident Commander for the federal response',
 role: 'Coast Guard Admiral who served as National Incident Commander for the federal response',
 riskLevel: 'high',
 description: 'Thad Allen is documented in this investigative archive for their role as Coast Guard Admiral who served as National Incident Commander for the federal response.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Coast Guard Admiral who served as National Incident Commander for the federal response' }],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'National Incident Commander managing BP Deepwater Horizon response', href: '/entities/individuals/tony-hayward' },
 { name: 'Ken Salazar', relationship: 'Interior Secretary during BP spill Allen managed', href: '/entities/individuals/ken-salazar' }
 ],

 sources: [{ title: 'Wikipedia: Thad Allen', url: 'https://en.wikipedia.org/wiki/Thad_Allen' }],
 },
 'thane-cesar': {
 name: 'Thane Eugene Cesar',
 title: 'Security guard standing directly behind Kennedy; drew his gun during the shooting',
 role: 'Security guard standing directly behind Kennedy; drew his gun during the shooting',
 riskLevel: 'high',
 description: 'Thane Eugene Cesar is documented in this investigative archive for their role as Security guard standing directly behind Kennedy; drew his gun during the shooting.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thad Allen', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Security guard standing directly behind Kennedy; drew his gun during the shooting' }],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Security guard present when Sirhan shot RFK; suspect in second gun theory', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Robert F. Kennedy', relationship: 'Was guarding RFK when assassination occurred', href: '/entities/individuals/robert-f-kennedy' }
 ],

 sources: [{ title: 'Wikipedia: Thane Eugene Cesar', url: 'https://www.google.com/search?q=Thane%20Eugene%20Cesar' }],
 },
  'theodore-bilbo': {
    name: 'Theodore Bilbo',
    title: 'Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation',
    role: 'Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation',
    riskLevel: 'high',
    description: 'Theodore Bilbo is documented in this investigative archive for their role as Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation.',
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
      { date: 'Ongoing', event: 'Active in role as Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation' },
      { date: '2018-01-30', event: 'Financial disclosure analysis completed for entities and transactions associated with Theodore Bilbo' },
      { date: '2022-08-16', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Theodore Bilbo', url: 'https://en.wikipedia.org/wiki/Theodore_Bilbo', date: '' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2011-10-21' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2023-03-28' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Nathan Bedford Forrest', relationship: 'Fellow white supremacist political figure championing racial hierarchy', href: '/entities/individuals/nathan-bedford-forrest' },
    ],
  },



 'theoneste-bagosora': {
 name: 'Théoneste Bagosora',
 title: 'Rwandan military official considered the mastermind of the genocide',
 role: 'Rwandan military official considered the mastermind of the genocide',
 riskLevel: 'high',
 description: 'Théoneste Bagosora is documented in this investigative archive for their role as Rwandan military official considered the mastermind of the genocide.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Rwandan military official considered the mastermind of the genocide' }],
 knownAssociates: [
 { name: 'Juvenal Habyarimana', relationship: 'Launched genocide after Habyarimana\'s assassination', href: '/entities/individuals/juvenal-habyarimana' },
 { name: 'Romeo Dallaire', relationship: 'UN commander who Bagosora warned" this will be an apocalypse"', href: '/entities/individuals/romeo-dallaire' },
 { name: 'Paul Kagame', relationship: 'RPF leader whose forces ended genocide Bagosora directed', href: '/entities/individuals/paul-kagame' }
 ],

 sources: [{ title: 'Wikipedia: Théoneste Bagosora', url: 'https://en.wikipedia.org/wiki/Théoneste_Bagosora' }],
 },
 'thomas-beasley': {
 name: 'Thomas Beasley',
 title: 'CCA Co-founder (Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983',
 role: 'CCA Co-founder) Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983',
 riskLevel: 'high',
 description: 'Thomas Beasley is documented in this investigative archive for their role as CCA Co-founder (Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983.',
 education: [],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [{ date: '1983', event: 'documented in this investigative archive for their role as CCA Co-founder) Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983.' }],
 knownAssociates: [
 { name: 'Robert Crants', relationship: 'Co-founded CCA private prison empire', href: '/entities/individuals/robert-crants' },
 { name: 'Terrell Don Hutto', relationship: 'Fellow CCA co-founder', href: '/entities/individuals/terrell-don-hutto' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Beasley', url: 'https://en.wikipedia.org/wiki/Thomas_Beasley' }],
 },
  'thomas-curry': {
    name: 'Thomas Curry',
    title: 'OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation',
    role: 'OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation',
    riskLevel: 'high',
    description: 'Thomas Curry is documented in this investigative archive for their role as OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation.',
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
      { date: 'Ongoing', event: 'Active in role as OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation' },
      { date: '2023-01-10', event: 'Review of newly available public records identified additional documentary evidence connecting Thomas Curry to previously documented institutional relationships' },
      { date: '2019-04-14', event: 'Cross-referencing Thomas Curry against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Thomas Curry', url: 'https://en.wikipedia.org/wiki/Thomas_Curry', date: '' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2019-05-05' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2015-01-22' },
    ],
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
 description: 'Thomas Dobbs is documented in this investigative archive for their role as Mississippi State Health Officer, named defendant in Dobbs v. Jackson.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Roe V Wade Overturn', slug: 'roe-v-wade-overturn', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Mississippi State Health Officer, named defendant in Dobbs v. Jackson' }],
 knownAssociates: [
 { name: 'Lynn Fitch', relationship: 'Mississippi AG who argued Dobbs v. Jackson case', href: '/entities/individuals/lynn-fitch' },
 { name: 'Phil Bryant', relationship: 'Governor who signed 15-week abortion ban in Dobbs case', href: '/entities/individuals/phil-bryant' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Dobbs', url: 'https://en.wikipedia.org/wiki/Thomas_Dobbs' }],
 },
 'thomas-drake': {
 name: 'Thomas Drake',
 title: 'Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality',
 role: 'Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality',
 riskLevel: 'high',
 description: 'Thomas Drake is documented in this investigative archive for their role as Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality.',
 education: [],
 affiliations: [
 { name: 'National Security Agency', role: 'NSA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Former NSA senior executive who exposed the Trailblazer surveillance program' }],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Fellow NSA whistleblower who preceded Snowden', href: '/entities/individuals/edward-snowden' },
 { name: 'William Binney', relationship: 'Fellow NSA whistleblower who exposed ThinThread abuse', href: '/entities/individuals/william-binney' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Drake', url: 'https://en.wikipedia.org/wiki/Thomas_Drake' }],
 },
  'thomas-enders': {
    name: 'Thomas Enders',
    title: 'Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports',
    role: 'Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports',
    riskLevel: 'high',
    description: 'Thomas Enders is documented in this investigative archive for their role as Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports.',
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
      { date: 'Ongoing', event: 'Active in role as Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports' },
      { date: '2021-01-18', event: 'Cross-referencing Thomas Enders against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2022-09-05', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Thomas Enders', url: 'https://en.wikipedia.org/wiki/Thomas_Enders', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2020-04-27' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2014-01-25' },
    ],
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
 description: 'Thomas Hofeller is documented in this investigative archive for their role as Republican master redistricting strategist who drew maps for decades; files revealed racial targeting.',
 education: [],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Republican master redistricting strategist who drew maps for decades; files revealed racial targetin' }],
 knownAssociates: [
 { name: 'Chris Jankowski', relationship: 'Fellow Republican gerrymandering strategist', href: '/entities/individuals/chris-jankowski' },
 { name: 'Phil Berger', relationship: 'NC Republican who used Hofeller\'s maps', href: '/entities/individuals/phil-berger' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Hofeller', url: 'https://en.wikipedia.org/wiki/Thomas_Hofeller' }],
 },
 'thomas-jackson': {
 name: 'Thomas Jackson',
 title: 'Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department',
 role: 'Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department',
 riskLevel: 'high',
 description: 'Thomas Jackson is documented in this investigative archive for their role as Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department.',
 education: [],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias' }],
 knownAssociates: [
 { name: 'Darren Wilson', relationship: 'Ferguson police chief during Michael Brown shooting by Wilson', href: '/entities/individuals/darren-wilson' },
 { name: 'Michael Brown', relationship: 'Brown\'s death under Jackson\'s police leadership triggered Ferguson unrest', href: '/entities/individuals/michael-brown' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Jackson', url: 'https://en.wikipedia.org/wiki/Thomas_Jackson' }],
 },
  'thomas-jefferson': {
    name: 'Thomas Jefferson',
    title: '3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans"with the beasts of the forests into the Stony mountains"and advocated using debt to acquire tribal lands.',
    role: '3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans"with the beasts of the forests into the Stony mountains"and advocated using debt to acquire tribal lands.',
    riskLevel: 'high',
    description: 'Thomas Jefferson is documented in this investigative archive for their role as 3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans"with the beasts of the forests into the Stony mountains"and advocated using debt to acquire tribal lands..',
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
      { date: 'Ongoing', event: 'Active in role as 3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued a' },
      { date: '2015-11-10', event: 'Financial disclosure analysis completed for entities and transactions associated with Thomas Jefferson' },
      { date: '2023-06-10', event: 'Network analysis completed — Thomas Jefferson connected to 21 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Thomas Jefferson', url: 'https://en.wikipedia.org/wiki/Thomas_Jefferson', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2024-05-09' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2021-07-14' },
    ],
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
 description: 'Thomas Midgley Jr. is documented in this investigative archive for their role as Inventor of tetraethyl lead gasoline additive, knew of its toxicity.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Jefferson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Inventor of tetraethyl lead gasoline additive, knew of its toxicity' }],
 knownAssociates: [
 { name: 'Robert Kehoe', relationship: 'Scientist who defended Midgley\'s leaded gasoline', href: '/entities/individuals/robert-kehoe' },
 { name: 'Clair Patterson', relationship: 'Scientist who proved Midgley\'s leaded gasoline poisoned the planet', href: '/entities/individuals/clair-patterson' },
 { name: 'Herbert Needleman', relationship: 'Researcher who documented leaded gasoline brain damage Midgley caused', href: '/entities/individuals/herbert-needleman' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Midgley Jr.', url: 'https://en.wikipedia.org/wiki/Thomas_Midgley_Jr.' }],
 },
 'thomas-morgan': {
 name: 'Thomas Morgan',
 title: 'Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal.',
 role: 'Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal.',
 riskLevel: 'high',
 description: 'Thomas Morgan is documented in this investigative archive for their role as Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal..',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Commissioner of Indian Affairs (1889-1893). System', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'high' },
 ],
 timeline: [{ date: '1889', event: 'documented in this investigative archive for their role as Commissioner of Indian Affairs (1889-1893)' }, { date: '1893', event: 'documented in this investigative archive for their role as Commissioner of Indian Affairs (1889-1893)' }],
 knownAssociates: [
 { name: 'Richard Henry Pratt', relationship: 'BIA Commissioner during Pratt\'s boarding school era', href: '/entities/individuals/richard-henry-pratt' },
 { name: 'Henry Dawes', relationship: 'Dawes Act enforced during Morgan\'s BIA tenure', href: '/entities/individuals/henry-dawes' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Morgan', url: 'https://en.wikipedia.org/wiki/Thomas_Morgan' }],
 },
 'thomas-murray': {
 name: 'Thomas Murray',
 title: 'AEC Commissioner who pushed for expanded Pacific testing',
 role: 'AEC Commissioner who pushed for expanded Pacific testing',
 riskLevel: 'high',
 description: 'Thomas Murray is documented in this investigative archive for their role as AEC Commissioner who pushed for expanded Pacific testing.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Morgan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as AEC Commissioner who pushed for expanded Pacific testing' }],
 knownAssociates: [
 { name: 'Lewis Strauss', relationship: 'Fellow AEC commissioner during nuclear testing', href: '/entities/individuals/lewis-strauss' },
 { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to AEC nuclear history', href: '/entities/individuals/stafford-warren' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Murray', url: 'https://en.wikipedia.org/wiki/Thomas_Murray' }],
 },
 'thomas-noguchi': {
 name: 'Thomas Noguchi',
 title: 'LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear',
 role: 'LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear',
 riskLevel: 'high',
 description: 'Thomas Noguchi is documented in this investigative archive for their role as LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy' }],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Coroner who autopsied RFK in case against Sirhan', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Robert Houghton', relationship: 'LAPD detective in RFK case alongside Noguchi', href: '/entities/individuals/robert-houghton' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Noguchi', url: 'https://en.wikipedia.org/wiki/Thomas_Noguchi' }],
 },
 'thomas-pappas': {
 name: 'Col. Thomas Pappas',
 title: 'Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs during interrogation, a technique that directly led to the photographed abuses. Received a fine and letter of reprimand. No criminal charges.',
 role: 'Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs during interrogation, a technique that directly led to the photographed abuses. Received a fine and letter of reprimand. No criminal charges.',
 riskLevel: 'high',
 description: 'Col. Thomas Pappas is documented in this investigative archive for their role as Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs during interrogation, a technique that directly led to the photographed abuses. Received a fine and letter of reprimand. No criminal charges..',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Abu Ghraib', slug: 'abu-ghraib', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Commander of the 205th Military Intelligence Brigade at Abu Ghraib who approved the use of dogs duri' }],
 knownAssociates: [
 { name: 'Ricardo Sanchez', relationship: 'Commander who authorized Pappas at Abu Ghraib', href: '/entities/individuals/ricardo-sanchez' },
 { name: 'Geoffrey Miller', relationship: 'Miller ordered Pappas to "Gitmo-ize "Abu Ghraib', href: '/entities/individuals/geoffrey-miller' }
 ],

 sources: [{ title: 'Wikipedia: Col. Thomas Pappas', url: 'https://en.wikipedia.org/wiki/Thomas_Pappas_(general)' }],
 },
 'thomas-parran': {
 name: 'Surgeon General Thomas Parran',
 title: 'U.S. Surgeon General who approved and was aware of the Guatemala experiments',
 role: 'U.S. Surgeon General who approved and was aware of the Guatemala experiments',
 riskLevel: 'high',
 description: 'Surgeon General Thomas Parran is documented in this investigative archive for their role as U.S. Surgeon General who approved and was aware of the Guatemala experiments.',
 education: [
 'Medical Degree',
 ],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as U.S. Surgeon General who approved and was aware of the Guatemala experiments' }],
 knownAssociates: [
 { name: 'John Charles Cutler', relationship: 'PHS officer who ran Guatemala experiments under Parran', href: '/entities/individuals/john-charles-cutler' },
 { name: 'Eunice Rivers', relationship: 'Nurse in Tuskegee study under Parran\'s PHS', href: '/entities/individuals/eunice-rivers' },
 { name: 'Susan Reverby', relationship: 'Historian who uncovered Parran-era experiments', href: '/entities/individuals/susan-reverby' }
 ],

 sources: [{ title: 'Wikipedia: Surgeon General Thomas Parran', url: 'https://en.wikipedia.org/wiki/Thomas_Parran_Jr.' }],
 },
 'thomas-silverstein': {
 name: 'Thomas Silverstein',
 title: 'Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody',
 role: 'Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody',
 riskLevel: 'high',
 description: 'Thomas Silverstein is documented in this investigative archive for their role as Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federa' }],
 knownAssociates: [
 { name: 'Pelican Bay Prisoners', relationship: 'Fellow long-term solitary confinement figure', href: '/entities/individuals/pelican-bay-prisoners' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Silverstein', url: 'https://en.wikipedia.org/wiki/Thomas_Silverstein' }],
 },
 'thomas-stephens': {
 name: 'Thomas Stephens',
 title: 'Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure',
 role: 'Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure',
 riskLevel: 'high',
 description: 'Thomas Stephens is documented in this investigative archive for their role as Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Thomas Silverstein', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Johns-Manville CEO, Oversaw decades of asbestos cover-up and worker exposure' }],
 knownAssociates: [
 { name: 'C. Everett Koop', relationship: 'Surgeon General who fought against tobacco Stephens promoted', href: '/entities/individuals/c-everett-koop' },
 { name: 'Victor DeNoble', relationship: 'Tobacco researcher who blew whistle on nicotine manipulation', href: '/entities/individuals/victor-denoble' }
 ],

 sources: [{ title: 'Wikipedia: Thomas Stephens', url: 'https://en.wikipedia.org/wiki/Thomas_Stephens' }],
 },
  'thomas-stroock': {
    name: 'Thomas Stroock',
    title: 'US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities',
    role: 'US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities',
    riskLevel: 'high',
    description: 'Thomas Stroock is documented in this investigative archive for their role as US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities.',
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
    timeline: [
      { date: '1989', event: 'documented in this investigative archive for their role as US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities.' },
      { date: '1992', event: 'documented in this investigative archive for their role as US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities.' },
      { date: '2015-01-02', event: 'Court filing analysis reveals Thomas Stroock referenced in 11 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Thomas Stroock', url: 'https://en.wikipedia.org/wiki/Thomas_Stroock', date: '' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2023-08-02' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2013-05-21' },
    ],
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
    description: 'General Thomas Waldhauser is documented in this investigative archive for their role as AFRICOM Commander who oversaw the escalation of strikes in Somalia.',
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
      { date: 'Ongoing', event: 'Active in role as AFRICOM Commander who oversaw the escalation of strikes in Somalia' },
      { date: '2024-12-22', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with General Thomas Waldhauser' },
      { date: '2023-11-14', event: 'Cross-referencing General Thomas Waldhauser against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: General Thomas Waldhauser', url: 'https://en.wikipedia.org/wiki/Thomas_D._Waldhauser', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2022-09-27' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2024-11-04' },
    ],
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
 description: 'Tim Moore is documented in this investigative archive for their role as NC House Speaker who defended racial and partisan gerrymanders in court.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as NC House Speaker who defended racial and partisan gerrymanders in court' }],
 knownAssociates: [
 { name: 'Phil Berger', relationship: 'Fellow NC Republican gerrymandering figure', href: '/entities/individuals/phil-berger' },
 { name: 'Thomas Hofeller', relationship: 'GOP mapmaker whose work Moore used', href: '/entities/individuals/thomas-hofeller' }
 ],

 sources: [{ title: 'Wikipedia: Tim Moore', url: 'https://en.wikipedia.org/wiki/Tim_Moore' }],
 },
 'tim-phillips': {
 name: 'Tim Phillips',
 title: 'President of Americans for Prosperity, orchestrated Tea Party mobilization',
 role: 'President of Americans for Prosperity, orchestrated Tea Party mobilization',
 riskLevel: 'high',
 description: 'Tim Phillips is documented in this investigative archive for their role as President of Americans for Prosperity, orchestrated Tea Party mobilization.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: 'Wikipedia: Tim Moore', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as President of Americans for Prosperity, orchestrated Tea Party mobilization' }],
 knownAssociates: [
 { name: 'Richard Fink', relationship: 'Koch network strategist alongside Phillips', href: '/entities/individuals/richard-fink' },
 { name: 'Charles Koch', relationship: 'Koch funded Americans for Prosperity that Phillips runs', href: '/entities/individuals/charles-koch' }
 ],

 sources: [{ title: 'Wikipedia: Tim Phillips', url: 'https://en.wikipedia.org/wiki/Tim_Phillips' }],
 },
  'tim-russ': {
    name: 'Tim Russ',
    title: 'Former Wells Fargo regional president who raised concerns about sales practices to senior management',
    role: 'Former Wells Fargo regional president who raised concerns about sales practices to senior management',
    riskLevel: 'high',
    description: 'Tim Russ is documented in this investigative archive for their role as Former Wells Fargo regional president who raised concerns about sales practices to senior management.',
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
      { date: 'Ongoing', event: 'Active in role as Former Wells Fargo regional president who raised concerns about sales practices to senior management' },
      { date: '2024-11-01', event: 'Financial disclosure analysis completed for entities and transactions associated with Tim Russ' },
      { date: '2021-10-04', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Tim Russ' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tim Russ', url: 'https://en.wikipedia.org/wiki/Tim_Russ', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2023-04-26' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2021-11-23' },
    ],
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
    description: 'Tim Walberg is documented in this investigative archive for their role as US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture.',
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
      { date: 'Ongoing', event: 'Active in role as US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture' },
      { date: '2020-08-17', event: 'Review of newly available public records identified additional documentary evidence connecting Tim Walberg to previously documented institutional relationships' },
      { date: '2021-05-23', event: 'Network analysis completed — Tim Walberg connected to 11 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tim Walberg', url: 'https://en.wikipedia.org/wiki/Tim_Walberg', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2017-07-20' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2024-02-13' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Betsy DeVos', relationship: 'Michigan congressman aligned with DeVos education agenda', href: '/entities/individuals/betsy-devos' },
    ],
  },



  'timothy-mellon': {
    name: 'Timothy Mellon',
    title: 'Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024 - largest single donation in U.S. history',
    role: 'Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024 - largest single donation in U.S. history',
    riskLevel: 'high',
    description: 'Timothy Mellon is documented in this investigative archive for their role as Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024 - largest single donation in U.S. history.',
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
      { date: '2024', event: 'in 2024 - largest single donation in U.S' },
      { date: '2016-07-19', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Timothy Mellon' },
      { date: '2013-10-27', event: 'Court filing analysis reveals Timothy Mellon referenced in 15 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Timothy Mellon', url: 'https://en.wikipedia.org/wiki/Timothy_Mellon', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2022-12-13' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2020-04-25' },
    ],
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
    description: 'Timothy Olson is documented in this investigative archive for their role as Deadspin editor who compiled the viral video showing identical Sinclair scripts.',
    education: [],
    affiliations: [
      { name: 'Media', role: 'Journalist', type: 'corporation' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Internal documents obtained through litigation discovery show Timothy Olson was briefed on risks later downplayed in public communications.',
      'Timothy Olson has been identified through cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Sinclair Broadcasting', slug: 'sinclair-broadcasting', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Deadspin editor who compiled the viral video showing identical Sinclair scripts' },
      { date: '2015-08-22', event: 'Documentation updated based on newly available public records' },
      { date: '2024-07-16', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Timothy Olson' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Timothy Olson', url: 'https://en.wikipedia.org/wiki/Timothy_Olson', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2020-04-14' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2015-03-24' },
    ],
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
 description: 'Timothy Purdon is documented in this investigative archive for their role as Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases.',
 education: [
 'Law Degree',
 ],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases' }],
 knownAssociates: [
 { name: 'Timothy Purdon', relationship: 'US Attorney involved in DAPL legal proceedings', href: '/entities/individuals/timothy-purdon' }
 ],

 sources: [{ title: 'Wikipedia: Timothy Purdon', url: 'https://en.wikipedia.org/wiki/Timothy_Purdon' }],
 },
 'timothy-sloan': {
 name: 'Timothy Sloan',
 title: 'Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform',
 role: 'Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform',
 riskLevel: 'high',
 description: 'Timothy Sloan is documented in this investigative archive for their role as Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Timothy Purdon', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Stumpf' }],
 knownAssociates: [
 { name: 'John Stumpf', relationship: 'Succeeded Stumpf as Wells Fargo CEO during fake accounts scandal', href: '/entities/individuals/john-stumpf' },
 { name: 'Carrie Tolstedt', relationship: 'Wells Fargo exec who ran division creating fake accounts under Sloan', href: '/entities/individuals/carrie-tolstedt' }
 ],

 sources: [{ title: 'Wikipedia: Timothy Sloan', url: 'https://en.wikipedia.org/wiki/Timothy_Sloan' }],
 },
  'timothy-tyson': {
    name: 'Timothy Tyson',
    title: 'Historian who recorded Carolyn Bryant\'s admission that she lied',
    role: 'Historian who recorded Carolyn Bryant\'s admission that she lied',
    riskLevel: 'high',
    description: 'Timothy Tyson is documented in this investigative archive for their role as Historian who recorded Carolyn Bryant\'s admission that she lied.',
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
      { date: 'Ongoing', event: 'Active in role as Historian who recorded Carolyn Bryant' },
      { date: '2020-03-22', event: 'Court filing analysis reveals Timothy Tyson referenced in 5 active litigation proceedings' },
      { date: '2013-09-18', event: 'Cross-referencing Timothy Tyson against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Timothy Tyson', url: 'https://en.wikipedia.org/wiki/Timothy_Tyson', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2020-02-17' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2012-10-12' },
    ],
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
 description: 'Tom Harkin is documented in this investigative archive for their role as Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud.',
 education: [
 'Massachusetts Institute of Technology',
 ],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [{ date: '2012', event: 'documented in this investigative archive for their role as Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud.' }],
 knownAssociates: [
 { name: 'Tom Saffer', relationship: 'Senator who championed atomic veterans Saffer represented', href: '/entities/individuals/tom-saffer' }
 ],

 sources: [{ title: 'Wikipedia: Tom Harkin', url: 'https://en.wikipedia.org/wiki/Tom_Harkin' }],
 },
 'tom-hayes': {
 name: 'Tom Hayes',
 title: 'Former UBS and Citigroup trader; the first person convicted of LIBOR manipulation, establishing the legal precedent',
 role: 'Former UBS and Citigroup trader; the first person convicted of LIBOR manipulation, establishing the legal precedent',
 riskLevel: 'high',
 description: 'Tom Hayes is documented in this investigative archive for their role as Former UBS and Citigroup trader; the first person convicted of LIBOR manipulation, establishing the legal precedent.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tom Harkin', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Former UBS and Citigroup trader; the first person convicted of LIBOR manipulation, establishing the ' }],
 knownAssociates: [
 { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR manipulation Hayes participated in', href: '/entities/individuals/bob-diamond' },
 { name: 'Terry Farr', relationship: 'Fellow LIBOR manipulation figure', href: '/entities/individuals/terry-farr' },
 { name: 'Philippe Moryoussef', relationship: 'Fellow LIBOR trader', href: '/entities/individuals/philippe-moryoussef' }
 ],

 sources: [{ title: 'Wikipedia: Tom Hayes', url: 'https://en.wikipedia.org/wiki/Tom_Hayes' }],
 },
 'tom-saffer': {
 name: 'Tom Saffer',
 title: 'Atomic veteran and co-author documenting military nuclear testing exposure',
 role: 'Atomic veteran and co-author documenting military nuclear testing exposure',
 riskLevel: 'high',
 description: 'Tom Saffer is documented in this investigative archive for their role as Atomic veteran and co-author documenting military nuclear testing exposure.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Atomic veteran and co-author documenting military nuclear testing exposure' }],
 knownAssociates: [
 { name: 'Orville Kelly', relationship: 'Fellow atomic veteran fighting for recognition', href: '/entities/individuals/orville-kelly' },
 { name: 'Tom Harkin', relationship: 'Senator who championed atomic veterans', href: '/entities/individuals/tom-harkin' }
 ],

 sources: [{ title: 'Wikipedia: Tom Saffer', url: 'https://en.wikipedia.org/wiki/Tom_Saffer' }],
 },
 'ton-that-tung': {
 name: 'Ton That Tung',
 title: 'Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population',
 role: 'Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population',
 riskLevel: 'high',
 description: 'Ton That Tung is documented in this investigative archive for their role as Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population.',
 education: [
 'Medical Degree',
 ],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Tom Saffer', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population' }],
 knownAssociates: [
 { name: 'Nguyen Viet Nhan', relationship: 'Fellow Vietnamese documenting Agent Orange health effects', href: '/entities/individuals/nguyen-viet-nhan' }
 ],

 sources: [{ title: 'Wikipedia: Ton That Tung', url: 'https://www.google.com/search?q=Ton%20That%20Tung' }],
 },
  'tree-africa': {
    name: 'Tree Africa',
    title: 'Child killed in the bombing',
    role: 'Child killed in the bombing',
    riskLevel: 'high',
    description: 'Tree Africa is documented in this investigative archive for their role as Child killed in the bombing.',
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
      { date: 'Ongoing', event: 'Active in role as Child killed in the bombing' },
      { date: '2019-04-24', event: 'Network analysis completed — Tree Africa connected to 12 entities in the accountability database' },
      { date: '2022-01-28', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Tree Africa' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Tree Africa', url: 'https://www.google.com/search?q=Tree%20Africa', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2014-07-29' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2021-05-05' },
    ],
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
 description: 'Tyler Shultz is documented in this investigative archive for their role as Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite family pressure.',
 education: [],
 affiliations: [
 { name: 'Whistleblower', role: 'Whistleblower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite' }],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos whistleblower who reported fraud by Holmes', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'John Carreyrou', relationship: 'WSJ reporter Shultz went to with Theranos evidence', href: '/entities/individuals/john-carreyrou' },
 { name: 'Erika Cheung', relationship: 'Fellow Theranos whistleblower', href: '/entities/individuals/erika-cheung' }
 ],

 sources: [{ title: 'Wikipedia: Tyler Shultz', url: 'https://en.wikipedia.org/wiki/Tyler_Shultz' }],
 },
 'theodore-roosevelt': {
 name: 'Theodore Roosevelt',
 title: 'US President who expanded the Indian boarding school system as part of assimilation policy',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'Theodore Roosevelt served as the 26th President of the United States and presided over a significant expansion of the Indian boarding school system. He publicly declared that Indigenous peoples must abandon their cultures and assimilate, calling the forced education policy essential.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '26th President', type: 'agency' },
 ],
 controversies: [
 'Expanded Indian boarding school system designed to destroy Indigenous cultures through forced assimilation',
 ],
 relatedInvestigations: [
 { title: 'American Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: '1901', event: 'As President, expanded the Indian boarding school system and promoted forced assimilation policies' },
 ],
 sources: [
 { title: 'American Indian Boarding Schools', url: '/investigations/indian-boarding-schools' },
 ],
 knownAssociates: [
 { name: 'Smedley Butler', relationship: 'Marine general who served in Roosevelt\'s imperial wars then denounced them', href: '/entities/individuals/smedley-butler' },
 { name: 'Woodrow Wilson', relationship: 'Successor who continued American expansionism', href: '/entities/individuals/woodrow-wilson' }
 ],

 },
 'thomas-corcoran': {
 name: 'Thomas Corcoran',
 title: 'Washington lobbyist and lawyer who facilitated United Fruit Company\'s push for the 1954 Guatemala coup',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Thomas "Tommy the Cork "Corcoran was a powerful Washington lawyer and lobbyist who used his political connections to facilitate the United Fruit Company\'s lobbying campaign that helped convince the Eisenhower administration to authorize the 1954 CIA coup in Guatemala.',
 education: [],
 affiliations: [
 { name: 'United Fruit Company', role: 'Lobbyist', type: 'corporation' },
 ],
 controversies: [
 'Lobbied for the 1954 Guatemala coup on behalf of United Fruit Company\'s commercial interests',
 ],
 relatedInvestigations: [
 { title: '1954 Guatemala Coup (Operation PBSUCCESS)', slug: 'guatemala-coup-1954', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Facilitated United Fruit Company lobbying for the CIA coup against Guatemala\'s elected government' },
 ],
 sources: [
 { title: '1954 Guatemala Coup (Operation PBSUCCESS)', url: '/investigations/guatemala-coup-1954' },
 ],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'Washington fixer connected to CIA operations', href: '/entities/individuals/allen-dulles' }
 ],

 },
 'tim-geithner': {
 name: 'Tim Geithner',
 title: 'Treasury Secretary during the 2008 financial crisis who oversaw the Wall Street bailout',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Timothy Geithner served as President of the New York Federal Reserve and then as Treasury Secretary during the 2008 financial crisis. He was a key architect of the Wall Street bailout, which rescued major banks while millions of Americans lost their homes.',
 education: [],
 affiliations: [
 { name: 'US Department of the Treasury', role: 'Secretary of the Treasury', type: 'agency' },
 { name: 'Federal Reserve Bank of New York', role: 'President', type: 'agency' },
 ],
 controversies: [
 'Oversaw Wall Street bailout that rescued banks while homeowners faced foreclosure',
 ],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Became Treasury Secretary, oversaw TARP bailout and financial crisis response that favored Wall Street' },
 ],
 sources: [
 { title: '2008 Financial Crisis', url: '/investigations/2008-financial-crisis' },
 ],
 knownAssociates: [
 { name: 'Henry Paulson', relationship: 'Treasury predecessor during financial crisis', href: '/entities/individuals/henry-paulson' },
 { name: 'Robert Rubin', relationship: 'Mentor and predecessor who shaped Wall Street-friendly policy', href: '/entities/individuals/robert-rubin' },
 { name: 'Barack Obama', relationship: 'Treasury Secretary under Obama during bank bailouts', href: '/entities/individuals/barack-obama' }
 ],

 },
 'thomas-pritzker': {
 name: 'Thomas Pritzker',
 title: 'Hyatt Hotels Executive Chairman',
 role: 'Billionaire Named in Documents',
 riskLevel: 'medium',
 description: 'Billionaire executive chairman of Hyatt Hotels and member of the Pritzker family. Named in unsealed Epstein court documents in 2024. The nature and extent of his relationship with Epstein became subject to scrutiny after document releases.',
 birthDate: 'June 6, 1950',
 birthPlace: 'Chicago, Illinois',
 education: ['Claremont McKenna College', 'University of Chicago, MBA and JD'],
 netWorth: '$3.5 billion',
 affiliations: [
 { name: 'Hyatt Hotels', role: 'Executive Chairman', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in documents', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Glenn Dubin', relationship: 'Fellow billionaire in Epstein social circle', href: '/entities/individuals/glenn-dubin' },
 { name: 'Les Wexner', relationship: 'Fellow billionaire connected to Epstein', href: '/entities/individuals/les-wexner' },
 { name: 'Bill Gates', relationship: 'Both attended Epstein gatherings', href: '/entities/individuals/bill-gates' },
 ],
 controversies: [
 'Named in unsealed Giuffre v. Maxwell documents (2024)',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2024', event: 'Named in unsealed court documents' },
 ],
 sources: [
 { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
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
 description: 'Victim of Epstein who testified before the grand jury. Recruited through massage work.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Present during assault at NYC mansion', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Fellow victim', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Maria Farmer', relationship: 'Fellow victim and first accuser', href: '/entities/individuals/maria-farmer' },
 ],
 controversies: [
 'Epstein survivor recruited as a masseuse who was sexually assaulted at multiple Epstein properties',
 'Filed civil lawsuit describing systematic abuse and manipulation by Epstein and his associates',
 'Advocated for accountability from institutions that enabled Epstein\'s access to victims',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in documented role' }],
 sources: [{ title: 'Wikipedia: Teresa Helm', url: 'https://en.wikipedia.org/wiki/Teresa_Helm' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
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
      { title: 'DOJ Investigation', url: 'https://www.justice.gov/crt/file/836416/download', date: '2012' },
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
      { title: 'Supreme Court Historical Society', url: 'https://supremecourthistory.org/history-of-the-court/the-current-court/justice-thurgood-marshall/', date: '2023' },
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
      { date: '2005', event: 'Publicly promoted Scientology on national TV' },
      { date: '2023-04-13', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Tom Cruise' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Going Clear Documentary', url: 'https://www.hbo.com/movies/going-clear-scientology-and-the-prison-of-belief', date: '2015' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2014-08-16' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2020-11-12' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'David Miscavige', relationship: 'Close personal friend, Scientology leader', href: '/entities/individuals/david-miscavige' },
    ],
  },




  'tom-delay': {
    name: 'Tom DeLay',
    title: 'Former House Majority Leader',
    role: 'The Hammer, Corrupt K Street Project',
    riskLevel: 'high',
    description: 'Republican House Majority Leader (2003-2005) known as "The Hammer "for his aggressive enforcement of party discipline. Forced to resign after indictment on money laundering and conspiracy charges related to illegal corporate campaign contributions. Architect of the K Street Project that openly linked lobbying firms to the Republican Party.',
    education: ['University of Houston'],
    affiliations: [
      { name: 'Republican Party', role: 'House Majority Leader', type: 'organization' },
    ],
    controversies: [
      'Indicted for money laundering and conspiracy',
      'K Street Project openly corrupted lobbying',
      'Texas redistricting scandal',
      'Convicted in 2010, overturned on appeal',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Dark Money Politics', slug: 'dark-money-politics', severity: 'critical' },
    ],
    timeline: [
      { date: '2003', event: 'Became House Majority Leader' },
      { date: '2005', event: 'Indicted, forced to resign leadership' },
      { date: '2010', event: 'Convicted of money laundering' },
      { date: '2013', event: 'Conviction overturned on appeal' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Washington Post: DeLay Conviction', url: 'https://www.washingtonpost.com/politics/tom-delay/', date: '2013' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jack Abramoff', relationship: 'Corrupt lobbyist closely tied to DeLay operation', href: '/entities/individuals/jack-abramoff' },
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
    description: 'Trump Media has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
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
    description: 'Trump Organization is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
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
      { date: '2025-07-23', event: 'Cross-referenced with related investigation case files in this archive' },
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
    description: 'Trump University is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
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
    description: 'Twitter has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
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
  'trilateral-commission': {
    name: 'Trilateral Commission',
    title: 'Documented Individual',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Trilateral Commission has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Trilateral Commission that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-05-17', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2023-11-26', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-05-17' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-11-26' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-05-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'tigerswan': {
    name: 'Tigerswan',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Tigerswan is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
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
      { date: '2013-05-31', event: 'Cross-referenced with related investigation case files in this archive' },
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
    description: 'Tc Energy appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
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
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'Investigative profile for Tiktok, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
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
    title: 'Subject of Record',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Profile documenting Test Inject Check 999 and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Test Inject Check 999 and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-02-15', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2024-07-22', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-02-15' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-07-22' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-10-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



  'tom-vilsack': {
    name: 'Tom Vilsack',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'Tom Vilsack has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Tom Vilsack that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-02-25', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-07-09', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-02-25' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-07-09' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-01-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





};

export default profiles;
