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
























 'william-o-neal': {
 name: 'William O\'Neal',
 title: 'FBI Informant and Agent Provocateur (1968-1969)',
 role: 'FBI informant who infiltrated the Black Panther Party and facilitated the assassination of Fred Hampton',
 riskLevel: 'critical',
 description: 'William O\'Neal was an FBI informant who infiltrated the Illinois chapter of the Black Panther Party under COINTELPRO and provided the intelligence that enabled the Chicago Police raid on December 4, 1969, which killed 21-year-old Chairman Fred Hampton and 22-year-old Mark Clark. Recruited at age 17 after an arrest for car theft and impersonating a federal officer, O\'Neal rose to become Hampton\'s personal bodyguard and head of security for the Illinois chapter while secretly reporting to FBI Special Agent Roy Mitchell. He provided the floor plan of Hampton\'s apartment that was used to plan the raid and allegedly drugged Hampton with secobarbital the night before, ensuring he could not resist. O\'Neal received a cash bonus from the FBI after the raid. He was placed in the federal witness protection program but ultimately took his own life in 1990, shortly after giving a filmed interview for the documentary "Eyes on the Prize II" in which he displayed visible distress when discussing his role.',
 birthDate: '1949',
 birthPlace: 'Chicago, Illinois',
 deathDate: 'January 15, 1990',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'Paid Informant (1968-1970s)', type: 'agency' },
 { name: 'Black Panther Party - Illinois Chapter', role: 'Head of Security / Infiltrator', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'Black Panther chairman assassinated based on his intelligence', href: '/entities/individuals/fred-hampton' },
 { name: 'J. Edgar Hoover', relationship: 'FBI Director who authorized COINTELPRO operations targeting Hampton', href: '/entities/individuals/j-edgar-hoover' },
 { name: 'Edward Hanrahan', relationship: 'Cook County State\'s Attorney who authorized the Hampton raid', href: '/entities/individuals/edward-hanrahan' },
 { name: 'Mark Clark', relationship: 'Black Panther killed in the December 4, 1969 raid', href: '/entities/individuals/mark-clark' },
 ],
 controversies: [
 'FBI RECRUITMENT: Recruited at age 17 after being arrested for car theft and impersonating a federal officer. FBI handler Roy Mitchell offered to drop charges in exchange for infiltrating the Black Panther Party. O\'Neal was paid a regular stipend throughout his service as an informant.',
 'HAMPTON FLOOR PLAN: Provided a detailed floor plan of Fred Hampton\'s apartment at 2337 W. Monroe Street to his FBI handler, which was forwarded to the Cook County State\'s Attorney\'s office and used to plan the December 4, 1969 pre-dawn raid.',
 'DRUGGING HAMPTON: Alleged to have put secobarbital (a barbiturate) in Fred Hampton\'s Kool-Aid drink on the evening of December 3, 1969, ensuring Hampton was unconscious and unable to respond when 14 officers entered his apartment at 4:45 AM.',
 'THE RAID: The December 4, 1969 raid killed Fred Hampton (shot twice in the head at close range while unconscious in bed) and Mark Clark. Forensic evidence showed police fired 82-99 shots; at most one shot came from a Panther. O\'Neal was not present during the raid.',
 'FBI PAYMENT: Received a special bonus of $300 (equivalent to approximately $2,400 in 2024 dollars) from the FBI for his intelligence work that made the Hampton raid possible.',
 'AGENT PROVOCATEUR ACTIVITIES: Encouraged violent rhetoric and actions within the Black Panther Party to create pretexts for law enforcement action. Attempted to provoke gang warfare between the Panthers and the Blackstone Rangers street gang.',
 'SUICIDE: Died by suicide on January 15, 1990, running into traffic on the Eisenhower Expressway. His death came shortly after filming an interview for "Eyes on the Prize II" in which he appeared visibly shaken when recounting events. His death occurred on Martin Luther King Jr. Day.',
 ],
 charges: [
 { statute: '18 U.S.C. 371', description: 'Conspiracy: Participated in FBI conspiracy to neutralize Black Panther leadership through infiltration and intelligence sharing that directly facilitated assassination', category: 'Federal Crimes' },
 { statute: '18 U.S.C. 1111', description: 'Murder (accessory): Provided intelligence and allegedly drugged the target that directly enabled the killing of Fred Hampton', category: 'Violent Crimes' },
 { statute: '18 U.S.C. 241', description: 'Conspiracy Against Rights: Participated in COINTELPRO operations designed to destroy civil rights organizations', category: 'Civil Rights Violations' },
 ],
 relatedInvestigations: [
 { title: 'COINTELPRO: Domestic Surveillance Legacy', slug: 'cointelpro-domestic-surveillance-legacy', severity: 'critical' },
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'critical' },
 ],
 timeline: [
 { date: '1949', event: 'Born in Chicago, Illinois' },
 { date: '1968', event: 'Arrested for car theft and impersonating a federal officer; recruited by FBI Special Agent Roy Mitchell as informant' },
 { date: '1968-11', event: 'Begins infiltrating the Illinois Black Panther Party; assigned code name by FBI' },
 { date: '1969', event: 'Rises to become head of security for Illinois Black Panthers and Fred Hampton\'s personal bodyguard' },
 { date: '1969-12-03', event: 'Provides detailed floor plan of Hampton\'s apartment to FBI handler Roy Mitchell; allegedly drugs Hampton with secobarbital' },
 { date: '1969-12-04', event: 'Pre-dawn police raid kills Fred Hampton and Mark Clark based on O\'Neal\'s intelligence; O\'Neal receives FBI bonus payment' },
 { date: '1970s', event: 'Placed in federal witness protection program; given new identity' },
 { date: '1982', event: '$1.85 million civil rights settlement paid to Hampton and Clark families by City of Chicago, Cook County, and federal government' },
 { date: '1989', event: 'Participates in filmed interview for "Eyes on the Prize II" documentary; appears visibly distressed' },
 { date: '1990-01-15', event: 'Dies by suicide on Martin Luther King Jr. Day, running into traffic on the Eisenhower Expressway' },
 ],
 sources: [
 { title: 'Church Committee Final Report: Book III - COINTELPRO', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_III.pdf', date: '1976-04-28' },
 { title: 'Jeffrey Haas - "The Assassination of Fred Hampton"', url: 'https://scholar.google.com/scholar?q=Jeffrey+Haas+Assassination+Fred+Hampton', date: '2009' },
 { title: 'Hampton v. Hanrahan, 600 F.2d 600 (7th Cir. 1979)', url: 'https://scholar.google.com/scholar?q=Hampton+v+Hanrahan+600+F2d+600', date: '1979' },
 { title: 'Eyes on the Prize II Documentary', url: 'https://scholar.google.com/scholar?q=Eyes+on+the+Prize+II+documentary+William+ONeal', date: '1990' },
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
 title: 'Former SS Officer, Nazi Rocket Scientist, and NASA Director',
 role: 'SS-Sturmbannfuhrer who used slave labor from the Dora-Mittelbau concentration camp to build V-2 rockets; recruited via Operation Paperclip to become director of NASA Marshall Space Flight Center',
 riskLevel: 'critical' as const,
 description: 'Wernher Magnus Maximilian Freiherr von Braun (1912-1977) was a German-American aerospace engineer who served as a major in Hitler SS and directed the development of the V-2 ballistic missile using forced labor from the Dora-Mittelbau concentration camp, where approximately 20,000 prisoners died from starvation, disease, and execution. Von Braun was an SS-Sturmbannfuhrer (equivalent to major) who personally visited Mittelbau-Dora and handpicked prisoners as slave laborers for his rocket program. When the war ended, U.S. intelligence agents fabricated his background through Operation Paperclip, whitewashing his Nazi party membership, SS rank, and connections to slave labor in order to recruit him. He became the leading figure in American rocketry, directing the development of the Redstone missile, the Jupiter ballistic missile, and ultimately the Saturn V rocket that carried American astronauts to the Moon. His transformation from SS officer to American hero represents one of the most dramatic examples of institutional moral compromise in Cold War history. Despite mounting evidence of his direct involvement in the Dora-Mittelbau atrocities, von Braun received the National Medal of Science and was celebrated as a national hero until his death.',
 education: ['Technische Hochschule Berlin (B.S. in Mechanical Engineering, 1932)', 'Friedrich-Wilhelms-Universitat Berlin (Ph.D. in Physics, 1934)'],
 affiliations: [
 { name: 'Schutzstaffel (SS)', role: 'SS-Sturmbannfuhrer (Major); joined the Nazi Party in 1937 and the SS in 1940; maintained rank throughout wartime rocket development', type: 'agency' },
 { name: 'Heeresversuchsanstalt Peenemuende', role: 'Technical Director (1937-1945); led development of the V-2 ballistic missile using concentration camp slave labor', type: 'agency' },
 { name: 'NASA Marshall Space Flight Center', role: 'Director (1960-1970); led development of the Saturn V rocket for the Apollo program', type: 'agency' },
 { name: 'U.S. Army Ballistic Missile Agency', role: 'Director of Development Operations Division (1950-1960); developed Redstone and Jupiter missiles for the U.S. military', type: 'agency' },
 ],
 controversies: [
 'Held rank of SS-Sturmbannfuhrer (Major) in the Nazi SS; joined the Nazi Party in 1937',
 'Directed V-2 missile development at Peenemuende using slave labor from the Mittelbau-Dora concentration camp where approximately 20,000 prisoners died',
 'Personally visited the Dora underground factory and selected prisoners as forced laborers for his rocket program',
 'More people died building the V-2 rocket (estimated 20,000) than were killed by V-2 strikes (approximately 9,000)',
 'Operation Paperclip fabricated his background to hide his Nazi and SS affiliations, violating President Truman direct order not to recruit active Nazis',
 'His security dossier was rewritten by JIOA to remove references to his SS membership, Nazi Party activities, and slave labor connections',
 'Received the National Medal of Science in 1975 despite documented connections to concentration camp labor and Nazi war crimes',
 ],
 relatedInvestigations: [
 { title: 'Operation Paperclip: The Recruitment of Nazi Scientists by U.S. Intelligence', slug: 'operation-paperclip-nazi-scientists', severity: 'critical' },
 ],
 timeline: [
 { date: '1912-03-23', event: 'Born in Wirsitz, Province of Posen, German Empire (now Wyrzysk, Poland)' },
 { date: '1934', event: 'Receives Ph.D. in physics from the University of Berlin with a dissertation on liquid-propellant rocketry' },
 { date: '1937', event: 'Joins the Nazi Party (NSDAP); appointed technical director of the Army Rocket Center at Peenemuende' },
 { date: '1940', event: 'Joins the SS at the personal urging of Heinrich Himmler; eventually reaches rank of Sturmbannfuhrer' },
 { date: '1943', event: 'V-2 production moves to underground Mittelwerk factory using slave labor from Mittelbau-Dora concentration camp' },
 { date: '1945-05', event: 'Surrenders to American forces in Bavaria; begins cooperation with U.S. military intelligence' },
 { date: '1945-09', event: 'Arrives in the United States under Operation Paperclip with falsified security clearance documents' },
 { date: '1960', event: 'Appointed first director of NASA Marshall Space Flight Center in Huntsville, Alabama' },
 { date: '1969-07-16', event: 'Saturn V rocket he directed successfully launches Apollo 11 to the Moon' },
 { date: '1975', event: 'Receives the National Medal of Science from President Gerald Ford despite his documented Nazi past' },
 { date: '1977-06-16', event: 'Dies of pancreatic cancer in Alexandria, Virginia at age 65' },
 ],
 sources: [
 { title: 'National Archives: Operation Paperclip Records - Wernher von Braun Dossier', url: 'https://www.archives.gov/iwg/declassified-records/rg-330-defense-secretary', date: '2006' },
 { title: 'Neufeld, M.J. - Von Braun: Dreamer of Space, Engineer of War (Knopf)', date: '2007' },
 ],
 knownAssociates: [
 { name: 'Walter Schreiber', relationship: 'Former Nazi Surgeon General recruited via Operation Paperclip; later exposed and deported to Argentina', href: '/entities/individuals/walter-schreiber' },
 { name: 'Hubertus Strughold', relationship: 'Nazi aviation medicine researcher recruited via Paperclip; linked to Dachau human experiments; became "Father of Space Medicine" at USAF', href: '/entities/individuals/hubertus-strughold' },
 { name: 'Arthur Rudolph', relationship: 'V-2 production manager at Mittelbau-Dora who oversaw slave labor; recruited via Paperclip; later stripped of U.S. citizenship for war crimes', href: '/entities/individuals/arthur-rudolph' },
 { name: 'Heinrich Himmler', relationship: 'Reichsfuhrer-SS who personally urged von Braun to join the SS and provided concentration camp labor for V-2 production' },
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






 'william-c-sullivan': {
 name: 'William C. Sullivan',
 title: 'FBI Assistant Director, Domestic Intelligence Division (1961-1971)',
 role: 'Head of FBI domestic intelligence who directed COINTELPRO operations and authored the anonymous letter urging Martin Luther King Jr. to commit suicide',
 riskLevel: 'critical',
 description: 'William Cornelius Sullivan served as FBI Assistant Director and head of the Domestic Intelligence Division from 1961 to 1971, making him the third most powerful official in the Bureau and the operational commander of COINTELPRO. Sullivan personally directed the FBI\'s campaigns against civil rights leaders, antiwar activists, and the New Left. He authored or arranged the infamous anonymous letter sent to Martin Luther King Jr. in November 1964 along with surveillance recordings, which the Church Committee later characterized as a clear attempt to drive King to suicide. Sullivan oversaw the infiltration and disruption of the Black Panther Party, the Southern Christian Leadership Conference, Students for a Democratic Society, and dozens of other organizations. After a power struggle with J. Edgar Hoover in 1971, Sullivan was forced out of the FBI. He was shot and killed in an apparent hunting accident on November 9, 1977, just days before he was scheduled to testify before the House Select Committee on Assassinations about FBI involvement in the murders of President John F. Kennedy and Martin Luther King Jr. The circumstances of his death have never been satisfactorily explained.',
 birthDate: 'May 12, 1912',
 birthPlace: 'Bolton, Massachusetts',
 deathDate: 'November 9, 1977',
 education: ['American University, BA', 'George Washington University, MA'],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'Assistant Director, Domestic Intelligence Division (1961-1971)', type: 'agency' },
 ],
 controversies: [
 'MLK SUICIDE LETTER: Sullivan personally directed and likely authored the anonymous letter sent to Martin Luther King Jr. in November 1964, accompanied by FBI surveillance tapes. The letter stated: "King, there is only one thing left for you to do. You know what it is. You have just 34 days." The Church Committee concluded this was an unambiguous attempt to drive King to commit suicide.',
 'COINTELPRO COMMANDER: As head of the Domestic Intelligence Division, Sullivan was the operational commander of all COINTELPRO programs from 1961-1971. Under his direction, the FBI infiltrated and disrupted the Black Panther Party, SCLC, SDS, Nation of Islam, American Indian Movement, Communist Party USA, and dozens of other organizations.',
 'BLACK PANTHER OPERATIONS: Directed the FBI\'s "COINTELPRO-BLACK HATE" program specifically targeting Black nationalist organizations. Approved the use of informants, provocateurs, and psychological warfare operations designed to create violent conflicts between organizations.',
 'MLK SURVEILLANCE PROGRAM: Expanded the FBI\'s surveillance of Martin Luther King Jr. into the most intensive domestic intelligence operation in Bureau history, including wiretaps on King\'s phones, bugs in his hotel rooms, and infiltration of the SCLC.',
 'ANTIWAR MOVEMENT TARGETING: Directed COINTELPRO-NEW LEFT operations against antiwar activists and student organizations, including illegal surveillance, infiltration, and disruption campaigns against constitutionally protected political activity.',
 'SUSPICIOUS DEATH: Shot and killed on November 9, 1977, near his home in Sugar Hill, New Hampshire, by a hunter named Robert Daniels Jr. who claimed to have mistaken Sullivan for a deer. This occurred days before Sullivan was to testify before the House Select Committee on Assassinations. The death was ruled accidental despite the timing and Sullivan\'s knowledge of FBI involvement in the King and Kennedy assassination investigations.',
 'POWER STRUGGLE WITH HOOVER: Engaged in an increasingly bitter power struggle with J. Edgar Hoover in 1970-1971, partly because Sullivan argued the domestic communist threat was exaggerated. After Sullivan was forced out in October 1971, Hoover changed the locks on his office and seized all his files.',
 'WEATHER UNDERGROUND BREAK-INS: Approved and directed warrantless break-ins ("black bag jobs") against Weather Underground members and supporters, the same illegal operations for which Mark Felt and Edward S. Miller were later convicted.',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Crimes Against Humanity; Persecution: Directed systematic persecution of civil rights leaders and political activists through COINTELPRO', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity; Other Inhumane Acts: Authored letter attempting to drive Martin Luther King Jr. to suicide; directed psychological warfare against activists', category: 'International Criminal Law' },
 { statute: '18 U.S.C. 241', description: 'Conspiracy Against Rights: Directed COINTELPRO operations that systematically violated First Amendment, Fourth Amendment, and due process rights of American citizens', category: 'Civil Rights Violations' },
 { statute: '18 U.S.C. 242', description: 'Deprivation of Rights Under Color of Law: Used official FBI position to violate constitutional rights of surveillance targets', category: 'Civil Rights Violations' },
 { statute: '18 U.S.C. 2511', description: 'Illegal Wiretapping: Directed warrantless electronic surveillance of civil rights leaders and political organizations', category: 'Surveillance Crimes' },
 { statute: '18 U.S.C. 1708', description: 'Mail Tampering: Directed FBI mail opening programs targeting political organizations', category: 'Federal Crimes' },
 ],
 relatedInvestigations: [
 { title: 'COINTELPRO: Domestic Surveillance Legacy', slug: 'cointelpro-domestic-surveillance-legacy', severity: 'critical' },
 { title: 'FBI Domestic Surveillance', slug: 'fbi-surveillance', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 12, 1912', event: 'Born in Bolton, Massachusetts' },
 { date: '1941', event: 'Joins the FBI as a special agent' },
 { date: '1961', event: 'Appointed Assistant Director heading the Domestic Intelligence Division (Division Five)' },
 { date: '1961-1971', event: 'Directs all COINTELPRO operations as head of domestic intelligence' },
 { date: '1963', event: 'Writes memo declaring Martin Luther King Jr. "the most dangerous Negro" in America; recommends FBI "take him off his pedestal"' },
 { date: '1964-11', event: 'Directs the composition and mailing of the anonymous "suicide letter" to Martin Luther King Jr. along with surveillance recordings' },
 { date: '1967', event: 'Expands COINTELPRO to target "Black Nationalist-Hate Groups" and "New Left" movements' },
 { date: '1969-12-04', event: 'FBI intelligence gathered under Sullivan\'s program facilitates the raid that kills Fred Hampton' },
 { date: '1970', event: 'Approves warrantless break-ins against Weather Underground supporters' },
 { date: '1971-10', event: 'Forced out of FBI after power struggle with Hoover; Hoover changes locks on his office and seizes files' },
 { date: '1975-1976', event: 'Church Committee investigation exposes COINTELPRO; Sullivan\'s role in MLK operations revealed' },
 { date: '1977-11-09', event: 'Shot and killed near his home in Sugar Hill, New Hampshire, days before scheduled testimony to House Select Committee on Assassinations; ruled a hunting accident' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Church Committee: Final Report - Book III, COINTELPRO', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_III.pdf', date: '1976' },
 { title: 'William C. Sullivan with Bill Brown - "The Bureau: My Thirty Years in Hoover\'s FBI"', url: 'https://scholar.google.com/scholar?q=William+Sullivan+The+Bureau+My+Thirty+Years+Hoover+FBI', date: '1979' },
 { title: 'Tim Weiner - "Enemies: A History of the FBI"', url: 'https://scholar.google.com/scholar?q=Tim+Weiner+Enemies+History+FBI', date: '2012' },
 { title: 'David Garrow - "The FBI and Martin Luther King, Jr."', url: 'https://scholar.google.com/scholar?q=David+Garrow+FBI+Martin+Luther+King', date: '1981' },
 { title: 'Church Committee MLK Report: "The FBI\'s Covert Action Program to Destroy the Black Panther Party"', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_II.pdf', date: '1976' },
 ],
 aliases: ['Bill Sullivan'],
 knownAssociates: [
 { name: 'J. Edgar Hoover', relationship: 'FBI Director and superior; Sullivan served as his intelligence chief until their 1971 power struggle', href: '/entities/individuals/j-edgar-hoover' },
 { name: 'Mark Felt', relationship: 'FBI colleague; Felt succeeded to top FBI leadership after Sullivan\'s removal', href: '/entities/individuals/mark-felt' },
 { name: 'Martin Luther King Jr.', relationship: 'Primary target of Sullivan\'s surveillance and harassment campaign', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Fred Hampton', relationship: 'Black Panther leader killed through intelligence operations Sullivan directed', href: '/entities/individuals/fred-hampton' },
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
 { title: 'DOJ Inspector General Report: Lafayette Square', url: 'https://oig.justice.gov/reports', date: '2021' },
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
  'william-jefferson': {
    name: 'William Jefferson',
    title: 'Former U.S. Representative (D-LA-2)',
    role: 'Congressman found with $90,000 in cash hidden in his freezer during an FBI bribery investigation, convicted on 11 of 16 corruption counts',
    riskLevel: 'high',
    description: 'William Jennings Jefferson served as a U.S. Representative from Louisiana from 1991 to 2009. In August 2005, FBI agents raided Jefferson\'s home and discovered $90,000 in cash wrapped in aluminum foil and hidden inside frozen food containers in his freezer. The money was part of a $100,000 FBI sting payment. Jefferson was involved in bribery schemes spanning Africa, using his position to broker business deals in Nigeria, Ghana, Cameroon, and other countries in exchange for payments to himself and his family. He used his congressional office and official diplomatic trips to promote business ventures in which he had a financial interest. Jefferson was convicted in November 2009 on 11 of 16 counts including bribery, racketeering, money laundering, and obstruction of justice. He was sentenced to 13 years in federal prison, the longest sentence ever given to a congressman for bribery at that time. His sentence was later reduced to 5.5 years after a Supreme Court ruling narrowed the definition of "official acts."',
    birthDate: 'March 14, 1947',
    birthPlace: 'Lake Providence, Louisiana',
    education: ['Southern University (B.A.)', 'Harvard Law School (J.D.)', 'Georgetown University Law Center (LL.M.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (D-LA)', role: 'Member of Congress', type: 'agency' as const },
      { name: 'House Ways and Means Committee', role: 'Member', type: 'organization' as const },
    ],
    controversies: [
      '$90,000 in cash found wrapped in foil in freezer during FBI raid',
      'Used congressional office to broker African business deals for personal profit',
      'Used official diplomatic trips to promote ventures where he had financial interest',
      'Convicted on 11 of 16 counts including bribery, racketeering, and money laundering',
      'Sentenced to 13 years - longest sentence ever for congressional bribery at the time',
    ],
    charges: [
      { statute: '18 U.S.C. 201(b)', description: 'Bribery - soliciting and receiving bribes for official acts', category: 'federal' },
      { statute: '18 U.S.C. 1962', description: 'RICO racketeering conspiracy', category: 'federal' },
      { statute: '18 U.S.C. 1956', description: 'Money laundering', category: 'federal' },
      { statute: '18 U.S.C. 1951', description: 'Extortion under color of official right (Hobbs Act)', category: 'federal' },
      { statute: '18 U.S.C. 1512', description: 'Obstruction of justice', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '1991-01', event: 'Takes office in U.S. House of Representatives' },
      { date: '2005-07-30', event: 'FBI videotapes Jefferson accepting $100,000 bribe' },
      { date: '2005-08-03', event: 'FBI raids home; finds $90,000 in freezer' },
      { date: '2007-06-04', event: 'Indicted on 16 counts of corruption' },
      { date: '2008-12-06', event: 'Loses reelection' },
      { date: '2009-08-05', event: 'Convicted on 11 of 16 counts' },
      { date: '2009-11-13', event: 'Sentenced to 13 years in federal prison' },
      { date: '2017', event: 'Released from prison after sentence reduction' },
    ],
    sources: [
      { title: 'DOJ: United States v. William J. Jefferson', url: 'https://www.justice.gov/criminal', date: '2009' },
    ],
    aliases: ['Dollar Bill'],
    knownAssociates: [
      { name: 'Vernon Jackson', relationship: 'Louisville businessman who paid bribes for Jefferson\'s help' },
    ],
  },
  'wayne-lapierre': {
    name: 'Wayne LaPierre',
    title: 'Former CEO and Executive Vice President, National Rifle Association',
    role: 'NRA leader found liable for corruption and financial self-dealing',
    riskLevel: 'high',
    description: 'Wayne LaPierre served as CEO and Executive Vice President of the NRA from 1991 to January 2024, making him the most powerful figure in American gun politics for over three decades. Under his leadership, the NRA spent over $170 million on political activities while blocking virtually all federal gun legislation. A 2024 civil trial in New York found LaPierre liable for corruption, financial self-dealing, and misusing NRA funds for personal luxury including $274,000 in clothing from a Beverly Hills boutique, trips on a 108-foot yacht owned by a vendor, and African safari trips. He was ordered to repay $4.35 million to the NRA.',
    birthDate: 'November 8, 1949',
    birthPlace: 'Schenectady, New York',
    education: ['Siena College (B.A. Political Science)', 'Boston College (M.A. Government)'],
    affiliations: [
      { name: 'National Rifle Association', role: 'CEO and Executive Vice President (1991-2024)', type: 'organization' as const },
    ],
    controversies: [
      'Found liable for corruption and financial self-dealing by New York jury in 2024',
      'Charged $274,000 in personal clothing to NRA vendor Ackerman McQueen',
      'Used NRA funds for trips on 108-foot yacht belonging to vendor',
      'Spent NRA funds on African safari trips for himself and family',
      'NRA filed for bankruptcy in Texas in attempt to escape New York AG investigation (dismissed)',
      'NRA spent $170M+ on political activities blocking gun safety legislation under his leadership',
      'Opposed universal background checks despite 90% public support',
      'Blocked CDC gun violence research funding for two decades through Dickey Amendment lobbying',
    ],
    charges: [
      { statute: 'NY Executive Law 172', description: 'Breach of fiduciary duty and self-dealing (civil)', category: 'Corruption' },
    ],
    relatedInvestigations: ['gun-industry-immunity-violence'],
    timeline: [
      { date: '1991', event: 'Became NRA Executive Vice President and CEO' },
      { date: '2005', event: 'Championed passage of PLCAA granting gun industry liability immunity' },
      { date: '2020', event: 'New York AG Letitia James filed civil lawsuit alleging widespread corruption' },
      { date: 'January 2021', event: 'NRA filed for bankruptcy in Texas to escape NY jurisdiction (dismissed)' },
      { date: 'January 2024', event: 'Resigned as CEO days before civil trial began' },
      { date: 'February 2024', event: 'Found liable for corruption; ordered to repay $4.35 million' },
    ],
    sources: [
      { title: 'NY AG: NRA Lawsuit', url: 'https://ag.ny.gov/press-release/2020/attorney-general-james-files-lawsuit-dissolve-nra', date: '2020' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Oliver North', relationship: 'Former NRA President who clashed with LaPierre over finances; ousted' },
      { name: 'Angus McQueen', relationship: 'Head of Ackerman McQueen; NRA\'s long-time ad agency that facilitated personal spending' },
    ],
  },

  'walter-freeman': {
    name: 'Walter Freeman',
    title: 'Neurologist and Lobotomist',
    role: 'Self-taught lobotomist who performed over 3,400 brain surgeries without surgical training',
    riskLevel: 'critical' as const,
    description: 'Walter Jackson Freeman II (1895-1972) was an American neurologist who became the foremost promoter and practitioner of lobotomy in the United States. He personally performed over 3,400 lobotomies, including approximately 2,500 transorbital ("ice pick") lobotomies that he conducted as an office procedure without surgical training, without anesthesiologists, and frequently without informed consent. He traveled the country in a van he called the "lobotomobile," performing assembly-line lobotomies at state mental hospitals. At least 490 of his patients died as a direct result of the procedure. Freeman was never criminally charged, never lost his medical license (though he lost hospital privileges), and continued to defend the procedure until his death.',
    birthDate: '1895-11-14',
    birthPlace: 'Philadelphia, Pennsylvania',
    deathDate: '1972-05-31',
    education: ['Yale University (B.S., 1916)', 'University of Pennsylvania School of Medicine (M.D., 1920)', 'University of Paris (neurology training, 1923-1924)'],
    affiliations: [
      { name: 'George Washington University', role: 'Professor and Chair of Neurology (1927-1954)', type: 'organization' },
      { name: 'George Washington University Hospital', role: 'Performed first American lobotomy (1936); later lost hospital privileges', type: 'organization' },
    ],
    controversies: [
      'Performed over 3,400 lobotomies including 2,500 transorbital procedures without surgical training or qualifications',
      'Developed the transorbital lobotomy technique using a modified ice pick from his kitchen, performing the procedure as an office visit',
      'Lobotomized children as young as 4 years old; performed the procedure on 12-year-old Howard Dully based solely on his stepmother complaints',
      'Performed the lobotomy on Rosemary Kennedy in 1941, permanently incapacitating the 23-year-old daughter of Joseph P. Kennedy Sr.',
      'Traveled the country in his "lobotomobile," performing mass lobotomies at state mental hospitals, including 25 women in a single day at one West Virginia facility',
      'At least 490 patients died as a direct result of his procedures; thousands more were left in permanent vegetative or diminished states',
      'Performed his last lobotomy in 1967 on Helen Mortensen, a woman he had lobotomized twice before; she died of a brain hemorrhage',
    ],
    relatedInvestigations: [
      { title: 'The American Lobotomy Epidemic', slug: 'lobotomy-epidemic-united-states', severity: 'critical' },
    ],
    timeline: [
      { date: '1936-09-14', event: 'Performs first American lobotomy on Alice Hood Hammatt at George Washington University Hospital' },
      { date: '1941-11', event: 'Lobotomizes Rosemary Kennedy at age 23, permanently incapacitating her' },
      { date: '1946-01', event: 'Develops transorbital ("ice pick") lobotomy technique using a modified kitchen ice pick' },
      { date: '1949', event: 'Egas Moniz receives Nobel Prize for inventing the lobotomy, giving the procedure international scientific legitimacy' },
      { date: '1954', event: 'Chlorpromazine (Thorazine) introduced, providing pharmaceutical alternative to lobotomy' },
      { date: '1967-02-22', event: 'Performs final lobotomy on Helen Mortensen; she dies of brain hemorrhage; Freeman loses all remaining hospital privileges' },
      { date: '1972-05-31', event: 'Dies of colon cancer at age 76; never criminally charged or stripped of medical license' },
    ],
    sources: [
      { title: 'NPR: "My Lobotomy" - Howard Dully Story', url: 'https://www.npr.org/2005/11/16/5014080/my-lobotomy-howard-dullys-journey', date: '2005' },
      { title: 'National Library of Medicine: Walter Freeman Collection', url: 'https://profiles.nlm.nih.gov/spotlight/bb', date: '2024' },
    ],
    aliases: ['The Lobotomist', 'The Ice Pick Doctor'],
    knownAssociates: [
      { name: 'James Watts', relationship: 'Neurosurgery partner at GWU who performed the actual surgery for prefrontal lobotomies (1936-1946); ended partnership when Freeman developed the transorbital technique' },
      { name: 'Egas Moniz', relationship: 'Portuguese neurologist who invented the lobotomy in 1935 and received the 1949 Nobel Prize; Freeman adapted and promoted his technique in the United States' },
    ],
  },


  'wayne-christian': {
    name: 'Wayne Christian',
    title: 'Chairman, Texas Railroad Commission',
    role: 'Railroad Commission Chairman who refused to mandate natural gas winterization before Winter Storm Uri',
    riskLevel: 'high',
    description: 'Wayne Christian has served as Chairman of the Texas Railroad Commission since 2017, leading the state agency responsible for regulating oil and gas production and pipeline infrastructure. As chairman, Christian bore primary leadership responsibility for the commission\'s consistent refusal to mandate winterization standards for natural gas infrastructure, despite explicit federal recommendations from FERC and NERC following a 2011 cold weather event that caused widespread gas supply disruptions across Texas. When Winter Storm Uri struck in February 2021, the consequences of that decade-long regulatory failure were catastrophic. Natural gas wells froze, pipelines failed, and processing plants shut down across the state because none had been required to weatherize. Gas supply failures were the single largest contributor to power generation loss during the crisis, which killed over 700 Texans and left 4.5 million households without power. Throughout his tenure, Christian has received significant campaign contributions from the oil and gas industry he is charged with regulating, creating a direct conflict of interest between his duty to protect public safety and his financial relationship with the regulated industry. He publicly downplayed the Railroad Commission\'s role in the crisis and deflected blame. No criminal charges or formal disciplinary actions were taken against him.',
    affiliations: [
      { name: 'Texas Railroad Commission', role: 'Chairman (2017-present)', type: 'agency' },
      { name: 'Texas House of Representatives', role: 'Former State Representative (2013-2016)', type: 'agency' },
      { name: 'Texas Republican Party', role: 'Elected official', type: 'organization' },
    ],
    controversies: [
      'As Chairman, led the Railroad Commission in refusing to mandate winterization of natural gas infrastructure despite federal FERC/NERC recommendations after 2011 freeze event',
      'Natural gas supply failures under his regulatory oversight were the single largest contributor to power generation loss during Winter Storm Uri',
      'Received significant campaign contributions from oil and gas companies he is charged with regulating, creating direct conflicts of interest',
      'Publicly downplayed the Railroad Commission\'s responsibility in the crisis and deflected blame to other agencies',
      'No accountability after 700+ Texans died in Winter Storm Uri due to unweatherized natural gas infrastructure under his oversight',
      'Railroad Commission elections have extremely low voter turnout, allowing industry-backed candidates to maintain control with minimal public scrutiny',
    ],
    charges: [
      { statute: 'Texas Natural Resources Code', description: 'Failure to mandate natural gas winterization despite federal recommendations and known risk of catastrophic failure', category: 'Regulatory Misconduct' },
    ],
    relatedInvestigations: [
      { title: 'Texas Power Grid Failure: 700+ Dead in Preventable Crisis', slug: 'texas-power-grid-failure', severity: 'critical' },
    ],
    timeline: [
      { date: '2016-11-08', event: 'Elected Chairman of the Texas Railroad Commission' },
      { date: '2017-01-01', event: 'Takes office as Railroad Commission Chairman' },
      { date: '2021-02-15', event: 'Winter Storm Uri hits Texas; natural gas supply failures cascade, contributing to grid collapse' },
      { date: '2021-02-19', event: 'Crisis subsides after 700+ deaths; Railroad Commission faces scrutiny for lack of winterization mandates' },
      { date: '2021-03-01', event: 'Publicly deflects blame for gas infrastructure failures during post-crisis hearings' },
      { date: '2021-06-08', event: 'Texas Legislature passes SB 3 directing Railroad Commission to set weatherization standards' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Texas Tribune: Railroad Commission Refused Winterization Mandates', url: 'https://www.texastribune.org/2021/02/17/texas-power-grid-failures/', date: '2021-02-17' },
      { title: 'Texas Ethics Commission: Wayne Christian Campaign Finance Records', url: 'https://www.ethics.state.tx.us/search/', date: '2024-01-01' },
      { title: 'FERC/NERC Report on 2011 Texas Cold Weather Event', url: 'https://www.ferc.gov/sites/default/files/2020-04/08-16-11-report.pdf', date: '2011-08-16' },
      { title: 'Houston Chronicle: Railroad Commission Accountability Investigation', url: 'https://www.houstonchronicle.com/news/houston-texas/houston/article/texas-cold-storm-uri-702-702-702-16070470.php', date: '2021-06-01' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Christi Craddick', relationship: 'Fellow Railroad Commissioner who also refused winterization mandates', href: '/entities/individuals/christi-craddick' },
      { name: 'Jim Wright', relationship: 'Fellow Railroad Commissioner who co-voted against mandatory winterization standards', href: '/entities/individuals/jim-wright' },
      { name: 'Greg Abbott', relationship: 'Texas Governor who deflected blame for grid crisis to renewable energy', href: '/entities/individuals/greg-abbott' },
    ],
  },
};

export default profiles;
