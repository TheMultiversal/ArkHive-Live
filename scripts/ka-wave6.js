const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 6: D-G profiles
const data = {
  'duane-parde': [
    { name: 'Art Pope', relationship: 'Fellow anti-tax/conservative policy advocate', slug: 'art-pope' }
  ],
  'duke-tran': [
    { name: 'Ton That Tung', relationship: 'Fellow Vietnamese scientist studying Agent Orange effects', slug: 'ton-that-tung' }
  ],
  'dw-griffith': [
    { name: 'Nathan Bedford Forrest', relationship: 'Film glorified KKK founded by Forrest', slug: 'nathan-bedford-forrest' },
    { name: 'Woodrow Wilson', relationship: 'Wilson screened Birth of a Nation at White House', slug: 'woodrow-wilson' }
  ],
  'dwight-d-eisenhower': [
    { name: 'Allen Dulles', relationship: 'CIA Director under Eisenhower who ran covert operations', slug: 'allen-dulles' },
    { name: 'J. Robert Oppenheimer', relationship: 'Revoked Oppenheimer\'s security clearance', slug: 'j-robert-oppenheimer' },
    { name: 'Henry Cabot Lodge Jr', relationship: 'Ambassador to Vietnam under Eisenhower', slug: 'henry-cabot-lodge-jr' }
  ],
  'earl-stadtman': [
    { name: 'Thomas Parran', relationship: 'Fellow federal health researcher', slug: 'thomas-parran' }
  ],
  'earl-warren': [
    { name: 'Lee Harvey Oswald', relationship: 'Chief Justice who led Warren Commission on JFK assassination', slug: 'lee-harvey-oswald' },
    { name: 'John L. DeWitt', relationship: 'As CA governor, Warren supported DeWitt\'s Japanese internment', slug: 'john-l-dewitt' },
    { name: 'Ruth Bader Ginsburg', relationship: 'Fellow lasting Supreme Court legacy', slug: 'ruth-bader-ginsburg' }
  ],
  'earle-wheeler': [
    { name: 'William Westmoreland', relationship: 'Vietnam War general under Wheeler\'s Joint Chiefs chairmanship', slug: 'william-westmoreland' },
    { name: 'Lyndon Johnson', relationship: 'Joint Chiefs Chairman who advised LBJ on Vietnam', slug: 'lyndon-johnson' }
  ],
  'ed-rendell': [
    { name: 'Wilson Goode', relationship: 'Successor as Philadelphia mayor after MOVE bombing', slug: 'wilson-goode' }
  ],
  'edward-bernays': [
    { name: 'United Fruit Company', relationship: 'Created propaganda for Guatemala coup', slug: 'sam-zemurray' },
    { name: 'Edward Horrigan', relationship: 'Bernays\' PR methods used by tobacco industry Horrigan led', slug: 'edward-horrigan' }
  ],
  'edward-garvey': [
    { name: 'Stuart Appelbaum', relationship: 'Fellow labor organizer and union leader', slug: 'stuart-appelbaum' }
  ],
  'edward-hanrahan': [
    { name: 'Fred Hampton', relationship: 'State\'s Attorney who authorized raid that killed Hampton', slug: 'fred-hampton' },
    { name: 'Akua Njeri', relationship: 'Hampton\'s partner who was present during the raid', slug: 'akua-njeri' },
    { name: 'Bobby Rush', relationship: 'Black Panther who co-founded Chicago chapter with Hampton', slug: 'bobby-rush' }
  ],
  'edward-horrigan': [
    { name: 'Geoffrey Bible', relationship: 'Fellow tobacco industry executive', slug: 'geoffrey-bible' },
    { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed tobacco industry practices', slug: 'jeffrey-wigand' },
    { name: 'Addison Yeaman', relationship: 'Tobacco industry insider who documented nicotine addiction knowledge', slug: 'addison-yeaman' }
  ],
  'edward-lansdale': [
    { name: 'James Angleton', relationship: 'CIA counterintelligence chief during Lansdale\'s operations', slug: 'james-angleton' },
    { name: 'John Paul Vann', relationship: 'Fellow key figure in Vietnam counterinsurgency', slug: 'john-paul-vann' },
    { name: 'Fidel Castro', relationship: 'Target of Lansdale\'s Operation Mongoose to overthrow Castro', slug: 'fidel-castro' }
  ],
  'edward-r-murrow': [
    { name: 'Joseph McCarthy', relationship: 'Confronted McCarthy on CBS, helping end Red Scare', slug: 'joseph-mccarthy' },
    { name: 'Ben Bradlee', relationship: 'Fellow pioneering journalist of the era', slug: 'ben-bradlee' }
  ],
  'edward-teller': [
    { name: 'J. Robert Oppenheimer', relationship: 'Testified against Oppenheimer in security clearance hearing', slug: 'j-robert-oppenheimer' },
    { name: 'Lewis Strauss', relationship: 'AEC chairman who sided with Teller against Oppenheimer', slug: 'lewis-strauss' },
    { name: 'Wernher von Braun', relationship: 'Fellow Cold War weapons scientist', slug: 'wernher-von-braun' }
  ],
  'edwin-gray': [
    { name: 'Charles Keating', relationship: 'Federal regulator who tried to stop Keating\'s S&L abuses', slug: 'charles-keating' },
    { name: 'Danny Wall', relationship: 'Successor who was more lenient toward Keating', slug: 'danny-wall' }
  ],
  'efrain-rios-montt': [
    { name: 'Rigoberta Menchu', relationship: 'Nobel laureate who fought for justice for Rios Montt genocide', slug: 'rigoberta-menchu' },
    { name: 'Elliott Abrams', relationship: 'US official who supported Rios Montt\'s regime', slug: 'elliott-abrams' },
    { name: 'Ronald Reagan', relationship: 'Reagan called Rios Montt "a man of great personal integrity"', slug: 'ronald-reagan' }
  ],
  'eh-wah': [
    { name: 'Jeff Sessions', relationship: 'DOJ under Sessions pursued civil forfeiture case against Eh Wah', slug: 'jeff-sessions' }
  ],
  'elaine-riddick': [
    { name: 'Carrie Buck', relationship: 'Fellow forced sterilization victim', slug: 'carrie-buck' },
    { name: 'Paul Popenoe', relationship: 'Eugenicist whose ideology led to forced sterilizations like Riddick\'s', slug: 'paul-popenoe' }
  ],
  'elia-kazan': [
    { name: 'Dalton Trumbo', relationship: 'Kazan named names to HUAC, Trumbo was blacklisted for refusing', slug: 'dalton-trumbo' },
    { name: 'Joseph McCarthy', relationship: 'McCarthy era drove Kazan to cooperate with HUAC', slug: 'joseph-mccarthy' }
  ],
  'elijah-muhammad': [
    { name: 'Malcolm X', relationship: 'NOI leader whose follower Malcolm X became before split', slug: 'malcolm-x' },
    { name: 'Louis Farrakhan', relationship: 'NOI leader who succeeded Elijah Muhammad', slug: 'louis-farrakhan' },
    { name: 'Muhammad Abdul Aziz', relationship: 'NOI member wrongfully convicted of Malcolm X assassination', slug: 'muhammad-abdul-aziz' }
  ],
  'elizabeth-warren': [
    { name: 'Bernie Sanders', relationship: 'Fellow progressive senator and 2020 presidential rival', slug: 'bernie-sanders' },
    { name: 'Richard Cordray', relationship: 'First CFPB director appointed after Warren\'s advocacy created the bureau', slug: 'richard-cordray' },
    { name: 'Gary Gensler', relationship: 'SEC chair aligned with Warren\'s financial regulation agenda', slug: 'gary-gensler' }
  ],
  'ellen-kullman': [
    { name: 'Edward Breen', relationship: 'Successor as DuPont CEO', slug: 'edward-breen' },
    { name: 'Rob Bilott', relationship: 'Attorney who exposed DuPont PFAS contamination during Kullman era', slug: 'rob-bilott' }
  ],
  'elliot-jaspin': [
    { name: 'James Loewen', relationship: 'Fellow researcher documenting sundown towns and racial expulsions', slug: 'james-loewen' }
  ],
  'elmo-zumwalt': [
    { name: 'Elmo Zumwalt III', relationship: 'Son who developed cancer from Agent Orange father ordered used', slug: 'elmo-zumwalt-iii' },
    { name: 'William Westmoreland', relationship: 'Fellow Vietnam War commander', slug: 'william-westmoreland' },
    { name: 'Alvin Young', relationship: 'Scientist hired by military to study Agent Orange Zumwalt ordered', slug: 'alvin-young' }
  ],
  'elmo-zumwalt-iii': [
    { name: 'Elmo Zumwalt', relationship: 'Father who ordered Agent Orange use that caused son\'s cancer', slug: 'elmo-zumwalt' },
    { name: 'Maude DeVictor', relationship: 'VA benefits worker who first documented Agent Orange health effects', slug: 'maude-devictor' }
  ],
  'emilio-massera': [
    { name: 'Leopoldo Galtieri', relationship: 'Fellow Argentine junta leader', slug: 'leopoldo-galtieri' }
  ],
  'emmett-till': [
    { name: 'Carolyn Bryant', relationship: 'Woman whose false accusation led to Till\'s lynching', slug: 'carolyn-bryant' },
    { name: 'Roy Bryant', relationship: 'One of Till\'s murderers acquitted by all-white jury', slug: 'roy-bryant' },
    { name: 'JW Milam', relationship: 'Co-murderer who confessed after acquittal', slug: 'jw-milam' },
    { name: 'Mamie Till-Mobley', relationship: 'Mother whose open-casket funeral sparked civil rights awakening', slug: 'mamie-till-mobley' },
    { name: 'Moses Wright', relationship: 'Great-uncle who bravely testified against killers in court', slug: 'moses-wright' }
  ],
  'eric-holder': [
    { name: 'Barack Obama', relationship: 'Attorney General under Obama 2009-2015', slug: 'barack-obama' },
    { name: 'Darrell Issa', relationship: 'House Republican who held Holder in contempt over Fast and Furious', slug: 'darrell-issa' },
    { name: 'Brian Terry', relationship: 'Border agent killed with Fast and Furious gun during Holder\'s tenure', slug: 'brian-terry' }
  ],
  'eric-schneiderman': [
    { name: 'Donald Trump', relationship: 'Investigated Trump University and Trump Foundation', slug: 'donald-trump' },
    { name: 'Harvey Weinstein', relationship: 'Led investigation of Weinstein before own abuse scandal broke', slug: 'harvey-weinstein' }
  ],
  'erika-cheung': [
    { name: 'Elizabeth Holmes', relationship: 'Theranos whistleblower who testified against Holmes', slug: 'elizabeth-holmes' },
    { name: 'Tyler Shultz', relationship: 'Fellow Theranos whistleblower', slug: 'tyler-shultz' }
  ],
  'erin-brockovich': [
    { name: 'Rob Bilott', relationship: 'Fellow environmental contamination attorney fighting chemical companies', slug: 'rob-bilott' },
    { name: 'Marc Edwards', relationship: 'Fellow water contamination advocate (Flint water crisis)', slug: 'marc-edwards' }
  ],
  'estelle-reel': [
    { name: 'Richard Henry Pratt', relationship: 'Fellow architect of Native American boarding school system', slug: 'richard-henry-pratt' }
  ],
  'ethel-rosenberg': [
    { name: 'Julius Rosenberg', relationship: 'Husband and co-defendant executed for espionage', slug: 'julius-rosenberg' },
    { name: 'David Greenglass', relationship: 'Brother whose testimony led to conviction', slug: 'david-greenglass' }
  ],
  'eunice-rivers': [
    { name: 'Thomas Parran', relationship: 'Surgeon General who oversaw Public Health Service during Tuskegee experiment', slug: 'thomas-parran' },
    { name: 'John Charles Cutler', relationship: 'PHS doctor who conducted parallel Guatemala experiments', slug: 'john-charles-cutler' }
  ],
  'eurico-guterres': [
    { name: 'Suharto', relationship: 'Indonesian-backed militia leader in East Timor', slug: 'suharto' },
    { name: 'Xanana Gusmao', relationship: 'East Timorese leader whose people Guterres terrorized', slug: 'xanana-gusmao' }
  ],
  'evan-parker': [
    { name: 'John Sopko', relationship: 'SIGAR inspector who monitored Afghanistan funds Parker oversaw', slug: 'john-sopko' }
  ],
  'felice-casson': [
    { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose confession aided Casson\'s investigation', slug: 'vincenzo-vinciguerra' },
    { name: 'Giulio Andreotti', relationship: 'Italian PM whose Gladio connections Casson exposed', slug: 'giulio-andreotti' }
  ],
  'felix-wormser': [
    { name: 'Clair Patterson', relationship: 'Scientists whose lead research Wormser\'s industry opposed', slug: 'clair-patterson' },
    { name: 'Robert Kehoe', relationship: 'Lead industry scientist', slug: 'robert-kehoe' }
  ],
  'fidel-castro': [
    { name: 'Che Guevara', relationship: 'Revolutionary comrade who helped lead Cuban revolution', slug: 'che-guevara' },
    { name: 'Nicolas Maduro', relationship: 'Venezuelan leader who continued Castro\'s socialist alliance', slug: 'nicolas-maduro' },
    { name: 'Edward Lansdale', relationship: 'CIA officer who ran Operation Mongoose to overthrow Castro', slug: 'edward-lansdale' },
    { name: 'Lee Harvey Oswald', relationship: 'Oswald\'s pro-Castro activities investigated after JFK assassination', slug: 'lee-harvey-oswald' }
  ],
  'five-omar-mualimm-ak': [
    { name: 'Albert Woodfox', relationship: 'Fellow solitary confinement survivor and prison reform advocate', slug: 'albert-woodfox' }
  ],
  'flint-taylor': [
    { name: 'Jon Burge', relationship: 'Attorney who spent decades exposing Burge torture ring', slug: 'jon-burge' },
    { name: 'Fred Hampton', relationship: 'Fought for justice in Hampton murder through civil litigation', slug: 'fred-hampton' }
  ],
  'frank-dipascali': [
    { name: 'Bernie Madoff', relationship: 'Madoff\'s chief financial officer and key co-conspirator', slug: 'bernie-madoff' },
    { name: 'Peter Madoff', relationship: 'Fellow Madoff firm insider', slug: 'peter-madoff' }
  ],
  'frank-powell': [
    { name: 'Wilson Goode', relationship: 'Officer who dropped bomb on MOVE house under Goode\'s order', slug: 'wilson-goode' },
    { name: 'Ramona Africa', relationship: 'MOVE member who survived the bombing Powell carried out', slug: 'ramona-africa' }
  ],
  'fred-branfman': [
    { name: 'Daniel Ellsberg', relationship: 'Fellow war critic who exposed secret bombing campaigns', slug: 'daniel-ellsberg' },
    { name: 'Noam Chomsky', relationship: 'Intellectual ally in opposing secret Laos bombing', slug: 'noam-chomsky' }
  ],
  'fred-gray': [
    { name: 'Rosa Parks', relationship: 'Attorney who represented Parks during Montgomery Bus Boycott', slug: 'rosa-parks' },
    { name: 'Martin Luther King Jr', relationship: 'Legal advisor to MLK and civil rights movement', slug: 'martin-luther-king-jr' }
  ],
  'fred-guttenberg': [
    { name: 'Chris Murphy', relationship: 'Senator who championed gun reform alongside Guttenberg', slug: 'chris-murphy' },
    { name: 'Nikolas Cruz', relationship: 'Father of Parkland victim - Cruz murdered his daughter Jaime', slug: 'nikolas-cruz' }
  ],
  'fred-hampton-jr': [
    { name: 'Fred Hampton', relationship: 'Father - Black Panther chairman assassinated by FBI/CPD', slug: 'fred-hampton' },
    { name: 'Akua Njeri', relationship: 'Mother who was present during father\'s assassination', slug: 'akua-njeri' },
    { name: 'Bobby Rush', relationship: 'Father\'s co-founder of Chicago Black Panther chapter', slug: 'bobby-rush' }
  ],
  'frederick-babcock': [
    { name: 'Homer Hoyt', relationship: 'Fellow architect of racist real estate valuation and redlining', slug: 'homer-hoyt' },
    { name: 'Robert Weaver', relationship: 'HUD Secretary who fought housing discrimination Babcock created', slug: 'robert-weaver' }
  ],
  'frederick-douglass': [
    { name: 'Abraham Lincoln', relationship: 'Advised Lincoln on emancipation and Black troops', slug: 'abraham-lincoln' },
    { name: 'Ida B. Wells', relationship: 'Fellow anti-lynching activist and civil rights pioneer', slug: 'ida-b-wells' },
    { name: 'William Lloyd Garrison', relationship: 'Abolitionist publisher who helped launch Douglass\'s career', slug: 'william-lloyd-garrison' }
  ],
  'frederick-hitz': [
    { name: 'William Casey', relationship: 'CIA director during Iran-Contra that Hitz later investigated as IG', slug: 'william-casey' },
    { name: 'Oliver North', relationship: 'Iran-Contra figure whose operations Hitz investigated', slug: 'oliver-north' }
  ],
  'frederik-obermaier': [
    { name: 'Bastian Obermayer', relationship: 'Co-journalist who broke Panama Papers story', slug: 'bastian-obermayer' },
    { name: 'Ramon Fonseca', relationship: 'Mossack Fonseca partner exposed by their reporting', slug: 'ramon-fonseca' }
  ],
  'gary-gensler': [
    { name: 'Elizabeth Warren', relationship: 'Senate ally pushing financial regulation agenda', slug: 'elizabeth-warren' },
    { name: 'Sam Bankman-Fried', relationship: 'FTX CEO whose crypto fraud SEC under Gensler prosecuted', slug: 'sam-bankman-fried' },
    { name: 'Changpeng Zhao', relationship: 'Binance CEO whom SEC charged under Gensler', slug: 'changpeng-zhao' }
  ],
  'gary-wang': [
    { name: 'Sam Bankman-Fried', relationship: 'FTX co-founder who testified against SBF', slug: 'sam-bankman-fried' },
    { name: 'Caroline Ellison', relationship: 'Fellow FTX insider who cooperated with prosecution', slug: 'caroline-ellison' },
    { name: 'Nishad Singh', relationship: 'Fellow FTX executive who pleaded guilty', slug: 'nishad-singh' }
  ],
  'geoffrey-supran': [
    { name: 'Naomi Oreskes', relationship: 'Co-researcher documenting fossil fuel industry climate disinformation', slug: 'naomi-oreskes' },
    { name: 'Lee Raymond', relationship: 'ExxonMobil CEO whose company Supran proved knew about climate change', slug: 'lee-raymond' }
  ],
  'georg-rickhey': [
    { name: 'Arthur Rudolph', relationship: 'Fellow Operation Paperclip scientist', slug: 'arthur-rudolph' },
    { name: 'Wernher von Braun', relationship: 'Senior Paperclip recruit from same V-2 program', slug: 'wernher-von-braun' }
  ],
  'george-armstrong-custer': [
    { name: 'Philip Sheridan', relationship: 'Commanding general who directed Custer\'s Indian War campaigns', slug: 'philip-sheridan' },
    { name: 'William Tecumseh Sherman', relationship: 'Army commander overseeing Plains Indian campaigns', slug: 'william-tecumseh-sherman' }
  ],
  'george-de-mohrenschildt': [
    { name: 'Lee Harvey Oswald', relationship: 'CIA-connected figure who befriended Oswald before JFK assassination', slug: 'lee-harvey-oswald' },
    { name: 'James Angleton', relationship: 'CIA counterintelligence chief who may have directed de Mohrenschildt', slug: 'james-angleton' }
  ],
  'george-romney': [
    { name: 'Robert Moses', relationship: 'Contemporary urban policy figure - Romney as HUD Secretary vs Moses\'s construction', slug: 'robert-moses' },
    { name: 'Robert Weaver', relationship: 'Predecessor as HUD Secretary', slug: 'robert-weaver' }
  ],
  'george-shultz': [
    { name: 'Elizabeth Holmes', relationship: 'Theranos board member who initially protected Holmes', slug: 'elizabeth-holmes' },
    { name: 'Tyler Shultz', relationship: 'Grandson who became Theranos whistleblower against George\'s wishes', slug: 'tyler-shultz' },
    { name: 'Ronald Reagan', relationship: 'Secretary of State under Reagan', slug: 'ronald-reagan' }
  ],
  'george-stinney-jr': [
    { name: 'George Wallace', relationship: 'Youngest person executed in US - symbol of Jim Crow justice Wallace defended', slug: 'george-wallace' }
  ],
  'gerald-chatham': [
    { name: 'Emmett Till', relationship: 'Prosecutor in Till murder case where killers were acquitted', slug: 'emmett-till' },
    { name: 'Moses Wright', relationship: 'Till\'s uncle who testified in Chatham\'s prosecution', slug: 'moses-wright' }
  ],
  'gerald-kennedy': [
    { name: 'Robert Houghton', relationship: 'LAPD investigation connected to RFK assassination', slug: 'robert-houghton' }
  ],
  'gerry-spence': [
    { name: 'Randy Weaver', relationship: 'Defended Weaver in Ruby Ridge trial, winning acquittal', slug: 'randy-weaver' }
  ],
  'gilbert-bigio': [
    { name: 'Jean-Bertrand Aristide', relationship: 'Haitian oligarch who opposed Aristide\'s populist government', slug: 'jean-bertrand-aristide' }
  ],
  'giulio-andreotti': [
    { name: 'Aldo Moro', relationship: 'PM linked to conspiracy behind Moro\'s kidnapping and murder', slug: 'aldo-moro' },
    { name: 'Licio Gelli', relationship: 'P2 Lodge master connected to Andreotti\'s political network', slug: 'licio-gelli' },
    { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose testimony exposed Andreotti\'s connections', slug: 'vincenzo-vinciguerra' }
  ],
  'giuseppe-santovito': [
    { name: 'Licio Gelli', relationship: 'P2 Lodge member and Italian intelligence chief', slug: 'licio-gelli' },
    { name: 'Giulio Andreotti', relationship: 'Italian PM connected to Santovito\'s intelligence networks', slug: 'giulio-andreotti' }
  ],
  'gonzalo-curiel': [
    { name: 'Donald Trump', relationship: 'Judge in Trump University case whom Trump attacked as biased', slug: 'donald-trump' }
  ],
  'gregore-sambor': [
    { name: 'Wilson Goode', relationship: 'Philadelphia police commissioner under Goode during MOVE bombing', slug: 'wilson-goode' },
    { name: 'Ramona Africa', relationship: 'MOVE member who survived the bombing Sambor oversaw', slug: 'ramona-africa' }
  ],
  'guillermo-endara': [
    { name: 'Manuel Noriega', relationship: 'Became president after US invasion deposed Noriega', slug: 'manuel-noriega' },
    { name: 'George H.W. Bush', relationship: 'Installed as president by US invasion ordered by Bush', slug: 'george-hw-bush' }
  ],
  'guillermo-garcia-sal': [
    { name: 'Oscar Romero', relationship: 'Salvadoran military linked to Romero assassination and civil war', slug: 'oscar-romero' },
    { name: 'Elliott Abrams', relationship: 'US official who supported Salvadoran military', slug: 'elliott-abrams' }
  ],
  'gul-rahman': [
    { name: 'Gina Haspel', relationship: 'CIA officer at black site where Rahman died from hypothermia', slug: 'gina-haspel' }
  ]
};

insertKnownAssociates(data);
