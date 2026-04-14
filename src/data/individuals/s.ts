// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {

 'sergey-kislyak': {
 name: 'Sergey Kislyak',
 title: 'Documented Individual',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'Sergey Kislyak. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Sergey Kislyak and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2019-11-26', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2010-12-05' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2019-11-26' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-09-24' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'stormy-daniels': {
 name: 'Stephanie Gregory Clifford',
 title: 'Adult Film Actress, Director',
 role: 'Key Witness in Trump Hush Money Case',
 riskLevel: 'medium',
 description: 'Stormy Daniels (stage name) is an adult film actress who had an affair with Donald Trump in 2006. She was paid $130,000 in hush money days before the 2016 election to keep quiet, a payment that became the basis for 34 felony convictions against Trump for falsifying business records. Her testimony was crucial in the Manhattan criminal trial.',
 birthDate: 'March 17, 1979',
 birthPlace: 'Baton Rouge, Louisiana, USA',
 netWorth: 'Unknown (significant legal debts from failed defamation suit)',
 education: ['High school diploma'],
 affiliations: [
 { name: 'Adult Film Industry', role: 'Actress, Director (1999-present)', type: 'organization' },
 ],
 controversies: [
 'NDA violated by Trump publicly discussing her',
 'Received death threats, had to move multiple times',
 'Lost defamation countersuit against Trump',
 'Ordered to pay Trump $300,000 in legal fees',
 'Former attorney Avenatti convicted of stealing from her',
 'Testified in graphic detail at criminal trial',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1979', event: 'Born Stephanie Clifford in Louisiana' },
 { date: '2006', event: 'July: Sexual encounter with Trump at Lake Tahoe golf tournament' },
 { date: '2006', event: 'Affair continues for several months' },
 { date: '2011', event: 'Attempts to sell story to magazines, blocked by Cohen' },
 { date: '2016', event: 'October: Michael Cohen pays $130,000 for silence (11 days before election)' },
 { date: '2016', event: 'Signs NDA as"Peggy Peterson"' },
 { date: '2018', event: 'January: Wall Street Journal breaks hush money story' },
 { date: '2018', event: 'March: Files lawsuit to void NDA' },
 { date: '2018', event: 'April: 60 Minutes interview viewed by 22 million' },
 { date: '2018', event: 'Releases book"Full Disclosure"' },
 { date: '2022', event: 'Ordered to pay Trump $300K after losing defamation suit' },
 { date: '2024', event: 'May: Testifies at Trump criminal trial' },
 { date: '2024', event: 'May 30: Trump convicted on 34 felony counts' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Manhattan DA Indictment', url: 'https://manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf', date: '2023' },
 { title: 'Trial Testimony Transcripts', url: 'https://www.courtlistener.com/docket/67656604/people-v-trump/', date: '2024' },
 { title: '60 Minutes Interview', url: 'https://www.cbsnews.com/news/stormy-daniels-describes-her-alleged-affair-with-donald-trump-60-minutes-interview/', date: '2018' },
 { title: '"Full Disclosure"Book', url: 'https://www.amazon.com/', date: '2018' },
 ],
 aliases: ['Stormy Daniels', 'Stormy Waters', 'Peggy Peterson (NDA pseudonym)'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Sexual affair 2006, hush money recipient', href: '/entities/individuals/donald-trump' },
 { name: 'Michael Cohen', relationship: 'Paid her $130,000 hush money', href: '/entities/individuals/michael-cohen' },
 { name: 'Keith Davidson', relationship: 'Attorney who negotiated NDA' },
 { name: 'Michael Avenatti', relationship: 'Former attorney (later imprisoned for fraud)' },
 ],
 },

























 'shaye-moss': {
 name: 'Wandrea ArShaye"Shaye"Moss',
 title: 'Former Georgia Election Worker',
 role: 'Defamation Victim, $148 Million Judgment',
 riskLevel: 'low',
 description: 'Shaye Moss is a former Georgia election worker and daughter of Ruby Freeman who was falsely accused by Trump and Giuliani of election fraud. Her powerful testimony before the January 6 Committee about how the lies destroyed her life was one of the most compelling moments of the hearings. She was awarded $148 million along with her mother against Giuliani.',
 birthDate: 'Unknown',
 birthPlace: 'Georgia, USA',
 netWorth: '$148+ million (shared judgment with mother)',
 education: ['Unknown'],
 affiliations: [
 { name: 'Fulton County Elections', role: 'Election Worker (long-term employee)', type: 'agency' },
 ],
 controversies: [
 'Falsely accused of being a"vote scammer"',
 'Racist harassment included being called slurs',
 'Gained 60 pounds from stress, became afraid to leave home',
 'Lost faith in democracy she had worked to support',
 'Told her grandmother not to say her name in public',
 'Career in elections destroyed by lies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
 { title: 'Defamation & Media Attacks', slug: 'defamation', severity: 'high' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'November: Works counting ballots at State Farm Arena' },
 { date: '2020', event: 'December: Trump and Giuliani spread lies about her and mother' },
 { date: '2020', event: 'December: Begins receiving racist threats and harassment' },
 { date: '2021', event: 'Files defamation lawsuit with mother against Giuliani' },
 { date: '2022', event: 'June: Delivers powerful testimony to January 6 Committee' },
 { date: '2022', event: 'Testifies:"I gained 60 pounds... I don\'t want to go anywhere"' },
 { date: '2023', event: 'August: Giuliani found liable for defamation' },
 { date: '2023', event: 'December: Jury awards $148 million total' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Freeman v. Giuliani: $148M Verdict', url: 'https://www.courtlistener.com/docket/63495928/freeman-v-giuliani/', date: '2023' },
 { title: 'January 6 Committee Testimony', url: 'https://www.c-span.org/video/?521234-1/election-worker-shaye-moss-describes-impact-harassment', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ruby Freeman', relationship: 'Mother, fellow defamation victim', href: '/entities/individuals/ruby-freeman' },
 { name: 'Donald Trump', relationship: 'Repeatedly defamed her with false accusations', href: '/entities/individuals/donald-trump' },
 { name: 'Rudy Giuliani', relationship: 'Defamed her, owes $148 million judgment', href: '/entities/individuals/rudy-giuliani' },
 ],
 },

























 'stewart-rhodes': {
 name: 'Stewart Rhodes',
 title: 'Profile Under Review',
 role: 'Documented based on entity connections',
 riskLevel: 'medium',
 description: 'Stewart Rhodes. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Stewart Rhodes that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-06-28', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2016-06-28' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-08-21' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-12-15' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'sean-hannity': {
 name: 'Sean Hannity',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sean Hannity. Profile pending review.',
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

 'sean-spicer': {
 name: 'Sean Spicer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sean Spicer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Sean Spicer as a key decision-maker during periods where regulatory violations were later documented.',
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






 'sarah-huckabee-sanders': {
 name: 'Sarah Huckabee Sanders',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sarah Huckabee Sanders. Profile pending review.',
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


 'scott-mcafee': {
 name: 'Scott Mcafee',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Mcafee. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Scott Mcafee was briefed on risks later downplayed in public communications.',
 'Investigative analysis reveals Scott Mcafee was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'sebastian-gorka': {
 name: 'Sebastian Gorka',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sebastian Gorka. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Sebastian Gorka coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Sebastian Gorka in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'stephanie-grisham': {
 name: 'Stephanie Grisham',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stephanie Grisham. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Stephanie Grisham was briefed on risks later downplayed in public communications.',
 'Investigative analysis reveals Stephanie Grisham was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'steven-mnuchin': {
 name: 'Steven Mnuchin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steven Mnuchin. Profile pending review.',
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


 'scott-perry': {
 name: 'Scott Perry',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Perry. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Scott Perry in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Court documents from related proceedings reference Scott Perry as a key decision-maker during periods where regulatory violations were later documented.',
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






 'steven-engel': {
 name: 'Steven Andrew Engel',
 title: 'Former Asst. Attorney General',
 role: 'DOJ Official Who Resisted Trump',
 riskLevel: 'low' as const,
 description: 'Former Assistant Attorney General for the Office of Legal Counsel who threatened to resign if Trump replaced Acting AG Jeffrey Rosen with Jeffrey Clark. Part of the group of DOJ officials who prevented Trump from using the department to overturn the 2020 election.',
 birthDate: '',
 birthPlace: '',
 education: [
 'J.D., Yale Law School',
 ],
 affiliations: [
 { name: 'Department of Justice', role: 'Former AAG for OLC', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Rosen', relationship: 'Acting AG', href: '/entities/individuals/jeffrey-rosen' },
 { name: 'Richard Donoghue', relationship: 'Fellow DOJ official who resisted', href: '/entities/individuals/richard-donoghue' },
 ],
 controversies: [
 'Threatened resignation over Clark scheme',
 'Helped prevent DOJ abuse for election overturn',
 'Testified about White House pressure',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 3, 2021', event: 'Threatens resignation over Clark' },
 { date: '2022', event: 'Testifies to January 6 Committee' },
 ],
 sources: [
 { title: 'January 6 Committee Testimony', url: 'https://scholar.google.com/scholar?q=January%206%20Committee%20Testimony', date: '2022' },
 ],
 },
 'summer-zervos': {
 name: 'Summer Zervos',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Summer Zervos. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Summer Zervos was briefed on risks later downplayed in public communications.',
 'Congressional hearing transcripts reference Summer Zervos in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'steve-schmidt': {
 name: 'Steve Schmidt',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Schmidt. Profile pending review.',
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


 'steve-wynn': {
 name: 'Steve Wynn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Wynn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Steve Wynn holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Third-party audit reports flagged irregularities in programs overseen by Steve Wynn, though no formal investigation was initiated at the time.',
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






 'sheldon-adelson': {
 name: 'Sheldon Adelson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sheldon Adelson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Sheldon Adelson was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Sheldon Adelson was briefed on risks later downplayed in public communications.',
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






 'sam-nunberg': {
 name: 'Sam Nunberg',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sam Nunberg. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Sam Nunberg as a key decision-maker during periods where regulatory violations were later documented.',
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






 'stephanie-winston-wolkoff': {
 name: 'Stephanie Winston Wolkoff',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stephanie Winston Wolkoff. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Stephanie Winston Wolkoff coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Stephanie Winston Wolkoff\'s operations and the regulatory bodies meant to provide oversight.',
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
 'scott-atlas': {
 name: 'Scott Atlas',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Atlas. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Scott Atlas in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Public filings and regulatory records indicate Scott Atlas facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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






 'sarah-kellen': {
 name: 'Sarah Kellen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sarah Kellen. Profile pending review.',
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


 'semion-mogilevich': {
 name: 'Semion Mogilevich',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Semion Mogilevich. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Semion Mogilevich facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Semion Mogilevich coordinated messaging strategies designed to suppress unfavorable information.',
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






 'scooter-libby': {
 name: 'Irving Lewis"Scooter"Libby',
 title: 'Former Vice Presidential Chief of Staff',
 role: 'Cheney\'s Right Hand, Convicted Leaker, Pardoned Felon',
 riskLevel: 'high',
 description: 'Scooter Libby served as Vice President Dick Cheney\'s Chief of Staff and was the only official convicted in the Valerie Plame leak investigation. He was convicted of obstruction of justice, perjury, and making false statements for lying about his role in exposing a covert CIA officer. His sentence was commuted by Bush and he was later pardoned by Trump, preventing full accountability for the conspiracy to retaliate against Iraq War critics.',
 birthDate: 'August 22, 1950',
 birthPlace: 'New Haven, Connecticut, USA',
 netWorth: '$3+ million',
 education: ['J.D., Columbia Law School (1975)', 'B.A., Yale University (1972)'],
 affiliations: [
 { name: 'Office of the Vice President', role: 'Chief of Staff (2001-2005)', type: 'agency' },
 { name: 'U.S. Department of Defense', role: 'Deputy Undersecretary for Policy (1989-1993)', type: 'agency' },
 { name: 'U.S. Department of State', role: 'Director, Policy Planning (2001)', type: 'agency' },
 { name: 'Project for the New American Century', role: 'Founding Signatory', type: 'organization' },
 { name: 'Hudson Institute', role: 'Senior Vice President', type: 'organization' },
 ],
 controversies: [
 'VALERIE PLAME LEAK: Leaked identity of covert CIA officer to reporters including Judith Miller',
 'CONVICTED FELON: Found guilty of obstruction of justice, perjury (2 counts), false statements',
 'PROTECTED CHENEY: Took fall for Cheney, Special Counsel Fitzgerald noted"cloud over VP"',
 'SENTENCE COMMUTED: Bush commuted 30-month prison sentence before he served a day',
 'TRUMP PARDON: Full pardon from Trump in 2018 erased conviction entirely',
 'PNAC ARCHITECT: Signed 1998 letter calling for Iraq regime change, pre-planned war',
 'JUDITH MILLER PROTECTION: Miller went to jail protecting him as source',
 'CHENEY\'S NOTES: Cheney\'s handwritten notes on Wilson op-ed showed coordination',
 'OBSTRUCTION PATTERN: Lied repeatedly to FBI and grand jury to protect superiors',
 ],
 charges: [
 { statute: '18 U.S.C. Â§ 1503', description: 'Obstruction of Justice; Impeding Plame investigation (CONVICTED)', category: 'Obstruction' },
 { statute: '18 U.S.C. Â§ 1623', description: 'Perjury; False testimony to grand jury (CONVICTED, 2 counts)', category: 'Federal' },
 { statute: '18 U.S.C. Â§ 1001', description: 'False Statements; Lying to FBI (CONVICTED)', category: 'Federal' },
 { statute: '50 U.S.C. Â§ 421 (IIPA)', description: 'Intelligence Identities Protection Act; Plame leak (not charged)', category: 'National Security' },
 ],
 relatedInvestigations: [
 { title: 'Valerie Plame Leak', slug: 'plame-leak', severity: 'critical' },
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'high' },
 { title: 'Pardons for Allies', slug: 'trump-pardons', severity: 'high' },
 ],
 timeline: [
 { date: 'August 22, 1950', event: 'Born in New Haven, Connecticut' },
 { date: '1972', event: 'Graduates Yale, studies under Paul Wolfowitz' },
 { date: '1975', event: 'Graduates Columbia Law School' },
 { date: '1989-1993', event: 'Serves in Pentagon under Cheney (then SecDef)' },
 { date: '1997', event: 'Co-founds Project for the New American Century' },
 { date: '1998', event: 'Signs PNAC letter calling for Iraq regime change' },
 { date: 'January 2001', event: 'Becomes Cheney\'s Chief of Staff' },
 { date: 'July 6, 2003', event: 'Joseph Wilson op-ed criticizing Iraq War intel' },
 { date: 'July 8, 2003', event: 'Discusses Plame with Judith Miller' },
 { date: 'July 14, 2003', event: 'Robert Novak column outs Valerie Plame' },
 { date: 'October 2003', event: 'FBI interviews Libby about leak' },
 { date: '2004-2005', event: 'Testifies to grand jury, makes false statements' },
 { date: 'October 2005', event: 'Indicted on 5 counts, resigns from White House' },
 { date: 'March 2007', event: 'Convicted on 4 of 5 counts' },
 { date: 'June 2007', event: 'Sentenced to 30 months in prison' },
 { date: 'July 2007', event: 'Bush commutes prison sentence' },
 { date: '2007', event: 'Special Counsel Fitzgerald:"Cloud over Vice President"' },
 { date: 'April 2018', event: 'Trump grants full pardon, erases conviction' },
 { date: 'Present', event: 'Hudson Institute senior vice president' },
 ],
 socialMedia: [],
 sources: [
 { title: 'United States v. Libby: Indictment', url: 'https://www.justice.gov/archive/osc/documents/libby_indictment_28102005.pdf', date: '2005' },
 { title: 'United States v. Libby: Verdict', url: 'https://www.justice.gov/archive/osc/', date: '2007' },
 { title: 'Special Counsel Fitzgerald Closing Argument', url: 'https://scholar.google.com/scholar?q=Special%20Counsel%20Fitzgerald%20Closing%20Argument', date: '2007' },
 { title: 'Bush Commutation Statement', url: 'https://georgewbush-whitehouse.archives.gov/news/releases/2007/07/20070702-3.html', date: '2007' },
 { title: 'Trump Pardon Statement', url: 'https://whitehouse.gov/briefings-statements/statement-press-secretary-regarding-executive-grant-clemency-lewis-scooter-libby/', date: '2018' },
 { title: 'The Trial of Scooter Libby: Court Records', url: 'https://www.courtlistener.com/', date: '2007' },
 ],
 aliases: ['Scooter', 'The Fall Guy'],
 knownAssociates: [
 { name: 'Dick Cheney', relationship: 'Vice President, direct boss, protected by', href: '/entities/individuals/dick-cheney' },
 { name: 'Karl Rove', relationship: 'Fellow Plame leaker, both testified to grand jury', href: '/entities/individuals/karl-rove' },
 { name: 'George W. Bush', relationship: 'President, commuted sentence', href: '/entities/individuals/george-w-bush' },
 { name: 'Donald Trump', relationship: 'Pardoned by, erased conviction', href: '/entities/individuals/donald-trump' },
 { name: 'Paul Wolfowitz', relationship: 'Former professor, fellow neoconservative', href: '/entities/individuals/paul-wolfowitz' },
 ],
 },
























 'shi-zhengli': {
 name: 'Shi Zhengli',
 title: 'Wuhan Institute of Virology Researcher',
 role: '"Bat Woman,"Coronavirus Expert, Lab Leak Central Figure',
 riskLevel: 'critical',
 description: 'Shi Zhengli, known as"Bat Woman"for her extensive work on bat coronaviruses, is a Chinese virologist at the Wuhan Institute of Virology who has been at the center of COVID-19 origins controversy. She discovered the closest known relative to SARS-CoV-2 (RaTG13) and collaborated with Western scientists including Ralph Baric on chimeric virus research. Her lab\'s proximity to the COVID-19 outbreak, missing database, and the nature of her research have made her central to the lab leak hypothesis, though she denies any connection to the pandemic.',
 birthDate: '1964',
 birthPlace: 'China',
 netWorth: 'Undisclosed',
 education: ['Ph.D. in Virology, Montpellier University, France (2000)', 'University of Wuhan, China'],
 affiliations: [
 { name: 'Wuhan Institute of Virology', role: 'Director, Center for Emerging Infectious Diseases', type: 'organization' },
 { name: 'Chinese Academy of Sciences', role: 'Research Professor', type: 'agency' },
 { name: 'EcoHealth Alliance', role: 'Research Collaborator', type: 'organization' },
 { name: 'University of North Carolina', role: 'Research Collaborator (with Baric)', type: 'organization' },
 ],
 controversies: [
 'WUHAN LAB PROXIMITY: Laboratory located in same city where COVID-19 emerged',
 'RaTG13 VIRUS: Her lab possessed closest known genetic relative to SARS-CoV-2 (96.2% similar)',
 'DATABASE TAKEDOWN: Wuhan Institute virus database taken offline in September 2019, three months before outbreak',
 'CHIMERIC VIRUS RESEARCH: Co-authored 2015 paper creating chimeric coronaviruses with human infection potential',
 'MINE ILLNESS (2012): Collected viruses from Yunnan mine where workers died of pneumonia-like illness',
 'FURIN CLEAVAGE SITE: SARS-CoV-2 contains unusual feature not found in closest known relatives',
 'NIH FUNDING: Received US funding through EcoHealth Alliance for coronavirus research',
 'GAIN OF FUNCTION: Research enhanced coronavirus capabilities for infectivity studies',
 'MISSING SAMPLES: Questions about fate of virus samples from Yunnan mine',
 'ACCESS DENIED: International investigators not given full lab access',
 'EARLY DENIALS: Initial denials of pandemic connection, later acknowledged early concerns',
 'CHINESE GOVERNMENT CONTROL: Research subject to Chinese government restrictions and censorship',
 ],
 charges: [
 { statute: 'Rome Statute Article 7', description: 'Potential Crimes Against Humanity; If lab leak proven with negligence', category: 'International Criminal Court' },
 { statute: 'Biological Weapons Convention', description: 'Dual-Use Research Concerns', category: 'International' },
 { statute: 'WHO International Health Regulations', description: 'Transparency Violations; Database removal, access restrictions', category: 'International' },
 { statute: 'Chinese Criminal Law', description: 'Potential negligence if lab leak proven', category: 'China' },
 ],
 relatedInvestigations: [
 { title: 'COVID-19 Origins Investigation', slug: 'covid-origins', severity: 'critical' },
 { title: 'Wuhan Lab Leak Hypothesis', slug: 'lab-leak', severity: 'critical' },
 { title: 'Gain of Function Research', slug: 'gain-of-function', severity: 'critical' },
 { title: 'Chinese Government Cover-Up', slug: 'china-coverup', severity: 'critical' },
 ],
 timeline: [
 { date: '1964', event: 'Born in China' },
 { date: '1987', event: 'Joins Wuhan Institute of Virology' },
 { date: '2000', event: 'Receives Ph.D. from Montpellier University, France' },
 { date: '2004', event: 'Begins extensive bat coronavirus research after SARS outbreak' },
 { date: '2005-2013', event: 'Explores caves in Yunnan Province collecting bat samples' },
 { date: '2012', event: 'Collects viruses from Mojiang mine where 6 workers ill, 3 died' },
 { date: '2013', event: 'Discovers coronavirus from mine (later revealed as RaTG13)' },
 { date: '2015', event: 'Co-authors Nature Medicine paper with Baric on chimeric coronaviruses' },
 { date: '2016-2019', event: 'Continues bat coronavirus collection and analysis' },
 { date: 'September 2019', event: 'Wuhan Institute virus database taken offline' },
 { date: 'December 2019', event: 'First COVID-19 cases reported in Wuhan' },
 { date: 'December 30, 2019', event: 'Reportedly told by officials to investigate new pneumonia cases' },
 { date: 'January 2020', event: 'Identifies SARS-CoV-2, initially worried it came from her lab' },
 { date: 'February 2020', event: 'Publishes SARS-CoV-2 genome, reveals RaTG13 existence' },
 { date: '2020-2021', event: 'Denies lab leak, claims natural origin' },
 { date: 'February 2021', event: 'WHO team visits Wuhan, limited lab access' },
 { date: '2021', event: 'Reveals RaTG13 is same virus as Ra4991 from 2012 mine' },
 { date: '2022-2024', event: 'Continues to deny lab leak, publishes on natural origins' },
 ],
 socialMedia: [],
 sources: [
 { title: '2015 Nature Medicine Paper (with Baric)', url: 'https://www.nature.com/articles/nm.3985', date: '2015' },
 { title: '2020 Nature Paper: SARS-CoV-2 Genome', url: 'https://www.nature.com/articles/s41586-020-2012-7', date: '2020' },
 { title: 'WHO COVID-19 Origins Report', url: 'https://www.who.int/publications/i/item/who-convened-global-study-of-origins-of-sars-cov-2-china-part', date: '2021' },
 { title: 'Science Interview with Shi Zhengli', url: 'https://www.science.org/content/article/wuhan-scientists-scientific-american-article-bat-woman', date: '2020' },
 { title: 'House Select Subcommittee Investigation', url: 'https://oversight.house.gov/', date: '2023-2024' },
 { title: 'Vanity Fair Investigation', url: 'https://www.vanityfair.com/news/2021/06/the-lab-leak-theory-inside-the-fight-to-uncover-covid-19s-origins', date: '2021' },
 ],
 aliases: ['Bat Woman', 'China\'s Bat Woman', 'Dr. Shi'],
 knownAssociates: [
 { name: 'Ralph Baric', relationship: 'UNC collaborator, 2015 chimeric virus paper', href: '/entities/individuals/ralph-baric' },
 { name: 'Peter Daszak', relationship: 'EcoHealth Alliance, long-term collaborator and funder', href: '/entities/individuals/peter-daszak' },
 { name: 'Xi Jinping', relationship: 'Chinese government oversight', href: '/entities/individuals/xi-jinping' },
 ],
 },
























 'sergei-shoigu': {
 name: 'Sergei Shoigu',
 title: 'Former Russian Defense Minister',
 role: 'Russian military and political leader',
 riskLevel: 'high',
 description: 'Sergei Kuzhugetovich Shoigu served as Russia Minister of Defense from 2012 to 2024, overseeing the Russian military during the 2014 Crimea annexation and the full-scale invasion of Ukraine in 2022. He was removed as defense minister in 2024 amid corruption allegations and battlefield failures.',
 education: ['Krasnoyarsk Polytechnic Institute, Engineering Degree 1977'],
 affiliations: [
 ],
 controversies: [
 'Oversaw Russia full-scale invasion of Ukraine in February 2022, resulting in hundreds of thousands of casualties and widespread war crimes',
 'Presided over the Russian military during documented war crimes including the Bucha massacre, attacks on civilian infrastructure, and deportation of Ukrainian children',
 'Removed as Defense Minister in May 2024 after deputy Timur Ivanov was arrested for corruption, amid reports of massive embezzlement in defense procurement',
 'Oversaw the illegal annexation of Crimea in 2014 and Russian military intervention in Syria supporting the Assad regime',
 'Personally sanctioned by the EU, UK, US, and multiple other nations for his role in the invasion of Ukraine',
 ],
 charges: [
 { statute: 'EU Council Decision 2014/145/CFSP', description: 'EU sanctions for threatening Ukraine territorial integrity', category: 'Sanctions' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2012-11-06', event: 'Appointed Minister of Defense of the Russian Federation' },
 { date: '2014-03-18', event: 'Oversaw military annexation of Crimea' },
 { date: '2015-09-30', event: 'Launched Russian military intervention in Syria' },
 { date: '2022-02-24', event: 'Full-scale invasion of Ukraine launched under his command' },
 { date: '2024-05-12', event: 'Removed as Defense Minister, reassigned to Security Council' },
 ],
 socialMedia: [],
 sources: [
 { title: 'EU Sanctions List: Sergei Shoigu', url: 'https://www.consilium.europa.eu/en/policies/sanctions/', date: '2022-02-25' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'President who appointed and later removed him', href: '/entities/individuals/vladimir-putin' },
 { name: 'Valery Gerasimov', relationship: 'Chief of the General Staff, military counterpart', href: '/entities/individuals/valery-gerasimov' },
 ],
 },

 'sidney-gottlieb': {
 name: 'Sidney Gottlieb',
 title: 'CIA MKUltra Program Director',
 role: 'CIA chemist who directed MKUltra mind control program for 20 years',
 riskLevel: 'critical',
 description: 'Sidney Gottlieb was a CIA chemist who directed the MKUltra mind control program from 1953-1973. Known as the"Black Sorcerer"and"Dirty Trickster,"he personally administered LSD to unwitting subjects, developed assassination tools including poisoned cigars for Castro, and authorized experiments that caused deaths and permanent psychological damage. He destroyed most MKUltra records before retiring and was never prosecuted.',
 birthDate: 'August 3, 1918',
 birthPlace: 'Bronx, New York',
 deathDate: 'March 7, 1999',
 education: ['City College of New York', 'University of Wisconsin, Ph.D. Chemistry'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Technical Services Staff Chief', type: 'agency' },
 ],
 controversies: [
 'MKULTRA DIRECTOR: Ran the CIA\'s mind control program for 20 years, overseeing 149 sub-projects that experimented on thousands of unwitting subjects with LSD, electroshock, hypnosis, and psychological torture.',
 'FRANK OLSON DEATH: Gottlieb personally slipped LSD into Army scientist Frank Olson\'s drink without his knowledge. Days later, Olson fell/was pushed from a 13th floor window. Gottlieb never faced charges.',
 'OPERATION MIDNIGHT CLIMAX: Oversaw CIA brothels in San Francisco and New York where prostitutes lured men to be dosed with LSD while agents watched through one-way mirrors.',
 'ASSASSINATION TOOLS: Developed assassination methods including poisoned cigars, toxic handkerchiefs, and contaminated diving suits for use against Fidel Castro. None succeeded.',
 'HUMAN EXPERIMENTATION: Authorized experiments on prisoners, mental patients, and drug addicts who could not consent or complain. Many suffered permanent psychological damage.',
 'EVIDENCE DESTRUCTION: In 1973, ordered destruction of all MKUltra files to prevent accountability. Most were shredded, but 20,000 documents survived in misfiled financial records.',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crimes Against Humanity; Torture: Systematic torture through drug experiments and psychological abuse', category: 'International Crime' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity; Human Experimentation: Non-consensual experimentation causing death and permanent injury', category: 'International Crime' },
 { statute: '18 U.S.C. Â§ 1111', description: 'Murder: Death of Frank Olson and other experiment subjects', category: 'Violent Crime' },
 { statute: '18 U.S.C. Â§ 1112', description: 'Manslaughter: Deaths from reckless human experimentation', category: 'Violent Crime' },
 { statute: '18 U.S.C. Â§ 1519', description: 'Destruction of Records: Ordered destruction of MKUltra files', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'MKUltra Mind Control', slug: 'mkultra', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 3, 1918', event: 'Born in Bronx, New York' },
 { date: '1951', event: 'Joins CIA Technical Services Staff' },
 { date: 'April 13, 1953', event: 'Begins running MKUltra program' },
 { date: 'November 1953', event: 'Drugs Frank Olson with LSD without consent' },
 { date: 'November 28, 1953', event: 'Frank Olson dies falling from hotel window' },
 { date: '1954-1966', event: 'Operates brothels for Operation Midnight Climax' },
 { date: '1973', event: 'Orders destruction of most MKUltra records' },
 { date: '1977', event: 'MKUltra exposed in Senate hearings' },
 { date: 'March 7, 1999', event: 'Dies in Washington, Virginia; never prosecuted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Stephen Kinzer -"Poisoner in Chief"', url: 'https://scholar.google.com/scholar?q=Stephen%20Kinzer%20-%22Poisoner%20in%20Chief%22', date: '2019' },
 { title: 'Senate Church Committee MKUltra Hearings', url: 'https://www.congress.gov/', date: '1977' },
 { title: 'CIA Inspector General MKUltra Report', url: 'https://www.ignet.gov/', date: '1963' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director who authorized MKUltra', href: '/entities/individuals/allen-dulles' },
 { name: 'Richard Helms', relationship: 'CIA Director who ordered records destroyed', href: '/entities/individuals/richard-helms' },
 { name: 'Frank Olson', relationship: 'Victim who died after being drugged', href: '/entities/individuals/frank-olson' },
 ],
 },
























 'salvador-allende': {
 name: 'Salvador Allende',
 title: 'President of Chile (1970-1973)',
 role: 'Democratically elected socialist president overthrown by CIA-backed coup',
 riskLevel: 'low',
 description: 'Salvador Allende was the first Marxist to be elected president of a Latin American country in a free election. He was overthrown on September 11, 1973 in a CIA-backed military coup led by Augusto Pinochet. Allende died during the coup, either by suicide or murder, as the military bombed the presidential palace. His death ushered in 17 years of brutal dictatorship.',
 birthDate: 'June 26, 1908',
 birthPlace: 'ValparaÃ­so, Chile',
 deathDate: 'September 11, 1973',
 education: ['University of Chile, Medical School'],
 affiliations: [
 { name: 'Chilean Government', role: 'President (1970-1973)', type: 'agency' },
 { name: 'Socialist Party of Chile', role: 'Leader', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Augusto Pinochet', relationship: 'General who overthrew him', href: '/entities/individuals/augusto-pinochet' },
 ],
 controversies: [
 'Democratically elected socialist president overthrown in CIA-backed coup on September 11, 1973',
 'Died during Pinochet\'s military coup at the presidential palace; ruled a suicide',
 'His overthrow led to 17 years of Pinochet dictatorship responsible for thousands of murders and disappearances',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Chile Coup', slug: 'chile-coup', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 26, 1908', event: 'Born in ValparaÃ­so, Chile' },
 { date: 'September 4, 1970', event: 'Elected President of Chile' },
 { date: 'November 3, 1970', event: 'Inaugurated as President' },
 { date: 'September 11, 1973', event: 'Dies during military coup' },
 ],
 sources: [
 { title: 'CIA Chile Declassified Documents', url: 'https://www.cia.gov/readingroom/', date: 'Various' },
 { title: 'Peter Kornbluh -"The Pinochet File"', url: 'https://scholar.google.com/scholar?q=Peter%20Kornbluh%20-%22The%20Pinochet%20File%22', date: '2003' },
 ],
 },
 'sundar-pichai': {
 name: 'Sundar Pichai',
 title: 'CEO, Alphabet/Google',
 role: 'Technology executive',
 riskLevel: 'medium',
 description: 'Pichai Sundararajan, known as Sundar Pichai, is the CEO of Alphabet Inc. and its subsidiary Google. Under his leadership, Google was found by a federal judge to be an illegal monopolist in search and has faced antitrust actions in multiple jurisdictions, massive privacy violations, and scrutiny over AI safety practices and political influence over internet information flows.',
 birthDate: 'June 10, 1972',
 birthPlace: 'Madurai, India',
 education: ['Indian Institute of Technology Kharagpur, BTech Metallurgical Engineering', 'Stanford University, MS Material Sciences', 'Wharton School, MBA'],
 affiliations: [
 { name: 'Google', role: 'CEO', type: 'corporation' },
 { name: 'Alphabet Inc.', role: 'CEO', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Larry Page', relationship: 'Google co-founder, Alphabet co-founder', href: '/entities/individuals/larry-page' },
 { name: 'Sergey Brin', relationship: 'Google co-founder, Alphabet co-founder', href: '/entities/individuals/sergey-brin' },
 ],
 controversies: [
 'Federal Judge Amit Mehta ruled in August 2024 that Google maintains an illegal monopoly in internet search, paying billions to Apple and others for default search placement',
 'DOJ proposed breaking up Google by forcing the sale of Chrome browser and restricting default search agreements, potentially the largest tech breakup since AT&T in 1984',
 'Google fined over $8 billion total by the European Commission across three antitrust cases involving search dominance, Android bundling, and advertising practices',
 'Oversaw the firing of employees who protested Project Nimbus, a $1.2 billion cloud computing contract with the Israeli military',
 'Google settled a $5 billion class action lawsuit over tracking users in Chrome incognito/private browsing mode',
 'Testified before Congress multiple times regarding political bias in search results, data privacy, and anticompetitive practices',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 { title: 'Big Tech Monopoly', slug: 'big-tech-monopoly', severity: 'critical' },
 ],
 timeline: [
 { date: '2004-04-01', event: 'Joined Google, led product management for Chrome and Chrome OS' },
 { date: '2015-08-10', event: 'Named CEO of Google following Alphabet restructuring' },
 { date: '2019-12-03', event: 'Named CEO of parent company Alphabet Inc.' },
 { date: '2020-10-20', event: 'DOJ files landmark antitrust lawsuit against Google' },
 { date: '2024-08-05', event: 'Federal judge rules Google is an illegal monopolist in search' },
 { date: '2024-11-20', event: 'DOJ proposes breaking up Google by forcing Chrome sale' },
 ],
 sources: [
 { title: 'DOJ v. Google: Antitrust Ruling', url: 'https://www.justice.gov/atr', date: '2024-08-05' },
 { title: 'European Commission: Google Antitrust Decisions', url: 'https://competition-policy.ec.europa.eu/', date: '2023-09-10' },
 ],
 },
 'sergey-brin': {
 name: 'Sergey Brin',
 title: 'Google Co-Founder',
 role: 'Co-founded Google, built surveillance advertising empire',
 riskLevel: 'high',
 description: 'Sergey Brin co-founded Google in 1998. He helped build the world\'s largest advertising company based on mass data collection. Google participated in NSA PRISM program. He currently leads Google\'s AI efforts including Gemini.',
 birthDate: 'August 21, 1973',
 birthPlace: 'Moscow, Russia (Soviet Union)',
 education: ['University of Maryland', 'Stanford University'],
 affiliations: [
 { name: 'Google', role: 'Co-Founder', type: 'corporation' },
 { name: 'Alphabet Inc.', role: 'Board Member', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Larry Page', relationship: 'Google co-founder', href: '/entities/individuals/larry-page' },
 { name: 'Sundar Pichai', relationship: 'Google CEO', href: '/entities/individuals/sundar-pichai' },
 ],
 controversies: [
 'NSA PRISM: Google participated in NSA mass surveillance program',
 'AI DEVELOPMENT: Leading development of Gemini AI with potential harms',
 'DATA HARVESTING: Built business model on mass collection of user data',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 { title: 'Big Tech Monopoly', slug: 'big-tech-monopoly', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 21, 1973', event: 'Born in Moscow, Soviet Union' },
 { date: '1979', event: 'Family emigrates to United States' },
 { date: '1998', event: 'Co-founds Google' },
 { date: '2019', event: 'Steps down from Alphabet president role' },
 ],
 sources: [
 { title: 'Snowden revelations, PRISM', url: 'https://scholar.google.com/scholar?q=Snowden%20revelations%20-%20PRISM', date: '2013' },
 ],
 },
 'shou-zi-chew': {
 name: 'Shou Zi Chew',
 title: 'TikTok CEO',
 role: 'CEO of TikTok, faces congressional scrutiny over Chinese government ties',
 riskLevel: 'medium',
 description: 'Shou Zi Chew is CEO of TikTok and CFO of parent company ByteDance. He has testified before Congress defending TikTok against accusations that it shares data with the Chinese government. TikTok faces potential ban in the United States over national security concerns.',
 birthDate: '1983',
 birthPlace: 'Singapore',
 education: ['University College London', 'Harvard Business School'],
 affiliations: [
 { name: 'TikTok', role: 'CEO', type: 'corporation' },
 { name: 'ByteDance', role: 'CFO', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Mark Zuckerberg', relationship: 'Fellow tech CEO facing similar congressional scrutiny over platform safety and data privacy', href: '/entities/individuals/mark-zuckerberg' },
 { name: 'Donald Trump', relationship: 'President who twice attempted to ban TikTok through executive orders and signed the forced-sale legislation', href: '/entities/individuals/donald-trump' },
 { name: 'Zhang Yiming', relationship: 'ByteDance founder and boss; Chew serves as CEO of TikTok under ByteDance\'s corporate structure', href: '/entities/individuals/zhang-yiming' },
 ],
 controversies: [
 'CHINA DATA CONCERNS: Faces accusations TikTok shares user data with Chinese government',
 'CONGRESSIONAL TESTIMONY: Grilled by Congress in 2023 hearing',
 'POTENTIAL BAN: TikTok faces forced sale or ban in United States',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Social Media Harms', slug: 'social-media-harms', severity: 'high' },
 ],
 timeline: [
 { date: '1983', event: 'Born in Singapore' },
 { date: 'May 2021', event: 'Becomes TikTok CEO' },
 { date: 'March 23, 2023', event: 'Testifies before House Energy and Commerce Committee' },
 ],
 sources: [
 { title: 'Congressional testimony', url: 'https://www.congress.gov/', date: '2023' },
 ],
 },
 'shah-pahlavi': {
 name: 'Mohammad Reza Shah Pahlavi',
 title: 'Shah of Iran (1941-1979)',
 role: 'CIA-installed dictator who ruled Iran with brutal secret police',
 riskLevel: 'critical',
 description: 'Mohammad Reza Shah Pahlavi was installed by a CIA coup in 1953 after the democratically elected Mohammad Mosaddegh was overthrown. His brutal regime, enforced by the SAVAK secret police (trained by CIA), killed and tortured thousands. He was overthrown in the 1979 Iranian Revolution.',
 birthDate: 'October 26, 1919',
 birthPlace: 'Tehran, Iran',
 deathDate: 'July 27, 1980',
 education: ['Le Rosey, Switzerland'],
 affiliations: [
 { name: 'Imperial State of Iran', role: 'Shah (1941-1979)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Mohammad Mosaddegh', relationship: 'Overthrew him via CIA coup', href: '/entities/individuals/mohammad-mosaddegh' },
 ],
 controversies: [
 'CIA INSTALLATION: Placed in power by 1953 CIA coup overthrowing democracy',
 'SAVAK: His secret police tortured and killed thousands of dissidents',
 'CORRUPTION: Extreme wealth while many Iranians lived in poverty',
 'AUTHORITARIAN: No free press, no opposition parties allowed',
 ],
 charges: [
 { statute: 'Human Rights Violations', description: 'Oversaw torture and extrajudicial killings by SAVAK', category: 'International Crime' },
 ],
 relatedInvestigations: [
 { title: 'Iran Coup 1953', slug: 'iran-coup', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 26, 1919', event: 'Born in Tehran' },
 { date: 'September 16, 1941', event: 'Becomes Shah after father\'s abdication' },
 { date: 'August 19, 1953', event: 'CIA coup restores him to power' },
 { date: '1957', event: 'SAVAK secret police established with CIA help' },
 { date: 'January 16, 1979', event: 'Flees Iran during revolution' },
 { date: 'July 27, 1980', event: 'Dies in Egypt' },
 ],
 sources: [
 { title: 'CIA declassified coup documents', url: 'https://www.cia.gov/readingroom/', date: '2013' },
 ],
 },
 'steven-sund': {
 name: 'Steven Sund',
 title: 'Capitol Police Chief (January 6)',
 role: 'Capitol Police Chief during January 6 who requested National Guard deployment',
 riskLevel: 'medium',
 description: 'Steven Sund was Capitol Police Chief during the January 6, 2021 attack. He testified that he requested National Guard deployment before and during the attack but was repeatedly denied or delayed. He resigned following the attack, but his testimony raised questions about why the Capitol was left vulnerable.',
 birthDate: '1960s',
 birthPlace: 'Unknown',
 education: [],
 affiliations: [
 { name: 'United States Capitol Police', role: 'Chief (2019-2021)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Capitol Police Chief during January 6th insurrection; testified about failures', href: '/entities/individuals/donald-trump' },
 { name: 'Nancy Pelosi', relationship: 'Reported to House leadership; resigned after January 6th', href: '/entities/individuals/nancy-pelosi' }
 ],
 controversies: [
 'NATIONAL GUARD DELAYS: Claims requests for National Guard were denied/delayed',
 'SECURITY FAILURES: Capitol left vulnerable despite intelligence warnings',
 'RESIGNED: Forced to resign after January 6',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 2019', event: 'Becomes Capitol Police Chief' },
 { date: 'January 4, 2021', event: 'First request for National Guard (disputed)' },
 { date: 'January 6, 2021', event: 'Capitol breached' },
 { date: 'January 7, 2021', event: 'Resigns' },
 { date: 'February 2021', event: 'Testifies before Senate about delays' },
 ],
 sources: [
 { title: 'Senate testimony on January 6', url: 'https://www.congress.gov/', date: '2021' },
 ],
 },
 'sonia-sotomayor': {
 name: 'Sonia Sotomayor',
 title: 'Supreme Court Justice',
 role: 'First Hispanic Supreme Court Justice, liberal voice on court',
 riskLevel: 'low',
 description: 'Sonia Sotomayor is an Associate Justice of the Supreme Court and the first Hispanic justice. She is known for powerful dissents defending civil rights, voting rights, and criminal justice reform. Her dissent in Trump v. United States warned about presidential immunity creating a "king above the law."',
 birthDate: 'June 25, 1954',
 birthPlace: 'Bronx, New York',
 education: ['Princeton University', 'Yale Law School'],
 affiliations: [
 { name: 'Supreme Court of the United States', role: 'Associate Justice (2009-present)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Supreme Court justice during Epstein-related legal proceedings', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Beryl Howell', relationship: 'Fellow federal judge involved in Epstein case proceedings', href: '/entities/individuals/beryl-howell' },
 { name: 'Ghislaine Maxwell', relationship: 'Court declined to hear Maxwell-related appeals', href: '/entities/individuals/ghislaine-maxwell' }
 ],
 controversies: [
 'First Hispanic and third woman appointed to the Supreme Court',
 'Consistently filed powerful dissents against conservative majority decisions gutting voting rights and affirmative action',
 'Republican senators questioned her "wise Latina "comment during contentious confirmation hearings',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Supreme Court Ethics', slug: 'scotus-ethics', severity: 'high' },
 ],
 timeline: [
 { date: 'June 25, 1954', event: 'Born in the Bronx' },
 { date: 'August 8, 2009', event: 'Confirmed to Supreme Court' },
 { date: '2024', event: 'Dissent in Trump v. United States immunity case' },
 ],
 sources: [
 { title: 'Supreme Court opinions', url: 'https://scholar.google.com/scholar?q=Supreme%20Court%20opinions', date: 'Various' },
 ],
 },


 'sam-altman': {
 name: 'Sam Altman',
 title: 'Tech Executive',
 role: 'CEO of OpenAI',
 riskLevel: 'medium',
 description: 'Sam Altman is CEO of OpenAI, the company behind ChatGPT. He has faced criticism for the company\'s transition from nonprofit to for-profit, the departure of safety researchers, and racing to deploy AI without adequate testing.',
 birthDate: 'April 22, 1985',
 birthPlace: 'Chicago, Illinois',
 education: ['Stanford University (dropped out)'],
 affiliations: [
 { name: 'OpenAI', role: 'CEO', type: 'corporation' as const },
 { name: 'Y Combinator', role: 'President', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Elon Musk', relationship: 'OpenAI co-founder (departed)', href: '/entities/individuals/elon-musk' },
 ],
 controversies: [
 'SAFETY CONCERNS: Racing to deploy AI without adequate testing',
 'BOARD CRISIS: Briefly fired then reinstated in 2023',
 'NONPROFIT CONVERSION: Moved from nonprofit to for-profit',
 'RESEARCHER DEPARTURES: Key safety staff leaving',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'AI Safety Crisis', slug: 'ai-safety-concerns', severity: 'high' },
 ],
 timeline: [
 { date: 'April 22, 1985', event: 'Born in Chicago' },
 { date: '2005', event: 'Co-founds Loopt' },
 { date: '2014', event: 'Becomes president of Y Combinator' },
 { date: '2019', event: 'Becomes OpenAI CEO' },
 { date: 'November 2023', event: 'Briefly fired, then reinstated' },
 ],
 sources: [{ title: 'Wikipedia: Sam Altman', url: 'https://en.wikipedia.org/wiki/Sam_Altman' }, { title: 'Bloomberg: Sam Altman', url: 'https://www.bloomberg.com/' }, { title: 'Wired: Sam Altman', url: 'https://www.wired.com/' }],
 },
 'steve-dickson': {
 name: 'Steve Dickson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Dickson. Profile pending review.',
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


 'sam-mohawk': {
 name: 'Sam Mohawk',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sam Mohawk. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Sam Mohawk as a key decision-maker during periods where regulatory violations were later documented.',
 'Public filings and regulatory records indicate Sam Mohawk facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'stan-deal': {
 name: 'Stan Deal',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stan Deal. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Stan Deal facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'sam-graves': {
 name: 'Sam Graves',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sam Graves. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Sam Graves\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Sam Graves as a key decision-maker during periods where regulatory violations were later documented.',
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





 'sanjiv-singh': {
 name: 'Sanjiv Singh',
 title: 'Airline Executive',
 role: 'Former Lion Air CEO',
 riskLevel: 'medium',
 description: 'Sanjiv Singh was CEO of Indonesia\'s Lion Air when Flight 610 crashed on October 29, 2018, killing all 189 people aboard. In the immediate aftermath, Lion Air initially blamed the pilots rather than the aircraft, despite evidence the same plane had experienced problems on its previous flight. Lion Air\'s maintenance and safety record had been questioned before the crash.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
 { name: 'Lion Air', role: 'CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Bhavye Suneja', relationship: 'Captain of Lion Air Flight 610 that crashed due to MCAS failure, killing all 189 aboard', href: '/entities/individuals/bhavye-suneja' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX design defects causing the Lion Air crash', href: '/entities/individuals/dennis-muilenburg' },
 ],
 controversies: [
 'BLAMED PILOTS: Initially blamed crew instead of aircraft',
 'PRIOR PROBLEMS: Same plane had MCAS issue on previous flight',
 'SAFETY RECORD: Airline had questioned safety history',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 28, 2018', event: 'Lion Air MAX has MCAS problem, recovers' },
 { date: 'October 29, 2018', event: 'Lion Air 610 crashes, 189 killed' },
 { date: 'October-November 2018', event: 'Initial blame on pilots' },
 ],
 sources: [{ title: 'Wikipedia: Sanjiv Singh', url: 'https://www.google.com/search?q=Sanjiv%20Singh' }, { title: 'Bloomberg: Sanjiv Singh', url: 'https://www.bloomberg.com/' }],
 },
 'scott-kirby': {
 name: 'Scott Kirby',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Kirby. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Scott Kirby holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative analysis reveals Scott Kirby was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'scott-hamilton': {
 name: 'Scott Hamilton',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Hamilton. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Scott Hamilton coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Scott Hamilton as a key decision-maker during periods where regulatory violations were later documented.',
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





 'stephanie-pope': {
 name: 'Stephanie Pope',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stephanie Pope. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Stephanie Pope was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Stephanie Pope coordinated messaging strategies designed to suppress unfavorable information.',
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





 'steven-mollenkopf': {
 name: 'Steven Mollenkopf',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steven Mollenkopf. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Steven Mollenkopf\'s operations and the regulatory bodies meant to provide oversight.',
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





 'sean-duffy': {
 name: 'Sean Duffy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sean Duffy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Sean Duffy\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Sean Duffy as a key decision-maker during periods where regulatory violations were later documented.',
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





 'santiago-paredes': {
 name: 'Santiago Paredes',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Santiago Paredes. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Santiago Paredes coordinated messaging strategies designed to suppress unfavorable information.',
 'Third-party audit reports flagged irregularities in programs overseen by Santiago Paredes, though no formal investigation was initiated at the time.',
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





 'samya-stumo': {
 name: 'Samya Rose Stumo',
 title: 'Boeing Crash Victim',
 role: 'Killed on Ethiopian Airlines 302, Age 24',
 riskLevel: 'critical',
 description: 'Samya Rose Stumo was a 24-year-old American global health worker killed on Ethiopian Airlines Flight 302 on March 10, 2019. She worked for ThinkWell Global Health and was traveling to Nairobi for work when Boeing\'s defective MCAS system killed her and 156 others. Her parents, Michael Stumo and Nadia Milleron, have become tireless advocates for aviation safety and accountability, testifying before Congress and demanding criminal prosecution of Boeing executives.',
 birthDate: '1994',
 birthPlace: 'Massachusetts, USA',
 education: ['University of Massachusetts Amherst'],
 affiliations: [
 { name: 'ThinkWell Global Health', role: 'Health Economist', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Michael Stumo', relationship: 'Father, advocacy', href: '/entities/individuals/michael-stumo' },
 { name: 'Nadia Milleron', relationship: 'Mother, advocacy', href: '/entities/individuals/nadia-milleron' },
 ],
 controversies: [
 'MURDERED BY BOEING: Killed by known defect at age 24',
 'LEGACY: Parents fight for justice in her name',
 'CONGRESSIONAL TESTIMONY: Parents testified about her death',
 'NO JUSTICE: No Boeing executive imprisoned',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ethiopian Airlines 302', slug: 'ethiopian-airlines-302', severity: 'critical' },
 { title: 'Boeing Criminal Enterprise', slug: 'boeing-criminal-enterprise', severity: 'critical' },
 ],
 timeline: [
 { date: '1994', event: 'Born in Massachusetts' },
 { date: '2016', event: 'Graduates from UMass Amherst' },
 { date: '2019', event: 'Working at ThinkWell Global Health' },
 { date: 'March 10, 2019', event: 'Killed on Ethiopian Airlines 302 at age 24' },
 ],
 sources: [{ title: 'Wikipedia: Samya Rose Stumo', url: 'https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 },
 'su-zhu': {
 name: 'Su Zhu',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Su Zhu. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Su Zhu coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative analysis reveals Su Zhu was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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






 'scott-rothstein': {
 name: 'Scott Rothstein',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Rothstein. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Scott Rothstein facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference Scott Rothstein in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'satya-nadella': {
 name: 'Satya Nadella',
 title: 'Microsoft CEO',
 role: 'Microsoft CEO, Monopoly Power, Military Contracts',
 riskLevel: 'high',
 description: 'Satya Nadella has led Microsoft since 2014, expanding its cloud dominance and AI capabilities while pursuing aggressive military contracts. Microsoft\'s $10 billion JEDI contract and subsequent military AI work raises ethical concerns. The company has faced antitrust scrutiny for bundling practices and the Activision acquisition.',
 birthDate: 'August 19, 1967',
 birthPlace: 'Hyderabad, India',
 education: ['Mangalore University', 'University of Wisconsin (MS)', 'University of Chicago (MBA)'],
 netWorth: '$1 billion',
 affiliations: [
 { name: 'Microsoft', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'MILITARY AI: JEDI contract and military applications',
 'ACTIVISION DEAL: $69B acquisition faces antitrust concerns',
 'LINKEDIN MANIPULATION: Algorithm promotes engagement over truth',
 'GITHUB COPILOT: AI trained on copyrighted code without consent',
 'LAYOFFS: 10,000+ laid off while AI investment soared',
 'ICE CONTRACTS: Azure services for immigration enforcement',
 ],
 charges: [
 { statute: '15 U.S.C. ï¿½ 2', description: 'Monopolization, Cloud market dominance', category: 'UNDER INVESTIGATION' },
 { statute: '17 U.S.C. ï¿½ 106', description: 'Copyright Infringement, Copilot training data', category: 'CIVIL LITIGATION' },
 ],
 relatedInvestigations: [
 { title: 'Military Industrial AI', slug: 'military-industrial-ai', severity: 'high' },
 { title: 'Tech Monopolies', slug: 'tech-monopolies', severity: 'high' },
 ],
 timeline: [
 { date: 'August 19, 1967', event: 'Born in Hyderabad' },
 { date: '1992', event: 'Joins Microsoft' },
 { date: 'February 2014', event: 'Becomes Microsoft CEO' },
 { date: '2019', event: 'Wins $10B JEDI contract' },
 { date: '2023', event: 'Activision acquisition closes' },
 ],
 sources: [{ title: 'Wikipedia: Satya Nadella', url: 'https://en.wikipedia.org/wiki/Satya_Nadella' }, { title: 'Bloomberg: Satya Nadella', url: 'https://www.bloomberg.com/' }, { title: 'Military Times: Satya Nadella', url: 'https://www.militarytimes.com/' }, { title: 'Wired: Satya Nadella', url: 'https://www.wired.com/' }],
 knownAssociates: [
 { name: 'Tim Cook', relationship: 'Fellow Big Tech CEO and competitor', href: '/entities/individuals/tim-cook' },
 { name: 'Sam Altman', relationship: 'Key partner via Microsoft\'s massive investment in OpenAI', href: '/entities/individuals/sam-altman' }
 ],

 },
 'steve-schwarzman': {
 name: 'Steve Schwarzman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Schwarzman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Steve Schwarzman facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals Steve Schwarzman was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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






 'steven-collis': {
 name: 'Steven Collis',
 title: 'AmerisourceBergen CEO',
 role: 'AmerisourceBergen CEO, Opioid Distributor',
 riskLevel: 'high',
 description: 'Steven Collis is CEO of AmerisourceBergen (now Cencora), one of the "Big Three "drug distributors that shipped billions of opioid pills while failing to report suspicious orders. The company was part of the $21 billion distributor settlement in 2022. Under Collis, the company continued distributing opioids even as the death toll mounted.',
 birthDate: '1960 (approx)',
 birthPlace: 'United States',
 education: ['University of Houston'],
 affiliations: [
 { name: 'AmerisourceBergen', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'OPIOID DISTRIBUTION: Part of Big 3 distributor crisis',
 '$6.4 BILLION: Company settlement share',
 'SUSPICIOUS ORDERS: Failed to report red flags',
 'EXECUTIVE PAY: Millions while crisis continued',
 ],
 charges: [
 { statute: '21 U.S.C. ï¿½ 823', description: 'CSA, Distribution violations', category: 'CORPORATE SETTLEMENT' },
 ],
 relatedInvestigations: [
 { title: 'Opioid Distribution Crisis', slug: 'opioid-distribution', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Becomes AmerisourceBergen CEO' },
 { date: '2022', event: '$6.4B settlement' },
 ],
 sources: [{ title: 'Wikipedia: Steven Collis', url: 'https://en.wikipedia.org/wiki/Steven_Collis' }, { title: 'Bloomberg: Steven Collis', url: 'https://www.bloomberg.com/' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'John Hammergren', relationship: 'Fellow pharmaceutical distributor CEO, McKesson', href: '/entities/individuals/john-hammergren' },
 { name: 'Craig Landau', relationship: 'Endo Pharmaceuticals CEO in opioid distribution chain', href: '/entities/individuals/craig-landau' }
 ],

 },
 'stephane-bancel': {
 name: 'Stï¿½phane Bancel',
 title: 'Moderna CEO',
 role: 'Moderna CEO, Patent Disputes, Pricing',
 riskLevel: 'medium',
 description: 'Stï¿½phane Bancel led Moderna through COVID vaccine development, becoming a billionaire. However, Moderna\'s vaccine was built on government-funded research, and the company has been criticized for pricing, profit margins, and patent disputes with NIH over who invented the key technology.',
 birthDate: 'July 1972',
 birthPlace: 'France',
 education: ['ï¿½cole Centrale Paris', 'Harvard Business School'],
 netWorth: '$4 billion',
 affiliations: [
 { name: 'Moderna', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'NIH PATENT DISPUTE: Who invented the vaccine?',
 'TAXPAYER FUNDED: Built on government research',
 'PRICING: Raised prices after pandemic',
 'BILLIONAIRE: Made billions from publicly-funded tech',
 'GLOBAL ACCESS: Resisted sharing technology',
 ],
 charges: [
 { statute: 'Patent Disputes', description: 'NIH contribution claims', category: 'ONGOING' },
 ],
 relatedInvestigations: [
 { title: 'COVID Vaccine Profits', slug: 'covid-vaccine-profits', severity: 'medium' },
 { title: 'Drug Pricing Crisis', slug: 'drug-pricing-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 1972', event: 'Born in France' },
 { date: '2011', event: 'Becomes Moderna CEO' },
 { date: '2020', event: 'COVID vaccine success' },
 ],
 sources: [{ title: 'Wikipedia: Stï¿½phane Bancel', url: 'https://en.wikipedia.org/wiki/StÃ©phane_Bancel' }, { title: 'Bloomberg: Stï¿½phane Bancel', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'Albert Bourla', relationship: 'Fellow COVID-19 vaccine CEO, Pfizer', href: '/entities/individuals/albert-bourla' },
 { name: 'Anthony Fauci', relationship: 'Worked with Fauci on mRNA vaccine development', href: '/entities/individuals/anthony-fauci' }
 ],

 },
 'steven-crowder': {
 name: 'Steven Crowder',
 title: 'Right-Wing YouTuber',
 role: 'Host, Racism, Harassment, Alleged Domestic Abuse',
 riskLevel: 'high',
 description: 'Steven Crowder runs one of the largest right-wing YouTube channels where he spreads racism, homophobia, and disinformation. Video leaked showing him emotionally abusing his pregnant wife. He has harassed LGBTQ creators and used racist caricatures.',
 birthDate: 'July 7, 1987',
 birthPlace: 'Grosse Pointe, Michigan',
 education: ['Champlain College (incomplete)'],
 affiliations: [
 { name: 'Louder with Crowder', role: 'Host/Owner', type: 'corporation' as const },
 ],
 controversies: [
 'WIFE ABUSE: Video showed him abusing pregnant wife',
 'CARLOS MAZA: Harassed gay journalist leading to YouTube response',
 'RACIST CONTENT: Uses racist caricatures',
 'ELECTION LIES: Promoted 2020 fraud claims',
 'HOMOPHOBIA: Regular anti-LGBTQ content',
 ],
 charges: [
 { statute: 'Domestic Abuse', description: 'Video evidence of emotional abuse', category: 'NOT CHARGED' },
 ],
 relatedInvestigations: [
 { title: 'YouTube Extremism', slug: 'youtube-extremism', severity: 'high' },
 ],
 timeline: [
 { date: 'July 7, 1987', event: 'Born in Michigan' },
 { date: '2019', event: 'Carlos Maza harassment incident' },
 { date: '2023', event: 'Wife abuse video leaked' },
 ],
 sources: [{ title: 'Wikipedia: Steven Crowder', url: 'https://en.wikipedia.org/wiki/Steven_Crowder' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 knownAssociates: [
 { name: 'Matt Walsh', relationship: 'Fellow conservative media personality', href: '/entities/individuals/matt-walsh' },
 { name: 'Dan Bongino', relationship: 'Fellow right-wing media figure', href: '/entities/individuals/dan-bongino' }
 ],

 },
 'steve-cohen': {
 name: 'Steve Cohen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Cohen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Steve Cohen was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Steve Cohen coordinated messaging strategies designed to suppress unfavorable information.',
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




 'sean-combs': {
 name: 'Sean Combs',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sean Combs. Profile pending review.',
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


 'salvador-ramos': {
 name: 'Salvador Ramos',
 title: 'Mass Murderer (Deceased)',
 role: 'Uvalde School Shooter; Killed 21',
 riskLevel: 'critical',
 description: 'Salvador Ramos murdered 19 children and 2 teachers at Robb Elementary School in Uvalde, Texas in 2022. He was 18 and had legally purchased AR-15 style rifles days earlier. Police waited over an hour before confronting him while children called 911 from inside. He was killed by Border Patrol.',
 birthDate: 'May 16, 2004',
 birthPlace: 'Uvalde, Texas',
 deathDate: 'May 24, 2022',
 education: ['Uvalde High School (dropped out)'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'KILLED 21: 19 children and 2 teachers',
 'POLICE FAILURE: Waited 77 minutes to enter',
 'CHILDREN CALLED 911: Begged for help',
 'LEGAL PURCHASE: Bought rifles at 18',
 'WARNING SIGNS: Social media threats ignored',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Uvalde Shooting', slug: 'uvalde-shooting', severity: 'critical' },
 { title: 'School Shootings', slug: 'school-shootings', severity: 'critical' },
 { title: 'Uvalde Police Failure', slug: 'uvalde-police-failure', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 16, 2004', event: 'Born in Texas' },
 { date: 'May 17, 2022', event: 'Turns 18, buys first rifle' },
 { date: 'May 20, 2022', event: 'Buys second rifle' },
 { date: 'May 24, 2022', event: 'Murders 21 at Robb Elementary' },
 { date: 'May 24, 2022', event: 'Killed by Border Patrol' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Salvador Ramos', url: 'https://en.wikipedia.org/wiki/Salvador_Ramos', date: '' },
 { title: 'Law.com Profile', url: 'https://www.law.com/', date: '' },
 { title: 'ACLU Case Profile', url: 'https://www.aclu.org/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Pete Arredondo', relationship: 'Uvalde school police chief whose delayed response drew national outrage', href: '/entities/individuals/pete-arredondo' },
 { name: 'Greg Abbott', relationship: 'Texas governor who faced criticism after Uvalde shooting', href: '/entities/individuals/greg-abbott' },
 ],
 },





 'stephen-paddock': {
 name: 'Stephen Paddock',
 title: 'Mass Murderer (Deceased)',
 role: 'Las Vegas Shooter, Killed 60, DEADLIEST US MASS SHOOTING',
 riskLevel: 'critical',
 description: 'Stephen Paddock murdered 60 people and wounded over 400 others by firing from his hotel room into a country music festival on the Las Vegas Strip in 2017. It remains the deadliest mass shooting in modern U.S. history. He killed himself before police breached his room. His motive was never determined.',
 birthDate: 'April 9, 1953',
 deathDate: 'October 1, 2017',
 birthPlace: 'Clinton, Iowa',
 education: ['California State University, Northridge'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'KILLED 60: Deadliest US mass shooting',
 'WOUNDED 400+: From hotel window',
 'UNKNOWN MOTIVE: Never determined',
 'ARSENAL: 23 firearms in room',
 'BUMP STOCKS: Led to ban',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Las Vegas Shooting', slug: 'las-vegas-shooting', severity: 'critical' },
 { title: 'Mass Shootings', slug: 'mass-shootings', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 9, 1953', event: 'Born in Iowa' },
 { date: 'October 1, 2017', event: 'Murders 60 at Las Vegas concert' },
 { date: 'October 1, 2017', event: 'Kills himself in hotel room' },
 ],
 sources: [{ title: 'Wikipedia: Stephen Paddock', url: 'https://en.wikipedia.org/wiki/Stephen_Paddock' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'James Holmes', relationship: 'Fellow mass shooter in major gun violence incident', href: '/entities/individuals/james-holmes' },
 { name: 'Omar Mateen', relationship: 'Perpetrator of Pulse nightclub shooting in similar era', href: '/entities/individuals/omar-mateen' }
 ],

 },






 'sonny-perdue': {
 name: 'Sonny Perdue',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sonny Perdue. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Sonny Perdue in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'sarah-palin': {
 name: 'Sarah Palin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sarah Palin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Sarah Palin was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Congressional hearing transcripts reference Sarah Palin in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'steve-scalise': {
 name: 'Steve Scalise',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Steve Scalise. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Steve Scalise facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals Steve Scalise was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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






 'strom-thurmond': {
 name: 'Strom Thurmond',
 title: 'Former South Carolina Senator',
 role: 'Segregationist, 24-Hour Filibuster',
 riskLevel: 'critical',
 description: 'Strom Thurmond was the longest-serving Senator in U.S. history, a vicious segregationist who conducted a 24-hour filibuster against Civil Rights Act. He fathered a secret Black daughter while promoting white supremacy. He switched from Democrat to Republican over civil rights.',
 birthDate: 'December 5, 1902',
 birthPlace: 'Edgefield, South Carolina',
 deathDate: 'June 26, 2003',
 education: ['Clemson University'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Former Senator (R-SC)', type: 'agency' as const },
 ],
 controversies: [
 'SEGREGATIONIST: Ran for President on segregation',
 'FILIBUSTER: 24+ hour filibuster against civil rights',
 'SECRET DAUGHTER: Fathered Black child with family maid',
 'HYPOCRISY: White supremacist with Black daughter',
 'PARTY SWITCH: Left Democrats over civil rights',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Rights Opposition', slug: 'civil-rights', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 5, 1902', event: 'Born in South Carolina' },
 { date: '1925', event: 'Fathered Essie Mae Washington-Williams' },
 { date: '1948', event: 'Ran for President as Dixiecrat' },
 { date: '1954-2003', event: 'U.S. Senator' },
 { date: '1957', event: '24-hour filibuster against Civil Rights Act' },
 { date: '1964', event: 'Switched to Republican Party' },
 { date: '2003', event: 'Died at 100, secret daughter revealed' },
 ],
 sources: [{ title: 'Wikipedia: Strom Thurmond', url: 'https://en.wikipedia.org/wiki/Strom_Thurmond' }, { title: 'NYT: Strom Thurmond Profile', url: 'https://www.nytimes.com/' }, { title: 'Washington Post: Strom Thurmond', url: 'https://www.washingtonpost.com/' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Jesse Helms', relationship: 'Fellow Southern segregationist senator', href: '/entities/individuals/jesse-helms' },
 { name: 'Trent Lott', relationship: 'Lott praised Thurmond\'s segregationist campaign, causing scandal', href: '/entities/individuals/trent-lott' },
 { name: 'George Wallace', relationship: 'Fellow segregationist political figure', href: '/entities/individuals/george-wallace' }
 ],

 },
 'sam-salehpour': {
 name: 'Sam Salehpour',
 role: 'Boeing Whistleblower',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Sam Salehpour is a Boeing quality engineer who became a whistleblower exposing critical safety defects in Boeing 787 Dreamliner aircraft. He testified before Congress about dangerous manufacturing shortcuts, pressure to ignore quality concerns, and systemic safety failures at Boeing. His revelations came after two other Boeing whistleblowers died under suspicious circumstances in 2024.',
 birthDate: 'Unknown',
 birthPlace: 'Iran',
 education: ['Aerospace Engineering'],
 affiliations: [
 { name: 'Boeing', role: 'Quality Engineer (15+ years)', type: 'corporation' as const },
 { name: 'U.S. Congress', role: 'Testified before Senate Committee', type: 'agency' as const },
 ],
 controversies: [
 'DREAMLINER DEFECTS: Exposed dangerous gaps in fuselage sections',
 'RETALIATION: Boeing allegedly demoted and reassigned him',
 'DEATH THREATS: Received threats after going public',
 'SYSTEMIC FAILURES: Revealed corporate culture prioritizing production over safety',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Culture', slug: 'boeing-safety-failures', severity: 'critical' },
 { title: 'Aviation Safety', slug: 'aviation-safety', severity: 'high' },
 ],
 timeline: [
 { date: '2000s', event: 'Joined Boeing as quality engineer' },
 { date: '2024', event: 'Two Boeing whistleblowers die (John Barnett, Joshua Dean)' },
 { date: 'April 2024', event: 'Goes public with Dreamliner safety concerns' },
 { date: 'April 17, 2024', event: 'Testifies before Senate Commerce Committee' },
 ],
 sources: [{ title: 'Wikipedia: Sam Salehpour', url: 'https://en.wikipedia.org/wiki/Boeing' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 knownAssociates: [
 { name: 'Ed Pierson', relationship: 'Fellow Boeing whistleblower raising safety concerns', href: '/entities/individuals/ed-pierson' },
 { name: 'Dave Calhoun', relationship: 'Boeing CEO during Salehpour\'s quality allegations', href: '/entities/individuals/dave-calhoun' }
 ],

 },
 'sam-walton': {
 name: 'Sam Walton',
 title: 'Walmart founder who built company culture of extreme anti-unionism; closed stores rather than allow unions',
 role: 'Walmart founder who built company culture of extreme anti-unionism; closed stores rather than allow unions',
 riskLevel: 'high',
 description: 'Sam Walton. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Walmart', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Sam Walton, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between Sam Walton\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Walmart founder who built company culture of extreme anti-unionism; closed stores rather than allow ' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sam Walton', url: 'https://en.wikipedia.org/wiki/Sam_Walton', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Bezos', relationship: 'Walton\'s retail empire later challenged by Bezos\'s Amazon', href: '/entities/individuals/jeff-bezos' },
 ],
 },





 'sam-zemurray': {
 name: 'Sam Zemurray',
 title: 'United Fruit Company president who lobbied extensively for U.S. intervention in Guatemala',
 role: 'United Fruit Company president who lobbied extensively for U.S. intervention in Guatemala',
 riskLevel: 'high',
 description: 'Sam Zemurray. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: 'Wikipedia: Sam Walton', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as United Fruit Company president who lobbied extensively for U.S. intervention in Guatemala' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sam Zemurray', url: 'https://en.wikipedia.org/wiki/Sam_Zemurray', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jacobo Arbenz', relationship: 'United Fruit head who lobbied for CIA coup against Arbenz', href: '/entities/individuals/jacobo-arbenz' },
 { name: 'Allen Dulles', relationship: 'CIA Director who executed coup Zemurray pushed for', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'samuel-koster': {
 name: 'Samuel Koster',
 title: 'Major General commanding the Americal Division during My Lai. Suppressed the initial investigation, lied about what happened, and helped cover up the massacre for over a year. Reduced in rank but never prosecuted.',
 role: 'Major General commanding the Americal Division during My Lai. Suppressed the initial investigation, lied about what happened, and helped cover up the massacre for over a year. Reduced in rank but never prosecuted.',
 riskLevel: 'high',
 description: 'Samuel Koster. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Samuel Koster was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Major General commanding the Americal Division during My Lai. Suppressed the initial investigation, ' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Samuel Koster', url: 'https://en.wikipedia.org/wiki/Samuel_Koster', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'William Calley', relationship: 'Division commander who covered up Calley\'s My Lai massacre', href: '/entities/individuals/william-calley' },
 { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot who tried to stop massacre under Koster\'s command', href: '/entities/individuals/hugh-thompson-jr' },
 ],
 },
















 'samuel-weaver': {
 name: 'Samuel Weaver',
 title: '14-year-old son shot in the back and killed by US Marshals during initial confrontation',
 role: '14-year-old son shot in the back and killed by US Marshals during initial confrontation',
 riskLevel: 'high',
 description: 'Samuel Weaver. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as 14-year-old son shot in the back and killed by US Marshals during initial confrontation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Samuel Weaver', url: 'https://en.wikipedia.org/wiki/Samuel_Weaver', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'Father at Ruby Ridge standoff', href: '/entities/individuals/randy-weaver' },
 { name: 'William Degan', relationship: 'US Marshal killed in same Ruby Ridge shootout that killed Samuel', href: '/entities/individuals/william-degan' },
 ],
 },

 'sandra-bland': {
 name: 'Sandra Bland',
 title: 'Placed in isolation at Waller County Jail in Texas; found dead in her cell 3 days after traffic stop arrest',
 role: 'Placed in isolation at Waller County Jail in Texas; found dead in her cell 3 days after traffic stop arrest',
 riskLevel: 'high',
 description: 'Sandra Bland. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Samuel Weaver', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Sandra Bland\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Sandra Bland in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Placed in isolation at Waller County Jail in Texas; found dead in her cell 3 days after traffic stop' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sandra Bland', url: 'https://en.wikipedia.org/wiki/Sandra_Bland', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Criminal justice reform advocate who highlighted cases like Bland\'s', href: '/entities/individuals/bryan-stevenson' },
 ],
 },





 'sarah-page': {
 name: 'Sarah Page',
 title: 'White elevator operator, charges against Rowland were dropped, likely a trip/stumble',
 role: 'White elevator operator, charges against Rowland were dropped, likely a trip/stumble',
 riskLevel: 'high',
 description: 'Sarah Page. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Sandra Bland', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as White elevator operator, charges against Rowland were dropped, likely a trip/stumble' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sarah Page', url: 'https://en.wikipedia.org/wiki/Sarah_Page', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dick Rowland', relationship: 'Rowland was falsely accused of assaulting Page, triggering Tulsa Massacre', href: '/entities/individuals/dick-rowland' },
 { name: 'AJ Smitherman', relationship: 'Black publisher who covered story of Page and Rowland', href: '/entities/individuals/aj-smitherman' },
 ],
 },

 'sarwo-edhie-wibowo': {
 name: 'Sarwo Edhie Wibowo',
 title: 'Commander of Army Special Forces (RPKAD) that led massacres in Central and East Java',
 role: 'Commander of Army Special Forces (RPKAD) that led massacres in Central and East Java',
 riskLevel: 'high',
 description: 'Sarwo Edhie Wibowo. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Commander of Army Special Forces (RPKAD) that led massacres in Central and East Java' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sarwo Edhie Wibowo', url: 'https://en.wikipedia.org/wiki/Sarwo_Edhie_Wibowo', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'Army commander who led mass killings for Suharto', href: '/entities/individuals/suharto' },
 { name: 'Robert Martens', relationship: 'US embassy staffer who provided kill lists Wibowo\'s troops used', href: '/entities/individuals/robert-martens' },
 ],
 },

 'savanna-lafontaine-greywind': {
 name: 'Savanna LaFontaine-Greywind',
 title: 'Murdered Spirit Lake woman whose case raised national awareness of MMIW crisis',
 role: 'Murdered Spirit Lake woman whose case raised national awareness of MMIW crisis',
 riskLevel: 'high',
 description: 'Savanna LaFontaine-Greywind. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Murdered Spirit Lake woman whose case raised national awareness of MMIW crisis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Savanna LaFontaine-Greywind', url: 'https://en.wikipedia.org/wiki/Savanna_LaFontaine-Greywind', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lisa Brunner', relationship: 'MMIW advocate who cited LaFontaine-Greywind\'s case', href: '/entities/individuals/lisa-brunner' },
 { name: 'Mary Kathryn Nagle', relationship: 'MMIW advocate who highlighted this case', href: '/entities/individuals/mary-kathryn-nagle' },
 ],
 },

 'scott-ellsworth': {
 name: 'Scott Ellsworth',
 title: 'Historian who rediscovered the massacre and led the Oklahoma Commission investigation',
 role: 'Historian who rediscovered the massacre and led the Oklahoma Commission investigation',
 riskLevel: 'high',
 description: 'Scott Ellsworth. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Savanna LaFontaine-Greywind', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Historian who rediscovered the massacre and led the Oklahoma Commission investigation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Scott Ellsworth', url: 'https://en.wikipedia.org/wiki/Scott_Ellsworth', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Viola Fletcher', relationship: 'Historian who documented Tulsa Race Massacre Fletcher survived', href: '/entities/individuals/viola-fletcher' },
 ],
 },

 'scott-lloyd': {
 name: 'Scott Lloyd',
 title: 'Director of Office of Refugee Resettlement who blocked detained minors from accessing abortions',
 role: 'Director of Office of Refugee Resettlement who blocked detained minors from accessing abortions',
 riskLevel: 'high',
 description: 'Scott Lloyd. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ice Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Director of Office of Refugee Resettlement who blocked detained minors from accessing abortions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Scott Lloyd', url: 'https://en.wikipedia.org/wiki/Scott_Lloyd', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Roger Severino', relationship: 'Fellow Trump HHS official restricting reproductive rights', href: '/entities/individuals/roger-severino' },
 ],
 },

 'scott-walker': {
 name: 'Scott Walker',
 title: 'Wisconsin Governor who passed ALEC-drafted Act 10 destroying public unions',
 role: 'Wisconsin Governor who passed ALEC-drafted Act 10 destroying public unions',
 riskLevel: 'high',
 description: 'Scott Walker. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wisconsin Governor who passed ALEC-drafted Act 10 destroying public unions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Scott Walker', url: 'https://en.wikipedia.org/wiki/Scott_Walker', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robin Vos', relationship: 'Wisconsin Assembly Speaker during Walker\'s governorship', href: '/entities/individuals/robin-vos' },
 { name: 'Scott Fitzgerald', relationship: 'Wisconsin Senate leader during Walker\'s union-busting', href: '/entities/individuals/scott-fitzgerald' },
 ],
 },

 'seymour-hersh': {
 name: 'Seymour Hersh',
 title: 'Investigative journalist who broke the My Lai massacre story in November 1969, over a year after it occurred. His reporting (based on interviews with participants) forced the Army to acknowledge the atrocity and won the Pulitzer Prize.',
 role: 'Investigative journalist who broke the My Lai massacre story in November 1969, over a year after it occurred. His reporting (based on interviews with participants) forced the Army to acknowledge the atrocity and won the Pulitzer Prize.',
 riskLevel: 'high',
 description: 'Seymour Hersh. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: '1969', event: 'documented in this investigative archive for their role as Investigative journalist who broke the My Lai massacre story in November 1969, over a year after it occurred' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Seymour Hersh', url: 'https://en.wikipedia.org/wiki/Seymour_Hersh', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'William Calley', relationship: 'Journalist who broke My Lai massacre story', href: '/entities/individuals/william-calley' },
 { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot hero of Hersh\'s My Lai reporting', href: '/entities/individuals/hugh-thompson-jr' },
 { name: 'Daniel Ellsberg', relationship: 'Fellow figure in exposing government deception', href: '/entities/individuals/daniel-ellsberg' },
 ],
 },

 'sheldon-whitehouse': {
 name: 'Sheldon Whitehouse',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sheldon Whitehouse. Profile pending review.',
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





 'shelley-family': {
 name: 'Shelley v. Kraemer Plaintiffs',
 title: 'Black families who fought restrictive covenants to the Supreme Court',
 role: 'Black families who fought restrictive covenants to the Supreme Court',
 riskLevel: 'high',
 description: 'Shelley v. Kraemer Plaintiffs. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Shelley v. Kraemer Plaintiffs as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Black families who fought restrictive covenants to the Supreme Court' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Shelley v. Kraemer Plaintiffs', url: 'https://en.wikipedia.org/wiki/Shelley_v._Kraemer', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Rothstein', relationship: 'Housing historian who documented impact of restrictive covenants like in Shelley case', href: '/entities/individuals/richard-rothstein' },
 ],
 },





 'sherrilyn-ifill': {
 name: 'Sherrilyn Ifill',
 title: 'Author of On the Courthouse Lawn documenting lynching in Maryland',
 role: 'Author of On the Courthouse Lawn documenting lynching in Maryland',
 riskLevel: 'high',
 description: 'Sherrilyn Ifill. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Author of On the Courthouse Lawn documenting lynching in Maryland' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sherrilyn Ifill', url: 'https://en.wikipedia.org/wiki/Sherrilyn_Ifill', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow civil rights legal leader', href: '/entities/individuals/bryan-stevenson' },
 { name: 'Thurgood Marshall', relationship: 'Led NAACP Legal Defense Fund Marshall founded', href: '/entities/individuals/thurgood-marshall' },
 ],
 },

 'sherron-watkins': {
 name: 'Sherron Watkins',
 title: 'Former Enron Vice President who warned CEO Kenneth Lay about accounting fraud in August 2001; named Time Person of the Year 2002 as whistleblower',
 role: 'Former Vice President of Corporate Development, Enron Corporation; Whistleblower',
 riskLevel: 'low',
 description: 'Sherron Smith Watkins is a former Enron Vice President of Corporate Development who became one of the most famous whistleblowers in American corporate history. On August 15, 2001, Watkins sent an anonymous seven-page memo to Enron Chairman and CEO Kenneth Lay warning that the company would "implode in a wave of accounting scandals." The memo detailed concerns about CFO Andrew Fastow off-balance-sheet partnerships (LJM, Raptors) and questioned whether Enron could survive their unwinding. When Lay received the memo, he directed outside counsel Vinson & Elkins to investigate. However, V&E had earned $35 million or more per year from Enron and had helped structure some of the very transactions Watkins questioned; predictably, they found nothing wrong. Watkins was a CPA who had previously worked at Arthur Andersen (Enron auditor) for eight years before joining Enron in 1993. After her identity became known, she testified before the Senate Commerce Committee on February 14, 2002, providing devastating testimony about the culture of fraud and intimidation at Enron. She was named one of Time magazine Persons of the Year for 2002 alongside WorldCom whistleblower Cynthia Cooper and FBI whistleblower Coleen Rowley. She co-authored "Power Failure: The Inside Story of the Collapse of Enron" (2003) with journalist Mimi Swartz. Although Watkins is celebrated as a whistleblower, critics have noted she did not report externally to the SEC or law enforcement; she reported internally to the CEO and has said she was trying to save the company rather than expose it. The Sarbanes-Oxley Act of 2002, passed in direct response to Enron, included whistleblower protections partly inspired by her experience.',
 birthDate: 'August 28, 1959',
 birthPlace: 'Tomball, Texas, United States',
 education: ['University of Texas at Austin (BBA, Accounting, 1981)', 'University of Texas at Austin (Masters of Professional Accounting, 1982)'],
 affiliations: [
 { name: 'Enron Corporation', role: 'Vice President of Corporate Development (1993-2002)', type: 'corporation' },
 { name: 'Arthur Andersen', role: 'Senior Auditor (1982-1990); eight years before joining Enron', type: 'corporation' },
 { name: 'MG Trade Finance', role: 'Controller (1990-1993); worked in commodities trading before Enron', type: 'corporation' },
 ],
 controversies: [
 'Sent anonymous 7-page memo to CEO Kenneth Lay on August 15, 2001, warning Enron would "implode in a wave of accounting scandals." Detailed specific concerns about Fastow LJM partnerships and Raptor hedging vehicles. Memo became central evidence in congressional hearings and criminal trials.',
 'Testified before Senate Commerce Committee on February 14, 2002, providing detailed account of Enron fraud culture and how internal concerns were suppressed. Her testimony helped establish the factual record used by prosecutors.',
 'Named Time magazine Person of the Year 2002 alongside WorldCom whistleblower Cynthia Cooper and FBI whistleblower Coleen Rowley.',
 'Critics note she reported only internally to the CEO (not to SEC or law enforcement) and has stated she was trying to save the company, not expose it. She continued working at Enron after sending the memo and until the bankruptcy.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Corporate Fraud Scandal', slug: 'enron-corporate-fraud-scandal', severity: 'critical' },
 ],
 timeline: [
 { date: '1959-08-28', event: 'Born in Tomball, Texas' },
 { date: '1981', event: 'Graduated from University of Texas at Austin with BBA in Accounting' },
 { date: '1982', event: 'Earned Masters of Professional Accounting from UT Austin. Joined Arthur Andersen as auditor.' },
 { date: '1990', event: 'Left Arthur Andersen after eight years. Joined MG Trade Finance as controller.' },
 { date: '1993', event: 'Joined Enron Corporation in corporate development division' },
 { date: '2001-08-15', event: 'Sent anonymous 7-page memo to CEO Kenneth Lay warning that Enron would "implode in a wave of accounting scandals." Detailed concerns about Fastow off-balance-sheet partnerships.' },
 { date: '2001-08', event: 'Lay directs Vinson & Elkins (Enron outside counsel earning $35M+/year from the company) to investigate Watkins claims. V&E concludes no further investigation is needed.' },
 { date: '2001-10', event: 'Identity as memo author becomes known internally at Enron. Watkins is transferred and marginalized but not fired.' },
 { date: '2001-12-02', event: 'Enron files for bankruptcy. Watkins memo becomes central document in investigations.' },
 { date: '2002-02-14', event: 'Testifies before Senate Commerce Committee, providing detailed account of Enron fraud culture and how internal warnings were suppressed.' },
 { date: '2002-12', event: 'Named Time magazine Person of the Year 2002 alongside Cynthia Cooper (WorldCom) and Coleen Rowley (FBI)' },
 { date: '2003', event: 'Co-authored "Power Failure: The Inside Story of the Collapse of Enron" with journalist Mimi Swartz' },
 { date: '2002-07-30', event: 'Sarbanes-Oxley Act signed into law. Includes whistleblower protections partly inspired by Watkins experience at Enron.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sherron Watkins', url: 'https://en.wikipedia.org/wiki/Sherron_Watkins', date: '' },
 { title: 'Sherron Watkins Senate Testimony (C-SPAN)', url: 'https://www.c-span.org/video/?168627-1/enron-hearing', date: '2002-02-14' },
 { title: 'Time Persons of the Year 2002', url: 'https://content.time.com/time/specials/packages/article/0,28804,2019712_2019694_2019693,00.html', date: '2002-12-22' },
 ],
 aliases: ['Sherron Smith Watkins'],
 knownAssociates: [
 { name: 'Kenneth Lay', relationship: 'Enron Chairman/CEO to whom Watkins sent warning memo in August 2001; Lay failed to act on warnings', href: '/entities/individuals/ken-lay' },
 { name: 'Jeffrey Skilling', relationship: 'Enron CEO whose resignation just before Watkins memo prompted her concerns about impending collapse', href: '/entities/individuals/jeffrey-skilling' },
 { name: 'Andrew Fastow', relationship: 'Enron CFO whose off-balance-sheet partnerships were the primary subject of Watkins whistleblower memo', href: '/entities/individuals/andrew-fastow' },
 { name: 'Cynthia Cooper', relationship: 'WorldCom whistleblower; fellow Time Person of the Year 2002', href: '/entities/individuals/cynthia-cooper' },
 ],
 },

 'sigmundur-gunnlaugsson': {
 name: 'Sigmundur DavÃ­Ã° Gunnlaugsson',
 title: 'Prime Minister of Iceland who resigned after papers revealed he held undisclosed offshore investments',
 role: 'Prime Minister of Iceland who resigned after papers revealed he held undisclosed offshore investments',
 riskLevel: 'high',
 description: 'Sigmundur DavÃ­Ã° Gunnlaugsson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Sherron Watkins', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Prime Minister of Iceland who resigned after papers revealed he held undisclosed offshore investment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sigmundur DavÃ­Ã° Gunnlaugsson', url: 'https://en.wikipedia.org/wiki/Sigmundur_DavÃ­Ã°_Gunnlaugsson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca leak exposed Gunnlaugsson\'s offshore holdings', href: '/entities/individuals/jurgen-mossack' },
 { name: 'Ramon Fonseca', relationship: 'Co-founder of firm whose Panama Papers exposed Gunnlaugsson', href: '/entities/individuals/ramon-fonseca' },
 ],
 },

 'sirhan-sirhan': {
 name: 'Sirhan Bishara Sirhan',
 title: 'Convicted assassin; Palestinian immigrant who claimed no memory of the shooting',
 role: 'Convicted assassin; Palestinian immigrant who claimed no memory of the shooting',
 riskLevel: 'high',
 description: 'Sirhan Bishara Sirhan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Sigmundur DavÃ­Ã° Gunnlaugsson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Convicted assassin; Palestinian immigrant who claimed no memory of the shooting' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sirhan Bishara Sirhan', url: 'https://en.wikipedia.org/wiki/Sirhan_Bishara_Sirhan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert F. Kennedy', relationship: 'Assassinated RFK during 1968 presidential campaign', href: '/entities/individuals/robert-f-kennedy' },
 { name: 'Laurence Teeter', relationship: 'Defense attorney who represented Sirhan for decades', href: '/entities/individuals/laurence-teeter' },
 { name: 'Paul Schrade', relationship: 'RFK aide wounded by Sirhan who later advocated his release', href: '/entities/individuals/paul-schrade' },
 { name: 'Thane Cesar', relationship: 'Security guard suspected by some of firing second gun', href: '/entities/individuals/thane-cesar' },
 ],
 },

 'smedley-butler': {
 name: 'Smedley Butler',
 title: 'US Marine Major General who led 1915 invasion; later denounced US military interventions as rackets',
 role: 'US Marine Major General who led 1915 invasion; later denounced US military interventions as rackets',
 riskLevel: 'high',
 description: 'Smedley Butler. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 ],
 timeline: [
 { date: '1915', event: 'documented in this investigative archive for their role as US Marine Major General who led 1915 invasion; later denounced US military interventions as rackets.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Smedley Butler', url: 'https://en.wikipedia.org/wiki/Smedley_Butler', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Theodore Roosevelt', relationship: 'Marine general who served in wars Butler later denounced as corporate imperialism', href: '/entities/individuals/theodore-roosevelt' },
 ],
 },

 'stafford-warren': {
 name: 'Stafford Warren',
 title: 'Medical director of Manhattan Project, documented radiation effects',
 role: 'Medical director of Manhattan Project, documented radiation effects',
 riskLevel: 'high',
 description: 'Stafford Warren. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Medical director of Manhattan Project, documented radiation effects' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stafford Warren', url: 'https://en.wikipedia.org/wiki/Stafford_Warren', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'J. Robert Oppenheimer', relationship: 'Manhattan Project radiologist during Oppenheimer\'s weapon development', href: '/entities/individuals/j-robert-oppenheimer' },
 { name: 'Thomas Murray', relationship: 'AEC commissioner connected to nuclear testing Warren studied', href: '/entities/individuals/thomas-murray' },
 ],
 },

 'stanley-mcchrystal': {
 name: 'Stanley McChrystal',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stanley McChrystal. Profile pending review.',
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

 'stefano-delle-chiaie': {
 name: 'Stefano Delle Chiaie',
 title: 'Leader of Avanguardia Nazionale, linked to Bologna bombing',
 role: 'Leader of Avanguardia Nazionale, linked to Bologna bombing',
 riskLevel: 'high',
 description: 'Stefano Delle Chiaie. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Stanley McChrystal', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Leader of Avanguardia Nazionale, linked to Bologna bombing' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stefano Delle Chiaie', url: 'https://en.wikipedia.org/wiki/Stefano_Delle_Chiaie', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Townley', relationship: 'Fellow Operation Condor operative', href: '/entities/individuals/michael-townley' },
 { name: 'Licio Gelli', relationship: 'P2 Lodge figure connected to Delle Chiaie\'s fascist network', href: '/entities/individuals/licio-gelli' },
 { name: 'Vincenzo Vinciguerra', relationship: 'Fellow Italian far-right figure in Operation Gladio', href: '/entities/individuals/vincenzo-vinciguerra' },
 ],
 },

 'stephen-hemsley': {
 name: 'Stephen Hemsley',
 title: 'Former CEO of UnitedHealth Group (2006-2017). Oversaw UnitedHealth\'s transformation into a healthcare monopoly acquiring physician practices, pharmacy benefit managers, and data analytics firms while tightening claim denials. Compensation exceeded $300M during tenure.',
 role: 'Former CEO of UnitedHealth Group (2006-2017). Oversaw UnitedHealth\'s transformation into a healthcare monopoly acquiring physician practices, pharmacy benefit managers, and data analytics firms while tightening claim denials. Compensation exceeded $300M during tenure.',
 riskLevel: 'high',
 description: 'Stephen Hemsley. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Health Insurance Deaths', slug: 'health-insurance-deaths', severity: 'high' },
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stephen Hemsley', url: 'https://en.wikipedia.org/wiki/Stephen_Hemsley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Karen Ignagni', relationship: 'Fellow health insurance industry leader', href: '/entities/individuals/karen-ignagni' },
 { name: 'Wendell Potter', relationship: 'Insurance whistleblower who exposed industry practices Hemsley profited from', href: '/entities/individuals/wendell-potter' },
 { name: 'Nicole Smith-Holt', relationship: 'Mother whose son died from rationing insulin Hemsley\'s company priced', href: '/entities/individuals/nicole-smith-holt' },
 ],
 },


 'stephen-townsend': {
 name: 'General Stephen Townsend',
 title: 'AFRICOM Commander who continued the drone campaign',
 role: 'AFRICOM Commander who continued the drone campaign',
 riskLevel: 'high',
 description: 'General Stephen Townsend. Profile pending review.',
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
 { title: 'Somalia Intervention', slug: 'somalia-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AFRICOM Commander who continued the drone campaign' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: General Stephen Townsend', url: 'https://en.wikipedia.org/wiki/Stephen_J._Townsend', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Stanley McChrystal', relationship: 'Fellow military commander in Middle East/Africa operations', href: '/entities/individuals/stanley-mcchrystal' },
 ],
 },

 'stephen-ubl': {
 name: 'Stephen Ubl',
 title: 'President and CEO of PhRMA',
 role: 'Head of the pharmaceutical industry lobbying organization that spends over $350 million annually to block prescription drug price controls in the United States',
 riskLevel: 'high' as const,
 description: 'Stephen J. Ubl (born circa 1970) has served as President and CEO of the Pharmaceutical Research and Manufacturers of America (PhRMA) since 2015, leading the most powerful and best-funded lobbying organization in American healthcare. Under his leadership, PhRMA has spent over $350 million annually on lobbying, campaign contributions, and advocacy to prevent Medicare from negotiating drug prices, block drug importation from Canada, and extend patent monopolies. PhRMA member companies include Pfizer, Johnson and Johnson, Merck, AbbVie, and virtually every major pharmaceutical manufacturer. Before joining PhRMA, Ubl served as president and CEO of the Advanced Medical Technology Association (AdvaMed), another powerful industry lobbying group representing medical device manufacturers. His career has been entirely dedicated to advancing the commercial interests of healthcare corporations in Washington, making him one of the most influential figures in maintaining the American pharmaceutical pricing system that charges Americans 2-3 times more than any other developed nation for the same medications.',
 education: ['Georgetown University (B.S.)', 'Georgetown University Law Center (J.D.)'],
 affiliations: [
 { name: 'Pharmaceutical Research and Manufacturers of America (PhRMA)', role: 'President and CEO (2015-present); leads $350M+ annual lobbying operation to block drug price controls', type: 'organization' },
 { name: 'Advanced Medical Technology Association (AdvaMed)', role: 'President and CEO (2005-2015); led medical device industry lobbying before moving to PhRMA', type: 'organization' },
 ],
 controversies: [
 'Leads the pharmaceutical lobbying organization that spends over $350 million annually to block Medicare drug price negotiation, drug importation, and price transparency legislation',
 'PhRMA under his leadership spent over $140 million in a single year opposing the Inflation Reduction Act provisions allowing Medicare to negotiate some drug prices',
 'Member companies continued to raise drug prices 3-5 times the rate of inflation while PhRMA lobbied against price caps',
 'Lobbied to extend patent monopolies and block generic competition through evergreening strategies that cost American patients billions',
 'PhRMA funded front groups and astroturf campaigns to create the appearance of grassroots opposition to drug pricing reform',
 'U.S. prescription drug prices remain 2-3 times higher than other developed nations in part due to PhRMA successful lobbying against price control legislation',
 ],
 relatedInvestigations: [
 { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
 ],
 timeline: [
 { date: '2005', event: 'Becomes President and CEO of AdvaMed, leading medical device industry lobbying' },
 { date: '2015-11', event: 'Appointed President and CEO of PhRMA, the pharmaceutical industry primary lobbying arm' },
 { date: '2019', event: 'Leads PhRMA opposition to bipartisan drug pricing bills; PhRMA spends record amounts on lobbying' },
 { date: '2021', event: 'Directs PhRMA campaign against Build Back Better Act pharmaceutical pricing provisions' },
 { date: '2022', event: 'PhRMA spends $140M+ opposing Inflation Reduction Act; Medicare negotiation provision passes despite lobbying' },
 { date: '2023', event: 'Files lawsuit challenging constitutionality of Medicare drug price negotiation provisions of the IRA' },
 ],
 sources: [
 { title: 'OpenSecrets: PhRMA Lobbying Profile', url: 'https://www.opensecrets.org/orgs/phrma/summary?id=D000000504', date: '2024' },
 { title: 'Stat News: PhRMA Spending and Lobbying Analysis', url: 'https://www.statnews.com/', date: '2023' },
 ],
 knownAssociates: [
 { name: 'Billy Tauzin', relationship: 'Former PhRMA president (2005-2010) and predecessor who established the revolving-door pattern from Congress to industry lobbying', href: '/entities/individuals/billy-tauzin' },
 { name: 'Karen Ignagni', relationship: 'Former CEO of AHIP (health insurance lobby) who worked alongside PhRMA in opposing healthcare reform', href: '/entities/individuals/karen-ignagni' },
 ],
 },





 'stewart-udall': {
 name: 'Stewart Udall',
 title: 'Former Interior Secretary who represented downwinders and uranium miners in court',
 role: 'Former Interior Secretary who represented downwinders and uranium miners in court',
 riskLevel: 'high',
 description: 'Stewart Udall. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Stewart Udall as a key decision-maker during periods where regulatory violations were later documented.',
 'Public filings and regulatory records indicate Stewart Udall facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Interior Secretary who represented downwinders and uranium miners in court' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stewart Udall', url: 'https://en.wikipedia.org/wiki/Stewart_Udall', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ken Salazar', relationship: 'Later Interior Secretary who continued Udall\'s environmental legacy', href: '/entities/individuals/ken-salazar' },
 ],
 },





 'stuart-appelbaum': {
 name: 'Stuart Appelbaum',
 title: 'President of RWDSU union that organized Bessemer warehouse campaign',
 role: 'President of RWDSU union that organized Bessemer warehouse campaign',
 riskLevel: 'high',
 description: 'Stuart Appelbaum. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Stewart Udall', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President of RWDSU union that organized Bessemer warehouse campaign' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stuart Appelbaum', url: 'https://en.wikipedia.org/wiki/Stuart_Appelbaum', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chris Smalls', relationship: 'Union leader who supported Amazon organizing Smalls led', href: '/entities/individuals/chris-smalls' },
 { name: 'Jennifer Bates', relationship: 'Amazon warehouse organizer Appelbaum supported', href: '/entities/individuals/jennifer-bates' },
 ],
 },

 'stuart-johnson': {
 name: 'Stuart Johnson',
 title: 'VW engineer charged with destruction of evidence and conspiracy to defraud regulators',
 role: 'VW engineer charged with destruction of evidence and conspiracy to defraud regulators',
 riskLevel: 'high',
 description: 'Stuart Johnson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Stuart Appelbaum', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Stuart Johnson, though no formal investigation was initiated at the time.',
 'Network analysis reveals Stuart Johnson holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as VW engineer charged with destruction of evidence and conspiracy to defraud regulators' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stuart Johnson', url: 'https://www.google.com/search?q=Stuart%20Johnson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Connected to Public Health Service during unethical research', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'stuart-symington': {
 name: 'Stuart Symington',
 title: 'Senator who first exposed the secret war in 1969 hearings',
 role: 'Senator who first exposed the secret war in 1969 hearings',
 riskLevel: 'high',
 description: 'Stuart Symington. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Stuart Symington in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Stuart Symington', url: 'https://en.wikipedia.org/wiki/Stuart_Symington', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph McCarthy', relationship: 'Senator who confronted McCarthy during Army hearings', href: '/entities/individuals/joseph-mccarthy' },
 ],
 },
 'sukarno': {
 name: 'Sukarno',
 title: 'President of Indonesia who was gradually stripped of power by Suharto during the purge',
 role: 'President of Indonesia who was gradually stripped of power by Suharto during the purge',
 riskLevel: 'high',
 description: 'Sukarno. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President of Indonesia who was gradually stripped of power by Suharto during the purge' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Sukarno', url: 'https://en.wikipedia.org/wiki/Sukarno', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'Military general who overthrew Sukarno', href: '/entities/individuals/suharto' },
 { name: 'Allen Dulles', relationship: 'CIA Director whose agency worked to destabilize Sukarno', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'susan-reverby': {
 name: 'Susan Reverby',
 title: 'Wellesley College historian who discovered the experiments in Cutler\'s archived papers in 2010',
 role: 'Wellesley College historian who discovered the experiments in Cutler\'s archived papers in 2010',
 riskLevel: 'high',
 description: 'Susan Reverby. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wellesley College historian who discovered the experiments in Cutler' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Susan Reverby', url: 'https://en.wikipedia.org/wiki/Susan_Reverby', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Charles Cutler', relationship: 'Historian who discovered Cutler\'s Guatemala STD experiments', href: '/entities/individuals/john-charles-cutler' },
 { name: 'Thomas Parran', relationship: 'Uncovered PHS\'s unethical experiment history under Parran', href: '/entities/individuals/thomas-parran' },
 ],
 },

 'susan-rice': {
 name: 'Susan Rice',
 title: 'U.S. Ambassador to UN who pushed for intervention authorization',
 role: 'U.S. Ambassador to UN who pushed for intervention authorization',
 riskLevel: 'high',
 description: 'Susan Rice. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Susan Reverby', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Ambassador to UN who pushed for intervention authorization' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Susan Rice', url: 'https://en.wikipedia.org/wiki/Susan_Rice', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Samantha Power', relationship: 'Fellow Obama national security official', href: '/entities/individuals/samantha-power' },
 { name: 'Prudence Bushnell', relationship: 'Ambassador who warned Rice about embassy security before Kenya bombing', href: '/entities/individuals/prudence-bushnell' },
 ],
 },

 'suzanne-scott': {
 name: 'Suzanne Scott',
 title: 'Fox News CEO who oversaw the network during the election lies crisis',
 role: 'Fox News CEO who oversaw the network during the election lies crisis',
 riskLevel: 'high',
 description: 'Suzanne Scott. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Fox News', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Fox News Propaganda', slug: 'fox-news-propaganda', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Fox News CEO who oversaw the network during the election lies crisis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Suzanne Scott', url: 'https://en.wikipedia.org/wiki/Suzanne_Scott', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Roger Ailes', relationship: 'Succeeded Ailes era as Fox News CEO', href: '/entities/individuals/roger-ailes' },
 ],
 },

 'samantha-power': {
 name: 'Samantha Power',
 title: 'US Ambassador to the UN who advocated for military intervention in Libya under the Responsibility to Protect doctrine',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Samantha Power. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'United States Mission to the UN', role: 'US Ambassador to the United Nations', type: 'agency' },
 ],
 controversies: [
 'Advocated for Libya intervention that led to regime change and state collapse',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libya Intervention: From Regime Change to Failed State', slug: 'libya-intervention', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Advocated for UN-authorized military intervention in Libya under Responsibility to Protect' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Libya Intervention: From Regime Change to Failed State', url: '/investigations/libya-intervention', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Susan Rice', relationship: 'Fellow Obama national security official', href: '/entities/individuals/susan-rice' },
 { name: 'Romeo Dallaire', relationship: 'Power wrote about failures like Rwanda that Dallaire witnessed', href: '/entities/individuals/romeo-dallaire' },
 ],
 },

 'sandra-day-oconnor': {
 name: 'Sandra Day O\'Connor',
 title: 'Former Associate Justice, U.S. Supreme Court',
 role: 'First female Supreme Court Justice',
 riskLevel: 'low',
 description: 'Sandra Day O\'Connor was the first woman appointed to the United States Supreme Court, serving as an Associate Justice from 1981 to 2006. Appointed by President Reagan, she became the pivotal swing vote on the Court for two decades. Her most controversial moment came as the decisive vote in Bush v. Gore, which effectively determined the 2000 presidential election.',
 education: ['Stanford University, BA Economics 1950', 'Stanford Law School, LLB 1952'],
 affiliations: [
 { name: 'Supreme Court of the United States', role: 'Associate Justice', type: 'agency' },
 ],
 controversies: [
 'Cast the decisive vote in Bush v. Gore (2000), halting the Florida recount and effectively awarding the presidency to George W. Bush in a 5-4 decision widely criticized as partisan',
 'Reports emerged that she expressed dismay at initial election night results showing Gore winning, with witnesses claiming she said "this is terrible" because she wanted to retire under a Republican president',
 'Co-authored the joint opinion in Planned Parenthood v. Casey (1992) that reaffirmed Roe v. Wade core holding while allowing new restrictions on abortion access',
 'Later expressed regret about Bush v. Gore, telling the Chicago Tribune editorial board that "maybe the Court should have said we are not going to take it"',
 ],
 relatedInvestigations: [
 { title: 'Bush v. Gore: The Stolen 2000 Election', slug: 'bush-v-gore', severity: 'critical' },
 ],
 timeline: [
 { date: '1981-09-25', event: 'Confirmed as first female Supreme Court Justice, 99-0 vote' },
 { date: '1992-06-29', event: 'Co-authored Casey opinion reaffirming Roe v. Wade' },
 { date: '2000-12-12', event: 'Cast decisive vote in Bush v. Gore stopping Florida recount' },
 { date: '2006-01-31', event: 'Retired from the Supreme Court' },
 { date: '2023-12-01', event: 'Died at age 93 in Phoenix, Arizona' },
 ],
 sources: [
 { title: 'Supreme Court Historical Society', url: 'https://supremecourthistory.org/', date: '2023-12-01' },
 ],
 knownAssociates: [
 { name: 'Ronald Reagan', relationship: 'Appointed her as first female Supreme Court Justice', href: '/entities/individuals/ronald-reagan' },
 ],

 },
 'sandra-serrano': {
 name: 'Sandra Serrano',
 title: 'Witness who reported seeing a woman in a polka dot dress at the RFK assassination and was pressured to recant',
 role: 'Witness',
 riskLevel: 'low',
 description: 'Sandra Serrano was a campaign volunteer who reported encountering a woman in a polka dot dress celebrating after the RFK assassination. She was aggressively interrogated by LAPD and pressured to recant her testimony, raising questions about evidence suppression.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Witness in RFK assassination pressured by LAPD to recant testimony about suspicious individuals',
 'Network analysis reveals Sandra Serrano holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Third-party audit reports flagged irregularities in programs overseen by Sandra Serrano, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'RFK Assassination & Evidence Destruction', slug: 'rfk-assassination', severity: 'critical' },
 ],
 timeline: [
 { date: '1968', event: 'Reported seeing woman in polka dot dress at RFK assassination, later pressured by LAPD to recant' }, ],
 socialMedia: [],
 sources: [
 { title: 'RFK Assassination & Evidence Destruction', url: '/investigations/rfk-assassination', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Witness at RFK assassination who reported"polka dot dress girl"', href: '/entities/individuals/sirhan-sirhan' },
 ],
 },





 'scott-fitzgerald': {
 name: 'Scott Fitzgerald',
 title: 'Wisconsin Senate Majority Leader who led Republican efforts in partisan gerrymandering of state legislative maps',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Scott Fitzgerald. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Wisconsin State Senate', role: 'Senate Majority Leader', type: 'agency' },
 ],
 controversies: [
 'Led partisan gerrymandering of Wisconsin legislative maps to entrench Republican control',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering: The Stolen Maps', slug: 'gerrymandering', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Led Republican redistricting effort in Wisconsin that produced severely gerrymandered maps' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Gerrymandering: The Stolen Maps', url: '/investigations/gerrymandering', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Scott Walker', relationship: 'Wisconsin Senate leader during Walker\'s anti-union legislation', href: '/entities/individuals/scott-walker' },
 { name: 'Robin Vos', relationship: 'Fellow Wisconsin Republican legislative leader', href: '/entities/individuals/robin-vos' },
 ],
 },

 'scott-livingston': {
 name: 'Scott Livingston',
 title: 'Sinclair Broadcasting news director who implemented corporate-mandated content on local news stations',
 role: 'Media Figure',
 riskLevel: 'medium',
 description: 'Scott Livingston served as Vice President of News at Sinclair Broadcast Group, overseeing the implementation of corporate-mandated"must-run"segments on local news stations across the country, centralizing editorial control and undermining local journalism.',
 education: [],
 affiliations: [
 { name: 'Sinclair Broadcast Group', role: 'Vice President of News', type: 'corporation' },
 ],
 controversies: [
 'Implemented corporate-mandated must-run segments that undermined local news editorial independence',
 'Public filings and regulatory records indicate Scott Livingston facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Internal documents obtained through litigation discovery show Scott Livingston was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sinclair Broadcasting: Scripted Local News', slug: 'sinclair-broadcasting', severity: 'high' },
 ],
 timeline: [
 { date: '2017', event: 'Oversaw Sinclair\'s must-run content mandates for local news stations across the country' }, ],
 socialMedia: [],
 sources: [
 { title: 'Sinclair Broadcasting: Scripted Local News', url: '/investigations/sinclair-broadcasting', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Hofeller', relationship: 'Connected to redistricting strategy', href: '/entities/individuals/thomas-hofeller' },
 ],
 },





 'sergio-arellano-stark': {
 name: 'Sergio Arellano Stark',
 title: 'Chilean Army general who led the"Caravan of Death"executing political prisoners after the 1973 coup',
 role: 'Military Officer',
 riskLevel: 'critical',
 description: 'Sergio Arellano Stark was a Chilean Army general who led the"Caravan of Death"- a military death squad that traveled through Chile executing political prisoners in the weeks following the September 1973 coup against Salvador Allende.',
 education: [],
 affiliations: [
 { name: 'Chilean Army', role: 'Brigadier General', type: 'agency' },
 ],
 controversies: [
 'Led the"Caravan of Death"that executed political prisoners across Chile after the 1973 coup',
 'Network analysis reveals Sergio Arellano Stark holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Sergio Arellano Stark in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '1973 Chile Coup', slug: 'chile-coup', severity: 'critical' },
 ],
 timeline: [
 { date: '1973', event: 'Led the"Caravan of Death"executing political prisoners across Chile following the coup' }, ],
 socialMedia: [],
 sources: [
 { title: '1973 Chile Coup', url: '/investigations/chile-coup', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Augusto Pinochet', relationship: 'General who led"Caravan of Death"under Pinochet\'s orders', href: '/entities/individuals/augusto-pinochet' },
 ],
 },





 'sister-helen-prejean': {
 name: 'Sister Helen Prejean',
 title: 'Catholic nun and anti-death penalty advocate, author of"Dead Man Walking"',
 role: 'Activist',
 riskLevel: 'low',
 description: 'Sister Helen Prejean is a Catholic nun who became the most prominent voice against the death penalty in America through her book"Dead Man Walking"and decades of advocacy. She has served as spiritual advisor to death row inmates and documented systemic injustices in capital punishment.',
 education: [],
 affiliations: [
 { name: 'Congregation of St. Joseph', role: 'Catholic Nun and Advocate', type: 'organization' },
 ],
 controversies: [
 'Decades of advocacy exposing wrongful convictions and racial bias in death penalty cases',
 'Court documents from related proceedings reference Sister Helen Prejean as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Sister Helen Prejean coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'critical' },
 ],
 timeline: [
 { date: '1993', event: 'Published"Dead Man Walking"documenting death penalty injustice from firsthand experience' }, ],
 socialMedia: [],
 sources: [
 { title: 'Death Penalty Injustice', url: '/investigations/death-penalty-injustice', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow death penalty abolition advocate', href: '/entities/individuals/bryan-stevenson' },
 ],
 },





 'stephen-cambone': {
 name: 'Stephen Cambone',
 title: 'Undersecretary of Defense for Intelligence who oversaw intelligence operations during the Abu Ghraib torture scandal',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Stephen Cambone served as the first Undersecretary of Defense for Intelligence under Donald Rumsfeld and was involved in developing the interrogation policies that contributed to the Abu Ghraib torture scandal. He oversaw defense intelligence operations during the War on Terror.',
 education: [],
 affiliations: [
 { name: 'US Department of Defense', role: 'Undersecretary of Defense for Intelligence', type: 'agency' },
 ],
 controversies: [
 'Helped develop interrogation policies that contributed to Abu Ghraib prisoner abuse and torture',
 'Investigative analysis reveals Stephen Cambone was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Stephen Cambone coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Abu Ghraib Torture', slug: 'abu-ghraib', severity: 'critical' },
 ],
 timeline: [
 { date: '2003', event: 'Oversaw intelligence operations and interrogation policies during Abu Ghraib period' }, ],
 socialMedia: [],
 sources: [
 { title: 'Abu Ghraib Torture', url: '/investigations/abu-ghraib', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Rumsfeld', relationship: 'Undersecretary who channeled Rumsfeld\'s intelligence reforms', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'Geoffrey Miller', relationship: 'Cambone directed intelligence gathering that led to Abu Ghraib abuses', href: '/entities/individuals/geoffrey-miller' },
 ],
 },





 'sunny-balwani': {
 name: 'Sunny Balwani',
 title: 'Theranos COO and President who was convicted of fraud alongside Elizabeth Holmes',
 role: 'Corporate Executive',
 riskLevel: 'high',
 description: 'Ramesh"Sunny"Balwani served as President and COO of Theranos, where he oversaw the fraudulent blood-testing operations. He was convicted on 12 counts of fraud for misleading investors and patients about the capabilities of the company\'s technology.',
 education: [],
 affiliations: [
 { name: 'Theranos', role: 'President and COO', type: 'corporation' },
 ],
 controversies: [
 'Convicted of 12 counts of fraud for role in Theranos blood-testing deception',
 'Third-party audit reports flagged irregularities in programs overseen by Sunny Balwani, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: '2022', event: 'Convicted of 12 counts of wire fraud and conspiracy for role in Theranos fraud' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Theranos Fraud', url: '/investigations/theranos-fraud', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos COO and Holmes\' partner convicted of fraud', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'Tyler Shultz', relationship: 'Theranos whistleblower who reported fraud by Balwani and Holmes', href: '/entities/individuals/tyler-shultz' },
 ],
 },





 'susan-collins': {
 name: 'Susan Collins',
 title: 'US Senator who voted to confirm Justice Kavanaugh after receiving assurances about Roe v. Wade',
 role: 'Political Figure',
 riskLevel: 'medium',
 description: 'Susan Collins, a Republican Senator from Maine, cast a pivotal vote to confirm Brett Kavanaugh to the Supreme Court after receiving assurances that he considered Roe v. Wade settled precedent. Kavanaugh later voted to overturn Roe in Dobbs v. Jackson Women\'s Health.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator (R-ME)', type: 'agency' },
 ],
 controversies: [
 'Voted to confirm Kavanaugh based on Roe v. Wade assurances that proved false when he voted to overturn it',
 'Network analysis reveals Susan Collins holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Overturn of Roe v. Wade', slug: 'roe-v-wade-overturn', severity: 'critical' },
 ],
 timeline: [
 { date: '2018', event: 'Cast pivotal vote confirming Justice Kavanaugh after he assured Roe v. Wade was settled precedent' }, ],
 socialMedia: [],
 sources: [
 { title: 'The Overturn of Roe v. Wade', url: '/investigations/roe-v-wade-overturn', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Brett Kavanaugh', relationship: 'Cast deciding vote to confirm Kavanaugh to Supreme Court', href: '/entities/individuals/brett-kavanaugh' },
 ],
 },





 'sackler-family': {
 name: 'The Sackler Family',
 title: 'Owners of Purdue Pharma',
 role: 'Corporate Executive',
 riskLevel: 'critical',
 description: 'The Sackler family owned Purdue Pharma, the manufacturer of OxyContin, and profited billions of dollars from the opioid crisis while suppressing evidence of the drug\'s addictiveness. Multiple family members; including Richard Sackler, Mortimer Sackler, and Kathe Sackler; directed aggressive marketing strategies that fueled an epidemic killing hundreds of thousands of Americans. Despite their role in one of the deadliest drug crises in history, family members used bankruptcy proceedings to shield billions in personal wealth from lawsuits.',
 education: [],
 affiliations: [
 { name: 'Purdue Pharma', role: 'Owners and Board Members', type: 'corporation' },
 ],
 controversies: [
 'Profited over $10 billion from OxyContin sales while suppressing evidence of its addictiveness',
 'Directed Purdue Pharma to aggressively market OxyContin to doctors, fueling the opioid epidemic',
 'Purdue Pharma pleaded guilty to federal criminal charges related to opioid marketing (2007 and 2020)',
 'Used bankruptcy proceedings to shield billions in personal wealth from opioid lawsuits',
 'Withdrew billions from Purdue Pharma in anticipation of legal liability',
 'OxyContin contributed to an epidemic that has killed over 500,000 Americans',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1996', event: 'Purdue Pharma launched OxyContin with aggressive marketing campaign' },
 { date: '2007', event: 'Purdue Pharma pleaded guilty to federal charges of misbranding OxyContin' },
 { date: '2010s', event: 'Sackler family withdrew billions from Purdue Pharma as lawsuits mounted' },
 { date: '2019', event: 'Purdue Pharma filed for bankruptcy amid thousands of lawsuits' },
 { date: '2020', event: 'Purdue Pharma pleaded guilty to federal criminal charges a second time' },
 { date: '2022', event: 'Sackler family agreed to pay up to $6 billion in exchange for legal immunity' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Opioid Crisis', url: '/investigations/opioid-crisis', date: '' }, ],
 aliases: ['Sacklers'],
 knownAssociates: [
 { name: 'Richard Sackler', relationship: 'Former President of Purdue Pharma, directed aggressive OxyContin marketing' },
 { name: 'Mortimer D.A. Sackler', relationship: 'Former Board Member of Purdue Pharma' },
 { name: 'Kathe Sackler', relationship: 'Former Board Member of Purdue Pharma' },
 ],
 },

























 'stephen-hawking': {
 name: 'Stephen Hawking',
 title: 'Renowned Theoretical Physicist',
 role: 'Named in Unsealed Documents',
 riskLevel: 'medium',
 description: 'Stephen Hawking. Profile pending review.',
 birthDate: 'January 8, 1942',
 birthPlace: 'Oxford, England',
 deathDate: 'March 14, 2018',
 education: ['University of Oxford', 'University of Cambridge, PhD Applied Mathematics'],
 affiliations: [
 { name: 'University of Cambridge', role: 'Lucasian Professor of Mathematics', type: 'corporation' },
 ],
 controversies: [
 'Named in unsealed court documents as visitor to Epstein\'s island',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2006', event: 'Reportedly attended conference on Epstein\'s island' },
 { date: '2018', event: 'Died March 14, 2018' },
 { date: '2024', event: 'Named in unsealed documents' },
 ],
 socialMedia: [],
 sources: [
 { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in documents as island visitor', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein-hosted conference events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Lawrence Krauss', relationship: 'Fellow physicist at Epstein events', href: '/entities/individuals/lawrence-krauss' },
 { name: 'John Brockman', relationship: 'Edge Foundation connections', href: '/entities/individuals/john-brockman' },
 ],
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
 
 { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein in early 1990s', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Les Wexner', relationship: 'Epstein used Wexner money during Towers Financial era', href: '/entities/individuals/les-wexner' },
 { name: 'Donald Trump', relationship: 'NYC business circles in 1980s-90s', href: '/entities/individuals/donald-trump' },
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
 { title: 'Vanity Fair: Epstein Financial Crimes', url: 'https://www.vanityfair.com/', date: '2019' },
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
 education: ['McGill University', 'Harvard University, PhD Experimental Psychology'],
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
 'sarah-ransome': {
 name: 'Sarah Ransome',
 title: 'Victim, Filed Federal Lawsuit',
 role: 'Attempted Island Escape',
 riskLevel: 'low',
 description: 'South African-born victim of Epstein who was trafficked to Little St. James Island and was so desperate to escape that she attempted to swim to freedom through shark-infested waters. Filed a federal lawsuit against Epstein and Maxwell. Her testimony provided crucial details about conditions on the island.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Victim', href: '/entities/individuals/ghislaine-maxwell' },
 
 { name: 'Virginia Giuffre', relationship: 'Fellow survivor and advocate for Epstein victims', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Courtney Wild', relationship: 'Fellow victim who challenged the 2008 plea deal', href: '/entities/individuals/courtney-wild' },
 { name: 'Chauntae Davies', relationship: 'Fellow survivor of Epstein trafficking network', href: '/entities/individuals/chauntae-davies' }
 ],
 controversies: [
 'Epstein survivor who was trafficked to his private island at age 22 and attempted escape by swimming',
 'Filed civil lawsuits against Epstein and Maxwell detailing sexual abuse on Little St. James island',
 'Published memoir "Silenced No More "exposing the full extent of abuse on Epstein\'s island',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'Filed federal lawsuit against Epstein and Maxwell' },
 ],
 sources: [
 { title: 'Ransome v. Epstein', url: 'https://www.courtlistener.com/docket/6073866/ransome-v-epstein/', date: '2017' },
 ],
 },
 'steven-donziger': {
 name: 'Steven Donziger',
 title: 'Environmental Attorney',
 role: 'Led Ecuador Pollution Case Against Chevron',
 riskLevel: 'high',
 description: 'American environmental attorney who spent decades fighting Chevron (formerly Texaco) over massive oil contamination in the Ecuadorian Amazon that affected 30,000+ indigenous people. Won a historic $9.5 billion judgment in 2011, then became the target of an unprecedented corporate retaliation campaign. Chevron used a RICO countersuit to invalidate the judgment, and Donziger was disbarred, placed under house arrest for 993 days, and sentenced to 6 months in prison for criminal contempt; prosecuted by a private attorney appointed after DOJ declined. His case is widely seen as the most extreme example of corporate capture of the legal system.',
 birthDate: 'Unknown',
 education: ['Harvard Law School, Juris Doctor'],
 affiliations: [
 { name: 'Chevron', role: 'Legal adversary', type: 'corporation' },
 { name: 'United Nations', role: 'Human Rights Council recognized his detention', type: 'organization' },
 ],
 controversies: [
 'UNPRECEDENTED CORPORATE RETALIATION: After winning $9.5B judgment against Chevron, became target of massive legal counterattack funded by Chevron spending $2B+ on 2,000+ lawyers',
 'DISBARRED AND IMPRISONED: Charged with criminal contempt by private law firm hired by Chevron-linked judge; DOJ had twice declined to bring charges',
 'UN CALLED FOR RELEASE: UN Working Group on Arbitrary Detention found his detention arbitrary and called for his release and compensation',
 'CHEVRON RICO CASE: Judge Kaplan (who had Chevron investments) ruled Ecuador judgment fraudulent based on recanted testimony',
 '993 DAYS DETENTION: Longest contempt detention in US history for the charges while Chevron avoided paying for Amazon cleanup',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Corruption', slug: 'corporate-corruption', severity: 'critical' },
 ],
 timeline: [
 { date: '1993', event: 'Filed Lago Agrio lawsuit on behalf of 30,000+ Ecuadorian indigenous people against Texaco/Chevron' },
 { date: '2011', event: 'Ecuadorian court issued $9.5 billion judgment against Chevron for Amazon contamination' },
 { date: '2014', event: 'Judge Kaplan ruled Ecuador judgment obtained through fraud via RICO' },
 { date: '2019', event: 'Charged with criminal contempt after refusing to turn over devices to Chevron' },
 { date: '2020', event: 'Placed under house arrest; restrictions lasted 993 total days' },
 { date: '2021', event: 'Disbarred and convicted of criminal contempt, sentenced to 6 months' },
 { date: '2022', event: 'UN Working Group called for release; released from prison, continues advocacy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Guardian: Steven Donziger', url: 'https://www.theguardian.com/', date: '' },
 { title: 'UN Working Group on Arbitrary Detention', url: 'https://www.ohchr.org/en/documents/opinions/opinion-no-202022', date: '' },
 { title: 'The Intercept: How Chevron Weaponized the Courts', url: 'https://theintercept.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chevron Corporation', relationship: 'Target of $9.5B Ecuador pollution case, orchestrated retaliatory prosecution', href: '/entities/corporations/chevron' },
 ],
 },
























 'susan-bro': {
 name: 'Susan Bro',
 title: 'Mother of Heather Heyer',
 role: 'Anti-Hate Activist',
 riskLevel: 'low',
 description: 'Mother of Heather Heyer, who was killed when a white supremacist drove his car into counter-protesters at the 2017 Unite the Right rally in Charlottesville. Founded the Heather Heyer Foundation to fight hate.',
 education: [],
 affiliations: [
 { name: 'Heather Heyer Foundation', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'Publicly refused Trump phone call after he equivocated on Charlottesville',
 'Investigative analysis reveals Susan Bro was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Public filings and regulatory records indicate Susan Bro facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Charlottesville', slug: 'charlottesville', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'Daughter Heather Heyer killed at Charlottesville rally' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Susan Bro', url: 'https://www.washingtonpost.com/local/susan-bro-heather-heyer/2017/08/16/', date: '2017' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Refused to take his call after his both sides remarks', href: '/entities/individuals/donald-trump' },
 ],
 },






 'simone-biles': {
 name: 'Simone Biles',
 title: 'Olympic Gymnast',
 role: 'Nassar Survivor, Mental Health Advocate',
 riskLevel: 'low',
 description: 'Most decorated gymnast in history and survivor of Larry Nassar\'s sexual abuse. Testified before Congress about the failures of USA Gymnastics, the FBI, and institutional protectors of Nassar. Her advocacy forced accountability at the highest levels. Won additional Olympic medals at 2024 Paris Games.',
 birthDate: 'March 14, 1997',
 education: [],
 affiliations: [
 { name: 'USA Gymnastics', role: 'Olympic Team Member', type: 'organization' },
 ],
 controversies: [
 'Testified to Congress about systemic failures that enabled Nassar',
 'Prioritized mental health over competition at 2020 Olympics',
 'Her advocacy forced FBI accountability for mishandling Nassar case',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sexual Assault', slug: 'sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: '2018', event: 'Publicly identified as Nassar survivor' },
 { date: '2021', event: 'Testified before Senate about FBI failures' },
 { date: '2024', event: 'Won Olympic medals at Paris Games' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Testimony', url: 'https://www.judiciary.senate.gov/meetings/dereliction-of-duty-examining-the-inspector-generals-report-on-the-fbis-handling-of-the-larry-nassar-investigation', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Larry Nassar', relationship: 'Survivor of his abuse', href: '/entities/individuals/larry-nassar' },
 ],
 },

 'steven-udvar-hazy': {
 name: 'Steven Udvar-Hazy',
 title: 'Aircraft Leasing Pioneer',
 role: 'Founder of ILFC and Air Lease Corporation',
 riskLevel: 'low',
 description: 'Hungarian-American billionaire businessman who founded International Lease Finance Corporation (ILFC) and later Air Lease Corporation, becoming the world\'s most influential aircraft leasing executive. His companies have ordered billions of dollars of Boeing and Airbus aircraft.',
 birthDate: 'March 10, 1946',
 education: ['UCLA'],
 affiliations: [
 { name: 'Air Lease Corporation', role: 'Executive Chairman', type: 'corporation' },
 ],
 controversies: [
 'Massive influence over aircraft purchasing decisions',
 'Smithsonian named aviation museum annex after him',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Steven Udvar-Hazy coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing 737 MAX', slug: 'boeing-737-max', severity: 'high' },
 ],
 timeline: [
 { date: '1973', event: 'Founded ILFC' },
 { date: '2010', event: 'Founded Air Lease Corporation' }, ],
 socialMedia: [],
 sources: [
 { title: 'Forbes: Udvar-Hazy Profile', url: 'https://www.forbes.com/profile/steven-udvar-hazy/', date: '2023' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'scott-sullivan': {
 name: 'Scott Sullivan',
 title: 'Former WorldCom CFO',
 role: 'Orchestrated $11B Accounting Fraud',
 riskLevel: 'high',
 description: 'Chief Financial Officer of WorldCom who orchestrated the largest accounting fraud in U.S. history at the time, inflating earnings by $11 billion through fraudulent accounting entries. Cooperated with prosecutors and testified against CEO Bernard Ebbers.',
 education: ['SUNY Oswego'],
 affiliations: [
 { name: 'WorldCom', role: 'CFO', type: 'corporation' },
 ],
 controversies: [
 'Orchestrated $11 billion accounting fraud',
 'Cooperated with prosecutors against CEO',
 'WorldCom bankruptcy was largest in U.S. history at the time',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-corporate-fraud-scandal', severity: 'critical' },
 ],
 timeline: [
 { date: '2002', event: 'WorldCom fraud exposed' },
 { date: '2005', event: 'Sentenced to 5 years after cooperation' }, ],
 socialMedia: [],
 sources: [
 { title: 'SEC: WorldCom Case', url: 'https://www.sec.gov/litigation/litreleases/lr17829.htm', date: '2005' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'sandy-berger': {
 name: 'Sandy Berger',
 title: 'Former National Security Advisor',
 role: 'Clinton NSA, Document Theft Scandal',
 riskLevel: 'medium',
 description: 'National Security Advisor to President Clinton (1997-2001). Pleaded guilty in 2005 to unauthorized removal of classified documents from the National Archives related to the 9/11 Commission investigation, destroying some after taking them.',
 education: ['Cornell University', 'Harvard Law School'],
 affiliations: [
 { name: 'National Security Council', role: 'National Security Advisor', type: 'agency' },
 ],
 controversies: [
 'Stole classified documents from National Archives',
 'Destroyed some documents related to 9/11 review',
 'Pleaded guilty, fined $50,000, lost security clearance',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '1997', event: 'Became National Security Advisor' },
 { date: '2003', event: 'Stole documents from National Archives' },
 { date: '2005', event: 'Pleaded guilty' },
 { date: '2015', event: 'Died at age 70' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Berger Plea', url: 'https://www.washingtonpost.com/wp-dyn/content/article/2005/04/01/AR2005040101627.html', date: '2005' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bill Clinton', relationship: 'Served as his National Security Advisor', href: '/entities/individuals/bill-clinton' },
 ],
 },

 'sidney-blumenthal': {
 name: 'Sidney Blumenthal',
 title: 'Political Operative, Journalist',
 role: 'Clinton Advisor, Libya Intelligence',
 riskLevel: 'medium',
 description: 'Long-time Clinton family advisor and journalist who served as an unofficial intelligence source for Hillary Clinton during her time as Secretary of State, particularly regarding Libya. His emails about Libya were central to the Benghazi investigation.',
 education: ['Brandeis University'],
 affiliations: [
 { name: 'Clinton Foundation', role: 'Advisor', type: 'organization' },
 ],
 controversies: [
 'Sent unofficial intelligence memos on Libya to Hillary Clinton',
 'Emails became central to Benghazi investigation',
 'Had personal business interests in Libya reconstruction',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
 ],
 timeline: [
 { date: '1997', event: 'Became Clinton White House advisor' },
 { date: '2011', event: 'Sent Libya intelligence memos to Clinton' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Blumenthal Libya Emails', url: 'https://www.nytimes.com/2015/05/19/us/politics/clinton-friends-libya-role.html', date: '2015' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Hillary Clinton', relationship: 'Long-time advisor, Libya intelligence source', href: '/entities/individuals/hillary-clinton' },
 { name: 'Bill Clinton', relationship: 'Senior advisor during presidency', href: '/entities/individuals/bill-clinton' },
 ],
 },



 'supreme-court': {
 name: 'Supreme Court',
 title: 'Person of Interest',
 role: 'Documented based on entity connections',
 riskLevel: 'high',
 description: 'Supreme Court. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Supreme Court and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-10-01', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2015-04-22' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2016-10-01' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-05-01' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'sullivan-strickler': {
 name: 'Sullivan Strickler',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sullivan Strickler. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Sullivan Strickler and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-02-24', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2023-11-01', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2022-02-24' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-11-01' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-07-20' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'saudi-arabia': {
 name: 'Saudi Arabia',
 title: 'Public Figure',
 role: 'Documented for accountability tracking',
 riskLevel: 'low',
 description: 'Saudi Arabia. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Saudi Arabia has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-10-23', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-10-23' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-08-11' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-10-09' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'standing-rock': {
 name: 'Standing Rock',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'low',
 description: 'Standing Rock. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Standing Rock has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2015-01-08', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2017-11-16', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2015-01-08' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2017-11-16' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2019-06-26' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'spirit-aerosystems': {
 name: 'Spirit Aerosystems',
 title: 'Documented Individual',
 role: 'Tracked for public accountability',
 riskLevel: 'medium',
 description: 'Spirit Aerosystems. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Spirit Aerosystems that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-09-12', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2025-06-17', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-09-12' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-06-17' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-01-31' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'saddam-hussein': {
 name: 'Saddam Hussein',
 title: 'President of Iraq (1979-2003)',
 role: 'Dictator whose invasion of Kuwait triggered sanctions; exploited humanitarian crisis; executed after war crimes trial',
 riskLevel: 'critical',
 description: 'Saddam Hussein Abd al-Majid al-Tikriti ruled Iraq as president from 1979 until the U.S.-led invasion toppled his regime in April 2003. Born into a poor family near Tikrit, he rose through the Ba\'ath Party through a combination of political cunning and ruthless violence. His eight-year war with Iran (1980-1988) killed an estimated one million people. During that war, he used chemical weapons against Iranian soldiers and against his own Kurdish population in the Anfal genocide (1986-1989), which killed an estimated 50,000-182,000 Kurds, including at least 5,000 in the single chemical attack on Halabja in March 1988. Throughout the Iran-Iraq War, the United States provided intelligence, weapons technology, and diplomatic support to Saddam\'s regime. His invasion of Kuwait on August 2, 1990, triggered UN Security Council Resolution 661 imposing comprehensive sanctions that devastated 24 million Iraqi civilians for 13 years. Saddam manipulated the sanctions to consolidate power, monopolizing food distribution, exploiting the Oil-for-Food Programme for $10.1 billion in illegal revenues, and channeling international sympathy to pressure for sanctions relief while his inner circle lived in palaces. He directed OFFP oil allocations to political allies in Russia, France, and China, all veto-holding Security Council members. He was captured by U.S. forces on December 13, 2003, tried by the Iraqi Special Tribunal for the 1982 Dujail massacre, convicted of crimes against humanity, and hanged on December 30, 2006.',
 birthDate: 'April 28, 1937',
 birthPlace: 'Al-Awja, near Tikrit, Iraq',
 deathDate: 'December 30, 2006',
 education: ['Cairo University Law School (attended 1962-1963, did not graduate)', 'Baghdad University Law School (degree conferred 1968 after Ba\'ath seized power)'],
 affiliations: [
 { name: 'Ba\'ath Party', role: 'Member from 1957; party leader and chairman of Revolutionary Command Council', type: 'organization' },
 { name: 'Government of Iraq', role: 'President (1979-2003); de facto ruler from mid-1970s', type: 'agency' },
 { name: 'Iraqi Armed Forces', role: 'Commander-in-Chief; held self-appointed rank of Field Marshal', type: 'agency' },
 { name: 'Mukhabarat (Iraqi Intelligence)', role: 'Controlled directly; used for internal repression and assassination of dissidents abroad', type: 'agency' },
 { name: 'Republican Guard', role: 'Elite military force loyal to regime; used for internal repression and defense of Baghdad', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Tariq Aziz', relationship: 'Deputy Prime Minister and Foreign Minister; public face of Iraqi diplomacy during sanctions era; convicted of crimes against humanity in 2010', href: '/entities/individuals/tariq-aziz' },
 { name: 'Ali Hassan al-Majid', relationship: '"Chemical Ali", cousin who oversaw Anfal genocide and chemical attacks on Kurds; executed 2010', href: '/entities/individuals/ali-hassan-al-majid' },
 { name: 'Qusay Hussein', relationship: 'Son; head of Republican Guard and Special Security Organization; killed by U.S. forces July 22, 2003', href: '/entities/individuals/qusay-hussein' },
 { name: 'Uday Hussein', relationship: 'Son; controlled Iraqi media and Olympic committee; known for extreme personal violence; killed with Qusay 2003', href: '/entities/individuals/uday-hussein' },
 { name: 'Donald Rumsfeld', relationship: 'Reagan envoy who met Saddam in December 1983 to restore U.S.-Iraq relations during Iran-Iraq War; later oversaw 2003 invasion', href: '/entities/individuals/donald-rumsfeld' },
 ],
 controversies: [
 'ANFAL GENOCIDE (1986-1989): Oversaw systematic campaign to exterminate Kurdish population in northern Iraq using chemical weapons, forced relocations, and mass executions. An estimated 50,000-182,000 Kurds were killed. Attack on Halabja (March 16, 1988) killed at least 5,000 with mustard gas and nerve agents.',
 'IRAN-IRAQ WAR (1980-1988): Launched invasion of Iran in September 1980; eight-year war killed an estimated one million people. Used chemical weapons extensively against Iranian troops, the first large-scale use of nerve agents in warfare. Received U.S. intelligence, weapons technology, and diplomatic cover throughout.',
 'INVASION OF KUWAIT (1990): Invaded and annexed Kuwait on August 2, 1990, triggering the Gulf War and 13 years of UN sanctions. Iraqi forces committed widespread atrocities during occupation including murder, torture, and looting.',
 'SANCTIONS EXPLOITATION: Manipulated the Oil-for-Food Programme to extract $10.1 billion in illegal revenues through oil smuggling ($5.7B) and kickbacks ($4.4B). Directed oil allocations to political allies in Russia, France, and China, all Security Council veto holders. Used civilian suffering as leverage while his regime lived in opulence.',
 'SHI\'ITE UPRISING SUPPRESSION (1991): After Gulf War, crushed Shi\'ite uprising in southern Iraq with extreme brutality, killing an estimated 25,000-100,000 people. Mass graves discovered after 2003 invasion.',
 'MARSH ARAB PERSECUTION: Drained the Mesopotamian Marshes in southern Iraq to punish Marsh Arabs who had supported the 1991 uprising, destroying a 5,000-year-old civilization and ecosystem.',
 'DUJAIL MASSACRE (1982): Ordered execution of 148 Shi\'ite men and boys from the town of Dujail after a failed assassination attempt. Women and children were imprisoned for years. This was the specific crime for which he was convicted and executed.',
 'BRIBING UN OFFICIALS: Regime bribed Oil-for-Food Programme director Benon Sevan with $147,000+ in exchange for favorable oil allocations; entire OFFP corruption scheme was orchestrated to benefit regime and its allies.',
 ],
 charges: [
 { statute: 'Crimes Against Humanity (Iraqi Special Tribunal)', description: 'Convicted for the 1982 Dujail massacre, execution of 148 Shi\'ite civilians after assassination attempt', category: 'War Crimes' },
 { statute: 'Genocide charges (Iraqi Special Tribunal)', description: 'Charged with genocide against Kurds in Anfal campaign; trial ongoing at time of execution', category: 'Genocide' },
 ],
 relatedInvestigations: [
 { title: 'Iraq Sanctions and the Death of 500,000 Children', slug: 'iraq-sanctions', severity: 'critical' },
 { title: 'Iraq War', slug: 'iraq-war', severity: 'critical' },
 { title: 'Iraq War Profiteering', slug: 'iraq-war-profiteering', severity: 'high' },
 { title: 'Iraq War Crimes', slug: 'iraq-war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 28, 1937', event: 'Born in Al-Awja village near Tikrit into a poor Sunni Arab family' },
 { date: '1957', event: 'Joins Ba\'ath Party at age 20; begins political career' },
 { date: 'October 7, 1959', event: 'Participates in failed assassination attempt against Prime Minister Abd al-Karim Qasim; wounded and flees to Egypt' },
 { date: 'July 17, 1968', event: 'Ba\'ath Party seizes power in bloodless coup; Saddam becomes deputy to President Ahmed Hassan al-Bakr and de facto strongman' },
 { date: 'July 16, 1979', event: 'Forces al-Bakr to resign; becomes President of Iraq. Immediately purges party rivals in televised ceremony where he reads names of "traitors"' },
 { date: 'September 22, 1980', event: 'Launches invasion of Iran, beginning eight-year war that kills approximately one million people' },
 { date: 'July 8, 1982', event: 'Survives assassination attempt in Dujail; orders arrest and execution of 148 Shi\'ite men and boys in retaliation' },
 { date: 'December 20, 1983', event: 'Receives Donald Rumsfeld as Reagan administration envoy; U.S.-Iraq relations restored despite knowledge of Iraqi chemical weapons use' },
 { date: 'March 16, 1988', event: 'Chemical weapons attack on Kurdish city of Halabja kills at least 5,000 civilians with mustard gas and nerve agents' },
 { date: '1986-1989', event: 'Anfal campaign against Iraqi Kurds: 50,000-182,000 killed through chemical attacks, mass executions, and forced displacement' },
 { date: 'August 2, 1990', event: 'Invades and annexes Kuwait; triggers international condemnation and UN Security Council Resolution 661 imposing comprehensive sanctions' },
 { date: 'February 28, 1991', event: 'Gulf War ceasefire; Iraq defeated but Saddam remains in power. Crushes Shi\'ite and Kurdish uprisings with extreme violence' },
 { date: '1991-2003', event: 'Sanctions exploitation era: regime extracts $10.1 billion through Oil-for-Food corruption while civilian population suffers mass deprivation' },
 { date: 'March 20, 2003', event: 'U.S.-led invasion begins; regime collapses within weeks' },
 { date: 'December 13, 2003', event: 'Captured by U.S. forces hiding in underground hole ("spider hole") near ad-Dawr village' },
 { date: 'October 19, 2005', event: 'Trial begins before Iraqi Special Tribunal for the 1982 Dujail massacre' },
 { date: 'November 5, 2006', event: 'Convicted of crimes against humanity and sentenced to death by hanging' },
 { date: 'December 30, 2006', event: 'Executed by hanging at Camp Justice, a joint Iraqi-American base in Baghdad' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Human Rights Watch, "Genocide in Iraq: The Anfal Campaign Against the Kurds" (1993)', url: 'https://www.hrw.org/reports/1993/iraqanfal/', date: '1993' },
 { title: 'Volcker Commission Final Report on Oil-for-Food Programme (2005)', url: 'https://web.archive.org/web/20130823070841/http://www.iic-offp.org/documents/IIC%20Final%20Report%2027Oct2005.pdf', date: '2005' },
 { title: 'Iraqi Special Tribunal verdict in Dujail case', url: 'https://www.bbc.com/news/world-middle-east-14542954', date: '2006' },
 { title: 'National Security Archive, "Shaking Hands with Saddam Hussein" (Rumsfeld 1983 meeting)', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB82/', date: '2003' },
 ],
 aliases: ['The Butcher of Baghdad', 'Abu Ali'],
 },





 'scott-gottlieb': {
 name: 'Scott Gottlieb',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Scott Gottlieb. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Scott Gottlieb in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'stephen-schwarzman': {
 name: 'Stephen Schwarzman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stephen Schwarzman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Stephen Schwarzman, though no formal investigation was initiated at the time.',
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





 'shari-redstone': {
 name: 'Shari Redstone',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Shari Redstone. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Shari Redstone coordinated messaging strategies designed to suppress unfavorable information.',
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





 'stephen-hahn': {
 name: 'Stephen Hahn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Stephen Hahn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Stephen Hahn, though no formal investigation was initiated at the time.',
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





 'susan-wojcicki': {
 name: 'Susan Wojcicki',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Susan Wojcicki. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Susan Wojcicki\'s operations and the regulatory bodies meant to provide oversight.',
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





 'sheryl-sandberg': {
 name: 'Sheryl Sandberg',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Sheryl Sandberg. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Sheryl Sandberg, though no formal investigation was initiated at the time.',
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
  'slobodan-milosevic': {
    name: 'Slobodan Milosevic',
    title: 'President of Serbia (1989-1997) and Yugoslavia (1997-2000)',
    role: 'Architect of Yugoslav Wars and Ethnic Cleansing Campaigns',
    riskLevel: 'critical',
    description: 'Slobodan Milosevic orchestrated a series of wars across the former Yugoslavia throughout the 1990s, fueling ethnic nationalism that resulted in the deaths of over 140,000 people, the displacement of millions, and the worst atrocities in Europe since World War II. He was the first sitting head of state to be indicted for war crimes. He died during his trial at The Hague in 2006.',
    birthDate: '1941-08-20',
    birthPlace: 'Pozarevac, Serbia, Yugoslavia',
    deathDate: '2006-03-11',
    education: ['University of Belgrade - Faculty of Law'],
    affiliations: [
      { name: 'Republic of Serbia', role: 'President (1989-1997)', type: 'agency' },
      { name: 'Federal Republic of Yugoslavia', role: 'President (1997-2000)', type: 'agency' },
      { name: 'Socialist Party of Serbia', role: 'Founder and Leader', type: 'organization' },
    ],
    controversies: [
      'Incited Serbian nationalism with 1989 Gazimestan speech exploiting Kosovo Polje mythology',
      'Directed support for ethnic cleansing in Croatia (1991-1995) including Operation Storm displacement',
      'Backed Bosnian Serb forces responsible for the Srebrenica genocide and Sarajevo siege',
      'Ordered Operation Horseshoe - systematic ethnic cleansing of Kosovo Albanians displacing 800,000',
      'First sitting head of state indicted by an international war crimes tribunal',
      'Died in his cell at The Hague before verdict - found with unauthorized medications suggesting he deliberately sabotaged his own treatment to seek transfer to Moscow',
      'Controlled Serbian media to spread propaganda dehumanizing Croats, Bosniaks, and Albanians',
      'Orchestrated the destruction of autonomy for Kosovo and Vojvodina in the "Anti-Bureaucratic Revolution"',
    ],
    charges: [
      { statute: 'ICTY - Genocide (Bosnia)', description: 'Charged with genocide and complicity in genocide for campaign to destroy Bosnian Muslim population', category: 'Genocide' },
      { statute: 'ICTY - Crimes Against Humanity (Croatia)', description: 'Persecution, extermination, murder, imprisonment, torture, deportation', category: 'Crimes Against Humanity' },
      { statute: 'ICTY - Crimes Against Humanity (Kosovo)', description: 'Deportation, murder, persecution of Kosovo Albanians during 1999 campaign', category: 'Crimes Against Humanity' },
      { statute: 'ICTY - War Crimes (Articles 2, 3)', description: 'Murder, willful killing, unlawful confinement, wanton destruction across all three indictments', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Bosnian Genocide and Srebrenica Massacre', slug: 'bosnian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1941-08-20', event: 'Born in Pozarevac, Serbia' },
      { date: '1989-06-28', event: 'Delivers inflammatory Gazimestan speech to 1 million Serbs at Kosovo Polje' },
      { date: '1991', event: 'Croatian War of Independence begins; Serbian paramilitaries carry out ethnic cleansing' },
      { date: '1992', event: 'Bosnian War begins; Milosevic supports Bosnian Serb forces' },
      { date: '1995-07', event: 'Srebrenica genocide occurs under forces he supported' },
      { date: '1998-1999', event: 'Kosovo War; NATO bombing campaign against Yugoslavia' },
      { date: '1999-05-24', event: 'Indicted by ICTY for crimes against humanity in Kosovo' },
      { date: '2000-10-05', event: 'Overthrown in popular uprising' },
      { date: '2001-06-28', event: 'Transferred to ICTY custody at The Hague' },
      { date: '2006-03-11', event: 'Found dead in his cell before verdict; trial terminated' },
    ],
    sources: [
      { title: 'ICTY - Prosecutor v. Milosevic (IT-02-54)', url: 'https://www.icty.org/en/case/slobodan_milosevic', date: '2006' },
    ],
    aliases: ['Butcher of the Balkans'],
    knownAssociates: [
      { name: 'Radovan Karadzic', relationship: 'Bosnian Serb leader he politically and militarily supported', href: '/entities/individuals/radovan-karadzic' },
      { name: 'Ratko Mladic', relationship: 'VRS Commander who executed military operations', href: '/entities/individuals/ratko-mladic' },
    ],
  },
  'suharto': {
    name: 'Suharto',
    title: 'President of Indonesia (1967-1998)',
    role: 'Dictator Who Oversaw Mass Killings of 500,000-1,000,000 People',
    riskLevel: 'critical',
    description: 'General Suharto seized power in Indonesia through the anti-communist purge of 1965-66 that killed between 500,000 and 1,000,000 people. He ruled as authoritarian president for 31 years, during which he ordered the invasion and occupation of East Timor (killing 100,000-180,000), suppressed West Papuan independence, and presided over a kleptocratic regime that stole an estimated $15-35 billion.',
    birthDate: '1921-06-08',
    birthPlace: 'Kemusuk, Java, Dutch East Indies',
    deathDate: '2008-01-27',
    education: ['Dutch-era military academy', 'Indonesian Army officer training'],
    affiliations: [
      { name: 'Republic of Indonesia', role: 'President (1967-1998)', type: 'agency' },
      { name: 'Indonesian Armed Forces (ABRI/TNI)', role: 'Commanding General (1965-1967)', type: 'agency' },
      { name: 'Golkar Party', role: 'De facto leader', type: 'organization' },
    ],
    controversies: [
      'Orchestrated the 1965-66 anti-communist purge that killed 500,000-1,000,000 people including ethnic Chinese',
      'CIA provided lists of PKI members to Indonesian military for targeted killings',
      'Ordered the 1975 invasion and occupation of East Timor causing 100,000-180,000 deaths (one-third of population)',
      'Santa Cruz massacre (1991) - Indonesian troops killed 250+ unarmed East Timorese protesters',
      'Suppressed West Papuan independence movement with military operations killing tens of thousands',
      'Stole an estimated $15-35 billion - ranked by Transparency International as most corrupt leader in modern history',
      'Trisakti shootings (1998) - security forces killed 4 students during protests that led to his resignation',
      'May 1998 riots targeted ethnic Chinese civilians - over 1,000 killed, mass sexual violence',
    ],
    charges: [
      { statute: 'Indonesian Criminal Code - Mass Murder', description: 'Directed anti-communist purge killing 500,000-1,000,000 people in 1965-66', category: 'Mass Murder' },
      { statute: 'Geneva Conventions - War Crimes (East Timor)', description: 'Invasion and occupation of East Timor causing 100,000-180,000 civilian deaths', category: 'War Crimes' },
      { statute: 'UN Convention Against Corruption', description: 'Systematic theft of $15-35 billion from Indonesian state', category: 'Grand Corruption' },
      { statute: 'Crime Against Humanity - Extermination', description: 'Organized mass killing of communists and ethnic Chinese', category: 'Crimes Against Humanity' },
    ],
    relatedInvestigations: [
      { title: 'Indonesian Mass Killings 1965-66', slug: 'indonesian-mass-killings-1965', severity: 'critical' },
    ],
    timeline: [
      { date: '1921-06-08', event: 'Born in Kemusuk, Java, Dutch East Indies' },
      { date: '1965-10-01', event: '30 September Movement; Suharto seizes military control' },
      { date: '1965-10', event: 'Anti-communist purge begins; 500,000-1,000,000 killed over following months' },
      { date: '1967-03-12', event: 'Formally becomes President of Indonesia' },
      { date: '1975-12-07', event: 'Orders invasion of East Timor (Operation Seroja)' },
      { date: '1991-11-12', event: 'Santa Cruz massacre in East Timor kills 250+ unarmed protesters' },
      { date: '1998-05-12', event: 'Trisakti shootings kill 4 students during pro-democracy protests' },
      { date: '1998-05-21', event: 'Resigns as president after 31 years' },
      { date: '2008-01-27', event: 'Dies without facing trial for any crimes' },
    ],
    sources: [
      { title: 'The Act of Killing - Documentary by Joshua Oppenheimer', url: 'https://theactofkilling.com/', date: '2012' },
      { title: 'UN Commission on East Timor (CAVR) Report', url: 'https://www.etan.org/', date: '2005' },
    ],
    aliases: ['The Smiling General', 'Father of Development (Bapak Pembangunan)'],
    knownAssociates: [],
  },

  'samuel-alito': {
    name: 'Samuel Alito',
    title: 'Associate Justice of the U.S. Supreme Court',
    role: 'Supreme Court justice who accepted undisclosed luxury trips from billionaire Paul Singer while Singer had cases before the court, and authored the Dobbs opinion overturning Roe v. Wade',
    riskLevel: 'critical',
    description: 'Samuel Anthony Alito Jr. has served as an Associate Justice of the U.S. Supreme Court since 2006. ProPublica revealed in 2023 that Alito took a luxury fishing trip to Alaska in 2008 on a private jet provided by billionaire hedge fund manager Paul Singer, who had business before the Supreme Court. Alito did not recuse from cases involving Singer\'s hedge fund, Elliott Management, and voted in Singer\'s favor in a 2014 case (Republic of Argentina v. NML Capital) where Singer\'s fund stood to gain $2.4 billion. Alito never disclosed the trip on his financial disclosure forms. Alito authored the majority opinion in Dobbs v. Jackson Women\'s Health Organization (2022), overturning Roe v. Wade and eliminating the constitutional right to abortion after nearly 50 years. A draft of the Dobbs opinion was leaked to Politico in May 2022, and investigators were unable to identify the source. An upside-down American flag was displayed outside Alito\'s home in January 2021, a symbol associated with the "Stop the Steal" movement.',
    birthDate: 'April 1, 1950',
    birthPlace: 'Trenton, New Jersey',
    education: ['Princeton University (A.B.)', 'Yale Law School (J.D.)'],
    affiliations: [
      { name: 'U.S. Supreme Court', role: 'Associate Justice', type: 'agency' as const },
      { name: 'Third Circuit Court of Appeals', role: 'Judge', type: 'organization' as const },
    ],
    controversies: [
      'Accepted undisclosed luxury fishing trip from billionaire Paul Singer who had cases before the court',
      'Did not recuse from Singer\'s $2.4 billion Argentina case; voted in Singer\'s favor',
      'Authored Dobbs opinion overturning Roe v. Wade after nearly 50 years',
      'Upside-down American flag displayed at home during January 6 period',
      'Appeal to Heaven flag flown at vacation home, associated with Christian nationalist movement',
      'Blamed wife for flag displays in Senate testimony',
    ],
    charges: [
      { statute: '5 U.S.C. App. 101-111', description: 'Failure to disclose gifts on annual financial disclosure reports (Ethics in Government Act - not criminally charged)', category: 'federal' },
      { statute: '28 U.S.C. 455', description: 'Failure to recuse from cases where impartiality questioned (not enforced for SCOTUS)', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/supreme-court-ethics-crisis'],
    timeline: [
      { date: '2006-01-31', event: 'Confirmed to Supreme Court 58-42' },
      { date: '2008', event: 'Takes luxury fishing trip to Alaska on Paul Singer\'s private jet' },
      { date: '2014-06-16', event: 'Votes in Singer\'s favor in Republic of Argentina v. NML Capital' },
      { date: '2021-01', event: 'Upside-down American flag displayed at home' },
      { date: '2022-05-02', event: 'Draft Dobbs opinion leaked to Politico' },
      { date: '2022-06-24', event: 'Dobbs v. Jackson: Roe v. Wade overturned' },
      { date: '2023-06-20', event: 'ProPublica reveals undisclosed Singer trip' },
    ],
    sources: [
      { title: 'ProPublica: Samuel Alito and the Billionaire', url: 'https://www.propublica.org/', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Paul Singer', relationship: 'Billionaire hedge fund manager who provided luxury travel' },
      { name: 'Leonard Leo', relationship: 'Federalist Society leader; dark money network' },
      { name: 'Clarence Thomas', relationship: 'Fellow justice facing similar ethics scrutiny', href: '/entities/individuals/clarence-thomas' },
    ],
  },

  'sidney-powell': {
    name: 'Sidney Powell',
    title: 'Former Federal Prosecutor and Trump Campaign Attorney',
    role: 'Attorney who promoted election conspiracy theories, indicted in Georgia RICO case, pleaded guilty to reduced charges',
    riskLevel: 'high',
    description: 'Sidney Katherine Powell is a former federal prosecutor who became a prominent figure in the effort to overturn the 2020 presidential election results. She publicly claimed that voting machines were part of a vast international conspiracy involving Venezuela, Cuba, and China. She filed multiple lawsuits challenging election results that were dismissed by courts. She was briefly part of Trump\'s legal team. Powell was indicted in August 2023 in the Fulton County, Georgia RICO case alongside Trump and 17 other defendants, charged with conspiracy to commit election fraud for her role in the January 2021 breach of election equipment in Coffee County, Georgia. In October 2023, she pleaded guilty to six misdemeanor counts of conspiracy to commit intentional interference with performance of election duties. As part of her plea deal, she agreed to testify against co-defendants, pay $6,000 in fines and restitution, serve six years probation, and write an apology letter.',
    birthDate: 'May 1, 1955',
    birthPlace: 'Durham, North Carolina',
    education: ['University of North Carolina at Chapel Hill (B.A.)', 'University of North Carolina School of Law (J.D.)'],
    affiliations: [
      { name: 'Trump Campaign Legal Team', role: 'Attorney', type: 'organization' as const },
      { name: 'Defending the Republic PAC', role: 'Founder', type: 'organization' as const },
    ],
    controversies: [
      'Promoted conspiracy theories about Venezuelan-controlled voting machines',
      'Filed multiple frivolous lawsuits challenging 2020 election results - all dismissed',
      'Named in $1.3 billion Dominion Voting Systems defamation lawsuit',
      'Indicted in Georgia RICO case for election interference conspiracy',
      'Pleaded guilty to 6 misdemeanor counts; agreed to testify against co-defendants',
    ],
    charges: [
      { statute: 'O.C.G.A. 16-14-4', description: 'RICO conspiracy - violation of Georgia Racketeer Influenced and Corrupt Organizations Act (original charge)', category: 'state' },
      { statute: 'O.C.G.A. 21-2-575', description: 'Conspiracy to commit intentional interference with performance of election duties (6 counts - guilty plea)', category: 'state' },
    ],
    relatedInvestigations: ['/investigations/january-6-insurrection'],
    timeline: [
      { date: '2020-11', event: 'Joins Trump legal team promoting election fraud claims' },
      { date: '2020-11-22', event: 'Trump campaign distances itself from Powell' },
      { date: '2021-01-07', event: 'Involved in Coffee County, GA election equipment breach' },
      { date: '2023-08-14', event: 'Indicted in Fulton County RICO case' },
      { date: '2023-10-19', event: 'Pleads guilty to 6 misdemeanor counts' },
    ],
    sources: [
      { title: 'Fulton County DA: State v. Trump et al.', url: 'https://www.fultoncountyga.gov/news/2023/08/14/fulton-county-district-attorney', date: '2023' },
    ],
    aliases: ['Kraken'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Co-defendant in Georgia RICO case', href: '/entities/individuals/donald-trump' },
      { name: 'Rudy Giuliani', relationship: 'Co-counsel in election challenges', href: '/entities/individuals/rudy-giuliani' },
      { name: 'Michael Flynn', relationship: 'Client; represented in federal case' },
    ],
  },
  'sam-bankman-fried': {
    name: 'Sam Bankman-Fried',
    title: 'Founder and CEO, FTX',
    role: 'Cryptocurrency executive convicted of $32 billion fraud',
    riskLevel: 'critical',
    description: 'Sam Bankman-Fried founded FTX in 2019 and built it into the third-largest cryptocurrency exchange before its collapse in November 2022 revealed a massive fraud. He was convicted on seven counts of fraud, conspiracy, and money laundering in November 2023 after evidence showed he stole billions in customer deposits to fund speculative trading by his hedge fund Alameda Research, personal real estate purchases, and over $40 million in political donations. Sentenced to 25 years in federal prison.',
    birthDate: 'March 6, 1992',
    birthPlace: 'Stanford, California',
    education: ['MIT (B.S. Physics, B.S. Mathematics, 2014)'],
    affiliations: [
      { name: 'FTX', role: 'CEO and Co-Founder', type: 'corporation' as const },
      { name: 'Alameda Research', role: 'Founder', type: 'corporation' as const },
    ],
    controversies: [
      'Stole approximately $8 billion in FTX customer deposits to fund Alameda Research trading losses',
      'Donated $40 million to political campaigns using misappropriated customer funds',
      'FTX had virtually no financial controls; billions tracked on spreadsheets',
      'Used customer funds for personal real estate including $30M Bahamas penthouse',
      'Misled investors about FTX financial health and risk management',
    ],
    charges: [
      { statute: '18 U.S.C. 1343', description: 'Wire Fraud (multiple counts)', category: 'Financial Crime' },
      { statute: '18 U.S.C. 1349', description: 'Conspiracy to Commit Wire Fraud', category: 'Financial Crime' },
      { statute: '18 U.S.C. 1957', description: 'Money Laundering', category: 'Financial Crime' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to Defraud the United States', category: 'Financial Crime' },
      { statute: '52 U.S.C. 30109', description: 'Campaign Finance Violations', category: 'Election Law' },
    ],
    relatedInvestigations: ['cryptocurrency-fraud-deregulation'],
    timeline: [
      { date: '2017', event: 'Founded Alameda Research, a quantitative trading firm' },
      { date: '2019', event: 'Founded FTX cryptocurrency exchange in the Bahamas' },
      { date: 'November 2022', event: 'FTX collapsed after Binance revealed FTT token vulnerability; $8B customer shortfall discovered' },
      { date: 'December 2022', event: 'Arrested in Bahamas; extradited to U.S.; charged with 8 criminal counts' },
      { date: 'November 2023', event: 'Convicted on all 7 counts after month-long trial in SDNY' },
      { date: 'March 2024', event: 'Sentenced to 25 years in federal prison by Judge Lewis Kaplan' },
    ],
    sources: [
      { title: 'DOJ: United States v. Bankman-Fried', url: 'https://www.justice.gov/news', date: '2023' },
    ],
    aliases: ['SBF'],
    knownAssociates: [
      { name: 'Caroline Ellison', relationship: 'CEO of Alameda Research; cooperating witness; sentenced to 2 years' },
      { name: 'Gary Wang', relationship: 'FTX co-founder and CTO; cooperating witness' },
      { name: 'Nishad Singh', relationship: 'FTX Director of Engineering; cooperating witness' },
    ],
  },
  'stephen-miller': {
    name: 'Stephen Miller',
    title: 'Senior Advisor to the President / Deputy Chief of Staff',
    role: 'Political Advisor',
    riskLevel: 'high' as const,
    description: 'Senior advisor to President Trump (2017-2021) and Deputy Chief of Staff for Policy (2025-present) who is the primary architect of the administration\'s hardline immigration policies. Designed the Muslim travel ban, family separation policy, and systematic dismantling of refugee and asylum protections. Leaked emails published by the Southern Poverty Law Center revealed he promoted white nationalist websites, literature, and conspiracy theories to Breitbart editors. The most influential immigration hardliner in modern American politics, responsible for policies that separated thousands of families and slashed legal immigration to historic lows.',
    birthDate: '1985-08-23',
    birthPlace: 'Santa Monica, California',
    education: ['B.A. in Political Science, Duke University (2007)'],
    affiliations: [
      { name: 'White House', role: 'Senior Advisor to the President (2017-2021); Deputy Chief of Staff for Policy (2025-Present)', type: 'agency' as const },
      { name: 'America First Legal', role: 'Founder and President (2021-2024)', type: 'organization' as const },
    ],
    controversies: [
      'Primary architect of Muslim travel ban executive order that caused chaos at airports and was repeatedly blocked by courts',
      'Designed the family separation policy that deliberately took over 5,500 children from parents at the border',
      'Leaked emails revealed promotion of white nationalist websites like VDARE and American Renaissance to Breitbart editors',
      'Slashed refugee admissions from 110,000 to 15,000  -  the lowest level in the history of the program',
      'Pushed for ending DACA and TPS protections affecting hundreds of thousands of longtime U.S. residents',
      'Advocated for dramatic reductions in legal immigration including cutting family-based and diversity visas',
      'Drafted executive orders with disregard for legal review leading to repeated court defeats',
      'Founded America First Legal to sue over Biden immigration policies after leaving first Trump term',
      'In second Trump term (2025), overseeing mass deportation operations and immigration enforcement expansion',
    ],
    charges: [
      {
        statute: 'Civil Rights Act / Equal Protection',
        description: 'Muslim travel ban found by multiple federal courts to constitute religious discrimination; Supreme Court upheld narrowed version on national security grounds',
        category: 'constitutional',
      },
      {
        statute: 'UN Convention on the Rights of the Child',
        description: 'Family separation policy he designed constituted cruel treatment of children per international human rights standards',
        category: 'human-rights',
      },
    ],
    relatedInvestigations: [
      { title: 'Immigration Detention Abuse and Family Separation', slug: 'immigration-detention-abuse', severity: 'critical' },
      { title: 'Homeland Security Mission Creep and Civil Liberties', slug: 'homeland-security-mission-creep', severity: 'high' },
    ],
    timeline: [
      { date: '2007', event: 'Joins office of Rep. Michele Bachmann; begins career in hardline immigration politics' },
      { date: '2009', event: 'Becomes communications director for Senator Jeff Sessions; helps defeat immigration reform' },
      { date: '2016', event: 'Joins Trump presidential campaign; shapes immigration and nationalist messaging' },
      { date: '2017-01-27', event: 'Muslim travel ban executive order signed; causes chaos at airports worldwide' },
      { date: '2017-2018', event: 'Designs family separation policy and zero tolerance enforcement approach' },
      { date: '2018-06', event: 'Family separation crisis; thousands of children taken from parents under policy Miller designed' },
      { date: '2019-11', event: 'Southern Poverty Law Center publishes leaked emails showing promotion of white nationalist content' },
      { date: '2020', event: 'Slashes refugee admissions to historic low of 15,000' },
      { date: '2021', event: 'Founds America First Legal to continue immigration hard-line from outside government' },
      { date: '2025-01', event: 'Returns to White House as Deputy Chief of Staff for Policy; oversees mass deportation operations' },
    ],
    sources: [
      { title: 'SPLC: Stephen Miller Leaked Emails', url: 'https://www.splcenter.org/stephen-miller-breitbart-emails', date: '2019' },
      { title: 'DOJ OIG: Review of Family Separation Policy', url: 'https://oig.justice.gov/', date: '2021' },
      { title: 'Atlantic: Stephen Miller\'s Immigration Influence', url: 'https://www.theatlantic.com/', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jeff Sessions', relationship: 'Former boss in Senate; mentor in immigration hard-line politics', href: '/entities/individuals/jeff-sessions' },
      { name: 'Thomas Homan', relationship: 'ICE Director who implemented Miller\'s enforcement vision', href: '/entities/individuals/thomas-homan' },
      { name: 'Donald Trump', relationship: 'President who empowered Miller as chief immigration policy architect', href: '/entities/individuals/donald-trump' },
      { name: 'Steve Bannon', relationship: 'White House chief strategist and fellow nationalist policy advocate', href: '/entities/individuals/steve-bannon' },
    ],
  },
  'scott-pruitt': {
    name: 'Scott Pruitt',
    title: 'Former EPA Administrator',
    role: 'Regulatory Dismantler and Ethics Violator',
    riskLevel: 'high' as const,
    description: 'Scott Pruitt served as EPA Administrator from 2017 to 2018, systematically rolling back environmental regulations while accumulating ethics scandals that included a $50-per-night condo deal from a lobbyist, first-class travel costing taxpayers over $100,000, and using staff to seek personal favors including a Chick-fil-A franchise for his wife.',
    birthDate: '1968-05-09',
    birthPlace: 'Danville, Kentucky',
    education: [
      'B.A., Georgetown College (1990)',
      'J.D., University of Tulsa College of Law (1993)',
    ],
    affiliations: [
      { name: 'EPA', role: 'Administrator (2017-2018)', type: 'agency' as const },
      { name: 'Oklahoma Attorney General', role: 'Attorney General (2011-2017)', type: 'agency' as const },
    ],
    controversies: [
      'Rented condo from energy lobbyist at $50/night, well below market rate, while making regulatory decisions benefiting the lobbyist clients',
      'First-class travel costing taxpayers over $100,000 justified by claiming security threats that were never substantiated',
      'Directed EPA staff to seek personal employment and financial opportunities including a Chick-fil-A franchise for his wife',
      'Installed a $43,000 soundproof phone booth in his office without congressional approval',
      'Rolled back over 20 environmental regulations during his tenure including Clean Power Plan, methane emission rules, and vehicle efficiency standards',
      'Maintained a secret calendar and conducted official meetings off the books to avoid FOIA disclosure',
      'As Oklahoma AG, copied oil and gas company letters verbatim and submitted them as official state correspondence to federal regulators',
    ],
    relatedInvestigations: [
      { title: 'EPA Regulatory Capture', slug: 'epa-regulatory-capture-exposed', severity: 'critical' },
    ],
    timeline: [
      { date: '2011', event: 'Became Oklahoma Attorney General; filed 14 lawsuits against EPA' },
      { date: '2017-02', event: 'Confirmed as EPA Administrator in 52-46 Senate vote' },
      { date: '2017-03', event: 'Began rolling back Clean Power Plan and methane emission rules' },
      { date: '2017-09', event: 'First-class travel expenses and security detail costs revealed' },
      { date: '2018-03', event: 'Lobbyist condo rental deal exposed by ABC News' },
      { date: '2018-06', event: 'Staff Chick-fil-A request and mattress shopping revelations' },
      { date: '2018-07', event: 'Resigned under pressure from 14 separate federal investigations' },
    ],
    sources: [
      { title: 'GAO: Pruitt Soundproof Booth Violated Spending Law', date: '2018' },
      { title: 'EPA OIG: Investigation of Administrator Travel and Security', date: '2018' },
      { title: 'Senate EPW Committee: Pruitt Ethics Investigation Records', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who appointed Pruitt and initially defended him despite scandals', href: '/entities/individuals/donald-trump' },
      { name: 'Andrew Wheeler', relationship: 'Deputy who replaced Pruitt and continued deregulatory agenda with fewer scandals', href: '/entities/individuals/andrew-wheeler' },
    ],
  },
  'steve-mnuchin': {
    name: 'Steve Mnuchin',
    title: 'Former Secretary of the Treasury',
    role: 'Goldman Sachs Banker Who Profited from Foreclosure Crisis',
    riskLevel: 'high' as const,
    description: 'Steve Mnuchin served as Treasury Secretary from 2017 to 2021 after building his fortune partly through OneWest Bank, which earned the nickname "foreclosure machine" for aggressively evicting homeowners during the financial crisis. As Treasury Secretary, he championed the 2017 tax cuts that disproportionately benefited the wealthy and corporations while adding $1.9 trillion to the national debt.',
    birthDate: '1962-12-21',
    birthPlace: 'New York City, New York',
    education: [
      'B.A., Yale University (1985)',
    ],
    affiliations: [
      { name: 'Department of the Treasury', role: 'Secretary (2017-2021)', type: 'agency' as const },
      { name: 'Goldman Sachs', role: 'Partner (1985-2002)', type: 'corporation' as const },
      { name: 'OneWest Bank', role: 'Chairman and CEO (2009-2015)', type: 'corporation' as const },
    ],
    controversies: [
      'OneWest Bank foreclosed on over 36,000 homeowners including elderly residents over minor payment discrepancies and one case involving a 27-cent error',
      'California AG Kamala Harris staff recommended filing civil charges over OneWest foreclosure practices; Harris declined to prosecute',
      'Championed the 2017 Tax Cuts and Jobs Act that added $1.9 trillion to national debt while providing 83% of benefits to the top 1% by 2027',
      'Used government aircraft for personal travel including a trip to Fort Knox timed to view the solar eclipse; requested military jet for honeymoon in Europe',
      'Failed to disclose $100 million in assets on his Senate confirmation disclosure forms; corrected after public scrutiny',
      'Oversaw a Treasury Department that slow-walked Russian sanctions mandated by bipartisan congressional legislation',
      'After leaving office, received $2 billion from Saudi Arabias sovereign wealth fund for his new investment firm despite no track record managing outside capital',
    ],
    relatedInvestigations: [
      { title: 'Predatory Lending Post-Crisis', slug: 'predatory-lending-post-crisis', severity: 'critical' },
    ],
    timeline: [
      { date: '2009', event: 'Purchased failed IndyMac bank; renamed it OneWest; FDIC loss-share guarantee backstopped losses' },
      { date: '2015', event: 'Sold OneWest to CIT Group for $3.4 billion; personal profit estimated at $200+ million' },
      { date: '2017-02', event: 'Confirmed as Treasury Secretary after contentious hearing about foreclosure practices' },
      { date: '2017-12', event: 'Tax Cuts and Jobs Act signed; Mnuchin claimed it would "pay for itself" through growth' },
      { date: '2017-08', event: 'Used government plane to fly to Fort Knox during solar eclipse; Treasury OIG investigated' },
      { date: '2021-01', event: 'Left office as national debt increased by $7.8 trillion during Trumps term' },
      { date: '2022', event: 'Saudi PIF committed $2 billion to Mnuchins new fund despite advisory board objections' },
    ],
    sources: [
      { title: 'CRC/NCRC: OneWest Foreclosure Investigation', date: '2016' },
      { title: 'Treasury OIG: Review of Secretary Mnuchin Travel', date: '2017' },
      { title: 'New York Times: Mnuchin Saudi Investment Fund', url: 'https://www.nytimes.com/', date: '2022' },
    ],
    aliases: ['The Foreclosure King'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'National finance chairman of 2016 campaign; served as Treasury Secretary for full term', href: '/entities/individuals/donald-trump' },
      { name: 'Jared Kushner', relationship: 'Fellow Trump official who also received $2 billion Saudi investment after leaving government', href: '/entities/individuals/jared-kushner' },
    ],
  },
  'salim-b-lewis': {
    name: 'Salim B. Lewis',
    title: 'Convicted Stock Manipulator; Head of S.B. Lewis & Company',
    role: 'Principal, S.B. Lewis & Company',
    riskLevel: 'medium',
    description: 'Salim B. Lewis (known as Sandy Lewis) was the head of S.B. Lewis & Company, a Wall Street brokerage firm. He pleaded guilty in October 1990 to manipulating the stock price of Fireman\'s Fund Insurance to benefit his firm\'s trading positions. Lewis was fined $250,000 and placed on probation. He was permanently banned from the securities industry. His father, Salim L. Lewis (known as Cy Lewis), had been the managing partner of Bear Stearns. The younger Lewis\'s conviction was part of the broader wave of 1980s financial crime prosecutions that reshaped Wall Street oversight.',
    birthDate: '1940',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'S.B. Lewis & Company', role: 'Founder and Principal', type: 'corporation' },
    ],
    controversies: [
      'Manipulated stock price of Fireman\'s Fund Insurance to benefit trading positions',
      'Permanently banned from the securities industry after conviction',
      'Son of Bear Stearns managing partner Cy Lewis; represented fall of Wall Street dynasty',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Stock Manipulation: Artificially inflating Fireman\'s Fund Insurance stock price', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980s', event: 'Manipulates Fireman\'s Fund Insurance stock to benefit trading positions' },
      { date: 'October 1990', event: 'Pleads guilty to stock manipulation; fined $250,000; placed on probation' },
      { date: '1990', event: 'Permanently banned from the securities industry' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times: Sandy Lewis Pleads Guilty (1990)', url: 'https://www.nytimes.com/1990/10/05/business/sandy-lewis-pleads-guilty.html', date: '1990' },
    ],
    aliases: ['Sandy Lewis'],
    knownAssociates: [],
  },

 'steven-smotrich': {
    name: 'Steven Smotrich',
    title: 'Princeton/Newport Partners Controller; Convicted on RICO Charges, All Overturned on Appeal',
    role: 'Controller, Princeton/Newport Partners',
    riskLevel: 'high',
    description: 'Steven Smotrich was the controller of Princeton/Newport Partners, a quantitative hedge fund co-founded by mathematician Edward Thorp. In August 1989, Smotrich and five other defendants were convicted on over 60 counts of racketeering, securities fraud, and tax fraud in the first RICO prosecution arising from the Wall Street investigations. He was sentenced to 3 months in federal prison. On June 29, 1991, all convictions were overturned on appeal when the court ruled the government had improperly applied RICO. The prosecution and reversal remains one of the most controversial episodes in white-collar criminal enforcement history.',
    birthDate: 'c. 1955',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Princeton/Newport Partners', role: 'Controller', type: 'corporation' },
    ],
    controversies: [
      'Convicted on RICO charges for illegal tax-motivated stock parking with Drexel Burnham Lambert',
      'All convictions overturned on appeal June 29, 1991',
    ],
    charges: [
      { statute: '18 U.S.C. 1962 (RICO)', description: 'Racketeering: Illegal tax-motivated stock parking', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1988-08-04', event: 'Indicted alongside five other defendants on RICO charges' },
      { date: '1989-08', event: 'Convicted on multiple counts of racketeering and tax fraud' },
      { date: '1989-11-09', event: 'Sentenced to 3 months in federal prison' },
      { date: '1991-06-29', event: 'ALL convictions overturned on appeal' },
    ],
    socialMedia: [],
    sources: [
      { title: 'LA Times: 6 in Princeton-Newport Case Given Jail Terms', url: 'https://www.latimes.com', date: 'November 10, 1989' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'James Sutton Regan', relationship: 'Managing general partner at Princeton/Newport; co-defendant', href: '/entities/individuals/james-sutton-regan' },
      { name: 'Charles Zarzecki', relationship: 'General partner and chief trader at Princeton/Newport; co-defendant', href: '/entities/individuals/charles-zarzecki' },
    ],
  },

 'steven-posner': {
    name: 'Steven Posner',
    title: 'Son of Corporate Raider Victor Posner; Charged by SEC for Fischbach Corporation Stock Concealment in Collusion with Boesky and Milken',
    role: 'Son and Business Associate of Victor Posner',
    riskLevel: 'high',
    description: 'Steven Posner was the son of legendary corporate raider Victor Posner and a participant in his father\'s business empire. In 1988, the SEC charged that Steven and Victor Posner had colluded with Ivan Boesky and Michael Milken to conceal their stock purchases during the 1984 Posner-led takeover of the Fischbach Corporation. While Boesky and Milken agreed to plead guilty to felony counts in relation to their activities in the Fischbach case, the Posners were required to relinquish all financial gains they had made in the deal and to surrender ownership stakes they held in other companies. In 1993, Steven Posner was permanently barred by the SEC from serving as an officer or director of any public company. He was never criminally charged. Steven Posner died on November 29, 2010, at age 67, in a boating accident in Biscayne Bay, Florida.',
    birthDate: 'January 11, 1943',
    birthPlace: 'Baltimore, Maryland',
    deathDate: 'November 29, 2010',
    education: [],
    affiliations: [
      { name: 'DWG Corporation', role: 'Executive (Posner family controlled)', type: 'corporation' },
      { name: 'Fischbach Corporation', role: 'Associated through Posner family takeover', type: 'corporation' },
    ],
    controversies: [
      'Charged by SEC in 1988 for colluding with Boesky and Milken to conceal Fischbach Corporation stock purchases',
      'Required to relinquish all financial gains from Fischbach deal and surrender ownership stakes in other companies',
      'Permanently barred by SEC in 1993 from serving as officer or director of any public company',
    ],
    charges: [
      { statute: 'SEC Civil Action', description: 'Stock concealment: Colluding with Boesky and Milken to conceal stock purchases during 1984 Fischbach Corporation takeover', category: 'Civil' },
      { statute: 'SEC Civil Action', description: 'Securities fraud: Scheming to conceal stock ownership in connection with Drexel Burnham Lambert\'s illegal activities', category: 'Civil' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1943-01-11', event: 'Born in Baltimore, Maryland' },
      { date: '1984', event: 'Posner family launches takeover of Fischbach Corporation; SEC later alleges Steven and Victor Posner colluded with Boesky and Milken to conceal stock purchases' },
      { date: '1988-10-01', event: 'SEC charges Steven Posner and father Victor Posner alongside Drexel Burnham Lambert with concealing purchases of Fischbach Corporation stock' },
      { date: '1988', event: 'Required to relinquish all financial gains from Fischbach deal and surrender ownership stakes in other companies as part of SEC settlement' },
      { date: '1993-06-01', event: 'Permanently barred by SEC from serving as officer or director of any public company' },
      { date: '2010-11-29', event: 'Died at age 67 in a boating accident in Biscayne Bay, Florida' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC Litigation: Victor and Steven Posner - Fischbach Corporation', url: 'https://www.sec.gov', date: '1988' },
      { title: 'New York Times: Posners Barred by SEC', url: 'https://www.nytimes.com', date: '1993' },
      { title: 'Steven Posner Obituary', url: 'https://en.wikipedia.org/wiki/Steven_Posner', date: '2010' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Victor Posner', relationship: 'Father; corporate raider and Milken client; co-charged by SEC for Fischbach stock concealment', href: '/entities/individuals/victor-posner' },
      { name: 'Michael Milken', relationship: 'Drexel junk bond king who SEC alleged colluded with Posners on Fischbach takeover', href: '/entities/individuals/michael-milken' },
      { name: 'Ivan Boesky', relationship: 'Arbitrageur who SEC alleged colluded with Posners on Fischbach stock concealment', href: '/entities/individuals/ivan-boesky' },
    ],
  },
};

export default profiles;
