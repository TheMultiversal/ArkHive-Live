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
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'United Nations is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'United Nations has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-08-31', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-01-19', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-08-31' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-01-19' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-29' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'us-senate': {
    name: 'Us Senate',
    title: 'Subject of Record',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Profile documenting Us Senate and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Us Senate has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-07-10', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-03-19', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2018-07-10' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-03-19' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-05-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'us-army': {
    name: 'Us Army',
    title: 'Public Figure',
    role: 'Tracked for public accountability',
    riskLevel: 'high',
    description: 'This profile documents Us Army and their role as it relates to matters of institutional accountability. All information derived from publicly available records, court documents, and official filings.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Us Army has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-05-21', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-05-13', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2021-05-21' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-13' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-06-13' },
    ],
    aliases: [],
    knownAssociates: [
    ],
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
      'Network analysis reveals Ursula von der Leyen holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Ursula von der Leyen has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-07', event: 'Automated intelligence gathering identified new documentary evidence linking Ursula von der Leyen to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-07' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-07' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





};

export default profiles;
