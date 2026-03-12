// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'walt-nauta': {
 name: 'Waltine Nauta',
 title: 'Personal Valet to Donald Trump',
 role: 'Co-defendant in Classified Documents Case',
 riskLevel: 'high',
 description: 'Walt Nauta is a former Navy valet who served Donald Trump at the White House and continued as his personal aide at Mar-a-Lago. He was indicted alongside Trump in the classified documents case for allegedly moving boxes of classified materials, lying to investigators, and conspiring to obstruct justice.',
 birthDate: '1980s (exact date unknown)',
 birthPlace: 'Guam, USA',
 netWorth: 'Unknown',
 education: ['U.S. Navy (served as valet)'],
 affiliations: [
 { name: 'White House', role: 'Military Valet (2017-2021)', type: 'agency' },
 { name: 'Trump Organization', role: 'Personal Aide (2021-present)', type: 'corporation' },
 ],
 controversies: [
 'Moved boxes of classified documents at Mar-a-Lago',
 'Captured on surveillance moving boxes before FBI visit',
 'Lied to FBI about knowledge of documents',
 'Indicted on 7 federal charges',
 'Remained loyal to Trump, rejected cooperation deals',
 'Trump PAC paying his legal fees',
 'Case dismissed by Judge Cannon, DOJ appealing',
 ],
 charges: [
 { statute: '18 U.S.C. § 1512(k) (Obstruction Conspiracy)', description: 'Conspiracy to obstruct justice; Indicted for conspiring to conceal documents from grand jury', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1512(b)(2)(A) (Witness Tampering)', description: 'Witness tampering; Coordinated with Trump to conceal documents from attorneys and FBI', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1519 (Evidence Concealment)', description: 'Concealing documents in federal investigation; Captured on video moving boxes of classified materials', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'Making false statements to FBI; Lied about knowledge of documents and moving boxes', category: 'False Statements' },
 { statute: '18 U.S.C. § 793(e) (Espionage Act)', description: 'Willful retention of national defense information; Aided in retention of classified documents', category: 'Espionage' },
 { statute: '18 U.S.C. § 371 (Conspiracy)', description: 'Conspiracy to defraud United States; Part of scheme to obstruct government recovery of classified documents', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 2 (Aiding and Abetting)', description: 'Aiding and abetting classified document retention; Actively helped Trump hide national defense information', category: 'Accessory' },
 ],
 relatedInvestigations: [
 { title: 'Classified Documents at Mar-a-Lago', slug: 'mar-a-lago-documents', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1980s', event: 'Born in Guam' },
 { date: '2017', event: 'Begins serving as White House valet to Trump' },
 { date: '2021', event: 'Continues as personal aide at Mar-a-Lago' },
 { date: '2022', event: 'May-June: Moves boxes before FBI/DOJ visits' },
 { date: '2022', event: 'August: FBI searches Mar-a-Lago' },
 { date: '2023', event: 'June: Indicted alongside Trump' },
 { date: '2023', event: 'July: Superseding indictment adds charges' },
 { date: '2024', event: 'July: Case dismissed by Judge Cannon' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Indictment', url: 'https://www.justice.gov/storage/US_v_Trump-Nauta_23-80101.pdf', date: '2023' },
 { title: 'Superseding Indictment', url: 'https://www.justice.gov/', date: '2023' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Personal aide, co-defendant', href: '/entities/individuals/donald-trump' },
 { name: 'Carlos De Oliveira', relationship: 'Co-defendant in documents case', href: '/entities/individuals/carlos-de-oliveira' },
 ],
 },
























 'wilbur-ross': {
 name: 'Wilbur Louis Ross Jr.',
 title: 'Former U.S. Secretary of Commerce',
 role: 'Commerce Secretary 2017-2021, Billionaire"King of Bankruptcy"',
 riskLevel: 'high',
 description: 'Wilbur Louis Ross Jr. served as Secretary of Commerce from 2017 to 2021. He maintained undisclosed business ties to Russian oligarchs and partners of Vladimir Putin through Navigator Holdings. Forbes accused him of lying about his net worth for years. The Paradise Papers revealed his connections to Putin\'s son-in-law through a shipping firm.',
 birthDate: 'November 28, 1937',
 birthPlace: 'Weehawken, New Jersey',
 netWorth: '$700 million+',
 education: ['Harvard Business School (M.B.A.)', 'Yale University (B.A.)'],
 affiliations: [
 { name: 'U.S. Department of Commerce', role: 'Secretary (2017-2021)', type: 'agency' },
 { name: 'Bank of Cyprus', role: 'Vice Chairman', type: 'corporation' },
 { name: 'Navigator Holdings', role: 'Investor (Russian oligarch ties)', type: 'corporation' },
 ],
 controversies: [
 'Business ties to Russian oligarchs through Bank of Cyprus',
 'Navigator Holdings connection to Putin\'s family',
 'Pushed citizenship question to suppress census response',
 'Failed to divest from businesses as promised',
 'Forbes removed him from billionaire list for inflating wealth',
 'Frequently fell asleep in meetings',
 'Sago Mine disaster; 12 miners died at his company\'s mine',
 ],
 charges: [
 { statute: '18 U.S.C. § 208', description: 'Potential Financial Conflict of Interest; Failed to fully divest from Navigator Holdings with Russian oligarch ties while serving as Commerce Secretary', category: 'Potential Ethics' },
 { statute: '5 C.F.R. § 2635', description: 'Multiple Ethics Violations; Maintained business ties that conflicted with official duties', category: 'Ethics' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Failed to fully disclose Russian business connections on ethics forms', category: 'Potential Federal' },
 { statute: '13 U.S.C. § 221', description: 'Census Act Violation; Improperly added citizenship question to suppress responses in minority communities (blocked by Supreme Court)', category: 'Federal Census' },
 { statute: '42 U.S.C. § 1983', description: 'Deprivation of Rights; Citizenship question designed to undercount minorities for redistricting', category: 'Civil Rights' },
 { statute: '30 U.S.C. § 820 (Mine Safety)', description: 'Historical Violations; Sago Mine disaster killed 12 workers at his company\'s mine due to safety failures', category: 'Worker Safety' },
 { statute: '22 U.S.C. § 618 (FARA)', description: 'Potential Violation; Unreported foreign business relationships during confirmation and tenure', category: 'Potential National Security' },
 ],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'February: Confirmed as Commerce Secretary' },
 { date: '2017', event: 'Paradise Papers reveal Russian business ties' },
 { date: '2019', event: 'Pushes census citizenship question' },
 { date: '2019', event: 'Supreme Court blocks citizenship question' },
 { date: '2021', event: 'January: Leaves office' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Paradise Papers Investigation', url: 'https://scholar.google.com/scholar?q=Paradise%20Papers%20Investigation', date: '2017' }, ],
 aliases: ['King of Bankruptcy'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Cabinet member, business associate', href: '/entities/individuals/donald-trump' },
 { name: 'Vladimir Putin', relationship: 'Business ties through Russian oligarchs', href: '/entities/individuals/vladimir-putin' },
 ],
 },
























 'wayne-lapierre': {
 name: 'Wayne Lapierre',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Wayne Lapierre. Profile pending review.',
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


 'william-casey': {
 name: 'William Casey',
 title: 'Former CIA Director',
 role: 'CIA Director who orchestrated Iran-Contra and Central American death squads',
 riskLevel: 'critical',
 description: 'CIA Director under Reagan (1981-1987) who was the chief architect of the Iran-Contra affair, authorizing secret arms sales to Iran and illegal funding of Nicaraguan Contras. Casey operated a"shadow CIA"that circumvented Congressional oversight, ran death squads in Central America, and supported brutal dictatorships. Died of brain cancer before he could face charges.',
 birthDate: 'March 13, 1913',
 birthPlace: 'Elmhurst, New York',
 deathDate: 'May 6, 1987',
 education: ['Fordham University', 'St. John\'s University School of Law'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Director (1981-1987)', type: 'agency' },
 { name: 'Reagan Administration', role: 'Cabinet Member', type: 'organization' },
 { name: 'OSS', role: 'WWII Service', type: 'organization' },
 ],
 controversies: [
 'Chief architect of Iran-Contra affair',
 'Authorized illegal arms sales to Iran',
 'Diverted profits to fund Nicaraguan Contras in violation of Boland Amendment',
 'Oversaw CIA support for Central American death squads',
 'Lied to Congress about covert operations',
 'Died before facing charges or testimony',
 ],
 charges: [
 { statute: 'Boland Amendment Violations', description: 'Illegal funding of Nicaraguan Contra rebels after Congress explicitly banned it', category: 'Constitutional Violation' },
 { statute: 'Arms Export Control Act: 22 U.S.C. § 2778', description: 'Illegal weapons sales to Iran', category: 'National Security' },
 { statute: 'Conspiracy Against the United States: 18 U.S.C. § 371', description: 'Orchestrated Iran-Contra operation', category: 'Conspiracy' },
 { statute: 'False Statements: 18 U.S.C. § 1001', description: 'Lying to Congress about covert operations', category: 'Obstruction' },
 { statute: 'ICC Rome Statute Article 7: Crimes Against Humanity', description: 'Support for death squads and mass atrocities in Central America', category: 'International Crime' },
 { statute: 'ICC Rome Statute Article 8: War Crimes', description: 'Torture, extrajudicial killings, and targeting civilians', category: 'International Crime' },
 { statute: 'Geneva Conventions: Common Article 3', description: 'Violations in treatment of civilians and prisoners', category: 'International Crime' },
 ],
 relatedInvestigations: [
 { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 { title: 'Rendition Program', slug: 'rendition', severity: 'critical' },
 { title: 'Africa Destabilization', slug: 'africa-destabilization', severity: 'high' },
 ],
 timeline: [
 { date: 'March 13, 1913', event: 'Born in Elmhurst, New York' },
 { date: '1943-1945', event: 'Serves in OSS during World War II' },
 { date: '1971', event: 'Chair of Securities and Exchange Commission' },
 { date: '1980', event: 'Campaign manager for Ronald Reagan' },
 { date: 'January 28, 1981', event: 'Confirmed as CIA Director' },
 { date: '1981', event: 'Begins covert war against Nicaragua' },
 { date: '1981-1983', event: 'Oversees CIA support for Guatemalan death squads' },
 { date: '1984', event: 'Congress passes Boland Amendment banning Contra aid' },
 { date: '1985-1986', event: 'Authorizes secret arms-for-hostages deal with Iran' },
 { date: '1985-1986', event: 'Diverts Iran arms sale profits to Contras' },
 { date: 'October 1986', event: 'Eugene Hasenfus shot down, Iran-Contra exposed' },
 { date: 'November 1986', event: 'Iran-Contra scandal breaks publicly' },
 { date: 'December 15, 1986', event: 'Suffers seizure, brain tumor discovered' },
 { date: 'January 29, 1987', event: 'Resigns as CIA Director' },
 { date: 'May 6, 1987', event: 'Dies before facing Congressional testimony or charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Iran-Contra Independent Counsel Final Report', url: 'https://scholar.google.com/scholar?q=Iran-Contra%20Independent%20Counsel%20Final%20Report', date: '1993' },
 { title: 'Tower Commission Report', url: 'https://scholar.google.com/scholar?q=Tower%20Commission%20Report', date: '1987' },
 { title: 'Bob Woodward -"Veil: The Secret Wars of the CIA"', url: 'https://scholar.google.com/scholar?q=Bob%20Woodward%20-%22Veil%3A%20The%20Secret%20Wars%20of%20the%20CIA%22', date: '1987' },
 { title: 'Congressional Iran-Contra Investigation', url: 'https://scholar.google.com/scholar?q=Congressional%20Iran-Contra%20Investigation', date: '1987' },
 { title: 'CIA declassified Central America documents', url: 'https://www.cia.gov/readingroom/', date: 'Various' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ronald Reagan', relationship: 'President', href: '/entities/individuals/ronald-reagan' },
 { name: 'Oliver North', relationship: 'NSC aide who ran operations', href: '/entities/individuals/oliver-north' },
 { name: 'George H.W. Bush', relationship: 'Vice President with CIA background', href: '/entities/individuals/george-hw-bush' },
 { name: 'John Poindexter', relationship: 'National Security Advisor', href: '/entities/individuals/john-poindexter' },
 { name: 'Caspar Weinberger', relationship: 'Secretary of Defense', href: '/entities/individuals/caspar-weinberger' },
 { name: 'Augusto Pinochet', relationship: 'CIA-backed dictator', href: '/entities/individuals/augusto-pinochet' },
 ],
 },
























 'william-oneal': {
 name: 'William O\'Neal',
 title: 'FBI Informant',
 role: 'FBI informant who infiltrated Black Panther Party',
 riskLevel: 'high',
 description: 'William O\'Neal was an FBI informant who infiltrated the Illinois chapter of the Black Panther Party and provided the intelligence that enabled the December 4, 1969 police raid that killed 21-year-old Chairman Fred Hampton. O\'Neal served as Hampton bodyguard and head of security while secretly reporting to the FBI as part of COINTELPRO.',
 birthDate: '1949',
 birthPlace: 'Chicago, Illinois',
 deathDate: 'January 15, 1990',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'Paid Informant', type: 'agency' },
 { name: 'Black Panther Party', role: 'Infiltrator', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'Black Panther chairman who was assassinated based on his intelligence', href: '/entities/individuals/fred-hampton' },
 { name: 'FBI', relationship: 'Employer as COINTELPRO informant', href: '/entities/agencies/fbi' },
 ],
 controversies: [
 'Served as an FBI informant inside the Illinois Black Panther Party from 1968, recruited at age 17 after being arrested for impersonating a federal officer',
 'Provided the floor plan of Fred Hampton apartment to his FBI handler, Roy Mitchell, which was used to plan the December 4, 1969 raid',
 'The raid killed 21-year-old Fred Hampton and 22-year-old Mark Clark; ballistic evidence showed police fired 90-99 shots while Panthers fired at most one',
 'Allegedly drugged Hampton the night before the raid by putting secobarbital in his drink, ensuring he could not respond when police opened fire',
 'Committed suicide in January 1990, shortly after participating in a filmed interview for the documentary "Eyes on the Prize II"',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COINTELPRO', slug: 'cointelpro', severity: 'critical' },
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'critical' },
 ],
 timeline: [
 { date: '1968-11-01', event: 'Recruited as FBI informant, assigned to infiltrate Black Panther Party' },
 { date: '1969-01-01', event: 'Became head of security for Illinois Black Panthers, serving as Fred Hampton bodyguard' },
 { date: '1969-12-03', event: 'Provided floor plan of Hampton apartment to FBI handler' },
 { date: '1969-12-04', event: 'Police raid kills Fred Hampton and Mark Clark based on intelligence O\'Neal provided' },
 { date: '1990-01-15', event: 'Died by suicide at age 40' },
 ],
 sources: [
 { title: 'Church Committee Report on COINTELPRO', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_II.pdf', date: '1976-04-28' },
 ],
 },
 'william-kristol': {
 name: 'William Kristol',
 title: 'Neoconservative Commentator',
 role: 'Political Commentator, Iraq War Advocate',
 riskLevel: 'medium',
 description: 'William Kristol is a prominent neoconservative political commentator who was one of the most influential advocates for the Iraq War. He co-founded the Project for the New American Century (PNAC), which advocated for regime change in Iraq years before 9/11. As editor of The Weekly Standard (1995-2018), he used his platform to push for military intervention. Though he later became a critic of Trump, his advocacy for the Iraq War contributed to a conflict that killed hundreds of thousands.',
 birthDate: 'December 23, 1952',
 birthPlace: 'New York City, USA',
 education: ['Harvard University, BA', 'Harvard University, PhD Political Philosophy'],
 affiliations: [
 { name: 'Project for the New American Century', role: 'Co-Founder', type: 'organization' },
 { name: 'The Weekly Standard', role: 'Editor (1995-2018)', type: 'corporation' },
 { name: 'Emergency Committee for Israel', role: 'Founder', type: 'organization' },
 { name: 'Defending Democracy Together', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'IRAQ WAR ADVOCACY: Aggressively promoted Iraq invasion based on false WMD claims',
 'PNAC LETTER: 1998 letter to Clinton calling for Iraq regime change',
 'WAR CHEERLEADING: Predicted quick, easy victory in Iraq',
 'NEVER APOLOGIZED: Despite war\'s catastrophic outcome, never fully acknowledged error',
 'SAUDI ARABIA: Advocated regime change in multiple Middle Eastern countries',
 ],
 charges: [
 { statute: 'Moral Responsibility', description: 'Advocacy for illegal war resulting in mass casualties', category: 'War Crimes (Moral)' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Crimes', slug: 'iraq-war', severity: 'critical' },
 { title: 'War Crimes Without Accountability', slug: 'war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 23, 1952', event: 'Born in New York City' },
 { date: '1976', event: 'Earns PhD from Harvard' },
 { date: '1985-1988', event: 'Chief of Staff to VP Dan Quayle' },
 { date: '1995', event: 'Founds The Weekly Standard' },
 { date: '1997', event: 'Co-founds Project for the New American Century' },
 { date: 'January 26, 1998', event: 'Signs PNAC letter calling for Iraq regime change' },
 { date: '2002-2003', event: 'Advocates heavily for Iraq invasion' },
 { date: '2003', event: 'Iraq War begins' },
 { date: '2016', event: 'Breaks with Republican Party over Trump' },
 { date: '2018', event: 'The Weekly Standard closes' },
 ],
 socialMedia: [],
 sources: [
 { title: 'PNAC Statement of Principles', url: 'https://web.archive.org/web/20050205041635/http://www.newamericancentury.org/statementofprinciples.htm', date: '1997' },
 { title: 'PNAC Letter to Clinton', url: 'https://web.archive.org/web/20050212041719/http://www.newamericancentury.org/iraqclintonletter.htm', date: '1998' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Kagan', relationship: 'PNAC co-founder', href: '/entities/individuals/robert-kagan' },
 { name: 'Dick Cheney', relationship: 'PNAC member, Iraq War architect', href: '/entities/individuals/dick-cheney' },
 { name: 'Donald Rumsfeld', relationship: 'PNAC signatory, Iraq War architect', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'Paul Wolfowitz', relationship: 'PNAC signatory, Iraq War architect', href: '/entities/individuals/paul-wolfowitz' },
 { name: 'Irving Kristol', relationship: 'Father, neoconservative founder', href: '/entities/individuals/irving-kristol' },
 ],
 },
























 'william-calley': {
 name: 'William Calley',
 title: 'Convicted War Criminal',
 role: 'US Army Lieutenant',
 riskLevel: 'critical',
 description: 'William Calley was the only US soldier convicted for the My Lai Massacre during the Vietnam War, where US troops killed between 347-504 unarmed Vietnamese civilians including women, children, and elderly. Despite conviction for murdering 22 civilians, he served only 3.5 years under house arrest.',
 birthDate: 'June 8, 1943',
 birthPlace: 'Miami, Florida',
 education: ['Palm Beach Junior College (dropped out)'],
 affiliations: [
 { name: 'US Army', role: 'Lieutenant, Charlie Company', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Ernest Medina', relationship: 'Commanding officer (acquitted)' },
 ],
 controversies: [
 'MY LAI MASSACRE: Led troops in killing 347-504 unarmed civilians',
 'WAR CRIMES: Murder of women, children, elderly',
 'MINIMAL PUNISHMENT: Life sentence reduced to 3.5 years house arrest',
 'COVER-UP: Army initially suppressed investigation',
 'ONLY CONVICTION: Only person convicted despite many participants',
 ],
 charges: [
 { statute: 'Murder', description: 'Premeditated murder of 22 civilians', category: 'War Crime' },
 ],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'critical' },
 { title: 'War Crimes', slug: 'war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 8, 1943', event: 'Born in Miami, Florida' },
 { date: 'March 16, 1968', event: 'My Lai Massacre' },
 { date: 'September 1969', event: 'Charged with murder' },
 { date: 'March 1971', event: 'Convicted, sentenced to life' },
 { date: 'September 1974', event: 'Released after 3.5 years house arrest' },
 { date: '2009', event: 'Public apology for massacre' },
 ],
 sources: [{ title: 'Wikipedia: William Calley', url: 'https://en.wikipedia.org/wiki/William_Calley' }, { title: 'Military Times: William Calley', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'willie-walsh': {
 name: 'Willie Walsh',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Willie Walsh. Profile pending review.',
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

 'william-mcgee': {
 name: 'William Mcgee',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'William Mcgee. Profile pending review.',
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

 'william-campbell': {
 name: 'William Campbell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'William Campbell. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference William Campbell as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference William Campbell in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'warren-buffett': {
 name: 'Warren Buffett',
 title: 'Berkshire Hathaway CEO',
 role: 'Billionaire Investor, Tax Avoidance, Predatory Investments',
 riskLevel: 'medium',
 description: 'Warren Buffett is portrayed as the "good "billionaire but has profited from predatory businesses. Berkshire owns Clayton Homes, which has been accused of predatory lending targeting mobile home buyers. He famously pays a lower tax rate than his secretary while lobbying against wealth taxes. His companies have included Wells Fargo and Kraft Heinz during their scandals.',
 birthDate: 'August 30, 1930',
 birthPlace: 'Omaha, Nebraska',
 education: ['University of Nebraska', 'Columbia Business School'],
 netWorth: '$130 billion',
 affiliations: [
 { name: 'Berkshire Hathaway', role: 'CEO/Chairman', type: 'corporation' as const },
 ],
 controversies: [
 'CLAYTON HOMES: Predatory lending to mobile home buyers',
 'TAX AVOIDANCE: Lower rate than his secretary',
 'WELLS FARGO: Major shareholder during fraud scandal',
 'KRAFT HEINZ: Investment disaster, job cuts',
 'COCA-COLA: Profits from obesity/diabetes',
 'INSURANCE PROFITS: Float strategy profits from premiums',
 ],
 charges: [
 { statute: '26 U.S.C. � 7201', description: 'Tax avoidance (legal but unethical)', category: 'LEGAL' },
 { statute: 'TILA', description: 'Clayton Homes lending practices', category: 'CIVIL SETTLEMENTS' },
 ],
 relatedInvestigations: [
 { title: 'Billionaire Tax Avoidance', slug: 'billionaire-tax-avoidance', severity: 'high' },
 { title: 'Predatory Lending', slug: 'predatory-lending', severity: 'high' },
 ],
 timeline: [
 { date: 'August 30, 1930', event: 'Born in Omaha' },
 { date: '1965', event: 'Takes control of Berkshire Hathaway' },
 { date: '2011', event: '"Buffett Rule" tax debate' },
 ],
 sources: [{ title: 'Wikipedia: Warren Buffett', url: 'https://en.wikipedia.org/wiki/Warren_Buffett' }, { title: 'Bloomberg: Warren Buffett', url: 'https://www.bloomberg.com/' }, { title: 'Military Times: Warren Buffett', url: 'https://www.militarytimes.com/' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 knownAssociates: [
 { name: 'Brian Moynihan', relationship: 'Berkshire Hathaway is major Bank of America shareholder', href: '/entities/individuals/brian-moynihan' },
 { name: 'Charlie Munger', relationship: 'Decades-long business partner at Berkshire Hathaway', href: '/entities/individuals/charlie-munger' },
 { name: 'Bill Gates', relationship: 'Close friend and fellow billionaire philanthropist', href: '/entities/individuals/bill-gates' }
 ],

 },
 'werner-baumann': {
 name: 'Werner Baumann',
 title: 'Former CEO, Bayer AG',
 role: 'Corporate executive who oversaw Monsanto acquisition',
 riskLevel: 'medium',
 description: 'Werner Baumann served as CEO of Bayer AG from 2016 to 2023, overseeing the companys $63 billion acquisition of Monsanto in 2018. The acquisition saddled Bayer with massive legal liability from tens of thousands of Roundup cancer lawsuits, wiping out tens of billions in shareholder value and making it one of the most value-destructive corporate mergers in history.',
 birthDate: 'April 26, 1962',
 birthPlace: 'Krefeld, Germany',
 education: ['University of Cologne, Business Administration and Chemistry'],
 affiliations: [
 { name: 'Bayer AG', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'Led Bayer $63 billion acquisition of Monsanto in 2018, inheriting over 125,000 pending and potential Roundup herbicide cancer lawsuits',
 'Bayer agreed to pay approximately $11 billion to settle Roundup lawsuits, with ongoing litigation continuing to add to the toll',
 'Bayer market capitalization declined by approximately $70 billion following the Monsanto acquisition, destroying shareholder value',
 'Shareholders voted 55% against ratifying the management board actions in a historic no-confidence vote in 2019, though the vote was non-binding under German law',
 'Continued to market Roundup without cancer warnings despite multiple jury verdicts finding the product caused non-Hodgkin lymphoma',
 ],
 charges: [
 { statute: 'Product Liability', description: 'Roundup cancer cases', category: '$10B+ SETTLEMENTS' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity, Mass poisoning', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Roundup Cancer', slug: 'roundup-cancer', severity: 'critical' },
 { title: 'Monsanto Crimes', slug: 'monsanto-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: '2016-05-01', event: 'Became CEO of Bayer AG' },
 { date: '2018-06-07', event: 'Completed $63 billion acquisition of Monsanto' },
 { date: '2019-04-26', event: 'Shareholders deliver historic no-confidence vote against management' },
 { date: '2020-06-24', event: 'Agreed to $10.9 billion Roundup settlement' },
 { date: '2023-06-01', event: 'Stepped down as Bayer CEO' },
 ],
 sources: [
 { title: 'Bayer AG Annual Report', url: 'https://www.bayer.com/en/investors/annual-report', date: '2023-03-01' },
 ],

 },
 'william-bryan': {
 name: 'William "Roddie "Bryan',
 title: 'Convicted Murderer',
 role: 'Filmed Ahmaud Arbery Murder CONVICTED',
 riskLevel: 'critical',
 description: 'William Bryan joined the pursuit of Ahmaud Arbery and used his truck to help trap the victim. He recorded the murder on video, footage that initially he hoped would exonerate the killers but instead proved their guilt. Convicted of felony murder.',
 birthDate: '1969',
 birthPlace: 'Georgia',
 education: ['Unknown'],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Hugh Grant', relationship: 'Former Monsanto CEO during acquisition negotiations', href: '/entities/individuals/hugh-grant-monsanto' },
 ],
 controversies: [
 'JOINED PURSUIT: Helped trap Arbery',
 'FILMED MURDER: Recorded the killing',
 'USED TRUCK AS WEAPON: Blocked victim',
 'RELEASED VIDEO: Thought it would help defense',
 ],
 charges: [
 { statute: 'Georgia Code � 16-5-1', description: 'Felony murder', category: 'CONVICTED, LIFE' },
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime', category: 'CONVICTED, 35 YEARS' },
 ],
 relatedInvestigations: [
 { title: 'Ahmaud Arbery Murder', slug: 'ahmaud-arbery-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 23, 2020', event: 'Participates in murder, films it' },
 { date: 'May 2020', event: 'Arrested' },
 { date: 'November 2021', event: 'Convicted' },
 ],
 sources: [{ title: 'Wikipedia: William "Roddie "Bryan', url: 'https://en.wikipedia.org/wiki/William_"Roddie"_Bryan' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'william-jefferson': {
 name: 'William Jefferson',
 title: 'Former Louisiana Congressman',
 role: 'Cold Cash, $90,000 in Freezer',
 riskLevel: 'high',
 description: 'William Jefferson was a Democratic Congressman found with $90,000 in bribe money wrapped in aluminum foil in his freezer. He was convicted on 11 corruption counts related to bribing African officials."Cold cash "became synonymous with political corruption.',
 birthDate: 'March 14, 1947',
 birthPlace: 'Lake Providence, Louisiana',
 education: ['Southern University', 'Harvard Law School', 'Georgetown Law'],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Former Rep (D-LA)', type: 'agency' as const },
 ],
 controversies: [
 'FREEZER CASH: $90,000 found wrapped in foil',
 'AFRICAN BRIBERY: Bribing officials in Nigeria, Ghana',
 '11 CONVICTIONS: Racketeering, bribery, money laundering',
 '13 YEARS: Longest sentence for Congress member at time',
 'KATRINA: Re-elected after scandal during Katrina',
 ],
 charges: [
 { statute: '18 U.S.C. � 1962 (RICO)', description: 'Racketeering, bribery scheme', category: 'Organized Crime' },
 { statute: '18 U.S.C. � 201', description: 'Bribery of foreign officials', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Congressional Corruption', slug: 'congressional-corruption', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 14, 1947', event: 'Born in Louisiana' },
 { date: '1991-2009', event: 'U.S. Representative' },
 { date: 'August 2005', event: 'FBI raids find freezer cash' },
 { date: 'August 2009', event: 'Convicted on 11 counts' },
 { date: '2009', event: 'Sentenced to 13 years' },
 ],
 sources: [{ title: 'Wikipedia: William Jefferson', url: 'https://en.wikipedia.org/wiki/William_Jefferson' }, { title: 'Washington Post: William Jefferson', url: 'https://www.washingtonpost.com/' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }, { title: 'InsideClimate News', url: 'https://insideclimatenews.org/' }],
 knownAssociates: [
 { name: 'Duke Cunningham', relationship: 'Fellow congressman convicted of corruption in same era', href: '/entities/individuals/duke-cunningham' }
 ],

 },
 'walter-mcmillian': {
 name: 'Walter McMillian',
 title: 'Wrongfully sentenced to death in Alabama for a murder he didn\'t commit; exonerated by Bryan Stevenson in 1993',
 role: 'Wrongfully sentenced to death in Alabama for a murder he didn\'t commit; exonerated by Bryan Stevenson in 1993',
 riskLevel: 'high',
 description: 'Walter McMillian. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Wrongfully sentenced to death in Alabama for a murder he didn' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Walter McMillian', url: 'https://en.wikipedia.org/wiki/Walter_McMillian', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'EJI attorney who fought to exonerate McMillian from death row', href: '/entities/individuals/bryan-stevenson' },
 ],
 },

 'walter-schreiber': {
 name: 'Walter Schreiber',
 title: 'Surgeon General of the Nazi Army who oversaw human experiments; brought to the U.S. and employed at the Air Force School of Aviation Medicine',
 role: 'Surgeon General of the Nazi Army who oversaw human experiments; brought to the U.S. and employed at the Air Force School of Aviation Medicine',
 riskLevel: 'high',
 description: 'Walter Schreiber. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Surgeon General of the Nazi Army who oversaw human experiments; brought to the U.S. and employed at ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Walter Schreiber', url: 'https://en.wikipedia.org/wiki/Walter_Schreiber', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', href: '/entities/individuals/wernher-von-braun' },
 { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip scientist', href: '/entities/individuals/hubertus-strughold' },
 { name: 'Kurt Blome', relationship: 'Fellow Nazi Paperclip scientist', href: '/entities/individuals/kurt-blome' },
 ],
 },

 'walter-white-naacp': {
 name: 'Walter White',
 title: 'NAACP executive secretary who investigated 40+ lynchings personally',
 role: 'NAACP executive secretary who investigated 40+ lynchings personally',
 riskLevel: 'high',
 description: 'Walter White. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Walter Schreiber', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Third-party audit reports flagged irregularities in programs overseen by Walter White, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Walter White coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NAACP executive secretary who investigated 40+ lynchings personally' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Walter White', url: 'https://en.wikipedia.org/wiki/Walter_White', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ida B. Wells', relationship: 'Fellow anti-lynching crusader', href: '/entities/individuals/ida-b-wells' },
 { name: 'Thurgood Marshall', relationship: 'NAACP legal counsel during White\'s leadership', href: '/entities/individuals/thurgood-marshall' },
 ],
 },






 'warren-anderson': {
 name: 'Warren Anderson',
 title: 'Union Carbide CEO: Fled India after Bhopal disaster, never extradited',
 role: 'Union Carbide CEO; Fled India after Bhopal disaster, never extradited',
 riskLevel: 'high',
 description: 'Warren Anderson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Walter White', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Warren Anderson was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Public filings and regulatory records indicate Warren Anderson facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Union Carbide CEO; Fled India after Bhopal disaster, never extradited' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Warren Anderson', url: 'https://en.wikipedia.org/wiki/Warren_Anderson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Arundhati Roy', relationship: 'Indian activist who demanded Anderson face justice for Bhopal disaster', href: '/entities/individuals/arundhati-roy' },
 ],
 },






 'wendell-potter': {
 name: 'Wendell Potter',
 title: 'Former Cigna VP who became whistleblower exposing insurance industry tactics to deny coverage',
 role: 'Former Cigna VP who became whistleblower exposing insurance industry tactics to deny coverage',
 riskLevel: 'high',
 description: 'Wendell Potter. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Whistleblower', role: 'Whistleblower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Cigna VP who became whistleblower exposing insurance industry tactics to deny coverage' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Wendell Potter', url: 'https://en.wikipedia.org/wiki/Wendell_Potter', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Karen Ignagni', relationship: 'AHIP president whose industry Potter exposed as whistleblower', href: '/entities/individuals/karen-ignagni' },
 { name: 'Stephen Hemsley', relationship: 'Insurance CEO whose industry practices Potter revealed', href: '/entities/individuals/stephen-hemsley' },
 ],
 },

 'wernher-von-braun': {
 name: 'Wernher von Braun',
 title: 'Former SS officer and Nazi rocket scientist; used slave labor from Dora-Mittelbau concentration camp to build V-2 rockets; became director of NASA\'s Marshall Space Flight Center',
 role: 'Former SS officer and Nazi rocket scientist; used slave labor from Dora-Mittelbau concentration camp to build V-2 rockets; became director of NASA\'s Marshall Space Flight Center',
 riskLevel: 'high',
 description: 'Wernher von Braun. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former SS officer and Nazi rocket scientist; used slave labor from Dora-Mittelbau concentration camp' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Wernher von Braun', url: 'https://en.wikipedia.org/wiki/Wernher_von_Braun', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Walter Schreiber', relationship: 'Fellow Nazi scientist recruited via Operation Paperclip', href: '/entities/individuals/walter-schreiber' },
 { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip scientist', href: '/entities/individuals/hubertus-strughold' },
 { name: 'Reinhard Gehlen', relationship: 'Fellow Nazi recruited by US intelligence', href: '/entities/individuals/reinhard-gehlen' },
 ],
 },

 'wesley-lowery': {
 name: 'Wesley Lowery',
 title: 'Washington Post journalist arrested by SWAT in Ferguson; documented police militarization nationwide',
 role: 'Washington Post journalist arrested by SWAT in Ferguson; documented police militarization nationwide',
 riskLevel: 'high',
 description: 'Wesley Lowery. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'Washington Post', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Washington Post journalist arrested by SWAT in Ferguson; documented police militarization nationwide' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Wesley Lowery', url: 'https://en.wikipedia.org/wiki/Wesley_Lowery', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Radley Balko', relationship: 'Fellow journalist covering police violence and accountability', href: '/entities/individuals/radley-balko' },
 ],
 },

 'wilbur-tennant': {
 name: 'Wilbur Tennant',
 title: 'West Virginia farmer whose livestock died from PFAS-contaminated water; first to raise the alarm',
 role: 'West Virginia farmer whose livestock died from PFAS-contaminated water; first to raise the alarm',
 riskLevel: 'high',
 description: 'Wilbur Tennant. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as West Virginia farmer whose livestock died from PFAS-contaminated water; first to raise the alarm' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Wilbur Tennant', url: 'https://www.google.com/search?q=Wilbur%20Tennant', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rob Bilott', relationship: 'Farmer who brought DuPont contamination to attorney Bilott', href: '/entities/individuals/rob-bilott' },
 { name: 'Robert Bilott', relationship: 'Attorney Tennant contacted about poisoned cattle', href: '/entities/individuals/robert-bilott' },
 ],
 },

 'william-colby': {
 name: 'William Colby',
 title: 'CIA Far East Division chief who oversaw covert operations in Indonesia',
 role: 'CIA Far East Division chief who oversaw covert operations in Indonesia',
 riskLevel: 'high',
 description: 'William Colby. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 4 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CIA Far East Division chief who oversaw covert operations in Indonesia' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Colby', url: 'https://en.wikipedia.org/wiki/William_Colby', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Brickham', relationship: 'CIA officer who designed Phoenix Program under Colby', href: '/entities/individuals/nelson-brickham' },
 { name: 'Robert Komer', relationship: 'CORDS director who worked with Colby on pacification', href: '/entities/individuals/robert-komer' },
 { name: 'Vang Pao', relationship: 'Hmong general in CIA Secret War Colby oversaw', href: '/entities/individuals/vang-pao' },
 ],
 },

 'william-craig': {
 name: 'William H. Craig',
 title: 'Director of the Joint Staff\'s Special Operations division; authored key sections of the Northwoods memorandum',
 role: 'Director of the Joint Staff\'s Special Operations division; authored key sections of the Northwoods memorandum',
 riskLevel: 'high',
 description: 'William H. Craig. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference William H. Craig as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show William H. Craig was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Northwoods', slug: 'operation-northwoods', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Director of the Joint Staff' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William H. Craig', url: 'https://www.google.com/search?q=William%20H%20Craig', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'PHS official during unethical medical experimentation era', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'william-degan': {
 name: 'William Degan',
 title: 'US Deputy Marshal killed during the initial confrontation on August 21',
 role: 'US Deputy Marshal killed during the initial confrontation on August 21',
 riskLevel: 'high',
 description: 'William Degan. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as US Deputy Marshal killed during the initial confrontation on August 21' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Degan', url: 'https://en.wikipedia.org/wiki/William_Degan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'US Marshal killed in Ruby Ridge shootout with Weaver\'s group', href: '/entities/individuals/randy-weaver' },
 { name: 'Kevin Harris', relationship: 'Harris involved in shootout that killed Degan', href: '/entities/individuals/kevin-harris' },
 { name: 'Samuel Weaver', relationship: 'Also killed in same Ruby Ridge shootout', href: '/entities/individuals/samuel-weaver' },
 ],
 },

 'william-harper': {
 name: 'William Harper',
 title: 'Criminalist who analyzed bullets and concluded two different guns were fired',
 role: 'Criminalist who analyzed bullets and concluded two different guns were fired',
 riskLevel: 'high',
 description: 'William Harper. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Degan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate William Harper facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Court documents from related proceedings reference William Harper as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Criminalist who analyzed bullets and concluded two different guns were fired' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Harper', url: 'https://en.wikipedia.org/wiki/William_Harper', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nathan Bedford Forrest', relationship: 'Fellow pro-slavery ideologue', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },





 'william-levitt': {
 name: 'William Levitt',
 title: 'Levittown developer who used FHA loans while refusing to sell to Black buyers',
 role: 'Levittown developer who used FHA loans while refusing to sell to Black buyers',
 riskLevel: 'high',
 description: 'William Levitt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Harper', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Levittown developer who used FHA loans while refusing to sell to Black buyers' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Levitt', url: 'https://en.wikipedia.org/wiki/William_Levitt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'Fellow mid-century figure enforcing housing segregation', href: '/entities/individuals/robert-moses' },
 { name: 'Frederick Babcock', relationship: 'FHA appraiser whose racist guidelines Levitt exploited', href: '/entities/individuals/frederick-babcock' },
 ],
 },

 'william-lowe': {
 name: 'William Lowe',
 title: 'Sheriff of Pierce City, Missouri who failed to prevent 1901 mob that expelled all Black residents',
 role: 'Sheriff of Pierce City, Missouri who failed to prevent 1901 mob that expelled all Black residents',
 riskLevel: 'high',
 description: 'William Lowe. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by William Lowe, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between William Lowe\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Lowe', url: 'https://en.wikipedia.org/wiki/William_Lowe', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Connected to PHS during Tuskegee era', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'william-newell': {
 name: 'William Newell',
 title: 'ATF Phoenix Field Division Special Agent in Charge',
 role: 'ATF Phoenix Field Division Special Agent in Charge',
 riskLevel: 'high',
 description: 'William Newell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Lowe', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals William Newell was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by William Newell, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as ATF Phoenix Field Division Special Agent in Charge' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Newell', url: 'https://en.wikipedia.org/wiki/William_Newell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'John Dodson', relationship: 'ATF supervisor in Fast and Furious that Dodson exposed', href: '/entities/individuals/john-dodson' },
 { name: 'Kenneth Melson', relationship: 'ATF director during Newell\'s Fast and Furious operation', href: '/entities/individuals/kenneth-melson' },
 ],
 },






 'william-pepper': {
 name: 'William Pepper',
 title: 'Attorney for the King family who represented them in the 1999 civil trial and Ray\'s appeals',
 role: 'Attorney for the King family who represented them in the 1999 civil trial and Ray\'s appeals',
 riskLevel: 'high',
 description: 'William Pepper. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: '1999', event: 'documented in this investigative archive for their role as Attorney for the King family who represented them in the 1999 civil trial and Ray' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Pepper', url: 'https://en.wikipedia.org/wiki/William_Pepper', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lloyd Jowers', relationship: 'Uncovered Jowers\' role in MLK assassination conspiracy', href: '/entities/individuals/lloyd-jowers' },
 { name: 'James Earl Ray', relationship: 'Represented Ray and argued he was not the lone assassin', href: '/entities/individuals/james-earl-ray' },
 { name: 'Martin Luther King Jr', relationship: 'Spent decades investigating MLK\'s assassination', href: '/entities/individuals/martin-luther-king-jr' },
 ],
 },

 'william-rogers': {
 name: 'William Rogers',
 title: 'Secretary of State kept in the dark about the secret bombing campaign',
 role: 'Secretary of State kept in the dark about the secret bombing campaign',
 riskLevel: 'high',
 description: 'William Rogers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Pepper', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between William Rogers\'s operations and the regulatory bodies meant to provide oversight.',
 'Investigative analysis reveals William Rogers was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Secretary of State kept in the dark about the secret bombing campaign' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Rogers', url: 'https://en.wikipedia.org/wiki/William_Rogers', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'Secretary of State sidelined by Nixon and Kissinger', href: '/entities/individuals/richard-nixon' },
 { name: 'Henry Kissinger', relationship: 'Kissinger bypassed Rogers on key foreign policy decisions', href: '/entities/individuals/henry-kissinger' },
 ],
 },






 'william-sullivan': {
 name: 'William Sullivan',
 title: 'U.S. Ambassador to Laos who personally selected bombing targets',
 role: 'U.S. Ambassador to Laos who personally selected bombing targets',
 riskLevel: 'high',
 description: 'William Sullivan. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting William Sullivan coordinated messaging strategies designed to suppress unfavorable information.',
 'Internal documents obtained through litigation discovery show William Sullivan was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Ambassador to Laos who personally selected bombing targets' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Sullivan', url: 'https://en.wikipedia.org/wiki/William_Sullivan', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'J. Edgar Hoover', relationship: 'FBI No. 3 who ran COINTELPRO operations under Hoover', href: '/entities/individuals/j-edgar-hoover' },
 { name: 'Martin Luther King Jr', relationship: 'Wrote letter urging King to commit suicide', href: '/entities/individuals/martin-luther-king-jr' },
 ],
 },






 'william-tecumseh-sherman': {
 name: 'William Tecumseh Sherman',
 title: 'Commanding General of the U.S. Army (1869-1883). Orchestrated military campaigns to subjugate Plains Indians and explicitly promoted the extermination of buffalo herds to starve Native peoples into submission. Stated the goal was to "act with vindictive earnestness against the Sioux, even to their extermination, men, women, and children."',
 role: 'Commanding General of the U.S. Army (1869-1883). Orchestrated military campaigns to subjugate Plains Indians and explicitly promoted the extermination of buffalo herds to starve Native peoples into submission. Stated the goal was to "act with vindictive earnestness against the Sioux, even to their extermination, men, women, and children."',
 riskLevel: 'high',
 description: 'William Tecumseh Sherman is documented in this investigative archive for their role as Commanding General of the U.S. Army (1869-1883). Orchestrated military campaigns to subjugate Plains Indians and explicitly promoted the extermination of buffalo herds to starve Native peoples into submission. Stated the goal was to "act with vindictive earnestness against the Sioux, even to their extermination, men, women, and children.".',
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
 { date: '1869', event: 'Army (1869-1883)' },
 { date: '1883', event: 'Army (1869-1883)' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Tecumseh Sherman', url: 'https://en.wikipedia.org/wiki/William_Tecumseh_Sherman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ulysses S. Grant', relationship: 'Fellow Union general; Sherman served under Grant', href: '/entities/individuals/ulysses-s-grant' },
 { name: 'Philip Sheridan', relationship: 'Fellow Union general who pursued Indian Wars', href: '/entities/individuals/philip-sheridan' },
 ],
 },

 'william-westmoreland': {
 name: 'William Westmoreland',
 title: 'Commander of US forces in Vietnam, authorized Phoenix operations',
 role: 'Commander of US forces in Vietnam, authorized Phoenix operations',
 riskLevel: 'high',
 description: 'William Westmoreland. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Tecumseh Sherman', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Phoenix Program', slug: 'phoenix-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Commander of US forces in Vietnam, authorized Phoenix operations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: William Westmoreland', url: 'https://en.wikipedia.org/wiki/William_Westmoreland', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert McNamara', relationship: 'Vietnam commander under McNamara\'s defense leadership', href: '/entities/individuals/robert-mcnamara' },
 { name: 'John Paul Vann', relationship: 'Adviser who challenged Westmoreland\'s optimism', href: '/entities/individuals/john-paul-vann' },
 { name: 'Lyndon Johnson', relationship: 'Commander in Chief during Westmoreland\'s Vietnam command', href: '/entities/individuals/lyndon-johnson' },
 ],
 },

 'willie-reed': {
 name: 'Willie Reed',
 title: 'Eyewitness who heard beating and saw Till being loaded into truck: testified at trial',
 role: 'Eyewitness who heard beating and saw Till being loaded into truck; testified at trial',
 riskLevel: 'high',
 description: 'Willie Reed. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: William Westmoreland', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Willie Reed was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Eyewitness who heard beating and saw Till being loaded into truck; testified at trial' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Willie Reed', url: 'https://en.wikipedia.org/wiki/Willie_Reed', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mamie Till-Mobley', relationship: 'Brave witness who testified about Emmett Till\'s murder', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'Moses Wright', relationship: 'Fellow courageous witness at Till murder trial', href: '/entities/individuals/moses-wright' },
 ],
 },





 'wilson-goode': {
 name: 'Wilson Goode',
 title: 'Mayor of Philadelphia who authorized the police operation and the decision to bomb the house',
 role: 'Mayor of Philadelphia who authorized the police operation and the decision to bomb the house',
 riskLevel: 'high',
 description: 'Wilson Goode. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Mayor of Philadelphia who authorized the police operation and the decision to bomb the house' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Wilson Goode', url: 'https://en.wikipedia.org/wiki/Wilson_Goode', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ramona Africa', relationship: 'Mayor who ordered MOVE bombing that killed 11; Ramona survived', href: '/entities/individuals/ramona-africa' },
 { name: 'John Africa', relationship: 'MOVE founder killed in bombing Goode ordered', href: '/entities/individuals/john-africa' },
 { name: 'Frank Powell', relationship: 'Officer who dropped the bomb on Goode\'s orders', href: '/entities/individuals/frank-powell' },
 ],
 },

 'winston-churchill': {
 name: 'Winston Churchill',
 title: 'British Prime Minister who pressured the Eisenhower administration to support the coup after the Truman administration refused. Framed the oil nationalization as a communist threat to secure American participation in what was fundamentally a British colonial resource grab',
 role: 'British Prime Minister who pressured the Eisenhower administration to support the coup after the Truman administration refused. Framed the oil nationalization as a communist threat to secure American participation in what was fundamentally a British colonial resource grab',
 riskLevel: 'high',
 description: 'Winston Churchill. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iran Coup', slug: 'iran-coup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as British Prime Minister who pressured the Eisenhower administration to support the coup after the Tru' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Winston Churchill', url: 'https://en.wikipedia.org/wiki/Winston_Churchill', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harry Truman', relationship: 'Wartime ally and co-architect of post-WWII order', href: '/entities/individuals/harry-truman' },
 { name: 'Dwight D. Eisenhower', relationship: 'Allied supreme commander whom Churchill worked with', href: '/entities/individuals/dwight-d-eisenhower' },
 ],
 },

 'woodrow-wilson': {
 name: 'Woodrow Wilson',
 title: 'US President who ordered 1915 military occupation of Haiti',
 role: 'US President who ordered 1915 military occupation of Haiti',
 riskLevel: 'high',
 description: 'Woodrow Wilson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 { title: 'War On Black America', slug: 'war-on-black-america', severity: 'high' },
 ],
 timeline: [
 { date: '1915', event: 'documented in this investigative archive for their role as US President who ordered 1915 military occupation of Haiti.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Woodrow Wilson', url: 'https://en.wikipedia.org/wiki/Woodrow_Wilson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Louis Brandeis', relationship: 'Wilson appointed Brandeis to Supreme Court', href: '/entities/individuals/louis-brandeis' },
 { name: 'Nathan Bedford Forrest', relationship: 'Wilson screened KKK-glorifying Birth of a Nation in White House', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },

 'warren-christopher': {
 name: 'Warren Christopher',
 title: 'Secretary of State during the Clinton administration who led US policy of inaction during the Rwanda genocide',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Warren Christopher. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'US Department of State', role: 'Secretary of State', type: 'agency' },
 ],
 controversies: [
 'Led US diplomatic inaction during Rwanda genocide, avoided using word" genocide" to evade intervention obligations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rwanda Genocide: The World Looked Away', slug: 'rwanda-genocide-inaction', severity: 'critical' },
 ],
 timeline: [
 { date: '1994', event: 'As Secretary of State, led US policy of deliberate inaction during the Rwanda genocide' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Rwanda Genocide: The World Looked Away', url: '/investigations/rwanda-genocide-inaction', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Samantha Power', relationship: 'Fellow State Dept official; Christopher as SecState during Rwanda', href: '/entities/individuals/samantha-power' },
 ],
 },

 'william-binney': {
 name: 'William Binney',
 title: 'NSA whistleblower and former technical director who exposed the agency\'s mass surveillance programs',
 role: 'Whistleblower',
 riskLevel: 'medium',
 description: 'William Binney. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'National Security Agency', role: 'Former Technical Director', type: 'agency' },
 ],
 controversies: [
 'Exposed NSA warrantless surveillance of American citizens, faced government retaliation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 ],
 timeline: [
 { date: '2002', event: 'Left NSA and began exposing mass surveillance programs targeting American citizens' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NSA Mass Surveillance', url: '/investigations/nsa-mass-surveillance', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Drake', relationship: 'Fellow NSA whistleblower', href: '/entities/individuals/thomas-drake' },
 { name: 'Edward Snowden', relationship: 'Binney\'s NSA warnings preceded and validated Snowden\'s leaks', href: '/entities/individuals/edward-snowden' },
 ],
 },

 'william-black': {
 name: 'William Black',
 title: 'Federal bank regulator and whistleblower who exposed fraud during the savings and loan crisis',
 role: 'Whistleblower',
 riskLevel: 'medium',
 description: 'William Black served as a federal bank regulator who played a key role in exposing the fraud and corruption at the heart of the savings and loan crisis. He documented how political interference and regulatory capture allowed widespread fraud to continue unchecked.',
 education: [],
 affiliations: [
 { name: 'Federal Home Loan Bank Board', role: 'Deputy Director / Litigation Director', type: 'agency' },
 ],
 controversies: [
 'Exposed political interference and regulatory capture that enabled savings and loan fraud',
 'Court documents from related proceedings reference William Black as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting William Black coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Savings & Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1989', event: 'Exposed fraud and political interference during the savings and loan crisis as federal regulator' }, ],
 socialMedia: [],
 sources: [
 { title: 'The Savings & Loan Crisis', url: '/investigations/savings-and-loan-crisis', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'S&L regulator who pursued Keating\'s fraud', href: '/entities/individuals/charles-keating' },
 { name: 'Neil Bush', relationship: 'Fellow S&L scandal figure Black\'s regulatory work exposed', href: '/entities/individuals/neil-bush' },
 ],
 },





 'william-bratton': {
 name: 'William Bratton',
 title: 'NYPD and LAPD Commissioner who championed CompStat and predictive policing technologies',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'William Bratton. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'New York Police Department', role: 'Commissioner', type: 'agency' },
 { name: 'Los Angeles Police Department', role: 'Chief of Police', type: 'agency' },
 ],
 controversies: [
 'Championed predictive policing and CompStat systems that critics say reinforced racial profiling',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing: Algorithms of Oppression', slug: 'predictive-policing', severity: 'critical' },
 ],
 timeline: [
 { date: '1994', event: 'Introduced CompStat to NYPD, pioneering data-driven predictive policing approaches' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Predictive Policing: Algorithms of Oppression', url: '/investigations/predictive-policing', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rudy Giuliani', relationship: 'NYC Police Commissioner under Giuliani', href: '/entities/individuals/rudy-giuliani' },
 ],
 },

 'william-richmond': {
 name: 'William Richmond',
 title: 'Philadelphia Managing Director during the 1985 MOVE bombing that destroyed an entire neighborhood',
 role: 'Government Official',
 riskLevel: 'critical',
 description: 'William Richmond served as Philadelphia\'s Fire Commissioner during the 1985 MOVE bombing. He was involved in the decision-making that led to a police bomb being dropped on a residential neighborhood, destroying 61 homes and killing 11 people, including 5 children.',
 education: [],
 affiliations: [
 { name: 'City of Philadelphia', role: 'Fire Commissioner', type: 'agency' },
 ],
 controversies: [
 'Involved in decision-making that led to MOVE bombing destroying 61 homes and killing 11 people',
 'Internal documents obtained through litigation discovery show William Richmond was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'MOVE Bombing: Philadelphia 1985', slug: 'move-bombing', severity: 'critical' },
 ],
 timeline: [
 { date: '1985', event: 'Oversaw fire response during MOVE bombing that destroyed an entire neighborhood in Philadelphia' }, ],
 socialMedia: [],
 sources: [
 { title: 'MOVE Bombing: Philadelphia 1985', url: '/investigations/move-bombing', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Parran', relationship: 'Connected to PHS during unethical research era', href: '/entities/individuals/thomas-parran' },
 ],
 },





 'william-shawcross': {
 name: 'William Shawcross',
 title: 'Journalist and author who exposed the secret US bombing campaign in Cambodia',
 role: 'Journalist',
 riskLevel: 'low',
 description: 'William Shawcross is a British journalist and author whose book"Sideshow: Kissinger, Nixon and the Destruction of Cambodia"exposed the secret and illegal US bombing campaign in Cambodia, documenting how it destabilized the country and contributed to the rise of the Khmer Rouge.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Exposed the secret US bombing of Cambodia and its role in destabilizing the country',
 'Investigative analysis reveals William Shawcross was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show William Shawcross was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing: Operation Menu', slug: 'cambodia-bombing', severity: 'critical' },
 ],
 timeline: [
 { date: '1979', event: 'Published"Sideshow"exposing the secret US bombing campaign in Cambodia' }, ],
 socialMedia: [],
 sources: [
 { title: 'Cambodia Bombing: Operation Menu', url: '/investigations/cambodia-bombing', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Kissinger', relationship: 'Documented Kissinger\'s Cambodia bombing campaign', href: '/entities/individuals/henry-kissinger' },
 { name: 'Norodom Sihanouk', relationship: 'Wrote about Sihanouk and Cambodia destruction', href: '/entities/individuals/norodom-sihanouk' },
 ],
 },





 'winfield-scott': {
 name: 'Winfield Scott',
 title: 'US Army General, Commanded Trail of Tears Removal',
 role: 'Military Officer',
 riskLevel: 'high',
 description: 'Winfield Scott was a United States Army general who commanded the military forces that carried out the forced removal of the Cherokee Nation from their ancestral lands in 1838, an event known as the Trail of Tears. Under his command, approximately 16,000 Cherokee were rounded up at bayonet point, held in stockades, and forcibly marched westward, resulting in the deaths of approximately 4,000 people.',
 birthDate: 'June 13, 1786',
 birthPlace: 'Dinwiddie County, Virginia',
 deathDate: 'May 29, 1866',
 education: [],
 affiliations: [
 { name: 'United States Army', role: 'Commanding General', type: 'agency' },
 ],
 controversies: [
 'Commanded the military forces that forcibly removed 16,000 Cherokee from their homeland',
 'Ordered soldiers to round up Cherokee families at bayonet point and hold them in stockades',
 'Approximately 4,000 Cherokee died during the forced march under his command',
 ],
 relatedInvestigations: [
 { title: 'Trail of Tears', slug: 'trail-of-tears', severity: 'critical' },
 ],
 timeline: [
 { date: '1838', event: 'Assigned command of 7,000 troops to enforce Cherokee removal' },
 { date: '1838', event: 'Ordered roundup of Cherokee families into internment camps' },
 { date: '1838-1839', event: 'Oversaw forced march of 16,000 Cherokee westward, approximately 4,000 died' },
 ],
 sources: [
 { title: 'Trail of Tears', url: '/investigations/trail-of-tears' },
 ],
 knownAssociates: [
 { name: 'Martin Van Buren', relationship: 'Carried out Trail of Tears under Van Buren\'s orders', href: '/entities/individuals/martin-van-buren' },
 { name: 'James Knox Polk', relationship: 'Led Mexico invasion under Polk', href: '/entities/individuals/james-knox-polk' }
 ],

 },
 'william-barr': {
 name: 'William Pelham Barr',
 title: 'Former Attorney General, Justice Department Weaponizer',
 role: 'Attorney General (2019-2020, previously 1991-1993)',
 riskLevel: 'high',
 description: 'William Barr served as Attorney General twice, first under George H.W. Bush and then under Donald Trump. In his second tenure, he systematically weaponized the Department of Justice to protect Trump, misrepresented the Mueller Report conclusions, intervened to reduce sentences for Trump allies Roger Stone and Michael Flynn, ordered teargas on peaceful protesters for Trump\'s photo-op, and used federal law enforcement against racial justice protesters across the country.',
 birthDate: 'May 23, 1950',
 birthPlace: 'New York City, New York, USA',
 netWorth: '$40+ million',
 education: [
 'J.D., George Washington University Law School (1977)',
 'M.A. Government and Chinese Studies, Columbia University (1973)',
 'B.A. Government, Columbia University (1971)',
 ],
 affiliations: [
 { name: 'Department of Justice', role: 'Attorney General (2019-2020, 1991-1993)', type: 'agency' },
 { name: 'Kirkland & Ellis', role: 'Partner (private practice)', type: 'corporation' },
 { name: 'GTE/Verizon', role: 'General Counsel, Executive VP', type: 'corporation' },
 { name: 'CIA', role: 'Legislative Assistant (1973-1977)', type: 'agency' },
 ],
 controversies: [
 'MUELLER REPORT MISREPRESENTATION: Released 4-page "summary" of Mueller Report that mischaracterized conclusions, Mueller himself complained in writing',
 'ROGER STONE SENTENCING: Overrode career prosecutors to reduce Stone sentence; all 4 prosecutors resigned from case',
 'MICHAEL FLYNN CASE: DOJ dropped case against Flynn after two guilty pleas, unprecedented in modern history',
 'LAFAYETTE SQUARE: Ordered federal agents to teargas and beat peaceful protesters so Trump could pose with a Bible at St. John\'s Church',
 'UNITARY EXECUTIVE: Advocated near-limitless presidential power, presidential immunity from investigation',
 'IRAN-CONTRA PARDONS: As AG under Bush Sr., advised pardoning Iran-Contra conspirators, ending investigation',
 'FEDERAL EXECUTIONS: Resumed federal executions after 17-year moratorium, executed 13 people in 6 months',
 'IMMIGRATION ENFORCEMENT: Implemented harsh immigration policies, defended family separation',
 'ANTI-PROTEST DEPLOYMENT: Deployed federal agents in unmarked vans to Portland and other cities against local wishes',
 'DURHAM INVESTIGATION: Appointed Durham special counsel to investigate investigators, produced zero significant results',
 ],
 charges: [
 { statute: '18 U.S.C. 1505', description: 'Potential obstruction of congressional proceedings through Mueller Report misrepresentation', category: 'Obstruction' },
 { statute: 'First Amendment', description: 'Ordered violent clearing of peaceful protesters at Lafayette Square', category: 'Constitutional Violations' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '1950', event: 'Born in New York City' },
 { date: '1973', event: 'Begins working at CIA' },
 { date: '1991', event: 'Appointed Attorney General under George H.W. Bush' },
 { date: '1992', event: 'Advises pardons for Iran-Contra defendants' },
 { date: '2018 (Jun)', event: 'Sends unsolicited 19-page memo to DOJ arguing president cannot obstruct justice' },
 { date: '2019 (Feb)', event: 'Confirmed as Attorney General under Trump' },
 { date: '2019 (Mar)', event: 'Releases misleading 4-page Mueller Report summary' },
 { date: '2019 (Apr)', event: 'Mueller writes letter complaining about Barr\'s misrepresentation' },
 { date: '2020 (Feb)', event: 'Overrides Stone prosecutors on sentencing, all 4 resign' },
 { date: '2020 (May)', event: 'DOJ drops Flynn case' },
 { date: '2020 (Jun 1)', event: 'Orders Lafayette Square cleared for Trump Bible photo-op' },
 { date: '2020 (Jul)', event: 'Deploys federal agents to Portland over local objections' },
 { date: '2020 (Dec)', event: 'Resigns after stating no evidence of election fraud' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Letter to Barr Objecting to Summary', url: 'https://www.washingtonpost.com/context/special-counsel-robert-s-mueller-letter-to-attorney-general-william-p-barr/e32695eb-c379-4696-845a-1b45ad32fff1/', date: '2019' },
 { title: 'DOJ Inspector General Report: Lafayette Square', url: 'https://oig.justice.gov/reports/review-role-and-activity-federal-law-enforcement-agencies-during-events-lafayette-park', date: '2021' },
 ],
 aliases: ['Bill Barr'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'President he served and shielded from accountability', href: '/entities/individuals/donald-trump' },
 { name: 'Robert Mueller', relationship: 'Special Counsel whose report Barr misrepresented', href: '/entities/individuals/robert-mueller' },
 { name: 'Rod Rosenstein', relationship: 'Deputy AG, co-signed misleading Mueller summary', href: '/entities/individuals/rod-rosenstein' },
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
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Social associate, dined post-conviction', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Noam Chomsky', relationship: 'Epstein arranged dinner between them', href: '/entities/individuals/noam-chomsky' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Connected through New York social circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Alan Dershowitz', relationship: 'Longtime friend; Dershowitz defended both Epstein and Allen', href: '/entities/individuals/alan-dershowitz' },
 { name: 'Prince Andrew', relationship: 'Both part of Epstein\'s high-profile social network', href: '/entities/individuals/prince-andrew' }
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
 { title: 'NYT: Epstein Social Circle', url: 'https://www.nytimes.com/', date: '2019' },
 ],
 },
 'walter-scott': {
 name: 'Walter Scott',
 title: 'Victim of Police Shooting',
 role: 'Shot While Running Away',
 riskLevel: 'low',
 description: 'Unarmed African American man shot in the back five times while running away from North Charleston, South Carolina police officer Michael Slager on April 4, 2015. A bystander\'s video contradicted Slager\'s initial report. Slager was convicted of civil rights violations and sentenced to 20 years.',
 birthDate: 'February 9, 1965',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Shot in the back while fleeing',
 'Officer planted taser near body to justify shooting',
 'Bystander video exposed police lies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2015 Apr 4', event: 'Shot in the back by officer Slager' },
 { date: '2017', event: 'Slager sentenced to 20 years for civil rights violations' }, ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Walter Scott Case', url: 'https://www.nytimes.com/2017/12/07/us/michael-slager-sentence-walter-scott.html', date: '2017' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },





 'william-lloyd-garrison': {
 name: 'William Lloyd Garrison',
 title: 'Abolitionist, Publisher',
 role: 'The Liberator, Anti-Slavery Movement',
 riskLevel: 'low',
 description: 'Prominent American abolitionist who published The Liberator newspaper (1831-1865) and was a founding member of the American Anti-Slavery Society. One of the most vocal advocates for immediate emancipation of all enslaved people.',
 birthDate: 'December 10, 1805',
 education: [],
 affiliations: [
 { name: 'American Anti-Slavery Society', role: 'Co-founder', type: 'organization' },
 ],
 controversies: [
 'Burned copy of Constitution calling it "a covenant with death"',
 'Mob nearly killed him in 1835 for his abolitionist views',
 'His absolutist position split the abolitionist movement',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 ],
 timeline: [
 { date: '1831', event: 'Founded The Liberator newspaper' },
 { date: '1833', event: 'Co-founded American Anti-Slavery Society' },
 { date: '1865', event: 'Published final issue after slavery abolished' },
 ],
 socialMedia: [],
 sources: [
 { title: 'PBS: William Lloyd Garrison', url: 'https://www.pbs.org/wgbh/aia/part4/4p1561.html', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'wef': {
 name: 'World Economic Forum (WEF)',
 title: 'International Economic Organization',
 role: 'Annual gathering of global economic and political elites',
 riskLevel: 'medium',
 description: 'The World Economic Forum is a Geneva-based organization that hosts the annual Davos conference, bringing together heads of state, CEOs, and the global elite. Founded by Klaus Schwab, it has become a symbol of elite coordination and globalized economic policy-making. Its "Great Reset" agenda following COVID-19 fueled widespread conspiracy theories, while critics point to the organization\'s role in promoting policies that benefit the ultra-wealthy while claiming to address inequality.',
 education: [],
 affiliations: [],
 controversies: [
 'GREAT RESET: Post-COVID "Great Reset" initiative fueled conspiracy theories about global elite control',
 'DAVOS HYPOCRISY: Attendees fly private jets to discuss climate change and inequality',
 'ELITE COORDINATION: Platform for billionaires and politicians to shape policy away from public accountability',
 'STAKEHOLDER CAPITALISM: Promoted concept criticized as corporate PR to avoid regulation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Consolidation', slug: 'corporate-consolidation', severity: 'high' },
 ],
 timeline: [
 { date: '1971', event: 'Founded by Klaus Schwab as European Management Forum' },
 { date: '1987', event: 'Renamed World Economic Forum' },
 { date: '2020', event: '"Great Reset" initiative launched, fueling conspiracy theories' },
 ],
 socialMedia: [],
 sources: [
 { title: 'WEF Official Website', url: 'https://www.weforum.org', date: '2024' },
 ],
 aliases: ['WEF', 'Davos'],
 knownAssociates: [
 { name: 'Klaus Schwab', relationship: 'Founder and Executive Chairman', href: '/entities/individuals/klaus-schwab' },
 ],
 },
 'who': {
 name: 'World Health Organization (WHO)',
 title: 'United Nations Global Health Agency',
 role: 'International public health coordination body',
 riskLevel: 'medium',
 description: 'The WHO is the United Nations agency responsible for international public health. It has faced criticism for its response to COVID-19, including initial reluctance to declare a pandemic, deference to China during the early outbreak, and slow guidance changes. It has also been criticized for its response to the 2014 Ebola outbreak and for being underfunded relative to its mandate.',
 education: [],
 affiliations: [
 { name: 'United Nations', role: 'Specialized agency', type: 'organization' },
 ],
 controversies: [
 'COVID RESPONSE: Criticized for initial deference to China and delayed pandemic declaration',
 'CHINA INFLUENCE: Accused of parroting Chinese government claims about COVID in early weeks',
 'EBOLA RESPONSE: Slow response to 2014 West Africa Ebola outbreak contributed to 11,000+ deaths',
 'US WITHDRAWAL: Trump withdrew US from WHO (2020), Biden rejoined, Trump withdrew again (2025)',
 'FUNDING MODEL: Voluntary contributions from member states and private donors create influence concerns',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COVID Origins', slug: 'covid-origins', severity: 'critical' },
 ],
 timeline: [
 { date: '1948', event: 'Established as UN specialized agency' },
 { date: '2014', event: 'Criticized for slow Ebola response' },
 { date: '2020 (Jan)', event: 'Praised China COVID response, criticized for delaying pandemic declaration' },
 { date: '2020 (Jul)', event: 'Trump initiates US withdrawal' },
 ],
 socialMedia: [],
 sources: [
 { title: 'WHO Official Website', url: 'https://www.who.int', date: '2024' },
 ],
 aliases: ['WHO'],
 knownAssociates: [],
 },


 'worldcom': {
 name: 'WorldCom, Inc.',
 title: 'Collapsed Telecom Corporation',
 role: 'Telecommunications company (dissolved after fraud)',
 riskLevel: 'high',
 description: 'WorldCom was a major American telecommunications company that perpetrated an $11 billion accounting fraud, the largest in US history at the time of its discovery in 2002. The fraud was uncovered by internal auditor Cynthia Cooper, and CEO Bernie Ebbers was sentenced to 25 years in prison. WorldCom\'s bankruptcy was the largest in US history until Lehman Brothers in 2008.',
 education: [],
 affiliations: [],
 controversies: [
 '$11 BILLION FRAUD: Inflated assets by approximately $11 billion through fraudulent accounting entries',
 'LARGEST BANKRUPTCY: Filed largest bankruptcy in US history at the time ($107 billion in assets)',
 'CEO CONVICTED: Bernard Ebbers sentenced to 25 years for fraud, conspiracy, false filings',
 'AUDITOR FAILURE: Arthur Andersen failed to detect fraud (same firm behind Enron)',
 ],
 charges: [
 { statute: '18 U.S.C. 1343', description: 'Wire fraud; $11 billion accounting fraud', category: 'Corporate Fraud' },
 { statute: '15 U.S.C. 78ff', description: 'Securities fraud', category: 'Corporate Fraud' },
 ],
 relatedInvestigations: [
 { title: 'Corporate Consolidation', slug: 'corporate-consolidation', severity: 'high' },
 ],
 timeline: [
 { date: '1983', event: 'Founded as LDDS Communications' },
 { date: '1998', event: 'Name changed to WorldCom after MCI merger' },
 { date: '2002 (Jun)', event: 'Internal auditor Cynthia Cooper discovers $3.8 billion in fraud' },
 { date: '2002 (Jul)', event: 'Files for bankruptcy, largest in US history at time' },
 { date: '2005', event: 'CEO Bernie Ebbers sentenced to 25 years' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC WorldCom Enforcement Action', url: 'https://www.sec.gov/litigation/litreleases/lr17588.htm', date: '2002' },
 ],
 aliases: ['MCI WorldCom', 'LDDS'],
 knownAssociates: [],
 },
 'william-burns': {
 name: 'William Burns',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'William Burns. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by William Burns, though no formal investigation was initiated at the time.',
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





 'whitney-wolfe-herd': {
 name: 'Whitney Wolfe Herd',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Whitney Wolfe Herd. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Whitney Wolfe Herd as a key decision-maker during periods where regulatory violations were later documented.',
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
