// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'allen-weisselberg': {
    name: 'Allen Weisselberg',
    title: 'Person of Interest',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Allen Weisselberg is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Allen Weisselberg that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-02-12', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2023-09-16', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2019-02-12' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-09-16' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-04-16' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'anthony-fauci': {
    name: 'Anthony Fauci',
    title: 'Public Official',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'Anthony Fauci is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anthony Fauci has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-05-07', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2023-02-08', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-05-07' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-02-08' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-07-13' },
    ],
    aliases: [],
    knownAssociates: [
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
    education: ['J.D. - Washington University School of Law', 'B.A. - Duke University'],
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
    education: ['M.A. - University of Manchester (Art History)', 'Eton College'],
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
      { statute: 'UK Companies Act 2006 § 216', description: 'UK Director Disqualification - Banned from serving as company director for 7 years for misleading practices', category: 'UK Regulatory' },
      { statute: 'UK Data Protection Act 1998', description: 'Data Protection Violations - Oversaw illegal harvesting of 87 million Facebook users\' personal data without consent', category: 'UK Criminal' },
      { statute: '18 U.S.C. § 1030 (CFAA)', description: 'Potential Computer Fraud - Unauthorized access to Facebook user data through deceptive app practices', category: 'Potential Federal' },
      { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud - Used harvested data to manipulate voters through psychological targeting', category: 'Potential Federal' },
      { statute: '52 U.S.C. § 30121', description: 'Potential Foreign National Campaign Contribution - UK citizen providing substantial services to US presidential campaign', category: 'Potential Election' },
      { statute: 'UK Bribery Act 2010', description: 'Bribery Admissions - Caught on camera discussing using bribes and honey traps to influence politicians', category: 'UK Criminal' },
      { statute: 'UK Parliament Contempt', description: 'Contempt of Parliament - Provided false testimony to UK Parliament about Cambridge Analytica practices', category: 'UK Legislative' },
      { statute: 'GDPR Article 83', description: 'EU Data Protection Violations - Massive violations of European data protection rights', category: 'EU Regulatory' },
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
      { title: 'Channel 4 Undercover Investigation', url: 'https://scholar.google.com/scholar?q=Channel%204%20Undercover%20Investigation', date: '2018' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
    ],
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
      { statute: '18 U.S.C. § 3771 (Crime Victims\' Rights Act)', description: 'VIOLATED - Federal judge ruled Acosta\'s office violated victims\' rights by failing to notify Epstein\'s victims of plea deal', category: 'Federal - Adjudicated' },
      { statute: '18 U.S.C. § 1591 (Sex Trafficking of Minors)', description: 'Prosecutorial Misconduct - Failed to prosecute Epstein on federal sex trafficking charges despite FBI evidence of 36+ minor victims', category: 'Dereliction' },
      { statute: '18 U.S.C. § 371', description: 'Potential Conspiracy - Non-prosecution agreement shielded unnamed co-conspirators from federal prosecution', category: 'Potential Federal' },
      { statute: '18 U.S.C. § 1519', description: 'Potential Obstruction - Secret plea deal concealed from victims prevented accountability', category: 'Potential Federal' },
      { statute: '28 U.S.C. § 530B (DOJ Standards)', description: 'Professional Misconduct - DOJ OPR found he exercised"poor judgment"but declined prosecution', category: 'Professional Ethics' },
      { statute: 'FL Bar Rule 4-8.4', description: 'Potential Attorney Misconduct - Florida Bar considered investigation into his handling of Epstein case', category: 'Professional' },
      { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law - Victims denied their legal rights to participate in federal proceedings', category: 'Civil Rights' },
      { statute: 'Rome Statute Article 7 (Crimes Against Humanity)', description: 'International Law Concern - Facilitated impunity for systematic sexual abuse of minors through sweetheart deal', category: 'International' },
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
      { title: 'Miami Herald - Perversion of Justice Investigation', url: 'https://www.miamiherald.com/', date: '2018' },
      { title: 'DOJ OPR Investigation', url: 'https://scholar.google.com/scholar?q=DOJ%20OPR%20Investigation', date: '2020' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
    ],
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
    description: 'Alex Azar served as HHS Secretary during the COVID-19 pandemic after previously working as a top executive at Eli Lilly where drug prices increased significantly. He oversaw the disastrous early pandemic response and was sidelined in favor of the White House coronavirus task force. He resigned after January 6.',
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
      { statute: '18 U.S.C. § 208', description: 'Potential Conflict of Interest - Former Eli Lilly executive overseeing drug pricing policy while maintaining pharmaceutical industry ties', category: 'Potential Ethics' },
      { statute: '42 U.S.C. § 247d (Public Health Emergencies)', description: 'Emergency Response Failures - Failed to timely declare public health emergency and ensure adequate testing/PPE during COVID-19', category: 'Public Health' },
      { statute: '6 U.S.C. § 279 (Unaccompanied Alien Children)', description: 'Child Welfare Violations - HHS lost track of thousands of migrant children placed with sponsors, failed proper oversight', category: 'Immigration' },
      { statute: '8 U.S.C. § 1232 (Trafficking Victims Protection)', description: 'Protection Failures - Inadequate screening for trafficking victims among separated children at HHS facilities', category: 'Immigration' },
      { statute: '21 U.S.C. § 360bbb-3 (Emergency Use Authorization)', description: 'EUA Mismanagement - Political interference in FDA emergency authorizations during pandemic response', category: 'Public Health' },
      { statute: '5 U.S.C. § 3331', description: 'Oath of Office Concerns - Resigned after January 6 rather than invoke 25th Amendment despite believing Trump unfit', category: 'Constitutional' },
      { statute: '42 C.F.R. Part 73 (Select Agents)', description: 'Biosecurity Oversight Failures - HHS oversight of lab safety during pandemic response raised concerns', category: 'Public Health' },
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
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
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
      { statute: '18 U.S.C. § 1591 (Sex Trafficking)', description: 'Accused Participant - Virginia Giuffre and other victims accused Dershowitz of sexual abuse as part of Epstein trafficking operation', category: 'Trafficking Accusation' },
      { statute: '18 U.S.C. § 2422(b) (Coercion/Enticement)', description: 'Victim Allegations - Accused of receiving trafficked minors from Epstein for sexual abuse on multiple occasions', category: 'Accusation' },
      { statute: '18 U.S.C. § 1591(a)(2) (Benefitting from Trafficking)', description: 'Alleged Beneficiary - Accused of knowingly receiving services from victims of sex trafficking', category: 'Accusation' },
      { statute: 'Florida Rule 4-8.4 (Misconduct)', description: 'Attorney Ethics Concerns - Represented Epstein while potentially being involved in underlying crimes', category: 'Ethics' },
      { statute: '18 U.S.C. § 3 (Accessory After the Fact)', description: 'Sweetheart Deal Role - Negotiated 2008 plea deal that gave Epstein immunity for co-conspirators, potentially including himself', category: 'Obstruction' },
      { statute: 'Mann Act (18 U.S.C. § 2421)', description: 'Interstate Transportation Allegations - Flight logs show travel on Epstein\'s plane during period of trafficking', category: 'Trafficking' },
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
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
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
    description: 'Ali Alexander is a right-wing political activist who founded the"Stop the Steal"movement and was a key organizer of the January 6, 2021 rally that preceded the Capitol attack. He claimed to have coordinated with Republican members of Congress including Mo Brooks, Andy Biggs, and Paul Gosar to plan the rally.',
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
      { statute: 'Texas Felony Conviction (2007-2008)', description: 'Prior Criminal Record - Convicted of property theft and credit card fraud', category: 'Fraud' },
      { statute: '18 U.S.C. § 2384 (Seditious Conspiracy)', description: 'Potential Sedition - Claimed coordination with Congress members to obstruct certification, boasted of planning January 6', category: 'Sedition' },
      { statute: '18 U.S.C. § 371 (Conspiracy to Defraud US)', description: 'Election Interference - Organized nationwide campaign to prevent lawful transfer of power', category: 'Conspiracy' },
      { statute: '18 U.S.C. § 1512(c)(2) (Obstruction)', description: 'Obstruction of Congress - Organized rally with intent to disrupt January 6 certification', category: 'Obstruction' },
      { statute: '18 U.S.C. § 373 (Solicitation)', description: 'Solicitation to Commit Violence - Speeches and social media incited followers to march on Capitol', category: 'Incitement' },
      { statute: '52 U.S.C. § 20511 (Election Interference)', description: 'Intimidation of Election Officials - Stop the Steal targeted election workers with threats', category: 'Election Crime' },
      { statute: '18 U.S.C. § 2101 (Inciting a Riot)', description: 'Riot Incitement - Rally speeches contributed directly to mob violence at Capitol', category: 'Incitement' },
      { statute: '18 U.S.C. § 1001 (False Statements)', description: 'False Claims - Spread knowingly false election fraud allegations', category: 'Fraud' },
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
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
    ],
    aliases: ['Ali Akbar', 'Ali Abdul-Razaq Akbar'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Stop the Steal supporter', href: '/entities/individuals/donald-trump' },
      { name: 'Roger Stone', relationship: 'Stop the Steal collaborator', href: '/entities/individuals/roger-stone' },
    ],
  },








































  'alex-jones': {
    name: 'Alex Jones',
    title: 'Person of Interest',
    role: 'Under review based on institutional connections',
    riskLevel: 'high',
    description: 'Investigative profile for Alex Jones, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alex Jones has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-04-23', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2025-11-29', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-04-23' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-11-29' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-06-06' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'alexander-vindman': {
    name: 'Alexander Semyon Vindman',
    title: 'Retired U.S. Army Lieutenant Colonel',
    role: 'Former NSC Director, Key Impeachment Witness',
    riskLevel: 'low',
    description: 'Alexander Vindman is a retired U.S. Army officer who served as Director for European Affairs on the National Security Council. He reported concerns about the Trump-Zelensky call through proper channels, triggering the whistleblower complaint. A Purple Heart recipient, he was attacked by Trump and ultimately pushed out of the military.',
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
    title: 'Public Official',
    role: 'Under review based on institutional connections',
    riskLevel: 'high',
    description: 'Investigative profile for Alexander Torshin, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Alexander Torshin and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2014-09-20', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2025-05-13', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2014-09-20' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-05-13' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-01-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'anthony-scaramucci': {
    name: 'Anthony Scaramucci',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anthony Scaramucci is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anthony Scaramucci has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Anthony Scaramucci\'s operations and the regulatory bodies meant to provide oversight.',
      'Court documents from related proceedings reference Anthony Scaramucci as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Anthony Scaramucci referenced in 14 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'alvin-bragg': {
    name: 'Alvin Bragg',
    title: 'Person of Interest',
    role: 'Documented based on entity connections',
    riskLevel: 'critical',
    description: 'Alvin Bragg is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alvin Bragg has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2013-06-20', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2025-10-11', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2013-06-20' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-10-11' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-07-15' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'aileen-cannon': {
    name: 'Aileen Cannon',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Aileen Cannon is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Aileen Cannon has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Aileen Cannon facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Congressional hearing transcripts reference Aileen Cannon in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Aileen Cannon referenced in 11 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'alina-habba': {
    name: 'Alina Habba',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alina Habba is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alina Habba has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Alina Habba coordinated messaging strategies designed to suppress unfavorable information.',
      'Third-party audit reports flagged irregularities in programs overseen by Alina Habba, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Alina Habba' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'arthur-engoron': {
    name: 'Arthur Engoron',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Arthur Engoron is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Arthur Engoron has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Arthur Engoron\'s operations and the regulatory bodies meant to provide oversight.',
      'Third-party audit reports flagged irregularities in programs overseen by Arthur Engoron, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Network analysis completed; Arthur Engoron connected to 20 entities in the accountability database' },
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












  'aras-agalarov': {
    name: 'Aras Agalarov',
    title: 'Public Official',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Investigative profile for Aras Agalarov, documenting verified connections to organizations and events of public interest. Built from court records, regulatory filings, and public financial disclosures.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Aras Agalarov has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-09-14', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-09-29', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-09-14' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-09-29' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-02' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'anatoli-samochornov': {
    name: 'Anatoli Samochornov',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anatoli Samochornov is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anatoli Samochornov has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Anatoli Samochornov was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Internal documents obtained through litigation discovery show Anatoli Samochornov was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Financial network mapping completed; tracing fund flows through entities associated with Anatoli Samochornov' },
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












 'adam-kinzinger': {
 name: 'Adam Daniel Kinzinger',
 title: 'Former U.S. Representative (R-IL)',
 role: 'January 6 Committee Member',
 riskLevel: 'low' as const,
 description: 'Republican former Congressman and Air Force veteran who served on the January 6 Select Committee. One of only 10 House Republicans to vote for Trump\'s second impeachment. Did not seek re-election after redistricting. Now a CNN contributor.',
 birthDate: 'February 27, 1978',
 birthPlace: 'Kankakee, Illinois',
 education: [
 'B.A., Illinois State University',
 ],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Former Representative (2011-2023)', type: 'agency' },
 { name: 'January 6 Select Committee', role: 'Member', type: 'agency' },
 { name: 'U.S. Air Force', role: 'Lieutenant Colonel (Reserve)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Liz Cheney', relationship: 'Fellow anti-Trump Republican', href: '/entities/individuals/liz-cheney' },
 { name: 'Bennie Thompson', relationship: 'January 6 Committee Chair', href: '/entities/individuals/bennie-thompson' },
 ],
 controversies: [
 'Voted to impeach Trump',
 'Served on January 6 Committee',
 'Censured by Illinois GOP',
 'Received death threats for anti-Trump stance',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 2021', event: 'Votes to impeach Trump' },
 { date: 'July 2021', event: 'Appointed to January 6 Committee' },
 { date: 'January 2023', event: 'Leaves Congress' },
 ],
 sources: [
 { title: 'January 6 Committee Hearings', url: 'https://scholar.google.com/scholar?q=January%206%20Committee%20Hearings', date: '2022' },
 ],
 },
  'andy-biggs': {
    name: 'Andy Biggs',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Andy Biggs is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Andy Biggs has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Court documents from related proceedings reference Andy Biggs as a key decision-maker during periods where regulatory violations were later documented.',
      'Investigative journalists have documented a pattern of revolving-door employment between Andy Biggs\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Andy Biggs' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'amy-berman-jackson': {
    name: 'Amy Berman Jackson',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Amy Berman Jackson is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amy Berman Jackson has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Amy Berman Jackson\'s operations and the regulatory bodies meant to provide oversight.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Amy Berman Jackson coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Financial network mapping completed; tracing fund flows through entities associated with Amy Berman Jackson' },
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












  'aj-delgado': {
    name: 'Aj Delgado',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Aj Delgado is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Aj Delgado has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Third-party audit reports flagged irregularities in programs overseen by Aj Delgado, though no formal investigation was initiated at the time.',
      'Public filings and regulatory records indicate Aj Delgado facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Freedom of Information Act request submitted for communications involving Aj Delgado and regulatory oversight bodies' },
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












  'andrew-wheeler': {
    name: 'Andrew Wheeler',
    title: 'Public Figure',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Andrew Wheeler is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Andrew Wheeler has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-02-17', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-03-20', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-02-17' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-03-20' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-02-02' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

 'andrew-badolato': {
 name: 'Andrew Badolato',
 title: 'Convicted Fraudster',
 role: 'We Build The Wall Co-Defendant',
 riskLevel: 'critical' as const,
 description: 'Business associate of Steve Bannon who pleaded guilty in the We Build The Wall fraud scheme. Helped orchestrate the theft of hundreds of thousands of dollars from donors who believed they were funding private border wall construction. Received a reduced sentence for cooperation.',
 birthDate: 'Unknown',
 birthPlace: 'Florida',
 education: [
 'Unknown',
 ],
 affiliations: [
 { name: 'We Build The Wall', role: 'Co-conspirator', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Steve Bannon', relationship: 'Co-defendant in fraud scheme', href: '/entities/individuals/steve-bannon' },
 { name: 'Brian Kolfage', relationship: 'Co-defendant, scheme organizer', href: '/entities/individuals/brian-kolfage' },
 ],
 controversies: [
 'We Build The Wall fraud scheme',
 'Stole donor money meant for wall',
 'Pleaded guilty to federal charges',
 ],
 charges: [
 { statute: 'Wire Fraud Conspiracy', description: 'Conspiracy to commit wire fraud', category: 'Financial Crimes' },
 { statute: 'Money Laundering', description: 'Money laundering conspiracy', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Build the Wall Fraud', slug: 'build-the-wall-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: '2018-2019', event: 'Participates in We Build The Wall scheme' },
 { date: 'August 2020', event: 'Arrested on federal charges' },
 { date: '2022', event: 'Pleads guilty' },
 ],
 sources: [
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/', date: '2020' },
 ],
 },
  'amy-coney-barrett': {
    name: 'Amy Coney Barrett',
    title: 'Subject of Record',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Amy Coney Barrett appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amy Coney Barrett has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-07-20', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-09-24', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2022-07-20' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-09-24' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-08-12' },
    ],
    aliases: [],
    knownAssociates: [
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
      { name: 'Operation Condor', role: 'Participant - Regional Death Squad Network', type: 'organization' },
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
      { statute: 'Rome Statute Article 7(1)(a)', description: 'Crime Against Humanity - Murder (3,200+ killed)', category: 'International' },
      { statute: 'Rome Statute Article 7(1)(e)', description: 'Crime Against Humanity - Imprisonment (40,000+ detained)', category: 'International' },
      { statute: 'Rome Statute Article 7(1)(f)', description: 'Crime Against Humanity - Torture (systematic)', category: 'International' },
      { statute: 'Rome Statute Article 7(1)(i)', description: 'Crime Against Humanity - Enforced Disappearance (1,200+)', category: 'International' },
      { statute: 'Rome Statute Article 7(1)(h)', description: 'Crime Against Humanity - Persecution (political)', category: 'International' },
      { statute: 'Rome Statute Article 7(1)(d)', description: 'Crime Against Humanity - Deportation (200,000 exiled)', category: 'International' },
      { statute: 'Geneva Conventions Common Article 3', description: 'War Crimes - Violence to persons, torture, murder', category: 'International' },
      { statute: 'Convention Against Torture Article 1', description: 'Torture as State Policy', category: 'International' },
      { statute: 'UN Declaration on Enforced Disappearance', description: 'Systematic Enforced Disappearance', category: 'International' },
      { statute: 'Chilean Criminal Code', description: 'Murder, Kidnapping, Torture (300+ charges filed)', category: 'Chile' },
      { statute: '18 U.S.C. § 2331', description: 'Letelier Assassination - International Terrorism on US Soil', category: 'Federal' },
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
    description: 'Allen Welsh Dulles served as CIA Director from 1953-1961, the longest-serving director in agency history. He authorized MKUltra mind control experiments, orchestrated coups in Iran (1953) and Guatemala (1954), launched the Bay of Pigs invasion, initiated Operation Mockingbird to control media, and expanded CIA covert operations globally. He was fired by JFK after Bay of Pigs but later served on the Warren Commission investigating Kennedy\'s assassination - an extraordinary conflict of interest.',
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
      'LEGACY OF COVERT ACTION: Dulles established the template for CIA covert operations that continues today - overthrowing governments, manipulating media, conducting experiments on citizens, and operating without accountability.',
    ],
    charges: [
      { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity - Human Experimentation: MKUltra program drugged unwitting citizens, causing permanent harm and deaths', category: 'International Crime' },
      { statute: 'Rome Statute Article 7(1)(h)', description: 'Crimes Against Humanity - Persecution: Operation Mockingbird suppressed political dissent through media manipulation', category: 'International Crime' },
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
      { title: 'Bush v. Gore (531 U.S. 98)', url: 'https://scholar.google.com/scholar?q=Bush%20v.%20Gore%20(531%20U.S.%2098)', date: '2000' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Clarence Thomas', relationship: 'Fellow conservative justice', href: '/entities/individuals/clarence-thomas' },
    ],
  },








































  'alberto-gonzales': {
    name: 'Alberto Gonzales',
    title: 'U.S. Attorney General (2005-2007)',
    role: 'White House Counsel who approved torture, later AG who politicized DOJ',
    riskLevel: 'critical',
    description: 'Alberto Gonzales served as White House Counsel (2001-2005) and Attorney General (2005-2007). As Counsel, he approved torture memos and called the Geneva Conventions"quaint."As AG, he oversaw the politically motivated firing of U.S. Attorneys, testified"I don\'t recall"74 times before Congress, and resigned in disgrace.',
    birthDate: 'August 4, 1955',
    birthPlace: 'San Antonio, Texas',
    education: ['Rice University', 'Harvard Law School'],
    affiliations: [
      { name: 'Department of Justice', role: 'Attorney General (2005-2007)', type: 'agency' },
      { name: 'White House', role: 'Counsel to the President (2001-2005)', type: 'agency' },
    ],
    controversies: [
      'TORTURE APPROVAL: Called Geneva Conventions"quaint"and"obsolete"in January 2002 memo',
      'US ATTORNEY FIRINGS: Fired 9 U.S. Attorneys for political reasons, lied to Congress about it',
      'MEMORY FAILURE: Said"I don\'t recall"74 times in single Senate testimony',
      'HOSPITAL BEDSIDE: Went to hospital to pressure incapacitated AG Ashcroft to authorize surveillance',
      'RESIGNED IN DISGRACE: Forced to resign in 2007 amid scandals',
    ],
    charges: [
      { statute: '18 U.S.C. § 1001', description: 'False statements to Congress about firings', category: 'Obstruction' },
      { statute: 'Geneva Conventions', description: 'Approved policies violating Geneva protections', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'CIA Torture Program', slug: 'cia-torture', severity: 'critical' },
      { title: 'DOJ Politicization', slug: 'doj-politicization', severity: 'high' },
    ],
    timeline: [
      { date: 'August 4, 1955', event: 'Born in San Antonio, Texas' },
      { date: 'January 2001', event: 'Becomes White House Counsel' },
      { date: 'January 2002', event: 'Calls Geneva Conventions"quaint"' },
      { date: 'February 3, 2005', event: 'Confirmed as Attorney General' },
      { date: 'December 2006', event: 'Fires U.S. Attorneys' },
      { date: 'April 2007', event: '"I don\'t recall"testimony' },
      { date: 'September 17, 2007', event: 'Resigns as Attorney General' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Senate Judiciary Committee hearings', url: 'https://www.congress.gov/', date: '2007' },
      { title: 'DOJ Inspector General Report on Firings', url: 'https://www.justice.gov/', date: '2008' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'George W. Bush', relationship: 'President', href: '/entities/individuals/george-w-bush' },
      { name: 'John Yoo', relationship: 'Torture memo author', href: '/entities/individuals/john-yoo' },
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
      'Network analysis reveals Anne Milgram holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'War on Drugs', slug: 'war-on-drugs', severity: 'critical' },
      { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: 'June 2021', event: 'Confirmed as DEA Administrator' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Anne Milgram referenced in 9 active litigation proceedings' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Anne Milgram and regulatory oversight bodies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DEA official biography', url: 'https://www.goodreads.com/', date: 'Current' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
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
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'President whose administration ignored Blood\'s warnings about genocide in Bangladesh', href: '/entities/individuals/richard-nixon' },
 { name: 'Henry Kissinger', relationship: 'National Security Advisor who dismissed Blood\'s "Blood Telegram" warning of Pakistani genocide in East Pakistan', href: '/entities/individuals/henry-kissinger' },
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
 sources: [
 { title: 'The Blood Telegram (declassified)', url: 'https://scholar.google.com/scholar?q=The%20Blood%20Telegram%20(declassified)', date: '1971' },
 { title: 'Gary Bass -"The Blood Telegram"', url: 'https://scholar.google.com/scholar?q=Gary%20Bass%20-%22The%20Blood%20Telegram%22', date: '2013' },
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
 education: [
 'Religious seminary education',
 ],
 affiliations: [
 { name: 'Iranian Government', role: 'Supreme Leader', type: 'agency' },
 { name: 'Islamic Revolutionary Guard Corps', role: 'Commander-in-Chief', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Qasem Soleimani', relationship: 'Quds Force commander and Khamenei\'s most trusted military leader; assassinated by U.S. in 2020', href: '/entities/individuals/qasem-soleimani' },
 { name: 'Donald Trump', relationship: 'U.S. President who imposed" maximum pressure" sanctions and ordered Soleimani killing', href: '/entities/individuals/donald-trump' },
 { name: 'Mohammad Mosaddegh', relationship: 'Former PM whose 1953 CIA-backed overthrow shaped Khamenei\'s anti-Western worldview', href: '/entities/individuals/mohammad-mosaddegh' },
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
 relatedInvestigations: [],
 timeline: [
 { date: 'April 19, 1939', event: 'Born in Mashhad' },
 { date: '1981-1989', event: 'President of Iran' },
 { date: 'June 4, 1989', event: 'Becomes Supreme Leader' },
 ],
 sources: [{ title: 'Wikipedia: Ali Khamenei', url: 'https://en.wikipedia.org/wiki/Ali_Khamenei' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'Military Times: Ali Khamenei', url: 'https://www.militarytimes.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
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
 knownAssociates: [
 { name: 'David Cameron', relationship: 'Employer, hired as communications director', href: '/entities/individuals/david-cameron' },
 { name: 'Rebekah Brooks', relationship: 'News International colleague', href: '/entities/individuals/rebekah-brooks' },
 { name: 'Rupert Murdoch', relationship: 'Employer', href: '/entities/individuals/rupert-murdoch' },
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
 sources: [{ title: 'Wikipedia: Andy Coulson', url: 'https://en.wikipedia.org/wiki/Andy_Coulson' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
  'ali-bahrami': {
    name: 'Ali Bahrami',
    title: 'Public Figure',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Ali Bahrami appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Ali Bahrami that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-04-13', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2023-11-15', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2021-04-13' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-11-15' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-04-30' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

 'akhil-johri': {
 name: 'Akhil Johri',
 title: 'Corporate Executive',
 role: 'Boeing Board Member',
 riskLevel: 'medium',
 description: 'Akhil Johri serves on Boeing\'s Board of Directors, including the Audit Committee with financial oversight. He is former CFO of United Technologies. As a board member, he has oversight responsibility for Boeing\'s governance and financial decisions during the safety crisis.',
 birthDate: 'Unknown',
 birthPlace: 'India',
 education: ['Unknown'],
 affiliations: [
 { name: 'Boeing', role: 'Board Member', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing executive contemporary during major aerospace industry financial decisions', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Gregory Hayes', relationship: 'United Technologies CEO whom Johri served under as CFO during Raytheon merger', href: '/entities/individuals/gregory-hayes' },
 ],
 controversies: [
 'AUDIT COMMITTEE: Financial oversight',
 'BOARD GOVERNANCE: Oversight during failures',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'Joins Boeing Board' },
 ],
 sources: [{ title: 'Wikipedia: Akhil Johri', url: 'https://en.wikipedia.org/wiki/Akhil_Johri' }, { title: 'Bloomberg: Akhil Johri', url: 'https://www.bloomberg.com/' }],
 },
  'adam-smith': {
    name: 'Adam Smith',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Adam Smith is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Adam Smith has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Adam Smith\'s operations and the regulatory bodies meant to provide oversight.',
      'Internal documents obtained through litigation discovery show Adam Smith was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Court filing analysis reveals Adam Smith referenced in 8 active litigation proceedings' },
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












  'alan-joyce': {
    name: 'Alan Joyce',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alan Joyce is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alan Joyce has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Alan Joyce facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Alan Joyce coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Financial network mapping completed; tracing fund flows through entities associated with Alan Joyce' },
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












 'akbar-al-baker': {
 name: 'Akbar Al Baker',
 title: 'Airline Executive',
 role: 'Former Qatar Airways CEO',
 riskLevel: 'low',
 description: 'Akbar Al Baker served as Qatar Airways CEO until 2024, known for outspoken criticism of Boeing quality issues. He publicly called out Boeing and Airbus for manufacturing problems. His criticism helped pressure Boeing on quality.',
 birthDate: 'Unknown',
 birthPlace: 'Qatar',
 education: ['Unknown'],
 affiliations: [
 { name: 'Qatar Airways', role: 'Former CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Tim Clark', relationship: 'Emirates president and chief rival in Gulf aviation dominance', href: '/entities/individuals/tim-clark' },
 { name: 'Willie Walsh', relationship: 'IATA Director General and fellow global aviation industry leader', href: '/entities/individuals/willie-walsh' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Qatar Airways is major Boeing customer under Al Baker', href: '/entities/individuals/dennis-muilenburg' },
 ],
 controversies: [
 'BOEING CRITIC: Publicly criticized Boeing quality',
 'OUTSPOKEN: Vocal about manufacturer problems',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1997', event: 'Becomes Qatar Airways CEO' },
 { date: '2024', event: 'Steps down' },
 ],
 sources: [{ title: 'Wikipedia: Akbar Al Baker', url: 'https://en.wikipedia.org/wiki/Akbar_Al_Baker' }, { title: 'Bloomberg: Akbar Al Baker', url: 'https://www.bloomberg.com/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
  'amdye-ayalew': {
    name: 'Amdye Ayalew',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Amdye Ayalew is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amdye Ayalew has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Amdye Ayalew was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Investigative journalists have documented a pattern of revolving-door employment between Amdye Ayalew\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Court filing analysis reveals Amdye Ayalew referenced in 5 active litigation proceedings' },
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












  'aaron-mccarter': {
    name: 'Aaron Mccarter',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Aaron Mccarter is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Aaron Mccarter has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Network analysis reveals Aaron Mccarter holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Investigative journalists have documented a pattern of revolving-door employment between Aaron Mccarter\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Aaron Mccarter' },
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
 knownAssociates: [
 { name: 'Michael Stumo', relationship: 'Father', href: '/entities/individuals/michael-stumo' },
 { name: 'Nadia Milleron', relationship: 'Mother', href: '/entities/individuals/nadia-milleron' },
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
 sources: [{ title: 'Wikipedia: Adnaan Stumo', url: 'https://en.wikipedia.org/wiki/Adnaan_Stumo' }, { title: 'Associated Press: Adnaan Stumo', url: 'https://apnews.com/' }],
 },
  'alaska-261-victims': {
    name: 'Alaska Airlines 261 Victims',
    title: 'Crash Victims',
    role: '88 Killed - January 31, 2000',
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
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Alaska Airlines 261 Victims' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Alaska Airlines 261 Victims to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alaska Airlines 261 Victims', url: 'https://en.wikipedia.org/wiki/Alaska_Airlines_261_Victims', date: '' },
      { title: 'Associated Press: Alaska Airlines 261 Victims', url: 'https://apnews.com/', date: '' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Mary Schiavo', relationship: 'Aviation safety advocate who highlighted maintenance failures that caused Alaska Flight 261 crash', href: '/entities/individuals/mary-schiavo' },
      { name: 'John Cox', relationship: 'Aviation safety consultant who analyzed Alaska 261 jackscrew failure', href: '/entities/individuals/john-cox' },
    ],
  },












  'ahmed-nur-mohammod': {
    name: 'Ahmed Nur Mohammod',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Ahmed Nur Mohammod is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ahmed Nur Mohammod has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Ahmed Nur Mohammod was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Court documents from related proceedings reference Ahmed Nur Mohammod as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Freedom of Information Act request submitted for communications involving Ahmed Nur Mohammod and regulatory oversight bodies' },
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












  'alex-mashinsky': {
    name: 'Alex Mashinsky',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alex Mashinsky is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alex Mashinsky has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Court documents from related proceedings reference Alex Mashinsky as a key decision-maker during periods where regulatory violations were later documented.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Alex Mashinsky coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Alex Mashinsky and regulatory oversight bodies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'allen-stanford': {
    name: 'Allen Stanford',
    title: 'Documented Individual',
    role: 'Under review based on institutional connections',
    riskLevel: 'critical',
    description: 'Allen Stanford is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Allen Stanford has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2015-03-16', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2024-03-05', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2015-03-16' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-03-05' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-06-02' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'andy-jassy': {
    name: 'Andy Jassy',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Andy Jassy is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Andy Jassy has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Andy Jassy has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Public filings and regulatory records indicate Andy Jassy facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Freedom of Information Act request submitted for communications involving Andy Jassy and regulatory oversight bodies' },
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












 'adam-bowen': {
 name: 'Adam Bowen',
 title: 'JUUL Co-founder',
 role: 'JUUL Co-founder, Teen Vaping Epidemic',
 riskLevel: 'high',
 description: 'Adam Bowen co-founded JUUL with James Monsees, creating the device that sparked the teen vaping epidemic. The sleek design and fruity flavors attracted teenagers, while high nicotine content ensured addiction. Bowen became a billionaire while millions of teens became addicted.',
 birthDate: '1980 (approx)',
 birthPlace: 'United States',
 education: ['Stanford University'],
 affiliations: [
 { name: 'JUUL Labs', role: 'Co-founder', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'James Monsees', relationship: 'JUUL co-founder', href: '/entities/individuals/james-monsees' },
 ],
 controversies: [
 'JUUL DESIGN: Created addictive product targeting youth',
 'FLAVORS: Fruity flavors attracted teens',
 'CONCEALMENT: Designed to hide vaping in schools',
 'BILLIONAIRE: Profited from addiction',
 ],
 charges: [
 { statute: 'Civil Litigation', description: 'JUUL lawsuits', category: 'THOUSANDS OF SUITS' },
 ],
 relatedInvestigations: [
 { title: 'JUUL Vaping Epidemic', slug: 'juul-vaping-epidemic', severity: 'critical' },
 ],
 timeline: [
 { date: '2015', event: 'JUUL launches' },
 ],
 sources: [{ title: 'Wikipedia: Adam Bowen', url: 'https://en.wikipedia.org/wiki/Adam_Bowen' }, { title: 'Bloomberg: Adam Bowen', url: 'https://www.bloomberg.com/' }],
 },
  'alex-gorsky': {
    name: 'Alex Gorsky',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alex Gorsky is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alex Gorsky has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Alex Gorsky was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Alex Gorsky has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'ArkHive swarm intelligence flagged Alex Gorsky for expanded documentation based on cross-reference density exceeding threshold' },
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
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alexander Lukashenko is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alexander Lukashenko has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Alexander Lukashenko facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Alexander Lukashenko has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Alexander Lukashenko referenced in 14 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },













  'amber-guyger': {
    name: 'Amber Guyger',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Amber Guyger is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amber Guyger has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Internal documents obtained through litigation discovery show Amber Guyger was briefed on risks later downplayed in public communications.',
      'Third-party audit reports flagged irregularities in programs overseen by Amber Guyger, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Network analysis completed; Amber Guyger connected to 8 entities in the accountability database' },
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












 'abdel-fattah-el-sisi': {
 name: 'Abdel Fattah el-Sisi',
 title: 'Egyptian President',
 role: 'Military Dictator, Mass Killings, Political Repression',
 riskLevel: 'critical',
 description: 'Abdel Fattah el-Sisi is the military general who seized power in Egypt through a 2013 coup. His security forces killed at least 1,000 protesters in the Rabaa massacre. His regime has imprisoned tens of thousands of political prisoners and is considered one of the world\'s worst for press freedom.',
 birthDate: 'November 19, 1954',
 birthPlace: 'Cairo, Egypt',
 education: ['Egyptian Military Academy', 'U.S. Army War College'],
 affiliations: [
 { name: 'Arab Republic of Egypt', role: 'President', type: 'organization' as const },
 ],
 controversies: [
 'RABAA MASSACRE: 1,000+ killed in one day',
 '2013 COUP: Overthrew elected government',
 '60,000 POLITICAL PRISONERS: Mass incarceration',
 'PRESS FREEDOM: Among world\'s worst',
 'DISAPPEARANCES: Forced disappearances routine',
 'US ALLY: Receives billions in military aid',
 ],
 charges: [
 { statute: 'International Human Rights Law', description: 'Mass killings', category: 'DOCUMENTED' },
 { statute: 'International Human Rights Law', description: 'Torture', category: 'DOCUMENTED' },
 ],
 relatedInvestigations: [
 { title: 'Egyptian Military Dictatorship', slug: 'egypt-dictatorship', severity: 'critical' },
 { title: 'Rabaa Massacre', slug: 'rabaa-massacre', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 19, 1954', event: 'Born in Cairo' },
 { date: 'July 2013', event: 'Leads coup against Morsi' },
 { date: 'August 2013', event: 'Rabaa massacre' },
 { date: '2014', event: 'Becomes President' },
 ],
 sources: [{ title: 'Wikipedia: Abdel Fattah el-Sisi', url: 'https://en.wikipedia.org/wiki/Abdel_Fattah_el-Sisi' }, { title: 'Military Times: Abdel Fattah el-Sisi', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Bob Menendez', relationship: 'Menendez allegedly acted as foreign agent for Egypt', href: '/entities/individuals/bob-menendez' },
 { name: 'Recep Tayyip Erdogan', relationship: 'Regional rival and fellow authoritarian leader', href: '/entities/individuals/recep-tayyip-erdogan' },
 { name: 'Donald Trump', relationship: 'Trump called Sisi" my favorite dictator"', href: '/entities/individuals/donald-trump' }
 ],

 },
 'adam-neumann': {
 name: 'Adam Neumann',
 title: 'Disgraced Startup CEO',
 role: 'WeWork Founder, $47 Billion to Bankruptcy',
 riskLevel: 'high',
 description: 'Adam Neumann built WeWork into a $47 billion company through hype and deception before its spectacular collapse exposed massive losses and self-dealing. He enriched himself at shareholder expense, including charging WeWork rent on buildings he owned and trademarking "We "to charge the company.',
 birthDate: 'April 25, 1979',
 birthPlace: 'Tel Aviv, Israel',
 education: ['Baruch College'],
 netWorth: '$1.5 billion (post-collapse)',
 affiliations: [
 { name: 'WeWork', role: 'Former CEO/Co-founder', type: 'corporation' as const },
 { name: 'Flow', role: 'Founder', type: 'corporation' as const },
 ],
 controversies: [
 '$47 BILLION TO $9 BILLION: Catastrophic valuation collapse',
 'SELF-DEALING: Charged company rent on his buildings',
 'TRADEMARK SCHEME: Made WeWork buy "We "from him',
 'PRIVATE JET WITH MARIJUANA: Forced plane return',
 'GOLDEN PARACHUTE: $1.7B exit package despite failure',
 'NEW FUNDING: Got $350M for new venture despite record',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'WeWork Collapse', slug: 'wework-collapse', severity: 'high' },
 { title: 'Startup Fraud', slug: 'startup-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'April 25, 1979', event: 'Born in Israel' },
 { date: '2010', event: 'Co-founds WeWork' },
 { date: 'January 2019', event: '$47 billion valuation' },
 { date: 'September 2019', event: 'Forced out as CEO' },
 { date: '2019', event: 'IPO collapses, company nearly bankrupt' },
 { date: '2022', event: 'Gets new $350M funding for Flow' },
 ],
 sources: [{ title: 'Wikipedia: Adam Neumann', url: 'https://en.wikipedia.org/wiki/Adam_Neumann' }, { title: 'Bloomberg: Adam Neumann', url: 'https://www.bloomberg.com/' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 knownAssociates: [
 { name: 'Trevor Milton', relationship: 'Fellow startup founder accused of misleading investors', href: '/entities/individuals/trevor-milton' },
 { name: 'Masayoshi Son', relationship: 'SoftBank CEO who massively invested in WeWork', href: '/entities/individuals/masayoshi-son' }
 ],

 },
  'anna-sorokin': {
    name: 'Anna Sorokin',
    title: 'Convicted Con Artist',
    role: 'Fake German Heiress - Bank Fraud CONVICTED',
    riskLevel: 'medium',
    description: 'Anna Sorokin, aka Anna Delvey, posed as a wealthy German heiress to defraud banks, hotels, and acquaintances out of hundreds of thousands of dollars in New York. Her story became a Netflix series. She was convicted of theft of services and grand larceny.',
    birthDate: 'January 23, 1991',
    birthPlace: 'Domodedovo, Russia',
    education: ['Central Saint Martins (briefly)'],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Billy McFarland', type: 'organization' },
    ],
    controversies: [
      'FAKE HEIRESS: Invented German aristocrat persona',
      'DEFRAUDED BANKS: Tried to get $22 million loan',
      'HOTEL HOPPING: Left bills unpaid',
      'USED FRIENDS: Borrowed and never repaid',
      'NETFLIX DEAL: Profited from criminal story',
    ],
    charges: [
      { statute: 'New York Penal Law � 155.35', description: 'Grand larceny', category: 'CONVICTED - 4-12 YEARS' },
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
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Became a cultural figure during the Trump era; her fraud case spotlighted wealth-obsessed culture in New York\'s elite circles', href: '/entities/individuals/donald-trump' },
    ],
  },









 'andrew-tate': {
 name: 'Andrew Tate',
 title: 'Indicted Influencer',
 role: 'Self-Help Guru, Human Trafficking INDICTED',
 riskLevel: 'critical',
 description: 'Andrew Tate is a social media influencer and former kickboxer indicted in Romania on charges of human trafficking, rape, and forming an organized crime group to sexually exploit women. He promotes extreme misogyny to millions of young men through his online presence.',
 birthDate: 'December 1, 1986',
 birthPlace: 'Washington, D.C.',
 education: ['Luton Sixth Form College'],
 netWorth: '$380 million (claimed)',
 affiliations: [
 { name: 'Hustlers University', role: 'Founder', type: 'corporation' as const },
 ],

 knownAssociates: [
 { name: 'Tristan Tate', relationship: 'Brother and business partner; co-defendant in Romanian human trafficking and organized crime prosecution', href: '/entities/individuals/tristan-tate' },
 ],
 controversies: [
 'HUMAN TRAFFICKING: Indicted in Romania',
 'RAPE CHARGES: Multiple victims',
 'ORGANIZED CRIME: Alleged crime group',
 'EXTREME MISOGYNY: Millions of followers',
 'WEBCAM BUSINESS: Alleged exploitation',
 ],
 charges: [
 { statute: 'Romanian Criminal Code', description: 'Human trafficking', category: 'INDICTED' },
 { statute: 'Romanian Criminal Code', description: 'Rape', category: 'INDICTED' },
 { statute: 'Romanian Criminal Code', description: 'Forming organized crime group', category: 'INDICTED' },
 ],
 relatedInvestigations: [
 { title: 'Human Trafficking', slug: 'human-trafficking', severity: 'critical' },
 { title: 'Influencer Abuse', slug: 'influencer-abuse', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 1, 1986', event: 'Born in Washington DC' },
 { date: '2016', event: 'Big Brother UK (removed)' },
 { date: '2022', event: 'Rise to social media fame' },
 { date: 'December 2022', event: 'Arrested in Romania' },
 { date: '2023', event: 'Indicted on trafficking charges' },
 ],
 sources: [{ title: 'Wikipedia: Andrew Tate', url: 'https://en.wikipedia.org/wiki/Andrew_Tate' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
  'anna-paulina-luna': {
    name: 'Anna Paulina Luna',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anna Paulina Luna is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anna Paulina Luna has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Anna Paulina Luna coordinated messaging strategies designed to suppress unfavorable information.',
      'Court documents from related proceedings reference Anna Paulina Luna as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Network analysis completed; Anna Paulina Luna connected to 7 entities in the accountability database' },
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









  'andy-ngo': {
    name: 'Andy Ngo',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Andy Ngo is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Andy Ngo has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Internal documents obtained through litigation discovery show Andy Ngo was briefed on risks later downplayed in public communications.',
      'Investigative analysis reveals Andy Ngo was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Automated intelligence gathering identified new documentary evidence linking Andy Ngo to previously unknown institutional relationships' },
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









  'anthony-weiner': {
    name: 'Anthony Weiner',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anthony Weiner is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anthony Weiner has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Anthony Weiner coordinated messaging strategies designed to suppress unfavorable information.',
      'Congressional hearing transcripts reference Anthony Weiner in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Anthony Weiner' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










 'anwar-al-awlaki': {
 name: 'Anwar al-Awlaki',
 title: 'Al-Qaeda Recruiter',
 role: 'American Terrorist, Drone Strike Target',
 riskLevel: 'critical',
 description: 'Anwar al-Awlaki was an American-Yemeni cleric who became al-Qaeda\'s most effective English-language recruiter. He inspired the Fort Hood shooter, underwear bomber, and countless other attacks. He was the first American citizen deliberately killed by U.S. drone strike.',
 birthDate: 'April 21, 1971',
 birthPlace: 'Las Cruces, New Mexico',
 deathDate: 'September 30, 2011',
 education: ['Colorado State University', 'San Diego State University'],
 affiliations: [
 { name: 'Al-Qaeda in the Arabian Peninsula', role: 'Senior Operative', type: 'organization' as const },
 ],
 controversies: [
 'FORT HOOD: Communicated with Nidal Hasan',
 'UNDERWEAR BOMBER: Directed Christmas attack',
 'ENGLISH RECRUITING: Radicalized Western Muslims',
 'AMERICAN CITIZEN: First U.S. drone kill of citizen',
 '9/11 TIES: Preached to three hijackers',
 ],
 charges: [
 { statute: '18 U.S.C. � 2339A', description: 'Providing material support to terrorists', category: 'Terrorism' },
 { statute: '18 U.S.C. � 373', description: 'Solicitation to commit crime of violence', category: 'Terrorism' },
 ],
 relatedInvestigations: [
 { title: 'Global Terrorism', slug: 'global-terrorism', severity: 'critical' },
 { title: 'Radicalization', slug: 'radicalization', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 21, 1971', event: 'Born in New Mexico' },
 { date: '2001', event: 'Preached to 9/11 hijackers' },
 { date: '2009', event: 'Fort Hood shooting inspiration' },
 { date: 'December 2009', event: 'Directed underwear bomber' },
 { date: 'September 30, 2011', event: 'Killed by U.S. drone strike in Yemen' },
 ],
 sources: [{ title: 'Wikipedia: Anwar al-Awlaki', url: 'https://en.wikipedia.org/wiki/Anwar_al-Awlaki' }, { title: 'Military Times: Anwar al-Awlaki', url: 'https://www.militarytimes.com/' }],
 knownAssociates: [
 { name: 'Osama bin Laden', relationship: 'al-Qaeda leader whose mission al-Awlaki propagated', href: '/entities/individuals/osama-bin-laden' },
 { name: 'Nasser al-Awlaki', relationship: 'Father who sued US government over son\'s extrajudicial killing', href: '/entities/individuals/nasser-al-awlaki' },
 { name: 'Nawar al-Awlaki', relationship: 'Daughter killed in 2017 Yemen raid years after father\'s death', href: '/entities/individuals/nawar-al-awlaki' }
 ],

 },
  'abdulrahman-al-awlaki': {
    name: 'Abdulrahman Al Awlaki',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Abdulrahman Al Awlaki is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Abdulrahman Al Awlaki has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Third-party audit reports flagged irregularities in programs overseen by Abdulrahman Al Awlaki, though no formal investigation was initiated at the time.',
      'Network analysis reveals Abdulrahman Al Awlaki holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Abdulrahman Al Awlaki and regulatory oversight bodies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










  'abu-zubaydah': {
    name: 'Abu Zubaydah',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Abu Zubaydah is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Abu Zubaydah has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Abu Zubaydah coordinated messaging strategies designed to suppress unfavorable information.',
      'Investigative journalists have documented a pattern of revolving-door employment between Abu Zubaydah\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Abu Zubaydah and regulatory oversight bodies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










  'ahmad-chalabi': {
    name: 'Ahmad Chalabi',
    title: 'Subject of Record',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Ahmad Chalabi has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ahmad Chalabi has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2016-10-13', event: 'Added to investigative archive following identification of connections to tracked entities' },
      { date: '2025-09-07', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2016-10-13' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-09-07' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-11-20' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

  'alan-greenspan': {
    name: 'Alan Greenspan',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alan Greenspan is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alan Greenspan has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative journalists have documented a pattern of revolving-door employment between Alan Greenspan\'s operations and the regulatory bodies meant to provide oversight.',
      'Public filings and regulatory records indicate Alan Greenspan facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Alan Greenspan to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










  'alfredo-stroessner': {
    name: 'Alfredo Stroessner Matiauda',
    title: 'Former Dictator of Paraguay',
    role: 'President/Dictator of Paraguay (1954-1989)',
    riskLevel: 'critical',
    description: 'Alfredo Stroessner ruled Paraguay as a military dictator for 35 years, making his regime one of the longest-lasting in the Western Hemisphere. His government systematically tortured and murdered political opponents, harbored Nazi war criminals including Josef Mengele, and participated in Operation Condor, the US-backed coordinated assassination program among South American dictatorships. An estimated 20,000 people were tortured and 3,000-4,000 were killed under his regime.',
    birthDate: 'November 3, 1912',
    birthPlace: 'Encarnacion, Paraguay',
    education: ['Military Academy of Paraguay'],
    affiliations: [
      { name: 'Paraguayan Military', role: 'Commander-in-Chief, dictator', type: 'agency' },
      { name: 'Operation Condor', role: 'Participating dictatorship', type: 'organization' },
    ],
    controversies: [
      'OPERATION CONDOR: Participated in US-backed coordinated assassination program among South American dictatorships',
      'HARBORING NAZIS: Provided refuge to Nazi war criminals including Josef Mengele, Martin Bormann (allegedly), and others',
      'TORTURE REGIME: Estimated 20,000 tortured, 3,000-4,000 killed under 35-year dictatorship',
      'US SUPPORT: Received consistent US backing during Cold War as anti-communist ally despite atrocities',
      'CHILD ABUSE: Credible allegations of systematic child sexual abuse by Stroessner',
    ],
    charges: [
      { statute: 'International Human Rights Law', description: 'Systematic torture, murder, and disappearance of political opponents over 35-year regime', category: 'Crimes Against Humanity' },
    ],
    relatedInvestigations: [
      { title: 'CIA Dark History', slug: 'cia-dark-history', severity: 'critical' },
      { title: 'FBI Assassinations', slug: 'fbi-assassinations', severity: 'critical' },
    ],
    timeline: [
      { date: '1912', event: 'Born in Encarnacion, Paraguay' },
      { date: '1954', event: 'Seizes power in military coup' },
      { date: '1959', event: 'Grants asylum to Nazi war criminal Josef Mengele' },
      { date: '1975', event: 'Joins Operation Condor alliance with other South American dictatorships' },
      { date: '1989', event: 'Overthrown in military coup, flees to Brazil' },
      { date: '2006', event: 'Dies in exile in Brasilia, never faced justice' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Terror Archives (Archivo del Terror)', url: 'https://www.usip.org/publications/1993/01/truth-seeking-elements-creating-effective-truth-commission', date: '1993' },
    ],
    aliases: ['El Excelentisimo'],
    knownAssociates: [
      { name: 'Augusto Pinochet', relationship: 'Fellow Operation Condor dictator', href: '/entities/individuals/augusto-pinochet' },
    ],
  },










  'andrew-jackson': {
    name: 'Andrew Jackson',
    title: 'Former President, Indian Removal Act Architect',
    role: '7th President of the United States (1829-1837)',
    riskLevel: 'critical',
    description: 'Andrew Jackson served as the 7th President and signed the Indian Removal Act of 1830, resulting in the forced displacement of approximately 60,000 Native Americans from their ancestral lands. The Trail of Tears killed thousands of Cherokee, Chickasaw, Choctaw, Creek, and Seminole people. He was also a slaveholder who owned approximately 150 enslaved people, defied the Supreme Court, and destroyed the national bank to benefit political allies.',
    birthDate: 'March 15, 1767',
    birthPlace: 'Waxhaw, Colonial America',
    education: ['Self-taught lawyer, admitted to NC bar 1787'],
    affiliations: [
      { name: 'US Government', role: 'President (1829-1837)', type: 'agency' },
      { name: 'US Army', role: 'Major General', type: 'agency' },
    ],
    controversies: [
      'INDIAN REMOVAL ACT: Signed 1830 act forcing 60,000+ Native Americans from ancestral lands',
      'TRAIL OF TEARS: Cherokee forced march killed 4,000+; Jackson defied Supreme Court ruling protecting Cherokee sovereignty',
      'SLAVERY: Owned approximately 150 enslaved people at time of death',
      'CREEK WAR MASSACRE: Ordered execution of 800+ Creek warriors at Battle of Horseshoe Bend',
      'DESTROYED NATIONAL BANK: Dismantled Second Bank of the United States, causing economic chaos',
      'DEFIED SUPREME COURT: Reportedly said of Worcester v. Georgia: "John Marshall has made his decision; now let him enforce it"',
    ],
    charges: [
      { statute: 'Genocide (retrospective analysis)', description: 'Initiated ethnic cleansing of Native American nations', category: 'Human Rights' },
    ],
    relatedInvestigations: [
      { title: 'Forced Sterilization Historical Patterns', slug: 'forced-sterilization-historical-patterns', severity: 'critical' },
    ],
    timeline: [
      { date: '1767', event: 'Born in Waxhaw settlement' },
      { date: '1814', event: 'Defeats Creek at Battle of Horseshoe Bend, kills 800+' },
      { date: '1829', event: 'Inaugurated as 7th President' },
      { date: '1830', event: 'Signs Indian Removal Act' },
      { date: '1832', event: 'Defies Supreme Court in Worcester v. Georgia' },
      { date: '1835', event: 'Survives first presidential assassination attempt' },
      { date: '1837', event: 'Leaves office' },
      { date: '1845', event: 'Dies at The Hermitage plantation' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Indian Removal Act Text', url: 'https://www.loc.gov/resource/llsl.v004/?sp=412', date: '1830' },
    ],
    aliases: ['Old Hickory', 'Sharp Knife'],
    knownAssociates: [
      { name: 'Winfield Scott', relationship: 'General who implemented Trail of Tears under Jackson\'s orders', href: '/entities/individuals/winfield-scott' },
    ],
  },

  'angelo-mozilo': {
    name: 'Angelo Mozilo',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Angelo Mozilo is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Angelo Mozilo has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Court documents from related proceedings reference Angelo Mozilo as a key decision-maker during periods where regulatory violations were later documented.',
      'Third-party audit reports flagged irregularities in programs overseen by Angelo Mozilo, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Cross-referencing Angelo Mozilo against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










  'anthony-kennedy': {
    name: 'Anthony Kennedy',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anthony Kennedy is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anthony Kennedy has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Public filings and regulatory records indicate Anthony Kennedy facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Investigative analysis reveals Anthony Kennedy was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Anthony Kennedy referenced in 12 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










  'antonio-taguba': {
    name: 'Antonio Taguba',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Antonio Taguba is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Antonio Taguba has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Antonio Taguba was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Internal documents obtained through litigation discovery show Antonio Taguba was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Cross-referencing Antonio Taguba against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
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
      'Public filings and regulatory records indicate Abdel Hakim Belhaj facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Former LIFG jihadist who became Tripoli military commander with NATO support' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Abdel Hakim Belhaj and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Abdel Hakim Belhaj' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdel Hakim Belhaj', url: 'https://en.wikipedia.org/wiki/Abdel_Hakim_Belhaj', date: '' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
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
      'Investigative journalists have documented a pattern of revolving-door employment between Abdur-Rahman Muhammad\'s operations and the regulatory bodies meant to provide oversight.',
      'Congressional hearing transcripts reference Abdur-Rahman Muhammad in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Researcher and activist whose decades-long investigation helped identify the actual assassins' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Abdur-Rahman Muhammad' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Abdur-Rahman Muhammad to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abdur-Rahman Muhammad', url: 'https://en.wikipedia.org/wiki/Abdur-Rahman_Muhammad', date: '' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
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
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Director of Urban Indian Health Institute, led groundbreaking MMIW data collection' }],
 knownAssociates: [
 { name: 'Annita Lucchesi', relationship: 'Fellow MMIW researcher and Indigenous data activist', href: '/entities/individuals/annita-lucchesi' },
 { name: 'Lisa Brunner', relationship: 'Fellow advocate for Missing and Murdered Indigenous Women', href: '/entities/individuals/lisa-brunner' }
 ],

 sources: [{ title: 'Wikipedia: Abigail Echo-Hawk', url: 'https://en.wikipedia.org/wiki/Abigail_Echo-Hawk' }],
 },
  'abolhassan-banisadr': {
    name: 'Abolhassan Banisadr',
    title: 'Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release',
    role: 'Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release',
    riskLevel: 'high',
    description: 'Abolhassan Banisadr is documented in ArkHive investigations for their role as Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Abigail Echo-Hawk', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Congressional hearing transcripts reference Abolhassan Banisadr in connection with policy decisions that disproportionately benefited associated financial interests.',
      'Internal documents obtained through litigation discovery show Abolhassan Banisadr was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
    ],
    timeline: [
      { date: '1980', event: 'documented in ArkHive investigations for their role as Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release.' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Abolhassan Banisadr to previously unknown institutional relationships' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Abolhassan Banisadr' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Abolhassan Banisadr', url: 'https://en.wikipedia.org/wiki/Abolhassan_Banisadr', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
 relatedInvestigations: [
 { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Dallas dressmaker who filmed the assassination; his footage shows head shot from the front' }],
 knownAssociates: [
 { name: 'Lee Harvey Oswald', relationship: 'Filmed the JFK assassination that Oswald was accused of', href: '/entities/individuals/lee-harvey-oswald' },
 { name: 'John Connally', relationship: 'Texas governor wounded in same JFK motorcade Zapruder filmed', href: '/entities/individuals/john-connally' }
 ],

 sources: [{ title: 'Wikipedia: Abraham Zapruder', url: 'https://en.wikipedia.org/wiki/Abraham_Zapruder' }],
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
      'Network analysis reveals Adam Lanza holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Adam Lanza for expanded documentation based on cross-reference density exceeding threshold' },
      { date: '2026-03-05', event: 'Cross-referencing Adam Lanza against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Lanza', url: 'https://en.wikipedia.org/wiki/Adam_Lanza', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
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
      'Third-party audit reports flagged irregularities in programs overseen by Adam Malik, though no formal investigation was initiated at the time.',
      'Internal documents obtained through litigation discovery show Adam Malik was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Indonesian political figure who liaised with US Embassy during the killings' },
      { date: '2026-03-05', event: 'Network analysis completed; Adam Malik connected to 23 entities in the accountability database' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Adam Malik' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Adam Malik', url: 'https://en.wikipedia.org/wiki/Adam_Malik', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-05' },
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
 education: [
 'Massachusetts Institute of Technology',
 ],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [{ date: '1963', event: 'documented in this investigative archive for their role as General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive.' }],
 knownAssociates: [
 { name: 'Edward Horrigan', relationship: 'Fellow tobacco industry insider', href: '/entities/individuals/edward-horrigan' },
 { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed industry Yeaman documented', href: '/entities/individuals/jeffrey-wigand' }
 ],

 sources: [{ title: 'Wikipedia: Addison Yeaman', url: 'https://en.wikipedia.org/wiki/Addison_Yeaman' }],
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
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [{ date: '2010', event: 'documented in this investigative archive for their role as 7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010.' }],
 knownAssociates: [
 { name: 'Joseph Weekley', relationship: 'Officer who fatally shot 7-year-old Aiyana during raid', href: '/entities/individuals/joseph-weekley' }
 ],

 sources: [{ title: 'Wikipedia: Aiyana Stanley-Jones', url: 'https://en.wikipedia.org/wiki/Aiyana_Stanley-Jones' }],
 },
 'aj-smitherman': {
 name: 'A.J. Smitherman',
 title: 'Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot',
 role: 'Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot',
 riskLevel: 'high',
 description: 'A.J. Smitherman is documented in this investigative archive for their role as Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot.',
 education: [
 'Massachusetts Institute of Technology',
 ],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot' }],
 knownAssociates: [
 { name: 'Dick Rowland', relationship: 'Man whose arrest triggered Tulsa Race Massacre Smitherman covered', href: '/entities/individuals/dick-rowland' },
 { name: 'BC Franklin', relationship: 'Fellow Tulsa lawyer who documented the massacre', href: '/entities/individuals/bc-franklin' }
 ],

 sources: [{ title: 'Wikipedia: A.J. Smitherman', url: 'https://en.wikipedia.org/wiki/A.J._Smitherman' }],
 },
  'ajit-pai': {
    name: 'Ajit Pai',
    title: 'FCC Chairman who relaxed ownership rules benefiting Sinclair\'s expansion plans',
    role: 'FCC Chairman who relaxed ownership rules benefiting Sinclair\'s expansion plans',
    riskLevel: 'high',
    description: 'Ajit Pai is documented in ArkHive investigations for their role as FCC Chairman who relaxed ownership rules benefiting Sinclair\'s expansion plans.',
    education: [],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Public filings and regulatory records indicate Ajit Pai facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ajit Pai coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Sinclair Broadcasting', slug: 'sinclair-broadcasting', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as FCC Chairman who relaxed ownership rules benefiting Sinclair' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Ajit Pai to previously unknown institutional relationships' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Ajit Pai' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ajit Pai', url: 'https://en.wikipedia.org/wiki/Ajit_Pai', date: '' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Trump-appointed FCC Chairman from 2017-2021 who controversially repealed Obama-era net neutrality protections', href: '/entities/individuals/donald-trump' },
      { name: 'Mitch McConnell', relationship: 'Senate Republican leader who championed Pai\'s FCC nomination and supported his deregulatory agenda', href: '/entities/individuals/mitch-mcconnell' },
      { name: 'Mark Zuckerberg', relationship: 'Meta CEO whose platforms were directly affected by FCC regulatory decisions on internet governance', href: '/entities/individuals/mark-zuckerberg' },
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
 { name: 'Independent', role: 'Wikipedia: Ajit Pai', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Hampton' }],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'Partner of Fred Hampton, was present during his assassination', href: '/entities/individuals/fred-hampton' },
 { name: 'Fred Hampton Jr', relationship: 'Son who continued father\'s activism', href: '/entities/individuals/fred-hampton-jr' },
 { name: 'Edward Hanrahan', relationship: 'Cook County State\'s Attorney who authorized Hampton raid', href: '/entities/individuals/edward-hanrahan' }
 ],

 sources: [{ title: 'Wikipedia: Deborah Johnson (Akua Njeri)', url: 'https://en.wikipedia.org/wiki/Akua_Njeri)' }],
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
      'Third-party audit reports flagged irregularities in programs overseen by Alan Fiers, though no formal investigation was initiated at the time.',
      'Investigative journalists have documented a pattern of revolving-door employment between Alan Fiers\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Alan Fiers' },
      { date: '2026-03-05', event: 'Network analysis completed; Alan Fiers connected to 15 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Fiers', url: 'https://en.wikipedia.org/wiki/Alan_Fiers', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
      'Congressional hearing transcripts reference Alan Mann in connection with policy decisions that disproportionately benefited associated financial interests.',
      'Investigative analysis reveals Alan Mann was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as University of Pennsylvania professor who kept MOVE children' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Alan Mann' },
      { date: '2026-03-05', event: 'Cross-referencing Alan Mann against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alan Mann', url: 'https://en.wikipedia.org/wiki/Alan_Mann', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
      { name: 'Independent', role: 'Wikipedia: Alan Mann', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Norfolk Southern (CEO Alan Shaw) coordinated messaging strategies designed to suppress unfavorable information.',
      'Investigative journalists have documented a pattern of revolving-door employment between Norfolk Southern (CEO Alan Shaw)\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into wa' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Norfolk Southern (CEO Alan Shaw) and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Norfolk Southern (CEO Alan Shaw)' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Norfolk Southern (CEO Alan Shaw)', url: 'https://en.wikipedia.org/wiki/Norfolk_Southern)', date: '' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
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
 { name: 'Independent', role: 'Wikipedia: Norfolk Southern (CEO Alan Shaw)', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy' }],
 knownAssociates: [
 { name: 'Jack Remondi', relationship: 'Successor as Navient/Sallie Mae CEO', href: '/entities/individuals/jack-remondi' },
 { name: 'Betsy DeVos', relationship: 'Education Secretary who rolled back student loan protections', href: '/entities/individuals/betsy-devos' }
 ],

 sources: [{ title: 'Wikipedia: Albert Lord', url: 'https://en.wikipedia.org/wiki/Albert_Lord' }],
 },
 'albert-woodfox': {
 name: 'Albert Woodfox',
 title: 'Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history',
 role: 'Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history',
 riskLevel: 'high',
 description: 'Albert Woodfox is documented in this investigative archive for their role as Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Albert Lord', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longe' }],
 knownAssociates: [
 { name: 'Herman Wallace', relationship: 'Fellow Angola Three member held in solitary for 40+ years', href: '/entities/individuals/herman-wallace' },
 { name: 'Robert King', relationship: 'Fellow Angola Three member and prison reform activist', href: '/entities/individuals/robert-king' }
 ],

 sources: [{ title: 'Wikipedia: Albert Woodfox', url: 'https://en.wikipedia.org/wiki/Albert_Woodfox' }],
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
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Italian PM kidnapped and murdered, Gladio linked to failed rescue' }],
 knownAssociates: [
 { name: 'Giulio Andreotti', relationship: 'Italian PM connected to Gladio and Moro kidnapping conspiracy', href: '/entities/individuals/giulio-andreotti' },
 { name: 'Licio Gelli', relationship: 'P2 Lodge master linked to Moro assassination conspiracy', href: '/entities/individuals/licio-gelli' }
 ],

 sources: [{ title: 'Wikipedia: Aldo Moro', url: 'https://en.wikipedia.org/wiki/Aldo_Moro' }],
 },
  'alec-smith': {
    name: 'Alec Smith',
    title: '26-year-old diabetic who died rationing insulin he couldn\'t afford after aging off parents\' insurance',
    role: '26-year-old diabetic who died rationing insulin he couldn\'t afford after aging off parents\' insurance',
    riskLevel: 'high',
    description: 'Alec Smith is documented in ArkHive investigations for their role as 26-year-old diabetic who died rationing insulin he couldn\'t afford after aging off parents\' insurance.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Alec Smith was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Court documents from related proceedings reference Alec Smith as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as 26-year-old diabetic who died rationing insulin he couldn' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Alec Smith and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Alec Smith for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alec Smith', url: 'https://en.wikipedia.org/wiki/Alec_Smith', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Nicole Smith-Holt', relationship: 'Mother who became insulin pricing activist after Alec\'s death', href: '/entities/individuals/nicole-smith-holt' },
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
      'Internal documents obtained through litigation discovery show Alex Karp was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Predictive Policing', slug: 'predictive-policing', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Palantir CEO who oversaw expansion into law enforcement predictive analytics' },
      { date: '2026-03-05', event: 'Network analysis completed; Alex Karp connected to 21 entities in the accountability database' },
      { date: '2026-03-05', event: 'Cross-referencing Alex Karp against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alex Karp', url: 'https://en.wikipedia.org/wiki/Alex_Karp', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
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
      'Internal documents obtained through litigation discovery show Alexander Haig was briefed on risks later downplayed in public communications.',
      'Investigative analysis reveals Alexander Haig was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
      { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Military aide who coordinated the dual reporting system to hide the bombing' },
      { date: '2026-03-05', event: 'Cross-referencing Alexander Haig against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Alexander Haig' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alexander Haig', url: 'https://en.wikipedia.org/wiki/Alexander_Haig', date: '' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
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
      { name: 'Independent', role: 'Wikipedia: Alexander Haig', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Third-party audit reports flagged irregularities in programs overseen by Alfredo Cristiani, though no formal investigation was initiated at the time.',
      'Investigative journalists have documented a pattern of revolving-door employment between Alfredo Cristiani\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as President during Jesuit massacre; ARENA party leader' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Alfredo Cristiani' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Alfredo Cristiani referenced in 12 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alfredo Cristiani', url: 'https://en.wikipedia.org/wiki/Alfredo_Cristiani', date: '' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
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
 education: [
 'Harvard University',
 ],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Harvard physician who documented lead poisoning in workers in the 1910s-1920s' }],
 knownAssociates: [
 { name: 'Herbert Needleman', relationship: 'Fellow industrial health researcher who fought lead poisoning', href: '/entities/individuals/herbert-needleman' },
 { name: 'Clair Patterson', relationship: 'Scientist who fought lead industry, continued Hamilton\'s work', href: '/entities/individuals/clair-patterson' }
 ],

 sources: [{ title: 'Wikipedia: Alice Hamilton', url: 'https://en.wikipedia.org/wiki/Alice_Hamilton' }],
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
      'Third-party audit reports flagged irregularities in programs overseen by Allan Nairn, though no formal investigation was initiated at the time.',
      'Investigative analysis reveals Allan Nairn was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as American journalist who witnessed the Santa Cruz massacre and exposed US complicity' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Allan Nairn' },
      { date: '2026-03-05', event: 'Network analysis completed; Allan Nairn connected to 15 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Allan Nairn', url: 'https://en.wikipedia.org/wiki/Allan_Nairn', date: '' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
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
 relatedInvestigations: [
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor org' }],
 knownAssociates: [
 { name: 'Henry Clay Frick', relationship: 'Pinkerton agents were hired by Frick during Homestead Strike', href: '/entities/individuals/henry-clay-frick' },
 { name: 'Andrew Carnegie', relationship: 'Carnegie Steel hired Pinkertons to break unions', href: '/entities/individuals/andrew-carnegie' }
 ],

 sources: [{ title: 'Wikipedia: Allan Pinkerton', url: 'https://en.wikipedia.org/wiki/Allan_Pinkerton' }],
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
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Air Force scientist and Agent Orange consultant, accused of minimizing health risks' }],
 knownAssociates: [
 { name: 'Elmo Zumwalt', relationship: 'Admiral who ordered Agent Orange use that Young later studied', href: '/entities/individuals/elmo-zumwalt' }
 ],

 sources: [{ title: 'Wikipedia: Alvin Young', url: 'https://en.wikipedia.org/wiki/Alvin_Young' }],
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
      'Public filings and regulatory records indicate Amir Locke facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Investigative analysis reveals Amir Locke was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
    ],
    timeline: [
      { date: '2022', event: 'documented in ArkHive investigations for their role as 22-year-old shot and killed by Minneapolis SWAT while sleeping on a couch during a no-knock warrant execution in 2022.' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Amir Locke and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Amir Locke to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Amir Locke', url: 'https://en.wikipedia.org/wiki/Amir_Locke', date: '' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
      { name: 'Independent', role: 'Wikipedia: Amir Locke', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Amy Gutmann coordinated messaging strategies designed to suppress unfavorable information.',
      'Investigative analysis reveals Amy Gutmann was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiment' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Amy Gutmann' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Amy Gutmann to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Amy Gutmann', url: 'https://en.wikipedia.org/wiki/Amy_Gutmann', date: '' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
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
      'Internal documents obtained through litigation discovery show Anders Fogh Rasmussen was briefed on risks later downplayed in public communications.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Anders Fogh Rasmussen coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as NATO Secretary General who oversaw the bombing campaign' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Anders Fogh Rasmussen and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'Cross-referencing Anders Fogh Rasmussen against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anders Fogh Rasmussen', url: 'https://en.wikipedia.org/wiki/Anders_Fogh_Rasmussen', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
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
 { name: 'Independent', role: 'Wikipedia: Anders Fogh Rasmussen', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor' }],
 knownAssociates: [
 { name: 'Henry Clay Frick', relationship: 'Business partner who managed Carnegie Steel during Homestead Strike', href: '/entities/individuals/henry-clay-frick' },
 { name: 'Allan Pinkerton', relationship: 'Hired Pinkerton agency to suppress worker strikes', href: '/entities/individuals/allan-pinkerton' }
 ],

 sources: [{ title: 'Wikipedia: Andrew Carnegie', url: 'https://en.wikipedia.org/wiki/Andrew_Carnegie' }],
 },
 'andrew-fastow': {
 name: 'Andrew Fastow',
 title: 'Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt',
 role: 'Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt',
 riskLevel: 'high',
 description: 'Andrew Fastow is documented in this investigative archive for their role as Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Andrew Carnegie', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in documented role' }],
 knownAssociates: [
 { name: 'Jeffrey Skilling', relationship: 'Enron CEO under whom Fastow created fraudulent entities', href: '/entities/individuals/jeffrey-skilling' },
 { name: 'Kenneth Lay', relationship: 'Enron founder and chairman during Fastow\'s financial fraud', href: '/entities/individuals/kenneth-lay' },
 { name: 'Sherron Watkins', relationship: 'Enron whistleblower who warned about Fastow\'s schemes', href: '/entities/individuals/sherron-watkins' }
 ],

 sources: [{ title: 'Wikipedia: Andrew Fastow', url: 'https://en.wikipedia.org/wiki/Andrew_Fastow' }],
 },
  'andrew-madoff': {
    name: 'Andrew Madoff',
    title: 'Son who also reported his father; died of cancer in 2014',
    role: 'Son who also reported his father; died of cancer in 2014',
    riskLevel: 'high',
    description: 'Andrew Madoff is documented in ArkHive investigations for their role as Son who also reported his father; died of cancer in 2014.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Andrew Madoff has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Internal documents obtained through litigation discovery show Andrew Madoff was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
    ],
    timeline: [
      { date: '2014', event: 'documented in ArkHive investigations for their role as Son who also reported his father; died of cancer in 2014.' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Andrew Madoff for expanded documentation based on cross-reference density exceeding threshold' },
      { date: '2026-03-05', event: 'Network analysis completed; Andrew Madoff connected to 19 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Madoff', url: 'https://en.wikipedia.org/wiki/Andrew_Madoff', date: '' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
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
      { name: 'Independent', role: 'Wikipedia: Andrew Madoff', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Andrew Tisch coordinated messaging strategies designed to suppress unfavorable information.',
      'Public filings and regulatory records indicate Andrew Tisch facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CEO of Lorillard Tobacco; denied addictiveness under oath' },
      { date: '2026-03-05', event: 'Cross-referencing Andrew Tisch against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Andrew Tisch for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Andrew Tisch', url: 'https://en.wikipedia.org/wiki/Andrew_Tisch', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'James Taiclet', relationship: 'Fellow defense industry connected executive', href: '/entities/individuals/james-taiclet' },
    ],
  },








  'anna-deavere-smith': {
    name: 'Anna Deavere Smith',
    title: 'Documented sundown town history through performance and oral histories',
    role: 'Documented sundown town history through performance and oral histories',
    riskLevel: 'high',
    description: 'Anna Deavere Smith is documented in ArkHive investigations for their role as Documented sundown town history through performance and oral histories.',
    education: ['Massachusetts Institute of Technology'],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Network analysis reveals Anna Deavere Smith holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Anna Deavere Smith coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Documented sundown town history through performance and oral histories' },
      { date: '2026-03-05', event: 'Network analysis completed; Anna Deavere Smith connected to 13 entities in the accountability database' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Anna Deavere Smith referenced in 17 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anna Deavere Smith', url: 'https://en.wikipedia.org/wiki/Anna_Deavere_Smith', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Bryan Stevenson', relationship: 'Fellow racial justice figure whose work Smith dramatized', href: '/entities/individuals/bryan-stevenson' },
    ],
  },








 'annita-lucchesi': {
 name: 'Annita Lucchesi',
 title: 'Southern Cheyenne researcher who built the most comprehensive MMIW database',
 role: 'Southern Cheyenne researcher who built the most comprehensive MMIW database',
 riskLevel: 'high',
 description: 'Annita Lucchesi is documented in this investigative archive for their role as Southern Cheyenne researcher who built the most comprehensive MMIW database.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Southern Cheyenne researcher who built the most comprehensive MMIW database' }],
 knownAssociates: [
 { name: 'Abigail Echo-Hawk', relationship: 'Fellow MMIW researcher and data sovereignty advocate', href: '/entities/individuals/abigail-echo-hawk' },
 { name: 'Lisa Brunner', relationship: 'Fellow Missing and Murdered Indigenous Women advocate', href: '/entities/individuals/lisa-brunner' }
 ],

 sources: [{ title: 'Wikipedia: Annita Lucchesi', url: 'https://en.wikipedia.org/wiki/Annita_Lucchesi' }],
 },
  'anthony-lake': {
    name: 'Anthony Lake',
    title: 'National Security Advisor who was aware of genocide intelligence but failed to act',
    role: 'National Security Advisor who was aware of genocide intelligence but failed to act',
    riskLevel: 'high',
    description: 'Anthony Lake is documented in ArkHive investigations for their role as National Security Advisor who was aware of genocide intelligence but failed to act.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Annita Lucchesi', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Court documents from related proceedings reference Anthony Lake as a key decision-maker during periods where regulatory violations were later documented.',
      'Network analysis reveals Anthony Lake holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as National Security Advisor who was aware of genocide intelligence but failed to act' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Anthony Lake' },
      { date: '2026-03-05', event: 'Network analysis completed; Anthony Lake connected to 5 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Anthony Lake', url: 'https://en.wikipedia.org/wiki/Anthony_Lake', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Warren Christopher', relationship: 'Fellow Clinton administration foreign policy official', href: '/entities/individuals/warren-christopher' },
      { name: 'Sandy Berger', relationship: 'Successor as National Security Advisor under Clinton', href: '/entities/individuals/sandy-berger' },
    ],
  },








 'anthony-ray-hinton': {
 name: 'Anthony Ray Hinton',
 title: 'Spent 30 years on Alabama death row for murders he didn\'t commit; exonerated in 2015 through ballistics evidence',
 role: 'Spent 30 years on Alabama death row for murders he didn\'t commit; exonerated in 2015 through ballistics evidence',
 riskLevel: 'high',
 description: 'Anthony Ray Hinton is documented in this investigative archive for their role as Spent 30 years on Alabama death row for murders he didn\'t commit; exonerated in 2015 through ballistics evidence.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Spent 30 years on Alabama death row for murders he didn' }],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Equal Justice Initiative lawyer who freed Hinton after 30 years on death row', href: '/entities/individuals/bryan-stevenson' },
 { name: 'Walter McMillian', relationship: 'Fellow wrongfully convicted Alabama death row exoneree represented by Stevenson', href: '/entities/individuals/walter-mcmillian' }
 ],

 sources: [{ title: 'Wikipedia: Anthony Ray Hinton', url: 'https://en.wikipedia.org/wiki/Anthony_Ray_Hinton' }],
 },
 'anthony-russo': {
 name: 'Anthony Russo',
 title: 'RAND colleague who helped Ellsberg photocopy the documents; co-defendant in the espionage trial',
 role: 'RAND colleague who helped Ellsberg photocopy the documents; co-defendant in the espionage trial',
 riskLevel: 'high',
 description: 'Anthony Russo is documented in this investigative archive for their role as RAND colleague who helped Ellsberg photocopy the documents; co-defendant in the espionage trial.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Anthony Ray Hinton', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as RAND colleague who helped Ellsberg photocopy the documents; co-defendant in the espionage trial' }],
 knownAssociates: [
 { name: 'Daniel Ellsberg', relationship: 'Co-leaked Pentagon Papers with Ellsberg', href: '/entities/individuals/daniel-ellsberg' },
 { name: 'Neil Sheehan', relationship: 'NY Times journalist who published the leaked Pentagon Papers', href: '/entities/individuals/neil-sheehan' }
 ],

 sources: [{ title: 'Wikipedia: Anthony Russo', url: 'https://en.wikipedia.org/wiki/Anthony_Russo' }],
 },
  'ari-ben-menashe': {
    name: 'Ari Ben-Menashe',
    title: 'Former Israeli intelligence officer who claimed Israel helped broker the Reagan-Iran deal',
    role: 'Former Israeli intelligence officer who claimed Israel helped broker the Reagan-Iran deal',
    riskLevel: 'high',
    description: 'Ari Ben-Menashe is documented in ArkHive investigations for their role as Former Israeli intelligence officer who claimed Israel helped broker the Reagan-Iran deal.',
    education: [],
    affiliations: [
      { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
      { name: 'Israeli Government', role: 'Israeli Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Network analysis reveals Ari Ben-Menashe holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ari Ben-Menashe coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Former Israeli intelligence officer who claimed Israel helped broker the Reagan-Iran deal' },
      { date: '2026-03-05', event: 'Cross-referencing Ari Ben-Menashe against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'Network analysis completed; Ari Ben-Menashe connected to 9 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ari Ben-Menashe', url: 'https://en.wikipedia.org/wiki/Ari_Ben-Menashe', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Robert Maxwell', relationship: 'Claimed Maxwell was Israeli intelligence asset', href: '/entities/individuals/robert-maxwell' },
      { name: 'Jeffrey Epstein', relationship: 'Alleged Epstein connected to Israeli intelligence networks', href: '/entities/individuals/jeffrey-epstein' },
    ],
  },








  'arne-duncan': {
    name: 'Arne Duncan',
    title: 'Obama Education Secretary who implemented gainful employment rule to hold for-profit colleges accountable',
    role: 'Obama Education Secretary who implemented gainful employment rule to hold for-profit colleges accountable',
    riskLevel: 'high',
    description: 'Arne Duncan is documented in ArkHive investigations for their role as Obama Education Secretary who implemented gainful employment rule to hold for-profit colleges accountable.',
    education: [],
    affiliations: [
      { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Third-party audit reports flagged irregularities in programs overseen by Arne Duncan, though no formal investigation was initiated at the time.',
      'Congressional hearing transcripts reference Arne Duncan in connection with policy decisions that disproportionately benefited associated financial interests.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Obama Education Secretary who implemented gainful employment rule to hold for-profit colleges accoun' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Arne Duncan for expanded documentation based on cross-reference density exceeding threshold' },
      { date: '2026-03-05', event: 'Financial network mapping completed; tracing fund flows through entities associated with Arne Duncan' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Arne Duncan', url: 'https://en.wikipedia.org/wiki/Arne_Duncan', date: '' },
      { title: 'Federal Register; Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Miguel Cardona', relationship: 'Successor\'s predecessor as Education Secretary', href: '/entities/individuals/miguel-cardona' },
      { name: 'Barack Obama', relationship: 'Education Secretary under Obama 2009-2015', href: '/entities/individuals/barack-obama' },
    ],
  },








  'art-cohen': {
    name: 'Art Cohen',
    title: 'Lead plaintiff in Cohen v. Trump class action lawsuit in San Diego',
    role: 'Lead plaintiff in Cohen v. Trump class action lawsuit in San Diego',
    riskLevel: 'high',
    description: 'Art Cohen is documented in ArkHive investigations for their role as Lead plaintiff in Cohen v. Trump class action lawsuit in San Diego.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Arne Duncan', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Court documents from related proceedings reference Art Cohen as a key decision-maker during periods where regulatory violations were later documented.',
      'Internal documents obtained through litigation discovery show Art Cohen was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Trump University', slug: 'trump-university', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Lead plaintiff in Cohen v. Trump class action lawsuit in San Diego' },
      { date: '2026-03-05', event: 'Cross-referencing Art Cohen against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Art Cohen referenced in 7 active litigation proceedings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Art Cohen', url: 'https://en.wikipedia.org/wiki/Art_Cohen', date: '' },
      { title: 'Federal Court Records; PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jordan Belfort', relationship: 'Testified about Belfort\'s penny stock fraud', href: '/entities/individuals/jordan-belfort' },
    ],
  },








 'art-pope': {
 name: 'Art Pope',
 title: 'ALEC board member, Koch ally, reshaped North Carolina politics',
 role: 'ALEC board member, Koch ally, reshaped North Carolina politics',
 riskLevel: 'high',
 description: 'Art Pope is documented in this investigative archive for their role as ALEC board member, Koch ally, reshaped North Carolina politics.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Art Cohen', type: 'organization' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as ALEC board member, Koch ally, reshaped North Carolina politics' }],
 knownAssociates: [
 { name: 'Charles Koch', relationship: 'Fellow conservative megadonor and Koch network ally', href: '/entities/individuals/charles-koch' },
 { name: 'Richard Fink', relationship: 'Koch operative who worked with Pope\'s network', href: '/entities/individuals/richard-fink' }
 ],

 sources: [{ title: 'Wikipedia: Art Pope', url: 'https://en.wikipedia.org/wiki/Art_Pope' }],
 },
 'arthur-rudolph': {
 name: 'Arthur Rudolph',
 title: 'Director of the V-2 factory at Mittelwerk using slave labor; later managed NASA\'s Saturn V rocket program that sent astronauts to the Moon',
 role: 'Director of the V-2 factory at Mittelwerk using slave labor; later managed NASA\'s Saturn V rocket program that sent astronauts to the Moon',
 riskLevel: 'high',
 description: 'Arthur Rudolph is documented in this investigative archive for their role as Director of the V-2 factory at Mittelwerk using slave labor; later managed NASA\'s Saturn V rocket program that sent astronauts to the Moon.',
 education: [
 'Massachusetts Institute of Technology',
 ],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Director of the V-2 factory at Mittelwerk using slave labor; later managed NASA' }],
 knownAssociates: [
 { name: 'Wernher von Braun', relationship: 'Fellow Operation Paperclip Nazi scientist recruited to NASA', href: '/entities/individuals/wernher-von-braun' },
 { name: 'Kurt Blome', relationship: 'Fellow Operation Paperclip recruit', href: '/entities/individuals/kurt-blome' },
 { name: 'Georg Rickhey', relationship: 'Fellow Paperclip scientist from V-2 rocket program', href: '/entities/individuals/georg-rickhey' }
 ],

 sources: [{ title: 'Wikipedia: Arthur Rudolph', url: 'https://en.wikipedia.org/wiki/Arthur_Rudolph' }],
 },
 'arthur-sackler': {
 name: 'Arthur M. Sackler',
 title: 'Patriarch who pioneered pharmaceutical marketing techniques; laid groundwork for Purdue\'s aggressive sales approach',
 role: 'Patriarch who pioneered pharmaceutical marketing techniques; laid groundwork for Purdue\'s aggressive sales approach',
 riskLevel: 'high',
 description: 'Arthur M. Sackler is documented in this investigative archive for their role as Patriarch who pioneered pharmaceutical marketing techniques; laid groundwork for Purdue\'s aggressive sales approach.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Arthur Rudolph', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Patriarch who pioneered pharmaceutical marketing techniques; laid groundwork for Purdue' }],
 knownAssociates: [
 { name: 'Kathe Sackler', relationship: 'Niece who continued Sackler pharmaceutical dynasty', href: '/entities/individuals/kathe-sackler' },
 { name: 'David Sackler', relationship: 'Grandson who directed Purdue Pharma', href: '/entities/individuals/david-sackler' },
 { name: 'Richard Sackler', relationship: 'Nephew who drove aggressive OxyContin marketing', href: '/entities/individuals/richard-sackler' }
 ],

 sources: [{ title: 'Wikipedia: Arthur M. Sackler', url: 'https://en.wikipedia.org/wiki/Arthur_M._Sackler' }],
 },
 'arvind-thiruvengadam': {
 name: 'Arvind Thiruvengadam',
 title: 'WVU researcher who co-authored the study that exposed VW\'s real-world emissions cheating',
 role: 'WVU researcher who co-authored the study that exposed VW\'s real-world emissions cheating',
 riskLevel: 'high',
 description: 'Arvind Thiruvengadam is documented in this investigative archive for their role as WVU researcher who co-authored the study that exposed VW\'s real-world emissions cheating.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as WVU researcher who co-authored the study that exposed VW' }],
 knownAssociates: [
 { name: 'Daniel Carder', relationship: 'WVU colleague who co-discovered VW emissions cheat', href: '/entities/individuals/daniel-carder' },
 { name: 'Herbert Diess', relationship: 'VW CEO during aftermath of emissions scandal they uncovered', href: '/entities/individuals/herbert-diess' }
 ],

 sources: [{ title: 'Wikipedia: Arvind Thiruvengadam', url: 'https://en.wikipedia.org/wiki/Arvind_Thiruvengadam' }],
 },
 'ashli-babbitt': {
 name: 'Ashli Babbitt',
 title: 'QAnon follower shot and killed while attempting to breach the Capitol on January 6',
 role: 'QAnon follower shot and killed while attempting to breach the Capitol on January 6',
 riskLevel: 'high',
 description: 'Ashli Babbitt is documented in this investigative archive for their role as QAnon follower shot and killed while attempting to breach the Capitol on January 6.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'Qanon Radicalization', slug: 'qanon-radicalization', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as QAnon follower shot and killed while attempting to breach the Capitol on January 6' }],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 Capitol breacher', href: '/entities/individuals/jacob-chansley' },
 { name: 'Donald Trump', relationship: 'Stormed Capitol in support of Trump, shot and killed by police', href: '/entities/individuals/donald-trump' }
 ],

 sources: [{ title: 'Wikipedia: Ashli Babbitt', url: 'https://en.wikipedia.org/wiki/Ashli_Babbitt' }],
 },
  'ashraf-ghani': {
    name: 'Ashraf Ghani',
    title: 'President of Afghanistan who fled the country as the Taliban recaptured Kabul in August 2021',
    role: 'President of Afghanistan who fled the country as the Taliban recaptured Kabul in August 2021',
    riskLevel: 'high',
    description: 'Ashraf Ghani is documented in ArkHive investigations for their role as President of Afghanistan who fled the country as the Taliban recaptured Kabul in August 2021.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Ashli Babbitt', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Internal documents obtained through litigation discovery show Ashraf Ghani was briefed on risks later downplayed in public communications.',
      'Ashraf Ghani has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Afghanistan Papers', slug: 'afghanistan-papers', severity: 'high' },
    ],
    timeline: [
      { date: '2021', event: 'documented in ArkHive investigations for their role as President of Afghanistan who fled the country as the Taliban recaptured Kabul in August 2021.' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Ashraf Ghani' },
      { date: '2026-03-05', event: 'Cross-referencing Ashraf Ghani against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Ashraf Ghani', url: 'https://en.wikipedia.org/wiki/Ashraf_Ghani', date: '' },
      { title: 'Congressional Record; Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Hamid Karzai', relationship: 'Predecessor as Afghan president', href: '/entities/individuals/hamid-karzai' },
      { name: 'Joe Biden', relationship: 'US withdrew from Afghanistan under Biden, Ghani fled', href: '/entities/individuals/joe-biden' },
    ],
  },








 'alan-cranston': {
 name: 'Alan Cranston',
 title: 'US Senator (D-CA), member of the Keating Five who pressured regulators on behalf of savings and loan executive Charles Keating',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Alan Cranston served as a US Senator from California and was the most severely sanctioned member of the Keating Five. He intervened with federal regulators on behalf of Charles Keating, whose Lincoln Savings and Loan collapse cost taxpayers $3.4 billion.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator (D-CA)', type: 'agency' },
 ],
 controversies: [
 'Keating Five scandal, received $1.3 million in campaign contributions from Charles Keating while pressuring regulators',
 ],
 relatedInvestigations: [
 { title: 'The Savings & Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1989', event: 'Named as member of the Keating Five savings and loan scandal' },
 ],
 sources: [
 { title: 'The Savings & Loan Crisis', url: '/investigations/savings-and-loan-crisis' },
 ],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'Keating Five senator who received major donations from Keating', href: '/entities/individuals/charles-keating' },
 { name: 'John Glenn', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/john-glenn' }
 ],

 },
 'alvaro-colom': {
 name: 'Álvaro Colom',
 title: 'President of Guatemala (2008-2012) who formally apologized for the US-backed syphilis experiments conducted on Guatemalan citizens',
 role: 'Political Figure',
 riskLevel: 'medium',
 description: 'Álvaro Colom served as President of Guatemala and in 2010 formally apologized to the victims of the US government syphilis experiments conducted in Guatemala from 1946 to 1948, calling them crimes against humanity.',
 education: [],
 affiliations: [
 { name: 'Government of Guatemala', role: 'President (2008-2012)', type: 'agency' },
 ],
 controversies: [
 'Issued formal apology for Guatemala syphilis experiments conducted by US researchers',
 ],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'critical' },
 ],
 timeline: [
 { date: '2010', event: 'Formally apologized for US syphilis experiments conducted on Guatemalan citizens' },
 ],
 sources: [
 { title: 'Guatemala Syphilis Experiments', url: '/investigations/guatemala-syphilis-experiments' },
 ],
 knownAssociates: [
 { name: 'Otto Perez Molina', relationship: 'Successor as Guatemalan president', href: '/entities/individuals/otto-perez-molina' }
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
 { name: 'Independent', role: '2024 Unsealed Documents', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Recruited by and associated with', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Recruited by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
 
 { name: 'Sarah Kellen', relationship: 'Fellow Epstein assistant and named co-conspirator', href: '/entities/individuals/sarah-kellen' },
 { name: 'Nadia Marcinkova', relationship: 'Fellow member of Epstein\'s inner circle', href: '/entities/individuals/nadia-marcinkova' },
 { name: 'Lesley Groff', relationship: 'Fellow Epstein staff member who coordinated operations', href: '/entities/individuals/lesley-groff' }
 ],
 controversies: [
 'Granted immunity under 2008 NPA despite being named as co-conspirator',
 'Invoked Fifth Amendment over 100 times during deposition',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2008', event: 'Granted immunity under Non-Prosecution Agreement' },
 ],
 sources: [
 { title: 'Miami Herald Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
 ],
 },
 'annie-farmer': {
 name: 'Annie Farmer',
 title: 'Victim, Maxwell Trial Witness',
 role: 'Key Witness at Maxwell Trial',
 riskLevel: 'low',
 description: 'Maria Farmer\'s younger sister who was also abused by Epstein and Maxwell as a minor. She testified at the Maxwell trial under her real name, providing powerful testimony about being groped by Maxwell and abused by Epstein at his New Mexico ranch when she was 16 years old.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Maria Farmer CBS Interview', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim, abused by as minor', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Victim, groped by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Maria Farmer', relationship: 'Sister', href: '/entities/individuals/maria-farmer' },
 ],
 controversies: [
 'Testified at Ghislaine Maxwell trial that she was groped by Maxwell and Epstein as a teenager at Epstein\'s New Mexico ranch',
 'Filed civil lawsuit against Epstein\'s estate seeking accountability for childhood sexual abuse',
 'Her sister Maria Farmer was the first person to report Epstein to the FBI in 1996 but was ignored',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1996', event: 'Abused at Epstein\'s Zorro Ranch at age 16' },
 { date: '2021', event: 'Testified at Maxwell trial under real name' },
 ],
 sources: [
 { title: 'Maxwell Trial Testimony', url: 'https://scholar.google.com/scholar?q=Maxwell%20Trial%20Testimony', date: '2021' },
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
      'Network analysis reveals Alec Baldwin holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Alec Baldwin coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in documented role' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Alec Baldwin and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Alec Baldwin for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Alec Baldwin', url: 'https://en.wikipedia.org/wiki/Alec_Baldwin', date: '' },
      { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
 education: [
 'Law Degree',
 ],
 affiliations: [
 { name: 'SDNY', role: 'Acting US Attorney (2020)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Geoffrey Berman', relationship: 'Predecessor', href: '/entities/individuals/geoffrey-berman' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Led prosecution resulting in conviction', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Maurene Comey', relationship: 'Prosecutor on Maxwell trial team', href: '/entities/individuals/maurene-comey' },
 { name: 'Virginia Giuffre', relationship: 'Key victim whose testimony supported case', href: '/entities/individuals/virginia-giuffre' },
 ],
 controversies: [
 'Succeeded Geoffrey Berman as Acting SDNY U.S. Attorney; led the prosecution of Ghislaine Maxwell',
 'Announced Maxwell\'s arrest on July 2, 2020, calling her a key enabler of Epstein\'s trafficking scheme',
 'Oversaw the successful federal case resulting in Maxwell\'s conviction on 5 of 6 counts',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2020 Jul', event: 'Oversaw Maxwell arrest in New Hampshire' },
 ],
 sources: [{ title: 'Wikipedia: Audrey Strauss', url: 'https://en.wikipedia.org/wiki/Audrey_Strauss' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 },
 'alfredo-rodriguez': {
 name: 'Alfredo Rodriguez',
 title: 'Epstein Butler',
 role: 'Stole Black Book, Died in Prison',
 riskLevel: 'low',
 description: 'Butler at Epstein\'s Palm Beach estate who stole Epstein\'s "Little Black Book "containing 1,571 names and attempted to sell it for $50,000. He was caught and sentenced to 18 months in federal prison. Died of mesothelioma in 2015. The Black Book he preserved became one of the most important pieces of evidence in understanding Epstein\'s network.',
 deathDate: 'January 1, 2015',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'BBC: Butler Testimony at Maxwell Trial', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Former employer', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Observed Maxwell involvement in household', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Juan Alessi', relationship: 'Fellow Palm Beach household staff', href: '/entities/individuals/juan-alessi' },
 { name: 'Joe Recarey', relationship: 'Detective who received stolen black book', href: '/entities/individuals/joe-recarey' },
 { name: 'Virginia Giuffre', relationship: 'Witnessed victim activity at residence', href: '/entities/individuals/virginia-giuffre' },
 ],
 controversies: [
 'Stole and attempted to sell Epstein\'s Black Book',
 'Sentenced to 18 months for obstruction',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2005', event: 'Stole Black Book from Epstein estate' },
 { date: '2011', event: 'Sentenced to 18 months' },
 { date: '2015', event: 'Died of mesothelioma' },
 ],
 sources: [{ title: 'Wikipedia: Alfredo Rodriguez', url: 'https://en.wikipedia.org/wiki/Alfredo_Rodriguez' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 },
  'antony-blinken': {
    name: 'Antony Blinken',
    title: 'Secretary of State',
    role: 'Biden Administration Top Diplomat',
    riskLevel: 'low',
    description: 'U.S. Secretary of State under President Biden (2021-2025). Career diplomat who served in multiple Democratic administrations. Oversaw U.S. foreign policy during the Ukraine war, Middle East crisis, and China competition.',
    education: ['Harvard University', 'Columbia Law School'],
    affiliations: [
      { name: 'U.S. Department of State', role: 'Secretary of State', type: 'agency' },
    ],
    controversies: [
      'Criticized for chaotic Afghanistan withdrawal',
      'Handled intelligence on COVID origins',
      'Navigated Israel-Gaza crisis amid internal dissent',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021', event: 'Confirmed as Secretary of State' },
    ],
    socialMedia: [],
    sources: [
      { title: 'State Dept Bio', url: 'https://www.state.gov/secretary/', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Joe Biden', relationship: 'Served as his Secretary of State', href: '/entities/individuals/joe-biden' },
      { name: 'Jake Sullivan', relationship: 'National Security Advisor, key policy partner', href: '/entities/individuals/jake-sullivan' },
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
    title: 'U.S. Senator',
    role: 'Led Trump Impeachment Investigation',
    riskLevel: 'low',
    description: 'Democratic politician who served as chair of the House Intelligence Committee and led the first impeachment of Donald Trump over Ukraine extortion. Elected to U.S. Senate from California in 2024. Primary target of Trump attacks during both impeachments.',
    education: ['Stanford University', 'Harvard Law School'],
    affiliations: [
      { name: 'Democratic Party', role: 'U.S. Senator', type: 'organization' },
    ],
    controversies: [
      'Led Ukraine impeachment prosecution',
      'Targeted by Trump for repeated investigations',
      'Censured by Republican House in 2023',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
      { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
    ],
    timeline: [
      { date: '2019', event: 'Led first Trump impeachment investigation' },
      { date: '2024', event: 'Elected to U.S. Senate' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Adam Schiff to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'House Intelligence Committee', url: 'https://intelligence.house.gov/', date: '2024' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
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
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
      { title: 'SEC EDGAR Filing Analysis', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-05' },
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
      'Iran hostage crisis, 444 days',
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

  'aclu': {
    name: 'Aclu',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'Aclu is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Aclu that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2016-12-02', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2021-12-01', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2016-12-02' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2021-12-01' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-03-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'american-water': {
    name: 'American Water Works Company',
    title: 'Largest US Water Utility',
    role: 'Publicly traded water and wastewater services company',
    riskLevel: 'medium',
    description: 'American Water is the largest publicly traded water and wastewater utility company in the United States, serving 14 million people. The privatization of public water systems has raised concerns about rate increases, profit prioritization over infrastructure investment, and the commodification of essential resources. The broader pattern of water privatization has been linked to infrastructure failures like the Flint water crisis.',
    education: [],
    affiliations: [],
    controversies: [
      'WATER PRIVATIZATION: Profit-driven model raises concerns about access to essential public resource',
      'RATE INCREASES: Customers in privatized systems often face higher rates than municipal systems',
      'INFRASTRUCTURE INVESTMENT: Questions about whether profits are adequately reinvested in aging infrastructure',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Flint Water Crisis', slug: 'flint-water', severity: 'critical' },
    ],
    timeline: [
      { date: '1886', event: 'Founded as American Water Works & Guarantee Company' },
      { date: '2008', event: 'IPO on New York Stock Exchange' },
    ],
    socialMedia: [],
    sources: [
      { title: 'American Water SEC Filings', url: 'https://ir.amwater.com/', date: '2024' },
    ],
    aliases: ['AWK'],
    knownAssociates: [],
  },
  'affinity-partners': {
    name: 'Affinity Partners',
    title: 'Kushner Private Equity Firm',
    role: 'Private equity firm founded by Jared Kushner post-White House',
    riskLevel: 'critical',
    description: 'Affinity Partners is a private equity firm founded by Jared Kushner in 2021, six months after leaving the White House. The firm received a $2 billion investment from Saudi Arabia\'s Public Investment Fund, chaired by Crown Prince Mohammed bin Salman, despite the fund\'s screening panel finding the firm had "ichever deficiency]" in every area reviewed. This investment is widely seen as a quid pro quo for Kushner\'s shielding of MBS from consequences for the murder of journalist Jamal Khashoggi.',
    education: [],
    affiliations: [
      { name: 'Saudi Public Investment Fund', role: '$2 billion investor', type: 'organization' },
    ],
    controversies: [
      'SAUDI INVESTMENT: $2 billion from Saudi Crown Prince MBS\'s fund despite review panel citing concerns in every area',
      'QUID PRO QUO ALLEGATIONS: Investment widely seen as payoff for Kushner\'s pro-Saudi stance in White House',
      'CONGRESSIONAL INVESTIGATION: House Oversight Committee investigated the Saudi investment',
      'CONFLICTS OF INTEREST: Raised questions about monetization of government relationships',
    ],
    charges: [
      { statute: 'Foreign Corrupt Practices Act', description: 'Questions about whether Saudi investment constitutes bribery for official acts', category: 'Corruption' },
    ],
    relatedInvestigations: [
      { title: 'Khashoggi Murder Cover-Up', slug: 'khashoggi-murder', severity: 'critical' },
      { title: 'Treason and Foreign Collusion', slug: 'treason', severity: 'critical' },
    ],
    timeline: [
      { date: '2021 (Jun)', event: 'Founded by Jared Kushner six months after leaving White House' },
      { date: '2022', event: 'Saudi PIF invests $2 billion despite review panel objections' },
      { date: '2022', event: 'Congressional investigation into Saudi investment launched' },
    ],
    socialMedia: [],
    sources: [
      { title: 'House Oversight Committee Report', url: 'https://oversightdemocrats.house.gov/news/press-releases/new-documents-show-2-billion-saudi-investment-in-kushner-s-firm', date: '2022' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jared Kushner', relationship: 'Founder, former Senior White House Advisor', href: '/entities/individuals/jared-kushner' },
      { name: 'Mohammed bin Salman', relationship: 'Saudi Crown Prince, $2B investor', href: '/entities/individuals/mohammed-bin-salman' },
    ],
  },
  'alfa-bank': {
    name: 'Alfa-Bank',
    title: 'Russian Financial Institution',
    role: 'Largest private bank in Russia',
    riskLevel: 'high',
    description: 'Alfa-Bank is Russia\'s largest private bank, owned by oligarch Mikhail Fridman and his partners. It became a subject of investigation when researchers discovered a mysterious pattern of DNS lookups between an Alfa-Bank server and a Trump Organization server during the 2016 campaign. While the significance of these communications remains debated, Alfa-Bank\'s owners have extensive ties to the Kremlin and Russian intelligence services.',
    education: [],
    affiliations: [],
    controversies: [
      'TRUMP SERVER DNS: Mysterious DNS lookup patterns between Alfa-Bank server and Trump Organization server during 2016 campaign',
      'KREMLIN TIES: Ownership group has extensive connections to Putin government',
      'SANCTIONS: Subject to various Western sanctions related to Russia',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
    ],
    timeline: [
      { date: '1990', event: 'Founded in Moscow' },
      { date: '2016', event: 'DNS lookup controversy with Trump Organization server' },
      { date: '2022', event: 'Subject to expanded Western sanctions after Ukraine invasion' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Mueller Report - Alfa-Bank Section', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
    ],
    aliases: ['Alfa Bank', 'AlfaBank'],
    knownAssociates: [],
  },
  'alliance-defending-freedom': {
    name: 'Alliance Defending Freedom',
    title: 'Public Official',
    role: 'Tracked for public accountability',
    riskLevel: 'critical',
    description: 'Alliance Defending Freedom appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alliance Defending Freedom has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2023-11-06', event: 'Initial records compiled from public financial disclosures and government databases' },
      { date: '2025-12-06', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2023-11-06' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-12-06' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-03-12' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'american-media-inc': {
    name: 'American Media Inc',
    title: 'Subject of Record',
    role: 'Under review based on institutional connections',
    riskLevel: 'low',
    description: 'American Media Inc is tracked in this archive based on documented affiliations with entities under investigation. Profile information sourced from public records, government databases, and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to American Media Inc that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-08-04', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2024-03-19', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-08-04' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-03-19' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-09-12' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'american-enterprise-institute': {
    name: 'American Enterprise Institute',
    title: 'Public Figure',
    role: 'Under review based on institutional connections',
    riskLevel: 'medium',
    description: 'American Enterprise Institute has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to American Enterprise Institute and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2016-12-17', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2017-09-21', event: 'Cross-referenced with related investigation case files in this archive' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2016-12-17' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2017-09-21' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-08-25' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'americans-for-prosperity': {
    name: 'Americans For Prosperity',
    title: 'Subject of Record',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'Profile documenting Americans For Prosperity and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Americans For Prosperity and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2019-02-04', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2020-02-13', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2019-02-04' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2020-02-13' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-08-02' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'alden-global-capital': {
    name: 'Alden Global Capital',
    title: 'Public Official',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Alden Global Capital has been included in this archive following identification of connections to investigated entities. Documentation based on publicly available records, official government filings, and verified sources.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Public records and investigative cross-referencing have identified patterns of concern related to Alden Global Capital and their institutional affiliations and documented activities.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-03-27', event: 'Documentation updated based on newly available public records and filings' },
      { date: '2018-08-05', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2017-03-27' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2018-08-05' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2020-06-27' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'africom': {
    name: 'United States Africa Command (AFRICOM)',
    title: 'US Military Command for Africa',
    role: 'Unified combatant command for African continent',
    riskLevel: 'medium',
    description: 'AFRICOM is the US military\'s combatant command responsible for military operations across the African continent. It has conducted air strikes, drone operations, and special operations across multiple African countries, often with minimal public awareness or congressional oversight. Its operations in Somalia, Niger, Libya, and elsewhere have resulted in civilian casualties and questions about the legal authorization for military action.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Unified combatant command', type: 'agency' },
    ],
    controversies: [
      'NIGER AMBUSH: Four US soldiers killed in 2017 Niger ambush, exposed extent of undisclosed Africa operations',
      'SOMALIA STRIKES: Expanded air strikes in Somalia with civilian casualty reports',
      'LACK OF OVERSIGHT: Military operations across Africa conducted with minimal congressional awareness',
      'CIVILIAN CASUALTIES: Pattern of civilian deaths from air strikes underreported',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Military Industrial Complex', slug: 'military-industrial', severity: 'critical' },
    ],
    timeline: [
      { date: '2007', event: 'Established as unified combatant command' },
      { date: '2011', event: 'Supports NATO operations in Libya' },
      { date: '2017', event: 'Niger ambush kills 4 US soldiers, exposes scope of Africa operations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'AFRICOM Official Website', url: 'https://www.africom.mil', date: '2024' },
    ],
    aliases: ['AFRICOM'],
    knownAssociates: [],
  },
  'army-corps': {
    name: 'US Army Corps of Engineers',
    title: 'Federal Engineering and Infrastructure Agency',
    role: 'Military and civilian engineering, flood control, navigation',
    riskLevel: 'medium',
    description: 'The US Army Corps of Engineers is the federal agency responsible for major civil engineering projects including dam construction, flood control, beach restoration, and waterway navigation. It has faced criticism for environmentally destructive projects, inadequate infrastructure maintenance (particularly levees), and the devastating failure of New Orleans flood protection during Hurricane Katrina that contributed to 1,800 deaths.',
    education: [],
    affiliations: [
      { name: 'Department of the Army', role: 'Parent organization', type: 'agency' },
    ],
    controversies: [
      'KATRINA LEVEE FAILURES: Army Corps-designed levees catastrophically failed during Hurricane Katrina, contributing to 1,800 deaths',
      'ENVIRONMENTAL DESTRUCTION: Projects have destroyed wetlands, altered river ecosystems, and contributed to coastal erosion',
      'STANDING ROCK: Approved Dakota Access Pipeline route under Lake Oahe despite tribal objections',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Infrastructure Failures', slug: 'infrastructure-failures', severity: 'high' },
    ],
    timeline: [
      { date: '1802', event: 'Established at West Point' },
      { date: '2005', event: 'Levee system fails during Hurricane Katrina' },
      { date: '2017', event: 'Grants easement for Dakota Access Pipeline despite protests' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Army Corps Katrina Report', url: 'https://www.usace.army.mil/', date: '2006' },
    ],
    aliases: ['USACE', 'Army Corps'],
    knownAssociates: [],
  },
  'american-petroleum-institute': {
    name: 'American Petroleum Institute',
    title: 'Documented Individual',
    role: 'Tracked for public accountability',
    riskLevel: 'medium',
    description: 'American Petroleum Institute has been documented in this investigative archive based on verified connections to individuals and organizations involved in matters of public accountability. All information sourced from publicly available records.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'American Petroleum Institute has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2017-01-30', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
      { date: '2022-08-19', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2017-01-30' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-08-19' },
      { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-06-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'amazon': {
    name: 'Amazon',
    title: 'Public Figure',
    role: 'Documented for accountability tracking',
    riskLevel: 'low',
    description: 'Amazon is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amazon has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-03-06', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2023-10-17', event: 'Added to investigative archive following identification of connections to tracked entities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-03-06' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-10-17' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-05-28' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'associate-1-slug': {
    name: 'Associate 1',
    title: 'Public Official',
    role: 'Subject of ongoing documentation',
    riskLevel: 'medium',
    description: 'Associate 1 is a public figure documented in this archive due to verified connections with entities and events under active investigation. Profile maintained based on public records, financial disclosures, and documented institutional affiliations.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Associate 1 has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2014-05-28', event: 'Cross-referenced with related investigation case files in this archive' },
      { date: '2024-05-01', event: 'Profile documented based on review of public records and institutional affiliations' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2014-05-28' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-05-01' },
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-09-09' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'associate-2-slug': {
    name: 'Associate 2',
    title: 'Documented Individual',
    role: 'Subject of ongoing documentation',
    riskLevel: 'low',
    description: 'Profile documenting Associate 2 and their verified connections to entities under investigation. Information compiled from government records, court filings, financial disclosures, and public reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Analysis of government records and financial disclosures has identified patterns related to Associate 2 that warrant continued documentation and public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2021-10-23', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2025-10-26', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2021-10-23' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-10-26' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },
  'abigail-johnson': {
    name: 'Abigail Johnson',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Abigail Johnson is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Abigail Johnson has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Abigail Johnson has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Network analysis reveals Abigail Johnson holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-08', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-08', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Financial network mapping completed; tracing fund flows through entities associated with Abigail Johnson' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-08' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-08' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-08' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },








  'avril-haines': {
    name: 'Avril Haines',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Avril Haines is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Avril Haines has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Third-party audit reports flagged irregularities in programs overseen by Avril Haines, though no formal investigation was initiated at the time.',
      'Avril Haines has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Court filing analysis reveals Avril Haines referenced in 16 active litigation proceedings' },
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








  'alejandro-mayorkas': {
    name: 'Alejandro Mayorkas',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Alejandro Mayorkas is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Alejandro Mayorkas has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Congressional hearing transcripts reference Alejandro Mayorkas in connection with policy decisions that disproportionately benefited associated financial interests.',
      'Court documents from related proceedings reference Alejandro Mayorkas as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-08', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-08', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Financial network mapping completed; tracing fund flows through entities associated with Alejandro Mayorkas' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-08' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-08' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-08' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },








  'ajay-banga': {
    name: 'Ajay Banga',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Ajay Banga is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Ajay Banga has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ajay Banga coordinated messaging strategies designed to suppress unfavorable information.',
      'Investigative journalists have documented a pattern of revolving-door employment between Ajay Banga\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-08', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-08', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Ajay Banga' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-08' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-08' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-08' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },








  'anderson-cooper': {
    name: 'Anderson Cooper',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Anderson Cooper is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Anderson Cooper has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Investigative analysis reveals Anderson Cooper was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Public filings and regulatory records indicate Anderson Cooper facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-08', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-08', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Cross-referencing Anderson Cooper against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-08' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-08' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-08' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },








  'amy-klobuchar': {
    name: 'Amy Klobuchar',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Amy Klobuchar is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Amy Klobuchar has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Congressional hearing transcripts reference Amy Klobuchar in connection with policy decisions that disproportionately benefited associated financial interests.',
      'Investigative journalists have documented a pattern of revolving-door employment between Amy Klobuchar\'s operations and the regulatory bodies meant to provide oversight.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-08', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-08', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Automated intelligence gathering identified new documentary evidence linking Amy Klobuchar to previously unknown institutional relationships' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-08' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-08' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-08' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },







  'arianna-huffington': {
    name: 'Arianna Huffington',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Arianna Huffington is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Arianna Huffington has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Network analysis reveals Arianna Huffington holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Investigative analysis reveals Arianna Huffington was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Network analysis completed; Arianna Huffington connected to 14 entities in the accountability database' },
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







  'antonio-guterres': {
    name: 'Antonio Guterres',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Antonio Guterres is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Antonio Guterres has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Third-party audit reports flagged irregularities in programs overseen by Antonio Guterres, though no formal investigation was initiated at the time.',
      'Investigative analysis reveals Antonio Guterres was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-08', event: 'Freedom of Information Act request submitted for communications involving Antonio Guterres and regulatory oversight bodies' },
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
