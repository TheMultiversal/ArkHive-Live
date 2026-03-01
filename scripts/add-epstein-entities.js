const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// ============================================================
// INDIVIDUALS - Profile data for [slug]/page.tsx
// ============================================================
const individualProfiles = {
  'ehud-barak': {
    name: 'Ehud Barak',
    title: 'Former Prime Minister of Israel',
    role: 'Political Figure, Epstein Associate',
    riskLevel: 'high',
    description: 'Former Israeli Prime Minister and Defense Minister who maintained extensive documented contact with Jeffrey Epstein. Barak was photographed entering Epstein\'s NYC residence and invested alongside Epstein in Carbyne911, an emergency services tech company. Former Israeli intelligence officer Ari Ben-Menashe alleged that Epstein and Ghislaine Maxwell were Israeli intelligence assets, with Barak serving as a key link between Epstein and Israeli intelligence circles.',
    birthDate: 'February 12, 1942',
    birthPlace: 'Mishmar HaSharon, British Mandate Palestine',
    education: ['Hebrew University of Jerusalem - Physics and Mathematics', 'Stanford University - Systems Analysis'],
    affiliations: [
      { name: 'Israeli Defense Forces', role: 'Former Chief of General Staff', type: 'agency' },
      { name: 'Carbyne911', role: 'Chairman', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Social and business associate', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [
      'Photographed entering Jeffrey Epstein\'s NYC residence multiple times',
      'Invested in Carbyne911 alongside Epstein',
      'Named in unsealed Epstein court documents (2024)',
      'Ari Ben-Menashe alleged Barak was aware of Epstein-Maxwell intelligence operation',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1999-2001', event: 'Served as Prime Minister of Israel' },
      { date: '2000s', event: 'Developed relationship with Jeffrey Epstein' },
      { date: '2015', event: 'Invested in Carbyne911 alongside Epstein' },
      { date: '2019', event: 'Photographed entering Epstein NYC apartment by Daily Mail' },
      { date: '2024', event: 'Named in unsealed Giuffre v. Maxwell documents' },
    ],
    sources: [
      { title: 'Daily Beast: Barak-Epstein Ties', url: 'https://www.thedailybeast.com/israelis-demand-probe-into-former-pm-ehud-baraks-ties-to-jeffrey-epstein', date: '2019' },
    ],
  },
  'george-mitchell': {
    name: 'George Mitchell',
    title: 'Former US Senate Majority Leader',
    role: 'Political Figure Named by Victims',
    riskLevel: 'high',
    description: 'Former US Senate Majority Leader and special envoy for Middle East peace who was named by Virginia Giuffre in court documents as someone she was directed to provide sexual services to by Ghislaine Maxwell. Mitchell denied all allegations. He was a prominent figure in Democratic politics and served on numerous corporate boards.',
    birthDate: 'August 20, 1933',
    birthPlace: 'Waterville, Maine',
    education: ['Bowdoin College', 'Georgetown University Law Center'],
    affiliations: [
      { name: 'US Senate', role: 'Former Majority Leader (1989-1995)', type: 'agency' },
      { name: 'DLA Piper', role: 'Chairman Emeritus', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in victim testimony', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Virginia Giuffre', relationship: 'Named by Giuffre in documents', href: '/entities/individuals/virginia-giuffre' },
    ],
    controversies: [
      'Named by Virginia Giuffre in court filings as recipient of sexual services directed by Maxwell',
      'Denied all allegations through spokesperson',
      'Named in unsealed Giuffre v. Maxwell documents',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1989-1995', event: 'Served as US Senate Majority Leader' },
      { date: '2015', event: 'Named in Virginia Giuffre court documents' },
      { date: '2024', event: 'Named in unsealed documents' },
    ],
    sources: [
      { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    ],
  },
  'bill-richardson': {
    name: 'Bill Richardson',
    title: 'Former Governor of New Mexico',
    role: 'Political Figure Named by Victims',
    riskLevel: 'high',
    description: 'Former Governor of New Mexico and US Ambassador to the United Nations who was named by Virginia Giuffre in court documents. Epstein owned Zorro Ranch in New Mexico during Richardson\'s governorship. Richardson denied all allegations. He died in September 2023.',
    birthDate: 'November 15, 1947',
    birthPlace: 'Pasadena, California',
    deathDate: 'September 1, 2023',
    education: ['Tufts University', 'Tufts Fletcher School of Law and Diplomacy'],
    affiliations: [
      { name: 'State of New Mexico', role: 'Former Governor (2003-2011)', type: 'agency' },
      { name: 'United Nations', role: 'Former US Ambassador', type: 'organization' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in victim testimony', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named by Virginia Giuffre in court filings',
      'Epstein operated Zorro Ranch in his state with minimal oversight',
      'Denied all allegations',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2003-2011', event: 'Served as Governor of New Mexico' },
      { date: '2015', event: 'Named in Giuffre documents' },
      { date: '2023', event: 'Died September 1, 2023' },
    ],
    sources: [
      { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2024' },
    ],
  },
  'william-barr': {
    name: 'William Barr',
    title: 'Former US Attorney General',
    role: 'AG During Epstein Death, Father Hired Epstein',
    riskLevel: 'critical',
    description: 'Served as US Attorney General during Jeffrey Epstein\'s death in federal custody at MCC New York on August 10, 2019. Barr oversaw the Bureau of Prisons at the time. His father, Donald Barr, hired the 20-year-old college dropout Epstein as a math teacher at the elite Dalton School in 1973. William Barr declared he was "satisfied" Epstein\'s death was a suicide despite two malfunctioning cameras, two sleeping guards, and removal from suicide watch.',
    birthDate: 'May 23, 1950',
    birthPlace: 'New York City, New York',
    education: ['Columbia University', 'George Washington University Law School', 'Georgetown University - MA Chinese Studies'],
    affiliations: [
      { name: 'Department of Justice', role: 'Attorney General (2019-2020, 1991-1993)', type: 'agency' },
      { name: 'Bureau of Prisons', role: 'Oversight as AG', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Donald Barr', relationship: 'Father, hired Epstein at Dalton School', href: '/entities/individuals/donald-barr' },
      { name: 'Jeffrey Epstein', relationship: 'Oversaw prison where Epstein died', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Donald Trump', relationship: 'Appointed by as Attorney General', href: '/entities/individuals/donald-trump' },
    ],
    controversies: [
      'Oversaw Bureau of Prisons when Epstein died under suspicious circumstances',
      'Father Donald Barr hired Epstein at Dalton School',
      'Declared satisfaction with suicide ruling despite overwhelming circumstantial evidence',
      'Attempted to fire SDNY US Attorney Geoffrey Berman who was investigating Epstein associates',
      'Recused himself from Epstein case but maintained DOJ oversight',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1991-1993', event: 'First term as Attorney General under George H.W. Bush' },
      { date: '2019 Feb', event: 'Confirmed as Attorney General under Trump' },
      { date: '2019 Aug 10', event: 'Jeffrey Epstein died in federal custody under Barr\'s DOJ' },
      { date: '2019 Aug', event: 'Declared he was satisfied death was suicide' },
      { date: '2020 Jun', event: 'Attempted to fire SDNY US Attorney Geoffrey Berman' },
    ],
    sources: [
      { title: 'DOJ Inspector General Report on Epstein Death', url: 'https://oig.justice.gov/reports/investigation-and-review-federal-bureau-prisons-monitoring-jeffrey-epstein-following-his', date: '2023' },
    ],
  },
  'donald-barr': {
    name: 'Donald Barr',
    title: 'Headmaster of Dalton School',
    role: 'Hired Epstein Despite No Degree',
    riskLevel: 'high',
    description: 'Headmaster of the elite Dalton School in Manhattan who hired 20-year-old Jeffrey Epstein as a math and physics teacher in 1973, despite Epstein having no college degree. Donald Barr was the father of future Attorney General William Barr, who would oversee the Bureau of Prisons when Epstein died in custody. Donald Barr also wrote a science fiction novel called "Space Relations" (1973) about aliens running an interplanetary sex slavery operation.',
    birthDate: 'August 8, 1921',
    birthPlace: 'New York City, New York',
    deathDate: 'February 5, 2004',
    education: ['Columbia University', 'Columbia University - MA Mathematics'],
    affiliations: [
      { name: 'Dalton School', role: 'Headmaster (1964-1974)', type: 'corporation' },
      { name: 'OSS', role: 'Former member (WWII)', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Hired him as teacher at Dalton School', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'William Barr', relationship: 'Son, later AG during Epstein death', href: '/entities/individuals/william-barr' },
    ],
    controversies: [
      'Hired unqualified 20-year-old Epstein at elite prep school',
      'Former OSS (CIA precursor) member',
      'Wrote novel about alien-run sex slavery operation same year he hired Epstein',
      'Son became AG overseeing prison when Epstein died',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1964', event: 'Became headmaster of Dalton School' },
      { date: '1973', event: 'Hired Jeffrey Epstein as math teacher despite no degree' },
      { date: '1973', event: 'Published "Space Relations" novel about alien sex slavery' },
      { date: '1974', event: 'Left Dalton School' },
      { date: '2004', event: 'Died February 5, 2004' },
    ],
    sources: [
      { title: 'Epstein-Dalton Connection', url: 'https://www.nytimes.com/2019/07/12/nyregion/jeffrey-epstein-dalton-teacher.html', date: '2019' },
    ],
  },
  'kenneth-starr': {
    name: 'Kenneth Starr',
    title: 'Former Special Counsel, Epstein Defense Attorney',
    role: 'Legal Defense, Political Figure',
    riskLevel: 'high',
    description: 'Former Special Counsel known for the Clinton-Lewinsky investigation who later joined Jeffrey Epstein\'s defense team during the 2007-2008 plea negotiations. Starr helped secure the sweetheart Non-Prosecution Agreement that gave Epstein just 13 months in county jail with work release.',
    birthDate: 'July 21, 1946',
    birthPlace: 'Vernon, Texas',
    deathDate: 'September 13, 2022',
    education: ['Harding University', 'George Washington University', 'Duke University School of Law'],
    affiliations: [
      { name: 'Department of Justice', role: 'Former Solicitor General', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Defense attorney', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Alan Dershowitz', relationship: 'Co-counsel on Epstein defense', href: '/entities/individuals/alan-dershowitz' },
      { name: 'Alexander Acosta', relationship: 'Negotiated plea deal with', href: '/entities/individuals/alex-acosta' },
    ],
    controversies: [
      'Joined Epstein defense team to help secure sweetheart plea deal',
      'Used political connections to influence plea negotiations',
      'Later removed as Baylor University president over sexual assault scandal handling',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1994-1999', event: 'Served as Independent Counsel investigating Clinton' },
      { date: '2007', event: 'Joined Epstein defense team' },
      { date: '2008', event: 'Helped negotiate Non-Prosecution Agreement' },
      { date: '2022', event: 'Died September 13, 2022' },
    ],
    sources: [
      { title: 'Epstein Defense Team', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    ],
  },
  'jay-lefkowitz': {
    name: 'Jay Lefkowitz',
    title: 'Attorney',
    role: 'Epstein Defense Team, NPA Negotiator',
    riskLevel: 'medium',
    description: 'Attorney who was part of Jeffrey Epstein\'s legal defense team and played a key role in negotiating the terms of the Non-Prosecution Agreement with US Attorney Alexander Acosta in 2007-2008. The NPA was kept secret from victims in violation of the Crime Victims\' Rights Act.',
    birthDate: '1963',
    birthPlace: 'New York',
    education: ['Columbia University', 'Columbia University Law School'],
    affiliations: [
      { name: 'Kirkland & Ellis', role: 'Partner', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Defense attorney', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Alexander Acosta', relationship: 'Negotiated NPA with', href: '/entities/individuals/alex-acosta' },
      { name: 'Kenneth Starr', relationship: 'Co-counsel', href: '/entities/individuals/kenneth-starr' },
    ],
    controversies: [
      'Negotiated terms of secret Non-Prosecution Agreement',
      'NPA later found to violate Crime Victims\' Rights Act by federal judge',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2007-2008', event: 'Negotiated NPA terms with Acosta' },
      { date: '2019', event: 'NPA scrutinized after Epstein re-arrest' },
    ],
    sources: [
      { title: 'Miami Herald Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    ],
  },
  'eva-dubin': {
    name: 'Eva Andersson-Dubin',
    title: 'Physician, Former Epstein Girlfriend',
    role: 'Inner Circle, Named as Facilitator',
    riskLevel: 'high',
    description: 'Swedish-born physician and former Miss Sweden, wife of billionaire Glenn Dubin. She dated Jeffrey Epstein in the 1980s before marrying Dubin. Named by victims as a facilitator of Epstein\'s abuse. Virginia Giuffre alleged that the Dubins allowed Epstein unsupervised access to their minor daughter.',
    birthDate: '1961',
    birthPlace: 'Sweden',
    education: ['Karolinska Institute - Medicine'],
    affiliations: [
      { name: 'Dubin & Co.', role: 'Wife of founder Glenn Dubin', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Former girlfriend, continued social contact', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Glenn Dubin', relationship: 'Husband', href: '/entities/individuals/glenn-dubin' },
      { name: 'Ghislaine Maxwell', relationship: 'Social associate', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [
      'Named by victims as facilitator of Epstein abuse',
      'Allegations of allowing Epstein access to minor daughter',
      'Maintained social relationship with Epstein post-conviction',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1980s', event: 'Dated Jeffrey Epstein' },
      { date: '1994', event: 'Married Glenn Dubin' },
      { date: '2019', event: 'Named in court documents' },
    ],
    sources: [
      { title: 'Giuffre v. Maxwell Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    ],
  },
  'thomas-pritzker': {
    name: 'Thomas Pritzker',
    title: 'Hyatt Hotels Executive Chairman',
    role: 'Billionaire Named in Documents',
    riskLevel: 'medium',
    description: 'Billionaire executive chairman of Hyatt Hotels and member of the Pritzker family. Named in unsealed Epstein court documents in 2024. The nature and extent of his relationship with Epstein became subject to scrutiny after document releases.',
    birthDate: 'June 6, 1950',
    birthPlace: 'Chicago, Illinois',
    education: ['Claremont McKenna College', 'University of Chicago - MBA and JD'],
    netWorth: '$3.5 billion',
    affiliations: [
      { name: 'Hyatt Hotels', role: 'Executive Chairman', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in documents', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in unsealed Giuffre v. Maxwell documents (2024)',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2024', event: 'Named in unsealed court documents' },
    ],
    sources: [
      { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    ],
  },
  'michael-steinhardt': {
    name: 'Michael Steinhardt',
    title: 'Hedge Fund Pioneer',
    role: 'Billionaire Named in Documents',
    riskLevel: 'medium',
    description: 'Billionaire hedge fund pioneer and philanthropist named in unsealed Epstein court documents. Co-founded Birthright Israel. Known for aggressive management style and accusations of sexual harassment from multiple women in the financial industry.',
    birthDate: 'December 7, 1940',
    birthPlace: 'Brooklyn, New York',
    education: ['University of Pennsylvania - Wharton School'],
    netWorth: '$1.2 billion',
    affiliations: [
      { name: 'Steinhardt Partners', role: 'Founder', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in documents', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in unsealed Epstein documents (2024)',
      'Multiple women accused him of sexual harassment',
      'Returned stolen antiquities worth $70M to various countries',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2019', event: 'Accused of sexual harassment by multiple women' },
      { date: '2024', event: 'Named in unsealed Epstein documents' },
    ],
    sources: [
      { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    ],
  },
  'adriana-ross': {
    name: 'Adriana Ross',
    title: 'Epstein Associate',
    role: 'Inner Circle, Granted Immunity',
    riskLevel: 'high',
    description: 'Recruited by Ghislaine Maxwell, Adriana Ross became part of Epstein\'s inner circle. Granted immunity under the 2008 Non-Prosecution Agreement. When deposed, she invoked the Fifth Amendment over 100 times, refusing to answer questions about Epstein\'s activities.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Recruited by and associated with', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Recruited by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
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
  'lesley-groff': {
    name: 'Lesley Groff',
    title: 'Executive Assistant to Epstein',
    role: 'Trafficking Logistics Manager',
    riskLevel: 'high',
    description: 'Jeffrey Epstein\'s executive assistant who managed the logistical operations of his sex trafficking network. Scheduled "massages" (abuse sessions) and coordinated victim transportation. Granted immunity under the 2008 Non-Prosecution Agreement and was never prosecuted despite extensive evidence of her role.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Executive assistant', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Sarah Kellen', relationship: 'Co-assistant', href: '/entities/individuals/sarah-kellen' },
    ],
    controversies: [
      'Managed logistics for Epstein trafficking operation',
      'Granted immunity under 2008 NPA',
      'Never prosecuted despite being named facilitator by multiple victims',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Served as Epstein\'s executive assistant' },
      { date: '2008', event: 'Granted immunity under NPA' },
    ],
    sources: [
      { title: 'Miami Herald Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    ],
  },
  'haley-robson': {
    name: 'Haley Robson',
    title: 'Victim-Turned-Recruiter',
    role: 'Recruitment Pipeline',
    riskLevel: 'high',
    description: 'Initially a victim of Epstein who was subsequently recruited as a procurer. Paid $200 per girl she brought to Epstein. Became a cooperating witness in the investigation and provided crucial testimony about the recruitment pipeline.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Victim then recruiter', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Recruited underage girls for Epstein for $200 per girl',
      'Transitioned from victim to active recruiter',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2005', event: 'Identified during Palm Beach investigation' },
      { date: '2006', event: 'Became cooperating witness' },
    ],
    sources: [
      { title: 'Palm Beach Police Investigation', url: 'https://www.documentcloud.org/documents/1508273-palm-beach-police-investigation', date: '2005' },
    ],
  },
  'emmy-tayler': {
    name: 'Emmy Tayler',
    title: 'Maxwell\'s Personal Assistant',
    role: 'Facilitated Abuse',
    riskLevel: 'medium',
    description: 'Ghislaine Maxwell\'s personal assistant who facilitated the abuse of victims. Named in court documents as playing a supporting role in Maxwell\'s operations, helping arrange meetings and manage logistics.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Ghislaine Maxwell', relationship: 'Personal assistant', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Jeffrey Epstein', relationship: 'Associated through Maxwell', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in court documents as facilitator',
      'Assisted Maxwell in managing victims',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Served as Maxwell\'s personal assistant' },
    ],
    sources: [
      { title: 'Maxwell Trial Documents', date: '2021' },
    ],
  },
  'miles-alexander': {
    name: 'Miles Alexander',
    title: 'Butler at Little St. James',
    role: 'Staff Witness',
    riskLevel: 'low',
    description: 'Butler at Jeffrey Epstein\'s Little St. James Island in the US Virgin Islands. A potential witness to activities on the island who was named in various court documents.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Cathy Alexander', relationship: 'Spouse, also employed on island', href: '/entities/individuals/cathy-alexander' },
    ],
    controversies: [
      'Named in documents as potential witness to island activities',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Employed as butler on Little St. James' },
    ],
    sources: [
      { title: 'USVI AG Lawsuit', date: '2020' },
    ],
  },
  'cathy-alexander': {
    name: 'Cathy Alexander',
    title: 'Chef at Little St. James',
    role: 'Staff Witness',
    riskLevel: 'low',
    description: 'Chef at Jeffrey Epstein\'s Little St. James Island. Potential witness to activities on the island.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Miles Alexander', relationship: 'Spouse, also employed on island', href: '/entities/individuals/miles-alexander' },
    ],
    controversies: [
      'Named in documents as potential witness to island activities',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Employed as chef on Little St. James' },
    ],
    sources: [
      { title: 'USVI AG Lawsuit', date: '2020' },
    ],
  },
  'christine-maxwell': {
    name: 'Christine Maxwell',
    title: 'Ghislaine\'s Sister, Chiliad Co-Founder',
    role: 'Intelligence-Linked Tech Entrepreneur',
    riskLevel: 'high',
    description: 'Ghislaine Maxwell\'s older sister who co-founded Chiliad, a data analytics and search technology company that held contracts with the FBI, CIA, and other intelligence agencies. The connection between Chiliad\'s intelligence contracts and the Maxwell family\'s alleged intelligence ties through father Robert Maxwell raises significant questions about surveillance and data sharing.',
    education: ['Oxford University'],
    affiliations: [
      { name: 'Chiliad', role: 'Co-Founder', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Ghislaine Maxwell', relationship: 'Sister', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Robert Maxwell', relationship: 'Father', href: '/entities/individuals/robert-maxwell' },
      { name: 'Isabel Maxwell', relationship: 'Sister', href: '/entities/individuals/isabel-maxwell' },
    ],
    controversies: [
      'Co-founded Chiliad which held contracts with FBI and CIA',
      'Maxwell family ties to multiple intelligence agencies',
      'Questions about data sharing between intelligence clients and family network',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1991', event: 'Father Robert Maxwell died under suspicious circumstances' },
      { date: '2000s', event: 'Co-founded Chiliad data analytics company' },
      { date: '2000s', event: 'Chiliad secured FBI and CIA contracts' },
    ],
    sources: [
      { title: 'Guardian: Maxwell Family', url: 'https://www.theguardian.com/us-news/2019/aug/22/ghislaine-maxwell-what-is-known-about-the-life-of-jeffrey-epsteins-closest-associate', date: '2019' },
    ],
  },
  'isabel-maxwell': {
    name: 'Isabel Maxwell',
    title: 'Tech Executive, Ghislaine\'s Sister',
    role: 'Israeli Tech Connections',
    riskLevel: 'medium',
    description: 'Ghislaine Maxwell\'s sister with deep connections to the Israeli technology sector. Served on the boards of multiple Israeli tech companies and maintained connections that bridge the Maxwell family\'s intelligence background with Silicon Valley and Israeli tech.',
    education: ['Oxford University'],
    affiliations: [
      { name: 'CommTouch (Cyren)', role: 'Former President', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Ghislaine Maxwell', relationship: 'Sister', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Robert Maxwell', relationship: 'Father', href: '/entities/individuals/robert-maxwell' },
      { name: 'Christine Maxwell', relationship: 'Sister', href: '/entities/individuals/christine-maxwell' },
    ],
    controversies: [
      'Deep connections to Israeli tech and intelligence sectors',
      'Maxwell family intelligence ties',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1991', event: 'Father Robert Maxwell died' },
      { date: '2000s', event: 'Built career in Israeli tech sector' },
    ],
    sources: [
      { title: 'Guardian: Maxwell Family', date: '2019' },
    ],
  },
  'kevin-maxwell': {
    name: 'Kevin Maxwell',
    title: 'Ghislaine\'s Brother',
    role: 'Maxwell Family, Convicted of Fraud',
    riskLevel: 'medium',
    description: 'Ghislaine Maxwell\'s brother who was convicted of fraud in connection with the Maxwell pension scandal. Robert Maxwell stole $465 million from employee pension funds, and Kevin was found liable (though later acquitted on appeal).',
    education: [],
    affiliations: [
      { name: 'Maxwell Communications', role: 'Former Director', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Ghislaine Maxwell', relationship: 'Sister', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Robert Maxwell', relationship: 'Father', href: '/entities/individuals/robert-maxwell' },
    ],
    controversies: [
      'Convicted of fraud in Maxwell pension scandal',
      'Father stole $465M from employee pension funds',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1991', event: 'Father Robert Maxwell died' },
      { date: '1996', event: 'Tried for fraud in pension scandal' },
    ],
    sources: [
      { title: 'Robert Maxwell Pension Scandal', date: '1996' },
    ],
  },
  'marvin-minsky': {
    name: 'Marvin Minsky',
    title: 'MIT AI Pioneer',
    role: 'Accused by Virginia Giuffre',
    riskLevel: 'high',
    description: 'Renowned MIT professor and pioneer of artificial intelligence, co-founder of the MIT AI Laboratory. Accused by Virginia Giuffre of sexual contact at Epstein\'s Little St. James Island. Giuffre stated in deposition that she was directed by Maxwell to have sex with Minsky. Died in 2016 before allegations became public.',
    birthDate: 'August 9, 1927',
    birthPlace: 'New York City, New York',
    deathDate: 'January 24, 2016',
    education: ['Harvard University - Mathematics', 'Princeton University - PhD Mathematics'],
    affiliations: [
      { name: 'MIT', role: 'Co-founder of AI Laboratory', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Visited Epstein\'s island', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Virginia Giuffre', relationship: 'Named by Giuffre in deposition', href: '/entities/individuals/virginia-giuffre' },
    ],
    controversies: [
      'Accused by Virginia Giuffre of sexual contact on Epstein\'s island',
      'Reportedly directed by Maxwell to have sex with Giuffre',
      'Died before allegations became public',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Visited Epstein\'s Little St. James Island' },
      { date: '2016', event: 'Died January 24, 2016' },
      { date: '2019', event: 'Allegations became public through court documents' },
    ],
    sources: [
      { title: 'Giuffre Deposition Testimony', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2019' },
    ],
  },
  'lawrence-krauss': {
    name: 'Lawrence Krauss',
    title: 'Theoretical Physicist',
    role: 'Epstein Defender, Funding Recipient',
    riskLevel: 'medium',
    description: 'Theoretical physicist and science popularizer who publicly defended Jeffrey Epstein even after his 2008 conviction and sex offender registration. Krauss received Epstein funding for his Origins Project at Arizona State University. He was placed on leave and later forced to resign from ASU amid his own sexual misconduct allegations.',
    birthDate: 'May 27, 1954',
    birthPlace: 'New York City, New York',
    education: ['Carleton University', 'MIT - PhD Physics'],
    affiliations: [
      { name: 'Arizona State University', role: 'Former Professor', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Defended publicly, received funding', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Publicly defended Epstein after 2008 conviction',
      'Received Epstein funding for Origins Project',
      'Forced to resign from ASU over own sexual misconduct allegations',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2011', event: 'Defended Epstein in Daily Beast interview' },
      { date: '2018', event: 'Placed on leave from ASU over sexual misconduct allegations' },
      { date: '2019', event: 'Forced to resign from ASU' },
    ],
    sources: [
      { title: 'Krauss-Epstein Defense (Buzzfeed)', date: '2018' },
    ],
  },
  'joi-ito': {
    name: 'Joichi Ito',
    title: 'Former MIT Media Lab Director',
    role: 'Hidden Epstein Funding Recipient',
    riskLevel: 'high',
    description: 'Former director of the MIT Media Lab who accepted and actively concealed funding from Jeffrey Epstein after his 2008 sex offender conviction. Internal emails revealed Ito referred to Epstein as "he who shall not be named" and "Voldemort." He also solicited donations from Epstein on behalf of MIT. Resigned in September 2019 after the New Yorker exposed the relationship.',
    birthDate: 'June 19, 1966',
    birthPlace: 'Kyoto, Japan',
    education: ['Tufts University (did not complete)', 'University of Chicago (did not complete)'],
    affiliations: [
      { name: 'MIT Media Lab', role: 'Former Director (2011-2019)', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Funding source, concealed relationship', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Martin Nowak', relationship: 'Co-recipient of Epstein funding at Harvard', href: '/entities/individuals/martin-nowak' },
    ],
    controversies: [
      'Accepted hidden Epstein funding after conviction',
      'Referred to Epstein as "Voldemort" in emails to conceal identity',
      'Solicited donations from Epstein for MIT',
      'Resigned from all positions after exposure',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2011', event: 'Became director of MIT Media Lab' },
      { date: '2013+', event: 'Accepted hidden Epstein funding' },
      { date: '2019 Sep', event: 'Resigned from MIT after New Yorker expose' },
    ],
    sources: [
      { title: 'New Yorker: MIT Media Lab Hidden Epstein Funding', url: 'https://www.newyorker.com/news/news-desk/how-an-elite-university-research-center-concealed-its-relationship-with-jeffrey-epstein', date: '2019' },
    ],
  },
  'stephen-hawking': {
    name: 'Stephen Hawking',
    title: 'Renowned Theoretical Physicist',
    role: 'Named in Unsealed Documents',
    riskLevel: 'medium',
    description: 'World-renowned theoretical physicist and author of "A Brief History of Time." Named in unsealed Epstein court documents (2024) as having visited Epstein\'s Little St. James Island. The context and nature of his presence is disputed, and he died in 2018 before the full scope of Epstein allegations became public.',
    birthDate: 'January 8, 1942',
    birthPlace: 'Oxford, England',
    deathDate: 'March 14, 2018',
    education: ['University of Oxford', 'University of Cambridge - PhD Applied Mathematics'],
    affiliations: [
      { name: 'University of Cambridge', role: 'Lucasian Professor of Mathematics', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in documents as island visitor', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in unsealed court documents as visitor to Epstein\'s island',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2006', event: 'Reportedly attended conference on Epstein\'s island' },
      { date: '2018', event: 'Died March 14, 2018' },
      { date: '2024', event: 'Named in unsealed documents' },
    ],
    sources: [
      { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    ],
  },
  'larry-summers': {
    name: 'Larry Summers',
    title: 'Former US Treasury Secretary',
    role: 'Epstein Associate, Harvard President',
    riskLevel: 'medium',
    description: 'Former US Treasury Secretary and President of Harvard University who maintained a relationship with Jeffrey Epstein. Met with Epstein multiple times including during his time at Harvard. Questions raised about Epstein\'s $9M+ in donations to Harvard and his continued access to campus offices post-conviction.',
    birthDate: 'November 30, 1954',
    birthPlace: 'New Haven, Connecticut',
    education: ['MIT - BS Economics', 'Harvard University - PhD Economics'],
    affiliations: [
      { name: 'Harvard University', role: 'Former President (2001-2006)', type: 'corporation' },
      { name: 'US Treasury', role: 'Former Secretary (1999-2001)', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Met multiple times, associated at Harvard', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Met with Epstein multiple times during and after Harvard presidency',
      'Epstein donated $9M+ to Harvard during Summers\' tenure',
      'Questions about Epstein\'s campus access post-conviction',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1999-2001', event: 'Served as US Treasury Secretary' },
      { date: '2001-2006', event: 'Harvard President during Epstein donations' },
    ],
    sources: [
      { title: 'Harvard Epstein Donations', url: 'https://www.thecrimson.com/article/2020/5/1/harvard-epstein-donations/', date: '2020' },
    ],
  },
  'george-church': {
    name: 'George Church',
    title: 'Harvard Geneticist',
    role: 'Epstein Funding Recipient, Eugenics Discussions',
    riskLevel: 'medium',
    description: 'Harvard professor and pioneer of genomics who received funding from Jeffrey Epstein and reportedly discussed eugenics concepts with him. Epstein was fascinated by the idea of "seeding the human race with his DNA" and Church\'s genetics expertise aligned with these interests. Church apologized for his association with Epstein.',
    birthDate: 'August 28, 1954',
    birthPlace: 'Bethesda, Maryland',
    education: ['Duke University', 'Harvard University - PhD Biochemistry'],
    affiliations: [
      { name: 'Harvard University', role: 'Professor of Genetics', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Funding recipient, discussed eugenics', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Received Epstein funding for genetics research',
      'Discussed eugenics concepts with Epstein',
      'Apologized for association after exposure',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2010s', event: 'Received funding from Epstein' },
      { date: '2019', event: 'Apologized for Epstein association' },
    ],
    sources: [
      { title: 'NYT: Epstein Science Network', url: 'https://www.nytimes.com/2019/09/01/business/dealbook/jeffrey-epstein-science.html', date: '2019' },
    ],
  },
  'martin-nowak': {
    name: 'Martin Nowak',
    title: 'Harvard Professor',
    role: 'Director of Epstein-Funded Program',
    riskLevel: 'medium',
    description: 'Harvard professor who ran the Program for Evolutionary Dynamics, which received substantial funding from Jeffrey Epstein. The program was Epstein\'s primary academic front at Harvard, giving him a legitimate reason to maintain campus presence and cultivate relationships with academics even after his sex offender conviction.',
    birthDate: 'April 7, 1965',
    birthPlace: 'Vienna, Austria',
    education: ['University of Vienna - PhD Mathematics'],
    affiliations: [
      { name: 'Harvard University', role: 'Professor, Director of PED', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Primary funder of his program', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Joi Ito', relationship: 'Both received Epstein funding', href: '/entities/individuals/joi-ito' },
    ],
    controversies: [
      'Ran Epstein-funded program at Harvard',
      'Program gave Epstein academic legitimacy post-conviction',
      'Under investigation by Harvard for Epstein ties',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2003', event: 'Founded Program for Evolutionary Dynamics with Epstein funding' },
      { date: '2019', event: 'Under scrutiny for Epstein connection' },
    ],
    sources: [
      { title: 'Harvard Epstein Donations', url: 'https://www.thecrimson.com/article/2020/5/1/harvard-epstein-donations/', date: '2020' },
    ],
  },
  'chris-tucker': {
    name: 'Chris Tucker',
    title: 'Actor',
    role: 'Flight Log Passenger',
    riskLevel: 'low',
    description: 'Actor known for the Rush Hour film series. Named in Epstein flight logs showing trip to Africa with Bill Clinton on the Lolita Express. The trip was reportedly for Clinton Foundation charitable purposes.',
    birthDate: 'August 31, 1971',
    birthPlace: 'Atlanta, Georgia',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Flight log passenger', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Bill Clinton', relationship: 'Co-passenger on Africa trip', href: '/entities/individuals/bill-clinton' },
    ],
    controversies: [
      'Named in Epstein flight logs on Africa trip with Clinton',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2002', event: 'Flight to Africa on Epstein\'s 727 with Clinton' },
    ],
    sources: [
      { title: 'Epstein Flight Logs', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2021' },
    ],
  },
  'naomi-campbell': {
    name: 'Naomi Campbell',
    title: 'Supermodel',
    role: 'Flight Logs, Maxwell Friend',
    riskLevel: 'low',
    description: 'Supermodel who appeared in Epstein flight logs and was a close friend of Ghislaine Maxwell. The nature and extent of her knowledge of Epstein\'s activities is not established in public documents.',
    birthDate: 'May 22, 1970',
    birthPlace: 'London, England',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Flight log passenger', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Close friend', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [
      'Named in Epstein flight logs',
      'Close friend of convicted sex trafficker Ghislaine Maxwell',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Appeared in flight logs and social events' },
    ],
    sources: [
      { title: 'Epstein Flight Logs', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2021' },
    ],
  },
  'woody-allen': {
    name: 'Woody Allen',
    title: 'Film Director',
    role: 'Social Associate Post-Conviction',
    riskLevel: 'medium',
    description: 'Film director who maintained a social relationship with Jeffrey Epstein, including dining with him after Epstein\'s 2008 sex offender conviction. Allen has his own history of sexual abuse allegations from his adopted daughter Dylan Farrow. The Epstein relationship drew additional scrutiny.',
    birthDate: 'December 1, 1935',
    birthPlace: 'Brooklyn, New York',
    education: ['New York University (expelled)', 'City College of New York'],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Social associate, dined post-conviction', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Noam Chomsky', relationship: 'Epstein arranged dinner between them', href: '/entities/individuals/noam-chomsky' },
    ],
    controversies: [
      'Dined with Epstein after 2008 conviction',
      'Own sexual abuse allegations from Dylan Farrow',
      'Married adopted stepdaughter Soon-Yi Previn',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2010s', event: 'Dined with Epstein post-conviction' },
    ],
    sources: [
      { title: 'NYT: Epstein Social Circle', date: '2019' },
    ],
  },
  'maria-farmer': {
    name: 'Maria Farmer',
    title: 'Victim and Whistleblower',
    role: 'First Known Reporter to FBI (1996)',
    riskLevel: 'low',
    description: 'Artist and one of the earliest known victims of Epstein and Maxwell who reported their abuse to the FBI and NYPD in 1996 - three years before real investigation began. The FBI took no action for nearly a decade. She and her younger sister Annie Farmer were both abused. Maria was assaulted at the Wexner estate in Ohio. Her courage in coming forward early, only to be ignored by authorities, represents one of the most damning failures of law enforcement in the case.',
    education: ['New York Academy of Art'],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Victim - abused by', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Victim - assaulted by', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Les Wexner', relationship: 'Assaulted at Wexner property', href: '/entities/individuals/les-wexner' },
      { name: 'Annie Farmer', relationship: 'Sister, also a victim', href: '/entities/individuals/annie-farmer' },
    ],
    controversies: [
      'Reported abuse to FBI in 1996 - was ignored',
      'Assaulted by Maxwell at Wexner estate in Ohio',
      'FBI failure to act allowed trafficking to continue for over a decade',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1996', event: 'Reported abuse to FBI and NYPD - ignored' },
      { date: '2019', event: 'Spoke publicly about abuse and FBI failure' },
      { date: '2021', event: 'Testimony used in Maxwell trial' },
    ],
    sources: [
      { title: 'Maria Farmer CBS Interview', date: '2019' },
    ],
  },
  'annie-farmer': {
    name: 'Annie Farmer',
    title: 'Victim, Maxwell Trial Witness',
    role: 'Key Witness at Maxwell Trial',
    riskLevel: 'low',
    description: 'Maria Farmer\'s younger sister who was also abused by Epstein and Maxwell as a minor. She testified at the Maxwell trial under her real name, providing powerful testimony about being groped by Maxwell and abused by Epstein at his New Mexico ranch when she was 16 years old.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Victim - abused by as minor', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Victim - groped by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
      { name: 'Maria Farmer', relationship: 'Sister', href: '/entities/individuals/maria-farmer' },
    ],
    controversies: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1996', event: 'Abused at Epstein\'s Zorro Ranch at age 16' },
      { date: '2021', event: 'Testified at Maxwell trial under real name' },
    ],
    sources: [
      { title: 'Maxwell Trial Testimony', date: '2021' },
    ],
  },
  'courtney-wild': {
    name: 'Courtney Wild',
    title: 'Victim Advocate',
    role: 'Led Legal Challenge Against NPA',
    riskLevel: 'low',
    description: 'Epstein victim who led the legal challenge against the 2008 Non-Prosecution Agreement. Her lawsuit (Wild v. United States) resulted in federal judge Kenneth Marra ruling in 2019 that the NPA violated the Crime Victims\' Rights Act by failing to notify victims. Her advocacy was instrumental in keeping the case alive.',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Bradley Edwards', relationship: 'Attorney who represented Wild', href: '/entities/individuals/bradley-edwards' },
    ],
    controversies: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2008', event: 'Filed challenge against NPA' },
      { date: '2019', event: 'Judge Marra ruled NPA violated Crime Victims\' Rights Act' },
    ],
    sources: [
      { title: 'Wild v. United States', date: '2019' },
    ],
  },
  'carolyn-andriano': {
    name: 'Carolyn Andriano',
    title: 'Victim, Maxwell Trial Witness',
    role: 'Testified at Maxwell Trial',
    riskLevel: 'low',
    description: 'Testified at the Ghislaine Maxwell trial about being recruited into Epstein\'s trafficking network at age 14. Provided detailed testimony about the abuse she suffered and the recruitment process. Died in 2021, the same year as the trial, at age 36.',
    deathDate: '2021',
    education: [],
    affiliations: [],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Victim - recruited at 14', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Ghislaine Maxwell', relationship: 'Victim', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Recruited at age 14' },
      { date: '2021', event: 'Testified at Maxwell trial' },
      { date: '2021', event: 'Died at age 36' },
    ],
    sources: [
      { title: 'Maxwell Trial Testimony', date: '2021' },
    ],
  },
  'peter-mandelson': {
    name: 'Peter Mandelson',
    title: 'UK Labour Politician',
    role: 'Photographed With Epstein',
    riskLevel: 'medium',
    description: 'Senior UK Labour politician and close ally of Tony Blair who was photographed with Jeffrey Epstein and named in Epstein documents. Mandelson served as EU Trade Commissioner and was repeatedly photographed in social settings with Epstein. Denied any wrongdoing.',
    birthDate: 'October 21, 1953',
    birthPlace: 'Hendon, London',
    education: ['St Catherine\'s College, Oxford'],
    affiliations: [
      { name: 'UK Labour Party', role: 'Senior Figure', type: 'organization' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Photographed with, social contact', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Tony Blair', relationship: 'Political ally', href: '/entities/individuals/tony-blair' },
    ],
    controversies: [
      'Photographed with Epstein multiple times',
      'Named in Epstein documents',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Social contact with Epstein documented' },
      { date: '2019', event: 'Photographs with Epstein became public' },
    ],
    sources: [
      { title: 'Guardian: Mandelson-Epstein', url: 'https://www.theguardian.com/uk-news/2019/jul/30/peter-mandelson-jeffrey-epstein', date: '2019' },
    ],
  },
  'terje-roed-larsen': {
    name: 'Terje Roed-Larsen',
    title: 'Former UN Diplomat',
    role: 'Received $130K From Epstein Post-Conviction',
    riskLevel: 'medium',
    description: 'Norwegian diplomat and former UN Special Envoy who received $130,000 from Epstein\'s foundation after his 2008 sex offender conviction. The payment was not disclosed to the UN. Roed-Larsen resigned from his position at the International Peace Institute after the relationship was exposed.',
    birthDate: 'November 22, 1947',
    birthPlace: 'Bergen, Norway',
    education: ['University of Bergen'],
    affiliations: [
      { name: 'United Nations', role: 'Former Special Envoy', type: 'organization' },
      { name: 'International Peace Institute', role: 'Former President', type: 'organization' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Received $130K from Epstein foundation', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Received $130K from Epstein foundation post-conviction',
      'Did not disclose payment to UN',
      'Resigned from International Peace Institute',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2016', event: 'Received $130K from Epstein foundation' },
      { date: '2019', event: 'Payment exposed, resigned from IPI' },
    ],
    sources: [],
  },
  'ehud-olmert': {
    name: 'Ehud Olmert',
    title: 'Former Israeli Prime Minister',
    role: 'Named in Contact Records',
    riskLevel: 'low',
    description: 'Former Israeli Prime Minister named in Epstein contact records. The nature of his relationship with Epstein is not fully documented in public records.',
    birthDate: 'September 30, 1945',
    birthPlace: 'Binyamina, British Mandate Palestine',
    education: ['Hebrew University of Jerusalem - Law'],
    affiliations: [
      { name: 'Government of Israel', role: 'Former Prime Minister (2006-2009)', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in contact records', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in Epstein contact records',
      'Convicted of corruption in separate case',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2006-2009', event: 'Served as Israeli PM' },
    ],
    sources: [],
  },
  'mark-middleton': {
    name: 'Mark Middleton',
    title: 'Clinton White House Aide',
    role: 'Arranged Epstein WH Visits',
    riskLevel: 'high',
    description: 'Former Clinton White House aide who arranged multiple visits by Jeffrey Epstein to the White House. Middleton was found dead in May 2022 in Perryville, Arkansas, in what was ruled a suicide by hanging. He also had a shotgun wound to his chest. His death, like Epstein\'s, raised significant questions.',
    deathDate: 'May 7, 2022',
    education: [],
    affiliations: [
      { name: 'Clinton White House', role: 'Special Assistant to the President', type: 'agency' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Arranged White House visits for', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Bill Clinton', relationship: 'Worked in Clinton White House', href: '/entities/individuals/bill-clinton' },
    ],
    controversies: [
      'Arranged Epstein\'s White House visits',
      'Found dead in 2022 under suspicious circumstances',
      'Death ruled suicide despite also having shotgun wound to chest',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1993-1995', event: 'Served in Clinton White House' },
      { date: '1990s', event: 'Arranged Epstein White House visits' },
      { date: '2022 May', event: 'Found dead in Arkansas' },
    ],
    sources: [],
  },
  'lynn-forester-de-rothschild': {
    name: 'Lynn Forester de Rothschild',
    title: 'Businesswoman',
    role: 'Black Book, Introduced Clinton to Epstein',
    riskLevel: 'medium',
    description: 'Businesswoman and wife of Sir Evelyn de Rothschild who is named in Epstein\'s Black Book with multiple contact numbers. She reportedly introduced Bill Clinton to Jeffrey Epstein. Maintained social connections across the highest levels of politics and finance.',
    education: ['Pomona College', 'Columbia Law School'],
    affiliations: [
      { name: 'E.L. Rothschild', role: 'CEO', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in Black Book, social contact', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Bill Clinton', relationship: 'Reportedly introduced to Epstein', href: '/entities/individuals/bill-clinton' },
    ],
    controversies: [
      'Named in Epstein\'s Black Book',
      'Reportedly introduced Clinton to Epstein',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Social connections with Epstein documented' },
    ],
    sources: [
      { title: 'Epstein\'s Black Book', url: 'https://www.documentcloud.org/documents/1508273-jeffrey-epsteins-little-black-book-redacted', date: '2015' },
    ],
  },
  'edgar-bronfman': {
    name: 'Edgar Bronfman Sr.',
    title: 'Seagram\'s Fortune Heir',
    role: 'Named in Black Book',
    riskLevel: 'low',
    description: 'Canadian-American businessman from the Seagram\'s fortune family. Named in Epstein\'s Black Book with multiple contact numbers. Died in 2013.',
    birthDate: 'June 20, 1929',
    birthPlace: 'Montreal, Canada',
    deathDate: 'December 21, 2013',
    education: ['McGill University', 'Williams College'],
    netWorth: '$2.5 billion (at death)',
    affiliations: [
      { name: 'Seagram\'s', role: 'Former CEO', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in Epstein\'s Black Book',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2013', event: 'Died December 21' },
    ],
    sources: [],
  },
  'ronald-perelman': {
    name: 'Ronald Perelman',
    title: 'Revlon Billionaire',
    role: 'Named in Black Book',
    riskLevel: 'low',
    description: 'Billionaire businessman and former owner of Revlon named in Epstein\'s Black Book.',
    birthDate: 'January 1, 1943',
    birthPlace: 'Greensboro, North Carolina',
    education: ['University of Pennsylvania - Wharton'],
    netWorth: '$3.6 billion',
    affiliations: [
      { name: 'MacAndrews & Forbes', role: 'Chairman', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Named in Epstein\'s Black Book',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [],
    sources: [],
  },
  'steven-hoffenberg': {
    name: 'Steven Hoffenberg',
    title: 'Towers Financial Ponzi Architect',
    role: 'Epstein\'s Early Criminal Mentor',
    riskLevel: 'critical',
    description: 'Convicted fraudster who ran the Towers Financial Corporation Ponzi scheme ($475M fraud). He was Epstein\'s early mentor and business partner in the late 1980s-early 1990s. Hoffenberg repeatedly claimed that Epstein was an equal partner in the fraud but Epstein was never charged. Before his death in 2022, Hoffenberg stated that Epstein learned the art of financial manipulation at Towers.',
    deathDate: 'August 2022',
    education: [],
    affiliations: [
      { name: 'Towers Financial Corporation', role: 'CEO', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Business partner, claimed equal partner in fraud', href: '/entities/individuals/jeffrey-epstein' },
    ],
    controversies: [
      'Ran $475M Ponzi scheme at Towers Financial',
      'Claimed Epstein was equal partner in fraud',
      'Epstein never charged despite Hoffenberg\'s claims',
      'Found dead in 2022',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1980s', event: 'Partnered with Epstein at Towers Financial' },
      { date: '1993', event: 'Towers Financial collapsed' },
      { date: '1997', event: 'Sentenced to 20 years for fraud' },
      { date: '2022', event: 'Found dead' },
    ],
    sources: [
      { title: 'Vanity Fair: Epstein Financial Crimes', url: 'https://www.vanityfair.com/news/2019/07/jeffrey-epstein-financial-crimes', date: '2019' },
    ],
  },
  'john-brockman': {
    name: 'John Brockman',
    title: 'Edge Foundation Founder',
    role: 'Key Nexus Between Epstein and Scientists',
    riskLevel: 'high',
    description: 'Literary agent and founder of the Edge Foundation who served as the key social nexus connecting Jeffrey Epstein to world-class scientists. Brockman hosted Edge dinners and conferences that Epstein funded and attended, facilitating introductions to Nobel laureates and leading researchers. After Epstein\'s arrest, leaked emails showed Brockman openly discussing Epstein\'s sex offender status while continuing to facilitate meetings.',
    birthDate: 'February 16, 1941',
    birthPlace: 'Boston, Massachusetts',
    education: ['Columbia University'],
    affiliations: [
      { name: 'Edge Foundation', role: 'Founder', type: 'organization' },
      { name: 'Brockman Inc.', role: 'Literary Agent', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Key introducer to science world', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Steven Pinker', relationship: 'Client and Edge member', href: '/entities/individuals/steven-pinker' },
      { name: 'Marvin Minsky', relationship: 'Edge member', href: '/entities/individuals/marvin-minsky' },
    ],
    controversies: [
      'Key facilitator of Epstein\'s access to scientific community',
      'Continued Epstein relationship after conviction',
      'Emails showed awareness of Epstein\'s criminal status while facilitating meetings',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '1996', event: 'Founded Edge Foundation' },
      { date: '2000s', event: 'Facilitated Epstein-scientist introductions' },
      { date: '2019', event: 'Leaked emails exposed continued Epstein facilitation' },
    ],
    sources: [
      { title: 'NYT: Edge Foundation-Epstein', url: 'https://www.nytimes.com/2019/09/01/business/dealbook/jeffrey-epstein-science.html', date: '2019' },
    ],
  },
  'steven-pinker': {
    name: 'Steven Pinker',
    title: 'Harvard Psychologist',
    role: 'Edge Foundation Network, Flight Log',
    riskLevel: 'medium',
    description: 'Harvard psychology professor and bestselling author who flew on Epstein\'s jet and attended Epstein-funded events through the Edge Foundation network. Pinker was photographed with Epstein and Alan Dershowitz. He said his association was limited to the intellectual circles around John Brockman\'s Edge Foundation.',
    birthDate: 'September 18, 1954',
    birthPlace: 'Montreal, Canada',
    education: ['McGill University', 'Harvard University - PhD Experimental Psychology'],
    affiliations: [
      { name: 'Harvard University', role: 'Professor of Psychology', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Flight log, social events', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'John Brockman', relationship: 'Edge Foundation connection', href: '/entities/individuals/john-brockman' },
      { name: 'Alan Dershowitz', relationship: 'Photographed together with Epstein', href: '/entities/individuals/alan-dershowitz' },
    ],
    controversies: [
      'Flew on Epstein\'s jet',
      'Attended Epstein-funded events',
      'Photographed with Epstein and Dershowitz',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2000s', event: 'Attended Edge Foundation events funded by Epstein' },
      { date: '2019', event: 'Connections scrutinized after Epstein arrest' },
    ],
    sources: [
      { title: 'NYT: Epstein-Scientists', url: 'https://www.nytimes.com/2019/07/12/business/jeffrey-epstein-scientist-edge.html', date: '2019' },
    ],
  },
  'noam-chomsky': {
    name: 'Noam Chomsky',
    title: 'MIT Linguist and Intellectual',
    role: 'Met Epstein Multiple Times Post-Conviction',
    riskLevel: 'medium',
    description: 'World-renowned MIT linguist and political commentator who met Jeffrey Epstein multiple times after his 2008 conviction. Wall Street Journal reported in 2024 that Epstein arranged a dinner between Chomsky and Woody Allen, and that Chomsky had Epstein transfer $270K to his wife. Chomsky defended the meetings, saying Epstein had "served his time."',
    birthDate: 'December 7, 1928',
    birthPlace: 'Philadelphia, Pennsylvania',
    education: ['University of Pennsylvania - PhD Linguistics'],
    affiliations: [
      { name: 'MIT', role: 'Institute Professor Emeritus', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Met multiple times post-conviction', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Woody Allen', relationship: 'Epstein arranged dinner with', href: '/entities/individuals/woody-allen' },
    ],
    controversies: [
      'Met Epstein multiple times after sex offender conviction',
      'Epstein transferred $270K to Chomsky\'s wife',
      'Epstein arranged social dinners for Chomsky',
      'Defended meetings publicly',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2015-2016', event: 'Multiple meetings with Epstein documented' },
      { date: '2024', event: 'WSJ reports on meetings and financial transfer' },
    ],
    sources: [
      { title: 'WSJ: Chomsky-Epstein Meetings', url: 'https://www.wsj.com/us-news/law/noam-chomsky-jeffrey-epstein-meetings-992a93d0', date: '2024' },
    ],
  },
};

// Add remaining individuals more concisely
const additionalIndividuals = {
  'murray-gell-mann': { name: 'Murray Gell-Mann', title: 'Nobel Physics Laureate', role: 'Epstein-Funded Events', riskLevel: 'low', description: 'Nobel Prize-winning physicist who predicted quarks. Attended Epstein-funded events through Edge Foundation and Santa Fe Institute connections. Died in 2019.', birthDate: 'September 15, 1929', deathDate: 'May 24, 2019', education: ['Yale University', 'MIT - PhD Physics'], affiliations: [{ name: 'Santa Fe Institute', role: 'Co-Founder', type: 'organization' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Attended funded events', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Attended Epstein-funded science events'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2019', event: 'Died May 24' }], sources: [] },
  'frank-wilczek': { name: 'Frank Wilczek', title: 'Nobel Physics Laureate', role: 'Edge Foundation Network', riskLevel: 'low', description: 'Nobel Prize-winning physicist. Connected to Epstein through the Edge Foundation and scientific social circles.', birthDate: 'May 15, 1951', education: ['University of Chicago', 'Princeton - PhD Physics'], affiliations: [{ name: 'MIT', role: 'Professor of Physics', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Edge Foundation connection', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein documents'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'nathan-wolfe': { name: 'Nathan Wolfe', title: 'Virologist', role: 'Epstein Science Advisory, Funding', riskLevel: 'medium', description: 'Virologist and founder of Global Viral who sat on Epstein\'s science advisory board and received funding. Epstein was interested in pandemics and biological science.', birthDate: '1970', education: ['Stanford University', 'Harvard - PhD Immunology'], affiliations: [{ name: 'Global Viral Forecasting', role: 'Founder', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Funding recipient, advisory board', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Sat on Epstein science advisory board', 'Received Epstein funding'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'lisa-randall': { name: 'Lisa Randall', title: 'Harvard Physicist', role: 'Epstein Funding Recipient', riskLevel: 'low', description: 'Harvard theoretical physicist who received Epstein funding and attended Epstein-related events.', birthDate: 'June 18, 1962', education: ['Harvard University - PhD Physics'], affiliations: [{ name: 'Harvard University', role: 'Professor of Physics', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Funding recipient', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Received Epstein funding'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'daniel-dennett': { name: 'Daniel Dennett', title: 'Philosopher', role: 'Edge Foundation Dinners', riskLevel: 'low', description: 'Renowned philosopher of mind who attended Edge Foundation dinners funded by Epstein. Died in 2024.', birthDate: 'March 28, 1942', deathDate: 'April 19, 2024', education: ['Harvard University', 'Oxford University - DPhil'], affiliations: [{ name: 'Tufts University', role: 'Professor', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Edge Foundation events', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Attended Epstein-funded Edge events'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2024', event: 'Died April 19' }], sources: [] },
  'gerald-edelman': { name: 'Gerald Edelman', title: 'Nobel Medicine Laureate', role: 'Named in Black Book', riskLevel: 'low', description: 'Nobel Prize-winning immunologist named in Epstein\'s Black Book. Died in 2014.', birthDate: 'July 1, 1929', deathDate: 'May 17, 2014', education: ['Ursinus College', 'University of Pennsylvania - MD', 'Rockefeller University - PhD'], affiliations: [{ name: 'Rockefeller University', role: 'Professor', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein Black Book'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'lee-smolin': { name: 'Lee Smolin', title: 'Theoretical Physicist', role: 'Epstein Funding Connection', riskLevel: 'low', description: 'Theoretical physicist at the Perimeter Institute with connections to Epstein through scientific funding circles.', birthDate: 'June 6, 1955', education: ['Hampshire College', 'Harvard - PhD Physics'], affiliations: [{ name: 'Perimeter Institute', role: 'Faculty', type: 'organization' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Funding connection', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Connected to Epstein funding networks'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'katinka-matson': { name: 'Katinka Matson', title: 'Edge Foundation Co-Founder', role: 'Organized Epstein-Scientist Events', riskLevel: 'low', description: 'Co-founder of the Edge Foundation with John Brockman who helped organize events that brought Epstein into contact with leading scientists.', education: [], affiliations: [{ name: 'Edge Foundation', role: 'Co-Founder', type: 'organization' }, { name: 'Brockman Inc.', role: 'VP', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Organized events he attended/funded', href: '/entities/individuals/jeffrey-epstein' }, { name: 'John Brockman', relationship: 'Co-founder of Edge', href: '/entities/individuals/john-brockman' }], controversies: ['Helped organize events connecting Epstein with scientists'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'katie-couric': { name: 'Katie Couric', title: 'News Anchor', role: 'Attended Epstein Dinner', riskLevel: 'low', description: 'News anchor and journalist who attended a dinner at Epstein\'s NYC mansion in 2010, after his conviction. The dinner was also attended by other media figures.', birthDate: 'January 7, 1957', education: ['University of Virginia'], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Attended Epstein dinner at NYC mansion post-conviction (2010)'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2010', event: 'Attended dinner at Epstein mansion' }], sources: [] },
  'george-stephanopoulos': { name: 'George Stephanopoulos', title: 'ABC News Anchor', role: 'Attended Epstein Dinner', riskLevel: 'low', description: 'ABC News anchor and former Clinton White House aide who attended a dinner at Epstein\'s NYC mansion in 2010.', birthDate: 'February 10, 1961', education: ['Columbia University', 'Oxford University - Rhodes Scholar'], affiliations: [{ name: 'ABC News', role: 'Anchor', type: 'corporation' }], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Attended Epstein dinner post-conviction (2010)'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2010', event: 'Attended dinner at Epstein mansion' }], sources: [] },
  'chelsea-handler': { name: 'Chelsea Handler', title: 'Comedian', role: 'Attended Epstein Dinner', riskLevel: 'low', description: 'Comedian and talk show host who attended a dinner at Epstein\'s NYC mansion.', birthDate: 'February 25, 1975', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Attended dinner at Epstein mansion'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'david-blaine': { name: 'David Blaine', title: 'Magician', role: 'Flight Logs, Epstein Events', riskLevel: 'low', description: 'Magician and illusionist named in Epstein flight logs who attended events at Epstein properties.', birthDate: 'April 4, 1973', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Flight logs, social events', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein flight logs', 'Attended Epstein events'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'mick-jagger': { name: 'Mick Jagger', title: 'Rolling Stones Frontman', role: 'Named in Black Book', riskLevel: 'low', description: 'Iconic Rolling Stones frontman named in Epstein\'s Black Book with multiple contact numbers.', birthDate: 'July 26, 1943', education: ['London School of Economics (did not finish)'], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein Black Book'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'alec-baldwin': { name: 'Alec Baldwin', title: 'Actor', role: 'Named in Black Book', riskLevel: 'low', description: 'Actor named in Epstein\'s Black Book.', birthDate: 'April 3, 1958', education: ['George Washington University', 'NYU Tisch School of the Arts'], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein Black Book'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'itzhak-perlman': { name: 'Itzhak Perlman', title: 'Violinist', role: 'Named in Black Book', riskLevel: 'low', description: 'World-renowned violinist named in Epstein\'s Black Book.', birthDate: 'August 31, 1945', education: ['Juilliard School'], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in Epstein Black Book'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'joe-recarey': { name: 'Joe Recarey', title: 'Palm Beach Police Detective', role: 'Led Original Investigation', riskLevel: 'low', description: 'Palm Beach Police detective who led the original investigation into Jeffrey Epstein starting in 2005, identifying over 40 victims. Considered one of the heroes of the case. Died at age 50 in 2018, the year Julie K. Brown\'s investigation was published.', deathDate: 'May 25, 2018', education: [], affiliations: [{ name: 'Palm Beach Police Department', role: 'Detective', type: 'agency' }], knownAssociates: [{ name: 'Michael Reiter', relationship: 'Police chief who supported investigation', href: '/entities/individuals/michael-reiter' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2005', event: 'Led original Epstein investigation' }, { date: '2006', event: 'Identified 40+ victims' }, { date: '2018', event: 'Died at age 50' }], sources: [{ title: 'Palm Beach Investigation', date: '2005' }] },
  'michael-reiter': { name: 'Michael Reiter', title: 'Palm Beach Police Chief', role: 'Referred Case to FBI', riskLevel: 'low', description: 'Palm Beach Police Chief who supported Detective Joe Recarey\'s investigation and took the extraordinary step of referring the case to the FBI after State Attorney Barry Krischer refused to pursue serious charges.', education: [], affiliations: [{ name: 'Palm Beach Police Department', role: 'Chief', type: 'agency' }], knownAssociates: [{ name: 'Joe Recarey', relationship: 'Led investigation under his command', href: '/entities/individuals/joe-recarey' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2005-2006', event: 'Oversaw investigation and referred to FBI' }], sources: [] },
  'barry-krischer': { name: 'Barry Krischer', title: 'Palm Beach State Attorney', role: 'Resisted Prosecution', riskLevel: 'high', description: 'Palm Beach County State Attorney who resisted prosecuting Epstein despite overwhelming evidence from the police investigation. A grand jury under Krischer returned only a single state solicitation charge. Police Chief Reiter subsequently referred the case to the FBI, bypassing Krischer.', education: [], affiliations: [{ name: 'Palm Beach State Attorney Office', role: 'State Attorney', type: 'agency' }], knownAssociates: [], controversies: ['Resisted prosecution despite police evidence', 'Grand jury returned only single charge', 'Palm Beach PD chief bypassed him to refer to FBI'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2006', event: 'Resisted serious prosecution of Epstein' }], sources: [] },
  'geoffrey-berman': { name: 'Geoffrey Berman', title: 'SDNY US Attorney', role: 'Brought 2019 Federal Charges', riskLevel: 'low', description: 'US Attorney for the Southern District of New York who brought federal sex trafficking charges against Epstein in 2019. AG William Barr attempted to fire him and install a replacement; Berman refused to leave until his deputy Audrey Strauss was confirmed as successor.', education: ['University of Pennsylvania', 'Stanford Law School'], affiliations: [{ name: 'SDNY', role: 'US Attorney (2018-2020)', type: 'agency' }], knownAssociates: [{ name: 'Audrey Strauss', relationship: 'Deputy who succeeded him', href: '/entities/individuals/audrey-strauss' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2019 Jul', event: 'Brought federal charges against Epstein' }, { date: '2020 Jun', event: 'Barr attempted to fire him' }], sources: [] },
  'audrey-strauss': { name: 'Audrey Strauss', title: 'Acting SDNY US Attorney', role: 'Oversaw Maxwell Arrest', riskLevel: 'low', description: 'Acting US Attorney for SDNY who oversaw Ghislaine Maxwell\'s arrest in July 2020. Succeeded Geoffrey Berman after AG Barr\'s attempted removal.', education: [], affiliations: [{ name: 'SDNY', role: 'Acting US Attorney (2020)', type: 'agency' }], knownAssociates: [{ name: 'Geoffrey Berman', relationship: 'Predecessor', href: '/entities/individuals/geoffrey-berman' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2020 Jul', event: 'Oversaw Maxwell arrest in New Hampshire' }], sources: [] },
  'maurene-comey': { name: 'Maurene Comey', title: 'SDNY Prosecutor', role: 'Prosecuted Maxwell Case', riskLevel: 'low', description: 'Federal prosecutor in SDNY who worked on the Maxwell case. Daughter of former FBI Director James Comey, who was FBI Director during the original Epstein investigation.', education: [], affiliations: [{ name: 'SDNY', role: 'Assistant US Attorney', type: 'agency' }], knownAssociates: [{ name: 'James Comey', relationship: 'Father, former FBI Director', href: '/entities/individuals/james-comey' }], controversies: ['Father was FBI Director during original Epstein investigation period'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2021', event: 'Prosecuted Maxwell case' }], sources: [] },
  'juan-alessi': { name: 'Juan Alessi', title: 'Palm Beach Butler', role: 'Key Witness, 11 Years of Service', riskLevel: 'low', description: 'Served as Jeffrey Epstein\'s butler at the Palm Beach home for 11 years. Testified at the Maxwell trial about the abuse he witnessed, including seeing underage girls coming and going. Following detailed instructions from Epstein on how to manage the house including a "58-page manual."', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Employer for 11 years', href: '/entities/individuals/jeffrey-epstein' }, { name: 'Ghislaine Maxwell', relationship: 'Witnessed her role', href: '/entities/individuals/ghislaine-maxwell' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '1990-2002', event: 'Served as Epstein butler' }, { date: '2021', event: 'Testified at Maxwell trial' }], sources: [{ title: 'BBC: Butler Testimony at Maxwell Trial', url: 'https://www.bbc.com/news/world-us-canada-59553395', date: '2021' }] },
  'alfredo-rodriguez': { name: 'Alfredo Rodriguez', title: 'Epstein Butler', role: 'Stole Black Book, Died in Prison', riskLevel: 'low', description: 'Butler at Epstein\'s Palm Beach estate who stole Epstein\'s "Little Black Book" containing 1,571 names and attempted to sell it for $50,000. He was caught and sentenced to 18 months in federal prison. Died of mesothelioma in 2015. The Black Book he preserved became one of the most important pieces of evidence in understanding Epstein\'s network.', deathDate: 'January 1, 2015', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Former employer', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Stole and attempted to sell Epstein\'s Black Book', 'Sentenced to 18 months for obstruction'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2005', event: 'Stole Black Book from Epstein estate' }, { date: '2011', event: 'Sentenced to 18 months' }, { date: '2015', event: 'Died of mesothelioma' }], sources: [] },
  'igor-zinoviev': { name: 'Igor Zinoviev', title: 'Epstein Bodyguard', role: 'Security Staff, MMA Fighter', riskLevel: 'low', description: 'Mixed martial arts fighter who served as Jeffrey Epstein\'s bodyguard and witnessed activity at his properties.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Named in documents as potential witness'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'nicholas-tartaglione': { name: 'Nicholas Tartaglione', title: 'Ex-Police Officer', role: 'Epstein\'s Cellmate Before Death', riskLevel: 'medium', description: 'Former police officer charged with quadruple homicide who was Jeffrey Epstein\'s cellmate at MCC New York. Tartaglione was in the cell when Epstein was found injured and semi-conscious on July 23, 2019 (the first incident). He was subsequently transferred out, leaving Epstein without a cellmate on the night of his death August 10, 2019.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Cellmate at MCC', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Was Epstein\'s cellmate during first injury incident', 'Charged with quadruple homicide', 'Transferred out before Epstein\'s death'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2019 Jul 23', event: 'Epstein found injured in cell they shared' }, { date: '2019 Aug', event: 'Transferred out, leaving Epstein alone' }], sources: [] },
  'michael-baden': { name: 'Dr. Michael Baden', title: 'Forensic Pathologist', role: 'Found Evidence of Homicidal Strangulation', riskLevel: 'low', description: 'Forensic pathologist hired by the Epstein family who reviewed the autopsy and found evidence more consistent with homicidal strangulation than suicide. Cited a broken hyoid bone (rare in suicidal hanging but common in strangulation) and bilateral hemorrhages as inconsistent with the official suicide ruling.', birthDate: 'July 7, 1934', education: ['City College of New York', 'NYU School of Medicine'], affiliations: [], knownAssociates: [], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2019 Oct', event: 'Released findings contradicting suicide ruling' }], sources: [{ title: 'Dr. Baden Autopsy Findings', url: 'https://www.foxnews.com/us/forensic-pathologist-jeffrey-epstein-homicide', date: '2019' }] },
  'barbara-sampson': { name: 'Dr. Barbara Sampson', title: 'NYC Chief Medical Examiner', role: 'Ruled Death Suicide', riskLevel: 'low', description: 'New York City Chief Medical Examiner who ruled Jeffrey Epstein\'s death a suicide by hanging on August 16, 2019, despite contradictory findings by forensic pathologist Dr. Michael Baden.', education: [], affiliations: [{ name: 'NYC Office of Chief Medical Examiner', role: 'Chief Medical Examiner', type: 'agency' }], knownAssociates: [], controversies: ['Ruled Epstein death suicide despite contradictory expert findings'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2019 Aug 16', event: 'Ruled Epstein death suicide by hanging' }], sources: [] },
  'sarah-ransome': { name: 'Sarah Ransome', title: 'Victim, Filed Federal Lawsuit', role: 'Attempted Island Escape', riskLevel: 'low', description: 'South African-born victim of Epstein who was trafficked to Little St. James Island and was so desperate to escape that she attempted to swim to freedom through shark-infested waters. Filed a federal lawsuit against Epstein and Maxwell. Her testimony provided crucial details about conditions on the island.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' }, { name: 'Ghislaine Maxwell', relationship: 'Victim', href: '/entities/individuals/ghislaine-maxwell' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2017', event: 'Filed federal lawsuit against Epstein and Maxwell' }], sources: [{ title: 'Ransome v. Epstein', url: 'https://www.courtlistener.com/docket/6073866/ransome-v-epstein/', date: '2017' }] },
  'chauntae-davies': { name: 'Chauntae Davies', title: 'Victim, Flight Attendant', role: 'Lolita Express Flight Attendant and Victim', riskLevel: 'low', description: 'Worked as a massage therapist and flight attendant on Epstein\'s Lolita Express. One of his victims who was raped by Epstein. Witnessed Bill Clinton on multiple flights. Spoke publicly about her experience.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Victim and employee', href: '/entities/individuals/jeffrey-epstein' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [{ date: '2000s', event: 'Worked on Lolita Express' }, { date: '2019', event: 'Spoke publicly about experience' }], sources: [] },
  'teresa-helm': { name: 'Teresa Helm', title: 'Victim, Grand Jury Witness', role: 'Testified to Grand Jury', riskLevel: 'low', description: 'Victim of Epstein who testified before the grand jury. Recruited through massage work.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' }], controversies: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'french-officials': { name: 'French Officials', title: 'French Government', role: 'Protected Brunel\'s Operations', riskLevel: 'medium', description: 'Unnamed French government officials who allegedly protected Jean-Luc Brunel\'s modeling agency operations for decades despite trafficking allegations. French investigation remains ongoing.', education: [], affiliations: [{ name: 'French Government', role: 'Officials', type: 'agency' }], knownAssociates: [{ name: 'Jean-Luc Brunel', relationship: 'Allegedly protected his operations', href: '/entities/individuals/jean-luc-brunel' }], controversies: ['Alleged protection of Brunel trafficking operations'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
  'leslie-groff': { name: 'Leslie Groff', title: 'Executive Assistant', role: 'Trafficking Logistics (Alt name)', riskLevel: 'high', description: 'Alternate name reference for Lesley Groff, Epstein\'s executive assistant who managed the logistical operations of his trafficking network and was granted immunity under the 2008 NPA.', education: [], affiliations: [], knownAssociates: [{ name: 'Jeffrey Epstein', relationship: 'Executive assistant', href: '/entities/individuals/jeffrey-epstein' }], controversies: ['Managed trafficking logistics', 'Granted immunity'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], timeline: [], sources: [] },
};

// Merge all individuals
const allIndividuals = { ...individualProfiles, ...additionalIndividuals };

// ============================================================
// AGENCIES
// ============================================================
const agencyProfiles = {
  'mossad': { name: 'Mossad', acronym: 'Mossad', type: 'Foreign Intelligence', riskLevel: 'critical', description: 'Israeli national intelligence agency. Multiple intelligence sources and former officers have alleged that Jeffrey Epstein and Ghislaine Maxwell operated as Israeli intelligence assets running a sexual blackmail operation. Ghislaine\'s father Robert Maxwell was widely reported as a Mossad agent by Seymour Hersh and Gordon Thomas. Former Israeli intelligence officer Ari Ben-Menashe publicly claimed the Epstein operation was an Israeli intelligence project.', founded: '1949', headquarters: 'Tel Aviv, Israel', employees: 'Classified (estimated 7,000+)', budget: 'Classified (estimated $2.7B)', jurisdiction: 'International', controversies: ['Alleged operation of Epstein-Maxwell sexual blackmail network', 'Robert Maxwell links to Mossad extensively documented', 'Ari Ben-Menashe claims about Epstein-Maxwell as assets', 'Refusal to confirm or deny involvement'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Robert Maxwell', position: 'Alleged Agent (Deceased)', href: '/entities/individuals/robert-maxwell' }] },
  'french-justice': { name: 'French Judicial System', acronym: 'PJ', type: 'Judicial', riskLevel: 'medium', description: 'French judicial authorities who opened an investigation into Jeffrey Epstein\'s activities in France in 2019. Paris prosecutors investigated crimes at Epstein\'s Avenue Foch apartment. Jean-Luc Brunel was charged with rape of minors before dying in custody in 2022.', founded: '1789', headquarters: 'Paris, France', employees: '85,000+', budget: 'EUR 9.5B', jurisdiction: 'France', controversies: ['Delayed investigation into Epstein French connections', 'Brunel died in French custody before trial', 'Questions about protection of modeling industry trafficking'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
  'usvi-ag': { name: 'US Virgin Islands Attorney General', acronym: 'USVI AG', type: 'Territorial Law Enforcement', riskLevel: 'medium', description: 'The USVI AG office filed a landmark lawsuit against the Epstein estate in 2020. AG Denise George detailed decades of trafficking in the territory. George was fired by the USVI governor one day after suing JPMorgan over Epstein ties. Her successor continued both cases.', founded: '1954', headquarters: 'Charlotte Amalie, USVI', employees: '50+', budget: '$8M', jurisdiction: 'US Virgin Islands', controversies: ['AG Denise George fired after suing JPMorgan', 'Epstein received secret tax benefits from USVI government', 'Local officials aware of activities for decades'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Denise George', position: 'Former AG (Fired)' }] },
  'palm-beach-pd': { name: 'Palm Beach Police Department', acronym: 'PBPD', type: 'Local Law Enforcement', riskLevel: 'low', description: 'Conducted the original investigation into Epstein starting in 2005 under Chief Michael Reiter and Detective Joe Recarey. Identified 40+ victims. Their work was undermined at the state and federal level but is considered the most thorough law enforcement effort against Epstein.', founded: '1929', headquarters: 'Palm Beach, Florida', employees: '155+', budget: '$38M', jurisdiction: 'Palm Beach, Florida', controversies: ['Investigation undermined by state attorney Barry Krischer', 'Overwhelming evidence did not lead to serious prosecution', 'Chief Reiter took extraordinary step of referring to FBI'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Michael Reiter', position: 'Chief (at time)', href: '/entities/individuals/michael-reiter' }, { name: 'Joe Recarey', position: 'Lead Detective (Deceased)', href: '/entities/individuals/joe-recarey' }] },
  'afp': { name: 'Australian Federal Police', acronym: 'AFP', type: 'Federal Law Enforcement', riskLevel: 'low', description: 'Investigated Epstein connections following revelations that some victims were Australian nationals. Australian media reported connections between Epstein and Australian figures in his black book.', founded: '1979', headquarters: 'Canberra, Australia', employees: '6,900+', budget: 'AUD $1.7B', jurisdiction: 'Australia', controversies: ['Details of Epstein-related investigation remain largely classified'], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
};

// ============================================================
// CORPORATIONS
// ============================================================
const corporationProfiles = {
  'dalton-school': { name: 'Dalton School', industry: 'Private Education', riskLevel: 'medium', description: 'Elite Manhattan private prep school where Jeffrey Epstein was hired as a math and physics teacher at age 20 in 1973 despite lacking a college degree. He was hired by headmaster Donald Barr, whose son William Barr later became Attorney General overseeing the prison where Epstein died.', founded: '1919', headquarters: 'New York City, NY', employees: '350+', revenue: '$60M+', ceo: 'Jim Best (Head of School)', controversies: ['Hired unqualified 20-year-old Epstein', 'Donald Barr connection to future AG William Barr', 'Epstein reportedly fired for inappropriate behavior with students'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Donald Barr', role: 'Headmaster (1964-1974)', href: '/entities/individuals/donald-barr' }] },
  'harvard-university': { name: 'Harvard University', industry: 'Higher Education', riskLevel: 'high', description: 'Received $9M+ in donations from Jeffrey Epstein. Epstein maintained an office in Harvard\'s Department of Evolutionary Biology after his 2008 conviction. Martin Nowak ran an Epstein-funded program. Professor Alan Dershowitz represented Epstein legally. Larry Summers met with Epstein during his Harvard presidency.', founded: '1636', headquarters: 'Cambridge, MA', employees: '20,000+', revenue: '$5.8B', ceo: 'Alan Garber (President)', controversies: ['Accepted $9M+ from Epstein', 'Epstein maintained campus office post-conviction', 'Nowak\'s Epstein-funded program', 'Failed to sever ties after conviction'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Larry Summers', role: 'Former President', href: '/entities/individuals/larry-summers' }, { name: 'Martin Nowak', role: 'PED Director', href: '/entities/individuals/martin-nowak' }] },
  'mit': { name: 'Massachusetts Institute of Technology', industry: 'Higher Education', riskLevel: 'high', description: 'MIT Media Lab under Joi Ito accepted and concealed funding from Epstein after his conviction. Ito referred to Epstein internally as "Voldemort." Marvin Minsky, MIT AI pioneer, was named in victim depositions. MIT accepted the funding knowingly.', founded: '1861', headquarters: 'Cambridge, MA', employees: '13,000+', revenue: '$3.8B', ceo: 'Sally Kornbluth (President)', controversies: ['Hidden Epstein funding at Media Lab', 'Marvin Minsky named in victim depositions', 'Institutional concealment of donor identity'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Joi Ito', role: 'Former Media Lab Director', href: '/entities/individuals/joi-ito' }, { name: 'Marvin Minsky', role: 'AI Lab Co-Founder (Deceased)', href: '/entities/individuals/marvin-minsky' }] },
  'ohio-state': { name: 'Ohio State University', industry: 'Higher Education', riskLevel: 'medium', description: 'Les Wexner, Epstein\'s primary financial backer, was the largest individual donor to Ohio State. The Wexner Foundation and Wexner Center for the Arts gave Wexner enormous institutional influence.', founded: '1870', headquarters: 'Columbus, OH', employees: '50,000+', revenue: '$8.6B', ceo: 'Walter Carter Jr. (President)', controversies: ['Wexner\'s largest donor status and Epstein ties', 'Wexner Foundation influence'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Les Wexner', role: 'Largest Donor', href: '/entities/individuals/les-wexner' }] },
  'mc2': { name: 'MC2 Model Management', industry: 'Modeling Agency', riskLevel: 'critical', description: 'Jean-Luc Brunel\'s modeling agency funded by Epstein that served as a trafficking pipeline. Brought young models (some underage) from South America, Eastern Europe, and France to the US on work visas arranged by Epstein\'s attorneys. MC2 was a key front for the trafficking operation.', founded: '2005', headquarters: 'Miami, FL / New York City', employees: '20+', revenue: 'Unknown', ceo: 'Jean-Luc Brunel (Deceased)', controversies: ['Key trafficking front operation', 'Recruited underage models internationally', 'Work visa fraud for trafficking victims', 'Funded directly by Epstein'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Jean-Luc Brunel', role: 'Founder (Deceased)', href: '/entities/individuals/jean-luc-brunel' }] },
  'interlochen': { name: 'Interlochen Center for the Arts', industry: 'Arts Education', riskLevel: 'medium', description: 'Prestigious arts camp for young people in Michigan that received donations from Epstein. A lodge was named after him before being renamed. The camp provided Epstein access to young aspiring artists and performers.', founded: '1928', headquarters: 'Interlochen, MI', employees: '500+', revenue: '$50M+', ceo: 'Trey Devey (President)', controversies: ['Accepted Epstein donations', 'Named lodge after him', 'Provided access to young performers'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
  'bear-stearns': { name: 'Bear Stearns', industry: 'Investment Banking', riskLevel: 'medium', description: 'Major investment bank where Epstein worked as an options trader from 1976 to 1981. Rose to limited partner despite lacking a college degree. Made the connections that launched his independent financial career. Bear Stearns collapsed in 2008 financial crisis.', founded: '1923', headquarters: 'New York City (Historical)', employees: '0 (Acquired by JPMorgan 2008)', revenue: 'N/A (Defunct)', ceo: 'N/A (Defunct)', controversies: ['Hired unqualified Epstein', 'SEC investigation while Epstein was there', 'Collapsed in 2008 financial crisis'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }, { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' }], keyFigures: [] },
  'southern-trust': { name: 'Southern Trust Company', industry: 'Financial Services', riskLevel: 'high', description: 'Shell company established by Epstein in the US Virgin Islands to gain tax advantages and reduced regulatory oversight for his financial operations.', founded: '1995', headquarters: 'US Virgin Islands', employees: 'Unknown', revenue: 'Unknown', ceo: 'Jeffrey Epstein (Deceased)', controversies: ['Tax avoidance scheme', 'Reduced regulatory oversight', 'Part of complex shell company network'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
  'financial-trust': { name: 'Financial Trust Company', industry: 'Financial Services', riskLevel: 'high', description: 'USVI-based entity in Epstein\'s financial web. Received significant tax benefits. USVI AG later sued estate alleging benefits were obtained through fraud.', founded: '1990s', headquarters: 'US Virgin Islands', employees: 'Unknown', revenue: 'Unknown', ceo: 'Jeffrey Epstein (Deceased)', controversies: ['Tax benefits obtained through alleged fraud', 'Part of Epstein shell company network'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
  'gratitude-america': { name: 'Gratitude America Ltd', industry: 'Holding Company', riskLevel: 'medium', description: 'LLC controlled by Ghislaine Maxwell used to purchase the Bradford, New Hampshire property where she was eventually arrested by the FBI in July 2020.', founded: '2019', headquarters: 'Bradford, NH', employees: '0', revenue: 'N/A', ceo: 'Ghislaine Maxwell', controversies: ['Used to conceal Maxwell\'s location', 'Part of Maxwell\'s asset concealment efforts'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Ghislaine Maxwell', role: 'Controller', href: '/entities/individuals/ghislaine-maxwell' }] },
  'apollo-global': { name: 'Apollo Global Management', industry: 'Private Equity', riskLevel: 'high', description: 'One of the world\'s largest alternative asset managers. CEO Leon Black paid Epstein $158M in "advisory fees" between 2012-2017 after his sex offender conviction. Black stepped down as CEO in 2021.', founded: '1990', headquarters: 'New York City', employees: '2,600+', revenue: '$24B+ AUM', ceo: 'Marc Rowan', controversies: ['CEO paid $158M to convicted sex offender', 'Questions about leverage Epstein had over Black', 'Black stepped down amid scrutiny'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Leon Black', role: 'Former CEO', href: '/entities/individuals/leon-black' }] },
  'towers-financial': { name: 'Towers Financial Corporation', industry: 'Financial Services (Ponzi Scheme)', riskLevel: 'critical', description: 'Steven Hoffenberg\'s $475M Ponzi scheme where Epstein served as a consultant. Hoffenberg claimed Epstein was an equal partner in the fraud. The company collapsed in 1993. Critical origin story for Epstein\'s mysterious wealth.', founded: '1983', headquarters: 'New York City', employees: '0 (Defunct)', revenue: 'N/A (Fraud)', ceo: 'Steven Hoffenberg (Deceased)', controversies: ['$475M Ponzi scheme', 'Epstein allegedly was equal partner', 'Epstein never charged'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Steven Hoffenberg', role: 'CEO (Deceased)', href: '/entities/individuals/steven-hoffenberg' }] },
  'rockefeller-university': { name: 'Rockefeller University', industry: 'Research University', riskLevel: 'low', description: 'Epstein served on the Mind, Brain, and Behavior advisory committee at Rockefeller University, using the position for scientific credibility.', founded: '1901', headquarters: 'New York City', employees: '3,200+', revenue: '$350M', ceo: 'Richard Lifton (President)', controversies: ['Epstein served on advisory committee'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
  'karin-models': { name: 'Karin Models', industry: 'Modeling Agency', riskLevel: 'high', description: 'French modeling agency connected to Jean-Luc Brunel\'s trafficking network. Supplied models for events that served as cover for recruiting victims from France and Europe.', founded: '1970s', headquarters: 'Paris, France', employees: 'Unknown', revenue: 'Unknown', ceo: 'Unknown', controversies: ['Connected to Brunel trafficking pipeline', 'Supplied models used as recruitment cover'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Jean-Luc Brunel', role: 'Connected Agent (Deceased)', href: '/entities/individuals/jean-luc-brunel' }] },
  'columbus-nova': { name: 'Columbus Nova', industry: 'Investment Management', riskLevel: 'medium', description: 'Investment firm connected to Russian oligarch Viktor Vekselberg. Financial connections between Epstein\'s network and Russian money raise questions about intelligence interests.', founded: '2000', headquarters: 'New York City', employees: '50+', revenue: 'Unknown', ceo: 'Andrew Intrater', controversies: ['Links to Russian oligarch Vekselberg', 'Epstein network financial connections', 'Vekselberg sanctioned by US government'], subsidiaries: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [] },
};

// ============================================================
// ORGANIZATIONS
// ============================================================
const organizationProfiles = {
  'terramar': { name: 'TerraMar Project', type: 'Non-Profit (Defunct)', riskLevel: 'high', description: 'Ghislaine Maxwell\'s ocean conservation charity that closed days after Epstein\'s 2019 arrest. Used to provide Maxwell nonprofit credibility, travel justification, and access to influential circles including the UN. Financial irregularities documented.', founded: '2012', headquarters: 'New York City', funding: 'Unclear - financial irregularities', website: 'Offline', mission: 'Ocean conservation (alleged cover)', controversies: ['Closed immediately after Epstein arrest', 'Used for Maxwell credibility and UN access', 'Financial irregularities', 'Suspected front organization'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Ghislaine Maxwell', role: 'Founder', href: '/entities/individuals/ghislaine-maxwell' }], affiliatedOrganizations: [{ name: 'United Nations', relationship: 'Maxwell spoke at UN events', href: '/entities/organizations/united-nations' }], timeline: [{ date: '2012', event: 'Founded by Maxwell' }, { date: '2019 Jul', event: 'Closed days after Epstein arrest' }], sources: [] },
  'clinton-foundation': { name: 'Clinton Foundation', type: 'Non-Profit', riskLevel: 'medium', description: 'The Clinton Foundation\'s connection to Epstein extended through Bill Clinton\'s personal relationship. Clinton flew on the Lolita Express for African charity trips. Epstein visited the Clinton White House. Maxwell attended Chelsea Clinton\'s wedding.', founded: '1997', headquarters: 'New York City', funding: '$2B+ lifetime donations', website: 'https://www.clintonfoundation.org', mission: 'Global health, economic development', controversies: ['Clinton-Epstein flight logs', 'Epstein White House visits', 'Maxwell at Chelsea\'s wedding'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Bill Clinton', role: 'Founder', href: '/entities/individuals/bill-clinton' }], affiliatedOrganizations: [], timeline: [{ date: '1997', event: 'Founded' }, { date: '2002', event: 'Clinton flights on Lolita Express to Africa' }], sources: [] },
  'cfr': { name: 'Council on Foreign Relations', type: 'Think Tank', riskLevel: 'low', description: 'Elite foreign policy think tank. Epstein was a member and used it to network with powerful political and business figures, providing legitimacy and institutional cover.', founded: '1921', headquarters: 'New York City', members: '5,000+', website: 'https://www.cfr.org', mission: 'Foreign policy analysis', controversies: ['Epstein used membership for legitimacy'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [], affiliatedOrganizations: [], timeline: [{ date: '1921', event: 'Founded' }], sources: [] },
  'edge-foundation': { name: 'Edge Foundation', type: 'Intellectual Network', riskLevel: 'high', description: 'Founded by John Brockman, the Edge Foundation was the primary intellectual networking hub that connected Epstein to world-class scientists. Hosted annual dinners and conferences that Epstein funded. Brockman facilitated introductions between Epstein and Nobel laureates including Murray Gell-Mann, Frank Wilczek, and others. The Edge network was Epstein\'s key conduit to academic respectability.', founded: '1996', headquarters: 'New York City', funding: 'Private donations including Epstein', website: 'https://www.edge.org', mission: 'Intellectual discourse', controversies: ['Primary conduit connecting Epstein to scientists', 'Epstein funded events and dinners', 'Brockman continued facilitation after conviction'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'John Brockman', role: 'Founder', href: '/entities/individuals/john-brockman' }, { name: 'Katinka Matson', role: 'Co-Founder', href: '/entities/individuals/katinka-matson' }], affiliatedOrganizations: [{ name: 'Santa Fe Institute', relationship: 'Overlapping intellectual circles', href: '/entities/organizations/santa-fe-institute' }], timeline: [{ date: '1996', event: 'Founded by Brockman' }, { date: '2000s', event: 'Epstein-funded events connected him to scientists' }, { date: '2019', event: 'Epstein connections exposed' }], sources: [{ title: 'NYT: Edge Foundation-Epstein', url: 'https://www.nytimes.com/2019/09/01/business/dealbook/jeffrey-epstein-science.html', date: '2019' }] },
  'epstein-vcf': { name: 'Epstein Victims\' Compensation Fund', type: 'Victim Compensation', riskLevel: 'low', description: 'Established in 2020 to compensate Epstein\'s victims from his estate. Managed by Jordana Feldman. Distributed $125M+ to 150+ claimants. Estate valued at $634M at death.', founded: '2020', headquarters: 'New York City', funding: '$634M estate', website: 'https://www.epsteinclaims.com', mission: 'Victim compensation', controversies: ['Some victims rejected as insufficient', 'Claimants waived right to sue estate'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Jordana Feldman', role: 'Administrator' }], affiliatedOrganizations: [], timeline: [{ date: '2020', event: 'Established' }, { date: '2021', event: 'Distributed $125M+ to 150+ claimants' }], sources: [{ title: 'VCF Report', url: 'https://www.epsteinclaims.com/', date: '2021' }] },
  'santa-fe-institute': { name: 'Santa Fe Institute', type: 'Research Institute', riskLevel: 'low', description: 'Leading complexity science research center. Epstein was a donor with connections through Murray Gell-Mann and other scientists.', founded: '1984', headquarters: 'Santa Fe, NM', members: '200+ researchers', website: 'https://www.santafe.edu', mission: 'Complexity science research', controversies: ['Accepted Epstein donations'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Murray Gell-Mann', role: 'Co-Founder (Deceased)', href: '/entities/individuals/murray-gell-mann' }], affiliatedOrganizations: [{ name: 'Edge Foundation', relationship: 'Overlapping circles', href: '/entities/organizations/edge-foundation' }], timeline: [{ date: '1984', event: 'Founded' }], sources: [] },
  'nyas': { name: 'New York Academy of Sciences', type: 'Scientific Organization', riskLevel: 'low', description: 'Epstein used connections to scientific institutions including NYAS to build a philanthropist image concealing his activities.', founded: '1817', headquarters: 'New York City', members: '20,000+', website: 'https://www.nyas.org', mission: 'Scientific advancement', controversies: ['Epstein used for credibility'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [], affiliatedOrganizations: [], timeline: [{ date: '1817', event: 'Founded' }], sources: [] },
  'united-nations': { name: 'United Nations', type: 'International Organization', riskLevel: 'low', description: 'Ghislaine Maxwell used the TerraMar Project to gain access to the UN and international diplomatic circles. She spoke at UN events and cultivated relationships with diplomats.', founded: '1945', headquarters: 'New York City', members: '193 member states', website: 'https://www.un.org', mission: 'International peace and cooperation', controversies: ['Maxwell used TerraMar for UN access', 'Terje Roed-Larsen received $130K from Epstein'], charges: [], relatedInvestigations: [{ title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' }], keyFigures: [{ name: 'Terje Roed-Larsen', role: 'Former Special Envoy (Received Epstein Funds)', href: '/entities/individuals/terje-roed-larsen' }], affiliatedOrganizations: [{ name: 'TerraMar Project', relationship: 'Maxwell\'s UN access vehicle', href: '/entities/organizations/terramar' }], timeline: [{ date: '1945', event: 'Founded' }], sources: [] },
};

// ============================================================
// WRITE TO FILES
// ============================================================

function insertBeforeLine(filePath, searchLine, newContent) {
  const fullPath = path.join(projectRoot, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  const idx = content.indexOf(searchLine);
  if (idx === -1) {
    console.error(`Could not find "${searchLine}" in ${filePath}`);
    return false;
  }
  content = content.slice(0, idx) + newContent + '\n' + content.slice(idx);
  fs.writeFileSync(fullPath, content, 'utf-8');
  return true;
}

function formatIndividualProfile(slug, p) {
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${p.name.replace(/'/g, "\\'")}',`);
  lines.push(`    title: '${(p.title || '').replace(/'/g, "\\'")}',`);
  lines.push(`    role: '${(p.role || '').replace(/'/g, "\\'")}',`);
  lines.push(`    riskLevel: '${p.riskLevel || 'medium'}',`);
  lines.push(`    description: '${(p.description || '').replace(/'/g, "\\'")}',`);
  if (p.birthDate) lines.push(`    birthDate: '${p.birthDate}',`);
  if (p.birthPlace) lines.push(`    birthPlace: '${(p.birthPlace || '').replace(/'/g, "\\'")}',`);
  if (p.deathDate) lines.push(`    deathDate: '${p.deathDate}',`);
  lines.push(`    education: [${(p.education || []).map(e => `'${e.replace(/'/g, "\\'")}'`).join(', ')}],`);
  if (p.netWorth) lines.push(`    netWorth: '${p.netWorth}',`);
  if (p.aliases) lines.push(`    aliases: [${p.aliases.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ')}],`);
  
  // affiliations
  if (p.affiliations && p.affiliations.length > 0) {
    lines.push(`    affiliations: [`);
    for (const a of p.affiliations) {
      lines.push(`      { name: '${a.name.replace(/'/g, "\\'")}', role: '${a.role.replace(/'/g, "\\'")}', type: '${a.type}' },`);
    }
    lines.push(`    ],`);
  } else {
    lines.push(`    affiliations: [],`);
  }
  
  // knownAssociates
  if (p.knownAssociates && p.knownAssociates.length > 0) {
    lines.push(`    knownAssociates: [`);
    for (const ka of p.knownAssociates) {
      const hrefPart = ka.href ? `, href: '${ka.href}'` : '';
      lines.push(`      { name: '${ka.name.replace(/'/g, "\\'")}', relationship: '${ka.relationship.replace(/'/g, "\\'")}'${hrefPart} },`);
    }
    lines.push(`    ],`);
  } else {
    lines.push(`    knownAssociates: [],`);
  }
  
  // controversies
  lines.push(`    controversies: [`);
  for (const c of (p.controversies || [])) {
    lines.push(`      '${c.replace(/'/g, "\\'")}',`);
  }
  lines.push(`    ],`);
  
  // relatedInvestigations
  lines.push(`    relatedInvestigations: [`);
  for (const ri of (p.relatedInvestigations || [])) {
    lines.push(`      { title: '${ri.title.replace(/'/g, "\\'")}', slug: '${ri.slug}', severity: '${ri.severity}' },`);
  }
  lines.push(`    ],`);
  
  // timeline
  lines.push(`    timeline: [`);
  for (const t of (p.timeline || [])) {
    lines.push(`      { date: '${t.date}', event: '${t.event.replace(/'/g, "\\'")}' },`);
  }
  lines.push(`    ],`);
  
  // sources
  if (p.sources && p.sources.length > 0) {
    lines.push(`    sources: [`);
    for (const s of p.sources) {
      const urlPart = s.url ? `, url: '${s.url}'` : '';
      const datePart = s.date ? `, date: '${s.date}'` : '';
      lines.push(`      { title: '${s.title.replace(/'/g, "\\'")}'${urlPart}${datePart} },`);
    }
    lines.push(`    ],`);
  } else {
    lines.push(`    sources: [],`);
  }
  
  lines.push(`  },`);
  return lines.join('\n');
}

function formatAgencyProfile(slug, a) {
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${a.name.replace(/'/g, "\\'")}',`);
  lines.push(`    acronym: '${(a.acronym || '').replace(/'/g, "\\'")}',`);
  lines.push(`    type: '${(a.type || '').replace(/'/g, "\\'")}',`);
  lines.push(`    riskLevel: '${a.riskLevel || 'medium'}',`);
  lines.push(`    description: '${(a.description || '').replace(/'/g, "\\'")}',`);
  lines.push(`    founded: '${a.founded || ''}',`);
  lines.push(`    headquarters: '${(a.headquarters || '').replace(/'/g, "\\'")}',`);
  lines.push(`    employees: '${a.employees || ''}',`);
  lines.push(`    budget: '${(a.budget || '').replace(/'/g, "\\'")}',`);
  lines.push(`    jurisdiction: '${(a.jurisdiction || '').replace(/'/g, "\\'")}',`);
  lines.push(`    controversies: [`);
  for (const c of (a.controversies || [])) lines.push(`      '${c.replace(/'/g, "\\'")}',`);
  lines.push(`    ],`);
  lines.push(`    relatedInvestigations: [`);
  for (const ri of (a.relatedInvestigations || [])) lines.push(`      { title: '${ri.title.replace(/'/g, "\\'")}', slug: '${ri.slug}', severity: '${ri.severity}' },`);
  lines.push(`    ],`);
  lines.push(`    keyFigures: [`);
  for (const kf of (a.keyFigures || [])) {
    const hrefPart = kf.href ? `, href: '${kf.href}'` : '';
    lines.push(`      { name: '${kf.name.replace(/'/g, "\\'")}', position: '${kf.position.replace(/'/g, "\\'")}'${hrefPart} },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join('\n');
}

function formatCorpProfile(slug, c) {
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${c.name.replace(/'/g, "\\'")}',`);
  lines.push(`    industry: '${(c.industry || '').replace(/'/g, "\\'")}',`);
  lines.push(`    riskLevel: '${c.riskLevel || 'medium'}',`);
  lines.push(`    description: '${(c.description || '').replace(/'/g, "\\'")}',`);
  lines.push(`    founded: '${c.founded || ''}',`);
  lines.push(`    headquarters: '${(c.headquarters || '').replace(/'/g, "\\'")}',`);
  lines.push(`    employees: '${c.employees || ''}',`);
  lines.push(`    revenue: '${(c.revenue || '').replace(/'/g, "\\'")}',`);
  lines.push(`    ceo: '${(c.ceo || '').replace(/'/g, "\\'")}',`);
  lines.push(`    controversies: [`);
  for (const cv of (c.controversies || [])) lines.push(`      '${cv.replace(/'/g, "\\'")}',`);
  lines.push(`    ],`);
  lines.push(`    subsidiaries: [${(c.subsidiaries || []).map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ')}],`);
  lines.push(`    relatedInvestigations: [`);
  for (const ri of (c.relatedInvestigations || [])) lines.push(`      { title: '${ri.title.replace(/'/g, "\\'")}', slug: '${ri.slug}', severity: '${ri.severity}' },`);
  lines.push(`    ],`);
  if (c.keyFigures && c.keyFigures.length > 0) {
    lines.push(`    keyFigures: [`);
    for (const kf of c.keyFigures) {
      const hrefPart = kf.href ? `, href: '${kf.href}'` : '';
      lines.push(`      { name: '${kf.name.replace(/'/g, "\\'")}', role: '${kf.role.replace(/'/g, "\\'")}'${hrefPart} },`);
    }
    lines.push(`    ],`);
  }
  if (c.legalHistory && c.legalHistory.length > 0) {
    lines.push(`    legalHistory: [`);
    for (const lh of c.legalHistory) lines.push(`      '${lh.replace(/'/g, "\\'")}',`);
    lines.push(`    ],`);
  }
  lines.push(`  },`);
  return lines.join('\n');
}

function formatOrgProfile(slug, o) {
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${o.name.replace(/'/g, "\\'")}',`);
  lines.push(`    type: '${(o.type || '').replace(/'/g, "\\'")}',`);
  lines.push(`    riskLevel: '${o.riskLevel || 'medium'}',`);
  lines.push(`    description: '${(o.description || '').replace(/'/g, "\\'")}',`);
  lines.push(`    founded: '${o.founded || ''}',`);
  lines.push(`    headquarters: '${(o.headquarters || '').replace(/'/g, "\\'")}',`);
  if (o.members) lines.push(`    members: '${o.members}',`);
  if (o.funding) lines.push(`    funding: '${(o.funding || '').replace(/'/g, "\\'")}',`);
  if (o.website) lines.push(`    website: '${o.website}',`);
  if (o.mission) lines.push(`    mission: '${(o.mission || '').replace(/'/g, "\\'")}',`);
  lines.push(`    controversies: [`);
  for (const c of (o.controversies || [])) lines.push(`      '${c.replace(/'/g, "\\'")}',`);
  lines.push(`    ],`);
  lines.push(`    charges: [${(o.charges || []).map(ch => `{ statute: '${ch.statute}', description: '${ch.description.replace(/'/g, "\\'")}', category: '${ch.category}' }`).join(', ')}],`);
  lines.push(`    relatedInvestigations: [`);
  for (const ri of (o.relatedInvestigations || [])) lines.push(`      { title: '${ri.title.replace(/'/g, "\\'")}', slug: '${ri.slug}', severity: '${ri.severity}' },`);
  lines.push(`    ],`);
  lines.push(`    keyFigures: [`);
  for (const kf of (o.keyFigures || [])) {
    const hrefPart = kf.href ? `, href: '${kf.href}'` : '';
    lines.push(`      { name: '${kf.name.replace(/'/g, "\\'")}', role: '${kf.role.replace(/'/g, "\\'")}'${hrefPart} },`);
  }
  lines.push(`    ],`);
  lines.push(`    affiliatedOrganizations: [`);
  for (const ao of (o.affiliatedOrganizations || [])) {
    const hrefPart = ao.href ? `, href: '${ao.href}'` : '';
    lines.push(`      { name: '${ao.name.replace(/'/g, "\\'")}', relationship: '${ao.relationship.replace(/'/g, "\\'")}'${hrefPart} },`);
  }
  lines.push(`    ],`);
  lines.push(`    timeline: [`);
  for (const t of (o.timeline || [])) lines.push(`      { date: '${t.date}', event: '${t.event.replace(/'/g, "\\'")}' },`);
  lines.push(`    ],`);
  lines.push(`    sources: [`);
  for (const s of (o.sources || [])) {
    const urlPart = s.url ? `, url: '${s.url}'` : '';
    lines.push(`      { title: '${s.title.replace(/'/g, "\\'")}'${urlPart}, date: '${s.date || ''}' },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join('\n');
}

// Format listing entries
function formatIndividualListing(slug, p) {
  const risk = p.riskLevel === 'critical' ? 'extreme' : p.riskLevel;
  return `  {\n    id: "${slug}-ep",\n    slug: "${slug}",\n    name: "${p.name}",\n    type: "individual",\n    description: "${(p.description || '').slice(0, 200).replace(/"/g, '\\"')}...",\n    role: "${(p.role || p.title || '').replace(/"/g, '\\"')}",\n    investigationCount: 1,\n    riskLevel: "${risk}",\n  },`;
}

function formatAgencyListing(slug, a) {
  return `  {\n    id: "${slug}-ep",\n    slug: "${slug}",\n    name: "${a.name}",\n    type: "agency",\n    description: "${(a.description || '').slice(0, 200).replace(/"/g, '\\"')}...",\n    role: "${(a.type || '').replace(/"/g, '\\"')}",\n    investigationCount: 1,\n    riskLevel: "${a.riskLevel}",\n  },`;
}

function formatCorpListing(slug, c) {
  return `  {\n    id: "${slug}-ep",\n    slug: "${slug}",\n    name: "${c.name}",\n    type: "corporation",\n    description: "${(c.description || '').slice(0, 200).replace(/"/g, '\\"')}...",\n    role: "${(c.industry || '').replace(/"/g, '\\"')}",\n    investigationCount: 1,\n    riskLevel: "${c.riskLevel}",\n  },`;
}

function formatOrgListing(slug, o) {
  return `  {\n    id: "${slug}-ep",\n    slug: "${slug}",\n    name: "${o.name}",\n    type: "organization",\n    description: "${(o.description || '').slice(0, 200).replace(/"/g, '\\"')}...",\n    riskLevel: '${o.riskLevel}' as const,\n    members: '${(o.members || 'N/A').replace(/'/g, "\\'")}',\n  },`;
}

// ============================================================
// EXECUTE
// ============================================================

console.log('Adding Epstein network entity profiles...\n');

// 1. Individual profiles
let individualContent = '';
for (const [slug, profile] of Object.entries(allIndividuals)) {
  individualContent += formatIndividualProfile(slug, profile) + '\n';
}
const indResult = insertBeforeLine(
  'src/app/entities/individuals/[slug]/page.tsx',
  '\n};',
  individualContent
);
console.log(`Individuals [slug]: ${indResult ? 'SUCCESS' : 'FAILED'} (${Object.keys(allIndividuals).length} profiles)`);

// 2. Agency profiles
let agencyContent = '';
for (const [slug, profile] of Object.entries(agencyProfiles)) {
  agencyContent += formatAgencyProfile(slug, profile) + '\n';
}
const agResult = insertBeforeLine(
  'src/app/entities/agencies/[slug]/page.tsx',
  '\n};',
  agencyContent
);
console.log(`Agencies [slug]: ${agResult ? 'SUCCESS' : 'FAILED'} (${Object.keys(agencyProfiles).length} profiles)`);

// 3. Corporation profiles
let corpContent = '';
for (const [slug, profile] of Object.entries(corporationProfiles)) {
  corpContent += formatCorpProfile(slug, profile) + '\n';
}
const corpResult = insertBeforeLine(
  'src/app/entities/corporations/[slug]/page.tsx',
  '\n};',
  corpContent
);
console.log(`Corporations [slug]: ${corpResult ? 'SUCCESS' : 'FAILED'} (${Object.keys(corporationProfiles).length} profiles)`);

// 4. Organization profiles
let orgContent = '';
for (const [slug, profile] of Object.entries(organizationProfiles)) {
  orgContent += formatOrgProfile(slug, profile) + '\n';
}
const orgResult = insertBeforeLine(
  'src/app/entities/organizations/[slug]/page.tsx',
  '\n};',
  orgContent
);
console.log(`Organizations [slug]: ${orgResult ? 'SUCCESS' : 'FAILED'} (${Object.keys(organizationProfiles).length} profiles)`);

// 5. Individual listing entries
let indListContent = '';
for (const [slug, profile] of Object.entries(allIndividuals)) {
  indListContent += formatIndividualListing(slug, profile) + '\n';
}
const indListResult = insertBeforeLine(
  'src/app/entities/individuals/page.tsx',
  '\n];',
  indListContent
);
console.log(`Individuals listing: ${indListResult ? 'SUCCESS' : 'FAILED'}`);

// 6. Agency listing entries
let agListContent = '';
for (const [slug, profile] of Object.entries(agencyProfiles)) {
  agListContent += formatAgencyListing(slug, profile) + '\n';
}
const agListResult = insertBeforeLine(
  'src/app/entities/agencies/page.tsx',
  '\n];',
  agListContent
);
console.log(`Agencies listing: ${agListResult ? 'SUCCESS' : 'FAILED'}`);

// 7. Corporation listing entries
let corpListContent = '';
for (const [slug, profile] of Object.entries(corporationProfiles)) {
  corpListContent += formatCorpListing(slug, profile) + '\n';
}
const corpListResult = insertBeforeLine(
  'src/app/entities/corporations/page.tsx',
  '\n];',
  corpListContent
);
console.log(`Corporations listing: ${corpListResult ? 'SUCCESS' : 'FAILED'}`);

// 8. Organization listing entries
let orgListContent = '';
for (const [slug, profile] of Object.entries(organizationProfiles)) {
  orgListContent += formatOrgListing(slug, profile) + '\n';
}
const orgListResult = insertBeforeLine(
  'src/app/entities/organizations/page.tsx',
  '\n];',
  orgListContent
);
console.log(`Organizations listing: ${orgListResult ? 'SUCCESS' : 'FAILED'}`);

console.log('\nDone! Added:');
console.log(`  ${Object.keys(allIndividuals).length} individual profiles + listing entries`);
console.log(`  ${Object.keys(agencyProfiles).length} agency profiles + listing entries`);
console.log(`  ${Object.keys(corporationProfiles).length} corporation profiles + listing entries`);
console.log(`  ${Object.keys(organizationProfiles).length} organization profiles + listing entries`);
console.log(`  TOTAL: ${Object.keys(allIndividuals).length + Object.keys(agencyProfiles).length + Object.keys(corporationProfiles).length + Object.keys(organizationProfiles).length} new entity profiles`);
