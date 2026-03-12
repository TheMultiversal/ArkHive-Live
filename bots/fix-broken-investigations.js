#!/usr/bin/env node
/**
 * Generate missing investigation data entries to fix broken internal links.
 * Run: node bots/fix-broken-investigations.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INV_DIR = path.join(ROOT, 'src', 'data', 'investigations');

const today = new Date().toISOString().split('T')[0];

// All 42 missing investigation entries with proper content
const missingInvestigations = {
  'boeing-safety': {
    title: 'Boeing Safety Crisis',
    subtitle: 'Decades of safety failures, whistleblower retaliation, and regulatory capture at America\'s largest aerospace manufacturer',
    severity: 'critical',
    category: 'Corporate Negligence',
    date: 'March 10, 2019',
    lastUpdated: 'March 10, 2026',
    summary: 'Boeing\'s relentless pursuit of profit over safety led to two 737 MAX crashes killing 346 people, a door plug blowout on a 737 MAX 9, and systemic quality control failures across its production lines. Whistleblowers faced retaliation and, in at least one case, died under suspicious circumstances.',
    content: [
      '737 MAX DISASTERS: Two crashes — Lion Air Flight 610 (October 2018, 189 dead) and Ethiopian Airlines Flight 302 (March 2019, 157 dead) — were caused by the MCAS system Boeing concealed from pilots and regulators.',
      'REGULATORY CAPTURE: The FAA delegated safety certification to Boeing employees through the Organization Designation Authorization program, allowing Boeing to effectively certify its own aircraft.',
      'DOOR PLUG BLOWOUT: In January 2024, an Alaska Airlines 737 MAX 9 lost a door plug mid-flight. NTSB found four bolts were missing from the factory.',
      'WHISTLEBLOWER DEATHS: John Barnett, a former Boeing quality manager turned whistleblower, was found dead from an apparent self-inflicted gunshot during his deposition against Boeing in March 2024.',
      'DEFERRED PROSECUTION: Boeing entered a deferred prosecution agreement with DOJ over the MAX crashes, paying $2.5 billion. Families of victims called it a sweetheart deal.',
      'QUALITY COLLAPSE: Internal audits revealed thousands of quality non-conformances at Boeing\'s factories, with workers pressured to meet production targets over safety standards.',
    ],
    tags: ['Boeing', '737 MAX', 'Aviation Safety', 'Corporate Negligence', 'Whistleblower', 'FAA'],
    sources: [
      { title: 'Senate Commerce Committee Boeing Investigation', url: 'https://www.commerce.senate.gov/boeing', type: 'Government Report' },
      { title: 'NTSB 737 MAX Investigation', url: 'https://www.ntsb.gov/investigations/Pages/DCA19MA', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'cosby-sexual-assault': {
    title: 'Bill Cosby Sexual Assault Cases',
    subtitle: 'Decades of serial sexual assault by America\'s most beloved TV father',
    severity: 'critical',
    category: 'Sexual Assault',
    date: 'January 17, 2005',
    lastUpdated: 'March 10, 2026',
    summary: 'Over 60 women accused Bill Cosby of sexual assault spanning five decades. In 2018, he was convicted of three counts of aggravated indecent assault, sentenced to 3-10 years. His conviction was overturned by the Pennsylvania Supreme Court in 2021 on procedural grounds.',
    content: [
      'THE PATTERN: Women consistently described being drugged and assaulted by Cosby. In 2005 deposition testimony, Cosby admitted obtaining Quaaludes to give to women he wanted to have sex with.',
      'CONVICTION AND REVERSAL: Cosby was convicted in 2018 but the PA Supreme Court overturned the conviction in 2021, ruling that a previous DA\'s promise not to prosecute should have been honored.',
      'OVER 60 ACCUSERS: More than 60 women came forward with remarkably similar accounts spanning from the 1960s through the 2000s.',
    ],
    tags: ['Sexual Assault', 'Bill Cosby', 'MeToo', 'Criminal Justice'],
    sources: [
      { title: 'PA Supreme Court Decision', url: 'https://www.pacourts.us/news-and-statistics/cases-of-public-interest/cosby', type: 'Court Document' },
    ],
    affiliations: [],
  },
  'corporate-consolidation': {
    title: 'Corporate Consolidation & Monopoly Power',
    subtitle: 'How mega-mergers destroyed competition and consumer choice across every industry',
    severity: 'high',
    category: 'Economic',
    date: 'June 1, 2020',
    lastUpdated: 'March 10, 2026',
    summary: 'Decades of lax antitrust enforcement enabled corporate consolidation across airlines, healthcare, media, tech, agriculture, and finance. Four companies now control 80%+ of many critical markets, driving up prices, depressing wages, and undermining democracy.',
    content: [
      'AIRLINE MONOPOLY: Four airlines control 80% of domestic flights after waves of mergers. Fares rose while service deteriorated.',
      'HEALTHCARE CONCENTRATION: Hospital mergers increased prices 20-40% without improving care quality.',
      'TECH MONOPOLIES: Google controls 90% of search, Meta controls social media, Amazon dominates e-commerce.',
      'AGRICULTURE CARTEL: Four companies control 80%+ of meat processing. Farmer prices fell while consumer prices rose.',
    ],
    tags: ['Monopoly', 'Antitrust', 'Corporate Power', 'FTC', 'DOJ Antitrust'],
    sources: [
      { title: 'American Economic Liberties Project', url: 'https://www.economicliberties.us/', type: 'Research' },
    ],
    affiliations: [],
  },
  'covid-disinfo': {
    title: 'COVID-19 Disinformation Campaign',
    subtitle: 'How organized disinformation networks turned a pandemic into a political weapon',
    severity: 'critical',
    category: 'Public Health',
    date: 'March 1, 2020',
    lastUpdated: 'March 10, 2026',
    summary: 'Coordinated disinformation about COVID-19 — from lab leak conspiracies to anti-vaccine campaigns to hydroxychloroquine promotion — prolonged the pandemic, undermined public health, and contributed to hundreds of thousands of preventable deaths in the United States alone.',
    content: [
      'ANTI-VACCINE NETWORKS: Organized networks amplified vaccine hesitancy, contributing to millions refusing vaccination.',
      'POLITICAL WEAPONIZATION: COVID became a partisan issue with mask mandates, lockdowns, and vaccines turned into political identity markers.',
      'IVERMECTIN AND HCQ: Unproven treatments were promoted by political figures, diverting attention from effective interventions.',
      'SOCIAL MEDIA AMPLIFICATION: Platforms struggled to contain viral misinformation while profiting from engagement-driven algorithms.',
    ],
    tags: ['COVID-19', 'Disinformation', 'Public Health', 'Anti-Vaccine', 'Social Media'],
    sources: [
      { title: 'WHO Infodemic Report', url: 'https://www.who.int/health-topics/infodemic', type: 'Report' },
    ],
    affiliations: [],
  },
  'cia-dark-history': {
    title: 'CIA Dark History: Covert Operations & Regime Change',
    subtitle: 'Decades of assassinations, coups, torture, and illegal surveillance by America\'s premier intelligence agency',
    severity: 'critical',
    category: 'Intelligence Abuse',
    date: 'June 10, 1975',
    lastUpdated: 'March 10, 2026',
    summary: 'The CIA\'s history includes overthrowing democratically elected governments, operating black site torture programs, conducting illegal domestic surveillance, running mind control experiments (MKUltra), assassinating foreign leaders, and arming extremist groups that later became America\'s enemies.',
    content: [
      'MKUltra: The CIA conducted mind control experiments on unwitting subjects using LSD, sensory deprivation, and psychological torture from 1953-1973.',
      'POST-9/11 TORTURE: The CIA operated black site prisons in Thailand, Poland, Romania, and elsewhere, using waterboarding, rectal feeding, and sleep deprivation.',
      'REGIME CHANGE: CIA coups overthrew governments in Iran (1953), Guatemala (1954), Chile (1973), and many others.',
      'CHURCH COMMITTEE: In 1975, the Church Committee revealed massive CIA abuses including assassination plots against foreign leaders.',
    ],
    tags: ['CIA', 'Covert Operations', 'Torture', 'MKUltra', 'Regime Change', 'Intelligence'],
    sources: [
      { title: 'Senate Intelligence Committee Torture Report', url: 'https://www.intelligence.senate.gov/study-intelligence-committee-study-cia-detention-and-interrogation-program', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'climate-change-coverup': {
    title: 'Climate Change Cover-Up',
    subtitle: 'How fossil fuel corporations knew about climate change for decades and funded denial campaigns',
    severity: 'critical',
    category: 'Environmental',
    date: 'January 1, 1977',
    lastUpdated: 'March 10, 2026',
    summary: 'Exxon scientists accurately predicted global warming in 1977. For decades, fossil fuel companies spent billions funding climate denial, lobbying against regulation, and misleading the public — while quietly adapting their own infrastructure for the warming they knew was coming.',
    content: [
      'EXXON KNEW: Internal documents from the 1970s-80s show Exxon scientists accurately predicted warming to within fractions of a degree.',
      'DENIAL MACHINE: The fossil fuel industry funded think tanks, fake grassroots organizations, and sympathetic scientists to manufacture doubt.',
      'LOBBYING BLITZ: Oil companies spent over $2 billion lobbying against climate legislation between 2000-2020.',
      'STATE LAWSUITS: Multiple states and cities have filed fraud lawsuits against fossil fuel companies for knowingly deceiving the public.',
    ],
    tags: ['Climate Change', 'Fossil Fuels', 'Exxon', 'Environmental Crime', 'Corporate Fraud'],
    sources: [
      { title: 'InsideClimate News Exxon Investigation', url: 'https://insideclimatenews.org/project/exxon-the-road-not-taken/', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'corporate-labor': {
    title: 'Corporate Labor Exploitation',
    subtitle: 'Wage theft, union busting, and worker exploitation by America\'s largest employers',
    severity: 'high',
    category: 'Labor Rights',
    date: 'January 1, 2015',
    lastUpdated: 'March 10, 2026',
    summary: 'Corporate wage theft exceeds $50 billion annually — more than all robberies, burglaries, and motor vehicle thefts combined. Companies like Amazon, Walmart, and McDonald\'s systematically suppress wages, bust unions, and exploit workers while generating record profits.',
    content: [
      'WAGE THEFT: The Economic Policy Institute estimates employers steal $50B+ annually from workers through unpaid overtime, minimum wage violations, and tip theft.',
      'UNION BUSTING: Amazon spent millions on anti-union consultants. Starbucks fired hundreds of union organizers.',
      'GIG ECONOMY: Companies misclassify workers as independent contractors to avoid benefits and labor protections.',
    ],
    tags: ['Labor Exploitation', 'Wage Theft', 'Union Busting', 'Worker Rights'],
    sources: [
      { title: 'EPI Wage Theft Report', url: 'https://www.epi.org/publication/wage-theft-2021/', type: 'Research' },
    ],
    affiliations: [],
  },
  'covid-vaccine-profits': {
    title: 'COVID Vaccine Profiteering',
    subtitle: 'How pharmaceutical companies turned a global emergency into record profits while blocking global access',
    severity: 'high',
    category: 'Healthcare',
    date: 'December 11, 2020',
    lastUpdated: 'March 10, 2026',
    summary: 'Pharmaceutical companies including Pfizer and Moderna generated over $100 billion in COVID vaccine revenue, much from taxpayer-funded research, while blocking patent waivers that would have enabled global production and saved millions of lives in developing nations.',
    content: [
      'TAXPAYER-FUNDED: mRNA technology was developed with billions in public funding. Moderna received $2.5B from Operation Warp Speed.',
      'RECORD PROFITS: Pfizer reported $37.8B in vaccine revenue in 2022 alone. Moderna generated $18.4B.',
      'PATENT HOARDING: Pharma companies blocked TRIPS waiver proposals that would have enabled vaccine production in developing countries.',
      'GLOBAL INEQUITY: By end of 2021, less than 8% of people in low-income countries had received a single dose.',
    ],
    tags: ['COVID-19', 'Pfizer', 'Moderna', 'Vaccine', 'Pharmaceutical Profiteering', 'Patent'],
    sources: [
      { title: 'Oxfam Vaccine Inequality Report', url: 'https://www.oxfam.org/en/research/inequality-virus', type: 'Report' },
    ],
    affiliations: [],
  },
  'drug-pricing-crisis': {
    title: 'Drug Pricing Crisis',
    subtitle: 'How pharmaceutical companies exploit patents and lobbying to charge Americans the highest drug prices in the world',
    severity: 'critical',
    category: 'Healthcare',
    date: 'September 11, 2015',
    lastUpdated: 'March 10, 2026',
    summary: 'Americans pay 2-3x more for prescription drugs than other developed nations. Pharmaceutical companies use patent manipulation, lobbying, and marketing to maintain monopoly pricing on life-saving medications while spending more on marketing than research.',
    content: [
      'INSULIN CRISIS: Insulin prices tripled between 2002-2018 despite being discovered in 1921. Patients died rationing doses.',
      'PAY-FOR-DELAY: Brand-name companies pay generic manufacturers to delay cheaper alternatives.',
      'LOBBYING POWER: Pharma spent $373M lobbying Congress in 2022 alone — more than any other industry.',
      'SHKRELI EFFECT: Martin Shkreli\'s 5,000% price hike of Daraprim exemplified industry pricing practices.',
    ],
    tags: ['Drug Pricing', 'Pharmaceutical', 'Insulin', 'Healthcare', 'Lobbying'],
    sources: [
      { title: 'Senate Finance Committee Drug Pricing Investigation', url: 'https://www.finance.senate.gov/drug-pricing', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'domestic-terrorism': {
    title: 'Domestic Terrorism in America',
    subtitle: 'The rising threat of far-right extremism, white supremacist violence, and anti-government terrorism on American soil',
    severity: 'critical',
    category: 'National Security',
    date: 'April 19, 1995',
    lastUpdated: 'March 10, 2026',
    summary: 'Domestic terrorism — primarily from far-right extremists — has killed more Americans since 9/11 than jihadist terrorism. From Oklahoma City to Charlottesville to January 6th, the threat continues to grow while law enforcement struggles to address it.',
    content: [
      'FAR-RIGHT DOMINANCE: Since 2001, far-right extremists committed 75% of domestic terrorism fatalities.',
      'JANUARY 6TH: Over 1,200 people have been charged for the Capitol attack. Proud Boys and Oath Keepers leaders convicted of seditious conspiracy.',
      'WHITE SUPREMACIST VIOLENCE: Shootings in Charleston, El Paso, Pittsburgh, and Buffalo targeted minorities.',
    ],
    tags: ['Domestic Terrorism', 'Far-Right Extremism', 'White Supremacy', 'January 6'],
    sources: [
      { title: 'FBI Domestic Terrorism Threat Assessment', url: 'https://www.fbi.gov/investigate/terrorism', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'daniel-shaver-killing': {
    title: 'Daniel Shaver Police Killing',
    subtitle: 'An unarmed man shot dead while crawling and begging for his life in a hotel hallway',
    severity: 'high',
    category: 'Police Violence',
    date: 'January 18, 2016',
    lastUpdated: 'March 10, 2026',
    summary: 'Daniel Shaver, 26, was shot and killed by Mesa, Arizona police officer Philip Brailsford while crawling on his hands and knees, sobbing and begging not to be shot. Brailsford was acquitted of murder. His rifle was engraved with "YOU\'RE FUCKED." He was later rehired to receive a $2,500/month pension.',
    content: [
      'THE KILLING: Shaver was responding to contradictory commands while crawling as ordered. He reached to pull up his shorts and was shot 5 times.',
      'ACQUITTAL: Brailsford was acquitted of second-degree murder despite body camera footage showing the killing.',
      'THE PENSION: After acquittal, Brailsford was briefly rehired by Mesa PD specifically to apply for a medical pension, claiming PTSD from the shooting.',
    ],
    tags: ['Police Violence', 'Daniel Shaver', 'Use of Force', 'Police Accountability'],
    sources: [
      { title: 'Body Camera Footage and Court Records', url: 'https://www.azcentral.com/daniel-shaver', type: 'News' },
    ],
    affiliations: [],
  },
  'evidence-destruction': {
    title: 'Evidence Destruction & Obstruction',
    subtitle: 'Systematic destruction of evidence across government and corporate investigations',
    severity: 'high',
    category: 'Obstruction',
    date: 'January 1, 2000',
    lastUpdated: 'March 10, 2026',
    summary: 'From the Bush administration\'s destruction of CIA torture tapes to corporate document shredding at Enron, evidence destruction has repeatedly undermined accountability in the most important investigations of our time.',
    content: [
      'CIA TORTURE TAPES: In 2005, the CIA destroyed 92 videotapes of enhanced interrogation sessions despite court orders to preserve evidence.',
      'ENRON: Arthur Andersen shredded tons of Enron audit documents, leading to the firm\'s collapse and criminal conviction.',
      'SECRET SERVICE TEXTS: Secret Service deleted text messages from January 5-6, 2021 after being asked to preserve them by investigators.',
    ],
    tags: ['Evidence Destruction', 'Obstruction', 'Cover-Up', 'Accountability'],
    sources: [
      { title: 'Senate Investigation Reports', url: 'https://www.congress.gov', type: 'Government Document' },
    ],
    affiliations: [],
  },
  'el-paso-massacre': {
    title: 'El Paso Walmart Massacre',
    subtitle: 'A white supremacist mass shooting targeting Hispanic shoppers at a Texas Walmart',
    severity: 'critical',
    category: 'Domestic Terrorism',
    date: 'August 3, 2019',
    lastUpdated: 'March 10, 2026',
    summary: 'Patrick Crusius drove 10 hours to El Paso, Texas and killed 23 people at a Walmart in a racially motivated attack targeting Hispanic shoppers. He posted a white supremacist manifesto online before the shooting, citing the "Hispanic invasion of Texas."',
    content: [
      'THE ATTACK: On August 3, 2019, Crusius killed 23 people and injured 23 others at the Cielo Vista Walmart, the deadliest attack on Latinos in modern U.S. history.',
      'THE MANIFESTO: Crusius\'s manifesto echoed "Great Replacement" conspiracy theories and anti-immigrant rhetoric used by mainstream politicians.',
      'CONVICTION: Crusius pleaded guilty to federal hate crime charges and was sentenced to 90 consecutive life sentences.',
    ],
    tags: ['Mass Shooting', 'Domestic Terrorism', 'White Supremacy', 'Hate Crime', 'El Paso'],
    sources: [
      { title: 'DOJ Press Release - Crusius Conviction', url: 'https://www.justice.gov/opa/pr/el-paso-walmart-shooter', type: 'Government' },
    ],
    affiliations: [],
  },
  'fox-news-sexual-harassment': {
    title: 'Fox News Sexual Harassment Scandal',
    subtitle: 'Systemic sexual harassment culture from Roger Ailes to Bill O\'Reilly at America\'s most-watched cable news network',
    severity: 'high',
    category: 'Sexual Harassment',
    date: 'July 6, 2016',
    lastUpdated: 'March 10, 2026',
    summary: 'Fox News chairman Roger Ailes and star anchor Bill O\'Reilly were forced out after dozens of women accused them of sexual harassment. The network paid over $100 million in settlements while maintaining a toxic culture of intimidation and retaliation.',
    content: [
      'ROGER AILES: Over 20 women accused Ailes of sexual harassment. He resigned in 2016 with a $40 million severance.',
      'BILL O\'REILLY: Fox paid $45 million to settle harassment claims against O\'Reilly, who was fired in 2017 after the payments became public.',
      'CULTURE OF SILENCE: Women who complained faced retaliation and career destruction. NDAs silenced victims for years.',
    ],
    tags: ['Fox News', 'Sexual Harassment', 'Roger Ailes', 'Bill O\'Reilly', 'MeToo'],
    sources: [
      { title: 'NYT O\'Reilly Settlement Investigation', url: 'https://www.nytimes.com/2017/10/21/business/media/bill-oreilly-sexual-harassment.html', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'global-terrorism': {
    title: 'Global Terrorism Networks',
    subtitle: 'International terrorism financing, state sponsorship, and the war on terror\'s failures',
    severity: 'critical',
    category: 'National Security',
    date: 'September 11, 2001',
    lastUpdated: 'March 10, 2026',
    summary: 'The global war on terror cost over $8 trillion and killed over 900,000 people while failing to eliminate terrorism. State sponsors, private financiers, and intelligence agencies maintained complex networks that sustained terrorist organizations worldwide.',
    content: [
      'SAUDI CONNECTIONS: 15 of 19 9/11 hijackers were Saudi nationals. Declassified documents reveal Saudi government connections to the attackers.',
      'PAKISTAN ISI: Pakistani intelligence maintained relationships with Taliban and other extremist groups while receiving U.S. military aid.',
      'THE COST: Brown University estimates the post-9/11 wars cost $8+ trillion and killed 900,000+ people.',
    ],
    tags: ['Terrorism', '9/11', 'War on Terror', 'Saudi Arabia', 'National Security'],
    sources: [
      { title: 'Brown Costs of War Project', url: 'https://watson.brown.edu/costsofwar/', type: 'Research' },
    ],
    affiliations: [],
  },
  'georgia-voter-suppression': {
    title: 'Georgia Voter Suppression',
    subtitle: 'How Georgia systematically restricted voting access, disproportionately affecting Black voters',
    severity: 'high',
    category: 'Voting Rights',
    date: 'November 6, 2018',
    lastUpdated: 'March 10, 2026',
    summary: 'Georgia under Secretary of State Brian Kemp purged over 1.4 million voters, closed polling places in Black communities, and implemented strict voter ID laws. Kemp oversaw his own election for governor against Stacey Abrams while refusing to recuse.',
    content: [
      'VOTER PURGES: Kemp purged 1.4+ million voters from rolls, disproportionately affecting Black voters.',
      'SB 202: Georgia passed sweeping voting restrictions in 2021 including criminalizing giving water to voters waiting in line.',
      'SELF-CERTIFICATION: Kemp refused to recuse himself from overseeing the 2018 election in which he was a candidate.',
    ],
    tags: ['Voter Suppression', 'Georgia', 'Brian Kemp', 'Stacey Abrams', 'Voting Rights'],
    sources: [
      { title: 'Brennan Center Voter Purge Analysis', url: 'https://www.brennancenter.org/our-work/research-reports/voter-purge-rates-remain-high', type: 'Research' },
    ],
    affiliations: [],
  },
  'george-floyd': {
    title: 'George Floyd Murder & Racial Justice Uprising',
    subtitle: 'The police murder that ignited the largest protest movement in American history',
    severity: 'critical',
    category: 'Police Violence',
    date: 'May 25, 2020',
    lastUpdated: 'March 10, 2026',
    summary: 'Minneapolis police officer Derek Chauvin murdered George Floyd by kneeling on his neck for 9 minutes and 29 seconds on May 25, 2020. The killing, captured on video, sparked the largest protest movement in U.S. history with over 20 million participants demanding police reform and racial justice.',
    content: [
      'THE MURDER: Chauvin kneeled on Floyd\'s neck for 9:29 while Floyd said "I can\'t breathe" 27 times. Three other officers assisted or watched.',
      'THE UPRISING: Protests erupted in all 50 states and 60+ countries. An estimated 15-26 million Americans participated.',
      'CONVICTIONS: Chauvin was convicted of murder and sentenced to 22.5 years. All four officers were convicted of federal civil rights violations.',
      'REFORM FAILURE: Despite massive public outcry, federal police reform legislation (the George Floyd Justice in Policing Act) failed to pass the Senate.',
    ],
    tags: ['George Floyd', 'Police Violence', 'BLM', 'Racial Justice', 'Derek Chauvin', 'Minneapolis'],
    sources: [
      { title: 'MPD Body Camera Footage', url: 'https://www.hennepinattorney.org/floyd', type: 'Evidence' },
      { title: 'Court Documents - State v. Chauvin', url: 'https://mncourts.gov/state-v-chauvin', type: 'Court Document' },
    ],
    affiliations: [],
  },
  'healthcare-profiteering': {
    title: 'Healthcare Profiteering',
    subtitle: 'How the health insurance and hospital industries extract trillions while Americans go bankrupt and die',
    severity: 'critical',
    category: 'Healthcare',
    date: 'January 1, 2010',
    lastUpdated: 'March 10, 2026',
    summary: 'The U.S. spends $4.3 trillion annually on healthcare — double the per-capita spending of peer nations — while ranking last in outcomes. Medical debt is the leading cause of bankruptcy. Insurance companies deny claims algorithmically while executives earn hundreds of millions.',
    content: [
      'INSURANCE DENIALS: UnitedHealth Group used AI algorithms to deny elderly patients\' claims. CEO Andrew Witty earned $22M while the company denied millions of claims.',
      'MEDICAL BANKRUPTCY: Two-thirds of U.S. bankruptcies are tied to medical debt. 100 million Americans carry medical debt.',
      'HOSPITAL MONOPOLIES: Hospital consolidation increased prices 20-40% in concentrated markets without improving quality.',
    ],
    tags: ['Healthcare', 'Insurance', 'Medical Debt', 'Profiteering', 'UnitedHealth'],
    sources: [
      { title: 'CMS National Health Expenditure Data', url: 'https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata', type: 'Government Data' },
    ],
    affiliations: [],
  },
  'human-trafficking': {
    title: 'Human Trafficking Networks',
    subtitle: 'Global human trafficking operations generating $150 billion annually in forced labor and sexual exploitation',
    severity: 'critical',
    category: 'Human Rights',
    date: 'January 1, 2000',
    lastUpdated: 'March 10, 2026',
    summary: 'Human trafficking generates an estimated $150 billion annually worldwide, with 50 million people trapped in modern slavery. Trafficking networks operate across borders with connections to government officials, corporations, and organized crime.',
    content: [
      'SCALE: The ILO estimates 50 million people are in modern slavery — 28 million in forced labor and 22 million in forced marriage.',
      'SUPPLY CHAINS: Major brands have been linked to forced labor in their supply chains, including in China\'s Uyghur region.',
      'DOMESTIC TRAFFICKING: The National Human Trafficking Hotline receives over 10,000 calls per year from within the United States.',
    ],
    tags: ['Human Trafficking', 'Modern Slavery', 'Forced Labor', 'Sexual Exploitation'],
    sources: [
      { title: 'ILO Global Estimates of Modern Slavery', url: 'https://www.ilo.org/global/topics/forced-labour/lang--en/index.htm', type: 'Report' },
    ],
    affiliations: [],
  },
  'influencer-abuse': {
    title: 'Influencer Abuse & Online Exploitation',
    subtitle: 'How social media platforms enable abuse, exploitation, and harm by online influencers',
    severity: 'medium',
    category: 'Technology',
    date: 'January 1, 2018',
    lastUpdated: 'March 10, 2026',
    summary: 'Social media influencers have used their platforms for fraud, abuse, and exploitation of followers, including promoting scams, manipulating minors, and using their platforms to silence critics and intimidate victims.',
    content: [
      'CRYPTO SCAMS: Influencers promoted fraudulent cryptocurrency projects to followers, earning millions in undisclosed payments.',
      'AUDIENCE MANIPULATION: Influencers exploit parasocial relationships with followers for financial gain and personal power.',
      'PLATFORM FAILURE: Social media companies profit from controversial influencer content while failing to protect users.',
    ],
    tags: ['Influencer', 'Social Media', 'Exploitation', 'Online Fraud'],
    sources: [
      { title: 'FTC Influencer Guidance', url: 'https://www.ftc.gov/influencers', type: 'Government' },
    ],
    affiliations: [],
  },
  'infrastructure-failures': {
    title: 'American Infrastructure Failures',
    subtitle: 'Crumbling bridges, contaminated water, and aging power grids threatening American lives',
    severity: 'high',
    category: 'Public Safety',
    date: 'August 1, 2007',
    lastUpdated: 'March 10, 2026',
    summary: 'America\'s infrastructure earns a C- grade from the American Society of Civil Engineers. From Flint\'s poisoned water to the I-35W bridge collapse to Texas grid failures, decades of deferred maintenance and underinvestment endanger millions of lives.',
    content: [
      'FLINT WATER CRISIS: 100,000 residents were exposed to lead-contaminated water for 18 months while officials covered up the danger.',
      'BRIDGE FAILURES: 46,154 bridges are rated structurally deficient. The I-35W collapse in 2007 killed 13 people.',
      'TEXAS GRID FAILURE: The February 2021 power crisis killed 246+ people when the unregulated Texas grid failed in winter weather.',
    ],
    tags: ['Infrastructure', 'Flint', 'Public Safety', 'Bridges', 'Power Grid'],
    sources: [
      { title: 'ASCE Infrastructure Report Card', url: 'https://infrastructurereportcard.org/', type: 'Report' },
    ],
    affiliations: [],
  },
  'khashoggi-murder': {
    title: 'Jamal Khashoggi Assassination',
    subtitle: 'The Saudi state murder and dismemberment of a Washington Post journalist inside their own consulate',
    severity: 'critical',
    category: 'Assassination',
    date: 'October 2, 2018',
    lastUpdated: 'March 10, 2026',
    summary: 'Saudi journalist Jamal Khashoggi was murdered and dismembered inside the Saudi consulate in Istanbul on October 2, 2018. U.S. intelligence concluded Crown Prince Mohammed bin Salman ordered the killing. Despite this, the Trump and Biden administrations maintained the U.S.-Saudi alliance.',
    content: [
      'THE MURDER: Khashoggi entered the Saudi consulate to obtain marriage documents and was killed by a 15-man hit squad that included MBS\'s personal security.',
      'MBS ORDERED IT: The CIA concluded with high confidence that Mohammed bin Salman ordered the assassination.',
      'NO ACCOUNTABILITY: Despite public outrage, neither the Trump nor Biden administrations imposed meaningful consequences on MBS.',
      'THE COVER-UP: Saudi Arabia initially denied the murder, then claimed it was a rogue operation, then convicted 8 people in a sham trial.',
    ],
    tags: ['Jamal Khashoggi', 'Saudi Arabia', 'MBS', 'Assassination', 'Press Freedom'],
    sources: [
      { title: 'ODNI Assessment of Khashoggi Murder', url: 'https://www.dni.gov/files/ODNI/documents/assessments/Assessment-Saudi-Gov-Role-in-JK-Death-20210226v2.pdf', type: 'Intelligence Report' },
    ],
    affiliations: [],
  },
  'kenosha-shootings': {
    title: 'Kenosha Shootings',
    subtitle: 'Kyle Rittenhouse, vigilante violence, and the failure of police response during racial justice protests',
    severity: 'high',
    category: 'Gun Violence',
    date: 'August 25, 2020',
    lastUpdated: 'March 10, 2026',
    summary: 'Kyle Rittenhouse, 17, traveled from Illinois to Kenosha, Wisconsin during protests over the police shooting of Jacob Blake and killed two people with an AR-15. He was acquitted of all charges, becoming a symbol in the national debate over vigilante justice and gun rights.',
    content: [
      'THE SHOOTINGS: Rittenhouse killed Joseph Rosenbaum and Anthony Huber and wounded Gaige Grosskreutz on August 25, 2020.',
      'POLICE FAILURE: Kenosha police had encouraged armed civilians and allowed Rittenhouse to walk past them after the shootings.',
      'ACQUITTAL: Rittenhouse was acquitted on all charges in November 2021 based on self-defense arguments.',
    ],
    tags: ['Kenosha', 'Kyle Rittenhouse', 'Gun Violence', 'Vigilante', 'Jacob Blake'],
    sources: [
      { title: 'Kenosha County Court Records', url: 'https://wcca.wicourts.gov', type: 'Court Document' },
    ],
    affiliations: [],
  },
  'las-vegas-shooting': {
    title: 'Las Vegas Mass Shooting',
    subtitle: 'The deadliest mass shooting in modern American history — 60 killed, 413 wounded',
    severity: 'critical',
    category: 'Mass Shooting',
    date: 'October 1, 2017',
    lastUpdated: 'March 10, 2026',
    summary: 'Stephen Paddock opened fire from the 32nd floor of the Mandalay Bay hotel onto the Route 91 Harvest music festival crowd, killing 60 people and wounding 413. Despite extensive investigation, no motive was ever determined. The FBI closed its case without finding one.',
    content: [
      'THE ATTACK: Paddock fired over 1,000 rounds in 10 minutes from two broken-out windows using bump stock-equipped rifles.',
      'NO MOTIVE: The FBI and LVMPD concluded in 2019 that no single motive could be identified.',
      'GUN POLICY: The shooting led to bump stock bans, though the Supreme Court later struck down the federal ban in 2024.',
    ],
    tags: ['Mass Shooting', 'Las Vegas', 'Gun Violence', 'Bump Stocks', 'Mandalay Bay'],
    sources: [
      { title: 'LVMPD Final Report', url: 'https://www.lvmpd.com/en-us/Documents/1-October-FIT-Criminal-Investigative-Report-FINAL.pdf', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'michael-brown-shooting': {
    title: 'Michael Brown Shooting & Ferguson Uprising',
    subtitle: 'The police killing that exposed systemic racism in American policing and sparked a national movement',
    severity: 'critical',
    category: 'Police Violence',
    date: 'August 9, 2014',
    lastUpdated: 'March 10, 2026',
    summary: 'Ferguson, Missouri police officer Darren Wilson shot and killed Michael Brown, an unarmed 18-year-old Black man, on August 9, 2014. The killing and subsequent grand jury non-indictment sparked weeks of protests and a DOJ investigation that revealed systematic racial bias in Ferguson\'s police and courts.',
    content: [
      'THE KILLING: Wilson shot Brown at least 6 times. Witnesses disputed the official account. Brown\'s body lay in the street for 4 hours.',
      'DOJ FERGUSON REPORT: The DOJ found Ferguson systematically targeted Black residents for revenue through fines and fees, with racist emails exchanged by officials.',
      'NO INDICTMENT: A grand jury declined to indict Wilson. The decision sparked nationwide protests.',
    ],
    tags: ['Michael Brown', 'Ferguson', 'Police Violence', 'BLM', 'DOJ', 'Racial Justice'],
    sources: [
      { title: 'DOJ Ferguson Report', url: 'https://www.justice.gov/sites/default/files/opa/press-releases/attachments/2015/03/04/ferguson_police_department_report.pdf', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'mass-shootings': {
    title: 'America\'s Mass Shooting Epidemic',
    subtitle: 'Why the United States leads the developed world in gun massacres — and does nothing about it',
    severity: 'critical',
    category: 'Gun Violence',
    date: 'April 20, 1999',
    lastUpdated: 'March 10, 2026',
    summary: 'The United States has more mass shootings than any other developed nation. From Columbine to Sandy Hook to Uvalde, the pattern repeats: massacre, grief, calls for reform, NRA opposition, legislative failure, next massacre. Over 2,000 mass shootings occurred between 2018-2024.',
    content: [
      'THE NUMBERS: The Gun Violence Archive recorded 600+ mass shootings in each year from 2020-2024.',
      'NRA BLOCKADE: The NRA spent over $100 million on politics, effectively blocking gun reform for decades.',
      'CHILDREN: Sandy Hook (20 children, 2012), Parkland (17 students, 2018), and Uvalde (19 children, 2022) failed to produce meaningful federal action.',
    ],
    tags: ['Mass Shootings', 'Gun Violence', 'NRA', 'Gun Reform', 'School Shootings'],
    sources: [
      { title: 'Gun Violence Archive', url: 'https://www.gunviolencearchive.org/', type: 'Database' },
    ],
    affiliations: [],
  },
  'medical-misinfo': {
    title: 'Medical Misinformation Crisis',
    subtitle: 'How anti-science movements, quack remedies, and politicized medicine endanger public health',
    severity: 'high',
    category: 'Public Health',
    date: 'January 1, 2019',
    lastUpdated: 'March 10, 2026',
    summary: 'Medical misinformation has become a leading public health threat, from anti-vaccine movements driving measles outbreaks to promotion of unproven treatments during COVID-19. Social media platforms amplify false health claims while legitimate medical expertise is undermined.',
    content: [
      'ANTI-VACCINE MOVEMENT: Vaccine hesitancy, fueled by debunked claims, led to measles outbreaks and millions refusing COVID vaccination.',
      'SOCIAL MEDIA AMPLIFICATION: Health misinformation gets 6x more engagement than accurate health information on social media.',
      'POLITICIZATION: Medical decisions became partisan — masks, vaccines, and treatments became identity politics rather than science.',
    ],
    tags: ['Medical Misinformation', 'Anti-Vaccine', 'Public Health', 'Social Media', 'COVID-19'],
    sources: [
      { title: 'Surgeon General Advisory on Misinformation', url: 'https://www.hhs.gov/surgeongeneral/priorities/health-misinformation/index.html', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'media-industry-abuse': {
    title: 'Media Industry Abuse',
    subtitle: 'Sexual harassment, labor exploitation, and power abuse across entertainment and media industries',
    severity: 'high',
    category: 'Industry Abuse',
    date: 'October 5, 2017',
    lastUpdated: 'March 10, 2026',
    summary: 'The MeToo movement exposed systemic sexual harassment across media and entertainment, from Harvey Weinstein to Les Moonves to Roger Ailes. Power imbalances enabled decades of abuse while NDAs and corporate complicity silenced victims.',
    content: [
      'WEINSTEIN: Harvey Weinstein was convicted of rape and sexual assault, sentenced to 23 years. Over 80 women accused him.',
      'CBS/MOONVES: Les Moonves was ousted from CBS after multiple women accused him of sexual misconduct. CBS paid $120M to shareholders over the cover-up.',
      'SYSTEMIC FAILURE: Talent agencies, studios, and networks all knew about predatory behavior and facilitated access to victims.',
    ],
    tags: ['MeToo', 'Harvey Weinstein', 'Sexual Harassment', 'Media', 'Entertainment'],
    sources: [
      { title: 'NYT Weinstein Investigation', url: 'https://www.nytimes.com/2017/10/05/us/harvey-weinstein-harassment-allegations.html', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'oxford-shooting': {
    title: 'Oxford High School Shooting',
    subtitle: 'A school shooting that led to unprecedented criminal charges against the shooter\'s parents',
    severity: 'high',
    category: 'Gun Violence',
    date: 'November 30, 2021',
    lastUpdated: 'March 10, 2026',
    summary: 'Ethan Crumbley, 15, killed four students and wounded seven others at Oxford High School in Michigan. In a legal first, his parents James and Jennifer Crumbley were convicted of involuntary manslaughter for buying their son the gun and ignoring warning signs.',
    content: [
      'THE SHOOTING: Crumbley killed 4 students with a handgun his father had bought him as a Christmas gift four days prior.',
      'PARENTAL ACCOUNTABILITY: Both parents were convicted of involuntary manslaughter — the first time parents were held criminally liable for a school shooting.',
      'WARNING SIGNS: School officials found a disturbing note by Crumbley showing violence fantasies hours before the shooting but allowed him to return to class.',
    ],
    tags: ['School Shooting', 'Oxford', 'Parental Accountability', 'Gun Violence'],
    sources: [
      { title: 'Oakland County Court Records', url: 'https://www.oakgov.com/courts', type: 'Court Document' },
    ],
    affiliations: [],
  },
  'opioid-distribution': {
    title: 'Opioid Distribution Crisis',
    subtitle: 'How pharmaceutical distributors flooded communities with billions of pills while ignoring red flags',
    severity: 'critical',
    category: 'Healthcare',
    date: 'January 1, 2006',
    lastUpdated: 'March 10, 2026',
    summary: 'The three largest drug distributors — McKesson, AmerisourceBergen, and Cardinal Health — shipped 76 billion oxycodone and hydrocodone pills between 2006-2012. They ignored obvious red flags as small-town pharmacies ordered millions of pills. The opioid crisis has killed over 600,000 Americans.',
    content: [
      'THE FLOOD: DEA data revealed 76 billion+ pain pills shipped over 6 years, enough for every adult in America to have a 3-week supply.',
      'DISTRIBUTOR NEGLIGENCE: Companies ignored orders from pharmacies ordering thousands of pills per day to tiny communities.',
      'SETTLEMENT: The Big Three distributors agreed to a $21 billion settlement with states and municipalities.',
    ],
    tags: ['Opioid Crisis', 'McKesson', 'Drug Distribution', 'DEA', 'Pharmaceutical'],
    sources: [
      { title: 'Washington Post ARCOS Data Analysis', url: 'https://www.washingtonpost.com/graphics/2019/investigations/dea-pain-pill-database/', type: 'Investigation' },
    ],
    affiliations: [],
  },
  'parental-accountability': {
    title: 'Parental Accountability in Mass Shootings',
    subtitle: 'The legal frontier of holding parents responsible when children commit gun violence',
    severity: 'medium',
    category: 'Legal',
    date: 'November 30, 2021',
    lastUpdated: 'March 10, 2026',
    summary: 'The conviction of James and Jennifer Crumbley for involuntary manslaughter in connection with the Oxford High School shooting established a precedent for parental criminal liability when children commit mass shootings with negligently stored weapons.',
    content: [
      'OXFORD PRECEDENT: The Crumbley convictions were the first successful prosecution of parents for a child\'s mass shooting.',
      'LEGAL LANDSCAPE: Most states have child access prevention laws but few carry serious criminal penalties.',
      'SAFE STORAGE: Advocates argue mandatory safe storage laws could prevent children from accessing firearms.',
    ],
    tags: ['Parental Accountability', 'Gun Violence', 'Legal Precedent', 'Oxford'],
    sources: [
      { title: 'Giffords Law Center - Child Access Prevention', url: 'https://giffords.org/lawcenter/gun-laws/policy-areas/child-consumer-safety/child-access-prevention/', type: 'Research' },
    ],
    affiliations: [],
  },
  'oversight-abuse': {
    title: 'Congressional Oversight Abuse',
    subtitle: 'How congressional investigations have been weaponized for political persecution rather than accountability',
    severity: 'high',
    category: 'Abuse of Power',
    date: 'January 1, 2011',
    lastUpdated: 'March 10, 2026',
    summary: 'Congressional oversight powers, designed to ensure government accountability, have been increasingly weaponized for partisan political purposes — targeting political opponents, undermining investigations, and serving as opposition research operations.',
    content: [
      'BENGHAZI: Republicans held 33 hearings, 11 reports, and spent $7.8 million investigating Benghazi. Majority Leader Kevin McCarthy admitted it was designed to hurt Hillary Clinton\'s poll numbers.',
      'IMPEACHMENT INTERFERENCE: House Republicans used oversight to attack Trump impeachment witnesses and investigate the investigators.',
      'WEAPONIZATION COMMITTEE: The House "Weaponization of Government" subcommittee was itself accused of weaponizing oversight.',
    ],
    tags: ['Congressional Oversight', 'Political Weaponization', 'Abuse of Power'],
    sources: [
      { title: 'Congressional Record', url: 'https://www.congress.gov/congressional-record', type: 'Government Document' },
    ],
    affiliations: [],
  },
  'police-reform': {
    title: 'Police Reform Failures',
    subtitle: 'Why decades of police reform efforts have failed to end systemic violence and racism in American policing',
    severity: 'high',
    category: 'Criminal Justice',
    date: 'March 3, 1991',
    lastUpdated: 'March 10, 2026',
    summary: 'From the Rodney King beating to George Floyd\'s murder, decades of reform efforts — consent decrees, body cameras, training programs, civilian review boards — have failed to fundamentally change American policing or reduce police killings, which remain at approximately 1,100 per year.',
    content: [
      'CONSENT DECREES: DOJ consent decrees produced modest improvements but departments often reverted after oversight ended.',
      'BODY CAMERAS: Despite widespread adoption, body cameras have not significantly reduced use of force.',
      'LEGISLATIVE FAILURE: The George Floyd Justice in Policing Act passed the House but died in the Senate.',
    ],
    tags: ['Police Reform', 'Criminal Justice', 'Use of Force', 'Accountability'],
    sources: [
      { title: 'Mapping Police Violence', url: 'https://mappingpoliceviolence.us/', type: 'Database' },
    ],
    affiliations: [],
  },
  'police-brutality-crisis': {
    title: 'Police Brutality Crisis in America',
    subtitle: 'Systemic police violence killing over 1,000 Americans annually with minimal accountability',
    severity: 'critical',
    category: 'Police Violence',
    date: 'January 1, 2013',
    lastUpdated: 'March 10, 2026',
    summary: 'American police kill approximately 1,100 people per year — a rate 3x higher than Canada and 50x higher than Germany. Qualified immunity shields officers from civil liability. Grand juries rarely indict. Union contracts protect officers from discipline.',
    content: [
      'THE NUMBERS: Police kill approximately 1,100 people annually. Black Americans are killed at 2.5x the rate of white Americans.',
      'QUALIFIED IMMUNITY: The Supreme Court-created doctrine shields officers from civil liability unless they violate "clearly established" law.',
      'UNION PROTECTION: Police union contracts contain provisions that delay investigations, restrict interrogations, and mandate purging of disciplinary records.',
    ],
    tags: ['Police Brutality', 'Qualified Immunity', 'Use of Force', 'Racial Disparities'],
    sources: [
      { title: 'Fatal Encounters Database', url: 'https://fatalencounters.org/', type: 'Database' },
      { title: 'Mapping Police Violence', url: 'https://mappingpoliceviolence.us/', type: 'Database' },
    ],
    affiliations: [],
  },
  'pharmaceutical-corruption': {
    title: 'Pharmaceutical Industry Corruption',
    subtitle: 'Fraud, bribery, and manipulation by the world\'s most profitable industry',
    severity: 'critical',
    category: 'Healthcare',
    date: 'January 1, 2000',
    lastUpdated: 'March 10, 2026',
    summary: 'Pharmaceutical companies have paid over $40 billion in fraud settlements since 2000 for off-label marketing, suppressing safety data, bribing doctors, and manipulating clinical trials. Despite record fines, the profits from illegal conduct consistently exceed the penalties.',
    content: [
      'RECORD FINES: GlaxoSmithKline paid $3B (2012), Pfizer $2.3B (2009), and Johnson & Johnson $2.2B (2013) in fraud settlements.',
      'OPIOID CRISIS: Purdue Pharma\'s fraudulent OxyContin marketing contributed to an epidemic killing 600,000+ Americans.',
      'DOCTOR BRIBES: Companies paid billions in consulting fees, speaking fees, and gifts to prescribers. The Open Payments database tracks $12B+ in payments.',
    ],
    tags: ['Pharmaceutical', 'Fraud', 'Opioid', 'Drug Pricing', 'Corruption'],
    sources: [
      { title: 'Public Citizen Pharma Penalties Report', url: 'https://www.citizen.org/article/twenty-seven-years-of-pharmaceutical-industry-criminal-and-civil-penalties/', type: 'Research' },
    ],
    affiliations: [],
  },
  'parkland-shooting': {
    title: 'Parkland School Shooting',
    subtitle: 'The massacre that birthed the March for Our Lives movement — and still didn\'t change gun laws',
    severity: 'critical',
    category: 'Gun Violence',
    date: 'February 14, 2018',
    lastUpdated: 'March 10, 2026',
    summary: 'Nikolas Cruz killed 17 students and staff at Marjory Stoneman Douglas High School in Parkland, Florida on February 14, 2018. Surviving students launched March for Our Lives, the largest youth-led protest movement in a generation, but federal gun reform remained blocked.',
    content: [
      'THE SHOOTING: Cruz used a legally purchased AR-15 to kill 14 students and 3 staff members despite years of warning signs reported to the FBI.',
      'MARCH FOR OUR LIVES: Student survivors organized a movement that drew 800,000 to Washington and millions worldwide.',
      'SCOT PETERSON: School resource officer Scot Peterson stayed outside during the shooting. He was acquitted of child neglect charges in 2023.',
    ],
    tags: ['Parkland', 'School Shooting', 'March for Our Lives', 'Gun Violence', 'NRA'],
    sources: [
      { title: 'MSD Public Safety Commission Report', url: 'http://www.fdle.state.fl.us/MSDHS/CommissionReport.pdf', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'police-accountability': {
    title: 'Police Accountability Failures',
    subtitle: 'Why officers who kill, beat, and abuse face almost no consequences in America',
    severity: 'high',
    category: 'Criminal Justice',
    date: 'January 1, 2000',
    lastUpdated: 'March 10, 2026',
    summary: 'Less than 2% of police killings result in officers being charged with a crime. Qualified immunity, police bill of rights laws, union contracts, and prosecutorial conflicts of interest create a system where accountability is virtually impossible.',
    content: [
      'PROSECUTION RARITY: Only 140 officers were charged with murder or manslaughter for on-duty killings between 2005-2022. Of those, only 44 were convicted.',
      'QUALIFIED IMMUNITY: Courts dismissed the vast majority of civil rights lawsuits against officers under the qualified immunity doctrine.',
      'REHIRING: Officers fired for misconduct are frequently rehired through union arbitration — then go on to reoffend.',
    ],
    tags: ['Police Accountability', 'Qualified Immunity', 'Criminal Justice', 'Use of Force'],
    sources: [
      { title: 'Bowling Green State University Police Integrity Research', url: 'https://policecrime.bgsu.edu/', type: 'Research' },
    ],
    affiliations: [],
  },
  'reagan-crimes': {
    title: 'Reagan Administration Crimes',
    subtitle: 'Iran-Contra, crack cocaine, and the crimes of the Reagan administration',
    severity: 'high',
    category: 'Government Corruption',
    date: 'November 3, 1986',
    lastUpdated: 'March 10, 2026',
    summary: 'The Reagan administration illegally sold arms to Iran and funneled the profits to Contra rebels in Nicaragua, violating the Boland Amendment. The CIA\'s role in the crack cocaine epidemic, support for Central American death squads, and arms-for-hostages dealings constituted systematic criminality.',
    content: [
      'IRAN-CONTRA: The administration secretly sold weapons to Iran and diverted proceeds to fund Nicaraguan Contras in violation of federal law.',
      'CIA AND CRACK: Journalist Gary Webb documented CIA-connected Contra drug traffickers flooding Black communities with crack cocaine.',
      'PARDONS: George H.W. Bush pardoned six Iran-Contra figures including Caspar Weinberger, effectively ending investigations.',
    ],
    tags: ['Reagan', 'Iran-Contra', 'CIA', 'Central America', 'Government Corruption'],
    sources: [
      { title: 'Walsh Iran-Contra Report', url: 'https://www.brown.edu/Research/Understanding_the_Iran_Contra_Affair/', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'syrian-chemical-weapons': {
    title: 'Syrian Chemical Weapons Attacks',
    subtitle: 'Assad regime\'s use of chemical weapons against civilians while the world watched',
    severity: 'critical',
    category: 'War Crimes',
    date: 'August 21, 2013',
    lastUpdated: 'March 10, 2026',
    summary: 'The Assad regime used sarin nerve agent and chlorine gas against Syrian civilians in multiple attacks, killing over 1,400 people including hundreds of children. Despite crossing Obama\'s "red line," the international community failed to hold Assad accountable.',
    content: [
      'GHOUTA MASSACRE: On August 21, 2013, sarin rockets killed over 1,400 people in the Damascus suburb of Ghouta, including over 400 children.',
      'RED LINE FAILURE: Despite Obama declaring chemical weapon use a "red line," the U.S. did not carry out threatened strikes, opting for a Russian-brokered deal.',
      'CONTINUED ATTACKS: Assad continued using chlorine and sarin after the disarmament deal, with attacks documented in Khan Shaykhun (2017) and Douma (2018).',
    ],
    tags: ['Syria', 'Chemical Weapons', 'Assad', 'War Crimes', 'International Law'],
    sources: [
      { title: 'OPCW Fact-Finding Mission Reports', url: 'https://www.opcw.org/fact-finding-mission', type: 'International Organization' },
    ],
    affiliations: [],
  },
  'operation-chaos': {
    title: 'Operation CHAOS',
    subtitle: 'The CIA\'s illegal domestic surveillance program targeting American anti-war activists',
    severity: 'high',
    category: 'Intelligence Abuse',
    date: 'August 15, 1967',
    lastUpdated: 'March 10, 2026',
    summary: 'From 1967-1974, the CIA ran Operation CHAOS, an illegal domestic surveillance program that collected files on over 300,000 Americans and indexed 7,200 individuals for their anti-war and civil rights activities, in direct violation of the CIA\'s charter prohibiting domestic operations.',
    content: [
      'DOMESTIC SPYING: CHAOS compiled files on 300,000+ Americans including journalists, academics, and civil rights leaders.',
      'CHURCH COMMITTEE: The program was exposed by the Church Committee in 1975 as part of widespread intelligence community abuses.',
      'COINTELPRO OVERLAP: CHAOS worked alongside the FBI\'s COINTELPRO to suppress domestic dissent.',
    ],
    tags: ['CIA', 'Domestic Surveillance', 'Operation CHAOS', 'Church Committee', 'Anti-War'],
    sources: [
      { title: 'Church Committee Final Report', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'uvalde-police-failure': {
    title: 'Uvalde Police Failure',
    subtitle: 'How 376 officers waited 77 minutes while children were massacred at Robb Elementary',
    severity: 'critical',
    category: 'Police Failure',
    date: 'May 24, 2022',
    lastUpdated: 'March 10, 2026',
    summary: 'An 18-year-old gunman killed 19 children and 2 teachers at Robb Elementary School in Uvalde, Texas. Despite 376 law enforcement officers on scene, police waited 77 minutes before breaching the classroom, with children calling 911 begging for help. The response has been called the worst police failure in modern history.',
    content: [
      'THE MASSACRE: Salvador Ramos killed 19 children and 2 teachers with a legally purchased AR-15 on his 18th birthday.',
      '77 MINUTES: Officers stood in the hallway for 77 minutes while children bled out and called 911. Chief Pete Arredondo treated it as a barricaded subject, not an active shooter.',
      'BODY CAMERA FOOTAGE: Released footage showed officers checking phones, applying hand sanitizer, and retreating from shots while children were dying.',
      'COVER-UP: Officials initially lied about the response timeline. The Texas DPS director was later fired for covering up the failures.',
    ],
    tags: ['Uvalde', 'School Shooting', 'Police Failure', 'Gun Violence', 'Robb Elementary'],
    sources: [
      { title: 'Texas House Investigative Committee Report', url: 'https://house.texas.gov/uvalde', type: 'Government Report' },
    ],
    affiliations: [],
  },
  'world-bank': {
    title: 'World Bank: Development or Exploitation?',
    subtitle: 'How the World Bank funded displacement, environmental destruction, and authoritarian regimes in the name of development',
    severity: 'high',
    category: 'International',
    date: 'July 1, 1944',
    lastUpdated: 'March 10, 2026',
    summary: 'The World Bank has been documented funding projects that displaced millions of people, destroyed ecosystems, propped up authoritarian regimes, and imposed austerity programs that deepened poverty — while enriching contractors from wealthy nations.',
    content: [
      'FORCED DISPLACEMENT: World Bank-funded projects displaced an estimated 3.4 million people in the decade ending 2014.',
      'STRUCTURAL ADJUSTMENT: Bank-imposed austerity programs in the 1980s-90s gutted public services across the developing world.',
      'CLIMATE CONTRADICTION: The Bank continues funding fossil fuel projects despite its climate commitments.',
    ],
    tags: ['World Bank', 'Development', 'Displacement', 'Austerity', 'International Finance'],
    sources: [
      { title: 'ICIJ Evicted and Abandoned Investigation', url: 'https://www.icij.org/investigations/world-bank/', type: 'Investigation' },
    ],
    affiliations: [],
  },
};

// ── Inject into shard files ──────────────────────────────────

function addToShard(letter, entries) {
  const filePath = path.join(INV_DIR, `${letter}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ Shard file not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Find the closing }; before the export
  const exportLine = `export default investigations_${letter};`;
  const exportIdx = content.lastIndexOf(exportLine);
  if (exportIdx === -1) {
    console.error(`  ✗ Could not find export in ${letter}.ts`);
    return;
  }

  // Find the }; before the export
  const closingIdx = content.lastIndexOf('};', exportIdx);
  if (closingIdx === -1) {
    console.error(`  ✗ Could not find closing }; in ${letter}.ts`);
    return;
  }

  // Build the new entries as string
  let newContent = '';
  for (const [slug, data] of entries) {
    // Check if slug already exists
    if (content.includes(`'${slug}':`)) {
      console.log(`  ⊘ Already exists: ${slug}`);
      continue;
    }

    newContent += `  '${slug}': {\n`;
    newContent += `    title: ${JSON.stringify(data.title)},\n`;
    newContent += `    subtitle: ${JSON.stringify(data.subtitle)},\n`;
    newContent += `    severity: ${JSON.stringify(data.severity)},\n`;
    newContent += `    category: ${JSON.stringify(data.category)},\n`;
    newContent += `    date: ${JSON.stringify(data.date)},\n`;
    newContent += `    lastUpdated: ${JSON.stringify(data.lastUpdated)},\n`;
    newContent += `    summary: ${JSON.stringify(data.summary)},\n`;
    newContent += `    content: [\n`;
    for (const c of data.content) {
      newContent += `      ${JSON.stringify(c)},\n`;
    }
    newContent += `    ],\n`;
    newContent += `    tags: ${JSON.stringify(data.tags)},\n`;
    newContent += `    sources: [\n`;
    for (const s of data.sources) {
      newContent += `      { title: ${JSON.stringify(s.title)}, url: ${JSON.stringify(s.url)}, type: ${JSON.stringify(s.type)} },\n`;
    }
    newContent += `    ],\n`;
    newContent += `    affiliations: ${JSON.stringify(data.affiliations)},\n`;
    newContent += `  },\n`;

    console.log(`  ✓ Added: ${slug}`);
  }

  if (newContent) {
    // Insert before the closing };
    content = content.substring(0, closingIdx) + newContent + content.substring(closingIdx);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// Group entries by first letter
const byLetter = {};
for (const [slug, data] of Object.entries(missingInvestigations)) {
  const letter = slug[0];
  if (!byLetter[letter]) byLetter[letter] = [];
  byLetter[letter].push([slug, data]);
}

console.log('\n╔══════════════════════════════════════════╗');
console.log('║  Fixing Missing Investigation Entries    ║');
console.log('╚══════════════════════════════════════════╝\n');

for (const [letter, entries] of Object.entries(byLetter).sort()) {
  console.log(`\n${letter}.ts:`);
  addToShard(letter, entries);
}

// Fix the placeholder href '#' in m.ts for Christopher Steele
const mFile = path.join(ROOT, 'src', 'data', 'individuals', 'm.ts');
if (fs.existsSync(mFile)) {
  let mContent = fs.readFileSync(mFile, 'utf8');
  // Find the line with href: '#' near Christopher Steele
  const oldHref = "name: 'Christopher Steele',\n          relationship: 'Former MI6 officer, compiled the dossier',\n          href: '#'";
  const newHref = "name: 'Christopher Steele',\n          relationship: 'Former MI6 officer, compiled the dossier',\n          href: '/entities/individuals/christopher-steele'";
  if (mContent.includes(oldHref)) {
    mContent = mContent.replace(oldHref, newHref);
    fs.writeFileSync(mFile, mContent, 'utf8');
    console.log('\n  ✓ Fixed Christopher Steele href in m.ts');
  } else {
    console.log('\n  ⊘ Christopher Steele href pattern not found (may already be fixed or format differs)');
  }
}

console.log('\n\nDone! Run verify-links.js again to confirm fixes.\n');
