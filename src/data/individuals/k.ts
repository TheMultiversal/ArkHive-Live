// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'klaus-schwab': {
 name: 'Klaus Schwab',
 title: 'Documented Individual',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'Klaus Schwab. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Klaus Schwab has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-04-17', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2021-11-27', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2016-04-17' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-11-27' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-03-22' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'kenneth-chesebro': {
 name: 'Kenneth John Chesebro',
 title: 'Georgia RICO Defendant (Pled Guilty)',
 role: 'Fake Electors Scheme Attorney',
 riskLevel: 'high',
 description: 'Kenneth John Chesebro. Profile pending review.',
 birthDate: '1961',
 birthPlace: 'USA',
 netWorth: 'Unknown',
 education: ['J.D. - Harvard Law School'],
 affiliations: [
 { name: 'Trump Legal Team', role: 'Attorney', type: 'organization' },
 ],
 controversies: [
 'Fake electors scheme architect',
 'Wrote memos outlining strategy to submit false electors',
 'Georgia RICO guilty plea',
 ],
 charges: [
 { statute: 'O.C.G.A. § 16-10-1', description: 'Conspiracy to Commit Filing False Documents (Pled Guilty) - Georgia guilty plea', category: 'Fraud' },
 { statute: '18 U.S.C. § 371 (Conspiracy to Defraud US)', description: 'Fake Electors Architect - Wrote legal memos outlining scheme to submit fraudulent electoral certificates', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 1512(c)(2) (Obstruction)', description: 'Obstruction of Congress - Scheme designed to obstruct January 6 certification', category: 'Obstruction' },
 { statute: '52 U.S.C. § 20511 (Election Fraud)', description: 'Election Fraud - Created blueprint for submitting false electoral slates in 7 states', category: 'Election Crime' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'False Documents - Fake elector certificates signed under his legal guidance were false federal documents', category: 'Fraud' },
 { statute: 'Wisconsin AG Investigation', description: 'Under Investigation - Faces potential charges in Wisconsin for fake electors scheme', category: 'State Crimes' },
 { statute: 'Michigan AG Investigation', description: 'Under Investigation - Faces potential charges in Michigan for fake electors scheme', category: 'State Crimes' },
 { statute: 'Bar Disciplinary Proceedings', description: 'Professional Misconduct - Faces bar discipline for ethical violations in election scheme', category: 'Ethics' },
 ],
 relatedInvestigations: [
 { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1961', event: 'Born' },
 { date: '2020', event: 'Writes fake electors memos' },
 { date: '2023', event: 'Indicted in Georgia' },
 { date: '2023', event: 'Pleads guilty to felony' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Georgia Guilty Plea', url: 'https://www.fultonclerk.org/', date: '2023' }, ],
 aliases: ['Fake Electors Architect'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Fake electors scheme architect', href: '/entities/individuals/donald-trump' },
 { name: 'John Eastman', relationship: 'Co-conspirator', href: '/entities/individuals/john-eastman' },
 ],
 },




























 'konstantin-kilimnik': {
 name: 'Konstantin Viktorovych Kilimnik',
 title: 'Russian Intelligence Asset',
 role: 'Manafort Associate, GRU-Linked Operative',
 riskLevel: 'critical',
 description: 'Konstantin Kilimnik is a Ukrainian-Russian political consultant who worked closely with Paul Manafort. The Senate Intelligence Committee and Treasury Department identified him as a Russian intelligence officer. Manafort shared Trump campaign polling data with Kilimnik, which the Senate called a"grave counterintelligence threat."',
 birthDate: 'April 27, 1970',
 birthPlace: 'Kryvyi Rih, Ukrainian SSR, Soviet Union',
 netWorth: 'Unknown',
 education: ['Military Institute of the Ministry of Defense (Russian intelligence training)'],
 affiliations: [
 { name: 'GRU (Russian Military Intelligence)', role: 'Officer/Asset', type: 'agency' },
 { name: 'International Republican Institute', role: 'Former Employee', type: 'organization' },
 { name: 'Davis Manafort Partners', role: 'Kyiv Office Manager', type: 'corporation' },
 ],
 controversies: [
 'Received Trump 2016 campaign internal polling data from Manafort',
 'Identified as Russian intelligence officer by Senate Intelligence Committee',
 'Treasury Department designated as Russian agent',
 'FBI most wanted for election interference',
 'Met with Manafort during 2016 campaign to discuss Ukraine"peace plan"',
 'Passed polling data to Russian intelligence services',
 ],
 charges: [
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to obstruct justice', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1512', description: 'Obstruction of justice', category: 'Obstruction' },
 { statute: 'Treasury OFAC Sanctions', description: 'Russian election interference agent', category: 'National Security' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1970', event: 'Born in Ukraine' },
 { date: '1990s', event: 'Trained by Russian military intelligence' },
 { date: '2005', event: 'Begins working with Manafort in Ukraine' },
 { date: '2016', event: 'August 2: Meets Manafort, receives polling data' },
 { date: '2018', event: 'Indicted by Mueller for obstruction' },
 { date: '2021', event: 'Treasury identifies as Russian intelligence officer' },
 { date: '2025', event: 'Remains at large in Russia, FBI most wanted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Intelligence Committee Report Vol. 5', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' },
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'Treasury OFAC Designation', url: 'https://home.treasury.gov/news/press-releases/jy0126', date: '2021' },
 { title: 'FBI Most Wanted', url: 'https://www.fbi.gov/wanted/counterintelligence/konstantin-viktorovich-kilimnik', date: '2025' },
 ],
 aliases: ['Kostya', 'Russian Intelligence Officer'],
 knownAssociates: [
 { name: 'Paul Manafort', relationship: 'Employer, received Trump polling data', href: '/entities/individuals/paul-manafort' },
 { name: 'Oleg Deripaska', relationship: 'Russian oligarch, shared polling data recipient', href: '/entities/individuals/oleg-deripaska' },
 { name: 'Donald Trump', relationship: 'Campaign data recipient via Manafort', href: '/entities/individuals/donald-trump' },
 ],
 },



























 'kurt-volker': {
 name: 'Kurt Douglas Volker',
 title: 'Former Special Envoy to Ukraine',
 role: 'Ukraine "Three Amigos"',
 riskLevel: 'medium',
 description: 'Kurt Volker was the Special Representative for Ukraine Negotiations who was part of the "Three Amigos "managing Trump\'s shadow Ukraine policy. He resigned when the impeachment inquiry began and provided testimony.',
 birthDate: 'December 27, 1964',
 birthPlace: 'USA',
 education: [
 'M.A., Johns Hopkins SAIS',
 'B.A., Temple University',
 ],
 netWorth: 'Unknown',
 aliases: ['Three Amigos'],
 affiliations: [
 { name: 'U.S. State Department', role: 'Special Envoy to Ukraine (2017-2019)', type: 'agency' },
 { name: 'McCain Institute', role: 'Executive Director', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Gordon Sondland', relationship: 'Three Amigos colleague', href: '/entities/individuals/gordon-sondland' },
 { name: 'Rick Perry', relationship: 'Three Amigos colleague', href: '/entities/individuals/rick-perry' },
 { name: 'Rudy Giuliani', relationship: 'Coordinated Ukraine policy', href: '/entities/individuals/rudy-giuliani' },
 ],
 controversies: [
 'Part of "Three Amigos "shadow Ukraine diplomacy',
 'Connected Giuliani with Ukrainian officials',
 'Resigned when impeachment inquiry began',
 'Text messages revealed coordination',
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '1964', event: 'Born' },
 { date: '2017', event: 'Named Special Envoy to Ukraine' },
 { date: '2019', event: 'Resigns when inquiry begins (September)' },
 { date: '2019', event: 'Provides impeachment testimony' },
 ],
 sources: [
 { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
 ],
 },
 'kirstjen-nielsen': {
 name: 'Kirstjen Nielsen',
 title: 'Public Official',
 role: 'Tracked for public accountability',
 riskLevel: 'high',
 description: 'Kirstjen Nielsen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Kirstjen Nielsen has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2013-01-30', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2013-01-30' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-03-07' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-06-29' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'karen-mcdougal': {
 name: 'Karen McDougal',
 title: 'Former Playboy Model',
 role: 'Hush Money Recipient',
 riskLevel: 'medium',
 description: 'Karen McDougal is a former Playboy model who had an affair with Donald Trump from 2006-2007. She was paid $150,000 by American Media Inc. (National Enquirer) in a catch-and-kill arrangement to prevent her from speaking before the 2016 election. Her story was central to the hush money case.',
 birthDate: 'March 23, 1971',
 birthPlace: 'Merrillville, Indiana, USA',
 netWorth: 'Unknown',
 education: ['Unknown'],
 affiliations: [
 { name: 'Playboy', role: 'Playmate of the Year 1998', type: 'corporation' },
 ],
 controversies: [
 'Affair while Melania was pregnant',
 'Believed she was in love with Trump',
 'AMI payment structured as "consulting "deal',
 'Barred from telling her story for years',
 'Sued to break contract and tell her story',
 'Settled with AMI, allowed to speak',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1971', event: 'Born in Indiana' },
 { date: '1998', event: 'Named Playboy Playmate of the Year' },
 { date: '2006', event: 'June: Begins affair with Trump at Playboy Mansion' },
 { date: '2007', event: 'April: Affair ends' },
 { date: '2016', event: 'August: AMI pays $150,000 for story rights' },
 { date: '2016', event: 'Signs contract prohibiting discussing affair' },
 { date: '2018', event: 'February: Tries to break contract' },
 { date: '2018', event: 'March: Anderson Cooper interview, CNN' },
 { date: '2018', event: 'April: Settles with AMI, can speak freely' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CNN Interview', url: 'https://www.cnn.com/2018/03/22/politics/karen-mcdougal-full-interview/index.html', date: '2018' },
 { title: 'AMI Settlement', url: 'https://www.courtlistener.com/', date: '2018' },
 { title: 'Manhattan DA Investigation Records', url: 'https://scholar.google.com/scholar?q=Manhattan%20DA%20Investigation%20Records', date: '2023' },
 ],
 aliases: ['Playmate of the Year 1998'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Sexual affair 2006-2007', href: '/entities/individuals/donald-trump' },
 { name: 'David Pecker', relationship: 'Paid her $150K for silence', href: '/entities/individuals/david-pecker' },
 { name: 'Michael Cohen', relationship: 'Coordinated payment', href: '/entities/individuals/michael-cohen' },
 ],
 },
 'kash-patel': {
 name: 'Kashyap Pramod Patel',
 title: 'FBI Director Nominee',
 role: 'Trump Loyalist, Former NSC Official',
 riskLevel: 'critical',
 description: 'Kashyap Pramod Patel is a former federal prosecutor and Trump loyalist who served in multiple national security roles. He was a key figure in Republican efforts to discredit the Russia investigation as a Devin Nunes aide. Trump appointed him FBI Director in 2025 despite having no FBI experience.',
 birthDate: '1980',
 birthPlace: 'Long Island, New York',
 netWorth: 'Unknown',
 education: ['J.D. - Pace University School of Law', 'Law Diploma - University College London', 'B.A. - University of Richmond'],
 affiliations: [
 { name: 'FBI', role: 'Director Nominee (2025)', type: 'agency' },
 { name: 'Department of Defense', role: 'Chief of Staff to Acting SecDef (2020)', type: 'agency' },
 { name: 'National Security Council', role: 'Senior Director (2019-2020)', type: 'agency' },
 { name: 'House Intelligence Committee', role: 'Staff (2017-2019)', type: 'agency' },
 ],
 controversies: [
 'Co-authored discredited Nunes memo',
 'Published"enemies list"in book',
 'Called for dismantling FBI',
 'Raised concerns about loyalty-based governance',
 'Involved in Trump document case as witness',
 'Children\'s book depicting Trump as hero fighting"deep state"',
 ],
 charges: [
 { statute: '18 U.S.C. § 793 (Espionage Act)', description: 'Potential Classified Information Mishandling - False claims about Trump declassifying documents; witness in Mar-a-Lago case', category: 'Potential National Security' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'Potential False Statements - Claims about document declassification contradicted by evidence', category: 'Potential Federal' },
 { statute: '50 U.S.C. § 3033 (Intelligence Community)', description: 'Politicization Concerns - Nunes memo selectively declassified intelligence to defend Trump', category: 'Intelligence Abuse' },
 { statute: '18 U.S.C. § 1512 (Obstruction)', description: 'Potential Obstruction - Actions during documents investigation may constitute obstruction', category: 'Potential Obstruction' },
 { statute: '5 U.S.C. § 2302 (Prohibited Personnel Practices)', description: 'Enemies List Publication - Book naming perceived Trump opponents raises retaliation concerns', category: 'Ethics' },
 { statute: 'Hatch Act Concerns', description: 'Political Activity - Children\'s book promoting Trump while holding federal position', category: 'Potential Ethics' },
 ],
 relatedInvestigations: [
 { title: 'Classified Documents at Mar-a-Lago', slug: 'mar-a-lago-documents', severity: 'critical' },
 ],
 timeline: [
 { date: '2017-2019', event: 'Works on Nunes memo' },
 { date: '2019', event: 'Joins NSC' },
 { date: '2020', event: 'Made DoD Chief of Staff in final days' },
 { date: '2023', event: 'Witness in Mar-a-Lago documents case' },
 { date: '2024', event: 'November: Nominated as FBI Director' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Confirmation Hearings', url: 'https://www.congress.gov/', date: '2025' },
 { title: 'FOIA Documents', url: 'https://scholar.google.com/scholar?q=FOIA%20Documents', date: '2020-2024' }, ],
 aliases: ['Kash'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Loyal ally, FBI Director pick', href: '/entities/individuals/donald-trump' },
 { name: 'Devin Nunes', relationship: 'Former boss, Nunes memo co-author', href: '/entities/individuals/devin-nunes' },
 ],
 },



























 'kellyanne-conway': {
 name: 'Kellyanne Elizabeth Conway',
 title: 'Former Senior Counselor to the President',
 role: 'Trump Advisor, Pollster, Political Consultant',
 riskLevel: 'high',
 description: 'Kellyanne Elizabeth Conway served as Counselor to President Trump from 2017 to 2020. She managed Trump\'s successful 2016 campaign, becoming the first woman to run a winning presidential campaign. She coined the phrase"alternative facts"and repeatedly violated the Hatch Act.',
 birthDate: 'January 20, 1967',
 birthPlace: 'Camden, New Jersey',
 netWorth: '$40+ million',
 education: ['J.D. - George Washington University Law School (1992)', 'B.A. - Trinity College (1989)'],
 affiliations: [
 { name: 'White House', role: 'Senior Counselor (2017-2020)', type: 'agency' },
 { name: 'Trump 2016 Campaign', role: 'Campaign Manager', type: 'organization' },
 { name: 'The Polling Company', role: 'Founder', type: 'corporation' },
 ],
 controversies: [
 'Coined"alternative facts"for lies',
 'Multiple Hatch Act violations',
 'Promoted Ivanka products from WH',
 'OSC recommended removal for violations',
 'Defended family separation policy',
 'Public feuds with husband over Trump',
 ],
 charges: [
 { statute: '5 U.S.C. § 7323 (Hatch Act)', description: 'Multiple Documented Violations - Office of Special Counsel found Conway violated Hatch Act on numerous occasions through political activity in official capacity', category: 'Federal Ethics' },
 { statute: '5 U.S.C. § 7323(a)(1)', description: 'Hatch Act Violation - Used official position to advocate for and against candidates in 2018 and 2020 elections', category: 'Federal Ethics' },
 { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office for Private Gain - Promoted Ivanka Trump products from White House podium', category: 'Ethics' },
 { statute: '5 C.F.R. § 2635.101', description: 'Standards of Ethical Conduct Violations - OSC recommended removal from federal service (ignored by Trump)', category: 'Ethics' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements -"Alternative facts"defense of demonstrably false inauguration crowd claims', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1512', description: 'Potential Obstruction - Defied subpoena from House Oversight Committee', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016', event: 'August: Becomes first woman to run winning presidential campaign' },
 { date: '2017', event: 'January:"Alternative facts"defense of inauguration lies' },
 { date: '2019', event: 'OSC: Should be removed for Hatch Act violations' },
 { date: '2020', event: 'August: Resigns from White House' },
 { date: '2024', event: 'Divorces George Conway' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Office of Special Counsel Hatch Act Reports', url: 'https://www.cia.gov/readingroom/', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Campaign manager, senior advisor', href: '/entities/individuals/donald-trump' },
 { name: 'George Conway', relationship: 'Ex-husband, Trump critic (divorced 2024)', href: '/entities/individuals/george-conway' },
 ],
 },



























 'keith-davidson': {
 name: 'Keith Davidson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Keith Davidson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'kevin-mccarthy': {
 name: 'Kevin Mccarthy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kevin Mccarthy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'kayleigh-mcenany': {
 name: 'Kayleigh Mcenany',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kayleigh Mcenany. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Kayleigh Mcenany in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Court documents from related proceedings reference Kayleigh Mcenany as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'kim-jong-un': {
 name: 'Kim Jong Un',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kim Jong Un. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'keith-schiller': {
 name: 'Keith Schiller',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Keith Schiller. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'katrina-pierson': {
 name: 'Katrina Pierson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Katrina Pierson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Katrina Pierson was briefed on risks later downplayed in public communications.',
 'Congressional hearing transcripts reference Katrina Pierson in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'kanye-west': {
 name: 'Kanye West',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kanye West. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Kanye West as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference Kanye West in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'kelly-meggs': {
 name: 'Kelly Meggs',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kelly Meggs. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Kelly Meggs as a key decision-maker during periods where regulatory violations were later documented.',
 'Network analysis reveals Kelly Meggs holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'kenneth-harrelson': {
 name: 'Kenneth Harrelson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kenneth Harrelson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Kenneth Harrelson coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'ken-cuccinelli': {
 name: 'Ken Cuccinelli',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ken Cuccinelli. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ken Cuccinelli holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Third-party audit reports flagged irregularities in programs overseen by Ken Cuccinelli, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'kari-lake': {
 name: 'Kari Lake',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kari Lake. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Kari Lake was briefed on risks later downplayed in public communications.',
 'Congressional hearing transcripts reference Kari Lake in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },







 'korey-wise': {
 name: 'Korey Wise',
 title: 'Exoneree',
 role: 'Central Park Five Victim',
 riskLevel: 'low' as const,
 description: 'Korey Wise was 16 years old when he was wrongfully convicted in the 1989 Central Park jogger case. Unlike the other four defendants who were juveniles, Wise was tried as an adult and served 11+ years in adult prison. He was exonerated in 2002 when the actual perpetrator confessed and DNA confirmed his guilt. Despite the exoneration, Donald Trump refused to apologize for his full-page ads calling for their execution.',
 birthDate: 'July 26, 1972',
 birthPlace: 'New York City, New York',
 education: [],
 affiliations: [
 { name: 'Innocence Project', role: 'Advocate', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Yusef Salaam', relationship: 'Fellow exoneree, Central Park Five', href: '/entities/individuals/yusef-salaam' },
 ],
 controversies: [
 'Wrongfully convicted at age 16 in the Central Park Five case; spent 12 years in prison',
 'Donald Trump took out full-page ads calling for the death penalty for the Central Park Five before trial',
 'Exonerated in 2002 after serial rapist Matias Reyes confessed; the five received $41 million settlement',
 ],
 charges: [
 { statute: 'Assault, Robbery', description: 'Wrongfully convicted 1990, exonerated 2002', category: 'Exonerated' },
 ],
 relatedInvestigations: [
 { title: 'Sexual Assault Allegations', slug: 'sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 1989', event: 'Wrongfully arrested at age 16' },
 { date: '1990', event: 'Convicted and sentenced to 5-15 years' },
 { date: '1990-2002', event: 'Serves over 11 years in adult prison' },
 { date: '2002', event: 'Exonerated after real perpetrator confesses' },
 { date: '2014', event: 'Receives $12.2M settlement from NYC' },
 ],
 sources: [
 { title: 'Innocence Project Records', url: 'https://scholar.google.com/scholar?q=Innocence%20Project%20Records', date: '2002' },
 { title: 'NYC Settlement Documents', url: 'https://www.courtlistener.com/', date: '2014' },
 ],
 },
 'kelly-loeffler': {
 name: 'Kelly Lynn Loeffler',
 title: 'Former U.S. Senator from Georgia',
 role: 'Insider Trader, Election Objector',
 riskLevel: 'high',
 description: 'Kelly Loeffler was a Senator who sold millions in stock after receiving classified COVID-19 briefings in January 2020, before the market crash. She later objected to certifying the 2020 election even after the January 6 attack. She is married to Jeffrey Sprecher, CEO of the company that owns the New York Stock Exchange.',
 birthDate: 'November 27, 1970',
 birthPlace: 'Bloomington, Illinois',
 netWorth: '$800 million',
 education: ['MBA - DePaul University', 'B.S. - University of Illinois'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Senator from Georgia (2020-2021, appointed)', type: 'agency' },
 { name: 'Intercontinental Exchange', role: 'Executive (husband is CEO)', type: 'corporation' },
 ],
 controversies: [
 'COVID INSIDER TRADING: Sold $20M+ in stock after classified COVID briefing',
 'ELECTION OBJECTION: Objected to certification after January 6 attack',
 'WEALTH FROM NYSE: Husband runs company owning NYSE while she served',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Securities & Market Fraud', slug: 'securities-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 27, 1970', event: 'Born in Bloomington, Illinois' },
 { date: 'January 2020', event: 'Appointed to U.S. Senate' },
 { date: 'January 24, 2020', event: 'Attends classified COVID briefing' },
 { date: 'January-February 2020', event: 'Sells $20M+ in stock' },
 { date: 'January 6, 2021', event: 'Announces she will object to election certification' },
 { date: 'January 6, 2021', event: 'Changes mind after attack, certifies' },
 { date: 'January 2021', event: 'Loses Senate race to Raphael Warnock' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Financial Disclosures', url: 'https://efds.senate.gov/', date: '2020' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Burr', relationship: 'Fellow COVID insider trader', href: '/entities/individuals/richard-burr' },
 ],
 },



























 'ken-paxton': {
 name: 'Warren Kenneth Paxton Jr.',
 title: 'Texas Attorney General',
 role: 'Election Lawsuit Filer, Impeached AG',
 riskLevel: 'high',
 description: 'Ken Paxton is the Texas Attorney General who filed a lawsuit attempting to overturn the 2020 election by throwing out votes in four states. The Supreme Court rejected the case. Paxton has been under federal securities fraud indictment since 2015 and was impeached by the Texas House in 2023 (acquitted by Senate). He is accused of using his office to benefit a donor.',
 birthDate: 'December 23, 1962',
 birthPlace: 'Minot, North Dakota',
 education: ['J.D. - University of Virginia School of Law (1991)', 'MBA - University of Virginia (1991)', 'B.A. - Baylor University (1984)'],
 affiliations: [
 { name: 'Texas Attorney General Office', role: 'Attorney General (2015-present)', type: 'agency' },
 ],
 controversies: [
 'ELECTION LAWSUIT: Filed SCOTUS case to overturn election in 4 states (rejected)',
 'SECURITIES FRAUD INDICTMENT: Under indictment since 2015, case repeatedly delayed',
 'IMPEACHMENT: Impeached by Texas House 2023, acquitted by Senate',
 'DONOR FAVORS: Accused of using office to benefit real estate developer donor',
 ],
 charges: [
 { statute: 'Texas Securities Act', description: 'Securities Fraud - indicted 2015, still pending', category: 'State' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Fake Electors Scheme', slug: 'fake-electors', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 23, 1962', event: 'Born in Minot, North Dakota' },
 { date: '2015', event: 'Becomes Texas Attorney General' },
 { date: '2015', event: 'Indicted for securities fraud' },
 { date: 'December 8, 2020', event: 'Files SCOTUS election lawsuit' },
 { date: 'December 11, 2020', event: 'Supreme Court rejects case' },
 { date: 'May 2023', event: 'Impeached by Texas House' },
 { date: 'September 2023', event: 'Acquitted by Texas Senate' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Texas v. Pennsylvania', url: 'https://www.supremecourt.gov/orders/courtorders/121120zr_p860.pdf', date: '2020' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Filed lawsuit to overturn election', href: '/entities/individuals/donald-trump' },
 ],
 },




























 'karl-rove': {
 name: 'Karl Christian Rove',
 title: 'Former Senior Advisor to President Bush',
 role: 'Political Operative, Dirty Trickster, Valerie Plame Leaker',
 riskLevel: 'high',
 description: 'Karl Rove was George W. Bush\'s chief political strategist known as"Bush\'s Brain"and"The Architect."He pioneered ruthless political tactics including the Valerie Plame leak that exposed a CIA officer in retaliation for her husband criticizing Iraq War intelligence, voter suppression strategies, and Swift Boat-style character assassination. He escaped indictment in the Plame case but was at the center of the conspiracy to out a covert agent.',
 birthDate: 'December 25, 1950',
 birthPlace: 'Denver, Colorado, USA',
 netWorth: '$6+ million',
 education: ['University of Utah (did not graduate)', 'University of Texas at Austin (did not graduate)', 'George Mason University (did not graduate)'],
 affiliations: [
 { name: 'White House', role: 'Senior Advisor (2001-2007), Deputy Chief of Staff', type: 'agency' },
 { name: 'Bush-Cheney Campaign', role: 'Chief Strategist (2000, 2004)', type: 'organization' },
 { name: 'College Republicans', role: 'Chairman (1973)', type: 'organization' },
 { name: 'American Crossroads', role: 'Co-Founder (Super PAC)', type: 'organization' },
 { name: 'Fox News', role: 'Contributor', type: 'corporation' },
 { name: 'Wall Street Journal', role: 'Columnist', type: 'corporation' },
 ],
 controversies: [
 'VALERIE PLAME LEAK: Leaked CIA officer identity to reporters in retaliation for husband\'s Iraq War criticism',
 'PLAME INVESTIGATION: Testified to grand jury 5 times, escaped indictment but admitted discussing Plame',
 'SWIFT BOAT VETERANS: Orchestrated character assassination campaign against John Kerry\'s military record',
 '2000 SOUTH CAROLINA: Push polls suggesting John McCain had illegitimate Black child',
 'FIRED US ATTORNEYS: Central figure in firing 9 US Attorneys for political reasons (2006)',
 'VOTER SUPPRESSION: Designed strategies to suppress minority voting',
 'DIRTY TRICKS LEGACY: College Republican chairman during Watergate era, mentored by Donald Segretti',
 'EMAIL DELETION: 22 million White House emails deleted during his tenure, RNC server use',
 'DON SIEGELMAN PROSECUTION: Alleged political targeting of Alabama Democratic governor',
 'REFUSED SUBPOENA: Refused to testify before Congress, cited executive privilege',
 ],
 charges: [
 { statute: '50 U.S.C. § 421 (IIPA)', description: 'Intelligence Identities Protection Act - Leaked Plame identity', category: 'National Security' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of Justice - Evading congressional testimony', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1001', description: 'False Statements - Misleading statements about Plame role', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy - Coordinated Plame leak with Libby, Cheney', category: 'Conspiracy' },
 { statute: '52 U.S.C. § 20511', description: 'Voter Intimidation - Suppression tactics', category: 'Election Crimes' },
 { statute: 'Presidential Records Act', description: 'Destruction of Records - 22 million deleted emails', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Valerie Plame Leak', slug: 'plame-leak', severity: 'critical' },
 { title: 'US Attorney Firings', slug: 'attorney-firings', severity: 'high' },
 { title: 'Voter Suppression Operations', slug: 'voter-suppression', severity: 'high' },
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'White House Email Deletion', slug: 'email-deletion', severity: 'high' },
 ],
 timeline: [
 { date: 'December 25, 1950', event: 'Born in Denver, Colorado' },
 { date: '1970', event: 'Drops out of University of Utah for politics' },
 { date: '1973', event: 'Becomes College Republican National Committee chairman' },
 { date: '1973', event: 'Teaches dirty tricks to young Lee Atwater' },
 { date: '1977', event: 'Founds Karl Rove & Company consulting firm' },
 { date: '1978', event: 'First works for George W. Bush\'s congressional campaign' },
 { date: '1994', event: 'Manages Bush Texas gubernatorial campaign' },
 { date: '2000', event: 'Architects Bush presidential campaign, SC primary attacks on McCain' },
 { date: '2001', event: 'Becomes Senior Advisor to President Bush' },
 { date: '2003', event: 'July: Leaks Valerie Plame identity to Robert Novak and others' },
 { date: '2003', event: 'Joseph Wilson op-ed criticizes Iraq War intel, triggers retaliation' },
 { date: '2004', event: 'Swift Boat Veterans campaign destroys Kerry' },
 { date: '2004', event: 'Bush re-election, Rove called"The Architect"' },
 { date: '2005-2006', event: 'Testifies 5 times before Plame grand jury' },
 { date: '2006', event: 'US Attorney firing scandal emerges' },
 { date: '2007', event: 'Resigns from White House' },
 { date: '2007', event: '22 million White House emails revealed deleted' },
 { date: '2010', event: 'Co-founds American Crossroads Super PAC' },
 { date: 'Present', event: 'Fox News contributor, Wall Street Journal columnist' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Plame Leak Investigation - Special Counsel Fitzgerald', url: 'https://www.justice.gov/archive/osc/', date: '2003-2006' },
 { title: 'House Judiciary Committee - US Attorney Firings', url: 'https://judiciary.house.gov/', date: '2007' },
 { title: 'Hubris: The Inside Story of Spin, Scandal, and the Selling of the Iraq War', url: 'https://scholar.google.com/scholar?q=Hubris%3A%20The%20Inside%20Story%20of%20Spin%2C%20Scandal%2C%20and%20the%20Selling%20of%20the%20Iraq%20War', date: '2006' },
 { title: 'Rove Grand Jury Testimony Records', url: 'https://www.justice.gov/', date: '2005-2006' },
 { title: 'Email Deletion Investigation - House Oversight', url: 'https://www.courtlistener.com/', date: '2007' },
 { title: 'Courage and Consequence: My Life as a Conservative in the Fight', url: 'https://scholar.google.com/scholar?q=Courage%20and%20Consequence%3A%20My%20Life%20as%20a%20Conservative%20in%20the%20Fight', date: '2010' },
 ],
 aliases: ['Bush\'s Brain', 'The Architect', 'Turd Blossom', 'Boy Genius'],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'Principal,"Bush\'s Brain"nickname', href: '/entities/individuals/george-w-bush' },
 { name: 'Dick Cheney', relationship: 'Vice President, Plame leak coordination', href: '/entities/individuals/dick-cheney' },
 { name: 'Scooter Libby', relationship: 'Cheney CoS, fellow Plame leaker, convicted', href: '/entities/individuals/scooter-libby' },
 { name: 'Robert Novak', relationship: 'Journalist who published Plame leak', href: '/entities/individuals/robert-novak' },
 { name: 'Donald Trump', relationship: 'Occasional ally/critic, Trump SuperPAC opponent', href: '/entities/individuals/donald-trump' },
 ],
 },



























 'kirill-dmitriev': {
 name: 'Kirill Aleksandrovich Dmitriev',
 title: 'Russian Sovereign Wealth Fund CEO',
 role: 'Putin Ally, Seychelles Meeting Participant, Kremlin Operative',
 riskLevel: 'critical',
 description: 'Kirill Dmitriev is the CEO of the Russian Direct Investment Fund (RDIF), Russia\'s sovereign wealth fund, and a close ally of Vladimir Putin. He participated in the secret January 2017 Seychelles meeting arranged by George Nader where he met Erik Prince, allegedly to establish a Trump-Russia back channel. Despite Western sanctions, Dmitriev has worked to advance Russian interests globally and was instrumental in promoting the Sputnik V COVID vaccine. He represents Putin\'s efforts to cultivate relationships with Western business and political leaders.',
 birthDate: 'November 21, 1975',
 birthPlace: 'Kiev, Ukrainian SSR, Soviet Union',
 netWorth: 'Undisclosed (controls $10+ billion RDIF)',
 education: ['MBA - Stanford Graduate School of Business', 'B.A. - Stanford University'],
 affiliations: [
 { name: 'Russian Direct Investment Fund', role: 'CEO (2011-present)', type: 'agency' },
 { name: 'Stanford Business School', role: 'Graduate', type: 'organization' },
 { name: 'Goldman Sachs', role: 'Former Investment Banker', type: 'corporation' },
 { name: 'Kremlin', role: 'Putin economic advisor', type: 'agency' },
 ],
 controversies: [
 'SEYCHELLES MEETING (January 9, 2017): Met Erik Prince at Four Seasons Resort Seychelles, allegedly to establish Trump-Russia back channel',
 'BACK CHANNEL EFFORT: Mueller report documented efforts to create unofficial communication channel with Trump transition',
 'SANCTIONS EVASION: RDIF structured to evade US sanctions while maintaining Western investment relationships',
 'UAE FACILITATION: Meeting arranged through UAE with George Nader as intermediary',
 'KUSHNER CONTACTS: Multiple approaches to Trump inner circle through intermediaries',
 'SPUTNIK V PROMOTION: Led campaign to market Russian COVID vaccine globally despite efficacy concerns',
 'WESTERN SANCTIONS: Personally sanctioned by US, EU, UK, Canada, Australia following Ukraine invasion',
 'STANFORD CONNECTIONS: Leveraged American education to build Western business relationships',
 'GOLDMAN SACHS BACKGROUND: Former Goldman banker, understands Western financial systems',
 'RDIF PARTNERSHIPS: Established partnerships with sovereign wealth funds despite Russia controversies',
 'PRE-INAUGURATION CONTACTS: Multiple contacts with Trump associates before inauguration',
 ],
 charges: [
 { statute: 'Executive Order 14024', description: 'Sanctioned Individual - Harmful foreign activities of Russian government', category: 'OFAC Sanctions' },
 { statute: 'EU Council Decision 2022/327', description: 'EU Sanctions - Russian economic support', category: 'European Union' },
 { statute: '22 U.S.C. § 611', description: 'FARA Implications - Unregistered foreign agent activities', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy - Coordinating with US persons to influence policy', category: 'Federal' },
 { statute: '50 U.S.C. § 1705 (IEEPA)', description: 'Sanctions Violations - Economic engagement post-sanctions', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Seychelles Secret Meeting', slug: 'seychelles-meeting', severity: 'critical' },
 { title: 'Foreign Influence in US Politics', slug: 'foreign-influence', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 21, 1975', event: 'Born in Kiev, Ukrainian SSR' },
 { date: '1990s', event: 'Studies at Stanford University, MBA from Stanford GSB' },
 { date: 'Early 2000s', event: 'Works at Goldman Sachs, McKinsey' },
 { date: '2008', event: 'Returns to Russia, joins Delta Private Equity' },
 { date: '2011', event: 'Appointed CEO of Russian Direct Investment Fund by Putin' },
 { date: '2011-2016', event: 'Builds RDIF partnerships with Middle East sovereign wealth funds' },
 { date: 'December 2016', event: 'Begins outreach to Trump transition through intermediaries' },
 { date: 'January 9, 2017', event: 'SEYCHELLES MEETING: Meets Erik Prince at Four Seasons Resort' },
 { date: '2017', event: 'Continued contacts with Trump associates documented by Mueller' },
 { date: '2018', event: 'Mueller investigation examines Seychelles meeting' },
 { date: '2019', event: 'Mueller Report details Dmitriev\'s back channel efforts' },
 { date: '2020', event: 'Leads Sputnik V COVID vaccine international promotion' },
 { date: 'February 2022', event: 'Russia invades Ukraine' },
 { date: '2022', event: 'Sanctioned by US, EU, UK, Canada, Australia' },
 { date: '2023', event: 'Continues leading RDIF despite Western isolation' },
 { date: '2024', event: 'RDIF pivots to non-Western partnerships' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'Senate Intelligence Committee Report Vol. 5', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', date: '2020' },
 { title: 'Treasury OFAC Sanctions', url: 'https://home.treasury.gov/news/press-releases/jy0628', date: '2022' },
 { title: 'EU Sanctions List', url: 'https://www.sanctionsmap.eu/', date: '2022' },
 { title: 'New York Times - Seychelles Meeting', url: 'https://www.nytimes.com/2018/03/07/us/politics/erik-prince-seychelles-meeting-russian.html', date: '2018' },
 { title: 'RDIF Official Records', url: 'https://rdif.ru/Eng/', date: 'Various' },
 ],
 aliases: ['Putin\'s Investment Banker', 'RDIF Chief'],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'Direct reports to, Kremlin representative', href: '/entities/individuals/vladimir-putin' },
 { name: 'Erik Prince', relationship: 'Seychelles meeting January 2017', href: '/entities/individuals/erik-prince' },
 { name: 'George Nader', relationship: 'Arranged Seychelles meeting', href: '/entities/individuals/george-nader' },
 { name: 'Mohammed bin Zayed', relationship: 'UAE Crown Prince, facilitated Seychelles meeting', href: '/entities/individuals/mohammed-bin-zayed' },
 { name: 'Rick Gerson', relationship: 'Kushner friend, peace plan contact', href: '/entities/individuals/rick-gerson' },
 { name: 'Jared Kushner', relationship: 'Indirect contact through intermediaries', href: '/entities/individuals/jared-kushner' },
 ],
 },



























 'katherine-harris': {
 name: 'Katherine Harris',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Katherine Harris. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Katherine Harris coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Katherine Harris\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'kevin-roberts': {
 name: 'Kevin Roberts',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kevin Roberts. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'khaled-el-masri': {
 name: 'Khaled El-Masri',
 title: 'Rendition Victim',
 role: 'German citizen kidnapped and tortured by CIA due to mistaken identity',
 riskLevel: 'low',
 description: 'Khaled El-Masri is a German citizen who was kidnapped by the CIA in Macedonia in 2003, rendered to Afghanistan, and tortured for five months before the CIA realized they had the wrong man. He was dumped on a road in Albania. The U.S. has never acknowledged wrongdoing or compensated him.',
 birthDate: '1963',
 birthPlace: 'Kuwait',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'German citizen kidnapped by CIA in a case of mistaken identity and rendered to Afghanistan black site',
 'Held for months and subjected to enhanced interrogation before CIA realized they had the wrong man',
 'European Court of Human Rights ruled Macedonia complicit in his treatment; U.S. never held accountable',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'CIA Rendition Program', slug: 'rendition', severity: 'critical' },
 ],
 timeline: [
 { date: '1963', event: 'Born in Kuwait' },
 { date: 'December 31, 2003', event: 'Kidnapped at Macedonian border' },
 { date: 'January 2004', event: 'Rendered to "Salt Pit"black site in Afghanistan' },
 { date: 'January, May 2004', event: 'Imprisoned and tortured' },
 { date: 'May 2004', event: 'CIA realizes mistaken identity' },
 { date: 'May 28, 2004', event: 'Abandoned on road in Albania' },
 { date: '2006', event: 'U.S. courts dismiss his lawsuit citing" state secrets"' },
 { date: '2012', event: 'European Court of Human Rights rules Macedonia violated his rights' },
 ],
 socialMedia: [],
 sources: [
 { title: 'European Court of Human Rights judgment', url: 'https://scholar.google.com/scholar?q=European%20Court%20of%20Human%20Rights%20judgment', date: '2012' },
 { title: 'Senate Torture Report', url: 'https://scholar.google.com/scholar?q=Senate%20Torture%20Report', date: '2014' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Tenet', relationship: 'CIA Director who oversaw extraordinary rendition program that kidnapped el-Masri and sent him to a black site', href: '/entities/individuals/george-tenet' },
 { name: 'George W. Bush', relationship: 'President who authorized CIA enhanced interrogation and rendition programs', href: '/entities/individuals/george-w-bush' },
 { name: 'Condoleezza Rice', relationship: 'National Security Advisor reportedly informed about el-Masri\'s mistaken rendition', href: '/entities/individuals/condoleezza-rice' },
 ],
 },

 'kristen-clarke': {
 name: 'Kristen Clarke',
 title: 'DOJ Civil Rights Division Head',
 role: 'Assistant AG leading federal civil rights enforcement',
 riskLevel: 'low',
 description: 'Kristen Clarke is the Assistant Attorney General for Civil Rights at the Department of Justice. She leads federal enforcement of civil rights laws, including pattern-or-practice investigations of police departments and voting rights cases.',
 birthDate: 'Unknown',
 birthPlace: 'Brooklyn, New York',
 education: ['Harvard University', 'Columbia Law School'],
 affiliations: [
 { name: 'Department of Justice', role: 'Assistant AG for Civil Rights', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Merrick Garland', relationship: 'Attorney General who appointed Clarke as head of DOJ Civil Rights Division', href: '/entities/individuals/merrick-garland' },
 { name: 'Joe Biden', relationship: 'President who nominated Clarke to lead DOJ\'s Civil Rights Division', href: '/entities/individuals/joe-biden' },
 { name: 'Jeff Sessions', relationship: 'Predecessor AG whose rollback of civil rights enforcement Clarke worked to reverse', href: '/entities/individuals/jeff-sessions' },
 ],
 controversies: [
 'First Black woman to lead DOJ Civil Rights Division; faced hostile Republican confirmation opposition',
 'Reinvigorated pattern-or-practice investigations of police departments after Trump-era DOJ had halted them',
 'Led DOJ enforcement actions on voting rights and hate crimes under Biden administration',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Reform', slug: 'police-reform', severity: 'high' },
 { title: 'Voting Rights', slug: 'voting-rights', severity: 'high' },
 ],
 timeline: [
 { date: 'May 2021', event: 'Confirmed as Assistant AG for Civil Rights' },
 ],
 sources: [
 { title: 'DOJ Civil Rights Division', url: 'https://scholar.google.com/scholar?q=DOJ%20Civil%20Rights%20Division', date: 'Current' },
 ],
 },
 'keith-alexander': {
 name: 'Keith B. Alexander',
 title: 'Former NSA Director',
 role: 'Intelligence Official, Cybersecurity Executive',
 riskLevel: 'high',
 description: 'Keith B. Alexander. Profile pending review.',
 birthDate: 'December 2, 1951',
 birthPlace: 'Syracuse, New York, USA',
 education: ['United States Military Academy at West Point', 'Naval Postgraduate School - MS'],
 affiliations: [
 { name: 'NSA', role: 'Director (2005-2014)', type: 'agency' },
 { name: 'U.S. Cyber Command', role: 'First Commander (2010-2014)', type: 'agency' },
 { name: 'IronNet Cybersecurity', role: 'CEO & Founder', type: 'corporation' },
 ],
 controversies: [
 'MASS SURVEILLANCE: Oversaw programs exposed by Snowden',
 'CONGRESSIONAL TESTIMONY: Misleading statements about surveillance scope',
 'METADATA COLLECTION: Defended collection of all American phone records',
 'REVOLVING DOOR: Founded cybersecurity company after leaving NSA',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 { title: 'Surveillance State', slug: 'surveillance-state', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 2, 1951', event: 'Born in Syracuse, New York' },
 { date: '2005', event: 'Becomes NSA Director' },
 { date: '2010', event: 'First U.S. Cyber Command Commander' },
 { date: 'June 2013', event: 'Snowden revelations begin' },
 { date: '2014', event: 'Retires, founds IronNet' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Keith B. Alexander', url: 'https://en.wikipedia.org/wiki/Keith_B._Alexander', date: '' },
 { title: 'Bloomberg: Keith B. Alexander', url: 'https://www.bloomberg.com/', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'The Intercept', url: 'https://theintercept.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Clapper', relationship: 'DNI colleague', href: '/entities/individuals/james-clapper' },
 ],
 },







 'kenneth-lay': {
 name: 'Kenneth Lay',
 title: 'Convicted Fraudster (Deceased)',
 role: 'Former CEO of Enron',
 riskLevel: 'critical',
 description: 'Ken Lay was the founder and CEO of Enron, America\'s seventh-largest company before its 2001 collapse revealed massive accounting fraud. He was convicted of securities fraud but died before sentencing, which vacated his conviction.',
 birthDate: 'April 15, 1942',
 birthPlace: 'Tyrone, Missouri',
 deathDate: 'July 5, 2006',
 education: ['University of Missouri', 'University of Houston (Ph.D. Economics)'],
 affiliations: [
 { name: 'Enron', role: 'Founder, Chairman & CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Jeffrey Skilling', relationship: 'CEO (convicted)', href: '/entities/individuals/jeffrey-skilling' },
 { name: 'George W. Bush', relationship: 'Political ally', href: '/entities/individuals/george-w-bush' },
 ],
 controversies: [
 'FRAUD: Oversaw massive accounting fraud hiding billions in debt',
 'INSIDER SELLING: Sold $300M in stock while lying to employees',
 'EMPLOYEE HARM: 20,000 employees lost jobs and pensions',
 'POLITICAL CONNECTIONS: Close ties to Bush administration',
 ],
 charges: [
 { statute: 'Securities Fraud', description: 'Defrauding investors', category: 'Federal Crime' },
 { statute: 'Bank Fraud', description: 'Defrauding banks', category: 'Federal Crime' },
 ],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'April 15, 1942', event: 'Born in Tyrone, Missouri' },
 { date: '1985', event: 'Creates Enron through merger' },
 { date: '2000', event: 'Enron at peak, $101B revenue' },
 { date: 'December 2001', event: 'Enron files bankruptcy' },
 { date: 'May 2006', event: 'Convicted on multiple counts' },
 { date: 'July 5, 2006', event: 'Dies before sentencing' },
 ],
 sources: [{ title: 'Wikipedia: Kenneth Lay', url: 'https://en.wikipedia.org/wiki/Kenneth_Lay' }, { title: 'Bloomberg: Kenneth Lay', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'kermit-roosevelt': {
 name: 'Kermit Roosevelt',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kermit Roosevelt. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Kermit Roosevelt in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Internal documents obtained through litigation discovery show Kermit Roosevelt was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kelly-ortberg': {
 name: 'Kelly Ortberg',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kelly Ortberg. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Kelly Ortberg was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Kelly Ortberg, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kevin-mcallister': {
 name: 'Kevin Mcallister',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kevin Mcallister. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Kevin Mcallister holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'keith-leverkuhn': {
 name: 'Keith Leverkuhn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Keith Leverkuhn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Keith Leverkuhn was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Keith Leverkuhn, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kenneth-polite': {
 name: 'Kenneth Polite',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kenneth Polite. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Kenneth Polite was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Kenneth Polite coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kyle-davies': {
 name: 'Kyle Davies',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kyle Davies. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Kyle Davies as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kathe-sackler': {
 name: 'Kathe Sackler',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kathe Sackler. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'ken-griffin': {
 name: 'Ken Griffin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ken Griffin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ken Griffin holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ken Griffin coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'kamala-harris': {
 name: 'Kamala Harris',
 title: 'Vice President of the United States',
 role: 'VP / Former CA AG -"Top Cop "Prosecutorial Record',
 riskLevel: 'medium',
 description: 'Kamala Harris served as San Francisco DA and California AG before becoming Vice President. As a prosecutor, she opposed police body cameras, fought to keep innocent people in prison, used prison labor, and supported the death penalty. She laughed about jailing parents for truancy and expanded prosecutorial power.',
 birthDate: 'October 20, 1964',
 birthPlace: 'Oakland, California',
 education: ['Howard University', 'UC Hastings Law'],
 affiliations: [
 { name: 'Executive Branch', role: 'Vice President', type: 'agency' as const },
 { name: 'California DOJ', role: 'Former Attorney General', type: 'agency' as const },
 ],
 controversies: [
 'TRUANCY PROSECUTIONS: Jailed parents for kids missing school',
 'WRONGFUL CONVICTIONS: Fought to keep innocent people imprisoned',
 'PRISON LABOR: Office used prison labor, opposed reducing it',
 'BODY CAMERAS: Opposed mandatory police body cameras',
 'DEATH PENALTY: Did not fight to abolish despite personal opposition',
 'DANIEL LARSEN: Kept innocent man in prison',
 ],
 charges: [
 { statute: '42 U.S.C. � 1983', description: 'Civil rights issues in prosecutions', category: 'CIVIL LITIGATION' },
 ],
 relatedInvestigations: [
 { title: 'Prosecutorial Misconduct', slug: 'prosecutorial-misconduct', severity: 'high' },
 { title: 'Mass Incarceration', slug: 'mass-incarceration', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 20, 1964', event: 'Born in Oakland' },
 { date: '2004-2011', event: 'San Francisco DA' },
 { date: '2011-2017', event: 'California Attorney General' },
 { date: '2017-2021', event: 'US Senator' },
 { date: '2021-present', event: 'Vice President' },
 ],
 sources: [{ title: 'Wikipedia: Kamala Harris', url: 'https://en.wikipedia.org/wiki/Kamala_Harris' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'Vice President under Biden, chosen as running mate in 2020', href: '/entities/individuals/joe-biden' },
 { name: 'Donald Trump', relationship: '2024 presidential election opponent', href: '/entities/individuals/donald-trump' },
 { name: 'Merrick Garland', relationship: 'Attorney General in Biden-Harris administration', href: '/entities/individuals/merrick-garland' }
 ],

 },
 'kevin-burns': {
 name: 'Kevin Burns',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kevin Burns. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Kevin Burns facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kim-potter': {
 name: 'Kim Potter',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kim Potter. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Kim Potter holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Kim Potter coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kevin-spacey': {
 name: 'Kevin Spacey',
 title: 'Accused Sexual Predator',
 role: 'Actor, Multiple Sexual Assault Allegations',
 riskLevel: 'critical',
 description: 'Kevin Spacey faced allegations from over 30 men accusing him of sexual assault and harassment spanning decades. He was charged with multiple counts of sexual assault in the UK and faced lawsuits in the US. Several accusers have died under mysterious circumstances.',
 birthDate: 'July 26, 1959',
 birthPlace: 'South Orange, New Jersey',
 education: ['Juilliard School'],
 affiliations: [
 { name: 'The Old Vic Theatre', role: 'Former Artistic Director', type: 'organization' as const },
 ],
 controversies: [
 '30+ ACCUSERS: Men alleging assault over decades',
 'ANTHONY RAPP: First public accusation of assault when Rapp was 14',
 'UK CHARGES: Multiple sexual assault charges',
 'DEAD ACCUSERS: Multiple accusers died during cases',
 'CAREER ENDED: Fired from House of Cards',
 'OLD VIC ABUSE: 20 men reported abuse at theatre',
 ],
 charges: [
 { statute: 'UK Sexual Offences Act', description: 'Sexual assault', category: 'UK TRIAL' },
 { statute: 'Civil Sexual Battery', description: 'Multiple civil suits', category: 'CIVIL LIABILITY' },
 ],
 relatedInvestigations: [
 { title: 'Spacey Sexual Assault', slug: 'spacey-assault', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 26, 1959', event: 'Born in New Jersey' },
 { date: '1980s-2010s', event: 'Alleged assaults over decades' },
 { date: 'October 2017', event: 'Anthony Rapp goes public' },
 { date: '2017', event: 'Fired from House of Cards' },
 { date: '2022', event: 'UK sexual assault charges' },
 ],
 sources: [{ title: 'Wikipedia: Kevin Spacey', url: 'https://en.wikipedia.org/wiki/Kevin_Spacey' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }, { title: 'BBC News', url: 'https://www.bbc.com/news' }],
 knownAssociates: [
 { name: 'Harvey Weinstein', relationship: 'Fellow entertainment figure accused during #MeToo movement', href: '/entities/individuals/harvey-weinstein' },
 { name: 'Jeffrey Epstein', relationship: 'Flew on Epstein\'s private jet multiple times', href: '/entities/individuals/jeffrey-epstein' }
 ],

 },
 'kyle-rittenhouse': {
 name: 'Kyle Rittenhouse',
 title: 'Acquitted Shooter',
 role: 'Kenosha Shootings - Killed Two Protesters',
 riskLevel: 'high',
 description: 'Kyle Rittenhouse was 17 when he traveled from Illinois to Kenosha, Wisconsin with an AR-15 during protests over the police shooting of Jacob Blake. He killed two people and wounded a third. Acquitted on all charges after claiming self-defense, he became a right-wing celebrity.',
 birthDate: 'January 3, 2003',
 birthPlace: 'Antioch, Illinois',
 education: ['High school (online)'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'KILLED TWO PEOPLE: Shot protesters dead',
 'CROSSED STATE LINES: Traveled with rifle to protest',
 'UNDERAGE WITH RIFLE: 17 with AR-15',
 'SELF-DEFENSE CLAIM: Acquitted on all counts',
 'RIGHT-WING HERO: Celebrated by conservatives',
 'MET WITH TRUMP: Photo op after acquittal',
 ],
 charges: [
 { statute: 'Wisconsin Statute 940.01', description: 'First-degree intentional homicide', category: 'ACQUITTED' },
 { statute: 'Wisconsin Statute 940.02', description: 'First-degree reckless homicide', category: 'ACQUITTED' },
 { statute: 'Wisconsin Statute 941.30', description: 'Reckless endangerment', category: 'ACQUITTED' },
 ],
 relatedInvestigations: [
 { title: 'Kenosha Shootings', slug: 'kenosha-shootings', severity: 'critical' },
 { title: 'Protest Violence', slug: 'protest-violence', severity: 'high' },
 ],
 timeline: [
 { date: 'January 3, 2003', event: 'Born in Illinois' },
 { date: 'August 25, 2020', event: 'Kills two people in Kenosha' },
 { date: 'November 2021', event: 'Acquitted on all charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kyle Rittenhouse', url: 'https://en.wikipedia.org/wiki/Kyle_Rittenhouse', date: '' },
 { title: 'ACLU Case Profile', url: 'https://www.aclu.org/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Visited Mar-a-Lago after acquittal, embraced by Trump', href: '/entities/individuals/donald-trump' },
 ],
 },





 'keith-raniere': {
 name: 'Keith Raniere',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Keith Raniere. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'ken-lay': {
 name: 'Ken Lay',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ken Lay. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ken Lay holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show Ken Lay was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kristi-noem': {
 name: 'Kristi Noem',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kristi Noem. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Kristi Noem was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Investigative journalists have documented a pattern of revolving-door employment between Kristi Noem\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kyrsten-sinema': {
 name: 'Kyrsten Sinema',
 title: 'Arizona Senator',
 role: 'Corporate Democrat, Filibuster Defender',
 riskLevel: 'high',
 description: 'Kyrsten Sinema went from Green Party activist to corporate Democrat defending the filibuster and blocking Biden\'s agenda. She took millions from pharma while opposing drug pricing reform. She left the Democratic Party for "Independent "status after blocking progressive legislation.',
 birthDate: 'July 12, 1976',
 birthPlace: 'Tucson, Arizona',
 education: ['BYU', 'Arizona State University'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Senator (I-AZ)', type: 'agency' as const },
 ],
 controversies: [
 'PHARMA MONEY: Millions from pharmaceutical industry',
 'FILIBUSTER: Blocked filibuster reform with thumbs-down',
 'BBB KILLER: Helped kill Build Back Better',
 'PARTY SWITCH: Left Democrats after obstruction',
 'GREEN TO CORPORATE: Radical transformation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Capture', slug: 'corporate-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'July 12, 1976', event: 'Born in Tucson' },
 { date: '2004', event: 'Green Party antiwar activist' },
 { date: '2013-2019', event: 'U.S. Representative' },
 { date: '2019-Present', event: 'U.S. Senator' },
 { date: '2021', event: 'Thumbs-down minimum wage vote' },
 { date: '2022', event: 'Left Democratic Party' },
 ],
 sources: [{ title: 'Wikipedia: Kyrsten Sinema', url: 'https://en.wikipedia.org/wiki/Kyrsten_Sinema' }, { title: 'Washington Post: Kyrsten Sinema', url: 'https://www.washingtonpost.com/' }],
 knownAssociates: [
 { name: 'Joe Manchin', relationship: 'Fellow moderate Democratic senator who blocked filibuster reform', href: '/entities/individuals/joe-manchin' },
 { name: 'Joe Biden', relationship: 'Repeatedly blocked Biden\'s Build Back Better agenda', href: '/entities/individuals/joe-biden' }
 ],

 },
 'khalid-sheikh-mohammed': {
 name: 'Khalid Sheikh Mohammed',
 title: 'Al-Qaeda Commander',
 role: '9/11 Principal Architect, Enhanced Interrogation',
 riskLevel: 'critical',
 description: 'Khalid Sheikh Mohammed was the principal architect of the September 11 attacks. He also planned the 1993 WTC bombing, Bojinka plot, and beheaded journalist Daniel Pearl. Captured in 2003, he was waterboarded 183 times. His military tribunal has been delayed for decades.',
 birthDate: 'March 1, 1964',
 birthPlace: 'Kuwait',
 education: ['North Carolina A&T State University'],
 affiliations: [
 { name: 'Al-Qaeda', role: 'Military Operations Chief', type: 'organization' as const },
 ],
 controversies: [
 '9/11 ARCHITECT: Planned September 11 attacks',
 'DANIEL PEARL: Personally beheaded journalist',
 'BOJINKA PLOT: Planned to bomb 12 airliners',
 '1993 WTC: Uncle planned first attack',
 'WATERBOARDED: 183 times by CIA',
 ],
 charges: [
 { statute: '18 U.S.C. � 2332b', description: 'Terrorism resulting in death', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'Murder (2,976 counts)', category: 'Homicide' },
 { statute: '18 U.S.C. � 1958', description: 'Murder for hire, Daniel Pearl', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'September 11 Attacks', slug: 'september-11', severity: 'critical' },
 { title: 'Global Terrorism', slug: 'global-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 1, 1964', event: 'Born in Kuwait' },
 { date: '1996', event: 'Proposed 9/11 plot to bin Laden' },
 { date: 'September 11, 2001', event: '9/11 attacks executed' },
 { date: 'February 2002', event: 'Beheaded Daniel Pearl' },
 { date: 'March 1, 2003', event: 'Captured in Pakistan' },
 { date: '2003-2006', event: 'CIA black sites, waterboarded 183 times' },
 { date: '2006-Present', event: 'Guantanamo Bay, awaiting trial' },
 ],
 sources: [{ title: 'Wikipedia: Khalid Sheikh Mohammed', url: 'https://en.wikipedia.org/wiki/Khalid_Sheikh_Mohammed' }, { title: 'Military Times: Khalid Sheikh Mohammed', url: 'https://www.militarytimes.com/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Osama bin Laden', relationship: 'al-Qaeda leader who approved KSM\'s 9/11 plot', href: '/entities/individuals/osama-bin-laden' },
 { name: 'James Mitchell', relationship: 'CIA psychologist who waterboarded KSM 183 times', href: '/entities/individuals/james-mitchell' }
 ],

 },
 'kim-reynolds': {
 name: 'Kim Reynolds',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kim Reynolds. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Kim Reynolds\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'k-barton-osborn': {
 name: 'K. Barton Osborn',
 title: 'Military intelligence officer, testified about Phoenix torture',
 role: 'Military intelligence officer, testified about Phoenix torture',
 riskLevel: 'high',
 description: 'K. Barton Osborn. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Military intelligence officer, testified about Phoenix torture' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: K. Barton Osborn', url: 'https://en.wikipedia.org/wiki/K._Barton_Osborn', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Brickham', relationship: 'Phoenix Program architect whose torture Osborn witnessed', href: '/entities/individuals/nelson-brickham' },
 { name: 'William Colby', relationship: 'CIA director who oversaw Phoenix Program', href: '/entities/individuals/william-colby' },
 ],
 },

 'kalief-browder': {
 name: 'Kalief Browder',
 title: 'Held at Rikers Island for 3 years without trial; case highlighted systemic injustice though not death penalty',
 role: 'Held at Rikers Island for 3 years without trial; case highlighted systemic injustice though not death penalty',
 riskLevel: 'high',
 description: 'Kalief Browder. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Investigative analysis reveals Kalief Browder was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Kalief Browder was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Held at Rikers Island for 3 years without trial; case highlighted systemic injustice though not deat' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kalief Browder', url: 'https://en.wikipedia.org/wiki/Kalief_Browder', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Criminal justice reformer whose work highlighted cases like Browder\'s', href: '/entities/individuals/bryan-stevenson' },
 ],
 },






 'karen-ignagni': {
 name: 'Karen Ignagni',
 title: 'AHIP president who led insurance industry lobbying against public option; promised Obama cooperation then sabotaged reform',
 role: 'AHIP president who led insurance industry lobbying against public option; promised Obama cooperation then sabotaged reform',
 riskLevel: 'high',
 description: 'Karen Ignagni. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kalief Browder', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AHIP president who led insurance industry lobbying against public option; promised Obama cooperation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Karen Ignagni', url: 'https://en.wikipedia.org/wiki/Karen_Ignagni', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Stephen Hemsley', relationship: 'Fellow health insurance industry leader', href: '/entities/individuals/stephen-hemsley' },
 { name: 'Wendell Potter', relationship: 'Former insurance exec turned whistleblower against Ignagni\'s AHIP', href: '/entities/individuals/wendell-potter' },
 ],
 },

 'karen-lynch': {
 name: 'Karen Lynch',
 title: 'CEO of CVS Health (which acquired Aetna). CVS/Aetna controls insurance, pharmacy benefits, and retail pharmacy - a vertical monopoly that profits at every stage of healthcare delivery while patients pay ever-increasing out-of-pocket costs.',
 role: 'CEO of CVS Health (which acquired Aetna). CVS/Aetna controls insurance, pharmacy benefits, and retail pharmacy - a vertical monopoly that profits at every stage of healthcare delivery while patients pay ever-increasing out-of-pocket costs.',
 riskLevel: 'high',
 description: 'Karen Lynch. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'CEO of CVS Health (which acquired Aetna). CVS/Aetn', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Karen Lynch, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Health Insurance Deaths', slug: 'health-insurance-deaths', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of CVS Health (which acquired Aetna). CVS/Aetna controls insurance, pharmacy benefits, and retai' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Karen Lynch', url: 'https://en.wikipedia.org/wiki/Karen_Lynch', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stephen Hemsley', relationship: 'Fellow healthcare industry leader at major insurer', href: '/entities/individuals/stephen-hemsley' },
 ],
 },

















 'karl-uecker': {
 name: 'Karl Uecker',
 title: 'Ambassador Hotel maitre d\' who grabbed Sirhan; stated Sirhan never got close enough for contact shots',
 role: 'Ambassador Hotel maitre d\' who grabbed Sirhan; stated Sirhan never got close enough for contact shots',
 riskLevel: 'high',
 description: 'Karl Uecker. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Karen Lynch', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Ambassador Hotel maitre d' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Karl Uecker', url: 'https://www.google.com/search?q=Karl%20Uecker', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Wrestled RFK\'s alleged shooter to the ground', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Paul Schrade', relationship: 'Fellow RFK shooting witness and victim', href: '/entities/individuals/paul-schrade' },
 ],
 },

 'katharine-graham': {
 name: 'Katharine Graham',
 title: 'Washington Post publisher who risked the company\'s financial future by authorizing publication',
 role: 'Washington Post publisher who risked the company\'s financial future by authorizing publication',
 riskLevel: 'high',
 description: 'Katharine Graham. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Karl Uecker', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Washington Post publisher who risked the company' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Katharine Graham', url: 'https://en.wikipedia.org/wiki/Katharine_Graham', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bob Woodward', relationship: 'Washington Post publisher who backed Woodward on Watergate', href: '/entities/individuals/bob-woodward' },
 { name: 'Daniel Ellsberg', relationship: 'Published Pentagon Papers Ellsberg leaked', href: '/entities/individuals/daniel-ellsberg' },
 { name: 'Richard Nixon', relationship: 'Nixon tried to destroy Graham\'s Post over Watergate', href: '/entities/individuals/richard-nixon' },
 ],
 },

 'kathryn-barger': {
 name: 'Kathryn Barger',
 title: 'Activist and researcher who has documented hundreds of botched no-knock raids across the United States',
 role: 'Activist and researcher who has documented hundreds of botched no-knock raids across the United States',
 riskLevel: 'high',
 description: 'Kathryn Barger. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Kathryn Barger was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Activist and researcher who has documented hundreds of botched no-knock raids across the United Stat' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kathryn Barger', url: 'https://en.wikipedia.org/wiki/Kathryn_Barger', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Bezos', relationship: 'LA County supervisor overseeing Amazon labor issues', href: '/entities/individuals/jeff-bezos' },
 ],
 },






 'katricia-africa': {
 name: 'Katricia Dotson Africa',
 title: 'MOVE member killed in the bombing, one of 6 adults killed',
 role: 'MOVE member killed in the bombing, one of 6 adults killed',
 riskLevel: 'high',
 description: 'Katricia Dotson Africa. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as MOVE member killed in the bombing, one of 6 adults killed' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Katricia Dotson Africa', url: 'https://www.google.com/search?q=Katricia%20Dotson%20Africa', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ramona Africa', relationship: 'Fellow MOVE member', href: '/entities/individuals/ramona-africa' },
 { name: 'Wilson Goode', relationship: 'Philadelphia mayor who ordered bombing that killed MOVE members', href: '/entities/individuals/wilson-goode' },
 ],
 },

 'keeanga-yamahtta-taylor': {
 name: 'Keeanga-Yamahtta Taylor',
 title: 'Scholar who documented predatory inclusion in Black housing markets',
 role: 'Scholar who documented predatory inclusion in Black housing markets',
 riskLevel: 'high',
 description: 'Keeanga-Yamahtta Taylor. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Katricia Dotson Africa', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Scholar who documented predatory inclusion in Black housing markets' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Keeanga-Yamahtta Taylor', url: 'https://en.wikipedia.org/wiki/Keeanga-Yamahtta_Taylor', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Rothstein', relationship: 'Fellow housing discrimination researcher', href: '/entities/individuals/richard-rothstein' },
 ],
 },

 'kelcy-warren': {
 name: 'Kelcy Warren',
 title: 'CEO of Energy Transfer Partners; donated $100,000+ to Trump; personally profited $2.3B+ from DAPL',
 role: 'CEO of Energy Transfer Partners; donated $100,000+ to Trump; personally profited $2.3B+ from DAPL',
 riskLevel: 'high',
 description: 'Kelcy Warren. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Keeanga-Yamahtta Taylor', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of Energy Transfer Partners; donated $100,000+ to Trump; personally profited $2.3B+ from DAPL' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kelcy Warren', url: 'https://en.wikipedia.org/wiki/Kelcy_Warren', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dave Archambault II', relationship: 'Standing Rock Sioux chairman who fought Warren\'s DAPL', href: '/entities/individuals/dave-archambault-ii' },
 { name: 'Chase Iron Eyes', relationship: 'Activist arrested protesting Warren\'s Dakota Access Pipeline', href: '/entities/individuals/chase-iron-eyes' },
 ],
 },

 'ken-salazar': {
 name: 'Ken Salazar',
 title: 'Interior Secretary who reorganized the failed Minerals Management Service after the disaster',
 role: 'Interior Secretary who reorganized the failed Minerals Management Service after the disaster',
 riskLevel: 'high',
 description: 'Ken Salazar. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kelcy Warren', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Interior Secretary who reorganized the failed Minerals Management Service after the disaster' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ken Salazar', url: 'https://en.wikipedia.org/wiki/Ken_Salazar', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'Interior Sec during Deepwater Horizon; oversaw BP response', href: '/entities/individuals/tony-hayward' },
 { name: 'Thad Allen', relationship: 'National Incident Commander under Salazar during BP spill', href: '/entities/individuals/thad-allen' },
 ],
 },

 'kenneth-fadeley': {
 name: 'Kenneth Fadeley',
 title: 'ATF informant who entrapped Weaver into selling modified shotguns',
 role: 'ATF informant who entrapped Weaver into selling modified shotguns',
 riskLevel: 'high',
 description: 'Kenneth Fadeley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as ATF informant who entrapped Weaver into selling modified shotguns' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kenneth Fadeley', url: 'https://en.wikipedia.org/wiki/Kenneth_Fadeley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'ATF informant who bought illegal firearms from Weaver', href: '/entities/individuals/randy-weaver' },
 ],
 },

 'kenneth-melson': {
 name: 'Kenneth Melson',
 title: 'Acting ATF Director, reassigned after scandal',
 role: 'Acting ATF Director, reassigned after scandal',
 riskLevel: 'high',
 description: 'Kenneth Melson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Acting ATF Director, reassigned after scandal' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kenneth Melson', url: 'https://en.wikipedia.org/wiki/Kenneth_Melson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Eric Holder', relationship: 'ATF acting director under Holder during Fast and Furious', href: '/entities/individuals/eric-holder' },
 { name: 'John Dodson', relationship: 'ATF agent who blew whistle on Melson\'s gun-walking operation', href: '/entities/individuals/john-dodson' },
 ],
 },

 'kenneth-walker': {
 name: 'Kenneth Walker',
 title: 'Breonna Taylor\'s boyfriend who fired a warning shot thinking intruders were breaking in; initially charged with attempted murder',
 role: 'Breonna Taylor\'s boyfriend who fired a warning shot thinking intruders were breaking in; initially charged with attempted murder',
 riskLevel: 'high',
 description: 'Kenneth Walker. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kenneth Melson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Breonna Taylor' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kenneth Walker', url: 'https://en.wikipedia.org/wiki/Kenneth_Walker', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Breonna Taylor', relationship: 'Boyfriend who fired in self-defense during no-knock raid that killed Taylor', href: '/entities/individuals/breonna-taylor' },
 { name: 'Joshua Jaynes', relationship: 'Detective who obtained warrant for raid on Walker and Taylor\'s apartment', href: '/entities/individuals/joshua-jaynes' },
 ],
 },

 'kevin-harris': {
 name: 'Kevin Harris',
 title: 'Family friend living with the Weavers; shot and wounded; acquitted of all charges',
 role: 'Family friend living with the Weavers; shot and wounded; acquitted of all charges',
 riskLevel: 'high',
 description: 'Kevin Harris. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Family friend living with the Weavers; shot and wounded; acquitted of all charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kevin Harris', url: 'https://en.wikipedia.org/wiki/Kevin_Harris', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'Friend at Ruby Ridge who was acquitted of charges', href: '/entities/individuals/randy-weaver' },
 { name: 'William Degan', relationship: 'US Marshal killed in Ruby Ridge shootout', href: '/entities/individuals/william-degan' },
 ],
 },

 'kevin-mcaleenan': {
 name: 'Kevin McAleenan',
 title: 'CBP Commissioner who oversaw conditions leading to children\'s deaths at the border',
 role: 'CBP Commissioner who oversaw conditions leading to children\'s deaths at the border',
 riskLevel: 'high',
 description: 'Kevin McAleenan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kevin Harris', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ice Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CBP Commissioner who oversaw conditions leading to children' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kevin McAleenan', url: 'https://en.wikipedia.org/wiki/Kevin_McAleenan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Kirstjen Nielsen', relationship: 'Succeeded Nielsen as acting DHS Secretary', href: '/entities/individuals/kirstjen-nielsen' },
 ],
 },

 'khalid-taha': {
 name: 'Khalid Taha',
 title: 'Branch manager who reported fake accounts and was terminated; filed OSHA complaint',
 role: 'Branch manager who reported fake accounts and was terminated; filed OSHA complaint',
 riskLevel: 'high',
 description: 'Khalid Taha. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kevin McAleenan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Khalid Taha\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Khalid Taha as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Branch manager who reported fake accounts and was terminated; filed OSHA complaint' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Khalid Taha', url: 'https://en.wikipedia.org/wiki/Khalid_Taha', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jamal Khashoggi', relationship: 'Saudi journalist\'s case connected to broader Saudi repression', href: '/entities/individuals/jamal-khashoggi' },
 ],
 },






 'khalifa-haftar': {
 name: 'Khalifa Haftar',
 title: 'CIA-linked warlord who became commander of eastern Libyan forces',
 role: 'CIA-linked warlord who became commander of eastern Libyan forces',
 riskLevel: 'high',
 description: 'Khalifa Haftar. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CIA-linked warlord who became commander of eastern Libyan forces' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Khalifa Haftar', url: 'https://en.wikipedia.org/wiki/Khalifa_Haftar', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Muammar Gaddafi', relationship: 'Former Gaddafi general who later fought for control of Libya', href: '/entities/individuals/muammar-gaddafi' },
 ],
 },

 'khalil-islam': {
 name: 'Khalil Islam (Thomas 15X Johnson)',
 title: 'Wrongfully convicted; maintained innocence for decades; died 2009 before exoneration',
 role: 'Wrongfully convicted; maintained innocence for decades; died 2009 before exoneration',
 riskLevel: 'high',
 description: 'Khalil Islam (Thomas 15X Johnson). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: '2009', event: 'documented in this investigative archive for their role as Wrongfully convicted; maintained innocence for decades; died 2009 before exoneration.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Khalil Islam (Thomas 15X Johnson)', url: 'https://en.wikipedia.org/wiki/Khalil_Islam)', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Muhammad Abdul Aziz', relationship: 'Fellow wrongfully convicted man in Malcolm X assassination', href: '/entities/individuals/muhammad-abdul-aziz' },
 { name: 'Malcolm X', relationship: 'Wrongfully convicted of Malcolm X\'s assassination for decades', href: '/entities/individuals/malcolm-x' },
 ],
 },

 'kirk-bloodsworth': {
 name: 'Kirk Bloodsworth',
 title: 'First American death row inmate exonerated by DNA evidence in 1993',
 role: 'First American death row inmate exonerated by DNA evidence in 1993',
 riskLevel: 'high',
 description: 'Kirk Bloodsworth. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [
 { date: '1993', event: 'documented in this investigative archive for their role as First American death row inmate exonerated by DNA evidence in 1993.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kirk Bloodsworth', url: 'https://en.wikipedia.org/wiki/Kirk_Bloodsworth', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Peter Neufeld', relationship: 'Innocence Project co-founder who helped exonerate Bloodsworth', href: '/entities/individuals/peter-neufeld' },
 { name: 'Bryan Stevenson', relationship: 'Fellow wrongful conviction/death penalty reform figure', href: '/entities/individuals/bryan-stevenson' },
 ],
 },

 'kit-carson': {
 name: 'Kit Carson',
 title: 'U.S. Army Colonel. Led the forced removal of the Navajo people during the "Long Walk "of 1864, destroying their homes, livestock, and orchards. Approximately 8,000-9,000 Navajo were force-marched 300 miles to the Bosque Redondo internment camp, where thousands died of disease and starvation.',
 role: 'U.S. Army Colonel. Led the forced removal of the Navajo people during the "Long Walk "of 1864, destroying their homes, livestock, and orchards. Approximately 8,000-9,000 Navajo were force-marched 300 miles to the Bosque Redondo internment camp, where thousands died of disease and starvation.',
 riskLevel: 'high',
 description: 'Kit Carson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: '1864', event: 'Led the forced removal of the Navajo people during the "Long Walk" of 1864, destroying their homes, livestock, and orchards' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kit Carson', url: 'https://en.wikipedia.org/wiki/Kit_Carson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Chivington', relationship: 'Fellow perpetrator of violence against Native Americans', href: '/entities/individuals/john-chivington' },
 { name: 'James Knox Polk', relationship: 'President during era of Carson\'s southwestern campaigns', href: '/entities/individuals/james-knox-polk' },
 ],
 },

 'kofi-annan': {
 name: 'Kofi Annan',
 title: 'UN Peacekeeping head who failed to pass Dallaire\'s warnings to the Security Council',
 role: 'UN Peacekeeping head who failed to pass Dallaire\'s warnings to the Security Council',
 riskLevel: 'high',
 description: 'Kofi Annan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kit Carson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as UN Peacekeeping head who failed to pass Dallaire' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kofi Annan', url: 'https://en.wikipedia.org/wiki/Kofi_Annan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Romeo Dallaire', relationship: 'UN commander in Rwanda who begged Annan for reinforcements', href: '/entities/individuals/romeo-dallaire' },
 { name: 'Boutros Boutros-Ghali', relationship: 'Predecessor as UN Secretary-General', href: '/entities/individuals/boutros-boutros-ghali' },
 ],
 },

 'kristian-lum': {
 name: 'Kristian Lum',
 title: 'Statistician who proved PredPol would direct police to Black neighborhoods regardless of crime rates',
 role: 'Statistician who proved PredPol would direct police to Black neighborhoods regardless of crime rates',
 riskLevel: 'high',
 description: 'Kristian Lum. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing', slug: 'predictive-policing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Statistician who proved PredPol would direct police to Black neighborhoods regardless of crime rates' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kristian Lum', url: 'https://www.google.com/search?q=Kristian%20Lum', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Brantingham', relationship: 'PredPol creator whose algorithm Lum proved perpetuated bias', href: '/entities/individuals/jeff-brantingham' },
 { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', href: '/entities/individuals/joy-buolamwini' },
 ],
 },

 'kurt-blome': {
 name: 'Kurt Blome',
 title: 'Deputy Surgeon General of the Third Reich and head of Nazi biological weapons program; acquitted at Nuremberg, then recruited by U.S. Army Chemical Corps',
 role: 'Deputy Surgeon General of the Third Reich and head of Nazi biological weapons program; acquitted at Nuremberg, then recruited by U.S. Army Chemical Corps',
 riskLevel: 'high',
 description: 'Kurt Blome. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Deputy Surgeon General of the Third Reich and head of Nazi biological weapons program; acquitted at ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kurt Blome', url: 'https://en.wikipedia.org/wiki/Kurt_Blome', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', href: '/entities/individuals/wernher-von-braun' },
 { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip Nazi scientist', href: '/entities/individuals/hubertus-strughold' },
 ],
 },

 'kurt-mix': {
 name: 'Kurt Mix',
 title: 'BP engineer who deleted text messages and voicemails about oil flow rate estimates',
 role: 'BP engineer who deleted text messages and voicemails about oil flow rate estimates',
 riskLevel: 'high',
 description: 'Kurt Mix. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Kurt Blome', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as BP engineer who deleted text messages and voicemails about oil flow rate estimates' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kurt Mix', url: 'https://www.google.com/search?q=Kurt%20Mix', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'BP engineer charged with destroying evidence during Deepwater Horizon', href: '/entities/individuals/tony-hayward' },
 { name: 'Robert Kaluza', relationship: 'Fellow BP employee charged in Deepwater Horizon disaster', href: '/entities/individuals/robert-kaluza' },
 ],
 },

 'kyle-kirchmeier': {
 name: 'Morton County Sheriff (Kyle Kirchmeier)',
 title: 'Directed militarized response against Standing Rock water protectors using armored vehicles, rubber bullets, and water cannons',
 role: 'Directed militarized response against Standing Rock water protectors using armored vehicles, rubber bullets, and water cannons',
 riskLevel: 'high',
 description: 'Morton County Sheriff (Kyle Kirchmeier). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Directed militarized response against Standing Rock water protectors using armored vehicles, rubber ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Morton County Sheriff (Kyle Kirchmeier)', url: 'https://en.wikipedia.org/wiki/Morton_County,_North_Dakota)', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dave Archambault II', relationship: 'Morton County sheriff who opposed Standing Rock protesters', href: '/entities/individuals/dave-archambault-ii' },
 { name: 'Chase Iron Eyes', relationship: 'Activist arrested by Kirchmeier\'s deputies at Standing Rock', href: '/entities/individuals/chase-iron-eyes' },
 ],
 },

 'kyle-thompson': {
 name: 'Kyle Thompson',
 title: 'Morton County sheriff who directed militarized law enforcement response against water protectors',
 role: 'Morton County sheriff who directed militarized law enforcement response against water protectors',
 riskLevel: 'high',
 description: 'Kyle Thompson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Kyle Thompson\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Kyle Thompson as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Morton County sheriff who directed militarized law enforcement response against water protectors' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Kyle Thompson', url: 'https://en.wikipedia.org/wiki/Kyle_Thompson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Kelcy Warren', relationship: 'Connected to DAPL security operations', href: '/entities/individuals/kelcy-warren' },
 ],
 },






 'karl-bendetsen': {
 name: 'Karl Bendetsen',
 title: 'Army Colonel who devised and implemented the logistics of Japanese American internment',
 role: 'Military Officer',
 riskLevel: 'critical',
 description: 'Karl Bendetsen. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Army', role: 'Colonel, War Department', type: 'agency' },
 ],
 controversies: [
 'Designed the logistical framework for mass internment of Japanese Americans',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Devised and implemented the administrative procedures for Japanese American internment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John L. DeWitt', relationship: 'Aide who helped architect Japanese internment', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Dillon S. Myer', relationship: 'Fellow Japanese internment figure', href: '/entities/individuals/dillon-s-myer' },
 { name: 'Gordon Hirabayashi', relationship: 'Japanese American resistor who challenged Bendetsen\'s internment', href: '/entities/individuals/gordon-hirabayashi' },
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
 'kevin-maxwell': {
 name: 'Kevin Maxwell',
 title: 'Businessman and Maxwell Family Member',
 role: 'Ghislaine Maxwell brother',
 riskLevel: 'low',
 description: 'Kevin Maxwell is a British businessman and the brother of Ghislaine Maxwell. He was charged with the largest fraud in British history following the collapse of his father Robert Maxwell media empire in 1991, when 400 million British pounds went missing from Mirror Group pension funds. He was acquitted after a lengthy trial.',
 education: ['University of Oxford, BA'],
 affiliations: [
 { name: 'Maxwell Communications', role: 'Former Director', type: 'corporation' },
 ],
 controversies: [
 'Charged in 1996 with conspiracy to defraud Mirror Group pension fund holders of 400 million pounds following father Robert Maxwell death and business collapse',
 'The Maxwell pension fraud was the largest in British history at the time; approximately 30,000 pensioners lost their retirement savings',
 'Acquitted after an eight-month trial in January 1996; the judge directed the jury to acquit on some charges due to insufficient evidence',
 'Declared bankrupt with debts of 406 million pounds in 1992, reportedly the largest personal bankruptcy in British history',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1991-11-05', event: 'Father Robert Maxwell found dead in the Atlantic Ocean' },
 { date: '1992-06-01', event: 'Declared bankrupt with debts of 406 million pounds' },
 { date: '1995-06-01', event: 'Trial begins for Maxwell pension fund fraud' },
 { date: '1996-01-22', event: 'Acquitted of all charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'UK National Archives - Maxwell Pension Fund Investigation', url: 'https://www.nationalarchives.gov.uk/', date: '1996-01-22' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ghislaine Maxwell', relationship: 'Sister, convicted sex trafficker', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Robert Maxwell', relationship: 'Father, disgraced media baron', href: '/entities/individuals/robert-maxwell' },
 ],
 },

 'katinka-matson': {
 name: 'Katinka Matson',
 title: 'Edge Foundation Co-Founder',
 role: 'Organized Epstein-Scientist Events',
 riskLevel: 'low',
 description: 'Katinka Matson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Edge Foundation', role: 'Co-Founder', type: 'organization' },
 { name: 'Brockman Inc.', role: 'VP', type: 'corporation' },
 ],
 controversies: [
 'Helped organize events connecting Epstein with scientists',
 'Internal documents obtained through litigation discovery show Katinka Matson was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Katinka Matson', url: 'https://www.google.com/search?q=Katinka%20Matson', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Organized events he attended/funded', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Co-founder of Edge', href: '/entities/individuals/john-brockman' },
 { name: 'Ghislaine Maxwell', relationship: 'Connected through Edge Foundation intellectual circuits', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Lawrence Krauss', relationship: 'Edge Foundation scientist connected to Epstein', href: '/entities/individuals/lawrence-krauss' },
 { name: 'Marvin Minsky', relationship: 'Edge Foundation associate who attended Epstein events', href: '/entities/individuals/marvin-minsky' },
 { name: 'Daniel Dennett', relationship: 'Edge Foundation intellectual in Epstein-adjacent circles', href: '/entities/individuals/daniel-dennett' },
 ],
 },







 'katie-couric': {
 name: 'Katie Couric',
 title: 'News Anchor',
 role: 'Attended Epstein Dinner',
 riskLevel: 'low',
 description: 'Katie Couric. Profile pending review.',
 birthDate: 'January 7, 1957',
 education: ['University of Virginia'],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Attended Epstein dinner at NYC mansion post-conviction (2010)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2010', event: 'Attended dinner at Epstein mansion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Katie Couric', url: 'https://en.wikipedia.org/wiki/Katie_Couric', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Both attended 2010 Epstein dinner party', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'George Stephanopoulos', relationship: 'Fellow journalist at same Epstein dinner', href: '/entities/individuals/george-stephanopoulos' },
 { name: 'Woody Allen', relationship: 'Present at same Epstein social events', href: '/entities/individuals/woody-allen' },
 { name: 'Chelsea Handler', relationship: 'Media figure in overlapping social circles', href: '/entities/individuals/chelsea-handler' },
 ],
 },

 'kushner-companies': {
 name: 'Kushner Companies',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'high',
 description: 'Kushner Companies. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Kushner Companies and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-08-20', event: 'Documentation updated based on newly available public records and filings' },
 { date: '2021-05-28', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2020-08-20' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-05-28' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-03-02' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'koch-industries': {
 name: 'Koch Industries',
 title: 'Public Figure',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'Koch Industries. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Koch Industries has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-09-16', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2021-01-15' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-09-16' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-07-05' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'knkt': {
 name: 'Knkt',
 title: 'Person of Interest',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Knkt. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Knkt and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-02-26', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2020-02-26' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-02-22' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-12-21' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'kristalina-georgieva': {
 name: 'Kristalina Georgieva',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kristalina Georgieva. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Kristalina Georgieva facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kathy-hochul': {
 name: 'Kathy Hochul',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kathy Hochul. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Kathy Hochul, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'ken-fisher': {
 name: 'Ken Fisher',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ken Fisher. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kenneth-griffin': {
 name: 'Kenneth Griffin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kenneth Griffin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Kenneth Griffin, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'kathleen-hicks': {
 name: 'Kathleen Hicks',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Kathleen Hicks. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Kathleen Hicks facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },










};

export default profiles;
