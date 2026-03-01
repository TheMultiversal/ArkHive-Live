const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 8: J-L profiles
const data = {
  'john-demjanjuk': [
    { name: 'Efraim Zuroff', relationship: 'Nazi hunter who pursued Demjanjuk prosecution', slug: 'efraim-zuroff' }
  ],
  'john-deutch': [
    { name: 'Allen Dulles', relationship: 'Former CIA Director whose legacy of covert ops Deutch inherited', slug: 'allen-dulles' },
    { name: 'George Tenet', relationship: 'Successor as CIA Director', slug: 'george-tenet' }
  ],
  'john-ehrlichman': [
    { name: 'Richard Nixon', relationship: 'Domestic Affairs Advisor who executed Nixon\'s Drug War strategy', slug: 'richard-nixon' },
    { name: 'H.R. Haldeman', relationship: 'Fellow senior Nixon aide convicted in Watergate', slug: 'hr-haldeman' },
    { name: 'G. Gordon Liddy', relationship: 'Watergate operative, fellow Nixon dirty tricks figure', slug: 'g-gordon-liddy' }
  ],
  'john-hendricks': [
    { name: 'Andrew Jackson', relationship: 'Hendricks\' Cherokee removal tied to Jackson\'s policies', slug: 'andrew-jackson' }
  ],
  'john-kiriakou': [
    { name: 'Jeffrey Sterling', relationship: 'Fellow CIA whistleblower who was prosecuted', slug: 'jeffrey-sterling' },
    { name: 'Edward Snowden', relationship: 'Fellow intelligence community whistleblower', slug: 'edward-snowden' },
    { name: 'Gina Haspel', relationship: 'CIA official involved in torture Kiriakou exposed', slug: 'gina-haspel' }
  ],
  'john-l-smith': [
    { name: 'Sheldon Adelson', relationship: 'Las Vegas mogul who sued Smith for journalism', slug: 'sheldon-adelson' }
  ],
  'john-paulson': [
    { name: 'Fabrice Tourre', relationship: 'Goldman trader who structured Paulson\'s ABACUS deal', slug: 'fabrice-tourre' },
    { name: 'Lloyd Blankfein', relationship: 'Goldman CEO during ABACUS transaction', slug: 'lloyd-blankfein' }
  ],
  'john-pope': [
    { name: 'James Forsyth', relationship: 'Fellow commander during Indian Wars campaigns', slug: 'james-forsyth' }
  ],
  'john-pottinger': [
    { name: 'Frank Powell', relationship: 'Fellow figure in MOVE bombing - Pottinger in Philadelphia city government', slug: 'frank-powell' }
  ],
  'john-ray': [
    { name: 'Sam Bankman-Fried', relationship: 'CEO who replaced SBF to oversee FTX bankruptcy', slug: 'sam-bankman-fried' },
    { name: 'Caroline Ellison', relationship: 'Alameda CEO who cooperated during Ray\'s FTX restructuring', slug: 'caroline-ellison' },
    { name: 'Gary Wang', relationship: 'FTX co-founder during bankruptcy under Ray', slug: 'gary-wang' }
  ],
  'john-soul-brown': [
    { name: 'Frederick Douglass', relationship: 'Abolitionist who met with Brown before Harpers Ferry', slug: 'frederick-douglass' }
  ],
  'john-walker-lindh': [
    { name: 'Mike Spann', relationship: 'CIA officer killed during uprising at prison where Lindh was held', slug: 'mike-spann' }
  ],
  'john-williams-bos': [
    { name: 'Richard Sackler', relationship: 'Boston Globe investigation connected to pharmaceutical accountability', slug: 'richard-sackler' }
  ],
  'john-wood': [
    { name: 'J. Parnell Thomas', relationship: 'Fellow HUAC figure during Hollywood blacklist era', slug: 'j-parnell-thomas' },
    { name: 'Dalton Trumbo', relationship: 'Hollywood blacklist victim during era Wood chaired HUAC', slug: 'dalton-trumbo' }
  ],
  'jordan-belfort': [
    { name: 'Danny Porush', relationship: 'Right-hand man at Stratton Oakmont', slug: 'danny-porush' }
  ],
  'jorge-rafael-videla': [
    { name: 'Henry Kissinger', relationship: 'Kissinger gave tacit approval to Videla\'s dirty war', slug: 'henry-kissinger' },
    { name: 'Hugo Banzer', relationship: 'Fellow Operation Condor military dictator', slug: 'hugo-banzer' },
    { name: 'Augusto Pinochet', relationship: 'Fellow South American dictator in Operation Condor', slug: 'augusto-pinochet' }
  ],
  'jorge-videla': [
    { name: 'Henry Kissinger', relationship: 'Kissinger supported Videla\'s regime', slug: 'henry-kissinger' }
  ],
  'jose-efrain-rios-montt': [
    { name: 'Ronald Reagan', relationship: 'Reagan called Rios Montt "a man of great integrity" despite genocide', slug: 'ronald-reagan' },
    { name: 'Elliott Abrams', relationship: 'Reagan\'s Central America point man who supported Rios Montt', slug: 'elliott-abrams' },
    { name: 'Rigoberta Menchu', relationship: 'Nobel laureate who fought for justice against Rios Montt\'s genocide', slug: 'rigoberta-menchu' }
  ],
  'jose-napoleon-duarte': [
    { name: 'Roberto DAubuisson', relationship: 'Political rival and death squad leader Duarte opposed', slug: 'roberto-daubuisson' },
    { name: 'Elliott Abrams', relationship: 'Reagan official who managed US-El Salvador relationship', slug: 'elliott-abrams' }
  ],
  'jose-rodriguez': [
    { name: 'Gina Haspel', relationship: 'Fellow CIA officer involved in destruction of torture tapes', slug: 'gina-haspel' },
    { name: 'John Kiriakou', relationship: 'CIA whistleblower who exposed torture Rodriguez oversaw', slug: 'john-kiriakou' }
  ],
  'joseph-banister': [
    { name: 'Timothy McVeigh', relationship: 'Federal law enforcement figure during sovereign citizen era', slug: 'timothy-mcveigh' }
  ],
  'joseph-mccarthy': [
    { name: 'Roy Cohn', relationship: 'Chief counsel to McCarthy\'s Senate investigations subcommittee', slug: 'roy-cohn' },
    { name: 'Dalton Trumbo', relationship: 'Hollywood blacklist victim of McCarthyism', slug: 'dalton-trumbo' },
    { name: 'Edward R. Murrow', relationship: 'CBS journalist who publicly challenged McCarthyism', slug: 'edward-r-murrow' },
    { name: 'J. Parnell Thomas', relationship: 'HUAC predecessor to McCarthy\'s Red Scare crusade', slug: 'j-parnell-thomas' }
  ],
  'joseph-mengele': [
    { name: 'Efraim Zuroff', relationship: 'Nazi hunter who searched for Mengele in South America', slug: 'efraim-zuroff' },
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist; Mengele fled while Braun was recruited', slug: 'wernher-von-braun' }
  ],
  'joy-buolamwini': [
    { name: 'Timnit Gebru', relationship: 'Fellow AI ethics researcher fighting algorithmic bias', slug: 'timnit-gebru' },
    { name: 'Hoan Ton-That', relationship: 'Clearview AI founder whose technology Buolamwini criticized', slug: 'hoan-ton-that' },
    { name: 'Clare Garvie', relationship: 'Fellow facial recognition accountability researcher', slug: 'clare-garvie' }
  ],
  'juan-manuel-santos': [
    { name: 'Alvaro Uribe', relationship: 'Predecessor as Colombian president with opposing peace stance', slug: 'alvaro-uribe' }
  ],
  'julius-chambers': [
    { name: 'Thurgood Marshall', relationship: 'Fellow NAACP Legal Defense Fund civil rights lawyer', slug: 'thurgood-marshall' }
  ],
  'julius-rosenberg': [
    { name: 'Ethel Rosenberg', relationship: 'Wife and co-defendant executed for espionage', slug: 'ethel-rosenberg' },
    { name: 'Joseph McCarthy', relationship: 'McCarthy era paranoia fueled the Rosenbergs\' prosecution', slug: 'joseph-mccarthy' }
  ],
  'kaare-svalastoga': [
    { name: 'Charles Davenport', relationship: 'Fellow eugenics researcher', slug: 'charles-davenport' }
  ],
  'karen-attiah': [
    { name: 'Jamal Khashoggi', relationship: 'Washington Post colleague who was killed; Attiah edited his columns', slug: 'jamal-khashoggi' }
  ],
  'karen-bass': [
    { name: 'Maxine Waters', relationship: 'Fellow California progressive politician', slug: 'maxine-waters' }
  ],
  'karen-silkwood': [
    { name: 'Daniel Ellsberg', relationship: 'Fellow whistleblower who risked everything exposing nuclear dangers', slug: 'daniel-ellsberg' }
  ],
  'karl-brandt': [
    { name: 'Joseph Mengele', relationship: 'Fellow Nazi medical experimentation figure', slug: 'joseph-mengele' },
    { name: 'Wernher von Braun', relationship: 'Fellow figure in Nazi wartime atrocities', slug: 'wernher-von-braun' }
  ],
  'karl-rove': [
    { name: 'George W. Bush', relationship: 'Chief political strategist known as "Bush\'s Brain"', slug: 'george-w-bush' },
    { name: 'Chris Jankowski', relationship: 'Fellow architect of Republican political strategy including REDMAP', slug: 'chris-jankowski' },
    { name: 'Roger Ailes', relationship: 'Fellow GOP operative who shaped Republican media strategy', slug: 'roger-ailes' }
  ],
  'katherine-gun': [
    { name: 'Daniel Ellsberg', relationship: 'Fellow whistleblower who praised Gun\'s brave disclosure', slug: 'daniel-ellsberg' },
    { name: 'Colin Powell', relationship: 'Gun exposed illegal US spying to push UN Iraq war vote Powell led', slug: 'colin-powell' }
  ],
  'kathleen-janette-neal': [
    { name: 'Fred Hampton', relationship: 'Black Panther leader tied to Neal\'s activist community', slug: 'fred-hampton' }
  ],
  'kathy-kleiman': [
    { name: 'Tim Berners-Lee', relationship: 'Fellow internet/computing pioneer and advocate', slug: 'tim-berners-lee' }
  ],
  'keith-noreika': [
    { name: 'Mick Mulvaney', relationship: 'Noreika served under Mulvaney at OCC/CFPB', slug: 'mick-mulvaney' }
  ],
  'keith-raniere': [
    { name: 'Allison Mack', relationship: 'Actress who recruited NXIVM members for Raniere\'s sex cult', slug: 'allison-mack' }
  ],
  'kelcy-warren': [
    { name: 'Dave Archambault II', relationship: 'Standing Rock Sioux chairman who fought Warren\'s DAPL', slug: 'dave-archambault-ii' },
    { name: 'Chase Iron Eyes', relationship: 'Activist arrested protesting Warren\'s Dakota Access Pipeline', slug: 'chase-iron-eyes' }
  ],
  'ken-feinberg': [
    { name: 'Tony Hayward', relationship: 'Feinberg administered BP Deepwater Horizon victim fund after Hayward\'s spill', slug: 'tony-hayward' }
  ],
  'kenneth-lay': [
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO under Lay\'s chairmanship', slug: 'jeffrey-skilling' },
    { name: 'Andrew Fastow', relationship: 'Enron CFO who created fraudulent partnerships under Lay', slug: 'andrew-fastow' },
    { name: 'Sherron Watkins', relationship: 'Enron VP who warned Lay about accounting fraud', slug: 'sherron-watkins' }
  ],
  'kevon-king': [
    { name: 'Bryan Stevenson', relationship: 'Fellow criminal justice reformer fighting systemic racism', slug: 'bryan-stevenson' }
  ],
  'kit-carson': [
    { name: 'John Chivington', relationship: 'Fellow perpetrator of violence against Native Americans', slug: 'john-chivington' },
    { name: 'James Knox Polk', relationship: 'President during era of Carson\'s southwestern campaigns', slug: 'james-knox-polk' }
  ],
  'kofi-annan': [
    { name: 'Romeo Dallaire', relationship: 'UN commander in Rwanda who begged Annan for reinforcements', slug: 'romeo-dallaire' },
    { name: 'Boutros Boutros-Ghali', relationship: 'Predecessor as UN Secretary-General', slug: 'boutros-boutros-ghali' }
  ],
  'kristian-lum': [
    { name: 'Jeff Brantingham', relationship: 'PredPol creator whose algorithm Lum proved perpetuated bias', slug: 'jeff-brantingham' },
    { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', slug: 'joy-buolamwini' }
  ],
  'kurush-mistry': [
    { name: 'Arundhati Roy', relationship: 'Fellow Indian activist documenting corporate displacement', slug: 'arundhati-roy' }
  ],
  'ladonna-brave-bull-allard': [
    { name: 'Dave Archambault II', relationship: 'Fellow Standing Rock leader', slug: 'dave-archambault-ii' },
    { name: 'Chase Iron Eyes', relationship: 'Fellow DAPL resistance leader', slug: 'chase-iron-eyes' },
    { name: 'Kelcy Warren', relationship: 'Energy Transfer CEO whose pipeline Allard protested', slug: 'kelcy-warren' }
  ],
  'lamar-smith': [
    { name: 'Henry Waxman', relationship: 'Congressional opponent on climate investigation', slug: 'henry-waxman' }
  ],
  'larry-mitchell': [
    { name: 'David Koresh', relationship: 'ATF agent in initial Waco raid', slug: 'david-koresh' }
  ],
  'larry-potts': [
    { name: 'Jeff Jamar', relationship: 'FBI supervisor over Jamar during Waco siege', slug: 'jeff-jamar' },
    { name: 'Lon Horiuchi', relationship: 'FBI sniper at Ruby Ridge under Potts\'s rules of engagement', slug: 'lon-horiuchi' }
  ],
  'latasha-harlins': [
    { name: 'Soon Ja Du', relationship: 'Korean shopkeeper who shot and killed Harlins', slug: 'soon-ja-du' },
    { name: 'Rodney King', relationship: 'Harlins\' death and King beating together sparked LA riots', slug: 'rodney-king' }
  ],
  'laura-poitras': [
    { name: 'Edward Snowden', relationship: 'Filmmaker who received and published Snowden\'s NSA revelations', slug: 'edward-snowden' },
    { name: 'Glenn Greenwald', relationship: 'Journalist partner who co-broke Snowden story', slug: 'glenn-greenwald' },
    { name: 'Julian Assange', relationship: 'Fellow figure in WikiLeaks/surveillance journalism sphere', slug: 'julian-assange' }
  ],
  'lee-raymond': [
    { name: 'James Black', relationship: 'Exxon scientist whose climate findings Raymond suppressed', slug: 'james-black' },
    { name: 'Rex Tillerson', relationship: 'Successor as Exxon CEO', slug: 'rex-tillerson' },
    { name: 'Naomi Oreskes', relationship: 'Historian who documented Exxon\'s climate denial under Raymond', slug: 'naomi-oreskes' }
  ],
  'leopoldo-lopez': [
    { name: 'Nicolas Maduro', relationship: 'Venezuelan authoritarian who imprisoned Lopez', slug: 'nicolas-maduro' },
    { name: 'Juan Guaido', relationship: 'Political ally in Venezuelan opposition', slug: 'juan-guaido' }
  ],
  'lessie-randle': [
    { name: 'Viola Fletcher', relationship: 'Fellow Tulsa Race Massacre descendant seeking reparations', slug: 'viola-fletcher' },
    { name: 'Hughes Van Ellis', relationship: 'Fellow elderly Tulsa Massacre descendant', slug: 'hughes-van-ellis' }
  ],
  'lewis-strauss': [
    { name: 'J. Robert Oppenheimer', relationship: 'Orchestrated Oppenheimer\'s security clearance revocation', slug: 'j-robert-oppenheimer' },
    { name: 'Edward Teller', relationship: 'Ally who testified against Oppenheimer at Strauss\'s instigation', slug: 'edward-teller' },
    { name: 'John Anjain', relationship: 'Marshall Islands victim of nuclear tests Strauss authorized', slug: 'john-anjain' }
  ],
  'licio-gelli': [
    { name: 'Roberto Calvi', relationship: 'Banker connected to Gelli\'s P2 Lodge found dead', slug: 'roberto-calvi' },
    { name: 'Giulio Andreotti', relationship: 'Italian PM linked to Gelli\'s P2 masonic lodge', slug: 'giulio-andreotti' }
  ],
  'lloyd-austin': [
    { name: 'Mark Milley', relationship: 'Fellow Biden Pentagon leader - Milley as Joint Chiefs Chairman', slug: 'mark-milley' }
  ],
  'lon-horiuchi': [
    { name: 'Larry Potts', relationship: 'FBI supervisor who set rules of engagement at Ruby Ridge', slug: 'larry-potts' },
    { name: 'Vicki Weaver', relationship: 'Horiuchi shot and killed Vicki Weaver at Ruby Ridge', slug: 'vicki-weaver' },
    { name: 'Randy Weaver', relationship: 'Ruby Ridge standoff subject whose wife Horiuchi killed', slug: 'randy-weaver' }
  ],
  'loretta-lynch': [
    { name: 'James Comey', relationship: 'FBI Director during Lynch\'s tenure as AG', slug: 'james-comey' },
    { name: 'Barack Obama', relationship: 'Appointed Lynch as Attorney General', slug: 'barack-obama' }
  ],
  'louis-brandeis': [
    { name: 'Woodrow Wilson', relationship: 'Wilson appointed Brandeis to Supreme Court', slug: 'woodrow-wilson' }
  ],
  'louis-farrakhan': [
    { name: 'Malcolm X', relationship: 'Former Nation of Islam rival whose assassination implicates NOI figures', slug: 'malcolm-x' },
    { name: 'Jesse Jackson', relationship: 'Complicated parallel Black leadership relationship', slug: 'jesse-jackson' }
  ],
  'louis-freeh': [
    { name: 'Larry Potts', relationship: 'Promoted Potts despite Ruby Ridge failures, then had to demote him', slug: 'larry-potts' },
    { name: 'Robert Hanssen', relationship: 'FBI spy captured under Freeh\'s directorship', slug: 'robert-hanssen' }
  ],
  'lyle-menendez': [
    { name: 'Erik Menendez', relationship: 'Brother and co-defendant in parents\' murder', slug: 'erik-menendez' }
  ],
  'lyndon-b-johnson': [
    { name: 'Lee Harvey Oswald', relationship: 'Became president after JFK assassination', slug: 'lee-harvey-oswald' },
    { name: 'Robert McNamara', relationship: 'Defense Secretary who expanded Vietnam War under LBJ', slug: 'robert-mcnamara' },
    { name: 'J. Edgar Hoover', relationship: 'FBI Director who ran COINTELPRO during LBJ\'s presidency', slug: 'j-edgar-hoover' },
    { name: 'Martin Luther King Jr', relationship: 'Signed Civil Rights Act but FBI surveilled King under LBJ', slug: 'martin-luther-king-jr' }
  ],
  'lynndie-england': [
    { name: 'Charles Graner', relationship: 'Abu Ghraib superior and ringleader who instructed England', slug: 'charles-graner' },
    { name: 'Janis Karpinski', relationship: 'Brigade commander at Abu Ghraib during abuses', slug: 'janis-karpinski' }
  ]
};

insertKnownAssociates(data);
