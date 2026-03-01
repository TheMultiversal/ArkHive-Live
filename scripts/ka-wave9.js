const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 9: First ~100 profiles from remaining list (john-bolton through lyndon-johnson)
const data = {
  'john-bolton': [
    { name: 'Donald Trump', relationship: 'National Security Advisor under Trump; later turned critic', slug: 'donald-trump' },
    { name: 'Mike Pompeo', relationship: 'Fellow Trump foreign policy hawk', slug: 'mike-pompeo' }
  ],
  'john-kelly': [
    { name: 'Donald Trump', relationship: 'White House Chief of Staff under Trump; later called Trump fascist', slug: 'donald-trump' },
    { name: 'Kirstjen Nielsen', relationship: 'DHS Secretary Kelly mentored and installed', slug: 'kirstjen-nielsen' }
  ],
  'jenna-ellis': [
    { name: 'Rudy Giuliani', relationship: 'Fellow Trump legal team member in election challenges', slug: 'rudy-giuliani' },
    { name: 'Sidney Powell', relationship: 'Fellow Trump attorney pushing election fraud claims', slug: 'sidney-powell' }
  ],
  'maryanne-trump-barry': [
    { name: 'Donald Trump', relationship: 'Brother; secretly recorded criticizing him', slug: 'donald-trump' }
  ],
  'johnny-mcentee': [
    { name: 'Donald Trump', relationship: 'Trump personnel director who enforced loyalty tests', slug: 'donald-trump' }
  ],
  'steven-mnuchin': [
    { name: 'Donald Trump', relationship: 'Treasury Secretary under Trump', slug: 'donald-trump' },
    { name: 'Steve Bannon', relationship: 'Fellow Trump cabinet member and ally', slug: 'steve-bannon' }
  ],
  'phil-waldron': [
    { name: 'Rudy Giuliani', relationship: 'Provided election fraud PowerPoint used by Giuliani', slug: 'rudy-giuliani' },
    { name: 'Mark Meadows', relationship: 'Meadows circulated Waldron\'s election fraud presentation', slug: 'mark-meadows' }
  ],
  'allen-dulles': [
    { name: 'John Foster Dulles', relationship: 'Brother who served as Secretary of State', slug: 'john-foster-dulles' },
    { name: 'Jacobo Arbenz', relationship: 'CIA-backed coup overthrew Arbenz regime in Guatemala', slug: 'jacobo-arbenz' },
    { name: 'Lee Harvey Oswald', relationship: 'Served on Warren Commission investigating Oswald', slug: 'lee-harvey-oswald' },
    { name: 'Dwight D. Eisenhower', relationship: 'CIA Director under Eisenhower', slug: 'dwight-d-eisenhower' }
  ],
  'sidney-gottlieb': [
    { name: 'Allen Dulles', relationship: 'CIA Director who authorized Gottlieb\'s MK-Ultra program', slug: 'allen-dulles' },
    { name: 'Frank Olson', relationship: 'CIA scientist who died after Gottlieb drugged him with LSD', slug: 'frank-olson' }
  ],
  'bosquet-wev': [
    { name: 'Thomas Parran', relationship: 'Fellow Public Health Service official during Tuskegee era', slug: 'thomas-parran' }
  ],
  'c-sidney-carlton': [
    { name: 'Martin Tabert', relationship: 'Connected to convict leasing system', slug: 'martin-tabert' }
  ],
  'john-danforth': [
    { name: 'Jeff Jamar', relationship: 'Led investigation into Waco siege aftermath', slug: 'jeff-jamar' }
  ],
  'john-dodson': [
    { name: 'Eric Holder', relationship: 'ATF whistleblower who exposed Fast and Furious under Holder\'s DOJ', slug: 'eric-holder' },
    { name: 'Brian Terry', relationship: 'Agent killed with gun from operation Dodson exposed', slug: 'brian-terry' }
  ],
  'john-glenn': [
    { name: 'Alan Cranston', relationship: 'Fellow Keating Five senator', slug: 'alan-cranston' },
    { name: 'Charles Keating', relationship: 'Keating scandal figure who lobbied Glenn', slug: 'charles-keating' }
  ],
  'john-gustafson': [
    { name: 'Richard Henry Pratt', relationship: 'Carlisle boarding school era figure', slug: 'richard-henry-pratt' }
  ],
  'john-hannah': [
    { name: 'Dick Cheney', relationship: 'Cheney aide involved in intelligence manipulation', slug: 'dick-cheney' },
    { name: 'Scooter Libby', relationship: 'Fellow Cheney aide in Plame affair', slug: 'scooter-libby' }
  ],
  'john-harvey-kellogg': [
    { name: 'Harry Laughlin', relationship: 'Fellow eugenics movement figure', slug: 'harry-laughlin' },
    { name: 'Charles Davenport', relationship: 'Eugenics colleague at Race Betterment conferences', slug: 'charles-davenport' }
  ],
  'john-hull': [
    { name: 'Oliver North', relationship: 'Iran-Contra operative who used Hull\'s Costa Rica ranch for operations', slug: 'oliver-north' },
    { name: 'Richard Secord', relationship: 'Fellow Iran-Contra figure involved in supply network', slug: 'richard-secord' }
  ],
  'john-mahoney': [
    { name: 'Thomas Parran', relationship: 'PHS colleague during Tuskegee/Guatemala experiments', slug: 'thomas-parran' }
  ],
  'john-paul-stevens': [
    { name: 'Ruth Bader Ginsburg', relationship: 'Fellow Supreme Court liberal justice', slug: 'ruth-bader-ginsburg' }
  ],
  'john-paul-vann': [
    { name: 'William Westmoreland', relationship: 'Military superior in Vietnam whose optimism Vann challenged', slug: 'william-westmoreland' },
    { name: 'Neil Sheehan', relationship: 'Journalist who wrote about Vann\'s Vietnam story', slug: 'neil-sheehan' },
    { name: 'Daniel Ellsberg', relationship: 'Fellow Pentagon insider who knew truth about Vietnam', slug: 'daniel-ellsberg' }
  ],
  'john-ray-iii': [
    { name: 'Sam Bankman-Fried', relationship: 'CEO who replaced SBF to oversee FTX bankruptcy', slug: 'sam-bankman-fried' },
    { name: 'Caroline Ellison', relationship: 'Alameda CEO during FTX collapse', slug: 'caroline-ellison' }
  ],
  'john-schoettler': [
    { name: 'Jeff Bezos', relationship: 'Amazon executive under Bezos', slug: 'jeff-bezos' }
  ],
  'john-sperling': [
    { name: 'Albert Lord', relationship: 'Fellow for-profit education industry figure', slug: 'albert-lord' }
  ],
  'john-t-milner': [
    { name: 'Robert Moses', relationship: 'Fellow urban planner who used infrastructure to enforce segregation', slug: 'robert-moses' }
  ],
  'jose-ramos-horta': [
    { name: 'Xanana Gusmao', relationship: 'Fellow East Timorese independence leader', slug: 'xanana-gusmao' }
  ],
  'joseph-bankman': [
    { name: 'Sam Bankman-Fried', relationship: 'Father of SBF who advised on FTX operations', slug: 'sam-bankman-fried' },
    { name: 'Barbara Fried', relationship: 'Wife and co-parent who helped SBF politically', slug: 'barbara-fried' }
  ],
  'joseph-e-brown': [
    { name: 'Nathan Bedford Forrest', relationship: 'Civil War era Confederate connection', slug: 'nathan-bedford-forrest' }
  ],
  'joseph-kennedy-ii': [
    { name: 'Jimmy Carter', relationship: 'Fellow Democrat in Haiti/energy policy sphere', slug: 'jimmy-carter' }
  ],
  'joseph-metcalf': [
    { name: 'Hudson Austin', relationship: 'Grenada coup leader whom Metcalf\'s invasion force fought', slug: 'hudson-austin' }
  ],
  'joseph-rivers': [
    { name: 'Mandrel Stuart', relationship: 'Fellow civil asset forfeiture victim', slug: 'mandrel-stuart' }
  ],
  'joseph-weekley': [
    { name: 'Aiyana Stanley-Jones', relationship: 'Shot and killed 7-year-old Aiyana in botched raid', slug: 'aiyana-stanley-jones' }
  ],
  'joseph-welch': [
    { name: 'Joseph McCarthy', relationship: 'Army counsel who confronted McCarthy: "Have you no decency?"', slug: 'joseph-mccarthy' }
  ],
  'joshua-jaynes': [
    { name: 'Breonna Taylor', relationship: 'Detective who obtained false warrant leading to Taylor\'s death', slug: 'breonna-taylor' },
    { name: 'Kenneth Walker', relationship: 'Taylor\'s boyfriend who fired back during botched raid', slug: 'kenneth-walker' }
  ],
  'juan-funes': [
    { name: 'John Charles Cutler', relationship: 'Worked with Cutler on Guatemala STD experiments', slug: 'john-charles-cutler' }
  ],
  'juan-mendez': [
    { name: 'Romeo Dallaire', relationship: 'Fellow human rights and international justice figure', slug: 'romeo-dallaire' }
  ],
  'juana-majel-dixon': [
    { name: 'Dave Archambault II', relationship: 'Fellow Native American rights leader', slug: 'dave-archambault-ii' }
  ],
  'judith-miller': [
    { name: 'Scooter Libby', relationship: 'Miller went to jail protecting Libby as source in Plame affair', slug: 'scooter-libby' },
    { name: 'Ahmad Chalabi', relationship: 'Iraqi exile source who fed Miller false WMD intelligence', slug: 'ahmad-chalabi' }
  ],
  'julia-tutwiler': [
    { name: 'Martin Tabert', relationship: 'Prison reformer connected to convict leasing abuses', slug: 'martin-tabert' }
  ],
  'jurgen-mossack': [
    { name: 'Ramon Fonseca', relationship: 'Co-founder of Mossack Fonseca law firm at center of Panama Papers', slug: 'ramon-fonseca' }
  ],
  'juvenal-habyarimana': [
    { name: 'Paul Kagame', relationship: 'RPF leader whose forces fought Habyarimana; assassination triggered genocide', slug: 'paul-kagame' },
    { name: 'Theoneste Bagosora', relationship: 'Military leader who launched genocide after Habyarimana\'s death', slug: 'theoneste-bagosora' }
  ],
  'jw-milam': [
    { name: 'Roy Bryant', relationship: 'Half-brother and co-murderer of Emmett Till', slug: 'roy-bryant' },
    { name: 'Mamie Till-Mobley', relationship: 'Emmett Till\'s mother who exposed Milam\'s crime to the world', slug: 'mamie-till-mobley' }
  ],
  'k-barton-osborn': [
    { name: 'Nelson Brickham', relationship: 'Phoenix Program architect whose torture Osborn witnessed', slug: 'nelson-brickham' },
    { name: 'William Colby', relationship: 'CIA director who oversaw Phoenix Program', slug: 'william-colby' }
  ],
  'kalief-browder': [
    { name: 'Bryan Stevenson', relationship: 'Criminal justice reformer whose work highlighted cases like Browder\'s', slug: 'bryan-stevenson' }
  ],
  'karen-ignagni': [
    { name: 'Stephen Hemsley', relationship: 'Fellow health insurance industry leader', slug: 'stephen-hemsley' },
    { name: 'Wendell Potter', relationship: 'Former insurance exec turned whistleblower against Ignagni\'s AHIP', slug: 'wendell-potter' }
  ],
  'karen-lynch': [
    { name: 'Stephen Hemsley', relationship: 'Fellow healthcare industry leader at major insurer', slug: 'stephen-hemsley' }
  ],
  'karl-uecker': [
    { name: 'Sirhan Sirhan', relationship: 'Wrestled RFK\'s alleged shooter to the ground', slug: 'sirhan-sirhan' },
    { name: 'Paul Schrade', relationship: 'Fellow RFK shooting witness and victim', slug: 'paul-schrade' }
  ],
  'katharine-graham': [
    { name: 'Bob Woodward', relationship: 'Washington Post publisher who backed Woodward on Watergate', slug: 'bob-woodward' },
    { name: 'Daniel Ellsberg', relationship: 'Published Pentagon Papers Ellsberg leaked', slug: 'daniel-ellsberg' },
    { name: 'Richard Nixon', relationship: 'Nixon tried to destroy Graham\'s Post over Watergate', slug: 'richard-nixon' }
  ],
  'kathryn-barger': [
    { name: 'Jeff Bezos', relationship: 'LA County supervisor overseeing Amazon labor issues', slug: 'jeff-bezos' }
  ],
  'katricia-africa': [
    { name: 'Ramona Africa', relationship: 'Fellow MOVE member', slug: 'ramona-africa' },
    { name: 'Wilson Goode', relationship: 'Philadelphia mayor who ordered bombing that killed MOVE members', slug: 'wilson-goode' }
  ],
  'keeanga-yamahtta-taylor': [
    { name: 'Richard Rothstein', relationship: 'Fellow housing discrimination researcher', slug: 'richard-rothstein' }
  ],
  'ken-salazar': [
    { name: 'Tony Hayward', relationship: 'Interior Sec during Deepwater Horizon; oversaw BP response', slug: 'tony-hayward' },
    { name: 'Thad Allen', relationship: 'National Incident Commander under Salazar during BP spill', slug: 'thad-allen' }
  ],
  'kenneth-fadeley': [
    { name: 'Randy Weaver', relationship: 'ATF informant who bought illegal firearms from Weaver', slug: 'randy-weaver' }
  ],
  'kenneth-melson': [
    { name: 'Eric Holder', relationship: 'ATF acting director under Holder during Fast and Furious', slug: 'eric-holder' },
    { name: 'John Dodson', relationship: 'ATF agent who blew whistle on Melson\'s gun-walking operation', slug: 'john-dodson' }
  ],
  'kenneth-walker': [
    { name: 'Breonna Taylor', relationship: 'Boyfriend who fired in self-defense during no-knock raid that killed Taylor', slug: 'breonna-taylor' },
    { name: 'Joshua Jaynes', relationship: 'Detective who obtained warrant for raid on Walker and Taylor\'s apartment', slug: 'joshua-jaynes' }
  ],
  'kevin-harris': [
    { name: 'Randy Weaver', relationship: 'Friend at Ruby Ridge who was acquitted of charges', slug: 'randy-weaver' },
    { name: 'William Degan', relationship: 'US Marshal killed in Ruby Ridge shootout', slug: 'william-degan' }
  ],
  'kevin-mcaleenan': [
    { name: 'Kirstjen Nielsen', relationship: 'Succeeded Nielsen as acting DHS Secretary', slug: 'kirstjen-nielsen' }
  ],
  'khalid-taha': [
    { name: 'Jamal Khashoggi', relationship: 'Saudi journalist\'s case connected to broader Saudi repression', slug: 'jamal-khashoggi' }
  ],
  'khalifa-haftar': [
    { name: 'Muammar Gaddafi', relationship: 'Former Gaddafi general who later fought for control of Libya', slug: 'muammar-gaddafi' }
  ],
  'khalil-islam': [
    { name: 'Muhammad Abdul Aziz', relationship: 'Fellow wrongfully convicted man in Malcolm X assassination', slug: 'muhammad-abdul-aziz' },
    { name: 'Malcolm X', relationship: 'Wrongfully convicted of Malcolm X\'s assassination for decades', slug: 'malcolm-x' }
  ],
  'kirk-bloodsworth': [
    { name: 'Peter Neufeld', relationship: 'Innocence Project co-founder who helped exonerate Bloodsworth', slug: 'peter-neufeld' },
    { name: 'Bryan Stevenson', relationship: 'Fellow wrongful conviction/death penalty reform figure', slug: 'bryan-stevenson' }
  ],
  'kurt-blome': [
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', slug: 'wernher-von-braun' },
    { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip Nazi scientist', slug: 'hubertus-strughold' }
  ],
  'kurt-mix': [
    { name: 'Tony Hayward', relationship: 'BP engineer charged with destroying evidence during Deepwater Horizon', slug: 'tony-hayward' },
    { name: 'Robert Kaluza', relationship: 'Fellow BP employee charged in Deepwater Horizon disaster', slug: 'robert-kaluza' }
  ],
  'kyle-kirchmeier': [
    { name: 'Dave Archambault II', relationship: 'Morton County sheriff who opposed Standing Rock protesters', slug: 'dave-archambault-ii' },
    { name: 'Chase Iron Eyes', relationship: 'Activist arrested by Kirchmeier\'s deputies at Standing Rock', slug: 'chase-iron-eyes' }
  ],
  'kyle-thompson': [
    { name: 'Kelcy Warren', relationship: 'Connected to DAPL security operations', slug: 'kelcy-warren' }
  ],
  'l-paul-bremer': [
    { name: 'Donald Rumsfeld', relationship: 'Defense Secretary who oversaw Bremer\'s Coalition Authority in Iraq', slug: 'donald-rumsfeld' },
    { name: 'George W. Bush', relationship: 'President who appointed Bremer to lead Iraq reconstruction', slug: 'george-w-bush' }
  ],
  'lanny-breuer': [
    { name: 'Eric Holder', relationship: 'DOJ Criminal Division chief under Holder who declined to prosecute banks', slug: 'eric-holder' }
  ],
  'laurence-teeter': [
    { name: 'Sirhan Sirhan', relationship: 'Defense attorney who represented Sirhan for decades', slug: 'sirhan-sirhan' }
  ],
  'lee-atwater': [
    { name: 'George H.W. Bush', relationship: 'Campaign manager who used racial dog whistles for Bush', slug: 'george-hw-bush' },
    { name: 'Karl Rove', relationship: 'Political protégé who learned from Atwater\'s tactics', slug: 'karl-rove' },
    { name: 'Roger Ailes', relationship: 'Fellow GOP media strategist', slug: 'roger-ailes' }
  ],
  'lee-hamilton': [
    { name: 'Thomas Kean', relationship: 'Co-chaired 9/11 Commission together', slug: 'thomas-kean' }
  ],
  'lee-harvey-oswald': [
    { name: 'Jack Ruby', relationship: 'Killed Oswald two days after JFK assassination', slug: 'jack-ruby' },
    { name: 'John F. Kennedy', relationship: 'Accused assassin of President Kennedy', slug: 'john-f-kennedy' },
    { name: 'Allen Dulles', relationship: 'Former CIA Director who served on Warren Commission investigating Oswald', slug: 'allen-dulles' },
    { name: 'George de Mohrenschildt', relationship: 'CIA-connected acquaintance in Dallas', slug: 'george-de-mohrenschildt' },
    { name: 'Jim Garrison', relationship: 'New Orleans DA who investigated Oswald\'s conspiracy connections', slug: 'jim-garrison' }
  ],
  'lee-iacocca': [
    { name: 'Ralph Nader', relationship: 'Iacocca at Ford during era Nader exposed auto safety failures', slug: 'ralph-nader' }
  ],
  'leeanne-walters': [
    { name: 'Marc Edwards', relationship: 'Virginia Tech scientist Walters contacted about Flint water', slug: 'marc-edwards' },
    { name: 'Mona Hanna-Attisha', relationship: 'Pediatrician who confirmed lead in Flint children Walters helped expose', slug: 'mona-hanna-attisha' }
  ],
  'leonidas-dyer': [
    { name: 'Ida B. Wells', relationship: 'Wells campaigned for Dyer\'s anti-lynching bill', slug: 'ida-b-wells' }
  ],
  'leopoldo-galtieri': [
    { name: 'Henry Kissinger', relationship: 'Kissinger supported Argentine junta under Operation Condor', slug: 'henry-kissinger' }
  ],
  'les-aspin': [
    { name: 'Norman Schwarzkopf', relationship: 'House Armed Services during Gulf War Schwarzkopf led', slug: 'norman-schwarzkopf' }
  ],
  'lisa-brunner': [
    { name: 'Mary Kathryn Nagle', relationship: 'Fellow advocate for Missing and Murdered Indigenous Women', slug: 'mary-kathryn-nagle' }
  ],
  'lisa-nelson': [
    { name: 'Paul Weyrich', relationship: 'ALEC connection - Weyrich co-founded organization Nelson leads', slug: 'paul-weyrich' }
  ],
  'liz-fowler': [
    { name: 'Max Baucus', relationship: 'Baucus aide who wrote ACA provisions favorable to insurers', slug: 'max-baucus' },
    { name: 'Karen Ignagni', relationship: 'Health insurance lobby head whose industry Fowler protected', slug: 'karen-ignagni' }
  ],
  'lloyd-jowers': [
    { name: 'James Earl Ray', relationship: 'Both implicated in MLK assassination conspiracy', slug: 'james-earl-ray' },
    { name: 'William Pepper', relationship: 'Attorney who uncovered Jowers\' role in MLK conspiracy', slug: 'william-pepper' }
  ],
  'lon-nol': [
    { name: 'Pol Pot', relationship: 'Lon Nol\'s regime was toppled by Pol Pot\'s Khmer Rouge', slug: 'pol-pot' },
    { name: 'Norodom Sihanouk', relationship: 'Cambodian ruler Lon Nol overthrew in 1970 coup', slug: 'norodom-sihanouk' },
    { name: 'Richard Nixon', relationship: 'US backed Lon Nol\'s coup under Nixon', slug: 'richard-nixon' }
  ],
  'lou-pai': [
    { name: 'Kenneth Lay', relationship: 'Enron chairman under whom Pai profited', slug: 'kenneth-lay' },
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO during Pai\'s tenure', slug: 'jeffrey-skilling' }
  ],
  'lyman-lemnitzer': [
    { name: 'John F. Kennedy', relationship: 'Proposed Operation Northwoods false flag that JFK rejected', slug: 'john-f-kennedy' },
    { name: 'Curtis LeMay', relationship: 'Fellow Joint Chiefs hawk', slug: 'curtis-lemay' }
  ],
  'lyndon-johnson': [
    { name: 'Robert McNamara', relationship: 'Defense Secretary who expanded Vietnam War under LBJ', slug: 'robert-mcnamara' },
    { name: 'J. Edgar Hoover', relationship: 'FBI Director who ran COINTELPRO during Johnson presidency', slug: 'j-edgar-hoover' },
    { name: 'Martin Luther King Jr', relationship: 'Signed Civil Rights Act but surveilled King', slug: 'martin-luther-king-jr' }
  ],
  'lynn-fitch': [
    { name: 'Thomas Dobbs', relationship: 'Mississippi figures in Dobbs v. Jackson abortion case', slug: 'thomas-dobbs' }
  ],
  'mahendra-amin': [
    { name: 'Dawn Wooten', relationship: 'ICE nurse who blew whistle on Amin\'s forced hysterectomies', slug: 'dawn-wooten' }
  ],
  'mamie-till-mobley': [
    { name: 'Emmett Till', relationship: 'Mother who demanded open casket to show what racists did to her son', slug: 'emmett-till' },
    { name: 'Roy Bryant', relationship: 'One of Emmett\'s murderers acquitted by all-white jury', slug: 'roy-bryant' },
    { name: 'J.W. Milam', relationship: 'Co-murderer of Emmett Till', slug: 'jw-milam' },
    { name: 'Moses Wright', relationship: 'Emmett\'s great-uncle who bravely identified killers in court', slug: 'moses-wright' }
  ],
  'mandrel-stuart': [
    { name: 'Joseph Rivers', relationship: 'Fellow civil asset forfeiture victim', slug: 'joseph-rivers' }
  ],
  'marc-cisneros': [
    { name: 'Maxwell Thurman', relationship: 'Fellow commander during Panama invasion', slug: 'maxwell-thurman' }
  ],
  'marc-edwards': [
    { name: 'LeeAnne Walters', relationship: 'Flint resident who brought water samples to Edwards', slug: 'leeanne-walters' },
    { name: 'Mona Hanna-Attisha', relationship: 'Pediatrician whose blood lead data confirmed Edwards\' findings', slug: 'mona-hanna-attisha' }
  ],
  'marc-short': [
    { name: 'Mike Pence', relationship: 'Chief of Staff to Vice President Pence', slug: 'mike-pence' }
  ],
  'marcus-agius': [
    { name: 'Bob Diamond', relationship: 'Barclays chairman who resigned alongside Diamond in LIBOR scandal', slug: 'bob-diamond' },
    { name: 'Mervyn King', relationship: 'Bank of England governor during Barclays LIBOR manipulation', slug: 'mervyn-king' }
  ]
};

insertKnownAssociates(data);
