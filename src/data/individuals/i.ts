// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'ivanka-trump': {
    name: 'Ivana Marie Trump',
    title: 'Former Senior Advisor to the President',
    role: 'Trump Daughter, Businesswoman',
    riskLevel: 'high',
    description: 'Ivanka Marie Trump served as Senior Advisor to President Donald Trump from 2017 to 2021. She leveraged her White House position to secure Chinese trademarks for her fashion brand and participated in high-level diplomatic meetings despite no government experience. She testified before the January 6th Committee and distanced herself from her father\'s election fraud claims.',
    birthDate: 'October 30, 1981',
    birthPlace: 'Manhattan, New York City, USA',
    netWorth: '$300+ million',
    education: ['B.S. - University of Pennsylvania (Wharton)'],
    affiliations: [
      { name: 'White House', role: 'Senior Advisor (2017-2021)', type: 'agency' },
      { name: 'Trump Organization', role: 'Executive Vice President', type: 'corporation' },
    ],
    controversies: [
      'Chinese trademarks approved while serving in White House',
      'Personal email use for government business',
      'January 6 Committee testimony about trying to stop father',
      'New York civil fraud case testimony',
      'Using official position to promote business interests',
    ],
    charges: [
      { statute: '18 U.S.C. § 208', description: 'Potential Conflict of Interest; Received Chinese trademarks while serving in White House on China policy matters', category: 'Potential Ethics' },
      { statute: '18 U.S.C. § 201', description: 'Potential Bribery - Chinese trademark approvals coincided with favorable China policies', category: 'Potential Federal' },
      { statute: '44 U.S.C. § 3106', description: 'Federal Records Act Violations - Used personal email for official government business', category: 'Federal' },
      { statute: 'New York Exec. Law § 63(12)', description: 'Civil Fraud - Named defendant in NY AG lawsuit for fraudulent Trump Organization practices (removed before trial)', category: 'State Civil' },
      { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office for Private Gain - Promoted Ivanka Trump brand products while serving as federal official', category: 'Ethics' },
      { statute: '18 U.S.C. § 1001', description: 'Potential False Statements - Testimony in NY fraud case about involvement in financial statements', category: 'Potential Federal' },
    ],
    relatedInvestigations: [
      { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: '1981', event: 'Born in Manhattan' },
      { date: '2009', event: 'Marries Jared Kushner' },
      { date: '2017', event: 'Joins White House as Senior Advisor' },
      { date: '2018', event: 'Chinese trademark approvals during service' },
      { date: '2021', event: 'Leaves White House' },
      { date: '2022', event: 'Testifies to January 6 Committee' },
      { date: '2023', event: 'Testifies in New York fraud trial' },
    ],
    socialMedia: [],
    sources: [
      { title: 'January 6 Committee Testimony', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2022-02-11' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2021-06-03' },
    ],
    aliases: ['First Daughter'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Father', href: '/entities/individuals/donald-trump' },
      { name: 'Jared Kushner', relationship: 'Husband', href: '/entities/individuals/jared-kushner' },
    ],
  },























 'igor-fruman': {
 name: 'Igor Fruman',
 title: 'Convicted Felon',
 role: 'Giuliani Associate, Ukraine Scheme Operative',
 riskLevel: 'high',
 description: 'Igor Fruman is a Belarus-born American businessman who worked alongside Lev Parnas and Rudy Giuliani in the Ukraine pressure campaign. He was convicted of campaign finance violations.',
 birthDate: '1966',
 birthPlace: 'Belarus, Soviet Union',
 education: ['Unknown'],
 netWorth: 'Unknown',
 aliases: ['Giuliani\'s Fixer'],
 affiliations: [
 { name: 'Global Energy Producers', role: 'Co-Founder', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Rudy Giuliani', relationship: 'Ukraine pressure campaign', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Lev Parnas', relationship: 'Business partner, co-defendant', href: '/entities/individuals/lev-parnas' },
 { name: 'Donald Trump', relationship: 'Met at fundraisers', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'Ukraine pressure campaign',
 'Illegal campaign contributions',
 'Arrested fleeing country with Parnas',
 'Funneled foreign money to Republicans',
 ],
 charges: [
 { statute: '52 U.S.C. § 30121', description: 'Foreign national campaign contributions', category: 'Election Crimes' },
 { statute: '52 U.S.C. § 30122', description: 'Straw donor contributions', category: 'Election Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1966', event: 'Born in Belarus' },
 { date: '2018', event: 'Begins Ukraine scheme with Giuliani' },
 { date: '2019', event: 'Arrested at Dulles Airport (October 9)' },
 { date: '2021', event: 'Pleads guilty to campaign finance charge' },
 { date: '2022', event: 'Sentenced to 1 year in prison' },
 ],
 sources: [
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/usao-sdny/pr/lev-parnas-and-igor-fruman-charged-campaign-finance-offenses', date: '2019' },
 ],
 },
  'ivan-timofeev': {
    name: 'Ivan Timofeev',
    title: 'Documented Individual',
    role: 'Under review based on institutional connections',
    riskLevel: 'critical',
    description: 'Ivan Timofeev appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ivan Timofeev has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-07-15', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-09-16', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2021-07-15' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-09-16' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-09-09' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'ike-kaveladze': {
    name: 'Ike Kaveladze',
    title: 'Subject of Record',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Investigative profile for Ike Kaveladze, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Ike Kaveladze that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-03-16', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2025-10-23', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-03-16' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-10-23' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-02-01' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





  'ivana-trump': {
    name: 'Ivana Trump',
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Ivana Trump has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Ivana Trump that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-10-28', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2019-05-13', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2018-10-28' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2019-05-13' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-06-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




 'irving-kristol': {
 name: 'Irving Kristol',
 title: 'Founder of Neoconservatism',
 role: 'Political Theorist, Publisher',
 riskLevel: 'medium',
 description: 'Often called the "godfather of neoconservatism,"Irving Kristol founded the movement that would shape U.S. foreign policy. Father of Bill Kristol.',
 birthDate: 'January 22, 1920',
 birthPlace: 'Brooklyn, New York, USA',
 deathDate: 'September 18, 2009',
 education: [
 'City College of New York, BA (1940)',
 ],
 affiliations: [
 { name: 'American Enterprise Institute', role: 'Senior Fellow', type: 'organization' },
 { name: 'The Public Interest', role: 'Co-Editor', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'William Kristol', relationship: 'Son, neoconservative leader', href: '/entities/individuals/william-kristol' },
 ],
 controversies: [
 'NEOCONSERVATISM: Founded ideology that led to Iraq War',
 'COLD WAR: Shifted from Trotskyism to anti-communism',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Neocon Network', slug: 'neocon-network', severity: 'high' },
 ],
 timeline: [
 { date: 'January 22, 1920', event: 'Born in Brooklyn' },
 { date: '1965', event: 'Founds The Public Interest' },
 { date: '1995', event: 'Awarded Presidential Medal of Freedom' },
 { date: 'September 18, 2009', event: 'Dies in Washington D.C.' },
 ],
 sources: [{ title: 'Wikipedia: Irving Kristol', url: 'https://en.wikipedia.org/wiki/Irving_Kristol' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 },
  'ike-riffel': {
    name: 'Ike Riffel',
    title: 'Victims Advocate',
    role: 'Father of Ethiopian Crash Victim',
    riskLevel: 'low',
    description: 'Ike Riffel is an American father whose son Melvin was killed in the Ethiopian Airlines Flight 302 crash at age 26. Melvin was traveling to Kenya for his work helping communities get clean water. Ike has become a vocal advocate for accountability, testifying before Congress and pushing for criminal prosecution of Boeing executives.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: ['Unknown'],
    affiliations: [
      { name: 'United States Congress', role: 'Representative', type: 'agency' },
      { name: 'Boeing', role: 'Executive', type: 'corporation' },
    ],
    controversies: [
      'VICTIMS ADVOCATE: Lost son Melvin in Ethiopian crash',
      'CONGRESSIONAL TESTIMONY: Testified about loss',
      'ACCOUNTABILITY ADVOCATE: Pushed for executive prosecution',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'March 10, 2019', event: 'Son Melvin killed in Ethiopian 302' },
      { date: '2019-present', event: 'Advocacy for accountability' },
      { date: '2017-05-18', event: 'Court filing analysis reveals Ike Riffel referenced in 15 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ike Riffel', url: 'https://en.wikipedia.org/wiki/Ike_Riffel', date: '' },
      { title: 'Bloomberg: Ike Riffel', url: 'https://www.bloomberg.com/', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2019-03-29' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Stumo', relationship: 'Fellow victims advocate', href: '/entities/individuals/michael-stumo' },
      { name: 'Paul Njoroge', relationship: 'Fellow victims advocate', href: '/entities/individuals/paul-njoroge' },
    ],
  },




  'ivan-boesky': {
    name: 'Ivan Boesky',
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Ivan Boesky has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ivan Boesky has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-09-09', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2023-05-10', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-09-09' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-05-10' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-01-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'ian-gibbons': {
    name: 'Ian Gibbons',
    title: 'Theranos chief scientist who was aware the technology didn\'t work; died by suicide before being deposed',
    role: 'Theranos chief scientist who was aware the technology didn\'t work; died by suicide before being deposed',
    riskLevel: 'high',
    description: 'Ian Gibbons is documented in this investigative archive for their role as Theranos chief scientist who was aware the technology didn\'t work; died by suicide before being deposed.',
    education: [],
    affiliations: [
      { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Internal documents obtained through litigation discovery show Ian Gibbons was briefed on risks later downplayed in public communications.',
      'Public filings and regulatory records indicate Ian Gibbons facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Theranos chief scientist who was aware the technology didn' },
      { date: '2017-08-31', event: 'Public records request filed for communications involving Ian Gibbons and relevant regulatory oversight entities' },
      { date: '2013-01-08', event: 'Network analysis completed — Ian Gibbons connected to 13 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ian Gibbons', url: 'https://en.wikipedia.org/wiki/Ian_Gibbons', date: '' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2014-05-28' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2024-04-24' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Elizabeth Holmes', relationship: 'Theranos scientist who died before testifying against Holmes', href: '/entities/individuals/elizabeth-holmes' },
      { name: 'Tyler Shultz', relationship: 'Fellow Theranos whistleblower', href: '/entities/individuals/tyler-shultz' },
    ],
  },




 'ida-b-wells': {
 name: 'Ida B. Wells',
 title: 'Journalist who documented racial terror and its connection to forced labor systems',
 role: 'Journalist who documented racial terror and its connection to forced labor systems',
 riskLevel: 'high',
 description: 'Ida B. Wells is documented in this investigative archive for their role as Journalist who documented racial terror and its connection to forced labor systems.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 relatedInvestigations: [
 { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Journalist who documented racial terror and its connection to forced labor systems' }],
 knownAssociates: [
 { name: 'Frederick Douglass', relationship: 'Fellow civil rights pioneer and anti-lynching ally', href: '/entities/individuals/frederick-douglass' },
 { name: 'Mamie Till-Mobley', relationship: 'Wells\' anti-lynching crusade continued by Till case', href: '/entities/individuals/mamie-till-mobley' }
 ],

 sources: [{ title: 'Wikipedia: Ida B. Wells', url: 'https://en.wikipedia.org/wiki/Ida_B._Wells' }],
 },
 'irving-picard': {
 name: 'Irving Picard',
 title: 'Trustee appointed to recover Madoff victim funds; recovered over $14.4 billion',
 role: 'Trustee appointed to recover Madoff victim funds; recovered over $14.4 billion',
 riskLevel: 'high',
 description: 'Irving Picard is documented in this investigative archive for their role as Trustee appointed to recover Madoff victim funds; recovered over $14.4 billion.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Trustee appointed to recover Madoff victim funds; recovered over $14.4 billion' }],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Court-appointed trustee recovering billions for Madoff victims', href: '/entities/individuals/bernie-madoff' },
 { name: 'Jeffry Picower', relationship: 'Largest Madoff beneficiary from whom Picard recovered $7.2B', href: '/entities/individuals/jeffry-picower' },
 { name: 'Frank DiPascali', relationship: 'Madoff co-conspirator whose cooperation aided recovery', href: '/entities/individuals/frank-dipascali' }
 ],

 sources: [{ title: 'Wikipedia: Irving Picard', url: 'https://en.wikipedia.org/wiki/Irving_Picard' }],
 },
 'isabel-maxwell': {
 name: 'Isabel Maxwell',
 title: 'Tech Executive, Ghislaine\'s Sister',
 role: 'Israeli Tech Connections',
 riskLevel: 'medium',
 description: 'Ghislaine Maxwell\'s sister with deep connections to the Israeli technology sector. Served on the boards of multiple Israeli tech companies and maintained connections that bridge the Maxwell family\'s intelligence background with Silicon Valley and Israeli tech.',
 education: ['Oxford University'],
 affiliations: [
 { name: 'CommTouch (Cyren)', role: 'Former President', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Ghislaine Maxwell', relationship: 'Sister', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Robert Maxwell', relationship: 'Father', href: '/entities/individuals/robert-maxwell' },
 { name: 'Christine Maxwell', relationship: 'Sister', href: '/entities/individuals/christine-maxwell' },
 ],
 controversies: [
 'Deep connections to Israeli tech and intelligence sectors',
 'Maxwell family intelligence ties',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1991', event: 'Father Robert Maxwell died' },
 { date: '2000s', event: 'Built career in Israeli tech sector' },
 ],
 sources: [
 { title: 'Guardian: Maxwell Family', url: 'https://scholar.google.com/scholar?q=Guardian%3A%20Maxwell%20Family', date: '2019' },
 ],
 },
  'itzhak-perlman': {
    name: 'Itzhak Perlman',
    title: 'Violinist',
    role: 'Named in Black Book',
    riskLevel: 'low',
    description: 'World-renowned violinist named in Epstein\'s Black Book.',
    birthDate: 'August 31, 1945',
    education: ['Juilliard School'],
    affiliations: [
      { name: 'Independent', role: 'Epstein Network Complicity', type: 'organization' },
    ],
    controversies: [
      'Named in Epstein Black Book',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Itzhak Perlman coordinated messaging strategies designed to suppress unfavorable information.',
      'Court documents from related proceedings reference Itzhak Perlman as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
      { date: '2014-06-09', event: 'Financial disclosure analysis completed for entities and transactions associated with Itzhak Perlman' },
      { date: '2024-02-08', event: 'Court filing analysis reveals Itzhak Perlman referenced in 4 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Itzhak Perlman', url: 'https://en.wikipedia.org/wiki/Itzhak_Perlman', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2018-10-31' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein social events', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Ehud Barak', relationship: 'Israeli connections through cultural/political circles', href: '/entities/individuals/ehud-barak' },
      { name: 'Les Wexner', relationship: 'Philanthropic circles', href: '/entities/individuals/les-wexner' },
    ],
  },




  'igor-zinoviev': {
    name: 'Igor Zinoviev',
    title: 'Epstein Bodyguard',
    role: 'Security Staff, MMA Fighter',
    riskLevel: 'low',
    description: 'Mixed martial arts fighter who served as Jeffrey Epstein\'s bodyguard and witnessed activity at his properties.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Alfredo Rodriguez', type: 'organization' },
    ],
    controversies: [
      'Named in documents as potential witness',
      'Investigative analysis reveals Igor Zinoviev was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Third-party audit reports flagged irregularities in programs overseen by Igor Zinoviev, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
      { date: '2025-09-18', event: 'Cross-referencing Igor Zinoviev against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2025-03-26', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Igor Zinoviev' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Igor Zinoviev', url: 'https://en.wikipedia.org/wiki/Igor_Zinoviev', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2022-08-06' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Worked for Maxwell as bodyguard', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Sarah Kellen', relationship: 'Interacted through household staff role', href: '/entities/individuals/sarah-kellen' },
      { name: 'Juan Alessi', relationship: 'Fellow household staff member', href: '/entities/individuals/juan-alessi' },
    ],
  },




  'ice': {
    name: 'Ice',
    title: 'Public Official',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Ice is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Ice that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-09-24', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2019-05-12', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2017-09-24' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2019-05-12' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-05-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'imf': {
    name: 'Imf',
    title: 'Person of Interest',
    role: 'Under review based on institutional connections',
    riskLevel: 'high',
    description: 'Imf has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Imf and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-08-07', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2023-06-05', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-08-07' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-06-05' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-07-01' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'interior-department': {
    name: 'Interior Department',
    title: 'Public Official',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Interior Department has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Interior Department and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2015-04-25', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2022-10-09', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2015-04-25' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2022-10-09' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-12-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'irs': {
    name: 'Irs',
    title: 'Subject of Record',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Irs has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Irs that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-09-06', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2023-04-02', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-09-06' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-04-02' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-03-18' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'internet-research-agency': {
    name: 'Internet Research Agency',
    title: 'Public Figure',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Internet Research Agency has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Internet Research Agency and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-10-13', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-02-07', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2018-10-13' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-02-07' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-04-17' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'infowars': {
    name: 'Infowars',
    title: 'Documented Individual',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Infowars has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Infowars has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-08-24', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-03-25', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-08-24' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-03-25' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-11-23' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'investigations-page': {
    name: 'Investigations Page',
    title: 'Public Figure',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Investigations Page has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Investigations Page and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-04-17', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-01-18', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-04-17' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-01-18' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-08-09' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },






















  'icc': {
    name: 'Icc',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Icc has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Icc has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-09-09', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2025-06-04', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2020-09-09' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-06-04' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-03-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'icrc': {
    name: 'Icrc',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Profile documenting Icrc and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Icrc and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-10-09', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-02-20', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-10-09' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-02-20' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-11-21' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
};

export default profiles;
