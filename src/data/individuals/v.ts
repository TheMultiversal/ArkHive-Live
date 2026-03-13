// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'vladimir-putin': {
 name: 'Vladimir Vladimirovich Putin',
 title: 'President of Russia',
 role: 'Russian Authoritarian Leader',
 riskLevel: 'critical',
 description: 'Vladimir Putin is the President of Russia who has been implicated in extensive election interference operations targeting the 2016 U.S. presidential election to benefit Donald Trump, as documented in the Mueller Report.',
 birthDate: 'October 7, 1952',
 birthPlace: 'Leningrad (St. Petersburg), Soviet Union',
 netWorth: '$70+ billion (estimated, hidden)',
 education: ['Law Degree, Leningrad State University', 'KGB Training'],
 affiliations: [
 { name: 'Russian Federation', role: 'President (2000-2008, 2012-Present)', type: 'agency' },
 { name: 'KGB', role: 'Officer (1975-1991)', type: 'agency' },
 ],
 controversies: [
 '2016 U.S. election interference operation (Mueller Report)',
 'Internet Research Agency troll farm operations',
 'GRU hacking of DNC and Clinton campaign',
 'Helsinki summit where Trump sided with Putin over U.S. intelligence',
 'Bounties on U.S. troops in Afghanistan (alleged)',
 'Poisoning of political opponents (Navalny, Skripal)',
 'Invasion of Ukraine (2022)',
 ],
 charges: [
 { statute: 'Rome Statute Article 8 (War Crimes)', description: 'ICC ARREST WARRANT; International Criminal Court issued arrest warrant for war crimes in Ukraine including deportation of children (March 2023)', category: 'International Criminal' },
 { statute: 'Rome Statute Article 8(2)(a)(vii)', description: 'Unlawful Deportation; Systematic deportation of Ukrainian children to Russia constituting war crime', category: 'International Criminal' },
 { statute: 'Rome Statute Article 7 (Crimes Against Humanity)', description: 'Crimes Against Humanity; Systematic attacks on civilian population in Ukraine including deliberate targeting of civilian infrastructure', category: 'International Criminal' },
 { statute: 'UN Charter Article 2(4)', description: 'War of Aggression; Unprovoked invasion of sovereign nation Ukraine violating fundamental UN Charter prohibition on use of force', category: 'International' },
 { statute: '52 U.S.C. § 30121', description: 'Foreign Election Interference; Directed 2016 Russian interference operation documented in Mueller Report and Senate Intelligence Committee findings', category: 'US Election Law' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States; Oversaw campaign to interfere with lawful functions of US government (elections)', category: 'US Federal' },
 { statute: '18 U.S.C. § 1030', description: 'Computer Fraud and Abuse; GRU hacking operations against DNC, DCCC, and Clinton campaign conducted under his authority', category: 'US Federal' },
 { statute: 'Convention Against Torture Article 2', description: 'State-Sponsored Torture; Systematic torture of political prisoners including Alexei Navalny who died in custody', category: 'International' },
 { statute: 'Chemical Weapons Convention', description: 'Use of Chemical Weapons; Novichok poisoning of Sergei Skripal, Alexei Navalny, and others', category: 'International' },
 { statute: 'Geneva Convention IV', description: 'Protection of Civilians; Deliberate attacks on Ukrainian civilian infrastructure including hospitals, schools, residential areas', category: 'International Humanitarian Law' },
 { statute: 'Global Magnitsky Human Rights Accountability Act', description: 'Human Rights Violations; Subject to US sanctions for serious human rights abuses and corruption', category: 'US Law' },
 { statute: 'ICCPR Articles 6, 7, 9, 19', description: 'Political Assassinations; Ordering killings of journalists, dissidents, and political opponents (Politkovskaya, Nemtsov, Litvinenko, others)', category: 'International' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1952', event: 'Born in Leningrad' },
 { date: '1975', event: 'Joins KGB' },
 { date: '2000', event: 'Becomes President of Russia' },
 { date: '2016', event: 'Orders election interference operation targeting U.S.' },
 { date: '2017', event: 'Mueller investigation begins' },
 { date: '2018', event: 'Helsinki summit with Trump' },
 { date: '2022', event: 'Invades Ukraine' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'Senate Intelligence Committee Russia Report', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' }, ],
 aliases: ['Czar', 'The Man Who Owns Russia'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Election interference beneficiary, Helsinki summit defender', href: '/entities/individuals/donald-trump' },
 { name: 'Paul Manafort', relationship: 'Received polling data via Kilimnik', href: '/entities/individuals/paul-manafort' },
 ],
 },
























 'viktor-yanukovych': {
 name: 'Viktor Fedorovych Yanukovych',
 title: 'Exiled Former President of Ukraine',
 role: 'Pro-Russian Ukrainian Leader, Manafort Client',
 riskLevel: 'high',
 description: 'Viktor Fedorovych Yanukovych served as President of Ukraine from 2010 to 2014. He was the primary client of Paul Manafort\'s political consulting work in Ukraine, paying millions through offshore accounts. He fled to Russia during the 2014 Euromaidan revolution and was convicted of treason in absentia by Ukrainian courts.',
 birthDate: 'July 9, 1950',
 birthPlace: 'Yenakiieve, Ukrainian SSR, Soviet Union',
 netWorth: '$12+ billion (stolen assets)',
 education: ['Donetsk Polytechnic Institute'],
 affiliations: [
 { name: 'Ukraine', role: 'President (2010-2014)', type: 'agency' },
 { name: 'Party of Regions', role: 'Leader', type: 'organization' },
 ],
 controversies: [
 'Manafort paid $65+ million for consulting work',
 'Pro-Russian policies aligned Ukraine with Moscow',
 'Ordered violent crackdown on Euromaidan protesters (100+ killed)',
 'Fled to Russia during 2014 revolution',
 'Convicted of treason by Ukrainian court',
 'Billions in assets stolen from Ukraine',
 'Manafort used Ukraine money to fund Trump campaign',
 ],
 charges: [
 { statute: 'Ukrainian Criminal Code', description: 'Treason; convicted in absentia, 13 years', category: 'National Security' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: '1950', event: 'Born in Ukraine' },
 { date: '2004', event: 'Loses election after fraud exposed (Orange Revolution)' },
 { date: '2010', event: 'Elected President of Ukraine' },
 { date: '2014', event: 'Flees to Russia during Euromaidan revolution' },
 { date: '2019', event: 'Convicted of treason in absentia' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives/sco/file/1373816/download', date: '2019' },
 { title: 'Senate Intelligence Committee Report', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' }, ],
 aliases: ['Putin\'s Puppet'],
 knownAssociates: [
 { name: 'Paul Manafort', relationship: 'Political consultant, paid millions', href: '/entities/individuals/paul-manafort' },
 { name: 'Vladimir Putin', relationship: 'Russian patron, granted asylum', href: '/entities/individuals/vladimir-putin' },
 { name: 'Konstantin Kilimnik', relationship: 'Manafort operative in Ukraine', href: '/entities/individuals/konstantin-kilimnik' },
 ],
 },
























 'virginia-giuffre': {
 name: 'Virginia Louise Giuffre',
 title: 'Epstein Survivor, Key Accuser',
 role: 'Trafficking Victim, Forced Prince Andrew Settlement',
 riskLevel: 'low',
 description: 'Virginia Louise Giuffre is the primary accuser and survivor-advocate in the Jeffrey Epstein sex trafficking case. She alleged she was recruited by Ghislaine Maxwell at Mar-a-Lago at age 16 and trafficked to Epstein\'s properties and powerful associates including Prince Andrew, Alan Dershowitz, and others. Her civil lawsuit against Prince Andrew was settled for an estimated $12 million.',
 birthDate: 'August 9, 1983',
 birthPlace: 'Sacramento, California, USA',
 netWorth: 'Unknown (settlements)',
 education: ['Unknown'],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Initially recruited at Mar-a-Lago at age 16',
 'Trafficked to powerful men including Prince Andrew',
 'Filed lawsuit that led to document unsealing',
 'Received threats for speaking out',
 'Prince Andrew photo became iconic evidence',
 'Settlement with Prince Andrew for undisclosed sum',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1983', event: 'Born in Sacramento, California' },
 { date: '2000', event: 'Age 16: Recruited at Mar-a-Lago by Maxwell' },
 { date: '2000-2002', event: 'Trafficked by Epstein network, including to Prince Andrew' },
 { date: '2002', event: 'Escapes network' },
 { date: '2015', event: 'Files lawsuit against Maxwell, begins unsealing documents' },
 { date: '2019', event: 'Calls for accountability after Epstein death' },
 { date: '2021', event: 'Provides evidence used in Maxwell trial' },
 { date: '2021', event: 'August: Sues Prince Andrew' },
 { date: '2022', event: 'February: Prince Andrew settles for $12M+' },
 { date: '2024', event: 'Documents continue to be unsealed' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Giuffre v. Maxwell Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
 { title: 'Prince Andrew Settlement', url: 'https://www.bbc.com/news/uk-60393843', date: '2022' },
 { title: 'Maxwell Trial Testimony', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
 ],
 aliases: ['Virginia Roberts (maiden name)'],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Trafficked by him from age 16', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Recruited and groomed her, testified against', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Donald Trump', relationship: 'Documented at events where Epstein trafficked victims', href: '/entities/individuals/donald-trump' },
 { name: 'Prince Andrew', relationship: 'Forced to have sex with him, sued and settled' },
 ],
 },
























 'viktor-knavs': {
 name: 'Viktor Knavs',
 title: 'Father of First Lady Melania Trump',
 role: 'Slovenian Businessman, US Citizen via Chain Migration',
 riskLevel: 'low',
 description: 'Viktor Knavs is the father of former and current First Lady Melania Trump. He and his wife Amalija emigrated to the United States and became citizens in 2018 through the family reunification process that Donald Trump has repeatedly attacked as "chain migration."The irony of Trump attacking immigration policies his own in-laws benefited from has been widely noted.',
 birthDate: '1944',
 birthPlace: 'Slovenia (then Yugoslavia)',
 education: [
 'Unknown formal education',
 ],
 affiliations: [
 { name: 'Trump Family', role: 'Father-in-law of Donald Trump', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Melania Trump', relationship: 'Daughter, First Lady', href: '/entities/individuals/melania-trump' },
 { name: 'Donald Trump', relationship: 'Son-in-law, President', href: '/entities/individuals/donald-trump' },
 { name: 'Amalija Knavs', relationship: 'Wife', href: '/entities/individuals/amalija-knavs' },
 { name: 'Barron Trump', relationship: 'Grandson', href: '/entities/individuals/barron-trump' },
 ],
 controversies: [
 'Became US citizen through "chain migration "that Trump campaigns against',
 'Reports of Communist Party membership in Slovenia (common for career advancement)',
 'Received citizenship while Trump attacked family immigration policies',
 'Hypocrisy of Trump family benefiting from policies Trump seeks to end',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '1944', event: 'Born in Slovenia' },
 { date: '1970', event: 'Daughter Melania born' },
 { date: '2018', event: 'Becomes US citizen through family sponsorship' },
 ],
 sources: [
 { title: 'Washington Post, Melania Parents Citizenship', url: 'https://www.washingtonpost.com/', date: '2018' },
 ],
 },
 'viktor-orban': {
 name: 'Viktor Orban',
 title: 'Prime Minister of Hungary; Architect of Illiberal Democracy',
 role: 'Head of State; Fidesz Party Leader; EU Dissident',
 riskLevel: 'high',
 description: 'Viktor Mihaly Orban is the Prime Minister of Hungary; serving since 2010 (and previously from 1998 to 2002); and the leader of the Fidesz party. Once a liberal anti-communist activist who received a George Soros-funded scholarship to Oxford in 1989; Orban transformed into Europe\'s leading illiberal populist; openly declaring his goal to build an \"illiberal state\" modeled on authoritarian systems like Russia; Turkey; and China. Under his leadership; Hungary has experienced systematic erosion of judicial independence; press freedom; and academic freedom. Orban\'s government effectively controls most Hungarian media through oligarchs loyal to Fidesz; rewrites election laws to entrench his party\'s dominance; and uses EU structural funds as patronage. He expelled Central European University (founded by Soros) from Hungary and passed anti-LGBTQ legislation. Orban has cultivated close relationships with Vladimir Putin; Donald Trump; and other populist leaders while repeatedly blocking EU consensus on Russia sanctions and Ukraine aid. The European Parliament voted in 2022 that Hungary could no longer be considered a democracy; classifying it as a \"hybrid regime of electoral autocracy.\"',
 birthDate: 'May 31, 1963',
 birthPlace: 'Szekesfehervar, Hungary',
 education: ['Eotvos Lorand University; Budapest (Law)', 'Pembroke College; Oxford (Soros scholarship; 1989)'],
 affiliations: [
 { name: 'Fidesz', role: 'Party Leader and Co-Founder', type: 'organization' },
 { name: 'Government of Hungary', role: 'Prime Minister (1998-2002; 2010-present)', type: 'agency' },
 ],
 controversies: [
 'Declared goal of building \"illiberal state\" in 2014 speech; citing Russia; Turkey; and China as models',
 'European Parliament classified Hungary as no longer a democracy; labeling it hybrid regime of electoral autocracy (2022)',
 'Expelled Central European University founded by George Soros; passed Stop Soros law criminalizing aid to migrants',
 'Media capture: loyal oligarchs control approximately 80% of Hungarian media',
 'Blocked EU consensus on Russia sanctions and Ukraine military aid multiple times',
 'Maintains close personal relationship with Putin despite Russia\'s invasion of Ukraine',
 'Anti-LGBTQ legislation banning depiction of homosexuality to minors',
 'Close Trump ally; invited to Mar-a-Lago; praised by Trump as strong leader',
 'EU withheld billions in structural funds over rule-of-law violations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-election-interference', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 31, 1963', event: 'Born in Szekesfehervar; Hungary' },
 { date: '1988', event: 'Co-founds Fidesz as liberal anti-communist youth movement' },
 { date: '1989', event: 'Receives Soros-funded scholarship to Oxford; delivers famous speech demanding Soviet withdrawal' },
 { date: '1998', event: 'First term as Prime Minister begins' },
 { date: '2010', event: 'Returns to power with supermajority; begins constitutional overhaul' },
 { date: 'July 2014', event: 'Delivers illiberal state speech at Baile Tusnad' },
 { date: '2018', event: 'Forces Central European University out of Hungary' },
 { date: 'September 2022', event: 'European Parliament declares Hungary no longer a full democracy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'European Parliament Resolution on Hungary', url: 'https://www.europarl.europa.eu/news/en/press-room/20220909IPR40137/', date: '2022' },
 { title: 'Freedom House: Hungary Country Report', url: 'https://freedomhouse.org/country/hungary', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'Close ally; maintained relationship despite Ukraine invasion', href: '/entities/individuals/vladimir-putin' },
 { name: 'Donald Trump', relationship: 'Political ally; frequent Mar-a-Lago visitor', href: '/entities/individuals/donald-trump' },
 ],
 },


 'volodymyr-zelensky': {
 name: 'Volodymyr Zelensky',
 title: 'President of Ukraine; Central Figure in Trump Impeachment and Russia-Ukraine War',
 role: 'Head of State; Former Comedian and Actor',
 riskLevel: 'medium',
 description: 'Volodymyr Oleksandrovych Zelensky is the President of Ukraine; serving since May 2019. A former comedian and actor who starred in the television series \"Servant of the People\" (playing a teacher who accidentally becomes president); Zelensky won the 2019 presidential election in a landslide against incumbent Petro Poroshenko. He became a central figure in American politics when a July 25; 2019 phone call between him and Donald Trump became the basis for Trump\'s first impeachment. Trump pressured Zelensky to publicly announce investigations into Joe Biden and his son Hunter Biden\'s connections to Burisma; while withholding $391 million in congressionally approved military aid as leverage. Zelensky became a global wartime leader after Russia\'s full-scale invasion of Ukraine on February 24; 2022; rallying international support; securing billions in Western military and economic aid; and refusing American offers to evacuate with the famous line \"I need ammunition; not a ride.\" His name appeared in the Pandora Papers; revealing offshore companies in the British Virgin Islands; Belize; and Cyprus; though he stated the assets predated his presidency.',
 birthDate: 'January 25, 1978',
 birthPlace: 'Kryvyi Rih, Ukrainian SSR, Soviet Union',
 education: ['Kryvyi Rih Institute of Economics (Law Degree)'],
 affiliations: [
 { name: 'Government of Ukraine', role: 'President (2019-present)', type: 'agency' },
 { name: 'Servant of the People (Party)', role: 'Founder and Leader', type: 'organization' },
 { name: 'Kvartal 95', role: 'Co-Founder; Production Company', type: 'corporation' },
 ],
 controversies: [
 'Central figure in Trump\'s first impeachment: Trump withheld $391M in military aid to pressure Zelensky into announcing Biden/Burisma investigation',
 'Pandora Papers revealed network of offshore companies in British Virgin Islands; Belize; and Cyprus',
 'Wartime corruption scandals in Ukrainian defense procurement; including food and equipment contracts',
 'Consolidated media under national telethon during martial law; limiting press freedom',
 'Extended martial law and postponed elections during ongoing Russian invasion',
 'Tensions with Trump administration over peace negotiation terms and territorial concessions',
 'Fired multiple senior officials for corruption during wartime; including defense minister Oleksii Reznikov',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 25, 1978', event: 'Born in Kryvyi Rih; Ukrainian SSR' },
 { date: '2015', event: 'Stars in Servant of the People TV series as fictional president' },
 { date: 'April 21, 2019', event: 'Wins presidential election with 73% of the vote' },
 { date: 'July 25, 2019', event: 'Receives phone call from Trump pressuring him to investigate Bidens; basis for first Trump impeachment' },
 { date: 'October 2021', event: 'Pandora Papers reveal offshore financial holdings' },
 { date: 'February 24, 2022', event: 'Russia launches full-scale invasion; Zelensky refuses to evacuate' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Trump-Zelensky Call Transcript', url: 'https://www.whitehouse.gov/wp-content/uploads/2019/09/Unclassified09.2019.pdf', date: '2019' },
 { title: 'Pandora Papers: ICIJ', url: 'https://www.icij.org/investigations/pandora-papers/', date: '2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Trump pressured Zelensky to investigate Bidens; withheld military aid', href: '/entities/individuals/donald-trump' },
 { name: 'Joe Biden', relationship: 'Biden administration provided major military and economic support to Ukraine', href: '/entities/individuals/joe-biden' },
 { name: 'Vladimir Putin', relationship: 'Adversary; Russian president who ordered full-scale invasion of Ukraine', href: '/entities/individuals/vladimir-putin' },
 ],
 },






 'vivek-ramaswamy': {
 name: 'Vivek Ramaswamy',
 title: 'Biotech Entrepreneur; Co-Leader of DOGE; Failed 2024 Presidential Candidate',
 role: 'Businessman; Political Figure; Government Efficiency Advocate',
 riskLevel: 'medium',
 description: 'Vivek Ganapathy Ramaswamy is an American entrepreneur; author; and political figure who founded Roivant Sciences; a pharmaceutical company that acquires and develops shelved drug candidates from larger firms. Born to Indian immigrants in Cincinnati; Ramaswamy attended Harvard and Yale Law School before working at a hedge fund and then launching Roivant in 2014. The company\'s IPO in 2021 valued it at over $7 billion; though its business model drew criticism as financial engineering rather than genuine pharmaceutical innovation. Ramaswamy ran for the Republican presidential nomination in 2024; positioning himself as an anti-woke culture warrior and Trump ally; before dropping out and endorsing Trump. After Trump\'s election; Ramaswamy was appointed co-leader (alongside Elon Musk) of the Department of Government Efficiency (DOGE); a non-governmental advisory body tasked with identifying federal spending cuts and regulatory reform. DOGE drew intense controversy for its sweeping proposals to slash federal agencies; with critics arguing it lacked constitutional authority. Ramaswamy departed DOGE in February 2025 to pursue a gubernatorial campaign in Ohio.',
 birthDate: 'August 9, 1985',
 birthPlace: 'Cincinnati, Ohio, USA',
 education: ['Harvard University; AB in Biology (2007)', 'Yale Law School; JD (2013)'],
 affiliations: [
 { name: 'Roivant Sciences', role: 'Founder and Former CEO', type: 'corporation' },
 { name: 'Department of Government Efficiency (DOGE)', role: 'Co-Leader (November 2024-February 2025)', type: 'organization' },
 { name: 'Strive Asset Management', role: 'Co-Founder; anti-ESG investment firm', type: 'corporation' },
 ],
 controversies: [
 'DOGE co-leadership with Elon Musk drew criticism for lack of constitutional authority and aggressive proposals to slash federal workforce',
 'Roivant Sciences business model criticized as financial engineering; acquiring shelved drugs from big pharma rather than genuine R&D',
 'Plagiarism allegations during 2024 presidential campaign regarding debate statements',
 'Strive Asset Management founded explicitly to counter ESG investing',
 'Departed DOGE after only weeks amid power struggles with Musk and legal challenges',
 'Campaign rhetoric included proposals to eliminate the FBI; raise voting age to 25; and end birthright citizenship',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 9, 1985', event: 'Born in Cincinnati; Ohio to Indian immigrant parents' },
 { date: '2014', event: 'Founds Roivant Sciences' },
 { date: '2021', event: 'Roivant Sciences IPO values company at over $7 billion' },
 { date: 'February 2023', event: 'Announces presidential campaign for 2024 Republican nomination' },
 { date: 'January 2024', event: 'Drops out of presidential race; endorses Trump' },
 { date: 'November 2024', event: 'Appointed co-leader of DOGE alongside Elon Musk' },
 { date: 'February 2025', event: 'Departs DOGE to pursue Ohio gubernatorial campaign' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC Filings: Roivant Sciences', url: 'https://www.sec.gov/cgi-bin/browse-edgar?company=roivant', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elon Musk', relationship: 'DOGE co-leader', href: '/entities/individuals/elon-musk' },
 { name: 'Donald Trump', relationship: 'Appointed by Trump to lead DOGE after endorsing him', href: '/entities/individuals/donald-trump' },
 ],
 },


 'viktor-vekselberg': {
 name: 'Viktor Vekselberg',
 title: 'Russian-Ukrainian Oligarch; Renova Group Founder; Sanctioned by U.S. Treasury',
 role: 'Billionaire Industrialist; Putin Associate; Cohen Payment Scandal',
 riskLevel: 'high',
 description: 'Viktor Felixovich Vekselberg is a Russian-Ukrainian oligarch and the founder and chairman of the Renova Group; a Moscow-based conglomerate with interests in metals; mining; energy; telecommunications; and technology. He became a figure of significant interest in the Trump-Russia investigation when it was revealed that Columbus Nova (run by his cousin Andrew Intrater) made approximately $580;000 in payments to Michael Cohen\'s shell company Essential Consultants LLC; the same entity used to pay hush money to Stormy Daniels. Vekselberg attended Trump\'s inauguration in January 2017 and was seated at a dinner with Michael Flynn. He was present at the December 2015 RT gala in Moscow where Flynn sat at Putin\'s table. The U.S. Treasury placed Vekselberg under sanctions in April 2018 as part of actions targeting Russian oligarchs close to the Kremlin. Mueller investigation team detained and questioned Vekselberg at a U.S. airport in 2018.',
 birthDate: 'April 14, 1957',
 birthPlace: 'Drohobych, Ukrainian SSR, Soviet Union',
 education: ['Moscow Institute of Transportation Engineers (Mechanical Engineering)'],
 affiliations: [
 { name: 'Renova Group', role: 'Founder and Chairman', type: 'corporation' },
 { name: 'Columbus Nova', role: 'Linked through cousin Andrew Intrater; made payments to Michael Cohen', type: 'corporation' },
 { name: 'Skolkovo Foundation', role: 'President; Russian technology innovation hub', type: 'organization' },
 ],
 controversies: [
 'Columbus Nova paid $580;000 to Michael Cohen\'s Essential Consultants LLC; same shell company used for Stormy Daniels hush money',
 'Attended Trump inauguration (January 2017) and sat at dinner with Michael Flynn',
 'Present at December 2015 RT gala in Moscow where Flynn sat at Putin\'s table',
 'U.S. Treasury sanctions imposed April 2018; freezing American assets',
 'Mueller investigation team detained and questioned him at U.S. airport in 2018',
 'Skolkovo Foundation involvement linked to Russian tech espionage concerns raised by FBI',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-election-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 14, 1957', event: 'Born in Drohobych; Ukrainian SSR' },
 { date: '1990s', event: 'Builds Renova Group during Russian privatization era' },
 { date: 'December 2015', event: 'Attends RT gala in Moscow where Flynn sits at Putin\'s table' },
 { date: 'January 2017', event: 'Attends Trump inauguration; seated at dinner with Michael Flynn' },
 { date: '2017', event: 'Columbus Nova makes $580;000 in payments to Cohen\'s Essential Consultants LLC' },
 { date: 'April 6, 2018', event: 'U.S. Treasury imposes sanctions; freezing American assets' },
 { date: '2018', event: 'Detained and questioned by Mueller investigation team at U.S. airport' },
 ],
 socialMedia: [],
 sources: [
 { title: 'U.S. Treasury OFAC Sanctions', url: 'https://home.treasury.gov/news/press-releases/sm0338', date: '2018' },
 { title: 'Mueller Report Volume I', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Cohen', relationship: 'Columbus Nova paid $580K to Cohen\'s shell company', href: '/entities/individuals/michael-cohen' },
 { name: 'Michael Flynn', relationship: 'Attended 2015 RT gala and 2017 inauguration dinner together', href: '/entities/individuals/michael-flynn' },
 { name: 'Andrew Intrater', relationship: 'Cousin who runs Columbus Nova; made payments to Cohen', href: '/entities/individuals/andrew-intrater' },
 ],
 },






 'valery-gerasimov': {
 name: 'Valery Gerasimov',
 title: 'Chief of the General Staff, Russian Armed Forces',
 role: 'Top Russian military commander',
 riskLevel: 'high',
 description: 'General of the Army Valery Vasilyevich Gerasimov has served as Chief of the General Staff of the Russian Armed Forces since 2012. He is the author of the "Gerasimov Doctrine" on hybrid warfare and was placed in direct command of Russian forces in Ukraine in January 2023. He has been indicted by the ICC for war crimes.',
 education: ['Kazan Higher Tank Command School', 'Military Academy of the General Staff'],
 affiliations: [
 ],
 controversies: [
 'Placed in overall command of the Russian invasion of Ukraine in January 2023 following battlefield setbacks',
 'Developer of the "Gerasimov Doctrine" which outlined Russias hybrid warfare strategy combining military, cyber, information, and political operations',
 'ICC issued arrest warrant for Gerasimov in June 2024 for directing attacks on Ukrainian civilian infrastructure constituting war crimes',
 'Oversaw Russian military operations that included documented targeting of hospitals, schools, and residential areas in Ukraine',
 'Sanctioned by EU, US, UK, and other nations for role in the invasion of Ukraine',
 ],
 charges: [
 { statute: 'ICC Rome Statute Art. 8', description: 'War crimes; directing attacks against civilian objects and infrastructure', category: 'War Crimes' },
 ],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2012-11-09', event: 'Appointed Chief of the General Staff' },
 { date: '2013-02-01', event: 'Published article outlining hybrid warfare strategy ("Gerasimov Doctrine")' },
 { date: '2022-02-24', event: 'Oversaw launch of full-scale invasion of Ukraine' },
 { date: '2023-01-11', event: 'Named overall commander of Russian forces in Ukraine' },
 { date: '2024-06-25', event: 'ICC issues arrest warrant for war crimes in Ukraine' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ICC: Arrest Warrants for Ukraine Situation', url: 'https://www.icc-cpi.int/situations/ukraine', date: '2024-06-25' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'President and Commander-in-Chief', href: '/entities/individuals/vladimir-putin' },
 { name: 'Sergei Shoigu', relationship: 'Former Defense Minister, direct superior until 2024', href: '/entities/individuals/sergei-shoigu' },
 ],
 },

 'valerie-plame': {
 name: 'Valerie Plame',
 title: 'CIA Covert Officer (Exposed)',
 role: 'CIA officer whose identity was illegally exposed in retaliation for her husband\'s Iraq War criticism',
 riskLevel: 'low',
 description: 'Valerie Plame was a covert CIA officer whose identity was exposed by the Bush administration in 2003 as retaliation against her husband, Joe Wilson, who publicly disputed Bush\'s claim that Iraq sought uranium from Niger. The exposure ended her career, potentially endangered lives, and exposed the administration\'s willingness to burn intelligence assets for political revenge.',
 birthDate: 'August 13, 1963',
 birthPlace: 'Anchorage, Alaska',
 education: ['Pennsylvania State University', 'London School of Economics', 'College of Europe'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Covert Operations Officer', type: 'agency' },
 ],
 controversies: [
 'CIA covert officer whose identity was deliberately leaked by Bush administration officials in retaliation for her husband\'s Iraq War criticism',
 'Scooter Libby convicted of obstruction related to the leak; later pardoned by Trump',
 'The leak destroyed her intelligence network tracking WMD proliferation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Plame Affair', slug: 'plame-leak', severity: 'high' },
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 13, 1963', event: 'Born in Anchorage, Alaska' },
 { date: '1985', event: 'Joins CIA' },
 { date: 'July 6, 2003', event: 'Husband Joe Wilson publishes op-ed questioning Iraq intelligence' },
 { date: 'July 14, 2003', event: 'Robert Novak publishes column outing her as CIA' },
 { date: '2007', event: 'Scooter Libby convicted for obstruction in leak investigation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Valerie Plame -"Fair Game"', url: 'https://scholar.google.com/scholar?q=Valerie%20Plame%20-%22Fair%20Game%22', date: '2007' },
 { title: 'Special Counsel investigation', url: 'https://scholar.google.com/scholar?q=Special%20Counsel%20investigation', date: '2005-2007' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Wilson', relationship: 'Husband', href: '/entities/individuals/joe-wilson' },
 { name: 'Richard Armitage', relationship: 'Original leaker', href: '/entities/individuals/richard-armitage' },
 ],
 },

 'vivek-murthy': {
 name: 'Vivek Murthy',
 title: 'U.S. Surgeon General',
 role: 'Surgeon General who declared social media harms a public health emergency',
 riskLevel: 'low',
 description: 'Vivek Murthy is the U.S. Surgeon General who has declared social media harms to youth mental health a public health emergency. He has called for warning labels on social media platforms similar to tobacco warnings, highlighting the link between social media use and youth depression and anxiety.',
 birthDate: 'July 10, 1977',
 birthPlace: 'Huddersfield, England',
 education: ['Harvard University', 'Yale School of Medicine'],
 affiliations: [
 { name: 'U.S. Public Health Service', role: 'Surgeon General', type: 'agency' },
 ],
 controversies: [
 'Fired by Trump in 2017, then reappointed by Biden as Surgeon General',
 'Declared gun violence a public health crisis, drawing conservative criticism',
 'Issued advisory on social media\'s impact on youth mental health challenging tech companies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Social Media Harms', slug: 'social-media-harms', severity: 'high' },
 ],
 timeline: [
 { date: 'July 10, 1977', event: 'Born in Huddersfield, England' },
 { date: '2014-2017', event: 'First term as Surgeon General' },
 { date: '2021-present', event: 'Second term as Surgeon General' },
 { date: '2023', event: 'Issues advisory on social media and youth mental health' },
 { date: '2024', event: 'Calls for warning labels on social media' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Surgeon General Advisory on Social Media', url: 'https://scholar.google.com/scholar?q=Surgeon%20General%20Advisory%20on%20Social%20Media', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'President who appointed Murthy as Surgeon General; Murthy led COVID-19 public health messaging', href: '/entities/individuals/joe-biden' },
 { name: 'Anthony Fauci', relationship: 'Fellow public health leader during COVID-19 pandemic; collaborated on vaccination campaigns', href: '/entities/individuals/anthony-fauci' },
 { name: 'Donald Trump', relationship: 'President who fired Murthy as Surgeon General in 2017; Murthy was later reappointed by Biden', href: '/entities/individuals/donald-trump' },
 ],
 },

 'victoria-nuland': {
 name: 'Victoria Nuland',
 title: 'State Department Official',
 role: 'Key figure in U.S. Ukraine policy,"F*** the EU" call',
 riskLevel: 'medium',
 description: 'Victoria Nuland is a career diplomat who served in senior State Department roles under multiple administrations. She was caught on tape saying "F*** the EU" while discussing Ukraine policy in 2014. She was instrumental in U.S. support for the Maidan revolution and later Ukraine policy.',
 birthDate: 'July 1, 1961',
 birthPlace: 'New York City, New York',
 education: ['Brown University'],
 affiliations: [
 { name: 'U.S. State Department', role: 'Under Secretary (2021-2024)', type: 'agency' },
 ],
 controversies: [
 '"F*** THE EU": Caught on tape dismissing European allies in 2014',
 'UKRAINE INVOLVEMENT: Central role in U.S. Ukraine policy during Maidan',
 'REGIME CHANGE: Advocated for interventionist foreign policy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Policy', slug: 'ukraine-policy', severity: 'high' },
 ],
 timeline: [
 { date: 'July 1, 1961', event: 'Born in New York City' },
 { date: '2013-2017', event: 'Assistant Secretary for European Affairs' },
 { date: 'February 2014', event: '"F*** the EU" call leaked' },
 { date: '2021-2024', event: 'Under Secretary of State' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Leaked phone call transcript', url: 'https://scholar.google.com/scholar?q=Leaked%20phone%20call%20transcript', date: '2014' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'President under whom Nuland served as Under Secretary of State for Political Affairs', href: '/entities/individuals/joe-biden' },
 { name: 'Hillary Clinton', relationship: 'Secretary of State under whom Nuland served as spokesperson', href: '/entities/individuals/hillary-clinton' },
 { name: 'Dick Cheney', relationship: 'Vice President under whom Nuland served as principal deputy national security advisor', href: '/entities/individuals/dick-cheney' },
 { name: 'Antony Blinken', relationship: 'Secretary of State and direct superior during Biden administration Ukraine policy', href: '/entities/individuals/antony-blinken' },
 ],
 },

 'valujet-592-victims': {
 name: 'ValuJet 592 Victims',
 title: 'Crash Victims',
 role: '110 Killed; May 11, 1996',
 riskLevel: 'critical',
 description: 'ValuJet Flight 592 crashed in the Florida Everglades on May 11, 1996, killing all 110 people aboard. The FAA had been warned about maintenance issues at SabreTech, the maintenance contractor. This disaster showed FAA\'s failure to act on warnings; a pattern that continued to the MAX crashes.',
 birthDate: 'N/A',
 birthPlace: 'Various',
 education: ['N/A'],
 affiliations: [
 { name: 'ValuJet Airlines', role: 'Passengers and crew of Flight 592', type: 'corporation' },
 { name: 'Federal Aviation Administration', role: 'Regulatory body that failed to ground ValuJet despite safety warnings', type: 'agency' },
 ],
 controversies: [
 'ValuJet Flight 592 crashed into Florida Everglades on May 11, 1996, killing all 110 aboard',
 'Crash caused by improperly stored chemical oxygen generators in cargo hold',
 'FAA had warned about ValuJet safety issues but Administrator Hinson publicly declared airline safe weeks before crash',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
 ],
 timeline: [
 { date: 'May 11, 1996', event: 'ValuJet 592 crashes, 110 killed' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: ValuJet 592 Victims', url: 'https://en.wikipedia.org/wiki/ValuJet_Flight_592', date: '' },
 { title: 'Military Times: ValuJet 592 Victims', url: 'https://www.militarytimes.com/', date: '' },
 { title: 'Wired: ValuJet 592 Victims', url: 'https://www.wired.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'David Hinson', relationship: 'FAA Administrator during ValuJet crash who initially declared airline safe despite warning signs', href: '/entities/individuals/david-hinson' },
 { name: 'Mary Schiavo', relationship: 'DOT Inspector General who exposed FAA failures in ValuJet oversight', href: '/entities/individuals/mary-schiavo' },
 ],
 },





 'virginia-foxx': {
 name: 'Virginia Foxx',
 title: 'U.S. Representative (R-NC); Chair of House Education and Workforce Committee',
 role: 'Congresswoman; Higher Education Critic; For-Profit College Defender',
 riskLevel: 'medium',
 description: 'Virginia Ann Foxx is an American politician serving as the U.S. Representative for North Carolina\'s 5th congressional district since 2005. She has chaired the House Education and Workforce Committee (originally Education and Labor) since 2023; previously chairing it from 2017 to 2019. Foxx is most notable for her aggressive defense of for-profit colleges and her efforts to weaken federal oversight of predatory educational institutions. Under her leadership; the committee worked to roll back Obama-era regulations that protected student borrowers; including the \"gainful employment\" rule that required career training programs to prove graduates could earn enough to repay their student loans. She received significant campaign contributions from the for-profit education industry and led efforts to block or limit student loan forgiveness programs. Foxx controversially referred to the murder of Matthew Shepard as a \"hoax\" on the House floor in 2009; then apologized. She opposed the Violence Against Women Act reauthorization and voted against the Equality Act. She was one of the most vocal critics of campus antisemitism during the 2024 congressional hearings that led to the resignations of university presidents.',
 birthDate: 'June 29, 1943',
 birthPlace: 'New York City, New York, USA',
 education: ['University of North Carolina at Chapel Hill; AB', 'University of North Carolina at Greensboro; MA; EdD'],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Representative; North Carolina 5th District (2005-present)', type: 'agency' },
 { name: 'House Education and Workforce Committee', role: 'Chair (2017-2019; 2023-present)', type: 'agency' },
 ],
 controversies: [
 'Defended for-profit colleges while receiving significant campaign contributions from the industry',
 'Worked to roll back Obama-era gainful employment rule protecting student borrowers from predatory programs',
 'Called Matthew Shepard murder a hoax on the House floor in 2009; later apologized',
 'Led efforts to block or limit student loan forgiveness programs',
 'Aggressive questioning of university presidents in 2024 antisemitism hearings led to resignations',
 'Opposed Violence Against Women Act reauthorization and Equality Act',
 'Voted against certifying 2020 presidential election results in certain states',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'For-Profit College Fraud', slug: 'for-profit-college-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'June 29, 1943', event: 'Born in New York City' },
 { date: '2004', event: 'Elected to U.S. House of Representatives from North Carolina 5th District' },
 { date: '2009', event: 'Calls Matthew Shepard murder a hoax on House floor; later apologizes' },
 { date: '2017', event: 'Becomes Chair of House Education and the Workforce Committee' },
 { date: '2017-2019', event: 'Works to roll back student borrower protections and for-profit college oversight' },
 { date: '2023', event: 'Returns as Education Committee Chair' },
 { date: '2024', event: 'Leads aggressive antisemitism hearings resulting in university president resignations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets: Virginia Foxx Campaign Finance', url: 'https://www.opensecrets.org/members-of-congress/virginia-foxx/summary?cid=N00026166', date: '' },
 ],
 aliases: [],
 knownAssociates: [],
 },





 'vang-pao': {
 name: 'Vang Pao',
 title: 'Hmong General Recruited by CIA for the Secret War in Laos',
 role: 'Military Commander; CIA Asset; Hmong Community Leader',
 riskLevel: 'high',
 description: 'Vang Pao was a Royal Lao Army general and the leader of the Hmong people\'s military resistance during the Secret War in Laos (1964-1975); one of the most significant covert operations in CIA history. Recruited by the CIA in the early 1960s; Vang Pao commanded an army of approximately 30;000 Hmong fighters (including boys as young as 13) who served as American proxies fighting the North Vietnamese and Pathet Lao communist forces along the Ho Chi Minh Trail. The CIA funded; armed; and directed his operations through the \"Secret Army\" program while publicly denying U.S. involvement in Laos. The war decimated the Hmong population; with an estimated 30;000 Hmong soldiers killed and approximately 100;000 Hmong civilians dead from the conflict and related displacement. When the U.S. withdrew from Southeast Asia in 1975; Vang Pao was airlifted to Thailand and eventually resettled in the United States; where he became a community leader for the Hmong diaspora. In 2007; he was arrested by federal authorities and charged with plotting to overthrow the Laotian government in violation of the Neutrality Act; though the charges were eventually dismissed. His legacy remains deeply contested: hero to many Hmong for fighting communism; but also criticized for leading his people into a devastating proxy war that served American rather than Hmong interests.',
 birthDate: 'December 8, 1929',
 birthPlace: 'Xieng Khouang Province, Laos',
 deathDate: 'January 6, 2011',
 education: ['French military training; Royal Lao Army officer school'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA-recruited military asset; commander of Hmong Secret Army', type: 'agency' },
 { name: 'Royal Lao Army', role: 'Major General', type: 'agency' },
 ],
 controversies: [
 'Commanded Hmong Secret Army of 30;000 fighters; including child soldiers as young as 13; as CIA proxies in Laos',
 'Approximately 30;000 Hmong soldiers and 100;000 Hmong civilians killed during the Secret War',
 'CIA funded his operations while publicly denying U.S. involvement in Laotian conflict',
 'Arrested in 2007 for plotting to overthrow Laotian government; charges later dismissed',
 'Allegations of opium trafficking involvement during the Secret War; connected to CIA-Air America drug transport routes',
 'Led Hmong people into devastating proxy war that primarily served American Cold War interests rather than Hmong sovereignty',
 'After U.S. withdrawal; Hmong people left behind faced severe persecution and genocide by communist forces',
 ],
 charges: [
 { statute: '18 U.S.C. section 960', description: 'Neutrality Act; conspiracy to overthrow the government of Laos using weapons and mercenaries (2007; charges dismissed 2009)', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Laos Secret Bombing', slug: 'laos-secret-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'December 8, 1929', event: 'Born in Xieng Khouang Province; Laos' },
 { date: '1961', event: 'Recruited by CIA officer Bill Lair to lead Hmong resistance against communist forces' },
 { date: '1964-1975', event: 'Commands Hmong Secret Army in CIA covert war in Laos' },
 { date: 'May 1975', event: 'Airlifted from Laos to Thailand as communists take power' },
 { date: '1976', event: 'Resettles in the United States; becomes leader of Hmong-American diaspora community' },
 { date: 'June 2007', event: 'Arrested and charged with conspiring to overthrow Laotian government' },
 { date: 'September 2009', event: 'Federal charges dismissed' },
 { date: 'January 6, 2011', event: 'Dies in Clovis; California at age 81' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CIA Declassified: Secret War in Laos', url: 'https://www.cia.gov/readingroom/', date: '' },
 { title: 'Harvesting Pa Chay\'s Wheat: The Hmong and America\'s Secret War in Laos', url: 'https://www.loc.gov', date: '2007' },
 ],
 aliases: ['VP', 'The Hmong General'],
 knownAssociates: [
 { name: 'Ted Shackley', relationship: 'CIA station chief in Laos who directed Vang Pao\'s Secret War operations', href: '/entities/individuals/ted-shackley' },
 { name: 'William Colby', relationship: 'CIA official overseeing Southeast Asia covert operations', href: '/entities/individuals/william-colby' },
 ],
 },

 'vernon-walters': {
 name: 'Vernon Walters',
 title: 'CIA Deputy Director; Liaison to South American Military Dictatorships; Operation Condor Coordinator',
 role: 'Intelligence Officer; Military Diplomat; Cold War Operative',
 riskLevel: 'high',
 description: 'Vernon Anthony Walters was a U.S. Army lieutenant general; CIA Deputy Director (1972-1976); and career military intelligence officer who served as a critical liaison between American intelligence services and South American military dictatorships during the Cold War. Fluent in nine languages; Walters was used as a presidential interpreter and back-channel diplomat by multiple administrations. As CIA Deputy Director under Richard Nixon; Walters was directly involved in the Watergate cover-up; initially agreeing to Nixon\'s request to have the CIA pressure the FBI into halting its Watergate investigation (a plan that ultimately failed). His most consequential role was as the American liaison to Operation Condor; the coordinated campaign of political repression and state terrorism by South American military dictatorships (Argentina; Chile; Brazil; Paraguay; Uruguay; and Bolivia) that killed an estimated 60;000 to 80;000 people between 1968 and 1989. Walters personally met with junta leaders including Chilean dictator Augusto Pinochet to coordinate intelligence sharing and political assassination programs. He later served as U.S. Ambassador to the United Nations (1985-1989) and Ambassador to Germany (1989-1991) under President George H.W. Bush. Walters was also connected to Operation Gladio; NATO\'s secret \"stay-behind\" armies in Europe designed to resist potential Soviet invasion but which became involved in false-flag terrorism and political manipulation.',
 birthDate: 'January 3, 1917',
 birthPlace: 'New York City, New York, USA',
 deathDate: 'February 10, 2002',
 education: ['Self-educated polyglot; fluent in nine languages; no college degree'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Deputy Director (1972-1976)', type: 'agency' },
 { name: 'U.S. Army', role: 'Lieutenant General; Military Intelligence', type: 'agency' },
 { name: 'U.S. Department of State', role: 'Ambassador to UN (1985-1989) and Germany (1989-1991)', type: 'agency' },
 ],
 controversies: [
 'Directly involved in Watergate cover-up; agreed to Nixon\'s request to use CIA to obstruct FBI investigation',
 'Served as American liaison to Operation Condor; meeting with South American junta leaders to coordinate political repression',
 'Personally met with Augusto Pinochet and other dictators to facilitate intelligence cooperation',
 'Operation Condor killed an estimated 60;000-80;000 people through assassination; torture; and disappearance',
 'Connected to Operation Gladio; NATO\'s secret stay-behind armies linked to false-flag terrorism in Europe',
 'Used diplomatic positions to facilitate U.S. support for authoritarian regimes during Cold War',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Condor', slug: 'operation-condor', severity: 'high' },
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: 'January 3, 1917', event: 'Born in New York City' },
 { date: '1941-1945', event: 'Serves in World War II as military intelligence officer and interpreter' },
 { date: '1972', event: 'Appointed CIA Deputy Director under Richard Nixon' },
 { date: 'June 1972', event: 'Involved in Watergate cover-up attempts using CIA to obstruct FBI' },
 { date: '1973-1976', event: 'Serves as liaison to Operation Condor military dictatorships in South America' },
 { date: '1976', event: 'Leaves CIA after Watergate investigations' },
 { date: '1985', event: 'Appointed U.S. Ambassador to the United Nations by Reagan' },
 { date: '1989', event: 'Becomes Ambassador to Germany during fall of Berlin Wall' },
 { date: 'February 10, 2002', event: 'Dies at age 85' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Church Committee Reports on CIA Activities', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions', date: '1975' },
 { title: 'National Security Archive: Operation Condor Documents', url: 'https://nsarchive.gwu.edu/project/chile-documentation-project', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'Served as CIA Deputy Director; involved in Watergate cover-up for Nixon', href: '/entities/individuals/richard-nixon' },
 { name: 'Augusto Pinochet', relationship: 'Met with Pinochet to coordinate Operation Condor intelligence sharing', href: '/entities/individuals/augusto-pinochet' },
 { name: 'Henry Kissinger', relationship: 'Worked with Kissinger on South American policy and Condor program', href: '/entities/individuals/henry-kissinger' },
 ],
 },
















 'vicki-weaver': {
 name: 'Vicki Weaver',
 title: 'Killed by FBI Sniper at Ruby Ridge While Holding Infant Daughter',
 role: 'Civilian Victim of Federal Law Enforcement',
 riskLevel: 'low',
 description: 'Vicki Jean Weaver (nee Jordison) was an American woman shot and killed by FBI Hostage Rescue Team sniper Lon Horiuchi on August 22; 1992; during the Ruby Ridge siege in Boundary County; Idaho. At the time she was shot; Vicki was standing in the doorway of her cabin holding her ten-month-old daughter Elisheba; while her husband Randy Weaver; his friend Kevin Harris; and their surviving children sheltered inside. The day before; U.S. Marshals had killed the Weavers\' 14-year-old son Samuel and family dog in an initial confrontation that also left Deputy Marshal William Degan dead. The FBI then deployed the Hostage Rescue Team with modified rules of engagement that authorized snipers to shoot any armed adult male on sight; rules later deemed unconstitutional. Horiuchi fired at Randy Weaver as he returned to the cabin; missing; then fired a second shot as Weaver entered the cabin doorway; the bullet passed through Vicki\'s head (killing her instantly) and wounded Kevin Harris. The FBI initially withheld the fact that they had killed Vicki Weaver for days. The subsequent investigation and Senate hearings revealed egregious misconduct by federal agencies; FBI officials were found to have destroyed evidence and altered after-action reports. The Weaver family received a $3.1 million settlement from the federal government; and the incident became a catalyzing event for the American militia movement and anti-government sentiment.',
 birthDate: 'November 15, 1949',
 birthPlace: 'Kalispell, Montana, USA',
 deathDate: 'August 22, 1992',
 education: [],
 affiliations: [],
 controversies: [
 'Shot and killed by FBI sniper Lon Horiuchi while holding 10-month-old daughter in cabin doorway',
 'FBI withheld the fact of her killing for days after the incident',
 'Modified FBI rules of engagement that authorized her death were later deemed unconstitutional',
 'FBI officials destroyed evidence and altered after-action reports about the shooting',
 'Weaver family received $3.1 million settlement from federal government',
 'Her death; combined with son Samuel\'s killing; became a rallying point for the American militia movement',
 'Boundary County prosecutor charged Horiuchi with involuntary manslaughter; case was removed to federal court and dismissed',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'November 15, 1949', event: 'Born Vicki Jean Jordison in Kalispell; Montana' },
 { date: '1971', event: 'Marries Randy Weaver' },
 { date: '1980s', event: 'Family moves to remote Ruby Ridge cabin in Boundary County; Idaho' },
 { date: 'August 21, 1992', event: 'Son Samuel Weaver (14) and family dog killed by U.S. Marshals; Deputy Marshal Degan also killed' },
 { date: 'August 22, 1992', event: 'Shot and killed by FBI sniper Lon Horiuchi while holding baby Elisheba in cabin doorway' },
 { date: '1995', event: 'Senate hearings reveal FBI misconduct and evidence destruction at Ruby Ridge' },
 { date: '1995', event: 'Weaver family receives $3.1 million settlement from federal government' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Judiciary Committee Ruby Ridge Hearings', url: 'https://www.congress.gov', date: '1995' },
 { title: 'DOJ Ruby Ridge Task Force Report', url: 'https://www.justice.gov', date: '1994' },
 ],
 aliases: ['Vicki Jordison'],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'Husband; survived Ruby Ridge siege', href: '/entities/individuals/randy-weaver' },
 { name: 'Lon Horiuchi', relationship: 'FBI sniper who shot and killed Vicki', href: '/entities/individuals/lon-horiuchi' },
 ],
 },

 'victor-denoble': {
 name: 'Victor DeNoble',
 title: 'Philip Morris Research Scientist Whose Nicotine Addiction Studies Were Suppressed',
 role: 'Tobacco Industry Whistleblower; Neuroscientist',
 riskLevel: 'low',
 description: 'Victor DeNoble is an American behavioral pharmacologist who worked as a research scientist at Philip Morris in the early 1980s. He was hired to study the addictive properties of nicotine and to develop a safer alternative to nicotine for cigarettes. DeNoble and his colleague Paul Mele conducted groundbreaking research demonstrating that nicotine was powerfully addictive; rats self-administered nicotine in a manner identical to cocaine and heroin; proving for the first time through industry-funded research what the tobacco companies had long denied publicly. When Philip Morris executives realized the implications of DeNoble\'s findings (which confirmed nicotine was addictive and undermined the industry\'s public position); they shut down his laboratory in 1984; fired him; forced the retraction of his peer-reviewed paper from the journal Psychopharmacology; and required him to sign confidentiality agreements. DeNoble later became a key whistleblower; testifying before Congress in 1994 alongside other former tobacco scientists. His testimony provided critical evidence that tobacco companies knew cigarettes were addictive and deliberately suppressed scientific evidence proving it; contributing to the massive 1998 Master Settlement Agreement worth $206 billion.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['PhD in Behavioral Pharmacology'],
 affiliations: [
 { name: 'Philip Morris', role: 'Former Research Scientist (fired 1984)', type: 'corporation' },
 ],
 controversies: [
 'Philip Morris suppressed his research proving nicotine was addictive; identical to cocaine in self-administration patterns',
 'Lab shut down in 1984 when executives realized findings confirmed addiction; which they denied publicly',
 'Forced to retract peer-reviewed paper from Psychopharmacology journal under company pressure',
 'Required to sign confidentiality agreements preventing disclosure of research results',
 'Testified before Congress in 1994; providing key evidence of industry knowledge of addiction',
 'His suppressed research became central evidence in the DOJ tobacco racketeering case and 1998 Master Settlement Agreement',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [
 { date: '1980', event: 'Hired by Philip Morris to study nicotine addiction in laboratory animals' },
 { date: '1982', event: 'Research demonstrates rats self-administer nicotine identically to cocaine; proving addictive properties' },
 { date: '1983', event: 'Submits peer-reviewed paper to Psychopharmacology; accepted for publication' },
 { date: '1984', event: 'Philip Morris shuts down laboratory; fires DeNoble; forces retraction of paper and imposes confidentiality agreements' },
 { date: 'April 14, 1994', event: 'Testifies before Congress about Philip Morris\'s suppression of addiction research' },
 { date: '1998', event: 'Master Settlement Agreement ($206B) reached; partly based on evidence of industry knowledge he helped expose' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Testimony: Victor DeNoble before House Energy and Commerce Committee', url: 'https://www.congress.gov', date: '1994' },
 { title: 'United States v. Philip Morris (RICO case)', url: 'https://www.justice.gov/civil/case/tobacco-litigation', date: '2006' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Paul Mele', relationship: 'Research partner at Philip Morris whose joint nicotine addiction studies were suppressed', href: '/entities/individuals/paul-mele' },
 ],
 },

 'victor-hugo-green': {
 name: 'Victor Hugo Green',
 title: 'Creator of The Negro Motorist Green Book; Survival Guide for Black Travelers in Jim Crow America',
 role: 'Postal Worker; Publisher; Civil Rights Pioneer',
 riskLevel: 'low',
 description: 'Victor Hugo Green was an African-American postal carrier from Harlem; New York; who created and published The Negro Motorist Green Book (later The Negro Travelers\' Green Book); an annual travel guide published from 1936 to 1966 that listed hotels; restaurants; gas stations; barbershops; beauty parlors; and other businesses that were safe for Black Americans to patronize during the Jim Crow era. The guide was created because Black travelers faced constant danger from sundown towns (communities that excluded African Americans through intimidation; violence; or law after dark); segregation laws; and hostile businesses that refused service. A wrong turn or a stop at the wrong establishment could result in arrest; violence; or death. Green; inspired by Jewish travel guides that identified safe establishments; used his extensive network of postal workers across the country to identify Black-friendly businesses. The Green Book became an essential survival tool for Black Americans; distributed through Esso (Standard Oil) gas stations; one of the few major oil companies that franchised to Black station owners. At its peak; the guide listed establishments in all 48 states; Washington D.C.; Canada; Mexico; the Caribbean; and parts of Africa. Green expressed hope that his publication would eventually become unnecessary; and indeed the guide ceased publication in 1966; two years after the Civil Rights Act of 1964 outlawed segregation in public accommodations. Green died in 1960; before seeing integration become law.',
 birthDate: 'November 9, 1892',
 birthPlace: 'New York City, New York, USA',
 deathDate: 'October 16, 1960',
 education: [],
 affiliations: [
 { name: 'U.S. Postal Service', role: 'Mail Carrier; Harlem; New York', type: 'agency' },
 { name: 'Victor H. Green & Company', role: 'Publisher of The Negro Motorist Green Book', type: 'corporation' },
 ],
 controversies: [
 'The Green Book documented the pervasive reality of discrimination and violence facing Black travelers across America',
 'Guide revealed that thousands of American towns were unsafe for Black visitors; effectively mapping the geography of American racism',
 'Cessation of publication in 1966 marked theoretical end of legal segregation; though informal discrimination continued',
 'The necessity of the guide itself was an indictment of American society; Black Americans needed a survival manual to drive through their own country',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'November 9, 1892', event: 'Born in New York City' },
 { date: '1936', event: 'Publishes first edition of The Negro Motorist Green Book; covering the New York area' },
 { date: '1937', event: 'Expands guide to national coverage; distributed through Esso gas stations' },
 { date: '1940s', event: 'Green Book becomes essential travel companion for Black Americans during World War II era' },
 { date: '1950s', event: 'Guide expands to international listings including Canada; Mexico; Caribbean; and Africa' },
 { date: 'October 16, 1960', event: 'Victor Hugo Green dies in New York' },
 { date: '1964', event: 'Civil Rights Act outlaws segregation in public accommodations' },
 { date: '1966', event: 'Final edition of The Green Book published' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Smithsonian National Museum of African American History: The Green Book', url: 'https://nmaahc.si.edu/explore/stories/green-book', date: '' },
 { title: 'New York Public Library Digital Collections: The Green Book', url: 'https://digitalcollections.nypl.org/collections/the-green-book', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'New York urban planner whose segregationist infrastructure made guides like the Green Book necessary', href: '/entities/individuals/robert-moses' },
 ],
 },





 'vincenzo-vinciguerra': {
 name: 'Vincenzo Vinciguerra',
 title: 'Italian Neo-Fascist Terrorist; Confessed Gladio Operative; Peteano Car Bomber',
 role: 'Far-Right Terrorist; Intelligence Asset; Gladio Witness',
 riskLevel: 'high',
 description: 'Vincenzo Vinciguerra is an Italian neo-fascist terrorist and former member of the far-right Ordine Nuovo (New Order) organization who carried out the 1972 Peteano car bombing that killed three Carabinieri (Italian military police) officers. Initially; the attack was falsely blamed on left-wing Red Brigades terrorists; part of the \"strategy of tension\" designed to shift public opinion against the Italian left. In 1984; Vinciguerra confessed to the Peteano bombing and; crucially; revealed the existence of Operation Gladio; NATO\'s secret stay-behind paramilitary network in Italy and across Western Europe. He testified that his bombing was carried out with the knowledge and support of Italian military intelligence (SISMI) and the Gladio network; and that a systematic campaign of false-flag terrorism committed by right-wing groups was protected by Italian intelligence services and NATO structures. His confession triggered a massive investigation by Italian judge Felice Casson; which led to the exposure of the entire Gladio network in 1990 by Italian Prime Minister Giulio Andreotti. Vinciguerra is serving a life sentence in Italian prison and has continued to provide testimony about the deep state structures that facilitated decades of false-flag terrorism in Italy; including the Bologna railway station bombing (1980; 85 dead) and the Piazza Fontana bombing (1969; 17 dead).',
 birthDate: '1949',
 birthPlace: 'Italy',
 education: [],
 affiliations: [
 { name: 'Ordine Nuovo (New Order)', role: 'Member; Italian neo-fascist organization', type: 'organization' },
 { name: 'Operation Gladio', role: 'Operative; NATO stay-behind paramilitary network', type: 'organization' },
 ],
 controversies: [
 'Carried out 1972 Peteano car bombing that killed three Carabinieri officers',
 'Attack was falsely blamed on left-wing Red Brigades as part of NATO strategy of tension',
 'Confessed in 1984 and exposed Operation Gladio; NATO\'s secret stay-behind paramilitary network',
 'Testified that Italian intelligence (SISMI) and NATO structures protected far-right terrorist operations',
 'His revelations triggered the exposure of Gladio networks across Western Europe by Prime Minister Andreotti in 1990',
 'Confirmed that false-flag bombings were systematically used to manipulate Italian democratic politics',
 'Serving life sentence in Italian prison; continues to testify about deep state structures',
 ],
 charges: [
 { statute: 'Italian Criminal Code: Multiple Homicide', description: 'Peteano car bombing killing three Carabinieri officers (1972); life sentence', category: 'Italian Criminal' },
 ],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: '1949', event: 'Born in Italy' },
 { date: 'May 31, 1972', event: 'Carries out Peteano car bombing; killing three Carabinieri officers' },
 { date: '1972-1984', event: 'Bombing falsely attributed to left-wing Red Brigades; Vinciguerra flees to Spain' },
 { date: '1979', event: 'Arrested and extradited to Italy' },
 { date: '1984', event: 'Confesses to Peteano bombing; reveals Operation Gladio network and state protection of far-right terrorism' },
 { date: '1990', event: 'Italian PM Andreotti confirms existence of Gladio; partly triggered by Vinciguerra\'s testimony' },
 { date: '1992', event: 'European Parliament condemns Gladio operations; partially based on Vinciguerra\'s revelations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'NATO\'s Secret Armies: Operation Gladio by Daniele Ganser', url: 'https://www.loc.gov', date: '2005' },
 { title: 'European Parliament Resolution on Gladio', url: 'https://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+MOTION+B3-1990-2021+0+DOC+XML+V0//EN', date: '1990' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Stefano Delle Chiaie', relationship: 'Fellow Italian far-right terrorist operative in Gladio and Condor networks', href: '/entities/individuals/stefano-delle-chiaie' },
 { name: 'Licio Gelli', relationship: 'P2 Masonic Lodge grandmaster connected to Gladio operations', href: '/entities/individuals/licio-gelli' },
 ],
 },

 'viola-fletcher': {
 name: 'Viola Fletcher',
 title: 'Oldest Living Survivor of the 1921 Tulsa Race Massacre; Testified Before Congress at Age 107',
 role: 'Massacre Survivor; Reparations Advocate; Living Witness',
 riskLevel: 'low',
 description: 'Viola Ford Fletcher (born January 18; 1914) is the oldest known living survivor of the 1921 Tulsa Race Massacre; one of the worst episodes of racial violence in American history. She was seven years old when a white mob attacked the prosperous Black neighborhood of Greenwood (known as \"Black Wall Street\") in Tulsa; Oklahoma; over two days beginning on May 31; 1921. The mob; aided by local law enforcement and armed with weapons and incendiary devices; destroyed approximately 35 blocks of the Greenwood District; killed an estimated 100 to 300 Black residents; and left over 10;000 homeless. Fletcher recalls being awakened by her parents and fleeing on foot as her neighborhood burned; stepping over dead bodies in the streets. For decades; the massacre was deliberately erased from official history; excluded from Oklahoma history textbooks and public discourse. Fletcher testified before the U.S. House Judiciary Subcommittee on the Constitution; Civil Rights; and Civil Liberties on May 19; 2021; at age 107; telling Congress: \"I will never forget the violence of the white mob when we left our home. I still see Black men being shot; Black bodies lying in the street. I still smell smoke and see fire. I still see Black businesses being burned. I still hear airplanes flying overhead. I hear the screams.\" She and fellow survivors Lessie Benningfield Randle and Hughes Van Ellis filed a lawsuit seeking reparations; which was dismissed by the Oklahoma Supreme Court in 2023; a decision widely condemned by civil rights organizations.',
 birthDate: 'January 18, 1914',
 birthPlace: 'Tulsa, Oklahoma, USA',
 education: [],
 affiliations: [
 { name: 'Tulsa Race Massacre Survivors', role: 'Oldest Known Survivor', type: 'organization' },
 ],
 controversies: [
 'Seven years old when Greenwood District was destroyed by white mob in 1921; witnessed shootings; burning; and mass destruction',
 'Testified before Congress at age 107 about the massacre and its lasting impact',
 'Reparations lawsuit dismissed by Oklahoma Supreme Court in 2023 despite documented harm',
 'The Tulsa massacre was deliberately erased from Oklahoma history for decades; survivors were denied justice for over a century',
 'Her testimony provided living witness account of one of the worst racial atrocities in American history',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'January 18, 1914', event: 'Born in Tulsa; Oklahoma' },
 { date: 'May 31-June 1, 1921', event: 'Survives the Tulsa Race Massacre at age seven; flees burning Greenwood District with family' },
 { date: '1921-2001', event: 'Massacre covered up and excluded from historical record for eight decades' },
 { date: '2001', event: 'Tulsa Race Massacre Commission publishes report confirming massacre and recommending reparations' },
 { date: 'May 19, 2021', event: 'Testifies before U.S. House Judiciary Subcommittee at age 107' },
 { date: '2021', event: 'Files reparations lawsuit alongside fellow survivors Lessie Randle and Hughes Van Ellis' },
 { date: '2023', event: 'Oklahoma Supreme Court dismisses reparations lawsuit' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Testimony: Viola Fletcher Before House Judiciary Subcommittee', url: 'https://www.congress.gov', date: '2021' },
 { title: 'Tulsa Race Massacre Commission Report', url: 'https://www.okhistory.org/research/forms/freport.pdf', date: '2001' },
 ],
 aliases: ['Mother Fletcher'],
 knownAssociates: [
 { name: 'Hughes Van Ellis', relationship: 'Fellow elderly Tulsa Race Massacre survivor and co-plaintiff in reparations lawsuit', href: '/entities/individuals/hughes-van-ellis' },
 { name: 'Lessie Benningfield Randle', relationship: 'Fellow survivor and co-plaintiff in reparations lawsuit', href: '/entities/individuals/lessie-randle' },
 ],
 },

 'vladimiro-montesinos': {
 name: 'Vladimiro Montesinos',
 title: 'Peruvian Intelligence Chief; CIA Asset; School of the Americas Graduate; Death Squad Commander',
 role: 'Spy Chief; Drug Trafficker; Human Rights Violator',
 riskLevel: 'critical',
 description: 'Vladimiro Illich Montesinos Torres is a former Peruvian intelligence chief who served as the de facto head of Peru\'s National Intelligence Service (SIN) under President Alberto Fujimori from 1990 to 2000. A graduate of the U.S. Army School of the Americas (SOA) and a paid CIA asset receiving approximately $1 million per year during the 1990s; Montesinos became one of the most powerful and feared figures in Peruvian politics. He ran a shadow government from SIN headquarters; controlling the judiciary; military; media; and legislature through a vast network of bribery (documented on thousands of \"vladivideos\" he secretly recorded); intimidation; and political assassination. Montesinos oversaw the Grupo Colina death squad; which carried out massacres including the Barrios Altos killings (1991; 15 dead including an 8-year-old boy) and the La Cantuta kidnapping-murders (1992; 9 students and a professor). He simultaneously worked with Colombian drug cartels; facilitating cocaine shipments through Peru while nominally leading the country\'s anti-drug efforts (funded by U.S. aid). The CIA maintained its relationship with Montesinos despite knowledge of his human rights abuses and drug connections; only cutting ties when his crimes became impossible to conceal. He was captured in Venezuela in 2001 and is serving a 25-year prison sentence for murder; kidnapping; arms trafficking; and drug trafficking.',
 birthDate: 'May 20, 1945',
 birthPlace: 'Arequipa, Peru',
 education: ['U.S. Army School of the Americas; Panama (Intelligence Training)', 'Peruvian Military Academy'],
 affiliations: [
 { name: 'National Intelligence Service of Peru (SIN)', role: 'De Facto Director (1990-2000)', type: 'agency' },
 { name: 'Central Intelligence Agency', role: 'Paid Asset; approximately $1M/year in 1990s', type: 'agency' },
 { name: 'U.S. Army School of the Americas', role: 'Graduate; intelligence and counterinsurgency training', type: 'agency' },
 ],
 controversies: [
 'Oversaw Grupo Colina death squad responsible for Barrios Altos massacre (15 dead) and La Cantuta murders (10 dead)',
 'Secretly recorded thousands of \"vladivideos\" showing himself bribing judges; politicians; military officers; and media owners',
 'Received approximately $1 million per year from CIA while simultaneously trafficking cocaine with Colombian cartels',
 'Controlled Peruvian judiciary; media; and military through systematic corruption and intimidation',
 'CIA maintained relationship despite knowledge of human rights abuses and drug trafficking',
 'School of the Americas training used to implement counterinsurgency tactics involving torture and extrajudicial killing',
 'Facilitated arms shipment to Colombian FARC guerrillas while supposedly fighting drug trafficking',
 'Estimated to have embezzled over $600 million from Peruvian state',
 ],
 charges: [
 { statute: 'Peruvian Criminal Code: Murder', description: 'Barrios Altos and La Cantuta massacres carried out by Grupo Colina death squad under his command; 25-year sentence', category: 'Peruvian Criminal' },
 { statute: 'Peruvian Criminal Code: Drug Trafficking', description: 'Facilitated cocaine shipments through Peru in collaboration with Colombian cartels', category: 'Peruvian Criminal' },
 { statute: 'Peruvian Criminal Code: Arms Trafficking', description: 'Supplied weapons to FARC guerrillas', category: 'Peruvian Criminal' },
 ],
 relatedInvestigations: [
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: 'May 20, 1945', event: 'Born in Arequipa; Peru' },
 { date: '1965', event: 'Attends U.S. Army School of the Americas for intelligence training' },
 { date: '1990', event: 'Becomes de facto head of Peru\'s National Intelligence Service under Fujimori' },
 { date: '1991', event: 'Grupo Colina death squad carries out Barrios Altos massacre; killing 15' },
 { date: '1992', event: 'La Cantuta kidnapping-murders of 9 students and 1 professor' },
 { date: '1990s', event: 'Receives approximately $1M/year from CIA while trafficking cocaine' },
 { date: 'September 2000', event: 'Vladivideo leaked showing Montesinos bribing congressman; triggers his downfall' },
 { date: 'November 2000', event: 'Flees Peru as Fujimori government collapses' },
 { date: 'June 2001', event: 'Captured in Caracas; Venezuela; extradited to Peru' },
 { date: '2006', event: 'Convicted and sentenced to 25 years for murder; kidnapping; drug trafficking; and corruption' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CIA Inspector General Report on Peru', url: 'https://www.cia.gov/readingroom/', date: '2000' },
 { title: 'Inter-American Court of Human Rights: Barrios Altos Case', url: 'https://www.corteidh.or.cr/', date: '2001' },
 ],
 aliases: ['The Doctor', 'Doc'],
 knownAssociates: [
 { name: 'Alberto Fujimori', relationship: 'President of Peru who Montesinos served as shadow power behind', href: '/entities/individuals/alberto-fujimori' },
 ],
 },

 'vas-narasimhan': {
 name: 'Vas Narasimhan',
 title: 'CEO of Novartis; Oversaw Michael Cohen Payment Scandal',
 role: 'Pharmaceutical Executive; Corporate Leader',
 riskLevel: 'medium',
 description: 'Vasant \"Vas\" Narasimhan is an Indian-American physician and businessman who has served as CEO of Novartis; one of the world\'s largest pharmaceutical companies; since February 2018. A Harvard Medical School graduate and former McKinsey consultant; Narasimhan became the youngest CEO in Novartis history at age 41. His tenure at Novartis became entangled in the Trump-Russia scandal when it was revealed that Novartis had paid $1.2 million to Michael Cohen\'s shell company Essential Consultants LLC; the same entity used for the Stormy Daniels hush money payment; for supposed healthcare policy consulting services. Cohen had virtually no healthcare expertise; and Novartis employees described the arrangement as an attempt to gain access to the Trump administration. Novartis also came under scrutiny for the pricing of Zolgensma; its gene therapy for spinal muscular atrophy; at $2.125 million per dose; making it the most expensive single-treatment drug in history. The FDA discovered that Novartis subsidiary AveXis had manipulated data in the Zolgensma application. Under Narasimhan; Novartis also paid $729 million to settle kickback allegations related to its drug Exjade; with the DOJ alleging the company bribed doctors with speaker fees and lavish dinners to prescribe its products.',
 birthDate: '1976',
 birthPlace: 'United States',
 education: ['University of Chicago; BA Biology', 'Harvard Medical School; MD', 'Harvard Kennedy School; MPP'],
 affiliations: [
 { name: 'Novartis', role: 'CEO (2018-present)', type: 'corporation' },
 ],
 controversies: [
 'Novartis paid $1.2 million to Michael Cohen\'s Essential Consultants LLC; the same shell company used for Stormy Daniels hush money; for healthcare consulting Cohen was unqualified to provide',
 'Zolgensma priced at $2.125 million per dose; most expensive single drug treatment in history',
 'FDA discovered data manipulation by AveXis (Novartis subsidiary) in Zolgensma application',
 'Novartis paid $729 million to settle DOJ kickback allegations for bribing doctors with speaker fees to prescribe Exjade',
 'Cohen payment revealed as attempt to buy access to Trump administration healthcare policy',
 'Multiple whistleblower complaints about Novartis sales practices during his tenure',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1976', event: 'Born in the United States to Indian immigrant parents' },
 { date: 'February 2018', event: 'Becomes CEO of Novartis at age 41' },
 { date: 'May 2018', event: 'Novartis payments to Michael Cohen\'s Essential Consultants LLC exposed' },
 { date: 'May 2019', event: 'Zolgensma approved by FDA at $2.125M per dose' },
 { date: 'August 2019', event: 'FDA discovers data manipulation in Zolgensma application by AveXis' },
 { date: '2020', event: 'Novartis settles Exjade kickback allegations for $729 million' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DOJ: Novartis Agrees to Pay $729 Million', url: 'https://www.justice.gov/opa/pr/novartis-agrees-pay-more-729-million-resolve-criminal-and-civil-liability-kickback-scheme', date: '2020' },
 ],
 aliases: ['Vasant Narasimhan'],
 knownAssociates: [
 { name: 'Michael Cohen', relationship: 'Novartis paid $1.2M to Cohen\'s shell company for supposed healthcare consulting', href: '/entities/individuals/michael-cohen' },
 ],
 },






};

export default profiles;
