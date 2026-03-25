// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'oleg-deripaska': {
 name: 'Oleg Deripaska',
 title: 'Russian Oligarch',
 role: 'Aluminum Magnate; Manafort Associate; Sanctioned by U.S. Treasury',
 riskLevel: 'critical',
 description: 'Oleg Deripaska is a Russian oligarch and founder of RUSAL; the world\'s second-largest aluminum company; and EN+ Group. His net worth was estimated at $28 billion at its peak. Deripaska has deep ties to the Kremlin and to former Trump campaign chairman Paul Manafort; who owed Deripaska approximately $19 million from a failed Ukrainian business venture. In 2016; Manafort offered Deripaska private briefings on the Trump presidential campaign; raising critical questions about whether Russian interests received inside intelligence on U.S. election strategy. The U.S. Treasury sanctioned Deripaska in April 2018 under CAATSA (Countering America\'s Adversaries Through Sanctions Act) for acting on behalf of the Russian government. However; in January 2019; the Treasury controversially lifted sanctions on RUSAL and EN+ Group (though not on Deripaska personally); after intense lobbying and a deal where Deripaska reduced his ownership stake. Critics including Senate Democrats argued this was an insufficient reduction of control and amounted to sanctions relief for a Putin ally. The FBI raided Deripaska\'s properties in Washington D.C. and New York in October 2021 as part of an ongoing investigation. Deripaska was indicted in September 2022 for sanctions evasion; conspiring to have a child born in the U.S. to establish citizenship; and obstructing justice. He has been accused of involvement in organized crime by multiple governments; though he denies all allegations. A 2006 State Department cable described him as "among the 2-3 oligarchs Putin turns to on a regular basis."',
 birthDate: 'January 2, 1968',
 birthPlace: 'Dzerzhinsk, Soviet Union (now Russia)',
 netWorth: '$2.1 billion (2024; down from $28B peak)',
 education: ['Moscow State University, Physics', 'Plekhanov Russian University of Economics'],
 affiliations: [
 { name: 'RUSAL (United Company)', role: 'Founder; former controlling shareholder', type: 'corporation' },
 { name: 'EN+ Group', role: 'Founder; former Chairman', type: 'corporation' },
 { name: 'Basic Element', role: 'Owner (industrial conglomerate)', type: 'corporation' },
 ],
 controversies: [
 'Paul Manafort offered Deripaska private briefings on the 2016 Trump campaign while owing him approximately $19 million from a failed Ukrainian business deal',
 'U.S. Treasury sanctioned Deripaska in April 2018 for acting on behalf of the Russian government; but controversially lifted sanctions on his companies RUSAL and EN+ in January 2019 after aggressive lobbying',
 'FBI raided Deripaska\'s Washington D.C. and New York properties in October 2021',
 'Indicted in September 2022 for sanctions evasion; conspiracy to arrange U.S. birth of child for citizenship; and obstruction of justice',
 'Accused by multiple governments of involvement in organized crime; the 2006 State Department cable described him as one of "2-3 oligarchs Putin turns to on a regular basis"',
 'Spanish prosecutors investigated connections to Russian organized crime leader Zakhar Kalashov',
 'Hired former Senate Majority Leader Bob Dole as a lobbyist to seek U.S. visa approval',
 'Connected to the "aluminum wars" of the 1990s in which rival oligarchs fought for control of Russian industry; with allegations of violence and intimidation',
 ],
 charges: [
 { statute: 'IEEPA (50 U.S.C. § 1705)', description: 'Sanctions evasion (indicted September 2022)', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy (indicted September 2022)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512', description: 'Obstruction of justice (indicted September 2022)', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 2, 1968', event: 'Born in Dzerzhinsk; Soviet Union' },
 { date: '2000', event: 'Founded RUSAL; consolidating Russian aluminum industry' },
 { date: '2006', event: 'State Department cable identifies him as one of Putin\'s key oligarchs' },
 { date: '2016', event: 'Paul Manafort offers Deripaska private briefings on Trump campaign' },
 { date: 'April 2018', event: 'Sanctioned by U.S. Treasury under CAATSA' },
 { date: 'January 2019', event: 'Treasury lifts sanctions on RUSAL and EN+ despite Congressional opposition' },
 { date: 'October 2021', event: 'FBI raids Deripaska\'s properties in Washington D.C. and New York' },
 { date: 'September 2022', event: 'Indicted for sanctions evasion; conspiracy; and obstruction' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: Deripaska Indictment', url: 'https://www.justice.gov/usao-sdny', date: '2022' },
 { title: 'Treasury: CAATSA Sanctions', url: 'https://home.treasury.gov/news/press-releases/sm0338', date: '2018' },
 { title: 'Senate Intelligence Committee Report Vol. 5', url: 'https://www.intelligence.senate.gov/publications', date: '2020' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Paul Manafort', relationship: 'Owed Deripaska $19M; offered private Trump campaign briefings', href: '/entities/individuals/paul-manafort' },
 { name: 'Vladimir Putin', relationship: 'One of Putin\'s closest oligarch allies per State Department', href: '/entities/individuals/vladimir-putin' },
 ],
 },

 'omarosa-manigault-newman': {
 name: 'Omarosa Manigault Newman',
 title: 'Former White House Aide',
 role: 'Trump Apprentice Star Turned White House Advisor Turned Critic',
 riskLevel: 'medium',
 description: 'Omarosa Manigault Newman is a former reality television personality and political aide who served as Assistant to the President and Director of Communications for the White House Office of Public Liaison from January 2017 until her firing in December 2017. She first gained fame as a contestant on Donald Trump\'s "The Apprentice;" appearing on multiple seasons. After being fired from the White House by Chief of Staff John Kelly (she secretly recorded the firing conversation in the White House Situation Room; a major security breach); she turned against Trump and wrote the tell-all book "Unhinged" (2018). Omarosa claimed she had heard a recording of Trump using racial slurs (the N-word) on the set of The Apprentice; though the tape has never been publicly released. She released numerous secret recordings from inside the White House; including conversations with Trump himself; raising serious questions about security protocols. The Trump campaign sued her for $1.5 million for violating a non-disclosure agreement; but a court-appointed arbitrator ruled in her favor. Her trajectory from Trump ally to critic illustrated the pattern of insiders who leave the administration and reveal damaging information; while critics questioned her credibility given her own history of controversy and self-promotion.',
 birthDate: 'February 5, 1974',
 birthPlace: 'Youngstown, Ohio',
 education: ['Central State University, BA', 'Howard University, MA', 'Howard University, PhD (withdrawn)'],
 affiliations: [
 { name: 'White House', role: 'Assistant to the President; Director of Communications for Office of Public Liaison (2017)', type: 'agency' },
 { name: 'The Apprentice (NBC)', role: 'Reality TV Contestant (2004-2013)', type: 'corporation' },
 ],
 controversies: [
 'Secretly recorded conversations inside the White House Situation Room; a severe breach of security protocols',
 'Claimed to have heard recordings of Trump using the N-word on the set of The Apprentice; tape never publicly released',
 'Released multiple secret White House recordings in her book "Unhinged" (2018); including conversations with Trump and John Kelly',
 'Trump campaign sued her for $1.5 million over NDA violation; arbitrator ruled in Omarosa\'s favor',
 'Fired from the White House by Chief of Staff John Kelly in December 2017; recorded the termination conversation',
 'Her credibility was questioned by both Trump allies (who called her disgruntled) and critics (who noted she enthusiastically supported Trump until her firing)',
 'Had been fired from previous government positions; including Clinton White House (removed from four jobs in two years according to reports)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 5, 1974', event: 'Born in Youngstown; Ohio' },
 { date: '2004', event: 'First appeared on Season 1 of The Apprentice' },
 { date: 'January 2017', event: 'Joined Trump White House as Assistant to the President' },
 { date: 'December 2017', event: 'Fired by Chief of Staff John Kelly; secretly recorded the termination in the Situation Room' },
 { date: 'August 2018', event: 'Published "Unhinged" with secret White House recordings; claimed Trump N-word tape exists' },
 { date: '2018', event: 'Trump campaign filed $1.5 million arbitration claim for NDA violation' },
 { date: '2021', event: 'Arbitrator ruled in Omarosa\'s favor; dismissing NDA claim' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NPR: Omarosa White House Recordings', url: 'https://www.npr.org/', date: '2018' },
 { title: 'Washington Post: Omarosa NDA Ruling', url: 'https://www.washingtonpost.com/', date: '2021' },
 ],
 aliases: ['Omarosa'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Former boss on The Apprentice and in the White House; later turned critic', href: '/entities/individuals/donald-trump' },
 { name: 'John Kelly', relationship: 'White House Chief of Staff who fired her; recording leaked', href: '/entities/individuals/john-kelly' },
 ],
 },






 'oliver-north': {
 name: 'Oliver Laurence North',
 title: 'Former NSC Staff, Convicted Iran-Contra Figure',
 role: 'Iran-Contra Operator, Arms Dealer, Pardoned Felon',
 riskLevel: 'high',
 description: 'Oliver North is a former Marine Lieutenant Colonel who became the central figure in the Iran-Contra scandal. He orchestrated the illegal sale of arms to Iran and diversion of proceeds to Nicaraguan Contra rebels in violation of congressional bans. His convictions were overturned on technicality due to immunized testimony. He later became an NRA president and Fox News host, turning treason into a media career.',
 birthDate: 'October 7, 1943',
 birthPlace: 'San Antonio, Texas, USA',
 netWorth: '$5+ million',
 education: ['B.S., United States Naval Academy (1968)'],
 affiliations: [
 { name: 'National Security Council', role: 'Staff Member (1981-1986)', type: 'agency' },
 { name: 'United States Marine Corps', role: 'Lieutenant Colonel (1968-1988)', type: 'agency' },
 { name: 'National Rifle Association', role: 'President (2018-2019)', type: 'organization' },
 { name: 'Fox News', role: 'Host, Contributor (2001-2018)', type: 'corporation' },
 { name: 'Freedom Alliance', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'IRAN-CONTRA SCANDAL: Orchestrated illegal arms sales to Iran, diverted proceeds to Contras in violation of Boland Amendment',
 'ILLEGAL ARMS SALES: Sold 2,500+ TOW missiles and HAWK missiles to Iran (state sponsor of terrorism)',
 'CONTRA FUNDING: Funneled $3.8 million to Nicaraguan rebels despite congressional prohibition',
 'DOCUMENT SHREDDING: Destroyed thousands of documents with secretary Fawn Hall before investigation',
 'CONVICTED FELON: Found guilty of aiding obstruction of Congress, destroying documents, accepting gratuity',
 'CONVICTIONS OVERTURNED: Escaped on technicality because immunized congressional testimony may have influenced trial',
 'REAGAN PROTECTION: Took fall for Reagan administration, testified"I was authorized to do everything I did"',
 'CASH IN OFFICE SAFE: Kept operational funds in office safe for covert operations',
 'NRA PRESIDENT: Led NRA during period of mass shootings, forced out amid internal scandal',
 'PROFITED FROM TREASON: Made millions from books, speeches, and media career after scandal',
 ],
 charges: [
 { statute: '18 U.S.C. § 1505', description: 'Aiding and Abetting Obstruction of Congress (CONVICTED, reversed)', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1001', description: 'Making False Statements (CONVICTED, reversed)', category: 'Federal' },
 { statute: '18 U.S.C. § 641', description: 'Receiving Illegal Gratuity (CONVICTED, reversed)', category: 'Federal' },
 { statute: 'Boland Amendment', description: 'Violation of Congressional Prohibition on Contra Aid', category: 'Federal' },
 { statute: 'Arms Export Control Act', description: 'Illegal Arms Sales to Iran', category: 'Federal' },
 { statute: '18 U.S.C. § 1519', description: 'Destruction of Documents', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Iran-Contra Affair', slug: 'iran-contra', severity: 'critical' },
 { title: 'Arms Trafficking', slug: 'arms-trafficking', severity: 'critical' },
 { title: 'Reagan Administration Crimes', slug: 'reagan-crimes', severity: 'high' },
 { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'high' },
 ],
 timeline: [
 { date: 'October 7, 1943', event: 'Born in San Antonio, Texas' },
 { date: '1968', event: 'Graduates Naval Academy, commissioned in Marines' },
 { date: '1968-1969', event: 'Serves in Vietnam, wounded twice, Silver Star recipient' },
 { date: '1981', event: 'Joins NSC staff under Reagan administration' },
 { date: '1984', event: 'Boland Amendment prohibits aid to Contras' },
 { date: '1985', event: 'Begins arranging arms sales to Iran through Israel' },
 { date: '1985-1986', event: 'Diverts Iran arms sale proceeds to Contra rebels' },
 { date: 'November 1986', event: 'Iran-Contra scandal breaks publicly' },
 { date: 'November 1986', event: 'Shreds thousands of documents with Fawn Hall' },
 { date: 'November 1986', event: 'Fired from NSC by Reagan' },
 { date: 'July 1987', event: 'Televised congressional testimony, becomes folk hero to some' },
 { date: '1988', event: 'Indicted on 16 felony counts' },
 { date: 'May 1989', event: 'Convicted on 3 of 12 charges' },
 { date: '1990', event: 'Receives suspended sentence, probation, community service' },
 { date: 'July 1990', event: 'Convictions overturned on appeal due to immunized testimony' },
 { date: '1991', event: 'All charges dismissed' },
 { date: '1994', event: 'Runs for Virginia Senate, loses' },
 { date: '2001-2018', event: 'Fox News host and contributor' },
 { date: '2018-2019', event: 'NRA President, forced out amid internal scandal' },
 { date: 'Present', event: 'Continues media career, never held accountable' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Tower Commission Report', url: 'https://www.archive.org/details/towercommissionr00unit', date: '1987' },
 { title: 'Iran-Contra Independent Counsel Final Report', url: 'https://irp.fas.org/offdocs/walsh/', date: '1993' },
 { title: 'Congressional Iran-Contra Report', url: 'https://archive.org/details/reportofcongress01unit', date: '1987' },
 { title: 'North Congressional Testimony Transcripts', url: 'https://www.congress.gov/', date: '1987' },
 { title: 'United States v. North: Appeals Court Decision', url: 'https://www.courtlistener.com/', date: '1990' },
 { title: 'Under Fire: An American Story (North autobiography)', url: 'https://www.goodreads.com/', date: '1991' },
 ],
 aliases: ['Ollie', 'The Fall Guy', 'American Hero (self-styled)'],
 knownAssociates: [
 { name: 'Ronald Reagan', relationship: 'President during Iran-Contra, denied knowledge', href: '/entities/individuals/ronald-reagan' },
 { name: 'George H.W. Bush', relationship: 'Vice President, pardoned co-conspirators', href: '/entities/individuals/george-hw-bush' },
 { name: 'John Poindexter', relationship: 'National Security Advisor, supervisor, convicted', href: '/entities/individuals/john-poindexter' },
 { name: 'Fawn Hall', relationship: 'Secretary who shredded documents', href: '/entities/individuals/fawn-hall' },
 { name: 'Caspar Weinberger', relationship: 'SecDef, pardoned by Bush before trial', href: '/entities/individuals/caspar-weinberger' },
 ],
 },


























 'oscar-munoz': {
 name: 'Oscar Munoz',
 title: 'United Airlines CEO',
 role: 'CEO During Passenger Dragging Incident',
 riskLevel: 'medium',
 description: 'Oscar Munoz served as CEO of United Airlines from 2015 to 2020 and Executive Chairman until 2021. He is primarily known for his disastrous handling of the April 9; 2017 incident in which passenger David Dao was violently dragged off an overbooked United Express Flight 3411 at O\'Hare Airport in Chicago. Video of security officers forcibly removing the 69-year-old physician; leaving him bloodied and concussed with a broken nose; two knocked-out teeth; and a concussion; went viral globally. Munoz\'s initial response made the crisis exponentially worse; first calling Dao "disruptive and belligerent" in an internal email to employees; then issuing a non-apology that blamed Dao for the incident. United\'s stock dropped $1.4 billion in market value within days. Munoz eventually issued a full apology after massive public backlash and Congressional scrutiny; and United settled with Dao for an undisclosed amount. The incident became a symbol of how airlines treated passengers as adversaries rather than customers; and led to policy changes across the industry. Before the Dao incident; Munoz had received sympathy after suffering a heart attack shortly after becoming CEO in 2015 and receiving a heart transplant in January 2016. Despite the PR disaster; Munoz received $36.5 million in his final year of compensation.',
 birthDate: 'March 21, 1959',
 birthPlace: 'Queretaro, Mexico',
 education: ['University of Southern California, BA', 'Pepperdine University, MBA'],
 affiliations: [
 { name: 'United Airlines', role: 'CEO (2015-2020); Executive Chairman (2020-2021)', type: 'corporation' },
 ],
 controversies: [
 'Dr. David Dao dragging incident (April 9; 2017): 69-year-old physician violently removed from overbooked flight; suffered broken nose; two lost teeth; concussion; and severe injuries; video went viral globally',
 'Initial response called Dao "disruptive and belligerent" and blamed him for the incident; exponentially worsening the PR crisis',
 'United stock dropped $1.4 billion in market value in the days following the incident',
 'Received $36.5 million in final-year compensation despite the reputational damage to United Airlines',
 'The Dao incident became a symbol of the airline industry\'s overbooking practices and treatment of passengers; leading to Congressional hearings and industry-wide policy changes',
 'Under his tenure; United also faced controversies over pet deaths in cargo (a dog died after being placed in an overhead bin); leggings-gate (denying boarding to girls wearing leggings under a buddy pass policy); and general customer service failures',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Accountability', slug: 'corporate-accountability', severity: 'high' },
 ],
 timeline: [
 { date: 'September 2015', event: 'Became CEO of United Airlines' },
 { date: 'October 2015', event: 'Suffered heart attack weeks after becoming CEO' },
 { date: 'January 2016', event: 'Received heart transplant; returned to work' },
 { date: 'April 9, 2017', event: 'Dr. David Dao violently dragged off United Express Flight 3411; video goes viral' },
 { date: 'April 10, 2017', event: 'Munoz calls Dao "disruptive and belligerent" in employee email' },
 { date: 'April 11, 2017', event: 'United stock drops $1.4 billion; Munoz issues full apology after massive backlash' },
 { date: 'April 2017', event: 'United settles with Dao for undisclosed amount; changes overbooking policies' },
 { date: '2020', event: 'Stepped down as CEO; became Executive Chairman' },
 { date: '2021', event: 'Left United Airlines' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York Times: United Airlines Passenger Dragged', url: 'https://www.nytimes.com/2017/04/10/business/united-flight-passenger-dragged.html', date: '2017' },
 { title: 'DOT: United Airlines Investigation', url: 'https://www.transportation.gov/', date: '2017' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },





 'omar-al-bashir': {
 name: 'Omar al-Bashir',
 title: 'Former President of Sudan',
 role: 'Dictator; ICC-Indicted War Criminal; Darfur Genocide',
 riskLevel: 'critical',
 description: 'Omar Hassan Ahmad al-Bashir was the President of Sudan from 1989 to 2019; seizing power in a military coup and ruling for 30 years. He is the first sitting head of state to be indicted by the International Criminal Court (ICC); charged with genocide; war crimes; and crimes against humanity for his role in the Darfur conflict. Beginning in 2003; Bashir\'s government armed and supported the Janjaweed militia (later formalized as the Rapid Support Forces under Mohamed Hamdan "Hemedti" Dagalo) to carry out a campaign of ethnic cleansing against the Fur; Masalit; and Zaghawa peoples of Darfur. The conflict killed an estimated 300;000 to 400;000 people and displaced over 2.5 million. Atrocities included systematic mass murder; rape as a weapon of war; destruction of villages; and poisoning of water sources. Despite the ICC arrest warrants; Bashir traveled freely to numerous countries; many of which were ICC signatories legally obligated to arrest him; exposing the impotence of international justice when applied to powerful leaders. He was overthrown in April 2019 by a military coup following months of popular protests. Bashir has been in military custody since; convicted of corruption by a Sudanese court; but has never been transferred to the ICC. The legacy of his Janjaweed/RSF forces continues to devastate Sudan in the civil war that erupted in April 2023 between the Sudanese Armed Forces and the RSF; with the RSF accused of ethnic cleansing in West Darfur that echoes the original genocide.',
 birthDate: 'January 1, 1944',
 birthPlace: 'Hosh Bannaga, Sudan',
 education: ['Egyptian Military Academy', 'Malaysian Armed Forces Staff College'],
 affiliations: [
 { name: 'Government of Sudan', role: 'President (1989-2019)', type: 'agency' },
 { name: 'National Congress Party', role: 'Chairman', type: 'organization' },
 { name: 'Sudanese Armed Forces', role: 'Brigadier General; coup leader', type: 'agency' },
 ],
 controversies: [
 'Darfur genocide: armed and directed Janjaweed militia in ethnic cleansing campaign; 300;000-400;000 killed; 2.5+ million displaced; systematic mass murder; rape; village destruction',
 'First sitting head of state indicted by the International Criminal Court; charged with genocide; war crimes; and crimes against humanity (warrants issued 2009 and 2010)',
 'Traveled freely to ICC member states (South Africa; Chad; Kenya; Jordan) despite legal obligation to arrest him; exposing the weakness of international justice mechanisms',
 'Overthrown in April 2019 military coup after months of popular protests; found with suitcases containing $130 million in cash',
 'His Janjaweed forces evolved into the Rapid Support Forces (RSF) under Hemedti; which launched the 2023 civil war and committed new ethnic cleansing in Darfur',
 'Harbored Osama bin Laden in Sudan from 1991-1996; provided safe haven for international terrorist operations',
 'Imposed sharia law; arrested and tortured political opponents; suppressed press freedom throughout 30-year rule',
 'U.S. classified Sudan as a state sponsor of terrorism (1993-2020); Bashir\'s regime facilitated weapons flows to Hamas and other militant groups',
 ],
 charges: [
 { statute: 'Rome Statute Article 6', description: 'Genocide against the Fur; Masalit; and Zaghawa peoples (ICC warrant 2010)', category: 'International Criminal Court' },
 { statute: 'Rome Statute Article 7', description: 'Crimes against humanity: murder; extermination; forcible transfer; torture; rape (ICC warrant 2009)', category: 'International Criminal Court' },
 { statute: 'Rome Statute Article 8', description: 'War crimes: directing attacks against civilians; pillaging (ICC warrant 2009)', category: 'International Criminal Court' },
 ],
 relatedInvestigations: [
 { title: 'Darfur Genocide', slug: 'darfur-genocide', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 1, 1944', event: 'Born in Hosh Bannaga; Sudan' },
 { date: 'June 30, 1989', event: 'Seized power in military coup against democratically elected PM Sadiq al-Mahdi' },
 { date: '1991-1996', event: 'Harbored Osama bin Laden in Sudan' },
 { date: '2003', event: 'Darfur conflict begins; Bashir arms and directs Janjaweed militia' },
 { date: '2004', event: 'U.S. Secretary of State Colin Powell declares Darfur situation a genocide' },
 { date: 'March 2009', event: 'ICC issues first arrest warrant for war crimes and crimes against humanity' },
 { date: 'July 2010', event: 'ICC issues second warrant adding genocide charges' },
 { date: 'April 11, 2019', event: 'Overthrown by military after months of popular protests' },
 { date: 'December 2019', event: 'Convicted of corruption by Sudanese court; $130 million in cash found' },
 { date: 'April 2023', event: 'Sudan civil war erupts; RSF (successors to his Janjaweed) commit atrocities in Darfur' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ICC: Al Bashir Case', url: 'https://www.icc-cpi.int/darfur/albashir', date: '2010' },
 { title: 'UN Commission of Inquiry on Darfur', url: 'https://www.un.org/', date: '2005' },
 { title: 'Human Rights Watch: Darfur', url: 'https://www.hrw.org/africa/sudan', date: '2023' },
 ],
 aliases: ['al-Bashir'],
 knownAssociates: [
 { name: 'Mohamed Hamdan Dagalo (Hemedti)', relationship: 'Janjaweed/RSF leader Bashir empowered; later launched 2023 civil war' },
 ],
 },





 'omar-mateen': {
 name: 'Omar Mateen',
 title: 'Mass Murderer (Deceased)',
 role: 'Pulse Nightclub Shooter, Killed 49',
 riskLevel: 'critical',
 description: 'Omar Mateen murdered 49 people and wounded 53 others at Pulse, a gay nightclub in Orlando, Florida in 2016. He pledged allegiance to ISIS during the attack. It was the deadliest attack on LGBTQ+ people in U.S. history. He was killed by police after a standoff.',
 birthDate: 'November 16, 1986',
 deathDate: 'June 12, 2016',
 birthPlace: 'New Hyde Park, New York',
 education: ['Indian River State College'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'KILLED 49: Deadliest anti-LGBTQ attack',
 'ISIS ALLEGIANCE: Pledged during attack',
 'FBI INVESTIGATED: Previously, cleared',
 'SECURITY GUARD: Licensed to carry',
 'HATE CRIME: Targeted gay nightclub',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Pulse Nightclub Shooting', slug: 'pulse-shooting', severity: 'critical' },
 { title: 'Mass Shootings', slug: 'mass-shootings', severity: 'critical' },
 { title: 'Hate Crimes', slug: 'hate-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 16, 1986', event: 'Born in New York' },
 { date: 'June 12, 2016', event: 'Murders 49 at Pulse nightclub' },
 { date: 'June 12, 2016', event: 'Killed by police' },
 ],
 sources: [{ title: 'Wikipedia: Omar Mateen', url: 'https://en.wikipedia.org/wiki/Omar_Mateen' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Stephen Paddock', relationship: 'Fellow mass shooter in large-scale gun attack', href: '/entities/individuals/stephen-paddock' },
 { name: 'Anwar al-Awlaki', relationship: 'Mateen was influenced by al-Awlaki propaganda', href: '/entities/individuals/anwar-al-awlaki' }
 ],

 },
 'osama-bin-laden': {
 name: 'Osama bin Laden',
 title: 'Al-Qaeda Founder',
 role: 'September 11 Mastermind, 2,977 Dead',
 riskLevel: 'critical',
 description: 'Osama bin Laden founded al-Qaeda and orchestrated the September 11, 2001 attacks that killed 2,977 people, the deadliest terrorist attack in history. A Saudi billionaire\'s son, he declared war on America and was killed by Navy SEALs in Pakistan in 2011 after a decade-long manhunt.',
 birthDate: 'March 10, 1957',
 birthPlace: 'Riyadh, Saudi Arabia',
 deathDate: 'May 2, 2011',
 education: ['King Abdulaziz University'],
 affiliations: [
 { name: 'Al-Qaeda', role: 'Founder/Leader', type: 'organization' as const },
 { name: 'Mujahideen', role: 'Former Fighter (Soviet-Afghan War)', type: 'organization' as const },
 ],
 controversies: [
 'SEPTEMBER 11: 2,977 killed in attacks',
 '1998 EMBASSY BOMBINGS: 224 killed',
 'USS COLE: 17 sailors killed',
 '1993 WTC: First attack planning',
 'GLOBAL JIHAD: Declared war on America',
 ],
 charges: [
 { statute: '18 U.S.C. � 2332b', description: 'Acts of terrorism transcending national boundaries', category: 'Terrorism' },
 { statute: '18 U.S.C. � 1111', description: 'Murder of U.S. nationals', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'September 11 Attacks', slug: 'september-11', severity: 'critical' },
 { title: 'Global Terrorism', slug: 'global-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 1957', event: 'Born in Saudi Arabia' },
 { date: '1988', event: 'Founded al-Qaeda' },
 { date: 'August 7, 1998', event: 'U.S. Embassy bombings, 224 killed' },
 { date: 'October 12, 2000', event: 'USS Cole attack, 17 killed' },
 { date: 'September 11, 2001', event: 'World Trade Center/Pentagon attacks, 2,977 killed' },
 { date: 'May 2, 2011', event: 'Killed by SEAL Team Six in Pakistan' },
 ],
 sources: [{ title: 'Wikipedia: Osama bin Laden', url: 'https://en.wikipedia.org/wiki/Osama_bin_Laden' }, { title: 'Bloomberg: Osama bin Laden', url: 'https://www.bloomberg.com/' }, { title: 'Al Jazeera: Middle East', url: 'https://www.aljazeera.com/middle-east/' }],
 knownAssociates: [
 { name: 'Khalid Sheikh Mohammed', relationship: 'Principal architect of 9/11 attacks under bin Laden', href: '/entities/individuals/khalid-sheikh-mohammed' },
 { name: 'Anwar al-Awlaki', relationship: 'Al-Qaeda propagandist who continued bin Laden\'s mission', href: '/entities/individuals/anwar-al-awlaki' },
 { name: 'Ayman al-Zawahiri', relationship: 'Second-in-command who succeeded bin Laden as al-Qaeda leader', href: '/entities/individuals/ayman-al-zawahiri' }
 ],

 },
 'oliver-schmidt': {
 name: 'Oliver Schmidt',
 title: 'VW Emissions Compliance Manager',
 role: 'Dieselgate Fugitive; Arrested Fleeing the U.S.',
 riskLevel: 'high',
 description: 'Oliver Schmidt was the General Manager of Volkswagen\'s Engineering and Environmental Office in Auburn Hills; Michigan; responsible for emissions compliance with U.S. regulators. He played a key role in the Dieselgate scandal; in which VW installed "defeat devices" in approximately 11 million diesel vehicles worldwide (580;000 in the U.S.) that detected when emissions tests were being run and temporarily reduced nitrogen oxide emissions to pass regulatory standards; while emitting up to 40 times the legal limit during normal driving. Schmidt was arrested at Miami International Airport on January 7; 2017; while attempting to flee the country; having been tipped off that U.S. authorities were closing in. He had booked a one-way ticket to Germany. Schmidt pleaded guilty to conspiracy to defraud the United States and violation of the Clean Air Act. He was sentenced to 7 years in federal prison and fined $400;000; the longest sentence of any VW executive. He served as a liaison between VW\'s German headquarters and U.S. regulators; helping to conceal the fraud even after the EPA began investigating. The broader scandal cost VW over $33 billion in fines; settlements; and vehicle buybacks; and former CEO Martin Winterkorn was indicted but remains in Germany beyond U.S. extradition reach.',
 education: [],
 affiliations: [
 { name: 'Volkswagen Group', role: 'General Manager; Engineering and Environmental Office; Auburn Hills; Michigan', type: 'corporation' },
 ],
 controversies: [
 'Helped conceal defeat device fraud from U.S. regulators; VW vehicles emitted up to 40x the legal limit of nitrogen oxide during normal driving',
 'Arrested at Miami International Airport on January 7; 2017 while attempting to flee to Germany on a one-way ticket',
 'Sentenced to 7 years in federal prison; the longest sentence of any Dieselgate executive',
 'Served as liaison between VW headquarters and U.S. regulators; continuing to deceive even after EPA investigation began',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: '2014', event: 'EPA begins investigating discrepancies in VW diesel emissions' },
 { date: 'September 2015', event: 'VW admits to installing defeat devices in 11 million vehicles worldwide' },
 { date: 'January 7, 2017', event: 'Schmidt arrested at Miami International Airport attempting to flee to Germany' },
 { date: '2017', event: 'Pleaded guilty to conspiracy to defraud the United States and Clean Air Act violations' },
 { date: 'December 2017', event: 'Sentenced to 7 years in federal prison and $400;000 fine' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Oliver Schmidt', url: 'https://en.wikipedia.org/wiki/Oliver_Schmidt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Herbert Diess', relationship: 'VW executive during Schmidt\'s emissions fraud', href: '/entities/individuals/herbert-diess' },
 { name: 'Matthias Mueller', relationship: 'VW CEO during Schmidt\'s prosecution', href: '/entities/individuals/matthias-mueller' },
 { name: 'James Liang', relationship: 'Fellow VW engineer convicted in dieselgate', href: '/entities/individuals/james-liang' },
 ],
 },

 'oliver-wendell-holmes': {
 name: 'Oliver Wendell Holmes Jr.',
 title: 'Supreme Court Justice',
 role: 'Author of Buck v. Bell; Forced Sterilization',
 riskLevel: 'high',
 description: 'Oliver Wendell Holmes Jr. served as an Associate Justice of the U.S. Supreme Court from 1902 to 1932; one of the most cited and influential justices in American history. While celebrated for his contributions to free speech jurisprudence (the "clear and present danger" test); Holmes authored one of the most morally reprehensible decisions in Supreme Court history: Buck v. Bell (1927). In an 8-1 decision; Holmes upheld Virginia\'s compulsory sterilization law; ruling that Carrie Buck; a young woman falsely classified as "feeble-minded;" could be forcibly sterilized. Holmes wrote: "Three generations of imbeciles are enough." This decision directly enabled the forced sterilization of over 60;000 Americans; disproportionately targeting poor women; disabled people; minorities; and institutionalized individuals. The eugenic framework Holmes endorsed was later cited by Nazi Germany in defense of its own sterilization and racial hygiene programs at the Nuremberg trials. Buck v. Bell has never been explicitly overturned by the Supreme Court. Carrie Buck was later found to be of normal intelligence; her institutionalization and sterilization were the result of a cover-up after she was raped by the nephew of her foster parents.',
 education: [],
 affiliations: [
 { name: 'U.S. Supreme Court', role: 'Associate Justice (1902-1932)', type: 'agency' },
 ],
 controversies: [
 'Authored Buck v. Bell (1927); upholding forced sterilization with the phrase "Three generations of imbeciles are enough"; enabling 60;000+ forced sterilizations',
 'Buck v. Bell has never been explicitly overturned by the Supreme Court',
 'Carrie Buck was later found to be of normal intelligence; institutionalized after being raped by her foster family\'s relative',
 'Nazi Germany cited American eugenic sterilization laws (validated by Holmes) at Nuremberg trials',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'critical' },
 ],
 timeline: [
 { date: '1841', event: 'Born in Boston; Massachusetts' },
 { date: '1861-1864', event: 'Served in Civil War; wounded three times' },
 { date: '1902', event: 'Appointed to Supreme Court by Theodore Roosevelt' },
 { date: '1927', event: 'Wrote Buck v. Bell opinion; 8-1 ruling authorizing forced sterilization' },
 { date: '1932', event: 'Retired from Supreme Court at age 90' },
 { date: '1935', event: 'Died in Washington; D.C.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Oliver Wendell Holmes Jr.', url: 'https://en.wikipedia.org/wiki/Oliver_Wendell_Holmes_Jr.', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Carrie Buck', relationship: 'Wrote Buck v. Bell decision authorizing forced sterilization', href: '/entities/individuals/carrie-buck' },
 { name: 'Harry Laughlin', relationship: 'Holmes upheld sterilization law based on Laughlin\'s model', href: '/entities/individuals/harry-laughlin' },
 ],
 },

 'orlando-letelier': {
 name: 'Orlando Letelier',
 title: 'Former Chilean Ambassador; Assassination Victim',
 role: 'Chilean Diplomat Assassinated by DINA Car Bomb in Washington D.C.',
 riskLevel: 'low',
 description: 'Orlando Letelier del Solar was a Chilean diplomat; economist; and politician who served as Ambassador to the United States; Minister of Foreign Affairs; Minister of Interior; and Minister of Defense under President Salvador Allende. After Pinochet\'s September 11; 1973 CIA-backed coup; Letelier was imprisoned and tortured for over a year in concentration camps including the notorious Dawson Island. After international pressure secured his release; he moved to Washington D.C.; where he worked at the Institute for Policy Studies and became the most prominent international voice against the Pinochet dictatorship. On September 21; 1976; Letelier was assassinated when a car bomb exploded on Embassy Row in Washington D.C. His American colleague Ronni Karpen Moffitt; 25; was also killed. The bomb was planted by DINA (Chilean secret police) agent Michael Townley under orders from DINA chief Manuel Contreras; acting on Pinochet\'s authority. This was the first state-sponsored assassination by a foreign government on U.S. soil. The operation was part of Operation Condor; the coordinated campaign of political repression and state terror by South American dictatorships with CIA knowledge. Despite the murder of an American citizen and a foreign diplomat on American soil; the U.S. response was muted due to the Cold War relationship with Pinochet. Declassified documents later revealed extensive U.S. knowledge of Operation Condor.',
 education: ['University of Chile, Law'],
 affiliations: [
 { name: 'Government of Chile', role: 'Ambassador to U.S.; Minister of Foreign Affairs; Defense; and Interior under Allende', type: 'agency' },
 { name: 'Institute for Policy Studies', role: 'Senior Fellow and anti-Pinochet activist', type: 'organization' },
 ],
 controversies: [
 'Assassinated by a DINA car bomb on Embassy Row in Washington D.C. on September 21; 1976; the first state-sponsored assassination by a foreign government on U.S. soil',
 'American colleague Ronni Karpen Moffitt; 25; was also killed in the bombing; her husband survived',
 'The assassination was part of Operation Condor; the coordinated campaign of political repression by South American dictatorships with CIA knowledge',
 'Despite the murder of an American citizen and a diplomat on U.S. soil; the response was muted due to Cold War alliance with Pinochet',
 'DINA agent Michael Townley was given a plea deal and only served 5 years; entered witness protection despite killing two people on American soil',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Chile Coup', slug: 'chile-coup', severity: 'critical' },
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'critical' },
 ],
 timeline: [
 { date: '1932', event: 'Born in Temuco; Chile' },
 { date: '1970-1973', event: 'Served in Allende government as Ambassador to U.S.; Foreign Minister; Defense Minister; Interior Minister' },
 { date: 'September 11, 1973', event: 'Pinochet coup; Letelier arrested and imprisoned' },
 { date: '1973-1974', event: 'Imprisoned and tortured in concentration camps including Dawson Island' },
 { date: '1974', event: 'Released after international pressure; moved to Washington D.C.' },
 { date: 'September 21, 1976', event: 'Assassinated by DINA car bomb on Embassy Row; Ronni Moffitt also killed' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Orlando Letelier', url: 'https://en.wikipedia.org/wiki/Orlando_Letelier', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Townley', relationship: 'DINA agent who planted car bomb killing Letelier', href: '/entities/individuals/michael-townley' },
 { name: 'Augusto Pinochet', relationship: 'Pinochet ordered Letelier\'s assassination in Washington DC', href: '/entities/individuals/augusto-pinochet' },
 { name: 'Rene Schneider', relationship: 'Fellow Chilean victim of political assassination', href: '/entities/individuals/rene-schneider' },
 ],
 },

 'orval-faubus': {
 name: 'Orval Faubus',
 title: 'Governor of Arkansas',
 role: 'Segregationist Governor; Little Rock Crisis',
 riskLevel: 'high',
 description: 'Orval Eugene Faubus served as Governor of Arkansas for six terms (1955-1967) and became a symbol of massive resistance to school desegregation when he deployed the Arkansas National Guard in September 1957 to block nine Black students (the "Little Rock Nine") from entering Central High School in defiance of the Supreme Court\'s Brown v. Board of Education ruling. President Eisenhower was forced to federalize the Arkansas National Guard and send the 101st Airborne Division to escort the students into the school; one of the most dramatic confrontations of the civil rights era. Faubus\'s hometown of Harrison; Arkansas was a notorious sundown town where Black people were threatened or killed if found after dark. The town had expelled its entire Black population in anti-Black riots in 1905 and 1909. Faubus initially was not considered a hardline segregationist; he had attended the integrated Commonwealth College and his father was a socialist. His turn to segregation was calculated political opportunism; riding white racial anxiety to win re-election five more times. His actions delayed school integration in Arkansas by years and emboldened segregationists across the South.',
 education: [],
 affiliations: [
 { name: 'State of Arkansas', role: 'Governor (1955-1967); six terms', type: 'agency' },
 ],
 controversies: [
 'Deployed Arkansas National Guard to block nine Black students from entering Central High School in September 1957; defying federal court desegregation orders',
 'President Eisenhower sent the 101st Airborne Division to enforce desegregation; one of the most dramatic civil rights confrontations in U.S. history',
 'Hometown of Harrison; Arkansas was a notorious sundown town that expelled its entire Black population in anti-Black riots of 1905 and 1909',
 'Initially not a hardline segregationist; his turn was cynical political calculation that rode white racial anxiety to win five additional terms',
 'Actions delayed school integration in Arkansas and emboldened massive resistance across the South',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: '1910', event: 'Born in Greasy Creek; Arkansas' },
 { date: '1955', event: 'Elected Governor of Arkansas' },
 { date: 'September 1957', event: 'Deployed National Guard to block Little Rock Nine from Central High School' },
 { date: 'September 24, 1957', event: 'Eisenhower federalizes National Guard; sends 101st Airborne to enforce desegregation' },
 { date: '1967', event: 'Left office after six terms' },
 { date: '1994', event: 'Died in Conway; Arkansas' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Orval Faubus', url: 'https://en.wikipedia.org/wiki/Orval_Faubus', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Wallace', relationship: 'Fellow segregationist governor who blocked school integration', href: '/entities/individuals/george-wallace' },
 { name: 'Dwight D. Eisenhower', relationship: 'Eisenhower sent troops to override Faubus at Little Rock', href: '/entities/individuals/dwight-d-eisenhower' },
 ],
 },

 'orville-kelly': {
 name: 'Orville Kelly',
 title: 'Atomic Veteran and Activist',
 role: 'Nuclear Testing Victim; Founded National Association of Atomic Veterans',
 riskLevel: 'low',
 description: 'Orville Kelly was a U.S. Army soldier who witnessed 22 nuclear weapons tests at Enewetak Atoll in the Marshall Islands during Operation Hardtack I in 1958. He was stationed just 20 miles from ground zero with no protective equipment beyond sunglasses. Kelly developed lymphocytic lymphoma and was told by the Veterans Administration that his cancer was not service-connected; despite the obvious link to massive radiation exposure. In 1979; he founded the National Association of Atomic Veterans (NAAV); the first organization to advocate for the approximately 400;000 U.S. military personnel exposed to radiation during nuclear weapons testing between 1945 and 1962. The government had classified the health records of atomic veterans and prohibited them from discussing their exposure under penalty of imprisonment. Kelly fought to declassify these records and secure compensation and healthcare for veterans dying of radiation-induced cancers. He testified before Congress and brought national attention to the plight of atomic veterans before dying of his radiation-induced cancer in 1980. His advocacy eventually led to the Radiation-Exposed Veterans Compensation Act of 1988; which provided benefits to veterans who participated in nuclear tests. The U.S. conducted over 1;000 nuclear tests; and studies show atomic veterans had significantly elevated rates of leukemia; lymphoma; and solid cancers.',
 education: [],
 affiliations: [
 { name: 'U.S. Army', role: 'Sergeant; witnessed 22 nuclear tests at Enewetak Atoll', type: 'agency' },
 { name: 'National Association of Atomic Veterans', role: 'Founder (1979)', type: 'organization' },
 ],
 controversies: [
 'Exposed to radiation from 22 nuclear detonations at Enewetak Atoll with no protective equipment; developed lymphocytic lymphoma',
 'Government classified health records of 400;000 atomic veterans and prohibited them from discussing exposure under penalty of imprisonment',
 'VA denied service connection for radiation-induced cancers; forcing veterans to fight for decades for recognition and benefits',
 'His advocacy led to the Radiation-Exposed Veterans Compensation Act of 1988; which provided benefits to test participants',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: '1958', event: 'Stationed at Enewetak Atoll; witnessed 22 nuclear weapons tests during Operation Hardtack I' },
 { date: '1970s', event: 'Diagnosed with lymphocytic lymphoma; VA denied service connection to radiation exposure' },
 { date: '1979', event: 'Founded National Association of Atomic Veterans (NAAV)' },
 { date: '1980', event: 'Testified before Congress on behalf of atomic veterans' },
 { date: '1980', event: 'Died of radiation-induced cancer' },
 { date: '1988', event: 'Radiation-Exposed Veterans Compensation Act passed; direct result of his advocacy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Orville Kelly', url: 'https://www.google.com/search?q=Orville%20Kelly', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tom Saffer', relationship: 'Fellow atomic veteran who fought for recognition', href: '/entities/individuals/tom-saffer' },
 { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to nuclear testing', href: '/entities/individuals/stafford-warren' },
 ],
 },

 'oscar-danilo-blandon': {
 name: 'Oscar Danilo Blandón',
 title: 'Nicaraguan Drug Trafficker and DEA Informant',
 role: 'CIA-Contra Drug Pipeline; Supplied Cocaine to LA; DEA Informant',
 riskLevel: 'high',
 description: 'Oscar Danilo Blandón Reyes was a Nicaraguan drug trafficker who helped funnel tons of Colombian cocaine into Los Angeles to finance the CIA-backed Nicaraguan Contra rebels in the 1980s. Working with drug lord Norwin Meneses; Blandón supplied cocaine to "Freeway" Ricky Ross; who built a crack cocaine empire that devastated South Central Los Angeles and other Black communities. Journalist Gary Webb documented this pipeline in his 1996 San Jose Mercury News series "Dark Alliance;" revealing that the CIA was aware of and protected drug trafficking by its Contra allies. Blandón testified that he and Meneses smuggled cocaine into the U.S. specifically to raise money for the Contras; with the knowledge of Contra leadership. Despite being a major drug trafficker responsible for importing hundreds of kilograms of cocaine; Blandón was given an extraordinarily lenient deal: he served only 28 months in prison; was released; and became a paid DEA informant earning over $166;000. His light treatment contrasted starkly with the mandatory minimum sentences imposed on low-level crack dealers in the communities his cocaine had devastated. The CIA Inspector General\'s 1998 report confirmed the agency was aware of Contra drug trafficking but chose not to intervene to protect its covert operations.',
 education: [],
 affiliations: [
 { name: 'Nicaraguan Contras', role: 'Drug trafficking fundraiser', type: 'organization' },
 { name: 'DEA', role: 'Paid informant ($166;000+)', type: 'agency' },
 ],
 controversies: [
 'Supplied cocaine to Freeway Ricky Ross; fueling the crack epidemic that devastated South Central Los Angeles and other Black communities',
 'Testified that he smuggled cocaine specifically to raise money for the CIA-backed Contras; with knowledge of Contra leadership',
 'Despite being a major drug trafficker; served only 28 months in prison and became a paid DEA informant; a stark contrast to mandatory minimum sentences imposed on low-level crack dealers',
 'CIA Inspector General\'s 1998 report confirmed the agency knew about Contra drug trafficking but chose not to intervene',
 'Gary Webb\'s "Dark Alliance" series documented the pipeline; Webb was destroyed by mainstream media backlash and died in 2004 (ruled suicide; two gunshots to the head)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
 ],
 timeline: [
 { date: '1980s', event: 'Smuggled cocaine into the U.S. from Colombia via Central America to fund Nicaraguan Contras' },
 { date: '1980s', event: 'Supplied "Freeway" Ricky Ross with cocaine that fueled the LA crack epidemic' },
 { date: '1992', event: 'Arrested by DEA' },
 { date: '1994', event: 'Released after only 28 months; became paid DEA informant' },
 { date: '1996', event: 'Gary Webb publishes "Dark Alliance" exposing the CIA-Contra-cocaine pipeline' },
 { date: '1998', event: 'CIA Inspector General confirms agency awareness of Contra drug trafficking' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Oscar Danilo Blandón', url: 'https://en.wikipedia.org/wiki/Oscar_Danilo_Bland%C3%B3n', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Freeway Ricky Ross', relationship: 'Main cocaine buyer in CIA-Contra drug pipeline', href: '/entities/individuals/freeway-ricky-ross' },
 { name: 'Norwin Meneses', relationship: 'Nicaraguan drug lord who supplied Blandon', href: '/entities/individuals/norwin-meneses' },
 { name: 'Oliver North', relationship: 'Iran-Contra figure connected to drug pipeline', href: '/entities/individuals/oliver-north' },
 ],
 },

 'oscar-romero': {
 name: 'Óscar Romero',
 title: 'Archbishop of San Salvador; Assassination Victim',
 role: 'Catholic Archbishop Assassinated for Denouncing Military Violence',
 riskLevel: 'low',
 description: 'Óscar Arnulfo Romero y Galdámez was the Archbishop of San Salvador who became the most prominent voice against government-sponsored violence and death squads in El Salvador. Initially appointed as a conservative who the military establishment expected would not challenge them; Romero was radicalized by the assassination of his friend Father Rutilio Grande in March 1977. He began using his weekly radio homilies to document murders; disappearances; and torture by the U.S.-backed Salvadoran military and death squads. His broadcasts were the only truthful source of news for most Salvadorans. On March 24; 1980; Romero was assassinated by a single bullet to the heart while celebrating Mass at a hospital chapel. The killing was ordered by death squad leader Major Roberto D\'Aubuisson; a graduate of the U.S. School of the Americas. The day before his assassination; Romero had directly addressed Salvadoran soldiers in his homily: "I beg you; I implore you; I order you in the name of God: stop the repression!" The U.S. continued providing $1.5 million per day in military aid to El Salvador\'s government throughout the civil war (1979-1992); which killed 75;000 people. Reagan administration officials; particularly Elliott Abrams; systematically downplayed the atrocities. Romero was canonized as a saint by Pope Francis in 2018.',
 education: [],
 affiliations: [
 { name: 'Catholic Church', role: 'Archbishop of San Salvador (1977-1980)', type: 'organization' },
 ],
 controversies: [
 'Assassinated while celebrating Mass on March 24; 1980; by a gunman sent by death squad leader Roberto D\'Aubuisson; a School of the Americas graduate',
 'The U.S. continued providing $1.5 million per day in military aid to El Salvador throughout the civil war despite documented atrocities',
 'Reagan administration officials; particularly Elliott Abrams; systematically downplayed human rights abuses in El Salvador',
 'El Salvador\'s civil war killed 75;000 people; with the vast majority of atrocities committed by U.S.-backed government forces and death squads',
 'Canonized as a saint by Pope Francis in 2018; decades after the Vatican had suppressed his legacy under conservative leadership',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'critical' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'critical' },
 ],
 timeline: [
 { date: '1917', event: 'Born in Ciudad Barrios; El Salvador' },
 { date: '1977', event: 'Appointed Archbishop of San Salvador; considered a conservative safe choice by military' },
 { date: 'March 1977', event: 'Radicalized by assassination of Father Rutilio Grande by death squads' },
 { date: '1977-1980', event: 'Used weekly radio homilies to document military murders; disappearances; and torture' },
 { date: 'March 23, 1980', event: 'Final homily: "I beg you; I implore you; I order you in the name of God: stop the repression!"' },
 { date: 'March 24, 1980', event: 'Assassinated by single bullet to the heart while celebrating Mass' },
 { date: '2018', event: 'Canonized as a saint by Pope Francis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Óscar Romero', url: 'https://en.wikipedia.org/wiki/Óscar_Romero', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Roberto DAubuisson', relationship: 'Death squad leader who ordered Romero\'s assassination', href: '/entities/individuals/roberto-daubuisson' },
 { name: 'Elliott Abrams', relationship: 'Reagan official who downplayed Romero\'s assassination', href: '/entities/individuals/elliott-abrams' },
 { name: 'Rufina Amaya', relationship: 'Fellow Salvadoran victim of military violence Romero denounced', href: '/entities/individuals/rufina-amaya' },
 ],
 },

 'otto-perez-molina': {
 name: 'Otto Pérez Molina',
 title: 'Former President of Guatemala',
 role: 'Military Commander During Ixil Genocide; Later President; Corruption Conviction',
 riskLevel: 'high',
 description: 'Otto Fernando Pérez Molina is a former Guatemalan military officer and president who served as a military commander in the Ixil Triangle region during the Guatemalan genocide of the early 1980s; in which the military systematically killed over 200;000 people; primarily indigenous Maya. He served under dictator Efraín Ríos Montt; who was convicted of genocide in 2013 (verdict later annulled on procedural grounds). Pérez Molina rose through the military intelligence apparatus (known as D-2); which was responsible for torture; disappearances; and extrajudicial killings. He was also involved in intelligence operations during the peace process in the 1990s. In 2012; he was elected President of Guatemala on a hardline security platform. In 2015; his presidency collapsed amid a massive corruption scandal uncovered by CICIG (International Commission Against Impunity in Guatemala); a UN-backed anti-corruption body. He was stripped of presidential immunity; resigned on September 2; 2015; and was arrested the next day on charges of customs fraud; bribery; and illicit association related to a corruption scheme called "La Línea" (The Line); in which his administration ran a network that offered importers reduced customs duties in exchange for kickbacks. His vice president; Roxana Baldetti; had already been arrested. He was convicted of corruption in December 2022. His trajectory from genocide-era military commander to democratically elected president to convicted criminal illustrates the impunity that protected perpetrators of Guatemala\'s genocide for decades.',
 education: [],
 affiliations: [
 { name: 'Guatemalan Army', role: 'Military intelligence (D-2); Ixil Triangle commander', type: 'agency' },
 { name: 'Government of Guatemala', role: 'President (2012-2015)', type: 'agency' },
 ],
 controversies: [
 'Served as military commander in the Ixil Triangle during genocide that killed 200;000+ people; primarily indigenous Maya',
 'Rose through D-2 military intelligence; which was responsible for torture; disappearances; and extrajudicial killings',
 'Presidency collapsed in 2015 corruption scandal; CICIG uncovered "La Línea" customs fraud ring run by his administration',
 'Resigned and arrested in September 2015; convicted of corruption in December 2022',
 'His trajectory from genocide commander to president to convicted criminal illustrates decades of impunity in Guatemala',
 ],
 charges: [
 { statute: 'Guatemalan Criminal Code', description: 'Customs fraud; bribery; illicit association (convicted 2022)', category: 'Criminal' },
 ],
 relatedInvestigations: [
 { title: 'Guatemala Genocide', slug: 'guatemala-genocide', severity: 'critical' },
 ],
 timeline: [
 { date: '1950', event: 'Born in Guatemala City' },
 { date: '1980s', event: 'Served as military commander in Ixil Triangle during genocide' },
 { date: '2012', event: 'Elected President of Guatemala' },
 { date: '2015', event: 'CICIG corruption investigation exposes "La Línea" customs fraud scheme' },
 { date: 'September 2, 2015', event: 'Resigned presidency after being stripped of immunity' },
 { date: 'September 3, 2015', event: 'Arrested on corruption charges' },
 { date: 'December 2022', event: 'Convicted of corruption' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Otto Pérez Molina', url: 'https://en.wikipedia.org/wiki/Otto_Pérez_Molina', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Efrain Rios Montt', relationship: 'Rose through military during Rios Montt\'s genocide', href: '/entities/individuals/efrain-rios-montt' },
 { name: 'Alvaro Colom', relationship: 'Predecessor as Guatemalan president', href: '/entities/individuals/alvaro-colom' },
 ],
 },

 'oath-keepers': {
 name: 'Oath Keepers',
 title: 'Anti-Government Militia Organization',
 role: 'Far-Right Militia; Seditious Conspiracy; January 6 Participants',
 riskLevel: 'critical',
 description: 'Note: This entry represents an organization listed in the individuals data. The Oath Keepers are a far-right anti-government militia founded in 2009 by Elmer Stewart Rhodes III; a Yale Law School graduate and former Army paratrooper. The organization recruited primarily from current and former military; law enforcement; and first responders; exploiting their oaths of service to defend the Constitution. At its peak; the Oath Keepers claimed approximately 38;000 members. The organization played a central role in the January 6; 2021 Capitol attack; with members forming a military-style "stack" formation to breach the building. Rhodes and other leaders were convicted of seditious conspiracy; the most serious charges brought against any January 6 defendants. Rhodes was sentenced to 18 years in federal prison; the longest January 6 sentence. The organization had previously appeared armed at the Bundy Ranch standoff (2014); Ferguson protests (2014); Sugar Pine Mine standoff (2015); and various state capitols. Internal communications revealed that Rhodes directed members to stockpile weapons at a Virginia hotel as a Quick Reaction Force for January 6; prepared to bring firearms across the Potomac River into Washington D.C. if ordered. The conviction of Oath Keepers leadership for seditious conspiracy represented the first successful federal sedition prosecution in over 25 years.',
 education: [],
 affiliations: [
 { name: 'Oath Keepers', role: 'Far-right anti-government militia (founded 2009)', type: 'organization' },
 ],
 controversies: [
 'January 6 seditious conspiracy: members breached the Capitol in military "stack" formation; stockpiled weapons at a Virginia hotel as a Quick Reaction Force',
 'Founder Stewart Rhodes sentenced to 18 years for seditious conspiracy; the longest January 6 sentence and first successful federal sedition prosecution in over 25 years',
 'Recruited from military; law enforcement; and first responders; exploiting their oaths to radicalize them into anti-government extremism',
 'Armed presence at Bundy Ranch standoff (2014); Ferguson protests (2014); and multiple state capitol demonstrations',
 'Internal communications showed planning for armed conflict; with members discussing civil war scenarios and violent resistance to government authority',
 'Organization claimed 38;000 members at peak; including active-duty law enforcement officers raising severe concerns about extremist infiltration of police',
 ],
 charges: [
 { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy (Rhodes and multiple leaders convicted)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct an official proceeding (multiple convictions)', category: 'Federal' },
 { statute: '18 U.S.C. § 1512(c)(2)', description: 'Obstruction of official proceeding (multiple convictions)', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Founded by Stewart Rhodes III; a Yale Law graduate and former Army paratrooper' },
 { date: '2014', event: 'Armed members appeared at Bundy Ranch standoff in Nevada' },
 { date: '2014', event: 'Members deployed to Ferguson; Missouri during protests' },
 { date: '2020', event: 'Rhodes and leaders begin planning response to potential 2020 election loss' },
 { date: 'January 6, 2021', event: 'Members breach Capitol in military stack formation; weapons stockpiled at Virginia hotel' },
 { date: 'January 2022', event: 'Stewart Rhodes arrested; charged with seditious conspiracy' },
 { date: 'November 2022', event: 'Rhodes and Kelly Meggs convicted of seditious conspiracy' },
 { date: 'May 2023', event: 'Rhodes sentenced to 18 years; longest January 6 sentence' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: Oath Keepers Seditious Conspiracy Case', url: 'https://www.justice.gov/news', date: '2023' },
 { title: 'January 6th Committee: Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Stewart Rhodes', relationship: 'Founder; convicted of seditious conspiracy; sentenced to 18 years', href: '/entities/individuals/stewart-rhodes' },
 { name: 'Enrique Tarrio', relationship: 'Proud Boys leader; separate seditious conspiracy case', href: '/entities/individuals/enrique-tarrio' },
 ],
 },

 'osha': {
 name: 'Occupational Safety and Health Administration (OSHA)',
 title: 'Worker Safety Regulatory Agency',
 role: 'Federal workplace safety regulator',
 riskLevel: 'medium',
 description: 'OSHA is the federal agency responsible for enforcing workplace safety standards. It has been chronically underfunded and understaffed, with fewer inspectors than at any time since the 1970s. At current staffing levels, it would take OSHA 165 years to inspect every workplace in its jurisdiction once. Corporate lobbying has weakened standards, and penalties for companies whose negligence kills workers remain minimal.',
 education: [],
 affiliations: [
 { name: 'Department of Labor', role: 'Parent agency', type: 'agency' },
 ],
 controversies: [
 'CHRONIC UNDERFUNDING: Fewer inspectors than at any point since the 1970s despite workforce growth',
 'WEAK PENALTIES: Maximum penalty for willful violation resulting in worker death remains inadequate',
 'INDUSTRY CAPTURE: Standards development influenced by corporate lobbying',
 'AMAZON WAREHOUSES: Slow to act on documented dangerous conditions in Amazon fulfillment centers',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Labor Exploitation', slug: 'corporate-labor', severity: 'high' },
 ],
 timeline: [
 { date: '1970', event: 'Created by the Occupational Safety and Health Act' },
 { date: '2023', event: 'Staffing falls to lowest inspector count since 1970s' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OSHA Official Website', url: 'https://www.osha.gov', date: '2024' },
 ],
 aliases: ['OSHA'],
 knownAssociates: [],
 },
 'openai': {
 name: 'OpenAI',
 title: 'AI Research Company',
 role: 'Artificial intelligence research and deployment company',
 riskLevel: 'high',
 description: 'OpenAI is an AI research company that created ChatGPT and GPT-4, accelerating the AI arms race. Originally founded as a nonprofit focused on safe AI development, it restructured into a "capped-profit" entity, raising questions about its commitment to safety over profit. The 2023 firing and rehiring of CEO Sam Altman exposed governance dysfunction, while former researchers have warned about safety concerns being deprioritized.',
 education: [],
 affiliations: [
 { name: 'Microsoft', role: 'Major investor ($13 billion)', type: 'corporation' },
 ],
 controversies: [
 'NONPROFIT TO PROFIT: Transitioned from nonprofit to "capped-profit," drawing criticism for abandoning mission',
 'ALTMAN FIRING/REHIRING: Board fired Altman in Nov 2023, reinstated days later after employee revolt',
 'SAFETY CONCERNS: Senior safety researchers resigned citing speed prioritized over safety',
 'TRAINING DATA: Copyright lawsuits over training on copyrighted content without permission',
 'LABOR EXPLOITATION: Used low-paid Kenyan workers to filter traumatic content for RLHF training',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '2015', event: 'Founded as nonprofit by Altman, Musk, and others' },
 { date: '2019', event: 'Restructures as "capped-profit" entity' },
 { date: '2022 (Nov)', event: 'Launches ChatGPT' },
 { date: '2023 (Nov)', event: 'Board fires and rehires Altman in chaotic week' },
 { date: '2024', event: 'Safety team dissolution and departures' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenAI Official Website', url: 'https://openai.com', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Altman', relationship: 'CEO (fired and reinstated)', href: '/entities/individuals/sam-altman' },
 ],
 },
 'oprah-winfrey': {
 name: 'Oprah Winfrey',
 title: 'Media Mogul and Television Host',
 role: 'Media Icon; Billionaire; Cultural Influence',
 riskLevel: 'low',
 description: 'Oprah Gail Winfrey is a media executive; television host; actress; and philanthropist who became the first Black female billionaire and one of the most influential people in American media history. Her talk show \"The Oprah Winfrey Show\" ran for 25 seasons (1986-2011) and was the highest-rated daytime television program. In the context of power structure documentation; Winfrey\'s name appears in Jeffrey Epstein\'s contact book; though there is no evidence she was involved in any criminal activity. She was photographed with Epstein associate Harvey Weinstein at various industry events before his sexual assault convictions. Winfrey\'s cultural influence is enormous; her endorsement of books; products; and politicians (notably Barack Obama in 2008) had measurable impacts on sales and polling numbers (the \"Oprah Effect\"). She founded the Oprah Winfrey Network (OWN); O Magazine; and the Oprah Winfrey Leadership Academy for Girls in South Africa. The South Africa school faced scandal in 2007 when a dormitory matron was charged with sexually abusing students. Winfrey has been criticized for promoting pseudoscience on her show; including giving platforms to anti-vaccine advocates; Dr. Oz (later faced Federal Trade Commission scrutiny for fraudulent medical claims); and Dr. Phil. Her promotion of \"The Secret\" (law of attraction) was criticized as harmful magical thinking that blamed victims for their circumstances.',
 birthDate: 'January 29, 1954',
 birthPlace: 'Kosciusko, Mississippi',
 netWorth: '$2.5 billion (2024)',
 education: ['Tennessee State University, BA Speech and Drama'],
 affiliations: [
 { name: 'Harpo Productions', role: 'Founder and Chairman', type: 'corporation' },
 { name: 'OWN (Oprah Winfrey Network)', role: 'Founder', type: 'corporation' },
 ],
 controversies: [
 'Name appeared in Jeffrey Epstein\'s contact book; though no evidence of involvement in criminal activity',
 'Photographed with Harvey Weinstein at multiple industry events before his sexual assault convictions; later said she had no knowledge of his crimes',
 'Oprah Winfrey Leadership Academy for Girls in South Africa: dormitory matron charged with sexually abusing students in 2007',
 'Promoted pseudoscience on her show; including platforms for anti-vaccine advocates and unproven medical treatments',
 'Gave prominent platform to Dr. Oz; who later faced FTC scrutiny for fraudulent health claims; and Dr. Phil; criticized for exploitative treatment of guests',
 'Promotion of \"The Secret\" (law of attraction) criticized as harmful magical thinking that implicitly blames victims for their own suffering',
 'Her enormous cultural influence (\"Oprah Effect\") raises questions about the concentration of media power in individual personalities and the consequences of celebrity endorsements on public health and politics',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 29, 1954', event: 'Born in Kosciusko; Mississippi' },
 { date: '1986', event: 'The Oprah Winfrey Show begins national syndication' },
 { date: '2003', event: 'Became the first Black female billionaire' },
 { date: '2007', event: 'Oprah Winfrey Leadership Academy abuse scandal in South Africa' },
 { date: '2008', event: 'Endorsed Barack Obama; \"Oprah Effect\" credited with 1+ million additional votes' },
 { date: '2011', event: 'Final episode of The Oprah Winfrey Show after 25 seasons' },
 { date: '2011', event: 'Launched Oprah Winfrey Network (OWN)' },
 { date: '2024', event: 'Continues media empire; net worth approximately $2.5 billion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Forbes: Oprah Winfrey Profile', url: 'https://www.forbes.com/profile/oprah-winfrey/', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harvey Weinstein', relationship: 'Appeared together at industry events before his conviction', href: '/entities/individuals/harvey-weinstein' },
 ],
 },
 'mitch-mcconnell': {
  name: 'Mitch McConnell',
  title: 'Former Senate Majority Leader',
  role: 'Master of Obstruction Who Reshaped the Federal Judiciary',
  riskLevel: 'high' as const,
  description: 'Mitch McConnell served as the longest-serving Senate party leader in American history, wielding procedural power to reshape the federal judiciary, block legislation, and protect corporate political spending. His decision to block Merrick Garlands Supreme Court nomination for nearly a year, then rush Amy Coney Barretts confirmation in weeks, fundamentally altered the courts ideological balance.',
  birthDate: '1942-02-20',
  birthPlace: 'Sheffield, Alabama',
  education: [
   'B.A. in Political Science, University of Louisville (1964)',
   'J.D., University of Kentucky College of Law (1967)',
  ],
  affiliations: [
   { name: 'United States Senate', role: 'Senator from Kentucky, Majority Leader (1985-present)', type: 'agency' as const },
  ],
  controversies: [
   'Blocked Supreme Court nominee Merrick Garland for 293 days in 2016, claiming election year precedent; then reversed that position to confirm Amy Coney Barrett eight days before the 2020 election',
   'Led opposition to campaign finance reform; celebrated Citizens United decision that opened unlimited corporate spending in elections',
   'Wife Elaine Chao served as Trumps Transportation Secretary while DOT IG found she used the office to benefit family shipping business',
   'Received over $3.5 million from drug companies while blocking legislation to lower prescription drug prices',
   'Blocked election security bills after intelligence agencies warned of Russian interference in 2016 and 2020 elections',
   'Used the filibuster to block voting rights legislation, gun safety measures, and minimum wage increases supported by majority of Americans',
   'Acknowledged Trump bore responsibility for January 6 but voted to acquit him in the impeachment trial, stating a president could not be convicted after leaving office',
  ],
  relatedInvestigations: [
   { title: 'Judicial Election Dark Money', slug: 'judicial-election-dark-money', severity: 'critical' },
  ],
  timeline: [
   { date: '1985', event: 'Elected to the U.S. Senate from Kentucky' },
   { date: '2007', event: 'Became Senate Republican Leader' },
   { date: '2010-01', event: 'Citizens United decided; McConnell celebrated the ruling he had long championed' },
   { date: '2016-02', event: 'Blocked Merrick Garland nomination for nearly a year' },
   { date: '2017-04', event: 'Eliminated filibuster for Supreme Court nominees to confirm Neil Gorsuch' },
   { date: '2020-10', event: 'Rushed Amy Coney Barrett confirmation eight days before election' },
   { date: '2021-02', event: 'Voted to acquit Trump after January 6 despite saying Trump was "practically and morally responsible"' },
   { date: '2024-02', event: 'Announced he would step down as Republican leader after the 2024 election cycle' },
  ],
  sources: [
   { title: 'Senate Records: McConnell Leadership Timeline', date: '2024' },
   { title: 'OpenSecrets: McConnell Donor Profile and Pharmaceutical Industry Contributions', url: 'https://www.opensecrets.org/', date: '2024' },
   { title: 'DOT OIG: Investigation of Secretary Chaos Use of Office', date: '2021' },
  ],
  aliases: ['Moscow Mitch', 'The Grim Reaper (self-applied, referring to killing legislation)'],
  knownAssociates: [
   { name: 'Donald Trump', relationship: 'Uneasy alliance; McConnell enabled Trump judicial appointments while privately criticizing him', href: '/entities/individuals/donald-trump' },
   { name: 'Elaine Chao', relationship: 'Wife who served as Trumps Transportation Secretary; DOT OIG found misuse of office for family benefit', href: '/entities/individuals/elaine-chao' },
  ],
 },
 'oliver-wendell-holmes-jr': {
  name: 'Oliver Wendell Holmes Jr.',
  title: 'Associate Justice, U.S. Supreme Court',
  role: 'Author of the 1927 Buck v. Bell majority opinion that legalized forced sterilization and declared "three generations of imbeciles are enough"',
  riskLevel: 'critical' as const,
  description: 'Oliver Wendell Holmes Jr. (1841-1935) was an Associate Justice of the United States Supreme Court from 1902 to 1932. While widely celebrated as a legal philosopher, Holmes authored one of the most morally catastrophic Supreme Court decisions in American history: Buck v. Bell (1927). Writing for an 8-1 majority, Holmes upheld Virginia compulsory sterilization law, ruling that the state could forcibly sterilize citizens deemed "unfit" and declaring "three generations of imbeciles are enough." The decision, which was based on fraudulent evidence and a rigged legal proceeding, provided the legal framework for the forced sterilization of over 60,000 Americans across 32 states. Buck v. Bell has never been explicitly overturned by the Supreme Court. Holmes opinion was later cited by Nazi defendants at the Nuremberg trials as justification for their own eugenics programs. Holmes enthusiasm for eugenics reflected his Social Darwinist worldview, in which he privately expressed contempt for those he considered inferior.',
  birthDate: '1841-03-08',
  birthPlace: 'Boston, Massachusetts',
  deathDate: '1935-03-06',
  education: ['Harvard College (A.B., 1861)', 'Harvard Law School (LL.B., 1866)'],
  affiliations: [
   { name: 'Supreme Court of the United States', role: 'Associate Justice (1902-1932); authored the Buck v. Bell majority opinion legalizing forced sterilization', type: 'agency' },
  ],
  controversies: [
   'Authored Buck v. Bell (1927), declaring "three generations of imbeciles are enough" and legalizing forced sterilization of over 60,000 Americans',
   'Decision was based on fraudulent evidence: Carrie Buck was not "feebleminded" but was institutionalized after being raped by her foster parents nephew',
   'Buck v. Bell was cited by Nazi defendants at Nuremberg as justification for German eugenics and sterilization programs',
   'The decision has never been explicitly overturned by the Supreme Court',
   'Holmes privately expressed Social Darwinist contempt for those he deemed inferior, writing that the law should "build a race"',
  ],
  relatedInvestigations: [
   { title: 'Mandatory Sterilization Programs in the United States', slug: 'mandatory-sterilization-programs-united-states', severity: 'critical' },
  ],
  timeline: [
   { date: '1902-12-04', event: 'Appointed to the U.S. Supreme Court by President Theodore Roosevelt' },
   { date: '1927-05-02', event: 'Authors the 8-1 Buck v. Bell majority opinion upholding forced sterilization and writing "three generations of imbeciles are enough"' },
   { date: '1932-01-12', event: 'Retires from the Supreme Court at age 90' },
   { date: '1933', event: 'Nazi Germany passes its Law for the Prevention of Hereditarily Diseased Offspring, modeled partly on American laws upheld by Buck v. Bell' },
   { date: '1935-03-06', event: 'Dies in Washington, D.C. at age 93; Buck v. Bell remains on the books' },
  ],
  sources: [
   { title: 'Supreme Court: Buck v. Bell, 274 U.S. 200 (1927)', url: 'https://supreme.justia.com/cases/federal/us/274/200/', date: '1927' },
   { title: 'University of Virginia: The Eugenics Crusade and Buck v. Bell', date: '2018' },
  ],
  knownAssociates: [
   { name: 'Carrie Buck', relationship: 'Plaintiff in Buck v. Bell; forcibly sterilized at age 21 after being institutionalized following a rape by her foster family' },
   { name: 'Harry Laughlin', relationship: 'Eugenics Record Office superintendent whose model sterilization law was upheld in Buck v. Bell' },
  ],
 },
};

export default profiles;
