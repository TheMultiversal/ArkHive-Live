const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 10: margaret through oscar profiles
const data = {
  'margaret-chase-smith': [
    { name: 'Joseph McCarthy', relationship: 'Delivered "Declaration of Conscience" speech against McCarthyism', slug: 'joseph-mccarthy' }
  ],
  'margaret-sanger': [
    { name: 'Harry Laughlin', relationship: 'Eugenics figure who intersected with Sanger\'s birth control movement', slug: 'harry-laughlin' },
    { name: 'Paul Popenoe', relationship: 'Fellow eugenics-connected figure in reproductive policy', slug: 'paul-popenoe' }
  ],
  'marjorie-dannenfelser': [
    { name: 'Lynn Fitch', relationship: 'Mississippi AG who brought Dobbs case Dannenfelser supported', slug: 'lynn-fitch' }
  ],
  'mark-brnovich': [
    { name: 'Donald Trump', relationship: 'Arizona AG pressured by Trump to overturn 2020 election results', slug: 'donald-trump' }
  ],
  'mark-clark': [
    { name: 'Fred Hampton', relationship: 'Killed alongside Hampton in Chicago police raid', slug: 'fred-hampton' },
    { name: 'Edward Hanrahan', relationship: 'State\'s Attorney who authorized raid that killed Clark and Hampton', slug: 'edward-hanrahan' }
  ],
  'mark-lane': [
    { name: 'Lee Harvey Oswald', relationship: 'JFK assassination researcher who challenged Warren Commission findings on Oswald', slug: 'lee-harvey-oswald' },
    { name: 'Jim Garrison', relationship: 'Supported Garrison\'s JFK conspiracy prosecution', slug: 'jim-garrison' }
  ],
  'mark-madoff': [
    { name: 'Bernie Madoff', relationship: 'Son who reported father\'s Ponzi scheme; later died by suicide', slug: 'bernie-madoff' },
    { name: 'Peter Madoff', relationship: 'Uncle who was also at Madoff firm', slug: 'peter-madoff' },
    { name: 'Ruth Madoff', relationship: 'Mother who chose to stay with Bernie initially', slug: 'ruth-madoff' }
  ],
  'marshall-green': [
    { name: 'Suharto', relationship: 'US Ambassador who supported Suharto\'s rise to power', slug: 'suharto' },
    { name: 'Robert Martens', relationship: 'Embassy staffer who provided kill lists under Green', slug: 'robert-martens' }
  ],
  'martin-tabert': [
    { name: 'C. Sidney Carlton', relationship: 'Convict leasing system figure connected to Tabert\'s death', slug: 'c-sidney-carlton' }
  ],
  'martin-wheatley': [
    { name: 'Tom Hayes', relationship: 'LIBOR scandal figure; Wheatley led FCA investigation', slug: 'tom-hayes' },
    { name: 'Mervyn King', relationship: 'Bank of England during LIBOR era', slug: 'mervyn-king' }
  ],
  'mary-alice-relf': [
    { name: 'Minnie Lee Relf', relationship: 'Sister who was also sterilized without consent', slug: 'minnie-lee-relf' }
  ],
  'mary-kathryn-nagle': [
    { name: 'Lisa Brunner', relationship: 'Fellow MMIW advocate', slug: 'lisa-brunner' },
    { name: 'Savanna LaFontaine-Greywind', relationship: 'MMIW case Nagle documented', slug: 'savanna-lafontaine-greywind' }
  ],
  'mary-turner': [
    { name: 'Ida B. Wells', relationship: 'Wells\' anti-lynching work documented mass violence like Turner\'s killing', slug: 'ida-b-wells' }
  ],
  'matthias-mueller': [
    { name: 'Herbert Diess', relationship: 'Successor as VW CEO', slug: 'herbert-diess' },
    { name: 'Oliver Schmidt', relationship: 'VW executive imprisoned during Mueller\'s tenure', slug: 'oliver-schmidt' },
    { name: 'Daniel Carder', relationship: 'WVU researcher who discovered VW emissions cheating', slug: 'daniel-carder' }
  ],
  'maude-devictor': [
    { name: 'Bobby Muller', relationship: 'Fellow Agent Orange/veterans advocacy figure', slug: 'bobby-muller' }
  ],
  'maura-healey': [
    { name: 'Richard Sackler', relationship: 'MA AG who sued Sackler family over opioid crisis', slug: 'richard-sackler' }
  ],
  'maurice-bishop': [
    { name: 'Hudson Austin', relationship: 'Military leader who overthrew and killed Bishop', slug: 'hudson-austin' },
    { name: 'Bernard Coard', relationship: 'Deputy who turned against Bishop in coup', slug: 'bernard-coard' }
  ],
  'mauricio-rodriguez-sanchez': [
    { name: 'Efrain Rios Montt', relationship: 'Intelligence chief under Rios Montt during genocide', slug: 'efrain-rios-montt' }
  ],
  'max-baucus': [
    { name: 'Liz Fowler', relationship: 'Baucus staffer who wrote ACA provisions favorable to insurers', slug: 'liz-fowler' },
    { name: 'Karen Ignagni', relationship: 'AHIP president who lobbied Baucus on health reform', slug: 'karen-ignagni' }
  ],
  'maxwell-thurman': [
    { name: 'Marc Cisneros', relationship: 'Fellow commander during US invasion of Panama', slug: 'marc-cisneros' }
  ],
  'mcgeorge-bundy': [
    { name: 'Robert McNamara', relationship: 'Fellow Vietnam War architect under JFK and LBJ', slug: 'robert-mcnamara' },
    { name: 'Dean Rusk', relationship: 'Secretary of State alongside Bundy as NSA', slug: 'dean-rusk' },
    { name: 'Lyndon Johnson', relationship: 'National Security Advisor under LBJ', slug: 'lyndon-johnson' }
  ],
  'medgar-evers': [
    { name: 'Martin Luther King Jr', relationship: 'Fellow civil rights leader; assassination galvanized movement', slug: 'martin-luther-king-jr' },
    { name: 'Byron De La Beckwith', relationship: 'White supremacist who assassinated Evers', slug: 'byron-de-la-beckwith' }
  ],
  'mervyn-king': [
    { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR scandal King investigated', slug: 'bob-diamond' },
    { name: 'Paul Tucker', relationship: 'Bank of England deputy implicated in LIBOR communications', slug: 'paul-tucker' },
    { name: 'Marcus Agius', relationship: 'Barclays chairman during LIBOR scandal', slug: 'marcus-agius' }
  ],
  'michael-friedman': [
    { name: 'Howard Udell', relationship: 'Fellow Purdue Pharma exec who pled guilty to OxyContin fraud', slug: 'howard-udell' },
    { name: 'Paul Goldenheim', relationship: 'Fellow Purdue exec convicted alongside Friedman', slug: 'paul-goldenheim' },
    { name: 'Richard Sackler', relationship: 'Sackler family head who directed marketing Friedman executed', slug: 'richard-sackler' }
  ],
  'michael-oliver': [
    { name: 'Thomas Jackson', relationship: 'Ferguson police figure', slug: 'thomas-jackson' }
  ],
  'michael-powell': [
    { name: 'Frank Powell', relationship: 'MOVE bombing figure (different Michael Powell connected to police)', slug: 'frank-powell' }
  ],
  'michael-regan': [
    { name: 'Marc Edwards', relationship: 'EPA administrator during ongoing environmental justice work', slug: 'marc-edwards' }
  ],
  'michael-townley': [
    { name: 'Orlando Letelier', relationship: 'DINA agent who assassinated Letelier in Washington DC', slug: 'orlando-letelier' },
    { name: 'Augusto Pinochet', relationship: 'Pinochet\'s secret police agent who carried out assassinations', slug: 'augusto-pinochet' },
    { name: 'Stefano Delle Chiaie', relationship: 'Fellow Operation Condor operative', slug: 'stefano-delle-chiaie' }
  ],
  'michel-martelly': [
    { name: 'Jean-Bertrand Aristide', relationship: 'Political rival and former Haitian president', slug: 'jean-bertrand-aristide' },
    { name: 'Jean-Claude Duvalier', relationship: 'Martelly allegedly connected to Duvalier-era forces', slug: 'jean-claude-duvalier' }
  ],
  'miguel-cardona': [
    { name: 'Betsy DeVos', relationship: 'Successor as Education Secretary who reversed DeVos policies', slug: 'betsy-devos' }
  ],
  'mike-moore': [
    { name: 'Richard Scruggs', relationship: 'Attorney partner in Mississippi tobacco lawsuit', slug: 'richard-scruggs' }
  ],
  'mike-williams': [
    { name: 'Jimmy Harrell', relationship: 'Transocean supervisor on Deepwater Horizon', slug: 'jimmy-harrell' },
    { name: 'Donald Vidrine', relationship: 'BP supervisor on rig during blowout', slug: 'donald-vidrine' }
  ],
  'minnie-lee-relf': [
    { name: 'Mary Alice Relf', relationship: 'Sister who was also involuntarily sterilized', slug: 'mary-alice-relf' }
  ],
  'mohamed-farrah-aidid': [
    { name: 'Les Aspin', relationship: 'Defense Secretary during Battle of Mogadishu against Aidid', slug: 'les-aspin' }
  ],
  'mona-hanna-attisha': [
    { name: 'Marc Edwards', relationship: 'Virginia Tech scientist who tested Flint water alongside Hanna-Attisha', slug: 'marc-edwards' },
    { name: 'LeeAnne Walters', relationship: 'Flint resident whose water testing sparked investigation', slug: 'leeanne-walters' },
    { name: 'Rick Snyder', relationship: 'Michigan governor whose administration caused Flint water crisis', slug: 'rick-snyder' }
  ],
  'moses-wright': [
    { name: 'Mamie Till-Mobley', relationship: 'Emmett\'s mother; Wright testified identifying killers', slug: 'mamie-till-mobley' },
    { name: 'Roy Bryant', relationship: 'Bravely pointed out Bryant as Emmett Till\'s kidnapper in court', slug: 'roy-bryant' }
  ],
  'muammar-gaddafi': [
    { name: 'Khalifa Haftar', relationship: 'Former general who later fought for control of post-Gaddafi Libya', slug: 'khalifa-haftar' },
    { name: 'Nicolas Sarkozy', relationship: 'French president who led NATO intervention toppling Gaddafi', slug: 'nicolas-sarkozy' },
    { name: 'Hillary Clinton', relationship: 'Secretary of State during Libya intervention', slug: 'hillary-clinton' }
  ],
  'muhammad-abdul-aziz': [
    { name: 'Khalil Islam', relationship: 'Fellow wrongfully convicted man in Malcolm X assassination', slug: 'khalil-islam' },
    { name: 'Malcolm X', relationship: 'Wrongfully convicted of assassinating Malcolm X; exonerated 2021', slug: 'malcolm-x' }
  ],
  'mujahid-abdul-halim': [
    { name: 'Malcolm X', relationship: 'Actual shooter who killed Malcolm X', slug: 'malcolm-x' },
    { name: 'Muhammad Abdul Aziz', relationship: 'Wrongfully convicted alongside Halim for Malcolm X murder', slug: 'muhammad-abdul-aziz' }
  ],
  'naomi-oreskes': [
    { name: 'James Black', relationship: 'Documented Exxon\'s suppression of Black\'s climate research', slug: 'james-black' },
    { name: 'Lee Raymond', relationship: 'Exxon CEO whose climate denial Oreskes exposed', slug: 'lee-raymond' }
  ],
  'nathan-bedford-forrest': [
    { name: 'Ulysses S. Grant', relationship: 'Union general who fought Forrest; later sent troops against KKK', slug: 'ulysses-s-grant' }
  ],
  'nathan-wessler': [
    { name: 'Rashida Richardson', relationship: 'Fellow digital rights and surveillance accountability advocate', slug: 'rashida-richardson' }
  ],
  'nawar-al-awlaki': [
    { name: 'Nasser al-Awlaki', relationship: 'Grandfather who fought for accountability after Nawar was killed', slug: 'nasser-al-awlaki' }
  ],
  'nawaz-sharif': [
    { name: 'Sigmundur Gunnlaugsson', relationship: 'Fellow leader exposed by Panama Papers', slug: 'sigmundur-gunnlaugsson' }
  ],
  'neil-bush': [
    { name: 'George H.W. Bush', relationship: 'Son involved in Silverado Banking savings and loan scandal', slug: 'george-hw-bush' },
    { name: 'Charles Keating', relationship: 'Fellow S&L scandal figure', slug: 'charles-keating' }
  ],
  'neil-sheehan': [
    { name: 'Daniel Ellsberg', relationship: 'Reporter who received Pentagon Papers from Ellsberg', slug: 'daniel-ellsberg' },
    { name: 'John Paul Vann', relationship: 'Wrote definitive book about Vann\'s Vietnam story', slug: 'john-paul-vann' }
  ],
  'nelson-brickham': [
    { name: 'William Colby', relationship: 'CIA Director who oversaw Phoenix Program Brickham designed', slug: 'william-colby' },
    { name: 'K. Barton Osborn', relationship: 'Intelligence officer who witnessed Phoenix torture', slug: 'k-barton-osborn' }
  ],
  'nelson-mandela': [
    { name: 'P.W. Botha', relationship: 'Apartheid president who imprisoned Mandela', slug: 'pw-botha' },
    { name: 'Randall Robinson', relationship: 'Anti-apartheid activist who fought for Mandela\'s release', slug: 'randall-robinson' },
    { name: 'Desmond Tutu', relationship: 'Fellow anti-apartheid leader and Truth Commission chair', slug: 'desmond-tutu' }
  ],
  'nematollah-nassiri': [
    { name: 'Fazlollah Zahedi', relationship: 'General installed by 1953 coup Nassiri helped execute', slug: 'fazlollah-zahedi' }
  ],
  'nguyen-viet-nhan': [
    { name: 'Ton That Tung', relationship: 'Fellow Vietnamese documenting Agent Orange effects', slug: 'ton-that-tung' }
  ],
  'nicolas-sarkozy': [
    { name: 'Muammar Gaddafi', relationship: 'Led NATO intervention toppling Gaddafi', slug: 'muammar-gaddafi' }
  ],
  'nicole-smith-holt': [
    { name: 'Stephen Hemsley', relationship: 'UnitedHealth CEO whose company denied affordable insulin', slug: 'stephen-hemsley' }
  ],
  'nijeer-parks': [
    { name: 'Porcha Woodruff', relationship: 'Fellow victim of wrongful arrest by facial recognition', slug: 'porcha-woodruff' },
    { name: 'Joy Buolamwini', relationship: 'AI researcher documenting facial recognition bias that harmed Parks', slug: 'joy-buolamwini' }
  ],
  'nishad-singh': [
    { name: 'Sam Bankman-Fried', relationship: 'FTX engineering director who cooperated against SBF', slug: 'sam-bankman-fried' },
    { name: 'Caroline Ellison', relationship: 'Fellow FTX/Alameda insider who cooperated with prosecutors', slug: 'caroline-ellison' },
    { name: 'Gary Wang', relationship: 'Fellow FTX co-founder who cooperated', slug: 'gary-wang' }
  ],
  'norman-schwarzkopf': [
    { name: 'George H.W. Bush', relationship: 'Commander of Desert Storm under Bush', slug: 'george-hw-bush' },
    { name: 'Colin Powell', relationship: 'Joint Chiefs Chairman during Schwarzkopf\'s Gulf War command', slug: 'colin-powell' }
  ],
  'norodom-sihanouk': [
    { name: 'Lon Nol', relationship: 'General who overthrew Sihanouk in US-backed coup', slug: 'lon-nol' },
    { name: 'Pol Pot', relationship: 'Khmer Rouge leader who nominally allied with then betrayed Sihanouk', slug: 'pol-pot' }
  ],
  'oliver-schmidt': [
    { name: 'Herbert Diess', relationship: 'VW executive during Schmidt\'s emissions fraud', slug: 'herbert-diess' },
    { name: 'Matthias Mueller', relationship: 'VW CEO during Schmidt\'s prosecution', slug: 'matthias-mueller' },
    { name: 'James Liang', relationship: 'Fellow VW engineer convicted in dieselgate', slug: 'james-liang' }
  ],
  'oliver-wendell-holmes': [
    { name: 'Carrie Buck', relationship: 'Wrote Buck v. Bell decision authorizing forced sterilization', slug: 'carrie-buck' },
    { name: 'Harry Laughlin', relationship: 'Holmes upheld sterilization law based on Laughlin\'s model', slug: 'harry-laughlin' }
  ],
  'orlando-letelier': [
    { name: 'Michael Townley', relationship: 'DINA agent who planted car bomb killing Letelier', slug: 'michael-townley' },
    { name: 'Augusto Pinochet', relationship: 'Pinochet ordered Letelier\'s assassination in Washington DC', slug: 'augusto-pinochet' },
    { name: 'Rene Schneider', relationship: 'Fellow Chilean victim of political assassination', slug: 'rene-schneider' }
  ],
  'orval-faubus': [
    { name: 'George Wallace', relationship: 'Fellow segregationist governor who blocked school integration', slug: 'george-wallace' },
    { name: 'Dwight D. Eisenhower', relationship: 'Eisenhower sent troops to override Faubus at Little Rock', slug: 'dwight-d-eisenhower' }
  ],
  'orville-kelly': [
    { name: 'Tom Saffer', relationship: 'Fellow atomic veteran who fought for recognition', slug: 'tom-saffer' },
    { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to nuclear testing', slug: 'stafford-warren' }
  ],
  'oscar-danilo-blandon': [
    { name: 'Freeway Ricky Ross', relationship: 'Main cocaine buyer in CIA-Contra drug pipeline', slug: 'freeway-ricky-ross' },
    { name: 'Norwin Meneses', relationship: 'Nicaraguan drug lord who supplied Blandon', slug: 'norwin-meneses' },
    { name: 'Oliver North', relationship: 'Iran-Contra figure connected to drug pipeline', slug: 'oliver-north' }
  ],
  'oscar-romero': [
    { name: 'Roberto DAubuisson', relationship: 'Death squad leader who ordered Romero\'s assassination', slug: 'roberto-daubuisson' },
    { name: 'Elliott Abrams', relationship: 'Reagan official who downplayed Romero\'s assassination', slug: 'elliott-abrams' },
    { name: 'Rufina Amaya', relationship: 'Fellow Salvadoran victim of military violence Romero denounced', slug: 'rufina-amaya' }
  ],
  'otto-perez-molina': [
    { name: 'Efrain Rios Montt', relationship: 'Rose through military during Rios Montt\'s genocide', slug: 'efrain-rios-montt' },
    { name: 'Alvaro Colom', relationship: 'Predecessor as Guatemalan president', slug: 'alvaro-colom' }
  ]
};

insertKnownAssociates(data);
