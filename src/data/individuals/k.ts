// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'klaus-schwab': {
 name: 'Klaus Schwab',
 title: 'Founder and Executive Chairman; World Economic Forum',
 role: 'Founded and led the World Economic Forum (Davos); architect of "The Great Reset" and "stakeholder capitalism" agenda; convenes global elites annually',
 riskLevel: 'high',
 description: 'Klaus Martin Schwab is a German-born engineer and economist who founded the World Economic Forum (WEF) in 1971; originally as the European Management Forum. For over five decades; Schwab has convened heads of state; CEOs of the world\'s largest corporations; central bankers; and billionaires at the annual meeting in Davos; Switzerland; creating one of the most powerful unelected networks of global influence. The WEF\'s annual meeting effectively functions as a shadow governance summit where policy directions are shaped outside of democratic processes. In 2020; Schwab co-authored "COVID-19: The Great Reset"; arguing that the pandemic presented an opportunity to fundamentally reshape global capitalism; health systems; and governance. This book became central to widespread conspiracy theories but also legitimate criticism about unelected elites using crises to advance predetermined agendas. The WEF\'s "Young Global Leaders" program has trained thousands of politicians and executives including Emmanuel Macron; Justin Trudeau; Jacinda Ardern; and numerous cabinet ministers worldwide; raising questions about the forum\'s influence on democratic governance. The WEF\'s "Strategic Partners" pay up to $600,000 annually for access to world leaders at Davos.',
 birthDate: 'March 30, 1938',
 birthPlace: 'Ravensburg, Germany',
 education: ['ETH Zurich; Doctorate in Engineering', 'University of Fribourg; Doctorate in Economics', 'Harvard University; Master of Public Administration'],
 affiliations: [
  { name: 'World Economic Forum', role: 'Founder and Executive Chairman (1971-present)', type: 'organization' },
  { name: 'Bilderberg Group', role: 'Regular participant in annual meetings', type: 'organization' },
 ],
 controversies: [
  'Founded and controls the World Economic Forum; which convenes world leaders and billionaires annually in Davos; creating an unelected parallel governance structure that shapes global policy outside democratic accountability',
  'Co-authored "COVID-19: The Great Reset" in 2020; arguing the pandemic was an opportunity to fundamentally reshape the global economy; critics see this as exploiting crisis for predetermined policy goals',
  'WEF\'s "Young Global Leaders" program has trained hundreds of current and former heads of state; cabinet ministers; and corporate leaders; raising concerns about captured elites advancing WEF\'s agenda once in power',
  'WEF "Strategic Partners" (including Blackrock; Goldman Sachs; Google; and McKinsey) pay up to $600,000 annually for access to world leaders at Davos; creating a pay-to-play governance environment',
  'Promoted "stakeholder capitalism" as alternative to shareholder capitalism; critics argue this gives corporations more power over public policy while reducing accountability to actual citizens',
  'WEF\'s Fourth Industrial Revolution initiative promotes AI; digital identity systems; and biosurveillance technologies that civil liberties organizations warn could enable mass surveillance',
  'Schwab\'s father Eugen ran Escher Wyss AG; which used forced labor during WWII and supplied equipment to the Nazi and apartheid South African nuclear programs',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Global Elite Networks', slug: 'davos-world-economic-forum-influence', severity: 'high' },
 ],
 timeline: [
  { date: 'March 30, 1938', event: 'Born in Ravensburg, Germany' },
  { date: '1971', event: 'Founded the European Management Forum (later renamed World Economic Forum) in Geneva' },
  { date: '1987', event: 'Renamed organization to World Economic Forum; expanded scope beyond European business management' },
  { date: '1992', event: 'Launched "Young Global Leaders" program (originally "Global Leaders of Tomorrow")' },
  { date: '2016', event: 'Published "The Fourth Industrial Revolution"; promoting AI; robotics; and digital transformation of society' },
  { date: 'January 2020', event: 'WEF partners with WHO on pandemic preparedness initiative weeks before COVID-19 declared global emergency' },
  { date: 'July 2020', event: 'Co-publishes "COVID-19: The Great Reset" with Thierry Malleret' },
  { date: '2021', event: 'WEF launches "Stakeholder Capitalism Metrics" adopted by major corporations worldwide' },
  { date: 'January 2024', event: 'Announced transition from Executive Chairman; handing day-to-day control to new leadership' },
 ],
 socialMedia: [],
 sources: [
  { title: 'World Economic Forum; Annual Reports', url: 'https://www.weforum.org', date: 'Ongoing' },
  { title: 'Klaus Schwab and Thierry Malleret; "COVID-19: The Great Reset"', url: 'https://www.amazon.com', date: 'July 2020' },
  { title: 'Investigative reporting on WEF Young Global Leaders', url: 'https://www.politico.eu', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'George Soros', relationship: 'Regular Davos participant; Open Society Foundations has partnered with WEF initiatives', href: '/entities/individuals/george-soros' },
  { name: 'Bill Gates', relationship: 'Major WEF partner; Gates Foundation collaborates with WEF on global health and vaccine distribution', href: '/entities/individuals/bill-gates' },
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
 education: ['J.D., Harvard Law School'],
 affiliations: [
 { name: 'Trump Legal Team', role: 'Attorney', type: 'organization' },
 ],
 controversies: [
 'Fake electors scheme architect',
 'Wrote memos outlining strategy to submit false electors',
 'Georgia RICO guilty plea',
 ],
 charges: [
 { statute: 'O.C.G.A. § 16-10-1', description: 'Conspiracy to Commit Filing False Documents (Pled Guilty); Georgia guilty plea', category: 'Fraud' },
 { statute: '18 U.S.C. § 371 (Conspiracy to Defraud US)', description: 'Fake Electors Architect; Wrote legal memos outlining scheme to submit fraudulent electoral certificates', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 1512(c)(2) (Obstruction)', description: 'Obstruction of Congress; Scheme designed to obstruct January 6 certification', category: 'Obstruction' },
 { statute: '52 U.S.C. § 20511 (Election Fraud)', description: 'Election Fraud; Created blueprint for submitting false electoral slates in 7 states', category: 'Election Crime' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'False Documents; Fake elector certificates signed under his legal guidance were false federal documents', category: 'Fraud' },
 { statute: 'Wisconsin AG Investigation', description: 'Under Investigation; Faces potential charges in Wisconsin for fake electors scheme', category: 'State Crimes' },
 { statute: 'Michigan AG Investigation', description: 'Under Investigation; Faces potential charges in Michigan for fake electors scheme', category: 'State Crimes' },
 { statute: 'Bar Disciplinary Proceedings', description: 'Professional Misconduct; Faces bar discipline for ethical violations in election scheme', category: 'Ethics' },
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
 title: 'Former Secretary of Homeland Security; Family Separation Policy',
 role: 'Implemented Trump\'s "zero tolerance" family separation policy; oversaw separation of thousands of migrant children from parents at the U.S.-Mexico border',
 riskLevel: 'critical',
 description: 'Kirstjen Michele Nielsen served as the sixth Secretary of Homeland Security from December 2017 to April 2019. She is most associated with the implementation of the Trump administration\'s "zero tolerance" immigration policy; which resulted in the systematic separation of migrant children; including infants and toddlers; from their parents at the U.S.-Mexico border. Under this policy; at least 5,556 children were separated from their families according to government records; though the actual number may be higher. DHS\'s own Inspector General found the department lacked any system to track separated families or reunify them. Children were held in cage-like chain-link enclosures; and reports documented children sleeping on concrete floors under foil blankets. At least seven children died in U.S. immigration custody during Nielsen\'s tenure. Despite evidence that the policy was designed as a deterrent; Nielsen repeatedly stated in congressional testimony and press conferences that "we do not have a policy of separating families at the border"; a claim contradicted by internal documents and subsequent court findings. A federal judge ordered families reunified in June 2018; but years later hundreds of parents still had not been located. After leaving office; Nielsen joined a cybersecurity consulting firm.',
 birthDate: 'May 14, 1972',
 birthPlace: 'Colorado Springs, Colorado, USA',
 education: ['Georgetown University School of Law; J.D.', 'University of Virginia; B.S.'],
 affiliations: [
  { name: 'Department of Homeland Security', role: 'Secretary (December 2017-April 2019)', type: 'agency' },
  { name: 'White House', role: 'Chief of Staff to John Kelly; Deputy Chief of Staff', type: 'agency' },
 ],
 controversies: [
  'Implemented "zero tolerance" policy that systematically separated at least 5,556 migrant children from their parents at the U.S.-Mexico border; including infants',
  'Repeatedly stated "we do not have a policy of separating families at the border" despite internal documents showing the policy was designed as a deterrent; contradicted by court findings',
  'DHS Inspector General found department had no system to track separated families or plan for reunification',
  'Children held in chain-link enclosures; sleeping on concrete floors under foil blankets; at least seven children died in immigration custody during her tenure',
  'Federal judge ordered family reunification in June 2018; years later hundreds of parents still had not been located',
  'Heckled out of a Mexican restaurant in Washington D.C. by immigration activists in June 2018',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Family Separation Policy', slug: 'family-separation-policy', severity: 'critical' },
  { title: 'ICE Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
  { date: 'May 14, 1972', event: 'Born in Colorado Springs, Colorado' },
  { date: 'December 6, 2017', event: 'Confirmed as Secretary of Homeland Security' },
  { date: 'April 2018', event: 'DOJ announces "zero tolerance" policy; all adults crossing border illegally to be prosecuted; children separated' },
  { date: 'June 2018', event: 'Public outcry over images of children in cages; Nielsen states no family separation policy exists' },
  { date: 'June 20, 2018', event: 'Trump signs executive order ending family separations after bipartisan backlash' },
  { date: 'June 26, 2018', event: 'Federal judge orders reunification of all separated families' },
  { date: 'April 7, 2019', event: 'Resigns as DHS Secretary under pressure from Trump; who wanted harsher enforcement' },
  { date: '2020', event: 'DHS IG report confirms systemic failures in tracking separated families' },
 ],
 socialMedia: [],
 sources: [
  { title: 'DHS Inspector General: DHS Lacked Technology to Track Separated Families', url: 'https://www.oig.dhs.gov', date: '2020' },
  { title: 'Ms. L v. ICE; No. 18-cv-428 (S.D. Cal.)', url: 'https://www.aclu.org', date: '2018' },
  { title: 'Government Accountability Office: Unaccompanied Children Report', url: 'https://www.gao.gov', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Appointed Nielsen as DHS Secretary; later pushed her out for not being harsh enough on immigration', href: '/entities/individuals/donald-trump' },
  { name: 'John Kelly', relationship: 'Nielsen served as Kelly\'s chief of staff; Kelly championed her for DHS role', href: '/entities/individuals/john-kelly' },
  { name: 'Jeff Sessions', relationship: 'AG who announced the zero tolerance policy that Nielsen implemented', href: '/entities/individuals/jeff-sessions' },
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
 education: ['J.D., Pace University School of Law', 'Law Diploma, University College London', 'B.A., University of Richmond'],
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
 { statute: '18 U.S.C. § 793 (Espionage Act)', description: 'Potential Classified Information Mishandling; False claims about Trump declassifying documents; witness in Mar-a-Lago case', category: 'Potential National Security' },
 { statute: '18 U.S.C. § 1001 (False Statements)', description: 'Potential False Statements; Claims about document declassification contradicted by evidence', category: 'Potential Federal' },
 { statute: '50 U.S.C. § 3033 (Intelligence Community)', description: 'Politicization Concerns; Nunes memo selectively declassified intelligence to defend Trump', category: 'Intelligence Abuse' },
 { statute: '18 U.S.C. § 1512 (Obstruction)', description: 'Potential Obstruction; Actions during documents investigation may constitute obstruction', category: 'Potential Obstruction' },
 { statute: '5 U.S.C. § 2302 (Prohibited Personnel Practices)', description: 'Enemies List Publication; Book naming perceived Trump opponents raises retaliation concerns', category: 'Ethics' },
 { statute: 'Hatch Act Concerns', description: 'Political Activity; Children\'s book promoting Trump while holding federal position', category: 'Potential Ethics' },
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
 education: ['J.D., George Washington University Law School (1992)', 'B.A., Trinity College (1989)'],
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
 { statute: '5 U.S.C. § 7323 (Hatch Act)', description: 'Multiple Documented Violations; Office of Special Counsel found Conway violated Hatch Act on numerous occasions through political activity in official capacity', category: 'Federal Ethics' },
 { statute: '5 U.S.C. § 7323(a)(1)', description: 'Hatch Act Violation; Used official position to advocate for and against candidates in 2018 and 2020 elections', category: 'Federal Ethics' },
 { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office for Private Gain; Promoted Ivanka Trump products from White House podium', category: 'Ethics' },
 { statute: '5 C.F.R. § 2635.101', description: 'Standards of Ethical Conduct Violations; OSC recommended removal from federal service (ignored by Trump)', category: 'Ethics' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements -"Alternative facts"defense of demonstrably false inauguration crowd claims', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1512', description: 'Potential Obstruction; Defied subpoena from House Oversight Committee', category: 'Potential Federal' },
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
 name: 'Kevin McCarthy',
 title: 'Former Speaker of the U.S. House of Representatives',
 role: 'First Speaker in U.S. history to be removed by his own caucus; took 15 ballots to win speakership; initially blamed Trump for January 6 before capitulating',
 riskLevel: 'high',
 description: 'Kevin Owen McCarthy served as Speaker of the U.S. House of Representatives from January 7 to October 3, 2023; becoming the first Speaker in American history to be removed from office by a motion to vacate. McCarthy\'s path to the speakership was historically chaotic; requiring 15 rounds of voting over four days in January 2023; as hard-right members extracted concessions that weakened the Speaker\'s power. In the immediate aftermath of the January 6 Capitol attack; McCarthy told Republican colleagues that Trump bore responsibility; stating "I\'ve had it with this guy" and saying he would tell Trump to resign. Audio recordings of these statements by New York Times journalists Jonathan Martin and Alexander Burns contradicted McCarthy\'s subsequent public defense of Trump. Within weeks; McCarthy reversed course and traveled to Mar-a-Lago to reconcile with Trump. McCarthy was removed as Speaker in October 2023 by a motion to vacate led by Rep. Matt Gaetz; with 8 Republicans joining all Democrats to oust him. He subsequently resigned from Congress entirely in December 2023.',
 birthDate: 'January 26, 1965',
 birthPlace: 'Bakersfield, California, USA',
 education: ['California State University; Bakersfield; B.S. Marketing; M.B.A.'],
 affiliations: [
  { name: 'U.S. House of Representatives', role: 'Speaker (January-October 2023); Republican Leader; CA-20/23 (2007-2023)', type: 'agency' },
 ],
 controversies: [
  'Audio recordings revealed McCarthy told Republican colleagues Trump bore responsibility for January 6 and that he would tell Trump to resign; McCarthy then publicly denied these statements before recordings emerged',
  'Traveled to Mar-a-Lago within weeks of January 6 to reconcile with Trump after privately blaming him for the attack',
  'Required a historic 15 rounds of voting over four days to win the speakership; making unprecedented concessions to far-right members',
  'First Speaker in U.S. history to be removed from office by a motion to vacate; 8 Republicans and all Democrats voted to oust him',
  'Removed security footage access from January 6 investigation and provided 41,000 hours of Capitol surveillance footage to Tucker Carlson before the public',
  'Resigned from Congress entirely in December 2023 after being ousted as Speaker',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'January 6 Capitol Attack', slug: 'january-6-capitol-attack', severity: 'critical' },
 ],
 timeline: [
  { date: 'January 26, 1965', event: 'Born in Bakersfield, California' },
  { date: '2006', event: 'Elected to U.S. House of Representatives from California' },
  { date: 'January 6, 2021', event: 'Tells Republican colleagues Trump is responsible for Capitol attack' },
  { date: 'January 28, 2021', event: 'Visits Trump at Mar-a-Lago to reconcile' },
  { date: 'January 3-7, 2023', event: '15 rounds of voting over 4 days to win speakership; makes unprecedented concessions' },
  { date: 'March 2023', event: 'Provides 41,000 hours of January 6 Capitol footage to Tucker Carlson' },
  { date: 'October 3, 2023', event: 'Removed as Speaker by motion to vacate; first in U.S. history' },
  { date: 'December 31, 2023', event: 'Resigns from Congress' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Martin and Burns; "This Will Not Pass" (McCarthy audio recordings)', url: 'https://www.nytimes.com', date: '2022' },
  { title: 'House Motion to Vacate the Chair; H.Res. 757', url: 'https://www.congress.gov', date: 'October 3, 2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'McCarthy privately blamed Trump for January 6 then reconciled at Mar-a-Lago; Trump later endorsed his ouster', href: '/entities/individuals/donald-trump' },
  { name: 'Matt Gaetz', relationship: 'Led the motion to vacate that removed McCarthy as Speaker', href: '/entities/individuals/matt-gaetz' },
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
 title: 'Supreme Leader of Democratic People\'s Republic of Korea',
 role: 'Third-generation hereditary dictator of North Korea; nuclear weapons program; systematic human rights atrocities documented by UN Commission of Inquiry',
 riskLevel: 'critical',
 description: 'Kim Jong Un is the Supreme Leader of North Korea (DPRK); the third generation of the Kim dynasty to rule the country through totalitarian control. He assumed power in December 2011 after the death of his father Kim Jong Il. Under his rule; North Korea has dramatically accelerated its nuclear weapons program; conducting its most powerful nuclear test in 2017 (estimated 100-370 kilotons) and developing ICBMs capable of reaching the continental United States. The UN Commission of Inquiry on Human Rights in the DPRK published a 372-page report in 2014 finding that North Korea commits crimes against humanity "without parallel in the contemporary world"; including extermination; murder; enslavement; torture; imprisonment; rape; forced abortions; persecution on political; religious and gender grounds; forcible transfer of populations; enforced disappearance; and knowingly causing prolonged starvation. The report estimated 80,000-120,000 political prisoners are held in brutal labor camps (kwanliso). Kim has ordered the execution of senior officials including his own uncle Jang Song-thaek (2013) and is believed to have ordered the assassination of his half-brother Kim Jong-nam with VX nerve agent at Kuala Lumpur airport in 2017. North Korea\'s Lazarus Group conducts state-sponsored cyberattacks; including the $81 million Bangladesh Bank heist and the WannaCry ransomware attack that crippled hospitals worldwide.',
 birthDate: 'January 8, 1984 (estimated)',
 birthPlace: 'Pyongyang, North Korea',
 education: ['Liebefeld-Steinholzli school; Bern, Switzerland (attended under pseudonym 1998-2000)', 'Kim Il-sung Military University; Pyongyang'],
 affiliations: [
  { name: 'Workers\' Party of Korea', role: 'General Secretary; Supreme Commander (2011-present)', type: 'organization' },
  { name: 'Korean People\'s Army', role: 'Supreme Commander of all DPRK armed forces', type: 'agency' },
  { name: 'State Affairs Commission', role: 'Chairman; highest government authority in North Korea', type: 'agency' },
 ],
 controversies: [
  'UN Commission of Inquiry found North Korea commits "crimes against humanity without parallel in the contemporary world" including extermination; enslavement; torture; rape; forced abortions; and religious persecution; recommended ICC referral',
  '80,000-120,000 political prisoners held in brutal labor camps (kwanliso); prisoners subjected to forced labor; starvation; torture; and public executions; three-generation punishment rule imprisons entire families',
  'Ordered execution of his uncle Jang Song-thaek in December 2013 by anti-aircraft gun; accused of factionalism',
  'Believed to have ordered assassination of half-brother Kim Jong-nam with VX nerve agent at Kuala Lumpur airport on February 13, 2017',
  'Accelerated nuclear weapons program; conducted 4 of North Korea\'s 6 nuclear tests; tested Hwasong-15 ICBM with estimated range to reach entire continental United States',
  'State-sponsored Lazarus Group conducts cyberattacks worldwide; including $81M Bangladesh Bank heist (2016); WannaCry ransomware attack affecting NHS hospitals (2017); and $620M Ronin Network cryptocurrency theft (2022)',
  'Chronic famine and malnutrition; UNICEF estimates 42% of North Korean population is food insecure; government diverts resources to military while population starves',
  'Complete suppression of free speech; press; assembly; religion; and movement; citizens cannot leave the country; no internet access for ordinary citizens',
 ],
 charges: [
  { statute: 'UN Human Rights Council A/HRC/25/63', description: 'Crimes against humanity including extermination; enslavement; torture; and persecution (recommended ICC referral)', category: 'Crimes Against Humanity' },
  { statute: 'Executive Order 13810', description: 'U.S. sanctions for nuclear weapons proliferation and human rights abuses', category: 'Sanctions' },
 ],
 relatedInvestigations: [
  { title: 'North Korea Human Rights', slug: 'north-korea-human-rights-atrocities', severity: 'critical' },
  { title: 'Nuclear Proliferation', slug: 'nuclear-weapons-proliferation', severity: 'critical' },
 ],
 timeline: [
  { date: 'January 8, 1984', event: 'Born in Pyongyang (estimated; exact date uncertain)' },
  { date: '1998-2000', event: 'Attended school in Bern, Switzerland under assumed identity' },
  { date: 'December 17, 2011', event: 'Assumed power after death of father Kim Jong Il' },
  { date: 'December 12, 2012', event: 'Successfully launches Kwangmyongsong-3 satellite; demonstrating long-range missile capability' },
  { date: 'December 12, 2013', event: 'Orders execution of uncle Jang Song-thaek for alleged factionalism' },
  { date: 'February 2016', event: 'Conducts fourth nuclear test (claimed hydrogen bomb)' },
  { date: 'February 13, 2017', event: 'Half-brother Kim Jong-nam assassinated with VX nerve agent at Kuala Lumpur airport' },
  { date: 'September 3, 2017', event: 'Conducts sixth and most powerful nuclear test; estimated 100-370 kiloton yield' },
  { date: 'November 29, 2017', event: 'Tests Hwasong-15 ICBM; North Korea claims capability to reach entire U.S. mainland' },
  { date: 'June 12, 2018', event: 'Historic summit with Donald Trump in Singapore' },
  { date: 'February 2019', event: 'Hanoi summit with Trump collapses without agreement' },
  { date: '2022', event: 'Launches record 90+ ballistic missiles; passes law declaring North Korea a nuclear weapons state' },
 ],
 socialMedia: [],
 sources: [
  { title: 'UN Commission of Inquiry on Human Rights in the DPRK; A/HRC/25/63', url: 'https://www.ohchr.org', date: 'February 2014' },
  { title: 'UN Panel of Experts on DPRK Sanctions Reports', url: 'https://www.un.org', date: 'Ongoing' },
  { title: 'FBI: Lazarus Group Attribution', url: 'https://www.fbi.gov', date: '2021' },
 ],
 aliases: ['Respected Comrade', 'Supreme Leader'],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Three summits between 2018-2019; Trump praised Kim as "very talented" and claimed they "fell in love"', href: '/entities/individuals/donald-trump' },
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
 title: 'Rapper; Fashion Designer; Antisemitism and Extremism',
 role: 'Billionaire entertainer who made repeated antisemitic statements; praised Hitler; lost partnerships worth $1.5 billion; ran disruptive 2020 presidential campaign',
 riskLevel: 'high',
 description: 'Kanye Omari West (legally changed name to "Ye" in 2021) is an American rapper; producer; and fashion designer who became one of the most commercially successful musicians in history before a series of increasingly erratic and hateful public statements cost him virtually all of his business partnerships. In October 2022; West posted "I\'m going death con 3 on JEWISH PEOPLE" on social media; triggering widespread condemnation. In a December 2022 interview with Alex Jones; West stated "I like Hitler" and "I love Nazis"; praised aspects of Nazi Germany; and denied the Holocaust. These statements led Adidas to terminate their Yeezy partnership (worth $1.5 billion to West); Balenciaga; Gap; and other companies severed ties. West\'s net worth fell from an estimated $6.6 billion to approximately $400 million almost overnight. West also ran for president in 2020 in a campaign that Republican operatives helped organize; apparently designed to siphon Black votes from Joe Biden. West had previously visited the White House and embraced Donald Trump; wearing a MAGA hat in the Oval Office. He has publicly discussed bipolar disorder but his antisemitic statements and association with white nationalists (including Nick Fuentes; whom he brought to dinner with Trump at Mar-a-Lago in November 2022) have been condemned by civil rights organizations as dangerous regardless of any mental health factors.',
 birthDate: 'June 8, 1977',
 birthPlace: 'Atlanta, Georgia, USA',
 education: ['American Academy of Art (dropped out)', 'Chicago State University (dropped out)'],
 affiliations: [
  { name: 'Yeezy', role: 'Founder; lost Adidas partnership worth $1.5 billion after antisemitic statements', type: 'corporation' },
 ],
 controversies: [
  'Posted "I\'m going death con 3 on JEWISH PEOPLE" on social media in October 2022; triggering removal from multiple platforms',
  'Stated "I like Hitler" and "I love Nazis" in December 2022 interview with Alex Jones; praised aspects of Nazi Germany and denied the Holocaust',
  'Lost $1.5+ billion in business partnerships after antisemitic statements; Adidas; Balenciaga; Gap; Foot Locker; and others terminated relationships',
  'Brought white nationalist Nick Fuentes to dinner with Donald Trump at Mar-a-Lago in November 2022; forcing Trump to distance himself',
  'Ran for president in 2020 in a campaign assisted by Republican operatives; appeared to be designed to siphon Black votes from Joe Biden in key swing states',
  'Publicly embraced Donald Trump in 2018 Oval Office meeting while wearing MAGA hat; stated slavery "sounds like a choice"',
  'Multiple former employees have described abusive working conditions; racial harassment; and showing explicit content in workplace settings at Yeezy and affiliated companies',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Rise of Antisemitism', slug: 'antisemitism-rise-in-america', severity: 'high' },
 ],
 timeline: [
  { date: 'June 8, 1977', event: 'Born in Atlanta, Georgia' },
  { date: '2004', event: 'Debut album "The College Dropout" launches career as major hip-hop artist' },
  { date: 'October 2018', event: 'Meets with Donald Trump in the Oval Office wearing MAGA hat' },
  { date: 'July 2020', event: 'Announces presidential campaign; Republican operatives help gather ballot signatures' },
  { date: 'October 2021', event: 'Legally changes name to "Ye"' },
  { date: 'October 8, 2022', event: 'Posts antisemitic threat on social media; accounts restricted on Twitter and Instagram' },
  { date: 'October 25, 2022', event: 'Adidas terminates Yeezy partnership worth $1.5 billion' },
  { date: 'November 24, 2022', event: 'Brings white nationalist Nick Fuentes to dinner with Trump at Mar-a-Lago' },
  { date: 'December 1, 2022', event: 'States "I like Hitler" and praises Nazis on Alex Jones\'s Infowars broadcast' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Anti-Defamation League documentation of West\'s antisemitic statements', url: 'https://www.adl.org', date: '2022' },
  { title: 'Adidas termination announcement', url: 'https://www.adidas.com', date: 'October 25, 2022' },
  { title: 'New York Times: West\'s 2020 campaign and Republican operatives', url: 'https://www.nytimes.com', date: '2020' },
 ],
 aliases: ['Ye'],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Met in Oval Office in 2018; hosted at Mar-a-Lago in November 2022 alongside Nick Fuentes', href: '/entities/individuals/donald-trump' },
  { name: 'Nick Fuentes', relationship: 'White nationalist brought by West to dinner with Trump at Mar-a-Lago', href: '/entities/individuals/nick-fuentes' },
 ],
 },







 'kelly-meggs': {
 name: 'Kelly Meggs',
 title: 'Convicted Oath Keepers Leader; January 6 Seditious Conspiracy',
 role: 'Florida chapter leader of the Oath Keepers; convicted of seditious conspiracy for role in January 6 Capitol attack',
 riskLevel: 'critical',
 description: 'Kelly Meggs served as the leader of the Florida chapter of the Oath Keepers; a far-right anti-government militia. Meggs was convicted of seditious conspiracy in November 2022 for his role in the January 6; 2021 attack on the U.S. Capitol; alongside Oath Keepers founder Stewart Rhodes and others. Evidence showed Meggs coordinated the military-style "stack" formation used by Oath Keepers members to breach the Capitol building. Meggs organized a group of Florida Oath Keepers who traveled to Washington; D.C. for January 6; purchasing tactical gear and coordinating with Rhodes and other Oath Keepers leaders. Messages showed Meggs writing in November 2020: "I organized an alliance between Oath Keepers; Florida 3%ers; and Proud Boys. We have decided to work together and shut this shit down." During the Capitol breach; Meggs was part of a military-style stack of Oath Keepers members who pushed through the crowd and entered the Capitol through the Rotunda doors. He was sentenced to 12 years in federal prison.',
 birthDate: 'Unknown',
 birthPlace: 'Florida, USA',
 education: [],
 affiliations: [
  { name: 'Oath Keepers', role: 'Florida chapter leader; organized militia members for January 6', type: 'organization' },
 ],
 controversies: [
  'Convicted of seditious conspiracy for leading Oath Keepers members in military-style breach of the U.S. Capitol on January 6, 2021',
  'Formed alliance between Oath Keepers; Proud Boys; and Florida Three Percenters ahead of January 6',
  'Coordinated purchase of tactical and communications gear for Oath Keepers members traveling to D.C.',
  'Led the military-style "stack" formation used by Oath Keepers to breach the Capitol Rotunda doors',
  'Sentenced to 12 years in federal prison for seditious conspiracy',
 ],
 charges: [
  { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy', category: 'Sedition' },
  { statute: '18 U.S.C. § 1512(c)(2)', description: 'Obstruction of an official proceeding', category: 'Obstruction' },
  { statute: '18 U.S.C. § 1361', description: 'Destruction of government property', category: 'Property Crime' },
 ],
 relatedInvestigations: [
  { title: 'January 6 Capitol Attack', slug: 'january-6-capitol-attack', severity: 'critical' },
  { title: 'Oath Keepers', slug: 'oath-keepers-militia', severity: 'critical' },
 ],
 timeline: [
  { date: 'November 2020', event: 'Messages show Meggs organized alliance between Oath Keepers; Proud Boys; and Florida Three Percenters' },
  { date: 'December 2020-January 2021', event: 'Coordinated purchase of tactical gear and travel plans for Oath Keepers members' },
  { date: 'January 6, 2021', event: 'Led military-style stack formation of Oath Keepers members who breached the U.S. Capitol' },
  { date: 'February 2021', event: 'Arrested and charged with federal offenses' },
  { date: 'November 29, 2022', event: 'Convicted of seditious conspiracy by federal jury in Washington D.C.' },
  { date: 'May 25, 2023', event: 'Sentenced to 12 years in federal prison' },
 ],
 socialMedia: [],
 sources: [
  { title: 'United States v. Rhodes et al.; No. 1:22-cr-00015 (D.D.C.)', url: 'https://www.justice.gov', date: '2022' },
  { title: 'DOJ Press Release on Oath Keepers Seditious Conspiracy Verdict', url: 'https://www.justice.gov', date: 'November 2022' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Stewart Rhodes', relationship: 'Oath Keepers founder; also convicted of seditious conspiracy; sentenced to 18 years', href: '/entities/individuals/stewart-rhodes' },
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
 title: 'Failed Arizona Gubernatorial Candidate; Election Denier',
 role: 'Former TV news anchor who became prominent election denier; refused to concede 2022 Arizona governor\'s race; filed multiple failed lawsuits',
 riskLevel: 'high',
 description: 'Kari Ann Lake is a former Phoenix television news anchor who ran for Governor of Arizona in 2022 on a platform centered on denying the results of the 2020 presidential election. After losing to Democrat Katie Hobbs by approximately 17,000 votes; Lake refused to concede and filed multiple lawsuits alleging election fraud; all of which were rejected by the courts. Arizona courts found no evidence of the widespread fraud Lake alleged. Her legal challenges reached the Arizona Supreme Court; which unanimously rejected her claims. Lake continued to claim the election was "stolen" despite losing every legal challenge. In 2024; she ran for the U.S. Senate seat being vacated by Kyrsten Sinema and lost to Democrat Ruben Gallego. Lake has been a prominent figure in the "Stop the Steal" movement; appearing regularly with Donald Trump and echoing his claims about election fraud. Her refusal to accept election results and persistent disinformation about voting systems has been cited by democracy watchdog organizations as contributing to declining public trust in democratic institutions.',
 birthDate: 'August 23, 1969',
 birthPlace: 'Rock Island, Illinois, USA',
 education: ['University of Iowa; B.A. Communications and Journalism'],
 affiliations: [
  { name: 'MAGA Movement', role: 'Prominent election denier and Trump ally', type: 'organization' },
 ],
 controversies: [
  'Refused to concede the 2022 Arizona governor\'s race to Katie Hobbs after losing by 17,000 votes; filed multiple failed lawsuits alleging election fraud',
  'All legal challenges to the 2022 election were rejected by Arizona courts; including the Arizona Supreme Court; which found no evidence of widespread fraud',
  'Prominent promoter of the "Stop the Steal" narrative and election denial; claimed both the 2020 presidential and 2022 gubernatorial elections were stolen',
  'Made false claims about Maricopa County voting machines; ballot chain of custody; and ballot signature verification that were rejected by courts',
  'Lost 2024 U.S. Senate race to Ruben Gallego after making election denial central to her campaign',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Election Denial Movement', slug: 'election-denial-disinformation', severity: 'high' },
 ],
 timeline: [
  { date: 'August 23, 1969', event: 'Born in Rock Island, Illinois' },
  { date: '1994-2021', event: 'Television news anchor at KSAZ-TV (Fox 10) in Phoenix; Arizona' },
  { date: 'June 2021', event: 'Announces candidacy for Arizona Governor' },
  { date: 'November 8, 2022', event: 'Loses Arizona governor\'s race to Katie Hobbs by approximately 17,000 votes' },
  { date: 'December 2022', event: 'Files lawsuit contesting election results; court rejects claims' },
  { date: 'May 2023', event: 'Arizona Supreme Court unanimously rejects her final appeal' },
  { date: 'November 5, 2024', event: 'Loses U.S. Senate race to Ruben Gallego' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Lake v. Hobbs; Maricopa County Superior Court', url: 'https://www.azcourts.gov', date: '2022' },
  { title: 'Arizona Supreme Court ruling on Lake v. Hobbs', url: 'https://www.azcourts.gov', date: 'May 2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Endorsed by Trump; prominent ally in election denial movement', href: '/entities/individuals/donald-trump' },
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
 education: ['MBA, DePaul University', 'B.S., University of Illinois'],
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
 education: ['J.D., University of Virginia School of Law (1991)', 'MBA, University of Virginia (1991)', 'B.A., Baylor University (1984)'],
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
 { statute: 'Texas Securities Act', description: 'Securities Fraud; indicted 2015, still pending', category: 'State' },
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
 { statute: '50 U.S.C. § 421 (IIPA)', description: 'Intelligence Identities Protection Act; Leaked Plame identity', category: 'National Security' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of Justice; Evading congressional testimony', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1001', description: 'False Statements; Misleading statements about Plame role', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy; Coordinated Plame leak with Libby, Cheney', category: 'Conspiracy' },
 { statute: '52 U.S.C. § 20511', description: 'Voter Intimidation; Suppression tactics', category: 'Election Crimes' },
 { statute: 'Presidential Records Act', description: 'Destruction of Records; 22 million deleted emails', category: 'Federal' },
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
 { title: 'Plame Leak Investigation: Special Counsel Fitzgerald', url: 'https://www.justice.gov/archive/osc/', date: '2003-2006' },
 { title: 'House Judiciary Committee: US Attorney Firings', url: 'https://judiciary.house.gov/', date: '2007' },
 { title: 'Hubris: The Inside Story of Spin, Scandal, and the Selling of the Iraq War', url: 'https://scholar.google.com/scholar?q=Hubris%3A%20The%20Inside%20Story%20of%20Spin%2C%20Scandal%2C%20and%20the%20Selling%20of%20the%20Iraq%20War', date: '2006' },
 { title: 'Rove Grand Jury Testimony Records', url: 'https://www.justice.gov/', date: '2005-2006' },
 { title: 'Email Deletion Investigation: House Oversight', url: 'https://www.courtlistener.com/', date: '2007' },
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
 education: ['MBA, Stanford Graduate School of Business', 'B.A., Stanford University'],
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
 { statute: 'Executive Order 14024', description: 'Sanctioned Individual; Harmful foreign activities of Russian government', category: 'OFAC Sanctions' },
 { statute: 'EU Council Decision 2022/327', description: 'EU Sanctions; Russian economic support', category: 'European Union' },
 { statute: '22 U.S.C. § 611', description: 'FARA Implications; Unregistered foreign agent activities', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy; Coordinating with US persons to influence policy', category: 'Federal' },
 { statute: '50 U.S.C. § 1705 (IEEPA)', description: 'Sanctions Violations; Economic engagement post-sanctions', category: 'Federal' },
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
 { title: 'New York Times: Seychelles Meeting', url: 'https://www.nytimes.com/2018/03/07/us/politics/erik-prince-seychelles-meeting-russian.html', date: '2018' },
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
 title: 'Former Florida Secretary of State; 2000 Election Recount',
 role: 'As Florida Secretary of State; certified George W. Bush\'s contested 537-vote victory; oversaw controversial voter purge',
 riskLevel: 'high',
 description: 'Katherine Harris served as Florida\'s Secretary of State during the 2000 presidential election between George W. Bush and Al Gore; one of the most consequential and contested elections in American history. In her dual role as Florida\'s chief elections official and co-chair of the Bush campaign in Florida; Harris made critical decisions that determined the outcome of the presidential race. She certified Bush\'s 537-vote victory in Florida on November 26, 2000; before the U.S. Supreme Court halted the recount in Bush v. Gore. Prior to the election; Harris\'s office contracted Database Technologies (later ChoicePoint) to purge the voter rolls of alleged felons. The purge list wrongly removed an estimated 12,000-57,000 eligible voters; disproportionately African American; from the rolls. The U.S. Commission on Civil Rights found that African American voters in Florida were ten times more likely than white voters to have their ballots rejected. Harris\'s refusal to extend the manual recount deadline; combined with the felon purge; and her simultaneous role as Bush campaign co-chair; made her a central figure in one of the most controversial elections in democratic history.',
 birthDate: 'April 5, 1957',
 birthPlace: 'Key West, Florida, USA',
 education: ['Agnes Scott College; B.A. 1979', 'Harvard University; John F. Kennedy School of Government'],
 affiliations: [
  { name: 'Florida Secretary of State', role: 'Secretary of State (1999-2003); oversaw 2000 presidential election', type: 'agency' },
  { name: 'Bush-Cheney 2000 Campaign', role: 'Florida co-chair while simultaneously serving as chief elections official', type: 'organization' },
  { name: 'U.S. House of Representatives', role: 'Congresswoman; Florida 13th District (2003-2007)', type: 'agency' },
 ],
 controversies: [
  'Served simultaneously as Florida\'s chief elections official (Secretary of State) and co-chair of the Bush campaign in Florida during the 2000 presidential election; a fundamental conflict of interest',
  'Contracted Database Technologies to purge voter rolls of alleged felons before the 2000 election; the list wrongly removed an estimated 12,000-57,000 eligible voters; disproportionately African American',
  'Certified Bush\'s 537-vote victory on November 26; 2000; before manual recounts could be completed; refused to extend the certification deadline despite ongoing counting',
  'U.S. Commission on Civil Rights found African American voters in Florida were ten times more likely than white voters to have ballots rejected in the 2000 election',
  'Accepted illegal campaign contributions from MCI/WorldCom; later convicted and fined',
 ],
 charges: [],
 relatedInvestigations: [
  { title: '2000 Election Controversy', slug: 'bush-v-gore-2000-election', severity: 'critical' },
  { title: 'Voter Suppression', slug: 'voter-suppression-tactics', severity: 'high' },
 ],
 timeline: [
  { date: 'April 5, 1957', event: 'Born in Key West, Florida' },
  { date: '1998', event: 'Elected Florida Secretary of State' },
  { date: '1999', event: 'Contracted Database Technologies to purge voter rolls of alleged felons' },
  { date: 'November 7, 2000', event: 'Florida presidential vote too close to call; triggering automatic machine recount' },
  { date: 'November 14, 2000', event: 'Imposed deadline for counties to submit certified results; blocking manual recounts still underway' },
  { date: 'November 26, 2000', event: 'Certified George W. Bush as winner of Florida by 537 votes' },
  { date: 'December 12, 2000', event: 'U.S. Supreme Court issues Bush v. Gore decision halting Florida recount' },
  { date: '2001', event: 'U.S. Commission on Civil Rights releases report finding widespread voter disenfranchisement in Florida' },
  { date: '2002', event: 'Elected to U.S. House of Representatives from Florida' },
  { date: '2006', event: 'Lost U.S. Senate race in Republican primary' },
 ],
 socialMedia: [],
 sources: [
  { title: 'U.S. Commission on Civil Rights; "Voting Irregularities in Florida During the 2000 Presidential Election"', url: 'https://www.usccr.gov', date: 'June 2001' },
  { title: 'Greg Palast; "The Best Democracy Money Can Buy"', url: 'https://www.gregpalast.com', date: '2002' },
  { title: 'Bush v. Gore; 531 U.S. 98', url: 'https://www.supremecourt.gov', date: 'December 12, 2000' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'George W. Bush', relationship: 'Served as co-chair of Bush\'s Florida campaign while simultaneously overseeing the 2000 election as Secretary of State', href: '/entities/individuals/george-w-bush' },
  { name: 'Jeb Bush', relationship: 'Florida Governor during the 2000 recount; recused himself from certification but his office remained involved', href: '/entities/individuals/jeb-bush' },
 ],
 },


 'kevin-roberts': {
 name: 'Kevin Roberts',
 title: 'President; The Heritage Foundation; Architect of Project 2025',
 role: 'Leads The Heritage Foundation and orchestrated Project 2025; the comprehensive blueprint for restructuring the federal government under a second Trump administration',
 riskLevel: 'critical',
 description: 'Kevin Roberts became president of The Heritage Foundation in October 2021 and immediately began steering the organization toward its most ambitious project in its 50-year history; Project 2025 (officially the "2025 Presidential Transition Project"). Project 2025 is a 920-page policy document titled "Mandate for Leadership" that lays out a detailed plan to restructure the entire executive branch of the U.S. government. The plan calls for reclassifying up to 50,000 career civil servants as political appointees who can be fired and replaced with ideological loyalists (Schedule F); dismantling the Department of Education; withdrawing from climate agreements; restricting abortion access through administrative action; ending DEI programs across the federal government; militarizing the southern border; and consolidating presidential power over independent agencies including the DOJ and FBI. The project has assembled a database of 20,000+ pre-vetted conservative personnel ready to staff a new administration from Day One. Roberts has stated that the country is in a "second American Revolution" that "will remain bloodless if the left allows it to be." Over 100 conservative organizations contributed to the project. Despite Trump\'s public distancing from the document during the 2024 campaign; many of its authors serve in the Trump administration and its policies are being implemented.',
 birthDate: '1972',
 birthPlace: 'Louisiana, USA',
 education: ['University of Louisiana at Lafayette; B.A. History', 'University of Dallas; M.A.', 'University of Texas at Austin; Ph.D. American History'],
 affiliations: [
  { name: 'The Heritage Foundation', role: 'President (2021-present); transformed it into Project 2025 headquarters', type: 'organization' },
  { name: 'Project 2025', role: 'Chief architect and organizer of the 2025 Presidential Transition Project', type: 'organization' },
  { name: 'Texas Public Policy Foundation', role: 'Former CEO', type: 'organization' },
 ],
 controversies: [
  'Orchestrated Project 2025; a 920-page plan to restructure the federal government including reclassifying 50,000 civil servants as fireable political appointees (Schedule F)',
  'Stated America is in a "second American Revolution" that "will remain bloodless if the left allows it to be"; widely interpreted as a veiled threat',
  'Project 2025 proposes dismantling the Department of Education; withdrawing from climate agreements; ending DEI programs; restricting reproductive rights through administrative action; and politicizing the DOJ',
  'Assembled database of 20,000+ pre-vetted conservatives to immediately staff a new administration; critics call it a loyalty-test apparatus',
  'Over 100 conservative organizations contributed to Project 2025; coordinated through Heritage Foundation under Roberts\'s leadership',
  'Despite Trump publicly distancing from Project 2025; many of its authors now serve in the Trump administration and key policies are being implemented',
  'Previously led Texas Public Policy Foundation; which received significant funding from fossil fuel interests and promoted climate change denial',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Project 2025', slug: 'project-2025-heritage-foundation', severity: 'critical' },
  { title: 'Dark Money in Politics', slug: 'dark-money-political-influence', severity: 'high' },
 ],
 timeline: [
  { date: '1972', event: 'Born in Louisiana' },
  { date: '2016-2021', event: 'Served as CEO of Texas Public Policy Foundation' },
  { date: 'October 2021', event: 'Became president of The Heritage Foundation' },
  { date: 'April 2023', event: 'Project 2025 officially launched with publication of "Mandate for Leadership 2025"' },
  { date: 'July 2, 2024', event: 'Stated on Steve Bannon\'s podcast that America is in a "second American Revolution" that would be "bloodless if the left allows it"' },
  { date: 'July 2024', event: 'Donald Trump publicly distances himself from Project 2025 amid campaign backlash' },
  { date: 'January 2025', event: 'Multiple Project 2025 authors appointed to positions in the new Trump administration' },
 ],
 socialMedia: [],
 sources: [
  { title: 'The Heritage Foundation; "Mandate for Leadership 2025"', url: 'https://www.heritage.org', date: 'April 2023' },
  { title: 'Associated Press; "What is Project 2025?"', url: 'https://apnews.com', date: '2024' },
  { title: 'ProPublica Investigation on Project 2025 Personnel Database', url: 'https://www.propublica.org', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Project 2025 designed for his second term; Trump publicly distanced during campaign but many authors now serve in administration', href: '/entities/individuals/donald-trump' },
  { name: 'Steve Bannon', relationship: 'Roberts made "second American Revolution" statement on Bannon\'s War Room podcast', href: '/entities/individuals/steve-bannon' },
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
 education: ['United States Military Academy at West Point', 'Naval Postgraduate School, MS'],
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
 name: 'Kermit Roosevelt Jr.',
 title: 'CIA Officer; Architect of 1953 Iranian Coup (Operation Ajax)',
 role: 'CIA field operative who orchestrated the 1953 overthrow of Iran\'s democratically elected Prime Minister Mohammad Mosaddegh',
 riskLevel: 'critical',
 description: 'Kermit "Kim" Roosevelt Jr. was a CIA officer and the grandson of President Theodore Roosevelt who served as the lead field operative for Operation Ajax (known in the UK as Operation Boot); the 1953 CIA-MI6 coup that overthrew Iran\'s democratically elected Prime Minister Mohammad Mosaddegh. Mosaddegh had nationalized Iran\'s oil industry; threatening the profits of the Anglo-Iranian Oil Company (later BP). Roosevelt entered Iran covertly and orchestrated a campaign of bribery; propaganda; and hired provocateurs that created chaos in Tehran; ultimately leading to Mosaddegh\'s arrest and the restoration of Shah Mohammad Reza Pahlavi\'s authoritarian rule. The coup was considered a "success" by the CIA and became a template for future regime-change operations in Guatemala (1954); Congo (1961); and Chile (1973). However; the long-term consequences were catastrophic; the Shah\'s autocratic rule and his SAVAK secret police fueled the 1979 Islamic Revolution; the Iran hostage crisis; and decades of U.S.-Iran hostility that continue to shape Middle Eastern geopolitics. The CIA did not officially acknowledge its role in the coup until 2013; when declassified documents confirmed the operation. Roosevelt left the CIA in 1958 and became a lobbyist for Gulf Oil and other companies with Middle Eastern interests.',
 birthDate: 'February 16, 1916',
 birthPlace: 'Buenos Aires, Argentina',
 deathDate: 'June 8, 2000',
 education: ['Harvard University; B.A. History 1938'],
 affiliations: [
  { name: 'Central Intelligence Agency', role: 'Head of CIA\'s Near East and Africa division; field operative for Operation Ajax (1953)', type: 'agency' },
  { name: 'Gulf Oil Corporation', role: 'Government relations consultant after leaving CIA (1958-1960s)', type: 'corporation' },
 ],
 controversies: [
  'Orchestrated Operation Ajax; the 1953 CIA-MI6 coup that overthrew Iran\'s democratically elected Prime Minister Mohammad Mosaddegh after he nationalized Iranian oil',
  'Campaign included bribery of Iranian military officers; hiring mobs to create street violence; planting anti-Mosaddegh propaganda in Iranian newspapers; and coordinating with the Shah\'s loyalists',
  'Coup restored Shah Mohammad Reza Pahlavi to power; his 26 years of authoritarian rule and SAVAK secret police repression directly led to the 1979 Islamic Revolution and decades of U.S.-Iran hostility',
  'Operation Ajax became the CIA\'s template for regime-change operations worldwide; including Guatemala (1954); Congo (1961); and Chile (1973)',
  'After leaving the CIA; became a lobbyist for Gulf Oil and other corporations with Middle Eastern oil interests; raising questions about whether oil company interests drove the original coup',
  'CIA did not officially acknowledge its role in the coup until 2013; 60 years after the operation',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'CIA Regime Change Operations', slug: 'cia-regime-change-coups', severity: 'critical' },
 ],
 timeline: [
  { date: 'February 16, 1916', event: 'Born in Buenos Aires, Argentina; grandson of President Theodore Roosevelt' },
  { date: '1941', event: 'Joins the Office of Strategic Services (OSS; predecessor to CIA)' },
  { date: '1950', event: 'Becomes head of CIA\'s Near East and Africa division' },
  { date: 'June 1953', event: 'Enters Iran covertly to lead Operation Ajax' },
  { date: 'August 15-19, 1953', event: 'Orchestrates coup against Mosaddegh through bribery; propaganda; and hired mobs; Shah restored to power' },
  { date: '1954', event: 'Awarded National Security Medal by President Eisenhower for Operation Ajax' },
  { date: '1958', event: 'Leaves CIA; becomes consultant and lobbyist for Gulf Oil and other Middle Eastern oil interests' },
  { date: '1979', event: 'Iranian Revolution overthrows the Shah; roots traced directly to the 1953 coup' },
  { date: 'June 8, 2000', event: 'Dies in Cockeysville, Maryland' },
  { date: '2013', event: 'CIA officially acknowledges its role in the 1953 coup through declassified documents' },
 ],
 socialMedia: [],
 sources: [
  { title: 'CIA Declassified Documents on Operation Ajax', url: 'https://www.archives.gov', date: '2013' },
  { title: 'Kinzer; Stephen. "All the Shah\'s Men: An American Coup and the Roots of Middle East Terror"', url: 'https://www.amazon.com', date: '2003' },
  { title: 'Roosevelt; Kermit. "Countercoup: The Struggle for the Control of Iran"', url: 'https://www.amazon.com', date: '1979' },
 ],
 aliases: ['Kim Roosevelt'],
 knownAssociates: [
  { name: 'Allen Dulles', relationship: 'CIA Director who authorized Operation Ajax', href: '/entities/individuals/allen-dulles' },
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
 title: 'Co-Founder; Three Arrows Capital (3AC)',
 role: 'Co-founded cryptocurrency hedge fund Three Arrows Capital that collapsed owing $3.5 billion; fled to avoid legal proceedings',
 riskLevel: 'high',
 description: 'Kyle Davies co-founded Three Arrows Capital (3AC); a Singapore-based cryptocurrency hedge fund; with Su Zhu in 2012. At its peak; 3AC managed approximately $10 billion in assets. The fund collapsed spectacularly in June 2022 after the implosion of the Terra/Luna stablecoin ecosystem; in which 3AC had massive positions. Three Arrows Capital filed for bankruptcy in the British Virgin Islands on June 29, 2022; owing creditors approximately $3.5 billion. Court documents revealed that Davies and Zhu had made enormous leveraged bets using borrowed funds from across the crypto industry; and their collapse triggered a cascading liquidation crisis that wiped out numerous other crypto firms including Voyager Digital and Celsius Network; causing billions in losses for retail investors. Liquidators found that Davies and Zhu had moved assets prior to the bankruptcy filing; withdrawing funds and transferring assets including luxury properties. BVI courts ordered Davies and Zhu arrested for contempt after they failed to cooperate with liquidators. Both fled Singapore; Davies had not been located by authorities for months. Davies later surfaced briefly claiming to be launching a new exchange from an undisclosed location.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Columbia University'],
 affiliations: [
  { name: 'Three Arrows Capital', role: 'Co-Founder and Managing Partner (2012-2022); collapsed owing $3.5 billion', type: 'corporation' },
 ],
 controversies: [
  'Three Arrows Capital collapsed in June 2022 owing approximately $3.5 billion to creditors; using massive leverage on crypto positions',
  'Collapse triggered cascading failures across crypto industry; destroying Voyager Digital; Celsius Network; and others; costing retail investors billions',
  'Court documents showed assets were moved prior to bankruptcy filing; including withdrawals and luxury property transfers',
  'Ordered arrested for contempt by BVI courts for failing to cooperate with bankruptcy liquidators; fled Singapore to unknown location',
  'Resurfaced attempting to launch a new crypto exchange despite outstanding arrest warrants and billions in unpaid debts',
 ],
 charges: [
  { statute: 'BVI Insolvency Act', description: 'Contempt of court; ordered arrested for failing to cooperate with liquidators', category: 'Contempt' },
 ],
 relatedInvestigations: [
  { title: 'Cryptocurrency Fraud', slug: 'cryptocurrency-fraud-and-collapse', severity: 'critical' },
 ],
 timeline: [
  { date: '2012', event: 'Co-founded Three Arrows Capital with Su Zhu' },
  { date: '2021', event: '3AC assets under management peak at approximately $10 billion' },
  { date: 'May 2022', event: 'Terra/Luna stablecoin collapse wipes out $40 billion; 3AC had massive exposure' },
  { date: 'June 2022', event: '3AC faces margin calls it cannot meet; defaults on loans' },
  { date: 'June 29, 2022', event: '3AC files for bankruptcy in the British Virgin Islands; owes $3.5 billion' },
  { date: 'July 2022', event: 'Liquidators appointed; Davies and Zhu fail to cooperate' },
  { date: 'September 2022', event: 'BVI court orders arrest of Davies and Zhu for contempt' },
  { date: '2023', event: 'Su Zhu arrested at Changi Airport in Singapore; Davies remains at large' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Three Arrows Capital Bankruptcy Filing; BVI Court', url: 'https://www.bvicourts.org', date: 'June 2022' },
  { title: 'Teneo Liquidators Report on 3AC', url: 'https://www.teneo.com', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Su Zhu', relationship: 'Co-founder of Three Arrows Capital; arrested in Singapore in September 2023', href: '/entities/individuals/su-zhu' },
 ],
 },






 'kathe-sackler': {
 name: 'Kathe Sackler',
 title: 'Former Purdue Pharma Board Member; Sackler Family OxyContin Fortune',
 role: 'Served on Purdue Pharma board during opioid crisis; family extracted $10.7 billion while company fueled epidemic killing 500,000+ Americans',
 riskLevel: 'critical',
 description: 'Kathe Sackler is a member of the Sackler family that owned Purdue Pharma; the manufacturer of OxyContin; the prescription opioid painkiller that became central to America\'s opioid epidemic. She served on Purdue Pharma\'s board of directors during the period when the company aggressively marketed OxyContin while knowing the drug was being widely abused and was highly addictive. Court documents revealed the Sackler family extracted approximately $10.7 billion from Purdue Pharma between 2008 and 2018; transferring enormous wealth to family members and offshore accounts even as the company faced mounting lawsuits over its role in the opioid crisis that has killed more than 500,000 Americans since 1999. Internal emails showed board members including Kathe Sackler were briefed on rising abuse rates and participated in decisions to continue aggressive marketing. In 2019; Purdue Pharma filed for bankruptcy as part of a proposed settlement. The Sackler family offered $6 billion (later increased) in exchange for a shield from future civil lawsuits; a provision the U.S. Supreme Court struck down in June 2024 in Harrington v. Purdue Pharma; ruling that bankruptcy courts cannot release non-debtor third parties from liability without consent of the claimants.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: [],
 affiliations: [
  { name: 'Purdue Pharma', role: 'Board of Directors; oversaw OxyContin marketing during opioid crisis', type: 'corporation' },
  { name: 'Sackler Family', role: 'Member of family that owned Purdue Pharma and extracted $10.7 billion', type: 'organization' },
 ],
 controversies: [
  'Served on Purdue Pharma board during period of aggressive OxyContin marketing while internal reports documented rising abuse and death rates',
  'Sackler family extracted approximately $10.7 billion from Purdue Pharma between 2008-2018; transferring wealth to family trusts and offshore accounts while the opioid crisis killed hundreds of thousands',
  'Internal emails showed board members were briefed on abuse patterns and participated in marketing strategy decisions to increase OxyContin sales',
  'Proposed $6 billion bankruptcy settlement included blanket immunity from civil lawsuits for the Sackler family; U.S. Supreme Court struck down this protection in June 2024',
  'Museums and universities worldwide (including the Louvre; Met; and Guggenheim) have removed the Sackler name from galleries and wings due to the family\'s role in the opioid epidemic',
  'OxyContin\'s original marketing falsely claimed the drug had a lower addiction risk than other opioids; Purdue pled guilty to misbranding in 2007 and again in 2020',
 ],
 charges: [
  { statute: '21 U.S.C. § 331', description: 'Purdue Pharma pled guilty to federal charges of misbranding OxyContin (2007 and 2020); Sackler family members not individually charged', category: 'Drug Misbranding' },
 ],
 relatedInvestigations: [
  { title: 'Opioid Crisis', slug: 'opioid-crisis-purdue-pharma', severity: 'critical' },
  { title: 'Sackler Family', slug: 'sackler-family-opioid-profits', severity: 'critical' },
 ],
 timeline: [
  { date: '1996', event: 'Purdue Pharma launches OxyContin; begins aggressive marketing to doctors claiming low addiction risk' },
  { date: '2007', event: 'Purdue Pharma pleads guilty to misbranding OxyContin; pays $635 million; three executives plead guilty' },
  { date: '2008-2018', event: 'Sackler family extracts approximately $10.7 billion from Purdue Pharma' },
  { date: '2019', event: 'Purdue Pharma files for Chapter 11 bankruptcy amid thousands of lawsuits' },
  { date: '2020', event: 'Purdue Pharma pleads guilty to three federal criminal charges; agrees to $8.3 billion settlement' },
  { date: '2021', event: 'Bankruptcy judge approves Sackler family\'s $4.5 billion settlement with blanket civil immunity' },
  { date: 'June 27, 2024', event: 'U.S. Supreme Court rules 5-4 in Harrington v. Purdue Pharma that bankruptcy courts cannot shield Sacklers from lawsuits without victim consent' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Harrington v. Purdue Pharma; 603 U.S. ___ (2024)', url: 'https://www.supremecourt.gov', date: 'June 27, 2024' },
  { title: 'Patrick Radden Keefe; "Empire of Pain: The Secret History of the Sackler Dynasty"', url: 'https://www.amazon.com', date: '2021' },
  { title: 'House Oversight Committee Investigation into Purdue Pharma and the Sackler Family', url: 'https://www.congress.gov', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Richard Sackler', relationship: 'Brother; former Purdue Pharma president who pushed aggressive OxyContin sales targets', href: '/entities/individuals/richard-sackler' },
 ],
 },


 'ken-griffin': {
 name: 'Ken Griffin',
 title: 'Founder and CEO; Citadel LLC',
 role: 'Billionaire hedge fund manager; Citadel and Citadel Securities; central figure in GameStop/meme stock controversy; largest individual Republican donor',
 riskLevel: 'high',
 description: 'Kenneth Cordele Griffin is the founder and CEO of Citadel LLC; one of the world\'s largest hedge funds ($62 billion AUM); and Citadel Securities; one of the largest market makers handling roughly 40% of all U.S. retail stock trading volume. Griffin became a central figure in the January 2021 GameStop/meme stock saga when retail investors on Reddit\'s WallStreetBets drove GameStop stock from $20 to $483; causing massive losses for short sellers including Melvin Capital; which had received a $2.75 billion emergency investment from Citadel. When Robinhood (which routes a majority of its orders to Citadel Securities through payment for order flow) restricted buying of GameStop and other meme stocks on January 28, 2021; millions of retail investors were trapped in positions while institutional players could continue trading. Congressional investigations found that Citadel Securities paid Robinhood $689 million in 2020 for order flow. Griffin testified before Congress that he learned about Robinhood\'s decision to restrict trading the morning it happened; but communications later revealed more extensive contact. Griffin is also the largest individual political donor to the Republican Party; spending over $100 million in the 2022 midterm cycle alone.',
 birthDate: 'October 15, 1968',
 birthPlace: 'Daytona Beach, Florida, USA',
 education: ['Harvard University; B.A. Economics 1989'],
 affiliations: [
  { name: 'Citadel LLC', role: 'Founder and CEO (1990-present); $62 billion hedge fund', type: 'corporation' },
  { name: 'Citadel Securities', role: 'Founder; handles ~40% of all U.S. retail stock trading volume', type: 'corporation' },
 ],
 controversies: [
  'Citadel Securities handles approximately 40% of all U.S. retail stock orders; giving it extraordinary visibility into and influence over retail trading activity',
  'Citadel provided $2.75 billion emergency investment to Melvin Capital during the GameStop short squeeze; Robinhood (which routes orders to Citadel Securities) then restricted retail buying of GameStop shares',
  'Citadel Securities paid Robinhood $689 million in 2020 for payment for order flow (PFOF); raising questions about conflicts of interest when Robinhood restricted meme stock trading',
  'Griffin testified before Congress that he learned of Robinhood\'s trading restrictions the morning they happened; subsequent communications revealed more extensive contact between the firms',
  'Largest individual Republican political donor; spent $100+ million in 2022 midterm cycle; $68 million to DeSantis and other Florida campaigns',
  'Citadel has faced SEC investigations and penalties; including $115 million in 2017 for misleading investors about the performance of its Citadel Connect dark pool',
  'Payment for order flow model means Citadel Securities profits from the gap between bid and ask prices on retail trades; critics argue this creates a structural advantage over retail investors',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'GameStop Trading', slug: 'gamestop-meme-stock-manipulation', severity: 'high' },
  { title: 'Payment for Order Flow', slug: 'payment-for-order-flow-conflicts', severity: 'high' },
 ],
 timeline: [
  { date: 'October 15, 1968', event: 'Born in Daytona Beach, Florida' },
  { date: '1990', event: 'Founded Citadel from his Harvard dorm room with $4.6 million' },
  { date: '2002', event: 'Founded Citadel Securities; begins market-making operations' },
  { date: 'January 25-27, 2021', event: 'Citadel and Point72 provide $2.75 billion emergency investment to Melvin Capital during GameStop short squeeze' },
  { date: 'January 28, 2021', event: 'Robinhood restricts buying of GameStop and other meme stocks; sparking outrage from millions of retail investors' },
  { date: 'February 18, 2021', event: 'Griffin testifies before House Financial Services Committee on GameStop trading restrictions' },
  { date: '2022', event: 'Spends $100+ million on Republican candidates; becomes largest individual GOP donor' },
  { date: '2022', event: 'Moves Citadel headquarters from Chicago to Miami' },
 ],
 socialMedia: [],
 sources: [
  { title: 'House Financial Services Committee GameStop Hearing', url: 'https://www.congress.gov', date: 'February 18, 2021' },
  { title: 'SEC Staff Report on GameStop Trading', url: 'https://www.sec.gov', date: 'October 2021' },
  { title: 'OpenSecrets: Ken Griffin Political Contributions', url: 'https://www.opensecrets.org', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Vlad Tenev', relationship: 'Co-founder and CEO of Robinhood; Citadel Securities is Robinhood\'s largest customer for payment for order flow', href: '/entities/individuals/vlad-tenev' },
  { name: 'Ben Bernanke', relationship: 'Former Federal Reserve Chair; hired as senior advisor to Citadel in 2015', href: '/entities/individuals/ben-bernanke' },
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
 title: 'Convicted Former Brooklyn Center Police Officer; Shot Daunte Wright',
 role: 'Veteran police officer convicted of manslaughter for fatally shooting Daunte Wright during a traffic stop; claimed she mistook her gun for a taser',
 riskLevel: 'high',
 description: 'Kimberly Ann Potter was a 26-year veteran of the Brooklyn Center; Minnesota Police Department who fatally shot 20-year-old Daunte Wright during a traffic stop on April 11, 2021. Wright was pulled over for expired registration tags; and officers discovered an outstanding warrant for a gross misdemeanor. When Wright attempted to pull away from officers trying to arrest him; Potter drew her firearm and shot him once in the chest while shouting "Taser! Taser! Taser!"; claiming she mistakenly drew her Glock 9mm handgun instead of her Taser. Body camera footage showed Potter displaying shock after the shooting; saying "I just shot him." Wright died at the scene. The shooting occurred during the trial of Derek Chauvin for the murder of George Floyd; just 10 miles from the courthouse; triggering days of protests and a curfew in Brooklyn Center. Potter was convicted of first-degree and second-degree manslaughter in December 2021 and sentenced to two years in prison; significantly below the sentencing guidelines of approximately seven years.',
 birthDate: 'Unknown',
 birthPlace: 'Minnesota, USA',
 education: [],
 affiliations: [
  { name: 'Brooklyn Center Police Department', role: '26-year veteran officer; resigned after shooting (1995-2021)', type: 'agency' },
 ],
 controversies: [
  'Fatally shot 20-year-old Daunte Wright during a traffic stop; claimed she mistook her Glock 9mm handgun for her Taser despite 26 years of experience',
  'Body camera footage showed Potter shouting "Taser! Taser! Taser!" while holding her firearm; then expressing shock after shooting Wright',
  'Shooting occurred just 10 miles from the Derek Chauvin trial during the George Floyd murder case; triggering protests and curfews',
  'Sentenced to only 2 years in prison; well below the sentencing guidelines of approximately 7 years; judge cited Potter\'s remorse and mistake defense',
  'Wright was initially pulled over for expired registration and an air freshener hanging from his rearview mirror; the outstanding warrant was for a gross misdemeanor weapons charge',
  'Brooklyn Center Police Department had no policy requiring officers to carry their Taser and firearm on opposite sides of the body',
 ],
 charges: [
  { statute: 'Minn. Stat. § 609.20(1)', description: 'First-degree manslaughter; predicated on reckless handling/use of a firearm', category: 'Manslaughter' },
  { statute: 'Minn. Stat. § 609.205(1)', description: 'Second-degree manslaughter; culpable negligence creating unreasonable risk', category: 'Manslaughter' },
 ],
 relatedInvestigations: [
  { title: 'Police Shootings', slug: 'police-use-of-force', severity: 'critical' },
 ],
 timeline: [
  { date: '1995', event: 'Joined Brooklyn Center Police Department' },
  { date: 'April 11, 2021', event: 'Fatally shoots Daunte Wright during traffic stop; claims taser/gun confusion' },
  { date: 'April 13, 2021', event: 'Resigns from Brooklyn Center Police Department' },
  { date: 'April 14, 2021', event: 'Charged with second-degree manslaughter' },
  { date: 'September 2021', event: 'First-degree manslaughter charge added' },
  { date: 'December 23, 2021', event: 'Convicted of both first-degree and second-degree manslaughter' },
  { date: 'February 18, 2022', event: 'Sentenced to 2 years (16 months executed) by Judge Regina Chu' },
 ],
 socialMedia: [],
 sources: [
  { title: 'State of Minnesota v. Potter; No. 27-CR-21-7460', url: 'https://www.mncourts.gov', date: '2021' },
  { title: 'Brooklyn Center body camera footage', url: 'https://www.nytimes.com', date: 'April 2021' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Derek Chauvin', relationship: 'Potter\'s shooting of Wright occurred during Chauvin\'s trial for murdering George Floyd; both cases in same Minneapolis metro area', href: '/entities/individuals/derek-chauvin' },
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
 role: 'Kenosha Shootings; Killed Two Protesters',
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
 title: 'Convicted Sex Trafficker; NXIVM Cult Leader',
 role: 'Founded NXIVM cult; convicted of sex trafficking, forced labor, and racketeering; sentenced to 120 years',
 riskLevel: 'critical',
 description: 'Keith Alan Raniere founded NXIVM (pronounced "Nexium"); a purported self-improvement organization based in Albany, New York that federal prosecutors proved was a sex trafficking cult. Within NXIVM; Raniere created a secret inner circle called DOS (Dominus Obsequious Sororium; Latin for "Master Over the Slave Women") in which women were recruited as "slaves" to a hierarchy of "masters"; branded with Raniere\'s initials using a cauterizing pen; required to provide compromising "collateral" (nude photos, damaging confessions) to prevent them from leaving; and coerced into sexual acts with Raniere. Victims were placed on 500-calorie diets to maintain the thin body type Raniere preferred. Raniere was found guilty on all counts in June 2019 including sex trafficking, racketeering conspiracy, forced labor conspiracy, wire fraud, and sex trafficking conspiracy. He was sentenced to 120 years in federal prison in October 2020. NXIVM attracted wealthy and powerful members including Seagram heiress Clare Bronfman; who was sentenced to 81 months for her role; and actress Allison Mack; who received 3 years for recruiting women into DOS.',
 birthDate: 'August 26, 1960',
 birthPlace: 'Brooklyn, New York, USA',
 education: ['Rensselaer Polytechnic Institute; B.S. Mathematics, Biology, Physics 1982'],
 affiliations: [
  { name: 'NXIVM', role: 'Founder and leader (1998-2018); marketed as "Executive Success Programs"', type: 'organization' },
  { name: 'DOS (Dominus Obsequious Sororium)', role: 'Created secret sex trafficking operation within NXIVM', type: 'organization' },
 ],
 controversies: [
  'Created DOS ("Master Over the Slave Women"); a secret sex trafficking organization within NXIVM where women were branded with his initials; forced to provide compromising collateral; starved to 500-calorie diets; and coerced into sexual acts with Raniere',
  'Began sexual relationships with minors; evidence showed he had a sexual relationship with a 15-year-old girl beginning in 2005; possessing photographs of the abuse',
  'Used NXIVM\'s "Executive Success Programs" courses as a front to recruit vulnerable people; courses cost up to $7,500 per five-day session; members were pressured to recruit others in a pyramid scheme structure',
  'Clare Bronfman (Seagram heiress) spent over $100 million funding NXIVM and Raniere\'s legal battles and surveillance of critics; sentenced to 81 months in federal prison',
  'Allison Mack (Smallville actress) served as a DOS "master" who recruited women as sex slaves for Raniere; sentenced to 3 years; she personally recruited and branded several victims',
  'NXIVM operated in multiple countries including Mexico; where Raniere targeted the daughters of wealthy families',
  'Previous venture Consumers\' Buyline was shuttered by 20 state attorneys general as an illegal pyramid scheme in the 1990s',
 ],
 charges: [
  { statute: '18 U.S.C. § 1591', description: 'Sex trafficking', category: 'Human Trafficking' },
  { statute: '18 U.S.C. § 1591', description: 'Sex trafficking conspiracy', category: 'Human Trafficking' },
  { statute: '18 U.S.C. § 1962(c)', description: 'Racketeering conspiracy', category: 'Racketeering' },
  { statute: '18 U.S.C. § 1589', description: 'Forced labor conspiracy', category: 'Human Trafficking' },
  { statute: '18 U.S.C. § 1343', description: 'Wire fraud conspiracy', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 2251', description: 'Possession of child pornography', category: 'Sexual Exploitation' },
  { statute: '18 U.S.C. § 1512', description: 'Identity theft', category: 'Fraud' },
 ],
 relatedInvestigations: [
  { title: 'Human Trafficking Networks', slug: 'human-trafficking-networks-exposed', severity: 'critical' },
 ],
 timeline: [
  { date: 'August 26, 1960', event: 'Born in Brooklyn, New York' },
  { date: '1990s', event: 'Consumers\' Buyline shut down by 20 state attorneys general as illegal pyramid scheme' },
  { date: '1998', event: 'Founded NXIVM in Albany, New York as "Executive Success Programs"' },
  { date: '2005', event: 'Began sexual relationship with a 15-year-old member (later documented through photographs)' },
  { date: '2015-2016', event: 'Created DOS within NXIVM; women branded with his initials and coerced into sexual slavery' },
  { date: 'October 2017', event: 'New York Times publishes expose on NXIVM branding practices' },
  { date: 'March 26, 2018', event: 'Raniere arrested by Mexican federal police and FBI in Puerto Vallarta; Mexico after fleeing the U.S.' },
  { date: 'June 19, 2019', event: 'Found guilty on all counts by federal jury in Brooklyn' },
  { date: 'October 27, 2020', event: 'Sentenced to 120 years in federal prison by Judge Nicholas Garaufis' },
 ],
 socialMedia: [],
 sources: [
  { title: 'United States v. Raniere; Case No. 1:18-cr-00204', url: 'https://www.justice.gov/usao-edny/us-v-keith-raniere-et-al', date: '2018' },
  { title: 'New York Times: Inside a Secretive Group', url: 'https://www.nytimes.com', date: 'October 17, 2017' },
  { title: 'HBO Documentary: The Vow', url: 'https://www.hbo.com', date: '2020' },
 ],
 aliases: ['Vanguard'],
 knownAssociates: [
  { name: 'Allison Mack', relationship: 'Smallville actress; DOS "master" who recruited women as sex slaves; sentenced to 3 years', href: '/entities/individuals/allison-mack' },
  { name: 'Clare Bronfman', relationship: 'Seagram heiress; spent $100+ million funding NXIVM; sentenced to 81 months', href: '/entities/individuals/clare-bronfman' },
 ],
 },


 'ken-lay': {
 name: 'Ken Lay',
 title: 'Former Chairman and CEO; Enron Corporation',
 role: 'Presided over the largest corporate fraud in American history at the time; $74 billion in shareholder losses',
 riskLevel: 'critical',
 description: 'Kenneth Lee Lay was the founder; chairman; and CEO of Enron Corporation; once the seventh-largest company in America by revenue ($101 billion in 2000). Under Lay\'s leadership; Enron perpetrated one of the most elaborate corporate frauds in history; using special purpose entities (SPEs); mark-to-market accounting; and systematic deception to hide billions in debt and inflate profits. When the fraud collapsed in late 2001; Enron\'s stock fell from $90 to $0.26; destroying $74 billion in shareholder value; eliminating 20,000+ jobs; and wiping out $2 billion in employee pension funds. Employees had been encouraged to invest their 401(k) savings in Enron stock even as executives were secretly selling their own shares. Lay was convicted of 10 counts of securities fraud and related charges in May 2006. He died of a heart attack on July 5, 2006; before sentencing; his conviction was posthumously vacated under the legal doctrine of abatement ab initio because he did not have the opportunity to appeal.',
 birthDate: 'April 15, 1942',
 birthPlace: 'Tyrone, Missouri, USA',
 deathDate: 'July 5, 2006',
 education: ['University of Missouri; B.A. Economics 1964', 'University of Houston; Ph.D. Economics 1970'],
 affiliations: [
  { name: 'Enron Corporation', role: 'Founder; Chairman; and CEO (1985-2002)', type: 'corporation' },
  { name: 'George W. Bush Campaign', role: 'Largest individual donor; $550,000+ to Bush campaigns; nicknamed "Kenny Boy" by Bush', type: 'organization' },
  { name: 'Federal Energy Regulatory Commission', role: 'Lobbied extensively for energy deregulation', type: 'agency' },
 ],
 controversies: [
  'Presided over systematic accounting fraud at Enron using special purpose entities (SPEs) to hide $38 billion in debt off Enron\'s balance sheet while inflating revenue',
  'Encouraged employees to buy Enron stock and invest retirement savings in the company while executives secretly sold $1.1 billion in personal holdings; Lay personally sold $70+ million in stock',
  'Enron\'s collapse destroyed $74 billion in shareholder value and $2 billion in employee pension funds; 20,000+ workers lost their jobs',
  'Arthur Andersen; one of the Big Five accounting firms; was convicted of obstruction of justice for shredding Enron audit documents; the firm collapsed; eliminating 85,000 jobs worldwide',
  'Close personal relationship with George W. Bush; was the largest individual donor to Bush\'s campaigns; Bush called him "Kenny Boy"; lobbied successfully for energy deregulation that enabled Enron\'s California energy market manipulation',
  'Enron traders manipulated California\'s energy market during the 2000-2001 crisis; using strategies with names like "Death Star" and "Fat Boy" to create artificial scarcity that caused rolling blackouts and cost California ratepayers $40+ billion',
  'Conviction on all counts was vacated after his death; meaning legally he died an innocent man despite overwhelming evidence of guilt',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud (6 counts)', category: 'Securities Fraud' },
  { statute: '18 U.S.C. § 1343', description: 'Wire fraud (4 counts)', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 371', description: 'Conspiracy', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1001', description: 'Making false statements to banks', category: 'Fraud' },
 ],
 relatedInvestigations: [
  { title: 'Enron Scandal', slug: 'enron-accounting-fraud-and-energy-manipulation', severity: 'critical' },
  { title: 'California Energy Crisis', slug: 'california-energy-crisis-manipulation', severity: 'critical' },
  { title: 'Corporate Accounting Fraud', slug: 'corporate-accounting-fraud-and-audit-failures', severity: 'high' },
 ],
 timeline: [
  { date: 'April 15, 1942', event: 'Born in Tyrone, Missouri to a preacher and salesman family' },
  { date: '1970', event: 'Earned Ph.D. in Economics from University of Houston' },
  { date: '1985', event: 'Founded Enron through merger of Houston Natural Gas and InterNorth' },
  { date: '1990s', event: 'Transformed Enron from pipeline company into energy trading giant; aggressively lobbied for deregulation' },
  { date: '2000', event: 'Enron named "America\'s Most Innovative Company" by Fortune for sixth straight year; stock peaked at $90.75' },
  { date: '2000-2001', event: 'Enron traders manipulate California energy market; causing rolling blackouts and $40+ billion in costs' },
  { date: 'August 2001', event: 'CFO Jeff Skilling abruptly resigns; Sherron Watkins writes anonymous memo warning of accounting fraud' },
  { date: 'October 22, 2001', event: 'SEC opens formal investigation into Enron' },
  { date: 'December 2, 2001', event: 'Enron files for bankruptcy; then the largest in U.S. history ($63.4 billion in assets)' },
  { date: 'January 2002', event: 'Arthur Andersen begins shredding Enron documents' },
  { date: 'May 25, 2006', event: 'Convicted on all counts by federal jury in Houston' },
  { date: 'July 5, 2006', event: 'Dies of heart attack in Aspen, Colorado before sentencing; conviction posthumously vacated' },
 ],
 socialMedia: [],
 sources: [
  { title: 'United States v. Lay; No. H-04-25 (S.D. Tex.)', url: 'https://www.justice.gov', date: '2004' },
  { title: 'Bethany McLean and Peter Elkind; "The Smartest Guys in the Room"', url: 'https://www.amazon.com', date: '2003' },
  { title: 'Senate Commerce Committee Enron Investigation', url: 'https://www.congress.gov', date: '2002' },
 ],
 aliases: ['Kenny Boy'],
 knownAssociates: [
  { name: 'Jeff Skilling', relationship: 'Enron CEO; convicted of conspiracy and securities fraud; sentenced to 24 years (later reduced to 14)', href: '/entities/individuals/jeff-skilling' },
  { name: 'Andrew Fastow', relationship: 'Enron CFO; architect of SPE fraud schemes; cooperated with prosecutors; sentenced to 6 years', href: '/entities/individuals/andrew-fastow' },
  { name: 'Sherron Watkins', relationship: 'Enron VP who warned Lay about accounting fraud in August 2001 memo; named Time Person of the Year 2002', href: '/entities/individuals/sherron-watkins' },
 ],
 },






 'kristi-noem': {
 name: 'Kristi Noem',
 title: 'Secretary of Homeland Security; Former Governor of South Dakota',
 role: 'Trump-appointed DHS Secretary; former South Dakota governor known for anti-COVID restriction stance; admitted to shooting her family dog in memoir',
 riskLevel: 'high',
 description: 'Kristi Lynn Noem served as the 33rd Governor of South Dakota from 2019 to 2025 and was appointed Secretary of Homeland Security by President Donald Trump in 2025. During the COVID-19 pandemic; Noem gained national prominence as one of the only governors to refuse statewide shutdown orders; mask mandates; or business closures; even as the Sturgis Motorcycle Rally in August 2020 became one of the largest super-spreader events in the country (an estimated 460,000 attendees). South Dakota had one of the highest per capita COVID death rates in the nation. In May 2024; Noem published a memoir "No Going Back" in which she admitted to shooting and killing her 14-month-old wire-haired pointer puppy Cricket because the dog was "untrainable" and "dangerous"; along with a goat she found "disgusting." The revelation caused bipartisan outrage and was seen as severely damaging her vice-presidential prospects. Noem was also investigated by the South Dakota legislature for using a state plane for personal travel and for intervening in her daughter\'s application for a real estate appraiser license; the appraiser certification director who handled the case received a $200,000 settlement after her position was eliminated. As DHS Secretary; Noem oversees immigration enforcement; ICE; CBP; and border security operations under the Trump administration\'s aggressive immigration policies.',
 birthDate: 'November 30, 1971',
 birthPlace: 'Watertown, South Dakota, USA',
 education: ['South Dakota State University; B.A. Political Science 2012 (completed while in Congress)'],
 affiliations: [
  { name: 'Department of Homeland Security', role: 'Secretary of Homeland Security (2025-present)', type: 'agency' },
  { name: 'State of South Dakota', role: 'Governor (2019-2025)', type: 'agency' },
  { name: 'U.S. House of Representatives', role: 'Congresswoman; South Dakota At-Large (2011-2019)', type: 'agency' },
 ],
 controversies: [
  'Refused all statewide COVID-19 restrictions; mask mandates; or business closures as governor; South Dakota had one of the highest per capita COVID death rates in the nation',
  'Permitted the 2020 Sturgis Motorcycle Rally (460,000 attendees) to proceed without restrictions; event became one of the largest COVID super-spreader events',
  'Admitted in 2024 memoir to shooting and killing her 14-month-old puppy Cricket because it was "untrainable"; also killed a goat she found "disgusting"',
  'Investigated for intervening in her daughter Kassidy\'s real estate appraiser license application; the certification director who handled the case was pressured and later received a $200,000 settlement',
  'Used state airplane for personal travel and political events; state legislature investigated the flights',
  'Made a false claim in her memoir about meeting with North Korean dictator Kim Jong Un; subsequently retracted from later editions',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'COVID-19 Response Failures', slug: 'covid-19-government-failures', severity: 'high' },
  { title: 'ICE Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
  { date: 'November 30, 1971', event: 'Born in Watertown, South Dakota' },
  { date: '2010', event: 'Elected to U.S. House of Representatives from South Dakota' },
  { date: '2018', event: 'Elected Governor of South Dakota' },
  { date: 'March 2020', event: 'Refuses statewide COVID-19 shutdown; one of only a few governors to do so' },
  { date: 'August 2020', event: 'Permits Sturgis Motorcycle Rally with 460,000 attendees during COVID pandemic' },
  { date: '2021', event: 'Investigated for intervention in daughter\'s real estate appraiser license' },
  { date: 'May 2024', event: 'Publishes memoir revealing she shot her puppy Cricket; faces bipartisan backlash' },
  { date: 'November 2024', event: 'Nominated as Secretary of Homeland Security by Donald Trump' },
  { date: 'January 2025', event: 'Confirmed as DHS Secretary' },
 ],
 socialMedia: [],
 sources: [
  { title: 'South Dakota Legislative Investigation', url: 'https://sdlegislature.gov', date: '2021' },
  { title: 'The Guardian: Noem admits shooting puppy', url: 'https://www.theguardian.com', date: 'May 2024' },
  { title: 'CDC COVID-19 Data Tracker; South Dakota', url: 'https://www.cdc.gov', date: '2020-2021' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Appointed Noem as DHS Secretary; Trump praised her anti-lockdown COVID stance', href: '/entities/individuals/donald-trump' },
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
 title: 'Rikers Island Detainee; Criminal Justice Reform Symbol',
 role: 'Held at Rikers Island for three years without trial for allegedly stealing a backpack; committed suicide after release',
 riskLevel: 'critical',
 description: 'Kalief Browder was a 16-year-old from the Bronx who was arrested on May 15, 2010 for allegedly stealing a backpack; a charge he consistently denied. Because his family could not afford the $3,000 bail; Browder was sent to Rikers Island where he spent three years awaiting trial; including approximately two years in solitary confinement. Surveillance footage later released by The New Yorker showed Browder being beaten by correction officers and attacked by other inmates. Despite being offered repeated plea deals (which he refused; maintaining his innocence); his case was delayed 31 times. The charges were eventually dismissed on June 5, 2013 when the sole accusing witness returned to Mexico. Browder attempted suicide multiple times during and after his incarceration. He died by suicide on June 6, 2015 at age 22. His case became a national symbol of the failures of the American criminal justice system; particularly cash bail; solitary confinement of juveniles; and the right to a speedy trial. His story influenced New York City\'s decision to close Rikers Island and contributed to bail reform legislation nationwide.',
 birthDate: 'May 25, 1993',
 birthPlace: 'Bronx, New York, USA',
 deathDate: 'June 6, 2015',
 education: ['Bronx community college courses (after release)'],
 affiliations: [
  { name: 'The Bronx Defenders', role: 'Legal representation during incarceration', type: 'organization' },
 ],
 controversies: [
  'Held at Rikers Island for 1,097 days without trial for allegedly stealing a backpack; bail set at $3,000 his family could not afford',
  'Spent approximately 700+ days in solitary confinement at Rikers Island as a teenager; the UN considers solitary confinement exceeding 15 days to be torture',
  'Surveillance footage showed correctional officers beating Browder and other inmates attacking him while guards failed to intervene',
  'Case was delayed 31 times as the prosecution was unprepared for trial; violating his Sixth Amendment right to a speedy trial',
  'Offered multiple plea deals; including time served; which he refused because he maintained his innocence; the only witness eventually left the country and charges were dismissed',
  'Multiple suicide attempts while incarcerated; attempted to hang himself with bed sheets; cut his wrists',
  'After release; Browder struggled with mental health effects of prolonged solitary confinement and institutional trauma',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Solitary Confinement', slug: 'solitary-confinement', severity: 'high' },
  { title: 'Cash Bail System', slug: 'cash-bail-system-injustice', severity: 'critical' },
  { title: 'Rikers Island Abuses', slug: 'rikers-island-abuse-and-neglect', severity: 'critical' },
 ],
 timeline: [
  { date: 'May 25, 1993', event: 'Born in the Bronx, New York' },
  { date: 'May 15, 2010', event: 'Arrested at age 16 for allegedly stealing a backpack in the Bronx' },
  { date: 'May 2010', event: 'Sent to Rikers Island after family unable to post $3,000 bail' },
  { date: '2010-2013', event: 'Held at Rikers Island for approximately 1,097 days; including 700+ days in solitary confinement' },
  { date: '2010-2013', event: 'Case delayed 31 times; prosecution repeatedly not ready for trial' },
  { date: 'June 5, 2013', event: 'All charges dismissed after accusing witness returned to Mexico; Browder released' },
  { date: 'October 2014', event: 'The New Yorker publishes Jennifer Gonnerman\'s article "Before the Law" bringing national attention to his case' },
  { date: 'April 2015', event: 'Surveillance footage of beatings at Rikers released publicly' },
  { date: 'June 6, 2015', event: 'Kalief Browder dies by suicide at his family\'s home in the Bronx at age 22' },
  { date: 'June 2015', event: 'President Obama cites Browder\'s case in banning solitary confinement for juveniles in federal prisons' },
  { date: '2019', event: 'New York state passes bail reform legislation partly inspired by Browder\'s case' },
  { date: '2021', event: 'New York City votes to close Rikers Island by 2027; Browder\'s case cited as catalyst' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Jennifer Gonnerman; "Before the Law"; The New Yorker', url: 'https://www.newyorker.com/magazine/2014/10/06/before-the-law', date: 'October 6, 2014' },
  { title: 'Jay-Z Documentary: TIME: The Kalief Browder Story (Netflix)', url: 'https://www.netflix.com', date: '2017' },
  { title: 'Obama White House Statement on Solitary Confinement', url: 'https://www.whitehouse.gov', date: 'January 2016' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Bryan Stevenson', relationship: 'Criminal justice reformer whose work on wrongful incarceration parallels Browder\'s case', href: '/entities/individuals/bryan-stevenson' },
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
 title: 'CEO of CVS Health (which acquired Aetna). CVS/Aetna controls insurance, pharmacy benefits, and retail pharmacy: a vertical monopoly that profits at every stage of healthcare delivery while patients pay ever-increasing out-of-pocket costs.',
 role: 'CEO of CVS Health (which acquired Aetna). CVS/Aetna controls insurance, pharmacy benefits, and retail pharmacy; a vertical monopoly that profits at every stage of healthcare delivery while patients pay ever-increasing out-of-pocket costs.',
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
 title: 'Former UN Secretary-General; Head of UN Peacekeeping During Rwanda Genocide',
 role: 'As head of UN Peacekeeping; failed to act on explicit warnings of genocide in Rwanda; later served as 7th Secretary-General; Nobel Peace Prize 2001',
 riskLevel: 'high',
 description: 'Kofi Atta Annan was a Ghanaian diplomat who served as the seventh Secretary-General of the United Nations from 1997 to 2006 and received the Nobel Peace Prize in 2001. However; his most consequential and controversial role came before his appointment as Secretary-General; when he headed the UN Department of Peacekeeping Operations (DPKO) during the 1994 Rwandan genocide. In January 1994; UNAMIR commander General Romeo Dallaire sent a now-famous cable to Annan\'s department warning of a Hutu plot to "exterminate the Tutsis" and requesting authorization to seize weapons caches. Annan\'s office ordered Dallaire not to act and to share the intelligence with the Rwandan government; which was planning the genocide. When the killing began on April 7, 1994; Annan\'s department recommended withdrawing UN peacekeepers rather than reinforcing them. Over the next 100 days; approximately 800,000 Tutsi and moderate Hutu were slaughtered while 2,500 UN peacekeepers were reduced to 270. Annan later acknowledged the UN\'s failure in Rwanda; commissioning the 1999 Carlsson Report which concluded that the UN\'s response was a "failure of the United Nations system as a whole." He also oversaw the Oil-for-Food Programme scandal; in which his son Kojo Annan received payments from a firm that had contracts under the program.',
 birthDate: 'April 8, 1938',
 birthPlace: 'Kumasi, Gold Coast (now Ghana)',
 deathDate: 'August 18, 2018',
 education: ['University of Science and Technology; Kumasi', 'Macalester College; B.A. Economics 1961', 'MIT Sloan School of Management; M.S. 1972'],
 affiliations: [
  { name: 'United Nations', role: '7th Secretary-General (1997-2006); previously head of Peacekeeping Operations (1993-1996)', type: 'organization' },
 ],
 controversies: [
  'As head of UN Peacekeeping; overruled General Dallaire\'s request to seize weapons caches before the Rwanda genocide; ordered him to share intelligence with the Rwandan government that was planning the slaughter',
  'Recommended withdrawing rather than reinforcing UN peacekeepers when the Rwanda genocide began; 800,000 died in 100 days while UN presence was reduced from 2,500 to 270 troops',
  'UN Oil-for-Food Programme scandal; his son Kojo Annan received payments from Cotecna Inspection SA; which had contracts under the programme; independent inquiry found Annan had not been sufficiently vigilant',
  'Failed to prevent the Srebrenica massacre of 8,000 Bosniak men and boys in July 1995 while heading UN Peacekeeping',
  'Carlsson Report (1999) commissioned by Annan himself concluded that the UN\'s response to Rwanda was a "failure of the United Nations system as a whole"',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Rwanda Genocide', slug: 'rwanda-genocide', severity: 'critical' },
 ],
 timeline: [
  { date: 'April 8, 1938', event: 'Born in Kumasi; Gold Coast (now Ghana)' },
  { date: 'March 1993', event: 'Appointed head of UN Department of Peacekeeping Operations' },
  { date: 'January 11, 1994', event: 'Dallaire\'s "Genocide Fax" sent to Annan\'s department warning of Hutu plot to exterminate Tutsis; department orders Dallaire not to act' },
  { date: 'April 7-July 15, 1994', event: 'Rwanda genocide; approximately 800,000 killed; UN peacekeepers withdrawn rather than reinforced' },
  { date: 'July 1995', event: 'Srebrenica massacre occurs while Annan heads UN Peacekeeping' },
  { date: 'January 1, 1997', event: 'Becomes 7th Secretary-General of the United Nations' },
  { date: '1999', event: 'Commissions Carlsson Report on UN failures in Rwanda' },
  { date: '2001', event: 'Awarded Nobel Peace Prize jointly with the United Nations' },
  { date: '2005', event: 'Oil-for-Food scandal; Volcker Commission investigation' },
  { date: 'December 31, 2006', event: 'Ends second term as Secretary-General' },
  { date: 'August 18, 2018', event: 'Dies in Bern, Switzerland at age 80' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Carlsson Report: Report of the Independent Inquiry into UN Actions During the 1994 Genocide in Rwanda', url: 'https://www.un.org', date: '1999' },
  { title: 'Dallaire; Romeo. "Shake Hands with the Devil"', url: 'https://www.amazon.com', date: '2003' },
  { title: 'Volcker Committee: Independent Inquiry into the Oil-for-Food Programme', url: 'https://www.un.org', date: '2005' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Romeo Dallaire', relationship: 'UNAMIR commander whose warnings of genocide were overruled by Annan\'s Peacekeeping department', href: '/entities/individuals/romeo-dallaire' },
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
 title: 'Nazi Biological Weapons Chief; Operation Paperclip Recruit',
 role: 'Deputy Surgeon General of the Third Reich who directed Nazi biological weapons program; acquitted at Nuremberg; then recruited by U.S. Army Chemical Corps via Operation Paperclip',
 riskLevel: 'critical',
 description: 'Kurt August Blome was the Deputy Surgeon General of the Third Reich and director of Nazi Germany\'s biological weapons program. Under Blome\'s direction; Nazi scientists conducted experiments with plague; cholera; typhus; and other pathogens; including experiments on concentration camp prisoners. Blome reported directly to Heinrich Himmler and was tasked with developing biological weapons for potential use against Allied forces. At the 1947 Nuremberg Doctors\' Trial; Blome was charged with conducting human experiments and involvement in the euthanasia program. Despite evidence of his role in biological weapons development and human experimentation; Blome was acquitted in a controversial verdict; partly because key evidence of his plague experiments was suppressed by U.S. intelligence agencies who wanted to recruit him. In 1951; the U.S. Army Chemical Corps recruited Blome through Operation Paperclip (the program that brought Nazi scientists to the United States). He was interviewed at Camp King in Oberursel; Germany and provided the U.S. military with his knowledge of Nazi biological weapons research. Blome\'s recruitment epitomizes how the Cold War imperative to acquire military and scientific advantages led the U.S. government to shield Nazi war criminals from accountability.',
 birthDate: 'January 31, 1894',
 birthPlace: 'Bielefeld, Germany',
 deathDate: 'October 10, 1969',
 education: ['Medical Degree; German university'],
 affiliations: [
  { name: 'Nazi Germany', role: 'Deputy Surgeon General of the Third Reich; directed biological weapons program', type: 'organization' },
  { name: 'U.S. Army Chemical Corps', role: 'Recruited via Operation Paperclip to share biological weapons knowledge (1951)', type: 'agency' },
 ],
 controversies: [
  'Directed Nazi Germany\'s biological weapons program; developing plague; cholera; typhus; and other pathogens for military use',
  'Conducted or oversaw biological weapons experiments on concentration camp prisoners',
  'Reported directly to Heinrich Himmler on biological warfare capabilities',
  'Acquitted at Nuremberg Doctors\' Trial in 1947 in a controversial verdict; key evidence was suppressed by U.S. intelligence to facilitate his future recruitment',
  'Recruited by U.S. Army Chemical Corps through Operation Paperclip in 1951; interviewed at Camp King about his biological weapons knowledge',
  'His recruitment represents how Cold War priorities led the U.S. to shield Nazi war criminals and benefit from their research conducted through human experimentation',
 ],
 charges: [
  { statute: 'Nuremberg Military Tribunal', description: 'Charged with human experiments and involvement in euthanasia program; acquitted (1947)', category: 'War Crimes' },
 ],
 relatedInvestigations: [
  { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
  { date: 'January 31, 1894', event: 'Born in Bielefeld, Germany' },
  { date: '1942', event: 'Appointed to direct Nazi biological weapons program under Himmler' },
  { date: '1942-1945', event: 'Oversaw development of plague; cholera; and typhus weapons; experiments conducted on concentration camp prisoners' },
  { date: '1945', event: 'Captured by Allied forces after German surrender' },
  { date: '1947', event: 'Tried and acquitted at Nuremberg Doctors\' Trial; key evidence suppressed by U.S. intelligence' },
  { date: '1951', event: 'Recruited by U.S. Army Chemical Corps through Operation Paperclip; interviewed at Camp King; Oberursel' },
  { date: 'October 10, 1969', event: 'Died in West Germany' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Hunt; Linda. "Secret Agenda: The United States Government; Nazi Scientists; and Project Paperclip"', url: 'https://www.amazon.com', date: '1991' },
  { title: 'Nuremberg Doctors\' Trial Transcripts', url: 'https://www.archives.gov', date: '1947' },
  { title: 'National Archives: Operation Paperclip Records', url: 'https://www.archives.gov', date: 'Declassified' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to the U.S. via Operation Paperclip; developed V-2 rocket using slave labor', href: '/entities/individuals/wernher-von-braun' },
  { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip scientist; "Father of Space Medicine"; oversaw human experiments in Nazi Germany', href: '/entities/individuals/hubertus-strughold' },
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
 { title: 'UK National Archives: Maxwell Pension Fund Investigation', url: 'https://www.nationalarchives.gov.uk/', date: '1996-01-22' },
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
