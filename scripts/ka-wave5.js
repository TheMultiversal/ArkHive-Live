const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 5: C-Z profiles (alphabetical from missing list)
const data = {
  'christian-bittar': [
    { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation trader', slug: 'tom-hayes' },
    { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR scandal period', slug: 'bob-diamond' }
  ],
  'christopher-cox': [
    { name: 'Henry Paulson', relationship: 'Treasury Secretary during financial crisis when Cox led SEC', slug: 'henry-paulson' },
    { name: 'Bernie Madoff', relationship: 'SEC failed to catch Madoff under Cox\'s chairmanship', slug: 'bernie-madoff' }
  ],
  'christopher-soghoian': [
    { name: 'Edward Snowden', relationship: 'Fellow surveillance critic whose work exposed similar programs', slug: 'edward-snowden' },
    { name: 'Nathan Wessler', relationship: 'Fellow ACLU technology privacy advocate', slug: 'nathan-wessler' }
  ],
  'chuck-grassley': [
    { name: 'Dianne Feinstein', relationship: 'Senate Judiciary Committee counterpart for decades', slug: 'dianne-feinstein' },
    { name: 'James Comer', relationship: 'Republican investigative ally in Congress', slug: 'james-comer' }
  ],
  'chuck-hoskin-jr': [
    { name: 'Juana Majel-Dixon', relationship: 'Fellow tribal leader advocating for Native rights', slug: 'juana-majel-dixon' }
  ],
  'clair-patterson': [
    { name: 'Robert Kehoe', relationship: 'Lead industry scientist who opposed Patterson\'s findings', slug: 'robert-kehoe' },
    { name: 'Herbert Needleman', relationship: 'Fellow scientist who fought lead poisoning', slug: 'herbert-needleman' },
    { name: 'Thomas Midgley', relationship: 'Inventor of leaded gasoline that Patterson proved toxic', slug: 'thomas-midgley' }
  ],
  'clare-garvie': [
    { name: 'Joy Buolamwini', relationship: 'Fellow facial recognition technology critic and researcher', slug: 'joy-buolamwini' },
    { name: 'Rashida Richardson', relationship: 'Fellow AI surveillance researcher and critic', slug: 'rashida-richardson' }
  ],
  'claudia-peterson': [
    { name: 'Jerry Ensminger', relationship: 'Fellow Camp Lejeune contamination advocate', slug: 'jerry-ensminger' }
  ],
  'claudia-russ-anderson': [
    { name: 'Maura Healey', relationship: 'Fellow state AG pursuing opioid litigation', slug: 'maura-healey' }
  ],
  'clay-shaw': [
    { name: 'Jim Garrison', relationship: 'Prosecuted by Garrison for JFK assassination conspiracy', slug: 'jim-garrison' },
    { name: 'Lee Harvey Oswald', relationship: 'Garrison alleged Shaw conspired with Oswald', slug: 'lee-harvey-oswald' },
    { name: 'David Atlee Phillips', relationship: 'CIA officer connected to anti-Castro operations Shaw was linked to', slug: 'david-atlee-phillips' }
  ],
  'cliff-baxter': [
    { name: 'Jeffrey Skilling', relationship: 'Enron vice chairman under Skilling who planned to testify', slug: 'jeffrey-skilling' },
    { name: 'Sherron Watkins', relationship: 'Fellow Enron insider who raised alarm about fraud', slug: 'sherron-watkins' }
  ],
  'coretta-scott-king': [
    { name: 'Martin Luther King Jr', relationship: 'Wife and partner in civil rights movement', slug: 'martin-luther-king-jr' },
    { name: 'Ralph Abernathy', relationship: 'MLK\'s closest ally who supported Coretta after assassination', slug: 'ralph-abernathy' },
    { name: 'Dexter King', relationship: 'Son who continued family\'s quest for assassination truth', slug: 'dexter-king' }
  ],
  'courtney-bowden': [
    { name: 'Jennifer Bates', relationship: 'Fellow Amazon labor activist', slug: 'jennifer-bates' }
  ],
  'craig-haney': [
    { name: 'Thomas Silverstein', relationship: 'Psychologist who studied effects of solitary exemplified by Silverstein', slug: 'thomas-silverstein' },
    { name: 'Albert Woodfox', relationship: 'Studied psychological effects of prolonged solitary like Woodfox endured', slug: 'albert-woodfox' }
  ],
  'craig-whitlock': [
    { name: 'John Sopko', relationship: 'SIGAR inspector whose Afghanistan reports aligned with Whitlock\'s exposé', slug: 'john-sopko' },
    { name: 'Daniel Ellsberg', relationship: 'Pentagon Papers leaker - Whitlock exposed similar Afghanistan deception', slug: 'daniel-ellsberg' }
  ],
  'curtis-wright': [
    { name: 'Richard Sackler', relationship: 'FDA official who approved OxyContin then joined Purdue consulting', slug: 'richard-sackler' }
  ],
  'curveball': [
    { name: 'Colin Powell', relationship: 'Powell used Curveball\'s fabricated intelligence in UN Iraq presentation', slug: 'colin-powell' },
    { name: 'George Tenet', relationship: 'CIA director who vouched for Curveball\'s discredited WMD claims', slug: 'george-tenet' }
  ],
  'cyrus-hashemi': [
    { name: 'Gary Sick', relationship: 'Sick investigated October Surprise involving Hashemi', slug: 'gary-sick' },
    { name: 'William Casey', relationship: 'CIA director allegedly involved in October Surprise with Hashemi', slug: 'william-casey' }
  ],
  'cyrus-vance-jr': [
    { name: 'Alvin Bragg', relationship: 'Predecessor as Manhattan DA - began Trump investigation', slug: 'alvin-bragg' },
    { name: 'Harvey Weinstein', relationship: 'Criticized for initially declining to prosecute Weinstein', slug: 'harvey-weinstein' }
  ],
  'dale-folwell': [
    { name: 'Stephen Hemsley', relationship: 'UnitedHealth executive whose pricing Folwell challenged', slug: 'stephen-hemsley' }
  ],
  'dallas-goldtooth': [
    { name: 'Chase Iron Eyes', relationship: 'Fellow Indigenous activist at Standing Rock', slug: 'chase-iron-eyes' },
    { name: 'LaDonna Brave Bull Allard', relationship: 'Fellow Standing Rock protector', slug: 'ladonna-brave-bull-allard' },
    { name: 'Kelcy Warren', relationship: 'Energy Transfer CEO whose Dakota Access Pipeline Goldtooth opposed', slug: 'kelcy-warren' }
  ],
  'dalton-trumbo': [
    { name: 'Joseph McCarthy', relationship: 'Era of McCarthyism that led to Trumbo\'s blacklisting', slug: 'joseph-mccarthy' },
    { name: 'J. Parnell Thomas', relationship: 'HUAC chairman who cited Trumbo for contempt', slug: 'j-parnell-thomas' },
    { name: 'Elia Kazan', relationship: 'Fellow Hollywood figure who cooperated with HUAC unlike Trumbo', slug: 'elia-kazan' }
  ],
  'dan-moldea': [
    { name: 'Sirhan Sirhan', relationship: 'Investigative journalist who wrote about RFK assassination and Sirhan', slug: 'sirhan-sirhan' },
    { name: 'Robert Houghton', relationship: 'LAPD detective whose RFK investigation Moldea examined', slug: 'robert-houghton' }
  ],
  'daniel-cameron': [
    { name: 'Breonna Taylor', relationship: 'Kentucky AG who presented Taylor shooting to grand jury', slug: 'breonna-taylor' },
    { name: 'Brett Hankison', relationship: 'Only officer indicted under Cameron\'s Taylor grand jury', slug: 'brett-hankison' }
  ],
  'daniel-carder': [
    { name: 'Arvind Thiruvengadam', relationship: 'WVU colleague who co-discovered VW emissions cheat', slug: 'arvind-thiruvengadam' },
    { name: 'Matthias Mueller', relationship: 'VW CEO who managed aftermath of scandal Carder uncovered', slug: 'matthias-mueller' }
  ],
  'daniel-ellsberg': [
    { name: 'Anthony Russo', relationship: 'Co-leaked Pentagon Papers', slug: 'anthony-russo' },
    { name: 'Neil Sheehan', relationship: 'NY Times reporter who published Pentagon Papers', slug: 'neil-sheehan' },
    { name: 'Richard Nixon', relationship: 'Nixon administration tried to discredit Ellsberg', slug: 'richard-nixon' },
    { name: 'Edward Snowden', relationship: 'Fellow government whistleblower who leaked classified documents', slug: 'edward-snowden' }
  ],
  'daniel-hamburger': [
    { name: 'Betsy DeVos', relationship: 'For-profit education leader during DeVos\'s deregulation era', slug: 'betsy-devos' }
  ],
  'daniel-patrick-moynihan': [
    { name: 'Richard Nixon', relationship: 'Served in Nixon White House and shaped welfare policy', slug: 'richard-nixon' },
    { name: 'Robert Moses', relationship: 'Both shaped New York public policy for decades', slug: 'robert-moses' }
  ],
  'daniel-rigmaiden': [
    { name: 'Christopher Soghoian', relationship: 'Both worked to expose Stingray surveillance technology', slug: 'christopher-soghoian' },
    { name: 'Nathan Wessler', relationship: 'ACLU lawyer who fought surveillance Rigmaiden exposed', slug: 'nathan-wessler' }
  ],
  'daniele-ganser': [
    { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose testimony informed Ganser\'s research', slug: 'vincenzo-vinciguerra' },
    { name: 'Giulio Andreotti', relationship: 'Italian PM whose Gladio connections Ganser documented', slug: 'giulio-andreotti' }
  ],
  'danny-wall': [
    { name: 'Charles Keating', relationship: 'S&L regulator who failed to act against Keating', slug: 'charles-keating' },
    { name: 'Edwin Gray', relationship: 'Predecessor as S&L regulator who tried to stop Keating', slug: 'edwin-gray' }
  ],
  'daphne-caruana-galizia': [
    { name: 'Bastian Obermayer', relationship: 'Fellow journalist who exposed offshore corruption via Panama Papers', slug: 'bastian-obermayer' },
    { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca co-founder whose clients Galizia investigated', slug: 'jurgen-mossack' }
  ],
  'darlene-keju': [
    { name: 'John Anjain', relationship: 'Fellow Marshall Islands nuclear testing survivor and advocate', slug: 'john-anjain' },
    { name: 'Lewis Strauss', relationship: 'AEC chairman who authorized Pacific nuclear tests', slug: 'lewis-strauss' }
  ],
  'darnell-earley': [
    { name: 'Rick Snyder', relationship: 'Michigan governor who appointed Earley as Flint emergency manager', slug: 'rick-snyder' },
    { name: 'Marc Edwards', relationship: 'Engineer who exposed Flint water crisis under Earley\'s management', slug: 'marc-edwards' }
  ],
  'darrell-issa': [
    { name: 'Eric Holder', relationship: 'Led House investigation that held Holder in contempt over Fast and Furious', slug: 'eric-holder' },
    { name: 'James Comer', relationship: 'Fellow Republican House investigator', slug: 'james-comer' }
  ],
  'daryl-gates': [
    { name: 'Rodney King', relationship: 'LAPD chief during King beating and LA riots', slug: 'rodney-king' },
    { name: 'Charlie Beck', relationship: 'Later LAPD chief who inherited Gates\'s legacy', slug: 'charlie-beck' },
    { name: 'William Bratton', relationship: 'LAPD chief who reformed department after Gates era', slug: 'william-bratton' }
  ],
  'dave-archambault-ii': [
    { name: 'Chase Iron Eyes', relationship: 'Fellow Standing Rock leader', slug: 'chase-iron-eyes' },
    { name: 'LaDonna Brave Bull Allard', relationship: 'Standing Rock elder and DAPL resistance leader', slug: 'ladonna-brave-bull-allard' },
    { name: 'Kelcy Warren', relationship: 'Energy Transfer Partners CEO behind Dakota Access Pipeline', slug: 'kelcy-warren' }
  ],
  'david-atlee-phillips': [
    { name: 'James Angleton', relationship: 'CIA counterintelligence chief during Phillips operations', slug: 'james-angleton' },
    { name: 'Carlos Castillo Armas', relationship: 'Led Guatemala coup Phillips helped orchestrate', slug: 'carlos-castillo-armas' },
    { name: 'Lee Harvey Oswald', relationship: 'Phillips allegedly connected to Oswald in anti-Castro operations', slug: 'lee-harvey-oswald' }
  ],
  'david-boies': [
    { name: 'Harvey Weinstein', relationship: 'Attorney who hired investigators to suppress Weinstein accusers', slug: 'harvey-weinstein' },
    { name: 'Elizabeth Holmes', relationship: 'Theranos board member and legal advisor', slug: 'elizabeth-holmes' },
    { name: 'Roberta Kaplan', relationship: 'Fellow prominent trial attorney', slug: 'roberta-kaplan' }
  ],
  'david-duncan': [
    { name: 'Jeffrey Skilling', relationship: 'Arthur Andersen auditor who shredded Enron documents', slug: 'jeffrey-skilling' },
    { name: 'Andrew Fastow', relationship: 'Enron CFO whose fraudulent entities Duncan failed to flag', slug: 'andrew-fastow' }
  ],
  'david-greenglass': [
    { name: 'Julius Rosenberg', relationship: 'Brother-in-law whose testimony led to Rosenberg execution', slug: 'julius-rosenberg' },
    { name: 'Ethel Rosenberg', relationship: 'Sister whom Greenglass testified against', slug: 'ethel-rosenberg' }
  ],
  'david-keene': [
    { name: 'Wayne LaPierre', relationship: 'Predecessor as NRA president', slug: 'wayne-lapierre' }
  ],
  'david-kessler': [
    { name: 'Geoffrey Bible', relationship: 'Philip Morris CEO whom Kessler regulated as FDA commissioner', slug: 'geoffrey-bible' },
    { name: 'Jeffrey Wigand', relationship: 'Tobacco whistleblower who aided Kessler\'s FDA investigation', slug: 'jeffrey-wigand' }
  ],
  'david-koresh': [
    { name: 'Byron Sage', relationship: 'FBI negotiator during Waco siege', slug: 'byron-sage' },
    { name: 'Jeff Jamar', relationship: 'FBI commander at Waco siege', slug: 'jeff-jamar' },
    { name: 'Janet Reno', relationship: 'Attorney General who authorized final assault on Waco compound', slug: 'janet-reno' }
  ],
  'david-kotz': [
    { name: 'Harry Markopolos', relationship: 'Whistleblower whose Madoff warnings Kotz investigated SEC for ignoring', slug: 'harry-markopolos' },
    { name: 'Bernie Madoff', relationship: 'SEC Inspector General who investigated agency failure to catch Madoff', slug: 'bernie-madoff' }
  ],
  'david-petraeus': [
    { name: 'Stanley McChrystal', relationship: 'Predecessor commanding Afghanistan operations', slug: 'stanley-mcchrystal' },
    { name: 'Barack Obama', relationship: 'CIA Director under Obama before resignation', slug: 'barack-obama' },
    { name: 'L. Paul Bremer', relationship: 'Iraq administrator whose failures Petraeus tried to correct with surge', slug: 'l-paul-bremer' }
  ],
  'david-rainey': [
    { name: 'Tony Hayward', relationship: 'BP CEO during Deepwater Horizon when Rainey was VP', slug: 'tony-hayward' },
    { name: 'Donald Vidrine', relationship: 'Fellow BP official during Deepwater Horizon disaster', slug: 'donald-vidrine' }
  ],
  'david-smith': [
    { name: 'Chris Ripley', relationship: 'Sinclair Broadcasting colleague', slug: 'chris-ripley' }
  ],
  'david-thibodeau': [
    { name: 'David Koresh', relationship: 'Branch Davidian survivor of Waco siege', slug: 'david-koresh' },
    { name: 'Ruth Riddle', relationship: 'Fellow Waco survivor', slug: 'ruth-riddle' }
  ],
  'david-voth': [
    { name: 'John Dodson', relationship: 'ATF colleague who became Fast and Furious whistleblower', slug: 'john-dodson' },
    { name: 'Kenneth Melson', relationship: 'ATF acting director during Fast and Furious', slug: 'kenneth-melson' }
  ],
  'dawn-wooten': [
    { name: 'Mahendra Amin', relationship: 'Doctor at Irwin County whose procedures Wooten exposed', slug: 'mahendra-amin' },
    { name: 'Matthew Albence', relationship: 'ICE director during detention facility abuses', slug: 'matthew-albence' }
  ],
  'dean-rusk': [
    { name: 'Lyndon Johnson', relationship: 'Secretary of State under LBJ during Vietnam escalation', slug: 'lyndon-johnson' },
    { name: 'McGeorge Bundy', relationship: 'Fellow Vietnam War hawk in Kennedy-Johnson administration', slug: 'mcgeorge-bundy' },
    { name: 'Robert McNamara', relationship: 'Defense Secretary colleague during Vietnam War', slug: 'robert-mcnamara' }
  ],
  'deanne-criswell': [
    { name: 'Joe Biden', relationship: 'FEMA Administrator under Biden', slug: 'joe-biden' }
  ],
  'denis-mcdonough': [
    { name: 'Barack Obama', relationship: 'White House Chief of Staff under Obama', slug: 'barack-obama' },
    { name: 'Joe Biden', relationship: 'VA Secretary under Biden', slug: 'joe-biden' }
  ],
  'dennis-deconcini': [
    { name: 'Charles Keating', relationship: 'One of Keating Five senators', slug: 'charles-keating' },
    { name: 'John McCain', relationship: 'Fellow Keating Five senator', slug: 'john-mccain' },
    { name: 'Alan Cranston', relationship: 'Fellow Keating Five senator', slug: 'alan-cranston' }
  ],
  'derrick-johnson': [
    { name: 'Bryan Stevenson', relationship: 'Fellow racial justice leader', slug: 'bryan-stevenson' },
    { name: 'Sherrilyn Ifill', relationship: 'NAACP Legal Defense Fund president and civil rights ally', slug: 'sherrilyn-ifill' }
  ],
  'derrick-palmer': [
    { name: 'Chris Smalls', relationship: 'Co-founded Amazon Labor Union together', slug: 'chris-smalls' },
    { name: 'Jennifer Bates', relationship: 'Fellow Amazon worker organizing activist', slug: 'jennifer-bates' }
  ],
  'desmond-tutu': [
    { name: 'Nelson Mandela', relationship: 'Fellow anti-apartheid leader and Nobel Peace laureate', slug: 'nelson-mandela' },
    { name: 'PW Botha', relationship: 'Apartheid president whom Tutu opposed', slug: 'pw-botha' }
  ],
  'dexter-king': [
    { name: 'Coretta Scott King', relationship: 'Mother and fellow keeper of MLK legacy', slug: 'coretta-scott-king' },
    { name: 'Martin Luther King Jr', relationship: 'Father - Dexter pursued truth about assassination', slug: 'martin-luther-king-jr' },
    { name: 'Lloyd Jowers', relationship: 'Man King family sued over MLK assassination conspiracy', slug: 'lloyd-jowers' }
  ],
  'dick-deguerin': [
    { name: 'David Koresh', relationship: 'Attorney who represented Koresh during Waco siege', slug: 'david-koresh' },
    { name: 'Tom DeLay', relationship: 'Defended DeLay in money laundering case', slug: 'tom-delay' }
  ],
  'dick-durbin': [
    { name: 'Charles Schumer', relationship: 'Fellow senior Democratic senator', slug: 'charles-schumer' },
    { name: 'Joe Biden', relationship: 'Key Biden Senate ally', slug: 'joe-biden' }
  ],
  'dick-fuld': [
    { name: 'Henry Paulson', relationship: 'Treasury Secretary who decided not to bail out Lehman Brothers', slug: 'henry-paulson' },
    { name: 'Tim Geithner', relationship: 'NY Fed president during Lehman collapse', slug: 'tim-geithner' },
    { name: 'Jamie Dimon', relationship: 'JPMorgan CEO who briefly considered acquiring Lehman', slug: 'jamie-dimon' }
  ],
  'dick-rowland': [
    { name: 'AJ Smitherman', relationship: 'Black newspaper editor during Tulsa Race Massacre triggered by Rowland\'s arrest', slug: 'aj-smitherman' },
    { name: 'Sarah Page', relationship: 'Woman whose encounter with Rowland sparked Tulsa Race Massacre', slug: 'sarah-page' }
  ],
  'domingo-monterrosa': [
    { name: 'Rufina Amaya', relationship: 'Sole adult survivor of El Mozote massacre Monterrosa directed', slug: 'rufina-amaya' },
    { name: 'Elliott Abrams', relationship: 'US official who covered up El Mozote massacre', slug: 'elliott-abrams' }
  ],
  'don-blankenship': [
    { name: 'Joe Manchin', relationship: 'Political rival - Blankenship ran against establishment in WV', slug: 'joe-manchin' }
  ],
  'donald-rickard': [
    { name: 'Nelson Mandela', relationship: 'CIA agent who allegedly tipped off South African police to arrest Mandela', slug: 'nelson-mandela' }
  ],
  'donald-riegle': [
    { name: 'Charles Keating', relationship: 'One of Keating Five senators investigated for S&L intervention', slug: 'charles-keating' },
    { name: 'Dennis DeConcini', relationship: 'Fellow Keating Five senator', slug: 'dennis-deconcini' }
  ],
  'donald-vidrine': [
    { name: 'Tony Hayward', relationship: 'BP CEO during Deepwater Horizon disaster', slug: 'tony-hayward' },
    { name: 'Jimmy Harrell', relationship: 'Transocean leader on rig during explosion', slug: 'jimmy-harrell' },
    { name: 'Robert Kaluza', relationship: 'Fellow BP supervisor on Deepwater Horizon', slug: 'robert-kaluza' }
  ],
  'dr-condie': [
    { name: 'Stafford Warren', relationship: 'Manhattan Project doctor involved in similar radiation research', slug: 'stafford-warren' }
  ]
};

insertKnownAssociates(data);
