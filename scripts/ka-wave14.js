const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 14: FINAL wave - all remaining profiles
const data = {
  'damian-williams': [
    { name: 'Sam Bankman-Fried', relationship: 'US Attorney who prosecuted SBF for FTX fraud', slug: 'sam-bankman-fried' }
  ],
  'dave-clark': [
    { name: 'Jeff Bezos', relationship: 'Amazon logistics executive under Bezos', slug: 'jeff-bezos' },
    { name: 'Chris Smalls', relationship: 'Amazon exec during warehouse labor disputes', slug: 'chris-smalls' }
  ],
  'dave-grossman': [
    { name: 'William Bratton', relationship: 'Fellow figure in warrior-mentality police training', slug: 'william-bratton' }
  ],
  'david-niekerk': [
    { name: 'Dave Grossman', relationship: 'Connected through police training methodology', slug: 'dave-grossman' }
  ],
  'dick-carpenter': [
    { name: 'Mandrel Stuart', relationship: 'Researcher who documented civil forfeiture abuses like Stuart\'s case', slug: 'mandrel-stuart' }
  ],
  'dillon-s-myer': [
    { name: 'John L. DeWitt', relationship: 'Military commander who ordered internment Myer then administered', slug: 'john-l-dewitt' },
    { name: 'Karl Bendetsen', relationship: 'Fellow Japanese internment architect', slug: 'karl-bendetsen' },
    { name: 'Richard Henry Pratt', relationship: 'Myer later applied internment approach to BIA Native American policy', slug: 'richard-henry-pratt' }
  ],
  'donald-wilber': [
    { name: 'Allen Dulles', relationship: 'CIA officer who wrote blueprint for 1953 Iran coup Dulles authorized', slug: 'allen-dulles' },
    { name: 'Fazlollah Zahedi', relationship: 'General installed by coup Wilber planned', slug: 'fazlollah-zahedi' }
  ],
  'douglas-lute': [
    { name: 'John Sopko', relationship: 'Fellow Afghanistan oversight figure whose papers revealed lies', slug: 'john-sopko' },
    { name: 'Bob Crowley', relationship: 'Afghanistan Papers figure', slug: 'bob-crowley' }
  ],
  'e-howard-hunt': [
    { name: 'G. Gordon Liddy', relationship: 'Watergate operative partner', slug: 'g-gordon-liddy' },
    { name: 'Richard Nixon', relationship: 'White House Plumber who carried out Nixon\'s dirty tricks', slug: 'richard-nixon' },
    { name: 'Allen Dulles', relationship: 'CIA officer under Dulles involved in Bay of Pigs', slug: 'allen-dulles' }
  ],
  'edmund-richardson': [
    { name: 'Joseph E. Brown', relationship: 'Fellow former Confederate connected to convict leasing', slug: 'joseph-e-brown' }
  ],
  'edward-korry': [
    { name: 'Henry Kissinger', relationship: 'Ambassador to Chile during Kissinger\'s coup preparations', slug: 'henry-kissinger' },
    { name: 'Salvador Allende', relationship: 'Korry warned against Allende\'s election then witnessed coup', slug: 'salvador-allende' }
  ],
  'edwin-meese': [
    { name: 'Ronald Reagan', relationship: 'Attorney General under Reagan during Iran-Contra', slug: 'ronald-reagan' },
    { name: 'Oliver North', relationship: 'Meese discovered North\'s diversion scheme in Iran-Contra', slug: 'oliver-north' }
  ],
  'ernest-medina': [
    { name: 'William Calley', relationship: 'Company commander whose orders Calley carried out at My Lai', slug: 'william-calley' },
    { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot who tried to stop Medina\'s company at My Lai', slug: 'hugh-thompson-jr' },
    { name: 'Seymour Hersh', relationship: 'Journalist who exposed My Lai massacre', slug: 'seymour-hersh' }
  ],
  'eugenia-charles': [
    { name: 'Maurice Bishop', relationship: 'PM who requested US invasion after Bishop was overthrown in Grenada', slug: 'maurice-bishop' }
  ],
  'fazlollah-zahedi': [
    { name: 'Donald Wilber', relationship: 'CIA officer who planned coup that installed Zahedi', slug: 'donald-wilber' },
    { name: 'Allen Dulles', relationship: 'CIA Director who authorized 1953 Iran coup for Zahedi', slug: 'allen-dulles' },
    { name: 'Nematollah Nassiri', relationship: 'Military officer who helped execute coup alongside Zahedi', slug: 'nematollah-nassiri' }
  ],
  'francis-biddle': [
    { name: 'John L. DeWitt', relationship: 'AG during Japanese internment DeWitt ordered', slug: 'john-l-dewitt' },
    { name: 'Henry Stimson', relationship: 'War Secretary who pushed Biddle to accept internment', slug: 'henry-stimson' }
  ],
  'francois-duvalier': [
    { name: 'Jean-Claude Duvalier', relationship: 'Son "Baby Doc" who inherited dictatorship', slug: 'jean-claude-duvalier' },
    { name: 'Jean-Bertrand Aristide', relationship: 'Aristide rose against Duvalier family legacy', slug: 'jean-bertrand-aristide' }
  ],
  'freeway-ricky-ross': [
    { name: 'Oscar Danilo Blandon', relationship: 'CIA-connected supplier who sold Ross cocaine', slug: 'oscar-danilo-blandon' },
    { name: 'Norwin Meneses', relationship: 'Nicaraguan drug lord in CIA-Contra pipeline to Ross', slug: 'norwin-meneses' },
    { name: 'Gary Webb', relationship: 'Journalist who exposed CIA-Contra-Ross drug connection', slug: 'gary-webb' }
  ],
  'g-gordon-liddy': [
    { name: 'E. Howard Hunt', relationship: 'Watergate burglary partner', slug: 'e-howard-hunt' },
    { name: 'Richard Nixon', relationship: 'White House Plumber who organized Watergate break-in for Nixon', slug: 'richard-nixon' },
    { name: 'John Ehrlichman', relationship: 'Nixon aide who directed Plumbers unit', slug: 'john-ehrlichman' }
  ],
  'gary-sick': [
    { name: 'Jimmy Carter', relationship: 'NSC staff who later alleged October Surprise torpedoed Carter\'s reelection', slug: 'jimmy-carter' },
    { name: 'Cyrus Hashemi', relationship: 'Iranian intermediary in alleged October Surprise deal Sick documented', slug: 'cyrus-hashemi' }
  ],
  'geoffrey-miller': [
    { name: 'Janis Karpinski', relationship: 'Miller brought Gitmo techniques to Abu Ghraib under Karpinski', slug: 'janis-karpinski' },
    { name: 'Ricardo Sanchez', relationship: 'Iraq commander during Miller\'s Abu Ghraib visit', slug: 'ricardo-sanchez' },
    { name: 'Thomas Pappas', relationship: 'Miller ordered Pappas to "Gitmo-ize" Abu Ghraib', slug: 'thomas-pappas' }
  ],
  'george-w-cable': [
    { name: 'Frederick Douglass', relationship: 'Fellow post-Civil War racial justice advocate', slug: 'frederick-douglass' }
  ],
  'george-wallace': [
    { name: 'Bull Connor', relationship: 'Fellow Alabama segregationist', slug: 'bull-connor' },
    { name: 'Martin Luther King Jr', relationship: 'King marched in Selma against Wallace\'s segregation', slug: 'martin-luther-king-jr' },
    { name: 'Orval Faubus', relationship: 'Fellow segregationist governor who blocked school integration', slug: 'orval-faubus' }
  ],
  'gordon-hirabayashi': [
    { name: 'Minoru Yasui', relationship: 'Fellow Japanese American who challenged internment in court', slug: 'minoru-yasui' },
    { name: 'John L. DeWitt', relationship: 'Challenged DeWitt\'s internment order', slug: 'john-l-dewitt' },
    { name: 'Norman Mineta', relationship: 'Fellow Japanese American who fought for redress', slug: 'norman-mineta' }
  ],
  'henry-stimson': [
    { name: 'John L. DeWitt', relationship: 'War Secretary who supported DeWitt\'s Japanese internment', slug: 'john-l-dewitt' },
    { name: 'Francis Biddle', relationship: 'AG whose objections Stimson overrode on internment', slug: 'francis-biddle' },
    { name: 'Harry Truman', relationship: 'Advised Truman on atomic bomb decision', slug: 'harry-truman' }
  ],
  'hubertus-strughold': [
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', slug: 'wernher-von-braun' },
    { name: 'Walter Schreiber', relationship: 'Fellow Paperclip scientist', slug: 'walter-schreiber' },
    { name: 'Kurt Blome', relationship: 'Fellow Nazi Paperclip scientist', slug: 'kurt-blome' }
  ],
  'james-bamford': [
    { name: 'James Risen', relationship: 'Fellow national security journalist', slug: 'james-risen' },
    { name: 'Edward Snowden', relationship: 'Snowden revelations confirmed NSA abuses Bamford had reported', slug: 'edward-snowden' }
  ],
  'james-earl-ray': [
    { name: 'Martin Luther King Jr', relationship: 'Convicted assassin of MLK', slug: 'martin-luther-king-jr' },
    { name: 'Lloyd Jowers', relationship: 'Both implicated in conspiracy around MLK assassination', slug: 'lloyd-jowers' },
    { name: 'William Pepper', relationship: 'Attorney who represented Ray and argued conspiracy', slug: 'william-pepper' }
  ],
  'jean-claude-duvalier': [
    { name: 'Francois Duvalier', relationship: 'Father "Papa Doc" from whom Baby Doc inherited dictatorship', slug: 'francois-duvalier' },
    { name: 'Michel Martelly', relationship: 'Later Haitian leader connected to Duvalier-era forces', slug: 'michel-martelly' }
  ],
  'john-l-dewitt': [
    { name: 'Karl Bendetsen', relationship: 'Aide who helped DeWitt design Japanese internment', slug: 'karl-bendetsen' },
    { name: 'Dillon S. Myer', relationship: 'WRA director who administered camps DeWitt filled', slug: 'dillon-s-myer' },
    { name: 'Gordon Hirabayashi', relationship: 'Japanese American who challenged DeWitt\'s orders in court', slug: 'gordon-hirabayashi' },
    { name: 'Henry Stimson', relationship: 'War Secretary who endorsed DeWitt\'s internment plan', slug: 'henry-stimson' }
  ],
  'john-oliver': [
    { name: 'Edward Snowden', relationship: 'Conducted major interview with Snowden on surveillance', slug: 'edward-snowden' }
  ],
  'john-sopko': [
    { name: 'Douglas Lute', relationship: 'Fellow Afghanistan oversight figure', slug: 'douglas-lute' },
    { name: 'Bob Crowley', relationship: 'Afghanistan Papers interviewees Sopko\'s SIGAR work paralleled', slug: 'bob-crowley' }
  ],
  'karl-bendetsen': [
    { name: 'John L. DeWitt', relationship: 'Aide who helped architect Japanese internment', slug: 'john-l-dewitt' },
    { name: 'Dillon S. Myer', relationship: 'Fellow Japanese internment figure', slug: 'dillon-s-myer' },
    { name: 'Gordon Hirabayashi', relationship: 'Japanese American resistor who challenged Bendetsen\'s internment', slug: 'gordon-hirabayashi' }
  ],
  'leon-panetta': [
    { name: 'Robert Gates', relationship: 'Succeeded Gates as Secretary of Defense', slug: 'robert-gates' },
    { name: 'Barack Obama', relationship: 'CIA Director and Defense Secretary under Obama', slug: 'barack-obama' }
  ],
  'mark-hyman': [
    { name: 'Suzanne Scott', relationship: 'Fellow conservative media figure', slug: 'suzanne-scott' }
  ],
  'mark-ruffalo': [
    { name: 'Robert Bilott', relationship: 'Portrayed attorney Bilott in Dark Waters film about DuPont', slug: 'robert-bilott' },
    { name: 'Wilbur Tennant', relationship: 'Dark Waters featured Tennant\'s farmer story', slug: 'wilbur-tennant' }
  ],
  'matthew-albence': [
    { name: 'Kevin McAleenan', relationship: 'Fellow Trump immigration enforcement official', slug: 'kevin-mcaleenan' }
  ],
  'michelle-alexander': [
    { name: 'Bryan Stevenson', relationship: 'Fellow mass incarceration critic and criminal justice reformer', slug: 'bryan-stevenson' },
    { name: 'Radley Balko', relationship: 'Fellow criminal justice reform writer', slug: 'radley-balko' }
  ],
  'mike-masaoka': [
    { name: 'Norman Mineta', relationship: 'Fellow Japanese American leader during internment era', slug: 'norman-mineta' },
    { name: 'Gordon Hirabayashi', relationship: 'Masaoka\'s JACL compliance strategy conflicted with resistors like Hirabayashi', slug: 'gordon-hirabayashi' }
  ],
  'minoru-yasui': [
    { name: 'Gordon Hirabayashi', relationship: 'Fellow Japanese American internment resister', slug: 'gordon-hirabayashi' },
    { name: 'John L. DeWitt', relationship: 'Challenged DeWitt\'s curfew order in court', slug: 'john-l-dewitt' }
  ],
  'norman-mineta': [
    { name: 'Gordon Hirabayashi', relationship: 'Fellow Japanese American who fought for internment redress', slug: 'gordon-hirabayashi' },
    { name: 'Mike Masaoka', relationship: 'JACL figure during internment Mineta experienced as child', slug: 'mike-masaoka' }
  ],
  'norwin-meneses': [
    { name: 'Oscar Danilo Blandon', relationship: 'Supplied cocaine to Blandon in CIA-Contra drug pipeline', slug: 'oscar-danilo-blandon' },
    { name: 'Freeway Ricky Ross', relationship: 'End distributor of Meneses cocaine supply chain', slug: 'freeway-ricky-ross' },
    { name: 'Gary Webb', relationship: 'Journalist who exposed Meneses\'s CIA-Contra connection', slug: 'gary-webb' }
  ],
  'radley-balko': [
    { name: 'Wesley Lowery', relationship: 'Fellow journalist covering police violence', slug: 'wesley-lowery' },
    { name: 'Michelle Alexander', relationship: 'Fellow criminal justice reform writer', slug: 'michelle-alexander' }
  ],
  'richard-fink': [
    { name: 'Charles Koch', relationship: 'Koch Industries strategist who built Koch political network', slug: 'charles-koch' },
    { name: 'Tim Phillips', relationship: 'Americans for Prosperity leader Fink helped install', slug: 'tim-phillips' }
  ],
  'robert-mckee': [
    { name: 'Thomas Parran', relationship: 'Connected to PHS during Tuskegee era', slug: 'thomas-parran' }
  ],
  'ron-watkins': [
    { name: 'Jim Watkins', relationship: 'Father who owns 8chan/8kun; Ron suspected of being Q', slug: 'jim-watkins' }
  ],
  'ruha-benjamin': [
    { name: 'Joy Buolamwini', relationship: 'Fellow researcher on technology, race, and algorithmic bias', slug: 'joy-buolamwini' },
    { name: 'Cathy O\'Neil', relationship: 'Fellow scholar on algorithmic justice', slug: 'cathy-oneil' }
  ],
  'samantha-power': [
    { name: 'Susan Rice', relationship: 'Fellow Obama national security official', slug: 'susan-rice' },
    { name: 'Romeo Dallaire', relationship: 'Power wrote about failures like Rwanda that Dallaire witnessed', slug: 'romeo-dallaire' }
  ],
  'sandra-day-oconnor': [
    { name: 'Ruth Bader Ginsburg', relationship: 'Fellow female Supreme Court justice', slug: 'ruth-bader-ginsburg' }
  ],
  'sandra-serrano': [
    { name: 'Sirhan Sirhan', relationship: 'Witness at RFK assassination who reported "polka dot dress girl"', slug: 'sirhan-sirhan' }
  ],
  'scott-fitzgerald': [
    { name: 'Scott Walker', relationship: 'Wisconsin Senate leader during Walker\'s anti-union legislation', slug: 'scott-walker' },
    { name: 'Robin Vos', relationship: 'Fellow Wisconsin Republican legislative leader', slug: 'robin-vos' }
  ],
  'scott-livingston': [
    { name: 'Thomas Hofeller', relationship: 'Connected to redistricting strategy', slug: 'thomas-hofeller' }
  ],
  'sergio-arellano-stark': [
    { name: 'Augusto Pinochet', relationship: 'General who led "Caravan of Death" under Pinochet\'s orders', slug: 'augusto-pinochet' }
  ],
  'sister-helen-prejean': [
    { name: 'Bryan Stevenson', relationship: 'Fellow death penalty abolition advocate', slug: 'bryan-stevenson' }
  ],
  'stephen-cambone': [
    { name: 'Donald Rumsfeld', relationship: 'Undersecretary who channeled Rumsfeld\'s intelligence reforms', slug: 'donald-rumsfeld' },
    { name: 'Geoffrey Miller', relationship: 'Cambone directed intelligence gathering that led to Abu Ghraib abuses', slug: 'geoffrey-miller' }
  ],
  'sunny-balwani': [
    { name: 'Elizabeth Holmes', relationship: 'Theranos COO and Holmes\' partner convicted of fraud', slug: 'elizabeth-holmes' },
    { name: 'Tyler Shultz', relationship: 'Theranos whistleblower who reported fraud by Balwani and Holmes', slug: 'tyler-shultz' }
  ],
  'susan-collins': [
    { name: 'Brett Kavanaugh', relationship: 'Cast deciding vote to confirm Kavanaugh to Supreme Court', slug: 'brett-kavanaugh' }
  ],
  'theodore-roosevelt': [
    { name: 'Smedley Butler', relationship: 'Marine general who served in Roosevelt\'s imperial wars then denounced them', slug: 'smedley-butler' },
    { name: 'Woodrow Wilson', relationship: 'Successor who continued American expansionism', slug: 'woodrow-wilson' }
  ],
  'thomas-corcoran': [
    { name: 'Allen Dulles', relationship: 'Washington fixer connected to CIA operations', slug: 'allen-dulles' }
  ],
  'tim-geithner': [
    { name: 'Henry Paulson', relationship: 'Treasury predecessor during financial crisis', slug: 'henry-paulson' },
    { name: 'Robert Rubin', relationship: 'Mentor and predecessor who shaped Wall Street-friendly policy', slug: 'robert-rubin' },
    { name: 'Barack Obama', relationship: 'Treasury Secretary under Obama during bank bailouts', slug: 'barack-obama' }
  ],
  'ulysses-s-grant': [
    { name: 'William Tecumseh Sherman', relationship: 'Sherman served under Grant in Civil War', slug: 'william-tecumseh-sherman' },
    { name: 'Nathan Bedford Forrest', relationship: 'Confederate general and KKK founder Grant later fought', slug: 'nathan-bedford-forrest' },
    { name: 'Philip Sheridan', relationship: 'Fellow Union general who oversaw Indian Wars', slug: 'philip-sheridan' }
  ],
  'warren-christopher': [
    { name: 'Samantha Power', relationship: 'Fellow State Dept official; Christopher as SecState during Rwanda', slug: 'samantha-power' }
  ],
  'william-binney': [
    { name: 'Thomas Drake', relationship: 'Fellow NSA whistleblower', slug: 'thomas-drake' },
    { name: 'Edward Snowden', relationship: 'Binney\'s NSA warnings preceded and validated Snowden\'s leaks', slug: 'edward-snowden' }
  ],
  'william-black': [
    { name: 'Charles Keating', relationship: 'S&L regulator who pursued Keating\'s fraud', slug: 'charles-keating' },
    { name: 'Neil Bush', relationship: 'Fellow S&L scandal figure Black\'s regulatory work exposed', slug: 'neil-bush' }
  ],
  'william-bratton': [
    { name: 'Rudy Giuliani', relationship: 'NYC Police Commissioner under Giuliani', slug: 'rudy-giuliani' }
  ],
  'william-richmond': [
    { name: 'Thomas Parran', relationship: 'Connected to PHS during unethical research era', slug: 'thomas-parran' }
  ],
  'william-shawcross': [
    { name: 'Henry Kissinger', relationship: 'Documented Kissinger\'s Cambodia bombing campaign', slug: 'henry-kissinger' },
    { name: 'Norodom Sihanouk', relationship: 'Wrote about Sihanouk and Cambodia destruction', slug: 'norodom-sihanouk' }
  ],
  'nasser-al-awlaki': [
    { name: 'Nawar al-Awlaki', relationship: 'Grandfather fighting for accountability after 8-year-old Nawar was killed', slug: 'nawar-al-awlaki' }
  ],
  'robert-rubin': [
    { name: 'Tim Geithner', relationship: 'Mentor to Geithner; Rubin\'s deregulation led to financial crisis', slug: 'tim-geithner' },
    { name: 'Henry Paulson', relationship: 'Successor at Goldman and later Treasury', slug: 'henry-paulson' },
    { name: 'Christopher Dodd', relationship: 'Dodd-Frank reform came after crisis Rubin\'s deregulation caused', slug: 'christopher-dodd' }
  ],
  'josef-mengele': [
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi; Mengele fled while Braun was recruited', slug: 'wernher-von-braun' },
    { name: 'Efraim Zuroff', relationship: 'Nazi hunter who searched for Mengele in South America', slug: 'efraim-zuroff' }
  ],
  'martin-van-buren': [
    { name: 'Andrew Jackson', relationship: 'VP under Jackson; continued Indian Removal as president', slug: 'andrew-jackson' },
    { name: 'Winfield Scott', relationship: 'General who carried out Cherokee removal under Van Buren', slug: 'winfield-scott' }
  ],
  'winfield-scott': [
    { name: 'Martin Van Buren', relationship: 'Carried out Trail of Tears under Van Buren\'s orders', slug: 'martin-van-buren' },
    { name: 'James Knox Polk', relationship: 'Led Mexico invasion under Polk', slug: 'james-knox-polk' }
  ],
  'christopher-dodd': [
    { name: 'Robert Rubin', relationship: 'Dodd-Frank reform addressed crisis Rubin\'s deregulation caused', slug: 'robert-rubin' },
    { name: 'Tim Geithner', relationship: 'Treasury Sec during Dodd-Frank debate', slug: 'tim-geithner' }
  ],
  'henry-paulson': [
    { name: 'Tim Geithner', relationship: 'Fed chair during Paulson\'s Treasury term; both managed 2008 crisis', slug: 'tim-geithner' },
    { name: 'Robert Rubin', relationship: 'Fellow Goldman-to-Treasury Secretary', slug: 'robert-rubin' },
    { name: 'Lloyd Blankfein', relationship: 'Goldman CEO during Paulson\'s bank bailout', slug: 'lloyd-blankfein' }
  ],
  'rutherford-b-hayes': [
    { name: 'Nathan Bedford Forrest', relationship: 'Ended Reconstruction enabling Forrest\'s KKK-era suppression', slug: 'nathan-bedford-forrest' }
  ],
  'queen-isabella': [
    { name: 'Bartolome de las Casas', relationship: 'Spanish friar who documented abuses Isabella\'s colonization caused', slug: 'bartolome-de-las-casas' }
  ],
  'bartolome-de-las-casas': [
    { name: 'Queen Isabella', relationship: 'Documented genocide caused by Isabella\'s colonial enterprise', slug: 'queen-isabella' }
  ],
  'chris-krebs': [
    { name: 'Donald Trump', relationship: 'CISA Director fired by Trump for confirming 2020 election was secure', slug: 'donald-trump' }
  ],
  'michael-fanone': [
    { name: 'Donald Trump', relationship: 'Officer assaulted during Jan 6 Capitol attack Trump incited', slug: 'donald-trump' }
  ]
};

insertKnownAssociates(data);
