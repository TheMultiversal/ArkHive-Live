const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 13: tim through end of alphabet + remaining
const data = {
  'tim-moore': [
    { name: 'Phil Berger', relationship: 'Fellow NC Republican gerrymandering figure', slug: 'phil-berger' },
    { name: 'Thomas Hofeller', relationship: 'GOP mapmaker whose work Moore used', slug: 'thomas-hofeller' }
  ],
  'tim-phillips': [
    { name: 'Richard Fink', relationship: 'Koch network strategist alongside Phillips', slug: 'richard-fink' },
    { name: 'Charles Koch', relationship: 'Koch funded Americans for Prosperity that Phillips runs', slug: 'charles-koch' }
  ],
  'tim-russ': [
    { name: 'Jeff Jamar', relationship: 'ATF negotiator during Waco siege', slug: 'jeff-jamar' }
  ],
  'tim-walberg': [
    { name: 'Betsy DeVos', relationship: 'Michigan congressman aligned with DeVos education agenda', slug: 'betsy-devos' }
  ],
  'timothy-mellon': [
    { name: 'Donald Trump', relationship: 'Largest individual donor to Trump Super PAC', slug: 'donald-trump' }
  ],
  'timothy-olson': [
    { name: 'David Koresh', relationship: 'ATF agent during Waco raid', slug: 'david-koresh' }
  ],
  'timothy-purdon': [
    { name: 'Timothy Purdon', relationship: 'US Attorney involved in DAPL legal proceedings', slug: 'timothy-purdon' }
  ],
  'timothy-sloan': [
    { name: 'John Stumpf', relationship: 'Succeeded Stumpf as Wells Fargo CEO during fake accounts scandal', slug: 'john-stumpf' },
    { name: 'Carrie Tolstedt', relationship: 'Wells Fargo exec who ran division creating fake accounts under Sloan', slug: 'carrie-tolstedt' }
  ],
  'timothy-tyson': [
    { name: 'Mamie Till-Mobley', relationship: 'Historian who documented new evidence about Till murder', slug: 'mamie-till-mobley' },
    { name: 'Roy Bryant', relationship: 'Tyson revealed Bryant\'s wife recanted Till accusations', slug: 'roy-bryant' }
  ],
  'tom-harkin': [
    { name: 'Tom Saffer', relationship: 'Senator who championed atomic veterans Saffer represented', slug: 'tom-saffer' }
  ],
  'tom-hayes': [
    { name: 'Bob Diamond', relationship: 'Barclays CEO during LIBOR manipulation Hayes participated in', slug: 'bob-diamond' },
    { name: 'Terry Farr', relationship: 'Fellow LIBOR manipulation figure', slug: 'terry-farr' },
    { name: 'Philippe Moryoussef', relationship: 'Fellow LIBOR trader', slug: 'philippe-moryoussef' }
  ],
  'tom-saffer': [
    { name: 'Orville Kelly', relationship: 'Fellow atomic veteran fighting for recognition', slug: 'orville-kelly' },
    { name: 'Tom Harkin', relationship: 'Senator who championed atomic veterans', slug: 'tom-harkin' }
  ],
  'ton-that-tung': [
    { name: 'Nguyen Viet Nhan', relationship: 'Fellow Vietnamese documenting Agent Orange health effects', slug: 'nguyen-viet-nhan' }
  ],
  'tree-africa': [
    { name: 'Ramona Africa', relationship: 'Fellow MOVE member', slug: 'ramona-africa' },
    { name: 'John Africa', relationship: 'MOVE founder', slug: 'john-africa' }
  ],
  'tyler-shultz': [
    { name: 'Elizabeth Holmes', relationship: 'Theranos whistleblower who reported fraud by Holmes', slug: 'elizabeth-holmes' },
    { name: 'John Carreyrou', relationship: 'WSJ reporter Shultz went to with Theranos evidence', slug: 'john-carreyrou' },
    { name: 'Erika Cheung', relationship: 'Fellow Theranos whistleblower', slug: 'erika-cheung' }
  ],
  'vang-pao': [
    { name: 'Ted Shackley', relationship: 'CIA officer who directed Vang Pao\'s Secret War in Laos', slug: 'ted-shackley' },
    { name: 'William Colby', relationship: 'CIA official overseeing Southeast Asia operations with Pao', slug: 'william-colby' }
  ],
  'vernon-walters': [
    { name: 'Richard Nixon', relationship: 'Deputy CIA Director who assisted Watergate cover-up for Nixon', slug: 'richard-nixon' }
  ],
  'vicki-weaver': [
    { name: 'Randy Weaver', relationship: 'Husband at Ruby Ridge; killed by FBI sniper', slug: 'randy-weaver' },
    { name: 'Lon Horiuchi', relationship: 'FBI sniper who shot and killed Vicki', slug: 'lon-horiuchi' },
    { name: 'Samuel Weaver', relationship: 'Son also killed during Ruby Ridge standoff', slug: 'samuel-weaver' }
  ],
  'victor-denoble': [
    { name: 'Thomas Stephens', relationship: 'Tobacco executive whose company suppressed DeNoble\'s nicotine research', slug: 'thomas-stephens' },
    { name: 'C. Everett Koop', relationship: 'Surgeon General whose anti-tobacco efforts DeNoble\'s research supported', slug: 'c-everett-koop' }
  ],
  'victor-hugo-green': [
    { name: 'Robert Moses', relationship: 'Published Green Book to help Black travelers navigate Moses\' segregated America', slug: 'robert-moses' }
  ],
  'vincenzo-vinciguerra': [
    { name: 'Stefano Delle Chiaie', relationship: 'Fellow Italian far-right operative in Gladio network', slug: 'stefano-delle-chiaie' },
    { name: 'Licio Gelli', relationship: 'P2 Lodge figure in Gladio conspiracy', slug: 'licio-gelli' }
  ],
  'viola-fletcher': [
    { name: 'Hughes Van Ellis', relationship: 'Fellow elderly Tulsa Race Massacre survivor', slug: 'hughes-van-ellis' },
    { name: 'Lessie Randle', relationship: 'Fellow Tulsa Massacre descendant seeking reparations', slug: 'lessie-randle' },
    { name: 'Scott Ellsworth', relationship: 'Historian who documented the massacre Fletcher survived', slug: 'scott-ellsworth' }
  ],
  'vladimiro-montesinos': [
    { name: 'Alberto Fujimori', relationship: 'Spy chief for Fujimori\'s authoritarian regime', slug: 'alberto-fujimori' }
  ],
  'walter-mcmillian': [
    { name: 'Bryan Stevenson', relationship: 'EJI attorney who fought to exonerate McMillian from death row', slug: 'bryan-stevenson' }
  ],
  'walter-schreiber': [
    { name: 'Wernher von Braun', relationship: 'Fellow Nazi scientist brought to US via Operation Paperclip', slug: 'wernher-von-braun' },
    { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip scientist', slug: 'hubertus-strughold' },
    { name: 'Kurt Blome', relationship: 'Fellow Nazi Paperclip scientist', slug: 'kurt-blome' }
  ],
  'walter-white-naacp': [
    { name: 'Ida B. Wells', relationship: 'Fellow anti-lynching crusader', slug: 'ida-b-wells' },
    { name: 'Thurgood Marshall', relationship: 'NAACP legal counsel during White\'s leadership', slug: 'thurgood-marshall' }
  ],
  'warren-anderson': [
    { name: 'Arundhati Roy', relationship: 'Indian activist who demanded Anderson face justice for Bhopal disaster', slug: 'arundhati-roy' }
  ],
  'wendell-potter': [
    { name: 'Karen Ignagni', relationship: 'AHIP president whose industry Potter exposed as whistleblower', slug: 'karen-ignagni' },
    { name: 'Stephen Hemsley', relationship: 'Insurance CEO whose industry practices Potter revealed', slug: 'stephen-hemsley' }
  ],
  'wernher-von-braun': [
    { name: 'Walter Schreiber', relationship: 'Fellow Nazi scientist recruited via Operation Paperclip', slug: 'walter-schreiber' },
    { name: 'Hubertus Strughold', relationship: 'Fellow Paperclip scientist', slug: 'hubertus-strughold' },
    { name: 'Reinhard Gehlen', relationship: 'Fellow Nazi recruited by US intelligence', slug: 'reinhard-gehlen' }
  ],
  'wesley-lowery': [
    { name: 'Radley Balko', relationship: 'Fellow journalist covering police violence and accountability', slug: 'radley-balko' }
  ],
  'wilbur-tennant': [
    { name: 'Rob Bilott', relationship: 'Farmer who brought DuPont contamination to attorney Bilott', slug: 'rob-bilott' },
    { name: 'Robert Bilott', relationship: 'Attorney Tennant contacted about poisoned cattle', slug: 'robert-bilott' }
  ],
  'william-colby': [
    { name: 'Nelson Brickham', relationship: 'CIA officer who designed Phoenix Program under Colby', slug: 'nelson-brickham' },
    { name: 'Robert Komer', relationship: 'CORDS director who worked with Colby on pacification', slug: 'robert-komer' },
    { name: 'Vang Pao', relationship: 'Hmong general in CIA Secret War Colby oversaw', slug: 'vang-pao' }
  ],
  'william-craig': [
    { name: 'Thomas Parran', relationship: 'PHS official during unethical medical experimentation era', slug: 'thomas-parran' }
  ],
  'william-degan': [
    { name: 'Randy Weaver', relationship: 'US Marshal killed in Ruby Ridge shootout with Weaver\'s group', slug: 'randy-weaver' },
    { name: 'Kevin Harris', relationship: 'Harris involved in shootout that killed Degan', slug: 'kevin-harris' },
    { name: 'Samuel Weaver', relationship: 'Also killed in same Ruby Ridge shootout', slug: 'samuel-weaver' }
  ],
  'william-harper': [
    { name: 'Nathan Bedford Forrest', relationship: 'Fellow pro-slavery ideologue', slug: 'nathan-bedford-forrest' }
  ],
  'william-levitt': [
    { name: 'Robert Moses', relationship: 'Fellow mid-century figure enforcing housing segregation', slug: 'robert-moses' },
    { name: 'Frederick Babcock', relationship: 'FHA appraiser whose racist guidelines Levitt exploited', slug: 'frederick-babcock' }
  ],
  'william-lowe': [
    { name: 'Thomas Parran', relationship: 'Connected to PHS during Tuskegee era', slug: 'thomas-parran' }
  ],
  'william-newell': [
    { name: 'John Dodson', relationship: 'ATF supervisor in Fast and Furious that Dodson exposed', slug: 'john-dodson' },
    { name: 'Kenneth Melson', relationship: 'ATF director during Newell\'s Fast and Furious operation', slug: 'kenneth-melson' }
  ],
  'william-pepper': [
    { name: 'Lloyd Jowers', relationship: 'Uncovered Jowers\' role in MLK assassination conspiracy', slug: 'lloyd-jowers' },
    { name: 'James Earl Ray', relationship: 'Represented Ray and argued he was not the lone assassin', slug: 'james-earl-ray' },
    { name: 'Martin Luther King Jr', relationship: 'Spent decades investigating MLK\'s assassination', slug: 'martin-luther-king-jr' }
  ],
  'william-rogers': [
    { name: 'Richard Nixon', relationship: 'Secretary of State sidelined by Nixon and Kissinger', slug: 'richard-nixon' },
    { name: 'Henry Kissinger', relationship: 'Kissinger bypassed Rogers on key foreign policy decisions', slug: 'henry-kissinger' }
  ],
  'william-sullivan': [
    { name: 'J. Edgar Hoover', relationship: 'FBI No. 3 who ran COINTELPRO operations under Hoover', slug: 'j-edgar-hoover' },
    { name: 'Martin Luther King Jr', relationship: 'Wrote letter urging King to commit suicide', slug: 'martin-luther-king-jr' }
  ],
  'william-tecumseh-sherman': [
    { name: 'Ulysses S. Grant', relationship: 'Fellow Union general; Sherman served under Grant', slug: 'ulysses-s-grant' },
    { name: 'Philip Sheridan', relationship: 'Fellow Union general who pursued Indian Wars', slug: 'philip-sheridan' }
  ],
  'william-westmoreland': [
    { name: 'Robert McNamara', relationship: 'Vietnam commander under McNamara\'s defense leadership', slug: 'robert-mcnamara' },
    { name: 'John Paul Vann', relationship: 'Adviser who challenged Westmoreland\'s optimism', slug: 'john-paul-vann' },
    { name: 'Lyndon Johnson', relationship: 'Commander in Chief during Westmoreland\'s Vietnam command', slug: 'lyndon-johnson' }
  ],
  'willie-reed': [
    { name: 'Mamie Till-Mobley', relationship: 'Brave witness who testified about Emmett Till\'s murder', slug: 'mamie-till-mobley' },
    { name: 'Moses Wright', relationship: 'Fellow courageous witness at Till murder trial', slug: 'moses-wright' }
  ],
  'wilson-goode': [
    { name: 'Ramona Africa', relationship: 'Mayor who ordered MOVE bombing that killed 11; Ramona survived', slug: 'ramona-africa' },
    { name: 'John Africa', relationship: 'MOVE founder killed in bombing Goode ordered', slug: 'john-africa' },
    { name: 'Frank Powell', relationship: 'Officer who dropped the bomb on Goode\'s orders', slug: 'frank-powell' }
  ],
  'winston-churchill': [
    { name: 'Harry Truman', relationship: 'Wartime ally and co-architect of post-WWII order', slug: 'harry-truman' },
    { name: 'Dwight D. Eisenhower', relationship: 'Allied supreme commander whom Churchill worked with', slug: 'dwight-d-eisenhower' }
  ],
  'woodrow-wilson': [
    { name: 'Louis Brandeis', relationship: 'Wilson appointed Brandeis to Supreme Court', slug: 'louis-brandeis' },
    { name: 'Nathan Bedford Forrest', relationship: 'Wilson screened KKK-glorifying Birth of a Nation in White House', slug: 'nathan-bedford-forrest' }
  ],
  'xanana-gusmao': [
    { name: 'Jose Ramos-Horta', relationship: 'Fellow East Timorese independence leader', slug: 'jose-ramos-horta' },
    { name: 'Suharto', relationship: 'Indonesian dictator who occupied Gusmao\'s East Timor', slug: 'suharto' }
  ],
  'alan-cranston': [
    { name: 'Charles Keating', relationship: 'Keating Five senator who received major donations from Keating', slug: 'charles-keating' },
    { name: 'John Glenn', relationship: 'Fellow Keating Five senator', slug: 'john-glenn' }
  ],
  'alvaro-colom': [
    { name: 'Otto Perez Molina', relationship: 'Successor as Guatemalan president', slug: 'otto-perez-molina' }
  ],
  'bethany-mclean': [
    { name: 'Sherron Watkins', relationship: 'Watkins\' internal warnings corroborated McLean\'s Enron expose', slug: 'sherron-watkins' },
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO whose fraud McLean helped expose', slug: 'jeffrey-skilling' }
  ],
  'bob-crowley': [
    { name: 'John Sopko', relationship: 'Afghanistan reconstruction oversight figure', slug: 'john-sopko' }
  ],
  'bounkham-phonesavanh': [
    { name: 'Joseph Weekley', relationship: 'Fellow victim of botched SWAT raids; toddler injured by flashbang', slug: 'joseph-weekley' }
  ],
  'carrie-tolstedt': [
    { name: 'John Stumpf', relationship: 'Wells Fargo CEO during Tolstedt\'s fake accounts scandal', slug: 'john-stumpf' },
    { name: 'Timothy Sloan', relationship: 'Successor CEO who faced fallout from Tolstedt\'s division', slug: 'timothy-sloan' }
  ],
  'cathy-oneil': [
    { name: 'Joy Buolamwini', relationship: 'Fellow algorithmic accountability researcher', slug: 'joy-buolamwini' },
    { name: 'Ruha Benjamin', relationship: 'Fellow researcher on technology and racial justice', slug: 'ruha-benjamin' }
  ],
  'chester-crocker': [
    { name: 'P.W. Botha', relationship: 'Reagan\'s Africa policy point man during Botha\'s apartheid', slug: 'pw-botha' },
    { name: 'Randall Robinson', relationship: 'Anti-apartheid activist who opposed Crocker\'s constructive engagement', slug: 'randall-robinson' }
  ]
};

insertKnownAssociates(data);
