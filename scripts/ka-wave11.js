const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 11: pamela through rufina profiles
const data = {
  'pamela-foster': [
    { name: 'Mandrel Stuart', relationship: 'Fellow civil asset forfeiture victim', slug: 'mandrel-stuart' }
  ],
  'paul-goldenheim': [
    { name: 'Michael Friedman', relationship: 'Fellow Purdue Pharma exec convicted of OxyContin fraud', slug: 'michael-friedman' },
    { name: 'Howard Udell', relationship: 'Fellow Purdue exec who pled guilty alongside Goldenheim', slug: 'howard-udell' },
    { name: 'Richard Sackler', relationship: 'Sackler family head behind OxyContin marketing', slug: 'richard-sackler' }
  ],
  'paul-kagame': [
    { name: 'Juvenal Habyarimana', relationship: 'RPF leader whose war against Habyarimana preceded genocide', slug: 'juvenal-habyarimana' },
    { name: 'Romeo Dallaire', relationship: 'UN peacekeeper during Rwanda genocide Kagame ended', slug: 'romeo-dallaire' },
    { name: 'Theoneste Bagosora', relationship: 'Genocide architect whom Kagame\'s forces defeated', slug: 'theoneste-bagosora' }
  ],
  'paul-popenoe': [
    { name: 'Harry Laughlin', relationship: 'Fellow eugenics advocate who promoted forced sterilization', slug: 'harry-laughlin' },
    { name: 'Margaret Sanger', relationship: 'Eugenics intersection with Sanger\'s birth control movement', slug: 'margaret-sanger' }
  ],
  'paul-schrade': [
    { name: 'Sirhan Sirhan', relationship: 'Shot by Sirhan during RFK assassination; later advocated for Sirhan\'s release', slug: 'sirhan-sirhan' },
    { name: 'Karl Uecker', relationship: 'Fellow witness who wrestled gunman', slug: 'karl-uecker' }
  ],
  'paul-tucker': [
    { name: 'Bob Diamond', relationship: 'Barclays CEO whom Tucker allegedly encouraged to lower LIBOR', slug: 'bob-diamond' },
    { name: 'Mervyn King', relationship: 'Bank of England governor during Tucker\'s LIBOR involvement', slug: 'mervyn-king' }
  ],
  'paul-weyrich': [
    { name: 'Jerry Falwell', relationship: 'Co-created Moral Majority with Falwell', slug: 'jerry-falwell' },
    { name: 'Lisa Nelson', relationship: 'Weyrich co-founded ALEC that Nelson later led', slug: 'lisa-nelson' },
    { name: 'Karl Rove', relationship: 'Fellow architect of conservative political infrastructure', slug: 'karl-rove' }
  ],
  'pelican-bay-prisoners': [
    { name: 'Thomas Silverstein', relationship: 'Prisoner held in extreme solitary like Pelican Bay SHU inmates', slug: 'thomas-silverstein' }
  ],
  'pete-arredondo': [
    { name: 'Greg Abbott', relationship: 'Texas governor during Uvalde shooting Arredondo botched', slug: 'greg-abbott' }
  ],
  'peter-madoff': [
    { name: 'Bernie Madoff', relationship: 'Brother and compliance officer at Madoff firm', slug: 'bernie-madoff' },
    { name: 'Mark Madoff', relationship: 'Nephew who reported Bernie to authorities', slug: 'mark-madoff' },
    { name: 'Ruth Madoff', relationship: 'Sister-in-law', slug: 'ruth-madoff' }
  ],
  'peter-neufeld': [
    { name: 'Kirk Bloodsworth', relationship: 'Innocence Project co-founder helped exonerate Bloodsworth', slug: 'kirk-bloodsworth' },
    { name: 'Bryan Stevenson', relationship: 'Fellow wrongful conviction reform advocate', slug: 'bryan-stevenson' }
  ],
  'petro-poroshenko': [
    { name: 'Sigmundur Gunnlaugsson', relationship: 'Fellow leader exposed in Panama Papers', slug: 'sigmundur-gunnlaugsson' }
  ],
  'phil-berger': [
    { name: 'Tim Moore', relationship: 'Fellow North Carolina Republican gerrymandering figure', slug: 'tim-moore' },
    { name: 'Thomas Hofeller', relationship: 'GOP mapmaker who drew NC gerrymanders Berger defended', slug: 'thomas-hofeller' }
  ],
  'phil-bryant': [
    { name: 'Thomas Dobbs', relationship: 'Mississippi governor who signed abortion ban in Dobbs case', slug: 'thomas-dobbs' },
    { name: 'Lynn Fitch', relationship: 'AG who argued Dobbs case Bryant\'s law created', slug: 'lynn-fitch' }
  ],
  'philip-sheridan': [
    { name: 'George Armstrong Custer', relationship: 'Custer served under Sheridan during Indian Wars', slug: 'george-armstrong-custer' },
    { name: 'William Tecumseh Sherman', relationship: 'Fellow Union general who oversaw Native American campaigns', slug: 'william-tecumseh-sherman' },
    { name: 'James Forsyth', relationship: 'Officer under Sheridan\'s command at Wounded Knee', slug: 'james-forsyth' }
  ],
  'philippe-moryoussef': [
    { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation figure', slug: 'tom-hayes' }
  ],
  'pol-pot': [
    { name: 'Norodom Sihanouk', relationship: 'Initially allied with then betrayed Sihanouk', slug: 'norodom-sihanouk' },
    { name: 'Lon Nol', relationship: 'Khmer Rouge overthrew Lon Nol\'s US-backed regime', slug: 'lon-nol' },
    { name: 'Henry Kissinger', relationship: 'Kissinger\'s Cambodia bombing helped radicalize population toward Pol Pot', slug: 'henry-kissinger' }
  ],
  'porcha-woodruff': [
    { name: 'Nijeer Parks', relationship: 'Fellow victim of wrongful arrest via facial recognition', slug: 'nijeer-parks' },
    { name: 'Joy Buolamwini', relationship: 'AI researcher who documented facial recognition bias', slug: 'joy-buolamwini' }
  ],
  'prudence-bushnell': [
    { name: 'Susan Rice', relationship: 'NSC official whom Bushnell warned about embassy security before bombing', slug: 'susan-rice' }
  ],
  'pw-botha': [
    { name: 'Nelson Mandela', relationship: 'Apartheid president who imprisoned Mandela', slug: 'nelson-mandela' },
    { name: 'Desmond Tutu', relationship: 'Anti-apartheid leader who condemned Botha\'s regime', slug: 'desmond-tutu' }
  ],
  'ralph-abernathy': [
    { name: 'Martin Luther King Jr', relationship: 'SCLC co-founder and MLK\'s closest movement partner', slug: 'martin-luther-king-jr' },
    { name: 'Jesse Jackson', relationship: 'Fellow SCLC leader who continued civil rights work', slug: 'jesse-jackson' }
  ],
  'ramon-fonseca': [
    { name: 'Jurgen Mossack', relationship: 'Co-founder of Mossack Fonseca law firm exposed in Panama Papers', slug: 'jurgen-mossack' }
  ],
  'ramona-africa': [
    { name: 'John Africa', relationship: 'MOVE founder; Ramona survived the 1985 bombing', slug: 'john-africa' },
    { name: 'Wilson Goode', relationship: 'Philadelphia mayor who ordered bombing that killed 11 MOVE members', slug: 'wilson-goode' },
    { name: 'Frank Powell', relationship: 'Officer who dropped the bomb on MOVE compound', slug: 'frank-powell' },
    { name: 'Katricia Africa', relationship: 'Fellow MOVE member', slug: 'katricia-africa' }
  ],
  'randall-robinson': [
    { name: 'Nelson Mandela', relationship: 'Led anti-apartheid movement in US to free Mandela', slug: 'nelson-mandela' },
    { name: 'Jean-Bertrand Aristide', relationship: 'Advocated for Aristide\'s return to Haiti', slug: 'jean-bertrand-aristide' }
  ],
  'randy-weaver': [
    { name: 'Vicki Weaver', relationship: 'Wife killed by FBI sniper at Ruby Ridge', slug: 'vicki-weaver' },
    { name: 'Samuel Weaver', relationship: 'Son killed during Ruby Ridge standoff', slug: 'samuel-weaver' },
    { name: 'Kevin Harris', relationship: 'Friend at Ruby Ridge; both acquitted', slug: 'kevin-harris' },
    { name: 'Lon Horiuchi', relationship: 'FBI sniper who killed Vicki Weaver', slug: 'lon-horiuchi' },
    { name: 'Kenneth Fadeley', relationship: 'ATF informant who entrapped Weaver', slug: 'kenneth-fadeley' }
  ],
  'rashida-richardson': [
    { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', slug: 'joy-buolamwini' },
    { name: 'Nathan Wessler', relationship: 'Fellow digital rights advocate', slug: 'nathan-wessler' }
  ],
  'ray-sitton': [
    { name: 'Henry Kissinger', relationship: 'Executed secret Cambodia bombing orders from Kissinger', slug: 'henry-kissinger' }
  ],
  'ray-wood': [
    { name: 'Malcolm X', relationship: 'Undercover officer who helped security at venue where Malcolm X was killed', slug: 'malcolm-x' }
  ],
  'raymond-bonner': [
    { name: 'Rufina Amaya', relationship: 'Journalist who reported Amaya\'s eyewitness account of El Mozote massacre', slug: 'rufina-amaya' },
    { name: 'Elliott Abrams', relationship: 'Reagan official who denied massacre Bonner reported', slug: 'elliott-abrams' }
  ],
  'rc-arnold': [
    { name: 'Thomas Parran', relationship: 'Fellow PHS figure connected to unethical experiments', slug: 'thomas-parran' }
  ],
  'rebecca-mark': [
    { name: 'Kenneth Lay', relationship: 'Enron executive under Lay\'s leadership', slug: 'kenneth-lay' },
    { name: 'Jeffrey Skilling', relationship: 'Rival Enron executive', slug: 'jeffrey-skilling' }
  ],
  'red-fawn-fallis': [
    { name: 'Chase Iron Eyes', relationship: 'Fellow Standing Rock protester', slug: 'chase-iron-eyes' },
    { name: 'Kyle Kirchmeier', relationship: 'Sheriff whose deputies arrested Fallis', slug: 'kyle-kirchmeier' }
  ],
  'reinhard-gehlen': [
    { name: 'Allen Dulles', relationship: 'CIA Director who recruited Nazi spymaster Gehlen', slug: 'allen-dulles' },
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi recruited by US intelligence', slug: 'wernher-von-braun' }
  ],
  'rene-schneider': [
    { name: 'Augusto Pinochet', relationship: 'Pinochet rose to power after Schneider was assassinated', slug: 'augusto-pinochet' },
    { name: 'Henry Kissinger', relationship: 'Kissinger authorized CIA operations leading to Schneider\'s murder', slug: 'henry-kissinger' },
    { name: 'Orlando Letelier', relationship: 'Fellow Chilean victim of political violence', slug: 'orlando-letelier' }
  ],
  'ricardo-sanchez': [
    { name: 'Janis Karpinski', relationship: 'Abu Ghraib commander under Sanchez', slug: 'janis-karpinski' },
    { name: 'Geoffrey Miller', relationship: 'Miller brought Gitmo techniques to Sanchez\'s Iraq command', slug: 'geoffrey-miller' }
  ],
  'richard-cordray': [
    { name: 'Elizabeth Warren', relationship: 'Warren created CFPB that Cordray went on to lead', slug: 'elizabeth-warren' }
  ],
  'richard-dorenkamp': [
    { name: 'Thomas Stephens', relationship: 'Fellow tobacco industry figure', slug: 'thomas-stephens' }
  ],
  'richard-henry-pratt': [
    { name: 'Henry Dawes', relationship: 'Fellow architect of Native American assimilation policy', slug: 'henry-dawes' },
    { name: 'Dillon S. Myer', relationship: 'Later BIA Commissioner who continued boarding school legacy', slug: 'dillon-s-myer' }
  ],
  'richard-rogers': [
    { name: 'Lon Horiuchi', relationship: 'FBI HRT commander who gave rules of engagement at Ruby Ridge', slug: 'lon-horiuchi' },
    { name: 'Jeff Jamar', relationship: 'FBI on-scene commander at Waco; Rogers led tactical team', slug: 'jeff-jamar' }
  ],
  'richard-rothstein': [
    { name: 'Robert Moses', relationship: 'Documented segregationist urban planning Moses exemplified', slug: 'robert-moses' },
    { name: 'Keeanga-Yamahtta Taylor', relationship: 'Fellow housing discrimination scholar', slug: 'keeanga-yamahtta-taylor' }
  ],
  'richard-schwartz': [
    { name: 'Thomas Midgley Jr.', relationship: 'Connected to leaded gasoline industry', slug: 'thomas-midgley' }
  ],
  'richard-secord': [
    { name: 'Oliver North', relationship: 'Iran-Contra operative who managed arms deals with North', slug: 'oliver-north' },
    { name: 'John Hull', relationship: 'Costa Rica ranch owner in Iran-Contra supply network', slug: 'john-hull' },
    { name: 'Robert McFarlane', relationship: 'Fellow Iran-Contra figure', slug: 'robert-mcfarlane' }
  ],
  'rick-dearborn': [
    { name: 'Jeff Sessions', relationship: 'Sessions aide connected to Trump transition', slug: 'jeff-sessions' }
  ],
  'rigoberta-menchu': [
    { name: 'Efrain Rios Montt', relationship: 'Fought for justice against Rios Montt\'s Guatemalan genocide', slug: 'efrain-rios-montt' },
    { name: 'Hector Gramajo', relationship: 'Guatemalan military figure whom Menchu\'s activism challenged', slug: 'hector-gramajo' }
  ],
  'rj-lehmann': [
    { name: 'Robin Vos', relationship: 'Wisconsin political figure', slug: 'robin-vos' }
  ],
  'rob-bilott': [
    { name: 'Wilbur Tennant', relationship: 'Farmer whose poisoned cattle led Bilott to expose DuPont', slug: 'wilbur-tennant' }
  ],
  'robert-bilott': [
    { name: 'Wilbur Tennant', relationship: 'Farmer who first brought DuPont contamination to Bilott', slug: 'wilbur-tennant' },
    { name: 'Mark Ruffalo', relationship: 'Portrayed Bilott in film Dark Waters', slug: 'mark-ruffalo' }
  ],
  'robert-crants': [
    { name: 'Thomas Beasley', relationship: 'Co-founded Corrections Corporation of America', slug: 'thomas-beasley' }
  ],
  'robert-dudley': [
    { name: 'Tony Hayward', relationship: 'Succeeded Hayward as BP CEO after Deepwater Horizon', slug: 'tony-hayward' }
  ],
  'robert-gates': [
    { name: 'Leon Panetta', relationship: 'Predecessor/successor at CIA and Defense Department', slug: 'leon-panetta' },
    { name: 'George H.W. Bush', relationship: 'CIA Director under Bush era', slug: 'george-hw-bush' }
  ],
  'robert-houghton': [
    { name: 'Sirhan Sirhan', relationship: 'LAPD detective who investigated RFK assassination', slug: 'sirhan-sirhan' },
    { name: 'Thomas Noguchi', relationship: 'Coroner in RFK case Houghton investigated', slug: 'thomas-noguchi' }
  ],
  'robert-hugin': [
    { name: 'Richard Sackler', relationship: 'Fellow pharmaceutical industry exec facing opioid scrutiny', slug: 'richard-sackler' }
  ],
  'robert-kaluza': [
    { name: 'Donald Vidrine', relationship: 'Fellow BP supervisor charged in Deepwater Horizon deaths', slug: 'donald-vidrine' },
    { name: 'Kurt Mix', relationship: 'Fellow BP employee charged in spill cover-up', slug: 'kurt-mix' }
  ],
  'robert-kehoe': [
    { name: 'Herbert Needleman', relationship: 'Scientist whose lead research Kehoe attacked', slug: 'herbert-needleman' },
    { name: 'Clair Patterson', relationship: 'Scientist who fought lead industry Kehoe defended', slug: 'clair-patterson' },
    { name: 'Thomas Midgley Jr.', relationship: 'Leaded gasoline inventor whose product Kehoe defended', slug: 'thomas-midgley' }
  ],
  'robert-king': [
    { name: 'Albert Woodfox', relationship: 'Fellow Angola Three member held in decades of solitary', slug: 'albert-woodfox' },
    { name: 'Herman Wallace', relationship: 'Fellow Angola Three member', slug: 'herman-wallace' }
  ],
  'robert-komer': [
    { name: 'William Colby', relationship: 'CIA Director who oversaw Phoenix Program with Komer', slug: 'william-colby' },
    { name: 'Nelson Brickham', relationship: 'CIA officer who designed Phoenix pacification Komer directed', slug: 'nelson-brickham' }
  ],
  'robert-martens': [
    { name: 'Suharto', relationship: 'Embassy staffer who provided communist kill lists to Suharto\'s military', slug: 'suharto' },
    { name: 'Marshall Green', relationship: 'US Ambassador who directed Martens during Indonesian massacre', slug: 'marshall-green' }
  ],
  'robert-mcfarlane': [
    { name: 'Oliver North', relationship: 'NSA predecessor who initiated Iran-Contra arms deals', slug: 'oliver-north' },
    { name: 'Richard Secord', relationship: 'Fellow Iran-Contra operative', slug: 'richard-secord' }
  ],
  'robert-moses': [
    { name: 'Robert Weaver', relationship: 'HUD Secretary who tried to counter Moses\' segregation', slug: 'robert-weaver' },
    { name: 'William Levitt', relationship: 'Fellow mid-century figure who enforced housing segregation', slug: 'william-levitt' },
    { name: 'Richard Rothstein', relationship: 'Historian who documented Moses\' segregationist infrastructure', slug: 'richard-rothstein' }
  ],
  'robert-scherrer': [
    { name: 'Michael Townley', relationship: 'FBI agent in South America who tracked Operation Condor assassins', slug: 'michael-townley' }
  ],
  'robert-taft': [
    { name: 'Joseph McCarthy', relationship: 'Taft initially supported McCarthy\'s anti-communist crusade', slug: 'joseph-mccarthy' }
  ],
  'robert-taylor': [
    { name: 'Robert Moses', relationship: 'Fellow mid-century housing segregation figure', slug: 'robert-moses' }
  ],
  'robert-weaver': [
    { name: 'Robert Moses', relationship: 'First Black HUD Secretary who opposed Moses\' segregation', slug: 'robert-moses' }
  ],
  'robert-williams': [
    { name: 'Martin Luther King Jr', relationship: 'Advocated armed self-defense vs King\'s nonviolence', slug: 'martin-luther-king-jr' }
  ],
  'roberta-kaplan': [
    { name: 'E. Jean Carroll', relationship: 'Attorney who won landmark sexual assault case against Trump for Carroll', slug: 'e-jean-carroll' }
  ],
  'roberto-daubuisson': [
    { name: 'Oscar Romero', relationship: 'Death squad leader who ordered Archbishop Romero\'s assassination', slug: 'oscar-romero' },
    { name: 'Elliott Abrams', relationship: 'Reagan official who downplayed D\'Aubuisson\'s death squads', slug: 'elliott-abrams' }
  ],
  'robin-arkley-ii': [
    { name: 'Thomas Hofeller', relationship: 'Republican donor connected to conservative political strategy', slug: 'thomas-hofeller' }
  ],
  'robin-vos': [
    { name: 'Scott Walker', relationship: 'Wisconsin governor during Vos\'s gerrymandering era', slug: 'scott-walker' },
    { name: 'Scott Fitzgerald', relationship: 'Fellow Wisconsin Republican leader', slug: 'scott-fitzgerald' }
  ],
  'roger-noriega': [
    { name: 'Elliott Abrams', relationship: 'Fellow Bush-era Latin America hawk', slug: 'elliott-abrams' }
  ],
  'roger-severino': [
    { name: 'Scott Lloyd', relationship: 'Fellow Trump HHS official restricting reproductive rights', slug: 'scott-lloyd' }
  ],
  'romeo-dallaire': [
    { name: 'Kofi Annan', relationship: 'UN head who denied Dallaire\'s requests for reinforcements in Rwanda', slug: 'kofi-annan' },
    { name: 'Paul Kagame', relationship: 'RPF leader whose intervention ended genocide Dallaire tried to prevent', slug: 'paul-kagame' },
    { name: 'Theoneste Bagosora', relationship: 'Genocide architect Dallaire tried to stop', slug: 'theoneste-bagosora' }
  ],
  'ron-wyden': [
    { name: 'Edward Snowden', relationship: 'Senator who hinted at NSA surveillance before Snowden exposed it', slug: 'edward-snowden' },
    { name: 'James Clapper', relationship: 'DNI who lied to Wyden about surveillance in Senate hearing', slug: 'james-clapper' }
  ],
  'roy-bourgeois': [
    { name: 'Oscar Romero', relationship: 'Founded SOA Watch after graduates killed Romero and others', slug: 'oscar-romero' }
  ],
  'roy-bryant': [
    { name: 'J.W. Milam', relationship: 'Half-brother and co-murderer of Emmett Till', slug: 'jw-milam' },
    { name: 'Mamie Till-Mobley', relationship: 'Mother of Emmett Till whom Bryant murdered', slug: 'mamie-till-mobley' },
    { name: 'Moses Wright', relationship: 'Emmett\'s uncle who identified Bryant in court', slug: 'moses-wright' }
  ],
  'roy-mitchell': [
    { name: 'Fred Hampton', relationship: 'FBI handler of informant who helped assassinate Hampton', slug: 'fred-hampton' },
    { name: 'William O\'Neal', relationship: 'FBI informant Mitchell handled to infiltrate Black Panthers', slug: 'william-oneal' }
  ],
  'rufina-amaya': [
    { name: 'Oscar Romero', relationship: 'Archbishop whose murder preceded the El Mozote massacre Amaya survived', slug: 'oscar-romero' },
    { name: 'Raymond Bonner', relationship: 'Journalist who published Amaya\'s account of El Mozote massacre', slug: 'raymond-bonner' },
    { name: 'Elliott Abrams', relationship: 'Reagan official who denied the massacre Amaya witnessed', slug: 'elliott-abrams' }
  ]
};

insertKnownAssociates(data);
