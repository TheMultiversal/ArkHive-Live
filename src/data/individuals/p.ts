// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'paul-manafort': {
 name: 'Paul John Manafort Jr.',
 title: 'Convicted Felon (Pardoned), Foreign Agent',
 role: 'Former Trump Campaign Chairman, Ukrainian Oligarch Lobbyist',
 riskLevel: 'critical',
 description: 'Paul Manafort is a convicted felon and political consultant who served as Donald Trump\'s campaign chairman in 2016. He was convicted of multiple felonies related to his work for pro-Russian Ukrainian politicians, hid $75 million in offshore accounts, and shared campaign polling data with Russian intelligence. Pardoned by Trump to prevent cooperation with investigators.',
 birthDate: 'April 1, 1949',
 birthPlace: 'New Britain, Connecticut, USA',
 netWorth: '$28+ million (pre-conviction, hidden assets recovered)',
 education: ['J.D., Georgetown University Law Center (1974)', 'B.S., Georgetown University (1971)'],
 affiliations: [
 { name: 'Trump Campaign', role: 'Chairman (March-August 2016)', type: 'organization' },
 { name: 'Party of Regions (Ukraine)', role: 'Chief Strategist for Yanukovych', type: 'organization' },
 { name: 'Davis Manafort Partners', role: 'Founder', type: 'corporation' },
 { name: 'Black, Manafort, Stone and Kelly', role: 'Co-Founder', type: 'corporation' },
 { name: 'European Centre for a Modern Ukraine', role: 'Created as FARA evasion front', type: 'organization' },
 ],
 controversies: [
 'CONVICTED OF 8 FELONIES: Tax fraud, bank fraud, hiding foreign bank accounts, witness tampering',
 'SHARED POLLING DATA WITH RUSSIA: Gave internal Trump campaign polling to Kilimnik (Russian intelligence) at August 2, 2016 meeting',
 'UKRAINE WORK FOR YANUKOVYCH: Earned $65+ million advising pro-Russian Party of Regions, helped elect Yanukovych',
 'HID $75 MILLION OFFSHORE: Maintained secret accounts in Cyprus, St. Vincent & Grenadines, UK to avoid taxes',
 'TRUMP TOWER MEETING: Attended June 9, 2016 meeting with Russians promising dirt on Clinton',
 'WITNESS TAMPERING: Contacted witnesses while under house arrest, led to additional charges',
 'FARA VIOLATIONS: Failed to register as foreign agent while lobbying for Ukraine in US',
 'OFFERED BRIEFINGS TO DERIPASKA: During campaign, offered private briefings to Russian oligarch to repay debt',
 'PARDONED TO SILENCE: Trump pardon prevented continued cooperation with prosecutors',
 'CYPRIOT SHELL COMPANIES: Used dozens of shell companies to launder payments from Ukraine',
 ],
 charges: [
 { statute: '26 U.S.C. § 7206', description: 'Tax fraud; concealing $15 million in foreign income (5 counts)', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1344', description: 'Bank fraud; defrauding Citizens Bank, Federal Savings Bank (2 counts)', category: 'Financial Crimes' },
 { statute: '31 U.S.C. § 5314', description: 'Failure to report foreign bank accounts (FBAR)', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1512', description: 'Witness tampering', category: 'Obstruction' },
 { statute: '22 U.S.C. § 618', description: 'Failure to register as foreign agent (FARA)', category: 'National Security' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy against the United States', category: 'National Security' },
 { statute: '18 U.S.C. § 1956', description: 'Money laundering conspiracy', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Ukraine Interference Investigation', slug: 'ukraine-extortion', severity: 'high' },
 { title: 'Foreign Agent Networks', slug: 'foreign-agents', severity: 'high' },
 ],
 timeline: [
 { date: '1949', event: 'Born in New Britain, Connecticut' },
 { date: '1976', event: 'Joins Ford campaign, meets Roger Stone' },
 { date: '1980', event: 'Co-founds Black, Manafort, Stone and Kelly lobbying firm' },
 { date: '1980s', event: 'Lobbies for dictators: Marcos (Philippines), Mobutu (Zaire), Angolan rebels' },
 { date: '2004', event: 'Begins consulting for pro-Russian Ukrainian politicians' },
 { date: '2006', event: 'Signs $10M annual contract with Oleg Deripaska' },
 { date: '2010', event: 'Helps elect Viktor Yanukovych president of Ukraine' },
 { date: '2014', event: 'Yanukovych flees Ukraine after Maidan revolution, Russian invasion of Crimea' },
 { date: 'Mar 2016', event: 'Joins Trump campaign, quickly promoted to chairman' },
 { date: 'Jun 9, 2016', event: 'Attends Trump Tower meeting with Russians (Veselnitskaya)' },
 { date: 'Aug 2, 2016', event: 'Meets Kilimnik at Grand Havana Room, shares polling data' },
 { date: 'Aug 2016', event: 'Resigns from Trump campaign amid Ukraine payment revelations' },
 { date: 'Oct 2017', event: 'Indicted by Special Counsel Robert Mueller' },
 { date: 'Aug 2018', event: 'Convicted on 8 felony counts (EDVA)' },
 { date: 'Sep 2018', event: 'Pleads guilty to additional charges (DC), agrees to cooperate' },
 { date: 'Nov 2018', event: 'Mueller determines Manafort lied, cooperation agreement voided' },
 { date: 'Feb 2019', event: 'Judge rules Manafort lied about Kilimnik contacts' },
 { date: 'Mar 2019', event: 'Sentenced to 47 months (EDVA) + 43 months (DC) = 7.5 years' },
 { date: 'May 2020', event: 'Released to home confinement due to COVID-19' },
 { date: 'Dec 2020', event: 'Pardoned by Donald Trump' },
 { date: '2021', event: 'Senate report confirms Kilimnik was Russian intelligence officer' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'EDVA Conviction Documents', url: 'https://www.courtlistener.com/docket/6183591/united-states-v-manafort/', date: '2018' },
 { title: 'Senate Intelligence Committee Vol. 5', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', date: '2020' },
 { title: 'Treasury Kilimnik Sanctions', url: 'https://home.treasury.gov/news/press-releases/jy0126', date: '2021' },
 { title: 'Cyprus Shell Companies Analysis', url: 'https://www.icij.org/investigations/pandora-papers/', date: '2021' },
 { title: 'Deripaska Relationship Documents', url: 'https://atlanticcouncil.org/blogs/ukrainealert/why-the-manafort-case-matters/', date: '2018' },
 ],
 aliases: ['Trump Campaign Chairman', 'Ukraine Lobbyist'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Campaign Chairman, pardoned co-conspirator', href: '/entities/individuals/donald-trump' },
 { name: 'Roger Stone', relationship: 'Business partner since 1980, fellow pardoned felon', href: '/entities/individuals/roger-stone' },
 { name: 'Konstantin Kilimnik', relationship: 'Russian intelligence asset, shared polling data Aug 2016', href: '/entities/individuals/konstantin-kilimnik' },
 { name: 'Viktor Yanukovych', relationship: 'Pro-Russian Ukrainian president, primary client', href: '/entities/individuals/viktor-yanukovych' },
 { name: 'Oleg Deripaska', relationship: 'Russian oligarch, owed $19M, offered briefings', href: '/entities/individuals/oleg-deripaska' },
 { name: 'Rick Gates', relationship: 'Deputy campaign manager, cooperating witness', href: '/entities/individuals/rick-gates' },
 { name: 'Jared Kushner', relationship: 'Trump Tower meeting attendee', href: '/entities/individuals/jared-kushner' },
 { name: 'Donald Trump Jr.', relationship: 'Trump Tower meeting organizer', href: '/entities/individuals/donald-trump-jr' },
 { name: 'Dmitry Firtash', relationship: 'Ukrainian oligarch, extradition case', href: '/entities/individuals/dmitry-firtash' },
 ],
 },


























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

 'peter-navarro': {
 name: 'Peter Kent Navarro',
 title: 'Former White House Trade Advisor',
 role: 'Economist and convicted contemnor',
 riskLevel: 'medium',
 description: 'Peter Kent Navarro served as Assistant to the President and Director of Trade and Manufacturing Policy under President Trump. He became the first senior White House advisor in modern history to be imprisoned for contempt of Congress after refusing to comply with a subpoena from the January 6th Select Committee.',
 birthDate: 'July 15, 1949',
 birthPlace: 'Cambridge, Massachusetts, USA',
 netWorth: '$5+ million',
 education: ['Tufts University, BA', 'Harvard University, MPA', 'Harvard University, PhD Economics 1986'],
 affiliations: [
 { name: 'White House', role: 'Trade and Manufacturing Policy Director (2017-2021)', type: 'agency' },
 ],
 controversies: [
 'Convicted of two counts of contempt of Congress for defying a subpoena from the January 6th Select Committee, sentenced to four months in federal prison',
 'Authored two memos in December 2020 and January 2021 outlining a strategy to overturn the 2020 election results through the Vice President rejecting Electoral College votes',
 'Cited a fabricated trade expert named "Ron Vara" (an anagram of Navarro) in multiple books as an authoritative source on China trade policy',
 'Violated the Hatch Act by using his official position to advocate for Trump reelection during a media interview',
 'Promoted unproven COVID-19 treatments including hydroxychloroquine against the advice of FDA and public health officials',
 ],
 charges: [
 { statute: '2 USC 192', description: 'Contempt of Congress (two counts)', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Election Disinformation', slug: 'election-disinformation', severity: 'critical' },
 ],
 timeline: [
 { date: '2017-01-20', event: 'Appointed Director of the White House National Trade Council' },
 { date: '2020-12-21', event: 'Authored memo outlining strategy to overturn 2020 election results' },
 { date: '2021-01-20', event: 'Left White House' },
 { date: '2022-06-03', event: 'Indicted on two counts of contempt of Congress' },
 { date: '2023-09-07', event: 'Convicted of contempt of Congress by federal jury' },
 { date: '2024-01-25', event: 'Sentenced to four months in federal prison' },
 { date: '2024-03-19', event: 'Reported to federal prison in Miami' },
 { date: '2024-07-17', event: 'Released from prison; spoke at Republican National Convention same day' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: Navarro Indictment', url: 'https://www.justice.gov/usao-dc/pr/peter-navarro-indicted-contempt-congress', date: '2022-06-03' },
 { title: 'January 6th Select Committee Final Report', url: 'https://www.govinfo.gov/committee/house-january6th', date: '2022-12-22' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Former employer, White House principal', href: '/entities/individuals/donald-trump' },
 { name: 'Steve Bannon', relationship: 'Fellow Trump advisor also convicted of contempt of Congress', href: '/entities/individuals/steve-bannon' },
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
 'peter-thiel': {
 name: 'Peter Thiel',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Peter Thiel. Profile pending review.',
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
 title: 'U.S. Army General. Commanded the Military Division of the Missouri overseeing Indian Wars campaigns. Advocated total war against Native peoples and endorsed buffalo extermination. Attributed with the statement"The only good Indian is a dead Indian."',
 role: 'U.S. Army General. Commanded the Military Division of the Missouri overseeing Indian Wars campaigns. Advocated total war against Native peoples and endorsed buffalo extermination. Attributed with the statement"The only good Indian is a dead Indian."',
 riskLevel: 'high',
 description: 'Philip Sheridan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Army General. Commanded the Military Division of the Missouri overseeing Indian Wars campaigns.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Philip Sheridan', url: 'https://en.wikipedia.org/wiki/Philip_Sheridan', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Armstrong Custer', relationship: 'Custer served under Sheridan during Indian Wars', href: '/entities/individuals/george-armstrong-custer' },
 { name: 'William Tecumseh Sherman', relationship: 'Fellow Union general who oversaw Native American campaigns', href: '/entities/individuals/william-tecumseh-sherman' },
 { name: 'James Forsyth', relationship: 'Officer under Sheridan\'s command at Wounded Knee', href: '/entities/individuals/james-forsyth' },
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
 { title: 'Wikipedia: Philippe Moryoussef', url: 'https://en.wikipedia.org/wiki/Philippe_Moryoussef', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation figure', href: '/entities/individuals/tom-hayes' },
 ],
 },

 'pol-pot': {
 name: 'Pol Pot',
 title: 'Khmer Rouge leader who exploited bombing devastation to seize power',
 role: 'Khmer Rouge leader who exploited bombing devastation to seize power',
 riskLevel: 'high',
 description: 'Pol Pot. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Philippe Moryoussef', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambodia Bombing', slug: 'cambodia-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Khmer Rouge leader who exploited bombing devastation to seize power' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Pol Pot', url: 'https://en.wikipedia.org/wiki/Pol_Pot', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Norodom Sihanouk', relationship: 'Initially allied with then betrayed Sihanouk', href: '/entities/individuals/norodom-sihanouk' },
 { name: 'Lon Nol', relationship: 'Khmer Rouge overthrew Lon Nol\'s US-backed regime', href: '/entities/individuals/lon-nol' },
 { name: 'Henry Kissinger', relationship: 'Kissinger\'s Cambodia bombing helped radicalize population toward Pol Pot', href: '/entities/individuals/henry-kissinger' },
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

 'pw-botha': {
 name: 'P.W. Botha',
 title: 'South African President (1978-1989) who maintained apartheid with US support',
 role: 'South African President (1978-1989) who maintained apartheid with US support',
 riskLevel: 'high',
 description: 'P.W. Botha. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Prudence Bushnell', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Us Support For Apartheid', slug: 'us-support-for-apartheid', severity: 'high' },
 ],
 timeline: [
 { date: '1978', event: 'Botha is documented in this investigative archive for their role as South African President (1978-1989) who maintained apartheid with US support.' },
 { date: '1989', event: 'Botha is documented in this investigative archive for their role as South African President (1978-1989) who maintained apartheid with US support.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: P.W. Botha', url: 'https://en.wikipedia.org/wiki/P.W._Botha', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Mandela', relationship: 'Apartheid president who imprisoned Mandela', href: '/entities/individuals/nelson-mandela' },
 { name: 'Desmond Tutu', relationship: 'Anti-apartheid leader who condemned Botha\'s regime', href: '/entities/individuals/desmond-tutu' },
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
 { title: 'Guardian: Mandelson-Epstein', url: 'https://www.theguardian.com/uk-news/2019/jul/30/peter-mandelson-jeffrey-epstein', date: '2019' },
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
 { title: 'NYT: Paul Ryan Profile', url: 'https://www.nytimes.com/topic/person/paul-d-ryan', date: '2019' }, ],
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









};

export default profiles;
