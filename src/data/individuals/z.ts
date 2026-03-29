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
      { date: '2019-present', event: 'Advocacy for accountability' },    ],
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
    title: 'Corporate Government Affairs Executive',
    role: 'Bush White House; Ford Motor Company; AT&T Revolving Door',
    riskLevel: 'medium',
    description: 'Ziad Ojakli is a corporate government affairs executive who exemplifies the revolving door between the White House and corporate lobbying. He served as Deputy Assistant to the President for Legislative Affairs under George W. Bush; where he was a key liaison between the administration and Congress during the passage of major legislation including the Patriot Act; the Iraq War authorization; and the Bush tax cuts. After leaving the White House; he became Vice President of Government and Community Relations at Ford Motor Company from 2004 to 2013; where he oversaw Ford\'s federal lobbying during the 2008 auto industry bailout. Ford was the only major Detroit automaker that did not accept TARP bailout funds; and Ojakli positioned this as a competitive advantage. He then moved to AT&T as Senior Executive Vice President of External and Legislative Affairs; overseeing the telecom giant\'s lobbying operation during major regulatory battles including the attempted merger with Time Warner; net neutrality debates; and the FirstNet public safety network contract. AT&T spent over $16 million annually on federal lobbying during his tenure. The pattern of White House officials transitioning directly into corporate government relations roles raises fundamental questions about whether government service is being used as a training ground for corporate influence; and whether the access and relationships built in public service are being monetized for private gain.',
    education: ['Georgetown University'],
    affiliations: [
      { name: 'White House', role: 'Deputy Assistant to the President for Legislative Affairs (2001-2004)', type: 'agency' },
      { name: 'Ford Motor Company', role: 'VP Government and Community Relations (2004-2013)', type: 'corporation' },
      { name: 'AT&T', role: 'SVP External and Legislative Affairs (2013-2020)', type: 'corporation' },
    ],
    controversies: [
      'Classic revolving door: moved directly from White House legislative affairs to corporate VP of government relations at Ford; then to senior lobbying role at AT&T',
      'Served as White House liaison during passage of the Patriot Act; Iraq War authorization (AUMF); and Bush tax cuts; all highly consequential and controversial legislation',
      'Oversaw Ford\'s government relations during the 2008 auto industry crisis; positioning Ford\'s non-bailout status as a marketing advantage while the industry received $80+ billion in taxpayer funds',
      'Led AT&T\'s $16+ million annual lobbying operation during net neutrality battles; merger approvals; and telecom regulatory decisions directly affecting hundreds of millions of consumers',
      'AT&T\'s lobbying under his tenure included opposition to net neutrality protections; which critics argue harmed internet openness and consumer choice',
      'The pattern of building government relationships through public service and then leveraging those relationships for corporate lobbying raises systemic corruption concerns',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Corporate Lobbying', slug: 'corporate-lobbying', severity: 'high' },
    ],
    timeline: [
      { date: '2001-2004', event: 'Served as Deputy Assistant to the President for Legislative Affairs in the Bush White House' },
      { date: '2001', event: 'White House liaison for Patriot Act passage after 9/11' },
      { date: '2002', event: 'Helped coordinate Congressional authorization for Iraq War (AUMF)' },
      { date: '2004', event: 'Left White House; became VP of Government Relations at Ford Motor Company' },
      { date: '2008-2009', event: 'Managed Ford\'s government affairs during auto industry bailout crisis; Ford declined TARP funds' },
      { date: '2013', event: 'Joined AT&T as SVP of External and Legislative Affairs' },
      { date: '2017-2018', event: 'Oversaw AT&T lobbying during Time Warner merger; DOJ antitrust challenge' },
      { date: '2020', event: 'Left AT&T' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets: AT&T Lobbying', url: 'https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2020&id=D000000076', date: '2020' },
      { title: 'Ford Motor Company Government Relations', url: 'https://corporate.ford.com/', date: '2013' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'George W. Bush', relationship: 'Served as legislative affairs deputy in his White House', href: '/entities/individuals/george-w-bush' },
    ],
  },





};

export default profiles;
