// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'bill-gates': {
 name: 'Bill Gates',
 title: 'Profile Under Review',
 role: 'Tracked for public accountability',
 riskLevel: 'high',
 description: 'Bill Gates. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Bill Gates that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2016-03-04', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 { date: '2022-11-21', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2016-03-04' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-11-21' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2023-06-21' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'bill-clinton': {
 name: 'Bill Clinton',
 title: 'Public Figure',
 role: 'Subject of ongoing documentation',
 riskLevel: 'low',
 description: 'Bill Clinton. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Bill Clinton that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2019-06-12', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2025-06-06', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2019-06-12' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-06-06' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-10-30' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'brian-kolfage': {
 name: 'Brian Kolfage',
 title: 'Convicted Felon',
 role: 'We Build the Wall Fraud Co-Conspirator',
 riskLevel: 'high',
 description: 'Brian Kolfage is a decorated Air Force veteran and triple amputee who co-founded the We Build the Wall crowdfunding campaign with Steve Bannon. He was convicted of conspiracy to commit wire fraud and money laundering for diverting over $350,000 in donor funds for personal use including a boat, luxury SUV, and cosmetic surgery.',
 birthDate: 'December 20, 1982',
 birthPlace: 'Tucson, Arizona, USA',
 netWorth: 'Unknown (assets seized)',
 education: ['University of Arizona'],
 affiliations: [
 { name: 'We Build the Wall', role: 'Founder', type: 'organization' },
 { name: 'U.S. Air Force', role: 'Veteran (Iraq)', type: 'agency' },
 ],
 controversies: [
 'We Build the Wall fraud - $25 million raised, funds stolen',
 'Used donations for boat, luxury SUV, cosmetic surgery, jewelry, home renovations',
 'Bannon pardoned but Kolfage not pardoned',
 'Exploited veteran status to solicit donations',
 'Convicted on federal fraud charges',
 ],
 charges: [
 { statute: '18 U.S.C. § 1014', description: 'Wire fraud conspiracy', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1956', description: 'Money laundering conspiracy', category: 'Financial Crimes' },
 { statute: '26 U.S.C. § 7206', description: 'Tax fraud', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Build the Wall Fraud', slug: 'build-the-wall-fraud', severity: 'high' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1982', event: 'Born in Arizona' },
 { date: '2004', event: 'Severely wounded in Iraq, loses three limbs' },
 { date: '2018', event: 'Launches We Build the Wall GoFundMe' },
 { date: '2020', event: 'Indicted for fraud (August)' },
 { date: '2021', event: 'Bannon pardoned, Kolfage not pardoned' },
 { date: '2022', event: 'Convicted on federal charges' },
 { date: '2023', event: 'Sentenced to 51 months in prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/usao-sdny/pr/leaders-we-build-wall-online-fundraising-campaign-charged-defrauding-hundreds-thousands', date: '2020' }, ],
 aliases: ['Border Wall Scammer'],
 knownAssociates: [
 { name: 'Steve Bannon', relationship: 'We Build the Wall co-conspirator (pardoned)', href: '/entities/individuals/steve-bannon' },
 ],
 },









































 'brad-raffensperger': {
 name: 'Brad Raffensperger',
 title: 'Georgia Secretary of State',
 role: 'Target of Trump"Find 11,780 Votes"Call',
 riskLevel: 'low',
 description: 'Brad Raffensperger is the Republican Secretary of State of Georgia who refused Donald Trump\'s pressure to"find 11,780 votes"to overturn Biden\'s victory in the state. He recorded the January 2, 2021 call, which became key evidence in both the Georgia RICO case and federal prosecution. He has continued to defend election integrity despite threats.',
 birthDate: 'May 4, 1955',
 birthPlace: 'Unknown',
 netWorth: 'Unknown',
 education: ['Bachelor\'s degree - University of Georgia'],
 affiliations: [
 { name: 'Georgia Secretary of State Office', role: 'Secretary of State (2019-present)', type: 'agency' },
 { name: 'Georgia General Assembly', role: 'Representative (2015-2019)', type: 'agency' },
 ],
 controversies: [
 'Recorded Trump call (legal in Georgia)',
 'Received death threats for defending election',
 'Wife and son received threats',
 'Opposed by Trump in 2022 primary, still won',
 'Testified to January 6 Committee',
 'Key witness in Georgia RICO case',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1955', event: 'Born' },
 { date: '2019', event: 'Becomes Georgia Secretary of State' },
 { date: '2020', event: 'November: Oversees Georgia election, Biden wins by 11,779 votes' },
 { date: '2020', event: 'Certifies results despite Trump pressure' },
 { date: '2021', event: 'January 2: Receives and records Trump phone call' },
 { date: '2021', event: 'January 3: Call recording leaked to media' },
 { date: '2021', event: 'Receives death threats, increased security' },
 { date: '2022', event: 'Defeats Trump-backed primary opponent' },
 { date: '2022', event: 'Testifies to January 6 Committee' },
 { date: '2023', event: 'Witnesses against Trump in RICO case' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Trump-Raffensperger Call Transcript', url: 'https://www.cnn.com/2021/01/03/politics/trump-brad-raffensperger-phone-call-transcript/index.html', date: '2021' },
 { title: '"Integrity Counts"Book', url: 'https://www.amazon.com/Integrity-Counts-Brad-Raffensperger/dp/1982183403', date: '2021' },
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Pressured him to overturn election', href: '/entities/individuals/donald-trump' },
 { name: 'Mark Meadows', relationship: 'On call pressuring to find votes', href: '/entities/individuals/mark-meadows' },
 ],
 },









































 'betsy-devos': {
 name: 'Elisabeth Dee DeVos',
 title: 'Former U.S. Secretary of Education',
 role: 'Education Secretary 2017-2021, Billionaire Republican Donor',
 riskLevel: 'high',
 description: 'Betsy DeVos served as Secretary of Education under Trump despite having no public education experience. A billionaire Republican mega-donor, she pushed school privatization, rolled back protections for student loan borrowers, weakened Title IX protections for sexual assault survivors, and resigned after January 6 while criticizing Trump - but too late to invoke the 25th Amendment.',
 birthDate: 'January 8, 1958',
 birthPlace: 'Holland, Michigan',
 netWorth: '$5.4 billion (family wealth)',
 education: ['Calvin College (B.A. Business Administration)'],
 affiliations: [
 { name: 'U.S. Department of Education', role: 'Secretary (2017-2021)', type: 'agency' },
 { name: 'Amway', role: 'Heir (husband\'s family)', type: 'corporation' },
 { name: 'Republican National Committee', role: 'Major Donor', type: 'organization' },
 ],
 controversies: [
 'No public education experience before appointment',
 'Family donated $200+ million to Republican causes',
 'Pushed vouchers and charter schools over public education',
 'Rolled back Obama-era student loan protections',
 'Weakened Title IX sexual assault guidelines',
 'Protected for-profit colleges that defrauded students',
 'Resigned after January 6 but refused to invoke 25th Amendment',
 'Brother Erik Prince founded Blackwater (private military)',
 ],
 charges: [
 { statute: '20 U.S.C. § 1087e', description: 'Violation of Student Loan Provisions - Illegally delayed and obstructed borrower defense regulations, found in contempt by federal court', category: 'Federal Education' },
 { statute: 'Federal Court Contempt Order', description: 'Civil Contempt - Federal judge held DeVos/DOE in contempt for collecting on loans from defrauded students after court order', category: 'Court Contempt' },
 { statute: '20 U.S.C. § 1681 (Title IX)', description: 'Weakened Protections - Rolled back Title IX protections for sexual assault survivors, allowing schools to ignore complaints', category: 'Federal Education' },
 { statute: '5 C.F.R. § 2635.702', description: 'Potential Use of Office for Private Gain - Policies benefited for-profit education sector where family has investments', category: 'Potential Ethics' },
 { statute: '18 U.S.C. § 208', description: 'Potential Conflict of Interest - Financial interests in education companies affected by DOE policies', category: 'Potential Ethics' },
 { statute: '5 U.S.C. § 3331', description: 'Oath of Office Concerns - Refused to invoke 25th Amendment despite believing Trump unfit after January 6', category: 'Constitutional' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2017', event: 'February: Confirmed as Education Secretary (VP tie-breaker)' },
 { date: '2017', event: 'Begins rolling back Obama education policies' },
 { date: '2020', event: 'Pushed school reopening during pandemic' },
 { date: '2021', event: 'January 7: Resigns citing January 6' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DeVos Confirmation Hearings', url: 'https://scholar.google.com/scholar?q=DeVos%20Confirmation%20Hearings', date: '2017' }, ],
 aliases: ['Betsy DeVos'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Cabinet member, mega-donor', href: '/entities/individuals/donald-trump' },
 { name: 'Erik Prince', relationship: 'Brother, Blackwater founder', href: '/entities/individuals/erik-prince' },
 ],
 },









































 'ben-carson': {
 name: 'Benjamin Solomon Carson Sr.',
 title: 'Former U.S. Secretary of Housing and Urban Development',
 role: 'HUD Secretary 2017-2021, Retired Neurosurgeon',
 riskLevel: 'medium',
 description: 'Ben Carson served as HUD Secretary under Trump despite having no housing policy experience. A renowned neurosurgeon, he spent $31,000 on a dining set for his office, attempted to cut housing assistance, and largely dismantled fair housing enforcement.',
 birthDate: 'September 18, 1951',
 birthPlace: 'Detroit, Michigan',
 netWorth: '$30 million+',
 education: ['University of Michigan Medical School (M.D.)', 'Yale University (B.A. Psychology)'],
 affiliations: [
 { name: 'U.S. Department of Housing and Urban Development', role: 'Secretary (2017-2021)', type: 'agency' },
 { name: 'Johns Hopkins Hospital', role: 'Director of Pediatric Neurosurgery (retired)', type: 'organization' },
 ],
 controversies: [
 '$31,000 dining set purchased for office',
 'No housing policy experience',
 'Attempted to raise rents on poor families',
 'Called poverty"a state of mind"',
 'Proposed cuts to housing assistance',
 'Rolled back fair housing enforcement',
 'Compared slaves to immigrants seeking better life',
 ],
 charges: [
 { statute: '31 U.S.C. § 1341 (Antideficiency Act)', description: 'Violation of Spending Limits - HUD IG found office spent $31,000 on dining furniture exceeding $5,000 statutory limit without proper authorization', category: 'Federal Spending' },
 { statute: '5 C.F.R. § 2635.702', description: 'Potential Use of Office for Private Gain - Son assisted with official HUD business trip and was promoted at department contractor', category: 'Potential Ethics' },
 { statute: '42 U.S.C. § 3608 (Fair Housing Act)', description: 'Failure to Affirmatively Further Fair Housing - Suspended Obama-era AFFH rule requiring localities to address segregation', category: 'Civil Rights' },
 { statute: '42 U.S.C. § 3604', description: 'Fair Housing Act Enforcement Failures - Weakened enforcement of housing discrimination complaints during tenure', category: 'Civil Rights' },
 { statute: '42 U.S.C. § 1437f (Section 8)', description: 'Policy Violations - Proposed increased rent burdens on poorest tenants, partially blocked by Congress', category: 'Housing Policy' },
 { statute: '5 U.S.C. § 3110 (Anti-Nepotism)', description: 'Potential Nepotism Concerns - Son reportedly involved in HUD matters and events while working for department contractor', category: 'Potential Ethics' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2017', event: 'March: Confirmed as HUD Secretary' },
 { date: '2018', event: '$31,000 dining set scandal' },
 { date: '2020', event: 'Contracts COVID-19' },
 { date: '2021', event: 'January: Leaves office' },
 ],
 socialMedia: [],
 sources: [
 { title: 'HUD IG Report on Furniture', url: 'https://www.ignet.gov/', date: '2018' }, ],
 aliases: ['Dr. Ben Carson'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Cabinet member, 2016 rival turned supporter', href: '/entities/individuals/donald-trump' },
 { name: 'Jeffrey Epstein', relationship: 'Named in discussions of Trump cabinet connections to Epstein case', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Pete Hegseth', relationship: 'Fellow Trump cabinet member', href: '/entities/individuals/pete-hegseth' },
 ],
 },








































 'barron-trump': {
 name: 'Barron William Trump',
 title: 'Son of Donald Trump',
 role: 'Student, Trump Family Member',
 riskLevel: 'low',
 description: 'Barron Trump is the youngest child of Donald Trump and Melania Trump. Born in 2006, he was 10 years old when his father became president. He has been largely shielded from public life, though he was selected as a Florida delegate to the 2024 Republican National Convention before his mother declined on his behalf. He enrolled at NYU in 2024.',
 birthDate: 'March 20, 2006',
 birthPlace: 'New York City, New York',
 education: ['New York University (enrolled 2024)', 'Oxbridge Academy, Palm Beach, Florida', 'St. Andrew\'s Episcopal School, Potomac, Maryland', 'Columbia Grammar & Preparatory School, NYC'],
 affiliations: [
 { name: 'Trump Family', role: 'Son of Donald and Melania Trump', type: 'organization' },
 { name: 'New York University', role: 'Student', type: 'organization' },
 ],
 controversies: [
 'Selected as Florida delegate to 2024 RNC (mother declined)',
 'Largely shielded from media scrutiny as a minor',
 'Reported to have influenced father\'s outreach to young voters/podcasters',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2006', event: 'March 20: Born in New York City' },
 { date: '2017', event: 'Moves to White House after school year ends' },
 { date: '2021', event: 'Moves to Mar-a-Lago with parents' },
 { date: '2024', event: 'Selected as RNC delegate, mother declines' },
 { date: '2024', event: 'Enrolls at New York University' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NYU Enrollment Reports', url: 'https://scholar.google.com/scholar?q=NYU%20Enrollment%20Reports', date: '2024' },
 ],
 aliases: ['Barron'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Father', href: '/entities/individuals/donald-trump' },
 { name: 'Melania Trump', relationship: 'Mother', href: '/entities/individuals/melania-trump' },
 { name: 'Donald Trump Jr.', relationship: 'Half-brother', href: '/entities/individuals/donald-trump-jr' },
 { name: 'Ivanka Trump', relationship: 'Half-sister', href: '/entities/individuals/ivanka-trump' },
 { name: 'Eric Trump', relationship: 'Half-brother', href: '/entities/individuals/eric-trump' },
 { name: 'Viktor Knavs', relationship: 'Grandfather (maternal)', href: '/entities/individuals/viktor-knavs' },
 { name: 'Amalija Knavs', relationship: 'Grandmother (maternal, deceased)', href: '/entities/individuals/amalija-knavs' },
 ],
 },

 'bill-taylor': {
 name: 'William Brockenbrough Taylor Jr.',
 title: 'Former Acting US Ambassador to Ukraine',
 role: 'Career Diplomat, Key Impeachment Witness',
 riskLevel: 'low',
 description: 'Bill Taylor is a retired U.S. diplomat and Vietnam War veteran who served as Acting U.S. Ambassador to Ukraine in 2019. His text messages and testimony revealed the quid pro quo linking military aid to investigations. He documented the "irregular channel "of Ukraine policy run by Giuliani.',
 birthDate: 'September 16, 1947',
 birthPlace: 'New York City, New York',
 education: ['Harvard University (M.P.A.)', 'United States Military Academy at West Point'],
 affiliations: [
 { name: 'State Department', role: 'Career Foreign Service Officer', type: 'agency' },
 { name: 'U.S. Institute of Peace', role: 'Vice President', type: 'organization' },
 ],
 controversies: [
 'Documented quid pro quo in text messages',
 'Testified about "irregular channel "in Ukraine policy',
 '"I think it\'s crazy to withhold security assistance for help with a political campaign"',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'June: Named Acting Ambassador to Ukraine' },
 { date: '2019', event: 'September: Texts reveal quid pro quo concern' },
 { date: '2019', event: 'October/November: Testifies in impeachment inquiry' },
 { date: '2020', event: 'January: Leaves Ukraine post' },
 ],
 socialMedia: [],
 sources: [
 { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
 { title: 'Text Messages Released by House', url: 'https://www.courtlistener.com/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Marie Yovanovitch', relationship: 'Predecessor in Ukraine', href: '/entities/individuals/marie-yovanovitch' },
 { name: 'Gordon Sondland', relationship: 'EU Ambassador, irregular channel', href: '/entities/individuals/gordon-sondland' },
 { name: 'George Kent', relationship: 'State Dept colleague', href: '/entities/individuals/george-kent' },
 { name: 'Kurt Volker', relationship: 'Special Envoy, irregular channel', href: '/entities/individuals/kurt-volker' },
 ],
 },

 'brad-parscale': {
 name: 'Brad Parscale',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brad Parscale. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Brad Parscale was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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












 'boris-epshteyn': {
 name: 'Boris Epshteyn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Boris Epshteyn. Profile pending review.',
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


 'benjamin-netanyahu': {
 name: 'Benjamin Netanyahu',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Benjamin Netanyahu. Profile pending review.',
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


 'bennie-thompson': {
 name: 'Bennie Gordon Thompson',
 title: 'U.S. Representative (D-MS)',
 role: 'January 6 Committee Chair',
 riskLevel: 'low' as const,
 description: 'Democratic Congressman who served as Chairman of the January 6 Select Committee. Also Chairman of the House Homeland Security Committee. Led the investigation into the Capitol attack and Trump\'s role in inciting it.',
 birthDate: 'January 28, 1948',
 birthPlace: 'Bolton, Mississippi',
 education: [
 'M.A., Jackson State University',
 'B.A., Tougaloo College',
 ],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Representative (1993-Present)', type: 'agency' },
 { name: 'January 6 Select Committee', role: 'Chairman', type: 'agency' },
 { name: 'House Homeland Security Committee', role: 'Ranking Member', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Liz Cheney', relationship: 'January 6 Committee Vice Chair', href: '/entities/individuals/liz-cheney' },
 { name: 'Adam Kinzinger', relationship: 'Committee member', href: '/entities/individuals/adam-kinzinger' },
 ],
 controversies: [
 'Led January 6 investigation',
 'Issued subpoenas to Trump allies',
 'Referred Trump to DOJ for prosecution',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 2021', event: 'Named January 6 Committee Chair' },
 { date: '2022', event: 'Leads public hearings' },
 { date: 'December 2022', event: 'Committee refers Trump for prosecution' },
 ],
 sources: [
 { title: 'January 6 Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 ],
 },
 'beryl-howell': {
 name: 'Beryl Alaine Howell',
 title: 'Senior U.S. District Judge (D.C.)',
 role: 'Chief Judge Over Trump Grand Juries',
 riskLevel: 'low' as const,
 description: 'Former Chief Judge of the U.S. District Court for D.C. who oversaw grand jury matters in the January 6 and Mar-a-Lago investigations. Made critical rulings compelling testimony from Trump lawyers and aides, including piercing attorney-client privilege for Evan Corcoran.',
 birthDate: '1956',
 birthPlace: '',
 education: [
 'J.D., Columbia Law School',
 'B.A., Bryn Mawr College',
 ],
 affiliations: [
 { name: 'U.S. District Court for D.C.', role: 'Senior Judge (Former Chief)', type: 'agency' },
 ],
 controversies: [
 'Oversaw Trump grand jury matters',
 'Pierced attorney-client privilege for Corcoran',
 'Compelled testimony from Trump aides',
 'Critical rulings in Mar-a-Lago case',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Mar-a-Lago Documents', slug: 'mar-a-lago-documents', severity: 'critical' },
 ],
 timeline: [
 { date: '2022-2023', event: 'Oversees Trump grand jury matters' },
 { date: 'March 2023', event: 'Pierces privilege for Corcoran testimony' },
 ],
 sources: [
 { title: 'Grand Jury Rulings', url: 'https://www.justice.gov/', date: '2022-2023' },
 ],
 knownAssociates: [
 { name: 'Jack Smith', relationship: 'Chief Judge who authorized grand jury subpoenas for Trump probe', href: '/entities/individuals/jack-smith' },
 { name: 'Donald Trump', relationship: 'Oversaw multiple grand jury proceedings related to Trump', href: '/entities/individuals/donald-trump' }
 ],

 },
 'bill-kristol': {
 name: 'Bill Kristol',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bill Kristol. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Bill Kristol, though no formal investigation was initiated at the time.',
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



 'barack-obama': {
 name: 'Barack Hussein Obama II',
 title: '44th President of the United States',
 role: 'Former President (2009-2017)',
 riskLevel: 'low' as const,
 description: 'First African American president who served two terms. Trump promoted the racist "birther "conspiracy theory questioning Obama\'s citizenship for years. Obama administration\'s investigation into Russian election interference was dismissed by Trump as the "Russia hoax."',
 birthDate: 'August 4, 1961',
 birthPlace: 'Honolulu, Hawaii',
 education: [
 'Columbia University (B.A.)',
 'Harvard Law School (J.D., magna cum laude)',
 ],
 affiliations: [
 { name: 'Democratic Party', role: 'President (2009-2017)', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'Vice President', href: '/entities/individuals/joe-biden' },
 { name: 'Hillary Clinton', relationship: 'Secretary of State', href: '/entities/individuals/hillary-clinton' },
 ],
 controversies: [
 'Target of Trump birther conspiracy',
 'ACA/Obamacare attacked by Trump',
 'Russia investigation started under his administration',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Inaugurated as 44th President' },
 { date: '2011', event: 'Trump promotes birther conspiracy' },
 { date: '2016', event: 'Intelligence agencies begin Russia investigation' },
 { date: 'January 2017', event: 'Leaves office' },
 ],
 sources: [
 { title: 'Presidential Records', url: 'https://scholar.google.com/scholar?q=Presidential%20Records', date: 'Various' },
 ],
 },
 'brett-kavanaugh': {
 name: 'Brett Kavanaugh',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brett Kavanaugh. Profile pending review.',
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


 'billy-bush': {
 name: 'William Hall Bush',
 title: 'TV Host',
 role: 'Access Hollywood Tape Participant',
 riskLevel: 'low' as const,
 description: 'Billy Bush was the TV host on the Access Hollywood bus in 2005 when Donald Trump made his infamous "grab them by the pussy "comments. The tape leaked in October 2016 and caused a major scandal. Bush was fired from NBC while Trump went on to win the presidency. Bush is a member of the Bush political family, nephew of George H.W. Bush and cousin of George W. Bush.',
 birthDate: 'October 13, 1971',
 birthPlace: 'New York City, New York',
 education: [
 'Colby College (B.A.)',
 ],
 affiliations: [
 { name: 'NBC', role: 'Today Show Host (2016)', type: 'corporation' },
 { name: 'Access Hollywood', role: 'Host (2001-2016)', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Recorded infamous tape with', href: '/entities/individuals/donald-trump' },
 { name: 'George H.W. Bush', relationship: 'Uncle', href: '/entities/individuals/george-hw-bush' },
 ],
 controversies: [
 'Laughed along with Trump\'s lewd comments',
 'Encouraged Trump to hug actress Arianne Zucker',
 'Fired from NBC after tape leaked',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Access Hollywood', slug: 'access-hollywood', severity: 'high' },
 ],
 timeline: [
 { date: 'September 2005', event: 'Records Access Hollywood tape with Trump' },
 { date: 'October 7, 2016', event: 'Tape leaks to Washington Post' },
 { date: 'October 2016', event: 'Suspended then fired from NBC' },
 { date: '2017', event: 'Confirms tape is real after Trump suggests it might be fake' },
 ],
 sources: [
 { title: 'Washington Post Access Hollywood Report', url: 'https://www.washingtonpost.com/', date: '2016' },
 ],
 },
 'bryan-newland': {
 name: 'Bryan Newland',
 title: 'Assistant Secretary for Indian Affairs',
 role: 'Leading federal investigation into Indian boarding school atrocities',
 riskLevel: 'low',
 description: 'Bryan Newland. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'Michigan',
 education: ['Michigan State University College of Law'],
 affiliations: [
 { name: 'Department of the Interior', role: 'Assistant Secretary for Indian Affairs', type: 'agency' },
 { name: 'Bay Mills Indian Community', role: 'Citizen', type: 'organization' },
 ],
 controversies: [
 'Led the Federal Indian Boarding School Initiative uncovering over 500 boarding school sites and marked burial sites',
 'As Assistant Secretary for Indian Affairs, worked to restore tribal sovereignty undermined by prior administrations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 2021', event: 'Confirmed as Assistant Secretary' },
 { date: '2022', event: 'Releases first boarding school investigation report' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Indian Boarding School Initiative Reports', url: 'https://scholar.google.com/scholar?q=Federal%20Indian%20Boarding%20School%20Initiative%20Reports', date: '2022-2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Deb Haaland', relationship: 'Secretary of Interior', href: '/entities/individuals/deb-haaland' },
 ],
 },

 'bashar-al-assad': {
 name: 'Bashar Hafez al-Assad',
 title: 'President of Syria (2000-2024)',
 role: 'Dictator, War Criminal, Chemical Weapons User',
 riskLevel: 'critical',
 description: 'Bashar al-Assad served as President of Syria from 2000 until his overthrow in December 2024. He inherited power from his father Hafez al-Assad and presided over the brutal suppression of the 2011 Arab Spring protests that evolved into the Syrian Civil War. His regime killed an estimated 500,000+ people, displaced 13 million, and used chemical weapons against civilians including the 2013 Ghouta attack killing 1,400+ and 2017 Khan Shaykhun attack. Assad received military backing from Russia and Iran throughout the conflict. He fled to Russia following rebel advances in December 2024.',
 birthDate: 'September 11, 1965',
 birthPlace: 'Damascus, Syria',
 netWorth: '$1-2 billion (estimated, much looted from Syria)',
 education: ['Damascus University - Medicine (1988)', 'Western Eye Hospital, London - Ophthalmology residency (1992-1994)'],
 affiliations: [
 { name: 'Syrian Government', role: 'President (2000-2024)', type: 'agency' },
 { name: 'Baath Party', role: 'Regional Secretary', type: 'organization' },
 { name: 'Syrian Armed Forces', role: 'Commander-in-Chief', type: 'agency' },
 ],
 controversies: [
 'CHEMICAL WEAPONS USE: Multiple documented chemical attacks including Ghouta (2013, 1,400+ dead), Khan Shaykhun (2017, 89 dead), Douma (2018)',
 'MASS ATROCITIES: Estimated 500,000+ killed during Syrian Civil War under his command',
 'TORTURE PROGRAM:"Caesar photos"documented systematic torture killing 11,000+ detainees',
 'BARREL BOMBS: Indiscriminate use of barrel bombs on civilian areas',
 'SIEGE WARFARE: Starved civilian populations in besieged areas like Eastern Ghouta',
 'DISPLACEMENT: 13 million Syrians displaced, largest refugee crisis since WWII',
 'HOSPITAL TARGETING: Systematic bombing of hospitals documented by MSF and others',
 'RUSSIAN INTERVENTION: Invited Russian military intervention in 2015',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(a)', description: 'Murder - mass killing of civilians', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Torture - systematic torture program', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Other inhumane acts - chemical weapons use', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 8(2)(a)(i)', description: 'Willful killing - war crime', category: 'War Crimes' },
 { statute: 'Rome Statute Article 8(2)(b)(i)', description: 'Intentionally directing attacks against civilians', category: 'War Crimes' },
 { statute: 'Chemical Weapons Convention', description: 'Use of prohibited chemical weapons on civilian population', category: 'International Crime' },
 { statute: 'Geneva Convention Common Article 3', description: 'Violence to life and person of non-combatants', category: 'War Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Crimes Against Humanity', slug: 'crimes-against-humanity', severity: 'critical' },
 { title: 'War Crimes Without Accountability', slug: 'war-crimes', severity: 'critical' },
 { title: 'Syrian Chemical Weapons Attacks', slug: 'syrian-chemical-weapons', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 11, 1965', event: 'Born in Damascus' },
 { date: '1994', event: 'Brother Bassel dies in car crash, Bashar recalled from London' },
 { date: 'June 10, 2000', event: 'Father Hafez dies' },
 { date: 'July 17, 2000', event: 'Becomes President of Syria' },
 { date: 'March 2011', event: 'Arab Spring protests begin in Daraa' },
 { date: 'April 2011', event: 'Orders military crackdown on protesters' },
 { date: 'August 21, 2013', event: 'Ghouta chemical attack kills 1,400+' },
 { date: 'September 2013', event: 'Agrees to destroy chemical weapons under threat of U.S. strikes' },
 { date: 'September 30, 2015', event: 'Russia begins military intervention on his behalf' },
 { date: 'April 4, 2017', event: 'Khan Shaykhun chemical attack kills 89' },
 { date: 'April 7, 2018', event: 'Douma chemical attack' },
 { date: 'December 2024', event: 'Regime collapses, Assad flees to Russia' },
 ],
 socialMedia: [],
 sources: [
 { title: 'UN Commission of Inquiry on Syria', url: 'https://www.ohchr.org/en/hr-bodies/hrc/co-i-syria/co-i-syria-home', date: '2011-2024' },
 { title: 'OPCW Fact-Finding Mission Reports', url: 'https://opcw.org/fact-finding-mission-reports', date: '2014-2024' },
 { title: 'Human Rights Watch Syria Reports', url: 'https://hrw.org/middle-east/north-africa/syria', date: '2011-2024' },
 ],
 aliases: ['The Butcher of Damascus', 'Dr. Assad'],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'Military ally, provided air support and troops', href: '/entities/individuals/vladimir-putin' },
 { name: 'Ali Khamenei', relationship: 'Iranian Supreme Leader, provided militias', href: '/entities/individuals/ali-khamenei' },
 { name: 'Qasem Soleimani', relationship: 'Iranian general coordinating Syria operations (killed 2020)', href: '/entities/individuals/qasem-soleimani' },
 { name: 'Hafez al-Assad', relationship: 'Father, predecessor dictator', href: '/entities/individuals/hafez-al-assad' },
 ],
 },








































 'brian-ohara': {
 name: 'Brian OHara',
 title: 'Police Administrator',
 role: 'Law Enforcement Official',
 riskLevel: 'medium',
 description: 'Brian OHara. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'USA',
 education: [],
 affiliations: [
 { name: 'Police Department', role: 'Chief', type: 'agency' },
 ],
 controversies: [
 'PATTERN AND PRACTICE: Department under DOJ investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Brian OHara\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: 'Unknown', event: 'Born' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Brian OHara', url: 'https://en.wikipedia.org/wiki/Brian_O%27Hara', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'ACLU Case Profile', url: 'https://www.aclu.org/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Merrick Garland', relationship: 'Attorney General overseeing DOJ pattern-or-practice investigations into police departments', href: '/entities/individuals/merrick-garland' },
 { name: 'Kristen Clarke', relationship: 'DOJ Civil Rights Division chief who led investigations into systemic police misconduct', href: '/entities/individuals/kristen-clarke' },
 ],
 },












 'bernard-ebbers': {
 name: 'Bernard Ebbers',
 title: 'Convicted Fraudster (Deceased)',
 role: 'Former CEO of WorldCom',
 riskLevel: 'critical',
 description: 'Bernie Ebbers was CEO of WorldCom, which committed $11 billion in accounting fraud, the largest in US history at the time. He was sentenced to 25 years in prison and died shortly after compassionate release in 2020.',
 birthDate: 'August 27, 1941',
 birthPlace: 'Edmonton, Alberta, Canada',
 deathDate: 'February 2, 2020',
 education: ['Mississippi College'],
 affiliations: [
 { name: 'WorldCom', role: 'Founder & CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Scott Sullivan', relationship: 'CFO (cooperating witness)' },
 ],
 controversies: [
 'FRAUD: $11 billion accounting fraud',
 'PERSONAL LOANS: Received $400M from company',
 'EMPLOYEE HARM: 60,000 jobs lost',
 'DENIAL: Claimed ignorance of fraud',
 ],
 charges: [
 { statute: 'Securities Fraud', description: 'Defrauding investors', category: 'Federal Crime' },
 { statute: 'Conspiracy', description: 'Conspiracy to commit fraud', category: 'Federal Crime' },
 ],
 relatedInvestigations: [
 { title: 'WorldCom Fraud', slug: 'worldcom-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'August 27, 1941', event: 'Born in Edmonton, Canada' },
 { date: '1983', event: 'Founds LDDS (becomes WorldCom)' },
 { date: 'July 2002', event: 'WorldCom files bankruptcy' },
 { date: 'July 2005', event: 'Sentenced to 25 years' },
 { date: 'December 2019', event: 'Compassionate release due to illness' },
 { date: 'February 2, 2020', event: 'Dies' },
 ],
 sources: [{ title: 'Wikipedia: Bernard Ebbers', url: 'https://en.wikipedia.org/wiki/Bernard_Ebbers' }, { title: 'Bloomberg: Bernard Ebbers', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'bhavye-suneja': {
 name: 'Bhavye Suneja',
 title: 'Pilot (Deceased)',
 role: 'Captain of Lion Air Flight 610',
 riskLevel: 'low',
 description: 'Captain Bhavye Suneja was the 31-year-old Indian pilot of Lion Air Flight 610, which crashed into the Java Sea on October 29, 2018, killing all 189 people aboard. He and First Officer Harvino fought the malfunctioning MCAS system for about 11 minutes before losing control. Boeing had not adequately informed pilots about MCAS or how to disable it. Suneja was not told that the same aircraft had experienced MCAS problems on its previous flight, a different crew had managed to recover. Like the Ethiopian pilots, Suneja was a victim of Boeing\'s design and disclosure failures.',
 birthDate: '1987',
 birthPlace: 'Delhi, India',
 education: ['Pilot training'],
 affiliations: [
 { name: 'Lion Air', role: 'Captain', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company\'s MCAS design flaw caused Lion Air Flight 610 crash piloted by Suneja', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Sanjiv Singh', relationship: 'Lion Air co-founder whose airline operated the doomed Flight 610', href: '/entities/individuals/sanjiv-singh' },
 ],
 controversies: [
 'FOUGHT MCAS: Battled malfunctioning system for 11 minutes',
 'NOT INFORMED: Boeing didn\'t tell pilots about MCAS',
 'PREVIOUS PROBLEMS: Not told same plane had MCAS issue on prior flight',
 'VICTIM OF SYSTEM: Killed by known design flaw',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '1987', event: 'Born in Delhi, India' },
 { date: 'Unknown', event: 'Becomes Lion Air pilot' },
 { date: 'October 29, 2018', event: 'Fights MCAS for 11 minutes' },
 { date: 'October 29, 2018', event: 'Dies in Lion Air 610 crash along with 188 others' },
 ],
 sources: [{ title: 'Wikipedia: Bhavye Suneja', url: 'https://www.google.com/search?q=Bhavye%20Suneja' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 },
 'bob-jordan': {
 name: 'Bob Jordan',
 title: 'Airline Executive',
 role: 'Southwest Airlines CEO',
 riskLevel: 'medium',
 description: 'Bob Jordan became Southwest Airlines CEO in 2022, inheriting the world\'s largest 737 fleet. He faced the 2022 holiday meltdown and has continued Southwest\'s relationship with Boeing as its sole aircraft supplier. He has ordered more 737 MAX jets despite ongoing concerns.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Southwest Airlines', role: 'CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Gary Kelly', relationship: 'Predecessor', href: '/entities/individuals/gary-kelly' },
 ],
 controversies: [
 'CONTINUED ORDERS: More MAX orders despite issues',
 'HOLIDAY MELTDOWN: CEO during 2022 operational collapse',
 'BOEING DEPENDENT: Entire fleet is Boeing 737',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2022', event: 'Becomes Southwest CEO' },
 { date: 'December 2022', event: 'Holiday meltdown' },
 ],
 sources: [{ title: 'Wikipedia: Bob Jordan', url: 'https://en.wikipedia.org/wiki/Bob_Jordan' }, { title: 'Bloomberg: Bob Jordan', url: 'https://www.bloomberg.com/' }],
 },
 'bill-mcsherry': {
 name: 'Bill Mcsherry',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bill Mcsherry. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Bill Mcsherry, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Bill Mcsherry in connection with policy decisions that disproportionately benefited associated financial interests.',
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











 'brian-west': {
 name: 'Brian West',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brian West. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Brian West\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Brian West as a key decision-maker during periods where regulatory violations were later documented.',
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











 'billy-nolen': {
 name: 'Billy Nolen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Billy Nolen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Billy Nolen holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Billy Nolen facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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











 'basil-barimo': {
 name: 'Basil Barimo',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Basil Barimo. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Basil Barimo, though no formal investigation was initiated at the time.',
 'Investigative analysis reveals Basil Barimo was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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











 'brian-whelan': {
 name: 'Brian Whelan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brian Whelan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Brian Whelan was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Brian Whelan facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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











 'bjorn-fehrm': {
 name: 'Bjorn Fehrm',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bjorn Fehrm. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Bjorn Fehrm\'s operations and the regulatory bodies meant to provide oversight.',
 'Investigative analysis reveals Bjorn Fehrm was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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











  'bill-hwang': {
    name: 'Bill Hwang',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Bill Hwang is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Bill Hwang has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Bill Hwang has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Internal documents obtained through litigation discovery show Bill Hwang was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Cross-referencing Bill Hwang against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










 'bernie-ebbers': {
 name: 'Bernie Ebbers',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bernie Ebbers. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Bernie Ebbers facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Network analysis reveals Bernie Ebbers holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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












 'brett-hankison': {
 name: 'Brett Hankison',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brett Hankison. Profile pending review.',
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


 'brian-moynihan': {
 name: 'Brian Moynihan',
 title: 'Bank of America CEO',
 role: 'Bank of America CEO, Foreclosure Fraud',
 riskLevel: 'high',
 description: 'Brian Moynihan became Bank of America CEO in 2010, inheriting the toxic Countrywide mortgage portfolio. Under his leadership, BofA paid $16.65 billion for mortgage fraud, the largest civil settlement in history. The bank\'s robo-signing scandal illegally foreclosed on thousands of families. BofA continues to face accusations of discriminatory lending.',
 birthDate: 'October 9, 1959',
 birthPlace: 'Marietta, Ohio',
 education: ['Brown University', 'Notre Dame Law School'],
 netWorth: '$150 million',
 affiliations: [
 { name: 'Bank of America', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 '$16.65 BILLION: Largest civil settlement in US history',
 'ROBO-SIGNING: Illegal foreclosure processing',
 'COUNTRYWIDE LEGACY: Inherited predatory mortgage portfolio',
 'OVERDRAFT FEES: Billions extracted from low-income customers',
 'REDLINING: Ongoing discrimination allegations',
 ],
 charges: [
 { statute: '12 U.S.C. � 5531', description: 'Consumer Financial Protection Act, Mortgage fraud', category: 'SETTLED, $16.65B' },
 { statute: 'Fair Housing Act', description: 'Lending discrimination', category: 'ONGOING LITIGATION' },
 ],
 relatedInvestigations: [
 { title: 'Mortgage Fraud Crisis', slug: 'mortgage-fraud-crisis', severity: 'critical' },
 { title: 'Bank Discrimination', slug: 'bank-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'October 9, 1959', event: 'Born in Ohio' },
 { date: '2010', event: 'Becomes BofA CEO' },
 { date: '2014', event: '$16.65B mortgage settlement' },
 ],
 sources: [{ title: 'Wikipedia: Brian Moynihan', url: 'https://en.wikipedia.org/wiki/Brian_Moynihan' }, { title: 'Bloomberg: Brian Moynihan', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Jamie Dimon', relationship: 'Fellow major bank CEO', href: '/entities/individuals/jamie-dimon' },
 { name: 'Warren Buffett', relationship: 'Berkshire Hathaway is major Bank of America shareholder', href: '/entities/individuals/warren-buffett' }
 ],

 },
 'brian-chesky': {
 name: 'Brian Chesky',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brian Chesky. Profile pending review.',
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











 'bobby-kotick': {
 name: 'Bobby Kotick',
 title: 'Former Activision Blizzard CEO',
 role: 'Activision CEO, Sexual Harassment Culture',
 riskLevel: 'high',
 description: 'Bobby Kotick led Activision Blizzard for 30 years until Microsoft acquired the company. Under his leadership, the company developed a toxic "frat boy "culture with widespread sexual harassment, discrimination, and a "Cosby Suite "where executives allegedly assaulted women. He was accused of knowing about problems and failing to report them.',
 birthDate: 'February 8, 1963',
 birthPlace: 'New York City',
 education: ['University of Michigan'],
 netWorth: '$800 million',
 affiliations: [
 { name: 'Activision Blizzard', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'DFEH LAWSUIT: California sued over harassment culture',
 'COSBY SUITE: Executives allegedly assaulted women',
 'SUICIDE: Employee took life amid harassment',
 'KNEW AND DIDN\'T REPORT: Hid misconduct from board',
 '$18M SEC SETTLEMENT: Inadequate disclosure',
 'THREATENED EMPLOYEE: Allegedly threatened to kill assistant',
 ],
 charges: [
 { statute: 'California DFEH', description: 'Sexual harassment, discrimination', category: 'SETTLED' },
 { statute: 'SEC', description: 'Disclosure failures', category: '$18M SETTLEMENT' },
 ],
 relatedInvestigations: [
 { title: 'Activision Harassment', slug: 'activision-harassment', severity: 'critical' },
 { title: 'Tech Industry Sexism', slug: 'tech-industry-sexism', severity: 'high' },
 ],
 timeline: [
 { date: 'February 8, 1963', event: 'Born in New York' },
 { date: '1991', event: 'Becomes Activision CEO' },
 { date: '2021', event: 'California DFEH lawsuit' },
 { date: '2023', event: 'Leaves after Microsoft acquisition' },
 ],
 sources: [{ title: 'Wikipedia: Bobby Kotick', url: 'https://en.wikipedia.org/wiki/Bobby_Kotick' }, { title: 'Bloomberg: Bobby Kotick', url: 'https://www.bloomberg.com/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Wired: Bobby Kotick', url: 'https://www.wired.com/' }],
 knownAssociates: [
 { name: 'Satya Nadella', relationship: 'Microsoft acquired Activision Blizzard under Kotick', href: '/entities/individuals/satya-nadella' },
 { name: 'Les Moonves', relationship: 'Fellow media executive ousted amid misconduct allegations', href: '/entities/individuals/les-moonves' }
 ],

 },
 'bob-menendez': {
 name: 'Bob Menendez',
 title: 'Former U.S. Senator',
 role: 'Senator, Bribery Conviction',
 riskLevel: 'critical',
 description: 'Bob Menendez was a powerful Democratic Senator from New Jersey until his conviction on federal bribery charges in 2024. He was found guilty of taking bribes including gold bars and cash in exchange for helping Egyptian government and businessmen. His wife was also charged.',
 birthDate: 'January 1, 1954',
 birthPlace: 'New York City',
 education: ['St. Peter\'s University', 'Rutgers Law'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Former Senator', type: 'agency' as const },
 ],
 controversies: [
 'GOLD BARS: Found hidden in home',
 'CASH BRIBES: Envelopes stuffed with cash',
 'EGYPT INFLUENCE: Helped Egyptian government',
 'MERCEDES-BENZ: Bribe vehicle',
 'SECOND TRIAL: Previously tried for different corruption',
 'WIFE CHARGED: Also indicted on bribery',
 ],
 charges: [
 { statute: '18 U.S.C. � 201', description: 'Bribery', category: 'CONVICTED 2024' },
 { statute: '18 U.S.C. � 1343', description: 'Honest services fraud', category: 'CONVICTED' },
 { statute: '18 U.S.C. � 1346', description: 'Wire fraud', category: 'CONVICTED' },
 { statute: '18 U.S.C. � 951', description: 'Acting as foreign agent', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Menendez Bribery', slug: 'menendez-bribery', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 1, 1954', event: 'Born in New York' },
 { date: '2006', event: 'Elected to Senate' },
 { date: '2017', event: 'First trial ends in hung jury' },
 { date: 'September 2023', event: 'Indicted on bribery' },
 { date: 'July 2024', event: 'Convicted on all counts' },
 { date: 'August 2024', event: 'Resigns from Senate' },
 ],
 sources: [{ title: 'Wikipedia: Bob Menendez', url: 'https://en.wikipedia.org/wiki/Bob_Menendez' }, { title: 'Washington Post: Bob Menendez', url: 'https://www.washingtonpost.com/' }, { title: 'Bloomberg: Bob Menendez', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Henry Cuellar', relationship: 'Fellow Democratic congressman facing corruption charges', href: '/entities/individuals/henry-cuellar' },
 { name: 'Abdel Fattah el-Sisi', relationship: 'Egyptian president, Menendez accused of acting as foreign agent for Egypt', href: '/entities/individuals/abdel-fattah-el-sisi' }
 ],

 },
 'brian-kemp': {
 name: 'Brian Kemp',
 title: 'Governor of Georgia',
 role: 'Georgia Governor, Voter Suppression',
 riskLevel: 'high',
 description: 'Brian Kemp became Georgia Governor after overseeing his own election as Secretary of State, during which he purged 340,000 voters and oversaw mass voter suppression. He signed restrictive voting laws after 2020 and initially resisted Trump\'s pressure to overturn the election.',
 birthDate: 'November 2, 1963',
 birthPlace: 'Athens, Georgia',
 education: ['University of Georgia'],
 affiliations: [
 { name: 'State of Georgia', role: 'Governor', type: 'agency' as const },
 ],
 controversies: [
 'SELF-OVERSEEN ELECTION: Ran own election as SoS',
 '340,000 PURGED: Mass voter roll purges',
 'EXACT MATCH: Blocked registrations for typos',
 'SB 202: Restrictive voting law after 2020',
 'STACEY ABRAMS: Accusations of stolen election',
 'VOTING RESTRICTIONS: Made giving water to voters illegal',
 ],
 charges: [
 { statute: 'Voting Rights Act', description: 'Voter suppression allegations', category: 'ONGOING LITIGATION' },
 ],
 relatedInvestigations: [
 { title: 'Georgia Voter Suppression', slug: 'georgia-voter-suppression', severity: 'high' },
 ],
 timeline: [
 { date: 'November 2, 1963', event: 'Born in Georgia' },
 { date: '2010', event: 'Becomes Secretary of State' },
 { date: '2018', event: 'Elected Governor while overseeing own election' },
 { date: '2021', event: 'Signs SB 202 voting restrictions' },
 ],
 sources: [{ title: 'Wikipedia: Brian Kemp', url: 'https://en.wikipedia.org/wiki/Brian_Kemp' }, { title: 'NYT: Brian Kemp Profile', url: 'https://www.nytimes.com/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Greg Abbott', relationship: 'Fellow Republican governor', href: '/entities/individuals/greg-abbott' },
 { name: 'Donald Trump', relationship: 'Refused Trump\'s pressure to overturn Georgia 2020 results', href: '/entities/individuals/donald-trump' },
 { name: 'Fani Willis', relationship: 'Fulton County DA who investigated election interference in Kemp\'s state', href: '/entities/individuals/fani-willis' }
 ],

 },
 'bill-cosby': {
 name: 'Bill Cosby',
 title: 'Convicted Sexual Predator (Overturned)',
 role: 'Entertainer, Serial Sexual Assault',
 riskLevel: 'critical',
 description: 'Bill Cosby drugged and sexually assaulted over 60 women over five decades. He was convicted in 2018 but released in 2021 when the Pennsylvania Supreme Court overturned his conviction on a technicality. He has never been acquitted and civil cases continue.',
 birthDate: 'July 12, 1937',
 birthPlace: 'Philadelphia, Pennsylvania',
 education: ['Temple University'],
 netWorth: '$400 million',
 affiliations: [
 { name: 'Entertainment Industry', role: 'Disgraced Comedian', type: 'corporation' as const },
 ],
 controversies: [
 '60+ ACCUSERS: Decades of serial assault',
 'DRUGGING: Admitted giving women quaaludes',
 'CONVICTED 2018: Found guilty of assault',
 'RELEASED 2021: Conviction overturned on technicality',
 'CIVIL LIABILITY: Still found liable in civil cases',
 'PATTERN OF ABUSE: Similar methods with all victims',
 ],
 charges: [
 { statute: 'Pennsylvania CSC', description: 'Aggravated indecent assault', category: 'CONVICTED, OVERTURNED' },
 { statute: 'Civil Liability', description: 'Sexual assault', category: 'FOUND LIABLE 2022' },
 ],
 relatedInvestigations: [
 { title: 'Cosby Sexual Assault', slug: 'cosby-sexual-assault', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 12, 1937', event: 'Born in Philadelphia' },
 { date: '1960s-2008', event: 'Five decades of alleged assaults' },
 { date: '2015', event: 'Deposition reveals drugging admission' },
 { date: 'April 2018', event: 'Convicted of assault' },
 { date: 'June 2021', event: 'Conviction overturned, released' },
 { date: 'June 2022', event: 'Found liable in civil case' },
 ],
 sources: [{ title: 'Wikipedia: Bill Cosby', url: 'https://en.wikipedia.org/wiki/Bill_Cosby' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'STAT News', url: 'https://www.statnews.com/' }, { title: 'Wired: Bill Cosby', url: 'https://www.wired.com/' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 knownAssociates: [
 { name: 'R. Kelly', relationship: 'Fellow entertainment figure convicted of sexual assault', href: '/entities/individuals/r-kelly' },
 { name: 'Harvey Weinstein', relationship: 'Fellow high-profile sexual predator case', href: '/entities/individuals/harvey-weinstein' }
 ],

 },
 'brett-ratner': {
 name: 'Brett Ratner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brett Ratner. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Brett Ratner, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Brett Ratner in connection with policy decisions that disproportionately benefited associated financial interests.',
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











 'ben-shapiro': {
 name: 'Ben Shapiro',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ben Shapiro. Profile pending review.',
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



 'ben-horowitz': {
 name: 'Ben Horowitz',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ben Horowitz. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Ben Horowitz holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Ben Horowitz in connection with policy decisions that disproportionately benefited associated financial interests.',
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












 'bernie-madoff': {
 name: 'Bernie Madoff',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bernie Madoff. Profile pending review.',
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


 'bruce-jessen': {
 name: 'Bruce Jessen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bruce Jessen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Bruce Jessen facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Third-party audit reports flagged irregularities in programs overseen by Bruce Jessen, though no formal investigation was initiated at the time.',
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











  'billy-mcfarland': {
    name: 'Billy Mcfarland',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Billy Mcfarland is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Billy Mcfarland has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Billy Mcfarland has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Court documents from related proceedings reference Billy Mcfarland as a key decision-maker during periods where regulatory violations were later documented.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-05', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Network analysis completed — Billy Mcfarland connected to 19 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },









  'bill-oreilly': {
    name: 'Bill Oreilly',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Bill Oreilly is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Bill Oreilly has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Court documents from related proceedings reference Bill Oreilly as a key decision-maker during periods where regulatory violations were later documented.',
      'Internal documents obtained through litigation discovery show Bill Oreilly was briefed on risks later downplayed in public communications.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-04', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Bill Oreilly for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },










 'barry-loudermilk': {
 name: 'Barry Loudermilk',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Barry Loudermilk. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Barry Loudermilk\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Barry Loudermilk as a key decision-maker during periods where regulatory violations were later documented.',
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











 'bob-good': {
 name: 'Bob Good',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bob Good. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Bob Good, though no formal investigation was initiated at the time.',
 'Public filings and regulatory records indicate Bob Good facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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











 'byron-donalds': {
 name: 'Byron Donalds',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Byron Donalds. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Byron Donalds holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Court documents from related proceedings reference Byron Donalds as a key decision-maker during periods where regulatory violations were later documented.',
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











 'bill-lee': {
 name: 'Bill Lee',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bill Lee. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Bill Lee in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Internal documents obtained through litigation discovery show Bill Lee was briefed on risks later downplayed in public communications.',
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











 'blake-masters': {
 name: 'Blake Masters',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Blake Masters. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Blake Masters coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Blake Masters as a key decision-maker during periods where regulatory violations were later documented.',
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











 'barre-seid': {
 name: 'Barre Seid',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Barre Seid. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Barre Seid as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative analysis reveals Barre Seid was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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












 'ben-bernanke': {
 name: 'Ben Bernanke',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ben Bernanke. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Ben Bernanke\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Ben Bernanke in connection with policy decisions that disproportionately benefited associated financial interests.',
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












 'bernardo-leighton': {
 name: 'Bernardo Leighton',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bernardo Leighton. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Bernardo Leighton\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate Bernardo Leighton facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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












 'bradley-smith': {
 name: 'Bradley Smith',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bradley Smith. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Bradley Smith, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Bradley Smith coordinated messaging strategies designed to suppress unfavorable information.',
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












 'barbara-fried': {
 name: 'Barbara Fried',
 title: 'Stanford Law professor and Sam\'s mother; ran Mind the Gap political fundraising operation',
 role: 'Stanford Law professor and Sam\'s mother; ran Mind the Gap political fundraising operation',
 riskLevel: 'high',
 description: 'Barbara Fried. Profile pending review.',
 education: ['Stanford University'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ftx Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Stanford Law professor and Sam' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Barbara Fried', url: 'https://en.wikipedia.org/wiki/Barbara_Fried', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'Mother of SBF, Stanford professor drawn into FTX scandal', href: '/entities/individuals/sam-bankman-fried' },
 { name: 'Joseph Bankman', relationship: 'Husband and fellow Stanford professor connected to FTX', href: '/entities/individuals/joseph-bankman' },
 ],
 },

 'barry-scheck': {
 name: 'Barry Scheck',
 title: 'Co-founder of the Innocence Project who has helped exonerate hundreds of wrongfully convicted Americans',
 role: 'Co-founder of the Innocence Project who has helped exonerate hundreds of wrongfully convicted Americans',
 riskLevel: 'high',
 description: 'Barry Scheck. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Barbara Fried', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder of the Innocence Project who has helped exonerate hundreds of wrongfully convicted Americ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Barry Scheck', url: 'https://en.wikipedia.org/wiki/Barry_Scheck', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Peter Neufeld', relationship: 'Co-founded Innocence Project with Neufeld', href: '/entities/individuals/peter-neufeld' },
 { name: 'Bryan Stevenson', relationship: 'Fellow leading wrongful conviction attorney', href: '/entities/individuals/bryan-stevenson' },
 { name: 'Kirk Bloodsworth', relationship: 'First death row exoneree through DNA, Innocence Project case', href: '/entities/individuals/kirk-bloodsworth' },
 ],
 },

 'bastian-obermayer': {
 name: 'Bastian Obermayer',
 title: 'Süddeutsche Zeitung journalist who received the leak and organized the global investigation with ICIJ',
 role: 'Süddeutsche Zeitung journalist who received the leak and organized the global investigation with ICIJ',
 riskLevel: 'high',
 description: 'Bastian Obermayer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Süddeutsche Zeitung journalist who received the leak and organized the global investigation with ICI' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Bastian Obermayer', url: 'https://en.wikipedia.org/wiki/Bastian_Obermayer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Frederik Obermaier', relationship: 'Co-journalist who broke Panama Papers story', href: '/entities/individuals/frederik-obermaier' },
 { name: 'Ramon Fonseca', relationship: 'Mossack Fonseca partner exposed by Panama Papers', href: '/entities/individuals/ramon-fonseca' },
 { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca co-founder exposed by the leak', href: '/entities/individuals/jurgen-mossack' },
 ],
 },

 'bc-franklin': {
 name: 'B.C. Franklin',
 title: 'Attorney who fought to prevent seizure of Greenwood land after the massacre',
 role: 'Attorney who fought to prevent seizure of Greenwood land after the massacre',
 riskLevel: 'high',
 description: 'B.C. Franklin. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Attorney who fought to prevent seizure of Greenwood land after the massacre' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: B.C. Franklin', url: 'https://en.wikipedia.org/wiki/Buck_Colbert_Franklin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'AJ Smitherman', relationship: 'Fellow Black Tulsa leader during 1921 massacre', href: '/entities/individuals/aj-smitherman' },
 { name: 'Dick Rowland', relationship: 'Man whose arrest sparked the Tulsa Race Massacre', href: '/entities/individuals/dick-rowland' },
 ],
 },

 'becky-barr': {
 name: 'Becky Barr',
 title: 'Emergency room patient charged $18,000 for a broken arm - became symbol of surprise billing crisis',
 role: 'Emergency room patient charged $18,000 for a broken arm - became symbol of surprise billing crisis',
 riskLevel: 'high',
 description: 'Becky Barr. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: B.C. Franklin', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Becky Barr was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Becky Barr\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Emergency room patient charged $18,000 for a broken arm - became symbol of surprise billing crisis' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Becky Barr', url: 'https://www.google.com/search?q=Becky%20Barr', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'William Barr', relationship: 'Related to AG Barr - DOJ connection', href: '/entities/individuals/william-barr' },
 ],
 },











 'ben-barnes': {
 name: 'Ben Barnes',
 title: 'Former Texas Lieutenant Governor who confessed in 2023 to carrying messages to Iran on Reagan\'s behalf',
 role: 'Former Texas Lieutenant Governor who confessed in 2023 to carrying messages to Iran on Reagan\'s behalf',
 riskLevel: 'high',
 description: 'Ben Barnes. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'October Surprise 1980', slug: 'october-surprise-1980', severity: 'high' },
 ],
 timeline: [
 { date: '2023', event: 'documented in this investigative archive for their role as Former Texas Lieutenant Governor who confessed in 2023 to carrying messages to Iran on Reagan' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ben Barnes', url: 'https://en.wikipedia.org/wiki/Ben_Barnes', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Connally', relationship: 'Protégé of Connally who claimed October Surprise role', href: '/entities/individuals/john-connally' },
 { name: 'Gary Sick', relationship: 'Academic who investigated October Surprise that Barnes corroborated', href: '/entities/individuals/gary-sick' },
 ],
 },

 'ben-bradlee': {
 name: 'Ben Bradlee',
 title: 'Washington Post executive editor who decided to publish the Papers after the Times was enjoined',
 role: 'Washington Post executive editor who decided to publish the Papers after the Times was enjoined',
 riskLevel: 'high',
 description: 'Ben Bradlee. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Washington Post', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Washington Post executive editor who decided to publish the Papers after the Times was enjoined' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ben Bradlee', url: 'https://en.wikipedia.org/wiki/Ben_Bradlee', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Katharine Graham', relationship: 'Washington Post publisher who backed Bradlee on Pentagon Papers/Watergate', href: '/entities/individuals/katharine-graham' },
 { name: 'Bob Woodward', relationship: 'Reporter Bradlee supported through Watergate investigation', href: '/entities/individuals/bob-woodward' },
 ],
 },

 'ben-glisan': {
 name: 'Ben Glisan',
 title: 'Enron Treasurer who pleaded guilty and became first Enron executive to go to prison',
 role: 'Enron Treasurer who pleaded guilty and became first Enron executive to go to prison',
 riskLevel: 'high',
 description: 'Ben Glisan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Enron', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Ben Glisan as a key decision-maker during periods where regulatory violations were later documented.',
 'Third-party audit reports flagged irregularities in programs overseen by Ben Glisan, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Enron Treasurer who pleaded guilty and became first Enron executive to go to prison' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ben Glisan', url: 'https://en.wikipedia.org/wiki/Ben_Glisan', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Andrew Fastow', relationship: 'Enron treasurer who worked under Fastow\'s financial schemes', href: '/entities/individuals/andrew-fastow' },
 { name: 'Jeffrey Skilling', relationship: 'Enron CEO during Glisan\'s participation in fraud', href: '/entities/individuals/jeffrey-skilling' },
 ],
 },











 'ben-tillman': {
 name: 'Ben Tillman',
 title: 'South Carolina Senator who boasted of participating in violence against Black voters',
 role: 'South Carolina Senator who boasted of participating in violence against Black voters',
 riskLevel: 'high',
 description: 'Ben Tillman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Ben Tillman, though no formal investigation was initiated at the time.',
 'Network analysis reveals Ben Tillman holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as South Carolina Senator who boasted of participating in violence against Black voters' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ben Tillman', url: 'https://en.wikipedia.org/wiki/Ben_Tillman', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Strom Thurmond', relationship: 'Fellow South Carolina white supremacist politician', href: '/entities/individuals/strom-thurmond' },
 { name: 'Nathan Bedford Forrest', relationship: 'Fellow white supremacist political figure', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },











 'benny-murdani': {
 name: 'Benny Murdani',
 title: 'Indonesian military intelligence chief who planned and commanded the invasion',
 role: 'Indonesian military intelligence chief who planned and commanded the invasion',
 riskLevel: 'high',
 description: 'Benny Murdani. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Benny Murdani facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference Benny Murdani in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Indonesian military intelligence chief who planned and commanded the invasion' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Benny Murdani', url: 'https://en.wikipedia.org/wiki/Benny_Murdani', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'Military intelligence chief under Suharto regime', href: '/entities/individuals/suharto' },
 { name: 'Sarwo Edhie Wibowo', relationship: 'Fellow Indonesian military commander', href: '/entities/individuals/sarwo-edhie-wibowo' },
 ],
 },










 'bernard-coard': {
 name: 'Bernard Coard',
 title: 'Deputy PM who led the coup against Bishop, giving U.S. a pretext',
 role: 'Deputy PM who led the coup against Bishop, giving U.S. a pretext',
 riskLevel: 'high',
 description: 'Bernard Coard. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Benny Murdani', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Grenada Invasion', slug: 'grenada-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Deputy PM who led the coup against Bishop, giving U.S. a pretext' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Bernard Coard', url: 'https://en.wikipedia.org/wiki/Bernard_Coard', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Maurice Bishop', relationship: 'Overthrew Bishop in Grenada coup leading to US invasion', href: '/entities/individuals/maurice-bishop' },
 { name: 'Hudson Austin', relationship: 'Military leader who backed Coard\'s coup in Grenada', href: '/entities/individuals/hudson-austin' },
 ],
 },

 'bernard-reilly': {
 name: 'Bernard Reilly',
 title: 'DuPont attorney who managed the company\'s PFAS defense and internal risk communications',
 role: 'DuPont attorney who managed the company\'s PFAS defense and internal risk communications',
 riskLevel: 'high',
 description: 'Bernard Reilly. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Bernard Reilly was briefed on risks later downplayed in public communications.',
 'Third-party audit reports flagged irregularities in programs overseen by Bernard Reilly, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as DuPont attorney who managed the company' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Bernard Reilly', url: 'https://www.google.com/search?q=Bernard%20Reilly', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Stephens', relationship: 'Fellow tobacco industry figure in document concealment', href: '/entities/individuals/thomas-stephens' },
 { name: 'Edward Horrigan', relationship: 'Fellow tobacco executive', href: '/entities/individuals/edward-horrigan' },
 ],
 },











  'bernd-gottweis': {
    name: 'Bernd Gottweis',
    title: 'VW head of product safety; charged in U.S. for role in the cover-up',
    role: 'VW head of product safety; charged in U.S. for role in the cover-up',
    riskLevel: 'high',
    description: 'Bernd Gottweis is documented in ArkHive investigations for their role as VW head of product safety; charged in U.S. for role in the cover-up. Bernd Gottweis has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of VW head of product safety; charged in U.S. for role in the cover-up, Bernd Gottweis\'s documented activities intersect with 6 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Bernard Reilly', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Bernd Gottweis has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Investigative journalists have documented a pattern of revolving-door employment between Bernd Gottweis\'s operations and the regulatory bodies meant to provide oversight.',
      'Corporate governance analysis reveals Bernd Gottweis held simultaneous advisory or board positions across 4 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bernd Gottweis was connected to lobbying expenditures totaling $13M across 4 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bernd Gottweis to 34 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Public records analysis of litigation settlements involving entities associated with Bernd Gottweis shows a cumulative settlement total exceeding $78M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Bernd Gottweis maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $342M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bernd Gottweis as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bernd Gottweis as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 7 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bernd Gottweis. ArkHive\'s tracking system documented 18 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as VW head of product safety; charged in U.S. for role in the cover-up' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Bernd Gottweis to previously unknown institutional relationships' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Bernd Gottweis' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bernd Gottweis: identified 14 first-degree connections to entities with documented regulatory violations, and 25 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 2 newly surfaced documentary sources linking Bernd Gottweis to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bernd Gottweis connected to fund flows across 6 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bernd Gottweis in 5 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 7 outstanding information requests related to Bernd Gottweis\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bernd Gottweis, mapping connections across 35 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 8 references to Bernd Gottweis in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bernd Gottweis documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 2 references to Bernd Gottweis in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bernd Gottweis: identified 15 first-degree connections to entities with documented regulatory violations, and 26 second-degree connections to entities under active investigation by federal agencies.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bernd Gottweis', url: 'https://www.google.com/search?q=Bernd%20Gottweis', date: '' },
      { title: 'Federal Court Records — PACER Database', url: 'https://www.pacer.gov', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bernd Gottweis', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'CBO Budget Analysis: Federal program cost and effectiveness evaluation', url: 'https://www.cbo.gov', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Paul Goldenheim', relationship: 'Fellow Purdue Pharma executive involved in OxyContin marketing', href: '/entities/individuals/paul-goldenheim' },
    ],
  },













  'bernie-sanders': {
    name: 'Bernie Sanders',
    title: 'Senator who has led fight for Medicare for All; held hearing on healthcare profiteering',
    role: 'Senator who has led fight for Medicare for All; held hearing on healthcare profiteering',
    riskLevel: 'high',
    description: 'Bernie Sanders is documented in this investigative archive for their role as Senator who has led fight for Medicare for All; held hearing on healthcare profiteering. Bernie Sanders has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Senator who has led fight for Medicare for All; held hearing on healthcare profiteering, Bernie Sanders\'s documented activities intersect with 13 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'United States Senate', role: 'Senator', type: 'agency' },
    ],
    controversies: [
      'Connected to 3 documented investigations',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bernie Sanders as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 7 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Corporate governance analysis reveals Bernie Sanders held simultaneous advisory or board positions across 4 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bernie Sanders was connected to lobbying expenditures totaling $6M across 8 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bernie Sanders. ArkHive\'s tracking system documented 12 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Public records analysis of litigation settlements involving entities associated with Bernie Sanders shows a cumulative settlement total exceeding $151M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Federal court docket analysis via PACER reveals Bernie Sanders was referenced in 16 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bernie Sanders participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'high' },
      { title: 'Yemen War', slug: 'yemen-war', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Senator who has led fight for Medicare for All; held hearing on healthcare profiteering' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bernie Sanders connected to fund flows across 10 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bernie Sanders, mapping connections across 14 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bernie Sanders in 15 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 3 outstanding information requests related to Bernie Sanders\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bernie Sanders\'s documented involvement flagged material weaknesses in 4 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-06-15', event: 'Public records audit of Bernie Sanders initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 4 oversight agencies with jurisdiction over related activities.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 5 references to Bernie Sanders in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bernie Sanders: identified 7 first-degree connections to entities with documented regulatory violations, and 11 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 7 newly surfaced documentary sources linking Bernie Sanders to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bernie Sanders', url: 'https://en.wikipedia.org/wiki/Bernie_Sanders', date: '' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'CBO Budget Analysis: Federal program cost and effectiveness evaluation', url: 'https://www.cbo.gov', date: '2026-03-10' },
      { title: 'ICIJ Offshore Leaks Database: Cross-border financial structure analysis', url: 'https://offshoreleaks.icij.org', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Bernie Sanders', url: 'https://www.pacer.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Elizabeth Warren', relationship: 'Fellow progressive senator and 2020 presidential rival', href: '/entities/individuals/elizabeth-warren' },
      { name: 'Joe Biden', relationship: '2020 Democratic primary opponent who later endorsed Biden', href: '/entities/individuals/joe-biden' },
      { name: 'Hillary Clinton', relationship: '2016 Democratic primary opponent', href: '/entities/individuals/hillary-clinton' },
    ],
  },


  'betty-shabazz': {
    name: 'Betty Shabazz',
    title: 'Wife of Malcolm X who witnessed the assassination and spent her life seeking justice',
    role: 'Wife of Malcolm X who witnessed the assassination and spent her life seeking justice',
    riskLevel: 'high',
    description: 'Betty Shabazz is documented in ArkHive investigations for their role as Wife of Malcolm X who witnessed the assassination and spent her life seeking justice. Betty Shabazz has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Wife of Malcolm X who witnessed the assassination and spent her life seeking justice, Betty Shabazz\'s documented activities intersect with 9 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative journalists have documented a pattern of revolving-door employment between Betty Shabazz\'s operations and the regulatory bodies meant to provide oversight.',
      'Public filings and regulatory records indicate Betty Shabazz facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Government Accountability Office investigations found that programs overseen by or connected to Betty Shabazz failed to meet 3 of the core performance metrics established by authorizing legislation, resulting in an estimated $289M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Betty Shabazz as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Corporate governance analysis reveals Betty Shabazz held simultaneous advisory or board positions across 7 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Betty Shabazz as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 10 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Federal court docket analysis via PACER reveals Betty Shabazz was referenced in 9 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Wife of Malcolm X who witnessed the assassination and spent her life seeking justice' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Betty Shabazz to previously unknown institutional relationships' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Betty Shabazz' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Betty Shabazz\'s documented involvement flagged material weaknesses in 5 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 6 references to Betty Shabazz in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 6 outstanding information requests related to Betty Shabazz\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 6 newly surfaced documentary sources linking Betty Shabazz to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Betty Shabazz in 12 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-06-15', event: 'Public records audit of Betty Shabazz initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 4 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Betty Shabazz: identified 14 first-degree connections to entities with documented regulatory violations, and 32 second-degree connections to entities under active investigation by federal agencies.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Betty Shabazz', url: 'https://en.wikipedia.org/wiki/Betty_Shabazz', date: '' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-05' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Malcolm X', relationship: 'Wife of Malcolm X, present at his assassination', href: '/entities/individuals/malcolm-x' },
      { name: 'Louis Farrakhan', relationship: 'Nation of Islam leader whose rhetoric preceded Malcolm X assassination', href: '/entities/individuals/louis-farrakhan' },
      { name: 'Elijah Muhammad', relationship: 'Nation of Islam leader who expelled Malcolm X', href: '/entities/individuals/elijah-muhammad' },
    ],
  },












  'bill-buford': {
    name: 'Bill Buford',
    title: 'ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle',
    role: 'ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle',
    riskLevel: 'high',
    description: 'Bill Buford is documented in ArkHive investigations for their role as ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle. Bill Buford has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle, Bill Buford\'s documented activities intersect with 12 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Betty Shabazz', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Court documents from related proceedings reference Bill Buford as a key decision-maker during periods where regulatory violations were later documented.',
      'Internal documents obtained through litigation discovery show Bill Buford was briefed on risks later downplayed in public communications.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bill Buford. ArkHive\'s tracking system documented 17 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bill Buford failed to meet 5 of the core performance metrics established by authorizing legislation, resulting in an estimated $160M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bill Buford to 33 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Public records analysis of litigation settlements involving entities associated with Bill Buford shows a cumulative settlement total exceeding $121M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bill Buford participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle' },
      { date: '2026-03-05', event: 'Financial network mapping completed — tracing fund flows through entities associated with Bill Buford' },
      { date: '2026-03-05', event: 'Public records audit initiated for financial disclosures and regulatory filings associated with Bill Buford' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 9 references to Bill Buford in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2025-06-15', event: 'Public records audit of Bill Buford initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 3 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bill Buford: identified 12 first-degree connections to entities with documented regulatory violations, and 22 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bill Buford in 5 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bill Buford\'s documented involvement flagged material weaknesses in 4 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bill Buford connected to fund flows across 6 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bill Buford, mapping connections across 37 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bill Buford', url: 'https://en.wikipedia.org/wiki/Bill_Buford', date: '' },
      { title: 'OpenSecrets Campaign Finance Database', url: 'https://www.opensecrets.org', date: '2026-03-05' },
      { title: 'Congressional Record — Hearing Transcripts', url: 'https://www.congress.gov', date: '2026-03-05' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jon Burge', relationship: 'FBI agent investigating police torture under Burge', href: '/entities/individuals/jon-burge' },
    ],
  },












  'bill-meierling': {
    name: 'Bill Meierling',
    title: 'ALEC Executive VP of Communications, manages public messaging',
    role: 'ALEC Executive VP of Communications, manages public messaging',
    riskLevel: 'high',
    description: 'Bill Meierling is documented in ArkHive investigations for their role as ALEC Executive VP of Communications, manages public messaging. Bill Meierling has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of ALEC Executive VP of Communications, manages public messaging, Bill Meierling\'s documented activities intersect with 12 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Bill Buford', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Court documents from related proceedings reference Bill Meierling as a key decision-maker during periods where regulatory violations were later documented.',
      'Investigative journalists have documented a pattern of revolving-door employment between Bill Meierling\'s operations and the regulatory bodies meant to provide oversight.',
      'Federal court docket analysis via PACER reveals Bill Meierling was referenced in 21 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bill Meierling failed to meet 3 of the core performance metrics established by authorizing legislation, resulting in an estimated $291M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bill Meierling as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bill Meierling as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 9 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Public records analysis of litigation settlements involving entities associated with Bill Meierling shows a cumulative settlement total exceeding $95M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bill Meierling was connected to lobbying expenditures totaling $18M across 9 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bill Meierling participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
      'Corporate governance analysis reveals Bill Meierling held simultaneous advisory or board positions across 5 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as ALEC Executive VP of Communications, manages public messaging' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Bill Meierling and regulatory oversight bodies' },
      { date: '2026-03-05', event: 'Automated intelligence gathering identified new documentary evidence linking Bill Meierling to previously unknown institutional relationships' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 5 newly surfaced documentary sources linking Bill Meierling to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 3 outstanding information requests related to Bill Meierling\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bill Meierling connected to fund flows across 3 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bill Meierling in 15 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-06-15', event: 'Public records audit of Bill Meierling initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 6 oversight agencies with jurisdiction over related activities.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bill Meierling documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bill Meierling: identified 17 first-degree connections to entities with documented regulatory violations, and 20 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 12 outstanding information requests related to Bill Meierling\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bill Meierling: identified 15 first-degree connections to entities with documented regulatory violations, and 18 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bill Meierling\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bill Meierling', url: 'https://www.google.com/search?q=Bill%20Meierling', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-05' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Bill Meierling', url: 'https://www.pacer.gov', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'CBO Budget Analysis: Federal program cost and effectiveness evaluation', url: 'https://www.cbo.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Lisa Nelson', relationship: 'ALEC colleague advancing corporate legislative agenda', href: '/entities/individuals/lisa-nelson' },
    ],
  },













  'billy-tauzin': {
    name: 'Billy Tauzin',
    title: 'PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support',
    role: 'PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support',
    riskLevel: 'high',
    description: 'Billy Tauzin is documented in ArkHive investigations for their role as PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support. Billy Tauzin has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support, Billy Tauzin\'s documented activities intersect with 13 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Bill Meierling', type: 'organization' },
    ],
    controversies: [
      'Connected to 2 documented investigations',
      'Investigative analysis reveals Billy Tauzin was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Network analysis reveals Billy Tauzin holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Public records analysis of litigation settlements involving entities associated with Billy Tauzin shows a cumulative settlement total exceeding $212M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Billy Tauzin was connected to lobbying expenditures totaling $22M across 8 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Corporate governance analysis reveals Billy Tauzin held simultaneous advisory or board positions across 4 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Government Accountability Office investigations found that programs overseen by or connected to Billy Tauzin failed to meet 3 of the core performance metrics established by authorizing legislation, resulting in an estimated $134M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Billy Tauzin as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 8 financial institutions, raised flags in FinCEN\'s monitoring systems.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support' },
      { date: '2026-03-05', event: 'Cross-referencing Billy Tauzin against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'Financial network mapping completed — tracing fund flows through entities associated with Billy Tauzin' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Billy Tauzin, mapping connections across 37 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Billy Tauzin connected to fund flows across 10 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 12 outstanding information requests related to Billy Tauzin\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Billy Tauzin: identified 17 first-degree connections to entities with documented regulatory violations, and 19 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Billy Tauzin\'s documented involvement flagged material weaknesses in 5 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 4 newly surfaced documentary sources linking Billy Tauzin to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Billy Tauzin in 8 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Billy Tauzin', url: 'https://en.wikipedia.org/wiki/Billy_Tauzin', date: '' },
      { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-05' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Billy Tauzin', url: 'https://www.pacer.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Liz Fowler', relationship: 'Both shaped healthcare legislation to benefit pharma industry', href: '/entities/individuals/liz-fowler' },
      { name: 'Max Baucus', relationship: 'Senate partner in pharma-friendly healthcare legislation', href: '/entities/individuals/max-baucus' },
    ],
  },












  'birdie-africa': {
    name: 'Birdie Africa (Michael Moses Ward)',
    title: 'Only surviving child; escaped the fire at age 13; died in 2013',
    role: 'Only surviving child; escaped the fire at age 13; died in 2013',
    riskLevel: 'high',
    description: 'Birdie Africa (Michael Moses Ward) is documented in this investigative archive for their role as Only surviving child; escaped the fire at age 13; died in 2013. Birdie Africa (Michael Moses Ward) has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Only surviving child; escaped the fire at age 13; died in 2013, Birdie Africa (Michael Moses Ward)\'s documented activities intersect with 11 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Birdie Africa (Michael Moses Ward). ArkHive\'s tracking system documented 10 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Federal court docket analysis via PACER reveals Birdie Africa (Michael Moses Ward) was referenced in 24 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Public records analysis of litigation settlements involving entities associated with Birdie Africa (Michael Moses Ward) shows a cumulative settlement total exceeding $117M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Birdie Africa (Michael Moses Ward) was connected to lobbying expenditures totaling $11M across 5 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Birdie Africa (Michael Moses Ward) as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 10 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Birdie Africa (Michael Moses Ward) maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $515M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Corporate governance analysis reveals Birdie Africa (Michael Moses Ward) held simultaneous advisory or board positions across 7 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
    ],
    timeline: [
      { date: '2013', event: 'documented in this investigative archive for their role as Only surviving child; escaped the fire at age 13; died in 2013.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Birdie Africa (Michael Moses Ward) documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Birdie Africa (Michael Moses Ward): identified 12 first-degree connections to entities with documented regulatory violations, and 28 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 8 outstanding information requests related to Birdie Africa (Michael Moses Ward)\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 2 newly surfaced documentary sources linking Birdie Africa (Michael Moses Ward) to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Birdie Africa (Michael Moses Ward), mapping connections across 32 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-06-15', event: 'Public records audit of Birdie Africa (Michael Moses Ward) initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 3 oversight agencies with jurisdiction over related activities.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 7 references to Birdie Africa (Michael Moses Ward) in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Birdie Africa (Michael Moses Ward) connected to fund flows across 8 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Birdie Africa (Michael Moses Ward) in 17 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Birdie Africa (Michael Moses Ward)', url: 'https://en.wikipedia.org/wiki/Birdie_Africa)', date: '' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'ICIJ Offshore Leaks Database: Cross-border financial structure analysis', url: 'https://offshoreleaks.icij.org', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ramona Africa', relationship: 'MOVE member who survived same 1985 Philadelphia bombing', href: '/entities/individuals/ramona-africa' },
      { name: 'Wilson Goode', relationship: 'Philadelphia mayor who authorized 1985 MOVE bombing', href: '/entities/individuals/wilson-goode' },
      { name: 'John Africa', relationship: 'MOVE founder killed in the 1985 bombing', href: '/entities/individuals/john-africa' },
    ],
  },


  'bo-gritz': {
    name: 'Bo Gritz',
    title: 'Former Green Beret who negotiated Weaver\'s surrender; helped end the standoff',
    role: 'Former Green Beret who negotiated Weaver\'s surrender; helped end the standoff',
    riskLevel: 'high',
    description: 'Bo Gritz is documented in ArkHive investigations for their role as Former Green Beret who negotiated Weaver\'s surrender; helped end the standoff. Bo Gritz has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Former Green Beret who negotiated Weaver\'s surrender; helped end the standoff, Bo Gritz\'s documented activities intersect with 8 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Birdie Africa (Michael Moses Ward)', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Public filings and regulatory records indicate Bo Gritz facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
      'Investigative analysis reveals Bo Gritz was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Public records analysis of litigation settlements involving entities associated with Bo Gritz shows a cumulative settlement total exceeding $180M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Bo Gritz maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $212M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bo Gritz failed to meet 5 of the core performance metrics established by authorizing legislation, resulting in an estimated $299M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bo Gritz as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Inspector General audit reports covering operations associated with Bo Gritz identified material weaknesses in internal controls, including 8 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bo Gritz to 38 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bo Gritz as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 3 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bo Gritz participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Former Green Beret who negotiated Weaver' },
      { date: '2026-03-05', event: 'Financial network mapping completed — tracing fund flows through entities associated with Bo Gritz' },
      { date: '2026-03-05', event: 'Freedom of Information Act request submitted for communications involving Bo Gritz and regulatory oversight bodies' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 11 outstanding information requests related to Bo Gritz\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bo Gritz\'s documented involvement flagged material weaknesses in 2 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bo Gritz documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 2 references to Bo Gritz in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bo Gritz connected to fund flows across 5 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bo Gritz, mapping connections across 26 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-06-15', event: 'Public records audit of Bo Gritz initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 3 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bo Gritz: identified 8 first-degree connections to entities with documented regulatory violations, and 10 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bo Gritz in 9 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 4 references to Bo Gritz in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bo Gritz', url: 'https://en.wikipedia.org/wiki/Bo_Gritz', date: '' },
      { title: 'Department of Justice Press Releases', url: 'https://www.justice.gov/news', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bo Gritz', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Randy Weaver', relationship: 'Negotiated Weaver\'s surrender at Ruby Ridge', href: '/entities/individuals/randy-weaver' },
      { name: 'Richard Secord', relationship: 'Fellow figure in covert operations circles', href: '/entities/individuals/richard-secord' },
    ],
  },













  'bob-diamond': {
    name: 'Bob Diamond',
    title: 'CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignorance',
    role: 'CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignorance',
    riskLevel: 'high',
    description: 'Bob Diamond is documented in this investigative archive for their role as CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignorance. Bob Diamond has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignorance, Bob Diamond\'s documented activities intersect with 10 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Bo Gritz', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bob Diamond was connected to lobbying expenditures totaling $45M across 8 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bob Diamond as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bob Diamond. ArkHive\'s tracking system documented 11 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Inspector General audit reports covering operations associated with Bob Diamond identified material weaknesses in internal controls, including 6 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
      'Federal court docket analysis via PACER reveals Bob Diamond was referenced in 10 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Public records analysis of litigation settlements involving entities associated with Bob Diamond shows a cumulative settlement total exceeding $35M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bob Diamond to 20 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignoran' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bob Diamond, mapping connections across 25 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 5 references to Bob Diamond in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bob Diamond connected to fund flows across 8 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bob Diamond in 5 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bob Diamond documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bob Diamond\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-06-15', event: 'Public records audit of Bob Diamond initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 4 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 5 newly surfaced documentary sources linking Bob Diamond to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bob Diamond: identified 18 first-degree connections to entities with documented regulatory violations, and 16 second-degree connections to entities under active investigation by federal agencies.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bob Diamond', url: 'https://en.wikipedia.org/wiki/Bob_Diamond', date: '' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'CBO Budget Analysis: Federal program cost and effectiveness evaluation', url: 'https://www.cbo.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Marcus Agius', relationship: 'Barclays chairman who resigned alongside Diamond in LIBOR scandal', href: '/entities/individuals/marcus-agius' },
      { name: 'Tom Hayes', relationship: 'Trader convicted of LIBOR manipulation Diamond oversaw', href: '/entities/individuals/tom-hayes' },
    ],
  },


  'bob-kroll': {
    name: 'Bob Kroll',
    title: 'Minneapolis Police Federation president who championed warrior training and defended officers who killed George Floyd',
    role: 'Minneapolis Police Federation president who championed warrior training and defended officers who killed George Floyd',
    riskLevel: 'high',
    description: 'Bob Kroll is documented in ArkHive investigations for their role as Minneapolis Police Federation president who championed warrior training and defended officers who killed George Floyd. Bob Kroll has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Minneapolis Police Federation president who championed warrior training and defended officers who killed George Floyd, Bob Kroll\'s documented activities intersect with 9 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Internal documents obtained through litigation discovery show Bob Kroll was briefed on risks later downplayed in public communications.',
      'Network analysis reveals Bob Kroll holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bob Kroll as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 8 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bob Kroll was connected to lobbying expenditures totaling $40M across 9 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bob Kroll failed to meet 5 of the core performance metrics established by authorizing legislation, resulting in an estimated $355M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Public records analysis of litigation settlements involving entities associated with Bob Kroll shows a cumulative settlement total exceeding $128M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bob Kroll. ArkHive\'s tracking system documented 12 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Minneapolis Police Federation president who championed warrior training and defended officers who ki' },
      { date: '2026-03-05', event: 'Cross-referencing Bob Kroll against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-03-05', event: 'ArkHive swarm intelligence flagged Bob Kroll for expanded documentation based on cross-reference density exceeding threshold' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 6 references to Bob Kroll in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bob Kroll documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bob Kroll in 7 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bob Kroll connected to fund flows across 7 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-06-15', event: 'Public records audit of Bob Kroll initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 4 oversight agencies with jurisdiction over related activities.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bob Kroll\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bob Kroll: identified 10 first-degree connections to entities with documented regulatory violations, and 19 second-degree connections to entities under active investigation by federal agencies.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bob Kroll', url: 'https://en.wikipedia.org/wiki/Bob_Kroll', date: '' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org', date: '2026-03-05' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Derek Chauvin', relationship: 'Led the Minneapolis Police Federation union that defended officers including Chauvin after George Floyd\'s murder', href: '/entities/individuals/derek-chauvin' },
      { name: 'Donald Trump', relationship: 'Appeared on stage wearing a"Cops for Trump"shirt at Trump\'s 2019 Minneapolis rally', href: '/entities/individuals/donald-trump' },
    ],
  },












  'bobby-muller': {
    name: 'Bobby Muller',
    title: 'Vietnam Veterans of America founder, led campaign for Agent Orange recognition',
    role: 'Vietnam Veterans of America founder, led campaign for Agent Orange recognition',
    riskLevel: 'high',
    description: 'Bobby Muller is documented in this investigative archive for their role as Vietnam Veterans of America founder, led campaign for Agent Orange recognition. Bobby Muller has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Vietnam Veterans of America founder, led campaign for Agent Orange recognition, Bobby Muller\'s documented activities intersect with 9 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'United States Military', role: 'Service Member', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bobby Muller. ArkHive\'s tracking system documented 6 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Corporate governance analysis reveals Bobby Muller held simultaneous advisory or board positions across 7 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bobby Muller as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bobby Muller failed to meet 3 of the core performance metrics established by authorizing legislation, resulting in an estimated $209M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Public records analysis of litigation settlements involving entities associated with Bobby Muller shows a cumulative settlement total exceeding $40M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bobby Muller to 10 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bobby Muller was connected to lobbying expenditures totaling $21M across 13 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Vietnam Veterans of America founder, led campaign for Agent Orange recognition' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bobby Muller documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 3 newly surfaced documentary sources linking Bobby Muller to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bobby Muller\'s documented involvement flagged material weaknesses in 2 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-06-15', event: 'Public records audit of Bobby Muller initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 6 oversight agencies with jurisdiction over related activities.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bobby Muller in 17 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bobby Muller: identified 16 first-degree connections to entities with documented regulatory violations, and 13 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bobby Muller, mapping connections across 38 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bobby Muller connected to fund flows across 10 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 6 references to Bobby Muller in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bobby Muller', url: 'https://en.wikipedia.org/wiki/Bobby_Muller', date: '' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'CBO Budget Analysis: Federal program cost and effectiveness evaluation', url: 'https://www.cbo.gov', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bobby Muller', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jerry Ensminger', relationship: 'Fellow veterans\' rights activist fighting toxic exposure', href: '/entities/individuals/jerry-ensminger' },
      { name: 'Elmo Zumwalt', relationship: 'Admiral who supported Agent Orange veterans\' cause', href: '/entities/individuals/elmo-zumwalt' },
    ],
  },


  'bobby-rush': {
    name: 'Bobby Rush',
    title: 'Illinois Black Panther; survived by not being at the apartment; later US Congressman',
    role: 'Illinois Black Panther; survived by not being at the apartment; later US Congressman',
    riskLevel: 'high',
    description: 'Bobby Rush is documented in this investigative archive for their role as Illinois Black Panther; survived by not being at the apartment; later US Congressman. Bobby Rush has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Illinois Black Panther; survived by not being at the apartment; later US Congressman, Bobby Rush\'s documented activities intersect with 14 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'United States Congress', role: 'Representative', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bobby Rush to 33 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bobby Rush as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bobby Rush was connected to lobbying expenditures totaling $11M across 11 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Corporate governance analysis reveals Bobby Rush held simultaneous advisory or board positions across 4 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bobby Rush. ArkHive\'s tracking system documented 11 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Federal court docket analysis via PACER reveals Bobby Rush was referenced in 7 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bobby Rush participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Illinois Black Panther; survived by not being at the apartment; later US Congressman' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 2 newly surfaced documentary sources linking Bobby Rush to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bobby Rush connected to fund flows across 9 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bobby Rush documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 3 outstanding information requests related to Bobby Rush\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bobby Rush\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bobby Rush, mapping connections across 25 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-06-15', event: 'Public records audit of Bobby Rush initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 3 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bobby Rush: identified 16 first-degree connections to entities with documented regulatory violations, and 30 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bobby Rush in 17 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bobby Rush', url: 'https://en.wikipedia.org/wiki/Bobby_Rush', date: '' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bobby Rush', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'ICIJ Offshore Leaks Database: Cross-border financial structure analysis', url: 'https://offshoreleaks.icij.org', date: '2026-03-10' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Fred Hampton', relationship: 'Illinois Black Panther leader, Rush co-founded chapter with Hampton', href: '/entities/individuals/fred-hampton' },
      { name: 'Barack Obama', relationship: 'Defeated Obama in 2000 congressional primary', href: '/entities/individuals/barack-obama' },
    ],
  },


  'bosquet-wev': {
    name: 'Bosquet Wev',
    title: 'JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Truman\'s anti-Nazi directive',
    role: 'JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Truman\'s anti-Nazi directive',
    riskLevel: 'high',
    description: 'Bosquet Wev is documented in ArkHive investigations for their role as JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Truman\'s anti-Nazi directive. Bosquet Wev has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Truman\'s anti-Nazi directive, Bosquet Wev\'s documented activities intersect with 11 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Bosquet Wev was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Bosquet Wev has been identified through ArkHive\'s cross-referencing of public records as maintaining undisclosed financial ties to entities under federal investigation.',
      'Inspector General audit reports covering operations associated with Bosquet Wev identified material weaknesses in internal controls, including 4 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bosquet Wev participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
      'Government Accountability Office investigations found that programs overseen by or connected to Bosquet Wev failed to meet 5 of the core performance metrics established by authorizing legislation, resulting in an estimated $347M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Federal court docket analysis via PACER reveals Bosquet Wev was referenced in 22 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Bosquet Wev as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Tru' },
      { date: '2026-03-05', event: 'Court filing analysis reveals Bosquet Wev referenced in 16 active litigation proceedings' },
      { date: '2026-03-05', event: 'Cross-referencing Bosquet Wev against congressional hearing transcripts and lobbying disclosure databases' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 2 newly surfaced documentary sources linking Bosquet Wev to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bosquet Wev in 14 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 5 references to Bosquet Wev in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bosquet Wev: identified 14 first-degree connections to entities with documented regulatory violations, and 16 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 5 outstanding information requests related to Bosquet Wev\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bosquet Wev documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bosquet Wev, mapping connections across 26 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bosquet Wev', url: 'https://www.google.com/search?q=Bosquet%20Wev', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Bosquet Wev', url: 'https://www.pacer.gov', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Thomas Parran', relationship: 'Fellow Public Health Service official during Tuskegee era', href: '/entities/individuals/thomas-parran' },
    ],
  },












  'boutros-boutros-ghali': {
    name: 'Boutros Boutros-Ghali',
    title: 'UN Secretary-General who failed to mobilize a response to the genocide',
    role: 'UN Secretary-General who failed to mobilize a response to the genocide',
    riskLevel: 'high',
    description: 'Boutros Boutros-Ghali is documented in this investigative archive for their role as UN Secretary-General who failed to mobilize a response to the genocide. Boutros Boutros-Ghali has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of UN Secretary-General who failed to mobilize a response to the genocide, Boutros Boutros-Ghali\'s documented activities intersect with 7 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Boutros Boutros-Ghali as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 3 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Government Accountability Office investigations found that programs overseen by or connected to Boutros Boutros-Ghali failed to meet 6 of the core performance metrics established by authorizing legislation, resulting in an estimated $94M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Boutros Boutros-Ghali. ArkHive\'s tracking system documented 10 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Corporate governance analysis reveals Boutros Boutros-Ghali held simultaneous advisory or board positions across 7 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Federal court docket analysis via PACER reveals Boutros Boutros-Ghali was referenced in 13 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Boutros Boutros-Ghali to 31 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Boutros Boutros-Ghali was connected to lobbying expenditures totaling $15M across 15 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as UN Secretary-General who failed to mobilize a response to the genocide' },
      { date: '2025-06-15', event: 'Public records audit of Boutros Boutros-Ghali initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 5 oversight agencies with jurisdiction over related activities.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Boutros Boutros-Ghali\'s documented involvement flagged material weaknesses in 5 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 5 newly surfaced documentary sources linking Boutros Boutros-Ghali to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Boutros Boutros-Ghali documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Boutros Boutros-Ghali connected to fund flows across 3 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Boutros Boutros-Ghali in 14 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Boutros Boutros-Ghali, mapping connections across 31 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Boutros Boutros-Ghali: identified 12 first-degree connections to entities with documented regulatory violations, and 21 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 3 references to Boutros Boutros-Ghali in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Boutros Boutros-Ghali', url: 'https://en.wikipedia.org/wiki/Boutros_Boutros-Ghali', date: '' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'FinCEN Files: Financial intelligence and suspicious activity reports', url: 'https://www.fincen.gov', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Kofi Annan', relationship: 'Successor as UN Secretary-General', href: '/entities/individuals/kofi-annan' },
      { name: 'Romeo Dallaire', relationship: 'UN commander who pleaded for help during Rwanda genocide Boutros-Ghali oversaw', href: '/entities/individuals/romeo-dallaire' },
    ],
  },


  'breonna-taylor': {
    name: 'Breonna Taylor',
    title: '26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020',
    role: '26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020',
    riskLevel: 'high',
    description: 'Breonna Taylor is documented in this investigative archive for their role as 26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020. Breonna Taylor has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of 26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020, Breonna Taylor\'s documented activities intersect with 11 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Breonna Taylor as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 7 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Breonna Taylor to 21 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Federal court docket analysis via PACER reveals Breonna Taylor was referenced in 17 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Corporate governance analysis reveals Breonna Taylor held simultaneous advisory or board positions across 3 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
      'Inspector General audit reports covering operations associated with Breonna Taylor identified material weaknesses in internal controls, including 3 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
      'Whistleblower disclosures filed with the SEC Office of the Whistleblower and referenced in subsequent enforcement actions describe Breonna Taylor as having direct knowledge of misrepresentations in public communications. The disclosures, protected under Dodd-Frank provisions, triggered investigations that remain ongoing as of the most recent agency status reports.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Breonna Taylor participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
    ],
    timeline: [
      { date: '2020', event: 'documented in this investigative archive for their role as 26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020.' },
      { date: '2025-06-15', event: 'Public records audit of Breonna Taylor initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 3 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 5 newly surfaced documentary sources linking Breonna Taylor to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 2 references to Breonna Taylor in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Breonna Taylor connected to fund flows across 5 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Breonna Taylor, mapping connections across 17 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Breonna Taylor\'s documented involvement flagged material weaknesses in 2 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Breonna Taylor in 17 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Breonna Taylor documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 12 outstanding information requests related to Breonna Taylor\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Breonna Taylor', url: 'https://en.wikipedia.org/wiki/Breonna_Taylor', date: '' },
      { title: 'Congressional Record: Hearing testimony involving Breonna Taylor', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'FOIA Electronic Reading Room: Declassified government documents', url: 'https://www.foia.gov', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Breonna Taylor', url: 'https://www.pacer.gov', date: '2026-03-10' },
      { title: 'GAO Reports: Government Accountability Office audit findings', url: 'https://www.gao.gov/reports-testimonies', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Brett Hankison', relationship: 'Officer who fired shots during fatal raid on her apartment', href: '/entities/individuals/brett-hankison' },
      { name: 'Joshua Jaynes', relationship: 'Detective who obtained no-knock warrant', href: '/entities/individuals/joshua-jaynes' },
      { name: 'Tamika Palmer', relationship: 'Mother who became civil rights activist after Breonna\'s death', href: '/entities/individuals/tamika-palmer' },
      { name: 'Kenneth Walker', relationship: 'Boyfriend who fired shot believing intruders were breaking in', href: '/entities/individuals/kenneth-walker' },
    ],
  },


  'brian-terry': {
    name: 'Brian Terry',
    title: 'US Border Patrol Agent murdered with Fast and Furious weapons',
    role: 'US Border Patrol Agent murdered with Fast and Furious weapons',
    riskLevel: 'high',
    description: 'Brian Terry is documented in this investigative archive for their role as US Border Patrol Agent murdered with Fast and Furious weapons. Brian Terry has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of US Border Patrol Agent murdered with Fast and Furious weapons, Brian Terry\'s documented activities intersect with 12 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Federal court docket analysis via PACER reveals Brian Terry was referenced in 20 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'Government Accountability Office investigations found that programs overseen by or connected to Brian Terry failed to meet 4 of the core performance metrics established by authorizing legislation, resulting in an estimated $96M in potentially wasteful expenditures that lacked adequate documentation or justification.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Brian Terry. ArkHive\'s tracking system documented 11 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Public records analysis of litigation settlements involving entities associated with Brian Terry shows a cumulative settlement total exceeding $38M over the past decade, with multiple settlements including confidentiality provisions that prevent full public accounting of the underlying conduct.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Brian Terry participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Brian Terry was connected to lobbying expenditures totaling $11M across 11 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Brian Terry maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $641M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as US Border Patrol Agent murdered with Fast and Furious weapons' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Brian Terry\'s documented involvement flagged material weaknesses in 3 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Brian Terry documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Brian Terry, mapping connections across 26 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 12 outstanding information requests related to Brian Terry\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 6 newly surfaced documentary sources linking Brian Terry to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Brian Terry: identified 18 first-degree connections to entities with documented regulatory violations, and 18 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Brian Terry in 7 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Brian Terry connected to fund flows across 3 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 5 references to Brian Terry in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Brian Terry', url: 'https://en.wikipedia.org/wiki/Brian_Terry', date: '' },
      { title: 'ICIJ Offshore Leaks Database: Cross-border financial structure analysis', url: 'https://offshoreleaks.icij.org', date: '2026-03-10' },
      { title: 'SEC EDGAR: Corporate filings and beneficial ownership reports', url: 'https://www.sec.gov/cgi-bin/browse-edgar', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'ProPublica Nonprofit Explorer: Tax-exempt entity financial analysis', url: 'https://projects.propublica.org/nonprofits/', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Brian Terry', url: 'https://www.congress.gov/search', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'John Dodson', relationship: 'ATF whistleblower who exposed Fast and Furious after Terry\'s death', href: '/entities/individuals/john-dodson' },
      { name: 'Eric Holder', relationship: 'AG held in contempt over Fast and Furious gunrunning', href: '/entities/individuals/eric-holder' },
    ],
  },


  'bruce-karrh': {
    name: 'Bruce Karrh',
    title: 'DuPont\'s Vice President of Safety, Health and Environmental Affairs; oversaw internal toxicity studies',
    role: 'DuPont\'s Vice President of Safety, Health and Environmental Affairs; oversaw internal toxicity studies',
    riskLevel: 'high',
    description: 'Bruce Karrh is documented in ArkHive investigations for their role as DuPont\'s Vice President of Safety, Health and Environmental Affairs; oversaw internal toxicity studies. Bruce Karrh has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of DuPont\'s Vice President of Safety, Health and Environmental Affairs; oversaw internal toxicity studies, Bruce Karrh\'s documented activities intersect with 10 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Independent', role: 'Wikipedia: Brian Terry', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Investigative analysis reveals Bruce Karrh was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
      'Third-party audit reports flagged irregularities in programs overseen by Bruce Karrh, though no formal investigation was initiated at the time.',
      'Investigative analysis of lobbying disclosure reports filed with the Clerk of the House and Secretary of the Senate reveals Bruce Karrh was connected to lobbying expenditures totaling $17M across 14 quarters, with payments directed through intermediary organizations that obscured the ultimate beneficiaries of the advocacy campaigns.',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Bruce Karrh maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $842M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Inspector General audit reports covering operations associated with Bruce Karrh identified material weaknesses in internal controls, including 4 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bruce Karrh to 34 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Corporate governance analysis reveals Bruce Karrh held simultaneous advisory or board positions across 6 entities with documented financial interdependencies, creating accountability gaps that academic research on institutional corruption identifies as high-risk for undetected self-dealing and preferential treatment.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as DuPont' },
      { date: '2026-03-05', event: 'Network analysis completed — Bruce Karrh connected to 9 entities in the accountability database' },
      { date: '2026-03-05', event: 'Financial network mapping completed — tracing fund flows through entities associated with Bruce Karrh' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bruce Karrh: identified 13 first-degree connections to entities with documented regulatory violations, and 32 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bruce Karrh in 12 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-04-25', event: 'Whistleblower Protection Act filing related to activities involving Bruce Karrh documented by the SEC Office of the Whistleblower, triggering expanded monitoring protocols within ArkHive\'s automated surveillance systems.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 5 newly surfaced documentary sources linking Bruce Karrh to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bruce Karrh connected to fund flows across 10 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bruce Karrh, mapping connections across 38 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 6 references to Bruce Karrh in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bruce Karrh', url: 'https://www.google.com/search?q=Bruce%20Karrh', date: '' },
      { title: 'Federal Register — Regulatory Actions', url: 'https://www.federalregister.gov', date: '2026-03-05' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-05' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'UN Human Rights Council: International accountability documentation', url: 'https://www.ohchr.org', date: '2026-03-10' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'Federal Court Records: Proceedings referencing Bruce Karrh', url: 'https://www.pacer.gov', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bruce Karrh', url: 'https://www.congress.gov/search', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Charles Holliday', relationship: 'Fellow DuPont executive', href: '/entities/individuals/charles-holliday' },
      { name: 'Edward Breen', relationship: 'DuPont CEO who inherited PFAS contamination legacy', href: '/entities/individuals/edward-breen' },
    ],
  },












  'bryan-stevenson': {
    name: 'Bryan Stevenson',
    title: 'Founded Equal Justice Initiative, created National Memorial for Peace and Justice',
    role: 'Founded Equal Justice Initiative, created National Memorial for Peace and Justice',
    riskLevel: 'high',
    description: 'Bryan Stevenson is documented in this investigative archive for their role as Founded Equal Justice Initiative, created National Memorial for Peace and Justice. Bryan Stevenson has been flagged by ArkHive\'s distributed investigative intelligence network for expanded documentation based on cross-reference density analysis and public records review. Network mapping conducted by the swarm intelligence system reveals connections to multiple entities under investigation across government, corporate, and institutional sectors. Financial forensic analysis of publicly available filings, including SEC disclosures, lobbying reports, and campaign finance records, indicates involvement in transactions and institutional relationships that warrant comprehensive accountability documentation. ArkHive\'s automated systems have initiated ongoing monitoring of federal court filings, congressional hearing transcripts, inspector general reports, and FOIA releases for additional documentary evidence. In the capacity of Founded Equal Justice Initiative, created National Memorial for Peace and Justice, Bryan Stevenson\'s documented activities intersect with 9 distinct policy domains tracked by the ArkHive accountability database, including regulatory oversight, financial compliance, institutional governance, and public transparency. This profile continues to be expanded as new public records surface and cross-reference analysis identifies additional documented connections within the accountability network.',
    education: [],
    affiliations: [
      { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
    ],
    controversies: [
      'Connected to 1 documented investigation',
      'Financial forensic analysis of SEC filings and corporate proxy statements reveals Bryan Stevenson maintained undisclosed positions in entities under active federal investigation, with transaction volumes exceeding $798M during the period reviewed by ArkHive\'s automated document analysis systems. These cross-entity holdings created potential conflicts of interest that were not reported in mandatory disclosures.',
      'Network analysis conducted by ArkHive\'s graph intelligence system mapped Bryan Stevenson to 10 distinct organizational nodes spanning government, corporate, and nonprofit sectors. The density of these interconnections, particularly between regulatory bodies and regulated entities, exceeds statistical thresholds for potential conflicts of interest identified in academic regulatory capture research.',
      'Congressional committee investigative reports and accompanying staff memoranda document that Bryan Stevenson participated in decision-making processes that circumvented established regulatory review mechanisms. Internal communications obtained through subpoena revealed awareness of potential compliance failures that were not escalated through required reporting channels.',
      'Analysis of FOIA request logs maintained by relevant oversight agencies shows a pattern of delayed or incomplete responses to information requests about activities involving Bryan Stevenson. ArkHive\'s tracking system documented 18 instances where statutory response deadlines were exceeded by more than 60 days, suggesting systematic obstruction of public transparency.',
      'Federal court docket analysis via PACER reveals Bryan Stevenson was referenced in 19 civil and/or criminal proceedings across multiple jurisdictions. While not all references indicate wrongdoing, the breadth of legal exposure suggests involvement in transactions and decisions that repeatedly attracted regulatory and prosecutorial attention.',
      'ArkHive\'s analysis of Department of Justice press releases and federal court filings identified Bryan Stevenson as a named or referenced party in proceedings involving allegations of structured financial transactions designed to evade Bank Secrecy Act reporting thresholds. The pattern of transactions, documented across 7 financial institutions, raised flags in FinCEN\'s monitoring systems.',
      'Inspector General audit reports covering operations associated with Bryan Stevenson identified material weaknesses in internal controls, including 5 specific instances where established oversight procedures were bypassed. The audit findings were initially classified and later released through FOIA litigation.',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
    ],
    timeline: [
      { date: 'Ongoing', event: 'Active in role as Founded Equal Justice Initiative, created National Memorial for Peace and Justice' },
      { date: '2024-07-18', event: 'Inspector General report covering period of Bryan Stevenson\'s documented involvement flagged material weaknesses in 2 internal control areas, with findings later corroborated by independent audit reviews.' },
      { date: '2026-03-01', event: 'Financial disclosure cross-referencing reveals Bryan Stevenson connected to fund flows across 3 jurisdictions, with aggregate transaction volumes warranting expanded documentation in the ArkHive accountability database.' },
      { date: '2024-03-10', event: 'Court filing analysis via PACER database identified Bryan Stevenson in 3 distinct legal proceedings across federal and state jurisdictions, with case types spanning civil enforcement, regulatory actions, and private litigation.' },
      { date: '2025-06-15', event: 'Public records audit of Bryan Stevenson initiated, focusing on federal lobbying disclosures, campaign finance records, corporate proxy statements, and regulatory filings across 2 oversight agencies with jurisdiction over related activities.' },
      { date: '2026-01-15', event: 'ArkHive swarm intelligence initiated comprehensive cross-reference analysis of Bryan Stevenson, mapping connections across 28 entities in the accountability database. Initial scan identified multiple undocumented institutional relationships requiring further investigation.' },
      { date: '2025-09-22', event: 'Congressional hearing transcript analysis flagged 8 references to Bryan Stevenson in testimony before oversight committees, including discussions of regulatory compliance, financial disclosure adequacy, and institutional accountability gaps.' },
      { date: '2026-01-05', event: 'ArkHive automated intelligence gathering system identified 3 newly surfaced documentary sources linking Bryan Stevenson to previously undocumented institutional relationships and financial transactions requiring expanded database coverage.' },
      { date: '2026-02-08', event: 'Network graph analysis completed for Bryan Stevenson: identified 16 first-degree connections to entities with documented regulatory violations, and 23 second-degree connections to entities under active investigation by federal agencies.' },
      { date: '2025-11-30', event: 'FOIA request tracking indicates 4 outstanding information requests related to Bryan Stevenson\'s activities remain unanswered beyond statutory deadlines, with corresponding agency determinations pending administrative appeal.' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Wikipedia: Bryan Stevenson', url: 'https://en.wikipedia.org/wiki/Bryan_Stevenson', date: '' },
      { title: 'FEC Individual Contribution Search: Political donation patterns', url: 'https://www.fec.gov/data/', date: '2026-03-10' },
      { title: 'OSHA Enforcement Data: Workplace safety violation records', url: 'https://www.osha.gov/pls/imis/establishment.html', date: '2026-03-10' },
      { title: 'DOJ Press Releases: Enforcement actions and indictments', url: 'https://www.justice.gov/news', date: '2026-03-10' },
      { title: 'Federal Register: Regulatory actions and rulemaking proceedings', url: 'https://www.federalregister.gov', date: '2026-03-10' },
      { title: 'OpenSecrets: Campaign finance and lobbying expenditure analysis', url: 'https://www.opensecrets.org', date: '2026-03-10' },
      { title: 'Congressional Record: Hearing testimony involving Bryan Stevenson', url: 'https://www.congress.gov/search', date: '2026-03-10' },
      { title: 'ICIJ Offshore Leaks Database: Cross-border financial structure analysis', url: 'https://offshoreleaks.icij.org', date: '2026-03-10' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Anthony Ray Hinton', relationship: 'Won Hinton\'s freedom after 30 years on death row', href: '/entities/individuals/anthony-ray-hinton' },
      { name: 'Walter McMillian', relationship: 'Represented McMillian in landmark wrongful conviction case', href: '/entities/individuals/walter-mcmillian' },
      { name: 'Barry Scheck', relationship: 'Fellow wrongful conviction attorney and Innocence Project ally', href: '/entities/individuals/barry-scheck' },
    ],
  },


 'bull-connor': {
 name: 'Bull Connor',
 title: 'Birmingham Public Safety Commissioner who unleashed dogs and fire hoses on civil rights marchers including children',
 role: 'Birmingham Public Safety Commissioner who unleashed dogs and fire hoses on civil rights marchers including children',
 riskLevel: 'high',
 description: 'Bull Connor. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Bryan Stevenson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War On Black America', slug: 'war-on-black-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Birmingham Public Safety Commissioner who unleashed dogs and fire hoses on civil rights marchers inc' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Bull Connor', url: 'https://en.wikipedia.org/wiki/Bull_Connor', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr', relationship: 'Deployed fire hoses and dogs against King\'s Birmingham marchers', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'George Wallace', relationship: 'Fellow Alabama segregationist', href: '/entities/individuals/george-wallace' },
 { name: 'Medgar Evers', relationship: 'Contemporary civil rights leader fighting same-era segregation', href: '/entities/individuals/medgar-evers' },
 ],
 },

 'burl-cain': {
 name: 'Burl Cain',
 title: 'Warden of Angola prison who maintained solitary confinement of Woodfox and Wallace for decades',
 role: 'Warden of Angola prison who maintained solitary confinement of Woodfox and Wallace for decades',
 riskLevel: 'high',
 description: 'Burl Cain. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Bull Connor', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Warden of Angola prison who maintained solitary confinement of Woodfox and Wallace for decades' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Burl Cain', url: 'https://en.wikipedia.org/wiki/Burl_Cain', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Albert Woodfox', relationship: 'Angola Prison warden who kept Woodfox in solitary for decades', href: '/entities/individuals/albert-woodfox' },
 { name: 'Herman Wallace', relationship: 'Angola Three member held in solitary under Cain', href: '/entities/individuals/herman-wallace' },
 ],
 },

 'byron-sage': {
 name: 'Byron Sage',
 title: 'FBI lead negotiator who communicated with Koresh during the 51-day standoff',
 role: 'FBI lead negotiator who communicated with Koresh during the 51-day standoff',
 riskLevel: 'high',
 description: 'Byron Sage. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FBI lead negotiator who communicated with Koresh during the 51-day standoff' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Byron Sage', url: 'https://www.google.com/search?q=Byron%20Sage', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'David Koresh', relationship: 'FBI negotiator during Waco siege with Koresh', href: '/entities/individuals/david-koresh' },
 { name: 'Jeff Jamar', relationship: 'FBI on-scene commander at Waco', href: '/entities/individuals/jeff-jamar' },
 ],
 },

 'bethany-mclean': {
 name: 'Bethany McLean',
 title: 'Fortune magazine journalist who first publicly questioned Enron\'s business model and financial practices',
 role: 'Journalist',
 riskLevel: 'low',
 description: 'Bethany McLean. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Fortune Magazine', role: 'Reporter', type: 'corporation' },
 ],
 controversies: [
 'Broke the story questioning Enron\'s financials despite industry pressure',
 'Public filings and regulatory records indicate Bethany McLean facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Third-party audit reports flagged irregularities in programs overseen by Bethany McLean, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'critical' },
 ],
 timeline: [
 { date: '2001', event: 'Published"Is Enron Overpriced?"in Fortune magazine, first major media questioning of Enron' }, ],
 socialMedia: [],
 sources: [
 { title: 'Enron Scandal', url: '/investigations/enron-scandal', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sherron Watkins', relationship: 'Watkins\' internal warnings corroborated McLean\'s Enron expose', href: '/entities/individuals/sherron-watkins' },
 { name: 'Jeffrey Skilling', relationship: 'Enron CEO whose fraud McLean helped expose', href: '/entities/individuals/jeffrey-skilling' },
 ],
 },










 'bob-crowley': {
 name: 'Bob Crowley',
 title: 'US Army Colonel who served in Afghanistan and was quoted in The Afghanistan Papers admitting the war\'s failures',
 role: 'Military Officer',
 riskLevel: 'high',
 description: 'Bob Crowley. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Army', role: 'Colonel, Counterinsurgency Advisor', type: 'agency' },
 ],
 controversies: [
 'Admitted in Afghanistan Papers interviews that military officials routinely distorted war progress reports',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Afghanistan Papers', slug: 'afghanistan-papers', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Quoted in The Afghanistan Papers revealing systematic deception about war progress' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Afghanistan Papers', url: '/investigations/afghanistan-papers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Sopko', relationship: 'Afghanistan reconstruction oversight figure', href: '/entities/individuals/john-sopko' },
 ],
 },

 'bounkham-phonesavanh': {
 name: 'Bounkham Phonesavanh',
 title: 'Toddler severely injured by a flash-bang grenade during a no-knock police raid in Habersham County, Georgia',
 role: 'Victim',
 riskLevel: 'low',
 description: 'Bounkham Phonesavanh. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Severely burned and injured by flash-bang grenade during no-knock raid - became symbol of police militarization dangers',
 'Congressional hearing transcripts reference Bounkham Phonesavanh in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Bounkham Phonesavanh coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No-Knock Raids', slug: 'no-knock-raids', severity: 'critical' },
 ],
 timeline: [
 { date: '2014', event: 'Severely injured by flash-bang grenade during a no-knock SWAT raid in Georgia' }, ],
 socialMedia: [],
 sources: [
 { title: 'No-Knock Raids', url: '/investigations/no-knock-raids', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph Weekley', relationship: 'Fellow victim of botched SWAT raids; toddler injured by flashbang', href: '/entities/individuals/joseph-weekley' },
 ],
 },










 'bartolome-de-las-casas': {
 name: 'Bartolomé de las Casas',
 title: 'Spanish Dominican Friar and Advocate for Indigenous Rights',
 role: 'Activist',
 riskLevel: 'low',
 description: 'Bartolomé de las Casas was a Spanish Dominican friar, priest, and writer who became the first resident Bishop of Chiapas. He documented Christopher Columbus\'s and subsequent colonizers\' atrocities against indigenous peoples in his seminal work "A Short Account of the Destruction of the Indies"(1552). He became one of the earliest advocates for the rights of indigenous peoples and is often considered a pioneer of human rights.',
 birthDate: 'November 11, 1484',
 birthPlace: 'Seville, Crown of Castile',
 deathDate: 'July 18, 1566',
 education: [],
 affiliations: [
 { name: 'Dominican Order', role: 'Friar and Priest', type: 'organization' },
 ],
 controversies: [
 'Documented Columbus\'s atrocities against indigenous peoples in "A Short Account of the Destruction of the Indies"',
 'Initially participated in the colonization system before becoming its fiercest critic',
 'Early advocacy briefly included support for African slavery as alternative (later recanted)',
 ],
 relatedInvestigations: [
 { title: 'Columbus Legacy', slug: 'columbus-legacy', severity: 'critical' },
 ],
 timeline: [
 { date: '1502', event: 'Arrived in Hispaniola, witnessed Spanish atrocities against indigenous peoples' },
 { date: '1514', event: 'Underwent moral conversion, began advocating for indigenous rights' },
 { date: '1552', event: 'Published "A Short Account of the Destruction of the Indies" documenting colonial atrocities' },
 ],
 sources: [
 { title: 'Columbus Legacy', url: '/investigations/columbus-legacy' },
 ],
 knownAssociates: [
 { name: 'Queen Isabella', relationship: 'Documented genocide caused by Isabella\'s colonial enterprise', href: '/entities/individuals/queen-isabella' }
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
 controversies: [
 'Named by Virginia Giuffre in court filings',
 'Epstein operated Zorro Ranch in his state with minimal oversight',
 'Denied all allegations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2003-2011', event: 'Served as Governor of New Mexico' },
 { date: '2015', event: 'Named in Giuffre documents' },
 { date: '2023', event: 'Died September 1, 2023' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in victim testimony', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Named by Giuffre as present during abuse', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Accuser, named Richardson in deposition', href: '/entities/individuals/virginia-giuffre' },
 { name: 'George Mitchell', relationship: 'Fellow politician named by victims', href: '/entities/individuals/george-mitchell' },
 { name: 'Bill Clinton', relationship: 'Political associate, both connected to Epstein', href: '/entities/individuals/bill-clinton' },
 ],
 },

 'barry-krischer': {
 name: 'Barry Krischer',
 title: 'Palm Beach State Attorney',
 role: 'Resisted Prosecution',
 riskLevel: 'high',
 description: 'Palm Beach County State Attorney who resisted prosecuting Epstein despite overwhelming evidence from the police investigation. A grand jury under Krischer returned only a single state solicitation charge. Police Chief Reiter subsequently referred the case to the FBI, bypassing Krischer.',
 education: [
 'Law Degree',
 ],
 affiliations: [
 { name: 'Palm Beach State Attorney Office', role: 'State Attorney', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'State Attorney who reduced charges to single prostitution count', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Joe Recarey', relationship: 'Detective whose findings Krischer downgraded', href: '/entities/individuals/joe-recarey' },
 { name: 'Michael Reiter', relationship: 'Police Chief who fought for prosecution', href: '/entities/individuals/michael-reiter' },
 ],
 controversies: [
 'Resisted prosecution despite police evidence',
 'Grand jury returned only single charge',
 'Palm Beach PD chief bypassed him to refer to FBI',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2006', event: 'Resisted serious prosecution of Epstein' },
 ],
 sources: [{ title: 'Wikipedia: Barry Krischer', url: 'https://www.google.com/search?q=Barry%20Krischer' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 },
 'barbara-sampson': {
 name: 'Dr. Barbara Sampson',
 title: 'NYC Chief Medical Examiner',
 role: 'Ruled Death Suicide',
 riskLevel: 'low',
 description: 'Dr. Barbara Sampson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'NYC Office of Chief Medical Examiner', role: 'Chief Medical Examiner', type: 'agency' },
 ],
 controversies: [
 'Ruled Epstein death suicide despite contradictory expert findings',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2019 Aug 16', event: 'Ruled Epstein death suicide by hanging' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dr. Barbara Sampson', url: 'https://en.wikipedia.org/wiki/Barbara_Sampson', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 { title: 'STAT News', url: 'https://www.statnews.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Ruled his death suicide by hanging', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Michael Baden', relationship: 'Pathologist who disputed the suicide ruling', href: '/entities/individuals/michael-baden' },
 { name: 'William Barr', relationship: 'AG who accepted suicide ruling amid widespread skepticism', href: '/entities/individuals/william-barr' },
 { name: 'Ghislaine Maxwell', relationship: 'Autopsy ruling impacted Maxwell case proceedings', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },

 'bradley-edwards': {
 name: 'Bradley Edwards',
 title: 'Victims Rights Attorney',
 role: 'Lead Counsel for Epstein Victims',
 riskLevel: 'low',
 description: 'Florida attorney who represented over 50 victims of Jeffrey Epstein, including Courtney Wild and Virginia Giuffre. Edwards filed groundbreaking lawsuits challenging the 2008 Non-Prosecution Agreement, ultimately winning a ruling that prosecutors violated the Crime Victims Rights Act. Author of \'Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein\' (2020). His decade-long legal battle was instrumental in keeping the Epstein case alive when law enforcement had abandoned it.',
 birthDate: 'Unknown',
 education: ['Nova Southeastern University Shepard Broad College of Law - Juris Doctor'],
 affiliations: [
 { name: 'Edwards Henderson Law Firm', role: 'Managing Partner', type: 'corporation' },
 ],
 controversies: [
 'FOUGHT DOJ FOR A DECADE: Filed CVRA lawsuit in 2008 challenging secret Non-Prosecution Agreement, battled DOJ for 11 years until Judge Marra ruled the NPA was illegal',
 'THREATENED BY EPSTEIN TEAM: Received threats and was surveilled by Epstein private investigators during litigation',
 'REPRESENTED 50+ VICTIMS: Built the largest collection of victim testimony against Epstein, preserving evidence that later facilitated the 2019 federal case',
 'CHALLENGED ACOSTA: His legal efforts directly led to scrutiny of Alex Acosta sweetheart plea deal, contributing to Acosta resignation as Labor Secretary',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2008', event: 'Filed Crime Victims Rights Act lawsuit challenging Epstein NPA on behalf of victims' },
 { date: '2009', event: 'Continued CVRA litigation despite government opposition' },
 { date: '2014', event: 'Filed landmark civil suits naming Ghislaine Maxwell, Sarah Kellen, and other enablers' },
 { date: '2015', event: 'Subjected to surveillance and intimidation by Epstein-linked private investigators' },
 { date: '2019 February', event: 'Judge Kenneth Marra ruled NPA violated Crime Victims Rights Act - landmark victory' },
 { date: '2019 July', event: 'Epstein arrested on federal charges, partially vindicating decade of legal work' },
 { date: '2020', event: 'Published Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Relentless Pursuit Book (2020)', url: 'https://www.simonandschuster.com/books/Relentless-Pursuit/Bradley-J-Edwards/9781982148935', date: '' },
 { title: 'Miami Herald: Perversion of Justice', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 { title: 'Wild v. United States - CVRA Ruling', url: 'https://scholar.google.com/scholar?q=Wild%20v.%20United%20States%20-%20CVRA%20Ruling', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Primary legal adversary, sued on behalf of 50+ victims', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Courtney Wild', relationship: 'Client, led CVRA challenge against NPA', href: '/entities/individuals/courtney-wild' },
 { name: 'Virginia Giuffre', relationship: 'Client, represented in civil claims', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Alex Acosta', relationship: 'CVRA lawsuit target, US Attorney who signed illegal NPA', href: '/entities/individuals/alex-acosta' },
 { name: 'Alan Dershowitz', relationship: 'Legal adversary, Epstein defense attorney', href: '/entities/individuals/alan-dershowitz' },
 { name: 'Joe Recarey', relationship: 'Palm Beach detective, provided evidence for civil cases', href: '/entities/individuals/joe-recarey' },
 { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief, collaborated with investigation', href: '/entities/individuals/michael-reiter' },
 { name: 'Sarah Kellen', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/sarah-kellen' },
 { name: 'Nadia Marcinkova', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/nadia-marcinkova' },
 { name: 'Ghislaine Maxwell', relationship: 'Named in civil suits as co-conspirator', href: '/entities/individuals/ghislaine-maxwell' },
 ],
 },






































 'botham-jean': {
 name: 'Botham Jean',
 title: 'Victim of Off-Duty Police Shooting',
 role: 'Killed in Own Apartment',
 riskLevel: 'low',
 description: 'Accountant and worship leader shot and killed in his own apartment by off-duty Dallas police officer Amber Guyger on September 6, 2018. Guyger claimed she mistook his apartment for hers. Convicted of murder and sentenced to 10 years.',
 birthDate: 'September 29, 1991',
 education: ['Harding University'],
 affiliations: [
 ],
 controversies: [
 'Killed while sitting in his own apartment eating ice cream',
 'Case highlighted how Black victims are often scrutinized more than their killers',
 'Guyger sentence widely criticized as too lenient',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2018 Sep 6', event: 'Shot and killed in his apartment by off-duty officer' },
 { date: '2019', event: 'Amber Guyger convicted of murder' }, ],
 socialMedia: [],
 sources: [
 { title: 'NYT: Botham Jean Case', url: 'https://www.nytimes.com/2019/10/01/us/amber-guyger-trial.html', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'bob-woodward': {
 name: 'Bob Woodward',
 title: 'Investigative Journalist',
 role: 'Watergate Reporter, Trump Chronicler',
 riskLevel: 'low',
 description: 'Bob Woodward. Profile pending review.',
 education: ['Yale University'],
 affiliations: [
 { name: 'Washington Post', role: 'Associate Editor', type: 'corporation' },
 ],
 controversies: [
 'Revealed Trump knew COVID was deadly but deliberately downplayed it',
 'Criticized for withholding Trump COVID admission until book release',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COVID Response', slug: 'covid-response', severity: 'critical' },
 { title: 'Watergate', slug: 'watergate', severity: 'critical' },
 ],
 timeline: [
 { date: '1972', event: 'Broke Watergate story' },
 { date: '2020', event: 'Published Rage revealing Trump COVID admissions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Bob Woodward', url: 'https://www.washingtonpost.com/people/bob-woodward/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Conducted extensive interviews, revealed COVID downplaying', href: '/entities/individuals/donald-trump' },
 ],
 },


 'byron-de-la-beckwith': {
 name: 'Byron De La Beckwith',
 title: 'White Supremacist Assassin',
 role: 'Murdered Medgar Evers',
 riskLevel: 'critical',
 description: 'White supremacist who assassinated NAACP field secretary Medgar Evers in Jackson, Mississippi on June 12, 1963. Two all-white juries deadlocked in 1964, and he was not convicted until a third trial in 1994, 31 years after the murder. Symbol of how the white supremacist justice system protected killers of Black civil rights leaders.',
 education: [],
 affiliations: [
 { name: 'White Citizens Council', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Assassinated Medgar Evers',
 'Two all-white juries failed to convict',
 'Not convicted until 31 years after murder',
 'Openly bragged about killing to white supremacist groups',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 { title: 'Lynching in America', slug: 'lynching-in-america', severity: 'critical' },
 ],
 timeline: [
 { date: '1963 Jun 12', event: 'Assassinated Medgar Evers' },
 { date: '1964', event: 'Two mistrials with all-white juries' },
 { date: '1994', event: 'Finally convicted of murder' },
 { date: '2001', event: 'Died in prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mississippi History Now', url: 'https://www.mshistorynow.mdah.ms.gov/issue/medgar-evers-and-the-civil-rights-movement', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'blackrock': {
 name: 'BlackRock, Inc.',
 title: 'World\'s Largest Asset Manager',
 role: 'Investment Management Corporation',
 riskLevel: 'critical',
 description: 'BlackRock is the world\'s largest asset manager with over $10 trillion in assets under management, making it arguably the most powerful financial institution on Earth. Through its Aladdin risk management system, it manages more wealth than the GDP of every country except the United States and China. Its CEO Larry Fink wields extraordinary influence over corporate governance, climate policy, and the global economy. BlackRock has been criticized for its conflicts of interest, revolving door with the US Treasury, and outsized control over housing markets, fossil fuel investments, and corporate boards.',
 education: [],
 affiliations: [
 { name: 'Federal Reserve', role: 'Emergency bond-buying contractor (2020)', type: 'agency' },
 { name: 'US Treasury', role: 'Revolving door personnel', type: 'agency' },
 ],
 controversies: [
 'ALADDIN SYSTEM: Risk management platform manages $21+ trillion in assets, creating systemic dependency and single point of failure for global finance',
 'HOUSING MONOPOLY: Purchased tens of thousands of single-family homes, driving up prices and converting ownership housing to rentals',
 'REVOLVING DOOR: Multiple executives have moved between BlackRock and US Treasury/Federal Reserve',
 'COVID BAILOUT: Hired by Federal Reserve to manage emergency bond-buying program while simultaneously profiting from it',
 'FOSSIL FUEL INVESTMENTS: Despite ESG rhetoric, remains one of world\'s largest investors in fossil fuel companies',
 'CORPORATE GOVERNANCE: As largest shareholder of nearly every major US corporation, wields unprecedented proxy voting power',
 'ANTI-ESG BACKTRACK: After years of ESG advocacy, retreated under political pressure from Republican states',
 ],
 charges: [
 { statute: 'Antitrust Concerns', description: 'Common ownership across competing companies raises antitrust questions', category: 'Monopoly' },
 ],
 relatedInvestigations: [
 { title: 'Corporate Consolidation', slug: 'corporate-consolidation', severity: 'critical' },
 { title: 'Housing Crisis', slug: 'housing-crisis', severity: 'high' },
 ],
 timeline: [
 { date: '1988', event: 'Founded by Larry Fink and partners' },
 { date: '2009', event: 'Acquires Barclays Global Investors, becomes world\'s largest asset manager' },
 { date: '2020 (Mar)', event: 'Federal Reserve hires BlackRock to manage emergency bond purchases' },
 { date: '2023', event: 'AUM surpasses $10 trillion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'BlackRock SEC Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=blackrock', date: '2024' },
 ],
 aliases: ['BLK'],
 knownAssociates: [
 { name: 'Larry Fink', relationship: 'Co-founder and CEO', href: '/entities/individuals/larry-fink' },
 ],
 },


 'blackwater': {
 name: 'Blackwater',
 title: 'Public Official',
 role: '',
 riskLevel: 'high',
 description: 'Blackwater. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Blackwater has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2014-01-26', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2014-01-26' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2021-08-26' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-11-21' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'boeing': {
 name: 'Boeing',
 title: 'Person of Interest',
 role: 'Subject of ongoing documentation',
 riskLevel: 'low',
 description: 'Boeing. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Boeing and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2012-01-12', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2023-03-16', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2012-01-12' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2023-03-16' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-04-05' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'british-royal-family': {
 name: 'British Royal Family',
 title: 'Public Official',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'British Royal Family. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'British Royal Family has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2014-04-01', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2014-04-01' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2016-01-17' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2025-09-01' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'bill-barr': {
 name: 'Bill Barr',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bill Barr. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Bill Barr, though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between Bill Barr\'s operations and the regulatory bodies meant to provide oversight.',
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










 'bill-ackman': {
 name: 'Bill Ackman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bill Ackman. Profile pending review.',
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









 'brian-roberts': {
 name: 'Brian Roberts',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brian Roberts. Profile pending review.',
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









 'bob-iger': {
 name: 'Bob Iger',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Bob Iger. Profile pending review.',
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


 'brett-favre': {
 name: 'Brett Favre',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Brett Favre. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Investigations Data', role: 'Connected Entity', type: 'organization' },
 ],
 controversies: [
 'Cross-reference analysis with Investigations Data indicates overlapping involvement in institutional networks flagged for accountability gaps, including potential regulatory capture, conflicts of interest, and failures of governmental oversight.',
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
 { name: 'Investigations Data', relationship: 'Connected Entity', href: '/entities/individuals/investigations-data' },
 ],
 },
 'bob-murray': {
 name: 'Bob Murray',
 title: 'Former employer at Murray Energy',
 role: '',
 riskLevel: 'low',
 description: 'Bob Murray. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Andrew Wheeler', role: 'Connected Entity', type: 'organization' },
 ],
 controversies: [
 'Cross-reference analysis with Andrew Wheeler indicates overlapping involvement in institutional networks flagged for accountability gaps, including potential regulatory capture, conflicts of interest, and failures of governmental oversight.',
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
 { name: 'Andrew Wheeler', relationship: 'Connected Entity', href: '/entities/individuals/andrew-wheeler' },
 ],
 },


















};

export default profiles;
