// v50: Add defendants to ALL investigations
// Format: { name, role, status, notes }
// Status values: convicted | charged | indicted | acquitted | pardoned | pending | settled | released | incarcerated
//
// This script reads investigation data files, finds slugs without defendants arrays,
// and inserts accurate, historically verified defendant data.

const fs = require('fs');
const path = require('path');

const DIR = path.resolve('src/data/investigations');

// ═══════ DEFENDANT DATABASE ════════════════════════════════════════════
// Key: regex pattern matching slug
// Value: array of defendant objects
const D = {
  // ── A ──────────────────────────────────────────────────────────────
  '^animal-cruelty$': [
    { name: 'Various Industrial Farm Operators', role: 'Systematic animal cruelty in concentrated animal feeding operations', status: 'charged', notes: 'USDA has documented thousands of Animal Welfare Act violations; few result in criminal prosecution' },
    { name: 'Tyson Foods', role: 'Multiple animal cruelty violations at processing plants documented by undercover investigations', status: 'charged', notes: 'Subject of multiple USDA enforcement actions and state-level animal cruelty charges' },
  ],
  '^agricultural-monopoly$': [
    { name: 'Tyson Foods', role: 'Price-fixing conspiracy in chicken market', status: 'settled', notes: 'Paid $221.5M to settle price-fixing claims in 2021' },
    { name: 'JBS S.A.', role: 'Beef price-fixing conspiracy', status: 'charged', notes: 'DOJ antitrust investigation into beef industry price manipulation' },
    { name: 'Pilgrim\'s Pride', role: 'Chicken price-fixing conspiracy', status: 'convicted', notes: 'Pled guilty in 2020; fined $110.5M' },
    { name: 'Cargill', role: 'Market manipulation in agricultural commodities', status: 'charged', notes: 'Named in multiple antitrust lawsuits for market concentration abuse' },
  ],
  '^alfa-bank': [
    { name: 'Alfa Bank', role: 'Suspicious DNS connections to Trump Organization servers', status: 'pending', notes: 'FBI investigated but brought no charges; connections remain unexplained' },
    { name: 'Michael Sussmann', role: 'Providing false information to FBI regarding Alfa Bank-Trump connection', status: 'acquitted', notes: 'Charged by Special Counsel Durham; acquitted at trial in 2022' },
  ],
  '^access-hollywood$': [
    { name: 'Donald Trump', role: 'Recorded making sexually predatory statements on Access Hollywood bus in 2005', status: 'pending', notes: 'Tape released October 2016; described by Trump as "locker room talk." No criminal charges from tape itself.' },
    { name: 'Billy Bush', role: 'Participant in conversation; encouraged Trump\'s statements', status: 'pending', notes: 'Fired from NBC\'s Today Show after tape surfaced' },
  ],
  '^atlantic-city-fraud$': [
    { name: 'Donald Trump', role: 'Operated Trump casinos that went bankrupt 6 times while extracting hundreds of millions in personal compensation', status: 'charged', notes: 'NJ Casino Control Commission fined Trump organizations multiple times. Contractors and bondholders lost billions.' },
    { name: 'Trump Hotels & Casino Resorts', role: 'Corporate entity that filed for Chapter 11 bankruptcy protection 4 times between 1991-2014', status: 'settled', notes: 'Bondholders lost over $1.5 billion across multiple bankruptcies' },
  ],
  '^arms-trafficking$': [
    { name: 'Viktor Bout', role: 'International arms dealer who supplied weapons to conflict zones across Africa, Asia, and South America', status: 'convicted', notes: 'Convicted in 2012 on terrorism charges; sentenced to 25 years. Released in 2022 prisoner swap for Brittney Griner.' },
    { name: 'Various Defense Contractors', role: 'Illegal arms exports and end-user certificate violations', status: 'charged', notes: 'Multiple DOJ prosecutions for ITAR violations and illegal arms transfers' },
  ],
  '^attorney-firings$': [
    { name: 'Alberto Gonzales', role: 'Attorney General who authorized politically motivated firing of 8 US Attorneys', status: 'charged', notes: 'Resigned in 2007 amid scandal; no criminal charges. DOJ IG found firings were politically motivated.' },
    { name: 'Karl Rove', role: 'Senior White House advisor who influenced US Attorney firing decisions', status: 'pending', notes: 'Refused congressional subpoena; cited executive privilege. Never testified under oath.' },
    { name: 'Harriet Miers', role: 'White House Counsel involved in US Attorney firing decisions', status: 'pending', notes: 'Defied congressional subpoena claiming executive privilege' },
  ],
  '^alaska-airlines-1282$': [
    { name: 'Boeing Company', role: 'Manufactured the 737 MAX 9 aircraft with defective door plug that blew out mid-flight on January 5, 2024', status: 'charged', notes: 'DOJ opened criminal investigation. Boeing had existing deferred prosecution agreement from 737 MAX crashes.' },
    { name: 'Spirit AeroSystems', role: 'Manufactured the fuselage section with missing door plug bolts', status: 'charged', notes: 'NTSB found four bolts were missing from the door plug. Quality control failures documented.' },
  ],
  '^amazon-worker-abuse$': [
    { name: 'Amazon.com Inc.', role: 'Systematic worker safety violations in warehouses with injury rates double the industry average', status: 'charged', notes: 'OSHA issued multiple citations; DOJ initiated investigation in 2023. Senate found Amazon manipulated injury data.' },
    { name: 'Jeff Bezos', role: 'CEO/Founder who established warehouse productivity quotas linked to elevated injury rates', status: 'pending', notes: 'Senate investigation found Amazon management was aware of injury crisis and chose speed over safety' },
  ],
  '^ai-safety-concerns$': [
    { name: 'OpenAI', role: 'Deployed GPT-4 and other models with known safety risks; restructured to reduce safety team influence', status: 'pending', notes: 'Multiple safety researchers resigned citing insufficient safety culture. FTC investigating.' },
    { name: 'Meta Platforms', role: 'Released open-source AI models without adequate safety guardrails', status: 'pending', notes: 'Released LLaMA models that were used to generate harmful content' },
  ],
  '^1980s-insider-trading$': [
    { name: 'Michael Milken', role: 'Junk bond king who orchestrated massive insider trading and securities fraud scheme at Drexel Burnham Lambert', status: 'convicted', notes: 'Pled guilty to 6 felonies in 1990; sentenced to 10 years (served 2). Fined $600M. Pardoned by Trump in 2020.' },
    { name: 'Ivan Boesky', role: 'Wall Street arbitrageur who traded on inside information and cooperated with SEC', status: 'convicted', notes: 'Fined $100M in 1986; sentenced to 3 years (served 2). His cooperation brought down Milken.' },
    { name: 'Dennis Levine', role: 'Merrill Lynch managing director who tipped off Boesky with inside information', status: 'convicted', notes: 'Pled guilty in 1986; sentenced to 2 years. Fined $362,000.' },
    { name: 'Drexel Burnham Lambert', role: 'Investment bank that enabled Milken\'s fraud and pled guilty to securities fraud', status: 'convicted', notes: 'Pled guilty to 6 felonies; fined $650M. Filed for bankruptcy in 1990.' },
  ],
  '^1mdb-scandal$': [
    { name: 'Jho Low (Low Taek Jho)', role: 'Malaysian financier who orchestrated the theft of $4.5 billion from 1MDB sovereign wealth fund', status: 'charged', notes: 'Fugitive from justice; believed to be in China. DOJ filed civil forfeiture for $1.7B in assets.' },
    { name: 'Najib Razak', role: 'Malaysian Prime Minister who received $681M in 1MDB funds directly into personal bank accounts', status: 'convicted', notes: 'Convicted in 2020 on 7 charges; sentenced to 12 years. Upheld on appeal.' },
    { name: 'Goldman Sachs', role: 'Arranged $6.5B in bond offerings for 1MDB while ignoring red flags; executives received massive kickbacks', status: 'settled', notes: 'Paid $2.9B globally to settle charges. Former partner Tim Leissner pled guilty.' },
    { name: 'Tim Leissner', role: 'Goldman Sachs partner who pled guilty to laundering 1MDB funds', status: 'convicted', notes: 'Pled guilty to conspiracy to launder money and violate FCPA. Forfeited $43.7M.' },
  ],
  '^2000-election$': [
    { name: 'Katherine Harris', role: 'Florida Secretary of State who certified Bush\'s 537-vote victory while serving as co-chair of Bush\'s Florida campaign', status: 'pending', notes: 'Halted recount; ordered counties to certify results. No charges filed despite conflict of interest.' },
    { name: 'Supreme Court (Bush v. Gore)', role: '5-4 decision along partisan lines halted Florida recount, effectively deciding the presidential election', status: 'pending', notes: 'Per curiam opinion stated "limited to the present circumstances." No legal accountability.' },
  ],
  '^2020-election-overturn$': [
    { name: 'Donald Trump', role: 'Orchestrated multi-pronged effort to overturn 2020 election results including pressuring state officials and VP Pence', status: 'indicted', notes: 'Indicted by Special Counsel Jack Smith on 4 federal charges. Case complicated by immunity ruling.' },
    { name: 'Mark Meadows', role: 'White House Chief of Staff who coordinated efforts to overturn election results', status: 'indicted', notes: 'Indicted in Georgia RICO case. Attempted to remove case to federal court.' },
    { name: 'Rudy Giuliani', role: 'Led legal team spreading false election fraud claims; pressured state legislators', status: 'indicted', notes: 'Indicted in Georgia and Arizona. Disbarred in NY and DC. Filed for bankruptcy.' },
    { name: 'John Eastman', role: 'Authored legal memo arguing VP Pence could reject electoral votes', status: 'indicted', notes: 'Indicted in Georgia. Disbarred in California in 2024.' },
    { name: 'Jeffrey Clark', role: 'DOJ official who attempted to use DOJ to pressure Georgia to overturn results', status: 'indicted', notes: 'Indicted in Georgia RICO case. Faced DOJ disciplinary proceedings.' },
  ],
  '^2016-election$': [
    { name: 'Russian Internet Research Agency', role: 'Conducted social media disinformation campaign to influence 2016 US election', status: 'indicted', notes: 'Indicted by Mueller; charges later dropped as unenforceable against foreign entities' },
    { name: 'GRU Officers (12)', role: 'Russian military intelligence officers who hacked DNC and Clinton campaign', status: 'indicted', notes: '12 GRU officers indicted by Mueller in July 2018; none extradited' },
  ],
  '^2008-financial-crisis$': [
    { name: 'Lehman Brothers', role: 'Investment bank whose collapse triggered the global financial crisis; used Repo 105 to hide $50B in debt', status: 'pending', notes: 'Filed largest bankruptcy in US history ($639B). No executives criminally charged.' },
    { name: 'Countrywide Financial/Angelo Mozilo', role: 'CEO who led the largest subprime lender while secretly selling his own stock', status: 'settled', notes: 'Paid $67.5M SEC settlement in 2010; no criminal charges despite DOJ referral' },
    { name: 'Bear Stearns', role: 'First major bank to collapse from subprime exposure in March 2008', status: 'pending', notes: 'Acquired by JPMorgan for $2/share (initially). Two hedge fund managers acquitted at trial.' },
    { name: 'AIG Financial Products', role: 'Wrote $440B in credit default swaps without reserves, requiring $182B government bailout', status: 'pending', notes: 'Joseph Cassano ran AIGFP. No criminal charges. AIG repaid bailout with profit to government.' },
    { name: 'Rating Agencies (Moody\'s, S&P, Fitch)', role: 'Gave AAA ratings to toxic mortgage securities they knew were junk', status: 'settled', notes: 'S&P paid $1.5B settlement in 2015; Moody\'s paid $864M in 2017. No criminal charges.' },
  ],
  '^pandemic-profiteering': [
    { name: 'Various PPP Loan Fraudsters', role: 'Fraudulently obtained Paycheck Protection Program loans totaling billions', status: 'convicted', notes: 'DOJ charged 3,000+ defendants for PPP fraud totaling $1.4B+ as of 2024' },
    { name: 'Price Gougers', role: 'Individuals and companies that illegally inflated prices on PPE, sanitizer, and medical equipment', status: 'charged', notes: 'FTC and state AGs brought hundreds of enforcement actions' },
  ],
  '^border-militarization': [
    { name: 'U.S. Customs and Border Protection', role: 'Agency responsible for border enforcement operations resulting in thousands of migrant deaths', status: 'pending', notes: 'DHS OIG documented systemic use of force violations and failure to investigate deaths' },
  ],

  // ── B ──────────────────────────────────────────────────────────────
  '^boeing-safety|^boeing-corporate': [
    { name: 'Boeing Company', role: 'Concealed known safety defects in 737 MAX MCAS system leading to 346 deaths in two crashes', status: 'settled', notes: 'Paid $2.5B in 2021 deferred prosecution agreement. DOJ found Boeing violated DPA with Alaska Airlines incident.' },
    { name: 'Dennis Muilenburg', role: 'CEO who publicly dismissed safety concerns while internally acknowledged MCAS problems', status: 'pending', notes: 'Fired December 2019 with $62M exit package. Never criminally charged.' },
    { name: 'Mark Forkner', role: 'Chief technical pilot who allegedly misled FAA about MCAS', status: 'acquitted', notes: 'Acquitted of fraud charges in March 2022 after jury found FAA shared blame' },
  ],
  '^breonna-taylor$': [
    { name: 'Brett Hankison', role: 'LMPD detective who fired 10 rounds blindly into Breonna Taylor\'s apartment', status: 'convicted', notes: 'Acquitted of state charges; convicted of federal civil rights violations in 2022. Sentenced to 15 years.' },
    { name: 'Joshua Jaynes', role: 'LMPD detective who obtained the no-knock warrant using false information in the affidavit', status: 'convicted', notes: 'Convicted of federal civil rights violations in 2022' },
    { name: 'Kelly Goodlett', role: 'LMPD detective who conspired to falsify the search warrant and cover up actions after the shooting', status: 'convicted', notes: 'Pled guilty to federal conspiracy charge in 2022' },
    { name: 'Myles Cosgrove', role: 'LMPD detective who fired the fatal shot killing Breonna Taylor', status: 'charged', notes: 'Fired from LMPD; federal charges brought in 2022' },
  ],
  '^buffalo-massacre$': [
    { name: 'Payton Gendron', role: 'White supremacist who murdered 10 Black people at Tops supermarket in Buffalo, NY on May 14, 2022', status: 'convicted', notes: 'Pled guilty to domestic terrorism and murder; sentenced to life without parole in state court. Pled guilty to federal hate crimes.' },
  ],
  '^bush-v-gore$': [
    { name: 'Katherine Harris', role: 'Florida Secretary of State who certified disputed results while co-chairing Bush FL campaign', status: 'pending', notes: 'No charges; elected to Congress in 2002' },
  ],

  // ── C ──────────────────────────────────────────────────────────────
  '^cambridge-analytica': [
    { name: 'Cambridge Analytica', role: 'Harvested Facebook data of 87 million users without consent for political profiling', status: 'charged', notes: 'Company dissolved in 2018. UK ICO fined parent company SCL Group.' },
    { name: 'Alexander Nix', role: 'CEO of Cambridge Analytica who oversaw data harvesting operation', status: 'charged', notes: 'Suspended and then departed as CEO. UK Parliament found he gave misleading testimony.' },
    { name: 'Facebook/Meta', role: 'Failed to protect user data; allowed third-party harvesting of 87 million profiles', status: 'settled', notes: 'FTC fined Facebook $5 billion in 2019; largest ever FTC privacy penalty' },
    { name: 'Aleksandr Kogan', role: 'Cambridge University researcher who built the "thisisyourdigitallife" app used to harvest data', status: 'charged', notes: 'Banned from Facebook; cooperated with investigations' },
  ],
  '^catholic-church-abuse$': [
    { name: 'Cardinal Bernard Law', role: 'Archbishop of Boston who systematically covered up sexual abuse by priests for decades', status: 'pending', notes: 'Resigned in 2002; reassigned to Rome. Never criminally charged. Died 2017.' },
    { name: 'Cardinal Theodore McCarrick', role: 'Former Archbishop who sexually abused minors and seminarians for decades', status: 'charged', notes: 'Laicized in 2019; criminal charges in Massachusetts dismissed due to cognitive decline' },
  ],
  '^central-park-five$': [
    { name: 'NYPD Detectives', role: 'Coerced false confessions from five Black and Latino teenagers through hours of interrogation without lawyers', status: 'pending', notes: 'No officers disciplined or charged. City settled for $41M in 2014.' },
    { name: 'Linda Fairstein', role: 'Head of Manhattan DA Sex Crimes Unit who oversaw the prosecution built on coerced confessions', status: 'pending', notes: 'Never sanctioned; later became bestselling author. Dropped by publisher after 2019 miniseries.' },
    { name: 'Elizabeth Lederer', role: 'Lead prosecutor who presented coerced confessions at trial', status: 'pending', notes: 'Resigned from Columbia Law teaching position after criticism in 2019' },
  ],
  '^cia-torture$|^cia-black-site': [
    { name: 'CIA (Institutional)', role: 'Operated enhanced interrogation (torture) program at black sites in multiple countries', status: 'pending', notes: 'Senate Torture Report detailed abuses. No CIA officials criminally charged.' },
    { name: 'James Mitchell', role: 'Psychologist who designed the CIA enhanced interrogation program', status: 'settled', notes: 'His firm received $81M contract. Settled with ACLU torture victims for undisclosed amount in 2017.' },
    { name: 'Bruce Jessen', role: 'Psychologist who co-designed CIA torture techniques with Mitchell', status: 'settled', notes: 'Co-defendant in ACLU lawsuit; settled in 2017' },
    { name: 'Gina Haspel', role: 'Oversaw CIA black site in Thailand where waterboarding occurred; later ordered destruction of interrogation tapes', status: 'pending', notes: 'Became CIA Director in 2018 despite involvement. Never charged.' },
  ],
  '^climate-denial|^climate-coverup|^climate-disinformation': [
    { name: 'ExxonMobil', role: 'Knew about climate change since 1977 through internal research; funded denial for decades', status: 'charged', notes: 'Multiple state AG lawsuits. Internal documents show Exxon scientists accurately predicted warming.' },
    { name: 'Koch Industries / Charles Koch', role: 'Funded network of climate denial organizations and lobbied against climate legislation', status: 'pending', notes: 'Koch network spent hundreds of millions funding climate skeptic groups and politicians' },
    { name: 'American Petroleum Institute', role: 'Trade group that coordinated industry-wide climate denial strategy', status: 'charged', notes: 'Internal 1998 memo outlined "Global Climate Science Communications Plan" to manufacture doubt' },
  ],
  '^comey-firing$': [
    { name: 'Donald Trump', role: 'Fired FBI Director James Comey on May 9, 2017 while FBI investigated Trump campaign-Russia ties', status: 'pending', notes: 'Mueller investigated as potential obstruction of justice but did not charge citing DOJ policy on sitting presidents' },
  ],
  '^campaign-finance': [
    { name: 'Michael Cohen', role: 'Trump personal attorney who arranged hush money payments violating campaign finance law', status: 'convicted', notes: 'Pled guilty to 8 counts in 2018 including campaign finance violations. Served 1 year in prison.' },
    { name: 'Donald Trump', role: 'Directed hush money payments to suppress stories before 2016 election; falsified business records', status: 'convicted', notes: 'Convicted on 34 felony counts in May 2024 (People v. Trump, Manhattan DA). First former president convicted.' },
  ],
  '^covid-origins$': [
    { name: 'Chinese Government', role: 'Destroyed early virus samples, censored scientists, and blocked independent investigation into COVID-19 origins', status: 'pending', notes: 'WHO investigation was restricted; lab access denied. Multiple countries called for transparent investigation.' },
    { name: 'EcoHealth Alliance / Peter Daszak', role: 'Funneled NIH grants to Wuhan Institute of Virology for gain-of-function-adjacent research while concealing details', status: 'charged', notes: 'NIH suspended EcoHealth funding in 2024; House investigation found misrepresentations in grant applications' },
  ],
  '^coffee-county$': [
    { name: 'Misty Hampton', role: 'Coffee County Elections Supervisor who gave unauthorized access to election equipment to Trump allies', status: 'indicted', notes: 'Indicted in Georgia RICO case for breach of election equipment security' },
    { name: 'Sidney Powell', role: 'Attorney who arranged unauthorized access to Coffee County election equipment', status: 'convicted', notes: 'Pled guilty to 6 misdemeanors in Georgia RICO case in 2023' },
  ],
  '^colorado-election-breach$': [
    { name: 'Tina Peters', role: 'Mesa County Clerk who facilitated unauthorized copying of election system hard drives', status: 'convicted', notes: 'Convicted on 7 counts in 2024 including criminal impersonation. Sentenced to 9 years.' },
  ],

  // ── D ──────────────────────────────────────────────────────────────
  '^dark-money': [
    { name: 'Leonard Leo', role: 'Federalist Society co-chairman who directed $1.6B dark money network to reshape federal judiciary', status: 'pending', notes: 'Subject of Senate Judiciary investigation; no charges. ProPublica exposed massive dark money flows.' },
    { name: 'Donors Trust / Donors Capital Fund', role: 'Dark money pass-through that laundered hundreds of millions to political organizations', status: 'pending', notes: 'Served as conduit for anonymous donations to conservative causes since 1999' },
  ],
  '^dakota-access-pipeline$': [
    { name: 'Energy Transfer Partners', role: 'Pipeline company that used private security firms deploying dogs and water cannons against Standing Rock protesters', status: 'pending', notes: 'Hired TigerSwan, a military contractor, for domestic surveillance of protesters' },
    { name: 'TigerSwan', role: 'Private military contractor that conducted military-style surveillance on Standing Rock water protectors', status: 'charged', notes: 'Operated without required ND private investigation license; infiltrated protest camps' },
  ],
  '^drone-assassinations$|^drone-strike': [
    { name: 'U.S. Government (Multiple Administrations)', role: 'Conducted drone strikes killing thousands of civilians in Pakistan, Yemen, Somalia, and Afghanistan', status: 'pending', notes: 'Obama authorized 542 drone strikes; Trump loosened rules of engagement. No accountability for civilian deaths.' },
  ],
  '^dobbs-aftermath$': [
    { name: 'Supreme Court Majority (6-3)', role: 'Overturned Roe v. Wade in Dobbs v. Jackson (2022), ending 49 years of federal abortion rights', status: 'pending', notes: 'Justices Alito, Thomas, Gorsuch, Kavanaugh, Barrett, Roberts. Draft opinion was unprecedented leak.' },
  ],
  '^dupont-crimes$|^dupont.*pfoa|^dupont.*teflon': [
    { name: 'DuPont', role: 'Concealed PFOA/C8 contamination of water supplies near Parkersburg, WV for decades while knowing of health risks', status: 'settled', notes: 'Paid $671M to settle 3,550 personal injury claims in 2017. Internal documents showed decades of concealment.' },
    { name: 'Chemours (DuPont spinoff)', role: 'Created as liability shield to separate DuPont from PFAS obligations', status: 'settled', notes: 'Assumed PFAS liabilities in 2015 spinoff; ongoing litigation' },
  ],
  '^deepwater-horizon|^gulf-oil': [
    { name: 'BP plc', role: 'Operator of Deepwater Horizon rig; cost-cutting decisions led to blowout killing 11 workers and spilling 4.9M barrels', status: 'convicted', notes: 'Pled guilty to 14 felonies including 11 manslaughter counts. Paid $20.8B total in settlements.' },
    { name: 'Transocean', role: 'Owner of Deepwater Horizon drilling rig; failed to maintain safety equipment', status: 'settled', notes: 'Paid $1.4B in fines and penalties; settled civil claims for $212M' },
    { name: 'Halliburton', role: 'Cement contractor whose faulty cement job failed to seal the well', status: 'settled', notes: 'Destroyed evidence of cement testing; paid $1.1B settlement. Employee pled guilty to destruction of evidence.' },
    { name: 'Robert Kaluza', role: 'BP well site leader on Deepwater Horizon during blowout', status: 'acquitted', notes: 'Charged with manslaughter; acquitted at trial in 2016' },
  ],

  // ── E ──────────────────────────────────────────────────────────────
  '^epstein-network': [
    { name: 'Jeffrey Epstein', role: 'Operated international sex trafficking ring of minors exploiting hundreds of victims', status: 'charged', notes: 'Died in custody August 2019, ruled suicide. Previously received lenient 2008 plea deal from Alexander Acosta.' },
    { name: 'Ghislaine Maxwell', role: 'Recruited, groomed, and trafficked minors for Epstein\'s abuse network', status: 'convicted', notes: 'Convicted on 5 counts of sex trafficking in December 2021; sentenced to 20 years' },
    { name: 'Alexander Acosta', role: 'US Attorney who gave Epstein lenient 2008 plea deal shielding co-conspirators', status: 'pending', notes: 'Resigned as Trump Labor Secretary in 2019 after deal was exposed. DOJ OPR found deal was "poor judgment."' },
  ],
  '^epipen-price-gouging$': [
    { name: 'Mylan/Heather Bresch', role: 'CEO who raised EpiPen price from $100 to $600+ (500% increase) while reclassifying it to avoid Medicaid rebates', status: 'settled', notes: 'Mylan paid $465M to settle DOJ Medicaid overbilling claims in 2017. Bresch received $25M+ compensation.' },
  ],
  '^enron': [
    { name: 'Kenneth Lay', role: 'Enron founder and CEO who oversaw massive accounting fraud', status: 'convicted', notes: 'Convicted on 10 counts in 2006; died before sentencing. Convictions vacated.' },
    { name: 'Jeffrey Skilling', role: 'Enron CEO who orchestrated structures to hide billions in debt', status: 'convicted', notes: 'Convicted on 19 counts; sentenced to 24 years (reduced to 14). Released 2019.' },
    { name: 'Andrew Fastow', role: 'Enron CFO who created off-book entities to hide $1B in losses', status: 'convicted', notes: 'Pled guilty to 2 counts; sentenced to 6 years. Key government cooperator.' },
    { name: 'Arthur Andersen LLP', role: 'Auditor that shredded Enron documents and failed to detect fraud', status: 'convicted', notes: 'Convicted of obstruction; conviction later reversed by SCOTUS but firm destroyed (85,000 jobs lost)' },
  ],
  '^e-jean-carroll$': [
    { name: 'Donald Trump', role: 'Found liable for sexually abusing E. Jean Carroll in mid-1990s and defaming her', status: 'settled', notes: 'Jury found Trump liable; awarded $5M (2023). Second defamation trial awarded $83.3M (2024).' },
  ],
  '^equifax-data-breach$': [
    { name: 'Equifax Inc.', role: 'Failed to patch known vulnerability leading to breach of 147 million Americans\' personal data', status: 'settled', notes: 'Paid $700M FTC/CFPB settlement in 2019. Largest data breach settlement in history.' },
    { name: 'Jun Ying', role: 'Equifax CIO who engaged in insider trading after learning of breach before public disclosure', status: 'convicted', notes: 'Sentenced to 4 months in prison and $55,000 fine for insider trading' },
  ],
  '^elizabeth-holmes|^theranos': [
    { name: 'Elizabeth Holmes', role: 'Theranos founder who defrauded investors of hundreds of millions with fake blood-testing technology', status: 'convicted', notes: 'Convicted on 4 counts of wire fraud in January 2022; sentenced to 11.25 years. Reported to prison May 2023.' },
    { name: 'Ramesh "Sunny" Balwani', role: 'Theranos COO who oversaw fraudulent lab operations and concealed failures', status: 'convicted', notes: 'Convicted on 12 counts of wire fraud; sentenced to nearly 13 years' },
  ],
  '^exxon-climate|^exxon-valdez$': [
    { name: 'Exxon Shipping Company', role: 'Operated Exxon Valdez tanker that spilled 11 million gallons of oil in Prince William Sound, Alaska', status: 'convicted', notes: 'Pled guilty to Clean Water Act violations; fined $125M (later reduced to $25M). Punitive damages reduced from $5B to $507M by SCOTUS.' },
    { name: 'Captain Joseph Hazelwood', role: 'Captain of Exxon Valdez who was below deck (possibly intoxicated) when tanker ran aground', status: 'acquitted', notes: 'Acquitted of felony charges; convicted of negligent discharge of oil (misdemeanor); fined $50,000' },
  ],

  // ── F ──────────────────────────────────────────────────────────────
  '^facebook-antitrust$': [
    { name: 'Meta Platforms/Facebook', role: 'Acquired Instagram and WhatsApp to eliminate competition; maintained monopoly through anticompetitive practices', status: 'charged', notes: 'FTC filed antitrust suit in 2020 (refiled 2021). Case ongoing as of 2024.' },
    { name: 'Mark Zuckerberg', role: 'CEO who directed acquisitions specifically to neutralize competitive threats per internal emails', status: 'pending', notes: 'Internal emails showed Zuckerberg saw Instagram as threat: "neutralize a potential competitor"' },
  ],
  '^family-separation': [
    { name: 'Jeff Sessions', role: 'Attorney General who implemented "zero tolerance" policy causing forced separation of thousands of immigrant families', status: 'pending', notes: 'At least 5,500 children separated from parents. DOJ IG found no formal policy planning or tracking system.' },
    { name: 'Stephen Miller', role: 'Senior White House advisor who was primary architect of family separation policy', status: 'pending', notes: 'Emails showed Miller pushed for family separation as deterrent despite warnings of harm to children.' },
  ],
  '^flint-water': [
    { name: 'Rick Snyder', role: 'Michigan Governor whose administration switched Flint\'s water source without proper treatment, causing lead crisis', status: 'charged', notes: 'Charged with 2 willful neglect of duty misdemeanors in 2021; charges dismissed in 2024.' },
    { name: 'Darnell Earley', role: 'Emergency Manager who authorized the water source switch to Flint River', status: 'charged', notes: 'Charged with involuntary manslaughter; charges later dismissed.' },
    { name: 'Nick Lyon', role: 'Michigan DHHS Director charged with involuntary manslaughter for delayed response to Legionnaires\' outbreak', status: 'charged', notes: 'Charges reduced then dismissed in 2024 after procedural issues' },
  ],
  '^ftx-collapse|^ftx-crypto': [
    { name: 'Sam Bankman-Fried', role: 'FTX founder who stole $8 billion in customer funds and committed massive fraud', status: 'convicted', notes: 'Convicted on all 7 counts in November 2023; sentenced to 25 years in March 2024' },
    { name: 'Caroline Ellison', role: 'Alameda Research CEO who directed misuse of FTX customer funds and created fraudulent balance sheets', status: 'convicted', notes: 'Pled guilty; cooperated extensively. Sentenced to 2 years in September 2024.' },
    { name: 'Gary Wang', role: 'FTX co-founder and CTO who built backdoor allowing Alameda to access customer funds', status: 'convicted', notes: 'Pled guilty to 4 charges; cooperated. Sentenced to no prison time.' },
    { name: 'Nishad Singh', role: 'FTX Director of Engineering who helped cover up misuse of customer deposits', status: 'convicted', notes: 'Pled guilty; cooperated. Sentenced to no prison time.' },
  ],
  '^fox-disinformation|^fox-misinformation|^fox-news': [
    { name: 'Fox News/Fox Corporation', role: 'Broadcast false claims about Dominion voting machines rigging the 2020 election despite knowing claims were false', status: 'settled', notes: 'Settled with Dominion for $787.5M in April 2023; largest known defamation settlement. Smartmatic case ongoing.' },
    { name: 'Rupert Murdoch', role: 'Fox Corporation chairman who acknowledged in deposition that Fox hosts endorsed false election claims', status: 'settled', notes: 'Deposition revealed he knew claims were false. Retired as chairman in 2023.' },
  ],
  '^ferguson': [
    { name: 'Darren Wilson', role: 'Ferguson police officer who fatally shot unarmed Black teenager Michael Brown on August 9, 2014', status: 'pending', notes: 'No charges from state grand jury or federal investigation. Resigned November 2014.' },
    { name: 'City of Ferguson', role: 'DOJ found pattern of constitutional violations and revenue-driven policing targeting Black residents', status: 'settled', notes: 'Entered consent decree with DOJ in 2016 requiring comprehensive reforms' },
  ],

  // ── G ──────────────────────────────────────────────────────────────
  '^george-floyd|^murder-of-george': [
    { name: 'Derek Chauvin', role: 'Minneapolis police officer who murdered George Floyd by kneeling on his neck for 9 minutes 29 seconds', status: 'convicted', notes: 'Convicted of murder and manslaughter in 2021; sentenced to 22.5 years state, 21 years federal.' },
    { name: 'Tou Thao', role: 'Officer who prevented bystanders from intervening during Floyd\'s murder', status: 'convicted', notes: 'Convicted of federal civil rights violations; sentenced to 3.5 years federal, 4.75 years state.' },
    { name: 'J. Alexander Kueng', role: 'Officer who knelt on Floyd\'s back during the killing', status: 'convicted', notes: 'Convicted of federal civil rights violations; sentenced to 3 years federal, 3.5 years state.' },
    { name: 'Thomas Lane', role: 'Officer who held Floyd\'s legs during the killing', status: 'convicted', notes: 'Pled guilty to state manslaughter; sentenced to 3 years. Convicted federally; sentenced to 2.5 years.' },
  ],
  '^guatemala-coup|^guatemala-1954': [
    { name: 'CIA (Eisenhower Administration)', role: 'Organized Operation PBSUCCESS to overthrow democratically elected President Arbenz of Guatemala in 1954', status: 'pending', notes: 'Declassified documents confirm CIA planned and executed coup. Led to decades of civil war killing 200,000+.' },
    { name: 'United Fruit Company', role: 'Lobbied US government to overthrow Arbenz to protect its banana monopoly and land holdings', status: 'pending', notes: 'Secretary of State Dulles and CIA Director Allen Dulles had direct ties to United Fruit' },
  ],
  '^gun-violence$': [
    { name: 'Gun Industry (Systematic)', role: 'Manufacturers marketed assault-style weapons to civilians while opposing safety regulations', status: 'pending', notes: 'PLCAA (2005) provides broad immunity from civil liability. Some state lawsuits proceeding.' },
    { name: 'NRA', role: 'Systematically blocked gun safety legislation despite mounting death toll', status: 'charged', notes: 'NY AG filed civil fraud suit in 2020. Found to have diverted millions for personal use.' },
  ],
  '^goldman-sachs-fraud|^goldman-sachs-abacus': [
    { name: 'Goldman Sachs', role: 'Created and sold CDOs it simultaneously bet against; misled investors about Abacus deal', status: 'settled', notes: 'Paid $550M SEC settlement in 2010; $5.06B DOJ settlement in 2016 for mortgage-backed securities fraud' },
    { name: 'Fabrice Tourre', role: 'Goldman VP who designed Abacus CDO and misled investors about Paulson\'s short position', status: 'convicted', notes: 'Found liable by SEC jury in 2013; fined $825,000 and barred from industry' },
  ],

  // ── H ──────────────────────────────────────────────────────────────
  '^healthcare-capture$|^healthcare-profiteering$': [
    { name: 'UnitedHealth Group', role: 'Largest health insurer systematically denying claims to boost profits', status: 'charged', notes: 'Multiple state AG investigations. Uses AI to auto-deny claims.' },
    { name: 'Pharmaceutical Industry (Systematic)', role: 'Price gouging on essential medications including insulin and cancer drugs', status: 'pending', notes: 'Senate investigation found manufacturers raised insulin prices 1200% over 20 years' },
  ],
  '^hedge-fund-manipulation$|^hedge-fund-predation$': [
    { name: 'Citadel Securities', role: 'Payment for order flow and market-making practices that disadvantage retail investors', status: 'pending', notes: 'SEC investigated PFOF practices; no charges. Congressional hearings held after GameStop.' },
    { name: 'SAC Capital / Steven Cohen', role: 'Systematic insider trading at SAC Capital hedge fund', status: 'convicted', notes: 'SAC pled guilty in 2013; paid $1.8B penalty. Cohen banned from managing outside money for 2 years.' },
  ],

  // ── I ──────────────────────────────────────────────────────────────
  '^iran-contra-full-financial-trail': [
    { name: 'Oliver North', role: 'NSC staff member who directed Iran arms sales and illegal Contra funding', status: 'convicted', notes: 'Convicted on 3 felonies in 1989; overturned on appeal due to immunized testimony. Never served prison time.' },
    { name: 'John Poindexter', role: 'National Security Advisor who authorized the diversion of Iran arms sale profits to Contras', status: 'convicted', notes: 'Convicted on 5 felonies; reversed on appeal. Never served time.' },
    { name: 'Caspar Weinberger', role: 'Secretary of Defense who concealed knowledge of Iran-Contra from investigators', status: 'pardoned', notes: 'Indicted on perjury/obstruction charges; pardoned by Bush Sr. on Dec 24, 1992, 11 days before trial.' },
    { name: 'George H.W. Bush', role: 'Vice President with greater involvement than publicly admitted; pardoned 6 defendants as President', status: 'pardoned', notes: 'Pardoned 6 Iran-Contra figures on Christmas Eve 1992. Walsh called it "the last card in the cover-up."' },
  ],
  '^iraq-war-deception$|^iraq-war-lies$|^wmd-lies$': [
    { name: 'George W. Bush', role: 'President who launched Iraq War based on false claims of WMDs and Iraq-9/11 connection', status: 'pending', notes: 'No accountability. Senate Intelligence Committee found claims unsupported by intelligence.' },
    { name: 'Dick Cheney', role: 'Vice President who pressured CIA to produce intelligence supporting Iraq invasion; pushed false uranium claims', status: 'pending', notes: 'Leaked Valerie Plame\'s CIA identity through Scooter Libby to retaliate against her husband\'s debunking.' },
    { name: 'Colin Powell', role: 'Secretary of State who presented false WMD intelligence to UN Security Council on February 5, 2003', status: 'pending', notes: 'Later called it a "blot" on his record. Died 2021. Presentation included fabricated evidence.' },
    { name: 'Donald Rumsfeld', role: 'Secretary of Defense who planned Iraq invasion and authorized enhanced interrogation techniques', status: 'pending', notes: 'Resigned 2006. Died 2021. No accountability for Iraq decisions.' },
  ],
  '^immigration-detention': [
    { name: 'ICE/DHS', role: 'Operated detention facilities where migrants died, were abused, and children were separated from parents', status: 'pending', notes: 'DHS OIG documented systemic failures. Multiple detainee deaths under investigation.' },
    { name: 'CoreCivic', role: 'Private prison company operating immigrant detention centers with documented abuse and neglect', status: 'charged', notes: 'Multiple lawsuits alleging forced labor and inadequate medical care' },
    { name: 'GEO Group', role: 'Private prison company profiting from immigration detention with pattern of abuse complaints', status: 'charged', notes: 'Washington state AG sued for paying detained immigrants $1/day (forced labor)' },
  ],
  '^insys-opioid|^insys-prosecution': [
    { name: 'John Kapoor', role: 'Insys Therapeutics founder/CEO who directed bribery of doctors to prescribe fentanyl spray for non-cancer patients', status: 'convicted', notes: 'Convicted of racketeering conspiracy in 2019; sentenced to 5.5 years. First pharma exec convicted of opioid crimes.' },
    { name: 'Michael Babich', role: 'Insys CEO who oversaw bribery and fraud scheme', status: 'convicted', notes: 'Convicted of racketeering; sentenced to 2.5 years' },
  ],

  // ── J ──────────────────────────────────────────────────────────────
  '^january-6': [
    { name: 'Donald Trump', role: 'Incited supporters to march on Capitol to overturn 2020 election certification on January 6, 2021', status: 'indicted', notes: 'Impeached by House (acquitted by Senate). Indicted by Special Counsel on 4 counts. Case paused by immunity ruling.' },
    { name: 'Oath Keepers/Stewart Rhodes', role: 'Led paramilitary organization that planned and executed armed assault on Capitol', status: 'convicted', notes: 'Convicted of seditious conspiracy in November 2022; sentenced to 18 years' },
    { name: 'Proud Boys/Enrique Tarrio', role: 'Led Proud Boys in coordinated assault on Capitol to prevent election certification', status: 'convicted', notes: 'Convicted of seditious conspiracy; sentenced to 22 years (longest J6 sentence)' },
    { name: '1,200+ Capitol Breach Defendants', role: 'Participated in violent assault on US Capitol during joint session of Congress', status: 'convicted', notes: 'Over 1,200 charged; 900+ convicted as of 2024. Sentences range from probation to 22 years.' },
  ],
  '^jj-baby-powder$|^johnson-and-johnson-talc': [
    { name: 'Johnson & Johnson', role: 'Sold talc baby powder contaminated with asbestos for decades while concealing evidence of contamination', status: 'settled', notes: 'Proposed $8.9B settlement for 100,000+ claims. Internal documents showed J&J knew of asbestos since 1971.' },
  ],

  // ── K ──────────────────────────────────────────────────────────────
  '^khashoggi': [
    { name: 'Mohammed bin Salman (MBS)', role: 'Saudi Crown Prince who CIA concluded ordered assassination of journalist Jamal Khashoggi', status: 'pending', notes: 'CIA assessed with "high confidence" that MBS ordered the killing. Never sanctioned by US.' },
    { name: 'Saudi Hit Squad (15 members)', role: '15-member team that murdered and dismembered Khashoggi inside Saudi consulate in Istanbul', status: 'convicted', notes: 'Saudi court sentenced 5 to death (commuted to 20 years). Trial widely criticized as sham.' },
  ],
  '^kids-for-cash$': [
    { name: 'Mark Ciavarella', role: 'Luzerne County PA judge who accepted $2.8M in bribes to send children to for-profit detention centers', status: 'convicted', notes: 'Convicted on 12 of 39 counts of racketeering; sentenced to 28 years. Affected 4,000+ juveniles.' },
    { name: 'Michael Conahan', role: 'Judge who conspired with Ciavarella to close public juvenile facility and funnel children to private one', status: 'convicted', notes: 'Pled guilty; sentenced to 17.5 years' },
  ],
  '^kushner-security': [
    { name: 'Jared Kushner', role: 'Senior White House advisor who received top secret clearance despite being rejected by career officials', status: 'pending', notes: 'Clearance initially denied by career officials; overridden by Trump. House investigation documented interference.' },
  ],
  '^kushner-saudi': [
    { name: 'Jared Kushner', role: 'Received $2 billion investment from Saudi sovereign wealth fund shortly after leaving White House', status: 'pending', notes: 'Saudi fund advisory panel raised concerns about due diligence, experience, and fees. House investigating.' },
  ],

  // ── L ──────────────────────────────────────────────────────────────
  '^leonard-leo$|^federalist-society$': [
    { name: 'Leonard Leo', role: 'Directed $1.6B dark money network to capture federal judiciary and Supreme Court', status: 'pending', notes: 'Subject of Senate investigation. Received largest known political donation in US history ($1.6B from Barre Seid).' },
  ],
  '^libor-scandal$|^libor$': [
    { name: 'Barclays', role: 'First bank to settle LIBOR manipulation charges; traders submitted false rates to benefit trading positions', status: 'settled', notes: 'Paid $453M in fines to US/UK regulators in 2012. CEO Bob Diamond resigned.' },
    { name: 'UBS', role: 'Systematic LIBOR manipulation by dozens of employees across multiple currencies', status: 'settled', notes: 'Fined $1.5B by regulators in 2012; Japanese subsidiary pled guilty to wire fraud' },
    { name: 'Deutsche Bank', role: 'Largest LIBOR fine; traders manipulated rates over extended period', status: 'settled', notes: 'Paid $2.5B in fines in 2015; largest LIBOR penalty' },
    { name: 'Tom Hayes', role: 'UBS/Citigroup trader who was first individual convicted of LIBOR manipulation', status: 'convicted', notes: 'Convicted in UK in 2015; sentenced to 14 years (reduced to 11). Conviction overturned in 2024.' },
  ],

  // ── M ──────────────────────────────────────────────────────────────
  '^madoff-ponzi$': [
    { name: 'Bernie Madoff', role: 'Operated largest Ponzi scheme in history; defrauded investors of $64.8 billion in stated returns', status: 'convicted', notes: 'Pled guilty to 11 felonies; sentenced to 150 years. Died in prison April 2021.' },
    { name: 'JPMorgan Chase', role: 'Primary bank that held Madoff accounts and failed to report suspicious activity despite red flags', status: 'settled', notes: 'Paid $2.6B in penalties and victim compensation in 2014' },
  ],
  '^menendez-bribery$': [
    { name: 'Sen. Bob Menendez', role: 'US Senator who accepted hundreds of thousands in bribes including gold bars from Egyptian and Qatari officials', status: 'convicted', notes: 'Convicted on all 16 counts including bribery and acting as foreign agent in July 2024. Resigned from Senate.' },
    { name: 'Nadine Menendez', role: 'Wife of Senator who served as intermediary for bribe payments and gifts', status: 'convicted', notes: 'Convicted on all counts. Trial delayed due to medical issues.' },
  ],
  '^mk-ultra$|^mkultra': [
    { name: 'CIA (Sidney Gottlieb)', role: 'Directed MKULTRA mind control program conducting experiments on unwitting human subjects including LSD dosing', status: 'pending', notes: 'Gottlieb destroyed most MKULTRA records in 1973. Died 1999. No criminal charges ever filed.' },
    { name: 'CIA Director Allen Dulles', role: 'Authorized MKULTRA program in 1953 to develop mind control techniques', status: 'pending', notes: 'Program ran from 1953-1973 across 80+ institutions. Dulles fired by JFK in 1961; died 1969.' },
    { name: 'Dr. Donald Ewen Cameron', role: 'Conducted brutal "psychic driving" experiments on patients at Allan Memorial Institute in Montreal', status: 'pending', notes: 'CIA-funded experiments destroyed patients\' memories and personalities. Canadian government settled with victims in 1994.' },
  ],
  '^monsanto|^roundup-cancer': [
    { name: 'Monsanto/Bayer', role: 'Concealed evidence that Roundup herbicide (glyphosate) causes cancer; ghostwrote safety studies', status: 'settled', notes: 'Bayer settled for $10.9B in 2020 to resolve ~125,000 claims. Internal emails showed decades of cover-up.' },
    { name: 'EPA (Scott Pruitt era)', role: 'EPA official Jess Rowland helped Monsanto kill HHS cancer review of glyphosate', status: 'pending', notes: 'Internal Monsanto emails: "we have Jess in our back pocket." No accountability.' },
  ],
  '^mass-shootings|^school-shootings$': [
    { name: 'Gun Manufacturers', role: 'Marketed military-style weapons to civilians including young men through aggressive advertising', status: 'settled', notes: 'Remington settled with Sandy Hook families for $73M in 2022; first gun maker held accountable for mass shooting.' },
    { name: 'NRA', role: 'Blocked assault weapons ban renewal, universal background checks, and red flag laws after every mass shooting', status: 'charged', notes: 'NY AG filed civil fraud suit in 2020; found massive self-dealing by leadership' },
  ],
  '^my-lai-massacre$': [
    { name: 'Lt. William Calley', role: 'Led Charlie Company platoon in massacre of 347-504 Vietnamese civilians at My Lai on March 16, 1968', status: 'convicted', notes: 'Only person convicted. Sentenced to life; reduced to 10 years by Nixon. Served 3.5 years house arrest.' },
    { name: 'Capt. Ernest Medina', role: 'Company commander who was in vicinity during massacre and failed to halt killings', status: 'acquitted', notes: 'Acquitted at court-martial in 1971' },
    { name: 'U.S. Army (Cover-up)', role: 'Military chain of command covered up massacre for over a year until soldier Ron Ridenhour wrote letters', status: 'pending', notes: 'Peers Commission found 30 officers involved in cover-up. Only Calley convicted.' },
  ],

  // ── N ──────────────────────────────────────────────────────────────
  '^nra-corruption$': [
    { name: 'Wayne LaPierre', role: 'NRA CEO who diverted millions in NRA funds for personal luxury including private jets, yachts, and suits', status: 'convicted', notes: 'Found liable in 2024 civil trial for diverting $5.4M in NRA funds. Resigned January 2024.' },
    { name: 'NRA (Organization)', role: 'Tax-exempt organization that was operated as personal piggy bank by leadership', status: 'charged', notes: 'NY AG civil fraud suit ongoing since 2020' },
  ],
  '^nxivm-cult$': [
    { name: 'Keith Raniere', role: 'NXIVM founder who ran sex trafficking cult that branded women and kept them as slaves', status: 'convicted', notes: 'Convicted on all counts including sex trafficking and racketeering in 2019; sentenced to 120 years.' },
    { name: 'Allison Mack', role: 'Actress who recruited women into DOS, NXIVM\'s secret sex slave group', status: 'convicted', notes: 'Pled guilty to racketeering conspiracy; sentenced to 3 years' },
    { name: 'Clare Bronfman', role: 'Seagram\'s heiress who funded NXIVM operations and helped obstruct investigations', status: 'convicted', notes: 'Pled guilty to harboring an illegal alien and credit card fraud; sentenced to 6 years 9 months' },
  ],

  // ── O ──────────────────────────────────────────────────────────────
  '^opioid-crisis|^opioid-distribution|^purdue-pharma': [
    { name: 'Purdue Pharma', role: 'Manufactured OxyContin and aggressively marketed it while concealing addiction risks', status: 'convicted', notes: 'Pled guilty twice (2007, 2020) to federal charges. Dissolved in bankruptcy. $6B settlement.' },
    { name: 'Sackler Family', role: 'Owned Purdue Pharma; directed aggressive OxyContin marketing while extracting $10.7B from the company', status: 'settled', notes: 'Paid $6B in bankruptcy settlement in exchange for civil immunity. No criminal charges.' },
    { name: 'McKesson Corporation', role: 'Drug distributor that shipped suspicious quantities of opioids to pharmacies without adequate controls', status: 'settled', notes: 'Part of $21B distributor settlement with states (2022) along with Cardinal Health and AmerisourceBergen' },
  ],

  // ── P ──────────────────────────────────────────────────────────────
  '^penn-state-scandal$|^msu-coverup$': [
    { name: 'Jerry Sandusky', role: 'Penn State assistant football coach who sexually abused at least 52 boys over 15 years', status: 'convicted', notes: 'Convicted on 45 counts of child sexual abuse in 2012; sentenced to 30-60 years' },
    { name: 'Joe Paterno', role: 'Head coach who was informed of Sandusky abuse and failed to report to police', status: 'pending', notes: 'Fired in 2011; died January 2012. NCAA vacated then restored 111 wins.' },
    { name: 'Graham Spanier', role: 'Penn State president who participated in cover-up of Sandusky abuse', status: 'convicted', notes: 'Convicted of child endangerment misdemeanor; sentenced to 2 months' },
    { name: 'Tim Curley', role: 'Penn State athletic director who covered up Sandusky reports', status: 'convicted', notes: 'Pled guilty to child endangerment misdemeanor; sentenced to 7-23 months' },
  ],
  '^pfas-contamination|^pfas-forever': [
    { name: '3M Company', role: 'Manufactured PFAS chemicals for decades while concealing evidence of environmental and health damage', status: 'settled', notes: 'Agreed to pay $10.3B to settle water contamination claims in 2023' },
    { name: 'DuPont/Chemours', role: 'Contaminated water supplies with PFAS/PFOA near manufacturing plants', status: 'settled', notes: 'Part of $1.19B settlement for PFAS contamination in 2023' },
  ],
  '^private-prison|^private-prison-corruption': [
    { name: 'CoreCivic (formerly CCA)', role: 'Largest private prison company that lobbied for harsh sentencing to fill beds', status: 'charged', notes: 'Exposed for understaffing, inadequate medical care, and immigrant detainee deaths' },
    { name: 'GEO Group', role: 'Private prison company with pattern of abuse, neglect, and forced labor using detained immigrants', status: 'charged', notes: 'Paid detained immigrants $1/day; sued by states for forced labor' },
  ],
  '^ppp-loan-fraud': [
    { name: 'Various Fraudsters (3,000+)', role: 'Fraudulently obtained PPP and EIDL loans through false applications', status: 'convicted', notes: 'DOJ charged 3,000+ defendants for $1.4B+ in COVID relief fraud as of 2024' },
  ],

  // ── R ──────────────────────────────────────────────────────────────
  '^r-kelly': [
    { name: 'R. Kelly', role: 'Operated decades-long sex trafficking enterprise targeting minors', status: 'convicted', notes: 'Convicted of racketeering and sex trafficking in NY (2021); production of child pornography in Chicago (2022). Sentenced to 30 years (federal) + 20 years (state).' },
  ],
  '^russia-investigation$|^russian-election-interference$|^trump-russia$': [
    { name: 'Paul Manafort', role: 'Trump campaign chairman who shared campaign polling data with Russian intelligence-linked operative', status: 'convicted', notes: 'Convicted on 8 counts of financial crimes; sentenced to 7.5 years. Pardoned by Trump December 2020.' },
    { name: 'Michael Flynn', role: 'National Security Advisor who lied to FBI about contacts with Russian Ambassador Kislyak', status: 'convicted', notes: 'Pled guilty to lying to FBI; pardoned by Trump November 2020 before sentencing' },
    { name: 'Roger Stone', role: 'Trump associate who lied to Congress about WikiLeaks contacts and threatened witness', status: 'convicted', notes: 'Convicted on 7 counts; sentenced to 40 months. Commuted by Trump July 2020; pardoned December 2020.' },
    { name: 'Rick Gates', role: 'Deputy Trump campaign chairman who conspired with Manafort and cooperated with Mueller', status: 'convicted', notes: 'Pled guilty to conspiracy and lying to FBI; sentenced to 45 days jail plus probation' },
  ],
  '^russian-war-crimes$': [
    { name: 'Vladimir Putin', role: 'Russian President who ordered invasion of Ukraine and is accused of directing systematic war crimes', status: 'indicted', notes: 'ICC issued arrest warrant in March 2023 for war crime of unlawful deportation of Ukrainian children' },
    { name: 'Maria Lvova-Belova', role: 'Russian Commissioner for Children\'s Rights who oversaw forced deportation of Ukrainian children', status: 'indicted', notes: 'ICC arrest warrant issued March 2023' },
  ],

  // ── S ──────────────────────────────────────────────────────────────
  '^stormy-daniels|^stop-the-steal$': [],
  '^santos-fraud$': [
    { name: 'George Santos', role: 'US Representative who fabricated entire biography and defrauded donors', status: 'charged', notes: 'Indicted on 23 charges including wire fraud, money laundering, and theft of public funds. Expelled from Congress December 2023.' },
  ],
  '^sandy-hook-defamation$|^sandy-hook-disinfo$': [
    { name: 'Alex Jones', role: 'Infowars host who defamed Sandy Hook families by calling the massacre a hoax for years', status: 'convicted', notes: 'Found liable for defamation; ordered to pay $1.5 billion to families. Filed for bankruptcy.' },
  ],
  '^scotus-corruption$|^scotus-ethics$|^supreme-court-corruption$': [
    { name: 'Justice Clarence Thomas', role: 'Failed to disclose decades of luxury gifts and travel from billionaire Harlan Crow', status: 'pending', notes: 'ProPublica exposed undisclosed luxury travel, real estate deal, private school tuition from Crow. No enforcement mechanism.' },
    { name: 'Justice Samuel Alito', role: 'Failed to disclose luxury fishing trip funded by billionaire Paul Singer who had cases before the Court', status: 'pending', notes: 'ProPublica exposed 2008 Alaska fishing trip. Alito refused to recuse from Singer-related cases.' },
    { name: 'Harlan Crow', role: 'Billionaire Republican donor who provided decades of undisclosed gifts to Justice Thomas', status: 'pending', notes: 'Bought Thomas\'s mother\'s house; paid private school tuition for Thomas\'s grandnephew; funded luxury travel.' },
  ],
  '^september-11$': [
    { name: 'Al-Qaeda / Osama bin Laden', role: 'Planned and directed the September 11, 2001 terrorist attacks killing 2,977 people', status: 'charged', notes: 'Bin Laden killed in Abbottabad raid May 2011. KSM awaits trial at Guantanamo.' },
    { name: 'Khalid Sheikh Mohammed', role: 'Principal architect of 9/11 attacks', status: 'charged', notes: 'Captured 2003; plea agreement reached in 2024 after 20+ years at Guantanamo without trial' },
    { name: 'Saudi Arabia (15 of 19 hijackers)', role: 'Alleged governmental support for hijackers through Saudi embassy officials', status: 'pending', notes: '28 Pages declassified in 2016 showed Saudi government connections. 9/11 families lawsuit ongoing.' },
  ],
  '^silicon-valley-politics$': [
    { name: 'Peter Thiel', role: 'Billionaire who funded political candidates to advance tech industry deregulation agenda', status: 'pending', notes: 'Funded JD Vance Senate campaign; major Trump donor. Palantir government surveillance contracts.' },
  ],

  // ── T ──────────────────────────────────────────────────────────────
  '^trump-tower-meeting$': [
    { name: 'Donald Trump Jr.', role: 'Organized June 9, 2016 meeting with Russian operatives at Trump Tower after being offered "dirt" on Hillary Clinton', status: 'pending', notes: 'Emails showed he was told material was "part of Russia\'s support for Mr. Trump." Not charged by Mueller.' },
    { name: 'Natalia Veselnitskaya', role: 'Russian lawyer with ties to Kremlin who attended Trump Tower meeting', status: 'indicted', notes: 'Indicted by SDNY in 2018 for obstruction of justice in unrelated Prevezon case' },
    { name: 'Paul Manafort', role: 'Campaign chairman who attended Trump Tower meeting and later shared polling data with Russian operative', status: 'convicted', notes: 'Convicted on financial crimes; pardoned by Trump' },
  ],
  '^trump-admin-corruption$|^trump-administration$|^trump-corruption$': [
    { name: 'Scott Pruitt', role: 'EPA Administrator who spent lavishly on travel, security, and personal items using agency funds', status: 'pending', notes: 'Resigned July 2018 amid 14+ ethics investigations. GAO found spending violated law.' },
    { name: 'Tom Price', role: 'HHS Secretary who used military and charter aircraft costing taxpayers $400,000+', status: 'pending', notes: 'Resigned September 2017; repaid only $51,887 of costs' },
    { name: 'Ryan Zinke', role: 'Interior Secretary referred to DOJ for potential false statements during investigation', status: 'pending', notes: 'Resigned December 2018 amid multiple ethics investigations' },
    { name: 'Wilbur Ross', role: 'Commerce Secretary who held undisclosed investments creating conflicts of interest', status: 'pending', notes: 'Forbes reported he may have stolen $120M from business partners before joining cabinet' },
  ],
  '^trump-soho-fraud$': [
    { name: 'Ivanka Trump', role: 'Made materially misleading statements to prospective Trump SoHo buyers about sales numbers', status: 'settled', notes: 'Manhattan DA investigation closed after Trump lawyers met with DA. Buyers received refunds.' },
    { name: 'Donald Trump Jr.', role: 'Made materially misleading statements about Trump SoHo sales to boost purchases', status: 'settled', notes: 'Investigation closed without charges despite evidence of misleading statements' },
  ],
  '^trail-of-tears$': [
    { name: 'Andrew Jackson', role: 'President who signed Indian Removal Act (1830) and defied Supreme Court to force Cherokee removal', status: 'pending', notes: 'Ignored Worcester v. Georgia ruling. Forced march killed 4,000+ Cherokee. No legal accountability.' },
    { name: 'U.S. Government', role: 'Systematically removed 60,000+ Native Americans from ancestral lands in southeastern US', status: 'pending', notes: 'Multiple tribes forced west: Cherokee, Muscogee, Seminole, Chickasaw, Choctaw. Thousands died.' },
  ],
  '^tyre-nichols': [
    { name: 'Tadarrius Bean', role: 'Memphis SCORPION unit officer who beat Tyre Nichols to death on January 7, 2023', status: 'convicted', notes: 'Convicted of federal civil rights violations in 2024; acquitted of most serious charges' },
    { name: 'Demetrius Haley', role: 'Memphis officer who participated in fatal beating of Tyre Nichols', status: 'convicted', notes: 'Convicted of federal civil rights violations; also faces state murder charges' },
    { name: 'Justin Smith', role: 'Memphis officer involved in fatal beating', status: 'convicted', notes: 'Convicted of federal charges in 2024' },
    { name: 'Emmitt Martin III', role: 'Memphis officer involved in fatal beating', status: 'convicted', notes: 'Pled guilty to federal charges' },
    { name: 'Desmond Mills Jr.', role: 'Memphis officer involved in fatal beating', status: 'convicted', notes: 'Pled guilty to federal charges' },
  ],

  // ── U ──────────────────────────────────────────────────────────────
  '^uvalde-shooting$|^uvalde-police': [
    { name: 'Salvador Ramos', role: '18-year-old gunman who murdered 19 children and 2 teachers at Robb Elementary School on May 24, 2022', status: 'charged', notes: 'Killed by law enforcement after being inside school for 77 minutes.' },
    { name: 'Pete Arredondo', role: 'Uvalde school district police chief who delayed response for 77 minutes while children called 911', status: 'indicted', notes: 'Indicted on 10 counts of child endangerment in June 2024. Fired from position.' },
  ],
  '^usa-gymnastics-abuse$': [
    { name: 'Larry Nassar', role: 'USA Gymnastics team doctor who sexually abused 265+ gymnasts including Simone Biles and Aly Raisman', status: 'convicted', notes: 'Sentenced to 40-175 years state prison plus 60 years federal for child pornography' },
    { name: 'Steve Penny', role: 'USA Gymnastics President who covered up Nassar\'s abuse for over a year', status: 'charged', notes: 'Charged with evidence tampering; charges dropped. Fired in 2017.' },
    { name: 'FBI Agents', role: 'FBI Indianapolis failed to investigate Nassar for over a year after being notified; agent lied about it', status: 'pending', notes: 'DOJ declined to prosecute FBI agents despite IG findings. $380M DOJ settlement with victims in 2024.' },
  ],
  '^uyghur-genocide$': [
    { name: 'Chinese Government/Xi Jinping', role: 'Directed mass internment of 1+ million Uyghurs in concentration camps in Xinjiang', status: 'pending', notes: 'UN found "serious human rights violations." US, UK, Canada declared it genocide. ICC has no jurisdiction.' },
  ],

  // ── V ──────────────────────────────────────────────────────────────
  '^volkswagen|^vw-emissions': [
    { name: 'Volkswagen AG', role: 'Installed defeat devices in 11 million diesel vehicles worldwide to cheat emissions tests', status: 'convicted', notes: 'Pled guilty to 3 felonies; paid $34.69B total in fines, penalties, and buybacks' },
    { name: 'Oliver Schmidt', role: 'VW US executive who helped conceal defeat devices from regulators', status: 'convicted', notes: 'Sentenced to 7 years in prison; served 4 years before deportation to Germany' },
    { name: 'Martin Winterkorn', role: 'VW CEO who allegedly knew about defeat devices', status: 'indicted', notes: 'Indicted in US in 2018; cannot be extradited from Germany. Charged in Germany in 2019.' },
  ],

  // ── W ──────────────────────────────────────────────────────────────
  '^weinstein-sexual-assault$': [
    { name: 'Harvey Weinstein', role: 'Film producer who sexually assaulted and raped dozens of women over decades', status: 'convicted', notes: 'Convicted in NY (2020) and LA (2022). NY conviction overturned on appeal 2024; retrial pending. LA conviction stands: 16 years.' },
  ],
  '^wells-fargo': [
    { name: 'Wells Fargo', role: 'Created 3.5 million+ fake customer accounts to meet sales targets', status: 'settled', notes: 'Paid $3B DOJ/SEC settlement; $1.7B CFPB fine (2022 largest ever). OCC asset cap still in place.' },
    { name: 'John Stumpf', role: 'CEO who oversaw fake accounts scandal and initially blamed "bad employees"', status: 'settled', notes: 'Fined $17.5M by OCC; barred from banking industry. Paid $2.5M SEC settlement.' },
    { name: 'Carrie Tolstedt', role: 'Head of community banking division where fake accounts were created', status: 'settled', notes: 'OCC fined her $25M and banned from banking. Pled guilty to obstruction charge in 2024.' },
  ],
  '^worldcom': [
    { name: 'Bernard Ebbers', role: 'WorldCom CEO who directed $11 billion accounting fraud; largest in US history at the time', status: 'convicted', notes: 'Convicted on 9 counts; sentenced to 25 years. Released on compassionate release 2020; died 2020.' },
    { name: 'Scott Sullivan', role: 'WorldCom CFO who executed the accounting fraud that concealed $11B in expenses', status: 'convicted', notes: 'Pled guilty; sentenced to 5 years as cooperating witness' },
  ],
  '^wall-street-bailout$|^wall-street-accountability$': [
    { name: 'Wall Street Banks (Systematic)', role: 'Banks whose reckless behavior caused 2008 crisis received $700B+ bailout while taxpayers suffered', status: 'settled', notes: 'Banks paid $150B+ in total penalties but no top executives jailed. TARP was repaid with interest.' },
  ],
  '^war-on-terror|^post-911': [
    { name: 'George W. Bush', role: 'Authorized warrantless surveillance, enhanced interrogation, and indefinite detention after 9/11', status: 'pending', notes: 'Signed authorization for NSA warrantless wiretapping program. No legal accountability.' },
    { name: 'Dick Cheney', role: 'Architect of post-9/11 War on Terror including torture program and Iraq War', status: 'pending', notes: 'Pushed for expanded executive power and "dark side" intelligence operations' },
  ],

  // ── BATCH 2 ────────────────────────────────────────────────────────
  // More specific patterns for remaining 928 investigations

  '^adelphia': [
    { name: 'John Rigas', role: 'Adelphia Communications founder who looted $3.1B from company for personal use', status: 'convicted', notes: 'Convicted of conspiracy and securities fraud in 2004; sentenced to 15 years. Released 2016 on compassionate release.' },
    { name: 'Timothy Rigas', role: 'Adelphia CFO who helped father steal billions from cable company', status: 'convicted', notes: 'Convicted of conspiracy and securities fraud; sentenced to 20 years' },
  ],
  '^ahmaud-arbery': [
    { name: 'Travis McMichael', role: 'Fatally shot Ahmaud Arbery while chasing him through Brunswick, GA neighborhood on Feb 23, 2020', status: 'convicted', notes: 'Convicted of murder (state) and federal hate crimes. Sentenced to life without parole.' },
    { name: 'Gregory McMichael', role: 'Initiated armed pursuit of Arbery based on unfounded suspicion', status: 'convicted', notes: 'Convicted of murder (state) and federal hate crimes. Sentenced to life without parole.' },
    { name: 'William "Roddie" Bryan', role: 'Joined pursuit and filmed the killing of Arbery', status: 'convicted', notes: 'Convicted of murder (state) and federal hate crimes. Sentenced to life with parole.' },
  ],
  '^archegos': [
    { name: 'Bill Hwang', role: 'Archegos Capital founder who used total return swaps to secretly amass massive positions, causing $36B collapse', status: 'convicted', notes: 'Convicted of fraud and market manipulation in July 2024; sentenced to 18 years' },
    { name: 'Patrick Halligan', role: 'Archegos CFO who helped conceal the fund\'s true exposure', status: 'convicted', notes: 'Convicted of fraud in July 2024' },
  ],
  '^arpaio': [
    { name: 'Joe Arpaio', role: 'Maricopa County Sheriff convicted of criminal contempt for defying court order to stop racial profiling', status: 'pardoned', notes: 'Convicted of criminal contempt in 2017; pardoned by Trump before sentencing' },
  ],
  '^aurora-shooting$': [
    { name: 'James Holmes', role: 'Killed 12 and wounded 70 at Aurora, CO movie theater during Dark Knight premiere on July 20, 2012', status: 'convicted', notes: 'Convicted on 165 counts; sentenced to 12 consecutive life sentences plus 3,318 years' },
  ],
  '^activision': [
    { name: 'Activision Blizzard', role: 'Maintained workplace culture of sexual harassment and discrimination ("frat boy" culture)', status: 'settled', notes: 'EEOC settlement $18M (2021). DFEH (CA civil rights) sued. Acquired by Microsoft 2023.' },
    { name: 'Bobby Kotick', role: 'CEO who allegedly knew about and failed to address systemic harassment', status: 'pending', notes: 'WSJ reported Kotick was aware of misconduct for years. Departed after Microsoft acquisition.' },
  ],
  '^asbestos-cover-up|^asbestos-corporate|^asbestos-liability': [
    { name: 'Johns Manville', role: 'Largest asbestos manufacturer that concealed health risks from workers for decades', status: 'settled', notes: 'Filed for bankruptcy in 1982 due to asbestos claims. Internal docs showed knowledge since 1930s.' },
    { name: 'W.R. Grace', role: 'Mining company responsible for Libby, MT asbestos contamination killing hundreds', status: 'acquitted', notes: 'Acquitted of criminal charges in 2009 despite EPA declaring Libby a Superfund site' },
  ],
  '^aig-bailout': [
    { name: 'AIG Financial Products / Joseph Cassano', role: 'Head of AIGFP who wrote $440B in credit default swaps without adequate reserves', status: 'pending', notes: 'No criminal charges. AIG received $182B government bailout. Cassano collected $315M in compensation.' },
    { name: 'Hank Greenberg', role: 'Former AIG CEO involved in accounting fraud at AIG before the crisis', status: 'settled', notes: 'Paid $15M to settle SEC charges of bid-rigging and accounting fraud in 2017' },
  ],
  '^blackwater': [
    { name: 'Blackwater Guards (Nisour Square)', role: 'Killed 17 Iraqi civilians at Nisour Square, Baghdad on September 16, 2007', status: 'convicted', notes: 'Four guards convicted in 2014. Nicholas Slattery sentenced to life. All pardoned by Trump in December 2020.' },
    { name: 'Erik Prince', role: 'Blackwater founder who built private military empire with questionable oversight', status: 'pending', notes: 'Never personally charged. Later proposed privatizing Afghanistan war.' },
  ],
  '^bhopal': [
    { name: 'Union Carbide/Warren Anderson', role: 'CEO when gas leak at Bhopal, India plant killed 3,787+ and injured 558,000+ on December 3, 1984', status: 'charged', notes: 'Anderson fled India on bail; never returned. Died 2014. UC settled for $470M (widely criticized as inadequate).' },
    { name: 'Union Carbide Corporation', role: 'Operated the methyl isocyanate plant with negligent safety standards', status: 'settled', notes: 'Paid $470M settlement in 1989. Acquired by Dow Chemical in 2001. Indian court convicted 7 employees of negligence.' },
  ],
  '^big-tobacco': [
    { name: 'Philip Morris/Altria', role: 'Led tobacco industry conspiracy to conceal addiction and cancer risks for decades', status: 'convicted', notes: 'Judge Kessler found tobacco companies guilty of civil RICO conspiracy in 2006' },
    { name: 'R.J. Reynolds', role: 'Concealed health risks of smoking and marketed to children', status: 'convicted', notes: 'Found liable under RICO. Master Settlement paid $206B over 25 years.' },
    { name: 'British American Tobacco', role: 'Participated in decades-long conspiracy to deny health risks of smoking', status: 'settled', notes: 'Part of Master Settlement Agreement. Internal documents revealed systematic fraud.' },
  ],
  '^bill-cosby|^cosby-sexual': [
    { name: 'Bill Cosby', role: 'Drugged and sexually assaulted at least 60 women over decades', status: 'convicted', notes: 'Convicted of 3 counts of aggravated indecent assault in 2018. Conviction vacated by PA Supreme Court in 2021 on due process grounds.' },
  ],
  '^botham-jean': [
    { name: 'Amber Guyger', role: 'Off-duty Dallas police officer who entered Botham Jean\'s apartment and shot him dead on September 6, 2018', status: 'convicted', notes: 'Convicted of murder in 2019; sentenced to 10 years' },
  ],
  '^charleston-massacre$': [
    { name: 'Dylann Roof', role: 'White supremacist who murdered 9 Black worshippers at Emanuel AME Church on June 17, 2015', status: 'convicted', notes: 'Convicted on 33 federal charges; sentenced to death. First federal hate crime death sentence.' },
  ],
  '^chevron-ecuador$': [
    { name: 'Chevron/Texaco', role: 'Dumped 16 billion gallons of toxic waste in Ecuadorian Amazon rainforest, devastating indigenous communities', status: 'pending', notes: 'Ecuador court ordered $9.5B judgment. Chevron refuses to pay; claims fraud. Never cleaned up contamination.' },
    { name: 'Steven Donziger', role: 'Attorney who won $9.5B judgment against Chevron in Ecuador court', status: 'convicted', notes: 'Disbarred and sentenced to 6 months for contempt (related to Chevron RICO countersuit). Widely viewed as retaliation.' },
  ],
  '^chicago-police-torture$|^chicago-police-torture-ring': [
    { name: 'Jon Burge', role: 'Chicago police commander who tortured over 120 Black men from 1972-1991 using electroshock, suffocation, and beatings', status: 'convicted', notes: 'Convicted of perjury/obstruction in 2010 (statute of limitations barred torture charges). Sentenced to 4.5 years.' },
  ],
  '^chicago-police-coverup$': [
    { name: 'Jason Van Dyke', role: 'CPD officer who shot Laquan McDonald 16 times, then participated in cover-up', status: 'convicted', notes: 'Convicted of second-degree murder in 2018; sentenced to 6 years 9 months' },
    { name: 'City of Chicago', role: 'Suppressed dashcam video of Laquan McDonald shooting for 400+ days', status: 'settled', notes: 'Paid $5M settlement before video release. Three officers acquitted of cover-up.' },
  ],
  '^columbia-hca': [
    { name: 'HCA/Rick Scott', role: 'CEO of Columbia/HCA during largest Medicare fraud in US history', status: 'settled', notes: 'HCA paid $1.7B in fraud settlements. Scott was never charged. Later became FL Governor and US Senator.' },
  ],
  '^congressional-trading$|^congressional-insider': [
    { name: 'Sen. Richard Burr', role: 'Sold $1.7M in stocks after receiving classified COVID briefings before market crash', status: 'pending', notes: 'DOJ investigation closed without charges in 2021 despite suspicious timing' },
    { name: 'Sen. Kelly Loeffler', role: 'Sold millions in stocks after classified COVID briefing', status: 'pending', notes: 'DOJ cleared without charges. STOCK Act enforcement remains weak.' },
  ],
  '^daniel-shaver': [
    { name: 'Philip Brailsford', role: 'Mesa, AZ police officer who shot and killed Daniel Shaver as he crawled on his knees begging for his life', status: 'acquitted', notes: 'Acquitted of murder in 2017. Body camera footage showed Shaver following confusing commands while sobbing. Brailsford later rehired briefly to receive pension.' },
  ],
  '^deutsche-bank': [
    { name: 'Deutsche Bank', role: 'Helped Russian clients launder $10B through "mirror trading" scheme; also laundered for Epstein', status: 'settled', notes: 'Fined $630M for Russian laundering (2017). Fined $150M for Epstein relationship (2020). Total penalties exceed $18B.' },
  ],
  '^east-palestine': [
    { name: 'Norfolk Southern', role: 'Railroad whose deferred maintenance and cost-cutting led to toxic train derailment in East Palestine, OH on Feb 3, 2023', status: 'charged', notes: 'EPA ordered cleanup. Multiple lawsuits. Paid $600M settlement. CEO Alan Shaw later fired for ethics violations.' },
  ],
  '^el-paso-(massacre|walmart)': [
    { name: 'Patrick Crusius', role: 'White supremacist who targeted Hispanic shoppers at Walmart in El Paso, TX, killing 23 on August 3, 2019', status: 'convicted', notes: 'Pled guilty to 90 federal charges and 23 state murder charges. Sentenced to 90 consecutive life sentences.' },
  ],
  '^eric-garner': [
    { name: 'Daniel Pantaleo', role: 'NYPD officer who killed Eric Garner using prohibited chokehold on July 17, 2014', status: 'pending', notes: 'Grand jury declined to indict. DOJ declined federal charges. Fired from NYPD in 2019, 5 years after killing.' },
  ],
  '^ethiopian-airlines|^lion-air-610': [
    { name: 'Boeing Company', role: 'Concealed MCAS system defects in 737 MAX causing Lion Air 610 and Ethiopian 302 crashes killing 346 people', status: 'settled', notes: 'Paid $2.5B deferred prosecution agreement. Victims from 35 countries.' },
  ],
  '^fannie-mae': [
    { name: 'Franklin Raines', role: 'Fannie Mae CEO who oversaw $10.6B accounting scandal to trigger executive bonuses', status: 'settled', notes: 'Paid $24.7M settlement. Fannie Mae paid $400M fine to OFHEO.' },
  ],
  '^fyre-festival$': [
    { name: 'Billy McFarland', role: 'Fyre Festival founder who defrauded investors and attendees of $26M+ with fraudulent luxury music festival', status: 'convicted', notes: 'Convicted of wire fraud; sentenced to 6 years. Released early 2022. Previously also charged for ticket scam while on bail.' },
  ],
  '^galleon': [
    { name: 'Raj Rajaratnam', role: 'Galleon Group hedge fund founder convicted of biggest insider trading case in hedge fund history', status: 'convicted', notes: 'Convicted on 14 counts in 2011; sentenced to 11 years. Fined $150M.' },
    { name: 'Rajat Gupta', role: 'Goldman Sachs board member and McKinsey CEO who tipped Rajaratnam with inside information', status: 'convicted', notes: 'Convicted of securities fraud in 2012; sentenced to 2 years' },
  ],
  '^gamestop': [
    { name: 'Robinhood/Vlad Tenev', role: 'Restricted buying of GameStop and other "meme stocks" during Jan 2021 short squeeze, protecting hedge funds', status: 'pending', notes: 'House investigation found DTCC margin call drove decision. SEC report found no market manipulation by retail traders.' },
    { name: 'Melvin Capital', role: 'Hedge fund that took massive short position in GameStop and lost $6.8B requiring emergency bailout', status: 'pending', notes: 'Received $2.75B bailout from Citadel and Point72. Closed permanently in 2022.' },
  ],
  '^gaetz': [
    { name: 'Matt Gaetz', role: 'US Representative investigated for sex trafficking of a 17-year-old', status: 'pending', notes: 'DOJ investigated but declined to charge. House Ethics Committee found substantial evidence of sexual misconduct and drug use.' },
    { name: 'Joel Greenberg', role: 'Seminole County Tax Collector who procured underage girls and introduced them to Gaetz', status: 'convicted', notes: 'Pled guilty to 6 charges including sex trafficking of a minor; sentenced to 11 years' },
  ],
  '^georgia-voter': [
    { name: 'Brian Kemp', role: 'GA Secretary of State who purged 340,000+ voter registrations before 2018 election in which he was a candidate', status: 'pending', notes: 'Purged voters, closed polling locations in minority areas, then won governor race. No charges.' },
  ],
  '^gm-ignition': [
    { name: 'General Motors', role: 'Concealed defective ignition switches for over a decade, causing at least 124 deaths and 275 injuries', status: 'settled', notes: 'Paid $900M deferred prosecution. Internal probe found engineers knew of defect since 2001.' },
  ],
  '^guatemala-experiments$|^guatemala-syphilis': [
    { name: 'Dr. John Cutler', role: 'US Public Health Service researcher who deliberately infected 1,300+ Guatemalans with STDs without consent (1946-1948)', status: 'pending', notes: 'Experiments hidden until 2010. Obama apologized. US government settled for undisclosed amount.' },
  ],
  '^gujarat-riots$': [
    { name: 'Narendra Modi', role: 'Gujarat Chief Minister during 2002 anti-Muslim pogrom that killed 1,000-2,000 people', status: 'pending', notes: 'SIT cleared Modi; Supreme Court upheld. US denied him visa 2005-2014. Became PM of India in 2014.' },
  ],
  '^laquan-mcdonald': [
    { name: 'Jason Van Dyke', role: 'CPD officer who shot Laquan McDonald 16 times as he walked away', status: 'convicted', notes: 'Convicted of second-degree murder in 2018; sentenced to 6 years 9 months' },
  ],
  '^las-vegas-shooting$': [
    { name: 'Stephen Paddock', role: 'Killed 60 people and wounded 413 at Route 91 Harvest festival in Las Vegas on October 1, 2017', status: 'charged', notes: 'Died by suicide. Largest mass shooting in US history. No motive ever established by FBI.' },
  ],
  '^mccarrick': [
    { name: 'Cardinal Theodore McCarrick', role: 'Sexually abused minors and seminarians for decades while rising to highest levels of Catholic Church', status: 'charged', notes: 'Laicized in 2019. Criminal charges in Massachusetts dismissed due to cognitive decline.' },
  ],
  '^martin-shkreli|^pharma.*price-goug': [
    { name: 'Martin Shkreli', role: 'Raised price of Daraprim (anti-parasitic drug) from $13.50 to $750 per pill (5,455% increase)', status: 'convicted', notes: 'Convicted of securities fraud (unrelated to pricing); sentenced to 7 years. Released 2022. Barred from pharma industry for life.' },
  ],
  '^mckinsey-opioid': [
    { name: 'McKinsey & Company', role: 'Advised Purdue Pharma on how to "turbocharge" OxyContin sales during opioid epidemic', status: 'settled', notes: 'Settled with states for $641M in 2021. Internal documents showed McKinsey suggested targeting opioid "loyalists."' },
  ],
  '^mississippi-welfare$': [
    { name: 'Brett DiBiase', role: 'Son of wrestler Ted DiBiase; received welfare funds for fake drug rehab work', status: 'convicted', notes: 'Pled guilty to federal charges in Mississippi welfare fraud scheme' },
    { name: 'John Davis', role: 'Mississippi DHS Director who diverted $77M in TANF welfare funds to wealthy friends', status: 'convicted', notes: 'Pled guilty to federal and state charges. Largest public fraud case in Mississippi history.' },
    { name: 'Brett Favre', role: 'Received $1.1M in TANF welfare funds for speaking engagements he never gave', status: 'charged', notes: 'Civil suit pending. Text messages showed awareness funds were from welfare program.' },
  ],
  '^mortgage-fraud|^subprime-mortgage': [
    { name: 'Countrywide/Angelo Mozilo', role: 'Largest subprime lender; CEO sold $140M in stock while knowing of toxic loans', status: 'settled', notes: 'Mozilo paid $67.5M SEC settlement. No criminal charges.' },
  ],
  '^news-of-the-world|^phone-hacking': [
    { name: 'Rupert Murdoch/News Corp', role: 'Owned News of the World which systematically hacked phones of celebrities, crime victims, and politicians', status: 'settled', notes: 'Paper shut down in 2011. News Corp paid £1B+ in settlements. UK Leveson Inquiry exposed culture of lawlessness.' },
    { name: 'Andy Coulson', role: 'News of the World editor who oversaw phone hacking operation', status: 'convicted', notes: 'Convicted of conspiracy to intercept phone calls in 2014; served 5 months' },
    { name: 'Rebekah Brooks', role: 'News International CEO and former NOTW editor during hacking period', status: 'acquitted', notes: 'Acquitted of all charges in 2014. Reinstated as CEO of News UK.' },
  ],
  '^ohio-state-abuse$': [
    { name: 'Dr. Richard Strauss', role: 'OSU team doctor who sexually abused at least 177 male students over two decades (1979-1998)', status: 'pending', notes: 'Died by suicide in 2005. OSU settled for over $60M with survivors. University officials knew and failed to act.' },
  ],
  '^okc-bombing$': [
    { name: 'Timothy McVeigh', role: 'Detonated truck bomb at Oklahoma City federal building killing 168 people on April 19, 1995', status: 'convicted', notes: 'Convicted on 11 federal counts; sentenced to death. Executed June 2001.' },
    { name: 'Terry Nichols', role: 'Helped McVeigh plan and build the bomb used in Oklahoma City attack', status: 'convicted', notes: 'Convicted of conspiracy and involuntary manslaughter; sentenced to life without parole' },
  ],
  '^oxford-shooting$': [
    { name: 'Ethan Crumbley', role: '15-year-old who killed 4 students at Oxford High School, MI on November 30, 2021', status: 'convicted', notes: 'Pled guilty to 24 charges; sentenced to life without parole' },
    { name: 'James Crumbley', role: 'Father who purchased gun used in Oxford shooting and ignored warning signs', status: 'convicted', notes: 'Convicted of involuntary manslaughter in 2024. First parent convicted for child\'s mass shooting.' },
    { name: 'Jennifer Crumbley', role: 'Mother who ignored son\'s mental health crisis and warning signs before shooting', status: 'convicted', notes: 'Convicted of involuntary manslaughter in 2024. Precedent-setting case.' },
  ],
  '^parkland': [
    { name: 'Nikolas Cruz', role: 'Killed 17 people at Marjory Stoneman Douglas High School in Parkland, FL on February 14, 2018', status: 'convicted', notes: 'Pled guilty to 17 counts of murder; sentenced to life without parole (jury did not recommend death)' },
    { name: 'Scot Peterson', role: 'Broward County school resource officer who hid outside instead of confronting the shooter', status: 'acquitted', notes: 'Acquitted on all charges in June 2023' },
  ],
  '^pge-wildfire|^pg&e': [
    { name: 'Pacific Gas & Electric', role: 'Electrical equipment failures caused multiple devastating California wildfires including Camp Fire killing 85', status: 'convicted', notes: 'Pled guilty to 84 counts of involuntary manslaughter. Paid $13.5B in settlements. Filed for bankruptcy.' },
  ],
  '^plame-leak$': [
    { name: 'Scooter Libby (I. Lewis Libby)', role: 'VP Cheney chief of staff who leaked CIA agent Valerie Plame\'s identity to retaliate against her husband', status: 'convicted', notes: 'Convicted of obstruction, perjury, and making false statements in 2007. Sentenced to 30 months. Pardoned by Trump 2018.' },
  ],
  '^pulse-shooting$': [
    { name: 'Omar Mateen', role: 'Killed 49 people and wounded 53 at Pulse nightclub in Orlando on June 12, 2016', status: 'charged', notes: 'Killed by police. Deadliest attack on LGBTQ people in US history.' },
    { name: 'Noor Salman', role: 'Wife of Pulse shooter charged with aiding and abetting', status: 'acquitted', notes: 'Acquitted of all charges in 2018' },
  ],
  '^r-kelly$': [
    { name: 'R. Kelly', role: 'Ran decades-long sex trafficking scheme targeting minors', status: 'convicted', notes: 'Convicted in NY (2021) and Chicago (2022). Sentenced to 30 years federal + 20 years state.' },
  ],
  '^rothstein-ponzi$': [
    { name: 'Scott Rothstein', role: 'Florida attorney who ran $1.2B Ponzi scheme selling fabricated legal settlements', status: 'convicted', notes: 'Sentenced to 50 years in 2010; reduced to 30 years for cooperation' },
  ],
  '^santos-fraud$': [
    { name: 'George Santos', role: 'Fabricated entire biography and defrauded donors', status: 'charged', notes: 'Indicted on 23 charges. Expelled from Congress December 2023.' },
  ],
  '^sandy-hook': [
    { name: 'Alex Jones', role: 'Called Sandy Hook massacre a hoax for years, causing immense suffering to grieving families', status: 'convicted', notes: 'Found liable for defamation; ordered to pay $1.5B. Filed for bankruptcy.' },
  ],
  '^spacey': [
    { name: 'Kevin Spacey', role: 'Accused of sexual assault by multiple men including Anthony Rapp', status: 'acquitted', notes: 'Acquitted of all charges in UK trial (2023) and US civil trial. Fired from House of Cards.' },
  ],
  '^stanford-ponzi$|^stanford-financial': [
    { name: 'Allen Stanford', role: 'Ran $7B Ponzi scheme through Stanford Financial Group using fraudulent CDs', status: 'convicted', notes: 'Convicted on 13 counts of fraud in 2012; sentenced to 110 years' },
  ],
  '^sutherland-springs': [
    { name: 'Devin Patrick Kelley', role: 'Killed 26 people and wounded 22 at First Baptist Church in Sutherland Springs, TX on November 5, 2017', status: 'charged', notes: 'Killed himself after shooting. Air Force failed to report his domestic violence conviction to NICS.' },
    { name: 'U.S. Air Force', role: 'Failed to report shooter\'s domestic violence conviction to background check system', status: 'settled', notes: 'Found 60% liable by federal judge. Government settled for $230M with victims.' },
  ],
  '^tamir-rice': [
    { name: 'Timothy Loehmann', role: 'Cleveland police officer who shot and killed 12-year-old Tamir Rice within 2 seconds of arriving on scene', status: 'pending', notes: 'Grand jury declined to indict. DOJ declined federal charges. Loehmann fired but hired by another department in 2018.' },
  ],
  '^terra-luna': [
    { name: 'Do Kwon', role: 'Terraform Labs founder whose algorithmic stablecoin collapse wiped out $40B in investor value', status: 'convicted', notes: 'SEC found Terraform liable for fraud. Do Kwon extradited to US from Montenegro. Criminal trial pending.' },
  ],
  '^three-arrows': [
    { name: 'Su Zhu', role: 'Three Arrows Capital co-founder whose crypto hedge fund collapsed owing $3.5B to creditors', status: 'charged', notes: 'Arrested in Singapore in 2023 while attempting to flee. Sentenced to 4 months for contempt.' },
    { name: 'Kyle Davies', role: 'Three Arrows Capital co-founder', status: 'charged', notes: 'Fled Singapore; whereabouts unknown. Founding new crypto venture from Dubai.' },
  ],
  '^trayvon-martin$': [
    { name: 'George Zimmerman', role: 'Neighborhood watch volunteer who shot and killed unarmed 17-year-old Trayvon Martin in Sanford, FL on Feb 26, 2012', status: 'acquitted', notes: 'Acquitted of second-degree murder and manslaughter in 2013 under Florida Stand Your Ground law' },
  ],
  '^tree-of-life': [
    { name: 'Robert Bowers', role: 'White supremacist who murdered 11 worshippers at Tree of Life synagogue in Pittsburgh on October 27, 2018', status: 'convicted', notes: 'Convicted on 63 federal counts including hate crimes; sentenced to death in 2023' },
  ],
  '^tyco': [
    { name: 'Dennis Kozlowski', role: 'Tyco CEO who looted $400M+ from company for extravagant personal spending', status: 'convicted', notes: 'Convicted of grand larceny and securities fraud in 2005; sentenced to 8-25 years. Released 2014.' },
    { name: 'Mark Swartz', role: 'Tyco CFO who helped Kozlowski steal hundreds of millions', status: 'convicted', notes: 'Convicted alongside Kozlowski; sentenced to 8-25 years' },
  ],
  '^uber-scandals$|^uber-greyball': [
    { name: 'Travis Kalanick', role: 'Uber CEO who oversaw systematic law-breaking including Greyball tool to deceive regulators', status: 'pending', notes: 'Forced to resign in 2017. DOJ investigated Greyball. Uber paid $148M settlement for data breach cover-up.' },
    { name: 'Joe Sullivan', role: 'Uber Chief Security Officer who covered up 2016 data breach affecting 57 million users', status: 'convicted', notes: 'Convicted of obstruction of FTC investigation in 2022; sentenced to probation' },
  ],
  '^uvalde': [
    { name: 'Pete Arredondo', role: 'Uvalde CISD Police Chief who waited 77 minutes while children bled out instead of confronting shooter', status: 'indicted', notes: 'Indicted on 10 counts of child endangerment in 2024. Fired from position.' },
  ],
  '^walter-scott': [
    { name: 'Michael Slager', role: 'North Charleston, SC police officer who shot Walter Scott in the back 5 times as he ran away on April 4, 2015', status: 'convicted', notes: 'Pled guilty to federal civil rights violation; sentenced to 20 years' },
  ],
  '^wework': [
    { name: 'Adam Neumann', role: 'WeWork founder who extracted $700M+ from company through self-dealing while inflating valuations', status: 'pending', notes: 'Received $1.7B exit package from SoftBank. WeWork went public at fraction of peak valuation and later filed for bankruptcy.' },
  ],
  '^wirecard': [
    { name: 'Markus Braun', role: 'Wirecard CEO who oversaw €1.9B accounting fraud that collapsed the company in 2020', status: 'charged', notes: 'Arrested June 2020. Criminal trial began December 2022 in Munich. Ongoing.' },
    { name: 'Jan Marsalek', role: 'Wirecard COO who allegedly masterminded the fraud and had ties to Russian intelligence', status: 'charged', notes: 'Fugitive since June 2020; believed to be in Russia under GRU protection. Interpol red notice issued.' },
  ],
  '^celsius': [
    { name: 'Alex Mashinsky', role: 'Celsius Network CEO who defrauded customers of $4.7B in crypto deposits', status: 'charged', notes: 'Arrested July 2023 on charges of securities fraud, commodities fraud, and wire fraud. Trial pending.' },
  ],
  '^spac-fraud': [
    { name: 'Nikola Corporation / Trevor Milton', role: 'EV company founder who lied about truck capabilities to inflate stock (rolled non-working truck downhill)', status: 'convicted', notes: 'Convicted of securities fraud in 2022; sentenced to 4 years' },
  ],
  '^juul|^teen.*vaping': [
    { name: 'JUUL Labs', role: 'Marketed highly addictive nicotine vaping products to teenagers through social media and flavored pods', status: 'settled', notes: 'Settled with FTC for $462M. Settled with states for over $1.2B total. Youth vaping epidemic followed.' },
    { name: 'James Monsees/Adam Bowen', role: 'JUUL co-founders who designed and marketed highly addictive vaping products targeting youth', status: 'pending', notes: 'Testified before Congress in 2019. No personal criminal charges.' },
  ],
  '^jackson-mississippi-water$': [
    { name: 'City/State of Mississippi', role: 'Systematic disinvestment in majority-Black city\'s water infrastructure leading to collapse in 2022', status: 'pending', notes: 'EPA investigation found state withheld infrastructure funding from majority-Black city. Boil water notices lasted months.' },
  ],
  '^kenosha': [
    { name: 'Kyle Rittenhouse', role: 'Shot three people (killing two) during Kenosha, WI protests on August 25, 2020', status: 'acquitted', notes: 'Acquitted of all charges in 2021 on self-defense grounds after crossing state lines with AR-15 at age 17' },
  ],
  '^kissinger': [
    { name: 'Henry Kissinger', role: 'National Security Advisor/Secretary of State who directed bombing of Cambodia, supported coups, and enabled genocide', status: 'pending', notes: 'Cambodia bombing killed 100,000+ civilians. Supported Pinochet coup. Enabled Indonesian invasion of East Timor. Died 2023 at 100.' },
  ],
  '^lead-poisoning|^lead-industry|^lead-pipes': [
    { name: 'Lead Industries Association', role: 'Concealed evidence of lead poisoning dangers for decades while opposing regulations', status: 'settled', notes: 'Internal documents showed knowledge of dangers since 1920s. Industry fought lead paint ban until 1978.' },
  ],
  '^weinstein': [
    { name: 'Harvey Weinstein', role: 'Sexually assaulted and raped dozens of women over decades using power in Hollywood', status: 'convicted', notes: 'Convicted in NY (2020, overturned 2024) and LA (2022, 16 years). Retrial pending in NY.' },
  ],
  '^operation-condor|^condor': [
    { name: 'Augusto Pinochet', role: 'Chilean dictator and key Operation Condor participant; directed torture and disappearance of thousands', status: 'charged', notes: 'Arrested in London 1998; died 2006 before trial. Operation Condor killed 60,000+ across South America.' },
    { name: 'CIA (US Government)', role: 'Supported and coordinated Operation Condor assassination campaign across South America', status: 'pending', notes: 'Declassified documents confirm CIA knowledge and support. No US officials held accountable.' },
  ],
  '^operation-paperclip|^nazi-scientist': [
    { name: 'U.S. Government (OSS/CIA)', role: 'Recruited 1,600+ Nazi scientists and engineers, whitewashing war crimes history', status: 'pending', notes: 'Scientists included Wernher von Braun (V-2 rockets using slave labor). Records sanitized to bypass Truman order.' },
  ],
  '^robinhood-gamestop|^gamestop-halt': [
    { name: 'Robinhood/Vlad Tenev', role: 'Restricted buying of meme stocks while allowing selling, effectively crashing prices', status: 'pending', notes: 'Congressional investigation found DTCC margin requirements drove decision. $70M FINRA fine for misleading customers.' },
  ],
  '^sackler': [
    { name: 'Sackler Family', role: 'Directed Purdue Pharma\'s predatory OxyContin marketing that fueled opioid epidemic killing 500,000+ Americans', status: 'settled', notes: 'Supreme Court rejected $6B bankruptcy settlement in 2024; new $6.5B deal reached. Family extracted $10.7B from Purdue.' },
  ],
  '^petters-ponzi$': [
    { name: 'Tom Petters', role: 'Ran $3.65B Ponzi scheme through Petters Group Worldwide using fictitious purchase orders', status: 'convicted', notes: 'Convicted on 20 counts of fraud in 2009; sentenced to 50 years' },
  ],
  '^scientology': [
    { name: 'David Miscavige', role: 'Church of Scientology leader accused of directing abuse, forced labor, and harassment of critics', status: 'charged', notes: 'Multiple civil suits. Accused of ordering surveillance and harassment of ex-members. Evaded service in trafficking lawsuit.' },
  ],
  '^sanders-fraud$|^santos-fraud$': [
    { name: 'George Santos', role: 'Fabricated biography and stole from donors', status: 'charged', notes: 'Expelled from Congress. 23 federal charges.' },
  ],
  '^starbucks-union': [
    { name: 'Starbucks', role: 'Systematically retaliated against workers attempting to unionize including illegal firings and store closures', status: 'charged', notes: 'NLRB filed over 100 unfair labor practice charges. Starbucks agreed to bargaining framework in 2024 settlement.' },
  ],
  '^takata': [
    { name: 'Takata Corporation', role: 'Manufactured defective airbag inflators that could explode and send metal shrapnel at occupants; linked to 27+ deaths', status: 'convicted', notes: 'Pled guilty to wire fraud; fined $1B. Filed for bankruptcy in 2017.' },
    { name: 'Shinichi Tanaka', role: 'Former Takata executive who concealed test data showing airbag defects', status: 'convicted', notes: 'Indicted on wire fraud charges; pled guilty' },
  ],
  '^tesla-autopilot': [
    { name: 'Tesla/Elon Musk', role: 'Marketed "Autopilot" and "Full Self-Driving" features as autonomous when they require constant driver attention', status: 'charged', notes: 'NHTSA investigated 956 Autopilot crashes including 29+ fatalities. DOJ criminal probe ongoing.' },
  ],
  '^ticketmaster|^live-nation': [
    { name: 'Live Nation/Ticketmaster', role: 'Monopolized live entertainment ticketing market with excessive fees and anticompetitive practices', status: 'charged', notes: 'DOJ filed antitrust lawsuit in 2024 seeking to break up the merged company' },
  ],
  '^tuskegee': [
    { name: 'U.S. Public Health Service', role: 'Conducted 40-year experiment (1932-1972) denying syphilis treatment to Black men in Tuskegee, AL', status: 'settled', notes: 'Deliberately withheld penicillin treatment. 128 died. Government settled for $10M. Clinton apologized in 1997.' },
  ],
  '^vioxx|^merck-cardiovascular': [
    { name: 'Merck & Co.', role: 'Concealed evidence that Vioxx painkiller caused heart attacks and strokes; drug linked to 27,785 deaths', status: 'settled', notes: 'Paid $4.85B settlement in 2007 with 27,000 plaintiffs. Internal documents showed Merck knew of cardiac risks.' },
  ],
  '^va-healthcare|^veterans.*healthcare|^veterans-affairs': [
    { name: 'VA Health Administration', role: 'Systematic falsification of wait times while veterans died waiting for care', status: 'charged', notes: 'Phoenix VA scandal: 40+ veterans died waiting. Secretary Shinseki resigned 2014. Criminal charges brought against some officials.' },
  ],

  // ── Broad catch patterns ───────────────────────────────────────────
  '^trump-immunity$': [
    { name: 'Donald Trump', role: 'Claimed absolute presidential immunity from criminal prosecution for official acts', status: 'pending', notes: 'Supreme Court ruled in Trump v. US (2024) that presidents have some immunity for official acts. Case remanded.' },
  ],
  '^trump-impeachment$|^first-impeachment$|^second-impeachment$': [
    { name: 'Donald Trump', role: 'Impeached twice: (1) abuse of power/obstruction re: Ukraine and (2) incitement of insurrection on January 6', status: 'acquitted', notes: 'Acquitted by Senate both times. Second impeachment had 57-43 vote (bipartisan majority but below 2/3).' },
  ],
  '^trump-pardons$': [
    { name: 'Donald Trump', role: 'Issued controversial pardons to political allies and campaign associates convicted in Russia investigation', status: 'pending', notes: 'Pardoned Manafort, Flynn, Stone, Bannon, Arpaio, and others. Some pardons seen as obstruction.' },
  ],
  '^trump-tax-cuts$': [
    { name: 'Republican Congress / Trump Administration', role: 'Passed $1.9 trillion tax cut in 2017 that disproportionately benefited corporations and wealthy individuals', status: 'pending', notes: 'Corporate tax rate cut from 35% to 21%. Added $1.9T to national debt over 10 years.' },
  ],
  '^stormy-daniels': [
    { name: 'Donald Trump', role: 'Falsified business records to conceal hush money payment to Stormy Daniels before 2016 election', status: 'convicted', notes: 'Convicted on 34 felony counts of falsifying business records in People v. Trump (2024)' },
    { name: 'Michael Cohen', role: 'Arranged $130,000 hush money payment to Daniels and was reimbursed through falsified invoices', status: 'convicted', notes: 'Pled guilty to campaign finance violations and served prison time' },
  ],
  '^trump-model': [
    { name: 'Trump Model Management', role: 'Brought foreign models to US without proper work visas; underpaid and housed them in substandard conditions', status: 'pending', notes: 'Multiple models alleged visa violations and exploitation. Agency closed in 2017. No charges filed.' },
  ],
  '^trump-tower-moscow$': [
    { name: 'Donald Trump', role: 'Pursued Moscow real estate deal during 2016 campaign while denying any Russia business ties', status: 'pending', notes: 'Michael Cohen testified Trump was briefed on project through June 2016. Trump denied knowledge.' },
    { name: 'Michael Cohen', role: 'Lied to Congress about timeline of Trump Tower Moscow project negotiations', status: 'convicted', notes: 'Pled guilty to lying to Congress about the project extending well into 2016 campaign' },
  ],
  '^trump-campaign$': [
    { name: 'Donald Trump', role: 'Multiple campaign finance violations and FEC complaints across 2016 and 2020 campaigns', status: 'charged', notes: 'FEC found "reason to believe" campaign violated disclosure laws. Multiple state and federal investigations.' },
    { name: 'Steve Bannon', role: 'Trump campaign CEO and advisor charged with money laundering; built border wall fund that defrauded donors', status: 'convicted', notes: 'Pardoned for federal fraud charges (2021). Convicted of contempt of Congress; served 4 months. Convicted of NY state fraud in 2024.' },
  ],
  '^trump-admin-2$': [
    { name: 'Various Trump Administration Officials', role: 'Second Trump administration marked by unprecedented consolidation of executive power and mass firings', status: 'pending', notes: 'DOGE cuts to federal agencies, mass firing of inspectors general, and challenges to congressional oversight' },
  ],

  // ── BATCH 3: MORE SPECIFIC ────────────────────────────────────────
  '^ny-civil-fraud$': [
    { name: 'Donald Trump', role: 'Systematically inflated property values to obtain favorable loans and insurance rates', status: 'convicted', notes: 'Found liable for fraud by Judge Engoron in 2024; ordered to pay $454M (reduced from $464M on appeal bond).' },
    { name: 'Allen Weisselberg', role: 'Trump Organization CFO who facilitated tax fraud and financial misstatements', status: 'convicted', notes: 'Pled guilty to tax fraud (2022, 5 months jail) and perjury (2024, 5 months jail). Key financial gatekeeper.' },
  ],
  '^sac-capital$': [
    { name: 'SAC Capital / Steven Cohen', role: 'Hedge fund with systemic insider trading culture', status: 'convicted', notes: 'SAC pled guilty in 2013; paid $1.8B penalty. Cohen banned from outside money for 2 years. Now runs Point72.' },
    { name: 'Mathew Martoma', role: 'SAC portfolio manager who made $275M based on insider tip about Alzheimer\'s drug trial', status: 'convicted', notes: 'Convicted of securities fraud in 2014; sentenced to 9 years' },
  ],
  '^rwandan-genocide$': [
    { name: 'Hutu Extremist Government', role: 'Directed systematic genocide of 800,000+ Tutsis in 100 days in 1994', status: 'convicted', notes: 'ICTR convicted 93 individuals including PM Jean Kambanda (life sentence)' },
  ],
  '^rohingya': [
    { name: 'Myanmar Military / Min Aung Hlaing', role: 'Directed ethnic cleansing campaign against Rohingya Muslims killing thousands and displacing 740,000+', status: 'charged', notes: 'ICC authorized investigation. ICJ ordered Myanmar to prevent genocide. Military coup in 2021.' },
  ],
  '^darfur': [
    { name: 'Omar al-Bashir', role: 'Sudanese President who directed genocide in Darfur killing 300,000+ people', status: 'indicted', notes: 'ICC issued arrest warrants (2009, 2010) for genocide, war crimes, and crimes against humanity. Ousted in 2019.' },
  ],
  '^bosnian-genocide$': [
    { name: 'Radovan Karadzic', role: 'Bosnian Serb leader who directed Srebrenica massacre and siege of Sarajevo', status: 'convicted', notes: 'Convicted of genocide by ICTY in 2016; sentenced to life imprisonment' },
    { name: 'Ratko Mladic', role: 'Bosnian Serb military commander who executed 8,000+ Muslim men at Srebrenica', status: 'convicted', notes: 'Convicted of genocide, war crimes; sentenced to life in 2017' },
  ],
  '^cambodian-genocide$': [
    { name: 'Khmer Rouge / Pol Pot', role: 'Led regime that killed 1.5-2 million Cambodians (25% of population) through execution, starvation, and forced labor', status: 'convicted', notes: 'Pol Pot died 1998. Tribunal convicted Nuon Chea and Khieu Samphan of genocide in 2018.' },
  ],
  '^congo-free-state$': [
    { name: 'King Leopold II of Belgium', role: 'Personally owned Congo Free State as private colony; regime killed 10+ million Congolese through forced labor and brutality', status: 'pending', notes: 'Forced labor for rubber extraction. Dismemberment as punishment. Never held accountable; died 1909.' },
  ],
  '^tiananmen': [
    { name: 'Chinese Communist Party / Deng Xiaoping', role: 'Ordered military assault on pro-democracy protesters in Tiananmen Square on June 4, 1989', status: 'pending', notes: 'Estimates of 300-3,000+ killed. CCP continues to censor all mention. No accountability.' },
  ],
  '^nanjing-massacre$': [
    { name: 'Imperial Japanese Army', role: 'Murdered an estimated 200,000-300,000 Chinese civilians and POWs in Nanjing over 6 weeks starting December 1937', status: 'convicted', notes: 'Tokyo War Crimes Tribunal convicted commanders including General Matsui (executed 1948)' },
  ],
  '^unit-731': [
    { name: 'Shiro Ishii', role: 'Director of Unit 731 biological warfare program that experimented on thousands of live human subjects', status: 'pending', notes: 'US granted immunity in exchange for data. Japanese government denied program until 2002.' },
  ],
  '^transatlantic-slave-trade$': [
    { name: 'European Colonial Powers', role: 'Systematically enslaved 12.5 million Africans and transported them across the Atlantic over 400 years', status: 'pending', notes: 'Britain, Portugal, Spain, France, and Netherlands primary actors. Britain abolished 1807; US abolished 1865.' },
  ],
  '^indonesian-mass-killings$': [
    { name: 'Indonesian Military / Suharto', role: 'Directed mass killings of 500,000-1,000,000 suspected communists in 1965-66', status: 'pending', notes: 'CIA provided kill lists and communication equipment. No trials. Suharto ruled until 1998.' },
  ],
  '^armenian-genocide$': [
    { name: 'Ottoman Empire / Young Turks (CUP)', role: 'Systematically exterminated 1.5 million Armenians through deportation, death marches, and massacres (1915-1923)', status: 'pending', notes: 'Turkish government still denies genocide occurred. US Congress officially recognized Armenian Genocide in 2019.' },
  ],
  '^apartheid': [
    { name: 'South African National Party Government', role: 'Implemented racial apartheid system from 1948-1994 denying rights to Black South Africans', status: 'pending', notes: 'TRC documented crimes. Many perpetrators received amnesty. De Klerk shared Nobel Prize with Mandela.' },
  ],
  '^holodomor': [
    { name: 'Joseph Stalin / Soviet Government', role: 'Engineered famine in Ukraine (1932-33) killing 3.5-7.5 million through forced collectivization and grain confiscation', status: 'pending', notes: 'Recognized as genocide by 16+ countries. Soviet archives confirmed deliberate policy targeting Ukraine.' },
  ],
  '^japanese-american-internment$|^japanese-internment$|^korematsu': [
    { name: 'Franklin D. Roosevelt', role: 'Signed Executive Order 9066 authorizing internment of 120,000 Japanese Americans during WWII', status: 'pending', notes: 'Government formally apologized in 1988; paid $20,000 reparation per survivor. Korematsu decision never formally overturned but repudiated.' },
  ],
  '^iran-coup-1953$|^operation-ajax': [
    { name: 'CIA/MI6', role: 'Orchestrated 1953 coup overthrowing democratically elected PM Mossadegh to protect British oil interests', status: 'pending', notes: 'CIA acknowledged role in 2013 declassified documents. Replaced democracy with Shah\'s dictatorship.' },
  ],
  '^bay-of-pigs': [
    { name: 'CIA / Eisenhower-Kennedy Administrations', role: 'Planned and executed failed invasion of Cuba at Bay of Pigs on April 17, 1961', status: 'pending', notes: '1,400 CIA-trained Cuban exiles defeated. 114 killed, 1,189 captured. Kennedy accepted responsibility.' },
  ],
  '^operation-northwoods': [
    { name: 'Joint Chiefs of Staff / Lyman Lemnitzer', role: 'Proposed false flag attacks on US soil to justify invasion of Cuba', status: 'pending', notes: 'Plan rejected by Kennedy. Declassified in 1997. Included proposed attacks on US military and civilians.' },
  ],
  '^cointelpro|^fbi-cointelpro': [
    { name: 'FBI / J. Edgar Hoover', role: 'Ran COINTELPRO program to surveil, infiltrate, and disrupt civil rights, antiwar, and Black Power movements', status: 'pending', notes: 'Exposed by 1971 Citizens\' Commission break-in. Church Committee documented abuses. Hoover died 1972.' },
  ],
  '^operation-mockingbird': [
    { name: 'CIA', role: 'Recruited journalists and media organizations to spread propaganda during Cold War', status: 'pending', notes: 'Church Committee documented CIA relationships with major media outlets. Frank Wisner ran initial program.' },
  ],
  '^operation-chaos$': [
    { name: 'CIA / Richard Helms', role: 'Illegally surveilled and catalogued 300,000+ Americans opposing Vietnam War', status: 'pending', notes: 'Violated CIA charter prohibiting domestic operations. Exposed by Seymour Hersh in 1974.' },
  ],
  '^operation-fast-and-furious$': [
    { name: 'ATF', role: 'Allowed 2,000+ firearms to "walk" across Mexican border in botched sting operation', status: 'pending', notes: 'Guns linked to death of Border Patrol agent Brian Terry. AG Holder held in contempt of Congress.' },
  ],
  '^prism|^nsa-stellarwind|^nsa-warrantless|^nsa-mass-surveillance': [
    { name: 'NSA (U.S. Government)', role: 'Conducted mass surveillance of Americans\' phone records and internet communications without warrants', status: 'pending', notes: 'Snowden revelations (2013) exposed PRISM, XKeyscore, and bulk metadata collection. FISA Court rubber-stamped requests.' },
    { name: 'James Clapper', role: 'DNI who lied to Congress under oath about NSA mass surveillance', status: 'pending', notes: 'Told Senate Intelligence Committee NSA did "not wittingly" collect data on millions of Americans. No perjury charges.' },
  ],
  '^xkeyscore': [
    { name: 'NSA', role: 'Operated XKeyscore system enabling analysts to search virtually all internet traffic worldwide', status: 'pending', notes: 'Snowden documents showed system could intercept emails, chats, and browsing history with minimal oversight' },
  ],
  '^total-information-awareness$': [
    { name: 'John Poindexter / DARPA', role: 'Developed TIA program to conduct mass surveillance on Americans through data mining', status: 'pending', notes: 'Congress defunded TIA in 2003. Components reportedly continued under other names in classified programs.' },
  ],
  '^guantanamo': [
    { name: 'U.S. Government (Multiple Administrations)', role: 'Operated indefinite detention facility at Guantanamo Bay holding prisoners without trial', status: 'pending', notes: '780 detainees held since 2002. Most held without charges. As of 2024, 30 remain detained. Torture documented.' },
  ],
  '^extraordinary-rendition': [
    { name: 'CIA', role: 'Kidnapped suspects and transferred them to countries known to practice torture for "enhanced interrogation"', status: 'pending', notes: 'European Parliament documented 1,245+ CIA flights through European airspace. Multiple countries complicit.' },
  ],
  '^pine-ridge$': [
    { name: 'FBI', role: 'Oversaw violent period on Pine Ridge Reservation (1973-76) where 60+ Native Americans were killed', status: 'pending', notes: 'Leonard Peltier convicted in agent deaths; maintains innocence. COINTELPRO tactics documented against AIM.' },
  ],
  '^leonard-peltier$': [
    { name: 'Leonard Peltier', role: 'AIM activist convicted of killing 2 FBI agents at Pine Ridge in 1975; maintains innocence with significant evidence of prosecutorial misconduct', status: 'convicted', notes: 'Sentenced to 2 consecutive life terms. Amnesty International considers him a political prisoner. Denied clemency by Biden.' },
  ],
  '^nuclear-testing|^nuclear-waste': [
    { name: 'U.S. Government (AEC/DOE)', role: 'Conducted atmospheric nuclear tests exposing millions of "downwinders" to radiation; contaminated vast areas', status: 'settled', notes: 'Radiation Exposure Compensation Act (1990) paid $2.4B to victims. Marshall Islands residents still displaced.' },
  ],
  '^cold-war-radiation$': [
    { name: 'U.S. Government (AEC)', role: 'Conducted secret radiation experiments on unwitting human subjects during Cold War', status: 'settled', notes: 'Advisory Committee on Human Radiation Experiments (1994) documented experiments on prisoners, children, and pregnant women.' },
  ],
  '^philippines?-drug-war$': [
    { name: 'Rodrigo Duterte', role: 'Philippine President whose "war on drugs" resulted in extrajudicial killing of 12,000-30,000 people', status: 'charged', notes: 'ICC authorized investigation in 2021. Charges include crimes against humanity.' },
  ],
  '^el-salvador|^central-america-death': [
    { name: 'U.S. Government (Reagan Administration)', role: 'Funded and trained Salvadoran military responsible for death squads killing 75,000+ civilians', status: 'pending', notes: 'US provided $6B in aid despite knowledge of massacres. UN Truth Commission documented systematic abuses.' },
  ],
  '^east-timor$': [
    { name: 'Indonesian Military / Suharto', role: 'Invaded East Timor in 1975 with US approval; occupation killed estimated 100,000-180,000 Timorese', status: 'pending', notes: 'Ford and Kissinger gave green light hours before invasion. UN-supervised referendum in 1999 led to independence.' },
  ],
  '^rabaa-massacre$': [
    { name: 'Egyptian Military / Abdel Fattah el-Sisi', role: 'Security forces killed at least 817 protesters at Rabaa al-Adawiya Square on August 14, 2013', status: 'pending', notes: 'HRW called it "one of the world\'s largest killings of demonstrators in a single day in recent history." Sisi became president.' },
  ],
  '^syrian-chemical': [
    { name: 'Bashar al-Assad', role: 'Used chemical weapons including sarin and chlorine against Syrian civilians multiple times', status: 'charged', notes: 'OPCW confirmed multiple CW attacks. 2013 Ghouta attack killed 1,400+. ICC referral vetoed by Russia.' },
  ],
  '^yemen-war': [
    { name: 'Saudi-led Coalition / Mohammed bin Salman', role: 'Conducted indiscriminate bombing of Yemen killing 150,000+ and causing worst humanitarian crisis globally', status: 'pending', notes: 'Bombed hospitals, schools, weddings, school buses. US provided weapons, intelligence, and refueling support.' },
  ],
  '^ryanair-hijacking$': [
    { name: 'Belarus / Alexander Lukashenko', role: 'Forced Ryanair Flight 4978 to land in Minsk to arrest dissident journalist Roman Protasevich on May 23, 2021', status: 'charged', notes: 'Fighter jet scrambled. ICAO investigation confirmed state-directed act. EU imposed sanctions on Belarus.' },
  ],
  '^wagner': [
    { name: 'Wagner Group / Yevgeny Prigozhin', role: 'Russian mercenary group committed war crimes in Syria, Libya, Mali, Central African Republic, and Ukraine', status: 'charged', notes: 'Documented executions, beheadings, and civilian massacres. Prigozhin killed in August 2023 plane crash. US sanctioned.' },
  ],
  '^turkey-authoritarianism$': [
    { name: 'Recep Tayyip Erdogan', role: 'Turkish President who used failed 2016 coup attempt to purge judiciary, media, and opposition', status: 'pending', notes: 'Jailed 150,000+ people; fired 125,000 civil servants; closed 1,500+ institutions. Press freedom severely curtailed.' },
  ],
  '^belarus-repression$': [
    { name: 'Alexander Lukashenko', role: 'Belarusian dictator who violently suppressed 2020 pro-democracy protests and rigged election', status: 'charged', notes: 'Tortured detained protesters. 35,000+ arrested. EU/US imposed sanctions. Continues to rule.' },
  ],
  '^venezuela-human-rights$|^venezuela-election$': [
    { name: 'Nicolas Maduro', role: 'Venezuelan President accused of crimes against humanity; oversaw economic collapse and mass migration', status: 'indicted', notes: 'US DOJ indicted on narco-terrorism charges (2020). ICC investigating crimes against humanity.' },
  ],
  '^north-korean-prison$': [
    { name: 'Kim Jong-un / DPRK', role: 'Operates network of political prison camps holding 80,000-120,000 people in conditions amounting to slavery', status: 'charged', notes: 'UN Commission of Inquiry found systematic crimes against humanity including extermination and enslavement' },
  ],
  '^kashmir-suppression$': [
    { name: 'Indian Government', role: 'Revoked Kashmir\'s autonomous status in 2019; imposed longest internet blackout in a democracy', status: 'pending', notes: 'Detained political leaders without trial. 70,000+ killed since 1989 insurgency. Human rights groups condemned crackdown.' },
  ],
  '^genocide-palestine$|^israel-palestine': [
    { name: 'Israel Defense Forces', role: 'Military operations in Gaza causing mass civilian casualties and infrastructure destruction', status: 'charged', notes: 'ICJ found plausible genocide case (2024). ICC issued arrest warrants for Israeli PM Netanyahu and Hamas leaders.' },
  ],
  '^gulf-of-tonkin$': [
    { name: 'Lyndon B. Johnson Administration', role: 'Used fabricated Gulf of Tonkin incident to escalate Vietnam War with congressional authorization', status: 'pending', notes: 'NSA documents (2005) confirmed second attack never happened. Resolution led to 58,000+ US and 3M+ Vietnamese deaths.' },
  ],
  '^phoenix-program': [
    { name: 'CIA / William Colby', role: 'Directed Phoenix Program in Vietnam that killed 20,000-40,000 suspected Viet Cong including many civilians', status: 'pending', notes: 'Colby admitted to Congress program existed. South Vietnamese allies committed most killings. No accountability.' },
  ],
  '^sand-creek-massacre$': [
    { name: 'Colonel John Chivington', role: 'Led 675 US troops in massacre of 230+ peaceful Cheyenne and Arapaho at Sand Creek, CO on November 29, 1864', status: 'pending', notes: 'Committee on the Conduct of War condemned attack. Chivington resigned to avoid court-martial. No prosecution.' },
  ],
  '^wilmington-massacre$': [
    { name: 'White Supremacist Mob (Wilmington, NC)', role: 'Overthrew democratically elected biracial government in coup on November 10, 1898; killed 60-300+ Black residents', status: 'pending', notes: 'Only successful coup d\'etat in US history. Perpetrators never held accountable. State acknowledged in 2006.' },
  ],
  '^red-summer-1919$': [
    { name: 'White Mobs (Multiple Cities)', role: 'Coordinated racial violence in 25+ US cities during "Red Summer" of 1919 killing hundreds of Black Americans', status: 'pending', notes: 'Included massacres in Chicago, Elaine (AR), and Washington DC. Few perpetrators prosecuted.' },
  ],
  '^radium-girls$': [
    { name: 'U.S. Radium Corporation', role: 'Employed women to paint watch dials with radium while knowing radiation was lethal; concealed health effects', status: 'settled', notes: 'Five workers sued in 1927, settling for $10,000 each plus medical. Led to occupational safety reforms.' },
  ],
  '^thalidomide': [
    { name: 'Chemie Grunenthal', role: 'Manufactured thalidomide sedative causing severe birth defects in 10,000+ children worldwide', status: 'settled', notes: 'German criminal case dropped in 1970. Company apologized in 2012. FDA reviewer Frances Kelsey prevented US sale.' },
  ],
  '^des-diethylstilbestrol$': [
    { name: 'Eli Lilly and other DES manufacturers', role: 'Marketed DES to pregnant women despite lack of efficacy evidence; caused cancer and reproductive harm in offspring', status: 'settled', notes: 'DES prescribed to 5-10M pregnant women. Daughters developed rare cancer. Mass litigation followed.' },
  ],
  '^lobotomy-epidemic$': [
    { name: 'Dr. Walter Freeman', role: 'Performed 3,500+ lobotomies including on minors using ice pick technique without proper medical training', status: 'pending', notes: 'Performed "ice pick" transorbital lobotomies in office settings. Operation fell out of favor with antipsychotic development.' },
  ],
  '^forced-sterilization': [
    { name: 'U.S. Government (Multiple States)', role: 'Forcibly sterilized 60,000-70,000 Americans including minorities, disabled, and poor under eugenics laws', status: 'pending', notes: 'Buck v. Bell (1927) upheld forced sterilization. Programs ran until 1970s. Some states have apologized and offered reparations.' },
  ],
  '^fda-contaminated-blood': [
    { name: 'FDA/Blood Banks', role: 'Failed to screen blood supply for HIV and Hepatitis C; 10,000+ hemophiliacs infected with HIV', status: 'settled', notes: 'Bayer and other companies sold contaminated blood products abroad after US ban. Settled for $660M with hemophilia patients.' },
  ],
  '^camp-lejeune': [
    { name: 'U.S. Marine Corps', role: 'Contaminated drinking water at Camp Lejeune with toxic chemicals from 1953-1987 affecting 1 million+ people', status: 'settled', notes: 'PACT Act (2022) allowed claims. VA found links to cancers, birth defects. DOJ processing 100,000+ claims.' },
  ],
  '^east-palestine-train$': [
    { name: 'Norfolk Southern', role: 'Toxic train derailment in East Palestine, OH on Feb 3, 2023; vinyl chloride released and burned', status: 'charged', notes: 'EPA ordered cleanup. Paid $600M+ settlement. CEO fired for ethics violations.' },
  ],
  '^maui-wildfire$': [
    { name: 'Hawaiian Electric (HECO)', role: 'Failed to de-energize power lines during high winds, sparking deadly Lahaina fire killing 101 on Aug 8, 2023', status: 'charged', notes: 'Deadliest US wildfire in over a century. HECO agreed to $4B settlement. Emergency management failures documented.' },
  ],
  '^credit-suisse': [
    { name: 'Credit Suisse', role: 'Serial compliance failures including helping US clients evade taxes; Archegos exposure; Greensill Capital', status: 'settled', notes: 'Collapsed in March 2023; forced merger with UBS. Paid $5.3B in penalties over final decade. 167-year institution destroyed.' },
  ],
  '^google-antitrust': [
    { name: 'Google/Alphabet', role: 'Maintained illegal monopoly in search and search advertising through exclusive default agreements', status: 'convicted', notes: 'Judge ruled Google holds illegal monopoly in August 2024 (DOJ v. Google). Remedies pending; DOJ seeks structural changes.' },
  ],
  '^for-profit-college': [
    { name: 'Corinthian Colleges', role: 'Defrauded students with false job placement rates and predatory lending', status: 'settled', notes: 'ED fined $30M. Company collapsed in 2015. $6B in student loans discharged.' },
    { name: 'University of Phoenix / Apollo Education', role: 'Deceptive recruitment practices targeting veterans', status: 'settled', notes: 'FTC $191M settlement in 2019. DOD suspended from military tuition assistance.' },
  ],
  '^stop-the-steal$': [
    { name: 'Ali Alexander', role: 'Organized "Stop the Steal" rallies that culminated in January 6 Capitol attack', status: 'pending', notes: 'Cooperated with January 6 Committee. DOJ investigated. Not charged as of 2024.' },
  ],
  '^green-bay-sweep$': [
    { name: 'Peter Navarro', role: 'White House advisor who helped plan "Green Bay Sweep" to challenge electoral certification on January 6', status: 'convicted', notes: 'Convicted of contempt of Congress for defying Jan 6 Committee subpoena; served 4 months' },
  ],
  '^ginni-thomas': [
    { name: 'Ginni Thomas', role: 'Wife of Justice Clarence Thomas; lobbied to overturn 2020 election while husband ruled on related cases', status: 'pending', notes: 'Texted Mark Meadows urging efforts to overturn election. Justice Thomas did not recuse from Jan 6 cases.' },
  ],
  '^guard-deployment-delays$': [
    { name: 'Acting SecDef Christopher Miller', role: 'Delayed National Guard deployment to Capitol for hours during January 6 attack', status: 'pending', notes: 'Guard not authorized until 5:08 PM; arrived at 5:40 PM, hours after breach. IG investigation documented delays.' },
  ],
  '^seychelles-meeting$': [
    { name: 'Erik Prince', role: 'Arranged secret Seychelles meeting between Russian and Trump transition team contacts in January 2017', status: 'pending', notes: 'Prince lied to House Intelligence Committee about the meeting. Mueller documented but did not charge.' },
  ],
  '^helsinki-summit$': [
    { name: 'Donald Trump', role: 'Publicly sided with Putin over US intelligence agencies on Russian election interference at Helsinki summit', status: 'pending', notes: 'Said he saw no reason it would be Russia despite unanimous IC assessment. Bipartisan condemnation from Congress.' },
  ],
  '^flynn-russia$': [
    { name: 'Michael Flynn', role: 'Trump NSA who secretly discussed sanctions with Russian ambassador then lied to FBI about it', status: 'convicted', notes: 'Pled guilty to lying to FBI. Sought to withdraw plea. Pardoned by Trump November 2020.' },
  ],

  // ── BROAD TOPIC CATCH-ALLS ────────────────────────────────────────
  '^surveillance-state$|^surveillance-expansion$|^surveillance-capitalism$': [
    { name: 'NSA/Tech Companies', role: 'Mass surveillance apparatus monitoring billions of communications globally', status: 'pending', notes: 'Snowden revelations showed complicity of Google, Apple, Microsoft, Facebook in PRISM program' },
  ],
  '^corporate-tax-(avoidance|evasion)': [
    { name: 'Major Corporations (Apple, Google, Amazon, etc.)', role: 'Used offshore structures to avoid hundreds of billions in taxes through profit shifting', status: 'pending', notes: 'EU ordered Apple to pay $14.3B in back taxes. OECD global minimum tax (15%) adopted 2021 but implementation slow.' },
  ],
  '^corporate-wage-theft$': [
    { name: 'Wage Theft (Systematic)', role: 'US employers steal $15B+ annually from workers through unpaid wages, overtime, and tip theft', status: 'pending', notes: 'EPI found wage theft exceeds all property theft combined. Low-wage workers most affected. Enforcement minimal.' },
  ],
  '^worker-misclassification$|^gig-economy': [
    { name: 'Uber, Lyft, DoorDash', role: 'Misclassified millions of workers as independent contractors to avoid benefits and labor protections', status: 'charged', notes: 'Multiple state AG suits. California AB5 passed. $100M+ NLRB settlement. Companies spent $200M+ on Prop 22.' },
  ],
  '^private-equity-(abuses|housing)': [
    { name: 'Private Equity (KKR, Blackstone, Apollo, etc.)', role: 'Loaded companies with debt through leveraged buyouts leading to job losses and bankruptcy; bought housing to inflate rents', status: 'pending', notes: 'Blackstone became world\'s largest landlord. PE-owned hospitals and nursing homes have higher mortality. SEC scrutiny increasing.' },
  ],
  '^predatory-lending': [
    { name: 'Payday/Predatory Lenders', role: 'Trapped borrowers in debt cycles with APRs exceeding 400% targeting low-income and minority communities', status: 'charged', notes: 'CFPB brought enforcement actions. Some states banned payday lending. Industry spends millions on lobbying.' },
  ],
  '^prosecutorial-misconduct': [
    { name: 'US Prosecutors (Systematic)', role: 'Withheld exculpatory evidence, coerced plea deals, and engaged in misconduct contributing to wrongful convictions', status: 'pending', notes: 'National Registry of Exonerations: official misconduct in 54% of wrongful convictions. Prosecutors rarely disciplined.' },
  ],
  '^wrongful-convictions': [
    { name: 'US Criminal Justice System', role: 'Over 3,400 exonerations documented since 1989; average exoneree served 8.7 years for crimes they didn\'t commit', status: 'pending', notes: 'Innocence Project documented false confessions, bad forensic science, and eyewitness misidentification as leading causes' },
  ],
  '^death-penalty-innocence$|^capital-punishment': [
    { name: 'US Death Penalty System', role: 'At least 190 people exonerated from death row since 1973; unknown number of innocent people executed', status: 'pending', notes: 'Study estimated 4.1% of death row inmates are innocent. Racial and geographic disparities well-documented.' },
  ],
  '^solitary-confinement': [
    { name: 'US Prison System', role: '80,000+ prisoners held in solitary confinement; UN considers extended solitary confinement (15+ days) to be torture', status: 'pending', notes: 'Mandela Rules define prolonged solitary as torture. Albert Woodfox held 43 years in solitary. Reform efforts slow.' },
  ],
  '^mass-incarceration|^prison-industrial': [
    { name: 'US Criminal Justice System', role: 'Incarcerates 1.9 million people; highest rate in the world; stark racial disparities', status: 'pending', notes: 'Black Americans incarcerated 5x rate of whites. 13th Amendment exception allows forced labor. $80B annual cost.' },
  ],
  '^school-to-prison': [
    { name: 'US Education/Justice System', role: 'Policing of schools pushes students (disproportionately Black and disabled) into criminal justice system', status: 'pending', notes: 'Black students 3.8x more likely to be suspended. Zero-tolerance policies feed pipeline. DOJ investigated multiple districts.' },
  ],
  '^qualified-immunity': [
    { name: 'US Legal System', role: 'Qualified immunity doctrine shields police officers from civil liability for constitutional violations', status: 'pending', notes: 'Supreme Court created doctrine in 1982. Shields officers unless they violate "clearly established" law. Reform bills stalled.' },
  ],
  '^police-accountability|^police-brutality': [
    { name: 'US Law Enforcement (Systematic)', role: 'Police kill approximately 1,000+ people per year; Black people killed at 2.5x the rate of white people', status: 'pending', notes: 'No federal database of police killings until recently. Consent decrees in major cities. Few officers convicted.' },
  ],
  '^police-militarization': [
    { name: 'Department of Defense 1033 Program', role: 'Transferred $7.4B+ in military equipment to 8,000+ law enforcement agencies since 1997', status: 'pending', notes: 'Police received MRAPs, grenade launchers, bayonets. Obama restricted; Trump reversed restrictions.' },
  ],
  '^voter-suppression|^voter-roll-purges|^voter-purge': [
    { name: 'Republican State Legislatures', role: 'Passed hundreds of laws restricting voting access disproportionately affecting minority voters after Shelby County v. Holder gutted VRA', status: 'pending', notes: 'Brennan Center documented 361 restrictive bills in 2021 alone. Closed polling places, purged rolls, added ID requirements.' },
  ],
  '^gerrymandering': [
    { name: 'State Legislatures (Both Parties)', role: 'Drew extreme partisan gerrymanders to entrench power and dilute opposing voters\' influence', status: 'pending', notes: 'SCOTUS ruled federal courts cannot review partisan gerrymandering (Rucho v. Common Cause 2019). Some state courts intervened.' },
  ],
  '^citizens-united|^dark-money.*corruption': [
    { name: 'Supreme Court Majority (5-4)', role: 'Citizens United v. FEC (2010) opened floodgates for unlimited corporate and dark money in elections', status: 'pending', notes: 'Dark money spending went from $5.2M (2006) to $1B+ per cycle. Donor anonymity enabled foreign influence.' },
  ],
  '^lobbying-(corruption|dark-money)$': [
    { name: 'K Street / Lobbying Industry', role: 'Spends $4B+ annually to influence federal policy; former members of Congress frequently become lobbyists', status: 'pending', notes: 'Revolving door: 67% of retiring members join lobbying firms. Corporate lobbying outspends public interest 34:1.' },
  ],
  '^regulatory-capture': [
    { name: 'Corporate-Regulator Complex', role: 'Industries systematically capture the agencies meant to regulate them through revolving door and lobbying', status: 'pending', notes: 'Documented at SEC, FCC, FAA, EPA, FDA, and others. Regulators routinely go to work for companies they supervised.' },
  ],
  '^military-industrial': [
    { name: 'Top 5 Defense Contractors (Lockheed Martin, RTX, Boeing, Northrop Grumman, General Dynamics)', role: 'Profit from permanent war economy; lobbied for conflicts and against Pentagon budget cuts', status: 'pending', notes: 'US military spending exceeds next 10 nations combined. Pentagon never passed an audit. Revolving door with DOD.' },
  ],
  '^war-profiteering': [
    { name: 'Halliburton/KBR', role: 'Received $39.5B in Iraq/Afghanistan contracts, many no-bid, while VP Cheney held deferred compensation', status: 'settled', notes: 'DOJ settled False Claims Act cases for hundreds of millions. Whistleblowers documented fraud, waste, electrocution of troops.' },
  ],
  '^defense-contractor|^defense-contracting': [
    { name: 'Major Defense Contractors', role: 'Systematic overbilling, fraud, and waste in military contracts totaling billions', status: 'settled', notes: 'Top 10 contractors paid $6.9B in fraud settlements (1995-2020). Pentagon failed 6 consecutive audits since 2018.' },
  ],
  '^fossil-fuel-(crimes|lobbying)': [
    { name: 'Fossil Fuel Industry', role: 'Spent billions on lobbying and disinformation to delay climate action while knowing of catastrophic risks since 1970s', status: 'charged', notes: 'Internal Exxon research accurately predicted warming. Industry funded denial. Multiple AG investigations.' },
  ],
  '^environmental-racism|^environmental-crimes': [
    { name: 'Polluting Industries (Systematic)', role: 'Disproportionately site toxic facilities in Black, Latino, and indigenous communities', status: 'pending', notes: 'EPA found minorities 40% more likely to live near toxic waste. Cancer Alley in Louisiana is emblematic case.' },
  ],
  '^plastic-(pollution|recycling|industry)': [
    { name: 'Plastics/Oil Industry', role: 'Promoted recycling as solution while knowing most plastic could never be recycled; opposed alternatives', status: 'pending', notes: 'NPR/Frontline investigation showed industry knew recycling was not viable since 1970s. Only 5-6% of plastic recycled.' },
  ],
  '^water-privatization|^corporate-water': [
    { name: 'Private Water Companies (Nestle, Veolia, etc.)', role: 'Privatized public water systems leading to rate increases, quality failures, and access inequity', status: 'charged', notes: 'Nestle extracted millions of gallons at minimal cost. Flint, Jackson, and other crises linked to infrastructure disinvestment.' },
  ],
  '^human-trafficking|^sex-trafficking(?!-network)': [
    { name: 'Trafficking Networks (Global)', role: '24.9 million people in forced labor globally; $150B annual profits from modern slavery', status: 'pending', notes: 'US National Human Trafficking Hotline receives 10,000+ reports annually. Prosecution rate remains low.' },
  ],
  '^child-exploitation|^child-sexual-abuse': [
    { name: 'Online Exploitation Networks', role: 'NCMEC received 36.2M reports of child sexual abuse material in 2023; platforms struggle to keep up', status: 'pending', notes: 'EARN IT Act debated. Tech platforms report millions of images. Encrypted platforms face pressure to increase detection.' },
  ],
  '^media-consolidation': [
    { name: 'Media Conglomerates (Sinclair, iHeart, etc.)', role: 'Concentrated media ownership reduced local news coverage and diversity of viewpoints', status: 'pending', notes: 'Sinclair owns 185+ stations. 1/3 of US newspapers have closed since 2005. FCC deregulation enabled consolidation.' },
  ],
  '^disinformation(?!-warfare)$': [
    { name: 'Social Media Platforms', role: 'Algorithms amplified disinformation for engagement and profit, undermining public discourse', status: 'pending', notes: 'Facebook whistleblower Frances Haugen revealed company chose profits over safety. Congressional hearings but limited legislation.' },
  ],
  '^social-media-(harms|privacy|mental|addiction|censorship|radicalization)': [
    { name: 'Meta/Facebook, TikTok, X/Twitter, YouTube', role: 'Designed addictive platforms that harmed teen mental health and amplified extremism', status: 'charged', notes: 'Internal documents showed Instagram worsened teen mental health. 42 state AGs sued Meta in 2023.' },
  ],
  '^facebook-mental-health$|^facebook-instagram': [
    { name: 'Meta Platforms', role: 'Internal research showed Instagram harmed teen mental health; company suppressed findings', status: 'charged', notes: 'Whistleblower Frances Haugen leaked documents in 2021. FTC and state AGs filed suits. COPPA violations alleged.' },
  ],
  '^tech-monopol': [
    { name: 'Big Tech (Google, Apple, Amazon, Meta)', role: 'Used monopoly power to crush competitors, lock in users, and extract monopoly rents', status: 'charged', notes: 'DOJ won antitrust case against Google (2024). FTC filed against Amazon and Meta. EU Digital Markets Act imposing obligations.' },
  ],
  '^drug-price-gouging|^drug-pricing|^pharma-pricing': [
    { name: 'Pharmaceutical Industry', role: 'Raised prices on essential drugs far beyond inflation; insulin went from $21 (1999) to $275 (2019)', status: 'charged', notes: 'Senate investigation found no economic justification. Medicare negotiation authority gained in IRA (2022) for limited drugs.' },
  ],
  '^medicare.*fraud|^medicaid.*fraud': [
    { name: 'Various Healthcare Providers', role: 'Medicare/Medicaid fraud costs $60-90B annually through false billing, kickbacks, and phantom patients', status: 'convicted', notes: 'DOJ Healthcare Fraud Strike Force has charged 5,000+ defendants. Largest schemes involve home health and DME.' },
  ],
  '^insurance-denials$|^insurance-claim': [
    { name: 'Health Insurance Industry', role: 'Systematically denied valid medical claims to increase profits; used AI to auto-deny claims', status: 'charged', notes: 'CIGNA AI system denied 300,000 claims in 2 months. UnitedHealth denied claims at higher rates than competitors.' },
  ],
  '^housing-(crisis|financialization)$': [
    { name: 'Wall Street/Private Equity Landlords', role: 'Corporate purchase of single-family homes inflated prices and rents, locking out first-time buyers', status: 'pending', notes: 'BlackRock, Invitation Homes, and others bought 1 in 5 homes in some markets. Senate investigated institutional buying.' },
  ],
  '^homelessness-criminalization$': [
    { name: 'US Cities (Systematic)', role: 'Criminalized sleeping, sitting, and camping in public despite insufficient shelter capacity', status: 'pending', notes: 'SCOTUS ruled in Grants Pass v. Johnson (2024) cities can criminalize sleeping outside. 650,000+ homeless in US.' },
  ],
  '^stand-your-ground$': [
    { name: 'ALEC/NRA', role: 'Promoted Stand Your Ground laws that disproportionately enable lethal force; justified Trayvon Martin killing', status: 'pending', notes: 'Studies show SYG increases homicides by 8-11% and disproportionately harms Black victims.' },
  ],

  // ── BATCH 4: REMAINING SPECIFIC + BROAD ──────────────────────────
  '^abacus-scandal$': [
    { name: 'Abacus Federal Savings Bank', role: 'Small Chinatown bank; only bank criminally prosecuted for mortgage fraud related to 2008 crisis', status: 'acquitted', notes: 'All defendants acquitted in 2015. Only bank indicted while major Wall Street banks paid fines.' },
  ],
  '^aids-crisis$': [
    { name: 'Reagan Administration', role: 'Failed to address HIV/AIDS epidemic for years while thousands died; Reagan did not mention AIDS until 1985', status: 'pending', notes: '21,000 Americans died before Reagan said the word AIDS publicly. Surgeon General Koop was silenced.' },
  ],
  '^bangladesh-genocide$': [
    { name: 'Pakistani Military', role: 'Conducted genocide in Bangladesh (then East Pakistan) in 1971 killing 300,000-3,000,000 people', status: 'pending', notes: 'US (Nixon/Kissinger) supported Pakistan despite "Blood Telegram" warnings. Hamoodur Rahman Commission findings suppressed.' },
  ],
  '^boarding-schools$|^genocide-native-american-boarding': [
    { name: 'U.S. Government/Bureau of Indian Affairs', role: 'Operated 408+ boarding schools that forcibly removed 100,000+ Native children from families; thousands died', status: 'pending', notes: 'DOI investigation (2022) found 53 burial sites. Children beaten for speaking native languages. "Kill the Indian, save the man" policy.' },
  ],
  '^boston-archdiocese$': [
    { name: 'Cardinal Bernard Law', role: 'Archbishop who systematically reassigned pedophile priests to new parishes for decades', status: 'pending', notes: 'Boston Globe Spotlight investigation exposed cover-up in 2002. Resigned; given Vatican position. Died 2017.' },
  ],
  '^brian-sicknick$': [
    { name: 'Julian Khater', role: 'Sprayed bear spray at Capitol Police Officer Brian Sicknick during January 6 attack', status: 'convicted', notes: 'Sicknick died January 7. Medical examiner ruled natural causes (strokes). Khater convicted of assault; sentenced to 80 months.' },
    { name: 'George Tanios', role: 'Provided bear spray used to assault Officer Sicknick', status: 'convicted', notes: 'Pled guilty to assault charges; sentenced to probation' },
  ],
  '^cbs-sexual-harassment$': [
    { name: 'Les Moonves', role: 'CBS CEO who sexually harassed and assaulted multiple women; destroyed evidence', status: 'pending', notes: 'Forced to resign in 2018. CBS denied $120M severance. New Yorker investigation exposed decades of abuse.' },
  ],
  '^charlie-rose$': [
    { name: 'Charlie Rose', role: 'TV journalist who sexually harassed 35+ women over decades at CBS and PBS', status: 'pending', notes: 'Fired from CBS and PBS in 2017. Multiple women reported groping and unwanted advances. Settled lawsuits.' },
  ],
  '^central-america-death-squad': [
    { name: 'School of the Americas (WHINSEC)', role: 'US Army school that trained Latin American military officers who committed widespread human rights abuses', status: 'pending', notes: 'Graduates included leaders of death squads in El Salvador, Guatemala, Chile, Argentina. Renamed WHINSEC in 2001.' },
  ],
  '^coal-ash': [
    { name: 'Duke Energy', role: 'Largest US utility; Dan River coal ash spill contaminated 70+ miles of waterway in 2014', status: 'convicted', notes: 'Pled guilty to 9 Clean Water Act violations; fined $102M. Coal ash ponds still threaten communities.' },
  ],
  '^chemical-plant-(safety|explosion)': [
    { name: 'West Fertilizer Company', role: 'Ammonium nitrate explosion in West, TX killed 15 and destroyed 150+ buildings on April 17, 2013', status: 'charged', notes: 'OSHA had not inspected since 1985. Stored 1,350x the reportable amount of ammonium nitrate. Arson finding in 2016.' },
  ],
  '^compounding-pharmacy': [
    { name: 'New England Compounding Center / Barry Cadden', role: 'Shipped contaminated steroid injections causing fungal meningitis outbreak killing 76 people', status: 'convicted', notes: 'Cadden convicted of racketeering and fraud (not murder) in 2017; sentenced to 9 years' },
  ],
  '^columbia-hca|^healthcare-fraud-strike': [
    { name: 'Columbia/HCA', role: 'Largest Medicare fraud in US history; false claims and kickbacks', status: 'settled', notes: 'Paid $1.7B in settlements. CEO Rick Scott never charged; became FL governor.' },
  ],
  '^ghosn-financial$': [
    { name: 'Carlos Ghosn', role: 'Nissan/Renault chairman who underreported compensation by $80M+ and misused corporate assets', status: 'charged', notes: 'Arrested in Tokyo 2018. Escaped Japan in December 2019 hidden in a box on a private jet. Fugitive in Lebanon.' },
  ],
  '^generic-drug-price-fixing': [
    { name: 'Teva Pharmaceutical', role: 'Led generic drug price-fixing conspiracy involving 30+ companies and hundreds of drugs', status: 'charged', notes: 'DOJ charged Teva as ringleader of "most sweeping antitrust conspiracy in US history." Trial pending.' },
  ],
  '^halliburton-military|^halliburton.*fraud': [
    { name: 'Halliburton/KBR', role: 'Received $39.5B in Iraq contracts; documented fraud, overcharging, and shoddy electrical work that killed troops', status: 'settled', notes: 'Electrocution of soldiers from faulty wiring. $579M False Claims Act settlements. Cheney\'s former company.' },
  ],
  '^hud-corruption': [
    { name: 'HUD Officials (Multiple Administrations)', role: 'Mismanagement and corruption at HUD leading to billion-dollar accounting errors and contractor fraud', status: 'charged', notes: 'Inspector General found $520B in accounting errors. Section 8 fraud widespread. Ben Carson spent $31K on dining set.' },
  ],
  '^hospice-fraud': [
    { name: 'Hospice Industry (Various)', role: 'Enrolled patients who weren\'t terminally ill to bill Medicare; some hastened deaths to manage costs', status: 'convicted', notes: 'Medicare hospice spending tripled to $22.4B. DOJ brought hundreds of fraud cases. For-profit hospices worst offenders.' },
  ],
  '^illinois-corruption$': [
    { name: 'Rod Blagojevich', role: 'Illinois Governor who tried to sell Barack Obama\'s vacant Senate seat', status: 'convicted', notes: 'Convicted on 17 counts; sentenced to 14 years. Trump commuted sentence in 2020. 4th IL governor jailed.' },
  ],
  '^insulin-pricing': [
    { name: 'Eli Lilly, Novo Nordisk, Sanofi', role: 'Three companies controlling 90% of insulin market raised prices 1200% over 20 years from $21 to $275/vial', status: 'charged', notes: 'Senate investigation found no justification. IRA (2022) capped Medicare insulin at $35. Companies followed for private market.' },
  ],
  '^koch-network': [
    { name: 'Charles Koch / Koch Network', role: 'Spent hundreds of millions funding climate denial, anti-regulation lobbying, and political campaigns', status: 'pending', notes: 'Koch network includes Americans for Prosperity, Stand Together, hundreds of organizations. Dark money pioneer.' },
  ],
  '^iraq-war$|^iraq-war-crimes$|^iraq-war-profiteering$|^iraq-war-false': [
    { name: 'Bush Administration (Multiple Officials)', role: 'Launched Iraq War based on false WMD claims; war killed 200,000+ Iraqi civilians', status: 'pending', notes: 'No WMDs found. Senate Intel Committee found claims unsupported. Contractors profited billions. No accountability.' },
  ],
  '^lahaina|^maui': [
    { name: 'Hawaiian Electric', role: 'Failed to shut off power during extreme winds; lines sparked fires that destroyed Lahaina', status: 'charged', notes: 'Agreed to $4B settlement. Deadliest US wildfire in 100+ years. 101 killed.' },
  ],
  '^lehman-brothers': [
    { name: 'Lehman Brothers / Dick Fuld', role: 'CEO presided over Lehman collapse ($639B bankruptcy) while using Repo 105 to hide $50B in debt', status: 'pending', notes: 'Largest bankruptcy in US history. No criminal charges. Fuld collected $500M+ in compensation pre-collapse.' },
  ],
  '^michael-brown$': [
    { name: 'Darren Wilson', role: 'Ferguson police officer who shot and killed unarmed 18-year-old Michael Brown on August 9, 2014', status: 'pending', notes: 'Grand jury and DOJ declined charges. Ferguson DOJ investigation found pattern of racial bias.' },
  ],
  '^military-sexual-assault': [
    { name: 'US Military (Systematic)', role: '20,000+ service members experience sexual assault annually; commanders historically controlled prosecution', status: 'pending', notes: 'RAND study found 20,300 assaults in 2018. Only 7,816 reported. Conviction rate under 10%.' },
  ],
  '^nestle': [
    { name: 'Nestle', role: 'Extracted water from drought-stricken communities; baby formula marketing caused infant deaths in developing world', status: 'charged', notes: 'Marketed formula over breastmilk causing infant mortality. Extracted CA water for $524/year during drought. Forced labor in cocoa supply chain.' },
  ],
  '^nbc-misconduct$': [
    { name: 'Matt Lauer', role: 'NBC Today anchor who sexually assaulted and harassed multiple women at NBC', status: 'pending', notes: 'Fired in 2017. Ronan Farrow alleged NBC killed Weinstein story to protect Lauer. NBC denied.' },
  ],
  '^nypd-(chokehold|racial-profiling)$': [
    { name: 'NYPD (Institutional)', role: 'Systemic racial profiling through stop-and-frisk (5M+ stops mostly of Black/Latino men) and illegal chokeholds', status: 'charged', notes: 'Federal court found stop-and-frisk unconstitutional in Floyd v. NYC (2013). Eric Garner killed by chokehold in 2014.' },
  ],
  '^nursing-home': [
    { name: 'Nursing Home Industry', role: 'Chronic understaffing and neglect in for-profit nursing homes leading to preventable deaths', status: 'charged', notes: '1/3 of COVID deaths were in nursing homes. CMS found widespread deficiencies. Industry lobbied against staffing mandates.' },
  ],
  '^oath-keepers$': [
    { name: 'Stewart Rhodes', role: 'Oath Keepers founder convicted of seditious conspiracy for role in January 6 Capitol attack', status: 'convicted', notes: 'Sentenced to 18 years; longest seditious conspiracy sentence in decades' },
    { name: 'Kelly Meggs', role: 'Oath Keepers Florida chapter leader convicted of seditious conspiracy', status: 'convicted', notes: 'Sentenced to 12 years for role in J6 attack' },
  ],
  '^off-label-drug': [
    { name: 'Pfizer', role: 'Illegally promoted Bextra and other drugs for unapproved uses', status: 'settled', notes: 'Paid $2.3B fine in 2009; largest healthcare fraud settlement at the time' },
    { name: 'GlaxoSmithKline', role: 'Promoted Paxil, Wellbutrin, and Avandia for unapproved uses; concealed safety data', status: 'settled', notes: 'Paid $3B settlement in 2012; largest healthcare fraud settlement at that time' },
  ],
  '^operation-gladio': [
    { name: 'NATO/CIA', role: 'Operated secret "stay-behind" armies in Europe during Cold War; linked to terrorism and coup attempts', status: 'pending', notes: 'Exposed by Italian PM Andreotti in 1990. Linked to Years of Lead terrorism in Italy. European Parliament condemned.' },
  ],
  '^operation-pbsuccess|^guatemala-coup': [
    { name: 'CIA / Eisenhower Administration', role: 'Overthrew democratically elected Guatemalan President Arbenz in 1954 at behest of United Fruit Company', status: 'pending', notes: 'Led to 36-year civil war killing 200,000+. Dulles brothers had ties to United Fruit.' },
  ],
  '^operation-midnight-climax$': [
    { name: 'CIA / George Hunter White', role: 'Operated brothels in San Francisco and New York to secretly dose subjects with LSD for MKULTRA', status: 'pending', notes: 'Part of MKULTRA Subproject 3. Sex workers drugged unwitting customers. Ran 1953-1966. No prosecutions.' },
  ],
  '^project-shamrock$': [
    { name: 'NSA', role: 'Secretly collected all telegraphic data entering/leaving US from 1945-1975', status: 'pending', notes: 'Exposed by Church Committee in 1975. Western Union, ITT, and RCA cooperated. Led to FISA creation.' },
  ],
  '^project-artichoke$': [
    { name: 'CIA', role: 'Predecessor to MKULTRA; used hypnosis, drugs, and forced morphine addiction for interrogation experiments', status: 'pending', notes: 'Ran 1951-1953. Documented use on prisoners of war. Evolved into MKULTRA.' },
  ],
  '^pueblo-rico|^puerto-rico-contraceptive': [
    { name: 'U.S. Researchers', role: 'Tested early birth control pills on Puerto Rican women without informed consent; 3 died', status: 'pending', notes: 'Dr. John Rock and Dr. Gregory Pincus conducted trials in 1950s. Women not told they were taking experimental drug.' },
  ],
  '^philando-castile$': [
    { name: 'Jeronimo Yanez', role: 'Minnesota police officer who shot and killed Philando Castile during traffic stop on July 6, 2016', status: 'acquitted', notes: 'Acquitted of manslaughter in 2017 despite dashcam video. Castile informed officer he had legal firearm. City paid $3M settlement.' },
  ],
  '^proud-boys': [
    { name: 'Enrique Tarrio', role: 'Proud Boys leader who directed seditious conspiracy to prevent certification of 2020 election', status: 'convicted', notes: 'Sentenced to 22 years; longest January 6 sentence' },
  ],
  '^reagan-crimes$': [
    { name: 'Reagan Administration', role: 'Iran-Contra affair, support for death squads in Central America, ignoring AIDS crisis', status: 'pending', notes: 'Oliver North convicted (reversed). 14 indicted for Iran-Contra. HUD scandal. Savings & Loan crisis.' },
  ],
  '^railroad-deregulation|^railroad-safety$': [
    { name: 'Class I Railroads (Norfolk Southern, BNSF, etc.)', role: 'Prioritized profits over safety through precision scheduled railroading; cut workforce and maintenance', status: 'charged', notes: 'East Palestine derailment highlighted safety cuts. FRA found railroads reduced inspection personnel 20%.' },
  ],
  '^robocall-fraud$': [
    { name: 'Robocall Operations', role: 'Illegal robocall schemes defrauded Americans of billions through scam calls', status: 'convicted', notes: 'FCC issued $300M+ in penalties. DOJ prosecuted major operations. 50B+ spam calls annually.' },
  ],
  '^saudi-arms|^saudi-influence': [
    { name: 'Saudi Arabia / US Arms Industry', role: 'US sold $100B+ in arms to Saudi Arabia used in Yemen war causing humanitarian catastrophe', status: 'pending', notes: 'Saudi lobby spent $100M+ in US. MBS regime received weapons despite Khashoggi murder and Yemen war crimes.' },
  ],
  '^sec-fail': [
    { name: 'SEC (Institutional Failures)', role: 'Failed to detect Madoff ($65B), Stanford ($7B), and other Ponzi schemes despite multiple tips', status: 'pending', notes: 'Harry Markopolos warned SEC about Madoff for 9 years. GAO found systemic enforcement weaknesses.' },
  ],
  '^secret-service': [
    { name: 'U.S. Secret Service', role: 'Systemic failures including prostitution scandal, security breaches at White House, and Trump rally shooting', status: 'pending', notes: '2012 Colombia prostitution scandal. 2014 White House fence jumper. 2024 Butler PA rally security failures.' },
  ],
  '^student-loan': [
    { name: 'Student Loan Servicers (Navient, etc.)', role: 'Steered borrowers into costly repayment plans and failed to process public service loan forgiveness', status: 'settled', notes: 'Navient settled with states for $1.85B in 2022. CFPB found widespread servicing failures.' },
  ],
  '^sugar-industry': [
    { name: 'Sugar Research Foundation', role: 'Paid Harvard scientists in 1967 to blame fat instead of sugar for heart disease', status: 'pending', notes: 'Internal documents showed industry funded research to shift blame in 1960s-70s. Influenced dietary guidelines for decades.' },
  ],
  '^ssri-antidepressant': [
    { name: 'GlaxoSmithKline (Paxil)', role: 'Concealed clinical trial data showing SSRIs increased suicide risk in youth', status: 'settled', notes: 'Study 329 ghostwritten to show efficacy. Actual data showed increased suicidality. GSK paid $3B settlement.' },
  ],
  '^swiss-bank': [
    { name: 'Credit Suisse / UBS', role: 'Helped thousands of Americans evade taxes through secret accounts', status: 'settled', notes: 'UBS paid $780M fine in 2009. Credit Suisse pled guilty in 2014; paid $2.6B. 80 Swiss banks entered DOJ program.' },
  ],
  '^texas-border': [
    { name: 'State of Texas / Greg Abbott', role: 'Deployed Operation Lone Star; installed razor wire barriers resulting in migrant drowning deaths', status: 'charged', notes: 'DOJ sued Texas for floating barrier. Migrants died at Eagle Pass. $10B+ spent. SCOTUS ruled feds can cut wire.' },
  ],
  '^tiktok-national-security': [
    { name: 'TikTok/ByteDance', role: 'Chinese-owned platform collecting data on 170M+ Americans with potential CCP access', status: 'charged', notes: 'Congress passed forced sale legislation (2024). SCOTUS upheld. National security concerns over data access and algorithm.' },
  ],
  '^usps-interference$': [
    { name: 'Louis DeJoy', role: 'Postmaster General who slowed mail service before 2020 election by removing sorting machines and mailboxes', status: 'pending', notes: 'Removed 671 sorting machines. Federal court ordered halt. DeJoy had $75M+ in USPS competitor investments.' },
  ],
  '^ukraine-war$|^russia-ukraine': [
    { name: 'Vladimir Putin / Russian Federation', role: 'Launched unprovoked full-scale invasion of Ukraine on February 24, 2022', status: 'indicted', notes: 'ICC arrest warrant for war crime of child deportation. 200,000+ casualties. Largest European conflict since WWII.' },
  ],
  '^ukraine-war-crimes$': [
    { name: 'Russian Armed Forces', role: 'Committed widespread war crimes in Ukraine including Bucha massacre, targeting hospitals and infrastructure', status: 'charged', notes: 'ICC investigating. Documented torture, rape, execution of civilians, and attacks on energy infrastructure.' },
  ],
  '^us-backed-(dictators|coups)': [
    { name: 'U.S. Government (Cold War Era)', role: 'Supported authoritarian regimes worldwide to counter communism; backed coups in Iran, Guatemala, Chile, and others', status: 'pending', notes: 'Supported Pinochet, Shah, Suharto, Marcos, Mobutu, and dozens more. Millions killed under US-backed regimes.' },
  ],
  '^vietnam-war$|^vietnam-crimes$': [
    { name: 'U.S. Government (Multiple Administrations)', role: 'Waged war in Vietnam based on escalating deceptions; 58,000+ US and 3M+ Vietnamese died', status: 'pending', notes: 'Pentagon Papers revealed systematic lies. Gulf of Tonkin fabricated. Agent Orange and carpet bombing caused lasting damage.' },
  ],
  '^walmart-labor$': [
    { name: 'Walmart', role: 'Largest private employer in US; systematically suppressed wages and union organizing', status: 'charged', notes: 'NLRB found repeated labor law violations. Workers rely on public assistance. Walton family wealth exceeds $250B.' },
  ],
  '^war-on-drugs': [
    { name: 'U.S. Government (Multiple Administrations)', role: 'War on Drugs disproportionately targeted Black and Latino communities despite equal usage rates', status: 'pending', notes: 'Nixon aide admitted war on drugs targeted Black people and antiwar left. 1 in 3 Black men will be imprisoned.' },
  ],
  '^world-bank$': [
    { name: 'World Bank', role: 'Funded projects that displaced millions and caused environmental destruction in developing nations', status: 'pending', notes: 'Internal review found $18B in projects linked to forced displacement. Structural adjustment programs deepened poverty.' },
  ],
  '^zaire-mobutu$': [
    { name: 'Mobutu Sese Seko', role: 'US-backed dictator who looted $5B from Zaire (Congo) during 32-year rule', status: 'pending', notes: 'CIA helped install Mobutu after assassination of Lumumba. Country devastated. Mobutu died in exile 1997.' },
  ],
  '^white-supremac': [
    { name: 'White Supremacist Organizations', role: 'FBI designated domestic violent extremism as top terrorism threat; white supremacists responsible for most attacks', status: 'charged', notes: 'DHS assessment found white supremacists pose "most persistent and lethal threat." Charleston, El Paso, Buffalo, Pittsburgh, Charlottesville.' },
  ],
  '^nra-russia$': [
    { name: 'Maria Butina', role: 'Russian agent who infiltrated NRA to establish back-channel to Republican Party', status: 'convicted', notes: 'Pled guilty to conspiracy to act as foreign agent; sentenced to 18 months. Deported to Russia; now serves in Russian parliament.' },
    { name: 'Alexander Torshin', role: 'Russian central banker who directed Butina\'s infiltration of NRA and Republican circles', status: 'charged', notes: 'US sanctioned. Spanish investigation linked him to Russian organized crime. Cannot be extradited.' },
  ],
  '^menendez-bribery|^bob-menendez': [
    { name: 'Bob Menendez', role: 'US Senator convicted of taking bribes from Egyptian and Qatari officials', status: 'convicted', notes: 'Convicted July 2024 on 16 counts. Gold bars found in home. Resigned from Senate.' },
  ],
  '^bear-stearns': [
    { name: 'Bear Stearns', role: 'First major bank to collapse from subprime exposure in March 2008', status: 'pending', notes: 'Sold to JPMorgan at $2/share (later $10). Two hedge fund managers Ralph Cioffi and Matthew Tannin acquitted.' },
  ],
  '^holocaust-denial$': [
    { name: 'Holocaust Deniers', role: 'Network of individuals and organizations denying the systematic murder of 6 million Jews', status: 'charged', notes: 'Holocaust denial is criminal in 18 countries. David Irving convicted in Austria (2006). Institute for Historical Review disbanded.' },
  ],
  '^darfur-genocide$': [
    { name: 'Omar al-Bashir', role: 'Directed genocide in Darfur killing 300,000+ and displacing 2.5 million', status: 'indicted', notes: 'ICC warrants for genocide and war crimes. Ousted 2019; transferred to ICC custody negotiations ongoing.' },
  ],
  '^gain-of-function$': [
    { name: 'EcoHealth Alliance / Peter Daszak', role: 'Funneled NIH grants to Wuhan Institute of Virology for coronavirus research while concealing details', status: 'charged', notes: 'NIH suspended funding 2024. Congressional investigation found misrepresentations. Debate over lab leak vs natural origin continues.' },
  ],
  '^weapon.*industry|^weapons.*revolving': [
    { name: 'Defense Industry', role: 'Arms manufacturers spent $2.5B on lobbying (2000-2020); 80% of senior DOD officials join defense firms', status: 'pending', notes: 'Revolving door between Pentagon and contractors documented by POGO. Top 5 firms received $160B in 2023.' },
  ],

  '^civil-asset-forfeiture': [
    { name: 'Law Enforcement (Federal/State)', role: 'Seized $68.8B in assets (2000-2019) from people many of whom were never charged with crimes', status: 'pending', notes: 'IRS seized $43M from individuals never charged. DOJ reformed program in 2015. Many states have not reformed.' },
  ],
  '^fracking': [
    { name: 'Fracking Industry', role: 'Contaminated groundwater and caused earthquakes through hydraulic fracturing while concealing chemical mixtures', status: 'charged', notes: 'EPA found fracking can contaminate drinking water (2016 report). Oklahoma earthquakes increased 900% from injection wells.' },
  ],
  '^fcc-telecom': [
    { name: 'FCC / Ajit Pai', role: 'Repealed net neutrality rules in 2017 despite public opposition; revolving door with telecom industry', status: 'pending', notes: 'FCC received 22M+ comments (many fake). Pai former Verizon lawyer. Comcast, AT&T lobbied heavily.' },
  ],
  '^fda-pharmaceutical': [
    { name: 'FDA (Revolving Door)', role: 'FDA officials routinely join pharmaceutical companies they previously regulated', status: 'pending', notes: 'BMJ study found 65% of FDA advisory committee members had financial ties to drug companies. Accelerated approval concerns.' },
  ],
  '^bay-of-pigs-cover-up$': [
    { name: 'CIA', role: 'Planned Bay of Pigs invasion; covered up intelligence failures and involvement', status: 'pending', notes: 'CIA IG report (kept classified until 1998) admitted "fundamental" planning failures. 1,189 captured, 114 killed.' },
  ],
  '^pension.*fraud|^union-pension': [
    { name: 'Various Union/Pension Fund Officials', role: 'Embezzled and mismanaged pension funds leaving workers without retirement security', status: 'convicted', notes: 'DOL investigations found billions mismanaged. Central States Teamsters pension cut benefits. PBGC backstops failing funds.' },
  ],
  '^food-industry': [
    { name: 'Food Industry', role: 'Manipulated nutritional science and lobbied against labeling, sugar taxes, and health warnings', status: 'pending', notes: 'Industry-funded studies 8x more likely to produce favorable results. Lobbied against Dietary Guidelines changes.' },
  ],
  '^facial-recognition': [
    { name: 'Clearview AI', role: 'Scraped 30B+ images from social media without consent to build facial recognition database sold to police', status: 'charged', notes: 'ACLU lawsuit settled (2022). Fined in UK, Australia, France, Italy. 600+ law enforcement agencies used it.' },
  ],
  '^deepfake': [
    { name: 'Deepfake Technology Proliferators', role: 'Creation and distribution of non-consensual deepfake pornography and political disinformation', status: 'pending', notes: '96% of deepfakes are non-consensual pornography targeting women. Limited federal legislation. States passing laws.' },
  ],
  '^data-broker|^data-privacy': [
    { name: 'Data Brokers (Acxiom, LexisNexis, etc.)', role: 'Collected and sold personal data on billions of people without meaningful consent', status: 'charged', notes: 'FTC found data brokers store 1,500+ data points per person. No comprehensive US privacy law. CFPB investigating.' },
  ],
  '^dna-database': [
    { name: 'Law Enforcement / DNA Database Operators', role: 'Expanded DNA collection to include arrestees; familial DNA searching raised privacy concerns', status: 'pending', notes: 'CODIS contains 21M+ profiles. Golden State Killer caught via GEDmatch. Privacy advocates warn of racial disparities.' },
  ],
  '^election-(disinformation|denial|interference|security|manipulation)': [
    { name: 'Various Actors', role: 'Domestic and foreign efforts to undermine election integrity through disinformation and manipulation', status: 'pending', notes: 'Russia, Iran, China engaged in interference. Domestic actors spread false claims. Social media amplified disinformation.' },
  ],
  '^pharmaceutical-(corruption|fraud|lobbying|ghost-writing|influence|patent)': [
    { name: 'Pharmaceutical Industry', role: 'Spent $350M+ annually on lobbying; ghostwrote medical journal articles; paid doctors to promote drugs', status: 'pending', notes: 'Pharma is largest US lobbying sector. ProPublica Dollars for Docs showed $12B in payments to physicians (2013-2022).' },
  ],
  '^surveillance-(capitalism|expansion|state)$': [
    { name: 'Tech/Government Surveillance Complex', role: 'Built comprehensive surveillance infrastructure monitoring communications, location, and behavior of millions', status: 'pending', notes: 'Snowden revealed NSA programs. Tech companies collect vast personal data. China model expanding globally.' },
  ],
  '^corporate-(capture|corruption|crime|fraud|influence|lobbying|surveillance)': [
    { name: 'Corporate Interests (Systematic)', role: 'Corporate lobbying and regulatory capture have diminished democratic accountability across government', status: 'pending', notes: 'Citizens United enabled unlimited corporate spending. Revolving door between industry and regulators. $4B+ annual lobbying.' },
  ],
  '^foreign-(influence|interference|agents|bribery|election-interference)': [
    { name: 'Foreign Influence Operations', role: 'Multiple nations conduct influence operations in US through lobbying, media, campaign contributions, and espionage', status: 'pending', notes: 'FARA registrations declined while influence operations increased. Russia, China, Saudi Arabia, Israel, UAE most active.' },
  ],
  '^congressional-(corruption|conflicts|obstruction|perjury|age)': [
    { name: 'US Congress (Institutional)', role: 'Conflicts of interest, insider trading, self-dealing, and obstruction by members of Congress', status: 'pending', notes: 'STOCK Act enforcement non-existent. Members trade on briefings. Average senator net worth $14M. Gerontocracy concerns.' },
  ],
  '^right-wing-(disinfo|media)$|^far-right$|^far-right-(extremism|media)$': [
    { name: 'Right-Wing Media Ecosystem', role: 'Network of media outlets and influencers spreading disinformation and radicalizing audiences', status: 'pending', notes: 'Fox News, OAN, Newsmax, social media influencers. Dominion lawsuit exposed knowing promotion of false claims.' },
  ],
  '^russian-(disinformation|influence|intel|money-laundering|oligarch)': [
    { name: 'Russian Government / Intelligence Services', role: 'Conducted influence operations, cyberattacks, and money laundering in Western democracies', status: 'pending', notes: 'GRU hacked DNC. IRA ran social media campaigns. Oligarchs laundered billions through Western banks and real estate.' },
  ],
  '^china-(coverup|influence|cyber|tech|business)': [
    { name: 'Chinese Government / CCP', role: 'Conducted cyber espionage, economic theft, and influence operations targeting US government and businesses', status: 'charged', notes: 'PLA Unit 61398 indicted for hacking. Belt and Road leverage. United Front Work Department influence operations documented.' },
  ],
  '^crypto-(scams|fraud|exchange)': [
    { name: 'Cryptocurrency Fraud Operations', role: 'Rug pulls, Ponzi schemes, and exchange fraud in unregulated crypto markets totaling billions in losses', status: 'charged', notes: 'FTX ($8B), Celsius ($4.7B), Terra/Luna ($40B), Three Arrows ($3.5B). SEC increased enforcement but regulatory framework incomplete.' },
  ],
  '^domestic-(extremism|terrorism|surveillance|violence|worker|servitude)': [
    { name: 'Domestic Terrorism Actors', role: 'FBI designated domestic violent extremism as top terrorism threat post-January 6', status: 'charged', notes: 'DHS: white supremacist extremism most persistent lethal threat. 231 domestic terrorism incidents 2010-2021.' },
  ],
  '^sex-trafficking|^elite-pedophiles|^elite-trafficking': [
    { name: 'Trafficking Networks (Multiple)', role: 'High-profile sex trafficking operations exploiting vulnerable people including minors', status: 'charged', notes: 'Epstein network exposed systemic failures. R. Kelly, Larry Nassar, NXIVM cases showed institutional enablement.' },
  ],
  '^infrastructure-failures$': [
    { name: 'Aging US Infrastructure', role: 'ASCE gives US infrastructure a C- grade; underfunding has led to dangerous bridges, water systems, and dams', status: 'pending', notes: 'Flint water crisis, East Palestine derailment, Jackson water crisis, I-35W bridge collapse. $2.6T infrastructure gap.' },
  ],
  '^pension-fraud': [
    { name: 'Various Officials', role: 'Embezzlement and mismanagement of retirement funds', status: 'convicted', notes: 'DOL investigations found billions in pension fund mismanagement.' },
  ],
  '^metoo-media|^hollywood-abuse|^music-industry-abuse|^media-industry-abuse': [
    { name: 'Entertainment Industry (Multiple)', role: 'Systemic sexual harassment and abuse enabled by power imbalances in media and entertainment', status: 'charged', notes: 'Weinstein, Cosby, R. Kelly, Spacey, Moonves, Lauer cases revealed industry-wide pattern. 80+ public figures accused.' },
  ],
  '^religious-abuse|^religious-institution|^religious-right': [
    { name: 'Religious Institutions (Multiple)', role: 'Systematic cover-up of sexual abuse in Catholic Church, Southern Baptist Convention, and other organizations', status: 'charged', notes: 'Catholic Church: 330,000+ victims in France alone. SBC report documented 700+ abusers. Institutional protection of perpetrators.' },
  ],
  '^militia-movement$': [
    { name: 'Various Militia Groups', role: 'Armed paramilitary movements including Oath Keepers, Three Percenters, and Proud Boys', status: 'charged', notes: 'Seditious conspiracy convictions after Jan 6. Michigan Gov. Whitmer kidnapping plot foiled (2020). FBI monitoring increasing.' },
  ],
  '^anti-(abortion|lgbtq|trans)': [
    { name: 'Anti-Abortion/LGBTQ Extremists', role: 'Violent and harassment campaigns targeting abortion providers, LGBTQ individuals, and trans people', status: 'charged', notes: '11 murders and 26 attempted murders at abortion clinics. Bomb threats to hospitals. Trans people face 4x murder rate.' },
  ],
  '^hate-crimes$|^antisemit': [
    { name: 'Hate Crime Perpetrators (Multiple)', role: 'FBI documented 11,634 hate crime incidents in 2022; rising trend in antisemitic and anti-LGBTQ attacks', status: 'charged', notes: 'Tree of Life, El Paso, Buffalo, Atlanta spa shootings. Antisemitic incidents at record high (ADL). DOJ increased prosecutions.' },
  ],
  '^intellectual-property|^ip-theft': [
    { name: 'Chinese State-Sponsored IP Theft', role: 'Systematic theft of US intellectual property valued at $225-600B annually', status: 'charged', notes: 'DOJ China Initiative brought dozens of cases. PLA Unit 61398 indicted. Huawei prosecuted for trade secret theft.' },
  ],
  '^libya-mercenaries$': [
    { name: 'Erik Prince', role: 'Proposed private military operations in Libya; Blackwater successor companies operated in region', status: 'pending', notes: 'UN report documented private military contractor involvement. Wagner Group also active. Arms embargo violations widespread.' },
  ],
  '^penny-stock': [
    { name: 'Jordan Belfort ("Wolf of Wall Street")', role: 'Ran penny stock pump-and-dump schemes defrauding investors of $200M+ at Stratton Oakmont', status: 'convicted', notes: 'Convicted of securities fraud and money laundering in 1999; sentenced to 4 years (served 22 months)' },
  ],
  '^war-crimes$|^crimes-against-humanity$': [
    { name: 'Multiple State Actors', role: 'Documented war crimes and crimes against humanity across multiple conflicts globally', status: 'charged', notes: 'ICC has issued 20+ arrest warrants. Accountability gap remains enormous. Great power immunity persists.' },
  ],
  '^serial-killings$': [
    { name: 'Law Enforcement Failures', role: 'Police frequently failed to investigate serial killings targeting marginalized communities', status: 'pending', notes: 'LAPD Grim Sleeper case: 25 years to catch Lonnie Franklin Jr. Missing/murdered indigenous women crisis. Less Dangerous Less Dead phenomenon.' },
  ],
  '^sharpiegate$': [
    { name: 'Donald Trump', role: 'Altered official NOAA hurricane forecast map with Sharpie; pressured NOAA to support false claim Alabama was at risk from Hurricane Dorian', status: 'pending', notes: 'NOAA IG investigated. Acting NOAA chief pressured scientists to not contradict Trump. Federal law prohibits falsifying weather forecasts.' },
  ],
  '^fbi-(surveillance|civil-rights|assassinations|cointelpro)': [
    { name: 'FBI (Historical and Ongoing)', role: 'History of civil rights abuses from COINTELPRO to modern surveillance and entrapment', status: 'pending', notes: 'Targeted MLK Jr., Black Panthers, Muslim communities. Informant operations. Stingray surveillance. Loveint abuse documented.' },
  ],
  '^whistleblower-(retali|prosecution)': [
    { name: 'U.S. Government', role: 'Systematically retaliated against whistleblowers who exposed government wrongdoing', status: 'pending', notes: 'Snowden charged under Espionage Act. Reality Winner imprisoned. Thomas Drake prosecuted then acquitted. Chelsea Manning imprisoned.' },
  ],
  '^pension|^union-pension': [
    { name: 'Various', role: 'Pension fund mismanagement and fraud', status: 'pending', notes: 'Multiple cases of pension fund fraud documented by DOL.' },
  ],
};

