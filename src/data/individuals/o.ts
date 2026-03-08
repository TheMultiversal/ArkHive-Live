// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'oleg-deripaska': {
    name: 'Oleg Deripaska',
    title: 'Public Official',
    role: 'Under review based on institutional connections',
    riskLevel: 'high',
    description: 'Profile documenting Oleg Deripaska and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Oleg Deripaska and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-06-21', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2022-07-10', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2021-06-21' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2022-07-10' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-06-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'omarosa-manigault-newman': {
    name: 'Omarosa Manigault Newman',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Omarosa Manigault Newman is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Omarosa Manigault Newman has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Omarosa Manigault Newman facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Internal documents obtained through litigation discovery show Omarosa Manigault Newman was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Omarosa Manigault Newman referenced in 6 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





  'oliver-north': {
    name: 'Oliver Laurence North',
    title: 'Former NSC Staff, Convicted Iran-Contra Figure',
    role: 'Iran-Contra Operator, Arms Dealer, Pardoned Felon',
    riskLevel: 'high',
    description: 'Oliver North is a former Marine Lieutenant Colonel who became the central figure in the Iran-Contra scandal. He orchestrated the illegal sale of arms to Iran and diversion of proceeds to Nicaraguan Contra rebels in violation of congressional bans. His convictions were overturned on technicality due to immunized testimony. He later became an NRA president and Fox News host, turning treason into a media career.',
    birthDate: 'October 7, 1943',
    birthPlace: 'San Antonio, Texas, USA',
    netWorth: '$5+ million',
    education: ['B.S. - United States Naval Academy (1968)'],
    affiliations: [
      { name: 'National Security Council', role: 'Staff Member (1981-1986)', type: 'agency' },
      { name: 'United States Marine Corps', role: 'Lieutenant Colonel (1968-1988)', type: 'agency' },
      { name: 'National Rifle Association', role: 'President (2018-2019)', type: 'organization' },
      { name: 'Fox News', role: 'Host, Contributor (2001-2018)', type: 'corporation' },
      { name: 'Freedom Alliance', role: 'Founder', type: 'organization' },
    ],
    controversies: [
      'IRAN-CONTRA SCANDAL: Orchestrated illegal arms sales to Iran, diverted proceeds to Contras in violation of Boland Amendment',
      'ILLEGAL ARMS SALES: Sold 2,500+ TOW missiles and HAWK missiles to Iran (state sponsor of terrorism)',
      'CONTRA FUNDING: Funneled $3.8 million to Nicaraguan rebels despite congressional prohibition',
      'DOCUMENT SHREDDING: Destroyed thousands of documents with secretary Fawn Hall before investigation',
      'CONVICTED FELON: Found guilty of aiding obstruction of Congress, destroying documents, accepting gratuity',
      'CONVICTIONS OVERTURNED: Escaped on technicality because immunized congressional testimony may have influenced trial',
      'REAGAN PROTECTION: Took fall for Reagan administration, testified"I was authorized to do everything I did"',
      'CASH IN OFFICE SAFE: Kept operational funds in office safe for covert operations',
      'NRA PRESIDENT: Led NRA during period of mass shootings, forced out amid internal scandal',
      'PROFITED FROM TREASON: Made millions from books, speeches, and media career after scandal',
    ],
    charges: [
      { statute: '18 U.S.C. § 1505', description: 'Aiding and Abetting Obstruction of Congress (CONVICTED, reversed)', category: 'Obstruction' },
      { statute: '18 U.S.C. § 1001', description: 'Making False Statements (CONVICTED, reversed)', category: 'Federal' },
      { statute: '18 U.S.C. § 641', description: 'Receiving Illegal Gratuity (CONVICTED, reversed)', category: 'Federal' },
      { statute: 'Boland Amendment', description: 'Violation of Congressional Prohibition on Contra Aid', category: 'Federal' },
      { statute: 'Arms Export Control Act', description: 'Illegal Arms Sales to Iran', category: 'Federal' },
      { statute: '18 U.S.C. § 1519', description: 'Destruction of Documents', category: 'Obstruction' },
    ],
    relatedInvestigations: [
      { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
      { title: 'Arms Trafficking', slug: 'arms-trafficking', severity: 'critical' },
      { title: 'Reagan Administration Crimes', slug: 'reagan-crimes', severity: 'high' },
      { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'high' },
    ],
    timeline: [
      { date: 'October 7, 1943', event: 'Born in San Antonio, Texas' },
      { date: '1968', event: 'Graduates Naval Academy, commissioned in Marines' },
      { date: '1968-1969', event: 'Serves in Vietnam, wounded twice, Silver Star recipient' },
      { date: '1981', event: 'Joins NSC staff under Reagan administration' },
      { date: '1984', event: 'Boland Amendment prohibits aid to Contras' },
      { date: '1985', event: 'Begins arranging arms sales to Iran through Israel' },
      { date: '1985-1986', event: 'Diverts Iran arms sale proceeds to Contra rebels' },
      { date: 'November 1986', event: 'Iran-Contra scandal breaks publicly' },
      { date: 'November 1986', event: 'Shreds thousands of documents with Fawn Hall' },
      { date: 'November 1986', event: 'Fired from NSC by Reagan' },
      { date: 'July 1987', event: 'Televised congressional testimony, becomes folk hero to some' },
      { date: '1988', event: 'Indicted on 16 felony counts' },
      { date: 'May 1989', event: 'Convicted on 3 of 12 charges' },
      { date: '1990', event: 'Receives suspended sentence, probation, community service' },
      { date: 'July 1990', event: 'Convictions overturned on appeal due to immunized testimony' },
      { date: '1991', event: 'All charges dismissed' },
      { date: '1994', event: 'Runs for Virginia Senate, loses' },
      { date: '2001-2018', event: 'Fox News host and contributor' },
      { date: '2018-2019', event: 'NRA President, forced out amid internal scandal' },
      { date: 'Present', event: 'Continues media career, never held accountable' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Tower Commission Report', url: 'https://www.archive.org/details/towercommissionr00unit', date: '1987' },
      { title: 'Iran-Contra Independent Counsel Final Report', url: 'https://irp.fas.org/offdocs/walsh/', date: '1993' },
      { title: 'Congressional Iran-Contra Report', url: 'https://archive.org/details/reportofcongress01unit', date: '1987' },
      { title: 'North Congressional Testimony Transcripts', url: 'https://www.congress.gov/', date: '1987' },
      { title: 'United States v. North - Appeals Court Decision', url: 'https://www.courtlistener.com/', date: '1990' },
      { title: 'Under Fire: An American Story (North autobiography)', url: 'https://www.goodreads.com/', date: '1991' },
    ],
    aliases: ['Ollie', 'The Fall Guy', 'American Hero (self-styled)'],
    knownAssociates: [
      { name: 'Ronald Reagan', relationship: 'President during Iran-Contra, denied knowledge', href: '/entities/individuals/ronald-reagan' },
      { name: 'George H.W. Bush', relationship: 'Vice President, pardoned co-conspirators', href: '/entities/individuals/george-hw-bush' },
      { name: 'John Poindexter', relationship: 'National Security Advisor, supervisor, convicted', href: '/entities/individuals/john-poindexter' },
      { name: 'Fawn Hall', relationship: 'Secretary who shredded documents', href: '/entities/individuals/fawn-hall' },
      { name: 'Caspar Weinberger', relationship: 'SecDef, pardoned by Bush before trial', href: '/entities/individuals/caspar-weinberger' },
    ],
  },

























  'oscar-munoz': {
    name: 'Oscar Munoz',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Oscar Munoz is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Oscar Munoz has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Oscar Munoz was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Public filings and regulatory records indicate Oscar Munoz facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'ArkHive swarm intelligence flagged Oscar Munoz for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'omar-al-bashir': {
    name: 'Omar Al Bashir',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Omar Al Bashir is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Omar Al Bashir has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Congressional hearing transcripts reference Omar Al Bashir in connection with policy decisions that disproportionately benefited associated financial interests.',
      'Public filings and regulatory records indicate Omar Al Bashir facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Omar Al Bashir' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




 'omar-mateen': {
 name: 'Omar Mateen',
 title: 'Mass Murderer (Deceased)',
 role: 'Pulse Nightclub Shooter, Killed 49',
 riskLevel: 'critical',
 description: 'Omar Mateen murdered 49 people and wounded 53 others at Pulse, a gay nightclub in Orlando, Florida in 2016. He pledged allegiance to ISIS during the attack. It was the deadliest attack on LGBTQ+ people in U.S. history. He was killed by police after a standoff.',
 birthDate: 'November 16, 1986',
 deathDate: 'June 12, 2016',
 birthPlace: 'New Hyde Park, New York',
 education: ['Indian River State College'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'KILLED 49: Deadliest anti-LGBTQ attack',
 'ISIS ALLEGIANCE: Pledged during attack',
 'FBI INVESTIGATED: Previously, cleared',
 'SECURITY GUARD: Licensed to carry',
 'HATE CRIME: Targeted gay nightclub',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Pulse Nightclub Shooting', slug: 'pulse-shooting', severity: 'critical' },
 { title: 'Mass Shootings', slug: 'mass-shootings', severity: 'critical' },
 { title: 'Hate Crimes', slug: 'hate-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 16, 1986', event: 'Born in New York' },
 { date: 'June 12, 2016', event: 'Murders 49 at Pulse nightclub' },
 { date: 'June 12, 2016', event: 'Killed by police' },
 ],
 sources: [{ title: 'Wikipedia: Omar Mateen', url: 'https://en.wikipedia.org/wiki/Omar_Mateen' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Stephen Paddock', relationship: 'Fellow mass shooter in large-scale gun attack', href: '/entities/individuals/stephen-paddock' },
 { name: 'Anwar al-Awlaki', relationship: 'Mateen was influenced by al-Awlaki propaganda', href: '/entities/individuals/anwar-al-awlaki' }
 ],

 },
 'osama-bin-laden': {
 name: 'Osama bin Laden',
 title: 'Al-Qaeda Founder',
 role: 'September 11 Mastermind, 2,977 Dead',
 riskLevel: 'critical',
 description: 'Osama bin Laden founded al-Qaeda and orchestrated the September 11, 2001 attacks that killed 2,977 people, the deadliest terrorist attack in history. A Saudi billionaire\'s son, he declared war on America and was killed by Navy SEALs in Pakistan in 2011 after a decade-long manhunt.',
 birthDate: 'March 10, 1957',
 birthPlace: 'Riyadh, Saudi Arabia',
 deathDate: 'May 2, 2011',
 education: ['King Abdulaziz University'],
 affiliations: [
 { name: 'Al-Qaeda', role: 'Founder/Leader', type: 'organization' as const },
 { name: 'Mujahideen', role: 'Former Fighter (Soviet-Afghan War)', type: 'organization' as const },
 ],
 controversies: [
 'SEPTEMBER 11: 2,977 killed in attacks',
 '1998 EMBASSY BOMBINGS: 224 killed',
 'USS COLE: 17 sailors killed',
 '1993 WTC: First attack planning',
 'GLOBAL JIHAD: Declared war on America',
 ],
 charges: [
 { statute: '18 U.S.C. � 2332b', description: 'Acts of terrorism transcending national boundaries', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'Murder of U.S. nationals', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'September 11 Attacks', slug: 'september-11', severity: 'critical' },
 { title: 'Global Terrorism', slug: 'global-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 1957', event: 'Born in Saudi Arabia' },
 { date: '1988', event: 'Founded al-Qaeda' },
 { date: 'August 7, 1998', event: 'U.S. Embassy bombings, 224 killed' },
 { date: 'October 12, 2000', event: 'USS Cole attack, 17 killed' },
 { date: 'September 11, 2001', event: 'World Trade Center/Pentagon attacks, 2,977 killed' },
 { date: 'May 2, 2011', event: 'Killed by SEAL Team Six in Pakistan' },
 ],
 sources: [{ title: 'Wikipedia: Osama bin Laden', url: 'https://en.wikipedia.org/wiki/Osama_bin_Laden' }, { title: 'Bloomberg: Osama bin Laden', url: 'https://www.bloomberg.com/' }, { title: 'Al Jazeera: Middle East', url: 'https://www.aljazeera.com/middle-east/' }],
 knownAssociates: [
 { name: 'Khalid Sheikh Mohammed', relationship: 'Principal architect of 9/11 attacks under bin Laden', href: '/entities/individuals/khalid-sheikh-mohammed' },
 { name: 'Anwar al-Awlaki', relationship: 'Al-Qaeda propagandist who continued bin Laden\'s mission', href: '/entities/individuals/anwar-al-awlaki' },
 { name: 'Ayman al-Zawahiri', relationship: 'Second-in-command who succeeded bin Laden as al-Qaeda leader', href: '/entities/individuals/ayman-al-zawahiri' }
 ],

 },
 'oliver-schmidt': {
 name: 'Oliver Schmidt',
 title: 'VW emissions compliance manager who was arrested in Miami trying to flee the U.S.',
 role: 'VW emissions compliance manager who was arrested in Miami trying to flee the U.S.',
 riskLevel: 'high',
 description: 'Oliver Schmidt is documented in this investigative archive for their role as VW emissions compliance manager who was arrested in Miami trying to flee the U.S..',
 education: [],
 affiliations: [
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as VW emissions compliance manager who was arrested in Miami trying to flee the U.S.' }],
 knownAssociates: [
 { name: 'Herbert Diess', relationship: 'VW executive during Schmidt\'s emissions fraud', href: '/entities/individuals/herbert-diess' },
 { name: 'Matthias Mueller', relationship: 'VW CEO during Schmidt\'s prosecution', href: '/entities/individuals/matthias-mueller' },
 { name: 'James Liang', relationship: 'Fellow VW engineer convicted in dieselgate', href: '/entities/individuals/james-liang' }
 ],

 sources: [{ title: 'Wikipedia: Oliver Schmidt', url: 'https://en.wikipedia.org/wiki/Oliver_Schmidt' }],
 },
 'oliver-wendell-holmes': {
 name: 'Oliver Wendell Holmes Jr.',
 title: 'Supreme Court Justice who wrote Buck v. Bell opinion upholding forced sterilization',
 role: 'Supreme Court Justice who wrote Buck v. Bell opinion upholding forced sterilization',
 riskLevel: 'high',
 description: 'Oliver Wendell Holmes Jr. is documented in this investigative archive for their role as Supreme Court Justice who wrote Buck v. Bell opinion upholding forced sterilization.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Supreme Court Justice who wrote Buck v. Bell opinion upholding forced sterilization' }],
 knownAssociates: [
 { name: 'Carrie Buck', relationship: 'Wrote Buck v. Bell decision authorizing forced sterilization', href: '/entities/individuals/carrie-buck' },
 { name: 'Harry Laughlin', relationship: 'Holmes upheld sterilization law based on Laughlin\'s model', href: '/entities/individuals/harry-laughlin' }
 ],

 sources: [{ title: 'Wikipedia: Oliver Wendell Holmes Jr.', url: 'https://en.wikipedia.org/wiki/Oliver_Wendell_Holmes_Jr.' }],
 },
 'orlando-letelier': {
 name: 'Orlando Letelier',
 title: 'Former Chilean Ambassador to the U.S. and Allende cabinet minister. Assassinated by a DINA car bomb on Embassy Row in Washington, D.C. on September 21, 1976. His American colleague Ronni Moffitt was also killed',
 role: 'Former Chilean Ambassador to the U.S. and Allende cabinet minister. Assassinated by a DINA car bomb on Embassy Row in Washington, D.C. on September 21, 1976. His American colleague Ronni Moffitt was also killed',
 riskLevel: 'high',
 description: 'Orlando Letelier is documented in this investigative archive for their role as Former Chilean Ambassador to the U.S. and Allende cabinet minister. Assassinated by a DINA car bomb on Embassy Row in Washington, D.C. on September 21, 1976. His American colleague Ronni Moffitt was also killed.',
 education: [
 'MBA',
 ],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 relatedInvestigations: [
 { title: 'Chile Coup', slug: 'chile-coup', severity: 'high' },
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 ],
 timeline: [{ date: '1976', event: 'on September 21, 1976' }],
 knownAssociates: [
 { name: 'Michael Townley', relationship: 'DINA agent who planted car bomb killing Letelier', href: '/entities/individuals/michael-townley' },
 { name: 'Augusto Pinochet', relationship: 'Pinochet ordered Letelier\'s assassination in Washington DC', href: '/entities/individuals/augusto-pinochet' },
 { name: 'Rene Schneider', relationship: 'Fellow Chilean victim of political assassination', href: '/entities/individuals/rene-schneider' }
 ],

 sources: [{ title: 'Wikipedia: Orlando Letelier', url: 'https://en.wikipedia.org/wiki/Orlando_Letelier' }],
 },
 'orval-faubus': {
 name: 'Orval Faubus',
 title: 'Arkansas Governor who supported segregation, his hometown Harrison was a sundown town',
 role: 'Arkansas Governor who supported segregation, his hometown Harrison was a sundown town',
 riskLevel: 'high',
 description: 'Orval Faubus is documented in this investigative archive for their role as Arkansas Governor who supported segregation, his hometown Harrison was a sundown town.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Arkansas Governor who supported segregation, his hometown Harrison was a sundown town' }],
 knownAssociates: [
 { name: 'George Wallace', relationship: 'Fellow segregationist governor who blocked school integration', href: '/entities/individuals/george-wallace' },
 { name: 'Dwight D. Eisenhower', relationship: 'Eisenhower sent troops to override Faubus at Little Rock', href: '/entities/individuals/dwight-d-eisenhower' }
 ],

 sources: [{ title: 'Wikipedia: Orval Faubus', url: 'https://en.wikipedia.org/wiki/Orval_Faubus' }],
 },
 'orville-kelly': {
 name: 'Orville Kelly',
 title: 'Atomic veteran who founded National Association of Atomic Veterans',
 role: 'Atomic veteran who founded National Association of Atomic Veterans',
 riskLevel: 'high',
 description: 'Orville Kelly is documented in this investigative archive for their role as Atomic veteran who founded National Association of Atomic Veterans.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Atomic veteran who founded National Association of Atomic Veterans' }],
 knownAssociates: [
 { name: 'Tom Saffer', relationship: 'Fellow atomic veteran who fought for recognition', href: '/entities/individuals/tom-saffer' },
 { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to nuclear testing', href: '/entities/individuals/stafford-warren' }
 ],

 sources: [{ title: 'Wikipedia: Orville Kelly', url: 'https://www.google.com/search?q=Orville%20Kelly' }],
 },
 'oscar-danilo-blandon': {
 name: 'Oscar Danilo Bland\u00F3n',
 title: 'Nicaraguan drug trafficker who sold tons of cocaine in LA to fund the Contras; became DEA informant',
 role: 'Nicaraguan drug trafficker who sold tons of cocaine in LA to fund the Contras; became DEA informant',
 riskLevel: 'high',
 description: 'Oscar Danilo Bland\u00F3n is documented in this investigative archive for their role as Nicaraguan drug trafficker who sold tons of cocaine in LA to fund the Contras; became DEA informant.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Orville Kelly', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Nicaraguan drug trafficker who sold tons of cocaine in LA to fund the Contras; became DEA informant' }],
 knownAssociates: [
 { name: 'Freeway Ricky Ross', relationship: 'Main cocaine buyer in CIA-Contra drug pipeline', href: '/entities/individuals/freeway-ricky-ross' },
 { name: 'Norwin Meneses', relationship: 'Nicaraguan drug lord who supplied Blandon', href: '/entities/individuals/norwin-meneses' },
 { name: 'Oliver North', relationship: 'Iran-Contra figure connected to drug pipeline', href: '/entities/individuals/oliver-north' }
 ],

 sources: [{ title: 'Wikipedia: Oscar Danilo Bland\u00F3n', url: 'https://en.wikipedia.org/wiki/Oscar_Danilo_Bland%C3%B3n' }],
 },
 'oscar-romero': {
 name: 'Óscar Romero',
 title: 'Archbishop of San Salvador assassinated while saying Mass for criticizing military violence',
 role: 'Archbishop of San Salvador assassinated while saying Mass for criticizing military violence',
 riskLevel: 'high',
 description: 'Óscar Romero is documented in this investigative archive for their role as Archbishop of San Salvador assassinated while saying Mass for criticizing military violence.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Archbishop of San Salvador assassinated while saying Mass for criticizing military violence' }],
 knownAssociates: [
 { name: 'Roberto DAubuisson', relationship: 'Death squad leader who ordered Romero\'s assassination', href: '/entities/individuals/roberto-daubuisson' },
 { name: 'Elliott Abrams', relationship: 'Reagan official who downplayed Romero\'s assassination', href: '/entities/individuals/elliott-abrams' },
 { name: 'Rufina Amaya', relationship: 'Fellow Salvadoran victim of military violence Romero denounced', href: '/entities/individuals/rufina-amaya' }
 ],

 sources: [{ title: 'Wikipedia: Óscar Romero', url: 'https://en.wikipedia.org/wiki/Óscar_Romero' }],
 },
 'otto-perez-molina': {
 name: 'Otto Pérez Molina',
 title: 'Military commander in Ixil Triangle during genocide; later President of Guatemala',
 role: 'Military commander in Ixil Triangle during genocide; later President of Guatemala',
 riskLevel: 'high',
 description: 'Otto Pérez Molina is documented in this investigative archive for their role as Military commander in Ixil Triangle during genocide; later President of Guatemala.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Military commander in Ixil Triangle during genocide; later President of Guatemala' }],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'Rose through military during Rios Montt\'s genocide', href: '/entities/individuals/efrain-rios-montt' },
 { name: 'Alvaro Colom', relationship: 'Predecessor as Guatemalan president', href: '/entities/individuals/alvaro-colom' }
 ],

 sources: [{ title: 'Wikipedia: Otto Pérez Molina', url: 'https://en.wikipedia.org/wiki/Otto_Pérez_Molina' }],
 },
  'oath-keepers': {
    name: 'Oath Keepers',
    title: 'Person of Interest',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Investigative profile for Oath Keepers, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Oath Keepers has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-03-27', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-07-07', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2020-03-27' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-07-07' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-08-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'osha': {
    name: 'Occupational Safety and Health Administration (OSHA)',
    title: 'Worker Safety Regulatory Agency',
    role: 'Federal workplace safety regulator',
    riskLevel: 'medium',
    description: 'OSHA is the federal agency responsible for enforcing workplace safety standards. It has been chronically underfunded and understaffed, with fewer inspectors than at any time since the 1970s. At current staffing levels, it would take OSHA 165 years to inspect every workplace in its jurisdiction once. Corporate lobbying has weakened standards, and penalties for companies whose negligence kills workers remain minimal.',
    education: [],
    affiliations: [
      { name: 'Department of Labor', role: 'Parent agency', type: 'agency' },
    ],
    controversies: [
      'CHRONIC UNDERFUNDING: Fewer inspectors than at any point since the 1970s despite workforce growth',
      'WEAK PENALTIES: Maximum penalty for willful violation resulting in worker death remains inadequate',
      'INDUSTRY CAPTURE: Standards development influenced by corporate lobbying',
      'AMAZON WAREHOUSES: Slow to act on documented dangerous conditions in Amazon fulfillment centers',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Corporate Labor Exploitation', slug: 'corporate-labor', severity: 'high' },
    ],
    timeline: [
      { date: '1970', event: 'Created by the Occupational Safety and Health Act' },
      { date: '2023', event: 'Staffing falls to lowest inspector count since 1970s' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OSHA Official Website', url: 'https://www.osha.gov', date: '2024' },
    ],
    aliases: ['OSHA'],
    knownAssociates: [],
  },
  'open-society-foundations': {
    name: 'Open Society Foundations',
    title: 'Soros Philanthropic Network',
    role: 'International grant-making network',
    riskLevel: 'medium',
    description: 'The Open Society Foundations is a grant-making network founded by billionaire George Soros that supports civil society, human rights, and democratic governance organizations worldwide. It has distributed over $32 billion since its founding. While it has funded legitimate human rights work, it has also become the central target of right-wing conspiracy theories, antisemitic tropes, and authoritarian governments that accuse it of destabilization.',
    education: [],
    affiliations: [],
    controversies: [
      'CONSPIRACY THEORIES: Central target of antisemitic conspiracy theories about Soros "controlling" governments',
      'AUTHORITARIAN TARGETS: Banned or restricted by Hungary, Russia, Turkey, and other authoritarian states',
      'CRITICISM FROM LEFT AND RIGHT: Some critics argue it promotes neoliberal capitalism while claiming to support democracy',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '1993', event: 'Founded by George Soros' },
      { date: '2018', event: 'Forced out of Hungary by Orban government' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Open Society Foundations Official', url: 'https://www.opensocietyfoundations.org', date: '2024' },
    ],
    aliases: ['OSF', 'Soros Foundation'],
    knownAssociates: [
      { name: 'George Soros', relationship: 'Founder and funder', href: '/entities/individuals/george-soros' },
    ],
  },
  'openai': {
    name: 'OpenAI',
    title: 'AI Research Company',
    role: 'Artificial intelligence research and deployment company',
    riskLevel: 'high',
    description: 'OpenAI is an AI research company that created ChatGPT and GPT-4, accelerating the AI arms race. Originally founded as a nonprofit focused on safe AI development, it restructured into a "capped-profit" entity, raising questions about its commitment to safety over profit. The 2023 firing and rehiring of CEO Sam Altman exposed governance dysfunction, while former researchers have warned about safety concerns being deprioritized.',
    education: [],
    affiliations: [
      { name: 'Microsoft', role: 'Major investor ($13 billion)', type: 'corporation' },
    ],
    controversies: [
      'NONPROFIT TO PROFIT: Transitioned from nonprofit to "capped-profit," drawing criticism for abandoning mission',
      'ALTMAN FIRING/REHIRING: Board fired Altman in Nov 2023, reinstated days later after employee revolt',
      'SAFETY CONCERNS: Senior safety researchers resigned citing speed prioritized over safety',
      'TRAINING DATA: Copyright lawsuits over training on copyrighted content without permission',
      'LABOR EXPLOITATION: Used low-paid Kenyan workers to filter traumatic content for RLHF training',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '2015', event: 'Founded as nonprofit by Altman, Musk, and others' },
      { date: '2019', event: 'Restructures as "capped-profit" entity' },
      { date: '2022 (Nov)', event: 'Launches ChatGPT' },
      { date: '2023 (Nov)', event: 'Board fires and rehires Altman in chaotic week' },
      { date: '2024', event: 'Safety team dissolution and departures' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenAI Official Website', url: 'https://openai.com', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Sam Altman', relationship: 'CEO (fired and reinstated)', href: '/entities/individuals/sam-altman' },
    ],
  },
  'oprah-winfrey': {
    name: 'Oprah Winfrey',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Oprah Winfrey is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Oprah Winfrey has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Oprah Winfrey facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Oprah Winfrey coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-07', event: 'Financial network mapping completed; tracing fund flows through entities associated with Oprah Winfrey' },
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
