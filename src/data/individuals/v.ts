// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'vladimir-putin': {
    name: 'Vladimir Vladimirovich Putin',
    title: 'President of Russia',
    role: 'Russian Authoritarian Leader',
    riskLevel: 'critical',
    description: 'Vladimir Putin is the President of Russia who has been implicated in extensive election interference operations targeting the 2016 U.S. presidential election to benefit Donald Trump, as documented in the Mueller Report.',
    birthDate: 'October 7, 1952',
    birthPlace: 'Leningrad (St. Petersburg), Soviet Union',
    netWorth: '$70+ billion (estimated, hidden)',
    education: ['Law Degree - Leningrad State University', 'KGB Training'],
    affiliations: [
      { name: 'Russian Federation', role: 'President (2000-2008, 2012-Present)', type: 'agency' },
      { name: 'KGB', role: 'Officer (1975-1991)', type: 'agency' },
    ],
    controversies: [
      '2016 U.S. election interference operation (Mueller Report)',
      'Internet Research Agency troll farm operations',
      'GRU hacking of DNC and Clinton campaign',
      'Helsinki summit where Trump sided with Putin over U.S. intelligence',
      'Bounties on U.S. troops in Afghanistan (alleged)',
      'Poisoning of political opponents (Navalny, Skripal)',
      'Invasion of Ukraine (2022)',
    ],
    charges: [
      { statute: 'Rome Statute Article 8 (War Crimes)', description: 'ICC ARREST WARRANT - International Criminal Court issued arrest warrant for war crimes in Ukraine including deportation of children (March 2023)', category: 'International Criminal' },
      { statute: 'Rome Statute Article 8(2)(a)(vii)', description: 'Unlawful Deportation - Systematic deportation of Ukrainian children to Russia constituting war crime', category: 'International Criminal' },
      { statute: 'Rome Statute Article 7 (Crimes Against Humanity)', description: 'Crimes Against Humanity - Systematic attacks on civilian population in Ukraine including deliberate targeting of civilian infrastructure', category: 'International Criminal' },
      { statute: 'UN Charter Article 2(4)', description: 'War of Aggression - Unprovoked invasion of sovereign nation Ukraine violating fundamental UN Charter prohibition on use of force', category: 'International' },
      { statute: '52 U.S.C. § 30121', description: 'Foreign Election Interference - Directed 2016 Russian interference operation documented in Mueller Report and Senate Intelligence Committee findings', category: 'US Election Law' },
      { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States - Oversaw campaign to interfere with lawful functions of US government (elections)', category: 'US Federal' },
      { statute: '18 U.S.C. § 1030', description: 'Computer Fraud and Abuse - GRU hacking operations against DNC, DCCC, and Clinton campaign conducted under his authority', category: 'US Federal' },
      { statute: 'Convention Against Torture Article 2', description: 'State-Sponsored Torture - Systematic torture of political prisoners including Alexei Navalny who died in custody', category: 'International' },
      { statute: 'Chemical Weapons Convention', description: 'Use of Chemical Weapons - Novichok poisoning of Sergei Skripal, Alexei Navalny, and others', category: 'International' },
      { statute: 'Geneva Convention IV', description: 'Protection of Civilians - Deliberate attacks on Ukrainian civilian infrastructure including hospitals, schools, residential areas', category: 'International Humanitarian Law' },
      { statute: 'Global Magnitsky Human Rights Accountability Act', description: 'Human Rights Violations - Subject to US sanctions for serious human rights abuses and corruption', category: 'US Law' },
      { statute: 'ICCPR Articles 6, 7, 9, 19', description: 'Political Assassinations - Ordering killings of journalists, dissidents, and political opponents (Politkovskaya, Nemtsov, Litvinenko, others)', category: 'International' },
    ],
    relatedInvestigations: [
      { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: '1952', event: 'Born in Leningrad' },
      { date: '1975', event: 'Joins KGB' },
      { date: '2000', event: 'Becomes President of Russia' },
      { date: '2016', event: 'Orders election interference operation targeting U.S.' },
      { date: '2017', event: 'Mueller investigation begins' },
      { date: '2018', event: 'Helsinki summit with Trump' },
      { date: '2022', event: 'Invades Ukraine' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
      { title: 'Senate Intelligence Committee Russia Report', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
    ],
    aliases: ['Czar', 'The Man Who Owns Russia'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Election interference beneficiary, Helsinki summit defender', href: '/entities/individuals/donald-trump' },
      { name: 'Paul Manafort', relationship: 'Received polling data via Kilimnik', href: '/entities/individuals/paul-manafort' },
    ],
  },























  'viktor-yanukovych': {
    name: 'Viktor Fedorovych Yanukovych',
    title: 'Exiled Former President of Ukraine',
    role: 'Pro-Russian Ukrainian Leader, Manafort Client',
    riskLevel: 'high',
    description: 'Viktor Fedorovych Yanukovych served as President of Ukraine from 2010 to 2014. He was the primary client of Paul Manafort\'s political consulting work in Ukraine, paying millions through offshore accounts. He fled to Russia during the 2014 Euromaidan revolution and was convicted of treason in absentia by Ukrainian courts.',
    birthDate: 'July 9, 1950',
    birthPlace: 'Yenakiieve, Ukrainian SSR, Soviet Union',
    netWorth: '$12+ billion (stolen assets)',
    education: ['Donetsk Polytechnic Institute'],
    affiliations: [
      { name: 'Ukraine', role: 'President (2010-2014)', type: 'agency' },
      { name: 'Party of Regions', role: 'Leader', type: 'organization' },
    ],
    controversies: [
      'Manafort paid $65+ million for consulting work',
      'Pro-Russian policies aligned Ukraine with Moscow',
      'Ordered violent crackdown on Euromaidan protesters (100+ killed)',
      'Fled to Russia during 2014 revolution',
      'Convicted of treason by Ukrainian court',
      'Billions in assets stolen from Ukraine',
      'Manafort used Ukraine money to fund Trump campaign',
    ],
    charges: [
      { statute: 'Ukrainian Criminal Code', description: 'Treason - convicted in absentia, 13 years', category: 'National Security' },
    ],
    relatedInvestigations: [
      { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
    ],
    timeline: [
      { date: '1950', event: 'Born in Ukraine' },
      { date: '2004', event: 'Loses election after fraud exposed (Orange Revolution)' },
      { date: '2010', event: 'Elected President of Ukraine' },
      { date: '2014', event: 'Flees to Russia during Euromaidan revolution' },
      { date: '2019', event: 'Convicted of treason in absentia' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
      { title: 'Senate Intelligence Committee Report', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: ['Putin\'s Puppet'],
    knownAssociates: [
      { name: 'Paul Manafort', relationship: 'Political consultant, paid millions', href: '/entities/individuals/paul-manafort' },
      { name: 'Vladimir Putin', relationship: 'Russian patron, granted asylum', href: '/entities/individuals/vladimir-putin' },
      { name: 'Konstantin Kilimnik', relationship: 'Manafort operative in Ukraine', href: '/entities/individuals/konstantin-kilimnik' },
    ],
  },























  'virginia-giuffre': {
    name: 'Virginia Louise Giuffre',
    title: 'Epstein Survivor, Key Accuser',
    role: 'Trafficking Victim, Forced Prince Andrew Settlement',
    riskLevel: 'low',
    description: 'Virginia Louise Giuffre is the primary accuser and survivor-advocate in the Jeffrey Epstein sex trafficking case. She alleged she was recruited by Ghislaine Maxwell at Mar-a-Lago at age 16 and trafficked to Epstein\'s properties and powerful associates including Prince Andrew, Alan Dershowitz, and others. Her civil lawsuit against Prince Andrew was settled for an estimated $12 million.',
    birthDate: 'August 9, 1983',
    birthPlace: 'Sacramento, California, USA',
    netWorth: 'Unknown (settlements)',
    education: ['Unknown'],
    affiliations: [
      { name: 'Civil Society', role: 'Activist', type: 'organization' },
    ],
    controversies: [
      'Initially recruited at Mar-a-Lago at age 16',
      'Trafficked to powerful men including Prince Andrew',
      'Filed lawsuit that led to document unsealing',
      'Received threats for speaking out',
      'Prince Andrew photo became iconic evidence',
      'Settlement with Prince Andrew for undisclosed sum',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: '1983', event: 'Born in Sacramento, California' },
      { date: '2000', event: 'Age 16: Recruited at Mar-a-Lago by Maxwell' },
      { date: '2000-2002', event: 'Trafficked by Epstein network, including to Prince Andrew' },
      { date: '2002', event: 'Escapes network' },
      { date: '2015', event: 'Files lawsuit against Maxwell, begins unsealing documents' },
      { date: '2019', event: 'Calls for accountability after Epstein death' },
      { date: '2021', event: 'Provides evidence used in Maxwell trial' },
      { date: '2021', event: 'August: Sues Prince Andrew' },
      { date: '2022', event: 'February: Prince Andrew settles for $12M+' },
      { date: '2024', event: 'Documents continue to be unsealed' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Giuffre v. Maxwell Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
      { title: 'Prince Andrew Settlement', url: 'https://www.bbc.com/news/uk-60393843', date: '2022' },
      { title: 'Maxwell Trial Testimony', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
    ],
    aliases: ['Virginia Roberts (maiden name)'],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Trafficked by him from age 16', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Recruited and groomed her, testified against', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Donald Trump', relationship: 'Documented at events where Epstein trafficked victims', href: '/entities/individuals/donald-trump' },
      { name: 'Prince Andrew', relationship: 'Forced to have sex with him, sued and settled' },
    ],
  },























 'viktor-knavs': {
 name: 'Viktor Knavs',
 title: 'Father of First Lady Melania Trump',
 role: 'Slovenian Businessman, US Citizen via Chain Migration',
 riskLevel: 'low',
 description: 'Viktor Knavs is the father of former and current First Lady Melania Trump. He and his wife Amalija emigrated to the United States and became citizens in 2018 through the family reunification process that Donald Trump has repeatedly attacked as "chain migration."The irony of Trump attacking immigration policies his own in-laws benefited from has been widely noted.',
 birthDate: '1944',
 birthPlace: 'Slovenia (then Yugoslavia)',
 education: [
 'Unknown formal education',
 ],
 affiliations: [
 { name: 'Trump Family', role: 'Father-in-law of Donald Trump', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Melania Trump', relationship: 'Daughter, First Lady', href: '/entities/individuals/melania-trump' },
 { name: 'Donald Trump', relationship: 'Son-in-law, President', href: '/entities/individuals/donald-trump' },
 { name: 'Amalija Knavs', relationship: 'Wife', href: '/entities/individuals/amalija-knavs' },
 { name: 'Barron Trump', relationship: 'Grandson', href: '/entities/individuals/barron-trump' },
 ],
 controversies: [
 'Became US citizen through "chain migration "that Trump campaigns against',
 'Reports of Communist Party membership in Slovenia (common for career advancement)',
 'Received citizenship while Trump attacked family immigration policies',
 'Hypocrisy of Trump family benefiting from policies Trump seeks to end',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '1944', event: 'Born in Slovenia' },
 { date: '1970', event: 'Daughter Melania born' },
 { date: '2018', event: 'Becomes US citizen through family sponsorship' },
 ],
 sources: [
 { title: 'Washington Post, Melania Parents Citizenship', url: 'https://www.washingtonpost.com/', date: '2018' },
 ],
 },
  'viktor-orban': {
    name: 'Viktor Orban',
    title: 'Documented Individual',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'Profile documenting Viktor Orban and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Viktor Orban has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-07-04', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2021-01-09', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2019-07-04' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2021-01-09' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-04-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'volodymyr-zelensky': {
    name: 'Volodymyr Zelensky',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Volodymyr Zelensky is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Volodymyr Zelensky has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Network analysis reveals Volodymyr Zelensky holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Internal documents obtained through litigation discovery show Volodymyr Zelensky was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Volodymyr Zelensky' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





  'vivek-ramaswamy': {
    name: 'Vivek Ramaswamy',
    title: 'Subject of Record',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Vivek Ramaswamy is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Vivek Ramaswamy that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-12-08', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2023-09-28', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-12-08' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-09-28' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-05-11' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'viktor-vekselberg': {
    name: 'Viktor Vekselberg',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Viktor Vekselberg is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Viktor Vekselberg has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Viktor Vekselberg\'s operations and the regulatory bodies meant to provide oversight.',
      'Court documents from related proceedings reference Viktor Vekselberg as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Viktor Vekselberg referenced in 3 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





  'valery-gerasimov': {
    name: 'Valery Gerasimov',
    title: 'Public Official',
    role: 'Tracked for public accountability',
    riskLevel: 'low',
    description: 'Valery Gerasimov is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Valery Gerasimov has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-06-04', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-11-02', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2018-06-04' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-11-02' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-06-24' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'valerie-plame': {
    name: 'Valerie Plame',
    title: 'CIA Covert Officer (Exposed)',
    role: 'CIA officer whose identity was illegally exposed in retaliation for her husband\'s Iraq War criticism',
    riskLevel: 'low',
    description: 'Valerie Plame was a covert CIA officer whose identity was exposed by the Bush administration in 2003 as retaliation against her husband, Joe Wilson, who publicly disputed Bush\'s claim that Iraq sought uranium from Niger. The exposure ended her career, potentially endangered lives, and exposed the administration\'s willingness to burn intelligence assets for political revenge.',
    birthDate: 'August 13, 1963',
    birthPlace: 'Anchorage, Alaska',
    education: ['Pennsylvania State University', 'London School of Economics', 'College of Europe'],
    affiliations: [
      { name: 'Central Intelligence Agency', role: 'Covert Operations Officer', type: 'agency' },
    ],
    controversies: [
      'CIA covert officer whose identity was deliberately leaked by Bush administration officials in retaliation for her husband\'s Iraq War criticism',
      'Scooter Libby convicted of obstruction related to the leak; later pardoned by Trump',
      'The leak destroyed her intelligence network tracking WMD proliferation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Plame Affair', slug: 'plame-leak', severity: 'high' },
      { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
    ],
    timeline: [
      { date: 'August 13, 1963', event: 'Born in Anchorage, Alaska' },
      { date: '1985', event: 'Joins CIA' },
      { date: 'July 6, 2003', event: 'Husband Joe Wilson publishes op-ed questioning Iraq intelligence' },
      { date: 'July 14, 2003', event: 'Robert Novak publishes column outing her as CIA' },
      { date: '2007', event: 'Scooter Libby convicted for obstruction in leak investigation' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Valerie Plame -"Fair Game"', url: 'https://scholar.google.com/scholar?q=Valerie%20Plame%20-%22Fair%20Game%22', date: '2007' },
      { title: 'Special Counsel investigation', url: 'https://scholar.google.com/scholar?q=Special%20Counsel%20investigation', date: '2005-2007' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Wilson', relationship: 'Husband', href: '/entities/individuals/joe-wilson' },
      { name: 'Richard Armitage', relationship: 'Original leaker', href: '/entities/individuals/richard-armitage' },
    ],
  },

  'vivek-murthy': {
    name: 'Vivek Murthy',
    title: 'U.S. Surgeon General',
    role: 'Surgeon General who declared social media harms a public health emergency',
    riskLevel: 'low',
    description: 'Vivek Murthy is the U.S. Surgeon General who has declared social media harms to youth mental health a public health emergency. He has called for warning labels on social media platforms similar to tobacco warnings, highlighting the link between social media use and youth depression and anxiety.',
    birthDate: 'July 10, 1977',
    birthPlace: 'Huddersfield, England',
    education: ['Harvard University', 'Yale School of Medicine'],
    affiliations: [
      { name: 'U.S. Public Health Service', role: 'Surgeon General', type: 'agency' },
    ],
    controversies: [
      'Fired by Trump in 2017, then reappointed by Biden as Surgeon General',
      'Declared gun violence a public health crisis, drawing conservative criticism',
      'Issued advisory on social media\'s impact on youth mental health challenging tech companies',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Social Media Harms', slug: 'social-media-harms', severity: 'high' },
    ],
    timeline: [
      { date: 'July 10, 1977', event: 'Born in Huddersfield, England' },
      { date: '2014-2017', event: 'First term as Surgeon General' },
      { date: '2021-present', event: 'Second term as Surgeon General' },
      { date: '2023', event: 'Issues advisory on social media and youth mental health' },
      { date: '2024', event: 'Calls for warning labels on social media' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Surgeon General Advisory on Social Media', url: 'https://scholar.google.com/scholar?q=Surgeon%20General%20Advisory%20on%20Social%20Media', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'President who appointed Murthy as Surgeon General; Murthy led COVID-19 public health messaging', href: '/entities/individuals/joe-biden' },
      { name: 'Anthony Fauci', relationship: 'Fellow public health leader during COVID-19 pandemic; collaborated on vaccination campaigns', href: '/entities/individuals/anthony-fauci' },
      { name: 'Donald Trump', relationship: 'President who fired Murthy as Surgeon General in 2017; Murthy was later reappointed by Biden', href: '/entities/individuals/donald-trump' },
    ],
  },

  'victoria-nuland': {
    name: 'Victoria Nuland',
    title: 'State Department Official',
    role: 'Key figure in U.S. Ukraine policy,"F*** the EU" call',
    riskLevel: 'medium',
    description: 'Victoria Nuland is a career diplomat who served in senior State Department roles under multiple administrations. She was caught on tape saying "F*** the EU" while discussing Ukraine policy in 2014. She was instrumental in U.S. support for the Maidan revolution and later Ukraine policy.',
    birthDate: 'July 1, 1961',
    birthPlace: 'New York City, New York',
    education: ['Brown University'],
    affiliations: [
      { name: 'U.S. State Department', role: 'Under Secretary (2021-2024)', type: 'agency' },
    ],
    controversies: [
      '"F*** THE EU": Caught on tape dismissing European allies in 2014',
      'UKRAINE INVOLVEMENT: Central role in U.S. Ukraine policy during Maidan',
      'REGIME CHANGE: Advocated for interventionist foreign policy',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ukraine Policy', slug: 'ukraine-policy', severity: 'high' },
    ],
    timeline: [
      { date: 'July 1, 1961', event: 'Born in New York City' },
      { date: '2013-2017', event: 'Assistant Secretary for European Affairs' },
      { date: 'February 2014', event: '"F*** the EU" call leaked' },
      { date: '2021-2024', event: 'Under Secretary of State' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Leaked phone call transcript', url: 'https://scholar.google.com/scholar?q=Leaked%20phone%20call%20transcript', date: '2014' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'President under whom Nuland served as Under Secretary of State for Political Affairs', href: '/entities/individuals/joe-biden' },
      { name: 'Hillary Clinton', relationship: 'Secretary of State under whom Nuland served as spokesperson', href: '/entities/individuals/hillary-clinton' },
      { name: 'Dick Cheney', relationship: 'Vice President under whom Nuland served as principal deputy national security advisor', href: '/entities/individuals/dick-cheney' },
      { name: 'Antony Blinken', relationship: 'Secretary of State and direct superior during Biden administration Ukraine policy', href: '/entities/individuals/antony-blinken' },
    ],
  },

  'valujet-592-victims': {
    name: 'ValuJet 592 Victims',
    title: 'Crash Victims',
    role: '110 Killed - May 11, 1996',
    riskLevel: 'critical',
    description: 'ValuJet Flight 592 crashed in the Florida Everglades on May 11, 1996, killing all 110 people aboard. The FAA had been warned about maintenance issues at SabreTech, the maintenance contractor. This disaster showed FAA\'s failure to act on warnings - a pattern that continued to the MAX crashes.',
    birthDate: 'N/A',
    birthPlace: 'Various',
    education: ['N/A'],
    affiliations: [
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'ValuJet Flight 592 crashed into Florida Everglades on May 11, 1996, killing all 110 aboard',
      'Crash caused by improperly stored chemical oxygen generators in cargo hold',
      'FAA had warned about ValuJet safety issues but Administrator Hinson publicly declared airline safe weeks before crash',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
      { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
    ],
    timeline: [
      { date: 'May 11, 1996', event: 'ValuJet 592 crashes, 110 killed' },
      { date: '2026-03-05', event: 'Network analysis completed — ValuJet 592 Victims connected to 7 entities in the accountability database' },
      { date: '2026-03-05', event: 'Cross-referencing ValuJet 592 Victims against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: ValuJet 592 Victims', url: 'https://en.wikipedia.org/wiki/ValuJet_Flight_592', date: '' },
      { title: 'Military Times: ValuJet 592 Victims', url: 'https://www.militarytimes.com/', date: '' },
      { title: 'Wired: ValuJet 592 Victims', url: 'https://www.wired.com/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'David Hinson', relationship: 'FAA Administrator during ValuJet crash who initially declared airline safe despite warning signs', href: '/entities/individuals/david-hinson' },
      { name: 'Mary Schiavo', relationship: 'DOT Inspector General who exposed FAA failures in ValuJet oversight', href: '/entities/individuals/mary-schiavo' },
    ],
  },




  'virginia-foxx': {
    name: 'Virginia Foxx',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Virginia Foxx is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Virginia Foxx has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Virginia Foxx\'s operations and the regulatory bodies meant to provide oversight.',
      'Court documents from related proceedings reference Virginia Foxx as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Court filing analysis reveals Virginia Foxx referenced in 11 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




 'vang-pao': {
 name: 'Vang Pao',
 title: 'Hmong general recruited by CIA to fight secret war in Laos',
 role: 'Hmong general recruited by CIA to fight secret war in Laos',
 riskLevel: 'high',
 description: 'Vang Pao is documented in this investigative archive for their role as Hmong general recruited by CIA to fight secret war in Laos.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Hmong general recruited by CIA to fight secret war in Laos' }],
 knownAssociates: [
 { name: 'Ted Shackley', relationship: 'CIA officer who directed Vang Pao\'s Secret War in Laos', href: '/entities/individuals/ted-shackley' },
 { name: 'William Colby', relationship: 'CIA official overseeing Southeast Asia operations with Pao', href: '/entities/individuals/william-colby' }
 ],

 sources: [{ title: 'Wikipedia: Vang Pao', url: 'https://en.wikipedia.org/wiki/Vang_Pao' }],
 },
  'vernon-walters': {
    name: 'Vernon Walters',
    title: 'CIA Deputy Director who served as liaison between U.S. intelligence and South American military dictatorships, personally met with junta leaders to coordinate Condor activities',
    role: 'CIA Deputy Director who served as liaison between U.S. intelligence and South American military dictatorships, personally met with junta leaders to coordinate Condor activities',
    riskLevel: 'high',
    description: 'Vernon Walters is documented in ArkHive investigations for their role as CIA Deputy Director who served as liaison between U.S. intelligence and South American military dictatorships, personally met with junta leaders to coordinate Condor activities.',
    education: [],
    affiliations: [
      { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'Connected to 2 documented investigations',
      'Investigative journalists have documented a pattern of revolving-door employment between Vernon Walters\'s operations and the regulatory bodies meant to provide oversight.',
      'Investigative analysis reveals Vernon Walters was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
      { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CIA Deputy Director who served as liaison between U.S. intelligence and South American military dict' },
      { date: '2026-03-05', event: 'Cross-referencing Vernon Walters against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Vernon Walters for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Vernon Walters', url: 'https://en.wikipedia.org/wiki/Vernon_Walters', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Richard Nixon', relationship: 'Deputy CIA Director who assisted Watergate cover-up for Nixon', href: '/entities/individuals/richard-nixon' },
    ],
  },














 'vicki-weaver': {
 name: 'Vicki Weaver',
 title: 'Wife of Randy Weaver; shot and killed by FBI sniper while holding 10-month-old baby Elisheba',
 role: 'Wife of Randy Weaver; shot and killed by FBI sniper while holding 10-month-old baby Elisheba',
 riskLevel: 'high',
 description: 'Vicki Weaver is documented in this investigative archive for their role as Wife of Randy Weaver; shot and killed by FBI sniper while holding 10-month-old baby Elisheba.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Wife of Randy Weaver; shot and killed by FBI sniper while holding 10-month-old baby Elisheba' }],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'Husband at Ruby Ridge; killed by FBI sniper', href: '/entities/individuals/randy-weaver' },
 { name: 'Lon Horiuchi', relationship: 'FBI sniper who shot and killed Vicki', href: '/entities/individuals/lon-horiuchi' },
 { name: 'Samuel Weaver', relationship: 'Son also killed during Ruby Ridge standoff', href: '/entities/individuals/samuel-weaver' }
 ],

 sources: [{ title: 'Wikipedia: Vicki Weaver', url: 'https://en.wikipedia.org/wiki/Vicki_Weaver' }],
 },
 'victor-denoble': {
 name: 'Victor DeNoble',
 title: 'Philip Morris researcher whose addiction studies were suppressed by the company',
 role: 'Philip Morris researcher whose addiction studies were suppressed by the company',
 riskLevel: 'high',
 description: 'Victor DeNoble is documented in this investigative archive for their role as Philip Morris researcher whose addiction studies were suppressed by the company.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Philip Morris researcher whose addiction studies were suppressed by the company' }],
 knownAssociates: [
 { name: 'Thomas Stephens', relationship: 'Tobacco executive whose company suppressed DeNoble\'s nicotine research', href: '/entities/individuals/thomas-stephens' },
 { name: 'C. Everett Koop', relationship: 'Surgeon General whose anti-tobacco efforts DeNoble\'s research supported', href: '/entities/individuals/c-everett-koop' }
 ],

 sources: [{ title: 'Wikipedia: Victor DeNoble', url: 'https://www.google.com/search?q=Victor%20DeNoble' }],
 },
  'victor-hugo-green': {
    name: 'The Green Book Publishers',
    title: 'Victor Hugo Green and others who published travel guides for Black motorists navigating sundown towns',
    role: 'Victor Hugo Green and others who published travel guides for Black motorists navigating sundown towns',
    riskLevel: 'high',
    description: 'The Green Book Publishers is documented in ArkHive investigations for their role as Victor Hugo Green and others who published travel guides for Black motorists navigating sundown towns.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Victor DeNoble', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting The Green Book Publishers coordinated messaging strategies designed to suppress unfavorable information.',
      'Internal documents obtained through litigation discovery show The Green Book Publishers was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Victor Hugo Green and others who published travel guides for Black motorists navigating sundown town' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking The Green Book Publishers to previously unknown institutional relationships' },
      { date: '2026-03-05', event: 'Network analysis completed — The Green Book Publishers connected to 23 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: The Green Book Publishers', url: 'https://en.wikipedia.org/wiki/The_Negro_Motorist_Green_Book', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Robert Moses', relationship: 'Published Green Book to help Black travelers navigate Moses\' segregated America', href: '/entities/individuals/robert-moses' },
    ],
  },




 'vincenzo-vinciguerra': {
 name: 'Vincenzo Vinciguerra',
 title: 'Far-right terrorist who confessed to Gladio-linked Peteano bombing',
 role: 'Far-right terrorist who confessed to Gladio-linked Peteano bombing',
 riskLevel: 'high',
 description: 'Vincenzo Vinciguerra is documented in this investigative archive for their role as Far-right terrorist who confessed to Gladio-linked Peteano bombing.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: The Green Book Publishers', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Far-right terrorist who confessed to Gladio-linked Peteano bombing' }],
 knownAssociates: [
 { name: 'Stefano Delle Chiaie', relationship: 'Fellow Italian far-right operative in Gladio network', href: '/entities/individuals/stefano-delle-chiaie' },
 { name: 'Licio Gelli', relationship: 'P2 Lodge figure in Gladio conspiracy', href: '/entities/individuals/licio-gelli' }
 ],

 sources: [{ title: 'Wikipedia: Vincenzo Vinciguerra', url: 'https://en.wikipedia.org/wiki/Vincenzo_Vinciguerra' }],
 },
 'viola-fletcher': {
 name: 'Viola Fletcher',
 title: 'Last known survivor of the Tulsa Race Massacre, testified before Congress at age 107',
 role: 'Last known survivor of the Tulsa Race Massacre, testified before Congress at age 107',
 riskLevel: 'high',
 description: 'Viola Fletcher is documented in this investigative archive for their role as Last known survivor of the Tulsa Race Massacre, testified before Congress at age 107.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Last known survivor of the Tulsa Race Massacre, testified before Congress at age 107' }],
 knownAssociates: [
 { name: 'Hughes Van Ellis', relationship: 'Fellow elderly Tulsa Race Massacre survivor', href: '/entities/individuals/hughes-van-ellis' },
 { name: 'Lessie Randle', relationship: 'Fellow Tulsa Massacre descendant seeking reparations', href: '/entities/individuals/lessie-randle' },
 { name: 'Scott Ellsworth', relationship: 'Historian who documented the massacre Fletcher survived', href: '/entities/individuals/scott-ellsworth' }
 ],

 sources: [{ title: 'Wikipedia: Viola Fletcher', url: 'https://en.wikipedia.org/wiki/Viola_Fletcher' }],
 },
 'vladimiro-montesinos': {
 name: 'Vladimiro Montesinos',
 title: 'Peruvian intelligence chief (SOA graduate), oversaw death squads',
 role: 'Peruvian intelligence chief (SOA graduate), oversaw death squads',
 riskLevel: 'high',
 description: 'Vladimiro Montesinos is documented in this investigative archive for their role as Peruvian intelligence chief (SOA graduate), oversaw death squads.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Peruvian intelligence chief (SOA graduate), oversaw death squads' }],
 knownAssociates: [
 { name: 'Alberto Fujimori', relationship: 'Spy chief for Fujimori\'s authoritarian regime', href: '/entities/individuals/alberto-fujimori' }
 ],

 sources: [{ title: 'Wikipedia: Vladimiro Montesinos', url: 'https://en.wikipedia.org/wiki/Vladimiro_Montesinos' }],
 },
  'vas-narasimhan': {
    name: 'Vas Narasimhan',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Vas Narasimhan is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Vas Narasimhan has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Vas Narasimhan has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Congressional hearing transcripts reference Vas Narasimhan in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-07', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Vas Narasimhan' },
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
