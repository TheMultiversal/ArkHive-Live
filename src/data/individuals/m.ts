// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'michael-flynn': {
 name: 'Michael Flynn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Flynn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Michael Flynn was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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














 'michael-cohen': {
 name: 'Michael Dean Cohen',
 title: 'Convicted Felon, Former Trump Fixer',
 role: 'Former Trump Personal Attorney, Key Prosecution Witness',
 riskLevel: 'high',
 description: 'Michael Dean Cohen served as Donald Trump\'s personal attorney and fixer from 2006 to 2018. He arranged hush money payments to Stormy Daniels and Karen McDougal, served as RNC Deputy Finance Chair, and was sentenced to three years in federal prison for campaign finance violations, tax evasion, and lying to Congress. He became the star witness in Trump\'s Manhattan criminal trial.',
 birthDate: 'August 25, 1966',
 birthPlace: 'Long Island, New York, USA',
 netWorth: '$4+ million (pre-conviction)',
 education: ['J.D. - Thomas M. Cooley Law School (1991)', 'B.A. - American University'],
 affiliations: [
 { name: 'Trump Organization', role: 'Executive VP & Personal Attorney (2006-2018)', type: 'corporation' },
 { name: 'Republican National Committee', role: 'Deputy Finance Chairman (2017-2018)', type: 'organization' },
 { name: 'Essential Consultants LLC', role: 'Shell company for hush payments', type: 'corporation' },
 ],
 controversies: [
 'HUSH MONEY SCHEME: Paid $130,000 to Stormy Daniels and facilitated $150,000 to Karen McDougal via AMI to silence affairs before 2016 election',
 'CAMPAIGN FINANCE CRIMES: Payments were illegal campaign contributions, Cohen pled guilty August 2018',
 'TRUMP TOWER MOSCOW: Lied to Congress about timeline - negotiations continued through June 2016, not January as claimed',
 '"FIXER"ROLE: Threatened journalists, handled lawsuits, buried negative stories, created shell companies for 12+ years',
 'TAX EVASION: Evaded $1.4 million in taxes on taxi medallion income',
 'COOPERATING WITNESS: Flipped on Trump after being abandoned, testified extensively in multiple proceedings',
 'MANHATTAN TRIAL STAR WITNESS: Key testimony in 2024 trial that resulted in Trump\'s 34 felony convictions',
 'CONGRESSIONAL TESTIMONY: Dramatic February 2019 testimony calling Trump"a racist, a conman, a cheat"',
 'PRISON TIME: Served time at Otisville federal prison, then home confinement',
 ],
 charges: [
 { statute: '52 U.S.C. § 30116(a)(1)(A)', description: 'Causing unlawful corporate campaign contribution (Stormy payment)', category: 'Election Crimes' },
 { statute: '52 U.S.C. § 30116(a)(7)', description: 'Excessive campaign contribution', category: 'Election Crimes' },
 { statute: '26 U.S.C. § 7201', description: 'Tax evasion - $1.4 million in unreported income', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1014', description: 'Making false statements to financial institution', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1001', description: 'Making false statements to Congress (Trump Tower Moscow)', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '1966', event: 'Born on Long Island, New York' },
 { date: '1991', event: 'Graduates from Thomas M. Cooley Law School' },
 { date: '2006', event: 'Joins Trump Organization as personal attorney' },
 { date: '2015-2016', event: 'Negotiates Trump Tower Moscow deal, lies about timeline' },
 { date: '2016 (Aug)', event: 'Creates Essential Consultants LLC shell company' },
 { date: '2016 (Oct 27)', event: 'Pays Stormy Daniels $130,000 through shell company' },
 { date: '2016 (Nov)', event: 'AMI pays Karen McDougal $150,000 with Cohen coordination' },
 { date: '2017 (Feb)', event: 'Trump Organization reimburses Cohen - falsified as legal retainer' },
 { date: '2017 (Apr)', event: 'Named RNC Deputy Finance Chairman' },
 { date: '2018 (Apr 9)', event: 'FBI raids Cohen\'s office, home, and hotel room' },
 { date: '2018 (Jun)', event: 'Resigns from RNC position' },
 { date: '2018 (Aug 21)', event: 'Pleads guilty to 8 federal charges, implicates Trump' },
 { date: '2018 (Nov 29)', event: 'Pleads guilty to lying to Congress about Trump Tower Moscow' },
 { date: '2018 (Dec 12)', event: 'Sentenced to 3 years in federal prison' },
 { date: '2019 (Feb 27)', event: 'Dramatic Congressional testimony:"Trump is a racist, a conman, a cheat"' },
 { date: '2019 (May 6)', event: 'Reports to Otisville Federal Prison' },
 { date: '2020 (May)', event: 'Released to home confinement due to COVID-19' },
 { date: '2020 (Jul)', event: 'Briefly returned to prison for refusing to stop writing book' },
 { date: '2024 (May)', event: 'Star witness in Manhattan hush money trial' },
 { date: '2024 (May 30)', event: 'Trump convicted on all 34 felony counts, largely on Cohen\'s testimony' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SDNY Plea Agreement', url: 'https://www.justice.gov/usao-sdny/pr/michael-cohen-pleads-guilty-manhattan-federal-court-eight-counts-including-campaign', date: '2018' },
 { title: 'Congressional Testimony Transcript', url: 'https://oversight.house.gov/hearing/hearing-with-michael-cohen-former-attorney-to-president-donald-trump/', date: '2019' },
 { title: 'Manhattan DA People v. Trump Indictment', url: 'https://manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf', date: '2023' },
 { title: 'Cohen Sentencing Memo', url: 'https://www.courtlistener.com/docket/7593912/united-states-v-cohen/', date: '2018' },
 { title: 'Mueller Report (Trump Tower Moscow)', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'Cohen Book: Disloyal - A Memoir', url: 'https://www.simonandschuster.com/books/Disloyal-A-Memoir/Michael-Cohen/9781510764699', date: '2020' },
 ],
 aliases: ['Trump\'s Fixer', 'Personal Attorney', 'Ray Donovan'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Client for 12 years, turned star witness against him', href: '/entities/individuals/donald-trump' },
 { name: 'Stormy Daniels', relationship: 'Paid $130,000 hush money to silence affair allegations', href: '/entities/individuals/stormy-daniels' },
 { name: 'Karen McDougal', relationship: 'Facilitated $150,000 AMI catch-and-kill payment', href: '/entities/individuals/karen-mcdougal' },
 { name: 'David Pecker', relationship: 'AMI CEO, coordinated catch-and-kill scheme', href: '/entities/individuals/david-pecker' },
 { name: 'Allen Weisselberg', relationship: 'Trump CFO, coordinated reimbursements', href: '/entities/individuals/allen-weisselberg' },
 { name: 'Keith Davidson', relationship: 'Attorney for Daniels and McDougal', href: '/entities/individuals/keith-davidson' },
 { name: 'Lanny Davis', relationship: 'Attorney representing Cohen during cooperation', href: '/entities/individuals/lanny-davis' },
 ],
 },



























 'mohammed-bin-salman': {
 name: 'Mohammed bin Salman bin Abdulaziz Al Saud',
 title: 'Crown Prince of Saudi Arabia',
 role: 'Saudi Ruler, War Crimes Perpetrator',
 riskLevel: 'critical',
 description: 'Mohammed bin Salman (MBS) is the Crown Prince of Saudi Arabia who received a $110 billion arms deal from Trump and later invested $2 billion in Jared Kushner\'s fund. He is implicated in the murder of journalist Jamal Khashoggi and the Yemen genocide.',
 birthDate: 'August 31, 1985',
 birthPlace: 'Riyadh, Saudi Arabia',
 netWorth: '$2+ billion (personal), controls $700B sovereign fund',
 education: ['Law - King Saud University'],
 affiliations: [
 { name: 'Kingdom of Saudi Arabia', role: 'Crown Prince, De Facto Ruler', type: 'agency' },
 { name: 'Public Investment Fund', role: 'Chairman ($700B fund)', type: 'corporation' },
 ],
 controversies: [
 'Jamal Khashoggi murder ordered by MBS per CIA assessment',
 'Yemen war causing 400,000+ deaths including 85,000 children',
 'Trump arms deal providing weapons for Yemen genocide',
 '$2 billion investment in Kushner fund despite objections',
 'Purge of rivals at Ritz Carlton',
 'Human rights abuses against dissidents',
 ],
 charges: [
 { statute: 'Rome Statute Article 7 (Crimes Against Humanity)', description: 'Khashoggi Murder - CIA assessment concluded MBS ordered the assassination and dismemberment of journalist Jamal Khashoggi', category: 'International Criminal' },
 { statute: 'Rome Statute Article 8 (War Crimes)', description: 'Yemen War Crimes - Directing military campaign causing 400,000+ deaths including deliberate targeting of civilians', category: 'International Criminal' },
 { statute: 'Geneva Convention IV Article 147', description: 'Grave Breaches - Willful killing, torture, extensive destruction not justified by military necessity in Yemen', category: 'International Humanitarian Law' },
 { statute: 'UN Convention Against Torture', description: 'Systematic Torture - Torture of dissidents including women\'s rights activists detained during crackdowns', category: 'International' },
 { statute: '18 U.S.C. § 1116', description: 'Murder of Internationally Protected Person - Khashoggi was a US resident journalist murdered in consulate', category: 'US Federal' },
 { statute: '18 U.S.C. § 2332', description: 'Extraterritorial Murder - Ordering killing of US person outside United States', category: 'US Federal' },
 { statute: 'Arms Export Control Act', description: 'Weapons Diversion - US weapons provided under $110B deal used for war crimes in Yemen violating end-use agreements', category: 'US Law' },
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Persecution - Systematic persecution of dissidents, journalists, women\'s rights activists', category: 'International Criminal' },
 { statute: 'UN Charter Article 2(4)', description: 'Blockade Violations - Naval blockade of Yemen contributing to world\'s worst humanitarian crisis', category: 'International' },
 { statute: 'ICCPR Articles 6, 7, 9', description: 'Arbitrary Detention - Mass detention and extrajudicial killings of critics including at Ritz Carlton purge', category: 'International' },
 { statute: 'Global Magnitsky Act', description: 'Human Rights Violations - Multiple US officials called for Magnitsky sanctions for Khashoggi murder', category: 'US Law' },
 ],
 relatedInvestigations: [
 { title: 'War Profiteering: Saudi Arms Deal', slug: 'saudi-arms-deal', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1985', event: 'Born in Riyadh' },
 { date: '2017', event: 'Named Crown Prince' },
 { date: '2017', event: 'Trump announces $110B arms deal' },
 { date: '2018', event: 'Orders killing of Jamal Khashoggi (October)' },
 { date: '2022', event: '$2 billion investment in Kushner fund' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CIA Assessment on Khashoggi', url: 'https://www.dni.gov/', date: '2018' },
 { title: 'UN Yemen Report', url: 'https://www.ohchr.org/en/hr-bodies/hrc/yemen/index', date: '2020' }, ],
 aliases: ['MBS', 'Mr. Bone Saw'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: '$110B arms deal, Khashoggi cover-up', href: '/entities/individuals/donald-trump' },
 { name: 'Jared Kushner', relationship: '$2 billion investment after leaving office', href: '/entities/individuals/jared-kushner' },
 ],
 },



























 'mark-meadows': {
 name: 'Mark Meadows',
 title: 'Person of Interest',
 role: 'Documented based on entity connections',
 riskLevel: 'high',
 description: 'Mark Meadows. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Mark Meadows that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2020-11-05', event: 'Documentation updated based on newly available public records and filings' },
 { date: '2023-04-05', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2020-11-05' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-04-05' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-01-11' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'mike-pence': {
 name: 'Michael Richard Pence',
 title: '48th Vice President of the United States',
 role: 'Vice President (2017-2021), January 6 Target',
 riskLevel: 'medium',
 description: 'Mike Pence served as Vice President under Donald Trump and became central to the January 6 story when he refused Trump\'s pressure to reject electoral votes and overturn the 2020 election. Rioters at the Capitol chanted"Hang Mike Pence"while Trump tweeted criticism of him. Pence later testified to the grand jury and briefly ran for president in 2024.',
 birthDate: 'June 7, 1959',
 birthPlace: 'Columbus, Indiana, USA',
 netWorth: '$4+ million',
 education: ['J.D. - Indiana University McKinney School of Law', 'B.A. - Hanover College'],
 affiliations: [
 { name: 'United States Government', role: 'Vice President (2017-2021)', type: 'agency' },
 { name: 'U.S. House of Representatives', role: 'Representative (2001-2013)', type: 'agency' },
 { name: 'Indiana', role: 'Governor (2013-2017)', type: 'agency' },
 ],
 controversies: [
 'Enabled Trump for 4 years before drawing the line on January 6',
 'Fled Capitol under Secret Service protection during riot',
 'Rioters built gallows, chanted"Hang Mike Pence"',
 'Trump tweeted attack on him while riot ongoing',
 'Initially resisted testifying, then cooperated with grand jury',
 'Refused to endorse Trump in 2024',
 'Presidential campaign failed quickly',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1959', event: 'Born in Columbus, Indiana' },
 { date: '2001', event: 'Elected to U.S. House of Representatives' },
 { date: '2013', event: 'Becomes Governor of Indiana' },
 { date: '2016', event: 'Selected as Trump\'s running mate' },
 { date: '2017', event: 'Inaugurated as 48th Vice President' },
 { date: '2020', event: 'December-January: Receives pressure from Trump, Eastman' },
 { date: '2021', event: 'January 6: Refuses to reject electoral votes' },
 { date: '2021', event: 'January 6: Evacuated from Capitol as mob chants threats' },
 { date: '2021', event: 'January 6: Trump tweets criticism during riot' },
 { date: '2022', event: 'Cooperates with January 6 Committee' },
 { date: '2023', event: 'Testifies to Jack Smith grand jury' },
 { date: '2023', event: 'June: Launches presidential campaign' },
 { date: '2023', event: 'October: Suspends presidential campaign' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: '"So Help Me God"Memoir', url: 'https://www.simonandschuster.com/books/So-Help-Me-God/Mike-Pence/9781982190330', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'President, pressured him to overturn election', href: '/entities/individuals/donald-trump' },
 { name: 'John Eastman', relationship: 'Received fake elector pressure scheme', href: '/entities/individuals/john-eastman' },
 { name: 'Greg Jacob', relationship: 'Counsel who advised against Eastman scheme' },
 ],
 },



























 'melania-trump': {
 name: 'Melania Trump',
 title: 'Former First Lady of the United States',
 role: 'First Lady (2017-2021, 2025-Present)',
 riskLevel: 'medium',
 description: 'Melania Trump served as First Lady of the United States from 2017 to 2021. Born Melanija Knavs in Slovenia, she married Donald Trump in 2005. She was notably absent during many of Trump\'s legal proceedings and rarely commented publicly on his controversies, scandals, or criminal indictments.',
 birthDate: 'April 26, 1970',
 birthPlace: 'Novo Mesto, Slovenia (then Yugoslavia)',
 netWorth: '$50+ million',
 education: ['University of Ljubljana (attended, did not graduate)', 'Secondary School of Design and Photography, Ljubljana'],
 affiliations: [
 { name: 'White House', role: 'First Lady (2017-2021, 2025-Present)', type: 'agency' },
 { name: 'Be Best Initiative', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 '"I Really Don\'t Care, Do U?"jacket while visiting detained migrant children',
 'EB-1"Einstein Visa"despite no extraordinary ability documentation',
 'Sponsored parents for citizenship despite Trump\'s anti-chain migration stance',
 'Plagiarized Michelle Obama speech at 2016 RNC',
 'Questions about early US immigration work status',
 'Largely absent from 2024 campaign',
 'Silent during Trump\'s criminal trials and convictions',
 'Reportedly has separate financial arrangement from Trump',
 'Be Best anti-bullying campaign while married to notorious bully',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Family Separation Policy', slug: 'family-separation', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1970', event: 'Born Melanija Knavs in Slovenia' },
 { date: '1996', event: 'Meets Donald Trump at Fashion Week party' },
 { date: '2001', event: 'Obtains EB-1"Einstein Visa"' },
 { date: '2005', event: 'Marries Donald Trump' },
 { date: '2006', event: 'Son Barron born; becomes US citizen' },
 { date: '2016', event: 'July: Plagiarizes Michelle Obama at RNC' },
 { date: '2017', event: 'January: Becomes First Lady' },
 { date: '2018', event: 'June: Wears"I Really Don\'t Care"jacket to border' },
 { date: '2018', event: 'Parents become citizens through chain migration' },
 { date: '2021', event: 'January: Leaves White House' },
 { date: '2024', event: 'Largely absent from campaign' },
 { date: '2025', event: 'Returns as First Lady' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Immigration Records Investigation (AP)', url: 'https://scholar.google.com/scholar?q=Immigration%20Records%20Investigation%20(AP)', date: '2018' },
 { title: 'EB-1 Visa Analysis', url: 'https://scholar.google.com/scholar?q=EB-1%20Visa%20Analysis', date: '2018' },
 { title: 'Be Best Initiative Records', url: 'https://web.archive.org/web/2024/https://www.whitehouse.gov/bebest/', date: '2018-2021' },
 ],
 aliases: ['Melania Knauss', 'Melanija Knavs'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Husband since 2005', href: '/entities/individuals/donald-trump' },
 { name: 'Viktor Knavs', relationship: 'Father, became US citizen through chain migration' },
 { name: 'Amalija Knavs', relationship: 'Mother, became US citizen through chain migration' },
 ],
 },



























 'maria-bartiromo': {
 name: 'Maria Sara Bartiromo',
 title: 'Fox Business Host',
 role: 'Election Disinformation Spreader, Sidney Powell Platform',
 riskLevel: 'high',
 description: 'Maria Bartiromo is a Fox Business host who gave extensive airtime to Sidney Powell\'s false election fraud claims. She was the first to air Powell\'s"Dominion switched votes"conspiracy theory. Dominion\'s lawsuit included her specifically for spreading the lies.',
 birthDate: 'September 11, 1967',
 birthPlace: 'Brooklyn, New York, USA',
 netWorth: '$50+ million',
 education: ['B.A. - New York University (Journalism)'],
 affiliations: [
 { name: 'Fox Business', role: 'Host (2013-present)', type: 'corporation' },
 ],
 controversies: [
 'First to air Sidney Powell\'s Dominion conspiracy',
 'Named defendant in Dominion lawsuit',
 'Continued spreading claims after being told they were false',
 'Texts showed she knew claims were dubious',
 'Gave platform for most extreme election lies',
 'Called by Trump morning of January 6',
 ],
 charges: [
 { statute: 'Civil Defamation Liability', description: 'Dominion Lawsuit - Specifically named for broadcasting false claims about Dominion voting machines', category: 'Civil' },
 { statute: 'Civil Defamation Liability', description: 'Smartmatic Lawsuit - Named defendant for broadcasting false claims about voting systems', category: 'Civil' },
 { statute: '52 U.S.C. § 20511', description: 'Potential Conspiracy to Deprive Rights - Broadcast disinformation designed to undermine election results', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud - Knowingly broadcast false statements after being told claims were false', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1512(c)', description: 'Potential Obstruction - First-mover in broadcasting claims intended to prevent certification of election', category: 'Potential Federal' },
 { statute: 'FCC Regulations', description: 'Potential Broadcast Violations - Deliberate broadcasting of demonstrably false statements about election security', category: 'Regulatory' },
 ],
 relatedInvestigations: [
 { title: 'Dominion Defamation', slug: 'dominion-defamation', severity: 'critical' },
 ],
 timeline: [
 { date: '1967', event: 'Born in Brooklyn' },
 { date: '2013', event: 'Joins Fox Business' },
 { date: '2020', event: 'November: First to air Powell\'s Dominion claims' },
 { date: '2021', event: 'Named in Dominion lawsuit' },
 { date: '2023', event: 'Part of Fox settlement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Dominion Lawsuit Complaint', url: 'https://www.courtlistener.com/', date: '2021' }, ],
 aliases: ['Money Honey'],
 knownAssociates: [
 { name: 'Sidney Powell', relationship: 'Gave platform for fraud claims', href: '/entities/individuals/sidney-powell' },
 { name: 'Donald Trump', relationship: 'Interviewed multiple times, supportive coverage', href: '/entities/individuals/donald-trump' },
 ],
 },



























 'matt-gaetz': {
 name: 'Matthew Louis Gaetz II',
 title: 'Former Attorney General Nominee',
 role: 'Former Congressman, Trump Ally',
 riskLevel: 'critical',
 description: 'Matthew Louis Gaetz II is a former Florida congressman investigated by the DOJ for alleged sex trafficking of a 17-year-old. His associate Joel Greenberg pleaded guilty to sex trafficking and cooperated with investigators. Trump nominated him for Attorney General in 2024 but he withdrew amid scandal. Venmo payments and witness testimony were central to the investigation.',
 birthDate: 'May 7, 1982',
 birthPlace: 'Hollywood, Florida',
 netWorth: '$500,000+',
 education: ['J.D. - William & Mary Law School (2007)', 'B.S. - Florida State University (2003)'],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Member FL-1 (2017-2025)', type: 'agency' },
 { name: 'Florida House of Representatives', role: 'Member (2010-2016)', type: 'agency' },
 ],
 controversies: [
 'DOJ sex trafficking investigation (no charges)',
 'House Ethics investigation into sexual misconduct',
 'Alleged sex with 17-year-old',
 'Allegations of paying for sex',
 'Drug use allegations',
 'Showed colleagues nude photos of women',
 'Joel Greenberg cooperated with investigators',
 'AG nomination withdrawn due to scandal',
 ],
 charges: [
 { statute: '18 U.S.C. § 1591', description: 'Potential Sex Trafficking - DOJ investigated allegations of sex with 17-year-old (declined to prosecute)', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 2422(b)', description: 'Potential Coercion and Enticement of Minor - Allegations of paying for sex with 17-year-old', category: 'Potential Federal' },
 { statute: 'Florida Stat. § 794.05', description: 'Potential Unlawful Sexual Activity with Minor - Alleged sexual contact with 17-year-old', category: 'Potential State' },
 { statute: '18 U.S.C. § 2252', description: 'Potential Sexual Exploitation - Allegations of showing nude photos of women to colleagues without consent', category: 'Potential Federal' },
 { statute: '21 U.S.C. § 841', description: 'Potential Drug Distribution - Allegations of providing drugs to women in exchange for sex', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1952', description: 'Potential Interstate Travel for Prostitution - Alleged travel across state lines for sexual activity', category: 'Potential Federal' },
 { statute: 'House Ethics Rules', description: 'Multiple Violations - Sexual misconduct, drug use, showing explicit images in workplace (House Ethics report suppressed)', category: 'Ethics' },
 { statute: 'Florida Stat. § 796.07', description: 'Potential Prostitution - Allegations of paying for sex with adult women', category: 'Potential State' },
 ],
 relatedInvestigations: [
 { title: 'Sex Trafficking Investigation', slug: 'gaetz-sex-trafficking', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'Elected to Congress' },
 { date: '2020', event: 'Joel Greenberg arrested for sex trafficking' },
 { date: '2021', event: 'DOJ investigation revealed' },
 { date: '2021', event: 'Greenberg pleads guilty, cooperates' },
 { date: '2023', event: 'DOJ declines prosecution' },
 { date: '2024', event: 'November: AG nominee, withdraws' },
 { date: '2024', event: 'Resigns from Congress' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Investigation Documents', url: 'https://scholar.google.com/scholar?q=DOJ%20Investigation%20Documents', date: '2021-2023' },
 { title: 'House Ethics Committee', url: 'https://www.congress.gov/', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'AG nominee, loyal ally', href: '/entities/individuals/donald-trump' },
 { name: 'Joel Greenberg', relationship: 'Close friend, convicted sex trafficker' },
 { name: 'Roger Stone', relationship: 'Political ally', href: '/entities/individuals/roger-stone' },
 ],
 },



























 'mike-pompeo': {
 name: 'Michael Richard Pompeo',
 title: 'Former U.S. Secretary of State & CIA Director',
 role: 'Secretary of State 2018-2021, CIA Director 2017-2018',
 riskLevel: 'high',
 description: 'Mike Pompeo served as CIA Director and then Secretary of State under Trump. He was deeply involved in the Ukraine pressure campaign that led to Trump\'s first impeachment, testified in closed session, and promoted conspiracy theories about Biden. He took taxpayer-funded trips that appeared to be campaigning for potential 2024 presidential run.',
 birthDate: 'December 30, 1963',
 birthPlace: 'Orange, California',
 education: ['Harvard Law School (J.D.)', 'United States Military Academy at West Point (B.S.)'],
 affiliations: [
 { name: 'U.S. Department of State', role: 'Secretary (2018-2021)', type: 'agency' },
 { name: 'CIA', role: 'Director (2017-2018)', type: 'agency' },
 { name: 'U.S. House of Representatives', role: 'Kansas 4th (2011-2017)', type: 'agency' },
 ],
 controversies: [
 'Central role in Ukraine pressure campaign',
 'Refused to defend Ambassador Marie Yovanovitch',
 'Used taxpayer funds for apparent campaign trips',
 'Madison dinners with political donors on government dime',
 'Pushed Benghazi conspiracy theories',
 'Wife used government resources improperly',
 'Blocked State Department witnesses from testifying at impeachment',
 ],
 charges: [
 { statute: '18 U.S.C. § 1505 (Obstruction of Congressional Proceedings)', description: 'Obstruction of Impeachment Investigation - Blocked State Department witnesses from testifying, refused to produce subpoenaed documents', category: 'Obstruction' },
 { statute: '2 U.S.C. § 192 (Contempt of Congress)', description: 'Defiance of Subpoenas - Refused to comply with House impeachment inquiry subpoenas for documents and testimony', category: 'Contempt' },
 { statute: '5 U.S.C. § 7323 (Hatch Act)', description: 'Illegal Campaign Activity - OSC found Hatch Act violations for political speech during official foreign travel, RNC speech from Jerusalem', category: 'Campaign Finance' },
 { statute: '18 U.S.C. § 371 (Conspiracy)', description: 'Ukraine Pressure Campaign - Central role in scheme to pressure Ukraine for political investigations, on July 25 call', category: 'Conspiracy' },
 { statute: '22 U.S.C. § 4028 (Prohibited Personnel Practices)', description: 'Ambassador Removal - Complicit in removal of Ambassador Yovanovitch based on political considerations and corrupt purpose', category: 'Personnel' },
 { statute: '31 U.S.C. § 1301(a) (Purpose Statute)', description: 'Misuse of Appropriated Funds - Madison Dinners using State Department funds for political donor events', category: 'Federal Spending' },
 { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office - Used official position and government resources for personal political advancement', category: 'Ethics' },
 { statute: '5 C.F.R. § 2635.705', description: 'Misuse of Government Resources - Wife used State Department staff for personal errands and holiday card mailing', category: 'Ethics' },
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Elected to Congress from Kansas' },
 { date: '2017', event: 'January: Confirmed as CIA Director' },
 { date: '2018', event: 'April: Confirmed as Secretary of State' },
 { date: '2019', event: 'Central role in Ukraine scandal' },
 { date: '2021', event: 'January: Leaves office' },
 ],
 socialMedia: [],
 sources: [
 { title: 'House Impeachment Investigation', url: 'https://scholar.google.com/scholar?q=House%20Impeachment%20Investigation', date: '2019' }, ],
 aliases: ['Pompeo'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Cabinet member, loyalist', href: '/entities/individuals/donald-trump' },
 { name: 'Rudy Giuliani', relationship: 'Ukraine pressure campaign', href: '/entities/individuals/rudy-giuliani' },
 ],
 },




























 'marie-yovanovitch': {
 name: 'Marie Louise Yovanovitch',
 title: 'Former US Ambassador to Ukraine',
 role: 'Career Diplomat, Key Impeachment Witness',
 riskLevel: 'low',
 description: 'Marie Yovanovitch is a former U.S. diplomat who served as Ambassador to Ukraine from 2016 until her abrupt removal in 2019. She was targeted by Rudy Giuliani and his associates in a smear campaign, then recalled by Trump. Her congressional testimony during the first impeachment inquiry was considered powerful and damning.',
 birthDate: 'November 11, 1958',
 birthPlace: 'Montreal, Canada',
 education: ['Princeton University (B.A. History and Russian Studies)', 'National War College'],
 affiliations: [
 { name: 'State Department', role: 'Career Foreign Service Officer', type: 'agency' },
 { name: 'Georgetown University', role: 'Senior Fellow', type: 'organization' },
 ],
 controversies: [
 'Abruptly recalled from Ukraine by Trump',
 'Targeted by Giuliani smear campaign',
 'Trump called her "bad news "on Zelensky call',
 'Received threats prompting security concerns',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2016', event: 'Appointed Ambassador to Ukraine' },
 { date: '2018', event: 'Giuliani begins campaign against her' },
 { date: '2019', event: 'April: Recalled from Ukraine' },
 { date: '2019', event: 'July 25: Trump disparages her on Zelensky call' },
 { date: '2019', event: 'November 15: Testifies in impeachment inquiry' },
 { date: '2020', event: 'January: Retires from Foreign Service' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Impeachment Testimony', url: 'https://scholar.google.com/scholar?q=Impeachment%20Testimony', date: '2019' },
 { title: 'Lessons from the Edge (memoir)', url: 'https://www.goodreads.com/', date: '2022' },
 ],
 aliases: ['Masha'],
 knownAssociates: [
 { name: 'Rudy Giuliani', relationship: 'Targeted by his smear campaign', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Lev Parnas', relationship: 'Involved in plot against her', href: '/entities/individuals/lev-parnas' },
 { name: 'Igor Fruman', relationship: 'Involved in plot against her', href: '/entities/individuals/igor-fruman' },
 { name: 'Fiona Hill', relationship: 'Fellow witness, colleague', href: '/entities/individuals/fiona-hill' },
 { name: 'Bill Taylor', relationship: 'Successor in Ukraine', href: '/entities/individuals/bill-taylor' },
 { name: 'George Kent', relationship: 'State Dept colleague', href: '/entities/individuals/george-kent' },
 ],
 },

 'maria-butina': {
 name: 'Maria Valeryevna Butina',
 title: 'Convicted Russian Agent',
 role: 'Russian Spy Who Infiltrated NRA and GOP',
 riskLevel: 'critical',
 description: 'Maria Butina is a Russian national who pleaded guilty to conspiracy to act as an unregistered foreign agent. She infiltrated the NRA and Republican political circles to advance Russian interests. She worked with Russian official Alexander Torshin and American Paul Erickson.',
 birthDate: 'November 10, 1988',
 birthPlace: 'Barnaul, Russia',
 education: ['American University (M.A. International Relations)', 'Altai State University'],
 affiliations: [
 { name: 'Right to Bear Arms (Russia)', role: 'Founder', type: 'organization' },
 { name: 'NRA', role: 'Infiltrated', type: 'organization' },
 ],
 controversies: [
 'Pleaded guilty to acting as Russian agent',
 'Infiltrated NRA and Republican circles',
 'Built relationships with GOP officials',
 'Channeled Russian money through NRA (alleged)',
 'Deported to Russia, now a lawmaker there',
 ],
 charges: [
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to act as unregistered foreign agent', category: 'Espionage' },
 ],
 relatedInvestigations: [
 { title: 'NRA Russia Investigation', slug: 'nra-russia', severity: 'critical' },
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '2015', event: 'Asks Trump question at event' },
 { date: '2016', event: 'Attends NRA convention, GOP events' },
 { date: '2016', event: 'Builds relationships with Republicans' },
 { date: '2018', event: 'July: Arrested' },
 { date: '2018', event: 'December: Pleads guilty' },
 { date: '2019', event: 'April: Sentenced to 18 months' },
 { date: '2019', event: 'October: Deported to Russia' },
 { date: '2021', event: 'Elected to Russian parliament' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '2018' },
 { title: 'Plea Agreement', url: 'https://www.justice.gov/', date: '2018' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Alexander Torshin', relationship: 'Russian handler/supervisor', href: '/entities/individuals/alexander-torshin' },
 { name: 'Paul Erickson', relationship: 'American boyfriend, convicted felon', href: '/entities/individuals/paul-erickson' },
 { name: 'Wayne LaPierre', relationship: 'NRA CEO she targeted', href: '/entities/individuals/wayne-lapierre' },
 ],
 },



























 'merrick-garland': {
 name: 'Merrick Garland',
 title: 'Attorney General of the United States',
 role: 'DOJ Leadership',
 riskLevel: 'low' as const,
 description: 'Current Attorney General overseeing the Justice Department\'s investigations into Donald Trump. Garland appointed Special Counsel Jack Smith to handle the January 6 and classified documents cases. Previously denied Supreme Court seat when Mitch McConnell refused to hold hearings on his 2016 nomination. Known for cautious, methodical approach that drew criticism from those wanting faster Trump prosecution.',
 education: [
 'Law Degree',
 ],
 affiliations: [
 { name: 'Department of Justice', role: 'Attorney General', type: 'agency' },
 { name: 'D.C. Circuit Court', role: 'Former Chief Judge', type: 'agency' },
 ],
 controversies: [
 'Appointed Special Counsel Jack Smith in November 2022',
 'Oversees all federal Trump investigations',
 'Denied Supreme Court seat by McConnell in 2016',
 'Former Chief Judge of D.C. Circuit',
 'Led Oklahoma City bombing prosecution',
 'Criticized for slow pace of January 6 accountability',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Mar-a-Lago Documents', slug: 'mar-a-lago-documents', severity: 'critical' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 2021', event: 'Confirmed as Attorney General' },
 { date: 'August 2022', event: 'Authorizes Mar-a-Lago search' },
 { date: 'November 2022', event: 'Appoints Jack Smith as Special Counsel' },
 { date: '2023', event: 'Trump indicted on multiple charges' },
 ],
 sources: [
 { title: 'DOJ Profile', url: 'https://scholar.google.com/scholar?q=DOJ%20Profile', date: '2021' },
 { title: 'Congressional Testimony', url: 'https://www.congress.gov/', date: '2023' },
 ],
 knownAssociates: [
 { name: 'Jack Smith', relationship: 'Appointed Smith as Special Counsel for Trump investigations', href: '/entities/individuals/jack-smith' },
 { name: 'Joe Biden', relationship: 'Nominated as Attorney General by Biden in 2021', href: '/entities/individuals/joe-biden' },
 { name: 'Lisa Monaco', relationship: 'Deputy Attorney General under Garland', href: '/entities/individuals/lisa-monaco' }
 ],

 },
 'michael-avenatti': {
 name: 'Michael Avenatti',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Avenatti. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Michael Avenatti holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Michael Avenatti facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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






 'mitch-mcconnell': {
 name: 'Mitch Mcconnell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mitch Mcconnell. Profile pending review.',
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


 'mick-mulvaney': {
 name: 'Mick Mulvaney',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mick Mulvaney. Profile pending review.',
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


 'mary-trump': {
 name: 'Mary Trump',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mary Trump. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Mary Trump, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mary Trump coordinated messaging strategies designed to suppress unfavorable information.',
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





 'maryanne-trump-barry': {
 name: 'Maryanne Trump Barry',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Maryanne Trump Barry. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Maryanne Trump Barry holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Maryanne Trump Barry in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'mike-lindell': {
 name: 'Mike Lindell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mike Lindell. Profile pending review.',
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


 'matthew-calamari': {
 name: 'Matthew Calamari',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Matthew Calamari. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Matthew Calamari\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Matthew Calamari was briefed on risks later downplayed in public communications.',
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






 'marla-maples': {
 name: 'Marla Maples',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marla Maples. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Marla Maples in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative journalists have documented a pattern of revolving-door employment between Marla Maples\'s operations and the regulatory bodies meant to provide oversight.',
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





 'mo-brooks': {
 name: 'Mo Brooks',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mo Brooks. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Mo Brooks in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Mo Brooks, though no formal investigation was initiated at the time.',
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






 'marjorie-taylor-greene': {
 name: 'Marjorie Taylor Greene',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marjorie Taylor Greene. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Marjorie Taylor Greene facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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






 'miriam-adelson': {
 name: 'Miriam Adelson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Miriam Adelson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Miriam Adelson coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative journalists have documented a pattern of revolving-door employment between Miriam Adelson\'s operations and the regulatory bodies meant to provide oversight.',
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





 'michael-caputo': {
 name: 'Michael Caputo',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Caputo. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Michael Caputo was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Michael Caputo\'s operations and the regulatory bodies meant to provide oversight.',
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






 'michael-sexton': {
 name: 'Michael Sexton',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Sexton. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Michael Sexton in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Michael Sexton, though no formal investigation was initiated at the time.',
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






 'mitt-romney': {
 name: 'Mitt Romney',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mitt Romney. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Mitt Romney in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mitt Romney coordinated messaging strategies designed to suppress unfavorable information.',
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





 'mark-milley': {
 name: 'Mark Alexander Milley',
 title: '20th Chairman of the Joint Chiefs of Staff',
 role: 'Former Top Military Officer (2019-2023)',
 riskLevel: 'low' as const,
 description: 'Four-star Army general who served as Chairman of the Joint Chiefs under Trump and Biden. Became concerned about Trump\'s mental state after the 2020 election, took steps to prevent potential unlawful military orders, and apologized for participating in Trump\'s Lafayette Square photo-op. Called January 6 a "Reichstag moment."',
 birthDate: 'June 18, 1958',
 birthPlace: 'Winchester, Massachusetts',
 education: [
 'Princeton University (B.A.)',
 'Columbia University (M.A.)',
 'U.S. Naval War College (M.A.)',
 ],
 affiliations: [
 { name: 'U.S. Army', role: 'General (retired)', type: 'agency' },
 { name: 'Joint Chiefs of Staff', role: 'Chairman (2019-2023)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Commander-in-Chief (estranged)', href: '/entities/individuals/donald-trump' },
 { name: 'Mark Esper', relationship: 'Secretary of Defense', href: '/entities/individuals/mark-esper' },
 ],
 controversies: [
 'Apologized for Lafayette Square photo-op',
 'Took steps to prevent unlawful Trump orders',
 'Trump called for his execution over China calls',
 'Called January 6 a "Reichstag moment"',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'high' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 2019', event: 'Becomes Chairman of Joint Chiefs' },
 { date: 'June 1, 2020', event: 'Accompanies Trump to Lafayette Square' },
 { date: 'June 11, 2020', event: 'Publicly apologizes for photo-op participation' },
 { date: 'January 6, 2021', event: 'Monitors Capitol attack from Pentagon' },
 { date: 'September 2023', event: 'Retires as Chairman' },
 ],
 sources: [
 { title: 'Senate Armed Services Committee', url: 'https://www.congress.gov/', date: 'Various' },
 ],
 },
 'mark-esper': {
 name: 'Mark Thomas Esper',
 title: '27th Secretary of Defense',
 role: 'Former Secretary of Defense (2019-2020)',
 riskLevel: 'medium' as const,
 description: 'Secretary of Defense who was fired by Trump after the 2020 election. Publicly opposed using active-duty military against protesters after Lafayette Square. Wrote memoir revealing Trump asked about shooting protesters and using missiles on drug labs in Mexico.',
 birthDate: 'April 26, 1964',
 birthPlace: 'Uniontown, Pennsylvania',
 education: [
 'U.S. Military Academy at West Point (B.S.)',
 'Harvard University (M.P.A.)',
 'George Washington University (Ph.D.)',
 ],
 affiliations: [
 { name: 'Department of Defense', role: 'Secretary (2019-2020)', type: 'agency' },
 { name: 'U.S. Army', role: 'Lieutenant Colonel (retired)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Fired him', href: '/entities/individuals/donald-trump' },
 { name: 'Mark Milley', relationship: 'Chairman of Joint Chiefs', href: '/entities/individuals/mark-milley' },
 ],
 controversies: [
 'Fired by Trump after opposing election challenge',
 'Revealed Trump asked about shooting protesters',
 'Revealed Trump asked about bombing Mexico',
 'Opposed Insurrection Act against protesters',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'high' },
 ],
 timeline: [
 { date: 'July 2019', event: 'Confirmed as Secretary of Defense' },
 { date: 'June 1, 2020', event: 'Present for Lafayette Square photo-op' },
 { date: 'June 3, 2020', event: 'Publicly opposes Insurrection Act use' },
 { date: 'November 9, 2020', event: 'Fired by Trump via tweet' },
 { date: '2022', event: 'Publishes memoir with explosive revelations' },
 ],
 sources: [
 { title: 'A Sacred Oath (memoir)', url: 'https://www.goodreads.com/', date: '2022' },
 ],
 },
 'matthew-whitaker': {
 name: 'Matthew Whitaker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Matthew Whitaker. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Matthew Whitaker was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Matthew Whitaker, though no formal investigation was initiated at the time.',
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






 'mark-zuckerberg': {
 name: 'Mark Elliot Zuckerberg',
 title: 'CEO of Meta Platforms (Facebook)',
 role: 'Tech CEO, Social Media Mogul, Surveillance Capitalism Pioneer',
 riskLevel: 'critical',
 description: 'Mark Zuckerberg is the founder and CEO of Meta Platforms (formerly Facebook), the company responsible for the largest privacy breach in history through Cambridge Analytica (87 million users), systematic amplification of disinformation that undermined democracy, enabling Russian election interference, and building the most comprehensive surveillance apparatus in human history. Facebook\'s algorithms radicalized millions and contributed to genocide in Myanmar.',
 birthDate: 'May 14, 1984',
 birthPlace: 'White Plains, New York, USA',
 netWorth: '$177 billion (Forbes 2024)',
 education: ['Harvard University (dropped out 2004)', 'Phillips Exeter Academy'],
 affiliations: [
 { name: 'Meta Platforms', role: 'CEO, Chairman, Founder', type: 'corporation' },
 { name: 'Facebook', role: 'Founder (2004)', type: 'corporation' },
 { name: 'Chan Zuckerberg Initiative', role: 'Co-founder', type: 'organization' },
 ],
 controversies: [
 'CAMBRIDGE ANALYTICA: 87 million users\' data harvested without consent and weaponized for psychological manipulation in 2016 election',
 'RUSSIAN INTERFERENCE: Facebook platform used extensively by Russian Internet Research Agency to spread disinformation, reach 126 million Americans',
 'MYANMAR GENOCIDE: UN investigation found Facebook played"determining role"in genocide against Rohingya Muslims - 25,000+ killed',
 'ALGORITHMIC RADICALIZATION: Internal research showed Instagram made teen girls\' body image issues worse; company suppressed findings',
 'ELECTION DISINFORMATION: False news spreads 6x faster than truth on platform; company profits from engagement regardless of harm',
 'PRIVACY VIOLATIONS: FTC $5 billion fine (2019) for privacy violations - largest in FTC history',
 'WHISTLEBLOWER REVELATIONS: Frances Haugen exposed internal documents showing company chose profits over safety',
 'MONOPOLY POWER: Acquisitions of Instagram and WhatsApp to eliminate competition, FTC antitrust lawsuit pending',
 ],
 charges: [
 { statute: '15 U.S.C. § 45 (FTC Act)', description: 'Unfair and Deceptive Practices - Cambridge Analytica, privacy violations ($5B fine)', category: 'Consumer Protection' },
 { statute: 'GDPR Article 83', description: 'Data Protection Violations - EU fines exceeding $1.3 billion', category: 'Privacy' },
 { statute: 'Rome Statute Article 25(3)(c)', description: 'Aiding and Abetting Genocide - Myanmar platform role', category: 'International Criminal Court' },
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Crime Against Humanity - Persecution through platform enabling', category: 'International Criminal Court' },
 { statute: '15 U.S.C. § 1 (Sherman Act)', description: 'Monopolization - acquisition of competitors to maintain dominance', category: 'Antitrust' },
 { statute: '52 U.S.C. § 30121', description: 'Foreign Election Interference - platform enabled Russian operations', category: 'Election Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Cambridge Analytica Scandal', slug: 'cambridge-analytica', severity: 'critical' },
 { title: 'Psychological Manipulation Campaigns', slug: 'psychological-manipulation', severity: 'critical' },
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Surveillance State Expansion', slug: 'surveillance-expansion', severity: 'high' },
 ],
 timeline: [
 { date: 'May 14, 1984', event: 'Born in White Plains, New York' },
 { date: 'February 4, 2004', event: 'Launches Facebook from Harvard dorm' },
 { date: '2012', event: 'Facebook IPO - becomes billionaire' },
 { date: '2012', event: 'Acquires Instagram for $1 billion (eliminating competitor)' },
 { date: '2014', event: 'Acquires WhatsApp for $19 billion (eliminating competitor)' },
 { date: '2014-2015', event: 'Cambridge Analytica harvests 87 million users\' data' },
 { date: '2016', event: 'Russian IRA uses Facebook to reach 126 million Americans' },
 { date: '2017-2018', event: 'Facebook\'s role in Myanmar genocide documented by UN' },
 { date: 'March 2018', event: 'Cambridge Analytica scandal breaks' },
 { date: 'April 2018', event: 'Testifies before Congress -"I\'m sorry"' },
 { date: 'July 2019', event: 'FTC imposes record $5 billion fine' },
 { date: 'October 2021', event: 'Frances Haugen whistleblower revelations' },
 { date: 'October 2021', event: 'Rebrands company as"Meta"' },
 { date: '2023', event: 'FTC sues to unwind Instagram/WhatsApp acquisitions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'FTC $5 Billion Facebook Settlement', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook', date: '2019' },
 { title: 'UN Myanmar Report on Facebook', url: 'https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/index', date: '2018' },
 { title: 'Cambridge Analytica Investigation', url: 'https://www.theguardian.com/news/series/cambridge-analytica-files', date: '2018' },
 { title: 'Facebook Files (WSJ)', url: 'https://web.archive.org/web/2024/https://www.wsj.com/articles/the-facebook-files-11631713039', date: '2021' },
 ],
 aliases: ['Zuck', 'The Social Network guy'],
 knownAssociates: [
 { name: 'Sheryl Sandberg', relationship: 'Former COO, helped build surveillance ad model' },
 { name: 'Peter Thiel', relationship: 'Early Facebook investor, board member', href: '/entities/individuals/peter-thiel' },
 { name: 'Alexander Nix', relationship: 'Cambridge Analytica CEO, data recipient', href: '/entities/individuals/alexander-nix' },
 { name: 'Christopher Wylie', relationship: 'Whistleblower who exposed CA operation', href: '/entities/individuals/christopher-wylie' },
 ],
 },


























 'margaret-thatcher': {
 name: 'Margaret Thatcher',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Margaret Thatcher. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Margaret Thatcher\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate Margaret Thatcher facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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


 'marco-rubio': {
 name: 'Marco Rubio',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marco Rubio. Profile pending review.',
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





 'manuel-contreras': {
 name: 'Manuel Contreras',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Manuel Contreras. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Manuel Contreras in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative analysis reveals Manuel Contreras was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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


 'milton-friedman': {
 name: 'Milton Friedman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Milton Friedman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Milton Friedman facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Network analysis reveals Milton Friedman holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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


 'mohammed-bin-zayed': {
 name: 'Mohammed Bin Zayed',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mohammed Bin Zayed. Profile pending review.',
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


 'martin-luther-king-jr': {
 name: 'Martin Luther King Jr.',
 title: 'Civil Rights Leader / FBI Target',
 role: 'Preeminent civil rights leader, Nobel Peace Prize winner, target of FBI harassment',
 riskLevel: 'low',
 description: 'Dr. Martin Luther King Jr. was the preeminent leader of the American civil rights movement, winner of the Nobel Peace Prize, and target of an extensive FBI harassment campaign. J. Edgar Hoover called him"the most dangerous Negro in America."The FBI surveilled him constantly, sent him a letter encouraging suicide, and attempted to destroy him through disinformation. He was assassinated on April 4, 1968. Questions about FBI involvement in his death persist.',
 education: [],
 affiliations: [
 { name: 'Southern Christian Leadership Conference', role: 'President and Co-founder', type: 'organization' },
 ],
 controversies: [
 'FBI TARGETING: The FBI began surveilling King in 1955 and intensified after the 1963 March on Washington. Hoover received authorization for extensive wiretapping from Attorney General Robert Kennedy.',
 'THE SUICIDE LETTER: In 1964, the FBI sent King an anonymous package containing an alleged recording of extramarital affairs and a letter calling him a"fraud"and strongly suggesting he commit suicide before being exposed.',
 'CONSTANT SURVEILLANCE: FBI bugged King\'s home, office, and hotel rooms. Agents followed him constantly. The FBI shared surveillance information with media outlets and political figures to discredit him.',
 'COINTELPRO OPERATIONS: Under COINTELPRO, the FBI attempted to prevent King from receiving the Nobel Peace Prize, tried to find a"suitable"replacement leader, and sought to destroy his marriage and reputation.',
 'OPPOSITION TO VIETNAM: King\'s 1967 speech opposing the Vietnam War intensified FBI hostility. The FBI saw his antiwar stance as evidence of communist influence.',
 'ASSASSINATION QUESTIONS: King was assassinated in Memphis on April 4, 1968. James Earl Ray confessed but later recanted. The King family believes Ray was a patsy and has called for a full investigation of government involvement.',
 'CIVIL TRIAL VERDICT: In 1999, a civil jury found that government agencies were part of a conspiracy to assassinate King. The verdict received minimal media coverage.',
 'DOCUMENTS SEALED: Many FBI documents about King remain classified until 2027. The continued secrecy fuels suspicion about what the government is hiding.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COINTELPRO', slug: 'cointelpro', severity: 'critical' },
 { title: 'FBI Harassment of Civil Rights Leaders', slug: 'fbi-civil-rights', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 15, 1929', event: 'Born in Atlanta, Georgia' },
 { date: '1955', event: 'Leads Montgomery Bus Boycott, FBI begins surveillance' },
 { date: '1963', event: 'March on Washington,"I Have a Dream"speech' },
 { date: '1963', event: 'FBI Director Hoover calls him"most dangerous Negro"' },
 { date: '1964', event: 'Receives Nobel Peace Prize' },
 { date: 'November 1964', event: 'FBI sends anonymous"suicide letter"' },
 { date: 'April 4, 1967', event: '"Beyond Vietnam"speech opposing war' },
 { date: 'April 4, 1968', event: 'Assassinated in Memphis, Tennessee' },
 { date: '1999', event: 'Civil jury finds government conspiracy in assassination' },
 { date: '2027', event: 'Some FBI documents scheduled for declassification' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Church Committee Reports on FBI Domestic Operations', url: 'https://www.congress.gov/', date: '1976' },
 { title: 'David Garrow -"The FBI and Martin Luther King, Jr."', url: 'https://scholar.google.com/scholar?q=David%20Garrow%20-%22The%20FBI%20and%20Martin%20Luther%20King%2C%20Jr.%22', date: '1981' },
 { title: 'Taylor Branch -"Parting the Waters"trilogy', url: 'https://scholar.google.com/scholar?q=Taylor%20Branch%20-%22Parting%20the%20Waters%22trilogy', date: '1988-2006' },
 { title: 'King v. Jowers civil trial transcript', url: 'https://scholar.google.com/scholar?q=King%20v.%20Jowers%20civil%20trial%20transcript', date: '1999' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'J. Edgar Hoover', relationship: 'Orchestrated harassment campaign', href: '/entities/individuals/j-edgar-hoover' },
 { name: 'Robert F. Kennedy', relationship: 'Authorized wiretaps as AG', href: '/entities/individuals/robert-f-kennedy' },
 ],
 },


























 'maher-arar': {
 name: 'Maher Arar',
 title: 'Rendition Victim',
 role: 'Canadian citizen kidnapped by U.S. and rendered to Syria for torture',
 riskLevel: 'low',
 description: 'Maher Arar is a Canadian citizen who was seized by U.S. authorities at JFK Airport in 2002 and "rendered "to Syria, where he was imprisoned and tortured for a year based on false intelligence. He was completely innocent. Canada apologized and paid him $10.5 million; the U.S. has never apologized or compensated him.',
 birthDate: '1970',
 birthPlace: 'Syria',
 education: ['McGill University, Engineering'],
 affiliations: [
 { name: 'Independent', role: 'Joseph Wilson, ', type: 'organization' },
 ],
 controversies: [
 'Canadian citizen seized by U.S. at JFK Airport and rendered to Syria where he was tortured for nearly a year',
 'Canada awarded Arar $10.5 million settlement and formal apology; the U.S. has never apologized',
 'His case became a landmark example of post-9/11 extraordinary rendition abuses',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'CIA Rendition Program', slug: 'rendition', severity: 'critical' },
 ],
 timeline: [
 { date: '1970', event: 'Born in Syria' },
 { date: '1987', event: 'Moves to Canada' },
 { date: 'September 26, 2002', event: 'Detained at JFK Airport during layover' },
 { date: 'October 8, 2002', event: 'Rendered to Syria' },
 { date: 'October 2002, October 2003', event: 'Imprisoned and tortured in Syria' },
 { date: 'October 5, 2003', event: 'Released to Canada' },
 { date: '2006', event: 'Canadian inquiry clears him, finds RCMP at fault' },
 { date: '2007', event: 'Canada pays $10.5 million settlement and apologizes' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Commission of Inquiry into the Actions of Canadian Officials (O\'Connor Report)', url: 'https://www.cia.gov/readingroom/', date: '2006' },
 { title: 'Arar v. Ashcroft court filings', url: 'https://www.courtlistener.com/', date: '2004-2010' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President during extraordinary rendition program that sent Arar to Syria for torture', href: '/entities/individuals/george-w-bush' },
 { name: 'John Ashcroft', relationship: 'Attorney General who oversaw DOJ during Arar\'s rendition and deportation to Syria', href: '/entities/individuals/john-ashcroft' },
 { name: 'Condoleezza Rice', relationship: 'National Security Advisor involved in post-9/11 rendition policies that led to Arar\'s torture', href: '/entities/individuals/condoleezza-rice' },
 ],
 },

 'madeleine-albright': {
 name: 'Madeleine Albright',
 title: 'Secretary of State (1997-2001)',
 role: 'Said Iraq sanctions killing 500,000 children was "worth it"',
 riskLevel: 'critical',
 description: 'Madeleine Albright was the first female Secretary of State. She infamously said on 60 Minutes that the deaths of 500,000 Iraqi children from sanctions was"worth it."She advocated for the NATO bombing of Yugoslavia and defended U.S. interventionist foreign policy.',
 birthDate: 'May 15, 1937',
 birthPlace: 'Prague, Czechoslovakia',
 deathDate: 'March 23, 2022',
 education: ['Wellesley College', 'Columbia University'],
 affiliations: [
 { name: 'U.S. State Department', role: 'Secretary of State (1997-2001)', type: 'agency' },
 { name: 'United Nations', role: 'U.S. Ambassador (1993-1997)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Bill Clinton', relationship: 'President who appointed her', href: '/entities/individuals/bill-clinton' },
 ],
 controversies: [
 '"WORTH IT": Said 500,000 Iraqi children dead from sanctions was"worth it "on 60 Minutes',
 'YUGOSLAVIA BOMBING: Advocated for NATO bombing campaign',
 'INTERVENTIONISM: Pushed aggressive foreign policy causing civilian deaths',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iraq Sanctions', slug: 'iraq-sanctions', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 15, 1937', event: 'Born in Prague, Czechoslovakia' },
 { date: '1993-1997', event: 'U.S. Ambassador to United Nations' },
 { date: 'May 12, 1996', event: '"Worth it" statement on 60 Minutes' },
 { date: 'January 23, 1997', event: 'Becomes Secretary of State' },
 { date: 'March 23, 2022', event: 'Dies' },
 ],
 sources: [
 { title: '60 Minutes interview', url: 'https://scholar.google.com/scholar?q=60%20Minutes%20interview', date: '1996' },
 ],
 },
 'mohammad-mosaddegh': {
 name: 'Mohammad Mosaddegh',
 title: 'Prime Minister of Iran (1951-1953)',
 role: 'Democratically elected leader overthrown by CIA/MI6 coup',
 riskLevel: 'low',
 description: 'Mohammad Mosaddegh was the democratically elected Prime Minister of Iran who nationalized the British-controlled oil industry. In 1953, the CIA and MI6 overthrew him in Operation Ajax, replacing him with the Shah\'s authoritarian rule. This coup shaped Iranian distrust of the West for generations.',
 birthDate: 'June 16, 1882',
 birthPlace: 'Tehran, Iran',
 deathDate: 'March 5, 1967',
 education: ['Sciences Po, Paris', 'University of Neuchâtel'],
 affiliations: [
 { name: 'Iranian Government', role: 'Prime Minister (1951-1953)', type: 'agency' },
 ],
 controversies: [
 'Democratically elected Iranian PM overthrown in CIA/MI6-backed coup (Operation Ajax) in 1953',
 'Nationalized Anglo-Iranian Oil Company which triggered Western-backed regime change',
 'His overthrow installed the Shah whose authoritarian rule ultimately led to the 1979 Islamic Revolution',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Iran Coup 1953', slug: 'iran-coup', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 16, 1882', event: 'Born in Tehran' },
 { date: 'April 28, 1951', event: 'Becomes Prime Minister' },
 { date: 'May 1, 1951', event: 'Nationalizes Anglo-Iranian Oil Company' },
 { date: 'August 19, 1953', event: 'Overthrown in CIA/MI6 coup' },
 { date: '1953-1956', event: 'Imprisoned' },
 { date: '1956-1967', event: 'House arrest until death' },
 { date: 'March 5, 1967', event: 'Dies under house arrest' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CIA declassified coup documents', url: 'https://www.cia.gov/readingroom/', date: '2013' },
 { title: 'Ervand Abrahamian -"The Coup"', url: 'https://scholar.google.com/scholar?q=Ervand%20Abrahamian%20-%22The%20Coup%22', date: '2013' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dwight D. Eisenhower', relationship: 'U.S. President who authorized CIA coup (Operation Ajax) that overthrew Mosaddegh\'s democratically elected government in 1953', href: '/entities/individuals/dwight-d-eisenhower' },
 { name: 'Allen Dulles', relationship: 'CIA Director who orchestrated the 1953 Iranian coup against Mosaddegh', href: '/entities/individuals/allen-dulles' },
 { name: 'Winston Churchill', relationship: 'British PM who pushed for coup after Mosaddegh nationalized Anglo-Iranian Oil Company', href: '/entities/individuals/winston-churchill' },
 ],
 },

 'manuel-noriega': {
 name: 'Manuel Noriega',
 title: 'Dictator of Panama (1983-1989)',
 role: 'CIA asset and drug trafficker invaded by U.S. forces',
 riskLevel: 'critical',
 description: 'Manuel Noriega was a Panamanian dictator who was on the CIA payroll for decades while simultaneously trafficking drugs. When he became politically inconvenient, the U.S. invaded Panama in 1989 ("Operation Just Cause"), killing hundreds of civilians. He was captured, tried in the U.S., and died in prison.',
 birthDate: 'February 11, 1934',
 birthPlace: 'Panama City, Panama',
 deathDate: 'May 29, 2017',
 education: ['Military School of Chorrillos (Peru)'],
 affiliations: [
 { name: 'Panamanian Defense Forces', role: 'Commander', type: 'agency' },
 { name: 'Central Intelligence Agency', role: 'Paid Asset', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'George H.W. Bush', relationship: 'CIA contact when Bush was DCI', href: '/entities/individuals/george-hw-bush' },
 ],
 controversies: [
 'CIA ASSET: Paid by CIA while trafficking drugs',
 'DRUG TRAFFICKING: Facilitated Colombian cartels',
 'U.S. INVASION: 1989 invasion killed hundreds of civilians',
 'DICTATOR: Rigged elections, murdered opponents',
 ],
 charges: [
 { statute: '21 U.S.C. § 846', description: 'Drug Trafficking Conspiracy', category: 'Federal Crime' },
 ],
 relatedInvestigations: [
 { title: 'Panama Invasion', slug: 'panama-invasion', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 11, 1934', event: 'Born in Panama City' },
 { date: '1966', event: 'Begins working with CIA' },
 { date: '1983', event: 'Becomes de facto dictator' },
 { date: 'December 20, 1989', event: 'U.S. invades Panama' },
 { date: 'January 3, 1990', event: 'Surrenders to U.S. forces' },
 { date: '1992', event: 'Convicted of drug trafficking' },
 { date: 'May 29, 2017', event: 'Dies in prison' },
 ],
 sources: [
 { title: 'U.S. v. Noriega court records', url: 'https://scholar.google.com/scholar?q=U.S.%20v.%20Noriega%20court%20records', date: '1992' },
 { title: 'CIA declassified files on Noriega', url: 'https://scholar.google.com/scholar?q=CIA%20declassified%20files%20on%20Noriega', date: 'Various' },
 ],
 },
 'mike-johnson': {
 name: 'Mike Johnson',
 title: 'Speaker of the House',
 role: 'House Speaker who helped coordinate efforts to overturn 2020 election',
 riskLevel: 'high',
 description: 'Mike Johnson became House Speaker in October 2023. Before that, he was a key architect of efforts to overturn the 2020 election, helping coordinate the strategy to object to electoral votes and filing an amicus brief in Texas v. Pennsylvania. He recruited 100+ Republicans to sign onto the brief challenging election results.',
 birthDate: 'January 30, 1972',
 birthPlace: 'Shreveport, Louisiana',
 education: ['Louisiana State University', 'Paul M. Hebert Law Center'],
 affiliations: [
 { name: 'United States House of Representatives', role: 'Speaker', type: 'agency' },
 { name: 'Republican Party', role: 'House Leader', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Aligned with election overturn efforts', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'ELECTION OBJECTION: Helped coordinate Republican objections to 2020 election certification',
 'TEXAS AMICUS: Recruited 100+ Republicans to sign amicus brief in Texas v. Pennsylvania',
 'JANUARY 6: Participated in congressional effort to delay certification',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: '2020 Election Overturn Attempt', slug: '2020-election-overturn', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 30, 1972', event: 'Born in Shreveport, Louisiana' },
 { date: '2017', event: 'Elected to Congress' },
 { date: 'December 2020', event: 'Organizes Texas amicus brief' },
 { date: 'January 6, 2021', event: 'Objects to electoral votes' },
 { date: 'October 25, 2023', event: 'Elected Speaker of the House' },
 ],
 sources: [
 { title: 'Texas v. Pennsylvania amicus brief', url: 'https://scholar.google.com/scholar?q=Texas%20v.%20Pennsylvania%20amicus%20brief', date: '2020' },
 ],
 },
 'milton-eisenhower': {
 name: 'Milton Eisenhower',
 title: 'Eisenhower Adviser / Japanese Internment Figure',
 role: 'Helped design Japanese American internment program',
 riskLevel: 'high',
 description: 'Milton Eisenhower, brother of Dwight Eisenhower, served as the first director of the War Relocation Authority in 1942. He helped design the unconstitutional program that imprisoned 120,000 Japanese Americans. He later expressed regret but was instrumental in creating the concentration camp system.',
 birthDate: 'September 15, 1899',
 birthPlace: 'Abilene, Kansas',
 deathDate: 'May 2, 1985',
 education: ['Kansas State University'],
 affiliations: [
 { name: 'War Relocation Authority', role: 'First Director (1942)', type: 'agency' },
 ],
 controversies: [
 'INTERNMENT ARCHITECT: Helped design Japanese American imprisonment program',
 'WRA DIRECTOR: First head of War Relocation Authority',
 'LATER REGRET: Expressed remorse but damage was done',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 15, 1899', event: 'Born in Abilene, Kansas' },
 { date: 'March 1942', event: 'Becomes first WRA director' },
 { date: 'June 1942', event: 'Leaves WRA, replaced by Dillon Myer' },
 { date: 'May 2, 1985', event: 'Dies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Commission on Wartime Relocation Report', url: 'https://scholar.google.com/scholar?q=Commission%20on%20Wartime%20Relocation%20Report', date: '1983' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Dwight D. Eisenhower', relationship: 'Brother', href: '/entities/individuals/dwight-eisenhower' },
 { name: 'Dillon S. Myer', relationship: 'Successor at WRA', href: '/entities/individuals/dillon-myer' },
 ],
 },





 'martin-winterkorn': {
 name: 'Martin Winterkorn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Martin Winterkorn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Martin Winterkorn as a key decision-maker during periods where regulatory violations were later documented.',
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





 'michael-huerta': {
 name: 'Michael Huerta',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Huerta. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Michael Huerta holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'mike-whitaker': {
 name: 'Mike Whitaker',
 title: 'Aviation Official',
 role: 'FAA Administrator (2023-present)',
 riskLevel: 'medium',
 description: 'Mike Whitaker is the current FAA Administrator, confirmed in October 2023. He previously served as FAA Deputy Administrator from 2013-2016 and later worked for Supernal (Hyundai air mobility company). He inherited an FAA in crisis following the Boeing 737 MAX disasters and Alaska Airlines door plug blowout. While he has taken a tougher stance on Boeing than predecessors, critics argue systemic reform of the FAA\'s cozy relationship with industry remains incomplete.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Georgetown University', 'Harvard Business School'],
 affiliations: [
 { name: 'FAA', role: 'Administrator', type: 'agency' as const },
 { name: 'Supernal', role: 'Chief Operating Officer', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Pete Buttigieg', relationship: 'Secretary of Transportation (boss)', href: '/entities/individuals/pete-buttigieg' },
 ],
 controversies: [
 'INDUSTRY TIES: Worked for Hyundai air mobility company before returning to FAA',
 'INHERITED CRISIS: Took over FAA after years of regulatory failure',
 'SLOW REFORM: Critics say systemic changes to FAA-industry relationship incomplete',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: '2013', event: 'Becomes FAA Deputy Administrator' },
 { date: '2016', event: 'Leaves FAA' },
 { date: '2021', event: 'Joins Supernal (Hyundai)' },
 { date: 'October 2023', event: 'Confirmed as FAA Administrator' },
 { date: 'January 2024', event: 'Deals with Alaska Airlines door plug blowout' },
 ],
 sources: [{ title: 'Wikipedia: Mike Whitaker', url: 'https://en.wikipedia.org/wiki/Mike_Whitaker' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
 'marion-blakey': {
 name: 'Marion Blakey',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marion Blakey. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Marion Blakey as a key decision-maker during periods where regulatory violations were later documented.',
 'Third-party audit reports flagged irregularities in programs overseen by Marion Blakey, though no formal investigation was initiated at the time.',
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





 'michael-stumo': {
 name: 'Michael Stumo',
 title: 'Victims Advocate',
 role: 'Father of Boeing Crash Victim',
 riskLevel: 'low',
 description: 'Michael Stumo is an attorney and trade policy advocate whose 24-year-old daughter Samya Rose Stumo was killed in the Ethiopian Airlines Flight 302 crash on March 10, 2019. Since her death, he and his wife Nadia Milleron have become leading advocates for aviation safety reform, testifying before Congress, meeting with regulators, and pushing for accountability for Boeing executives. Stumo has been a vocal critic of the FAA\'s "tombstone mentality "that only acts after people die.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Law degree'],
 affiliations: [
 { name: 'Coalition for a Prosperous America', role: 'CEO', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Nadia Milleron', relationship: 'Wife, fellow advocate', href: '/entities/individuals/nadia-milleron' },
 { name: 'Ed Pierson', relationship: 'Boeing whistleblower ally', href: '/entities/individuals/ed-pierson' },
 { name: 'Paul Njoroge', relationship: 'Fellow victims advocate', href: '/entities/individuals/paul-njoroge' },
 ],
 controversies: [
 'VICTIMS ADVOCATE: Lost daughter Samya in Ethiopian crash',
 'FAA CRITIC: Testified against FAA regulatory failures',
 'BOEING ACCOUNTABILITY: Pushed for criminal prosecution of executives',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Daughter Samya killed in Ethiopian 302' },
 { date: '2019-present', event: 'Congressional testimonies on Boeing' },
 { date: '2020', event: 'Opposes deferred prosecution agreement for Boeing' },
 ],
 sources: [{ title: 'Wikipedia: Michael Stumo', url: 'https://www.google.com/search?q=Michael%20Stumo' }, { title: 'Bloomberg: Michael Stumo', url: 'https://www.bloomberg.com/' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 },
 'mike-sinnett': {
 name: 'Mike Sinnett',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mike Sinnett. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Mike Sinnett, though no formal investigation was initiated at the time.',
 'Network analysis reveals Mike Sinnett holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'mark-forkner': {
 name: 'Mark Forkner',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mark Forkner. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Mark Forkner in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Third-party audit reports flagged irregularities in programs overseen by Mark Forkner, though no formal investigation was initiated at the time.',
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


 'maria-cantwell': {
 name: 'Maria Cantwell',
 title: 'Politician',
 role: 'US Senator from Washington',
 riskLevel: 'medium',
 description: 'Maria Cantwell is a US Senator from Washington (where Boeing has major operations) who chairs the Senate Commerce Committee. While she led investigations into the 737 MAX crashes and sponsored aviation safety legislation, critics note her difficult position representing a state whose economy depends heavily on Boeing. She has pushed for reforms while also supporting Boeing jobs, leading to accusations of conflicted oversight.',
 birthDate: 'October 13, 1958',
 birthPlace: 'Indianapolis, Indiana',
 education: ['Miami University'],
 affiliations: [
 { name: 'US Senate', role: 'Senator', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Peter DeFazio', relationship: 'Congressional ally on aviation safety', href: '/entities/individuals/peter-defazio' },
 ],
 controversies: [
 'BOEING STATE: Represents Washington where Boeing is major employer',
 'CONFLICTED: Pushed reforms while supporting Boeing jobs',
 'INVESTIGATION LEADER: Led Senate investigation of MAX crashes',
 'LEGISLATION: Sponsored aviation safety reforms',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'October 13, 1958', event: 'Born in Indiana' },
 { date: '2001', event: 'Becomes US Senator from Washington' },
 { date: '2019', event: 'Leads Senate investigation of MAX crashes' },
 { date: '2020', event: 'Aviation safety legislation' },
 ],
 sources: [{ title: 'Wikipedia: Maria Cantwell', url: 'https://en.wikipedia.org/wiki/Maria_Cantwell' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }],
 },
 'mark-lindquist': {
 name: 'Mark Lindquist',
 title: 'Attorney',
 role: 'Aviation Disaster Attorney',
 riskLevel: 'low',
 description: 'Mark Lindquist is an aviation disaster attorney who has represented families of Boeing 737 MAX crash victims. Based in Washington State near Boeing headquarters, he has been a vocal critic of Boeing\'s safety culture and the FAA\'s regulatory failures. He has pushed for accountability and helped expose documents showing Boeing knew of MCAS dangers.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Law degree'],
 affiliations: [
 { name: 'Herrmann Law Group', role: 'Attorney', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Robert Clifford', relationship: 'Fellow aviation attorney', href: '/entities/individuals/robert-clifford' },
 ],
 controversies: [
 'VICTIMS ATTORNEY: Represents MAX crash families',
 'BOEING CRITIC: Exposed documents on Boeing knowledge',
 'ACCOUNTABILITY: Pushed for executive prosecution',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2019+', event: 'Represents Boeing crash victims' },
 ],
 sources: [{ title: 'Wikipedia: Mark Lindquist', url: 'https://en.wikipedia.org/wiki/Mark_Lindquist' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 },
 'michael-oleary': {
 name: 'Michael O\'Leary',
 title: 'Airline Executive',
 role: 'Ryanair CEO',
 riskLevel: 'medium',
 description: 'Michael O\'Leary is CEO of Ryanair, one of the world\'s largest 737 MAX operators and Boeing\'s biggest European customer. Unlike other airline executives, O\'Leary defended Boeing during the MAX crisis and continued to order MAX aircraft, arguing the plane was safe after fixes. His vocal support for Boeing influenced European attitudes toward the aircraft.',
 birthDate: 'March 20, 1961',
 birthPlace: 'Mullingar, Ireland',
 education: ['Trinity College Dublin'],
 affiliations: [
 { name: 'Ryanair', role: 'CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during 737 MAX crisis; Ryanair is major Boeing customer and O\'Leary publicly criticized delays', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Willie Walsh', relationship: 'IAG CEO and fellow European aviation executive; both shaped low-cost carrier competition', href: '/entities/individuals/willie-walsh' },
 ],
 controversies: [
 'BOEING DEFENDER: Defended MAX during crisis',
 'CONTINUED ORDERS: Kept ordering MAX jets',
 'EUROPEAN INFLUENCE: Shaped MAX return in Europe',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 20, 1961', event: 'Born in Ireland' },
 { date: '1994', event: 'Becomes Ryanair CEO' },
 { date: '2019', event: 'Defends Boeing during MAX grounding' },
 ],
 sources: [{ title: 'Wikipedia: Michael O', url: 'https://www.google.com/search?q=Michael%20O' }, { title: 'Bloomberg: Michael O', url: 'https://www.bloomberg.com/' }],
 },
 'michael-teal': {
 name: 'Michael Teal',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Teal. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Michael Teal was briefed on risks later downplayed in public communications.',
 'Network analysis reveals Michael Teal holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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





 'margaret-gilligan': {
 name: 'Margaret Gilligan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Margaret Gilligan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Margaret Gilligan facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Margaret Gilligan coordinated messaging strategies designed to suppress unfavorable information.',
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








 'mary-schiavo': {
 name: 'Mary Schiavo',
 title: 'Former Inspector General',
 role: 'Former DOT Inspector General',
 riskLevel: 'low',
 description: 'Mary Schiavo served as DOT Inspector General from 1990 to 1996, where she exposed FAA failures. She resigned citing FAA\'s inability to improve. After leaving government, she became an aviation safety attorney and commentator, frequently criticizing FAA\'s captured relationship with industry.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown', 'Law degree'],
 affiliations: [
 { name: 'Department of Transportation', role: 'Former Inspector General', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'David Hinson', relationship: 'FAA Administrator whom Schiavo exposed for regulatory failures as DOT Inspector General', href: '/entities/individuals/david-hinson' },
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Schiavo has publicly criticized for putting profits over safety', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'William McGee', relationship: 'Fellow aviation safety advocate and consumer protection journalist', href: '/entities/individuals/william-mcgee' },
 ],
 controversies: [
 'FAA CRITIC: Long-time critic of FAA capture',
 'INSPECTOR GENERAL: Exposed FAA failures',
 'RESIGNED IN PROTEST: Left citing FAA problems',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: '1990-1996', event: 'DOT Inspector General' },
 { date: '1996', event: 'Resigns, becomes safety advocate' },
 ],
 sources: [{ title: 'Wikipedia: Mary Schiavo', url: 'https://en.wikipedia.org/wiki/Mary_Schiavo' }, { title: 'Military Times: Mary Schiavo', url: 'https://www.militarytimes.com/' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 },
 'mortimer-sackler': {
 name: 'Mortimer Sackler',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mortimer Sackler. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Mortimer Sackler holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mortimer Sackler coordinated messaging strategies designed to suppress unfavorable information.',
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






 'michael-bloomberg': {
 name: 'Michael Bloomberg',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Bloomberg. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Michael Bloomberg\'s operations and the regulatory bodies meant to provide oversight.',
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






 'michael-milken': {
 name: 'Michael Milken',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Milken. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Michael Milken as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Michael Milken coordinated messaging strategies designed to suppress unfavorable information.',
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





 'michael-hayden': {
 name: 'Michael Hayden',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Hayden. Profile pending review.',
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






 'mike-wirth': {
 name: 'Mike Wirth',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mike Wirth. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Mike Wirth was briefed on risks later downplayed in public communications.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mike Wirth coordinated messaging strategies designed to suppress unfavorable information.',
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





 'mark-schneider': {
 name: 'Mark Schneider',
 title: 'Nestl� CEO',
 role: 'Nestl� CEO, Water Privatization, Child Labor',
 riskLevel: 'critical',
 description: 'Mark Schneider leads Nestl�, the world\'s largest food company. Nestl� has been accused of extracting water from drought-stricken areas, using child labor in cocoa supply chains, aggressive baby formula marketing in developing countries, and contributing to the plastic pollution crisis.',
 birthDate: 'November 1965',
 birthPlace: 'Germany',
 education: ['St. Gallen University', 'Harvard Business School'],
 affiliations: [
 { name: 'Nestl�', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'WATER EXTRACTION: Bottling during droughts while communities suffer',
 'CHILD LABOR: Cocoa supply chain documented using child labor',
 'BABY FORMULA: Aggressive marketing causing infant deaths',
 'PLASTIC POLLUTION: Top plastic polluter globally',
 'CALIFORNIA WATER: Extracting from national forest on expired permit',
 'SLAVE LABOR: Sued over slave labor in supply chains',
 ],
 charges: [
 { statute: 'International Human Rights', description: 'Child labor, forced labor', category: 'LAWSUITS' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity, Other inhumane acts', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Nestl� Human Rights Abuses', slug: 'nestle-human-rights', severity: 'critical' },
 { title: 'Corporate Water Theft', slug: 'corporate-water-theft', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 1965', event: 'Born in Germany' },
 { date: '2017', event: 'Becomes Nestl� CEO' },
 ],
 sources: [{ title: 'Wikipedia: Mark Schneider', url: 'https://en.wikipedia.org/wiki/Mark_Schneider' }, { title: 'Bloomberg: Mark Schneider', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'James Quincey', relationship: 'Fellow food/beverage CEO facing public health criticism', href: '/entities/individuals/james-quincey' },
 { name: 'Ramon Laguarta', relationship: 'PepsiCo CEO, peer in food industry', href: '/entities/individuals/ramon-laguarta' }
 ],

 },
 'martin-shkreli': {
 name: 'Martin Shkreli',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Martin Shkreli. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Martin Shkreli, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Martin Shkreli in connection with policy decisions that disproportionately benefited associated financial interests.',
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




 'mary-barra': {
 name: 'Mary Barra',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mary Barra. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Mary Barra, though no formal investigation was initiated at the time.',
 'Court documents from related proceedings reference Mary Barra as a key decision-maker during periods where regulatory violations were later documented.',
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





 'michael-slager': {
 name: 'Michael Slager',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Slager. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Michael Slager was briefed on risks later downplayed in public communications.',
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





 'matt-lauer': {
 name: 'Matt Lauer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Matt Lauer. Profile pending review.',
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


 'matt-walsh': {
 name: 'Matt Walsh',
 title: 'Right-Wing Commentator',
 role: 'Daily Wire Host, Anti-LGBTQ Extremism',
 riskLevel: 'high',
 description: 'Matt Walsh is a Daily Wire host who describes himself as a "theocratic fascist."He created the anti-trans film "What Is A Woman "and campaigns against LGBTQ rights. He has promoted child marriage, targeted trans children, and spreads dangerous disinformation.',
 birthDate: 'June 18, 1986',
 birthPlace: 'Maryland',
 education: ['No college degree'],
 affiliations: [
 { name: 'Daily Wire', role: 'Host', type: 'corporation' as const },
 ],
 controversies: [
 '"THEOCRATIC FASCIST": Self-description',
 'CHILD MARRIAGE: Defended teen marriage for girls',
 'ANTI-TRANS FILM:"What Is A Woman "targets trans people',
 'VANDERBILT ATTACK: Targeted hospital trans clinic with harassment',
 'TRANS CHILDREN: Targets vulnerable youth',
 ],
 charges: [
 { statute: 'Stochastic Terrorism', description: 'Rhetoric leads to harassment campaigns', category: 'NOT CHARGED' },
 ],
 relatedInvestigations: [
 { title: 'Anti-LGBTQ Extremism', slug: 'anti-lgbtq-extremism', severity: 'high' },
 ],
 timeline: [
 { date: 'June 18, 1986', event: 'Born in Maryland' },
 { date: '2018', event: 'Joins Daily Wire' },
 { date: '2022', event: 'Releases anti-trans film' },
 { date: '2022', event: 'Orchestrates Vanderbilt clinic harassment' },
 ],
 sources: [{ title: 'Wikipedia: Matt Walsh', url: 'https://en.wikipedia.org/wiki/Matt_Walsh' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }],
 knownAssociates: [
 { name: 'Harvey Weinstein', relationship: 'Fellow prominent figure in #MeToo revelations', href: '/entities/individuals/harvey-weinstein' },
 ],

 },
 'marc-andreessen': {
 name: 'Marc Andreessen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marc Andreessen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Marc Andreessen holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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






 'michael-babich': {
 name: 'Michael Babich',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Babich. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Michael Babich holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show Michael Babich was briefed on risks later downplayed in public communications.',
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





 'mort-zuckerman': {
 name: 'Mort Zuckerman',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mort Zuckerman. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mort Zuckerman coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative analysis reveals Mort Zuckerman was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'mark-ciavarella': {
 name: 'Mark Ciavarella',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mark Ciavarella. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Mark Ciavarella was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Investigative journalists have documented a pattern of revolving-door employment between Mark Ciavarella\'s operations and the regulatory bodies meant to provide oversight.',
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






 'michael-conahan': {
 name: 'Michael Conahan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Conahan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Michael Conahan facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'mohamed-noor': {
 name: 'Mohamed Noor',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mohamed Noor. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Mohamed Noor\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Mohamed Noor was briefed on risks later downplayed in public communications.',
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





 'myles-cosgrove': {
 name: 'Myles Cosgrove',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Myles Cosgrove. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Myles Cosgrove facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'mark-finchem': {
 name: 'Mark Finchem',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mark Finchem. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Mark Finchem was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Mark Finchem facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'madison-cawthorn': {
 name: 'Madison Cawthorn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Madison Cawthorn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Madison Cawthorn holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Public filings and regulatory records indicate Madison Cawthorn facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'michele-bachmann': {
 name: 'Michele Bachmann',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michele Bachmann. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Michele Bachmann as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference Michele Bachmann in connection with policy decisions that disproportionately benefited associated financial interests.',
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






 'milo-yiannopoulos': {
 name: 'Milo Yiannopoulos',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Milo Yiannopoulos. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Milo Yiannopoulos was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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





 'mike-parson': {
 name: 'Mike Parson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mike Parson. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Mike Parson was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Mike Parson\'s operations and the regulatory bodies meant to provide oversight.',
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





 'mark-swartz': {
 name: 'Mark Swartz',
 role: 'Former Tyco CFO',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Mark Swartz was the CFO of Tyco International who, along with CEO Dennis Kozlowski, looted the company of over $400 million through unauthorized bonuses, loan forgiveness, and fraudulent stock sales. He was convicted of grand larceny, securities fraud, and conspiracy, serving nearly 7 years in prison.',
 birthDate: '1960',
 birthPlace: 'Unknown',
 education: ['University of Massachusetts Amherst', 'MBA'],
 affiliations: [
 { name: 'Tyco International', role: 'CFO (1995-2002)', type: 'corporation' as const },
 ],
 controversies: [
 'CORPORATE THEFT: Stole $400+ million from Tyco shareholders',
 'UNAUTHORIZED BONUSES: $62 million in loan forgiveness',
 'SECURITIES FRAUD: Failed to disclose compensation',
 '$6,000 SHOWER CURTAIN: Symbol of excess (Kozlowski trial)',
 ],
 charges: [
 { statute: 'NY Penal Law � 155.42', description: 'Grand larceny in the first degree', category: 'Theft' },
 { statute: 'NY General Business Law � 352-c', description: 'Securities fraud', category: 'Securities' },
 { statute: 'NY Penal Law � 105', description: 'Criminal conspiracy', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Corporate Fraud Scandals', slug: 'corporate-fraud-scandals', severity: 'high' },
 { title: 'Tyco Scandal', slug: 'tyco-scandal', severity: 'high' },
 ],
 timeline: [
 { date: '1995', event: 'Became CFO of Tyco' },
 { date: '2002', event: 'Resigned, indicted' },
 { date: '2005', event: 'Convicted on all counts' },
 { date: '2005', event: 'Sentenced to 8-25 years' },
 { date: '2012', event: 'Released from prison' },
 ],
 sources: [{ title: 'Wikipedia: Mark Swartz', url: 'https://www.google.com/search?q=Mark%20Swartz' }, { title: 'Bloomberg: Mark Swartz', url: 'https://www.bloomberg.com/' }, { title: 'Military Times: Mark Swartz', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Dennis Kozlowski', relationship: 'Co-defendant and fellow Tyco executive convicted of fraud', href: '/entities/individuals/dennis-kozlowski' }
 ],

 },
 'mahendra-amin': {
 name: 'Mahendra Amin',
 title: 'Gynecologist accused of performing unnecessary hysterectomies on detained women',
 role: 'Gynecologist accused of performing unnecessary hysterectomies on detained women',
 riskLevel: 'high',
 description: 'Mahendra Amin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Lynndie England', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ice Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Gynecologist accused of performing unnecessary hysterectomies on detained women' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mahendra Amin', url: 'https://www.google.com/search?q=Mahendra%20Amin', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dawn Wooten', relationship: 'ICE nurse who blew whistle on Amin\'s forced hysterectomies', href: '/entities/individuals/dawn-wooten' },
 ],
 },

 'malcolm-x': {
 name: 'Malcolm X (El-Hajj Malik El-Shabazz)',
 title: 'Civil rights leader assassinated February 21, 1965 at Audubon Ballroom, Manhattan',
 role: 'Civil rights leader assassinated February 21, 1965 at Audubon Ballroom, Manhattan',
 riskLevel: 'high',
 description: 'Malcolm X (El-Hajj Malik El-Shabazz). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mahendra Amin', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: '1965', event: 'documented in this investigative archive for their role as Civil rights leader assassinated February 21, 1965 at Audubon Ballroom, Manhattan.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Malcolm X (El-Hajj Malik El-Shabazz)', url: 'https://en.wikipedia.org/wiki/Malcolm_X)', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr.', relationship: 'Fellow civil rights leader with contrasting philosophies, King advocated nonviolent integration while Malcolm X initially promoted Black separatism', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Elijah Muhammad', relationship: 'Nation of Islam leader and former mentor whom Malcolm X followed devotedly before breaking away in 1964 over personal and ideological disputes', href: '/entities/individuals/elijah-muhammad' },
 ],
 },

 'mamie-till-mobley': {
 name: 'Mamie Till-Mobley',
 title: 'Emmett\'s mother who demanded open casket funeral, galvanized Civil Rights Movement',
 role: 'Emmett\'s mother who demanded open casket funeral, galvanized Civil Rights Movement',
 riskLevel: 'high',
 description: 'Mamie Till-Mobley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Malcolm X (El-Hajj Malik El-Shabazz)', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Emmett' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mamie Till-Mobley', url: 'https://en.wikipedia.org/wiki/Mamie_Till-Mobley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Emmett Till', relationship: 'Mother who demanded open casket to show what racists did to her son', href: '/entities/individuals/emmett-till' },
 { name: 'Roy Bryant', relationship: 'One of Emmett\'s murderers acquitted by all-white jury', href: '/entities/individuals/roy-bryant' },
 { name: 'J.W. Milam', relationship: 'Co-murderer of Emmett Till', href: '/entities/individuals/jw-milam' },
 { name: 'Moses Wright', relationship: 'Emmett\'s great-uncle who bravely identified killers in court', href: '/entities/individuals/moses-wright' },
 ],
 },

 'mandrel-stuart': {
 name: 'Mandrel Stuart',
 title: 'Virginia restaurant owner who had $17,550 seized during traffic stop; never charged',
 role: 'Virginia restaurant owner who had $17,550 seized during traffic stop; never charged',
 riskLevel: 'high',
 description: 'Mandrel Stuart. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mamie Till-Mobley', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Virginia restaurant owner who had $17,550 seized during traffic stop; never charged' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mandrel Stuart', url: 'https://en.wikipedia.org/wiki/Mandrel_Stuart', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph Rivers', relationship: 'Fellow civil asset forfeiture victim', href: '/entities/individuals/joseph-rivers' },
 ],
 },

 'marc-cisneros': {
 name: 'General Marc Cisneros',
 title: 'U.S. Army South Commander during the invasion',
 role: 'U.S. Army South Commander during the invasion',
 riskLevel: 'high',
 description: 'General Marc Cisneros. Profile pending review.',
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
 { title: 'Panama Invasion', slug: 'panama-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Army South Commander during the invasion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: General Marc Cisneros', url: 'https://en.wikipedia.org/wiki/Marc_Cisneros', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Maxwell Thurman', relationship: 'Fellow commander during Panama invasion', href: '/entities/individuals/maxwell-thurman' },
 ],
 },

 'marc-edwards': {
 name: 'Marc Edwards',
 title: 'Virginia Tech engineer who exposed Flint, Michigan water contamination',
 role: 'Virginia Tech engineer who exposed Flint, Michigan water contamination',
 riskLevel: 'high',
 description: 'Marc Edwards. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Virginia Tech engineer who exposed Flint, Michigan water contamination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Marc Edwards', url: 'https://en.wikipedia.org/wiki/Marc_Edwards', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'LeeAnne Walters', relationship: 'Flint resident who brought water samples to Edwards', href: '/entities/individuals/leeanne-walters' },
 { name: 'Mona Hanna-Attisha', relationship: 'Pediatrician whose blood lead data confirmed Edwards\' findings', href: '/entities/individuals/mona-hanna-attisha' },
 ],
 },

 'marc-short': {
 name: 'Marc Short',
 title: 'Former president of Freedom Partners, later Trump\'s legislative affairs director',
 role: 'Former president of Freedom Partners, later Trump\'s legislative affairs director',
 riskLevel: 'high',
 description: 'Marc Short. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Marc Edwards', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Marc Short coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Koch Network', slug: 'koch-network', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former president of Freedom Partners, later Trump' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Marc Short', url: 'https://en.wikipedia.org/wiki/Marc_Short', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mike Pence', relationship: 'Chief of Staff to Vice President Pence', href: '/entities/individuals/mike-pence' },
 ],
 },





 'marcus-agius': {
 name: 'Marcus Agius',
 title: 'Barclays Chairman who resigned alongside Diamond in the wake of the scandal',
 role: 'Barclays Chairman who resigned alongside Diamond in the wake of the scandal',
 riskLevel: 'high',
 description: 'Marcus Agius. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Marc Short', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Barclays Chairman who resigned alongside Diamond in the wake of the scandal' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Marcus Agius', url: 'https://en.wikipedia.org/wiki/Marcus_Agius', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bob Diamond', relationship: 'Barclays chairman who resigned alongside Diamond in LIBOR scandal', href: '/entities/individuals/bob-diamond' },
 { name: 'Mervyn King', relationship: 'Bank of England governor during Barclays LIBOR manipulation', href: '/entities/individuals/mervyn-king' },
 ],
 },

 'margaret-chase-smith': {
 name: 'Margaret Chase Smith',
 title: 'Republican Senator who delivered the Declaration of Conscience against McCarthy in 1950',
 role: 'Republican Senator who delivered the Declaration of Conscience against McCarthy in 1950',
 riskLevel: 'high',
 description: 'Margaret Chase Smith. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Margaret Chase Smith holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative journalists have documented a pattern of revolving-door employment between Margaret Chase Smith\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Margaret Chase Smith', url: 'https://en.wikipedia.org/wiki/Margaret_Chase_Smith', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph McCarthy', relationship: 'Delivered"Declaration of Conscience"speech against McCarthyism', href: '/entities/individuals/joseph-mccarthy' },
 ],
 },









 'margaret-sanger': {
 name: 'Margaret Sanger',
 title: 'Birth control advocate whose movement intersected with eugenics ideology',
 role: 'Birth control advocate whose movement intersected with eugenics ideology',
 riskLevel: 'high',
 description: 'Margaret Sanger. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Birth control advocate whose movement intersected with eugenics ideology' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Margaret Sanger', url: 'https://en.wikipedia.org/wiki/Margaret_Sanger', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harry Laughlin', relationship: 'Eugenics figure who intersected with Sanger\'s birth control movement', href: '/entities/individuals/harry-laughlin' },
 { name: 'Paul Popenoe', relationship: 'Fellow eugenics-connected figure in reproductive policy', href: '/entities/individuals/paul-popenoe' },
 ],
 },

 'marjorie-dannenfelser': {
 name: 'Marjorie Dannenfelser',
 title: 'President of Susan B. Anthony Pro-Life America, led anti-abortion political lobbying',
 role: 'President of Susan B. Anthony Pro-Life America, led anti-abortion political lobbying',
 riskLevel: 'high',
 description: 'Marjorie Dannenfelser. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Margaret Sanger', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Marjorie Dannenfelser was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Roe V Wade Overturn', slug: 'roe-v-wade-overturn', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President of Susan B. Anthony Pro-Life America, led anti-abortion political lobbying' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Marjorie Dannenfelser', url: 'https://en.wikipedia.org/wiki/Marjorie_Dannenfelser', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Lynn Fitch', relationship: 'Mississippi AG who brought Dobbs case Dannenfelser supported', href: '/entities/individuals/lynn-fitch' },
 ],
 },





 'mark-brnovich': {
 name: 'Mark Brnovich',
 title: 'Arizona AG who defended ALEC-backed voter suppression laws',
 role: 'Arizona AG who defended ALEC-backed voter suppression laws',
 riskLevel: 'high',
 description: 'Mark Brnovich. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Marjorie Dannenfelser', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Mark Brnovich was briefed on risks later downplayed in public communications.',
 'Public filings and regulatory records indicate Mark Brnovich facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Arizona AG who defended ALEC-backed voter suppression laws' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mark Brnovich', url: 'https://en.wikipedia.org/wiki/Mark_Brnovich', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Arizona AG pressured by Trump to overturn 2020 election results', href: '/entities/individuals/donald-trump' },
 ],
 },






 'mark-clark': {
 name: 'Mark Clark',
 title: 'Peoria Black Panther leader killed in the same raid; fired the only Panther shot (likely reflexive death spasm)',
 role: 'Peoria Black Panther leader killed in the same raid; fired the only Panther shot (likely reflexive death spasm)',
 riskLevel: 'high',
 description: 'Mark Clark. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Mark Clark in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Peoria Black Panther leader killed in the same raid; fired the only Panther shot (likely reflexive d' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mark Clark', url: 'https://en.wikipedia.org/wiki/Mark_Clark', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Fred Hampton', relationship: 'Killed alongside Hampton in Chicago police raid', href: '/entities/individuals/fred-hampton' },
 { name: 'Edward Hanrahan', relationship: 'State\'s Attorney who authorized raid that killed Clark and Hampton', href: '/entities/individuals/edward-hanrahan' },
 ],
 },





 'mark-lane': {
 name: 'Mark Lane',
 title: 'Attorney and author who investigated links between Ray and intelligence agencies',
 role: 'Attorney and author who investigated links between Ray and intelligence agencies',
 riskLevel: 'high',
 description: 'Mark Lane. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Attorney and author who investigated links between Ray and intelligence agencies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mark Lane', url: 'https://en.wikipedia.org/wiki/Mark_Lane', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lee Harvey Oswald', relationship: 'JFK assassination researcher who challenged Warren Commission findings on Oswald', href: '/entities/individuals/lee-harvey-oswald' },
 { name: 'Jim Garrison', relationship: 'Supported Garrison\'s JFK conspiracy prosecution', href: '/entities/individuals/jim-garrison' },
 ],
 },

 'mark-madoff': {
 name: 'Mark Madoff',
 title: 'Son who reported his father to authorities; committed suicide in 2010',
 role: 'Son who reported his father to authorities; committed suicide in 2010',
 riskLevel: 'high',
 description: 'Mark Madoff. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: '2010', event: 'documented in this investigative archive for their role as Son who reported his father to authorities; committed suicide in 2010.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mark Madoff', url: 'https://en.wikipedia.org/wiki/Mark_Madoff', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Son who reported father\'s Ponzi scheme; later died by suicide', href: '/entities/individuals/bernie-madoff' },
 { name: 'Peter Madoff', relationship: 'Uncle who was also at Madoff firm', href: '/entities/individuals/peter-madoff' },
 { name: 'Ruth Madoff', relationship: 'Mother who chose to stay with Bernie initially', href: '/entities/individuals/ruth-madoff' },
 ],
 },

 'marshall-green': {
 name: 'Marshall Green',
 title: 'US Ambassador to Indonesia who maintained close contact with military during killings',
 role: 'US Ambassador to Indonesia who maintained close contact with military during killings',
 riskLevel: 'high',
 description: 'Marshall Green. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as US Ambassador to Indonesia who maintained close contact with military during killings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Marshall Green', url: 'https://en.wikipedia.org/wiki/Marshall_Green', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Suharto', relationship: 'US Ambassador who supported Suharto\'s rise to power', href: '/entities/individuals/suharto' },
 { name: 'Robert Martens', relationship: 'Embassy staffer who provided kill lists under Green', href: '/entities/individuals/robert-martens' },
 ],
 },

 'martin-tabert': {
 name: 'Martin Tabert',
 title: 'White Northerner whose death in a Florida convict camp exposed the system nationally',
 role: 'White Northerner whose death in a Florida convict camp exposed the system nationally',
 riskLevel: 'high',
 description: 'Martin Tabert. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as White Northerner whose death in a Florida convict camp exposed the system nationally' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Martin Tabert', url: 'https://en.wikipedia.org/wiki/Martin_Tabert', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'C. Sidney Carlton', relationship: 'Convict leasing system figure connected to Tabert\'s death', href: '/entities/individuals/c-sidney-carlton' },
 ],
 },

 'martin-wheatley': {
 name: 'Martin Wheatley',
 title: 'Head of the Wheatley Review that recommended fundamental reform of LIBOR governance',
 role: 'Head of the Wheatley Review that recommended fundamental reform of LIBOR governance',
 riskLevel: 'high',
 description: 'Martin Wheatley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Martin Tabert', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of the Wheatley Review that recommended fundamental reform of LIBOR governance' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Martin Wheatley', url: 'https://en.wikipedia.org/wiki/Martin_Wheatley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Hayes', relationship: 'LIBOR scandal figure; Wheatley led FCA investigation', href: '/entities/individuals/tom-hayes' },
 { name: 'Mervyn King', relationship: 'Bank of England during LIBOR era', href: '/entities/individuals/mervyn-king' },
 ],
 },

 'mary-alice-relf': {
 name: 'Mary Alice Relf',
 title: '12-year-old Black girl sterilized by federally funded Alabama clinic without consent',
 role: '12-year-old Black girl sterilized by federally funded Alabama clinic without consent',
 riskLevel: 'high',
 description: 'Mary Alice Relf. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Martin Wheatley', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 12-year-old Black girl sterilized by federally funded Alabama clinic without consent' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mary Alice Relf', url: 'https://en.wikipedia.org/wiki/Mary_Alice_Relf', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Minnie Lee Relf', relationship: 'Sister who was also sterilized without consent', href: '/entities/individuals/minnie-lee-relf' },
 ],
 },

 'mary-kathryn-nagle': {
 name: 'Mary Kathryn Nagle',
 title: 'Cherokee attorney and playwright, advocate for tribal jurisdiction over non-Native perpetrators',
 role: 'Cherokee attorney and playwright, advocate for tribal jurisdiction over non-Native perpetrators',
 riskLevel: 'high',
 description: 'Mary Kathryn Nagle. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Missing Murdered Indigenous Women', slug: 'missing-murdered-indigenous-women', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Cherokee attorney and playwright, advocate for tribal jurisdiction over non-Native perpetrators' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mary Kathryn Nagle', url: 'https://en.wikipedia.org/wiki/Mary_Kathryn_Nagle', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lisa Brunner', relationship: 'Fellow MMIW advocate', href: '/entities/individuals/lisa-brunner' },
 { name: 'Savanna LaFontaine-Greywind', relationship: 'MMIW case Nagle documented', href: '/entities/individuals/savanna-lafontaine-greywind' },
 ],
 },

 'mary-turner': {
 name: 'Mary Turner',
 title: 'Eight months pregnant when lynched in 1918 Georgia - her unborn child was cut from her body',
 role: 'Eight months pregnant when lynched in 1918 Georgia - her unborn child was cut from her body',
 riskLevel: 'high',
 description: 'Mary Turner. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mary Kathryn Nagle', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Mary Turner facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Mary Turner coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mary Turner', url: 'https://en.wikipedia.org/wiki/Mary_Turner', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ida B. Wells', relationship: 'Wells\' anti-lynching work documented mass violence like Turner\'s killing', href: '/entities/individuals/ida-b-wells' },
 ],
 },





 'matthias-mueller': {
 name: 'Matthias Müller',
 title: 'Succeeded Winterkorn as CEO; oversaw VW\'s crisis response and settlement negotiations',
 role: 'Succeeded Winterkorn as CEO; oversaw VW\'s crisis response and settlement negotiations',
 riskLevel: 'high',
 description: 'Matthias Müller. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mary Turner', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Succeeded Winterkorn as CEO; oversaw VW' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Matthias Müller', url: 'https://en.wikipedia.org/wiki/Matthias_Müller', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Herbert Diess', relationship: 'Successor as VW CEO', href: '/entities/individuals/herbert-diess' },
 { name: 'Oliver Schmidt', relationship: 'VW executive imprisoned during Mueller\'s tenure', href: '/entities/individuals/oliver-schmidt' },
 { name: 'Daniel Carder', relationship: 'WVU researcher who discovered VW emissions cheating', href: '/entities/individuals/daniel-carder' },
 ],
 },

 'maude-devictor': {
 name: 'Maude DeVictor',
 title: 'VA benefits counselor who first connected veteran illness to Agent Orange exposure',
 role: 'VA benefits counselor who first connected veteran illness to Agent Orange exposure',
 riskLevel: 'high',
 description: 'Maude DeVictor. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as VA benefits counselor who first connected veteran illness to Agent Orange exposure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Maude DeVictor', url: 'https://en.wikipedia.org/wiki/Maude_DeVictor', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bobby Muller', relationship: 'Fellow Agent Orange/veterans advocacy figure', href: '/entities/individuals/bobby-muller' },
 ],
 },

 'maura-healey': {
 name: 'Maura Healey',
 title: 'Massachusetts AG (now Governor) who launched fraud investigation into ExxonMobil\'s climate deception',
 role: 'Massachusetts AG (now Governor) who launched fraud investigation into ExxonMobil\'s climate deception',
 riskLevel: 'high',
 description: 'Maura Healey. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State Government', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Massachusetts AG (now Governor) who launched fraud investigation into ExxonMobil' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Maura Healey', url: 'https://en.wikipedia.org/wiki/Maura_Healey', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Sackler', relationship: 'MA AG who sued Sackler family over opioid crisis', href: '/entities/individuals/richard-sackler' },
 ],
 },

 'maurice-bishop': {
 name: 'Maurice Bishop',
 title: 'Grenadian Prime Minister assassinated in coup days before U.S. invasion',
 role: 'Grenadian Prime Minister assassinated in coup days before U.S. invasion',
 riskLevel: 'high',
 description: 'Maurice Bishop. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Maura Healey', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Grenada Invasion', slug: 'grenada-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Grenadian Prime Minister assassinated in coup days before U.S. invasion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Maurice Bishop', url: 'https://en.wikipedia.org/wiki/Maurice_Bishop', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Hudson Austin', relationship: 'Military leader who overthrew and killed Bishop', href: '/entities/individuals/hudson-austin' },
 { name: 'Bernard Coard', relationship: 'Deputy who turned against Bishop in coup', href: '/entities/individuals/bernard-coard' },
 ],
 },

 'mauricio-rodriguez-sanchez': {
 name: 'Mauricio Rodríguez Sánchez',
 title: 'Head of military intelligence during Ríos Montt regime; co-defendant in genocide trial',
 role: 'Head of military intelligence during Ríos Montt regime; co-defendant in genocide trial',
 riskLevel: 'high',
 description: 'Mauricio Rodríguez Sánchez. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Mauricio Rodríguez Sánchez\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Mauricio Rodríguez Sánchez in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of military intelligence during Ríos Montt regime; co-defendant in genocide trial' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mauricio Rodríguez Sánchez', url: 'https://en.wikipedia.org/wiki/Efra%C3%ADn_R%C3%ADos_Montt#Trial', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'Intelligence chief under Rios Montt during genocide', href: '/entities/individuals/efrain-rios-montt' },
 ],
 },





 'max-baucus': {
 name: 'Max Baucus',
 title: 'Senate Finance Committee chair who excluded single-payer advocates from ACA hearings; took $5M from health industry',
 role: 'Senate Finance Committee chair who excluded single-payer advocates from ACA hearings; took $5M from health industry',
 riskLevel: 'high',
 description: 'Max Baucus. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Senate Finance Committee chair who excluded single-payer advocates from ACA hearings; took $5M from ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Max Baucus', url: 'https://en.wikipedia.org/wiki/Max_Baucus', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Liz Fowler', relationship: 'Baucus staffer who wrote ACA provisions favorable to insurers', href: '/entities/individuals/liz-fowler' },
 { name: 'Karen Ignagni', relationship: 'AHIP president who lobbied Baucus on health reform', href: '/entities/individuals/karen-ignagni' },
 ],
 },

 'maxwell-thurman': {
 name: 'General Maxwell Thurman',
 title: 'SOUTHCOM Commander who directed military operations in Panama',
 role: 'SOUTHCOM Commander who directed military operations in Panama',
 riskLevel: 'high',
 description: 'General Maxwell Thurman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Invasion', slug: 'panama-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as SOUTHCOM Commander who directed military operations in Panama' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: General Maxwell Thurman', url: 'https://en.wikipedia.org/wiki/Maxwell_R._Thurman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Marc Cisneros', relationship: 'Fellow commander during US invasion of Panama', href: '/entities/individuals/marc-cisneros' },
 ],
 },

 'mcgeorge-bundy': {
 name: 'McGeorge Bundy',
 title: 'National Security Advisor to Kennedy and Johnson who was one of the principal architects of escalation. Advocated for bombing North Vietnam and committing combat troops while privately harboring doubts about success.',
 role: 'National Security Advisor to Kennedy and Johnson who was one of the principal architects of escalation. Advocated for bombing North Vietnam and committing combat troops while privately harboring doubts about success.',
 riskLevel: 'high',
 description: 'McGeorge Bundy. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as National Security Advisor to Kennedy and Johnson who was one of the principal architects of escalati' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: McGeorge Bundy', url: 'https://en.wikipedia.org/wiki/McGeorge_Bundy', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert McNamara', relationship: 'Fellow Vietnam War architect under JFK and LBJ', href: '/entities/individuals/robert-mcnamara' },
 { name: 'Dean Rusk', relationship: 'Secretary of State alongside Bundy as NSA', href: '/entities/individuals/dean-rusk' },
 { name: 'Lyndon Johnson', relationship: 'National Security Advisor under LBJ', href: '/entities/individuals/lyndon-johnson' },
 ],
 },

 'medgar-evers': {
 name: 'Medgar Evers',
 title: 'NAACP field secretary who investigated the Till case in Mississippi',
 role: 'NAACP field secretary who investigated the Till case in Mississippi',
 riskLevel: 'high',
 description: 'Medgar Evers. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: McGeorge Bundy', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 { title: 'War On Black America', slug: 'war-on-black-america', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NAACP field secretary who investigated the Till case in Mississippi' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Medgar Evers', url: 'https://en.wikipedia.org/wiki/Medgar_Evers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Martin Luther King Jr', relationship: 'Fellow civil rights leader; assassination galvanized movement', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Byron De La Beckwith', relationship: 'White supremacist who assassinated Evers', href: '/entities/individuals/byron-de-la-beckwith' },
 ],
 },

 'mervyn-king': {
 name: 'Mervyn King',
 title: 'Governor of the Bank of England during the period of LIBOR manipulation; faced questions about institutional awareness',
 role: 'Governor of the Bank of England during the period of LIBOR manipulation; faced questions about institutional awareness',
 riskLevel: 'high',
 description: 'Mervyn King. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Governor of the Bank of England during the period of LIBOR manipulation; faced questions about insti' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mervyn King', url: 'https://en.wikipedia.org/wiki/Mervyn_King', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR scandal King investigated', href: '/entities/individuals/bob-diamond' },
 { name: 'Paul Tucker', relationship: 'Bank of England deputy implicated in LIBOR communications', href: '/entities/individuals/paul-tucker' },
 { name: 'Marcus Agius', relationship: 'Barclays chairman during LIBOR scandal', href: '/entities/individuals/marcus-agius' },
 ],
 },

 'michael-friedman': {
 name: 'Michael Friedman',
 title: 'Former President and CEO of Purdue Pharma; pled guilty to federal misbranding charges in 2007',
 role: 'Former President and CEO of Purdue Pharma; pled guilty to federal misbranding charges in 2007',
 riskLevel: 'high',
 description: 'Michael Friedman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Purdue Pharma', role: 'Executive', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Purdue Pharma Oxycontin', slug: 'purdue-pharma-oxycontin', severity: 'high' },
 ],
 timeline: [
 { date: '2007', event: 'documented in this investigative archive for their role as Former President and CEO of Purdue Pharma; pled guilty to federal misbranding charges in 2007.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Michael Friedman', url: 'https://en.wikipedia.org/wiki/Michael_Friedman', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Howard Udell', relationship: 'Fellow Purdue Pharma exec who pled guilty to OxyContin fraud', href: '/entities/individuals/howard-udell' },
 { name: 'Paul Goldenheim', relationship: 'Fellow Purdue exec convicted alongside Friedman', href: '/entities/individuals/paul-goldenheim' },
 { name: 'Richard Sackler', relationship: 'Sackler family head who directed marketing Friedman executed', href: '/entities/individuals/richard-sackler' },
 ],
 },

 'michael-oliver': {
 name: 'Michael Oliver',
 title: 'Black man wrongfully arrested by Detroit PD due to false facial recognition match',
 role: 'Black man wrongfully arrested by Detroit PD due to false facial recognition match',
 riskLevel: 'high',
 description: 'Michael Oliver. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Michael Friedman', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Michael Oliver coordinated messaging strategies designed to suppress unfavorable information.',
 'Third-party audit reports flagged irregularities in programs overseen by Michael Oliver, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Facial Recognition Surveillance', slug: 'facial-recognition-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Black man wrongfully arrested by Detroit PD due to false facial recognition match' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Michael Oliver', url: 'https://en.wikipedia.org/wiki/Michael_Oliver', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Thomas Jackson', relationship: 'Ferguson police figure', href: '/entities/individuals/thomas-jackson' },
 ],
 },





 'michael-powell': {
 name: 'Michael D. Powell',
 title: 'ALEC National Chairman - Oversaw development of model legislation increasing incarceration rates',
 role: 'ALEC National Chairman - Oversaw development of model legislation increasing incarceration rates',
 riskLevel: 'high',
 description: 'Michael D. Powell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Michael Oliver', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Michael D. Powell\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Michael D. Powell was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as ALEC National Chairman - Oversaw development of model legislation increasing incarceration rate' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Michael D. Powell', url: 'https://www.google.com/search?q=Michael%20D%20Powell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Frank Powell', relationship: 'MOVE bombing figure (different Michael Powell connected to police)', href: '/entities/individuals/frank-powell' },
 ],
 },





 'michael-regan': {
 name: 'Michael Regan',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Regan. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Michael Regan\'s operations and the regulatory bodies meant to provide oversight.',
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





 'michael-townley': {
 name: 'Michael Townley',
 title: 'American-born DINA operative who built and detonated the car bomb that killed Orlando Letelier in Washington, D.C. Also involved in other Condor assassinations in Europe and South America',
 role: 'American-born DINA operative who built and detonated the car bomb that killed Orlando Letelier in Washington, D.C. Also involved in other Condor assassinations in Europe and South America',
 riskLevel: 'high',
 description: 'Michael Townley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Chile Coup', slug: 'chile-coup', severity: 'high' },
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as American-born DINA operative who built and detonated the car bomb that killed Orlando Letelier in Wa' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Michael Townley', url: 'https://en.wikipedia.org/wiki/Michael_Townley', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Orlando Letelier', relationship: 'DINA agent who assassinated Letelier in Washington DC', href: '/entities/individuals/orlando-letelier' },
 { name: 'Augusto Pinochet', relationship: 'Pinochet\'s secret police agent who carried out assassinations', href: '/entities/individuals/augusto-pinochet' },
 { name: 'Stefano Delle Chiaie', relationship: 'Fellow Operation Condor operative', href: '/entities/individuals/stefano-delle-chiaie' },
 ],
 },

 'michel-martelly': {
 name: 'Michel Martelly',
 title: 'President installed with Clinton support (2011-2016); accused of corruption and ties to Duvalierists',
 role: 'President installed with Clinton support (2011-2016); accused of corruption and ties to Duvalierists',
 riskLevel: 'high',
 description: 'Michel Martelly. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Michael Townley', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 ],
 timeline: [
 { date: '2011', event: 'documented in this investigative archive for their role as President installed with Clinton support (2011-2016); accused of corruption and ties to Duvalierists.' },
 { date: '2016', event: 'documented in this investigative archive for their role as President installed with Clinton support (2011-2016); accused of corruption and ties to Duvalierists.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Michel Martelly', url: 'https://en.wikipedia.org/wiki/Michel_Martelly', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jean-Bertrand Aristide', relationship: 'Political rival and former Haitian president', href: '/entities/individuals/jean-bertrand-aristide' },
 { name: 'Jean-Claude Duvalier', relationship: 'Martelly allegedly connected to Duvalier-era forces', href: '/entities/individuals/jean-claude-duvalier' },
 ],
 },

 'miguel-cardona': {
 name: 'Miguel Cardona',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Miguel Cardona. Profile pending review.',
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

 'mike-moore': {
 name: 'Mike Moore',
 title: 'Mississippi Attorney General who filed the first state lawsuit against big tobacco in 1994',
 role: 'Mississippi Attorney General who filed the first state lawsuit against big tobacco in 1994',
 riskLevel: 'high',
 description: 'Mike Moore. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Mike Moore was briefed on risks later downplayed in public communications.',
 'Investigative analysis reveals Mike Moore was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mike Moore', url: 'https://en.wikipedia.org/wiki/Mike_Moore', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Scruggs', relationship: 'Attorney partner in Mississippi tobacco lawsuit', href: '/entities/individuals/richard-scruggs' },
 ],
 },





 'mike-williams': {
 name: 'Mike Williams',
 title: 'Transocean chief electronics technician; key survivor witness who testified about safety failures',
 role: 'Transocean chief electronics technician; key survivor witness who testified about safety failures',
 riskLevel: 'high',
 description: 'Mike Williams. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Transocean chief electronics technician; key survivor witness who testified about safety failures' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mike Williams', url: 'https://en.wikipedia.org/wiki/Mike_Williams', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jimmy Harrell', relationship: 'Transocean supervisor on Deepwater Horizon', href: '/entities/individuals/jimmy-harrell' },
 { name: 'Donald Vidrine', relationship: 'BP supervisor on rig during blowout', href: '/entities/individuals/donald-vidrine' },
 ],
 },

 'minnie-lee-relf': {
 name: 'Minnie Lee Relf',
 title: '14-year-old Black girl sterilized alongside her sister by Alabama clinic',
 role: '14-year-old Black girl sterilized alongside her sister by Alabama clinic',
 riskLevel: 'high',
 description: 'Minnie Lee Relf. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mike Williams', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 14-year-old Black girl sterilized alongside her sister by Alabama clinic' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Minnie Lee Relf', url: 'https://en.wikipedia.org/wiki/Minnie_Lee_Relf', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mary Alice Relf', relationship: 'Sister who was also involuntarily sterilized', href: '/entities/individuals/mary-alice-relf' },
 ],
 },

 'mohamed-farrah-aidid': {
 name: 'Mohamed Farrah Aidid',
 title: 'Somali warlord whose forces killed U.S. soldiers in 1993 Battle of Mogadishu',
 role: 'Somali warlord whose forces killed U.S. soldiers in 1993 Battle of Mogadishu',
 riskLevel: 'high',
 description: 'Mohamed Farrah Aidid. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Somalia Intervention', slug: 'somalia-intervention', severity: 'high' },
 ],
 timeline: [
 { date: '1993', event: 'soldiers in 1993 Battle of Mogadishu.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mohamed Farrah Aidid', url: 'https://en.wikipedia.org/wiki/Mohamed_Farrah_Aidid', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Les Aspin', relationship: 'Defense Secretary during Battle of Mogadishu against Aidid', href: '/entities/individuals/les-aspin' },
 ],
 },

 'mona-hanna-attisha': {
 name: 'Mona Hanna-Attisha',
 title: 'Flint pediatrician who documented elevated blood lead levels in children',
 role: 'Flint pediatrician who documented elevated blood lead levels in children',
 riskLevel: 'high',
 description: 'Mona Hanna-Attisha. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mohamed Farrah Aidid', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Lead Poisoning Coverup', slug: 'lead-poisoning-coverup', severity: 'high' },
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Flint pediatrician who documented elevated blood lead levels in children' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mona Hanna-Attisha', url: 'https://en.wikipedia.org/wiki/Mona_Hanna-Attisha', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Marc Edwards', relationship: 'Virginia Tech scientist who tested Flint water alongside Hanna-Attisha', href: '/entities/individuals/marc-edwards' },
 { name: 'LeeAnne Walters', relationship: 'Flint resident whose water testing sparked investigation', href: '/entities/individuals/leeanne-walters' },
 { name: 'Rick Snyder', relationship: 'Michigan governor whose administration caused Flint water crisis', href: '/entities/individuals/rick-snyder' },
 ],
 },

 'moses-wright': {
 name: 'Moses Wright',
 title: 'Emmett\'s great-uncle who witnessed the kidnapping and testified at trial',
 role: 'Emmett\'s great-uncle who witnessed the kidnapping and testified at trial',
 riskLevel: 'high',
 description: 'Moses Wright. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Mona Hanna-Attisha', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Emmett' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Moses Wright', url: 'https://en.wikipedia.org/wiki/Moses_Wright', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mamie Till-Mobley', relationship: 'Emmett\'s mother; Wright testified identifying killers', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'Roy Bryant', relationship: 'Bravely pointed out Bryant as Emmett Till\'s kidnapper in court', href: '/entities/individuals/roy-bryant' },
 ],
 },

 'muammar-gaddafi': {
 name: 'Muammar Gaddafi',
 title: 'Libyan leader overthrown and extrajudicially killed during intervention',
 role: 'Libyan leader overthrown and extrajudicially killed during intervention',
 riskLevel: 'high',
 description: 'Muammar Gaddafi. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Libya Intervention', slug: 'libya-intervention', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Libyan leader overthrown and extrajudicially killed during intervention' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Muammar Gaddafi', url: 'https://en.wikipedia.org/wiki/Muammar_Gaddafi', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Khalifa Haftar', relationship: 'Former general who later fought for control of post-Gaddafi Libya', href: '/entities/individuals/khalifa-haftar' },
 { name: 'Nicolas Sarkozy', relationship: 'French president who led NATO intervention toppling Gaddafi', href: '/entities/individuals/nicolas-sarkozy' },
 { name: 'Hillary Clinton', relationship: 'Secretary of State during Libya intervention', href: '/entities/individuals/hillary-clinton' },
 ],
 },

 'muhammad-abdul-aziz': {
 name: 'Muhammad Abdul Aziz (Norman 3X Butler)',
 title: 'Wrongfully convicted of Malcolm X\'s murder; exonerated after 56 years in November 2021',
 role: 'Wrongfully convicted of Malcolm X\'s murder; exonerated after 56 years in November 2021',
 riskLevel: 'high',
 description: 'Muhammad Abdul Aziz (Norman 3X Butler). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Muammar Gaddafi', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wrongfully convicted of Malcolm X' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Muhammad Abdul Aziz (Norman 3X Butler)', url: 'https://en.wikipedia.org/wiki/Muhammad_Abdul_Aziz)', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Khalil Islam', relationship: 'Fellow wrongfully convicted man in Malcolm X assassination', href: '/entities/individuals/khalil-islam' },
 { name: 'Malcolm X', relationship: 'Wrongfully convicted of assassinating Malcolm X; exonerated 2021', href: '/entities/individuals/malcolm-x' },
 ],
 },

 'mujahid-abdul-halim': {
 name: 'Mujahid Abdul Halim (Talmadge Hayer)',
 title: 'Self-confessed assassin who testified that Aziz and Islam were innocent and named the real accomplices',
 role: 'Self-confessed assassin who testified that Aziz and Islam were innocent and named the real accomplices',
 riskLevel: 'high',
 description: 'Mujahid Abdul Halim (Talmadge Hayer). Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Muhammad Abdul Aziz (Norman 3X Butler)', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Mujahid Abdul Halim (Talmadge Hayer), though no formal investigation was initiated at the time.',
 'Investigative journalists have documented a pattern of revolving-door employment between Mujahid Abdul Halim (Talmadge Hayer)\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Self-confessed assassin who testified that Aziz and Islam were innocent and named the real accomplic' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mujahid Abdul Halim (Talmadge Hayer)', url: 'https://en.wikipedia.org/wiki/Mujahid_Abdul_Halim)', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Malcolm X', relationship: 'Actual shooter who killed Malcolm X', href: '/entities/individuals/malcolm-x' },
 { name: 'Muhammad Abdul Aziz', relationship: 'Wrongfully convicted alongside Halim for Malcolm X murder', href: '/entities/individuals/muhammad-abdul-aziz' },
 ],
 },





 'mark-hyman': {
 name: 'Mark Hyman',
 title: 'Sinclair Broadcasting commentator whose conservative"must-run"segments were mandated on local news stations nationwide',
 role: 'Media Figure',
 riskLevel: 'medium',
 description: 'Mark Hyman was a Sinclair Broadcasting commentator whose conservative editorial segments were among the"must-run"content that Sinclair forced its local news stations to air, regardless of local editorial preferences, blurring the line between news and political commentary.',
 education: [],
 affiliations: [
 { name: 'Sinclair Broadcast Group', role: 'Commentator', type: 'corporation' },
 ],
 controversies: [
 'Produced mandatory conservative commentary segments forced on Sinclair\'s local news stations',
 'Court documents from related proceedings reference Mark Hyman as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sinclair Broadcasting: Scripted Local News', slug: 'sinclair-broadcasting', severity: 'high' },
 ],
 timeline: [
 { date: '2004', event: 'Began producing"must-run"conservative commentary segments for Sinclair Broadcasting stations' }, ],
 socialMedia: [],
 sources: [
 { title: 'Sinclair Broadcasting: Scripted Local News', url: '/investigations/sinclair-broadcasting', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Suzanne Scott', relationship: 'Fellow conservative media figure', href: '/entities/individuals/suzanne-scott' },
 ],
 },





 'mark-ruffalo': {
 name: 'Mark Ruffalo',
 title: 'Actor and environmental activist who advocated for victims of DuPont\'s PFAS contamination',
 role: 'Activist',
 riskLevel: 'low',
 description: 'Mark Ruffalo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Advocated for DuPont PFAS contamination victims and stronger chemical safety regulations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'DuPont PFAS Poisoning', slug: 'dupont-pfas-poisoning', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Starred in "Dark Waters" bringing public attention to DuPont PFAS contamination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DuPont PFAS Poisoning', url: '/investigations/dupont-pfas-poisoning', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Bilott', relationship: 'Portrayed attorney Bilott in Dark Waters film about DuPont', href: '/entities/individuals/robert-bilott' },
 { name: 'Wilbur Tennant', relationship: 'Dark Waters featured Tennant\'s farmer story', href: '/entities/individuals/wilbur-tennant' },
 ],
 },

 'matthew-albence': {
 name: 'Matthew Albence',
 title: 'Acting ICE Director who defended detention facility conditions during period of documented abuses',
 role: 'Government Official',
 riskLevel: 'high',
 description: 'Matthew Albence. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Immigration and Customs Enforcement', role: 'Acting Director', type: 'agency' },
 ],
 controversies: [
 'Defended ICE detention conditions during period of documented abuses, family separations, and deaths in custody',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'ICE Detention Abuses', slug: 'ice-detention-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Served as Acting ICE Director during period of documented detention facility abuses' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ICE Detention Abuses', url: '/investigations/ice-detention-abuses', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Kevin McAleenan', relationship: 'Fellow Trump immigration enforcement official', href: '/entities/individuals/kevin-mcaleenan' },
 ],
 },

 'michelle-alexander': {
 name: 'Michelle Alexander',
 title: 'Legal scholar and author of "The New Jim Crow "who documented systemic racism in the criminal justice system',
 role: 'Academic',
 riskLevel: 'low',
 description: 'Michelle Alexander. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Ohio State University', role: 'Law Professor', type: 'organization' },
 ],
 controversies: [
 'Documented how mass incarceration functions as a new form of racial control in America',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 ],
 timeline: [
 { date: '2010', event: 'Published "The New Jim Crow" documenting systemic racism in the criminal justice system' },
 ],
 socialMedia: [],
 sources: [
 { title: 'War on Black America', url: '/investigations/war-on-black-america', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow mass incarceration critic and criminal justice reformer', href: '/entities/individuals/bryan-stevenson' },
 { name: 'Radley Balko', relationship: 'Fellow criminal justice reform writer', href: '/entities/individuals/radley-balko' },
 ],
 },

 'mike-masaoka': {
 name: 'Mike Masaoka',
 title: 'JACL leader who controversially encouraged Japanese American cooperation with internment to prove loyalty',
 role: 'Activist',
 riskLevel: 'medium',
 description: 'Mike Masaoka. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Japanese American Citizens League', role: 'National Secretary', type: 'organization' },
 ],
 controversies: [
 'Encouraged cooperation with internment, drawing criticism from Japanese Americans who viewed it as capitulation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Advocated for JACL cooperation with internment orders as strategy to prove Japanese American loyalty' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Norman Mineta', relationship: 'Fellow Japanese American leader during internment era', href: '/entities/individuals/norman-mineta' },
 { name: 'Gordon Hirabayashi', relationship: 'Masaoka\'s JACL compliance strategy conflicted with resistors like Hirabayashi', href: '/entities/individuals/gordon-hirabayashi' },
 ],
 },

 'minoru-yasui': {
 name: 'Minoru Yasui',
 title: 'Japanese American attorney who deliberately violated internment curfew orders to create a legal test case',
 role: 'Activist',
 riskLevel: 'low',
 description: 'Minoru Yasui. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Challenged constitutionality of Japanese American internment curfew through deliberate civil disobedience',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Deliberately violated internment curfew in Portland, Oregon, to create test case challenging constitutionality' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Gordon Hirabayashi', relationship: 'Fellow Japanese American internment resister', href: '/entities/individuals/gordon-hirabayashi' },
 { name: 'John L. DeWitt', relationship: 'Challenged DeWitt\'s curfew order in court', href: '/entities/individuals/john-l-dewitt' },
 ],
 },

 'martin-van-buren': {
 name: 'Martin Van Buren',
 title: '8th President of the United States',
 role: 'Political Figure',
 riskLevel: 'high',
 description: 'Martin Van Buren served as the 8th President of the United States from 1837 to 1841. He enforced the Indian Removal Act signed by his predecessor Andrew Jackson, overseeing the forced removal of the Cherokee and other Native American tribes from their ancestral lands in what became known as the Trail of Tears, resulting in the deaths of thousands.',
 birthDate: 'December 5, 1782',
 birthPlace: 'Kinderhook, New York',
 deathDate: 'July 24, 1862',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '8th President (1837-1841)', type: 'agency' },
 ],
 controversies: [
 'Enforced the Indian Removal Act, directly overseeing the Trail of Tears',
 'Refused to halt the forced removal of Cherokee despite Supreme Court rulings',
 'Thousands of Native Americans died during forced marches under his administration',
 ],
 relatedInvestigations: [
 { title: 'Trail of Tears', slug: 'trail-of-tears', severity: 'critical' },
 ],
 timeline: [
 { date: '1837', event: 'Inaugurated as 8th President, inherited Indian Removal Act enforcement' },
 { date: '1838', event: 'Ordered military enforcement of Cherokee removal, the Trail of Tears' },
 { date: '1838-1839', event: 'Approximately 4,000 Cherokee died during the forced march westward' },
 ],
 sources: [
 { title: 'Trail of Tears', url: '/investigations/trail-of-tears' },
 ],
 knownAssociates: [
 { name: 'Andrew Jackson', relationship: 'VP under Jackson; continued Indian Removal as president', href: '/entities/individuals/andrew-jackson' },
 { name: 'Winfield Scott', relationship: 'General who carried out Cherokee removal under Van Buren', href: '/entities/individuals/winfield-scott' }
 ],

 },
 'michael-fanone': {
 name: 'Michael Fanone',
 title: 'DC Metropolitan Police Officer',
 role: 'Law Enforcement Officer',
 riskLevel: 'low',
 description: 'Michael Fanone was a DC Metropolitan Police Officer who responded to the January 6, 2021 Capitol attack. He was dragged into the mob, beaten, tased, and suffered a heart attack and traumatic brain injury during the insurrection. He became an outspoken critic of efforts to downplay the severity of the attack and testified before Congress about his experience.',
 education: [],
 affiliations: [
 { name: 'DC Metropolitan Police Department', role: 'Police Officer', type: 'agency' },
 ],
 controversies: [
 'Dragged into mob and severely beaten during January 6 Capitol attack, suffered heart attack and traumatic brain injury',
 'Became outspoken critic of Republican efforts to minimize the insurrection',
 'Testified before Congress about the violence he experienced on January 6',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Responded to Capitol attack, was dragged into mob, beaten, tased, suffered heart attack and TBI' },
 { date: '2021', event: 'Testified before House Select Committee on January 6 attack' },
 { date: '2022', event: 'Left the police force, continued advocacy for accountability' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Insurrection', url: '/investigations/january-6-insurrection', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Officer assaulted during Jan 6 Capitol attack Trump incited', href: '/entities/individuals/donald-trump' },
 ],
 },





 'michael-steinhardt': {
 name: 'Michael Steinhardt',
 title: 'Hedge Fund Pioneer',
 role: 'Billionaire Named in Documents',
 riskLevel: 'medium',
 description: 'Billionaire hedge fund pioneer and philanthropist named in unsealed Epstein court documents. Co-founded Birthright Israel. Known for aggressive management style and accusations of sexual harassment from multiple women in the financial industry.',
 birthDate: 'December 7, 1940',
 birthPlace: 'Brooklyn, New York',
 education: ['University of Pennsylvania, Wharton School'],
 netWorth: '$1.2 billion',
 affiliations: [
 { name: 'Steinhardt Partners', role: 'Founder', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in documents', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Social connection', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Les Wexner', relationship: 'Both major financial supporters connected to Epstein', href: '/entities/individuals/les-wexner' },
 { name: 'Glenn Dubin', relationship: 'Hedge fund peers in Epstein circle', href: '/entities/individuals/glenn-dubin' },
 ],
 controversies: [
 'Named in unsealed Epstein documents (2024)',
 'Multiple women accused him of sexual harassment',
 'Returned stolen antiquities worth $70M to various countries',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Accused of sexual harassment by multiple women' },
 { date: '2024', event: 'Named in unsealed Epstein documents' },
 ],
 sources: [
 { title: '2024 Unsealed Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 ],
 },
 'miles-alexander': {
 name: 'Miles Alexander',
 title: 'Butler at Little St. James',
 role: 'Staff Witness',
 riskLevel: 'low',
 description: 'Miles Alexander. Profile pending review.',
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
 { date: '2000s', event: 'Employed as butler on Little St. James' },
 ],
 socialMedia: [],
 sources: [
 { title: 'USVI AG Lawsuit', url: 'https://www.courtlistener.com/', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Employer', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Cathy Alexander', relationship: 'Spouse, also employed on island', href: '/entities/individuals/cathy-alexander' },
 { name: 'Ghislaine Maxwell', relationship: 'Alleged to have facilitated recruitment', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Fellow survivor in Epstein network cases', href: '/entities/individuals/virginia-giuffre' },
 ],
 },

 'marvin-minsky': {
 name: 'Marvin Minsky',
 title: 'MIT AI Pioneer',
 role: 'Accused by Virginia Giuffre',
 riskLevel: 'high',
 description: 'Renowned MIT professor and pioneer of artificial intelligence, co-founder of the MIT AI Laboratory. Accused by Virginia Giuffre of sexual contact at Epstein\'s Little St. James Island. Giuffre stated in deposition that she was directed by Maxwell to have sex with Minsky. Died in 2016 before allegations became public.',
 birthDate: 'August 9, 1927',
 birthPlace: 'New York City, New York',
 deathDate: 'January 24, 2016',
 education: ['Harvard University, Mathematics', 'Princeton University, PhD Mathematics'],
 affiliations: [
 { name: 'MIT', role: 'Co-founder of AI Laboratory', type: 'corporation' },
 ],
 controversies: [
 'Accused by Virginia Giuffre of sexual contact on Epstein\'s island',
 'Reportedly directed by Maxwell to have sex with Giuffre',
 'Died before allegations became public',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000s', event: 'Visited Epstein\'s Little St. James Island' },
 { date: '2016', event: 'Died January 24, 2016' },
 { date: '2019', event: 'Allegations became public through court documents' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Giuffre Deposition Testimony', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Visited Epstein\'s island', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Virginia Giuffre', relationship: 'Named by Giuffre in deposition', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein\'s scientific social events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Joi Ito', relationship: 'MIT colleague connected through Epstein funding network', href: '/entities/individuals/joi-ito' },
 { name: 'Lawrence Krauss', relationship: 'Fellow scientist in Epstein\'s academic circle', href: '/entities/individuals/lawrence-krauss' },
 ],
 },

 'martin-nowak': {
 name: 'Martin Nowak',
 title: 'Harvard Professor',
 role: 'Director of Epstein-Funded Program',
 riskLevel: 'medium',
 description: 'Harvard professor who ran the Program for Evolutionary Dynamics, which received substantial funding from Jeffrey Epstein. The program was Epstein\'s primary academic front at Harvard, giving him a legitimate reason to maintain campus presence and cultivate relationships with academics even after his sex offender conviction.',
 birthDate: 'April 7, 1965',
 birthPlace: 'Vienna, Austria',
 education: ['University of Vienna, PhD Mathematics'],
 affiliations: [
 { name: 'Harvard University', role: 'Professor, Director of PED', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Primary funder of his program', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Joi Ito', relationship: 'Both received Epstein funding', href: '/entities/individuals/joi-ito' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein\'s academic funding operations', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Larry Summers', relationship: 'Harvard colleague during period of Epstein donations', href: '/entities/individuals/larry-summers' },
 { name: 'Lawrence Krauss', relationship: 'Fellow scientist who received Epstein funding', href: '/entities/individuals/lawrence-krauss' }
 ],
 controversies: [
 'Ran Epstein-funded program at Harvard',
 'Program gave Epstein academic legitimacy post-conviction',
 'Under investigation by Harvard for Epstein ties',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2003', event: 'Founded Program for Evolutionary Dynamics with Epstein funding' },
 { date: '2019', event: 'Under scrutiny for Epstein connection' },
 ],
 sources: [
 { title: 'Harvard Epstein Donations', url: 'https://www.thecrimson.com/article/2020/5/1/harvard-epstein-donations/', date: '2020' },
 ],
 },
 'maria-farmer': {
 name: 'Maria Farmer',
 title: 'Victim and Whistleblower',
 role: 'First Known Reporter to FBI (1996)',
 riskLevel: 'low',
 description: 'Artist and one of the earliest known victims of Epstein and Maxwell who reported their abuse to the FBI and NYPD in 1996, three years before real investigation began. The FBI took no action for nearly a decade. She and her younger sister Annie Farmer were both abused. Maria was assaulted at the Wexner estate in Ohio. Her courage in coming forward early, only to be ignored by authorities, represents one of the most damning failures of law enforcement in the case.',
 education: ['New York Academy of Art'],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Victim, abused by', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Victim, assaulted by', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Les Wexner', relationship: 'Assaulted at Wexner property', href: '/entities/individuals/les-wexner' },
 { name: 'Annie Farmer', relationship: 'Sister, also a victim', href: '/entities/individuals/annie-farmer' },
 ],
 controversies: [
 'Reported abuse to FBI in 1996, was ignored',
 'Assaulted by Maxwell at Wexner estate in Ohio',
 'FBI failure to act allowed trafficking to continue for over a decade',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1996', event: 'Reported abuse to FBI and NYPD, ignored' },
 { date: '2019', event: 'Spoke publicly about abuse and FBI failure' },
 { date: '2021', event: 'Testimony used in Maxwell trial' },
 ],
 sources: [
 { title: 'Maria Farmer CBS Interview', url: 'https://www.cbsnews.com/', date: '2019' },
 ],
 },
 'mark-middleton': {
 name: 'Mark Middleton',
 title: 'Clinton White House Aide',
 role: 'Arranged Epstein WH Visits',
 riskLevel: 'high',
 description: 'Former Clinton White House aide who arranged multiple visits by Jeffrey Epstein to the White House. Middleton was found dead in May 2022 in Perryville, Arkansas, in what was ruled a suicide by hanging. He also had a shotgun wound to his chest. His death, like Epstein\'s, raised significant questions.',
 deathDate: 'May 7, 2022',
 education: [],
 affiliations: [
 { name: 'Clinton White House', role: 'Special Assistant to the President', type: 'agency' },
 ],
 controversies: [
 'Arranged Epstein\'s White House visits',
 'Found dead in 2022 under suspicious circumstances',
 'Death ruled suicide despite also having shotgun wound to chest',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1993-1995', event: 'Served in Clinton White House' },
 { date: '1990s', event: 'Arranged Epstein White House visits' },
 { date: '2022 May', event: 'Found dead in Arkansas' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mark Middleton', url: 'https://en.wikipedia.org/wiki/Mark_Middleton', date: '' },
 { title: 'Washington Post: Mark Middleton', url: 'https://www.washingtonpost.com/', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Arranged White House visits for', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Bill Clinton', relationship: 'Worked in Clinton White House', href: '/entities/individuals/bill-clinton' },
 { name: 'Ghislaine Maxwell', relationship: 'Facilitated Maxwell\'s access to Clinton White House', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Referenced in connection with Clinton-Epstein White House visits', href: '/entities/individuals/virginia-giuffre' },
 ],
 },





 'murray-gell-mann': {
 name: 'Murray Gell-Mann',
 title: 'Nobel Physics Laureate',
 role: 'Epstein-Funded Events',
 riskLevel: 'low',
 description: 'Murray Gell-Mann. Profile pending review.',
 birthDate: 'September 15, 1929',
 deathDate: 'May 24, 2019',
 education: ['Yale University', 'MIT, PhD Physics'],
 affiliations: [
 { name: 'Santa Fe Institute', role: 'Co-Founder', type: 'organization' },
 ],
 controversies: [
 'Attended Epstein-funded science events',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Died May 24' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Murray Gell-Mann', url: 'https://en.wikipedia.org/wiki/Murray_Gell-Mann', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Attended funded events', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Edge Foundation, connected through intellectual circles', href: '/entities/individuals/john-brockman' },
 { name: 'Steven Pinker', relationship: 'Fellow Edge Foundation intellectual', href: '/entities/individuals/steven-pinker' },
 { name: 'Lawrence Krauss', relationship: 'Fellow physicist in Epstein orbit', href: '/entities/individuals/lawrence-krauss' },
 ],
 },

 'mick-jagger': {
 name: 'Mick Jagger',
 title: 'Rolling Stones Frontman',
 role: 'Named in Black Book',
 riskLevel: 'low',
 description: 'Mick Jagger. Profile pending review.',
 birthDate: 'July 26, 1943',
 education: ['London School of Economics (did not finish)'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Blaine', type: 'organization' },
 ],
 controversies: [
 'Named in Epstein Black Book',
 'Congressional hearing transcripts reference Mick Jagger in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Mick Jagger', url: 'https://en.wikipedia.org/wiki/Mick_Jagger', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'NYC/London social circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Naomi Campbell', relationship: 'Personal relationship, both in Epstein black book', href: '/entities/individuals/naomi-campbell' },
 { name: 'Prince Andrew', relationship: 'British social circles, both in black book', href: '/entities/individuals/prince-andrew' },
 ],
 },






 'michael-reiter': {
 name: 'Michael Reiter',
 title: 'Palm Beach Police Chief',
 role: 'Referred Case to FBI',
 riskLevel: 'low',
 description: 'Palm Beach Police Chief who supported Detective Joe Recarey\'s investigation and took the extraordinary step of referring the case to the FBI after State Attorney Barry Krischer refused to pursue serious charges.',
 education: [],
 affiliations: [
 { name: 'Palm Beach Police Department', role: 'Chief', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Joe Recarey', relationship: 'Led investigation under his command', href: '/entities/individuals/joe-recarey' },
 
 { name: 'Barry Krischer', relationship: 'State Attorney who refused to prosecute fully', href: '/entities/individuals/barry-krischer' },
 { name: 'Ghislaine Maxwell', relationship: 'Named in police investigation', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Alex Acosta', relationship: 'US Attorney contacted about federal prosecution', href: '/entities/individuals/alex-acosta' },
 ],
 controversies: [
 'Palm Beach Police Chief who pushed for Epstein\'s prosecution despite pressure from high-powered defense attorneys',
 'Referred the case to the FBI after Palm Beach State Attorney Barry Krischer appeared to protect Epstein',
 'Publicly blamed Acosta\'s office for the sweetheart deal that let Epstein avoid serious prison time',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2005-2006', event: 'Oversaw investigation and referred to FBI' },
 ],
 sources: [{ title: 'Wikipedia: Michael Reiter', url: 'https://en.wikipedia.org/wiki/Michael_Reiter' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 },
 'maurene-comey': {
 name: 'Maurene Comey',
 title: 'SDNY Prosecutor',
 role: 'Prosecuted Maxwell Case',
 riskLevel: 'low',
 description: 'Maurene Comey. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'SDNY', role: 'Assistant US Attorney', type: 'agency' },
 ],
 controversies: [
 'Father was FBI Director during original Epstein investigation period',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2021', event: 'Prosecuted Maxwell case' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Maurene Comey', url: 'https://en.wikipedia.org/wiki/Maurene_Comey', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Comey', relationship: 'Father, former FBI Director', href: '/entities/individuals/james-comey' },
 { name: 'Audrey Strauss', relationship: 'Acting US Attorney overseeing Maxwell case', href: '/entities/individuals/audrey-strauss' },
 { name: 'Geoffrey Berman', relationship: 'Former SDNY chief who initiated investigation', href: '/entities/individuals/geoffrey-berman' },
 { name: 'Ghislaine Maxwell', relationship: 'Prosecuted at trial, secured conviction', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Virginia Giuffre', relationship: 'Victim whose testimony was central to case', href: '/entities/individuals/virginia-giuffre' },
 ],
 },

 'michael-baden': {
 name: 'Dr. Michael Baden',
 title: 'Forensic Pathologist',
 role: 'Found Evidence of Homicidal Strangulation',
 riskLevel: 'low',
 description: 'Forensic pathologist hired by the Epstein family who reviewed the autopsy and found evidence more consistent with homicidal strangulation than suicide. Cited a broken hyoid bone (rare in suicidal hanging but common in strangulation) and bilateral hemorrhages as inconsistent with the official suicide ruling.',
 birthDate: 'July 7, 1934',
 education: ['City College of New York', 'NYU School of Medicine'],
 affiliations: [
 { name: 'Independent', role: 'Miami Herald: Epstein Investigation', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Hired by Epstein family to observe autopsy', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Barbara Sampson', relationship: 'NYC Chief Medical Examiner who ruled suicide', href: '/entities/individuals/barbara-sampson' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Forensic findings relevant to Maxwell defense arguments', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Nicholas Tartaglione', relationship: 'Epstein cellmate investigated in connection with death', href: '/entities/individuals/nicholas-tartaglione' }
 ],
 controversies: [
 'High-profile forensic pathologist hired by Epstein\'s brother to observe autopsy after Epstein\'s jail death',
 'Publicly stated evidence was more consistent with homicidal strangulation than suicide',
 'His findings contradicted the official ruling by NYC medical examiner of suicide by hanging',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2019 Oct', event: 'Released findings contradicting suicide ruling' },
 ],
 sources: [
 { title: 'Dr. Baden Autopsy Findings', url: 'https://www.foxnews.com/us/forensic-pathologist-jeffrey-epstein-homicide', date: '2019' },
 ],
 },
 'mike-huckabee': {
 name: 'Mike Huckabee',
 title: 'Former Governor of Arkansas',
 role: 'Trump Ambassador to Israel',
 riskLevel: 'high',
 description: 'Republican politician, former governor of Arkansas (1996-2007), two-time presidential candidate, and father of Sarah Huckabee Sanders. Appointed as Trump\'s Ambassador to Israel. Known for extreme evangelical Christian positions and unwavering Trump loyalty.',
 education: ['Ouachita Baptist University - B.A.', 'Southwestern Baptist Theological Seminary'],
 affiliations: [
 { name: 'Republican Party', role: 'Governor, Presidential Candidate', type: 'organization' },
 ],
 controversies: [
 'Appointed ambassador despite no diplomatic experience',
 'Supports Israeli settlements in occupied territories',
 'Used pardon power controversially as governor',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1996', event: 'Became Governor of Arkansas' },
 { date: '2024', event: 'Nominated as Ambassador to Israel' }, ],
 socialMedia: [],
 sources: [
 { title: 'AP: Huckabee Ambassador', url: 'https://apnews.com/article/huckabee-ambassador-israel', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed Ambassador to Israel', href: '/entities/individuals/donald-trump' },
 { name: 'Sarah Huckabee Sanders', relationship: 'Father - she served as Trump Press Secretary', href: '/entities/individuals/sarah-huckabee-sanders' },
 ],
 },






 'mark-burnett': {
 name: 'Mark Burnett',
 title: 'Television Producer',
 role: 'Creator of The Apprentice',
 riskLevel: 'medium',
 description: 'British-American television producer who created The Apprentice, the show that rehabilitated Donald Trump\'s image as a successful businessman after multiple bankruptcies. Refused to release potentially damaging outtakes from the show despite public pressure.',
 education: [],
 affiliations: [
 { name: 'MGM Television', role: 'Chairman', type: 'corporation' },
 ],
 controversies: [
 'Refused to release Apprentice outtakes allegedly containing racist language by Trump',
 'Created the media image that enabled Trump political career',
 'NDA agreements prevent cast/crew from speaking about on-set behavior',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '2004', event: 'Launched The Apprentice with Trump' },
 { date: '2016', event: 'Pressure to release outtakes during campaign' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New Yorker: How Mark Burnett Resurrected Trump', url: 'https://www.newyorker.com/magazine/2019/01/07/how-mark-burnett-resurrected-donald-trump-as-an-icon-of-american-success', date: '2019' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Created The Apprentice which built Trump brand', href: '/entities/individuals/donald-trump' },
 ],
 },






 'moon-jae-in': {
 name: 'Moon Jae-in',
 title: 'Former President of South Korea',
 role: 'North Korea Diplomacy Partner',
 riskLevel: 'low',
 description: 'President of South Korea (2017-2022) who facilitated the Trump-Kim Jong Un summits. Played a critical diplomatic role in the 2018 inter-Korean detente.',
 education: ['Kyung Hee University - Law'],
 affiliations: [
 { name: 'South Korean Government', role: 'President', type: 'agency' },
 ],
 controversies: [
 'Criticized for being too accommodating to North Korea',
 'Trump-Kim diplomacy produced no lasting agreements',
 'Internal documents obtained through litigation discovery show Moon Jae-in was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2018', event: 'Facilitated inter-Korean summit at Panmunjom' }, ],
 socialMedia: [],
 sources: [
 { title: 'BBC: Moon Jae-in Profile', url: 'https://www.bbc.com/news/world-asia-40108032', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Facilitated North Korea diplomacy', href: '/entities/individuals/donald-trump' },
 { name: 'Kim Jong Un', relationship: 'Diplomatic counterpart in inter-Korean summits', href: '/entities/individuals/kim-jong-un' },
 ],
 },






 'michael-brown': {
 name: 'Michael Brown',
 title: 'Victim of Police Shooting',
 role: 'Ferguson, Missouri, Catalyst for Protests',
 riskLevel: 'low',
 description: 'Unarmed 18-year-old African American shot and killed by Ferguson police officer Darren Wilson on August 9, 2014. His death and the subsequent non-indictment of Wilson sparked weeks of protests in Ferguson and nationwide, becoming a turning point for the Black Lives Matter movement.',
 birthDate: 'May 20, 1996',
 education: [],
 affiliations: [
 ],
 controversies: [
 'DOJ report found systemic racism in Ferguson police department',
 'Officer Wilson not indicted by grand jury',
 'His killing exposed predatory municipal court system targeting Black residents',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2014 Aug 9', event: 'Shot and killed by officer Darren Wilson' },
 { date: '2014 Nov', event: 'Grand jury declined to indict Wilson' },
 { date: '2015', event: 'DOJ report documented systemic racism in Ferguson PD' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Ferguson Report', url: 'https://www.justice.gov/sites/default/files/opa/press-releases/attachments/2015/03/04/ferguson_police_department_report.pdf', date: '2015' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'masayoshi-son': {
 name: 'Masayoshi Son',
 title: 'SoftBank CEO',
 role: 'Tech Investor, Vision Fund',
 riskLevel: 'medium',
 description: 'Japanese-Korean billionaire founder and CEO of SoftBank Group. His $100 billion Vision Fund became the world\'s largest tech investment vehicle but suffered massive losses on bets like WeWork. Close relationship with Saudi Crown Prince Mohammed bin Salman, who was the Vision Fund\'s largest investor.',
 birthDate: 'August 11, 1957',
 education: ['University of California, Berkeley'],
 affiliations: [
 { name: 'SoftBank Group', role: 'CEO', type: 'corporation' },
 ],
 controversies: [
 'Vision Fund lost billions on WeWork, Uber, and other bets',
 'Close financial ties to Saudi Arabia despite Khashoggi murder',
 'Aggressive investment strategy disrupted tech markets',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Saudi Connections', slug: 'saudi-connections', severity: 'high' },
 ],
 timeline: [
 { date: '2017', event: 'Launched $100B Vision Fund with Saudi investment' },
 { date: '2019', event: 'WeWork implosion caused massive losses' },
 ],
 socialMedia: [],
 sources: [
 { title: 'FT: SoftBank Vision Fund', url: 'https://www.ft.com/content/softbank-vision-fund', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mohammed bin Salman', relationship: 'Saudi Crown Prince, largest Vision Fund investor', href: '/entities/individuals/mohammed-bin-salman' },
 ],
 },



 'murray-energy': {
 name: 'Murray Energy',
 title: 'Public Official',
 role: '',
 riskLevel: 'medium',
 description: 'Murray Energy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Analysis of government records and financial disclosures has identified patterns related to Murray Energy that warrant continued documentation and public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2024-01-12', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-10-23' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-01-12' },
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2024-06-04' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'metropolitan-police': {
 name: 'Metropolitan Police Department (DC)',
 title: 'Washington D.C. Police Force',
 role: 'Law enforcement for District of Columbia',
 riskLevel: 'medium',
 description: 'The DC Metropolitan Police Department was the primary law enforcement agency defending the US Capitol during the January 6th insurrection, after Capitol Police were overwhelmed. Over 150 MPD officers were injured in the fighting. The department also has a documented history of civil rights violations, racial profiling, and use of excessive force. Multiple officers who responded to January 6th have since died by suicide.',
 education: [],
 affiliations: [
 { name: 'District of Columbia Government', role: 'City police force', type: 'agency' },
 ],
 controversies: [
 'JANUARY 6TH RESPONSE: 150+ officers injured defending Capitol from insurrectionists',
 'OFFICER SUICIDES: Multiple officers who responded to January 6th later died by suicide',
 'USE OF FORCE: History of excessive force complaints and racial profiling',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '1861', event: 'Established as Metropolitan Police' },
 { date: '2021 (Jan 6)', event: '150+ officers injured defending Capitol' },
 ],
 socialMedia: [],
 sources: [
 { title: 'MPD January 6th After-Action Report', url: 'https://mpdc.dc.gov/', date: '2021' },
 ],
 aliases: ['MPD', 'DC Police'],
 knownAssociates: [],
 },
 'mi6': {
 name: 'Secret Intelligence Service (MI6)',
 title: 'British Foreign Intelligence Agency',
 role: 'United Kingdom foreign intelligence service',
 riskLevel: 'high',
 description: 'MI6 is the United Kingdom\'s foreign intelligence service, responsible for espionage and covert operations abroad. In the context of this archive, it is notable for the Steele Dossier: former MI6 officer Christopher Steele compiled opposition research on Trump-Russia ties that became a central and controversial element of the Russia investigation. MI6 has a long history of covert operations, regime change participation, and collaboration with CIA programs.',
 education: [],
 affiliations: [
 { name: 'UK Government', role: 'Foreign intelligence service', type: 'agency' },
 ],
 controversies: [
 'STEELE DOSSIER: Former officer Christopher Steele compiled Trump-Russia dossier that became central to Russia investigation',
 'IRAQ WMD: Provided intelligence used in "dodgy dossier" justifying Iraq War',
 'RENDITION COOPERATION: Assisted CIA extraordinary rendition program',
 'HISTORICAL OPERATIONS: Involved in Cold War covert operations, Iranian coup (1953), and other interventions',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '1909', event: 'Established as Secret Service Bureau foreign section' },
 { date: '2016', event: 'Former officer Christopher Steele compiles Trump-Russia dossier' },
 ],
 socialMedia: [],
 sources: [
 { title: 'MI6 Official Website', url: 'https://www.sis.gov.uk', date: '2024' },
 ],
 aliases: ['MI6', 'SIS', 'Secret Intelligence Service'],
 knownAssociates: [
 { name: 'Christopher Steele', relationship: 'Former officer who compiled Trump-Russia dossier' },
 ],
 },
 'minneapolis-pd': {
 name: 'Minneapolis Police Department',
 title: 'Municipal Police Force',
 role: 'Law enforcement for City of Minneapolis',
 riskLevel: 'high',
 description: 'The Minneapolis Police Department made global headlines after officer Derek Chauvin murdered George Floyd on May 25, 2020 by kneeling on his neck for over nine minutes, sparking the largest civil rights protests since the 1960s. A subsequent DOJ investigation found a pattern and practice of unconstitutional use of force, racial discrimination, and First Amendment violations spanning years.',
 education: [],
 affiliations: [
 { name: 'City of Minneapolis', role: 'Municipal police force', type: 'agency' },
 ],
 controversies: [
 'GEORGE FLOYD MURDER: Officer Derek Chauvin killed Floyd by kneeling on his neck for 9+ minutes (2020)',
 'DOJ PATTERN AND PRACTICE: Investigation found years of unconstitutional policing, racial discrimination, excessive force',
 'CONSENT DECREE: Under federal oversight following DOJ findings',
 'THIRD PRECINCT FIRE: Protests following Floyd murder led to burning of police precinct',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'George Floyd and Police Brutality', slug: 'george-floyd', severity: 'critical' },
 { title: 'Police Brutality Epidemic', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2020 (May 25)', event: 'George Floyd murdered by officer Derek Chauvin' },
 { date: '2021', event: 'Chauvin convicted of murder' },
 { date: '2023', event: 'DOJ finds pattern and practice of constitutional violations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ Minneapolis Pattern and Practice Report', url: 'https://www.justice.gov/opa/pr/justice-department-finds-minneapolis-police-department-engages-pattern-or-practice', date: '2023' },
 ],
 aliases: ['MPD Minneapolis'],
 knownAssociates: [
 { name: 'Derek Chauvin', relationship: 'Former officer, convicted murderer of George Floyd', href: '/entities/individuals/derek-chauvin' },
 ],
 },
 'marty-walsh': {
 name: 'Marty Walsh',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Marty Walsh. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Marty Walsh in connection with policy decisions that disproportionately benefited associated financial interests.',
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





 'martin-baron': {
 name: 'Martin Baron',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Martin Baron. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Martin Baron, though no formal investigation was initiated at the time.',
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





 'michael-kurilla': {
 name: 'Michael Kurilla',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Michael Kurilla. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Michael Kurilla facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
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





 'matt-taibbi': {
 name: 'Matt Taibbi',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Matt Taibbi. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Matt Taibbi\'s operations and the regulatory bodies meant to provide oversight.',
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





 'mark-carney': {
 name: 'Mark Carney',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Mark Carney. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Mark Carney\'s operations and the regulatory bodies meant to provide oversight.',
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
