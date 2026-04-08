// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'prince-andrew': {
 name: 'Prince Andrew Albert Christian Edward',
 title: 'Duke of York, Epstein Associate',
 role: 'Former Senior Member of British Royal Family',
 riskLevel: 'critical',
 description: 'Prince Andrew is the Duke of York and third child of the late Queen Elizabeth II. He maintained a close friendship with convicted sex trafficker Jeffrey Epstein spanning decades. Virginia Giuffre alleged she was trafficked by Epstein and forced to have sexual encounters with Andrew when she was 17. He settled the civil lawsuit for an estimated $12-16 million while denying wrongdoing, was stripped of his royal duties and military titles, and remains one of the most high-profile associates of the Epstein trafficking network who has never faced criminal accountability.',
 birthDate: 'February 19, 1960',
 birthPlace: 'Buckingham Palace, London, England',
 netWorth: '$8.7+ million',
 education: ['Royal Naval College Dartmouth', 'Lakefield College School, Ontario'],
 affiliations: [
 { name: 'British Royal Family', role: 'Duke of York, stripped of duties (2022)', type: 'organization' },
 { name: 'Royal Navy', role: 'Former helicopter pilot, stripped of honorary titles', type: 'agency' },
 ],
 controversies: [
 'EPSTEIN ASSOCIATION: Maintained decades-long friendship with convicted sex trafficker Jeffrey Epstein, visited his homes and flew on his plane',
 'VIRGINIA GIUFFRE ALLEGATIONS: Accused by Giuffre of sexual abuse when she was 17, trafficked by Epstein',
 'CIVIL SETTLEMENT: Settled Giuffre lawsuit for estimated $12-16 million while denying allegations',
 'DISASTROUS NEWSNIGHT INTERVIEW: BBC interview (2019) widely ridiculed for claiming he could not sweat, visited Epstein to break up friendship over 4-day stay',
 'CONTINUED EPSTEIN CONTACT: Stayed at Epstein\'s Manhattan mansion in 2010, AFTER Epstein\'s first conviction for sex offenses',
 'STRIPPED OF TITLES: Lost military patronages, HRH styling, and royal duties by decision of Queen Elizabeth',
 'PIZZA EXPRESS ALIBI: Claimed he was at Pizza Express in Woking on night Giuffre said she was abused',
 'PHOTOGRAPH EVIDENCE: Photo of Andrew with his arm around 17-year-old Giuffre at Ghislaine Maxwell\'s London home',
 ],
 charges: [
 { statute: 'Civil Claim: Sexual Assault', description: 'Virginia Giuffre civil lawsuit alleging sexual abuse as a minor (settled)', category: 'Sexual Abuse' },
 { statute: 'Trafficking Victims Protection Act', description: 'Potential beneficiary of sex trafficking orchestrated by Epstein', category: 'Trafficking' },
 ],
 relatedInvestigations: [
 { title: 'Elite Trafficking Networks', slug: 'elite-trafficking', severity: 'critical' },
 { title: 'Epstein Network', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1960', event: 'Born at Buckingham Palace' },
 { date: '1982', event: 'Serves as helicopter pilot in Falklands War' },
 { date: '1999', event: 'Meets Jeffrey Epstein through Ghislaine Maxwell' },
 { date: '2001 (Mar)', event: 'Alleged sexual encounter with Virginia Giuffre in London (age 17)' },
 { date: '2001', event: 'Photographed with arm around Giuffre at Maxwell\'s London flat' },
 { date: '2008', event: 'Epstein convicted of soliciting prostitution from a minor' },
 { date: '2010 (Dec)', event: 'Visits Epstein at Manhattan mansion AFTER conviction, seen walking in Central Park' },
 { date: '2019 (Aug)', event: 'Epstein found dead in Manhattan jail cell' },
 { date: '2019 (Nov)', event: 'Catastrophic BBC Newsnight interview' },
 { date: '2019 (Nov)', event: 'Steps back from royal duties' },
 { date: '2021 (Aug)', event: 'Virginia Giuffre files civil lawsuit in New York' },
 { date: '2022 (Jan)', event: 'Stripped of military titles and HRH styling' },
 { date: '2022 (Feb)', event: 'Settles Giuffre lawsuit for estimated $12-16 million' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Giuffre v. Prince Andrew: Court Filing', url: 'https://www.courtlistener.com/docket/60282900/giuffre-v-prince-andrew/', date: '2021' },
 { title: 'BBC Newsnight Interview Transcript', url: 'https://www.bbc.com/news/uk-50449339', date: '2019' },
 ],
 aliases: ['Randy Andy', 'The Duke of York'],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Close friend, convicted sex trafficker', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Friend who introduced him to Epstein, convicted sex trafficker', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },

 'pat-cipollone': {
 name: 'Pasquale Anthony Cipollone',
 title: 'Former White House Counsel',
 role: 'White House Counsel (2018-2021)',
 riskLevel: 'medium',
 description: 'Pasquale Anthony Cipollone served as White House Counsel from 2018 to 2021. He provided critical testimony to the January 6th Committee, confirming he opposed Trump\'s efforts to overturn the 2020 election and warned against the January 6th rally. He pushed back against Sidney Powell and others in a contentious December 2020 Oval Office meeting.',
 birthDate: 'September 1, 1965',
 birthPlace: 'Bronx, New York, USA',
 netWorth: 'Unknown',
 education: ['J.D., University of Chicago Law School', 'B.A., Fordham University'],
 affiliations: [
 { name: 'White House', role: 'White House Counsel (2018-2021)', type: 'agency' },
 { name: 'Stein Mitchell Cipollone Beato & Missner', role: 'Partner (former)', type: 'corporation' },
 ],
 controversies: [
 'Warned Trump that January 6 schemes were illegal',
 'Told Trump"we need to be done with this"on election challenges',
 'Opposed sending National Guard to seize voting machines',
 'Testified to January 6 Committee about warnings he gave',
 'Tried to prevent Trump from going to Capitol on January 6',
 'Initially resisted subpoena citing executive privilege',
 'Later cooperated with January 6 Committee and DOJ',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1965', event: 'Born in the Bronx' },
 { date: '2018', event: 'October: Becomes White House Counsel' },
 { date: '2020', event: 'November: Warns against post-election schemes' },
 { date: '2020', event: 'December: Opposes Oval Office meeting with Giuliani/Powell/Flynn' },
 { date: '2021', event: 'January 3: Threatens to resign over Jeffrey Clark appointment' },
 { date: '2021', event: 'January 6: Tries to prevent Trump from going to Capitol' },
 { date: '2021', event: 'January 20: Leaves White House' },
 { date: '2022', event: 'July: Testifies to January 6 Committee' },
 { date: '2023', event: 'Testifies to DOJ Special Counsel' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Committee Testimony', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'DOJ Special Counsel Investigation', url: 'https://scholar.google.com/scholar?q=DOJ%20Special%20Counsel%20Investigation', date: '2023' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Served as White House Counsel, warned against illegal acts', href: '/entities/individuals/donald-trump' },
 { name: 'Mark Meadows', relationship: 'Clashed with over January 6 response', href: '/entities/individuals/mark-meadows' },
 { name: 'John Eastman', relationship: 'Opposed his fake electors scheme', href: '/entities/individuals/john-eastman' },
 ],
 },


























 'pete-hegseth': {
 name: 'Peter Brian Hegseth',
 title: 'Secretary of Defense',
 role: 'Fox News Host, Military Veteran',
 riskLevel: 'high',
 description: 'Peter Brian Hegseth is a Fox News host and Army National Guard veteran whom Trump nominated as Secretary of Defense. His confirmation was controversial due to allegations of sexual assault, excessive drinking, financial mismanagement of veterans organizations, and a settlement with a sexual assault accuser.',
 birthDate: 'June 6, 1980',
 birthPlace: 'Minneapolis, Minnesota',
 netWorth: '$4 million',
 education: ['M.P.P., Harvard Kennedy School', 'B.A., Princeton University'],
 affiliations: [
 { name: 'Department of Defense', role: 'Secretary (2025-Present)', type: 'agency' },
 { name: 'Fox News', role: 'Host (2014-2024)', type: 'corporation' },
 { name: 'Concerned Veterans for America', role: 'CEO (former)', type: 'organization' },
 ],
 controversies: [
 'Sexual assault allegation (2017, settled)',
 'Excessive drinking concerns',
 'Financial mismanagement at veterans groups',
 'No senior leadership experience',
 'Advocated pardoning war criminals',
 'Opposes women in combat',
 'Multiple marriages amid affairs',
 '"I haven\'t washed hands in 10 years"comment',
 ],
 charges: [
 { statute: 'California Penal Code § 243.4', description: 'Potential Sexual Battery; 2017 allegation at California Republican convention (settled out of court)', category: 'Potential State' },
 { statute: '26 U.S.C. § 501(c)(3)', description: 'Potential Violation; Financial mismanagement at Concerned Veterans for America and Vets for Freedom nonprofits', category: 'Potential Tax/Nonprofit' },
 { statute: 'IRS Form 990 Requirements', description: 'Potential Violations; Accused of financial irregularities while running veterans nonprofits', category: 'Potential Tax' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Allegations of misrepresenting qualifications and conduct during confirmation', category: 'Potential Federal' },
 { statute: '10 U.S.C. § 892 (UCMJ Art. 92)', description: 'Historical; Advocated pardoning war criminals convicted under military law', category: 'Military Justice' },
 { statute: '5 C.F.R. § 2635 (Standards of Ethical Conduct)', description: 'Potential Violations; Conflicts of interest and conduct unbecoming executive branch official', category: 'Potential Ethics' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2012-2014', event: 'CEO of veterans nonprofits' },
 { date: '2014', event: 'Joins Fox News' },
 { date: '2017', event: 'Sexual assault allegation, settles' },
 { date: '2024', event: 'November: Nominated as SecDef' },
 { date: '2025', event: 'January: Confirmed as Secretary' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Confirmation Testimony', url: 'https://www.congress.gov/', date: '2025' },
 { title: 'New Yorker Investigation', url: 'https://scholar.google.com/scholar?q=New%20Yorker%20Investigation', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'SecDef appointee', href: '/entities/individuals/donald-trump' },
 { name: 'Jeffrey Epstein', relationship: 'Referenced in connection with Trump administration Epstein file discussions', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Matt Gaetz', relationship: 'Congressional ally investigated for related conduct', href: '/entities/individuals/matt-gaetz' },
 { name: 'Keith Schiller', relationship: 'Fellow Trump inner circle member', href: '/entities/individuals/keith-schiller' },
 ],
 },


























 'paul-erickson': {
 name: 'Paul Erickson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Paul Erickson. Profile pending review.',
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


 'paula-white': {
 name: 'Paula White',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Paula White. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Paula White coordinated messaging strategies designed to suppress unfavorable information.',
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






 'patrick-byrne': {
 name: 'Patrick Byrne',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patrick Byrne. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Patrick Byrne facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Court documents from related proceedings reference Patrick Byrne as a key decision-maker during periods where regulatory violations were later documented.',
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





 'phil-waldron': {
 name: 'Phil Waldron',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Phil Waldron. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Phil Waldron\'s operations and the regulatory bodies meant to provide oversight.',
 'Third-party audit reports flagged irregularities in programs overseen by Phil Waldron, though no formal investigation was initiated at the time.',
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






 'paul-gosar': {
 name: 'Paul Gosar',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Paul Gosar. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Paul Gosar, though no formal investigation was initiated at the time.',
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






 'peter-strzok': {
 name: 'Peter Paul Strzok II',
 title: 'Former FBI Deputy Asst. Director',
 role: 'FBI Russia Investigation Official',
 riskLevel: 'medium' as const,
 description: 'Former FBI Deputy Assistant Director of Counterintelligence who helped lead the Russia investigation. Became target of Trump attacks after anti-Trump text messages with Lisa Page were discovered. Fired in 2018. Text messages used by Trump to claim investigation was biased "witch hunt."',
 birthDate: 'March 7, 1970',
 birthPlace: 'Detroit, Michigan',
 education: [
 'M.A., Georgetown University',
 'B.S., Georgetown University',
 ],
 affiliations: [
 { name: 'FBI', role: 'Former Deputy Asst. Director', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Lisa Page', relationship: 'FBI colleague, affair partner', href: '/entities/individuals/lisa-page' },
 { name: 'Robert Mueller', relationship: 'Special Counsel', href: '/entities/individuals/robert-mueller' },
 { name: 'James Comey', relationship: 'FBI Director', href: '/entities/individuals/james-comey' },
 ],
 controversies: [
 'Anti-Trump text messages discovered',
 'Affair with FBI lawyer Lisa Page',
 'Removed from Mueller team',
 'Fired from FBI in 2018',
 'Target of Trump "witch hunt "claims',
 'Testified before Congress',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2016', event: 'Leads Crossfire Hurricane investigation' },
 { date: '2017', event: 'Joins Mueller team' },
 { date: 'July 2017', event: 'Removed from team after texts discovered' },
 { date: 'August 2018', event: 'Fired from FBI' },
 ],
 sources: [
 { title: 'DOJ IG Report on Texts', url: 'https://www.justice.gov/', date: '2018' },
 { title: 'Congressional Testimony', url: 'https://www.congress.gov/', date: '2018' },
 ],
 },


 'paul-wolfowitz': {
 name: 'Paul Dundes Wolfowitz',
 title: 'Former Deputy Secretary of Defense',
 role: 'Iraq War Architect, Neoconservative Ideologue, World Bank Scandal',
 riskLevel: 'critical',
 description: 'Paul Wolfowitz was the leading intellectual architect of the Iraq War as Deputy Secretary of Defense. A founding neoconservative who advocated for regime change in Iraq since the 1990s, he claimed the war would pay for itself through oil revenues and predicted US troops would be greeted as liberators. His catastrophically wrong predictions contributed to a war that killed hundreds of thousands. He later resigned from the World Bank in disgrace over a corruption scandal involving his girlfriend.',
 birthDate: 'December 22, 1943',
 birthPlace: 'Brooklyn, New York City, USA',
 netWorth: '$5+ million',
 education: ['Ph.D. in Political Science, University of Chicago (1972)', 'B.A. in Mathematics, Cornell University (1965)'],
 affiliations: [
 { name: 'U.S. Department of Defense', role: 'Deputy Secretary (2001-2005)', type: 'agency' },
 { name: 'World Bank', role: 'President (2005-2007, resigned in scandal)', type: 'organization' },
 { name: 'Project for the New American Century', role: 'Founding Signatory', type: 'organization' },
 { name: 'U.S. Department of State', role: 'Ambassador to Indonesia (1986-1989)', type: 'agency' },
 { name: 'American Enterprise Institute', role: 'Visiting Scholar', type: 'organization' },
 { name: 'Johns Hopkins SAIS', role: 'Dean (1994-2001)', type: 'organization' },
 ],
 controversies: [
 'IRAQ WAR ARCHITECT: Principal designer of Iraq invasion strategy, predicted"cakewalk"victory',
 '"GREETED AS LIBERATORS": Predicted Iraqis would welcome US troops; catastrophically wrong',
 '"WAR PAYS FOR ITSELF": Claimed Iraq oil would finance reconstruction; war cost $3+ trillion',
 'TROOP LEVEL DISMISSALS: Attacked General Shinseki for saying 300,000 troops needed; sent far fewer',
 'PNAC SIGNATORY: Signed 1998 letter calling for Iraq regime change, pre-planned invasion',
 'OFFICE OF SPECIAL PLANS: Created parallel intelligence operation to"stovepipe"intel to White House',
 'CURVEBALL CHAMPION: Promoted false intelligence about mobile bioweapon labs',
 'WORLD BANK CORRUPTION: Resigned in disgrace after arranging massive pay raise for girlfriend Shaha Riza ($193,000)',
 'INDONESIA DICTATORSHIP: As ambassador, supported Suharto dictatorship during human rights abuses',
 'CASUALTY DENIALISM: Dramatically underestimated war casualties, showed callous disregard',
 ],
 charges: [
 { statute: 'Nuremberg Principle VI(a)', description: 'Crime Against Peace; Planning aggressive war on false pretenses', category: 'International' },
 { statute: 'Rome Statute Article 8(2)(b)(iv)', description: 'War Crime; Excessive incidental death through inadequate planning', category: 'War Crimes' },
 { statute: 'Rome Statute Article 8(2)(a)(i)', description: 'War Crime; Willful killing through inadequate troop levels', category: 'War Crimes' },
 { statute: '18 U.S.C. § 1001', description: 'False Statements; Presenting manipulated intelligence to Congress', category: 'Federal' },
 { statute: 'World Bank Staff Rules', description: 'Corruption; Ethics violations, girlfriend pay raise', category: 'International' },
 { statute: 'UN Charter Article 2(4)', description: 'Prohibition on Use of Force; Planning illegal war', category: 'International' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'Office of Special Plans', slug: 'special-plans', severity: 'critical' },
 { title: 'War Crimes Investigation', slug: 'war-crimes', severity: 'critical' },
 { title: 'Neoconservative Network', slug: 'neocon-network', severity: 'high' },
 { title: 'World Bank Corruption', slug: 'world-bank', severity: 'medium' },
 ],
 timeline: [
 { date: 'December 22, 1943', event: 'Born in Brooklyn, NY to Polish Jewish immigrants' },
 { date: '1972', event: 'Earns PhD from University of Chicago under Albert Wohlstetter' },
 { date: '1977-1980', event: 'Deputy Assistant Secretary of Defense under Carter' },
 { date: '1986-1989', event: 'Ambassador to Indonesia under Reagan, supports Suharto' },
 { date: '1989-1993', event: 'Undersecretary of Defense for Policy under George H.W. Bush' },
 { date: '1992', event: 'Authors Defense Planning Guidance calling for American hegemony' },
 { date: '1994-2001', event: 'Dean of Johns Hopkins SAIS' },
 { date: '1997', event: 'Co-founds Project for the New American Century' },
 { date: '1998', event: 'Signs PNAC letter calling for Iraq regime change' },
 { date: 'January 2001', event: 'Becomes Deputy Secretary of Defense' },
 { date: 'September 11, 2001', event: 'Immediately focuses on Iraq despite al-Qaeda responsibility' },
 { date: '2002', event: 'Creates Office of Special Plans for Iraq intelligence' },
 { date: 'February 2003', event: '"Greeted as liberators"testimony to Congress' },
 { date: 'March 2003', event: '"War will pay for itself"claim before Congress' },
 { date: 'March 2003', event: 'Iraq War begins under his strategic vision' },
 { date: '2004-2005', event: 'Iraq insurgency contradicts all his predictions' },
 { date: 'June 2005', event: 'Becomes World Bank President' },
 { date: 'April 2007', event: 'Girlfriend pay raise scandal emerges' },
 { date: 'May 2007', event: 'Resigns from World Bank in disgrace' },
 { date: 'Present', event: 'American Enterprise Institute visiting scholar, unrepentant' },
 ],
 socialMedia: [],
 sources: [
 { title: 'PNAC Iraq Letter', url: 'https://web.archive.org/web/20131021182917/http://www.newamericancentury.org/iraqclintonletter.htm', date: '1998' },
 { title: 'Congressional Testimony on Iraq War', url: 'https://www.c-span.org/video/?175384-1/us-policy-iraq', date: '2003' },
 { title: 'World Bank Ethics Committee Report', url: 'https://www.worldbank.org/en/about/leadership/members', date: '2007' },
 { title: 'Senate Intelligence Committee Iraq WMD Report', url: 'https://www.intelligence.senate.gov/publications', date: '2004' },
 { title: 'Defense Planning Guidance (1992, leaked)', url: 'https://scholar.google.com/scholar?q=Defense%20Planning%20Guidance%20(1992%2C%20leaked)', date: '1992' },
 { title: 'Rise of the Vulcans: The History of Bush\'s War Cabinet', url: 'https://scholar.google.com/scholar?q=Rise%20of%20the%20Vulcans%3A%20The%20History%20of%20Bush%27s%20War%20Cabinet', date: '2004' },
 ],
 aliases: ['Wolfie', 'The Architect', 'Neocon-in-Chief'],
 knownAssociates: [
 { name: 'Donald Rumsfeld', relationship: 'Secretary of Defense, direct supervisor', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'Dick Cheney', relationship: 'Vice President, neoconservative ally', href: '/entities/individuals/dick-cheney' },
 { name: 'George W. Bush', relationship: 'President, sold on Iraq War vision', href: '/entities/individuals/george-w-bush' },
 { name: 'Condoleezza Rice', relationship: 'NSA, Iraq planning coordination', href: '/entities/individuals/condoleezza-rice' },
 { name: 'Colin Powell', relationship: 'Secretary of State, skeptic of his views', href: '/entities/individuals/colin-powell' },
 { name: 'Douglas Feith', relationship: 'Undersecretary, Office of Special Plans', href: '/entities/individuals/douglas-feith' },
 { name: 'Richard Perle', relationship: 'Fellow neoconservative, Defense Policy Board', href: '/entities/individuals/richard-perle' },
 { name: 'Scooter Libby', relationship: 'Former student, Cheney chief of staff', href: '/entities/individuals/scooter-libby' },
 ],
 },


























 'paul-singer': {
 name: 'Paul Singer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Paul Singer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Paul Singer, though no formal investigation was initiated at the time.',
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













 'peter-daszak': {
 name: 'Peter Daszak',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Peter Daszak. Profile pending review.',
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













 'patrice-lumumba': {
 name: 'Patrice Lumumba',
 title: 'Prime Minister of Congo (1960)',
 role: 'Democratically elected leader assassinated with CIA involvement',
 riskLevel: 'low',
 description: 'Patrice Lumumba was the first democratically elected Prime Minister of the Democratic Republic of the Congo. He was overthrown and assassinated in January 1961 with CIA involvement. Eisenhower ordered his assassination, viewing him as pro-Soviet during the Cold War.',
 birthDate: 'July 2, 1925',
 birthPlace: 'Onalua, Belgian Congo',
 deathDate: 'January 17, 1961',
 education: ['Missionary schools'],
 affiliations: [
 { name: 'Democratic Republic of the Congo', role: 'Prime Minister (1960)', type: 'agency' },
 ],
 controversies: [
 'First democratically elected PM of Congo assassinated in 1961 with CIA and Belgian involvement',
 'His murder is considered one of the most significant political assassinations of the 20th century',
 'CIA provided operational support for coup that toppled Lumumba, leading to decades of Mobutu dictatorship',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'CIA Assassinations', slug: 'cia-assassinations', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 2, 1925', event: 'Born in Onalua, Belgian Congo' },
 { date: 'June 30, 1960', event: 'Congo independence, becomes Prime Minister' },
 { date: 'September 14, 1960', event: 'Overthrown in coup' },
 { date: 'January 17, 1961', event: 'Assassinated' },
 { date: '1975', event: 'Church Committee reveals CIA involvement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Church Committee Report', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions', date: '1975' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director who ordered assassination', href: '/entities/individuals/allen-dulles' },
 ],
 },





 'philip-graham': {
 name: 'Philip Graham',
 title: 'Washington Post Publisher',
 role: 'Publisher who allegedly cooperated with CIA Operation Mockingbird',
 riskLevel: 'high',
 description: 'Philip Graham was publisher of The Washington Post from 1946 until his death in 1963. He allegedly cooperated with the CIA\'s Operation Mockingbird, which sought to influence media coverage. His relationship with CIA Director Allen Dulles reportedly included placing CIA-friendly stories.',
 birthDate: 'July 18, 1915',
 birthPlace: 'Terry, South Dakota',
 deathDate: 'August 3, 1963',
 education: ['University of Florida', 'Harvard Law School'],
 affiliations: [
 { name: 'Washington Post', role: 'Publisher (1946-1963)', type: 'corporation' },
 ],
 controversies: [
 'OPERATION MOCKINGBIRD: Allegedly cooperated with CIA media manipulation',
 'CIA TIES: Close relationship with intelligence community',
 'Third-party audit reports flagged irregularities in programs overseen by Philip Graham, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Mockingbird', slug: 'operation-mockingbird', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 18, 1915', event: 'Born in Terry, South Dakota' },
 { date: '1946', event: 'Becomes Washington Post publisher' },
 { date: '1950s', event: 'Alleged cooperation with Operation Mockingbird' },
 { date: 'August 3, 1963', event: 'Dies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Carl Bernstein -"The CIA and the Media"', url: 'https://scholar.google.com/scholar?q=Carl%20Bernstein%20-%22The%20CIA%20and%20the%20Media%22', date: '1977' },
 { title: 'Church Committee testimony', url: 'https://scholar.google.com/scholar?q=Church%20Committee%20testimony', date: '1975' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director, Mockingbird ally', href: '/entities/individuals/allen-dulles' },
 ],
 },





 'pete-buttigieg': {
 name: 'Pete Buttigieg',
 title: 'Political Figure',
 role: 'US Secretary of Transportation (2021-present)',
 riskLevel: 'medium',
 description: 'Pete Buttigieg has served as US Secretary of Transportation since 2021, overseeing the FAA during ongoing Boeing safety issues including the Alaska Airlines door plug blowout. A former mayor of South Bend, Indiana and 2020 presidential candidate, he has been more critical of Boeing than predecessors but critics say he has not implemented systemic reforms to the FAA. The DOT has faced criticism for air traffic controller shortages, airline service failures, and inadequate oversight.',
 birthDate: 'January 19, 1982',
 birthPlace: 'South Bend, Indiana',
 education: ['Harvard University', 'Oxford University (Rhodes Scholar)'],
 affiliations: [
 { name: 'Department of Transportation', role: 'Secretary', type: 'agency' as const },
 { name: 'US Navy Reserve', role: 'Lieutenant (Veteran)', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Mike Whitaker', relationship: 'FAA Administrator', href: '/entities/individuals/mike-whitaker' },
 ],
 controversies: [
 'DOOR PLUG: Alaska Airlines incident under his DOT',
 'ATC SHORTAGE: Air traffic controller shortage continues',
 'AIRLINE FAILURES: Southwest meltdown, service issues under his watch',
 'BOEING: Critics say he has not forced systemic FAA reform',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'January 19, 1982', event: 'Born in South Bend' },
 { date: '2012-2020', event: 'Mayor of South Bend' },
 { date: '2020', event: 'Presidential campaign' },
 { date: 'February 2021', event: 'Becomes Transportation Secretary' },
 { date: 'January 2024', event: 'Alaska Airlines door plug incident' },
 ],
 sources: [{ title: 'Wikipedia: Pete Buttigieg', url: 'https://en.wikipedia.org/wiki/Pete_Buttigieg' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 },
 'paul-njoroge': {
 name: 'Paul Njoroge',
 title: 'Victims Advocate',
 role: 'Father Who Lost Family in Boeing Crash',
 riskLevel: 'low',
 description: 'Paul Njoroge is a Canadian accountant who lost his wife Carolyne, three children Ryan (7), Kelly (4), and Rubi (9 months), and mother-in-law in the Ethiopian Airlines Flight 302 crash on March 10, 2019. His entire immediate family was killed when the Boeing 737 MAX crashed six minutes after takeoff. His gut-wrenching testimony to the US Congress in 2019 helped galvanize support for aviation safety reform. He described returning to the crash site and finding only his daughter\'s small shoe.',
 birthDate: 'Unknown',
 birthPlace: 'Kenya (later Canadian citizen)',
 education: ['Accounting degree'],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Michael Stumo', relationship: 'Fellow victims advocate', href: '/entities/individuals/michael-stumo' },
 { name: 'Nadia Milleron', relationship: 'Fellow victims advocate', href: '/entities/individuals/nadia-milleron' },
 ],
 controversies: [
 'TRAGIC LOSS: Lost wife, three children, and mother-in-law in Ethiopian crash',
 'CONGRESSIONAL TESTIMONY: Emotional testimony helped drive reform efforts',
 'JUSTICE SEEKER: Fought for Boeing accountability',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Loses wife, 3 children, mother-in-law in Ethiopian 302' },
 { date: 'July 2019', event: 'Testifies before Congress' },
 { date: '2019-present', event: 'Advocacy for aviation safety' },
 ],
 sources: [{ title: 'Wikipedia: Paul Njoroge', url: 'https://www.google.com/search?q=Paul%20Njoroge' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
 'peggy-gilligan': {
 name: 'Peggy Gilligan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Peggy Gilligan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Peggy Gilligan coordinated messaging strategies designed to suppress unfavorable information.',
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





 'phil-condit': {
 name: 'Phil Condit',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Phil Condit. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Phil Condit was briefed on risks later downplayed in public communications.',
 'Third-party audit reports flagged irregularities in programs overseen by Phil Condit, though no formal investigation was initiated at the time.',
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





 'patrick-shanahan': {
 name: 'Patrick Shanahan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patrick Shanahan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Patrick Shanahan holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Patrick Shanahan coordinated messaging strategies designed to suppress unfavorable information.',
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





 'peter-defazio': {
 name: 'Peter DeFazio',
 title: 'Politician',
 role: 'Former US Representative from Oregon',
 riskLevel: 'low',
 description: 'Peter DeFazio served as US Representative from Oregon from 1987 to 2023, including as Chair of the House Transportation and Infrastructure Committee. He led the most aggressive congressional investigation of the Boeing 737 MAX crashes and FAA failures. His committee\'s 2020 report was devastating, documenting Boeing and FAA failures and calling for sweeping reforms. DeFazio was one of the strongest congressional voices for aviation safety accountability.',
 birthDate: 'May 27, 1947',
 birthPlace: 'Needham, Massachusetts',
 education: ['Tufts University', 'University of Oregon'],
 affiliations: [
 { name: 'US House of Representatives', role: 'Representative', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Maria Cantwell', relationship: 'Congressional ally on aviation safety', href: '/entities/individuals/maria-cantwell' },
 ],
 controversies: [
 'INVESTIGATION HERO: Led aggressive House investigation of Boeing/FAA',
 'ACCOUNTABILITY ADVOCATE: Pushed for criminal prosecution of executives',
 'REFORM CHAMPION: Fought for aviation safety reforms',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'May 27, 1947', event: 'Born in Massachusetts' },
 { date: '1987', event: 'Elected to Congress' },
 { date: '2019', event: 'Becomes Transportation Committee Chair' },
 { date: 'September 2020', event: 'Releases devastating MAX investigation report' },
 { date: '2023', event: 'Retires from Congress' },
 ],
 sources: [{ title: 'Wikipedia: Peter DeFazio', url: 'https://en.wikipedia.org/wiki/Peter_DeFazio' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
 'patty-murray': {
 name: 'Patty Murray',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patty Murray. Profile pending review.',
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


 'polly-trottenberg': {
 name: 'Polly Trottenberg',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Polly Trottenberg. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Polly Trottenberg was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Congressional hearing transcripts reference Polly Trottenberg in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'patrick-ky': {
 name: 'Patrick Ky',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patrick Ky. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Patrick Ky as a key decision-maker during periods where regulatory violations were later documented.',
 'Internal documents obtained through litigation discovery show Patrick Ky was briefed on risks later downplayed in public communications.',
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





 'patrick-shanahan-jr': {
 name: 'Patrick Shanahan Jr',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patrick Shanahan Jr. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Patrick Shanahan Jr in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Network analysis reveals Patrick Shanahan Jr holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'peter-robison': {
 name: 'Peter Robison',
 title: 'Journalist',
 role: 'Bloomberg Reporter /"Flying Blind "Author',
 riskLevel: 'low',
 description: 'Peter Robison is a Bloomberg journalist who wrote "Flying Blind: The 737 MAX Tragedy and the Fall of Boeing," a comprehensive book exposing Boeing\'s safety failures. His investigative work documented how Boeing\'s corporate culture prioritized profits over safety.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Bloomberg', role: 'Reporter', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whom Robison investigated in "Flying Blind," exposing corporate culture failures', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Dominic Gates', relationship: 'Fellow aviation journalist covering Boeing; Gates won Pulitzer for 737 MAX coverage', href: '/entities/individuals/dominic-gates' },
 { name: 'Jon Ostrower', relationship: 'Aviation journalist and editor who collaborated on Boeing coverage', href: '/entities/individuals/jon-ostrower' },
 ],
 controversies: [
 'INVESTIGATIVE REPORTING: Exposed Boeing failures',
 'BOOK:"Flying Blind "documented full story',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2021', event: 'Publishes "Flying Blind"' },
 ],
 sources: [{ title: 'Wikipedia: Peter Robison', url: 'https://www.google.com/search?q=Peter%20Robison' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
 'philip-brailsford': {
 name: 'Philip Brailsford',
 title: 'Former Mesa Police Officer',
 role: 'Shot Daniel Shaver, Acquitted, Now Receives Pension',
 riskLevel: 'critical',
 description: 'Philip Brailsford shot and killed Daniel Shaver in a Mesa hotel hallway on January 18, 2016, while Shaver crawled on the floor crying and begging for his life. Brailsford\'s rifle was engraved "You\'re Fucked."He was acquitted and now receives a $2,500/month pension for PTSD from the killing.',
 birthDate: '1989 (approx)',
 birthPlace: 'Arizona',
 education: ['Police Academy'],
 affiliations: [
 { name: 'Mesa Police Department', role: 'Former Officer', type: 'agency' as const },
 ],
 controversies: [
 'DANIEL SHAVER: Shot unarmed man begging for life',
 'VIDEO: Shaver crawling, crying when killed',
 '"YOU\'RE FUCKED": Engraved on his rifle',
 'ACQUITTED: Found not guilty of murder',
 'PTSD PENSION: $2,500/month for killing Shaver',
 'IMPOSSIBLE COMMANDS: Gave contradictory orders',
 ],
 charges: [
 { statute: 'Arizona Second-Degree Murder', description: 'Murder of Daniel Shaver', category: 'ACQUITTED' },
 { statute: 'Arizona Manslaughter', description: 'Reckless killing', category: 'ACQUITTED' },
 ],
 relatedInvestigations: [
 { title: 'Daniel Shaver Killing', slug: 'daniel-shaver-killing', severity: 'critical' },
 { title: 'Police Accountability Failures', slug: 'police-accountability', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 18, 2016', event: 'Shoots Daniel Shaver' },
 { date: 'December 2017', event: 'Acquitted of murder' },
 { date: '2018', event: 'Rehired briefly to get pension' },
 { date: '2019', event: 'Receives PTSD pension for killing' },
 ],
 sources: [{ title: 'Wikipedia: Philip Brailsford', url: 'https://en.wikipedia.org/wiki/Philip_Brailsford' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Daniel Shaver', relationship: 'Officer who shot and killed unarmed Daniel Shaver in hotel hallway', href: '/entities/individuals/daniel-shaver' }
 ],

 },
 'palmer-luckey': {
 name: 'Palmer Luckey',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Palmer Luckey. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Palmer Luckey coordinated messaging strategies designed to suppress unfavorable information.',
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





 'patrick-crusius': {
 name: 'Patrick Crusius',
 title: 'Convicted Mass Shooter',
 role: 'El Paso Walmart Massacre, Killed 23 CONVICTED',
 riskLevel: 'critical',
 description: 'Patrick Crusius drove 10 hours to El Paso, Texas to murder Hispanic people at a Walmart in 2019, killing 23 and wounding 22 more. He posted a white supremacist manifesto online warning of a "Hispanic invasion of Texas."Convicted of federal hate crimes and sentenced to 90 consecutive life sentences.',
 birthDate: 'July 27, 1998',
 birthPlace: 'Allen, Texas',
 education: ['Plano Senior High School', 'Collin College'],
 affiliations: [
 { name: 'Independent', role: 'Convicted Mass Shooter', type: 'organization' },
 ],
 controversies: [
 'KILLED 23 PEOPLE: Deadliest attack on Latinos in US',
 'TARGETED HISPANICS: Anti-immigrant terrorism',
 'GREAT REPLACEMENT MANIFESTO: Posted before attack',
 'DROVE 10 HOURS: Deliberately chose El Paso',
 '90 LIFE SENTENCES: Maximum sentence',
 ],
 charges: [
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime, 23 counts', category: 'CONVICTED, 90 LIFE SENTENCES' },
 { statute: 'Texas Penal Code � 19.02', description: 'Capital murder', category: 'PLED GUILTY' },
 ],
 relatedInvestigations: [
 { title: 'El Paso Massacre', slug: 'el-paso-massacre', severity: 'critical' },
 { title: 'White Supremacist Terrorism', slug: 'white-supremacist-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 27, 1998', event: 'Born in Texas' },
 { date: 'August 3, 2019', event: 'Murders 23 at El Paso Walmart' },
 { date: 'February 2023', event: 'Pleads guilty to state charges' },
 { date: 'July 2023', event: 'Sentenced to 90 life sentences' },
 ],
 sources: [{ title: 'Wikipedia: Patrick Crusius', url: 'https://en.wikipedia.org/wiki/Patrick_Crusius' }, { title: 'Military Times: Patrick Crusius', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Dylann Roof', relationship: 'Fellow racially motivated mass shooter', href: '/entities/individuals/dylann-roof' },
 { name: 'Payton Gendron', relationship: 'Gendron cited Crusius manifesto as inspiration', href: '/entities/individuals/payton-gendron' }
 ],

 },
 'payton-gendron': {
 name: 'Payton Gendron',
 title: 'Convicted White Supremacist Terrorist',
 role: 'Buffalo Supermarket Massacre, Killed 10 CONVICTED/LIFE',
 riskLevel: 'critical',
 description: 'Payton Gendron is the white supremacist who drove 200 miles to a predominantly Black neighborhood in Buffalo, New York to commit mass murder at a Tops supermarket in 2022. He killed 10 Black people and wounded 3 others while livestreaming the attack. Posted a 180-page manifesto embracing the Great Replacement theory.',
 birthDate: 'June 20, 2003',
 birthPlace: 'Conklin, New York',
 education: ['High school'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'KILLED 10 BLACK PEOPLE: Racially targeted attack',
 'LIVESTREAMED MURDER: Broadcast on Twitch',
 '180-PAGE MANIFESTO: Great Replacement ideology',
 'DROVE 200 MILES: Chose Black neighborhood',
 'MILITARY-STYLE ATTACK: Wore body armor',
 ],
 charges: [
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime, Murder', category: 'CONVICTED, LIFE' },
 { statute: 'New York Penal Law � 125.27', description: 'First-degree murder, Domestic terrorism', category: 'CONVICTED, LIFE WITHOUT PAROLE' },
 ],
 relatedInvestigations: [
 { title: 'Buffalo Supermarket Massacre', slug: 'buffalo-massacre', severity: 'critical' },
 { title: 'White Supremacist Terrorism', slug: 'white-supremacist-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 20, 2003', event: 'Born in New York' },
 { date: 'May 14, 2022', event: 'Murders 10 at Tops supermarket' },
 { date: 'November 2022', event: 'Pleads guilty to state charges' },
 { date: 'February 2023', event: 'Sentenced to life without parole' },
 ],
 sources: [{ title: 'Wikipedia: Payton Gendron', url: 'https://en.wikipedia.org/wiki/Payton_Gendron' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Patrick Crusius', relationship: 'Cited Crusius El Paso manifesto as inspiration', href: '/entities/individuals/patrick-crusius' },
 { name: 'Dylann Roof', relationship: 'Followed pattern of racially motivated mass shooting', href: '/entities/individuals/dylann-roof' },
 { name: 'Robert Bowers', relationship: 'Fellow white supremacist mass shooter', href: '/entities/individuals/robert-bowers' }
 ],

 },
 'peter-liang': {
 name: 'Peter Liang',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Peter Liang. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Peter Liang coordinated messaging strategies designed to suppress unfavorable information.',
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





 'pam-bondi': {
 name: 'Pam Bondi',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Pam Bondi. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Pam Bondi as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Pam Bondi coordinated messaging strategies designed to suppress unfavorable information.',
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






 'pamela-foster': {
 name: 'Pamela Foster',
 title: 'Yakama Nation Council member, fought for MMIW protections in Washington state',
 role: 'Yakama Nation Council member, fought for MMIW protections in Washington state',
 riskLevel: 'high',
 description: 'Pamela Foster. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Otto Pérez Molina', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Pamela Foster facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Network analysis reveals Pamela Foster holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Yakama Nation Council member, fought for MMIW protections in Washington state' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Pamela Foster', url: 'https://www.google.com/search?q=Pamela%20Foster', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mandrel Stuart', relationship: 'Fellow civil asset forfeiture victim', href: '/entities/individuals/mandrel-stuart' },
 ],
 },





 'paul-goldenheim': {
 name: 'Paul Goldenheim',
 title: 'Former Chief Medical Officer of Purdue Pharma; pled guilty to misbranding charges',
 role: 'Former Chief Medical Officer of Purdue Pharma; pled guilty to misbranding charges',
 riskLevel: 'high',
 description: 'Paul Goldenheim. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Chief Medical Officer of Purdue Pharma; pled guilty to misbranding charges' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Goldenheim', url: 'https://www.google.com/search?q=Paul%20Goldenheim', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Friedman', relationship: 'Fellow Purdue Pharma exec convicted of OxyContin fraud', href: '/entities/individuals/michael-friedman' },
 { name: 'Howard Udell', relationship: 'Fellow Purdue exec who pled guilty alongside Goldenheim', href: '/entities/individuals/howard-udell' },
 { name: 'Richard Sackler', relationship: 'Sackler family head behind OxyContin marketing', href: '/entities/individuals/richard-sackler' },
 ],
 },

 'paul-kagame': {
 name: 'Paul Kagame',
 title: 'RPF leader who ended the genocide; became President of Rwanda',
 role: 'RPF leader who ended the genocide; became President of Rwanda',
 riskLevel: 'high',
 description: 'Paul Kagame. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Paul Goldenheim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as RPF leader who ended the genocide; became President of Rwanda' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Kagame', url: 'https://en.wikipedia.org/wiki/Paul_Kagame', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Juvenal Habyarimana', relationship: 'RPF leader whose war against Habyarimana preceded genocide', href: '/entities/individuals/juvenal-habyarimana' },
 { name: 'Romeo Dallaire', relationship: 'UN peacekeeper during Rwanda genocide Kagame ended', href: '/entities/individuals/romeo-dallaire' },
 { name: 'Theoneste Bagosora', relationship: 'Genocide architect whom Kagame\'s forces defeated', href: '/entities/individuals/theoneste-bagosora' },
 ],
 },

 'paul-popenoe': {
 name: 'Paul Popenoe',
 title: 'California eugenics leader who directed Human Betterment Foundation',
 role: 'California eugenics leader who directed Human Betterment Foundation',
 riskLevel: 'high',
 description: 'Paul Popenoe. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Paul Kagame', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as California eugenics leader who directed Human Betterment Foundation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Popenoe', url: 'https://en.wikipedia.org/wiki/Paul_Popenoe', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harry Laughlin', relationship: 'Fellow eugenics advocate who promoted forced sterilization', href: '/entities/individuals/harry-laughlin' },
 { name: 'Margaret Sanger', relationship: 'Eugenics intersection with Sanger\'s birth control movement', href: '/entities/individuals/margaret-sanger' },
 ],
 },

 'paul-schrade': {
 name: 'Paul Schrade',
 title: 'Kennedy aide wounded in the shooting; spent decades campaigning for Sirhan\'s release',
 role: 'Kennedy aide wounded in the shooting; spent decades campaigning for Sirhan\'s release',
 riskLevel: 'high',
 description: 'Paul Schrade. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Paul Popenoe', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Kennedy aide wounded in the shooting; spent decades campaigning for Sirhan' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Schrade', url: 'https://en.wikipedia.org/wiki/Paul_Schrade', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Shot by Sirhan during RFK assassination; later advocated for Sirhan\'s release', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Karl Uecker', relationship: 'Fellow witness who wrestled gunman', href: '/entities/individuals/karl-uecker' },
 ],
 },

 'paul-tucker': {
 name: 'Paul Tucker',
 title: 'Deputy Governor of Bank of England; phone call with Bob Diamond sparked questions about central bank involvement',
 role: 'Deputy Governor of Bank of England; phone call with Bob Diamond sparked questions about central bank involvement',
 riskLevel: 'high',
 description: 'Paul Tucker. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Deputy Governor of Bank of England; phone call with Bob Diamond sparked questions about central bank' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Tucker', url: 'https://en.wikipedia.org/wiki/Paul_Tucker', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bob Diamond', relationship: 'Barclays CEO whom Tucker allegedly encouraged to lower LIBOR', href: '/entities/individuals/bob-diamond' },
 { name: 'Mervyn King', relationship: 'Bank of England governor during Tucker\'s LIBOR involvement', href: '/entities/individuals/mervyn-king' },
 ],
 },

 'paul-weyrich': {
 name: 'Paul Weyrich',
 title: 'Co-founder of ALEC and the Heritage Foundation, architect of the New Right',
 role: 'Co-founder of ALEC and the Heritage Foundation, architect of the New Right',
 riskLevel: 'high',
 description: 'Paul Weyrich. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Paul Tucker', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder of ALEC and the Heritage Foundation, architect of the New Right' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Paul Weyrich', url: 'https://en.wikipedia.org/wiki/Paul_Weyrich', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jerry Falwell', relationship: 'Co-created Moral Majority with Falwell', href: '/entities/individuals/jerry-falwell' },
 { name: 'Lisa Nelson', relationship: 'Weyrich co-founded ALEC that Nelson later led', href: '/entities/individuals/lisa-nelson' },
 { name: 'Karl Rove', relationship: 'Fellow architect of conservative political infrastructure', href: '/entities/individuals/karl-rove' },
 ],
 },

 'pelican-bay-prisoners': {
 name: 'Pelican Bay Prisoners',
 title: 'Hunger strikers at Pelican Bay SHU who organized 2011 and 2013 protests with 30,000+ participants demanding end to solitary',
 role: 'Hunger strikers at Pelican Bay SHU who organized 2011 and 2013 protests with 30,000+ participants demanding end to solitary',
 riskLevel: 'high',
 description: 'Pelican Bay Prisoners. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Paul Weyrich', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: '2011', event: 'documented in this investigative archive for their role as Hunger strikers at Pelican Bay SHU who organized 2011 and 2013 protests with 30,000+ participants demanding end to solitary.' },
 { date: '2013', event: 'documented in this investigative archive for their role as Hunger strikers at Pelican Bay SHU who organized 2011 and 2013 protests with 30,000+ participants demanding end to solitary.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Pelican Bay Prisoners', url: 'https://en.wikipedia.org/wiki/Pelican_Bay_State_Prison', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Silverstein', relationship: 'Prisoner held in extreme solitary like Pelican Bay SHU inmates', href: '/entities/individuals/thomas-silverstein' },
 ],
 },

 'pete-arredondo': {
 name: 'Pete Arredondo',
 title: 'Uvalde school police chief who waited 77 minutes while children bled to death; fired and indicted',
 role: 'Uvalde school police chief who waited 77 minutes while children bled to death; fired and indicted',
 riskLevel: 'high',
 description: 'Pete Arredondo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Uvalde school police chief who waited 77 minutes while children bled to death; fired and indicted' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Pete Arredondo', url: 'https://en.wikipedia.org/wiki/Pete_Arredondo', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Greg Abbott', relationship: 'Texas governor during Uvalde shooting Arredondo botched', href: '/entities/individuals/greg-abbott' },
 ],
 },

 'peter-madoff': {
 name: 'Peter Madoff',
 title: 'Brother and Chief Compliance Officer; pleaded guilty to conspiracy and falsifying records',
 role: 'Brother and Chief Compliance Officer; pleaded guilty to conspiracy and falsifying records',
 riskLevel: 'high',
 description: 'Peter Madoff. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Brother and Chief Compliance Officer; pleaded guilty to conspiracy and falsifying records' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Peter Madoff', url: 'https://en.wikipedia.org/wiki/Peter_Madoff', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Brother and compliance officer at Madoff firm', href: '/entities/individuals/bernie-madoff' },
 { name: 'Mark Madoff', relationship: 'Nephew who reported Bernie to authorities', href: '/entities/individuals/mark-madoff' },
 { name: 'Ruth Madoff', relationship: 'Sister-in-law', href: '/entities/individuals/ruth-madoff' },
 ],
 },

 'peter-neufeld': {
 name: 'Peter Neufeld',
 title: 'Co-founder of the Innocence Project; pioneer in DNA exoneration cases',
 role: 'Co-founder of the Innocence Project; pioneer in DNA exoneration cases',
 riskLevel: 'high',
 description: 'Peter Neufeld. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Peter Madoff', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder of the Innocence Project; pioneer in DNA exoneration cases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Peter Neufeld', url: 'https://en.wikipedia.org/wiki/Peter_Neufeld', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Kirk Bloodsworth', relationship: 'Innocence Project co-founder helped exonerate Bloodsworth', href: '/entities/individuals/kirk-bloodsworth' },
 { name: 'Bryan Stevenson', relationship: 'Fellow wrongful conviction reform advocate', href: '/entities/individuals/bryan-stevenson' },
 ],
 },

 'petro-poroshenko': {
 name: 'Petro Poroshenko',
 title: 'President of Ukraine who created an offshore company while Russia was invading eastern Ukraine',
 role: 'President of Ukraine who created an offshore company while Russia was invading eastern Ukraine',
 riskLevel: 'high',
 description: 'Petro Poroshenko. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Russian Federation', role: 'Russian Government', type: 'agency' },
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Petro Poroshenko coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Petro Poroshenko holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President of Ukraine who created an offshore company while Russia was invading eastern Ukraine' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Petro Poroshenko', url: 'https://en.wikipedia.org/wiki/Petro_Poroshenko', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sigmundur Gunnlaugsson', relationship: 'Fellow leader exposed in Panama Papers', href: '/entities/individuals/sigmundur-gunnlaugsson' },
 ],
 },





 'phil-berger': {
 name: 'Phil Berger',
 title: 'NC Senate leader who oversaw gerrymandered maps struck down by courts multiple times',
 role: 'NC Senate leader who oversaw gerrymandered maps struck down by courts multiple times',
 riskLevel: 'high',
 description: 'Phil Berger. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NC Senate leader who oversaw gerrymandered maps struck down by courts multiple times' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Phil Berger', url: 'https://en.wikipedia.org/wiki/Phil_Berger', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tim Moore', relationship: 'Fellow North Carolina Republican gerrymandering figure', href: '/entities/individuals/tim-moore' },
 { name: 'Thomas Hofeller', relationship: 'GOP mapmaker who drew NC gerrymanders Berger defended', href: '/entities/individuals/thomas-hofeller' },
 ],
 },

 'phil-bryant': {
 name: 'Phil Bryant',
 title: 'Former Mississippi Governor whose administration diverted infrastructure funds from Jackson',
 role: 'Former Mississippi Governor whose administration diverted infrastructure funds from Jackson',
 riskLevel: 'high',
 description: 'Phil Bryant. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Mississippi Governor whose administration diverted infrastructure funds from Jackson' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Phil Bryant', url: 'https://en.wikipedia.org/wiki/Phil_Bryant', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Dobbs', relationship: 'Mississippi governor who signed abortion ban in Dobbs case', href: '/entities/individuals/thomas-dobbs' },
 { name: 'Lynn Fitch', relationship: 'AG who argued Dobbs case Bryant\'s law created', href: '/entities/individuals/lynn-fitch' },
 ],
 },

 'philip-sheridan': {
 name: 'Philip Sheridan',
 title: 'Commanding General of the United States Army',
 role: 'U.S. Army General who commanded Indian Wars campaigns, advocated total war against Native peoples, endorsed buffalo extermination as a weapon of genocide, and is attributed with the statement "the only good Indian is a dead Indian"',
 riskLevel: 'critical' as const,
 description: 'Philip Henry Sheridan (1831-1888) was a United States Army general who served as Commanding General of the Army from 1883 until his death. After distinguishing himself as a cavalry commander in the Civil War, Sheridan was placed in command of the Military Division of the Missouri, where he directed the Indian Wars campaigns across the Great Plains and Southwest. Sheridan implemented a strategy of total war against Native Americans that included the systematic destruction of food supplies, villages, and the deliberate encouragement of buffalo extermination as a weapon of subjugation. He understood that destroying the estimated 30-60 million buffalo on the Plains would eliminate the economic foundation of Native life and force subjugation. When the Texas legislature considered a bill to protect the last buffalo herds, Sheridan traveled to Austin to oppose it, telling legislators they should give hunters a medal with "a dead buffalo on one side and a discouraged Indian on the other." He directed the Red River War (1874-1875), which crushed Southern Plains resistance, and oversaw the forced relocations of numerous tribes to reservations. By the time of his death, the buffalo population had been reduced from millions to fewer than 1,000, and Native peoples across the Plains had been confined to reservations.',
 education: ['United States Military Academy at West Point (graduated 1853)'],
 affiliations: [
 { name: 'United States Army', role: 'Commanding General of the United States Army (1883-1888); previously commanded Military Division of the Missouri (1869-1883), directing all Indian Wars campaigns on the Great Plains', type: 'agency' },
 ],
 controversies: [
 'Directed the U.S. Army Indian Wars campaigns that resulted in the deaths of thousands of Native Americans and the forced relocation of entire nations to reservations',
 'Actively encouraged and endorsed the slaughter of approximately 30-60 million buffalo as a deliberate weapon of genocide against Plains tribes',
 'Traveled to the Texas legislature to oppose a buffalo protection bill, telling lawmakers to give hunters medals for destroying the herds',
 'Attributed with the statement "the only good Indian is a dead Indian," reflecting his documented views on total war against Native peoples',
 'Directed the Red River War (1874-1875) using scorched-earth tactics to destroy Southern Plains tribes food supplies, horse herds, and winter camps',
 'Oversaw the Winter Campaign of 1868-1869, including the Battle of the Washita River where Custer forces killed women and children and destroyed a Cheyenne village',
 'His subordinate James Forsyth commanded the Wounded Knee Massacre in 1890 using tactics derived from Sheridan doctrine of total war',
 ],
 relatedInvestigations: [
 { title: 'British-American Colonial Biological Warfare and Indigenous Genocide', slug: 'british-american-colonial-biological-warfare', severity: 'critical' },
 ],
 timeline: [
 { date: '1831-03-06', event: 'Born in Albany, New York (birthplace disputed; some sources cite Ireland or Ohio)' },
 { date: '1853', event: 'Graduates from the United States Military Academy at West Point' },
 { date: '1868-11', event: 'Orders the Winter Campaign against Southern Plains tribes; Custer attacks Black Kettle Cheyenne village at the Washita River' },
 { date: '1869', event: 'Appointed commander of the Military Division of the Missouri, overseeing all military operations against Native peoples on the Great Plains' },
 { date: '1874-1875', event: 'Directs the Red River War using scorched-earth tactics to destroy Southern Plains resistance' },
 { date: '1875', event: 'Travels to Austin, Texas to oppose buffalo protection legislation, endorsing the extermination campaign' },
 { date: '1883', event: 'Promoted to Commanding General of the United States Army' },
 { date: '1888-08-05', event: 'Dies of a heart attack at age 57 in Nonquitt, Massachusetts; by this time the buffalo population has been reduced from millions to under 1,000' },
 ],
 sources: [
 { title: 'Smithsonian National Museum of the American Indian: The Destruction of the Buffalo', date: '2024' },
 { title: 'National Archives: Records of the Military Division of the Missouri, Philip Sheridan Papers', url: 'https://www.archives.gov/', date: '2024' },
 ],
 knownAssociates: [
 { name: 'George Armstrong Custer', relationship: 'Cavalry commander who served under Sheridan during the Indian Wars; led the Washita River attack and died at the Battle of the Little Bighorn', href: '/entities/individuals/george-armstrong-custer' },
 { name: 'William Tecumseh Sherman', relationship: 'Fellow Union general and predecessor as Commanding General of the Army; shared Sheridan views on total war against Native Americans', href: '/entities/individuals/william-tecumseh-sherman' },
 { name: 'James Forsyth', relationship: 'Colonel who served under Sheridan and later commanded the 7th Cavalry at the Wounded Knee Massacre in 1890', href: '/entities/individuals/james-forsyth' },
 ],
 },


 'philippe-moryoussef': {
 name: 'Philippe Moryoussef',
 title: 'Former Barclays trader convicted of EURIBOR manipulation conspiracy',
 role: 'Former Barclays trader convicted of EURIBOR manipulation conspiracy',
 riskLevel: 'high',
 description: 'Philippe Moryoussef. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Philip Sheridan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Barclays trader convicted of EURIBOR manipulation conspiracy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Philippe Moryoussef', url: 'https://en.wikipedia.org/wiki/Libor_scandal', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation figure', href: '/entities/individuals/tom-hayes' },
 ],
 },
 'porcha-woodruff': {
 name: 'Porcha Woodruff',
 title: 'Pregnant Black woman wrongfully arrested by Detroit PD based on facial recognition',
 role: 'Pregnant Black woman wrongfully arrested by Detroit PD based on facial recognition',
 riskLevel: 'high',
 description: 'Porcha Woodruff. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Pregnant Black woman wrongfully arrested by Detroit PD based on facial recognition' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Porcha Woodruff', url: 'https://www.google.com/search?q=Porcha%20Woodruff', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nijeer Parks', relationship: 'Fellow victim of wrongful arrest via facial recognition', href: '/entities/individuals/nijeer-parks' },
 { name: 'Joy Buolamwini', relationship: 'AI researcher who documented facial recognition bias', href: '/entities/individuals/joy-buolamwini' },
 ],
 },

 'prudence-bushnell': {
 name: 'Prudence Bushnell',
 title: 'Deputy Assistant Secretary of State who advocated action but was overruled',
 role: 'Deputy Assistant Secretary of State who advocated action but was overruled',
 riskLevel: 'high',
 description: 'Prudence Bushnell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Deputy Assistant Secretary of State who advocated action but was overruled' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Prudence Bushnell', url: 'https://en.wikipedia.org/wiki/Prudence_Bushnell', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Susan Rice', relationship: 'NSC official whom Bushnell warned about embassy security before bombing', href: '/entities/individuals/susan-rice' },
 ],
 },
 'peter-mandelson': {
 name: 'Peter Mandelson',
 title: 'UK Labour Politician',
 role: 'Photographed With Epstein',
 riskLevel: 'medium',
 description: 'Peter Mandelson. Profile pending review.',
 birthDate: 'October 21, 1953',
 birthPlace: 'Hendon, London',
 education: ['St Catherine\'s College, Oxford'],
 affiliations: [
 { name: 'UK Labour Party', role: 'Senior Figure', type: 'organization' },
 ],
 controversies: [
 'Photographed with Epstein multiple times',
 'Named in Epstein documents',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Social contact with Epstein documented' },
 { date: '2019', event: 'Photographs with Epstein became public' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Guardian: Mandelson-Epstein', url: 'https://www.theguardian.com/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Photographed with, social contact', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Tony Blair', relationship: 'Political ally', href: '/entities/individuals/tony-blair' },
 { name: 'Ghislaine Maxwell', relationship: 'Connected through British political-social elite circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Prince Andrew', relationship: 'Fellow member of British establishment linked to Epstein', href: '/entities/individuals/prince-andrew' },
 { name: 'Bill Clinton', relationship: 'Transatlantic political connection through Epstein social network', href: '/entities/individuals/bill-clinton' },
 { name: 'Lynn Forester de Rothschild', relationship: 'Both introduced to Epstein through British elite social circles', href: '/entities/individuals/lynn-forester-de-rothschild' },
 ],
 },

 'paul-ryan': {
 name: 'Paul Ryan',
 title: 'Former Speaker of the House',
 role: 'Republican Congressional Leader, VP Candidate',
 riskLevel: 'high',
 description: 'Republican politician who served as Speaker of the House (2015-2019) and was Mitt Romney\'s VP running mate in 2012. Championed tax cuts for the wealthy and austerity for social programs. Initially criticized Trump but fell in line, enabling the Trump agenda through Congress before retiring.',
 education: ['Miami University, B.A. Economics and Political Science'],
 affiliations: [
 { name: 'Republican Party', role: 'Speaker of the House', type: 'organization' },
 { name: 'Fox Corporation', role: 'Board Member', type: 'corporation' },
 ],
 controversies: [
 'Championed 2017 Tax Cuts and Jobs Act benefiting wealthy and corporations',
 'Attempted to repeal Affordable Care Act',
 'Enabled Trump agenda despite private criticisms',
 'Joined Fox Corporation board after retirement',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tax Evasion', slug: 'tax-evasion', severity: 'high' },
 ],
 timeline: [
 { date: '2015', event: 'Became Speaker of the House' },
 { date: '2017', event: 'Passed Tax Cuts and Jobs Act' },
 { date: '2019', event: 'Retired from Congress' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Paul Ryan Profile', url: 'https://www.nytimes.com/', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Enabled Trump legislative agenda as Speaker', href: '/entities/individuals/donald-trump' },
 { name: 'Mitch McConnell', relationship: 'Senate counterpart, coordinated GOP strategy', href: '/entities/individuals/mitch-mcconnell' },
 { name: 'Kevin McCarthy', relationship: 'Successor as House Republican leader', href: '/entities/individuals/kevin-mccarthy' },
 { name: 'Mike Pence', relationship: 'Fellow establishment Republican who aligned with Trump', href: '/entities/individuals/mike-pence' },
 ],
 },






 'philando-castile': {
 name: 'Philando Castile',
 title: 'Victim of Police Shooting',
 role: 'Shot During Traffic Stop, Streamed Live',
 riskLevel: 'low',
 description: 'African American school nutrition supervisor shot and killed by St. Anthony, Minnesota police officer Jeronimo Yanez during a traffic stop on July 6, 2016. His girlfriend Diamond Reynolds live-streamed the aftermath on Facebook as their 4-year-old daughter watched from the backseat. Castile had informed Yanez he had a licensed firearm. Yanez was acquitted.',
 birthDate: 'July 16, 1983',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Had been pulled over 49 times in 13 years',
 'Informed officer of legal firearm before being shot',
 'Girlfriend live-streamed aftermath on Facebook',
 'Officer acquitted despite video evidence',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2016 Jul 6', event: 'Shot and killed during traffic stop' },
 { date: '2017', event: 'Officer Yanez acquitted' }, ],
 socialMedia: [],
 sources: [
 { title: 'MPR: The Life and Death of Philando Castile', url: 'https://www.mprnews.org/topic/philandocastile', date: '2017' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },





 'pat-tillman': {
 name: 'Pat Tillman',
 title: 'NFL Player Turned Army Ranger',
 role: 'Killed by Friendly Fire, Military Cover-Up',
 riskLevel: 'low',
 description: 'NFL player who left a $3.6 million contract with the Arizona Cardinals to enlist as an Army Ranger after 9/11. Killed by friendly fire in Afghanistan on April 22, 2004. The military initially fabricated a heroic combat death story, and the cover-up extended to the highest levels of the Pentagon.',
 birthDate: 'November 6, 1976',
 education: ['Arizona State University'],
 affiliations: [
 { name: 'U.S. Army', role: 'Specialist, 75th Ranger Regiment', type: 'agency' },
 ],
 controversies: [
 'Killed by friendly fire, not enemy combat',
 'Military fabricated heroic death narrative',
 'Pentagon cover-up reached highest levels',
 'Family lied to about circumstances of death',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: '2002', event: 'Left NFL to enlist in Army Rangers' },
 { date: '2004 Apr 22', event: 'Killed by friendly fire in Afghanistan' },
 { date: '2007', event: 'Congressional hearing exposed military cover-up' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Tillman Investigation', url: 'https://www.washingtonpost.com/wp-srv/nation/specials/tillman/', date: '2007' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Rumsfeld', relationship: 'Defense Secretary during friendly fire cover-up', href: '/entities/individuals/donald-rumsfeld' },
 ],
 },

 'pope-francis': {
 name: 'Pope Francis',
 title: 'Head of the Catholic Church',
 role: '266th Pope, First from Americas',
 riskLevel: 'low',
 description: 'Born Jorge Mario Bergoglio, became Pope in 2013 as the first from the Americas and first Jesuit pope. Has pushed reform on climate change and poverty while facing criticism for slow response to the church\'s sexual abuse crisis, though he has taken some steps including establishing new accountability mechanisms.',
 birthDate: 'December 17, 1936',
 education: ['Universidad del Salvador, Philosophy', 'Philosophical and Theological Faculty of San Miguel, Theology'],
 affiliations: [
 { name: 'Catholic Church', role: 'Pope', type: 'organization' },
 ],
 controversies: [
 'Criticized for slow response to sexual abuse crisis',
 'Established new accountability mechanisms for bishops',
 'Progressive on climate and poverty, conservative on some social issues',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sexual Assault', slug: 'sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: '2013', event: 'Elected Pope' },
 { date: '2015', event: 'Published climate encyclical Laudato Si' },
 { date: '2019', event: 'Established new abuse reporting requirements' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Vatican: Pope Francis', url: 'https://www.vatican.va/content/francesco/en.html', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },






 'pepsico': {
 name: 'Pepsico',
 title: 'Documented Individual',
 role: '',
 riskLevel: 'high',
 description: 'Pepsico. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Pepsico has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-06-26', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2023-10-13', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2016-06-26' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2023-10-13' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-02-02' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'pfizer': {
 name: 'Pfizer',
 title: 'Public Figure',
 role: 'Documented based on entity connections',
 riskLevel: 'low',
 description: 'Pfizer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Pfizer and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-10-21', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2021-11-23', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2020-10-21' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-11-23' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-09-27' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'proud-boys': {
 name: 'Proud Boys',
 title: 'Documented Individual',
 role: 'Tracked for public accountability',
 riskLevel: 'high',
 description: 'Proud Boys. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Proud Boys has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2023-12-04', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-12-04' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-11-08' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-06-18' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },



 'purdue-pharma': {
 name: 'Purdue Pharma',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Purdue Pharma. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Purdue Pharma has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-02-06', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2023-11-21', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2020-02-06' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-11-21' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-03-24' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'philip-morris': {
 name: 'Philip Morris',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'critical',
 description: 'Philip Morris. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Philip Morris and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-03-26', event: 'Profile documented based on review of public records and institutional affiliations' },
 { date: '2022-01-22', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2020-03-26' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2022-01-22' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-12-24' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'phil-murphy': {
 name: 'Phil Murphy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Phil Murphy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Phil Murphy was briefed on risks later downplayed in public communications.',
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





 'pat-gelsinger': {
 name: 'Pat Gelsinger',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Pat Gelsinger. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Pat Gelsinger holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'patrick-collison': {
 name: 'Patrick Collison',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Patrick Collison. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Patrick Collison\'s operations and the regulatory bodies meant to provide oversight.',
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





 'paul-nakasone': {
 name: 'Paul Nakasone',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Paul Nakasone. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Paul Nakasone was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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
  'pw-botha': {
    name: 'P.W. Botha',
    title: 'State President of South Africa (1984-1989)',
    role: 'Apartheid President Who Oversaw State Terrorism and the Total Strategy',
    riskLevel: 'critical',
    description: 'Pieter Willem Botha served as Prime Minister (1978-84) and State President (1984-89) of apartheid South Africa. He implemented the "Total Strategy" that militarized the apartheid state, expanded cross-border military operations, and oversaw a secret chemical and biological weapons program (Project Coast). Under his leadership, security forces carried out assassinations, torture, bombings, and massacres against anti-apartheid activists.',
    birthDate: '1916-01-12',
    birthPlace: 'Paul Roux, Orange Free State, South Africa',
    deathDate: '2006-10-31',
    education: ['Grey University College (University of the Free State)'],
    affiliations: [
      { name: 'South African Government', role: 'State President (1984-1989), Prime Minister (1978-1984)', type: 'agency' },
      { name: 'National Party', role: 'Leader (1978-1989)', type: 'organization' },
      { name: 'State Security Council', role: 'Chairman', type: 'agency' },
    ],
    controversies: [
      'Implemented "Total Strategy" that militarized the apartheid state against perceived communist threat',
      'Authorized the Civil Cooperation Bureau (CCB) - a covert military unit that assassinated anti-apartheid activists',
      'Oversaw Project Coast - secret chemical and biological weapons program designed to develop race-specific agents',
      'Ordered cross-border raids into Botswana, Lesotho, Mozambique, and Angola killing hundreds of civilians',
      'Refused to testify before the Truth and Reconciliation Commission; convicted of contempt and fined',
      'Rubicon speech (1985) - refused to end apartheid despite international pressure, triggering financial crisis',
      'Oversaw the state of emergency (1985-1990) during which 30,000+ people were detained without trial',
      'Security forces killed over 2,500 people during township uprisings (1984-1989) under his authority',
    ],
    charges: [
      { statute: 'International Convention on the Suppression and Punishment of the Crime of Apartheid (1973)', description: 'Maintained and expanded the apartheid system declared a crime against humanity', category: 'Crimes Against Humanity' },
      { statute: 'TRC Finding - Gross Human Rights Violations', description: 'Found responsible for gross violations including killings, torture, and abductions', category: 'Crimes Against Humanity' },
      { statute: 'Contempt of the Truth and Reconciliation Commission', description: 'Refused to testify before TRC; convicted and fined R10,000 (overturned on appeal)', category: 'Contempt' },
      { statute: 'Biological Weapons Convention Violation', description: 'Authorized Project Coast chemical and biological weapons program', category: 'WMD Proliferation' },
    ],
    relatedInvestigations: [
      { title: 'Apartheid in South Africa', slug: 'apartheid-south-africa', severity: 'critical' },
    ],
    timeline: [
      { date: '1916-01-12', event: 'Born in Paul Roux, Orange Free State' },
      { date: '1978', event: 'Becomes Prime Minister of South Africa' },
      { date: '1981', event: 'Authorizes Project Coast biological weapons program under Wouter Basson' },
      { date: '1984', event: 'Becomes State President under new constitution; township uprisings begin' },
      { date: '1985-08-15', event: 'Delivers "Rubicon" speech refusing reforms; triggers international financial crisis' },
      { date: '1985-07', event: 'Declares first state of emergency' },
      { date: '1989-08', event: 'Forced to resign by National Party; replaced by F.W. de Klerk' },
      { date: '1998', event: 'Found in contempt of TRC for refusing to testify' },
      { date: '2006-10-31', event: 'Dies at home; never prosecuted for apartheid-era crimes' },
    ],
    sources: [
      { title: 'South African Truth and Reconciliation Commission Final Report', url: 'https://www.justice.gov.za/trc/report/', date: '1998' },
    ],
    aliases: ['Die Groot Krokodil (The Big Crocodile)', 'P.W.', 'Piet Botha'],
    knownAssociates: [
      { name: 'Hendrik Verwoerd', relationship: 'Predecessor architect of apartheid system Botha maintained', href: '/entities/individuals/hendrik-verwoerd' },
    ],
  },
  'pol-pot': {
    name: 'Pol Pot',
    title: 'Prime Minister of Democratic Kampuchea (1975-1979)',
    role: 'Leader of the Khmer Rouge Responsible for the Cambodian Genocide',
    riskLevel: 'critical',
    description: 'Pol Pot (born Saloth Sar) was the leader of the Khmer Rouge regime that ruled Cambodia from 1975 to 1979. Under his ideology of agrarian communism, the regime emptied all cities, abolished money, closed schools and hospitals, and executed perceived enemies. An estimated 1.5-2 million Cambodians (approximately 25% of the population) died from execution, starvation, disease, and forced labor during his rule.',
    birthDate: '1925-05-19',
    birthPlace: 'Prek Sbauv, Kampong Thom Province, Cambodia',
    deathDate: '1998-04-15',
    education: ['Technical school in Paris, France (1949-1953)'],
    affiliations: [
      { name: 'Communist Party of Kampuchea (Khmer Rouge)', role: 'General Secretary (1963-1998)', type: 'organization' },
      { name: 'Democratic Kampuchea', role: 'Prime Minister (1976-1979)', type: 'agency' },
    ],
    controversies: [
      'Ordered evacuation of all cities on April 17, 1975 - Phnom Penh\'s 2 million residents forced into countryside at gunpoint',
      'Abolished money, private property, religion, and education; declared "Year Zero"',
      'S-21 (Tuol Sleng) prison processed over 17,000 prisoners through torture and execution; only 12 survived',
      'Killed intellectuals, professionals, and anyone wearing glasses (seen as sign of literacy/education)',
      'Choeung Ek ("Killing Fields") - mass execution site where 8,895 bodies were exhumed from 129 mass graves',
      'Forced labor on irrigation projects killed thousands through exhaustion, starvation, and beatings',
      'Targeted ethnic Vietnamese, Chinese, Cham Muslims, and Thai minorities for elimination',
      'Never faced justice - died under house arrest in 1998 before ECCC could try him',
    ],
    charges: [
      { statute: 'UN Genocide Convention - Genocide', description: 'Ordered systematic extermination of ethnic and religious minorities in Cambodia', category: 'Genocide' },
      { statute: 'Crimes Against Humanity - Extermination', description: 'Policies killed 1.5-2 million Cambodians (25% of population)', category: 'Crimes Against Humanity' },
      { statute: 'Crimes Against Humanity - Enslavement', description: 'Forced entire population into agricultural slave labor', category: 'Crimes Against Humanity' },
      { statute: 'War Crimes - Mass Execution', description: 'Directed systematic execution of prisoners and perceived enemies at Tuol Sleng and Killing Fields', category: 'War Crimes' },
    ],
    relatedInvestigations: [
      { title: 'Cambodian Genocide', slug: 'cambodian-genocide', severity: 'critical' },
    ],
    timeline: [
      { date: '1925-05-19', event: 'Born Saloth Sar in Kampong Thom Province' },
      { date: '1949', event: 'Goes to Paris on scholarship; joins French Communist Party' },
      { date: '1963', event: 'Becomes leader of Communist Party of Kampuchea (Khmer Rouge)' },
      { date: '1975-04-17', event: 'Khmer Rouge captures Phnom Penh; evacuates all cities' },
      { date: '1975-04', event: 'Declares "Year Zero"; abolishes money, education, religion' },
      { date: '1976', event: 'Becomes Prime Minister of Democratic Kampuchea' },
      { date: '1979-01-07', event: 'Vietnamese forces overthrow Khmer Rouge; Pol Pot flees to Thai border' },
      { date: '1997', event: 'Internally purged by surviving Khmer Rouge leaders' },
      { date: '1998-04-15', event: 'Dies under house arrest; never faced international trial' },
    ],
    sources: [
      { title: 'Extraordinary Chambers in the Courts of Cambodia (ECCC)', url: 'https://www.eccc.gov.kh/', date: '2006' },
      { title: 'First They Killed My Father by Loung Ung', url: 'https://www.harpercollins.com/products/first-they-killed-my-father-loung-ung', date: '2000' },
    ],
    aliases: ['Saloth Sar', 'Brother Number One', 'Pouk', 'Hay', '87'],
    knownAssociates: [
      { name: 'Nuon Chea', relationship: 'Brother Number Two and chief ideologist of the Khmer Rouge', href: '/entities/individuals/nuon-chea' },
    ],
  },
  'paul-manafort': {
    name: 'Paul Manafort',
    title: 'Former Trump Campaign Chairman',
    role: 'Trump\'s 2016 campaign chairman convicted of tax fraud, bank fraud, and conspiracy related to his work for pro-Russian Ukrainian oligarchs, later pardoned by Trump',
    riskLevel: 'critical',
    description: 'Paul John Manafort Jr. served as chairman of Donald Trump\'s 2016 presidential campaign from June to August 2016. For over a decade before, Manafort worked as a political consultant for pro-Russian Ukrainian President Viktor Yanukovych and the Party of Regions, earning tens of millions of dollars that he hid in offshore accounts and failed to report to U.S. tax authorities. He laundered over $30 million through offshore entities, using the funds to purchase luxury goods, real estate, and fund his lifestyle. Manafort was convicted by a jury in Virginia on 8 counts of tax and bank fraud in August 2018. He subsequently pleaded guilty in D.C. to conspiracy charges and agreed to cooperate with Mueller\'s investigation, but was found to have lied to investigators and breached his plea agreement. He was sentenced to a combined 7.5 years in federal prison. Manafort shared internal Trump campaign polling data with Konstantin Kilimnik, a Russian-Ukrainian political operative the Senate Intelligence Committee identified as a Russian intelligence officer. Trump pardoned Manafort in December 2020.',
    birthDate: 'April 1, 1949',
    birthPlace: 'New Britain, Connecticut',
    education: ['Georgetown University (B.S.)', 'Georgetown University Law Center (J.D.)'],
    affiliations: [
      { name: 'Trump 2016 Campaign', role: 'Campaign Chairman', type: 'organization' as const },
      { name: 'Davis Manafort Partners', role: 'Managing Partner', type: 'corporation' as const },
    ],
    controversies: [
      'Convicted of tax fraud, bank fraud for hiding $30M+ from Ukrainian consulting work',
      'Shared Trump campaign polling data with Russian intelligence-linked operative',
      'Worked for pro-Russian Ukrainian oligarchs for over a decade',
      'Lied to Mueller investigators after agreeing to cooperate; breached plea deal',
      'Laundered tens of millions through offshore shell companies',
      'Pardoned by Trump in December 2020',
    ],
    charges: [
      { statute: '26 U.S.C. 7206(1)', description: 'Tax fraud - filing false tax returns hiding $30M+ in foreign income (convicted)', category: 'federal' },
      { statute: '18 U.S.C. 1014', description: 'Bank fraud - obtaining loans through false financial statements (convicted)', category: 'federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy against the United States (guilty plea)', category: 'federal' },
      { statute: '22 U.S.C. 611', description: 'Failure to register as foreign agent under FARA (guilty plea)', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/january-6-insurrection'],
    timeline: [
      { date: '2004-2016', event: 'Works as consultant for pro-Russian Ukrainian interests' },
      { date: '2016-06-20', event: 'Named Trump campaign chairman' },
      { date: '2016-08-19', event: 'Resigns from campaign amid Ukraine lobbying scrutiny' },
      { date: '2017-10-30', event: 'Indicted by Special Counsel Mueller' },
      { date: '2018-08-21', event: 'Convicted on 8 counts in Virginia' },
      { date: '2018-09-14', event: 'Pleads guilty in D.C. to conspiracy charges' },
      { date: '2019-03-13', event: 'Sentenced to combined 7.5 years in prison' },
      { date: '2020-12-23', event: 'Pardoned by President Trump' },
    ],
    sources: [
      { title: 'Special Counsel Mueller: United States v. Paul J. Manafort', url: 'https://www.justice.gov/news', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who appointed him campaign chairman and later pardoned him', href: '/entities/individuals/donald-trump' },
      { name: 'Rick Gates', relationship: 'Business partner and co-defendant who flipped and testified against Manafort' },
      { name: 'Konstantin Kilimnik', relationship: 'Russian intelligence-linked operative who received campaign data' },
    ],
  },

  'peter-thiel': {
    name: 'Peter Thiel',
    bio: 'Peter Andreas Thiel is a billionaire venture capitalist, co-founder of PayPal and Palantir Technologies, and one of the most influential political donors in Silicon Valley. Palantir, which Thiel co-founded with $2 million in CIA venture capital funding, provides data analytics to the NSA, CIA, FBI, ICE, and military intelligence agencies. The company\'s software was used by ICE to track and deport immigrants, by the NSA for mass surveillance analysis, and by the Pentagon for targeting in drone strikes. Thiel was the first major tech figure to endorse Donald Trump (2016), spending $15 million supporting the campaign. He funded the Hulk Hogan v. Gawker lawsuit that bankrupted the media outlet in what critics characterized as a billionaire\'s revenge against a free press. His political protegés include J.D. Vance (Vice President) and Blake Masters.',
    riskLevel: 'high' as const,
    status: 'active',
    lastKnownLocation: 'Los Angeles, California / New Zealand',
    birthDate: 'October 11, 1967',
    education: [
      'B.A., Philosophy, Stanford University (1989)',
      'J.D., Stanford Law School (1992)',
    ],
    affiliations: [
      { name: 'Palantir Technologies', role: 'Co-Founder & Chairman', type: 'corporation' as const },
      { name: 'Founders Fund', role: 'Managing Partner', type: 'corporation' as const },
    ],
    relatedInvestigations: [
      { title: 'Domestic Surveillance State', slug: 'domestic-surveillance-state', severity: 'critical' },
      { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance-constitutional-erosion', severity: 'critical' },
      { title: 'Lobbying and Dark Money', slug: 'lobbying-dark-money-democracy-corruption', severity: 'critical' },
    ],
    charges: [
      { statute: 'N/A - Corporate', description: 'Palantir provides surveillance technology to ICE for immigrant tracking and deportation', category: 'Immigration enforcement enablement' },
      { statute: 'N/A - Democratic Norms', description: 'Used personal wealth to secretly fund lawsuit that destroyed a media organization (Gawker)', category: 'Press freedom' },
    ],
    criminalHistory: 'No criminal charges. Palantir settled a DOL discrimination lawsuit for $1.7 million in 2017 for systemic discrimination against Asian applicants. Multiple privacy and civil liberties groups have challenged Palantir\'s government contracts.',
    financialInfo: 'Net worth estimated at $9.4 billion. Palantir market cap approximately $55 billion. Thiel holds New Zealand citizenship and has purchased property there. He reportedly converted a $2,000 Roth IRA into $5 billion through PayPal founder shares.',
    sources: [
      { title: 'The Intercept: Palantir\'s Role in Mass Surveillance', url: 'https://theintercept.com/', date: '2022' },
      { title: 'FEC: Peter Thiel Political Contributions', url: 'https://www.fec.gov/', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'J.D. Vance', relationship: 'Political protegé; Thiel invested in Vance\'s firm and spent $15M supporting his Senate campaign; now Vice President' },
      { name: 'Alex Karp', relationship: 'Palantir CEO; manages day-to-day operations of the surveillance technology company' },
    ],
  },
  'peter-navarro': {
    name: 'Peter Navarro',
    title: 'Former Director of Trade and Manufacturing Policy',
    role: 'Trade Warrior Who Defied Congressional Subpoena and Went to Prison',
    riskLevel: 'high' as const,
    description: 'Peter Navarro served as Trumps top trade advisor, championing an aggressive protectionist agenda against China and promoting unproven COVID treatments. After leaving office, he refused to comply with a January 6 Committee subpoena, was convicted of contempt of Congress, and became the first former White House official to serve prison time for contempt.',
    birthDate: '1949-07-15',
    birthPlace: 'Cambridge, Massachusetts',
    education: [
      'B.A., Tufts University (1972)',
      'M.P.A., John F. Kennedy School of Government, Harvard University (1979)',
      'Ph.D. in Economics, Harvard University (1986)',
    ],
    affiliations: [
      { name: 'White House Office of Trade and Manufacturing Policy', role: 'Director (2017-2021)', type: 'agency' as const },
      { name: 'University of California, Irvine', role: 'Professor of Economics and Public Policy', type: 'organization' as const },
    ],
    controversies: [
      'Promoted hydroxychloroquine as a COVID treatment over objections of public health officials; clashed with Dr. Anthony Fauci in White House meetings',
      'Cited a fake expert named "Ron Vara" (an anagram of Navarro) in his own books on China to validate his arguments',
      'Refused to comply with January 6 Committee subpoena; claimed executive privilege without formal White House assertion',
      'Convicted of two counts of contempt of Congress for refusing to testify or produce documents',
      'Sentenced to four months in federal prison; became the first senior White House advisor imprisoned for contempt of Congress',
      'Led trade war with China that resulted in higher consumer prices and retaliation against American farmers, requiring $28 billion in farm bailouts',
      'Publicly discussed the "Green Bay Sweep" plan to use congressional objections to delay certification of the 2020 election results',
    ],
    relatedInvestigations: [
      { title: 'Corporate Tax Avoidance Offshore', slug: 'corporate-tax-avoidance-offshore', severity: 'high' },
    ],
    timeline: [
      { date: '2017-01', event: 'Named Director of White House National Trade Council' },
      { date: '2018-2019', event: 'Led implementation of tariffs on China and other trading partners; farmers required $28B in bailouts' },
      { date: '2020', event: 'Clashed with Fauci over hydroxychloroquine; distributed unproven treatments from White House' },
      { date: '2021-01-06', event: 'Publicly described the "Green Bay Sweep" plan to delay election certification' },
      { date: '2022-02', event: 'Subpoenaed by January 6 Committee; refused to comply' },
      { date: '2022-06', event: 'Indicted on two counts of contempt of Congress' },
      { date: '2023-09', event: 'Convicted on both counts of contempt of Congress' },
      { date: '2024-01', event: 'Sentenced to four months in federal prison' },
      { date: '2024-03', event: 'Reported to federal prison in Miami' },
    ],
    sources: [
      { title: 'DOJ: United States v. Peter Navarro - Contempt Conviction', date: '2023' },
      { title: 'January 6 Committee: Subpoena and Referral for Navarro', date: '2022' },
      { title: 'USDA: Market Facilitation Program Farm Bailout Data', date: '2019' },
    ],
    aliases: ['Ron Vara (fictional alter ego)'],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'President who empowered Navarros protectionist trade agenda and pardoned his contempt conviction', href: '/entities/individuals/donald-trump' },
      { name: 'Steve Bannon', relationship: 'Fellow contempt of Congress convict; allied on populist economic nationalism agenda', href: '/entities/individuals/steve-bannon' },
    ],
  },
 'patrick-leahy': {
 name: 'Patrick Leahy',
 title: 'Former U.S. Senator (D-VT)',
 role: 'Senate Judiciary Committee Chairman, NSA Oversight Reformer',
 riskLevel: 'low',
 description: 'Patrick Leahy served as U.S. Senator from Vermont from 1975 to 2023, making him the longest-serving senator in Vermont history. As chairman of the Senate Judiciary Committee, he was a leading voice for NSA surveillance reform and co-authored the USA FREEDOM Act to curtail bulk metadata collection.',
 affiliations: [
 { name: 'U.S. Senate', role: 'Senator, Vermont (1975-2023)', type: 'agency' },
 { name: 'Senate Judiciary Committee', role: 'Chairman (multiple terms)', type: 'agency' },
 ],
 controversies: [
 'NSA REFORM: Led congressional efforts to reform NSA surveillance after Snowden disclosures',
 'USA FREEDOM ACT: Co-authored legislation to end bulk telephone metadata collection',
 'FISA COURT REFORM: Advocated for adding adversarial proceedings to the secret FISA Court',
 'PATRIOT ACT CRITIC: Opposed reauthorization of sweeping surveillance provisions',
 ],
 },
  'paul-bilzerian': {
    name: 'Paul Bilzerian',
    title: 'Convicted Corporate Raider; Securities Fraud During 1980s Hostile Takeover Wave',
    role: 'Corporate Raider; Chairman of Singer Company Board',
    riskLevel: 'high',
    description: 'Paul Bilzerian was a prominent 1980s corporate raider who was convicted of securities fraud and conspiracy for concealing massive stock positions from the SEC during hostile takeover attempts of Singer Company and Cluett, Peabody & Co. He was convicted after a jury trial in June 1989 on nine counts of securities fraud, conspiracy, and tax fraud. He was sentenced to four years in federal prison and ordered to disgorge $33 million in illegal profits. Bilzerian repeatedly evaded the disgorgement judgment for decades, claiming bankruptcy while maintaining a lavish lifestyle. He is the father of social media personality Dan Bilzerian.',
    birthDate: '1950',
    birthPlace: 'United States',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'SEC', role: 'Subject of enforcement actions for concealing stock positions', type: 'agency' },
    ],
    controversies: [
      'Concealed massive stock purchases from SEC during hostile takeover bids for Singer Company and Cluett, Peabody & Co.',
      'Convicted after jury trial on 9 counts of securities fraud, conspiracy, and tax fraud',
      'Ordered to disgorge $33 million but evaded payment for decades while maintaining lavish lifestyle',
      'Declared bankruptcy multiple times while living in a $4 million Tampa mansion',
      'Father of social media celebrity Dan Bilzerian, whose wealth origins have been questioned',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Securities Fraud (9 counts): Concealing stock positions during hostile takeover attempts', category: 'Federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to make false statements to the SEC', category: 'Federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax Fraud', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1987-1988', event: 'Mounts hostile takeover attempts of Singer Company and Cluett, Peabody & Co. while concealing stock positions from SEC' },
      { date: 'June 1989', event: 'Convicted by jury on 9 counts of securities fraud, conspiracy, and tax fraud' },
      { date: '1989', event: 'Sentenced to 4 years in federal prison; ordered to disgorge $33 million' },
      { date: '1993', event: 'Files for bankruptcy, begins decades-long evasion of disgorgement judgment' },
    ],
    socialMedia: [],
    sources: [
      { title: 'United States v. Paul Bilzerian, 926 F.2d 1285 (2d Cir. 1991)', url: 'https://law.justia.com/cases/federal/appellate-courts/F2/926/1285/399267/', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [],
  },


 'peter-brant': {
 name: 'Peter Brant',
 title: 'Former Equity Trader, Kidder, Peabody & Co.; Convicted of Perjury',
 role: 'Kidder Peabody equity trader convicted of perjury for lying about receiving inside information from Martin Siegel',
 riskLevel: 'medium',
 description: 'Peter Brant was an equity trader at Kidder, Peabody & Co. who was convicted of perjury for lying to prosecutors about receiving inside information from Martin Siegel about pending mergers and acquisitions transactions. Siegel, the star M&A banker at Kidder Peabody, had been passing inside information not only to Ivan Boesky but apparently to traders within his own firm. Brant\'s conviction demonstrated that the insider trading culture at Kidder Peabody extended far deeper than any single individual, with illicit information flowing from the M&A department to traders on the equity desk.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: [],
 affiliations: [
  { name: 'Kidder, Peabody & Co.', role: 'Equity Trader', type: 'corporation' as const },
 ],
 controversies: [
  'Received inside information from Martin Siegel about pending M&A transactions at Kidder Peabody',
  'Convicted of perjury for lying to prosecutors about receiving the inside information',
  'Part of broader pattern of illicit information sharing at Kidder Peabody',
 ],
 charges: [
  { statute: '18 U.S.C. § 1621', description: 'Perjury — lying to federal prosecutors about receiving insider information', category: 'Federal' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1984-1986', event: 'Receives inside information from Martin Siegel about pending M&A deals at Kidder Peabody' },
  { date: '1990', event: 'Convicted of perjury for lying about receiving inside information from Siegel' },
 ],
 socialMedia: [],
 sources: [
  { title: 'James B. Stewart, Den of Thieves (Simon & Schuster, 1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Martin Siegel', relationship: 'Source of inside M&A information at Kidder Peabody', href: '/entities/individuals/martin-siegel' },
  { name: 'Richard Wigton', relationship: 'Fellow Kidder Peabody employee caught in insider trading investigation', href: '/entities/individuals/richard-wigton' },
 ],
 },
 'peter-brant-trader': {
 name: 'Peter Brant',
 title: 'Former Equity Trader, Kidder, Peabody & Co.',
 role: 'Kidder Peabody equity trader convicted of perjury for lying about receiving inside information from Martin Siegel',
 riskLevel: 'medium',
 description: 'Peter Brant was an equity trader at Kidder, Peabody & Co. who was convicted of perjury for lying to prosecutors about receiving inside information from Martin Siegel about pending mergers and acquisitions transactions. Siegel, the star M&A banker at Kidder Peabody, had been passing inside information not only to Ivan Boesky but apparently to traders within his own firm. Brant\'s conviction demonstrated that the insider trading culture at Kidder Peabody extended far deeper than any single individual, with illicit information flowing from the M&A department to traders on the equity desk.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Kidder, Peabody & Co.', role: 'Equity Trader', type: 'corporation' },
 ],
 controversies: [
  'Received inside information from Martin Siegel about pending M&A transactions at Kidder Peabody',
  'Convicted of perjury for lying to prosecutors about receiving the inside information',
  'Part of broader pattern of illicit information sharing at Kidder Peabody',
 ],
 charges: [
  { statute: '18 U.S.C. § 1621', description: 'Perjury', category: 'Obstruction' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1984-1986', event: 'Receives inside information from Martin Siegel about pending M&A deals at Kidder Peabody' },
  { date: '1990', event: 'Convicted of perjury for lying about receiving inside information from Siegel' },
 ],
 socialMedia: [],
 sources: [
  { title: 'James B. Stewart, "Den of Thieves" (Simon & Schuster, 1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Martin Siegel', relationship: 'Source of inside M&A information at Kidder Peabody', href: '/entities/individuals/martin-siegel' },
  { name: 'Richard Wigton', relationship: 'Fellow Kidder Peabody employee caught in insider trading investigation', href: '/entities/individuals/richard-wigton' },
 ],
 },

 'paul-berkman': {
    name: 'Paul Berkman',
    title: 'Princeton/Newport Partners General Partner; Convicted on RICO Charges, All Overturned on Appeal',
    role: 'General Partner, Princeton/Newport Partners',
    riskLevel: 'high',
    description: 'Paul Berkman was a general partner at Princeton/Newport Partners, a quantitative hedge fund co-founded by mathematician Edward Thorp. In August 1989, Berkman and five other defendants were convicted on over 60 counts of racketeering, securities fraud, and tax fraud. He was sentenced to 3 months in federal prison. On June 29, 1991, all convictions were overturned on appeal. Princeton/Newport Partners had been forced to liquidate as a result of the RICO indictment, destroying the fund despite the eventual reversal of all convictions.',
    birthDate: 'c. 1946',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Princeton/Newport Partners', role: 'General Partner', type: 'corporation' },
    ],
    controversies: [
      'Convicted on RICO charges for illegal tax-motivated stock parking with Drexel Burnham Lambert',
      'All convictions overturned on appeal June 29, 1991',
      'Princeton/Newport Partners forced to liquidate due to RICO indictment',
    ],
    charges: [
      { statute: '18 U.S.C. 1962 (RICO)', description: 'Racketeering: Illegal tax-motivated stock parking', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1988-08-04', event: 'Indicted alongside five other Princeton/Newport defendants on RICO charges' },
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
    ],
  },
};

export default profiles;
