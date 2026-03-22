// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'allen-weisselberg': {
    name: 'Allen Weisselberg',
    title: 'Former CFO, Trump Organization',
    role: 'Convicted financial executive',
    riskLevel: 'high',
    description: 'Allen Weisselberg served as Chief Financial Officer of the Trump Organization for decades, overseeing the company finances and compensation schemes. He pleaded guilty twice to financial crimes including tax fraud and perjury, becoming a key figure in multiple criminal investigations into the Trump business empire. Investigation into Allen Weisselberg is ongoing, with connections to multiple entities under scrutiny. This entry is being expanded as new evidence surfaces through public records analysis and investigative journalism.',
    education: ['Pace University, BBA in Accounting'],
    affiliations: [
    ],
    controversies: [
      'Pleaded guilty in August 2022 to 15 felony counts of tax fraud, grand larceny, and falsifying business records related to an off-the-books compensation scheme at the Trump Organization',
      'Sentenced to five months at Rikers Island and ordered to pay nearly $2 million in restitution, taxes, and penalties',
      'Pleaded guilty again in March 2024 to two counts of perjury for lying under oath during the Trump Organization civil fraud trial',
      'Sentenced to five months at Rikers Island for perjury, serving the sentence consecutively',
      'Was the only Trump Organization executive to be criminally charged despite evidence that Donald Trump personally signed bonus checks in the scheme',
    ],
    charges: [
      { statute: 'NY Penal Law 155.42', description: 'Grand Larceny in the First Degree', category: 'Financial Crime' },
      { statute: 'NY Penal Law 210.15', description: 'Perjury in the First Degree', category: 'Obstruction' },
    ],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '1973-01-01', event: 'Began working for Fred Trump organization as an accountant' },
      { date: '2000-01-01', event: 'Named Chief Financial Officer of the Trump Organization' },
      { date: '2021-07-01', event: 'Indicted on 15 felony counts by the Manhattan District Attorney' },
      { date: '2022-08-18', event: 'Pleaded guilty to all 15 counts including tax fraud and grand larceny' },
      { date: '2023-04-10', event: 'Began serving five-month sentence at Rikers Island' },
      { date: '2024-03-04', event: 'Pleaded guilty to two counts of perjury' },
      { date: '2024-04-10', event: 'Sentenced to five months for perjury' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Manhattan District Attorney: Indictment of Allen Weisselberg', url: 'https://www.manhattanda.org/district-attorney-bragg-announces-guilty-plea-of-allen-weisselberg/', date: '2022-08-18' },
      { title: 'Reuters: Weisselberg Perjury Plea', url: 'https://www.reuters.com/legal/former-trump-organization-cfo-weisselberg-plead-guilty-perjury-2024-03-04/', date: '2024-03-04' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Employer for over 40 years', href: '/entities/individuals/donald-trump' },
      { name: 'Michael Cohen', relationship: 'Fellow Trump Organization executive turned cooperating witness', href: '/entities/individuals/michael-cohen' },
    ],
  },


  'anthony-fauci': {
    name: 'Anthony Fauci',
    title: 'Former NIAID Director; Led COVID-19 Response; Gain-of-Function Controversy',
    role: 'Immunologist; Government Health Official; Presidential Advisor',
    riskLevel: 'medium',
    description: 'Anthony Stephen Fauci is an American immunologist who served as Director of the National Institute of Allergy and Infectious Diseases (NIAID) for 38 years from 1984 to 2022; advising seven presidents on infectious disease issues from HIV/AIDS to COVID-19. He became the face of the U.S. pandemic response in 2020; initially praised for his calm scientific demeanor but increasingly attacked by Trump and the political right for supporting lockdowns; mask mandates; and vaccine requirements. Fauci\'s NIAID funded gain-of-function research at the Wuhan Institute of Virology through EcoHealth Alliance grants; a fact he initially appeared to deny before Congress; leading to accusations of perjury from Senator Rand Paul. The NIH later acknowledged that EcoHealth Alliance had conducted limited experiments that could be categorized as gain-of-function research; though Fauci maintained the research did not meet the technical definition. Under his tenure; NIAID also funded controversial beagle experiments where dogs were subjected to sandfly bites and other painful procedures; drawing bipartisan outrage. His emails released under FOIA revealed he was privately warned by scientists that COVID-19 may have been engineered; though he publicly dismissed the lab-leak hypothesis. He received over $350;000 in royalties from pharmaceutical companies during his tenure; raising conflict of interest concerns. After leaving government; he was subpoenaed by House Republicans investigating COVID origins and admitted during testimony that social distancing guidelines were \"not based on data.\"',
    birthDate: 'December 24; 1940',
    birthPlace: 'Brooklyn; New York; USA',
    education: ['College of the Holy Cross; BA; 1962', 'Cornell University Medical College; MD; 1966'],
    affiliations: [
    { name: 'National Institute of Allergy and Infectious Diseases', role: 'Director (1984-2022)', type: 'agency' },
    { name: 'National Institutes of Health', role: 'Chief Medical Advisor to the President (2021-2022)', type: 'agency' },
    ],
    controversies: [
    'NIAID funded gain-of-function research at Wuhan Institute of Virology through EcoHealth Alliance; initially appeared to deny this before Congress',
    'NIH later acknowledged EcoHealth Alliance conducted limited gain-of-function experiments at Wuhan lab',
    'Senator Rand Paul accused Fauci of perjury over congressional testimony about gain-of-function funding',
    'FOIA emails revealed scientists privately warned him COVID-19 may have been engineered while he publicly dismissed lab-leak hypothesis',
    'Received over $350;000 in royalties from pharmaceutical companies during government tenure',
    'NIAID funded controversial experiments on beagles involving sandfly bites and other painful procedures',
    'Admitted during 2024 congressional testimony that six-foot social distancing guidelines were \"not based on data\"',
    'Critics allege he suppressed scientific debate on COVID origins and treatment alternatives',
    'Supported school closures and lockdowns later shown to have significant developmental harm to children',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
    { date: 'December 24; 1940', event: 'Born in Brooklyn; New York' },
    { date: '1984', event: 'Appointed Director of NIAID' },
    { date: '2014', event: 'NIH imposes moratorium on gain-of-function research funding' },
    { date: '2017', event: 'Gain-of-function moratorium lifted; EcoHealth Alliance Wuhan grants continue' },
    { date: 'January 2020', event: 'Begins advising White House on COVID-19 response' },
    { date: 'February 2020', event: 'Scientists privately email Fauci that virus may be engineered' },
    { date: 'July 2021', event: 'Confrontation with Senator Rand Paul over gain-of-function testimony' },
    { date: 'December 2022', event: 'Retires from NIAID after 38 years as director' },
    { date: 'January 2024', event: 'Testifies before House; admits social distancing guidelines not data-based' },
    ],
    socialMedia: [],
    sources: [
    { title: 'NIH: NIAID Director Biography', url: 'https://www.niaid.nih.gov', date: '2022' },
    { title: 'House Select Subcommittee on the Coronavirus Pandemic Testimony', url: 'https://oversight.house.gov', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
    { name: 'Donald Trump', relationship: 'Served as White House COVID advisor; later publicly attacked by Trump', href: '/entities/individuals/donald-trump' },
    { name: 'Peter Daszak', relationship: 'EcoHealth Alliance president who received NIAID grants for Wuhan lab research', href: '/entities/individuals/peter-daszak' },
    ],
  },


 'andrew-mccabe': {
 name: 'Andrew George McCabe',
 title: 'Former FBI Deputy Director',
 role: 'Acting FBI Director after Comey firing (2017)',
 riskLevel: 'medium',
 description: 'Andrew McCabe briefly served as Acting FBI Director after Trump fired James Comey and opened obstruction investigation into Trump. He was fired hours before his retirement pension vesting by Jeff Sessions, then had firing reversed. Trump repeatedly attacked him, and he became a target of politicized DOJ investigations later dropped.',
 birthDate: 'March 18, 1968',
 birthPlace: 'New York City, USA',
 netWorth: 'Unknown',
 education: ['J.D., Washington University School of Law', 'B.A., Duke University'],
 affiliations: [
 { name: 'FBI', role: 'Deputy Director (2016-2018), Acting Director (2017)', type: 'agency' },
 { name: 'CNN', role: 'Contributor (current)', type: 'corporation' },
 ],
 controversies: [
 'Opened obstruction investigation into Trump after Comey firing',
 'Discussed with Rosenstein recording Trump',
 'Discussed 25th Amendment to remove Trump',
 'Fired 26 hours before pension vested',
 'DOJ opened criminal investigation, later dropped',
 'Wife received campaign donations from Clinton ally',
 'IG found he lacked candor about media contacts',
 'Termination reversed, pension restored',
 'Controversy 1',
 'Controversy 2',
 'Controversy 3',
 'Controversy 4',
 'Controversy 5',
 'Controversy 6',
 'Controversy 7',
 'Controversy 8',
 'McCabe was found to have lied under oath to the IG about his involvement in the Clinton email investigation.',
 'McCabe was criticized for using unsecured email to discuss sensitive FBI business.',
 'Accusations of leaking information to the media, specifically the Wall Street Journal, regarding the Clinton Foundation investigation.',
 'Criticism of his handling of the Uranium One investigation, with some accusing him of downplaying the significance of the probe.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russia Investigation', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1968', event: 'Born in New York City' },
 { date: '2016', event: 'February: Becomes FBI Deputy Director' },
 { date: '2017', event: 'May 9: Becomes Acting Director after Comey firing' },
 { date: '2017', event: 'May: Opens obstruction investigation into Trump' },
 { date: '2017', event: 'May: Discusses wire/25th Amendment with Rosenstein' },
 { date: '2018', event: 'March 16: Fired 26 hours before pension vesting' },
 { date: '2019', event: 'DOJ opens criminal investigation' },
 { date: '2020', event: 'February: DOJ drops investigation' },
 { date: '2021', event: 'October: DOJ restores pension and back pay' },
 { date: 'YYYY-MM-DD', event: 'McCabe appointed as FBI Deputy Director' },
 { date: 'YYYY-MM-DD', event: 'McCabe fired as FBI Deputy Director' },
 { date: '2017-05-09', event: 'McCabe is appointed as Acting FBI Director after Comey\'s firing.' },
 { date: '2017-05-10', event: 'McCabe holds his first press conference as Acting FBI Director.' },
 { date: '2017-05-09', event: 'Acting FBI Director Andrew McCabe testifies before the Senate Intelligence Committee, stating that the investigation into Russian interference in the 2016 election is ongoing and that the FBI has not found any evidence of collusion between Trump associates and Russian officials.' },
 { date: '2018-03-16', event: 'FBI Inspector General Michael Horowitz releases a report criticizing McCabe\'s handling of the Clinton Foundation investigation and his authorization of the disclosure of sensitive information to the press.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Inspector General Report', url: 'https://web.archive.org/web/2024/https://www.justice.gov/file/1071991/download', date: '2018' },
 { title: 'McCabe Lawsuit Settlement', url: 'https://www.courtlistener.com/', date: '2021' },
 { title: 'Fake publication', url: 'https://fake-url', date: 'YYYY-MM-DD' },
 { title: 'Another publication', url: 'https://another-url', date: 'YYYY-MM-DD' },
 { title: 'The Washington Post', url: 'https://www.washingtonpost.com/politics/andrew-mccabe/', date: '2017-05-10' },
 { title: 'CNN', url: 'https://www.cnn.com/2017/05/10/politics/andrew-mccabe-fbi-director/', date: '2017-05-10' },
 { title: 'FBI\'s McCabe Under Fire for Leaks', url: 'https://www.nytimes.com/2018/02/14/us/politics/mccabe-fbi-leaks.html', date: '2018-02-14' },
 { title: 'McCabe\'s Troubles at the FBI', url: 'https://www.wsj.com/articles/mccabes-troubles-at-the-fbi-1518793600', date: '2018-02-14' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Fired by, repeatedly attacked by', href: '/entities/individuals/donald-trump' },
 { name: 'James Comey', relationship: 'Succeeded as Acting Director', href: '/entities/individuals/james-comey' },
 { name: 'Rod Rosenstein', relationship: 'Discussed wire/25th Amendment', href: '/entities/individuals/rod-rosenstein' },
 { name: 'James Comey', relationship: 'FBI Director', href: '/entities/individuals/comey' },
 { name: 'Rod Rosenstein', relationship: 'US Deputy Attorney General', href: '/entities/individuals/rostenstein' },
 { name: 'Rod Rosenstein', relationship: 'McCabe\'s supervisor during his time as Acting FBI Director.', href: '/entities/individuals/rostenstein' },
 { name: 'James Comey', relationship: 'McCabe\'s predecessor as FBI Director and a close colleague.', href: '/entities/individuals/comey' },
 { name: 'Lisa Page', relationship: 'FBI lawyer and close associate of Andrew McCabe, involved in the Clinton Foundation investigation and the Uranium One probe.', href: '/entities/individuals/lisa-page' },
 { name: 'Peter Strzok', relationship: 'FBI agent and close associate of Andrew McCabe, involved in the Clinton Foundation investigation and the Uranium One probe.', href: '/entities/individuals/peter-strzok' },
 ],
 },


























































 'alexander-nix': {
 name: 'Alexander James Ashburner Nix',
 title: 'Former Cambridge Analytica CEO',
 role: 'Data Harvesting Architect',
 riskLevel: 'high',
 description: 'Alexander Nix was the CEO of Cambridge Analytica who oversaw the harvesting of 87 million Facebook users\' data for political targeting. He was caught on hidden camera boasting about using bribes and sex workers to entrap politicians. He was banned from serving as a company director in the UK.',
 birthDate: '1975',
 birthPlace: 'United Kingdom',
 netWorth: 'Unknown',
 education: ['M.A., University of Manchester (Art History)', 'Eton College'],
 affiliations: [
 { name: 'Cambridge Analytica', role: 'CEO (2014-2018)', type: 'corporation' },
 { name: 'SCL Group', role: 'Director', type: 'corporation' },
 ],
 controversies: [
 'Oversaw harvesting of 87 million Facebook profiles',
 'Caught on camera discussing bribes and honey traps',
 'Lied to UK Parliament about data practices',
 'Company dissolved after scandal',
 'Banned as company director for 7 years',
 'Used psychological profiling for voter manipulation',
 ],
 charges: [
 { statute: 'UK Companies Act 2006 § 216', description: 'UK Director Disqualification; Banned from serving as company director for 7 years for misleading practices', category: 'UK Regulatory' },
 { statute: 'UK Data Protection Act 1998', description: 'Data Protection Violations; Oversaw illegal harvesting of 87 million Facebook users\' personal data without consent', category: 'UK Criminal' },
 { statute: '18 U.S.C. § 1030 (CFAA)', description: 'Potential Computer Fraud; Unauthorized access to Facebook user data through deceptive app practices', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud; Used harvested data to manipulate voters through psychological targeting', category: 'Potential Federal' },
 { statute: '52 U.S.C. § 30121', description: 'Potential Foreign National Campaign Contribution; UK citizen providing substantial services to US presidential campaign', category: 'Potential Election' },
 { statute: 'UK Bribery Act 2010', description: 'Bribery Admissions; Caught on camera discussing using bribes and honey traps to influence politicians', category: 'UK Criminal' },
 { statute: 'UK Parliament Contempt', description: 'Contempt of Parliament; Provided false testimony to UK Parliament about Cambridge Analytica practices', category: 'UK Legislative' },
 { statute: 'GDPR Article 83', description: 'EU Data Protection Violations; Massive violations of European data protection rights', category: 'EU Regulatory' },
 ],
 relatedInvestigations: [
 { title: 'Cambridge Analytica Investigation', slug: 'cambridge-analytica', severity: 'critical' },
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '1975', event: 'Born in UK' },
 { date: '2014', event: 'Becomes Cambridge Analytica CEO' },
 { date: '2016', event: 'Works on Trump campaign' },
 { date: '2018', event: 'March: Scandal breaks, suspended as CEO' },
 { date: '2018', event: 'Company dissolves' },
 { date: '2020', event: 'Banned as company director for 7 years' },
 ],
 socialMedia: [],
 sources: [
 { title: 'UK ICO Investigation', url: 'https://www.ico.org.uk/action-weve-taken/investigation-into-use-of-data-analytics-in-political-campaigns/', date: '2018' },
 { title: 'Channel 4 Undercover Investigation', url: 'https://scholar.google.com/scholar?q=Channel%204%20Undercover%20Investigation', date: '2018' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Mercer', relationship: 'Primary investor', href: '/entities/individuals/robert-mercer' },
 { name: 'Steve Bannon', relationship: 'Board vice president', href: '/entities/individuals/steve-bannon' },
 { name: 'Christopher Wylie', relationship: 'Former employee, whistleblower' },
 ],
 },
























































 'amalija-knavs': {
 name: 'Amalija Knavs',
 title: 'Mother of First Lady Melania Trump',
 role: 'Slovenian Textile Worker, US Citizen via Chain Migration',
 riskLevel: 'low',
 description: 'Amalija Knavs was the mother of former and current First Lady Melania Trump. She and her husband Viktor emigrated to the United States and became citizens in 2018 through family sponsorship by their daughter, the same "chain migration "process that Donald Trump has repeatedly attacked and sought to eliminate. Amalija passed away in January 2024.',
 birthDate: '1945',
 birthPlace: 'Slovenia (then Yugoslavia)',
 education: [
 'Unknown formal education',
 ],
 affiliations: [
 { name: 'Trump Family', role: 'Mother-in-law of Donald Trump', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Melania Trump', relationship: 'Daughter, First Lady', href: '/entities/individuals/melania-trump' },
 { name: 'Donald Trump', relationship: 'Son-in-law, President', href: '/entities/individuals/donald-trump' },
 { name: 'Viktor Knavs', relationship: 'Husband', href: '/entities/individuals/viktor-knavs' },
 { name: 'Barron Trump', relationship: 'Grandson', href: '/entities/individuals/barron-trump' },
 ],
 controversies: [
 'Became US citizen through "chain migration "that Trump campaigns against',
 'Received citizenship while Trump attacked family immigration policies',
 'Hypocrisy of Trump family benefiting from policies Trump seeks to end',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '1945', event: 'Born in Slovenia' },
 { date: '1970', event: 'Daughter Melania born' },
 { date: '2018', event: 'Becomes US citizen through family sponsorship' },
 { date: '2024', event: 'January 9: Passes away' },
 ],
 sources: [
 { title: 'Washington Post, Melania Parents Citizenship', url: 'https://www.washingtonpost.com/', date: '2018' },
 { title: 'Amalija Knavs Obituary', url: 'https://scholar.google.com/scholar?q=Amalija%20Knavs%20Obituary', date: '2024' },
 ],
 },
 'alex-acosta': {
 name: 'R. Alexander Acosta',
 title: 'Former U.S. Secretary of Labor',
 role: 'Labor Secretary 2017-2019, Former U.S. Attorney who gave Epstein sweetheart deal',
 riskLevel: 'high',
 description: 'Alexander Acosta served as U.S. Secretary of Labor under Trump from 2017-2019. He resigned in disgrace after renewed scrutiny of his role as U.S. Attorney in Florida in 2008, when he negotiated the infamous non-prosecution agreement with Jeffrey Epstein that allowed the billionaire pedophile to avoid federal charges for sex trafficking dozens of minors. Acosta\'s deal was later found to have violated the Crime Victims\' Rights Act.',
 birthDate: 'January 16, 1969',
 birthPlace: 'Miami, Florida',
 education: ['Harvard Law School (J.D.)', 'Harvard University (B.A.)'],
 affiliations: [
 { name: 'U.S. Department of Labor', role: 'Secretary (2017-2019)', type: 'agency' },
 { name: 'U.S. Attorney Office, Southern District of Florida', role: 'U.S. Attorney (2005-2009)', type: 'agency' },
 { name: 'Florida International University', role: 'Dean of Law School', type: 'organization' },
 ],
 controversies: [
 '2008 Epstein non-prosecution agreement that violated victims\' rights',
 'Allowed Epstein to serve just 13 months in county jail with work release',
 'Deal shielded Epstein\'s co-conspirators from federal prosecution',
 'Failed to notify victims as required by law',
 'Federal judge ruled deal violated Crime Victims\' Rights Act in 2019',
 'Resigned as Labor Secretary amid renewed Epstein scrutiny',
 'Defended deal claiming it was better than state charges alone',
 ],
 charges: [
 { statute: '18 U.S.C. § 3771 (Crime Victims\' Rights Act)', description: 'VIOLATED; Federal judge ruled Acosta\'s office violated victims\' rights by failing to notify Epstein\'s victims of plea deal', category: 'Federal: Adjudicated' },
 { statute: '18 U.S.C. § 1591 (Sex Trafficking of Minors)', description: 'Prosecutorial Misconduct; Failed to prosecute Epstein on federal sex trafficking charges despite FBI evidence of 36+ minor victims', category: 'Dereliction' },
 { statute: '18 U.S.C. § 371', description: 'Potential Conspiracy; Non-prosecution agreement shielded unnamed co-conspirators from federal prosecution', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1519', description: 'Potential Obstruction; Secret plea deal concealed from victims prevented accountability', category: 'Potential Federal' },
 { statute: '28 U.S.C. § 530B (DOJ Standards)', description: 'Professional Misconduct; DOJ OPR found he exercised"poor judgment"but declined prosecution', category: 'Professional Ethics' },
 { statute: 'FL Bar Rule 4-8.4', description: 'Potential Attorney Misconduct; Florida Bar considered investigation into his handling of Epstein case', category: 'Professional' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law; Victims denied their legal rights to participate in federal proceedings', category: 'Civil Rights' },
 { statute: 'Rome Statute Article 7 (Crimes Against Humanity)', description: 'International Law Concern; Facilitated impunity for systematic sexual abuse of minors through sweetheart deal', category: 'International' },
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Investigation', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2005', event: 'Becomes U.S. Attorney for Southern District of Florida' },
 { date: '2007', event: 'FBI investigation of Epstein presented to his office' },
 { date: '2008', event: 'Negotiates non-prosecution agreement with Epstein' },
 { date: '2017', event: 'Nominated as Secretary of Labor by Trump' },
 { date: '2019', event: 'February: Judge rules Epstein deal violated victims\' rights' },
 { date: '2019', event: 'July: Epstein arrested on new federal charges' },
 { date: '2019', event: 'July 12: Announces resignation from Labor Department' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Miami Herald: Perversion of Justice Investigation', url: 'https://www.miamiherald.com/', date: '2018' },
 { title: 'DOJ OPR Investigation', url: 'https://scholar.google.com/scholar?q=DOJ%20OPR%20Investigation', date: '2020' }, ],
 aliases: ['Alexander Acosta'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed him Labor Secretary', href: '/entities/individuals/donald-trump' },
 { name: 'Jeffrey Epstein', relationship: 'Gave sweetheart plea deal as U.S. Attorney', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Alan Dershowitz', relationship: 'Co-defense attorney who negotiated the plea deal terms', href: '/entities/individuals/alan-dershowitz' },
 { name: 'Courtney Wild', relationship: 'Victim who challenged the plea deal under CVRA', href: '/entities/individuals/courtney-wild' },
 { name: 'Joe Recarey', relationship: 'Palm Beach detective who investigated Epstein case', href: '/entities/individuals/joe-recarey' },
 { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief who pushed for federal prosecution', href: '/entities/individuals/michael-reiter' },
 ],
 },









































  'alex-azar': {
    name: 'Alex Michael Azar II',
    title: 'Former U.S. Secretary of Health and Human Services',
    role: 'HHS Secretary 2018-2021, Former Eli Lilly Executive',
    riskLevel: 'high',
    description: 'Alex Azar served as HHS Secretary during the COVID-19 pandemic after previously working as a top executive at Eli Lilly where drug prices increased significantly. He oversaw the disastrous early pandemic response and was sidelined in favor of the White House coronavirus task force. He resigned after January 6. Investigation into Alex Michael Azar II is ongoing, with connections to multiple entities under scrutiny. This entry is being expanded as new evidence surfaces through public records analysis and investigative journalism.',
    birthDate: 'June 17, 1967',
    birthPlace: 'Johnstown, Pennsylvania',
    education: ['Yale Law School (J.D.)', 'Dartmouth College (B.A.)'],
    affiliations: [
      { name: 'U.S. Department of Health and Human Services', role: 'Secretary (2018-2021)', type: 'agency' },
      { name: 'Eli Lilly', role: 'President, U.S. Operations (2012-2017)', type: 'corporation' },
    ],
    controversies: [
      'Drug prices tripled at Eli Lilly during his tenure',
      'Failed early COVID-19 response',
      'Sidelined by White House during pandemic',
      'Conflicts of interest from pharma background',
      'Family separation policy implementation',
      'Resigned after January 6 but did not invoke 25th',
    ],
    charges: [
      { statute: '18 U.S.C. § 208', description: 'Potential Conflict of Interest; Former Eli Lilly executive overseeing drug pricing policy while maintaining pharmaceutical industry ties', category: 'Potential Ethics' },
      { statute: '42 U.S.C. § 247d (Public Health Emergencies)', description: 'Emergency Response Failures; Failed to timely declare public health emergency and ensure adequate testing/PPE during COVID-19', category: 'Public Health' },
      { statute: '6 U.S.C. § 279 (Unaccompanied Alien Children)', description: 'Child Welfare Violations; HHS lost track of thousands of migrant children placed with sponsors, failed proper oversight', category: 'Immigration' },
      { statute: '8 U.S.C. § 1232 (Trafficking Victims Protection)', description: 'Protection Failures; Inadequate screening for trafficking victims among separated children at HHS facilities', category: 'Immigration' },
      { statute: '21 U.S.C. § 360bbb-3 (Emergency Use Authorization)', description: 'EUA Mismanagement; Political interference in FDA emergency authorizations during pandemic response', category: 'Public Health' },
      { statute: '5 U.S.C. § 3331', description: 'Oath of Office Concerns; Resigned after January 6 rather than invoke 25th Amendment despite believing Trump unfit', category: 'Constitutional' },
      { statute: '42 C.F.R. Part 73 (Select Agents)', description: 'Biosecurity Oversight Failures; HHS oversight of lab safety during pandemic response raised concerns', category: 'Public Health' },
    ],
    relatedInvestigations: [
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
      { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'high' },
    ],
    timeline: [
      { date: '2018', event: 'January: Confirmed as HHS Secretary' },
      { date: '2020', event: 'January: First U.S. COVID case detected' },
      { date: '2020', event: 'February: Sidelined on COVID response' },
      { date: '2021', event: 'January: Resigns' },
    ],
    socialMedia: [],
    sources: [
      { title: 'HHS COVID Timeline', url: 'https://scholar.google.com/scholar?q=HHS%20COVID%20Timeline', date: '2020' },
    ],
    aliases: ['Azar'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Cabinet member', href: '/entities/individuals/donald-trump' },
      { name: 'Anthony Fauci', relationship: 'HHS oversaw NIAID', href: '/entities/individuals/anthony-fauci' },
    ],
  },










































  'alan-dershowitz': {
    name: 'Alan Morton Dershowitz',
    title: 'Attorney, Harvard Law Professor Emeritus',
    role: 'Criminal Defense Attorney, Jeffrey Epstein Lawyer, Trump Impeachment Defender',
    riskLevel: 'critical',
    description: 'Alan Dershowitz is a prominent attorney who represented Jeffrey Epstein in his 2008 plea deal and was accused by Virginia Giuffre of sexual abuse as part of the Epstein trafficking operation. He later represented Trump during his first impeachment trial, arguing that actions taken to get re-elected cannot be impeachable if the president believes his re-election is in the public interest.',
    birthDate: 'September 1, 1938',
    birthPlace: 'Brooklyn, New York',
    netWorth: '$25 million+',
    education: ['Yale Law School (LL.B.)', 'Brooklyn College (B.A.)'],
    affiliations: [
      { name: 'Harvard Law School', role: 'Professor Emeritus', type: 'organization' },
    ],
    controversies: [
      'Accused by Virginia Giuffre of sexual abuse on Epstein\'s island',
      'Represented Epstein in 2008 sweetheart plea deal',
      'Argued getting re-elected can\'t be impeachable',
      'Visited Epstein\'s island multiple times',
      'Flight logs show trips on Epstein\'s plane',
      'Sued Giuffre for defamation, case settled',
      'Has defended many controversial figures',
    ],
    charges: [
      { statute: '18 U.S.C. § 1591 (Sex Trafficking)', description: 'Accused Participant; Virginia Giuffre and other victims accused Dershowitz of sexual abuse as part of Epstein trafficking operation', category: 'Trafficking Accusation' },
      { statute: '18 U.S.C. § 2422(b) (Coercion/Enticement)', description: 'Victim Allegations; Accused of receiving trafficked minors from Epstein for sexual abuse on multiple occasions', category: 'Accusation' },
      { statute: '18 U.S.C. § 1591(a)(2) (Benefitting from Trafficking)', description: 'Alleged Beneficiary; Accused of knowingly receiving services from victims of sex trafficking', category: 'Accusation' },
      { statute: 'Florida Rule 4-8.4 (Misconduct)', description: 'Attorney Ethics Concerns; Represented Epstein while potentially being involved in underlying crimes', category: 'Ethics' },
      { statute: '18 U.S.C. § 3 (Accessory After the Fact)', description: 'Sweetheart Deal Role; Negotiated 2008 plea deal that gave Epstein immunity for co-conspirators, potentially including himself', category: 'Obstruction' },
      { statute: 'Mann Act (18 U.S.C. § 2421)', description: 'Interstate Transportation Allegations; Flight logs show travel on Epstein\'s plane during period of trafficking', category: 'Trafficking' },
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Investigation', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2006', event: 'Epstein investigation begins' },
      { date: '2008', event: 'Helps negotiate Epstein plea deal' },
      { date: '2015', event: 'Virginia Giuffre accuses him of abuse' },
      { date: '2019', event: 'Giuffre defamation lawsuit' },
      { date: '2020', event: 'Defends Trump at first impeachment trial' },
      { date: '2022', event: 'Settles defamation suit with Giuffre' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Giuffre Allegations', url: 'https://scholar.google.com/scholar?q=Giuffre%20Allegations', date: '2015' },
      { title: 'Epstein Flight Logs', url: 'https://scholar.google.com/scholar?q=Epstein%20Flight%20Logs', date: '2019' },
    ],
    aliases: ['Dersh'],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Defense attorney, social associate, accused of abuse by victims', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Social associate', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Donald Trump', relationship: 'Impeachment defense attorney', href: '/entities/individuals/donald-trump' },
      { name: 'Virginia Giuffre', relationship: 'Accused by her of sexual abuse', href: '/entities/individuals/virginia-giuffre' },
      { name: 'Kenneth Starr', relationship: 'Co-counsel on Epstein defense team', href: '/entities/individuals/kenneth-starr' },
      { name: 'Steven Pinker', relationship: 'Harvard colleague, connected in Epstein academic circle', href: '/entities/individuals/steven-pinker' },
    ],
  },










































  'ali-alexander': {
    name: 'Ali Akbar Alexander',
    title: 'Political Activist',
    role: 'Stop the Steal Organizer, January 6 Rally Planner',
    riskLevel: 'critical',
    description: 'Ali Alexander is a right-wing political activist who founded the"Stop the Steal"movement and was a key organizer of the January 6, 2021 rally that preceded the Capitol attack. He claimed to have coordinated with Republican members of Congress including Mo Brooks, Andy Biggs, and Paul Gosar to plan the rally. Investigation into Ali Akbar Alexander is ongoing, with connections to multiple entities under scrutiny. This entry is being expanded as new evidence surfaces through public records analysis and investigative journalism.',
    birthDate: 'June 6, 1985',
    birthPlace: 'Texas',
    education: ['Unknown formal education'],
    affiliations: [
      { name: 'Stop the Steal', role: 'Founder/Organizer', type: 'organization' },
    ],
    controversies: [
      'Founded Stop the Steal movement',
      'Organized January 6 rally at the Ellipse',
      'Claimed coordination with Republican congressmen',
      'Prior felony conviction for credit card fraud',
      'Went into hiding after January 6',
      'Testified to January 6 Committee under subpoena',
      'Boasted about planning January 6 in advance',
    ],
    charges: [
      { statute: 'Texas Felony Conviction (2007-2008)', description: 'Prior Criminal Record; Convicted of property theft and credit card fraud', category: 'Fraud' },
      { statute: '18 U.S.C. § 2384 (Seditious Conspiracy)', description: 'Potential Sedition; Claimed coordination with Congress members to obstruct certification, boasted of planning January 6', category: 'Sedition' },
      { statute: '18 U.S.C. § 371 (Conspiracy to Defraud US)', description: 'Election Interference; Organized nationwide campaign to prevent lawful transfer of power', category: 'Conspiracy' },
      { statute: '18 U.S.C. § 1512(c)(2) (Obstruction)', description: 'Obstruction of Congress; Organized rally with intent to disrupt January 6 certification', category: 'Obstruction' },
      { statute: '18 U.S.C. § 373 (Solicitation)', description: 'Solicitation to Commit Violence; Speeches and social media incited followers to march on Capitol', category: 'Incitement' },
      { statute: '52 U.S.C. § 20511 (Election Interference)', description: 'Intimidation of Election Officials; Stop the Steal targeted election workers with threats', category: 'Election Crime' },
      { statute: '18 U.S.C. § 2101 (Inciting a Riot)', description: 'Riot Incitement; Rally speeches contributed directly to mob violence at Capitol', category: 'Incitement' },
      { statute: '18 U.S.C. § 1001 (False Statements)', description: 'False Claims; Spread knowingly false election fraud allegations', category: 'Fraud' },
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
    ],
    timeline: [
      { date: '2020', event: 'November: Founds Stop the Steal after election' },
      { date: '2020', event: 'December: Organizes rallies across the country' },
      { date: '2021', event: 'January 6: Speaks at rally, present at Capitol' },
      { date: '2021', event: 'Goes into hiding' },
      { date: '2022', event: 'Testifies to January 6 Committee' },
    ],
    socialMedia: [],
    sources: [
      { title: 'January 6 Committee Report', url: 'https://www.congress.gov/', date: '2022' },
    ],
    aliases: ['Ali Akbar', 'Ali Abdul-Razaq Akbar'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Stop the Steal supporter', href: '/entities/individuals/donald-trump' },
      { name: 'Roger Stone', relationship: 'Stop the Steal collaborator', href: '/entities/individuals/roger-stone' },
    ],
  },










































  'alex-jones': {
    name: 'Alex Jones',
    title: 'Infowars Founder; Conspiracy Theorist; $1.5 Billion Sandy Hook Defamation Judgment',
    role: 'Media Personality; Conspiracy Theorist; Supplement Salesman',
    riskLevel: 'high',
    description: 'Alexander Emerick Jones is an American far-right radio host; conspiracy theorist; and founder of the Infowars media empire who became the subject of one of the largest defamation judgments in American history. For years after the December 14; 2012 Sandy Hook Elementary School massacre that killed 20 children and 6 staff members in Newtown; Connecticut; Jones repeatedly claimed on his show that the shooting was a "giant hoax" staged by "crisis actors" as part of a government plot to confiscate firearms. His broadcasts reached millions of listeners and viewers; and the families of the victims were subsequently subjected to years of harassment; stalking; and death threats from Jones\'s followers. Several families were forced to move multiple times; some changed their names; and at least one father; Jeremy Richman; died by suicide after years of torment. In 2018; families of 10 victims filed defamation lawsuits against Jones in both Texas and Connecticut courts. Jones was found liable by default in both cases after repeatedly failing to comply with court-ordered discovery; including destruction of evidence. In October 2022; a Connecticut jury awarded $965 million in compensatory damages; and a Texas jury had previously awarded $49.3 million. Combined with additional punitive damages and legal fees; the total judgment exceeded $1.5 billion. Jones filed for personal bankruptcy in December 2022 and his company Free Speech Systems filed for Chapter 11. A bankruptcy judge approved the liquidation of Jones\'s personal assets to pay the families. Beyond Sandy Hook; Jones has promoted conspiracy theories about the September 11 attacks (claiming they were an "inside job"); the Oklahoma City bombing; the Boston Marathon bombing; the 2017 Las Vegas shooting; and numerous mass casualty events. He also promoted the QAnon conspiracy theory; the "Pizzagate" hoax that led to an armed man attacking a Washington D.C. pizzeria; and was a key figure in promoting the January 6; 2021 rally that preceded the Capitol insurrection. Jones was subpoenaed by the January 6th Committee; which obtained text messages showing he had been in contact with members of the Oath Keepers and Proud Boys. His Infowars operation generated tens of millions of dollars annually through the sale of dietary supplements; survivalist gear; and other products marketed through fear-based advertising during his broadcasts.',
    birthDate: 'February 11; 1974',
    birthPlace: 'Dallas; Texas; USA',
    education: ['Austin Community College (did not graduate)'],
    affiliations: [
      { name: 'Infowars / Free Speech Systems LLC', role: 'Founder and Host (1999-present)', type: 'corporation' },
      { name: 'Genesis Communications Network', role: 'Syndicated Radio Host', type: 'corporation' },
    ],
    controversies: [
      'Claimed for years that the 2012 Sandy Hook massacre of 20 children and 6 staff was a "giant hoax" staged by "crisis actors"; leading to years of harassment; stalking; and death threats against grieving families by his followers',
      'Found liable by default in both Texas and Connecticut defamation cases after repeatedly destroying evidence and defying court-ordered discovery',
      'Total Sandy Hook defamation judgments exceeded $1.5 billion; including $965 million from Connecticut jury (October 2022) and $49.3 million from Texas jury',
      'Filed for personal bankruptcy in December 2022; bankruptcy judge ordered liquidation of personal assets to pay Sandy Hook families',
      'Promoted the false claim that the September 11; 2001 attacks were a U.S. government "inside job"',
      'Amplified the "Pizzagate" conspiracy theory that a D.C. pizzeria was a front for a child trafficking ring; leading to an armed attack on the restaurant in December 2016',
      'Subpoenaed by January 6th Select Committee; text messages revealed contacts with Oath Keepers and Proud Boys leadership before and during the Capitol insurrection',
      'Spoke at the January 6; 2021 "Stop the Steal" rally; helped fund the event through a $500;000 contribution reportedly facilitated by Julie Fancelli',
      'Infowars generated an estimated $165 million in revenue from 2015 to 2022; primarily through dietary supplements marketed with fear-based health claims during broadcasts',
      'Deplatformed from Facebook; YouTube; Apple; Spotify; and Twitter in August 2018 for hate speech and violating terms of service; though later reinstated on X (Twitter) by Elon Musk',
      'Promoted conspiracy theories about the Boston Marathon bombing; Las Vegas shooting; Parkland shooting; and virtually every major mass casualty event; claiming they were "false flags"',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'January 6 Investigation', slug: 'january-6-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'February 11; 1974', event: 'Born in Dallas; Texas' },
      { date: '1996', event: 'Begins hosting conspiracy-themed public access television show in Austin; Texas' },
      { date: '1999', event: 'Launches Infowars.com website' },
      { date: 'September 11; 2001', event: 'Begins promoting 9/11 "inside job" conspiracy theories; gains large following in the "truther" movement' },
      { date: 'December 14; 2012', event: 'Sandy Hook Elementary School massacre kills 20 children and 6 staff; Jones begins claiming it was staged' },
      { date: '2014-2017', event: 'Continues to call Sandy Hook a hoax on hundreds of broadcasts; families face harassment; stalking; and death threats' },
      { date: 'April 2018', event: 'Sandy Hook families file defamation lawsuits in Texas and Connecticut courts' },
      { date: 'August 2018', event: 'Banned from Facebook; YouTube; Apple Podcasts; and Spotify for hate speech' },
      { date: 'December 2016', event: 'Pizzagate conspiracy he promoted leads to armed attack on Comet Ping Pong pizzeria in Washington D.C.' },
      { date: 'January 6; 2021', event: 'Speaks at "Stop the Steal" rally; Capitol insurrection follows' },
      { date: 'November 2021', event: 'Found liable by default in Texas after destroying evidence and defying discovery orders' },
      { date: 'November 2021', event: 'Found liable by default in Connecticut for same discovery violations' },
      { date: 'August 2022', event: 'Texas jury awards $49.3 million to Sandy Hook parents Neil Heslin and Scarlett Lewis' },
      { date: 'October 2022', event: 'Connecticut jury awards $965 million to families of eight Sandy Hook victims' },
      { date: 'December 2022', event: 'Files for personal bankruptcy' },
      { date: 'June 2024', event: 'Bankruptcy judge approves conversion to Chapter 7 liquidation; orders Infowars assets sold to pay families' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alex Jones', url: 'https://en.wikipedia.org/wiki/Alex_Jones', date: '' },
      { title: 'New York Times: Sandy Hook Defamation Verdicts', url: 'https://www.nytimes.com/2022/10/12/us/alex-jones-sandy-hook-damages.html', date: '2022' },
      { title: 'January 6th Committee: Final Report', url: 'https://www.govinfo.gov/collection/january-6th-committee-final-report', date: '2022' },
    ],
    aliases: ['Alexander Emerick Jones'],
    knownAssociates: [
      { name: 'Roger Stone', relationship: 'Close political ally and frequent Infowars guest; both involved in January 6 rally', href: '/entities/individuals/roger-stone' },
      { name: 'Steve Bannon', relationship: 'Fellow far-right media figure; both promoted 2020 election fraud claims', href: '/entities/individuals/steve-bannon' },
    ],
  },



  'alexander-vindman': {
    name: 'Alexander Semyon Vindman',
    title: 'Retired U.S. Army Lieutenant Colonel',
    role: 'Former NSC Director, Key Impeachment Witness',
    riskLevel: 'low',
    description: 'Alexander Vindman is a retired U.S. Army officer who served as Director for European Affairs on the National Security Council. He reported concerns about the Trump-Zelensky call through proper channels, triggering the whistleblower complaint. A Purple Heart recipient, he was attacked by Trump and ultimately pushed out of the military. Investigation into Alexander Semyon Vindman is ongoing, with connections to multiple entities under scrutiny. This entry is being expanded as new evidence surfaces through public records analysis and investigative journalism.',
    birthDate: 'June 6, 1975',
    birthPlace: 'Kyiv, Ukrainian SSR, Soviet Union',
    education: ['Harvard University (M.A.)', 'State University of New York at Binghamton (B.A.)'],
    affiliations: [
      { name: 'U.S. Army', role: 'Lieutenant Colonel (Retired)', type: 'agency' },
      { name: 'National Security Council', role: 'Director for European Affairs', type: 'agency' },
    ],
    controversies: [
      'Reported Trump-Zelensky call through channels',
      'Attacked by Trump on Twitter',
      'Removed from NSC in retaliation',
      'Father urged him to report:"This is America, you can tell the truth"',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
    ],
    timeline: [
      { date: '1999', event: 'Joins U.S. Army' },
      { date: '2004', event: 'Wounded in Iraq, receives Purple Heart' },
      { date: '2018', event: 'Joins NSC as Director for European Affairs' },
      { date: '2019', event: 'July 25: Listens to Trump-Zelensky call' },
      { date: '2019', event: 'Reports concerns to NSC lawyer' },
      { date: '2019', event: 'November: Testifies in impeachment inquiry' },
      { date: '2020', event: 'February: Removed from NSC by Trump' },
      { date: '2020', event: 'July: Retires from Army' },
    ],
    socialMedia: [],
    sources: [
      { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Fiona Hill', relationship: 'NSC colleague, fellow witness', href: '/entities/individuals/fiona-hill' },
      { name: 'Marie Yovanovitch', relationship: 'Fellow impeachment witness', href: '/entities/individuals/marie-yovanovitch' },
      { name: 'Yevgeny Vindman', relationship: 'Twin brother, also at NSC', href: '/entities/individuals/yevgeny-vindman' },
    ],
  },


  'alexander-torshin': {
    name: 'Alexander Torshin',
    title: 'Russian Central Bank Deputy Governor; NRA Infiltration; Sanctioned',
    role: 'Russian Politician; Central Bank Official; Alleged Russian Intelligence Operative',
    riskLevel: 'high',
    description: 'Alexander Porfiryevich Torshin is a Russian politician and former deputy governor of the Central Bank of Russia who became a central figure in investigations into Russian efforts to infiltrate American conservative political organizations; particularly the National Rifle Association. Torshin served in the Russian Federation Council (upper house of parliament) from 2001 to 2015; including a term as acting chairman; before being appointed to the Central Bank. He cultivated extensive ties with the NRA over more than a decade; attending multiple annual meetings and building relationships with senior NRA officials and American conservative politicians. His protege and alleged agent; Maria Butina; was arrested in July 2018 and pleaded guilty to acting as an unregistered foreign agent of the Russian government; specifically working to establish "back channel" communications between the Russian government and American political figures through the NRA and the National Prayer Breakfast. The U.S. Treasury Department sanctioned Torshin in April 2018 under authorities targeting senior Russian officials; freezing any assets he held in U.S. jurisdiction. Spanish anti-corruption prosecutor Jose Grinda Gonzalez had previously identified Torshin in a 2013 investigation as having ties to the Taganskaya organized crime group in Russia; including alleged money laundering through Spanish properties and banks. An intercepted phone call placed Torshin at a birthday celebration for a convicted Russian mob boss. The FBI investigated the NRA for potentially acting as a conduit for Russian money to flow into the 2016 presidential election; though the NRA denied knowingly accepting foreign funds. Senate Finance Committee investigators documented that Torshin and Butina had attempted to arrange a back-channel meeting between then-candidate Donald Trump and Vladimir Putin during the 2016 campaign.',
    birthDate: 'January 17; 1953',
    birthPlace: 'Saratov; Russian SFSR; Soviet Union',
    education: ['All-Union Correspondence Finance and Economics Institute'],
    affiliations: [
      { name: 'Central Bank of Russia', role: 'Deputy Governor (2015-2018)', type: 'agency' },
      { name: 'Russian Federation Council', role: 'Senator; Acting Chairman (2001-2015)', type: 'agency' },
      { name: 'National Rifle Association', role: 'Lifetime Member; cultivated NRA leadership relationships', type: 'organization' },
      { name: 'United Russia Party', role: 'Senior Member', type: 'organization' },
    ],
    controversies: [
      'U.S. Treasury sanctioned under Executive Order 13661 targeting senior Russian government officials (April 2018)',
      'Spanish prosecutor Jose Grinda identified Torshin as having ties to the Taganskaya organized crime group; intercepted calls placed him at a Russian mob boss birthday celebration',
      'His protege Maria Butina arrested and convicted as an unregistered Russian foreign agent (2018); she specifically worked through NRA to establish political back channels',
      'Senate Finance Committee investigation documented that Torshin and Butina attempted to arrange a Trump-Putin back-channel meeting during the 2016 presidential campaign',
      'FBI investigated whether Russian money was funneled through the NRA to influence the 2016 election; NRA received $30.3 million in contributions from "politically active nonprofits" in 2016',
      'Spanish National Court investigated Torshin for money laundering tied to Russian organized crime; though charges were eventually dropped due to jurisdictional issues',
      'Attended multiple NRA annual meetings from 2011 onwards; building relationships with senior NRA officials including then-president David Keene and board members',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russia-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'January 17; 1953', event: 'Born in Saratov; Russian SFSR' },
      { date: '2001', event: 'Enters Russian Federation Council as senator from Mari El Republic' },
      { date: '2011', event: 'Begins attending NRA annual meetings; cultivating American conservative contacts' },
      { date: '2013', event: 'Spanish prosecutor Jose Grinda identifies Torshin as linked to Taganskaya organized crime group in money laundering investigation' },
      { date: '2015', event: 'Appointed Deputy Governor of the Central Bank of Russia' },
      { date: '2015-2016', event: 'Maria Butina; working under Torshin\'s direction; infiltrates American conservative organizations and arranges meetings with political figures' },
      { date: 'May 2016', event: 'Torshin attends NRA convention; briefly encounters Donald Trump Jr. at a dinner' },
      { date: 'November 2016', event: 'Attempts to arrange a Trump-Putin meeting through NRA contacts; rebuffed by Trump transition team' },
      { date: 'April 6; 2018', event: 'U.S. Treasury sanctions Torshin; freezing any American assets' },
      { date: 'July 15; 2018', event: 'Maria Butina arrested in Washington D.C. on charges of acting as an unregistered Russian foreign agent' },
      { date: 'December 2018', event: 'Butina pleads guilty; cooperates with prosecutors; details Torshin\'s role in directing her activities' },
      { date: 'April 2019', event: 'Butina sentenced to 18 months in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alexander Torshin', url: 'https://en.wikipedia.org/wiki/Alexander_Torshin', date: '' },
      { title: 'U.S. Treasury OFAC: Torshin Sanctions', url: 'https://home.treasury.gov/news/press-releases/sm0338', date: '2018' },
      { title: 'Senate Finance Committee: NRA-Russia Investigation', url: 'https://www.finance.senate.gov', date: '2019' },
      { title: 'DOJ: Maria Butina Plea Agreement', url: 'https://www.justice.gov/opa/pr/russian-national-pleads-guilty-conspiracy', date: '2018' },
    ],
    aliases: ['Alexander Porfiryevich Torshin'],
    knownAssociates: [
      { name: 'Maria Butina', relationship: 'Protege and unregistered Russian agent who acted under his direction to infiltrate NRA and U.S. conservative organizations', href: '/entities/individuals/maria-butina' },
    ],
  },



  'anthony-scaramucci': {
    name: 'Anthony Scaramucci',
    title: 'White House Communications Director (11 Days); SkyBridge Capital Founder',
    role: 'Financier; Political Figure; Former White House Communications Director',
    riskLevel: 'low',
    description: 'Anthony Scaramucci is an American financier and political figure who served as White House Communications Director for just 11 days in July 2017; making his tenure one of the shortest in American political history. A Harvard Law School graduate; Scaramucci founded SkyBridge Capital in 2005; a fund of hedge funds firm that managed approximately $12.3 billion in assets at its peak. He was a bundler and fundraiser for multiple presidential campaigns; initially supporting Barack Obama in 2008 before shifting to Mitt Romney in 2012 and eventually becoming a prominent Trump supporter and fundraiser in 2016. Scaramucci was appointed White House Communications Director on July 21; 2017; but was removed on July 31 after just 11 days following an obscenity-laden phone call with New Yorker reporter Ryan Lizza in which he attacked then-White House Chief of Staff Reince Priebus (calling him a "paranoid schizophrenic") and chief strategist Steve Bannon in vulgar terms. His wife filed for divorce days after his appointment; reportedly due to his political activities. Scaramucci had previously been investigated by the SEC regarding SkyBridge Capital\'s investment in the Skybridge Opportunity Zone Fund; though no charges resulted. In January 2017; he agreed to sell SkyBridge to a Chinese conglomerate; HNA Group; a deal that was later abandoned under regulatory scrutiny over potential national security concerns. He later became one of Trump\'s most vocal critics; publicly breaking with the president in August 2019 and calling him "unstable" and unfit for office.',
    birthDate: 'January 6; 1964',
    birthPlace: 'Long Island; New York; USA',
    education: ['Tufts University; BA Economics (1986)', 'Harvard Law School; JD (1989)'],
    affiliations: [
      { name: 'SkyBridge Capital', role: 'Founder and Managing Partner (2005-present)', type: 'corporation' },
      { name: 'White House', role: 'Communications Director (July 21-31; 2017)', type: 'agency' },
      { name: 'Goldman Sachs', role: 'Former Vice President', type: 'corporation' },
    ],
    controversies: [
      'Served as White House Communications Director for only 11 days; removed after obscenity-laden phone call with reporter attacking fellow White House officials',
      'Called Chief of Staff Reince Priebus a "paranoid schizophrenic" and made vulgar comments about Steve Bannon in on-the-record New Yorker interview',
      'Agreed to sell SkyBridge Capital to Chinese conglomerate HNA Group (January 2017); deal collapsed under national security scrutiny from CFIUS',
      'Became vocal Trump critic in August 2019; called the president "unstable" and compared him to a "nuclear meltdown" after previously being a top fundraiser and defender',
      'SkyBridge Capital invested client money in the Bayou Hedge Fund Group; which turned out to be a $450 million Ponzi scheme run by Samuel Israel III',
      'Wife Deidre Ball filed for divorce days after his White House appointment; reportedly due to his political activities and absence during birth of their son',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'January 6; 1964', event: 'Born on Long Island; New York' },
      { date: '1989', event: 'Graduates from Harvard Law School' },
      { date: '1989-1996', event: 'Works at Goldman Sachs; rises to Vice President' },
      { date: '2005', event: 'Founds SkyBridge Capital; a fund of hedge funds' },
      { date: '2016', event: 'Becomes major fundraiser and surrogate for Donald Trump presidential campaign' },
      { date: 'January 2017', event: 'Agrees to sell SkyBridge Capital to Chinese conglomerate HNA Group; deal later collapses' },
      { date: 'July 21; 2017', event: 'Appointed White House Communications Director' },
      { date: 'July 27; 2017', event: 'Expletive-laden phone call with New Yorker reporter Ryan Lizza published; attacks Priebus and Bannon' },
      { date: 'July 31; 2017', event: 'Removed as Communications Director after 11 days; new Chief of Staff John Kelly demands his firing' },
      { date: 'August 2019', event: 'Publicly breaks with Trump; calls him unfit for office and begins actively opposing his reelection' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anthony Scaramucci', url: 'https://en.wikipedia.org/wiki/Anthony_Scaramucci', date: '' },
      { title: 'New Yorker: Anthony Scaramucci Called Me to Unload', url: 'https://www.newyorker.com/news/ryan-lizza/anthony-scaramucci-called-me-to-unload-about-white-house-leakers', date: '2017' },
    ],
    aliases: ['The Mooch'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Former employer; initially top fundraiser; later became vocal Trump critic', href: '/entities/individuals/donald-trump' },
    ],
  },






















 'alvin-bragg': {
 name: 'Alvin Bragg',
 title: 'Manhattan District Attorney',
 role: 'Prosecutor, elected official',
 riskLevel: 'medium',
 description: 'Alvin Leonard Bragg Jr. is the District Attorney of New York County (Manhattan), making history as the first Black person and first person of color to hold the position. He became internationally prominent for bringing the first-ever criminal indictment against a former U.S. president when he charged Donald Trump with 34 counts of falsifying business records.',
 education: ['Harvard University, BA 1995', 'Harvard Law School, JD 1999'],
 affiliations: [
 ],
 controversies: [
 'Brought the first-ever criminal indictment against a former U.S. president, charging Donald Trump with 34 felony counts of falsifying business records in March 2023',
 'Criticized by predecessor Cyrus Vance Jr. supporters for initially pausing the Trump Organization investigation upon taking office in January 2022',
 'Two senior prosecutors resigned in protest after Bragg paused the Trump investigation, publicly questioning his commitment to the case',
 'Trump and Republican allies accused Bragg of politically motivated prosecution and weaponization of the justice system',
 'Trump was convicted on all 34 counts on May 30, 2024, making it the first criminal conviction of a former U.S. president',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-01-01', event: 'Sworn in as Manhattan District Attorney' },
 { date: '2022-02-23', event: 'Two senior prosecutors resign over pause in Trump investigation' },
 { date: '2023-03-30', event: 'Grand jury votes to indict Donald Trump on 34 felony counts' },
 { date: '2024-04-15', event: 'People v. Trump trial begins in Manhattan Criminal Court' },
 { date: '2024-05-30', event: 'Jury convicts Trump on all 34 counts of falsifying business records' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Manhattan DA Office: Indictment of Donald J. Trump', url: 'https://www.manhattanda.org/da-bragg-announces-34-count-felony-trial-conviction-of-donald-j-trump/', date: '2024-05-30' },
 { title: 'New York Times: Bragg Profile', url: 'https://www.nytimes.com/2021/11/02/nyregion/alvin-bragg-manhattan-da.html', date: '2021-11-02' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Defendant in People v. Trump', href: '/entities/individuals/donald-trump' },
 { name: 'Allen Weisselberg', relationship: 'Key witness in Trump Organization prosecution', href: '/entities/individuals/allen-weisselberg' },
 { name: 'Michael Cohen', relationship: 'Star witness in Trump hush money trial', href: '/entities/individuals/michael-cohen' },
 ],
 },

  'aileen-cannon': {
    name: 'Aileen Cannon',
    title: 'U.S. District Judge; Dismissed Trump Classified Documents Case',
    role: 'Federal Judge; Southern District of Florida',
    riskLevel: 'medium',
    description: 'Aileen Mercedes Cannon is a United States District Judge for the Southern District of Florida who became one of the most controversial judicial figures in America after being assigned the federal classified documents case against former President Donald Trump. Nominated by Trump in May 2020 and confirmed by the Senate in November 2020 during the lame-duck period after Trump lost the presidential election; Cannon was randomly assigned to preside over Special Counsel Jack Smith\'s prosecution of Trump for allegedly retaining classified national defense documents at Mar-a-Lago after leaving office. From the outset; her handling of the case drew sharp criticism from legal scholars across the political spectrum. In August 2022; she granted Trump\'s request for a special master to review the seized documents; a decision that was unanimously overturned by the 11th Circuit Court of Appeals in a ruling joined by two Trump-appointed judges who called her order "a radical reordering of our caselaw." Throughout 2023 and 2024; she delayed the trial repeatedly through procedural rulings that legal analysts described as unprecedented in their favorability toward the defendant. In July 2024; she dismissed the entire case; ruling that Special Counsel Jack Smith\'s appointment was unconstitutional; a sweeping ruling that contradicted decades of precedent and the findings of multiple other federal courts that had upheld the special counsel statute. The Department of Justice appealed. Before the classified documents case; Cannon had minimal trial experience; having presided over only a handful of cases in her brief time on the bench. Her Federalist Society membership and the circumstances of her nomination during the lame-duck period attracted scrutiny; as did her refusal to recuse herself despite the apparent conflict of presiding over a case involving the president who appointed her.',
    birthDate: '1981',
    birthPlace: 'Cali; Colombia',
    education: ['Duke University; BA', 'University of Michigan Law School; JD (2007)'],
    affiliations: [
      { name: 'U.S. District Court; Southern District of Florida', role: 'District Judge (2020-present)', type: 'agency' },
      { name: 'Federalist Society', role: 'Member', type: 'organization' },
    ],
    controversies: [
      'Granted Trump special master request in August 2022; unanimously overturned by 11th Circuit in ruling that called her order "a radical reordering of our caselaw"',
      'Repeatedly delayed Trump classified documents trial through procedural rulings widely criticized by legal scholars as unprecedented',
      'Dismissed the entire classified documents case in July 2024; ruling Special Counsel Jack Smith\'s appointment was unconstitutional; contradicting decades of precedent',
      'Refused to recuse herself despite presiding over a case involving the president who nominated her to the bench during the lame-duck period',
      'Confirmed to lifetime federal judgeship in November 2020 during lame-duck session after Trump lost the election; one of several last-minute judicial appointments',
      'Had minimal trial experience before being assigned one of the most consequential federal cases in American history',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Trump Classified Documents', slug: 'trump-classified-documents', severity: 'critical' },
    ],
    timeline: [
      { date: '1981', event: 'Born in Cali; Colombia' },
      { date: '2007', event: 'Graduates from University of Michigan Law School' },
      { date: '2007-2008', event: 'Law clerk for Judge Steven Colloton; U.S. Court of Appeals for the Eighth Circuit' },
      { date: '2009-2012', event: 'Assistant U.S. Attorney; Southern District of Florida' },
      { date: 'May 2020', event: 'Nominated to federal bench by President Trump' },
      { date: 'November 2020', event: 'Confirmed by Senate 56-21 during lame-duck session after Trump\'s election loss' },
      { date: 'August 2022', event: 'Assigned Trump classified documents case; grants special master request' },
      { date: 'December 2022', event: '11th Circuit unanimously reverses her special master order' },
      { date: 'June 2023', event: 'Trump indicted by grand jury on 37 felony counts related to classified documents' },
      { date: '2023-2024', event: 'Issues series of procedural rulings delaying trial indefinitely' },
      { date: 'July 15; 2024', event: 'Dismisses entire case; ruling Special Counsel appointment unconstitutional' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Aileen Cannon', url: 'https://en.wikipedia.org/wiki/Aileen_Cannon', date: '' },
      { title: '11th Circuit: Trump v. United States (Special Master Reversal)', url: 'https://www.ca11.uscourts.gov', date: '2022' },
    ],
    aliases: ['Aileen Mercedes Cannon'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Nominated her to bench; later presided over his classified documents case', href: '/entities/individuals/donald-trump' },
      { name: 'Jack Smith', relationship: 'Special Counsel whose prosecution she dismissed', href: '/entities/individuals/jack-smith' },
    ],
  },






















  'alina-habba': {
    name: 'Alina Habba',
    title: 'Trump Personal Attorney; Counselor to the President',
    role: 'Attorney; Trump Legal Spokesperson; Counselor to the President',
    riskLevel: 'low',
    description: 'Alina Habba is an American attorney who became one of former President Donald Trump\'s most visible legal representatives and political surrogates. She rose from relative obscurity as a New Jersey personal injury and family law attorney to become a central figure in Trump\'s legal defense and political operation. Habba represented Trump in the E. Jean Carroll defamation case; where she was widely criticized for her courtroom performance. In the Carroll trial; a federal jury found Trump liable for sexual abuse and defamation; awarding Carroll $5 million in May 2023 and an additional $83.3 million in a subsequent defamation-only trial in January 2024. Judge Lewis Kaplan repeatedly admonished Habba for courtroom conduct issues and procedural missteps. In the $83.3 million case; the jury\'s massive verdict was seen partly as a response to Habba\'s aggressive and dismissive approach during trial. She was also sanctioned $1 million by a federal judge in the case of Coral Ridge Ministries Media Inc.; for filing a "frivolous" lawsuit against 22 defendants on Trump\'s behalf; with the judge finding she had failed to conduct basic legal research before filing. Despite these setbacks; Habba became one of Trump\'s most trusted legal advisors and political surrogates; appearing frequently on cable news to defend him. In 2025; she was appointed Counselor to the President in the Trump White House; a senior advisory role. She is the managing partner of Habba Madaio & Associates LLP in Bedminster; New Jersey; near Trump\'s golf club.',
    birthDate: 'November 18; 1984',
    birthPlace: 'Summit; New Jersey; USA',
    education: ['Lehigh University; BA', 'Widener University School of Law; JD'],
    affiliations: [
      { name: 'Habba Madaio & Associates LLP', role: 'Managing Partner', type: 'corporation' },
      { name: 'White House', role: 'Counselor to the President (2025-present)', type: 'agency' },
    ],
    controversies: [
      'Represented Trump in E. Jean Carroll case where jury found Trump liable for sexual abuse and defamation; awarding $5 million (May 2023) and $83.3 million in second trial (January 2024)',
      'Sanctioned $1 million by federal judge for filing "frivolous" lawsuit against 22 defendants on Trump\'s behalf without conducting basic legal research',
      'Repeatedly admonished by Judge Lewis Kaplan for courtroom conduct issues and procedural errors during Carroll trials',
      'Legal community criticized her qualifications for handling high-stakes federal litigation; as her prior experience was primarily in New Jersey personal injury and family law',
      'Appointed Counselor to the President despite lack of policy or governmental experience; raising questions about qualification for senior White House advisory role',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'November 18; 1984', event: 'Born in Summit; New Jersey' },
      { date: '2010', event: 'Graduates from Widener University School of Law' },
      { date: '2021', event: 'Begins representing Donald Trump in multiple legal matters' },
      { date: 'May 2023', event: 'E. Jean Carroll jury finds Trump liable for sexual abuse and defamation; awards $5 million' },
      { date: 'January 2024', event: 'Second Carroll jury awards $83.3 million in defamation damages' },
      { date: '2023', event: 'Sanctioned $1 million for filing frivolous lawsuit on Trump\'s behalf' },
      { date: '2025', event: 'Appointed Counselor to the President in the Trump White House' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alina Habba', url: 'https://en.wikipedia.org/wiki/Alina_Habba', date: '' },
      { title: 'Reuters: Carroll v. Trump Verdict', url: 'https://www.reuters.com', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Client and employer; became his primary legal spokesperson and advisor', href: '/entities/individuals/donald-trump' },
    ],
  },






















  'arthur-engoron': {
    name: 'Arthur Engoron',
    title: 'New York Supreme Court Justice; Presided Over Trump Civil Fraud Trial',
    role: 'State Court Judge; New York Supreme Court',
    riskLevel: 'low',
    description: 'Arthur F. Engoron is a Justice of the New York Supreme Court who presided over the landmark civil fraud trial brought by New York Attorney General Letitia James against Donald Trump; the Trump Organization; and Trump\'s adult sons. In September 2023; before the trial even began; Engoron issued a summary judgment ruling finding Trump liable for persistent fraud; determining that Trump and his organization had systematically inflated the value of assets on financial statements by billions of dollars for over a decade to obtain favorable loan terms; insurance rates; and tax benefits. The valuations included absurd claims such as valuing Trump\'s Mar-a-Lago estate at up to $739 million when county assessors valued it at approximately $18-27 million; and claiming Trump\'s personal apartment in Trump Tower was 30;000 square feet when it was actually 10;996 square feet. After a non-jury bench trial lasting from October 2023 through January 2024; Engoron issued a 92-page ruling in February 2024 ordering Trump to pay $354.9 million in disgorgement (later increased to over $450 million with interest); barring Trump from serving as an officer or director of any New York corporation for three years; and barring his sons Donald Jr. and Eric from similar roles for two years. Engoron also ordered the dissolution of several Trump corporate entities. Trump and his attorneys attacked Engoron throughout the trial; with Trump calling him a "rogue judge" and posting attacks on social media. Engoron imposed a gag order on Trump after Trump made a disparaging social media post about Engoron\'s law clerk; and fined Trump $15;000 for violating the order. Trump filed an appeal. Before the Trump case; Engoron was a relatively obscure jurist appointed to the bench in 2003 after two decades of legal practice.',
    birthDate: '1952',
    birthPlace: 'New York; New York; USA',
    education: ['New York University School of Law; JD'],
    affiliations: [
      { name: 'New York Supreme Court', role: 'Justice (2003-present)', type: 'agency' },
    ],
    controversies: [
      'Found Trump liable for persistent fraud in summary judgment; ruling Trump Organization inflated asset values by billions over more than a decade',
      'Ordered Trump to pay $354.9 million in disgorgement (grew to over $450 million with interest) in February 2024',
      'Barred Trump from serving as officer or director of any New York corporation for three years',
      'Ordered dissolution of several Trump corporate entities',
      'Imposed gag order on Trump after social media attacks on his law clerk; fined Trump $15;000 for violating the order',
      'Attacked by Trump as a "rogue judge"; Trump and his attorneys characterized the proceedings as politically motivated',
      'Required to have security detail after receiving threats related to the Trump case',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Trump Organization Fraud', slug: 'trump-organization-fraud', severity: 'high' },
    ],
    timeline: [
      { date: '1952', event: 'Born in New York City' },
      { date: '2003', event: 'Appointed to the New York Supreme Court bench' },
      { date: 'September 2023', event: 'Issues summary judgment finding Trump liable for persistent fraud; determining asset valuations were systematically inflated' },
      { date: 'October 2023', event: 'Non-jury bench trial begins; Trump; Trump Organization; Donald Jr.; and Eric Trump as defendants' },
      { date: 'November 2023', event: 'Imposes gag order after Trump posts disparaging attack on his law clerk; fines Trump $15;000 for violations' },
      { date: 'January 2024', event: 'Trial concludes after approximately 40 days of testimony' },
      { date: 'February 16; 2024', event: 'Issues 92-page ruling ordering $354.9 million in disgorgement; corporate dissolutions; and officer/director bans' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Arthur Engoron', url: 'https://en.wikipedia.org/wiki/Arthur_Engoron', date: '' },
      { title: 'New York AG: People v. Trump Ruling', url: 'https://ag.ny.gov/press-release/2024/attorney-general-james-wins-landmark-victory-fraud-case-against-donald-trump', date: '2024' },
    ],
    aliases: ['Arthur F. Engoron'],
    knownAssociates: [
      { name: 'Letitia James', relationship: 'NY Attorney General who brought the civil fraud case he presided over', href: '/entities/individuals/letitia-james' },
      { name: 'Donald Trump', relationship: 'Defendant in civil fraud case; found liable for persistent fraud', href: '/entities/individuals/donald-trump' },
    ],
  },





















  'aras-agalarov': {
    name: 'Aras Agalarov',
    title: 'Azerbaijani-Russian Oligarch; Crocus Group; Trump-Russia Connection',
    role: 'Billionaire Real Estate Developer; Crocus Group Founder',
    riskLevel: 'high',
    description: 'Aras Iskenderovich Agalarov is an Azerbaijani-Russian billionaire and founder of the Crocus Group; one of Russia\'s largest commercial real estate and entertainment conglomerates. He became a central figure in the Trump-Russia investigation due to his role in facilitating connections between the Trump family and Russian government-linked individuals. In November 2013; Agalarov partnered with Trump to bring the Miss Universe pageant to Moscow; hosting it at the Agalarov family\'s Crocus City Hall. During the trip; Trump and Agalarov discussed building a Trump Tower Moscow; and Trump reportedly stayed at Agalarov\'s property. The business relationship between the families deepened; with Agalarov\'s pop star son Emin becoming close with Donald Trump Jr. In June 2016; Emin\'s publicist Rob Goldstone emailed Donald Trump Jr. on behalf of the Agalarovs; offering damaging information about Hillary Clinton that he described as "part of Russia and its government\'s support for Mr. Trump." This email led directly to the infamous June 9; 2016 Trump Tower meeting where Trump Jr.; Jared Kushner; and Paul Manafort met with Russian lawyer Natalia Veselnitskaya; Russian-American lobbyist Rinat Akhmetshin; and others. The Mueller investigation extensively examined the Agalarov family\'s role as intermediaries between Russian interests and the Trump campaign. Aras Agalarov received the "Order of Honor" from Vladimir Putin in 2013; indicating a close relationship with the Kremlin. He was subpoenaed by the Senate Judiciary Committee but; being a Russian citizen; never testified. Forbes estimated his net worth at approximately $2.1 billion. In March 2024; the Crocus City Hall complex was the site of a devastating terrorist attack by ISIS-K that killed 145 people.',
    birthDate: 'November 8; 1955',
    birthPlace: 'Baku; Azerbaijan SSR; Soviet Union',
    education: [],
    affiliations: [
      { name: 'Crocus Group', role: 'Founder and President', type: 'corporation' },
      { name: 'Russian Government', role: 'Recipient of Order of Honor from Putin (2013)', type: 'agency' },
    ],
    controversies: [
      'Hosted 2013 Miss Universe pageant in Moscow; facilitating Trump\'s relationship with Russian business and political interests',
      'His son Emin\'s publicist Rob Goldstone arranged the June 2016 Trump Tower meeting offering "dirt" on Clinton described as "part of Russia and its government\'s support for Mr. Trump"',
      'Mueller investigation examined Agalarov family as key intermediaries between Russian government interests and the Trump campaign',
      'Received Order of Honor from Vladimir Putin (2013); indicating close Kremlin ties',
      'Subpoenaed by Senate Judiciary Committee but never testified; remaining outside U.S. jurisdiction',
      'Crocus Group received billions in Russian government contracts; critics allege favoritism from Putin administration',
      'Discussed building Trump Tower Moscow with Trump during 2013 Miss Universe trip; deal never completed',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russia-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'November 8; 1955', event: 'Born in Baku; Azerbaijan SSR' },
      { date: '1989', event: 'Founds Crocus Group in Moscow' },
      { date: '2013', event: 'Receives Order of Honor from Vladimir Putin' },
      { date: 'November 2013', event: 'Partners with Trump to host Miss Universe pageant at Crocus City Hall in Moscow; Trump discusses Trump Tower Moscow deal' },
      { date: 'June 3; 2016', event: 'Son Emin\'s publicist Rob Goldstone emails Trump Jr. offering damaging Clinton information from Russian government' },
      { date: 'June 9; 2016', event: 'Trump Tower meeting takes place between Trump campaign officials and Russian government-linked individuals; arranged through Agalarov family connections' },
      { date: '2017', event: 'Mueller investigation examines Agalarov role in Trump-Russia connections' },
      { date: '2017', event: 'Subpoenaed by Senate Judiciary Committee; does not appear' },
      { date: 'March 22; 2024', event: 'ISIS-K terrorist attack at Crocus City Hall kills 145 people' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Aras Agalarov', url: 'https://en.wikipedia.org/wiki/Aras_Agalarov', date: '' },
      { title: 'Mueller Report: Volume I', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
      { title: 'Senate Judiciary Committee: Trump Tower Meeting Investigation', url: 'https://www.judiciary.senate.gov', date: '2017' },
    ],
    aliases: ['Aras Iskenderovich Agalarov'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Business partner for 2013 Miss Universe pageant in Moscow; discussed Trump Tower Moscow', href: '/entities/individuals/donald-trump' },
      { name: 'Donald Trump Jr.', relationship: 'Close relationship through Emin Agalarov; Trump Jr. attended Trump Tower meeting arranged by Agalarov family', href: '/entities/individuals/donald-trump-jr' },
    ],
  },



  'anatoli-samochornov': {
    name: 'Anatoli Samochornov',
    title: 'Russian-American Translator at June 2016 Trump Tower Meeting',
    role: 'Translator; State Department Contractor',
    riskLevel: 'low',
    description: 'Anatoli Samochornov is a Russian-born American translator and former State Department contractor who attended the June 9; 2016 Trump Tower meeting as the interpreter for Russian lawyer Natalia Veselnitskaya. The meeting; arranged by publicist Rob Goldstone on behalf of the Agalarov family; brought together Donald Trump Jr.; Jared Kushner; and Paul Manafort with Veselnitskaya and other Russian-connected individuals. Samochornov testified before the Mueller grand jury and the Senate Judiciary Committee about what occurred during the meeting. He stated that Veselnitskaya primarily discussed the Magnitsky Act and Russian adoption policy rather than providing promised opposition research on Hillary Clinton. His testimony corroborated accounts that the meeting was brief and that the Trump campaign officials appeared disappointed by its content. Samochornov had previously done contract translation work for the U.S. State Department and was hired by Veselnitskaya specifically for the Trump Tower meeting because of his professional translation credentials.',
    education: [],
    affiliations: [
      { name: 'U.S. Department of State', role: 'Contract Translator', type: 'agency' },
    ],
    controversies: [
      'Attended the June 9; 2016 Trump Tower meeting as interpreter for Russian lawyer Natalia Veselnitskaya',
      'Testified before Mueller grand jury and Senate Judiciary Committee about the meeting\'s content',
      'Stated Veselnitskaya discussed Magnitsky Act sanctions rather than Clinton opposition research',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russia-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'June 9; 2016', event: 'Attends Trump Tower meeting as interpreter for Natalia Veselnitskaya' },
      { date: '2017', event: 'Testifies before Senate Judiciary Committee about the meeting' },
      { date: '2017-2018', event: 'Testifies before Mueller grand jury' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Senate Judiciary Committee: Trump Tower Meeting Transcripts', url: 'https://www.judiciary.senate.gov', date: '2017' },
      { title: 'Mueller Report: Volume I', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Natalia Veselnitskaya', relationship: 'Hired as her interpreter for Trump Tower meeting', href: '/entities/individuals/natalia-veselnitskaya' },
    ],
  },





















  'adam-kinzinger': {
    name: 'Adam Kinzinger',
    title: 'Former Republican Congressman; January 6th Committee Member; Trump Impeachment Vote',
    role: 'Former U.S. Representative (IL-16); Air Force Veteran; January 6th Committee Member',
    riskLevel: 'low',
    description: 'Adam Daniel Kinzinger is a former Republican U.S. Representative from Illinois who served from 2011 to 2023. An Air Force veteran who flew combat missions in Iraq and Afghanistan; Kinzinger became one of the most prominent Republican critics of Donald Trump and one of only two Republican members of the House Select Committee investigating the January 6th attack on the Capitol. He was one of ten House Republicans who voted to impeach Trump for incitement of insurrection in January 2021; a vote that effectively ended his political career within the Republican Party. Kinzinger served as a lieutenant colonel in the Air National Guard; flying RC-26 surveillance aircraft and KC-135 tankers in Iraq; Afghanistan; and along the southern U.S. border. On the January 6th Committee; he played a prominent role in public hearings; particularly in questioning witnesses about Trump\'s actions during the insurrection and the pressure campaign to overturn the 2020 election results. His participation on the committee led to death threats against him and his family; including threats against his wife and newborn child; from Trump supporters. The Republican Party censured him in February 2022 for his committee participation. Rather than face a difficult primary in a redrawn district; Kinzinger chose not to seek reelection in 2022. He became a CNN contributor after leaving Congress.',
    birthDate: 'February 27; 1978',
    birthPlace: 'Kankakee; Illinois; USA',
    education: ['Illinois State University; BA Political Science (2000)'],
    affiliations: [
      { name: 'U.S. House of Representatives', role: 'Representative; Illinois 16th District (2011-2023)', type: 'agency' },
      { name: 'U.S. Air Force / Air National Guard', role: 'Lieutenant Colonel; combat pilot', type: 'agency' },
      { name: 'January 6th Select Committee', role: 'Member (2021-2023)', type: 'agency' },
    ],
    controversies: [
      'One of ten House Republicans to vote for Trump\'s second impeachment for incitement of insurrection (January 2021)',
      'Served on January 6th Select Committee as one of only two Republican members; leading to censure by Republican National Committee',
      'Received death threats against himself; his wife; and newborn child from Trump supporters for his anti-Trump stance',
      'Censured by RNC in February 2022 for participation in January 6th Committee; RNC called the investigation "persecution of ordinary citizens"',
      'Did not seek reelection in 2022 after redistricting made his district unwinnable in a Republican primary',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'January 6 Investigation', slug: 'january-6-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'February 27; 1978', event: 'Born in Kankakee; Illinois' },
      { date: '2000', event: 'Commissioned in U.S. Air Force' },
      { date: '2003-2008', event: 'Flies combat missions in Iraq and Afghanistan' },
      { date: '2010', event: 'Elected to U.S. House from Illinois 11th District (later redistricted to 16th)' },
      { date: 'January 13; 2021', event: 'Votes to impeach Trump for incitement of insurrection' },
      { date: 'July 2021', event: 'Appointed to January 6th Select Committee by Speaker Pelosi' },
      { date: 'February 2022', event: 'Censured by Republican National Committee' },
      { date: 'January 2023', event: 'Leaves Congress; becomes CNN contributor' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Kinzinger', url: 'https://en.wikipedia.org/wiki/Adam_Kinzinger', date: '' },
      { title: 'January 6th Committee: Final Report', url: 'https://www.govinfo.gov/collection/january-6th-committee-final-report', date: '2022' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Liz Cheney', relationship: 'Fellow Republican on January 6th Committee; both faced party retaliation', href: '/entities/individuals/liz-cheney' },
    ],
  },

  'andy-biggs': {
    name: 'Andy Biggs',
    title: 'Republican Congressman; Freedom Caucus Chairman; January 6th Subpoena Target',
    role: 'U.S. Representative (AZ-5); Former Arizona State Senate President; Freedom Caucus Chair',
    riskLevel: 'medium',
    description: 'Andrew Steven Biggs is a Republican U.S. Representative from Arizona\'s 5th congressional district; serving since 2017. Before entering federal politics; he served in the Arizona State Senate from 2003 to 2017; including as State Senate President from 2013 to 2017; after famously winning a $10 million Publishers Clearing House sweepstakes in 1993 that helped fund his political career. Biggs became chairman of the House Freedom Caucus in 2020 and is one of the most conservative members of Congress. He was deeply involved in efforts to overturn the 2020 presidential election results; objecting to certification of electoral votes from Arizona and Pennsylvania on January 6; 2021. Stop the Steal organizer Ali Alexander publicly stated in a since-deleted video that Biggs; along with Representatives Paul Gosar and Mo Brooks; helped him organize the January 6 rally at the Ellipse. The January 6th Select Committee subpoenaed Biggs in May 2022; citing evidence he had communicated with rally organizers and White House officials about plans to challenge the election on January 6. Biggs refused to comply with the subpoena. Text messages revealed he had communicated with Mark Meadows about alternate electors and challenging certification. He also contacted Arizona House Speaker Rusty Bowers pressuring him to decertify the state\'s election results. Biggs has been a vocal opponent of immigration; climate legislation; and government spending; and has pushed for the impeachment of DHS Secretary Alejandro Mayorkas and the defunding of the FBI.',
    birthDate: 'November 7; 1958',
    birthPlace: 'Tucson; Arizona; USA',
    education: ['Brigham Young University; BA (1982)', 'University of Arizona; MA (1986)', 'University of Arizona; JD (1984)'],
    affiliations: [
      { name: 'U.S. House of Representatives', role: 'Representative; Arizona 5th District (2017-present)', type: 'agency' },
      { name: 'House Freedom Caucus', role: 'Chairman (2020-2022)', type: 'organization' },
      { name: 'Arizona State Senate', role: 'State Senator; President (2003-2017)', type: 'agency' },
    ],
    controversies: [
      'Ali Alexander (Stop the Steal organizer) publicly named Biggs as one of three congressmen who helped him plan the January 6 rally at the Ellipse',
      'Subpoenaed by January 6th Select Committee in May 2022; refused to comply; committee cited evidence of communications with rally organizers and White House staff',
      'Objected to certification of 2020 electoral votes from Arizona and Pennsylvania on January 6; 2021',
      'Text messages to Mark Meadows revealed discussions about alternate electors and challenging certification',
      'Pressured Arizona House Speaker Rusty Bowers to decertify Arizona\'s 2020 election results; Bowers testified about the calls before the January 6th Committee',
      'Won $10 million Publishers Clearing House sweepstakes in 1993; which funded his early political career',
      'Led effort to impeach DHS Secretary Alejandro Mayorkas; called for defunding the FBI after Mar-a-Lago search',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'January 6 Investigation', slug: 'january-6-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: 'November 7; 1958', event: 'Born in Tucson; Arizona' },
      { date: '1993', event: 'Wins $10 million Publishers Clearing House sweepstakes' },
      { date: '2003', event: 'Elected to Arizona State Senate' },
      { date: '2013', event: 'Becomes Arizona State Senate President' },
      { date: '2016', event: 'Elected to U.S. House of Representatives from Arizona 5th District' },
      { date: '2020', event: 'Becomes chairman of the House Freedom Caucus' },
      { date: 'January 6; 2021', event: 'Objects to certification of Arizona and Pennsylvania electoral votes; Ali Alexander names him as January 6 rally organizer' },
      { date: 'May 2022', event: 'Subpoenaed by January 6th Select Committee; refuses to comply' },
      { date: 'June 2022', event: 'Rusty Bowers testifies before Jan 6 Committee about pressure from Biggs and others to decertify Arizona results' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andy Biggs', url: 'https://en.wikipedia.org/wiki/Andy_Biggs', date: '' },
      { title: 'January 6th Committee: Final Report', url: 'https://www.govinfo.gov/collection/january-6th-committee-final-report', date: '2022' },
      { title: 'ABC News: Ali Alexander says three GOP congressmen helped plan Jan. 6 rally', url: 'https://abcnews.go.com/US/ali-alexander-gop-congressmen-helped-plan-jan-rally/story', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ali Alexander', relationship: 'Stop the Steal organizer who named Biggs as helping plan January 6 rally', href: '/entities/individuals/ali-alexander' },
      { name: 'Paul Gosar', relationship: 'Fellow Arizona Republican congressman also named by Ali Alexander as January 6 rally planner', href: '/entities/individuals/paul-gosar' },
      { name: 'Mark Meadows', relationship: 'Trump White House Chief of Staff; exchanged texts about alternate electors', href: '/entities/individuals/mark-meadows' },
    ],
  },






















  'amy-berman-jackson': {
    name: 'Amy Berman Jackson',
    title: 'U.S. District Judge; Presided Over Roger Stone and Paul Manafort Cases',
    role: 'U.S. District Judge; District of Columbia',
    riskLevel: 'low',
    description: 'Amy Berman Jackson is a United States District Judge for the District of Columbia; appointed by President Barack Obama in 2011. She became one of the most consequential federal judges in cases arising from Robert Mueller\'s Special Counsel investigation and related prosecutions. Jackson presided over the criminal trial of Roger Stone; who was convicted on seven felony counts including witness tampering; obstruction; and lying to Congress about his contacts with WikiLeaks during the 2016 election. She also handled the criminal case against Paul Manafort (Trump\'s former campaign chairman) in the D.C. jurisdiction; where she revoked his bail and sent him to jail after finding he had tampered with witnesses while under house arrest. She oversaw the guilty plea and cooperation agreement of Rick Gates; Manafort\'s longtime business partner. Jackson imposed a gag order on Roger Stone in February 2019 after Stone posted an image on Instagram showing crosshairs near her photograph; she found the post threatening but declined to revoke his bail. She sentenced Stone to 40 months in prison in February 2020; after the DOJ controversially intervened to recommend a lighter sentence than career prosecutors had sought; prompting all four prosecutors to withdraw from the case. Trump subsequently commuted Stone\'s sentence in July 2020 and later issued a full pardon. Before her appointment to the bench; Jackson spent nearly two decades in private practice at Trout & Richards LLP and served as an assistant U.S. attorney in the District of Columbia.',
    birthDate: '1954',
    birthPlace: 'New York; New York; USA',
    education: ['Harvard University; BA (1976)', 'Harvard Law School; JD (1979)'],
    affiliations: [
      { name: 'U.S. District Court for the District of Columbia', role: 'District Judge (2011-present)', type: 'agency' },
      { name: 'U.S. Attorney\'s Office; District of Columbia', role: 'Assistant U.S. Attorney (1980-1986)', type: 'agency' },
    ],
    controversies: [
      'Imposed gag order on Roger Stone after he posted Instagram image showing crosshairs near her photograph; found the post threatening but did not revoke bail',
      'Sentenced Roger Stone to 40 months in prison for seven felony counts; DOJ leadership controversially intervened to seek lighter sentence; all four career prosecutors withdrew in protest',
      'Revoked Paul Manafort\'s bail and sent him to jail after finding he had tampered with witnesses while on house arrest',
      'Trump publicly criticized Jackson on social media during the Stone and Manafort cases; raising concerns about judicial independence and intimidation',
      'Stone\'s 40-month sentence was effectively nullified when Trump commuted it in July 2020 and later issued a full pardon in December 2020',
      'Presided over several other politically sensitive cases including civil challenges to Trump administration FOIA compliance',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Mueller Investigation', slug: 'mueller-investigation', severity: 'critical' },
    ],
    timeline: [
      { date: '1954', event: 'Born in New York; New York' },
      { date: '1979', event: 'Graduates from Harvard Law School' },
      { date: '1980', event: 'Joins U.S. Attorney\'s Office in D.C. as Assistant U.S. Attorney' },
      { date: 'March 2011', event: 'Nominated to U.S. District Court by President Obama' },
      { date: 'September 2015', event: 'Manafort case assigned to Jackson in D.C. jurisdiction' },
      { date: 'June 15; 2018', event: 'Revokes Paul Manafort\'s bail and orders him jailed for witness tampering while on house arrest' },
      { date: 'February 15; 2019', event: 'Issues gag order on Roger Stone after Instagram post showing crosshairs near her image' },
      { date: 'November 15; 2019', event: 'Roger Stone convicted on all seven felony counts at trial' },
      { date: 'February 20; 2020', event: 'Sentences Stone to 40 months after DOJ intervention controversy; rebukes both Stone and DOJ leadership' },
      { date: 'July 10; 2020', event: 'Trump commutes Stone\'s sentence before he reports to prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Amy Berman Jackson', url: 'https://en.wikipedia.org/wiki/Amy_Berman_Jackson', date: '' },
      { title: 'DOJ: United States v. Roger Jason Stone Jr.', url: 'https://www.justice.gov/archives/sco/case/united-states-v-roger-jason-stone-jr', date: '2019' },
      { title: 'NPR: Roger Stone Sentenced To Over 3 Years In Prison', url: 'https://www.npr.org/2020/02/20/807648749', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Roger Stone', relationship: 'Defendant; convicted on seven felony counts in Jackson\'s courtroom', href: '/entities/individuals/roger-stone' },
      { name: 'Paul Manafort', relationship: 'Defendant; bail revoked by Jackson for witness tampering', href: '/entities/individuals/paul-manafort' },
      { name: 'Rick Gates', relationship: 'Defendant who pleaded guilty and cooperated; case overseen by Jackson', href: '/entities/individuals/rick-gates' },
    ],
  },





















  'aj-delgado': {
    name: 'A.J. Delgado',
    title: 'Trump Campaign Senior Advisor; Conservative Commentator; Whistleblower on Internal Campaign Dynamics',
    role: 'Former Senior Advisor; Trump 2016 Campaign; Conservative Political Commentator',
    riskLevel: 'low',
    description: 'A.J. Delgado is a conservative political commentator and attorney who served as a senior advisor on Donald Trump\'s 2016 presidential campaign; focusing on Hispanic outreach and media strategy. During the presidential transition; she had a relationship with Jason Miller; Trump\'s incoming White House Communications Director; and became pregnant with his child. When the relationship became public in December 2016; Miller withdrew from his White House appointment. Delgado was subsequently sidelined from the transition and never received a promised administration position. The ensuing custody battle between Delgado and Miller became public and acrimonious; with Delgado alleging Miller had secretly given a woman an abortion pill without her knowledge during a separate affair; an allegation Miller denied. Delgado has been vocal about what she describes as mistreatment by the Trump inner circle after the scandal; and has spoken publicly about sexism and retaliation within the campaign apparatus. Before the Trump campaign; Delgado was a regular contributor to conservative media; writing for Breitbart and appearing on Fox News. She holds a law degree from the University of Miami.',
    birthDate: '',
    birthPlace: 'Miami; Florida; USA',
    education: ['University of Miami; JD'],
    affiliations: [
      { name: 'Donald J. Trump for President', role: 'Senior Advisor; Hispanic outreach and media (2016)', type: 'organization' },
    ],
    controversies: [
      'Relationship with Jason Miller during Trump transition led to his withdrawal from White House Communications Director role and her sidelining from the administration',
      'Protracted public custody battle with Jason Miller over their son born in 2017',
      'Alleged that Jason Miller secretly administered an abortion pill to another woman during a separate affair; allegation Miller denied',
      'Publicly accused Trump transition team of sexism and retaliation after she was denied promised administration position',
      'Has been outspoken critic of how Trump\'s inner circle handled the fallout; describing a pattern of protecting male staffers while punishing women',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: '2016', event: 'Joins Trump 2016 campaign as senior advisor for Hispanic outreach and media' },
      { date: 'November 2016', event: 'Relationship with Jason Miller during presidential transition' },
      { date: 'December 2016', event: 'Miller withdraws from White House Communications Director role after affair becomes public' },
      { date: '2017', event: 'Son born; custody battle with Jason Miller begins' },
      { date: '2018', event: 'Goes public with allegations about internal Trump campaign mistreatment and sexism' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: A.J. Delgado', url: 'https://en.wikipedia.org/wiki/A.J._Delgado', date: '' },
      { title: 'Splinter: The Story of A.J. Delgado, Jason Miller, and the Trump Transition', url: 'https://splinternews.com', date: '2018' },
    ],
    aliases: ['AJ Delgado'],
    knownAssociates: [
      { name: 'Jason Miller', relationship: 'Former romantic partner; Trump Communications Director who withdrew over affair; custody dispute', href: '/entities/individuals/jason-miller' },
    ],
  },





















  'andrew-wheeler': {
    name: 'Andrew Wheeler',
    title: 'Former EPA Administrator; Coal Lobbyist Turned Environmental Regulator',
    role: 'Former EPA Administrator; Former Coal Industry Lobbyist; Former Senate Staffer',
    riskLevel: 'high',
    description: 'Andrew R. Wheeler is a former Administrator of the United States Environmental Protection Agency who served from February 2019 to January 2021; having served as acting administrator since July 2018 following the resignation of Scott Pruitt. Wheeler\'s appointment was widely criticized as a textbook case of regulatory capture; he had spent the previous eight years as a coal industry lobbyist at Faegre Baker Daniels; where his primary client was Murray Energy Corporation; the largest private coal company in America; owned by Robert Murray; a major Trump donor and aggressive climate change denier. Before lobbying; Wheeler spent 14 years working for Senator James Inhofe; the Senate\'s most prominent climate change skeptic; serving as his chief counsel on the Senate Environment and Public Works Committee. As EPA Administrator; Wheeler systematically rolled back Obama-era environmental regulations; he replaced the Clean Power Plan with the far weaker Affordable Clean Energy rule; weakened mercury and air toxics standards; rolled back methane emission regulations for the oil and gas industry; loosened coal ash disposal rules; weakened fuel efficiency standards for automobiles; and narrowed which waterways and wetlands receive federal protection under the Clean Water Act. Environmental groups documented over 100 environmental rollbacks during the Trump administration; many under Wheeler\'s direct authority. Despite his background; Wheeler was generally seen as a more effective deregulator than his predecessor Pruitt; accomplishing more rollbacks while generating fewer personal ethics scandals.',
    birthDate: 'January 18; 1964',
    birthPlace: 'Dayton; Ohio; USA',
    education: ['Case Western Reserve University; BA English (1986)', 'Washington University in St. Louis; JD (1990)', 'George Washington University; MBA (2005)'],
    affiliations: [
      { name: 'Environmental Protection Agency', role: 'Administrator (2019-2021); Acting Administrator (2018-2019)', type: 'agency' },
      { name: 'Faegre Baker Daniels', role: 'Lobbyist; representing coal and energy clients (2009-2017)', type: 'corporation' },
      { name: 'Murray Energy Corporation', role: 'Primary lobbying client while at Faegre Baker Daniels', type: 'corporation' },
      { name: 'Senate Environment and Public Works Committee', role: 'Chief Counsel under Senator James Inhofe (2003-2009)', type: 'agency' },
    ],
    controversies: [
      'Spent 8 years as coal industry lobbyist for Murray Energy before being appointed to lead the EPA; a textbook example of regulatory capture',
      'Replaced Obama\'s Clean Power Plan with far weaker Affordable Clean Energy rule; projected to result in up to 1;400 additional premature deaths per year',
      'Weakened mercury and air toxics standards; finding that the health benefits of regulating mercury did not justify the costs',
      'Rolled back methane emission regulations for oil and gas industry; removed requirement for companies to detect and fix methane leaks',
      'Loosened coal ash disposal rules; allowing unlined storage ponds that environmentalists warned would contaminate groundwater',
      'Narrowed Clean Water Act protections under Navigable Waters Protection Rule; removing federal protections from millions of acres of wetlands and ephemeral streams',
      'Primary lobbying client Robert Murray (Murray Energy) had given Trump an "Action Plan" for rolling back environmental regulations; Wheeler implemented many items on the list',
      'Met with former lobbying client Murray Energy at least four times in his first months as acting EPA chief while rolling back regulations that benefited the coal industry',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'January 18; 1964', event: 'Born in Dayton; Ohio' },
      { date: '1990', event: 'Graduates from Washington University School of Law' },
      { date: '1991-2003', event: 'Works at EPA as career staff member in Office of Pollution Prevention and Toxics' },
      { date: '2003-2009', event: 'Serves as chief counsel to Senator James Inhofe on Senate Environment and Public Works Committee' },
      { date: '2009-2017', event: 'Works as lobbyist at Faegre Baker Daniels; primary client Murray Energy Corporation' },
      { date: 'July 9; 2018', event: 'Becomes acting EPA Administrator after Scott Pruitt resigns amid ethics scandals' },
      { date: 'February 28; 2019', event: 'Confirmed as EPA Administrator by Senate on 52-47 vote' },
      { date: 'June 2019', event: 'Finalizes Affordable Clean Energy rule replacing Clean Power Plan' },
      { date: 'September 2019', event: 'Rolls back methane emission regulations for oil and gas industry' },
      { date: 'January 20; 2021', event: 'Leaves EPA when Biden administration takes office' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew R. Wheeler', url: 'https://en.wikipedia.org/wiki/Andrew_R._Wheeler', date: '' },
      { title: 'NYT: The Coal Lobbyist Running the E.P.A.', url: 'https://www.nytimes.com/2018/07/05/climate/andrew-wheeler-epa.html', date: '2018' },
      { title: 'ProPublica: Exposed; The EPA Under Trump', url: 'https://www.propublica.org/series/the-epa-under-trump', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Scott Pruitt', relationship: 'Predecessor as EPA Administrator who resigned amid ethics scandals', href: '/entities/individuals/scott-pruitt' },
      { name: 'Robert Murray', relationship: 'Murray Energy CEO; Wheeler\'s primary lobbying client; gave Trump environmental rollback "Action Plan"', href: '/entities/individuals/robert-murray' },
    ],
  },



  'andrew-badolato': {
    name: 'Andrew Badolato',
    title: 'We Build the Wall Fraud Conspirator; Pleaded Guilty to Wire Fraud and Money Laundering',
    role: 'Convicted Fraudster; Former We Build the Wall Board Member; Venture Capitalist',
    riskLevel: 'high',
    description: 'Andrew Badolato is a Florida-based venture capitalist and one of four defendants indicted in August 2020 for the "We Build the Wall" fraud scheme alongside Steve Bannon; Brian Kolfage; and Timothy Shea. The scheme defrauded hundreds of thousands of donors who contributed over $25 million to an online crowdfunding campaign that promised 100% of donations would go toward building a wall on the U.S.-Mexico border. In reality; the defendants siphoned hundreds of thousands of dollars for personal use; routing money through a nonprofit and shell companies to conceal the theft. Badolato served on the board of the nonprofit "We Build the Wall; Inc." and helped structure the financial arrangements that enabled the fraud; including creating fake invoices and vendor agreements to disguise personal payments. Kolfage used the funds for a boat; luxury SUV; cosmetic surgery; jewelry; and personal expenses. Bannon received over $1 million through a nonprofit he controlled. Badolato pleaded guilty to conspiracy to commit wire fraud and conspiracy to commit money laundering in April 2022. He was sentenced to 36 months in federal prison. Notably; Steve Bannon was pardoned by President Trump on January 20; 2021; before his federal trial; but Badolato; Kolfage; and Shea were not pardoned and faced the full consequences of prosecution. Bannon was later convicted on separate state charges for the same scheme in New York.',
    birthDate: '',
    birthPlace: 'Florida; USA',
    education: [],
    affiliations: [
      { name: 'We Build the Wall; Inc.', role: 'Board member; helped structure fraudulent financial arrangements', type: 'organization' },
    ],
    controversies: [
      'Indicted in August 2020 alongside Steve Bannon; Brian Kolfage; and Timothy Shea for defrauding donors in $25M+ "We Build the Wall" crowdfunding campaign',
      'Created fake invoices and vendor agreements to disguise personal payments from funds donors believed were going to border wall construction',
      'Pleaded guilty to conspiracy to commit wire fraud and conspiracy to commit money laundering in April 2022',
      'Sentenced to 36 months in federal prison; unlike co-defendant Bannon who was pardoned by Trump',
      'Helped route donor money through shell companies and a nonprofit to conceal theft from hundreds of thousands of donors',
    ],
    charges: [
      { charge: 'Conspiracy to commit wire fraud', status: 'Pleaded guilty; April 2022', date: '2020-08-20' },
      { charge: 'Conspiracy to commit money laundering', status: 'Pleaded guilty; April 2022', date: '2020-08-20' },
    ],
    relatedInvestigations: [
      { title: 'We Build the Wall Fraud', slug: 'we-build-the-wall-fraud', severity: 'high' },
    ],
    timeline: [
      { date: 'December 2018', event: '"We Build the Wall" GoFundMe campaign launched by Brian Kolfage; raises over $25 million from donors' },
      { date: '2019', event: 'Badolato helps structure financial arrangements through nonprofit and shell companies to siphon donor funds' },
      { date: 'August 20; 2020', event: 'Indicted alongside Steve Bannon; Brian Kolfage; and Timothy Shea for wire fraud and money laundering conspiracy' },
      { date: 'January 20; 2021', event: 'Steve Bannon pardoned by Trump in his final hours in office; Badolato; Kolfage; and Shea not pardoned' },
      { date: 'April 2022', event: 'Pleads guilty to conspiracy to commit wire fraud and conspiracy to commit money laundering' },
      { date: '2022', event: 'Sentenced to 36 months in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DOJ: Leaders of "We Build the Wall" Online Fundraising Campaign Charged with Defrauding Donors', url: 'https://www.justice.gov/usao-sdny/pr/leaders-we-build-wall-online-fundraising-campaign-charged-defrauding-hundreds', date: '2020' },
      { title: 'Wikipedia: We Build the Wall', url: 'https://en.wikipedia.org/wiki/We_Build_the_Wall', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Steve Bannon', relationship: 'Co-defendant in We Build the Wall fraud; pardoned by Trump; later convicted on state charges', href: '/entities/individuals/steve-bannon' },
      { name: 'Brian Kolfage', relationship: 'Co-defendant; launched the GoFundMe campaign; used funds for personal luxury purchases', href: '/entities/individuals/brian-kolfage' },
    ],
  },

 'amy-coney-barrett': {
 name: 'Amy Coney Barrett',
 title: 'Supreme Court Justice; Rushed Confirmation After RBG Death',
 role: 'Supreme Court Associate Justice; Former 7th Circuit Judge',
 riskLevel: 'medium',
 description: 'Amy Coney Barrett is an Associate Justice of the United States Supreme Court; nominated by Donald Trump and confirmed on October 26; 2020; just eight days before the presidential election. Her confirmation was the most rushed in modern history; completing in just 30 days from nomination to confirmation; a stark contrast to Republicans\' refusal to even hold hearings for Merrick Garland 237 days before the 2016 election. Barrett is a devout Catholic and former member of People of Praise; a charismatic Christian community where women were assigned "handmaids" as spiritual advisors. She clerked for Justice Antonin Scalia and taught at Notre Dame Law School. On the Court; Barrett has been a reliable conservative vote; joining the majority in Dobbs v. Jackson Women\'s Health Organization (2022) which overturned Roe v. Wade after nearly 50 years; eliminating the federal constitutional right to abortion. She also sided with the majority in striking down affirmative action in Students for Fair Admissions v. Harvard (2023) and in expanding gun rights in New York State Rifle & Pistol Association v. Bruen (2022). Ethics concerns emerged when it was revealed she failed to disclose speaking engagements and travel funded by conservative organizations; and her participation in a case involving a company linked to her father\'s former employer Shell Oil.',
 birthDate: 'January 28; 1972',
 birthPlace: 'New Orleans; Louisiana; USA',
 education: ['Rhodes College; BA English Literature; 1994', 'Notre Dame Law School; JD; 1997'],
 affiliations: [
 { name: 'United States Supreme Court', role: 'Associate Justice (2020-present)', type: 'agency' },
 { name: 'U.S. Court of Appeals; 7th Circuit', role: 'Judge (2017-2020)', type: 'agency' },
 { name: 'Notre Dame Law School', role: 'Professor (2002-2017)', type: 'organization' },
 { name: 'People of Praise', role: 'Member of charismatic Christian covenant community', type: 'organization' },
 ],
 controversies: [
 'Confirmed to Supreme Court just 8 days before 2020 election in most rushed confirmation in modern history; 30 days from nomination to vote',
 'Republican Senate refused to hold hearings for Merrick Garland 237 days before 2016 election but rammed Barrett through 30 days before 2020 election',
 'Member of People of Praise; charismatic Christian group where women were assigned "handmaids" as spiritual guides',
 'Joined majority in Dobbs v. Jackson (2022) overturning Roe v. Wade and eliminating federal abortion rights after nearly 50 years',
 'Joined majority striking down affirmative action in Students for Fair Admissions v. Harvard (2023)',
 'Failed to disclose speaking engagements and travel funded by conservative legal organizations',
 'Participated in case involving company linked to her father\'s former employer Shell Oil without recusal',
 'During confirmation denied having a judicial "agenda" despite decades of conservative legal advocacy and Federalist Society connections',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 28; 1972', event: 'Born in New Orleans; Louisiana' },
 { date: '1997', event: 'Graduates first in class from Notre Dame Law School' },
 { date: '1998-1999', event: 'Clerks for Justice Antonin Scalia on the Supreme Court' },
 { date: '2002', event: 'Joins Notre Dame Law School faculty' },
 { date: 'November 2017', event: 'Confirmed to 7th Circuit Court of Appeals by Senate' },
 { date: 'September 18; 2020', event: 'Justice Ruth Bader Ginsburg dies; creating Supreme Court vacancy' },
 { date: 'September 26; 2020', event: 'Trump nominates Barrett to Supreme Court' },
 { date: 'October 26; 2020', event: 'Confirmed 52-48 in party-line vote; 8 days before presidential election' },
 { date: 'June 24; 2022', event: 'Joins majority in Dobbs v. Jackson overturning Roe v. Wade' },
 { date: 'June 29; 2023', event: 'Joins majority striking down affirmative action' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate confirmation proceedings and voting records', url: 'https://www.senate.gov', date: '2020' },
 ],
 aliases: ['ACB'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Nominated Barrett to Supreme Court in rushed pre-election confirmation', href: '/entities/individuals/donald-trump' },
 { name: 'Mitch McConnell', relationship: 'Senate Majority Leader who blocked Garland but rushed Barrett confirmation', href: '/entities/individuals/mitch-mcconnell' },
 ],
 },


 'augusto-pinochet': {
 name: 'Augusto José Ramón Pinochet Ugarte',
 title: 'Former Chilean Dictator',
 role: 'US-Backed Dictator, Mass Murderer, Torturer',
 riskLevel: 'critical',
 description: 'Augusto Pinochet was a Chilean general who seized power in a US-backed coup on September 11, 1973, overthrowing democratically elected socialist president Salvador Allende. His 17-year military dictatorship murdered over 3,200 people, tortured 40,000+, and forced 200,000 into exile. The CIA actively supported his coup and subsequent regime. He implemented brutal repression while imposing Chicago School economic"shock therapy."He died in 2006 without facing justice for his crimes against humanity.',
 birthDate: 'November 25, 1915',
 birthPlace: 'Valparaíso, Chile',
 deathDate: 'December 10, 2006',
 netWorth: '$28 million (hidden accounts discovered after death)',
 education: ['Chilean Military Academy (1933-1936)', 'Chilean War Academy'],
 affiliations: [
 { name: 'Chilean Military Government', role: 'President/Dictator (1973-1990)', type: 'agency' },
 { name: 'Chilean Army', role: 'Commander-in-Chief (1973-1998)', type: 'agency' },
 { name: 'DINA (Chilean Secret Police)', role: 'Creator and Director', type: 'agency' },
 { name: 'Operation Condor', role: 'Participant; Regional Death Squad Network', type: 'organization' },
 { name: 'CIA', role: 'Asset, received support for coup', type: 'agency' },
 ],
 controversies: [
 'US-BACKED COUP (September 11, 1973): CIA-supported military coup overthrew democratically elected Salvador Allende',
 'MASS MURDER: Over 3,200 people killed under his regime, including executions,"disappeared,"and deaths in custody',
 'SYSTEMATIC TORTURE: 40,000+ people tortured in detention centers including electric shock, rape, waterboarding',
 'CARAVAN OF DEATH: Death squad traveled Chile executing 75+ prisoners without trial (October 1973)',
 'OPERATION CONDOR: Participated in regional assassination network with other South American dictators',
 'DINA SECRET POLICE: Created brutal secret police responsible for thousands of disappearances',
 'LETELIER ASSASSINATION: DINA agents assassinated Orlando Letelier in Washington D.C. car bombing (1976)',
 'FORCED EXILE: 200,000+ Chileans fled the country during dictatorship',
 'ECONOMIC"SHOCK THERAPY": Imposed radical free-market policies causing mass unemployment and poverty',
 'STOLEN WEALTH: Hid $28+ million in secret foreign accounts while impoverishing country',
 'VILLA GRIMALDI: Notorious torture center where thousands were brutalized',
 'LONDON ARREST: Detained in UK 1998 under Spanish extradition request, eventually released',
 'DIED WITHOUT JUSTICE: Never convicted despite over 300 criminal charges',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(a)', description: 'Crime Against Humanity; Murder (3,200+ killed)', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(e)', description: 'Crime Against Humanity; Imprisonment (40,000+ detained)', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crime Against Humanity; Torture (systematic)', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(i)', description: 'Crime Against Humanity; Enforced Disappearance (1,200+)', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Crime Against Humanity; Persecution (political)', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(d)', description: 'Crime Against Humanity; Deportation (200,000 exiled)', category: 'International' },
 { statute: 'Geneva Conventions Common Article 3', description: 'War Crimes; Violence to persons, torture, murder', category: 'International' },
 { statute: 'Convention Against Torture Article 1', description: 'Torture as State Policy', category: 'International' },
 { statute: 'UN Declaration on Enforced Disappearance', description: 'Systematic Enforced Disappearance', category: 'International' },
 { statute: 'Chilean Criminal Code', description: 'Murder, Kidnapping, Torture (300+ charges filed)', category: 'Chile' },
 { statute: '18 U.S.C. § 2331', description: 'Letelier Assassination; International Terrorism on US Soil', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'critical' },
 { title: 'CIA Latin America Coups', slug: 'cia-coups', severity: 'critical' },
 { title: 'US-Backed Dictatorships', slug: 'us-backed-dictators', severity: 'critical' },
 { title: 'Crimes Against Humanity', slug: 'crimes-against-humanity', severity: 'critical' },
 { title: 'Kissinger War Crimes', slug: 'kissinger-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 25, 1915', event: 'Born in Valparaíso, Chile' },
 { date: '1933', event: 'Enters Chilean Military Academy' },
 { date: '1970', event: 'Salvador Allende elected president democratically' },
 { date: '1970', event: 'Nixon orders CIA to"make the economy scream"' },
 { date: '1973', event: 'Named Army Commander-in-Chief by Allende' },
 { date: 'September 11, 1973', event: 'COUP: Military seizes power, Allende dies, Pinochet takes control' },
 { date: 'October 1973', event: 'Caravan of Death executes 75+ political prisoners' },
 { date: '1974', event: 'Creates DINA secret police' },
 { date: '1974', event: 'Assumes title of"President"of military junta' },
 { date: '1975', event: 'Operation Condor coordination begins with regional dictators' },
 { date: 'September 21, 1976', event: 'DINA assassinates Orlando Letelier in Washington D.C.' },
 { date: '1980', event: 'New constitution passed in fraudulent plebiscite' },
 { date: '1988', event: 'Loses plebiscite on continued rule' },
 { date: '1990', event: 'Leaves presidency but remains Army Commander' },
 { date: '1998', event: 'Arrested in London under Spanish extradition request' },
 { date: '2000', event: 'Released from UK on health grounds' },
 { date: '2000-2006', event: 'Faces multiple prosecutions in Chile, uses health excuses' },
 { date: '2004', event: 'Secret Riggs Bank accounts discovered ($28M)' },
 { date: '2006', event: 'Stripped of immunity, placed under house arrest' },
 { date: 'December 10, 2006', event: 'Dies without conviction, Human Rights Day' },
 { date: '2023', event: '50th anniversary of coup, ongoing accountability efforts' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Chilean Truth and Reconciliation Commission (Rettig Report)', url: 'https://www.usip.org/publications/1991/02/truth-commission-chile-90', date: '1991' },
 { title: 'Valech Commission Report on Torture', url: 'https://scholar.google.com/scholar?q=Valech%20Commission%20Report%20on%20Torture', date: '2004' },
 { title: 'CIA Chile Declassified Documents', url: 'https://nsarchive.gwu.edu/project/chile-documentation-project', date: 'Various' },
 { title: 'Operation Condor Declassified Records', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB416/', date: 'Various' },
 { title: 'Letelier Assassination Documents', url: 'https://nsarchive.gwu.edu/briefing-book/chile/2016-09-20/letelier-moffitt-assassination-40th-anniversary', date: '1976-2016' },
 { title: 'UK House of Lords Pinochet Judgment', url: 'https://publications.parliament.uk/pa/ld199899/ldjudgmt/jd990324/pino1.htm', date: '1999' },
 { title: 'Pinochet Riggs Bank Investigation', url: 'https://hsgac.senate.gov/subcommittees/investigations/hearings/money-laundering-and-foreign-corruption-enforcement-and-effectiveness-of-the-patriot-act-case-study-involving-riggs-bank', date: '2004' },
 ],
 aliases: ['El General', 'The Dictator', 'Captain General'],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'US Secretary of State, authorized coup support', href: '/entities/individuals/henry-kissinger' },
 { name: 'Richard Nixon', relationship: 'US President, ordered Chile destabilization', href: '/entities/individuals/richard-nixon' },
 { name: 'Milton Friedman', relationship: 'Economic advisor,"Chicago Boys"mentor', href: '/entities/individuals/milton-friedman' },
 { name: 'Manuel Contreras', relationship: 'DINA Director, enforcer', href: '/entities/individuals/manuel-contreras' },
 { name: 'Margaret Thatcher', relationship: 'British PM, defender and ally', href: '/entities/individuals/margaret-thatcher' },
 ],
 },









































 'allen-dulles': {
 name: 'Allen Dulles',
 title: 'CIA Director (1953-1961)',
 role: 'Longest-serving CIA Director who authorized MKUltra, orchestrated coups, and later served on Warren Commission',
 riskLevel: 'critical',
 description: 'Allen Welsh Dulles served as CIA Director from 1953-1961, the longest-serving director in agency history. He authorized MKUltra mind control experiments, orchestrated coups in Iran (1953) and Guatemala (1954), launched the Bay of Pigs invasion, initiated Operation Mockingbird to control media, and expanded CIA covert operations globally. He was fired by JFK after Bay of Pigs but later served on the Warren Commission investigating Kennedy\'s assassination; an extraordinary conflict of interest.',
 birthDate: 'April 7, 1893',
 birthPlace: 'Watertown, New York',
 deathDate: 'January 29, 1969',
 education: ['Princeton University', 'George Washington University Law School'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Director (1953-1961)', type: 'agency' },
 { name: 'Office of Strategic Services', role: 'Station Chief, Bern', type: 'agency' },
 { name: 'Warren Commission', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'MKULTRA AUTHORIZATION: Dulles personally authorized the MKUltra program in 1953, approving experiments that drugged unwitting American citizens with LSD and other substances, causing permanent psychological damage and deaths.',
 'IRAN COUP (1953): Orchestrated Operation Ajax, overthrowing democratically elected Prime Minister Mohammad Mosaddegh to protect British and American oil interests. Installed the Shah, whose brutal rule led to the 1979 Iranian Revolution.',
 'GUATEMALA COUP (1954): Directed Operation PBSuccess, overthrowing democratically elected President Jacobo Árbenz to protect United Fruit Company interests. The coup triggered decades of military dictatorship and genocide.',
 'OPERATION MOCKINGBIRD: Expanded CIA infiltration of American media. Personally cultivated relationships with journalists and publishers. By the 1970s, the CIA influenced over 400 journalists.',
 'BAY OF PIGS: Assured President Kennedy the invasion would succeed. When it failed disastrously, Kennedy fired him, reportedly saying he wanted to"splinter the CIA into a thousand pieces."',
 'WARREN COMMISSION: Despite being fired by JFK and having potential motive for the assassination, Dulles was appointed to investigate Kennedy\'s murder. Critics argue he steered the investigation away from intelligence connections.',
 'UNITED FRUIT CONNECTIONS: Both Allen and his brother John Foster Dulles had extensive ties to United Fruit Company, which directly benefited from the Guatemala coup. This represented massive conflicts of interest.',
 'LEGACY OF COVERT ACTION: Dulles established the template for CIA covert operations that continues today; overthrowing governments, manipulating media, conducting experiments on citizens, and operating without accountability.',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity; Human Experimentation: MKUltra program drugged unwitting citizens, causing permanent harm and deaths', category: 'International Crime' },
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Crimes Against Humanity; Persecution: Operation Mockingbird suppressed political dissent through media manipulation', category: 'International Crime' },
 { statute: 'Rome Statute Article 8 bis', description: 'Aggression: Orchestrated coups overthrowing sovereign governments in Iran and Guatemala', category: 'International Crime' },
 { statute: '18 U.S.C. § 1111', description: 'Murder: Deaths resulting from MKUltra experiments on unwitting subjects', category: 'Violent Crime' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law: Systematic violation of citizens\' constitutional rights', category: 'Civil Rights' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States: Conspiracy to overthrow foreign governments', category: 'Conspiracy' },
 ],
 relatedInvestigations: [
 { title: 'MKUltra Mind Control', slug: 'mkultra', severity: 'critical' },
 { title: 'Operation Mockingbird', slug: 'operation-mockingbird', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 7, 1893', event: 'Born in Watertown, New York' },
 { date: '1916', event: 'Joins diplomatic service' },
 { date: '1942-1945', event: 'OSS station chief in Bern, Switzerland during WWII' },
 { date: 'February 26, 1953', event: 'Becomes CIA Director under Eisenhower' },
 { date: 'April 13, 1953', event: 'Authorizes MKUltra mind control program' },
 { date: 'August 19, 1953', event: 'Operation Ajax overthrows Mosaddegh in Iran' },
 { date: 'June 27, 1954', event: 'Operation PBSuccess overthrows Árbenz in Guatemala' },
 { date: 'Early 1950s', event: 'Expands Operation Mockingbird media infiltration' },
 { date: 'April 17, 1961', event: 'Bay of Pigs invasion fails' },
 { date: 'November 29, 1961', event: 'Fired by President Kennedy' },
 { date: '1963-1964', event: 'Serves on Warren Commission investigating JFK assassination' },
 { date: 'January 29, 1969', event: 'Dies in Washington, D.C.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Stephen Kinzer -"The Brothers"(Dulles biography)', url: 'https://www.goodreads.com/', date: '2013' },
 { title: 'David Talbot -"The Devil\'s Chessboard"', url: 'https://scholar.google.com/scholar?q=David%20Talbot%20-%22The%20Devil%27s%20Chessboard%22', date: '2015' },
 { title: 'Senate Church Committee Reports', url: 'https://www.congress.gov/', date: '1975-1976' },
 { title: 'CIA declassified MKUltra documents', url: 'https://www.cia.gov/readingroom/', date: 'Various' },
 { title: 'Warren Commission Records', url: 'https://scholar.google.com/scholar?q=Warren%20Commission%20Records', date: '1964' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Foster Dulles', relationship: 'Brother, Secretary of State who coordinated with CIA operations', href: '/entities/individuals/john-foster-dulles' },
 { name: 'Sidney Gottlieb', relationship: 'MKUltra program director', href: '/entities/individuals/sidney-gottlieb' },
 { name: 'Richard Helms', relationship: 'CIA Deputy Director', href: '/entities/individuals/richard-helms' },
 ],
 },









































 'antonin-scalia': {
 name: 'Antonin Scalia',
 title: 'Supreme Court Justice (1986-2016)',
 role: 'Conservative justice who cast deciding vote in Bush v. Gore, stopping Florida recount',
 riskLevel: 'high',
 description: 'Antonin Scalia was an influential conservative Supreme Court Justice appointed by Reagan. His most consequential decision was joining the 5-4 majority in Bush v. Gore (2000), which stopped the Florida recount and effectively decided the presidential election for George W. Bush. The decision contradicted his stated principles of federalism and judicial restraint.',
 birthDate: 'March 11, 1936',
 birthPlace: 'Trenton, New Jersey',
 deathDate: 'February 13, 2016',
 education: ['Georgetown University', 'Harvard Law School'],
 affiliations: [
 { name: 'Supreme Court of the United States', role: 'Associate Justice', type: 'agency' },
 { name: 'Federalist Society', role: 'Influential Member', type: 'organization' },
 ],
 controversies: [
 'BUSH V. GORE: Cast deciding vote to stop Florida recount, contradicting his stated federalism principles by overriding state courts',
 'FEDERALIST SOCIETY: Close ties to conservative legal network that captured federal judiciary',
 'HUNTING WITH CHENEY: Went on hunting trip with Dick Cheney while case involving Cheney was pending, refused to recuse',
 'CITIZENS UNITED: Joined decision unleashing unlimited corporate money in politics',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bush v. Gore', slug: 'bush-v-gore', severity: 'critical' },
 { title: 'Supreme Court Ethics', slug: 'scotus-ethics', severity: 'high' },
 ],
 timeline: [
 { date: 'March 11, 1936', event: 'Born in Trenton, New Jersey' },
 { date: 'September 26, 1986', event: 'Confirmed to Supreme Court' },
 { date: 'December 12, 2000', event: 'Bush v. Gore decision' },
 { date: 'February 13, 2016', event: 'Dies in Texas' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Bush v. Gore (531 U.S. 98)', url: 'https://scholar.google.com/scholar?q=Bush%20v.%20Gore%20(531%20U.S.%2098)', date: '2000' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Clarence Thomas', relationship: 'Fellow conservative justice', href: '/entities/individuals/clarence-thomas' },
 ],
 },
 'al-gore': {
 name: 'Al Gore',
 title: '45th Vice President / 2000 Election Victim',
 role: 'Won popular vote in 2000 but lost to Supreme Court decision stopping Florida recount',
 riskLevel: 'low',
 description: 'Al Gore served as Vice President under Clinton and won the popular vote in the 2000 presidential election. He would have won the Electoral College if the Florida recount had continued, but the Supreme Court stopped it in Bush v. Gore. He later became an environmental advocate, winning the Nobel Peace Prize.',
 birthDate: 'March 31, 1948',
 birthPlace: 'Washington, D.C.',
 education: ['Harvard University', 'Vanderbilt University'],
 affiliations: [
 { name: 'Executive Office of the President', role: 'Vice President (1993-2001)', type: 'agency' },
 { name: 'Democratic Party', role: '2000 Presidential Nominee', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Bill Clinton', relationship: 'President', href: '/entities/individuals/bill-clinton' },
 ],
 controversies: [
 'Lost 2000 presidential election after controversial Supreme Court decision in Bush v. Gore halted Florida recount',
 'Won Nobel Peace Prize for climate change advocacy through "An Inconvenient Truth"',
 'Brooks Brothers riot disrupted Miami-Dade recount orchestrated by Republican operatives including Roger Stone',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bush v. Gore', slug: 'bush-v-gore', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 31, 1948', event: 'Born in Washington, D.C.' },
 { date: '1993-2001', event: 'Serves as Vice President' },
 { date: 'November 7, 2000', event: 'Election too close to call' },
 { date: 'December 12, 2000', event: 'Supreme Court stops recount' },
 { date: 'December 13, 2000', event: 'Concedes election' },
 { date: '2007', event: 'Wins Nobel Peace Prize for climate work' },
 ],
 sources: [
 { title: 'Bush v. Gore (531 U.S. 98)', url: 'https://scholar.google.com/scholar?q=Bush%20v.%20Gore%20(531%20U.S.%2098)', date: '2000' },
 ],
 },
 'ahmed-chalabi': {
 name: 'Ahmed Chalabi',
 title: 'Iraqi Politician / Iraq War Architect',
 role: 'Iraqi exile who fed false intelligence to justify Iraq War invasion',
 riskLevel: 'critical',
 description: 'Ahmed Chalabi was an Iraqi exile and head of the Iraqi National Congress who provided much of the false intelligence used to justify the Iraq War, including fabricated claims about WMDs and ties to Al-Qaeda. He was a convicted embezzler in Jordan. The CIA later determined his sources were fabricators.',
 birthDate: 'October 30, 1944',
 birthPlace: 'Baghdad, Iraq',
 deathDate: 'November 3, 2015',
 education: ['MIT', 'University of Chicago'],
 affiliations: [
 { name: 'Iraqi National Congress', role: 'Founder', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Paul Wolfowitz', relationship: 'Pentagon ally', href: '/entities/individuals/paul-wolfowitz' },
 { name: 'Dick Cheney', relationship: 'Promoted his intelligence', href: '/entities/individuals/dick-cheney' },
 ],
 controversies: [
 'FALSE INTELLIGENCE: Provided fabricated claims about Iraqi WMDs',
 'CURVEBALL: His organization provided the source "Curveball "whose lies were used at UN',
 'CONVICTED EMBEZZLER: Convicted in absentia in Jordan for bank fraud',
 'IRANIAN TIES: Later accused of passing U.S. intelligence to Iran',
 ],
 charges: [
 { statute: 'Bank Fraud (Jordan)', description: 'Convicted in absentia for Petra Bank collapse', category: 'Financial Crime' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 30, 1944', event: 'Born in Baghdad' },
 { date: '1992', event: 'Founds Iraqi National Congress with CIA backing' },
 { date: '1992', event: 'Convicted in Jordan for bank fraud' },
 { date: '2002-2003', event: 'Provides false intelligence for Iraq War' },
 { date: 'November 3, 2015', event: 'Dies in Baghdad' },
 ],
 sources: [
 { title: 'Senate Intelligence Committee Report on Iraq', url: 'https://www.congress.gov/', date: '2004' },
 ],
 },
  'anne-milgram': {
    name: 'Anne Milgram',
    title: 'DEA Administrator',
    role: 'DEA head during fentanyl crisis',
    riskLevel: 'low',
    description: 'Anne Milgram is Administrator of the Drug Enforcement Administration. She leads the agency during the fentanyl crisis that has killed hundreds of thousands of Americans. The DEA faces scrutiny over its effectiveness and the failed war on drugs.',
    birthDate: '1972',
    birthPlace: 'Unknown',
    education: ['NYU School of Law'],
    affiliations: [
      { name: 'Drug Enforcement Administration', role: 'Administrator (2021-present)', type: 'agency' },
    ],
    controversies: [
      'FENTANYL CRISIS: Leads DEA during worst overdose epidemic in history',
      'WAR ON DRUGS: Questions about effectiveness of drug enforcement approach',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'War on Drugs', slug: 'war-on-drugs', severity: 'critical' },
      { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'June 2021', event: 'Confirmed as DEA Administrator' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DEA official biography', url: 'https://www.goodreads.com/', date: 'Current' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'President who appointed Milgram as DEA Administrator', href: '/entities/individuals/joe-biden' },
      { name: 'Merrick Garland', relationship: 'Attorney General who oversees DEA under Milgram\'s leadership', href: '/entities/individuals/merrick-garland' },
      { name: 'Vivek Murthy', relationship: 'Surgeon General who collaborated with Milgram on opioid crisis response', href: '/entities/individuals/vivek-murthy' },
    ],
  },





















  'archer-blood': {
    name: 'Archer Blood',
    title: 'U.S. Consul General to Dhaka',
    role: 'Diplomat who warned of genocide in Bangladesh, ignored by Nixon/Kissinger',
    riskLevel: 'low',
    description: 'Archer Blood was the U.S. Consul General in Dhaka who sent the "Blood Telegram "in April 1971, warning that Pakistan was committing genocide against Bengalis with U.S.-supplied weapons. Nixon and Kissinger ignored his warnings and punished him for speaking out.',
    birthDate: 'March 20, 1923',
    birthPlace: 'Virginia',
    deathDate: 'September 3, 2004',
    education: ['University of Virginia', 'National War College'],
    affiliations: [
      { name: 'U.S. State Department', role: 'Consul General, Dhaka', type: 'agency' },
    ],
    controversies: [
      'Sent "Blood Telegram," one of the most famous dissent cables in U.S. diplomatic history',
      'Warned of genocide in East Pakistan (Bangladesh) but was ignored by Nixon and Kissinger',
      'Was reassigned as punishment for speaking out against U.S. support for Pakistani military during 1971 genocide',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Bangladesh Genocide', slug: 'bangladesh-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: 'March 20, 1923', event: 'Born in Virginia' },
      { date: 'April 6, 1971', event: 'Sends "Blood Telegram" warning of genocide' },
      { date: '1971', event: 'Removed from Dhaka, career damaged' },
      { date: 'September 3, 2004', event: 'Dies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'The Blood Telegram (declassified)', url: 'https://scholar.google.com/scholar?q=The%20Blood%20Telegram%20(declassified)', date: '1971' },
      { title: 'Gary Bass -"The Blood Telegram"', url: 'https://scholar.google.com/scholar?q=Gary%20Bass%20-%22The%20Blood%20Telegram%22', date: '2013' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Richard Nixon', relationship: 'President whose administration ignored Blood\'s warnings about genocide in Bangladesh', href: '/entities/individuals/richard-nixon' },
      { name: 'Henry Kissinger', relationship: 'National Security Advisor who dismissed Blood\'s "Blood Telegram" warning of Pakistani genocide in East Pakistan', href: '/entities/individuals/henry-kissinger' },
    ],
  },

  'ali-khamenei': {
    name: 'Ali Khamenei',
    title: 'Supreme Leader of Iran',
    role: 'Supreme Leader (1989-Present)',
    riskLevel: 'critical',
    description: 'Supreme Leader of Iran since 1989. Controls military, judiciary, and media. Human rights abuses, support for proxy forces.',
    birthDate: 'April 19, 1939',
    birthPlace: 'Mashhad, Iran',
    education: ['Religious seminary education'],
    affiliations: [
      { name: 'Iranian Government', role: 'Supreme Leader', type: 'agency' },
      { name: 'Islamic Revolutionary Guard Corps', role: 'Commander-in-Chief', type: 'agency' },
    ],
    controversies: [
      'HUMAN RIGHTS: Systematic repression of dissent',
      'WOMEN\'S RIGHTS: Enforced hijab laws, crackdowns on protests',
      'PROXY FORCES: Supports Hezbollah, Houthis, Iraqi militias',
      'NUCLEAR PROGRAM: Uranium enrichment ambiguity',
    ],
    charges: [
      { statute: 'Crimes Against Humanity', description: 'Systematic human rights violations', category: 'International Law' },
    ],
    relatedInvestigations: [
    ],
    timeline: [
      { date: 'April 19, 1939', event: 'Born in Mashhad' },
      { date: '1981-1989', event: 'President of Iran' },
      { date: 'June 4, 1989', event: 'Becomes Supreme Leader' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ali Khamenei', url: 'https://en.wikipedia.org/wiki/Ali_Khamenei', date: '' },
      { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
      { title: 'Military Times: Ali Khamenei', url: 'https://www.militarytimes.com/', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
      { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Qasem Soleimani', relationship: 'Quds Force commander and Khamenei\'s most trusted military leader; assassinated by U.S. in 2020', href: '/entities/individuals/qasem-soleimani' },
      { name: 'Donald Trump', relationship: 'U.S. President who imposed" maximum pressure" sanctions and ordered Soleimani killing', href: '/entities/individuals/donald-trump' },
      { name: 'Mohammad Mosaddegh', relationship: 'Former PM whose 1953 CIA-backed overthrow shaped Khamenei\'s anti-Western worldview', href: '/entities/individuals/mohammad-mosaddegh' },
    ],
  },


  'andy-coulson': {
    name: 'Andy Coulson',
    title: 'Former News of the World Editor',
    role: 'Journalist, Political Advisor',
    riskLevel: 'medium',
    description: 'Edited News of the World during phone hacking period. Became Cameron\'s communications director. Convicted of phone hacking conspiracy.',
    birthDate: 'January 21, 1968',
    birthPlace: 'Wickford, Essex, England',
    education: [],
    affiliations: [
      { name: 'News of the World', role: 'Editor (2003-2007)', type: 'corporation' },
      { name: 'UK Government', role: 'Communications Director (2007-2011)', type: 'agency' },
    ],
    controversies: [
      'PHONE HACKING: Oversaw systematic phone hacking at News of the World',
      'MILLY DOWLER: Paper hacked murdered schoolgirl\'s phone under his editorship',
      'CONVICTION: Convicted of conspiracy to intercept communications',
      'PRISON: Served 5 months of 18-month sentence',
    ],
    charges: [
      { statute: 'Regulation of Investigatory Powers Act 2000', description: 'Conspiracy to intercept communications', category: 'Criminal' },
    ],
    relatedInvestigations: [
      { title: 'Phone Hacking Scandal', slug: 'phone-hacking-scandal', severity: 'high' },
    ],
    timeline: [
      { date: 'January 21, 1968', event: 'Born in Wickford, Essex' },
      { date: '2003', event: 'Becomes News of the World editor' },
      { date: '2007', event: 'Resigns, joins Cameron\'s team' },
      { date: '2011', event: 'Resigns from government amid hacking scandal' },
      { date: 'July 2014', event: 'Convicted of phone hacking conspiracy' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andy Coulson', url: 'https://en.wikipedia.org/wiki/Andy_Coulson', date: '' },
      { title: 'OpenSecrets', url: 'https://www.opensecrets.org/', date: '' },
      { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'David Cameron', relationship: 'Employer, hired as communications director', href: '/entities/individuals/david-cameron' },
      { name: 'Rebekah Brooks', relationship: 'News International colleague', href: '/entities/individuals/rebekah-brooks' },
      { name: 'Rupert Murdoch', relationship: 'Employer', href: '/entities/individuals/rupert-murdoch' },
    ],
  },


  'ali-bahrami': {
    name: 'Ali Bahrami',
    title: 'FAA Associate Administrator for Aviation Safety; Oversaw Boeing 737 MAX Certification Failures',
    role: 'FAA Associate Administrator for Aviation Safety (2017-2021)',
    riskLevel: 'high',
    description: 'Ali Bahrami served as the Federal Aviation Administration\'s Associate Administrator for Aviation Safety from 2017 to 2021; the most senior safety official in U.S. civil aviation during the Boeing 737 MAX crisis that killed 346 people. Born in Iran; Bahrami emigrated to the United States and built a career at the FAA spanning over three decades. He rose through the agency\'s ranks during a period when the FAA increasingly delegated safety certification responsibilities to the manufacturers themselves through the Organization Designation Authorization (ODA) program. Under Bahrami\'s leadership; the FAA allowed Boeing to self-certify the Maneuvering Characteristics Augmentation System (MCAS) on the 737 MAX; the system that would ultimately cause the crash of Lion Air Flight 610 on October 29; 2018 (killing all 189 aboard) and Ethiopian Airlines Flight 302 on March 10; 2019 (killing all 157 aboard). Congressional investigations by the House Transportation Committee found that FAA managers under Bahrami\'s authority overruled their own safety engineers; deferred to Boeing\'s assessments; and failed to adequately review the MCAS system\'s reliance on a single angle-of-attack sensor. The DOT Inspector General\'s office found that FAA safety oversight had been systematically weakened by delegation policies that Bahrami championed. Internal FAA emails released during congressional hearings showed FAA engineers had flagged concerns about the MAX\'s certification; but these were dismissed at the management level. Bahrami had previously served as director of the FAA\'s Transport Airplane Directorate and had close working relationships with Boeing personnel; raising questions about regulatory capture. Before the MAX crashes; Bahrami had advocated for expanding the ODA program; giving manufacturers even more authority to certify their own aircraft. After the crashes; he defended the FAA\'s certification process before Congress. He retired from the FAA in 2021.',
    birthPlace: 'Iran',
    education: ['University of Kansas; Engineering'],
    affiliations: [
      { name: 'Federal Aviation Administration', role: 'Associate Administrator for Aviation Safety (2017-2021); Director of Transport Airplane Directorate', type: 'agency' },
    ],
    controversies: [
      'Oversaw FAA\'s Organization Designation Authorization program that allowed Boeing to self-certify the 737 MAX\'s MCAS system; which caused two crashes killing 346 people',
      'House Transportation Committee investigation found FAA managers under Bahrami\'s authority overruled their own safety engineers and deferred to Boeing\'s assessments on MAX certification',
      'DOT Inspector General found systematic weakening of FAA safety oversight through delegation policies Bahrami championed',
      'Internal FAA emails showed safety engineers flagged concerns about MAX certification that were dismissed at management level during Bahrami\'s tenure',
      'Advocated for expanding the ODA program giving manufacturers more self-certification authority even before the MAX crashes',
      'Close working relationships with Boeing personnel raised regulatory capture concerns; previously served in FAA directorate with direct Boeing oversight',
      'Defended FAA\'s certification process before Congress after 346 deaths; resisted calls for systemic reform of delegation program',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '2017', event: 'Appointed FAA Associate Administrator for Aviation Safety; the agency\'s top safety position' },
      { date: 'March 2017', event: 'Boeing 737 MAX enters commercial service with FAA certification overseen by Bahrami\'s division' },
      { date: 'October 29; 2018', event: 'Lion Air Flight 610 crashes in Indonesia; killing all 189 aboard; MCAS identified as cause' },
      { date: 'November 2018', event: 'FAA issues airworthiness directive but does not ground the 737 MAX fleet' },
      { date: 'March 10; 2019', event: 'Ethiopian Airlines Flight 302 crashes; killing all 157 aboard; same MCAS failure; FAA initially refuses to ground fleet' },
      { date: 'March 13; 2019', event: 'FAA finally grounds 737 MAX after international aviation authorities act first' },
      { date: '2019-2020', event: 'Congressional hearings investigate FAA\'s certification failures; Bahrami testifies defending FAA processes' },
      { date: 'September 2020', event: 'House Transportation Committee releases report finding systemic FAA failures in MAX oversight during Bahrami\'s tenure' },
      { date: '2021', event: 'Retires from FAA after over 30 years of service' },
    ],
    socialMedia: [],
    sources: [
      { title: 'House Transportation Committee: Final Report on Boeing 737 MAX', url: 'https://transportation.house.gov/committee-activity/boeing-737-max-702702702702702702702702702702702702702702702702702702702702702702702702702702', date: '2020' },
      { title: 'DOT Inspector General: FAA Oversight of Boeing 737 MAX', url: 'https://www.oig.dot.gov', date: '2020' },
      { title: 'NYT: FAA Approved Boeing Jets While Relying on Company', url: 'https://www.nytimes.com/2019/07/27/business/boeing-737-max-faa.html', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [],
  },



  'akhil-johri': {
    name: 'Akhil Johri',
    title: 'United Technologies CFO; Oversaw Raytheon Merger Creating Defense Giant',
    role: 'Chief Financial Officer; United Technologies Corporation (2015-2020)',
    riskLevel: 'medium',
    description: 'Akhil Johri served as Executive Vice President and Chief Financial Officer of United Technologies Corporation (UTC) from 2015 to 2020; overseeing the finances of one of the world\'s largest aerospace and defense conglomerates during a period of massive consolidation. Born in India; Johri earned an MBA from Carnegie Mellon and rose through UTC\'s ranks after joining in 2007. He was the key financial architect of UTC\'s transformative merger with Raytheon Company in 2020; creating Raytheon Technologies (later RTX Corporation); a $74 billion defense behemoth and one of the five largest defense contractors in the world. Critics argued the merger concentrated too much defense contracting power and reduced competition for Pentagon contracts; potentially raising costs for taxpayers. During Johri\'s tenure as CFO; UTC subsidiaries faced significant legal and regulatory issues. Pratt & Whitney; UTC\'s jet engine division; was involved in a long-running dispute with the U.S. government over defective F135 engines for the F-35 Joint Strike Fighter program; the most expensive weapons system in history. UTC Aerospace Systems paid $55 million in 2012 to settle DOJ allegations of providing defective helicopter parts to the U.S. military. UTC also disclosed internal investigations into potential Foreign Corrupt Practices Act violations related to overseas operations. Johri managed UTC\'s finances through the divestiture of Otis Elevator and Carrier; separating them into independent public companies while simultaneously merging UTC\'s aerospace and defense businesses with Raytheon. He departed following the completion of the Raytheon merger in April 2020.',
    birthPlace: 'India',
    education: ['Carnegie Mellon University; Tepper School of Business; MBA', 'Indian Institute of Technology'],
    affiliations: [
      { name: 'United Technologies Corporation', role: 'Executive VP and CFO (2015-2020)', type: 'corporation' },
      { name: 'Raytheon Technologies', role: 'Key architect of UTC-Raytheon merger creating $74B defense company', type: 'corporation' },
    ],
    controversies: [
      'Architected the UTC-Raytheon merger creating a $74B defense behemoth; critics argued it concentrated too much defense contracting power and would raise Pentagon costs',
      'During his CFO tenure; UTC Aerospace Systems paid $55M to settle DOJ allegations of providing defective helicopter parts to the U.S. military',
      'UTC disclosed internal investigations into potential Foreign Corrupt Practices Act violations at overseas operations during Johri\'s financial oversight',
      'Pratt & Whitney (UTC subsidiary) involved in disputes over defective F135 engines for the F-35 program; the most expensive weapons system in history',
      'Oversaw financial engineering of simultaneous divestitures (Otis; Carrier) and mega-merger; Wall Street analysts questioned whether deals primarily benefited executives and shareholders over workers',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '2007', event: 'Joins United Technologies Corporation' },
      { date: '2012', event: 'UTC Aerospace Systems pays $55M to settle DOJ defective military parts allegations' },
      { date: '2015', event: 'Appointed Executive VP and CFO of United Technologies' },
      { date: '2019', event: 'Announces UTC-Raytheon merger; creating one of the largest defense companies in the world' },
      { date: 'April 3; 2020', event: 'UTC-Raytheon merger completes; Otis and Carrier divested as independent companies' },
      { date: '2020', event: 'Departs Raytheon Technologies following merger completion' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Raytheon Technologies', url: 'https://en.wikipedia.org/wiki/RTX_Corporation', date: '' },
      { title: 'DOJ: UTC Aerospace Systems Settlement', url: 'https://www.justice.gov', date: '2012' },
    ],
    aliases: [],
    knownAssociates: [],
  },



  'adam-smith': {
    name: 'Adam Smith',
    title: 'U.S. Representative (WA-9); Chair of House Armed Services Committee; Top Defense Industry Recipient',
    role: 'U.S. Representative for Washington\'s 9th Congressional District (1997-present); Chairman of House Armed Services Committee (2019-2023)',
    riskLevel: 'medium',
    description: 'Adam Benjamin Smith has served as the U.S. Representative for Washington\'s 9th congressional district since 1997; making him one of the longest-serving members of the House. Born in Washington; D.C.; and raised in the Seattle area; Smith earned a law degree from the University of Washington. As Chairman of the House Armed Services Committee from 2019 to 2023; Smith oversaw the annual National Defense Authorization Act and had enormous influence over Pentagon spending; weapons procurement; and military policy. During his chairmanship; the defense budget grew from approximately $738 billion to over $858 billion annually. Smith has been one of the top congressional recipients of defense industry campaign contributions; receiving millions from companies like Lockheed Martin; Boeing; Raytheon; and Northrop Grumman; all of which compete for contracts his committee directly oversees. OpenSecrets data shows the defense sector as consistently his largest donor sector. Critics including progressive Democrats and government accountability organizations have argued that Smith\'s defense industry fundraising creates inherent conflicts of interest in his oversight role. He voted to authorize the Iraq War in 2002; a vote he later expressed regret over. Smith has supported continued arms sales to Saudi Arabia during the Yemen war and has generally aligned with defense industry priorities on major weapons programs including the F-35 Joint Strike Fighter; the most expensive weapons program in history. He supported maintaining the Guantanamo Bay detention facility when progressive members pushed for its closure.',
    birthDate: 'June 15; 1965',
    birthPlace: 'Washington; D.C.; USA',
    education: ['Fordham University; BA (1987)', 'University of Washington School of Law; JD (1990)'],
    affiliations: [
      { name: 'U.S. House of Representatives', role: 'Representative for WA-9 (1997-present)', type: 'agency' },
      { name: 'House Armed Services Committee', role: 'Chairman (2019-2023); Ranking Member (2023-present)', type: 'agency' },
    ],
    controversies: [
      'One of the top congressional recipients of defense industry campaign contributions while chairing the committee that directly oversees defense contracts',
      'Voted to authorize the Iraq War in 2002; later expressed regret',
      'Supported continued arms sales to Saudi Arabia during the devastating Yemen war',
      'Oversaw defense budget increases from $738B to $858B+ during chairmanship; critics argued spending levels served defense industry donors more than national security needs',
      'Supported maintaining Guantanamo Bay detention facility against progressive calls for closure',
      'Generally aligned with defense industry priorities on major weapons programs including the troubled F-35 program',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'June 15; 1965', event: 'Born in Washington; D.C.' },
      { date: '1990', event: 'Earns law degree from University of Washington' },
      { date: '1996', event: 'Elected to U.S. House of Representatives for Washington\'s 9th district' },
      { date: 'October 2002', event: 'Votes to authorize the Iraq War' },
      { date: '2019', event: 'Becomes Chairman of House Armed Services Committee' },
      { date: '2019-2023', event: 'Oversees defense budgets exceeding $3 trillion cumulative during chairmanship' },
      { date: '2023', event: 'Becomes Ranking Member after Republicans take House majority' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Smith (politician)', url: 'https://en.wikipedia.org/wiki/Adam_Smith_(politician)', date: '' },
      { title: 'OpenSecrets: Rep. Adam Smith Donor Profile', url: 'https://www.opensecrets.org/members-of-congress/adam-smith', date: '' },
    ],
    aliases: [],
    knownAssociates: [],
  },





















  'alan-joyce': {
    name: 'Alan Joyce',
    title: 'Former Qantas CEO; Grounded Entire Fleet During Labor Dispute; Ghost Flights Scandal',
    role: 'Chief Executive Officer; Qantas Airways (2008-2023)',
    riskLevel: 'high',
    description: 'Alan Gerard Joyce AC is an Irish-Australian business executive who served as CEO of Qantas Airways from 2008 to 2023; overseeing Australia\'s national carrier through its most controversial period. Born in Dublin; Ireland; Joyce emigrated to Australia in 1996 and rose through Qantas management. In October 2011; Joyce made the extraordinary decision to ground Qantas\'s entire fleet without warning; stranding approximately 70;000 passengers worldwide in an escalation of disputes with labor unions. The lockout was the first time in Qantas\'s history that the airline had completely ceased operations. Fair Work Australia intervened to end the lockout after just two days; ordering workers back to the job. Joyce\'s most damaging scandal emerged after his departure: the Australian Competition and Consumer Commission (ACCC) filed federal court proceedings against Qantas in September 2023; alleging the airline sold tickets on more than 8;000 flights it had already decided to cancel; a practice known as "ghost flights." The ACCC alleged Qantas kept selling seats on cancelled flights for an average of more than two weeks after the cancellation decision; with some flights sold for up to 47 days post-cancellation. The case affected approximately 86;000 passengers. Qantas ultimately settled with the ACCC for $120 million AUD in penalties; one of the largest consumer law settlements in Australian history. During the COVID-19 pandemic; Qantas received $2.7 billion AUD in Australian government support while simultaneously laying off approximately 8;500 workers; outsourcing 2;000 ground handling jobs to cheaper contractors in a move the Federal Court later found to be illegal. Joyce was also pied in the face at a business event by a 70-year-old man protesting Qantas\'s support for same-sex marriage. Joyce received approximately $24 million AUD in his final year as CEO and departed the company in September 2023; two months ahead of schedule amid mounting scandals. His total remuneration during his tenure was estimated at over $125 million AUD.',
    birthDate: 'December 29; 1966',
    birthPlace: 'Dublin; Ireland',
    education: ['Trinity College Dublin; BSc Mathematics and Physics', 'Trinity College Dublin; MSc Management Science'],
    affiliations: [
      { name: 'Qantas Airways', role: 'CEO (2008-2023)', type: 'corporation' },
    ],
    controversies: [
      'Grounded Qantas\'s entire fleet without warning in October 2011; stranding 70;000 passengers worldwide during labor dispute',
      'ACCC found Qantas sold tickets on 8;000+ "ghost flights" it had already decided to cancel; affecting 86;000 passengers; resulting in $120M AUD settlement',
      'Received $2.7B AUD in government COVID support while laying off 8;500 workers and illegally outsourcing 2;000 ground handling jobs',
      'Federal Court ruled Qantas\'s outsourcing of ground handlers was illegal; motivated by desire to prevent industrial action rather than business necessity',
      'Earned approximately $24M AUD in final year and $125M+ AUD total while workers faced mass layoffs and service quality collapsed',
      'Departed two months early as CEO in September 2023 amid mounting ghost flights and outsourcing scandals',
      'Under his leadership; Qantas baggage handling performance deteriorated dramatically; with Australia\'s worst record for delayed and lost baggage',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'December 29; 1966', event: 'Born in Dublin; Ireland' },
      { date: '1996', event: 'Emigrates to Australia; joins Qantas' },
      { date: 'November 2008', event: 'Becomes CEO of Qantas Airways' },
      { date: 'October 29; 2011', event: 'Grounds entire Qantas fleet without warning; stranding 70;000 passengers globally' },
      { date: 'October 31; 2011', event: 'Fair Work Australia orders Qantas workers back; ending two-day lockout' },
      { date: '2020', event: 'Receives $2.7B AUD in COVID government support while laying off 8;500 workers' },
      { date: 'August 2021', event: 'Outsources 2;000 ground handling jobs; later ruled illegal by Federal Court' },
      { date: 'May 2023', event: 'ACCC launches investigation into ghost flights practices' },
      { date: 'September 2023', event: 'Departs as CEO two months ahead of schedule amid mounting scandals' },
      { date: 'September 2023', event: 'ACCC files federal court proceedings alleging ghost flights affecting 86;000 passengers' },
      { date: 'May 2024', event: 'Qantas settles with ACCC for $120M AUD over ghost flights' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Joyce', url: 'https://en.wikipedia.org/wiki/Alan_Joyce', date: '' },
      { title: 'ACCC: Qantas Ghost Flights Proceedings', url: 'https://www.accc.gov.au/media-release/accc-alleges-qantas-sold-tickets-for-cancelled-flights', date: '2023' },
      { title: 'ABC: Qantas Grounding', url: 'https://www.abc.net.au/news/qantas-grounding', date: '2011' },
    ],
    aliases: [],
    knownAssociates: [],
  },





















  'akbar-al-baker': {
    name: 'Akbar Al Baker',
    title: 'Former Qatar Airways CEO; Controversial Aviation Executive; Sexist Remarks',
    role: 'Chief Executive Officer; Qatar Airways Group (1997-2023); Secretary-General; Qatar National Tourism Council',
    riskLevel: 'medium',
    description: 'Akbar Al Baker served as CEO of Qatar Airways for 27 years from 1997 to 2023; transforming it from a small regional carrier into one of the world\'s largest and most awarded airlines while becoming one of the most controversial figures in global aviation. Born in Doha; Qatar; Al Baker oversaw Qatar Airways\' rapid expansion to over 150 destinations; its joining of the Oneworld alliance; and the construction of Hamad International Airport. However; his tenure was marked by repeated controversies. Al Baker was internationally condemned for sexist remarks at the 2018 IATA Annual General Meeting in Sydney; where he stated that his airline "of course" had to be run by a man because "it is a very challenging position." He had previously said women were suited only to certain roles in aviation. He was known for his volcanic temper and public verbal attacks on competitors; regulatory officials; and even his own staff. He repeatedly threatened to pull Qatar Airways out of the Oneworld alliance; publicly criticized partner airlines; and engaged in bitter feuds with rival Gulf carriers Emirates and Etihad. Qatar Airways received massive state subsidies from the Qatari government; with U.S.; European; and Australian carriers accusing the airline of receiving over $25 billion in unfair government support; distorting global aviation markets. Al Baker denied the subsidy allegations. During the 2017-2021 Saudi-led blockade of Qatar; Al Baker navigated the airline through the loss of routes to Saudi Arabia; the UAE; Bahrain; and Egypt. Qatar Airways has also faced scrutiny for labor practices; with workers in Qatar operating under the kafala sponsorship system that rights organizations compared to modern slavery. Al Baker was abruptly removed as CEO in November 2023 by the Qatari Emir; reportedly over disagreements about the airline\'s direction.',
    birthDate: '1962',
    birthPlace: 'Doha; Qatar',
    education: [],
    affiliations: [
      { name: 'Qatar Airways Group', role: 'CEO (1997-2023)', type: 'corporation' },
      { name: 'IATA Board of Governors', role: 'Board member; influential voice in global aviation policy', type: 'organization' },
    ],
    controversies: [
      'Internationally condemned for sexist remarks at 2018 IATA meeting; stating airline had to be run by a man because "it is a very challenging position"',
      'Qatar Airways accused by U.S.; European; and Australian carriers of receiving over $25B in unfair government subsidies distorting global aviation markets',
      'Known for volcanic temper; public verbal attacks on competitors; regulators; staff; and repeated threats to pull out of Oneworld alliance',
      'Labor practices at Qatar Airways and Qatari airports under kafala sponsorship system compared to modern slavery by human rights organizations',
      'Abruptly removed as CEO in November 2023 by the Qatari Emir after 27 years',
      'Engaged in bitter public feuds with Emirates; Etihad; and U.S. carriers over market access and subsidies',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '1962', event: 'Born in Doha; Qatar' },
      { date: '1997', event: 'Appointed CEO of Qatar Airways; then a small regional carrier' },
      { date: '2013', event: 'Qatar Airways joins Oneworld alliance after years of negotiations' },
      { date: '2014', event: 'Hamad International Airport opens in Doha; Qatar Airways\' purpose-built hub' },
      { date: '2015-2016', event: 'Major U.S. carriers file complaints alleging over $25B in unfair Qatari government subsidies to Qatar Airways' },
      { date: 'June 2017', event: 'Saudi-led blockade cuts Qatar Airways\' routes to Saudi Arabia; UAE; Bahrain; and Egypt' },
      { date: 'June 2018', event: 'Makes internationally condemned sexist remarks at IATA AGM in Sydney' },
      { date: 'January 2021', event: 'Saudi-led blockade ends; Qatar Airways resumes Gulf routes' },
      { date: 'November 2023', event: 'Abruptly removed as CEO by Qatari Emir after 27 years' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Akbar Al Baker', url: 'https://en.wikipedia.org/wiki/Akbar_Al_Baker', date: '' },
      { title: 'BBC: Qatar Airways Boss Sorry for Sexist Remark', url: 'https://www.bbc.com/news/business-44362943', date: '2018' },
      { title: 'Reuters: Qatar Airways CEO Removed', url: 'https://www.reuters.com/business/aerospace-defense/qatar-airways-ceo-akbar-al-baker-removed', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [],
  },



  'adnaan-stumo': {
    name: 'Adnaan Stumo',
    title: 'Victims Family',
    role: 'Lost Sister in Ethiopian 302',
    riskLevel: 'low',
    description: 'Adnaan Stumo lost his sister Samya Stumo in the Ethiopian Airlines 302 crash. The Stumo family, including parents Michael and Nadia, have been prominent advocates for Boeing accountability.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: ['Unknown'],
    affiliations: [
      { name: 'Civil Society', role: 'Activist', type: 'organization' },
    ],
    controversies: [
      'Lost family member in Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
      'Became vocal advocate for Boeing criminal prosecution and aviation safety reform',
      'Participated in congressional hearings pushing for accountability from Boeing executives',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'March 10, 2019', event: 'Lost sister in Ethiopian 302' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adnaan Stumo', url: 'https://en.wikipedia.org/wiki/Adnaan_Stumo', date: '' },
      { title: 'Associated Press: Adnaan Stumo', url: 'https://apnews.com/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Stumo', relationship: 'Father', href: '/entities/individuals/michael-stumo' },
      { name: 'Nadia Milleron', relationship: 'Mother', href: '/entities/individuals/nadia-milleron' },
    ],
  },

  'alaska-261-victims': {
    name: 'Alaska Airlines 261 Victims',
    title: 'Crash Victims',
    role: '88 Killed; January 31, 2000',
    riskLevel: 'critical',
    description: 'Alaska Airlines Flight 261 crashed off the California coast on January 31, 2000, killing all 88 people aboard. The FAA had allowed extended maintenance intervals on the jackscrew that failed. This crash exemplified FAA allowing airlines to defer safety maintenance.',
    birthDate: 'N/A',
    birthPlace: 'Various',
    education: ['N/A'],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Alaska Airlines Flight 261 crashed into Pacific Ocean on January 31, 2000, killing all 88 aboard',
      'Caused by inadequate maintenance of horizontal stabilizer jackscrew assembly',
      'Investigation revealed systemic maintenance cost-cutting that contributed to mechanical failure',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'January 31, 2000', event: 'Alaska 261 crashes, 88 killed' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alaska Airlines 261 Victims', url: 'https://en.wikipedia.org/wiki/Alaska_Airlines_261_Victims', date: '' },
      { title: 'Associated Press: Alaska Airlines 261 Victims', url: 'https://apnews.com/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Mary Schiavo', relationship: 'Aviation safety advocate who highlighted maintenance failures that caused Alaska Flight 261 crash', href: '/entities/individuals/mary-schiavo' },
      { name: 'John Cox', relationship: 'Aviation safety consultant who analyzed Alaska 261 jackscrew failure', href: '/entities/individuals/john-cox' },
    ],
  },




  'allen-stanford': {
    name: 'Allen Stanford',
    title: 'Convicted Ponzi Scheme Operator; $7 Billion Fraud; 110-Year Prison Sentence',
    role: 'Convicted Fraudster; Former Chairman of Stanford Financial Group',
    riskLevel: 'critical',
    description: 'Robert Allen Stanford is a former American-Antiguan financier serving a 110-year federal prison sentence for orchestrating a $7 billion Ponzi scheme through his Stanford Financial Group and Stanford International Bank (SIB) based in Antigua. Stanford styled himself as a Texas billionaire and cricket mogul; receiving a knighthood from the Antiguan government and insisting on being called "Sir Allen." His fraud centered on certificates of deposit (CDs) sold through SIB; which promised consistently high returns that Stanford claimed came from a diversified investment portfolio. In reality; the money was used to fund Stanford\'s lavish lifestyle; buy real estate; fund cricket tournaments; and make new payments to earlier investors. The scheme ran for over two decades before unraveling in February 2009; shortly after Bernie Madoff\'s arrest prompted increased scrutiny of high-return investment operations. The SEC filed a civil enforcement action on February 17; 2009; and Stanford was arrested by the FBI in June 2009. Investigators discovered that the SEC had received multiple warnings about Stanford\'s operations dating back to 1997 but failed to act; a failure later attributed in part to Stanford\'s massive political campaign contributions ($7 million to both parties over a decade). Stanford was convicted on 13 of 14 counts in March 2012; including fraud; conspiracy; and obstruction; and sentenced to 110 years in prison. His case is the second-largest Ponzi scheme in American history after Madoff.',
    birthDate: 'March 24; 1950',
    birthPlace: 'Mexia; Texas; USA',
    education: ['Baylor University; BA Finance (1974)'],
    affiliations: [
      { name: 'Stanford Financial Group', role: 'Founder and Chairman', type: 'corporation' },
      { name: 'Stanford International Bank', role: 'Founder; based in Antigua', type: 'corporation' },
    ],
    controversies: [
      'Orchestrated $7 billion Ponzi scheme through Stanford International Bank certificates of deposit; the second-largest Ponzi scheme in U.S. history',
      'SEC received warnings about Stanford\'s fraudulent operations as early as 1997 but failed to act for over a decade',
      'Made approximately $7 million in political campaign contributions to both parties; which may have influenced regulatory inaction',
      'Received knighthood from Antigua and styled himself "Sir Allen" while using Antiguan banking secrecy to operate fraud',
      'Used stolen investor funds to finance lavish lifestyle; real estate; and international cricket tournaments including the Stanford Super Series',
      'Convicted on 13 of 14 counts including fraud; conspiracy; and obstruction of justice in March 2012',
      'Sentenced to 110 years in federal prison; making it effectively a life sentence',
      'Approximately 18;000 investors from 113 countries were defrauded; with most losing their life savings',
    ],
    charges: [
      { charge: 'Mail fraud', status: 'Convicted; March 2012', date: '2009-06-18' },
      { charge: 'Wire fraud', status: 'Convicted; March 2012', date: '2009-06-18' },
      { charge: 'Conspiracy to commit fraud', status: 'Convicted; March 2012', date: '2009-06-18' },
      { charge: 'Obstruction of justice', status: 'Convicted; March 2012', date: '2009-06-18' },
      { charge: 'Money laundering conspiracy', status: 'Convicted; March 2012', date: '2009-06-18' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: 'March 24; 1950', event: 'Born in Mexia; Texas' },
      { date: '1980s', event: 'Founds Stanford Financial Group; begins building offshore banking operation in Antigua' },
      { date: '1997', event: 'SEC receives first warnings about Stanford\'s operations but does not investigate' },
      { date: '2006', event: 'Receives knighthood from Antigua; insists on "Sir Allen" title' },
      { date: '2008', event: 'Stanford Super Series cricket tournament; offers $20 million winner-take-all prize' },
      { date: 'February 17; 2009', event: 'SEC files civil enforcement action; charges Stanford with massive ongoing fraud' },
      { date: 'June 18; 2009', event: 'Arrested by FBI on 21-count federal indictment' },
      { date: 'March 6; 2012', event: 'Convicted on 13 of 14 counts including fraud; conspiracy; and obstruction' },
      { date: 'June 14; 2012', event: 'Sentenced to 110 years in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Allen Stanford', url: 'https://en.wikipedia.org/wiki/Allen_Stanford', date: '' },
      { title: 'DOJ: R. Allen Stanford Sentenced to 110 Years', url: 'https://www.justice.gov/opa/pr/r-allen-stanford-sentenced-110-years-prison', date: '2012' },
      { title: 'SEC: Stanford Financial Group Enforcement Action', url: 'https://www.sec.gov/litigation/litreleases/2009/lr20901.htm', date: '2009' },
    ],
    aliases: ['Robert Allen Stanford', 'Sir Allen Stanford', 'R. Allen Stanford'],
    knownAssociates: [],
  },



  'andy-jassy': {
    name: 'Andy Jassy',
    title: 'Amazon CEO; Architect of AWS; Labor Union and Antitrust Controversies',
    role: 'President and CEO; Amazon (2021-present); Former CEO of AWS',
    riskLevel: 'medium',
    description: 'Andrew Robert Jassy is the President and CEO of Amazon; succeeding founder Jeff Bezos in July 2021. Jassy is credited with building Amazon Web Services (AWS) from an internal project into the world\'s dominant cloud computing platform; which by 2024 generated over $90 billion in annual revenue and provided the majority of Amazon\'s operating profit. Under Jassy\'s leadership as CEO; Amazon has faced intensifying scrutiny on multiple fronts. The company has aggressively fought unionization efforts; the Amazon Labor Union successfully organized a Staten Island warehouse (JFK8) in April 2022; the first Amazon warehouse to unionize in the U.S.; prompting the NLRB to file multiple unfair labor practice complaints against the company. The FTC filed a landmark antitrust lawsuit against Amazon in September 2023; alleging the company used monopolistic practices to inflate prices; overcharge sellers; and stifle competition; seeking to potentially break up parts of the company. Amazon\'s worker safety record has drawn sustained criticism; with warehouse injury rates significantly above industry averages and reports of workers urinating in bottles during delivery routes due to impossible time quotas. Jassy ordered a controversial return-to-office mandate requiring corporate employees back five days per week starting January 2025; sparking employee protests. He received total compensation of approximately $29 million in 2023; while Amazon warehouse workers reported median compensation of roughly $35;000.',
    birthDate: 'January 13; 1968',
    birthPlace: 'Scarsdale; New York; USA',
    education: ['Harvard University; BA (1990)', 'Harvard Business School; MBA (1997)'],
    affiliations: [
      { name: 'Amazon', role: 'President and CEO (2021-present); built and led AWS from launch', type: 'corporation' },
    ],
    controversies: [
      'FTC filed landmark antitrust lawsuit against Amazon in September 2023; alleging monopolistic practices that inflate prices and stifle competition',
      'Amazon aggressively fought unionization at Staten Island JFK8 warehouse; NLRB filed multiple unfair labor practice complaints',
      'Amazon warehouse injury rates significantly above industry averages; reports of delivery drivers urinating in bottles due to impossible quotas',
      'Ordered five-day return-to-office mandate for corporate employees starting January 2025; sparking protests and resignations',
      'Total CEO compensation of approximately $29 million while median Amazon warehouse worker earned roughly $35;000',
      'Amazon accused of surveilling and retaliating against union organizers; including firing activist employees',
      'AWS provides cloud infrastructure to ICE and other immigration enforcement agencies; drawing employee protests',
      'Ring doorbell surveillance network raised privacy concerns; footage shared with law enforcement without warrants in some cases',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'January 13; 1968', event: 'Born in Scarsdale; New York' },
      { date: '1997', event: 'Joins Amazon after graduating from Harvard Business School' },
      { date: '2003', event: 'Pitches and begins building Amazon Web Services' },
      { date: '2006', event: 'AWS launches publicly; eventually becomes the world\'s largest cloud platform' },
      { date: 'July 5; 2021', event: 'Becomes Amazon CEO; succeeding Jeff Bezos' },
      { date: 'April 1; 2022', event: 'Amazon Labor Union wins election at Staten Island JFK8 warehouse; first successful Amazon union in U.S.' },
      { date: 'September 26; 2023', event: 'FTC files antitrust lawsuit against Amazon alleging monopolistic practices' },
      { date: 'September 2024', event: 'Announces five-day return-to-office mandate starting January 2025' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andy Jassy', url: 'https://en.wikipedia.org/wiki/Andy_Jassy', date: '' },
      { title: 'FTC: FTC Sues Amazon for Illegally Maintaining Monopoly Power', url: 'https://www.ftc.gov/news-events/news/press-releases/2023/09/ftc-sues-amazon-illegally-maintaining-monopoly-power', date: '2023' },
    ],
    aliases: ['Andrew R. Jassy'],
    knownAssociates: [
      { name: 'Jeff Bezos', relationship: 'Amazon founder; preceded Jassy as CEO', href: '/entities/individuals/jeff-bezos' },
    ],
  },





















  'adam-bowen': {
    name: 'Adam Bowen',
    title: 'JUUL Labs Co-Founder; Co-Inventor of the E-Cigarette That Addicted a Generation of Teenagers',
    role: 'JUUL Labs Co-Founder and Former Chief Technology Officer',
    riskLevel: 'high',
    description: 'Adam Bowen is an American product designer and entrepreneur who co-founded JUUL Labs with James Monsees; creating the e-cigarette device that sparked a nationwide youth vaping epidemic. Bowen and Monsees developed the JUUL device as graduate students at Stanford University\'s product design program; initially marketing it as a smoking cessation tool for adults. However; JUUL\'s sleek USB-drive-like design; high nicotine salt concentration (5% by weight; equivalent to roughly one pack of cigarettes per pod); and fruit and candy-flavored pods made it overwhelmingly popular among teenagers. By 2018; JUUL controlled over 70% of the U.S. e-cigarette market and the term "JUULing" had become synonymous with teen vaping. The FDA declared youth vaping an "epidemic" in 2018. Internal documents later revealed JUUL had marketed to youth through social media campaigns featuring young models and influencers. Altria Group (parent company of Philip Morris) invested $12.8 billion for a 35% stake in JUUL in December 2018; valuing the company at $38 billion. JUUL subsequently faced thousands of lawsuits from individuals; school districts; and state attorneys general. In June 2022; the FDA ordered JUUL pulled from the U.S. market (later stayed by court order). In September 2023; JUUL agreed to pay $462 million to settle a multistate investigation by attorneys general from 34 states and territories. The company\'s valuation collapsed from $38 billion to approximately $250 million. Bowen personally earned hundreds of millions from JUUL before its collapse.',
    birthDate: '1980',
    birthPlace: 'United States',
    education: ['Stanford University; MS Product Design (2005)'],
    affiliations: [
      { name: 'JUUL Labs', role: 'Co-founder and former Chief Technology Officer; created the JUUL e-cigarette device', type: 'corporation' },
    ],
    controversies: [
      'Co-created the JUUL e-cigarette that sparked what the FDA declared a youth vaping "epidemic" in 2018',
      'JUUL\'s sleek design; high nicotine concentration (5%); and flavored pods were overwhelmingly popular with teenagers; creating a generation of nicotine addicts',
      'Internal documents revealed JUUL marketed to youth through social media campaigns featuring young models and influencers',
      'Altria invested $12.8 billion in JUUL in 2018 at $38 billion valuation; company later collapsed to ~$250 million',
      'FDA ordered JUUL pulled from U.S. market in June 2022; order later stayed pending court review',
      'JUUL agreed to pay $462 million to settle multistate investigation by 34 attorneys general in September 2023',
      'Thousands of lawsuits filed by individuals; school districts; and state AGs over youth addiction crisis',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '2005', event: 'Begins developing e-cigarette concept with James Monsees at Stanford product design program' },
      { date: '2007', event: 'Co-founds Ploom (later PAX Labs); precursor to JUUL' },
      { date: '2015', event: 'JUUL device launched; rapidly gains market share with sleek design and nicotine salt technology' },
      { date: '2018', event: 'JUUL controls 70%+ of U.S. e-cigarette market; FDA declares youth vaping an "epidemic"' },
      { date: 'December 2018', event: 'Altria invests $12.8 billion for 35% stake; valuing JUUL at $38 billion' },
      { date: 'June 2022', event: 'FDA orders JUUL products pulled from U.S. market; later stayed by court' },
      { date: 'September 2023', event: 'JUUL agrees to $462 million multistate settlement with 34 attorneys general' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: JUUL', url: 'https://en.wikipedia.org/wiki/Juul', date: '' },
      { title: 'NYT: JUUL Agrees to Pay $462 Million to Six States and D.C.', url: 'https://www.nytimes.com/2023/04/12/health/juul-settlement-states.html', date: '2023' },
      { title: 'FDA: Youth Vaping Epidemic', url: 'https://www.fda.gov/tobacco-products/youth-and-tobacco/results-annual-national-youth-tobacco-survey', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'James Monsees', relationship: 'JUUL co-founder and co-inventor; Stanford classmate', href: '/entities/individuals/james-monsees' },
    ],
  },

  'alex-gorsky': {
    name: 'Alex Gorsky',
    title: 'Former Johnson & Johnson CEO; Opioid Crisis; Talc Cancer Lawsuits; $8.9 Billion Bankruptcy Scheme',
    role: 'Former Chairman and CEO; Johnson & Johnson (2012-2022)',
    riskLevel: 'high',
    description: 'Alex Gorsky served as Chairman and CEO of Johnson & Johnson from 2012 to 2022; overseeing the pharmaceutical and consumer products giant during some of its most controversial periods. Under Gorsky\'s leadership; J&J faced more than 40;000 lawsuits alleging its talcum powder products (including baby powder) caused ovarian cancer and mesothelioma; with internal documents revealing the company had known about asbestos contamination in its talc products dating back to the 1970s. Rather than settle the claims transparently; J&J employed the controversial "Texas Two-Step" bankruptcy maneuver in 2021; creating a subsidiary called LTL Management; transferring the talc liabilities to it; and then filing that subsidiary for bankruptcy; effectively attempting to cap payouts to cancer victims through the bankruptcy system. Federal courts rejected this scheme twice; calling it an abuse of the bankruptcy system. J&J ultimately offered an $8.9 billion settlement. Gorsky also oversaw J&J\'s role in the opioid crisis; the company was found liable in the landmark 2019 Oklahoma opioid trial for its role in fueling the epidemic through its Janssen subsidiary; which grew poppies in Tasmania and supplied raw materials to opioid manufacturers. J&J agreed to a $5 billion opioid settlement. Before becoming CEO; Gorsky was personally named in a qui tam whistleblower lawsuit alleging he participated in an illegal kickback scheme to promote the antipsychotic drug Risperdal while he was VP of sales at Janssen. J&J paid $2.2 billion to settle Risperdal marketing fraud charges. Gorsky earned over $200 million in total compensation during his tenure while the company faced tens of billions in legal liabilities from harming consumers.',
    birthDate: 'April 25; 1960',
    birthPlace: 'Fremont; Indiana; USA',
    education: ['U.S. Military Academy at West Point; BS (1982)', 'Wharton School; University of Pennsylvania; MBA (1996)'],
    affiliations: [
      { name: 'Johnson & Johnson', role: 'Chairman and CEO (2012-2022)', type: 'corporation' },
    ],
    controversies: [
      'Oversaw J&J during 40;000+ talcum powder lawsuits alleging baby powder caused cancer; internal documents showed company knew about asbestos contamination since the 1970s',
      'J&J employed controversial "Texas Two-Step" bankruptcy maneuver to cap payouts to cancer victims; federal courts rejected the scheme twice as an abuse of bankruptcy system',
      'J&J found liable in landmark 2019 Oklahoma opioid trial; Janssen subsidiary grew poppies and supplied raw materials to opioid manufacturers fueling the epidemic',
      'Personally named in qui tam whistleblower lawsuit alleging illegal kickback scheme to promote antipsychotic drug Risperdal while VP of sales at Janssen',
      'J&J paid $2.2 billion to settle DOJ charges of fraud in marketing Risperdal to elderly dementia patients and children',
      'J&J agreed to $5 billion opioid settlement for role in fueling the opioid epidemic',
      'J&J offered $8.9 billion talc settlement after bankruptcy scheme failed; still below what many plaintiff attorneys consider adequate',
      'Earned $200+ million in personal compensation while company faced tens of billions in legal liabilities from harming consumers',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'April 25; 1960', event: 'Born in Fremont; Indiana' },
      { date: '1982', event: 'Graduates from West Point; serves 6 years as U.S. Army officer' },
      { date: '2004-2009', event: 'As Janssen VP of sales; named in qui tam lawsuit over Risperdal illegal kickback scheme' },
      { date: 'April 2012', event: 'Becomes CEO of Johnson & Johnson' },
      { date: '2013', event: 'J&J pays $2.2 billion to settle DOJ Risperdal marketing fraud charges' },
      { date: '2018', event: 'Reuters investigation reveals J&J knew about asbestos in baby powder for decades' },
      { date: 'August 2019', event: 'Oklahoma judge finds J&J liable in landmark opioid trial; orders $465 million payment' },
      { date: 'October 2021', event: 'J&J employs "Texas Two-Step" bankruptcy maneuver; creates LTL Management to absorb talc liabilities' },
      { date: 'January 2022', event: 'Gorsky steps down as CEO; replaced by Joaquin Duato' },
      { date: '2023', event: 'Federal courts reject J&J\'s bankruptcy scheme twice; calling it abuse of bankruptcy system' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alex Gorsky', url: 'https://en.wikipedia.org/wiki/Alex_Gorsky', date: '' },
      { title: 'Reuters: J&J Knew About Asbestos in Baby Powder for Decades', url: 'https://www.reuters.com/investigates/special-report/johnsonandjohnson-cancer/', date: '2018' },
      { title: 'NYT: J&J Talc Bankruptcy Strategy', url: 'https://www.nytimes.com/2023/04/04/business/johnson-johnson-talc-bankruptcy.html', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [],
  },






















 'albert-bourla': {
 name: 'Albert Bourla',
 title: 'Pfizer CEO',
 role: 'Pfizer CEO, Drug Pricing, Settlements',
 riskLevel: 'medium',
 description: 'Albert Bourla leads Pfizer, which has paid billions in settlements for illegal marketing, bribing doctors, and other violations. While Pfizer produced the COVID-19 vaccine, the company has been criticized for pricing, patent protection that limited global access, and ongoing issues with drug pricing.',
 birthDate: 'October 21, 1961',
 birthPlace: 'Thessaloniki, Greece',
 education: ['Aristotle University (Veterinary)', 'Aristotle University (PhD)'],
 netWorth: '$40 million',
 affiliations: [
 { name: 'Pfizer', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 '$2.3 BILLION: Largest healthcare fraud settlement (2009)',
 'OFF-LABEL MARKETING: Illegally promoted drugs',
 'BRIBERY: Paid doctors kickbacks',
 'COVID PRICING: Criticized for vaccine prices',
 'PATENT PROTECTION: Blocked generic access globally',
 'DRUG PRICES: Continued price increases',
 ],
 charges: [
 { statute: 'False Claims Act', description: 'Healthcare fraud', category: 'CORPORATE SETTLEMENT $2.3B' },
 { statute: 'Anti-Kickback Statute', description: 'Bribing physicians', category: 'PAST SETTLEMENTS' },
 ],
 relatedInvestigations: [
 { title: 'Pharmaceutical Fraud', slug: 'pharmaceutical-fraud', severity: 'high' },
 { title: 'Drug Pricing Crisis', slug: 'drug-pricing-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 21, 1961', event: 'Born in Greece' },
 { date: '1993', event: 'Joins Pfizer' },
 { date: '2019', event: 'Becomes Pfizer CEO' },
 { date: '2020', event: 'COVID vaccine development' },
 ],
 sources: [{ title: 'Wikipedia: Albert Bourla', url: 'https://en.wikipedia.org/wiki/Albert_Bourla' }, { title: 'Bloomberg: Albert Bourla', url: 'https://www.bloomberg.com/' }, { title: 'STAT News', url: 'https://www.statnews.com/' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 knownAssociates: [
 { name: 'Stephane Bancel', relationship: 'Fellow COVID-19 vaccine maker CEO, Moderna', href: '/entities/individuals/stephane-bancel' },
 { name: 'Andrew Witty', relationship: 'Fellow pharmaceutical CEO during COVID era', href: '/entities/individuals/andrew-witty' }
 ],

 },
 'andrew-witty': {
 name: 'Andrew Witty',
 title: 'UnitedHealth Group CEO',
 role: 'UnitedHealth CEO, Coverage Denials, Profiteering',
 riskLevel: 'critical',
 description: 'Andrew Witty leads UnitedHealth Group, the largest health insurer in America, which has been accused of systematically denying coverage to boost profits. The company uses algorithms to deny claims and has faced lawsuits for wrongful coverage denials that contributed to patient deaths.',
 birthDate: 'April 23, 1964',
 birthPlace: 'Liverpool, England',
 education: ['University of Nottingham'],
 netWorth: '$300 million',
 affiliations: [
 { name: 'UnitedHealth Group', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'COVERAGE DENIALS: Algorithm-driven claim denials',
 'PROFIT OVER PATIENTS: Record profits during pandemic',
 'PRIOR AUTHORIZATION: Delays that harm patients',
 'MENTAL HEALTH: Parity lawsuit for denying coverage',
 'MEDICARE ADVANTAGE: Overbilling government',
 'EXECUTIVE PAY: $20M+ while denying claims',
 ],
 charges: [
 { statute: 'ERISA', description: 'Wrongful coverage denials', category: 'ONGOING LITIGATION' },
 { statute: 'False Claims Act', description: 'Medicare overbilling', category: 'DOJ INVESTIGATION' },
 { statute: 'Mental Health Parity Act', description: 'Mental health coverage denials', category: 'LAWSUIT' },
 ],
 relatedInvestigations: [
 { title: 'Insurance Coverage Denials', slug: 'insurance-denials', severity: 'critical' },
 { title: 'Healthcare Profiteering', slug: 'healthcare-profiteering', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 23, 1964', event: 'Born in England' },
 { date: '2021', event: 'Becomes UnitedHealth CEO' },
 ],
 sources: [{ title: 'Wikipedia: Andrew Witty', url: 'https://en.wikipedia.org/wiki/Andrew_Witty' }, { title: 'Bloomberg: Andrew Witty', url: 'https://www.bloomberg.com/' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'Albert Bourla', relationship: 'Fellow pharma CEO during pandemic era', href: '/entities/individuals/albert-bourla' },
 { name: 'David Cordani', relationship: 'Fellow healthcare industry CEO', href: '/entities/individuals/david-cordani' }
 ],

 },
  'alexander-lukashenko': {
    name: 'Alexander Lukashenko',
    title: 'President of Belarus; "Europe\'s Last Dictator"; Rigged 2020 Election; Ryanair Hijacking',
    role: 'President of Belarus (1994-present); Authoritarian Dictator',
    riskLevel: 'critical',
    description: 'Alexander Grigoryevich Lukashenko has ruled Belarus since 1994; earning the title "Europe\'s Last Dictator" for his authoritarian suppression of political opposition; independent media; and civil society. A former collective farm director and Soviet border guard; Lukashenko won Belarus\'s first and only competitive presidential election in 1994 and has held power through successively more fraudulent elections ever since. The August 2020 presidential election triggered the largest protests in Belarusian history after widespread evidence of vote rigging; the official result claimed Lukashenko won with 80% of the vote against opposition candidate Sviatlana Tsikhanouskaya. The regime responded with extreme violence; security forces detained over 35;000 people; with systematic torture and sexual abuse of detainees documented by human rights organizations. At least four protesters were killed and hundreds were severely beaten. In May 2021; Lukashenko ordered a Belarusian fighter jet to intercept Ryanair Flight 4978; a commercial passenger plane flying from Athens to Vilnius through Belarusian airspace; forcing it to land in Minsk under a fabricated bomb threat in order to arrest dissident journalist Roman Protasevich and his girlfriend Sofia Sapega who were passengers. This state hijacking of a civilian aircraft was condemned by the international community as an act of air piracy. Lukashenko allowed Russia to use Belarusian territory as a staging ground for the 2022 invasion of Ukraine; making Belarus a co-belligerent. He has been sanctioned by the EU; U.S.; UK; and Canada. The ICC has not issued warrants but Lukashenko faces potential charges for crimes against humanity.',
    birthDate: 'August 30; 1954',
    birthPlace: 'Kopys; Vitebsk Oblast; Byelorussian SSR; Soviet Union',
    education: ['Mogilev Pedagogical Institute (1975)', 'Belarusian Agricultural Academy (1985)'],
    affiliations: [
      { name: 'Republic of Belarus', role: 'President (1994-present)', type: 'agency' },
    ],
    controversies: [
      'Rigged August 2020 presidential election; triggering massive nationwide protests; over 35;000 detained with systematic torture and sexual abuse documented',
      'Ordered interception of Ryanair Flight 4978 in May 2021 using a military fighter jet and fake bomb threat to arrest dissident journalist Roman Protasevich',
      'Allowed Russia to use Belarusian territory as staging ground for the February 2022 invasion of Ukraine',
      'At least four protesters killed and hundreds severely beaten by security forces during 2020 protest crackdown',
      'Sanctioned by EU; U.S.; UK; and Canada for human rights abuses and undermining democracy',
      'Systematically eliminated independent media; imprisoned journalists; and dissolved civil society organizations',
      'Extended presidential term limits through controversial 2004 referendum widely considered fraudulent',
      'Maintained KGB (Belarus never renamed its secret police) as tool of domestic repression',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'August 30; 1954', event: 'Born in Kopys; Vitebsk Oblast; Byelorussian SSR' },
      { date: '1994', event: 'Wins Belarus\'s first competitive presidential election' },
      { date: '2004', event: 'Referendum removes presidential term limits; widely condemned as fraudulent' },
      { date: 'August 9; 2020', event: 'Claims 80% victory in presidential election widely denounced as rigged; sparking massive protests' },
      { date: 'August-December 2020', event: 'Security forces detain over 35;000 people; systematic torture documented by human rights groups' },
      { date: 'May 23; 2021', event: 'Orders military fighter jet to force Ryanair Flight 4978 to land in Minsk; arrests journalist Roman Protasevich' },
      { date: 'February 2022', event: 'Allows Russian forces to invade Ukraine from Belarusian territory' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alexander Lukashenko', url: 'https://en.wikipedia.org/wiki/Alexander_Lukashenko', date: '' },
      { title: 'Human Rights Watch: Belarus', url: 'https://www.hrw.org/europe/central-asia/belarus', date: '' },
      { title: 'ICAO: Investigation of Ryanair Flight 4978 Incident', url: 'https://www.icao.int/Security/Pages/RyanairFR4978.aspx', date: '2022' },
    ],
    aliases: ['Alyaksandr Lukashenka', 'Europe\'s Last Dictator'],
    knownAssociates: [
      { name: 'Vladimir Putin', relationship: 'Primary geopolitical patron; allowed Russian invasion of Ukraine from Belarusian territory', href: '/entities/individuals/vladimir-putin' },
    ],
  },














  'amber-guyger': {
    name: 'Amber Guyger',
    title: 'Convicted Former Dallas Police Officer; Shot and Killed Botham Jean in His Own Apartment',
    role: 'Convicted Murderer; Former Dallas Police Officer',
    riskLevel: 'medium',
    description: 'Amber Renee Guyger is a former Dallas Police Department officer who was convicted of murder for shooting and killing Botham Shem Jean; a 26-year-old Black accountant from Saint Lucia; inside his own apartment on September 6; 2018. Guyger; who was off-duty and still in her uniform; entered Jean\'s apartment on the fourth floor of the South Side Flats complex in Dallas; claiming she mistakenly believed it was her own apartment one floor below and thought Jean was an intruder. She shot Jean; who was sitting on his couch eating ice cream and watching television. The case became a national flashpoint in the debate over police violence against Black Americans. Guyger was charged with murder and convicted by a Dallas County jury on October 1; 2019; sentenced to 10 years in prison. The trial\'s aftermath was notable for an extraordinary moment when Botham Jean\'s brother Brandt Jean publicly forgave Guyger and embraced her in the courtroom; a scene that went viral but also drew criticism from those who felt it placed an unfair burden on Black families to forgive racial violence. Judge Tammy Kemp also drew controversy for giving Guyger a Bible and hugging her after sentencing. Joshua Brown; a key prosecution witness who testified against Guyger; was shot and killed in his apartment 10 days after the verdict; his murder was later attributed to a drug deal gone wrong; though the timing fueled suspicion. In August 2024; a Texas appeals court upheld Guyger\'s conviction but reduced potential parole eligibility. She became eligible for parole in September 2024.',
    birthDate: '1988',
    birthPlace: 'Arlington; Texas; USA',
    education: [],
    affiliations: [
      { name: 'Dallas Police Department', role: 'Police Officer (2013-2018; fired after indictment)', type: 'agency' },
    ],
    controversies: [
      'Shot and killed Botham Jean; a 26-year-old Black man; in his own apartment while he was eating ice cream on his couch; September 6; 2018',
      'Claimed she entered wrong apartment believing it was her own; found guilty of murder by Dallas County jury',
      'Sentenced to only 10 years for murder; critics argued sentence was lenient due to her status as a police officer',
      'Judge Tammy Kemp gave Guyger a Bible and hugged her after sentencing; drawing ethics complaints and criticism',
      'Key prosecution witness Joshua Brown was shot and killed 10 days after testifying against Guyger; fueling public suspicion',
      'Case became national symbol of police violence against Black Americans and failures of accountability in policing',
      'Racist and violent text messages and social media posts by Guyger were revealed during trial',
    ],
    charges: [
      { charge: 'Murder', status: 'Convicted; October 1; 2019; sentenced to 10 years', date: '2018-11-30' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: '1988', event: 'Born in Arlington; Texas' },
      { date: '2013', event: 'Joins Dallas Police Department' },
      { date: 'September 6; 2018', event: 'Enters Botham Jean\'s apartment and shoots him dead while he sits on his couch' },
      { date: 'September 9; 2018', event: 'Arrested and charged with manslaughter; later upgraded to murder' },
      { date: 'September 2018', event: 'Fired from Dallas Police Department' },
      { date: 'October 1; 2019', event: 'Convicted of murder; sentenced to 10 years in prison' },
      { date: 'October 11; 2019', event: 'Key witness Joshua Brown shot and killed in his apartment' },
      { date: 'August 2024', event: 'Texas appeals court upholds conviction' },
      { date: 'September 2024', event: 'Becomes eligible for parole' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Murder of Botham Jean', url: 'https://en.wikipedia.org/wiki/Murder_of_Botham_Jean', date: '' },
      { title: 'NYT: Amber Guyger; Ex-Officer Who Killed Botham Jean; Is Found Guilty of Murder', url: 'https://www.nytimes.com/2019/10/01/us/amber-guyger-trial-verdict-botham-jean.html', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [],
  },













  'abdel-fattah-el-sisi': {
    name: 'Abdel Fattah el-Sisi',
    title: 'President of Egypt; Military Coup Leader; Rabaa Massacre; Mass Political Imprisonment',
    role: 'President of Egypt (2014-present); Former Military General; Coup Leader',
    riskLevel: 'critical',
    description: 'Abdel Fattah Saeed Hussein Khalil el-Sisi is the President of Egypt; serving since June 2014 after seizing power in a July 2013 military coup that overthrew Mohamed Morsi; Egypt\'s first democratically elected president. As Defense Minister and head of the Egyptian Armed Forces; Sisi led the coup and subsequently orchestrated the Rabaa massacre on August 14; 2013; in which Egyptian security forces killed at least 817 protesters (Human Rights Watch\'s conservative estimate) and potentially over 1;000 at the Rabaa al-Adawiya and al-Nahda Square sit-ins; making it one of the largest mass killings of demonstrators in modern history. Human Rights Watch described it as "one of the world\'s largest killings of demonstrators in a single day in recent history" and likely constituting crimes against humanity. Under Sisi\'s rule; Egypt has become one of the world\'s leading jailers of journalists and political prisoners; with an estimated 60;000 political prisoners held as of 2023. His government has overseen enforced disappearances; systematic torture in detention; extrajudicial killings; and severe restrictions on press freedom; civil society; and political opposition. Despite this record; Sisi has maintained strong relationships with the United States (receiving $1.3 billion annually in military aid); France; and other Western nations. A federal investigation revealed that the Egyptian government funneled $10 million to the Trump 2016 campaign through a Cairo bank; though no charges were filed. Sisi pushed through a 2019 constitutional amendment allowing him to remain in power until 2030.',
    birthDate: 'November 19; 1954',
    birthPlace: 'Cairo; Egypt',
    education: ['Egyptian Military Academy (1977)', 'U.S. Army War College; Carlisle; Pennsylvania (2006)'],
    affiliations: [
      { name: 'Arab Republic of Egypt', role: 'President (2014-present)', type: 'agency' },
      { name: 'Egyptian Armed Forces', role: 'Commander-in-Chief; Former Minister of Defense (2012-2014)', type: 'agency' },
    ],
    controversies: [
      'Led July 2013 military coup overthrowing Egypt\'s first democratically elected president Mohamed Morsi',
      'Rabaa massacre (August 14; 2013): security forces killed at least 817-1;000+ pro-democracy protesters; described by HRW as likely crimes against humanity',
      'Estimated 60;000 political prisoners held in Egypt as of 2023; making it one of the world\'s worst jailers of dissidents',
      'Systematic torture; enforced disappearances; and extrajudicial killings documented by Human Rights Watch; Amnesty International; and UN bodies',
      'Federal investigation found $10 million transferred from Egyptian bank to Trump 2016 campaign shortly before the election',
      'Pushed through 2019 constitutional amendment extending potential rule until 2030; effectively establishing an autocracy',
      'Receives $1.3 billion annually in U.S. military aid despite documented human rights abuses',
      'Italian researcher Giulio Regeni tortured and killed in Cairo in 2016; Egyptian security services implicated',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'November 19; 1954', event: 'Born in Cairo; Egypt' },
      { date: '1977', event: 'Graduates from Egyptian Military Academy' },
      { date: '2006', event: 'Attends U.S. Army War College in Carlisle; Pennsylvania' },
      { date: 'August 2012', event: 'Appointed Minister of Defense by President Morsi' },
      { date: 'July 3; 2013', event: 'Leads military coup overthrowing President Mohamed Morsi' },
      { date: 'August 14; 2013', event: 'Rabaa massacre: security forces kill at least 817+ protesters at sit-in protests' },
      { date: 'June 8; 2014', event: 'Inaugurated as President of Egypt after election with no real opposition' },
      { date: 'January 25; 2016', event: 'Italian researcher Giulio Regeni disappears in Cairo; found tortured and killed; Egyptian security implicated' },
      { date: 'April 2019', event: 'Constitutional amendments approved allowing Sisi to remain in power until 2030' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdel Fattah el-Sisi', url: 'https://en.wikipedia.org/wiki/Abdel_Fattah_el-Sisi', date: '' },
      { title: 'Human Rights Watch: All According to Plan - The Rab\'a Massacre', url: 'https://www.hrw.org/report/2014/08/12/all-according-plan/raba-massacre-and-mass-killings-protesters-egypt', date: '2014' },
      { title: 'Washington Post: Egyptian bank records detail transfer before Trump campaign', url: 'https://www.washingtonpost.com', date: '2019' },
    ],
    aliases: ['el-Sisi', 'al-Sisi'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Close political relationship; Trump called Sisi "my favorite dictator"; $10M Egyptian bank transfer investigated', href: '/entities/individuals/donald-trump' },
    ],
  },

  'adam-neumann': {
    name: 'Adam Neumann',
    title: 'WeWork Co-Founder; $47 Billion Valuation Collapse; Corporate Governance Disaster',
    role: 'Co-Founder and Former CEO; WeWork',
    riskLevel: 'high',
    description: 'Adam Neumann is an Israeli-American entrepreneur and the co-founder and former CEO of WeWork; the coworking space company whose spectacular rise and catastrophic fall became a defining cautionary tale of Silicon Valley excess and venture capital hubris. Born on a kibbutz in Israel; Neumann moved to New York and co-founded WeWork in 2010 with Miguel McKelvey. Neumann transformed what was essentially a real estate subletting business into a "tech company" through sheer charisma and grandiose rhetoric; claiming WeWork would "elevate the world\'s consciousness." At its January 2019 peak; SoftBank\'s Vision Fund and other investors valued WeWork at $47 billion. Neumann personally borrowed over $700 million against his WeWork shares; bought multiple properties worth over $90 million; purchased a $60 million Gulfstream G650 jet; invested in a wave pool company; and trademarked the word "We" through a company he controlled; then charged WeWork $5.9 million to license its own name back. His self-dealing was extraordinary; he was both WeWork\'s landlord and CEO; leasing properties he personally owned to the company. When WeWork filed its S-1 IPO prospectus in August 2019; the document revealed billions in losses; bizarre corporate governance that gave Neumann near-dictatorial control; and rampant conflicts of interest. The IPO collapsed; the valuation crashed from $47 billion to under $10 billion; and Neumann was forced out as CEO in September 2019. SoftBank gave him a $1.7 billion golden parachute to leave; including $185 million in consulting fees. WeWork eventually went public via SPAC in 2021 and filed for Chapter 11 bankruptcy in November 2023. Neumann walked away a billionaire while thousands of WeWork employees lost their jobs.',
    birthDate: 'April 25; 1979',
    birthPlace: 'Be\'er Sheva; Israel',
    education: ['Baruch College; Zicklin School of Business; BS (2008)'],
    affiliations: [
      { name: 'WeWork', role: 'Co-Founder and CEO (2010-2019)', type: 'corporation' },
      { name: 'Flow', role: 'Founder; residential real estate startup (2022-present)', type: 'corporation' },
    ],
    controversies: [
      'WeWork valuation collapsed from $47 billion to under $10 billion after S-1 filing revealed massive losses and governance failures',
      'Extensive self-dealing: was both landlord and CEO; leasing his own properties to WeWork at inflated rates',
      'Trademarked the word "We" through a personal company; then charged WeWork $5.9 million to license its own name',
      'Borrowed over $700 million against WeWork shares while employees held illiquid stock',
      'Received $1.7 billion golden parachute from SoftBank to step down; including $185 million in "consulting fees"',
      'WeWork filed for Chapter 11 bankruptcy in November 2023; thousands of employees lost jobs while Neumann remained a billionaire',
      'Corporate governance gave Neumann near-dictatorial control with super-voting shares and the ability to appoint his successor',
      'Purchased $60 million private jet and $90+ million in personal real estate while WeWork hemorrhaged cash',
      'Reportedly smoked marijuana on private jet flights and created a workplace culture described as "frat house" atmosphere',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'April 25; 1979', event: 'Born in Be\'er Sheva; Israel; raised on kibbutz' },
      { date: '2010', event: 'Co-founds WeWork with Miguel McKelvey in New York' },
      { date: 'January 2019', event: 'WeWork valued at $47 billion by SoftBank\'s Vision Fund' },
      { date: 'August 14; 2019', event: 'WeWork S-1 filing reveals billions in losses; self-dealing; and bizarre governance' },
      { date: 'September 2019', event: 'IPO collapses; Neumann forced out as CEO' },
      { date: 'October 2019', event: 'SoftBank agrees to $1.7 billion golden parachute for Neumann to leave' },
      { date: 'October 2021', event: 'WeWork goes public via SPAC at much lower valuation' },
      { date: 'November 6; 2023', event: 'WeWork files for Chapter 11 bankruptcy' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Neumann', url: 'https://en.wikipedia.org/wiki/Adam_Neumann', date: '' },
      { title: 'Wall Street Journal: WeWork IPO Is Withdrawn', url: 'https://www.wsj.com/articles/wework-ipo-is-pulled-11569363993', date: '2019' },
      { title: 'SEC: WeWork S-1 Filing', url: 'https://www.sec.gov/cgi-bin/browse-edgar?company=wework&CIK=&type=S-1', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Masayoshi Son', relationship: 'SoftBank CEO and primary WeWork backer; invested over $18 billion', href: '/entities/individuals/masayoshi-son' },
    ],
  },

  'anna-sorokin': {
    name: 'Anna Sorokin',
    title: 'Convicted Con Artist',
    role: 'Fake German Heiress; Bank Fraud CONVICTED',
    riskLevel: 'medium',
    description: 'Anna Sorokin, aka Anna Delvey, posed as a wealthy German heiress to defraud banks, hotels, and acquaintances out of hundreds of thousands of dollars in New York. Her story became a Netflix series. She was convicted of theft of services and grand larceny.',
    birthDate: 'January 23, 1991',
    birthPlace: 'Domodedovo, Russia',
    education: ['Central Saint Martins (briefly)'],
    affiliations: [
    ],
    controversies: [
      'FAKE HEIRESS: Invented German aristocrat persona',
      'DEFRAUDED BANKS: Tried to get $22 million loan',
      'HOTEL HOPPING: Left bills unpaid',
      'USED FRIENDS: Borrowed and never repaid',
      'NETFLIX DEAL: Profited from criminal story',
    ],
    charges: [
      { statute: 'New York Penal Law � 155.35', description: 'Grand larceny', category: 'CONVICTED: 4-12 YEARS' },
      { statute: 'New York Penal Law � 165.15', description: 'Theft of services', category: 'CONVICTED' },
    ],
    relatedInvestigations: [
      { title: 'Social Engineering Fraud', slug: 'social-engineering-fraud', severity: 'medium' },
    ],
    timeline: [
      { date: 'January 23, 1991', event: 'Born in Russia' },
      { date: '2013', event: 'Arrives in New York' },
      { date: '2016-2017', event: 'Defrauds victims' },
      { date: 'October 2017', event: 'Arrested' },
      { date: 'April 2019', event: 'Convicted' },
      { date: 'February 2021', event: 'Released' },
      { date: 'March 2021', event: 'Taken into ICE custody' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anna Sorokin', url: 'https://en.wikipedia.org/wiki/Anna_Sorokin', date: '' },
      { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Became a cultural figure during the Trump era; her fraud case spotlighted wealth-obsessed culture in New York\'s elite circles', href: '/entities/individuals/donald-trump' },
    ],
  },


















  'andrew-tate': {
    name: 'Andrew Tate',
    title: 'Social Media Influencer; Indicted for Human Trafficking and Rape in Romania',
    role: 'Social Media Influencer; Former Kickboxer; Accused Human Trafficker',
    riskLevel: 'critical',
    description: 'Emory Andrew Tate III is a British-American social media influencer; former professional kickboxer; and accused human trafficker who was indicted by Romanian prosecutors in June 2024 on charges of human trafficking; rape; and forming an organized criminal group. Born in Washington D.C. and raised partly in England; Tate became a four-time ISKA world kickboxing champion before transitioning to social media; where he built a massive following promoting an aggressively misogynistic worldview; flaunting extreme wealth; and operating "Hustler\'s University" (later "The Real World"); an online subscription program that charged members $50/month for financial advice while incentivizing them to spread Tate\'s content virally. His social media reach was enormous; with his clips viewed billions of times; making him particularly influential among young men and teenage boys. Tate was banned from major social platforms in August 2022 for violating hate speech policies; though Elon Musk reinstated him on X (Twitter) in November 2022. On December 29; 2022; Romanian police raided Tate\'s compound near Bucharest and arrested him and his brother Tristan Tate along with two Romanian women on charges of human trafficking; rape; and forming an organized criminal group. Prosecutors allege the Tates lured women to Romania using false promises of romantic relationships; then sexually exploited them and forced them to produce pornographic content for profit through a "loverboy" method of psychological manipulation. The brothers were held in custody and then under house arrest for months before being released on bail. In June 2024; Romanian prosecutors formally indicted the Tates; sending the case to trial. Separately; UK authorities charged Andrew Tate with sexual aggression against a British woman in March 2025.',
    birthDate: 'December 1; 1986',
    birthPlace: 'Washington; D.C.; USA',
    education: [],
    affiliations: [],
    controversies: [
      'Indicted in Romania in June 2024 on charges of human trafficking; rape; and forming an organized criminal group',
      'Prosecutors allege Tate and his brother used "loverboy" psychological manipulation to exploit women sexually and force them to produce pornographic content',
      'Arrested with brother Tristan Tate on December 29; 2022; by Romanian anti-organized crime prosecutors (DIICOT)',
      'Banned from Facebook; Instagram; TikTok; YouTube; and Twitter in August 2022 for violating hate speech and dangerous individual policies',
      'Reinstated on X (Twitter) by Elon Musk in November 2022',
      'Operated "Hustler\'s University" (later "The Real World") subscription scheme charging $50/month; incentivized members to flood social media with his content',
      'Promoted aggressively misogynistic views to millions of followers; particularly young men and teenage boys',
      'UK authorities charged Tate with sexual aggression against a British woman in March 2025',
      'Previously removed from UK Big Brother in 2016 after video surfaced appearing to show him hitting a woman with a belt',
      'Converted to Islam while under investigation in Romania',
    ],
    charges: [
      { charge: 'Human trafficking', status: 'Indicted; June 2024; awaiting trial in Romania', date: '2022-12-29' },
      { charge: 'Rape', status: 'Indicted; June 2024; awaiting trial in Romania', date: '2022-12-29' },
      { charge: 'Forming an organized criminal group', status: 'Indicted; June 2024; awaiting trial in Romania', date: '2022-12-29' },
      { charge: 'Sexual aggression (UK)', status: 'Charged; March 2025', date: '2025-03-01' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: 'December 1; 1986', event: 'Born in Washington; D.C.' },
      { date: '2009-2020', event: 'Professional kickboxing career; wins four ISKA world championships' },
      { date: '2016', event: 'Removed from UK Big Brother after video surfaces appearing to show him hitting a woman' },
      { date: '2021-2022', event: 'Viral social media rise; billions of views; launches Hustler\'s University subscription scheme' },
      { date: 'August 2022', event: 'Banned from Facebook; Instagram; TikTok; YouTube; and Twitter for hate speech' },
      { date: 'November 2022', event: 'Reinstated on X (Twitter) after Elon Musk\'s takeover' },
      { date: 'December 29; 2022', event: 'Arrested with brother Tristan in Romania by DIICOT on human trafficking; rape; and organized crime charges' },
      { date: 'March 2023', event: 'Released to house arrest after three months in Romanian detention' },
      { date: 'June 2024', event: 'Formally indicted by Romanian prosecutors; case sent to trial' },
      { date: 'March 2025', event: 'UK authorities charge Tate with sexual aggression against British woman' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Tate', url: 'https://en.wikipedia.org/wiki/Andrew_Tate', date: '' },
      { title: 'BBC: Andrew Tate indicted on trafficking and rape charges', url: 'https://www.bbc.com/news/world-europe-69158498', date: '2024' },
      { title: 'Reuters: Romania indicts Andrew Tate for human trafficking; rape', url: 'https://www.reuters.com/world/europe/romania-indicts-andrew-tate-human-trafficking-rape-2024-06-19/', date: '2024' },
    ],
    aliases: ['Emory Andrew Tate III', 'Top G', 'Cobra Tate'],
    knownAssociates: [
      { name: 'Tristan Tate', relationship: 'Brother and co-defendant in Romanian human trafficking case', href: '/entities/individuals/tristan-tate' },
    ],
  },

  'anna-paulina-luna': {
    name: 'Anna Paulina Luna',
    title: 'Republican Congresswoman; Identity and Background Fabrication Allegations',
    role: 'U.S. Representative (FL-13); Republican; MAGA-Aligned; Controversial Background Claims',
    riskLevel: 'medium',
    description: 'Anna Paulina Luna (born Anna Paulina Mayerhofer) is a Republican U.S. Representative from Florida\'s 13th congressional district; elected in 2022. She has become one of the most controversial members of Congress due to extensive reporting on fabrications and inconsistencies in her personal biography. A Washington Post investigation found that Luna had changed her name; her racial and ethnic identity claims; and key details of her life story multiple times. She has variously identified as Hispanic; Middle Eastern; white; and Eastern European depending on context. Her father; whose last name is Mayerhofer; is of Austrian and German descent; not Hispanic as she has implied. Former friends and associates told the Post that Luna fabricated or exaggerated claims about growing up in poverty; witnessing a home invasion as a child; and her father\'s criminal history. She also claimed to practice Judaism despite no documented connection to Jewish heritage. Luna obtained a restraining order in 2021 against a former associate; William Braddock; claiming he was planning to have her killed; but a subsequent investigation by conservative outlets raised questions about the evidence. In Congress; Luna has been a vocal supporter of Donald Trump; pushed to hold Attorney General Merrick Garland in inherent contempt; and introduced articles of impeachment against several Biden administration officials. She has also made false claims about her military service record in the Air Force; inflating her role and responsibilities. Her financial disclosures have also raised questions; with significant inconsistencies between her reported assets and her claimed background of poverty.',
    birthDate: 'May 6; 1989',
    birthPlace: 'Orange County; California; USA',
    education: ['University of West Florida; BA Biology (2017)'],
    affiliations: [
      { name: 'U.S. House of Representatives', role: 'Representative for Florida\'s 13th Congressional District (2023-present)', type: 'agency' },
      { name: 'House Freedom Caucus', role: 'Member; aligned with hard-right faction of Republican Party', type: 'organization' },
    ],
    controversies: [
      'Washington Post investigation found extensive fabrications in her personal biography including name changes; shifting racial/ethnic identity claims; and invented childhood poverty narrative',
      'Born Anna Paulina Mayerhofer to a father of Austrian and German descent but has variously identified as Hispanic; Middle Eastern; and Eastern European depending on context',
      'False claims about her military service record in the Air Force; inflating her role and responsibilities',
      'Claimed to practice Judaism despite no documented connection to Jewish heritage',
      'Financial disclosure inconsistencies between reported assets and her claimed background of poverty',
      'Obtained restraining order against former associate William Braddock claiming assassination plot; evidence questioned by subsequent investigations',
      'Former friends and associates contradicted her claims about growing up in poverty and witnessing a home invasion as a child',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'May 6; 1989', event: 'Born Anna Paulina Mayerhofer in Orange County; California' },
      { date: '2017', event: 'Graduates from University of West Florida with biology degree' },
      { date: '2020', event: 'First congressional campaign in FL-13; loses to incumbent Democrat Charlie Crist' },
      { date: '2021', event: 'Obtains restraining order against William Braddock; claiming assassination plot' },
      { date: 'November 2022', event: 'Elected to U.S. House of Representatives from Florida\'s 13th district' },
      { date: 'June 2023', event: 'Washington Post publishes investigation into fabrications in her biographical claims' },
    ],
    socialMedia: [
      { platform: 'X (Twitter)', handle: '@RepLuna' },
    ],
    sources: [
      { title: 'Wikipedia: Anna Paulina Luna', url: 'https://en.wikipedia.org/wiki/Anna_Paulina_Luna', date: '' },
      { title: 'Washington Post: Luna\'s Shifting Story', url: 'https://www.washingtonpost.com/politics/2023/06/14/anna-paulina-luna-biography-fabrication/', date: '2023' },
      { title: 'Florida Politics: Luna Background Questions', url: 'https://floridapolitics.com/archives/tag/anna-paulina-luna/', date: '2023' },
    ],
    aliases: ['Anna Paulina Mayerhofer (birth name)'],
    knownAssociates: [],
  },


















  'andy-ngo': {
    name: 'Andy Ngo',
    title: 'Conservative Journalist and Provocateur; Antifa Chronicler; Accused of Proud Boys Coordination',
    role: 'Editor-at-Large; The Post Millennial; Author of "Unmasked"; Controversial Journalist',
    riskLevel: 'medium',
    description: 'Andy Cuong Ngo is a Vietnamese-American conservative journalist and provocateur best known for his coverage of Antifa and left-wing protest movements; particularly in Portland; Oregon. As editor-at-large of the Canadian conservative outlet The Post Millennial; Ngo has built a significant following on social media by documenting and amplifying left-wing political violence; earning both praise from conservatives who see him as a courageous reporter and severe criticism from journalists and researchers who accuse him of selectively editing footage; decontextualizing events; misidentifying individuals as Antifa; and functioning more as a right-wing activist than a journalist. In June 2019; Ngo was attacked at a Portland rally by individuals identified as Antifa members; sustaining injuries including a reported brain hemorrhage. The assault garnered significant national attention and became a rallying point for conservatives. However; leaked text messages and video footage published by the Portland Mercury and other outlets appeared to show Ngo interacting cordially with members of Patriot Prayer (a right-wing group) before a violent confrontation at a Portland bar called Cider Riot in May 2019; and discussing with them the anticipated presence of Antifa members. Ngo has been accused by multiple journalists and researchers of sharing personal information about left-wing activists that led to threats and harassment. He authored the book "Unmasked: Inside Antifa\'s Radical Plan to Destroy Democracy" (2021); which was criticized by academics and journalists for mischaracterizing the decentralized nature of Antifa and inflating its organizational coherence. He has filed multiple defamation lawsuits and has also been sued himself. Ngo holds dual U.S. and U.K. citizenship and has faced criticism for his coverage of Portland protests while living abroad in London for extended periods.',
    birthDate: '1986',
    birthPlace: 'Portland; Oregon; USA',
    education: ['Portland State University; Political Science'],
    affiliations: [
      { name: 'The Post Millennial', role: 'Editor-at-large; Canadian conservative news outlet', type: 'organization' },
    ],
    controversies: [
      'Attacked by Antifa-affiliated individuals at Portland rally in June 2019; sustaining injuries including reported brain hemorrhage; incident became national flashpoint',
      'Leaked messages and video appeared to show Ngo coordinating with Patriot Prayer members before a violent May 2019 confrontation at Cider Riot bar in Portland',
      'Accused by multiple journalists and researchers of selectively editing footage; decontextualizing events; and misidentifying individuals as Antifa members',
      'Accused of sharing personal information of left-wing activists that led to threats and harassment campaigns against them',
      'Book "Unmasked" (2021) criticized by academics for mischaracterizing the decentralized nature of Antifa and inflating its organizational coherence',
      'Quillette editor who published his early work was also criticized; Ngo\'s reporting methods have been questioned by mainstream journalism ethics organizations',
      'Filed multiple defamation lawsuits while also being sued himself in connection with his reporting activities',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: '1986', event: 'Born in Portland; Oregon to Vietnamese immigrant parents' },
      { date: '2017-2018', event: 'Gains national attention through Quillette articles and social media coverage of Portland protests' },
      { date: 'May 1; 2019', event: 'Leaked footage shows Ngo interacting with Patriot Prayer members before violent confrontation at Cider Riot bar' },
      { date: 'June 29; 2019', event: 'Attacked and injured at Portland rally by individuals identified as Antifa members; national media coverage follows' },
      { date: 'February 2021', event: 'Publishes "Unmasked: Inside Antifa\'s Radical Plan to Destroy Democracy"' },
    ],
    socialMedia: [
      { platform: 'X (Twitter)', handle: '@MrAndyNgo' },
    ],
    sources: [
      { title: 'Wikipedia: Andy Ngo', url: 'https://en.wikipedia.org/wiki/Andy_Ngo', date: '' },
      { title: 'Portland Mercury: Andy Ngo and Patriot Prayer Leaked Messages', url: 'https://www.portlandmercury.com/blogtown/2019/08/26/27039560/undercover-in-patriot-prayer-insights-from-a-vancouver-democrat-who-infiltrated-the-far-right-group', date: '2019' },
      { title: 'Columbia Journalism Review: The Making of Andy Ngo', url: 'https://www.cjr.org/special_report/andy-ngo-next-generation.php', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [],
  },


















  'anthony-weiner': {
    name: 'Anthony Weiner',
    title: 'Disgraced Former Congressman; Sexting Scandals; Federal Conviction; Triggered Comey Letter',
    role: 'Former U.S. Representative (NY-9); Convicted Sex Offender; Political Scandal Figure',
    riskLevel: 'high',
    description: 'Anthony David Weiner is a former Democratic U.S. Representative from New York who served from 1999 to 2011 before resigning in disgrace after a sexting scandal. Weiner accidentally posted a sexually explicit photograph intended as a private message on his public Twitter account in May 2011; initially claimed he was hacked; then admitted to sending explicit images and messages to multiple women. He resigned from Congress in June 2011. In 2013; Weiner attempted a political comeback by running for New York City mayor and briefly led in polls before a second sexting scandal erupted under the alias "Carlos Danger"; he finished last in the Democratic primary. In 2016; a third scandal emerged when it was revealed Weiner had sent sexually explicit messages to a 15-year-old girl. This investigation had an extraordinary impact on the 2016 presidential election; the FBI\'s seizure of Weiner\'s laptop (which he shared with then-wife Huma Abedin; a top Hillary Clinton aide) revealed thousands of Clinton-related emails; prompting FBI Director James Comey to send his infamous October 28; 2016 letter to Congress reopening the Clinton email investigation just 11 days before the election. Many analysts believe the Comey letter was decisive in Clinton\'s defeat. Weiner pleaded guilty to transferring obscene material to a minor in May 2017 and was sentenced to 21 months in federal prison. He registered as a sex offender upon release.',
    birthDate: 'September 4; 1964',
    birthPlace: 'Brooklyn; New York; USA',
    education: ['SUNY Plattsburgh; BA Political Science (1985)'],
    affiliations: [
      { name: 'U.S. House of Representatives', role: 'Representative; New York 9th District (1999-2011)', type: 'agency' },
    ],
    controversies: [
      'Resigned from Congress in June 2011 after accidentally posting explicit photo publicly on Twitter; initially lied claiming he was hacked',
      'Second sexting scandal during 2013 NYC mayoral campaign under alias "Carlos Danger"; destroyed his political comeback',
      'Sent sexually explicit messages and images to a 15-year-old girl in 2016; convicted of transferring obscene material to a minor',
      'FBI seizure of his shared laptop with Huma Abedin revealed Clinton emails; triggered Comey letter 11 days before 2016 election',
      'The Comey letter reopening the Clinton email investigation is widely considered a decisive factor in Clinton\'s defeat by Trump',
      'Sentenced to 21 months in federal prison; required to register as sex offender',
      'Marriage to Huma Abedin (top Hillary Clinton aide) ended; the intersection of his scandal with the 2016 election was extraordinary',
    ],
    charges: [
      { charge: 'Transferring obscene material to a minor', status: 'Pleaded guilty; May 2017; sentenced to 21 months', date: '2017-05-19' },
    ],
    relatedInvestigations: [
      { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
    ],
    timeline: [
      { date: 'September 4; 1964', event: 'Born in Brooklyn; New York' },
      { date: '1999', event: 'Elected to U.S. House of Representatives from New York\'s 9th District' },
      { date: 'May 27; 2011', event: 'Accidentally posts explicit photo on public Twitter; initially claims account was hacked' },
      { date: 'June 16; 2011', event: 'Resigns from Congress after admitting to sexting multiple women' },
      { date: 'July 2013', event: 'Second sexting scandal erupts during NYC mayoral campaign under alias "Carlos Danger"' },
      { date: '2016', event: 'FBI investigates sexting with 15-year-old girl; seizes laptop shared with estranged wife Huma Abedin' },
      { date: 'October 28; 2016', event: 'FBI Director Comey sends letter to Congress reopening Clinton email investigation based on emails found on Weiner\'s laptop' },
      { date: 'May 19; 2017', event: 'Pleads guilty to transferring obscene material to a minor' },
      { date: 'November 6; 2017', event: 'Sentenced to 21 months in federal prison' },
      { date: 'February 2019', event: 'Released from federal prison; registers as sex offender' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anthony Weiner', url: 'https://en.wikipedia.org/wiki/Anthony_Weiner', date: '' },
      { title: 'DOJ: Anthony Weiner Sentenced to 21 Months', url: 'https://www.justice.gov/usao-sdny/pr/anthony-weiner-sentenced-21-months-prison', date: '2017' },
      { title: 'FiveThirtyEight: The Comey Letter Probably Cost Clinton The Election', url: 'https://fivethirtyeight.com/features/the-comey-letter-probably-cost-clinton-the-election/', date: '2017' },
    ],
    aliases: ['Carlos Danger'],
    knownAssociates: [
      { name: 'Huma Abedin', relationship: 'Estranged wife; top Hillary Clinton aide; shared laptop that triggered Comey letter', href: '/entities/individuals/huma-abedin' },
      { name: 'James Comey', relationship: 'FBI Director who sent letter reopening Clinton investigation based on Weiner laptop emails', href: '/entities/individuals/james-comey' },
    ],
  },
















  'anwar-al-awlaki': {
    name: 'Anwar al-Awlaki',
    title: 'Al-Qaeda Propagandist; First American Killed by U.S. Drone Strike Without Trial',
    role: 'Al-Qaeda in the Arabian Peninsula (AQAP) Leader; Radical Cleric; U.S. Citizen Killed by Drone',
    riskLevel: 'critical',
    description: 'Anwar Nasser al-Awlaki was an American-Yemeni imam and Islamic militant who became the first U.S. citizen known to be deliberately targeted and killed by a U.S. drone strike without criminal charges or trial. Born in Las Cruces; New Mexico to Yemeni parents; al-Awlaki grew up in the United States and Yemen; earned degrees from Colorado State University and San Diego State University; and served as an imam at mosques in San Diego; Falls Church (Virginia); and briefly in the Washington D.C. area. He had contacts with three of the September 11; 2001 hijackers (Nawaf al-Hazmi; Hani Hanjour; and possibly Mohamed Atta); though the 9/11 Commission could not determine whether the contacts were knowing. After 9/11; al-Awlaki initially condemned the attacks and was presented by media as a moderate Muslim voice; but he subsequently radicalized and relocated to Yemen around 2004. He became a senior recruiter and propagandist for al-Qaeda in the Arabian Peninsula (AQAP); producing influential English-language videos and an online magazine (Inspire) that inspired multiple terrorist attacks. He communicated directly with Nidal Hasan before the 2009 Fort Hood shooting that killed 13 people; and directed Umar Farouk Abdulmutallab\'s failed 2009 Christmas Day underwear bomb plot. President Obama authorized his killing; placing him on a CIA "kill list." On September 30; 2011; a CIA drone strike in Yemen killed al-Awlaki along with Samir Khan; another American citizen. The extrajudicial killing of a U.S. citizen without due process raised profound constitutional questions. Two weeks later; his 16-year-old son Abdulrahman was also killed in a separate U.S. drone strike.',
    birthDate: 'April 21; 1971',
    birthPlace: 'Las Cruces; New Mexico; USA',
    deathDate: 'September 30; 2011',
    education: ['Colorado State University; BS Civil Engineering (1994)', 'San Diego State University; MA Education Leadership (2000)'],
    affiliations: [
      { name: 'Al-Qaeda in the Arabian Peninsula (AQAP)', role: 'Senior recruiter; propagandist; and operational planner', type: 'organization' },
    ],
    controversies: [
      'First U.S. citizen deliberately targeted and killed by U.S. drone strike without criminal charges; arrest; or trial (September 30; 2011)',
      'Had contacts with three September 11 hijackers including Nawaf al-Hazmi and Hani Hanjour; extent of foreknowledge debated',
      'Communicated directly with Fort Hood shooter Nidal Hasan before the November 2009 attack that killed 13',
      'Directed Umar Farouk Abdulmutallab\'s failed 2009 Christmas Day underwear bomb plot targeting a Detroit-bound aircraft',
      'Produced influential English-language propaganda for AQAP that inspired multiple terrorist attacks worldwide',
      'President Obama placed al-Awlaki on CIA "kill list"; ACLU failed to block targeting through lawsuit on behalf of his father',
      'His 16-year-old American son Abdulrahman was killed in a separate U.S. drone strike two weeks after his death',
      'Extrajudicial killing raised profound constitutional questions about due process rights of U.S. citizens',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'April 21; 1971', event: 'Born in Las Cruces; New Mexico to Yemeni parents' },
      { date: '1994', event: 'Graduates from Colorado State University with engineering degree' },
      { date: '1996-2000', event: 'Serves as imam at Masjid Ar-Ribat al-Islami mosque in San Diego; contacts with 9/11 hijackers' },
      { date: '2001-2002', event: 'Imam at Dar al-Hijrah mosque in Falls Church; Virginia; initially condemns 9/11 attacks' },
      { date: '2004', event: 'Relocates to Yemen; begins radicalization trajectory' },
      { date: '2009', event: 'Communicates with Nidal Hasan before Fort Hood shooting; directs underwear bomb plot' },
      { date: 'April 2010', event: 'Obama administration authorizes al-Awlaki\'s targeted killing' },
      { date: 'August 2010', event: 'Al-Awlaki\'s father sues U.S. government through ACLU to block assassination; case dismissed' },
      { date: 'September 30; 2011', event: 'Killed by CIA drone strike in al-Jawf Province; Yemen; along with Samir Khan' },
      { date: 'October 14; 2011', event: 'His 16-year-old son Abdulrahman killed in separate U.S. drone strike in Yemen' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anwar al-Awlaki', url: 'https://en.wikipedia.org/wiki/Anwar_al-Awlaki', date: '' },
      { title: 'NYT: Secret "Kill List" Proves a Test of Obama\'s Principles', url: 'https://www.nytimes.com/2012/05/29/world/obamas-leadership-in-war-on-al-qaeda.html', date: '2012' },
      { title: 'ACLU: Targeted Killing of Anwar Al-Awlaki', url: 'https://www.aclu.org/cases/al-aulaqi-v-obama-targetted-killing', date: '2010' },
    ],
    aliases: ['Anwar al-Aulaqi', 'Anwar Nasser al-Awlaki'],
    knownAssociates: [
      { name: 'Abdulrahman al-Awlaki', relationship: '16-year-old son; American citizen killed in separate U.S. drone strike two weeks later', href: '/entities/individuals/abdulrahman-al-awlaki' },
      { name: 'Nidal Hasan', relationship: 'Fort Hood shooter who corresponded with al-Awlaki before the 2009 attack', href: '/entities/individuals/nidal-hasan' },
    ],
  },

  'abdulrahman-al-awlaki': {
    name: 'Abdulrahman al-Awlaki',
    title: '16-Year-Old American Citizen Killed by U.S. Drone Strike in Yemen',
    role: 'Civilian Victim of U.S. Drone Program; Son of Anwar al-Awlaki',
    riskLevel: 'low',
    description: 'Abdulrahman Anwar al-Awlaki was a 16-year-old American citizen born in Denver; Colorado; who was killed by a U.S. drone strike on October 14; 2011; in al-Bayda Province; Yemen; just two weeks after his father Anwar al-Awlaki was killed in a separate drone strike. Abdulrahman had no known connection to terrorism and was never charged with any crime. He had reportedly left his grandparents\' home in Sana\'a to search for his father; unaware that his father had already been killed. The strike that killed Abdulrahman also killed his 17-year-old cousin and several other civilians at an outdoor restaurant. The Obama administration initially claimed the target was Ibrahim al-Banna; an Egyptian AQAP operative; but later reports indicated al-Banna was not present. When asked about the killing of the teenager; Obama\'s former press secretary Robert Gibbs infamously said Abdulrahman "should have [had] a far more responsible father." No U.S. official has ever been held accountable for his death. In January 2017; Abdulrahman\'s 8-year-old sister Nawar al-Awlaki (also an American citizen) was killed during a U.S. Navy SEAL raid in Yemen ordered by President Trump; making the al-Awlaki family one of the most tragic cases in the history of America\'s War on Terror drone program. A federal judge dismissed a wrongful death lawsuit filed by Abdulrahman\'s grandfather Nasser al-Awlaki; ruling that courts could not second-guess executive branch targeting decisions.',
    birthDate: 'August 26; 1995',
    birthPlace: 'Denver; Colorado; USA',
    deathDate: 'October 14; 2011',
    education: [],
    affiliations: [],
    controversies: [
      'Killed at age 16 by U.S. drone strike in Yemen on October 14; 2011; two weeks after his father was killed in a separate strike',
      'American citizen with no known connection to terrorism; never charged with any crime; killed alongside his 17-year-old cousin and other civilians',
      'Obama press secretary Robert Gibbs said Abdulrahman "should have [had] a far more responsible father" when asked about the killing',
      'Obama administration initially claimed the target was Ibrahim al-Banna; an Egyptian AQAP operative; who was reportedly not present at the strike location',
      'Federal judge dismissed wrongful death lawsuit filed by grandfather Nasser al-Awlaki; ruling courts could not review executive targeting decisions',
      'His 8-year-old sister Nawar al-Awlaki was killed in a January 2017 Trump-ordered Navy SEAL raid in Yemen; making three al-Awlaki family members killed by U.S. operations',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'August 26; 1995', event: 'Born in Denver; Colorado; to Anwar al-Awlaki and Gihan Mohsen Baker' },
      { date: 'September 30; 2011', event: 'Father Anwar al-Awlaki killed by U.S. drone strike in Yemen' },
      { date: 'October 14; 2011', event: 'Killed by U.S. drone strike at outdoor restaurant in al-Bayda Province; Yemen; at age 16' },
      { date: '2012', event: 'Grandfather Nasser al-Awlaki files wrongful death lawsuit against U.S. government' },
      { date: 'April 2014', event: 'Federal judge dismisses wrongful death lawsuit; ruling courts lack jurisdiction over executive targeting decisions' },
      { date: 'January 29; 2017', event: 'His 8-year-old sister Nawar killed in Trump-ordered U.S. Navy SEAL raid on al-Bayda; Yemen' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdulrahman al-Awlaki', url: 'https://en.wikipedia.org/wiki/Abdulrahman_al-Awlaki', date: '' },
      { title: 'The Atlantic: The Killing of Abdulrahman al-Awlaki', url: 'https://www.theatlantic.com/politics/archive/2012/10/how-team-obama-justifies-the-killing-of-a-16-year-old-american/264028/', date: '2012' },
      { title: 'NYT: Drone Strike in Yemen Hits Wedding Party; Killing 11', url: 'https://www.nytimes.com/2013/12/13/world/middleeast/drone-strike-in-yemen-hits-wedding-party-killing-11.html', date: '2013' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Anwar al-Awlaki', relationship: 'Father; AQAP leader killed by U.S. drone strike two weeks earlier', href: '/entities/individuals/anwar-al-awlaki' },
    ],
  },
















  'abu-zubaydah': {
    name: 'Abu Zubaydah',
    title: 'First CIA "Enhanced Interrogation" Subject; Held Without Charges for 23+ Years',
    role: 'CIA Black Site Detainee; Guantanamo Bay Prisoner; Torture Program Test Subject',
    riskLevel: 'low',
    description: 'Abu Zubaydah (born Zayn al-Abidin Muhammad Husayn) is a Palestinian man born in Saudi Arabia who became the first "high-value detainee" subjected to the CIA\'s "enhanced interrogation techniques" program; effectively serving as the guinea pig for the U.S. government\'s post-9/11 torture regime. Captured in Faisalabad; Pakistan in March 2002 during a joint CIA-FBI-ISI raid where he was shot three times; Abu Zubaydah was initially described by the Bush administration as al-Qaeda\'s "number three" leader and a senior logistics coordinator. This characterization was used to justify his treatment. He was waterboarded 83 times in a single month at a CIA black site in Thailand (codenamed "Cat\'s Eye"); subjected to sleep deprivation for up to 180 hours; confined in coffin-sized boxes; slammed against walls; stripped naked; and exposed to extreme cold. He lost his left eye during captivity. The CIA\'s own internal assessments later concluded Abu Zubaydah was not a member of al-Qaeda and had no advance knowledge of the September 11 attacks; directly contradicting the justifications used for his torture. Despite this; he has been held at Guantanamo Bay since September 2006 and has never been charged with any crime. The U.S. government has actively blocked his attempts to testify in international courts about his treatment; including invoking "state secrets" privilege when Poland investigated whether a CIA black site operated on its soil. His case was heard by the U.S. Supreme Court in Husayn v. United States (2022); which ruled 6-3 that the government could invoke state secrets to block his testimony about his torture. Abu Zubaydah has been imprisoned for over 23 years without trial; making him one of the longest-held uncharged detainees in modern history.',
    birthDate: 'March 12; 1971',
    birthPlace: 'Riyadh; Saudi Arabia',
    education: [],
    affiliations: [],
    controversies: [
      'Waterboarded 83 times in a single month at CIA black site in Thailand; first subject of the CIA\'s "enhanced interrogation techniques" program',
      'CIA\'s own assessments later determined he was not a member of al-Qaeda and had no advance knowledge of September 11 attacks; contradicting original justifications for his torture',
      'Lost his left eye during captivity; subjected to sleep deprivation up to 180 hours; confined in coffin-sized boxes; wall-slamming; and extreme cold exposure',
      'Held at Guantanamo Bay for over 23 years without ever being charged with any crime',
      'Bush administration falsely described him as al-Qaeda\'s "number three" leader to justify extreme interrogation measures',
      'U.S. government invoked state secrets privilege to block his testimony in Polish investigation of CIA black site on Polish soil',
      'U.S. Supreme Court ruled 6-3 in Husayn v. United States (2022) that government could invoke state secrets to prevent his testimony about CIA torture',
      'His torture was documented in the 2014 Senate Intelligence Committee report on CIA Detention and Interrogation Program (the "Torture Report")',
      'CIA psychologists James Mitchell and Bruce Jessen designed the interrogation program used on him; later sued by ACLU on behalf of detainees',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'March 12; 1971', event: 'Born in Riyadh; Saudi Arabia; Palestinian descent' },
      { date: 'March 28; 2002', event: 'Captured in Faisalabad; Pakistan during joint CIA-FBI-ISI raid; shot three times' },
      { date: 'April-August 2002', event: 'Held at CIA black site "Cat\'s Eye" in Thailand; waterboarded 83 times; subjected to full range of "enhanced interrogation techniques"' },
      { date: '2002-2006', event: 'Transferred through multiple CIA black sites ("black sites") in Thailand; Poland; Morocco; Lithuania; and Afghanistan' },
      { date: 'September 2006', event: 'Transferred to Guantanamo Bay after President Bush publicly acknowledged CIA black sites program' },
      { date: 'December 2014', event: 'Senate Intelligence Committee "Torture Report" publicly documents his treatment in detail' },
      { date: '2022', event: 'U.S. Supreme Court rules 6-3 in Husayn v. United States that state secrets privilege blocks his testimony about CIA torture' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abu Zubaydah', url: 'https://en.wikipedia.org/wiki/Abu_Zubaydah', date: '' },
      { title: 'Senate Select Committee on Intelligence: Study of the CIA Detention and Interrogation Program', url: 'https://www.intelligence.senate.gov/sites/default/files/publications/CRPT-113srpt288.pdf', date: '2014' },
      { title: 'Supreme Court: United States v. Husayn (Abu Zubaydah)', url: 'https://www.supremecourt.gov/opinions/21pdf/20-827_i426.pdf', date: '2022' },
    ],
    aliases: ['Zayn al-Abidin Muhammad Husayn', 'Zayn al-Abidin Abu Zubaydah'],
    knownAssociates: [],
  },
















  'ahmad-chalabi': {
    name: 'Ahmad Chalabi',
    title: 'Iraqi Exile Who Fed Fabricated WMD Intelligence to Justify the Iraq War',
    role: 'Iraqi National Congress Leader; Iraqi Deputy Prime Minister; Intelligence Fabricator',
    riskLevel: 'high',
    description: 'Ahmad Abdel Hadi Chalabi was an Iraqi exile politician and convicted fraudster who played a pivotal role in manufacturing the false intelligence that the Bush administration used to justify the 2003 invasion of Iraq. As the leader of the Iraqi National Congress (INC); a CIA-funded exile opposition group; Chalabi cultivated relationships with American neoconservatives including Paul Wolfowitz; Richard Perle; and Dick Cheney\'s office; feeding them fabricated claims about Saddam Hussein\'s weapons of mass destruction programs. The INC provided the infamous source codenamed "Curveball" (Rafid Ahmed Alwan al-Janabi); whose completely fabricated claims about mobile biological weapons labs were cited by Secretary of State Colin Powell in his February 2003 UN Security Council presentation. The U.S. government funneled over $100 million to Chalabi\'s INC over the course of the 1990s and early 2000s through the Iraq Liberation Act and CIA funding. Before his Iraq War role; Chalabi had been convicted in absentia by a Jordanian military tribunal in 1992 of 31 charges of bank fraud; embezzlement; and currency speculation related to the collapse of Petra Bank; which he had founded. The collapse cost depositors over $300 million. Despite his criminal record; the Pentagon flew him into southern Iraq in April 2003 with 700 of his militia fighters as American forces invaded. He briefly served as Iraq\'s interim oil minister and acting finance minister; and was elected to the Iraqi parliament. In 2004; Iraqi police raided his Baghdad compound on charges of counterfeiting; and U.S. intelligence agencies severed ties after concluding he had been passing classified American intelligence to Iran. He died of a heart attack in Baghdad on November 3; 2015.',
    birthDate: 'October 30; 1944',
    birthPlace: 'Baghdad; Iraq',
    deathDate: 'November 3; 2015',
    education: ['Massachusetts Institute of Technology (MIT); BS Mathematics (1965)', 'University of Chicago; PhD Mathematics (1969)'],
    affiliations: [
      { name: 'Iraqi National Congress (INC)', role: 'Founder and president; CIA-funded Iraqi exile opposition group', type: 'organization' },
      { name: 'Petra Bank', role: 'Founder; convicted of fraud in its collapse', type: 'corporation' },
    ],
    controversies: [
      'Fabricated WMD intelligence fed to the Bush administration through the INC that became the primary justification for the 2003 Iraq War; which killed hundreds of thousands',
      'INC provided the source "Curveball" (Rafid Ahmed Alwan al-Janabi) whose completely fabricated claims about mobile bioweapons labs were cited by Colin Powell at the UN',
      'Received over $100 million in U.S. government funding through CIA programs and the Iraq Liberation Act despite being a convicted fraudster',
      'Convicted in absentia by Jordanian military tribunal in 1992 on 31 charges of bank fraud; embezzlement; and currency speculation; Petra Bank collapse cost depositors $300+ million',
      'Pentagon flew him into southern Iraq in April 2003 with 700 militia fighters during the U.S. invasion',
      'U.S. intelligence severed ties in 2004 after determining he had been passing classified American intelligence to Iran',
      'Iraqi police raided his Baghdad compound in 2004 on counterfeiting charges',
      'Cultivated deep relationships with neoconservatives Paul Wolfowitz; Richard Perle; and Dick Cheney\'s office to push for Iraq War',
    ],
    charges: [
      { charge: 'Bank fraud; embezzlement; and currency speculation (31 counts)', status: 'Convicted in absentia by Jordanian military tribunal; 1992; sentenced to 22 years hard labor' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: 'October 30; 1944', event: 'Born in Baghdad to a wealthy Shia Muslim family' },
      { date: '1965', event: 'Graduates from MIT with mathematics degree' },
      { date: '1969', event: 'Earns PhD in mathematics from University of Chicago' },
      { date: '1977', event: 'Founds Petra Bank in Jordan; becomes its chairman' },
      { date: '1989', event: 'Flees Jordan as Petra Bank collapses; $300+ million in depositor losses' },
      { date: '1992', event: 'Convicted in absentia by Jordanian military tribunal on 31 charges; sentenced to 22 years hard labor' },
      { date: '1992', event: 'Founds Iraqi National Congress (INC) with CIA backing to oppose Saddam Hussein\'s regime' },
      { date: '1998', event: 'Iraq Liberation Act signed; authorizes $97 million for Iraqi opposition including Chalabi\'s INC' },
      { date: '2002-2003', event: 'INC feeds fabricated WMD intelligence to Bush administration and sympathetic journalists; justifying Iraq War' },
      { date: 'February 5; 2003', event: 'Colin Powell cites INC-sourced "Curveball" intelligence at UN Security Council; presenting fabricated claims as fact' },
      { date: 'April 2003', event: 'Pentagon flies Chalabi and 700 militia fighters into southern Iraq during U.S. invasion' },
      { date: 'May 2004', event: 'U.S. intelligence severs ties after concluding Chalabi passed classified information to Iran; Iraqi police raid his compound' },
      { date: '2005', event: 'Elected to Iraqi parliament; briefly serves as Deputy Prime Minister and acting Oil Minister' },
      { date: 'November 3; 2015', event: 'Dies of heart attack at his home in Baghdad at age 71' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ahmad Chalabi', url: 'https://en.wikipedia.org/wiki/Ahmad_Chalabi', date: '' },
      { title: 'NYT: Ahmad Chalabi; Iraqi Politician Who Pushed for U.S. Invasion; Dies at 71', url: 'https://www.nytimes.com/2015/11/04/world/middleeast/ahmad-chalabi-iraq-dead.html', date: '2015' },
      { title: 'PBS Frontline: The Dark Side - Ahmad Chalabi', url: 'https://www.pbs.org/wgbh/frontline/article/the-dark-side/', date: '2006' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Paul Wolfowitz', relationship: 'Deputy Secretary of Defense and key neoconservative ally who championed Chalabi\'s intelligence', href: '/entities/individuals/paul-wolfowitz' },
      { name: 'Richard Perle', relationship: 'Defense Policy Board chairman and close ally who promoted Chalabi within Bush administration', href: '/entities/individuals/richard-perle' },
    ],
  },



  'alan-greenspan': {
    name: 'Alan Greenspan',
    title: 'Federal Reserve Chairman Who Refused to Regulate Derivatives; Blamed for 2008 Financial Crisis',
    role: 'Federal Reserve Chairman (1987-2006); Architect of Deregulation; Ayn Rand Disciple',
    riskLevel: 'high',
    description: 'Alan Greenspan served as Chairman of the Federal Reserve from 1987 to 2006; the second-longest tenure in the institution\'s history; and is widely considered one of the central figures responsible for the conditions that led to the 2008 global financial crisis. A devoted disciple of Ayn Rand who attended her inner circle and contributed an essay defending the gold standard to her book "Capitalism: The Unknown Ideal"; Greenspan brought a fundamentalist free-market ideology to the most powerful economic position in the world. He systematically blocked regulation of over-the-counter derivatives; personally intervening in 1998 to prevent the Commodity Futures Trading Commission (CFTC) under Brooksley Born from regulating credit default swaps and other derivatives that would later detonate the global economy. When Born warned that unregulated derivatives posed systemic risk; Greenspan; along with Robert Rubin and Larry Summers; successfully pressured Congress to strip the CFTC of regulatory authority through the Commodity Futures Modernization Act of 2000. He kept interest rates at historic lows from 2001-2004; fueling the housing bubble; and championed adjustable-rate mortgages even as predatory lending exploded. He coined the term "irrational exuberance" in 1996 to describe the dot-com bubble but took no action to restrain it. The unregulated derivatives market he protected grew to over $600 trillion in notional value by 2008 and was the primary accelerant of the financial crisis that destroyed $10 trillion in American household wealth; caused 10 million foreclosures; and triggered the worst global recession since the Great Depression. In October 2008; testifying before Congress; Greenspan admitted he had "found a flaw" in his free-market ideology; stating: "I made a mistake in presuming that the self-interests of organizations; specifically banks and others; were such that they were best capable of protecting their own shareholders." Despite this admission; no one was held accountable.',
    birthDate: 'March 6; 1926',
    birthPlace: 'New York City; New York; USA',
    education: ['New York University; BS Economics (summa cum laude; 1948)', 'New York University; MA Economics (1950)', 'New York University; PhD Economics (1977)'],
    affiliations: [
      { name: 'Federal Reserve', role: 'Chairman (1987-2006); longest-serving chair until surpassed by some measures', type: 'agency' },
      { name: 'Townsend-Greenspan & Co.', role: 'Founder and president of economic consulting firm (1954-1974; 1977-1987)', type: 'corporation' },
    ],
    controversies: [
      'Personally blocked Brooksley Born and the CFTC from regulating over-the-counter derivatives in 1998; the unregulated market grew to $600+ trillion and was the primary accelerant of the 2008 crisis',
      'Supported the Commodity Futures Modernization Act of 2000 which stripped the CFTC of regulatory authority over derivatives; effectively deregulating the instruments that destroyed the global economy',
      'Kept federal funds rate at 1% from June 2003 to June 2004; fueling the housing bubble through artificially cheap credit',
      'Publicly championed adjustable-rate mortgages in February 2004; encouraging borrowers to take on risky debt just as the housing bubble was inflating',
      'Coined "irrational exuberance" in 1996 to describe dot-com bubble but took no regulatory action to prevent its inflation or collapse',
      'Admitted before Congress in October 2008 that his free-market ideology had a "flaw" and that he had been wrong about self-regulation of financial markets',
      'Ayn Rand disciple who attended her inner circle for decades; brought fundamentalist laissez-faire ideology to the Federal Reserve',
      'His deregulatory policies contributed directly to the 2008 crisis that destroyed $10 trillion in household wealth; caused 10 million foreclosures; and triggered global recession',
      'Opposed regulation of predatory subprime lending despite warnings from consumer advocates and the FBI about epidemic mortgage fraud',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'March 6; 1926', event: 'Born in New York City' },
      { date: '1950s-1960s', event: 'Member of Ayn Rand\'s inner circle; "The Collective"; contributes essay on gold standard to her book' },
      { date: 'August 11; 1987', event: 'Appointed Federal Reserve Chairman by President Reagan' },
      { date: 'December 5; 1996', event: 'Coins "irrational exuberance" in speech warning about dot-com stock valuations; takes no action' },
      { date: '1998', event: 'Blocks Brooksley Born\'s CFTC from regulating over-the-counter derivatives; pressures Congress to strip CFTC authority' },
      { date: 'December 2000', event: 'Commodity Futures Modernization Act signed; deregulating derivatives market Greenspan championed' },
      { date: 'June 2003', event: 'Cuts federal funds rate to 1%; lowest in 45 years; fueling housing bubble' },
      { date: 'February 2004', event: 'Publicly recommends adjustable-rate mortgages to American homeowners' },
      { date: 'January 31; 2006', event: 'Retires as Federal Reserve Chairman after 18.5 years' },
      { date: 'October 23; 2008', event: 'Testifies before House Oversight Committee; admits "I found a flaw" in his free-market ideology' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Greenspan', url: 'https://en.wikipedia.org/wiki/Alan_Greenspan', date: '' },
      { title: 'PBS Frontline: The Warning (Brooksley Born vs. Greenspan)', url: 'https://www.pbs.org/wgbh/frontline/documentary/warning/', date: '2009' },
      { title: 'NYT: Greenspan Concedes Error on Regulation', url: 'https://www.nytimes.com/2008/10/24/business/economy/24panel.html', date: '2008' },
    ],
    aliases: ['The Maestro', 'The Oracle'],
    knownAssociates: [
      { name: 'Brooksley Born', relationship: 'CFTC Chair whose warnings about derivatives he suppressed', href: '/entities/individuals/brooksley-born' },
    ],
  },
















  'alfredo-stroessner': {
    name: 'Alfredo Stroessner',
    title: 'Paraguayan Military Dictator (1954-1989); Operation Condor Participant',
    role: 'President of Paraguay (1954-1989); Military Dictator; Cold War U.S. Ally',
    riskLevel: 'critical',
    description: 'General Alfredo Stroessner Matiauda ruled Paraguay as an authoritarian military dictator for 35 years from 1954 to 1989; making his regime one of the longest-running dictatorships in South American history. A career military officer of German descent; Stroessner seized power in a May 1954 coup d\'etat and maintained control through a combination of rigged elections; systematic repression; and unwavering anti-communist alignment with the United States during the Cold War. His regime was a key participant in Operation Condor; the U.S.-backed coordination of South American military dictatorships to track down; kidnap; torture; and assassinate political dissidents across national borders. Under Stroessner; Paraguay became a haven for fugitive Nazi war criminals including Josef Mengele ("The Angel of Death" of Auschwitz); who lived openly in Paraguay under government protection. The "Archives of Terror"; discovered in 1992 in a Lambare police station; documented the systematic torture; disappearance; and murder of thousands of political opponents during his rule; and revealed the operational details of Operation Condor across the continent. An estimated 3;000-4;000 people were killed and 400-500 forcibly disappeared during his regime; while tens of thousands were imprisoned and tortured. Stroessner maintained power through a permanent state of siege that lasted virtually his entire 35-year rule; was re-elected seven times in sham elections; and enriched himself and his Colorado Party through control of smuggling networks (particularly cigarettes; narcotics; and counterfeit goods) that earned Paraguay the nickname "the world\'s largest duty-free shop." He was overthrown in a February 1989 coup by his own son-in-law General Andres Rodriguez and fled to exile in Brasilia; Brazil; where he lived until his death in 2006. He was never prosecuted for his crimes.',
    birthDate: 'November 3; 1912',
    birthPlace: 'Encarnacion; Paraguay',
    deathDate: 'August 16; 2006',
    education: ['Military Academy of Paraguay; graduated 1932'],
    affiliations: [
      { name: 'Colorado Party (Paraguay)', role: 'Party leader who fused Colorado Party with military and state apparatus for 35 years', type: 'organization' },
      { name: 'Operation Condor', role: 'Key participant in U.S.-backed coordination of South American military dictatorships targeting political dissidents', type: 'organization' },
    ],
    controversies: [
      'Ruled Paraguay as military dictator for 35 years (1954-1989) under permanent state of siege; re-elected seven times in rigged sham elections',
      'Key participant in Operation Condor; the U.S.-backed program coordinating South American dictatorships to kidnap; torture; and assassinate political dissidents across borders',
      'An estimated 3;000-4;000 people killed and 400-500 forcibly disappeared under his regime; tens of thousands imprisoned and tortured',
      'Harbored fugitive Nazi war criminals including Josef Mengele; who lived openly in Paraguay under government protection',
      'The "Archives of Terror" discovered in 1992 documented the systematic torture and murder under his regime and revealed Operation Condor\'s operational details',
      'Controlled massive smuggling networks in cigarettes; narcotics; and counterfeit goods; earning Paraguay the nickname "the world\'s largest duty-free shop"',
      'Maintained permanent state of siege for virtually his entire 35-year rule; suspending constitutional rights',
      'Received consistent U.S. support during the Cold War as an anti-communist ally despite well-documented human rights atrocities',
      'Overthrown by his own son-in-law General Andres Rodriguez in 1989; fled to Brazil and was never prosecuted for any crimes',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'November 3; 1912', event: 'Born in Encarnacion; Paraguay to a German immigrant father and Guarani mother' },
      { date: '1932-1935', event: 'Fights in the Chaco War against Bolivia; rises rapidly through military ranks' },
      { date: 'May 4; 1954', event: 'Seizes power in military coup; becomes President of Paraguay' },
      { date: '1954-1989', event: 'Re-elected seven times in sham elections under permanent state of siege; rules as authoritarian dictator' },
      { date: '1970s', event: 'Paraguay becomes active participant in Operation Condor with Argentina; Chile; Brazil; Uruguay; and Bolivia' },
      { date: '1959-1960s', event: 'Harbors Josef Mengele and other Nazi war criminals who flee to Paraguay under government protection' },
      { date: 'February 3; 1989', event: 'Overthrown in coup by son-in-law General Andres Rodriguez; flees to exile in Brasilia; Brazil' },
      { date: 'December 22; 1992', event: '"Archives of Terror" containing 700;000 documents on Operation Condor and regime abuses discovered in Lambare police station' },
      { date: 'August 16; 2006', event: 'Dies in exile in Brasilia; Brazil at age 93; never prosecuted for crimes' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alfredo Stroessner', url: 'https://en.wikipedia.org/wiki/Alfredo_Stroessner', date: '' },
      { title: 'National Security Archive: Archives of Terror', url: 'https://nsarchive.gwu.edu/project/paraguay-documentation-project', date: '' },
      { title: 'NYT: Alfredo Stroessner; Paraguay\'s Enduring Dictator; Dies at 93', url: 'https://www.nytimes.com/2006/08/16/world/americas/16stroessner.html', date: '2006' },
    ],
    aliases: ['El Tiranosauro (The Tyrannosaurus)', 'El Rubio (The Blond One)'],
    knownAssociates: [
      { name: 'Augusto Pinochet', relationship: 'Chilean dictator and fellow Operation Condor participant', href: '/entities/individuals/augusto-pinochet' },
    ],
  },

















  'andrew-jackson': {
    name: 'Andrew Jackson',
    title: '7th President of the United States; Architect of the Trail of Tears',
    role: '7th President of the United States (1829-1837); Military General; Indian Removal Architect',
    riskLevel: 'critical',
    description: 'Andrew Jackson was the 7th President of the United States; serving from 1829 to 1837; and is one of the most controversial figures in American history. A military hero celebrated for his victory at the Battle of New Orleans in 1815; Jackson was also the architect of the Indian Removal Act of 1830; which authorized the forced relocation of approximately 60;000 Native Americans from their ancestral homelands in the southeastern United States to territories west of the Mississippi River. The resulting forced marches; known collectively as the Trail of Tears; killed an estimated 15;000-20;000 Cherokee; Chickasaw; Choctaw; Creek; and Seminole people through exposure; disease; and starvation. Jackson defied a Supreme Court ruling (Worcester v. Georgia; 1832) in which Chief Justice John Marshall ruled that Georgia had no authority over Cherokee lands; Jackson reportedly responded: "John Marshall has made his decision; now let him enforce it." He was the first president to extensively use the spoils system; rewarding political allies with government positions regardless of qualification. Jackson destroyed the Second Bank of the United States by vetoing its recharter in 1832 and removing federal deposits; triggering the Panic of 1837; one of the worst economic depressions in American history up to that point. He personally enslaved over 300 people at his Hermitage plantation in Tennessee. He fought numerous duels; killing Charles Dickinson in 1806 and carrying bullets in his body for years from other conflicts. Jackson\'s populist legacy has been invoked by various political movements; and Donald Trump hung Jackson\'s portrait in the Oval Office. He remains on the $20 bill despite campaigns to replace him with Harriet Tubman; a Treasury Department plan announced in 2016 that was shelved by the Trump administration.',
    birthDate: 'March 15; 1767',
    birthPlace: 'Waxhaws region; border of North and South Carolina',
    deathDate: 'June 8; 1845',
    education: [],
    affiliations: [
      { name: 'Democratic Party', role: 'Founder of the modern Democratic Party', type: 'organization' },
    ],
    controversies: [
      'Signed the Indian Removal Act of 1830; forcibly relocating ~60;000 Native Americans; the resulting Trail of Tears killed an estimated 15;000-20;000 people',
      'Defied the Supreme Court ruling in Worcester v. Georgia (1832) that recognized Cherokee sovereignty; reportedly saying "John Marshall has made his decision; now let him enforce it"',
      'Personally enslaved over 300 people at his Hermitage plantation in Tennessee',
      'Destroyed the Second Bank of the United States by vetoing its recharter and removing deposits; triggering the Panic of 1837 economic depression',
      'Killed Charles Dickinson in an 1806 duel; fought numerous other duels throughout his life',
      'Pioneered the spoils system; rewarding political allies with government positions regardless of qualification',
      'Conducted unauthorized military campaigns in Spanish Florida (1818) including executing two British subjects; sparking international diplomatic crisis',
      'Remains on the $20 bill despite campaigns to replace him with Harriet Tubman; Treasury plan announced in 2016 was shelved by Trump administration',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'March 15; 1767', event: 'Born in Waxhaws region; border of North and South Carolina' },
      { date: '1806', event: 'Kills Charles Dickinson in a duel; takes a bullet near his heart that remains lodged for life' },
      { date: 'January 8; 1815', event: 'Leads American forces to decisive victory at Battle of New Orleans against British' },
      { date: '1818', event: 'Invades Spanish Florida without authorization; executes two British subjects; sparks diplomatic crisis' },
      { date: 'March 4; 1829', event: 'Inaugurated as 7th President of the United States' },
      { date: 'May 28; 1830', event: 'Signs Indian Removal Act authorizing forced relocation of Native Americans from southeastern United States' },
      { date: '1832', event: 'Defies Supreme Court ruling in Worcester v. Georgia recognizing Cherokee sovereignty' },
      { date: '1832', event: 'Vetoes recharter of Second Bank of the United States; begins "Bank War"' },
      { date: '1836-1839', event: 'Trail of Tears forced marches kill approximately 4;000 Cherokee and thousands of other Native peoples' },
      { date: '1837', event: 'Panic of 1837 economic depression triggered partly by his destruction of the national bank' },
      { date: 'June 8; 1845', event: 'Dies at the Hermitage plantation in Nashville; Tennessee' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Jackson', url: 'https://en.wikipedia.org/wiki/Andrew_Jackson', date: '' },
      { title: 'Smithsonian: The True Story of the Trail of Tears', url: 'https://www.smithsonianmag.com/history/the-cherokee-trail-of-tears-180953166/', date: '' },
      { title: 'History.com: Indian Removal Act', url: 'https://www.history.com/topics/native-american-history/trail-of-tears', date: '' },
    ],
    aliases: ['Old Hickory', 'Sharp Knife (Cherokee name)'],
    knownAssociates: [],
  },



  'angelo-mozilo': {
    name: 'Angelo Mozilo',
    title: 'Countrywide Financial CEO; Face of the Subprime Mortgage Crisis',
    role: 'Countrywide Financial Co-Founder and CEO; Subprime Mortgage Kingpin',
    riskLevel: 'critical',
    description: 'Angelo R. Mozilo co-founded Countrywide Financial Corporation in 1969 and built it into the largest mortgage lender in the United States; originating roughly one in five mortgages at its peak. Mozilo became the face of the subprime mortgage crisis that triggered the 2008 global financial meltdown. Under his leadership; Countrywide aggressively pushed subprime and adjustable-rate mortgages to borrowers who could not afford them; including through a notorious "Friends of Angelo" VIP loan program that provided sweetheart mortgage deals to politicians; Fannie Mae executives; and other influential figures who could help the company avoid regulatory scrutiny. Internal Countrywide emails; later revealed in litigation; showed Mozilo personally describing Countrywide\'s own loan products as "toxic" and "poison" in 2006 while publicly assuring investors the company was sound. He wrote in one email: "In all my years in the business I have never seen a more toxic product." The FBI described the company\'s lending practices as a contributing factor to what officials called an "epidemic" of mortgage fraud. Countrywide was acquired by Bank of America in 2008 for $4.1 billion in a fire sale; saddling BofA with tens of billions in legal liabilities. Mozilo personally earned over $470 million in compensation from 2000-2008; including $140 million from stock sales executed in the years before the collapse while he knew the loans were deteriorating. In 2010; the SEC charged Mozilo with securities fraud and insider trading. He settled for $67.5 million; with $45 million paid by Countrywide\'s (now BofA\'s) insurance. He never admitted wrongdoing and was never criminally charged; despite being personally responsible for practices that contributed to approximately 4 million foreclosures and the destruction of trillions of dollars in household wealth.',
    birthDate: 'June 16; 1938',
    birthPlace: 'Bronx; New York; USA',
    education: ['Fordham University; BS Business (1960)', 'New York University; MBA (1963)'],
    affiliations: [
      { name: 'Countrywide Financial Corporation', role: 'Co-founder (1969) and CEO (1969-2008); built into largest U.S. mortgage lender', type: 'corporation' },
    ],
    controversies: [
      'Built Countrywide into the largest subprime mortgage lender in the U.S.; its practices were a primary cause of the 2008 global financial crisis',
      'Internal emails showed Mozilo describing his own loan products as "toxic" and "poison" in 2006 while publicly assuring investors the company was sound',
      'Ran "Friends of Angelo" VIP loan program providing sweetheart mortgages to politicians; Fannie Mae executives; and other influential figures to avoid regulatory scrutiny',
      'Earned $470+ million in personal compensation from 2000-2008 including $140 million from insider stock sales while knowing loans were deteriorating',
      'SEC charged him with securities fraud and insider trading in 2010; settled for $67.5 million with $45 million paid by BofA insurance; never admitted wrongdoing',
      'Never criminally charged despite FBI describing Countrywide\'s practices as contributing to an epidemic of mortgage fraud',
      'Countrywide sold to Bank of America for $4.1 billion fire sale in 2008; saddling BofA with tens of billions in subsequent legal liabilities',
      'Countrywide\'s lending practices contributed to approximately 4 million foreclosures and the destruction of trillions in household wealth',
      'Federal Reserve rejected application by Countrywide to become a savings bank in 2007 amid mounting concerns about loan quality',
    ],
    charges: [
      { charge: 'Securities fraud and insider trading (SEC civil charges)', status: 'Settled in 2010 for $67.5 million; no admission of wrongdoing; $45M paid by BofA insurance' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: 'June 16; 1938', event: 'Born in the Bronx; New York to Italian immigrant parents' },
      { date: '1969', event: 'Co-founds Countrywide Credit Industries with David Loeb' },
      { date: '2004-2006', event: 'Countrywide aggressively expands subprime and adjustable-rate mortgage origination; becoming largest U.S. mortgage lender' },
      { date: '2006', event: 'Writes internal emails calling Countrywide\'s own products "toxic" and "the most dangerous product in existence" while selling $140M in stock' },
      { date: 'August 2007', event: 'Countrywide draws down $11.5 billion emergency credit line as mortgage market collapses' },
      { date: 'January 2008', event: 'Bank of America announces acquisition of Countrywide for $4.1 billion; a fraction of its former valuation' },
      { date: 'June 2009', event: 'SEC files civil securities fraud and insider trading charges against Mozilo' },
      { date: 'October 2010', event: 'Mozilo settles with SEC for $67.5 million; never admits wrongdoing; avoids criminal prosecution' },
      { date: '2014', event: 'Bank of America reaches $16.65 billion settlement with DOJ over Countrywide-era mortgage fraud; largest settlement in U.S. history at the time' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Angelo Mozilo', url: 'https://en.wikipedia.org/wiki/Angelo_Mozilo', date: '' },
      { title: 'SEC: Mozilo Settlement', url: 'https://www.sec.gov/news/press/2010/2010-197.htm', date: '2010' },
      { title: 'NYT: Friends of Angelo VIP Loan Program', url: 'https://www.nytimes.com/2008/06/07/business/07mozilo.html', date: '2008' },
    ],
    aliases: ['The Tan Man (media nickname for his permanent deep tan)'],
    knownAssociates: [],
  },
















  'anthony-kennedy': {
    name: 'Anthony Kennedy',
    title: 'Supreme Court Swing Vote; Citizens United Author; Suspicious Retirement Timing',
    role: 'Associate Justice; U.S. Supreme Court (1988-2018); Reagan Appointee; Swing Vote',
    riskLevel: 'medium',
    description: 'Anthony McLeod Kennedy served as an Associate Justice of the United States Supreme Court from 1988 to 2018; appointed by President Reagan after the Senate rejected Robert Bork. Kennedy became the court\'s pivotal swing vote for decades; authoring landmark opinions on both sides of the ideological divide. He wrote the majority opinions in Citizens United v. FEC (2010); which unleashed unlimited corporate spending in elections by ruling that political spending is protected free speech; Obergefell v. Hodges (2015); which legalized same-sex marriage nationwide; and Lawrence v. Texas (2003); which struck down sodomy laws. His retirement in June 2018 at age 81 raised significant questions about conflicts of interest. Kennedy\'s son Justin Kennedy was a senior managing director at Deutsche Bank; which had a long and controversial relationship with Donald Trump. Deutsche Bank loaned Trump over $2 billion when virtually no other bank would lend to him following his multiple bankruptcies. Justin Kennedy\'s division at Deutsche Bank was directly involved in some of these loans. Kennedy retired under circumstances that gave Trump the opportunity to appoint Brett Kavanaugh; Kennedy\'s former law clerk. The New York Times reported that Trump and Kennedy had discussed potential successors; specifically Kavanaugh; before Kennedy announced his retirement. Kennedy also authored the majority opinion in Shelby County v. Holder (2013); which gutted the Voting Rights Act by striking down the preclearance formula; leading to a wave of voter suppression laws in states with histories of racial discrimination. His Citizens United decision has been credited with fundamentally corrupting American democracy by allowing billionaires and corporations to spend unlimited sums influencing elections through Super PACs and dark money organizations.',
    birthDate: 'July 23; 1936',
    birthPlace: 'Sacramento; California; USA',
    education: ['Stanford University; BA Political Science (1958)', 'London School of Economics (1957-1958)', 'Harvard Law School; JD (1961)'],
    affiliations: [
      { name: 'U.S. Supreme Court', role: 'Associate Justice (1988-2018); appointed by President Reagan', type: 'agency' },
    ],
    controversies: [
      'Authored Citizens United v. FEC (2010); unleashing unlimited corporate and billionaire spending in elections; fundamentally corrupting American democratic process',
      'Son Justin Kennedy was senior managing director at Deutsche Bank; which loaned Trump $2+ billion when no other bank would; creating conflict of interest questions around his retirement',
      'Retired in June 2018 under circumstances that gave Trump the ability to appoint Brett Kavanaugh; Kennedy\'s own former law clerk; NYT reported they discussed Kavanaugh specifically before retirement announcement',
      'Authored Shelby County v. Holder (2013) gutting the Voting Rights Act preclearance formula; leading to wave of voter suppression laws',
      'Citizens United decision has been credited with enabling billions in dark money to flow into American elections through Super PACs and 501(c)(4) organizations',
      'Deutsche Bank-Trump-Kennedy connection: Justin Kennedy\'s division at Deutsche Bank was involved in Trump loans; raising questions about whether the retirement was connected to Trump-Deutsche Bank relationship',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'July 23; 1936', event: 'Born in Sacramento; California' },
      { date: 'February 18; 1988', event: 'Confirmed as Supreme Court Associate Justice after Reagan\'s first two nominees (Bork and Ginsburg) failed' },
      { date: 'June 26; 2003', event: 'Authors Lawrence v. Texas striking down sodomy laws; landmark gay rights decision' },
      { date: 'January 21; 2010', event: 'Authors Citizens United v. FEC allowing unlimited corporate spending in elections' },
      { date: 'June 25; 2013', event: 'Authors Shelby County v. Holder gutting Voting Rights Act preclearance requirement' },
      { date: 'June 26; 2015', event: 'Authors Obergefell v. Hodges legalizing same-sex marriage nationwide' },
      { date: 'June 27; 2018', event: 'Announces retirement from Supreme Court; Trump nominates Brett Kavanaugh (Kennedy\'s former clerk) as replacement' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anthony Kennedy', url: 'https://en.wikipedia.org/wiki/Anthony_Kennedy', date: '' },
      { title: 'NYT: Kennedy and Trump Had Discussed Kavanaugh Before Retirement', url: 'https://www.nytimes.com/2018/06/28/us/politics/trump-anthony-kennedy-retirement.html', date: '2018' },
      { title: 'Business Insider: Justin Kennedy and Deutsche Bank', url: 'https://www.businessinsider.com/anthony-kennedy-son-loaned-president-trump-over-a-billion-dollars-2018-6', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Brett Kavanaugh', relationship: 'Former Kennedy law clerk who replaced him on the Supreme Court after Trump nomination', href: '/entities/individuals/brett-kavanaugh' },
    ],
  },
















  'antonio-taguba': {
    name: 'Antonio Taguba',
    title: 'U.S. Army General Who Authored Abu Ghraib Torture Report; Career Destroyed for Telling Truth',
    role: 'U.S. Army Major General; Author of the Taguba Report on Abu Ghraib Torture',
    riskLevel: 'low',
    description: 'Major General Antonio Mario Taguba is a retired U.S. Army officer and the first Filipino-American to achieve the rank of general in the United States military. He is best known for authoring the classified "Taguba Report" (Article 15-6 Investigation of the 800th Military Police Brigade); which documented the systematic torture and abuse of detainees at the Abu Ghraib prison in Iraq. Ordered to investigate allegations of abuse in January 2004 by Lieutenant General Ricardo Sanchez; Taguba conducted a thorough investigation and produced a devastating 53-page report documenting "sadistic; blatant; and wanton criminal abuses" including beatings; sexual humiliation; the use of military dogs to intimidate naked detainees; forced nudity; simulated electrocution; and other acts that violated the Geneva Conventions and the Uniform Code of Military Justice. The report concluded the abuse was systemic and not the work of "a few bad apples" as the Bush administration would later claim. When the Abu Ghraib photographs became public in April 2004; Taguba\'s report corroborated the visual evidence. However; Taguba\'s reward for telling the truth was the destruction of his career. He was ostracized by Pentagon leadership; denied a third star; and effectively forced into retirement in January 2007. Defense Secretary Donald Rumsfeld told Taguba: "You and your report will be investigated." In a 2007 interview with Seymour Hersh in The New Yorker; Taguba said he was ordered to limit the scope of his investigation to low-ranking soldiers and not follow the chain of command upward to senior Pentagon officials; but his report nonetheless implicated systemic failures. He later stated that the abuse was "directed or condoned" at the highest levels of the Bush administration. His father had been a prisoner of war during World War II; held by the Japanese in the Bataan Death March.',
    birthDate: 'October 31; 1950',
    birthPlace: 'Manila; Philippines',
    education: ['Idaho State University; BA History (1972)', 'Naval War College; MA National Security and Strategic Studies'],
    affiliations: [
      { name: 'U.S. Army', role: 'Major General; first Filipino-American general officer; career military officer 1972-2007', type: 'agency' },
    ],
    controversies: [
      'Authored the Taguba Report documenting "sadistic; blatant; and wanton criminal abuses" of detainees at Abu Ghraib prison in Iraq',
      'Report concluded Abu Ghraib abuse was systemic and not the work of "a few bad apples" as the Bush administration maintained',
      'Career destroyed for telling the truth; denied third star; ostracized by Pentagon leadership; forced into retirement in January 2007',
      'Defense Secretary Donald Rumsfeld told Taguba: "You and your report will be investigated" as retaliation for his findings',
      'Ordered to limit scope of investigation to low-ranking soldiers and not follow chain of command upward to senior officials',
      'Later stated that Abu Ghraib abuse was "directed or condoned" at the highest levels of the Bush administration',
      'Pentagon leadership attempted to discredit and marginalize him after his report contradicted the official narrative',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'October 31; 1950', event: 'Born in Manila; Philippines; father was a POW survivor of the Bataan Death March' },
      { date: '1972', event: 'Commissioned as U.S. Army officer; graduates Idaho State University' },
      { date: 'January 2004', event: 'Ordered by Lt. Gen. Ricardo Sanchez to investigate abuse allegations at Abu Ghraib prison' },
      { date: 'March 2004', event: 'Completes classified 53-page Taguba Report documenting systematic torture and abuse at Abu Ghraib' },
      { date: 'April 28; 2004', event: 'Abu Ghraib photographs become public on CBS 60 Minutes II; Taguba Report corroborates the evidence' },
      { date: 'May 2004', event: 'Testifies before Senate Armed Services Committee about Abu Ghraib findings' },
      { date: '2004-2006', event: 'Ostracized by Pentagon leadership; denied promotion to third star; marginalized for telling the truth' },
      { date: 'January 2007', event: 'Forced into retirement from the Army' },
      { date: 'June 2007', event: 'Breaks silence in interview with Seymour Hersh in The New Yorker; describes retaliation and cover-up' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Antonio Taguba', url: 'https://en.wikipedia.org/wiki/Antonio_Taguba', date: '' },
      { title: 'The New Yorker: The General\'s Report (Seymour Hersh)', url: 'https://www.newyorker.com/magazine/2007/06/25/the-generals-report', date: '2007' },
      { title: 'Taguba Report: Article 15-6 Investigation of the 800th Military Police Brigade', url: 'https://www.thetorturedatabase.org/files/foia_subsite/pdfs/THETAGUBARE.pdf', date: '2004' },
    ],
    aliases: [],
    knownAssociates: [],
  },
















  'abdel-hakim-belhaj': {
    name: 'Abdel Hakim Belhaj',
    title: 'Former LIFG jihadist who became Tripoli military commander with NATO support',
    role: 'Former LIFG jihadist who became Tripoli military commander with NATO support',
    riskLevel: 'high',
    description: 'Abdel Hakim Belhaj is documented in ArkHive investigations for their role as Former LIFG jihadist who became Tripoli military commander with NATO support.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Abdel Hakim Belhaj was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Former LIFG jihadist who became Tripoli military commander with NATO support' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdel Hakim Belhaj', url: 'https://en.wikipedia.org/wiki/Abdel_Hakim_Belhaj', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Muammar Gaddafi', relationship: 'Libyan dissident tortured under Gaddafi regime with CIA/MI6 help', href: '/entities/individuals/muammar-gaddafi' },
      { name: 'Tony Blair', relationship: 'UK PM whose government facilitated Belhaj rendition to Libya', href: '/entities/individuals/tony-blair' },
    ],
  },















  'abdur-rahman-muhammad': {
    name: 'Abdur-Rahman Muhammad',
    title: 'Researcher and activist whose decades-long investigation helped identify the actual assassins',
    role: 'Researcher and activist whose decades-long investigation helped identify the actual assassins',
    riskLevel: 'high',
    description: 'Abdur-Rahman Muhammad is documented in ArkHive investigations for their role as Researcher and activist whose decades-long investigation helped identify the actual assassins.',
    education: [],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Researcher and activist whose decades-long investigation helped identify the actual assassins' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdur-Rahman Muhammad', url: 'https://en.wikipedia.org/wiki/Abdur-Rahman_Muhammad', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Khalil Islam', relationship: 'Fellow Malcolm X assassination suspect later exonerated', href: '/entities/individuals/khalil-islam' },
      { name: 'Malcolm X', relationship: 'Researcher who investigated Malcolm X assassination', href: '/entities/individuals/malcolm-x' },
    ],
  },















  'abigail-echo-hawk': {
    name: 'Abigail Echo-Hawk',
    title: 'Director of Urban Indian Health Institute, led groundbreaking MMIW data collection',
    role: 'Director of Urban Indian Health Institute, led groundbreaking MMIW data collection',
    riskLevel: 'high',
    description: 'Abigail Echo-Hawk is documented in this investigative archive for their role as Director of Urban Indian Health Institute, led groundbreaking MMIW data collection.',
    education: [],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Director of Urban Indian Health Institute, led groundbreaking MMIW data collection' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abigail Echo-Hawk', url: 'https://en.wikipedia.org/wiki/Abigail_Echo-Hawk', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Annita Lucchesi', relationship: 'Fellow MMIW researcher and Indigenous data activist', href: '/entities/individuals/annita-lucchesi' },
      { name: 'Lisa Brunner', relationship: 'Fellow advocate for Missing and Murdered Indigenous Women', href: '/entities/individuals/lisa-brunner' },
    ],
  },


  'abolhassan-banisadr': {
    name: 'Abolhassan Banisadr',
    title: 'Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release',
    role: 'Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release',
    riskLevel: 'high',
    description: 'Abolhassan Banisadr is documented in ArkHive investigations for their role as Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
    ],
    timeline: [
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abolhassan Banisadr', url: 'https://en.wikipedia.org/wiki/Abolhassan_Banisadr', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ayatollah Khomeini', relationship: 'First president under Khomeini who was later ousted', href: '/entities/individuals/ayatollah-khomeini' },
      { name: 'Nematollah Nassiri', relationship: 'SAVAK chief from shah era overthrown by Banisadr\'s revolution', href: '/entities/individuals/nematollah-nassiri' },
    ],
  },















  'abraham-zapruder': {
    name: 'Abraham Zapruder',
    title: 'Dallas dressmaker who filmed the assassination; his footage shows head shot from the front',
    role: 'Dallas dressmaker who filmed the assassination; his footage shows head shot from the front',
    riskLevel: 'high',
    description: 'Abraham Zapruder is documented in this investigative archive for their role as Dallas dressmaker who filmed the assassination; his footage shows head shot from the front.',
    education: [],
    affiliations: [
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Dallas dressmaker who filmed the assassination; his footage shows head shot from the front' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abraham Zapruder', url: 'https://en.wikipedia.org/wiki/Abraham_Zapruder', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Lee Harvey Oswald', relationship: 'Filmed the JFK assassination that Oswald was accused of', href: '/entities/individuals/lee-harvey-oswald' },
      { name: 'John Connally', relationship: 'Texas governor wounded in same JFK motorcade Zapruder filmed', href: '/entities/individuals/john-connally' },
    ],
  },


  'adam-lanza': {
    name: 'Adam Lanza',
    title: 'Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15',
    role: 'Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15',
    riskLevel: 'high',
    description: 'Adam Lanza is documented in ArkHive investigations for their role as Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Adam Lanza was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Lanza', url: 'https://en.wikipedia.org/wiki/Adam_Lanza', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Neil Heslin', relationship: 'Father of six-year-old Jesse Lewis, one of 20 children killed by Lanza at Sandy Hook Elementary on December 14, 2012', href: '/entities/individuals/neil-heslin' },
      { name: 'Robbie Parker', relationship: 'Father of six-year-old Emilie Parker, one of 20 children killed by Lanza at Sandy Hook Elementary', href: '/entities/individuals/robbie-parker' },
    ],
  },















  'adam-malik': {
    name: 'Adam Malik',
    title: 'Indonesian political figure who liaised with US Embassy during the killings',
    role: 'Indonesian political figure who liaised with US Embassy during the killings',
    riskLevel: 'high',
    description: 'Adam Malik is documented in ArkHive investigations for their role as Indonesian political figure who liaised with US Embassy during the killings.',
    education: ['MBA'],
    affiliations: [
      { name: 'Independent', role: 'Gun Violence Inaction', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Indonesian political figure who liaised with US Embassy during the killings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Malik', url: 'https://en.wikipedia.org/wiki/Adam_Malik', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Suharto', relationship: 'Foreign minister under Suharto regime', href: '/entities/individuals/suharto' },
      { name: 'Robert Martens', relationship: 'US embassy official who provided kill lists during Indonesian massacres', href: '/entities/individuals/robert-martens' },
    ],
  },
















  'addison-yeaman': {
    name: 'Addison Yeaman',
    title: 'General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive',
    role: 'General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive',
    riskLevel: 'high',
    description: 'Addison Yeaman is documented in this investigative archive for their role as General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
    ],
    timeline: [
      { date: '1963', event: 'documented in this investigative archive for their role as General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Addison Yeaman', url: 'https://en.wikipedia.org/wiki/Addison_Yeaman', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Edward Horrigan', relationship: 'Fellow tobacco industry insider', href: '/entities/individuals/edward-horrigan' },
      { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed industry Yeaman documented', href: '/entities/individuals/jeffrey-wigand' },
    ],
  },


  'aiyana-stanley-jones': {
    name: 'Aiyana Stanley-Jones',
    title: '7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010',
    role: '7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010',
    riskLevel: 'high',
    description: 'Aiyana Stanley-Jones is documented in this investigative archive for their role as 7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
    ],
    timeline: [
      { date: '2010', event: 'documented in this investigative archive for their role as 7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Aiyana Stanley-Jones', url: 'https://en.wikipedia.org/wiki/Aiyana_Stanley-Jones', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joseph Weekley', relationship: 'Officer who fatally shot 7-year-old Aiyana during raid', href: '/entities/individuals/joseph-weekley' },
    ],
  },


  'aj-smitherman': {
    name: 'A.J. Smitherman',
    title: 'Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot',
    role: 'Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot',
    riskLevel: 'high',
    description: 'A.J. Smitherman is documented in this investigative archive for their role as Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot. A.J.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Media', role: 'Journalist', type: 'corporation' },
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: A.J. Smitherman', url: 'https://en.wikipedia.org/wiki/A.J._Smitherman', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dick Rowland', relationship: 'Man whose arrest triggered Tulsa Race Massacre Smitherman covered', href: '/entities/individuals/dick-rowland' },
      { name: 'BC Franklin', relationship: 'Fellow Tulsa lawyer who documented the massacre', href: '/entities/individuals/bc-franklin' },
    ],
  },



  'akua-njeri': {
    name: 'Deborah Johnson (Akua Njeri)',
    title: 'Hampton\'s fiancée, 8 months pregnant, who was in bed with him when he was killed',
    role: 'Hampton\'s fiancée, 8 months pregnant, who was in bed with him when he was killed',
    riskLevel: 'high',
    description: 'Deborah Johnson (Akua Njeri) is documented in this investigative archive for their role as Hampton\'s fiancée, 8 months pregnant, who was in bed with him when he was killed.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Hampton' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Deborah Johnson (Akua Njeri)', url: 'https://en.wikipedia.org/wiki/Akua_Njeri)', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Fred Hampton', relationship: 'Partner of Fred Hampton, was present during his assassination', href: '/entities/individuals/fred-hampton' },
      { name: 'Fred Hampton Jr', relationship: 'Son who continued father\'s activism', href: '/entities/individuals/fred-hampton-jr' },
      { name: 'Edward Hanrahan', relationship: 'Cook County State\'s Attorney who authorized Hampton raid', href: '/entities/individuals/edward-hanrahan' },
    ],
  },


  'alan-fiers': {
    name: 'Alan Fiers',
    title: 'CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking',
    role: 'CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking',
    riskLevel: 'high',
    description: 'Alan Fiers is documented in ArkHive investigations for their role as CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
      { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Fiers', url: 'https://en.wikipedia.org/wiki/Alan_Fiers', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Oliver North', relationship: 'CIA officer who reported to North in Iran-Contra operations', href: '/entities/individuals/oliver-north' },
      { name: 'Elliott Abrams', relationship: 'Fellow Iran-Contra figure in Reagan administration', href: '/entities/individuals/elliott-abrams' },
    ],
  },















  'alan-mann': {
    name: 'Alan Mann',
    title: 'University of Pennsylvania professor who kept MOVE children\'s remains for teaching without family consent',
    role: 'University of Pennsylvania professor who kept MOVE children\'s remains for teaching without family consent',
    riskLevel: 'high',
    description: 'Alan Mann is documented in ArkHive investigations for their role as University of Pennsylvania professor who kept MOVE children\'s remains for teaching without family consent.',
    education: ['University of Pennsylvania'],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Alan Mann was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as University of Pennsylvania professor who kept MOVE children' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Mann', url: 'https://en.wikipedia.org/wiki/Alan_Mann', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Arthur Rudolph', relationship: 'Fellow Operation Paperclip researcher', href: '/entities/individuals/arthur-rudolph' },
      { name: 'Wernher von Braun', relationship: 'Operation Paperclip colleague', href: '/entities/individuals/wernher-von-braun' },
    ],
  },















  'alan-shaw': {
    name: 'Norfolk Southern (CEO Alan Shaw)',
    title: 'Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into water supply',
    role: 'Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into water supply',
    riskLevel: 'high',
    description: 'Norfolk Southern (CEO Alan Shaw) is documented in ArkHive investigations for their role as Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into water supply.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into wa' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Norfolk Southern (CEO Alan Shaw)', url: 'https://en.wikipedia.org/wiki/Norfolk_Southern)', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Pete Buttigieg', relationship: 'Transportation Secretary who oversaw Norfolk Southern response after East Palestine', href: '/entities/individuals/pete-buttigieg' },
    ],
  },















  'albert-lord': {
    name: 'Albert Lord',
    title: 'Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy',
    role: 'Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy',
    riskLevel: 'high',
    description: 'Albert Lord is documented in this investigative archive for their role as Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Albert Lord', url: 'https://en.wikipedia.org/wiki/Albert_Lord', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jack Remondi', relationship: 'Successor as Navient/Sallie Mae CEO', href: '/entities/individuals/jack-remondi' },
      { name: 'Betsy DeVos', relationship: 'Education Secretary who rolled back student loan protections', href: '/entities/individuals/betsy-devos' },
    ],
  },


  'albert-woodfox': {
    name: 'Albert Woodfox',
    title: 'Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history',
    role: 'Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history',
    riskLevel: 'high',
    description: 'Albert Woodfox is documented in this investigative archive for their role as Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longe' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Albert Woodfox', url: 'https://en.wikipedia.org/wiki/Albert_Woodfox', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Herman Wallace', relationship: 'Fellow Angola Three member held in solitary for 40+ years', href: '/entities/individuals/herman-wallace' },
      { name: 'Robert King', relationship: 'Fellow Angola Three member and prison reform activist', href: '/entities/individuals/robert-king' },
    ],
  },


  'aldo-moro': {
    name: 'Aldo Moro',
    title: 'Italian PM kidnapped and murdered, Gladio linked to failed rescue',
    role: 'Italian PM kidnapped and murdered, Gladio linked to failed rescue',
    riskLevel: 'high',
    description: 'Aldo Moro is documented in this investigative archive for their role as Italian PM kidnapped and murdered, Gladio linked to failed rescue.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Italian PM kidnapped and murdered, Gladio linked to failed rescue' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Aldo Moro', url: 'https://en.wikipedia.org/wiki/Aldo_Moro', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Giulio Andreotti', relationship: 'Italian PM connected to Gladio and Moro kidnapping conspiracy', href: '/entities/individuals/giulio-andreotti' },
      { name: 'Licio Gelli', relationship: 'P2 Lodge master linked to Moro assassination conspiracy', href: '/entities/individuals/licio-gelli' },
    ],
  },


  'alec-smith': {
    name: 'Alec Smith',
    title: 'Insulin Rationing Victim',
    role: 'Type 1 diabetic who died at age 26 from rationing insulin he could not afford after aging off his parents health insurance, becoming a symbol of the American pharmaceutical pricing crisis',
    riskLevel: 'critical' as const,
    description: 'Alec Raeshawn Smith (1991-2017) was a 26-year-old restaurant manager from Minneapolis, Minnesota, who died on June 27, 2017, of diabetic ketoacidosis after rationing his insulin because he could not afford the cost. Smith had aged off his mother health insurance at age 26 under ACA provisions and discovered that his insulin, which cost approximately $1,300 per month without insurance, was unaffordable on his restaurant manager salary of approximately $35,000 per year. He was found dead in his apartment three days before his next payday, surrounded by empty insulin pens. Manufacturers of insulin, including Eli Lilly, Novo Nordisk, and Sanofi, had raised insulin prices by over 1,000% in the two decades preceding his death, despite the drug having been discovered in 1921 and the patent sold by its discoverers for $1 each. Smith death became a galvanizing event in the national movement for insulin affordability, leading his mother Nicole Smith-Holt to become one of the most prominent advocates for prescription drug price reform. His story was cited in multiple congressional hearings and contributed to the passage of insulin price caps in the Inflation Reduction Act of 2022.',
    birthDate: '1991',
    birthPlace: 'Minnesota',
    deathDate: '2017-06-27',
    education: ['Local schools in the Minneapolis area'],
    affiliations: [],
    controversies: [
      'Died at 26 from rationing insulin that costs less than $10 to manufacture but was priced at over $1,300/month by pharmaceutical companies',
      'Was found dead in his apartment three days before payday, surrounded by empty insulin pens',
      'His death exposed the life-or-death consequences of pharmaceutical pricing practices for millions of Americans who ration medications',
      'Insulin manufacturers Eli Lilly, Novo Nordisk, and Sanofi had raised insulin prices over 1,000% while the drug cost under $10 per vial to produce',
      'His case became evidence in congressional hearings on pharmaceutical price gouging and contributed to insulin price cap legislation',
    ],
    relatedInvestigations: [
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
    ],
    timeline: [
      { date: '2017-05', event: 'Ages off mother health insurance at age 26; discovers insulin costs approximately $1,300/month without coverage' },
      { date: '2017-06-27', event: 'Found dead in his apartment from diabetic ketoacidosis; had been rationing insulin to stretch supply until payday' },
      { date: '2019', event: 'Minnesota passes the Alec Smith Insulin Affordability Act, establishing an emergency insulin program' },
      { date: '2022-08', event: 'Inflation Reduction Act caps insulin costs at $35/month for Medicare patients, legislation influenced by advocacy sparked by his death' },
    ],
    sources: [
      { title: 'Washington Post: The Human Toll of Rising Insulin Prices', date: '2019' },
      { title: 'Senate HELP Committee: Testimony of Nicole Smith-Holt on the Death of Alec Smith', date: '2019' },
      { title: 'Minnesota Legislature: Alec Smith Insulin Affordability Act', date: '2020' },
    ],
    knownAssociates: [
      { name: 'Nicole Smith-Holt', relationship: 'Mother who became a leading national advocate for insulin affordability after Alec death', href: '/entities/individuals/nicole-smith-holt' },
    ],
  },














  'alex-karp': {
    name: 'Alex Karp',
    title: 'Palantir CEO who oversaw expansion into law enforcement predictive analytics',
    role: 'Palantir CEO who oversaw expansion into law enforcement predictive analytics',
    riskLevel: 'high',
    description: 'Alex Karp is documented in ArkHive investigations for their role as Palantir CEO who oversaw expansion into law enforcement predictive analytics.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Alex Karp was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Predictive Policing', slug: 'predictive-policing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Palantir CEO who oversaw expansion into law enforcement predictive analytics' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alex Karp', url: 'https://en.wikipedia.org/wiki/Alex_Karp', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Peter Thiel', relationship: 'Palantir co-founder and primary investor', href: '/entities/individuals/peter-thiel' },
      { name: 'Edward Snowden', relationship: 'Snowden revelations exposed surveillance programs Palantir enabled', href: '/entities/individuals/edward-snowden' },
    ],
  },















  'alexander-haig': {
    name: 'Alexander Haig',
    title: 'Military aide who coordinated the dual reporting system to hide the bombing',
    role: 'Military aide who coordinated the dual reporting system to hide the bombing',
    riskLevel: 'high',
    description: 'Alexander Haig is documented in ArkHive investigations for their role as Military aide who coordinated the dual reporting system to hide the bombing.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 2 documented investigations',
      'Investigative analysis reveals Alexander Haig was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
      { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Military aide who coordinated the dual reporting system to hide the bombing' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alexander Haig', url: 'https://en.wikipedia.org/wiki/Alexander_Haig', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Henry Kissinger', relationship: 'Served as Kissinger\'s deputy and successor as Nixon Chief of Staff', href: '/entities/individuals/henry-kissinger' },
      { name: 'Richard Nixon', relationship: 'White House Chief of Staff during Nixon\'s final days', href: '/entities/individuals/richard-nixon' },
      { name: 'Ronald Reagan', relationship: 'Secretary of State under Reagan who claimed"I\'m in charge"', href: '/entities/individuals/ronald-reagan' },
    ],
  },














  'alfredo-cristiani': {
    name: 'Alfredo Cristiani',
    title: 'President during Jesuit massacre; ARENA party leader',
    role: 'President during Jesuit massacre; ARENA party leader',
    riskLevel: 'high',
    description: 'Alfredo Cristiani is documented in ArkHive investigations for their role as President during Jesuit massacre; ARENA party leader.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as President during Jesuit massacre; ARENA party leader' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alfredo Cristiani', url: 'https://en.wikipedia.org/wiki/Alfredo_Cristiani', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Elliott Abrams', relationship: 'US official who supported Cristiani\'s government during civil war', href: '/entities/individuals/elliott-abrams' },
      { name: 'Oscar Romero', relationship: 'Archbishop murdered by forces aligned with Cristiani\'s ARENA party', href: '/entities/individuals/oscar-romero' },
    ],
  },













  'alice-hamilton': {
    name: 'Alice Hamilton',
    title: 'Harvard physician who documented lead poisoning in workers in the 1910s-1920s',
    role: 'Harvard physician who documented lead poisoning in workers in the 1910s-1920s',
    riskLevel: 'high',
    description: 'Alice Hamilton is documented in this investigative archive for their role as Harvard physician who documented lead poisoning in workers in the 1910s-1920s.',
    education: ['Harvard University'],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Harvard physician who documented lead poisoning in workers in the 1910s-1920s' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alice Hamilton', url: 'https://en.wikipedia.org/wiki/Alice_Hamilton', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Herbert Needleman', relationship: 'Fellow industrial health researcher who fought lead poisoning', href: '/entities/individuals/herbert-needleman' },
      { name: 'Clair Patterson', relationship: 'Scientist who fought lead industry, continued Hamilton\'s work', href: '/entities/individuals/clair-patterson' },
    ],
  },


  'allan-nairn': {
    name: 'Allan Nairn',
    title: 'American journalist who witnessed the Santa Cruz massacre and exposed US complicity',
    role: 'American journalist who witnessed the Santa Cruz massacre and exposed US complicity',
    riskLevel: 'high',
    description: 'Allan Nairn is documented in ArkHive investigations for their role as American journalist who witnessed the Santa Cruz massacre and exposed US complicity.',
    education: [],
    affiliations: [
      { name: 'Media', role: 'Journalist', type: 'corporation' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Allan Nairn was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as American journalist who witnessed the Santa Cruz massacre and exposed US complicity' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Allan Nairn', url: 'https://en.wikipedia.org/wiki/Allan_Nairn', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Noam Chomsky', relationship: 'Fellow critic of US foreign policy in Central America', href: '/entities/individuals/noam-chomsky' },
      { name: 'Suharto', relationship: 'Nairn was beaten in Dili massacre under Suharto\'s occupation', href: '/entities/individuals/suharto' },
    ],
  },












  'allan-pinkerton': {
    name: 'Allan Pinkerton',
    title: 'Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor organizing',
    role: 'Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor organizing',
    riskLevel: 'high',
    description: 'Allan Pinkerton is documented in this investigative archive for their role as Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor organizing.',
    education: [],
    affiliations: [
      { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor org' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Allan Pinkerton', url: 'https://en.wikipedia.org/wiki/Allan_Pinkerton', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Henry Clay Frick', relationship: 'Pinkerton agents were hired by Frick during Homestead Strike', href: '/entities/individuals/henry-clay-frick' },
      { name: 'Andrew Carnegie', relationship: 'Carnegie Steel hired Pinkertons to break unions', href: '/entities/individuals/andrew-carnegie' },
    ],
  },


  'alvin-young': {
    name: 'Alvin Young',
    title: 'Air Force scientist and Agent Orange consultant, accused of minimizing health risks',
    role: 'Air Force scientist and Agent Orange consultant, accused of minimizing health risks',
    riskLevel: 'high',
    description: 'Alvin Young is documented in this investigative archive for their role as Air Force scientist and Agent Orange consultant, accused of minimizing health risks.',
    education: [],
    affiliations: [
      { name: 'United States Military', role: 'Service Member', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Air Force scientist and Agent Orange consultant, accused of minimizing health risks' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alvin Young', url: 'https://en.wikipedia.org/wiki/Alvin_Young', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Elmo Zumwalt', relationship: 'Admiral who ordered Agent Orange use that Young later studied', href: '/entities/individuals/elmo-zumwalt' },
    ],
  },


  'amir-locke': {
    name: 'Amir Locke',
    title: '22-year-old shot and killed by Minneapolis SWAT while sleeping on a couch during a no-knock warrant execution in 2022',
    role: '22-year-old shot and killed by Minneapolis SWAT while sleeping on a couch during a no-knock warrant execution in 2022',
    riskLevel: 'high',
    description: 'Amir Locke is documented in ArkHive investigations for their role as 22-year-old shot and killed by Minneapolis SWAT while sleeping on a couch during a no-knock warrant execution in 2022.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Amir Locke was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
    ],
    timeline: [
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Amir Locke', url: 'https://en.wikipedia.org/wiki/Amir_Locke', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Breonna Taylor', relationship: 'Fellow victim killed during no-knock police raid', href: '/entities/individuals/breonna-taylor' },
    ],
  },












  'amy-gutmann': {
    name: 'Amy Gutmann',
    title: 'Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiments',
    role: 'Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiments',
    riskLevel: 'high',
    description: 'Amy Gutmann is documented in ArkHive investigations for their role as Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiments.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Amy Gutmann was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiment' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Amy Gutmann', url: 'https://en.wikipedia.org/wiki/Amy_Gutmann', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'Nominated as US Ambassador to Germany by Biden', href: '/entities/individuals/joe-biden' },
    ],
  },












  'anders-fogh-rasmussen': {
    name: 'Anders Fogh Rasmussen',
    title: 'NATO Secretary General who oversaw the bombing campaign',
    role: 'NATO Secretary General who oversaw the bombing campaign',
    riskLevel: 'high',
    description: 'Anders Fogh Rasmussen is documented in ArkHive investigations for their role as NATO Secretary General who oversaw the bombing campaign.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as NATO Secretary General who oversaw the bombing campaign' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anders Fogh Rasmussen', url: 'https://en.wikipedia.org/wiki/Anders_Fogh_Rasmussen', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Tony Blair', relationship: 'Fellow NATO/coalition leader who supported Iraq War', href: '/entities/individuals/tony-blair' },
      { name: 'George W. Bush', relationship: 'Backed Bush coalition in Iraq War as Danish PM', href: '/entities/individuals/george-w-bush' },
    ],
  },













  'andrew-carnegie': {
    name: 'Andrew Carnegie',
    title: 'U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor',
    role: 'U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor',
    riskLevel: 'high',
    description: 'Andrew Carnegie is documented in this investigative archive for their role as U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Carnegie', url: 'https://en.wikipedia.org/wiki/Andrew_Carnegie', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Henry Clay Frick', relationship: 'Business partner who managed Carnegie Steel during Homestead Strike', href: '/entities/individuals/henry-clay-frick' },
      { name: 'Allan Pinkerton', relationship: 'Hired Pinkerton agency to suppress worker strikes', href: '/entities/individuals/allan-pinkerton' },
    ],
  },


  'andrew-fastow': {
    name: 'Andrew Fastow',
    title: 'Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt',
    role: 'Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt',
    riskLevel: 'high',
    description: 'Andrew Fastow is documented in this investigative archive for their role as Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Fastow', url: 'https://en.wikipedia.org/wiki/Andrew_Fastow', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Skilling', relationship: 'Enron CEO under whom Fastow created fraudulent entities', href: '/entities/individuals/jeffrey-skilling' },
      { name: 'Kenneth Lay', relationship: 'Enron founder and chairman during Fastow\'s financial fraud', href: '/entities/individuals/kenneth-lay' },
      { name: 'Sherron Watkins', relationship: 'Enron whistleblower who warned about Fastow\'s schemes', href: '/entities/individuals/sherron-watkins' },
    ],
  },


  'andrew-madoff': {
    name: 'Andrew Madoff',
    title: 'Son of Bernie Madoff; Co-Reported Father to Authorities; Died of Cancer 2014',
    role: 'Director of Trading; Bernard L. Madoff Investment Securities (legitimate operations)',
    riskLevel: 'low',
    description: 'Andrew Howard Madoff was the younger son of Bernard "Bernie" Madoff; the architect of the largest Ponzi scheme in history. Born in 1966; Andrew and his brother Mark worked in the legitimate market-making and proprietary trading operations of Bernard L. Madoff Investment Securities; physically separated on a different floor from their father\'s fraudulent investment advisory business. On December 10; 2008; Bernie Madoff confessed to his sons that the investment advisory arm of the firm was "one big lie" and "basically a giant Ponzi scheme." Andrew and Mark immediately reported their father to federal authorities through their attorney; leading to Bernie\'s arrest the following day. Andrew was never criminally charged in connection with the fraud; federal prosecutors determined that the sons worked only in the legitimate trading operations and were unaware of the Ponzi scheme. However; Andrew and Mark were named as defendants in civil clawback lawsuits filed by bankruptcy trustee Irving Picard; who sought to recover funds that family members had received from the firm. Andrew eventually reached a settlement with Picard. The aftermath of the scandal devastated the family. Brother Mark Madoff died by suicide on December 11; 2010; the second anniversary of their father\'s arrest; hanging himself in his SoHo apartment while his two-year-old son slept in the next room. Andrew had been diagnosed with mantle cell lymphoma in 2003; went into remission; but the cancer returned in 2012. He attributed the cancer\'s return to the extreme stress of the scandal. Andrew died on September 3; 2014; at age 48. He had cut off all contact with both parents following his father\'s arrest.',
    birthDate: '1966',
    birthPlace: 'New York; USA',
    deathDate: 'September 3; 2014',
    education: ['University of Pennsylvania; Wharton School'],
    affiliations: [
      { name: 'Bernard L. Madoff Investment Securities', role: 'Director of Trading (legitimate market-making operations)', type: 'corporation' },
    ],
    controversies: [
      'Named in civil clawback lawsuits by bankruptcy trustee Irving Picard seeking recovery of funds received from the Madoff firm',
      'Along with brother Mark; reported father to federal authorities on December 10; 2008 after confession; some victims questioned whether sons truly had no knowledge of the fraud',
      'Eventually settled civil claims with Picard trustee; terms not publicly disclosed',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
    ],
    timeline: [
      { date: '1966', event: 'Born in New York; son of Bernie and Ruth Madoff' },
      { date: '2003', event: 'Diagnosed with mantle cell lymphoma; goes into remission' },
      { date: 'December 10; 2008', event: 'Father confesses Ponzi scheme to Andrew and brother Mark; they immediately report him to authorities' },
      { date: 'December 11; 2008', event: 'Bernie Madoff arrested by FBI following sons\' report' },
      { date: '2009', event: 'Bankruptcy trustee Irving Picard files civil clawback suits against Madoff family members including Andrew' },
      { date: 'December 11; 2010', event: 'Brother Mark Madoff dies by suicide on second anniversary of father\'s arrest' },
      { date: '2012', event: 'Mantle cell lymphoma returns; Andrew attributes recurrence to extreme stress from scandal' },
      { date: 'September 3; 2014', event: 'Dies of mantle cell lymphoma at age 48' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Madoff', url: 'https://en.wikipedia.org/wiki/Andrew_Madoff', date: '' },
      { title: 'NYT: Andrew Madoff; Bernard Madoff\'s Son; Dies at 48', url: 'https://www.nytimes.com/2014/09/04/business/andrew-madoff-son-of-disgraced-financier-dies-at-48.html', date: '2014' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Bernie Madoff', relationship: 'Father who ran the largest Ponzi scheme in history', href: '/entities/individuals/bernie-madoff' },
      { name: 'Mark Madoff', relationship: 'Brother who died by suicide after father\'s arrest', href: '/entities/individuals/mark-madoff' },
      { name: 'Peter Madoff', relationship: 'Uncle and compliance officer in the Madoff scheme', href: '/entities/individuals/peter-madoff' },
    ],
  },













  'andrew-tisch': {
    name: 'Andrew Tisch',
    title: 'CEO of Lorillard Tobacco; denied addictiveness under oath',
    role: 'CEO of Lorillard Tobacco; denied addictiveness under oath',
    riskLevel: 'high',
    description: 'Andrew Tisch is documented in ArkHive investigations for their role as CEO of Lorillard Tobacco; denied addictiveness under oath.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Connected to 1 documented investigation',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CEO of Lorillard Tobacco; denied addictiveness under oath' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Tisch', url: 'https://en.wikipedia.org/wiki/Andrew_Tisch', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'James Taiclet', relationship: 'Fellow defense industry connected executive', href: '/entities/individuals/james-taiclet' },
    ],
  },













 'anna-deavere-smith': {
 name: 'Anna Deavere Smith',
 title: 'Actress and Playwright; Documentary Theater Pioneer',
 role: 'Performing Artist; Professor; Social Commentator',
 riskLevel: 'low',
 description: 'Anna Deavere Smith is an American actress; playwright; and professor known for creating a unique form of documentary theater in which she performs multiple real people based on their actual words from interviews. Her landmark one-woman shows "Fires in the Mirror" (1992) about the Crown Heights riots and "Twilight: Los Angeles; 1992" about the Rodney King riots established her as a pioneering voice in using performance art to examine racial conflict and social injustice in America. She interviewed hundreds of people affected by these events and performed their words verbatim; giving voice to perspectives across racial and class lines that mainstream media ignored. Her work on sundown towns and racial geography in America has illuminated the hidden history of communities that excluded Black Americans through violence; threats; and discriminatory ordinances. She is a professor at NYU\'s Tisch School of the Arts and has appeared in film and television including "The West Wing;" "Nurse Jackie;" and "Black-ish." She received the National Humanities Medal from President Obama in 2012.',
 birthDate: 'September 18; 1950',
 birthPlace: 'Baltimore; Maryland; USA',
 education: ['Beaver College (now Arcadia University); BA; 1971', 'American Conservatory Theater; MFA; 1976'],
 affiliations: [
 { name: 'New York University', role: 'Professor at Tisch School of the Arts', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation on sundown towns and racial exclusion in America',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'September 18; 1950', event: 'Born in Baltimore; Maryland' },
 { date: '1992', event: 'Performs "Fires in the Mirror" about Crown Heights riots' },
 { date: '1994', event: 'Performs "Twilight: Los Angeles; 1992" about Rodney King riots' },
 { date: '2012', event: 'Receives National Humanities Medal from President Obama' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYU Faculty Profile: Anna Deavere Smith', url: 'https://tisch.nyu.edu', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow racial justice figure whose work Smith dramatized', href: '/entities/individuals/bryan-stevenson' },
 ],
 },












 'annita-lucchesi': {
 name: 'Annita Lucchesi',
 title: 'Southern Cheyenne Scholar; Creator of Most Comprehensive MMIW Database',
 role: 'Researcher; Data Scientist; Indigenous Rights Advocate',
 riskLevel: 'low',
 description: 'Annita Lucchesi is a Southern Cheyenne scholar; cartographer; and data scientist who created the most comprehensive database documenting Missing and Murdered Indigenous Women (MMIW) in the United States and Canada. As Executive Director of the Sovereign Bodies Institute; she built a dataset tracking over 2;800 cases of Indigenous women and girls who have gone missing or been murdered; far exceeding any government statistics. Her research exposed how federal; state; and tribal law enforcement systematically failed to investigate or even record these cases; revealing that in many jurisdictions Indigenous women\'s disappearances were never entered into national databases. Lucchesi\'s work demonstrated that the MMIW crisis is not merely a pattern of individual crimes but a structural outcome of colonialism; jurisdictional gaps between federal; state; and tribal authorities; and the devaluation of Indigenous lives by law enforcement. The Urban Indian Health Institute study she contributed to found that 5;712 cases of missing and murdered Indigenous women were reported in 2016 alone; but only 116 were logged in the DOJ\'s federal missing persons database. Her data sovereignty approach ensures that Indigenous communities own and control the data about their missing and murdered relatives; rather than depending on the same government agencies that failed them.',
 birthDate: '',
 birthPlace: '',
 education: ['University of Lethbridge; Geography and Women\'s Studies'],
 affiliations: [
 { name: 'Sovereign Bodies Institute', role: 'Executive Director and Founder', type: 'organization' },
 ],
 controversies: [
 'Research exposed systemic failure of law enforcement to track MMIW cases; 5;712 reported in 2016 but only 116 in federal database',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: '2015', event: 'Begins building comprehensive MMIW database' },
 { date: '2018', event: 'Urban Indian Health Institute report reveals massive gap between actual and reported MMIW cases' },
 { date: '2019', event: 'Founds Sovereign Bodies Institute for Indigenous data sovereignty' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Sovereign Bodies Institute', url: 'https://www.sovereign-bodies.org', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Abigail Echo-Hawk', relationship: 'Fellow MMIW researcher and data sovereignty advocate', href: '/entities/individuals/abigail-echo-hawk' },
 { name: 'Lisa Brunner', relationship: 'Fellow Missing and Murdered Indigenous Women advocate', href: '/entities/individuals/lisa-brunner' },
 ],
 },

 'anthony-lake': {
 name: 'Anthony Lake',
 title: 'National Security Advisor During Rwanda Genocide; Failed to Act on Intelligence',
 role: 'National Security Advisor; Clinton Administration Foreign Policy Architect',
 riskLevel: 'high',
 description: 'William Anthony Kirsopp Lake served as National Security Advisor under President Bill Clinton from 1993 to 1997. He is most associated with the Clinton administration\'s deliberate inaction during the 1994 Rwandan genocide; in which an estimated 800;000 Tutsis and moderate Hutus were massacred over 100 days while the United States not only refused to intervene but actively worked to prevent the UN Security Council from using the word "genocide;" which would have triggered a legal obligation to act under the Genocide Convention. Lake received intelligence briefings detailing the systematic slaughter but the NSC chose to characterize the killings as "acts of genocide" rather than "genocide" to avoid legal obligations. The administration also blocked UN reinforcements and delayed deploying armored personnel carriers that had already been approved. Lake later acknowledged the failure; calling it one of his greatest regrets. Before the Clinton administration; Lake served in the Foreign Service in Vietnam where he became disillusioned with the war and resigned from Henry Kissinger\'s NSC staff over the secret bombing of Cambodia. Clinton nominated Lake to be CIA Director in 1997 but he withdrew his nomination amid Republican opposition and questions about his handling of classified information.',
 birthDate: 'April 2; 1939',
 birthPlace: 'New York City; New York; USA',
 education: ['Harvard University; BA; 1961', 'Princeton University; PhD International Affairs'],
 affiliations: [
 { name: 'National Security Council', role: 'National Security Advisor (1993-1997)', type: 'agency' },
 { name: 'U.S. Department of State', role: 'Director of Policy Planning (1977-1981)', type: 'agency' },
 { name: 'UNICEF', role: 'Executive Director (2010-2017)', type: 'organization' },
 ],
 controversies: [
 'Received intelligence on Rwandan genocide but Clinton NSC chose inaction; 800;000 Tutsis massacred',
 'Administration deliberately avoided using the word "genocide" to evade legal obligation to intervene under Genocide Convention',
 'Blocked UN reinforcements and delayed armored personnel carrier deployment during Rwanda massacre',
 'CIA Director nomination withdrawn amid questions about classified information handling',
 'NSC under his leadership characterized mass killings as "acts of genocide" rather than "genocide" as legal evasion',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'April 2; 1939', event: 'Born in New York City' },
 { date: '1969', event: 'Resigns from Kissinger\'s NSC staff over secret bombing of Cambodia' },
 { date: 'January 1993', event: 'Becomes National Security Advisor under Clinton' },
 { date: 'April-July 1994', event: 'Rwandan genocide; 800;000 killed while US blocks intervention' },
 { date: '1997', event: 'Withdraws CIA Director nomination amid opposition' },
 { date: '2010', event: 'Appointed UNICEF Executive Director' },
 ],
 socialMedia: [],
 sources: [
 { title: 'PBS Frontline: Ghosts of Rwanda', url: 'https://www.pbs.org/wgbh/pages/frontline/shows/ghosts/', date: '2004' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Warren Christopher', relationship: 'Fellow Clinton administration foreign policy official', href: '/entities/individuals/warren-christopher' },
 { name: 'Sandy Berger', relationship: 'Successor as National Security Advisor under Clinton', href: '/entities/individuals/sandy-berger' },
 { name: 'Bill Clinton', relationship: 'President who appointed Lake as National Security Advisor', href: '/entities/individuals/bill-clinton' },
 ],
 },











  'anthony-ray-hinton': {
    name: 'Anthony Ray Hinton',
    title: 'Wrongfully Convicted; 30 Years on Alabama Death Row; Exonerated 2015',
    role: 'Exoneree; Death Penalty Abolition Advocate; Author',
    riskLevel: 'low',
    description: 'Anthony Ray Hinton spent nearly 30 years on Alabama\'s death row for two 1985 fast-food restaurant murders he did not commit; making his case one of the most egregious wrongful convictions in American history. In 1985; two managers at separate Birmingham-area Quincy\'s restaurants were shot and killed during robberies. Police linked the crimes to an old .38 caliber revolver belonging to Hinton\'s mother; even though the gun had not been fired in over 25 years. Hinton had an ironclad alibi; he was clocked in at his warehouse job 15 miles away during one of the murders; and his supervisor confirmed he was working a locked overnight shift. Despite this; prosecutors pursued the case using fundamentally flawed ballistics testimony from a single state firearms examiner who claimed the bullets matched his mother\'s gun. Hinton\'s court-appointed defense attorney was paid just $1;000 for the entire case and hired a visually impaired retired civil engineer with no firearms expertise to serve as the defense ballistics expert; a choice the attorney later admitted was made because $500 was all the budget allowed. The trial judge reportedly told Hinton\'s lawyer: "If you can\'t find a [ballistics expert] for $500; that\'s just too bad." Hinton was convicted by an all-white jury in 1986 and sentenced to death. For 28 years; Hinton\'s appeals were denied at every level of the Alabama courts. In 1999; Bryan Stevenson and the Equal Justice Initiative took his case. In 2002; EJI hired three of the nation\'s top firearms examiners; all three independently concluded that the bullets could not be matched to the revolver. Despite this; Alabama courts refused to grant a new trial for over a decade. The case finally reached the U.S. Supreme Court; which ruled unanimously 9-0 in Hinton v. Alabama (2014) that his original defense counsel was constitutionally ineffective for failing to obtain a competent ballistics expert. On retrial; the prosecution\'s own new testing confirmed the bullets could not be matched to the gun. All charges were dropped on April 3; 2015; and Hinton walked free after 29 years; 6 months; and 3 days on death row. He subsequently wrote the memoir "The Sun Does Shine: How I Found Life and Freedom on Death Row" (2018); which became a bestseller and was selected for Oprah\'s Book Club. Hinton became a powerful advocate for death penalty abolition; testifying before Congress and speaking internationally about the failures of the American criminal justice system. His case is considered a landmark example of how inadequate defense funding; prosecutorial tunnel vision; junk science; and racial bias can combine to send an innocent person to death row.',
    birthDate: 'April 1; 1956',
    birthPlace: 'Quinton; Alabama; USA',
    education: [],
    affiliations: [
      { name: 'Equal Justice Initiative', role: 'Client (1999-2015); represented by Bryan Stevenson', type: 'organization' },
      { name: 'Alabama Department of Corrections', role: 'Death row inmate at Holman Correctional Facility (1986-2015)', type: 'agency' },
      { name: 'Innocence Project', role: 'Exoneree advocate and speaker', type: 'organization' },
    ],
    controversies: [
      'Convicted of two 1985 Birmingham fast-food restaurant murders based on flawed ballistics testimony matching bullets to his mother\'s old revolver; despite the gun not having been fired in 25 years',
      'Court-appointed attorney paid just $1;000 total for a capital murder defense; hired a visually impaired retired civil engineer with no firearms expertise as the defense ballistics expert for $500',
      'Convicted by an all-white jury in Jefferson County; Alabama in 1986; sentenced to death despite having a confirmed alibi for at least one of the murders',
      'Three independent qualified firearms examiners hired by EJI in 2002 all concluded the bullets could not be matched to the revolver; but Alabama courts refused to grant a new trial for over 12 years',
      'U.S. Supreme Court ruled unanimously 9-0 in Hinton v. Alabama (2014) that his Sixth Amendment right to effective counsel had been violated',
      'Prosecution\'s own retesting upon retrial confirmed the bullets could not be matched to the weapon; charges dropped April 3; 2015',
      'Spent 29 years; 6 months; and 3 days on death row; one of the longest wrongful death row incarcerations in American history',
      'Case exposed systemic failures: Alabama provided just $1;000 for expert witnesses in capital cases at the time; virtually guaranteeing inadequate defense for indigent defendants facing execution',
    ],
    charges: [
      { charge: 'Two counts of capital murder', status: 'All charges dropped; exonerated', date: 'April 3; 2015' },
    ],
    relatedInvestigations: [
      { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
    ],
    timeline: [
      { date: 'April 1; 1956', event: 'Born in Quinton; Alabama' },
      { date: 'February 23; 1985', event: 'First Quincy\'s restaurant murder occurs in Ensley; Birmingham; Alabama' },
      { date: 'July 2; 1985', event: 'Second Quincy\'s restaurant murder occurs in Woodlawn; Birmingham' },
      { date: '1985', event: 'Arrested and charged with both murders based on ballistics match to mother\'s old .38 revolver; despite having alibi' },
      { date: '1986', event: 'Convicted by all-white jury in Jefferson County; sentenced to death' },
      { date: '1986-1999', event: 'Multiple appeals denied at every level of Alabama state courts' },
      { date: '1999', event: 'Bryan Stevenson and Equal Justice Initiative take on his case' },
      { date: '2002', event: 'Three independent firearms examiners conclude bullets cannot be matched to the revolver' },
      { date: '2002-2014', event: 'Alabama courts repeatedly refuse to grant a new trial despite exculpatory ballistics evidence' },
      { date: 'February 25; 2014', event: 'U.S. Supreme Court rules unanimously 9-0 in Hinton v. Alabama that his counsel was constitutionally ineffective' },
      { date: 'April 3; 2015', event: 'All charges dropped; walks free after 29 years; 6 months; and 3 days on death row' },
      { date: '2018', event: 'Publishes memoir "The Sun Does Shine: How I Found Life and Freedom on Death Row"; selected for Oprah\'s Book Club' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anthony Ray Hinton', url: 'https://en.wikipedia.org/wiki/Anthony_Ray_Hinton', date: '' },
      { title: 'Equal Justice Initiative: Anthony Ray Hinton', url: 'https://eji.org/cases/anthony-ray-hinton/', date: '' },
      { title: 'Supreme Court: Hinton v. Alabama (2014)', url: 'https://www.supremecourt.gov/opinions/13pdf/13-6440_ap6b.pdf', date: '2014' },
      { title: 'New York Times: Freed After 30 Years on Death Row', url: 'https://www.nytimes.com/2015/04/04/us/anthony-ray-hinton-alabama-death-row-freed.html', date: '2015' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Bryan Stevenson', relationship: 'Equal Justice Initiative lawyer who represented Hinton for 16 years and secured his freedom', href: '/entities/individuals/bryan-stevenson' },
      { name: 'Walter McMillian', relationship: 'Fellow wrongfully convicted Alabama death row exoneree represented by Stevenson; subject of "Just Mercy"', href: '/entities/individuals/walter-mcmillian' },
    ],
  },


 'anthony-russo': {
 name: 'Anthony Russo',
 title: 'Pentagon Papers Co-Leaker; RAND Analyst Turned Whistleblower',
 role: 'RAND Corporation Analyst; Anti-War Activist; Whistleblower',
 riskLevel: 'low',
 description: 'Anthony Joseph Russo Jr. was an American political activist and RAND Corporation analyst who helped Daniel Ellsberg photocopy the Pentagon Papers; the classified 7;000-page Department of Defense study that revealed systematic government deception about the Vietnam War. Russo had become radicalized against the war after spending two years in Vietnam for RAND from 1966 to 1968; where he witnessed firsthand the gap between official claims of progress and the reality on the ground. When Ellsberg decided to leak the documents in 1969; it was Russo who provided access to a Xerox machine at the advertising agency of one of his acquaintances; and the two men spent months secretly copying the massive study. Russo was indicted alongside Ellsberg in 1971 under the Espionage Act and faced up to 35 years in prison. He spent 47 days in jail for contempt of court when he refused to testify before a grand jury about the leak. The case against both men was dismissed in 1973 after it was revealed that the Nixon administration had authorized the "Plumbers" burglary of Ellsberg\'s psychiatrist\'s office and had illegally wiretapped Ellsberg. Russo remained an activist and journalist until his death in 2008.',
 birthDate: '1936',
 birthPlace: 'Suffolk; Virginia; USA',
 deathDate: 'August 6; 2008',
 education: ['Virginia Polytechnic Institute; BS Aeronautical Engineering', 'Princeton University; PhD'],
 affiliations: [
 { name: 'RAND Corporation', role: 'Analyst (1960s)', type: 'organization' },
 ],
 controversies: [
 'Co-leaked the Pentagon Papers with Daniel Ellsberg; exposing government lies about Vietnam War',
 'Indicted under Espionage Act alongside Ellsberg; faced up to 35 years in prison',
 'Spent 47 days in jail for contempt of court refusing to testify about the leak',
 'Case dismissed after revelation of Nixon Plumbers burglary and illegal wiretapping',
 ],
 charges: [
 { charge: 'Espionage; theft; and conspiracy', status: 'Dismissed due to government misconduct', date: '1973' },
 ],
 relatedInvestigations: [
 { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'high' },
 ],
 timeline: [
 { date: '1936', event: 'Born in Suffolk; Virginia' },
 { date: '1966-1968', event: 'Works for RAND Corporation in Vietnam; becomes disillusioned with the war' },
 { date: '1969', event: 'Helps Ellsberg photocopy the Pentagon Papers using borrowed Xerox machine' },
 { date: 'June 1971', event: 'Pentagon Papers published by New York Times' },
 { date: '1971', event: 'Indicted alongside Ellsberg under Espionage Act' },
 { date: '1972', event: 'Jailed 47 days for contempt for refusing to testify before grand jury' },
 { date: 'May 1973', event: 'All charges dismissed after Nixon administration misconduct revealed' },
 { date: 'August 6; 2008', event: 'Dies at age 71' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York Times: Pentagon Papers Case History', url: 'https://www.nytimes.com', date: '1971' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Daniel Ellsberg', relationship: 'Co-leaked Pentagon Papers with Ellsberg', href: '/entities/individuals/daniel-ellsberg' },
 { name: 'Neil Sheehan', relationship: 'NY Times journalist who published the leaked Pentagon Papers', href: '/entities/individuals/neil-sheehan' },
 ],
 },

 'ari-ben-menashe': {
 name: 'Ari Ben-Menashe',
 title: 'Former Israeli Intelligence Officer; October Surprise and Arms Dealing Whistleblower',
 role: 'Intelligence Operative; Arms Dealer; Political Lobbyist',
 riskLevel: 'high',
 description: 'Ari Ben-Menashe is a former Israeli military intelligence officer who became one of the most controversial whistleblowers in intelligence history. Born in Tehran to an Iraqi-Jewish family; he immigrated to Israel as a teenager and served in Israeli Military Intelligence (Aman) from 1977 to 1987. He claimed direct involvement in Israel\'s role brokering the 1980 October Surprise deal; alleging that the Reagan campaign conspired with Iran to delay the release of American hostages until after the presidential election to undermine Jimmy Carter. He also alleged that Israel was deeply involved in the Iran-Contra arms sales and that Robert Maxwell; the British media mogul; was a longtime Mossad asset. Ben-Menashe was arrested in the U.S. in 1989 on charges of illegally attempting to sell C-130 transport aircraft to Iran; but was acquitted after convincing a jury he had acted on behalf of the Israeli government. Israel initially denied any connection to him but evidence later surfaced confirming his intelligence service. He became an international lobbyist; representing Zimbabwean dictator Robert Mugabe and other controversial clients; and claimed that Jeffrey Epstein was connected to Israeli intelligence operations; specifically alleging Epstein was recruited by Israeli military intelligence to compromise powerful individuals for blackmail purposes.',
 birthDate: '1951',
 birthPlace: 'Tehran; Iran',
 education: [],
 affiliations: [
 { name: 'Israeli Military Intelligence (Aman)', role: 'Intelligence Officer (1977-1987)', type: 'agency' },
 ],
 controversies: [
 'Alleged Israel brokered the 1980 October Surprise deal between Reagan campaign and Iran to delay hostage release',
 'Claimed Robert Maxwell was a longtime Mossad intelligence asset',
 'Arrested for attempting to sell C-130 aircraft to Iran; acquitted after claiming he acted for Israeli government',
 'Alleged Jeffrey Epstein was recruited by Israeli military intelligence for blackmail operations',
 'Israel initially denied all connection to him before evidence confirmed his intelligence service',
 'Lobbied for Zimbabwean dictator Robert Mugabe and other controversial international clients',
 'Claimed direct knowledge of Israel\'s secret role in Iran-Contra arms sales',
 ],
 charges: [
 { charge: 'Conspiracy to sell military aircraft to Iran', status: 'Acquitted', date: '1990' },
 ],
 relatedInvestigations: [
 { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
 ],
 timeline: [
 { date: '1951', event: 'Born in Tehran; Iran to Iraqi-Jewish family' },
 { date: '1977', event: 'Joins Israeli Military Intelligence (Aman)' },
 { date: '1980', event: 'Claims to have witnessed October Surprise negotiations between Reagan campaign and Iran' },
 { date: '1987', event: 'Leaves Israeli intelligence' },
 { date: '1989', event: 'Arrested in U.S. for attempted arms sale to Iran' },
 { date: '1990', event: 'Acquitted after demonstrating he acted on behalf of Israeli government' },
 { date: '1992', event: 'Publishes "Profits of War" detailing Israeli intelligence operations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Ben-Menashe; Ari. Profits of War: Inside the Secret U.S.-Israeli Arms Network', url: 'https://en.wikipedia.org/wiki/Ari_Ben-Menashe', date: '1992' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Maxwell', relationship: 'Claimed Maxwell was Israeli intelligence asset', href: '/entities/individuals/robert-maxwell' },
 { name: 'Jeffrey Epstein', relationship: 'Alleged Epstein connected to Israeli intelligence networks', href: '/entities/individuals/jeffrey-epstein' },
 ],
 },











 'arne-duncan': {
 name: 'Arne Duncan',
 title: 'Obama Education Secretary; Implemented Gainful Employment Rule',
 role: 'Cabinet Secretary; Education Policy Leader; Chicago Schools CEO',
 riskLevel: 'low',
 description: 'Arne Duncan served as U.S. Secretary of Education under President Obama from 2009 to 2015; overseeing the federal government\'s education policy during a critical period for student debt and for-profit college accountability. Before joining the cabinet; he served as CEO of Chicago Public Schools from 2001 to 2008. His signature achievement was implementing the "gainful employment" rule; which required for-profit colleges to prove their graduates could earn enough to repay their student loans or lose access to federal financial aid. This rule was fiercely opposed by the for-profit college industry; which spent millions lobbying against it. The rule was later repealed by Trump\'s Education Secretary Betsy DeVos; allowing predatory for-profit colleges to once again access federal student loan money without accountability. Duncan also oversaw the Race to the Top initiative; which incentivized states to adopt Common Core standards and teacher evaluation systems tied to test scores; drawing criticism from both teachers\' unions who opposed high-stakes testing and conservatives who opposed federal education mandates. His tenure saw the beginning of the student debt crisis\'s explosion; with total student loan debt surpassing $1 trillion for the first time. After leaving government; he founded Chicago CRED; a nonprofit focused on gun violence reduction.',
 birthDate: 'November 6; 1964',
 birthPlace: 'Chicago; Illinois; USA',
 education: ['Harvard University; BA Sociology; 1987'],
 affiliations: [
 { name: 'U.S. Department of Education', role: 'Secretary (2009-2015)', type: 'agency' },
 { name: 'Chicago Public Schools', role: 'CEO (2001-2008)', type: 'agency' },
 ],
 controversies: [
 'Race to the Top program tied federal funding to standardized testing; criticized by teachers\' unions and education researchers',
 'Student loan debt surpassed $1 trillion for first time during his tenure',
 'Gainful employment rule; his signature for-profit college accountability measure; later repealed by Betsy DeVos',
 'Common Core standards he promoted drew opposition from both left and right',
 'Critics argued Race to the Top incentivized teaching to the test rather than genuine education',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'November 6; 1964', event: 'Born in Chicago; Illinois' },
 { date: '2001', event: 'Appointed CEO of Chicago Public Schools' },
 { date: 'January 2009', event: 'Confirmed as U.S. Secretary of Education under Obama' },
 { date: '2011', event: 'Finalizes gainful employment rule targeting predatory for-profit colleges' },
 { date: '2012', event: 'Student loan debt surpasses $1 trillion nationally' },
 { date: 'December 2015', event: 'Steps down as Education Secretary' },
 { date: '2017', event: 'Betsy DeVos repeals gainful employment rule Duncan implemented' },
 ],
 socialMedia: [],
 sources: [
 { title: 'U.S. Department of Education: Gainful Employment Rule', url: 'https://www.ed.gov', date: '2014' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Barack Obama', relationship: 'President who appointed Duncan as Education Secretary', href: '/entities/individuals/barack-obama' },
 ],
 },











 'art-cohen': {
 name: 'Art Cohen',
 title: 'Lead Plaintiff in Trump University Class Action Lawsuit',
 role: 'Trump University Victim; Plaintiff',
 riskLevel: 'low',
 description: 'Art Cohen is a retired small business owner from San Diego who became the lead plaintiff in Cohen v. Trump; one of the class action lawsuits against Trump University. Cohen paid $35;000 to attend Trump University\'s "Gold Elite" program; which promised participants would learn Donald Trump\'s personal real estate investment secrets from "hand-picked" professors. In reality; the instructors were not hand-picked by Trump; had no special expertise; and the program was designed primarily to upsell students into increasingly expensive seminars. Cohen testified that he was pressured into maxing out his credit cards to pay for the program and received no meaningful real estate education. The class action ultimately resulted in a $25 million settlement in November 2016; just days after Trump won the presidential election. New York Attorney General Eric Schneiderman had separately sued Trump University for fraud; and internal documents revealed that the program\'s "playbook" instructed salespeople to target financially vulnerable people; including single parents and the elderly; using high-pressure tactics. Trump had publicly vowed never to settle the case; calling it a matter of principle; but agreed to the $25 million payout shortly after his election.',
 birthDate: '',
 birthPlace: 'San Diego; California; USA',
 education: [],
 affiliations: [],
 controversies: [
 'Paid $35;000 for Trump University "Gold Elite" program that provided no meaningful real estate education',
 'Led class action that resulted in $25 million settlement against Trump University',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump University', slug: 'trump-university', severity: 'high' },
 ],
 timeline: [
 { date: '2010', event: 'Files class action lawsuit Cohen v. Trump against Trump University' },
 { date: 'November 2016', event: 'Trump agrees to $25 million settlement days after winning presidential election' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Cohen v. Trump; No. 3:13-cv-02519 (S.D. Cal.)', url: 'https://www.courtlistener.com', date: '2016' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Sued Trump as lead plaintiff in Trump University class action', href: '/entities/individuals/donald-trump' },
 ],
 },












 'art-pope': {
 name: 'Art Pope',
 title: 'Koch Ally; ALEC Board Member; North Carolina Political Kingmaker',
 role: 'Conservative Megadonor; Retail Executive; Political Operative',
 riskLevel: 'high',
 description: 'James Arthur "Art" Pope is a North Carolina businessman; conservative megadonor; and political operative who has been called the "Knight of the Right" for his role in reshaping North Carolina politics from a swing state into a Republican stronghold. As CEO and chairman of Variety Wholesalers; a discount retail chain; Pope used his fortune to fund a network of conservative organizations that effectively took over North Carolina\'s state government. He served on the board of ALEC (American Legislative Exchange Council); which drafts model legislation for state legislatures on behalf of corporate interests. Pope\'s network of organizations; including the John Locke Foundation; Civitas Institute; and Americans for Prosperity; spent tens of millions on state legislative races; helping Republicans win supermajorities that enabled aggressive gerrymandering of congressional and state legislative districts. A 2011 investigation by the Institute for Southern Studies found that Pope-backed groups had spent over $40 million on North Carolina politics over the previous decade. Governor Pat McCrory appointed Pope as state budget director in 2013; giving him direct control over the budget after his political spending had helped elect McCrory. Under Pope\'s influence; North Carolina passed voter ID laws; reduced early voting; and enacted some of the most aggressive redistricting in the country; maps later struck down by federal courts as unconstitutional racial gerrymanders.',
 birthDate: 'October 5; 1956',
 birthPlace: 'North Carolina; USA',
 education: ['University of North Carolina at Chapel Hill; BA', 'Duke University School of Law; JD'],
 affiliations: [
 { name: 'Variety Wholesalers', role: 'CEO and Chairman', type: 'corporation' },
 { name: 'American Legislative Exchange Council (ALEC)', role: 'Board Member', type: 'organization' },
 { name: 'John Locke Foundation', role: 'Founder and primary funder', type: 'organization' },
 { name: 'Civitas Institute', role: 'Primary funder', type: 'organization' },
 ],
 controversies: [
 'Network of organizations spent over $40 million reshaping North Carolina politics over a decade',
 'Appointed state budget director by governor his spending helped elect; direct conflict of interest',
 'ALEC board member; organization drafts corporate-friendly model legislation for state legislatures',
 'Funded gerrymandering efforts; congressional maps later struck down as unconstitutional racial gerrymanders by federal courts',
 'Backed voter suppression laws including voter ID requirements and reduced early voting',
 'Koch network ally who helped transform swing-state North Carolina into Republican stronghold',
 'Critics describe his political spending as effectively purchasing a state government',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 ],
 timeline: [
 { date: 'October 5; 1956', event: 'Born in North Carolina' },
 { date: '1988', event: 'Founds John Locke Foundation to promote conservative policy in North Carolina' },
 { date: '2010', event: 'Pope-backed groups help Republicans win state legislature supermajorities' },
 { date: '2011', event: 'Republicans use supermajority to aggressively gerrymander congressional maps' },
 { date: '2013', event: 'Appointed North Carolina state budget director by Governor McCrory' },
 { date: '2013', event: 'North Carolina passes restrictive voter ID law backed by Pope network' },
 { date: '2016', event: 'Federal court strikes down North Carolina congressional maps as racial gerrymanders' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Institute for Southern Studies: Art Pope Investigation', url: 'https://www.southernstudies.org', date: '2011' },
 { title: 'New Yorker: State for Sale (Jane Mayer)', url: 'https://www.newyorker.com', date: '2011' },
 ],
 aliases: ['James Arthur Pope'],
 knownAssociates: [
 { name: 'Charles Koch', relationship: 'Fellow conservative megadonor and Koch network ally', href: '/entities/individuals/charles-koch' },
 { name: 'Richard Fink', relationship: 'Koch operative who worked with Pope\'s network', href: '/entities/individuals/richard-fink' },
 ],
 },

 'arthur-rudolph': {
 name: 'Arthur Rudolph',
 title: 'Nazi Rocket Scientist; V-2 Slave Labor Director; NASA Saturn V Manager',
 role: 'Nazi Engineer; NASA Rocket Scientist; War Criminal',
 riskLevel: 'critical',
 description: 'Arthur Louis Hugo Rudolph was a German-American rocket engineer who directed the V-2 rocket production factory at the Mittelwerk underground facility in Nazi Germany; where an estimated 20;000 concentration camp prisoners died from starvation; disease; execution; and brutal working conditions while building the V-2 missiles. Despite his direct involvement in utilizing slave labor; Rudolph was recruited to the United States under Operation Paperclip; the secret program to bring Nazi scientists to America. At NASA; he went on to manage the development of the Saturn V rocket; the most powerful rocket ever built; which sent astronauts to the Moon during the Apollo program. Rudolph received the NASA Distinguished Service Medal for his Saturn V work. In 1983; the Office of Special Investigations (OSI) at the DOJ investigated Rudolph\'s wartime activities and confronted him with evidence of his direct involvement in slave labor operations. Rudolph agreed to renounce his U.S. citizenship and leave the country to avoid criminal prosecution; returning to Germany. He was never criminally charged in Germany and maintained his innocence until his death. His case exemplifies how the U.S. government prioritized Cold War technological advantages over accountability for war crimes; allowing individuals directly responsible for the deaths of thousands to live freely in America for decades and receive the nation\'s highest honors.',
 birthDate: 'November 9; 1906',
 birthPlace: 'Stepfershausen; Germany',
 deathDate: 'January 1; 1996',
 education: ['Berlin Technical University; Mechanical Engineering'],
 affiliations: [
 { name: 'NASA', role: 'Saturn V Program Manager (1960s)', type: 'agency' },
 { name: 'Nazi Party', role: 'Member (joined 1931)', type: 'organization' },
 { name: 'Mittelwerk GmbH', role: 'Production Director; V-2 slave labor factory', type: 'corporation' },
 ],
 controversies: [
 'Directed V-2 production at Mittelwerk where 20;000 concentration camp slaves died from starvation; disease; and execution',
 'Recruited by U.S. under Operation Paperclip despite direct involvement in slave labor operations',
 'Joined Nazi Party in 1931; two years before Hitler came to power',
 'Received NASA Distinguished Service Medal while hiding his war crimes history',
 'Renounced U.S. citizenship in 1983 to avoid DOJ prosecution for wartime activities',
 'Never criminally charged in Germany; maintained innocence until death',
 'Managed Saturn V rocket that sent Apollo astronauts to the Moon; celebrated as American hero',
 ],
 charges: [
 { charge: 'DOJ investigation for participation in persecution through slave labor', status: 'Renounced citizenship and departed U.S. to avoid prosecution', date: '1983' },
 ],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
 { date: 'November 9; 1906', event: 'Born in Stepfershausen; Germany' },
 { date: '1931', event: 'Joins Nazi Party' },
 { date: '1943-1945', event: 'Directs V-2 rocket production at Mittelwerk using concentration camp slave labor' },
 { date: '1945', event: 'Recruited under Operation Paperclip and brought to United States' },
 { date: '1960s', event: 'Manages Saturn V rocket program at NASA' },
 { date: '1969', event: 'Saturn V launches Apollo 11 to the Moon' },
 { date: '1983', event: 'Renounces U.S. citizenship after DOJ confronts him with slave labor evidence' },
 { date: 'January 1; 1996', event: 'Dies in Hamburg; Germany at age 89' },
 ],
 socialMedia: [],
 sources: [
 { title: 'National Archives: Operation Paperclip Records', url: 'https://www.archives.gov', date: '' },
 { title: 'Neufeld; Michael J. Von Braun: Dreamer of Space; Engineer of War', url: 'https://en.wikipedia.org/wiki/Arthur_Rudolph', date: '2007' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wernher von Braun', relationship: 'Fellow Operation Paperclip Nazi scientist recruited to NASA', href: '/entities/individuals/wernher-von-braun' },
 { name: 'Kurt Blome', relationship: 'Fellow Operation Paperclip recruit', href: '/entities/individuals/kurt-blome' },
 { name: 'Georg Rickhey', relationship: 'Fellow Paperclip scientist from V-2 rocket program', href: '/entities/individuals/georg-rickhey' },
 ],
 },

 'arthur-sackler': {
 name: 'Arthur M. Sackler',
 title: 'Pharmaceutical Marketing Pioneer; Patriarch of the Sackler Dynasty',
 role: 'Psychiatrist; Pharmaceutical Marketer; Art Collector; Sackler Family Patriarch',
 riskLevel: 'high',
 description: 'Arthur Mitchell Sackler was an American psychiatrist; businessman; and philanthropist who is widely regarded as the architect of modern pharmaceutical marketing and the patriarch of the Sackler family dynasty. He pioneered the aggressive direct-to-physician marketing techniques that would later be used by his family\'s company Purdue Pharma to push OxyContin; fueling the opioid epidemic that has killed over 500;000 Americans. Sackler\'s most significant contribution to pharmaceutical marketing was his promotion of Valium for Hoffmann-La Roche in the 1960s; which he transformed from a niche sedative into the first $100 million drug through revolutionary advertising campaigns directed at physicians. He created the medical advertising firm William Douglas McAdams and pioneered the practice of using medical journals; "educational" seminars; and physician endorsements to market drugs; effectively creating the blueprint for pharmaceutical marketing that persists today. Although Arthur Sackler died in 1987 before OxyContin was developed; his brothers Mortimer and Raymond used his exact marketing playbook to aggressively push OxyContin starting in 1996; minimizing its addictive properties and targeting prescribers with misleading claims. The Sackler family donated billions from pharmaceutical profits to museums and universities worldwide; with their name prominently displayed at the Metropolitan Museum of Art; the Louvre; the Guggenheim; and numerous other institutions. Following the opioid crisis; many of these institutions removed the Sackler name.',
 birthDate: 'August 22; 1913',
 birthPlace: 'Brooklyn; New York; USA',
 deathDate: 'May 26; 1987',
 education: ['New York University; BA', 'New York University School of Medicine; MD; 1937'],
 affiliations: [
 { name: 'William Douglas McAdams', role: 'Founder; pharmaceutical advertising agency', type: 'corporation' },
 { name: 'Purdue Frederick', role: 'Owner (with brothers); pharmaceutical company precursor to Purdue Pharma', type: 'corporation' },
 ],
 controversies: [
 'Pioneered aggressive direct-to-physician pharmaceutical marketing techniques later used to push OxyContin',
 'Valium marketing campaign created the blueprint for pharmaceutical promotion that fueled the opioid epidemic',
 'Built pharmaceutical advertising empire that normalized misleading drug promotion to doctors',
 'Sackler family fortune built on pharmaceutical marketing used to whitewash family name through museum donations',
 'Multiple institutions including Metropolitan Museum; Louvre; and Guggenheim later removed Sackler name over opioid crisis',
 'Brothers and descendants used his exact marketing playbook to promote OxyContin; killing 500;000+ Americans',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: 'August 22; 1913', event: 'Born in Brooklyn; New York' },
 { date: '1937', event: 'Graduates from NYU School of Medicine' },
 { date: '1942', event: 'Founds medical advertising firm William Douglas McAdams' },
 { date: '1952', event: 'Sackler brothers purchase Purdue Frederick pharmaceutical company' },
 { date: '1960s', event: 'Pioneers Valium marketing; transforms it into first $100 million drug' },
 { date: 'May 26; 1987', event: 'Dies at age 73' },
 { date: '1996', event: 'Posthumous: Brothers launch OxyContin using his marketing techniques' },
 { date: '2019-2022', event: 'Museums worldwide begin removing Sackler name in response to opioid crisis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Keefe; Patrick Radden. Empire of Pain: The Secret History of the Sackler Dynasty', url: 'https://en.wikipedia.org/wiki/Arthur_M._Sackler', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Kathe Sackler', relationship: 'Niece who continued Sackler pharmaceutical dynasty', href: '/entities/individuals/kathe-sackler' },
 { name: 'David Sackler', relationship: 'Grandson who directed Purdue Pharma', href: '/entities/individuals/david-sackler' },
 { name: 'Richard Sackler', relationship: 'Nephew who drove aggressive OxyContin marketing', href: '/entities/individuals/richard-sackler' },
 ],
 },

 'arvind-thiruvengadam': {
 name: 'Arvind Thiruvengadam',
 title: 'WVU Researcher Who Exposed Volkswagen Emissions Cheating',
 role: 'Mechanical Engineer; Emissions Researcher; Whistleblower',
 riskLevel: 'low',
 description: 'Arvind Thiruvengadam is a mechanical engineering researcher at West Virginia University (WVU) who co-authored the landmark 2014 study that exposed Volkswagen\'s massive emissions cheating scandal; one of the largest corporate frauds in history. Working at WVU\'s Center for Alternative Fuels; Engines; and Emissions (CAFEE); Thiruvengadam and his colleague Daniel Carder conducted real-world on-road emissions testing of VW diesel vehicles using portable emissions measurement systems. Their testing revealed that VW\'s "clean diesel" vehicles were emitting up to 40 times the legal limit of nitrogen oxides (NOx) during normal driving; despite passing laboratory emissions tests. This discrepancy proved that VW had installed illegal "defeat device" software that detected when cars were being tested and temporarily reduced emissions only during testing. The discovery; initially commissioned by the International Council on Clean Transportation (ICCT); led to VW admitting it had installed the software in approximately 11 million vehicles worldwide. The scandal cost VW over $33 billion in fines; settlements; and vehicle buybacks; the CEO resigned; and multiple executives were criminally charged. Thiruvengadam\'s work demonstrated the critical importance of independent academic research in exposing corporate fraud that regulators failed to detect for years.',
 birthDate: '',
 birthPlace: 'India',
 education: ['West Virginia University; PhD Mechanical Engineering'],
 affiliations: [
 { name: 'West Virginia University', role: 'Research Faculty; Center for Alternative Fuels; Engines; and Emissions', type: 'organization' },
 ],
 controversies: [
 'Research exposed VW\'s defeat device software that allowed 11 million vehicles to cheat emissions tests worldwide',
 'Tests found VW diesels emitting up to 40 times the legal NOx limit during normal driving',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: '2013', event: 'WVU team begins on-road emissions testing of VW diesel vehicles' },
 { date: 'May 2014', event: 'WVU publishes study showing massive discrepancy between lab and real-world VW diesel emissions' },
 { date: 'September 2015', event: 'EPA issues notice of violation to VW; scandal becomes public' },
 { date: '2016', event: 'VW admits to installing defeat devices in 11 million vehicles' },
 ],
 socialMedia: [],
 sources: [
 { title: 'WVU CAFEE: On-Road Emissions Testing Study', url: 'https://cafee.wvu.edu', date: '2014' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Daniel Carder', relationship: 'WVU colleague who co-discovered VW emissions cheat', href: '/entities/individuals/daniel-carder' },
 { name: 'Herbert Diess', relationship: 'VW CEO during aftermath of emissions scandal they uncovered', href: '/entities/individuals/herbert-diess' },
 ],
 },

 'ashli-babbitt': {
 name: 'Ashli Babbitt',
 title: 'QAnon Follower Shot and Killed Breaching Capitol on January 6',
 role: 'Air Force Veteran; QAnon Adherent; January 6 Participant',
 riskLevel: 'low',
 description: 'Ashli Elizabeth Babbitt was a 35-year-old Air Force veteran and adherent of the QAnon conspiracy movement who was shot and killed by Capitol Police Lieutenant Michael Byrd while attempting to climb through a broken window into the Speaker\'s Lobby during the January 6; 2021 storming of the U.S. Capitol. She was the only person directly killed by gunfire during the Capitol breach. Babbitt served 14 years in the Air Force and Air National Guard; including deployments to Iraq and Afghanistan; and held a high-level security clearance. After leaving the military; she ran a pool supply business in San Diego that struggled financially. She became deeply radicalized through QAnon content on social media; posting extensively about the conspiracy theory\'s claims that a secret cabal of pedophilic elites controlled the government and that Trump was waging a covert war against them. On January 6; she traveled to Washington D.C. to attend Trump\'s rally and then marched to the Capitol. She was at the front of the mob that breached the building and was shot while attempting to enter a barricaded hallway where members of Congress were being evacuated. Trump later called her "an incredible person" and her death became a rallying cry for the far right; who portrayed her as a martyr. The DOJ cleared Lt. Byrd of wrongdoing; finding the shooting was justified in defense of members of Congress.',
 birthDate: 'October 10; 1985',
 birthPlace: 'San Diego; California; USA',
 deathDate: 'January 6; 2021',
 education: [],
 affiliations: [
 { name: 'United States Air Force', role: 'Veteran; 14 years of service including deployments to Iraq and Afghanistan', type: 'agency' },
 ],
 controversies: [
 'Shot and killed by Capitol Police while attempting to breach Speaker\'s Lobby during January 6 insurrection',
 'Deeply radicalized by QAnon conspiracy theories spread on social media',
 'Trump called her "an incredible person" and turned her into a far-right martyr',
 'DOJ cleared Lt. Michael Byrd of wrongdoing; ruling shooting was justified in defense of Congress',
 'Had previously been charged with reckless endangerment and property destruction in unrelated incidents',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Qanon Radicalization', slug: 'qanon-radicalization', severity: 'high' },
 ],
 timeline: [
 { date: 'October 10; 1985', event: 'Born in San Diego; California' },
 { date: '2003', event: 'Enlists in U.S. Air Force' },
 { date: '2016', event: 'Begins engaging with QAnon conspiracy content online' },
 { date: 'January 6; 2021', event: 'Attends Trump rally then storms Capitol; shot and killed by Capitol Police' },
 { date: 'April 2021', event: 'DOJ clears Lt. Michael Byrd; rules shooting was justified' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: Investigation of Capitol Police Shooting', url: 'https://www.justice.gov', date: '2021' },
 ],
 aliases: ['Ashli McEntee'],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 Capitol breacher', href: '/entities/individuals/jacob-chansley' },
 { name: 'Donald Trump', relationship: 'Stormed Capitol in support of Trump; called "incredible person" by Trump after death', href: '/entities/individuals/donald-trump' },
 ],
 },

 'ashraf-ghani': {
 name: 'Ashraf Ghani',
 title: 'Afghan President Who Fled as Taliban Captured Kabul',
 role: 'President of Afghanistan; World Bank Scholar; Anti-Corruption Author',
 riskLevel: 'high',
 description: 'Ashraf Ghani Ahmadzai is an Afghan-American anthropologist; academic; and politician who served as President of Afghanistan from 2014 until August 15; 2021; when he fled the country as the Taliban captured Kabul; the culmination of a rapid military collapse despite 20 years and over $2 trillion in U.S. spending. Ghani\'s flight was widely condemned as a betrayal; with reports indicating he departed with vehicles and helicopters stuffed with cash; an allegation he denied. Before entering politics; Ghani was a World Bank technocrat and co-authored the book "Fixing Failed States" with Clare Lockhart. As president; he was widely criticized for centralizing power; marginalizing potential allies; and presiding over massive government corruption that hollow the Afghan military. The Afghanistan Papers; obtained by the Washington Post through FOIA; revealed that U.S. officials knew the Afghan government was hopelessly corrupt and that the war was unwinnable; but publicly claimed progress for years. Under Ghani\'s tenure; "ghost soldiers" on the Afghan military payroll consumed billions in salary payments for troops that did not exist; with commanders pocketing the money. When the Taliban launched their final offensive in August 2021; the Afghan military collapsed within days; with soldiers surrendering en masse; partly because they had never been paid or supplied as funds were stolen by corrupt officials. Ghani fled to the UAE where he was granted asylum.',
 birthDate: 'May 19; 1949',
 birthPlace: 'Logar Province; Afghanistan',
 education: ['American University of Beirut; BA', 'Columbia University; MA; PhD Anthropology'],
 affiliations: [
 { name: 'Government of Afghanistan', role: 'President (2014-2021)', type: 'agency' },
 { name: 'World Bank', role: 'Senior Consultant (1991-2002)', type: 'organization' },
 ],
 controversies: [
 'Fled Afghanistan as Taliban captured Kabul on August 15; 2021; widely condemned as betrayal',
 'Reports alleged he fled with vehicles stuffed with cash; though he denied it',
 'Presided over massive government corruption including "ghost soldiers" consuming billions in payroll',
 'Afghan military collapsed within days of Taliban offensive after 20 years and $2 trillion in U.S. spending',
 'Centralized power and marginalized political allies; weakening government unity',
 'Afghanistan Papers revealed U.S. officials knew government was hopelessly corrupt but publicly claimed progress',
 'Co-authored "Fixing Failed States" while leading a state that catastrophically failed under his watch',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Afghanistan Papers', slug: 'afghanistan-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'May 19; 1949', event: 'Born in Logar Province; Afghanistan' },
 { date: '1991-2002', event: 'Works as World Bank consultant' },
 { date: '2009', event: 'Unsuccessfully runs for Afghan presidency' },
 { date: 'September 2014', event: 'Inaugurated as President of Afghanistan' },
 { date: 'February 2020', event: 'U.S. signs Doha Agreement with Taliban for withdrawal' },
 { date: 'August 15; 2021', event: 'Flees Afghanistan as Taliban captures Kabul' },
 { date: 'August 2021', event: 'Granted asylum in United Arab Emirates' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: The Afghanistan Papers', url: 'https://www.washingtonpost.com/graphics/2019/investigations/afghanistan-papers/', date: '2019' },
 ],
 aliases: ['Ashraf Ghani Ahmadzai'],
 knownAssociates: [
 { name: 'Hamid Karzai', relationship: 'Predecessor as Afghan president', href: '/entities/individuals/hamid-karzai' },
 { name: 'Joe Biden', relationship: 'U.S. withdrew from Afghanistan under Biden; Ghani fled during collapse', href: '/entities/individuals/joe-biden' },
 ],
 },











 'alan-cranston': {
 name: 'Alan Cranston',
 title: 'Keating Five Senator; Savings and Loan Scandal',
 role: 'U.S. Senator (D-CA); Keating Five Member',
 riskLevel: 'high',
 description: 'Alan MacGregor Cranston was a U.S. Senator from California who served from 1969 to 1993 and became one of the most prominent figures in the savings and loan scandal as a member of the "Keating Five." Cranston received $1.3 million in campaign contributions from Charles Keating Jr.; the head of Lincoln Savings and Loan Association; and then pressured federal banking regulators to go easy on Lincoln\'s risky investments and accounting practices. When the Federal Home Loan Bank Board attempted to investigate Lincoln; Cranston and four other senators intervened on Keating\'s behalf; meeting with regulators to discourage enforcement action. Lincoln Savings ultimately collapsed in 1989 at a cost of $3.4 billion to taxpayers; the most expensive S&L failure in history. The Senate Ethics Committee found that Cranston\'s conduct was the most egregious of the five senators; issuing a formal reprimand for "improper and repugnant" behavior and finding substantial evidence of a quid pro quo between his interventions and Keating\'s donations. Cranston\'s defense was that he had done nothing different from what other politicians routinely did for major donors; a claim that highlighted the systemic corruption of money in politics. Before the scandal; Cranston had an otherwise distinguished career and had been Senate Majority Whip. He did not seek re-election in 1992; partly due to the Keating scandal and partly due to prostate cancer. Keating himself was later convicted of fraud.',
 birthDate: 'June 19; 1914',
 birthPlace: 'Palo Alto; California; USA',
 deathDate: 'December 31; 2000',
 education: ['Pomona College; BA; 1936', 'Stanford University'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator (D-CA; 1969-1993)', type: 'agency' },
 ],
 controversies: [
 'Received $1.3 million from Charles Keating while pressuring regulators to go easy on Lincoln Savings',
 'Senate Ethics Committee reprimanded him for "improper and repugnant" conduct; found substantial evidence of quid pro quo',
 'Lincoln Savings collapse cost taxpayers $3.4 billion; most expensive S&L failure in history',
 'Keating Five intervention delayed regulatory action; allowing Lincoln to continue risky investments',
 'Most severely sanctioned of the five senators involved; only one to receive formal reprimand',
 'Defended actions by arguing all politicians did the same for major donors',
 ],
 charges: [
 { charge: 'Senate Ethics Committee reprimand for improper conduct', status: 'Reprimanded', date: '1991' },
 ],
 relatedInvestigations: [
 { title: 'The Savings & Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 19; 1914', event: 'Born in Palo Alto; California' },
 { date: '1969', event: 'Elected to U.S. Senate from California' },
 { date: '1987', event: 'Meets with federal regulators on behalf of Charles Keating\'s Lincoln Savings' },
 { date: '1989', event: 'Lincoln Savings collapses at cost of $3.4 billion to taxpayers' },
 { date: '1991', event: 'Senate Ethics Committee reprimands Cranston for "improper and repugnant" conduct' },
 { date: '1993', event: 'Retires from Senate' },
 { date: 'December 31; 2000', event: 'Dies at age 86' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Ethics Committee: Keating Five Investigation', url: 'https://www.senate.gov', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'S&L executive who gave Cranston $1.3 million in exchange for regulatory pressure', href: '/entities/individuals/charles-keating' },
 { name: 'John Glenn', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/john-glenn' },
 ],
 },

 'alvaro-colom': {
 name: 'Alvaro Colom',
 title: 'Guatemalan President Who Apologized for U.S. Syphilis Experiments',
 role: 'President of Guatemala (2008-2012)',
 riskLevel: 'medium',
 description: 'Alvaro Colom Caballeros was the President of Guatemala from 2008 to 2012; best known internationally for issuing a formal apology in 2010 on behalf of Guatemala after historian Susan Reverby discovered that U.S. Public Health Service researchers had deliberately infected hundreds of Guatemalan citizens with syphilis and other sexually transmitted diseases between 1946 and 1948; without their knowledge or consent. The victims included prisoners; sex workers; soldiers; and patients in a mental asylum; who were exposed to syphilis through direct inoculation; infected prostitutes; and other means. At least 83 subjects died during the experiments. Colom called the experiments "crimes against humanity" and his government filed a lawsuit against the United States seeking compensation; though U.S. courts ultimately dismissed the case on sovereign immunity grounds. As president; Colom positioned himself as a center-left reformer; implementing social programs like conditional cash transfers to impoverished families (Mi Familia Progresa) and free school meals. However; his presidency was marred by corruption scandals; and in 2018 he was arrested along with his entire former cabinet on charges of embezzlement related to a public bus system contract (Transurbano) that allegedly defrauded the state of approximately $35 million. He died in January 2023 while awaiting trial.',
 birthDate: 'June 15; 1951',
 birthPlace: 'Guatemala City; Guatemala',
 deathDate: 'January 23; 2023',
 education: ['Universidad de San Carlos de Guatemala; Industrial Engineering'],
 affiliations: [
 { name: 'Government of Guatemala', role: 'President (2008-2012)', type: 'agency' },
 ],
 controversies: [
 'Issued formal apology for U.S. syphilis experiments that infected hundreds of Guatemalan citizens without consent; killing at least 83',
 'Guatemala\'s lawsuit against U.S. for syphilis experiments dismissed on sovereign immunity grounds',
 'Arrested in 2018 with entire former cabinet for Transurbano bus contract embezzlement; approximately $35 million fraud',
 'Died in 2023 while awaiting trial on corruption charges',
 ],
 charges: [
 { charge: 'Embezzlement related to Transurbano bus contract', status: 'Died awaiting trial', date: '2018' },
 ],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 15; 1951', event: 'Born in Guatemala City' },
 { date: 'January 2008', event: 'Inaugurated as President of Guatemala' },
 { date: 'October 2010', event: 'Issues formal apology for U.S. syphilis experiments on Guatemalan citizens' },
 { date: '2012', event: 'Presidential term ends' },
 { date: 'February 2018', event: 'Arrested with former cabinet for Transurbano corruption' },
 { date: 'January 23; 2023', event: 'Dies at age 71 while awaiting trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Reverby; Susan. Examining Tuskegee: The Infamous Syphilis Study', url: 'https://en.wikipedia.org/wiki/Guatemala_syphilis_experiments', date: '2009' },
 ],
 aliases: ['Alvaro Colom Caballeros'],
 knownAssociates: [
 { name: 'Otto Perez Molina', relationship: 'Successor as Guatemalan president; also arrested for corruption', href: '/entities/individuals/otto-perez-molina' },
 ],
 },

  'adriana-ross': {
    name: 'Adriana Ross',
    title: 'Epstein Associate',
    role: 'Inner Circle, Granted Immunity',
    riskLevel: 'high',
    description: 'Recruited by Ghislaine Maxwell, Adriana Ross became part of Epstein\'s inner circle. Granted immunity under the 2008 Non-Prosecution Agreement. When deposed, she invoked the Fifth Amendment over 100 times, refusing to answer questions about Epstein\'s activities.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Granted immunity under 2008 NPA despite being named as co-conspirator',
      'Invoked Fifth Amendment over 100 times during deposition',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2008', event: 'Granted immunity under Non-Prosecution Agreement' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Miami Herald Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Recruited by and associated with', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Recruited by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Sarah Kellen', relationship: 'Fellow Epstein assistant and named co-conspirator', href: '/entities/individuals/sarah-kellen' },
      { name: 'Nadia Marcinkova', relationship: 'Fellow member of Epstein\'s inner circle', href: '/entities/individuals/nadia-marcinkova' },
      { name: 'Lesley Groff', relationship: 'Fellow Epstein staff member who coordinated operations', href: '/entities/individuals/lesley-groff' },
    ],
  },


 'annie-farmer': {
 name: 'Annie Farmer',
 title: 'Epstein Survivor and Advocate',
 role: 'Sexual abuse survivor and witness',
 riskLevel: 'low',
 description: 'Annie Farmer is one of the few Jeffrey Epstein accusers who chose to use her real name publicly, testifying at both the trial of Ghislaine Maxwell and in civil proceedings. She was groomed and sexually abused by Epstein and Maxwell beginning in 1996 when she was 16 years old during a visit to Epstein New Mexico ranch.',
 education: ['University of Pennsylvania', 'Columbia University, MA Psychology'],
 affiliations: [
 { name: 'Independent', role: 'Maria Farmer CBS Interview', type: 'organization' },
 ],
 controversies: [
 'Testified at the Ghislaine Maxwell trial in December 2021 that Maxwell groped her during a massage and that Epstein sexually assaulted her at his New Mexico ranch when she was 16',
 'One of only four accusers to testify at the Maxwell trial, using her real name rather than a pseudonym',
 'Reported the abuse to her mother in 1996, who confronted Epstein and was told it would not happen again; no report was made to law enforcement at the time',
 'Became an advocate for survivors of sexual abuse, calling for accountability from the institutions and individuals who enabled Epstein',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1996-04-01', event: 'Visited Epstein New Mexico ranch at age 16, was sexually assaulted' },
 { date: '2019-08-09', event: 'Identified as Epstein accuser after his arrest and death' },
 { date: '2021-12-10', event: 'Testified at Ghislaine Maxwell federal trial' },
 { date: '2021-12-29', event: 'Maxwell convicted on five of six counts' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: United States v. Ghislaine Maxwell Trial', url: 'https://www.justice.gov/usao-sdny/united-states-v-ghislaine-maxwell', date: '2021-12-29' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Abuser who groomed and sexually assaulted her', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Co-conspirator who facilitated the abuse', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },

  'alec-baldwin': {
    name: 'Alec Baldwin',
    title: 'Actor',
    role: 'Named in Black Book',
    riskLevel: 'low',
    description: 'Actor named in Epstein\'s Black Book.',
    birthDate: 'April 3, 1958',
    education: ['George Washington University', 'NYU Tisch School of the Arts'],
    affiliations: [
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'Named in Epstein Black Book',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alec Baldwin', url: 'https://en.wikipedia.org/wiki/Alec_Baldwin', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'NYC social/entertainment circles', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Woody Allen', relationship: 'Film industry connections, both in Epstein circles', href: '/entities/individuals/woody-allen' },
      { name: 'Donald Trump', relationship: 'NYC celebrity circles', href: '/entities/individuals/donald-trump' },
    ],
  },











  'audrey-strauss': {
    name: 'Audrey Strauss',
    title: 'Acting SDNY US Attorney',
    role: 'Oversaw Maxwell Arrest',
    riskLevel: 'low',
    description: 'Acting US Attorney for SDNY who oversaw Ghislaine Maxwell\'s arrest in July 2020. Succeeded Geoffrey Berman after AG Barr\'s attempted removal.',
    education: ['Law Degree'],
    affiliations: [
      { name: 'SDNY', role: 'Acting US Attorney (2020)', type: 'agency' },
    ],
    controversies: [
      'Succeeded Geoffrey Berman as Acting SDNY U.S. Attorney; led the prosecution of Ghislaine Maxwell',
      'Announced Maxwell\'s arrest on July 2, 2020, calling her a key enabler of Epstein\'s trafficking scheme',
      'Oversaw the successful federal case resulting in Maxwell\'s conviction on 5 of 6 counts',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2020 Jul', event: 'Oversaw Maxwell arrest in New Hampshire' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Audrey Strauss', url: 'https://en.wikipedia.org/wiki/Audrey_Strauss', date: '' },
      { title: 'Law.com Profile', url: 'https://www.law.com/', date: '' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Geoffrey Berman', relationship: 'Predecessor', href: '/entities/individuals/geoffrey-berman' },
      { name: 'Ghislaine Maxwell', relationship: 'Led prosecution resulting in conviction', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Maurene Comey', relationship: 'Prosecutor on Maxwell trial team', href: '/entities/individuals/maurene-comey' },
      { name: 'Virginia Giuffre', relationship: 'Key victim whose testimony supported case', href: '/entities/individuals/virginia-giuffre' },
    ],
  },


 'alfredo-rodriguez': {
 name: 'Alfredo Rodriguez',
 title: 'Former Butler to Jeffrey Epstein',
 role: 'Key witness in Epstein investigation',
 riskLevel: 'medium',
 description: 'Alfredo Rodriguez served as a house manager and butler at Jeffrey Epstein Palm Beach estate. He stole a "black book" containing names and contact information of Epstein associates and attempted to sell it. He was convicted of obstruction of justice but was considered one of the bravest early witnesses willing to cooperate against Epstein.',
 deathDate: 'January 1, 2015',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'BBC: Butler Testimony at Maxwell Trial', type: 'organization' },
 ],
 controversies: [
 'Stole Jeffrey Epstein "little black book" from the Palm Beach estate, which contained names and numbers of powerful figures circled and annotated by Epstein',
 'Attempted to sell the black book to Epstein victims attorney for $50,000; was caught and convicted of obstruction of justice',
 'Sentenced to 18 months in federal prison for obstruction of justice in 2011',
 'Died of mesothelioma in December 2014 at age 60 before he could testify in subsequent Epstein proceedings',
 'Despite his conviction, he was described by investigators as a witness who truly wanted to help Epstein victims and had provided crucial early information about the abuse',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2004-01-01', event: 'Serving as house manager at Epstein Palm Beach estate during period of abuse' },
 { date: '2009-01-01', event: 'Attempted to sell Epstein black book to victims attorney' },
 { date: '2011-05-18', event: 'Sentenced to 18 months for obstruction of justice' },
 { date: '2014-12-01', event: 'Died of mesothelioma at age 60' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Alfredo Rodriguez', url: 'https://en.wikipedia.org/wiki/Alfredo_Rodriguez', date: '' },
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Former employer at Palm Beach estate', href: '/entities/individuals/jeffrey-epstein' },
 ],
 },

  'antony-blinken': {
    name: 'Antony Blinken',
    title: 'U.S. Secretary of State Under Biden; WestExec Advisors Co-Founder; Architect of Gaza Policy',
    role: 'U.S. Secretary of State (2021-2025); Former Deputy Secretary of State; WestExec Advisors Co-Founder',
    riskLevel: 'medium',
    description: 'Antony John Blinken served as the 71st United States Secretary of State from January 2021 to January 2025 under President Biden. Born in New York City to a prominent family with deep diplomatic ties (his stepfather Samuel Pisar was a Holocaust survivor and advisor to JFK; his father Donald Blinken served as U.S. Ambassador to Hungary); Blinken attended the elite Ecole Jeannine Manuel in Paris and graduated from Harvard and Columbia Law School. Before returning to government in the Biden administration; Blinken co-founded WestExec Advisors; a strategic consulting firm that helped defense and technology companies navigate government contracts and regulatory processes; raising questions about the revolving door between government and the defense-consulting industry. WestExec\'s client list was never fully disclosed; and ethics watchdogs raised concerns about potential conflicts of interest when multiple WestExec partners joined the Biden administration. As Secretary of State; Blinken\'s most controversial legacy is U.S. policy during the Israel-Gaza conflict beginning in October 2023. ProPublica reported in late 2024 that Blinken overruled his own State Department experts who had concluded that Israel was deliberately blocking humanitarian aid to Gaza; with two internal assessments finding Israel in violation of U.S. law governing arms transfers to countries that impede humanitarian assistance. Despite these findings; Blinken approved continued weapons transfers to Israel. He organized the 2023 letter signed by 51 former intelligence officials claiming the Hunter Biden laptop story had the "hallmarks of Russian disinformation" before the 2020 election; which was later confirmed to be authentic. He also faced criticism for the chaotic August 2021 U.S. withdrawal from Afghanistan; which resulted in 13 U.S. service members killed and thousands of Afghan allies stranded.',
    birthDate: 'April 16; 1962',
    birthPlace: 'New York City; New York; USA',
    education: ['Harvard University; AB (1984)', 'Columbia Law School; JD (1988)'],
    affiliations: [
      { name: 'U.S. State Department', role: 'Secretary of State (2021-2025); Deputy Secretary (2015-2017)', type: 'agency' },
      { name: 'WestExec Advisors', role: 'Co-founder; strategic consulting firm connecting defense/tech companies to government', type: 'corporation' },
    ],
    controversies: [
      'Overruled own State Department experts who found Israel was deliberately blocking humanitarian aid to Gaza in violation of U.S. law; approved continued weapons transfers',
      'Co-founded WestExec Advisors; a consulting firm that helped defense companies navigate government; multiple WestExec partners joined Biden administration raising revolving door concerns',
      'Organized the October 2020 letter signed by 51 former intelligence officials claiming Hunter Biden laptop had "hallmarks of Russian disinformation"; laptop later confirmed authentic',
      'Oversaw chaotic August 2021 Afghanistan withdrawal that killed 13 U.S. service members and stranded thousands of Afghan allies',
      'WestExec Advisors never fully disclosed its client list; ethics watchdogs raised conflict of interest concerns about defense industry connections',
      'ProPublica reported two internal State Department assessments found Israel in violation of Leahy Law and other statutes; Blinken overrode both findings',
    ],
    charges: [],
    relatedInvestigations: [],
    timeline: [
      { date: 'April 16; 1962', event: 'Born in New York City to family with deep diplomatic connections' },
      { date: '1984', event: 'Graduates from Harvard University' },
      { date: '1988', event: 'Earns law degree from Columbia Law School' },
      { date: '1994-2001', event: 'Serves on National Security Council staff under Clinton administration' },
      { date: '2009-2013', event: 'National Security Advisor to Vice President Biden' },
      { date: '2015-2017', event: 'Deputy Secretary of State under Obama' },
      { date: '2017-2021', event: 'Co-founds WestExec Advisors consulting firm with Michele Flournoy and others' },
      { date: 'October 2020', event: 'Organizes letter from 51 former intelligence officials on Hunter Biden laptop' },
      { date: 'January 26; 2021', event: 'Confirmed as Secretary of State' },
      { date: 'August 2021', event: 'Oversees chaotic U.S. withdrawal from Afghanistan' },
      { date: 'October 2023-2025', event: 'Manages U.S. response to Israel-Gaza conflict; overrules internal findings on humanitarian aid blockage' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Antony Blinken', url: 'https://en.wikipedia.org/wiki/Antony_Blinken', date: '' },
      { title: 'ProPublica: Blinken Rejected Own Experts on Israel Arms Transfers', url: 'https://www.propublica.org/article/blinken-rejected-state-department-findings-israel-blocking-aid-gaza', date: '2024' },
      { title: 'NYT: WestExec Advisors and the Biden Administration', url: 'https://www.nytimes.com/2020/11/28/us/politics/biden-westexec.html', date: '2020' },
    ],
    aliases: ['Tony Blinken'],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'Served as Biden\'s National Security Advisor and later Secretary of State', href: '/entities/individuals/joe-biden' },
    ],
  },


  'abraham-lincoln': {
    name: 'Abraham Lincoln',
    title: '16th President of the United States',
    role: 'Emancipation, Civil War Leadership',
    riskLevel: 'low',
    description: 'President who preserved the Union during the Civil War and issued the Emancipation Proclamation ending slavery. Assassinated by John Wilkes Booth on April 14, 1865. His presidency remains the most consequential in addressing racial injustice, though Reconstruction was tragically undermined after his death.',
    birthDate: 'February 12, 1809',
    education: ['Self-educated lawyer'],
    affiliations: [
      { name: 'Republican Party', role: 'First Republican President', type: 'organization' },
    ],
    controversies: [
      'Suspended habeas corpus during Civil War',
      'Initially prioritized Union preservation over abolition',
      'Assassination ended Reconstruction before it could succeed',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
    ],
    timeline: [
      { date: '1861', event: 'Inaugurated as 16th President' },
      { date: '1863', event: 'Issued Emancipation Proclamation' },
      { date: '1865 Apr 14', event: 'Assassinated at Ford\'s Theatre' },
    ],
    socialMedia: [],
    sources: [
      { title: 'National Archives: Lincoln', url: 'https://www.archives.gov/research/alic/reference/presidents/lincoln.html', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },


 'adam-schiff': {
 name: 'Adam Schiff',
 title: 'U.S. Senator; Led Trump Impeachment Investigation',
 role: 'U.S. Senator (D-CA); Former House Intelligence Committee Chair',
 riskLevel: 'low',
 description: 'Adam Bennett Schiff is a U.S. Senator from California; elected in 2024 after serving in the House of Representatives from 2001 to 2024. He is best known for his role as Chairman of the House Intelligence Committee; where he led the first impeachment investigation of Donald Trump over the Ukraine extortion scandal. Schiff presented the case that Trump had withheld congressionally approved military aid to Ukraine to pressure President Zelensky into announcing an investigation of Joe Biden\'s son Hunter; effectively attempting to use U.S. foreign policy as a personal political weapon. Before entering politics; Schiff was a federal prosecutor who convicted former FBI agent Richard Miller; the first FBI agent ever convicted of espionage; for passing classified documents to the Soviet Union. In the House; Schiff became one of Trump\'s primary targets; with Trump calling him "Shifty Schiff" and "pencil neck." In June 2023; House Republicans voted to censure Schiff on largely party-line votes; alleging he had misled the public about evidence of Trump-Russia collusion. Schiff was deeply involved in the investigation of Russian interference in the 2016 election and consistently stated that there was evidence of collusion between the Trump campaign and Russia beyond what was publicly known. He was also a leading advocate for the second Trump impeachment over the January 6 insurrection. His critics argue he exaggerated the evidence of Russian collusion; while supporters credit him with exposing Trump\'s abuse of power.',
 birthDate: 'June 22; 1960',
 birthPlace: 'Framingham; Massachusetts; USA',
 education: ['Stanford University; BA Political Science; 1982', 'Harvard Law School; JD; 1985'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator (D-CA; 2025-present)', type: 'agency' },
 { name: 'House Intelligence Committee', role: 'Chairman (2019-2023)', type: 'agency' },
 { name: 'Democratic Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Led first Trump impeachment; presenting case that Trump extorted Ukraine for personal political gain',
 'Censured by Republican House in June 2023 over allegations of misleading public on Trump-Russia evidence',
 'Repeatedly stated evidence existed of Trump-Russia collusion beyond what was publicly known; critics say he exaggerated',
 'Primary target of Trump\'s attacks; nicknamed "Shifty Schiff" and "pencil neck"',
 'Republicans accused him of selectively leaking intelligence committee information to media',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 22; 1960', event: 'Born in Framingham; Massachusetts' },
 { date: '1990', event: 'Convicts FBI agent Richard Miller of espionage as federal prosecutor' },
 { date: '2001', event: 'Elected to U.S. House of Representatives' },
 { date: 'January 2019', event: 'Becomes Chairman of House Intelligence Committee' },
 { date: 'September 2019', event: 'Launches Trump-Ukraine impeachment investigation' },
 { date: 'December 2019', event: 'Presents impeachment case in House proceedings' },
 { date: 'January 2020', event: 'Serves as lead impeachment manager in Senate trial' },
 { date: 'June 2023', event: 'Censured by Republican-controlled House' },
 { date: 'November 2024', event: 'Elected to U.S. Senate from California' },
 ],
 socialMedia: [],
 sources: [
 { title: 'House Intelligence Committee: Impeachment Report', url: 'https://intelligence.house.gov/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Led impeachment investigation against Trump', href: '/entities/individuals/donald-trump' },
 { name: 'Nancy Pelosi', relationship: 'Speaker who authorized impeachment inquiry', href: '/entities/individuals/nancy-pelosi' },
 ],
 },












  'allison-mack': {
    name: 'Allison Mack',
    title: 'Actress, NXIVM Cult Leader',
    role: 'Sex Trafficking, Forced Labor',
    riskLevel: 'high',
    description: 'Actress known for Smallville who became a high-ranking member of the NXIVM cult led by Keith Raniere. Recruited women into a secret sub-group called DOS where they were branded, blackmailed, and sexually exploited. Pleaded guilty to racketeering and racketeering conspiracy, sentenced to 3 years.',
    education: [],
    affiliations: [
      { name: 'NXIVM', role: 'DOS Master', type: 'organization' },
    ],
    controversies: [
      'Recruited women into forced labor and sexual exploitation',
      'Participated in branding women with Raniere\'s initials',
      'Used celebrity status to lure recruits',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Sexual Assault', slug: 'sexual-assault', severity: 'critical' },
    ],
    timeline: [
      { date: '2018', event: 'Arrested on sex trafficking charges' },
      { date: '2019', event: 'Pleaded guilty to racketeering' },
      { date: '2021', event: 'Sentenced to 3 years in prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DOJ: Mack Sentencing', url: 'https://www.justice.gov/usao-edny/pr/television-actress-allison-mack-sentenced-3-years-prison-racketeering-conspiracy', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Keith Raniere', relationship: 'NXIVM cult leader she served', href: '/entities/individuals/keith-raniere' },
    ],
  },










  'ayman-al-zawahiri': {
    name: 'Ayman al-Zawahiri',
    title: 'Former Al-Qaeda Leader',
    role: 'Succeeded Bin Laden, Killed by Drone',
    riskLevel: 'critical',
    description: 'Egyptian surgeon who became Osama bin Laden\'s deputy and succeeded him as leader of al-Qaeda after the 2011 raid. Mastermind behind numerous terrorist attacks. Killed by a CIA drone strike in Kabul, Afghanistan on July 31, 2022, while living in a house connected to the Taliban government.',
    birthDate: 'June 19, 1951',
    education: ['Cairo University, Medicine'],
    affiliations: [
      { name: 'Al-Qaeda', role: 'Leader', type: 'organization' },
    ],
    controversies: [
      'Co-mastermind of 9/11 attacks',
      'Led al-Qaeda for over a decade',
      'Found living under Taliban protection despite US withdrawal agreement',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Drone Assassination Program', slug: 'drone-assassination-program', severity: 'critical' },
    ],
    timeline: [
      { date: '2001', event: 'Co-planned 9/11 attacks' },
      { date: '2011', event: 'Became al-Qaeda leader after bin Laden killed' },
      { date: '2022 Jul 31', event: 'Killed by CIA drone strike in Kabul' },
    ],
    socialMedia: [],
    sources: [
      { title: 'White House: Zawahiri Operation', url: 'https://www.whitehouse.gov/briefing-room/speeches-remarks/2022/08/01/remarks-by-president-biden-on-a-successful-counterterrorism-operation-in-afghanistan/', date: '2022' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Osama bin Laden', relationship: 'Predecessor as al-Qaeda leader', href: '/entities/individuals/osama-bin-laden' },
    ],
  },



  'ayatollah-khomeini': {
    name: 'Ayatollah Ruhollah Khomeini',
    title: 'Supreme Leader of Iran',
    role: 'Islamic Revolution Leader',
    riskLevel: 'critical',
    description: 'Founder of the Islamic Republic of Iran who led the 1979 revolution that overthrew the U.S.-backed Shah. Established the theocratic government that has ruled Iran since. The revolution was a direct consequence of the 1953 CIA coup that installed the Shah, creating decades of anti-American sentiment.',
    birthDate: 'September 24, 1902',
    education: ['Islamic seminary education'],
    affiliations: [
      { name: 'Islamic Republic of Iran', role: 'Supreme Leader', type: 'agency' },
    ],
    controversies: [
      'Led revolution overthrowing U.S.-backed Shah',
      'Iran hostage crisis; 444 days',
      'Established theocratic government',
      'Iran-Iraq War killed over 1 million',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Iran Coup 1953', slug: 'iran-coup', severity: 'critical' },
      { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
    ],
    timeline: [
      { date: '1979', event: 'Led Islamic Revolution' },
      { date: '1979-1981', event: 'Iran hostage crisis' },
      { date: '1989', event: 'Died' },
    ],
    socialMedia: [],
    sources: [
      { title: 'BBC: Khomeini Profile', url: 'https://www.bbc.com/news/world-middle-east', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },


  'arundhati-roy': {
    name: 'Arundhati Roy',
    title: 'Author and Activist',
    role: 'Anti-Globalization, Human Rights',
    riskLevel: 'low',
    description: 'Indian author and political activist, winner of the 1997 Booker Prize for "The God of Small Things."Prominent critic of U.S. foreign policy, corporate globalization, and the Indian government\'s treatment of minorities. Charged under India\'s Unlawful Activities Prevention Act for a 2010 speech on Kashmir.',
    birthDate: 'November 24, 1961',
    education: ['School of Planning and Architecture, Delhi'],
    affiliations: [
    ],
    controversies: [
      'Charged under Indian anti-terror law for Kashmir speech',
      'Vocal critic of U.S. imperialism and Iraq War',
      'Criticized India\'s nuclear program and dam projects',
      'Returned National Award in 2015 over rising intolerance',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
    ],
    timeline: [
      { date: '1997', event: 'Won Booker Prize' },
      { date: '2002', event: 'Convicted of contempt for criticizing Supreme Court' },
      { date: '2024', event: 'Charged under UAPA for 2010 speech' },
    ],
    socialMedia: [],
    sources: [
      { title: 'The Guardian: Arundhati Roy', url: 'https://www.theguardian.com/books/arundhatiroy', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },


  'alberto-fujimori': {
    name: 'Alberto Fujimori',
    title: 'Former President of Peru',
    role: 'Authoritarian Rule, Death Squads',
    riskLevel: 'critical',
    description: 'President of Peru (1990-2000) who dissolved Congress, rewrote the constitution, and authorized death squad operations through the Grupo Colina. Convicted of human rights abuses and corruption, sentenced to 25 years in prison. Pardoned controversially in 2023. Died September 11, 2024.',
    birthDate: 'July 28, 1938',
    education: ['National Agrarian University, Engineering'],
    affiliations: [
      { name: 'Government of Peru', role: 'President', type: 'agency' },
    ],
    controversies: [
      'Authorized Grupo Colina death squad',
      'La Cantuta and Barrios Altos massacres',
      'Forced sterilization of indigenous women',
      'Self-coup dissolving Congress in 1992',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Condor', slug: 'operation-condor', severity: 'critical' },
      { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'critical' },
    ],
    timeline: [
      { date: '1990', event: 'Elected President of Peru' },
      { date: '1992', event: 'Self-coup: dissolved Congress' },
      { date: '2000', event: 'Fled to Japan amid scandals' },
      { date: '2009', event: 'Convicted of human rights abuses, sentenced to 25 years' },
      { date: '2024', event: 'Died at age 86' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Human Rights Watch: Fujimori', url: 'https://www.hrw.org/news/2009/04/07/peru-fujimori-convicted-rights-abuses', date: '2009' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Vladimiro Montesinos', relationship: 'Intelligence chief who ran death squads', href: '/entities/individuals/vladimiro-montesinos' },
    ],
  },











 'abigail-johnson': {
 name: 'Abigail Johnson',
 title: 'CEO of Fidelity Investments; Third-Generation Financial Dynasty',
 role: 'Financial Executive; Billionaire; Cryptocurrency Advocate',
 riskLevel: 'medium',
 description: 'Abigail Pierrepont Johnson is the CEO and chairwoman of Fidelity Investments; the largest mutual fund company in the United States managing over $4.5 trillion in assets. She is the third generation of the Johnson family to lead the company; succeeding her father Edward "Ned" Johnson III. With a personal net worth estimated at over $29 billion; she is one of the wealthiest women in the world. Under her leadership; Fidelity became one of the first major financial institutions to embrace cryptocurrency; launching Fidelity Digital Assets in 2018 to provide institutional crypto custody and trading. Johnson drew controversy for her political donations; giving to both Republican and Democratic candidates while Fidelity lobbied heavily against fiduciary rules that would require financial advisors to act in clients\' best interests. Fidelity has faced multiple regulatory actions including a $2 million FINRA fine for supervisory failures and SEC scrutiny over its 401(k) fee structures that critics argued enriched Fidelity at the expense of retirement savers. Johnson was also criticized for Fidelity\'s significant investments in fossil fuel companies while marketing ESG funds; and for the company\'s extensive lobbying against the DOL\'s fiduciary rule during the Obama and Trump administrations.',
 birthDate: 'December 19; 1961',
 birthPlace: 'Boston; Massachusetts; USA',
 education: ['William Smith College; BA Art History; 1984', 'Harvard Business School; MBA; 1988'],
 affiliations: [
 { name: 'Fidelity Investments', role: 'CEO and Chairwoman (2014-present)', type: 'corporation' },
 { name: 'Fidelity Digital Assets', role: 'Founder; institutional cryptocurrency custody service', type: 'corporation' },
 ],
 controversies: [
 'Fidelity lobbied extensively against DOL fiduciary rule requiring advisors to act in clients\' best interests',
 'FINRA fined Fidelity $2 million for supervisory failures',
 'SEC scrutiny over 401(k) fee structures allegedly enriching Fidelity at retirement savers\' expense',
 'Donated to both Republican and Democratic candidates while company lobbied on financial regulation',
 'Fidelity marketed ESG funds while holding significant fossil fuel investments',
 'Pushed Fidelity into cryptocurrency market including offering Bitcoin in 401(k) plans; drawing warnings from DOL about fiduciary risks',
 'Third-generation dynastic control of $4.5 trillion in Americans\' retirement savings with limited accountability',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'December 19; 1961', event: 'Born in Boston; Massachusetts to Edward "Ned" Johnson III' },
 { date: '1988', event: 'Joins Fidelity after graduating Harvard Business School' },
 { date: '2014', event: 'Becomes CEO of Fidelity Investments; succeeding father' },
 { date: '2016', event: 'Becomes chairwoman of Fidelity; consolidating family control' },
 { date: '2018', event: 'Launches Fidelity Digital Assets for institutional cryptocurrency services' },
 { date: '2022', event: 'Announces Fidelity will allow Bitcoin in 401(k) plans; DOL raises concerns' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Forbes Billionaires List: Abigail Johnson', url: 'https://www.forbes.com/profile/abigail-johnson/', date: '2024' },
 ],
 aliases: ['Abby Johnson'],
 knownAssociates: [
 { name: 'Edward Johnson III', relationship: 'Father; predecessor as Fidelity CEO; built company into financial giant', href: '/entities/individuals/edward-johnson-iii' },
 ],
 },











 'avril-haines': {
 name: 'Avril Haines',
 title: 'Director of National Intelligence; CIA Drone Program Architect',
 role: 'Intelligence Official; First Female DNI',
 riskLevel: 'high',
 description: 'Avril Danica Haines is the Director of National Intelligence (DNI); the first woman to hold the position; serving since January 2021 under President Biden. Before becoming DNI; Haines served as CIA Deputy Director under John Brennan from 2013 to 2015 and as Deputy National Security Advisor from 2015 to 2017. At the CIA; she played a central role in developing the legal and policy framework for the drone assassination program; helping to draft the rules governing targeted killings including strikes on American citizens abroad without trial. She oversaw the CIA\'s response to the Senate Intelligence Committee\'s investigation into CIA torture; and was criticized for not holding anyone accountable for the CIA\'s hacking of Senate computers investigating the torture program. The ACLU and human rights organizations opposed her DNI nomination; citing her role in codifying the drone kill list and her failure to pursue accountability for CIA torture. Before government service; Haines had an unusual background; studying theoretical physics at the University of Chicago; earning a JD from Georgetown; and running a bookstore/bar called Adrian\'s in Baltimore that hosted erotic fiction readings.',
 birthDate: 'August 27; 1969',
 birthPlace: 'New York City; New York; USA',
 education: ['University of Chicago; BS Physics; 1992', 'Georgetown University Law Center; JD; 2001'],
 affiliations: [
 { name: 'Office of the Director of National Intelligence', role: 'Director (2021-present)', type: 'agency' },
 { name: 'Central Intelligence Agency', role: 'Deputy Director (2013-2015)', type: 'agency' },
 { name: 'National Security Council', role: 'Deputy National Security Advisor (2015-2017)', type: 'agency' },
 ],
 controversies: [
 'Helped draft legal framework for CIA drone assassination program including targeted killing of American citizens without trial',
 'Oversaw CIA response to Senate torture investigation; did not pursue accountability for CIA officers who hacked Senate computers',
 'ACLU and human rights groups opposed her DNI nomination over drone program and torture accountability failures',
 'As CIA Deputy Director; helped codify the presidential "kill list" for drone strikes',
 'Participated in Obama administration\'s expansion of drone warfare that killed hundreds of civilians in Pakistan; Yemen; and Somalia',
 'Failed to hold CIA accountable after Inspector General found CIA searched Senate Intelligence Committee computers during torture investigation',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'August 27; 1969', event: 'Born in New York City' },
 { date: '2013', event: 'Appointed CIA Deputy Director under John Brennan' },
 { date: '2014', event: 'Oversaw CIA\'s response to Senate torture report; criticized for lack of accountability' },
 { date: '2015', event: 'Becomes Deputy National Security Advisor under Obama' },
 { date: 'January 21; 2021', event: 'Confirmed as Director of National Intelligence; first woman in the role' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ACLU Opposition to Avril Haines Nomination', url: 'https://www.aclu.org', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Brennan', relationship: 'CIA Director under whom Haines served as Deputy Director', href: '/entities/individuals/john-brennan' },
 { name: 'Barack Obama', relationship: 'President who appointed Haines to CIA and NSC roles', href: '/entities/individuals/barack-obama' },
 { name: 'Joe Biden', relationship: 'President who appointed Haines as DNI', href: '/entities/individuals/joe-biden' },
 ],
 },











 'alejandro-mayorkas': {
 name: 'Alejandro Mayorkas',
 title: 'DHS Secretary; First Cabinet Member Impeached in 150 Years',
 role: 'Cabinet Secretary; Immigration Official; Former USCIS Director',
 riskLevel: 'medium',
 description: 'Alejandro Nicholas Mayorkas is the Secretary of Homeland Security under President Biden; the first Latino and first immigrant to hold the position. Born in Havana; Cuba; his family fled Fidel Castro\'s regime when he was an infant. He previously served as Director of U.S. Citizenship and Immigration Services (USCIS) under Obama and as a federal prosecutor. In February 2024; the Republican-controlled House impeached Mayorkas on charges of "willful and systemic refusal to comply with the law" and "breach of public trust" over border security; making him only the second Cabinet member ever impeached and the first in over 150 years (after Secretary of War William Belknap in 1876). The Senate dismissed the charges without a trial. His tenure at DHS coincided with record migrant encounters at the southern border; with over 2.4 million encounters in fiscal year 2023. During his time as USCIS Director; the DHS Inspector General investigated allegations that he improperly intervened in applications for the EB-5 investor visa program on behalf of politically connected applicants; including associates of then-Virginia Governor Terry McAuliffe and then-Senate Majority Leader Harry Reid.',
 birthDate: 'November 24; 1959',
 birthPlace: 'Havana; Cuba',
 education: ['University of California; Berkeley; BA; 1981', 'Loyola Law School; JD; 1985'],
 affiliations: [
 { name: 'Department of Homeland Security', role: 'Secretary (2021-2025)', type: 'agency' },
 { name: 'U.S. Citizenship and Immigration Services', role: 'Director (2009-2013)', type: 'agency' },
 ],
 controversies: [
 'Impeached by House in February 2024 for "willful and systemic refusal to comply with the law" on border security; first Cabinet impeachment in 150+ years',
 'Senate dismissed impeachment charges without holding a trial',
 'DHS Inspector General investigated allegations of improperly intervening in EB-5 visa applications for politically connected applicants',
 'EB-5 intervention allegations included cases connected to associates of Governor Terry McAuliffe and Senate Majority Leader Harry Reid',
 'Record 2.4 million migrant encounters at southern border in fiscal year 2023 under his DHS leadership',
 'Critics accused him of implementing "catch and release" policies that undermined immigration enforcement',
 ],
 charges: [
 { charge: 'Impeachment: Willful and systemic refusal to comply with the law', status: 'Dismissed by Senate without trial', date: 'February 2024' },
 { charge: 'Impeachment: Breach of public trust', status: 'Dismissed by Senate without trial', date: 'February 2024' },
 ],
 relatedInvestigations: [],
 timeline: [
 { date: 'November 24; 1959', event: 'Born in Havana; Cuba' },
 { date: '1960', event: 'Family flees Cuba after Castro\'s revolution' },
 { date: '2009', event: 'Appointed USCIS Director under Obama' },
 { date: '2013', event: 'DHS IG investigates EB-5 visa intervention allegations' },
 { date: 'February 2; 2021', event: 'Confirmed as Secretary of Homeland Security' },
 { date: 'February 13; 2024', event: 'Impeached by House of Representatives in party-line vote' },
 { date: 'April 17; 2024', event: 'Senate dismisses impeachment articles without trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DHS OIG Report on EB-5 Visa Allegations', url: 'https://www.oig.dhs.gov', date: '2015' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'President who appointed Mayorkas as DHS Secretary', href: '/entities/individuals/joe-biden' },
 ],
 },











 'ajay-banga': {
 name: 'Ajay Banga',
 title: 'World Bank President; Former Mastercard CEO',
 role: 'International Financial Leader; Corporate Executive',
 riskLevel: 'medium',
 description: 'Ajay Banga is the 14th President of the World Bank Group; nominated by President Biden and taking office on June 2; 2023. Born in Pune; India; Banga previously served as CEO of Mastercard from 2010 to 2021; where he oversaw the company\'s transformation from a credit card company into a global technology and data analytics firm. At Mastercard; he pushed the "war on cash" strategy to move transactions to electronic payments; which critics argued benefited financial institutions at the expense of the unbanked and poor who relied on cash. Under his leadership; Mastercard faced antitrust lawsuits in the UK and EU; including a class-action suit representing 46 million UK consumers alleging the company charged excessive interchange fees; with a potential $18.6 billion settlement. He also served as Vice Chairman of General Atlantic; a private equity firm. At the World Bank; Banga has focused on climate finance and reforming the institution\'s lending practices; but has faced criticism from developing nations who argue the Bank continues to impose neoliberal conditions on loans that prioritize Western financial interests over local development needs. His nomination was seen as controversial given that a former payments industry CEO would lead the world\'s premier development institution.',
 birthDate: 'November 10; 1959',
 birthPlace: 'Pune; Maharashtra; India',
 education: ['St. Stephen\'s College; Delhi; BA Economics; 1981', 'Indian Institute of Management Ahmedabad; MBA; 1983'],
 affiliations: [
 { name: 'World Bank Group', role: 'President (2023-present)', type: 'organization' },
 { name: 'Mastercard', role: 'CEO (2010-2021)', type: 'corporation' },
 { name: 'General Atlantic', role: 'Vice Chairman (2021-2023)', type: 'corporation' },
 ],
 controversies: [
 'Led Mastercard\'s "war on cash" strategy criticized for disadvantaging the unbanked and poor who depend on cash transactions',
 'Mastercard faced $18.6 billion UK class-action lawsuit representing 46 million consumers over excessive interchange fees during his tenure',
 'EU antitrust actions against Mastercard for anti-competitive interchange fee practices',
 'Criticized for being a corporate payments executive leading a development institution meant to serve the world\'s poorest nations',
 'Developing nations argue World Bank under his leadership continues imposing neoliberal loan conditions favoring Western financial interests',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'November 10; 1959', event: 'Born in Pune; India' },
 { date: '2010', event: 'Becomes CEO of Mastercard' },
 { date: '2016', event: 'UK class action filed against Mastercard over interchange fees' },
 { date: '2021', event: 'Steps down as Mastercard CEO; joins General Atlantic as Vice Chairman' },
 { date: 'June 2; 2023', event: 'Takes office as 14th President of the World Bank Group' },
 ],
 socialMedia: [],
 sources: [
 { title: 'World Bank: Leadership', url: 'https://www.worldbank.org/en/about/president', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'President who nominated Banga for World Bank presidency', href: '/entities/individuals/joe-biden' },
 ],
 },











 'anderson-cooper': {
 name: 'Anderson Cooper',
 title: 'CNN Anchor; Vanderbilt Heir; War Correspondent',
 role: 'Journalist; Television Anchor; Author',
 riskLevel: 'low',
 description: 'Anderson Hays Cooper is the anchor of CNN\'s Anderson Cooper 360 and a correspondent for CBS\'s 60 Minutes. He is the son of fashion designer Gloria Vanderbilt and great-great-grandson of railroad tycoon Cornelius Vanderbilt; heir to one of America\'s oldest fortunes. Cooper interned at the CIA during college at Yale; a connection he has publicly acknowledged though its full extent remains undisclosed. He began his career by forging a fake press pass to enter Myanmar and report on armed conflicts; then covered wars in Bosnia; Rwanda; and Somalia. He became a household name during Hurricane Katrina coverage in 2005 when he openly wept on camera and confronted Louisiana Senator Mary Landrieu. His older brother Carter Vanderbilt Cooper committed suicide in 1988 at age 23 by jumping from the family\'s 14th-floor penthouse while their mother watched. Cooper\'s Vanderbilt family connections link him to the highest echelons of American aristocratic wealth; and his Yale-CIA background places him within the intelligence community\'s documented practice of cultivating media assets; a pattern documented extensively in Operation Mockingbird.',
 birthDate: 'June 3; 1967',
 birthPlace: 'New York City; New York; USA',
 education: ['Dalton School; New York', 'Yale University; BA Political Science; 1989'],
 affiliations: [
 { name: 'CNN', role: 'Anchor; Anderson Cooper 360 (2003-present)', type: 'corporation' },
 { name: 'CBS News', role: 'Correspondent; 60 Minutes (2006-present)', type: 'corporation' },
 { name: 'Central Intelligence Agency', role: 'Summer intern during Yale (1989)', type: 'agency' },
 ],
 controversies: [
 'Interned at CIA during college at Yale; full extent of relationship undisclosed',
 'Forged a fake press pass to enter Myanmar and begin journalism career covering armed conflicts',
 'Vanderbilt family heir to one of America\'s oldest fortunes while presenting as objective journalist',
 'Yale-CIA pipeline connection fits documented pattern of intelligence community cultivating media assets (Operation Mockingbird)',
 'Brother Carter Vanderbilt Cooper committed suicide in 1988 jumping from 14th-floor penthouse',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'June 3; 1967', event: 'Born in New York City to Gloria Vanderbilt and Wyatt Emory Cooper' },
 { date: '1988', event: 'Brother Carter commits suicide at age 23' },
 { date: '1989', event: 'Graduates Yale; interns at CIA' },
 { date: '1991', event: 'Forges press pass to enter Myanmar and begins war reporting career' },
 { date: '2003', event: 'Launches Anderson Cooper 360 on CNN' },
 { date: '2005', event: 'Gains national prominence during Hurricane Katrina coverage' },
 { date: '2006', event: 'Joins 60 Minutes as correspondent' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Anderson Cooper; Dispatches from the Edge: A Memoir of War; Disasters; and Survival', url: 'https://en.wikipedia.org/wiki/Anderson_Cooper', date: '2006' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Gloria Vanderbilt', relationship: 'Mother; fashion designer and Vanderbilt heiress', href: '/entities/individuals/gloria-vanderbilt' },
 ],
 },











 'amy-klobuchar': {
 name: 'Amy Klobuchar',
 title: 'U.S. Senator; Former Prosecutor Who Declined to Charge Derek Chauvin',
 role: 'U.S. Senator (D-MN); Former Hennepin County Attorney',
 riskLevel: 'medium',
 description: 'Amy Jean Klobuchar is a U.S. Senator from Minnesota; serving since 2007; and a former candidate for the 2020 Democratic presidential nomination. Before the Senate; she served as Hennepin County Attorney from 1999 to 2007. Her prosecutorial record became deeply controversial during the 2020 George Floyd protests when it was revealed that she had declined to bring charges against police officers involved in multiple fatal shootings during her tenure; including cases involving Derek Chauvin; the officer who later murdered George Floyd. As County Attorney; Klobuchar sent cases involving police killings to grand juries rather than filing charges directly; a practice critics argued was designed to shield officers from accountability. At least two dozen people died in encounters with police during her tenure; and no officers were charged. Her failure to prosecute Chauvin in a 2006 case where he was involved in the fatal shooting of Wayne Reyes was highlighted as a direct precursor to Floyd\'s murder. This record cost her serious consideration as Biden\'s vice presidential pick in 2020. In the Senate; she has focused on antitrust regulation of Big Tech and election security; but has been criticized for her harsh treatment of staff; with reports of throwing binders and office objects at employees and having one of the highest staff turnover rates in the Senate.',
 birthDate: 'May 25; 1960',
 birthPlace: 'Plymouth; Minnesota; USA',
 education: ['Yale University; BA Political Science; 1982', 'University of Chicago Law School; JD; 1985'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator (D-MN; 2007-present)', type: 'agency' },
 { name: 'Democratic Party', role: 'Member; 2020 presidential candidate', type: 'organization' },
 ],
 controversies: [
 'Declined to charge Derek Chauvin in 2006 police shooting as Hennepin County Attorney; Chauvin later murdered George Floyd',
 'Sent police killing cases to grand juries rather than filing direct charges; shielding officers from prosecution',
 'At least two dozen people died in police encounters during her tenure as County Attorney; no officers charged',
 'Failure to prosecute police misconduct cost her serious VP consideration in 2020',
 'Reports of abusive treatment of staff including throwing binders and objects at employees',
 'One of the highest staff turnover rates in the U.S. Senate',
 'Made staff perform personal tasks including washing dishes and picking up dry cleaning',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'May 25; 1960', event: 'Born in Plymouth; Minnesota' },
 { date: '1999', event: 'Elected Hennepin County Attorney' },
 { date: '2006', event: 'Office declines to charge officer Derek Chauvin in fatal shooting of Wayne Reyes' },
 { date: '2007', event: 'Sworn in as U.S. Senator from Minnesota' },
 { date: '2019', event: 'Announces presidential campaign; prosecutorial record scrutinized' },
 { date: 'May 25; 2020', event: 'George Floyd murdered by Chauvin; Klobuchar\'s failure to charge him highlighted' },
 { date: '2020', event: 'Withdraws from VP consideration partly due to prosecution record' },
 ],
 socialMedia: [],
 sources: [
 { title: 'AP: Klobuchar Declined to Prosecute Officers in Police Killings', url: 'https://apnews.com', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'Considered Klobuchar for VP; removed from shortlist over prosecution record', href: '/entities/individuals/joe-biden' },
 ],
 },










 'arianna-huffington': {
 name: 'Arianna Huffington',
 title: 'Huffington Post Founder; From Right-Wing to Liberal Media',
 role: 'Media Executive; Author; Political Commentator',
 riskLevel: 'low',
 description: 'Arianna Stasinopoulou Huffington is a Greek-American author; media executive; and political commentator who founded The Huffington Post (now HuffPost) in 2005 and later founded Thrive Global; a wellness technology company. Born in Athens; Greece; she attended Cambridge University and became involved with the conservative movement in the United States through her marriage to Republican politician Michael Huffington; who spent $30 million of his own money on a failed 1994 California Senate race; the most expensive congressional campaign at that time. After their divorce; where it was revealed Michael was bisexual; Arianna shifted dramatically from conservative commentator to progressive activist. She sold The Huffington Post to AOL in 2011 for $315 million; drawing intense criticism from thousands of unpaid bloggers whose free content had built the site\'s value. A class action lawsuit by bloggers seeking compensation was dismissed. Critics noted that a site built on the labor of unpaid writers enriched its founder by hundreds of millions. She later stepped down as editor-in-chief in 2016 to found Thrive Global. Her early career included a controversial biography of Pablo Picasso and a close relationship with spiritual guru John-Roger; leader of the Movement of Spiritual Inner Awareness; which some former members described as cult-like.',
 birthDate: 'July 15; 1950',
 birthPlace: 'Athens; Greece',
 education: ['Cambridge University; MA Economics; 1972'],
 affiliations: [
 { name: 'The Huffington Post', role: 'Co-founder and Editor-in-Chief (2005-2016)', type: 'corporation' },
 { name: 'Thrive Global', role: 'Founder and CEO (2016-present)', type: 'corporation' },
 ],
 controversies: [
 'Sold Huffington Post to AOL for $315 million while thousands of unpaid bloggers received nothing for content that built the site\'s value',
 'Class action lawsuit by unpaid bloggers seeking compensation dismissed by courts',
 'Close relationship with John-Roger; leader of Movement of Spiritual Inner Awareness; described by former members as cult-like',
 'Dramatic political shift from conservative commentator and Republican politician\'s wife to progressive media mogul',
 'Ex-husband Michael Huffington spent $30 million on failed Senate race; later revealed to be bisexual after divorce',
 'Built media empire on model of unpaid contributor labor that critics called exploitative',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'July 15; 1950', event: 'Born in Athens; Greece' },
 { date: '1972', event: 'Graduates from Cambridge University' },
 { date: '1994', event: 'Husband Michael Huffington\'s $30 million Senate campaign fails' },
 { date: 'May 2005', event: 'Launches The Huffington Post' },
 { date: 'February 2011', event: 'Sells Huffington Post to AOL for $315 million' },
 { date: '2011', event: 'Unpaid blogger class action lawsuit filed' },
 { date: '2016', event: 'Steps down from HuffPost to found Thrive Global' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York Times: AOL Acquires The Huffington Post', url: 'https://www.nytimes.com', date: '2011' },
 ],
 aliases: ['Arianna Stasinopoulou'],
 knownAssociates: [],
 },











 'antonio-guterres': {
 name: 'Antonio Guterres',
 title: 'UN Secretary-General; Former Portuguese Prime Minister',
 role: 'International Diplomat; Head of United Nations',
 riskLevel: 'medium',
 description: 'Antonio Manuel de Oliveira Guterres is the ninth Secretary-General of the United Nations; serving since January 1; 2017. A Portuguese politician; he previously served as Prime Minister of Portugal from 1995 to 2002 and as United Nations High Commissioner for Refugees (UNHCR) from 2005 to 2015. As UN Secretary-General; Guterres has faced criticism for the institution\'s inability to address major global crises effectively. The UN failed to prevent or meaningfully respond to the Syrian civil war; the Myanmar Rohingya genocide; the Tigray War in Ethiopia; Russia\'s invasion of Ukraine; and the Israeli-Palestinian conflict escalation in 2023-2024. Israel declared Guterres "persona non grata" in October 2023 after he contextualized the Hamas October 7 attack by stating it "did not happen in a vacuum." He has been criticized by the Global South for the UN\'s structural bias favoring Western powers through the Security Council veto system; and by Western nations for being insufficiently forceful against Russia and China. During his tenure as UNHCR head; the refugee crisis expanded dramatically; and the organization faced allegations of covering up sexual abuse by UN peacekeepers and aid workers. His record as Portuguese PM included joining the Iraq War coalition and overseeing austerity measures that increased inequality.',
 birthDate: 'April 30; 1949',
 birthPlace: 'Lisbon; Portugal',
 education: ['Instituto Superior Tecnico; Lisbon; Degree in Electrical Engineering and Physics; 1971'],
 affiliations: [
 { name: 'United Nations', role: 'Secretary-General (2017-present)', type: 'organization' },
 { name: 'UNHCR', role: 'High Commissioner for Refugees (2005-2015)', type: 'organization' },
 { name: 'Government of Portugal', role: 'Prime Minister (1995-2002)', type: 'agency' },
 ],
 controversies: [
 'Declared "persona non grata" by Israel after contextualizing October 7 Hamas attack as not happening "in a vacuum"',
 'UN failed to prevent or meaningfully respond to Rohingya genocide; Syrian civil war; Tigray War; and Russian invasion of Ukraine',
 'UNHCR under his leadership faced allegations of covering up sexual abuse by UN peacekeepers and aid workers',
 'Security Council veto system under his tenure continued to paralyze UN responses to major conflicts',
 'As Portuguese PM; joined Iraq War coalition and implemented austerity measures increasing inequality',
 'Global South criticizes UN under his leadership for structural bias favoring Western powers',
 'Western nations criticize insufficient response to Russian and Chinese aggression',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: 'April 30; 1949', event: 'Born in Lisbon; Portugal' },
 { date: '1995', event: 'Becomes Prime Minister of Portugal' },
 { date: '2002', event: 'Resigns as PM after electoral setbacks' },
 { date: '2005', event: 'Appointed UN High Commissioner for Refugees' },
 { date: 'January 1; 2017', event: 'Takes office as ninth UN Secretary-General' },
 { date: 'October 2023', event: 'Israel declares him persona non grata after "did not happen in a vacuum" statement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'United Nations: Secretary-General', url: 'https://www.un.org/sg/', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [],
 },



 'abu-mahdi-al-muhandis': {
 name: 'Abu Mahdi al-Muhandis',
 title: 'Iraqi Militia Commander Killed in Soleimani Drone Strike',
 role: 'Deputy Commander of Iraq\'s Popular Mobilization Forces; Iranian Proxy Leader',
 riskLevel: 'high',
 description: 'Abu Mahdi al-Muhandis (born Jamal Jaafar Mohammed Ali al-Ibrahimi) was an Iraqi militia leader who served as the deputy commander of Iraq\'s Popular Mobilization Forces (PMF/Hashd al-Shaabi); the umbrella organization of predominantly Shia paramilitary groups in Iraq. He was killed alongside Iranian Major General Qasem Soleimani in a U.S. drone strike at Baghdad International Airport on January 3; 2020; an assassination ordered by President Trump that brought the U.S. and Iran to the brink of open war. Al-Muhandis had a long history of militancy aligned with Iranian interests. He was convicted in absentia by a Kuwaiti court for the 1983 bombings of the U.S. and French embassies in Kuwait; attacks that killed six people. He led Kata\'ib Hezbollah; an Iranian-backed militia designated as a terrorist organization by the United States; which was responsible for numerous attacks on U.S. forces in Iraq using Iranian-supplied explosive formed penetrators (EFPs) that killed hundreds of American soldiers. Despite his terrorist designation; al-Muhandis held a senior position in the Iraqi government\'s official paramilitary structure; illustrating the deep Iranian penetration of Iraqi state institutions. His killing alongside Soleimani was condemned by Iran and Iraqi Shia groups as an act of war; while the Trump administration justified it as a defensive action against an imminent threat.',
 birthDate: '1954',
 birthPlace: 'Basra; Iraq',
 deathDate: 'January 3; 2020',
 education: [],
 affiliations: [
 { name: 'Popular Mobilization Forces (PMF)', role: 'Deputy Commander', type: 'organization' },
 { name: 'Kata\'ib Hezbollah', role: 'Founder and Leader', type: 'organization' },
 ],
 controversies: [
 'Convicted in absentia by Kuwait for 1983 U.S. and French embassy bombings that killed six people',
 'Led Kata\'ib Hezbollah; designated terrorist organization responsible for killing hundreds of U.S. soldiers in Iraq',
 'Killed alongside Qasem Soleimani in U.S. drone strike at Baghdad airport; nearly triggering U.S.-Iran war',
 'Held official Iraqi government position despite U.S. terrorist designation',
 'Iranian-backed militia network responsible for attacks using explosive formed penetrators against U.S. forces',
 ],
 charges: [
 { charge: 'Convicted in absentia for 1983 Kuwait embassy bombings', status: 'Convicted (Kuwait)', date: '1984' },
 { charge: 'U.S. terrorist designation', status: 'Designated', date: '2009' },
 ],
 relatedInvestigations: [],
 timeline: [
 { date: '1954', event: 'Born in Basra; Iraq' },
 { date: '1983', event: '1983 Kuwait embassy bombings; six killed' },
 { date: '1984', event: 'Convicted in absentia by Kuwaiti court' },
 { date: '2003', event: 'Returns to Iraq after U.S. invasion; establishes militia networks' },
 { date: '2009', event: 'Designated as terrorist by U.S. Treasury Department' },
 { date: '2014', event: 'Becomes deputy commander of PMF during fight against ISIS' },
 { date: 'January 3; 2020', event: 'Killed alongside Soleimani in U.S. drone strike at Baghdad airport' },
 ],
 socialMedia: [],
 sources: [
 { title: 'U.S. Treasury Department: Terrorist Designation', url: 'https://www.treasury.gov', date: '2009' },
 ],
 aliases: ['Jamal Jaafar Mohammed Ali al-Ibrahimi'],
 knownAssociates: [
 { name: 'Qasem Soleimani', relationship: 'Iranian IRGC commander killed alongside al-Muhandis in same drone strike', href: '/entities/individuals/qasem-soleimani' },
 ],
 },
 'andy-puzder': {
 name: 'Andy Puzder',
 title: 'Failed Trump Labor Secretary Nominee; CKE Restaurants CEO',
 role: 'Fast Food Executive; Failed Cabinet Nominee',
 riskLevel: 'medium',
 description: 'Andrew Franklin Puzder is the former CEO of CKE Restaurants; the parent company of Carl\'s Jr. and Hardee\'s fast food chains; who was nominated by Donald Trump to serve as U.S. Secretary of Labor in 2016 but withdrew his nomination in February 2017 amid a cascade of scandals. Puzder was a vocal opponent of minimum wage increases; paid sick leave; and the Affordable Care Act; positions that made his nomination to lead the department protecting workers deeply controversial. His nomination collapsed when it was revealed that he had employed an undocumented immigrant as a housekeeper for years without paying employment taxes; and only "corrected" the situation after being nominated for the cabinet. More damaging were allegations of domestic abuse from his ex-wife Lisa Fierstein; who had appeared on the Oprah Winfrey Show in 1990 wearing a disguise to describe abuse she said she suffered; though she later recanted her allegations in a 1990s divorce settlement. A tape of the Oprah appearance surfaced during his confirmation process. Multiple CKE employees also came forward to describe a workplace culture of sexual harassment and objectification of women; consistent with the company\'s advertising strategy of using provocatively dressed women to sell hamburgers. Puzder also faced scrutiny for his opposition to overtime pay rules and for CKE\'s extensive record of labor violations; including wage theft complaints.',
 birthDate: 'June 11; 1950',
 birthPlace: 'Cleveland; Ohio; USA',
 education: ['Cleveland State University; BA', 'Washington University School of Law; JD'],
 affiliations: [
 { name: 'CKE Restaurants', role: 'CEO (2000-2017)', type: 'corporation' },
 ],
 controversies: [
 'Withdrew as Trump\'s Labor Secretary nominee amid domestic abuse allegations and undocumented worker scandal',
 'Ex-wife described abuse on Oprah Winfrey Show wearing disguise; tape surfaced during confirmation',
 'Employed undocumented immigrant housekeeper for years without paying employment taxes',
 'Vocal opponent of minimum wage increases while heading company paying workers minimum wage',
 'CKE Restaurants had extensive record of labor violations including wage theft complaints',
 'Company\'s advertising strategy relied on sexual objectification of women while workplace harassment culture persisted',
 'Opposed overtime pay rules and workers\' protections while nominated to lead Department of Labor',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 11; 1950', event: 'Born in Cleveland; Ohio' },
 { date: '2000', event: 'Becomes CEO of CKE Restaurants (Carl\'s Jr./Hardee\'s)' },
 { date: 'December 2016', event: 'Nominated by Trump as Secretary of Labor' },
 { date: 'February 2017', event: 'Withdraws nomination amid scandals over domestic abuse; undocumented worker; and labor violations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate HELP Committee: Puzder Nomination Withdrawal', url: 'https://www.help.senate.gov', date: '2017' },
 ],
 aliases: ['Andrew Puzder'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Nominated Puzder for Secretary of Labor', href: '/entities/individuals/donald-trump' },
 ],
 },
  'idi-amin': {
    name: 'Idi Amin',
    title: 'President of Uganda (1971-1979)',
    role: 'Military Dictator Responsible for 100,000-500,000 Killings',
    riskLevel: 'critical',
    description: 'Idi Amin Dada seized power in Uganda through a military coup in 1971 and ruled as one of Africa\'s most brutal dictators for eight years. His regime killed an estimated 100,000-500,000 people through extrajudicial executions, torture, ethnic persecution, and disappearances. He expelled 80,000 Asians from Uganda, destroyed the economy, and waged a disastrous war against Tanzania that led to his overthrow.',
    birthDate: '1925',
    birthPlace: 'Koboko, West Nile Province, Uganda',
    deathDate: '2003-08-16',
    education: ['Minimal formal education; rose through military ranks'],
    affiliations: [
      { name: 'Republic of Uganda', role: 'President/Head of State (1971-1979)', type: 'agency' },
      { name: 'Ugandan Armed Forces', role: 'Commander-in-Chief', type: 'agency' },
      { name: 'State Research Bureau', role: 'Created and directed secret police', type: 'agency' },
    ],
    controversies: [
      'Regime killed an estimated 100,000-500,000 people through extrajudicial executions, torture, and ethnic purges',
      'State Research Bureau (secret police) tortured and killed thousands at Nakasero and other facilities',
      'Expelled 80,000 Asians from Uganda in 1972, seizing their businesses and property, devastating the economy',
      'Targeted Acholi and Langi ethnic groups for mass execution in military purges',
      'Bodies dumped into the Nile River in such numbers they clogged hydroelectric intake filters at Owen Falls Dam',
      'Supported Palestinian hijackers during Entebbe crisis (1976)',
      'Invaded Tanzania in 1978, triggering the war that led to his overthrow',
      'Lived in exile in Saudi Arabia until death in 2003; never faced trial for any crimes',
      'Self-proclaimed titles included "His Excellency, President for Life, Lord of All the Beasts of the Earth and Fishes of the Seas and Conqueror of the British Empire"',
    ],
    charges: [
      { statute: 'Crimes Against Humanity - Extermination', description: 'Directed the killing of 100,000-500,000 Ugandans through systematic state violence', category: 'Crimes Against Humanity' },
      { statute: 'Crimes Against Humanity - Persecution', description: 'Ethnic persecution of Acholi, Langi, and other groups; expulsion of Asian population', category: 'Crimes Against Humanity' },
      { statute: 'War Crimes - Extrajudicial Execution', description: 'Ordered mass executions including murder of Anglican Archbishop Janani Luwum', category: 'War Crimes' },
    ],
    relatedInvestigations: [],
    timeline: [
      { date: '1925', event: 'Born in Koboko, West Nile Province, Uganda' },
      { date: '1946', event: 'Joins King\'s African Rifles as assistant cook; rises through ranks' },
      { date: '1971-01-25', event: 'Seizes power in military coup against Milton Obote' },
      { date: '1972-08', event: 'Orders expulsion of 80,000 Asians from Uganda within 90 days' },
      { date: '1972-1978', event: 'State Research Bureau carries out mass killings, torture, and disappearances' },
      { date: '1977-02-16', event: 'Orders murder of Anglican Archbishop Janani Luwum' },
      { date: '1978-10', event: 'Invades Tanzania; war leads to his overthrow' },
      { date: '1979-04-11', event: 'Overthrown by Tanzanian forces and Ugandan exiles; flees to Libya, then Saudi Arabia' },
      { date: '2003-08-16', event: 'Dies in exile in Jeddah, Saudi Arabia; never faced trial' },
    ],
    sources: [
      { title: 'Uganda Human Rights Commission Reports', url: 'https://www.uhrc.ug/', date: '1986' },
    ],
    aliases: ['Big Daddy', 'Butcher of Uganda', 'Dada'],
    knownAssociates: [],
  },
  'omar-al-bashir': {
    name: 'Omar al-Bashir',
    title: 'President of Sudan (1989-2019)',
    role: 'First Sitting Head of State Indicted by the ICC for Genocide',
    riskLevel: 'critical',
    description: 'Omar Hassan Ahmad al-Bashir seized power in Sudan through a military coup in 1989 and ruled for 30 years. He directed the genocide in Darfur beginning in 2003, using the Janjaweed militia to carry out ethnic cleansing against the Fur, Masalit, and Zaghawa peoples, killing an estimated 300,000-400,000 and displacing 2.5 million. He became the first sitting head of state indicted by the International Criminal Court.',
    birthDate: '1944-01-01',
    birthPlace: 'Hosh Bannaga, Sudan',
    education: ['Sudanese Military Academy', 'Malaysian Armed Forces Staff College'],
    affiliations: [
      { name: 'Republic of Sudan', role: 'President (1989-2019)', type: 'agency' },
      { name: 'National Congress Party', role: 'Chairman', type: 'organization' },
      { name: 'Sudanese Armed Forces', role: 'Field Marshal', type: 'agency' },
    ],
    controversies: [
      'Directed the Darfur genocide (2003+) using Janjaweed militia - 300,000-400,000 killed, 2.5 million displaced',
      'First sitting head of state indicted by the International Criminal Court for genocide, war crimes, and crimes against humanity',
      'Orchestrated two civil wars with South Sudan resulting in over 2 million deaths',
      'Janjaweed "scorched earth" campaign: villages burned, wells poisoned, systematic rape used as weapon of war',
      'Harbored Osama bin Laden in Sudan (1992-1996)',
      'Imposed strict Sharia law; authorized flogging, stoning, and amputation as punishments',
      'Refused to surrender to the ICC; traveled internationally despite arrest warrant',
      'Overthrown in April 2019 military coup during popular uprising; currently awaiting trial in Sudan',
    ],
    charges: [
      { statute: 'ICC - Genocide (Article 6)', description: 'Three counts of genocide by killing, causing serious bodily/mental harm, and deliberately inflicting conditions to destroy Fur, Masalit, and Zaghawa groups', category: 'Genocide' },
      { statute: 'ICC - Crimes Against Humanity (Article 7)', description: 'Murder, extermination, forcible transfer, torture, rape', category: 'Crimes Against Humanity' },
      { statute: 'ICC - War Crimes (Article 8)', description: 'Intentionally directing attacks against civilian populations in Darfur', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Darfur Genocide', slug: 'darfur-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1944-01-01', event: 'Born in Hosh Bannaga, Sudan' },
      { date: '1989-06-30', event: 'Seizes power in military coup' },
      { date: '2003', event: 'Darfur conflict begins; deploys Janjaweed militia against civilian populations' },
      { date: '2009-03-04', event: 'ICC issues first arrest warrant for war crimes and crimes against humanity' },
      { date: '2010-07-12', event: 'ICC issues second arrest warrant adding genocide charges' },
      { date: '2019-04-11', event: 'Overthrown in military coup during popular revolution' },
      { date: '2020', event: 'Sudanese transitional government agrees to hand him over to ICC' },
    ],
    sources: [
      { title: 'ICC - Prosecutor v. Al Bashir (ICC-02/05-01/09)', url: 'https://www.icc-cpi.int/darfur/albashir', date: '2009' },
      { title: 'UN Report on Darfur', url: 'https://www.un.org/en/chronicle/article/report-international-commission-inquiry-darfur', date: '2005' },
    ],
    aliases: [],
    knownAssociates: [],
  },
  'alberto-gonzales': {
    name: 'Alberto Gonzales',
    title: 'Former U.S. Attorney General',
    role: 'Attorney General who authored the "torture memos" authorizing enhanced interrogation techniques and oversaw warrantless NSA surveillance program',
    riskLevel: 'critical',
    description: 'Alberto R. Gonzales served as the 80th Attorney General of the United States from 2005 to 2007 and as White House Counsel from 2001 to 2005. As White House Counsel, Gonzales authored and endorsed the infamous "torture memos" that redefined torture to allow or excuse techniques including waterboarding, stress positions, sleep deprivation, and other "enhanced interrogation techniques" at CIA black sites and Guantanamo Bay. He described the Geneva Conventions as "quaint" and "obsolete." Gonzales oversaw the warrantless NSA domestic surveillance program (Stellar Wind) and infamously visited Attorney General John Ashcroft\'s hospital bed to pressure him into reauthorizing the program. In 2006, it was revealed that Gonzales had orchestrated the politically motivated firing of nine U.S. Attorneys who were either not pursuing cases against Democrats aggressively enough or were investigating Republicans. Congressional testimony revealed Gonzales said "I don\'t recall" or variations 71 times in a single hearing. He resigned in September 2007 under bipartisan calls for his removal.',
    birthDate: 'August 4, 1955',
    birthPlace: 'San Antonio, Texas',
    education: ['Rice University (B.A.)', 'Harvard Law School (J.D.)'],
    affiliations: [
      { name: 'U.S. Department of Justice', role: 'Attorney General', type: 'agency' as const },
      { name: 'White House', role: 'Counsel to the President', type: 'agency' as const },
    ],
    controversies: [
      'Authored "torture memos" authorizing waterboarding and enhanced interrogation',
      'Called Geneva Conventions "quaint" and "obsolete"',
      'Oversaw warrantless NSA domestic surveillance program (Stellar Wind)',
      'Pressured hospitalized AG Ashcroft to reauthorize surveillance program',
      'Orchestrated politically motivated firing of 9 U.S. Attorneys',
      'Said "I don\'t recall" 71 times in a single congressional hearing',
    ],
    charges: [
      { statute: '18 U.S.C. 2340A', description: 'Potential conspiracy to commit torture for authorizing enhanced interrogation (not charged)', category: 'federal' },
      { statute: '50 U.S.C. 1809', description: 'Potential FISA violations for warrantless surveillance authorization (not charged)', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/cia-enhanced-interrogation-program'],
    timeline: [
      { date: '2001-01', event: 'Appointed White House Counsel' },
      { date: '2002-01-25', event: 'Memo calling Geneva Conventions "quaint"' },
      { date: '2002-08-01', event: 'Bybee/Yoo torture memos issued with Gonzales endorsement' },
      { date: '2004-03-10', event: 'Hospital visit to pressure Ashcroft on surveillance' },
      { date: '2005-02-03', event: 'Confirmed as Attorney General' },
      { date: '2006-12', event: 'U.S. Attorney firings scandal exposed' },
      { date: '2007-09-17', event: 'Resigns as Attorney General' },
    ],
    sources: [
      { title: 'Senate Judiciary Committee: DOJ Investigation of U.S. Attorney Firings', url: 'https://www.judiciary.senate.gov/press/dem/releases/doj-report-on-us-attorney-firings', date: '2008' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'John Yoo', relationship: 'OLC attorney who drafted torture memos' },
      { name: 'Jay Bybee', relationship: 'OLC head who signed torture memos' },
      { name: 'George W. Bush', relationship: 'President who appointed him' },
    ],
  },
  'andrew-cuomo': {
    name: 'Andrew Cuomo',
    title: 'Former Governor of New York',
    role: 'Governor who resigned over sexual harassment allegations from 11 women while his administration concealed COVID-19 nursing home death data',
    riskLevel: 'high',
    description: 'Andrew Mark Cuomo served as the 56th Governor of New York from 2011 to 2021. In early 2021, multiple women came forward with allegations of sexual harassment against Cuomo, ultimately totaling 11 accusers. New York Attorney General Letitia James released an independent investigation report in August 2021 concluding that Cuomo had sexually harassed multiple women, including current and former state employees, in violation of federal and state law. The investigation found Cuomo groped, kissed, or made inappropriate comments to women. Separately, Cuomo\'s administration was found to have significantly undercounted COVID-19 deaths in nursing homes by only counting residents who died at nursing facilities, not those who died after being transferred to hospitals. The true death toll was approximately 50% higher than reported. Cuomo\'s administration had issued a directive requiring nursing homes to accept COVID-positive patients from hospitals. Cuomo\'s top aide Melissa DeRosa admitted the administration withheld the data from state legislators. Cuomo resigned in August 2021 to avoid impeachment.',
    birthDate: 'December 6, 1957',
    birthPlace: 'Queens, New York',
    education: ['Fordham University (B.A.)', 'Albany Law School (J.D.)'],
    affiliations: [
      { name: 'State of New York', role: 'Governor', type: 'agency' as const },
      { name: 'U.S. Department of HUD', role: 'Secretary', type: 'agency' as const },
    ],
    controversies: [
      '11 women accused him of sexual harassment; AG investigation substantiated claims',
      'Administration undercounted nursing home COVID deaths by approximately 50%',
      'Issued directive requiring nursing homes to accept COVID-positive patients',
      'Top aide admitted withholding nursing home death data from legislators',
      'Used state resources to write and promote $5.1 million book deal during pandemic',
      'Resigned to avoid impeachment proceedings',
    ],
    charges: [
      { statute: 'NY Penal Law 130.52', description: 'Forcible touching - misdemeanor criminal complaint (dismissed)', category: 'state' },
      { statute: 'NY Executive Law 63(8)', description: 'AG finding of sexual harassment violating state and federal law (civil)', category: 'state' },
    ],
    relatedInvestigations: ['/investigations/covid-19-nursing-home-deaths-coverup'],
    timeline: [
      { date: '2011-01-01', event: 'Inaugurated as Governor of New York' },
      { date: '2020-03-25', event: 'Issues directive requiring nursing homes to accept COVID patients' },
      { date: '2021-01-28', event: 'AG report reveals nursing home deaths undercounted by 50%' },
      { date: '2021-02-24', event: 'First sexual harassment allegation made public' },
      { date: '2021-08-03', event: 'AG James releases sexual harassment investigation report' },
      { date: '2021-08-10', event: 'Announces resignation effective August 24' },
    ],
    sources: [
      { title: 'NY AG: Independent Investigation into Governor Cuomo', url: 'https://ag.ny.gov/press-release/2021/attorney-general-james-releases-report-independent-investigation-governor-cuomo', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Melissa DeRosa', relationship: 'Secretary to the Governor; admitted withholding nursing home data' },
    ],
  },
  'aaron-schock': {
    slug: 'aaron-schock',
    name: 'Aaron Schock',
    title: 'Former U.S. Representative (R-IL, 2009-2015)',
    photo: '/images/individuals/aaron-schock.webp',
    background: 'Aaron Jon Schock was the youngest member of Congress when elected in 2008 at age 27. He resigned in March 2015 after revelations of lavish spending of taxpayer and campaign funds, including redecorating his office in the style of Downton Abbey.',
    controversies: [
      'Redecorated congressional office in Downton Abbey theme at taxpayer expense ($40,000+)',
      'Billed taxpayers and campaign for private flights, luxury hotels, and concert tickets',
      'Submitted false mileage reimbursements, claiming 170,000 miles on a car with 80,000 actual miles',
      'Used campaign funds for personal expenses including photography at Katy Perry concerts and NFL games',
      'Federal indictment on 24 counts including wire fraud, theft of government funds, and false statements',
      'Charges dropped via deferred prosecution agreement requiring community service and repayment of $68,000',
    ],
    charges: [
      {
        description: '24-count federal indictment: wire fraud, theft of government funds, making false statements, and filing false tax returns',
        status: 'Charges dropped under deferred prosecution agreement (2019); required repayment of $68,000 and community service',
        source: 'U.S. Attorney for the Central District of Illinois',
      },
    ],
    timeline: [
      { date: '2009-01-06', event: 'Sworn in as youngest member of Congress' },
      { date: '2015-02-02', event: 'Washington Post reports on Downton Abbey-themed office' },
      { date: '2015-03-17', event: 'Resigns from Congress amid spending investigations' },
      { date: '2016-11-10', event: 'Indicted on 24 federal counts' },
      { date: '2019-03-06', event: 'Charges dropped under deferred prosecution agreement' },
    ],
    affiliations: [
      { name: 'U.S. House of Representatives (R-IL)', role: 'Member of Congress', type: 'agency' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'John Boehner', relationship: 'House Speaker who mentored him as rising GOP star' },
    ],
  },
  'ajit-pai': {
    name: 'Ajit Pai',
    title: 'Former Chairman, Federal Communications Commission',
    role: 'FCC Chair who repealed net neutrality and served telecom industry interests',
    riskLevel: 'high',
    description: 'Ajit Pai served as FCC Chairman from 2017 to 2021 after being appointed by President Trump. A former Verizon attorney, Pai led the repeal of net neutrality protections in December 2017 despite overwhelming public opposition (83% of comments opposed repeal, though millions were found to be fraudulent). Under his leadership, the FCC used flawed data that undercounted the number of Americans without broadband access by millions, shielding ISPs from accountability for failing to meet deployment obligations. He also weakened media ownership rules and rolled back consumer privacy protections.',
    birthDate: 'January 10, 1973',
    birthPlace: 'Buffalo, New York',
    education: ['Harvard University (A.B.)', 'University of Chicago Law School (J.D.)'],
    affiliations: [
      { name: 'Federal Communications Commission', role: 'Chairman (2017-2021)', type: 'agency' as const },
      { name: 'Verizon Communications', role: 'Associate General Counsel (2001-2003)', type: 'corporation' as const },
    ],
    controversies: [
      'Repealed net neutrality protections despite 83% public opposition in comment period',
      'FCC used flawed broadband mapping data that undercounted unserved Americans by millions',
      'FCC comment system flooded with millions of fraudulent anti-net-neutrality comments, including impersonation of dead people',
      'Former Verizon attorney who led deregulation benefiting his former employer',
      'Weakened media ownership concentration rules',
      'Rolled back ISP privacy protections requiring consent before selling customer data',
    ],
    charges: [],
    relatedInvestigations: ['telecommunications-monopoly-digital-divide'],
    timeline: [
      { date: '2001', event: 'Joined Verizon Communications as Associate General Counsel' },
      { date: '2007', event: 'Joined DOJ Antitrust Division' },
      { date: '2012', event: 'Appointed FCC Commissioner by President Obama (Republican seat)' },
      { date: 'January 2017', event: 'Designated FCC Chairman by President Trump' },
      { date: 'December 2017', event: 'Led 3-2 vote to repeal net neutrality (Restoring Internet Freedom Order)' },
      { date: 'January 2021', event: 'Left FCC; subsequent career in private sector' },
    ],
    sources: [
      { title: 'FCC: Restoring Internet Freedom Order', url: 'https://www.fcc.gov/restoring-internet-freedom', date: '2017' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Brendan Carr', relationship: 'FCC Commissioner and ally on deregulatory agenda' },
    ],
  },  'alex-mashinsky': {
    name: 'Alex Mashinsky',
    title: 'Former CEO of Celsius Network',
    role: 'Cryptocurrency Executive',
    riskLevel: 'critical' as const,
    description: 'Israeli-American entrepreneur and founder/CEO of Celsius Network, a cryptocurrency lending platform that collapsed in June 2022 owing approximately $4.7 billion to 1.7 million depositors. Mashinsky promoted Celsius as safer than banks while secretly using customer funds for risky, unauthorized trades. He personally withdrew $44 million in crypto assets weeks before halting customer withdrawals and filing for bankruptcy. Charged with securities fraud, commodities fraud, and wire fraud by DOJ and SEC in 2023. Found guilty of fraud in December 2024.',
    birthDate: '1965-01-01',
    birthPlace: 'Ukraine (then Soviet Union)',
    education: ['Engineering Studies, Tel Aviv University (1990)'],
    affiliations: [
      { name: 'Celsius Network', role: 'Founder and CEO (2017-2022)', type: 'corporation' as const },
    ],
    controversies: [
      'Celsius Network collapsed owing $4.7 billion to 1.7 million depositors who lost their life savings',
      'Promoted Celsius as safer than traditional banks while using customer deposits for risky speculative trading',
      'Personally withdrew $44 million in crypto assets weeks before halting customer withdrawals',
      'Manipulated price of Celsius CEL token through wash trading and market manipulation',
      'Made hundreds of public statements about platform safety that SEC alleges were materially false',
      'Operated Celsius as an unregistered securities offering bilking retail investors',
      'Found guilty of fraud charges in December 2024 after federal trial',
    ],
    charges: [
      {
        statute: '18 U.S.C. § 1343 - Wire Fraud',
        description: 'Defrauded Celsius customers by making false statements about platform safety while secretly misusing their funds for risky trades',
        category: 'financial',
      },
      {
        statute: '15 U.S.C. § 77q - Securities Fraud',
        description: 'Operated unregistered securities offering through Celsius Earn program; made materially false statements to investors',
        category: 'financial',
      },
      {
        statute: '7 U.S.C. § 9 - Commodities Fraud',
        description: 'Manipulated price of CEL token through fraudulent and manipulative trading practices',
        category: 'financial',
      },
      {
        statute: '18 U.S.C. § 1348 - Securities and Commodities Fraud Conspiracy',
        description: 'Conspired with others to defraud Celsius investors through coordinated scheme involving false statements and market manipulation',
        category: 'financial',
      },
    ],
    relatedInvestigations: [
      { title: 'Cryptocurrency Fraud and Deregulation Failures', slug: 'cryptocurrency-fraud-deregulation', severity: 'critical' },
    ],
    timeline: [
      { date: '2017', event: 'Founds Celsius Network, promising bank-beating yields on crypto deposits' },
      { date: '2018-2021', event: 'Celsius grows to manage $25 billion in assets from 1.7 million depositors' },
      { date: '2021', event: 'Celsius peaks at $25 billion AUM; Mashinsky becomes crypto celebrity promoting platform safety' },
      { date: '2022-05', event: 'Terra/Luna collapse triggers crypto market crash; Celsius faces liquidity crisis' },
      { date: '2022-06-12', event: 'Celsius halts all customer withdrawals trapping $4.7 billion in customer funds' },
      { date: '2022-06', event: 'Mashinsky personally withdraws $44 million in crypto in weeks before customer freeze' },
      { date: '2022-07-13', event: 'Celsius files for Chapter 11 bankruptcy' },
      { date: '2023-07-13', event: 'Arrested and charged by DOJ with securities fraud, wire fraud, and commodities fraud' },
      { date: '2023-07', event: 'SEC files civil complaint alleging Mashinsky raised billions through fraud' },
      { date: '2024-12', event: 'Found guilty of fraud charges at federal trial' },
    ],
    sources: [
      { title: 'DOJ: United States v. Mashinsky Indictment', url: 'https://www.justice.gov/', date: '2023' },
      { title: 'SEC: Complaint Against Celsius Network and Alex Mashinsky', url: 'https://www.sec.gov/litigation/complaints/', date: '2023' },
      { title: 'Celsius Network Bankruptcy Filing', url: 'https://cases.stretto.com/celsius/', date: '2022' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Sam Bankman-Fried', relationship: 'Fellow crypto CEO whose FTX collapse happened months after Celsius; both charged with fraud', href: '/entities/individuals/sam-bankman-fried' },
      { name: 'Do Kwon', relationship: 'Terra/Luna founder whose collapse triggered crisis that exposed Celsius insolvency', href: '/entities/individuals/do-kwon' },
    ],
  },
  'jamie-dimon': {
    name: 'Jamie Dimon',
    title: 'CEO of JPMorgan Chase',
    role: 'Too-Big-to-Fail Bank CEO Who Profited from the Financial Crisis',
    riskLevel: 'high' as const,
    description: 'Jamie Dimon has led JPMorgan Chase since 2005, overseeing its growth into the largest bank in the United States. While he is often credited with steering the bank through the 2008 financial crisis better than competitors, JPMorgan has paid over $39 billion in fines and settlements since 2008 for misconduct including mortgage fraud, energy market manipulation, and facilitating Jeffrey Epsteins finances.',
    birthDate: '1956-03-13',
    birthPlace: 'New York City, New York',
    education: [
      'B.A. in Psychology and Economics, Tufts University (1978)',
      'M.B.A., Harvard Business School (1982)',
    ],
    affiliations: [
      { name: 'JPMorgan Chase', role: 'Chairman and CEO (2005-present)', type: 'corporation' as const },
      { name: 'Business Roundtable', role: 'Chairman (2018-2020)', type: 'organization' as const },
    ],
    controversies: [
      'JPMorgan has paid over $39 billion in legal settlements since 2008, more than any other bank in history',
      'Bank paid $920 million for the "London Whale" trading scandal in which JPMorgan traders lost $6.2 billion through risky derivatives and then concealed losses',
      'JPMorgan maintained an extensive banking relationship with Jeffrey Epstein, processing millions in transactions; bank settled victims lawsuit for $290 million',
      'Bank paid $13 billion in 2013 for misleading investors about the quality of mortgage-backed securities sold before the financial crisis',
      'JPMorgan traders convicted of precious metals market manipulation using spoofing techniques over an eight-year period',
      'Dimon exercised over $150 million in stock options while the bank was under active investigation for multiple forms of misconduct',
      'Bank paid $75 million to settle claims it enabled Epsteins sex trafficking by maintaining his accounts despite red flags',
      'JPMorgan fined billions for violating anti-money-laundering rules and sanctions compliance failures',
    ],
    relatedInvestigations: [
      { title: 'Predatory Lending Post-Crisis', slug: 'predatory-lending-post-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: '2005', event: 'Became CEO of JPMorgan Chase' },
      { date: '2008', event: 'Acquired Bear Stearns and Washington Mutual during financial crisis, massively expanding the bank' },
      { date: '2012', event: 'London Whale trading losses of $6.2 billion; Dimon initially called reports a "tempest in a teapot"' },
      { date: '2013-11', event: 'JPMorgan paid $13 billion to settle mortgage fraud charges, largest bank settlement in history at that time' },
      { date: '2020-09', event: 'JPMorgan paid $920 million for precious metals and Treasury spoofing; largest spoofing penalty ever' },
      { date: '2023-06', event: 'Settled Epstein victims lawsuit for $290 million; admitted banking relationship continued too long' },
      { date: '2024', event: 'JPMorgan reported record profits of $49.6 billion; Dimon compensation exceeded $36 million' },
    ],
    sources: [
      { title: 'DOJ: JPMorgan Chase Admits to Precious Metals Spoofing', date: '2020' },
      { title: 'SEC: JPMorgan London Whale Enforcement Action', date: '2013' },
      { title: 'Violation Tracker: JPMorgan Chase Complete Penalty History', url: 'https://violationtracker.goodjobsfirst.org/', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ina Drew', relationship: 'Former CIO whose team executed the London Whale trades; resigned after losses surfaced' },
    ],
  },
  'arthur-herbst': {
    name: 'Arthur Herbst',
    title: 'Gynecologic Oncologist and Researcher',
    role: 'Physician who discovered the link between DES exposure and clear cell adenocarcinoma in daughters of women who took the drug during pregnancy',
    riskLevel: 'medium' as const,
    description: 'Arthur L. Herbst (1926-2020) was an American gynecologic oncologist at the University of Chicago who, in 1971, published the landmark study in the New England Journal of Medicine establishing the causal link between maternal diethylstilbestrol (DES) use during pregnancy and the development of clear cell adenocarcinoma of the vagina and cervix in their daughters. This discovery was groundbreaking because it demonstrated that in utero drug exposure could cause cancer decades later, fundamentally changing the understanding of pharmaceutical teratogenicity. Herbst subsequently established the DES Registry, a comprehensive database tracking health outcomes of DES-exposed individuals across generations. His research ultimately contributed to the FDA ban on DES use in pregnancy in 1971 and shaped modern pharmaceutical regulation regarding drugs administered to pregnant women. The DES disaster, documented through Herbst and his colleagues research, exposed that pharmaceutical companies had continued marketing DES for pregnancy despite evidence of its ineffectiveness dating back to 1953.',
    birthDate: '1926-04-14',
    birthPlace: 'New York City, New York',
    deathDate: '2020-12-01',
    education: ['Harvard Medical School (M.D., 1951)', 'Massachusetts General Hospital (Residency)'],
    affiliations: [
      { name: 'University of Chicago', role: 'Professor and Chairman of Obstetrics and Gynecology (1975-1999); led DES research for three decades', type: 'organization' },
      { name: 'Massachusetts General Hospital', role: 'Researcher and physician where he first identified the DES-cancer link in 1971', type: 'organization' },
    ],
    controversies: [
      'His 1971 NEJM paper linked DES to vaginal cancer in daughters, leading to the FDA ban and revealing decades of pharmaceutical negligence',
      'Established the DES Registry tracking thousands of affected individuals, documenting multi-generational harm',
      'Research revealed pharmaceutical companies had ignored a 1953 study proving DES was ineffective for preventing miscarriage',
    ],
    relatedInvestigations: [
      { title: 'DES (Diethylstilbestrol): The Three-Generation Pharmaceutical Disaster', slug: 'des-diethylstilbestrol-pharmaceutical-disaster', severity: 'critical' },
    ],
    timeline: [
      { date: '1951', event: 'Graduates from Harvard Medical School' },
      { date: '1971-04-22', event: 'Publishes "Adenocarcinoma of the Vagina: Association of Maternal Stilbestrol Therapy with Tumor Appearance in Young Women" in the New England Journal of Medicine' },
      { date: '1971', event: 'FDA issues drug bulletin advising against DES use in pregnancy based on Herbst research' },
      { date: '1975', event: 'Appointed Chairman of Obstetrics and Gynecology at the University of Chicago; expands DES research' },
      { date: '1978', event: 'Establishes the national DES Registry to track health outcomes across generations of exposed individuals' },
      { date: '2020-12-01', event: 'Dies at age 94; his research had documented the health effects of DES exposure in over 5 million people' },
    ],
    sources: [
      { title: 'New England Journal of Medicine: Herbst et al. - Adenocarcinoma of the Vagina', url: 'https://www.nejm.org/doi/full/10.1056/NEJM197104222841604', date: '1971-04-22' },
      { title: 'University of Chicago Medicine: Arthur L. Herbst Memorial', date: '2021' },
    ],
    knownAssociates: [
      { name: 'Robert Scully', relationship: 'Pathologist at Massachusetts General Hospital who co-authored the landmark 1971 DES-cancer study' },
      { name: 'Howard Ulfelder', relationship: 'Gynecologic oncologist and co-author of the original DES study who collaborated on the early case identifications' },
    ],
  },
 'alfred-moore-waddell': {
   name: "Alfred Moore Waddell",
   title: "White Supremacist Coup Leader",
   role: "Historical Figure",
   riskLevel: "critical",
   description: "Led the 1898 Wilmington massacre and coup, the only successful violent overthrow of an elected government in US history. White supremacists murdered Black citizens and installed Waddell as mayor.",
   education: [],
   affiliations: [
     { name: "City of Wilmington", role: "Installed Mayor", type: "agency" },
   ],
   controversies: [
     "Led 1898 Wilmington massacre - only successful US coup",
     "Mob murdered Black citizens and burned Black-owned newspaper",
     "Overthrew democratically elected multiracial government",
     "Installed as mayor by white supremacist mob",
   ],
   relatedInvestigations: [],
   timeline: [
     { date: "1898-11-10", event: "Leads Wilmington massacre and coup" },
   ],
 },
};

export default profiles;