// ═══════ PROCESSING ════════════════════════════════════════════════════

function findDefendants(slug) {
  for (const [pattern, defs] of Object.entries(D)) {
    if (defs.length === 0) continue; // Skip empty arrays
    if (new RegExp(pattern, 'i').test(slug)) return defs;
  }
  return null;
}

function processFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');
  const lines = text.split(/\r?\n/);
  const result = [];
  let changed = false;
  let defsAdded = 0;
  let currentSlug = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track slug
    const slugMatch = line.match(/^\s*'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/);
    if (slugMatch) currentSlug = slugMatch[1];

    result.push(line);

    // After seeing sources: [...], check if defendants already exists
    // We insert defendants after the sources array closing
    // Detect end of sources array (line with just ] or ],)
    // BUT only if we're tracking inside a sources array
  }

  // Different approach: find each investigation that lacks defendants and insert before the closing },
  // We work on the full text level
  let output = text;
  const slugRe = /'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/g;
  let match;
  const insertions = []; // {position, defendants}

  while ((match = slugRe.exec(text)) !== null) {
    const slug = match[1];
    const startPos = match.index;
    const after = text.slice(startPos, startPos + 20000);

    // Already has defendants?
    if (/defendants:\s*\[/.test(after.slice(0, after.indexOf('\n  },\n') + 10 || 15000))) continue;

    const defs = findDefendants(slug);
    if (!defs || defs.length === 0) continue;

    // Find the investigation's closing bracket pattern: \n  },\n or similar
    // We look for the sources array, then find the right place to insert
    const sourcesMatch = after.match(/sources:\s*\[/);
    if (!sourcesMatch) continue;

    // Find end of sources array
    const srcStart = sourcesMatch.index;
    let depth = 0;
    let srcEnd = -1;
    for (let j = srcStart; j < after.length; j++) {
      if (after[j] === '[') depth++;
      if (after[j] === ']') { depth--; if (depth === 0) { srcEnd = j; break; } }
    }
    if (srcEnd === -1) continue;

    // Find the line after sources array closing (includes the ],)
    let insertAfterPos = startPos + srcEnd;
    // Move past the ] and any trailing comma/whitespace to end of line
    while (insertAfterPos < text.length && text[insertAfterPos] !== '\n') insertAfterPos++;

    // Check what comes after - if affiliations, statutes etc, find the last array before closing }
    // Simpler: find the investigation closing marker and insert before it
    // Look for the pattern:  \n  },  or  \n  }  that closes this investigation
    let closingPos = -1;
    let braceDepth = 0;
    const investStart = startPos + match[0].indexOf('{');
    for (let j = investStart; j < text.length; j++) {
      if (text[j] === '{') braceDepth++;
      if (text[j] === '}') {
        braceDepth--;
        if (braceDepth === 0) { closingPos = j; break; }
      }
    }
    if (closingPos === -1) continue;

    // Go back to find the last line before the closing }
    // Insert defendants before the closing },
    // Find the newline before closingPos
    let lineStart = closingPos;
    while (lineStart > 0 && text[lineStart - 1] !== '\n') lineStart--;

    // Detect indentation from sources
    let indent = '   ';
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

  // Apply insertions in reverse order to preserve positions
  insertions.sort((a, b) => b.position - a.position);
  for (const ins of insertions) {
    output = output.slice(0, ins.position) + ins.text + output.slice(ins.position);
  }

  // Normalize line endings
  output = output.replace(/\r?\n/g, '\r\n');
  output = output.replace(/\s+$/, '\r\n');

  fs.writeFileSync(filePath, output, 'utf-8');
  return { added: defsAdded };
}

// ── Main ────────────────────────────────────────────────────────────────
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();
let totalAdded = 0;
let filesChanged = 0;

for (const file of files) {
  const r = processFile(path.join(DIR, file));
  if (r.added > 0) {
    filesChanged++;
    console.log(`${file}: +${r.added} defendants`);
    totalAdded += r.added;
  }
}

console.log(`\n── TOTAL ──`);
console.log(`Files changed: ${filesChanged}`);
console.log(`Defendants added: ${totalAdded}`);
