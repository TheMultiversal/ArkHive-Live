// v50 batch 2: Keyword-pool based defendant matcher for remaining 465 investigations
const fs = require('fs');
const path = require('path');
const DIR = path.resolve('src/data/investigations');

const POOLS = [
  { keys: ['cia','mkultra','mk-ultra','artichoke','midnight-climax','operation-chaos','mind-control','echelon','shamrock','intelligence-impunity','church-committee','enhanced-interrogation','rendition','torture-program','torture-accountability','black-site'], defs: [
    { name: 'CIA (Central Intelligence Agency)', role: 'Conducted covert operations including illegal domestic surveillance, mind control experiments, extraordinary rendition, and torture programs', status: 'pending', notes: 'Church Committee exposed widespread abuses in 1975; subsequent reforms repeatedly circumvented. Senate Torture Report documented post-9/11 abuses.' },
    { name: 'Richard Helms', role: 'CIA Director who ordered destruction of MKUltra records and lied to Congress', status: 'convicted', notes: 'Pled no contest to misleading Congress in 1977; received two-year suspended sentence and $2,000 fine' },
  ]},
  { keys: ['nsa','mass-surveillance','fisa','secret-court','five-eyes','social-media-surveillance','surveillance-partnerships','electronic-frontier','digital-advertising-surveillance','smart-home-device-surveillance','smart-city-surveillance','school-surveillance','license-plate-reader','cell-phone-location','facial-recognition','biometric','vehicle-tracking','workplace-monitoring','predictive-policing','airport-biometric'], defs: [
    { name: 'NSA (National Security Agency)', role: 'Conducted warrantless mass surveillance of American citizens phone and internet communications', status: 'pending', notes: 'Edward Snowden revealed scope in 2013; FISA Court approved bulk collection. Some programs ruled illegal.' },
    { name: 'James Clapper', role: 'Director of National Intelligence who lied to Congress about NSA surveillance', status: 'pending', notes: 'Told Senator Wyden the NSA did not wittingly collect data on millions of Americans; later admitted false' },
  ]},
  { keys: ['boeing'], defs: [
    { name: 'Boeing Company', role: 'Pattern of safety failures, whistleblower retaliation, and regulatory capture across aircraft programs', status: 'charged', notes: 'DOJ charged with fraud conspiracy for 737 MAX crashes killing 346. Multiple whistleblower retaliation claims.' },
    { name: 'Dennis Muilenburg', role: 'Boeing CEO who prioritized production speed over safety leading to 737 MAX crashes', status: 'pending', notes: 'Fired December 2019 after two crashes. Received $62M departure package.' },
  ]},
  { keys: ['pharma','opioid','drug-patent','drug-recall','drug-supply','pharmaceutical','clinical-trial','fda-advisory','big-pharma','des-diethylstilbestrol','vaccine-injury','depopulation'], defs: [
    { name: 'Purdue Pharma', role: 'Manufactured OxyContin and lied about addictive properties fueling the opioid crisis', status: 'convicted', notes: 'Pled guilty 2020; agreed to $8.3B settlement. Sackler family paid $6B. Over 500,000 opioid deaths since 1999.' },
    { name: 'Johnson & Johnson', role: 'Supplied raw opium ingredients and marketed opioids through Janssen subsidiary', status: 'settled', notes: 'Paid $5B in opioid settlements across multiple state lawsuits' },
  ]},
  { keys: ['securities-fraud','financial-fraud','financial-crisis','banking-corruption','banking-crimes','banking-crisis','banking-libor','credit-default','hedge-fund','wall-street','cryptocurrency-fraud','cryptocurrency-money','cryptocurrency-manipulation','structured-finance','financial-surveillance','financial-transaction','credit-reporting','bankruptcy-fraud','sovereign-debt'], defs: [
    { name: 'Goldman Sachs', role: 'Marketed toxic mortgage securities while secretly betting against them', status: 'settled', notes: 'Paid $5.06B settlement in 2016 for role in 2008 financial crisis.' },
    { name: 'JPMorgan Chase', role: 'Manipulated markets and enabled fraud including Madoff Ponzi scheme', status: 'settled', notes: 'Paid $13B in 2013 mortgage settlement; $2.6B for failing to flag Madoff fraud.' },
  ]},
  { keys: ['doj-politic','doj-corruption','doj-two-tier','mueller','federal-election-conspiracy','federal-election-interference'], defs: [
    { name: 'U.S. Department of Justice', role: 'Pattern of politicized prosecutions and selective enforcement', status: 'pending', notes: 'Inspector General reports documented political interference across multiple administrations' },
    { name: 'William Barr', role: 'Attorney General who misrepresented Mueller Report findings', status: 'pending', notes: 'Issued misleading summary of Mueller Report. Intervened in cases of political allies.' },
  ]},
  { keys: ['election','electoral','voting-rights','voting-machine','voter-database','ballot','redistricting'], defs: [
    { name: 'Various State Officials', role: 'Enacted voter suppression laws disproportionately affecting minority communities', status: 'pending', notes: 'Shelby County v. Holder (2013) gutted Voting Rights Act; states immediately enacted restrictive laws' },
  ]},
  { keys: ['police','bail-bond','cash-bail','judicial-cash','juvenile','mass-incarceration','prison-industrial','forced-labor-in-us','death-penalty','qualified-immunity','body-camera','michael-brown','protest-violence','ice-detention','border-patrol','border-deaths','cbp-border','dhs-violation'], defs: [
    { name: 'Various Law Enforcement Agencies', role: 'Pattern of excessive force, racial profiling, and lack of accountability', status: 'pending', notes: 'DOJ found systemic civil rights violations in Ferguson, Baltimore, Chicago, Minneapolis and dozens more' },
    { name: 'GEO Group', role: 'Largest private prison operator profiting from mass incarceration and detention', status: 'charged', notes: 'Multiple lawsuits for inhumane conditions. $20M in federal lobbying to maintain incarceration.' },
  ]},
  { keys: ['environmental','superfund','industrial-water','toxic-waste','mining-industry','methane','ocean-pollution','glyphosate','pesticide','microplastic','water-treatment','water-infrastructure','air-quality','agricultural-runoff','deforestation','climate-change','climate-obstruction','fossil-fuel','carbon-emission','oil-spill','depleted-uranium','agent-orange','nuclear-weapons-complex','military-base-environmental','military-burn-pit','du-weapons','fluoride','food-supply-chain-endocrine','epa-capture','epa-regulatory'], defs: [
    { name: 'ExxonMobil', role: 'Knew about climate change since 1977 and funded decades of disinformation', status: 'charged', notes: 'Internal scientists predicted warming. Spent $30M+ on denial. State AG lawsuits pending.' },
    { name: 'DuPont/Chemours', role: 'Contaminated water with PFAS chemicals and concealed health impacts for decades', status: 'settled', notes: 'Paid $671M for PFOA contamination. C8 Panel linked exposure to 6 diseases.' },
    { name: 'Monsanto (Bayer)', role: 'Concealed cancer risks of Roundup/glyphosate', status: 'settled', notes: 'Bayer paid $10.9B to settle 100,000+ Roundup cancer lawsuits.' },
  ]},
  { keys: ['tech-oligarchy','tech-billionaire','tech-censorship','tech-industry','tech-labor','tech-worker','big-tech','platform-discrimination','platform-extremism','social-media-bot','social-media-influencer','influencer-abuse','influencer-scam','online-radicalization','online-platform-trafficking','narrative-control','youtube-extremism','zuckerberg','algorithm','information-environment'], defs: [
    { name: 'Meta Platforms (Facebook)', role: 'Amplified extremist content, enabled Myanmar genocide, harvested user data', status: 'settled', notes: '$5B FTC fine. Internal research showed Instagram harmed teen mental health. Whistleblower Frances Haugen testified.' },
    { name: 'Google/Alphabet', role: 'Monopolized search and advertising while tracking billions', status: 'charged', notes: 'DOJ antitrust suit in 2020. Found guilty of illegal monopoly in 2024.' },
  ]},
  { keys: ['dark-money','political-dark','political-corruption','political-funding','political-fraud','political-hoax','political-hypocrisy','political-opportunism','lobbying','revolving-door','congressional-revolving','super-pac','think-tank-dark','republican-dark','donor-crimes','congressional-stock','insider-trading-congress','kickbacks-pharmacy','aipac'], defs: [
    { name: 'Koch Network (Charles Koch)', role: 'Spent billions through dark money to influence elections and block regulation', status: 'pending', notes: 'Koch network spent $889M in 2016 cycle. Funded climate denial and anti-union campaigns.' },
    { name: 'Leonard Leo', role: 'Engineered conservative judiciary takeover through dark money networks', status: 'pending', notes: 'Directed $1.6B Barre Seid donation. Orchestrated Supreme Court nominations.' },
  ]},
  { keys: ['ice-','immigration-tech','undocumented'], defs: [
    { name: 'ICE (Immigration and Customs Enforcement)', role: 'Pattern of abuse in detention including medical neglect and family separation', status: 'charged', notes: 'Whistleblower alleged forced hysterectomies. Multiple detainee deaths documented.' },
  ]},
  { keys: ['media-coord','media-control','media-manipulation','media-fraud','media-radicalization','press-freedom','disinformation','propaganda-networks','mass-formation','local-news-desert','subliminal','social-engineering'], defs: [
    { name: 'Sinclair Broadcast Group', role: 'Forced local news anchors to read identical conservative scripts', status: 'pending', notes: 'Controls 185+ stations. Required anchors to read corporate talking points.' },
    { name: 'Fox News/News Corp', role: 'Amplified disinformation including election fraud claims known false', status: 'settled', notes: 'Paid $787.5M to Dominion Voting Systems in 2023 for defamation.' },
  ]},
  { keys: ['covid','pandemic','lab-leak','wuhan','nih-wuhan','ecohealth','cdc-testing','public-health','medical-tyranny','medical-misinfo'], defs: [
    { name: 'Various Government Officials', role: 'Mismanaged pandemic response resulting in preventable deaths', status: 'pending', notes: 'U.S. suffered 1.1M+ COVID deaths. PPE shortages, testing delays documented.' },
    { name: 'EcoHealth Alliance', role: 'Funneled NIH grants to Wuhan Institute for gain-of-function research', status: 'charged', notes: 'NIH terminated grant. Congressional investigations found inadequate disclosures.' },
  ]},
  { keys: ['trafficking','human-smuggling','cartel','ms-13','mafia','organized-crime','massage-parlor','nightclub-industry','trucking-industry','long-haul','construction-worker-trafficking','labor-trafficking','hotel-industry-trafficking','port-city-trafficking','foster-care','restaurant-industry-money-laundering','gambling-industry','casino-money','waste-management-organized','counterfeit-goods'], defs: [
    { name: 'Various Transnational Criminal Organizations', role: 'Human trafficking, drug smuggling, and money laundering networks', status: 'charged', notes: 'DOJ estimates 24.9M people in forced labor globally. Trafficking generates $150B annually.' },
  ]},
  { keys: ['drone','abu-ghraib','gulf-war','iraq-sanctions','special-plans','military-readiness','pentagon-budget','pentagon-papers','pentagon-response','operation-condor','operation-fast','gulf-of-tonkin','zero-dark-thirty','sand-creek','pine-ridge','red-summer','wilmington-massacre','north-korean-prison','indonesian-mass','congo-free-state','serbia-bombing'], defs: [
    { name: 'U.S. Department of Defense', role: 'Civilian casualties, budget fraud, and obstruction of accountability', status: 'pending', notes: 'Failed every audit since 2018. Trillions unaccounted for. Civilian casualties undercounted.' },
    { name: 'Donald Rumsfeld', role: 'Authorized enhanced interrogation and misled public about Iraq WMDs', status: 'pending', notes: 'Authorized torture memos. Created Office of Special Plans to cherry-pick intelligence.' },
  ]},
  { keys: ['telecom','fcc','telecommunications','robocall','wire-fraud','wire-transfer'], defs: [
    { name: 'AT&T', role: 'Participated in NSA warrantless surveillance and enabled mass data collection', status: 'settled', notes: 'EFF lawsuit revealed AT&T routed traffic through NSA monitoring facilities.' },
    { name: 'Comcast', role: 'Monopolistic practices and lobbying against net neutrality', status: 'charged', notes: 'FCC fined repeatedly. Spent $160M+ lobbying since 2000.' },
  ]},
  { keys: ['real-estate','farmland','eminent-domain','predatory-towing','title-loan','payday-loan'], defs: [
    { name: 'Blackstone Group', role: 'Largest corporate landlord buying homes after 2008 crisis, driving up rents', status: 'pending', notes: 'Purchased 80,000+ homes at distressed prices. UN criticized impact on housing.' },
  ]},
  { keys: ['health-insurance','healthcare-industry','hospital-price','emergency-room','maternal-mortality','health-policy','disability-benefits','health-data'], defs: [
    { name: 'UnitedHealth Group', role: 'Systematically denied claims using AI algorithms to boost profits', status: 'charged', notes: '$22B profit in 2023 while denying millions of claims. Multiple lawsuits over AI claim denials.' },
  ]},
  { keys: ['nuclear','radiation','cold-war-radiation','radium-girls','emf-assault','emf-radiation','electromagnetic'], defs: [
    { name: 'U.S. Atomic Energy Commission', role: 'Secret radiation experiments on unsuspecting citizens during Cold War', status: 'pending', notes: '1994 Advisory Committee documented thousands of experiments on prisoners, patients, children without consent' },
  ]},
  { keys: ['white-national','christian-national','birther','radicalization','alt-right'], defs: [
    { name: 'Various White Nationalist Organizations', role: 'Domestic terrorism, racist ideology, and infiltration of law enforcement', status: 'charged', notes: 'FBI identified white supremacist extremism as top domestic terrorism threat.' },
  ]},
  { keys: ['union-bust','corporate-labor','corporate-union','fast-food-labor','wage-theft','worker-exploit','forced-arbitration','construction-industry-bid'], defs: [
    { name: 'Amazon.com Inc.', role: 'Spent millions on anti-union consultants to prevent worker organizing', status: 'charged', notes: 'NLRB found Amazon illegally interfered with union elections. Spent $4.3M on anti-union consultants.' },
    { name: 'Walmart', role: 'Systematically suppressed unionization and underpaid workers', status: 'settled', notes: 'Settled wage theft lawsuits for hundreds of millions.' },
  ]},
  { keys: ['epstein','sexual-exploit','sexual-harass','charlie-rose'], defs: [
    { name: 'Jeffrey Epstein', role: 'Operated sex trafficking ring targeting minors with protection from powerful individuals', status: 'convicted', notes: 'Died in custody August 2019. 2008 sweetheart deal from Acosta. Hundreds of victims.' },
    { name: 'Ghislaine Maxwell', role: 'Recruited and groomed underage girls for Epstein network', status: 'convicted', notes: 'Convicted December 2021. Sentenced to 20 years.' },
  ]},
  { keys: ['gun-industry','gun-lobby'], defs: [
    { name: 'National Rifle Association (NRA)', role: 'Blocked gun safety legislation while engaging in self-dealing', status: 'charged', notes: 'NY AG dissolution suit. Wayne LaPierre liable for $5.4M. Russian spy infiltrated NRA.' },
  ]},
  { keys: ['billionaire','offshore-tax','irs-two-tier','vulture-capital','executive-compensation','asset-forfeiture'], defs: [
    { name: 'Various Ultra-Wealthy Individuals', role: 'Used tax avoidance schemes to pay lower rates than working families', status: 'pending', notes: 'ProPublica revealed billionaires paid near-zero effective tax rates in some years' },
  ]},
  { keys: ['genetic-data','biological-experiment','british-american-colonial-bio','birth-rate','population-policy','vaccine-program-demographic','mandatory-sterilization','lobotomy'], defs: [
    { name: 'U.S. Government', role: 'Unauthorized biological and medical experiments including Tuskegee and forced sterilization', status: 'pending', notes: 'Tuskegee withheld treatment from 399 Black men for 40 years. 60,000+ forcibly sterilized.' },
  ]},
  { keys: ['project-2025','democratic-backslid','authoritarian-network','great-reset','global-governance','global-elite','elite-coord','secret-agenda'], defs: [
    { name: 'Heritage Foundation', role: 'Authored Project 2025 to consolidate executive power and dismantle agencies', status: 'pending', notes: '920-page plan to replace civil servants with loyalists, eliminate Dept of Education.' },
  ]},
  { keys: ['fossil-fuel','keystone','oil-spill'], defs: [
    { name: 'ExxonMobil', role: 'Led fossil fuel disinformation denying climate change despite internal knowledge', status: 'charged', notes: 'Internal research confirmed climate change in 1977. Multiple state AG lawsuits.' },
    { name: 'BP', role: 'Deepwater Horizon killed 11 and caused largest U.S. offshore oil spill', status: 'convicted', notes: 'Pled guilty to 14 charges. Paid $65B total. 4.9M barrels spilled.' },
  ]},
  { keys: ['educational-propaganda','school-','academic-medical'], defs: [
    { name: 'Various Government and Corporate Entities', role: 'Funded propaganda through educational institutions', status: 'pending', notes: 'Koch network funded centers at 350+ universities. Pentagon JROTC in 3,400 schools.' },
  ]},
  { keys: ['ev-fraud','auto-industry','startup-fraud','insurance-fraud','payroll-tax-fraud','ghosn','elder-financial'], defs: [
    { name: 'Various Fraudulent Actors', role: 'Consumer fraud, financial exploitation, and market manipulation', status: 'charged', notes: 'FTC received 2.4M fraud reports in 2023 with $10B in losses.' },
  ]},
  { keys: ['foia','redaction-abuse','classification-system','classified-document','government-records','evidence-destruction','email-deletion','oversight-abuse','inspector-general','congress-obstruction','congressional-oversight','census-interference','cabinet-ethics','presidential-misconduct','presidential-immunity','treason'], defs: [
    { name: 'Various Executive Branch Officials', role: 'Obstructed transparency through classification, FOIA delays, and document destruction', status: 'pending', notes: 'Government classifies 50M+ documents annually. Average FOIA response exceeds 100 days.' },
  ]},
  { keys: ['neo-colonialism','color-revolutions','egypt-dictatorship','iraq-sanctions','kremlin','qatar','uae-influence','emirati','chinese-influence','russia-disinfo','ukraine-influence','ukraine-policy','global-terrorism','icc-fugitive','north-korean','royal-coverup','who-china','neocon','bush-dynasty','american-exceptionalism','arms-export','arms-industry','currency-manipulation','congo-free-state','indonesia','africa-destab'], defs: [
    { name: 'Various U.S. Government Officials', role: 'Conducted or supported coups and destabilization in foreign nations', status: 'pending', notes: 'CIA involved in coups in Iran (1953), Guatemala (1954), Chile (1973), and dozens more.' },
    { name: 'Henry Kissinger', role: 'Orchestrated Cambodia bombing, Chilean coup, enabled Indonesian genocide', status: 'pending', notes: 'Responsible for estimated millions of civilian deaths. Died 2023 without prosecution.' },
  ]},
  { keys: ['prison','incarcerat','bop-failures','juvenile-life','juvenile-justice','youth-incarceration'], defs: [
    { name: 'Federal Bureau of Prisons', role: 'Chronic understaffing, violence, and sexual abuse in federal prisons', status: 'charged', notes: 'AP found rampant guard sexual abuse. Multiple wardens convicted. Epstein died under BOP custody.' },
  ]},
  { keys: ['judicial-capture','judicial-corruption','judicial-election','supreme-court-ethics','secret-court-fisa'], defs: [
    { name: 'Clarence Thomas', role: 'Accepted undisclosed luxury gifts from billionaire Harlan Crow', status: 'pending', notes: 'ProPublica revealed decades of undisclosed gifts worth millions.' },
    { name: 'Mark Ciavarella', role: 'Judge who sentenced juveniles to private detention for kickbacks', status: 'incarcerated', notes: 'Kids for Cash: received $2.8M in kickbacks. Sentenced to 28 years.' },
  ]},
  { keys: ['tobacco','teen-nicotine'], defs: [
    { name: 'JUUL Labs', role: 'Targeted teenagers with addictive nicotine products', status: 'settled', notes: 'Paid $462M to 6 states. Created generation of nicotine addicts.' },
    { name: 'Philip Morris/Altria', role: 'Concealed tobacco health risks and marketed to children', status: 'settled', notes: 'Master Settlement (1998): $206B over 25 years. Knew tobacco caused cancer since 1950s.' },
  ]},
  { keys: ['civil-rights','lgbtq','gender-discrim'], defs: [
    { name: 'U.S. Federal and State Governments', role: 'Systematic civil rights violations through slavery, Jim Crow, and ongoing discrimination', status: 'pending', notes: 'From 1619 through present; redlining, mass incarceration, voter suppression continue.' },
  ]},
  { keys: ['boston-archdiocese'], defs: [
    { name: 'Cardinal Bernard Law', role: 'Covered up sexual abuse by priests for decades', status: 'pending', notes: 'Spotlight investigation revealed cover-up. Resigned 2002; moved to Vatican.' },
  ]},
  { keys: ['bitcoin-regulation','cryptocurrency'], defs: [
    { name: 'Sam Bankman-Fried', role: 'FTX founder who stole $8B in customer funds', status: 'convicted', notes: 'Convicted on 7 counts November 2023. Sentenced to 25 years.' },
  ]},
  { keys: ['corporate-consolidation','enron'], defs: [
    { name: 'Various Corporate Executives', role: 'Corporate fraud, accounting manipulation, and self-enrichment', status: 'charged', notes: 'SEC enforcement 700+ per year. Sarbanes-Oxley passed after Enron but fraud persists.' },
  ]},
  { keys: ['bribery-corruption','corruption-in-union','port-authority'], defs: [
    { name: 'Various Public Officials', role: 'Bribery, self-dealing, and corruption in public office', status: 'charged', notes: 'DOJ Public Integrity Section prosecutes ~1,000 cases annually' },
  ]},
  { keys: ['rico-enterprise','shell-company','trade-based-money','money-laundering','art-market-money'], defs: [
    { name: 'Various Criminal Enterprises', role: 'Money laundering and racketeering across jurisdictions', status: 'charged', notes: 'FinCEN Files revealed $2T in suspicious transactions. Corporate Transparency Act addresses shell companies.' },
  ]},
  { keys: ['private-equity-healthcare'], defs: [
    { name: 'KKR & Co.', role: 'Cut hospital staffing to boost profits while patient outcomes worsened', status: 'pending', notes: 'PE ownership linked to 20,150 excess nursing home deaths per NBER study' },
  ]},
  { keys: ['polarization','social-credit','techno-authoritarian'], defs: [
    { name: 'Various Technology and Government Entities', role: 'Building surveillance infrastructure and social control systems', status: 'pending', notes: 'China Social Credit has Western parallels in credit scoring and predictive policing.' },
  ]},
  { keys: ['jackson-mississippi','water-infrastructure'], defs: [
    { name: 'City of Jackson Officials', role: 'Decades of neglect allowing water infrastructure to collapse', status: 'pending', notes: 'EPA declared emergency 2022 after water system failure. Environmental racism documented.' },
  ]},
  { keys: ['crow-network'], defs: [
    { name: 'Harlan Crow', role: 'Provided undisclosed luxury gifts to Justice Clarence Thomas', status: 'pending', notes: 'ProPublica revealed decades of gifts including travel, property, school tuition.' },
  ]},
  { keys: ['defense-tech-oligarchy','artificial-intelligence-arms','autonomous-weapons-development','ai-surveillance'], defs: [
    { name: 'Palantir Technologies', role: 'Built surveillance systems for ICE and military with limited oversight', status: 'pending', notes: 'Enabled ICE raids. Pentagon contracts worth billions. Founded by Peter Thiel.' },
  ]},
  { keys: ['welcome-to-arkhive'], defs: [
    { name: 'Systemic Corruption', role: 'The interconnected web of institutional failures documented across ArkHive', status: 'pending', notes: 'Over 1,200 investigations spanning centuries of systemic harm.' },
  ]},
  { keys: ['vs-pipeline','restitution-evasion'], defs: [
    { name: 'Various Responsible Parties', role: 'Evasion of restitution and pipeline safety violations', status: 'pending', notes: 'GAO found billions in restitution uncollected. Pipeline violations documented by PHMSA.' },
  ]},
  { keys: ['cult-recruitment','modern-behavioral','psychological-manipulation','psychological-operations'], defs: [
    { name: 'Various Intelligence and Corporate Entities', role: 'Psychological manipulation and behavioral influence on unwitting populations', status: 'pending', notes: 'From MKUltra to modern social media manipulation; pattern of experimenting without consent' },
  ]},
  { keys: ['industry-self-regulation','regulatory-capture','faa-regulatory'], defs: [
    { name: 'Various Regulated Industries', role: 'Captured regulators through revolving door and lobbying', status: 'pending', notes: 'Pattern across FAA, SEC, EPA, FCC. Industries spend billions on lobbying.' },
  ]},
  { keys: ['health-data-privacy','genetic-data-privacy'], defs: [
    { name: 'Various Health Tech Companies', role: 'Monetized sensitive health data without adequate consent', status: 'pending', notes: 'FTC fined GoodRx $1.5M, BetterHelp $7.8M. 23andMe bankruptcy raised genetic data concerns.' },
  ]},
  { keys: ['child-labor'], defs: [
    { name: 'Various Multinational Corporations', role: 'Profited from child labor in global supply chains', status: 'charged', notes: 'ILO estimates 160M children in child labor. U.S. states rolling back protections.' },
  ]},
  { keys: ['heroin-trafficking','drug-trafficking','drug-war'], defs: [
    { name: 'Sinaloa Cartel', role: 'Largest trafficking org supplying fentanyl and heroin to U.S.', status: 'charged', notes: 'El Chapo sentenced to life. Sons continue operations. DEA estimates $3B annually.' },
  ]},
  { keys: ['admin-state-capture'], defs: [
    { name: 'Various Political Appointees', role: 'Installed industry-friendly officials to capture regulatory agencies', status: 'pending', notes: 'Pattern across EPA, FCC, OSHA of appointees undermining agency missions' },
  ]},
  { keys: ['agricultural-policy','agribusiness-capture'], defs: [
    { name: 'Monsanto (Bayer)', role: 'Lobbied USDA to weaken standards and approve GMO crops without review', status: 'settled', notes: 'Bayer settled $10.9B for glyphosate. Dominates seed market.' },
  ]},
  { keys: ['amazon-labor'], defs: [
    { name: 'Amazon.com Inc.', role: 'Anti-union campaigns and unsafe warehouse conditions', status: 'charged', notes: 'NLRB complaints for unfair labor practices; OSHA citations for warehouse injuries' },
  ]},
  { keys: ['authoritarianism'], defs: [
    { name: 'Various Authoritarian Leaders', role: 'Democratic backsliding and consolidation of power worldwide', status: 'pending', notes: 'Freedom House documented 18 consecutive years of global democratic decline' },
  ]},
  { keys: ['autonomous-weapons'], defs: [
    { name: 'Various Defense Contractors', role: 'Lethal autonomous weapons without adequate human oversight', status: 'pending', notes: 'UN failed to achieve binding agreement on autonomous weapons regulation' },
  ]},
  { keys: ['aviation-safety'], defs: [
    { name: 'Boeing Company', role: 'Safety failures across 737 MAX and other programs', status: 'charged', notes: 'DOJ charged with fraud conspiracy; 346 killed in two crashes' },
    { name: 'FAA', role: 'Delegated oversight to Boeing through ODA program', status: 'pending', notes: 'Congressional investigations found FAA failed in oversight role' },
  ]},
  { keys: ['astroturfing'], defs: [
    { name: 'Koch Industries', role: 'Funded fake grassroots campaigns to oppose climate and healthcare legislation', status: 'pending', notes: 'Americans for Prosperity and other Koch groups presented as grassroots while entirely industry funded' },
  ]},
  { keys: ['auto-industry-theft'], defs: [
    { name: 'Various Criminal Networks', role: 'Organized auto theft rings exporting stolen vehicles internationally', status: 'charged', notes: 'NICB reports $8.9B in vehicle theft annually. Port-based export rings documented by CBP.' },
  ]},
  { keys: ['algorithmic-discrimination'], defs: [
    { name: 'Various Financial Institutions', role: 'Used discriminatory algorithms in lending decisions', status: 'charged', notes: 'DOJ settled with multiple lenders for algorithmic bias. CFPB enforcement actions.' },
  ]},
  { keys: ['bank-discrimination'], defs: [
    { name: 'Wells Fargo', role: 'Discriminatory lending practices including fake accounts scandal', status: 'settled', notes: 'Paid $3.7B for consumer abuses. Created millions of fake accounts. Redlining settlements.' },
  ]},
  { keys: ['economic-manipulation','economic-policy'], defs: [
    { name: 'Federal Reserve', role: 'Monetary policy decisions that disproportionately benefited wealthy asset holders', status: 'pending', notes: 'Quantitative easing inflated asset prices benefiting top 10%. Wealth inequality widened dramatically.' },
  ]},
  { keys: ['covid-vaccine-profits'], defs: [
    { name: 'Pfizer', role: 'Generated record $100B revenue from COVID vaccines and treatments', status: 'pending', notes: 'Vaccine developed with $2B+ public funding. Company retained patents and set prices.' },
    { name: 'Moderna', role: 'Built $36B vaccine revenue on publicly funded mRNA research', status: 'pending', notes: 'NIH co-developed mRNA technology. Moderna rejected requests to share technology with developing nations.' },
  ]},
  // ── EXPLICIT SLUG MATCHES for remaining 97 ──
  { keys: ['authoritarian-network'], defs: [
    { name: 'Various Authoritarian Leaders', role: 'Coordinated network of autocrats sharing surveillance tech and repression tactics', status: 'pending', notes: 'China, Russia, Saudi Arabia, and others share surveillance technology and coordinate at UN to block human rights accountability' },
  ]},
  { keys: ['admin-state-capture'], defs: [
    { name: 'Various Political Appointees', role: 'Installed industry-friendly officials to undermine regulatory agencies', status: 'pending', notes: 'Documented pattern across EPA, FCC, OSHA of appointees working against agency missions' },
  ]},
  { keys: ['agricultural-policy'], defs: [
    { name: 'U.S. Department of Agriculture', role: 'Subsidies favoring large agribusiness over small farmers', status: 'pending', notes: 'Farm bills direct majority of subsidies to top 10% of producers' },
  ]},
  { keys: ['bush-dynasty'], defs: [
    { name: 'George W. Bush', role: 'Authorized Iraq War based on false WMD claims and CIA torture program', status: 'pending', notes: 'Iraq War caused 300,000+ civilian deaths. Authorized warrantless wiretapping and enhanced interrogation.' },
    { name: 'George H.W. Bush', role: 'Former CIA Director who pardoned Iran-Contra conspirators as President', status: 'pending', notes: 'Pardoned 6 Iran-Contra defendants including Caspar Weinberger. CIA involvement in various covert operations.' },
  ]},
  { keys: ['banking-lobby-capture-of-fed'], defs: [
    { name: 'Various Wall Street Banks', role: 'Captured Federal Reserve governance through revolving door appointments', status: 'pending', notes: 'Regional Fed boards dominated by bank executives. Banks lobbied for Dodd-Frank rollbacks.' },
  ]},
  { keys: ['cybercrimes'], defs: [
    { name: 'Various State-Sponsored Hackers', role: 'Conducted cyberattacks against critical infrastructure and private sector', status: 'charged', notes: 'DOJ indicted Russian GRU, Chinese PLA, North Korean hackers. SolarWinds, Colonial Pipeline attacks.' },
  ]},
  { keys: ['currency-manipulation'], defs: [
    { name: 'Various Central Banks', role: 'Manipulated currency values for competitive trade advantage', status: 'pending', notes: 'China designated currency manipulator by Treasury in 2019. Japan and others conducted massive interventions.' },
  ]},
  { keys: ['census-interference'], defs: [
    { name: 'Wilbur Ross', role: 'Attempted to add citizenship question to suppress minority Census participation', status: 'pending', notes: 'Supreme Court blocked question in 2019 finding pretextual justification.' },
  ]},
  { keys: ['crow-network'], defs: [
    { name: 'Harlan Crow', role: 'Billionaire who gave undisclosed luxury gifts to Justice Thomas', status: 'pending', notes: 'ProPublica investigation revealed decades of undisclosed gifts including travel, property, tuition.' },
  ]},
  { keys: ['covid-misinfo'], defs: [
    { name: 'Various Social Media Platforms', role: 'Failed to contain COVID misinformation that contributed to vaccine hesitancy and deaths', status: 'pending', notes: 'Surgeon General declared health misinformation a public health crisis. Platforms profited from engagement with false content.' },
  ]},
  { keys: ['cdc-testing'], defs: [
    { name: 'CDC', role: 'Botched initial COVID test kits delaying U.S. pandemic response by weeks', status: 'pending', notes: 'Contaminated test kits shipped February 2020. Restrictive testing criteria missed early spread.' },
  ]},
  { keys: ['congress-obstruction'], defs: [
    { name: 'Various Congressional Leaders', role: 'Used procedural tactics to block legislation and oversight', status: 'pending', notes: 'Filibuster blocked hundreds of bills. Committee chairs refused to issue subpoenas for oversight.' },
  ]},
  { keys: ['civil-rights'], defs: [
    { name: 'U.S. Government', role: 'Historical and ongoing systemic civil rights violations', status: 'pending', notes: 'From slavery through Jim Crow to modern voter suppression and mass incarceration' },
  ]},
  { keys: ['climate-obstruction'], defs: [
    { name: 'ExxonMobil', role: 'Led industry campaign to obstruct climate legislation despite knowing the science', status: 'charged', notes: 'Internal research confirmed climate change in 1977. Funded denial for decades. State AG lawsuits.' },
  ]},
  { keys: ['columbus-legacy'], defs: [
    { name: 'Christopher Columbus', role: 'Initiated genocide of indigenous peoples in the Americas through enslavement and violence', status: 'pending', notes: 'Enslaved Taino people, cut off hands for not meeting gold quotas. Population of Hispaniola fell from 250,000 to hundreds.' },
  ]},
  { keys: ['corporate-union-busting'], defs: [
    { name: 'Amazon.com Inc.', role: 'Spent millions on anti-union consultants and surveillance', status: 'charged', notes: 'NLRB found illegal interference with Bessemer union election.' },
    { name: 'Starbucks', role: 'Fired pro-union workers and closed stores to prevent organizing', status: 'charged', notes: 'NLRB filed 100+ unfair labor practice complaints.' },
  ]},
  { keys: ['covid-19-disinformation'], defs: [
    { name: 'Various Politicians and Media Figures', role: 'Spread COVID disinformation undermining public health response', status: 'pending', notes: 'False claims about treatments, masks, and vaccines contributed to preventable deaths.' },
  ]},
  { keys: ['dhs-violations'], defs: [
    { name: 'DHS (Department of Homeland Security)', role: 'Civil liberties violations including warrantless surveillance and excessive force', status: 'pending', notes: 'Portland 2020 federal officers grabbed protesters into unmarked vans. Widespread complaints.' },
  ]},
  { keys: ['doj-corruption'], defs: [
    { name: 'Various Attorneys General', role: 'Politicized DOJ prosecutions across multiple administrations', status: 'pending', notes: 'IG documented political interference in hiring and prosecution decisions.' },
  ]},
  { keys: ['defense-tech-oligarchy'], defs: [
    { name: 'Palantir Technologies', role: 'Built surveillance systems for military and ICE', status: 'pending', notes: 'Pentagon contracts worth billions. Founded by Peter Thiel. Enabled ICE raids.' },
    { name: 'Anduril Industries', role: 'Building autonomous weapons and border surveillance systems', status: 'pending', notes: 'Founded by Palmer Luckey. Autonomous towers deployed at border.' },
  ]},
  { keys: ['donor-crimes'], defs: [
    { name: 'Various Political Donors', role: 'Used campaign contributions to secure favorable policy outcomes', status: 'charged', notes: 'Citizens United unleashed unlimited dark money. Multiple donors convicted of illegal contributions.' },
  ]},
  { keys: ['epa-capture'], defs: [
    { name: 'Scott Pruitt', role: 'EPA Administrator who rolled back 100+ environmental rules while coordinating with industry', status: 'pending', notes: 'Resigned amid 14+ federal investigations into spending and ethics violations.' },
  ]},
  { keys: ['email-deletion'], defs: [
    { name: 'Various Government Officials', role: 'Destroyed government communications to avoid accountability', status: 'pending', notes: 'Bush White House deleted 22M emails on RNC server. Secret Service deleted Jan 6 texts.' },
  ]},
  { keys: ['ecohealth'], defs: [
    { name: 'EcoHealth Alliance', role: 'Funneled NIH grants to Wuhan lab for risky coronavirus research', status: 'charged', notes: 'NIH suspended grant. Peter Daszak failed to disclose research details.' },
  ]},
  { keys: ['environmental-corruption'], defs: [
    { name: 'Various Industrial Polluters', role: 'Corrupted environmental regulators to avoid cleanup costs', status: 'charged', notes: 'EPA Superfund sites number 1,300+. Many polluters avoided full cleanup through lobbying.' },
  ]},
  { keys: ['egypt-dictatorship'], defs: [
    { name: 'Abdel Fattah el-Sisi', role: 'Egyptian military dictator who overthrew elected government and conducted mass killings', status: 'pending', notes: 'Rabaa massacre killed 800+. Holds 60,000+ political prisoners. U.S. provides $1.3B annual military aid.' },
  ]},
  { keys: ['elite-coordination'], defs: [
    { name: 'Various Elite Networks', role: 'Coordinated policy through Bilderberg, WEF, and private gatherings', status: 'pending', notes: 'Davos attendees represent $500T in wealth. Policy coordination documented by investigative journalists.' },
  ]},
  { keys: ['financial-fraud'], defs: [
    { name: 'Bernie Madoff', role: 'Operated largest Ponzi scheme in history defrauding investors of $65B', status: 'convicted', notes: 'Sentenced to 150 years. SEC missed red flags for decades. Died in prison 2021.' },
  ]},
  { keys: ['federal-election-interference'], defs: [
    { name: 'Russian Intelligence (GRU)', role: 'Hacked DNC and conducted social media influence campaign in 2016 election', status: 'indicted', notes: 'Mueller indicted 12 GRU officers and 13 Russian nationals. Senate Intel confirmed Russian interference.' },
  ]},
  { keys: ['faa-regulatory-capture'], defs: [
    { name: 'FAA (Federal Aviation Administration)', role: 'Delegated safety to Boeing creating fatal conflict of interest', status: 'pending', notes: 'ODA program let Boeing certify own aircraft. Congressional report found FAA managers overruled engineers.' },
  ]},
  { keys: ['fast-food-labor'], defs: [
    { name: 'McDonald\'s Corporation', role: 'Wage theft and labor violations across franchise system', status: 'settled', notes: 'NLRB ruled joint employer with franchisees. Multiple wage theft settlements.' },
  ]},
  { keys: ['financial-crisis-profiteering'], defs: [
    { name: 'Goldman Sachs', role: 'Profited from 2008 crisis by betting against securities it sold to clients', status: 'settled', notes: 'Abacus deal: $550M SEC settlement. Received $12.9B through AIG bailout.' },
  ]},
  { keys: ['foreign-government-lobbyist'], defs: [
    { name: 'Various Foreign Governments', role: 'Spent billions lobbying U.S. officials through registered and unregistered agents', status: 'charged', notes: 'Saudi Arabia, UAE, Israel, China top foreign lobbying spenders. Multiple FARA violations prosecuted.' },
  ]},
  { keys: ['factory-farming-animal-cruelty'], defs: [
    { name: 'Tyson Foods', role: 'Systematic animal cruelty in industrial farming operations', status: 'charged', notes: 'Multiple undercover investigations documented abuse. USDA enforcement minimal.' },
  ]},
  { keys: ['global-trafficking'], defs: [
    { name: 'Various Criminal Networks', role: 'Global human trafficking affecting 24.9M people', status: 'charged', notes: 'Generates $150B annually. State Dept TIP Report documents trafficking in 188 countries.' },
  ]},
  { keys: ['gun-lobby-influence'], defs: [
    { name: 'NRA (National Rifle Association)', role: 'Blocked gun safety legislation through massive lobbying and campaign contributions', status: 'charged', notes: 'Spent $250M+ on political activities. Graded legislators. Russian money funneled through organization.' },
  ]},
  { keys: ['global-elite'], defs: [
    { name: 'World Economic Forum', role: 'Platform for elite coordination of global economic policy', status: 'pending', notes: 'Annual Davos meeting brings together billionaires and heads of state for policy coordination.' },
  ]},
  { keys: ['ghosn-financial-crimes'], defs: [
    { name: 'Carlos Ghosn', role: 'Nissan-Renault CEO who concealed $140M in compensation and misused corporate funds', status: 'charged', notes: 'Arrested in Tokyo 2018. Escaped Japan in audio equipment box to Lebanon in 2019. Interpol red notice.' },
  ]},
  { keys: ['global-terrorism-networks'], defs: [
    { name: 'Various Terrorist Organizations', role: 'International terrorism networks including Al-Qaeda and ISIS', status: 'charged', notes: 'Post-9/11 war on terror cost $8T. Drone strikes in 7+ countries. Civil liberties curtailed domestically.' },
  ]},
  { keys: ['government-contract-fraud'], defs: [
    { name: 'Various Defense Contractors', role: 'Defrauded government through overbilling, defective products, and no-bid contracts', status: 'charged', notes: 'DOJ False Claims Act recoveries exceed $70B since 1986. Halliburton alone faced $7B in Iraq fraud allegations.' },
  ]},
  { keys: ['government-surveillance-of-journalists'], defs: [
    { name: 'U.S. Department of Justice', role: 'Secretly seized journalists phone and email records to identify sources', status: 'pending', notes: 'Obama DOJ secretly obtained AP phone records. Trump DOJ seized records from CNN, NYT, WaPo reporters.' },
  ]},
  { keys: ['health-policy'], defs: [
    { name: 'Health Insurance Industry', role: 'Lobbied against universal healthcare to protect profits', status: 'pending', notes: 'Industry spent $153M lobbying in 2020. U.S. is only developed nation without universal coverage. 30M uninsured.' },
  ]},
  { keys: ['hedge-fund-corruption'], defs: [
    { name: 'Citadel/Ken Griffin', role: 'Market manipulation through payment for order flow and high-frequency trading', status: 'pending', notes: 'GameStop squeeze revealed Citadel influence. Paid $700M for order flow. SEC investigating.' },
  ]},
  { keys: ['homeland-security-mission-creep'], defs: [
    { name: 'DHS (Department of Homeland Security)', role: 'Expanded far beyond original counter-terrorism mandate into domestic surveillance', status: 'pending', notes: 'Created post-9/11 with 240,000 employees. Fusion centers monitor journalists and activists. Budget exceeds $60B.' },
  ]},
  { keys: ['iraq-sanctions'], defs: [
    { name: 'U.S. Government', role: 'Imposed sanctions that caused 500,000+ Iraqi civilian deaths including children', status: 'pending', notes: 'UNICEF estimated 500,000 child deaths. Madeleine Albright said price was "worth it" on 60 Minutes.' },
  ]},
  { keys: ['ice-detention-deaths'], defs: [
    { name: 'ICE (Immigration and Customs Enforcement)', role: 'Detainee deaths from medical neglect and abuse in detention facilities', status: 'charged', notes: '200+ detainee deaths documented since 2004. Inadequate medical care. Whistleblower alleged forced hysterectomies.' },
  ]},
  { keys: ['israel-lobby-influence'], defs: [
    { name: 'AIPAC', role: 'Spent $100M+ to influence U.S. policy toward unconditional support for Israel', status: 'pending', notes: 'Largest foreign policy lobbying force. United Democracy Project Super PAC spent $25M in 2024 primaries.' },
  ]},
  { keys: ['indigenous-land-rights'], defs: [
    { name: 'Various Governments and Corporations', role: 'Seized indigenous lands for resource extraction and development', status: 'pending', notes: 'Standing Rock, Line 3, Oak Flat. Treaty violations ongoing. Extractive industries on tribal lands.' },
  ]},
  { keys: ['judicial-capture'], defs: [
    { name: 'Federalist Society', role: 'Orchestrated conservative capture of federal judiciary', status: 'pending', notes: 'Vetted all Trump judicial nominees. 6 of 9 Supreme Court justices connected to organization.' },
  ]},
  { keys: ['journalistic-source-protection'], defs: [
    { name: 'U.S. Department of Justice', role: 'Prosecuted and surveilled journalists to identify confidential sources', status: 'pending', notes: 'James Risen, James Rosen targeted. No federal shield law. Espionage Act used against leakers.' },
  ]},
  { keys: ['keystone-pipeline'], defs: [
    { name: 'TransCanada (TC Energy)', role: 'Proposed Keystone XL pipeline through sensitive aquifer and indigenous lands', status: 'pending', notes: 'Permit revoked by Biden 2021. Eminent domain threatened. Indigenous and environmental opposition.' },
  ]},
  { keys: ['lab-leak'], defs: [
    { name: 'Wuhan Institute of Virology', role: 'Conducted coronavirus research under BSL-4 conditions with potential safety lapses', status: 'pending', notes: 'FBI and DOE assessed lab leak origin as most likely. Chinese government blocked independent investigation.' },
  ]},
  { keys: ['media-control'], defs: [
    { name: 'Various Media Conglomerates', role: '6 corporations control 90% of U.S. media enabling narrative control', status: 'pending', notes: 'Comcast, Disney, News Corp, AT&T, Paramount, Sony dominate. Local news decimated.' },
  ]},
  { keys: ['medical-tyranny'], defs: [
    { name: 'Various Government Agencies', role: 'Imposed public health mandates with inadequate democratic oversight', status: 'pending', notes: 'Vaccine mandates, lockdowns, and emergency powers raised civil liberties concerns across political spectrum.' },
  ]},
  { keys: ['media-manipulation'], defs: [
    { name: 'Various Government and Corporate Entities', role: 'Coordinated media manipulation through propaganda and access journalism', status: 'pending', notes: 'Pentagon paid $500M+ for Iraq war propaganda. CIA Operation Mockingbird embedded agents in newsrooms.' },
  ]},
  { keys: ['media-fraud'], defs: [
    { name: 'Various Media Organizations', role: 'Published fabricated stories and failed to correct record', status: 'pending', notes: 'Jayson Blair (NYT), Stephen Glass (TNR), and others fabricated stories. Corrections rarely reach original audience.' },
  ]},
  { keys: ['michael-brown-shooting'], defs: [
    { name: 'Darren Wilson', role: 'Ferguson police officer who shot and killed unarmed Michael Brown on August 9, 2014', status: 'pending', notes: 'Grand jury declined to indict. DOJ found no basis for federal charges but found systemic racism in Ferguson PD.' },
    { name: 'Ferguson Police Department', role: 'Systematic racial discrimination and excessive force against Black residents', status: 'charged', notes: 'DOJ pattern-or-practice investigation found revenue-driven policing targeting Black community.' },
  ]},
  { keys: ['military-readiness'], defs: [
    { name: 'U.S. Department of Defense', role: 'Wasted trillions on failed weapons systems while troops lacked basic equipment', status: 'pending', notes: 'F-35 program cost $1.7T. Pentagon failed every audit. Troops deployed without adequate armor in Iraq.' },
  ]},
  { keys: ['neocon-network'], defs: [
    { name: 'Paul Wolfowitz', role: 'Architect of Iraq War who pushed false WMD intelligence', status: 'pending', notes: 'Deputy Secretary of Defense. Predicted Iraq War would cost $50B and pay for itself. Actual cost: $3T+.' },
    { name: 'Dick Cheney', role: 'Vice President who drove Iraq War while Halliburton received no-bid contracts', status: 'pending', notes: 'Former Halliburton CEO. Pushed false WMD claims. Authorized CIA torture program.' },
  ]},
  { keys: ['nih-wuhan'], defs: [
    { name: 'NIH (National Institutes of Health)', role: 'Funded risky coronavirus research at Wuhan lab with inadequate oversight', status: 'pending', notes: 'Funded through EcoHealth Alliance. Gain-of-function research debate. Congressional investigation ongoing.' },
  ]},
  { keys: ['pentagon-response'], defs: [
    { name: 'U.S. Department of Defense', role: 'Failed to respond to 9/11 attack for critical 93 minutes despite advance warnings', status: 'pending', notes: 'NORAD exercises confused response. 9/11 Commission found systemic communication failures.' },
  ]},
  { keys: ['presidential-immunity'], defs: [
    { name: 'Supreme Court', role: 'Granted broad presidential immunity in Trump v. United States (2024)', status: 'pending', notes: 'Ruled presidents have absolute immunity for core constitutional powers and presumptive immunity for official acts.' },
  ]},
  { keys: ['polarization'], defs: [
    { name: 'Various Social Media Companies', role: 'Algorithms optimized for engagement amplified division and extremism', status: 'pending', notes: 'Internal Meta research showed algorithms pushed users toward extremism. Pew: partisan antipathy doubled since 1994.' },
  ]},
  { keys: ['press-freedom-violations'], defs: [
    { name: 'Various Government Entities', role: 'Arrested, surveilled, and prosecuted journalists for reporting', status: 'pending', notes: 'U.S. Press Freedom Tracker documented 900+ press freedom violations 2017-2024. Assange prosecution chilled reporting.' },
  ]},
  { keys: ['protest-violence'], defs: [
    { name: 'Various Law Enforcement Agencies', role: 'Used excessive force against peaceful protesters', status: 'charged', notes: '2020 BLM protests: 1,000+ incidents of police violence against protesters documented by Amnesty International.' },
  ]},
  { keys: ['public-health-threats'], defs: [
    { name: 'Various Industrial Polluters', role: 'Created public health crises through pollution and regulatory capture', status: 'charged', notes: 'Flint water crisis, PFAS contamination, air pollution cause 100,000+ premature U.S. deaths annually.' },
  ]},
  { keys: ['private-military-contractor'], defs: [
    { name: 'Blackwater (Academi)', role: 'Private military contractors committed war crimes including Nisour Square massacre', status: 'convicted', notes: 'Four contractors convicted for killing 17 Iraqi civilians in 2007. Erik Prince founder. Trump pardoned contractors.' },
  ]},
  { keys: ['parental-accountability'], defs: [
    { name: 'Various Government Agencies', role: 'Failed to protect children from abuse while punishing parents selectively', status: 'pending', notes: 'CPS system both over-polices poor and minority families and misses severe abuse in affluent homes.' },
  ]},
  { keys: ['qatar-extortion'], defs: [
    { name: 'Qatari Government', role: 'Used sovereign wealth to influence Western institutions and shield from accountability', status: 'pending', notes: 'Hosted 2022 World Cup built by exploited migrant labor. EU Parliament corruption scandal (Qatargate).' },
  ]},
  { keys: ['russia-disinformation'], defs: [
    { name: 'Internet Research Agency (Russia)', role: 'Conducted massive social media influence operation targeting U.S. elections', status: 'indicted', notes: 'Mueller indicted 13 Russians and 3 entities. Created fake American personas and organized real protests.' },
  ]},
  { keys: ['republican-dark-money'], defs: [
    { name: 'Koch Network', role: 'Spent billions through dark money organizations on Republican candidates and causes', status: 'pending', notes: 'Koch political network spent $889M in 2016 cycle through undisclosed donors.' },
  ]},
  { keys: ['royal-coverup'], defs: [
    { name: 'British Royal Family', role: 'Concealed scandals including Prince Andrew connections to Jeffrey Epstein', status: 'pending', notes: 'Prince Andrew settled Virginia Giuffre lawsuit. Royal family used legal threats to suppress media coverage.' },
  ]},
  { keys: ['restitution-evasion'], defs: [
    { name: 'Various Convicted Defendants', role: 'Evaded court-ordered restitution through asset hiding and legal maneuvers', status: 'charged', notes: 'GAO found $110B in criminal debt largely uncollectable. Wealthy defendants hide assets offshore.' },
  ]},
  { keys: ['secret-agendas'], defs: [
    { name: 'Various Government and Corporate Entities', role: 'Concealed true policy objectives behind public justifications', status: 'pending', notes: 'Iraq War WMD claims, NSA surveillance denials, and corporate lobbying agendas documented by investigative journalism.' },
  ]},
  { keys: ['sovereign-debt'], defs: [
    { name: 'IMF and World Bank', role: 'Imposed structural adjustment programs devastating developing nations', status: 'pending', notes: 'Forced privatization, austerity, and deregulation as conditions for loans. Contributed to poverty in Global South.' },
  ]},
  { keys: ['serbia-bombing'], defs: [
    { name: 'NATO/U.S. Government', role: 'Bombed Serbia for 78 days in 1999 without UN authorization', status: 'pending', notes: 'Operation Allied Force killed 500+ civilians. Targeted infrastructure including Chinese embassy. No UNSC authorization.' },
  ]},
  { keys: ['sexual-harassment'], defs: [
    { name: 'Harvey Weinstein', role: 'Decades of sexual assault and harassment enabled by Hollywood power structure', status: 'convicted', notes: 'Convicted 2020 in NY (23 years), 2022 in LA (16 years). Triggered #MeToo movement.' },
  ]},
  { keys: ['social-engineering-fraud'], defs: [
    { name: 'Various Cybercriminal Networks', role: 'Used social engineering tactics to steal billions through fraud', status: 'charged', notes: 'FBI IC3 reported $12.5B in losses from internet crime in 2023. Business email compromise largest category.' },
  ]},
  { keys: ['startup-fraud'], defs: [
    { name: 'Elizabeth Holmes', role: 'Theranos founder who defrauded investors of $700M with fake blood testing technology', status: 'convicted', notes: 'Convicted on 4 counts of fraud in 2022. Sentenced to 11 years.' },
  ]},
  { keys: ['treason'], defs: [
    { name: 'Various Historical Figures', role: 'Acts of treason and sedition against the United States', status: 'charged', notes: 'From Benedict Arnold to modern espionage cases. Seditious conspiracy charges filed for Jan 6.' },
  ]},
  { keys: ['torture-program'], defs: [
    { name: 'CIA', role: 'Operated global torture program at black sites after 9/11', status: 'pending', notes: 'Senate Torture Report documented waterboarding, rectal feeding, sleep deprivation. No prosecutions.' },
  ]},
  { keys: ['tech-censorship'], defs: [
    { name: 'Various Social Media Companies', role: 'Inconsistent content moderation policies criticized by both left and right', status: 'pending', notes: 'Section 230 debates. Platforms banned Trump post-Jan 6. Murthy v. Missouri addressed government jawboning.' },
  ]},
  { keys: ['torture-accountability'], defs: [
    { name: 'George W. Bush', role: 'Authorized enhanced interrogation program amounting to torture', status: 'pending', notes: 'Executive orders authorized CIA program. Senate report found techniques were torture. No prosecutions.' },
  ]},
  { keys: ['tech-labor-exploitation'], defs: [
    { name: 'Various Tech Companies', role: 'Exploited workers through H-1B visa system and contractor classification', status: 'charged', notes: 'Google, Apple, Meta settled $415M anti-poaching lawsuit. Contractors denied benefits.' },
  ]},
  { keys: ['telecom-privacy'], defs: [
    { name: 'Various Telecom Companies', role: 'Sold customer location data and cooperated with warrantless surveillance', status: 'settled', notes: 'FCC fined carriers $200M for selling location data. AT&T NSA collaboration documented.' },
  ]},
  { keys: ['ukraine-influence'], defs: [
    { name: 'Paul Manafort', role: 'Lobbied for Ukrainian oligarchs while serving as Trump campaign chairman', status: 'convicted', notes: 'Convicted of tax fraud and bank fraud related to Ukraine lobbying. Sentenced to 7.5 years. Trump pardoned.' },
  ]},
  { keys: ['uae-influence'], defs: [
    { name: 'United Arab Emirates', role: 'Funded influence operations in U.S. politics through lobbyists and donations', status: 'charged', notes: 'Tom Barrack charged with illegal foreign lobbying for UAE. $150M+ in registered lobbying.' },
  ]},
  { keys: ['utility-shutoff-deaths'], defs: [
    { name: 'Various Utility Companies', role: 'Shut off power and gas to vulnerable customers resulting in deaths', status: 'charged', notes: 'Texas grid failure killed 246+ in 2021. Utility shutoffs linked to hundreds of preventable deaths annually.' },
  ]},
  { keys: ['vs-pipeline'], defs: [
    { name: 'Various Pipeline Operators', role: 'Safety violations and environmental contamination from pipeline operations', status: 'charged', notes: 'PHMSA documented thousands of pipeline incidents. Colonial Pipeline hack exposed infrastructure vulnerability.' },
  ]},
  { keys: ['welcome-to-arkhive'], defs: [
    { name: 'Systemic Corruption', role: 'The web of institutional failures documented across 1,200+ ArkHive investigations', status: 'pending', notes: 'ArkHive tracks systemic harm from colonial atrocities to modern surveillance.' },
  ]},
  { keys: ['white-nationalism'], defs: [
    { name: 'Various White Nationalist Organizations', role: 'Organized domestic terrorism and infiltrated law enforcement', status: 'charged', notes: 'FBI: white supremacist extremism is top domestic terrorism threat. Majority of domestic terrorism deaths since 2000.' },
  ]},
  { keys: ['who-china'], defs: [
    { name: 'World Health Organization', role: 'Delayed declaring COVID pandemic and deferred to China on early response', status: 'pending', notes: 'Declared pandemic March 11, 2020 after weeks of delay. Independent panel found WHO acted too slowly.' },
  ]},
  { keys: ['wuhan-lab'], defs: [
    { name: 'Wuhan Institute of Virology', role: 'Conducted coronavirus research with potential lab safety failures', status: 'pending', notes: 'FBI assessed lab leak most likely origin. China blocked WHO investigation access.' },
  ]},
  { keys: ['wall-street-manipulation'], defs: [
    { name: 'Various Wall Street Firms', role: 'Systematic market manipulation through dark pools, HFT, and spoofing', status: 'charged', notes: 'DOJ and SEC brought dozens of spoofing cases. GameStop revealed payment for order flow conflicts.' },
  ]},
  { keys: ['wartime-civil-liberties'], defs: [
    { name: 'U.S. Government', role: 'Suspended civil liberties during wartime from Sedition Act to PATRIOT Act', status: 'pending', notes: 'Japanese internment, McCarthyism, COINTELPRO, warrantless wiretapping. Pattern repeats with each conflict.' },
  ]},
  { keys: ['predatory-towing-industry'], defs: [
    { name: 'Various Predatory Towing Companies', role: 'Illegal towing and excessive fees targeting vulnerable communities', status: 'charged', notes: 'FTC and state AGs documented widespread predatory practices. Low-income communities disproportionately affected.' },
  ]},
  { keys: ['zaire-mobutu'], defs: [
    { name: 'Mobutu Sese Seko', role: 'Dictator who looted $5B from Zaire while supported by U.S. and Western governments', status: 'pending', notes: 'Ruled 1965-1997 with U.S./CIA backing. Embezzled $5B. Country remained impoverished. Died in exile 1997.' },
    { name: 'CIA', role: 'Supported Mobutu dictatorship as Cold War anti-communist ally', status: 'pending', notes: 'CIA helped install Mobutu after assassination of Patrice Lumumba. Provided decades of military and financial support.' },
  ]},
  { keys: ['activism-harassment'], defs: [
    { name: 'Various Government and Corporate Entities', role: 'Targeted activists with surveillance, harassment, and legal retaliation', status: 'pending', notes: 'COINTELPRO targeted civil rights leaders. Modern SLAPP suits and police surveillance of activists documented.' },
  ]},
  { keys: ['institutional-abuse'], defs: [
    { name: 'Various Institutional Leaders', role: 'Enabled systemic abuse within institutions through cover-ups and retaliation against whistleblowers', status: 'pending', notes: 'Pattern across religious institutions, military, prisons, and care facilities. Accountability rare.' },
  ]},
  { keys: ['medical-ethics'], defs: [
    { name: 'Various Medical Researchers and Institutions', role: 'Violated medical ethics through unauthorized experiments and conflicts of interest', status: 'pending', notes: 'From Tuskegee to modern clinical trial fraud. Informed consent violations documented across decades.' },
  ]},
  { keys: ['obesity-epidemic'], defs: [
    { name: 'Various Food and Beverage Corporations', role: 'Engineered addictive ultra-processed foods and funded research to deflect blame from sugar', status: 'pending', notes: 'Sugar industry paid Harvard researchers in 1960s to blame fat. Ultra-processed foods linked to obesity crisis. Industry lobbied against nutritional regulation.' },
  ]},
  { keys: ['political-violence'], defs: [
    { name: 'Various Domestic Extremist Groups', role: 'Committed politically motivated violence including assassinations and bombings', status: 'charged', notes: 'FBI domestic terrorism investigations increased 357% from 2013-2021. January 6 was largest attack on Capitol since 1814.' },
  ]},
];

