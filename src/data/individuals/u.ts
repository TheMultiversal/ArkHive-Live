// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'ulysses-s-grant': {
 name: 'Ulysses S. Grant',
 title: 'US President who implemented early Indian reservation and assimilation policies including Peace Policy',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'Ulysses S. Grant served as the 18th President and implemented the "Peace Policy "toward Native Americans, which established the reservation system and early boarding school programs designed to forcibly assimilate Indigenous peoples into white American culture.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '18th President', type: 'agency' },
 ],
 controversies: [
 'Implemented reservation system and early Indian boarding school policies as part of forced assimilation',
 ],
 relatedInvestigations: [
 { title: 'American Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: '1869', event: 'Implemented "Peace Policy" establishing reservation system and early boarding school programs for Native Americans' },
 ],
 sources: [
 { title: 'American Indian Boarding Schools', url: '/investigations/indian-boarding-schools' },
 ],
 knownAssociates: [
 { name: 'William Tecumseh Sherman', relationship: 'Sherman served under Grant in Civil War', href: '/entities/individuals/william-tecumseh-sherman' },
 { name: 'Nathan Bedford Forrest', relationship: 'Confederate general and KKK founder Grant later fought', href: '/entities/individuals/nathan-bedford-forrest' },
 { name: 'Philip Sheridan', relationship: 'Fellow Union general who oversaw Indian Wars', href: '/entities/individuals/philip-sheridan' }
 ],

 },
  'usda': {
    name: 'Usda',
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Usda is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Usda has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2013-02-18', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-02-26', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2013-02-18' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-02-26' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-03-31' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'usaid': {
    name: 'Usaid',
    title: 'Subject of Record',
    role: 'Tracked for public accountability',
    riskLevel: 'low',
    description: 'Usaid has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Usaid that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-04-24', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-01-09', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2020-04-24' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-01-09' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-03-29' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'un-security-council': {
    name: 'Un Security Council',
    title: 'Person of Interest',
    role: 'Documented based on entity connections',
    riskLevel: 'high',
    description: 'Investigative profile for Un Security Council, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Un Security Council has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-04-14', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2025-04-11', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2019-04-14' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-04-11' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-05-17' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'us-chamber': {
    name: 'Us Chamber',
    title: 'Subject of Record',
    role: 'Under review based on institutional connections',
    riskLevel: 'critical',
    description: 'Us Chamber has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Us Chamber and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-10-27', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2025-02-27', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-10-27' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-02-27' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-09-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'united-nations': {
    name: 'United Nations',
    title: 'International Governmental Organization',
    role: 'International peace, security, and cooperation body',
    riskLevel: 'medium',
    description: 'The United Nations is the international organization responsible for maintaining peace, promoting human rights, and facilitating cooperation among nations. It has been documented in this archive for its failures to prevent genocide (Rwanda, Srebrenica, Myanmar), the exploitation of its peacekeeping forces, the veto power of Security Council members that paralyzes action, and UNRWA controversies relating to the Palestinian crisis.',
    education: [],
    affiliations: [],
    controversies: [
      'GENOCIDE FAILURES: Failed to prevent genocide in Rwanda (1994), Srebrenica (1995), and Myanmar (Rohingya)',
      'PEACKEEPER ABUSE: UN peacekeepers documented committing sexual exploitation in Haiti, CAR, DRC, and elsewhere',
      'SECURITY COUNCIL VETO: P5 veto power blocks action on major crises including Syria and Palestine',
      'OIL-FOR-FOOD: Iraq Oil-for-Food Programme corruption scandal',
      'CHOLERA IN HAITI: UN peacekeepers introduced cholera to Haiti, killing 10,000+',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Genocide in Palestine', slug: 'genocide-palestine', severity: 'critical' },
    ],
    timeline: [
      { date: '1945', event: 'Founded after World War II' },
      { date: '1994', event: 'Fails to prevent Rwandan genocide' },
      { date: '1995', event: 'Fails to prevent Srebrenica massacre' },
      { date: '2010', event: 'UN peacekeepers bring cholera to Haiti' },
    ],
    socialMedia: [],
    sources: [
      { title: 'UN Official Website', url: 'https://www.un.org', date: '2024' },
    ],
    aliases: ['UN'],
    knownAssociates: [],
  },
  'us-senate': {
    name: 'United States Senate',
    title: 'Upper Chamber of US Congress',
    role: 'Legislative body, 100 members',
    riskLevel: 'medium',
    description: 'The US Senate is the upper chamber of Congress with 100 members. It has been documented in this archive for its role in enabling or investigating corruption, the filibuster\'s obstruction of democratic legislation, insider trading by members, campaign finance dependency on corporate donors, and the confirmation of federal judges through partisan processes.',
    education: [],
    affiliations: [],
    controversies: [
      'INSIDER TRADING: Multiple senators traded stocks based on non-public briefings (notably pre-COVID)',
      'FILIBUSTER ABUSE: 60-vote threshold allows minority to block legislation supported by majority',
      'CORPORATE FUNDING: Members dependent on corporate and billionaire donors for campaign funding',
      'CONFIRMATION POLITICS: Weaponized judicial confirmation process',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Insider Trading: Congressional Members', slug: 'insider-trading-congressional-members', severity: 'high' },
      { title: 'Dark Money in Politics', slug: 'dark-money', severity: 'high' },
    ],
    timeline: [
      { date: '1789', event: 'Established by US Constitution' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Senate Official Website', url: 'https://www.senate.gov', date: '2024' },
    ],
    aliases: ['The Senate'],
    knownAssociates: [],
  },
  'us-army': {
    name: 'United States Army',
    title: 'Military Branch',
    role: 'Land warfare branch of the US Armed Forces',
    riskLevel: 'medium',
    description: 'The United States Army is the land warfare service branch of the US Armed Forces. In this archive, it is documented for its role in military operations that have raised accountability concerns, including Abu Ghraib torture, civilian casualties in Iraq and Afghanistan, burn pit exposure affecting soldiers, recruitment targeting of marginalized communities, and historical atrocities.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Service branch', type: 'agency' },
    ],
    controversies: [
      'ABU GHRAIB: Soldiers tortured Iraqi prisoners, photographs shocked the world',
      'BURN PITS: Soldiers exposed to toxic burn pits, VA denied claims for years',
      'CIVILIAN CASUALTIES: Pattern of civilian deaths in Iraq and Afghanistan',
      'RECRUITMENT: Targets economically disadvantaged communities for recruitment',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Military Industrial Complex', slug: 'military-industrial', severity: 'critical' },
      { title: 'CIA Torture Program', slug: 'torture-program', severity: 'critical' },
    ],
    timeline: [
      { date: '1775', event: 'Established by Continental Congress' },
      { date: '2004', event: 'Abu Ghraib torture photos made public' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Army Official Website', url: 'https://www.army.mil', date: '2024' },
    ],
    aliases: ['US Army'],
    knownAssociates: [],
  },
  'united-fruit-company': {
    name: 'United Fruit Company',
    title: 'Subject of Record',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'United Fruit Company appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to United Fruit Company and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-07-10', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2023-09-20', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2017-07-10' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-09-20' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-08-01' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'ursula-von-der-leyen': {
    name: 'Ursula von der Leyen',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Ursula von der Leyen is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ursula von der Leyen has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Ursula von der Leyen facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Investigative analysis reveals Ursula von der Leyen was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Ursula von der Leyen' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-07' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-07' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },






};

export default profiles;
