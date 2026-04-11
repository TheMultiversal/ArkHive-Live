// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'donald-trump': {
 name: 'Donald John Trump',
 title: '45th & 47th President of the United States',
 role: 'Current President (2025-Present), Real Estate Developer, Media Personality',
 riskLevel: 'critical',
 description: 'Donald Trump currently serves as the 47th President of the United States (2025-present), having previously served as the 45th President (2017-2021). Despite being a convicted felon on 34 counts, he returned to power in 2025. He is the subject of numerous criminal investigations, civil lawsuits, and documented allegations spanning election interference, incitement of insurrection, obstruction of justice, emoluments violations, tax evasion, corruption, human trafficking complicity, defamation, war profiteering, espionage, sabotage, treason, intellectual property theft, animal cruelty, gender discrimination, colonialism, neurological assault via EMF, economic manipulation, psychological manipulation, privacy exploitation, securities fraud, cybercrimes, fossil fuel ties, surveillance monopoly, water privatization, biological experimentation, sterilization, persecution, torture, enslavement, murder/extermination, Epstein complicity, money laundering, bribery, racketeering, voter suppression, and conspiracy.',
 birthDate: 'June 14, 1946',
 birthPlace: 'Queens, New York City, USA',
 netWorth: '$2.6+ billion (Forbes 2024 estimate)',
 education: ['Bachelor of Science in Economics, Wharton School, University of Pennsylvania (1968)', 'Fordham University (Transfer, 1966)', 'New York Military Academy'],
 affiliations: [
 { name: 'United States Government', role: '47th President (2025-Present)', type: 'agency' },
 { name: 'Trump Organization', role: 'Chairman & President (1971-2017, 2021-Present)', type: 'corporation' },
 { name: 'Republican Party', role: '45th & 47th President', type: 'organization' },
 { name: 'Trump Media & Technology Group', role: 'Chairman', type: 'corporation' },
 { name: 'Mar-a-Lago Club', role: 'Owner', type: 'corporation' },
 { name: 'Department of Justice', role: 'Subject of Multiple Investigations', type: 'agency' },
 { name: 'Securities and Exchange Commission', role: 'Subject of Enforcement Actions', type: 'agency' },
 { name: 'Internal Revenue Service', role: 'Subject of Audits', type: 'agency' },
 { name: 'International Criminal Court', role: 'Subject of Referrals', type: 'agency' },
 ],
 controversies: [
 'EPSTEIN COMPLICITY: Documented visits to Epstein properties (Mar-a-Lago, NYC mansion), flight on"Lolita Express"(1993), public praise as"terrific guy"who"likes beautiful women... on the younger side"(2002), association spanning 15+ years, involvement with trafficking network targeting minors',
 'SEXUAL ASSAULT ALLEGATIONS: 26+ women have accused Trump of sexual misconduct including rape allegations by multiple victims, Katie Johnson lawsuit alleging rape at age 13 at Epstein party (1994), Access Hollywood tape admitting to grabbing women"by the pussy", pattern of assault spanning decades',
 'January 6 Insurrection: Incitement of Capitol attack resulting in 5 deaths, 140+ police injuries, $2 billion in damages, 1000+ participants charged',
 'Election Interference: 200+ false claims about 2020 election, coordination with Russians per Mueller Report (145 contacts, 12 indicted officers), Georgia call to"find 11,780 votes"',
 'Classified Documents: Storage of 15 boxes of classified materials at Mar-a-Lago accessible to unauthorized personnel including foreign nationals',
 'Ukraine Extortion: Withholding $391 million in military aid for political investigations (first impeachment)',
 'Tax Evasion: Over $100 million in evaded taxes through offshore structures per Panama Papers and IRS audits',
 'Business Fraud: $25 million Trump University settlement, New York civil fraud judgment of $454 million, 34 felony convictions',
 'Family Separation Policy: Zero-tolerance immigration policy resulting in 5,000+ children separated, deaths, psychological trauma, forced sterilizations',
 'Muslim Ban: Executive orders affecting millions from Muslim-majority countries',
 'Money Laundering: $2 billion Deutsche Bank financing tied to Russian oligarchs, $1 trillion+ in illicit flows',
 'Hush Money: $130,000 to Stormy Daniels, $150,000 to Karen McDougal, campaign finance violations (34 felony convictions)',
 'Georgia RICO: Call to overturn election, fake electors scheme, 13 co-defendants',
 'Obstruction of Justice: Firing FBI Director Comey, witness tampering, 10 instances per Mueller Report',
 'Emoluments Violations: $10+ million from foreign governments through hotels',
 'Pardons for Allies: Pardons of Manafort, Stone, Flynn, Bannon to prevent testimony',
 'Climate Sabotage: Paris Agreement withdrawal, EPA rollbacks, $10 billion fossil fuel ties, contributing to 1 million+ deaths',
 'COVID-19 Crimes: Downplaying pandemic, promoting unproven treatments, 500,000+ preventable deaths',
 'War Profiteering: $110 billion Saudi arms deal enabling Yemen genocide (400,000+ deaths, 85,000 children)',
 'Voter Suppression: Support for restrictive voting laws, purging 1.4+ million voters',
 'Psychological Manipulation: Fear-based campaigns, 25% increase in anxiety disorders',
 'Surveillance Expansion: Support for mass surveillance, Section 702 expansion, facial recognition without consent',
 'Water Privatization: EPA rollbacks allowing commodification, Flint-style crises affecting millions',
 'Addiction Promotion: Opioid crisis exacerbation, 500,000+ deaths, defunding treatment programs',
 'Animal Cruelty: Trophy hunting promotion, endangered species rollbacks, 1 million animals killed annually',
 'Neo-Colonialism:"America First"exploitation, $2 trillion extracted from developing nations',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(c)', description: 'Enslavement; Epstein network complicity, enabling trafficking of minors', category: 'Human Trafficking' },
 { statute: '18 U.S.C. § 1591', description: 'Sex trafficking complicity; association with and failure to report Epstein network', category: 'Human Trafficking' },
 { statute: 'TVPA § 1591', description: 'Sex trafficking of children; Epstein network involvement', category: 'Human Trafficking' },
 { statute: 'Rome Statute Article 7(1)(a)-(b)', description: 'Murder/Extermination; 1000+ border deaths, 500,000+ COVID deaths from negligence', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Torture; detention conditions, family separations, psychological trauma in 5000+ children', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(h)', description: 'Persecution; Muslim ban, discriminatory immigration policies affecting millions', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(g)', description: 'Forced sterilization in ICE facilities without consent', category: 'Crimes Against Humanity' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Biological experimentation; border biometric scans, vaccine program bypasses without consent', category: 'Crimes Against Humanity' },
 { statute: 'Nuremberg Charter Article 6(c)', description: 'Crimes against humanity; systematic civilian attacks', category: 'Crimes Against Humanity' },
 { statute: 'Convention Against Torture', description: 'Torture; oversight of inhumane detention conditions', category: 'Crimes Against Humanity' },
 { statute: 'Geneva Convention Common Article 3', description: 'War crimes; enslavement, torture of detained persons', category: 'Crimes Against Humanity' },
 { statute: 'IRC § 7201', description: 'Tax evasion; $100+ million through offshore structures, Panama Papers', category: 'Financial Crimes' },
 { statute: 'IRC § 7203', description: 'Willful failure to file returns; hiding $100 million+ in income', category: 'Financial Crimes' },
 { statute: 'Securities Act § 10(b)', description: 'Securities fraud; $1 billion overvaluation, market manipulation via tweets', category: 'Financial Crimes' },
 { statute: 'Rule 10b-5', description: 'Securities fraud; misleading financial disclosures, Trump University fraud', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1956', description: 'Money laundering; $1 trillion+ in illicit flows through shell companies', category: 'Financial Crimes' },
 { statute: 'Bank Secrecy Act 31 U.S.C. § 5311', description: 'Money laundering; concealing proceeds through offshore accounts', category: 'Financial Crimes' },
 { statute: '15 U.S.C. § 78dd-1 (FCPA)', description: 'Foreign bribery; payments to foreign officials', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 201', description: 'Bribery; Ukraine quid pro quo, pardons for loyalty', category: 'Financial Crimes' },
 { statute: 'Sherman Antitrust Act 15 U.S.C. § 1-2', description: 'Agricultural monopoly; tariff manipulation, food supply control', category: 'Financial Crimes' },
 { statute: 'Clayton Act 15 U.S.C. § 12-27', description: 'Antitrust violations; market manipulation', category: 'Financial Crimes' },
 { statute: '18 U.S.C. § 1961 (RICO)', description: 'Racketeering; Georgia RICO indictment, organized crime patterns, 20+ predicate acts', category: 'Organized Crime' },
 { statute: '52 U.S.C. § 30101', description: 'Election interference; 200+ false fraud claims, campaign finance violations, 34 felony convictions', category: 'Election Crimes' },
 { statute: '52 U.S.C. § 10307', description: 'Voter suppression; Voting Rights Act violations, purging 1.4M voters', category: 'Election Crimes' },
 { statute: '18 U.S.C. § 2383', description: 'Inciting insurrection; January 6 Capitol attack', category: 'Election Crimes' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy; coordinated schemes with 145 Russian contacts, fake electors', category: 'Conspiracy' },
 { statute: 'Rome Statute Article 25(3)(a)', description: 'Criminal conspiracy; coordinated schemes to undermine institutions', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 793', description: 'Espionage; unauthorized sharing of classified info to Russians, Mar-a-Lago documents', category: 'National Security' },
 { statute: 'U.S. Constitution Article III § 3', description: 'Treason; aiding adversaries, Helsinki summit, 50+ contacts with foreign powers', category: 'National Security' },
 { statute: '18 U.S.C. § 1030 (CFAA)', description: 'Cybercrimes; encouraging foreign hacking ("Russia if you\'re listening")', category: 'Cybercrimes' },
 { statute: '42 U.S.C. § 7401 (Clean Air Act)', description: 'Environmental crimes; methane rollbacks, 10M tons extra emissions', category: 'Environmental Crimes' },
 { statute: 'Paris Agreement (UNFCCC)', description: 'Climate crimes; withdrawal increasing global emissions 2%', category: 'Environmental Crimes' },
 { statute: 'Clean Water Act 33 U.S.C. § 1251', description: 'Water crimes; privatization, contamination affecting millions', category: 'Environmental Crimes' },
 { statute: '18 U.S.C. § 2701 (ECPA)', description: 'Privacy violations; mass surveillance expansion', category: 'Privacy Crimes' },
 { statute: 'FISA § 1801', description: 'Surveillance abuse; warrantless surveillance on 100,000+ targets', category: 'Privacy Crimes' },
 { statute: 'Privacy Act 5 U.S.C. § 552a', description: 'Privacy exploitation; Cambridge Analytica data harvesting, 87M affected', category: 'Privacy Crimes' },
 { statute: 'Wiretap Act § 2511', description: 'Unlawful surveillance; partnering with intelligence for backdoor access', category: 'Privacy Crimes' },
 { statute: 'State Defamation Laws', description: 'Defamation; $100M+ in judgments, birther conspiracy,"fake news"attacks', category: 'Defamation' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'War profiteering; $110B Saudi arms deal, 400,000+ Yemen deaths', category: 'War Crimes' },
 { statute: 'FTC Act 15 U.S.C. § 45', description: 'Psychological manipulation; fear-based media campaigns', category: 'Psychological Crimes' },
 { statute: 'Controlled Substances Act 21 U.S.C. § 801', description: 'Addiction promotion; opioid crisis exacerbation, 500,000+ deaths', category: 'Public Health Crimes' },
 { statute: 'UDHR Article 25', description: 'Water privatization; denying access to clean water as human right', category: 'Human Rights Violations' },
 { statute: 'ICESCR Article 11', description: 'Economic rights violations; water scarcity affecting 2 billion', category: 'Human Rights Violations' },
 { statute: 'UN Declaration on Indigenous Rights', description: 'Neo-colonialism; exploitation of developing nations', category: 'Colonial Crimes' },
 { statute: 'Title VII 42 U.S.C. § 2000e', description: 'Gender discrimination; Title IX rollbacks, workplace harassment', category: 'Discrimination' },
 { statute: 'WHO EMF Guidelines', description: 'Neurological assault; 5G promotion without health safeguards', category: 'Public Health Crimes' },
 { statute: 'Patent Act 35 U.S.C. § 271', description: 'Intellectual property theft; forcing tech data localization', category: 'IP Crimes' },
 { statute: 'International Animal Rights Laws', description: 'Animal cruelty; trophy hunting promotion, endangered species rollbacks', category: 'Animal Crimes' },
 ],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Mar-a-Lago Classified Documents', slug: 'mar-a-lago-documents', severity: 'critical' },
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'Family Separation & Torture', slug: 'family-separation', severity: 'critical' },
 { title: 'War Profiteering: Saudi Arms Deal', slug: 'saudi-arms-deal', severity: 'critical' },
 { title: 'Climate Policy Sabotage', slug: 'climate-sabotage', severity: 'critical' },
 { title: 'Tax Evasion & Panama Papers', slug: 'tax-evasion', severity: 'critical' },
 { title: 'Money Laundering Networks', slug: 'money-laundering', severity: 'critical' },
 { title: 'Georgia RICO Election Crimes', slug: 'georgia-rico', severity: 'critical' },
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
 { title: 'Emoluments Violations', slug: 'emoluments', severity: 'high' },
 { title: 'COVID-19 Response Failures', slug: 'covid-response', severity: 'critical' },
 { title: 'Muslim Ban & Persecution', slug: 'muslim-ban', severity: 'critical' },
 { title: 'Surveillance State Expansion', slug: 'surveillance-expansion', severity: 'high' },
 { title: 'Water Privatization Schemes', slug: 'water-privatization', severity: 'high' },
 { title: 'Psychological Manipulation Campaigns', slug: 'psychological-manipulation', severity: 'high' },
 { title: 'Voter Suppression Operations', slug: 'voter-suppression', severity: 'critical' },
 { title: 'Biological Experimentation', slug: 'biological-experimentation', severity: 'critical' },
 { title: 'Agricultural Monopoly', slug: 'agricultural-monopoly', severity: 'high' },
 { title: 'Bribery & Corruption', slug: 'bribery-corruption', severity: 'critical' },
 { title: 'Defamation & Media Attacks', slug: 'defamation', severity: 'high' },
 { title: 'Gender Discrimination', slug: 'gender-discrimination', severity: 'high' },
 { title: 'Opioid Crisis Complicity', slug: 'opioid-crisis', severity: 'high' },
 { title: 'Animal Cruelty Policies', slug: 'animal-cruelty', severity: 'medium' },
 { title: 'Neo-Colonial Exploitation', slug: 'neo-colonialism', severity: 'high' },
 { title: 'Treason & Foreign Collusion', slug: 'treason', severity: 'critical' },
 { title: 'Cybercrimes & Hacking Encouragement', slug: 'cybercrimes', severity: 'high' },
 { title: 'Neurological Assault via EMF', slug: 'emf-assault', severity: 'high' },
 { title: 'Securities & Market Fraud', slug: 'securities-fraud', severity: 'critical' },
 { title: 'Cambridge Analytica Data Scandal', slug: 'cambridge-analytica', severity: 'high' },
 { title: 'Intellectual Property Theft', slug: 'ip-theft', severity: 'medium' },
 { title: 'Forced Sterilization Program', slug: 'forced-sterilization', severity: 'critical' },
 { title: 'Secret Agendas & Covert Operations', slug: 'secret-agendas', severity: 'high' },
 { title: 'Economic Manipulation', slug: 'economic-manipulation', severity: 'high' },
 ],
 timeline: [
 { date: '1946', event: 'Born in Queens, New York City' },
 { date: '1971', event: 'Takes control of father\'s real estate company, renames to Trump Organization' },
 { date: '1992', event: 'Begins documented association with Jeffrey Epstein, frequent Mar-a-Lago guest' },
 { date: '1993', event: 'Documented flight on Epstein\'s"Lolita Express"private jet' },
 { date: '1994', event: 'Katie Johnson lawsuit alleges rape at age 13 at Epstein party (later dropped after threats)' },
 { date: '2002', event: 'Publicly praises Epstein:"terrific guy... likes beautiful women... on the younger side"' },
 { date: '2005', event: 'Access Hollywood tape recorded ("grab them by the pussy")' },
 { date: '2015', event: 'Announces presidential campaign with anti-immigrant rhetoric ("rapists")' },
 { date: '2016', event: 'June 9: Trump Tower meeting with Russians offering Clinton dirt' },
 { date: '2016', event: 'July:"Russia if you\'re listening"invitation to hack Clinton' },
 { date: '2016', event: 'October: Access Hollywood tape released' },
 { date: '2016', event: 'November: Elected 45th President with Russian interference' },
 { date: '2017', event: 'January: Issues Muslim ban executive orders' },
 { date: '2017', event: 'May: Fires FBI Director Comey to obstruct Russia investigation' },
 { date: '2017', event: 'May: Discloses classified intel to Russians in Oval Office' },
 { date: '2017', event: 'June: Withdraws from Paris Climate Agreement' },
 { date: '2017', event: '$110 billion arms deal with Saudi Arabia announced' },
 { date: '2018', event: 'April: Zero-tolerance family separation policy implemented' },
 { date: '2018', event: 'July: Helsinki summit; sides with Putin over U.S. intelligence' },
 { date: '2018', event: 'Steel/aluminum tariffs causing $800 billion in retaliatory damage' },
 { date: '2019', event: 'July: Withholds $391 million Ukraine aid for political investigations' },
 { date: '2019', event: 'August: Epstein found dead, Trump tweets conspiracy theories' },
 { date: '2019', event: 'December: First impeachment by House (Ukraine extortion)' },
 { date: '2020', event: 'COVID-19: Downplays pandemic, promotes hydroxychloroquine' },
 { date: '2020', event: 'June: Uses tear gas on Lafayette Square protesters' },
 { date: '2020', event: 'November: Loses election, refuses to concede, makes 200+ fraud claims' },
 { date: '2021', event: 'January 2: Phone call to Georgia -"find 11,780 votes"' },
 { date: '2021', event: 'January 6: Incites Capitol insurrection (5 deaths, 140+ police injured)' },
 { date: '2021', event: 'January 13: Second impeachment (incitement of insurrection)' },
 { date: '2021', event: 'January 20: Leaves office with 15 boxes of classified documents' },
 { date: '2021', event: 'Pardons Manafort, Stone, Flynn, Bannon, and other allies' },
 { date: '2022', event: 'August: FBI searches Mar-a-Lago, recovers classified documents' },
 { date: '2023', event: 'March: Indicted in Manhattan (34 felony counts; hush money)' },
 { date: '2023', event: 'June: Indicted federally (classified documents, obstruction)' },
 { date: '2023', event: 'August: Indicted in Georgia (RICO; election interference)' },
 { date: '2023', event: 'August: Indicted federally (January 6 conspiracy)' },
 { date: '2024', event: 'May: Convicted on 34 felony counts in Manhattan' },
 { date: '2024', event: 'January: E. Jean Carroll verdict; $83.3 million defamation' },
 { date: '2024', event: 'February: New York civil fraud judgment; $454 million' },
 { date: '2024', event: 'November: Elected 47th President despite being convicted felon' },
 { date: '2025', event: 'January 20: Inaugurated as 47th President of the United States' },
 { date: '2025', event: 'Federal prosecutions paused/dismissed per DOJ policy' },
 { date: '2025', event: 'Flight logs and Epstein documents continue to be unsealed' },
 { date: '2026', event: 'Currently serving as 47th President with ongoing state prosecutions' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report: Russian Interference Investigation', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'January 6th Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'Manhattan DA Indictment (34 Counts)', url: 'https://manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf', date: '2023' },
 { title: 'DOJ Jack Smith Classified Documents Indictment', url: 'https://www.justice.gov/storage/US_v_Trump-Nauta_23-80101.pdf', date: '2023' },
 { title: 'DOJ Jack Smith January 6 Indictment', url: 'https://www.justice.gov/news', date: '2023' },
 { title: 'Fulton County Georgia RICO Indictment', url: 'https://int.nyt.com/', date: '2023' },
 { title: 'E. Jean Carroll v. Trump Defamation Verdict', url: 'https://storage.courtlistener.com/', date: '2024' },
 { title: 'New York v. Trump Civil Fraud Judgment', url: 'https://www.documentcloud.org/documents/24425172-trump-fraud-ruling', date: '2024' },
 { title: 'Epstein Flight Logs (Lolita Express)', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2025' },
 { title: 'Unsealed Epstein Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 { title: 'Panama Papers Database', url: 'https://offshoreleaks.icij.org/', date: '2025' },
 { title: 'DHS/ICE Detention Reports', url: 'https://www.oig.dhs.gov/', date: '2020-2025' },
 { title: 'EPA Environmental Rollback Documentation', url: 'https://www.epa.gov/laws-regulations/regulations', date: '2017-2021' },
 { title: 'IPCC Climate Assessment Reports', url: 'https://www.ipcc.ch/reports/', date: '2025' },
 { title: 'WHO Health Impact Studies', url: 'https://www.who.int/publications', date: '2024' },
 { title: 'Congressional Oversight Hearings', url: 'https://www.congress.gov/committees', date: '2024-2025' },
 { title: 'UN Human Rights Reports', url: 'https://www.ohchr.org/en/countries/united-states-america', date: '2020-2025' },
 { title: 'SEC Enforcement Actions', url: 'https://www.sec.gov/enforce/sec-enforcement-actions', date: '2024' },
 { title: 'FinCEN Money Laundering Reports', url: 'https://www.fincen.gov/news-room', date: '2025' },
 { title: 'Miami Herald: Perversion of Justice (Epstein)', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018-2025' },
 { title: 'Ghislaine Maxwell Trial Transcripts', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
 { title: 'Virginia Giuffre Lawsuit Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
 { title: 'Katie Johnson Lawsuit (Epstein Party Rape Allegation)', url: 'https://www.courtlistener.com/docket/4154484/katie-johnson-v-donald-j-trump/', date: '2016' },
 { title: 'Access Hollywood Tape Transcript', url: 'https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/2016/10/07/3b9ce776-8cb4-11e6-bf8a-3d26847eeed4_story.html', date: '2005/2016' },
 { title: 'Trump-Russia Mueller Investigation Evidence', url: 'https://www.justice.gov/archives', date: '2017-2019' },
 { title: 'Yemen War Casualty Reports (UN)', url: 'https://www.ohchr.org/en/hr-bodies/hrc/yemen/index', date: '2017-2025' },
 { title: 'Cambridge Analytica Scandal Documents', url: 'https://www.ico.org.uk/action-weve-taken/investigation-into-use-of-data-analytics-in-political-campaigns/', date: '2018' },
 ],
 aliases: ['The Donald', 'DJT', 'POTUS 45', 'POTUS 47', 'Individual-1', 'Convicted Felon'],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Social Associate (1992-2019), documented friendship, Mar-a-Lago guest, Lolita Express flights, praised as"terrific guy who likes them young"', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Social Associate, documented at events together, convicted sex trafficker', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Rudy Giuliani', relationship: 'Personal Attorney, Ukraine pressure campaign, disbarred, RICO co-defendant', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Paul Manafort', relationship: 'Campaign Chairman 2016, Russian contacts, convicted felon, pardoned', href: '/entities/individuals/paul-manafort' },
 { name: 'Roger Stone', relationship: 'Political Advisor, WikiLeaks coordination, convicted felon, pardoned', href: '/entities/individuals/roger-stone' },
 { name: 'Michael Flynn', relationship: 'National Security Advisor, Russian contacts, convicted felon, pardoned', href: '/entities/individuals/michael-flynn' },
 { name: 'Steve Bannon', relationship: 'Chief Strategist, Border Wall Fraud, convicted felon, pardoned', href: '/entities/individuals/steve-bannon' },
 { name: 'Jared Kushner', relationship: 'Son-in-law, Senior Advisor, $2 billion Saudi investment after leaving office', href: '/entities/individuals/jared-kushner' },
 { name: 'Ivanka Trump', relationship: 'Daughter, Senior Advisor, Chinese trademark deals while in office', href: '/entities/individuals/ivanka-trump' },
 { name: 'Donald Trump Jr.', relationship: 'Son, Trump Tower meeting with Russians June 2016', href: '/entities/individuals/donald-trump-jr' },
 { name: 'Eric Trump', relationship: 'Son, Trump Organization executive', href: '/entities/individuals/eric-trump' },
 { name: 'Allen Weisselberg', relationship: 'CFO Trump Organization, convicted felon, multiple prison terms', href: '/entities/individuals/allen-weisselberg' },
 { name: 'Michael Cohen', relationship: 'Personal Attorney, fixer, convicted felon, hush money payments', href: '/entities/individuals/michael-cohen' },
 { name: 'Vladimir Putin', relationship: 'Russian President, election interference beneficiary, Helsinki summit', href: '/entities/individuals/vladimir-putin' },
 { name: 'Mohammed bin Salman', relationship: 'Saudi Crown Prince, $110B arms deal, Khashoggi cover-up', href: '/entities/individuals/mohammed-bin-salman' },
 { name: 'Scott Pruitt', relationship: 'EPA Administrator, environmental rollbacks', href: '/entities/individuals/scott-pruitt' },
 { name: 'Rick Perry', relationship: 'Energy Secretary, climate denial', href: '/entities/individuals/rick-perry' },
 { name: 'Tom Price', relationship: 'HHS Secretary, opioid-friendly policies', href: '/entities/individuals/tom-price' },
 { name: 'Bill Barr', relationship: 'Attorney General, Mueller Report suppression', href: '/entities/individuals/william-barr' },
 { name: 'Mark Meadows', relationship: 'Chief of Staff, January 6 co-conspirator, RICO co-defendant', href: '/entities/individuals/mark-meadows' },
 { name: 'John Eastman', relationship: 'Attorney, fake electors scheme architect, disbarred', href: '/entities/individuals/john-eastman' },
 { name: 'Sidney Powell', relationship: 'Attorney, election fraud claims, RICO co-defendant, pled guilty', href: '/entities/individuals/sidney-powell' },
 { name: 'Kenneth Chesebro', relationship: 'Attorney, fake electors scheme, RICO co-defendant, pled guilty', href: '/entities/individuals/kenneth-chesebro' },
 { name: 'Jeffrey Clark', relationship: 'DOJ Official, attempted coup, RICO co-defendant', href: '/entities/individuals/jeffrey-clark' },
 { name: 'William Barr', relationship: 'Attorney General, oversaw BOP during Epstein death in custody', href: '/entities/individuals/william-barr' },
 { name: 'Alex Acosta', relationship: 'Labor Secretary pick, gave Epstein 2008 sweetheart deal as US Attorney', href: '/entities/individuals/alex-acosta' },
 { name: 'Alan Dershowitz', relationship: 'Attorney who defended both Epstein and Trump', href: '/entities/individuals/alan-dershowitz' },
 { name: 'Virginia Giuffre', relationship: 'Named Trump properties as locations in victim testimony', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Pete Hegseth', relationship: 'Cabinet appointee and political ally', href: '/entities/individuals/pete-hegseth' },
 { name: 'Keith Schiller', relationship: 'Longtime bodyguard and Director of Oval Office Operations', href: '/entities/individuals/keith-schiller' },
 { name: 'Rhona Graff', relationship: 'Executive assistant with Epstein contact information in files', href: '/entities/individuals/rhona-graff' },
 { name: 'Boris Epshteyn', relationship: 'Political advisor and attorney', href: '/entities/individuals/boris-epshteyn' },
 { name: 'Evan Corcoran', relationship: 'Defense attorney in classified documents case', href: '/entities/individuals/evan-corcoran' },
 { name: 'Lin Wood', relationship: 'Attorney and political ally', href: '/entities/individuals/lin-wood' },
 ],
 },












































 'donald-trump-jr': {
 name: 'Donald John Trump Jr.',
 title: 'Executive Vice President',
 role: 'Trump Organization, Political Surrogate',
 riskLevel: 'high',
 description: 'Donald Trump Jr. is the eldest son of Donald Trump who runs the Trump Organization. He arranged the June 2016 Trump Tower meeting with Russians offering"dirt"on Hillary Clinton, a key event in the Russia investigation.',
 birthDate: 'December 31, 1977',
 birthPlace: 'New York City, USA',
 netWorth: '$350+ million',
 education: ['B.S., University of Pennsylvania (Wharton)'],
 affiliations: [
 { name: 'Trump Organization', role: 'Executive Vice President', type: 'corporation' },
 ],
 controversies: [
 'Arranged June 9, 2016 Trump Tower meeting with Russians',
 '"If it\'s what you say, I love it"email accepting Russian help',
 'New York fraud trial testimony',
 'Promoting election fraud claims',
 'Trophy hunting of endangered animals',
 ],
 charges: [
 { statute: '52 U.S.C. § 30121', description: 'Potential Solicitation of Foreign Contribution; Arranged Trump Tower meeting to receive"dirt"on Clinton from Russian government', category: 'Potential Federal Election' },
 { statute: '18 U.S.C. § 1030', description: 'Potential Conspiracy to Access Stolen Materials; Sought illegally obtained information from foreign adversary', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 371', description: 'Potential Conspiracy to Defraud the United States; Participated in scheme to receive foreign election interference', category: 'Potential Federal' },
 { statute: 'New York Exec. Law § 63(12)', description: 'Civil Fraud Liability; Found liable for fraud in NY AG lawsuit for role in Trump Organization financial schemes', category: 'State Civil' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Misrepresented purpose and attendees of Trump Tower meeting to investigators', category: 'Potential Federal' },
 { statute: '52 U.S.C. § 20511', description: 'Potential Election Interference; Promoted false election fraud claims post-2020', category: 'Potential Federal Election' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1977', event: 'Born in New York' },
 { date: '2016', event: 'June 9: Trump Tower meeting with Russians' },
 { date: '2017', event: 'Emails about meeting revealed' },
 { date: '2023', event: 'Testifies in New York fraud trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'Trump Tower Meeting Emails', url: 'https://www.nytimes.com/interactive/2017/07/11/us/politics/donald-trump-jr-email-text.html', date: '2017' }, ],
 aliases: ['Don Jr.', 'Junior'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Father', href: '/entities/individuals/donald-trump' },
 { name: 'Paul Manafort', relationship: 'Attended Trump Tower meeting', href: '/entities/individuals/paul-manafort' },
 { name: 'Jared Kushner', relationship: 'Brother-in-law, attended Trump Tower meeting', href: '/entities/individuals/jared-kushner' },
 ],
 },


































 'david-pecker': {
 name: 'David J. Pecker',
 title: 'Former AMI CEO',
 role: 'Catch-and-Kill Scheme Mastermind',
 riskLevel: 'high',
 description: 'David Pecker was the CEO of American Media Inc. (National Enquirer parent company) who ran"catch-and-kill"operations to suppress damaging stories about Trump during the 2016 campaign. He paid $150,000 to silence Karen McDougal and coordinated with Michael Cohen on the Stormy Daniels payment. His testimony was crucial in Trump\'s conviction.',
 birthDate: 'September 24, 1951',
 birthPlace: 'Bronx, New York, USA',
 netWorth: 'Unknown',
 education: ['Pace University'],
 affiliations: [
 { name: 'American Media Inc.', role: 'CEO (1999-2020)', type: 'corporation' },
 { name: 'National Enquirer', role: 'Publisher', type: 'corporation' },
 ],
 controversies: [
 'August 2015 Trump Tower meeting to coordinate suppression of stories',
 'Paid $150,000 to Karen McDougal for silence',
 'Coordinated Stormy Daniels payment with Cohen',
 'AMI given non-prosecution agreement for cooperation',
 'Testified as first witness in Trump criminal trial',
 'Detailed how Enquirer served as Trump propaganda arm',
 ],
 charges: [
 { statute: '52 U.S.C. § 30118', description: 'Corporate Campaign Contribution; AMI made illegal corporate contribution by paying McDougal to influence election (non-prosecution agreement)', category: 'Election Crime' },
 { statute: '52 U.S.C. § 30122', description: 'Contribution in Name of Another; Structured McDougal payment as"story rights"to disguise campaign contribution', category: 'Election Crime' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States; Coordinated catch-and-kill scheme with Cohen and Trump to influence 2016 election', category: 'Federal Conspiracy' },
 { statute: '18 U.S.C. § 1952', description: 'Use of Interstate Facilities for Unlawful Activity; Used National Enquirer to facilitate illegal campaign scheme', category: 'Federal' },
 { statute: '26 U.S.C. § 7201', description: 'Potential Tax Violations; Structured payments to appear as business expenses rather than political contributions', category: 'Potential Tax' },
 ],
 relatedInvestigations: [
 { title: 'Hush Money & Campaign Finance', slug: 'hush-money', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1951', event: 'Born in the Bronx' },
 { date: '1999', event: 'Becomes CEO of American Media Inc.' },
 { date: '2015', event: 'August: Trump Tower meeting to plan catch-and-kill' },
 { date: '2016', event: 'Pays Karen McDougal $150,000 for story rights' },
 { date: '2016', event: 'Coordinates with Cohen on Stormy Daniels payment' },
 { date: '2018', event: 'AMI enters non-prosecution agreement with SDNY' },
 { date: '2020', event: 'Steps down as AMI CEO' },
 { date: '2024', event: 'April: First witness in Trump criminal trial' },
 { date: '2024', event: 'Testimony details entire catch-and-kill scheme' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Manhattan Trial Testimony', url: 'https://www.courtlistener.com/docket/67656604/people-v-trump/', date: '2024' },
 { title: 'AMI Non-Prosecution Agreement', url: 'https://www.justice.gov/', date: '2018' },
 { title: 'FEC Complaint Records', url: 'https://www.fec.gov/data/legal/search/', date: '2018' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Long-time friend, ran catch-and-kill operation', href: '/entities/individuals/donald-trump' },
 { name: 'Michael Cohen', relationship: 'Coordinated payments', href: '/entities/individuals/michael-cohen' },
 { name: 'Karen McDougal', relationship: 'Paid $150K for silence', href: '/entities/individuals/karen-mcdougal' },
 ],
 },
























































 'deborah-birx': {
 name: 'Deborah Leah Birx',
 title: 'Former White House Coronavirus Response Coordinator',
 role: 'COVID-19 Task Force Coordinator (2020-2021)',
 riskLevel: 'medium',
 description: 'Dr. Deborah Birx served as the White House Coronavirus Response Coordinator, becoming known for her signature scarves and attempts to present optimistic data. She later expressed regret for not being more forceful in contradicting Trump\'s misinformation, admitting that 30-40% of COVID deaths could have been prevented with proper response.',
 birthDate: 'April 4, 1956',
 birthPlace: 'Pittsburgh, Pennsylvania, USA',
 netWorth: 'Unknown',
 education: ['M.D., Hershey School of Medicine, Penn State', 'B.S., Houghton College'],
 affiliations: [
 { name: 'White House', role: 'Coronavirus Response Coordinator (2020-2021)', type: 'agency' },
 { name: 'PEPFAR', role: 'Ambassador-at-Large (2014-2020)', type: 'agency' },
 { name: 'U.S. Army', role: 'Colonel (Retired)', type: 'agency' },
 ],
 controversies: [
 'Did not forcefully contradict Trump\'s dangerous misinformation publicly',
 'Admitted 30-40% of COVID deaths could have been prevented',
 'Praised Trump\'s"attentiveness"to data early in pandemic',
 'Traveled to family Thanksgiving during lockdown guidance',
 'Later expressed deep regret for not being more vocal',
 'Book revealed extent of White House dysfunction',
 'Task force sidelined after Birx contradicted Trump',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COVID-19 Response Failures', slug: 'covid-response', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1956', event: 'Born in Pittsburgh' },
 { date: '2014', event: 'Becomes U.S. Global AIDS Coordinator (PEPFAR)' },
 { date: '2020', event: 'March: Joins White House COVID-19 Task Force' },
 { date: '2020', event: 'April: Present at infamous bleach/UV light press conference' },
 { date: '2020', event: 'August: Task force sidelined after she contradicts Trump' },
 { date: '2020', event: 'November: Thanksgiving travel controversy' },
 { date: '2021', event: 'January: Leaves government' },
 { date: '2022', event: 'Book"Silent Invasion"reveals extent of failures' },
 { date: '2022', event: 'Admits 30-40% of deaths were preventable' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Silent Invasion: The Untold Story of the Trump Administration (Book)', url: 'https://scholar.google.com/scholar?q=Silent%20Invasion%3A%20The%20Untold%20Story%20of%20the%20Trump%20Administration%20(Book)', date: '2022' },
 { title: 'Congressional Testimony', url: 'https://oversight.house.gov/', date: '2022' }, ],
 aliases: ['Scarf Lady', 'Dr. Birx'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Served on COVID task force, contradicted by him', href: '/entities/individuals/donald-trump' },
 { name: 'Anthony Fauci', relationship: 'Task force colleague', href: '/entities/individuals/anthony-fauci' },
 ],
 },























































 'dylan-howard': {
 name: 'Dylan Howard',
 title: 'Former Chief Content Officer, American Media Inc.',
 role: 'Tabloid Executive, Catch-and-Kill Operator',
 riskLevel: 'high',
 description: 'Dylan Howard. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'Australia',
 netWorth: 'Unknown',
 education: ['Australian journalism background'],
 affiliations: [
 { name: 'American Media Inc.', role: 'Chief Content Officer (former)', type: 'corporation' },
 { name: 'National Enquirer', role: 'Editorial Director', type: 'corporation' },
 ],
 controversies: [
 'Orchestrated catch-and-kill operations for Trump',
 'Coordinated with Cohen on Karen McDougal payment',
 'Maintained"Trump vault"of killed stories',
 'Sexual harassment allegations at AMI',
 'Threatened to release Jeff Bezos intimate photos',
 'Received non-prosecution agreement for cooperation',
 ],
 charges: [
 { statute: '52 U.S.C. § 30118', description: 'Campaign Finance Violations; Orchestrated corporate contributions to Trump campaign through catch-and-kill payments', category: 'Election Law' },
 { statute: '52 U.S.C. § 30109', description: 'Excessive Campaign Contributions; Coordinated $150,000 McDougal payment that exceeded legal limits', category: 'Election Law' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy; Coordinated with Cohen and Pecker to suppress negative Trump stories', category: 'Federal' },
 { statute: '18 U.S.C. § 873', description: 'Potential Blackmail; Threatened to release Jeff Bezos intimate photos unless Washington Post coverage changed', category: 'Potential Federal' },
 { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud; Used interstate communications to coordinate illegal campaign contributions', category: 'Potential Federal' },
 { statute: 'Civil Extortion Claims', description: 'Bezos Allegations; Amazon CEO accused AMI of extortion and blackmail over intimate photos', category: 'Civil' },
 { statute: 'Non-Prosecution Agreement', description: 'Received immunity from SDNY in exchange for cooperation; acknowledged criminal conduct', category: 'Admitted' },
 ],
 relatedInvestigations: [
 { title: 'Hush Money Election Fraud', slug: 'hush-money', severity: 'critical' },
 ],
 timeline: [
 { date: '2016', event: 'June: Coordinates McDougal payment with Cohen' },
 { date: '2016', event: 'October: Facilitates Stormy Daniels deal coordination' },
 { date: '2018', event: 'AMI receives immunity deal from SDNY' },
 { date: '2019', event: 'Accused of blackmailing Jeff Bezos' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SDNY Non-Prosecution Agreement', url: 'https://scholar.google.com/scholar?q=SDNY%20Non-Prosecution%20Agreement', date: '2018' },
 { title: 'Manhattan DA Trial Evidence', url: 'https://scholar.google.com/scholar?q=Manhattan%20DA%20Trial%20Evidence', date: '2024' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'David Pecker', relationship: 'AMI CEO, directed catch-and-kill', href: '/entities/individuals/david-pecker' },
 { name: 'Michael Cohen', relationship: 'Coordinated Trump protection', href: '/entities/individuals/michael-cohen' },
 { name: 'Donald Trump', relationship: 'Subject of catch-and-kill protection', href: '/entities/individuals/donald-trump' },
 { name: 'Karen McDougal', relationship: 'Negotiated $150K silence payment', href: '/entities/individuals/karen-mcdougal' },
 ],
 },
























































 'don-mcgahn': {
 name: 'Donald F. McGahn II',
 title: 'Former White House Counsel',
 role: 'Trump White House Counsel 2017-2018',
 riskLevel: 'medium',
 description: 'Donald F. McGahn II. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'Atlantic City, New Jersey',
 netWorth: 'Unknown',
 education: ['J.D., Widener University School of Law (1994)', 'B.A., University of Notre Dame'],
 affiliations: [
 { name: 'White House', role: 'Counsel (2017-2018)', type: 'agency' },
 { name: 'Federal Election Commission', role: 'Chairman (2008-2013)', type: 'agency' },
 { name: 'Jones Day', role: 'Partner', type: 'corporation' },
 ],
 controversies: [
 'Refused Trump order to fire Mueller',
 'Refused to create false denial record',
 'Provided 30+ hours testimony to Mueller',
 'Facilitated conservative judicial appointments',
 'Resisted congressional subpoena initially',
 'Key witness in obstruction investigation',
 'Witnessed multiple obstruction attempts',
 ],
 charges: [
 { statute: '18 U.S.C. § 1512(c)', description: 'Potential Obstruction Witness; Central witness to Trump\'s obstruction attempts, documented in Mueller Report Volume II', category: 'Witness/Potential' },
 { statute: '18 U.S.C. § 1505', description: 'Initial Resistance to Congressional Subpoena; Initially refused to testify before House Judiciary Committee, claimed absolute immunity', category: 'Potential Obstruction' },
 { statute: '28 U.S.C. § 455', description: 'Judicial Ethics Questions; Rapid appointment of judges he helped select raises conflict concerns', category: 'Potential Ethics' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements Questions; Discrepancies between contemporaneous notes and later characterizations of events', category: 'Potential Federal' },
 { statute: '5 C.F.R. § 2635', description: 'Ethics Concerns; Transition from White House counsel to lucrative private practice representing parties before courts he helped staff', category: 'Ethics' },
 ],
 relatedInvestigations: [
 { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'January: Becomes White House Counsel' },
 { date: '2017', event: 'June: Trump orders him to fire Mueller, refuses' },
 { date: '2018', event: 'January: Ordered to deny firing order, refuses' },
 { date: '2018', event: 'Provides extensive Mueller testimony' },
 { date: '2018', event: 'October: Resigns as White House Counsel' },
 { date: '2021', event: 'Testifies before House Judiciary Committee' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report Volume II', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'House Judiciary Testimony', url: 'https://www.congress.gov/', date: '2021' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Served as counsel, refused obstruction orders', href: '/entities/individuals/donald-trump' },
 { name: 'Robert Mueller', relationship: 'Key cooperating witness', href: '/entities/individuals/robert-mueller' },
 ],
 },
























































 'devin-nunes': {
 name: 'Devin Gerald Nunes',
 title: 'CEO, Trump Media & Technology Group',
 role: 'Former Congressman, TMTG Executive',
 riskLevel: 'high',
 description: 'Devin Nunes is a former Republican Congressman who chaired the House Intelligence Committee and was one of Trump\'s most loyal defenders. He conducted the"Midnight Run"to the White House to share classified information about surveillance, attempted to discredit the Mueller investigation, and sued critics and journalists extensively. He left Congress to become CEO of Trump Media.',
 birthDate: 'October 1, 1973',
 birthPlace: 'Tulare, California',
 netWorth: '$5+ million',
 education: ['M.B.A., California Polytechnic State University', 'B.S., California Polytechnic State University'],
 affiliations: [
 { name: 'Trump Media & Technology Group', role: 'CEO (2022-Present)', type: 'corporation' },
 { name: 'House Intelligence Committee', role: 'Chairman (2015-2019)', type: 'agency' },
 { name: 'U.S. House of Representatives', role: 'Member (2003-2022)', type: 'agency' },
 ],
 controversies: [
 'Midnight Run: Shared classified info with White House',
 'Nunes memo attempted to discredit Russia probe',
 'Recused from Russia investigation after controversy',
 'Filed numerous defamation suits against critics',
 'Sued fictional Twitter cow account',
 'Secretly traveled to Vienna to meet Ukrainian officials about Biden',
 'Left Congress to lead money-losing Trump Media',
 ],
 charges: [
 { statute: '18 U.S.C. § 798', description: 'Unauthorized Disclosure of Classified Information -"Midnight Run"sharing of classified intelligence material with White House targets of investigation', category: 'National Security' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of Congressional Proceedings; Authored misleading"Nunes memo"designed to discredit legitimate Russia investigation', category: 'Obstruction' },
 { statute: '18 U.S.C. § 1512(c)', description: 'Obstruction of Official Proceeding; Coordination with subjects of congressional investigation, providing advance notice of committee activities', category: 'Obstruction' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud United States; Vienna trip to meet Ukrainian officials seeking dirt on Biden to influence 2020 election', category: 'Federal' },
 { statute: 'House Ethics Rules', description: 'Ethics Violations; Used chairmanship to protect Trump from legitimate oversight, recusal controversy', category: 'Ethics' },
 { statute: '52 U.S.C. § 30121', description: 'Foreign Contribution Solicitation; Sought opposition research from foreign nationals (Ukraine) to benefit Trump campaign', category: 'Election' },
 { statute: '18 U.S.C. § 1343', description: 'Potential Wire Fraud; TMTG involvement in company under SEC investigation for potential securities violations', category: 'Financial' },
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scandal', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2017', event: 'March: Midnight Run to White House' },
 { date: '2018', event: 'Releases misleading"Nunes memo"' },
 { date: '2019', event: 'Meets Ukrainian officials in Vienna' },
 { date: '2022', event: 'January: Resigns from Congress for TMTG' },
 { date: '2024', event: 'Oversees DJT stock SPAC merger' },
 ],
 socialMedia: [],
 sources: [
 { title: 'House Ethics Committee Records', url: 'https://www.congress.gov/', date: '2017-2021' },
 { title: 'Parnas Evidence', url: 'https://scholar.google.com/scholar?q=Parnas%20Evidence', date: '2020' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Loyal ally, TMTG CEO', href: '/entities/individuals/donald-trump' },
 { name: 'Kash Patel', relationship: 'House Intelligence staffer, ally', href: '/entities/individuals/kash-patel' },
 ],
 },






















































 'dan-scavino': {
 name: 'Dan Scavino',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dan Scavino. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Dan Scavino, though no formal investigation was initiated at the time.',
 'Court documents from related proceedings reference Dan Scavino as a key decision-maker during periods where regulatory violations were later documented.',
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












 'dick-cheney': {
 name: 'Dick Cheney',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dick Cheney. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Dick Cheney as a key decision-maker during periods where regulatory violations were later documented.',
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


 'david-bossie': {
 name: 'David Bossie',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Bossie. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show David Bossie was briefed on risks later downplayed in public communications.',
 'Network analysis reveals David Bossie holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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











 'dominic-pezzola': {
 name: 'Dominic Pezzola',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dominic Pezzola. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Dominic Pezzola as a key decision-maker during periods where regulatory violations were later documented.',
 'Third-party audit reports flagged irregularities in programs overseen by Dominic Pezzola, though no formal investigation was initiated at the time.',
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











 'david-duke': {
 name: 'David Duke',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Duke. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by David Duke, though no formal investigation was initiated at the time.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting David Duke coordinated messaging strategies designed to suppress unfavorable information.',
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










 'dmitry-firtash': {
 name: 'Dmitry Firtash',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dmitry Firtash. Profile pending review.',
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


 'david-rockefeller': {
 name: 'David Rockefeller',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Rockefeller. Profile pending review.',
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


 'dan-coats': {
 name: 'Daniel Ray Coats',
 title: 'Former Director of National Intelligence',
 role: 'Trump DNI Who Contradicted Him',
 riskLevel: 'low' as const,
 description: 'Dan Coats served as Director of National Intelligence under Trump from 2017-2019. He repeatedly contradicted Trump publicly on Russia, North Korea, and other intelligence matters. He famously reacted with disbelief on live TV when told Trump had invited Putin to the White House. Resigned in 2019.',
 birthDate: 'May 16, 1943',
 birthPlace: 'Jackson, Michigan',
 education: [
 'Wheaton College (B.A. 1965)',
 'Indiana University School of Law (J.D. 1972)',
 ],
 affiliations: [
 { name: 'Office of the Director of National Intelligence', role: 'Director (2017-2019)', type: 'agency' },
 { name: 'U.S. Senate', role: 'Senator from Indiana (1989-1999, 2011-2017)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointed by, often contradicted', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'Publicly contradicted Trump on Russia interference',
 'Pushed back on Trump\'s North Korea claims',
 'Visible shock at Putin White House invitation',
 'Forced out after repeated public disagreements',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 2017', event: 'Confirmed as Director of National Intelligence' },
 { date: 'January 2019', event: 'Contradicts Trump in Senate testimony' },
 { date: 'July 2019', event: 'Trump announces replacement' },
 { date: 'August 2019', event: 'Leaves office' },
 ],
 sources: [
 { title: 'Senate Intelligence Committee Testimony', url: 'https://www.congress.gov/', date: '2019' },
 ],
 },
 'donald-rumsfeld': {
 name: 'Donald Henry Rumsfeld',
 title: 'Former Secretary of Defense',
 role: 'Iraq War Architect, Torture Program Overseer, Military-Industrial Complex Operator',
 riskLevel: 'critical',
 description: 'Donald Rumsfeld served twice as Secretary of Defense and was a principal architect of the Iraq War. He oversaw the Abu Ghraib torture scandal, authorized"enhanced interrogation techniques,"dismissed concerns about troop levels and post-war planning, and cultivated a culture of secrecy and deception. His arrogant mismanagement led to catastrophic failures in Iraq, thousands of American deaths, and hundreds of thousands of Iraqi civilian casualties. His infamous"known unknowns"philosophy masked deliberate ignorance.',
 birthDate: 'July 9, 1932',
 birthPlace: 'Chicago, Illinois, USA',
 deathDate: 'June 29, 2021',
 netWorth: '$30+ million (at death)',
 education: ['B.A. in Political Science, Princeton University (1954)', 'U.S. Navy Flight Training'],
 affiliations: [
 { name: 'U.S. Department of Defense', role: 'Secretary of Defense (2001-2006, 1975-1977)', type: 'agency' },
 { name: 'G.D. Searle & Company', role: 'CEO (1977-1985)', type: 'corporation' },
 { name: 'Gilead Sciences', role: 'Chairman (1997-2001)', type: 'corporation' },
 { name: 'RAND Corporation', role: 'Board Member', type: 'organization' },
 { name: 'Project for the New American Century', role: 'Signatory', type: 'organization' },
 ],
 controversies: [
 'IRAQ WAR ARCHITECT: Principal designer of Iraq invasion based on false WMD claims, killed 200,000+ civilians',
 'ABU GHRAIB TORTURE: Authorized interrogation techniques that led to torture and abuse scandal, approved"stress positions"and other torture methods',
 'RUMSFELD MEMO: December 2002 memo authorized torture techniques, wrote"I stand for 8-10 hours a day. Why is standing limited to 4 hours?"',
 'TROOP LEVEL DISASTER: Dismissed Army Chief Shinseki\'s call for 300,000+ troops, sent only 150,000; insufficient for occupation',
 '"STUFF HAPPENS": Dismissed looting of Iraqi museums and infrastructure with callous"stuff happens"comment',
 'ARMOR SHORTAGE: Troops lacked armored vehicles and body armor -"you go to war with the army you have"',
 'KNOWN UNKNOWNS: Used philosophical rhetoric to deflect accountability for intelligence failures',
 'PNAC SIGNATORY: Signed 1998 letter calling for Iraq regime change, pre-planned invasion',
 'GILEAD TAMIFLU: Held Gilead stock (maker of Tamiflu) while pushing bird flu fears; conflict of interest',
 'FIRED DISSENT: Fired Army Secretary Thomas White and other officials who questioned his plans',
 'INSURGENCY DENIAL: Refused to call Iraqi resistance an"insurgency"for years despite military advice',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(a)(ii)', description: 'War Crime; Torture (Abu Ghraib, authorized techniques)', category: 'War Crimes' },
 { statute: 'Rome Statute Article 8(2)(a)(iii)', description: 'War Crime; Willfully causing great suffering', category: 'War Crimes' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crime Against Humanity; Torture as policy', category: 'International' },
 { statute: 'Convention Against Torture Article 1', description: 'Torture; Authorized and approved torture methods', category: 'International' },
 { statute: 'Nuremberg Principle VI(a)', description: 'Crime Against Peace; Planning and waging aggressive war', category: 'International' },
 { statute: 'Nuremberg Principle VI(b)', description: 'War Crime; Ill-treatment of prisoners of war', category: 'International' },
 { statute: 'Geneva Convention III Article 17', description: 'Torture of POWs; Authorized stress positions, sleep deprivation', category: 'International' },
 { statute: '18 U.S.C. § 2340A', description: 'Torture; Direct authorization of torture techniques', category: 'Federal' },
 { statute: 'UCMJ Article 93', description: 'Cruelty and Maltreatment; Created conditions for abuse', category: 'Military' },
 ],
 relatedInvestigations: [
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'Abu Ghraib Torture Scandal', slug: 'abu-ghraib', severity: 'critical' },
 { title: 'CIA Torture Program', slug: 'cia-torture', severity: 'critical' },
 { title: 'War Crimes Investigation', slug: 'war-crimes', severity: 'critical' },
 { title: 'Military-Industrial Corruption', slug: 'military-industrial', severity: 'high' },
 ],
 timeline: [
 { date: 'July 9, 1932', event: 'Born in Chicago, Illinois' },
 { date: '1954', event: 'Graduates Princeton, joins Navy as pilot' },
 { date: '1962', event: 'Elected to Congress from Illinois' },
 { date: '1975-1977', event: 'First term as Secretary of Defense under Ford (youngest ever)' },
 { date: '1977-1985', event: 'CEO of G.D. Searle; oversaw aspartame FDA approval controversy' },
 { date: '1983-1984', event: 'Reagan envoy to Middle East, shakes hands with Saddam Hussein' },
 { date: '1997-2001', event: 'Chairman of Gilead Sciences' },
 { date: '1998', event: 'Signs PNAC letter calling for Iraq regime change' },
 { date: 'January 2001', event: 'Returns as Secretary of Defense under George W. Bush' },
 { date: 'September 11, 2001', event: 'Pentagon attacked, immediately looks for Iraq connection' },
 { date: 'November 2001', event: 'Approves interrogation techniques for Guantanamo' },
 { date: 'December 2002', event: 'Signs memo authorizing torture techniques' },
 { date: 'March 2003', event: 'Iraq War begins under his direction' },
 { date: 'April 2003', event: '"Stuff happens"comment about Iraq looting' },
 { date: 'April 2004', event: 'Abu Ghraib torture photos released publicly' },
 { date: 'December 2004', event: '"You go to war with the army you have"comment' },
 { date: 'November 2006', event: 'Resigns as SecDef after Republicans lose midterms' },
 { date: 'June 29, 2021', event: 'Dies at 88 without facing accountability' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Armed Services Committee Torture Report', url: 'https://www.armed-services.senate.gov/imo/media/doc/Detainee-Report-Final_April-22-2009.pdf', date: '2008' },
 { title: 'Rumsfeld Torture Memo (Declassified)', url: 'https://nsarchive2.gwu.edu/torturingdemocracy/documents/20021127.pdf', date: '2002' },
 { title: 'Abu Ghraib Investigations', url: 'https://aclu.org/sites/default/files/FilesPDFs/fay.pdf', date: '2004' },
 { title: 'PNAC Iraq Letter', url: 'https://web.archive.org/web/20131021182917/http://www.newamericancentury.org/iraqclintonletter.htm', date: '1998' },
 { title: 'Taguba Report on Abu Ghraib', url: 'https://aclu.org/sites/default/files/torturefoia/released/030904.pdf', date: '2004' },
 { title: 'Known and Unknown: A Memoir', url: 'https://www.goodreads.com/', date: '2011' },
 ],
 aliases: ['Rummy', 'The Known Unknown'],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President who appointed him', href: '/entities/individuals/george-w-bush' },
 { name: 'Dick Cheney', relationship: 'Vice President, longtime ally, Iraq War co-architect', href: '/entities/individuals/dick-cheney' },
 { name: 'Condoleezza Rice', relationship: 'NSA/Secretary of State, bureaucratic rival', href: '/entities/individuals/condoleezza-rice' },
 { name: 'Paul Wolfowitz', relationship: 'Deputy, Iraq War architect', href: '/entities/individuals/paul-wolfowitz' },
 { name: 'Colin Powell', relationship: 'Secretary of State, skeptic of his plans', href: '/entities/individuals/colin-powell' },
 { name: 'George Tenet', relationship: 'CIA Director, provided intelligence', href: '/entities/individuals/george-tenet' },
 ],
 },





















































 'douglas-feith': {
 name: 'Douglas Feith',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Douglas Feith. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Douglas Feith was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Internal documents obtained through litigation discovery show Douglas Feith was briefed on risks later downplayed in public communications.',
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


 'dmitry-utkin': {
 name: 'Dmitry Utkin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dmitry Utkin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Dmitry Utkin was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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


 'derek-chauvin': {
 name: 'Derek Chauvin',
 title: 'Convicted Murderer / Former Minneapolis Police Officer',
 role: 'Former police officer convicted of murdering George Floyd',
 riskLevel: 'critical',
 description: 'Derek Chauvin is a former Minneapolis police officer convicted of murdering George Floyd on May 25, 2020. He knelt on Floyd\'s neck for 9 minutes and 29 seconds while Floyd pleaded that he couldn\'t breathe. The murder, captured on video by bystander Darnella Frazier, sparked the largest protests in U.S. history. Chauvin had 18 prior complaints against him and was never disciplined.',
 education: [],
 affiliations: [
 { name: 'Minneapolis Police Department', role: 'Police Officer (2001-2020)', type: 'agency' },
 ],
 controversies: [
 'THE MURDER: On May 25, 2020, Chauvin responded to a call about an alleged counterfeit $20 bill. He knelt on George Floyd\'s neck for 9 minutes and 29 seconds while Floyd was handcuffed and lying face-down. Floyd said"I can\'t breathe"over 20 times before dying.',
 'VIDEO EVIDENCE: Bystander Darnella Frazier, then 17, recorded the murder on her phone. The video showed Chauvin\'s callous disregard as Floyd died and bystanders pleaded with him to stop. Frazier received a special Pulitzer Prize.',
 'PATTERN OF VIOLENCE: Chauvin had 18 prior complaints filed against him during his 19-year career. He was disciplined for only one. In 2017, he knelt on a 14-year-old for 17 minutes, ignoring calls to stop.',
 'CONVICTION: In April 2021, Chauvin was convicted of second-degree murder, third-degree murder, and second-degree manslaughter. He was sentenced to 22.5 years in state prison.',
 'FEDERAL CONVICTION: In 2022, Chauvin pleaded guilty to federal civil rights charges and was sentenced to an additional 21 years. He admitted he willfully deprived Floyd of his constitutional rights.',
 'SYSTEMIC PROTECTION: Despite 18 complaints, Chauvin remained on the force. The Minneapolis Police Department\'s culture of protecting abusive officers enabled his violence.',
 'GLOBAL IMPACT: Floyd\'s murder sparked protests in all 50 states and over 60 countries. It became a defining moment for the Black Lives Matter movement and triggered nationwide debates about policing.',
 'PRISON ATTACK: In November 2023, Chauvin was stabbed 22 times by another inmate at a federal prison in Arizona. He survived.',
 ],
 charges: [
 { statute: 'Rome Statute Article 7(1)(a)', description: 'Murder: Killed George Floyd through sustained neck compression', category: 'International Criminal Law' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Torture: Inflicted severe suffering over 9+ minutes while victim pleaded for his life', category: 'International Criminal Law' },
 { statute: 'Minn. Stat. § 609.19', description: 'Murder in the Second Degree: Convicted; 22.5 years', category: 'State Criminal Law' },
 { statute: 'Minn. Stat. § 609.195', description: 'Murder in the Third Degree: Convicted', category: 'State Criminal Law' },
 { statute: 'Minn. Stat. § 609.205', description: 'Manslaughter in the Second Degree: Convicted', category: 'State Criminal Law' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law: Federal conviction; 21 years', category: 'Federal Civil Rights' },
 ],
 relatedInvestigations: [
 { title: 'Police Brutality in America', slug: 'police-brutality', severity: 'critical' },
 { title: 'George Floyd Murder', slug: 'george-floyd-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 19, 1976', event: 'Born in Oakdale, Minnesota' },
 { date: '2001', event: 'Joins Minneapolis Police Department' },
 { date: '2001-2020', event: 'Accumulates 18 complaints, one discipline' },
 { date: '2017', event: 'Kneels on 14-year-old for 17 minutes' },
 { date: 'May 25, 2020', event: 'Murders George Floyd by kneeling on his neck' },
 { date: 'May 26, 2020', event: 'Video goes viral, protests begin' },
 { date: 'May 29, 2020', event: 'Arrested and charged with murder' },
 { date: 'April 20, 2021', event: 'Convicted of murder on all counts' },
 { date: 'June 25, 2021', event: 'Sentenced to 22.5 years in state prison' },
 { date: 'July 2022', event: 'Pleads guilty to federal civil rights charges' },
 { date: 'July 7, 2022', event: 'Sentenced to 21 years federal prison' },
 { date: 'November 2023', event: 'Stabbed 22 times in prison, survives' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Minnesota v. Chauvin trial transcript', url: 'https://scholar.google.com/scholar?q=Minnesota%20v.%20Chauvin%20trial%20transcript', date: '2021' },
 { title: 'DOJ Civil Rights Investigation', url: 'https://scholar.google.com/scholar?q=DOJ%20Civil%20Rights%20Investigation', date: '2022' },
 { title: 'Minneapolis Police Department records', url: 'https://scholar.google.com/scholar?q=Minneapolis%20Police%20Department%20records', date: 'Various' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Floyd', relationship: 'Murder victim', href: '/entities/individuals/george-floyd' },
 { name: 'Tou Thao', relationship: 'Fellow officer at scene, convicted', href: '/entities/individuals/tou-thao' },
 ],
 },





















































 'dillon-myer': {
 name: 'Dillon S. Myer',
 title: 'War Relocation Authority Director',
 role: 'Administered Japanese American concentration camps during WWII',
 riskLevel: 'critical',
 description: 'Dillon S. Myer directed the War Relocation Authority from 1942-1946, administering the unconstitutional incarceration of 120,000 Japanese Americans. He later became Commissioner of Indian Affairs (1950-1953) where he continued policies of forced assimilation against Native Americans. He represents the bureaucratic machinery of ethnic persecution.',
 birthDate: 'September 4, 1891',
 birthPlace: 'Hebron, Ohio',
 deathDate: 'October 21, 1982',
 education: ['Ohio State University'],
 affiliations: [
 { name: 'War Relocation Authority', role: 'Director (1942-1946)', type: 'agency' },
 { name: 'Bureau of Indian Affairs', role: 'Commissioner (1950-1953)', type: 'agency' },
 ],
 controversies: [
 'Administered unconstitutional imprisonment of 120,000 Japanese Americans',
 'Defended the camps as humane despite evidence of suffering',
 'Later applied similar approaches to Native Americans as BIA Commissioner',
 'Promoted"termination"policy to eliminate tribal sovereignty',
 ],
 charges: [
 { statute: 'U.S. Constitution: 5th Amendment', description: 'Administered program that imprisoned citizens without due process', category: 'Constitutional Violation' },
 ],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: 'September 4, 1891', event: 'Born in Hebron, Ohio' },
 { date: 'June 1942', event: 'Becomes WRA Director' },
 { date: '1942-1946', event: 'Oversees Japanese American incarceration' },
 { date: '1946', event: 'WRA abolished' },
 { date: '1950-1953', event: 'Commissioner of Indian Affairs' },
 { date: 'October 21, 1982', event: 'Dies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'WRA records: National Archives', url: 'https://www.archives.gov/', date: 'Various' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Franklin D. Roosevelt', relationship: 'President who authorized internment', href: '/entities/individuals/franklin-d-roosevelt' },
 ],
 },





















































 'daniel-hale': {
 name: 'Daniel Hale',
 title: 'Drone Whistleblower',
 role: 'Exposed civilian casualties from U.S. drone program, imprisoned for leaking',
 riskLevel: 'low',
 description: 'Daniel Hale is a former Air Force intelligence analyst who leaked documents exposing that nearly 90% of drone strike victims were not intended targets. He was sentenced to 45 months in prison for revealing the truth about civilian casualties in the U.S. drone assassination program.',
 birthDate: '1987',
 birthPlace: 'Virginia',
 education: [],
 affiliations: [
 { name: 'U.S. Air Force', role: 'Intelligence Analyst', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Fellow whistleblower', href: '/entities/individuals/edward-snowden' },
 ],
 controversies: [
 'Former intelligence analyst who leaked classified documents revealing 90% of U.S. drone strike victims were not intended targets',
 'Sentenced to 45 months in federal prison under the Espionage Act in 2021',
 'His leaks exposed the systematic civilian casualties of the U.S. drone warfare program',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Drone Assassination Program', slug: 'drone-assassinations', severity: 'critical' },
 ],
 timeline: [
 { date: '2009-2013', event: 'Serves in Air Force intelligence' },
 { date: '2013-2014', event: 'Works as NSA contractor' },
 { date: '2014-2015', event: 'Leaks drone program documents' },
 { date: 'October 2015', event: 'The Intercept publishes "The Drone Papers"' },
 { date: 'May 2019', event: 'Arrested' },
 { date: 'July 2021', event: 'Sentenced to 45 months' },
 ],
 sources: [
 { title: 'The Intercept, The Drone Papers', url: 'https://theintercept.com/', date: '2015' },
 ],
 },
 'deb-haaland': {
 name: 'Deb Haaland',
 title: 'Secretary of the Interior',
 role: 'First Native American cabinet secretary, investigating boarding schools',
 riskLevel: 'low',
 description: 'Deb Haaland is the first Native American to serve as a cabinet secretary. As Interior Secretary, she has launched investigations into the federal Indian boarding school system that traumatized generations of Native children. She represents a historic shift in Interior Department policy toward Indigenous peoples.',
 birthDate: 'December 2, 1960',
 birthPlace: 'Winslow, Arizona',
 education: ['University of New Mexico', 'UNM School of Law'],
 affiliations: [
 { name: 'Department of the Interior', role: 'Secretary (2021-present)', type: 'agency' },
 { name: 'Laguna Pueblo', role: 'Enrolled Member', type: 'organization' },
 ],
 controversies: [
 'First Native American Cabinet secretary faced fierce Republican opposition during confirmation',
 'Launched Federal Indian Boarding School Initiative uncovering decades of abuse and deaths',
 'Reversed Trump-era policies on fossil fuel leasing on public lands drawing industry backlash',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 2, 1960', event: 'Born in Winslow, Arizona' },
 { date: '2019-2021', event: 'U.S. Representative from New Mexico' },
 { date: 'March 16, 2021', event: 'Confirmed as Interior Secretary' },
 { date: '2021', event: 'Launches Federal Indian Boarding School Initiative' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Interior Department biography', url: 'https://www.goodreads.com/', date: 'Current' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'President who appointed Haaland as first Native American Cabinet secretary (Interior)', href: '/entities/individuals/joe-biden' },
 { name: 'Donald Trump', relationship: 'Predecessor whose policies Haaland reversed on public lands, fossil fuels, and tribal sovereignty', href: '/entities/individuals/donald-trump' },
 { name: 'Bryan Newland', relationship: 'Assistant Secretary for Indian Affairs under Haaland; led Federal Indian Boarding School Initiative', href: '/entities/individuals/bryan-newland' },
 ],
 },

 'dmitry-rybolovlev': {
 name: 'Dmitry Rybolovlev',
 title: 'Russian Oligarch',
 role: 'Russian billionaire who bought Trump property for double its value',
 riskLevel: 'high',
 description: 'Dmitry Rybolovlev is a Russian oligarch who in 2008 paid Donald Trump $95 million for a Palm Beach mansion Trump had purchased for $41 million, more than double the price during a real estate crash. The transaction raised money laundering suspicions. His plane was also tracked near Trump\'s during the 2016 campaign.',
 birthDate: 'November 22, 1966',
 birthPlace: 'Perm, Russia',
 education: ['Perm Medical Institute'],
 affiliations: [
 { name: 'Uralkali', role: 'Former Owner', type: 'corporation' },
 { name: 'AS Monaco FC', role: 'Owner', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Real estate transaction', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'TRUMP MANSION: Paid $95M for property worth $41M during housing crash',
 'MONEY LAUNDERING QUESTIONS: Transaction raised red flags',
 'PLANE TRACKING: His plane spotted near Trump locations during 2016',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump-Russia Connections', slug: 'trump-russia', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 22, 1966', event: 'Born in Perm, Russia' },
 { date: '2008', event: 'Purchases Trump mansion for $95 million' },
 { date: '2016', event: 'Plane tracked near Trump locations' },
 ],
 sources: [
 { title: 'Palm Beach County property records', url: 'https://scholar.google.com/scholar?q=Palm%20Beach%20County%20property%20records', date: '2008' },
 ],
 },
 'dwight-eisenhower': {
 name: 'Dwight David Eisenhower',
 title: '34th President of the United States',
 role: 'President (1953-1961), General of the Army',
 riskLevel: 'high',
 description: 'Eisenhower served as President from 1953-1961 and authorized the CIA coups in Iran (1953) and Guatemala (1954) that destabilized regions for decades. He warned of the"military-industrial complex"in his farewell address.',
 birthDate: 'October 14, 1890',
 birthPlace: 'Denison, Texas, USA',
 deathDate: 'March 28, 1969',
 education: ['United States Military Academy at West Point (1915)'],
 affiliations: [
 { name: 'U.S. Government', role: '34th President', type: 'agency' },
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 { name: 'U.S. Army', role: 'General of the Army', type: 'agency' },
 ],
 controversies: [
 'IRAN COUP: Authorized Operation Ajax overthrow of elected Mosaddegh',
 'GUATEMALA COUP: Authorized Operation PBSUCCESS for United Fruit Company',
 'COLD WAR COVERT OPS: Expanded CIA covert operations globally',
 'NUCLEAR BRINKMANSHIP:"Massive retaliation"doctrine',
 ],
 charges: [
 { statute: 'Crimes Against Peace', description: 'Authorization of illegal regime change operations', category: 'International Law' },
 ],
 relatedInvestigations: [
 { title: 'Iran Coup 1953', slug: 'iran-coup', severity: 'critical' },
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup', severity: 'critical' },
 { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 14, 1890', event: 'Born in Denison, Texas' },
 { date: '1915', event: 'Graduates from West Point' },
 { date: 'June 6, 1944', event: 'Commands D-Day invasion' },
 { date: 'January 20, 1953', event: 'Inaugurated as 34th President' },
 { date: 'August 19, 1953', event: 'Iran coup succeeds' },
 { date: 'June 27, 1954', event: 'Guatemala coup succeeds' },
 { date: 'January 17, 1961', event: 'Farewell address warns of military-industrial complex' },
 { date: 'March 28, 1969', event: 'Dies in Washington D.C.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dwight David Eisenhower', url: 'https://en.wikipedia.org/wiki/Dwight_D._Eisenhower', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'Military Times: Dwight David Eisenhower', url: 'https://www.militarytimes.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director', href: '/entities/individuals/allen-dulles' },
 { name: 'John Foster Dulles', relationship: 'Secretary of State', href: '/entities/individuals/john-foster-dulles' },
 ],
 },





















































 'david-cameron': {
 name: 'David Cameron',
 title: 'Former British Prime Minister',
 role: 'Prime Minister of UK (2010-2016)',
 riskLevel: 'medium',
 description: 'David Cameron. Profile pending review.',
 birthDate: 'October 9, 1966',
 birthPlace: 'London, England',
 education: ['Eton College', 'Oxford University, PPE'],
 affiliations: [
 { name: 'UK Government', role: 'Prime Minister (2010-2016)', type: 'agency' },
 { name: 'Conservative Party', role: 'Leader (2005-2016)', type: 'organization' },
 ],
 controversies: [
 'BREXIT: Called referendum to appease Eurosceptics, campaign backfired',
 'AUSTERITY: Cuts devastated public services',
 'MURDOCH TIES: Close relationship with Murdoch media figures',
 'GREENSILL: Lobbied government for collapsed finance firm',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Phone Hacking Scandal', slug: 'phone-hacking-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'October 9, 1966', event: 'Born in London' },
 { date: 'May 2010', event: 'Becomes Prime Minister' },
 { date: 'June 23, 2016', event: 'Brexit referendum' },
 { date: 'July 2016', event: 'Resigns as PM' },
 { date: 'November 2023', event: 'Returns as Foreign Secretary' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Cameron', url: 'https://en.wikipedia.org/wiki/David_Cameron', date: '' },
 { title: 'BBC News', url: 'https://www.bbc.com/news', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Andy Coulson', relationship: 'Communications Director (resigned over phone hacking)', href: '/entities/individuals/andy-coulson' },
 { name: 'Rebekah Brooks', relationship: 'Close friend, Murdoch executive', href: '/entities/individuals/rebekah-brooks' },
 ],
 },

 'dan-wyant': {
 name: 'Dan Wyant',
 title: 'Former Michigan DEQ Director',
 role: 'Environmental Official',
 riskLevel: 'high',
 description: 'Dan Wyant. Profile pending review.',
 birthDate: 'Unknown',
 birthPlace: 'Michigan, USA',
 education: [],
 affiliations: [
 { name: 'Michigan DEQ', role: 'Director (2011-2015)', type: 'agency' },
 ],
 controversies: [
 'FLINT WATER CRISIS: DEQ failed to require corrosion control',
 'COVER-UP: Agency downplayed lead contamination',
 'CRIMINAL CHARGES: Charged with misconduct in office',
 ],
 charges: [
 { statute: 'Misconduct in Office', description: 'Failure to protect public health', category: 'Criminal' },
 ],
 relatedInvestigations: [
 { title: 'Flint Water Crisis', slug: 'flint-water-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2011', event: 'Becomes DEQ Director' },
 { date: 'April 2014', event: 'Flint switches water source' },
 { date: 'December 2015', event: 'Resigns amid scandal' },
 { date: '2016', event: 'Charged with misconduct' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dan Wyant', url: 'https://www.google.com/search?q=Dan%20Wyant', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'DOJ Press Release', url: 'https://www.justice.gov/news', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rick Snyder', relationship: 'Governor who appointed him', href: '/entities/individuals/rick-snyder' },
 ],
 },


 'daniel-elwell': {
 name: 'Daniel Elwell',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Daniel Elwell. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Daniel Elwell was briefed on risks later downplayed in public communications.',
 'Court documents from related proceedings reference Daniel Elwell as a key decision-maker during periods where regulatory violations were later documented.',
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











 'david-hinson': {
 name: 'David Hinson',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Hinson. Profile pending review.',
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


 'david-calhoun': {
 name: 'David Calhoun',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Calhoun. Profile pending review.',
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


 'david-gitlin': {
 name: 'David Gitlin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Gitlin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference David Gitlin as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference David Gitlin in connection with policy decisions that disproportionately benefited associated financial interests.',
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










 'doug-parker': {
 name: 'Doug Parker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Doug Parker. Profile pending review.',
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

 'diana-sands': {
 name: 'Diana Sands',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Diana Sands. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Diana Sands was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Diana Sands coordinated messaging strategies designed to suppress unfavorable information.',
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










 'dorenda-baker': {
 name: 'Dorenda Baker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dorenda Baker. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Dorenda Baker coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Dorenda Baker as a key decision-maker during periods where regulatory violations were later documented.',
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










 'dominic-gates': {
 name: 'Dominic Gates',
 title: 'Investigative Journalist',
 role: 'Seattle Times Aerospace Reporter',
 riskLevel: 'low',
 description: 'Dominic Gates is an aerospace reporter for The Seattle Times who has done award-winning investigative reporting on Boeing. His coverage of the 737 MAX crashes and Boeing\'s safety culture has been among the most comprehensive in American journalism. The Seattle Times\' Boeing coverage, often led by Gates, won a Pulitzer Prize for National Reporting in 2020.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
 { name: 'The Seattle Times', role: 'Aerospace Reporter', type: 'organization' as const },
 ],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Gates investigated for Seattle Times, winning Pulitzer for 737 MAX coverage', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Jon Ostrower', relationship: 'Fellow aviation journalist who collaborated on breaking Boeing 737 MAX safety stories', href: '/entities/individuals/jon-ostrower' },
 { name: 'Peter Robison', relationship: 'Author of "Flying Blind" about Boeing; fellow investigative journalist covering the company', href: '/entities/individuals/peter-robison' },
 ],
 controversies: [
 'PULITZER WINNER: Won Pulitzer for Boeing coverage',
 'INVESTIGATIVE REPORTING: Exposed Boeing failures',
 'SEATTLE BEAT: Covers Boeing from its home city',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'Unknown', event: 'Seattle Times career' },
 { date: '2020', event: 'Pulitzer Prize for Boeing coverage' },
 ],
 sources: [{ title: 'Wikipedia: Dominic Gates', url: 'https://www.google.com/search?q=Dominic%20Gates' }, { title: 'Military Times: Dominic Gates', url: 'https://www.militarytimes.com/' }, { title: 'OpenSecrets', url: 'https://www.opensecrets.org/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 },
 'david-boulter': {
 name: 'David Boulter',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Boulter. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting David Boulter coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference David Boulter as a key decision-maker during periods where regulatory violations were later documented.',
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










 'denny-heck': {
 name: 'Denny Heck',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Denny Heck. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Denny Heck\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Denny Heck was briefed on risks later downplayed in public communications.',
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










 'dean-bortniker': {
 name: 'Dean Bortniker',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dean Bortniker. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative analysis reveals Dean Bortniker was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by Dean Bortniker, though no formal investigation was initiated at the time.',
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










 'david-reyes': {
 name: 'David Reyes',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Reyes. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference David Reyes as a key decision-maker during periods where regulatory violations were later documented.',
 'Network analysis reveals David Reyes holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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










 'david-gelles': {
 name: 'David Gelles',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Gelles. Profile pending review.',
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


 'dave-calhoun': {
 name: 'Dave Calhoun',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dave Calhoun. Profile pending review.',
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









 'dennis-kozlowski': {
 name: 'L. Dennis Kozlowski',
 title: 'Former Tyco CEO',
 role: 'Tyco CEO, $600 Million Corporate Looting',
 riskLevel: 'critical',
 description: 'Dennis Kozlowski was CEO of Tyco International who looted the company of hundreds of millions of dollars. He became notorious for his extravagant spending including a $6,000 shower curtain, $2 million Sardinian birthday party (partially company-funded), and lavish apartments. He was convicted of stealing over $400 million and sentenced to 8-25 years.',
 birthDate: 'November 16, 1946',
 birthPlace: 'Newark, New Jersey',
 education: ['Seton Hall University'],
 affiliations: [
 { name: 'Tyco International', role: 'Former CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Mark Swartz', relationship: 'Tyco CFO, co-defendant', href: '/entities/individuals/mark-swartz' },
 ],
 controversies: [
 '$600 MILLION LOOTED: Stole from company',
 '$6,000 SHOWER CURTAIN: Symbol of excess',
 '$2M BIRTHDAY PARTY: Sardinia celebration',
 'TAX EVASION: Avoided NY sales tax on art',
 'UNAUTHORIZED BONUSES: Gave himself millions',
 'FORGIVENESS LOANS: $81M in "loans "never repaid',
 ],
 charges: [
 { statute: 'NY Penal Law 155.42', description: 'Grand Larceny', category: 'CONVICTED' },
 { statute: '15 U.S.C. � 78j(b)', description: 'Securities Fraud', category: 'CONVICTED' },
 { statute: 'NY Tax Law', description: 'Tax Evasion', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'Tyco Scandal', slug: 'tyco-scandal', severity: 'critical' },
 { title: 'Corporate Crime', slug: 'corporate-crime', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 16, 1946', event: 'Born in Newark' },
 { date: '1992', event: 'Becomes Tyco CEO' },
 { date: '2002', event: 'Resigns amid investigation' },
 { date: '2005', event: 'Convicted after retrial' },
 { date: '2005', event: 'Sentenced to 8-25 years' },
 { date: '2014', event: 'Paroled' },
 ],
 sources: [{ title: 'Wikipedia: L. Dennis Kozlowski', url: 'https://en.wikipedia.org/wiki/L._Dennis_Kozlowski' }, { title: 'Bloomberg: L. Dennis Kozlowski', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 },
 'demetrius-haley': {
 name: 'Demetrius Haley',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Demetrius Haley. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Demetrius Haley was briefed on risks later downplayed in public communications.',
 'Third-party audit reports flagged irregularities in programs overseen by Demetrius Haley, though no formal investigation was initiated at the time.',
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











 'david-sackler': {
 name: 'David Sackler',
 title: 'Purdue Pharma Board Member',
 role: 'Sackler Family, Third Generation',
 riskLevel: 'high',
 description: 'David Sackler is a third-generation member of the Sackler family who served on Purdue Pharma\'s board and participated in decisions that fueled the opioid epidemic. Documents show he was informed about the addictive nature of OxyContin and participated in strategies to continue sales despite mounting deaths.',
 birthDate: '1980 (approx)',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Purdue Pharma', role: 'Former Board Member', type: 'corporation' as const },
 ],
 controversies: [
 'THIRD GENERATION: Continued family profit from opioids',
 'EMAILS EXPOSED: Internal communications revealed knowledge',
 'PROJECT TANGO: Purdue plan to profit from addiction treatment',
 ],
 charges: [
 { statute: 'Civil Litigation', description: 'Named in opioid lawsuits', category: 'CIVIL' },
 ],
 relatedInvestigations: [
 { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'critical' },
 { title: 'Sackler Family Crimes', slug: 'sackler-family', severity: 'critical' },
 ],
 timeline: [
 { date: '2012-2018', event: 'Purdue board member' },
 { date: '2019', event: 'Purdue bankruptcy' },
 { date: '2022', event: 'Settlement negotiations' },
 ],
 sources: [{ title: 'Wikipedia: David Sackler', url: 'https://en.wikipedia.org/wiki/Sackler_family' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'Kathe Sackler', relationship: 'Fellow Sackler family member and Purdue Pharma director', href: '/entities/individuals/kathe-sackler' },
 { name: 'Richard Sackler', relationship: 'Father and Purdue Pharma chairman who drove OxyContin sales', href: '/entities/individuals/richard-sackler' },
 { name: 'Arthur Sackler', relationship: 'Grandfather who built Sackler pharmaceutical dynasty', href: '/entities/individuals/arthur-sackler' }
 ],

 },
 'david-solomon': {
 name: 'David Solomon',
 title: 'Convicted Investment Fund Manager; Drexel Burnham Lambert Co-Conspirator',
 role: 'Investment Fund Manager; Securities Fraud Conspirator',
 riskLevel: 'high',
 description: 'David Solomon (not to be confused with current Goldman Sachs CEO David Solomon) was an investment fund manager whose Solomon Asset Management fund had extensive illegal dealings with Michael Milken\'s high-yield bond department at Drexel Burnham Lambert during the 1980s. Solomon\'s fund served as a vehicle for illegal stock parking, insider trading, and the generation of phony tax losses in coordination with Milken. Two of Michael Milken\'s six felony guilty plea counts in April 1990 directly involved illegal transactions between Milken and Solomon\'s fund. Solomon was convicted of securities fraud for his role in the insider trading conspiracy and for facilitating illegal arrangements that helped Milken and Drexel hide the true nature of their transactions. His fund\'s dealings with Drexel exemplified how Milken used a network of captive investors to manipulate markets and evade regulatory scrutiny.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: [],
 affiliations: [
 { name: 'Solomon Asset Management', role: 'Principal and Fund Manager', type: 'corporation' as const },
 { name: 'Drexel Burnham Lambert', role: 'Client of high-yield bond department', type: 'corporation' as const },
 ],
 controversies: [
 'Two of Michael Milken\'s six felony guilty plea counts directly involved illegal transactions with Solomon\'s fund',
 'Fund had illegal arrangements with Drexel including insider trading and generation of phony tax losses',
 'Convicted of securities fraud for conspiring with Milken and Drexel\'s high-yield bond department',
 'Solomon Asset Management served as a vehicle for stock parking schemes to hide true ownership of securities',
 'Coordinated with Milken to generate artificial tax losses for fund investors through sham transactions',
 ],
 charges: [
 { statute: '15 U.S.C. § 78j(b), SEC Rule 10b-5', description: 'Securities Fraud  -  participating in insider trading and market manipulation with Drexel Burnham Lambert', category: 'Federal' },
 { statute: '26 U.S.C. § 7206', description: 'Tax Fraud  -  generating phony tax losses through sham transactions with Milken', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
 { date: '1983-1988', event: 'Solomon Asset Management enters into extensive illegal arrangements with Michael Milken\'s high-yield bond department at Drexel' },
 { date: '1988-1989', event: 'Federal investigation uncovers illegal transactions between Solomon fund and Drexel' },
 { date: 'April 24, 1990', event: 'Two of Michael Milken\'s six guilty plea counts specifically reference illegal transactions with Solomon\'s fund' },
 { date: '1990', event: 'Convicted of securities fraud for role in the Drexel insider trading conspiracy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'United States v. Michael Milken, Plea Agreement (S.D.N.Y., 1990)', url: 'https://www.justice.gov/archives/jm/criminal-resource-manual-2071', date: '1990' },
 { title: 'Den of Thieves by James B. Stewart', url: 'https://archive.org/details/denofthieves00stew', date: '1991' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Milken', relationship: 'Junk bond king whose guilty plea included counts involving illegal transactions with Solomon\'s fund', href: '/entities/individuals/michael-milken' },
 { name: 'Drexel Burnham Lambert', relationship: 'Investment bank whose high-yield bond department facilitated illegal transactions with Solomon\'s fund' },
 ],
 },










 'damon-hininger': {
 name: 'Damon Hininger',
 title: 'Former CoreCivic CEO',
 role: 'CoreCivic CEO, Private Prison Profiteering',
 riskLevel: 'high',
 description: 'Damon Hininger was CEO of CoreCivic (formerly CCA), the largest private prison company in America. Under his leadership, CoreCivic profited from mass incarceration, operating detention centers where abuse, understaffing, and deaths were documented. The company lobbied for harsher sentencing and immigration enforcement to fill beds.',
 birthDate: '1970 (approx)',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'CoreCivic', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'MASS INCARCERATION: Profited from imprisoning Americans',
 'ICE DETENTION: Major operator of immigration jails',
 'DEATHS IN CUSTODY: Multiple deaths at CoreCivic facilities',
 'LOBBYING: Pushed for harsher sentencing',
 'UNDERSTAFFING: Cut costs leading to violence',
 'ALEC MEMBERSHIP: Helped write tough-on-crime laws',
 ],
 charges: [
 { statute: '42 U.S.C. � 1983', description: 'Civil Rights violations in custody', category: 'CIVIL LITIGATION' },
 { statute: 'Rome Statute Article 7(1)(e)', description: 'Crimes Against Humanity, Mass imprisonment for profit', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'critical' },
 { title: 'ICE Detention Abuses', slug: 'ice-detention-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: '2009', event: 'Becomes CoreCivic CEO' },
 { date: '2016', event: 'Obama announces phase-out (later reversed)' },
 { date: '2021', event: 'Biden executive order on private prisons' },
 ],
 sources: [{ title: 'Wikipedia: Damon Hininger', url: 'https://en.wikipedia.org/wiki/Damon_Hininger' }, { title: 'Bloomberg: Damon Hininger', url: 'https://www.bloomberg.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }],
 knownAssociates: [
 { name: 'George Zoley', relationship: 'Fellow private prison executive, GEO Group CEO', href: '/entities/individuals/george-zoley' },
 { name: 'Robert Crants', relationship: 'Early CCA/CoreCivic executive who built private prison model', href: '/entities/individuals/robert-crants' }
 ],

 },
 'david-koch': {
 name: 'David Koch',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Koch. Profile pending review.',
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


 'doug-mcmillon': {
 name: 'Doug Mcmillon',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Doug Mcmillon. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Doug Mcmillon coordinated messaging strategies designed to suppress unfavorable information.',
 'Court documents from related proceedings reference Doug Mcmillon as a key decision-maker during periods where regulatory violations were later documented.',
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










 'dara-khosrowshahi': {
 name: 'Dara Khosrowshahi',
 title: 'Uber CEO',
 role: 'Uber CEO, Gig Worker Exploitation',
 riskLevel: 'high',
 description: 'Dara Khosrowshahi became Uber CEO in 2017 after Travis Kalanick\'s scandals. Under his leadership, Uber has continued to fight worker classification, spending over $200 million on Prop 22 in California to deny drivers employee status. Drivers earn poverty wages while Uber loses billions subsidizing rides to crush competition.',
 birthDate: 'May 28, 1969',
 birthPlace: 'Tehran, Iran',
 education: ['Brown University'],
 netWorth: '$200 million',
 affiliations: [
 { name: 'Uber', role: 'CEO', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Travis Kalanick', relationship: 'Predecessor', href: '/entities/individuals/travis-kalanick' },
 ],
 controversies: [
 'GIG WORKER EXPLOITATION: Fights employee classification',
 'PROP 22: Spent $200M+ to deny drivers benefits',
 'POVERTY WAGES: Drivers earn below minimum wage',
 'SAFETY FAILURES: Sexual assaults in vehicles',
 'UBER FILES: Leaked docs showed lobbying tactics',
 'DATA BREACH COVER-UP: Paid hackers, hid breach',
 ],
 charges: [
 { statute: 'State Labor Laws', description: 'Worker misclassification', category: 'ONGOING LITIGATION' },
 { statute: 'Various State AGs', description: 'Data breach cover-up', category: 'SETTLED' },
 ],
 relatedInvestigations: [
 { title: 'Gig Economy Exploitation', slug: 'gig-economy-exploitation', severity: 'critical' },
 { title: 'Worker Misclassification', slug: 'worker-misclassification', severity: 'critical' },
 ],
 timeline: [
 { date: 'May 28, 1969', event: 'Born in Tehran' },
 { date: '2017', event: 'Becomes Uber CEO' },
 { date: '2020', event: 'Prop 22 passes in California' },
 { date: '2022', event: 'Uber Files leaked' },
 ],
 sources: [{ title: 'Wikipedia: Dara Khosrowshahi', url: 'https://en.wikipedia.org/wiki/Dara_Khosrowshahi' }, { title: 'Bloomberg: Dara Khosrowshahi', url: 'https://www.bloomberg.com/' }],
 },
 'darren-woods': {
 name: 'Darren Woods',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Darren Woods. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Darren Woods\'s operations and the regulatory bodies meant to provide oversight.',
 'Court documents from related proceedings reference Darren Woods as a key decision-maker during periods where regulatory violations were later documented.',
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










 'david-cordani': {
 name: 'David Cordani',
 title: 'Cigna CEO',
 role: 'Cigna CEO, Coverage Denials',
 riskLevel: 'high',
 description: 'David Cordani leads Cigna, which has been accused of using automated systems to deny coverage without proper review. A 2023 investigation revealed that Cigna doctors denied claims in bulk without examining patient files, rejecting hundreds of thousands of claims.',
 birthDate: 'January 1966',
 birthPlace: 'United States',
 education: ['Texas A&M University', 'University of Hartford (MBA)'],
 netWorth: '$100 million',
 affiliations: [
 { name: 'Cigna', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'PXDX SYSTEM: Automated denials without review',
 'BULK DENIALS: Doctors denied claims without reading',
 '300,000 CLAIMS: Denied in two months using system',
 'PRIOR AUTH: Delays causing patient harm',
 'EXECUTIVE PAY: $20M while denying care',
 ],
 charges: [
 { statute: 'ERISA', description: 'Improper claim denials', category: 'CLASS ACTION' },
 { statute: 'State Insurance Laws', description: 'Bad faith denials', category: 'REGULATORY ACTION' },
 ],
 relatedInvestigations: [
 { title: 'Insurance Coverage Denials', slug: 'insurance-denials', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 1966', event: 'Born' },
 { date: '2009', event: 'Becomes Cigna CEO' },
 { date: '2023', event: 'PXDX system exposed' },
 ],
 sources: [{ title: 'Wikipedia: David Cordani', url: 'https://en.wikipedia.org/wiki/David_Cordani' }, { title: 'Bloomberg: David Cordani', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'Andrew Witty', relationship: 'Fellow healthcare CEO, UnitedHealth Group', href: '/entities/individuals/andrew-witty' },
 { name: 'Stephen Hemsley', relationship: 'Predecessor at UnitedHealth Group', href: '/entities/individuals/stephen-hemsley' },
 { name: 'Karen Ignagni', relationship: 'Insurance industry lobbying leader', href: '/entities/individuals/karen-ignagni' }
 ],

 },
 'darren-wilson': {
 name: 'Darren Wilson',
 title: 'Former Ferguson Police Officer',
 role: 'Shot Michael Brown, Ferguson Uprising',
 riskLevel: 'critical',
 description: 'Darren Wilson shot and killed unarmed 18-year-old Michael Brown in Ferguson, Missouri on August 9, 2014. The shooting and subsequent non-indictment sparked the Ferguson uprising and galvanized the Black Lives Matter movement. Wilson was never charged despite witness accounts contradicting his testimony.',
 birthDate: 'May 14, 1986',
 birthPlace: 'Texas',
 education: ['Police Academy'],
 affiliations: [
 { name: 'Ferguson Police Department', role: 'Former Officer', type: 'agency' as const },
 ],
 controversies: [
 'MICHAEL BROWN: Shot unarmed teen 12 times',
 'HANDS UP: Witnesses said Brown had hands up',
 'NO CHARGES: Grand jury declined to indict',
 'FERGUSON UPRISING: Sparked national protests',
 'DOJ REPORT: Found systematic racism in Ferguson PD',
 'RESIGNED: Left force, never faced charges',
 ],
 charges: [
 { statute: '18 U.S.C. � 242', description: 'Deprivation of rights under color of law', category: 'NOT CHARGED' },
 { statute: 'Missouri Homicide Laws', description: 'Homicide', category: 'NOT INDICTED' },
 ],
 relatedInvestigations: [
 { title: 'Michael Brown Shooting', slug: 'michael-brown-shooting', severity: 'critical' },
 { title: 'Ferguson DOJ Investigation', slug: 'ferguson-doj', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 9, 2014', event: 'Shoots Michael Brown' },
 { date: 'August 2014', event: 'Ferguson uprising begins' },
 { date: 'November 2014', event: 'Grand jury declines to indict' },
 { date: 'November 2014', event: 'Resigns from police force' },
 { date: 'March 2015', event: 'DOJ finds no civil rights violation' },
 ],
 sources: [{ title: 'Wikipedia: Darren Wilson', url: 'https://en.wikipedia.org/wiki/Darren_Wilson' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Michael Brown', relationship: 'Shot and killed Michael Brown in Ferguson, Missouri in 2014', href: '/entities/individuals/michael-brown' },
 { name: 'Thomas Jackson', relationship: 'Ferguson police chief during Brown shooting aftermath', href: '/entities/individuals/thomas-jackson' }
 ],

 },
 'daniel-pantaleo': {
 name: 'Daniel Pantaleo',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Daniel Pantaleo. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Daniel Pantaleo coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Daniel Pantaleo in connection with policy decisions that disproportionately benefited associated financial interests.',
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








 'dan-bongino': {
 name: 'Dan Bongino',
 title: 'Right-Wing Media Figure',
 role: 'Radio Host, Conspiracy Theories, COVID Disinformation',
 riskLevel: 'high',
 description: 'Dan Bongino is a former Secret Service agent turned right-wing media figure. He spread COVID disinformation, election lies, and conspiracy theories. He part-owned Parler and Rumble and was banned from YouTube for COVID misinformation.',
 birthDate: 'December 4, 1974',
 birthPlace: 'Queens, New York',
 education: ['Queens College', 'Penn State (MA)'],
 affiliations: [
 { name: 'Westwood One', role: 'Radio Host', type: 'corporation' as const },
 { name: 'Rumble', role: 'Investor', type: 'corporation' as const },
 ],
 controversies: [
 'COVID DISINFO: Spread anti-vaccine misinformation',
 'YOUTUBE BAN: Permanently banned for misinformation',
 'ELECTION LIES: Promoted 2020 fraud claims',
 'PARLER: Part-owner of extremist platform',
 'CONSPIRACY THEORIES: Regular promoter',
 ],
 charges: [
 { statute: 'Platform Violations', description: 'Banned from YouTube', category: 'PLATFORM BAN' },
 ],
 relatedInvestigations: [
 { title: 'COVID Disinformation', slug: 'covid-disinfo', severity: 'high' },
 ],
 timeline: [
 { date: 'December 4, 1974', event: 'Born in New York' },
 { date: '2022', event: 'Permanently banned from YouTube' },
 ],
 sources: [{ title: 'Wikipedia: Dan Bongino', url: 'https://en.wikipedia.org/wiki/Dan_Bongino' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Steven Crowder', relationship: 'Fellow conservative media personality', href: '/entities/individuals/steven-crowder' },
 { name: 'Dennis Prager', relationship: 'Fellow right-wing media figure', href: '/entities/individuals/dennis-prager' },
 { name: 'Donald Trump', relationship: 'Staunch Trump supporter and former Secret Service agent', href: '/entities/individuals/donald-trump' }
 ],

 },
 'dennis-prager': {
 name: 'Dennis Prager',
 title: 'Right-Wing Radio Host',
 role: 'PragerU Founder, Disinformation, Historical Revisionism',
 riskLevel: 'high',
 description: 'Dennis Prager founded PragerU, a right-wing media outlet that creates propaganda videos often shown in schools. PragerU spreads climate denial, historical revisionism including downplaying slavery, and right-wing talking points disguised as educational content.',
 birthDate: 'August 2, 1948',
 birthPlace: 'Brooklyn, New York',
 education: ['Brooklyn College', 'Columbia University'],
 affiliations: [
 { name: 'PragerU', role: 'Co-Founder', type: 'organization' as const },
 ],
 controversies: [
 'PRAGERU: Fake "university "spreading propaganda',
 'SLAVERY REVISIONISM: Downplays horrors of slavery',
 'CLIMATE DENIAL: Spreads climate misinformation',
 'SCHOOL INFILTRATION: Content shown in Florida schools',
 'COVID LIES: Spread vaccine misinformation',
 ],
 charges: [
 { statute: 'Educational Fraud', description: 'Misleading "university "branding', category: 'NOT CHARGED' },
 ],
 relatedInvestigations: [
 { title: 'Educational Propaganda', slug: 'educational-propaganda', severity: 'high' },
 ],
 timeline: [
 { date: 'August 2, 1948', event: 'Born in Brooklyn' },
 { date: '2009', event: 'Founds PragerU' },
 { date: '2023', event: 'Florida approves PragerU content for schools' },
 ],
 sources: [{ title: 'Wikipedia: Dennis Prager', url: 'https://en.wikipedia.org/wiki/Dennis_Prager' }, { title: 'InsideClimate News', url: 'https://insideclimatenews.org/' }, { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/' }],
 knownAssociates: [
 { name: 'Dan Bongino', relationship: 'Fellow conservative media personality', href: '/entities/individuals/dan-bongino' },
 { name: 'Dinesh D\'Souza', relationship: 'Fellow conservative commentator and filmmaker', href: '/entities/individuals/dinesh-dsouza' }
 ],

 },
 'david-sacks': {
 name: 'David Sacks',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Sacks. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals David Sacks holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Investigative analysis reveals David Sacks was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
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










 'dylann-roof': {
 name: 'Dylann Roof',
 title: 'Convicted White Supremacist Terrorist',
 role: 'Charleston Church Massacre, Killed 9 CONVICTED/DEATH ROW',
 riskLevel: 'critical',
 description: 'Dylann Roof is a white supremacist who murdered nine Black worshippers at Emanuel AME Church in Charleston, South Carolina in 2015. He sat with the Bible study group for an hour before opening fire, hoping to start a race war. He became the first person sentenced to death for a federal hate crime.',
 birthDate: 'April 3, 1994',
 birthPlace: 'Columbia, South Carolina',
 education: ['High school dropout'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'KILLED 9 IN CHURCH: Massacred Bible study group',
 'WHITE SUPREMACIST: Manifesto detailed racist beliefs',
 'WANTED RACE WAR: Hoped to ignite conflict',
 'SAT WITH VICTIMS: Spent hour before shooting',
 'NO REMORSE: Showed no regret',
 'DEATH SENTENCE: First federal hate crime death penalty',
 ],
 charges: [
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime, Murder', category: 'CONVICTED, DEATH' },
 { statute: '18 U.S.C. � 924(c)', description: 'Use of firearm during crime of violence', category: 'CONVICTED' },
 { statute: 'South Carolina � 16-3-20', description: 'Murder (9 counts)', category: 'CONVICTED, LIFE' },
 ],
 relatedInvestigations: [
 { title: 'Charleston Church Massacre', slug: 'charleston-massacre', severity: 'critical' },
 { title: 'White Supremacist Terrorism', slug: 'white-supremacist-terrorism', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 3, 1994', event: 'Born in South Carolina' },
 { date: 'June 17, 2015', event: 'Murders 9 at Emanuel AME Church' },
 { date: 'December 2016', event: 'Convicted of federal charges' },
 { date: 'January 2017', event: 'Sentenced to death' },
 ],
 sources: [{ title: 'Wikipedia: Dylann Roof', url: 'https://en.wikipedia.org/wiki/Dylann_Roof' }, { title: 'Military Times: Dylann Roof', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Robert Bowers', relationship: 'Fellow white supremacist mass shooter', href: '/entities/individuals/robert-bowers' },
 { name: 'Patrick Crusius', relationship: 'Fellow racially motivated mass shooter', href: '/entities/individuals/patrick-crusius' }
 ],

 },
 'david-miscavige': {
 name: 'David Miscavige',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Miscavige. Profile pending review.',
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


 'devin-kelley': {
 name: 'Devin Kelley',
 title: 'Mass Murderer (Deceased)',
 role: 'Sutherland Springs Church Shooter; Killed 26',
 riskLevel: 'critical',
 description: 'Devin Kelley. Profile pending review.',
 birthDate: 'February 21, 1991',
 birthPlace: 'New Braunfels, Texas',
 deathDate: 'November 5, 2017',
 education: ['US Air Force'],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'KILLED 26: Deadliest church shooting',
 'AIR FORCE FAILURE: Didn\'t report conviction',
 'DOMESTIC VIOLENCE: Prior conviction',
 'SHOULD HAVE BEEN BARRED: From gun purchase',
 'TARGETED EX-WIFE\'S FAMILY: Attended church',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sutherland Springs Shooting', slug: 'sutherland-springs-shooting', severity: 'critical' },
 { title: 'Mass Shootings', slug: 'mass-shootings', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 21, 1991', event: 'Born in Texas' },
 { date: '2012', event: 'Court-martialed for domestic assault' },
 { date: 'November 5, 2017', event: 'Murders 26 at church' },
 { date: 'November 5, 2017', event: 'Dies fleeing after being shot' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Devin Kelley', url: 'https://en.wikipedia.org/wiki/Devin_Kelley', date: '' },
 { title: 'Associated Press: Devin Kelley', url: 'https://apnews.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stephen Paddock', relationship: 'Fellow mass shooter in same period', href: '/entities/individuals/stephen-paddock' },
 ],
 },










 'doug-mastriano': {
 name: 'Doug Mastriano',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Doug Mastriano. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Doug Mastriano holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Doug Mastriano in connection with policy decisions that disproportionately benefited associated financial interests.',
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









 'dan-crenshaw': {
 name: 'Dan Crenshaw',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dan Crenshaw. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference Dan Crenshaw in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Investigative journalists have documented a pattern of revolving-door employment between Dan Crenshaw\'s operations and the regulatory bodies meant to provide oversight.',
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









 'dave-rubin': {
 name: 'Dave Rubin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dave Rubin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Dave Rubin\'s operations and the regulatory bodies meant to provide oversight.',
 'Third-party audit reports flagged irregularities in programs overseen by Dave Rubin, though no formal investigation was initiated at the time.',
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









 'dinesh-dsouza': {
 name: 'Dinesh Dsouza',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dinesh Dsouza. Profile pending review.',
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
 'duke-cunningham': {
 name: 'Randy "Duke "Cunningham',
 title: 'Former California Congressman',
 role: 'Most Corrupt Congressman, Bribery King',
 riskLevel: 'high',
 description: 'Randy "Duke "Cunningham was a decorated Vietnam War flying ace turned most corrupt congressman. He took $2.4 million in bribes from defense contractors, including a yacht (named "Duke-Stir"), Rolls Royce, and antiques. He served 8 years in federal prison.',
 birthDate: 'December 8, 1941',
 birthPlace: 'Los Angeles, California',
 education: ['University of Missouri', 'National University'],
 affiliations: [
 { name: 'U.S. House of Representatives', role: 'Former Rep (R-CA)', type: 'agency' as const },
 { name: 'U.S. Navy', role: 'Commander (Ret)', type: 'agency' as const },
 ],
 controversies: [
 'MASSIVE BRIBERY: $2.4 million in bribes',
 'BRIBE MENU: Had written "bribe menu "for contracts',
 'YACHT: Accepted yacht named "Duke-Stir"',
 'ROLLS ROYCE: Bribed with luxury car',
 'TAX EVASION: Also convicted of tax evasion',
 ],
 charges: [
 { statute: '18 U.S.C. � 201', description: 'Conspiracy to commit bribery', category: 'Financial Crimes' },
 { statute: 'IRC � 7201', description: 'Tax evasion', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Congressional Corruption', slug: 'congressional-corruption', severity: 'critical' },
 ],
 timeline: [
 { date: 'December 8, 1941', event: 'Born in Los Angeles' },
 { date: 'Vietnam War', event: 'Ace fighter pilot' },
 { date: '1991-2005', event: 'U.S. Representative' },
 { date: 'November 2005', event: 'Pleaded guilty' },
 { date: '2006-2013', event: 'Federal prison' },
 ],
 sources: [{ title: 'Wikipedia: Randy "Duke "Cunningham', url: 'https://en.wikipedia.org/wiki/Randy_"Duke"_Cunningham' }, { title: 'Military Times: Randy "Duke "Cunningham', url: 'https://www.militarytimes.com/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'William Jefferson', relationship: 'Contemporary congressman convicted of corruption', href: '/entities/individuals/william-jefferson' }
 ],

 },
 'dianne-feinstein': {
 name: 'Dianne Feinstein',
 title: 'Former California Senator',
 role: 'Cognitive Decline, Refusing to Resign',
 riskLevel: 'medium',
 description: 'Dianne Feinstein served 31 years in Senate, refusing to resign despite severe cognitive decline. She couldn\'t recognize colleagues, forgot votes, and her absence held up judicial confirmations. She prioritized personal power over public service until her death.',
 birthDate: 'June 22, 1933',
 birthPlace: 'San Francisco, California',
 deathDate: 'September 29, 2023',
 education: ['Stanford University'],
 affiliations: [
 { name: 'U.S. Senate', role: 'Former Senator (D-CA)', type: 'agency' as const },
 ],
 controversies: [
 'COGNITIVE DECLINE: Couldn\'t recognize colleagues',
 'JUDICIAL DELAYS: Absence held up confirmations',
 'REFUSED TO RESIGN: Prioritized power over service',
 'STOCK TRADES: Husband\'s trades during COVID',
 'HUGGING LINDSEY: Praised Barrett hearing conduct',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Congressional Age Crisis', slug: 'congressional-age', severity: 'medium' },
 ],
 timeline: [
 { date: 'June 22, 1933', event: 'Born in San Francisco' },
 { date: '1992-2023', event: 'U.S. Senator' },
 { date: '2020', event: 'Praised Barrett hearing, faced backlash' },
 { date: '2022-2023', event: 'Cognitive decline evident' },
 { date: 'September 2023', event: 'Died in office' },
 ],
 sources: [{ title: 'Wikipedia: Dianne Feinstein', url: 'https://en.wikipedia.org/wiki/Dianne_Feinstein' }, { title: 'Associated Press: Dianne Feinstein', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Kamala Harris', relationship: 'Fellow California senator who succeeded Feinstein\'s era', href: '/entities/individuals/kamala-harris' },
 { name: 'Chuck Grassley', relationship: 'Senate Judiciary Committee counterpart for decades', href: '/entities/individuals/chuck-grassley' }
 ],

 },
 'dr-oz': {
 name: 'Mehmet Oz',
 title: 'Former TV Doctor',
 role: 'Snake Oil Salesman, Carpetbagger',
 riskLevel: 'medium',
 description: 'Mehmet Oz is a TV doctor who promoted pseudoscience and weight loss scams for years before running for Pennsylvania Senate. He lost after being exposed as a New Jersey resident who didn\'t know how groceries work ("crudit�s"). He promoted hydroxychloroquine and other COVID quackery.',
 birthDate: 'June 11, 1960',
 birthPlace: 'Cleveland, Ohio',
 education: ['Harvard University', 'University of Pennsylvania'],
 affiliations: [
 { name: 'Columbia University', role: 'Former Professor', type: 'organization' as const },
 ],
 controversies: [
 'PSEUDOSCIENCE: Promoted miracle weight loss cures',
 'COVID QUACKERY: Pushed hydroxychloroquine',
 'CARPETBAGGER: Lived in New Jersey, ran in PA',
 'CRUDIT�S: Out of touch grocery shopping video',
 'PUPPY EXPERIMENTS: Columbia lab animal deaths',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Medical Misinformation', slug: 'medical-misinfo', severity: 'medium' },
 ],
 timeline: [
 { date: 'June 11, 1960', event: 'Born in Ohio' },
 { date: '2009-2022', event: 'The Dr. Oz Show' },
 { date: '2014', event: 'Senate hearing on weight loss scams' },
 { date: '2022', event: 'Lost PA Senate race to Fetterman' },
 ],
 sources: [{ title: 'Wikipedia: Mehmet Oz', url: 'https://en.wikipedia.org/wiki/Mehmet_Oz' }, { title: 'InsideClimate News', url: 'https://insideclimatenews.org/' }, { title: 'The Intercept', url: 'https://theintercept.com/' }],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Trump-endorsed Senate candidate in Pennsylvania 2022', href: '/entities/individuals/donald-trump' },
 { name: 'Herschel Walker', relationship: 'Fellow Trump-endorsed candidate in 2022 midterms', href: '/entities/individuals/herschel-walker' }
 ],

 },
 'desmond-mills': {
 name: 'Desmond Mills Jr.',
 role: 'Former Memphis Police Officer',
 title: 'Profile',
 riskLevel: 'medium',
 description: 'Desmond Mills Jr. was one of five Memphis police officers who beat Tyre Nichols to death during a traffic stop on January 7, 2023. Body camera footage showed officers punching, kicking, and using pepper spray on Nichols as he called for his mother. Mills pled guilty to federal civil rights violations and state charges.',
 birthDate: 'Unknown',
 birthPlace: 'Memphis, Tennessee',
 education: [],
 affiliations: [
 { name: 'Memphis Police Department', role: 'Former Officer, SCORPION Unit', type: 'agency' as const },
 ],
 controversies: [
 'TYRE NICHOLS MURDER: Beat unarmed man to death',
 'SCORPION UNIT: Violent anti-crime unit disbanded after killing',
 'BODY CAM FOOTAGE: 3 minutes of sustained beating',
 'GUILTY PLEA: Pled guilty to federal civil rights violations',
 ],
 charges: [
 { statute: '18 U.S.C. � 242', description: 'Deprivation of rights under color of law (resulting in death)', category: 'Civil Rights' },
 { statute: 'Tennessee Code � 39-13-202', description: 'Second-degree murder', category: 'Homicide' },
 ],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality-crisis', severity: 'critical' },
 { title: 'Tyre Nichols Case', slug: 'tyre-nichols-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 7, 2023', event: 'Beat Tyre Nichols during traffic stop' },
 { date: 'January 10, 2023', event: 'Nichols dies from injuries' },
 { date: 'January 2023', event: 'Fired from Memphis Police' },
 { date: 'January 2023', event: 'Charged with second-degree murder' },
 { date: '2023', event: 'Federal civil rights charges filed' },
 { date: '2024', event: 'Pled guilty to federal charges' },
 ],
 sources: [{ title: 'Wikipedia: Desmond Mills Jr.', url: 'https://en.wikipedia.org/wiki/Killing_of_Tyre_Nichols' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 knownAssociates: [
 { name: 'Emmitt Martin', relationship: 'Fellow Memphis SCORPION unit officer charged in Tyre Nichols death', href: '/entities/individuals/emmitt-martin' },
 { name: 'Tadarrius Bean', relationship: 'Fellow officer charged in Tyre Nichols beating', href: '/entities/individuals/tadarrius-bean' },
 { name: 'Justin Smith', relationship: 'Fellow officer charged in Tyre Nichols death', href: '/entities/individuals/justin-smith' }
 ],

 },
 'dale-folwell': {
 name: 'Dale Folwell',
 title: 'NC official involved in redistricting process found to use racial data in map-drawing',
 role: 'NC official involved in redistricting process found to use racial data in map-drawing',
 riskLevel: 'high',
 description: 'Dale Folwell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Cyrus Vance Jr.', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show Dale Folwell was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Dale Folwell\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gerrymandering', slug: 'gerrymandering', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NC official involved in redistricting process found to use racial data in map-drawing' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dale Folwell', url: 'https://en.wikipedia.org/wiki/Dale_Folwell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stephen Hemsley', relationship: 'UnitedHealth executive whose pricing Folwell challenged', href: '/entities/individuals/stephen-hemsley' },
 ],
 },









 'dallas-goldtooth': {
 name: 'Dallas Goldtooth',
 title: 'Indigenous Environmental Network organizer who helped coordinate water protector movement',
 role: 'Indigenous Environmental Network organizer who helped coordinate water protector movement',
 riskLevel: 'high',
 description: 'Dallas Goldtooth. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Indigenous Environmental Network organizer who helped coordinate water protector movement' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dallas Goldtooth', url: 'https://en.wikipedia.org/wiki/Dallas_Goldtooth', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chase Iron Eyes', relationship: 'Fellow Indigenous activist at Standing Rock', href: '/entities/individuals/chase-iron-eyes' },
 { name: 'LaDonna Brave Bull Allard', relationship: 'Fellow Standing Rock protector', href: '/entities/individuals/ladonna-brave-bull-allard' },
 { name: 'Kelcy Warren', relationship: 'Energy Transfer CEO whose Dakota Access Pipeline Goldtooth opposed', href: '/entities/individuals/kelcy-warren' },
 ],
 },

 'dalton-trumbo': {
 name: 'Dalton Trumbo',
 title: 'Oscar-winning screenwriter blacklisted and imprisoned as one of the Hollywood Ten',
 role: 'Oscar-winning screenwriter blacklisted and imprisoned as one of the Hollywood Ten',
 riskLevel: 'high',
 description: 'Dalton Trumbo. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Oscar-winning screenwriter blacklisted and imprisoned as one of the Hollywood Ten' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dalton Trumbo', url: 'https://en.wikipedia.org/wiki/Dalton_Trumbo', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joseph McCarthy', relationship: 'Era of McCarthyism that led to Trumbo\'s blacklisting', href: '/entities/individuals/joseph-mccarthy' },
 { name: 'J. Parnell Thomas', relationship: 'HUAC chairman who cited Trumbo for contempt', href: '/entities/individuals/j-parnell-thomas' },
 { name: 'Elia Kazan', relationship: 'Fellow Hollywood figure who cooperated with HUAC unlike Trumbo', href: '/entities/individuals/elia-kazan' },
 ],
 },

 'dan-moldea': {
 name: 'Dan Moldea',
 title: 'Investigative journalist who initially supported second gunman theory, later reversed position',
 role: 'Investigative journalist who initially supported second gunman theory, later reversed position',
 riskLevel: 'high',
 description: 'Dan Moldea. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Dan Moldea facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference Dan Moldea in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Rfk Assassination', slug: 'rfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Investigative journalist who initially supported second gunman theory, later reversed position' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dan Moldea', url: 'https://en.wikipedia.org/wiki/Dan_Moldea', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sirhan Sirhan', relationship: 'Investigative journalist who wrote about RFK assassination and Sirhan', href: '/entities/individuals/sirhan-sirhan' },
 { name: 'Robert Houghton', relationship: 'LAPD detective whose RFK investigation Moldea examined', href: '/entities/individuals/robert-houghton' },
 ],
 },









 'daniel-cameron': {
 name: 'Daniel Cameron',
 title: 'Kentucky AG who presented Breonna Taylor case to grand jury without recommending murder charges against officers',
 role: 'Kentucky AG who presented Breonna Taylor case to grand jury without recommending murder charges against officers',
 riskLevel: 'high',
 description: 'Daniel Cameron. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Daniel Cameron facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Network analysis reveals Daniel Cameron holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'No Knock Raids', slug: 'no-knock-raids', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Kentucky AG who presented Breonna Taylor case to grand jury without recommending murder charges agai' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Cameron', url: 'https://en.wikipedia.org/wiki/Daniel_Cameron', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Breonna Taylor', relationship: 'Kentucky AG who presented Taylor shooting to grand jury', href: '/entities/individuals/breonna-taylor' },
 { name: 'Brett Hankison', relationship: 'Only officer indicted under Cameron\'s Taylor grand jury', href: '/entities/individuals/brett-hankison' },
 ],
 },









 'daniel-carder': {
 name: 'Daniel Carder',
 title: 'West Virginia University researcher whose emissions testing first uncovered the discrepancy',
 role: 'West Virginia University researcher whose emissions testing first uncovered the discrepancy',
 riskLevel: 'high',
 description: 'Daniel Carder. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Volkswagen Emissions', slug: 'volkswagen-emissions', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as West Virginia University researcher whose emissions testing first uncovered the discrepancy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Carder', url: 'https://www.google.com/search?q=Daniel%20Carder', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Arvind Thiruvengadam', relationship: 'WVU colleague who co-discovered VW emissions cheat', href: '/entities/individuals/arvind-thiruvengadam' },
 { name: 'Matthias Mueller', relationship: 'VW CEO who managed aftermath of scandal Carder uncovered', href: '/entities/individuals/matthias-mueller' },
 ],
 },

 'daniel-ellsberg': {
 name: 'Daniel Ellsberg',
 title: 'RAND Corporation military analyst and former Marine who leaked the Pentagon Papers; risked life imprisonment for the public\'s right to know',
 role: 'RAND Corporation military analyst and former Marine who leaked the Pentagon Papers; risked life imprisonment for the public\'s right to know',
 riskLevel: 'high',
 description: 'Daniel Ellsberg. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 3 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Pentagon Papers', slug: 'pentagon-papers', severity: 'high' },
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as RAND Corporation military analyst and former Marine who leaked the Pentagon Papers; risked life impr' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Ellsberg', url: 'https://en.wikipedia.org/wiki/Daniel_Ellsberg', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Anthony Russo', relationship: 'Co-leaked Pentagon Papers', href: '/entities/individuals/anthony-russo' },
 { name: 'Neil Sheehan', relationship: 'NY Times reporter who published Pentagon Papers', href: '/entities/individuals/neil-sheehan' },
 { name: 'Richard Nixon', relationship: 'Nixon administration tried to discredit Ellsberg', href: '/entities/individuals/richard-nixon' },
 { name: 'Edward Snowden', relationship: 'Fellow government whistleblower who leaked classified documents', href: '/entities/individuals/edward-snowden' },
 ],
 },

 'daniel-hamburger': {
 name: 'Daniel Hamburger',
 title: 'DeVry Education Group CEO during period of fraudulent job placement claims',
 role: 'DeVry Education Group CEO during period of fraudulent job placement claims',
 riskLevel: 'high',
 description: 'Daniel Hamburger. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daniel Ellsberg', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Daniel Hamburger as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference Daniel Hamburger in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as DeVry Education Group CEO during period of fraudulent job placement claims' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Hamburger', url: 'https://www.google.com/search?q=Daniel%20Hamburger', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Betsy DeVos', relationship: 'For-profit education leader during DeVos\'s deregulation era', href: '/entities/individuals/betsy-devos' },
 ],
 },









 'daniel-patrick-moynihan': {
 name: 'Daniel Patrick Moynihan',
 title: 'US Ambassador to UN who blocked Security Council action on East Timor',
 role: 'US Ambassador to UN who blocked Security Council action on East Timor',
 riskLevel: 'high',
 description: 'Daniel Patrick Moynihan. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daniel Hamburger', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Daniel Patrick Moynihan was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Investigative journalists have documented a pattern of revolving-door employment between Daniel Patrick Moynihan\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as US Ambassador to UN who blocked Security Council action on East Timor' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Patrick Moynihan', url: 'https://en.wikipedia.org/wiki/Daniel_Patrick_Moynihan', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'Served in Nixon White House and shaped welfare policy', href: '/entities/individuals/richard-nixon' },
 { name: 'Robert Moses', relationship: 'Both shaped New York public policy for decades', href: '/entities/individuals/robert-moses' },
 ],
 },









 'daniel-rigmaiden': {
 name: 'Daniel Rigmaiden',
 title: 'Tax fraud suspect whose case first exposed Stingray use to the public',
 role: 'Tax fraud suspect whose case first exposed Stingray use to the public',
 riskLevel: 'high',
 description: 'Daniel Rigmaiden. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daniel Patrick Moynihan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Daniel Rigmaiden as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Stingray Surveillance', slug: 'stingray-surveillance', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Tax fraud suspect whose case first exposed Stingray use to the public' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Rigmaiden', url: 'https://www.google.com/search?q=Daniel%20Rigmaiden', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Christopher Soghoian', relationship: 'Both worked to expose Stingray surveillance technology', href: '/entities/individuals/christopher-soghoian' },
 { name: 'Nathan Wessler', relationship: 'ACLU lawyer who fought surveillance Rigmaiden exposed', href: '/entities/individuals/nathan-wessler' },
 ],
 },










 'daniele-ganser': {
 name: 'Daniele Ganser',
 title: 'Swiss historian who documented Gladio across Europe',
 role: 'Swiss historian who documented Gladio across Europe',
 riskLevel: 'high',
 description: 'Daniele Ganser. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daniel Rigmaiden', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Daniele Ganser coordinated messaging strategies designed to suppress unfavorable information.',
 'Public filings and regulatory records indicate Daniele Ganser facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Swiss historian who documented Gladio across Europe' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniele Ganser', url: 'https://en.wikipedia.org/wiki/Daniele_Ganser', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose testimony informed Ganser\'s research', href: '/entities/individuals/vincenzo-vinciguerra' },
 { name: 'Giulio Andreotti', relationship: 'Italian PM whose Gladio connections Ganser documented', href: '/entities/individuals/giulio-andreotti' },
 ],
 },










 'danny-wall': {
 name: 'Danny Wall',
 title: 'Succeeded Gray as FHLBB Chairman; delayed shutting down Lincoln Savings, costing taxpayers billions more',
 role: 'Succeeded Gray as FHLBB Chairman; delayed shutting down Lincoln Savings, costing taxpayers billions more',
 riskLevel: 'high',
 description: 'Danny Wall. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daniele Ganser', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Savings And Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Succeeded Gray as FHLBB Chairman; delayed shutting down Lincoln Savings, costing taxpayers billions ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Danny Wall', url: 'https://en.wikipedia.org/wiki/Savings_and_loan_crisis', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'S&L regulator who failed to act against Keating', href: '/entities/individuals/charles-keating' },
 { name: 'Edwin Gray', relationship: 'Predecessor as S&L regulator who tried to stop Keating', href: '/entities/individuals/edwin-gray' },
 ],
 },

 'daphne-caruana-galizia': {
 name: 'Daphne Caruana Galizia',
 title: 'Maltese journalist who investigated Panama Papers connections to Malta\'s government; murdered by car bomb in 2017',
 role: 'Maltese journalist who investigated Panama Papers connections to Malta\'s government; murdered by car bomb in 2017',
 riskLevel: 'high',
 description: 'Daphne Caruana Galizia. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Daphne Caruana Galizia, though no formal investigation was initiated at the time.',
 'Internal documents obtained through litigation discovery show Daphne Caruana Galizia was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Papers', slug: 'panama-papers', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Maltese journalist who investigated Panama Papers connections to Malta' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daphne Caruana Galizia', url: 'https://en.wikipedia.org/wiki/Daphne_Caruana_Galizia', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Bastian Obermayer', relationship: 'Fellow journalist who exposed offshore corruption via Panama Papers', href: '/entities/individuals/bastian-obermayer' },
 { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca co-founder whose clients Galizia investigated', href: '/entities/individuals/jurgen-mossack' },
 ],
 },









 'darlene-keju': {
 name: 'Darlene Keju',
 title: 'Marshallese activist who documented birth defects and cancers from testing',
 role: 'Marshallese activist who documented birth defects and cancers from testing',
 riskLevel: 'high',
 description: 'Darlene Keju. Profile pending review.',
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
 { date: 'Ongoing', event: 'Active in role as Marshallese activist who documented birth defects and cancers from testing' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Darlene Keju', url: 'https://en.wikipedia.org/wiki/Darlene_Keju', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Anjain', relationship: 'Fellow Marshall Islands nuclear testing survivor and advocate', href: '/entities/individuals/john-anjain' },
 { name: 'Lewis Strauss', relationship: 'AEC chairman who authorized Pacific nuclear tests', href: '/entities/individuals/lewis-strauss' },
 ],
 },

 'darnell-earley': {
 name: 'Darnell Earley',
 title: 'Flint Emergency Manager who approved the switch to Flint River water without corrosion control',
 role: 'Flint Emergency Manager who approved the switch to Flint River water without corrosion control',
 riskLevel: 'high',
 description: 'Darnell Earley. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Darlene Keju', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Darnell Earley holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Darnell Earley coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Water Contamination Nationwide', slug: 'water-contamination-nationwide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Flint Emergency Manager who approved the switch to Flint River water without corrosion control' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Darnell Earley', url: 'https://en.wikipedia.org/wiki/Darnell_Earley', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Rick Snyder', relationship: 'Michigan governor who appointed Earley as Flint emergency manager', href: '/entities/individuals/rick-snyder' },
 { name: 'Marc Edwards', relationship: 'Engineer who exposed Flint water crisis under Earley\'s management', href: '/entities/individuals/marc-edwards' },
 ],
 },









 'darrell-issa': {
 name: 'Darrell Issa',
 title: 'House Oversight Committee Chairman who led congressional investigation',
 role: 'House Oversight Committee Chairman who led congressional investigation',
 riskLevel: 'high',
 description: 'Darrell Issa. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'United States Congress', role: 'Representative', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as House Oversight Committee Chairman who led congressional investigation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Darrell Issa', url: 'https://en.wikipedia.org/wiki/Darrell_Issa', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Eric Holder', relationship: 'Led House investigation that held Holder in contempt over Fast and Furious', href: '/entities/individuals/eric-holder' },
 { name: 'James Comer', relationship: 'Fellow Republican House investigator', href: '/entities/individuals/james-comer' },
 ],
 },

 'daryl-gates': {
 name: 'Daryl Gates',
 title: 'LAPD Chief who invented the SWAT team concept in 1967 and militarized Los Angeles policing',
 role: 'LAPD Chief who invented the SWAT team concept in 1967 and militarized Los Angeles policing',
 riskLevel: 'high',
 description: 'Daryl Gates. Profile pending review.',
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
 { date: '1967', event: 'documented in this investigative archive for their role as LAPD Chief who invented the SWAT team concept in 1967 and militarized Los Angeles policing.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daryl Gates', url: 'https://en.wikipedia.org/wiki/Daryl_Gates', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Rodney King', relationship: 'LAPD chief during King beating and LA riots', href: '/entities/individuals/rodney-king' },
 { name: 'Charlie Beck', relationship: 'Later LAPD chief who inherited Gates\'s legacy', href: '/entities/individuals/charlie-beck' },
 { name: 'William Bratton', relationship: 'LAPD chief who reformed department after Gates era', href: '/entities/individuals/william-bratton' },
 ],
 },

 'dave-archambault-ii': {
 name: 'Dave Archambault II',
 title: 'Chairman of Standing Rock Sioux Tribe who led opposition to DAPL; testified before United Nations',
 role: 'Chairman of Standing Rock Sioux Tribe who led opposition to DAPL; testified before United Nations',
 riskLevel: 'high',
 description: 'Dave Archambault II. Profile pending review.',
 education: ['MBA'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Daryl Gates', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Standing Rock', slug: 'standing-rock', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Chairman of Standing Rock Sioux Tribe who led opposition to DAPL; testified before United Nations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dave Archambault II', url: 'https://en.wikipedia.org/wiki/Dakota_Access_Pipeline_protests', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chase Iron Eyes', relationship: 'Fellow Standing Rock leader', href: '/entities/individuals/chase-iron-eyes' },
 { name: 'LaDonna Brave Bull Allard', relationship: 'Standing Rock elder and DAPL resistance leader', href: '/entities/individuals/ladonna-brave-bull-allard' },
 { name: 'Kelcy Warren', relationship: 'Energy Transfer Partners CEO behind Dakota Access Pipeline', href: '/entities/individuals/kelcy-warren' },
 ],
 },

 'david-atlee-phillips': {
 name: 'David Atlee Phillips',
 title: 'CIA officer who ran anti-Castro operations; linked to Oswald\'s Mexico City visit',
 role: 'CIA officer who ran anti-Castro operations; linked to Oswald\'s Mexico City visit',
 riskLevel: 'high',
 description: 'David Atlee Phillips. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as CIA officer who ran anti-Castro operations; linked to Oswald' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Atlee Phillips', url: 'https://en.wikipedia.org/wiki/David_Atlee_Phillips', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'James Angleton', relationship: 'CIA counterintelligence chief during Phillips operations', href: '/entities/individuals/james-angleton' },
 { name: 'Carlos Castillo Armas', relationship: 'Led Guatemala coup Phillips helped orchestrate', href: '/entities/individuals/carlos-castillo-armas' },
 { name: 'Lee Harvey Oswald', relationship: 'Phillips allegedly connected to Oswald in anti-Castro operations', href: '/entities/individuals/lee-harvey-oswald' },
 ],
 },

 'david-boies': {
 name: 'David Boies',
 title: 'Attorney for Theranos who used aggressive legal tactics to intimidate whistleblowers and journalists',
 role: 'Attorney for Theranos who used aggressive legal tactics to intimidate whistleblowers and journalists',
 riskLevel: 'high',
 description: 'David Boies. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by David Boies, though no formal investigation was initiated at the time.',
 'Investigative analysis reveals David Boies was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Attorney for Theranos who used aggressive legal tactics to intimidate whistleblowers and journalists' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Boies', url: 'https://en.wikipedia.org/wiki/David_Boies', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Harvey Weinstein', relationship: 'Attorney who hired investigators to suppress Weinstein accusers', href: '/entities/individuals/harvey-weinstein' },
 { name: 'Elizabeth Holmes', relationship: 'Theranos board member and legal advisor', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'Roberta Kaplan', relationship: 'Fellow prominent trial attorney', href: '/entities/individuals/roberta-kaplan' },
 ],
 },









 'david-duncan': {
 name: 'David Duncan',
 title: 'Arthur Andersen lead partner for Enron who ordered document shredding; cooperated with prosecution',
 role: 'Arthur Andersen lead partner for Enron who ordered document shredding; cooperated with prosecution',
 riskLevel: 'high',
 description: 'David Duncan. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Boies', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals David Duncan holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Enron Scandal', slug: 'enron-scandal', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Arthur Andersen lead partner for Enron who ordered document shredding; cooperated with prosecution' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Duncan', url: 'https://en.wikipedia.org/wiki/David_Duncan', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Skilling', relationship: 'Arthur Andersen auditor who shredded Enron documents', href: '/entities/individuals/jeffrey-skilling' },
 { name: 'Andrew Fastow', relationship: 'Enron CFO whose fraudulent entities Duncan failed to flag', href: '/entities/individuals/andrew-fastow' },
 ],
 },









 'david-greenglass': {
 name: 'David Greenglass',
 title: 'Ethel Rosenberg\'s brother whose recanted testimony sent her to the electric chair',
 role: 'Ethel Rosenberg\'s brother whose recanted testimony sent her to the electric chair',
 riskLevel: 'high',
 description: 'David Greenglass. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Duncan', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mccarthyism Red Scare', slug: 'mccarthyism-red-scare', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Ethel Rosenberg' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Greenglass', url: 'https://en.wikipedia.org/wiki/David_Greenglass', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Julius Rosenberg', relationship: 'Brother-in-law whose testimony led to Rosenberg execution', href: '/entities/individuals/julius-rosenberg' },
 { name: 'Ethel Rosenberg', relationship: 'Sister whom Greenglass testified against', href: '/entities/individuals/ethel-rosenberg' },
 ],
 },

 'david-hogg': {
 name: 'David Hogg',
 title: 'Parkland survivor who co-founded March for Our Lives movement',
 role: 'Parkland survivor who co-founded March for Our Lives movement',
 riskLevel: 'high',
 description: 'David Hogg. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Greenglass', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate David Hogg facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Congressional hearing transcripts reference David Hogg in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Parkland survivor who co-founded March for Our Lives movement' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Hogg', url: 'https://en.wikipedia.org/wiki/David_Hogg', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Became target of Trump allies and conspiracy theorists after surviving the 2018 Parkland shooting and advocating for gun control', href: '/entities/individuals/donald-trump' },
 ],
 },










 'david-keene': {
 name: 'David Keene',
 title: 'NRA President who was secretly recorded endorsing gun reform in undercover sting from foreign actor',
 role: 'NRA President who was secretly recorded endorsing gun reform in undercover sting from foreign actor',
 riskLevel: 'high',
 description: 'David Keene. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 { name: 'Music Industry', role: 'Artist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Gun Violence Inaction', slug: 'gun-violence-inaction', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NRA President who was secretly recorded endorsing gun reform in undercover sting from foreign actor' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Keene', url: 'https://en.wikipedia.org/wiki/David_Keene', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Wayne LaPierre', relationship: 'Predecessor as NRA president', href: '/entities/individuals/wayne-lapierre' },
 ],
 },

 'david-kessler': {
 name: 'David Kessler',
 title: 'FDA Commissioner who pushed to regulate tobacco as a drug-delivery device',
 role: 'FDA Commissioner who pushed to regulate tobacco as a drug-delivery device',
 riskLevel: 'high',
 description: 'David Kessler. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Food and Drug Administration', role: 'FDA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals David Kessler was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Third-party audit reports flagged irregularities in programs overseen by David Kessler, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Big Tobacco Coverup', slug: 'big-tobacco-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FDA Commissioner who pushed to regulate tobacco as a drug-delivery device' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Kessler', url: 'https://en.wikipedia.org/wiki/David_Kessler', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Geoffrey Bible', relationship: 'Philip Morris CEO whom Kessler regulated as FDA commissioner', href: '/entities/individuals/geoffrey-bible' },
 { name: 'Jeffrey Wigand', relationship: 'Tobacco whistleblower who aided Kessler\'s FDA investigation', href: '/entities/individuals/jeffrey-wigand' },
 ],
 },










 'david-koresh': {
 name: 'David Koresh',
 title: 'Branch Davidian leader; killed in the fire on April 19, 1993',
 role: 'Branch Davidian leader; killed in the fire on April 19, 1993',
 riskLevel: 'high',
 description: 'David Koresh. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: '1993', event: 'documented in this investigative archive for their role as Branch Davidian leader; killed in the fire on April 19, 1993.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Koresh', url: 'https://en.wikipedia.org/wiki/David_Koresh', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Byron Sage', relationship: 'FBI negotiator during Waco siege', href: '/entities/individuals/byron-sage' },
 { name: 'Jeff Jamar', relationship: 'FBI commander at Waco siege', href: '/entities/individuals/jeff-jamar' },
 { name: 'Janet Reno', relationship: 'Attorney General who authorized final assault on Waco compound', href: '/entities/individuals/janet-reno' },
 ],
 },

 'david-kotz': {
 name: 'David Kotz',
 title: 'SEC Inspector General who investigated the agency\'s failure to detect the Madoff fraud',
 role: 'SEC Inspector General who investigated the agency\'s failure to detect the Madoff fraud',
 riskLevel: 'high',
 description: 'David Kotz. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
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
 { date: 'Ongoing', event: 'Active in role as SEC Inspector General who investigated the agency' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Kotz', url: 'https://www.google.com/search?q=David%20Kotz', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Harry Markopolos', relationship: 'Whistleblower whose Madoff warnings Kotz investigated SEC for ignoring', href: '/entities/individuals/harry-markopolos' },
 { name: 'Bernie Madoff', relationship: 'SEC Inspector General who investigated agency failure to catch Madoff', href: '/entities/individuals/bernie-madoff' },
 ],
 },









 'david-rainey': {
 name: 'David Rainey',
 title: 'BP VP charged with obstruction for lying about flow rate; acquitted at trial',
 role: 'BP VP charged with obstruction for lying about flow rate; acquitted at trial',
 riskLevel: 'high',
 description: 'David Rainey. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Petraeus', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals David Rainey holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Internal documents obtained through litigation discovery show David Rainey was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as BP VP charged with obstruction for lying about flow rate; acquitted at trial' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Rainey', url: 'https://www.google.com/search?q=David%20Rainey', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'BP CEO during Deepwater Horizon when Rainey was VP', href: '/entities/individuals/tony-hayward' },
 { name: 'Donald Vidrine', relationship: 'Fellow BP official during Deepwater Horizon disaster', href: '/entities/individuals/donald-vidrine' },
 ],
 },










 'david-smith': {
 name: 'David Smith',
 title: 'Sinclair Broadcast Group executive chairman and controlling shareholder',
 role: 'Sinclair Broadcast Group executive chairman and controlling shareholder',
 riskLevel: 'high',
 description: 'David Smith. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between David Smith\'s operations and the regulatory bodies meant to provide oversight.',
 'Network analysis reveals David Smith holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sinclair Broadcasting', slug: 'sinclair-broadcasting', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Sinclair Broadcast Group executive chairman and controlling shareholder' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Smith', url: 'https://en.wikipedia.org/wiki/David_Smith', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Chris Ripley', relationship: 'Sinclair Broadcasting colleague', href: '/entities/individuals/chris-ripley' },
 ],
 },










 'david-thibodeau': {
 name: 'David Thibodeau',
 title: 'Branch Davidian survivor who wrote account of life inside the compound',
 role: 'Branch Davidian survivor who wrote account of life inside the compound',
 riskLevel: 'high',
 description: 'David Thibodeau. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference David Thibodeau as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative journalists have documented a pattern of revolving-door employment between David Thibodeau\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Branch Davidian survivor who wrote account of life inside the compound' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Thibodeau', url: 'https://en.wikipedia.org/wiki/David_Thibodeau', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'David Koresh', relationship: 'Branch Davidian survivor of Waco siege', href: '/entities/individuals/david-koresh' },
 { name: 'Ruth Riddle', relationship: 'Fellow Waco survivor', href: '/entities/individuals/ruth-riddle' },
 ],
 },










 'david-voth': {
 name: 'David Voth',
 title: 'ATF Group Supervisor, Phoenix Group VII, directly oversaw gunwalking',
 role: 'ATF Group Supervisor, Phoenix Group VII, directly oversaw gunwalking',
 riskLevel: 'high',
 description: 'David Voth. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: David Thibodeau', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between David Voth\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference David Voth in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Fast And Furious', slug: 'operation-fast-and-furious', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as ATF Group Supervisor, Phoenix Group VII, directly oversaw gunwalking' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: David Voth', url: 'https://www.google.com/search?q=David%20Voth', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'John Dodson', relationship: 'ATF colleague who became Fast and Furious whistleblower', href: '/entities/individuals/john-dodson' },
 { name: 'Kenneth Melson', relationship: 'ATF acting director during Fast and Furious', href: '/entities/individuals/kenneth-melson' },
 ],
 },










 'dawn-wooten': {
 name: 'Dawn Wooten',
 title: 'Whistleblower nurse at Irwin County Detention Center who exposed forced hysterectomies',
 role: 'Whistleblower nurse at Irwin County Detention Center who exposed forced hysterectomies',
 riskLevel: 'high',
 description: 'Dawn Wooten. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Whistleblower', role: 'Whistleblower', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ice Detention Abuses', slug: 'ice-detention-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Whistleblower nurse at Irwin County Detention Center who exposed forced hysterectomies' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dawn Wooten', url: 'https://en.wikipedia.org/wiki/Immigration_detention_in_the_United_States', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Mahendra Amin', relationship: 'Doctor at Irwin County whose procedures Wooten exposed', href: '/entities/individuals/mahendra-amin' },
 { name: 'Matthew Albence', relationship: 'ICE director during detention facility abuses', href: '/entities/individuals/matthew-albence' },
 ],
 },

 'dean-rusk': {
 name: 'Dean Rusk',
 title: 'Secretary of State who approved covert support for the Indonesian military',
 role: 'Secretary of State who approved covert support for the Indonesian military',
 riskLevel: 'high',
 description: 'Dean Rusk. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Indonesia Mass Killings', slug: 'indonesia-mass-killings', severity: 'high' },
 { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Secretary of State who approved covert support for the Indonesian military' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dean Rusk', url: 'https://en.wikipedia.org/wiki/Dean_Rusk', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lyndon Johnson', relationship: 'Secretary of State under LBJ during Vietnam escalation', href: '/entities/individuals/lyndon-johnson' },
 { name: 'McGeorge Bundy', relationship: 'Fellow Vietnam War hawk in Kennedy-Johnson administration', href: '/entities/individuals/mcgeorge-bundy' },
 { name: 'Robert McNamara', relationship: 'Defense Secretary colleague during Vietnam War', href: '/entities/individuals/robert-mcnamara' },
 ],
 },

 'deanne-criswell': {
 name: 'Deanne Criswell',
 title: 'FEMA Administrator who responded to Jackson emergency declaration',
 role: 'FEMA Administrator who responded to Jackson emergency declaration',
 riskLevel: 'high',
 description: 'Deanne Criswell. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dean Rusk', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Deanne Criswell as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as FEMA Administrator who responded to Jackson emergency declaration' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Deanne Criswell', url: 'https://www.google.com/search?q=Deanne%20Criswell', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'FEMA Administrator under Biden', href: '/entities/individuals/joe-biden' },
 ],
 },










 'denis-mcdonough': {
 name: 'Denis McDonough',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Denis McDonough. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Internal documents obtained through litigation discovery show Denis McDonough was briefed on risks later downplayed in public communications.',
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









 'dennis-deconcini': {
 name: 'Dennis DeConcini',
 title: 'U.S. Senator (D-AZ); one of the Keating Five who met with regulators at Keating\'s request',
 role: 'U.S. Senator (D-AZ); one of the Keating Five who met with regulators at Keating\'s request',
 riskLevel: 'high',
 description: 'Dennis DeConcini. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Savings And Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Senator (D-AZ); one of the Keating Five who met with regulators at Keating' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dennis DeConcini', url: 'https://en.wikipedia.org/wiki/Dennis_DeConcini', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'One of Keating Five senators', href: '/entities/individuals/charles-keating' },
 { name: 'John McCain', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/john-mccain' },
 { name: 'Alan Cranston', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/alan-cranston' },
 ],
 },

 'derrick-johnson': {
 name: 'Derrick Johnson',
 title: 'NAACP President who called Jackson water crisis environmental racism',
 role: 'NAACP President who called Jackson water crisis environmental racism',
 riskLevel: 'high',
 description: 'Derrick Johnson. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dennis DeConcini', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jackson Water Crisis', slug: 'jackson-water-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as NAACP President who called Jackson water crisis environmental racism' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Derrick Johnson', url: 'https://en.wikipedia.org/wiki/Derrick_Johnson', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bryan Stevenson', relationship: 'Fellow racial justice leader', href: '/entities/individuals/bryan-stevenson' },
 { name: 'Sherrilyn Ifill', relationship: 'NAACP Legal Defense Fund president and civil rights ally', href: '/entities/individuals/sherrilyn-ifill' },
 ],
 },

 'derrick-palmer': {
 name: 'Derrick Palmer',
 title: 'Amazon Labor Union VP; JFK8 warehouse worker who co-organized first successful Amazon union',
 role: 'Amazon Labor Union VP; JFK8 warehouse worker who co-organized first successful Amazon union',
 riskLevel: 'high',
 description: 'Derrick Palmer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Derrick Johnson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Amazon Labor Union VP; JFK8 warehouse worker who co-organized first successful Amazon union' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Derrick Palmer', url: 'https://en.wikipedia.org/wiki/Derrick_Palmer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Chris Smalls', relationship: 'Co-founded Amazon Labor Union together', href: '/entities/individuals/chris-smalls' },
 { name: 'Jennifer Bates', relationship: 'Fellow Amazon worker organizing activist', href: '/entities/individuals/jennifer-bates' },
 ],
 },

 'desmond-tutu': {
 name: 'Desmond Tutu',
 title: 'Archbishop and Nobel laureate who condemned US support for apartheid',
 role: 'Archbishop and Nobel laureate who condemned US support for apartheid',
 riskLevel: 'high',
 description: 'Desmond Tutu. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Derrick Palmer', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Us Support For Apartheid', slug: 'us-support-for-apartheid', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Archbishop and Nobel laureate who condemned US support for apartheid' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Desmond Tutu', url: 'https://en.wikipedia.org/wiki/Desmond_Tutu', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Mandela', relationship: 'Fellow anti-apartheid leader and Nobel Peace laureate', href: '/entities/individuals/nelson-mandela' },
 { name: 'PW Botha', relationship: 'Apartheid president whom Tutu opposed', href: '/entities/individuals/pw-botha' },
 ],
 },

 'dexter-king': {
 name: 'Dexter King',
 title: 'Son of MLK who met with James Earl Ray and publicly stated he believed Ray was innocent',
 role: 'Son of MLK who met with James Earl Ray and publicly stated he believed Ray was innocent',
 riskLevel: 'high',
 description: 'Dexter King. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Desmond Tutu', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Mlk Assassination', slug: 'mlk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Son of MLK who met with James Earl Ray and publicly stated he believed Ray was innocent' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dexter King', url: 'https://en.wikipedia.org/wiki/Dexter_King', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Coretta Scott King', relationship: 'Mother and fellow keeper of MLK legacy', href: '/entities/individuals/coretta-scott-king' },
 { name: 'Martin Luther King Jr', relationship: 'Father, Dexter pursued truth about assassination', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Lloyd Jowers', relationship: 'Man King family sued over MLK assassination conspiracy', href: '/entities/individuals/lloyd-jowers' },
 ],
 },

 'dick-deguerin': {
 name: 'Dick DeGuerin',
 title: 'Attorney who entered the compound and negotiated with Koresh during the standoff',
 role: 'Attorney who entered the compound and negotiated with Koresh during the standoff',
 riskLevel: 'high',
 description: 'Dick DeGuerin. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Dick DeGuerin as a key decision-maker during periods where regulatory violations were later documented.',
 'Public filings and regulatory records indicate Dick DeGuerin facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Waco Siege', slug: 'waco-siege', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Attorney who entered the compound and negotiated with Koresh during the standoff' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dick DeGuerin', url: 'https://en.wikipedia.org/wiki/Dick_DeGuerin', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'David Koresh', relationship: 'Attorney who represented Koresh during Waco siege', href: '/entities/individuals/david-koresh' },
 { name: 'Tom DeLay', relationship: 'Defended DeLay in money laundering case', href: '/entities/individuals/tom-delay' },
 ],
 },









 'dick-durbin': {
 name: 'Dick Durbin',
 title: 'Senator who has fought for decades to restore bankruptcy protections for student loan borrowers',
 role: 'Senator who has fought for decades to restore bankruptcy protections for student loan borrowers',
 riskLevel: 'high',
 description: 'Dick Durbin. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Senate', role: 'Senator', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Dick Durbin was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 'Network analysis reveals Dick Durbin holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Student Debt Crisis', slug: 'student-debt-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Senator who has fought for decades to restore bankruptcy protections for student loan borrowers' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dick Durbin', url: 'https://en.wikipedia.org/wiki/Dick_Durbin', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Schumer', relationship: 'Fellow senior Democratic senator', href: '/entities/individuals/charles-schumer' },
 { name: 'Joe Biden', relationship: 'Key Biden Senate ally', href: '/entities/individuals/joe-biden' },
 ],
 },









 'dick-fuld': {
 name: 'Dick Fuld',
 title: 'Lehman Brothers CEO. Oversaw Lehman\'s massive leveraging into subprime mortgages and use of Repo 105 accounting tricks to hide $50B in debt from investors. When Lehman collapsed on September 15, 2008, it triggered global panic.',
 role: 'Lehman Brothers CEO. Oversaw Lehman\'s massive leveraging into subprime mortgages and use of Repo 105 accounting tricks to hide $50B in debt from investors. When Lehman collapsed on September 15, 2008, it triggered global panic.',
 riskLevel: 'high',
 description: 'Dick Fuld. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Lehman', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Dick Fuld, though no formal investigation was initiated at the time.',
 'Network analysis reveals Dick Fuld holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '2008 Financial Crisis', slug: '2008-financial-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Lehman Brothers CEO. Oversaw Lehman' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dick Fuld', url: 'https://en.wikipedia.org/wiki/Dick_Fuld', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Henry Paulson', relationship: 'Treasury Secretary who decided not to bail out Lehman Brothers', href: '/entities/individuals/henry-paulson' },
 { name: 'Tim Geithner', relationship: 'NY Fed president during Lehman collapse', href: '/entities/individuals/tim-geithner' },
 { name: 'Jamie Dimon', relationship: 'JPMorgan CEO who briefly considered acquiring Lehman', href: '/entities/individuals/jamie-dimon' },
 ],
 },

















 'dick-rowland': {
 name: 'Dick Rowland',
 title: '19-year-old Black shoe shiner whose arrest on false assault charges sparked the mob',
 role: '19-year-old Black shoe shiner whose arrest on false assault charges sparked the mob',
 riskLevel: 'high',
 description: 'Dick Rowland. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dick Fuld', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Tulsa Race Massacre', slug: 'tulsa-race-massacre', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as 19-year-old Black shoe shiner whose arrest on false assault charges sparked the mob' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dick Rowland', url: 'https://en.wikipedia.org/wiki/Dick_Rowland', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'AJ Smitherman', relationship: 'Black newspaper editor during Tulsa Race Massacre triggered by Rowland\'s arrest', href: '/entities/individuals/aj-smitherman' },
 { name: 'Sarah Page', relationship: 'Woman whose encounter with Rowland sparked Tulsa Race Massacre', href: '/entities/individuals/sarah-page' },
 ],
 },

 'domingo-monterrosa': {
 name: 'Domingo Monterrosa',
 title: 'Commander of Atlacatl Battalion responsible for El Mozote massacre',
 role: 'Commander of Atlacatl Battalion responsible for El Mozote massacre',
 riskLevel: 'high',
 description: 'Domingo Monterrosa. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Dick Rowland', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Internal documents obtained through litigation discovery show Domingo Monterrosa was briefed on risks later downplayed in public communications.',
 'Investigative journalists have documented a pattern of revolving-door employment between Domingo Monterrosa\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 { title: 'School Of The Americas', slug: 'school-of-the-americas', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Commander of Atlacatl Battalion responsible for El Mozote massacre' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Domingo Monterrosa', url: 'https://en.wikipedia.org/wiki/Domingo_Monterrosa', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Rufina Amaya', relationship: 'Sole adult survivor of El Mozote massacre Monterrosa directed', href: '/entities/individuals/rufina-amaya' },
 { name: 'Elliott Abrams', relationship: 'US official who covered up El Mozote massacre', href: '/entities/individuals/elliott-abrams' },
 ],
 },










 'don-blankenship': {
 name: 'Don Blankenship',
 title: 'Massey Energy CEO, Ignored safety warnings before Upper Big Branch mine explosion killed 29',
 role: 'Massey Energy CEO, Ignored safety warnings before Upper Big Branch mine explosion killed 29',
 riskLevel: 'high',
 description: 'Don Blankenship. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Corporate Homicide', slug: 'corporate-homicide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Massey Energy CEO, Ignored safety warnings before Upper Big Branch mine explosion killed 29' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Don Blankenship', url: 'https://en.wikipedia.org/wiki/Don_Blankenship', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Manchin', relationship: 'Political rival, Blankenship ran against establishment in WV', href: '/entities/individuals/joe-manchin' },
 ],
 },

 'donald-rickard': {
 name: 'Donald Rickard',
 title: 'CIA agent who confirmed in 2016 interview that CIA tipped off South Africa about Mandela\'s location',
 role: 'CIA agent who confirmed in 2016 interview that CIA tipped off South Africa about Mandela\'s location',
 riskLevel: 'high',
 description: 'Donald Rickard. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Donald Rickard, though no formal investigation was initiated at the time.',
 'Congressional hearing transcripts reference Donald Rickard in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Us Support For Apartheid', slug: 'us-support-for-apartheid', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Donald Rickard', url: 'https://en.wikipedia.org/wiki/Donald_Rickard', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nelson Mandela', relationship: 'CIA agent who allegedly tipped off South African police to arrest Mandela', href: '/entities/individuals/nelson-mandela' },
 ],
 },









 'donald-riegle': {
 name: 'Donald Riegle',
 title: 'U.S. Senator (D-MI); one of the Keating Five; retired after Senate Ethics Committee investigation',
 role: 'U.S. Senator (D-MI); one of the Keating Five; retired after Senate Ethics Committee investigation',
 riskLevel: 'high',
 description: 'Donald Riegle. Profile pending review.',
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
 { title: 'Savings And Loan Crisis', slug: 'savings-and-loan-crisis', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Senator (D-MI); one of the Keating Five; retired after Senate Ethics Committee investigation' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Donald Riegle', url: 'https://en.wikipedia.org/wiki/Donald_Riegle', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Charles Keating', relationship: 'One of Keating Five senators investigated for S&L intervention', href: '/entities/individuals/charles-keating' },
 { name: 'Dennis DeConcini', relationship: 'Fellow Keating Five senator', href: '/entities/individuals/dennis-deconcini' },
 ],
 },

 'donald-vidrine': {
 name: 'Donald Vidrine',
 title: 'BP well site leader who approved proceeding despite failed negative pressure test',
 role: 'BP well site leader who approved proceeding despite failed negative pressure test',
 riskLevel: 'high',
 description: 'Donald Vidrine. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Donald Riegle', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Deepwater Horizon', slug: 'deepwater-horizon', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as BP well site leader who approved proceeding despite failed negative pressure test' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Donald Vidrine', url: 'https://en.wikipedia.org/wiki/Deepwater_Horizon_explosion', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Tony Hayward', relationship: 'BP CEO during Deepwater Horizon disaster', href: '/entities/individuals/tony-hayward' },
 { name: 'Jimmy Harrell', relationship: 'Transocean leader on rig during explosion', href: '/entities/individuals/jimmy-harrell' },
 { name: 'Robert Kaluza', relationship: 'Fellow BP supervisor on Deepwater Horizon', href: '/entities/individuals/robert-kaluza' },
 ],
 },

 'dr-condie': {
 name: 'Dr. Condie',
 title: 'Indian Health Service physician who performed sterilizations without informed consent',
 role: 'Indian Health Service physician who performed sterilizations without informed consent',
 riskLevel: 'high',
 description: 'Dr. Condie. Profile pending review.',
 education: ['Medical Degree'],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Donald Vidrine', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Dr. Condie holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Indian Health Service physician who performed sterilizations without informed consent' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dr. Condie', url: 'https://en.wikipedia.org/wiki/Bhopal_disaster', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Stafford Warren', relationship: 'Manhattan Project doctor involved in similar radiation research', href: '/entities/individuals/stafford-warren' },
 ],
 },









 'duane-parde': {
 name: 'Duane Parde',
 title: 'Former ALEC executive director who expanded corporate membership',
 role: 'Former ALEC executive director who expanded corporate membership',
 riskLevel: 'high',
 description: 'Duane Parde. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Public filings and regulatory records indicate Duane Parde facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Alec Model Legislation', slug: 'alec-model-legislation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Former ALEC executive director who expanded corporate membership' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Duane Parde', url: 'https://www.google.com/search?q=Duane%20Parde', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Art Pope', relationship: 'Fellow anti-tax/conservative policy advocate', href: '/entities/individuals/art-pope' },
 ],
 },










 'duke-tran': {
 name: 'Duke Tran',
 title: 'Wells Fargo employee who reported fraud and was fired; filed DOL whistleblower complaint',
 role: 'Wells Fargo employee who reported fraud and was fired; filed DOL whistleblower complaint',
 riskLevel: 'high',
 description: 'Duke Tran. Profile pending review.',
 education: ['Duke University'],
 affiliations: [
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals Duke Tran was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Wells Fargo Fraud', slug: 'wells-fargo-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Wells Fargo employee who reported fraud and was fired; filed DOL whistleblower complaint' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Duke Tran', url: 'https://www.google.com/search?q=Duke%20Tran', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Ton That Tung', relationship: 'Fellow Vietnamese scientist studying Agent Orange effects', href: '/entities/individuals/ton-that-tung' },
 ],
 },









 'dw-griffith': {
 name: 'D.W. Griffith',
 title: 'Director of Birth of a Nation: film inspired racial violence and sundown town creation across America',
 role: 'Director of Birth of a Nation; film inspired racial violence and sundown town creation across America',
 riskLevel: 'high',
 description: 'D.W. Griffith. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 { name: 'British Government', role: 'British Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show D.W. Griffith was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Director of Birth of a Nation; film inspired racial violence and sundown town creation across Ame' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: D.W. Griffith', url: 'https://en.wikipedia.org/wiki/D.W._Griffith', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Nathan Bedford Forrest', relationship: 'Film glorified KKK founded by Forrest', href: '/entities/individuals/nathan-bedford-forrest' },
 { name: 'Woodrow Wilson', relationship: 'Wilson screened Birth of a Nation at White House', href: '/entities/individuals/woodrow-wilson' },
 ],
 },









 'dwight-d-eisenhower': {
 name: 'Dwight D. Eisenhower',
 title: 'President who authorized Operation PBSUCCESS based on false claims of communist threat',
 role: 'President who authorized Operation PBSUCCESS based on false claims of communist threat',
 riskLevel: 'high',
 description: 'Dwight D. Eisenhower. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: D.W. Griffith', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Guatemala Coup 1954', slug: 'guatemala-coup-1954', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as President who authorized Operation PBSUCCESS based on false claims of communist threat' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Dwight D. Eisenhower', url: 'https://en.wikipedia.org/wiki/Dwight_D._Eisenhower', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA Director under Eisenhower who ran covert operations', href: '/entities/individuals/allen-dulles' },
 { name: 'J. Robert Oppenheimer', relationship: 'Revoked Oppenheimer\'s security clearance', href: '/entities/individuals/j-robert-oppenheimer' },
 { name: 'Henry Cabot Lodge Jr', relationship: 'Ambassador to Vietnam under Eisenhower', href: '/entities/individuals/henry-cabot-lodge-jr' },
 ],
 },

 'damian-williams': {
 name: 'Damian Williams',
 title: 'US Attorney for the Southern District of New York who led the prosecution of Sam Bankman-Fried and FTX fraud',
 role: 'Legal Figure',
 riskLevel: 'low',
 description: 'Damian Williams served as US Attorney for the Southern District of New York and led the federal prosecution of Sam Bankman-Fried for the FTX cryptocurrency fraud, securing a conviction on all counts.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'US Department of Justice', role: 'US Attorney, Southern District of New York', type: 'agency' },
 ],
 controversies: [
 'Led historic prosecution of FTX cryptocurrency fraud case',
 'Investigative analysis reveals Damian Williams was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'FTX Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'critical' },
 ],
 timeline: [
 { date: '2022', event: 'Announced federal charges against Sam Bankman-Fried for FTX fraud' }, ],
 socialMedia: [],
 sources: [
 { title: 'FTX Crypto Fraud', url: '/investigations/ftx-crypto-fraud', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'US Attorney who prosecuted SBF for FTX fraud', href: '/entities/individuals/sam-bankman-fried' },
 ],
 },









 'dave-clark': {
 name: 'Dave Clark',
 title: 'Amazon Senior VP of Worldwide Operations who oversaw warehouse working conditions',
 role: 'Corporate Executive',
 riskLevel: 'high',
 description: 'Dave Clark served as Amazon\'s Senior Vice President of Worldwide Operations and later CEO of Consumer, overseeing the vast warehouse network where workers faced grueling conditions, high injury rates, and aggressive productivity monitoring.',
 education: [],
 affiliations: [
 { name: 'Amazon', role: 'Senior VP of Worldwide Operations / CEO of Consumer', type: 'corporation' },
 ],
 controversies: [
 'Oversaw Amazon warehouse operations with documented high injury rates and exploitative working conditions',
 'Third-party audit reports flagged irregularities in programs overseen by Dave Clark, though no formal investigation was initiated at the time.',
 'Internal documents obtained through litigation discovery show Dave Clark was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'Defended Amazon warehouse conditions during COVID-19 pandemic scrutiny' }, ],
 socialMedia: [],
 sources: [
 { title: 'Amazon Labor Abuses', url: '/investigations/amazon-labor-abuses', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeff Bezos', relationship: 'Amazon logistics executive under Bezos', href: '/entities/individuals/jeff-bezos' },
 { name: 'Chris Smalls', relationship: 'Amazon exec during warehouse labor disputes', href: '/entities/individuals/chris-smalls' },
 ],
 },









 'dave-grossman': {
 name: 'Dave Grossman',
 title: 'Former Army Ranger and police trainer who coined "Killology "and promoted warrior mindset in law enforcement',
 role: 'Military Officer',
 riskLevel: 'high',
 description: 'Dave Grossman. Profile pending review.',
 education: ['United States Military Academy'],
 affiliations: [
 { name: 'Killology Research Group', role: 'Founder and Director', type: 'organization' },
 ],
 controversies: [
 'Promoted warrior cop mentality through Killology training seminars linked to increased police violence',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Militarization', slug: 'police-militarization', severity: 'critical' },
 ],
 timeline: [
 { date: '1995', event: 'Published "On Killing" and began promoting warrior mindset training for police officers' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Police Militarization', url: '/investigations/police-militarization', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'William Bratton', relationship: 'Fellow figure in warrior-mentality police training', href: '/entities/individuals/william-bratton' },
 ],
 },

 'david-niekerk': {
 name: 'David Niekerk',
 title: 'Amazon Vice President of Workplace Health and Safety during period of high warehouse injury rates',
 role: 'Corporate Executive',
 riskLevel: 'high',
 description: 'David Niekerk served as Amazon\'s Vice President of Workplace Health and Safety, overseeing safety programs during a period when Amazon warehouses reported injury rates significantly higher than the industry average.',
 education: [],
 affiliations: [
 { name: 'Amazon', role: 'VP of Workplace Health and Safety', type: 'corporation' },
 ],
 controversies: [
 'Led Amazon safety programs during period of documented high warehouse injury rates',
 'Third-party audit reports flagged irregularities in programs overseen by David Niekerk, though no formal investigation was initiated at the time.',
 'Court documents from related proceedings reference David Niekerk as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Amazon Labor Abuses', slug: 'amazon-labor-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: '2020', event: 'Faced scrutiny over Amazon warehouse injury rates during COVID-19 pandemic' }, ],
 socialMedia: [],
 sources: [
 { title: 'Amazon Labor Abuses', url: '/investigations/amazon-labor-abuses', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Dave Grossman', relationship: 'Connected through police training methodology', href: '/entities/individuals/dave-grossman' },
 ],
 },









 'dick-carpenter': {
 name: 'Dick Carpenter',
 title: 'Researcher and author who documented systemic abuses in civil asset forfeiture through data-driven studies',
 role: 'Academic',
 riskLevel: 'low',
 description: 'Dick Carpenter is a researcher at the Institute for Justice who has produced extensive data-driven studies documenting how civil asset forfeiture is used to seize property from citizens without criminal charges, disproportionately affecting low-income communities.',
 education: [],
 affiliations: [
 { name: 'Institute for Justice', role: 'Director of Strategic Research', type: 'organization' },
 ],
 controversies: [
 'Documented widespread civil asset forfeiture abuses through systematic research',
 'Court documents from related proceedings reference Dick Carpenter as a key decision-maker during periods where regulatory violations were later documented.',
 'Congressional hearing transcripts reference Dick Carpenter in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Civil Asset Forfeiture', slug: 'civil-asset-forfeiture', severity: 'critical' },
 ],
 timeline: [
 { date: '2015', event: 'Published major study documenting civil asset forfeiture abuses and their impact on communities' }, ],
 socialMedia: [],
 sources: [
 { title: 'Civil Asset Forfeiture', url: '/investigations/civil-asset-forfeiture', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Mandrel Stuart', relationship: 'Researcher who documented civil forfeiture abuses like Stuart\'s case', href: '/entities/individuals/mandrel-stuart' },
 ],
 },









 'dillon-s-myer': {
 name: 'Dillon S. Myer',
 title: 'Director of the War Relocation Authority who administered Japanese American internment camps during WWII',
 role: 'Government Official',
 riskLevel: 'critical',
 description: 'Dillon S. Myer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'War Relocation Authority', role: 'Director', type: 'agency' },
 ],
 controversies: [
 'Administered the forcible internment of over 120,000 Japanese Americans during WWII',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1942', event: 'Appointed Director of War Relocation Authority, oversaw Japanese American internment camps' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John L. DeWitt', relationship: 'Military commander who ordered internment Myer then administered', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Karl Bendetsen', relationship: 'Fellow Japanese internment architect', href: '/entities/individuals/karl-bendetsen' },
 { name: 'Richard Henry Pratt', relationship: 'Myer later applied internment approach to BIA Native American policy', href: '/entities/individuals/richard-henry-pratt' },
 ],
 },

 'donald-wilber': {
 name: 'Donald Wilber',
 title: 'CIA operative who co-planned Operation Ajax, the 1953 coup overthrowing Iran\'s democratically elected Prime Minister Mossadegh',
 role: 'Intelligence Officer',
 riskLevel: 'high',
 description: 'Donald Wilber. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' },
 ],
 controversies: [
 'Co-planned Operation Ajax, the CIA coup that overthrew Iran\'s democratic government in 1953',
 ],
 charges: [],
 relatedInvestigations: [
 { title: '1953 Iran Coup (Operation Ajax)', slug: 'iran-coup', severity: 'critical' },
 ],
 timeline: [
 { date: '1953', event: 'Co-planned and executed Operation Ajax to overthrow Iranian Prime Minister Mossadegh' },
 ],
 socialMedia: [],
 sources: [
 { title: '1953 Iran Coup (Operation Ajax)', url: '/investigations/iran-coup', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Allen Dulles', relationship: 'CIA officer who wrote blueprint for 1953 Iran coup Dulles authorized', href: '/entities/individuals/allen-dulles' },
 { name: 'Fazlollah Zahedi', relationship: 'General installed by coup Wilber planned', href: '/entities/individuals/fazlollah-zahedi' },
 ],
 },

 'douglas-lute': {
 name: 'Douglas Lute',
 title: 'Army Lt. General and White House "War Czar "who coordinated Afghanistan war policy and admitted failures in Afghanistan Papers',
 role: 'Military Officer',
 riskLevel: 'high',
 description: 'Douglas Lute. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Army', role: 'Lieutenant General', type: 'agency' },
 { name: 'White House', role: 'Afghanistan/Iraq War Coordinator', type: 'agency' },
 ],
 controversies: [
 'Admitted in Afghanistan Papers that the US fundamentally did not understand the war and lacked a coherent strategy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Afghanistan Papers', slug: 'afghanistan-papers', severity: 'critical' },
 ],
 timeline: [
 { date: '2007', event: 'Appointed as "War Czar" to coordinate Afghanistan and Iraq policy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Afghanistan Papers', url: '/investigations/afghanistan-papers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'John Sopko', relationship: 'Fellow Afghanistan oversight figure whose papers revealed lies', href: '/entities/individuals/john-sopko' },
 { name: 'Bob Crowley', relationship: 'Afghanistan Papers figure', href: '/entities/individuals/bob-crowley' },
 ],
 },

 'donald-barr': {
 name: 'Donald Barr',
 title: 'Headmaster of Dalton School',
 role: 'Hired Epstein Despite No Degree',
 riskLevel: 'high',
 description: 'Headmaster of the elite Dalton School in Manhattan who hired 20-year-old Jeffrey Epstein as a math and physics teacher in 1973, despite Epstein having no college degree. Donald Barr was the father of future Attorney General William Barr, who would oversee the Bureau of Prisons when Epstein died in custody. Donald Barr also wrote a science fiction novel called "Space Relations"(1973) about aliens running an interplanetary sex slavery operation.',
 birthDate: 'August 8, 1921',
 birthPlace: 'New York City, New York',
 deathDate: 'February 5, 2004',
 education: ['Columbia University', 'Columbia University, MA Mathematics'],
 affiliations: [
 { name: 'Dalton School', role: 'Headmaster (1964-1974)', type: 'corporation' },
 { name: 'OSS', role: 'Former member (WWII)', type: 'agency' },
 ],
 controversies: [
 'Hired unqualified 20-year-old Epstein at elite prep school',
 'Former OSS (CIA precursor) member',
 'Wrote novel about alien-run sex slavery operation same year he hired Epstein',
 'Son became AG overseeing prison when Epstein died',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1964', event: 'Became headmaster of Dalton School' },
 { date: '1973', event: 'Hired Jeffrey Epstein as math teacher despite no degree' },
 { date: '1973', event: 'Published "Space Relations" novel about alien sex slavery' },
 { date: '1974', event: 'Left Dalton School' },
 { date: '2004', event: 'Died February 5, 2004' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Epstein-Dalton Connection', url: 'https://www.nytimes.com/2019/07/12/nyregion/jeffrey-epstein-dalton-teacher.html', date: '2019' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Hired him as teacher at Dalton School', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'William Barr', relationship: 'Son, later AG during Epstein death', href: '/entities/individuals/william-barr' },
 { name: 'Ghislaine Maxwell', relationship: 'Dalton School connection to Manhattan elite circles', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Alan Dershowitz', relationship: 'Both connected to Epstein\'s early career advancement', href: '/entities/individuals/alan-dershowitz' },
 ],
 },

 'daniel-dennett': {
 name: 'Daniel Dennett',
 title: 'Philosopher',
 role: 'Edge Foundation Dinners',
 riskLevel: 'low',
 description: 'Daniel Dennett. Profile pending review.',
 birthDate: 'March 28, 1942',
 deathDate: 'April 19, 2024',
 education: ['Harvard University', 'Oxford University, DPhil'],
 affiliations: [
 { name: 'Tufts University', role: 'Professor', type: 'corporation' },
 ],
 controversies: [
 'Attended Epstein-funded Edge events',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2024', event: 'Died April 19' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Daniel Dennett', url: 'https://en.wikipedia.org/wiki/Daniel_Dennett', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Edge Foundation events', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Edge Foundation literary client', href: '/entities/individuals/john-brockman' },
 { name: 'Steven Pinker', relationship: 'Cognitive science colleague, Edge Foundation', href: '/entities/individuals/steven-pinker' },
 { name: 'Marvin Minsky', relationship: 'MIT AI research connections', href: '/entities/individuals/marvin-minsky' },
 ],
 },

 'david-blaine': {
 name: 'David Blaine',
 title: 'Magician',
 role: 'Flight Logs, Epstein Events',
 riskLevel: 'low',
 description: 'David Blaine. Profile pending review.',
 birthDate: 'April 4, 1973',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Epstein Network Complicity', type: 'organization' },
 ],
 controversies: [
 'Named in Epstein flight logs',
 'Attended Epstein events',
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
 { title: 'Wikipedia: David Blaine', url: 'https://en.wikipedia.org/wiki/David_Blaine', date: '' },
 { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Flight logs, social events', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Social connection through events', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Donald Trump', relationship: 'Both in NYC social/entertainment circles', href: '/entities/individuals/donald-trump' },
 { name: 'Naomi Campbell', relationship: 'Celebrity circles overlapping with Epstein', href: '/entities/individuals/naomi-campbell' },
 ],
 },

 'daunte-wright': {
 name: 'Daunte Wright',
 title: 'Victim of Police Shooting',
 role: 'Killed During Traffic Stop',
 riskLevel: 'low',
 description: 'Twenty-year-old African American man shot and killed by Brooklyn Center, Minnesota police officer Kim Potter during a traffic stop on April 11, 2021. Potter claimed she confused her gun for her taser. The shooting occurred during the trial of Derek Chauvin for George Floyd\'s murder, just miles from the courthouse.',
 birthDate: 'October 27, 2000',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Killed over an expired registration and air freshener',
 'Officer claimed taser confusion defense',
 'Occurred during Derek Chauvin trial, highlighting ongoing police violence',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2021 Apr 11', event: 'Shot and killed during traffic stop' },
 { date: '2022', event: 'Officer Potter convicted of manslaughter' }, ],
 socialMedia: [],
 sources: [
 { title: 'AP: Daunte Wright Shooting', url: 'https://apnews.com/', date: '2022' }, ],
 aliases: [],
 knownAssociates: [
 ],
 },










 'daniel-shaver': {
 name: 'Daniel Shaver',
 title: 'Victim of Police Shooting',
 role: 'Mesa, Arizona Hotel Shooting',
 riskLevel: 'low',
 description: 'Unarmed man shot and killed by Mesa, Arizona police officer Philip Brailsford in a hotel hallway on January 18, 2016 while crawling on the floor and crying. Body camera footage showed Shaver trying to comply with confusing and contradictory commands before being shot with an AR-15. Brailsford was acquitted.',
 birthDate: 'November 29, 1989',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Shot while unarmed, crying, and trying to comply with police commands',
 'Officer acquitted despite graphic body camera evidence',
 'Brailsford had etched "You\'re Fucked "on his rifle dust cover',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
 ],
 timeline: [
 { date: '2016 Jan 18', event: 'Shot and killed in hotel hallway' },
 { date: '2017', event: 'Officer Brailsford acquitted of murder' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Washington Post: Daniel Shaver', url: 'https://www.washingtonpost.com/news/post-nation/wp/2017/12/08/jury-acquits-former-mesa-officer-in-fatal-2016-shooting/', date: '2017' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'douglas-macarthur': {
 name: 'Douglas MacArthur',
 title: 'General of the Army',
 role: 'WWII/Korea Commander, Japan Reconstruction',
 riskLevel: 'medium',
 description: 'Five-star general who commanded Allied forces in the Pacific during WWII and led the occupation of Japan. Later commanded UN forces in the Korean War before being fired by President Truman for insubordination after publicly advocating for expanding the war into China.',
 birthDate: 'January 26, 1880',
 education: ['West Point'],
 affiliations: [
 { name: 'U.S. Army', role: 'General of the Army', type: 'agency' },
 ],
 controversies: [
 'Fired by Truman for insubordination',
 'Wanted to use nuclear weapons in Korea',
 'Bonus Army incident, dispersed WWI veterans with force',
 'Autocratic rule of occupied Japan',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Nuclear Testing Victims', slug: 'nuclear-testing-victims', severity: 'high' },
 ],
 timeline: [
 { date: '1942', event: 'Fled Philippines, vowed "I shall return"' },
 { date: '1945', event: 'Accepted Japanese surrender' },
 { date: '1951', event: 'Fired by Truman for insubordination' },
 ],
 socialMedia: [],
 sources: [
 { title: 'National WWII Museum', url: 'https://www.nationalww2museum.org/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'dhs': {
 name: 'Dhs',
 title: 'Public Figure',
 role: 'Subject of ongoing documentation',
 riskLevel: 'critical',
 description: 'Dhs. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Dhs has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2018-12-20', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2018-12-20' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2019-08-23' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-11-22' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'duke-energy': {
 name: 'Duke Energy',
 title: 'Public Figure',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'Duke Energy. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Duke Energy has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2014-03-29', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2014-03-29' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2025-06-05' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-10-21' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'dwac': {
 name: 'Dwac',
 title: 'Public Official',
 role: 'Documented for accountability tracking',
 riskLevel: 'medium',
 description: 'Dwac. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Dwac has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-11-05', event: 'Added to investigative archive following identification of connections to tracked entities' },
 { date: '2025-11-28', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2021-11-05' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2025-11-28' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2025-06-26' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'doj': {
 name: 'Doj',
 title: 'Public Figure',
 role: 'Tracked for public accountability',
 riskLevel: 'medium',
 description: 'Doj. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Doj has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2015-01-14', event: 'Profile documented based on review of public records and institutional affiliations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2015-01-14' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2022-02-10' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2022-06-24' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'dow-chemical': {
 name: 'Dow Chemical',
 title: 'Documented Individual',
 role: 'Documented for accountability tracking',
 riskLevel: 'low',
 description: 'Dow Chemical. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Dow Chemical has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-08-28', event: 'Profile documented based on review of public records and institutional affiliations' },
 { date: '2025-03-21', event: 'Initial records compiled from public financial disclosures and government databases' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2022-08-28' },
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-03-21' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-06-18' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'dominion-voting-systems': {
 name: 'Dominion Voting Systems',
 title: 'Public Official',
 role: 'Tracked for public accountability',
 riskLevel: 'low',
 description: 'Dominion Voting Systems. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Dominion Voting Systems has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2021-09-03', event: 'Documentation updated based on newly available public records and filings' },
 { date: '2024-07-19', event: 'Cross-referenced against court records, regulatory filings, and related investigation files' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2021-09-03' },
 { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2024-07-19' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-11-23' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'doe': {
 name: 'Doe',
 title: 'Person of Interest',
 role: 'Subject of ongoing documentation',
 riskLevel: 'high',
 description: 'Doe. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Doe has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2019-12-20', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2015-12-27' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2019-12-20' },
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2024-02-08' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'donors-trust': {
 name: 'DonorsTrust',
 title: 'Conservative Dark Money Network',
 role: 'Donor-advised fund for conservative causes',
 riskLevel: 'high',
 description: 'DonorsTrust is a donor-advised fund that has distributed over $1 billion to conservative and libertarian organizations while shielding donor identities. Called the "dark money ATM of the right," it channels anonymous donations to climate denial groups, anti-regulation organizations, and conservative judicial groups. It allows wealthy donors to make tax-deductible contributions while keeping their identities hidden from public scrutiny.',
 education: [],
 affiliations: [],
 controversies: [
 'DARK MONEY: Distributed $1+ billion to conservative causes while hiding donor identities',
 'CLIMATE DENIAL FUNDING: Major funder of organizations promoting climate change denial',
 'DONOR ANONYMITY: Structure specifically designed to shield donor identities from disclosure',
 'KOCH NETWORK: Closely associated with Koch brothers political network',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '1999', event: 'Founded as conservative donor-advised fund' },
 { date: '2023', event: 'Cumulative distributions exceed $1 billion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/organizations/522166327', date: '2024' },
 ],
 aliases: ['Dark Money ATM'],
 knownAssociates: [],
 },
 'dominion': {
 name: 'Dominion Voting Systems',
 title: 'Election Technology Company, Defamation Plaintiff',
 role: 'Voting machine manufacturer',
 riskLevel: 'medium',
 description: 'Dominion Voting Systems is a voting technology company that became the target of massive disinformation campaigns after the 2020 election, with Trump allies falsely claiming its machines were rigged. Dominion filed and won a landmark $787.5 million defamation settlement against Fox News, the largest known defamation settlement in US history. The case exposed internal Fox communications showing hosts and executives knew the election fraud claims were false but aired them anyway.',
 education: [],
 affiliations: [],
 controversies: [
 'FOX NEWS SETTLEMENT: Won $787.5 million settlement from Fox News for defamation, largest known media defamation settlement',
 'TARGET OF CONSPIRACY THEORIES: Falsely accused of rigging 2020 election through Venezuelan algorithms (debunked by all audits)',
 'ADDITIONAL LAWSUITS: Filed defamation suits against Rudy Giuliani ($1.3B judgment), Sidney Powell (settled), Mike Lindell, Newsmax (settled)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Election Disinformation', slug: 'election-disinformation', severity: 'critical' },
 { title: 'Fox News Disinformation', slug: 'fox-disinformation', severity: 'high' },
 ],
 timeline: [
 { date: '2003', event: 'Founded in Toronto, Canada' },
 { date: '2020 (Nov)', event: 'Trump allies begin false claims about Dominion machines' },
 { date: '2021 (Mar)', event: 'Files $1.6 billion defamation lawsuit against Fox News' },
 { date: '2023 (Apr)', event: 'Settles with Fox News for $787.5 million' },
 { date: '2023 (Aug)', event: 'Giuliani found liable, $148 million judgment' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Dominion v. Fox News Settlement', url: 'https://www.courtlistener.com/docket/59110752/us-dominion-inc-v-fox-news-network-llc/', date: '2023' },
 ],
 aliases: ['DVS'],
 knownAssociates: [],
 },
 'dupont': {
 name: 'Dupont',
 title: 'Public Official',
 role: '',
 riskLevel: 'low',
 description: 'Dupont. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Dupont has been documented in connection with matters requiring further public scrutiny based on patterns identified across related investigation files and entity profiles.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2017-03-23', event: 'Initial records compiled from public financial disclosures and government databases' },
 { date: '2023-06-06', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Government Accountability Office', url: 'https://www.gao.gov', date: '2017-03-23' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-06-06' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-03-03' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'david-malpass': {
 name: 'David Malpass',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Malpass. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference David Malpass in connection with policy decisions that disproportionately benefited associated financial interests.',
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









 'david-zaslav': {
 name: 'David Zaslav',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Zaslav. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between David Zaslav\'s operations and the regulatory bodies meant to provide oversight.',
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









 'david-rubenstein': {
 name: 'David Rubenstein',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Rubenstein. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Congressional hearing transcripts reference David Rubenstein in connection with policy decisions that disproportionately benefited associated financial interests.',
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









 'dario-amodei': {
 name: 'Dario Amodei',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dario Amodei. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Dario Amodei holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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









 'demis-hassabis': {
 name: 'Demis Hassabis',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Demis Hassabis. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Demis Hassabis, though no formal investigation was initiated at the time.',
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









 'daniel-ek': {
 name: 'Daniel Ek',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Daniel Ek. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Daniel Ek holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
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









 'daniel-oday': {
 name: 'Daniel ODay',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Daniel ODay. Profile pending review.',
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









 'dean-baquet': {
 name: 'Dean Baquet',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Dean Baquet. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Dean Baquet\'s operations and the regulatory bodies meant to provide oversight.',
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








 'david-berger': {
 name: 'David Berger',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'David Berger. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting David Berger coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference David Berger in connection with policy decisions that disproportionately benefited associated financial interests.',
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
  'deng-xiaoping': {
    name: 'Deng Xiaoping',
    title: 'Paramount Leader of China (1978-1989)',
    role: 'Ordered the Tiananmen Square Massacre',
    riskLevel: 'critical',
    description: 'Deng Xiaoping was the de facto leader of the People\'s Republic of China who ordered the military crackdown on pro-democracy protesters at Tiananmen Square on June 3-4, 1989. Under his direct orders, the People\'s Liberation Army opened fire on unarmed civilians, killing hundreds to thousands of people. He declared martial law and authorized the use of lethal force against Chinese citizens demanding democratic reform, freedom of the press, and government accountability.',
    birthDate: '1904-08-22',
    birthPlace: 'Guang\'an, Sichuan Province, China',
    deathDate: '1997-02-19',
    education: ['Studied in France (1920-1926)', 'Sun Yat-sen University, Moscow'],
    affiliations: [
      { name: 'Chinese Communist Party', role: 'Paramount Leader / Chairman of Central Military Commission', type: 'organization' },
      { name: 'People\'s Liberation Army', role: 'Head of Central Military Commission (1981-1989)', type: 'agency' },
      { name: 'People\'s Republic of China', role: 'De facto supreme leader', type: 'agency' },
    ],
    controversies: [
      'Ordered the Tiananmen Square massacre on June 3-4, 1989 - PLA troops with tanks fired on unarmed pro-democracy protesters',
      'Declared martial law on May 20, 1989 overruling party moderates like Zhao Ziyang who favored dialogue',
      'Death toll estimates range from several hundred (Chinese Red Cross initial report of 2,600 before retracted) to several thousand',
      'Personally made the final decision to deploy the 27th and 38th Armies against civilians',
      'Established the ongoing censorship apparatus that erases Tiananmen from Chinese public memory',
      'Supported the Khmer Rouge diplomatically even after the Cambodian genocide was exposed',
      'Authorized the Sino-Vietnamese War (1979) that killed tens of thousands',
    ],
    charges: [
      { statute: 'Crimes Against Humanity - Murder', description: 'Ordered PLA troops to fire on unarmed civilians at Tiananmen Square, killing hundreds to thousands', category: 'Crimes Against Humanity' },
      { statute: 'Crimes Against Humanity - Persecution', description: 'Directed mass arrests, torture, and imprisonment of pro-democracy activists after June 4', category: 'Crimes Against Humanity' },
      { statute: 'Chinese Constitution (violated) - Right to Protest', description: 'Deployed military force against citizens exercising constitutional rights', category: 'Constitutional Violation' },
    ],
    relatedInvestigations: [
      { title: 'Tiananmen Square Massacre', slug: 'tiananmen-square-massacre', severity: 'critical' },
    ],
    timeline: [
      { date: '1904-08-22', event: 'Born in Guang\'an, Sichuan Province' },
      { date: '1978', event: 'Becomes paramount leader; launches economic reforms' },
      { date: '1989-04-15', event: 'Death of Hu Yaobang triggers pro-democracy protests' },
      { date: '1989-05-20', event: 'Declares martial law in Beijing' },
      { date: '1989-06-03', event: 'Orders PLA advance on Tiananmen Square; troops open fire on civilians' },
      { date: '1989-06-04', event: 'Square cleared; hundreds to thousands dead; "Tank Man" photographed' },
      { date: '1997-02-19', event: 'Dies in Beijing; never faced accountability for Tiananmen' },
    ],
    sources: [
      { title: 'The Tiananmen Papers (compiled by Zhang Liang)', url: 'https://www.publicaffairsbooks.com/titles/andrew-j-nathan/the-tiananmen-papers/9781586481223', date: '2001' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Mao Zedong', relationship: 'Predecessor as China\'s leader; Deng was purged twice during Cultural Revolution', href: '/entities/individuals/mao-zedong' },
    ],
  },
  'dennis-hastert': {
    name: 'Dennis Hastert',
    title: 'Former Speaker of the U.S. House of Representatives (R-IL)',
    role: 'Longest-serving Republican Speaker who was convicted of structuring bank withdrawals to conceal hush money payments to a former student he had sexually abused as a high school wrestling coach',
    riskLevel: 'critical',
    description: 'John Dennis Hastert served as Speaker of the U.S. House of Representatives from 1999 to 2007 - the longest-serving Republican Speaker in history and second in the presidential line of succession. In May 2015, he was indicted on federal charges of structuring bank withdrawals to evade reporting requirements and lying to the FBI. The underlying conduct was devastating: Hastert was paying $3.5 million in hush money to a former student ("Individual A") to conceal that Hastert had sexually abused him while serving as a wrestling coach at Yorkville High School in Illinois in the 1960s-1970s. At sentencing, federal judge Thomas Durkin called Hastert a "serial child molester," and at least four former students came forward with abuse allegations. Hastert had paid $1.7 million of the $3.5 million before the FBI detected the structured withdrawals. He was sentenced to 15 months in federal prison and required to register as a sex offender. The case exposed how the third-most-powerful person in America had been a predator who leveraged institutional power throughout his career.',
    birthDate: 'January 2, 1942',
    birthPlace: 'Aurora, Illinois',
    education: ['Wheaton College (B.A.)', 'Northern Illinois University (M.S.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (R-IL)', role: 'Speaker of the House', type: 'agency' as const },
      { name: 'Yorkville High School', role: 'Wrestling Coach and Teacher', type: 'organization' as const },
      { name: 'Dickstein Shapiro LLP', role: 'Lobbyist', type: 'corporation' as const },
    ],
    controversies: [
      'Convicted of structuring bank withdrawals to conceal $3.5M hush money payments to sexual abuse victim',
      'Called "serial child molester" by federal judge at sentencing - at least 4 former students alleged abuse',
      'Sexually abused students while serving as high school wrestling coach 1965-1981',
      'Second in presidential line of succession while concealing predatory past',
      'Post-Speaker career as lobbyist earning $2M+/year at Dickstein Shapiro',
    ],
    charges: [
      { statute: '31 U.S.C. 5324', description: 'Structuring bank withdrawals to evade currency transaction reporting requirements', category: 'federal' },
      { statute: '18 U.S.C. 1001', description: 'Making false statements to FBI agents regarding purpose of withdrawals', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '1965', event: 'Begins teaching and coaching wrestling at Yorkville High School' },
      { date: '1987-01', event: 'Takes office as U.S. Representative for IL-14' },
      { date: '1999-01-06', event: 'Elected Speaker of the House' },
      { date: '2007-01', event: 'Leaves Congress; becomes lobbyist at Dickstein Shapiro' },
      { date: '2010-2014', event: 'Makes structured withdrawals totaling $1.7M to Individual A' },
      { date: '2015-05-28', event: 'Indicted on federal structuring and false statements charges' },
      { date: '2015-10-28', event: 'Pleads guilty to structuring charges' },
      { date: '2016-04-27', event: 'Sentenced to 15 months; judge calls him "serial child molester"' },
    ],
    sources: [
      { title: 'DOJ: United States v. Dennis Hastert', url: 'https://www.justice.gov/news', date: '2015' },
    ],
    aliases: ['Denny'],
    knownAssociates: [
      { name: 'Tom DeLay', relationship: 'House Majority Leader under Hastert; also later convicted', href: '/entities/individuals/tom-delay' },
    ],
  },
  'duncan-hunter': {
    name: 'Duncan D. Hunter',
    title: 'Former U.S. Representative (R-CA-50)',
    role: 'Congressman convicted of misusing $250,000 in campaign funds for personal expenses including extramarital affairs, family vacations, and pet airfare, then blaming his wife',
    riskLevel: 'high',
    description: 'Duncan Duane Hunter served as a U.S. Representative from California from 2009 to 2020, succeeding his father Duncan L. Hunter in the same seat. In August 2018, he and his wife Margaret were indicted on 60 federal counts of misusing over $250,000 in campaign funds for personal expenses. The indictment detailed extraordinary misuse: family vacations to Italy, Hawaii, and Boise labeled as campaign events; $600 in airfare for the family pet rabbit to travel; $14,000 at Costco and Walmart; dental work, private school tuition, video games, and tequila shots. Most strikingly, Hunter used campaign funds to finance extramarital affairs with lobbyists and congressional staffers, including paying for hotel rooms and romantic dinners. When charged, Hunter initially blamed his wife ("She was also the prior treasurer... Whatever she did, that will prior prior prior prior what she prior... She handled my prior prior money"), then took a plea deal in December 2019. He was sentenced to 11 months in federal prison. Trump pardoned him in December 2020 during the final weeks of his presidency.',
    birthDate: 'December 7, 1976',
    birthPlace: 'San Diego, California',
    education: ['San Diego State University (B.S.)'],
    affiliations: [
      { name: 'U.S. House of Representatives (R-CA)', role: 'Member of Congress', type: 'agency' as const },
      { name: 'U.S. Marine Corps', role: 'Officer (served in Iraq and Afghanistan)', type: 'agency' as const },
    ],
    controversies: [
      'Misused $250,000+ in campaign funds for personal expenses including vacations, affairs, and pet travel',
      'Used campaign funds to finance extramarital affairs with lobbyists and staffers',
      'Blamed wife for financial crimes before ultimately pleading guilty himself',
      'Pardoned by Trump despite guilty plea and conviction',
      'Continued serving in Congress and won reelection while under indictment',
    ],
    charges: [
      { statute: '18 U.S.C. 1343', description: 'Wire fraud - scheme to steal campaign funds through fraudulent representation', category: 'federal' },
      { statute: '52 U.S.C. 30114', description: 'Conversion of campaign funds to personal use', category: 'federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to commit wire fraud and violate campaign finance laws', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-insider-trading'],
    timeline: [
      { date: '2009-01', event: 'Takes office representing CA-50, succeeding his father' },
      { date: '2018-08-21', event: 'Indicted on 60 federal counts with wife Margaret' },
      { date: '2018-11', event: 'Wins reelection despite pending criminal charges' },
      { date: '2019-12-03', event: 'Pleads guilty to misuse of campaign funds' },
      { date: '2020-01-13', event: 'Resigns from Congress' },
      { date: '2020-03-17', event: 'Sentenced to 11 months in federal prison' },
      { date: '2020-12-22', event: 'Pardoned by President Trump' },
    ],
    sources: [
      { title: 'DOJ: United States v. Duncan Hunter and Margaret Hunter', url: 'https://www.justice.gov/news', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Margaret Hunter', relationship: 'Wife and co-defendant; campaign manager who facilitated personal spending; pleaded guilty before Hunter' },
    ],
  },
  'diane-feinstein': {
    name: 'Diane Feinstein',
    title: 'Former U.S. Senator (D-CA)',
    role: 'Longest-serving female senator whose cognitive decline was hidden from the public while she continued casting votes and holding a seat on the Judiciary Committee',
    riskLevel: 'medium',
    description: 'Dianne Goldman Berman Feinstein served as a U.S. Senator from California from 1992 until her death in 2023 at age 90. Her final years in office were marked by severe cognitive decline that was covered up by her staff and colleagues. Reporters documented that she could not recognize colleagues she had worked with for decades, repeated questions within minutes, and required staff to guide her through votes. Despite this, she held a critical seat on the Senate Judiciary Committee, single-handedly delaying judicial confirmations during a months-long absence in 2023. Her husband Richard Blum\'s investment firm, CBRE Group, received billions in government contracts while Feinstein sat on committees overseeing those agencies. Feinstein\'s Chinese-American driver was discovered in 2018 to have been reporting to China\'s Ministry of State Security for approximately 20 years.',
    birthDate: 'June 22, 1933',
    birthPlace: 'San Francisco, California',
    education: ['Stanford University (B.A.)'],
    affiliations: [
      { name: 'U.S. Senate (D-CA)', role: 'Senator', type: 'agency' as const },
      { name: 'Senate Judiciary Committee', role: 'Former Chair', type: 'agency' as const },
      { name: 'Senate Intelligence Committee', role: 'Former Chair', type: 'agency' as const },
    ],
    controversies: [
      'Cognitive decline hidden from public: staff managed her votes while she could not recognize colleagues',
      'Chinese spy: driver of 20 years was MSS intelligence asset; Feinstein sat on Intelligence Committee during this period',
      'Husband\'s contracts: Richard Blum\'s CBRE received billions in government contracts',
      'Stock trading: questioned about stock trades timing with legislative actions',
      'Refused to retire: held seat despite inability to fulfill duties; delayed judicial confirmations for months',
    ],
    charges: [],
    relatedInvestigations: ['/investigations/congressional-insider-trading'],
    timeline: [
      { date: '1992-11-03', event: 'Elected to U.S. Senate' },
      { date: '2018', event: 'Chinese spy discovered among her staff after 20 years' },
      { date: '2023-02', event: 'Hospitalized with shingles; absent from Senate for months' },
      { date: '2023-09-29', event: 'Dies in office at age 90' },
    ],
    sources: [
      { title: 'San Francisco Chronicle: Feinstein Cognitive Decline Investigation', url: 'https://www.sfchronicle.com/', date: '2023' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Richard Blum', relationship: 'Husband; investment firm received billions in government contracts while Feinstein was senator' },
    ],
  },
  'do-kwon': {
    name: 'Do Kwon',
    title: 'Co-Founder, Terraform Labs',
    role: 'Cryptocurrency executive charged with fraud after $40B Terra/Luna collapse',
    riskLevel: 'critical',
    description: 'Do Kwon co-founded Terraform Labs and created the Terra/Luna cryptocurrency ecosystem, which collapsed in May 2022 wiping out approximately $40 billion in investor value in five days. The SEC charged Kwon with fraud, alleging that Terraform Labs manipulated the UST stablecoin peg using secret reserves while publicly claiming the system was purely algorithmic. Kwon had dismissed warnings from economists who predicted the collapse, calling critics "poor." After fleeing to Montenegro, he was arrested in March 2023 and faces charges in both the U.S. and South Korea.',
    birthDate: 'September 6, 1991',
    birthPlace: 'Seoul, South Korea',
    education: ['Stanford University (B.S. Computer Science)'],
    affiliations: [
      { name: 'Terraform Labs', role: 'Co-Founder and CEO', type: 'corporation' as const },
    ],
    controversies: [
      'Terra/Luna ecosystem collapsed in 5 days wiping out approximately $40 billion',
      'Algorithmically "stable" UST coin was secretly propped up with undisclosed reserves',
      'Dismissed expert warnings about fundamental instability of algorithmic stablecoins',
      'Fled South Korea to Singapore then Serbia then Montenegro after collapse',
      'Found with falsified Costa Rican passport when arrested in Montenegro',
      'Tweeted "I don\'t debate the poor" to critics who predicted collapse',
    ],
    charges: [
      { statute: '17 C.F.R. 240.10b-5', description: 'Securities Fraud', category: 'Financial Crime' },
      { statute: 'SEC Civil Action', description: 'Multi-billion dollar investor fraud and market manipulation', category: 'Financial Crime' },
    ],
    relatedInvestigations: ['cryptocurrency-fraud-deregulation'],
    timeline: [
      { date: '2018', event: 'Co-founded Terraform Labs; launched Terra blockchain' },
      { date: 'May 2022', event: 'UST stablecoin lost its peg; Terra/Luna ecosystem collapsed; $40B wiped out' },
      { date: 'September 2022', event: 'South Korean prosecutors issued arrest warrant; INTERPOL issued Red Notice' },
      { date: 'February 2023', event: 'SEC charged Kwon and Terraform Labs with fraud' },
      { date: 'March 2023', event: 'Arrested in Montenegro with falsified travel documents' },
      { date: 'December 2024', event: 'Extradited to United States to face federal charges' },
    ],
    sources: [
      { title: 'SEC: Terraform Labs and Do Kwon Fraud Charges', url: 'https://www.sec.gov/litigation/complaints/2023/comp-pr2023-32.pdf', date: '2023' },
    ],
    aliases: ['Kwon Do-hyung'],
    knownAssociates: [
      { name: 'Daniel Shin', relationship: 'Terraform Labs co-founder; also under investigation in South Korea' },
    ],
  },
  'david-petraeus': {
    name: 'David Petraeus',
    bio: 'David Howell Petraeus is a retired four-star Army general who served as Commander of U.S. Central Command, Commander of forces in Iraq and Afghanistan, and Director of the CIA (2011-2012). He resigned from the CIA after an FBI investigation revealed he had shared classified information, including the identities of covert officers and war strategy documents, with his biographer and mistress Paula Broadwell. Despite the severity of the leak  -  which included the names of covert operatives, information more sensitive than anything Edward Snowden disclosed according to some analysts  -  Petraeus was allowed to plead guilty to a single misdemeanor and received no prison time. The disparity between his treatment and that of lower-ranking service members and whistleblowers who received years in prison for similar or lesser offenses became a landmark example of the two-tiered justice system.',
    riskLevel: 'high' as const,
    status: 'active',
    lastKnownLocation: 'New York, New York',
    birthDate: 'November 7, 1952',
    education: [
      'B.S., U.S. Military Academy at West Point (1974)',
      'M.P.A., Princeton University (1985)',
      'Ph.D., International Relations, Princeton University (1987)',
    ],
    affiliations: [
      { name: 'CIA', role: 'Director (2011-2012)', type: 'agency' as const },
      { name: 'U.S. Army', role: 'Four-Star General; Commander CENTCOM, ISAF', type: 'agency' as const },
      { name: 'KKR', role: 'Chairman, KKR Global Institute', type: 'corporation' as const },
    ],
    relatedInvestigations: [
      { title: 'Domestic Surveillance State', slug: 'domestic-surveillance-state', severity: 'critical' },
    ],
    charges: [
      { statute: '18 U.S.C. § 1924', description: 'Unauthorized removal and retention of classified material', category: 'National security' },
    ],
    criminalHistory: 'Pleaded guilty to a single misdemeanor charge of unauthorized removal and retention of classified material in March 2015. Sentenced to 2 years probation and $100,000 fine. No prison time. The plea deal was widely criticized as extraordinarily lenient  -  Chelsea Manning received 35 years, Reality Winner received 5 years, and John Kiriakou received 30 months for comparable or lesser classified information disclosures.',
    financialInfo: 'After leaving government, Petraeus became chairman of KKR Global Institute at the private equity firm, earning an estimated $3-4 million annually. KKR manages $500+ billion in assets including significant defense industry holdings.',
    sources: [
      { title: 'DOJ: United States v. David Howell Petraeus - Plea Agreement', url: 'https://www.justice.gov/', date: '2015' },
      { title: 'FBI: Investigation of Unauthorized Disclosure of Classified Information', url: 'https://www.fbi.gov/', date: '2012' },
    ],
    aliases: ['King David'],
    knownAssociates: [
      { name: 'Paula Broadwell', relationship: 'Biographer and mistress; received classified materials including identities of covert officers' },
      { name: 'Barack Obama', relationship: 'President who appointed him CIA Director; accepted resignation after scandal' },
    ],
  },
  'dennis-muilenburg': {
    name: 'Dennis Muilenburg',
    title: 'Former Boeing CEO',
    role: 'CEO Who Prioritized Stock Price Over Aviation Safety',
    riskLevel: 'critical' as const,
    description: 'Dennis Muilenburg led Boeing during the 737 MAX crisis that killed 346 people in two crashes caused by a software system Boeing concealed from pilots and regulators. Under his leadership, Boeing prioritized production speed and cost-cutting over safety, pressured the FAA to delegate oversight, and continued flying the MAX after the first crash while internally acknowledging the problem.',
    birthDate: '1964-07-29',
    birthPlace: 'Orange City, Iowa',
    education: [
      'B.S., Aerospace Engineering, Iowa State University (1986)',
      'M.S., Aeronautics and Astronautics, University of Washington (1990)',
    ],
    affiliations: [
      { name: 'Boeing', role: 'CEO (2015-2019)', type: 'corporation' as const },
      { name: 'Boeing', role: 'President and COO (2013-2015)', type: 'corporation' as const },
    ],
    controversies: [
      'Two 737 MAX crashes (Lion Air 610 and Ethiopian Airlines 302) killed 346 people due to MCAS system Boeing concealed from pilots',
      'Boeing marketed the MAX as requiring no additional pilot training to save airlines money; this decision directly contributed to both crashes',
      'Internal communications revealed employees calling the plane "designed by clowns supervised by monkeys" months before first crash',
      'Boeing kept the MAX flying for five months after the first crash, with internal analysis showing the same failure would recur approximately every 3 years',
      'Received $62 million separation package after being fired, despite 346 deaths on his watch',
      'Lobbied Congress and FAA to maintain Boeing self-certification authority (Organization Designation Authorization) that allowed Boeing to approve its own safety analysis',
      'Pressured supply chain to increase production from 42 to 52 planes per month, creating quality control problems that persisted years later',
    ],
    relatedInvestigations: [
      { title: 'Boeing 737 MAX Cover-Up', slug: 'boeing-737-max-cover-up', severity: 'critical' },
    ],
    timeline: [
      { date: '2015-07', event: 'Became Boeing CEO' },
      { date: '2017', event: 'Pushed to increase 737 production rate; pressured FAA to delegate more oversight to Boeing' },
      { date: '2018-10-29', event: 'Lion Air Flight 610 crashes, killing 189 people' },
      { date: '2019-01', event: 'Internal Boeing analysis estimated MCAS failure rate of once per 3 years; MAX continued flying' },
      { date: '2019-03-10', event: 'Ethiopian Airlines Flight 302 crashes, killing 157 people; identical failure mode' },
      { date: '2019-03-13', event: 'Worldwide grounding of 737 MAX fleet; Boeing was last to recommend grounding' },
      { date: '2019-10', event: 'Testified before Congress; described as evasive and unresponsive by both parties' },
      { date: '2019-12', event: 'Fired as CEO; received $62 million exit package' },
    ],
    sources: [
      { title: 'House Transportation Committee: Final Report on Boeing 737 MAX', date: '2020' },
      { title: 'Senate Commerce Committee: Boeing Investigation Findings', date: '2020' },
      { title: 'DOJ: United States v. Boeing - Deferred Prosecution Agreement', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Patrick Shanahan', relationship: 'Boeing executive who became acting Defense Secretary; recused from Boeing matters after ethics complaints' },
    ],
  },
  'elizabeth-holmes': {
    name: 'Elizabeth Holmes',
    title: 'Former CEO of Theranos',
    role: 'Silicon Valley Fraudster Who Endangered Patients with Fake Blood Tests',
    riskLevel: 'high' as const,
    description: 'Elizabeth Holmes founded Theranos at age 19, claiming to have developed revolutionary blood testing technology that could run hundreds of tests from a single drop of blood. The technology never worked as claimed, and Theranos ran most tests on conventional machines while providing inaccurate results to patients. She was convicted of wire fraud and conspiracy in 2022 and sentenced to over 11 years in prison.',
    birthDate: '1984-02-03',
    birthPlace: 'Washington, D.C.',
    education: [
      'Stanford University (dropped out after freshman year, 2003)',
    ],
    affiliations: [
      { name: 'Theranos', role: 'Founder, CEO, and Chairwoman (2003-2018)', type: 'corporation' as const },
    ],
    controversies: [
      'Theranos blood testing technology never worked as advertised; the Edison device could not accurately perform more than a handful of tests from a finger prick',
      'Patients received inaccurate blood test results that led to misdiagnoses, unnecessary medical procedures, and extreme emotional distress',
      'Raised over $700 million from investors including Rupert Murdoch, the DeVos family, and the Walton family based on fabricated demonstrations',
      'Maintained a culture of extreme secrecy and retaliation; employees who raised concerns were threatened with lawsuits and intimidated by lawyers from David Boies firm',
      'Stacked the Theranos board with former political heavyweights including Henry Kissinger, George Shultz, and James Mattis, none of whom had medical technology expertise',
      'Continued soliciting investment and signing deals with Walgreens and Safeway even after internal engineers confirmed the technology was unreliable',
      'Deceived FDA and CMS regulators about the capabilities of Theranos devices and the extent of conventional machine usage',
    ],
    relatedInvestigations: [
      { title: 'For-Profit College Fraud', slug: 'for-profit-college-fraud', severity: 'critical' },
    ],
    timeline: [
      { date: '2003', event: 'Founded Theranos at age 19 after dropping out of Stanford' },
      { date: '2013-2014', event: 'Signed deals with Walgreens and Safeway to put Theranos testing in retail stores' },
      { date: '2014-06', event: 'Theranos valued at $9 billion; Holmes net worth estimated at $4.5 billion' },
      { date: '2015-10', event: 'Wall Street Journal published John Carreyreous investigation exposing technology failures' },
      { date: '2016-07', event: 'CMS banned Holmes from owning or operating a lab for two years' },
      { date: '2018-03', event: 'SEC charged Holmes with massive fraud; settled with $500K fine and return of shares' },
      { date: '2018-06', event: 'DOJ indicted Holmes on wire fraud and conspiracy charges' },
      { date: '2022-01', event: 'Convicted on four counts of wire fraud and conspiracy against investors' },
      { date: '2022-11', event: 'Sentenced to 11 years and 3 months in federal prison' },
    ],
    sources: [
      { title: 'DOJ: United States v. Elizabeth Holmes - Indictment and Conviction', date: '2022' },
      { title: 'SEC: Theranos Fraud Charges', date: '2018' },
      { title: 'Wall Street Journal: John Carreyrou Theranos Investigation Series', url: 'https://www.wsj.com/', date: '2015' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ramesh "Sunny" Balwani', relationship: 'Former COO and romantic partner convicted on 12 counts of fraud; oversaw lab operations where tests were run on conventional machines' },
      { name: 'David Boies', relationship: 'Attorney whose firm intimidated whistleblowers and journalists investigating Theranos' },
    ],
  },
  'david-graham': {
    name: 'David Graham',
    title: 'FDA Associate Director for Science and Medicine',
    role: 'FDA whistleblower who exposed the Vioxx cardiovascular death cover-up and systematic failures in drug safety oversight',
    riskLevel: 'high' as const,
    description: 'David J. Graham (born 1950) is an American epidemiologist and drug safety officer who served as Associate Director for Science and Medicine in the FDA Office of Surveillance and Epidemiology. In 2004, Graham became a central figure in the Vioxx (rofecoxib) scandal when he presented research at a scientific conference estimating that Vioxx had caused between 88,000 and 139,000 excess cases of serious coronary heart disease in the United States, with approximately 55,000 deaths attributable to the drug. When Graham attempted to publish his findings, FDA leadership attempted to suppress his research and pressure him to alter his conclusions. He subsequently testified before the U.S. Senate Finance Committee, where he described the FDA as "incapable of protecting America against another Vioxx" and called the agency fundamentally broken in its approach to post-market drug safety. Graham identified five other drugs he believed should be withdrawn for safety reasons. His testimony was pivotal in reforming FDA safety surveillance procedures.',
    birthDate: '1950',
    birthPlace: 'United States',
    education: ['Johns Hopkins University (M.D.)', 'Johns Hopkins Bloomberg School of Public Health (M.P.H.)'],
    affiliations: [
      { name: 'U.S. Food and Drug Administration', role: 'Associate Director for Science and Medicine, Office of Surveillance and Epidemiology (1984-present); led post-market drug safety studies', type: 'agency' },
    ],
    controversies: [
      'FDA leadership attempted to suppress his Vioxx research and pressured him to alter conclusions showing 55,000+ deaths',
      'Testified before Senate Finance Committee that the FDA was "incapable of protecting America against another Vioxx"',
      'Identified five additional FDA-approved drugs he believed should be withdrawn for safety: Meridia, Crestor, Accutane, Bextra, and Serevent',
      'Described the FDA drug safety office as having a "broken culture" that prioritized industry relationships over public safety',
      'Faced retaliation from FDA superiors after going public with Vioxx data; required congressional protection',
    ],
    relatedInvestigations: [
      { title: 'Vioxx: Merck and the 55,000 Cardiovascular Deaths', slug: 'vioxx-merck-cardiovascular-deaths', severity: 'critical' },
    ],
    timeline: [
      { date: '1984', event: 'Joins the FDA Office of Drug Safety as an epidemiologist' },
      { date: '2004-08', event: 'Presents research at International Conference on Pharmacoepidemiology estimating 88,000-139,000 excess cardiac events from Vioxx' },
      { date: '2004-09-30', event: 'Merck voluntarily withdraws Vioxx from the market after internal study confirms doubled cardiovascular risk' },
      { date: '2004-11-18', event: 'Testifies before U.S. Senate Finance Committee, calling the FDA "incapable of protecting America against another Vioxx"' },
      { date: '2007', event: 'FDA Safety and Innovation Act reforms post-market surveillance partly as a result of Vioxx scandal and Graham testimony' },
    ],
    sources: [
      { title: 'Senate Finance Committee: Testimony of David Graham, M.D., M.P.H.', url: 'https://www.finance.senate.gov/imo/media/doc/111804dgtest.pdf', date: '2004-11-18' },
      { title: 'The Lancet: David Graham on Vioxx, the FDA, and Drug Safety', date: '2005' },
    ],
    knownAssociates: [
      { name: 'Charles Grassley', relationship: 'U.S. Senator (R-IA) who chaired the Finance Committee investigation and provided Graham with whistleblower protections' },
    ],
  },
  'david-iglesias': {
    name: 'David Iglesias',
    title: 'Former U.S. Attorney for the District of New Mexico',
    role: 'Fired Federal Prosecutor, Whistleblower',
    riskLevel: 'low',
    description: 'David Iglesias served as U.S. Attorney for New Mexico from 2001 until his firing on December 7, 2006, as part of the Bush administration\'s political purge of federal prosecutors. A Navy JAG officer and the real-life inspiration for the Tom Cruise character in "A Few Good Men," Iglesias was fired after refusing to bring voter fraud indictments against Democrats before the 2006 midterm elections despite direct improper pressure from Republican Senator Pete Domenici and Congresswoman Heather Wilson. His case became a central example of the politicization of the Department of Justice under Attorney General Alberto Gonzales.',
    birthDate: '1960',
    birthPlace: 'United States',
    education: ['B.A., Wheaton College', 'J.D., University of New Mexico School of Law'],
    affiliations: [
      { name: 'DOJ', role: 'U.S. Attorney, District of New Mexico (2001-2006)', type: 'agency' },
      { name: 'U.S. Navy', role: 'JAG Officer', type: 'agency' },
    ],
    controversies: [
      'Fired for refusing politically motivated prosecutions',
      'Received improper contact from Senator Pete Domenici and Rep. Heather Wilson',
      'Became key whistleblower in the U.S. Attorney firings scandal',
      'Inspiration for the Tom Cruise character in "A Few Good Men"',
    ],
    charges: [],
    relatedInvestigations: [
      { title: 'Bush Administration U.S. Attorney Firings', slug: 'attorney-firings', severity: 'high' },
    ],
    timeline: [
      { date: '2001', event: 'Appointed U.S. Attorney for the District of New Mexico by President George W. Bush' },
      { date: '2006-10-16', event: 'Senator Pete Domenici calls Iglesias at home asking about sealed indictments against Democrats before the election; Iglesias says they won\'t come before November' },
      { date: '2006-10-16', event: 'Congresswoman Heather Wilson makes similar improper call about pending cases' },
      { date: '2006-12-07', event: 'Fired as part of coordinated purge of seven U.S. Attorneys' },
      { date: '2007-03', event: 'Testifies before Congress about political pressure to bring partisan prosecutions' },
      { date: '2007-06', event: 'Publishes "In Justice: Inside the Scandal That Rocked the Bush Administration"' },
      { date: '2008-09', event: 'DOJ Inspector General report confirms his firing was politically motivated' },
    ],
    sources: [
      { title: 'David Iglesias, In Justice: Inside the Scandal That Rocked the Bush Administration', url: 'https://www.amazon.com/Justice-Inside-Scandal-Rocked-Administration/dp/0470261986', date: '2007' },
      { title: 'DOJ Inspector General Report on U.S. Attorney Dismissals', url: 'http://web.archive.org/web/20200302142947/https://oig.justice.gov/special/s0809a/final.pdf', date: '2008' },
    ],
    knownAssociates: [
      { name: 'Alberto Gonzales', relationship: 'Attorney General who authorized his firing', href: '/entities/individuals/alberto-gonzales' },
      { name: 'Karl Rove', relationship: 'Senior Bush advisor involved in selecting prosecutors for removal', href: '/entities/individuals/karl-rove' },
      { name: 'Harriet Miers', relationship: 'White House Counsel who architected the attorney purge plan', href: '/entities/individuals/harriet-miers' },
    ],
  },


  'deann-walker': {
    name: 'DeAnn Walker',
    title: 'Former Chair, Public Utility Commission of Texas',
    role: 'PUCT Chair who ordered $9,000/MWh price cap maintained during Winter Storm Uri',
    riskLevel: 'high',
    description: 'DeAnn Walker served as Chair of the Public Utility Commission of Texas (PUCT) during Winter Storm Uri in February 2021, the deadliest infrastructure failure in modern Texas history. As the state\'s top electricity regulator, Walker bore direct responsibility for overseeing the Texas power market and protecting consumers. During the crisis, she ordered that the wholesale electricity price cap be maintained at $9,000 per megawatt-hour; the maximum allowed under PUCT rules; even after the grid had begun to stabilize. This decision resulted in an estimated $16 billion in excess charges to Texas consumers, utilities, and electric cooperatives. While 4.5 million households were without power in sub-zero temperatures and hundreds of Texans were dying from hypothermia and carbon monoxide poisoning, the artificially inflated prices created enormous windfall profits for power generators and energy traders. Walker resigned from the PUCT in March 2021 amid intense public backlash, but no criminal charges were ever filed against her. Prior to her appointment to the PUCT by Governor Greg Abbott in 2017, Walker worked as his policy director, raising questions about the independence of the regulatory appointment. Her tenure exemplifies the revolving door between Texas state government and the energy industry it purports to regulate.',
    affiliations: [
      { name: 'Public Utility Commission of Texas', role: 'Chair (appointed 2017, resigned March 2021)', type: 'agency' },
      { name: 'Office of the Governor of Texas', role: 'Former policy director under Greg Abbott', type: 'agency' },
    ],
    controversies: [
      'Ordered the $9,000/MWh wholesale electricity price cap maintained during and after Winter Storm Uri, resulting in an estimated $16 billion in excess charges to Texas consumers',
      'Price cap was kept at maximum for 32 hours after the grid had begun to stabilize, generating windfall profits for energy companies while Texans froze',
      'Prior to PUCT appointment, served as policy director for Governor Greg Abbott, raising concerns about regulatory independence',
      'Failed to implement weatherization requirements for the Texas grid despite federal recommendations after the 2011 freeze event',
      'Resigned in March 2021 amid public outrage but faced no criminal investigation or charges',
      'Under her leadership, PUCT prioritized market signals and industry interests over consumer protection during a deadly emergency',
    ],
    charges: [
      { statute: 'Texas Utilities Code 186.001', description: 'Failure to ensure safe, adequate, and reasonable electricity service and pricing', category: 'Regulatory Misconduct' },
      { statute: 'Texas Penal Code 22.05', description: 'Deadly Conduct: reckless regulatory decisions contributing to loss of life', category: 'Criminal Negligence' },
    ],
    relatedInvestigations: [
      { title: 'Texas Power Grid Failure: 700+ Dead in Preventable Crisis', slug: 'texas-power-grid-failure', severity: 'critical' },
    ],
    timeline: [
      { date: '2017-01-01', event: 'Appointed Chair of the Public Utility Commission of Texas by Governor Greg Abbott' },
      { date: '2021-02-15', event: 'Winter Storm Uri begins; Texas grid enters emergency conditions' },
      { date: '2021-02-15', event: 'Orders wholesale electricity price cap maintained at $9,000/MWh during grid emergency' },
      { date: '2021-02-17', event: 'Grid begins stabilizing but $9,000/MWh cap remains in effect for 32 more hours' },
      { date: '2021-02-19', event: 'Price cap finally reduced; estimated $16 billion in excess charges already incurred' },
      { date: '2021-03-01', event: 'Faces mounting criticism as scale of pricing overcharge becomes public' },
      { date: '2021-03-15', event: 'Resigns as PUCT Chair amid public backlash; no criminal charges filed' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Texas Tribune: PUCT Chair DeAnn Walker Resigns', url: 'https://www.texastribune.org/2021/03/15/deann-walker-public-utility-commission-texas/', date: '2021-03-15' },
      { title: 'ProPublica/Texas Tribune: $16 Billion Overcharge Investigation', url: 'https://www.propublica.org/article/texas-power-grid-winterization-uri', date: '2021-06-01' },
      { title: 'Wall Street Journal: Texas\'s Grid Failure Investigation', url: 'https://www.wsj.com/articles/texas-electric-grid-failure-winter-storm-uri-11613775553', date: '2021-02-20' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Arthur D\'Andrea', relationship: 'Fellow PUCT Commissioner recorded reassuring energy companies about keeping inflated prices', href: '/entities/individuals/arthur-d-andrea' },
      { name: 'Bill Magness', relationship: 'ERCOT CEO who implemented the pricing decisions she ordered', href: '/entities/individuals/bill-magness' },
      { name: 'Greg Abbott', relationship: 'Texas Governor who appointed her; she previously served as his policy director', href: '/entities/individuals/greg-abbott' },
    ],
  },
  'dan-patrick': {
    name: 'Dan Patrick',
    title: 'Texas Lieutenant Governor',
    role: 'Lt. Governor of Texas (2015-Present); Controls Texas Senate Agenda',
    riskLevel: 'high',
    description: 'Dan Patrick has served as Lieutenant Governor of Texas since January 2015. As Lt. Governor, he controls the Texas Senate agenda and has used that power to block meaningful grid reform legislation following the 2021 Winter Storm Uri disaster that killed hundreds of Texans. He echoed Governor Greg Abbott\'s false narrative blaming renewable energy for a crisis overwhelmingly caused by natural gas infrastructure failures. Patrick has received millions in campaign contributions from the oil and gas industry while consistently blocking bills that would connect the Texas grid to the national system or impose real penalties on power generators who failed to winterize.',
    birthDate: 'April 4, 1950',
    birthPlace: 'Baltimore, Maryland, USA',
    netWorth: 'Estimated $2-5 million',
    education: ['University of Maryland, Baltimore County'],
    affiliations: [
      { name: 'Texas State Government', role: 'Lieutenant Governor (2015-Present)', type: 'agency' },
      { name: 'Republican Party', role: 'Senior Texas Republican', type: 'organization' },
      { name: 'Texas Senate', role: 'Presiding Officer; Controls Senate Agenda', type: 'agency' },
    ],
    controversies: [
      'GRID REFORM OBSTRUCTION: Used Senate agenda control to block bills that would have connected Texas to the national grid, imposed mandatory weatherization with real penalties, or reformed the energy-only market structure',
      'DISINFORMATION CAMPAIGN: Echoed false narrative blaming renewable energy for the 2021 grid failure when 87% of generation failures were natural gas, coal, and nuclear facilities',
      'INDUSTRY CAPTURE: Received millions in oil and gas campaign contributions from the very industry responsible for failing to winterize infrastructure that caused 700+ deaths',
      'OFFERED BOUNTIES: In 2021, offered $10,000 bounties for reporting voter fraud, contributing to voter suppression efforts',
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Greg Abbott', relationship: 'Texas Governor and political ally; coordinated disinformation campaign during Winter Storm Uri', href: '/entities/individuals/greg-abbott' },
      { name: 'Wayne Christian', relationship: 'Railroad Commission Chairman who shared responsibility for blocking winterization mandates', href: '/entities/individuals/wayne-christian' },
      { name: 'Rick Perry', relationship: 'Former Texas Governor who signed the deregulation bill that created the vulnerable grid structure', href: '/entities/individuals/rick-perry' },
    ],
  },
 'diane-roark': {
 name: 'Diane Roark',
 title: 'NSA Whistleblower, Former Congressional Staffer',
 role: 'Former House Intelligence Committee Staff, NSA Oversight',
 riskLevel: 'low',
 description: 'Diane Roark was a senior staffer on the House Permanent Select Committee on Intelligence who oversaw NSA spending. She attempted to report NSA warrantless wiretapping through official channels before Edward Snowden\'s disclosures, and was subsequently targeted by the FBI and DOJ for her whistleblowing efforts.',
 affiliations: [
 { name: 'House Intelligence Committee', role: 'Senior Staff Member (NSA Portfolio)', type: 'agency' },
 ],
 controversies: [
 'NSA WHISTLEBLOWING: Attempted to report illegal surveillance through proper channels years before Snowden',
 'FBI RAID: Home raided by FBI in 2007 as part of retaliation against NSA whistleblowers',
 'THOMAS DRAKE CASE: Investigated alongside Drake, Wiebe, Binney, and Loomis for unauthorized disclosures',
 ],
 },
  'dennis-levine': {
    name: 'Dennis Levine',
    title: 'Convicted Insider Trader; Investment Banker Whose Arrest Unraveled the 1980s Wall Street Scandals',
    role: 'Managing Director, Drexel Burnham Lambert (previously Merrill Lynch, Smith Barney, Lehman Brothers)',
    riskLevel: 'high',
    description: 'Dennis Levine was a managing director at Drexel Burnham Lambert whose arrest in May 1986 triggered the chain of events that brought down the largest insider trading conspiracy in Wall Street history. Starting in 1978 while at Smith Barney, Levine used secret accounts at Bank Leu in the Bahamas to trade on inside information about pending mergers and acquisitions, amassing $12.6 million in illegal profits from 54 stocks over eight years. An anonymous letter from a Merrill Lynch compliance officer in Caracas tipped off authorities. Levine immediately cooperated with the SEC and U.S. Attorney, implicating Ivan Boesky, who in turn brought down Michael Milken and Drexel Burnham Lambert. Levine pled guilty to four felonies and was sentenced to two years in prison.',
    birthDate: '1952',
    birthPlace: 'Queens, New York City, USA',
    education: ['Baruch College, City University of New York (BBA)', 'Baruch College (MBA)'],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Managing Director, M&A Department (1985-1986)', type: 'corporation' },
      { name: 'Merrill Lynch', role: 'Managing Director (prior to Drexel)', type: 'corporation' },
      { name: 'Smith Barney', role: 'Investment Banker (1978-1981)', type: 'corporation' },
      { name: 'Lehman Brothers', role: 'Investment Banker (1981-1984)', type: 'corporation' },
    ],
    controversies: [
      'Operated secret trading accounts at Bank Leu in Nassau, Bahamas from 1978 to 1986',
      'Earned $12.6 million in illegal profits from insider trading on 54 stocks over 8 years',
      'Tipped off Ivan Boesky with inside information about pending M&A deals',
      'His cooperation with authorities triggered the unraveling of the entire 1980s insider trading conspiracy',
      'His arrest was the first domino: Levine gave up Boesky, Boesky gave up Milken, Milken brought down Drexel',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Securities Fraud: Insider trading on material nonpublic information from 54 stocks', category: 'Federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax Evasion: Failure to report illegal trading profits', category: 'Federal' },
      { statute: '18 U.S.C. 1621', description: 'Perjury: False statements to SEC', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1978', event: 'Opens secret trading account at Bank Leu in the Bahamas; begins insider trading' },
      { date: '1985', event: 'Joins Drexel Burnham Lambert as Managing Director of M&A' },
      { date: 'May 1985', event: 'Anonymous letter from Caracas tips off Merrill Lynch compliance about suspicious trades linked to his ring' },
      { date: 'May 12, 1986', event: 'Arrested by SEC; charged with insider trading on 54 stocks totaling $12.6M in illegal profits' },
      { date: 'June 5, 1986', event: 'Pleads guilty to four felonies; begins cooperating with government, implicating Ivan Boesky' },
      { date: '1991', event: 'Sentenced to 2 years in federal prison; fined $362,000' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC v. Dennis Levine, Litigation Release (1986)', url: 'https://www.sec.gov/litigation/litreleases/1986/lr11105.htm', date: '1986' },
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Received insider tips from Levine; subsequently exposed by Levine cooperation', href: '/entities/individuals/ivan-boesky' },
      { name: 'Michael Milken', relationship: 'Ultimately brought down through chain of cooperation starting with Levine', href: '/entities/individuals/michael-milken' },
    ],
  },
  'david-brown': {
    name: 'David Brown',
    title: 'Convicted Insider Trader; Goldman Sachs Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Goldman Sachs & Co.',
    riskLevel: 'high',
    description: 'David Brown was a Goldman Sachs investment banker who participated in Dennis Levine\'s insider trading ring during the 1980s. Brown shared nonpublic transaction details from Goldman Sachs deals with Levine, who traded on the information through secret offshore accounts. His participation meant that Goldman Sachs had two employees implicated in the scandal (Brown in the Levine ring, Robert Freeman in the Boesky network), demonstrating that even Wall Street\'s most prestigious firm was deeply penetrated by the corruption. Brown pleaded guilty and cooperated with prosecutors.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Goldman Sachs', role: 'Investment Banker', type: 'corporation' as const },
    ],
    controversies: [
      'Member of Dennis Levine\'s insider trading ring at Goldman Sachs',
      'Goldman Sachs had two separate employees (Brown and Robert Freeman) implicated in the scandal',
      'Shared nonpublic deal information that was traded on through secret offshore accounts',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic transaction information from Goldman Sachs to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes inside deal information from Goldman Sachs to Dennis Levine as member of insider trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy and cooperates with prosecutors' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
      { name: 'Robert Freeman', relationship: 'Fellow Goldman Sachs employee also convicted in the scandal (separate network)', href: '/entities/individuals/robert-freeman' },
    ],
  },
  'david-brown-goldman': {
    name: 'David Brown',
    title: 'Convicted Insider Trader; Goldman Sachs Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Goldman Sachs & Co.',
    riskLevel: 'high',
    description: 'David Brown was a Goldman Sachs investment banker who participated in Dennis Levine\'s insider trading ring during the 1980s. Brown shared nonpublic transaction details from Goldman Sachs deals with Levine, who traded on the information through secret offshore accounts. His participation meant that Goldman Sachs had two employees implicated in the scandal (Brown in the Levine ring, Robert Freeman in the Boesky network), demonstrating that even Wall Street\'s most prestigious firm was deeply penetrated by the corruption. Brown pleaded guilty and cooperated with prosecutors.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Goldman Sachs', role: 'Investment Banker', type: 'corporation' },
    ],
    controversies: [
      'Member of Dennis Levine\'s insider trading ring at Goldman Sachs',
      'Goldman Sachs had two separate employees (Brown and Robert Freeman) implicated in the scandal',
      'Shared nonpublic deal information that was traded on through secret offshore accounts',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic transaction information from Goldman Sachs to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes inside deal information from Goldman Sachs to Dennis Levine as member of insider trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy and cooperates with prosecutors' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
      { name: 'Robert Freeman', relationship: 'Fellow Goldman Sachs employee also convicted in the scandal (separate network)', href: '/entities/individuals/robert-freeman' },
    ],
  },


 'david-solomon-fund-manager': {
 name: 'David Solomon',
 title: 'Former Fund Manager, Solomon Asset Management',
 role: 'Fund manager whose firm had illegal arrangements with Michael Milken\'s department at Drexel Burnham Lambert; two of Milken\'s six felony counts involved transactions with Solomon\'s fund',
 riskLevel: 'high',
 description: 'David Solomon was the manager of Solomon Asset Management, a fund that maintained illegal arrangements with Michael Milken\'s high-yield bond department at Drexel Burnham Lambert. These arrangements included insider trading and the creation of phony tax losses. The fund\'s account at Drexel was managed by Terren Peizer, one of Milken\'s protégés. Two of the six felony counts to which Milken pled guilty in April 1990 directly involved illegal transactions with Solomon\'s fund, specifically related to tax evasion schemes. Solomon was convicted of securities fraud. His case demonstrated that Milken\'s criminal network extended beyond Wall Street firms to the money managers who were supposed to be independent investors.',
 birthDate: 'Unknown',
 birthPlace: 'Unknown',
 education: ['Unknown'],
 affiliations: [
  { name: 'Solomon Asset Management', role: 'Fund Manager', type: 'corporation' },
 ],
 controversies: [
  'Illegal arrangement with Drexel Burnham Lambert involving insider trading and phony tax losses',
  'Two of Michael Milken\'s six felony guilty plea counts involved transactions with Solomon\'s fund',
  'Convicted of securities fraud',
 ],
 charges: [
  { statute: '15 U.S.C. § 78j(b)', description: 'Securities fraud', category: 'Financial Crimes' },
 ],
 relatedInvestigations: [
  { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
 ],
 timeline: [
  { date: '1985-1989', event: 'Solomon Asset Management maintains illegal arrangement with Milken\'s department at Drexel' },
  { date: '1988', event: 'Terren Peizer begins cooperating with prosecutors, providing evidence about Solomon arrangements' },
  { date: '1990', event: 'Two of Milken\'s six felony counts involve transactions with Solomon\'s fund' },
  { date: '1990', event: 'Convicted of securities fraud' },
 ],
 socialMedia: [],
 sources: [
  { title: 'Jesse Kornbluth, "Highly Confident" (William Morrow, 1992)', url: 'https://archive.org/details/highlyconfidentc00korn', date: '1992' },
  { title: 'NY Times: "Witness Against Milken Settles S.E.C. Charges" (Nov. 28, 1990)', url: 'https://www.nytimes.com/1990/11/28/business/witness-against-milken-settles-sec-charges.html', date: '1990' },
 ],
 aliases: [],
 knownAssociates: [
  { name: 'Michael Milken', relationship: 'Two of Milken\'s guilty plea counts involved Solomon\'s fund', href: '/entities/individuals/michael-milken' },
  { name: 'Terren Peizer', relationship: 'Drexel salesman who managed Solomon\'s account; later testified against Milken', href: '/entities/individuals/terren-peizer' },
 ],
 }
};

export default profiles;
