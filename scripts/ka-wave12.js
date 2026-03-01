const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 12: russell through thomas profiles
const data = {
  'russell-pearce': [
    { name: 'Joe Arpaio', relationship: 'Key ally in Arizona anti-immigration policy', slug: 'joe-arpaio' },
    { name: 'Jan Brewer', relationship: 'Arizona governor who signed Pearce\'s SB1070', slug: 'jan-brewer' }
  ],
  'russell-portenoy': [
    { name: 'Richard Sackler', relationship: 'Pain specialist whose research helped Sacklers market OxyContin', slug: 'richard-sackler' }
  ],
  'ruth-bader-ginsburg': [
    { name: 'Sandra Day O\'Connor', relationship: 'Fellow female Supreme Court justice', slug: 'sandra-day-oconnor' }
  ],
  'ruth-madoff': [
    { name: 'Bernie Madoff', relationship: 'Wife of Ponzi scheme architect', slug: 'bernie-madoff' },
    { name: 'Mark Madoff', relationship: 'Son who reported Bernie\'s fraud', slug: 'mark-madoff' },
    { name: 'Peter Madoff', relationship: 'Brother-in-law at Madoff firm', slug: 'peter-madoff' }
  ],
  'ruth-riddle': [
    { name: 'David Koresh', relationship: 'Branch Davidian survivor of Waco siege', slug: 'david-koresh' }
  ],
  'ryan-crocker': [
    { name: 'L. Paul Bremer', relationship: 'Fellow US official in Iraq reconstruction', slug: 'l-paul-bremer' }
  ],
  'ryan-salame': [
    { name: 'Sam Bankman-Fried', relationship: 'FTX co-CEO who pleaded guilty to campaign finance fraud', slug: 'sam-bankman-fried' },
    { name: 'Nishad Singh', relationship: 'Fellow FTX executive who cooperated with prosecutors', slug: 'nishad-singh' }
  ],
  'sam-walton': [
    { name: 'Jeff Bezos', relationship: 'Walton\'s retail empire later challenged by Bezos\'s Amazon', slug: 'jeff-bezos' }
  ],
  'sam-zemurray': [
    { name: 'Jacobo Arbenz', relationship: 'United Fruit head who lobbied for CIA coup against Arbenz', slug: 'jacobo-arbenz' },
    { name: 'Allen Dulles', relationship: 'CIA Director who executed coup Zemurray pushed for', slug: 'allen-dulles' }
  ],
  'samuel-koster': [
    { name: 'William Calley', relationship: 'Division commander who covered up Calley\'s My Lai massacre', slug: 'william-calley' },
    { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot who tried to stop massacre under Koster\'s command', slug: 'hugh-thompson-jr' }
  ],
  'samuel-weaver': [
    { name: 'Randy Weaver', relationship: 'Father at Ruby Ridge standoff', slug: 'randy-weaver' },
    { name: 'William Degan', relationship: 'US Marshal killed in same Ruby Ridge shootout that killed Samuel', slug: 'william-degan' }
  ],
  'sandra-bland': [
    { name: 'Bryan Stevenson', relationship: 'Criminal justice reform advocate who highlighted cases like Bland\'s', slug: 'bryan-stevenson' }
  ],
  'sarah-page': [
    { name: 'Dick Rowland', relationship: 'Rowland was falsely accused of assaulting Page, triggering Tulsa Massacre', slug: 'dick-rowland' },
    { name: 'AJ Smitherman', relationship: 'Black publisher who covered story of Page and Rowland', slug: 'aj-smitherman' }
  ],
  'sarwo-edhie-wibowo': [
    { name: 'Suharto', relationship: 'Army commander who led mass killings for Suharto', slug: 'suharto' },
    { name: 'Robert Martens', relationship: 'US embassy staffer who provided kill lists Wibowo\'s troops used', slug: 'robert-martens' }
  ],
  'savanna-lafontaine-greywind': [
    { name: 'Lisa Brunner', relationship: 'MMIW advocate who cited LaFontaine-Greywind\'s case', slug: 'lisa-brunner' },
    { name: 'Mary Kathryn Nagle', relationship: 'MMIW advocate who highlighted this case', slug: 'mary-kathryn-nagle' }
  ],
  'scott-ellsworth': [
    { name: 'Viola Fletcher', relationship: 'Historian who documented Tulsa Race Massacre Fletcher survived', slug: 'viola-fletcher' }
  ],
  'scott-lloyd': [
    { name: 'Roger Severino', relationship: 'Fellow Trump HHS official restricting reproductive rights', slug: 'roger-severino' }
  ],
  'scott-walker': [
    { name: 'Robin Vos', relationship: 'Wisconsin Assembly Speaker during Walker\'s governorship', slug: 'robin-vos' },
    { name: 'Scott Fitzgerald', relationship: 'Wisconsin Senate leader during Walker\'s union-busting', slug: 'scott-fitzgerald' }
  ],
  'seymour-hersh': [
    { name: 'William Calley', relationship: 'Journalist who broke My Lai massacre story', slug: 'william-calley' },
    { name: 'Hugh Thompson Jr', relationship: 'Helicopter pilot hero of Hersh\'s My Lai reporting', slug: 'hugh-thompson-jr' },
    { name: 'Daniel Ellsberg', relationship: 'Fellow figure in exposing government deception', slug: 'daniel-ellsberg' }
  ],
  'sheldon-whitehouse': [
    { name: 'Ron Wyden', relationship: 'Fellow Democratic senator investigating dark money', slug: 'ron-wyden' }
  ],
  'shelley-family': [
    { name: 'Richard Rothstein', relationship: 'Housing historian who documented impact of restrictive covenants like in Shelley case', slug: 'richard-rothstein' }
  ],
  'sherrilyn-ifill': [
    { name: 'Bryan Stevenson', relationship: 'Fellow civil rights legal leader', slug: 'bryan-stevenson' },
    { name: 'Thurgood Marshall', relationship: 'Led NAACP Legal Defense Fund Marshall founded', slug: 'thurgood-marshall' }
  ],
  'sherron-watkins': [
    { name: 'Kenneth Lay', relationship: 'Enron chairman Watkins warned about accounting fraud', slug: 'kenneth-lay' },
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO whose fraud Watkins exposed', slug: 'jeffrey-skilling' },
    { name: 'Andrew Fastow', relationship: 'Enron CFO whose fraudulent entities Watkins reported', slug: 'andrew-fastow' }
  ],
  'sigmundur-gunnlaugsson': [
    { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca leak exposed Gunnlaugsson\'s offshore holdings', slug: 'jurgen-mossack' },
    { name: 'Ramon Fonseca', relationship: 'Co-founder of firm whose Panama Papers exposed Gunnlaugsson', slug: 'ramon-fonseca' }
  ],
  'sirhan-sirhan': [
    { name: 'Robert F. Kennedy', relationship: 'Assassinated RFK during 1968 presidential campaign', slug: 'robert-f-kennedy' },
    { name: 'Laurence Teeter', relationship: 'Defense attorney who represented Sirhan for decades', slug: 'laurence-teeter' },
    { name: 'Paul Schrade', relationship: 'RFK aide wounded by Sirhan who later advocated his release', slug: 'paul-schrade' },
    { name: 'Thane Cesar', relationship: 'Security guard suspected by some of firing second gun', slug: 'thane-cesar' }
  ],
  'smedley-butler': [
    { name: 'Theodore Roosevelt', relationship: 'Marine general who served in wars Butler later denounced as corporate imperialism', slug: 'theodore-roosevelt' }
  ],
  'stafford-warren': [
    { name: 'J. Robert Oppenheimer', relationship: 'Manhattan Project radiologist during Oppenheimer\'s weapon development', slug: 'j-robert-oppenheimer' },
    { name: 'Thomas Murray', relationship: 'AEC commissioner connected to nuclear testing Warren studied', slug: 'thomas-murray' }
  ],
  'stanley-mcchrystal': [
    { name: 'Pat Tillman', relationship: 'Tillman died in friendly fire under McChrystal\'s command; cover-up followed', slug: 'pat-tillman' }
  ],
  'stefano-delle-chiaie': [
    { name: 'Michael Townley', relationship: 'Fellow Operation Condor operative', slug: 'michael-townley' },
    { name: 'Licio Gelli', relationship: 'P2 Lodge figure connected to Delle Chiaie\'s fascist network', slug: 'licio-gelli' },
    { name: 'Vincenzo Vinciguerra', relationship: 'Fellow Italian far-right figure in Operation Gladio', slug: 'vincenzo-vinciguerra' }
  ],
  'stephen-hemsley': [
    { name: 'Karen Ignagni', relationship: 'Fellow health insurance industry leader', slug: 'karen-ignagni' },
    { name: 'Wendell Potter', relationship: 'Insurance whistleblower who exposed industry practices Hemsley profited from', slug: 'wendell-potter' },
    { name: 'Nicole Smith-Holt', relationship: 'Mother whose son died from rationing insulin Hemsley\'s company priced', slug: 'nicole-smith-holt' }
  ],
  'stephen-townsend': [
    { name: 'Stanley McChrystal', relationship: 'Fellow military commander in Middle East/Africa operations', slug: 'stanley-mcchrystal' }
  ],
  'stephen-ubl': [
    { name: 'Karen Ignagni', relationship: 'Fellow healthcare industry lobbying figure', slug: 'karen-ignagni' }
  ],
  'stewart-udall': [
    { name: 'Ken Salazar', relationship: 'Later Interior Secretary who continued Udall\'s environmental legacy', slug: 'ken-salazar' }
  ],
  'stuart-appelbaum': [
    { name: 'Chris Smalls', relationship: 'Union leader who supported Amazon organizing Smalls led', slug: 'chris-smalls' },
    { name: 'Jennifer Bates', relationship: 'Amazon warehouse organizer Appelbaum supported', slug: 'jennifer-bates' }
  ],
  'stuart-johnson': [
    { name: 'Thomas Parran', relationship: 'Connected to Public Health Service during unethical research', slug: 'thomas-parran' }
  ],
  'stuart-symington': [
    { name: 'Joseph McCarthy', relationship: 'Senator who confronted McCarthy during Army hearings', slug: 'joseph-mccarthy' }
  ],
  'suharto': [
    { name: 'Sukarno', relationship: 'Overthrew Sukarno in military coup backed by US', slug: 'sukarno' },
    { name: 'Robert Martens', relationship: 'US embassy staffer who gave communist kill lists to Suharto\'s army', slug: 'robert-martens' },
    { name: 'Marshall Green', relationship: 'US Ambassador who supported Suharto\'s rise', slug: 'marshall-green' },
    { name: 'Sarwo Edhie Wibowo', relationship: 'Army commander who led mass killings for Suharto', slug: 'sarwo-edhie-wibowo' }
  ],
  'sukarno': [
    { name: 'Suharto', relationship: 'Military general who overthrew Sukarno', slug: 'suharto' },
    { name: 'Allen Dulles', relationship: 'CIA Director whose agency worked to destabilize Sukarno', slug: 'allen-dulles' }
  ],
  'susan-reverby': [
    { name: 'John Charles Cutler', relationship: 'Historian who discovered Cutler\'s Guatemala STD experiments', slug: 'john-charles-cutler' },
    { name: 'Thomas Parran', relationship: 'Uncovered PHS\'s unethical experiment history under Parran', slug: 'thomas-parran' }
  ],
  'susan-rice': [
    { name: 'Samantha Power', relationship: 'Fellow Obama national security official', slug: 'samantha-power' },
    { name: 'Prudence Bushnell', relationship: 'Ambassador who warned Rice about embassy security before Kenya bombing', slug: 'prudence-bushnell' }
  ],
  'suzanne-scott': [
    { name: 'Roger Ailes', relationship: 'Succeeded Ailes era as Fox News CEO', slug: 'roger-ailes' }
  ],
  'tamika-palmer': [
    { name: 'Breonna Taylor', relationship: 'Mother of Breonna Taylor killed in no-knock raid', slug: 'breonna-taylor' },
    { name: 'Joshua Jaynes', relationship: 'Detective who obtained false warrant leading to Taylor\'s death', slug: 'joshua-jaynes' }
  ],
  'tamir-rice': [
    { name: 'Timothy Loehmann', relationship: 'Officer who shot 12-year-old Tamir at Cleveland playground', slug: 'timothy-loehmann' }
  ],
  'tarla-makaeff': [
    { name: 'Donald Trump', relationship: 'Lead plaintiff in Trump University fraud lawsuit', slug: 'donald-trump' }
  ],
  'ted-henifin': [
    { name: 'Marc Edwards', relationship: 'Worked with Edwards on Flint water crisis infrastructure', slug: 'marc-edwards' }
  ],
  'ted-shackley': [
    { name: 'Edwin Wilson', relationship: 'CIA rogue agent connected to Shackley\'s secret operations', slug: 'edwin-wilson' },
    { name: 'Thomas Clines', relationship: 'Fellow CIA officer in Shackley\'s secret team', slug: 'thomas-corcoran' },
    { name: 'Vang Pao', relationship: 'Hmong general Shackley ran Secret War with in Laos', slug: 'vang-pao' }
  ],
  'terrell-don-hutto': [
    { name: 'Thomas Beasley', relationship: 'CCA co-founder alongside Hutto', slug: 'thomas-beasley' },
    { name: 'Robert Crants', relationship: 'Fellow CCA private prison founder', slug: 'robert-crants' }
  ],
  'terry-dehko': [
    { name: 'Mandrel Stuart', relationship: 'Fellow civil asset forfeiture victim', slug: 'mandrel-stuart' }
  ],
  'terry-farr': [
    { name: 'Tom Hayes', relationship: 'Fellow LIBOR scandal figure', slug: 'tom-hayes' },
    { name: 'Philippe Moryoussef', relationship: 'Fellow LIBOR manipulation participant', slug: 'philippe-moryoussef' }
  ],
  'thad-allen': [
    { name: 'Tony Hayward', relationship: 'National Incident Commander managing BP Deepwater Horizon response', slug: 'tony-hayward' },
    { name: 'Ken Salazar', relationship: 'Interior Secretary during BP spill Allen managed', slug: 'ken-salazar' }
  ],
  'thane-cesar': [
    { name: 'Sirhan Sirhan', relationship: 'Security guard present when Sirhan shot RFK; suspect in second gun theory', slug: 'sirhan-sirhan' },
    { name: 'Robert F. Kennedy', relationship: 'Was guarding RFK when assassination occurred', slug: 'robert-f-kennedy' }
  ],
  'theodore-bilbo': [
    { name: 'Nathan Bedford Forrest', relationship: 'Fellow white supremacist political figure championing racial hierarchy', slug: 'nathan-bedford-forrest' }
  ],
  'theoneste-bagosora': [
    { name: 'Juvenal Habyarimana', relationship: 'Launched genocide after Habyarimana\'s assassination', slug: 'juvenal-habyarimana' },
    { name: 'Romeo Dallaire', relationship: 'UN commander who Bagosora warned "this will be an apocalypse"', slug: 'romeo-dallaire' },
    { name: 'Paul Kagame', relationship: 'RPF leader whose forces ended genocide Bagosora directed', slug: 'paul-kagame' }
  ],
  'thomas-beasley': [
    { name: 'Robert Crants', relationship: 'Co-founded CCA private prison empire', slug: 'robert-crants' },
    { name: 'Terrell Don Hutto', relationship: 'Fellow CCA co-founder', slug: 'terrell-don-hutto' }
  ],
  'thomas-curry': [
    { name: 'Martin Wheatley', relationship: 'Fellow financial regulator during LIBOR scandal era', slug: 'martin-wheatley' }
  ],
  'thomas-dobbs': [
    { name: 'Lynn Fitch', relationship: 'Mississippi AG who argued Dobbs v. Jackson case', slug: 'lynn-fitch' },
    { name: 'Phil Bryant', relationship: 'Governor who signed 15-week abortion ban in Dobbs case', slug: 'phil-bryant' }
  ],
  'thomas-drake': [
    { name: 'Edward Snowden', relationship: 'Fellow NSA whistleblower who preceded Snowden', slug: 'edward-snowden' },
    { name: 'William Binney', relationship: 'Fellow NSA whistleblower who exposed ThinThread abuse', slug: 'william-binney' }
  ],
  'thomas-enders': [
    { name: 'Elliott Abrams', relationship: 'Fellow Reagan Central America policy figure', slug: 'elliott-abrams' }
  ],
  'thomas-hofeller': [
    { name: 'Chris Jankowski', relationship: 'Fellow Republican gerrymandering strategist', slug: 'chris-jankowski' },
    { name: 'Phil Berger', relationship: 'NC Republican who used Hofeller\'s maps', slug: 'phil-berger' }
  ],
  'thomas-jackson': [
    { name: 'Darren Wilson', relationship: 'Ferguson police chief during Michael Brown shooting by Wilson', slug: 'darren-wilson' },
    { name: 'Michael Brown', relationship: 'Brown\'s death under Jackson\'s police leadership triggered Ferguson unrest', slug: 'michael-brown' }
  ],
  'thomas-jefferson': [
    { name: 'James Knox Polk', relationship: 'Expansionist president who followed Jefferson\'s manifest destiny vision', slug: 'james-knox-polk' }
  ],
  'thomas-midgley': [
    { name: 'Robert Kehoe', relationship: 'Scientist who defended Midgley\'s leaded gasoline', slug: 'robert-kehoe' },
    { name: 'Clair Patterson', relationship: 'Scientist who proved Midgley\'s leaded gasoline poisoned the planet', slug: 'clair-patterson' },
    { name: 'Herbert Needleman', relationship: 'Researcher who documented leaded gasoline brain damage Midgley caused', slug: 'herbert-needleman' }
  ],
  'thomas-morgan': [
    { name: 'Richard Henry Pratt', relationship: 'BIA Commissioner during Pratt\'s boarding school era', slug: 'richard-henry-pratt' },
    { name: 'Henry Dawes', relationship: 'Dawes Act enforced during Morgan\'s BIA tenure', slug: 'henry-dawes' }
  ],
  'thomas-murray': [
    { name: 'Lewis Strauss', relationship: 'Fellow AEC commissioner during nuclear testing', slug: 'lewis-strauss' },
    { name: 'Stafford Warren', relationship: 'Manhattan Project radiologist connected to AEC nuclear history', slug: 'stafford-warren' }
  ],
  'thomas-noguchi': [
    { name: 'Sirhan Sirhan', relationship: 'Coroner who autopsied RFK in case against Sirhan', slug: 'sirhan-sirhan' },
    { name: 'Robert Houghton', relationship: 'LAPD detective in RFK case alongside Noguchi', slug: 'robert-houghton' }
  ],
  'thomas-pappas': [
    { name: 'Ricardo Sanchez', relationship: 'Commander who authorized Pappas at Abu Ghraib', slug: 'ricardo-sanchez' },
    { name: 'Geoffrey Miller', relationship: 'Miller ordered Pappas to "Gitmo-ize" Abu Ghraib', slug: 'geoffrey-miller' }
  ],
  'thomas-parran': [
    { name: 'John Charles Cutler', relationship: 'PHS officer who ran Guatemala experiments under Parran', slug: 'john-charles-cutler' },
    { name: 'Eunice Rivers', relationship: 'Nurse in Tuskegee study under Parran\'s PHS', slug: 'eunice-rivers' },
    { name: 'Susan Reverby', relationship: 'Historian who uncovered Parran-era experiments', slug: 'susan-reverby' }
  ],
  'thomas-silverstein': [
    { name: 'Pelican Bay Prisoners', relationship: 'Fellow long-term solitary confinement figure', slug: 'pelican-bay-prisoners' }
  ],
  'thomas-stephens': [
    { name: 'C. Everett Koop', relationship: 'Surgeon General who fought against tobacco Stephens promoted', slug: 'c-everett-koop' },
    { name: 'Victor DeNoble', relationship: 'Tobacco researcher who blew whistle on nicotine manipulation', slug: 'victor-denoble' }
  ],
  'thomas-stroock': [
    { name: 'Efrain Rios Montt', relationship: 'US Ambassador during Guatemalan genocide aftermath', slug: 'efrain-rios-montt' }
  ],
  'thomas-waldhauser': [
    { name: 'Stephen Townsend', relationship: 'Fellow AFRICOM commander', slug: 'stephen-townsend' }
  ]
};

insertKnownAssociates(data);
