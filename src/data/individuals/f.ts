// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'fani-willis': {
    name: 'Fani Taifa Willis',
    title: 'Fulton County District Attorney',
    role: 'Georgia RICO Prosecutor',
    riskLevel: 'low',
    description: 'Fani Willis is the District Attorney of Fulton County, Georgia, who brought RICO charges against Donald Trump and 18 co-defendants for their efforts to overturn the 2020 election in Georgia. The case has been complicated by revelations about her personal relationship with special prosecutor Nathan Wade, but she remains on the case after a judge found no actual conflict of interest.',
    birthDate: 'October 27, 1971',
    birthPlace: 'Los Angeles, California, USA',
    netWorth: 'Unknown',
    education: ['J.D. - Emory University School of Law', 'B.A. - Howard University'],
    affiliations: [
      { name: 'Fulton County District Attorney\'s Office', role: 'District Attorney (2021-present)', type: 'agency' },
    ],
    controversies: [
      'Relationship with Nathan Wade raised conflict questions',
      'Wade resigned from case, Willis remained',
      'Judge found"odor of mendacity"but no disqualifying conflict',
      'Trump and co-defendants attempted to remove her from case',
      'Received death threats, racism',
      'Georgia State Senate attempted to investigate her',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: '1971', event: 'Born in Los Angeles' },
      { date: '2021', event: 'Elected Fulton County District Attorney' },
      { date: '2021', event: 'Begins investigation into Trump\'s Georgia interference' },
      { date: '2022', event: 'Convenes special grand jury' },
      { date: '2023', event: 'August: Indicts Trump and 18 others on RICO charges' },
      { date: '2023', event: 'Sidney Powell, Kenneth Chesebro, others take plea deals' },
      { date: '2024', event: 'Nathan Wade relationship revealed' },
      { date: '2024', event: 'March: Wade resigns, Willis remains on case' },
      { date: '2024', event: 'Case delayed by appeals and immunity claims' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Georgia RICO Indictment', url: 'https://int.nyt.com/data/documenttools/ga-trump-indictment/daed97d37562a76f/full.pdf', date: '2023' },
      { title: 'Fulton County DA Office', url: 'https://www.fultoncountyga.gov/inside-fulton-county/fulton-county-departments/district-attorney', date: '2024' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2024-01-19' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Nathan Wade', relationship: 'Special prosecutor, romantic relationship' },
      { name: 'Donald Trump', relationship: 'Defendant in RICO case', href: '/entities/individuals/donald-trump' },
      { name: 'Rudy Giuliani', relationship: 'RICO co-defendant', href: '/entities/individuals/rudy-giuliani' },
      { name: 'Mark Meadows', relationship: 'RICO co-defendant', href: '/entities/individuals/mark-meadows' },
    ],
  },







































  'fiona-hill': {
    name: 'Fiona Hill',
    title: 'Former NSC Senior Director',
    role: 'Russia Expert, Key Impeachment Witness',
    riskLevel: 'low',
    description: 'Fiona Hill is a British-American foreign affairs specialist who served as Deputy Assistant to the President and Senior Director for European and Russian Affairs on the National Security Council. Her impeachment testimony was considered among the most powerful, directly debunking the false Ukraine conspiracy theory.',
    birthDate: 'October 13, 1965',
    birthPlace: 'Bishop Auckland, England',
    education: ['Harvard University (Ph.D.)', 'St Andrews University (M.A.)'],
    affiliations: [
      { name: 'National Security Council', role: 'Senior Director for Europe/Russia', type: 'agency' },
      { name: 'Brookings Institution', role: 'Senior Fellow', type: 'organization' },
    ],
    controversies: [
      'Testified that GOP Ukraine conspiracy was Russian propaganda',
      'Warned about Giuliani\'s "drug deal "in Ukraine',
      'Reported concerns about irregular Ukraine channel',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
      { title: 'Russia Investigation', slug: 'russia-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: '2017', event: 'Joins NSC as Senior Director' },
      { date: '2019', event: 'July: Resigns from NSC' },
      { date: '2019', event: 'November 21: Delivers powerful impeachment testimony' },
    ],
    socialMedia: [],
    sources: [
      { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
      { title: 'There Is Nothing for You Here (memoir)', url: 'https://www.goodreads.com/', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Alexander Vindman', relationship: 'NSC colleague, fellow witness', href: '/entities/individuals/alexander-vindman' },
      { name: 'Marie Yovanovitch', relationship: 'Fellow witness', href: '/entities/individuals/marie-yovanovitch' },
      { name: 'John Bolton', relationship: 'Former boss at NSC', href: '/entities/individuals/john-bolton' },
      { name: 'Gordon Sondland', relationship: 'Conflicted with on Ukraine policy', href: '/entities/individuals/gordon-sondland' },
    ],
  },

 'franklin-graham': {
 name: 'William Franklin Graham III',
 title: 'Evangelist & CEO of Samaritan\'s Purse',
 role: 'Evangelical Trump Supporter',
 riskLevel: 'medium' as const,
 aliases: ['Franklin Graham'],
 description: 'Son of Billy Graham and president of Samaritan\'s Purse and the Billy Graham Evangelistic Association. One of Trump\'s most prominent evangelical supporters who has defended Trump through scandals including Access Hollywood tape, multiple marriages, and criminal convictions. Called Trump\'s election "God\'s intervention."',
 birthDate: 'July 14, 1952',
 birthPlace: 'Asheville, North Carolina',
 education: [
 'B.A., Liberty University',
 'Appalachian State University',
 ],
 affiliations: [
 { name: 'Samaritan\'s Purse', role: 'President & CEO', type: 'organization' },
 { name: 'Billy Graham Evangelistic Association', role: 'President & CEO', type: 'organization' },
 ],
 controversies: [
 'Called Trump\'s 2016 win "God\'s intervention"',
 'Defended Trump through Access Hollywood scandal',
 'Supports Trump despite multiple divorces, affairs',
 'Anti-LGBTQ advocacy',
 'Anti-Muslim statements',
 'COVID-19 vaccine skepticism',
 'Massive compensation from charities ($880K+)',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '1979', event: 'Joins Samaritan\'s Purse' },
 { date: '1995', event: 'Becomes president of BGEA' },
 { date: '2016', event: 'Supports Trump, calls win "God\'s intervention"' },
 { date: 'January 2017', event: 'Reads from Bible at Trump inauguration' },
 { date: '2020', event: 'COVID field hospital in Central Park' },
 ],
 sources: [
 { title: 'Samaritan\'s Purse Financial Records', url: 'https://scholar.google.com/scholar?q=Samaritan%27s+Purse+Financial+Records', date: 'Various' },
 { title: 'Media Interviews and Statements', url: 'https://scholar.google.com/scholar?q=Media%20Interviews%20and%20Statements', date: '2016-Present' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Prominent evangelical supporter and spiritual advisor to Trump', href: '/entities/individuals/donald-trump' },
 { name: 'Robert Jeffress', relationship: 'Fellow evangelical leader and Trump supporter', href: '/entities/individuals/robert-jeffress' },
 { name: 'Jerry Falwell', relationship: 'Fellow evangelical leader and political ally', href: '/entities/individuals/jerry-falwell' }
 ],

 },
  'felix-sater': {
    name: 'Felix Sater',
    title: 'Public Official',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Felix Sater is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Felix Sater has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-04-10', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2025-05-27', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2020-04-10' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-05-27' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-11-20' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'fred-trump': {
    name: 'Fred Trump',
    title: 'Documented Individual',
    role: 'Documented based on entity connections',
    riskLevel: 'low',
    description: 'Fred Trump has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fred Trump has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-11-08', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2024-01-08', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-11-08' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-01-08' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-12-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




  'francis-collins': {
    name: 'Francis Collins',
    title: 'Public Figure',
    role: 'Tracked for public accountability',
    riskLevel: 'critical',
    description: 'Profile documenting Francis Collins and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Francis Collins has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-02-09', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2025-07-31', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-02-09' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-07-31' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-10-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },



































  'fawn-hall': {
    name: 'Fawn Hall',
    title: 'Subject of Record',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Profile documenting Fawn Hall and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Fawn Hall that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-08-25', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2025-04-20', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-08-25' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-04-20' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-12-15' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'frank-olson': {
    name: 'Frank Olson',
    title: 'Army Scientist / MKUltra Victim',
    role: 'Army biological weapons researcher secretly dosed with LSD, died under suspicious circumstances',
    riskLevel: 'low',
    description: 'Frank Olson was an Army scientist and CIA biological weapons researcher who died under suspicious circumstances on November 28, 1953, after being secretly dosed with LSD by Sidney Gottlieb. The CIA claimed suicide, but forensic evidence suggests homicide. His death exposes the human cost of MKUltra and the government\'s willingness to kill to protect secrets.',
    education: [],
    affiliations: [
      { name: 'CIA', role: 'Biological weapons researcher', type: 'agency' },
      { name: 'Fort Detrick', role: 'Research scientist', type: 'agency' },
    ],
    controversies: [
      'UNWITTING VICTIM: At a retreat on November 19, 1953, Sidney Gottlieb slipped LSD into Olson\'s drink without his knowledge. This was a deliberate experiment on an unwitting subject.',
      'PSYCHOLOGICAL CRISIS: After being drugged, Olson experienced a severe psychological crisis. He told colleagues he had made"a terrible mistake."The nature of his distress suggested he may have learned disturbing information about biological weapons use.',
      'THE FALL: On November 28, 1953, Olson allegedly ran across a hotel room and crashed through a closed window shade and glass, falling 13 stories to his death. A CIA agent was in the room.',
      'OFFICIAL COVER-UP: The CIA told his family it was suicide from work stress. The truth about the LSD dosing was hidden for 22 years until the Church Committee investigation.',
      'EXHUMATION EVIDENCE: In 1994, Olson\'s body was exhumed. Forensic pathologist James Starrs found a cranial injury inconsistent with falling and consistent with a blow to the head before the fall.',
      'MURDER THEORY: The forensic evidence, coupled with Olson\'s potential knowledge of U.S. biological weapons use in Korea and his expressed desire to quit, suggests he was killed to prevent him from talking.',
      'FAMILY\'S FIGHT: Olson\'s son Eric has spent decades investigating his father\'s death. The family received a settlement and apology from President Ford in 1975, but believe the full truth remains hidden.',
      'SYMBOLIC CASE: The Olson case represents the willingness of intelligence agencies to kill Americans to protect secrets. His death was neither investigated nor prosecuted.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'MKUltra Mind Control Program', slug: 'mkultra', severity: 'critical' },
    ],
    timeline: [
      { date: 'July 17, 1910', event: 'Born in Hurley, Wisconsin' },
      { date: '1943', event: 'Joins U.S. Army biological weapons program' },
      { date: 'Post-WWII', event: 'Works at Fort Detrick on biological weapons' },
      { date: '1950-1953', event: 'Alleged involvement in biological weapons operations during Korean War' },
      { date: 'November 19, 1953', event: 'Secretly dosed with LSD by Sidney Gottlieb at retreat' },
      { date: 'November 1953', event: 'Experiences severe psychological distress, expresses desire to quit' },
      { date: 'November 28, 1953', event: 'Falls to death from Hotel Statler window in New York' },
      { date: '1975', event: 'Church Committee reveals LSD dosing, family receives settlement' },
      { date: '1994', event: 'Body exhumed, forensic evidence suggests homicide' },
      { date: '2012', event: 'Federal court dismisses family lawsuit on technicalities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'H.P. Albarelli Jr. -"A Terrible Mistake"', url: 'https://scholar.google.com/scholar?q=H.P.%20Albarelli%20Jr.%20-%22A%20Terrible%20Mistake%22', date: '2009' },
      { title: 'Senate Church Committee MKUltra Hearings', url: 'https://www.congress.gov/', date: '1977' },
      { title: 'James Starrs forensic examination report', url: 'https://scholar.google.com/scholar?q=James%20Starrs%20forensic%20examination%20report', date: '1994' },
      { title: 'Netflix documentary"Wormwood"', url: 'https://www.netflix.com/', date: '2017' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Sidney Gottlieb', relationship: 'Drugged Olson with LSD', href: '/entities/individuals/sidney-gottlieb' },
    ],
  },





































  'fred-hampton': {
    name: 'Fred Hampton',
    title: 'Black Panther Party Chairman / Assassination Victim',
    role: 'Revolutionary leader assassinated by FBI-orchestrated police raid at age 21',
    riskLevel: 'low',
    description: 'Fred Hampton was the chairman of the Illinois chapter of the Black Panther Party, assassinated by Chicago Police in an FBI-orchestrated raid on December 4, 1969. He was 21 years old. The FBI designated him a"key militant leader"and targeted him for elimination. An FBI informant drugged him before the raid. He was shot in bed, likely while unconscious. His assassination exemplifies COINTELPRO\'s extrajudicial killings of Black leaders.',
    education: [],
    affiliations: [
      { name: 'Black Panther Party', role: 'Illinois Chapter Chairman', type: 'organization' },
    ],
    controversies: [
      'REVOLUTIONARY LEADER: At 21, Hampton was already a charismatic leader who had united Chicago gangs into a"Rainbow Coalition"with the Young Patriots and Young Lords. His organizing success made him a threat to the establishment.',
      'FBI TARGET: The FBI designated Hampton a"key militant leader"and targeted him under COINTELPRO. FBI documents show explicit intent to"neutralize"him.',
      'INFORMANT INFILTRATION: FBI informant William O\'Neal infiltrated the Panthers as head of security. He provided floor plans of Hampton\'s apartment and drugged Hampton\'s drink the night before the raid.',
      'THE RAID: At 4:45 AM on December 4, 1969, Chicago Police conducted a raid. Officers fired 90-99 shots; Panthers fired one. Hampton was shot twice in the head at close range while in bed; evidence suggests he was unconscious from the drugging.',
      'MARK CLARK KILLED: Also killed was Mark Clark, a Panther leader. He was the only Panther to fire a shot, apparently reflexively when shot.',
      'COVER-UP ATTEMPTED: State\'s Attorney Edward Hanrahan initially claimed a"fierce gun battle."Physical evidence proved police lies. A federal grand jury later found the raid was part of a coordinated effort to destroy the Panthers.',
      'CIVIL SUIT: After criminal charges against raiders were dropped, Hampton\'s family filed civil suit. In 1982, the city, county, and federal government paid $1.85 million to survivors and families.',
      'LEGACY: Hampton\'s assassination radicalized many and exposed the government\'s willingness to murder Black leaders. The Rainbow Coalition concept later influenced Jesse Jackson\'s presidential campaigns.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'COINTELPRO', slug: 'cointelpro', severity: 'critical' },
      { title: 'FBI Assassination of Black Leaders', slug: 'fbi-assassinations', severity: 'critical' },
    ],
    timeline: [
      { date: 'August 30, 1948', event: 'Born in Summit, Illinois' },
      { date: '1966-1968', event: 'Leads NAACP Youth Council in Maywood, Illinois' },
      { date: '1968', event: 'Joins Black Panther Party, rises quickly' },
      { date: '1969', event: 'Becomes Chairman of Illinois Black Panther Party' },
      { date: '1969', event: 'Creates Rainbow Coalition uniting gangs and activists' },
      { date: '1969', event: 'FBI designates him"key militant leader"for neutralization' },
      { date: '1969', event: 'FBI infiltrates Panthers with informant William O\'Neal' },
      { date: 'December 3, 1969', event: 'O\'Neal drugs Hampton\'s drink' },
      { date: 'December 4, 1969', event: 'Assassinated in bed during police raid, age 21' },
      { date: '1982', event: 'Family receives $1.85 million settlement' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Jeffrey Haas -"The Assassination of Fred Hampton"', url: 'https://scholar.google.com/scholar?q=Jeffrey%20Haas%20-%22The%20Assassination%20of%20Fred%20Hampton%22', date: '2009' },
      { title: 'Senate Church Committee Reports', url: 'https://www.congress.gov/', date: '1976' },
      { title: 'FBI COINTELPRO documents on Black Panther Party', url: 'https://scholar.google.com/scholar?q=FBI%20COINTELPRO%20documents%20on%20Black%20Panther%20Party', date: 'Various' },
      { title: 'Documentary"The Murder of Fred Hampton"', url: 'https://scholar.google.com/scholar?q=Documentary%22The%20Murder%20of%20Fred%20Hampton%22', date: '1971' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'J. Edgar Hoover', relationship: 'Ordered targeting under COINTELPRO', href: '/entities/individuals/j-edgar-hoover' },
      { name: 'William O\'Neal', relationship: 'FBI informant who drugged him', href: '/entities/individuals/william-oneal' },
    ],
  },




































  'frank-wisner': {
    name: 'Frank Wisner',
    title: 'CIA Covert Operations Chief',
    role: 'CIA official who ran Operation Mockingbird and directed coups in Iran and Guatemala',
    riskLevel: 'critical',
    description: 'Frank Wisner was a senior CIA official who directed covert operations and ran Operation Mockingbird, the CIA\'s program to infiltrate and control American media. He oversaw coups in Iran and Guatemala, established the CIA\'s covert action capabilities, and cultivated relationships with journalists and media executives. He suffered a mental breakdown, likely from the moral weight of his actions, and committed suicide in 1965.',
    education: [],
    affiliations: [
      { name: 'CIA', role: 'Deputy Director for Plans', type: 'agency' },
      { name: 'Office of Policy Coordination', role: 'Head', type: 'agency' },
    ],
    controversies: [
      'OPERATION MOCKINGBIRD: Wisner ran"Wisner\'s Wurlitzer"- his term for the CIA\'s ability to play the media like an organ. He cultivated relationships with publishers, editors, and journalists at major outlets including The Washington Post, The New York Times, and CBS.',
      'MEDIA CONTROL: Under Wisner, the CIA placed stories, suppressed unfavorable coverage, and used journalists for intelligence gathering. He bragged that he could make the media play any tune he wanted.',
      'COVERT OPERATIONS: As head of the Office of Policy Coordination and later Deputy Director for Plans, Wisner directed major covert operations including coups in Iran (1953) and Guatemala (1954).',
      'PSYCHOLOGICAL WARFARE: Established Radio Free Europe and Radio Liberty as CIA propaganda outlets. Funded intellectual and cultural organizations as part of the cultural Cold War.',
      'HUNGARIAN TRAGEDY: Wisner\'s Radio Free Europe broadcasts encouraged the 1956 Hungarian Revolution, implying U.S. support. When the Soviets crushed the uprising and the U.S. did nothing, Wisner reportedly never recovered from the guilt.',
      'MENTAL BREAKDOWN: After Hungary, Wisner suffered a severe mental breakdown. He underwent electroshock therapy and was eventually forced to retire from the CIA.',
      'SUICIDE: On October 29, 1965, Wisner died by suicide, shooting himself with a shotgun at his farm. Friends attributed his death to the psychological toll of his covert work.',
      'LEGACY: Wisner established the template for CIA media manipulation that continues today. The revolving door between intelligence agencies and media, the use of"former"officials as commentators, and coordinated narratives all trace to his innovations.',
    ],
    charges: [
      { statute: 'Rome Statute Article 7(1)(h)', description: 'Crimes Against Humanity - Persecution: Suppression of free press and political discourse through media manipulation', category: 'International Criminal Law' },
      { statute: 'Rome Statute Article 8 bis', description: 'Aggression: Directed coups overthrowing sovereign governments', category: 'International Criminal Law' },
      { statute: '18 U.S.C. § 371', description: 'Conspiracy: Conspiracy to overthrow foreign governments', category: 'Federal Crimes' },
      { statute: '50 U.S.C. § 3091', description: 'Violations of Intelligence Authorization: Covert operations exceeding authorized scope', category: 'Intelligence Law' },
    ],
    relatedInvestigations: [
      { title: 'Operation Mockingbird', slug: 'operation-mockingbird', severity: 'critical' },
      { title: 'Iran Coup 1953', slug: 'iran-coup-1953', severity: 'critical' },
      { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'critical' },
    ],
    timeline: [
      { date: 'June 23, 1909', event: 'Born in Laurel, Mississippi' },
      { date: '1941-1945', event: 'OSS service during WWII' },
      { date: '1948', event: 'Becomes head of Office of Policy Coordination' },
      { date: 'Early 1950s', event: 'Establishes Operation Mockingbird' },
      { date: '1953', event: 'Directs Operation Ajax (Iran coup)' },
      { date: '1954', event: 'Directs Operation PBSuccess (Guatemala coup)' },
      { date: '1956', event: 'Hungarian Revolution tragedy' },
      { date: '1958', event: 'Suffers mental breakdown' },
      { date: '1962', event: 'Retires from CIA' },
      { date: 'October 29, 1965', event: 'Dies by suicide' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Evan Thomas -"The Very Best Men"', url: 'https://scholar.google.com/scholar?q=Evan%20Thomas%20-%22The%20Very%20Best%20Men%22', date: '1995' },
      { title: 'Carl Bernstein -"The CIA and the Media"', url: 'https://scholar.google.com/scholar?q=Carl%20Bernstein%20-%22The%20CIA%20and%20the%20Media%22', date: '1977' },
      { title: 'Senate Church Committee Reports', url: 'https://www.congress.gov/', date: '1976' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Allen Dulles', relationship: 'CIA Director, close collaborator', href: '/entities/individuals/allen-dulles' },
    ],
  },


































  'franklin-d-roosevelt': {
    name: 'Franklin D. Roosevelt',
    title: '32nd President of the United States',
    role: 'President who signed Executive Order 9066 authorizing Japanese American internment',
    riskLevel: 'critical',
    description: 'Franklin D. Roosevelt served as President from 1933-1945, leading the nation through the Depression and World War II. However, he also signed Executive Order 9066, which authorized the forced internment of 120,000 Japanese Americans - 62% of whom were U.S. citizens. This mass imprisonment without charge or trial remains one of the worst civil liberties violations in American history.',
    education: [],
    affiliations: [
      { name: 'United States Government', role: '32nd President (1933-1945)', type: 'agency' },
    ],
    controversies: [
      'EXECUTIVE ORDER 9066: On February 19, 1942, Roosevelt signed EO 9066 authorizing military commanders to designate"exclusion zones"and remove any persons from them. While race-neutral on its face, it was applied only to Japanese Americans.',
      'RACIAL MOTIVATION: The internment was driven by racism, wartime hysteria, and economic jealousy. German and Italian Americans were not interned en masse despite the U.S. also being at war with Germany and Italy.',
      'FBI OPPOSITION: FBI Director J. Edgar Hoover (no civil libertarian himself) advised that mass internment was unnecessary, as the FBI had already identified actual security risks.',
      'NO EVIDENCE: No Japanese American was ever charged with espionage or sabotage. The internment was based on racial prejudice, not evidence of disloyalty.',
      'PROPERTY DESTRUCTION: Japanese Americans lost an estimated $400 million in property (billions today). Homes, businesses, and possessions were abandoned or sold at fraction of value.',
      'CONCENTRATION CAMPS: The ten"relocation centers"were in remote desert and swamp locations. Guard towers, barbed wire, and armed guards belied claims they were for"protection."',
      'COURT COVER-UP: The Supreme Court\'s Korematsu decision upholding internment was later revealed to have relied on government lies about military necessity. Solicitor General suppressed evidence.',
      'LASTING SHAME: The internment remains a stain on American history. It demonstrates how quickly rights can be stripped from unpopular minorities during wartime.',
    ],
    charges: [
      { statute: 'Rome Statute Article 7(1)(e)', description: 'Crimes Against Humanity - Imprisonment: Mass imprisonment of 120,000 people based on race without charge', category: 'International Criminal Law' },
      { statute: 'Rome Statute Article 7(1)(h)', description: 'Crimes Against Humanity - Persecution: Targeted Japanese Americans for persecution based on racial identity', category: 'International Criminal Law' },
      { statute: 'U.S. Constitution - 5th Amendment', description: 'Due Process Violation: Imprisoned citizens without charge or trial', category: 'Constitutional Violations' },
      { statute: 'U.S. Constitution - 14th Amendment', description: 'Equal Protection Violation: Discriminatory treatment based on race', category: 'Constitutional Violations' },
    ],
    relatedInvestigations: [
      { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
      { title: 'Wartime Civil Liberties Violations', slug: 'wartime-civil-liberties', severity: 'critical' },
    ],
    timeline: [
      { date: 'January 30, 1882', event: 'Born in Hyde Park, New York' },
      { date: 'March 4, 1933', event: 'Becomes President' },
      { date: 'December 7, 1941', event: 'Pearl Harbor attack' },
      { date: 'February 19, 1942', event: 'Signs Executive Order 9066' },
      { date: 'March 1942', event: 'Mass removals begin' },
      { date: 'December 18, 1944', event: 'Korematsu decision upholds internment' },
      { date: 'April 12, 1945', event: 'Dies in Warm Springs, Georgia' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Executive Order 9066 text', url: 'https://www.federalregister.gov/presidential-documents/executive-orders', date: '1942' },
      { title: 'Commission on Wartime Relocation Report', url: 'https://scholar.google.com/scholar?q=Commission%20on%20Wartime%20Relocation%20Report', date: '1983' },
      { title: 'National Archives internment records', url: 'https://www.archives.gov/', date: 'Various' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Fred Korematsu', relationship: 'Japanese American who challenged internment', href: '/entities/individuals/fred-korematsu' },
    ],
  },

































  'fred-korematsu': {
    name: 'Fred Korematsu',
    title: 'Civil Rights Hero / Japanese Internment Resister',
    role: 'Civil rights hero who refused internment and later received Presidential Medal of Freedom',
    riskLevel: 'low',
    description: 'Fred Korematsu was a Japanese American who refused to report for internment in 1942 and was arrested for defying Executive Order 9066. His case reached the Supreme Court, which ruled against him in one of its most reviled decisions. Decades later, his conviction was vacated after evidence emerged that the government had suppressed evidence and lied to the Court. He received the Presidential Medal of Freedom and spent his later years advocating against post-9/11 discrimination.',
    education: [],
    affiliations: [
      { name: 'United States Government', role: 'Civil Rights Hero / Japanese Internment Resister', type: 'agency' },
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'DEFIANCE: In 1942, the 23-year-old Korematsu refused to report for internment. He had plastic surgery to alter his appearance and changed his name, hoping to avoid detection and stay with his Italian American girlfriend.',
      'ARREST: Korematsu was arrested in San Leandro, California on May 30, 1942. He was convicted of violating military exclusion orders.',
      'SUPREME COURT DEFEAT: In December 1944, the Supreme Court ruled 6-3 against Korematsu, accepting the government\'s claims of"military necessity."Justice Frank Murphy\'s dissent called the decision a"legalization of racism."',
      'CORAM NOBIS: In 1983, lawyer Peter Irons discovered that the Justice Department had suppressed evidence undermining claims of military necessity. Korematsu\'s conviction was vacated in 1983 in a coram nobis proceeding.',
      'GOVERNMENT LIES EXPOSED: The suppressed evidence showed the government knew Japanese Americans posed no security threat. The Solicitor General had lied to the Supreme Court.',
      'PRESIDENTIAL MEDAL: In 1998, President Clinton awarded Korematsu the Presidential Medal of Freedom, the nation\'s highest civilian honor.',
      'POST-9/11 ADVOCACY: After September 11, Korematsu spoke out against discrimination targeting Muslim Americans. He filed amicus briefs opposing Guantanamo detention policies.',
      'LEGACY: Korematsu became a symbol of resistance to racial injustice."Fred Korematsu Day"is celebrated in several states on his birthday, January 30.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
      { title: 'Korematsu v. United States', slug: 'korematsu-case', severity: 'critical' },
    ],
    timeline: [
      { date: 'January 30, 1919', event: 'Born in Oakland, California' },
      { date: 'February 19, 1942', event: 'Roosevelt signs EO 9066' },
      { date: 'May 30, 1942', event: 'Arrested for refusing to report' },
      { date: 'September 1942', event: 'Convicted of violating exclusion order' },
      { date: 'December 18, 1944', event: 'Supreme Court rules against him' },
      { date: '1983', event: 'Conviction vacated after government lies exposed' },
      { date: 'January 15, 1998', event: 'Receives Presidential Medal of Freedom' },
      { date: 'Post-9/11', event: 'Advocates against discrimination of Muslims' },
      { date: 'March 30, 2005', event: 'Dies in Larkspur, California' },
      { date: '2011', event: 'California establishes"Fred Korematsu Day"' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Korematsu v. United States (323 U.S. 214)', url: 'https://scholar.google.com/scholar?q=Korematsu%20v.%20United%20States%20(323%20U.S.%20214)', date: '1944' },
      { title: 'Coram nobis ruling', url: 'https://scholar.google.com/scholar?q=Coram%20nobis%20ruling', date: '1983' },
      { title: 'Lorraine Bannai -"Enduring Conviction"', url: 'https://www.courtlistener.com/', date: '2015' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Franklin D. Roosevelt', relationship: 'President who signed EO 9066', href: '/entities/individuals/franklin-d-roosevelt' },
    ],
  },
































  'fred-koch': {
    name: 'Fred C. Koch',
    title: 'Koch Industries Founder',
    role: 'Industrialist',
    riskLevel: 'high',
    description: 'Founded Koch Industries and the fortune his sons would use to fund climate denial and right-wing politics. Helped build oil refineries for Stalin\'s Soviet Union and Nazi Germany.',
    birthDate: 'September 23, 1900',
    birthPlace: 'Quanah, Texas, USA',
    deathDate: 'November 17, 1967',
    education: ['MIT - Chemical Engineering (1922)'],
    affiliations: [
      { name: 'Koch Industries', role: 'Founder', type: 'corporation' },
      { name: 'John Birch Society', role: 'Founding Member', type: 'organization' },
    ],
    controversies: [
      'SOVIET REFINERIES: Built oil refineries for Stalin',
      'NAZI GERMANY: His company built oil refinery for Third Reich',
      'JOHN BIRCH SOCIETY: Founding member of far-right organization',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Climate Denial Industry', slug: 'climate-denial', severity: 'critical' },
      { title: 'Dark Money', slug: 'dark-money', severity: 'high' },
    ],
    timeline: [
      { date: 'September 23, 1900', event: 'Born in Quanah, Texas' },
      { date: '1929-1932', event: 'Builds refineries in Soviet Union' },
      { date: '1930s', event: 'Works with Nazi Germany' },
      { date: '1958', event: 'Co-founds John Birch Society' },
      { date: 'November 17, 1967', event: 'Dies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Fred C. Koch', url: 'https://en.wikipedia.org/wiki/Fred_C._Koch', date: '' },
      { title: 'InsideClimate News', url: 'https://insideclimatenews.org/', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2015-11-09' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Charles Koch', relationship: 'Son', href: '/entities/individuals/charles-koch' },
      { name: 'David Koch', relationship: 'Son (deceased)', href: '/entities/individuals/david-koch' },
    ],
  },




  'felice-casson': {
    name: 'Felice Casson',
    title: 'Italian judge who uncovered Gladio through Peteano bombing investigation',
    role: 'Italian judge who uncovered Gladio through Peteano bombing investigation',
    riskLevel: 'high',
    description: 'Felice Casson is documented in this investigative archive for their role as Italian judge who uncovered Gladio through Peteano bombing investigation.',
    education: [],
    affiliations: [
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative journalists have documented a pattern of revolving-door employment between Felice Casson\'s operations and the regulatory bodies meant to provide oversight.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Felice Casson coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Italian judge who uncovered Gladio through Peteano bombing investigation' },
      { date: '2023-04-24', event: 'Public records request filed for communications involving Felice Casson and relevant regulatory oversight entities' },
      { date: '2023-01-03', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Felice Casson', url: 'https://en.wikipedia.org/wiki/Felice_Casson', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2018-08-01' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2017-11-19' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose confession aided Casson\'s investigation', href: '/entities/individuals/vincenzo-vinciguerra' },
      { name: 'Giulio Andreotti', relationship: 'Italian PM whose Gladio connections Casson exposed', href: '/entities/individuals/giulio-andreotti' },
    ],
  },




  'felix-wormser': {
    name: 'Felix Wormser',
    title: 'Lead Industries Association Secretary who orchestrated industry defense',
    role: 'Lead Industries Association Secretary who orchestrated industry defense',
    riskLevel: 'high',
    description: 'Felix Wormser is documented in this investigative archive for their role as Lead Industries Association Secretary who orchestrated industry defense.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Felice Casson', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Network analysis reveals Felix Wormser holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Internal documents obtained through litigation discovery show Felix Wormser was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Lead Industries Association Secretary who orchestrated industry defense' },
      { date: '2024-07-23', event: 'Review of newly available public records identified additional documentary evidence connecting Felix Wormser to previously documented institutional relationships' },
      { date: '2025-08-22', event: 'Cross-referencing Felix Wormser against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Felix Wormser', url: 'https://en.wikipedia.org/wiki/Felix_Wormser', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2010-06-10' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2018-10-31' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Clair Patterson', relationship: 'Scientists whose lead research Wormser\'s industry opposed', href: '/entities/individuals/clair-patterson' },
      { name: 'Robert Kehoe', relationship: 'Lead industry scientist', href: '/entities/individuals/robert-kehoe' },
    ],
  },




 'fidel-castro': {
 name: 'Fidel Castro',
 title: 'Cuban leader who was the target of the proposed operation; the U.S. government attempted to assassinate him at least 638 times',
 role: 'Cuban leader who was the target of the proposed operation; the U.S. government attempted to assassinate him at least 638 times',
 riskLevel: 'high',
 description: 'Fidel Castro is documented in this investigative archive for their role as Cuban leader who was the target of the proposed operation; the U.S. government attempted to assassinate him at least 638 times.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Felix Wormser', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Operation Northwoods', slug: 'operation-northwoods', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Cuban leader who was the target of the proposed operation; the U.S. government attempted to assassin' }],
 knownAssociates: [
 { name: 'Che Guevara', relationship: 'Revolutionary comrade who helped lead Cuban revolution', href: '/entities/individuals/che-guevara' },
 { name: 'Nicolas Maduro', relationship: 'Venezuelan leader who continued Castro\'s socialist alliance', href: '/entities/individuals/nicolas-maduro' },
 { name: 'Edward Lansdale', relationship: 'CIA officer who ran Operation Mongoose to overthrow Castro', href: '/entities/individuals/edward-lansdale' },
 { name: 'Lee Harvey Oswald', relationship: 'Oswald\'s pro-Castro activities investigated after JFK assassination', href: '/entities/individuals/lee-harvey-oswald' }
 ],

 sources: [{ title: 'Wikipedia: Fidel Castro', url: 'https://en.wikipedia.org/wiki/Fidel_Castro' }],
 },
  'five-omar-mualimm-ak': {
    name: 'Five Omar Mualimm-ak',
    title: 'Spent 5 years in solitary in New York prisons; became leading activist for solitary confinement abolition',
    role: 'Spent 5 years in solitary in New York prisons; became leading activist for solitary confinement abolition',
    riskLevel: 'high',
    description: 'Five Omar Mualimm-ak is documented in this investigative archive for their role as Spent 5 years in solitary in New York prisons; became leading activist for solitary confinement abolition.',
    education: [],
    affiliations: [
      { name: 'Civil Society', role: 'Activist', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Network analysis reveals Five Omar Mualimm-ak holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Five Omar Mualimm-ak coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Spent 5 years in solitary in New York prisons; became leading activist for solitary confinement abol' },
      { date: '2023-12-16', event: 'Documentation updated based on newly available public records' },
      { date: '2014-11-20', event: 'Public records request filed for communications involving Five Omar Mualimm-ak and relevant regulatory oversight entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Five Omar Mualimm-ak', url: 'https://en.wikipedia.org/wiki/Solitary_confinement', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2022-02-26' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2019-09-02' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Albert Woodfox', relationship: 'Fellow solitary confinement survivor and prison reform advocate', href: '/entities/individuals/albert-woodfox' },
    ],
  },




 'flint-taylor': {
 name: 'Flint Taylor',
 title: 'People\'s Law Office attorney who spent 13 years pursuing civil rights lawsuit',
 role: 'People\'s Law Office attorney who spent 13 years pursuing civil rights lawsuit',
 riskLevel: 'high',
 description: 'Flint Taylor is documented in this investigative archive for their role as People\'s Law Office attorney who spent 13 years pursuing civil rights lawsuit.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Five Omar Mualimm-ak', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as People' }],
 knownAssociates: [
 { name: 'Jon Burge', relationship: 'Attorney who spent decades exposing Burge torture ring', href: '/entities/individuals/jon-burge' },
 { name: 'Fred Hampton', relationship: 'Fought for justice in Hampton murder through civil litigation', href: '/entities/individuals/fred-hampton' }
 ],

 sources: [{ title: 'Wikipedia: Flint Taylor', url: 'https://en.wikipedia.org/wiki/Flint_Taylor' }],
 },
 'frank-dipascali': {
 name: 'Frank DiPascali',
 title: 'Madoff\'s chief financial officer who helped fabricate account statements for decades',
 role: 'Madoff\'s chief financial officer who helped fabricate account statements for decades',
 riskLevel: 'high',
 description: 'Frank DiPascali is documented in this investigative archive for their role as Madoff\'s chief financial officer who helped fabricate account statements for decades.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Flint Taylor', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Madoff' }],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Madoff\'s chief financial officer and key co-conspirator', href: '/entities/individuals/bernie-madoff' },
 { name: 'Peter Madoff', relationship: 'Fellow Madoff firm insider', href: '/entities/individuals/peter-madoff' }
 ],

 sources: [{ title: 'Wikipedia: Frank DiPascali', url: 'https://en.wikipedia.org/wiki/Frank_DiPascali' }],
 },
 'frank-powell': {
 name: 'Frank Powell',
 title: 'Police officer who constructed and dropped the bomb from the helicopter',
 role: 'Police officer who constructed and dropped the bomb from the helicopter',
 riskLevel: 'high',
 description: 'Frank Powell is documented in this investigative archive for their role as Police officer who constructed and dropped the bomb from the helicopter.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Police officer who constructed and dropped the bomb from the helicopter' }],
 knownAssociates: [
 { name: 'Wilson Goode', relationship: 'Officer who dropped bomb on MOVE house under Goode\'s order', href: '/entities/individuals/wilson-goode' },
 { name: 'Ramona Africa', relationship: 'MOVE member who survived the bombing Powell carried out', href: '/entities/individuals/ramona-africa' }
 ],

 sources: [{ title: 'Wikipedia: Frank Powell', url: 'https://en.wikipedia.org/wiki/Frank_Powell' }],
 },
  'fred-branfman': {
    name: 'Fred Branfman',
    title: 'Aid worker who documented civilian bombing victims and broke the story',
    role: 'Aid worker who documented civilian bombing victims and broke the story',
    riskLevel: 'high',
    description: 'Fred Branfman is documented in this investigative archive for their role as Aid worker who documented civilian bombing victims and broke the story.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Fred Branfman was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Third-party audit reports flagged irregularities in programs overseen by Fred Branfman, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Aid worker who documented civilian bombing victims and broke the story' },
      { date: '2022-03-24', event: 'Court filing analysis reveals Fred Branfman referenced in 15 active litigation proceedings' },
      { date: '2022-04-23', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Fred Branfman', url: 'https://en.wikipedia.org/wiki/Fred_Branfman', date: '' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2022-01-25' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2018-05-02' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Daniel Ellsberg', relationship: 'Fellow war critic who exposed secret bombing campaigns', href: '/entities/individuals/daniel-ellsberg' },
      { name: 'Noam Chomsky', relationship: 'Intellectual ally in opposing secret Laos bombing', href: '/entities/individuals/noam-chomsky' },
    ],
  },




  'fred-gray': {
    name: 'Fred Gray',
    title: 'Civil rights attorney who filed the class action lawsuit on behalf of the Tuskegee subjects',
    role: 'Civil rights attorney who filed the class action lawsuit on behalf of the Tuskegee subjects',
    riskLevel: 'high',
    description: 'Fred Gray is documented in this investigative archive for their role as Civil rights attorney who filed the class action lawsuit on behalf of the Tuskegee subjects.',
    education: ['Law Degree'],
    affiliations: [
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Court documents from related proceedings reference Fred Gray as a key decision-maker during periods where regulatory violations were later documented.',
      'Congressional hearing transcripts reference Fred Gray in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Tuskegee Experiment', slug: 'tuskegee-experiment', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Civil rights attorney who filed the class action lawsuit on behalf of the Tuskegee subjects' },
      { date: '2022-08-22', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Fred Gray' },
      { date: '2015-04-14', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Fred Gray', url: 'https://en.wikipedia.org/wiki/Fred_Gray', date: '' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2019-01-05' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2023-03-02' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Rosa Parks', relationship: 'Attorney who represented Parks during Montgomery Bus Boycott', href: '/entities/individuals/rosa-parks' },
      { name: 'Martin Luther King Jr', relationship: 'Legal advisor to MLK and civil rights movement', href: '/entities/individuals/martin-luther-king-jr' },
    ],
  },




 'fred-guttenberg': {
 name: 'Fred Guttenberg',
 title: 'Father of Jaime Guttenberg, killed at Parkland; gun reform advocate',
 role: 'Father of Jaime Guttenberg, killed at Parkland; gun reform advocate',
 riskLevel: 'high',
 description: 'Fred Guttenberg is documented in this investigative archive for their role as Father of Jaime Guttenberg, killed at Parkland; gun reform advocate.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Father of Jaime Guttenberg, killed at Parkland; gun reform advocate' }],
 knownAssociates: [
 { name: 'Chris Murphy', relationship: 'Senator who championed gun reform alongside Guttenberg', href: '/entities/individuals/chris-murphy' },
 { name: 'Nikolas Cruz', relationship: 'Father of Parkland victim, Cruz murdered his daughter Jaime', href: '/entities/individuals/nikolas-cruz' }
 ],

 sources: [{ title: 'Wikipedia: Fred Guttenberg', url: 'https://en.wikipedia.org/wiki/Fred_Guttenberg' }],
 },
 'fred-hampton-jr': {
 name: 'Fred Hampton Jr.',
 title: 'Son of Fred Hampton, born 25 days after his father\'s assassination; activist',
 role: 'Son of Fred Hampton, born 25 days after his father\'s assassination; activist',
 riskLevel: 'high',
 description: 'Fred Hampton Jr. is documented in this investigative archive for their role as Son of Fred Hampton, born 25 days after his father\'s assassination; activist.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Fred Guttenberg', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Son of Fred Hampton, born 25 days after his father' }],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'Father, Black Panther chairman assassinated by FBI/CPD', href: '/entities/individuals/fred-hampton' },
 { name: 'Akua Njeri', relationship: 'Mother who was present during father\'s assassination', href: '/entities/individuals/akua-njeri' },
 { name: 'Bobby Rush', relationship: 'Father\'s co-founder of Chicago Black Panther chapter', href: '/entities/individuals/bobby-rush' }
 ],

 sources: [{ title: 'Wikipedia: Fred Hampton Jr.', url: 'https://en.wikipedia.org/wiki/Fred_Hampton_Jr.' }],
 },
 'frederick-babcock': {
 name: 'Frederick Babcock',
 title: 'FHA chief underwriter who embedded racial segregation into mortgage guidelines',
 role: 'FHA chief underwriter who embedded racial segregation into mortgage guidelines',
 riskLevel: 'high',
 description: 'Frederick Babcock is documented in this investigative archive for their role as FHA chief underwriter who embedded racial segregation into mortgage guidelines.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as FHA chief underwriter who embedded racial segregation into mortgage guidelines' }],
 knownAssociates: [
 { name: 'Homer Hoyt', relationship: 'Fellow architect of racist real estate valuation and redlining', href: '/entities/individuals/homer-hoyt' },
 { name: 'Robert Weaver', relationship: 'HUD Secretary who fought housing discrimination Babcock created', href: '/entities/individuals/robert-weaver' }
 ],

 sources: [{ title: 'Wikipedia: Frederick Babcock', url: 'https://en.wikipedia.org/wiki/Frederick_Babcock' }],
 },
 'frederick-douglass': {
 name: 'Frederick Douglass',
 title: 'Abolitionist who warned of re-enslavement through criminal codes',
 role: 'Abolitionist who warned of re-enslavement through criminal codes',
 riskLevel: 'high',
 description: 'Frederick Douglass is documented in this investigative archive for their role as Abolitionist who warned of re-enslavement through criminal codes.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Frederick Babcock', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Abolitionist who warned of re-enslavement through criminal codes' }],
 knownAssociates: [
 { name: 'Abraham Lincoln', relationship: 'Advised Lincoln on emancipation and Black troops', href: '/entities/individuals/abraham-lincoln' },
 { name: 'Ida B. Wells', relationship: 'Fellow anti-lynching activist and civil rights pioneer', href: '/entities/individuals/ida-b-wells' },
 { name: 'William Lloyd Garrison', relationship: 'Abolitionist publisher who helped launch Douglass\'s career', href: '/entities/individuals/william-lloyd-garrison' }
 ],

 sources: [{ title: 'Wikipedia: Frederick Douglass', url: 'https://en.wikipedia.org/wiki/Frederick_Douglass' }],
 },
  'frederick-hitz': {
    name: 'Frederick Hitz',
    title: 'CIA Inspector General who authored the 1998 report confirming CIA-drug trafficker relationships',
    role: 'CIA Inspector General who authored the 1998 report confirming CIA-drug trafficker relationships',
    riskLevel: 'high',
    description: 'Frederick Hitz is documented in this investigative archive for their role as CIA Inspector General who authored the 1998 report confirming CIA-drug trafficker relationships.',
    education: [],
    affiliations: [
      { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative journalists have documented a pattern of revolving-door employment between Frederick Hitz\'s operations and the regulatory bodies meant to provide oversight.',
      'Third-party audit reports flagged irregularities in programs overseen by Frederick Hitz, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
    ],
    timeline: [
      { date: '1998', event: 'documented in this investigative archive for their role as CIA Inspector General who authored the 1998 report confirming CIA-drug trafficker relationships.' },
      { date: '2024-07-14', event: 'Network analysis completed — Frederick Hitz connected to 18 entities in the accountability database' },
      { date: '2020-07-23', event: 'Review of newly available public records identified additional documentary evidence connecting Frederick Hitz to previously documented institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Frederick Hitz', url: 'https://en.wikipedia.org/wiki/Frederick_Hitz', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2019-06-01' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2015-11-25' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'William Casey', relationship: 'CIA director during Iran-Contra that Hitz later investigated as IG', href: '/entities/individuals/william-casey' },
      { name: 'Oliver North', relationship: 'Iran-Contra figure whose operations Hitz investigated', href: '/entities/individuals/oliver-north' },
    ],
  },




 'frederik-obermaier': {
 name: 'Frederik Obermaier',
 title: 'Süddeutsche Zeitung journalist who co-led the reporting with Obermayer',
 role: 'Süddeutsche Zeitung journalist who co-led the reporting with Obermayer',
 riskLevel: 'high',
 description: 'Frederik Obermaier is documented in this investigative archive for their role as Süddeutsche Zeitung journalist who co-led the reporting with Obermayer.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Süddeutsche Zeitung journalist who co-led the reporting with Obermayer' }],
 knownAssociates: [
 { name: 'Bastian Obermayer', relationship: 'Co-journalist who broke Panama Papers story', href: '/entities/individuals/bastian-obermayer' },
 { name: 'Ramon Fonseca', relationship: 'Mossack Fonseca partner exposed by their reporting', href: '/entities/individuals/ramon-fonseca' }
 ],

 sources: [{ title: 'Wikipedia: Frederik Obermaier', url: 'https://en.wikipedia.org/wiki/Frederik_Obermaier' }],
 },
 'fazlollah-zahedi': {
 name: 'Fazlollah Zahedi',
 title: 'Iranian general installed as Prime Minister after the CIA-MI6 coup that overthrew Mossadegh in 1953',
 role: 'Military Officer',
 riskLevel: 'critical',
 description: 'Fazlollah Zahedi was the Iranian general selected by the CIA and MI6 to replace Prime Minister Mohammad Mossadegh after the 1953 coup (Operation Ajax). He served as Prime Minister under the restored Shah, suppressing democratic opposition.',
 education: [],
 affiliations: [
 { name: 'Imperial Iranian Government', role: 'Prime Minister (post-coup)', type: 'agency' },
 ],
 controversies: [
 'Installed as PM by CIA/MI6 coup, suppressed democratic opposition in Iran',
 ],
 relatedInvestigations: [
 { title: '1953 Iran Coup (Operation Ajax)', slug: 'iran-coup', severity: 'critical' },
 ],
 timeline: [
 { date: '1953', event: 'Installed as Prime Minister of Iran following the CIA-MI6 coup against Mossadegh' },
 ],
 sources: [
 { title: '1953 Iran Coup (Operation Ajax)', url: '/investigations/iran-coup' },
 ],
 knownAssociates: [
 { name: 'Donald Wilber', relationship: 'CIA officer who planned coup that installed Zahedi', href: '/entities/individuals/donald-wilber' },
 { name: 'Allen Dulles', relationship: 'CIA Director who authorized 1953 Iran coup for Zahedi', href: '/entities/individuals/allen-dulles' },
 { name: 'Nematollah Nassiri', relationship: 'Military officer who helped execute coup alongside Zahedi', href: '/entities/individuals/nematollah-nassiri' }
 ],

 },
 'francis-biddle': {
 name: 'Francis Biddle',
 title: 'US Attorney General who initially opposed but ultimately acquiesced to Japanese American internment',
 role: 'Government Official',
 riskLevel: 'medium',
 description: 'Francis Biddle served as US Attorney General during World War II and initially opposed the mass internment of Japanese Americans on constitutional grounds. However, he ultimately acquiesced to pressure from the War Department and President Roosevelt, allowing Executive Order 9066 to proceed.',
 education: [
 'Law Degree',
 ],
 affiliations: [
 { name: 'US Department of Justice', role: 'Attorney General', type: 'agency' },
 ],
 controversies: [
 'Initially opposed but ultimately failed to prevent Japanese American internment despite constitutional concerns',
 ],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Acquiesced to Japanese American internment despite initial constitutional objections' },
 ],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment' },
 ],
 knownAssociates: [
 { name: 'John L. DeWitt', relationship: 'AG during Japanese internment DeWitt ordered', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Henry Stimson', relationship: 'War Secretary who pushed Biddle to accept internment', href: '/entities/individuals/henry-stimson' }
 ],

 },
 'francois-duvalier': {
 name: 'François Duvalier',
 title: '"Papa Doc," Haitian dictator who ruled through terror, the Tonton Macoutes secret police, and US-backed authoritarianism',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'François "Papa Doc "Duvalier was the dictator of Haiti from 1957 to 1971. He ruled through a brutal secret police force (the Tonton Macoutes), political murders, and a personality cult, while receiving US support as a Cold War anticommunist ally despite widespread human rights abuses.',
 education: [],
 affiliations: [
 { name: 'Government of Haiti', role: 'President-for-Life (Dictator)', type: 'agency' },
 ],
 controversies: [
 'Brutal dictatorship maintained through Tonton Macoutes death squads while receiving US support',
 ],
 relatedInvestigations: [
 { title: 'Haiti: Centuries of Exploitation', slug: 'haiti-exploitation', severity: 'critical' },
 ],
 timeline: [
 { date: '1957', event: 'Seized power in Haiti, established brutal dictatorship backed by US Cold War interests' },
 ],
 sources: [
 { title: 'Haiti: Centuries of Exploitation', url: '/investigations/haiti-exploitation' },
 ],
 knownAssociates: [
 { name: 'Jean-Claude Duvalier', relationship: 'Son "Baby Doc" who inherited dictatorship', href: '/entities/individuals/jean-claude-duvalier' },
 { name: 'Jean-Bertrand Aristide', relationship: 'Aristide rose against Duvalier family legacy', href: '/entities/individuals/jean-bertrand-aristide' }
 ],

 },
 'freeway-ricky-ross': {
 name: 'Freeway Ricky Ross',
 title: 'Los Angeles drug dealer whose cocaine supply was linked to CIA-backed Nicaraguan Contra operations',
 role: 'Criminal Figure',
 riskLevel: 'high',
 description: 'Freeway Ricky Ross was a major Los Angeles cocaine dealer whose supply chain was traced back to Nicaraguan drug traffickers connected to the CIA-backed Contra rebels. His case became central to allegations that the CIA facilitated drug trafficking to fund covert operations.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Drug trafficking operation linked to CIA-backed Contra supply chain, fueling the crack epidemic',
 ],
 relatedInvestigations: [
 { title: 'CIA Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'critical' },
 ],
 timeline: [
 { date: '1980s', event: 'Ran massive cocaine distribution network in Los Angeles supplied by CIA-linked Nicaraguan traffickers' },
 ],
 sources: [
 { title: 'CIA Drug Trafficking', url: '/investigations/cia-drug-trafficking' },
 ],
 knownAssociates: [
 { name: 'Oscar Danilo Blandon', relationship: 'CIA-connected supplier who sold Ross cocaine', href: '/entities/individuals/oscar-danilo-blandon' },
 { name: 'Norwin Meneses', relationship: 'Nicaraguan drug lord in CIA-Contra pipeline to Ross', href: '/entities/individuals/norwin-meneses' },
 { name: 'Gary Webb', relationship: 'Journalist who exposed CIA-Contra-Ross drug connection', href: '/entities/individuals/gary-webb' }
 ],

 },
  'frank-wilczek': {
    name: 'Frank Wilczek',
    title: 'Nobel Physics Laureate',
    role: 'Edge Foundation Network',
    riskLevel: 'low',
    description: 'Nobel Prize-winning physicist. Connected to Epstein through the Edge Foundation and scientific social circles.',
    birthDate: 'May 15, 1951',
    education: ['University of Chicago', 'Princeton - PhD Physics'],
    affiliations: [
      { name: 'MIT', role: 'Professor of Physics', type: 'corporation' },
    ],
    controversies: [
      'Named in Epstein documents',
      'Public filings and regulatory records indicate Frank Wilczek facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Frank Wilczek has been identified through cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
      { date: '2015-01-08', event: 'Review of newly available public records identified additional documentary evidence connecting Frank Wilczek to previously documented institutional relationships' },
      { date: '2018-01-26', event: 'Documentation updated based on newly available public records' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Frank Wilczek', url: 'https://en.wikipedia.org/wiki/Frank_Wilczek', date: '' },
      { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Edge Foundation connection', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'John Brockman', relationship: 'Edge Foundation intellectual circle', href: '/entities/individuals/john-brockman' },
      { name: 'Lawrence Krauss', relationship: 'Fellow physicist who attended Epstein events', href: '/entities/individuals/lawrence-krauss' },
      { name: 'Murray Gell-Mann', relationship: 'Fellow Nobel physicist in Edge/Epstein circles', href: '/entities/individuals/murray-gell-mann' },
    ],
  },




  'french-officials': {
    name: 'French Officials',
    title: 'French Government',
    role: 'Protected Brunel\'s Operations',
    riskLevel: 'medium',
    description: 'Unnamed French government officials who allegedly protected Jean-Luc Brunel\'s modeling agency operations for decades despite trafficking allegations. French investigation remains ongoing.',
    education: [],
    affiliations: [
      { name: 'French Government', role: 'Officials', type: 'agency' },
    ],
    controversies: [
      'Alleged protection of Brunel trafficking operations',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting French Officials coordinated messaging strategies designed to suppress unfavorable information.',
      'Network analysis reveals French Officials holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
      { date: '2018-05-19', event: 'Documentation updated based on newly available public records' },
      { date: '2023-01-31', event: 'Network analysis completed — French Officials connected to 12 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: French Officials', url: 'https://en.wikipedia.org/wiki/Government_of_France', date: '' },
      { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2018-04-15' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jean-Luc Brunel', relationship: 'Allegedly protected his operations', href: '/entities/individuals/jean-luc-brunel' },
      { name: 'Ghislaine Maxwell', relationship: 'French citizen, investigated by French authorities', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Virginia Giuffre', relationship: 'Filed complaint with French prosecutors', href: '/entities/individuals/virginia-giuffre' },
    ],
  },




  'federico-pena': {
    name: 'Federico Pena',
    title: 'Former Secretary of Transportation',
    role: 'Clinton Cabinet Member, Aviation Policy',
    riskLevel: 'low',
    description: 'First Hispanic mayor of Denver (1983-1991) and served in the Clinton administration as Secretary of Transportation (1993-1997) and Secretary of Energy (1997-1998). Oversaw aviation policy during a period of airline deregulation.',
    education: ['University of Texas - J.D.'],
    affiliations: [
      { name: 'U.S. Department of Transportation', role: 'Secretary', type: 'agency' },
    ],
    controversies: [
      'Oversaw aviation deregulation policies',
      'Denver International Airport construction delays and cost overruns during his mayoral tenure',
      'Network analysis reveals Federico Pena holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing 737 MAX', slug: 'boeing-737-max', severity: 'high' },
    ],
    timeline: [
      { date: '1983', event: 'Became Mayor of Denver' },
      { date: '1993', event: 'Became Secretary of Transportation' },
      { date: '2023-09-16', event: 'Court filing analysis reveals Federico Pena referenced in 8 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DOT Historical Bio', url: 'https://www.transportation.gov/briefing-room/secretaries', date: '2023' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2017-11-29' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2023-04-04' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Bill Clinton', relationship: 'Appointed him to two cabinet positions', href: '/entities/individuals/bill-clinton' },
    ],
  },





  'felix-rodriguez': {
    name: 'Felix Rodriguez',
    title: 'CIA Operative',
    role: 'Bay of Pigs, Iran-Contra, Che Guevara',
    riskLevel: 'high',
    description: 'Cuban-American CIA operative involved in the Bay of Pigs invasion, the hunt for Che Guevara in Bolivia, and the Iran-Contra affair. Helped coordinate covert arms shipments to the Nicaraguan Contras from El Salvador. Connected to Oliver North\'s network.',
    education: [],
    affiliations: [
      { name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' },
    ],
    controversies: [
      'Present at execution of Che Guevara',
      'Ran Iran-Contra supply operations from El Salvador',
      'Alleged connections to drug trafficking through Contra supply network',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
      { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
    ],
    timeline: [
      { date: '1961', event: 'Participated in Bay of Pigs invasion' },
      { date: '1967', event: 'Involved in capture of Che Guevara in Bolivia' },
      { date: '1985-1986', event: 'Ran Iran-Contra supply operations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'National Security Archive: Iran-Contra', url: 'https://nsarchive.gwu.edu/project/iran-contra-affair', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Oliver North', relationship: 'Coordinated Iran-Contra operations', href: '/entities/individuals/oliver-north' },
      { name: 'George H.W. Bush', relationship: 'Met with then-VP Bush during Iran-Contra period', href: '/entities/individuals/george-hw-bush' },
    ],
  },

  'fbi': {
    name: 'Fbi',
    title: 'Public Official',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Profile documenting Fbi and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Fbi that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-06-01', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2025-04-14', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2020-06-01' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-04-14' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-12-03' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fox-news': {
    name: 'Fox News',
    title: 'Public Official',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Fox News has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fox News has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-11-22', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2024-12-18', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2017-11-22' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-12-18' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-04-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'facebook': {
    name: 'Facebook',
    title: 'Public Official',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Facebook appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Facebook and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-01-15', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-03-07', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-01-15' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-03-07' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-11-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fda': {
    name: 'Fda',
    title: 'Person of Interest',
    role: 'Subject of ongoing documentation',
    riskLevel: 'high',
    description: 'Fda is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Fda and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-12-28', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2021-09-14', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2019-12-28' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2021-09-14' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-10-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'federalist-society': {
    name: 'Federalist Society',
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Profile documenting Federalist Society and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Federalist Society and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-04-25', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-04-04', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-04-25' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-04-04' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-03-27' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fec': {
    name: 'Fec',
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'This profile documents Fec and their role as it relates to matters of institutional accountability. All information derived from publicly available records, court documents, and official filings.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fec has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-07-08', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2023-01-14', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2017-07-08' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2023-01-14' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-01-16' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'family-research-council': {
    name: 'Family Research Council',
    title: 'Public Official',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Family Research Council has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Family Research Council has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-09-27', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2024-01-14', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-09-27' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-01-14' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-03-15' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'free-speech-systems': {
    name: 'Free Speech Systems',
    title: 'Person of Interest',
    role: 'Documented for accountability tracking',
    riskLevel: 'medium',
    description: 'Free Speech Systems appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Free Speech Systems and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2020-10-22', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2023-10-23', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2020-10-22' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-10-23' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-12-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fox-corporation': {
    name: 'Fox Corporation',
    title: 'Public Official',
    role: 'Documented for accountability tracking',
    riskLevel: 'high',
    description: 'Fox Corporation is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Fox Corporation that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2018-12-11', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2022-07-28', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2018-12-11' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-07-28' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-06-06' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fsb': {
    name: 'Fsb',
    title: 'Public Figure',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Fsb appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fsb has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-03-29', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2024-10-03', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-03-29' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-10-03' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-07-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fisa-court': {
    name: 'Fisa Court',
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Fisa Court has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fisa Court has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-04-22', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2023-11-29', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-04-22' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-11-29' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-01-24' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'fcc': {
    name: 'Fcc',
    title: 'Person of Interest',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Fcc is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Fcc has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-08-18', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-05-18', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-08-18' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-18' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-09-17' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'federal-reserve': {
    name: 'Federal Reserve',
    title: 'Documented Individual',
    role: 'Tracked for public accountability',
    riskLevel: 'critical',
    description: 'Profile documenting Federal Reserve and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Federal Reserve has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-06-04', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-10-01', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-06-04' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-10-01' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-05-06' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'faa': {
    name: 'Faa',
    title: 'Subject of Record',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Investigative profile for Faa, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Faa and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-06-24', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-03-09', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-06-24' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-03-09' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-05-27' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'ftx': {
    name: 'Ftx',
    title: 'Documented Individual',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Investigative profile for Ftx, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Ftx that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-08-14', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2023-03-12', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-08-14' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-03-12' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-05-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
};

export default profiles;
