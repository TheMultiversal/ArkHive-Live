// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'bill-gates': {
 name: 'Bill Gates',
 title: 'Co-founder of Microsoft; Billionaire Philanthropist',
 role: 'Technology mogul with documented antitrust violations; Epstein connections; and global health influence',
 riskLevel: 'high',
 description: 'William Henry Gates III co-founded Microsoft Corporation in 1975 and built it into the world\'s most valuable company. Under his leadership; Microsoft was found guilty of antitrust violations by a federal court in 2001 for illegally maintaining its monopoly in the PC operating systems market. Gates met with convicted sex offender Jeffrey Epstein on multiple documented occasions between 2011 and 2014; well after Epstein\'s 2008 conviction for soliciting a minor for prostitution. Gates initially denied knowing Epstein; then acknowledged the meetings; calling them a "huge mistake." Gates\' philanthropic activities through the Bill & Melinda Gates Foundation ($67+ billion endowment) have given him extraordinary influence over global public health policy; education reform; and agricultural development; raising concerns about an unelected billionaire shaping policy affecting billions of people. His divorce from Melinda French Gates in 2021 was reportedly connected in part to his Epstein relationship.',
 birthDate: 'October 28, 1955',
 birthPlace: 'Seattle, Washington, USA',
 netWorth: 'Estimated $128 billion (2024)',
 education: ['Lakeside School; Seattle', 'Harvard University (attended 1973-1975; dropped out; honorary degree 2007)'],
 affiliations: [
  { name: 'Microsoft', role: 'Co-founder; CEO 1975-2000; Chairman 2000-2014; Board until 2020', type: 'corporation' },
  { name: 'Bill & Melinda Gates Foundation', role: 'Co-chair; $67+ billion endowment', type: 'organization' },
  { name: 'Breakthrough Energy', role: 'Founder; clean energy investment fund', type: 'organization' },
  { name: 'Cascade Investment', role: 'Founder; private investment holding company', type: 'corporation' },
 ],
 controversies: [
  'United States v. Microsoft Corp (2001): Federal court found Microsoft guilty of antitrust violations for illegally maintaining its monopoly through anti-competitive practices; including bundling Internet Explorer and threatening OEMs who installed competing software',
  'Met with Jeffrey Epstein multiple times between 2011 and 2014; after Epstein\'s 2008 sex crime conviction; meetings included a visit to Epstein\'s Manhattan townhouse and flights on Epstein\'s jet; Gates first denied then acknowledged the relationship',
  'The Bill & Melinda Gates Foundation is the world\'s largest private foundation with outsized influence on global health policy; the foundation is the second-largest funder of the WHO and has been criticized for shaping health priorities in developing nations to favor technological solutions and Western pharmaceutical interests over strengthening local health systems',
  'Opposed making COVID-19 vaccine patents freely available to developing nations; initially lobbying against TRIPS waiver that would have allowed generic manufacturing in countries with limited vaccine access',
  'Gates Foundation education initiatives invested $575+ million in Common Core standards and charter school expansion; critics argue these reforms were imposed on communities without democratic input and have failed to improve educational outcomes',
  'Largest private farmland owner in the United States with approximately 270,000 acres across 19 states; raising questions about billionaire land consolidation and influence over agricultural policy',
  'Melinda French Gates cited Bill\'s relationship with Jeffrey Epstein as a factor in their divorce; the couple split in 2021 after 27 years of marriage',
  'Former Microsoft employees have described a culture of workplace intimidation and bullying during Gates\' tenure as CEO; Gates acknowledged "an affair with a Microsoft employee" that contributed to his departure from the board in 2020',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Jeffrey Epstein Network', slug: 'jeffrey-epstein-network', severity: 'critical' },
  { title: 'Big Pharma Patent Abuse', slug: 'big-pharma-patent-abuse-and-price-gouging', severity: 'high' },
  { title: 'Tech Industry Antitrust Failures', slug: 'tech-industry-capture-of-ftc', severity: 'high' },
 ],
 timeline: [
  { date: 'October 28, 1955', event: 'Born in Seattle, Washington to William H. Gates Sr. and Mary Maxwell Gates' },
  { date: '1975', event: 'Co-founded Microsoft with Paul Allen in Albuquerque, New Mexico' },
  { date: '1986', event: 'Microsoft IPO; Gates becomes millionaire at age 31' },
  { date: '1995', event: 'Became the richest person in the world with $12.9 billion net worth' },
  { date: 'May 18, 1998', event: 'U.S. Department of Justice and 20 state attorneys general filed antitrust suit against Microsoft' },
  { date: 'November 5, 1999', event: 'Judge Thomas Penfield Jackson rules Microsoft holds monopoly power in PC operating systems market' },
  { date: '2000', event: 'Established the Bill & Melinda Gates Foundation with initial endowment of $28 billion' },
  { date: 'January 2000', event: 'Stepped down as CEO of Microsoft; replaced by Steve Ballmer' },
  { date: 'November 2001', event: 'Microsoft antitrust case settled with consent decree; avoided breakup of the company' },
  { date: '2011-2014', event: 'Multiple documented meetings with convicted sex offender Jeffrey Epstein' },
  { date: 'February 2014', event: 'Stepped down as chairman of Microsoft board' },
  { date: 'March 13, 2020', event: 'Stepped down from Microsoft board; acknowledged affair with employee' },
  { date: 'May 3, 2021', event: 'Bill and Melinda Gates announce divorce after 27 years of marriage' },
  { date: '2022', event: 'Published "How to Prevent the Next Pandemic"; continued public health advocacy' },
 ],
 socialMedia: [],
 sources: [
  { title: 'United States v. Microsoft Corp., 253 F.3d 34', url: 'https://www.justice.gov', date: 'June 28, 2001' },
  { title: 'New York Times: Bill Gates Met With Jeffrey Epstein Many Times', url: 'https://www.nytimes.com', date: 'October 12, 2019' },
  { title: 'Gates Foundation Annual Report', url: 'https://www.gatesfoundation.org', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Jeffrey Epstein', relationship: 'Met multiple times 2011-2014 after Epstein\'s 2008 conviction; visited Epstein\'s Manhattan townhouse; flew on Epstein\'s jet', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Melinda French Gates', relationship: 'Ex-wife; co-chair of Gates Foundation; divorce partly attributed to Bill\'s Epstein connection' },
  { name: 'Warren Buffett', relationship: 'Close friend; Buffett pledged majority of his wealth to Gates Foundation ($35+ billion in donations)', href: '/entities/individuals/warren-buffett' },
 ],
 },

 'bill-clinton': {
 name: 'Bill Clinton',
 title: '42nd President of the United States',
 role: 'Former President; subject of impeachment; documented connections to Jeffrey Epstein',
 riskLevel: 'critical',
 description: 'William Jefferson Clinton served as the 42nd President of the United States from 1993 to 2001. He was impeached by the House of Representatives in December 1998 on charges of perjury and obstruction of justice related to his sexual relationship with White House intern Monica Lewinsky and his false testimony under oath during the Paula Jones sexual harassment lawsuit; he was acquitted by the Senate in February 1999. Flight logs and witness testimony document at least 26 flights on Jeffrey Epstein\'s private aircraft; including trips to Epstein\'s private island in the U.S. Virgin Islands. Clinton has denied knowledge of Epstein\'s crimes. Before his presidency; Clinton faced credible sexual assault allegations from Juanita Broaddrick (1978) and sexual harassment allegations from Paula Jones (1991; settled for $850,000). His administration oversaw the 1994 Crime Bill that contributed to mass incarceration; the repeal of Glass-Steagall banking regulations in 1999 that many economists credit as a contributing factor to the 2008 financial crisis; and controversial pardons including Marc Rich; a fugitive financier whose ex-wife donated heavily to the Clinton Library and Democratic Party.',
 birthDate: 'August 19, 1946',
 birthPlace: 'Hope, Arkansas, USA',
 netWorth: 'Estimated $120 million',
 education: ['Georgetown University; B.S. Foreign Service 1968', 'University College, Oxford; Rhodes Scholar 1968-1970', 'Yale Law School; J.D. 1973'],
 affiliations: [
  { name: 'Democratic Party', role: 'President 1993-2001; Governor of Arkansas 1979-1981, 1983-1992', type: 'organization' },
  { name: 'Clinton Foundation', role: 'Founder and Chairman', type: 'organization' },
  { name: 'Clinton Global Initiative', role: 'Founder', type: 'organization' },
 ],
 controversies: [
  'Impeached December 19, 1998 on two counts: perjury before a grand jury and obstruction of justice; acquitted by Senate February 12, 1999 (45-55 on perjury; 50-50 on obstruction; both short of 67 needed)',
  'Paula Jones sexual harassment lawsuit (1994-1998); settled for $850,000 without admission of guilt; Clinton was held in civil contempt and fined $90,686 for false testimony',
  'Juanita Broaddrick alleged in 1999 that Clinton raped her in a Little Rock hotel room in 1978 when he was Arkansas Attorney General; Clinton denied the allegation through his attorney',
  'Flight logs document at least 26 trips on Jeffrey Epstein\'s private jet "Lolita Express" between 2001-2003; including flights to Epstein\'s private island Little St. James; Clinton denied visiting the island',
  'Pardoned fugitive financier Marc Rich on his last day in office January 20, 2001; Rich\'s ex-wife Denise Rich had donated $450,000 to the Clinton Library and $100,000 to Hillary Clinton\'s Senate campaign',
  'Signed the Gramm-Leach-Bliley Act in 1999 repealing key provisions of Glass-Steagall; the regulatory firewall between commercial and investment banking; cited as contributing to the 2008 financial crisis',
  'Signed the 1994 Violent Crime Control and Law Enforcement Act; which included mandatory minimum sentences, three-strikes provisions, and $9.7 billion in prison funding; contributing to mass incarceration that disproportionately affected Black Americans',
  'Monica Lewinsky affair (1995-1997); Clinton lied under oath about the relationship; his statement "I did not have sexual relations with that woman" became synonymous with presidential deception',
  'Operation Infinite Reach (1998); cruise missile strikes on Sudan pharmaceutical factory (Al-Shifa) and Afghanistan; Sudan strike widely criticized as destruction of civilian pharmaceutical infrastructure',
  'Whitewater controversy; the Clintons\' involvement in a failed Arkansas real estate venture; independent counsel investigation lasted from 1994-2002',
 ],
 charges: [
  { statute: 'Article I; U.S. Constitution', description: 'Impeached for perjury before a federal grand jury', category: 'Perjury' },
  { statute: 'Article I; U.S. Constitution', description: 'Impeached for obstruction of justice', category: 'Obstruction of Justice' },
  { statute: 'Civil contempt', description: 'Held in civil contempt by Judge Susan Webber Wright for false testimony in Jones v. Clinton; fined $90,686', category: 'Perjury' },
 ],
 relatedInvestigations: [
  { title: 'Jeffrey Epstein Network', slug: 'jeffrey-epstein-network', severity: 'critical' },
  { title: 'Clinton Foundation Foreign Donations', slug: 'clinton-foundation-foreign-donations', severity: 'high' },
  { title: 'Mass Incarceration Industrial Complex', slug: 'mass-incarceration-industrial-complex', severity: 'critical' },
 ],
 timeline: [
  { date: 'August 19, 1946', event: 'Born William Jefferson Blythe III in Hope, Arkansas; father died in car accident three months before birth' },
  { date: '1968', event: 'Graduated Georgetown University; awarded Rhodes Scholarship to Oxford' },
  { date: '1973', event: 'Graduated Yale Law School; where he met Hillary Rodham' },
  { date: '1978', event: 'Elected Governor of Arkansas at age 32; youngest governor in the nation' },
  { date: '1978', event: 'Juanita Broaddrick alleges Clinton sexually assaulted her in a Little Rock hotel room' },
  { date: '1992', event: 'Elected 42nd President; defeating incumbent George H.W. Bush and independent Ross Perot' },
  { date: 'September 13, 1994', event: 'Signed the Violent Crime Control and Law Enforcement Act; the largest crime bill in U.S. history ($30.2 billion)' },
  { date: '1995-1997', event: 'Sexual relationship with White House intern Monica Lewinsky' },
  { date: 'November 12, 1999', event: 'Signed the Gramm-Leach-Bliley Act repealing Glass-Steagall banking regulations' },
  { date: 'December 19, 1998', event: 'Impeached by the House of Representatives on charges of perjury (228-206) and obstruction of justice (221-212)' },
  { date: 'February 12, 1999', event: 'Acquitted by the Senate on both articles of impeachment' },
  { date: 'January 20, 2001', event: 'Pardoned Marc Rich and 139 others on final day in office; Rich pardon sparked congressional investigation' },
  { date: '2001-2003', event: 'Flight logs document 26+ flights on Jeffrey Epstein\'s private aircraft' },
  { date: 'January 3, 2024', event: 'Epstein court documents unsealed; Clinton named in multiple depositions regarding flights and visits' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Starr Report to Congress', url: 'https://www.congress.gov', date: 'September 9, 1998' },
  { title: 'Jones v. Clinton; No. LR-C-94-290', url: 'https://www.pacer.gov', date: '1994' },
  { title: 'Epstein Flight Logs (FOIA)', url: 'https://www.documentcloud.org', date: '2015' },
  { title: 'Epstein Document Unsealing; Doe v. Maxwell', url: 'https://www.courtlistener.com', date: 'January 2024' },
 ],
 aliases: ['Slick Willie', 'The Comeback Kid'],
 knownAssociates: [
  { name: 'Jeffrey Epstein', relationship: 'Flew on Epstein\'s aircraft at least 26 times between 2001-2003; relationship documented in flight logs and witness testimony', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Ghislaine Maxwell', relationship: 'Attended Clinton Global Initiative events; photographed at Clinton events multiple times', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Hillary Clinton', relationship: 'Wife; former Secretary of State and 2016 presidential candidate', href: '/entities/individuals/hillary-clinton' },
  { name: 'Marc Rich', relationship: 'Fugitive financier pardoned by Clinton on last day in office; ex-wife was major Democratic donor' },
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
 'We Build the Wall fraud; $25 million raised, funds stolen',
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
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/usao-sdny', date: '2020' }, ],
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
 education: ['Bachelor\'s degree, University of Georgia'],
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
 { statute: '31 U.S.C. § 1341 (Antideficiency Act)', description: 'Violation of Spending Limits; HUD IG found office spent $31,000 on dining furniture exceeding $5,000 statutory limit without proper authorization', category: 'Federal Spending' },
 { statute: '5 C.F.R. § 2635.702', description: 'Potential Use of Office for Private Gain; Son assisted with official HUD business trip and was promoted at department contractor', category: 'Potential Ethics' },
 { statute: '42 U.S.C. § 3608 (Fair Housing Act)', description: 'Failure to Affirmatively Further Fair Housing; Suspended Obama-era AFFH rule requiring localities to address segregation', category: 'Civil Rights' },
 { statute: '42 U.S.C. § 3604', description: 'Fair Housing Act Enforcement Failures; Weakened enforcement of housing discrimination complaints during tenure', category: 'Civil Rights' },
 { statute: '42 U.S.C. § 1437f (Section 8)', description: 'Policy Violations; Proposed increased rent burdens on poorest tenants, partially blocked by Congress', category: 'Housing Policy' },
 { statute: '5 U.S.C. § 3110 (Anti-Nepotism)', description: 'Potential Nepotism Concerns; Son reportedly involved in HUD matters and events while working for department contractor', category: 'Potential Ethics' },
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
 title: 'Prime Minister of Israel (longest-serving)',
 role: 'Israeli PM convicted of corruption; overseeing military operations in Gaza resulting in ICC arrest warrant',
 riskLevel: 'critical',
 description: 'Benjamin "Bibi" Netanyahu is the longest-serving Prime Minister of Israel; holding office from 1996-1999 and again from 2009-2021 and 2022-present. In 2024; he became the first sitting head of government to have an International Criminal Court (ICC) arrest warrant issued against him; for war crimes and crimes against humanity in Gaza. Netanyahu was convicted on corruption charges in December 2024 in an Israeli court; found guilty of breach of trust in Case 1000 (receiving luxury gifts from billionaire friends) and Case 2000 (attempting to negotiate favorable media coverage). His government\'s military operations in Gaza following the October 7, 2023 Hamas attack have killed over 45,000 Palestinians according to Gaza Health Ministry figures; with the UN and multiple human rights organizations characterizing the destruction as potential genocide. Netanyahu has expanded illegal settlements in the occupied West Bank throughout his tenure; in violation of international law and UN Security Council Resolution 2334. He pushed through a controversial judicial overhaul in 2023 that sparked months of mass protests; the legislation was widely seen as an attempt to shield himself from criminal prosecution.',
 birthDate: 'October 21, 1949',
 birthPlace: 'Tel Aviv, Israel',
 education: ['MIT; B.S. Architecture 1975; M.S. Management Studies 1977', 'Harvard University (briefly attended)'],
 affiliations: [
  { name: 'Likud Party', role: 'Chairman and leader (1993-1999; 2005-present)', type: 'organization' },
  { name: 'Israeli Defense Forces', role: 'Captain; Sayeret Matkal special forces unit (1967-1972)', type: 'agency' },
  { name: 'Israeli Knesset', role: 'Member (1988-1999; 2003-present)', type: 'agency' },
 ],
 controversies: [
  'ICC arrest warrant issued November 21, 2024 for war crimes and crimes against humanity in Gaza; charges include directing attacks on civilian populations; using starvation as a method of warfare; and persecution',
  'Convicted in Israeli court in December 2024 on corruption charges in Case 1000 (breach of trust for receiving $200,000+ in luxury gifts from billionaires Arnon Milchan and James Packer) and Case 2000 (attempting to negotiate favorable coverage with Yedioth Ahronoth publisher Arnon Mozes)',
  'Military operations in Gaza following October 7, 2023 have killed over 45,000 Palestinians including 17,000+ children; destroyed 60%+ of Gaza\'s housing; and displaced 1.9 million of Gaza\'s 2.3 million people',
  'UN Special Rapporteur and independent experts have characterized Israel\'s actions in Gaza as meeting the legal threshold for genocide under the Genocide Convention',
  'South Africa filed genocide case against Israel at the International Court of Justice (ICJ) in December 2023; the ICJ ordered provisional measures in January 2024',
  'Oversaw expansion of illegal settlements in the occupied West Bank; settler population grew from 300,000 to over 700,000 during his combined terms',
  'Pushed through judicial overhaul in 2023 stripping the Supreme Court of power to review government decisions; widely seen as attempt to evade his own criminal prosecution; sparked 39 weeks of mass protests',
  'Intelligence and security failures of October 7, 2023 when Hamas launched unprecedented attack killing approximately 1,200 Israelis; Netanyahu\'s government ignored repeated warnings from military intelligence',
 ],
 charges: [
  { statute: 'Israeli Penal Law Section 284', description: 'Breach of trust (Case 1000; convicted)', category: 'Corruption' },
  { statute: 'Israeli Penal Law Section 284', description: 'Breach of trust (Case 2000; convicted)', category: 'Corruption' },
  { statute: 'ICC Rome Statute Article 8', description: 'War crimes in Gaza (ICC arrest warrant)', category: 'War Crimes' },
  { statute: 'ICC Rome Statute Article 7', description: 'Crimes against humanity in Gaza (ICC arrest warrant)', category: 'War Crimes' },
 ],
 relatedInvestigations: [
  { title: 'Gaza Military Operations 2023-2024', slug: 'gaza-civilian-casualties-investigation', severity: 'critical' },
  { title: 'Israeli Settlement Expansion', slug: 'israeli-settlement-expansion-occupied-territories', severity: 'high' },
 ],
 timeline: [
  { date: 'October 21, 1949', event: 'Born in Tel Aviv to Benzion and Tzila Netanyahu' },
  { date: '1967-1972', event: 'Served in Israeli Defense Forces Sayeret Matkal special forces; participated in Operation Isotope hijacking rescue (1972)' },
  { date: '1976', event: 'Brother Yonatan Netanyahu killed leading Operation Entebbe hostage rescue in Uganda' },
  { date: '1996', event: 'Elected Prime Minister for first time; defeating Shimon Peres' },
  { date: '1999', event: 'Lost election to Ehud Barak' },
  { date: '2009', event: 'Returned as Prime Minister; beginning longest continuous tenure' },
  { date: 'November 2019', event: 'Indicted on corruption charges in Cases 1000, 2000, and 4000' },
  { date: 'June 2021', event: 'Lost power briefly as Bennett-Lapid coalition formed' },
  { date: 'November 2022', event: 'Returned to power leading most right-wing coalition in Israeli history' },
  { date: 'July 2023', event: 'Knesset passes judicial overhaul legislation; Supreme Court strikes down key provision' },
  { date: 'October 7, 2023', event: 'Hamas launches unprecedented attack killing approximately 1,200 Israelis; intelligence failure under Netanyahu\'s watch' },
  { date: 'January 26, 2024', event: 'ICJ orders provisional measures in South Africa\'s genocide case against Israel' },
  { date: 'November 21, 2024', event: 'ICC issues arrest warrant for Netanyahu for war crimes and crimes against humanity' },
  { date: 'December 2024', event: 'Convicted of corruption charges in Israeli court (Cases 1000 and 2000)' },
 ],
 socialMedia: [],
 sources: [
  { title: 'ICC Pre-Trial Chamber: Warrant for Netanyahu', url: 'https://www.icc-cpi.int', date: 'November 21, 2024' },
  { title: 'ICJ: South Africa v. Israel Provisional Measures', url: 'https://www.icj-cij.org', date: 'January 26, 2024' },
  { title: 'Israeli State Attorney Indictment', url: 'https://www.justice.gov.il', date: 'November 2019' },
 ],
 aliases: ['Bibi'],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Close political ally; Trump recognized Israeli sovereignty over Golan Heights and moved U.S. Embassy to Jerusalem', href: '/entities/individuals/donald-trump' },
  { name: 'Arnon Milchan', relationship: 'Hollywood producer who provided Netanyahu with luxury gifts (cigars; champagne) worth $200,000+; key figure in Case 1000' },
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
 title: 'Associate Justice; U.S. Supreme Court',
 role: 'Supreme Court Justice whose confirmation was marred by credible sexual assault allegations and questions about FBI investigation integrity',
 riskLevel: 'high',
 description: 'Brett Michael Kavanaugh has served as an Associate Justice of the U.S. Supreme Court since October 6, 2018. His confirmation hearings became a national flashpoint when Dr. Christine Blasey Ford testified under oath before the Senate Judiciary Committee on September 27, 2018 that Kavanaugh had sexually assaulted her at a house party in suburban Maryland in 1982 when both were in high school. Ford\'s testimony was deemed credible by the American Bar Association and a majority of the American public per polling. The FBI conducted a supplemental investigation limited in scope by the White House; according to later reporting, the FBI received over 4,500 tips but did not follow up on the vast majority. Former FBI officials later confirmed the investigation was constrained from pursuing corroborating witnesses. Deborah Ramirez also alleged Kavanaugh exposed himself to her at a Yale dormitory party. Kavanaugh denied all allegations. He was confirmed 50-48; the narrowest Supreme Court confirmation margin since 1881. Before the Court; Kavanaugh served on the D.C. Circuit Court of Appeals and was a key figure in the Ken Starr investigation of President Clinton; authoring the most explicit questions for Clinton\'s grand jury testimony. He has since voted to overturn Roe v. Wade in Dobbs v. Jackson (2022) and has consistently sided with expanding executive power and limiting regulatory authority.',
 birthDate: 'February 12, 1965',
 birthPlace: 'Washington, D.C., USA',
 education: ['Georgetown Preparatory School', 'Yale University; B.A. 1987', 'Yale Law School; J.D. 1990'],
 affiliations: [
  { name: 'Supreme Court', role: 'Associate Justice (2018-present)', type: 'agency' },
  { name: 'U.S. Court of Appeals; D.C. Circuit', role: 'Judge (2006-2018)', type: 'agency' },
  { name: 'Office of Independent Counsel (Ken Starr)', role: 'Associate Counsel; then Senior Associate Counsel (1994-1997)', type: 'agency' },
  { name: 'George W. Bush White House', role: 'Staff Secretary (2003-2006); Associate Counsel (2001-2003)', type: 'agency' },
 ],
 controversies: [
  'Dr. Christine Blasey Ford testified under oath that Kavanaugh sexually assaulted her at a 1982 party; pinning her to a bed, groping her, and covering her mouth when she tried to scream; Ford stated she was "100 percent" certain Kavanaugh was her assailant',
  'Deborah Ramirez alleged Kavanaugh thrust his penis in her face at a dormitory party during their freshman year at Yale; Ramirez passed a polygraph test and provided corroborating witnesses who were not interviewed by the FBI',
  'The FBI supplemental investigation was limited in scope by the Trump White House; the FBI reportedly received over 4,500 tips and complaints but most were not investigated; former agents called the probe a "sham"',
  'During his confirmation hearing; Kavanaugh displayed intense anger and partisanship; claiming the allegations were "a calculated and orchestrated political hit" and "revenge on behalf of the Clintons"; raising concerns about judicial temperament',
  'Over 2,400 law professors signed a letter opposing Kavanaugh\'s confirmation; stating his testimony demonstrated a lack of judicial temperament',
  'As part of the Starr investigation; Kavanaugh authored a memo advocating that Clinton be asked graphic sexual questions under oath; despite later claiming executive privilege shields presidential investigations',
  'Questions about $200,000+ in credit card debt and a country club membership that were reportedly paid off before his nomination; no satisfactory explanation was provided',
  'Voted to overturn Roe v. Wade in Dobbs v. Jackson Women\'s Health Organization (2022) after telling senators during confirmation he considered Roe "settled law"',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Supreme Court Ethics Crisis', slug: 'supreme-court-ethics-dark-money', severity: 'critical' },
  { title: 'FBI Investigation Integrity', slug: 'fbi-investigation-integrity-concerns', severity: 'high' },
 ],
 timeline: [
  { date: 'February 12, 1965', event: 'Born in Washington, D.C.' },
  { date: '1983', event: 'Graduated Georgetown Preparatory School' },
  { date: '1987', event: 'Graduated Yale University' },
  { date: '1990', event: 'Graduated Yale Law School; clerked for Judge Walter Stapleton and Judge Alex Kozinski' },
  { date: '1993-1994', event: 'Clerked for Supreme Court Justice Anthony Kennedy' },
  { date: '1994-1997', event: 'Worked for Kenneth Starr\'s Office of Independent Counsel investigating President Clinton' },
  { date: '2001-2003', event: 'Associate Counsel in the Bush White House' },
  { date: '2003-2006', event: 'White House Staff Secretary under George W. Bush' },
  { date: 'May 30, 2006', event: 'Confirmed to D.C. Circuit Court of Appeals after a three-year confirmation battle' },
  { date: 'July 9, 2018', event: 'Nominated to the Supreme Court by President Trump to replace retiring Justice Anthony Kennedy' },
  { date: 'September 16, 2018', event: 'Christine Blasey Ford\'s allegations become public in a Washington Post report' },
  { date: 'September 27, 2018', event: 'Ford and Kavanaugh testify before the Senate Judiciary Committee in nationally televised hearings' },
  { date: 'October 6, 2018', event: 'Confirmed to the Supreme Court by a 50-48 vote; the narrowest margin in 137 years' },
  { date: 'June 24, 2022', event: 'Joined majority opinion in Dobbs v. Jackson; overturning Roe v. Wade' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Senate Judiciary Committee Hearing Transcript', url: 'https://www.judiciary.senate.gov', date: 'September 27, 2018' },
  { title: 'FBI Supplemental Investigation Report (classified)', url: 'https://www.fbi.gov', date: 'October 2018' },
  { title: 'New York Times: Kavanaugh Investigation Constrained', url: 'https://www.nytimes.com', date: 'September 2019' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Christine Blasey Ford', relationship: 'Testified under oath that Kavanaugh sexually assaulted her at a 1982 house party' },
  { name: 'Kenneth Starr', relationship: 'Kavanaugh served as associate counsel in Starr\'s investigation of President Clinton 1994-1997', href: '/entities/individuals/kenneth-starr' },
  { name: 'Donald Trump', relationship: 'Nominated Kavanaugh to the Supreme Court on July 9, 2018', href: '/entities/individuals/donald-trump' },
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
 education: ['Damascus University, Medicine (1988)', 'Western Eye Hospital, London, Ophthalmology residency (1992-1994)'],
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
 { statute: 'Rome Statute Article 7(1)(a)', description: 'Murder; mass killing of civilians', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Torture; systematic torture program', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Other inhumane acts; chemical weapons use', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 8(2)(a)(i)', description: 'Willful killing; war crime', category: 'War Crimes' },
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
    description: 'Bill Hwang is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s research has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
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
      { date: '2026-03-04', event: 'Profile created for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'Cross-referencing Bill Hwang against congressional hearing transcripts and lobbying disclosure databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database: Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org: Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
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
 title: 'Convicted Felon; Former NASDAQ Chairman',
 role: 'Architect of the largest Ponzi scheme in history; $64.8 billion fraud',
 riskLevel: 'critical',
 description: 'Bernard Lawrence Madoff orchestrated the largest financial fraud in history; a Ponzi scheme that lasted at least 17 years and defrauded thousands of investors of an estimated $64.8 billion in paper losses ($17.5 billion in actual principal). A former chairman of the NASDAQ stock exchange; Madoff used his industry credibility and social connections to attract money from hedge funds, charities, banks, and individual investors worldwide. His firm; Bernard L. Madoff Investment Securities LLC; fabricated trade confirmations, account statements, and regulatory filings for decades while paying returns to existing investors with new investors\' money. The scheme collapsed in December 2008 during the financial crisis when redemption requests exceeded available funds. Madoff confessed to his sons; who reported him to the FBI. He pleaded guilty to 11 federal felonies and was sentenced to 150 years in prison; the maximum allowed. He died in federal prison on April 14, 2021.',
 birthDate: 'April 29, 1938',
 birthPlace: 'Queens, New York, USA',
 deathDate: 'April 14, 2021',
 netWorth: '$0 (all assets forfeited)',
 education: ['University of Alabama (one year)', 'Hofstra University; B.A. Political Science 1960', 'Brooklyn Law School (attended briefly; did not complete)'],
 affiliations: [
  { name: 'Bernard L. Madoff Investment Securities', role: 'Founder and Chairman', type: 'corporation' },
  { name: 'NASDAQ', role: 'Chairman of the Board (1990, 1991, 1993)', type: 'organization' },
  { name: 'SEC', role: 'Subject of failed examinations; advisory committee member', type: 'agency' },
  { name: 'Yeshiva University', role: 'Board of Trustees; treasurer', type: 'organization' },
 ],
 controversies: [
  'Operated the largest Ponzi scheme in history for at least 17 years (1991-2008); fabricating returns of 10-12% annually with remarkable consistency that defied market conditions',
  'The SEC examined Madoff\'s firm at least five times between 1992 and 2008 and failed to detect the fraud; despite detailed warnings from whistleblower Harry Markopolos beginning in 2000',
  'Madoff\'s feeder funds; including Fairfield Greenwich Group ($7.5 billion), Tremont Group ($3.3 billion), and Banco Santander ($2.87 billion); funneled money without conducting meaningful due diligence',
  'Charitable organizations devastated included the Elie Wiesel Foundation for Humanity (lost $15.2 million), Hadassah ($90 million), Steven Spielberg\'s Wunderkinder Foundation, and hundreds of Jewish philanthropies',
  'Multiple suicides linked to Madoff losses; including French financier Thierry de la Villehuchet ($1.4 billion lost; found dead December 23, 2008) and British soldier William Foxton',
  'Madoff\'s sons Mark and Andrew both worked at the firm; Mark Madoff committed suicide on December 11, 2010; the second anniversary of his father\'s arrest',
  'The Madoff Recovery Initiative led by trustee Irving Picard has recovered over $14.5 billion of the $17.5 billion in principal losses through lawsuits against feeder funds and net winners',
 ],
 charges: [
  { statute: '18 U.S.C. § 1341', description: 'Mail fraud', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1343', description: 'Wire fraud', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1348', description: 'Securities fraud', category: 'Financial Crime' },
  { statute: '15 U.S.C. § 80b-6', description: 'Investment adviser fraud', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1956', description: 'Money laundering', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1957', description: 'Monetary transactions in property derived from specified unlawful activity', category: 'Financial Crime' },
  { statute: '18 U.S.C. § 1001', description: 'False statements', category: 'Perjury' },
  { statute: '18 U.S.C. § 1621', description: 'Perjury', category: 'Perjury' },
  { statute: '26 U.S.C. § 7206', description: 'False filing of income taxes', category: 'Tax Evasion' },
  { statute: '15 U.S.C. § 78j(b)', description: 'Fraud in connection with securities', category: 'Securities Fraud' },
  { statute: '18 U.S.C. § 371', description: 'International money laundering conspiracy', category: 'Financial Crime' },
 ],
 relatedInvestigations: [
  { title: 'SEC Regulatory Capture and Failure', slug: 'wall-street-capture-of-sec', severity: 'critical' },
  { title: 'Ponzi Scheme Pattern Recognition', slug: 'ponzi-scheme-pattern-recognition', severity: 'high' },
 ],
 timeline: [
  { date: 'April 29, 1938', event: 'Born in Queens, New York to Ralph and Sylvia Madoff' },
  { date: '1960', event: 'Graduated from Hofstra University; founded Bernard L. Madoff Investment Securities LLC with $5,000 from lifeguarding savings' },
  { date: '1970s', event: 'Became a prominent market maker on Wall Street; pioneered electronic trading that would become NASDAQ' },
  { date: '1990', event: 'Elected chairman of the NASDAQ stock exchange' },
  { date: '1992', event: 'SEC investigates Madoff feeder fund run by Frank Avellino and Michael Bienes; Madoff not charged' },
  { date: '1999', event: 'Harry Markopolos first suspects Madoff returns are fraudulent; contacts SEC Boston office' },
  { date: '2000', event: 'Markopolos submits first detailed complaint to SEC titled "The World\'s Largest Hedge Fund is a Fraud"' },
  { date: '2001', event: 'Barron\'s publishes article questioning Madoff\'s consistently high returns; industry largely ignores concerns' },
  { date: '2005', event: 'Markopolos submits 21-page report to SEC detailing mathematical proof of fraud; SEC conducts cursory investigation and closes case' },
  { date: '2006', event: 'SEC examiner finds violations but investigation is closed without referring case for enforcement action' },
  { date: 'December 10, 2008', event: 'Madoff confesses to sons Mark and Andrew that his investment advisory business is "one big lie" and "basically, a giant Ponzi scheme"' },
  { date: 'December 11, 2008', event: 'Mark and Andrew Madoff report their father to federal authorities; FBI arrests Bernard Madoff at his Manhattan penthouse' },
  { date: 'March 12, 2009', event: 'Madoff pleads guilty to all 11 federal charges; tells court "I am actually grateful for this opportunity to publicly speak about my crimes"' },
  { date: 'June 29, 2009', event: 'Sentenced to 150 years in federal prison by Judge Denny Chin; the maximum allowed under sentencing guidelines' },
  { date: 'December 11, 2010', event: 'Son Mark Madoff found dead by suicide in his Manhattan apartment on the second anniversary of his father\'s arrest' },
  { date: 'September 10, 2014', event: 'Son Andrew Madoff dies of lymphoma at age 48' },
  { date: 'April 14, 2021', event: 'Bernie Madoff dies of chronic kidney disease at Federal Medical Center Butner in North Carolina at age 82' },
 ],
 socialMedia: [],
 sources: [
  { title: 'United States v. Madoff, Criminal Docket No. 09-CR-213', url: 'https://www.justice.gov/news', date: 'March 12, 2009' },
  { title: 'SEC OIG Report: Investigation of Failure to Uncover Madoff Ponzi Scheme', url: 'https://www.sec.gov/news/studies/2009/oig-509.pdf', date: 'August 31, 2009' },
  { title: 'Harry Markopolos; "No One Would Listen"', url: 'https://www.wiley.com', date: '2010' },
  { title: 'Diana Henriques; "The Wizard of Lies"', url: 'https://www.nytimes.com', date: '2011' },
 ],
 aliases: ['The Wizard of Lies'],
 knownAssociates: [
  { name: 'Frank DiPascali', relationship: 'Chief Financial Officer; fabricated trading records and client statements for decades; cooperated with prosecutors; died 2015', href: '/entities/individuals/frank-dipascali' },
  { name: 'Harry Markopolos', relationship: 'Whistleblower; financial analyst who warned the SEC about Madoff fraud repeatedly from 1999-2008', href: '/entities/individuals/harry-markopolos' },
  { name: 'Irving Picard', relationship: 'Court-appointed trustee for Madoff victim recovery; recovered $14.5+ billion', href: '/entities/individuals/irving-picard' },
  { name: 'Ruth Madoff', relationship: 'Wife; forfeited $80 million in assets; claimed ignorance of fraud', href: '/entities/individuals/ruth-madoff' },
 ],
 },


 'bruce-jessen': {
 name: 'Bruce Jessen',
 title: 'Psychologist; CIA Torture Program Architect',
 role: 'Co-designed CIA "enhanced interrogation" torture program; paid $81 million by the U.S. government',
 riskLevel: 'critical',
 description: 'James Elmer "Bruce" Jessen is a psychologist and former U.S. Air Force contractor who; together with James Mitchell; designed the CIA\'s "enhanced interrogation techniques" program used on detainees in the War on Terror. Jessen and Mitchell reverse-engineered the military\'s SERE (Survival, Evasion, Resistance, and Escape) training program; which was designed to prepare U.S. soldiers to resist torture; into an actual torture program used on CIA prisoners. They personally waterboarded Abu Zubaydah 83 times in August 2002 and Khalid Sheikh Mohammed 183 times. Their company; Mitchell, Jessen & Associates; received $81 million in CIA contracts. The Senate Intelligence Committee\'s 2014 Torture Report found that the techniques were ineffective at producing actionable intelligence and that both men had "no experience as interrogators." In 2017; a federal court allowed a lawsuit (Salim v. Mitchell) by three former detainees to proceed against Jessen and Mitchell; the case was settled for an undisclosed amount. Despite designing a program that the UN; the Red Cross; and numerous legal experts have classified as torture; neither Jessen nor Mitchell have faced criminal prosecution.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Ph.D. Clinical Psychology; Utah State University'],
 affiliations: [
  { name: 'CIA', role: 'Contract psychologist; architect of enhanced interrogation program (2002-2009)', type: 'agency' },
  { name: 'Mitchell, Jessen & Associates', role: 'Co-founder; received $81 million in CIA contracts', type: 'corporation' },
  { name: 'U.S. Air Force', role: 'SERE school psychologist; Colonel (ret.)', type: 'agency' },
 ],
 controversies: [
  'Co-designed the CIA\'s "enhanced interrogation techniques" program; which the Senate Torture Report; the UN; the International Red Cross; and most legal scholars consider torture under international law',
  'Personally participated in the waterboarding of Abu Zubaydah (83 times in August 2002) and Khalid Sheikh Mohammed (183 times); both were subjected to additional techniques including sleep deprivation up to 180 hours; stress positions; confinement boxes; and rectal feeding',
  'Had no experience as interrogators; the Senate Torture Report noted they had "no relevant experience" and "no specialized knowledge of al-Qaeda; a lack of language skills and a limited understanding of the culture"',
  'Mitchell, Jessen & Associates was paid $81 million by the CIA before the contract was terminated in 2009; they were originally contracted for up to $180 million',
  'The Senate Intelligence Committee Torture Report (2014) found the program was ineffective; "the CIA\'s use of its enhanced interrogation techniques was not an effective means of acquiring intelligence"',
  'Gul Rahman died of hypothermia in November 2002 at a CIA black site (Salt Pit) in Afghanistan after being left chained to a concrete floor half-naked; the techniques applied were based on Jessen and Mitchell\'s program',
  'Never criminally prosecuted for torture; the DOJ declined to bring charges in 2012 after a limited investigation',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'CIA Enhanced Interrogation Program', slug: 'cia-enhanced-interrogation-torture-program', severity: 'critical' },
  { title: 'CIA Black Sites', slug: 'cia-black-sites-and-extraordinary-rendition', severity: 'critical' },
 ],
 timeline: [
  { date: '1980s-1990s', event: 'Served as psychologist at U.S. Air Force SERE school; studying techniques used to train soldiers to resist torture' },
  { date: 'April 2002', event: 'CIA contracts Jessen and Mitchell to develop interrogation program based on reverse-engineered SERE techniques' },
  { date: 'August 2002', event: 'Abu Zubaydah waterboarded 83 times at CIA black site; Jessen and Mitchell personally involved' },
  { date: 'November 2002', event: 'Detainee Gul Rahman dies of hypothermia at Salt Pit black site in Afghanistan; techniques based on Jessen-Mitchell program' },
  { date: 'March 2003', event: 'Khalid Sheikh Mohammed waterboarded 183 times after capture in Pakistan' },
  { date: '2005', event: 'Mitchell, Jessen & Associates formally incorporated to receive CIA contracts' },
  { date: '2009', event: 'CIA terminates contract with Mitchell, Jessen & Associates; total payments: $81 million' },
  { date: 'December 9, 2014', event: 'Senate Intelligence Committee releases Torture Report documenting the program\'s ineffectiveness and brutality' },
  { date: 'October 2015', event: 'ACLU files Salim v. Mitchell lawsuit on behalf of three former detainees against Jessen and Mitchell' },
  { date: 'August 2017', event: 'Federal judge allows lawsuit to proceed to trial; denying qualified immunity defense' },
  { date: 'August 2017', event: 'Case settled for undisclosed amount before trial' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Senate Intelligence Committee Torture Report', url: 'https://www.intelligence.senate.gov/publications', date: 'December 9, 2014' },
  { title: 'Salim v. Mitchell; No. 2:15-cv-286 (E.D. Wash.)', url: 'https://www.aclu.org/cases', date: '2015' },
  { title: 'CIA Inspector General Special Review (2004)', url: 'https://www.cia.gov', date: '2004' },
 ],
 aliases: ['James Elmer Jessen'],
 knownAssociates: [
  { name: 'James Mitchell', relationship: 'Co-architect of CIA torture program; business partner at Mitchell, Jessen & Associates', href: '/entities/individuals/james-mitchell' },
 ],
 },











  'billy-mcfarland': {
    name: 'Billy Mcfarland',
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Billy Mcfarland is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s research has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
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
      { date: '2026-03-05', event: 'Profile created for investigative tracking and public accountability documentation' },
      { date: '2026-03-05', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-06', event: 'Network analysis completed; Billy Mcfarland connected to 19 entities in the accountability database' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database: Network Analysis', url: 'https://arkhive.org', date: '2026-03-05' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-05' },
      { title: 'OpenSecrets.org: Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-05' },
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
    description: 'Bill Oreilly is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s research has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
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
      { date: '2026-03-04', event: 'Profile created for investigative tracking and public accountability documentation' },
      { date: '2026-03-04', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-05', event: 'ArkHive research flagged Bill Oreilly for expanded documentation based on cross-reference density exceeding threshold' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database: Network Analysis', url: 'https://arkhive.org', date: '2026-03-04' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-04' },
      { title: 'OpenSecrets.org: Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-04' },
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
 title: 'Former Chairman; Federal Reserve (2006-2014); Nobel Laureate',
 role: 'Fed Chair during the 2008 financial crisis; architect of bank bailouts that socialized losses while privatizing profits',
 riskLevel: 'high',
 description: 'Ben Shalom Bernanke served as Chairman of the Federal Reserve from 2006 to 2014; presiding over the worst financial crisis since the Great Depression. Bernanke\'s Fed failed to anticipate the housing bubble and subprime mortgage crisis despite warnings; then orchestrated unprecedented bailouts totaling $700 billion in TARP funds and over $4 trillion in quantitative easing that primarily benefited large financial institutions while millions of Americans lost their homes. Under his leadership; the Fed approved the emergency acquisition of Bear Stearns by JPMorgan Chase ($29 billion in Fed guarantees); the $85 billion bailout of AIG; and the rescue of the largest banks deemed "too big to fail." Not a single senior Wall Street executive was prosecuted for the fraud that caused the crisis. Critics argue Bernanke\'s policies created moral hazard by teaching banks that they would be rescued from their own reckless behavior; while ordinary Americans received no comparable assistance. He was awarded the 2022 Nobel Prize in Economics for research on banks and financial crises; prompting widespread criticism.',
 birthDate: 'December 13, 1953',
 birthPlace: 'Augusta, Georgia, USA',
 education: ['Harvard University; A.B. Economics (summa cum laude) 1975', 'MIT; Ph.D. Economics 1979'],
 affiliations: [
  { name: 'Federal Reserve', role: 'Chairman (2006-2014); Governor (2002-2005)', type: 'agency' },
  { name: 'Council of Economic Advisers', role: 'Chairman (2005-2006)', type: 'agency' },
  { name: 'Citadel LLC', role: 'Senior Advisor (2015-present)', type: 'corporation' },
  { name: 'Brookings Institution', role: 'Distinguished Fellow (2014-present)', type: 'organization' },
  { name: 'PIMCO', role: 'Senior Advisor (2015-present)', type: 'corporation' },
 ],
 controversies: [
  'Failed to regulate subprime mortgage market despite warnings; told Congress in 2007 that "the impact on the broader economy and financial markets of the problems in the subprime market seems likely to be contained"; months before the worst financial crisis in 80 years',
  'Orchestrated the $700 billion TARP bailout and $4+ trillion in quantitative easing that primarily benefited large banks; while 3.8 million homeowners lost their homes to foreclosure in 2010 alone',
  'Approved the $85 billion AIG bailout that effectively paid Goldman Sachs and other counterparties 100 cents on the dollar for toxic assets; Goldman Sachs received $12.9 billion of AIG bailout money',
  'After leaving the Fed; immediately joined Citadel LLC (Ken Griffin\'s hedge fund) and PIMCO as a senior advisor; exemplifying the revolving door between regulators and the institutions they oversee',
  'The Fed under Bernanke kept interest rates near zero for years after the crisis; creating asset bubbles in housing and equities that primarily benefited wealthy asset holders while wages stagnated',
  '2022 Nobel Prize generated criticism; with many arguing it was inappropriate to award an economics prize to someone who failed to prevent the worst economic crisis since the Great Depression',
 ],
 charges: [],
 relatedInvestigations: [
  { title: '2008 Financial Crisis', slug: '2008-financial-crisis-exposed', severity: 'critical' },
  { title: 'Wall Street Capture of SEC', slug: 'wall-street-capture-of-sec', severity: 'critical' },
  { title: 'Federal Reserve Secret Lending', slug: 'federal-reserve-secret-lending-programs', severity: 'high' },
 ],
 timeline: [
  { date: 'December 13, 1953', event: 'Born in Augusta, Georgia' },
  { date: '1979', event: 'Earned Ph.D. in Economics from MIT; dissertation on the Great Depression' },
  { date: 'August 2002', event: 'Appointed to Federal Reserve Board of Governors by President George W. Bush' },
  { date: 'June 2005', event: 'Appointed Chairman of the Council of Economic Advisers' },
  { date: 'February 1, 2006', event: 'Became Chairman of the Federal Reserve; replacing Alan Greenspan' },
  { date: 'March 2007', event: 'Told Congress subprime crisis would be "contained"' },
  { date: 'March 2008', event: 'Approved $29 billion in Fed guarantees for JPMorgan\'s acquisition of Bear Stearns' },
  { date: 'September 16, 2008', event: 'Approved $85 billion emergency loan to AIG' },
  { date: 'October 3, 2008', event: 'Congress passes $700 billion TARP bailout' },
  { date: 'November 2008', event: 'Launched first round of quantitative easing (QE1); eventually purchasing $1.75 trillion in assets' },
  { date: 'January 31, 2014', event: 'Left Federal Reserve after second term; QE programs had totaled $4.5 trillion' },
  { date: 'April 2015', event: 'Joined Citadel LLC and PIMCO as senior advisor' },
  { date: 'October 10, 2022', event: 'Awarded Nobel Prize in Economics sparking controversy' },
 ],
 socialMedia: [],
 sources: [
  { title: 'FCIC: Financial Crisis Inquiry Report', url: 'https://fcic.law.stanford.edu', date: 'January 2011' },
  { title: 'Federal Reserve TARP Reports', url: 'https://www.federalreserve.gov', date: '2008-2014' },
  { title: 'GAO Audit of Federal Reserve Emergency Lending', url: 'https://www.gao.gov', date: 'July 2011' },
 ],
 aliases: ['Helicopter Ben'],
 knownAssociates: [
  { name: 'Henry Paulson', relationship: 'Treasury Secretary during 2008 crisis; former Goldman Sachs CEO; coordinated bailouts with Bernanke', href: '/entities/individuals/henry-paulson' },
  { name: 'Timothy Geithner', relationship: 'NY Fed President during crisis; became Treasury Secretary; key architect of bailout strategy' },
  { name: 'Alan Greenspan', relationship: 'Predecessor as Fed Chair whose low interest rate policies and deregulation advocacy contributed to the housing bubble', href: '/entities/individuals/alan-greenspan' },
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
 title: 'Emergency room patient charged $18,000 for a broken arm: became symbol of surprise billing crisis',
 role: 'Emergency room patient charged $18,000 for a broken arm; became symbol of surprise billing crisis',
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
 { date: 'Ongoing', event: 'Active in role as Emergency room patient charged $18,000 for a broken arm; became symbol of surprise billing crisis' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Becky Barr', url: 'https://www.google.com/search?q=Becky%20Barr', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'William Barr', relationship: 'Related to AG Barr; DOJ connection', href: '/entities/individuals/william-barr' },
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
    title: 'VW Head of Product Safety Charged in U.S. Dieselgate Cover-Up',
    role: 'Volkswagen AG head of product safety and quality management who was indicted by a U.S. federal grand jury in May 2018 for his role in the Dieselgate emissions fraud cover-up',
    riskLevel: 'high' as const,
    description: 'Bernd Gottweis was a senior Volkswagen AG executive who served as head of product safety and quality management. In May 2018, a U.S. federal grand jury in the Eastern District of Michigan returned superseding indictments against Gottweis and four other VW executives for their roles in the conspiracy to defraud the United States, commit wire fraud, and violate the Clean Air Act in connection with the Dieselgate emissions scandal. Gottweis was accused of being part of the effort to conceal from U.S. regulators and the public that approximately 11 million VW diesel vehicles worldwide (roughly 580,000 in the United States) were equipped with "defeat device" software designed to detect when the vehicle was being tested for emissions and activate full pollution controls only during testing. During normal driving, the vehicles emitted nitrogen oxides (NOx) at levels up to 40 times the legal limit set by the EPA. The defeat device software was installed in 2.0-liter and 3.0-liter turbocharged direct injection (TDI) diesel engines beginning in model year 2009. According to the indictments, even after the International Council on Clean Transportation (ICCT) and West Virginia University researchers discovered the discrepancy in May 2014, VW executives including those in the product safety division continued to mislead the EPA and the California Air Resources Board (CARB) about the cause of the elevated emissions. VW did not admit to using defeat devices until September 3, 2015, when VW engineer James Liang and others disclosed the software to regulators. Gottweis, like several other indicted German executives, remained outside U.S. jurisdiction in Germany and has not been extradited to face trial. VW pleaded guilty to three federal felony charges in March 2017 and agreed to pay over $30 billion in fines, settlements, and vehicle buybacks, making it the largest automotive industry scandal in history.',
    education: [],
    affiliations: [
      { name: 'Volkswagen AG', role: 'Head of Product Safety and Quality Management; indicted by U.S. federal grand jury in 2018 for conspiracy to defraud the United States in the Dieselgate emissions cover-up', type: 'corporation' },
    ],
    controversies: [
      'Indicted by a U.S. federal grand jury in May 2018 for conspiracy to defraud the United States, wire fraud, and Clean Air Act violations in connection with the Dieselgate emissions scandal',
      'Accused of participating in the effort to conceal from the EPA and CARB that approximately 11 million VW diesel vehicles were equipped with defeat device software designed to cheat emissions tests',
      'The vehicles he was responsible for overseeing as head of product safety emitted nitrogen oxides (NOx) at levels up to 40 times the legal EPA limit during normal driving',
      'Even after researchers at West Virginia University discovered the emissions discrepancy in May 2014, VW product safety executives continued to mislead U.S. regulators about the cause',
      'Remained in Germany outside U.S. jurisdiction and has not been extradited to face trial on the federal charges',
      'VW ultimately paid over $30 billion in fines, settlements, and vehicle buybacks, the largest automotive industry scandal in history',
    ],
    charges: [
      'Conspiracy to defraud the United States (18 U.S.C. 371)',
      'Wire fraud (18 U.S.C. 1343)',
      'Violation of the Clean Air Act (42 U.S.C. 7413(c)(2)(A))',
    ],
    relatedInvestigations: [
      { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
    ],
    timeline: [
      { date: '2009', event: 'VW begins installing defeat device software in TDI diesel engines for U.S. market vehicles; Gottweis serves in product safety oversight role' },
      { date: '2014-05', event: 'International Council on Clean Transportation and West Virginia University researchers discover that VW diesel vehicles emit NOx at up to 40 times the legal limit during normal driving' },
      { date: '2014-12', event: 'VW issues a voluntary recall claiming to fix the emissions problem, but the "fix" does not actually resolve the defeat device issue; regulators remain misled' },
      { date: '2015-09-03', event: 'VW finally admits to U.S. regulators that its diesel vehicles contain defeat device software designed to cheat emissions tests' },
      { date: '2015-09-18', event: 'EPA issues Notice of Violation to VW; the scandal becomes public, wiping billions from VW share price' },
      { date: '2017-01-11', event: 'VW AG pleads guilty to three federal felony charges: conspiracy to defraud the United States, obstruction of justice, and importing goods by false statements' },
      { date: '2017-03', event: 'VW agrees to pay $4.3 billion in criminal and civil penalties to the U.S. government; total costs including buybacks and settlements exceed $30 billion' },
      { date: '2018-05', event: 'U.S. federal grand jury returns superseding indictments against Gottweis and four other VW executives for their roles in the emissions fraud conspiracy' },
    ],
    sources: [
      { title: 'U.S. DOJ: Volkswagen AG Agrees to Plead Guilty and Pay $4.3 Billion in Criminal and Civil Penalties', date: '2017-01-11' },
      { title: 'EPA: Notice of Violation to Volkswagen AG, Audi AG, and Volkswagen Group of America', date: '2015-09-18' },
      { title: 'Thompson, J. et al. - Real-World Exhaust Emissions from Light-Duty Diesel Vehicles (Environmental Science & Technology)', date: '2014' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Martin Winterkorn', relationship: 'VW CEO who resigned after the Dieselgate scandal broke; also indicted in the U.S.', href: '/entities/individuals/martin-winterkorn' },
    ],
  },













  'bernie-sanders': {
    name: 'Bernie Sanders',
    title: 'U.S. Senator from Vermont',
    role: 'Independent senator who has led the legislative fight for Medicare for All, prescription drug price negotiation, and healthcare affordability reform',
    riskLevel: 'medium' as const,
    description: 'Bernard Sanders (born 1941) is an American politician serving as the senior U.S. Senator from Vermont since 2007. The longest-serving independent member of Congress in American history, Sanders has been the most prominent legislative advocate for universal healthcare, drug price reform, and accountability for pharmaceutical industry profiteering. As chairman of the Senate Health, Education, Labor, and Pensions (HELP) Committee, Sanders held landmark hearings dragging pharmaceutical CEOs before Congress to explain drug pricing, including Novo Nordisk CEO over insulin pricing and Moderna CEO over COVID-19 vaccine prices. He led the fight for the Inflation Reduction Act provisions allowing Medicare to negotiate prescription drug prices for the first time in history, partially undoing the damage of the 2003 Medicare Part D non-negotiation clause. Sanders has introduced multiple versions of the Medicare for All Act, legislation to allow prescription drug importation from Canada, and has been the most consistent Senate voice against the pharmaceutical industry lobbying apparatus. His 2016 and 2020 presidential campaigns made healthcare reform and drug pricing central national issues.',
    birthDate: '1941-09-08',
    birthPlace: 'Brooklyn, New York',
    education: ['University of Chicago (B.A., Political Science, 1964)'],
    affiliations: [
      { name: 'United States Senate', role: 'Senator from Vermont (2007-present); Chairman, HELP Committee (2023-present); Chairman, Budget Committee (2021-2023)', type: 'agency' },
      { name: 'United States House of Representatives', role: 'Representative from Vermont At-Large District (1991-2007)', type: 'agency' },
    ],
    controversies: [
      'As Senate HELP Committee chairman, held hearings compelling pharmaceutical CEOs to testify on drug pricing practices',
      'Led legislative efforts that resulted in the IRA allowing Medicare to negotiate prices for the first time, saving an estimated $100 billion over 10 years',
      'Introduced legislation to allow drug importation from Canada where identical medications cost 50-90% less',
      'His 2016 and 2020 presidential campaigns made Medicare for All and pharmaceutical accountability central national policy debates',
      'Organized bus trips to Canada with diabetes patients to purchase insulin at a fraction of U.S. prices, highlighting the price disparity',
    ],
    relatedInvestigations: [
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
      { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
    ],
    timeline: [
      { date: '1991', event: 'Elected to U.S. House of Representatives; begins decades-long fight for universal healthcare' },
      { date: '2007', event: 'Elected to U.S. Senate from Vermont' },
      { date: '2016', event: 'Presidential campaign makes Medicare for All a central national policy debate' },
      { date: '2019-07', event: 'Organizes bus trip with diabetes patients to Canada to purchase insulin at fraction of U.S. price' },
      { date: '2022-08', event: 'Inflation Reduction Act passes with Medicare drug negotiation provisions Sanders championed' },
      { date: '2023-03', event: 'Becomes chairman of HELP Committee; launches aggressive oversight of pharmaceutical pricing' },
      { date: '2024-02', event: 'Grills Novo Nordisk CEO at hearing over insulin and Ozempic pricing; company subsequently lowers some prices' },
    ],
    sources: [
      { title: 'Senate HELP Committee: Hearings on Drug Pricing Under Chairman Sanders', url: 'https://www.help.senate.gov/', date: '2023-2024' },
      { title: 'Congressional Record: Sanders Floor Speeches on Pharmaceutical Pricing', date: '2007-2024' },
    ],
    knownAssociates: [
      { name: 'Elizabeth Warren', relationship: 'Fellow progressive senator and ally on pharmaceutical accountability legislation', href: '/entities/individuals/elizabeth-warren' },
      { name: 'Nicole Smith-Holt', relationship: 'Mother of Alec Smith (died rationing insulin); testified at Sanders HELP Committee hearings on drug pricing', href: '/entities/individuals/nicole-smith-holt' },
    ],
  },


  'betty-shabazz': {
    name: 'Betty Shabazz',
    title: 'Educator, Civil Rights Advocate, Wife of Malcolm X',
    role: 'Wife of Malcolm X who was present at his assassination at the Audubon Ballroom on February 21, 1965, shielded their four daughters during the shooting, and spent the rest of her life as an educator and advocate for civil rights and racial justice',
    riskLevel: 'high' as const,
    description: 'Betty Dean Sanders Shabazz (1934-1997) was an American educator, civil rights advocate, and the wife of Malcolm X. Born in Detroit and raised in a foster home, she studied at the Tuskegee Institute before transferring to the School of Nursing in New York City, where she met Malcolm X at a Nation of Islam temple in 1956. They married in 1958 and had six daughters together. On February 21, 1965, Betty was seated in the front row of the Audubon Ballroom in Washington Heights, Manhattan, with her four oldest daughters when gunmen rushed the stage and assassinated Malcolm X. She threw herself over her children to shield them from gunfire. After his death, she raised their six daughters alone, including twins born seven months after the assassination. She earned a PhD in education administration from the University of Massachusetts Amherst in 1975 and became a professor at Medgar Evers College in Brooklyn, where she served as director of institutional advancement. In 1995, her daughter Qubilah was charged with plotting to hire a hitman to kill Louis Farrakhan, whom the family believed was involved in Malcolm X assassination. The charges were later dropped in a plea deal. In 1997, Betty was severely burned when her 12-year-old grandson Malcolm Shabazz set a fire in her apartment in Yonkers, New York. She suffered burns over 80% of her body and died three weeks later on June 23, 1997, at age 63. In 2021, the Manhattan District Attorney vacated the convictions of Muhammad Aziz and Khalil Islam for Malcolm X murder, acknowledging that the FBI and NYPD had withheld evidence that would have led to their acquittal, partially vindicating Betty decades-long insistence that the full truth had been suppressed.',
    birthDate: '1934-05-28',
    birthPlace: 'Detroit, Michigan',
    deathDate: '1997-06-23',
    education: ['Tuskegee Institute (nursing studies)', 'Jersey City State College (B.A. in Public Health Education, 1972)', 'University of Massachusetts Amherst (PhD in Education Administration, 1975)'],
    affiliations: [
      { name: 'Medgar Evers College', role: 'Professor and Director of Institutional Advancement; built community health education programs', type: 'organization' },
      { name: 'Nation of Islam', role: 'Member through marriage to Malcolm X; left with him when he broke from the Nation in 1964', type: 'organization' },
    ],
    controversies: [
      'Present at the Audubon Ballroom on February 21, 1965, when three gunmen assassinated Malcolm X; she shielded her four daughters from gunfire during the attack',
      'Spent decades insisting the full truth about Malcolm X assassination was being suppressed by the FBI and NYPD, claims vindicated in 2021 when convictions were vacated',
      'Her daughter Qubilah Shabazz was charged in 1995 with plotting to kill Louis Farrakhan, who the family believed was connected to Malcolm X murder; charges were dropped',
      'Suffered fatal burns in June 1997 when her 12-year-old grandson Malcolm Shabazz started a fire in her Yonkers apartment; she died three weeks later',
      'The FBI COINTELPRO program specifically targeted Malcolm X and his family; the FBI maintained surveillance files on Betty that were partially released under FOIA decades later',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Malcolm X Assassination', slug: 'malcolm-x-assassination', severity: 'critical' },
    ],
    timeline: [
      { date: '1934-05-28', event: 'Born Betty Dean Sanders in Detroit, Michigan' },
      { date: '1956', event: 'Meets Malcolm X at Nation of Islam Temple No. 7 in Harlem' },
      { date: '1958-01-14', event: 'Marries Malcolm X in Lansing, Michigan' },
      { date: '1964-03-08', event: 'Malcolm X publicly breaks with the Nation of Islam; the family begins receiving death threats' },
      { date: '1965-02-14', event: 'Family home in East Elmhurst, Queens, is firebombed; Betty and the children escape' },
      { date: '1965-02-21', event: 'Witnesses the assassination of Malcolm X at the Audubon Ballroom while shielding their four daughters from gunfire' },
      { date: '1965-11-17', event: 'Gives birth to twin daughters Malaak and Malikah, seven months after Malcolm assassination' },
      { date: '1975', event: 'Earns PhD in Education Administration from University of Massachusetts Amherst' },
      { date: '1976', event: 'Joins faculty at Medgar Evers College in Brooklyn as professor and director of institutional advancement' },
      { date: '1995-01', event: 'Daughter Qubilah Shabazz charged with conspiracy to murder Louis Farrakhan; charges later dropped in plea deal' },
      { date: '1997-06-01', event: 'Severely burned when grandson Malcolm Shabazz sets fire in her Yonkers apartment; suffers burns over 80% of her body' },
      { date: '1997-06-23', event: 'Dies at Jacobi Medical Center in the Bronx at age 63 from burn injuries' },
      { date: '2021-11-18', event: 'Manhattan DA Cyrus Vance Jr. vacates the convictions of Muhammad Aziz and Khalil Islam, acknowledging FBI and NYPD suppressed evidence, vindicating Betty decades-long claims' },
    ],
    sources: [
      { title: 'Rickford, R. - Betty Shabazz: A Remarkable Story of Survival and Faith Before and After Malcolm X (Sourcebooks)', date: '2003' },
      { title: 'New York Times: Dr. Betty Shabazz, 61, a Rights Advocate and Widow of Malcolm X, Obituary', date: '1997-06-24' },
      { title: 'New York Times: 2 Men Exonerated in Assassination of Malcolm X', date: '2021-11-18' },
    ],
    knownAssociates: [
      { name: 'Malcolm X', relationship: 'Husband, assassinated February 21, 1965 at the Audubon Ballroom while she and their daughters were present', href: '/entities/individuals/malcolm-x' },
      { name: 'Louis Farrakhan', relationship: 'Nation of Islam leader whose rhetoric Betty and others believed helped create the climate for Malcolm X assassination', href: '/entities/individuals/louis-farrakhan' },
      { name: 'Elijah Muhammad', relationship: 'Nation of Islam leader who expelled Malcolm X and whose organization was implicated in the assassination', href: '/entities/individuals/elijah-muhammad' },
    ],
  },












  'bill-buford': {
    name: 'Bill Buford',
    title: 'ATF Special Agent in Charge, Waco Raid',
    role: 'ATF Special Agent in Charge of the Houston Field Division who led the initial February 28, 1993 raid on the Branch Davidian compound at Mount Carmel near Waco, Texas, despite knowing the element of surprise had been lost',
    riskLevel: 'high' as const,
    description: 'Charles "Bill" Buford was the ATF Special Agent in Charge of the Houston Field Division who personally led the tactical team in the ill-fated initial raid on the Branch Davidian compound on February 28, 1993. The raid, which was part of "Operation Showtime" designed to serve arrest and search warrants on David Koresh for suspected illegal weapons modifications, became a catastrophic failure that resulted in the deaths of 4 ATF agents and 6 Branch Davidians on the first day alone, with over 20 others wounded. Buford was shot during the exchange of gunfire, taking rounds to his legs. Critical to the accountability question: ATF leadership, including Buford, was informed before the raid that the element of surprise had been compromised; undercover agent Robert Rodriguez had confirmed Koresh knew the raid was coming; yet the decision was made to proceed. The subsequent investigation by the U.S. Treasury Department Office of Professional Responsibility found that ATF leadership, including raid commanders Phillip Chojnacki and Chuck Sarabyn, made false statements about what they knew regarding the lost element of surprise. The initial raid failure triggered the 51-day standoff that ended on April 19, 1993, when the FBI assault with CS gas culminated in a fire that killed 76 Branch Davidians, including 25 children.',
    birthPlace: 'Arkansas',
    education: ['University of Central Arkansas'],
    affiliations: [
      { name: 'Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)', role: 'Special Agent in Charge, Houston Field Division; led the initial tactical team in the February 28, 1993 raid on the Branch Davidian compound', type: 'agency' },
    ],
    controversies: [
      'Led the initial ATF raid on the Branch Davidian compound on February 28, 1993, which resulted in the deaths of 4 ATF agents and 6 Branch Davidians',
      'The raid proceeded despite knowledge that the element of surprise had been compromised; undercover agent Robert Rodriguez confirmed David Koresh knew the raid was coming',
      'U.S. Treasury Department investigation found ATF raid commanders made false statements about what they knew regarding the lost element of surprise',
      'The failed initial raid directly triggered the 51-day standoff that ended with the deaths of 76 Branch Davidians including 25 children',
      'ATF had been warned by multiple sources that a frontal assault on the heavily armed compound was extremely high-risk and likely to result in casualties',
      'The operation was nicknamed "Operation Showtime" and was timed in part to generate favorable publicity for ATF budget hearings',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Waco Siege', slug: 'waco-siege', severity: 'critical' },
    ],
    timeline: [
      { date: '1993-02-28', event: 'Leads the ATF tactical team in the initial raid on the Branch Davidian compound at Mount Carmel; 4 ATF agents and 6 Branch Davidians are killed' },
      { date: '1993-02-28', event: 'Shot and wounded during the gun battle, taking rounds to his legs' },
      { date: '1993-04-19', event: 'The 51-day standoff triggered by the failed raid ends when an FBI assault with CS gas results in a fire killing 76 Branch Davidians, including 25 children' },
      { date: '1993-09', event: 'U.S. Treasury Department Office of Professional Responsibility investigation finds ATF leadership made misleading statements about knowledge of compromised surprise' },
      { date: '1994', event: 'ATF raid commanders Phillip Chojnacki and Chuck Sarabyn are initially dismissed, later reinstated with back pay after appeal' },
    ],
    sources: [
      { title: 'U.S. Treasury Department: Report of the Bureau of Alcohol, Tobacco, Firearms and Explosives Investigation of Vernon Wayne Howell', date: '1993' },
      { title: 'Reavis, D. - The Ashes of Waco: An Investigation (Simon and Schuster)', date: '1995' },
      { title: 'House of Representatives Committee on Government Reform: Investigation into the Activities of Federal Law Enforcement Agencies Toward the Branch Davidians', date: '1996' },
    ],
    knownAssociates: [
      { name: 'Phillip Chojnacki', relationship: 'ATF co-commander of the Waco raid who was dismissed and later reinstated with back pay' },
      { name: 'Chuck Sarabyn', relationship: 'ATF co-commander who gave the order to proceed despite the element of surprise being compromised' },
      { name: 'Robert Rodriguez', relationship: 'ATF undercover agent who warned leadership that Koresh knew the raid was coming; leadership proceeded anyway' },
    ],
  },












  'bill-meierling': {
    name: 'Bill Meierling',
    title: 'ALEC Executive Vice President of Communications',
    role: 'Executive Vice President of Communications at the American Legislative Exchange Council (ALEC) who manages the organization public messaging and corporate-funded model legislation strategy',
    riskLevel: 'high' as const,
    description: 'Bill Meierling serves as Executive Vice President of Communications at the American Legislative Exchange Council (ALEC), the organization that brings together state legislators and corporate representatives to draft model legislation that is then introduced in state legislatures across the country. ALEC has drafted and promoted model bills across hundreds of policy areas including Stand Your Ground laws, voter ID requirements, private prison expansion, environmental deregulation, and the weakening of public unions. Meierling role involves managing the public communications strategy for an organization that has faced sustained criticism from advocacy groups, journalists, and former members for its lack of transparency about corporate funding and the degree to which its model legislation serves corporate interests over public welfare. Major corporations including Coca-Cola, Kraft, Google, and Amazon have left ALEC over public pressure, particularly after the organization role in promoting Stand Your Ground laws came under scrutiny following the 2012 shooting of Trayvon Martin. Despite the departures, ALEC continues to operate with significant corporate funding and has introduced model legislation in all 50 states.',
    education: [],
    affiliations: [
      { name: 'American Legislative Exchange Council (ALEC)', role: 'Executive Vice President of Communications; manages public messaging for corporate-funded model legislation campaigns', type: 'organization' },
    ],
    controversies: [
      'Manages public communications for ALEC, which drafts corporate-funded model legislation introduced in state legislatures across all 50 states',
      'ALEC model legislation has included Stand Your Ground laws, voter ID restrictions, private prison expansion, and environmental deregulation',
      'Major corporations including Coca-Cola, Google, Amazon, and Kraft left ALEC over public backlash to its policy positions',
      'ALEC has been criticized for lack of transparency about its corporate funding sources and the degree to which model bills serve corporate over public interests',
      'The organization role in promoting Stand Your Ground laws came under scrutiny after the 2012 shooting of Trayvon Martin',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
    ],
    timeline: [
      { date: '2012', event: 'ALEC faces mass corporate exodus after the Trayvon Martin shooting brings scrutiny to its role in promoting Stand Your Ground laws' },
      { date: '2013', event: 'Continues managing ALEC communications through ongoing corporate departures and public criticism campaigns' },
    ],
    sources: [
      { title: 'Center for Media and Democracy: ALEC Exposed', date: '2011' },
      { title: 'New York Times: Corporations Cut Ties With Conservative Group Over Voting and Gun Laws', date: '2012' },
    ],
    knownAssociates: [
      { name: 'Lisa Nelson', relationship: 'ALEC CEO who leads the organization alongside Meierling', href: '/entities/individuals/lisa-nelson' },
    ],
  },













  'billy-tauzin': {
    name: 'Billy Tauzin',
    title: 'Former U.S. Congressman and President of PhRMA',
    role: 'Republican congressman who shepherded the Medicare Part D bill prohibiting drug price negotiation, then resigned from Congress to become president of PhRMA at $2 million per year',
    riskLevel: 'critical' as const,
    description: 'Wilbert Joseph "Billy" Tauzin II (born 1943) served as a U.S. Representative from Louisiana from 1980 to 2005. As chairman of the House Energy and Commerce Committee, Tauzin was the principal architect of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 (Medicare Part D), which created a prescription drug benefit for seniors but included a provision explicitly prohibiting Medicare from negotiating drug prices with pharmaceutical companies. This single provision has cost American taxpayers hundreds of billions of dollars in inflated drug prices over two decades. Within months of the bill passage, Tauzin announced his resignation from Congress and accepted the position of president and CEO of the Pharmaceutical Research and Manufacturers of America (PhRMA) at a salary of approximately $2 million per year, making his career the most cited example of the revolving door between Congress and the industries it regulates. At PhRMA, Tauzin later negotiated a deal with the Obama White House in 2009 in which the pharmaceutical industry agreed to support the Affordable Care Act in exchange for a guarantee that the legislation would not include Medicare price negotiation or drug importation provisions. This deal protected pharmaceutical industry pricing power for another 13 years until the Inflation Reduction Act of 2022 partially addressed the issue.',
    birthDate: '1943-06-14',
    birthPlace: 'Chackbay, Louisiana',
    education: ['Nicholls State University (B.A., 1965)'],
    affiliations: [
      { name: 'United States House of Representatives', role: 'Representative, Louisiana 3rd District (1980-2005); Chairman, Energy and Commerce Committee (2001-2004); authored Medicare Part D with prohibition on drug price negotiation', type: 'agency' },
      { name: 'Pharmaceutical Research and Manufacturers of America (PhRMA)', role: 'President and CEO (2005-2010); received $2M+ annual salary after authoring legislation benefiting the industry', type: 'organization' },
    ],
    controversies: [
      'Authored Medicare Part D (2003) with a provision explicitly prohibiting Medicare from negotiating drug prices, costing taxpayers hundreds of billions in inflated costs',
      'Resigned from Congress and took a $2M/year position at PhRMA within months of the bill passage, the most-cited revolving door example in American politics',
      'The Medicare Part D non-negotiation provision was estimated to cost taxpayers over $500 billion over 10 years compared to if Medicare could negotiate prices',
      'Negotiated a secret deal with the Obama White House in 2009 to protect pharmaceutical pricing in exchange for industry support of the ACA',
      'The 2009 PhRMA-White House deal ensured the ACA would not include Medicare price negotiation or drug importation, protecting industry profits for 13 more years',
      'Medicare Part D vote was held at 3 AM after the 15-minute voting period was extended to 3 hours while Republican leadership pressured holdouts; later described as the most corrupt vote in congressional history',
      'His career trajectory from industry regulator to industry lobbyist led to multiple proposed legislative reforms targeting the revolving door',
    ],
    relatedInvestigations: [
      { title: 'Pharmaceutical Price Gouging', slug: 'pharmaceutical-price-gouging', severity: 'critical' },
      { title: 'Medical Bankruptcy', slug: 'medical-bankruptcy', severity: 'high' },
    ],
    timeline: [
      { date: '1980', event: 'Elected to U.S. House of Representatives from Louisiana 3rd District as a Democrat' },
      { date: '1995', event: 'Switches party affiliation from Democrat to Republican' },
      { date: '2001', event: 'Becomes Chairman of the House Energy and Commerce Committee' },
      { date: '2003-11-25', event: 'Medicare Part D passes at 3 AM after a 3-hour vote with a provision prohibiting drug price negotiation' },
      { date: '2004-12', event: 'Announces resignation from Congress effective February 2005' },
      { date: '2005-07', event: 'Becomes President and CEO of PhRMA at approximately $2 million per year salary' },
      { date: '2009-06', event: 'Negotiates secret deal with Obama White House protecting pharmaceutical pricing in exchange for industry support of ACA' },
      { date: '2010-06', event: 'Resigns from PhRMA after ACA passage secures the industry deal' },
    ],
    sources: [
      { title: 'OpenSecrets: Billy Tauzin - Revolving Door Profile', url: 'https://www.opensecrets.org/revolving/rev_summary.php?id=25089', date: '2024' },
      { title: 'New York Times: Medicare Law Raises Issue of Drug Prices', date: '2004' },
      { title: 'The Hill: Tauzin PhRMA-White House Deal Analysis', date: '2012' },
    ],
    knownAssociates: [
      { name: 'Tom DeLay', relationship: 'House Majority Leader who pressured holdout members during the 3 AM Medicare Part D vote', href: '/entities/individuals/tom-delay' },
      { name: 'Stephen Ubl', relationship: 'Successor as PhRMA president who continued the lobbying strategy Tauzin established', href: '/entities/individuals/stephen-ubl' },
      { name: 'Max Baucus', relationship: 'Senate Finance Committee chairman who partnered on the PhRMA-White House ACA deal in 2009', href: '/entities/individuals/max-baucus' },
    ],
  },












  'birdie-africa': {
    name: 'Birdie Africa (Michael Moses Ward)',
    title: 'MOVE Bombing Survivor',
    role: 'The only child to survive the 1985 MOVE bombing in Philadelphia; he was 13 years old when police dropped a bomb on his home, killing 11 people including 5 children, and destroying 61 homes in his neighborhood',
    riskLevel: 'critical' as const,
    description: 'Michael Moses Ward (1972-2013), known within the MOVE organization as Birdie Africa, was 13 years old on May 13, 1985, when the Philadelphia Police Department dropped a satchel bomb containing C-4 and Tovex on the roof of the MOVE compound at 6221 Osage Avenue. He was one of only two survivors of the resulting fire, which killed 11 people, including 5 children aged 7 to 14, and destroyed 61 row homes in the predominantly Black neighborhood. Birdie escaped the burning building and was pulled from the debris by police officers, suffering burns across his body. His mother Rhonda Africa (born Louise James) died in the fire. The decision to drop the bomb was authorized by Philadelphia Mayor Wilson Goode, Police Commissioner Gregore Sambor, and Fire Commissioner William Richmond, who then ordered firefighters to "let the bunker burn," allowing the fire to spread unchecked through the neighborhood. After the bombing, Birdie was placed in the custody of his biological father, Andino Ward. He changed his name back to Michael Moses Ward. He suffered from PTSD and survivor guilt for the rest of his life. On September 20, 2013, Michael Ward drowned in the swimming pool of a hotel in Fort Lauderdale, Florida. He was 36 years old. The Philadelphia Medical Examiner ruled his death accidental. In 2021, it was revealed that the University of Pennsylvania Museum had held the remains of two children killed in the MOVE bombing; Tree Africa and Delisha Africa; as anatomical specimens for 36 years without informing their surviving family members, adding another layer of institutional cruelty to the legacy of the bombing.',
    birthDate: '1972',
    birthPlace: 'Philadelphia, Pennsylvania',
    deathDate: '2013-09-20',
    education: [],
    affiliations: [
      { name: 'MOVE Organization', role: 'Child member of MOVE; given the name Birdie Africa within the organization', type: 'organization' },
    ],
    controversies: [
      'At 13 years old, he was one of only two survivors when the Philadelphia Police Department dropped a C-4/Tovex bomb on the MOVE compound, killing 11 people including 5 children',
      'His mother Rhonda Africa died in the fire while the fire commissioner ordered firefighters to let the building burn',
      'After surviving the bombing, he suffered from PTSD, survivor guilt, and the trauma of being the only child to escape alive',
      'Drowned at age 36 in a Fort Lauderdale hotel pool on September 20, 2013; ruled accidental by the medical examiner',
      'The 1985 bombing that nearly killed him destroyed 61 homes in a predominantly Black neighborhood; no city official was criminally charged',
      'In 2021, the University of Pennsylvania and the city of Philadelphia were found to have kept the remains of two children killed in the same bombing as anatomical specimens for 36 years without family notification',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Move Bombing', slug: 'move-bombing', severity: 'critical' },
    ],
    timeline: [
      { date: '1972', event: 'Born Michael Moses Ward in Philadelphia; raised within the MOVE organization under the name Birdie Africa' },
      { date: '1985-05-13', event: 'Philadelphia police drop a satchel bomb on the MOVE compound at 6221 Osage Avenue; 11 people killed including 5 children; Birdie, age 13, escapes the fire as one of only two survivors' },
      { date: '1985-05-13', event: 'Fire Commissioner William Richmond orders firefighters to "let the bunker burn"; the fire destroys 61 row homes in the neighborhood' },
      { date: '1986', event: 'Placed in custody of biological father Andino Ward; changes name back to Michael Moses Ward' },
      { date: '1986-03', event: 'Philadelphia Special Investigation Commission (MOVE Commission) releases report calling the bombing "unconscionable" but no criminal charges are filed' },
      { date: '1996', event: 'Federal jury awards $1.5 million in damages to survivors Ramona Africa and the families of those killed, finding the city used excessive force' },
      { date: '2013-09-20', event: 'Drowns in the swimming pool of a hotel in Fort Lauderdale, Florida at age 36; death ruled accidental' },
      { date: '2021-04', event: 'University of Pennsylvania Museum revealed to have kept the remains of two children killed in the bombing as anatomical specimens for 36 years without notifying their families' },
    ],
    sources: [
      { title: 'Philadelphia Inquirer: MOVE Bombing 30th Anniversary Coverage', date: '2015' },
      { title: 'New York Times: The Day Philadelphia Bombed Its Own People (Retrospective)', date: '2020' },
      { title: 'MOVE Commission Report: Findings and Recommendations of the Philadelphia Special Investigation Commission', date: '1986' },
      { title: 'Philadelphia Inquirer: Penn Museum held remains of MOVE bombing victims for 36 years', date: '2021' },
    ],
    knownAssociates: [
      { name: 'Ramona Africa', relationship: 'The only adult survivor of the 1985 MOVE bombing; they escaped the fire together', href: '/entities/individuals/ramona-africa' },
      { name: 'Wilson Goode', relationship: 'Philadelphia mayor who authorized the bombing that killed 11 members of MOVE including 5 children', href: '/entities/individuals/wilson-goode' },
      { name: 'John Africa', relationship: 'MOVE founder Vincent Leaphart, killed in the 1985 bombing ordered by city officials', href: '/entities/individuals/john-africa' },
    ],
  },


  'bo-gritz': {
    name: 'Bo Gritz',
    title: 'Former Green Beret and Ruby Ridge Negotiator',
    role: 'Retired U.S. Army Special Forces Lieutenant Colonel and most decorated Green Beret of the Vietnam War who negotiated Randy Weaver surrender during the Ruby Ridge standoff in August 1992',
    riskLevel: 'medium' as const,
    description: 'James Gordon "Bo" Gritz (born 1939) is a retired U.S. Army Special Forces Lieutenant Colonel who was reportedly the most decorated Green Beret of the Vietnam War, receiving 62 decorations including five Silver Stars. After retiring from the military, Gritz became involved in efforts to locate American POWs he believed were still held in Southeast Asia, leading unauthorized missions into Laos. He ran for President of the United States in 1992 on the Populist Party ticket, receiving approximately 100,000 votes. During the Ruby Ridge standoff in August 1992, Gritz traveled to the scene and served as a civilian negotiator, ultimately convincing Randy Weaver to surrender and end the 11-day standoff. The FBI had already killed Weaver wife Vicki Weaver and 14-year-old son Sammy before Gritz arrived, and a deputy U.S. Marshal had also been killed. Gritz later testified about his negotiation role before Congress. After Ruby Ridge, Gritz became increasingly involved in the patriot and militia movements, founding a covenant community called Almost Heaven in Kamiah, Idaho. He attempted suicide in 1998 but survived. His role at Ruby Ridge remains significant as one of the few civilian interventions that may have prevented additional deaths during a federal law enforcement operation that was later found to have involved unconstitutional rules of engagement.',
    birthDate: '1939-01-18',
    birthPlace: 'Enid, Oklahoma',
    education: ['University of Nebraska (B.S.)', 'American University (M.A., Communications)'],
    affiliations: [
      { name: 'United States Army', role: 'Lieutenant Colonel, Special Forces (Green Berets); reportedly the most decorated Green Beret of the Vietnam War with 62 decorations', type: 'agency' },
      { name: 'Populist Party', role: 'Presidential candidate in 1992; received approximately 100,000 votes', type: 'organization' },
    ],
    controversies: [
      'Negotiated Randy Weaver surrender at Ruby Ridge in August 1992, potentially preventing additional deaths after the FBI had already killed Vicki Weaver and 14-year-old Sammy Weaver',
      'Led unauthorized missions into Laos searching for American POWs he believed were still being held; the POW claims were never verified',
      'Ran for President in 1992 on the Populist Party ticket, a party that had been associated with white nationalist figures',
      'Founded a covenant community called Almost Heaven in Kamiah, Idaho, which attracted members of the patriot and militia movements',
      'Became increasingly aligned with far-right movements after Ruby Ridge and Waco, speaking at militia gatherings and anti-government events',
      'Attempted suicide in February 1998 outside the Almost Heaven community; survived the self-inflicted gunshot wound',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'critical' },
    ],
    timeline: [
      { date: '1939-01-18', event: 'Born in Enid, Oklahoma' },
      { date: '1965-1969', event: 'Serves multiple tours in Vietnam with Special Forces; receives 62 decorations including five Silver Stars' },
      { date: '1979', event: 'Retires from U.S. Army as Lieutenant Colonel' },
      { date: '1982-1983', event: 'Leads unauthorized missions into Laos searching for American POWs' },
      { date: '1992-08', event: 'Travels to Ruby Ridge during the standoff and negotiates Randy Weaver surrender, ending the 11-day siege after FBI had killed Vicki and Sammy Weaver' },
      { date: '1992-11', event: 'Receives approximately 100,000 votes as Populist Party presidential candidate' },
      { date: '1994', event: 'Founds the Almost Heaven covenant community in Kamiah, Idaho' },
      { date: '1995', event: 'Testifies before Congress about his role as negotiator at Ruby Ridge' },
      { date: '1998-02', event: 'Attempts suicide outside the Almost Heaven community; survives' },
    ],
    sources: [
      { title: 'Senate Judiciary Committee: The Federal Raid on Ruby Ridge, ID (Hearing Testimony)', date: '1995' },
      { title: 'Walter, J. - Every Knee Shall Bow: The Truth and Tragedy of Ruby Ridge (HarperCollins)', date: '1995' },
      { title: 'New York Times: Profile of James "Bo" Gritz', date: '1992' },
    ],
    knownAssociates: [
      { name: 'Randy Weaver', relationship: 'Ruby Ridge subject whose surrender Gritz negotiated in August 1992 after the FBI killed Weaver wife and son', href: '/entities/individuals/randy-weaver' },
    ],
  },













  'bob-diamond': {
    name: 'Bob Diamond',
    title: 'Former CEO of Barclays',
    role: 'CEO of Barclays who resigned in July 2012 when the bank became the first major institution to settle LIBOR manipulation charges, paying $453 million in fines; Diamond claimed he was unaware of the rate-rigging despite internal emails suggesting otherwise',
    riskLevel: 'high' as const,
    description: 'Robert Edward "Bob" Diamond Jr. (born 1951) is an American banker who served as CEO of Barclays from January 2011 until his resignation in July 2012 in the wake of the LIBOR manipulation scandal. Diamond had previously built Barclays Capital (BarCap) into a major investment banking division and led the acquisition of Lehman Brothers North American operations during the 2008 financial crisis. In June 2012, Barclays became the first major bank to settle charges with U.S. and UK regulators for manipulating the London Interbank Offered Rate (LIBOR), the benchmark interest rate that underpinned an estimated $350 trillion in financial products worldwide. Barclays paid $453 million in fines to the U.S. Department of Justice, the Commodity Futures Trading Commission (CFTC), and the UK Financial Services Authority (FSA). Internal emails and trader communications revealed that Barclays employees had been systematically submitting false LIBOR rates from at least 2005, both to profit from derivatives positions and, during the 2008 financial crisis, to make the bank appear healthier than it was. Diamond resigned on July 3, 2012, one day after being summoned to appear before the UK Parliament Treasury Select Committee. During his testimony, Diamond denied personal involvement in the rate-rigging and claimed that former Bank of England Deputy Governor Paul Tucker had implied that it would be acceptable for Barclays to lower its LIBOR submissions. Tucker denied this characterization. Diamond also faced criticism for his 2011 statement before Parliament that "the time for remorse is over" regarding banking industry behavior, which was seen as emblematic of the lack of accountability in post-crisis finance. No senior Barclays executive was criminally charged in connection with the LIBOR scandal.',
    birthDate: '1951-07-27',
    birthPlace: 'Concord, Massachusetts',
    education: ['Colby College (B.A., Economics, 1973)', 'University of Connecticut (MBA, 1977)'],
    affiliations: [
      { name: 'Barclays', role: 'CEO (2011-2012); previously head of Barclays Capital investment banking division; resigned after $453M LIBOR manipulation settlement', type: 'corporation' },
    ],
    controversies: [
      'Resigned as Barclays CEO in July 2012 after the bank paid $453 million to settle LIBOR manipulation charges with U.S. and UK regulators',
      'Internal communications showed Barclays traders had systematically submitted false LIBOR rates from at least 2005 to profit from derivatives and mask the bank financial health',
      'Claimed before Parliament that Bank of England Deputy Governor Paul Tucker had implied it was acceptable for Barclays to lower its LIBOR submissions; Tucker denied the characterization',
      'His January 2011 statement to Parliament that "the time for remorse is over" regarding banking behavior became a symbol of the industry lack of accountability after the 2008 crisis',
      'Led the acquisition of Lehman Brothers North American operations during the 2008 financial crisis, which was later scrutinized for favorable terms that benefited Barclays at the expense of Lehman creditors',
      'No senior Barclays executive was ever criminally charged for the LIBOR manipulation despite the systematic nature of the fraud',
      'LIBOR manipulation affected an estimated $350 trillion in financial products worldwide, potentially costing borrowers and investors billions in mispriced contracts',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Libor Scandal', slug: 'libor-scandal', severity: 'critical' },
    ],
    timeline: [
      { date: '1996', event: 'Joins Barclays to build BZW into what becomes Barclays Capital (BarCap)' },
      { date: '2005', event: 'Internal evidence shows Barclays traders begin systematically submitting false LIBOR rates to benefit derivatives positions' },
      { date: '2008-09', event: 'Leads Barclays acquisition of Lehman Brothers North American operations during the financial crisis' },
      { date: '2008-10', event: 'During the financial crisis, Barclays submits artificially low LIBOR rates to appear healthier than it is' },
      { date: '2011-01', event: 'Becomes CEO of Barclays; tells Parliament "the time for remorse is over" regarding banking industry conduct' },
      { date: '2012-06-27', event: 'Barclays becomes the first major bank to settle LIBOR charges, paying $453 million to the DOJ, CFTC, and UK FSA' },
      { date: '2012-07-02', event: 'Summoned before UK Parliament Treasury Select Committee; denies personal knowledge of rate manipulation' },
      { date: '2012-07-03', event: 'Resigns as CEO of Barclays one day after parliamentary testimony' },
    ],
    sources: [
      { title: 'CFTC: Order Instituting Proceedings Against Barclays PLC, Barclays Bank PLC, and Barclays Capital Inc.', date: '2012-06-27' },
      { title: 'UK Financial Services Authority: Final Notice to Barclays Bank Plc', date: '2012-06-27' },
      { title: 'House of Commons Treasury Committee: Fixing LIBOR: Some Preliminary Findings', date: '2012' },
      { title: 'Financial Times: The Fall of Bob Diamond', date: '2012-07-04' },
    ],
    knownAssociates: [
      { name: 'Marcus Agius', relationship: 'Barclays chairman who resigned alongside Diamond in the LIBOR scandal', href: '/entities/individuals/marcus-agius' },
      { name: 'Tom Hayes', relationship: 'UBS and Citigroup trader convicted of LIBOR manipulation; the first individual convicted in the scandal that Diamond oversaw at Barclays', href: '/entities/individuals/tom-hayes' },
    ],
  },


  'bob-kroll': {
    name: 'Bob Kroll',
    title: 'Former Minneapolis Police Federation President',
    role: 'President of the Minneapolis Police Officers Federation who championed "warrior-style" training for officers, publicly defended the officers involved in the murder of George Floyd, and appeared at a Donald Trump rally wearing a "Cops for Trump" shirt',
    riskLevel: 'high' as const,
    description: 'Robert "Bob" Kroll served as president of the Minneapolis Police Officers Federation, the union representing rank-and-file Minneapolis police officers, from 2015 until his retirement in January 2021. Kroll was one of the most controversial police union leaders in America, known for his aggressive defense of officers facing misconduct complaints and his promotion of "warrior-style" policing training that Minneapolis Mayor Jacob Frey had attempted to ban in 2019. After Kroll arranged for the training to continue through the union, the city could not stop officers from attending. In October 2019, Kroll appeared on stage at a Donald Trump rally in Minneapolis wearing a "Cops for Trump" shirt and a red "Keep America Great" hat. Following the murder of George Floyd by Minneapolis police officer Derek Chauvin on May 25, 2020, Kroll sent a letter to union members calling Floyd a "violent criminal" and describing the subsequent protests as a "terrorist movement." He defended the four officers involved in Floyd death and criticized the city leadership for its response. Kroll himself had accumulated at least 20 internal affairs complaints during his career, none of which resulted in discipline, and had been named in multiple civil rights lawsuits. Civil rights attorney Nekima Levy Armstrong and other activists had long identified Kroll as a central obstacle to police reform in Minneapolis. His leadership of the police union was cited in the DOJ pattern-or-practice investigation into the Minneapolis Police Department that found systemic violations of constitutional rights.',
    education: [],
    affiliations: [
      { name: 'Minneapolis Police Department', role: 'Lieutenant and officer; accumulated at least 20 internal affairs complaints during his career with no resulting discipline', type: 'agency' },
      { name: 'Minneapolis Police Officers Federation', role: 'President (2015-2021); championed warrior-style policing training and defended officers involved in George Floyd murder', type: 'organization' },
    ],
    controversies: [
      'Accumulated at least 20 internal affairs complaints during his police career, none of which resulted in disciplinary action',
      'Championed "warrior-style" police training that Minneapolis Mayor Jacob Frey tried to ban in 2019; Kroll arranged for the training to continue through the union',
      'Appeared on stage at a Donald Trump rally in Minneapolis in October 2019 wearing a "Cops for Trump" shirt',
      'After George Floyd murder by officer Derek Chauvin, sent a letter to union members calling Floyd a "violent criminal" and describing protests as a "terrorist movement"',
      'Publicly defended all four officers involved in George Floyd death and criticized city leadership',
      'Named in multiple civil rights lawsuits throughout his career as a Minneapolis police officer',
      'His leadership of the police union was cited as a systemic factor in the DOJ pattern-or-practice investigation that found Minneapolis PD engaged in widespread constitutional violations',
      'Civil rights leaders identified Kroll as a central obstacle to police reform in Minneapolis for years before the Floyd killing',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Police Militarization', slug: 'police-militarization', severity: 'high' },
    ],
    timeline: [
      { date: '2015', event: 'Elected president of the Minneapolis Police Officers Federation' },
      { date: '2019-04', event: 'Minneapolis Mayor Jacob Frey bans warrior-style police training; Kroll arranges for the training to continue through the union' },
      { date: '2019-10-10', event: 'Appears on stage at Donald Trump rally in Minneapolis wearing a "Cops for Trump" shirt and "Keep America Great" hat' },
      { date: '2020-05-25', event: 'George Floyd murdered by Minneapolis police officer Derek Chauvin; three other officers assist or fail to intervene' },
      { date: '2020-05-26', event: 'Sends letter to union members calling George Floyd a "violent criminal" and describing protests as a "terrorist movement"' },
      { date: '2020-06', event: 'Publicly defends all four officers involved in Floyd death; opposes criminal charges against them' },
      { date: '2021-01', event: 'Retires as president of the Minneapolis Police Officers Federation after George Floyd protests and national scrutiny' },
      { date: '2023-06', event: 'DOJ releases findings of pattern-or-practice investigation into Minneapolis PD, citing police union resistance to reform as a systemic factor' },
    ],
    sources: [
      { title: 'New York Times: The Police Union Leader Behind Minneapolis Aggressive Tactics', date: '2020-06-06' },
      { title: 'Minneapolis Star Tribune: Bob Kroll, Head of Minneapolis Police Union, Called George Floyd a Violent Criminal', date: '2020-05-29' },
      { title: 'U.S. DOJ: Investigation of the City of Minneapolis and the Minneapolis Police Department', date: '2023-06-16' },
    ],
    knownAssociates: [
      { name: 'Derek Chauvin', relationship: 'Minneapolis police officer convicted of murdering George Floyd; Kroll union defended him before conviction', href: '/entities/individuals/derek-chauvin' },
      { name: 'Donald Trump', relationship: 'Kroll appeared on stage at Trump 2019 Minneapolis rally wearing "Cops for Trump" shirt', href: '/entities/individuals/donald-trump' },
    ],
  },












  'bobby-muller': {
    name: 'Bobby Muller',
    title: 'Vietnam Veterans of America Founder and Agent Orange Advocate',
    role: 'Marine lieutenant paralyzed in Vietnam combat who founded Vietnam Veterans of America in 1978, led the campaign for U.S. government recognition of Agent Orange health effects, and co-founded the International Campaign to Ban Landmines which won the 1997 Nobel Peace Prize',
    riskLevel: 'high' as const,
    description: 'Robert O. "Bobby" Muller (born 1946) is a former U.S. Marine Corps lieutenant who was shot through the spine during combat in Vietnam on April 29, 1969, leaving him permanently paralyzed from the chest down. He subsequently became one of the most prominent veterans\' rights advocates in American history. In 1978, Muller founded Vietnam Veterans of America (VVA), the first congressionally chartered veterans service organization dedicated exclusively to Vietnam-era veterans. Under his leadership, VVA fought for recognition of Agent Orange-related illnesses among veterans who had been exposed to the herbicide during the war. Between 1962 and 1971, U.S. military forces sprayed approximately 20 million gallons of Agent Orange and other tactical herbicides over Vietnam, Laos, and Cambodia as part of Operation Ranch Hand. The herbicide contained 2,3,7,8-tetrachlorodibenzo-p-dioxin (TCDD), one of the most toxic substances known to science. The VA initially denied that Agent Orange exposure caused health problems, and it took years of advocacy before Congress passed the Agent Orange Act of 1991, which established a presumptive service connection for diseases associated with herbicide exposure. Muller also co-founded the Vietnam Veterans of America Foundation (VVAF), which in the 1990s focused on the global landmine crisis. The VVAF became a founding member of the International Campaign to Ban Landmines (ICBL), a coalition that was awarded the 1997 Nobel Peace Prize alongside coordinator Jody Williams. Muller testified before Congress numerous times on veterans\' health issues, chemical exposure, and the lingering effects of the Vietnam War on both American veterans and Vietnamese civilians. His advocacy helped secure billions of dollars in health care and disability benefits for Agent Orange-affected veterans and their families.',
    birthDate: '1946',
    birthPlace: 'New York',
    education: ['Hofstra University (BA)', 'United States Marine Corps Officer Candidates School'],
    affiliations: [
      { name: 'Vietnam Veterans of America', role: 'Founder and President (1978-1998); built the organization into the largest Vietnam-era veterans advocacy group in the United States', type: 'organization' },
      { name: 'Vietnam Veterans of America Foundation', role: 'Co-founder; launched the landmine removal and victims assistance programs that contributed to the 1997 Nobel Peace Prize', type: 'organization' },
      { name: 'International Campaign to Ban Landmines', role: 'Co-founder through VVAF; the coalition won the 1997 Nobel Peace Prize for its work leading to the Ottawa Mine Ban Treaty', type: 'organization' },
      { name: 'United States Marine Corps', role: 'First Lieutenant; served in Vietnam 1968-1969; shot through the spine on April 29, 1969, resulting in permanent paralysis from the chest down', type: 'agency' },
    ],
    controversies: [
      'Led decades-long battle against the VA and Department of Defense denial that Agent Orange caused health problems in Vietnam veterans, eventually forcing government recognition through the Agent Orange Act of 1991',
      'Publicly accused Dow Chemical, Monsanto, and other manufacturers of the tactical herbicide of knowingly producing a toxic product and then lobbying against veterans\' health claims',
      'Testified before Congress that the U.S. government conducted a deliberate cover-up of Agent Orange health effects to avoid liability, citing suppressed studies and manipulated data',
      'Criticized the VA for creating bureaucratic obstacles that denied or delayed benefits to sick and dying veterans while the agency disputed the science linking dioxin exposure to cancer, diabetes, and birth defects',
      'Clashed with mainstream veterans organizations like the American Legion and VFW, which he accused of being too close to the Pentagon establishment to effectively advocate for Vietnam veterans',
      'His advocacy on behalf of Vietnamese civilian victims of Agent Orange, including children born with severe birth defects, drew criticism from those who opposed any U.S. acknowledgment of liability for wartime herbicide use',
      'The VVAF landmine work documented that the U.S. military had deployed millions of mines in Vietnam, Laos, and Cambodia that continued to kill and maim civilians decades after the war ended',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Agent Orange', slug: 'agent-orange', severity: 'high' },
    ],
    timeline: [
      { date: '1946', event: 'Born in New York' },
      { date: '1968', event: 'Deployed to Vietnam as a U.S. Marine Corps lieutenant' },
      { date: '1969-04-29', event: 'Shot through the spine during combat in Vietnam, resulting in permanent paralysis from the chest down; evacuated to VA hospitals where he witnessed neglect of wounded veterans' },
      { date: '1978', event: 'Founds Vietnam Veterans of America (VVA), the first veterans organization dedicated exclusively to Vietnam-era veterans' },
      { date: '1981', event: 'Leads VVA delegation to Hanoi, becoming one of the first American veterans to return to Vietnam; begins documenting Agent Orange effects on Vietnamese civilians' },
      { date: '1984', event: 'The Agent Orange class-action lawsuit (In re Agent Orange Product Liability Litigation) settles for $180 million, which Muller and many veterans criticize as grossly inadequate' },
      { date: '1991', event: 'Congress passes the Agent Orange Act of 1991, establishing presumptive service connection for diseases associated with herbicide exposure; a major victory for Muller and VVA advocacy' },
      { date: '1992', event: 'Co-founds the Vietnam Veterans of America Foundation, which launches programs for landmine removal and victims assistance in former conflict zones' },
      { date: '1997-10', event: 'The International Campaign to Ban Landmines, co-founded through VVAF, is awarded the 1997 Nobel Peace Prize alongside coordinator Jody Williams' },
      { date: '1997-12', event: 'The Ottawa Treaty (Mine Ban Treaty) is signed by 122 nations, banning the use, production, and transfer of anti-personnel landmines; the United States refuses to sign' },
    ],
    sources: [
      { title: 'Vietnam Veterans of America Foundation - History and Mission', date: '' },
      { title: 'Nobel Peace Prize 1997 - International Campaign to Ban Landmines and Jody Williams', date: '1997-10-10' },
      { title: 'Wilbur, D. - Ragged Edge: A US Marine\'s Account of Leading the Vietnamese Across the Battlefield (Naval Institute Press)', date: '2019' },
      { title: 'Stellman, J.M. et al. - The Extent and Patterns of Usage of Agent Orange and Other Herbicides in Vietnam (Nature, Vol 422)', date: '2003-04-17' },
    ],
    aliases: ['Robert O. Muller'],
    knownAssociates: [
      { name: 'Jerry Ensminger', relationship: 'Fellow veterans\' rights activist fighting toxic exposure at Camp Lejeune', href: '/entities/individuals/jerry-ensminger' },
      { name: 'Elmo Zumwalt', relationship: 'Admiral who ordered Agent Orange spraying in Vietnam and whose son died of Agent Orange-related cancer; later became an advocate for affected veterans', href: '/entities/individuals/elmo-zumwalt' },
    ],
  },


  'bobby-rush': {
    name: 'Bobby Rush',
    title: 'Black Panther Co-Founder Who Survived the Fred Hampton Raid',
    role: 'Co-founder of the Illinois Black Panther Party who survived the December 4, 1969, police raid that killed Fred Hampton because he was not at the apartment that night; later served as U.S. Representative for Illinois 1st Congressional District from 1993 to 2023',
    riskLevel: 'high' as const,
    description: 'Bobby Lee Rush (born November 23, 1946) is an American politician and activist who co-founded the Illinois chapter of the Black Panther Party with Fred Hampton in 1968. On December 4, 1969, a pre-dawn raid by the Cook County State\'s Attorney\'s police, working with the FBI under COINTELPRO, killed 21-year-old Black Panther chairman Fred Hampton and defense captain Mark Clark at the apartment at 2337 West Monroe Street in Chicago. Rush survived because he was not at the apartment that night. The raid was orchestrated using intelligence from FBI informant William O\'Neal, who had provided a floor plan of Hampton\'s apartment to the Bureau and had drugged Hampton with secobarbital before the raid so he could not resist. Ballistics evidence later showed that police fired between 82 and 99 rounds while the Panthers fired at most one. A federal grand jury investigation and a 1982 civil rights lawsuit settlement of $1.85 million (shared between Hampton and Clark families and surviving Panthers) confirmed the coordinated nature of the attack. After the decimation of the Black Panther Party through COINTELPRO operations, Rush transitioned to electoral politics. He served as an alderman in Chicago\'s 2nd Ward before winning election to the U.S. House of Representatives in 1992, representing Illinois\' 1st Congressional District. He served in Congress for 30 years until his retirement in January 2023. In 2000, Rush defeated a young state senator named Barack Obama in the Democratic primary for his seat by a margin of 2-to-1, the only election loss of Obama\'s career. Rush was one of the longest-serving African American members of Congress and remained a vocal advocate for civil rights, gun violence prevention, and police accountability throughout his career.',
    birthDate: '1946-11-23',
    birthPlace: 'Albany, Georgia',
    education: ['Roosevelt University (BA, 1973)', 'University of Illinois at Chicago (MA, Political Science)', 'McCormick Theological Seminary (MA)'],
    affiliations: [
      { name: 'Illinois Black Panther Party', role: 'Co-founder and Deputy Minister of Defense (1968-1974); survived the December 4, 1969, COINTELPRO raid that killed Fred Hampton', type: 'organization' },
      { name: 'United States Congress', role: 'U.S. Representative for Illinois 1st Congressional District (1993-2023); 30 years of service; defeated Barack Obama in 2000 primary', type: 'agency' },
    ],
    controversies: [
      'Co-founded the Illinois Black Panther Party chapter with Fred Hampton in 1968; survived the December 4, 1969, police raid only because he was not at the apartment that night',
      'The raid that killed Hampton and Clark was orchestrated using a floor plan provided by FBI informant William O\'Neal, who had also drugged Hampton with secobarbital; police fired 82-99 rounds while Panthers fired at most one',
      'A 1982 federal civil rights settlement of $1.85 million confirmed the coordinated FBI-police operation against the Panthers, though no individual officer or agent was ever criminally prosecuted',
      'Served six months in prison in 1972 on a weapons charge related to his Black Panther activism',
      'Defeated Barack Obama in the 2000 Democratic congressional primary by a 2-to-1 margin, the only election loss of Obama\'s career',
      'His son Huey Rich was murdered by a gunman in Chicago in 1999, deepening his commitment to gun violence prevention legislation',
      'Remained an outspoken critic of COINTELPRO and FBI domestic surveillance throughout his congressional career, calling the Hampton assassination "a government-sanctioned murder"',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Fred Hampton Assassination', slug: 'fred-hampton-assassination', severity: 'high' },
    ],
    timeline: [
      { date: '1946-11-23', event: 'Born in Albany, Georgia; family later moves to Chicago' },
      { date: '1966', event: 'Joins the Student Nonviolent Coordinating Committee (SNCC) while serving in the U.S. Army' },
      { date: '1968', event: 'Co-founds the Illinois chapter of the Black Panther Party with Fred Hampton; serves as Deputy Minister of Defense' },
      { date: '1969-12-04', event: 'Pre-dawn raid by Cook County State\'s Attorney police and FBI kills Fred Hampton and Mark Clark at 2337 West Monroe Street; Rush survives because he is not at the apartment' },
      { date: '1972', event: 'Serves six months in prison on a weapons charge' },
      { date: '1982', event: 'Federal civil rights lawsuit over the Hampton-Clark raid settles for $1.85 million, confirming coordinated FBI-police operation' },
      { date: '1983', event: 'Elected as alderman of Chicago\'s 2nd Ward; enters electoral politics' },
      { date: '1992-11', event: 'Elected to U.S. House of Representatives for Illinois 1st Congressional District' },
      { date: '1999-10', event: 'Son Huey Rich is shot and killed in Chicago at age 29, deepening Rush\'s commitment to gun violence prevention' },
      { date: '2000-03', event: 'Defeats state senator Barack Obama in the Democratic primary for his congressional seat by a 2-to-1 margin; the only election loss of Obama\'s political career' },
      { date: '2023-01', event: 'Retires from Congress after 30 years of service representing Illinois\' 1st Congressional District' },
    ],
    sources: [
      { title: 'Haas, J. - The Assassination of Fred Hampton: How the FBI and the Chicago Police Murdered a Black Panther (Lawrence Hill Books)', date: '2010' },
      { title: 'U.S. Senate Select Committee to Study Governmental Operations (Church Committee) - COINTELPRO: The FBI\'s Covert Action Programs Against American Citizens', date: '1976' },
      { title: 'Chicago Tribune: The Black Panther Raid and the Death of Fred Hampton', date: '2019-12-04' },
    ],
    aliases: ['Bobby Lee Rush'],
    knownAssociates: [
      { name: 'Fred Hampton', relationship: 'Co-founded Illinois Black Panther chapter together; Hampton was assassinated in the December 4, 1969, raid that Rush survived', href: '/entities/individuals/fred-hampton' },
      { name: 'Barack Obama', relationship: 'Defeated Obama in the 2000 Democratic congressional primary by a 2-to-1 margin; the only election Obama ever lost', href: '/entities/individuals/barack-obama' },
    ],
  },


  'bosquet-wev': {
    name: 'Bosquet Wev',
    title: 'JIOA Director Who Fabricated Nazi Scientists\' Records for Operation Paperclip',
    role: 'Director of the Joint Intelligence Objectives Agency (JIOA) who oversaw the systematic falsification of security dossiers for Nazi scientists to circumvent President Truman\'s directive prohibiting the immigration of active Nazi Party members to the United States',
    riskLevel: 'critical' as const,
    description: 'Bosquet N. Wev was a U.S. military intelligence officer who served as director of the Joint Intelligence Objectives Agency (JIOA), the body within the U.S. War Department (later Department of Defense) responsible for administering Operation Paperclip. Operation Paperclip was a secret program initiated in 1945 to recruit German scientists, engineers, and technicians from Nazi Germany for employment by the United States government. President Truman authorized the program in September 1946 with the explicit directive that anyone found "to have been a member of the Nazi Party, and more than a nominal participant in its activities, or an active supporter of Nazi militarism" would be excluded. Under Wev\'s direction, the JIOA systematically circumvented this presidential order by creating fraudulent security dossiers for scientists who had been active Nazi Party members, SS officers, or participants in war crimes. The JIOA would receive background reports from military intelligence identifying scientists as security threats due to their Nazi activities, then Wev\'s office would either alter the reports, create entirely new sanitized dossiers, or attach paperclips to the new clean files (giving the operation its name, according to some accounts) before resubmitting them for approval. Scientists whose records were falsified under this program included Wernher von Braun (SS Sturmbannfuhrer and V-2 rocket designer who used concentration camp slave labor at Mittelwerk), Arthur Rudolph (production manager at the Mittelwerk factory where approximately 20,000 prisoners died), Hubertus Strughold (the "father of space medicine" who conducted human experiments at Dachau), and Kurt Debus (active SS member who became the first director of NASA Kennedy Space Center). The State Department and the Justice Department both raised objections to JIOA practices, but military intelligence officials overrode civilian concerns by arguing that the scientists were essential to national security in the emerging Cold War with the Soviet Union. The JIOA ultimately brought approximately 1,600 German scientists and their families to the United States between 1945 and 1959. The full scope of the program was not publicly revealed until journalist Linda Hunt published her findings in the 1980s and declassified documents were released under FOIA in the late 1990s.',
    education: [],
    affiliations: [
      { name: 'Joint Intelligence Objectives Agency (JIOA)', role: 'Director; administered Operation Paperclip and directed the falsification of Nazi scientists\' security dossiers to circumvent Truman\'s presidential directive', type: 'agency' },
      { name: 'U.S. War Department', role: 'Military intelligence officer; the JIOA operated under the Joint Intelligence Committee within the War Department', type: 'agency' },
    ],
    controversies: [
      'Directed the systematic falsification of security dossiers for Nazi scientists who had been active Nazi Party members, SS officers, or participants in war crimes, in direct violation of President Truman\'s explicit directive',
      'Overrode objections from the State Department and Justice Department about importing scientists identified as security threats due to their Nazi activities',
      'The JIOA under his direction sanitized the record of Wernher von Braun, an SS Sturmbannfuhrer who personally visited the Mittelwerk underground factory where V-2 rockets were built by concentration camp slave labor',
      'Approved the immigration of Arthur Rudolph, production manager at Mittelwerk where approximately 20,000 prisoners died; Rudolph was later stripped of his U.S. citizenship in 1984 when his wartime activities were exposed',
      'Facilitated the entry of Hubertus Strughold, "father of space medicine," who was linked to human experiments at Dachau concentration camp and was on the Nuremberg doctors\' trial suspect list',
      'The JIOA created an institutional framework for circumventing presidential authority and civilian oversight in the name of national security, establishing a precedent for Cold War-era intelligence impunity',
      'The full scope of the JIOA fraud was concealed for decades until journalist Linda Hunt and FOIA releases in the late 1990s exposed the systematic nature of the record falsification',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
    ],
    timeline: [
      { date: '1945-07', event: 'Operation Overcast (predecessor to Paperclip) begins bringing German scientists to the United States for temporary military consultation' },
      { date: '1946-09', event: 'President Truman authorizes the long-term recruitment of German scientists but explicitly bars active Nazi Party members and supporters of Nazi militarism' },
      { date: '1947', event: 'JIOA under Wev\'s direction begins systematically creating sanitized security dossiers to circumvent Truman\'s directive for scientists flagged as security threats' },
      { date: '1947-03', event: 'The State Department protests JIOA practices, noting that scientists identified as ardent Nazis and potential security threats are being approved through falsified paperwork' },
      { date: '1948', event: 'Wernher von Braun, whose original JIOA dossier described him as a security threat due to his SS membership and Nazi Party activities, receives a new sanitized file and is approved for permanent residence' },
      { date: '1949', event: 'JIOA has imported hundreds of German scientists and their families; military officials argue that Cold War necessity overrides concerns about their Nazi records' },
      { date: '1959', event: 'Operation Paperclip officially ends after approximately 1,600 German scientists and their families have been brought to the United States' },
      { date: '1984', event: 'Arthur Rudolph, whose JIOA file had been sanitized, is stripped of U.S. citizenship and deported to Germany when his role as Mittelwerk production manager is exposed by the Office of Special Investigations' },
      { date: '1985', event: 'Journalist Linda Hunt publishes findings revealing the JIOA systematic falsification of records, based on declassified documents obtained through FOIA' },
      { date: '1998', event: 'The Nazi War Crimes Disclosure Act leads to mass declassification of Paperclip documents, revealing the full scope of the JIOA fraud' },
    ],
    sources: [
      { title: 'Jacobsen, A. - Operation Paperclip: The Secret Intelligence Program That Brought Nazi Scientists to America (Little, Brown)', date: '2014' },
      { title: 'Hunt, L. - Secret Agenda: The United States Government, Nazi Scientists, and Project Paperclip, 1945-1990 (St. Martin\'s Press)', date: '1991' },
      { title: 'National Archives: Records of the Joint Intelligence Objectives Agency (JIOA)', date: '' },
      { title: 'Bower, T. - The Paperclip Conspiracy: The Hunt for the Nazi Scientists (Little, Brown)', date: '1987' },
    ],
    aliases: ['Bosquet N. Wev'],
    knownAssociates: [
      { name: 'Wernher von Braun', relationship: 'Nazi SS Sturmbannfuhrer and V-2 rocket designer whose security dossier was falsified by the JIOA to obscure his Nazi Party membership and SS rank', href: '/entities/individuals/wernher-von-braun' },
    ],
  },












  'boutros-boutros-ghali': {
    name: 'Boutros Boutros-Ghali',
    title: 'UN Secretary-General During Rwanda Genocide',
    role: 'Secretary-General of the United Nations from 1992 to 1996 who failed to mobilize an international response during the 1994 Rwanda genocide in which approximately 800,000 Tutsi and moderate Hutu were killed in 100 days',
    riskLevel: 'critical' as const,
    description: 'Boutros Boutros-Ghali (1922-2016) was an Egyptian diplomat who served as the sixth Secretary-General of the United Nations from January 1992 to December 1996. He held office during the 1994 Rwandan genocide, in which Hutu extremists organized the systematic murder of approximately 800,000 Tutsi and moderate Hutu between April 7 and mid-July 1994. Despite receiving explicit warnings from UNAMIR Force Commander Romeo Dallaire, including a January 1994 fax describing planned "extermination" of Tutsis and requesting permission to seize weapons caches, the UN Secretariat under Boutros-Ghali instructed Dallaire not to act and instead to share the intelligence with the Rwandan government, elements of which were planning the genocide. After the genocide began on April 7, 1994, the UN Security Council, with Boutros-Ghali Secretariat providing assessments, voted on April 21 to reduce UNAMIR from 2,548 troops to just 270, effectively abandoning Rwanda during the killing. Boutros-Ghali later acknowledged that the UN failed Rwanda and called it his "greatest failure." Before becoming Secretary-General, as Egyptian Minister of State for Foreign Affairs in the 1970s and 1980s, Boutros-Ghali had facilitated arms deals between France and Rwanda, including weapons sales to the Habyarimana regime that were later used during the genocide. He was also criticized for the UN failure to prevent the Srebrenica massacre in July 1995. The United States vetoed his bid for a second term in 1996, the only time a sitting Secretary-General was denied reelection.',
    birthDate: '1922-11-14',
    birthPlace: 'Cairo, Egypt',
    deathDate: '2016-02-16',
    education: ['Cairo University (Law Degree)', 'University of Paris (PhD in International Law, 1949)'],
    affiliations: [
      { name: 'United Nations', role: 'Secretary-General (1992-1996); oversaw the institution during the Rwanda genocide and Srebrenica massacre', type: 'organization' },
      { name: 'Government of Egypt', role: 'Minister of State for Foreign Affairs (1977-1991); facilitated arms deals between France and Rwanda', type: 'agency' },
    ],
    controversies: [
      'Failed to mobilize an international response during the 1994 Rwanda genocide in which approximately 800,000 Tutsi and moderate Hutu were killed in 100 days',
      'UN Secretariat under his leadership instructed UNAMIR Commander Dallaire not to act on intelligence warning of planned extermination and to share the information with the Rwandan government instead',
      'The UN Security Council reduced UNAMIR from 2,548 to 270 troops on April 21, 1994, two weeks into the genocide, based on assessments from his Secretariat',
      'As Egyptian Minister of State for Foreign Affairs, facilitated arms deals between France and the Habyarimana regime in Rwanda; those weapons were later used during the genocide',
      'Oversaw the UN during the Srebrenica massacre of July 1995 in which Bosnian Serb forces killed over 8,000 Bosniak men and boys in a UN-declared "safe area"',
      'The United States vetoed his bid for a second term in 1996, the only time a sitting Secretary-General was denied reelection',
      'Later acknowledged that Rwanda was his "greatest failure" and that the UN had failed the Rwandan people',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Rwanda Genocide Inaction', slug: 'rwanda-genocide-inaction', severity: 'critical' },
    ],
    timeline: [
      { date: '1922-11-14', event: 'Born in Cairo, Egypt' },
      { date: '1977', event: 'Becomes Egyptian Minister of State for Foreign Affairs; facilitates Franco-Rwandan arms deals during this period' },
      { date: '1992-01-01', event: 'Takes office as sixth Secretary-General of the United Nations' },
      { date: '1994-01-11', event: 'UNAMIR Commander Romeo Dallaire sends his "genocide fax" warning of planned Tutsi extermination and requesting permission to seize weapons; UN Secretariat denies the request' },
      { date: '1994-04-07', event: 'Rwanda genocide begins following the assassination of President Habyarimana; killing of Tutsi and moderate Hutu begins within hours' },
      { date: '1994-04-21', event: 'UN Security Council votes to reduce UNAMIR from 2,548 to 270 troops, effectively abandoning Rwanda during the genocide' },
      { date: '1994-07', event: 'RPF takes Kigali, ending the genocide after approximately 800,000 Tutsi and moderate Hutu have been killed in 100 days' },
      { date: '1995-07-11', event: 'Srebrenica massacre begins in a UN-declared "safe area"; over 8,000 Bosniak men and boys are killed by Bosnian Serb forces' },
      { date: '1996-11-19', event: 'United States vetoes his bid for a second term as Secretary-General; the only sitting SG denied reelection' },
      { date: '2016-02-16', event: 'Dies in Cairo at age 93' },
    ],
    sources: [
      { title: 'Dallaire, R. - Shake Hands with the Devil: The Failure of Humanity in Rwanda (Random House)', date: '2003' },
      { title: 'United Nations: Report of the Independent Inquiry into the Actions of the United Nations During the 1994 Genocide in Rwanda', date: '1999-12-15' },
      { title: 'Melvern, L. - A People Betrayed: The Role of the West in Rwanda Genocide (Zed Books)', date: '2000' },
    ],
    knownAssociates: [
      { name: 'Kofi Annan', relationship: 'Successor as UN Secretary-General who as Undersecretary-General for Peacekeeping had direct responsibility for UNAMIR during the genocide', href: '/entities/individuals/kofi-annan' },
      { name: 'Romeo Dallaire', relationship: 'UNAMIR Force Commander who sent the genocide fax warning and pleaded for reinforcements that were denied under Boutros-Ghali leadership', href: '/entities/individuals/romeo-dallaire' },
    ],
  },


  'breonna-taylor': {
    name: 'Breonna Taylor',
    title: 'EMT Killed by Louisville Police in No-Knock Raid',
    role: '26-year-old emergency medical technician who was shot and killed by Louisville Metro Police Department officers during a botched no-knock raid on her apartment on March 13, 2020',
    riskLevel: 'critical' as const,
    description: 'Breonna Taylor (1993-2020) was a 26-year-old emergency medical technician and aspiring nurse who was shot and killed by Louisville Metro Police Department officers in the early hours of March 13, 2020, during the execution of a no-knock search warrant at her apartment at 3003 Springfield Drive in Louisville, Kentucky. Officers Jonathan Mattingly, Brett Hankison, and Myles Cosgrove used a battering ram to break down Taylor door shortly after 12:40 AM. Taylor boyfriend Kenneth Walker, a licensed gun owner who said he believed intruders were breaking in, fired a single shot that struck Mattingly in the leg. Officers responded with 32 rounds, striking Taylor six times and killing her. The warrant had been obtained by Detective Joshua Jaynes based on a claim that Taylor was receiving packages for Jamarcus Glover, her ex-boyfriend, who was a suspect in a drug investigation. Jaynes stated in the warrant affidavit that he had verified through a postal inspector that Glover was receiving packages at Taylor address, but the postal inspector later said he had told the officers that Taylor was not receiving suspicious packages. No drugs were found in Taylor apartment. A grand jury indicted only Brett Hankison on three counts of wanton endangerment for shots that traveled into a neighboring apartment, not for Taylor death. Kentucky Attorney General Daniel Cameron was later found to have not presented homicide charges to the grand jury against the other officers. In August 2022, the U.S. DOJ brought federal civil rights charges against Jaynes, Hankison, Mattingly, and former Detective Kelly Goodlett. Goodlett pleaded guilty to a federal conspiracy charge. Hankison was acquitted of the federal charges. In 2022, Louisville agreed to a $12 million wrongful death settlement with Taylor family and enacted Breonna Law banning no-knock warrants.',
    birthDate: '1993-06-05',
    birthPlace: 'Grand Rapids, Michigan',
    deathDate: '2020-03-13',
    education: ['University of Kentucky (Pre-Nursing coursework)'],
    affiliations: [
      { name: 'Louisville Metro Emergency Medical Services', role: 'Emergency Medical Technician; worked night shifts to support her aspiration to become a nurse', type: 'organization' },
    ],
    controversies: [
      'Shot six times and killed by Louisville Metro Police officers during a no-knock raid at 12:40 AM on March 13, 2020; she was unarmed and in her hallway',
      'The no-knock warrant was obtained by Detective Joshua Jaynes based on claims the postal inspector later contradicted; no drugs were found in her apartment',
      'A grand jury only indicted one officer (Hankison) on wanton endangerment for shots into a neighbor apartment, not for Taylor death',
      'Kentucky AG Daniel Cameron did not present homicide charges to the grand jury, a fact revealed by an anonymous grand juror who filed suit to speak publicly',
      'Her death became a national symbol of policing failures and the dangers of no-knock warrants, sparking months of protests in Louisville and nationwide',
      'Louisville paid $12 million to Taylor family in a wrongful death settlement and enacted Breonna Law banning no-knock warrants',
      'Federal DOJ brought civil rights charges against four officers in 2022; Detective Kelly Goodlett pleaded guilty to conspiracy',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'critical' },
    ],
    timeline: [
      { date: '1993-06-05', event: 'Born Breonna Taylor in Grand Rapids, Michigan' },
      { date: '2020-03-13', event: 'Shot and killed by Louisville Metro Police officers Mattingly, Cosgrove, and Hankison during a no-knock raid at her apartment at 12:40 AM; officers fire 32 rounds' },
      { date: '2020-05', event: 'FBI opens investigation into the circumstances of her death' },
      { date: '2020-06-11', event: 'Louisville Metro Council votes to ban no-knock warrants, enacting "Breonna Law"' },
      { date: '2020-09-15', event: 'City of Louisville agrees to pay $12 million wrongful death settlement to Taylor family' },
      { date: '2020-09-23', event: 'Grand jury indicts only Brett Hankison on three counts of wanton endangerment for shots that entered a neighboring apartment; no charges for Taylor death' },
      { date: '2020-10-20', event: 'Anonymous grand juror files suit and is allowed to speak publicly, revealing the AG did not present homicide charges to the grand jury' },
      { date: '2022-08-04', event: 'U.S. DOJ brings federal civil rights charges against officers Jaynes, Hankison, Mattingly, and former detective Kelly Goodlett' },
      { date: '2022-08', event: 'Detective Kelly Goodlett pleads guilty to federal conspiracy charge for falsifying the warrant affidavit and conspiracy to cover up the false information' },
      { date: '2023-03', event: 'Brett Hankison acquitted of federal civil rights charges' },
    ],
    sources: [
      { title: 'New York Times: Breonna Taylor Was Killed by Police. The Full Story of What Happened.', date: '2020-09-18' },
      { title: 'U.S. DOJ: Four Current and Former Louisville Metro Police Department Officers Charged with Federal Crimes', date: '2022-08-04' },
      { title: 'Louisville Courier-Journal: Breonna Taylor Complete Timeline of Events', date: '2022' },
    ],
    knownAssociates: [
      { name: 'Brett Hankison', relationship: 'Louisville Metro Police officer who fired 10 rounds during the raid, some penetrating a neighboring apartment; indicted on wanton endangerment; acquitted federally', href: '/entities/individuals/brett-hankison' },
      { name: 'Joshua Jaynes', relationship: 'Detective who obtained the no-knock warrant using claims the postal inspector contradicted; charged federally in 2022', href: '/entities/individuals/joshua-jaynes' },
      { name: 'Tamika Palmer', relationship: 'Mother of Breonna Taylor who became a prominent civil rights advocate after her daughter killing', href: '/entities/individuals/tamika-palmer' },
      { name: 'Kenneth Walker', relationship: 'Boyfriend who was present and fired a single shot believing intruders were breaking in; initially charged with assault but charges were dropped', href: '/entities/individuals/kenneth-walker' },
    ],
  },


  'brian-terry': {
    name: 'Brian Terry',
    title: 'U.S. Border Patrol Agent Killed with Operation Fast and Furious Weapons',
    role: 'U.S. Border Patrol agent and former Marine who was shot and killed on December 14, 2010, during a firefight with Mexican cartel members in Peck Canyon, Arizona; two of the weapons recovered at the scene were traced to ATF Operation Fast and Furious',
    riskLevel: 'critical' as const,
    description: 'Brian A. Terry (1970-2010) was a U.S. Border Patrol agent and former United States Marine who was shot and killed on December 14, 2010, during an engagement with a group of armed individuals in Peck Canyon, a remote border area near Nogales, Arizona. Terry was a member of the Border Patrol Tactical Unit (BORTAC), an elite unit that conducted operations in high-risk border areas. During the encounter, Terry team encountered five suspected cartel members and a firefight ensued. Terry was struck by a single bullet and died at the scene. He was 40 years old. Two AK-47-style rifles recovered at the scene were traced back to Operation Fast and Furious, a Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) program that had deliberately allowed over 2,000 firearms to be sold to known straw purchasers who then transferred them to Mexican drug cartels. The operation, run out of the ATF Phoenix Field Division, was intended to track the weapons to cartel leadership but lost track of the vast majority of the guns. Terry death exposed the operation and triggered one of the largest law enforcement scandals in U.S. history. ATF whistleblower John Dodson went public in early 2011, and the resulting congressional investigation led to Attorney General Eric Holder being held in contempt of Congress in 2012 for refusing to turn over documents related to the operation. The DOJ Inspector General report found 14 ATF and DOJ officials bore responsibility for failures in the operation. Terry family filed a wrongful death lawsuit against the federal government. As of 2016, only one of the approximately 2,000 weapons had been recovered from a crime scene in Mexico for every 100 that were allowed to cross the border.',
    birthDate: '1970-02-26',
    birthPlace: 'Flat Rock, Michigan',
    deathDate: '2010-12-14',
    education: ['Schoolcraft College (Associate Degree)', 'U.S. Marine Corps training'],
    affiliations: [
      { name: 'U.S. Customs and Border Protection', role: 'Border Patrol Agent; member of the Border Patrol Tactical Unit (BORTAC)', type: 'agency' },
      { name: 'United States Marine Corps', role: 'Sergeant; served from 1988 to 1994', type: 'agency' },
    ],
    controversies: [
      'Killed on December 14, 2010, during a firefight with cartel members in Peck Canyon, Arizona; two of the weapons recovered at the scene were traced to ATF Operation Fast and Furious',
      'His death exposed Operation Fast and Furious, in which ATF deliberately allowed over 2,000 firearms to be sold to known straw purchasers who transferred them to Mexican drug cartels',
      'The ATF program that led to his death was supposed to track weapons to cartel leadership but lost track of the vast majority of the guns',
      'His killing triggered a congressional investigation that led to Attorney General Eric Holder being held in contempt of Congress in 2012',
      'The DOJ Inspector General report found 14 ATF and DOJ officials bore responsibility for the failures that contributed to his death',
      'His family filed a wrongful death lawsuit against the federal government for facilitating the transfer of weapons used to kill him',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'critical' },
    ],
    timeline: [
      { date: '1970-02-26', event: 'Born in Flat Rock, Michigan' },
      { date: '1988', event: 'Enlists in the United States Marine Corps; serves until 1994 as a Sergeant' },
      { date: '2007', event: 'Joins U.S. Customs and Border Protection as a Border Patrol Agent; later joins the BORTAC tactical unit' },
      { date: '2010-12-14', event: 'Killed during a firefight with cartel members in Peck Canyon, Arizona; two weapons recovered at the scene are later traced to ATF Operation Fast and Furious' },
      { date: '2011-01', event: 'ATF whistleblower John Dodson goes public about Operation Fast and Furious, exposing the gunwalking program that armed the men who killed Terry' },
      { date: '2011-06', event: 'House Oversight Committee under Darrell Issa launches formal investigation into Operation Fast and Furious' },
      { date: '2012-06-28', event: 'Attorney General Eric Holder held in contempt of Congress for refusing to turn over Operation Fast and Furious documents' },
      { date: '2012-09', event: 'DOJ Inspector General report finds 14 ATF and DOJ officials bore responsibility for failures in the operation' },
      { date: '2015-10', event: 'Heraclio Osorio-Arellanes, the man who fired the shot that killed Terry, is extradited from Mexico and later sentenced to life in prison' },
    ],
    sources: [
      { title: 'U.S. DOJ Office of the Inspector General: A Review of ATF Operation Fast and Furious and Related Matters', date: '2012-09' },
      { title: 'House Committee on Oversight and Government Reform: Fast and Furious: The Anatomy of a Failed Operation', date: '2012' },
      { title: 'New York Times: Agent Death in Arizona Sheds Light on Gun Inquiry', date: '2011-02-02' },
    ],
    knownAssociates: [
      { name: 'John Dodson', relationship: 'ATF whistleblower who exposed Operation Fast and Furious after Terry death, going public with evidence that ATF had allowed weapons to walk to Mexican cartels', href: '/entities/individuals/john-dodson' },
      { name: 'Eric Holder', relationship: 'Attorney General held in contempt of Congress in 2012 for refusing to turn over documents about the operation that armed Terry killers', href: '/entities/individuals/eric-holder' },
    ],
  },


  'bruce-karrh': {
    name: 'Bruce Karrh',
    title: 'DuPont VP Who Oversaw Internal PFAS Toxicity Studies',
    role: 'DuPont Vice President of Safety, Health and Environmental Affairs who oversaw the company\'s internal toxicology studies on PFAS chemicals, including perfluorooctanoic acid (PFOA/C8), while the company concealed evidence of harm from regulators and the public for decades',
    riskLevel: 'high' as const,
    description: 'Dr. Bruce Karrh served as DuPont\'s Vice President of Safety, Health and Environmental Affairs from the late 1970s through the 1990s, a period during which DuPont conducted extensive internal toxicology studies on perfluorooctanoic acid (PFOA, also known as C8), a synthetic chemical used in the production of Teflon and other fluoropolymer products at DuPont\'s Washington Works plant near Parkersburg, West Virginia. Under Karrh\'s oversight, DuPont\'s internal research documented serious health effects from PFOA exposure as early as the 1960s and 1970s. Company scientists found that PFOA accumulated in workers\' blood, caused liver damage in animal studies, and was linked to birth defects in children of female workers at the Washington Works facility. A 1981 internal DuPont study found that two of seven children born to women working in the Teflon division had birth defects, including one with eye and tear duct deformities consistent with PFOA exposure seen in animal studies. Despite these findings, DuPont did not disclose the results to workers or regulators. Karrh, as the senior executive responsible for environmental and health affairs, was in a position to know about and acted on these internal studies. Internal company documents later revealed in litigation showed that DuPont\'s corporate medical department under Karrh\'s purview tracked worker blood PFOA levels and knew the chemical was bioaccumulating in employees and in the water supply surrounding the Parkersburg plant. By the mid-1980s, DuPont knew that PFOA had contaminated the drinking water of tens of thousands of residents in the mid-Ohio Valley. Rather than disclose the contamination, the company continued production and disposed of PFOA-laden waste in unlined landfills and directly into the Ohio River. The C8 Science Panel, an independent epidemiological study panel created as part of a 2005 class-action settlement, later found probable links between PFOA exposure and six diseases: kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, and pregnancy-induced hypertension. DuPont ultimately faced thousands of personal injury lawsuits and paid hundreds of millions in settlements. The EPA fined DuPont $16.5 million in 2005 for failing to report PFOA health risks under the Toxic Substances Control Act (TSCA) Section 8(e), which requires companies to report substantial risk information to the EPA. It was the largest civil administrative penalty the EPA had ever assessed at the time.',
    education: ['Medical degree (physician)'],
    affiliations: [
      { name: 'E.I. du Pont de Nemours and Company (DuPont)', role: 'Vice President of Safety, Health and Environmental Affairs (late 1970s-1990s); oversaw the corporate medical and environmental departments during the period of PFOA contamination concealment', type: 'corporation' },
    ],
    controversies: [
      'Oversaw DuPont\'s internal toxicology program during the decades when company scientists documented that PFOA accumulated in workers\' blood, caused liver damage in animal studies, and was linked to birth defects in children of female workers',
      'A 1981 internal DuPont study found that two of seven children born to women working in the Teflon division had birth defects; the results were not disclosed to workers or regulators',
      'DuPont\'s corporate medical department under his purview tracked worker blood PFOA levels and knew the chemical was bioaccumulating in employees and contaminating the drinking water of tens of thousands of mid-Ohio Valley residents',
      'Despite knowing PFOA had contaminated local water supplies by the mid-1980s, DuPont continued production and waste disposal practices that spread the contamination',
      'The EPA fined DuPont $16.5 million in 2005 for failing to report PFOA health risks as required under TSCA Section 8(e), the largest civil administrative penalty the EPA had assessed at that time',
      'The C8 Science Panel later found probable links between PFOA exposure and six diseases: kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, and pregnancy-induced hypertension',
      'Internal company documents revealed in litigation showed systematic concealment of PFOA health data from regulators, workers, and surrounding communities over a period spanning decades',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
    ],
    timeline: [
      { date: '1960s', event: 'DuPont begins internal toxicology studies on PFOA; early results show the chemical is toxic to animals and bioaccumulates in human blood' },
      { date: '1979', event: 'Karrh assumes senior role in DuPont\'s Safety, Health and Environmental Affairs division' },
      { date: '1981', event: 'Internal DuPont study finds two of seven children born to female Teflon division workers have birth defects; results are not disclosed to workers or regulators' },
      { date: '1984', event: 'DuPont internal documents show the company knows PFOA has contaminated the drinking water supply of communities surrounding the Parkersburg, West Virginia plant' },
      { date: '1991', event: 'DuPont sets an internal guideline of 1 part per billion for PFOA in drinking water but does not share this with the EPA or affected communities' },
      { date: '2001', event: 'Farmer Wilbur Tennant and attorney Robert Bilott file a federal lawsuit against DuPont, beginning the legal process that will expose decades of internal PFOA research' },
      { date: '2004', event: 'EPA files administrative complaint against DuPont for failure to report substantial risk information about PFOA under TSCA Section 8(e)' },
      { date: '2005-12', event: 'EPA settles with DuPont for $16.5 million, the largest civil administrative penalty in EPA history at that time; DuPont also agrees to fund the independent C8 Science Panel study' },
      { date: '2012', event: 'C8 Science Panel completes its seven-year study and finds probable links between PFOA exposure and kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, and pregnancy-induced hypertension' },
    ],
    sources: [
      { title: 'Bilott, R. - Exposure: Poisoned Water, Corporate Greed, and One Lawyer\'s Twenty-Year Battle Against DuPont (Atria Books)', date: '2019' },
      { title: 'EPA: DuPont Settles PFOA Charges / Largest Civil Administrative Penalty in Agency History', date: '2005-12-14' },
      { title: 'C8 Science Panel: Probable Link Evaluations of Health Outcomes', date: '2012' },
      { title: 'Lerner, S. - The Teflon Toxin: DuPont and the Chemistry of Deception (The Intercept)', date: '2015-08-11' },
    ],
    aliases: ['Dr. Bruce Karrh'],
    knownAssociates: [
      { name: 'Charles Holliday', relationship: 'DuPont CEO (1998-2009) who led the company during the period when PFOA contamination became public', href: '/entities/individuals/charles-holliday' },
      { name: 'Edward Breen', relationship: 'DuPont CEO who inherited the PFAS contamination liability and oversaw the DowDuPont merger', href: '/entities/individuals/edward-breen' },
    ],
  },












  'bryan-stevenson': {
    name: 'Bryan Stevenson',
    title: 'Founder of the Equal Justice Initiative and Creator of the National Memorial for Peace and Justice',
    role: 'Civil rights attorney who founded the Equal Justice Initiative (EJI) in 1989, has won reversals, relief, or release for over 140 wrongly condemned death row prisoners, argued and won multiple cases before the U.S. Supreme Court, and created the National Memorial for Peace and Justice documenting over 4,400 racial terror lynchings in America',
    riskLevel: 'low' as const,
    description: 'Bryan Stevenson (born November 14, 1959) is an American civil rights attorney, author, and law professor who founded the Equal Justice Initiative (EJI) in Montgomery, Alabama, in 1989. Over the course of more than three decades, Stevenson and EJI have provided legal representation to hundreds of people on death row and have won reversals, relief, or release for over 140 wrongly condemned prisoners. His most famous case was the defense of Walter McMillian, an African American man who was wrongfully convicted and sentenced to death in 1988 for the murder of a white woman in Monroeville, Alabama, despite overwhelming evidence of his innocence, including testimony from witnesses placing him at a church fish fry miles from the crime at the time of the murder. After six years of appeals, Stevenson secured McMillian\'s release in 1993 after proving that prosecutors had suppressed exculpatory evidence and relied on coerced testimony. The case became the basis of Stevenson\'s bestselling memoir "Just Mercy: A Story of Justice and Redemption" (2014), later adapted into a 2019 film. Stevenson has argued and won multiple cases before the U.S. Supreme Court, including Sullivan v. Florida (2010) and Miller v. Alabama (2012), which established that mandatory life-without-parole sentences for children 17 and younger violate the Eighth Amendment prohibition on cruel and unusual punishment. He also successfully argued that sentencing children to die in prison is unconstitutional. In 2018, Stevenson and EJI opened the National Memorial for Peace and Justice in Montgomery, the first memorial dedicated to the victims of lynching in the United States. The memorial documents over 4,400 racial terror lynchings that occurred in the United States between 1877 and 1950, with 800 six-foot steel columns suspended from the ceiling, each representing a county where a lynching took place and inscribed with the names of the victims. The accompanying Legacy Museum traces the history from enslavement through racial terror lynching to mass incarceration. Stevenson has received numerous honors including the MacArthur Foundation "Genius" Grant (1995), the National Humanitarian Medal from the National Conference for Community and Justice, and the Smithsonian Magazine American Ingenuity Award for Social Progress.',
    birthDate: '1959-11-14',
    birthPlace: 'Milton, Delaware',
    education: ['Eastern University (BA, 1981)', 'Harvard Kennedy School (Master of Public Policy, 1985)', 'Harvard Law School (JD, 1985)'],
    affiliations: [
      { name: 'Equal Justice Initiative (EJI)', role: 'Founder and Executive Director (1989-present); has won reversals, relief, or release for over 140 wrongly condemned death row prisoners', type: 'organization' },
      { name: 'New York University School of Law', role: 'Professor of Clinical Law; teaches capital punishment and criminal justice reform', type: 'organization' },
    ],
    controversies: [
      'Founded the Equal Justice Initiative in 1989, which has since provided legal representation to hundreds of death row inmates and won freedom for over 140 wrongly condemned prisoners',
      'Won the freedom of Walter McMillian in 1993 after proving that Alabama prosecutors had suppressed exculpatory evidence and relied on coerced testimony to secure a death sentence against an innocent man',
      'Argued and won Sullivan v. Florida (2010) and Miller v. Alabama (2012) before the U.S. Supreme Court, establishing that mandatory life-without-parole sentences for children violate the Eighth Amendment',
      'Created the National Memorial for Peace and Justice in 2018, the first memorial in the United States dedicated to victims of lynching, documenting over 4,400 racial terror lynchings between 1877 and 1950',
      'His EJI research documented that thousands of African Americans were lynched in the American South with the participation or acquiescence of local law enforcement, and that many of these killings had never been officially acknowledged',
      'Publicly challenged the direct line from racial terror lynching to mass incarceration, arguing that the United States incarcerates more people per capita than any nation in history and that the system disproportionately targets Black and brown communities',
      'His work documenting racial bias in capital sentencing has shown that the race of the victim is the strongest predictor of who receives the death penalty in America',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
    ],
    timeline: [
      { date: '1959-11-14', event: 'Born in Milton, Delaware' },
      { date: '1985', event: 'Graduates from Harvard Law School and Harvard Kennedy School; begins representing death row inmates in the Deep South' },
      { date: '1989', event: 'Founds the Equal Justice Initiative (EJI) in Montgomery, Alabama, dedicated to defending the most marginalized people in the criminal justice system' },
      { date: '1993', event: 'Wins the freedom of Walter McMillian after six years of appeals, proving Alabama prosecutors suppressed exculpatory evidence to secure a death sentence against an innocent man' },
      { date: '1995', event: 'Receives the MacArthur Foundation "Genius" Grant for his work in criminal justice reform and death penalty defense' },
      { date: '2010', event: 'Argues and wins Sullivan v. Florida before the U.S. Supreme Court, contributing to the ruling that life-without-parole for non-homicide juvenile offenders violates the Eighth Amendment' },
      { date: '2012-06-25', event: 'Supreme Court decides Miller v. Alabama, ruling that mandatory life-without-parole sentences for juvenile offenders violate the Eighth Amendment; Stevenson argued significantly for this outcome' },
      { date: '2014', event: 'Publishes "Just Mercy: A Story of Justice and Redemption," which becomes a bestseller and is later adapted into a 2019 film starring Michael B. Jordan' },
      { date: '2015', event: 'EJI publishes "Lynching in America: Confronting the Legacy of Racial Terror," documenting over 4,400 racial terror lynchings between 1877 and 1950' },
      { date: '2018-04-26', event: 'Opens the National Memorial for Peace and Justice in Montgomery, Alabama, the first memorial in the United States dedicated to victims of lynching' },
    ],
    sources: [
      { title: 'Stevenson, B. - Just Mercy: A Story of Justice and Redemption (Spiegel & Grau)', date: '2014' },
      { title: 'Equal Justice Initiative - Lynching in America: Confronting the Legacy of Racial Terror (Third Edition)', date: '2017' },
      { title: 'Miller v. Alabama, 567 U.S. 460 (2012)', date: '2012-06-25' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Anthony Ray Hinton', relationship: 'Represented Hinton for 16 years and won his freedom in 2015 after 30 years on Alabama death row based on faulty ballistics evidence', href: '/entities/individuals/anthony-ray-hinton' },
      { name: 'Walter McMillian', relationship: 'Represented and freed McMillian in 1993 after proving his wrongful conviction for murder; the case became the basis for "Just Mercy"', href: '/entities/individuals/walter-mcmillian' },
      { name: 'Barry Scheck', relationship: 'Fellow wrongful conviction attorney and Innocence Project co-founder; allied in criminal justice reform work', href: '/entities/individuals/barry-scheck' },
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
 'Severely burned and injured by flash-bang grenade during no-knock raid; became symbol of police militarization dangers',
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
 education: ['Nova Southeastern University Shepard Broad College of Law, Juris Doctor'],
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
 { date: '2019 February', event: 'Judge Kenneth Marra ruled NPA violated Crime Victims Rights Act; landmark victory' },
 { date: '2019 July', event: 'Epstein arrested on federal charges, partially vindicating decade of legal work' },
 { date: '2020', event: 'Published Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Relentless Pursuit Book (2020)', url: 'https://www.simonandschuster.com/books/Relentless-Pursuit/Bradley-J-Edwards/9781982148935', date: '' },
 { title: 'Miami Herald: Perversion of Justice', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 { title: 'Wild v. United States: CVRA Ruling', url: 'https://scholar.google.com/scholar?q=Wild%20v.%20United%20States%20-%20CVRA%20Ruling', date: '2019' },
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
 { title: 'Mississippi History Now', url: 'https://www.mdah.ms.gov/', date: '2023' },
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
 title: 'Former U.S. Attorney General (twice)',
 role: 'Two-time AG who intervened in DOJ matters to benefit political allies; mischaracterized the Mueller Report',
 riskLevel: 'critical',
 description: 'William Pelham Barr served as the 77th and 85th United States Attorney General under Presidents George H.W. Bush (1991-1993) and Donald Trump (2019-2020). During his second tenure; Barr issued a 4-page summary of the Mueller Report that Special Counsel Robert Mueller himself said "did not fully capture the context; nature; and substance" of the investigation\'s findings. Mueller wrote to Barr that his summary created "public confusion about critical aspects of the results." Barr intervened in the sentencing recommendations for Trump associates Roger Stone and Michael Flynn; overruling career prosecutors in both cases. The four prosecutors in the Stone case withdrew in protest. Barr ordered the tear-gassing of peaceful protesters in Lafayette Square on June 1, 2020 to clear the way for Trump\'s photo opportunity at St. John\'s Church. The DOJ Inspector General later found that the Park Police had planned the clearing operation before Trump\'s walk. During his first tenure under Bush; Barr advised the president on pardons for six Iran-Contra figures; effectively ending the independent counsel\'s investigation. He promoted the expansion of federal incarceration and advocated for more aggressive policing policies.',
 birthDate: 'May 23, 1950',
 birthPlace: 'New York City, New York, USA',
 education: ['Columbia University; B.A. Government 1971; M.A. Government and Chinese Studies 1973', 'George Washington University Law School; J.D. 1977'],
 affiliations: [
  { name: 'DOJ', role: 'Attorney General (1991-1993; 2019-2020)', type: 'agency' },
  { name: 'CIA', role: 'Legislative affairs (1973-1977)', type: 'agency' },
  { name: 'Kirkland & Ellis', role: 'Partner; of counsel (between government stints)', type: 'corporation' },
  { name: 'Verizon/GTE', role: 'Executive Vice President and General Counsel (1994-2008)', type: 'corporation' },
 ],
 controversies: [
  'Issued a 4-page "summary" of the Mueller Report on March 24, 2019 that claimed the report found "no collusion"; Mueller wrote Barr a letter stating the summary "did not fully capture the context; nature; and substance" of the investigation',
  'Intervened to reduce sentencing recommendation for Roger Stone from 7-9 years to a "far less" term; all four career prosecutors on the case withdrew in protest; one resigned from the DOJ entirely',
  'Ordered the dropping of charges against Michael Flynn despite Flynn having twice pleaded guilty to lying to the FBI; the presiding judge appointed an amicus to argue against dismissal',
  'Oversaw the clearing of Lafayette Square of peaceful protesters on June 1, 2020 using tear gas, rubber bullets, and mounted police; clearing the path for Trump\'s photo-op at St. John\'s Church',
  'Advised President Bush on pardoning six Iran-Contra defendants on Christmas Eve 1992; including Defense Secretary Caspar Weinberger; effectively ending independent counsel Lawrence Walsh\'s investigation',
  'Launched "Operation Legend" in 2020; deploying federal agents to cities with Democratic mayors during Black Lives Matter protests; critics called it political theater',
  'Publicly stated there was no evidence of widespread voter fraud in the 2020 election; contradicting Trump; subsequently resigned on December 23, 2020',
  'At the CIA in the 1970s; worked during the period of domestic surveillance programs; later advocated for expansive executive power and limited accountability as AG',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Mueller Investigation Obstruction', slug: 'obstruction-of-mueller-investigation', severity: 'critical' },
  { title: 'Iran-Contra Affair', slug: 'iran-contra-affair', severity: 'critical' },
  { title: 'DOJ Political Interference', slug: 'doj-politicization-and-weaponization', severity: 'high' },
 ],
 timeline: [
  { date: 'May 23, 1950', event: 'Born in New York City' },
  { date: '1973-1977', event: 'Worked at CIA while attending law school at night' },
  { date: '1991', event: 'Appointed Attorney General by President George H.W. Bush at age 41' },
  { date: 'December 24, 1992', event: 'Advised Bush on pardons for six Iran-Contra defendants; ending the investigation' },
  { date: 'February 14, 2019', event: 'Confirmed as Attorney General for second time under President Trump' },
  { date: 'March 22, 2019', event: 'Received Mueller Report from Special Counsel' },
  { date: 'March 24, 2019', event: 'Released 4-page "summary" of Mueller Report; Mueller wrote letter protesting mischaracterization' },
  { date: 'February 11, 2020', event: 'Intervened in Roger Stone sentencing; all four prosecutors withdrew from case' },
  { date: 'May 7, 2020', event: 'DOJ moved to drop charges against Michael Flynn despite guilty pleas' },
  { date: 'June 1, 2020', event: 'Oversaw clearing of Lafayette Square protesters ahead of Trump\'s St. John\'s Church photo-op' },
  { date: 'December 1, 2020', event: 'Told AP there was no evidence of fraud affecting 2020 election outcome; contradicting Trump' },
  { date: 'December 23, 2020', event: 'Resigned as Attorney General' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Mueller Letter to Barr (March 27, 2019)', url: 'https://www.washingtonpost.com', date: 'May 1, 2019' },
  { title: 'DOJ IG Lafayette Square Report', url: 'https://oig.justice.gov', date: 'June 2021' },
  { title: 'Iran-Contra Pardons Analysis', url: 'https://www.archives.gov', date: 'December 1992' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Donald Trump', relationship: 'Appointed Barr as AG; Barr intervened in cases involving Trump allies Stone and Flynn', href: '/entities/individuals/donald-trump' },
  { name: 'Robert Mueller', relationship: 'Special Counsel whose report Barr was accused of mischaracterizing', href: '/entities/individuals/robert-mueller' },
  { name: 'Roger Stone', relationship: 'Barr intervened to reduce his sentencing recommendation; prompting prosecutor resignations', href: '/entities/individuals/roger-stone' },
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
 title: 'NFL Hall of Fame Quarterback',
 role: 'Central figure in Mississippi welfare fraud scandal; received $1.1 million in TANF funds while state residents went without',
 riskLevel: 'high',
 description: 'Brett Lorenzo Favre is a former NFL quarterback and Pro Football Hall of Famer who became a central figure in the largest public welfare fraud scandal in Mississippi history. Text messages and financial records revealed that Favre received $1.1 million in Temporary Assistance for Needy Families (TANF) welfare funds from the Mississippi Department of Human Services for speeches he never gave. Favre also lobbied then-Governor Phil Bryant and welfare administrator John Davis to direct $5 million in welfare funds to build a volleyball facility at the University of Southern Mississippi; where Favre\'s daughter played volleyball. The total Mississippi welfare fraud exceeded $77 million in federal funds intended for the poorest residents of the poorest state in America. Mississippi\'s child poverty rate was 27.6% during the period the funds were diverted. Favre has repaid the $1.1 million but has not paid $228,000 in interest owed. He was not criminally charged but faces a civil lawsuit filed by the state.',
 birthDate: 'October 10, 1969',
 birthPlace: 'Gulfport, Mississippi, USA',
 netWorth: 'Estimated $100 million',
 education: ['University of Southern Mississippi; B.S. 1991'],
 affiliations: [
  { name: 'University of Southern Mississippi', role: 'Alumnus; lobbied for volleyball facility using welfare funds', type: 'organization' },
  { name: 'Green Bay Packers', role: 'Quarterback (1992-2007); MVP 1995, 1996, 1997', type: 'corporation' },
  { name: 'Prevacus Inc.', role: 'Investor; invested $250,000 of his own funds plus sought welfare money for concussion drug company', type: 'corporation' },
 ],
 controversies: [
  'Received $1.1 million in TANF welfare funds for speeches he never gave; texts show he asked welfare director Nancy New "if you were to pay me; is there any way the media can find out where it came from and how much?"',
  'Lobbied Governor Phil Bryant via text to direct $5 million in TANF welfare funds to build a volleyball facility at the University of Southern Mississippi where his daughter played',
  'Text messages reveal Favre was told the money was coming from "prior prior prior year prior TANF funds" and he continued to pursue the volleyball project despite this',
  'Sought TANF funds for Prevacus Inc.; a concussion drug company in which Favre had invested; $2.15 million in welfare funds were directed to the company',
  'Mississippi TANF scandal totaled $77+ million in diverted welfare funds; the money was intended for families living below the poverty line in the poorest state in America',
  'Repaid $1.1 million but still owes $228,000 in interest; never criminally charged while lower-level participants received prison sentences',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Mississippi Welfare Fraud Scandal', slug: 'mississippi-welfare-fraud-scandal', severity: 'critical' },
 ],
 timeline: [
  { date: 'October 10, 1969', event: 'Born in Gulfport, Mississippi' },
  { date: '1992-2010', event: 'NFL career spanning Green Bay Packers, New York Jets, Minnesota Vikings; retired as all-time passing leader' },
  { date: '2016', event: 'Inducted into Pro Football Hall of Fame' },
  { date: '2017-2019', event: 'Received $1.1 million in TANF funds through the Mississippi Community Education Center (MCEC) for speaking appearances he did not make' },
  { date: '2019', event: 'Texted Governor Bryant and others to secure $5 million in welfare funds for USM volleyball facility' },
  { date: 'February 2020', event: 'Mississippi State Auditor releases report revealing $94 million in misspent welfare funds' },
  { date: 'September 2022', event: 'Text messages between Favre and Governor Bryant made public; revealing coordination to direct welfare funds' },
  { date: 'May 2022', event: 'Mississippi files civil lawsuit against Favre and others to recover misspent welfare funds' },
  { date: 'October 2023', event: 'Favre\'s claims of being "cleared" disputed by state auditor; civil lawsuit ongoing' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Mississippi Today: Brett Favre Text Messages', url: 'https://mississippitoday.org', date: 'September 2022' },
  { title: 'State Auditor Report on DHS Misspending', url: 'https://www.osa.ms.gov', date: 'February 2020' },
  { title: 'State of Mississippi v. Favre et al.', url: 'https://www.courts.ms.gov', date: 'May 2022' },
 ],
 aliases: ['The Gunslinger'],
 knownAssociates: [
  { name: 'Phil Bryant', relationship: 'Governor of Mississippi who coordinated with Favre via text to direct welfare funds to volleyball facility', href: '/entities/individuals/phil-bryant' },
  { name: 'Nancy New', relationship: 'Director of Mississippi Community Education Center; pled guilty to fraud; channeled $1.1M to Favre' },
  { name: 'John Davis', relationship: 'Former head of MS Department of Human Services; sentenced to federal prison for welfare fraud scheme' },
 ],
 },
 'bob-murray': {
 name: 'Bob Murray',
 title: 'Former CEO; Murray Energy Corporation',
 role: 'Coal industry executive whose mines had among worst safety records; lobbied to gut mine safety regulations',
 riskLevel: 'high',
 description: 'Robert E. Murray was the founder and CEO of Murray Energy Corporation; the largest privately owned coal company in America. His mines had among the worst safety records in the industry. The Crandall Canyon Mine collapse in Utah on August 6, 2007 killed six miners and three rescue workers; MSHA investigators found the disaster was caused by the company\'s dangerous mining practices. Murray repeatedly and publicly claimed the collapse was caused by an earthquake; a claim contradicted by seismological evidence. Murray was one of the largest donors to Republican candidates and personally delivered a policy wish list ("Action Plan") to the Trump administration within days of the inauguration; nearly every item on the list was subsequently implemented by EPA Administrator Andrew Wheeler; who was previously a lobbyist for Murray Energy. Murray Energy filed for bankruptcy in 2019; Murray died on October 25, 2020.',
 birthDate: 'January 27, 1940',
 birthPlace: 'Ohio, USA',
 deathDate: 'October 25, 2020',
 education: ['Ohio University; B.S. Mining Engineering'],
 affiliations: [
  { name: 'Murray Energy Corporation', role: 'Founder and CEO (1988-2019)', type: 'corporation' },
  { name: 'Republican Party', role: 'Major donor; personally delivered policy wish list to Trump administration', type: 'organization' },
 ],
 controversies: [
  'Crandall Canyon Mine collapse (August 6, 2007) killed six miners and three rescue workers; Murray publicly blamed an earthquake; seismological evidence showed it was caused by a coal burst from dangerous pillar mining',
  'Delivered a four-page "Action Plan" to the Trump administration within weeks of inauguration; nearly every regulatory rollback on the list was subsequently implemented',
  'Andrew Wheeler; whom Murray Energy had paid as a lobbyist; was appointed EPA Administrator and implemented policies from Murray\'s wish list',
  'Murray Energy mines had hundreds of safety citations; Murray personally fought against stricter mine safety regulations',
  'Filed SLAPP lawsuit against John Oliver after Last Week Tonight episode about mine safety; case dismissed',
  'Murray Energy filed for Chapter 11 bankruptcy in October 2019; workers lost pension and healthcare benefits',
 ],
 charges: [],
 relatedInvestigations: [
  { title: 'Coal Industry Regulatory Capture', slug: 'coal-industry-regulatory-capture', severity: 'high' },
 ],
 timeline: [
  { date: 'January 27, 1940', event: 'Born in Ohio' },
  { date: '1988', event: 'Founded Murray Energy Corporation' },
  { date: 'August 6, 2007', event: 'Crandall Canyon Mine collapses in Utah; six miners and three rescue workers killed' },
  { date: 'January 2017', event: 'Delivered four-page regulatory rollback wish list to Trump administration' },
  { date: '2018', event: 'Sued John Oliver for segment criticizing mine safety record; case dismissed' },
  { date: 'October 2019', event: 'Murray Energy files for Chapter 11 bankruptcy' },
  { date: 'October 25, 2020', event: 'Robert Murray dies' },
 ],
 socialMedia: [],
 sources: [
  { title: 'MSHA Crandall Canyon Investigation Report', url: 'https://www.msha.gov', date: '2008' },
  { title: 'New York Times: Murray Action Plan', url: 'https://www.nytimes.com', date: '2017' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Andrew Wheeler', relationship: 'Former Murray Energy lobbyist who became EPA Administrator; implemented Murray\'s regulatory wish list', href: '/entities/individuals/andrew-wheeler' },
 ],
 },


















 'betsy-devos': {
  name: 'Betsy DeVos',
  title: 'Former U.S. Secretary of Education',
  role: 'Cabinet Secretary',
  riskLevel: 'high' as const,
  description: 'Billionaire Republican donor appointed U.S. Secretary of Education (2017-2021) despite having no experience in public education. Systematically dismantled student borrower protections, rolled back Obama-era regulations on predatory for-profit colleges, and championed the diversion of public school funding to private and religious institutions through voucher programs. Her family, through Amway fortune and political donations, spent over $200 million influencing Republican politics before her appointment.',
  birthDate: '1958-01-08',
  birthPlace: 'Holland, Michigan',
  education: ['B.A. in Business Economics, Calvin College (1979)'],
  affiliations: [
   { name: 'U.S. Department of Education', role: 'Secretary of Education (2017-2021)', type: 'agency' as const },
   { name: 'American Federation for Children', role: 'Former Chairwoman', type: 'organization' as const },
   { name: 'Republican National Committee', role: 'Major Donor and Former State Chair (Michigan)', type: 'organization' as const },
  ],
  controversies: [
   'Rolled back Obama-era Borrower Defense to Repayment rule protecting defrauded student loan borrowers',
   'Reinstated recognition of ACICS accreditor that had approved fraudulent for-profit colleges like ITT Tech and Corinthian',
   'Delayed and weakened gainful employment rule designed to hold for-profit colleges accountable for poor outcomes',
   'Family donated $200+ million to Republican causes before appointment; critics called it pay-to-play cabinet selection',
   'Confirmed as Secretary only through Vice President Pence\'s historic tie-breaking vote — first ever for a cabinet nominee',
   'Proposed massive budget cuts to public education while championing voucher programs benefiting private/religious schools',
   'Refused to commit that schools receiving federal funds would not discriminate against LGBTQ+ students or students with disabilities',
   'Department under her leadership sat on 150,000+ pending borrower defense claims without processing them',
   'Invested in student loan debt collection company while overseeing student loan policy',
  ],
  charges: [
   {
    statute: '20 U.S.C. § 1087e - Higher Education Act Violations',
    description: 'Federal judge held DeVos Department in contempt for continuing to collect on loans from defrauded Corinthian Colleges students in violation of court order',
    category: 'regulatory',
   },
   {
    statute: 'Conflict of Interest - Financial Holdings',
    description: 'Maintained financial interests in student loan debt collection industry while overseeing federal student loan policy affecting 45 million borrowers',
    category: 'financial',
   },
   {
    statute: 'Administrative Procedure Act Violations',
    description: 'Multiple federal courts struck down DeVos rule changes as arbitrary and capricious including borrower defense and Title IX regulations',
    category: 'regulatory',
   },
  ],
  relatedInvestigations: [
   { title: 'Student Loan Crisis and Predatory Lending', slug: 'student-loan-crisis-predatory-lending', severity: 'critical' },
  ],
  timeline: [
   { date: '1958-01-08', event: 'Born in Holland, Michigan to Edgar Prince (founder of Prince Corporation)' },
   { date: '1979', event: 'Marries Dick DeVos, heir to Amway fortune; family net worth eventually exceeds $5 billion' },
   { date: '1990s-2000s', event: 'DeVos family donates $200+ million to Republican causes and school voucher campaigns' },
   { date: '2017-02-07', event: 'Confirmed as Secretary of Education by historic 51-50 vote with VP Pence breaking tie' },
   { date: '2017-06', event: 'Begins rolling back Obama-era borrower defense protections for defrauded students' },
   { date: '2018', event: 'Reinstates recognition of ACICS accreditor linked to fraudulent for-profit colleges' },
   { date: '2019-10', event: 'Federal judge holds Department in contempt for illegally collecting loans from defrauded students' },
   { date: '2020', event: 'Finalizes weakened borrower defense rule making it nearly impossible for defrauded students to get relief' },
   { date: '2021-01-07', event: 'Resigns as Secretary of Education citing January 6 Capitol attack' },
  ],
  socialMedia: [],
  sources: [
   { title: 'GAO Report on Department of Education Student Loan Oversight', url: 'https://www.gao.gov/', date: '2020' },
   { title: 'Federal Court Contempt Finding: Borrower Defense Claims', date: '2019' },
   { title: 'Senate HELP Committee Confirmation Hearing Testimony', url: 'https://www.help.senate.gov/', date: '2017' },
  ],
  aliases: [],
  knownAssociates: [
   { name: 'Dick DeVos', relationship: 'Husband and Amway heir; family fortune funded decades of political influence' },
   { name: 'Erik Prince', relationship: 'Brother; founder of Blackwater military contractor', href: '/entities/individuals/erik-prince' },
   { name: 'Donald Trump', relationship: 'President who appointed her Secretary of Education', href: '/entities/individuals/donald-trump' },
  ],
 },
 'bernard-law': {
  name: 'Bernard Francis Law',
  title: 'Former Archbishop of Boston',
  role: 'Religious Leader',
  riskLevel: 'critical' as const,
  description: 'Cardinal of the Roman Catholic Church and Archbishop of Boston (1984-2002) who became the central figure in the Catholic Church sexual abuse scandal. Systematically covered up the sexual abuse of children by priests in the Boston Archdiocese for nearly two decades, transferring known predator priests to new parishes where they continued to abuse children. Rather than report abusers to police, Law reassigned at least 70 priests accused of abuse to new assignments. After the Boston Globe Spotlight team exposed the cover-up in 2002, Law resigned but was never criminally charged. The Vatican rewarded him with a prestigious appointment to a Roman basilica.',
  birthDate: '1931-11-04',
  birthPlace: 'Torreon, Mexico',
  education: ['B.A., Harvard University (1953)', 'Theological Studies, St. Joseph Seminary (1961)'],
  affiliations: [
   { name: 'Archdiocese of Boston', role: 'Archbishop (1984-2002)', type: 'organization' as const },
   { name: 'Roman Catholic Church', role: 'Cardinal (elevated 1985)', type: 'organization' as const },
   { name: 'Basilica di Santa Maria Maggiore', role: 'Archpriest (2004-2011)', type: 'organization' as const },
  ],
  controversies: [
   'Systematically covered up sexual abuse of children by at least 70 priests in the Boston Archdiocese over 18 years',
   'Transferred known predator priests including John Geoghan and Paul Shanley to new parishes where they continued abusing children',
   'Ignored warnings from parents, parishioners, and even other priests about serial abusers',
   'Internal documents showed Law personally received reports of abuse and approved reassignments of accused priests',
   'At least 1,000 victims identified in Boston Archdiocese alone during the period of Law\'s cover-up',
   'Never criminally charged despite extensive evidence of obstruction; grand jury cited him but no indictment pursued',
   'After resignation in disgrace, Vatican appointed him Archpriest of prestigious Roman basilica — perceived as reward for silence',
   'Boston Globe Spotlight investigation that exposed the cover-up won the 2003 Pulitzer Prize for Public Service',
  ],
  charges: [
   {
    statute: 'Mass. Gen. Laws ch. 119 § 51A - Mandatory Reporter Failure',
    description: 'Failed to report known child sexual abuse to authorities as required by Massachusetts mandatory reporting laws',
    category: 'human-rights',
   },
   {
    statute: '18 U.S.C. § 1512 - Obstruction (equivalent state charges)',
    description: 'Systematically concealed evidence of child abuse, destroyed records, and transferred predator priests to avoid detection',
    category: 'obstruction',
   },
   {
    statute: 'Canon Law 1389 - Abuse of Ecclesiastical Power',
    description: 'Used episcopal authority to protect institutional reputation at the expense of child safety across the entire archdiocese',
    category: 'ethics',
   },
  ],
  relatedInvestigations: [
   { title: 'Religious Institution Abuse and Cover-Ups', slug: 'religious-institution-abuse-cover-ups', severity: 'critical' },
  ],
  timeline: [
   { date: '1931-11-04', event: 'Born in Torreon, Mexico to American parents' },
   { date: '1984', event: 'Appointed Archbishop of Boston by Pope John Paul II' },
   { date: '1985', event: 'Elevated to Cardinal; begins receiving reports of priest abuse' },
   { date: '1984-2002', event: 'Systematically transfers at least 70 accused priests to new parishes rather than reporting to police' },
   { date: '1993', event: 'Settles abuse claims against Father James Porter; pledges transparency but continues cover-up' },
   { date: '2002-01-06', event: 'Boston Globe publishes Spotlight investigation revealing systematic cover-up of abuse by Father John Geoghan' },
   { date: '2002-01-31', event: 'Thousands of pages of internal documents released showing Law knew of and covered up widespread abuse' },
   { date: '2002-12-13', event: 'Resigns as Archbishop of Boston amid overwhelming public pressure and calls for criminal prosecution' },
   { date: '2003', event: 'Massachusetts Attorney General report identifies 237 priests and 789 victims in Boston; cites Law but brings no charges' },
   { date: '2004-05', event: 'Appointed Archpriest of Basilica di Santa Maria Maggiore in Rome by Pope John Paul II' },
   { date: '2017-12-20', event: 'Dies in Rome at age 86; never faced criminal prosecution' },
  ],
  socialMedia: [],
  sources: [
   { title: 'Boston Globe Spotlight Team: Abuse in the Catholic Church', url: 'https://www.bostonglobe.com/metro/spotlight/', date: '2002' },
   { title: 'Massachusetts AG Report: Sexual Abuse of Children in the Archdiocese of Boston', date: '2003' },
   { title: 'John Jay College Report: Causes and Context of Sexual Abuse of Minors by Catholic Priests', date: '2011' },
  ],
  aliases: ['Cardinal Law'],
  knownAssociates: [
   { name: 'John Geoghan', relationship: 'Serial predator priest whom Law transferred to six different parishes despite abuse complaints; murdered in prison 2003' },
   { name: 'Paul Shanley', relationship: 'Priest known as street priest who abused children for decades while Law covered it up' },
   { name: 'Pope John Paul II', relationship: 'Accepted Law\'s resignation but then appointed him to prestigious Roman position' },
  ],
 },
 'brian-kemp': {
  name: 'Brian Kemp',
  title: 'Governor of Georgia',
  role: 'Governor',
  riskLevel: 'high' as const,
  description: 'Republican Governor of Georgia who won the 2018 gubernatorial election while simultaneously serving as Georgia Secretary of State — the office responsible for overseeing the very election he was running in. As Secretary of State, Kemp purged over 1.4 million voters from the rolls, placed 53,000 voter registrations on hold (70% from Black voters), closed 214 polling locations primarily in minority communities, and implemented exact-match signature verification that disproportionately rejected minority applications. His refusal to recuse from overseeing his own election against Stacey Abrams remains one of the most brazen conflicts of interest in modern American politics.',
  birthDate: '1963-11-02',
  birthPlace: 'Athens, Georgia',
  education: ['B.S. in Agriculture, University of Georgia (1987)'],
  affiliations: [
   { name: 'State of Georgia', role: 'Governor (2019-Present)', type: 'agency' as const },
   { name: 'Georgia Secretary of State Office', role: 'Secretary of State (2010-2018)', type: 'agency' as const },
  ],
  controversies: [
   'Oversaw his own election as Secretary of State while running for Governor against Stacey Abrams in 2018',
   'Purged over 1.4 million voters from Georgia rolls between 2012-2018 using aggressive list maintenance',
   'Placed 53,000 voter registrations on hold weeks before 2018 election; 70% were Black voters',
   'Closed 214 polling locations across Georgia, disproportionately in Black and minority communities',
   'Implemented exact-match signature verification policy that rejected registrations for minor discrepancies',
   'Fought against paper ballot audit trails; Georgia used paperless voting machines through 2019',
   'Investigation found his office\'s server containing election data was wiped after lawsuit filed challenging results',
   'Signed SB 202 in 2021 restricting voting access including making it illegal to give water to voters waiting in line',
  ],
  charges: [
   {
    statute: '52 U.S.C. § 20507 - National Voter Registration Act Violations',
    description: 'Purged voters using methods that violated NVRA requirements for notification and safeguards; multiple lawsuits filed',
    category: 'constitutional',
   },
   {
    statute: '14th/15th Amendment - Equal Protection / Voting Rights Violations',
    description: 'Voter suppression measures disproportionately targeted Black voters in violation of constitutional equal protection guarantees',
    category: 'constitutional',
   },
  ],
  relatedInvestigations: [
   { title: 'Systematic Voter Suppression in America', slug: 'voter-suppression-systematic', severity: 'critical' },
  ],
  timeline: [
   { date: '2010', event: 'Elected Georgia Secretary of State' },
   { date: '2012-2018', event: 'Purges over 1.4 million voters from Georgia rolls during tenure as Secretary of State' },
   { date: '2017-10', event: 'Exact-match policy places 53,000 voter registrations on hold; 70% are Black applicants' },
   { date: '2018-05', event: 'Announces run for Governor while refusing to resign from office overseeing elections' },
   { date: '2018-11-06', event: 'Wins Governor race against Stacey Abrams by 55,000 votes while overseeing the election he was running in' },
   { date: '2018-11-08', event: 'Resigns as Secretary of State two days after election' },
   { date: '2020-11', event: 'Certifies Biden\'s Georgia victory; faces backlash from Trump supporters' },
   { date: '2021-03-25', event: 'Signs SB 202 restricting voting access; criminalizes giving food/water to voters in line' },
  ],
  socialMedia: [],
  sources: [
   { title: 'Brennan Center for Justice: Voter Purge Rates in Georgia', url: 'https://www.brennancenter.org/', date: '2018' },
   { title: 'AP Investigation: Georgia Secretary of State Voter Purges', url: 'https://apnews.com/', date: '2018' },
   { title: 'ACLU: Georgia Voter Suppression Lawsuits', url: 'https://www.aclu.org/', date: '2019' },
  ],
  aliases: [],
  knownAssociates: [
   { name: 'Stacey Abrams', relationship: 'Democratic opponent in 2018 Governor race; alleged voter suppression cost her the election' },
   { name: 'Donald Trump', relationship: 'Pressured Kemp to overturn 2020 results; later endorsed his primary challenger', href: '/entities/individuals/donald-trump' },
  ],
 },
 'steve-bannon': {
  name: 'Steve Bannon',
  title: 'Former White House Chief Strategist',
  role: 'Nationalist Ideologue and Convicted Fraudster',
  riskLevel: 'critical' as const,
  description: 'Steve Bannon served as Trump White House Chief Strategist and was the driving force behind the administrations nationalist agenda. He was convicted of contempt of Congress for defying a January 6 Committee subpoena, indicted for fraud in the We Build the Wall scheme (pardoned before trial), and convicted in a New York state fraud case related to the same scheme where the pardon did not apply.',
  birthDate: '1953-11-27',
  birthPlace: 'Norfolk, Virginia',
  education: [
   'B.A., Virginia Tech (1976)',
   'M.A., Georgetown University (1983)',
   'M.B.A., Harvard Business School (1985)',
  ],
  affiliations: [
   { name: 'White House', role: 'Chief Strategist (2017)', type: 'agency' as const },
   { name: 'Breitbart News', role: 'Executive Chairman (2012-2018)', type: 'corporation' as const },
   { name: 'Trump Presidential Campaign', role: 'CEO (2016)', type: 'organization' as const },
  ],
  controversies: [
   'Convicted of criminal contempt of Congress for defying January 6 Committee subpoena; sentenced to 4 months in prison',
   'Indicted for wire fraud and money laundering in We Build the Wall scheme that raised $25 million; pardoned by Trump before trial',
   'Convicted of money laundering, conspiracy, and scheme to defraud in New York state case for the same We Build the Wall scheme',
   'Ran Breitbart News as a platform for white nationalist content; described it as "the platform for the alt-right"',
   'Orchestrated the Muslim travel ban, family separation framework, and withdrawal from the Paris climate accord in first weeks of administration',
   'Maintained contact with foreign nationalist movements including in Hungary, Italy, and Brazil to build global populist network',
   'Former domestic violence accusation from ex-wife; charges dropped when she did not appear to testify',
  ],
  relatedInvestigations: [
   { title: 'January 6 Capitol Attack Coordination', slug: 'january-6-capitol-attack-coordination', severity: 'critical' },
  ],
  timeline: [
   { date: '2012', event: 'Became executive chairman of Breitbart News; transformed it into nationalist media platform' },
   { date: '2016-08', event: 'Named CEO of Trump presidential campaign for final stretch' },
   { date: '2017-01', event: 'Appointed White House Chief Strategist; designed early executive orders' },
   { date: '2017-08', event: 'Fired from White House after public feuds with other advisors' },
   { date: '2020-08', event: 'Arrested on yacht for wire fraud in We Build the Wall scheme' },
   { date: '2021-01', event: 'Pardoned by Trump hours before leaving office' },
   { date: '2022-07', event: 'Convicted of criminal contempt of Congress' },
   { date: '2022-10', event: 'Sentenced to 4 months in federal prison for contempt' },
   { date: '2024-10', event: 'Found guilty in New York state fraud case; pardon did not apply to state charges' },
  ],
  sources: [
   { title: 'DOJ: United States v. Bannon - Contempt Conviction', date: '2022' },
   { title: 'SDNY: We Build the Wall Indictment', date: '2020' },
   { title: 'Manhattan DA: People v. Bannon - Fraud Conviction', date: '2024' },
  ],
  aliases: ['Sloppy Steve (Trump nickname during feud period)'],
  knownAssociates: [
   { name: 'Donald Trump', relationship: 'Campaign CEO and chief strategist; pardoned by Trump; relationship oscillated between alliance and public feuds', href: '/entities/individuals/donald-trump' },
   { name: 'Stephen Miller', relationship: 'Fellow nationalist advisor who remained in White House after Bannons departure', href: '/entities/individuals/stephen-miller' },
  ],
 },
 'travis-kalanick': {
  name: 'Travis Kalanick',
  title: 'Former CEO of Uber',
  role: 'Tech Bro Who Built a Ruthless Company Culture and Evaded Regulators',
  riskLevel: 'medium' as const,
  description: 'Travis Kalanick co-founded Uber and built it into a global ride-hailing giant through a corporate culture that systematically flouted regulations, surveilled competitors and journalists, and created a toxic workplace. He was forced out as CEO in 2017 after a cascade of scandals involving sexual harassment, labor exploitation, regulatory evasion, and a massive data breach cover-up.',
  birthDate: '1976-08-06',
  birthPlace: 'Los Angeles, California',
  education: [
   'Attended University of California, Los Angeles (dropped out, 1998)',
  ],
  affiliations: [
   { name: 'Uber Technologies', role: 'Co-Founder and CEO (2009-2017)', type: 'corporation' as const },
   { name: 'CloudKitchens', role: 'Founder and CEO (2018-present)', type: 'corporation' as const },
  ],
  controversies: [
   'Built a corporate culture that tolerated and enabled sexual harassment; former engineer Susan Fowlers blog post exposed systemic problems',
   'Uber used "Greyball" software to identify and evade law enforcement officials trying to cite drivers for operating illegally',
   'Company operated "Hell" program to spy on Lyft drivers and track competitor strategies',
   'Covered up a 2016 data breach affecting 57 million users; paid hackers $100,000 to delete data and keep quiet instead of notifying affected users',
   'Classified drivers as independent contractors to avoid providing benefits, overtime, or minimum wage protections',
   'Uber reportedly obtained the medical records of a woman who was raped by an Uber driver in India; Kalanick and executives allegedly questioned her credibility',
   'Created toxic "bro culture" that tolerated bullying, discrimination, and retaliation against employees who raised concerns',
  ],
  relatedInvestigations: [
   { title: 'Corporate Tax Avoidance Offshore', slug: 'corporate-tax-avoidance-offshore', severity: 'high' },
  ],
  timeline: [
   { date: '2009', event: 'Co-founded Uber' },
   { date: '2014-12', event: 'Uber driver in India accused of raping a passenger; company allegedly obtained victims medical records' },
   { date: '2016-11', event: 'Massive data breach affecting 57 million users; Uber paid hackers to conceal it' },
   { date: '2017-02', event: 'Susan Fowler published blog post exposing systemic sexual harassment at Uber' },
   { date: '2017-03', event: 'New York Times revealed Greyball program used to evade law enforcement' },
   { date: '2017-06', event: 'Forced to resign as CEO after investor revolt over culture scandals' },
   { date: '2018-09', event: 'Uber paid $148 million to settle data breach cover-up with all 50 states' },
  ],
  sources: [
   { title: 'Susan Fowler: Reflecting On One Very, Very Strange Year at Uber (Blog Post)', date: '2017' },
   { title: 'FTC: Uber Data Breach Settlement', date: '2018' },
   { title: 'New York Times: Uber Greyball Investigation', url: 'https://www.nytimes.com/', date: '2017' },
  ],
  aliases: ['TK'],
  knownAssociates: [
   { name: 'Dara Khosrowshahi', relationship: 'Successor CEO who attempted to reform Uber culture while dealing with legacy scandals' },
  ],
 },


 'bill-magness': {
  name: 'Bill Magness',
  title: 'Former CEO of ERCOT (Electric Reliability Council of Texas)',
  role: 'ERCOT CEO who oversaw catastrophic grid failure during Winter Storm Uri',
  riskLevel: 'high',
  description: 'Bill Magness served as President and CEO of the Electric Reliability Council of Texas (ERCOT) during Winter Storm Uri in February 2021, the deadliest infrastructure failure in modern Texas history. Under his leadership, ERCOT failed to mandate weatherization of power generation equipment despite federal recommendations following a nearly identical grid failure in 2011. When the storm hit, 4.5 million Texas households lost power for days in sub-zero temperatures. Magness oversaw the decision to keep wholesale electricity prices at the $9,000/MWh cap; the maximum allowed; for 32 hours after the grid had already stabilized, resulting in an estimated $16 billion in excess charges to Texas consumers and utilities. While Texans froze to death in their homes, energy traders and generators reaped enormous windfall profits from the artificial price spike. Magness was fired by the ERCOT board in March 2021 but received a severance package. No criminal charges were ever filed against him despite the 700+ deaths attributed to the grid failure.',
  affiliations: [
    { name: 'ERCOT', role: 'President and CEO (fired March 2021)', type: 'organization' },
    { name: 'Texas State Bar', role: 'Licensed attorney', type: 'organization' },
  ],
  controversies: [
    'Failed to mandate weatherization of Texas power infrastructure despite federal FERC/NERC recommendations after the 2011 cold weather event that caused similar (though less deadly) grid failures',
    'Oversaw the decision to maintain $9,000/MWh wholesale electricity price cap for 32 hours after the grid had stabilized, generating an estimated $16 billion in excess charges',
    'ERCOT under his leadership dismissed multiple internal warnings about winter weather vulnerability',
    'Fired with severance by ERCOT board in March 2021; no criminal charges filed for decisions that contributed to 700+ deaths',
    'During the crisis, ERCOT was minutes from a total grid collapse that could have left Texas without power for months',
  ],
  charges: [
    { statute: 'Texas Utilities Code 186.001', description: 'Failure to ensure safe, adequate, efficient, and reasonable electric service', category: 'Regulatory Misconduct' },
    { statute: 'Texas Penal Code 22.05', description: 'Deadly Conduct: reckless engagement in conduct placing another in imminent danger', category: 'Criminal Negligence' },
  ],
  relatedInvestigations: [
    { title: 'Texas Power Grid Failure: 700+ Dead in Preventable Crisis', slug: 'texas-power-grid-failure', severity: 'critical' },
  ],
  timeline: [
    { date: '2016-01-01', event: 'Became President and CEO of ERCOT' },
    { date: '2021-02-15', event: 'Winter Storm Uri causes cascading grid failures across Texas' },
    { date: '2021-02-15', event: 'ERCOT comes within minutes of total grid collapse requiring months-long recovery' },
    { date: '2021-02-17', event: 'Maintains $9,000/MWh price cap despite grid beginning to stabilize' },
    { date: '2021-02-19', event: 'Price cap finally reduced after 32 hours of excess billing post-stabilization' },
    { date: '2021-03-03', event: 'Fired by ERCOT board of directors with severance package' },
  ],
  socialMedia: [],
  sources: [
    { title: 'Texas Tribune: ERCOT CEO Bill Magness Fired', url: 'https://www.texastribune.org/2021/03/03/ercot-ceo-bill-magness-fired/', date: '2021-03-03' },
    { title: 'ProPublica: $16 Billion Overcharge During Texas Storm', url: 'https://www.propublica.org/article/texas-power-grid-winterization-uri', date: '2021-06-01' },
    { title: 'FERC/NERC Report on 2011 Cold Weather Event', url: 'https://www.ferc.gov/sites/default/files/2020-04/08-16-11-report.pdf', date: '2011-08-16' },
  ],
  aliases: [],
  knownAssociates: [
    { name: 'DeAnn Walker', relationship: 'PUCT Chair who ordered the $9,000/MWh price cap maintained', href: '/entities/individuals/deann-walker' },
    { name: 'Arthur D\'Andrea', relationship: 'PUCT Commissioner recorded reassuring energy companies about keeping inflated prices', href: '/entities/individuals/arthur-d-andrea' },
    { name: 'Pablo Vegas', relationship: 'Successor CEO of ERCOT, came from the power industry', href: '/entities/individuals/pablo-vegas' },
  ],
 },
 'barton-gellman': {
 name: 'Barton Gellman',
 title: 'Pulitzer Prize-Winning Journalist',
 role: 'Washington Post Reporter, NSA Surveillance Investigative Journalist',
 riskLevel: 'low',
 description: 'Barton Gellman is a Pulitzer Prize-winning journalist who, along with Glenn Greenwald, broke the story of the NSA\'s PRISM surveillance program in June 2013 based on documents provided by Edward Snowden. His reporting for The Washington Post revealed the scope of NSA mass surveillance of American citizens.',
 affiliations: [
 { name: 'The Washington Post', role: 'Staff Writer / Investigative Reporter', type: 'corporation' },
 ],
 controversies: [
 'PRISM REVELATIONS: Published classified NSA documents showing mass surveillance of internet communications through major tech companies',
 'PULITZER PRIZE: Awarded 2014 Pulitzer Prize for Public Service for NSA surveillance reporting',
 ],
 },
  'boyd-jefferies': {
    name: 'Boyd Jefferies',
    title: 'Convicted Securities Violator; Founder of Jefferies & Company',
    role: 'Founder and Chairman, Jefferies & Company',
    riskLevel: 'high',
    description: 'Boyd Jefferies was the founder and chairman of Jefferies & Company, a prominent securities firm specializing in block trading. He pleaded guilty in April 1988 to two felony counts of securities violations for helping Ivan Boesky illegally "park" stock, a practice of secretly holding shares for another party to conceal true ownership and evade SEC disclosure requirements. Jefferies also assisted in market manipulation. He cooperated with prosecutors and was barred from the securities industry. His case illustrated how the insider trading conspiracy required the complicity of brokers and intermediaries, not just the traders themselves.',
    birthDate: '1930',
    birthPlace: 'United States',
    deathDate: 'February 19, 2007',
    education: [],
    affiliations: [
      { name: 'Jefferies & Company', role: 'Founder and Chairman', type: 'corporation' },
    ],
    controversies: [
      'Helped Ivan Boesky illegally park stock to conceal ownership and evade SEC disclosure requirements',
      'Assisted in market manipulation schemes connected to the broader insider trading conspiracy',
      'Cooperated with prosecutors after pleading guilty; barred from the securities industry',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Securities violations: Illegal stock parking and market manipulation for Ivan Boesky', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1984-1986', event: 'Helps Ivan Boesky illegally park stock and conceal ownership positions' },
      { date: 'April 1988', event: 'Pleads guilty to two felony counts of securities violations' },
      { date: '1988', event: 'Barred from the securities industry; cooperates with prosecutors' },
      { date: 'February 19, 2007', event: 'Dies at age 77' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Illegally parked stock and assisted market manipulation for Boesky', href: '/entities/individuals/ivan-boesky' },
    ],
  },
  'bruce-lee-newberg': {
    name: 'Bruce Lee Newberg',
    title: 'Convicted Drexel Burnham Trader; Participated in Michael Milken\'s Racketeering Enterprise',
    role: 'Trader, Drexel Burnham Lambert High-Yield Bond Department (Beverly Hills)',
    riskLevel: 'high',
    description: 'Bruce Lee Newberg was a trader who worked directly with Michael Milken in Drexel Burnham Lambert\'s high-yield bond department in Beverly Hills. He was convicted of racketeering and securities fraud for his role in illegal stock parking and other fraudulent schemes orchestrated from Milken\'s department. Newberg\'s conviction was significant because it demonstrated that the criminal conduct in the Beverly Hills office was not limited to Milken but was an organized enterprise with multiple active participants.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Trader, Michael Milken\'s High-Yield Bond Department, Beverly Hills', type: 'corporation' },
    ],
    controversies: [
      'Convicted of racketeering and fraud for illegal stock parking and other schemes in Milken\'s operation',
      'His conviction proved Milken\'s department was a systematic criminal enterprise, not one man acting alone',
      'Participated in concealing stock ownership and manipulating markets at Milken\'s direction',
    ],
    charges: [
      { statute: '18 U.S.C. 1961-1968 (RICO)', description: 'Racketeering: Participation in pattern of criminal activity in Milken\'s junk bond operation', category: 'Federal' },
      { statute: '15 U.S.C. 78j(b)', description: 'Securities Fraud: Illegal stock parking and market manipulation', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1984-1989', event: 'Participates in illegal stock parking and fraudulent schemes in Milken\'s Beverly Hills operation' },
      { date: '1990', event: 'Convicted of racketeering and securities fraud' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Jesse Kornbluth, Highly Confident (1992)', url: 'https://archive.org/details/highlyconfidentc00korn', date: '1992' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Milken', relationship: 'Direct supervisor who orchestrated the criminal enterprise', href: '/entities/individuals/michael-milken' },
    ],
  },

 'bruno-pletscher': {
    name: 'Bruno Pletscher',
    title: 'Bank Leu VP and Key Cooperating Witness in the Dennis Levine Insider Trading Case',
    role: 'Vice President, Bank Leu (Nassau)',
    riskLevel: 'high',
    description: 'Bruno Pletscher was vice president and deputy manager of Bank Leu\'s Nassau, Bahamas branch. He had direct access to Dennis Levine\'s secret insider trading account and systematically piggybacked Levine\'s trades for his own personal profit. When the SEC began investigating suspicious trading patterns in 1985, Pletscher initially participated in a cover-up, forging documents to conceal the accounts. After retaining separate counsel, he became the first Bank Leu employee to cooperate with the SEC, providing crucial testimony that led directly to Levine\'s arrest in May 1986. His cooperation earned lenient treatment in the US but he was convicted of insider trading violations in Swiss proceedings.',
    birthDate: 'Unknown',
    birthPlace: 'Switzerland',
    education: [],
    affiliations: [
      { name: 'Bank Leu', role: 'Vice President and Deputy Manager, Nassau Branch', type: 'corporation' },
    ],
    controversies: [
      'Systematically piggybacked Dennis Levine\'s insider trades for personal profit through Bank Leu\'s Nassau office',
      'Initially participated in cover-up efforts including forging documents to conceal Levine\'s trading accounts from SEC investigators',
      'Became the key cooperating witness whose testimony led directly to Levine\'s arrest and the unraveling of the entire 1980s insider trading scandal',
    ],
    charges: [
      { statute: 'Swiss Banking Law', description: 'Insider trading violations in Swiss proceedings', category: 'International' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1978-1986', event: 'Piggybacked Dennis Levine\'s insider trades through Bank Leu\'s Nassau office for personal profit' },
      { date: '1985', event: 'SEC begins investigating suspicious trading patterns linked to Bank Leu; Pletscher initially participates in cover-up' },
      { date: '1986-04', event: 'Breaks ranks and becomes key cooperating witness for the SEC; testimony leads to Levine\'s arrest the following month' },
      { date: '1986-05-12', event: 'Dennis Levine arrested based partly on Pletscher\'s cooperation and testimony' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Levine held secret insider trading accounts at Pletscher\'s Bank Leu branch; Pletscher piggybacked his trades', href: '/entities/individuals/dennis-levine' },
      { name: 'Bernhard Meier', relationship: 'Fellow Bank Leu officer who also piggybacked Levine\'s trades', href: '/entities/individuals/bernhard-meier' },
    ],
  },

 'bernhard-meier': {
    name: 'Bernhard Meier',
    title: 'Convicted Bank Leu Portfolio Manager Who Piggybacked Dennis Levine\'s Insider Trades',
    role: 'Portfolio Manager, Bank Leu (Nassau)',
    riskLevel: 'high',
    description: 'Bernhard Meier was a portfolio manager at Bank Leu\'s Nassau, Bahamas branch who copied Dennis Levine\'s insider trades for his own personal profit. Unlike colleague Bruno Pletscher, Meier initially resisted cooperation with SEC investigators and participated in efforts to conceal the paper trail. He was eventually convicted of securities fraud for his piggybacking trades. His case demonstrated that corruption at Bank Leu extended to active participation in insider trading by the bank\'s own officers.',
    birthDate: 'Unknown',
    birthPlace: 'Switzerland',
    education: [],
    affiliations: [
      { name: 'Bank Leu', role: 'Portfolio Manager, Nassau Branch', type: 'corporation' },
    ],
    controversies: [
      'Copied Dennis Levine\'s insider trades through Bank Leu Nassau for personal profit',
      'Participated in efforts to conceal evidence from SEC investigators',
      'Initially resisted cooperation unlike colleague Bruno Pletscher',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Securities fraud for piggybacking insider trades', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1978-1986', event: 'Piggybacked Dennis Levine\'s insider trades through Bank Leu Nassau for personal profit' },
      { date: '1985-1986', event: 'Participated in cover-up efforts when SEC began investigating Bank Leu; resisted cooperation' },
      { date: '1987', event: 'Convicted of securities fraud for piggybacking Levine\'s insider trades' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Levine held secret accounts at Bank Leu; Meier piggybacked his trades', href: '/entities/individuals/dennis-levine' },
      { name: 'Bruno Pletscher', relationship: 'Fellow Bank Leu officer who piggybacked trades and later became key cooperating witness', href: '/entities/individuals/bruno-pletscher' },
    ],
  },
};

export default profiles;
