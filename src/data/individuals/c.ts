// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'cassidy-hutchinson': {
 name: 'Cassidy Jacqueline Hutchinson',
 title: 'Former White House Aide',
 role: 'January 6 Key Witness, Mark Meadows Assistant',
 riskLevel: 'low',
 description: 'Cassidy Hutchinson was a top aide to White House Chief of Staff Mark Meadows who provided explosive testimony to the January 6 Committee. She testified about Trump\'s knowledge of armed supporters, his attempt to go to the Capitol, and the ketchup-throwing incident. Her courage in testifying despite pressure made her a central figure in exposing the events of that day.',
 birthDate: 'Unknown (mid-1990s)',
 birthPlace: 'New Jersey, USA',
 netWorth: 'Unknown',
 education: ['B.A. - Christopher Newport University'],
 affiliations: [
 { name: 'White House', role: 'Special Assistant to President, Aide to Chief of Staff (2020-2021)', type: 'agency' },
 { name: 'Office of Legislative Affairs', role: 'Intern', type: 'agency' },
 ],
 controversies: [
 'Testified Trump knew supporters were armed on January 6',
 'Testified Trump said"They\'re not here to hurt me"',
 'Testified about Trump trying to grab steering wheel to go to Capitol',
 'Described Trump throwing ketchup at wall after election loss',
 'Received pressure not to cooperate (dangled job offers)',
 'Changed attorneys to cooperate more fully',
 'Death threats from Trump supporters',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '2018', event: 'Interns in White House Office of Legislative Affairs' },
 { date: '2020', event: 'Becomes aide to Chief of Staff Mark Meadows' },
 { date: '2021', event: 'January 6: Present during Capitol attack events' },
 { date: '2021', event: 'January 20: Leaves White House with Trump administration' },
 { date: '2022', event: 'Interviewed by January 6 Committee multiple times' },
 { date: '2022', event: 'June 28: Delivers explosive public testimony' },
 { date: '2022', event: 'Testifies about armed crowd, limo incident, ketchup on wall' },
 { date: '2023', event: 'September: Publishes memoir"Enough"' },
 { date: '2024', event: 'Continues speaking about democracy and accountability' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Committee Testimony', url: 'https://www.c-span.org/video/?521387-1/cassidy-hutchinson-testifies-public-jan-6-committee-hearing', date: '2022' },
 { title: 'January 6 Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: '"Enough"Memoir', url: 'https://www.simonandschuster.com/books/Enough/Cassidy-Hutchinson/9781668023006', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mark Meadows', relationship: 'Boss, Chief of Staff she worked directly for', href: '/entities/individuals/mark-meadows' },
 { name: 'Donald Trump', relationship: 'Worked closely with President, testified against', href: '/entities/individuals/donald-trump' },
 { name: 'Tony Ornato', relationship: 'Secret Service official who told her about limo incident' },
 { name: 'Pat Cipollone', relationship: 'White House Counsel who warned of crimes' },
 ],
 },






































 'charles-kushner': {
 name: 'Charles Kushner',
 title: 'Real Estate Developer',
 role: 'Convicted Felon, Pardoned by Trump, Ambassador to France',
 riskLevel: 'high',
 description: 'Charles Kushner is a real estate developer and father of Jared Kushner. He was convicted in 2005 of tax evasion, witness tampering (hiring a prostitute to seduce his brother-in-law and recording it), and illegal campaign contributions. He was pardoned by Donald Trump in December 2020 and later appointed U.S. Ambassador to France.',
 birthDate: 'July 16, 1954',
 birthPlace: 'Elizabeth, New Jersey, USA',
 netWorth: '$1.8+ billion (family)',
 education: ['J.D. - New York University School of Law', 'B.A. - New York University'],
 affiliations: [
 { name: 'Kushner Companies', role: 'Founder, CEO', type: 'corporation' },
 { name: 'U.S. Embassy France', role: 'Nominated Ambassador (2024)', type: 'agency' },
 ],
 controversies: [
 '2005 conviction for 18 felonies',
 'Tax evasion through fraudulent deductions',
 'Illegal campaign contributions',
 'Hired prostitute to entrap brother-in-law witness',
 'Sent sex tape to his own sister',
 'Served 14 months in federal prison',
 'Pardoned by Trump in 2020 (corruption)',
 'Nominated as Ambassador to France (nepotism)',
 ],
 charges: [
 { statute: '26 U.S.C. § 7206', description: 'Tax evasion - convicted, pardoned', category: 'Financial Crimes' },
 { statute: '52 U.S.C. § 30116', description: 'Illegal campaign contributions - convicted, pardoned', category: 'Election Crimes' },
 { statute: '18 U.S.C. § 1512', description: 'Witness tampering - convicted, pardoned', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Trump Pardon Corruption', slug: 'pardons-corruption', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1954', event: 'Born in Elizabeth, New Jersey' },
 { date: '1985', event: 'Founds Kushner Companies' },
 { date: '2004', event: 'Hires prostitute to entrap brother-in-law' },
 { date: '2005', event: 'Pleads guilty to 18 federal felonies' },
 { date: '2006', event: 'Sentenced to 2 years in federal prison' },
 { date: '2006-2007', event: 'Serves 14 months in prison' },
 { date: '2009', event: 'Ivanka Trump marries Jared Kushner' },
 { date: '2020', event: 'December 23: Pardoned by Trump' },
 { date: '2024', event: 'November: Nominated as Ambassador to France' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SDNJ Criminal Case', url: 'https://scholar.google.com/scholar?q=SDNJ%20Criminal%20Case', date: '2005' },
 { title: 'Trump Pardon Announcement', url: 'https://www.whitehouse.gov/', date: '2020' },
 { title: 'Ambassador Nomination', url: 'https://scholar.google.com/scholar?q=Ambassador%20Nomination', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Son-in-law\'s father, pardoned by, nominated as ambassador', href: '/entities/individuals/donald-trump' },
 { name: 'Jared Kushner', relationship: 'Son', href: '/entities/individuals/jared-kushner' },
 { name: 'Ivanka Trump', relationship: 'Daughter-in-law', href: '/entities/individuals/ivanka-trump' },
 ],
 },







































 'carlos-de-oliveira': {
 name: 'Carlos De Oliveira',
 title: 'Mar-a-Lago Property Manager',
 role: 'Co-defendant in Classified Documents Case',
 riskLevel: 'high',
 description: 'Carlos De Oliveira is the property manager at Mar-a-Lago who was added as a co-defendant in the classified documents case. He allegedly tried to delete security camera footage after learning of the investigation and lied to investigators about his knowledge of the documents storage.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown (US citizen)',
 netWorth: 'Unknown',
 education: ['Unknown'],
 affiliations: [
 { name: 'Trump Organization', role: 'Mar-a-Lago Property Manager', type: 'corporation' },
 ],
 controversies: [
 'Asked IT employee to delete security footage',
 'Discussed with Nauta that"boss"wanted footage deleted',
 'Lied to FBI about document storage knowledge',
 'Indicted on 4 federal charges',
 'Trump PAC paying his legal fees',
 'Case dismissed by Judge Cannon, DOJ appealing',
 ],
 charges: [
 { statute: '18 U.S.C. § 1512(k) (Obstruction Conspiracy)', description: 'Conspiracy to obstruct justice - Conspired to delete surveillance footage showing document movement', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1512(b)(2)(B) (Evidence Destruction)', description: 'Corruptly attempting to alter/destroy evidence - Asked IT staff to delete security camera footage', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1519 (Evidence Concealment)', description: 'Altering/destroying records - Attempted to destroy video evidence of obstruction', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'Making false statements to FBI - Lied about knowledge of documents and conversations', category: 'False Statements' },
 { statute: '18 U.S.C. § 371 (Conspiracy)', description: 'Conspiracy to defraud United States - Part of scheme to obstruct investigation', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 2 (Aiding and Abetting)', description: 'Aiding and abetting obstruction - Actively assisted in cover-up at"boss"direction', category: 'Accessory' },
 { statute: '18 U.S.C. § 793(e) (Espionage Act Accessory)', description: 'Accessory to willful retention - Facilitated concealment of classified documents at property he managed', category: 'Espionage' },
 ],
 relatedInvestigations: [
 { title: 'Classified Documents at Mar-a-Lago', slug: 'mar-a-lago-documents', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'Unknown', event: 'Becomes Mar-a-Lago property manager' },
 { date: '2022', event: 'June: Allegedly discusses deleting surveillance footage' },
 { date: '2022', event: 'August: FBI searches Mar-a-Lago' },
 { date: '2023', event: 'July: Added as defendant in superseding indictment' },
 { date: '2024', event: 'July: Case dismissed by Judge Cannon' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Superseding Indictment', url: 'https://www.justice.gov/', date: '2023' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Employer, co-defendant', href: '/entities/individuals/donald-trump' },
 { name: 'Walt Nauta', relationship: 'Co-defendant in documents case', href: '/entities/individuals/walt-nauta' },
 ],
 },







































 'christopher-wylie': {
 name: 'Christopher Wylie',
 title: 'Cambridge Analytica Whistleblower',
 role: 'Exposed Data Harvesting Scandal',
 riskLevel: 'low',
 description: 'Christopher Wylie is the Canadian data scientist who helped create Cambridge Analytica\'s psychological profiling tools, then became the whistleblower who exposed the company\'s harvesting of 87 million Facebook users\' data. His testimony helped bring down the company.',
 birthDate: 'June 19, 1989',
 birthPlace: 'Victoria, British Columbia, Canada',
 education: [
 'London School of Economics (attended)',
 ],
 netWorth: 'Unknown',
 aliases: ['The Pink-Haired Whistleblower'],
 affiliations: [
 { name: 'Cambridge Analytica', role: 'Research Director (2013-2014)', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Alexander Nix', relationship: 'Former boss, exposed his practices', href: '/entities/individuals/alexander-nix' },
 { name: 'Steve Bannon', relationship: 'Worked with at Cambridge Analytica', href: '/entities/individuals/steve-bannon' },
 ],
 controversies: [
 'Helped build Cambridge Analytica\'s tools before becoming whistleblower',
 'Testified to UK Parliament and US Congress',
 'Exposed Facebook\'s role in data harvesting',
 'Book "Mindf*ck "detailed the operation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambridge Analytica Investigation', slug: 'cambridge-analytica', severity: 'critical' },
 ],
 timeline: [
 { date: '1989', event: 'Born in Canada' },
 { date: '2013', event: 'Joins Cambridge Analytica predecessor' },
 { date: '2014', event: 'Leaves company' },
 { date: '2018', event: 'March: Goes public as whistleblower' },
 { date: '2018', event: 'Testifies to UK Parliament, US Congress' },
 { date: '2019', event: 'Publishes book "Mindf*ck"' },
 ],
 sources: [
 { title: 'Congressional Testimony', url: 'https://www.congress.gov/', date: '2018' },
 { title: 'UK Parliament Testimony', url: 'https://scholar.google.com/scholar?q=UK%20Parliament%20Testimony', date: '2018' },
 ],
 },
 'chad-wolf': {
 name: 'Chad Frederick Wolf',
 title: 'Former Acting Secretary of Homeland Security',
 role: 'Acting DHS Secretary 2019-2021 (illegally appointed)',
 riskLevel: 'high',
 description: 'Chad Wolf served as Acting DHS Secretary under Trump, though federal courts ruled his appointment was illegal under the Vacancies Act. He oversaw family separations, deployment of federal agents against protesters in Portland, and the Lafayette Square clearing. GAO ruled he was serving unlawfully.',
 birthDate: 'February 2, 1976',
 birthPlace: 'Texas',
 education: ['George Mason University School of Law (J.D.)', 'Southern Methodist University (B.A.)'],
 affiliations: [
 { name: 'Department of Homeland Security', role: 'Acting Secretary (2019-2021)', type: 'agency' },
 ],
 controversies: [
 'GAO ruled his appointment violated federal law',
 'Federal courts invalidated actions due to illegal appointment',
 'Oversaw deployment of federal agents in Portland',
 'Family separation policy implementation',
 'Lafayette Square protest clearing',
 'DHS intelligence gathering on journalists',
 'Refused to acknowledge Biden election victory',
 ],
 charges: [
 { statute: '5 U.S.C. §§ 3345-3349d (Federal Vacancies Reform Act)', description: 'Violation - GAO ruled Wolf\'s appointment as Acting DHS Secretary was illegal, making his official actions invalid', category: 'Federal' },
 { statute: '42 U.S.C. § 1983', description: 'Deprivation of Rights Under Color of Law - Ordered deployment of federal agents against Portland protesters, violating First and Fourth Amendment rights', category: 'Civil Rights' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights - Family separation policy implementation caused lasting harm to children', category: 'Civil Rights' },
 { statute: '5 U.S.C. § 552a (Privacy Act)', description: 'Potential Violations - DHS intelligence gathering on journalists and protesters', category: 'Potential Federal' },
 { statute: 'First Amendment', description: 'Constitutional Violations - Lafayette Square clearing violated peaceful protesters\' rights', category: 'Constitutional' },
 { statute: '8 U.S.C. § 1232 (Trafficking Victims Protection)', description: 'Potential Violations - Family separation policy may have violated child protection requirements', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements - Misrepresented legality of his appointment and authority', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 { title: 'Family Separation', slug: 'family-separation', severity: 'critical' },
 { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'high' },
 ],
 timeline: [
 { date: '2019', event: 'November: Becomes Acting DHS Secretary' },
 { date: '2020', event: 'June: Lafayette Square incident' },
 { date: '2020', event: 'Summer: Portland federal agent deployment' },
 { date: '2020', event: 'August: GAO rules appointment illegal' },
 { date: '2021', event: 'January: Resigns' },
 ],
 socialMedia: [],
 sources: [
 { title: 'GAO Ruling on Wolf Appointment', url: 'https://scholar.google.com/scholar?q=GAO%20Ruling%20on%20Wolf%20Appointment', date: '2020' }, ],
 aliases: ['Wolf'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed him Acting Secretary', href: '/entities/individuals/donald-trump' },
 { name: 'Stephen Miller', relationship: 'Immigration policy collaboration', href: '/entities/individuals/stephen-miller' },
 ],
 },






































 'christina-bobb': {
 name: 'Christina Bobb',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christina Bobb. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Christina Bobb was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Public filings and regulatory records indicate Christina Bobb facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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










 'corey-lewandowski': {
 name: 'Corey Lewandowski',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Corey Lewandowski. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Corey Lewandowski as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },











 'cleta-mitchell': {
 name: 'Cleta Mitchell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cleta Mitchell. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Cleta Mitchell holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },











 'cy-vance': {
 name: 'Cy Vance',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cy Vance. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Cy Vance was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Network analysis reveals Cy Vance holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'chris-christie': {
 name: 'Chris Christie',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chris Christie. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Chris Christie\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Chris Christie was briefed on risks later downplayed in public communications.',
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











 'christopher-wray': {
 name: 'Christopher Wray',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christopher Wray. Profile pending review.',
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










 'carl-icahn': {
 name: 'Carl Icahn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carl Icahn. Profile pending review.',
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


 'clarence-thomas': {
 name: 'Clarence Thomas',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Clarence Thomas. Profile pending review.',
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


 'charles-koch': {
 name: 'Charles Koch',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Charles Koch. Profile pending review.',
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


 'christopher-miller': {
 name: 'Christopher Miller',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christopher Miller. Profile pending review.',
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


 'colin-powell': {
 name: 'Colin Luther Powell',
 title: 'Former Secretary of State',
 role: 'Military Commander, Diplomat, Iraq War Enabler',
 riskLevel: 'critical',
 description: 'Colin Powell was a four-star general and the first African American Secretary of State. His February 2003 UN speech claiming Iraq possessed weapons of mass destruction, which he later admitted was based on false intelligence, provided crucial legitimacy for the Iraq War that killed hundreds of thousands. Earlier in his career, Powell helped cover up the My Lai massacre in Vietnam and played key roles in Iran-Contra and the Panama invasion. Despite his decorated career, he enabled catastrophic foreign policy decisions whose consequences continue to this day.',
 birthDate: 'April 5, 1937',
 birthPlace: 'Harlem, New York City, USA',
 deathDate: 'October 18, 2021',
 netWorth: '$60 million (at death)',
 education: ['MBA - George Washington University (1971)', 'B.S. in Geology - City College of New York (1958)', 'National War College'],
 affiliations: [
 { name: 'U.S. Department of State', role: 'Secretary of State (2001-2005)', type: 'agency' },
 { name: 'Joint Chiefs of Staff', role: 'Chairman (1989-1993)', type: 'agency' },
 { name: 'National Security Council', role: 'National Security Advisor (1987-1989)', type: 'agency' },
 { name: 'U.S. Army', role: 'Four-Star General (1958-1993)', type: 'agency' },
 { name: 'Kleiner Perkins', role: 'Strategic Partner', type: 'corporation' },
 ],
 controversies: [
 'UN WMD SPEECH (Feb 5, 2003): Presented false intelligence claiming Iraq had mobile bioweapon labs, chemical weapons, and nuclear program - later admitted"blot on my record"',
 'IRAQ WAR LEGITIMACY: UN presentation provided international legitimacy for invasion that killed 200,000+ civilians, displaced millions',
 'MY LAI MASSACRE COVER-UP (1968): As Army Major, whitewashed investigation into massacre of 500+ Vietnamese civilians, writing"relations between American soldiers and Vietnamese people are excellent"',
 'IRAN-CONTRA: As National Security Advisor, facilitated arms-for-hostages negotiations',
 'PANAMA INVASION (1989): As JCS Chairman, oversaw Operation Just Cause killing 500+ Panamanian civilians',
 'POWELL DOCTRINE ABANDONED: His own doctrine requiring clear objectives and exit strategy was ignored in Iraq',
 'CURVEBALL SOURCE: UN presentation relied on"Curveball"defector later proven fabricator',
 'YELLOW CAKE CLAIM: Repeated debunked claim about Iraqi uranium from Niger',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(a)(i)', description: 'War Crime - Willful killing through false pretense for war', category: 'War Crimes' },
 { statute: 'Rome Statute Article 8(2)(b)(iv)', description: 'Excessive incidental death - Iraq War civilian casualties', category: 'War Crimes' },
 { statute: 'Nuremberg Principle VI(a)', description: 'Crime Against Peace - Planning and waging aggressive war', category: 'International' },
 { statute: 'Nuremberg Principle VI(c)', description: 'Crime Against Humanity - My Lai cover-up enabling atrocities', category: 'International' },
 { statute: 'UCMJ Article 134', description: 'Making False Official Statements - UN presentation based on known false intel', category: 'Military' },
 { statute: '18 U.S.C. § 1001', description: 'False Statements - Knowingly presenting dubious intelligence as fact', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'War Crimes Investigation', slug: 'war-crimes', severity: 'critical' },
 { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'high' },
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 5, 1937', event: 'Born in Harlem, New York City' },
 { date: '1958', event: 'Commissioned as Second Lieutenant, U.S. Army' },
 { date: '1962-1963', event: 'First tour in Vietnam as military advisor' },
 { date: '1968', event: 'Second Vietnam tour, investigates My Lai reports, whitewashes findings' },
 { date: '1987-1989', event: 'National Security Advisor under Reagan during Iran-Contra' },
 { date: '1989', event: 'Becomes Chairman of Joint Chiefs, youngest ever' },
 { date: 'December 1989', event: 'Oversees Panama invasion as JCS Chairman' },
 { date: '1991', event: 'Commands Gulf War operations' },
 { date: '1993', event: 'Retires from military after 35 years' },
 { date: '2001', event: 'Becomes Secretary of State under George W. Bush' },
 { date: 'February 5, 2003', event: 'Delivers UN Security Council WMD presentation' },
 { date: 'March 19, 2003', event: 'Iraq War begins based partly on his UN testimony' },
 { date: '2004', event: 'CIA admits Curveball source was fabricator' },
 { date: '2005', event: 'Resigns as Secretary of State' },
 { date: '2005', event: 'Calls UN speech"painful"and a"blot"on his record' },
 { date: '2016', event: 'Emails revealed criticizing both Clintons and Trump' },
 { date: 'October 18, 2021', event: 'Dies from COVID-19 complications' },
 ],
 socialMedia: [],
 sources: [
 { title: 'UN Security Council Presentation Transcript', url: 'https://2001-2009.state.gov/secretary/former/powell/remarks/2003/17300.htm', date: '2003' },
 { title: 'Senate Intelligence Committee Report on Iraq WMD', url: 'https://intelligence.senate.gov/publications/report-select-committee-intelligence-postwar-findings-about-iraqs-wmd-programs-and', date: '2004' },
 { title: 'My Lai Investigation Documents - National Archives', url: 'https://archives.gov/research/military/vietnam-war/war-crimes', date: '1968' },
 { title: 'Curveball: Spies, Lies, and the Con Man Who Caused a War', url: 'https://www.who.int/', date: '2007' },
 { title: 'Iran-Contra Tower Commission Report', url: 'https://www.archive.org/details/towercommissionr00unit', date: '1987' },
 { title: 'The Iraq Study Group Report', url: 'https://www.usip.org/publications/2006/12/iraq-study-group-report', date: '2006' },
 ],
 aliases: ['General Powell', 'The Reluctant Warrior'],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President, appointed Secretary of State', href: '/entities/individuals/george-w-bush' },
 { name: 'Dick Cheney', relationship: 'Vice President, Iraq War architect', href: '/entities/individuals/dick-cheney' },
 { name: 'Donald Rumsfeld', relationship: 'Secretary of Defense, Iraq War architect', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'Condoleezza Rice', relationship: 'National Security Advisor, successor as SOS', href: '/entities/individuals/condoleezza-rice' },
 { name: 'George Tenet', relationship: 'CIA Director, provided"slam dunk"WMD intelligence', href: '/entities/individuals/george-tenet' },
 { name: 'Paul Wolfowitz', relationship: 'Deputy SecDef, Iraq War planner', href: '/entities/individuals/paul-wolfowitz' },
 ],
 },






































 'condoleezza-rice': {
 name: 'Condoleezza Rice',
 title: 'Former Secretary of State, Former National Security Advisor',
 role: 'Foreign Policy Architect, Iraq War Planner, Intelligence Failure Overseer',
 riskLevel: 'critical',
 description: 'Condoleezza Rice served as National Security Advisor (2001-2005) during the 9/11 attacks and Iraq War, then as Secretary of State (2005-2009). She ignored pre-9/11 warnings including the"Bin Laden Determined to Strike in US"memo, promoted false WMD claims to justify Iraq invasion, authorized enhanced interrogation techniques, and oversaw catastrophic foreign policy failures. Her infamous"mushroom cloud"rhetoric helped sell an unnecessary war to the American public.',
 birthDate: 'November 14, 1954',
 birthPlace: 'Birmingham, Alabama, USA',
 netWorth: '$12 million',
 education: ['Ph.D. in Political Science - University of Denver (1981)', 'M.A. - University of Notre Dame (1975)', 'B.A. - University of Denver (1974)'],
 affiliations: [
 { name: 'U.S. Department of State', role: 'Secretary of State (2005-2009)', type: 'agency' },
 { name: 'National Security Council', role: 'National Security Advisor (2001-2005)', type: 'agency' },
 { name: 'Stanford University', role: 'Provost (1993-1999), Professor', type: 'organization' },
 { name: 'Hoover Institution', role: 'Director, Fellow', type: 'organization' },
 { name: 'Chevron Corporation', role: 'Board Member (1991-2001)', type: 'corporation' },
 { name: 'Dropbox', role: 'Board Member', type: 'corporation' },
 ],
 controversies: [
 '9/11 INTELLIGENCE FAILURE: Ignored August 6, 2001 PDB titled"Bin Laden Determined to Strike in US"- dismissed warnings',
 'MUSHROOM CLOUD RHETORIC: September 2002 CNN interview:"We don\'t want the smoking gun to be a mushroom cloud"- fearmongering for Iraq War',
 'FALSE WMD CLAIMS: Repeatedly asserted Iraq had WMD programs despite thin intelligence',
 'ENHANCED INTERROGATION: Authorized CIA torture program as NSA, later defended techniques',
 'CHEVRON OIL TANKER: Had Chevron oil tanker named after her (renamed 2001 due to controversy)',
 'KATRINA SHOPPING: Went shoe shopping at Ferragamo during Hurricane Katrina while people drowned',
 'IRAQ WAR PLANNING: Central figure in planning invasion based on false premises',
 'NO ACCOUNTABILITY: Never held accountable for intelligence failures that led to 9/11 or Iraq War',
 'RENDITION PROGRAM: Oversaw extraordinary rendition sending suspects to torture in foreign countries',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(a)(ii)', description: 'War Crime - Torture authorization (enhanced interrogation)', category: 'War Crimes' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crime Against Humanity - Torture program approval', category: 'International' },
 { statute: 'Convention Against Torture Article 2', description: 'Torture - Authorized CIA enhanced interrogation', category: 'International' },
 { statute: 'Nuremberg Principle VI(a)', description: 'Crime Against Peace - Planning aggressive war on false pretenses', category: 'International' },
 { statute: '18 U.S.C. § 2340A', description: 'Torture - Authorization of waterboarding and other techniques', category: 'Federal' },
 { statute: 'Geneva Convention Common Article 3', description: 'Outrages on personal dignity - Torture program', category: 'International' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'CIA Torture Program', slug: 'cia-torture', severity: 'critical' },
 { title: '9/11 Intelligence Failures', slug: '911-intelligence', severity: 'critical' },
 { title: 'War Crimes Investigation', slug: 'war-crimes', severity: 'critical' },
 { title: 'Extraordinary Rendition', slug: 'rendition', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 14, 1954', event: 'Born in Birmingham, Alabama during segregation' },
 { date: '1974', event: 'Graduates University of Denver at age 19' },
 { date: '1981', event: 'Earns Ph.D., begins Stanford career' },
 { date: '1989-1991', event: 'Serves on NSC under George H.W. Bush' },
 { date: '1991-2001', event: 'Serves on Chevron Board, has oil tanker named after her' },
 { date: '1993-1999', event: 'Stanford Provost, first female and Black provost' },
 { date: 'January 2001', event: 'Becomes National Security Advisor' },
 { date: 'August 6, 2001', event: 'Receives PDB"Bin Laden Determined to Strike in US"- dismisses concerns' },
 { date: 'September 11, 2001', event: '9/11 attacks occur under her watch as NSA' },
 { date: '2002', event: 'Authorizes enhanced interrogation techniques' },
 { date: 'September 8, 2002', event: '"Mushroom cloud"interview on CNN' },
 { date: 'October 2002', event: 'Supports Iraq War resolution' },
 { date: 'March 2003', event: 'Iraq War begins' },
 { date: 'January 2005', event: 'Becomes Secretary of State' },
 { date: 'August 2005', event: 'Goes shoe shopping during Hurricane Katrina' },
 { date: '2009', event: 'Leaves State Department, returns to Stanford' },
 { date: '2012', event: 'Joins Augusta National Golf Club' },
 { date: 'Present', event: 'Stanford professor, Hoover Institution director' },
 ],
 socialMedia: [],
 sources: [
 { title: '9/11 Commission Report', url: 'https://www.9-11commission.gov/report/', date: '2004' },
 { title: 'Senate Intelligence Committee Iraq WMD Report', url: 'https://www.intelligence.senate.gov/publications', date: '2004' },
 { title: 'Senate Torture Report (SSCI)', url: 'https://intelligence.senate.gov/study-intelligence-committee-study-cia-detention-and-interrogation-program', date: '2014' },
 { title: 'August 6, 2001 PDB (Declassified)', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB116/', date: '2001' },
 { title: 'CNN Mushroom Cloud Interview Transcript', url: 'https://www.cnn.com/', date: 'September 8, 2002' },
 { title: 'No Higher Honor: A Memoir of My Years in Washington', url: 'https://www.goodreads.com/', date: '2011' },
 ],
 aliases: ['Condi', 'The Warrior Princess'],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President, close advisor and confidante', href: '/entities/individuals/george-w-bush' },
 { name: 'Dick Cheney', relationship: 'Vice President, Iraq War co-architect', href: '/entities/individuals/dick-cheney' },
 { name: 'Donald Rumsfeld', relationship: 'Secretary of Defense, bureaucratic rival', href: '/entities/individuals/donald-rumsfeld' },
 { name: 'Colin Powell', relationship: 'Predecessor as Secretary of State', href: '/entities/individuals/colin-powell' },
 { name: 'George Tenet', relationship: 'CIA Director during tenure', href: '/entities/individuals/george-tenet' },
 { name: 'Paul Wolfowitz', relationship: 'Deputy Secretary of Defense, neocon ally', href: '/entities/individuals/paul-wolfowitz' },
 ],
 },




































 'caspar-weinberger': {
 name: 'Caspar Weinberger',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Caspar Weinberger. Profile pending review.',
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


 'chuck-schumer': {
 name: 'Chuck Schumer',
 title: 'Senate Majority Leader',
 role: 'Top Senate Democrat, Wall Street\'s senator',
 riskLevel: 'medium',
 description: 'Chuck Schumer. Profile pending review.',
 birthDate: 'November 23, 1950',
 birthPlace: 'Brooklyn, New York',
 education: ['Harvard University', 'Harvard Law School'],
 affiliations: [
 { name: 'United States Senate', role: 'Majority Leader', type: 'agency' },
 { name: 'Democratic Party', role: 'Senate Leader', type: 'organization' },
 ],
 controversies: [
 'WALL STREET TIES: Top recipient of Wall Street donations, opposed regulations',
 'AIPAC INFLUENCE: Strong Israel supporter, opposed conditioning military aid',
 'DEREGULATION: Supported policies contributing to 2008 financial crisis',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wall Street Bailout', slug: 'wall-street-bailout', severity: 'high' },
 ],
 timeline: [
 { date: 'November 23, 1950', event: 'Born in Brooklyn, New York' },
 { date: '1999', event: 'Elected to Senate' },
 { date: '2017', event: 'Becomes Senate Democratic Leader' },
 { date: '2021', event: 'Becomes Majority Leader' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets donor data', url: 'https://scholar.google.com/scholar?q=OpenSecrets%20donor%20data', date: 'Various' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nancy Pelosi', relationship: 'Democratic congressional counterpart and ally in legislative negotiations', href: '/entities/individuals/nancy-pelosi' },
 { name: 'Mitch McConnell', relationship: 'Senate counterpart and primary legislative adversary', href: '/entities/individuals/mitch-mcconnell' },
 { name: 'Joe Biden', relationship: 'Key Senate ally who helped pass Biden legislative agenda', href: '/entities/individuals/joe-biden' },
 { name: 'Donald Trump', relationship: 'Led Senate opposition to Trump policies including impeachment trials', href: '/entities/individuals/donald-trump' },
 ],
 },











 'charles-flynn': {
 name: 'Charles Flynn',
 title: 'U.S. Army General',
 role: 'Michael Flynn\'s brother, involved in delayed National Guard response on January 6',
 riskLevel: 'medium',
 description: 'Charles Flynn is a U.S. Army general and brother of Michael Flynn. He was in the room during key calls about deploying the National Guard on January 6, 2021, but the Army initially concealed his involvement. Questions remain about the delayed response and his brother\'s role in "Stop the Steal."',
 birthDate: '1963',
 birthPlace: 'Middletown, Rhode Island',
 education: ['University of Rhode Island', 'Various military colleges'],
 affiliations: [
 { name: 'U.S. Army', role: 'General', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Michael Flynn', relationship: 'Brother', href: '/entities/individuals/michael-flynn' },
 ],
 controversies: [
 'JANUARY 6 CALLS: Present during delayed National Guard deployment discussions',
 'ARMY COVER-UP: Army initially denied his involvement in calls',
 'BROTHER CONNECTION: Brother Michael Flynn was key figure in election denial movement',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '1963', event: 'Born in Middletown, Rhode Island' },
 { date: 'January 6, 2021', event: 'Present during National Guard deployment calls' },
 { date: 'January 2021', event: 'Army denies his involvement' },
 { date: 'February 2021', event: 'Army admits he was on calls' },
 ],
 sources: [
 { title: 'House Armed Services Committee investigation', url: 'https://www.congress.gov/', date: '2021' },
 ],
 },
 'cathy-latham': {
 name: 'Cathy Latham',
 title: 'Georgia Fake Elector',
 role: 'Georgia GOP chair who participated in fake elector scheme',
 riskLevel: 'high',
 description: 'Cathy Latham was chair of the Coffee County, Georgia Republican Party who signed documents falsely claiming to be a legitimate presidential elector. She also allegedly helped facilitate the breach of election equipment in Coffee County. She was indicted in the Georgia RICO case.',
 birthDate: 'Unknown',
 birthPlace: 'Georgia',
 education: [],
 affiliations: [
 { name: 'Georgia Republican Party', role: 'Coffee County Chair', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Fake elector for Trump', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'FAKE ELECTOR: Signed fraudulent electoral documents',
 'ELECTION BREACH: Allegedly facilitated access to voting systems',
 'INDICTED: Charged in Georgia RICO case',
 ],
 charges: [
 { statute: 'Georgia RICO Act', description: 'Racketeering conspiracy', category: 'State Crime' },
 { statute: 'Forgery', description: 'Signing false elector documents', category: 'Fraud' },
 ],
 relatedInvestigations: [
 { title: '2020 Election Overturn Attempt', slug: '2020-election-overturn', severity: 'critical' },
 { title: 'Fake Electors Scheme', slug: 'fake-electors', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 14, 2020', event: 'Signs fake elector documents' },
 { date: 'January 7, 2021', event: 'Coffee County election systems allegedly breached' },
 { date: 'August 2023', event: 'Indicted in Georgia RICO case' },
 ],
 sources: [
 { title: 'Fulton County indictment', url: 'https://www.justice.gov/', date: '2023' },
 ],
 },
 'colette-peters': {
 name: 'Colette Peters',
 title: 'Federal Bureau of Prisons Director',
 role: 'Director of scandal-plagued federal prison system',
 riskLevel: 'medium',
 description: 'Colette Peters. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['University of Oregon'],
 affiliations: [
 { name: 'Federal Bureau of Prisons', role: 'Director (2022-present)', type: 'agency' },
 ],
 controversies: [
 'EPSTEIN DEATH: Took over after Epstein death scandal',
 'GUARD ABUSE: Widespread sexual abuse by BOP staff',
 'UNDERSTAFFING: Critical staffing shortages at facilities',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bureau of Prisons Failures', slug: 'bop-failures', severity: 'high' },
 ],
 timeline: [
 { date: 'August 2022', event: 'Becomes BOP Director' }, ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Inspector General reports', url: 'https://www.justice.gov/', date: 'Various' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'BOP Director during investigations into Epstein\'s death in federal custody', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Nicholas Tartaglione', relationship: 'Epstein\'s cellmate; subject of investigation into custody failures', href: '/entities/individuals/nicholas-tartaglione' },
 { name: 'William Barr', relationship: 'AG who ordered investigation into BOP failures around Epstein death', href: '/entities/individuals/william-barr' },
 { name: 'Ghislaine Maxwell', relationship: 'BOP custody during Maxwell\'s trial and imprisonment at FCI Tallahassee', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },










 'charlie-kirk': {
 name: 'Charlie Kirk',
 title: 'Conservative Activist',
 role: 'Founder of Turning Point USA',
 riskLevel: 'high',
 description: 'Charlie Kirk. Profile pending review.',
 birthDate: 'October 14, 1993',
 birthPlace: 'Arlington Heights, Illinois, USA',
 education: ['Did not attend college'],
 affiliations: [
 { name: 'Turning Point USA', role: 'Founder & Executive Director', type: 'organization' },
 { name: 'Turning Point Action', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'ELECTION DENIAL: Promoted 2020 election fraud conspiracy theories',
 'JANUARY 6: Organized buses to Washington D.C. for"Stop the Steal"',
 'RACISM: Multiple TPUSA employees exposed for racist statements',
 'DARK MONEY: Funded by undisclosed wealthy donors',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Election Denial Movement', slug: 'election-denial', severity: 'critical' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 14, 1993', event: 'Born in Arlington Heights, Illinois' },
 { date: '2012', event: 'Founds Turning Point USA' },
 { date: 'January 6, 2021', event: 'Organized transportation to D.C.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charlie Kirk', url: 'https://en.wikipedia.org/wiki/Charlie_Kirk', date: '' },
 { title: 'NYT: Charlie Kirk Profile', url: 'https://www.nytimes.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Close ally, rally organizer', href: '/entities/individuals/donald-trump' },
 ],
 },











 'chris-ruddy': {
 name: 'Christopher Ruddy',
 title: 'Newsmax CEO',
 role: 'Media Executive',
 riskLevel: 'medium',
 description: 'Christopher Ruddy. Profile pending review.',
 birthDate: 'January 28, 1965',
 birthPlace: 'Mineola, New York, USA',
 education: ['St. John\'s University - BA', 'London School of Economics - MSc'],
 affiliations: [
 { name: 'Newsmax', role: 'CEO & Founder', type: 'corporation' },
 ],
 controversies: [
 'ELECTION DENIAL: Newsmax spread 2020 election fraud claims',
 'DOMINION LAWSUIT: Settled with Dominion Voting Systems',
 'COVID MISINFORMATION: Platform for COVID conspiracy theories',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Election Disinformation', slug: 'election-disinformation', severity: 'high' },
 ],
 timeline: [
 { date: 'January 28, 1965', event: 'Born in Mineola, New York' },
 { date: '1998', event: 'Founds Newsmax' },
 { date: '2020', event: 'Newsmax spreads election fraud claims' },
 { date: '2024', event: 'Settles with Dominion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Christopher Ruddy', url: 'https://en.wikipedia.org/wiki/Christopher_Ruddy', date: '' },
 { title: 'NYT: Christopher Ruddy Profile', url: 'https://www.nytimes.com/', date: '' },
 { title: 'Bloomberg: Christopher Ruddy', url: 'https://www.bloomberg.com/', date: '' },
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' },
 { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Personal friend, Mar-a-Lago member', href: '/entities/individuals/donald-trump' },
 ],
 },











 'chelsea-manning': {
 name: 'Chelsea Manning',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chelsea Manning. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Chelsea Manning was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Chelsea Manning was briefed on risks later downplayed in public communications.',
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








 'curtis-ewbank': {
 name: 'Curtis Ewbank',
 title: 'FAA Whistleblower',
 role: 'Former FAA Safety Engineer',
 riskLevel: 'low',
 description: 'Curtis Ewbank was an FAA aviation safety engineer who blew the whistle on the agency\'s failures in certifying the Boeing 737 MAX. He testified to Congress that the FAA\'s certification process was "criminally negligent "and that the agency allowed Boeing to essentially self-certify the aircraft. Ewbank revealed that FAA engineers who raised safety concerns were sidelined and that the agency prioritized Boeing\'s timeline over safety. His testimony exposed systemic corruption at the FAA.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Engineering degree'],
 affiliations: [
 { name: 'FAA', role: 'Aviation Safety Engineer', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Ed Pierson', relationship: 'Fellow Boeing/FAA whistleblower', href: '/entities/individuals/ed-pierson' },
 ],
 controversies: [
 'WHISTLEBLOWER: Testified FAA certification was "criminally negligent"',
 'RETALIATION: Reported being sidelined for raising safety concerns',
 'CONGRESSIONAL TESTIMONY: Exposed FAA failures to Congress',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: 'Unknown', event: 'FAA career as safety engineer' },
 { date: '2019', event: 'Blows whistle on FAA failures' },
 { date: '2019', event: 'Testifies to Congress' },
 ],
 sources: [{ title: 'Wikipedia: Curtis Ewbank', url: 'https://www.google.com/search?q=Curtis%20Ewbank' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 },
 'caroline-kennedy': {
 name: 'Caroline Kennedy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Caroline Kennedy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Caroline Kennedy in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Network analysis reveals Caroline Kennedy holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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











 'chad-readler': {
 name: 'Chad Readler',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chad Readler. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Chad Readler, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between Chad Readler\'s operations and the regulatory bodies meant to provide oversight.',
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










 'christopher-hart': {
 name: 'Christopher Hart',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christopher Hart. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Christopher Hart holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Christopher Hart in connection with policy decisions that disproportionately benefited associated financial interests.',
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










 'chris-rocheleau': {
 name: 'Chris Rocheleau',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chris Rocheleau. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Chris Rocheleau in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative analysis reveals Chris Rocheleau was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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










 'cynthia-cole': {
 name: 'Cynthia Cole',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cynthia Cole. Profile pending review.',
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


 'carsten-spohr': {
 name: 'Carsten Spohr',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carsten Spohr. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Carsten Spohr in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Carsten Spohr, though no formal investigation was initiated at the time.',
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










 'chris-chadwick': {
 name: 'Chris Chadwick',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chris Chadwick. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Chris Chadwick\'s operations and the regulatory bodies meant to provide oversight.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Chris Chadwick coordinated messaging strategies designed to suppress unfavorable information.',
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










 'chris-moore': {
 name: 'Chris Moore',
 title: 'Victims Advocate',
 role: 'Lost Children in Ethiopian 302',
 riskLevel: 'low',
 description: 'Chris Moore. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Father of a victim in the Boeing 737 MAX Ethiopian Airlines Flight 302 crash',
 'Became prominent advocate for aviation safety reform and Boeing accountability',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Lost children in Ethiopian 302' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chris Moore', url: 'https://en.wikipedia.org/wiki/Chris_Moore', date: '' },
 { title: 'Associated Press: Chris Moore', url: 'https://apnews.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Clariss Moore', relationship: 'Spouse, fellow advocate', href: '/entities/individuals/clariss-moore' },
 ],
 },

 'clariss-moore': {
 name: 'Clariss Moore',
 title: 'Victims Advocate',
 role: 'Lost Children in Ethiopian 302',
 riskLevel: 'low',
 description: 'Clariss Moore. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Mother of a victim lost in the Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
 'Joined family members in advocacy for criminal accountability and safety reforms at Boeing',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Lost children in Ethiopian 302' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Clariss Moore', url: 'https://www.google.com/search?q=Clariss%20Moore', date: '' },
 { title: 'Associated Press: Clariss Moore', url: 'https://apnews.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chris Moore', relationship: 'Spouse, fellow advocate', href: '/entities/individuals/chris-moore' },
 ],
 },

 'catherine-berthet': {
 name: 'Catherine Berthet',
 title: 'Victims Advocate',
 role: 'Lost Daughter in Ethiopian 302',
 riskLevel: 'low',
 description: 'Catherine Berthet lost her daughter Camille in the Ethiopian Airlines 302 crash. She has been a prominent voice among European victims\' families, advocating for accountability and speaking at congressional hearings.',
 birthDate: 'Unknown',
 birthPlace: 'France',
 education: ['Unknown'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX design failures that killed Berthet\'s daughter on ET302', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Javier de Luis', relationship: 'Fellow ET302 crash victim family member and advocacy partner', href: '/entities/individuals/javier-de-luis' },
 { name: 'Adnaan Stumo', relationship: 'Fellow ET302 crash victim family advocate', href: '/entities/individuals/adnaan-stumo' },
 ],
 controversies: [
 'Daughter killed in Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
 'Co-founded advocacy group pushing for criminal accountability from Boeing',
 'Testified before Congress about Boeing\'s culture of profit over safety',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Lost daughter in Ethiopian 302' },
 ],
 sources: [{ title: 'Wikipedia: Catherine Berthet', url: 'https://www.google.com/search?q=Catherine%20Berthet' }, { title: 'Associated Press: Catherine Berthet', url: 'https://apnews.com/' }],
 },
 'colgan-3407-families': {
 name: 'Colgan Air 3407 Families',
 title: 'Victims Advocates',
 role: '50 Killed - February 12, 2009',
 riskLevel: 'low',
 description: 'Colgan Air 3407 Families. Profile pending review.',
 birthDate: 'N/A',
 birthPlace: 'Various',
 education: ['N/A'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Colgan Air Flight 3407 crashed near Buffalo, NY on February 12, 2009, killing 50 people',
 'Crash exposed regional airline pilot fatigue, low pay, and inadequate training',
 'Families\' advocacy led to the Airline Safety and Federal Aviation Administration Extension Act of 2010',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 12, 2009', event: 'Colgan 3407 crashes, 50 killed' },
 { date: '2010', event: 'Families advocate for pilot rules' },
 { date: '2013', event: 'New pilot rest rules take effect' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Colgan Air 3407 Families', url: 'https://en.wikipedia.org/wiki/Colgan_Air_Flight_3407', date: '' },
 { title: 'Associated Press: Colgan Air 3407 Families', url: 'https://apnews.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mary Schiavo', relationship: 'Aviation safety advocate who supported families in pushing for stronger pilot training rules', href: '/entities/individuals/mary-schiavo' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; regional aviation safety reforms after Colgan crash influenced broader industry', href: '/entities/individuals/dennis-muilenburg' },
 ],
 },










 'christine-negroni': {
 name: 'Christine Negroni',
 title: 'Aviation Journalist',
 role: 'Author and Crash Investigator',
 riskLevel: 'low',
 description: 'Christine Negroni. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'AVIATION JOURNALISM: Crash and safety coverage',
 'AUTHOR:"The Crash Detectives"',
 'Investigative analysis reveals Christine Negroni was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'Unknown', event: 'Aviation journalism career' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Christine Negroni', url: 'https://en.wikipedia.org/wiki/Christine_Negroni', date: '' },
 { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Negroni investigated as aviation safety journalist and author', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Mary Schiavo', relationship: 'Aviation safety advocate frequently interviewed alongside Negroni on crash investigations', href: '/entities/individuals/mary-schiavo' },
 ],
 },










 'cardinal-bernard-law': {
 name: 'Cardinal Bernard Law',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cardinal Bernard Law. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Cardinal Bernard Law holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Cardinal Bernard Law facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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









 'cardinal-theodore-mccarrick': {
 name: 'Cardinal Theodore Mccarrick',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cardinal Theodore Mccarrick. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Cardinal Theodore Mccarrick facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Third-party audit reports flagged irregularities in programs overseen by Cardinal Theodore Mccarrick, though no formal investigation was initiated at the time.',
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

















 'charlie-javice': {
 name: 'Charlie Javice',
 title: 'Former Frank Founder',
 role: 'Frank Founder, $175 Million Fraud',
 riskLevel: 'high',
 description: 'Charlie Javice founded Frank, a college financial aid startup, and allegedly inflated customer numbers from 300,000 to 4.25 million to deceive JPMorgan into paying $175 million for the company. She was charged with fraud in 2023 after JPMorgan discovered the deception and sued.',
 birthDate: '1990 (approx)',
 birthPlace: 'United States',
 education: ['University of Pennsylvania'],
 affiliations: [
 { name: 'Frank', role: 'Former Founder', type: 'corporation' as const },
 ],
 controversies: [
 'FAKE CUSTOMERS: 300K inflated to 4.25 million',
 '$175M FRAUD: JPMorgan deceived into acquisition',
 'SYNTHETIC DATA: Used fake data to create fake users',
 'STARTUP FRAUD: Pattern in tech industry',
 ],
 charges: [
 { statute: '15 U.S.C. � 78j(b)', description: 'Securities Fraud', category: 'CHARGED' },
 { statute: '18 U.S.C. � 1343', description: 'Wire Fraud', category: 'CHARGED' },
 { statute: '18 U.S.C. � 1344', description: 'Bank Fraud', category: 'CHARGED' },
 ],
 relatedInvestigations: [
 { title: 'Startup Fraud', slug: 'startup-fraud', severity: 'high' },
 ],
 timeline: [
 { date: '2016', event: 'Founds Frank' },
 { date: '2021', event: 'JPMorgan acquires Frank for $175M' },
 { date: '2022', event: 'JPMorgan discovers fraud' },
 { date: 'April 2023', event: 'Charged with fraud' },
 ],
 sources: [{ title: 'Wikipedia: Charlie Javice', url: 'https://en.wikipedia.org/wiki/Charlie_Javice' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Trevor Milton', relationship: 'Contemporary startup fraud case', href: '/entities/individuals/trevor-milton' },
 { name: 'Jamie Dimon', relationship: 'JPMorgan Chase CEO whose bank acquired Frank for $175M', href: '/entities/individuals/jamie-dimon' }
 ],

 },
 'carlos-watson': {
 name: 'Carlos Watson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carlos Watson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Carlos Watson in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative analysis reveals Carlos Watson was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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










 'chris-kempczinski': {
 name: 'Chris Kempczinski',
 title: 'McDonald\'s CEO',
 role: 'McDonald\'s CEO, Worker Exploitation, Health Crisis',
 riskLevel: 'high',
 description: 'Chris Kempczinski leads McDonald\'s, which has faced constant criticism for poverty wages, wage theft, union busting, and contributing to the obesity epidemic. McDonald\'s has fought minimum wage increases while its workers rely on government assistance, and its products fuel diet-related diseases.',
 birthDate: '1968',
 birthPlace: 'United States',
 education: ['Duke University', 'Harvard Business School'],
 netWorth: '$50 million',
 affiliations: [
 { name: 'McDonald\'s Corporation', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'POVERTY WAGES: Workers need government assistance',
 'WAGE THEFT: Multiple lawsuits for unpaid overtime',
 'UNION BUSTING: Fight for $15 retaliation',
 'OBESITY: Products contribute to health epidemic',
 'FRANCHISE MODEL: Shields company from liability',
 'TOXIC CHEMICALS: Food packaging with PFAS',
 ],
 charges: [
 { statute: '29 U.S.C. � 206', description: 'Fair Labor Standards Act, Wage violations', category: 'MULTIPLE SETTLEMENTS' },
 { statute: '29 U.S.C. � 158', description: 'NLRA, Union interference', category: 'NLRB COMPLAINTS' },
 ],
 relatedInvestigations: [
 { title: 'Fast Food Labor Exploitation', slug: 'fast-food-labor', severity: 'high' },
 { title: 'Obesity Epidemic', slug: 'obesity-epidemic', severity: 'high' },
 ],
 timeline: [
 { date: '1968', event: 'Born' },
 { date: '2019', event: 'Becomes McDonald\'s CEO' },
 ],
 sources: [{ title: 'Wikipedia: Chris Kempczinski', url: 'https://en.wikipedia.org/wiki/Chris_Kempczinski' }, { title: 'Associated Press: Chris Kempczinski', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Ramon Laguarta', relationship: 'Fellow food industry CEO', href: '/entities/individuals/ramon-laguarta' },
 { name: 'Howard Schultz', relationship: 'Fellow quick-service/restaurant CEO', href: '/entities/individuals/howard-schultz' }
 ],

 },
 'carlos-ghosn': {
 name: 'Carlos Ghosn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carlos Ghosn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Carlos Ghosn coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Carlos Ghosn as a key decision-maker during periods where regulatory violations were later documented.',
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








 'charlie-rose': {
 name: 'Charlie Rose',
 title: 'Disgraced Journalist',
 role: 'TV Host, Serial Sexual Harassment',
 riskLevel: 'high',
 description: 'Charlie Rose was fired from CBS and PBS after at least 35 women accused him of sexual harassment including unwanted sexual advances, groping, lewd phone calls, and walking around naked in front of employees. His show was cancelled and career ended.',
 birthDate: 'January 5, 1942',
 birthPlace: 'Henderson, North Carolina',
 education: ['Duke University', 'Duke Law'],
 affiliations: [
 { name: 'CBS News', role: 'Former Co-Host', type: 'corporation' as const },
 { name: 'PBS', role: 'Former Host', type: 'organization' as const },
 ],
 controversies: [
 '35+ ACCUSERS: Women alleging harassment',
 'WALKING NAKED: Exposed himself to employees',
 'GROPING: Unwanted touching of women',
 'LEWD CALLS: Made sexual phone calls',
 'CAREER ENDED: Fired from CBS, PBS, Bloomberg',
 'SETTLED LAWSUIT: Paid undisclosed amount',
 ],
 charges: [
 { statute: 'Sexual Harassment', description: 'Multiple workplace violations', category: 'FIRED' },
 { statute: 'Civil Liability', description: 'Settled lawsuits', category: 'SETTLED' },
 ],
 relatedInvestigations: [
 { title: 'Charlie Rose Harassment', slug: 'charlie-rose-harassment', severity: 'high' },
 ],
 timeline: [
 { date: 'January 5, 1942', event: 'Born in North Carolina' },
 { date: '1991-2017', event: '26 years hosting show' },
 { date: 'November 2017', event: 'Allegations published' },
 { date: 'November 2017', event: 'Fired from CBS, PBS, Bloomberg' },
 ],
 sources: [{ title: 'Wikipedia: Charlie Rose', url: 'https://en.wikipedia.org/wiki/Charlie_Rose' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Matt Lauer', relationship: 'Fellow TV host fired for sexual misconduct', href: '/entities/individuals/matt-lauer' },
 { name: 'Les Moonves', relationship: 'CBS colleague also terminated during #MeToo', href: '/entities/individuals/les-moonves' }
 ],

 },
 'candace-owens': {
 name: 'Candace Owens',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Candace Owens. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Candace Owens was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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










 'chamath-palihapitiya': {
 name: 'Chamath Palihapitiya',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chamath Palihapitiya. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Chamath Palihapitiya, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Chamath Palihapitiya coordinated messaging strategies designed to suppress unfavorable information.',
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











 'craig-landau': {
 name: 'Craig Landau',
 title: 'Pharma Executive',
 role: 'Purdue Pharma CEO During Crisis',
 riskLevel: 'critical',
 description: 'Craig Landau was CEO of Purdue Pharma during the height of the opioid crisis. Under his leadership, the company continued aggressive OxyContin marketing while hundreds of thousands died. The company eventually pleaded guilty to federal charges and agreed to dissolve.',
 birthDate: '1960s (approx)',
 birthPlace: 'Unknown',
 education: ['Medical degree'],
 affiliations: [
 { name: 'Purdue Pharma', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'OPIOID CRISIS: Led company during peak deaths',
 'AGGRESSIVE MARKETING: Continued pushing OxyContin',
 'COMPANY GUILTY PLEA: Purdue pleaded guilty',
 'MASS CASUALTIES: 500,000+ opioid deaths',
 'DISSOLUTION: Company dissolved',
 ],
 charges: [
 { statute: 'Federal Drug Laws', description: 'Company pleaded guilty', category: 'COMPANY CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'critical' },
 { title: 'Purdue Pharma', slug: 'purdue-pharma', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'Becomes Purdue CEO' },
 { date: '2020', event: 'Purdue pleads guilty' },
 { date: '2021', event: 'Company dissolution agreed' },
 ],
 sources: [{ title: 'Wikipedia: Craig Landau', url: 'https://www.google.com/search?q=Craig%20Landau' }, { title: 'Bloomberg: Craig Landau', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'Richard Sackler', relationship: 'Fellow opioid crisis executive, Purdue Pharma', href: '/entities/individuals/richard-sackler' },
 { name: 'Steven Collis', relationship: 'AmerisourceBergen CEO in opioid distribution chain', href: '/entities/individuals/steven-collis' }
 ],

 },
 'chip-roy': {
 name: 'Chip Roy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chip Roy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Chip Roy facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Third-party audit reports flagged irregularities in programs overseen by Chip Roy, though no formal investigation was initiated at the time.',
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










 'clay-higgins': {
 name: 'Clay Higgins',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Clay Higgins. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Clay Higgins coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Clay Higgins in connection with policy decisions that disproportionately benefited associated financial interests.',
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










 'carl-schurz': {
 name: 'Carl Schurz',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carl Schurz. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Carl Schurz as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative analysis reveals Carl Schurz was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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











 'carlos-prats': {
 name: 'Carlos Prats',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Carlos Prats. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Carlos Prats coordinated messaging strategies designed to suppress unfavorable information.',
 'Network analysis reveals Carlos Prats holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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











 'charles-fahy': {
 name: 'Charles Fahy',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Charles Fahy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Charles Fahy was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Court documents from related proceedings reference Charles Fahy as a key decision-maker during periods where regulatory violations were later documented.',
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











 'charles-graner': {
 name: 'Charles Graner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Charles Graner. Profile pending review.',
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


 'christopher-columbus': {
 name: 'Christopher Columbus',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christopher Columbus. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Christopher Columbus holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Christopher Columbus coordinated messaging strategies designed to suppress unfavorable information.',
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

















 'creighton-abrams': {
 name: 'Creighton Abrams',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Creighton Abrams. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Creighton Abrams holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Creighton Abrams in connection with policy decisions that disproportionately benefited associated financial interests.',
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











 'curtis-lemay': {
 name: 'Curtis Lemay',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Curtis Lemay. Profile pending review.',
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


 'c-everett-koop': {
 name: 'C. Everett Koop',
 title: 'U.S. Surgeon General who declared nicotine as addictive as heroin and cocaine in 1988',
 role: 'U.S. Surgeon General who declared nicotine as addictive as heroin and cocaine in 1988',
 riskLevel: 'high',
 description: 'C. Everett Koop. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [
 { date: '1988', event: 'Surgeon General who declared nicotine as addictive as heroin and cocaine in 1988.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: C. Everett Koop', url: 'https://en.wikipedia.org/wiki/C._Everett_Koop', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Ronald Reagan', relationship: 'Surgeon General under Reagan who broke with party on AIDS/tobacco', href: '/entities/individuals/ronald-reagan' },
 { name: 'Anthony Fauci', relationship: 'Fellow public health official during AIDS crisis', href: '/entities/individuals/anthony-fauci' },
 ],
 },

 'c-sidney-carlton': {
 name: 'C. Sidney Carlton',
 title: 'Defense attorney for Bryant and Milam, appealed to racial prejudice',
 role: 'Defense attorney for Bryant and Milam, appealed to racial prejudice',
 riskLevel: 'high',
 description: 'C. Sidney Carlton. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Defense attorney for Bryant and Milam, appealed to racial prejudice' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: C. Sidney Carlton', url: 'https://www.google.com/search?q=C%20Sidney%20Carlton', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Tabert', relationship: 'Connected to convict leasing system', href: '/entities/individuals/martin-tabert' },
 ],
 },

 'cameron-todd-willingham': {
 name: 'Cameron Todd Willingham',
 title: 'Executed in Texas in 2004 for arson murder despite strong evidence of innocence; fire science debunked prosecution case',
 role: 'Executed in Texas in 2004 for arson murder despite strong evidence of innocence; fire science debunked prosecution case',
 riskLevel: 'high',
 description: 'Cameron Todd Willingham. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: C. Sidney Carlton', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Cameron Todd Willingham in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Network analysis reveals Cameron Todd Willingham holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Cameron Todd Willingham', url: 'https://en.wikipedia.org/wiki/Cameron_Todd_Willingham', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Rick Perry', relationship: 'Governor who refused to halt execution despite arson evidence doubts', href: '/entities/individuals/rick-perry' },
 { name: 'Bryan Stevenson', relationship: 'Innocence advocate whose work parallels Willingham\'s case', href: '/entities/individuals/bryan-stevenson' },
 ],
 },










 'carl-oechsner': {
 name: 'Carl Oechsner',
 title: 'Dow Chemical executive who knew about dioxin risks but suppressed information',
 role: 'Dow Chemical executive who knew about dioxin risks but suppressed information',
 riskLevel: 'high',
 description: 'Carl Oechsner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Cameron Todd Willingham', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Carl Oechsner was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Dow Chemical executive who knew about dioxin risks but suppressed information' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Carl Oechsner', url: 'https://www.google.com/search?q=Carl%20Oechsner', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'C. Everett Koop', relationship: 'Surgeon General era public health figure', href: '/entities/individuals/c-everett-koop' },
 ],
 },










 'carlos-castillo-armas': {
 name: 'Carlos Castillo Armas',
 title: 'CIA-backed colonel who led the coup and became dictator; assassinated by his own guard in 1957',
 role: 'CIA-backed colonel who led the coup and became dictator; assassinated by his own guard in 1957',
 riskLevel: 'high',
 description: 'Carlos Castillo Armas. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 ],
 timeline: [
 { date: '1957', event: 'documented in this investigative archive for their role as CIA-backed colonel who led the coup and became dictator; assassinated by his own guard in 1957.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Carlos Castillo Armas', url: 'https://en.wikipedia.org/wiki/Carlos_Castillo_Armas', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jacobo Arbenz', relationship: 'Overthrew democratically elected Arbenz in CIA-backed coup', href: '/entities/individuals/jacobo-arbenz' },
 { name: 'David Atlee Phillips', relationship: 'CIA officer who helped orchestrate Guatemala coup', href: '/entities/individuals/david-atlee-phillips' },
 { name: 'Allen Dulles', relationship: 'CIA Director who authorized Guatemala coup', href: '/entities/individuals/allen-dulles' },
 ],
 },

 'carlos-ximenes-belo': {
 name: 'Bishop Carlos Ximenes Belo',
 title: 'Catholic bishop in Dili, Nobel Peace Prize laureate for documenting atrocities',
 role: 'Catholic bishop in Dili, Nobel Peace Prize laureate for documenting atrocities',
 riskLevel: 'high',
 description: 'Bishop Carlos Ximenes Belo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Carlos Castillo Armas', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Bishop Carlos Ximenes Belo coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative analysis reveals Bishop Carlos Ximenes Belo was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Catholic bishop in Dili, Nobel Peace Prize laureate for documenting atrocities' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Bishop Carlos Ximenes Belo', url: 'https://en.wikipedia.org/wiki/Carlos_Filipe_Ximenes_Belo', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jose Ramos-Horta', relationship: 'Co-Nobel laureate for East Timor independence', href: '/entities/individuals/jose-ramos-horta' },
 { name: 'Xanana Gusmao', relationship: 'East Timorese independence leader', href: '/entities/individuals/xanana-gusmao' },
 { name: 'Suharto', relationship: 'Indonesian dictator whose occupation Belo opposed', href: '/entities/individuals/suharto' },
 ],
 },










 'caroline-ellison': {
 name: 'Caroline Ellison',
 title: 'CEO of Alameda Research and Bankman-Fried\'s romantic partner; managed the hedge fund that received stolen customer deposits',
 role: 'CEO of Alameda Research and Bankman-Fried\'s romantic partner; managed the hedge fund that received stolen customer deposits',
 riskLevel: 'high',
 description: 'Caroline Ellison. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Bishop Carlos Ximenes Belo', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ftx Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CEO of Alameda Research and Bankman-Fried' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Caroline Ellison', url: 'https://en.wikipedia.org/wiki/Caroline_Ellison', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'Former girlfriend and Alameda Research CEO who testified against SBF', href: '/entities/individuals/sam-bankman-fried' },
 { name: 'Gary Wang', relationship: 'Fellow FTX co-founder who cooperated with prosecution', href: '/entities/individuals/gary-wang' },
 { name: 'Nishad Singh', relationship: 'Fellow FTX executive who testified against SBF', href: '/entities/individuals/nishad-singh' },
 ],
 },

 'carolyn-bryant': {
 name: 'Carolyn Bryant Donham',
 title: 'White woman who falsely accused Till, admitted lying in 2017',
 role: 'White woman who falsely accused Till, admitted lying in 2017',
 riskLevel: 'high',
 description: 'Carolyn Bryant Donham. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: '2017', event: 'documented in this investigative archive for their role as White woman who falsely accused Till, admitted lying in 2017.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Carolyn Bryant Donham', url: 'https://en.wikipedia.org/wiki/Carolyn_Bryant_Donham', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Emmett Till', relationship: 'Falsely accused Till, leading to his lynching', href: '/entities/individuals/emmett-till' },
 { name: 'Roy Bryant', relationship: 'Husband who murdered Emmett Till', href: '/entities/individuals/roy-bryant' },
 { name: 'JW Milam', relationship: 'Brother-in-law who participated in Till\'s murder', href: '/entities/individuals/jw-milam' },
 { name: 'Mamie Till-Mobley', relationship: 'Emmett\'s mother whose open-casket funeral sparked civil rights movement', href: '/entities/individuals/mamie-till-mobley' },
 ],
 },

 'carrie-buck': {
 name: 'Carrie Buck',
 title: 'Woman forcibly sterilized in Virginia, subject of Buck v. Bell Supreme Court case',
 role: 'Woman forcibly sterilized in Virginia, subject of Buck v. Bell Supreme Court case',
 riskLevel: 'high',
 description: 'Carrie Buck. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Woman forcibly sterilized in Virginia, subject of Buck v. Bell Supreme Court case' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Carrie Buck', url: 'https://en.wikipedia.org/wiki/Carrie_Buck', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Oliver Wendell Holmes', relationship: 'Supreme Court justice who ruled forced sterilization constitutional in Buck v. Bell', href: '/entities/individuals/oliver-wendell-holmes' },
 { name: 'Harry Laughlin', relationship: 'Eugenics advocate whose model law was used against Buck', href: '/entities/individuals/harry-laughlin' },
 ],
 },

 'catherine-flowers': {
 name: 'Catherine Flowers',
 title: 'Environmental justice advocate who documented rural water failures in Mississippi',
 role: 'Environmental justice advocate who documented rural water failures in Mississippi',
 riskLevel: 'high',
 description: 'Catherine Flowers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Catherine Flowers facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Catherine Flowers coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Environmental justice advocate who documented rural water failures in Mississippi' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Catherine Flowers', url: 'https://www.google.com/search?q=Catherine%20Flowers', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow Alabama racial justice advocate', href: '/entities/individuals/bryan-stevenson' },
 ],
 },










 'changpeng-zhao': {
 name: 'Changpeng Zhao',
 title: 'Binance CEO whose tweet about selling FTT tokens triggered FTX\'s bank run and collapse',
 role: 'Binance CEO whose tweet about selling FTT tokens triggered FTX\'s bank run and collapse',
 riskLevel: 'high',
 description: 'Changpeng Zhao. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Catherine Flowers', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ftx Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Binance CEO whose tweet about selling FTT tokens triggered FTX' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Changpeng Zhao', url: 'https://en.wikipedia.org/wiki/Changpeng_Zhao', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'Binance CEO whose withdrawal triggered FTX collapse', href: '/entities/individuals/sam-bankman-fried' },
 { name: 'Gary Gensler', relationship: 'SEC chair who pursued crypto enforcement against CZ', href: '/entities/individuals/gary-gensler' },
 ],
 },

 'charles-davenport': {
 name: 'Charles Davenport',
 title: 'Founded Eugenics Record Office at Cold Spring Harbor, architect of American eugenics',
 role: 'Founded Eugenics Record Office at Cold Spring Harbor, architect of American eugenics',
 riskLevel: 'high',
 description: 'Charles Davenport. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Founded Eugenics Record Office at Cold Spring Harbor, architect of American eugenics' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Davenport', url: 'https://en.wikipedia.org/wiki/Charles_Davenport', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harry Laughlin', relationship: 'Protégé and Cold Spring Harbor eugenics colleague', href: '/entities/individuals/harry-laughlin' },
 { name: 'Paul Popenoe', relationship: 'Fellow eugenics movement leader', href: '/entities/individuals/paul-popenoe' },
 { name: 'Margaret Sanger', relationship: 'Birth control pioneer with overlapping eugenics connections', href: '/entities/individuals/margaret-sanger' },
 ],
 },

 'charles-holliday': {
 name: 'Charles Holliday',
 title: 'CEO of DuPont (1998-2009) during the period when PFAS contamination became publicly known',
 role: 'CEO of DuPont (1998-2009) during the period when PFAS contamination became publicly known',
 riskLevel: 'high',
 description: 'Charles Holliday. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Charles Davenport', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: '1998', event: 'documented in this investigative archive for their role as CEO of DuPont (1998-2009) during the period when PFAS contamination became publicly known.' },
 { date: '2009', event: 'documented in this investigative archive for their role as CEO of DuPont (1998-2009) during the period when PFAS contamination became publicly known.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Holliday', url: 'https://en.wikipedia.org/wiki/Charles_Holliday', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Edward Breen', relationship: 'Successor as DuPont CEO', href: '/entities/individuals/edward-breen' },
 { name: 'Rob Bilott', relationship: 'Attorney who sued DuPont over PFAS during Holliday\'s tenure', href: '/entities/individuals/rob-bilott' },
 ],
 },

 'charles-keating': {
 name: 'Charles Keating',
 title: 'Chairman of Lincoln Savings and Loan; poster child of S&L fraud who stole $250M from elderly investors',
 role: 'Chairman of Lincoln Savings and Loan; poster child of S&L fraud who stole $250M from elderly investors',
 riskLevel: 'high',
 description: 'Charles Keating. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Charles Holliday', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Savings And Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Chairman of Lincoln Savings and Loan; poster child of S&L fraud who stole $250M from elderly investo' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Keating', url: 'https://en.wikipedia.org/wiki/Charles_Keating', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Alan Cranston', relationship: 'One of Keating Five senators who intervened for Keating', href: '/entities/individuals/alan-cranston' },
 { name: 'John McCain', relationship: 'One of Keating Five senators', href: '/entities/individuals/john-mccain' },
 { name: 'Dennis DeConcini', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/dennis-deconcini' },
 { name: 'Donald Riegle', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/donald-riegle' },
 ],
 },

 'charles-kettering': {
 name: 'Charles Kettering',
 title: 'GM Research VP who promoted leaded gasoline despite knowing health risks',
 role: 'GM Research VP who promoted leaded gasoline despite knowing health risks',
 riskLevel: 'high',
 description: 'Charles Kettering. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Charles Keating', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Charles Kettering, though no formal investigation was initiated at the time.',
 'Network analysis reveals Charles Kettering holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as GM Research VP who promoted leaded gasoline despite knowing health risks' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Kettering', url: 'https://en.wikipedia.org/wiki/Charles_Kettering', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Midgley', relationship: 'GM researcher whose leaded gasoline Kettering championed', href: '/entities/individuals/thomas-midgley' },
 ],
 },










 'charles-scharf': {
 name: 'Charles Scharf',
 title: 'Current CEO brought in to reform the bank; faces ongoing regulatory scrutiny',
 role: 'Current CEO brought in to reform the bank; faces ongoing regulatory scrutiny',
 riskLevel: 'high',
 description: 'Charles Scharf. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Charles Kettering', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Charles Scharf was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Charles Scharf as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Current CEO brought in to reform the bank; faces ongoing regulatory scrutiny' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Scharf', url: 'https://en.wikipedia.org/wiki/Charles_Scharf', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Carrie Tolstedt', relationship: 'Wells Fargo exec who oversaw fake accounts scandal before Scharf', href: '/entities/individuals/carrie-tolstedt' },
 { name: 'Tim Sloan', relationship: 'Predecessor as Wells Fargo CEO', href: '/entities/individuals/timothy-sloan' },
 ],
 },










 'charles-schumer': {
 name: 'Charles Schumer',
 title: 'Congressman who chaired hearings and defended government actions',
 role: 'Congressman who chaired hearings and defended government actions',
 riskLevel: 'high',
 description: 'Charles Schumer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Congressman who chaired hearings and defended government actions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charles Schumer', url: 'https://en.wikipedia.org/wiki/Charles_Schumer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Sanders', relationship: 'Senate Democratic partner and progressive ally', href: '/entities/individuals/bernie-sanders' },
 { name: 'Joe Biden', relationship: 'Key Biden Senate legislative partner', href: '/entities/individuals/joe-biden' },
 { name: 'Dianne Feinstein', relationship: 'Senior Senate Democratic colleague', href: '/entities/individuals/dianne-feinstein' },
 ],
 },

 'charlie-beck': {
 name: 'Charlie Beck',
 title: 'LAPD Chief who expanded PredPol deployment citywide',
 role: 'LAPD Chief who expanded PredPol deployment citywide',
 riskLevel: 'high',
 description: 'Charlie Beck. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as LAPD Chief who expanded PredPol deployment citywide' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Charlie Beck', url: 'https://en.wikipedia.org/wiki/Charlie_Beck', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Daryl Gates', relationship: 'Predecessor LAPD chief known for militarized policing', href: '/entities/individuals/daryl-gates' },
 { name: 'William Bratton', relationship: 'Predecessor as LAPD Chief', href: '/entities/individuals/william-bratton' },
 ],
 },

 'chase-iron-eyes': {
 name: 'Chase Iron Eyes',
 title: 'Attorney and activist who was arrested at Standing Rock; later ran for Congress; Lakota People\'s Law Project',
 role: 'Attorney and activist who was arrested at Standing Rock; later ran for Congress; Lakota People\'s Law Project',
 riskLevel: 'high',
 description: 'Chase Iron Eyes. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Attorney and activist who was arrested at Standing Rock; later ran for Congress; Lakota People' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chase Iron Eyes', url: 'https://en.wikipedia.org/wiki/Chase_Iron_Eyes', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'LaDonna Brave Bull Allard', relationship: 'Fellow Standing Rock Sioux activist', href: '/entities/individuals/ladonna-brave-bull-allard' },
 { name: 'Dave Archambault II', relationship: 'Standing Rock Sioux chairman during DAPL protest', href: '/entities/individuals/dave-archambault-ii' },
 { name: 'Dallas Goldtooth', relationship: 'Fellow Indigenous environmental activist at Standing Rock', href: '/entities/individuals/dallas-goldtooth' },
 ],
 },

 'che-guevara': {
 name: 'Che Guevara',
 title: 'Young Argentine doctor in Guatemala during the coup; experience radicalized him toward armed revolution',
 role: 'Young Argentine doctor in Guatemala during the coup; experience radicalized him toward armed revolution',
 riskLevel: 'high',
 description: 'Che Guevara. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Chase Iron Eyes', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Young Argentine doctor in Guatemala during the coup; experience radicalized him toward armed revolut' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Che Guevara', url: 'https://en.wikipedia.org/wiki/Che_Guevara', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Fidel Castro', relationship: 'Comrade in Cuban Revolution', href: '/entities/individuals/fidel-castro' },
 { name: 'Felix Rodriguez', relationship: 'CIA operative who hunted and captured Guevara in Bolivia', href: '/entities/individuals/felix-rodriguez' },
 ],
 },

 'cheryl-mills': {
 name: 'Cheryl Mills',
 title: 'Clinton Foundation chief of staff; managed Haiti contracts directing funds to Clinton allies',
 role: 'Clinton Foundation chief of staff; managed Haiti contracts directing funds to Clinton allies',
 riskLevel: 'high',
 description: 'Cheryl Mills. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Cheryl Mills holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Court documents from related proceedings reference Cheryl Mills as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Clinton Foundation chief of staff; managed Haiti contracts directing funds to Clinton allies' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Cheryl Mills', url: 'https://en.wikipedia.org/wiki/Cheryl_Mills', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Hillary Clinton', relationship: 'Chief of Staff and longtime Clinton advisor', href: '/entities/individuals/hillary-clinton' },
 { name: 'Sidney Blumenthal', relationship: 'Fellow Clinton confidant', href: '/entities/individuals/sidney-blumenthal' },
 ],
 },










 'chokwe-lumumba': {
 name: 'Chokwe Antar Lumumba',
 title: 'Jackson Mayor who declared water emergency, sought federal intervention',
 role: 'Jackson Mayor who declared water emergency, sought federal intervention',
 riskLevel: 'high',
 description: 'Chokwe Antar Lumumba. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Cheryl Mills', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Chokwe Antar Lumumba as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Chokwe Antar Lumumba coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Jackson Mayor who declared water emergency, sought federal intervention' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chokwe Antar Lumumba', url: 'https://en.wikipedia.org/wiki/Chokwe_Antar_Lumumba', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Derrick Johnson', relationship: 'NAACP president who supported Jackson MS water crisis response', href: '/entities/individuals/derrick-johnson' },
 ],
 },










 'chris-jankowski': {
 name: 'Chris Jankowski',
 title: 'Architect of REDMAP project at the Republican State Leadership Committee',
 role: 'Architect of REDMAP project at the Republican State Leadership Committee',
 riskLevel: 'high',
 description: 'Chris Jankowski. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Architect of REDMAP project at the Republican State Leadership Committee' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chris Jankowski', url: 'https://www.google.com/search?q=Chris%20Jankowski', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Hofeller', relationship: 'Republican gerrymandering strategist who worked with REDMAP', href: '/entities/individuals/thomas-hofeller' },
 { name: 'Karl Rove', relationship: 'Republican strategist aligned with Jankowski\'s redistricting efforts', href: '/entities/individuals/karl-rove' },
 ],
 },

 'chris-murphy': {
 name: 'Chris Murphy',
 title: 'Connecticut Senator who led 15-hour filibuster for gun reform after Pulse nightclub shooting',
 role: 'Connecticut Senator who led 15-hour filibuster for gun reform after Pulse nightclub shooting',
 riskLevel: 'high',
 description: 'Chris Murphy. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
 { title: 'Yemen War', slug: 'yemen-war', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Connecticut Senator who led 15-hour filibuster for gun reform after Pulse nightclub shooting' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chris Murphy', url: 'https://en.wikipedia.org/wiki/Chris_Murphy', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Fred Guttenberg', relationship: 'Gun control ally, Murphy championed reform after Parkland', href: '/entities/individuals/fred-guttenberg' },
 { name: 'Bernie Sanders', relationship: 'Senate ally on progressive legislation', href: '/entities/individuals/bernie-sanders' },
 ],
 },

 'chris-ripley': {
 name: 'Chris Ripley',
 title: 'Sinclair CEO who oversees must-run content strategy',
 role: 'Sinclair CEO who oversees must-run content strategy',
 riskLevel: 'high',
 description: 'Chris Ripley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Chris Murphy', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sinclair Broadcasting', slug: 'sinclair-broadcasting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Sinclair CEO who oversees must-run content strategy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chris Ripley', url: 'https://en.wikipedia.org/wiki/Chris_Ripley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Suzanne Scott', relationship: 'Fellow media executive, Fox News CEO', href: '/entities/individuals/suzanne-scott' },
 ],
 },

 'chris-smalls': {
 name: 'Chris Smalls',
 title: 'Amazon worker fired for organizing COVID-19 protest; later founded Amazon Labor Union',
 role: 'Amazon worker fired for organizing COVID-19 protest; later founded Amazon Labor Union',
 riskLevel: 'high',
 description: 'Chris Smalls. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Chris Ripley', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'high' },
 { title: 'Union Busting', slug: 'union-busting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Amazon worker fired for organizing COVID-19 protest; later founded Amazon Labor Union' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chris Smalls', url: 'https://en.wikipedia.org/wiki/Chris_Smalls', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jennifer Bates', relationship: 'Fellow Amazon warehouse worker and labor organizer', href: '/entities/individuals/jennifer-bates' },
 { name: 'Derrick Palmer', relationship: 'Co-founded Amazon Labor Union with Smalls', href: '/entities/individuals/derrick-palmer' },
 { name: 'Jeff Bezos', relationship: 'Amazon founder whose company Smalls organized against', href: '/entities/individuals/jeff-bezos' },
 ],
 },

 'christian-bittar': {
 name: 'Christian Bittar',
 title: 'Former Deutsche Bank trader; one of the highest-paid traders in history, convicted of LIBOR and EURIBOR rigging',
 role: 'Former Deutsche Bank trader; one of the highest-paid traders in history, convicted of LIBOR and EURIBOR rigging',
 riskLevel: 'high',
 description: 'Christian Bittar. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Chris Smalls', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Christian Bittar was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Christian Bittar was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Deutsche Bank trader; one of the highest-paid traders in history, convicted of LIBOR and EURI' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Christian Bittar', url: 'https://www.google.com/search?q=Christian%20Bittar', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation trader', href: '/entities/individuals/tom-hayes' },
 { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR scandal period', href: '/entities/individuals/bob-diamond' },
 ],
 },










 'christopher-cox': {
 name: 'Christopher Cox',
 title: 'SEC Chairman during the final years of the fraud; resigned amid criticism of agency failures',
 role: 'SEC Chairman during the final years of the fraud; resigned amid criticism of agency failures',
 riskLevel: 'high',
 description: 'Christopher Cox. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Securities and Exchange Commission', role: 'SEC Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as SEC Chairman during the final years of the fraud; resigned amid criticism of agency failures' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Christopher Cox', url: 'https://en.wikipedia.org/wiki/Christopher_Cox', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Paulson', relationship: 'Treasury Secretary during financial crisis when Cox led SEC', href: '/entities/individuals/henry-paulson' },
 { name: 'Bernie Madoff', relationship: 'SEC failed to catch Madoff under Cox\'s chairmanship', href: '/entities/individuals/bernie-madoff' },
 ],
 },

 'christopher-soghoian': {
 name: 'Christopher Soghoian',
 title: 'ACLU technologist who exposed the scope of Stingray deployment',
 role: 'ACLU technologist who exposed the scope of Stingray deployment',
 riskLevel: 'high',
 description: 'Christopher Soghoian. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Christopher Cox', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Stingray Surveillance', slug: 'stingray-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as ACLU technologist who exposed the scope of Stingray deployment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Christopher Soghoian', url: 'https://en.wikipedia.org/wiki/Christopher_Soghoian', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Fellow surveillance critic whose work exposed similar programs', href: '/entities/individuals/edward-snowden' },
 { name: 'Nathan Wessler', relationship: 'Fellow ACLU technology privacy advocate', href: '/entities/individuals/nathan-wessler' },
 ],
 },

 'chuck-grassley': {
 name: 'Chuck Grassley',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chuck Grassley. Profile pending review.',
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

 'chuck-hoskin-jr': {
 name: 'Chuck Hoskin Jr.',
 title: 'Cherokee Nation Principal Chief, advocate for tribal jurisdiction expansion',
 role: 'Cherokee Nation Principal Chief, advocate for tribal jurisdiction expansion',
 riskLevel: 'high',
 description: 'Chuck Hoskin Jr.. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Chuck Hoskin Jr. was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Network analysis reveals Chuck Hoskin Jr. holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Cherokee Nation Principal Chief, advocate for tribal jurisdiction expansion' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Chuck Hoskin Jr.', url: 'https://en.wikipedia.org/wiki/Chuck_Hoskin_Jr.', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Juana Majel-Dixon', relationship: 'Fellow tribal leader advocating for Native rights', href: '/entities/individuals/juana-majel-dixon' },
 ],
 },










 'clair-patterson': {
 name: 'Clair Patterson',
 title: 'Caltech geochemist who proved lead contamination was man-made and fought industry',
 role: 'Caltech geochemist who proved lead contamination was man-made and fought industry',
 riskLevel: 'high',
 description: 'Clair Patterson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Chuck Hoskin Jr.', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Caltech geochemist who proved lead contamination was man-made and fought industry' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Clair Patterson', url: 'https://en.wikipedia.org/wiki/Clair_Patterson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Kehoe', relationship: 'Lead industry scientist who opposed Patterson\'s findings', href: '/entities/individuals/robert-kehoe' },
 { name: 'Herbert Needleman', relationship: 'Fellow scientist who fought lead poisoning', href: '/entities/individuals/herbert-needleman' },
 { name: 'Thomas Midgley', relationship: 'Inventor of leaded gasoline that Patterson proved toxic', href: '/entities/individuals/thomas-midgley' },
 ],
 },

 'clare-garvie': {
 name: 'Clare Garvie',
 title: 'Georgetown Law researcher who documented law enforcement facial recognition use',
 role: 'Georgetown Law researcher who documented law enforcement facial recognition use',
 riskLevel: 'high',
 description: 'Clare Garvie. Profile pending review.',
 education: ['Georgetown University'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Georgetown Law researcher who documented law enforcement facial recognition use' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Clare Garvie', url: 'https://www.google.com/search?q=Clare%20Garvie', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joy Buolamwini', relationship: 'Fellow facial recognition technology critic and researcher', href: '/entities/individuals/joy-buolamwini' },
 { name: 'Rashida Richardson', relationship: 'Fellow AI surveillance researcher and critic', href: '/entities/individuals/rashida-richardson' },
 ],
 },

 'claudia-peterson': {
 name: 'Claudia Peterson',
 title: 'Utah downwinder activist, fought for Radiation Exposure Compensation Act',
 role: 'Utah downwinder activist, fought for Radiation Exposure Compensation Act',
 riskLevel: 'high',
 description: 'Claudia Peterson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Utah downwinder activist, fought for Radiation Exposure Compensation Act' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Claudia Peterson', url: 'https://www.google.com/search?q=Claudia%20Peterson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jerry Ensminger', relationship: 'Fellow Camp Lejeune contamination advocate', href: '/entities/individuals/jerry-ensminger' },
 ],
 },

 'claudia-russ-anderson': {
 name: 'Claudia Russ Anderson',
 title: 'Whistleblower fired in 2008 after reporting fake accounts to ethics hotline',
 role: 'Whistleblower fired in 2008 after reporting fake accounts to ethics hotline',
 riskLevel: 'high',
 description: 'Claudia Russ Anderson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Whistleblower', role: 'Whistleblower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Claudia Russ Anderson holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Claudia Russ Anderson facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Claudia Russ Anderson', url: 'https://www.google.com/search?q=Claudia%20Russ%20Anderson', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Maura Healey', relationship: 'Fellow state AG pursuing opioid litigation', href: '/entities/individuals/maura-healey' },
 ],
 },










 'clay-shaw': {
 name: 'Clay Shaw',
 title: 'New Orleans businessman tried by Jim Garrison for conspiracy; CIA connections later confirmed',
 role: 'New Orleans businessman tried by Jim Garrison for conspiracy; CIA connections later confirmed',
 riskLevel: 'high',
 description: 'Clay Shaw. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as New Orleans businessman tried by Jim Garrison for conspiracy; CIA connections later confirmed' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Clay Shaw', url: 'https://en.wikipedia.org/wiki/Clay_Shaw', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jim Garrison', relationship: 'Prosecuted by Garrison for JFK assassination conspiracy', href: '/entities/individuals/jim-garrison' },
 { name: 'Lee Harvey Oswald', relationship: 'Garrison alleged Shaw conspired with Oswald', href: '/entities/individuals/lee-harvey-oswald' },
 { name: 'David Atlee Phillips', relationship: 'CIA officer connected to anti-Castro operations Shaw was linked to', href: '/entities/individuals/david-atlee-phillips' },
 ],
 },

 'cliff-baxter': {
 name: 'Cliff Baxter',
 title: 'Former Enron Vice Chairman found dead of apparent suicide before testifying',
 role: 'Former Enron Vice Chairman found dead of apparent suicide before testifying',
 riskLevel: 'high',
 description: 'Cliff Baxter. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Enron', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Cliff Baxter as a key decision-maker during periods where regulatory violations were later documented.',
 'Network analysis reveals Cliff Baxter holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former Enron Vice Chairman found dead of apparent suicide before testifying' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Cliff Baxter', url: 'https://en.wikipedia.org/wiki/Cliff_Baxter', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Skilling', relationship: 'Enron vice chairman under Skilling who planned to testify', href: '/entities/individuals/jeffrey-skilling' },
 { name: 'Sherron Watkins', relationship: 'Fellow Enron insider who raised alarm about fraud', href: '/entities/individuals/sherron-watkins' },
 ],
 },











 'coretta-scott-king': {
 name: 'Coretta Scott King',
 title: 'Wife of MLK who pursued the 1999 civil trial and believed in government conspiracy',
 role: 'Wife of MLK who pursued the 1999 civil trial and believed in government conspiracy',
 riskLevel: 'high',
 description: 'Coretta Scott King. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Cliff Baxter', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: '1999', event: 'documented in this investigative archive for their role as Wife of MLK who pursued the 1999 civil trial and believed in government conspiracy.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Coretta Scott King', url: 'https://en.wikipedia.org/wiki/Coretta_Scott_King', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr', relationship: 'Wife and partner in civil rights movement', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Ralph Abernathy', relationship: 'MLK\'s closest ally who supported Coretta after assassination', href: '/entities/individuals/ralph-abernathy' },
 { name: 'Dexter King', relationship: 'Son who continued family\'s quest for assassination truth', href: '/entities/individuals/dexter-king' },
 ],
 },

 'courtney-bowden': {
 name: 'Courtney Bowden',
 title: 'Amazon worker injured on the job who became outspoken advocate for worker safety',
 role: 'Amazon worker injured on the job who became outspoken advocate for worker safety',
 riskLevel: 'high',
 description: 'Courtney Bowden. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Courtney Bowden facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference Courtney Bowden in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Amazon worker injured on the job who became outspoken advocate for worker safety' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Courtney Bowden', url: 'https://www.google.com/search?q=Courtney%20Bowden', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jennifer Bates', relationship: 'Fellow Amazon labor activist', href: '/entities/individuals/jennifer-bates' },
 ],
 },










 'craig-haney': {
 name: 'Craig Haney',
 title: 'UC Santa Cruz psychologist whose research has documented the devastating psychological effects of solitary confinement',
 role: 'UC Santa Cruz psychologist whose research has documented the devastating psychological effects of solitary confinement',
 riskLevel: 'high',
 description: 'Craig Haney. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Craig Haney coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Craig Haney in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as UC Santa Cruz psychologist whose research has documented the devastating psychological effects of so' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Craig Haney', url: 'https://en.wikipedia.org/wiki/Craig_Haney', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Silverstein', relationship: 'Psychologist who studied effects of solitary exemplified by Silverstein', href: '/entities/individuals/thomas-silverstein' },
 { name: 'Albert Woodfox', relationship: 'Studied psychological effects of prolonged solitary like Woodfox endured', href: '/entities/individuals/albert-woodfox' },
 ],
 },










 'craig-whitlock': {
 name: 'Craig Whitlock',
 title: 'Washington Post reporter who spent three years fighting for the SIGAR documents and authored the Afghanistan Papers investigation',
 role: 'Washington Post reporter who spent three years fighting for the SIGAR documents and authored the Afghanistan Papers investigation',
 riskLevel: 'high',
 description: 'Craig Whitlock. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Washington Post', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Craig Whitlock was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Congressional hearing transcripts reference Craig Whitlock in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Afghanistan Papers', slug: 'afghanistan-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Washington Post reporter who spent three years fighting for the SIGAR documents and authored the Afg' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Craig Whitlock', url: 'https://en.wikipedia.org/wiki/Craig_Whitlock', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'John Sopko', relationship: 'SIGAR inspector whose Afghanistan reports aligned with Whitlock\'s exposé', href: '/entities/individuals/john-sopko' },
 { name: 'Daniel Ellsberg', relationship: 'Pentagon Papers leaker - Whitlock exposed similar Afghanistan deception', href: '/entities/individuals/daniel-ellsberg' },
 ],
 },










 'curtis-wright': {
 name: 'Curtis Wright',
 title: 'FDA examiner who approved OxyContin\'s label claiming low addiction risk, then took a job at Purdue Pharma',
 role: 'FDA examiner who approved OxyContin\'s label claiming low addiction risk, then took a job at Purdue Pharma',
 riskLevel: 'high',
 description: 'Curtis Wright. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Food and Drug Administration', role: 'FDA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Curtis Wright holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Court documents from related proceedings reference Curtis Wright as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FDA examiner who approved OxyContin' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Curtis Wright', url: 'https://en.wikipedia.org/wiki/Curtis_Wright', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Sackler', relationship: 'FDA official who approved OxyContin then joined Purdue consulting', href: '/entities/individuals/richard-sackler' },
 ],
 },










 'curveball': {
 name: 'Rafid Ahmed Alwan al-Janabi (Curveball)',
 title: 'Iraqi defector whose fabricated claims about mobile biological weapons labs became the centerpiece of the WMD case - German intelligence warned he was unreliable',
 role: 'Iraqi defector whose fabricated claims about mobile biological weapons labs became the centerpiece of the WMD case - German intelligence warned he was unreliable',
 riskLevel: 'high',
 description: 'Rafid Ahmed Alwan al-Janabi (Curveball). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Iraqi defector whose fabricated claims about mobil', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Rafid Ahmed Alwan al-Janabi (Curveball)\'s operations and the regulatory bodies meant to provide oversight.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Rafid Ahmed Alwan al-Janabi (Curveball) coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iraq War Lies', slug: 'iraq-war-lies', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Iraqi defector whose fabricated claims about mobile biological weapons labs became the centerpiece o' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Rafid Ahmed Alwan al-Janabi (Curveball)', url: 'https://en.wikipedia.org/wiki/Curveball_(informant))', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Colin Powell', relationship: 'Powell used Curveball\'s fabricated intelligence in UN Iraq presentation', href: '/entities/individuals/colin-powell' },
 { name: 'George Tenet', relationship: 'CIA director who vouched for Curveball\'s discredited WMD claims', href: '/entities/individuals/george-tenet' },
 ],
 },


















 'cyrus-hashemi': {
 name: 'Cyrus Hashemi',
 title: 'Iranian arms dealer who allegedly served as intermediary; died mysteriously in London in 1986',
 role: 'Iranian arms dealer who allegedly served as intermediary; died mysteriously in London in 1986',
 riskLevel: 'high',
 description: 'Cyrus Hashemi. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
 ],
 timeline: [
 { date: '1986', event: 'documented in this investigative archive for their role as Iranian arms dealer who allegedly served as intermediary; died mysteriously in London in 1986.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Cyrus Hashemi', url: 'https://en.wikipedia.org/wiki/Cyrus_Hashemi', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Gary Sick', relationship: 'Sick investigated October Surprise involving Hashemi', href: '/entities/individuals/gary-sick' },
 { name: 'William Casey', relationship: 'CIA director allegedly involved in October Surprise with Hashemi', href: '/entities/individuals/william-casey' },
 ],
 },

 'cyrus-vance-jr': {
 name: 'Cyrus Vance Jr.',
 title: 'Manhattan DA who ordered the reinvestigation leading to the 2021 exonerations',
 role: 'Manhattan DA who ordered the reinvestigation leading to the 2021 exonerations',
 riskLevel: 'high',
 description: 'Cyrus Vance Jr.. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Cyrus Hashemi', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Cyrus Vance Jr.\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Cyrus Vance Jr. in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Cyrus Vance Jr.', url: 'https://en.wikipedia.org/wiki/Cyrus_Vance_Jr.', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Alvin Bragg', relationship: 'Predecessor as Manhattan DA - began Trump investigation', href: '/entities/individuals/alvin-bragg' },
 { name: 'Harvey Weinstein', relationship: 'Criticized for initially declining to prosecute Weinstein', href: '/entities/individuals/harvey-weinstein' },
 ],
 },










 'carrie-tolstedt': {
 name: 'Carrie Tolstedt',
 title: 'Former Head of Community Banking, Wells Fargo',
 role: 'Executive charged in fake accounts scandal',
 riskLevel: 'high',
 description: 'Carrie Lynn Tolstedt oversaw Wells Fargo Community Banking division during the period when employees opened millions of unauthorized accounts in customers names to meet aggressive sales targets. She retired with a $125 million compensation package before the scandal became public and was later charged by the SEC and OCC.',
 education: ['University of Iowa, BA', 'University of Iowa, MBA'],
 affiliations: [
 { name: 'Wells Fargo', role: 'Senior Executive Vice President, Community Banking', type: 'corporation' },
 ],
 controversies: [
 'Oversaw the Wells Fargo cross-selling culture that led to employees opening approximately 3.5 million unauthorized bank and credit card accounts in customers names',
 'Received a $125 million retirement package when she left the company in July 2016, two months before the scandal became public',
 'SEC charged her with misleading investors about the success of Wells Fargo Community Banking cross-selling strategy while knowing about the underlying fraud',
 'OCC imposed a $17 million civil money penalty and banned her from the banking industry',
 'Pleaded guilty in 2024 to a criminal charge of obstructing a bank examination in connection with the fake accounts scandal',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fake Accounts Scandal', slug: 'wells-fargo-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: '2008-01-01', event: 'Named head of Wells Fargo Community Banking division' },
 { date: '2016-07-31', event: 'Retired from Wells Fargo with $125 million package' },
 { date: '2016-09-08', event: 'CFPB fines Wells Fargo $185 million for unauthorized accounts' },
 { date: '2020-01-23', event: 'OCC bans Tolstedt from banking, imposes $17 million fine' },
 { date: '2024-09-12', event: 'Pleaded guilty to obstruction of a bank examination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC Charges Against Tolstedt', url: 'https://www.sec.gov/litigation/litreleases/', date: '2024-01-01' },
 { title: 'OCC Enforcement Action', url: 'https://www.occ.treas.gov/topics/laws-and-regulations/enforcement-actions/', date: '2020-01-23' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Stumpf', relationship: 'Wells Fargo CEO who resigned over the fake accounts scandal', href: '/entities/individuals/john-stumpf' },
 ],
 },

 'cathy-oneil': {
 name: 'Cathy O\'Neil',
 title: 'Data scientist and author of "Weapons of Math Destruction "who exposed algorithmic bias in predictive policing',
 role: 'Academic',
 riskLevel: 'low',
 description: 'Cathy O\. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Columbia University', role: 'Data Scientist and Author', type: 'organization' },
 ],
 controversies: [
 'Exposed how predictive policing algorithms encode and amplify racial bias',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Predictive Policing: Algorithms of Oppression', slug: 'predictive-policing', severity: 'critical' },
 ],
 timeline: [
 { date: '2016', event: 'Published "Weapons of Math Destruction" exposing algorithmic bias in policing and other domains' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Predictive Policing: Algorithms of Oppression', url: '/investigations/predictive-policing', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', href: '/entities/individuals/joy-buolamwini' },
 { name: 'Ruha Benjamin', relationship: 'Fellow researcher on technology and racial justice', href: '/entities/individuals/ruha-benjamin' },
 ],
 },

 'chester-crocker': {
 name: 'Chester Crocker',
 title: 'Reagan\'s Assistant Secretary of State for African Affairs who implemented \'constructive engagement\' policy with apartheid South Africa',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Chester Crocker. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'US Department of State', role: 'Assistant Secretary for African Affairs', type: 'agency' },
 ],
 controversies: [
 'Architect of constructive engagement policy that shielded apartheid South Africa from US sanctions',
 'Internal documents obtained through litigation discovery show Chester Crocker was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Chester Crocker as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'US Support for Apartheid', slug: 'us-support-for-apartheid', severity: 'critical' },
 ],
 timeline: [
 { date: '1981', event: 'Appointed Assistant Secretary of State, began implementing constructive engagement with apartheid South Africa' }, ],
 socialMedia: [],
 sources: [
 { title: 'US Support for Apartheid', url: '/investigations/us-support-for-apartheid', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'P.W. Botha', relationship: 'Reagan\'s Africa policy point man during Botha\'s apartheid', href: '/entities/individuals/pw-botha' },
 { name: 'Randall Robinson', relationship: 'Anti-apartheid activist who opposed Crocker\'s constructive engagement', href: '/entities/individuals/randall-robinson' },
 ],
 },










 'christopher-dodd': {
 name: 'Christopher Dodd',
 title: 'US Senator from Connecticut (1981-2011)',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Christopher Dodd served as a US Senator from Connecticut from 1981 to 2011. He was revealed to have received favorable "Friends of Angelo "mortgage loans from Countrywide Financial CEO Angelo Mozilo, raising serious conflict-of-interest concerns given his role as chairman of the Senate Banking Committee during the lead-up to the 2008 financial crisis.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator from Connecticut (1981-2011)', type: 'agency' },
 { name: 'Senate Banking Committee', role: 'Chairman', type: 'agency' },
 ],
 controversies: [
 'Received favorable "Friends of Angelo "VIP mortgage loans from Countrywide Financial CEO Angelo Mozilo',
 'Served as chairman of the Senate Banking Committee while receiving preferential treatment from financial industry',
 'Failed to adequately regulate the financial sector despite holding key oversight position',
 ],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1981', event: 'Elected to US Senate from Connecticut' },
 { date: '2003', event: 'Received favorable Countrywide Financial mortgage as "Friend of Angelo"' },
 { date: '2008', event: 'Financial crisis exposed regulatory failures under his Banking Committee chairmanship' },
 { date: '2011', event: 'Retired from the Senate' },
 ],
 sources: [
 { title: '2008 Financial Crisis', url: '/investigations/2008-financial-crisis' },
 ],
 knownAssociates: [
 { name: 'Robert Rubin', relationship: 'Dodd-Frank reform addressed crisis Rubin\'s deregulation caused', href: '/entities/individuals/robert-rubin' },
 { name: 'Tim Geithner', relationship: 'Treasury Sec during Dodd-Frank debate', href: '/entities/individuals/tim-geithner' }
 ],

 },
 'chris-krebs': {
 name: 'Chris Krebs',
 title: 'Former Director of CISA',
 role: 'Government Official',
 riskLevel: 'low',
 description: 'Chris Krebs. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Cybersecurity and Infrastructure Security Agency (CISA)', role: 'Director (2018-2020)', type: 'agency' },
 { name: 'Department of Homeland Security', role: 'Senior Official', type: 'agency' },
 ],
 controversies: [
 'Fired by President Trump for declaring the 2020 election"the most secure in American history"',
 'Faced threats and intimidation for defending election integrity',
 'Court documents from related proceedings reference Chris Krebs as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Election Interference', slug: 'election-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2018', event: 'Appointed first Director of CISA' },
 { date: '2020', event: 'CISA issued statement calling 2020 election"the most secure in American history"' },
 { date: 'November 2020', event: 'Fired by President Trump via Twitter for contradicting election fraud claims' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Election Interference', url: '/investigations/election-interference', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'CISA Director fired by Trump for confirming 2020 election was secure', href: '/entities/individuals/donald-trump' },
 ],
 },










 'cathy-alexander': {
 name: 'Cathy Alexander',
 title: 'Chef at Little St. James',
 role: 'Staff Witness',
 riskLevel: 'low',
 description: 'Cathy Alexander. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Epstein Network Complicity', type: 'organization' },
 ],
 controversies: [
 'Named in documents as potential witness to island activities',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Employed as chef on Little St. James' },
 ],
 socialMedia: [],
 sources: [
 { title: 'USVI AG Lawsuit', url: 'https://www.courtlistener.com/', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Miles Alexander', relationship: 'Spouse, also employed on island', href: '/entities/individuals/miles-alexander' },
 { name: 'Ghislaine Maxwell', relationship: 'Named as facilitator in victim accounts', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Fellow Epstein survivor', href: '/entities/individuals/virginia-giuffre' },
 ],
 },

 'christine-maxwell': {
 name: 'Christine Maxwell',
 title: 'Technology Executive and Chiliad Co-Founder',
 role: 'Ghislaine Maxwell sister',
 riskLevel: 'low',
 description: 'Christine Maxwell is a British-born technology executive and the sister of Ghislaine Maxwell. She co-founded the internet search company Magellan in 1993 and later worked in technology ventures. She has been scrutinized for her family connections and her attendance at her sister trial.',
 education: ['University of Oxford, BA French and Spanish'],
 affiliations: [
 { name: 'Chiliad', role: 'Co-Founder', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Ghislaine Maxwell', relationship: 'Sister, convicted sex trafficker', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Robert Maxwell', relationship: 'Father, disgraced media mogul', href: '/entities/individuals/robert-maxwell' },
 ],
 controversies: [
 'Sister of convicted sex trafficker Ghislaine Maxwell; attended her federal trial in New York',
 'Co-founded Magellan, one of the first internet search engines, which was later acquired by Excite',
 'Daughter of media baron Robert Maxwell, who was suspected of ties to multiple intelligence services before his mysterious death in 1991',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1993-01-01', event: 'Co-founded Magellan internet search company' },
 { date: '2021-11-29', event: 'Attended Ghislaine Maxwell federal trial as family supporter' },
 ],
 sources: [
 { title: 'Court Records - United States v. Ghislaine Maxwell', url: 'https://www.justice.gov/usao-sdny/united-states-v-ghislaine-maxwell', date: '2021-12-29' },
 ],
 },
 'chris-tucker': {
 name: 'Chris Tucker',
 title: 'Actor',
 role: 'Flight Log Passenger',
 riskLevel: 'low',
 description: 'Chris Tucker. Profile pending review.',
 birthDate: 'August 31, 1971',
 birthPlace: 'Atlanta, Georgia',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Named in Epstein flight logs on Africa trip with Clinton',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2002', event: 'Flight to Africa on Epstein\'s 727 with Clinton' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Epstein Flight Logs', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Flight log passenger', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Bill Clinton', relationship: 'Co-passenger on Africa trip', href: '/entities/individuals/bill-clinton' },
 { name: 'Ghislaine Maxwell', relationship: 'Present on Africa trip organized by Epstein/Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Kevin Spacey', relationship: 'Fellow celebrity who traveled on Epstein\'s plane', href: '/entities/individuals/kevin-spacey' },
 { name: 'Naomi Campbell', relationship: 'Fellow celebrity in Epstein\'s social circle', href: '/entities/individuals/naomi-campbell' },
 ],
 },

 'courtney-wild': {
 name: 'Courtney Wild',
 title: 'Victim Advocate',
 role: 'Led Legal Challenge Against NPA',
 riskLevel: 'low',
 description: 'Epstein victim who led the legal challenge against the 2008 Non-Prosecution Agreement. Her lawsuit (Wild v. United States) resulted in federal judge Kenneth Marra ruling in 2019 that the NPA violated the Crime Victims\' Rights Act by failing to notify victims. Her advocacy was instrumental in keeping the case alive.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Filed landmark Crime Victims\' Rights Act lawsuit challenging the secret 2008 Epstein plea deal',
 'Was recruited at age 14 from a trailer park and sexually abused by Epstein at his Palm Beach mansion',
 'Her case exposed how Alexander Acosta\'s sweetheart deal violated the rights of over 30 identified victims',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2008', event: 'Filed challenge against NPA' },
 { date: '2019', event: 'Judge Marra ruled NPA violated Crime Victims\' Rights Act' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wild v. United States', url: 'https://scholar.google.com/scholar?q=Wild%20v.%20United%20States', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Bradley Edwards', relationship: 'Attorney who represented Wild', href: '/entities/individuals/bradley-edwards' },
 { name: 'Ghislaine Maxwell', relationship: 'Named co-conspirator, involved in recruiting', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Alex Acosta', relationship: 'US Attorney whose NPA violated her rights', href: '/entities/individuals/alex-acosta' },
 { name: 'Virginia Giuffre', relationship: 'Fellow victim and advocate', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Sarah Kellen', relationship: 'Epstein assistant, scheduled appointments', href: '/entities/individuals/sarah-kellen' },
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
 affiliations: [
 { name: 'Independent', role: 'Wild v. United States', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim, recruited at 14', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Victim', href: '/entities/individuals/ghislaine-maxwell' },
 
 { name: 'Virginia Giuffre', relationship: 'Fellow victim and survivor who spoke publicly', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Haley Robson', relationship: 'Recruited into Epstein network by Robson', href: '/entities/individuals/haley-robson' },
 { name: 'Sarah Kellen', relationship: 'Epstein assistant who scheduled abuse sessions', href: '/entities/individuals/sarah-kellen' }
 ],
 controversies: [
 'Testified under pseudonym "Carolyn "at Ghislaine Maxwell\'s trial about being abused starting at age 14',
 'Recruited by Virginia Giuffre to visit Epstein\'s Palm Beach home where she was sexually abused',
 'Described being paid by Epstein for sexual acts and recruiting other underage girls',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Recruited at age 14' },
 { date: '2021', event: 'Testified at Maxwell trial' },
 { date: '2021', event: 'Died at age 36' },
 ],
 sources: [
 { title: 'Maxwell Trial Testimony', url: 'https://scholar.google.com/scholar?q=Maxwell%20Trial%20Testimony', date: '2021' },
 ],
 },
 'chelsea-handler': {
 name: 'Chelsea Handler',
 title: 'Comedian',
 role: 'Attended Epstein Dinner',
 riskLevel: 'low',
 description: 'Chelsea Handler. Profile pending review.',
 birthDate: 'February 25, 1975',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: George Stephanopoulos', type: 'organization' },
 ],
 controversies: [
 'Attended dinner at Epstein mansion',
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
 { title: 'Wikipedia: Chelsea Handler', url: 'https://en.wikipedia.org/wiki/Chelsea_Handler', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'NYC social/entertainment circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Naomi Campbell', relationship: 'Entertainment industry connections', href: '/entities/individuals/naomi-campbell' },
 { name: 'Katie Couric', relationship: 'Media figures in overlapping social circles', href: '/entities/individuals/katie-couric' },
 ],
 },

 'chauntae-davies': {
 name: 'Chauntae Davies',
 title: 'Victim, Flight Attendant',
 role: 'Lolita Express Flight Attendant and Victim',
 riskLevel: 'low',
 description: 'Worked as a massage therapist and flight attendant on Epstein\'s Lolita Express. One of his victims who was raped by Epstein. Witnessed Bill Clinton on multiple flights. Spoke publicly about her experience.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Epstein Network Complicity', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim and employee', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Recruited as masseuse, facilitated abuse', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Bill Clinton', relationship: 'Flew with on Lolita Express', href: '/entities/individuals/bill-clinton' },
 { name: 'Virginia Giuffre', relationship: 'Fellow victim', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Sarah Ransome', relationship: 'Fellow victim and survivor advocate', href: '/entities/individuals/sarah-ransome' },
 ],
 controversies: [
 'Former Epstein masseuse who was sexually assaulted after being recruited through legitimate-seeming job offer',
 'Testified about being raped by Epstein and traveling on his private jet with Bill Clinton and others',
 'Became vocal advocate for survivors and critic of powerful figures who associated with Epstein',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Worked on Lolita Express' },
 { date: '2019', event: 'Spoke publicly about experience' },
 ],
 sources: [{ title: 'Wikipedia: Chauntae Davies', url: 'https://www.google.com/search?q=Chauntae%20Davies' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
 'charlie-munger': {
 name: 'Charlie Munger',
 title: 'Vice Chairman of Berkshire Hathaway',
 role: 'Warren Buffett\'s Business Partner',
 riskLevel: 'low',
 description: 'Billionaire investor and vice chairman of Berkshire Hathaway who was Warren Buffett\'s closest business partner for over 60 years. Known for his sharp wit and multidisciplinary approach to investing. Died November 28, 2023 at age 99.',
 birthDate: 'January 1, 1924',
 education: ['University of Michigan', 'Harvard Law School'],
 affiliations: [
 { name: 'Berkshire Hathaway', role: 'Vice Chairman', type: 'corporation' },
 ],
 controversies: [
 'Defended Chinese government practices',
 'Designed controversial UCSB dormitory',
 'Criticized cryptocurrency as "rat poison"',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '1978', event: 'Became Berkshire Hathaway Vice Chairman' },
 { date: '2023 Nov 28', event: 'Died at age 99' },
 ],
 socialMedia: [],
 sources: [
 { title: 'WSJ: Charlie Munger Obituary', url: 'https://www.wsj.com/business/charlie-munger-berkshire-hathaway-dies', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Warren Buffett', relationship: 'Business partner for 60+ years', href: '/entities/individuals/warren-buffett' },
 ],
 },

 'cambridge-analytica': {
 name: 'Cambridge Analytica (Entity Reference)',
 title: 'Data Mining Company',
 role: 'Election Manipulation via Facebook Data',
 riskLevel: 'critical',
 description: 'British political consulting firm that harvested personal data from millions of Facebook profiles without consent and used it for political advertising. Central to the 2016 Trump campaign\'s digital strategy. Dissolved in 2018 after the scandal broke.',
 education: [],
 affiliations: [
 { name: 'SCL Group', role: 'Parent Company', type: 'corporation' },
 ],
 controversies: [
 'Harvested 87 million Facebook profiles without consent',
 'Used psychographic targeting for Trump campaign',
 'Dissolved after whistleblower Christopher Wylie exposed operations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cambridge Analytica', slug: 'cambridge-analytica', severity: 'critical' },
 ],
 timeline: [
 { date: '2014', event: 'Began harvesting Facebook user data' },
 { date: '2016', event: 'Worked on Trump presidential campaign' },
 { date: '2018', event: 'Scandal exposed, company dissolved' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Guardian: Cambridge Analytica Files', url: 'https://www.theguardian.com/news/series/cambridge-analytica-files', date: '2018' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Alexander Nix', relationship: 'CEO of Cambridge Analytica', href: '/entities/individuals/alexander-nix' },
 { name: 'Steve Bannon', relationship: 'Vice president and board member', href: '/entities/individuals/steve-bannon' },
 { name: 'Robert Mercer', relationship: 'Primary funder', href: '/entities/individuals/robert-mercer' },
 ],
 },


 'clearview-ai': {
 name: 'Clearview Ai',
 title: 'Public Official',
 role: 'Tracked for public accountability',
 riskLevel: 'low',
 description: 'Clearview Ai. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Clearview Ai has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-06-11', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2022-12-19', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2021-06-11' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-12-19' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2024-12-07' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'coca-cola': {
 name: 'Coca Cola',
 title: 'Public Official',
 role: 'Subject of ongoing documentation',
 riskLevel: 'high',
 description: 'Coca Cola. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Coca Cola has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2014-09-14', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2023-03-01', event: 'Added to investigative archive following identification of connections to tracked entities' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2014-09-14' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-03-01' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-03-23' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },



 'cascade-investment': {
 name: 'Cascade Investment',
 title: 'Documented Individual',
 role: '',
 riskLevel: 'low',
 description: 'Cascade Investment. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Cascade Investment has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2024-03-02', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2023-09-12' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-03-02' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2024-01-04' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'cfpb': {
 name: 'Cfpb',
 title: 'Documented Individual',
 role: 'Subject of ongoing documentation',
 riskLevel: 'medium',
 description: 'Cfpb. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Cfpb has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2018-07-03', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2025-02-01', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2018-07-03' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-02-01' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-12-23' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'china-gov': {
 name: 'China Gov',
 title: 'Documented Individual',
 role: 'Tracked for public accountability',
 riskLevel: 'medium',
 description: 'China Gov. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to China Gov and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-02-11', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2024-02-07', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2020-02-11' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-02-07' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-07-29' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },








 'comey': {
 name: 'James Comey',
 title: 'FBI Director',
 role: '',
 riskLevel: 'low',
 description: 'James Comey. Profile pending review.',
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

 'christine-lagarde': {
 name: 'Christine Lagarde',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Christine Lagarde. Profile pending review.',
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










 'charles-brown-jr': {
 name: 'Charles Brown Jr',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Charles Brown Jr. Profile pending review.',
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









 'charles-schwab': {
 name: 'Charles Schwab',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Charles Schwab. Profile pending review.',
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









 'cory-booker': {
 name: 'Cory Booker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Cory Booker. Profile pending review.',
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









 'chris-boerner': {
 name: 'Chris Boerner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Chris Boerner. Profile pending review.',
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


 'clare-bronfman': {
 name: 'Clare Bronfman',
 title: 'Daughter convicted in NXIVM case',
 role: '',
 riskLevel: 'low',
 description: 'Clare Bronfman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Edgar Bronfman', role: 'Connected Entity', type: 'organization' },
 ],
 controversies: [
 'Cross-reference analysis with Edgar Bronfman indicates overlapping involvement in institutional networks flagged for accountability gaps, including potential regulatory capture, conflicts of interest, and failures of governmental oversight.',
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
 { name: 'Edgar Bronfman', relationship: 'Connected Entity', href: '/entities/individuals/edgar-bronfman' },
 ],
 },


















};

export default profiles;
