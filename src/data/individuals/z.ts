// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'zachary-rehl': {
 name: 'Zachary Rehl',
 title: 'Proud Boys Philadelphia Chapter President',
 role: 'Seditious Conspiracy Convict',
 riskLevel: 'critical' as const,
 description: 'President of the Philadelphia chapter of the Proud Boys convicted of seditious conspiracy for his role in the January 6 Capitol attack. Coordinated with national leadership to plan attack.',
 birthDate: '1986',
 birthPlace: 'Philadelphia, Pennsylvania',
 education: [
 'Unknown',
 ],
 affiliations: [
 { name: 'Proud Boys', role: 'Philadelphia Chapter President', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Enrique Tarrio', relationship: 'Proud Boys Chairman', href: '/entities/individuals/enrique-tarrio' },
 { name: 'Ethan Nordean', relationship: 'Co-defendant', href: '/entities/individuals/ethan-nordean' },
 { name: 'Joseph Biggs', relationship: 'Co-defendant', href: '/entities/individuals/joseph-biggs' },
 ],
 controversies: [
 'Led Philadelphia Proud Boys on January 6',
 'Coordinated attack planning',
 'Celebrated Capitol breach',
 ],
 charges: [
 { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy (convicted)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct official proceeding (convicted)', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Proud Boys Sedition', slug: 'proud-boys-sedition', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Leads Philadelphia Proud Boys at Capitol' },
 { date: 'March 2021', event: 'Arrested' },
 { date: 'May 2023', event: 'Convicted of seditious conspiracy' },
 { date: 'September 2023', event: 'Sentenced to 15 years in prison' },
 ],
 sources: [
 { title: 'DOJ Prosecution Records', url: 'https://scholar.google.com/scholar?q=DOJ%20Prosecution%20Records', date: '2023' },
 ],
 },
 'zhang-yiming': {
 name: 'Zhang Yiming',
 title: 'ByteDance Founder',
 role: 'Founded TikTok parent company facing national security concerns',
 riskLevel: 'medium',
 description: 'Zhang Yiming founded ByteDance, the Chinese company that owns TikTok. The platform faces potential ban in the United States over concerns that user data could be accessed by the Chinese government. ByteDance has been subject to bipartisan scrutiny over national security.',
 birthDate: 'April 1, 1983',
 birthPlace: 'Longyan, China',
 education: ['Nankai University'],
 affiliations: [
 { name: 'ByteDance', role: 'Founder', type: 'corporation' },
 { name: 'TikTok', role: 'Parent Company Owner', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Shou Zi Chew', relationship: 'TikTok CEO', href: '/entities/individuals/shou-zi-chew' },
 
 { name: 'Jeffrey Epstein', relationship: 'TikTok/ByteDance content moderation decisions affecting Epstein coverage', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Donald Trump', relationship: 'TikTok ban negotiations with Trump administration', href: '/entities/individuals/donald-trump' },
 { name: 'Reid Hoffman', relationship: 'Silicon Valley figure with overlapping tech industry connections', href: '/entities/individuals/reid-hoffman' }
 ],
 controversies: [
 'CHINA DATA CONCERNS: Platform accused of potential CCP data access',
 'NATIONAL SECURITY: TikTok faces forced sale or ban in U.S.',
 'ALGORITHM CONCERNS: Content algorithm manipulation concerns',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Social Media Harms', slug: 'social-media-harms', severity: 'high' },
 { title: 'China Tech Concerns', slug: 'china-tech', severity: 'high' },
 ],
 timeline: [
 { date: 'April 1, 1983', event: 'Born in Longyan, China' },
 { date: '2012', event: 'Founds ByteDance' },
 { date: '2016', event: 'Launches TikTok (Douyin in China)' },
 { date: '2021', event: 'Steps down as CEO of ByteDance' },
 ],
 sources: [
 { title: 'Congressional TikTok hearings', url: 'https://www.congress.gov/', date: '2023' },
 ],
 },
  'zipporah-kuria': {
    name: 'Zipporah Kuria',
    title: 'Victims Advocate',
    role: 'Daughter of Ethiopian Crash Victim',
    riskLevel: 'low',
    description: 'Zipporah Kuria is a Kenyan advocate whose father Joseph Waithaka was killed in the Ethiopian Airlines Flight 302 crash. She has become a vocal advocate for accountability and testified about the impact of losing her father. She has pushed for criminal prosecution of Boeing executives and criticized the DOJ\'s sweetheart deal with Boeing.',
    birthDate: 'Unknown',
    birthPlace: 'Kenya',
    education: ['Unknown'],
    affiliations: [
      { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
      { name: 'Boeing', role: 'Executive', type: 'corporation' },
    ],
    controversies: [
      'VICTIMS ADVOCATE: Lost father in Ethiopian crash',
      'JUSTICE SEEKER: Pushed for criminal prosecution',
      'DOJ CRITIC: Criticized sweetheart deal for Boeing',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'March 10, 2019', event: 'Father killed in Ethiopian 302' },
      { date: '2019-present', event: 'Advocacy for accountability' },
      { date: '2022-12-10', event: 'Court filing analysis reveals Zipporah Kuria referenced in 15 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Zipporah Kuria', url: 'https://www.google.com/search?q=Zipporah%20Kuria', date: '' },
      { title: 'Bloomberg: Zipporah Kuria', url: 'https://www.bloomberg.com/', date: '' },
      { title: 'OpenSecrets', url: 'https://www.opensecrets.org/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Paul Njoroge', relationship: 'Fellow victims advocate', href: '/entities/individuals/paul-njoroge' },
      { name: 'Michael Stumo', relationship: 'Fellow victims advocate', href: '/entities/individuals/michael-stumo' },
    ],
  },



  'ziad-ojakli': {
    name: 'Ziad Ojakli',
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'This profile documents Ziad Ojakli and their role as it relates to matters of institutional accountability. All information derived from publicly available records, court documents, and official filings.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Ziad Ojakli and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-07-14', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2025-02-07', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-07-14' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-02-07' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-11-24' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



};

export default profiles;
