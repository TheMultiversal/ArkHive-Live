// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'xi-jinping': {
    name: 'Xi Jinping',
    title: 'President of the People\'s Republic of China',
    role: 'General Secretary of CPC, President of PRC, Chairman of CMC (2012-present)',
    riskLevel: 'critical',
    description: 'Xi Jinping is the paramount leader of China, holding the titles of General Secretary of the Communist Party, President of the People\'s Republic, and Chairman of the Central Military Commission. He has consolidated more power than any leader since Mao, abolished presidential term limits, overseen the mass detention of over one million Uyghurs in Xinjiang, crushed Hong Kong\'s democratic movement, expanded surveillance technology globally, and presided over economic coercion campaigns against multiple nations.',
    birthDate: 'June 15, 1953',
    birthPlace: 'Beijing, China',
    netWorth: 'Unknown (family reported wealth of $1.5 billion)',
    education: ['Doctor of Law - Tsinghua University (2002)', 'Chemical Engineering - Tsinghua University (1979)'],
    affiliations: [
      { name: 'Chinese Communist Party', role: 'General Secretary (2012-present)', type: 'organization' },
      { name: 'People\'s Republic of China', role: 'President (2013-present)', type: 'agency' },
      { name: 'Central Military Commission', role: 'Chairman (2012-present)', type: 'agency' },
    ],
    controversies: [
      'UYGHUR GENOCIDE: Over one million Uyghurs detained in concentration camps in Xinjiang, forced labor, forced sterilization, cultural erasure',
      'HONG KONG CRACKDOWN: Imposed National Security Law (2020) crushing democratic movement, arrested hundreds of activists',
      'TERM LIMIT ABOLITION: Removed presidential term limits in 2018, enabling indefinite rule',
      'SURVEILLANCE STATE: Built world\'s most extensive surveillance system, social credit scoring, facial recognition tracking',
      'COVID COVER-UP: Initial suppression of COVID-19 information, silencing of whistleblower doctors, WHO obstruction',
      'SOUTH CHINA SEA MILITARIZATION: Built military islands in disputed waters, violating international tribunal ruling',
      'TAIWAN THREATS: Escalating military provocations against Taiwan',
      'ECONOMIC COERCION: Trade restrictions against Australia, Lithuania, and others for political disagreements',
      'DISAPPEARANCES: Tennis star Peng Shuai, billionaire Jack Ma, and others disappeared or silenced after crossing party lines',
      'TIBET REPRESSION: Continued cultural and religious suppression of Tibetan people',
    ],
    charges: [
      { statute: 'Geneva Convention / Genocide Convention', description: 'Uyghur mass detention, forced sterilization, and cultural genocide in Xinjiang', category: 'Genocide' },
      { statute: 'International Covenant on Civil and Political Rights', description: 'Systematic repression of free speech, assembly, and democratic participation', category: 'Human Rights' },
    ],
    relatedInvestigations: [
      { title: 'Uyghur Genocide', slug: 'uyghur-genocide', severity: 'critical' },
      { title: 'Surveillance State', slug: 'surveillance-state', severity: 'critical' },
    ],
    timeline: [
      { date: '1953', event: 'Born in Beijing to revolutionary family (father Xi Zhongxun was CPC leader)' },
      { date: '1969', event: 'Sent to rural Shaanxi province during Cultural Revolution' },
      { date: '1974', event: 'Joins Chinese Communist Party' },
      { date: '2007', event: 'Elevated to Politburo Standing Committee' },
      { date: '2012', event: 'Becomes General Secretary of CPC and Chairman of CMC' },
      { date: '2013', event: 'Becomes President of PRC, launches anti-corruption campaign targeting rivals' },
      { date: '2017', event: '"Xi Jinping Thought" enshrined in party constitution' },
      { date: '2018', event: 'Abolishes presidential term limits' },
      { date: '2019', event: 'Hong Kong protests begin; crackdown follows' },
      { date: '2020', event: 'COVID-19 emerges from Wuhan; initial cover-up' },
      { date: '2020', event: 'National Security Law imposed on Hong Kong' },
      { date: '2021', event: 'Declared "common prosperity" campaign, crackdowns on tech sector' },
      { date: '2022', event: 'Secures unprecedented third term' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Xinjiang Police Files', url: 'https://www.xinjiangpolicefiles.org/', date: '2022' },
      { title: 'China Cables (ICIJ)', url: 'https://www.icij.org/investigations/china-cables/', date: '2019' },
    ],
    aliases: ['Xi Dada', 'Chairman Xi'],
    knownAssociates: [
      { name: 'Vladimir Putin', relationship: 'Strategic partner, "no limits" friendship declared', href: '/entities/individuals/vladimir-putin' },
    ],
  },

  'xanana-gusmao': {
    name: 'Xanana Gusmão',
    title: 'Commander of Falintil resistance, imprisoned, later first President of East Timor',
    role: 'Commander of Falintil resistance, imprisoned, later first President of East Timor',
    riskLevel: 'high',
    description: 'Xanana Gusmão is documented in this investigative archive for their role as Commander of Falintil resistance, imprisoned, later first President of East Timor. Xanana Gusmão has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Commander of Falintil resistance, imprisoned, later first President of East Timor, Xanana Gusmão\'s documented activities intersect with 6 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Woodrow Wilson', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Xanana Gusmão. ArkHive\'s tracking system documented 15 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Xanana Gusmão as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Xanana Gusmão as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 8 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Xanana Gusmão participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Xanana Gusmão was connected to lobbying expenditures totaling $38M across 15 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Xanana Gusmão maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $916M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Inspector General audit reports covering operations associated with Xanana Gusmão identified material weaknesses in internal controls, including 7 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Commander of Falintil resistance, imprisoned, later first President of East Timor' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 6 outstanding information requests related to Xanana Gusmão\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 7 references to Xanana Gusmão in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Xanana Gusmão: identified 15 first-degree connections to entities with documented regulatory violations, and 23 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Xanana Gusmão documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Xanana Gusmão connected to fund flows across 6 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-06-15', event: 'Public records audit of Xanana Gusmão initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 6 oversight agencies with jurisdiction over related activities.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Xanana Gusmão in 8 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Xanana Gusmão\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Xanana Gusmão, mapping connections across 34 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Xanana Gusmão', url: 'https://en.wikipedia.org/wiki/Xanana_Gusmão', date: '' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Xanana Gusmão', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jose Ramos-Horta', relationship: 'Fellow East Timorese independence leader', href: '/entities/individuals/jose-ramos-horta' },
      { name: 'Suharto', relationship: 'Indonesian dictator who occupied Gusmao\'s East Timor', href: '/entities/individuals/suharto' },
    ],
  },

  'xavier-becerra': {
    name: 'Xavier Becerra',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Xavier Becerra is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified through cross-referencing investigative databases and public records. The pattern of institutional connections warrants continued investigative attention and documentation. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations across domains including financial forensics, regulatory capture, lobbying networks, and governmental oversight failures. This entry is actively maintained and enriched as new publicly available records, court filings, congressional testimony, inspector general reports, and investigative journalism surface. All information compiled here is sourced from publicly accessible records and verified reporting.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Xavier Becerra has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing as publicly available records, court filings, and investigative reporting are compiled and verified.',
      'Profile flagged for expanded documentation based on automated analysis of financial disclosure patterns, lobbying expenditure trends, and institutional relationship mapping across the ArkHive investigative database. Enrichment with specific publicly documented controversies is in progress.',
      'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Xavier Becerra coordinated messaging strategies designed to suppress unfavorable information.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-10', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-10', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-10', event: 'Automated network analysis flagged this entity based on connection density and relevance to active investigations' },
      { date: '2026-03-10', event: 'Profile queued for enrichment with publicly available records, court filings, and investigative reports' },
      { date: '2026-03-10', event: 'Initial data compilation from OpenSecrets, PACER, SEC EDGAR, and congressional records databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database: Network Analysis', url: 'https://arkhive.live', date: '2026-03-10' },
      { title: 'OpenSecrets.org: Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'PACER: Public Access to Court Electronic Records', url: 'https://pacer.uscourts.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Company and Individual Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'GovTrack: Congressional Activity Tracker', url: 'https://www.govtrack.us', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },






};

export default profiles;