function findDefendants(slug) {
  for (const pool of POOLS) {
    for (const key of pool.keys) {
      if (slug.includes(key) || new RegExp(key, 'i').test(slug)) {
        return pool.defs;
      }
    }
  }
  return null;
}

function processFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');
  let output = text;
  const slugRe = /'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/g;
  let match;
  const insertions = [];
  let changed = false;
  let defsAdded = 0;

  while ((match = slugRe.exec(text)) !== null) {
    const slug = match[1];
    const startPos = match.index;
    const after = text.slice(startPos, startPos + 20000);
    // Find end of this investigation by brace counting
    let investEnd = -1;
    let bd = 0;
    const bStart = after.indexOf('{');
    for (let j = bStart; j < after.length; j++) {
      if (after[j] === '{') bd++;
      if (after[j] === '}') { bd--; if (bd === 0) { investEnd = j; break; } }
    }
    if (investEnd === -1) investEnd = 15000;
    if (/defendants:\s*\[/.test(after.slice(0, investEnd + 10))) continue;
    const defs = findDefendants(slug);
    if (!defs || defs.length === 0) continue;

    const sourcesMatch = after.match(/sources:\s*\[/);
    if (!sourcesMatch) continue;
    const srcStart = sourcesMatch.index;
    let depth = 0, srcEnd = -1;
    for (let j = srcStart; j < after.length; j++) {
      if (after[j] === '[') depth++;
      if (after[j] === ']') { depth--; if (depth === 0) { srcEnd = j; break; } }
    }
    if (srcEnd === -1) continue;

    let closingPos = -1, braceDepth = 0;
    const investStart = startPos + match[0].indexOf('{');
    for (let j = investStart; j < text.length; j++) {
      if (text[j] === '{') braceDepth++;
      if (text[j] === '}') { braceDepth--; if (braceDepth === 0) { closingPos = j; break; } }
    }
    if (closingPos === -1) continue;

    let lineStart = closingPos;
    while (lineStart > 0 && text[lineStart - 1] !== '\n') lineStart--;

    let indent = '    ';
    const indentMatch = after.match(/(\s+)sources:/);
    if (indentMatch) indent = indentMatch[1];

    const defLines = [];
    defLines.push(`${indent}defendants: [`);
    for (let k = 0; k < defs.length; k++) {
      const d = defs[k];
      const safeName = d.name.replace(/'/g, "\\'");
      const safeRole = d.role.replace(/'/g, "\\'");
      const safeNotes = d.notes.replace(/'/g, "\\'");
      const comma = k < defs.length - 1 ? ',' : '';
      defLines.push(`${indent}  { name: '${safeName}', role: '${safeRole}', status: '${d.status}', notes: '${safeNotes}' }${comma}`);
    }
    defLines.push(`${indent}],`);

    insertions.push({ position: lineStart, text: defLines.join('\r\n') + '\r\n' });
    defsAdded += defs.length;
    changed = true;
  }

  if (!changed) return { added: 0 };
  insertions.sort((a, b) => b.position - a.position);
  for (const ins of insertions) {
    output = output.slice(0, ins.position) + ins.text + output.slice(ins.position);
  }
  output = output.replace(/\r?\n/g, '\r\n');
  output = output.replace(/\s+$/, '\r\n');
  fs.writeFileSync(filePath, output, 'utf-8');
  return { added: defsAdded };
}

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();
let totalAdded = 0, filesChanged = 0;
for (const file of files) {
  const r = processFile(path.join(DIR, file));
  if (r.added > 0) { filesChanged++; console.log(`${file}: +${r.added}`); totalAdded += r.added; }
}
console.log(`\nFiles: ${filesChanged} | Defendants: ${totalAdded}`);
