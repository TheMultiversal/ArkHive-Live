#!/usr/bin/env node
/**
 * Add 77 missing individual profiles to the individuals [slug]/page.tsx file.
 * All data is hardcoded based on known historical roles and investigation context.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_FILE = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// Investigation title and severity lookup
const investigations = {
  'savings-and-loan-crisis': { title: 'The Savings & Loan Crisis', severity: 'critical' },
  'guatemala-syphilis-experiments': { title: 'Guatemala Syphilis Experiments', severity: 'critical' },
  'enron-scandal': { title: 'Enron Scandal', severity: 'critical' },
  'afghanistan-papers': { title: 'The Afghanistan Papers', severity: 'critical' },
  'no-knock-raids': { title: 'No-Knock Raids', severity: 'critical' },
  'wells-fargo-fraud': { title: 'Wells Fargo Fake Accounts Scandal', severity: 'critical' },
  'predictive-policing': { title: 'Predictive Policing: Algorithms of Oppression', severity: 'critical' },
  'us-support-for-apartheid': { title: 'US Support for Apartheid', severity: 'critical' },
  'ftx-crypto-fraud': { title: 'FTX Crypto Fraud', severity: 'critical' },
  'amazon-labor-abuses': { title: 'Amazon Labor Abuses', severity: 'critical' },
  'police-militarization': { title: 'Police Militarization', severity: 'critical' },
  'civil-asset-forfeiture': { title: 'Civil Asset Forfeiture', severity: 'critical' },
  'japanese-internment': { title: 'Japanese American Internment', severity: 'critical' },
  'iran-coup': { title: '1953 Iran Coup (Operation Ajax)', severity: 'critical' },
  'pentagon-papers': { title: 'The Pentagon Papers', severity: 'critical' },
  'convict-leasing': { title: 'Convict Leasing: Slavery By Another Name', severity: 'critical' },
  'chile-coup': { title: '1973 Chile Coup', severity: 'critical' },
  'federalist-society': { title: 'The Federalist Society', severity: 'critical' },
  'vietnam-war-crimes': { title: 'Vietnam War Crimes', severity: 'critical' },
  'grenada-invasion': { title: 'Grenada Invasion: Operation Urgent Fury', severity: 'high' },
  'haiti-exploitation': { title: 'Haiti: Centuries of Exploitation', severity: 'critical' },
  'cia-drug-trafficking': { title: 'CIA Drug Trafficking', severity: 'critical' },
  'october-surprise-1980': { title: 'The October Surprise (1980)', severity: 'critical' },
  'abu-ghraib': { title: 'Abu Ghraib Torture', severity: 'critical' },
  'war-on-black-america': { title: 'War on Black America', severity: 'critical' },
  'operation-paperclip': { title: 'Operation Paperclip', severity: 'critical' },
  'operation-northwoods': { title: 'Operation Northwoods', severity: 'critical' },
  'mlk-assassination': { title: 'MLK Assassination & FBI COINTELPRO', severity: 'critical' },
  'sinclair-broadcasting': { title: 'Sinclair Broadcasting: Scripted Local News', severity: 'high' },
  'nsa-mass-surveillance': { title: 'NSA Mass Surveillance', severity: 'critical' },
  'drone-assassination-program': { title: 'U.S. Drone Assassination Program', severity: 'critical' },
  'dupont-pfas-poisoning': { title: 'DuPont PFAS Poisoning', severity: 'critical' },
  'ice-detention-abuses': { title: 'ICE Detention Abuses', severity: 'critical' },
  'koch-network': { title: 'The Koch Network', severity: 'critical' },
  'qanon-radicalization': { title: 'QAnon: The Radicalization Pipeline', severity: 'critical' },
  'facial-recognition-surveillance': { title: 'Facial Recognition: The End of Anonymity', severity: 'critical' },
  'libya-intervention': { title: 'Libya Intervention: From Regime Change to Failed State', severity: 'critical' },
  'bush-v-gore': { title: 'Bush v. Gore: The Stolen 2000 Election', severity: 'critical' },
  'rfk-assassination': { title: 'RFK Assassination & Evidence Destruction', severity: 'critical' },
  'gerrymandering': { title: 'Gerrymandering: The Stolen Maps', severity: 'critical' },
  'death-penalty-injustice': { title: 'Death Penalty Injustice', severity: 'critical' },
  'theranos-fraud': { title: 'Theranos Fraud', severity: 'critical' },
  'roe-v-wade-overturn': { title: 'The Overturn of Roe v. Wade', severity: 'critical' },
  'indian-boarding-schools': { title: 'American Indian Boarding Schools', severity: 'critical' },
  'guatemala-coup-1954': { title: '1954 Guatemala Coup (Operation PBSUCCESS)', severity: 'critical' },
  '2008-financial-crisis': { title: '2008 Financial Crisis', severity: 'critical' },
  'rwanda-genocide-inaction': { title: 'Rwanda Genocide: The World Looked Away', severity: 'critical' },
  'cambodia-bombing': { title: 'Cambodia Bombing: Operation Menu', severity: 'critical' },
  'move-bombing': { title: 'MOVE Bombing — Philadelphia 1985', severity: 'critical' },
};

function inv(slug) {
  const i = investigations[slug];
  if (!i) throw new Error('Unknown investigation: ' + slug);
  return `{ title: '${i.title.replace(/'/g, "\\'")}', slug: '${slug}', severity: '${i.severity}' }`;
}

// All 77 missing individuals with hardcoded data
const newIndividuals = [
  {
    slug: 'alan-cranston',
    name: 'Alan Cranston',
    title: 'US Senator (D-CA), member of the Keating Five who pressured regulators on behalf of savings and loan executive Charles Keating',
    role: 'Political Figure',
    riskLevel: 'high',
    description: 'Alan Cranston served as a US Senator from California and was the most severely sanctioned member of the Keating Five. He intervened with federal regulators on behalf of Charles Keating, whose Lincoln Savings and Loan collapse cost taxpayers $3.4 billion.',
    affiliations: [{ name: 'United States Senate', role: 'Senator (D-CA)', type: 'agency' }],
    controversies: ['Keating Five scandal - received $1.3 million in campaign contributions from Charles Keating while pressuring regulators'],
    investigationSlugs: ['savings-and-loan-crisis'],
    timeline: [{ date: '1989', event: 'Named as member of the Keating Five savings and loan scandal' }],
  },
  {
    slug: 'alvaro-colom',
    name: 'Álvaro Colom',
    title: 'President of Guatemala (2008-2012) who formally apologized for the US-backed syphilis experiments conducted on Guatemalan citizens',
    role: 'Political Figure',
    riskLevel: 'medium',
    description: 'Álvaro Colom served as President of Guatemala and in 2010 formally apologized to the victims of the US government syphilis experiments conducted in Guatemala from 1946 to 1948, calling them crimes against humanity.',
    affiliations: [{ name: 'Government of Guatemala', role: 'President (2008-2012)', type: 'agency' }],
    controversies: ['Issued formal apology for Guatemala syphilis experiments conducted by US researchers'],
    investigationSlugs: ['guatemala-syphilis-experiments'],
    timeline: [{ date: '2010', event: 'Formally apologized for US syphilis experiments conducted on Guatemalan citizens' }],
  },
  {
    slug: 'bethany-mclean',
    name: 'Bethany McLean',
    title: 'Fortune magazine journalist who first publicly questioned Enron\'s business model and financial practices',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'Bethany McLean was the Fortune magazine journalist who wrote the seminal March 2001 article "Is Enron Overpriced?" — the first major media piece to question Enron\'s opaque finances, helping trigger the investigation that exposed the massive fraud.',
    affiliations: [{ name: 'Fortune Magazine', role: 'Reporter', type: 'corporation' }],
    controversies: ['Broke the story questioning Enron\'s financials despite industry pressure'],
    investigationSlugs: ['enron-scandal'],
    timeline: [{ date: '2001', event: 'Published "Is Enron Overpriced?" in Fortune magazine, first major media questioning of Enron' }],
  },
  {
    slug: 'bob-crowley',
    name: 'Bob Crowley',
    title: 'US Army Colonel who served in Afghanistan and was quoted in The Afghanistan Papers admitting the war\'s failures',
    role: 'Military Officer',
    riskLevel: 'high',
    description: 'Bob Crowley was a US Army Colonel who served as a senior counterinsurgency advisor in Afghanistan. He was extensively quoted in The Afghanistan Papers, candidly admitting that the US military routinely lied about progress in the war.',
    affiliations: [{ name: 'United States Army', role: 'Colonel, Counterinsurgency Advisor', type: 'agency' }],
    controversies: ['Admitted in Afghanistan Papers interviews that military officials routinely distorted war progress reports'],
    investigationSlugs: ['afghanistan-papers'],
    timeline: [{ date: '2019', event: 'Quoted in The Afghanistan Papers revealing systematic deception about war progress' }],
  },
  {
    slug: 'bounkham-phonesavanh',
    name: 'Bounkham Phonesavanh',
    title: 'Toddler severely injured by a flash-bang grenade during a no-knock police raid in Habersham County, Georgia',
    role: 'Victim',
    riskLevel: 'low',
    description: 'Bounkham "Bou Bou" Phonesavanh was a 19-month-old toddler who was critically injured when a SWAT team threw a flash-bang grenade into his playpen during a no-knock raid in Habersham County, Georgia in 2014. The case became a national symbol of the dangers of militarized policing.',
    affiliations: [],
    controversies: ['Severely burned and injured by flash-bang grenade during no-knock raid - became symbol of police militarization dangers'],
    investigationSlugs: ['no-knock-raids'],
    timeline: [{ date: '2014', event: 'Severely injured by flash-bang grenade during a no-knock SWAT raid in Georgia' }],
  },
  {
    slug: 'carrie-tolstedt',
    name: 'Carrie Tolstedt',
    title: 'Wells Fargo Senior EVP who oversaw the Community Banking division during the fake accounts scandal',
    role: 'Corporate Executive',
    riskLevel: 'high',
    description: 'Carrie Tolstedt led Wells Fargo\'s Community Banking division where employees created millions of unauthorized accounts to meet aggressive sales targets. She was fined $25 million by the OCC and faced criminal charges for her role in the scandal.',
    affiliations: [{ name: 'Wells Fargo', role: 'Senior Executive Vice President, Community Banking', type: 'corporation' }],
    controversies: ['Oversaw division that created millions of fake customer accounts to meet sales quotas'],
    investigationSlugs: ['wells-fargo-fraud'],
    timeline: [{ date: '2016', event: 'Left Wells Fargo as fake accounts scandal became public' }],
  },
  {
    slug: 'cathy-oneil',
    name: "Cathy O'Neil",
    title: 'Data scientist and author of "Weapons of Math Destruction" who exposed algorithmic bias in predictive policing',
    role: 'Academic',
    riskLevel: 'low',
    description: "Cathy O'Neil is a mathematician, data scientist, and author whose book \"Weapons of Math Destruction\" documented how predictive policing algorithms and other big data tools perpetuate discrimination and target vulnerable communities.",
    affiliations: [{ name: 'Columbia University', role: 'Data Scientist and Author', type: 'organization' }],
    controversies: ['Exposed how predictive policing algorithms encode and amplify racial bias'],
    investigationSlugs: ['predictive-policing'],
    timeline: [{ date: '2016', event: 'Published "Weapons of Math Destruction" exposing algorithmic bias in policing and other domains' }],
  },
  {
    slug: 'chester-crocker',
    name: 'Chester Crocker',
    title: "Reagan's Assistant Secretary of State for African Affairs who implemented 'constructive engagement' policy with apartheid South Africa",
    role: 'Government Official',
    riskLevel: 'high',
    description: "Chester Crocker served as Assistant Secretary of State for African Affairs under Reagan and was the architect of 'constructive engagement' — the policy of maintaining friendly relations with apartheid South Africa rather than imposing sanctions, effectively providing diplomatic cover for the regime.",
    affiliations: [{ name: 'US Department of State', role: 'Assistant Secretary for African Affairs', type: 'agency' }],
    controversies: ['Architect of constructive engagement policy that shielded apartheid South Africa from US sanctions'],
    investigationSlugs: ['us-support-for-apartheid'],
    timeline: [{ date: '1981', event: 'Appointed Assistant Secretary of State, began implementing constructive engagement with apartheid South Africa' }],
  },
  {
    slug: 'damian-williams',
    name: 'Damian Williams',
    title: 'US Attorney for the Southern District of New York who led the prosecution of Sam Bankman-Fried and FTX fraud',
    role: 'Legal Figure',
    riskLevel: 'low',
    description: 'Damian Williams served as US Attorney for the Southern District of New York and led the federal prosecution of Sam Bankman-Fried for the FTX cryptocurrency fraud, securing a conviction on all counts.',
    affiliations: [{ name: 'US Department of Justice', role: 'US Attorney, Southern District of New York', type: 'agency' }],
    controversies: ['Led historic prosecution of FTX cryptocurrency fraud case'],
    investigationSlugs: ['ftx-crypto-fraud'],
    timeline: [{ date: '2022', event: 'Announced federal charges against Sam Bankman-Fried for FTX fraud' }],
  },
  {
    slug: 'dave-clark',
    name: 'Dave Clark',
    title: 'Amazon Senior VP of Worldwide Operations who oversaw warehouse working conditions',
    role: 'Corporate Executive',
    riskLevel: 'high',
    description: 'Dave Clark served as Amazon\'s Senior Vice President of Worldwide Operations and later CEO of Consumer, overseeing the vast warehouse network where workers faced grueling conditions, high injury rates, and aggressive productivity monitoring.',
    affiliations: [{ name: 'Amazon', role: 'Senior VP of Worldwide Operations / CEO of Consumer', type: 'corporation' }],
    controversies: ['Oversaw Amazon warehouse operations with documented high injury rates and exploitative working conditions'],
    investigationSlugs: ['amazon-labor-abuses'],
    timeline: [{ date: '2020', event: 'Defended Amazon warehouse conditions during COVID-19 pandemic scrutiny' }],
  },
  {
    slug: 'dave-grossman',
    name: 'Dave Grossman',
    title: 'Former Army Ranger and police trainer who coined "Killology" and promoted warrior mindset in law enforcement',
    role: 'Military Officer',
    riskLevel: 'high',
    description: 'Dave Grossman is a former Army Ranger and West Point psychology professor who founded "Killology" — a controversial training philosophy that teaches police officers to embrace a warrior mentality. His seminars have been linked to increased police aggression and use of force.',
    affiliations: [{ name: 'Killology Research Group', role: 'Founder and Director', type: 'organization' }],
    controversies: ['Promoted warrior cop mentality through Killology training seminars linked to increased police violence'],
    investigationSlugs: ['police-militarization'],
    timeline: [{ date: '1995', event: 'Published "On Killing" and began promoting warrior mindset training for police officers' }],
  },
  {
    slug: 'david-niekerk',
    name: 'David Niekerk',
    title: 'Amazon Vice President of Workplace Health and Safety during period of high warehouse injury rates',
    role: 'Corporate Executive',
    riskLevel: 'high',
    description: 'David Niekerk served as Amazon\'s Vice President of Workplace Health and Safety, overseeing safety programs during a period when Amazon warehouses reported injury rates significantly higher than the industry average.',
    affiliations: [{ name: 'Amazon', role: 'VP of Workplace Health and Safety', type: 'corporation' }],
    controversies: ['Led Amazon safety programs during period of documented high warehouse injury rates'],
    investigationSlugs: ['amazon-labor-abuses'],
    timeline: [{ date: '2020', event: 'Faced scrutiny over Amazon warehouse injury rates during COVID-19 pandemic' }],
  },
  {
    slug: 'dick-carpenter',
    name: 'Dick Carpenter',
    title: 'Researcher and author who documented systemic abuses in civil asset forfeiture through data-driven studies',
    role: 'Academic',
    riskLevel: 'low',
    description: 'Dick Carpenter is a researcher at the Institute for Justice who has produced extensive data-driven studies documenting how civil asset forfeiture is used to seize property from citizens without criminal charges, disproportionately affecting low-income communities.',
    affiliations: [{ name: 'Institute for Justice', role: 'Director of Strategic Research', type: 'organization' }],
    controversies: ['Documented widespread civil asset forfeiture abuses through systematic research'],
    investigationSlugs: ['civil-asset-forfeiture'],
    timeline: [{ date: '2015', event: 'Published major study documenting civil asset forfeiture abuses and their impact on communities' }],
  },
  {
    slug: 'dillon-s-myer',
    name: 'Dillon S. Myer',
    title: 'Director of the War Relocation Authority who administered Japanese American internment camps during WWII',
    role: 'Government Official',
    riskLevel: 'critical',
    description: 'Dillon S. Myer directed the War Relocation Authority (WRA), the federal agency responsible for administering the internment of over 120,000 Japanese Americans during World War II. He later directed the Bureau of Indian Affairs, where he pursued assimilation policies.',
    affiliations: [{ name: 'War Relocation Authority', role: 'Director', type: 'agency' }],
    controversies: ['Administered the forcible internment of over 120,000 Japanese Americans during WWII'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Appointed Director of War Relocation Authority, oversaw Japanese American internment camps' }],
  },
  {
    slug: 'donald-wilber',
    name: 'Donald Wilber',
    title: 'CIA operative who co-planned Operation Ajax, the 1953 coup overthrowing Iran\'s democratically elected Prime Minister Mossadegh',
    role: 'Intelligence Officer',
    riskLevel: 'high',
    description: 'Donald Wilber was a CIA officer and architect of Operation Ajax who co-authored the plan to overthrow Iran\'s democratically elected Prime Minister Mohammad Mossadegh in 1953. His classified after-action report, later declassified, provided the most detailed account of the coup.',
    affiliations: [{ name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' }],
    controversies: ['Co-planned Operation Ajax, the CIA coup that overthrew Iran\'s democratic government in 1953'],
    investigationSlugs: ['iran-coup'],
    timeline: [{ date: '1953', event: 'Co-planned and executed Operation Ajax to overthrow Iranian Prime Minister Mossadegh' }],
  },
  {
    slug: 'douglas-lute',
    name: 'Douglas Lute',
    title: 'Army Lt. General and White House "War Czar" who coordinated Afghanistan war policy and admitted failures in Afghanistan Papers',
    role: 'Military Officer',
    riskLevel: 'high',
    description: 'Douglas Lute served as a three-star Army general and White House coordinator for Afghanistan and Iraq (the "War Czar") under Presidents Bush and Obama. In The Afghanistan Papers, he admitted the US had no fundamental understanding of the war and lacked basic knowledge of the country.',
    affiliations: [{ name: 'United States Army', role: 'Lieutenant General', type: 'agency' }, { name: 'White House', role: 'Afghanistan/Iraq War Coordinator', type: 'agency' }],
    controversies: ['Admitted in Afghanistan Papers that the US fundamentally did not understand the war and lacked a coherent strategy'],
    investigationSlugs: ['afghanistan-papers'],
    timeline: [{ date: '2007', event: 'Appointed as "War Czar" to coordinate Afghanistan and Iraq policy' }],
  },
  {
    slug: 'e-howard-hunt',
    name: 'E. Howard Hunt',
    title: 'CIA officer and Watergate conspirator who organized the burglary of Daniel Ellsberg\'s psychiatrist to discredit the Pentagon Papers leaker',
    role: 'Intelligence Officer',
    riskLevel: 'high',
    description: 'E. Howard Hunt was a CIA officer who played a central role in the Watergate scandal and organized the break-in of Daniel Ellsberg\'s psychiatrist\'s office to find material to discredit the Pentagon Papers whistleblower. He was convicted of burglary, conspiracy, and wiretapping.',
    affiliations: [{ name: 'Central Intelligence Agency', role: 'Operations Officer', type: 'agency' }],
    controversies: ['Organized break-in of Pentagon Papers leaker\'s psychiatrist office', 'Key Watergate conspirator'],
    investigationSlugs: ['pentagon-papers'],
    timeline: [{ date: '1971', event: 'Organized burglary of Daniel Ellsberg\'s psychiatrist\'s office to discredit Pentagon Papers source' }],
  },
  {
    slug: 'edmund-richardson',
    name: 'Edmund Richardson',
    title: 'Mississippi politician and plantation owner who profited extensively from the convict leasing system',
    role: 'Political Figure',
    riskLevel: 'high',
    description: 'Edmund Richardson was a Mississippi politician and one of the largest cotton planters in the post-Civil War South who massively profited from the convict leasing system, using convict labor to rebuild his plantation empire and becoming one of the wealthiest men in the region.',
    affiliations: [{ name: 'State of Mississippi', role: 'Plantation Owner and Political Figure', type: 'agency' }],
    controversies: ['Profited extensively from convict leasing, exploiting predominantly Black prisoners as forced labor'],
    investigationSlugs: ['convict-leasing'],
    timeline: [{ date: '1868', event: 'Began using convict leasing to secure forced labor for his plantation operations in Mississippi' }],
  },
  {
    slug: 'edward-korry',
    name: 'Edward Korry',
    title: 'US Ambassador to Chile who facilitated US efforts to prevent Salvador Allende from taking power',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Edward Korry served as US Ambassador to Chile from 1967 to 1971 and was involved in US efforts to destabilize Salvador Allende\'s government. He transmitted CIA communications and coordinated diplomatic pressure against Chile\'s democratically elected socialist president.',
    affiliations: [{ name: 'US Department of State', role: 'Ambassador to Chile', type: 'agency' }],
    controversies: ['Facilitated US intervention in Chilean politics as Ambassador during the Allende period'],
    investigationSlugs: ['chile-coup'],
    timeline: [{ date: '1970', event: 'Coordinated diplomatic efforts to prevent Allende from assuming power in Chile' }],
  },
  {
    slug: 'edwin-meese',
    name: 'Edwin Meese',
    title: 'Reagan\'s Attorney General and early Federalist Society supporter who advanced conservative legal movement',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Edwin Meese served as Attorney General under President Reagan and was a key early supporter and promoter of the Federalist Society. He championed originalism and used his position to advance the conservative legal movement\'s agenda of reshaping the federal judiciary.',
    affiliations: [{ name: 'US Department of Justice', role: 'Attorney General', type: 'agency' }, { name: 'The Federalist Society', role: 'Supporter and Promoter', type: 'organization' }],
    controversies: ['Used Attorney General position to advance Federalist Society\'s conservative judicial agenda'],
    investigationSlugs: ['federalist-society'],
    timeline: [{ date: '1985', event: 'As Attorney General, championed originalism and promoted the Federalist Society\'s influence on judicial nominations' }],
  },
  {
    slug: 'ernest-medina',
    name: 'Ernest Medina',
    title: 'US Army Captain who commanded Charlie Company during the My Lai Massacre in Vietnam',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'Ernest Medina commanded Charlie Company, 1st Battalion, 20th Infantry during the My Lai Massacre on March 16, 1968, where US soldiers killed between 347 and 504 unarmed Vietnamese civilians. He was acquitted at court-martial despite evidence of his involvement.',
    affiliations: [{ name: 'United States Army', role: 'Captain, Charlie Company Commander', type: 'agency' }],
    controversies: ['Commanded the unit responsible for the My Lai Massacre of hundreds of unarmed Vietnamese civilians'],
    investigationSlugs: ['vietnam-war-crimes'],
    timeline: [{ date: '1968', event: 'Commanded Charlie Company during the My Lai Massacre in Vietnam' }],
  },
  {
    slug: 'eugenia-charles',
    name: 'Eugenia Charles',
    title: 'Prime Minister of Dominica who publicly supported and helped justify the US invasion of Grenada in 1983',
    role: 'Political Figure',
    riskLevel: 'medium',
    description: 'Eugenia Charles, Prime Minister of Dominica, was the most prominent Caribbean leader to publicly support the US invasion of Grenada in 1983. She appeared alongside President Reagan to help legitimize the intervention as a regional request rather than unilateral US action.',
    affiliations: [{ name: 'Government of Dominica', role: 'Prime Minister', type: 'agency' }],
    controversies: ['Provided political cover for US invasion of Grenada by framing it as a Caribbean regional request'],
    investigationSlugs: ['grenada-invasion'],
    timeline: [{ date: '1983', event: 'Stood alongside Reagan to announce and justify the US invasion of Grenada' }],
  },
  {
    slug: 'fazlollah-zahedi',
    name: 'Fazlollah Zahedi',
    title: 'Iranian general installed as Prime Minister after the CIA-MI6 coup that overthrew Mossadegh in 1953',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'Fazlollah Zahedi was the Iranian general selected by the CIA and MI6 to replace Prime Minister Mohammad Mossadegh after the 1953 coup (Operation Ajax). He served as Prime Minister under the restored Shah, suppressing democratic opposition.',
    affiliations: [{ name: 'Imperial Iranian Government', role: 'Prime Minister (post-coup)', type: 'agency' }],
    controversies: ['Installed as PM by CIA/MI6 coup, suppressed democratic opposition in Iran'],
    investigationSlugs: ['iran-coup'],
    timeline: [{ date: '1953', event: 'Installed as Prime Minister of Iran following the CIA-MI6 coup against Mossadegh' }],
  },
  {
    slug: 'francis-biddle',
    name: 'Francis Biddle',
    title: 'US Attorney General who initially opposed but ultimately acquiesced to Japanese American internment',
    role: 'Government Official',
    riskLevel: 'medium',
    description: 'Francis Biddle served as US Attorney General during World War II and initially opposed the mass internment of Japanese Americans on constitutional grounds. However, he ultimately acquiesced to pressure from the War Department and President Roosevelt, allowing Executive Order 9066 to proceed.',
    affiliations: [{ name: 'US Department of Justice', role: 'Attorney General', type: 'agency' }],
    controversies: ['Initially opposed but ultimately failed to prevent Japanese American internment despite constitutional concerns'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Acquiesced to Japanese American internment despite initial constitutional objections' }],
  },
  {
    slug: 'francois-duvalier',
    name: 'François Duvalier',
    title: '"Papa Doc" — Haitian dictator who ruled through terror, the Tonton Macoutes secret police, and US-backed authoritarianism',
    role: 'Political Figure',
    riskLevel: 'critical',
    description: 'François "Papa Doc" Duvalier was the dictator of Haiti from 1957 to 1971. He ruled through a brutal secret police force (the Tonton Macoutes), political murders, and a personality cult, while receiving US support as a Cold War anticommunist ally despite widespread human rights abuses.',
    affiliations: [{ name: 'Government of Haiti', role: 'President-for-Life (Dictator)', type: 'agency' }],
    controversies: ['Brutal dictatorship maintained through Tonton Macoutes death squads while receiving US support'],
    investigationSlugs: ['haiti-exploitation'],
    timeline: [{ date: '1957', event: 'Seized power in Haiti, established brutal dictatorship backed by US Cold War interests' }],
  },
  {
    slug: 'freeway-ricky-ross',
    name: 'Freeway Ricky Ross',
    title: 'Los Angeles drug dealer whose cocaine supply was linked to CIA-backed Nicaraguan Contra operations',
    role: 'Criminal Figure',
    riskLevel: 'high',
    description: 'Freeway Ricky Ross was a major Los Angeles cocaine dealer whose supply chain was traced back to Nicaraguan drug traffickers connected to the CIA-backed Contra rebels. His case became central to allegations that the CIA facilitated drug trafficking to fund covert operations.',
    affiliations: [],
    controversies: ['Drug trafficking operation linked to CIA-backed Contra supply chain, fueling the crack epidemic'],
    investigationSlugs: ['cia-drug-trafficking'],
    timeline: [{ date: '1980s', event: 'Ran massive cocaine distribution network in Los Angeles supplied by CIA-linked Nicaraguan traffickers' }],
  },
  {
    slug: 'g-gordon-liddy',
    name: 'G. Gordon Liddy',
    title: 'FBI agent and Nixon operative who organized the Watergate break-in and the burglary of Pentagon Papers leaker\'s psychiatrist',
    role: 'Intelligence Officer',
    riskLevel: 'high',
    description: 'G. Gordon Liddy was a former FBI agent who served as counsel to Nixon\'s re-election committee and organized both the Watergate break-in and the burglary of Daniel Ellsberg\'s psychiatrist\'s office to discredit the Pentagon Papers leaker.',
    affiliations: [{ name: 'Federal Bureau of Investigation', role: 'Former Special Agent', type: 'agency' }, { name: 'Committee to Re-Elect the President', role: 'Counsel / Operative', type: 'organization' }],
    controversies: ['Organized Watergate break-in and burglary of Pentagon Papers leaker\\\'s psychiatrist'],
    investigationSlugs: ['pentagon-papers'],
    timeline: [{ date: '1971', event: 'Organized burglary of Daniel Ellsberg\'s psychiatrist\'s office as part of the Plumbers unit' }],
  },
  {
    slug: 'gary-sick',
    name: 'Gary Sick',
    title: 'National Security Council staff member who investigated and documented the 1980 October Surprise allegations',
    role: 'Government Official',
    riskLevel: 'medium',
    description: 'Gary Sick served on the National Security Council under Presidents Ford, Carter, and Reagan. He later investigated and publicly alleged that the Reagan campaign secretly negotiated with Iran to delay the release of American hostages until after the 1980 election.',
    affiliations: [{ name: 'National Security Council', role: 'Iran Specialist', type: 'agency' }],
    controversies: ['Publicly alleged Reagan campaign conspired with Iran to delay hostage release for electoral advantage'],
    investigationSlugs: ['october-surprise-1980'],
    timeline: [{ date: '1991', event: 'Published allegations about the October Surprise conspiracy regarding the 1980 hostage crisis' }],
  },
  {
    slug: 'geoffrey-miller',
    name: 'Geoffrey Miller',
    title: 'US Army Major General who commanded Guantanamo Bay and later oversaw interrogation operations at Abu Ghraib',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'Geoffrey Miller commanded the detention facility at Guantanamo Bay and was then sent to Abu Ghraib to "Gitmo-ize" interrogation procedures. His directives to use aggressive interrogation techniques contributed to the torture and abuse scandal at Abu Ghraib prison.',
    affiliations: [{ name: 'United States Army', role: 'Major General, Commander of Guantanamo/Abu Ghraib Operations', type: 'agency' }],
    controversies: ['Transferred aggressive Guantanamo interrogation techniques to Abu Ghraib, contributing to torture scandal'],
    investigationSlugs: ['abu-ghraib'],
    timeline: [{ date: '2003', event: 'Sent to Abu Ghraib to implement Guantanamo-style interrogation techniques' }],
  },
  {
    slug: 'george-w-cable',
    name: 'George Washington Cable',
    title: 'Author and reformer who exposed the brutal realities of the convict leasing system in the post-Civil War South',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'George Washington Cable was a Southern author and social reformer who documented and publicly condemned the convict leasing system, exposing how it effectively re-enslaved Black Americans through the criminal justice system after the Civil War.',
    affiliations: [],
    controversies: ['Exposed convict leasing abuses through writing and advocacy, facing Southern backlash'],
    investigationSlugs: ['convict-leasing'],
    timeline: [{ date: '1885', event: 'Published exposés documenting the brutality of the convict leasing system in the South' }],
  },
  {
    slug: 'george-wallace',
    name: 'George Wallace',
    title: 'Alabama Governor and segregationist who embodied and promoted systemic racism in American politics',
    role: 'Political Figure',
    riskLevel: 'critical',
    description: 'George Wallace served as Governor of Alabama and ran for president multiple times on a segregationist platform. His "Stand in the Schoolhouse Door" and declarations of "segregation forever" made him a symbol of racist resistance to civil rights and the ongoing war on Black America.',
    affiliations: [{ name: 'State of Alabama', role: 'Governor', type: 'agency' }],
    controversies: ['Championed segregation and racial discrimination as Governor and presidential candidate'],
    investigationSlugs: ['war-on-black-america'],
    timeline: [{ date: '1963', event: 'Made "Stand in the Schoolhouse Door" attempting to block Black students from University of Alabama' }],
  },
  {
    slug: 'gordon-hirabayashi',
    name: 'Gordon Hirabayashi',
    title: 'Japanese American who challenged the constitutionality of internment curfew orders, case reached Supreme Court',
    role: 'Activist',
    riskLevel: 'low',
    description: 'Gordon Hirabayashi was a Japanese American university student who defied and legally challenged the military curfew and internment orders during WWII. His case, Hirabayashi v. United States, went to the Supreme Court, and his conviction was eventually vacated in 1987.',
    affiliations: [],
    controversies: ['Challenged Japanese American internment curfew in Supreme Court case, conviction later vacated'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1943', event: 'Supreme Court upheld internment curfew in Hirabayashi v. United States (later vacated in 1987)' }],
  },
  {
    slug: 'henry-stimson',
    name: 'Henry Stimson',
    title: 'Secretary of War who recommended and implemented Japanese American internment through Executive Order 9066',
    role: 'Government Official',
    riskLevel: 'critical',
    description: 'Henry Stimson served as Secretary of War under President Roosevelt and was instrumental in recommending and implementing the mass internment of Japanese Americans through Executive Order 9066, overriding constitutional objections from the Attorney General.',
    affiliations: [{ name: 'US Department of War', role: 'Secretary of War', type: 'agency' }],
    controversies: ['Recommended and oversaw implementation of Japanese American internment affecting 120,000 people'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Recommended Executive Order 9066 authorizing Japanese American internment' }],
  },
  {
    slug: 'hubertus-strughold',
    name: 'Hubertus Strughold',
    title: 'Nazi scientist recruited through Operation Paperclip, called the "Father of Space Medicine" despite links to human experimentation',
    role: 'Scientist',
    riskLevel: 'critical',
    description: 'Hubertus Strughold was a German aviation medicine researcher recruited by the US through Operation Paperclip despite his involvement with Nazi human experimentation at Dachau concentration camp. He became known as the "Father of Space Medicine" while working for the US Air Force.',
    affiliations: [{ name: 'US Air Force', role: 'Space Medicine Researcher (via Operation Paperclip)', type: 'agency' }],
    controversies: ['Nazi scientist with links to Dachau human experiments, recruited by US despite war crimes connections'],
    investigationSlugs: ['operation-paperclip'],
    timeline: [{ date: '1947', event: 'Brought to the US through Operation Paperclip despite connections to Nazi human experimentation' }],
  },
  {
    slug: 'james-bamford',
    name: 'James Bamford',
    title: 'Investigative journalist who uncovered and published details of Operation Northwoods, the military\'s plan for false-flag attacks',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'James Bamford is an investigative journalist and author who uncovered and published details of Operation Northwoods — a 1962 proposal by the Joint Chiefs of Staff for false-flag terrorist attacks against US citizens to justify military intervention in Cuba.',
    affiliations: [],
    controversies: ['Exposed classified Operation Northwoods documents revealing military plans for false-flag attacks on US citizens'],
    investigationSlugs: ['operation-northwoods'],
    timeline: [{ date: '2001', event: 'Published details of Operation Northwoods in "Body of Secrets," exposing the military false-flag proposal' }],
  },
  {
    slug: 'james-earl-ray',
    name: 'James Earl Ray',
    title: 'Convicted assassin of Dr. Martin Luther King Jr., whose case raised questions about broader conspiracy',
    role: 'Criminal Figure',
    riskLevel: 'critical',
    description: 'James Earl Ray was convicted of assassinating Dr. Martin Luther King Jr. on April 4, 1968, in Memphis, Tennessee. His guilty plea, later recanted, and evidence of possible FBI involvement made the case one of the most investigated assassinations in American history.',
    affiliations: [],
    controversies: ['Convicted assassin of Martin Luther King Jr. — case raised lingering questions about FBI involvement and broader conspiracy'],
    investigationSlugs: ['mlk-assassination'],
    timeline: [{ date: '1968', event: 'Assassinated Dr. Martin Luther King Jr. in Memphis, Tennessee' }],
  },
  {
    slug: 'jean-claude-duvalier',
    name: 'Jean-Claude Duvalier',
    title: '"Baby Doc" — Haitian dictator who succeeded his father Papa Doc and continued brutal US-backed authoritarian rule',
    role: 'Political Figure',
    riskLevel: 'critical',
    description: 'Jean-Claude "Baby Doc" Duvalier succeeded his father as dictator of Haiti at age 19, continuing the regime of terror, corruption, and US-backed authoritarian rule from 1971 to 1986. He plundered the Haitian treasury and maintained the Tonton Macoutes secret police.',
    affiliations: [{ name: 'Government of Haiti', role: 'President-for-Life (Dictator)', type: 'agency' }],
    controversies: ['Continued father\'s brutal dictatorship, plundered Haiti\'s treasury while maintaining US support'],
    investigationSlugs: ['haiti-exploitation'],
    timeline: [{ date: '1971', event: 'Succeeded his father as dictator of Haiti at age 19, continued US-backed authoritarian regime' }],
  },
  {
    slug: 'john-l-dewitt',
    name: 'John L. DeWitt',
    title: 'US Army General who commanded the Western Defense Command and advocated for Japanese American internment',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'John L. DeWitt was the US Army general commanding the Western Defense Command who was the primary military advocate for Japanese American internment. He promoted racial hysteria, declaring that "a Jap is a Jap" and that Japanese Americans could never be trusted regardless of citizenship.',
    affiliations: [{ name: 'United States Army', role: 'Lieutenant General, Western Defense Command', type: 'agency' }],
    controversies: ['Primary military architect of Japanese American internment, promoted racial hysteria to justify mass incarceration'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Advocated for and oversaw the forced removal and internment of 120,000 Japanese Americans' }],
  },
  {
    slug: 'john-oliver',
    name: 'John Oliver',
    title: 'Television host who exposed Sinclair Broadcasting\'s coordinated scripted news segments on Last Week Tonight',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'John Oliver, host of Last Week Tonight on HBO, dedicated segments to exposing Sinclair Broadcasting\'s practice of forcing local news stations to air corporate-mandated "must-run" segments, revealing how a single corporation was shaping local news across America.',
    affiliations: [{ name: 'HBO', role: 'Host, Last Week Tonight', type: 'corporation' }],
    controversies: ['Exposed Sinclair Broadcasting\'s must-run propaganda segments on local news stations'],
    investigationSlugs: ['sinclair-broadcasting'],
    timeline: [{ date: '2017', event: 'Exposed Sinclair Broadcasting\'s must-run segments and media consolidation practices on Last Week Tonight' }],
  },
  {
    slug: 'john-sopko',
    name: 'John Sopko',
    title: 'Special Inspector General for Afghanistan Reconstruction (SIGAR) who documented waste and fraud in Afghanistan',
    role: 'Government Official',
    riskLevel: 'medium',
    description: 'John Sopko served as the Special Inspector General for Afghanistan Reconstruction (SIGAR) and produced numerous reports documenting billions of dollars in waste, fraud, and mismanagement in the US reconstruction effort in Afghanistan.',
    affiliations: [{ name: 'SIGAR', role: 'Special Inspector General for Afghanistan Reconstruction', type: 'agency' }],
    controversies: ['Documented massive waste and fraud in Afghanistan reconstruction spending through SIGAR reports'],
    investigationSlugs: ['afghanistan-papers'],
    timeline: [{ date: '2012', event: 'Appointed SIGAR, began documenting systematic waste and fraud in Afghanistan reconstruction' }],
  },
  {
    slug: 'joy-buolamwini',
    name: 'Joy Buolamwini',
    title: 'MIT Media Lab researcher who exposed racial and gender bias in commercial facial recognition systems',
    role: 'Academic',
    riskLevel: 'low',
    description: 'Joy Buolamwini is a computer scientist at the MIT Media Lab who founded the Algorithmic Justice League and published groundbreaking research demonstrating that commercial facial recognition systems had significantly higher error rates for darker-skinned individuals and women.',
    affiliations: [{ name: 'MIT Media Lab', role: 'Researcher', type: 'organization' }, { name: 'Algorithmic Justice League', role: 'Founder', type: 'organization' }],
    controversies: ['Exposed racial and gender bias in facial recognition technology used by law enforcement'],
    investigationSlugs: ['facial-recognition-surveillance'],
    timeline: [{ date: '2018', event: 'Published "Gender Shades" research exposing racial bias in facial recognition systems' }],
  },
  {
    slug: 'karl-bendetsen',
    name: 'Karl Bendetsen',
    title: 'Army Colonel who devised and implemented the logistics of Japanese American internment',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'Karl Bendetsen was a US Army Colonel who served as the key architect of the Japanese American internment logistics. He devised the classification system and administrative procedures that enabled the forced removal and imprisonment of over 120,000 Japanese Americans.',
    affiliations: [{ name: 'United States Army', role: 'Colonel, War Department', type: 'agency' }],
    controversies: ['Designed the logistical framework for mass internment of Japanese Americans'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Devised and implemented the administrative procedures for Japanese American internment' }],
  },
  {
    slug: 'laura-poitras',
    name: 'Laura Poitras',
    title: 'Documentary filmmaker and journalist who worked with Edward Snowden to expose NSA mass surveillance programs',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'Laura Poitras is an Academy Award-winning documentary filmmaker who was one of the first journalists contacted by Edward Snowden. She co-broke the NSA mass surveillance story and directed "Citizenfour," documenting Snowden\'s revelations about government spying programs.',
    affiliations: [],
    controversies: ['Helped expose NSA mass surveillance programs through collaboration with Edward Snowden'],
    investigationSlugs: ['nsa-mass-surveillance'],
    timeline: [{ date: '2013', event: 'Co-broke NSA surveillance story with Glenn Greenwald based on Snowden documents' }],
  },
  {
    slug: 'leon-panetta',
    name: 'Leon Panetta',
    title: 'CIA Director and Secretary of Defense who oversaw the expansion of the US drone assassination program',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Leon Panetta served as CIA Director (2009-2011) and Secretary of Defense (2011-2013) under President Obama. He presided over a massive expansion of the drone strike program, including targeted killings in Pakistan, Yemen, and Somalia that caused significant civilian casualties.',
    affiliations: [{ name: 'Central Intelligence Agency', role: 'Director', type: 'agency' }, { name: 'US Department of Defense', role: 'Secretary of Defense', type: 'agency' }],
    controversies: ['Oversaw major expansion of drone assassination program that caused significant civilian casualties'],
    investigationSlugs: ['drone-assassination-program'],
    timeline: [{ date: '2009', event: 'Became CIA Director, oversaw dramatic expansion of drone strike program' }],
  },
  {
    slug: 'mark-hyman',
    name: 'Mark Hyman',
    title: 'Sinclair Broadcasting commentator whose conservative "must-run" segments were mandated on local news stations nationwide',
    role: 'Media Figure',
    riskLevel: 'medium',
    description: 'Mark Hyman was a Sinclair Broadcasting commentator whose conservative editorial segments were among the "must-run" content that Sinclair forced its local news stations to air, regardless of local editorial preferences, blurring the line between news and political commentary.',
    affiliations: [{ name: 'Sinclair Broadcast Group', role: 'Commentator', type: 'corporation' }],
    controversies: ['Produced mandatory conservative commentary segments forced on Sinclair\'s local news stations'],
    investigationSlugs: ['sinclair-broadcasting'],
    timeline: [{ date: '2004', event: 'Began producing "must-run" conservative commentary segments for Sinclair Broadcasting stations' }],
  },
  {
    slug: 'mark-ruffalo',
    name: 'Mark Ruffalo',
    title: 'Actor and environmental activist who advocated for victims of DuPont\'s PFAS contamination',
    role: 'Activist',
    riskLevel: 'low',
    description: 'Mark Ruffalo is an actor and environmental activist who starred in the film "Dark Waters" and used his public platform to bring attention to DuPont\'s PFAS contamination crisis, advocating for affected communities and stronger chemical regulations.',
    affiliations: [],
    controversies: ['Advocated for DuPont PFAS contamination victims and stronger chemical safety regulations'],
    investigationSlugs: ['dupont-pfas-poisoning'],
    timeline: [{ date: '2019', event: 'Starred in "Dark Waters" bringing public attention to DuPont PFAS contamination' }],
  },
  {
    slug: 'matthew-albence',
    name: 'Matthew Albence',
    title: 'Acting ICE Director who defended detention facility conditions during period of documented abuses',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Matthew Albence served as Acting Director of ICE during a period of extensively documented abuses in immigration detention facilities, including family separations, overcrowding, inadequate medical care, and deaths in custody. He defended the conditions publicly.',
    affiliations: [{ name: 'Immigration and Customs Enforcement', role: 'Acting Director', type: 'agency' }],
    controversies: ['Defended ICE detention conditions during period of documented abuses, family separations, and deaths in custody'],
    investigationSlugs: ['ice-detention-abuses'],
    timeline: [{ date: '2019', event: 'Served as Acting ICE Director during period of documented detention facility abuses' }],
  },
  {
    slug: 'michelle-alexander',
    name: 'Michelle Alexander',
    title: 'Legal scholar and author of "The New Jim Crow" who documented systemic racism in the criminal justice system',
    role: 'Academic',
    riskLevel: 'low',
    description: 'Michelle Alexander is a legal scholar, civil rights advocate, and author of "The New Jim Crow: Mass Incarceration in the Age of Colorblindness," which documented how the War on Drugs and mass incarceration created a new racial caste system in America.',
    affiliations: [{ name: 'Ohio State University', role: 'Law Professor', type: 'organization' }],
    controversies: ['Documented how mass incarceration functions as a new form of racial control in America'],
    investigationSlugs: ['war-on-black-america'],
    timeline: [{ date: '2010', event: 'Published "The New Jim Crow" documenting systemic racism in the criminal justice system' }],
  },
  {
    slug: 'mike-masaoka',
    name: 'Mike Masaoka',
    title: 'JACL leader who controversially encouraged Japanese American cooperation with internment to prove loyalty',
    role: 'Activist',
    riskLevel: 'medium',
    description: 'Mike Masaoka was the national secretary of the Japanese American Citizens League (JACL) who controversially advocated for Japanese American cooperation with internment orders, believing that demonstrating loyalty through compliance would lead to better treatment and eventual acceptance.',
    affiliations: [{ name: 'Japanese American Citizens League', role: 'National Secretary', type: 'organization' }],
    controversies: ['Encouraged cooperation with internment, drawing criticism from Japanese Americans who viewed it as capitulation'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Advocated for JACL cooperation with internment orders as strategy to prove Japanese American loyalty' }],
  },
  {
    slug: 'minoru-yasui',
    name: 'Minoru Yasui',
    title: 'Japanese American attorney who deliberately violated internment curfew orders to create a legal test case',
    role: 'Activist',
    riskLevel: 'low',
    description: 'Minoru Yasui was a Japanese American attorney who deliberately violated the military curfew imposed on Japanese Americans to create a legal test case challenging the constitutionality of internment. His conviction was later vacated as part of the redress movement.',
    affiliations: [],
    controversies: ['Challenged constitutionality of Japanese American internment curfew through deliberate civil disobedience'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Deliberately violated internment curfew in Portland, Oregon, to create test case challenging constitutionality' }],
  },
  {
    slug: 'norman-mineta',
    name: 'Norman Mineta',
    title: 'Japanese American politician who was interned as a child and later served as Secretary of Transportation and Commerce',
    role: 'Political Figure',
    riskLevel: 'low',
    description: 'Norman Mineta was interned at the Heart Mountain camp as a child during WWII and later became the first Asian American cabinet member, serving as Secretary of Commerce and Secretary of Transportation. He was instrumental in passing the Civil Liberties Act of 1988.',
    affiliations: [{ name: 'US Department of Transportation', role: 'Secretary of Transportation', type: 'agency' }],
    controversies: ['Used personal internment experience to advocate for Japanese American redress and civil liberties'],
    investigationSlugs: ['japanese-internment'],
    timeline: [{ date: '1942', event: 'Interned at Heart Mountain concentration camp as a child during Japanese American internment' }],
  },
  {
    slug: 'norwin-meneses',
    name: 'Norwin Meneses',
    title: 'Nicaraguan drug trafficker linked to CIA-backed Contra operations who supplied cocaine to US dealers',
    role: 'Criminal Figure',
    riskLevel: 'high',
    description: 'Norwin Meneses was a major Nicaraguan drug trafficker with documented connections to the CIA-backed Contra rebels. He supplied cocaine to dealers in the United States while allegedly enjoying protection due to his links to the Contra supply network.',
    affiliations: [],
    controversies: ['Drug trafficking operations linked to CIA-backed Contra rebels, contributing to US crack cocaine epidemic'],
    investigationSlugs: ['cia-drug-trafficking'],
    timeline: [{ date: '1980s', event: 'Trafficked cocaine from Nicaragua to the US with alleged CIA protection through Contra connections' }],
  },
  {
    slug: 'radley-balko',
    name: 'Radley Balko',
    title: 'Investigative journalist who documented the rise of police militarization and abuses of no-knock raids',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'Radley Balko is an investigative journalist and author of "Rise of the Warrior Cop" who has extensively documented the militarization of American police forces and the dangers of no-knock raids, becoming one of the foremost critics of aggressive policing tactics.',
    affiliations: [{ name: 'The Washington Post', role: 'Investigative Reporter', type: 'corporation' }],
    controversies: ['Documented widespread police militarization and no-knock raid abuses through investigative journalism'],
    investigationSlugs: ['no-knock-raids', 'police-militarization'],
    timeline: [{ date: '2013', event: 'Published "Rise of the Warrior Cop" documenting police militarization and no-knock raid dangers' }],
  },
  {
    slug: 'richard-fink',
    name: 'Richard Fink',
    title: 'Koch network strategist who designed the political influence infrastructure for the Koch brothers\' operations',
    role: 'Political Figure',
    riskLevel: 'high',
    description: 'Richard Fink was the chief political strategist for Charles Koch and architect of the Koch network\'s political influence infrastructure. He designed the "Structure of Social Change" model that guided the Koch brothers\' massive investment in reshaping American politics and policy.',
    affiliations: [{ name: 'Koch Industries', role: 'Executive Vice President and Chief Strategist', type: 'corporation' }],
    controversies: ['Architected the Koch political influence network that reshaped American politics through dark money'],
    investigationSlugs: ['koch-network'],
    timeline: [{ date: '1990s', event: 'Designed the Koch network\'s political influence strategy and infrastructure' }],
  },
  {
    slug: 'robert-mckee',
    name: 'Robert McKee',
    title: 'Convict leasing operator who exploited incarcerated workers for profit in the post-Civil War South',
    role: 'Criminal Figure',
    riskLevel: 'high',
    description: 'Robert McKee was a convict leasing operator in the post-Civil War South who leased predominantly Black convict laborers for agricultural and industrial work, profiting from a system widely recognized as slavery by another name.',
    affiliations: [],
    controversies: ['Profited from convict leasing system that exploited predominantly Black prisoners as forced labor'],
    investigationSlugs: ['convict-leasing'],
    timeline: [{ date: '1870s', event: 'Operated convict leasing operations exploiting forced prison labor in the post-Civil War South' }],
  },
  {
    slug: 'ron-watkins',
    name: 'Ron Watkins',
    title: '8chan/8kun administrator widely suspected of being behind the QAnon conspiracy theory posts',
    role: 'Media Figure',
    riskLevel: 'high',
    description: 'Ron Watkins served as administrator of 8chan (later 8kun), the platform where QAnon posts originated. He is widely suspected of being "Q" or closely involved in the QAnon conspiracy theory that radicalized millions, though he has denied this.',
    affiliations: [{ name: '8chan/8kun', role: 'Administrator', type: 'corporation' }],
    controversies: ['Administered platform where QAnon originated, widely suspected of involvement in creating the conspiracy'],
    investigationSlugs: ['qanon-radicalization'],
    timeline: [{ date: '2017', event: 'Administered 8chan/8kun during the emergence and spread of QAnon conspiracy theory' }],
  },
  {
    slug: 'ruha-benjamin',
    name: 'Ruha Benjamin',
    title: 'Princeton professor who studies racial bias in technology and coined the term "New Jim Code"',
    role: 'Academic',
    riskLevel: 'low',
    description: 'Ruha Benjamin is a Princeton University professor of African American Studies who coined the term "New Jim Code" to describe how algorithms and technology perpetuate racial discrimination. Her work on predictive policing reveals how these systems encode historical biases.',
    affiliations: [{ name: 'Princeton University', role: 'Professor of African American Studies', type: 'organization' }],
    controversies: ['Documented how predictive policing and algorithms perpetuate racial discrimination through the "New Jim Code"'],
    investigationSlugs: ['predictive-policing'],
    timeline: [{ date: '2019', event: 'Published "Race After Technology" documenting algorithmic bias and the "New Jim Code"' }],
  },
  {
    slug: 'samantha-power',
    name: 'Samantha Power',
    title: 'US Ambassador to the UN who advocated for military intervention in Libya under the Responsibility to Protect doctrine',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Samantha Power served as US Ambassador to the United Nations and was a key advocate for the military intervention in Libya in 2011, invoking the Responsibility to Protect doctrine. The intervention led to regime change and Libya\'s descent into a failed state.',
    affiliations: [{ name: 'United States Mission to the UN', role: 'US Ambassador to the United Nations', type: 'agency' }],
    controversies: ['Advocated for Libya intervention that led to regime change and state collapse'],
    investigationSlugs: ['libya-intervention'],
    timeline: [{ date: '2011', event: 'Advocated for UN-authorized military intervention in Libya under Responsibility to Protect' }],
  },
  {
    slug: 'sandra-day-oconnor',
    name: "Sandra Day O'Connor",
    title: 'Supreme Court Justice who voted with the majority in Bush v. Gore, effectively deciding the 2000 presidential election',
    role: 'Legal Figure',
    riskLevel: 'high',
    description: "Sandra Day O'Connor served as an Associate Justice of the Supreme Court and voted with the 5-4 majority in Bush v. Gore (2000), which halted the Florida recount and effectively awarded the presidency to George W. Bush. Reports suggest she later expressed regret.",
    affiliations: [{ name: 'Supreme Court of the United States', role: 'Associate Justice', type: 'agency' }],
    controversies: ['Voted with majority in Bush v. Gore, halting Florida recount and deciding the 2000 election'],
    investigationSlugs: ['bush-v-gore'],
    timeline: [{ date: '2000', event: 'Voted with 5-4 majority in Bush v. Gore, stopping Florida recount and awarding presidency to Bush' }],
  },
  {
    slug: 'sandra-serrano',
    name: 'Sandra Serrano',
    title: 'Witness who reported seeing a woman in a polka dot dress at the RFK assassination and was pressured to recant',
    role: 'Witness',
    riskLevel: 'low',
    description: 'Sandra Serrano was a campaign volunteer who reported encountering a woman in a polka dot dress celebrating after the RFK assassination. She was aggressively interrogated by LAPD and pressured to recant her testimony, raising questions about evidence suppression.',
    affiliations: [],
    controversies: ['Witness in RFK assassination pressured by LAPD to recant testimony about suspicious individuals'],
    investigationSlugs: ['rfk-assassination'],
    timeline: [{ date: '1968', event: 'Reported seeing woman in polka dot dress at RFK assassination, later pressured by LAPD to recant' }],
  },
  {
    slug: 'scott-fitzgerald',
    name: 'Scott Fitzgerald',
    title: 'Wisconsin Senate Majority Leader who led Republican efforts in partisan gerrymandering of state legislative maps',
    role: 'Political Figure',
    riskLevel: 'high',
    description: 'Scott Fitzgerald served as Wisconsin Senate Majority Leader and played a key role in the Republican gerrymandering of Wisconsin\'s legislative maps after the 2010 census, which was designed to entrench Republican majorities regardless of statewide voting patterns.',
    affiliations: [{ name: 'Wisconsin State Senate', role: 'Senate Majority Leader', type: 'agency' }],
    controversies: ['Led partisan gerrymandering of Wisconsin legislative maps to entrench Republican control'],
    investigationSlugs: ['gerrymandering'],
    timeline: [{ date: '2011', event: 'Led Republican redistricting effort in Wisconsin that produced severely gerrymandered maps' }],
  },
  {
    slug: 'scott-livingston',
    name: 'Scott Livingston',
    title: 'Sinclair Broadcasting news director who implemented corporate-mandated content on local news stations',
    role: 'Media Figure',
    riskLevel: 'medium',
    description: 'Scott Livingston served as Vice President of News at Sinclair Broadcast Group, overseeing the implementation of corporate-mandated "must-run" segments on local news stations across the country, centralizing editorial control and undermining local journalism.',
    affiliations: [{ name: 'Sinclair Broadcast Group', role: 'Vice President of News', type: 'corporation' }],
    controversies: ['Implemented corporate-mandated must-run segments that undermined local news editorial independence'],
    investigationSlugs: ['sinclair-broadcasting'],
    timeline: [{ date: '2017', event: 'Oversaw Sinclair\'s must-run content mandates for local news stations across the country' }],
  },
  {
    slug: 'sergio-arellano-stark',
    name: 'Sergio Arellano Stark',
    title: 'Chilean Army general who led the "Caravan of Death" executing political prisoners after the 1973 coup',
    role: 'Military Officer',
    riskLevel: 'critical',
    description: 'Sergio Arellano Stark was a Chilean Army general who led the "Caravan of Death" — a military death squad that traveled through Chile executing political prisoners in the weeks following the September 1973 coup against Salvador Allende.',
    affiliations: [{ name: 'Chilean Army', role: 'Brigadier General', type: 'agency' }],
    controversies: ['Led the "Caravan of Death" that executed political prisoners across Chile after the 1973 coup'],
    investigationSlugs: ['chile-coup'],
    timeline: [{ date: '1973', event: 'Led the "Caravan of Death" executing political prisoners across Chile following the coup' }],
  },
  {
    slug: 'sister-helen-prejean',
    name: 'Sister Helen Prejean',
    title: 'Catholic nun and anti-death penalty advocate, author of "Dead Man Walking"',
    role: 'Activist',
    riskLevel: 'low',
    description: 'Sister Helen Prejean is a Catholic nun who became the most prominent voice against the death penalty in America through her book "Dead Man Walking" and decades of advocacy. She has served as spiritual advisor to death row inmates and documented systemic injustices in capital punishment.',
    affiliations: [{ name: 'Congregation of St. Joseph', role: 'Catholic Nun and Advocate', type: 'organization' }],
    controversies: ['Decades of advocacy exposing wrongful convictions and racial bias in death penalty cases'],
    investigationSlugs: ['death-penalty-injustice'],
    timeline: [{ date: '1993', event: 'Published "Dead Man Walking" documenting death penalty injustice from firsthand experience' }],
  },
  {
    slug: 'stephen-cambone',
    name: 'Stephen Cambone',
    title: 'Undersecretary of Defense for Intelligence who oversaw intelligence operations during the Abu Ghraib torture scandal',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Stephen Cambone served as the first Undersecretary of Defense for Intelligence under Donald Rumsfeld and was involved in developing the interrogation policies that contributed to the Abu Ghraib torture scandal. He oversaw defense intelligence operations during the War on Terror.',
    affiliations: [{ name: 'US Department of Defense', role: 'Undersecretary of Defense for Intelligence', type: 'agency' }],
    controversies: ['Helped develop interrogation policies that contributed to Abu Ghraib prisoner abuse and torture'],
    investigationSlugs: ['abu-ghraib'],
    timeline: [{ date: '2003', event: 'Oversaw intelligence operations and interrogation policies during Abu Ghraib period' }],
  },
  {
    slug: 'sunny-balwani',
    name: 'Sunny Balwani',
    title: 'Theranos COO and President who was convicted of fraud alongside Elizabeth Holmes',
    role: 'Corporate Executive',
    riskLevel: 'high',
    description: 'Ramesh "Sunny" Balwani served as President and COO of Theranos, where he oversaw the fraudulent blood-testing operations. He was convicted on 12 counts of fraud for misleading investors and patients about the capabilities of the company\'s technology.',
    affiliations: [{ name: 'Theranos', role: 'President and COO', type: 'corporation' }],
    controversies: ['Convicted of 12 counts of fraud for role in Theranos blood-testing deception'],
    investigationSlugs: ['theranos-fraud'],
    timeline: [{ date: '2022', event: 'Convicted of 12 counts of wire fraud and conspiracy for role in Theranos fraud' }],
  },
  {
    slug: 'susan-collins',
    name: 'Susan Collins',
    title: 'US Senator who voted to confirm Justice Kavanaugh after receiving assurances about Roe v. Wade',
    role: 'Political Figure',
    riskLevel: 'medium',
    description: 'Susan Collins, a Republican Senator from Maine, cast a pivotal vote to confirm Brett Kavanaugh to the Supreme Court after receiving assurances that he considered Roe v. Wade settled precedent. Kavanaugh later voted to overturn Roe in Dobbs v. Jackson Women\'s Health.',
    affiliations: [{ name: 'United States Senate', role: 'Senator (R-ME)', type: 'agency' }],
    controversies: ['Voted to confirm Kavanaugh based on Roe v. Wade assurances that proved false when he voted to overturn it'],
    investigationSlugs: ['roe-v-wade-overturn'],
    timeline: [{ date: '2018', event: 'Cast pivotal vote confirming Justice Kavanaugh after he assured Roe v. Wade was settled precedent' }],
  },
  {
    slug: 'theodore-roosevelt',
    name: 'Theodore Roosevelt',
    title: 'US President who expanded the Indian boarding school system as part of assimilation policy',
    role: 'Political Figure',
    riskLevel: 'critical',
    description: 'Theodore Roosevelt served as the 26th President of the United States and presided over a significant expansion of the Indian boarding school system. He publicly declared that Indigenous peoples must abandon their cultures and assimilate, calling the forced education policy essential.',
    affiliations: [{ name: 'United States Government', role: '26th President', type: 'agency' }],
    controversies: ['Expanded Indian boarding school system designed to destroy Indigenous cultures through forced assimilation'],
    investigationSlugs: ['indian-boarding-schools'],
    timeline: [{ date: '1901', event: 'As President, expanded the Indian boarding school system and promoted forced assimilation policies' }],
  },
  {
    slug: 'thomas-corcoran',
    name: 'Thomas Corcoran',
    title: 'Washington lobbyist and lawyer who facilitated United Fruit Company\'s push for the 1954 Guatemala coup',
    role: 'Political Figure',
    riskLevel: 'high',
    description: 'Thomas "Tommy the Cork" Corcoran was a powerful Washington lawyer and lobbyist who used his political connections to facilitate the United Fruit Company\'s lobbying campaign that helped convince the Eisenhower administration to authorize the 1954 CIA coup in Guatemala.',
    affiliations: [{ name: 'United Fruit Company', role: 'Lobbyist', type: 'corporation' }],
    controversies: ['Lobbied for the 1954 Guatemala coup on behalf of United Fruit Company\'s commercial interests'],
    investigationSlugs: ['guatemala-coup-1954'],
    timeline: [{ date: '1954', event: 'Facilitated United Fruit Company lobbying for the CIA coup against Guatemala\'s elected government' }],
  },
  {
    slug: 'tim-geithner',
    name: 'Tim Geithner',
    title: 'Treasury Secretary during the 2008 financial crisis who oversaw the Wall Street bailout',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Timothy Geithner served as President of the New York Federal Reserve and then as Treasury Secretary during the 2008 financial crisis. He was a key architect of the Wall Street bailout, which rescued major banks while millions of Americans lost their homes.',
    affiliations: [{ name: 'US Department of the Treasury', role: 'Secretary of the Treasury', type: 'agency' }, { name: 'Federal Reserve Bank of New York', role: 'President', type: 'agency' }],
    controversies: ['Oversaw Wall Street bailout that rescued banks while homeowners faced foreclosure'],
    investigationSlugs: ['2008-financial-crisis'],
    timeline: [{ date: '2009', event: 'Became Treasury Secretary, oversaw TARP bailout and financial crisis response that favored Wall Street' }],
  },
  {
    slug: 'ulysses-s-grant',
    name: 'Ulysses S. Grant',
    title: 'US President who implemented early Indian reservation and assimilation policies including Peace Policy',
    role: 'Political Figure',
    riskLevel: 'critical',
    description: 'Ulysses S. Grant served as the 18th President and implemented the "Peace Policy" toward Native Americans, which established the reservation system and early boarding school programs designed to forcibly assimilate Indigenous peoples into white American culture.',
    affiliations: [{ name: 'United States Government', role: '18th President', type: 'agency' }],
    controversies: ['Implemented reservation system and early Indian boarding school policies as part of forced assimilation'],
    investigationSlugs: ['indian-boarding-schools'],
    timeline: [{ date: '1869', event: 'Implemented "Peace Policy" establishing reservation system and early boarding school programs for Native Americans' }],
  },
  {
    slug: 'warren-christopher',
    name: 'Warren Christopher',
    title: 'Secretary of State during the Clinton administration who led US policy of inaction during the Rwanda genocide',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'Warren Christopher served as Secretary of State under President Clinton during the 1994 Rwanda genocide. He helped lead the administration\'s deliberate policy of inaction and avoidance, including instructing officials not to use the word "genocide" to avoid triggering intervention obligations.',
    affiliations: [{ name: 'US Department of State', role: 'Secretary of State', type: 'agency' }],
    controversies: ['Led US diplomatic inaction during Rwanda genocide, avoided using word "genocide" to evade intervention obligations'],
    investigationSlugs: ['rwanda-genocide-inaction'],
    timeline: [{ date: '1994', event: 'As Secretary of State, led US policy of deliberate inaction during the Rwanda genocide' }],
  },
  {
    slug: 'william-binney',
    name: 'William Binney',
    title: 'NSA whistleblower and former technical director who exposed the agency\'s mass surveillance programs',
    role: 'Whistleblower',
    riskLevel: 'medium',
    description: 'William Binney was a former NSA technical director who became one of the first whistleblowers to expose the agency\'s mass domestic surveillance programs after 9/11. He revealed that the NSA was collecting data on American citizens without warrants, predating Snowden\'s revelations.',
    affiliations: [{ name: 'National Security Agency', role: 'Former Technical Director', type: 'agency' }],
    controversies: ['Exposed NSA warrantless surveillance of American citizens, faced government retaliation'],
    investigationSlugs: ['nsa-mass-surveillance'],
    timeline: [{ date: '2002', event: 'Left NSA and began exposing mass surveillance programs targeting American citizens' }],
  },
  {
    slug: 'william-black',
    name: 'William Black',
    title: 'Federal bank regulator and whistleblower who exposed fraud during the savings and loan crisis',
    role: 'Whistleblower',
    riskLevel: 'medium',
    description: 'William Black served as a federal bank regulator who played a key role in exposing the fraud and corruption at the heart of the savings and loan crisis. He documented how political interference and regulatory capture allowed widespread fraud to continue unchecked.',
    affiliations: [{ name: 'Federal Home Loan Bank Board', role: 'Deputy Director / Litigation Director', type: 'agency' }],
    controversies: ['Exposed political interference and regulatory capture that enabled savings and loan fraud'],
    investigationSlugs: ['savings-and-loan-crisis'],
    timeline: [{ date: '1989', event: 'Exposed fraud and political interference during the savings and loan crisis as federal regulator' }],
  },
  {
    slug: 'william-bratton',
    name: 'William Bratton',
    title: 'NYPD and LAPD Commissioner who championed CompStat and predictive policing technologies',
    role: 'Government Official',
    riskLevel: 'high',
    description: 'William Bratton served as Commissioner of the NYPD and LAPD and was a pioneer of data-driven and predictive policing through the CompStat system. Critics argue these approaches systematically targeted Black and Latino communities and reinforced discriminatory enforcement patterns.',
    affiliations: [{ name: 'New York Police Department', role: 'Commissioner', type: 'agency' }, { name: 'Los Angeles Police Department', role: 'Chief of Police', type: 'agency' }],
    controversies: ['Championed predictive policing and CompStat systems that critics say reinforced racial profiling'],
    investigationSlugs: ['predictive-policing'],
    timeline: [{ date: '1994', event: 'Introduced CompStat to NYPD, pioneering data-driven predictive policing approaches' }],
  },
  {
    slug: 'william-richmond',
    name: 'William Richmond',
    title: 'Philadelphia Managing Director during the 1985 MOVE bombing that destroyed an entire neighborhood',
    role: 'Government Official',
    riskLevel: 'critical',
    description: 'William Richmond served as Philadelphia\'s Fire Commissioner during the 1985 MOVE bombing. He was involved in the decision-making that led to a police bomb being dropped on a residential neighborhood, destroying 61 homes and killing 11 people, including 5 children.',
    affiliations: [{ name: 'City of Philadelphia', role: 'Fire Commissioner', type: 'agency' }],
    controversies: ['Involved in decision-making that led to MOVE bombing destroying 61 homes and killing 11 people'],
    investigationSlugs: ['move-bombing'],
    timeline: [{ date: '1985', event: 'Oversaw fire response during MOVE bombing that destroyed an entire neighborhood in Philadelphia' }],
  },
  {
    slug: 'william-shawcross',
    name: 'William Shawcross',
    title: 'Journalist and author who exposed the secret US bombing campaign in Cambodia',
    role: 'Journalist',
    riskLevel: 'low',
    description: 'William Shawcross is a British journalist and author whose book "Sideshow: Kissinger, Nixon and the Destruction of Cambodia" exposed the secret and illegal US bombing campaign in Cambodia, documenting how it destabilized the country and contributed to the rise of the Khmer Rouge.',
    affiliations: [],
    controversies: ['Exposed the secret US bombing of Cambodia and its role in destabilizing the country'],
    investigationSlugs: ['cambodia-bombing'],
    timeline: [{ date: '1979', event: 'Published "Sideshow" exposing the secret US bombing campaign in Cambodia' }],
  },
];

// Build the profile entry string for each individual
function buildEntry(ind) {
  const affiliationsStr = ind.affiliations.length === 0
    ? '[]'
    : '[\n' + ind.affiliations.map(a =>
      `      { name: '${esc(a.name)}', role: '${esc(a.role)}', type: '${a.type}' }`
    ).join(',\n') + ',\n    ]';

  const controversiesStr = '[\n' + ind.controversies.map(c =>
    `      '${esc(c)}'`
  ).join(',\n') + ',\n    ]';

  // Build relatedInvestigations
  const relInvs = ind.investigationSlugs.map(slug => {
    const info = investigations[slug];
    return `      { title: '${esc(info.title)}', slug: '${slug}', severity: '${info.severity}' }`;
  });
  const relInvsStr = '[\n' + relInvs.join(',\n') + ',\n    ]';

  const timelineStr = ind.timeline.length === 0
    ? '[]'
    : '[\n' + ind.timeline.map(t =>
      `      { date: '${esc(t.date)}', event: '${esc(t.event)}' }`
    ).join(',\n') + ',\n    ]';

  const sourcesEntries = ind.investigationSlugs.map(slug => {
    const info = investigations[slug];
    return `      { title: '${esc(info.title)}', url: '/investigations/${slug}' }`;
  });
  const sourcesStr = '[\n' + sourcesEntries.join(',\n') + ',\n    ]';

  return `  '${ind.slug}': {
    name: '${esc(ind.name)}',
    title: '${esc(ind.title)}',
    role: '${esc(ind.role)}',
    riskLevel: '${ind.riskLevel}',
    description: '${esc(ind.description)}',
    education: [],
    affiliations: ${affiliationsStr},
    controversies: ${controversiesStr},
    relatedInvestigations: ${relInvsStr},
    timeline: ${timelineStr},
    sources: ${sourcesStr},
  },`;
}

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Main execution
function main() {
  console.log('Reading individuals page file...');
  let content = fs.readFileSync(INDIVIDUALS_FILE, 'utf8');

  // Count existing entries
  const existingKeys = content.match(/'[a-z0-9-]+':\s*\{/g) || [];
  console.log(`Found ${existingKeys.length} existing individual entries.`);

  // Check which of the 77 are already present
  const alreadyPresent = [];
  const toAdd = [];
  for (const ind of newIndividuals) {
    const pattern = new RegExp(`'${ind.slug}':\\s*\\{`);
    if (pattern.test(content)) {
      alreadyPresent.push(ind.slug);
    } else {
      toAdd.push(ind);
    }
  }

  if (alreadyPresent.length > 0) {
    console.log(`\nAlready present (${alreadyPresent.length}): ${alreadyPresent.join(', ')}`);
  }

  if (toAdd.length === 0) {
    console.log('\nAll individuals are already present. Nothing to add.');
    return;
  }

  console.log(`\nAdding ${toAdd.length} new individual entries...`);

  // Build all new entries
  const newEntriesStr = toAdd.map(ind => buildEntry(ind)).join('\n');

  // Find the closing of the individualData object: the line with just `};`
  // after the last entry. We look for the pattern `};\n\n// Generate` or similar
  const insertionPattern = /\n};\n\n\/\/ Generate static params/;
  const match = content.match(insertionPattern);
  if (!match) {
    console.error('ERROR: Could not find insertion point (closing of individualData object).');
    console.error('Looking for alternative pattern...');

    // Try alternative: find the last `  },\n};` pattern
    const altPattern = /(\n {2}\},)\n\};\n/;
    const altMatch = content.match(altPattern);
    if (!altMatch) {
      console.error('ERROR: Could not find any suitable insertion point. Aborting.');
      process.exit(1);
    }
    // Insert after the last entry's closing `  },`
    const insertAt = content.indexOf(altMatch[0]) + altMatch[1].length;
    content = content.slice(0, insertAt) + '\n' + newEntriesStr + '\n' + content.slice(insertAt);
  } else {
    // Insert before the `};`
    const insertAt = content.indexOf(match[0]);
    content = content.slice(0, insertAt) + '\n' + newEntriesStr + '\n};\n\n// Generate static params' + content.slice(insertAt + match[0].length);
  }

  // Write back
  fs.writeFileSync(INDIVIDUALS_FILE, content, 'utf8');

  // Verify
  const verifyContent = fs.readFileSync(INDIVIDUALS_FILE, 'utf8');
  const newKeys = verifyContent.match(/'[a-z0-9-]+':\s*\{/g) || [];
  console.log(`\nDone! Successfully added ${toAdd.length} new entries.`);
  console.log(`Previous count: ${existingKeys.length}`);
  console.log(`New total: ${newKeys.length}`);

  // Verify each was added
  let verified = 0;
  let missing = [];
  for (const ind of toAdd) {
    const pattern = new RegExp(`'${ind.slug}':\\s*\\{`);
    if (pattern.test(verifyContent)) {
      verified++;
    } else {
      missing.push(ind.slug);
    }
  }
  console.log(`Verified: ${verified}/${toAdd.length} entries found in file.`);
  if (missing.length > 0) {
    console.log(`Missing: ${missing.join(', ')}`);
  }
}

main();
