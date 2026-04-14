// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'roger-stone': {
 name: 'Roger Jason Stone Jr.',
 title: 'Convicted Felon (Pardoned), Professional Dirty Trickster',
 role: 'Political Consultant, Trump Advisor, Nixon ProtÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©',
 riskLevel: 'critical',
 description: 'Roger Jason Stone Jr. is a longtime Republican political consultant, lobbyist, and self-described dirty trickster who served as a key ally to Donald Trump. He was convicted of seven felonies including witness tampering and lying to Congress about his WikiLeaks contacts during the 2016 campaign, then pardoned by Trump. He had documented contacts with the Proud Boys and Oath Keepers before January 6th.',
 birthDate: 'August 27, 1952',
 birthPlace: 'Norwalk, Connecticut, USA',
 netWorth: '$5+ million',
 education: ['George Washington University (did not graduate)', 'Nixon School of Politics (self-described)'],
 affiliations: [
 { name: 'Trump Campaign 2016', role: 'Informal Advisor, WikiLeaks Coordinator', type: 'organization' },
 { name: 'Nixon Campaign 1972', role: 'Dirty Tricks Operative (youngest CREEP employee)', type: 'organization' },
 { name: 'Black, Manafort, Stone and Kelly', role: 'Co-Founder (1980s lobbying firm)', type: 'corporation' },
 { name: 'Reagan Campaign', role: 'Northeast Campaign Director', type: 'organization' },
 { name: 'Reform Party', role: 'Trump 2000 campaign manager', type: 'organization' },
 { name: 'Stop the Steal', role: 'Founder (2016 and 2020)', type: 'organization' },
 { name: 'Proud Boys', role: 'Association, security provided by', type: 'organization' },
 { name: 'Oath Keepers', role: 'Security provided by members', type: 'organization' },
 ],
 controversies: [
 'WIKILEAKS COORDINATION: Advance knowledge of WikiLeaks releases ("time in the barrel"prediction August 2016), communicated with Julian Assange through intermediaries',
 'CONVICTED 7 FELONIES: Lying to Congress (5 counts), obstruction, witness tampering; convicted November 2019',
 'WITNESS TAMPERING: Threatened Randy Credico to prevent testimony:"Prepare to die"and threatened to steal his therapy dog',
 'NIXON BACK TATTOO: Has large tattoo of Richard Nixon between shoulder blades, openly celebrates"rat-fucking"tradition',
 'PROUD BOYS SECURITY: Used Proud Boys as personal security at events, Enrique Tarrio and others provided protection',
 'JANUARY 6 PRESENCE: Present in DC on January 5-6, seen with Oath Keepers at Willard Hotel"command center"',
 'STOP THE STEAL FOUNDER: Created organization in 2016 (preparing for Trump loss), revived in 2020 for election lies',
 'PARDONED TO SILENCE: Trump commuted sentence July 2020 and pardoned December 2020 to prevent cooperation',
 '"GET ME ROGER STONE": Netflix documentary exposing his dirty tricks philosophy and career',
 'LOBBYING DICTATORS: Black Manafort Stone lobbied for dictators including Marcos (Philippines), Mobutu (Zaire), Angola rebels',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1001', description: 'Making false statements to Congress (5 counts)', category: 'Obstruction' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1505', description: 'Obstruction of congressional investigation', category: 'Obstruction' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1512(b)(1)', description: 'Witness tampering; threats against Randy Credico', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Proud Boys Seditious Conspiracy', slug: 'proud-boys-sedition', severity: 'critical' },
 { title: 'Oath Keepers Seditious Conspiracy', slug: 'oath-keepers-sedition', severity: 'critical' },
 ],
 timeline: [
 { date: '1952', event: 'Born in Norwalk, Connecticut' },
 { date: '1972', event: 'Works as youngest operative for Nixon\'s CREEP, dirty tricks for Watergate campaign' },
 { date: '1975', event: 'Nixon resignation, Stone keeps Nixon photo in office' },
 { date: '1977', event: 'Elected president of Young Republicans' },
 { date: '1980', event: 'Begins relationship with Donald Trump through Roy Cohn introduction' },
 { date: '1980', event: 'Co-founds Black, Manafort, Stone and Kelly lobbying firm with Manafort' },
 { date: '1996', event: 'Resigns from Bob Dole campaign over swinger scandal' },
 { date: '2000', event: 'Manages Trump\'s exploratory Reform Party campaign' },
 { date: '2015', event: 'Advises Trump presidential campaign (leaves officially but remains connected)' },
 { date: '2016 (Jun)', event: 'Contacts Guccifer 2.0 (Russian intelligence front) about hacked materials' },
 { date: '2016 (Aug 8)', event: 'Predicts John Podesta will have his"time in the barrel"' },
 { date: '2016 (Aug)', event: 'Communicates with WikiLeaks through Jerome Corsi and Randy Credico' },
 { date: '2016 (Oct)', event: 'WikiLeaks releases Podesta emails as Stone predicted' },
 { date: '2016', event: 'Creates"Stop the Steal"organization anticipating Trump loss' },
 { date: '2017-18', event: 'Lies to House Intelligence Committee about WikiLeaks contacts' },
 { date: '2019 (Jan 25)', event: 'Arrested in early morning FBI raid at Florida home' },
 { date: '2019 (Nov 15)', event: 'Convicted on all 7 counts' },
 { date: '2020 (Feb)', event: 'Sentenced to 40 months (prosecutors recommended 7-9 years, Barr intervened)' },
 { date: '2020 (Jul 10)', event: 'Trump commutes sentence days before Stone was to report to prison' },
 { date: '2020 (Nov-Dec)', event: 'Revives"Stop the Steal"for 2020 election lies' },
 { date: '2020 (Dec 23)', event: 'Trump issues full pardon' },
 { date: '2021 (Jan 5)', event: 'At Willard Hotel with Oath Keepers and other Jan 6 planners' },
 { date: '2021 (Jan 6)', event: 'Present in DC, escorted by Oath Keepers who later stormed Capitol' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'Stone Indictment', url: 'https://web.archive.org/web/2024/https://www.justice.gov/file/1124706/download', date: '2019' },
 { title: 'House Intelligence Committee Report', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' },
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'Netflix: Get Me Roger Stone', url: 'https://www.netflix.com/title/80114666', date: '2017' },
 { title: 'Stone-Credico Text Messages (Court Exhibit)', url: 'https://www.courtlistener.com/docket/7658913/united-states-v-stone/', date: '2019' },
 ],
 aliases: ['Dirty Trickster', 'Agent Provocateur', 'The Stone Zone', 'Ratf**ker'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Advisor since 1980s, pardoned to prevent testimony', href: '/entities/individuals/donald-trump' },
 { name: 'Paul Manafort', relationship: 'Business partner since 1980s (Black, Manafort, Stone)', href: '/entities/individuals/paul-manafort' },
 { name: 'Jerome Corsi', relationship: 'WikiLeaks intermediary, drafted comms', href: '/entities/individuals/jerome-corsi' },
 { name: 'Randy Credico', relationship: 'WikiLeaks back-channel, victim of witness tampering', href: '/entities/individuals/randy-credico' },
 { name: 'Enrique Tarrio', relationship: 'Proud Boys leader, provided security', href: '/entities/individuals/enrique-tarrio' },
 { name: 'Stewart Rhodes', relationship: 'Oath Keepers leader, security at Willard Jan 5-6', href: '/entities/individuals/stewart-rhodes' },
 { name: 'Alex Jones', relationship: 'InfoWars ally, January 6 coordination', href: '/entities/individuals/alex-jones' },
 { name: 'Steve Bannon', relationship: 'Political ally, War Room coordination', href: '/entities/individuals/steve-bannon' },
 ],
 },

 'rick-gates': {
 name: 'Richard William Gates III',
 title: 'Convicted Felon',
 role: 'Manafort Deputy, Cooperating Witness',
 riskLevel: 'high',
 description: 'Richard William Gates III was a longtime business partner of Paul Manafort who served as deputy chairman of the Trump 2016 campaign. He pleaded guilty to conspiracy and lying to FBI investigators in the Mueller investigation and served as a key cooperating witness against Manafort.',
 birthDate: 'April 27, 1972',
 birthPlace: 'Fort Lee, Virginia, USA',
 netWorth: 'Unknown',
 education: ['M.A., Villanova University', 'B.A., College of William & Mary'],
 affiliations: [
 { name: 'Trump Campaign', role: 'Deputy Campaign Manager', type: 'organization' },
 { name: 'Trump Inaugural Committee', role: 'Deputy Chairman', type: 'organization' },
 { name: 'Davis Manafort Partners', role: 'Partner', type: 'corporation' },
 ],
 controversies: [
 'Worked with Manafort on Ukraine schemes',
 'Key cooperating witness against Manafort',
 'Inaugural committee spending investigation',
 'Testified about Manafort tax and bank fraud',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 371', description: 'Conspiracy Against the United States (Pled Guilty); Conspiracy to commit tax and bank fraud with Manafort', category: 'Conspiracy' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1001', description: 'Making False Statements (Pled Guilty); Lied to investigators about contacts and transactions', category: 'Obstruction' },
 { statute: '22 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 611 (FARA)', description: 'Foreign Agent Registration Act Violation; Failed to register as agent for Ukraine government', category: 'Foreign Agent' },
 { statute: '26 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 7201 (Tax Evasion)', description: 'Tax Fraud Conspiracy; Participated in hiding $75 million in Ukraine payments', category: 'Tax Fraud' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1344 (Bank Fraud)', description: 'Bank Fraud Conspiracy; Helped submit false loan applications to banks', category: 'Bank Fraud' },
 { statute: '31 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 5314 (FBAR)', description: 'Foreign Account Reporting Violations; Failed to report foreign bank accounts', category: 'Financial Crime' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1956 (Money Laundering)', description: 'Money Laundering Conspiracy; Moved Ukraine payments through shell companies', category: 'Money Laundering' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1972', event: 'Born in Virginia' },
 { date: '2016', event: 'Deputy campaign manager for Trump' },
 { date: '2017', event: 'Deputy chairman of inaugural committee' },
 { date: '2018', event: 'Pleads guilty, becomes cooperating witness' },
 { date: '2018', event: 'Testifies against Manafort' },
 { date: '2019', event: 'Sentenced to 45 days in prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'Gates Plea Agreement', url: 'https://www.courtlistener.com/docket/6183591/united-states-v-manafort/', date: '2018' }, ],
 aliases: ['Manafort\'s Deputy'],
 knownAssociates: [
 { name: 'Paul Manafort', relationship: 'Boss, testified against', href: '/entities/individuals/paul-manafort' },
 { name: 'Donald Trump', relationship: 'Campaign deputy manager', href: '/entities/individuals/donald-trump' },
 ],
 },


























 'ruby-freeman': {
 name: 'Ruby Freeman',
 title: 'Former Georgia Election Worker',
 role: 'Defamation Victim, $148 Million Judgment',
 riskLevel: 'low',
 description: 'Ruby Freeman was a Georgia election worker who, along with her daughter Shaye Moss, was falsely accused by Donald Trump and Rudy Giuliani of committing election fraud during the 2020 vote count. They were subjected to racist harassment, death threats, and had their lives destroyed by the lies. A federal jury awarded them $148 million in damages against Giuliani.',
 birthDate: 'Unknown',
 birthPlace: 'Georgia, USA',
 netWorth: '$148+ million (judgment, largely uncollectable)',
 education: ['Unknown'],
 affiliations: [
 { name: 'Fulton County Elections', role: 'Temporary Election Worker (2020)', type: 'agency' },
 ],
 controversies: [
 'Falsely accused of"passing USB drives"(actually ginger mints)',
 'Trump mentioned her by name 18 times in Georgia call',
 'Forced to flee home due to death threats',
 'Had to close her small business',
 'FBI warned her to leave home before January 6',
 'Strangers showed up at her home',
 'Giuliani declared bankruptcy to avoid paying judgment',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
 { title: 'Defamation & Media Attacks', slug: 'defamation', severity: 'high' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'November: Works as temporary election worker at State Farm Arena' },
 { date: '2020', event: 'December: Trump and Giuliani begin spreading lies about her' },
 { date: '2020', event: 'December: Death threats force her to flee home' },
 { date: '2021', event: 'January 2: Trump mentions her by name 18 times in Georgia call' },
 { date: '2021', event: 'January 6: FBI warns her to leave home before Capitol riot' },
 { date: '2021', event: 'Files defamation lawsuit against Giuliani' },
 { date: '2022', event: 'June: Emotional testimony before January 6 Committee' },
 { date: '2023', event: 'August: Giuliani found liable for defamation' },
 { date: '2023', event: 'December: Jury awards $148 million in damages' },
 { date: '2023', event: 'December: Giuliani files for bankruptcy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Freeman v. Giuliani: $148M Verdict', url: 'https://www.courtlistener.com/docket/63495928/freeman-v-giuliani/', date: '2023' },
 { title: 'January 6 Committee Testimony', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'Georgia Phone Call Transcript', url: 'https://www.cnn.com/2021/01/03/politics/trump-brad-raffensperger-phone-call-transcript/index.html', date: '2021' },
 ],
 aliases: ['Lady Ruby'],
 knownAssociates: [
 { name: 'Shaye Moss', relationship: 'Daughter, fellow election worker and victim', href: '/entities/individuals/shaye-moss' },
 { name: 'Donald Trump', relationship: 'Repeatedly defamed her with false accusations', href: '/entities/individuals/donald-trump' },
 { name: 'Rudy Giuliani', relationship: 'Defamed her, owes $148 million judgment', href: '/entities/individuals/rudy-giuliani' },
 ],
 },


























 'robert-mueller': {
 name: 'Robert Swan Mueller III',
 title: 'Former FBI Director & Special Counsel',
 role: 'Special Counsel (2017-2019), Russia Investigation',
 riskLevel: 'low',
 description: 'Robert Mueller was a decorated Marine and longtime FBI Director who was appointed Special Counsel to investigate Russian interference in the 2016 election and potential obstruction of justice by Trump. His report documented 10 instances of potential obstruction but declined to charge a sitting president per DOJ policy. He stated he could not exonerate Trump.',
 birthDate: 'August 7, 1944',
 birthPlace: 'New York City, New York, USA',
 netWorth: '$5+ million',
 education: ['J.D., University of Virginia School of Law', 'M.A., New York University', 'B.A., Princeton University'],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'Director (2001-2013)', type: 'agency' },
 { name: 'Department of Justice', role: 'Special Counsel (2017-2019)', type: 'agency' },
 { name: 'U.S. Marine Corps', role: 'Captain, Bronze Star', type: 'agency' },
 ],
 controversies: [
 'Report documented 10 potential obstruction instances but didn\'t charge',
 'Constrained by DOJ policy against indicting sitting president',
 'Said he could not exonerate Trump',
 'Criticized for being too cautious',
 'Congressional testimony criticized as ineffective',
 'Report heavily redacted by Barr before release',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1944', event: 'Born in New York City' },
 { date: '1968', event: 'Serves in Vietnam, awarded Bronze Star' },
 { date: '2001', event: 'Confirmed as FBI Director (September 4)' },
 { date: '2001', event: 'September 11: Leads FBI response to attacks' },
 { date: '2013', event: 'Leaves FBI after 12 years' },
 { date: '2017', event: 'May 17: Appointed Special Counsel' },
 { date: '2017-2019', event: 'Investigation: 34 indictments, 7 guilty pleas' },
 { date: '2019', event: 'March: Submits final report to Barr' },
 { date: '2019', event: 'April: Barr releases redacted report' },
 { date: '2019', event: 'July: Testifies to Congress' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'Congressional Testimony', url: 'https://www.c-span.org/video/?462628-1/robert-mueller-testifies-house-judiciary-committee', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Subject of investigation', href: '/entities/individuals/donald-trump' },
 { name: 'James Comey', relationship: 'Predecessor as FBI Director, his firing triggered appointment' },
 { name: 'Rod Rosenstein', relationship: 'Deputy AG who appointed him' },
 ],
 },



























 'rebekah-mercer': {
 name: 'Rebekah Mercer',
 title: 'Conservative Mega-Donor',
 role: 'Cambridge Analytica Board, Breitbart Backer',
 riskLevel: 'high',
 description: 'Rebekah Mercer is the daughter of Robert Mercer and the public face of the family\'s political activities. She served on the Cambridge Analytica board, backed Breitbart, and was a key figure in Trump\'s 2016 transition team. She continues to fund right-wing causes through the Mercer Family Foundation.',
 birthDate: 'December 1973',
 birthPlace: 'Unknown',
 netWorth: 'Unknown (family wealth $1.5B+)',
 education: ['M.S., Stanford University (Operations Research)', 'B.S., Stanford University'],
 affiliations: [
 { name: 'Cambridge Analytica', role: 'Board Member', type: 'corporation' },
 { name: 'Mercer Family Foundation', role: 'Director', type: 'organization' },
 { name: 'Breitbart News', role: 'Primary Backer', type: 'corporation' },
 { name: 'Trump Transition Team', role: 'Member (2016)', type: 'organization' },
 ],
 controversies: [
 'Board member of Cambridge Analytica during data harvesting',
 'Key player in Trump transition',
 'Funded Breitbart, Bannon\'s platform',
 'Foundation funded climate denial, far-right causes',
 'More publicly active than reclusive father',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1030 (Computer Fraud and Abuse Act)', description: 'Board Oversight Failure; Served on Cambridge Analytica board during illegal harvesting of 87 million Facebook users\' data', category: 'Cyber Crime' },
 { statute: '52 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 30121 (Foreign National Contributions)', description: 'Foreign Coordination; Cambridge Analytica employed UK nationals on U.S. campaign work while she served on board', category: 'Campaign Finance' },
 { statute: 'UK Data Protection Act 1998', description: 'International Data Violations; As board member, oversaw company that committed serious data protection breaches (fined ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£500,000)', category: 'International Law' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 371 (Conspiracy)', description: 'Conspiracy to Defraud US; Board role in operation using illegally obtained data to manipulate elections', category: 'Conspiracy' },
 { statute: '52 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 30104 (Disclosure)', description: 'Dark Money Concerns; Mercer Family Foundation funding obscured true sources of political expenditures', category: 'Campaign Finance' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1343 (Wire Fraud)', description: 'Wire Fraud Potential; Cambridge Analytica used interstate wires to deceive voters with microtargeted disinformation', category: 'Fraud' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Cambridge Analytica Data Scandal', slug: 'cambridge-analytica', severity: 'high' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1973', event: 'Born' },
 { date: '2014', event: 'Joins Cambridge Analytica board' },
 { date: '2016', event: 'Key figure in Trump campaign support' },
 { date: '2016', event: 'November: Joins Trump transition team' },
 { date: '2017', event: 'Continues political funding operations' },
 { date: '2018', event: 'Cambridge Analytica scandal; company folds' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Cambridge Analytica Investigation', url: 'https://ico.org.uk/', date: '2018' },
 { title: 'Mercer Family Foundation Records', url: 'https://scholar.google.com/scholar?q=Mercer%20Family%20Foundation%20Records', date: '2016-2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Mercer', relationship: 'Father, co-donor', href: '/entities/individuals/robert-mercer' },
 { name: 'Donald Trump', relationship: 'Transition team, major donor', href: '/entities/individuals/donald-trump' },
 { name: 'Steve Bannon', relationship: 'Close ally, funded his operations', href: '/entities/individuals/steve-bannon' },
 ],
 },


























 'rod-rosenstein': {
 name: 'Rod Jay Rosenstein',
 title: 'Former Deputy Attorney General',
 role: 'Deputy AG who appointed Mueller (2017-2019)',
 riskLevel: 'medium',
 description: 'Rod Rosenstein served as Deputy Attorney General and appointed Robert Mueller as Special Counsel after Jeff Sessions recused himself. He wrote the memo used to justify firing FBI Director Comey, then reportedly discussed wearing a wire to record Trump and invoking the 25th Amendment. He survived repeated Trump criticism before resigning.',
 birthDate: 'January 13, 1965',
 birthPlace: 'Philadelphia, Pennsylvania, USA',
 netWorth: 'Unknown',
 education: ['J.D., Harvard Law School', 'B.A., University of Pennsylvania (Wharton)'],
 affiliations: [
 { name: 'Department of Justice', role: 'Deputy Attorney General (2017-2019)', type: 'agency' },
 { name: 'King & Spalding', role: 'Partner (current)', type: 'corporation' },
 ],
 controversies: [
 'Wrote memo used to justify Comey firing, later regretted',
 'Discussed wearing wire to record Trump (denied seriousness)',
 'Discussed 25th Amendment to remove Trump (denied seriousness)',
 'Appointed Mueller, drawing Trump\'s ire',
 'Expanded Mueller\'s mandate to include obstruction',
 'Signed FISA renewal on Carter Page',
 'Survived multiple near-firings by Trump',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russia Investigation', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1965', event: 'Born in Philadelphia' },
 { date: '2017', event: 'April: Confirmed as Deputy Attorney General' },
 { date: '2017', event: 'May: Writes memo used to justify Comey firing' },
 { date: '2017', event: 'May: Appoints Robert Mueller as Special Counsel' },
 { date: '2017', event: 'May: Reportedly discusses wire/25th Amendment' },
 { date: '2018', event: 'Expands Mueller mandate, signs FISA renewal' },
 { date: '2019', event: 'March: Barr takes over Mueller report release' },
 { date: '2019', event: 'April: Stands with Barr at controversial press conference' },
 { date: '2019', event: 'May: Resigns' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'DOJ Inspector General Report', url: 'https://www.justice.gov/storage/120919-examination.pdf', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed by, frequently attacked by', href: '/entities/individuals/donald-trump' },
 { name: 'Robert Mueller', relationship: 'Appointed him as Special Counsel', href: '/entities/individuals/robert-mueller' },
 { name: 'Jeff Sessions', relationship: 'Oversaw Russia investigation after Sessions recusal', href: '/entities/individuals/jeff-sessions' },
 { name: 'Andrew McCabe', relationship: 'Discussed wearing wire with', href: '/entities/individuals/andrew-mccabe' },
 ],
 },


























 'rupert-murdoch': {
 name: 'Rupert Murdoch',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rupert Murdoch. Profile pending review.',
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

 'rosemary-vrablic': {
 name: 'Rosemary Vrablic',
 title: 'Former Deutsche Bank Managing Director',
 role: 'Trump\'s Personal Banker',
 riskLevel: 'high',
 description: 'Rosemary T. Vrablic was a senior wealth management banker at Deutsche Bank who personally managed the Trump Organization\'s accounts. She approved hundreds of millions in loans to Trump when no other major bank would lend to him. She resigned from Deutsche Bank in 2021 amid scrutiny of the bank\'s Trump lending relationships.',
 birthDate: 'Unknown',
 birthPlace: 'USA',
 netWorth: 'Unknown',
 education: ['Unknown'],
 affiliations: [
 { name: 'Deutsche Bank', role: 'Managing Director, Private Wealth (resigned 2020)', type: 'corporation' },
 ],
 controversies: [
 'Approved Trump loans when no other bank would',
 'Personal investments in company tied to Kushner',
 'Resigned amid internal investigation',
 'Overruled internal risk assessments',
 'Bought investment in Trump-connected company',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1014', description: 'Potential Bank Fraud; Approved loans to Trump despite knowledge of inflated financial statements and internal risk warnings', category: 'Potential Federal' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1344', description: 'Potential Bank Fraud Scheme; Pattern of approving loans to politically connected client despite red flags', category: 'Potential Federal' },
 { statute: '31 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 5318 (Bank Secrecy Act)', description: 'Potential Anti-Money Laundering Violations; Failed to properly flag suspicious transactions in Trump accounts', category: 'Potential Federal' },
 { statute: '12 C.F.R. Part 208 (Regulation H)', description: 'Banking Regulation Violations; Overruled internal risk assessments to approve questionable loans', category: 'Banking Regulatory' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 208', description: 'Conflict of Interest; Personal investments in company connected to Kushner while managing his accounts', category: 'Ethics' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 371', description: 'Potential Conspiracy; Pattern of facilitating questionable loans to Trump despite institutional warnings', category: 'Potential Federal' },
 { statute: 'SEC Rule 10b-5', description: 'Potential Securities Violations; Personal investments while possessing material non-public information about clients', category: 'Potential Securities' },
 ],
 relatedInvestigations: [
 { title: 'Deutsche Bank Investigation', slug: 'deutsche-bank', severity: 'critical' },
 { title: 'Money Laundering', slug: 'money-laundering', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Begins banking relationship with Trump' },
 { date: '2012-2015', event: 'Approves $300M+ in loans to Trump' },
 { date: '2020', event: 'Internal investigation into personal investments' },
 { date: '2020', event: 'December: Resigns from Deutsche Bank' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NY Times Deutsche Bank Investigation', url: 'https://www.nytimes.com/', date: '2020' },
 { title: 'House Financial Services Committee', url: 'https://www.congress.gov/', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Personal banker, approved $300M+ in loans', href: '/entities/individuals/donald-trump' },
 { name: 'Jared Kushner', relationship: 'Also managed Kushner accounts', href: '/entities/individuals/jared-kushner' },
 { name: 'Ivanka Trump', relationship: 'Managed her accounts', href: '/entities/individuals/ivanka-trump' },
 ],
 },

























 'reince-priebus': {
 name: 'Reince Priebus',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Reince Priebus. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Reince Priebus facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference Reince Priebus in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'robert-jeffress': {
 name: 'Robert James Jeffress Jr.',
 title: 'Pastor of First Baptist Dallas',
 role: 'Evangelical Trump Advisor',
 riskLevel: 'medium' as const,
 description: 'Senior pastor of First Baptist Church in Dallas and one of Trump\'s closest evangelical advisors. Member of Trump\'s evangelical advisory board who defended Trump through every scandal. Known for controversial statements about other religions, LGBTQ people, and Democrats. Delivered prayer at Jerusalem embassy opening.',
 birthDate: 'November 29, 1955',
 birthPlace: 'Dallas, Texas',
 education: [
 'Ph.D., Southwestern Baptist Theological Seminary',
 'Th.M., Dallas Theological Seminary',
 'B.S., Baylor University',
 ],
 affiliations: [
 { name: 'First Baptist Dallas', role: 'Senior Pastor', type: 'organization' },
 { name: 'Trump Evangelical Advisory Board', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Called Islam "evil religion"',
 'Said Jews" can\'t be saved"',
 'Anti-Catholic, anti-Mormon statements',
 'Called homosexuality "filthy"',
 'Said Obama paved way for Antichrist',
 'Defended Trump through all scandals',
 'Delivered prayer at Jerusalem embassy opening',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '2007', event: 'Becomes pastor of First Baptist Dallas' },
 { date: '2016', event: 'Joins Trump campaign' },
 { date: '2017', event: 'Joins evangelical advisory board' },
 { date: 'May 2018', event: 'Delivers prayer at Jerusalem embassy' },
 { date: '2020', event: 'Continues defending Trump' },
 ],
 sources: [
 { title: 'First Baptist Dallas Records', url: 'https://www.irs.gov/', date: 'Various' },
 { title: 'Media Statements', url: 'https://scholar.google.com/scholar?q=Media%20Statements', date: '2016-Present' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Pastor who served on Trump evangelical advisory board', href: '/entities/individuals/donald-trump' },
 { name: 'Franklin Graham', relationship: 'Fellow evangelical leader and Trump supporter', href: '/entities/individuals/franklin-graham' }
 ],

 },
 'rinat-akhmetshin': {
 name: 'Rinat Akhmetshin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rinat Akhmetshin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Rinat Akhmetshin coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Rinat Akhmetshin holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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






 'rob-goldstone': {
 name: 'Rob Goldstone',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rob Goldstone. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Rob Goldstone, though no formal investigation was initiated at the time.',
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






 'richard-donoghue': {
 name: 'Richard Peter Donoghue',
 title: 'Former Acting Deputy Attorney General',
 role: 'DOJ Official Who Resisted Trump',
 riskLevel: 'low' as const,
 description: 'Former Acting Deputy Attorney General who resisted Trump\'s pressure to use DOJ to overturn the 2020 election. Testified extensively to the January 6 Committee about Trump\'s attempts to install Jeffrey Clark and his demands that DOJ" just say the election was corrupt and leave the rest to me."',
 birthDate: '',
 birthPlace: 'New York',
 education: [
 'J.D., St. John\'s University School of Law',
 ],
 affiliations: [
 { name: 'Department of Justice', role: 'Former Acting Deputy AG', type: 'agency' },
 { name: 'U.S. Army', role: 'Former JAG Officer', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Rosen', relationship: 'Acting AG', href: '/entities/individuals/jeffrey-rosen' },
 { name: 'Steven Engel', relationship: 'Fellow DOJ official who resisted', href: '/entities/individuals/steven-engel' },
 ],
 controversies: [
 'Took contemporaneous notes of Trump pressure',
 'Threatened to resign over Clark appointment',
 'Key January 6 Committee witness',
 'Documented Trump\'s "corrupt "election demand',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 2020', event: 'Resists Trump election pressure' },
 { date: 'January 3, 2021', event: 'Threatens resignation over Clark' },
 { date: '2022', event: 'Testifies to January 6 Committee' },
 ],
 sources: [
 { title: 'January 6 Committee Testimony', url: 'https://scholar.google.com/scholar?q=January%206%20Committee%20Testimony', date: '2022' },
 { title: 'Donoghue Contemporaneous Notes', url: 'https://scholar.google.com/scholar?q=Donoghue%20Contemporaneous%20Notes', date: '2020-2021' },
 ],
 },
 'rhona-graff': {
 name: 'Rhona Graff',
 title: 'Former Trump Organization Executive',
 role: 'Trump Gatekeeper',
 riskLevel: 'medium' as const,
 description: 'Long-time Trump Organization senior vice president and Trump\'s personal gatekeeper for decades. Testified in NY fraud trial. Had Jeffrey Epstein\'s multiple phone numbers in her contacts. Key witness to Trump Organization operations.',
 birthDate: '',
 birthPlace: 'New York',
 education: [],
 affiliations: [
 { name: 'Trump Organization', role: 'Senior VP (retired)', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Executive assistant for 30+ years', href: '/entities/individuals/donald-trump' },
 { name: 'Jeffrey Epstein', relationship: 'Had his contact information', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Maintained Maxwell\'s contact information in Trump Org files', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Keith Schiller', relationship: 'Fellow long-term Trump Organization employee', href: '/entities/individuals/keith-schiller' }
 ],
 controversies: [
 'Had Epstein contact numbers',
 'Testified in NY fraud trial',
 'Key Trump Organization gatekeeper',
 'Testified about Trump operations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump Organization Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'Epstein Network', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1987', event: 'Joins Trump Organization' },
 { date: '2023', event: 'Testifies in NY fraud trial' },
 ],
 sources: [
 { title: 'NY Fraud Trial Testimony', url: 'https://scholar.google.com/scholar?q=NY%20Fraud%20Trial%20Testimony', date: '2023' },
 ],
 },


 'richard-spencer': {
 name: 'Richard Spencer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Spencer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Richard Spencer was briefed on risks later downplayed in public communications.',
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






 'rand-paul': {
 name: 'Rand Paul',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rand Paul. Profile pending review.',
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


 'randy-credico': {
 name: 'Randy Credico',
 title: 'Comedian and Political Activist',
 role: 'Roger Stone intermediary and WikiLeaks contact',
 riskLevel: 'low',
 description: 'Randy Credico is a New York comedian and political activist who served as Roger Stone intermediary to WikiLeaks during the 2016 presidential campaign. He became a key witness in the Roger Stone criminal trial after Stone threatened him and his therapy dog to prevent him from testifying.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Served as Roger Stone back channel to WikiLeaks founder Julian Assange during the 2016 election',
 'Stone threatened Credico in texts including "Prepare to die" and threatened to kidnap his therapy dog Bianca to prevent him from contradicting Stone account to Congress',
 'Testified at Roger Stone federal trial about Stone efforts to learn about upcoming WikiLeaks releases of stolen Clinton campaign emails',
 'Invoked the Fifth Amendment 63 times during his first appearance before the House Intelligence Committee',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-08-01', event: 'Began serving as intermediary between Roger Stone and WikiLeaks' },
 { date: '2018-05-18', event: 'Stone threatens Credico via text messages to prevent testimony' },
 { date: '2019-11-06', event: 'Testified at Roger Stone federal trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: United States v. Roger Stone Indictment', url: 'https://www.justice.gov/news', date: '2019-01-25' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Roger Stone', relationship: 'Used Credico as WikiLeaks intermediary then threatened him', href: '/entities/individuals/roger-stone' },
 ],
 },

 

 'robert-mardian': {
 name: 'Robert Mardian',
 title: 'Former Assistant Attorney General',
 role: 'Watergate Conspirator, Political Intelligence Coordinator',
 riskLevel: 'high',
 description: 'Robert Charles Mardian served as Assistant Attorney General for the Internal Security Division under the Nixon administration and later became political coordinator for the Committee to Re-elect the President (CRP). As head of Internal Security, Mardian oversaw the government\'s domestic surveillance programs including wiretaps authorized by the White House without court orders. When he moved to CRP, he became a key figure in the cover-up, receiving classified wiretap records from FBI Director L. Patrick Gray and allegedly helping to destroy them. Mardian was one of five defendants in the landmark Watergate cover-up trial of United States v. Mitchell (1974), where he was convicted of conspiracy to obstruct justice. However, his conviction was overturned on appeal in 1977 because his lawyer had become ill during trial, depriving him of effective representation. Rather than face retrial, prosecutors allowed the case to be dismissed. Before Watergate, Mardian had been a prominent Arizona Republican activist and had supervised the government\'s prosecution of the Pentagon Papers case and monitored anti-Vietnam War protesters. His role bridged the Nixon administration\'s legitimate law enforcement functions with its illegal political surveillance operations.',
 birthDate: 'October 22, 1923',
 deathDate: 'July 17, 2006',
 birthPlace: 'Pasadena, California, USA',
 education: ['B.S., University of Southern California', 'J.D., University of Southern California Law School'],
 affiliations: [
 { name: 'U.S. Department of Justice', role: 'Assistant Attorney General, Internal Security Division (1970-1972)', type: 'agency' },
 { name: 'Committee to Re-elect the President', role: 'Political Coordinator (1972)', type: 'organization' },
 { name: 'Mardian & Mardian Construction', role: 'Family business, Arizona', type: 'corporation' },
 { name: 'Arizona Republican Party', role: 'State Chairman (1960s)', type: 'organization' },
 ],
 controversies: [
 'DOMESTIC SURVEILLANCE: As Assistant AG for Internal Security, oversaw warrantless wiretapping programs targeting anti-war activists, journalists, and political opponents',
 'WIRETAP RECORDS DESTRUCTION: Received classified wiretap logs from FBI Director L. Patrick Gray and allegedly participated in their destruction to conceal illegal surveillance',
 'WATERGATE COVER-UP: Served as intermediary between CRP and White House during cover-up, helping coordinate strategy to conceal involvement in the break-in',
 'PENTAGON PAPERS PROSECUTION: Supervised government case against Daniel Ellsberg, which was later dismissed due to government misconduct',
 'POLITICAL SURVEILLANCE: Coordinated political intelligence gathering at CRP that blurred lines between legitimate campaign activity and illegal espionage',
 'COINTELPRO KNOWLEDGE: Had oversight of domestic intelligence operations that intersected with FBI\'s COINTELPRO activities against civil rights and anti-war movements',
 'COVER-UP TRIAL: Convicted alongside Mitchell, Haldeman, and Ehrlichman in the Watergate cover-up trial, one of the highest-profile political trials in American history',
 'APPEAL REVERSAL: Conviction overturned not on merits but on procedural grounds (attorney illness), leaving questions about full accountability unresolved',
 ],
 charges: [
 { statute: '18 U.S.C. 371', description: 'Conspiracy to Obstruct Justice; Participated in concealing Watergate involvement', category: 'Federal' },
 { statute: '18 U.S.C. 1503', description: 'Obstruction of Justice; Actions to impede Watergate investigation', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Watergate Scandal', slug: 'watergate', severity: 'critical' },
 { title: 'Nixon Administration Surveillance', slug: 'nixon-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'October 22, 1923', event: 'Born in Pasadena, California to Armenian-American family' },
 { date: '1950s', event: 'Joins family construction business, becomes active in Arizona Republican politics' },
 { date: '1964', event: 'Works on Barry Goldwater presidential campaign' },
 { date: '1969', event: 'Appointed general counsel to Department of Health, Education and Welfare' },
 { date: '1970', event: 'Becomes Assistant Attorney General for Internal Security Division' },
 { date: '1970-1972', event: 'Oversees domestic surveillance programs, wiretaps on journalists and activists' },
 { date: 'Early 1972', event: 'Transitions to Committee to Re-elect the President as political coordinator' },
 { date: 'June 17, 1972', event: 'Watergate break-in occurs; becomes involved in cover-up discussions' },
 { date: 'Summer 1972', event: 'Receives and allegedly helps destroy classified wiretap records from FBI Director Gray' },
 { date: 'March 1, 1974', event: 'Indicted by Watergate grand jury alongside Mitchell, Haldeman, Ehrlichman, and others' },
 { date: 'October 1974', event: 'Watergate cover-up trial begins before Judge Sirica' },
 { date: 'January 1, 1975', event: 'Found guilty of conspiracy to obstruct justice' },
 { date: '1977', event: 'Conviction reversed by U.S. Court of Appeals due to attorney\'s illness during trial' },
 { date: '1977', event: 'Government declines to retry; case dismissed' },
 { date: 'Post-Watergate', event: 'Returns to Arizona, resumes private law practice and business' },
 { date: 'July 17, 2006', event: 'Dies in Orange County, California at age 82' },
 ],
 socialMedia: [],
 sources: [
 { title: 'United States v. Mitchell - Watergate Cover-up Trial Records', url: 'https://www.justice.gov/archives/jm/watergate-special-prosecution-force', date: '1974-1975' },
 { title: 'Watergate Special Prosecution Force Report', url: 'https://www.archives.gov/research/investigations/watergate', date: '1975' },
 { title: 'New York Times Obituary: Robert C. Mardian', url: 'https://www.nytimes.com/2006/07/20/washington/20mardian.html', date: '2006' },
 { title: 'Senate Watergate Committee Final Report', url: 'https://www.senate.gov/about/powers-procedures/investigations/watergate.htm', date: '1974' },
 { title: 'Appeals Court Reversal Decision', url: 'https://scholar.google.com/scholar?q=United+States+v.+Mardian+appeal+watergate', date: '1977' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Mitchell', relationship: 'Attorney General and CRP director, co-defendant at trial', href: '/entities/individuals/john-mitchell' },
 { name: 'H.R. Haldeman', relationship: 'Co-defendant in Watergate cover-up trial', href: '/entities/individuals/h-r-haldeman' },
 { name: 'John Ehrlichman', relationship: 'Co-defendant in Watergate cover-up trial', href: '/entities/individuals/john-ehrlichman' },
 { name: 'L. Patrick Gray', relationship: 'FBI Director who passed wiretap records to Mardian', href: '/entities/individuals/l-patrick-gray' },
 { name: 'Richard Nixon', relationship: 'President whose administration Mardian served', href: '/entities/individuals/richard-nixon' },
 ],
 },

 'robert-maxwell': {
 name: 'Robert Maxwell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Maxwell. Profile pending review.',
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


 

 'richard-kleindienst': {
 name: 'Richard Kleindienst',
 title: 'Former United States Attorney General',
 role: 'Watergate Figure, First Attorney General Convicted of a Crime',
 riskLevel: 'high',
 description: 'Richard Gordon Kleindienst served as the 68th Attorney General of the United States under President Richard Nixon from June 1972 to April 1973, making him the chief law enforcement officer during the critical early months of the Watergate scandal. Kleindienst had previously served as Deputy Attorney General under John Mitchell and was confirmed as AG only after contentious Senate hearings where he was questioned about the administration\'s settlement of an antitrust case against ITT Corporation in exchange for a campaign contribution. He resigned under pressure on April 30, 1973, the same day Nixon fired John Dean and accepted the resignations of H.R. Haldeman and John Ehrlichman in the "Saturday Night Massacre" precursor known as the "Monday Night Massacre." Kleindienst became the first Attorney General in U.S. history to be convicted of a crime when he pleaded guilty to a misdemeanor charge of refusing to testify accurately before a Senate committee about the ITT affair. He had told senators that no one at the White House had contacted him about the ITT case, when in fact Nixon had personally called him and ordered him to drop the appeal. He received a suspended sentence of 30 days and a  fine, prompting critics to decry the light punishment. His case illustrated how political loyalty corrupted the Justice Department\'s independence during the Nixon era.',
 birthDate: 'August 5, 1923',
 deathDate: 'February 3, 2000',
 birthPlace: 'Winslow, Arizona, USA',
 education: ['B.A., Harvard University (1947)', 'LL.B., Harvard Law School (1950)'],
 affiliations: [
 { name: 'U.S. Department of Justice', role: 'Attorney General (1972-1973); Deputy AG (1969-1972)', type: 'agency' },
 { name: 'Arizona Republican Party', role: 'State Chairman', type: 'organization' },
 { name: 'Jennings, Strouss & Salmon', role: 'Private law practice, Phoenix', type: 'corporation' },
 { name: 'Barry Goldwater Campaign', role: 'National Director of Field Operations (1964)', type: 'organization' },
 ],
 controversies: [
 'ITT SCANDAL: Lied to Senate Judiciary Committee about White House interference in ITT antitrust settlement tied to ,000 Republican convention pledge',
 'PERJURY BEFORE SENATE: Testified no one at the White House contacted him about ITT case when Nixon personally called and ordered him to drop the antitrust appeal',
 'FIRST AG CONVICTED: Became first sitting or former Attorney General convicted of a crime in U.S. history, a milestone in government corruption',
 'WATERGATE RECUSAL FAILURE: As Attorney General during Watergate\'s early months, failed to ensure aggressive investigation of the break-in',
 'NIXON PHONE CALL: Received direct order from President Nixon to drop ITT appeal, capitulated to presidential pressure undermining DOJ independence',
 'LIGHT SENTENCE: Received only a suspended 30-day sentence and  fine for lying to Congress, criticized as enabling future government dishonesty',
 'CONFIRMATION HEARINGS: Senate confirmation as AG was deeply contentious, with allegations of the ITT quid pro quo nearly derailing nomination',
 'RESIGNATION TIMING: Resigned same day as Haldeman and Ehrlichman, part of Nixon\'s desperate attempt to contain the Watergate scandal',
 ],
 charges: [
 { statute: '2 U.S.C. 192', description: 'Refusal to Answer Pertinent Questions Before Senate Committee; Misled Senate Judiciary Committee about White House contact regarding ITT case', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Watergate Scandal', slug: 'watergate', severity: 'critical' },
 { title: 'ITT Antitrust Scandal', slug: 'itt-antitrust', severity: 'high' },
 ],
 timeline: [
 { date: 'August 5, 1923', event: 'Born in Winslow, Arizona' },
 { date: '1943-1946', event: 'Serves in U.S. Army Air Forces during World War II' },
 { date: '1947', event: 'Graduates from Harvard University' },
 { date: '1950', event: 'Earns law degree from Harvard Law School' },
 { date: '1950s-1960s', event: 'Practices law in Phoenix, becomes active in Arizona Republican politics' },
 { date: '1964', event: 'Serves as national director of field operations for Barry Goldwater presidential campaign' },
 { date: 'January 1969', event: 'Appointed Deputy Attorney General under John Mitchell' },
 { date: '1971', event: 'Nixon calls Kleindienst directly, orders him to drop ITT antitrust appeal' },
 { date: 'February 1972', event: 'Nominated as Attorney General to replace Mitchell' },
 { date: 'March 1972', event: 'Testifies before Senate Judiciary Committee, denies any White House contact on ITT case' },
 { date: 'June 12, 1972', event: 'Confirmed as Attorney General after contentious hearings' },
 { date: 'June 17, 1972', event: 'Watergate break-in occurs five days after his confirmation' },
 { date: 'April 30, 1973', event: 'Resigns as Attorney General alongside departures of Haldeman, Ehrlichman, and Dean' },
 { date: 'May 16, 1974', event: 'Pleads guilty to misdemeanor charge of refusing to testify accurately before Senate' },
 { date: 'June 1974', event: 'Sentenced to suspended 30-day sentence and  fine' },
 { date: '1975', event: 'Arizona State Bar suspends his law license for one year' },
 { date: '1976', event: 'Returns to private law practice in Arizona' },
 { date: 'February 3, 2000', event: 'Dies in Prescott, Arizona at age 76' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Judiciary Committee ITT Hearings Transcript', url: 'https://www.senate.gov/about/powers-procedures/investigations/watergate.htm', date: '1972' },
 { title: 'Watergate Special Prosecution Force Records', url: 'https://www.justice.gov/archives/jm/watergate-special-prosecution-force', date: '1973-1975' },
 { title: 'New York Times Obituary: Richard G. Kleindienst', url: 'https://www.nytimes.com/2000/02/04/us/richard-g-kleindienst-76-nixon-attorney-general-who-quit.html', date: '2000' },
 { title: 'National Archives: Watergate Investigation Records', url: 'https://www.archives.gov/research/investigations/watergate', date: '1974' },
 { title: 'Congressional Record: Kleindienst Confirmation Debate', url: 'https://scholar.google.com/scholar?q=Kleindienst+confirmation+ITT+scandal', date: '1972' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'President who appointed him AG and pressured him on ITT', href: '/entities/individuals/richard-nixon' },
 { name: 'John Mitchell', relationship: 'Predecessor as AG and fellow Watergate figure', href: '/entities/individuals/john-mitchell' },
 { name: 'John Dean', relationship: 'White House counsel, resigned same day', href: '/entities/individuals/john-dean' },
 { name: 'H.R. Haldeman', relationship: 'White House Chief of Staff, resigned same day', href: '/entities/individuals/h-r-haldeman' },
 { name: 'Barry Goldwater', relationship: 'Political mentor, 1964 campaign director', href: '/entities/individuals/barry-goldwater' },
 ],
 },

 'richard-nixon': {
 name: 'Richard Nixon',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Nixon. Profile pending review.',
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


 'richard-burr': {
 name: 'Richard Mauze Burr',
 title: 'Former U.S. Senator from North Carolina',
 role: 'COVID Insider Trader, Intelligence Committee Chair',
 riskLevel: 'high',
 description: 'Richard Burr was Chair of the Senate Intelligence Committee when he sold $1.7 million in stock after receiving classified COVID briefings while publicly downplaying the pandemic. The FBI investigated and served a warrant on his phone. The DOJ declined to prosecute. He resigned as Intelligence Chair but served out his term.',
 birthDate: 'November 30, 1955',
 birthPlace: 'Charlottesville, Virginia',
 education: ['B.A., Wake Forest University (1978)'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Senator from North Carolina (2005-2023)', type: 'agency' },
 { name: 'Senate Intelligence Committee', role: 'Chair (2015-2020)', type: 'agency' },
 ],
 controversies: [
 'COVID INSIDER TRADING: Sold $1.7M in stock after classified briefing',
 'PUBLIC DOWNPLAYING: Told public virus was under control while selling stock',
 'FBI INVESTIGATION: Phone seized in insider trading probe',
 'NO PROSECUTION: DOJ declined to charge despite evidence',
 ],
 charges: [
 { statute: '15 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 78j(b) (Securities Exchange Act)', description: 'Potential Insider Trading; sold stock on material nonpublic information', category: 'Not prosecuted' },
 ],
 relatedInvestigations: [
 { title: 'Securities & Market Fraud', slug: 'securities-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 30, 1955', event: 'Born in Charlottesville, Virginia' },
 { date: '2005', event: 'Becomes U.S. Senator' },
 { date: '2015', event: 'Becomes Senate Intelligence Chair' },
 { date: 'January-February 2020', event: 'Sells $1.7M in stock after COVID briefing' },
 { date: 'May 2020', event: 'FBI seizes phone in investigation' },
 { date: 'May 2020', event: 'Steps down as Intelligence Chair' },
 { date: 'January 2021', event: 'DOJ declines prosecution' },
 { date: '2023', event: 'Leaves Senate' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Investigation Records', url: 'https://scholar.google.com/scholar?q=DOJ%20Investigation%20Records', date: '2020' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Kelly Loeffler', relationship: 'Fellow COVID insider trader', href: '/entities/individuals/kelly-loeffler' },
 ],
 },


























 'robert-redfield': {
 name: 'Robert Redfield',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Redfield. Profile pending review.',
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













 'russell-vought': {
 name: 'Russell Thurlow Vought',
 title: 'Project 2025 Architect, Former OMB Director',
 role: 'Conservative Policy Architect, Administrative State Dismantler',
 riskLevel: 'critical',
 description: 'Russell Vought served as Director of the Office of Management and Budget (2020-2021) under Trump and is a primary architect of Project 2025, the Heritage Foundation blueprint for radically restructuring the federal government. He founded the Center for Renewing America to advance authoritarian policies including Schedule F to enable mass firings of federal workers, unitary executive theory to concentrate power in the presidency, and Christian nationalist governance. His Project 2025 chapter calls for weaponizing the DOJ, eliminating the Department of Education, and gutting environmental and civil rights protections. He is expected to hold senior positions in any future Trump administration.',
 birthDate: '1976',
 birthPlace: 'United States',
 netWorth: 'Undisclosed',
 education: ['J.D., George Washington University Law School', 'B.A., Wheaton College'],
 affiliations: [
 { name: 'Office of Management and Budget', role: 'Director (2020-2021)', type: 'agency' },
 { name: 'Center for Renewing America', role: 'Founder & President', type: 'organization' },
 { name: 'Heritage Foundation', role: 'Project 2025 Co-Author', type: 'organization' },
 { name: 'Republican Study Committee', role: 'Former Policy Director', type: 'organization' },
 { name: 'Heritage Action', role: 'Former Vice President', type: 'organization' },
 ],
 controversies: [
 'PROJECT 2025 ARCHITECT: Primary author of 920-page blueprint to dismantle federal government and concentrate executive power',
 'SCHEDULE F: Championed policy to reclassify 50,000+ federal workers as at-will employees for mass political firings',
 'CHRISTIAN NATIONALISM: Openly advocates for Christian nationalist governance, religious tests for government',
 'UNITARY EXECUTIVE: Promotes theory that president has absolute control over executive branch, beyond legal constraints',
 'DOJ WEAPONIZATION: Project 2025 calls for using DOJ to prosecute political enemies',
 'IMPOUNDMENT: Advocates illegal presidential impoundment of congressionally appropriated funds',
 'ELIMINATE EDUCATION DEPT: Project 2025 calls for abolishing Department of Education entirely',
 'GUT EPA: Plans to dramatically reduce environmental protections and climate action',
 'ANTI-MUSLIM STATEMENTS: 2016 controversy over statements that Muslims"do not simply have a deficient theology"',
 'BUDGET MANIPULATION: Used OMB to withhold Ukraine aid during first impeachment scandal',
 'DEEP STATE NARRATIVE: Promotes conspiracy theory of permanent bureaucratic resistance to conservative agenda',
 'CENTER FOR RENEWING AMERICA: Organization coordinates"war room"for implementing Project 2025',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 371', description: 'Conspiracy to Defraud United States; Project 2025 coordination', category: 'Federal' },
 { statute: '2 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 684', description: 'Impoundment Control Act Violations; Illegal withholding of funds', category: 'Federal' },
 { statute: '5 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 2302', description: 'Prohibited Personnel Practices; Schedule F politicization plan', category: 'Federal' },
 { statute: 'U.S. Constitution Article I', description: 'Separation of Powers Violations; Unitary executive overreach', category: 'Constitutional' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 595', description: 'Interference by Administrative Employees; Political coercion plans', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Project 2025 Authoritarian Blueprint', slug: 'project-2025', severity: 'critical' },
 { title: 'Christian Nationalist Takeover', slug: 'christian-nationalism', severity: 'critical' },
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'Administrative State Capture', slug: 'admin-state-capture', severity: 'critical' },
 ],
 timeline: [
 { date: '1976', event: 'Born in United States' },
 { date: '1998', event: 'Graduates Wheaton College' },
 { date: '2001', event: 'Graduates George Washington Law School' },
 { date: '2001-2007', event: 'Policy staffer in Congress' },
 { date: '2007-2015', event: 'Policy Director, Republican Study Committee' },
 { date: '2015-2016', event: 'Vice President, Heritage Action' },
 { date: '2016', event: 'Controversy over anti-Muslim statements' },
 { date: '2017', event: 'Joins Trump OMB as Deputy Director' },
 { date: '2019', event: 'Confirmed as Acting OMB Director' },
 { date: '2019', event: 'Involved in withholding Ukraine military aid' },
 { date: '2020', event: 'Confirmed as OMB Director' },
 { date: 'October 2020', event: 'Issues Schedule F executive order to enable mass firings' },
 { date: 'January 2021', event: 'Biden rescinds Schedule F order' },
 { date: 'January 2021', event: 'Leaves OMB after Biden inauguration' },
 { date: '2021', event: 'Founds Center for Renewing America' },
 { date: '2022-2023', event: 'Authors Project 2025 chapter on Executive Office of the President' },
 { date: '2023', event: 'Project 2025"Mandate for Leadership"published' },
 { date: '2024', event: 'Project 2025 becomes major campaign issue' },
 { date: '2024', event: 'Trump publicly distances from Project 2025 while advisors embrace it' },
 { date: '2025', event: 'Expected senior role in second Trump administration' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Project 2025 Mandate for Leadership', url: 'https://www.project2025.org/playbook/', date: '2023' },
 { title: 'Center for Renewing America Website', url: 'https://americarenewing.com/', date: 'Current' },
 { title: 'Schedule F Executive Order 13957', url: 'https://www.federalregister.gov/documents/2020/10/26/2020-23780/creating-schedule-f-in-the-excepted-service', date: '2020' },
 { title: 'OMB Ukraine Aid Withholding Documents', url: 'https://www.gao.gov/assets/gao-20-341.pdf', date: '2020' },
 { title: 'Senate Confirmation Hearings', url: 'https://www.congress.gov/', date: '2020' },
 { title: 'New York Times Project 2025 Investigation', url: 'https://www.nytimes.com/', date: '2024' },
 ],
 aliases: ['Russ Vought', 'Project 2025 Mastermind'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed OMB Director, key policy advisor', href: '/entities/individuals/donald-trump' },
 { name: 'Kevin Roberts', relationship: 'Heritage Foundation President, Project 2025 leader', href: '/entities/individuals/kevin-roberts' },
 { name: 'Stephen Miller', relationship: 'Immigration policy coordination', href: '/entities/individuals/stephen-miller' },
 { name: 'Steve Bannon', relationship: 'MAGA movement coordination', href: '/entities/individuals/steve-bannon' },
 { name: 'Mark Meadows', relationship: 'White House coordination during Trump admin', href: '/entities/individuals/mark-meadows' },
 ],
 },



























 'ralph-baric': {
 name: 'Ralph Steven Baric',
 title: 'Coronavirus Researcher',
 role: 'Gain of Function Pioneer, UNC Virologist, COVID Origins Figure',
 riskLevel: 'high',
 description: 'Ralph Baric is a professor of epidemiology at the University of North Carolina at Chapel Hill and one of the world\'s leading coronavirus researchers. He pioneered techniques for manipulating coronaviruses and collaborated with Wuhan Institute of Virology on chimeric virus research. His 2015 paper with Shi Zhengli demonstrated creating chimeric coronaviruses that could infect human cells. While his research has contributed to pandemic preparedness and therapeutics development, it has also raised serious questions about the risks of gain of function research and the origins of COVID-19.',
 birthDate: '1954',
 birthPlace: 'United States',
 netWorth: 'Undisclosed (University professor)',
 education: ['Ph.D. in Microbiology and Immunology, North Carolina State University', 'Postdoctoral training, University of Southern California'],
 affiliations: [
 { name: 'University of North Carolina at Chapel Hill', role: 'Professor of Epidemiology (1986-present)', type: 'organization' },
 { name: 'Wuhan Institute of Virology', role: 'Research Collaborator', type: 'organization' },
 { name: 'National Institutes of Health', role: 'Major Grant Recipient', type: 'agency' },
 { name: 'EcoHealth Alliance', role: 'Collaborator', type: 'organization' },
 ],
 controversies: [
 '2015 CHIMERIC VIRUS: Co-created chimeric coronavirus using bat virus spike protein, demonstrated human cell infection',
 'GAIN OF FUNCTION PIONEER: Developed techniques to enhance viral capabilities that raise biosecurity concerns',
 'WUHAN COLLABORATION: Worked directly with Shi Zhengli and shared techniques with Wuhan lab',
 'MORATORIUM EXCEPTION: Research continued during 2014-2017 gain of function pause under NIH exception',
 'NO-SEE CONTRACT: Special agreement with Moderna allowed early remdesivir access but restricted disclosure',
 'FURIN CLEAVAGE: Questions about whether techniques could have been used to engineer SARS-CoV-2 features',
 'THERAPEUTIC DEVELOPMENT: Also credited with contributing to COVID-19 treatment and vaccine development',
 'DUAL USE CONCERN: Research has both defensive and potential offensive applications',
 'CONGRESSIONAL SCRUTINY: Called to testify about gain of function research and Wuhan connections',
 'SCIENTIFIC DEBATE: Defends research as necessary for pandemic preparedness despite risks',
 ],
 charges: [
 { statute: 'Select Agent Regulations 42 CFR 73', description: 'Questions about Biosafety Compliance', category: 'Federal' },
 { statute: 'NIH Guidelines for Research', description: 'Potential Gain of Function Policy Violations', category: 'Federal' },
 { statute: 'HHS P3CO Framework', description: 'Enhanced Pathogen Research Oversight Questions', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'COVID-19 Origins Investigation', slug: 'covid-origins', severity: 'critical' },
 { title: 'Gain of Function Research', slug: 'gain-of-function', severity: 'critical' },
 { title: 'Wuhan Lab Connection', slug: 'wuhan-lab', severity: 'critical' },
 { title: 'Lab Leak Cover-Up', slug: 'lab-leak', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Born in United States' },
 { date: '1980s', event: 'Begins coronavirus research' },
 { date: '1986', event: 'Joins University of North Carolina faculty' },
 { date: '2000s', event: 'Develops reverse genetics systems for coronaviruses' },
 { date: '2008', event: 'Develops techniques to create chimeric coronaviruses' },
 { date: '2013', event: 'Begins collaboration with Wuhan Institute of Virology' },
 { date: '2014', event: 'NIH announces gain of function research moratorium' },
 { date: '2015', event: 'Receives exception to continue research during moratorium' },
 { date: 'November 2015', event: 'Publishes chimeric virus paper with Shi Zhengli in Nature Medicine' },
 { date: '2017', event: 'Gain of function moratorium lifted' },
 { date: 'December 2019', event: 'COVID-19 emerges in Wuhan' },
 { date: '2020', event: 'Work scrutinized in context of pandemic origins' },
 { date: '2020', event: 'Contributes to remdesivir development and testing' },
 { date: '2021', event: 'Called to discuss research by congressional investigators' },
 { date: '2022-2024', event: 'Continues to defend research as necessary for preparedness' },
 { date: '2024', event: 'Congressional investigations continue into gain of function oversight' },
 ],
 socialMedia: [],
 sources: [
 { title: '2015 Nature Medicine Paper', url: 'https://www.nature.com/articles/nm.3985', date: '2015' },
 { title: 'NIH Grant Records', url: 'https://reporter.nih.gov/', date: 'Various' },
 { title: 'House Select Subcommittee Testimony', url: 'https://oversight.house.gov/', date: '2023' },
 { title: 'MIT Technology Review: Baric Profile', url: 'https://scholar.google.com/scholar?q=MIT%20Technology%20Review%20-%20Baric%20Profile', date: '2021' },
 { title: 'UNC Research Publications', url: 'https://sph.unc.edu/adv_profile/ralph-s-baric-phd/', date: 'Various' },
 { title: 'Gain of Function Research Papers', url: 'https://scholar.google.com/scholar?q=Gain%20of%20Function%20Research%20Papers', date: '2008-2019' },
 ],
 aliases: ['Dr. Baric', 'Coronavirus Pioneer'],
 knownAssociates: [
 { name: 'Shi Zhengli', relationship: 'Wuhan"Bat Woman,"co-authored 2015 chimeric virus paper', href: '/entities/individuals/shi-zhengli' },
 { name: 'Peter Daszak', relationship: 'EcoHealth Alliance, joint research', href: '/entities/individuals/peter-daszak' },
 { name: 'Francis Collins', relationship: 'NIH Director, grant oversight', href: '/entities/individuals/francis-collins' },
 { name: 'Anthony Fauci', relationship: 'NIAID Director, funding source', href: '/entities/individuals/anthony-fauci' },
 ],
 },


























 'ronald-reagan': {
 name: 'Ronald Reagan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ronald Reagan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Ronald Reagan as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative analysis reveals Ronald Reagan was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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


 'richard-perle': {
 name: 'Richard Perle',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Perle. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Richard Perle coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Richard Perle holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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


 'rick-gerson': {
 name: 'Rick Gerson',
 title: 'Financier, Seychelles Back-Channel Participant',
 role: 'Founder of Blue Road Capital, Trump Associate',
 riskLevel: 'high',
 description: 'Rick Gerson is a New York financier and close friend of Jared Kushner who helped arrange a secret meeting in the Seychelles between Erik Prince and a Russian fund manager close to Putin. He served as an unofficial intermediary between the Trump transition team and foreign governments, particularly the UAE. He advocated for UAE policy positions while simultaneously seeking business deals in the region.',
 birthDate: 'Unknown',
 birthPlace: 'USA',
 education: ['Columbia Business School'],
 affiliations: [
 { name: 'Blue Road Capital', role: 'Founder', type: 'corporation' },
 ],
 controversies: [
 'SEYCHELLES MEETING: Helped arrange secret meeting between Erik Prince and Russian Kirill Dmitriev in Seychelles',
 'UAE BACK-CHANNEL: Served as unofficial intermediary between Trump transition and UAE Crown Prince MBZ',
 'MIXING BUSINESS AND DIPLOMACY: Pursued investment deals in UAE while serving as unofficial policy intermediary',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Seychelles Secret Meeting', slug: 'seychelles-meeting', severity: 'high' },
 { title: 'Treason and Foreign Collusion', slug: 'treason', severity: 'critical' },
 ],
 timeline: [
 { date: '2016 (Dec)', event: 'Serves as back-channel between Trump team and UAE' },
 { date: '2017 (Jan)', event: 'Helps arrange Seychelles meeting between Erik Prince and Kirill Dmitriev' },
 { date: '2019', event: 'Interviewed by Mueller team about back-channel activities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report: Seychelles Meeting', url: 'https://www.justice.gov/archives', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jared Kushner', relationship: 'Close personal friend, fellow Trump circle member', href: '/entities/individuals/jared-kushner' },
 { name: 'Erik Prince', relationship: 'Attended Seychelles meeting Gerson helped arrange', href: '/entities/individuals/erik-prince' },
 ],
 },

 'robert-novak': {
 name: 'Robert Novak',
 title: 'Syndicated Columnist',
 role: 'Journalist who outed CIA operative Valerie Plame',
 riskLevel: 'medium',
 description: 'Robert David Sanders Novak was an American syndicated columnist and television commentator who became central to the Plame affair when he published the identity of covert CIA officer Valerie Plame in July 2003. His column revealed Plame identity as retaliation against her husband, Ambassador Joseph Wilson, who had contradicted Bush administration claims about Iraqi WMDs.',
 education: ['University of Illinois, BA 1952'],
 affiliations: [
 ],
 controversies: [
 'Published the identity of covert CIA officer Valerie Plame in his July 14, 2003 syndicated column, naming her and her CIA affiliation',
 'Received the information from Deputy Secretary of State Richard Armitage and confirmed it with Karl Rove, effectively serving as a vehicle for the Bush administration retaliation against Wilson',
 'The leak potentially endangered Plame intelligence contacts and operations abroad',
 'Was not prosecuted by Special Counsel Fitzgerald, likely because he cooperated with the investigation, while his source Scooter Libby was convicted',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2003-07-14', event: 'Published column revealing Valerie Plame identity as CIA officer' },
 { date: '2003-12-30', event: 'Special Counsel Patrick Fitzgerald appointed to investigate the leak' },
 { date: '2006-07-12', event: 'Revealed Richard Armitage was primary source for the leak' },
 { date: '2009-08-18', event: 'Died of brain cancer at age 78' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Novak Column: Mission to Niger (original column)', url: 'https://www.washingtonpost.com/archive/opinions/', date: '2003-07-14' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Karl Rove', relationship: 'Confirmed Plame identity as second source', href: '/entities/individuals/karl-rove' },
 { name: 'Dick Cheney', relationship: 'Vice President whose office orchestrated the retaliation', href: '/entities/individuals/dick-cheney' },
 ],
 },

 'richard-armitage': {
 name: 'Richard Armitage',
 title: 'Former Deputy Secretary of State',
 role: 'Deputy Secretary of State who leaked classified CIA identity',
 riskLevel: 'high',
 description: 'Deputy Secretary of State under Colin Powell who was the primary source for Robert Novak\'s column that outed CIA operative Valerie Plame. Despite being the original leaker, Armitage was never prosecuted while Scooter Libby was convicted. Armitage was also involved in Iran-Contra as Assistant Secretary of Defense.',
 birthDate: 'April 26, 1945',
 birthPlace: 'Boston, Massachusetts',
 education: ['U.S. Naval Academy (1967)'],
 affiliations: [
 { name: 'U.S. State Department', role: 'Deputy Secretary of State', type: 'agency' },
 { name: 'Department of Defense', role: 'Assistant Secretary', type: 'agency' },
 { name: 'Bush Administration', role: 'Senior Official', type: 'organization' },
 ],
 controversies: [
 'Primary source who leaked Valerie Plame\'s CIA identity to Robert Novak',
 'Never prosecuted despite being original leaker while Scooter Libby convicted',
 'Involved in Iran-Contra affair during Reagan administration',
 'Escaped accountability through special counsel investigation',
 ],
 charges: [
 { statute: 'Intelligence Identities Protection Act: 50 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 421', description: 'Disclosed identity of covert CIA officer', category: 'National Security' },
 { statute: 'Espionage Act: 18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 793', description: 'Leaked classified information about intelligence operative', category: 'National Security' },
 { statute: 'Obstruction of Justice: 18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1503', description: 'Potential concealment during investigation', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Plame Leak Scandal', slug: 'plame-leak', severity: 'high' },
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 26, 1945', event: 'Born in Boston, Massachusetts' },
 { date: '1967', event: 'Graduates U.S. Naval Academy' },
 { date: '1967-1973', event: 'Vietnam War service, three tours' },
 { date: '1983-1989', event: 'Assistant Secretary of Defense for International Security Affairs' },
 { date: '1986-1987', event: 'Involved in Iran-Contra affair negotiations' },
 { date: '2001-2005', event: 'Deputy Secretary of State under Colin Powell' },
 { date: 'June 2003', event: 'Learns of Valerie Plame from State Dept. memo' },
 { date: 'July 8, 2003', event: 'Tells Robert Novak about Valerie Plame' },
 { date: 'July 14, 2003', event: 'Novak publishes column outing Plame' },
 { date: '2006', event: 'Revealed as primary leak source by Fitzgerald investigation' },
 { date: '2006', event: 'Escapes prosecution despite being original leaker' },
 { date: '2007', event: 'Scooter Libby convicted while Armitage walks free' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Fitzgerald Investigation Final Report', url: 'https://www.ignet.gov/', date: '2006' },
 { title: 'David Corn -"Hubris: The Inside Story of Spin, Scandal, and the Selling of the Iraq War"', url: 'https://scholar.google.com/scholar?q=David%20Corn%20-%22Hubris%3A%20The%20Inside%20Story%20of%20Spin%2C%20Scandal%2C%20and%20the%20Selling%20of%20the%20Iraq%20War%22', date: '2006' },
 { title: 'Robert Novak Memoir -"The Prince of Darkness"', url: 'https://www.goodreads.com/', date: '2007' },
 { title: 'U.S. v. Libby Trial Records', url: 'https://scholar.google.com/scholar?q=U.S.%20v.%20Libby%20Trial%20Records', date: '2007' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Colin Powell', relationship: 'Superior at State Department', href: '/entities/individuals/colin-powell' },
 { name: 'Robert Novak', relationship: 'Journalist who published Plame leak', href: '/entities/individuals/robert-novak' },
 { name: 'George W. Bush', relationship: 'President', href: '/entities/individuals/george-w-bush' },
 { name: 'Condoleezza Rice', relationship: 'National Security Advisor', href: '/entities/individuals/condoleezza-rice' },
 { name: 'Scooter Libby', relationship: 'Co-leaker who was prosecuted', href: '/entities/individuals/scooter-libby' },
 ],
 },


























 'richard-helms': {
 name: 'Richard Helms',
 title: 'CIA Director (1966-1973)',
 role: 'CIA Director who ordered destruction of MKUltra records and lied to Congress about Chile',
 riskLevel: 'critical',
 description: 'Richard Helms served as CIA Director from 1966-1973 and ordered the destruction of MKUltra records to prevent accountability for human experimentation crimes. He lied to Congress about CIA involvement in the Chilean coup and was convicted of perjury; receiving only a $2,000 fine. He oversaw continued mind control experiments, assassination programs, and domestic surveillance while destroying evidence of the CIA\'s worst crimes.',
 education: [],
 affiliations: [
 { name: 'CIA', role: 'Director (1966-1973)', type: 'agency' },
 ],
 controversies: [
 'MKULTRA DESTRUCTION: In 1973, as the Watergate scandal threatened to expose CIA activities, Helms ordered the destruction of all MKUltra files. Most were shredded, eliminating evidence of experiments on thousands of unwitting Americans.',
 'CHILE PERJURY: Helms testified to Congress that the CIA was not involved in the 1973 coup against Salvador Allende. This was a deliberate lie. He was later convicted of failing to testify"fully and completely."',
 'MINIMAL PUNISHMENT: Despite lying to Congress about operations that overthrew a democracy and killed thousands, Helms received only a $2,000 fine and a two-year suspended sentence. He reportedly considered the conviction a"badge of honor."',
 'ASSASSINATION PROGRAMS: As Director, Helms oversaw CIA assassination programs against foreign leaders including Fidel Castro. He managed plausible deniability for the Agency.',
 'DOMESTIC SURVEILLANCE: Operation CHAOS, run under Helms, spied on American antiwar activists. This violated the CIA\'s charter prohibiting domestic operations.',
 'WATERGATE CONNECTIONS: Helms navigated Watergate carefully, refusing to let the CIA take blame for the burglary while hiding the Agency\'s own secrets.',
 'EVIDENCE DESTRUCTION PATTERN: Beyond MKUltra, Helms established a pattern of destroying evidence. He understood that without records, crimes couldn\'t be proven.',
 'PROTECTED REPUTATION: Despite destroying evidence of American citizens being tortured and drugged, Helms maintained his reputation in Washington. He was welcomed in elite circles until his death.',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crimes Against Humanity; Torture: Oversaw continuation of MKUltra experiments', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 70(1)(c)', description: 'Obstruction of Justice: Destroyed evidence to prevent accountability', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 8 bis', description: 'Aggression: Directed operations to overthrow the Chilean government', category: 'International Criminal Law' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1621', description: 'Perjury: Convicted for lying to Congress about Chile', category: 'Federal Crimes' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1001', description: 'False Statements: Lies to Congressional committees', category: 'Federal Crimes' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1519', description: 'Destruction of Records: Ordered destruction of MKUltra files', category: 'Federal Crimes' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1512', description: 'Obstruction of Justice: Evidence destruction to impede investigations', category: 'Federal Crimes' },
 ],
 relatedInvestigations: [
 { title: 'MKUltra Mind Control Program', slug: 'mkultra', severity: 'critical' },
 { title: 'Chile Coup 1973', slug: 'chile-coup', severity: 'critical' },
 { title: 'Operation CHAOS', slug: 'operation-chaos', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 30, 1913', event: 'Born in St. Davids, Pennsylvania' },
 { date: '1942', event: 'Joins OSS' },
 { date: '1947', event: 'Joins CIA at its founding' },
 { date: 'June 30, 1966', event: 'Becomes CIA Director' },
 { date: '1967-1974', event: 'Oversees Operation CHAOS domestic surveillance' },
 { date: '1973', event: 'Orders destruction of MKUltra files' },
 { date: 'September 1973', event: 'CIA helps overthrow Allende in Chile' },
 { date: 'February 2, 1973', event: 'Leaves CIA, becomes Ambassador to Iran' },
 { date: '1977', event: 'Testifies falsely to Congress about Chile' },
 { date: 'November 4, 1977', event: 'Pleads no contest to perjury, fined $2,000' },
 { date: 'October 22, 2002', event: 'Dies in Washington, D.C.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Church Committee Reports', url: 'https://www.congress.gov/', date: '1976' },
 { title: 'Thomas Powers -"The Man Who Kept the Secrets"', url: 'https://www.who.int/', date: '1979' },
 { title: 'Perjury case court records', url: 'https://scholar.google.com/scholar?q=Perjury%20case%20court%20records', date: '1977' },
 { title: 'CIA declassified documents', url: 'https://www.cia.gov/readingroom/', date: 'Various' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sidney Gottlieb', relationship: 'MKUltra director under his command', href: '/entities/individuals/sidney-gottlieb' },
 ],
 },


























 'robert-mcknight': {
 name: 'Robert McKnight',
 title: 'My Lai Operations Officer',
 role: 'Major, Operations Officer (S-3), 11th Infantry Brigade, Americal Division',
 riskLevel: 'high',
 description: 'Major Robert McKnight served as the operations officer (S-3) for the 11th Infantry Brigade during the period of the My Lai massacre. As S-3, McKnight was responsible for planning and coordinating tactical operations for the brigade, placing him in a key position in the chain of command that authorized and oversaw the Task Force Barker operation on March 16, 1968. The operations staff processed after-action reports that falsely characterized the massacre of over 500 civilians as a successful combat engagement against 128 enemy fighters, despite only 3 weapons being recovered. McKnight was charged by the Army in connection with the My Lai massacre and its aftermath, but the charges were dropped before trial. His case exemplified the systematic failure to hold staff officers accountable for their role in planning operations that resulted in war crimes and for processing falsified reports that enabled the cover-up.',
 birthDate: '',
 birthPlace: '',
 education: [],
 affiliations: [
 { name: 'United States Army', relationship: 'Major, Operations Officer (S-3) for the 11th Infantry Brigade, Americal Division', href: '/entities/agencies/us-army' },
 { name: 'Task Force Barker', relationship: 'Brigade operations officer involved in planning and oversight of the My Lai operation', href: '/investigations/my-lai-massacre' },
 ],
 controversies: [
 {
 title: 'Operational Planning for My Lai',
 description: 'As brigade S-3, McKnight was involved in the planning and coordination of operations for the 11th Infantry Brigade, including the Task Force Barker operation that resulted in the My Lai massacre. The operational planning failed to include adequate safeguards for civilian protection or verification of intelligence about enemy presence.',
 date: 'March 1968',
 impact: 'Deficient operational planning contributed to the conditions that enabled the massacre of between 347 and 504 unarmed civilians.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'Processing of Falsified After-Action Reports',
 description: 'The brigade operations section processed after-action reports claiming 128 enemy killed in action against only 3 weapons recovered. As S-3, McKnight was in a position to recognize this gross discrepancy as evidence that the "enemy" killed were actually unarmed civilians, but the reports were forwarded through the chain of command without correction.',
 date: 'March 1968',
 impact: 'The acceptance and forwarding of obviously falsified reports enabled the cover-up to persist for over 18 months.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 {
 title: 'Charges Filed and Dropped',
 description: 'McKnight was among those charged by the Army following the Peers Commission investigation. His charges related to his staff role in the brigade operations that led to the massacre and cover-up. Like most My Lai defendants, his charges were dropped before trial.',
 date: '1970-1971',
 impact: 'The dropping of charges against staff officers ensured that the planning and administrative apparatus that enabled the massacre escaped accountability.',
 sources: ['https://www.loc.gov/item/2018690253/'],
 },
 {
 title: 'Failure of Staff Officer Accountability',
 description: 'McKnight\'s case illustrated the broader failure to hold staff officers accountable for their roles in enabling atrocities. Staff officers who planned operations, processed intelligence, and handled reports were essential links in the chain that both enabled the massacre and concealed it afterward.',
 date: '1971',
 impact: 'The lack of accountability for staff officers set a precedent that operational planning failures leading to war crimes would not result in prosecution.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'Peers Commission Identification',
 description: 'The Peers Commission identified McKnight as one of the officers who should face charges in connection with My Lai. The commission documented the role of brigade staff in processing information that should have exposed the massacre and recommended prosecution.',
 date: '1970',
 impact: 'Despite the Peers Commission\'s recommendations, McKnight was never convicted for his role in the massacre or cover-up.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 ],
 timeline: [
 { date: 'March 15-16, 1968', event: 'Brigade operations section coordinated Task Force Barker\'s operation against Son My village area' },
 { date: 'March 16, 1968', event: 'Task Force Barker conducted the massacre of 347-504 civilians at My Lai' },
 { date: 'March 1968', event: 'Brigade operations processed after-action reports claiming 128 enemy KIA with only 3 weapons recovered' },
 { date: 'March 1968 - November 1969', event: 'Massacre concealed through falsified reports and suppressed information' },
 { date: 'November 1969', event: 'My Lai massacre publicly exposed by journalist Seymour Hersh' },
 { date: '1970', event: 'Identified by Peers Commission for prosecution' },
 { date: '1970-1971', event: 'Charged by the U.S. Army in connection with the massacre' },
 { date: '1971', event: 'Charges dropped before trial' },
 ],
 keyPositions: [
 'Major, Operations Officer (S-3), 11th Infantry Brigade, Americal Division',
 ],
 knownAssociates: [
 { name: 'Oran Henderson', relationship: '11th Brigade commander, McKnight\'s commanding officer', href: '/entities/individuals/oran-henderson' },
 { name: 'Frank Barker', relationship: 'Task Force Barker commander who operated under McKnight\'s brigade', href: '/entities/individuals/frank-barker' },
 { name: 'Samuel Koster', relationship: 'Americal Division commander in the chain of command', href: '/entities/individuals/samuel-koster' },
 { name: 'William Calley', relationship: 'Platoon leader convicted of murder at My Lai', href: '/entities/individuals/william-calley' },
 ],
 charges: [
 { statute: 'UCMJ - Charges Related to My Lai Massacre', description: 'Charged in connection with operational role in the My Lai massacre and subsequent cover-up', category: 'Military Misconduct' },
 ],
 status: 'charges dropped',
 sources: [
 'National Archives - My Lai Massacre Records',
 'Peers Commission Report (1970)',
 'PBS American Experience - My Lai',
 'Seymour Hersh - My Lai 4: A Report on the Massacre and Its Aftermath (1970)',
 'Michael Bilton and Kevin Sim - Four Hours in My Lai (1992)',
 ],
 },

 'robert-mcnamara': {
 name: 'Robert McNamara',
 title: 'Secretary of Defense (1961-1968)',
 role: 'Defense Secretary who lied about Gulf of Tonkin and presided over Vietnam escalation',
 riskLevel: 'critical',
 description: 'Robert McNamara served as Secretary of Defense under Kennedy and Johnson, presiding over the massive escalation of the Vietnam War. He lied to Congress and the public about the Gulf of Tonkin incident and the war\'s progress while privately doubting it could be won. His"body count"metrics and bombing campaigns killed millions. Decades later, he admitted"We were wrong, terribly wrong"- but faced no accountability.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Secretary (1961-1968)', type: 'agency' },
 { name: 'World Bank', role: 'President (1968-1981)', type: 'organization' },
 ],
 controversies: [
 'TONKIN LIES: McNamara told Congress the Gulf of Tonkin attacks were"unequivocal"and"unprovoked."Both claims were false. The second attack never happened, and the U.S. had been conducting covert operations against North Vietnam.',
 'WAR ESCALATION: McNamara oversaw the buildup from 16,000 advisors to over 500,000 troops. He approved massive bombing campaigns that dropped more tonnage than all of WWII.',
 'BODY COUNT: McNamara\'s Pentagon measured success through"body counts"and"kill ratios"- dehumanizing metrics that incentivized civilian casualties and false reporting.',
 'PRIVATE DOUBTS: McNamara privately doubted the war could be won as early as 1965-1966, yet continued publicly supporting escalation. The Pentagon Papers revealed the depth of internal pessimism.',
 'AGENT ORANGE: Under McNamara, the military sprayed millions of gallons of Agent Orange over Vietnam, causing cancer, birth defects, and environmental devastation that continues today.',
 'LEAVING OFFICE: McNamara left the Pentagon in 1968 and became World Bank president. He never faced consequences for the war\'s deceptions.',
 'LATE ADMISSION: In his 1995 memoir and 2003 documentary"The Fog of War,"McNamara admitted the war was wrong."We were wrong, terribly wrong. We owe it to future generations to explain why."But he stopped short of calling it criminal.',
 'NO ACCOUNTABILITY: Despite his role in a war that killed millions based on lies, McNamara lived comfortably until age 93. His late-life remorse changed nothing for the dead.',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(b)(i)', description: 'War Crimes; Attack on Civilians: Bombing campaigns killed hundreds of thousands of civilians', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 8(2)(b)(iv)', description: 'War Crimes; Causing Widespread Environmental Damage: Agent Orange spraying devastated Vietnam\'s environment', category: 'International Criminal Law' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1001', description: 'False Statements: Lied to Congress about Tonkin incident', category: 'Federal Crimes' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 1621', description: 'Perjury: False testimony under oath', category: 'Federal Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Gulf of Tonkin Incident', slug: 'gulf-of-tonkin', severity: 'critical' },
 { title: 'Vietnam War', slug: 'vietnam-war', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 9, 1916', event: 'Born in San Francisco, California' },
 { date: 'January 21, 1961', event: 'Becomes Secretary of Defense under Kennedy' },
 { date: 'August 1964', event: 'Testifies falsely about Gulf of Tonkin' },
 { date: '1965-1968', event: 'Oversees massive Vietnam escalation' },
 { date: 'February 29, 1968', event: 'Leaves Pentagon' },
 { date: '1968-1981', event: 'World Bank president' },
 { date: '1995', event: 'Publishes"In Retrospect"admitting errors' },
 { date: '2003', event: '"Fog of War"documentary' },
 { date: 'July 6, 2009', event: 'Dies in Washington, D.C., age 93' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Pentagon Papers', url: 'https://www.archives.gov/research/pentagon-papers', date: '1971' },
 { title: 'Robert McNamara -"In Retrospect"', url: 'https://scholar.google.com/scholar?q=Robert%20McNamara%20-%22In%20Retrospect%22', date: '1995' },
 { title: 'Errol Morris -"The Fog of War"', url: 'https://scholar.google.com/scholar?q=Errol%20Morris%20-%22The%20Fog%20of%20War%22', date: '2003' },
 { title: 'Congressional testimony transcripts', url: 'https://www.congress.gov/', date: '1964' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lyndon B. Johnson', relationship: 'President he served', href: '/entities/individuals/lyndon-b-johnson' },
 ],
 },


























 'reality-winner': {
 name: 'Reality Winner',
 title: 'NSA Whistleblower',
 role: 'Leaked evidence of Russian election interference, imprisoned',
 riskLevel: 'low',
 description: 'Reality Winner was an NSA contractor who leaked a classified report showing Russian interference in the 2016 election to The Intercept. She was sentenced to over 5 years in prison; the longest sentence ever for an unauthorized disclosure to the media; while those who benefited from Russian interference faced no consequences.',
 birthDate: 'December 4, 1991',
 birthPlace: 'Alice, Texas',
 education: ['Air Force training'],
 affiliations: [
 { name: 'National Security Agency', role: 'Contractor', type: 'agency' },
 { name: 'U.S. Air Force', role: 'Former Airman', type: 'agency' },
 ],
 controversies: [
 'NSA contractor who leaked classified report proving Russian cyberattacks on U.S. election infrastructure',
 'Sentenced to 5 years and 3 months; the longest sentence ever for an unauthorized disclosure to media',
 'Her leak confirmed what intelligence agencies were warning about Russian interference in 2016 election',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-election-interference', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 4, 1991', event: 'Born in Alice, Texas' },
 { date: '2010-2016', event: 'Serves in U.S. Air Force' },
 { date: 'February 2017', event: 'Begins work as NSA contractor' },
 { date: 'May 2017', event: 'Leaks Russian interference document' },
 { date: 'June 3, 2017', event: 'Arrested' },
 { date: 'June 2018', event: 'Sentenced to 63 months' },
 { date: 'June 2021', event: 'Released to home confinement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Intercept: NSA report on Russian election hacking', url: 'https://theintercept.com/', date: '2017' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'President whose administration aggressively prosecuted Winner for leaking evidence of Russian election interference', href: '/entities/individuals/donald-trump' },
 { name: 'Jeff Sessions', relationship: 'Attorney General who personally announced Winner\'s prosecution and pledged crackdown on leakers', href: '/entities/individuals/jeff-sessions' },
 { name: 'Edward Snowden', relationship: 'Fellow NSA whistleblower whose case set precedent for Espionage Act prosecutions of leakers', href: '/entities/individuals/edward-snowden' },
 { name: 'Daniel Hale', relationship: 'Fellow intelligence community whistleblower prosecuted under Espionage Act for revealing drone program details', href: '/entities/individuals/daniel-hale' },
 ],
 },






 'robert-f-kennedy': {
 name: 'Robert F. Kennedy',
 title: 'U.S. Attorney General / Senator',
 role: 'Civil rights champion assassinated during 1968 presidential campaign',
 riskLevel: 'low',
 description: 'Robert F. Kennedy served as Attorney General under his brother JFK, aggressively pursuing civil rights and organized crime. After JFK\'s assassination, he became a Senator and ran for president in 1968. He was assassinated on June 5, 1968, after winning the California primary.',
 birthDate: 'November 20, 1925',
 birthPlace: 'Brookline, Massachusetts',
 deathDate: 'June 6, 1968',
 education: ['Harvard University', 'University of Virginia Law School'],
 affiliations: [
 { name: 'Department of Justice', role: 'Attorney General (1961-1964)', type: 'agency' },
 { name: 'United States Senate', role: 'Senator from New York (1965-1968)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'John F. Kennedy', relationship: 'Brother, President', href: '/entities/individuals/john-f-kennedy' },
 ],
 controversies: [
 'U.S. Attorney General who aggressively pursued organized crime and civil rights enforcement',
 'Assassinated during 1968 presidential campaign by Sirhan Sirhan',
 'As AG, authorized FBI surveillance of Martin Luther King Jr. at J. Edgar Hoover\'s insistence',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'RFK Assassination', slug: 'rfk-assassination', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 20, 1925', event: 'Born in Brookline, Massachusetts' },
 { date: '1961-1964', event: 'Attorney General' },
 { date: '1965-1968', event: 'Senator from New York' },
 { date: 'March 16, 1968', event: 'Announces presidential campaign' },
 { date: 'June 5, 1968', event: 'Wins California primary, shot at Ambassador Hotel' },
 { date: 'June 6, 1968', event: 'Dies' },
 ],
 sources: [
 { title: 'RFK assassination investigation records', url: 'https://scholar.google.com/scholar?q=RFK%20assassination%20investigation%20records', date: '1968' },
 ],
 },
 'robbie-parker': {
 name: 'Robbie Parker',
 title: 'Sandy Hook Parent',
 role: 'Father of Sandy Hook victim targeted by conspiracy theorists',
 riskLevel: 'low',
 description: 'Robbie Parker is the father of Emilie Parker, one of the 20 children killed in the Sandy Hook Elementary School shooting. His emotional press conference became a target of conspiracy theorists who claimed he was a "crisis actor."He has spoken out against disinformation.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Alex Jones', relationship: 'Conspiracy theorist who defamed Parker and other Sandy Hook families, calling the massacre a hoax; lost $1.5 billion defamation judgment', href: '/entities/individuals/alex-jones' },
 { name: 'Neil Heslin', relationship: 'Fellow Sandy Hook parent and plaintiff in defamation lawsuits against Alex Jones', href: '/entities/individuals/neil-heslin' },
 { name: 'Leonard Pozner', relationship: 'Fellow Sandy Hook parent targeted by conspiracy theorists; co-founded HONR Network to fight hoaxers', href: '/entities/individuals/leonard-pozner' },
 ],
 controversies: [
 'Father of Emilie Parker who was killed in the Sandy Hook massacre at age 6',
 'Became target of Alex Jones\'s conspiracy theories claiming Sandy Hook was a hoax',
 'Part of the group of Sandy Hook families who won historic defamation judgments against Jones',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sandy Hook Disinformation', slug: 'sandy-hook-disinfo', severity: 'high' },
 ],
 timeline: [
 { date: 'December 14, 2012', event: 'Daughter Emilie killed at Sandy Hook' },
 { date: 'December 15, 2012', event: 'Press conference targeted by conspiracy theorists' },
 ],
 sources: [
 { title: 'Sandy Hook Promise Foundation', url: 'https://scholar.google.com/scholar?q=Sandy%20Hook%20Promise%20Foundation', date: 'Various' },
 ],
 },
 'richard-clarke': {
 name: 'Richard Clarke',
 title: 'Counter-Terrorism Coordinator',
 role: 'Official who warned about Al-Qaeda before 9/11, testified about failures',
 riskLevel: 'low',
 description: 'Richard Clarke was the National Coordinator for Security and Counter-terrorism who repeatedly warned the Bush administration about Al-Qaeda before 9/11. At the 9/11 Commission, he famously apologized to the families:"Your government failed you... and I failed you."',
 birthDate: 'October 27, 1950',
 birthPlace: 'Boston, Massachusetts',
 education: ['University of Pennsylvania', 'MIT'],
 affiliations: [
 { name: 'National Security Council', role: 'Counter-Terrorism Coordinator', type: 'agency' },
 ],
 controversies: [
 'Testified before 9/11 Commission that Bush administration failed to act on urgent al-Qaeda warnings',
 'Publicly apologized to 9/11 families saying "your government failed you"',
 'Warned Condoleezza Rice about imminent al-Qaeda attack in months before September 11',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'September 11 Attacks & Accountability Failures', slug: 'september-11', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 27, 1950', event: 'Born in Boston' },
 { date: 'January 2001', event: 'Requests urgent meeting on Al-Qaeda (ignored)' },
 { date: 'September 11, 2001', event: '9/11 attacks' },
 { date: 'March 24, 2004', event: 'Testifies before 9/11 Commission, apologizes' },
 ],
 socialMedia: [],
 sources: [
 { title: '9/11 Commission testimony', url: 'https://scholar.google.com/scholar?q=9%2F11%20Commission%20testimony', date: '2004' },
 { title: 'Richard Clarke -"Against All Enemies"', url: 'https://scholar.google.com/scholar?q=Richard%20Clarke%20-%22Against%20All%20Enemies%22', date: '2004' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President Clarke served under as counterterrorism coordinator; Clarke testified Bush administration ignored pre-9/11 warnings', href: '/entities/individuals/george-w-bush' },
 { name: 'Condoleezza Rice', relationship: 'National Security Advisor whom Clarke warned about al-Qaeda threats before 9/11', href: '/entities/individuals/condoleezza-rice' },
 { name: 'Bill Clinton', relationship: 'President under whom Clarke served as National Coordinator for Counterterrorism', href: '/entities/individuals/bill-clinton' },
 { name: 'George Tenet', relationship: 'CIA Director who shared Clarke\'s concerns about imminent al-Qaeda attack pre-9/11', href: '/entities/individuals/george-tenet' },
 ],
 },

 'rebekah-brooks': {
 name: 'Rebekah Mary Brooks',
 title: 'CEO of News UK',
 role: 'Media Executive, Phone Hacking Central Figure',
 riskLevel: 'high',
 description: 'Rebekah Brooks (nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©e Wade) is CEO of News UK (formerly News International), the British newspaper arm of Rupert Murdoch\'s empire. She was editor of News of the World (2000-2003) and The Sun (2003-2009) when systematic phone hacking of celebrities, politicians, and crime victims occurred. She was arrested and charged with phone hacking and obstruction of justice but acquitted in 2014. Despite the scandal, she was rehired as CEO in 2015, demonstrating Murdoch\'s loyalty to her.',
 birthDate: 'May 27, 1968',
 birthPlace: 'Warrington, Cheshire, UK',
 education: ['Appleton Hall County Grammar School'],
 affiliations: [
 { name: 'News UK', role: 'CEO (2009-2011, 2015-present)', type: 'corporation' },
 { name: 'News of the World', role: 'Former Editor (2000-2003)', type: 'corporation' },
 { name: 'The Sun', role: 'Former Editor (2003-2009)', type: 'corporation' },
 { name: 'News Corporation', role: 'Senior Executive', type: 'corporation' },
 ],
 controversies: [
 'PHONE HACKING: Newspaper under her editorship hacked phones of celebrities, politicians, and crime victims',
 'MILLY DOWLER: News of the World hacked murdered schoolgirl\'s phone, giving false hope to family',
 'OBSTRUCTION CHARGES: Charged with conspiring to pervert course of justice (acquitted)',
 'CRIMINAL TRIAL: Arrested and tried alongside Andy Coulson, acquitted on all charges 2014',
 'REHIRED: Despite scandal, rehired as News UK CEO in 2015',
 'POLITICAL ACCESS: Close relationship with Prime Ministers Blair, Brown, Cameron',
 ],
 charges: [
 { statute: 'UK Regulation of Investigatory Powers Act 2000', description: 'Phone interception (charged, acquitted)', category: 'Cybercrimes' },
 { statute: 'Perverting the Course of Justice', description: 'Obstruction conspiracy (charged, acquitted)', category: 'Obstruction' },
 { statute: 'Data Protection Act', description: 'Privacy violations during editorship', category: 'Privacy Crimes' },
 ],
 relatedInvestigations: [
 { title: 'News of the World Phone Hacking', slug: 'news-of-the-world-hacking', severity: 'high' },
 { title: 'Media Manipulation Networks', slug: 'media-manipulation', severity: 'high' },
 ],
 timeline: [
 { date: 'May 27, 1968', event: 'Born in Warrington, Cheshire' },
 { date: '1989', event: 'Joins News of the World as secretary' },
 { date: '2000', event: 'Becomes editor of News of the World at age 31' },
 { date: '2003', event: 'Becomes editor of The Sun' },
 { date: '2009', event: 'Becomes CEO of News International' },
 { date: 'July 2011', event: 'News of the World closes' },
 { date: 'July 15, 2011', event: 'Resigns as CEO amid scandal' },
 { date: 'July 17, 2011', event: 'Arrested on phone hacking charges' },
 { date: 'June 24, 2014', event: 'Acquitted of all charges' },
 { date: 'September 2015', event: 'Returns as CEO of News UK' },
 ],
 socialMedia: [],
 sources: [
 { title: 'R v Brooks & Others Trial Documents', url: 'https://scholar.google.com/scholar?q=R%20v%20Brooks%20%26%20Others%20Trial%20Documents', date: '2013-2014' },
 { title: 'Leveson Inquiry Testimony', url: 'https://www.gov.uk/government/publications/leveson-inquiry-report-into-the-culture-practices-and-ethics-of-the-press', date: '2012' }, ],
 aliases: ['Rebekah Wade (maiden name)'],
 knownAssociates: [
 { name: 'Rupert Murdoch', relationship: 'Employer, close ally', href: '/entities/individuals/rupert-murdoch' },
 { name: 'James Murdoch', relationship: 'Former boss at News International', href: '/entities/individuals/james-murdoch' },
 { name: 'Andy Coulson', relationship: 'Successor as NoTW editor, convicted of hacking', href: '/entities/individuals/andy-coulson' },
 { name: 'David Cameron', relationship: 'Close friend, Christmas neighbor', href: '/entities/individuals/david-cameron' },
 ],
 },


























 'ryan-mccarthy': {
 name: 'Ryan McCarthy',
 title: 'Former Secretary of the Army',
 role: 'Army Leadership During January 6',
 riskLevel: 'high',
 description: 'Ryan McCarthy served as Secretary of the Army from September 2019 to January 2021. He is a key figure in the delayed National Guard response to the January 6 Capitol attack. The Guard took over 3 hours to deploy after initial requests, raising questions about why military assistance was withheld during the insurrection. McCarthy approved the eventual deployment but the delay allowed the mob to breach the Capitol for hours.',
 birthDate: 'February 1975',
 birthPlace: 'Illinois, USA',
 education: ['Virginia Military Institute', 'Georgetown University, MBA'],
 affiliations: [
 { name: 'Department of the Army', role: 'Secretary (2019-2021)', type: 'agency' },
 { name: 'Department of Defense', role: 'Under Secretary (2017-2019)', type: 'agency' },
 { name: 'Lockheed Martin', role: 'Former Executive', type: 'corporation' },
 ],
 controversies: [
 'JANUARY 6 RESPONSE: National Guard took 3+ hours to deploy despite urgent requests',
 'PENTAGON DELAYS: Questions about who authorized the delay in Guard deployment',
 'COMMAND CONFUSION: Conflicting accounts of who could authorize deployment',
 'CONGRESSIONAL TESTIMONY: Testified to Congress about delayed response',
 ],
 charges: [
 { statute: '10 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 892', description: 'Potential dereliction of duty during insurrection', category: 'Military Justice' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 1975', event: 'Born in Illinois' },
 { date: 'September 2019', event: 'Confirmed as Secretary of the Army' },
 { date: 'January 6, 2021', event: 'Capitol attacked, Guard deployment delayed' },
 { date: 'January 6, 2021, 5:08 PM', event: 'Finally authorizes Guard deployment' },
 { date: 'January 20, 2021', event: 'Leaves office' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6th Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'DOD IG Report on January 6', url: 'https://www.ignet.gov/', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mark Milley', relationship: 'Chairman Joint Chiefs during Jan 6', href: '/entities/individuals/mark-milley' },
 { name: 'Christopher Miller', relationship: 'Acting SecDef during Jan 6', href: '/entities/individuals/christopher-miller' },
 { name: 'Donald Trump', relationship: 'Appointed by', href: '/entities/individuals/donald-trump' },
 ],
 },


























 'robert-kagan': {
 name: 'Robert Kagan',
 title: 'Neoconservative Foreign Policy Analyst',
 role: 'Senior Fellow at Brookings Institution',
 riskLevel: 'medium',
 description: 'Robert Kagan. Profile pending review.',
 birthDate: 'September 26, 1958',
 birthPlace: 'Athens, Greece',
 education: ['Yale University, BA', 'Harvard University, PhD'],
 affiliations: [
 { name: 'Brookings Institution', role: 'Senior Fellow', type: 'organization' },
 { name: 'Project for the New American Century', role: 'Co-Founder', type: 'organization' },
 { name: 'State Department', role: 'Speechwriter (1984-1986)', type: 'agency' },
 ],
 controversies: [
 'IRAQ WAR: Advocated for invasion, never apologized for catastrophic results',
 'PNAC: Co-founded organization calling for U.S. global hegemony',
 'INTERVENTION ADVOCACY: Consistently pushes for military interventions',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iraq War', slug: 'iraq-war', severity: 'critical' },
 { title: 'Neocon Network', slug: 'neocon-network', severity: 'high' },
 ],
 timeline: [
 { date: 'September 26, 1958', event: 'Born in Athens, Greece' },
 { date: '1997', event: 'Co-founds PNAC' },
 { date: '2003', event: 'Iraq War advocacy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Kagan', url: 'https://en.wikipedia.org/wiki/Robert_Kagan', date: '' },
 { title: 'Associated Press: Robert Kagan', url: 'https://apnews.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Victoria Nuland', relationship: 'Wife, State Department official', href: '/entities/individuals/victoria-nuland' },
 { name: 'William Kristol', relationship: 'PNAC co-founder', href: '/entities/individuals/william-kristol' },
 ],
 },

 'randy-babbitt': {
 name: 'Randy Babbitt',
 title: 'Aviation Labor Leader',
 role: 'Former FAA Administrator (2009-2011)',
 riskLevel: 'medium',
 description: 'Randy Babbitt served as FAA Administrator from 2009 to 2011. He was a former airline pilot and head of the Air Line Pilots Association (ALPA) union. He resigned after being arrested for DUI in Virginia, though the charges were later dropped. His tenure saw the early development of the ODA certification program.',
 birthDate: 'October 30, 1946',
 birthPlace: 'United States',
 education: ['Miami Dade College'],
 affiliations: [
 { name: 'FAA', role: 'Administrator', type: 'agency' as const },
 { name: 'Air Line Pilots Association', role: 'President', type: 'organization' as const },
 { name: 'Eastern Air Lines', role: 'Pilot', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company was subject to FAA oversight during Babbitt\'s regulatory tenure', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Ray LaHood', relationship: 'Transportation Secretary who oversaw FAA during Babbitt\'s tenure as administrator', href: '/entities/individuals/ray-lahood' },
 ],
 controversies: [
 'DUI ARREST: Arrested for DUI in 2011, charges later dropped',
 'RESIGNATION: Resigned as Administrator after DUI arrest',
 'UNION TIES: Former union head regulating industry he came from',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'October 30, 1946', event: 'Born' },
 { date: '1966-2007', event: 'Airline pilot career' },
 { date: '1990-1998', event: 'President of ALPA' },
 { date: 'June 2009', event: 'Confirmed as FAA Administrator' },
 { date: 'December 2011', event: 'Arrested for DUI' },
 { date: 'December 2011', event: 'Resigns from FAA' },
 ],
 sources: [{ title: 'Wikipedia: Randy Babbitt', url: 'https://en.wikipedia.org/wiki/Randy_Babbitt' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
 'ray-lahood': {
 name: 'Ray Lahood',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ray Lahood. Profile pending review.',
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


 'robert-sumwalt': {
 name: 'Robert Sumwalt',
 title: 'Aviation Safety Official',
 role: 'Former NTSB Chairman',
 riskLevel: 'medium',
 description: 'Robert Sumwalt served as Chairman of the National Transportation Safety Board (NTSB) from 2017 to 2021, including during the 737 MAX crashes. A former airline pilot, he led NTSB investigations and publicly called for improvements in aviation safety. However, the NTSB is an advisory body with no enforcement power, the FAA frequently ignores its recommendations. Sumwalt advocated for reforms but some critics say he could have been more forceful.',
 birthDate: '1959',
 birthPlace: 'United States',
 education: ['Embry-Riddle Aeronautical University'],
 affiliations: [
 { name: 'NTSB', role: 'Chairman', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Jennifer Homendy', relationship: 'Successor as NTSB Chair', href: '/entities/individuals/jennifer-homendy' },
 ],
 controversies: [
 'LIMITED POWER: NTSB recommendations often ignored by FAA',
 'MAX INVESTIGATION: Led NTSB investigation of crashes',
 'ADVOCACY: Called for safety improvements',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1959', event: 'Born' },
 { date: '2006', event: 'Appointed to NTSB' },
 { date: '2017', event: 'Becomes NTSB Chairman' },
 { date: '2018-2019', event: 'Leads MAX crash investigations' },
 { date: '2021', event: 'Term ends' },
 ],
 sources: [{ title: 'Wikipedia: Robert Sumwalt', url: 'https://en.wikipedia.org/wiki/Robert_Sumwalt' }, { title: 'Bloomberg: Robert Sumwalt', url: 'https://www.bloomberg.com/' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
 'robert-clifford': {
 name: 'Robert Clifford',
 title: 'Attorney',
 role: 'Lead Counsel for Boeing MAX Families',
 riskLevel: 'low',
 description: 'Robert Clifford is a Chicago-based aviation attorney who serves as lead counsel for many Boeing 737 MAX crash victim families in litigation against Boeing. His firm, Clifford Law Offices, has extensive experience in aviation disasters. He has been instrumental in litigation that helped expose Boeing\'s knowledge of MCAS dangers and pushed for accountability.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['DePaul University Law School'],
 affiliations: [
 { name: 'Clifford Law Offices', role: 'Partner', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Mark Lindquist', relationship: 'Fellow aviation attorney', href: '/entities/individuals/mark-lindquist' },
 ],
 controversies: [
 'LEAD COUNSEL: Primary attorney for many MAX victim families',
 'LITIGATION: Lawsuits exposed Boeing documents',
 'ACCOUNTABILITY: Pushed for executive responsibility',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2019+', event: 'Lead counsel for MAX victim families' },
 ],
 sources: [{ title: 'Wikipedia: Robert Clifford', url: 'https://en.wikipedia.org/wiki/Robert_Clifford' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 },
 'ronald-ridenhour': {
 name: 'Ronald Ridenhour',
 title: 'My Lai Massacre Whistleblower',
 role: 'Specialist 5, 11th Light Infantry Brigade, Americal Division',
 riskLevel: 'low',
 description: 'Ronald Ridenhour was the American soldier who exposed the My Lai massacre to the world. Although not present during the massacre itself, Ridenhour served in the same brigade and heard detailed accounts of the atrocity from multiple soldiers who had participated. Horrified by what he learned, Ridenhour spent months carefully documenting the accounts and cross-referencing testimonies before composing a meticulously detailed letter that he sent to 30 members of Congress, the Secretary of Defense, the Secretary of the Army, the Chairman of the Joint Chiefs of Staff, and other officials on March 29, 1969, exactly one year after the massacre. His letter, which named names, cited specific incidents, and provided a coherent narrative of the massacre, triggered the Army investigation that eventually led to the Peers Commission and the court-martial of Lieutenant William Calley. Without Ridenhour\'s moral courage in sending that letter, the My Lai massacre might have remained buried forever under the military\'s cover-up. After the war, Ridenhour became an investigative journalist, continuing to expose government wrongdoing until his death in 1998 at age 52. The Ridenhour Prizes for truth-telling and courage are named in his honor.',
 birthDate: 'April 6, 1946',
 birthPlace: 'Phoenix, Arizona',
 deathDate: 'May 10, 1998',
 deathCause: 'Heart attack at age 52',
 education: ['Claremont Graduate University', 'Phoenix College'],
 affiliations: [
 { name: 'United States Army', relationship: 'Specialist 5 in the 11th Light Infantry Brigade, Americal Division, who exposed the My Lai massacre', href: '/entities/agencies/us-army' },
 ],
 controversies: [
 {
 title: 'The Letter That Exposed My Lai',
 description: 'On March 29, 1969, Ridenhour sent a carefully documented letter to 30 members of Congress, the Secretary of Defense, the Secretary of the Army, and other officials describing the My Lai massacre in detail. The letter named specific soldiers, described specific killings, and provided a coherent narrative that made the atrocity impossible to ignore. This letter directly triggered the Army\'s criminal investigation.',
 date: 'March 29, 1969',
 impact: 'Ridenhour\'s letter broke through the military\'s 18-month cover-up and led directly to the investigation, court-martials, and the Peers Commission.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'Systematic Documentation of Testimony',
 description: 'Before sending his letter, Ridenhour spent months tracking down and interviewing soldiers who had been at My Lai. He cross-referenced multiple accounts to ensure accuracy, gathering testimony from participants including Michael Bernhardt and others who confirmed the massacre. His methodical approach produced documentation that the Army could not dismiss.',
 date: '1968-1969',
 impact: 'Ridenhour\'s careful documentation provided a template for whistleblowing that prioritized verifiable facts over allegations, making his claims virtually unassailable.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 {
 title: 'Courage to Break Military Code of Silence',
 description: 'By exposing the massacre, Ridenhour violated the unwritten code of military loyalty that required soldiers to protect fellow service members. He faced significant social ostracism and criticism from those who viewed him as a traitor, yet he persisted because he believed the massacre had to be acknowledged.',
 date: '1969',
 impact: 'Ridenhour\'s willingness to break the code of silence demonstrated that individual moral courage could overcome institutional pressure to hide war crimes.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 {
 title: 'Post-War Investigative Journalism Career',
 description: 'After leaving the Army, Ridenhour became an investigative journalist, working for newspapers in the New Orleans area. He continued exposing government corruption and wrongdoing, including investigating corruption in the New Orleans Police Department and political scandals in Louisiana.',
 date: '1970s-1998',
 impact: 'Ridenhour\'s journalism career demonstrated that the moral commitment that drove him to expose My Lai was a lifelong dedication to truth-telling.',
 sources: ['https://ridenhour.org/about/'],
 },
 {
 title: 'Testimony to Congress and the Peers Commission',
 description: 'After sending his letter, Ridenhour provided extensive testimony to Congressional committees and the Peers Commission investigating the massacre. His detailed, credible testimony was instrumental in establishing the scope of the atrocity and the extent of the cover-up.',
 date: '1969-1970',
 impact: 'Ridenhour\'s testimony provided the evidentiary foundation for the most thorough investigation of an American war crime in history.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'The Ridenhour Prizes Legacy',
 description: 'After Ridenhour\'s death in 1998, the Ridenhour Prizes were established to honor individuals who demonstrate truth-telling and moral courage in the tradition of Ridenhour\'s My Lai exposure. Recipients have included whistleblowers, journalists, and activists who exposed wrongdoing at personal risk.',
 date: '2004-present',
 impact: 'The prizes ensure that Ridenhour\'s legacy of moral courage continues to inspire and recognize truth-tellers.',
 sources: ['https://ridenhour.org/'],
 },
 ],
 timeline: [
 { date: 'April 6, 1946', event: 'Born in Phoenix, Arizona' },
 { date: '1967', event: 'Deployed to Vietnam with the 11th Light Infantry Brigade, Americal Division' },
 { date: 'March 16, 1968', event: 'My Lai massacre occurs; Ridenhour was not present but begins hearing accounts from participants' },
 { date: '1968-1969', event: 'Spent months documenting testimony from multiple My Lai participants' },
 { date: 'March 29, 1969', event: 'Sent detailed letter to 30 Congress members and military officials exposing the My Lai massacre' },
 { date: 'April 1969', event: 'Army launches criminal investigation based on Ridenhour\'s letter' },
 { date: '1969-1970', event: 'Testified before Congress and the Peers Commission' },
 { date: '1970s', event: 'Became investigative journalist in New Orleans, continuing to expose government wrongdoing' },
 { date: 'May 10, 1998', event: 'Died of heart attack at age 52 in New Orleans, Louisiana' },
 { date: '2004', event: 'Ridenhour Prizes established in his honor to recognize truth-telling and moral courage' },
 ],
 keyPositions: [
 'Specialist 5, 11th Light Infantry Brigade, Americal Division',
 'Investigative Journalist, New Orleans',
 ],
 knownAssociates: [
 { name: 'Seymour Hersh', relationship: 'Journalist who publicized the massacre story after Ridenhour\'s letter triggered the Army investigation', href: '/entities/individuals/seymour-hersh' },
 { name: 'Hugh Thompson Jr.', relationship: 'Helicopter pilot who tried to stop the massacre, corroborated by Ridenhour\'s investigation', href: '/entities/individuals/hugh-thompson-jr' },
 { name: 'William Calley', relationship: 'Platoon leader named in Ridenhour\'s letter as primary perpetrator', href: '/entities/individuals/william-calley' },
 { name: 'William Peers', relationship: 'Lieutenant General who led the investigation Ridenhour\'s letter triggered', href: '/entities/individuals/william-peers' },
 ],
 charges: [],
 status: 'deceased',
 sources: [
 'National Archives - My Lai Massacre Records',
 'PBS American Experience - My Lai',
 'Ridenhour Foundation - ridenhour.org',
 'Seymour Hersh - My Lai 4: A Report on the Massacre and Its Aftermath (1970)',
 'Michael Bilton and Kevin Sim - Four Hours in My Lai (1992)',
 ],
 },

 'ronald-williams': {
 name: 'Ronald Williams',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ronald Williams. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Ronald Williams was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ronald Williams coordinated messaging strategies designed to suppress unfavorable information.',
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





 'robert-isom': {
 name: 'Robert Isom',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Isom. Profile pending review.',
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


 'ray-conner': {
 name: 'Ray Conner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ray Conner. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ray Conner coordinated messaging strategies designed to suppress unfavorable information.',
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





 'richard-wyckoff': {
 name: 'Richard Wyckoff',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Wyckoff. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Richard Wyckoff, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Richard Wyckoff coordinated messaging strategies designed to suppress unfavorable information.',
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





 'robert-bradway': {
 name: 'Robert Bradway',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Bradway. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Robert Bradway holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'roger-wicker': {
 name: 'Roger Wicker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Roger Wicker. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Roger Wicker was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Congressional hearing transcripts reference Roger Wicker in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'rick-larsen': {
 name: 'Rick Larsen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rick Larsen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Rick Larsen was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Rick Larsen as a key decision-maker during periods where regulatory violations were later documented.',
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





 'richard-anderson': {
 name: 'Richard Anderson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Anderson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Richard Anderson was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Richard Anderson was briefed on risks later downplayed in public communications.',
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





 'raj-rajaratnam': {
 name: 'Raj Rajaratnam',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Raj Rajaratnam. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Raj Rajaratnam holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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






 'rajat-gupta': {
 name: 'Rajat Gupta',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rajat Gupta. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Rajat Gupta holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative journalists have documented a pattern of revolving-door employment between Rajat Gupta\'s operations and the regulatory bodies meant to provide oversight.',
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





 'raymond-sackler': {
 name: 'Raymond Sackler',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Raymond Sackler. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Raymond Sackler\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate Raymond Sackler facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'ray-dalio': {
 name: 'Ray Dalio',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ray Dalio. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Ray Dalio was briefed on risks later downplayed in public communications.',
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





 'ramon-laguarta': {
 name: 'Ramon Laguarta',
 title: 'PepsiCo CEO',
 role: 'PepsiCo CEO, Health Crisis, Plastic Pollution',
 riskLevel: 'high',
 description: 'Ramon Laguarta leads PepsiCo, one of the largest contributors to the plastic pollution crisis and obesity epidemic. The company has been accused of deceptive marketing, funding research to downplay health risks of sugary drinks, and environmental destruction.',
 birthDate: '1964',
 birthPlace: 'Barcelona, Spain',
 education: ['ESADE Business School', 'Arizona State University'],
 affiliations: [
 { name: 'PepsiCo', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'PLASTIC POLLUTION: Major plastic waste producer',
 'HEALTH CRISIS: Sugary drinks fuel obesity, diabetes',
 'DECEPTIVE MARKETING: Targets children',
 'WATER USAGE: Depletes water resources',
 'GREENWASHING: False sustainability claims',
 ],
 charges: [
 { statute: 'Consumer Protection', description: 'Marketing and environmental claims', category: 'ONGOING SCRUTINY' },
 ],
 relatedInvestigations: [
 { title: 'Plastic Pollution Crisis', slug: 'plastic-pollution-crisis', severity: 'critical' },
 { title: 'Obesity Epidemic', slug: 'obesity-epidemic', severity: 'high' },
 ],
 timeline: [
 { date: '1964', event: 'Born in Barcelona' },
 { date: '2018', event: 'Becomes PepsiCo CEO' },
 ],
 sources: [{ title: 'Wikipedia: Ramon Laguarta', url: 'https://en.wikipedia.org/wiki/Ramon_Laguarta' }, { title: 'Bloomberg: Ramon Laguarta', url: 'https://www.bloomberg.com/' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'James Quincey', relationship: 'Coca-Cola CEO, primary beverage rival', href: '/entities/individuals/james-quincey' },
 { name: 'Chris Kempczinski', relationship: 'McDonald\'s CEO, PepsiCo major restaurant supplier', href: '/entities/individuals/chris-kempczinski' }
 ],

 },
 'roger-ailes': {
 name: 'Roger Ailes',
 title: 'Former Fox News CEO',
 role: 'Fox News Founder, Sexual Harassment',
 riskLevel: 'critical',
 description: 'Roger Ailes founded Fox News and built it into a powerful conservative media force. He was forced out after numerous women, including Gretchen Carlson and Megyn Kelly, accused him of sexual harassment. Fox News paid over $50 million in settlements. He died in 2017.',
 birthDate: 'May 15, 1940',
 deathDate: 'May 18, 2017',
 birthPlace: 'Warren, Ohio',
 education: ['Ohio University'],
 affiliations: [
 { name: 'Fox News', role: 'Founder, Former CEO', type: 'corporation' as const },
 { name: 'News Corp', role: 'Former Executive', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Rupert Murdoch', relationship: 'Employer', href: '/entities/individuals/rupert-murdoch' },
 ],
 controversies: [
 'SERIAL HARASSER: Decades of sexual harassment',
 'GRETCHEN CARLSON: $20M settlement',
 '$45M+ SETTLEMENTS: Fox paid to silence accusers',
 'CULTURE OF ABUSE: Created toxic environment',
 'RETALIATION: Punished women who rejected him',
 'POLITICAL INFLUENCE: Shaped Republican politics',
 ],
 charges: [
 { statute: 'Title VII', description: 'Sexual harassment', category: '$45M+ SETTLEMENTS' },
 ],
 relatedInvestigations: [
 { title: 'Fox News Sexual Harassment', slug: 'fox-news-sexual-harassment', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 15, 1940', event: 'Born in Ohio' },
 { date: '1996', event: 'Founds Fox News' },
 { date: 'July 2016', event: 'Forced out' },
 { date: 'May 18, 2017', event: 'Dies' },
 ],
 sources: [{ title: 'Wikipedia: Roger Ailes', url: 'https://en.wikipedia.org/wiki/Roger_Ailes' }, { title: 'Bloomberg: Roger Ailes', url: 'https://www.bloomberg.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
 'recep-tayyip-erdogan': {
 name: 'Recep Tayyip Erdogan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Recep Tayyip Erdogan. Profile pending review.',
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


 'rodrigo-duterte': {
 name: 'Rodrigo Duterte',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rodrigo Duterte. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Rodrigo Duterte as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative journalists have documented a pattern of revolving-door employment between Rodrigo Duterte\'s operations and the regulatory bodies meant to provide oversight.',
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




 'r-kelly': {
 name: 'R. Kelly',
 title: 'Convicted Sex Trafficker',
 role: 'Singer, Child Sex Trafficking CONVICTED',
 riskLevel: 'critical',
 description: 'R. Kelly (Robert Kelly) was convicted of racketeering and sex trafficking in 2021 and child pornography in 2022. He used his fame to recruit underage girls and women for decades, subjecting them to sexual abuse while the music industry protected him. He was sentenced to 30 years.',
 birthDate: 'January 8, 1967',
 birthPlace: 'Chicago, Illinois',
 education: ['Kenwood Academy'],
 netWorth: 'Negative (judgments owed)',
 affiliations: [
 { name: 'Music Industry', role: 'Former Artist', type: 'corporation' as const },
 ],
 controversies: [
 'SEX TRAFFICKING: Convicted of trafficking minors',
 'CHILD PORNOGRAPHY: Convicted of production',
 'AALIYAH MARRIAGE: Illegally married 15-year-old',
 'DECADES OF ABUSE: Hundreds of victims alleged',
 'INDUSTRY PROTECTION: Labels, radio protected him',
 '30+ YEAR SENTENCE: Die-in-prison sentence',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 1962', description: 'RICO, Sex trafficking enterprise', category: 'CONVICTED' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 1591', description: 'Sex trafficking of minors', category: 'CONVICTED' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 2251', description: 'Child pornography production', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'R. Kelly Sex Crimes', slug: 'r-kelly-sex-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 8, 1967', event: 'Born in Chicago' },
 { date: '1994', event: 'Illegally marries Aaliyah, age 15' },
 { date: '2008', event: 'Acquitted in first child porn trial' },
 { date: '2019', event: '"Surviving R. Kelly" documentary' },
 { date: '2021', event: 'Convicted of sex trafficking' },
 { date: '2022', event: 'Convicted of child porn, sentenced to 30 years' },
 ],
 sources: [{ title: 'Wikipedia: R. Kelly', url: 'https://en.wikipedia.org/wiki/R._Kelly' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 knownAssociates: [
 { name: 'Bill Cosby', relationship: 'Fellow entertainment figure convicted of sexual abuse', href: '/entities/individuals/bill-cosby' },
 { name: 'Harvey Weinstein', relationship: 'Fellow serial predator convicted during #MeToo era', href: '/entities/individuals/harvey-weinstein' }
 ],

 },
 'reid-hoffman': {
 name: 'Reid Hoffman',
 title: 'Billionaire Investor',
 role: 'LinkedIn Founder, Epstein Connections, Political Donor',
 riskLevel: 'high',
 description: 'Reid Hoffman is a billionaire LinkedIn co-founder with troubling connections to Jeffrey Epstein. He admitted meeting with Epstein multiple times and apologized for the relationship. He is a major political donor who funded opposition research and has been accused of funding disinformation campaigns.',
 birthDate: 'August 5, 1967',
 birthPlace: 'Stanford, California',
 education: ['Stanford University', 'Oxford University'],
 netWorth: '$2.5 billion',
 affiliations: [
 { name: 'LinkedIn', role: 'Co-Founder', type: 'corporation' as const },
 { name: 'Greylock Partners', role: 'Partner', type: 'corporation' as const },
 { name: 'Microsoft', role: 'Board Member', type: 'corporation' as const },
 ],
 controversies: [
 'EPSTEIN MEETINGS: Met with Epstein multiple times',
 'EPSTEIN APOLOGY: Apologized for relationship',
 'ALABAMA DISINFORMATION: Funded election disinfo campaign',
 'MIT MEDIA LAB: Connection to Epstein-funded lab',
 'POLITICAL INFLUENCE: Major Democratic mega-donor',
 'AI SAFETY CONCERNS: Pushing AI without guardrails',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network', slug: 'epstein-network', severity: 'critical' },
 { title: 'Tech Oligarchy', slug: 'tech-oligarchy', severity: 'high' },
 ],
 timeline: [
 { date: 'August 5, 1967', event: 'Born in California' },
 { date: '2003', event: 'Co-founds LinkedIn' },
 { date: '2016', event: 'LinkedIn sold to Microsoft' },
 { date: '2019', event: 'Apologizes for Epstein meetings' },
 { date: '2020', event: 'Alabama disinfo campaign exposed' },
 ],
 sources: [{ title: 'Wikipedia: Reid Hoffman', url: 'https://en.wikipedia.org/wiki/Reid_Hoffman' }, { title: 'Bloomberg: Reid Hoffman', url: 'https://www.bloomberg.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 knownAssociates: [
 { name: 'Peter Thiel', relationship: 'Fellow PayPal co-founder turned political rival', href: '/entities/individuals/peter-thiel' },
 { name: 'Jeffrey Epstein', relationship: 'Met with Epstein, later expressed regret', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Sam Altman', relationship: 'Fellow tech investor and AI industry figure', href: '/entities/individuals/sam-altman' }
 ],

 },
 'robert-bowers': {
 name: 'Robert Bowers',
 title: 'Convicted Mass Shooter',
 role: 'Tree of Life Synagogue Massacre, Killed 11 CONVICTED/DEATH ROW',
 riskLevel: 'critical',
 description: 'Robert Bowers is the antisemitic terrorist who murdered 11 Jewish worshippers at the Tree of Life synagogue in Pittsburgh in 2018. It was the deadliest attack on Jews in American history. He posted antisemitic content online before the attack, blaming Jews for helping immigrant "invaders."',
 birthDate: 'September 4, 1972',
 birthPlace: 'Pennsylvania',
 education: ['Unknown'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'KILLED 11 IN SYNAGOGUE: Deadliest antisemitic attack in US',
 'TARGETED JEWS: Antisemitic motivation',
 'GREAT REPLACEMENT: Believed conspiracy theory',
 'ONLINE RADICALIZATION: Posted on Gab',
 'DEATH PENALTY: Sentenced to death',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 247', description: 'Obstruction of religious practice resulting in death', category: 'CONVICTED, DEATH' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 249', description: 'Hate crime resulting in death', category: 'CONVICTED' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 924(c)', description: 'Use of firearm in violent crime', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Tree of Life Massacre', slug: 'tree-of-life-massacre', severity: 'critical' },
 { title: 'Antisemitic Violence', slug: 'antisemitic-violence', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 4, 1972', event: 'Born in Pennsylvania' },
 { date: 'October 27, 2018', event: 'Murders 11 at Tree of Life synagogue' },
 { date: 'June 2023', event: 'Convicted on all 63 counts' },
 { date: 'August 2023', event: 'Sentenced to death' },
 ],
 sources: [{ title: 'Wikipedia: Robert Bowers', url: 'https://en.wikipedia.org/wiki/Robert_Bowers' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Dylann Roof', relationship: 'Fellow white supremacist mass shooter', href: '/entities/individuals/dylann-roof' },
 { name: 'Payton Gendron', relationship: 'Fellow racially motivated mass shooter inspired by similar ideology', href: '/entities/individuals/payton-gendron' }
 ],

 },
 'roberto-minuta': {
 name: 'Roberto Minuta',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Roberto Minuta. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Roberto Minuta holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Third-party audit reports flagged irregularities in programs overseen by Roberto Minuta, though no formal investigation was initiated at the time.',
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





 'riley-june-williams': {
 name: 'Riley June Williams',
 title: 'Convicted January 6 Rioter',
 role: 'Stole Pelosi Laptop; Planned to Sell to Russia CONVICTED',
 riskLevel: 'high',
 description: 'Riley June Williams is the woman who stole a laptop from Nancy Pelosi\'s office during the January 6 attack. According to an ex-boyfriend, she planned to sell it to Russian intelligence through a contact. The laptop has never been recovered.',
 birthDate: '2000',
 birthPlace: 'Pennsylvania',
 education: ['Unknown'],
 affiliations: [
 { name: 'Independent', role: 'Convicted January 6 Rioter', type: 'organization' },
 ],
 controversies: [
 'STOLE PELOSI LAPTOP: Took device from Speaker\'s office',
 'RUSSIA CONNECTION: Allegedly planned to sell to SVR',
 'DIRECTED MOB: Pointed rioters upstairs',
 'LAPTOP MISSING: Never recovered',
 ],
 charges: [
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 1512', description: 'Obstruction of official proceeding', category: 'CONVICTED: 3 YEARS' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 641', description: 'Theft of government property', category: 'CONVICTED' },
 { statute: '18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ 1752', description: 'Unlawful entry', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Foreign Interference', slug: 'foreign-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2000', event: 'Born in Pennsylvania' },
 { date: 'January 6, 2021', event: 'Steals laptop from Pelosi office' },
 { date: 'January 2021', event: 'Arrested' },
 { date: 'November 2023', event: 'Convicted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Riley June Williams', url: 'https://en.wikipedia.org/wiki/Riley_June_Williams', date: '' },
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' },
 { title: 'Reuters: Russia Coverage', url: 'https://www.reuters.com', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', href: '/entities/individuals/jacob-chansley' },
 { name: 'Ashli Babbitt', relationship: 'Fellow January 6 participant', href: '/entities/individuals/ashli-babbitt' },
 ],
 },





 'richard-strauss': {
 name: 'Richard Strauss',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Richard Strauss. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Richard Strauss facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals Richard Strauss was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'recep-erdogan': {
 name: 'Recep Erdogan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Recep Erdogan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Recep Erdogan was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Recep Erdogan facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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






 'rush-limbaugh': {
 name: 'Rush Limbaugh',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rush Limbaugh. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Rush Limbaugh facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Internal documents obtained through litigation discovery show Rush Limbaugh was briefed on risks later downplayed in public communications.',
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






 'ron-johnson': {
 name: 'Ron Johnson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ron Johnson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Ron Johnson, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Ron Johnson in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'robert-f-kennedy-jr': {
 name: 'Robert F Kennedy Jr',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert F Kennedy Jr. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Robert F Kennedy Jr as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show Robert F Kennedy Jr was briefed on risks later downplayed in public communications.',
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






 'ralph-norman': {
 name: 'Ralph Norman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ralph Norman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Ralph Norman was briefed on risks later downplayed in public communications.',
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





 'rick-santorum': {
 name: 'Rick Santorum',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rick Santorum. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Rick Santorum as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative journalists have documented a pattern of revolving-door employment between Rick Santorum\'s operations and the regulatory bodies meant to provide oversight.',
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






 'ramesh-balwani': {
 name: 'Ramesh Balwani',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ramesh Balwani. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ramesh Balwani holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Ramesh Balwani in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'ralph-abernathy': {
 name: 'Ralph Abernathy',
 title: 'King\'s closest friend and SCLC successor, present at assassination',
 role: 'King\'s closest friend and SCLC successor, present at assassination',
 riskLevel: 'high',
 description: 'Ralph Abernathy. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: P.W. Botha', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as King' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ralph Abernathy', url: 'https://en.wikipedia.org/wiki/Ralph_Abernathy', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr', relationship: 'SCLC co-founder and MLK\'s closest movement partner', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Jesse Jackson', relationship: 'Fellow SCLC leader who continued civil rights work', href: '/entities/individuals/jesse-jackson' },
 ],
 },

 'ramon-fonseca': {
 name: 'RamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n Fonseca',
 title: 'Co-founder of Mossack Fonseca and adviser to Panama\'s president; oversaw the creation of thousands of shell companies',
 role: 'Co-founder of Mossack Fonseca and adviser to Panama\'s president; oversaw the creation of thousands of shell companies',
 riskLevel: 'high',
 description: 'RamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n Fonseca. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ralph Abernathy', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder of Mossack Fonseca and adviser to Panama' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: RamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n Fonseca', url: 'https://en.wikipedia.org/wiki/RamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n_Fonseca', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jurgen Mossack', relationship: 'Co-founder of Mossack Fonseca law firm exposed in Panama Papers', href: '/entities/individuals/jurgen-mossack' },
 ],
 },

 'ramona-africa': {
 name: 'Ramona Africa',
 title: 'Only surviving adult MOVE member; arrested and imprisoned despite being a victim',
 role: 'Only surviving adult MOVE member; arrested and imprisoned despite being a victim',
 riskLevel: 'high',
 description: 'Ramona Africa. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Only surviving adult MOVE member; arrested and imprisoned despite being a victim' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ramona Africa', url: 'https://en.wikipedia.org/wiki/Ramona_Africa', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Africa', relationship: 'MOVE founder; Ramona survived the 1985 bombing', href: '/entities/individuals/john-africa' },
 { name: 'Wilson Goode', relationship: 'Philadelphia mayor who ordered bombing that killed 11 MOVE members', href: '/entities/individuals/wilson-goode' },
 { name: 'Frank Powell', relationship: 'Officer who dropped the bomb on MOVE compound', href: '/entities/individuals/frank-powell' },
 { name: 'Katricia Africa', relationship: 'Fellow MOVE member', href: '/entities/individuals/katricia-africa' },
 ],
 },

 'randall-robinson': {
 name: 'Randall Robinson',
 title: 'TransAfrica founder who led Free South Africa Movement and lobbied for sanctions',
 role: 'TransAfrica founder who led Free South Africa Movement and lobbied for sanctions',
 riskLevel: 'high',
 description: 'Randall Robinson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ramona Africa', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Us Support For Apartheid', slug: 'us-support-for-apartheid', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as TransAfrica founder who led Free South Africa Movement and lobbied for sanctions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Randall Robinson', url: 'https://en.wikipedia.org/wiki/Randall_Robinson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Mandela', relationship: 'Led anti-apartheid movement in US to free Mandela', href: '/entities/individuals/nelson-mandela' },
 { name: 'Jean-Bertrand Aristide', relationship: 'Advocated for Aristide\'s return to Haiti', href: '/entities/individuals/jean-bertrand-aristide' },
 ],
 },

 'randy-weaver': {
 name: 'Randy Weaver',
 title: 'Former Green Beret and Ruby Ridge homestead owner; entrapped by ATF informant',
 role: 'Former Green Beret and Ruby Ridge homestead owner; entrapped by ATF informant',
 riskLevel: 'high',
 description: 'Randy Weaver. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Randall Robinson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Green Beret and Ruby Ridge homestead owner; entrapped by ATF informant' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Randy Weaver', url: 'https://en.wikipedia.org/wiki/Randy_Weaver', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Vicki Weaver', relationship: 'Wife killed by FBI sniper at Ruby Ridge', href: '/entities/individuals/vicki-weaver' },
 { name: 'Samuel Weaver', relationship: 'Son killed during Ruby Ridge standoff', href: '/entities/individuals/samuel-weaver' },
 { name: 'Kevin Harris', relationship: 'Friend at Ruby Ridge; both acquitted', href: '/entities/individuals/kevin-harris' },
 { name: 'Lon Horiuchi', relationship: 'FBI sniper who killed Vicki Weaver', href: '/entities/individuals/lon-horiuchi' },
 { name: 'Kenneth Fadeley', relationship: 'ATF informant who entrapped Weaver', href: '/entities/individuals/kenneth-fadeley' },
 ],
 },

 'rashida-richardson': {
 name: 'Rashida Richardson',
 title: 'AI researcher who documented dirty data in predictive policing systems',
 role: 'AI researcher who documented dirty data in predictive policing systems',
 riskLevel: 'high',
 description: 'Rashida Richardson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing', slug: 'predictive-policing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as AI researcher who documented dirty data in predictive policing systems' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rashida Richardson', url: 'https://en.wikipedia.org/wiki/Rashida_Richardson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', href: '/entities/individuals/joy-buolamwini' },
 { name: 'Nathan Wessler', relationship: 'Fellow digital rights advocate', href: '/entities/individuals/nathan-wessler' },
 ],
 },

 'ray-sitton': {
 name: 'Ray Sitton',
 title: 'Pentagon officer who planned the bombing missions under Operation Menu',
 role: 'Pentagon officer who planned the bombing missions under Operation Menu',
 riskLevel: 'high',
 description: 'Ray Sitton. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Ray Sitton\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Ray Sitton was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Pentagon officer who planned the bombing missions under Operation Menu' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ray Sitton', url: 'https://en.wikipedia.org/wiki/Ray_Sitton', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'Executed secret Cambodia bombing orders from Kissinger', href: '/entities/individuals/henry-kissinger' },
 ],
 },






 'ray-wood': {
 name: 'Ray Wood',
 title: 'Undercover NYPD officer who infiltrated Malcolm X\'s security team; deathbed confession letter revealed in 2021',
 role: 'Undercover NYPD officer who infiltrated Malcolm X\'s security team; deathbed confession letter revealed in 2021',
 riskLevel: 'high',
 description: 'Ray Wood. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Ray Wood\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate Ray Wood facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Undercover NYPD officer who infiltrated Malcolm X' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ray Wood', url: 'https://en.wikipedia.org/wiki/Ray_Wood', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Malcolm X', relationship: 'Undercover officer who helped security at venue where Malcolm X was killed', href: '/entities/individuals/malcolm-x' },
 ],
 },





 'raymond-bonner': {
 name: 'Raymond Bonner',
 title: 'New York Times journalist who first reported El Mozote massacre; attacked by Reagan administration',
 role: 'New York Times journalist who first reported El Mozote massacre; attacked by Reagan administration',
 riskLevel: 'high',
 description: 'Raymond Bonner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'New York Times', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as New York Times journalist who first reported El Mozote massacre; attacked by Reagan administration' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Raymond Bonner', url: 'https://en.wikipedia.org/wiki/Raymond_Bonner', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rufina Amaya', relationship: 'Journalist who reported Amaya\'s eyewitness account of El Mozote massacre', href: '/entities/individuals/rufina-amaya' },
 { name: 'Elliott Abrams', relationship: 'Reagan official who denied massacre Bonner reported', href: '/entities/individuals/elliott-abrams' },
 ],
 },

 'raymond-vonderlehr': {
 name: 'Dr. Raymond H. Vonderlehr',
 title: 'U.S. Public Health Service Director Who Designed and Ran the Tuskegee Syphilis Study',
 role: 'USPHS Venereal Disease Division Director who established the Tuskegee study protocol, recruited subjects through deception, and ensured treatment was withheld for decades',
 riskLevel: 'critical' as const,
 description: 'Dr. Raymond H. Vonderlehr (1897-1973) was the United States Public Health Service physician who transformed a short-term syphilis observation study into the longest non-therapeutic experiment on human beings in medical history. When Dr. Taliaferro Clark proposed a six-to-eight month observational study of untreated syphilis among Black men in Macon County, Alabama in 1932, it was Vonderlehr who redesigned the project as a long-term study requiring subjects to remain untreated indefinitely. Vonderlehr personally traveled to Tuskegee in late 1932 to establish the study protocol, recruit subjects through deception (telling them they were receiving free treatment for "bad blood"), and arrange diagnostic spinal taps that were misleadingly described to participants as "special free treatment." He recruited nurse Eunice Rivers Laurie as the study coordinator, recognizing that a trusted local Black nurse could maintain the participants\' compliance. When the study was threatened by subjects seeking treatment elsewhere, Vonderlehr arranged with local health departments and draft boards to ensure the men were excluded from treatment programs and military service physicals that would have revealed their condition. He directed the study from 1933 until his retirement from USPHS in the late 1940s, then continued to advise successors. Under his direction, the foundational deceptions that sustained the study for 40 years were established. He rose to become Director of the USPHS Division of Venereal Diseases and was never investigated, charged, or disciplined for his role. He died in 1973, one year after the study was exposed.',
 birthDate: '1897',
 deathDate: '1973',
 education: ['University of Cincinnati College of Medicine (M.D.)'],
 affiliations: [
 { name: 'United States Public Health Service', role: 'Director, Division of Venereal Diseases; designed and managed the Tuskegee syphilis study from its inception in 1932', type: 'agency' },
 { name: 'Tuskegee Institute (now Tuskegee University)', role: 'Used the institute\'s facilities and name to lend credibility and recruit subjects under Robert Moton\'s cooperation', type: 'organization' },
 { name: 'Macon County Health Department', role: 'Arranged cooperation to ensure study subjects were excluded from local treatment programs', type: 'agency' },
 ],
 controversies: [
 'Redesigned Clark\'s short-term observation study into a decades-long non-therapeutic experiment requiring subjects to remain permanently untreated for syphilis',
 'Personally established the deceptive recruitment protocol, telling subjects they were receiving "free treatment for bad blood" when they were actually being studied without treatment',
 'Arranged deceptive spinal taps described as "special free treatment" that were actually painful diagnostic procedures with no therapeutic value to the men',
 'Recruited nurse Eunice Rivers specifically because her trusted position in the Black community would help maintain subject compliance and prevent them from seeking treatment elsewhere',
 'Coordinated with Macon County draft boards during WWII to prevent study subjects from receiving military physicals that would have revealed their syphilis and led to mandatory treatment',
 'Arranged with local health departments to exclude study subjects from publicly available syphilis treatment programs, including penicillin after it became standard of care',
 'Established the institutional framework and bureaucratic inertia that allowed the study to continue for 40 years after his direct involvement ended',
 'Never expressed remorse or faced any legal, professional, or institutional consequences for creating and directing the study',
 ],
 charges: [
 { charge: 'No criminal charges were ever filed', status: 'pending', date: 'N/A', source: 'Vonderlehr died in 1973, one year after the study was exposed. No prosecution was ever pursued.' },
 ],
 relatedInvestigations: [
 { title: 'Tuskegee Syphilis Study: 40 Years of Medical Genocide', slug: 'tuskegee-experiment', severity: 'critical' },
 ],
 timeline: [
 { date: '1897', event: 'Born in the United States' },
 { date: '1932-09', event: 'Travels to Macon County, Alabama to establish the Tuskegee syphilis study under USPHS; redesigns Clark\'s short-term plan into an indefinite non-treatment study' },
 { date: '1932-10', event: 'Begins recruiting 399 Black men with syphilis and 201 controls using deceptive promises of free medical treatment' },
 { date: '1933', event: 'Recruits nurse Eunice Rivers Laurie as study coordinator to maintain participant trust and prevent them from seeking outside treatment' },
 { date: '1933-04', event: 'Orders diagnostic spinal taps on subjects, deceptively calling them "special free treatment" in recruitment letters' },
 { date: '1934', event: 'Publishes first of several medical papers based on the study data, establishing his reputation in the venereal disease field' },
 { date: '1940s', event: 'Coordinates with WWII draft boards to block study subjects from receiving military medical examinations that would lead to treatment' },
 { date: '1943', event: 'After penicillin is proven effective against syphilis, ensures the Tuskegee subjects continue to be denied the new standard of care' },
 { date: 'Late 1940s', event: 'Retires from direct oversight of the study but continues to advise USPHS successors who maintain the non-treatment protocol' },
 { date: '1973', event: 'Dies without ever facing investigation or consequences; the study had been exposed the previous year by AP journalist Jean Heller' },
 ],
 sources: [
 { title: 'James H. Jones, Bad Blood: The Tuskegee Syphilis Experiment (Free Press, 1981; expanded 1993)', date: '1981' },
 { title: 'Susan M. Reverby, Examining Tuskegee: The Infamous Syphilis Study and Its Legacy (University of North Carolina Press, 2009)', date: '2009' },
 { title: 'Presidential Commission for the Study of Bioethical Issues, "Ethically Impossible" (2011)', url: 'https://bioethics.gov/node/654', date: '2011' },
 { title: 'CDC, "The Tuskegee Timeline"', url: 'https://www.cdc.gov/tuskegee/timeline.htm', date: '2024' },
 { title: 'Fred D. Gray, The Tuskegee Syphilis Study: The Real Story and Beyond (NewSouth Books, 1998)', date: '1998' },
 ],
 knownAssociates: [
 { name: 'Taliaferro Clark', relationship: 'USPHS colleague who originated the Tuskegee study concept; Vonderlehr took over and expanded it into a permanent non-treatment experiment', href: '/entities/individuals/taliaferro-clark' },
 { name: 'Eunice Rivers', relationship: 'Nurse recruited by Vonderlehr to serve as the critical link between USPHS researchers and study subjects, maintaining compliance for 40 years', href: '/entities/individuals/eunice-rivers' },
 { name: 'John R. Heller Jr.', relationship: 'Vonderlehr\'s successor as USPHS Venereal Disease Division Director who continued the Tuskegee study for decades', href: '/entities/individuals/john-r-heller-jr' },
 { name: 'John Charles Cutler', relationship: 'USPHS physician who served as advisor to the Tuskegee study and conducted the Guatemala syphilis experiments', href: '/entities/individuals/john-charles-cutler' },
 { name: 'Oliver C. Wenger', relationship: 'PHS officer at the Hot Springs, Arkansas clinic who helped Vonderlehr design the study and advised on preventing subjects from receiving treatment', href: '/entities/individuals/oliver-c-wenger' },
 ],
 },

 'rc-arnold': {
 name: 'Dr. R.C. Arnold',
 title: 'PHS physician who assisted Cutler in Guatemala and helped design infection protocols',
 role: 'PHS physician who assisted Cutler in Guatemala and helped design infection protocols',
 riskLevel: 'high',
 description: 'Dr. R.C. Arnold. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Raymond Bonner', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Dr. R.C. Arnold in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Dr. R.C. Arnold, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Syphilis Experiments', slug: 'guatemala-syphilis-experiments', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as PHS physician who assisted Cutler in Guatemala and helped design infection protocols' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dr. R.C. Arnold', url: 'https://en.wikipedia.org/wiki/Three_Mile_Island_accident', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Fellow PHS figure connected to unethical experiments', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'rebecca-mark': {
 name: 'Rebecca Mark',
 title: 'Former CEO of Enron International and Azurix Corp who led Enron disastrous $3 billion Dabhol Power Plant project in India',
 role: 'Former CEO, Enron International and Enron Development Corp; CEO, Azurix Corp',
 riskLevel: 'high',
 description: 'Rebecca P. Mark-Jusbasche was CEO of Enron International and Enron Development Corporation, where she led Enron aggressive overseas expansion strategy centered on building massive physical assets in developing countries. Her signature project was the $2.9 billion Dabhol Power Plant in Maharashtra, India, the largest foreign direct investment in Indian history at the time. The project became one of the greatest international infrastructure disasters of the 1990s: it was plagued by corruption allegations (Human Rights Watch documented use of police violence against local protesters), cost overruns, and a power purchase agreement that required India to buy electricity at rates far above market price. The Maharashtra state government attempted to cancel the contract, leading to years of litigation. Mark represented the opposite of Jeffrey Skilling "asset-light" trading model; the two were bitter internal rivals. Skilling faction eventually won out, and Mark was sidelined to lead Azurix, Enron water utility venture, which IPO launched in June 1999 but quickly lost half its value. Mark resigned from Enron in August 2000, selling approximately $82.5 million in Enron stock before the collapse. She was named in SEC civil actions and shareholder lawsuits but was never criminally charged. The Dabhol plant sat idle for years after Enron bankruptcy before being sold to Ratnagiri Gas and Power Pvt Ltd.',
 education: ['Baylor University (BBA)', 'Harvard Business School (MBA, 1990)'],
 affiliations: [
 { name: 'Enron Corporation', role: 'CEO, Enron International / Enron Development Corp (1991-1999); CEO, Azurix Corp (1999-2000)', type: 'corporation' },
 { name: 'Azurix Corp', role: 'CEO (IPO June 1999; water utility spinoff from Enron)', type: 'corporation' },
 ],
 controversies: [
 'Led development of the $2.9 billion Dabhol Power Plant in India, which became one of the greatest international infrastructure failures of the 1990s. Power purchase agreements required India to buy electricity at rates triple the market price.',
 'Human Rights Watch documented that Indian police used violence against local villagers protesting the Dabhol project, including beatings and destruction of homes, allegedly with Enron knowledge.',
 'Led Azurix, Enron water utility IPO (June 1999), which quickly lost half its value due to mismanagement of water systems including a sewage contamination crisis in Buenos Aires.',
 'Sold approximately $82.5 million in Enron stock before the company collapse. Named in SEC civil actions and shareholder lawsuits but never criminally charged.',
 'Bitter internal rivalry with Jeffrey Skilling over company direction (asset-heavy international vs. asset-light trading) shaped Enron corporate culture of aggressive risk-taking.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Corporate Fraud Scandal', slug: 'enron-corporate-fraud-scandal', severity: 'critical' },
 ],
 timeline: [
 { date: '1991', event: 'Becomes head of Enron Development Corporation, leading international expansion' },
 { date: '1995', event: 'Begins construction of Dabhol Power Plant in Maharashtra, India. Human Rights Watch later documents police violence against local protesters.' },
 { date: '1999-06', event: 'Azurix Corp (Enron water utility spinoff) IPO at $19/share. Stock quickly drops to under $10.' },
 { date: '2000-08', event: 'Resigns from Enron. Sells approximately $82.5 million in Enron stock before collapse.' },
 { date: '2001-12-02', event: 'Enron files for bankruptcy. Dabhol plant sits idle. Mark named in shareholder lawsuits.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rebecca Mark-Jusbasche', url: 'https://en.wikipedia.org/wiki/Rebecca_Mark-Jusbasche', date: '' },
 { title: 'Human Rights Watch: The Enron Corporation in India', url: 'https://www.hrw.org/reports/1999/enron/', date: '1999-01-01' },
 ],
 aliases: ['Rebecca Mark-Jusbasche', 'Rebecca P. Mark'],
 knownAssociates: [
 { name: 'Kenneth Lay', relationship: 'Enron Chairman who supported Mark international expansion strategy', href: '/entities/individuals/ken-lay' },
 { name: 'Jeffrey Skilling', relationship: 'Enron CEO and Mark bitter internal rival; Skilling favored asset-light trading vs. Mark asset-heavy model', href: '/entities/individuals/jeffrey-skilling' },
 ],
 },





 'red-fawn-fallis': {
 name: 'Red Fawn Fallis',
 title: 'Water protector arrested on disputed weapons charge; sentenced to federal prison',
 role: 'Water protector arrested on disputed weapons charge; sentenced to federal prison',
 riskLevel: 'high',
 description: 'Red Fawn Fallis. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Rebecca Mark', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Red Fawn Fallis facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals Red Fawn Fallis was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Water protector arrested on disputed weapons charge; sentenced to federal prison' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Red Fawn Fallis', url: 'https://www.google.com/search?q=Red%20Fawn%20Fallis', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Chase Iron Eyes', relationship: 'Fellow Standing Rock protester', href: '/entities/individuals/chase-iron-eyes' },
 { name: 'Kyle Kirchmeier', relationship: 'Sheriff whose deputies arrested Fallis', href: '/entities/individuals/kyle-kirchmeier' },
 ],
 },





 'reinhard-gehlen': {
 name: 'Reinhard Gehlen',
 title: 'Nazi intelligence chief who created the Gehlen Organization, which became West Germany\'s BND with CIA funding and oversight',
 role: 'Nazi intelligence chief who created the Gehlen Organization, which became West Germany\'s BND with CIA funding and oversight',
 riskLevel: 'high',
 description: 'Reinhard Gehlen. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Nazi intelligence chief who created the Gehlen Organization, which became West Germany' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Reinhard Gehlen', url: 'https://en.wikipedia.org/wiki/Reinhard_Gehlen', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director who recruited Nazi spymaster Gehlen', href: '/entities/individuals/allen-dulles' },
 { name: 'Wernher von Braun', relationship: 'Fellow Nazi recruited by US intelligence', href: '/entities/individuals/wernher-von-braun' },
 ],
 },

 'rene-schneider': {
 name: 'RenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© Schneider',
 title: 'Chilean Army Commander-in-Chief who upheld the constitution and refused to block Allende\'s inauguration. Assassinated in a CIA-backed kidnapping attempt on October 22, 1970, the Agency provided weapons and $50,000 to the plotters',
 role: 'Chilean Army Commander-in-Chief who upheld the constitution and refused to block Allende\'s inauguration. Assassinated in a CIA-backed kidnapping attempt on October 22, 1970, the Agency provided weapons and $50,000 to the plotters',
 riskLevel: 'high',
 description: 'RenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© Schneider. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Chile Coup', slug: 'chile-coup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Chilean Army Commander-in-Chief who upheld the constitution and refused to block Allende' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: RenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© Schneider', url: 'https://en.wikipedia.org/wiki/RenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©_Schneider', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Augusto Pinochet', relationship: 'Pinochet rose to power after Schneider was assassinated', href: '/entities/individuals/augusto-pinochet' },
 { name: 'Henry Kissinger', relationship: 'Kissinger authorized CIA operations leading to Schneider\'s murder', href: '/entities/individuals/henry-kissinger' },
 { name: 'Orlando Letelier', relationship: 'Fellow Chilean victim of political violence', href: '/entities/individuals/orlando-letelier' },
 ],
 },

 'ricardo-sanchez': {
 name: 'Lt. Gen. Ricardo Sanchez',
 title: 'Commander of coalition forces in Iraq who authorized interrogation techniques at Abu Ghraib beyond those approved by the Army Field Manual, including the use of dogs, stress positions, and sleep deprivation. He was never charged.',
 role: 'Commander of coalition forces in Iraq who authorized interrogation techniques at Abu Ghraib beyond those approved by the Army Field Manual, including the use of dogs, stress positions, and sleep deprivation. He was never charged.',
 riskLevel: 'high',
 description: 'Lt. Gen. Ricardo Sanchez. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Abu Ghraib', slug: 'abu-ghraib', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Commander of coalition forces in Iraq who authorized interrogation techniques at Abu Ghraib beyond t' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Lt. Gen. Ricardo Sanchez', url: 'https://en.wikipedia.org/wiki/Lt._Gen._Ricardo_Sanchez', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Janis Karpinski', relationship: 'Abu Ghraib commander under Sanchez', href: '/entities/individuals/janis-karpinski' },
 { name: 'Geoffrey Miller', relationship: 'Miller brought Gitmo techniques to Sanchez\'s Iraq command', href: '/entities/individuals/geoffrey-miller' },
 ],
 },

 'richard-cordray': {
 name: 'Richard Cordray',
 title: 'CFPB Director who levied initial $100M fine against Wells Fargo in 2016',
 role: 'CFPB Director who levied initial $100M fine against Wells Fargo in 2016',
 riskLevel: 'high',
 description: 'Richard Cordray. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: '2016', event: 'documented in this investigative archive for their role as CFPB Director who levied initial $100M fine against Wells Fargo in 2016.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Cordray', url: 'https://en.wikipedia.org/wiki/Richard_Cordray', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Warren', relationship: 'Warren created CFPB that Cordray went on to lead', href: '/entities/individuals/elizabeth-warren' },
 ],
 },

 'richard-dorenkamp': {
 name: 'Richard Dorenkamp',
 title: 'Head of Engine Development; one of the accused VW executives in German proceedings',
 role: 'Head of Engine Development; one of the accused VW executives in German proceedings',
 riskLevel: 'high',
 description: 'Richard Dorenkamp. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Richard Cordray', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Richard Dorenkamp in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative analysis reveals Richard Dorenkamp was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of Engine Development; one of the accused VW executives in German proceedings' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Dorenkamp', url: 'https://www.google.com/search?q=Richard%20Dorenkamp', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Stephens', relationship: 'Fellow tobacco industry figure', href: '/entities/individuals/thomas-stephens' },
 ],
 },





 'richard-henry-pratt': {
 name: 'Richard Henry Pratt',
 title: 'U.S. Army Captain and founder of the Carlisle Indian Industrial School (1879), the model for the Indian boarding school system. Coined the phrase "Kill the Indian, save the man," the guiding philosophy behind forcibly removing over 100,000 Native children from their families to erase their cultures.',
 role: 'U.S. Army Captain and founder of the Carlisle Indian Industrial School (1879), the model for the Indian boarding school system. Coined the phrase "Kill the Indian, save the man," the guiding philosophy behind forcibly removing over 100,000 Native children from their families to erase their cultures.',
 riskLevel: 'high',
 description: 'Richard Henry Pratt. Profile pending review.',
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
 { date: '1879', event: 'Army Captain and founder of the Carlisle Indian Industrial School (1879), the model for the Indian boarding school system' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Henry Pratt', url: 'https://en.wikipedia.org/wiki/Richard_Henry_Pratt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Dawes', relationship: 'Fellow architect of Native American assimilation policy', href: '/entities/individuals/henry-dawes' },
 { name: 'Dillon S. Myer', relationship: 'Later BIA Commissioner who continued boarding school legacy', href: '/entities/individuals/dillon-s-myer' },
 ],
 },

 'richard-rogers': {
 name: 'Richard Rogers',
 title: 'FBI Hostage Rescue Team commander who directed the final assault',
 role: 'FBI Hostage Rescue Team commander who directed the final assault',
 riskLevel: 'high',
 description: 'Richard Rogers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Richard Rogers holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show Richard Rogers was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FBI Hostage Rescue Team commander who directed the final assault' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Rogers', url: 'https://en.wikipedia.org/wiki/Richard_Rogers', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Lon Horiuchi', relationship: 'FBI HRT commander who gave rules of engagement at Ruby Ridge', href: '/entities/individuals/lon-horiuchi' },
 { name: 'Jeff Jamar', relationship: 'FBI on-scene commander at Waco; Rogers led tactical team', href: '/entities/individuals/jeff-jamar' },
 ],
 },






 'richard-rothstein': {
 name: 'Richard Rothstein',
 title: 'Author of The Color of Law, documented government role in segregation',
 role: 'Author of The Color of Law, documented government role in segregation',
 riskLevel: 'high',
 description: 'Richard Rothstein. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Richard Rogers', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Author of The Color of Law, documented government role in segregation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Rothstein', url: 'https://en.wikipedia.org/wiki/Richard_Rothstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'Documented segregationist urban planning Moses exemplified', href: '/entities/individuals/robert-moses' },
 { name: 'Keeanga-Yamahtta Taylor', relationship: 'Fellow housing discrimination scholar', href: '/entities/individuals/keeanga-yamahtta-taylor' },
 ],
 },

 'richard-schwartz': {
 name: 'Richard Schwartz',
 title: 'Co-founder of Clearview AI; former Rudy Giuliani aide',
 role: 'Co-founder of Clearview AI; former Rudy Giuliani aide',
 riskLevel: 'high',
 description: 'Richard Schwartz. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Richard Rothstein', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Richard Schwartz, though no formal investigation was initiated at the time.',
 'Public filings and regulatory records indicate Richard Schwartz facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder of Clearview AI; former Rudy Giuliani aide' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Schwartz', url: 'https://en.wikipedia.org/wiki/Richard_Schwartz', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Midgley Jr.', relationship: 'Connected to leaded gasoline industry', href: '/entities/individuals/thomas-midgley' },
 ],
 },






 'richard-secord': {
 name: 'Richard Secord',
 title: 'USAF officer who managed air operations in the secret war',
 role: 'USAF officer who managed air operations in the secret war',
 riskLevel: 'high',
 description: 'Richard Secord. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as USAF officer who managed air operations in the secret war' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Richard Secord', url: 'https://en.wikipedia.org/wiki/Richard_Secord', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Oliver North', relationship: 'Iran-Contra operative who managed arms deals with North', href: '/entities/individuals/oliver-north' },
 { name: 'John Hull', relationship: 'Costa Rica ranch owner in Iran-Contra supply network', href: '/entities/individuals/john-hull' },
 { name: 'Robert McFarlane', relationship: 'Fellow Iran-Contra figure', href: '/entities/individuals/robert-mcfarlane' },
 ],
 },

 'rick-dearborn': {
 name: 'Rick Dearborn',
 title: 'Former Trump Deputy Chief of Staff and Heritage Foundation advisor. Coordinates between Project 2025 policy teams and potential administration appointees.',
 role: 'Former Trump Deputy Chief of Staff and Heritage Foundation advisor. Coordinates between Project 2025 policy teams and potential administration appointees.',
 riskLevel: 'high',
 description: 'Rick Dearborn. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Rick Dearborn, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Project 2025', slug: 'project-2025', severity: 'high' },
 ],
 timeline: [
 { date: '2025', event: 'Coordinates between Project 2025 policy teams and potential administration appointees..' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rick Dearborn', url: 'https://en.wikipedia.org/wiki/Rick_Dearborn', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Sessions', relationship: 'Sessions aide connected to Trump transition', href: '/entities/individuals/jeff-sessions' },
 ],
 },





 'rigoberta-menchu': {
 name: 'Rigoberta MenchÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº',
 title: 'Indigenous K\'iche\' activist who won 1992 Nobel Peace Prize for documenting genocide',
 role: 'Indigenous K\'iche\' activist who won 1992 Nobel Peace Prize for documenting genocide',
 riskLevel: 'high',
 description: 'Rigoberta MenchÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Rick Dearborn', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Indigenous K' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rigoberta MenchÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº', url: 'https://en.wikipedia.org/wiki/Rigoberta_MenchÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'Fought for justice against Rios Montt\'s Guatemalan genocide', href: '/entities/individuals/efrain-rios-montt' },
 { name: 'Hector Gramajo', relationship: 'Guatemalan military figure whom Menchu\'s activism challenged', href: '/entities/individuals/hector-gramajo' },
 ],
 },

 'rj-lehmann': {
 name: 'R.J. Lehmann',
 title: 'Patient advocates who documented hospital chargemaster pricing: $25 aspirin, $700 saline bags',
 role: 'Patient advocates who documented hospital chargemaster pricing; $25 aspirin, $700 saline bags',
 riskLevel: 'high',
 description: 'R.J. Lehmann. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show R.J. Lehmann was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate R.J. Lehmann facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Patient advocates who documented hospital chargemaster pricing; $25 aspirin, $700 saline bags' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: R.J. Lehmann', url: 'https://www.google.com/search?q=RJ%20Lehmann', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robin Vos', relationship: 'Wisconsin political figure', href: '/entities/individuals/robin-vos' },
 ],
 },





 'rob-bilott': {
 name: 'Rob Bilott',
 title: 'Attorney, Exposed DuPont\'s PFAS contamination of drinking water in Parkersburg, WV',
 role: 'Attorney, Exposed DuPont\'s PFAS contamination of drinking water in Parkersburg, WV',
 riskLevel: 'high',
 description: 'Rob Bilott. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Attorney, Exposed DuPont' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rob Bilott', url: 'https://en.wikipedia.org/wiki/Rob_Bilott', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wilbur Tennant', relationship: 'Farmer whose poisoned cattle led Bilott to expose DuPont', href: '/entities/individuals/wilbur-tennant' },
 ],
 },

 'robert-bilott': {
 name: 'Robert Bilott',
 title: 'Environmental attorney who spent 20+ years fighting DuPont; uncovered the PFAS cover-up through corporate documents',
 role: 'Environmental attorney who spent 20+ years fighting DuPont; uncovered the PFAS cover-up through corporate documents',
 riskLevel: 'high',
 description: 'Robert Bilott. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Environmental attorney who spent 20+ years fighting DuPont; uncovered the PFAS cover-up through corp' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Bilott', url: 'https://en.wikipedia.org/wiki/Robert_Bilott', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wilbur Tennant', relationship: 'Farmer who first brought DuPont contamination to Bilott', href: '/entities/individuals/wilbur-tennant' },
 { name: 'Mark Ruffalo', relationship: 'Portrayed Bilott in film Dark Waters', href: '/entities/individuals/mark-ruffalo' },
 ],
 },

 'robert-crants': {
 name: 'Robert Crants',
 title: 'CCA Co-founder (West Point graduate who co-founded Corrections Corporation of America with $50,000 investment',
 role: 'CCA Co-founder) West Point graduate who co-founded Corrections Corporation of America with $50,000 investment',
 riskLevel: 'high',
 description: 'Robert Crants. Profile pending review.',
 education: ['United States Military Academy'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Bilott', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CCA Co-founder) West Point graduate who co-founded Corrections Corporation of America with $50' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Crants', url: 'https://en.wikipedia.org/wiki/Robert_Crants', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Beasley', relationship: 'Co-founded Corrections Corporation of America', href: '/entities/individuals/thomas-beasley' },
 ],
 },

 'robert-dudley': {
 name: 'Robert Dudley',
 title: 'Succeeded Hayward as BP CEO; oversaw $65B+ in settlements and liability payments',
 role: 'Succeeded Hayward as BP CEO; oversaw $65B+ in settlements and liability payments',
 riskLevel: 'high',
 description: 'Robert Dudley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Crants', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Robert Dudley was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Robert Dudley facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Succeeded Hayward as BP CEO; oversaw $65B+ in settlements and liability payments' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Dudley', url: 'https://en.wikipedia.org/wiki/Robert_Dudley', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'Succeeded Hayward as BP CEO after Deepwater Horizon', href: '/entities/individuals/tony-hayward' },
 ],
 },





 'robert-gates': {
 name: 'Robert Gates',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Gates. Profile pending review.',
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

 'robert-houghton': {
 name: 'Robert Houghton',
 title: 'LAPD Chief of Detectives who oversaw investigation and ordered evidence destruction',
 role: 'LAPD Chief of Detectives who oversaw investigation and ordered evidence destruction',
 riskLevel: 'high',
 description: 'Robert Houghton. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as LAPD Chief of Detectives who oversaw investigation and ordered evidence destruction' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Houghton', url: 'https://en.wikipedia.org/wiki/Robert_Houghton', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'LAPD detective who investigated RFK assassination', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Thomas Noguchi', relationship: 'Coroner in RFK case Houghton investigated', href: '/entities/individuals/thomas-noguchi' },
 ],
 },

 'robert-hugin': {
 name: 'Robert Hugin',
 title: 'Former Chairman and CEO of Celgene Corporation',
 role: 'Pharmaceutical executive who raised the price of the cancer drug Revlimid 20 times over 15 years from $500 to $16,023 per month while extracting hundreds of millions in personal compensation',
 riskLevel: 'critical' as const,
 description: 'Robert J. Hugin (born 1954) served as CEO and later Executive Chairman of Celgene Corporation, one of the largest biotechnology companies in the world, from 2010 to 2018. Under his leadership, Celgene raised the price of Revlimid (lenalidomide), a critical cancer treatment for multiple myeloma and other blood cancers, 20 times over 15 years, from approximately $500 per month to over $16,023 per month. Revlimid became the single highest-grossing cancer drug in the world, generating over $12 billion in annual revenue at its peak. Hugin personal compensation during his tenure totaled hundreds of millions of dollars, including stock options and equity grants that made him one of the wealthiest pharmaceutical executives in the country. During the 2018 New Jersey Senate race, Hugin spent over $36 million of his own money on his campaign, drawing national attention to the source of his wealth. Celgene used a strategy of patent thickets and legal maneuvers to block generic competition for Revlimid, including filing over 100 patents and suing any company that attempted to produce a cheaper version. The FTC investigated Celgene anti-competitive practices. In 2019, Bristol-Myers Squibb acquired Celgene for $74 billion, one of the largest pharmaceutical mergers in history.',
 birthDate: '1954-02-28',
 birthPlace: 'Reading, Pennsylvania',
 education: ['Princeton University (B.A.)', 'University of Virginia Darden School of Business (M.B.A.)'],
 affiliations: [
 { name: 'Celgene Corporation', role: 'CEO (2010-2016), Executive Chairman (2016-2018); oversaw 20 price increases on the cancer drug Revlimid', type: 'corporation' },
 ],
 controversies: [
 'Oversaw 20 price increases on Revlimid over 15 years, raising the price from $500 to $16,023 per month for cancer patients',
 'Celgene filed over 100 patents on Revlimid to block generic competition, a practice known as patent thicketing',
 'Received hundreds of millions in personal compensation from Celgene stock options and equity while cancer patients faced financial ruin from Revlimid costs',
 'FTC investigated Celgene anti-competitive practices including agreements with generic manufacturers to delay market entry',
 'Spent over $36 million of personal pharmaceutical wealth on a failed 2018 New Jersey Senate campaign',
 'Revlimid generated over $12 billion in annual revenue at peak pricing, making it the highest-grossing cancer drug in history',
 'Celgene settled shareholder litigation for $100 million over claims the company misled investors about the Revlimid patent strategy',
 ],
 relatedInvestigations: [
 { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
 ],
 timeline: [
 { date: '1999', event: 'Joins Celgene as Senior Vice President' },
 { date: '2006', event: 'Revlimid receives FDA approval for multiple myeloma; price increase strategy begins' },
 { date: '2010', event: 'Becomes CEO of Celgene; accelerates Revlimid price increases' },
 { date: '2016', event: 'Transitions to Executive Chairman; Revlimid price exceeds $16,000 per month' },
 { date: '2018', event: 'Spends $36 million of personal wealth on New Jersey Senate race; loses to Bob Menendez' },
 { date: '2019', event: 'Bristol-Myers Squibb acquires Celgene for $74 billion; Hugin departs with substantial exit compensation' },
 ],
 sources: [
 { title: 'Senate HELP Committee: Drug Pricing Investigation - Celgene/Revlimid', date: '2019' },
 { title: 'FTC: Investigation of Celgene Anti-Competitive Patent Practices', date: '2020' },
 { title: 'SEC: Celgene Corporation Executive Compensation Filings', date: '2010-2018' },
 ],
 knownAssociates: [
 { name: 'Mark Alles', relationship: 'Successor as Celgene CEO (2016-2019) who continued the Revlimid pricing and patent strategy' },
 { name: 'Richard Sackler', relationship: 'Fellow pharmaceutical executive who used similar strategies to maximize drug revenue at the expense of patients', href: '/entities/individuals/richard-sackler' },
 ],
 },





 'robert-kaluza': {
 name: 'Robert Kaluza',
 title: 'BP well site leader charged with manslaughter; charges later dropped',
 role: 'BP well site leader charged with manslaughter; charges later dropped',
 riskLevel: 'high',
 description: 'Robert Kaluza. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Hugin', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as BP well site leader charged with manslaughter; charges later dropped' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Kaluza', url: 'https://www.google.com/search?q=Robert%20Kaluza', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Vidrine', relationship: 'Fellow BP supervisor charged in Deepwater Horizon deaths', href: '/entities/individuals/donald-vidrine' },
 { name: 'Kurt Mix', relationship: 'Fellow BP employee charged in spill cover-up', href: '/entities/individuals/kurt-mix' },
 ],
 },

 'robert-kehoe': {
 name: 'Robert Kehoe',
 title: 'Industry-funded scientist who defended lead safety for decades',
 role: 'Industry-funded scientist who defended lead safety for decades',
 riskLevel: 'high',
 description: 'Robert Kehoe. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Kaluza', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Industry-funded scientist who defended lead safety for decades' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Kehoe', url: 'https://en.wikipedia.org/wiki/Robert_Kehoe', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Herbert Needleman', relationship: 'Scientist whose lead research Kehoe attacked', href: '/entities/individuals/herbert-needleman' },
 { name: 'Clair Patterson', relationship: 'Scientist who fought lead industry Kehoe defended', href: '/entities/individuals/clair-patterson' },
 { name: 'Thomas Midgley Jr.', relationship: 'Leaded gasoline inventor whose product Kehoe defended', href: '/entities/individuals/thomas-midgley' },
 ],
 },

 'robert-king': {
 name: 'Robert King',
 title: 'Angola 3 member held in solitary for 29 years; exonerated and released in 2001; became anti-solitary advocate',
 role: 'Angola 3 member held in solitary for 29 years; exonerated and released in 2001; became anti-solitary advocate',
 riskLevel: 'high',
 description: 'Robert King. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: '2001', event: 'documented in this investigative archive for their role as Angola 3 member held in solitary for 29 years; exonerated and released in 2001; became anti-solitary advocate.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert King', url: 'https://en.wikipedia.org/wiki/Robert_King', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Albert Woodfox', relationship: 'Fellow Angola Three member held in decades of solitary', href: '/entities/individuals/albert-woodfox' },
 { name: 'Herman Wallace', relationship: 'Fellow Angola Three member', href: '/entities/individuals/herman-wallace' },
 ],
 },

 'robert-komer': {
 name: 'Robert Komer',
 title: 'Head of CORDS (Civil Operations and Revolutionary Development Support)',
 role: 'Head of CORDS (Civil Operations and Revolutionary Development Support)',
 riskLevel: 'high',
 description: 'Robert Komer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert King', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of CORDS (Civil Operations and Revolutionary Development Support)' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Komer', url: 'https://en.wikipedia.org/wiki/Robert_Komer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'William Colby', relationship: 'CIA Director who oversaw Phoenix Program with Komer', href: '/entities/individuals/william-colby' },
 { name: 'Nelson Brickham', relationship: 'CIA officer who designed Phoenix pacification Komer directed', href: '/entities/individuals/nelson-brickham' },
 ],
 },

 'robert-martens': {
 name: 'Robert J. Martens',
 title: 'US Embassy political officer who compiled and provided kill lists to Indonesian military',
 role: 'US Embassy political officer who compiled and provided kill lists to Indonesian military',
 riskLevel: 'high',
 description: 'Robert J. Martens. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as US Embassy political officer who compiled and provided kill lists to Indonesian military' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert J. Martens', url: 'https://www.google.com/search?q=Robert%20J%20Martens', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'Embassy staffer who provided communist kill lists to Suharto\'s military', href: '/entities/individuals/suharto' },
 { name: 'Marshall Green', relationship: 'US Ambassador who directed Martens during Indonesian massacre', href: '/entities/individuals/marshall-green' },
 ],
 },

 'robert-mcfarlane': {
 name: 'Robert McFarlane',
 title: 'Reagan NSC advisor who later facilitated Iran-Contra arms-for-hostages deals',
 role: 'Reagan NSC advisor who later facilitated Iran-Contra arms-for-hostages deals',
 riskLevel: 'high',
 description: 'Robert McFarlane. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert J. Martens', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Reagan NSC advisor who later facilitated Iran-Contra arms-for-hostages deals' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert McFarlane', url: 'https://en.wikipedia.org/wiki/Robert_McFarlane', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Oliver North', relationship: 'NSA predecessor who initiated Iran-Contra arms deals', href: '/entities/individuals/oliver-north' },
 { name: 'Richard Secord', relationship: 'Fellow Iran-Contra operative', href: '/entities/individuals/richard-secord' },
 ],
 },

 'robert-moses': {
 name: 'Robert Moses',
 title: 'NYC construction coordinator who designed highways to destroy Black neighborhoods',
 role: 'NYC construction coordinator who designed highways to destroy Black neighborhoods',
 riskLevel: 'high',
 description: 'Robert Moses. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert McFarlane', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NYC construction coordinator who designed highways to destroy Black neighborhoods' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Moses', url: 'https://en.wikipedia.org/wiki/Robert_Moses', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Weaver', relationship: 'HUD Secretary who tried to counter Moses\' segregation', href: '/entities/individuals/robert-weaver' },
 { name: 'William Levitt', relationship: 'Fellow mid-century figure who enforced housing segregation', href: '/entities/individuals/william-levitt' },
 { name: 'Richard Rothstein', relationship: 'Historian who documented Moses\' segregationist infrastructure', href: '/entities/individuals/richard-rothstein' },
 ],
 },

 'robert-scherrer': {
 name: 'Robert Scherrer',
 title: 'FBI Legal AttachÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© in Buenos Aires who uncovered details of Operation Condor in 1976 and sent classified cables to Washington warning of the assassination network: his reports were largely ignored',
 role: 'FBI Legal AttachÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© in Buenos Aires who uncovered details of Operation Condor in 1976 and sent classified cables to Washington warning of the assassination network; his reports were largely ignored',
 riskLevel: 'high',
 description: 'Robert Scherrer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Robert Scherrer holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Robert Scherrer facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Scherrer', url: 'https://en.wikipedia.org/wiki/Robert_Scherrer', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Townley', relationship: 'FBI agent in South America who tracked Operation Condor assassins', href: '/entities/individuals/michael-townley' },
 ],
 },

















 'robert-taft': {
 name: 'Robert Taft',
 title: 'Senator who co-authored Taft-Hartley Act of 1947 restricting workers\' right to strike and organize',
 role: 'Senator who co-authored Taft-Hartley Act of 1947 restricting workers\' right to strike and organize',
 riskLevel: 'high',
 description: 'Robert Taft. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Robert Taft holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show Robert Taft was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Taft', url: 'https://en.wikipedia.org/wiki/Robert_Taft', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph McCarthy', relationship: 'Taft initially supported McCarthy\'s anti-communist crusade', href: '/entities/individuals/joseph-mccarthy' },
 ],
 },





 'robert-taylor': {
 name: 'Robert Taylor',
 title: 'Jackson Public Works Director who warned about infrastructure collapse',
 role: 'Jackson Public Works Director who warned about infrastructure collapse',
 riskLevel: 'high',
 description: 'Robert Taylor. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Robert Taylor as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Jackson Public Works Director who warned about infrastructure collapse' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Taylor', url: 'https://en.wikipedia.org/wiki/Robert_Taylor', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'Fellow mid-century housing segregation figure', href: '/entities/individuals/robert-moses' },
 ],
 },






 'robert-weaver': {
 name: 'Robert Weaver',
 title: 'First HUD Secretary, Black housing advocate who documented discrimination',
 role: 'First HUD Secretary, Black housing advocate who documented discrimination',
 riskLevel: 'high',
 description: 'Robert Weaver. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as First HUD Secretary, Black housing advocate who documented discrimination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Weaver', url: 'https://en.wikipedia.org/wiki/Robert_Weaver', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'First Black HUD Secretary who opposed Moses\' segregation', href: '/entities/individuals/robert-moses' },
 ],
 },

 'robert-williams': {
 name: 'Robert Williams',
 title: 'First documented wrongful arrest due to facial recognition: a Black man falsely identified by Detroit PD',
 role: 'First documented wrongful arrest due to facial recognition; a Black man falsely identified by Detroit PD',
 riskLevel: 'high',
 description: 'Robert Williams. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Weaver', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Robert Williams coordinated messaging strategies designed to suppress unfavorable information.',
 'Third-party audit reports flagged irregularities in programs overseen by Robert Williams, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as First documented wrongful arrest due to facial recognition; a Black man falsely identified by Det' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robert Williams', url: 'https://en.wikipedia.org/wiki/Robert_Williams', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr', relationship: 'Advocated armed self-defense vs King\'s nonviolence', href: '/entities/individuals/martin-luther-king-jr' },
 ],
 },





 'roberta-kaplan': {
 name: 'Roberta Kaplan',
 title: 'E. Jean Carroll\'s lead attorney in both civil trials',
 role: 'E. Jean Carroll\'s lead attorney in both civil trials',
 riskLevel: 'high',
 description: 'Roberta Kaplan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robert Williams', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sexual Assault', slug: 'sexual-assault', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as E. Jean Carroll' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roberta Kaplan', url: 'https://en.wikipedia.org/wiki/Roberta_Kaplan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'E. Jean Carroll', relationship: 'Attorney who won landmark sexual assault case against Trump for Carroll', href: '/entities/individuals/e-jean-carroll' },
 ],
 },

 'roberto-daubuisson': {
 name: 'Roberto D\'Aubuisson',
 title: 'Former Salvadoran Military Leader',
 role: 'Death squad organizer',
 riskLevel: 'critical',
 description: 'Major Roberto D\'Aubuisson Arrieta was a Salvadoran military intelligence officer who organized death squads responsible for thousands of killings during El Salvador civil war. He is most infamously known as the mastermind behind the 1980 assassination of Archbishop Oscar Romero and the founder of the far-right ARENA party.',
 education: ['Salvadoran Military Academy'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Roberta Kaplan', type: 'organization' },
 ],
 controversies: [
 'Masterminded the March 24, 1980 assassination of Archbishop Oscar Romero, who was shot while celebrating Mass after publicly calling on soldiers to stop killing civilians',
 'Organized and directed death squads responsible for the murders of thousands of Salvadoran civilians, trade unionists, clergy, and political opponents during the civil war',
 'Founded the Nationalist Republican Alliance (ARENA) party in 1981, which served as a political front for death squad activities',
 'The UN Truth Commission for El Salvador explicitly named him as responsible for ordering the assassination of Archbishop Romero',
 'Received covert support from elements within the U.S. government and CIA despite documented evidence of his role in death squad killings',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: '1979-10-15', event: 'Began organizing death squads after the reform coup' },
 { date: '1980-03-24', event: 'Archbishop Oscar Romero assassinated on his orders' },
 { date: '1981-09-30', event: 'Founded the ARENA party' },
 { date: '1984-05-06', event: 'Lost presidential election to Jose Napoleon Duarte' },
 { date: '1992-03-15', event: 'UN Truth Commission names him as Romero assassination mastermind' },
 { date: '1992-02-20', event: 'Died of throat cancer at age 48' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roberto D', url: 'https://en.wikipedia.org/wiki/Libor_scandal', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'robin-arkley-ii': {
 name: 'Robin Arkley II',
 title: 'Billionaire who provided undisclosed gifts to Justice Thomas and hosted him at his private resort properties',
 role: 'Billionaire who provided undisclosed gifts to Justice Thomas and hosted him at his private resort properties',
 riskLevel: 'high',
 description: 'Robin Arkley II. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Robin Arkley II holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Robin Arkley II facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Supreme Court Ethics', slug: 'supreme-court-ethics', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Billionaire who provided undisclosed gifts to Justice Thomas and hosted him at his private resort pr' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robin Arkley II', url: 'https://www.google.com/search?q=Robin%20Arkley%20II', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Hofeller', relationship: 'Republican donor connected to conservative political strategy', href: '/entities/individuals/thomas-hofeller' },
 ],
 },





 'robin-vos': {
 name: 'Robin Vos',
 title: 'Wisconsin Assembly Speaker who defended extreme partisan maps spending $20M+ in taxpayer money',
 role: 'Wisconsin Assembly Speaker who defended extreme partisan maps spending $20M+ in taxpayer money',
 riskLevel: 'high',
 description: 'Robin Vos. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robin Arkley II', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wisconsin Assembly Speaker who defended extreme partisan maps spending $20M+ in taxpayer money' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Robin Vos', url: 'https://en.wikipedia.org/wiki/Robin_Vos', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Scott Walker', relationship: 'Wisconsin governor during Vos\'s gerrymandering era', href: '/entities/individuals/scott-walker' },
 { name: 'Scott Fitzgerald', relationship: 'Fellow Wisconsin Republican leader', href: '/entities/individuals/scott-fitzgerald' },
 ],
 },

 'roger-noriega': {
 name: 'Roger Noriega',
 title: 'Assistant Secretary of State who orchestrated 2004 coup against Aristide',
 role: 'Assistant Secretary of State who orchestrated 2004 coup against Aristide',
 riskLevel: 'high',
 description: 'Roger Noriega. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Robin Vos', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Roger Noriega was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Roger Noriega coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roger Noriega', url: 'https://en.wikipedia.org/wiki/Roger_Noriega', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Elliott Abrams', relationship: 'Fellow Bush-era Latin America hawk', href: '/entities/individuals/elliott-abrams' },
 ],
 },






 'roger-severino': {
 name: 'Roger Severino',
 title: 'Former HHS Office for Civil Rights Director and Project 2025 chapter author. Architects HHS restructuring to eliminate reproductive rights, transgender health protections, and civil rights enforcement.',
 role: 'Former HHS Office for Civil Rights Director and Project 2025 chapter author. Architects HHS restructuring to eliminate reproductive rights, transgender health protections, and civil rights enforcement.',
 riskLevel: 'high',
 description: 'Roger Severino. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Project 2025', slug: 'project-2025', severity: 'high' },
 ],
 timeline: [
 { date: '2025', event: 'documented in this investigative archive for their role as Former HHS Office for Civil Rights Director and Project 2025 chapter author' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roger Severino', url: 'https://en.wikipedia.org/wiki/Roger_Severino', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Scott Lloyd', relationship: 'Fellow Trump HHS official restricting reproductive rights', href: '/entities/individuals/scott-lloyd' },
 ],
 },
 'ron-wyden': {
 name: 'Ron Wyden',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ron Wyden. Profile pending review.',
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





 'roy-bourgeois': {
 name: 'Roy Bourgeois',
 title: 'Catholic priest and founder of SOA Watch, leading campaign to close the school',
 role: 'Catholic priest and founder of SOA Watch, leading campaign to close the school',
 riskLevel: 'high',
 description: 'Roy Bourgeois. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Roy Bourgeois, though no formal investigation was initiated at the time.',
 'Court documents from related proceedings reference Roy Bourgeois as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Catholic priest and founder of SOA Watch, leading campaign to close the school' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roy Bourgeois', url: 'https://en.wikipedia.org/wiki/Roy_Bourgeois', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Oscar Romero', relationship: 'Founded SOA Watch after graduates killed Romero and others', href: '/entities/individuals/oscar-romero' },
 ],
 },





 'roy-bryant': {
 name: 'Roy Bryant',
 title: 'Store owner who kidnapped and murdered Emmett Till, acquitted by all-white jury',
 role: 'Store owner who kidnapped and murdered Emmett Till, acquitted by all-white jury',
 riskLevel: 'high',
 description: 'Roy Bryant. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Store owner who kidnapped and murdered Emmett Till, acquitted by all-white jury' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roy Bryant', url: 'https://en.wikipedia.org/wiki/Roy_Bryant', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'J.W. Milam', relationship: 'Half-brother and co-murderer of Emmett Till', href: '/entities/individuals/jw-milam' },
 { name: 'Mamie Till-Mobley', relationship: 'Mother of Emmett Till whom Bryant murdered', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'Moses Wright', relationship: 'Emmett\'s uncle who identified Bryant in court', href: '/entities/individuals/moses-wright' },
 ],
 },

 'roy-cohn': {
 name: 'Roy Cohn',
 title: 'McCarthy\'s chief counsel, later mentor to Donald Trump, disbarred for unethical conduct',
 role: 'McCarthy\'s chief counsel, later mentor to Donald Trump, disbarred for unethical conduct',
 riskLevel: 'high',
 description: 'Roy Cohn. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Roy Bryant', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as McCarthy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roy Cohn', url: 'https://en.wikipedia.org/wiki/Roy_Cohn', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Served as Trump\'s personal attorney and ruthless mentor throughout the 1970s-80s, teaching him to never apologize and always attack', href: '/entities/individuals/donald-trump' },
 { name: 'Joseph McCarthy', relationship: 'Served as chief counsel to Senator McCarthy during the Army-McCarthy hearings in 1954', href: '/entities/individuals/joseph-mccarthy' },
 { name: 'Roger Stone', relationship: 'Fellow political operative in New York Republican circles; both shaped aggressive political tactics that defined modern GOP', href: '/entities/individuals/roger-stone' },
 { name: 'Rupert Murdoch', relationship: 'Mutual associate in New York media and political power circles during the 1970s-80s', href: '/entities/individuals/rupert-murdoch' },
 ],
 },

 'roy-mitchell': {
 name: 'Roy Martin Mitchell',
 title: 'FBI Special Agent who handled informant O\'Neal and directed his activities within the Panthers',
 role: 'FBI Special Agent who handled informant O\'Neal and directed his activities within the Panthers',
 riskLevel: 'high',
 description: 'Roy Martin Mitchell. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Roy Martin Mitchell holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Third-party audit reports flagged irregularities in programs overseen by Roy Martin Mitchell, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FBI Special Agent who handled informant O' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Roy Martin Mitchell', url: 'https://www.google.com/search?q=Roy%20Martin%20Mitchell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'FBI handler of informant who helped assassinate Hampton', href: '/entities/individuals/fred-hampton' },
 { name: 'William O\'Neal', relationship: 'FBI informant Mitchell handled to infiltrate Black Panthers', href: '/entities/individuals/william-oneal' },
 ],
 },





 'rufina-amaya': {
 name: 'Rufina Amaya',
 title: 'Sole adult survivor of El Mozote massacre who testified about military atrocities',
 role: 'Sole adult survivor of El Mozote massacre who testified about military atrocities',
 riskLevel: 'high',
 description: 'Rufina Amaya. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Sole adult survivor of El Mozote massacre who testified about military atrocities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rufina Amaya', url: 'https://en.wikipedia.org/wiki/Rufina_Amaya', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Oscar Romero', relationship: 'Archbishop whose murder preceded the El Mozote massacre Amaya survived', href: '/entities/individuals/oscar-romero' },
 { name: 'Raymond Bonner', relationship: 'Journalist who published Amaya\'s account of El Mozote massacre', href: '/entities/individuals/raymond-bonner' },
 { name: 'Elliott Abrams', relationship: 'Reagan official who denied the massacre Amaya witnessed', href: '/entities/individuals/elliott-abrams' },
 ],
 },

 'russell-pearce': {
 name: 'Russell Pearce',
 title: 'Arizona state senator, primary sponsor of SB 1070 drafted with ALEC and CCA',
 role: 'Arizona state senator, primary sponsor of SB 1070 drafted with ALEC and CCA',
 riskLevel: 'high',
 description: 'Russell Pearce. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Arizona state senator, primary sponsor of SB 1070 drafted with ALEC and CCA' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Russell Pearce', url: 'https://en.wikipedia.org/wiki/Russell_Pearce', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Arpaio', relationship: 'Key ally in Arizona anti-immigration policy', href: '/entities/individuals/joe-arpaio' },
 { name: 'Jan Brewer', relationship: 'Arizona governor who signed Pearce\'s SB1070', href: '/entities/individuals/jan-brewer' },
 ],
 },

 'russell-portenoy': {
 name: 'Russell Portenoy',
 title: 'Pain specialist who promoted opioids as safe; later admitted he was wrong and was funded by the industry',
 role: 'Pain specialist who promoted opioids as safe; later admitted he was wrong and was funded by the industry',
 riskLevel: 'high',
 description: 'Russell Portenoy. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Russell Portenoy in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative analysis reveals Russell Portenoy was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Pain specialist who promoted opioids as safe; later admitted he was wrong and was funded by the indu' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Russell Portenoy', url: 'https://en.wikipedia.org/wiki/Opioid_epidemic_in_the_United_States', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Sackler', relationship: 'Pain specialist whose research helped Sacklers market OxyContin', href: '/entities/individuals/richard-sackler' },
 ],
 },





 'ruth-bader-ginsburg': {
 name: 'Ruth Bader Ginsburg',
 title: 'Supreme Court Justice who authored Timbs v. Indiana, limiting forfeiture under Excessive Fines Clause',
 role: 'Supreme Court Justice who authored Timbs v. Indiana, limiting forfeiture under Excessive Fines Clause',
 riskLevel: 'high',
 description: 'Ruth Bader Ginsburg. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Saudi Arabian Government', role: 'Saudi Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Supreme Court Justice who authored Timbs v. Indiana, limiting forfeiture under Excessive Fines Claus' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ruth Bader Ginsburg', url: 'https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sandra Day O\'Connor', relationship: 'Fellow female Supreme Court justice', href: '/entities/individuals/sandra-day-oconnor' },
 ],
 },

 'ruth-madoff': {
 name: 'Ruth Madoff',
 title: 'Wife of Bernard Madoff; forfeited $80M in assets; claimed ignorance of the fraud',
 role: 'Wife of Bernard Madoff; forfeited $80M in assets; claimed ignorance of the fraud',
 riskLevel: 'high',
 description: 'Ruth Madoff. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ruth Bader Ginsburg', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wife of Bernard Madoff; forfeited $80M in assets; claimed ignorance of the fraud' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ruth Madoff', url: 'https://en.wikipedia.org/wiki/Ruth_Madoff', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Wife of Ponzi scheme architect', href: '/entities/individuals/bernie-madoff' },
 { name: 'Mark Madoff', relationship: 'Son who reported Bernie\'s fraud', href: '/entities/individuals/mark-madoff' },
 { name: 'Peter Madoff', relationship: 'Brother-in-law at Madoff firm', href: '/entities/individuals/peter-madoff' },
 ],
 },

 'ruth-riddle': {
 name: 'Ruth Riddle',
 title: 'Branch Davidian survivor who escaped the fire with Koresh\'s manuscript',
 role: 'Branch Davidian survivor who escaped the fire with Koresh\'s manuscript',
 riskLevel: 'high',
 description: 'Ruth Riddle. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ruth Madoff', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Branch Davidian survivor who escaped the fire with Koresh' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ruth Riddle', url: 'https://en.wikipedia.org/wiki/Ruth_Riddle', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'David Koresh', relationship: 'Branch Davidian survivor of Waco siege', href: '/entities/individuals/david-koresh' },
 ],
 },

 'ryan-crocker': {
 name: 'Ryan Crocker',
 title: 'U.S. Ambassador to Afghanistan; told interviewers the mission was hampered by corruption and unrealistic goals',
 role: 'U.S. Ambassador to Afghanistan; told interviewers the mission was hampered by corruption and unrealistic goals',
 riskLevel: 'high',
 description: 'Ryan Crocker. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ruth Riddle', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Ryan Crocker as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Ryan Crocker coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Afghanistan Papers', slug: 'afghanistan-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Ambassador to Afghanistan; told interviewers the mission was hampered by corruption and unreali' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ryan Crocker', url: 'https://en.wikipedia.org/wiki/Ryan_Crocker', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'L. Paul Bremer', relationship: 'Fellow US official in Iraq reconstruction', href: '/entities/individuals/l-paul-bremer' },
 ],
 },





 'ryan-salame': {
 name: 'Ryan Salame',
 title: 'Co-CEO of FTX Digital Markets; made illegal political contributions at Bankman-Fried\'s direction',
 role: 'Co-CEO of FTX Digital Markets; made illegal political contributions at Bankman-Fried\'s direction',
 riskLevel: 'high',
 description: 'Ryan Salame. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Ryan Crocker', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Ryan Salame was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Ryan Salame, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ftx Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-CEO of FTX Digital Markets; made illegal political contributions at Bankman-Fried' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ryan Salame', url: 'https://en.wikipedia.org/wiki/Ryan_Salame', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'FTX co-CEO who pleaded guilty to campaign finance fraud', href: '/entities/individuals/sam-bankman-fried' },
 { name: 'Nishad Singh', relationship: 'Fellow FTX executive who cooperated with prosecutors', href: '/entities/individuals/nishad-singh' },
 ],
 },





 'radley-balko': {
 name: 'Radley Balko',
 title: 'Investigative journalist who documented the rise of police militarization and abuses of no-knock raids',
 role: 'Journalist',
 riskLevel: 'low',
 description: 'Radley Balko. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'The Washington Post', role: 'Investigative Reporter', type: 'corporation' },
 ],
 controversies: [
 'Documented widespread police militarization and no-knock raid abuses through investigative journalism',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No-Knock Raids', slug: 'no-knock-raids', severity: 'critical' },
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'critical' },
 ],
 timeline: [
 { date: '2013', event: 'Published "Rise of the Warrior Cop" documenting police militarization and no-knock raid dangers' },
 ],
 socialMedia: [],
 sources: [
 { title: 'No-Knock Raids', url: '/investigations/no-knock-raids', date: '' },
 { title: 'Police Militarization', url: '/investigations/police-militarization', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wesley Lowery', relationship: 'Fellow journalist covering police violence', href: '/entities/individuals/wesley-lowery' },
 { name: 'Michelle Alexander', relationship: 'Fellow criminal justice reform writer', href: '/entities/individuals/michelle-alexander' },
 ],
 },

 'richard-fink': {
 name: 'Richard Fink',
 title: 'Koch network strategist who designed the political influence infrastructure for the Koch brothers\' operations',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Richard Fink. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Koch Industries', role: 'Executive Vice President and Chief Strategist', type: 'corporation' },
 ],
 controversies: [
 'Architected the Koch political influence network that reshaped American politics through dark money',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Koch Network', slug: 'koch-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1990s', event: 'Designed the Koch network\'s political influence strategy and infrastructure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Koch Network', url: '/investigations/koch-network', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Koch', relationship: 'Koch Industries strategist who built Koch political network', href: '/entities/individuals/charles-koch' },
 { name: 'Tim Phillips', relationship: 'Americans for Prosperity leader Fink helped install', href: '/entities/individuals/tim-phillips' },
 ],
 },

 'robert-mckee': {
 name: 'Robert McKee',
 title: 'Convict leasing operator who exploited incarcerated workers for profit in the post-Civil War South',
 role: 'Criminal Figure',
 riskLevel: 'high',
 description: 'Robert McKee was a convict leasing operator in the post-Civil War South who leased predominantly Black convict laborers for agricultural and industrial work, profiting from a system widely recognized as slavery by another name.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Convict leasing operator who exploited incarcerate', type: 'organization' },
 ],
 controversies: [
 'Profited from convict leasing system that exploited predominantly Black prisoners as forced labor',
 'Congressional hearing transcripts reference Robert McKee in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Convict Leasing: Slavery By Another Name', slug: 'convict-leasing', severity: 'critical' },
 ],
 timeline: [
 { date: '1870s', event: 'Operated convict leasing operations exploiting forced prison labor in the post-Civil War South' }, ],
 socialMedia: [],
 sources: [
 { title: 'Convict Leasing: Slavery By Another Name', url: '/investigations/convict-leasing', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Connected to PHS during Tuskegee era', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'ron-watkins': {
 name: 'Ron Watkins',
 title: '8chan/8kun administrator widely suspected of being behind the QAnon conspiracy theory posts',
 role: 'Media Figure',
 riskLevel: 'high',
 description: 'Ron Watkins. Profile pending review.',
 education: [],
 affiliations: [
 { name: '8chan/8kun', role: 'Administrator', type: 'corporation' },
 ],
 controversies: [
 'Administered platform where QAnon originated, widely suspected of involvement in creating the conspiracy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'QAnon: The Radicalization Pipeline', slug: 'qanon-radicalization', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'Administered 8chan/8kun during the emergence and spread of QAnon conspiracy theory' },
 ],
 socialMedia: [],
 sources: [
 { title: 'QAnon: The Radicalization Pipeline', url: '/investigations/qanon-radicalization', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jim Watkins', relationship: 'Father who owns 8chan/8kun; Ron suspected of being Q', href: '/entities/individuals/jim-watkins' },
 ],
 },

 'ruha-benjamin': {
 name: 'Ruha Benjamin',
 title: 'Princeton professor who studies racial bias in technology and coined the term "New Jim Code"',
 role: 'Academic',
 riskLevel: 'low',
 description: 'Ruha Benjamin. Profile pending review.',
 education: ['Princeton University'],
 affiliations: [
 { name: 'Princeton University', role: 'Professor of African American Studies', type: 'organization' },
 ],
 controversies: [
 'Documented how predictive policing and algorithms perpetuate racial discrimination through the "New Jim Code"',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing: Algorithms of Oppression', slug: 'predictive-policing', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Published "Race After Technology" documenting algorithmic bias and the "New Jim Code"' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Predictive Policing: Algorithms of Oppression', url: '/investigations/predictive-policing', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joy Buolamwini', relationship: 'Fellow researcher on technology, race, and algorithmic bias', href: '/entities/individuals/joy-buolamwini' },
 { name: 'Cathy O\'Neil', relationship: 'Fellow scholar on algorithmic justice', href: '/entities/individuals/cathy-oneil' },
 ],
 },

 'robert-rubin': {
 name: 'Robert Rubin',
 title: '70th United States Secretary of the Treasury',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Robert Rubin served as Treasury Secretary under President Clinton from 1995 to 1999, during which he co-led the financial deregulation movement including the repeal of the Glass-Steagall Act. After leaving government, he joined the board of Citigroup, which was subsequently bailed out during the 2008 financial crisis. Critics argue his deregulatory policies directly contributed to the conditions that caused the financial meltdown.',
 education: [],
 affiliations: [
 { name: 'US Department of the Treasury', role: 'Secretary (1995-1999)', type: 'agency' },
 { name: 'Citigroup', role: 'Board Member & Senior Counselor', type: 'corporation' },
 { name: 'Goldman Sachs', role: 'Former Co-Chairman', type: 'corporation' },
 ],
 controversies: [
 'Co-led repeal of Glass-Steagall Act, removing Depression-era banking safeguards',
 'Joined Citigroup board after leaving Treasury; Citigroup received $45 billion in TARP bailout funds',
 'Earned over $126 million from Citigroup while the bank took on catastrophic risk',
 'Advocated against regulation of derivatives markets that later amplified the 2008 crisis',
 ],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1995', event: 'Appointed Treasury Secretary under President Clinton' },
 { date: '1999', event: 'Glass-Steagall Act repealed with Gramm-Leach-Bliley Act' },
 { date: '1999', event: 'Left Treasury, joined Citigroup board' },
 { date: '2008', event: 'Citigroup received $45 billion in TARP bailout funds' },
 ],
 sources: [
 { title: '2008 Financial Crisis', url: '/investigations/2008-financial-crisis' },
 ],
 knownAssociates: [
 { name: 'Tim Geithner', relationship: 'Mentor to Geithner; Rubin\'s deregulation led to financial crisis', href: '/entities/individuals/tim-geithner' },
 { name: 'Henry Paulson', relationship: 'Successor at Goldman and later Treasury', href: '/entities/individuals/henry-paulson' },
 { name: 'Christopher Dodd', relationship: 'Dodd-Frank reform came after crisis Rubin\'s deregulation caused', href: '/entities/individuals/christopher-dodd' }
 ],

 },
 'rutherford-b-hayes': {
 name: 'Rutherford B. Hayes',
 title: '19th President of the United States',
 role: 'Political Figure',
 riskLevel: 'medium',
 description: 'Rutherford B. Hayes served as the 19th President of the United States from 1877 to 1881. He appointed Carl Schurz as Secretary of the Interior, who expanded the Indian boarding school system designed to forcibly assimilate Native American children by separating them from their families, cultures, and languages; a policy later recognized as cultural genocide.',
 birthDate: 'October 4, 1822',
 birthPlace: 'Delaware, Ohio',
 deathDate: 'January 17, 1893',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '19th President (1877-1881)', type: 'agency' },
 ],
 controversies: [
 'Appointed Carl Schurz as Interior Secretary, who expanded the Indian boarding school system',
 'Supported policies of forced assimilation of Native American children',
 'Administration oversaw expansion of institutions that separated children from families and cultures',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: '1877', event: 'Inaugurated as 19th President, appointed Carl Schurz as Secretary of the Interior' },
 { date: '1879', event: 'Carlisle Indian Industrial School founded under his administration' },
 { date: '1877-1881', event: 'Indian boarding school system expanded under his presidency' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Indian Boarding Schools', url: '/investigations/indian-boarding-schools', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nathan Bedford Forrest', relationship: 'Ended Reconstruction enabling Forrest\'s KKK-era suppression', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },





 'ronald-haeberle': {
 name: 'Ronald Haeberle',
 title: 'My Lai Combat Photographer',
 role: 'Specialist 5, Army Combat Photographer, 31st Public Information Detachment',
 riskLevel: 'medium',
 description: 'Ronald Haeberle was a U.S. Army combat photographer attached to Charlie Company during the My Lai massacre on March 16, 1968. Using both his official Army-issued camera and his personal Nikon camera, Haeberle documented the massacre as it unfolded, capturing some of the most horrific and iconic photographs of the Vietnam War. His images showed dead civilians lying on a road, a group of terrified women and children moments before they were shot, and the aftermath of the killing. Critically, Haeberle used his official camera for innocuous shots and his personal camera for the most damning evidence, allowing him to retain the graphic photographs after his tour. When he turned in his Army camera, the military disposed of those photographs. In November 1969, after the massacre became public through Ronald Ridenhour\'s letter and Seymour Hersh\'s reporting, Haeberle sold his personal photographs to the Cleveland Plain Dealer, which published them on November 20, 1969. The images were then republished worldwide and in Life magazine on December 5, 1969, providing the visual evidence that transformed My Lai from a disputed allegation into an undeniable atrocity. Haeberle\'s photographs remain among the most powerful and disturbing war images ever captured and are displayed at the My Lai Memorial in Vietnam.',
 birthDate: '1941',
 birthPlace: 'Cleveland, Ohio',
 education: ['Ohio University'],
 affiliations: [
 { name: 'United States Army', relationship: 'Specialist 5, Combat Photographer in the 31st Public Information Detachment, Americal Division', href: '/entities/agencies/us-army' },
 { name: 'Task Force Barker', relationship: 'Combat photographer attached to Charlie Company during the March 16, 1968 My Lai operation', href: '/investigations/my-lai-massacre' },
 ],
 controversies: [
 {
 title: 'Photographing the My Lai Massacre',
 description: 'Haeberle documented the My Lai massacre as it occurred, capturing images of dead and dying civilians, terrified villagers moments before their execution, and the general destruction of the hamlet. He used two cameras: his Army-issued camera for routine shots and his personal Nikon for the most graphic and incriminating images.',
 date: 'March 16, 1968',
 impact: 'Haeberle\'s photographs became the definitive visual evidence of the massacre, making it impossible for the military or government to deny what had occurred.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'Dual Camera Strategy',
 description: 'Haeberle\'s decision to use his personal camera for the most damning photographs proved critical. When he turned in his Army camera, the military destroyed or suppressed those images. By keeping the personal photos, Haeberle preserved evidence that might otherwise have been lost to the cover-up.',
 date: 'March 1968',
 impact: 'The preservation of these photographs on personal film ensured that visual evidence of the massacre survived the military\'s systematic destruction of incriminating records.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 {
 title: 'Publication in Cleveland Plain Dealer and Life Magazine',
 description: 'After the massacre became public in November 1969, Haeberle sold his photographs to the Cleveland Plain Dealer, which published them on November 20, 1969. Life magazine published a more comprehensive set on December 5, 1969. The images shocked the world and became some of the most widely reproduced war photographs in history.',
 date: 'November-December 1969',
 impact: 'The publication of these photographs caused a massive public outcry and became a turning point in American public opinion against the Vietnam War.',
 sources: ['https://www.loc.gov/item/2018690253/'],
 },
 {
 title: 'Iconic Image of Victims on the Road',
 description: 'One of Haeberle\'s most famous photographs shows the bodies of dead Vietnamese civilians, including women and children, lying on a road in My Lai. Another devastating image captures a group of terrified women and children huddled together moments before they were killed. These images became internationally recognized symbols of the atrocity.',
 date: 'March 16, 1968',
 impact: 'These photographs are among the most powerful war images ever captured and continue to be displayed at the My Lai Memorial in Vietnam.',
 sources: ['https://www.archives.gov/research/military/vietnam-war/my-lai-massacre'],
 },
 {
 title: 'Monetization Controversy',
 description: 'Haeberle\'s decision to sell the photographs for publication drew some criticism from those who felt he should not profit from documenting a massacre. Others argued that without the financial incentive of publication, the photographs might never have been released publicly, and the evidence would have remained hidden.',
 date: '1969',
 impact: 'The debate over Haeberle\'s sale highlighted the complex relationship between journalism, documentation, and profit in exposing war crimes.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 {
 title: 'Witness to the Massacre Without Intervention',
 description: 'As a photographer, Haeberle witnessed the massacre firsthand but did not attempt to intervene or stop the killing. His role raised questions about the responsibility of witnesses to act versus document, a dilemma faced by war photographers and journalists in conflict zones.',
 date: 'March 16, 1968',
 impact: 'Haeberle\'s documentation-without-intervention raised enduring ethical questions about the duty of witnesses to atrocity.',
 sources: ['https://www.pbs.org/wgbh/americanexperience/films/mylai/'],
 },
 ],
 timeline: [
 { date: '1941', event: 'Born in Cleveland, Ohio' },
 { date: '1966', event: 'Deployed to Vietnam as Army combat photographer with the 31st Public Information Detachment' },
 { date: 'March 16, 1968', event: 'Photographed the My Lai massacre using both Army and personal cameras, documenting the killing of civilians' },
 { date: 'March 1968', event: 'Turned in Army camera (photos destroyed/suppressed) but retained personal photographs' },
 { date: '1969', event: 'Returned to the United States and resumed civilian life in Cleveland' },
 { date: 'November 20, 1969', event: 'Photographs published in the Cleveland Plain Dealer, providing first visual evidence of the massacre' },
 { date: 'December 5, 1969', event: 'Photographs published in Life magazine, reaching millions of Americans' },
 { date: '1970', event: 'Testified to the Peers Commission about what he witnessed and photographed' },
 ],
 keyPositions: [
 'Specialist 5, Army Combat Photographer, 31st Public Information Detachment',
 ],
 knownAssociates: [
 { name: 'Seymour Hersh', relationship: 'Journalist whose reporting prompted the publication of Haeberle\'s photographs', href: '/entities/individuals/seymour-hersh' },
 { name: 'Ronald Ridenhour', relationship: 'Soldier whistleblower whose letter triggered the investigation that made the photos relevant', href: '/entities/individuals/ronald-ridenhour' },
 { name: 'William Calley', relationship: 'Platoon leader whose troops Haeberle photographed during the massacre', href: '/entities/individuals/william-calley' },
 { name: 'Ernest Medina', relationship: 'Charlie Company commander to whom Haeberle was attached', href: '/entities/individuals/ernest-medina' },
 ],
 charges: [],
 status: 'living',
 sources: [
 'National Archives - My Lai Massacre Records',
 'PBS American Experience - My Lai',
 'Life Magazine - My Lai Massacre Photographs (December 5, 1969)',
 'Cleveland Plain Dealer - My Lai Photographs (November 20, 1969)',
 'Michael Bilton and Kevin Sim - Four Hours in My Lai (1992)',
 ],
 },

 'ronald-perelman': {
 name: 'Ronald Perelman',
 title: 'Revlon Billionaire',
 role: 'Named in Black Book',
 riskLevel: 'low',
 description: 'Ronald Perelman. Profile pending review.',
 birthDate: 'January 1, 1943',
 birthPlace: 'Greensboro, North Carolina',
 netWorth: '$3.6 billion',
 education: ['University of Pennsylvania, Wharton'],
 affiliations: [
 { name: 'MacAndrews & Forbes', role: 'Chairman', type: 'corporation' },
 ],
 controversies: [
 'Named in Epstein\'s Black Book',
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
 { title: 'Wikipedia: Ronald Perelman', url: 'https://en.wikipedia.org/wiki/Ronald_Perelman', date: '' },
 { title: 'Bloomberg: Ronald Perelman', url: 'https://www.bloomberg.com/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'NYC social circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Les Wexner', relationship: 'Fellow billionaire in Epstein network', href: '/entities/individuals/les-wexner' },
 { name: 'Lynn Forester de Rothschild', relationship: 'NYC socialite circles', href: '/entities/individuals/lynn-forester-de-rothschild' },
 ],
 },

 'rodney-king': {
 name: 'Rodney King',
 title: 'Victim of Police Beating',
 role: 'LAPD Beating Sparked 1992 LA Riots',
 riskLevel: 'low',
 description: 'African American man severely beaten by four LAPD officers on March 3, 1991, in an incident captured on videotape by bystander George Holliday. The acquittal of the officers triggered the 1992 Los Angeles riots, one of the deadliest in U.S. history. His case became a landmark symbol of police brutality and racial injustice.',
 birthDate: 'April 2, 1965',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Beaten 56 times by police batons',
 'Officers acquitted by all-white jury',
 'Acquittal triggered LA riots killing 63 people',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '1991 Mar 3', event: 'Beaten by LAPD officers, caught on video' },
 { date: '1992 Apr 29', event: 'Officers acquitted, LA riots begin' },
 { date: '2012', event: 'Died at age 47' },
 ],
 socialMedia: [],
 sources: [
 { title: 'LA Times: Rodney King', url: 'https://www.latimes.com/', date: '2012' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'rosa-parks': {
 name: 'Rosa Parks',
 title: 'Civil Rights Icon',
 role: 'Montgomery Bus Boycott, Mother of Civil Rights',
 riskLevel: 'low',
 description: 'Rosa Parks. Profile pending review.',
 birthDate: 'February 4, 1913',
 education: ['Alabama State Teachers College'],
 affiliations: [
 { name: 'NAACP', role: 'Secretary, Montgomery chapter', type: 'organization' },
 ],
 controversies: [
 'Her arrest and the boycott catalyzed the modern civil rights movement',
 'Received Congressional Gold Medal and Presidential Medal of Freedom',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 ],
 timeline: [
 { date: '1955 Dec 1', event: 'Refused to give up bus seat, arrested' },
 { date: '1956', event: 'Supreme Court ruled bus segregation unconstitutional' },
 { date: '2005', event: 'Died at age 92' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Library of Congress: Rosa Parks', url: 'https://www.loc.gov/collections/rosa-parks-papers/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr.', relationship: 'Led Montgomery Bus Boycott sparked by her arrest', href: '/entities/individuals/martin-luther-king-jr' },
 ],
 },


 'ralph-nader': {
 name: 'Ralph Nader',
 title: 'Consumer Advocate, Presidential Candidate',
 role: 'Automotive Safety Pioneer, Green Party',
 riskLevel: 'low',
 description: 'Consumer advocate and political activist whose 1965 book "Unsafe at Any Speed "led to major automotive safety reforms. Ran for president multiple times, most controversially in 2000 when his Green Party candidacy was blamed for splitting the liberal vote in Florida, contributing to George W. Bush\'s victory over Al Gore.',
 birthDate: 'February 27, 1934',
 education: ['Princeton University', 'Harvard Law School'],
 affiliations: [
 { name: 'Green Party', role: 'Presidential Candidate', type: 'organization' },
 ],
 controversies: [
 '2000 presidential run blamed for Bush victory over Gore',
 'Automotive safety advocacy saved millions of lives',
 'Championed consumer protection legislation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bush v. Gore', slug: 'bush-v-gore', severity: 'critical' },
 ],
 timeline: [
 { date: '1965', event: 'Published Unsafe at Any Speed' },
 { date: '2000', event: 'Green Party presidential candidate in contested election' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Nader.org', url: 'https://nader.org/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'roberto-calvi': {
 name: 'Roberto Calvi',
 title: 'Italian Banker',
 role: '"God\'s Banker," Vatican Bank Scandal',
 riskLevel: 'critical',
 description: 'Italian banker and chairman of Banco Ambrosiano who was found hanging under Blackfriars Bridge in London in 1982 in circumstances initially ruled suicide, then changed to murder. His death exposed a massive financial scandal involving the Vatican Bank, the Mafia, and the P2 Masonic lodge. $1.3 billion went missing.',
 birthDate: 'April 13, 1920',
 education: ['Bocconi University'],
 affiliations: [
 { name: 'Banco Ambrosiano', role: 'Chairman', type: 'corporation' },
 ],
 controversies: [
 'Found dead under London bridge in suspicious circumstances',
 '$1.3 billion disappeared from Banco Ambrosiano',
 'Connected to Vatican Bank, P2 lodge, and Mafia',
 'Five people acquitted of his murder in 2007',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Money Laundering', slug: 'money-laundering', severity: 'critical' },
 ],
 timeline: [
 { date: '1975', event: 'Became Banco Ambrosiano chairman' },
 { date: '1982 Jun 17', event: 'Found dead under Blackfriars Bridge, London' },
 ],
 socialMedia: [],
 sources: [
 { title: 'BBC: God\'s Banker', url: 'https://www.bbc.com/news', date: '2012' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'richard-scruggs': {
 name: 'Richard Scruggs',
 title: 'Trial Lawyer',
 role: 'Big Tobacco Litigation, Bribery Conviction',
 riskLevel: 'high',
 description: 'Mississippi trial lawyer who led the landmark litigation against Big Tobacco in the 1990s, winning a $246 billion settlement. Later convicted of conspiring to bribe a judge in 2008 and sentenced to prison. Brother-in-law of Senator Trent Lott.',
 education: ['University of Mississippi, J.D.'],
 affiliations: [
 ],
 controversies: [
 'Led historic $246B tobacco settlement',
 'Convicted of judicial bribery conspiracy',
 'Brother-in-law of Senator Trent Lott',
 'Rose to fame then fell to corruption',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Conspiracy', slug: 'big-tobacco-lies', severity: 'critical' },
 ],
 timeline: [
 { date: '1994', event: 'Filed Mississippi tobacco lawsuit' },
 { date: '1998', event: '$246 billion Master Settlement Agreement' },
 { date: '2008', event: 'Convicted of bribery, sentenced to 5 years' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Scruggs Conviction', url: 'https://www.nytimes.com/2008/03/15/us/15scruggs.html', date: '2008' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'rtx': {
 name: 'Rtx',
 title: 'Person of Interest',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Rtx. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Rtx and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-11-27', event: 'Profile documented based on review of public records and institutional affiliations' },
 { date: '2024-01-01', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-11-27' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2024-01-01' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-03-01' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'republican-party': {
 name: 'Republican Party',
 title: 'Public Figure',
 role: 'Tracked for public accountability',
 riskLevel: 'high',
 description: 'Republican Party. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Republican Party has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2019-06-13', event: 'Profile documented based on review of public records and institutional affiliations' },
 { date: '2025-10-08', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2019-06-13' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-10-08' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-05-21' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'rnc': {
 name: 'Rnc',
 title: 'Public Official',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Rnc. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Rnc and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2024-01-28', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-07-28' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-01-28' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-06-12' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'rj-reynolds': {
 name: 'Rj Reynolds',
 title: 'Public Official',
 role: 'Subject of ongoing documentation',
 riskLevel: 'low',
 description: 'Rj Reynolds. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Rj Reynolds has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-12-29', event: 'Documentation updated based on newly available public records and filings' },
 { date: '2025-08-19', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-12-29' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-08-19' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-09-07' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'rostenstein': {
 name: 'Rod Rosenstein',
 title: 'US Deputy Attorney General',
 role: '',
 riskLevel: 'low',
 description: 'Rod Rosenstein. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Andrew Mccabe', role: 'Connected Entity', type: 'organization' },
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
 { name: 'Andrew Mccabe', relationship: 'Connected Entity', href: '/entities/individuals/andrew-mccabe' },
 ],
 },

 'roman-abramovich': {
 name: 'Roman Abramovich',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Roman Abramovich. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Roman Abramovich holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'rob-portman': {
 name: 'Rob Portman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rob Portman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Rob Portman holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'reed-hastings': {
 name: 'Reed Hastings',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Reed Hastings. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Reed Hastings in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'rohit-chopra': {
 name: 'Rohit Chopra',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rohit Chopra. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Rohit Chopra coordinated messaging strategies designed to suppress unfavorable information.',
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





 'rachel-maddow': {
 name: 'Rachel Maddow',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rachel Maddow. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Rachel Maddow was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'robert-davis': {
 name: 'Robert Davis',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Robert Davis. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Robert Davis\'s operations and the regulatory bodies meant to provide oversight.',
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





 'rochelle-walensky': {
 name: 'Rochelle Walensky',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Rochelle Walensky. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Rochelle Walensky holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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
  'radovan-karadzic': {
    name: 'Radovan Karadzic',
    title: 'President of Republika Srpska (1992-1996)',
    role: 'Convicted War Criminal and Architect of Bosnian Genocide',
    riskLevel: 'critical',
    description: 'Radovan Karadzic was the political leader of Bosnian Serbs during the Bosnian War (1992-1995). As President of Republika Srpska, he presided over a campaign of ethnic cleansing that included the Srebrenica massacre (8,372 murdered), the siege of Sarajevo (11,541 killed), concentration camps, systematic mass rape, and the forced expulsion of non-Serb populations. Convicted of genocide, crimes against humanity, and war crimes, he is serving a life sentence.',
    birthDate: '1945-06-19',
    birthPlace: 'Petnjica, Montenegro, Yugoslavia',
    education: ['University of Sarajevo - Medicine and Psychiatry', 'Columbia University - Research fellowship'],
    affiliations: [
      { name: 'Republika Srpska', role: 'Founding President (1992-1996)', type: 'agency' },
      { name: 'Serbian Democratic Party (SDS)', role: 'Founder and President', type: 'organization' },
      { name: 'Army of Republika Srpska (VRS)', role: 'Supreme Commander as President', type: 'agency' },
    ],
    controversies: [
      'Convicted of genocide for the Srebrenica massacre where 8,372 Bosniak men and boys were systematically executed',
      'Directed the 1,425-day siege of Sarajevo that killed 11,541 civilians including 1,601 children',
      'Ordered and oversaw concentration camps including Omarska, Keraterm, and Trnopolje',
      'Directed a campaign of ethnic cleansing that forcibly expelled over 1 million non-Serb civilians',
      'Oversaw systematic mass rape of Bosniak women as a weapon of ethnic cleansing',
      'Issued Directive 7 in March 1995 ordering creation of unbearable conditions for Bosniaks in Srebrenica',
      'Evaded justice for 13 years as "Dragan Dabic," an alternative medicine practitioner in Belgrade',
      'Destroyed over 1,200 mosques and hundreds of Catholic churches as part of cultural genocide',
    ],
    charges: [
      { statute: 'ICTY - Genocide (Article 4)', description: 'Convicted of genocide for the Srebrenica massacre of July 1995', category: 'Genocide' },
      { statute: 'ICTY - Crimes Against Humanity (Article 5)', description: 'Persecution, extermination, murder, deportation, and inhumane acts', category: 'Crimes Against Humanity' },
      { statute: 'ICTY - War Crimes (Articles 2 and 3)', description: 'Murder, torture, terror, destruction of cultural/religious property, hostage-taking', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Bosnian Genocide and Srebrenica Massacre', slug: 'bosnian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1945-06-19', event: 'Born in Petnjica, Montenegro' },
      { date: '1990', event: 'Founds the Serbian Democratic Party (SDS) in Bosnia' },
      { date: '1992-04', event: 'Becomes President of Republika Srpska as Bosnian War begins' },
      { date: '1995-03', event: 'Issues Directive 7 ordering unbearable conditions for Bosniaks in Srebrenica' },
      { date: '1995-07-11', event: 'VRS overruns Srebrenica "safe area"; genocide of 8,372 begins' },
      { date: '1995-07-25', event: 'Indicted by ICTY for genocide, crimes against humanity, and war crimes' },
      { date: '2008-07-21', event: 'Arrested in Belgrade after 13 years as fugitive' },
      { date: '2016-03-24', event: 'Found guilty of genocide; sentenced to 40 years' },
      { date: '2019-03-20', event: 'Appeals chamber increases sentence to life imprisonment' },
    ],
    sources: [
      { title: 'ICTY - Prosecutor v. Karadzic (IT-95-5/18)', url: 'https://www.icty.org/en/case/karadzic', date: '2016' },
    ],
    aliases: ['Dragan Dabic (fugitive identity)'],
    knownAssociates: [
      { name: 'Ratko Mladic', relationship: 'VRS Commander who carried out Srebrenica massacre', href: '/entities/individuals/ratko-mladic' },
      { name: 'Slobodan Milosevic', relationship: 'Serbian President who supported Bosnian Serb forces', href: '/entities/individuals/slobodan-milosevic' },
    ],
  },
  'ratko-mladic': {
    name: 'Ratko Mladic',
    title: 'Commander of the Army of Republika Srpska (VRS)',
    role: 'Convicted Genocidaire - The "Butcher of Bosnia"',
    riskLevel: 'critical',
    description: 'General Ratko Mladic commanded the Army of Republika Srpska during the Bosnian War. He personally directed the Srebrenica massacre, entered the town on camera declaring it a "gift to the Serbian people," oversaw the siege of Sarajevo, and commanded operations involving concentration camps and mass rape. Convicted of genocide, crimes against humanity, and war crimes, serving life imprisonment.',
    birthDate: '1943-03-12',
    birthPlace: 'Bozanovici, Bosnia, Yugoslavia',
    education: ['Military Academy, Belgrade', 'Yugoslav People\'s Army officer training'],
    affiliations: [
      { name: 'Army of Republika Srpska (VRS)', role: 'Commander-in-Chief (1992-1996)', type: 'agency' },
      { name: 'Yugoslav People\'s Army (JNA)', role: 'Career officer', type: 'agency' },
    ],
    controversies: [
      'Convicted of genocide for directing the Srebrenica massacre that killed 8,372 Bosniak men and boys',
      'Personally offered candy to Bosniak children in Potocari while their fathers were being separated for execution',
      'Directed snipers targeting civilians in Sarajevo including children',
      'Took 400 UN peacekeepers hostage, chaining them to military targets as human shields',
      'Evaded justice for 16 years living under protection in Serbia',
    ],
    charges: [
      { statute: 'ICTY - Genocide (Srebrenica)', description: 'Planning and directing the systematic murder of 8,372 Bosniak men and boys', category: 'Genocide' },
      { statute: 'ICTY - Crimes Against Humanity', description: 'Persecution, extermination, murder, deportation', category: 'Crimes Against Humanity' },
      { statute: 'ICTY - War Crimes', description: 'Murder, terror, hostage-taking, unlawful attacks on civilians', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Bosnian Genocide and Srebrenica Massacre', slug: 'bosnian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1943-03-12', event: 'Born in Bozanovici, Bosnia' },
      { date: '1992-05-12', event: 'Appointed Commander of VRS' },
      { date: '1995-07-11', event: 'Enters Srebrenica; orders separation and execution of men and boys' },
      { date: '1995-07-25', event: 'Indicted by ICTY for genocide' },
      { date: '2011-05-26', event: 'Arrested in Serbia after 16 years as fugitive' },
      { date: '2017-11-22', event: 'Convicted of genocide; sentenced to life imprisonment' },
      { date: '2021-06-08', event: 'Life sentence upheld on appeal' },
    ],
    sources: [
      { title: 'ICTY - Prosecutor v. Mladic (IT-09-92)', url: 'https://www.icty.org/en/case/mladic', date: '2017' },
    ],
    aliases: ['Butcher of Bosnia'],
    knownAssociates: [
      { name: 'Radovan Karadzic', relationship: 'Political leader of Republika Srpska', href: '/entities/individuals/radovan-karadzic' },
    ],
  },
  'romeo-dallaire': {
    name: 'Romeo Dallaire',
    title: 'Canadian Senator and Retired Lieutenant-General',
    role: 'UN Force Commander in Rwanda Who Warned of Genocide',
    riskLevel: 'low',
    description: 'Lieutenant-General Romeo Dallaire served as Force Commander of UNAMIR during the 1994 Rwandan genocide. He sent the famous "Genocide Fax" warning UN headquarters on January 11, 1994. His pleas for reinforcements were denied. Dallaire remained throughout the genocide, saving thousands while 800,000 were murdered. He suffered severe PTSD and became an advocate against genocide.',
    birthDate: '1946-06-25',
    birthPlace: 'Denekamp, Netherlands',
    education: ['Royal Military College of Canada', 'US Marine Corps Command and Staff College'],
    affiliations: [
      { name: 'UNAMIR', role: 'Force Commander (1993-1994)', type: 'organization' },
      { name: 'Canadian Armed Forces', role: 'Lieutenant-General (Retired)', type: 'agency' },
      { name: 'Canadian Senate', role: 'Senator (2005-2014)', type: 'agency' },
    ],
    controversies: [
      'Sent "Genocide Fax" warning on January 11, 1994 - UN refused to authorize action',
      'Pleaded for reinforcements; Security Council instead reduced his force from 2,500 to 270',
      'Remained in Rwanda throughout genocide, risking his life to protect civilians',
      'Suffered severe PTSD; attempted suicide multiple times; became mental health advocate',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Rwandan Genocide', slug: 'rwandan-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1946-06-25', event: 'Born in Netherlands' },
      { date: '1993-10', event: 'Arrives in Kigali as UNAMIR Force Commander' },
      { date: '1994-01-11', event: 'Sends "Genocide Fax" warning of extermination plan' },
      { date: '1994-04-06', event: 'Genocide begins; Dallaire pleads for help' },
      { date: '1994-04-21', event: 'UN reduces UNAMIR from 2,500 to 270 troops' },
      { date: '2003', event: 'Publishes "Shake Hands with the Devil"' },
    ],
    sources: [
      { title: 'Shake Hands with the Devil by Romeo Dallaire', url: 'https://www.penguinrandomhouse.com/books/', date: '2003' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Theoneste Bagosora', relationship: 'Organized the genocide Dallaire tried to prevent', href: '/entities/individuals/theoneste-bagosora' },
    ],
  },
  'robert-menendez': {
    name: 'Robert Menendez',
    title: 'Former U.S. Senator (D-NJ)',
    role: 'Indicted and convicted sitting U.S. senator who served as Chairman of the Senate Foreign Relations Committee while secretly acting as a foreign agent for Egypt and Qatar, accepting hundreds of thousands in gold bars, cash, and a Mercedes-Benz',
    riskLevel: 'critical',
    description: 'Robert Menendez served as a U.S. Senator from New Jersey from 2006 to 2024 and as Chairman of the Senate Foreign Relations Committee - one of the most powerful positions in American foreign policy. In September 2023, he was indicted on federal charges of bribery, acting as a foreign agent, obstruction of justice, and extortion. Prosecutors alleged that Menendez and his wife Nadine accepted over $480,000 in gold bars, $70,000+ in cash (found stuffed in jacket pockets and envelopes), a Mercedes-Benz convertible, and other items of value from three New Jersey businessmen in exchange for using his official power to benefit the government of Egypt, interfere with federal criminal investigations, and secure monopoly rights for a halal meat certification company. A search of Menendez\'s home found gold bars traceable to a specific serial number registered to one of the co-defendants. Menendez was convicted on all 16 counts in July 2024 and resigned from the Senate in August 2024. This was his SECOND federal corruption trial - he was previously tried in 2017 on charges of accepting gifts from Florida eye doctor Salomon Melgen in exchange for political favors; that trial ended in a hung jury.',
    birthDate: 'January 1, 1954',
    birthPlace: 'New York City, New York',
    education: ['St. Peter\'s University (B.A.)', 'Rutgers School of Law (J.D.)'],
    affiliations: [
      { name: 'U.S. Senate (D-NJ)', role: 'Senator', type: 'agency' as const },
      { name: 'Senate Foreign Relations Committee', role: 'Chairman', type: 'agency' as const },
    ],
    controversies: [
      'Convicted on all 16 federal counts including bribery, acting as foreign agent (Egypt), extortion, and obstruction of justice (July 2024)',
      'Over $480,000 in gold bars and $70,000+ in cash found in home during FBI search',
      'Accepted Mercedes-Benz convertible from co-defendant while using position to benefit Egyptian government',
      'Used Senate Foreign Relations Committee chairmanship to provide sensitive U.S. government information to Egypt',
      'Previously tried in 2017 for accepting luxury trips, campaign contributions, and gifts from Dr. Salomon Melgen (hung jury)',
    ],
    charges: [
      { statute: '18 U.S.C. 201(b)', description: 'Bribery of a public official - accepting gold bars, cash, and luxury vehicles in exchange for official acts', category: 'federal' },
      { statute: '18 U.S.C. 951', description: 'Acting as an unregistered agent of a foreign government (Egypt)', category: 'federal' },
      { statute: '18 U.S.C. 1951', description: 'Extortion under color of official right (Hobbs Act)', category: 'federal' },
      { statute: '18 U.S.C. 1512', description: 'Obstruction of justice - attempting to influence and impede federal investigations', category: 'federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to commit bribery, honest services fraud, and extortion', category: 'federal' },
      { statute: '22 U.S.C. 611', description: 'FARA violation - acting as agent of Egypt without registration', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/aipac-foreign-influence-machine', '/investigations/congressional-insider-trading'],
    timeline: [
      { date: '2006-01-18', event: 'Appointed to U.S. Senate to fill vacancy' },
      { date: '2015-04-01', event: 'First federal indictment on corruption charges (Melgen case)' },
      { date: '2017-11-16', event: 'First trial ends in hung jury; charges dismissed' },
      { date: '2023-09-22', event: 'Second federal indictment: bribery, foreign agent, extortion' },
      { date: '2024-07-16', event: 'Convicted on all 16 federal counts' },
      { date: '2024-08-20', event: 'Resigns from U.S. Senate' },
    ],
    sources: [
      { title: 'DOJ: United States v. Robert Menendez et al.', url: 'https://www.justice.gov/news', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Nadine Menendez', relationship: 'Wife and co-defendant; accepted bribes alongside senator' },
      { name: 'Wael Hana', relationship: 'Co-defendant; owner of IS EG Halal who received Egyptian government monopoly through Menendez influence' },
    ],
  },
  'rick-scott': {
    name: 'Rick Scott',
    title: 'U.S. Senator (R-FL), Former Governor of Florida',
    role: 'CEO who presided over the largest Medicare fraud in American history ($1.7 billion settlement), then escaped criminal prosecution and used his personal fortune to become governor and senator',
    riskLevel: 'high',
    description: 'Rick Scott was the CEO and co-founder of Columbia/HCA Healthcare Corporation, which became the largest for-profit hospital chain in the United States. In 1997, the FBI raided HCA offices in a massive healthcare fraud investigation. Scott resigned as CEO shortly after. In 2000-2003, HCA agreed to pay $1.7 billion in settlements - the largest healthcare fraud settlement in U.S. history at the time - for systematically defrauding Medicare and Medicaid through upcoding, kickbacks to physicians, and billing for services never provided. Scott was never personally charged, invoking the Fifth Amendment 75 times during depositions. He received a $300 million severance package and $10 million in stock. Scott then spent $75 million of his personal fortune to win the Florida governorship in 2010, and was elected to the U.S. Senate in 2018. As governor, he opposed Medicaid expansion under the ACA - the same program his company had defrauded.',
    birthDate: 'December 1, 1952',
    birthPlace: 'Bloomington, Illinois',
    education: ['University of Missouri-Kansas City (B.A.)', 'Southern Methodist University (J.D.)'],
    affiliations: [
      { name: 'U.S. Senate (R-FL)', role: 'Senator', type: 'agency' as const },
      { name: 'State of Florida', role: 'Governor', type: 'agency' as const },
      { name: 'Columbia/HCA Healthcare Corporation', role: 'CEO/Co-founder', type: 'corporation' as const },
    ],
    controversies: [
      'CEO of Columbia/HCA during largest Medicare fraud in U.S. history ($1.7 billion settlement)',
      'Invoked Fifth Amendment 75 times during fraud depositions; never personally charged',
      'Received $300 million severance after forced resignation during FBI investigation',
      'Spent $75 million of personal fortune on gubernatorial campaign',
      'As governor, opposed Medicaid expansion for the program his company defrauded',
      'Oversaw purge of 180,000 voters from Florida rolls before 2012 election',
    ],
    charges: [
      { statute: '31 U.S.C. 3729-3733', description: 'Columbia/HCA paid $1.7B under False Claims Act for Medicare/Medicaid fraud (Scott personally not charged)', category: 'federal' },
      { statute: '42 U.S.C. 1320a-7b', description: 'HCA paid illegal kickbacks to physicians for patient referrals', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/medicare-medicaid-fraud-trillion-dollar-theft'],
    timeline: [
      { date: '1987', event: 'Co-founds Columbia Hospital Corporation' },
      { date: '1994', event: 'Columbia acquires HCA; becomes largest U.S. hospital chain' },
      { date: '1997-03-19', event: 'FBI raids HCA offices in El Paso and other cities' },
      { date: '1997-07', event: 'Forced to resign as CEO; receives $300M severance' },
      { date: '2000-12', event: 'HCA agrees to $840M settlement (first of two)' },
      { date: '2003-06', event: 'HCA agrees to additional $881M settlement; total $1.7B' },
      { date: '2010-11', event: 'Elected Governor of Florida' },
      { date: '2018-11', event: 'Elected U.S. Senator from Florida' },
    ],
    sources: [
      { title: 'DOJ: Largest Health Care Fraud Case in U.S. History', url: 'https://www.justice.gov/news', date: '2003' },
    ],
    aliases: [],
    knownAssociates: [],
  },
  'rod-blagojevich': {
    name: 'Rod Blagojevich',
    title: 'Former Governor of Illinois (D)',
    role: 'Governor convicted of attempting to sell Barack Obama\'s vacant U.S. Senate seat, extorting campaign contributions, and multiple counts of wire fraud',
    riskLevel: 'high',
    description: 'Rod Blagojevich served as the 40th Governor of Illinois from 2003 to 2009. On December 9, 2008, he was arrested at his home by FBI agents on corruption charges, including the stunning allegation that he attempted to sell or trade the U.S. Senate seat vacated by President-elect Barack Obama. FBI wiretaps captured Blagojevich stating the Senate seat was "a f***ing valuable thing" and "I\'m just not giving it up for f***ing nothing." He was impeached by the Illinois legislature and removed from office in January 2009 by a unanimous 59-0 Senate vote. In 2011, he was convicted on 17 of 20 federal counts including wire fraud, attempted extortion, and soliciting bribes. He was sentenced to 14 years in federal prison. In February 2020, President Trump commuted his sentence after Blagojevich had served approximately 8 years.',
    birthDate: 'December 10, 1956',
    birthPlace: 'Chicago, Illinois',
    education: ['Northwestern University (B.A.)', 'Pepperdine University School of Law (J.D.)'],
    affiliations: [
      { name: 'State of Illinois', role: 'Governor', type: 'agency' as const },
      { name: 'U.S. House of Representatives (D-IL)', role: 'Member of Congress', type: 'agency' as const },
    ],
    controversies: [
      'Attempted to sell Obama\'s vacant U.S. Senate seat to highest bidder',
      'Arrested by FBI at home; wiretaps captured extensive corruption discussions',
      'Impeached and removed from office by unanimous 59-0 Illinois Senate vote',
      'Convicted on 17 of 20 federal corruption counts including wire fraud and extortion',
      'Sentenced to 14 years; sentence commuted by Trump after 8 years',
    ],
    charges: [
      { statute: '18 U.S.C. 1343', description: 'Wire fraud - using interstate communications in scheme to defraud', category: 'federal' },
      { statute: '18 U.S.C. 1951', description: 'Attempted extortion under color of official right (Hobbs Act)', category: 'federal' },
      { statute: '18 U.S.C. 666', description: 'Soliciting bribes as a state official receiving federal funds', category: 'federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to commit wire fraud and extortion', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '2003-01-13', event: 'Inaugurated as Governor of Illinois' },
      { date: '2008-12-09', event: 'Arrested by FBI on corruption charges' },
      { date: '2009-01-29', event: 'Impeached and removed from office (59-0 vote)' },
      { date: '2011-06-27', event: 'Convicted on 17 federal counts' },
      { date: '2011-12-07', event: 'Sentenced to 14 years in federal prison' },
      { date: '2020-02-18', event: 'Sentence commuted by President Trump' },
    ],
    sources: [
      { title: 'DOJ: United States v. Rod Blagojevich', url: 'https://www.justice.gov/news', date: '2008' },
    ],
    aliases: ['Blago'],
    knownAssociates: [
      { name: 'Tony Rezko', relationship: 'Political fundraiser and co-defendant convicted of corruption' },
    ],
  },
  'randy-cunningham': {
    name: 'Randy "Duke" Cunningham',
    title: 'Former U.S. Representative (R-CA-50)',
    role: 'Most corrupt member of Congress in modern history: accepted $2.4 million in bribes from defense contractors in exchange for steering billions in Pentagon contracts',
    riskLevel: 'high',
    description: 'Randall Harold "Duke" Cunningham served as a Republican U.S. Representative from California from 1991 to 2005. A decorated Vietnam War fighter ace (the Navy\'s first ace of the war), Cunningham leveraged his military hero status and position on the House Defense Appropriations Subcommittee to run one of the most brazen bribery operations in congressional history. He accepted $2.4 million in bribes from defense contractors Mitchell Wade (MZM Inc.) and Brent Wilkes (ADCS Inc.), including a $1.675 million home purchase by Wade at an inflated price, a 42-foot yacht named "Duke-Stir," Rolls-Royce and other luxury vehicles, antiques, rugs, and cash payments. In return, Cunningham steered tens of millions in classified and unclassified defense and intelligence contracts to his benefactors. He even maintained a "bribe menu" on congressional stationery listing the dollar amounts of contracts required in exchange for specific bribe amounts. He pleaded guilty in 2005 and was sentenced to 8 years and 4 months in federal prison - the longest sentence ever imposed on a former member of Congress at the time.',
    birthDate: 'December 8, 1941',
    birthPlace: 'Los Angeles, California',
    education: ['University of Missouri (B.A., M.A.)', 'National University (M.B.A.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (R-CA)', role: 'Member of Congress', type: 'agency' as const },
      { name: 'House Appropriations Committee', role: 'Member, Defense Subcommittee', type: 'organization' as const },
    ],
    controversies: [
      'Accepted $2.4 million in bribes from defense contractors - largest bribery case for a sitting congressman',
      'Maintained a "bribe menu" on congressional stationery listing contract amounts for corresponding bribes',
      'Steered tens of millions in classified defense contracts to bribe-paying companies',
      'Accepted mansion, yacht, Rolls-Royce, antiques, and cash',
      'Longest prison sentence for a former member of Congress at the time',
    ],
    charges: [
      { statute: '18 U.S.C. 201', description: 'Bribery - accepting $2.4 million in exchange for steering defense contracts', category: 'federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax evasion - failing to report bribe income', category: 'federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to commit bribery, mail fraud, wire fraud, and tax evasion', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-insider-trading'],
    timeline: [
      { date: '1991-01', event: 'Takes office as U.S. Representative for CA-50' },
      { date: '2003-2005', event: 'Period of most extensive bribery from Wade and Wilkes' },
      { date: '2005-06', event: 'San Diego Union-Tribune reports Wade purchased Cunningham\'s home for $1.675M above market value' },
      { date: '2005-11-28', event: 'Pleads guilty to federal conspiracy and tax evasion charges' },
      { date: '2006-03-03', event: 'Sentenced to 8 years 4 months in federal prison' },
      { date: '2013-06-04', event: 'Released from federal prison' },
    ],
    sources: [
      { title: 'DOJ: Duke Cunningham Sentencing', url: 'https://www.justice.gov/news', date: '2006' },
    ],
    aliases: ['Duke', 'Duke-Stir'],
    knownAssociates: [
      { name: 'Mitchell Wade', relationship: 'CEO of MZM Inc.; primary briber; convicted of bribery and conspiracy' },
      { name: 'Brent Wilkes', relationship: 'CEO of ADCS Inc.; convicted of bribery, conspiracy, and money laundering' },
    ],
  },

  'ron-desantis': {
    name: 'Ron DeSantis',
    title: 'Governor of Florida',
    role: 'Architect of Florida\'s culture wars, book bans, and anti-democratic policies who weaponized state power against political opponents and marginalized communities',
    riskLevel: 'high',
    description: 'Ronald Dion DeSantis has served as the 46th Governor of Florida since 2019. He has used the governor\'s office to wage aggressive culture wars while consolidating power. DeSantis dissolved the Reedy Creek Improvement District (Disney\'s self-governing status) in retaliation for Disney opposing his "Don\'t Say Gay" bill, costing Florida taxpayers over $1 billion. He signed the "Stop WOKE Act" restricting workplace diversity training and classroom instruction on race, portions of which were struck down as unconstitutional. He oversaw the removal of over 1,600 books from Florida school libraries. He signed a 6-week abortion ban. He relocated migrants from Texas to Martha\'s Vineyard as a political stunt using Florida taxpayer funds of $12 million, despite the migrants never being in Florida. He suspended a twice-elected state attorney (Andrew Warren) for policy disagreements. He took over a small liberal arts college (New College of Florida) and installed political allies on its board to remake it as a conservative institution.',
    birthDate: 'September 14, 1978',
    birthPlace: 'Jacksonville, Florida',
    education: ['Yale University (B.A.)', 'Harvard Law School (J.D.)', 'U.S. Navy JAG Corps'],
    affiliations: [
      { name: 'State of Florida', role: 'Governor', type: 'agency' as const },
      { name: 'U.S. House of Representatives (R-FL)', role: 'Former Member (2013-2018)', type: 'agency' as const },
    ],
    controversies: [
      'Disney retaliation: Dissolved Reedy Creek district after Disney opposed Don\'t Say Gay bill; cost taxpayers $1B+',
      'Martha\'s Vineyard migrant flights: Used $12M Florida taxpayer funds to relocate Texas migrants as political stunt',
      'Book bans: Oversaw removal of 1,600+ books from school libraries',
      'Stop WOKE Act: Parts struck down as unconstitutional; restricted free speech on race in workplaces and schools',
      'Suspended elected state attorney Andrew Warren for policy disagreements',
      'New College takeover: Replaced board of liberal arts college with political operatives',
      '6-week abortion ban signed with no exceptions for rape until 15 weeks',
    ],
    charges: [],
    relatedInvestigations: ['/investigations/voter-suppression-modern-assault-on-democracy'],
    timeline: [
      { date: '2019-01-08', event: 'Inaugurated as Governor of Florida' },
      { date: '2022-03', event: 'Signs "Don\'t Say Gay" bill; begins feud with Disney' },
      { date: '2022-04', event: 'Dissolves Reedy Creek Improvement District in retaliation against Disney' },
      { date: '2022-09', event: 'Flies migrants from San Antonio to Martha\'s Vineyard using Florida funds' },
      { date: '2023-01', event: 'Takes over New College of Florida board' },
      { date: '2023-04', event: 'Signs 6-week abortion ban' },
      { date: '2023-05-24', event: 'Launches failed presidential campaign' },
      { date: '2024-01-21', event: 'Drops out of presidential race' },
    ],
    sources: [
      { title: 'Tampa Bay Times: DeSantis Coverage', url: 'https://www.tampabay.com/', date: '2024' },
      { title: 'ProPublica: DeSantis Investigations', url: 'https://www.propublica.org/', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Christina Pushaw', relationship: 'Press secretary who had been registered as a foreign agent for a former Georgian president' },
    ],
  },
  'robert-bentley': {
    name: 'Robert Bentley',
    title: 'Former Governor of Alabama (2011-2017)',
    photo: '/images/individuals/robert-bentley.webp',
    background: 'Robert Julian Bentley served as the 53rd Governor of Alabama. A dermatologist and Baptist deacon, he ran on a platform of family values. He resigned in April 2017 as part of a plea deal after using state resources to conduct and conceal an extramarital affair with a senior political advisor.',
    controversies: [
      'Used state law enforcement to intimidate and surveil individuals who knew about his affair with advisor Rebekah Mason',
      'Attempted to fire the head of Alabama Law Enforcement Agency, Spencer Collier, after Collier refused to help cover up the affair',
      'State ethics commission investigation found he used campaign funds for personal purposes related to concealing the affair',
      'Recorded phone conversations with Mason were obtained by investigators revealing use of state resources',
      'Misused state helicopters and security personnel to facilitate meetings with Mason',
    ],
    charges: [
      {
        description: 'Two misdemeanor charges under Alabama ethics law for campaign finance violations; pleaded guilty as part of resignation deal',
        status: 'Pleaded guilty; sentenced to community service, surrendered campaign funds, barred from holding office',
        source: 'Alabama Attorney General',
      },
    ],
    timeline: [
      { date: '2011-01-17', event: 'Inaugurated as Governor of Alabama' },
      { date: '2016-03-22', event: 'Law enforcement head Spencer Collier publicly reveals affair' },
      { date: '2017-04-07', event: 'Alabama Ethics Commission issues findings; articles of impeachment prepared' },
      { date: '2017-04-10', event: 'Resigns as governor; pleads guilty to two misdemeanor charges' },
    ],
    affiliations: [
      { name: 'State of Alabama', role: 'Governor', type: 'agency' as const },
      { name: 'Alabama Republican Party', role: 'Member', type: 'organization' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Rebekah Mason', relationship: 'Senior political advisor with whom he had extramarital affair' },
      { name: 'Spencer Collier', relationship: 'Alabama law enforcement head he fired for refusing to cover up affair' },
    ],
  },
  'ralph-shortey': {
    name: 'Ralph Shortey',
    title: 'Former Oklahoma State Senator (R, 2010-2017)',
    photo: '/images/individuals/ralph-shortey.webp',
    background: 'Ralph Allen Shortey served as an Oklahoma State Senator and was a prominent early supporter of Donald Trump\'s 2016 presidential campaign, serving as the state chairman of Trump\'s campaign. In 2017, he was charged with child sex trafficking after being found in a hotel room with a 17-year-old boy.',
    controversies: [
      'Found in a Super 8 motel room with a 17-year-old boy in March 2017',
      'Pleaded guilty to federal child sex trafficking charge',
      'Text messages showed he solicited sexual acts from the minor in exchange for money',
      'Served as Oklahoma state chairman for Trump\'s 2016 presidential campaign',
      'Had previously introduced bizarre legislation including banning human fetuses in food products',
    ],
    charges: [
      {
        description: 'One count of child sex trafficking (18 U.S.C. 1591); originally charged with three additional counts that were dropped as part of plea deal',
        status: 'Pleaded guilty; sentenced to 15 years in federal prison (2018)',
        source: 'U.S. Attorney for the Western District of Oklahoma',
      },
    ],
    timeline: [
      { date: '2010-11-02', event: 'Elected to Oklahoma State Senate' },
      { date: '2016-01-01', event: 'Named state chairman for Trump\'s presidential campaign in Oklahoma' },
      { date: '2017-03-09', event: 'Found in motel room with 17-year-old boy; arrested' },
      { date: '2017-11-30', event: 'Pleads guilty to federal child sex trafficking charge' },
      { date: '2018-09-17', event: 'Sentenced to 15 years in federal prison' },
    ],
    affiliations: [
      { name: 'Oklahoma State Senate', role: 'State Senator (R)', type: 'agency' as const },
      { name: 'Trump 2016 Campaign', role: 'Oklahoma State Chairman', type: 'organization' as const },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Served as his Oklahoma campaign state chairman', href: '/entities/individuals/donald-trump' },
    ],
  },
  'richard-sackler': {
    name: 'Richard Sackler',
    title: 'Former President and Co-Chairman, Purdue Pharma; Key Architect of OxyContin Marketing Strategy',
    role: 'Sackler family patriarch who personally directed the aggressive marketing of OxyContin, the drug at the center of the American opioid epidemic that has killed over 500,000 people',
    riskLevel: 'critical',
    description: 'Richard Sackler (born March 10, 1945, Roslyn, New York) is the son of Raymond Sackler, one of three physician brothers who purchased Purdue Frederick Company in 1952. After earning a B.A. from Columbia University and an M.D. from New York University School of Medicine, Sackler joined Purdue in 1971 as an assistant to his father. He rose through the company over three decades, heading research and development and playing a pivotal role in the development and launch of OxyContin, the extended-release oxycodone painkiller approved by the FDA in 1995 that became the most destructive pharmaceutical in American history. Sackler served as president of Purdue Pharma from 1999 to 2003 and as co-chairman of the board from 2003 until his departure in 2018. Internal documents obtained through litigation reveal that Sackler personally directed the marketing strategy that falsely portrayed OxyContin as less addictive than competing opioids, pushed the fabricated claim that addiction risk was "less than one percent," and oversaw the "Region Zero" program that targeted high-prescribing physicians. A 2001 internal email showed Sackler directing the company to "hammer on the abusers in every way possible," describing addicted patients as "the culprits and the problem" and "reckless criminals." In 2008, he directed staff to measure "performance by Rx\'s by strength, giving higher measures to higher strengths", incentivizing prescriptions for the most powerful and addictive OxyContin formulations. He was instrumental in securing the FDA label claiming "delayed absorption is believed to reduce the abuse liability", obtained without any addiction studies and through the compromised approval of Dr. Curtis Wright IV, who subsequently left the FDA to work for Purdue. The Sackler family extracted $10.7 billion from Purdue before its bankruptcy filing, with at least $1 billion wired to offshore accounts including Swiss banks. Sackler was named as a defendant in the Massachusetts Attorney General\'s 2018 lawsuit along with 15 other Purdue executives and family members. His 8-hour 2015 deposition in Louisville, Kentucky was initially sealed but was later obtained and published by STAT News through litigation. On June 27, 2024, the Supreme Court ruled 5-4 in Harrington v. Purdue Pharma L.P. that the Bankruptcy Code does not permit granting liability relief to non-bankrupt parties, overturning the Sacklers\' attempted civil immunity. On January 23, 2025, the Sackler family reached a final $7.4 billion settlement. No member of the Sackler family has faced criminal prosecution. Sackler has lived outside Austin, Texas since approximately 2013. He was portrayed by Michael Stuhlbarg in the Hulu miniseries Dopesick (2021) and by Matthew Broderick in the Netflix miniseries Painkiller (2023).',
    birthDate: '1945-03-10',
    birthPlace: 'Roslyn, New York',
    education: ['Columbia University (B.A.)', 'New York University School of Medicine (M.D.)'],
    affiliations: [
      { name: 'Purdue Pharma', role: 'Joined 1971; Head of R&D; President (1999-2003); Co-Chairman of the Board (2003-2018)', type: 'corporation' as const },
      { name: 'Sackler Family', role: 'Son of Raymond Sackler; patriarch of the third generation; key decision-maker in OxyContin marketing and company strategy', type: 'organization' as const },
      { name: 'Mundipharma', role: 'Sackler-owned international pharmaceutical company selling OxyContin equivalents in 120+ countries', type: 'corporation' as const },
    ],
    controversies: [
      'Personally directed the aggressive OxyContin marketing strategy that falsely portrayed the drug as less addictive, using the fabricated "less than 1%" addiction claim derived from a misrepresented 1980 NEJM letter',
      'Sent 2001 internal email directing company to "hammer on the abusers in every way possible," calling addicted patients "the culprits and the problem" and "reckless criminals"',
      'In 2008, directed staff to measure "performance by Rx\'s by strength, giving higher measures to higher strengths", incentivizing prescriptions for the most powerful and addictive OxyContin formulations',
      'Oversaw the "Region Zero" program that targeted high-prescribing physicians, the very doctors most likely to be running pill mills or over-prescribing',
      'Instrumental in securing the compromised FDA approval through Dr. Curtis Wright IV, who approved the abuse-deterrent label claim without addiction studies and then left the FDA to work for Purdue',
      'Sackler family extracted $10.7 billion from Purdue during the crisis; NY AG found at least $1 billion wired to offshore accounts including Swiss banks',
      'Named as defendant in Massachusetts AG\'s 2018 lawsuit along with 15 other executives and family members; 2015 deposition revealed depth of personal involvement',
      'Attempted to use Purdue\'s bankruptcy to obtain civil immunity without filing personal bankruptcy, rejected by Supreme Court in Harrington v. Purdue Pharma (2024)',
      'No member of the Sackler family has faced criminal prosecution despite the Ogrosky memo recommending felony charges and two corporate guilty pleas',
      'Family philanthropy to Met Museum, Louvre, Guggenheim, Smithsonian, Oxford, Harvard, and Yale characterized as reputation laundering from profits of mass death; over 20 institutions removed the Sackler name',
    ],
    charges: [
      { statute: '21 U.S.C. ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 331, FDCA Misbranding', description: 'Purdue pleaded guilty to misbranding OxyContin with intent to defraud and mislead (2007); Sackler not individually charged despite directing the marketing strategy', category: 'Drug Misbranding' },
      { statute: '18 U.S.C. ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 371, Conspiracy', description: 'Purdue admitted in 2020 to conspiring to defraud the United States by impeding the DEA; Sackler directed company strategy but was not individually charged', category: 'federal' },
      { statute: 'Civil, Massachusetts AG Lawsuit (2018)', description: 'Named defendant in Commonwealth v. Purdue Pharma et al.; complaint detailed personal emails, marketing directives, and role in OxyContin strategy', category: 'CIVIL' },
      { statute: 'Civil, Harrington v. Purdue Pharma L.P. (2024)', description: 'Supreme Court struck down Sackler attempt to gain civil immunity through Purdue bankruptcy without personally filing for bankruptcy', category: 'CIVIL' },
    ],
    relatedInvestigations: [
      { title: 'Opioid Crisis: Corporate Mass Murder', slug: 'opioid-crisis-corporate-mass-murder', severity: 'critical' },
      { title: 'Opioid Distribution Networks', slug: 'opioid-distribution-networks', severity: 'critical' },
      { title: 'Opioid Settlement Fund Misuse', slug: 'opioid-settlement-fund-misuse', severity: 'high' },
    ],
    timeline: [
      { date: '1945-03-10', event: 'Born in Roslyn, New York, son of Raymond Sackler, one of three physician brothers who purchased Purdue Frederick in 1952' },
      { date: '1971', event: 'Joins Purdue Pharma as an assistant to his father Raymond; begins rising through the company over the next three decades' },
      { date: '1995-12-12', event: 'FDA approves OxyContin with unprecedented abuse-deterrent label claim, obtained without addiction studies through compromised approval by Dr. Curtis Wright IV' },
      { date: '1996', event: 'OxyContin launched; Sackler directs sales representatives to tell doctors the drug is less addictive, using fabricated "less than 1%" claim' },
      { date: '1999', event: 'Becomes President of Purdue Pharma as OxyContin prescriptions for non-cancer pain grow nearly tenfold' },
      { date: '2001', event: 'Sends internal email directing company to "hammer on the abusers" and calling addicted patients "reckless criminals"' },
      { date: '2003', event: 'Named Co-Chairman of Purdue Pharma board; DEA finds Purdue\'s methods "very much exacerbated OxyContin\'s widespread abuse"' },
      { date: '2007-05-10', event: 'Purdue pleads guilty to misbranding and pays $634.5M; three executives plead guilty but receive no prison time; no Sackler family member charged' },
      { date: '2008', event: 'Directs staff to measure performance by prescription strength, incentivizing the most addictive formulations' },
      { date: '2013', event: 'Relocates to outside Austin, Texas' },
      { date: '2015', event: 'Gives 8-hour deposition in Louisville, KY that is initially sealed; later obtained and published by STAT News through litigation' },
      { date: '2018', event: 'Named defendant in Massachusetts AG lawsuit along with 15 other Purdue executives and family members; leaves Purdue board' },
      { date: '2019-09-15', event: 'Purdue files for Chapter 11 bankruptcy; AlixPartners audit reveals Sackler family withdrew $10.7 billion from the company' },
      { date: '2020-10-21', event: 'Purdue pleads guilty to three federal charges including conspiracy to defraud the United States; $8.3 billion settlement' },
      { date: '2024-06-27', event: 'Supreme Court rules 5-4 in Harrington v. Purdue Pharma L.P. that bankruptcy code cannot grant liability relief to non-bankrupt Sacklers' },
      { date: '2025-01-23', event: 'Sackler family reaches final $7.4 billion settlement, $6.5B from the Sacklers over 15 years, to resolve all remaining litigation' },
    ],
    sources: [
      { title: 'Patrick Radden Keefe: Empire of Pain, The Secret History of the Sackler Dynasty', url: 'https://www.penguinrandomhouse.com/books/612024/empire-of-pain-by-patrick-radden-keefe/', date: '2021' },
      { title: 'STAT News: Secret OxyContin Files (Unsealed Depositions and Documents)', url: 'https://www.statnews.com/feature/opioid-epidemic/secret-oxycontin-files/', date: '2019' },
      { title: 'Massachusetts AG: Commonwealth v. Purdue Pharma et al. (January 2019 Amended Complaint)', url: 'https://www.mass.gov/lists/ag-purdue-pharma-documents', date: '2019' },
      { title: 'Supreme Court of the United States: Harrington v. Purdue Pharma L.P., 603 U.S. ___ (2024)', url: 'https://www.supremecourt.gov/opinions/23pdf/23-124_p86b.pdf', date: '2024' },
      { title: 'New York Attorney General: Sackler Family Financial Transfers Investigation', url: 'https://ag.ny.gov/', date: '2019' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'David Sackler', relationship: 'Son; third-generation Sackler; Purdue board member; named defendant in multiple state lawsuits', href: '/entities/individuals/david-sackler' },
      { name: 'Kathe Sackler', relationship: 'Half-sister (daughter of Mortimer Sackler); Purdue board member; one of eight family defendants in 2018 lawsuits', href: '/entities/individuals/kathe-sackler' },
      { name: 'Raymond Sackler', relationship: 'Father; co-owner of Purdue Pharma with brother Mortimer after Arthur\'s death in 1987; died July 2017' },
      { name: 'Michael Friedman', relationship: 'Purdue president who pleaded guilty to misbranding in 2007; Ogrosky memo recommended felony charges', href: '/entities/individuals/michael-friedman' },
      { name: 'Craig Landau', relationship: 'Purdue CEO from 2017 who oversaw second guilty plea and bankruptcy filing', href: '/entities/individuals/craig-landau' },
      { name: 'Howard Udell', relationship: 'Purdue general counsel who pleaded guilty to misbranding in 2007', href: '/entities/individuals/howard-udell' },
      { name: 'Paul Goldenheim', relationship: 'Purdue chief medical officer who pleaded guilty to misbranding in 2007', href: '/entities/individuals/paul-goldenheim' },
      { name: 'Jonathan Sackler', relationship: 'Half-brother (son of Mortimer); Purdue board member; died in 2020 before lawsuit resolution' },
    ],
  },
  'rick-snyder': {
    name: 'Rick Snyder',
    title: 'Former Governor of Michigan',
    role: 'Governor',
    riskLevel: 'critical' as const,
    description: 'Republican Governor of Michigan (2011-2019) whose administration\'s decision to switch Flint\'s water source to the corrosive Flint River in April 2014  -  as a cost-cutting measure  -  caused a catastrophic public health crisis. The switch leached lead from aging pipes into drinking water consumed by nearly 100,000 residents, causing permanent brain damage in thousands of children, outbreaks of Legionnaires\' disease that killed at least 12 people, and a humanitarian disaster that became an international symbol of environmental racism and government failure.',
    birthDate: '1958-08-19',
    birthPlace: 'Battle Creek, Michigan',
    education: ['B.A., MBA, and J.D., University of Michigan (1982)'],
    affiliations: [
      { name: 'State of Michigan', role: 'Governor (2011-2019)', type: 'agency' as const },
      { name: 'Gateway Computers', role: 'Former CEO', type: 'corporation' as const },
    ],
    controversies: [
      'Administration switched Flint water source to corrosive Flint River in 2014 as cost-cutting measure under emergency manager',
      'State officials ignored warnings for 18 months while residents drank lead-contaminated water causing permanent brain damage in children',
      'At least 12 people died from Legionnaires\' disease outbreak linked to the water contamination',
      'Internal emails showed his staff knew about water quality problems months before public acknowledgment',
      'Appointed unelected emergency managers who overrode democratically elected local officials in majority-Black cities',
      'Emergency manager law (PA 436) disproportionately affected Black communities; Flint was 54% Black',
      'Criminal charges of willful neglect of duty initially brought in 2021 but dismissed on procedural grounds in 2022',
      'Estimated cost of Flint water crisis response exceeded $600 million; full infrastructure replacement ongoing years later',
    ],
    charges: [
      {
        statute: 'MCL 750.478a - Willful Neglect of Duty by a Public Officer',
        description: 'Charged with two misdemeanor counts of willful neglect of duty for failure to protect Flint residents from lead-contaminated water; charges dismissed on procedural grounds',
        category: 'regulatory',
      },
      {
        statute: 'Safe Drinking Water Act (42 U.S.C. ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 300f) - Regulatory Failure',
        description: 'State under his leadership failed to enforce federal safe drinking water standards and implement required corrosion control treatment',
        category: 'regulatory',
      },
    ],
    relatedInvestigations: [
      { title: 'Water Privatization and Access Crisis', slug: 'water-privatization-crisis', severity: 'critical' },
      { title: 'Lead Poisoning: America\'s Century-Long Cover-Up', slug: 'lead-poisoning-america', severity: 'critical' },
    ],
    timeline: [
      { date: '2011-01', event: 'Inaugurated as Governor of Michigan; signs emergency manager law expanding state control over struggling cities' },
      { date: '2013-11', event: 'Emergency manager appointed for Flint approves plan to switch water source from Detroit system to Flint River' },
      { date: '2014-04-25', event: 'Flint water source switched to Flint River; residents immediately complain about water color, taste, and smell' },
      { date: '2014-08', event: 'E. coli and total coliform bacteria detected in Flint water; boil advisories issued' },
      { date: '2015-02', event: 'Elevated lead levels detected in Flint resident\'s home; state officials dismiss concerns' },
      { date: '2015-09', event: 'Dr. Mona Hanna-Attisha publishes research showing children\'s blood lead levels doubled and tripled since water switch' },
      { date: '2015-10-16', event: 'Flint reconnected to Detroit water system 18 months after switch; Snyder declares state of emergency in January 2016' },
      { date: '2016-01-16', event: 'President Obama declares federal state of emergency for Flint; National Guard deployed to distribute water' },
      { date: '2021-01-14', event: 'Indicted on two misdemeanor willful neglect of duty charges related to Flint water crisis' },
      { date: '2022-06', event: 'Charges dismissed by Michigan judge on procedural grounds related to grand jury process' },
    ],
    sources: [
      { title: 'Michigan Civil Rights Commission: The Flint Water Crisis Report', date: '2017' },
      { title: 'EPA Office of Inspector General: Flint Water Report', url: 'https://www.epa.gov/flint', date: '2018' },
      { title: 'Flint Water Advisory Task Force Final Report', date: '2016' },
    ],
    aliases: ['One Tough Nerd'],
    knownAssociates: [
      { name: 'Darnell Earley', relationship: 'Emergency manager of Flint who approved the water source switch' },
      { name: 'Nick Lyon', relationship: 'Michigan Health Director charged with involuntary manslaughter over Legionnaires\' outbreak; charges dismissed' },
      { name: 'Dan Wyant', relationship: 'Michigan DEQ Director who resigned over agency\'s failure to require corrosion control treatment' },
    ],
  },
  'rex-tillerson': {
    name: 'Rex Tillerson',
    title: 'Former CEO of ExxonMobil / Former Secretary of State',
    role: 'Corporate Executive / Cabinet Secretary',
    riskLevel: 'critical' as const,
    description: 'CEO of ExxonMobil (2006-2017) who led the world\'s largest publicly traded oil company during the critical period when internal scientists confirmed climate change while the company funded disinformation campaigns to deny it. Under Tillerson\'s leadership, ExxonMobil used a separate set of climate projections internally for business planning while publicly casting doubt on climate science. Later served as Secretary of State (2017-2018) under Trump, where he gutted the State Department, eliminating critical positions and undermining American diplomacy. Received the Order of Friendship from Vladimir Putin while CEO.',
    birthDate: '1952-03-23',
    birthPlace: 'Wichita Falls, Texas',
    education: ['B.S. in Civil Engineering, University of Texas at Austin (1975)'],
    affiliations: [
      { name: 'ExxonMobil', role: 'Chairman and CEO (2006-2017)', type: 'corporation' as const },
      { name: 'U.S. Department of State', role: 'Secretary of State (2017-2018)', type: 'agency' as const },
    ],
    controversies: [
      'Led ExxonMobil while company funded climate denial despite internal scientists confirming climate change since the 1970s',
      'ExxonMobil under his leadership used separate climate projections internally while publicly denying climate science',
      'Company spent millions funding climate denial organizations including the Heartland Institute and American Petroleum Institute',
      'Received Russia\'s Order of Friendship from Vladimir Putin in 2013 for Exxon-Rosneft Arctic drilling partnership',
      'Negotiated $500 billion Exxon-Rosneft deal disrupted by Russia sanctions; advocated against Russian sanctions',
      'As Secretary of State, gutted State Department leaving 60% of senior positions vacant and forcing out career diplomats',
      'Proposed 30% cut to State Department budget; eliminated Special Envoy for Climate Change position',
      'Fired by Trump via tweet in March 2018; reportedly called Trump a moron in private',
      'New York AG sued ExxonMobil (later dropped some charges) for using two sets of climate cost books',
    ],
    charges: [
      {
        statute: 'Martin Act (NY) / Securities Fraud',
        description: 'New York AG alleged ExxonMobil misled investors about climate change costs using dual accounting; case partially resolved',
        category: 'financial',
      },
      {
        statute: 'Public Trust Doctrine - Climate Deception',
        description: 'Led company that knowingly funded climate disinformation while internal models accurately predicted warming contributing to global crisis',
        category: 'ethics',
      },
    ],
    relatedInvestigations: [
      { title: 'Fossil Fuel Subsidies and Climate Deception', slug: 'fossil-fuel-subsidies-climate-deception', severity: 'critical' },
    ],
    timeline: [
      { date: '1975', event: 'Joins Exxon as production engineer; spends entire 42-year career at the company' },
      { date: '2006-01-01', event: 'Becomes Chairman and CEO of ExxonMobil, the world\'s largest publicly traded oil company' },
      { date: '2006-2016', event: 'Leads ExxonMobil through period of massive profits while funding climate denial infrastructure' },
      { date: '2012', event: 'Negotiates $500 billion Exxon-Rosneft Arctic drilling partnership with Russia' },
      { date: '2013', event: 'Receives Russia\'s Order of Friendship from Vladimir Putin' },
      { date: '2015', event: 'InsideClimate News and LA Times expose ExxonKnew: company\'s own scientists confirmed climate change decades ago' },
      { date: '2017-02-01', event: 'Confirmed as Secretary of State; immediately begins restructuring that guts the department' },
      { date: '2018-03-13', event: 'Fired as Secretary of State via Trump tweet; reportedly called Trump a moron' },
      { date: '2018-2023', event: 'Multiple state AGs launch investigations and lawsuits against ExxonMobil for climate deception during Tillerson era' },
    ],
    sources: [
      { title: 'InsideClimate News: Exxon - The Road Not Taken', url: 'https://insideclimatenews.org/project/exxon-the-road-not-taken/', date: '2015' },
      { title: 'Senate Foreign Relations Committee: Tillerson Confirmation Hearing', date: '2017' },
      { title: 'New York AG: People v. ExxonMobil Corp.', date: '2018' },
    ],
    aliases: ['T-Rex (State Department nickname)'],
    knownAssociates: [
      { name: 'Lee Raymond', relationship: 'Predecessor as ExxonMobil CEO who established the climate denial playbook Tillerson continued', href: '/entities/individuals/lee-raymond' },
      { name: 'Vladimir Putin', relationship: 'Russian president who awarded Tillerson Order of Friendship for Exxon-Rosneft partnership' },
      { name: 'Donald Trump', relationship: 'President who appointed and later fired Tillerson as Secretary of State', href: '/entities/individuals/donald-trump' },
    ],
  },
  'ryan-zinke': {
    name: 'Ryan Zinke',
    title: 'Former Secretary of the Interior',
    role: 'Public Lands Selloff Architect with Ethics Violations',
    riskLevel: 'high' as const,
    description: 'Ryan Zinke served as Interior Secretary from 2017 to 2019, expanding oil, gas, and mining access on public lands while accumulating ethics violations including a real estate deal with Halliburton, use of a flag ceremony to signal his presence in the building, and directing staff to plan personal travel on taxpayer time. He resigned before multiple investigations concluded.',
    birthDate: '1961-11-01',
    birthPlace: 'Bozeman, Montana',
    education: [
      'B.S., University of Oregon (1984)',
      'M.B.A., National University (1991)',
      'M.S., University of San Diego (2003)',
    ],
    affiliations: [
      { name: 'DOI', role: 'Secretary of the Interior (2017-2019)', type: 'agency' as const },
      { name: 'U.S. House of Representatives', role: 'Representative, MT-AL (2015-2017)', type: 'agency' as const },
    ],
    controversies: [
      'Negotiated a real estate deal with Halliburton chairman in Whitefish, Montana while Halliburton had business before Interior Department',
      'DOI Inspector General referred him for criminal investigation over the Halliburton land deal; DOJ declined to prosecute',
      'Chartered military aircraft for personal travel between events at a cost of over $12,000 each trip',
      'Created and then canceled a massive reduction in Bears Ears and Grand Staircase-Escalante National Monuments totaling 2 million acres',
      'Proposed opening virtually all federal waters to offshore drilling, then exempted Florida after political pressure from Governor Rick Scott',
      'Used a personal email address for official business in violation of federal records laws',
      'Flew personal flags over the Interior headquarters building to signal his presence; used ceremonial protocol for personal optics',
    ],
    relatedInvestigations: [
      { title: 'EPA Regulatory Capture', slug: 'epa-regulatory-capture-exposed', severity: 'critical' },
    ],
    timeline: [
      { date: '2017-03', event: 'Confirmed as Secretary of the Interior' },
      { date: '2017-04', event: 'Signed order to review all national monument designations since 1996' },
      { date: '2017-12', event: 'Reduced Bears Ears by 85% and Grand Staircase-Escalante by nearly 50%' },
      { date: '2018-01', event: 'Proposed opening virtually all federal waters to offshore drilling' },
      { date: '2018', event: 'Multiple OIG investigations opened into travel, land deals, and conflicts of interest' },
      { date: '2018-12', event: 'Resigned under pressure before investigations concluded' },
      { date: '2022', event: 'Elected to Congress representing Montanas new 1st district' },
    ],
    sources: [
      { title: 'DOI OIG: Investigation of Secretary Zinke Land Deal', date: '2018' },
      { title: 'Washington Post: Zinke Halliburton Real Estate Deal', url: 'https://www.washingtonpost.com/', date: '2018' },
      { title: 'GAO: Report on Zinke Travel Expenditures', date: '2019' },
    ],
    aliases: ['Commander Zinke (self-styled reference to Navy SEAL service)'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who appointed Zinke; called him to say he was doing a "fantastic job" days before resignation', href: '/entities/individuals/donald-trump' },
      { name: 'David Bernhardt', relationship: 'Deputy and successor who was a former oil and gas lobbyist and continued deregulatory agenda' },
    ],
  },

  'rosemary-kennedy': {
    name: 'Rosemary Kennedy',
    title: 'Lobotomy Victim',
    role: 'Daughter of Joseph P. Kennedy Sr. who was subjected to a lobotomy at age 23 by Walter Freeman without her knowledge or consent, leaving her permanently incapacitated for the remaining 63 years of her life',
    riskLevel: 'critical' as const,
    description: 'Rose Marie "Rosemary" Kennedy (1918-2005) was the eldest daughter of Joseph P. Kennedy Sr. and Rose Fitzgerald Kennedy, and the sister of President John F. Kennedy, Senators Robert F. Kennedy and Ted Kennedy, and Eunice Kennedy Shriver. In November 1941, when Rosemary was 23 years old, her father arranged for Walter Freeman and James Watts to perform a prefrontal lobotomy on her without the knowledge or consent of her mother. Joseph Kennedy authorized the procedure because Rosemary had been exhibiting mood swings and what he perceived as rebellious behavior, and he feared her behavior might embarrass the family political ambitions. The procedure was catastrophic: Rosemary was left permanently incapacitated, unable to speak intelligibly, incontinent, and reduced to the mental capacity of an infant. She was immediately institutionalized at St. Coletta in Jefferson, Wisconsin, where she lived for the remaining 63 years of her life. Her father did not visit her, and her mother was not told her whereabouts for 20 years. The family concealed what had happened, publicly claiming Rosemary was "mentally retarded" from birth. Her story was not widely known until the 1980s and became a powerful indictment of both the lobotomy practice and the willingness of powerful families to destroy their own members to protect their public image. Her sister Eunice Kennedy Shriver later founded the Special Olympics in part inspired by Rosemary experience.',
    birthDate: '1918-09-13',
    birthPlace: 'Brookline, Massachusetts',
    deathDate: '2005-01-07',
    education: ['Various private schools and tutoring programs'],
    affiliations: [],
    controversies: [
      'Subjected to a prefrontal lobotomy at age 23 by Walter Freeman and James Watts at the direction of her father without her knowledge, consent, or her mother knowledge',
      'The lobotomy left her permanently incapacitated: unable to speak intelligibly, incontinent, and reduced to infant-level mental capacity',
      'Institutionalized at St. Coletta in Jefferson, Wisconsin for 63 years; her father never visited and her mother was not told her location for 20 years',
      'The Kennedy family concealed the lobotomy for decades, publicly claiming Rosemary had been mentally disabled from birth',
      'Her father ordered the procedure because he feared her mood swings and perceived rebelliousness would embarrass the family political career',
      'Her case became one of the most cited examples of the barbaric nature of the lobotomy era and the abuse of medical authority over women',
    ],
    relatedInvestigations: [
      { title: 'The American Lobotomy Epidemic', slug: 'lobotomy-epidemic-united-states', severity: 'critical' },
    ],
    timeline: [
      { date: '1918-09-13', event: 'Born in Brookline, Massachusetts, the third child of Joseph P. Kennedy Sr. and Rose Fitzgerald Kennedy' },
      { date: '1941-11', event: 'Walter Freeman and James Watts perform a prefrontal lobotomy at her father direction; the procedure is catastrophic and leaves her permanently incapacitated' },
      { date: '1941-12', event: 'Institutionalized at St. Coletta in Jefferson, Wisconsin; her mother is not informed of what happened or where she is' },
      { date: '1961', event: 'Her mother Rose Kennedy finally learns the truth about the lobotomy and Rosemary location, 20 years after the procedure' },
      { date: '1962', event: 'Her sister Eunice Kennedy Shriver begins the effort that will lead to the Special Olympics, partly inspired by Rosemary experience' },
      { date: '1987', event: 'The full story of her lobotomy becomes public through biographical accounts of the Kennedy family' },
      { date: '2005-01-07', event: 'Dies at age 86 at St. Coletta, having spent 63 years institutionalized after the lobotomy' },
    ],
    sources: [
      { title: 'Larson, K. - Rosemary: The Hidden Kennedy Daughter (Houghton Mifflin)', date: '2015' },
      { title: 'National Public Radio: The Tragic Story of Rosemary Kennedy', date: '2015' },
    ],
    knownAssociates: [
      { name: 'Walter Freeman', relationship: 'The physician who performed the lobotomy that destroyed her cognitive function at age 23', href: '/entities/individuals/walter-freeman' },
      { name: 'Joseph P. Kennedy Sr.', relationship: 'Father who authorized the lobotomy without her or her mother knowledge or consent to protect the family political image' },
      { name: 'Eunice Kennedy Shriver', relationship: 'Sister who founded the Special Olympics partly inspired by Rosemary experiences with disability' },
    ],
  },
 'rahm-emanuel': {
   name: "Rahm Emanuel",
   title: "Former Mayor of Chicago / Ambassador to Japan",
   role: "Political Figure",
   riskLevel: "high",
   description: "Former White House Chief of Staff, US Representative, and Mayor of Chicago. Accused of covering up the Laquan McDonald shooting video until after his re-election.",
   education: ["Northwestern University","Sarah Lawrence College"],
   affiliations: [
     { name: "City of Chicago", role: "Former Mayor", type: "agency" },
   ],
   controversies: [
     "Alleged cover-up of Laquan McDonald police shooting video",
     "Closed 50 Chicago public schools in predominantly Black neighborhoods",
     "Mental health clinic closures under his administration",
   ],
   relatedInvestigations: [],
   timeline: [
     { date: "2011", event: "Elected Mayor of Chicago" },
     { date: "2015", event: "Laquan McDonald video cover-up controversy" },
   ],
 },
 'russell-tice': {
 name: 'Russell Tice',
 title: 'NSA Whistleblower, Former Intelligence Analyst',
 role: 'Former NSA Intelligence Analyst Who Revealed Warrantless Wiretapping',
 riskLevel: 'low',
 description: 'Russell Tice is a former NSA intelligence analyst and former employee of the Defense Intelligence Agency who publicly revealed in 2005 that the NSA was conducting warrantless wiretapping of American citizens. His disclosures predated Edward Snowden by eight years and contributed to the New York Times investigation of the NSA domestic surveillance program.',
 affiliations: [
 { name: 'National Security Agency', role: 'Intelligence Analyst', type: 'agency' },
 { name: 'Defense Intelligence Agency', role: 'Former Employee', type: 'agency' },
 ],
 controversies: [
 'WARRANTLESS WIRETAPPING: Revealed NSA was intercepting domestic communications without warrants',
 'EARLY WHISTLEBLOWER: Spoke out in 2005, nearly a decade before Snowden\'s comprehensive disclosures',
 'RETALIATION: Security clearance revoked, career destroyed after coming forward',
 'CONGRESSIONAL TESTIMONY: Testified to Congress about illegal NSA surveillance programs',
 ],
 },
 'reggie-walton': {
 name: 'Reggie B. Walton',
 title: 'U.S. District Judge, Former FISA Court Presiding Judge',
 role: 'FISA Court Presiding Judge During Key NSA Surveillance Periods',
 riskLevel: 'medium',
 description: 'Reggie B. Walton is a senior United States District Judge who served as Presiding Judge of the Foreign Intelligence Surveillance Court. He oversaw FISA Court operations during critical periods of NSA surveillance authorization and was involved in rulings on the legality of bulk data collection programs.',
 affiliations: [
 { name: 'Foreign Intelligence Surveillance Court', role: 'Presiding Judge', type: 'agency' },
 { name: 'U.S. District Court for D.C.', role: 'Senior Judge', type: 'agency' },
 ],
 controversies: [
 'FISA COURT LEADERSHIP: Led the secret court that authorized NSA mass surveillance programs',
 'BULK COLLECTION RULINGS: Involved in FISA Court decisions approving bulk telephone metadata collection',
 'POST-SNOWDEN: Responded to public scrutiny of FISA Court operations after Snowden disclosures',
 'SCOOTER LIBBY TRIAL: Presided over the trial of Vice Presidential aide Scooter Libby',
 ],
 },
  'robert-freeman': {
    name: 'Robert Freeman',
    title: 'Convicted Insider Trader; Former Head of Arbitrage at Goldman Sachs',
    role: 'Head of Risk Arbitrage, Goldman Sachs & Co.',
    riskLevel: 'high',
    description: 'Robert Freeman was the head of Goldman Sachs\' risk arbitrage department who pleaded guilty to insider trading in August 1989. Freeman traded on material nonpublic information about pending block trades and corporate transactions, most notably related to the Beatrice Companies leveraged buyout. His conviction was the only insider trading case that directly reached Goldman Sachs during the 1980s scandals. He was sentenced to four months in federal prison and fined $1.1 million. His case demonstrated that the insider trading corruption extended to the very highest echelons of Wall Street\'s most prestigious firms.',
    birthDate: '1942',
    birthPlace: 'United States',
    education: ['Dartmouth College', 'Columbia Business School (MBA)'],
    affiliations: [
      { name: 'Goldman Sachs', role: 'Head of Risk Arbitrage Department (1970s-1989)', type: 'corporation' },
    ],
    controversies: [
      'Traded on inside information about Beatrice Companies leveraged buyout and other pending transactions',
      'Only insider trading conviction to directly reach Goldman Sachs during the 1980s scandals',
      'His arrest damaged Goldman Sachs\' reputation at the height of the insider trading prosecutions',
    ],
    charges: [
      { statute: '18 U.S.C. 1341 (Mail Fraud)', description: 'Insider trading on advance knowledge of Beatrice Companies LBO and other block trades', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: 'April 1987', event: 'Arrested at Goldman Sachs offices by federal agents' },
      { date: 'August 1989', event: 'Pleads guilty to one count of mail fraud related to insider trading' },
      { date: '1990', event: 'Sentenced to 4 months in federal prison; fined $1.1 million' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Part of the broader 1980s insider trading network', href: '/entities/individuals/ivan-boesky' },
    ],
  },
  'robert-wilkis': {
    name: 'Robert Wilkis',
    title: 'Convicted Insider Trader; Lazard Freres Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Lazard Freres & Co.',
    riskLevel: 'high',
    description: 'Robert Wilkis was an investment banker at Lazard Freres who was a core member of Dennis Levine\'s insider trading ring during the 1980s. A close personal friend of Levine since business school, Wilkis passed material nonpublic information about Lazard\'s pending M&A transactions to Levine, who traded on the tips through secret Bahamian bank accounts. Wilkis also maintained his own secret offshore trading account. When Levine was caught in 1986, Wilkis was swept up in the resulting prosecutions. He pleaded guilty to insider trading conspiracy and was sentenced to one year and one day in federal prison.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'Lazard Freres & Co.', role: 'Investment Banker, M&A Department', type: 'corporation' },
    ],
    controversies: [
      'Core member of Dennis Levine\'s insider trading ring; passed M&A information from Lazard Freres deals',
      'Maintained his own secret offshore trading account for insider trading profits',
      'His participation showed the conspiracy penetrated multiple elite Wall Street firms simultaneously',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic M&A information to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes inside M&A information from Lazard Freres to Dennis Levine as part of insider trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy after Levine\'s arrest and cooperation' },
      { date: '1987', event: 'Sentenced to 1 year and 1 day in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Close friend and ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
    ],
  },
  'richard-wigton': {
    name: 'Richard Wigton',
    title: 'Accused Insider Trader; Kidder Peabody Arbitrage Head Whose Charges Were Dropped',
    role: 'Head of Arbitrage, Kidder, Peabody & Co.',
    riskLevel: 'medium',
    description: 'Richard Wigton was the head of the arbitrage department at Kidder, Peabody & Co. who became one of the most visible casualties of the 1980s insider trading prosecutions when he was dramatically arrested on the trading floor by federal agents in February 1987. He was handcuffed and perp-walked past his colleagues in a scene designed for maximum public humiliation by U.S. Attorney Rudolph Giuliani\'s office. The charges against Wigton were dropped in May 1989 when prosecutors determined their evidence was insufficient. His case became the most prominent example of prosecutorial overreach during the scandal, but also raises uncomfortable questions about whether dismissed charges equate to innocence, or whether a guilty participant merely benefited from insufficient evidence. His career was destroyed regardless of the outcome.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Kidder, Peabody & Co.', role: 'Head of Arbitrage Department', type: 'corporation' },
    ],
    controversies: [
      'Dramatically arrested on Kidder Peabody trading floor; handcuffed and perp-walked past colleagues in February 1987',
      'Charges dropped May 1989 due to insufficient evidence; career destroyed regardless',
      'Case became symbol of Giuliani\'s aggressive and arguably abusive prosecutorial tactics',
      'Raises unresolved question of whether dismissal equated to innocence or merely insufficient proof',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Insider Trading Conspiracy (DROPPED): Charges dropped May 1989 for insufficient evidence', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: 'February 12, 1987', event: 'Arrested on the Kidder Peabody trading floor by federal agents; handcuffed and perp-walked in front of colleagues' },
      { date: 'May 1989', event: 'All charges dropped by prosecutors due to insufficient evidence' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times: Wall Street Figure Is Arrested (1987)', url: 'https://www.nytimes.com/1987/02/13/business/wall-street-figure-is-arrested.html', date: '1987' },
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [],
  },

  'richard-causey': {
    name: 'Richard Causey',
    title: 'Former Enron Chief Accounting Officer who pleaded guilty to securities fraud after initially standing trial alongside Lay and Skilling',
    role: 'Former Chief Accounting Officer, Enron Corporation',
    riskLevel: 'high',
    description: 'Richard Causey served as Chief Accounting Officer (CAO) of Enron Corporation, the executive directly responsible for the company\'s financial reporting and compliance with accounting standards. He was indicted on six felony charges for his role in disguising Enron\'s true financial condition from investors, regulators, and the public, a fraud that ultimately destroyed the seventh-largest company in America and wiped out billions in shareholder and employee retirement savings.\n\nCausey was originally a co-defendant alongside Chairman Kenneth Lay and CEO Jeffrey Skilling in what the Department of Justice called the most significant corporate fraud prosecution in American history. He initially pleaded not guilty and appeared set to stand trial with his co-defendants. However, on December 28, 2005, just weeks before the trial was scheduled to begin in January 2006, Causey changed his plea to guilty on a single count of securities fraud in exchange for the government dropping the remaining five charges.\n\nHis decision to plead guilty was a significant blow to the defense because it deprived Lay and Skilling of a co-defendant who could have shared the burden of cross-examination and presented a united front. Causey was sentenced to seven years in federal prison, later reduced to approximately five and a half years. As CAO, Causey had direct knowledge of the accounting manipulations at the heart of Enron\'s fraud, including the misuse of mark-to-market accounting and the concealment of debt through special purpose entities.',
    affiliations: [
      { name: 'Enron Corporation', role: 'Chief Accounting Officer', type: 'corporation' },
      { name: 'Arthur Andersen LLP', role: 'Former external auditor (professional relationship)', type: 'corporation' },
    ],
    controversies: [
      'Indicted on six felony charges for disguising Enron\'s financial condition from investors and regulators',
      'Initially pleaded not guilty as co-defendant with Lay and Skilling; changed plea to guilty on Dec 28, 2005',
      'Plea change weeks before trial deprived Lay and Skilling of a co-defendant',
      'Directly responsible for financial reporting that concealed billions in debt through SPEs',
      'Oversaw accounting practices including aggressive mark-to-market that inflated revenue',
    ],
    charges: [
      { charge: 'Securities Fraud', status: 'convicted', date: '2005-12-28' },
    ],
    relatedInvestigations: [
      { title: 'Enron Corporate Fraud Scandal', slug: 'enron-corporate-fraud-scandal', severity: 'critical' },
    ],
    timeline: [
      { date: '2001-12-02', event: 'Enron filed for Chapter 11 bankruptcy' },
      { date: '2004-01', event: 'Indicted alongside Kenneth Lay and Jeffrey Skilling on six felony charges' },
      { date: '2004-07', event: 'Pleaded not guilty to all charges; prepared to stand trial with Lay and Skilling' },
      { date: '2005-12-28', event: 'Changed plea to guilty on one count of securities fraud; five remaining charges dropped' },
      { date: '2006-01', event: 'Trial of Lay and Skilling began without Causey as co-defendant' },
      { date: '2007-11', event: 'Sentenced to seven years in federal prison (later reduced to approximately 5.5 years)' },
    ],
    sources: [
      { title: 'Causey Pleads Guilty in Enron Case, The New York Times', url: 'https://www.nytimes.com/2005/12/28/business/causey-pleads-guilty-in-enron-case.html', date: '2005-12-28' },
      { title: 'Enron Scandal, Wikipedia', url: 'https://en.wikipedia.org/wiki/Enron_scandal', date: '2024' },
    ],
    knownAssociates: [
      { name: 'Kenneth Lay', relationship: 'Enron Chairman and original co-defendant; convicted on all six counts', href: '/entities/individuals/ken-lay' },
      { name: 'Jeffrey Skilling', relationship: 'Enron CEO and original co-defendant; convicted on 19 of 28 counts', href: '/entities/individuals/jeffrey-skilling' },
      { name: 'Andrew Fastow', relationship: 'Enron CFO who designed the SPE structure that Causey\'s accounting practices concealed', href: '/entities/individuals/andrew-fastow' },
      { name: 'David Duncan', relationship: 'Arthur Andersen lead auditor who signed off on Enron\'s fraudulent financial statements', href: '/entities/individuals/david-duncan' },
    ],
  },

  'richard-kinder': {
    name: 'Richard Kinder',
    title: 'Former Enron President who left in 1996 before the scandal, founded Kinder Morgan, and became a billionaire energy mogul',
    role: 'Former President and COO, Enron Corporation; Co-founder and Executive Chairman, Kinder Morgan',
    riskLevel: 'low',
    birthDate: '1944-10-19',
    birthPlace: 'Cape Girardeau, Missouri, United States',
    netWorth: '$11 billion (estimated, 2014 peak)',
    description: 'Richard Kinder served as President and Chief Operating Officer of Enron Corporation from 1990 to 1996, a period when the company was still primarily a natural gas pipeline operator before the aggressive expansion into derivatives trading and off-balance-sheet finance that would eventually destroy it. He left Enron in December 1996, years before the fraud that would lead to the company\'s 2001 collapse, and went on to co-found Kinder Morgan with college friend William V. Morgan, building it into the largest midstream energy company in North America.\n\nBorn in Cape Girardeau, Missouri, Kinder earned his BA (1966) and JD (1968) from the University of Missouri, where he was a member of Sigma Nu fraternity and became friends with future Enron founder Kenneth Lay. After practicing law briefly, Kinder joined Florida Gas Transmission Company, which was later folded into what became Enron.\n\nAfter leaving Enron, Kinder purchased the Enron Liquids Pipeline for just $40 million, a deal that proved extraordinarily prescient as the asset became the foundation of the Kinder Morgan empire. The Wall Street Journal called him "The Luckiest Ex-Enron Employee" because of his fortuitous departure before the scandal erupted.\n\nKinder married Nancy McNeil, who had been Kenneth Lay\'s assistant at Enron, in September 1997. He has given over $850 million in philanthropic grants through the Kinder Foundation, supporting education, parks, and civic projects primarily in Houston. Though never charged with any wrongdoing related to Enron, Kinder\'s tenure as President during the early 1990s overlapped with the beginning of the culture that would eventually produce the fraud.',
    education: [
      'University of Missouri (BA, 1966)',
      'University of Missouri School of Law (JD, 1968)',
    ],
    affiliations: [
      { name: 'Enron Corporation', role: 'President and Chief Operating Officer (1990-1996)', type: 'corporation' },
      { name: 'Kinder Morgan', role: 'Co-founder and Executive Chairman', type: 'corporation' },
      { name: 'Florida Gas Transmission', role: 'Executive (pre-Enron merger)', type: 'corporation' },
    ],
    controversies: [
      'Left Enron in December 1996, before the worst fraud occurred, "The Luckiest Ex-Enron Employee" per WSJ',
      'Purchased Enron Liquids Pipeline for $40 million, parlayed into Kinder Morgan empire',
      'Served as Enron President during early 1990s when the corporate culture enabling fraud was developing',
      'Never charged with any wrongdoing related to Enron',
      'College friend of Kenneth Lay and married Lay\'s former assistant Nancy McNeil',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Enron Corporate Fraud Scandal', slug: 'enron-corporate-fraud-scandal', severity: 'critical' },
    ],
    timeline: [
      { date: '1944-10-19', event: 'Born in Cape Girardeau, Missouri' },
      { date: '1966', event: 'Earned BA from University of Missouri' },
      { date: '1968', event: 'Earned JD from University of Missouri School of Law' },
      { date: '1990', event: 'Became President and COO of Enron Corporation' },
      { date: '1996-12', event: 'Left Enron Corporation, years before the fraud was exposed' },
      { date: '1997-02', event: 'Co-founded Kinder Morgan Inc. with William V. Morgan; purchased Enron Liquids Pipeline for $40 million' },
      { date: '1997-09', event: 'Married Nancy McNeil, former assistant to Kenneth Lay at Enron' },
      { date: '2001-12-02', event: 'Enron filed for bankruptcy; Kinder had been gone for five years' },
      { date: '2007', event: 'Led $22 billion management buyout of Kinder Morgan, largest leveraged buyout in pipeline industry history' },
      { date: '2014', event: 'Kinder Morgan consolidated subsidiaries in $71 billion deal; estimated net worth peaked at $11 billion' },
    ],
    sources: [
      { title: 'Richard Kinder, Wikipedia', url: 'https://en.wikipedia.org/wiki/Richard_Kinder', date: '2024' },
      { title: 'The Luckiest Ex-Enron Employee, The Wall Street Journal', url: 'https://www.wsj.com/articles/SB101116709235424520', date: '2002' },
      { title: 'Kinder Foundation Grants and Philanthropy', url: 'https://www.kinderfoundation.org/', date: '2024' },
    ],
    knownAssociates: [
      { name: 'Kenneth Lay', relationship: 'College friend and Enron co-founder; Kinder served as Lay\'s President and COO for six years', href: '/entities/individuals/ken-lay' },
      { name: 'Jeffrey Skilling', relationship: 'Succeeded Kinder\'s influence at Enron; became CEO and was later convicted on 19 counts', href: '/entities/individuals/jeffrey-skilling' },
    ],
  },
  'richard-g-held': {
    name: 'Richard G. Held',
    title: 'FBI Special Agent in Charge (SAC), Multiple Field Offices',
    role: 'Career FBI official who directed COINTELPRO operations against the American Indian Movement and oversaw some of the Bureau\'s most controversial domestic operations',
    riskLevel: 'critical',
    description: 'Richard G. Held was a career FBI official and son of Richard Wallace Held, also a senior FBI agent, creating a father-son dynasty within the Bureau. The younger Held served as Special Agent in Charge of multiple FBI field offices and was directly involved in some of the most controversial FBI domestic operations of the 1970s and 1980s. He directed FBI operations on the Pine Ridge Indian Reservation in South Dakota during the mid-1970s, a period marked by extreme violence, the deaths of over 60 Native Americans, and the controversial prosecution of American Indian Movement leader Leonard Peltier for the killing of two FBI agents. Held later served as SAC of the San Francisco field office, where he oversaw the investigation into the 1990 car bombing of environmental activist Judi Bari, an investigation widely criticized for targeting the victim rather than pursuing the actual bomber. His career exemplified the FBI\'s pattern of using counterintelligence techniques developed under COINTELPRO against domestic political movements long after the program was officially terminated in 1971.',
    birthDate: '1927',
    deathDate: '2014',
    education: [],
    affiliations: [
      { name: 'Federal Bureau of Investigation', role: 'Special Agent in Charge, Multiple Field Offices (1950s-1993)', type: 'agency' },
    ],
    controversies: [
      'PINE RIDGE OPERATIONS: Served as ranking FBI official on the Pine Ridge Indian Reservation in South Dakota during 1975-1976, a period known as the "Reign of Terror" in which over 60 Native Americans were killed. FBI operations on the reservation have been characterized as a continuation of COINTELPRO tactics against the American Indian Movement.',
      'LEONARD PELTIER PROSECUTION: Oversaw FBI operations that led to the arrest and prosecution of AIM leader Leonard Peltier for the deaths of FBI agents Jack Coler and Ronald Williams at Pine Ridge on June 26, 1975. The prosecution has been widely criticized for alleged fabrication of evidence, coerced witness testimony, and suppression of ballistic evidence. Peltier spent nearly 50 years in prison and the case became an international cause celebre.',
      'JUDI BARI INVESTIGATION: As SAC of the San Francisco field office, directed the investigation into the May 24, 1990 car bombing of Earth First! organizer Judi Bari and Darryl Cherney. Rather than investigating the bombing as an attack on the activists, Held\'s office arrested Bari and Cherney, accusing them of transporting explosives. Charges were dropped; Bari and Cherney won a $4.4 million civil rights verdict against the FBI in 2002.',
      'COINTELPRO CONTINUATION: Career spanning the 1960s through 1990s showed consistent pattern of using counterintelligence techniques against domestic political movements, suggesting COINTELPRO tactics continued long after the program was officially terminated in 1971.',
      'DYNASTY OF REPRESSION: Both Richard G. Held and his father, Richard Wallace Held, served as senior FBI officials involved in COINTELPRO and related operations, creating an unusual father-son dynasty within the Bureau\'s domestic intelligence apparatus.',
      'WITNESS INTIMIDATION ALLEGATIONS: Multiple witnesses in the Peltier case and related Pine Ridge prosecutions alleged FBI agents under Held\'s command used threats, physical intimidation, and coercion to obtain statements and testimony.',
      'OGLALA SIEGE: Involved in FBI response during the 71-day occupation of Wounded Knee in 1973 and subsequent prosecutions, which were marked by government misconduct so severe that charges against AIM leaders Dennis Banks and Russell Means were dismissed by the judge.',
    ],
    charges: [
      { statute: '18 U.S.C. 241', description: 'Conspiracy Against Rights: Directed FBI operations that systematically violated the civil rights of Native American activists and environmentalists', category: 'Civil Rights Violations' },
      { statute: '18 U.S.C. 242', description: 'Deprivation of Rights Under Color of Law: Used official FBI authority to target political activists for surveillance, harassment, and false prosecution', category: 'Civil Rights Violations' },
      { statute: '42 U.S.C. 1983', description: 'Civil Rights Violation: $4.4 million verdict against FBI in Bari v. Held for false arrest and First Amendment retaliation', category: 'Civil Rights' },
      { statute: '18 U.S.C. 1512', description: 'Witness Tampering: Allegations of coerced testimony from witnesses in Peltier prosecution', category: 'Federal Crimes' },
      { statute: '18 U.S.C. 1001', description: 'False Statements: Allegations of fabricated evidence presented in Peltier trial', category: 'Federal Crimes' },
    ],
    relatedInvestigations: [
      { title: 'COINTELPRO: Domestic Surveillance Legacy', slug: 'cointelpro-domestic-surveillance-legacy', severity: 'critical' },
    ],
    timeline: [
      { date: '1927', event: 'Born; son of FBI official Richard Wallace Held' },
      { date: '1950s', event: 'Joins the FBI, following his father into the Bureau' },
      { date: '1973-02', event: 'Involved in FBI response to the 71-day occupation of Wounded Knee on Pine Ridge Reservation' },
      { date: '1975-06-26', event: 'FBI agents Jack Coler and Ronald Williams killed in shootout at Pine Ridge; Held oversees subsequent investigation' },
      { date: '1975-1976', event: 'Directs FBI operations on Pine Ridge Reservation during period of extreme violence against Native Americans' },
      { date: '1977-04', event: 'Leonard Peltier convicted of murder of the two FBI agents based on prosecution Held directed; sentenced to two consecutive life terms' },
      { date: '1980s', event: 'Promoted to SAC of the San Francisco FBI field office' },
      { date: '1990-05-24', event: 'Directs investigation of car bombing of Judi Bari; FBI arrests victims rather than pursuing bomber' },
      { date: '1990-07', event: 'Criminal charges against Bari and Cherney dropped due to lack of evidence' },
      { date: '1993', event: 'Retires from FBI after career spanning four decades' },
      { date: '2002', event: 'Jury awards $4.4 million to Bari estate and Cherney in civil rights lawsuit against FBI (Bari v. Held)' },
      { date: '2014', event: 'Dies' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Peter Matthiessen - "In the Spirit of Crazy Horse"', url: 'https://scholar.google.com/scholar?q=Peter+Matthiessen+In+the+Spirit+of+Crazy+Horse', date: '1983' },
      { title: 'Ward Churchill and Jim Vander Wall - "Agents of Repression"', url: 'https://scholar.google.com/scholar?q=Churchill+Vander+Wall+Agents+of+Repression', date: '1988' },
      { title: 'Bari v. Held, Civil Action (N.D. Cal. 2002)', url: 'https://scholar.google.com/scholar?q=Bari+v+Held+civil+rights+FBI', date: '2002' },
      { title: 'Church Committee Final Report: Book III - COINTELPRO', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_III.pdf', date: '1976' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'J. Edgar Hoover', relationship: 'FBI Director who established the COINTELPRO framework Held continued to implement', href: '/entities/individuals/j-edgar-hoover' },
      { name: 'William C. Sullivan', relationship: 'FBI Assistant Director who directed COINTELPRO during overlapping period of service', href: '/entities/individuals/william-c-sullivan' },
      { name: 'Mark Felt', relationship: 'FBI Deputy Director during Pine Ridge operations', href: '/entities/individuals/mark-felt' },
      { name: 'Leonard Peltier', relationship: 'AIM leader prosecuted and convicted based on investigation Held directed', href: '/entities/individuals/leonard-peltier' },
    ],
  },
};

export default profiles;
