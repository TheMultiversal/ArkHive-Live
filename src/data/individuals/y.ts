// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'yevgeny-vindman': {
 name: 'Yevgeny Vindman',
 title: 'Former NSC Attorney',
 role: 'Ukraine Impeachment Witness Support',
 riskLevel: 'low' as const,
 description: 'Twin brother of Alexander Vindman who served as an attorney on the National Security Council. Yevgeny was reassigned from the NSC alongside his brother in retaliation for Alexander\'s testimony during the first Trump impeachment. Both brothers retired from the Army after experiencing what they described as career retaliation. Yevgeny ran for Congress in Virginia in 2024.',
 education: [
 'Villanova University School of Law (J.D.)',
 'State University of New York at Binghamton (B.A.)',
 ],
 affiliations: [
 { name: 'National Security Council', role: 'Attorney (Former)', type: 'agency' },
 { name: 'U.S. Army', role: 'Lieutenant Colonel (Ret.)', type: 'agency' },
 { name: 'Democratic Party', role: 'Congressional Candidate', type: 'organization' },
 ],
 controversies: [
 'Reassigned from NSC in retaliation for brother\'s testimony',
 'Filed whistleblower complaint about retaliation',
 'Retired from Army citing hostile treatment',
 'Ran for Congress in Virginia 7th District',
 'Outspoken about Trump administration corruption',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Serves as NSC attorney during Ukraine scandal' },
 { date: 'February 2020', event: 'Reassigned from NSC alongside brother' },
 { date: '2020', event: 'Files whistleblower retaliation complaint' },
 { date: '2021', event: 'Retires from U.S. Army' },
 { date: '2024', event: 'Runs for Congress in Virginia' },
 ],
 sources: [
 { title: 'Whistleblower Complaint', url: 'https://whistleblowernetwork.org/', date: '2020' },
 { title: 'Army Retirement Records', url: 'https://scholar.google.com/scholar?q=Army%20Retirement%20Records', date: '2021' },
 ],
 knownAssociates: [
 { name: 'Alexander Vindman', relationship: 'Twin brother and fellow NSC official who testified at Trump impeachment', href: '/entities/individuals/alexander-vindman' },
 { name: 'Donald Trump', relationship: 'Reassigned from NSC after brother testified against Trump', href: '/entities/individuals/donald-trump' }
 ],

 },
 'yusef-salaam': {
 name: 'Yusef Salaam',
 title: 'Exoneree, NYC Council Member',
 role: 'Central Park Five Victim, Elected Official',
 riskLevel: 'low' as const,
 description: 'Yusef Salaam was 15 years old when he was wrongfully convicted in the 1989 Central Park jogger case. He served nearly 7 years in prison before being exonerated in 2002. Despite the exoneration, Donald Trump has never apologized for his full-page ads calling for their execution. In 2023, Salaam was elected to the New York City Council from Harlem.',
 birthDate: 'February 27, 1974',
 birthPlace: 'New York City, New York',
 education: [],
 affiliations: [
 { name: 'New York City Council', role: 'Council Member (2024-present)', type: 'agency' },
 { name: 'Innocence Project', role: 'Advocate', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Korey Wise', relationship: 'Fellow exoneree, Central Park Five', href: '/entities/individuals/korey-wise' },
 ],
 controversies: [
 'Wrongfully convicted at age 15 in the Central Park Five case; spent nearly 7 years in prison',
 'Elected to New York City Council in 2023 representing Harlem district',
 'Donald Trump still refused to apologize for his full-page death penalty ads targeting the Central Park Five',
 ],
 charges: [
 { statute: 'Assault, Robbery', description: 'Wrongfully convicted 1990, exonerated 2002', category: 'Exonerated' },
 ],
 relatedInvestigations: [
 { title: 'Sexual Assault Allegations', slug: 'sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 1989', event: 'Wrongfully arrested at age 15' },
 { date: '1990', event: 'Convicted and sentenced to 5-10 years' },
 { date: '1997', event: 'Released from prison' },
 { date: '2002', event: 'Exonerated after real perpetrator confesses' },
 { date: '2014', event: 'Receives settlement from NYC' },
 { date: '2023', event: 'Elected to NYC Council from Harlem' },
 ],
 sources: [
 { title: 'Innocence Project Records', url: 'https://scholar.google.com/scholar?q=Innocence%20Project%20Records', date: '2002' },
 { title: 'NYC Council Records', url: 'https://scholar.google.com/scholar?q=NYC%20Council%20Records', date: '2023' },
 ],
 },
  'yevgeny-prigozhin': {
    name: 'Yevgeny Viktorovich Prigozhin',
    title: 'Wagner Group Founder (Deceased)',
    role: 'Russian Oligarch, Mercenary Army Chief, Troll Farm Operator',
    riskLevel: 'critical',
    description: 'Yevgeny Prigozhin was a Russian oligarch known as"Putin\'s Chef"who founded the Wagner Group private military company and the Internet Research Agency (IRA) troll farm that interfered in the 2016 US election. Wagner mercenaries committed war crimes across Africa, Syria, and Ukraine, while his IRA conducted sophisticated disinformation campaigns targeting American democracy. In June 2023, Prigozhin led a brief mutiny against Russian military leadership before dying in a plane crash in August 2023 under highly suspicious circumstances, widely believed to be ordered by Putin as retaliation for the rebellion.',
    birthDate: 'June 1, 1961',
    birthPlace: 'Leningrad, Soviet Union (now St. Petersburg, Russia)',
    deathDate: 'August 23, 2023',
    netWorth: '$1+ billion (at death)',
    education: ['No formal higher education', 'Criminal conviction in Soviet era'],
    affiliations: [
      { name: 'Wagner Group', role: 'Founder & Financier', type: 'organization' },
      { name: 'Internet Research Agency', role: 'Founder & Funder', type: 'organization' },
      { name: 'Concord Management and Consulting', role: 'Owner', type: 'corporation' },
      { name: 'Concord Catering', role: 'Owner (Kremlin contracts)', type: 'corporation' },
      { name: 'Russian Government', role: 'Kremlin contractor, Putin associate', type: 'agency' },
    ],
    controversies: [
      'US ELECTION INTERFERENCE: IRA conducted massive 2016 disinformation campaign reaching 126+ million Americans on Facebook',
      'INDICTED BY DOJ: February 2018, indicted by Mueller for conspiracy against United States, identity fraud',
      'WAGNER WAR CRIMES: Mercenaries committed atrocities in Syria (torture), Libya, Mali, CAR, Sudan, Mozambique, Ukraine',
      'SLEDGEHAMMER EXECUTIONS: Wagner filmed brutal sledgehammer executions of defectors and prisoners',
      'MUTINY (June 2023): Led armed rebellion against Russian military, marched on Moscow before standing down',
      'DEATH (August 2023): Plane crashed near Moscow, widely attributed to Putin assassination order',
      'AFRICA OPERATIONS: Wagner seized gold, diamond mines across Africa while propping up dictators',
      'SYRIA MASSACRE: Wagner forces killed in US airstrike after attacking US-supported positions (February 2018)',
      'PRISON RECRUITMENT: Recruited Russian prisoners for Ukraine front lines with promises of pardons',
      'BAKHMUT MEAT GRINDER: Human wave tactics killed tens of thousands of Wagner troops in Bakhmut offensive',
      'SANCTIONS EVASION: Complex network of shell companies to evade Western sanctions',
      'DISINFORMATION EMPIRE: IRA operations extended to Brexit, French elections, African coups',
    ],
    charges: [
      { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud United States; Election interference (DOJ indictment)', category: 'Federal' },
      { statute: '18 U.S.C. § 1028A', description: 'Aggravated Identity Theft; Fake American identities', category: 'Federal' },
      { statute: '52 U.S.C. § 30121', description: 'Foreign Contributions to Elections', category: 'Federal' },
      { statute: 'Rome Statute Article 8', description: 'War Crimes; Wagner atrocities in Syria, Africa, Ukraine', category: 'International Criminal Court' },
      { statute: 'Rome Statute Article 7(1)(a)', description: 'Crimes Against Humanity; Murder (mass executions)', category: 'International Criminal Court' },
      { statute: 'Rome Statute Article 7(1)(f)', description: 'Crimes Against Humanity; Torture', category: 'International Criminal Court' },
      { statute: 'Rome Statute Article 8(2)(a)(ii)', description: 'War Crimes; Torture of prisoners', category: 'International Criminal Court' },
      { statute: 'EU Sanctions Regulations', description: 'Sanctioned individual; asset freezes', category: 'European Union' },
      { statute: 'OFAC Sanctions', description: 'Specially Designated National; US Treasury', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
      { title: 'Wagner Group War Crimes', slug: 'wagner-crimes', severity: 'critical' },
      { title: 'Foreign Influence Operations', slug: 'foreign-influence', severity: 'critical' },
      { title: 'African Destabilization', slug: 'africa-destabilization', severity: 'critical' },
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: 'June 1, 1961', event: 'Born in Leningrad (St. Petersburg), Soviet Union' },
      { date: '1981', event: 'Convicted of robbery, fraud; serves 9 years in prison' },
      { date: '1990', event: 'Released from prison, starts hot dog stand' },
      { date: '1990s', event: 'Builds catering empire in St. Petersburg' },
      { date: '1990s', event: 'Meets Vladimir Putin through St. Petersburg connections' },
      { date: '2000s', event: 'Wins Kremlin catering contracts, becomes"Putin\'s Chef"' },
      { date: '2013', event: 'Founds Internet Research Agency troll farm in St. Petersburg' },
      { date: '2014', event: 'Founds Wagner Group private military company' },
      { date: '2014', event: 'Wagner deploys to Ukraine (Donbas), Syria' },
      { date: '2015-2016', event: 'IRA conducts massive US election interference campaign' },
      { date: 'February 2018', event: 'Indicted by Mueller Special Counsel with 12 others' },
      { date: 'February 2018', event: '200+ Wagner fighters killed by US airstrike in Syria' },
      { date: '2018-2022', event: 'Wagner expands across Africa: CAR, Mali, Libya, Sudan, Mozambique' },
      { date: '2022', event: 'Wagner deploys massively to Ukraine invasion' },
      { date: '2022', event: 'Begins recruiting prisoners for front lines' },
      { date: '2023', event: 'Bakhmut offensive: months of brutal urban combat, massive casualties' },
      { date: 'May 2023', event: 'Public feud with Russian military leadership escalates' },
      { date: 'June 23, 2023', event: 'Launches armed mutiny, Wagner forces march on Moscow' },
      { date: 'June 24, 2023', event: 'Mutiny ends after deal brokered by Belarus' },
      { date: 'August 23, 2023', event: 'Dies in plane crash near Moscow with Wagner commanders' },
      { date: 'August 2023', event: 'US intelligence assesses Putin ordered assassination' },
      { date: '2024', event: 'Wagner continues operations under Russian military control' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Mueller Indictment: Internet Research Agency', url: 'http://web.archive.org/web/20240315011338/https://www.justice.gov/file/1035477/download', date: '2018' },
      { title: 'Senate Intelligence Committee: Russian Interference Vol. 2', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', date: '2019' },
      { title: 'Wagner Group Investigation: Bellingcat', url: 'https://bellingcat.com/tag/wagner-group/', date: 'Various' },
      { title: 'UN Human Rights Reports on Wagner Atrocities', url: 'https://www.ohchr.org/', date: '2022-2023' },
      { title: 'Treasury OFAC Sanctions', url: 'https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists', date: 'Various' },
      { title: 'Plane Crash Investigation Reports', url: 'https://www.ntsb.gov/investigations/Pages/default.aspx', date: '2023' },
      { title: 'Facebook IRA Disclosure', url: 'https://about.fb.com/news/2017/10/hard-questions-russian-ads/', date: '2017' },
    ],
    aliases: ['Putin\'s Chef', 'Putin\'s Cook', 'Hot Dog Vendor', 'Shadow Commander'],
    knownAssociates: [
      { name: 'Vladimir Putin', relationship: 'Close associate, Kremlin patron, later executed him', href: '/entities/individuals/vladimir-putin' },
      { name: 'Dmitry Utkin', relationship: 'Wagner Group military commander, died in same crash', href: '/entities/individuals/dmitry-utkin' },
      { name: 'Donald Trump', relationship: 'Beneficiary of IRA election interference', href: '/entities/individuals/donald-trump' },
      { name: 'Sergei Shoigu', relationship: 'Russian Defense Minister, target of mutiny', href: '/entities/individuals/sergei-shoigu' },
      { name: 'Valery Gerasimov', relationship: 'Russian General, target of mutiny', href: '/entities/individuals/valery-gerasimov' },
    ],
  },
























  'yahya-khan': {
    name: 'Yahya Khan',
    title: 'Pakistani Military Dictator',
    role: 'Pakistani dictator who ordered Bangladesh genocide with U.S. support',
    riskLevel: 'critical',
    description: 'General Yahya Khan was the Pakistani military dictator who ordered the genocide in Bangladesh (then East Pakistan) in 1971. His forces killed an estimated 300,000 to 3 million people. Nixon and Kissinger continued supporting him despite knowledge of the atrocities.',
    birthDate: 'February 4, 1917',
    birthPlace: 'Chakwal, British India',
    deathDate: 'August 10, 1980',
    education: ['Indian Military Academy'],
    affiliations: [
      { name: 'Pakistani Government', role: 'President/Chief Martial Law Administrator', type: 'agency' },
    ],
    controversies: [
      'BANGLADESH GENOCIDE: Ordered military campaign killing hundreds of thousands',
      'MASS RAPE: Pakistani forces systematically raped Bengali women',
      'U.S. SUPPORT: Received continued U.S. backing during atrocities',
    ],
    charges: [
      { statute: 'Genocide', description: 'Ordered systematic killing of Bengali population', category: 'International Crime' },
      { statute: 'Crimes Against Humanity', description: 'Mass murder, rape, and destruction', category: 'International Crime' },
    ],
    relatedInvestigations: [
      { title: 'Bangladesh Genocide', slug: 'bangladesh-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: 'February 4, 1917', event: 'Born in Chakwal' },
      { date: 'March 25, 1969', event: 'Takes power in military coup' },
      { date: 'March 25, 1971', event: 'Orders Operation Searchlight, genocide begins' },
      { date: 'December 16, 1971', event: 'Pakistani forces surrender, Bangladesh independent' },
      { date: 'December 20, 1971', event: 'Removed from power' },
      { date: 'August 10, 1980', event: 'Dies under house arrest' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Hamoodur Rahman Commission Report', url: 'https://scholar.google.com/scholar?q=Hamoodur%20Rahman%20Commission%20Report', date: '1974' },
      { title: 'The Blood Telegram', url: 'https://scholar.google.com/scholar?q=The%20Blood%20Telegram', date: '1971' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Henry Kissinger', relationship: 'U.S. support during genocide', href: '/entities/individuals/henry-kissinger' },
      { name: 'Richard Nixon', relationship: 'U.S. support during genocide', href: '/entities/individuals/richard-nixon' },
    ],
  },

  'yared-getachew': {
    name: 'Yared Getachew',
    title: 'Ethiopian Airlines Captain',
    role: 'Pilot of Ethiopian Airlines Flight 302; Boeing 737 MAX Victim',
    riskLevel: 'low',
    description: 'Captain Yared Getachew was the pilot of Ethiopian Airlines Flight 302; which crashed on March 10; 2019; six minutes after takeoff from Addis Ababa; killing all 157 people on board. He was 29 years old at the time of the crash and one of the youngest captains at Ethiopian Airlines; having accumulated over 8;100 flight hours. The crash was caused by Boeing\'s Maneuvering Characteristics Augmentation System (MCAS); a flight control system that repeatedly pushed the nose of the aircraft down based on data from a single faulty angle-of-attack (AOA) sensor. Getachew and First Officer Ahmed Nur Mohammod Nur (25 years old; 361 hours on the 737 MAX) followed Boeing\'s emergency procedures exactly; disabling the electric trim system as instructed. However; at the speed the aircraft was traveling; the manual trim wheel required approximately 50 pounds of force to turn; making it physically impossible to manually correct the aircraft\'s nose-down attitude. This was a critical design flaw Boeing never disclosed to pilots or airlines. The pilots fought the aircraft for six agonizing minutes; pulling back on the control column with over 100 pounds of force while MCAS repeatedly activated; driving the plane into a 40-degree nose-down dive at over 500 mph. The aircraft hit the ground at an estimated 575 mph; creating an impact crater 10 meters deep. The same MCAS system had caused the Lion Air Flight 610 crash just five months earlier; killing 189 people. Boeing knew about the MCAS flaw; knew the single-sensor design was dangerous; and had opted not to require a second AOA sensor or disagree light as standard equipment because it would have cost approximately $13;000 per aircraft and might have triggered additional pilot training requirements that would delay deliveries. Internal Boeing communications revealed employees calling the MAX a plane "designed by clowns; who in turn are supervised by monkeys."',
    birthDate: '1989',
    birthPlace: 'Ethiopia',
    deathDate: 'March 10, 2019',
    education: ['Ethiopian Airlines Aviation Academy'],
    affiliations: [
      { name: 'Ethiopian Airlines', role: 'Captain; Boeing 737 MAX 8', type: 'corporation' },
    ],
    controversies: [
      'Followed Boeing\'s emergency procedures exactly but the procedures were inadequate; the manual trim wheel was physically impossible to operate at the aircraft\'s speed',
      'Boeing never disclosed MCAS to pilots in the flight manual; trained pilots on iPads for one hour; and charged extra for the AOA disagree indicator that could have warned of the faulty sensor',
      'The FAA delegated safety certification of MCAS to Boeing itself through the Organization Designation Authorization (ODA) program; allowing Boeing to self-certify the system that killed 346 people',
      'Boeing\'s internal "designed by clowns supervised by monkeys" emails showed company culture prioritized production speed over safety',
      'Ethiopian Airlines was initially blamed by some Western media despite the airline having an excellent safety record; revealing racial bias in crash coverage',
      'FAA was the last aviation authority in the world to ground the 737 MAX; doing so only after 57 other countries had already acted; raising questions about regulatory capture',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: '1989', event: 'Born in Ethiopia' },
      { date: '2010', event: 'Joined Ethiopian Airlines; accumulated over 8;100 flight hours by age 29' },
      { date: 'October 29, 2018', event: 'Lion Air Flight 610 crashes due to same MCAS flaw; killing 189 people; Boeing issues bulletin but does not ground fleet' },
      { date: 'March 10, 2019', event: 'Ethiopian Airlines Flight 302 departs Addis Ababa Bole International Airport at 8:38 AM' },
      { date: 'March 10, 2019', event: 'AOA sensor fails immediately after takeoff; MCAS activates repeatedly pushing nose down' },
      { date: 'March 10, 2019', event: 'Pilots follow Boeing procedures; disable electric trim; but manual trim wheel physically impossible to turn at 340+ knots' },
      { date: 'March 10, 2019', event: 'Flight 302 crashes at 8:44 AM near Bishoftu (Debre Zeit); 6 minutes after takeoff; all 157 killed' },
      { date: 'March 10-13, 2019', event: '57 countries ground 737 MAX; FAA is last to act on March 13' },
      { date: 'January 2021', event: 'Boeing agrees to $2.5 billion deferred prosecution agreement; DOJ declines criminal prosecution of executives' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Ethiopian Aircraft Accident Investigation Bureau: Final Report', url: 'https://www.bea.aero/en/investigation-reports', date: '2020' },
      { title: 'House Transportation Committee: Boeing 737 MAX Investigation', url: 'https://transportation.house.gov/committee-activity/boeing-737-max-investigation', date: '2020' },
      { title: 'Seattle Times: The Inside Story of MCAS', url: 'https://www.seattletimes.com/business/boeing-aerospace/', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Muilenburg', relationship: 'Boeing CEO who refused to ground MAX after Lion Air crash', href: '/entities/individuals/dennis-muilenburg' },
    ],
  },

};

export default profiles;
