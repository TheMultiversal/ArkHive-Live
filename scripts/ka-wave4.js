const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 4: Historical figures, whistleblowers, civil rights, intelligence, international
const data = {
  'abdel-hakim-belhaj': [
    { name: 'Muammar Gaddafi', relationship: 'Libyan dissident tortured under Gaddafi regime with CIA/MI6 help', slug: 'muammar-gaddafi' },
    { name: 'Tony Blair', relationship: 'UK PM whose government facilitated Belhaj rendition to Libya', slug: 'tony-blair' }
  ],
  'abdur-rahman-muhammad': [
    { name: 'Khalil Islam', relationship: 'Fellow Malcolm X assassination suspect later exonerated', slug: 'khalil-islam' },
    { name: 'Malcolm X', relationship: 'Researcher who investigated Malcolm X assassination', slug: 'malcolm-x' }
  ],
  'abigail-echo-hawk': [
    { name: 'Annita Lucchesi', relationship: 'Fellow MMIW researcher and Indigenous data activist', slug: 'annita-lucchesi' },
    { name: 'Lisa Brunner', relationship: 'Fellow advocate for Missing and Murdered Indigenous Women', slug: 'lisa-brunner' }
  ],
  'abolhassan-banisadr': [
    { name: 'Ayatollah Khomeini', relationship: 'First president under Khomeini who was later ousted', slug: 'ayatollah-khomeini' },
    { name: 'Nematollah Nassiri', relationship: 'SAVAK chief from shah era overthrown by Banisadr\'s revolution', slug: 'nematollah-nassiri' }
  ],
  'abraham-zapruder': [
    { name: 'Lee Harvey Oswald', relationship: 'Filmed the JFK assassination that Oswald was accused of', slug: 'lee-harvey-oswald' },
    { name: 'John Connally', relationship: 'Texas governor wounded in same JFK motorcade Zapruder filmed', slug: 'john-connally' }
  ],
  'adam-malik': [
    { name: 'Suharto', relationship: 'Foreign minister under Suharto regime', slug: 'suharto' },
    { name: 'Robert Martens', relationship: 'US embassy official who provided kill lists during Indonesian massacres', slug: 'robert-martens' }
  ],
  'addison-yeaman': [
    { name: 'Edward Horrigan', relationship: 'Fellow tobacco industry insider', slug: 'edward-horrigan' },
    { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed industry Yeaman documented', slug: 'jeffrey-wigand' }
  ],
  'aiyana-stanley-jones': [
    { name: 'Joseph Weekley', relationship: 'Officer who fatally shot 7-year-old Aiyana during raid', slug: 'joseph-weekley' }
  ],
  'aj-smitherman': [
    { name: 'Dick Rowland', relationship: 'Man whose arrest triggered Tulsa Race Massacre Smitherman covered', slug: 'dick-rowland' },
    { name: 'BC Franklin', relationship: 'Fellow Tulsa lawyer who documented the massacre', slug: 'bc-franklin' }
  ],
  'akua-njeri': [
    { name: 'Fred Hampton', relationship: 'Partner of Fred Hampton - was present during his assassination', slug: 'fred-hampton' },
    { name: 'Fred Hampton Jr', relationship: 'Son who continued father\'s activism', slug: 'fred-hampton-jr' },
    { name: 'Edward Hanrahan', relationship: 'Cook County State\'s Attorney who authorized Hampton raid', slug: 'edward-hanrahan' }
  ],
  'alan-fiers': [
    { name: 'Oliver North', relationship: 'CIA officer who reported to North in Iran-Contra operations', slug: 'oliver-north' },
    { name: 'Elliott Abrams', relationship: 'Fellow Iran-Contra figure in Reagan administration', slug: 'elliott-abrams' }
  ],
  'alan-mann': [
    { name: 'Arthur Rudolph', relationship: 'Fellow Operation Paperclip researcher', slug: 'arthur-rudolph' },
    { name: 'Wernher von Braun', relationship: 'Operation Paperclip colleague', slug: 'wernher-von-braun' }
  ],
  'alan-shaw': [
    { name: 'Pete Buttigieg', relationship: 'Transportation Secretary who oversaw Norfolk Southern response after East Palestine', slug: 'pete-buttigieg' }
  ],
  'albert-lord': [
    { name: 'Jack Remondi', relationship: 'Successor as Navient/Sallie Mae CEO', slug: 'jack-remondi' },
    { name: 'Betsy DeVos', relationship: 'Education Secretary who rolled back student loan protections', slug: 'betsy-devos' }
  ],
  'albert-woodfox': [
    { name: 'Herman Wallace', relationship: 'Fellow Angola Three member held in solitary for 40+ years', slug: 'herman-wallace' },
    { name: 'Robert King', relationship: 'Fellow Angola Three member and prison reform activist', slug: 'robert-king' }
  ],
  'aldo-moro': [
    { name: 'Giulio Andreotti', relationship: 'Italian PM connected to Gladio and Moro kidnapping conspiracy', slug: 'giulio-andreotti' },
    { name: 'Licio Gelli', relationship: 'P2 Lodge master linked to Moro assassination conspiracy', slug: 'licio-gelli' }
  ],
  'alec-smith': [
    { name: 'Nicole Smith-Holt', relationship: 'Mother who became insulin pricing activist after Alec\'s death', slug: 'nicole-smith-holt' }
  ],
  'alex-karp': [
    { name: 'Peter Thiel', relationship: 'Palantir co-founder and primary investor', slug: 'peter-thiel' },
    { name: 'Edward Snowden', relationship: 'Snowden revelations exposed surveillance programs Palantir enabled', slug: 'edward-snowden' }
  ],
  'alexander-haig': [
    { name: 'Henry Kissinger', relationship: 'Served as Kissinger\'s deputy and successor as Nixon Chief of Staff', slug: 'henry-kissinger' },
    { name: 'Richard Nixon', relationship: 'White House Chief of Staff during Nixon\'s final days', slug: 'richard-nixon' },
    { name: 'Ronald Reagan', relationship: 'Secretary of State under Reagan who claimed "I\'m in charge"', slug: 'ronald-reagan' }
  ],
  'alfredo-cristiani': [
    { name: 'Elliott Abrams', relationship: 'US official who supported Cristiani\'s government during civil war', slug: 'elliott-abrams' },
    { name: 'Oscar Romero', relationship: 'Archbishop murdered by forces aligned with Cristiani\'s ARENA party', slug: 'oscar-romero' }
  ],
  'alice-hamilton': [
    { name: 'Herbert Needleman', relationship: 'Fellow industrial health researcher who fought lead poisoning', slug: 'herbert-needleman' },
    { name: 'Clair Patterson', relationship: 'Scientist who fought lead industry - continued Hamilton\'s work', slug: 'clair-patterson' }
  ],
  'allan-nairn': [
    { name: 'Noam Chomsky', relationship: 'Fellow critic of US foreign policy in Central America', slug: 'noam-chomsky' },
    { name: 'Suharto', relationship: 'Nairn was beaten in Dili massacre under Suharto\'s occupation', slug: 'suharto' }
  ],
  'allan-pinkerton': [
    { name: 'Henry Clay Frick', relationship: 'Pinkerton agents were hired by Frick during Homestead Strike', slug: 'henry-clay-frick' },
    { name: 'Andrew Carnegie', relationship: 'Carnegie Steel hired Pinkertons to break unions', slug: 'andrew-carnegie' }
  ],
  'alvin-young': [
    { name: 'Elmo Zumwalt', relationship: 'Admiral who ordered Agent Orange use that Young later studied', slug: 'elmo-zumwalt' }
  ],
  'amir-locke': [
    { name: 'Breonna Taylor', relationship: 'Fellow victim killed during no-knock police raid', slug: 'breonna-taylor' }
  ],
  'amy-gutmann': [
    { name: 'Joe Biden', relationship: 'Nominated as US Ambassador to Germany by Biden', slug: 'joe-biden' }
  ],
  'anders-fogh-rasmussen': [
    { name: 'Tony Blair', relationship: 'Fellow NATO/coalition leader who supported Iraq War', slug: 'tony-blair' },
    { name: 'George W. Bush', relationship: 'Backed Bush coalition in Iraq War as Danish PM', slug: 'george-w-bush' }
  ],
  'andrew-carnegie': [
    { name: 'Henry Clay Frick', relationship: 'Business partner who managed Carnegie Steel during Homestead Strike', slug: 'henry-clay-frick' },
    { name: 'Allan Pinkerton', relationship: 'Hired Pinkerton agency to suppress worker strikes', slug: 'allan-pinkerton' }
  ],
  'andrew-fastow': [
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO under whom Fastow created fraudulent entities', slug: 'jeffrey-skilling' },
    { name: 'Kenneth Lay', relationship: 'Enron founder and chairman during Fastow\'s financial fraud', slug: 'kenneth-lay' },
    { name: 'Sherron Watkins', relationship: 'Enron whistleblower who warned about Fastow\'s schemes', slug: 'sherron-watkins' }
  ],
  'andrew-madoff': [
    { name: 'Bernie Madoff', relationship: 'Father who ran the largest Ponzi scheme in history', slug: 'bernie-madoff' },
    { name: 'Mark Madoff', relationship: 'Brother who died by suicide after father\'s arrest', slug: 'mark-madoff' },
    { name: 'Peter Madoff', relationship: 'Uncle and compliance officer in the Madoff scheme', slug: 'peter-madoff' }
  ],
  'andrew-tisch': [
    { name: 'James Taiclet', relationship: 'Fellow defense industry connected executive', slug: 'james-taiclet' }
  ],
  'anna-deavere-smith': [
    { name: 'Bryan Stevenson', relationship: 'Fellow racial justice figure whose work Smith dramatized', slug: 'bryan-stevenson' }
  ],
  'annita-lucchesi': [
    { name: 'Abigail Echo-Hawk', relationship: 'Fellow MMIW researcher and data sovereignty advocate', slug: 'abigail-echo-hawk' },
    { name: 'Lisa Brunner', relationship: 'Fellow Missing and Murdered Indigenous Women advocate', slug: 'lisa-brunner' }
  ],
  'anthony-lake': [
    { name: 'Warren Christopher', relationship: 'Fellow Clinton administration foreign policy official', slug: 'warren-christopher' },
    { name: 'Sandy Berger', relationship: 'Successor as National Security Advisor under Clinton', slug: 'sandy-berger' }
  ],
  'anthony-ray-hinton': [
    { name: 'Bryan Stevenson', relationship: 'Equal Justice Initiative lawyer who freed Hinton after 30 years on death row', slug: 'bryan-stevenson' },
    { name: 'Walter McMillian', relationship: 'Fellow wrongfully convicted Alabama death row exoneree represented by Stevenson', slug: 'walter-mcmillian' }
  ],
  'anthony-russo': [
    { name: 'Daniel Ellsberg', relationship: 'Co-leaked Pentagon Papers with Ellsberg', slug: 'daniel-ellsberg' },
    { name: 'Neil Sheehan', relationship: 'NY Times journalist who published the leaked Pentagon Papers', slug: 'neil-sheehan' }
  ],
  'ari-ben-menashe': [
    { name: 'Robert Maxwell', relationship: 'Claimed Maxwell was Israeli intelligence asset', slug: 'robert-maxwell' },
    { name: 'Jeffrey Epstein', relationship: 'Alleged Epstein connected to Israeli intelligence networks', slug: 'jeffrey-epstein' }
  ],
  'arne-duncan': [
    { name: 'Miguel Cardona', relationship: 'Successor\'s predecessor as Education Secretary', slug: 'miguel-cardona' },
    { name: 'Barack Obama', relationship: 'Education Secretary under Obama 2009-2015', slug: 'barack-obama' }
  ],
  'art-cohen': [
    { name: 'Jordan Belfort', relationship: 'Testified about Belfort\'s penny stock fraud', slug: 'jordan-belfort' }
  ],
  'art-pope': [
    { name: 'Charles Koch', relationship: 'Fellow conservative megadonor and Koch network ally', slug: 'charles-koch' },
    { name: 'Richard Fink', relationship: 'Koch operative who worked with Pope\'s network', slug: 'richard-fink' }
  ],
  'arthur-rudolph': [
    { name: 'Wernher von Braun', relationship: 'Fellow Operation Paperclip Nazi scientist recruited to NASA', slug: 'wernher-von-braun' },
    { name: 'Kurt Blome', relationship: 'Fellow Operation Paperclip recruit', slug: 'kurt-blome' },
    { name: 'Georg Rickhey', relationship: 'Fellow Paperclip scientist from V-2 rocket program', slug: 'georg-rickhey' }
  ],
  'arthur-sackler': [
    { name: 'Kathe Sackler', relationship: 'Niece who continued Sackler pharmaceutical dynasty', slug: 'kathe-sackler' },
    { name: 'David Sackler', relationship: 'Grandson who directed Purdue Pharma', slug: 'david-sackler' },
    { name: 'Richard Sackler', relationship: 'Nephew who drove aggressive OxyContin marketing', slug: 'richard-sackler' }
  ],
  'arvind-thiruvengadam': [
    { name: 'Daniel Carder', relationship: 'WVU colleague who co-discovered VW emissions cheat', slug: 'daniel-carder' },
    { name: 'Herbert Diess', relationship: 'VW CEO during aftermath of emissions scandal they uncovered', slug: 'herbert-diess' }
  ],
  'ashli-babbitt': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 Capitol breacher', slug: 'jacob-chansley' },
    { name: 'Donald Trump', relationship: 'Stormed Capitol in support of Trump, shot and killed by police', slug: 'donald-trump' }
  ],
  'ashraf-ghani': [
    { name: 'Hamid Karzai', relationship: 'Predecessor as Afghan president', slug: 'hamid-karzai' },
    { name: 'Joe Biden', relationship: 'US withdrew from Afghanistan under Biden, Ghani fled', slug: 'joe-biden' }
  ],
  'barbara-fried': [
    { name: 'Sam Bankman-Fried', relationship: 'Mother of SBF - Stanford professor drawn into FTX scandal', slug: 'sam-bankman-fried' },
    { name: 'Joseph Bankman', relationship: 'Husband and fellow Stanford professor connected to FTX', slug: 'joseph-bankman' }
  ],
  'barry-scheck': [
    { name: 'Peter Neufeld', relationship: 'Co-founded Innocence Project with Neufeld', slug: 'peter-neufeld' },
    { name: 'Bryan Stevenson', relationship: 'Fellow leading wrongful conviction attorney', slug: 'bryan-stevenson' },
    { name: 'Kirk Bloodsworth', relationship: 'First death row exoneree through DNA - Innocence Project case', slug: 'kirk-bloodsworth' }
  ],
  'bastian-obermayer': [
    { name: 'Frederik Obermaier', relationship: 'Co-journalist who broke Panama Papers story', slug: 'frederik-obermaier' },
    { name: 'Ramon Fonseca', relationship: 'Mossack Fonseca partner exposed by Panama Papers', slug: 'ramon-fonseca' },
    { name: 'Jurgen Mossack', relationship: 'Mossack Fonseca co-founder exposed by the leak', slug: 'jurgen-mossack' }
  ],
  'bc-franklin': [
    { name: 'AJ Smitherman', relationship: 'Fellow Black Tulsa leader during 1921 massacre', slug: 'aj-smitherman' },
    { name: 'Dick Rowland', relationship: 'Man whose arrest sparked the Tulsa Race Massacre', slug: 'dick-rowland' }
  ],
  'becky-barr': [
    { name: 'William Barr', relationship: 'Related to AG Barr - DOJ connection', slug: 'william-barr' }
  ],
  'ben-barnes': [
    { name: 'John Connally', relationship: 'Protégé of Connally who claimed October Surprise role', slug: 'john-connally' },
    { name: 'Gary Sick', relationship: 'Academic who investigated October Surprise that Barnes corroborated', slug: 'gary-sick' }
  ],
  'ben-bradlee': [
    { name: 'Katharine Graham', relationship: 'Washington Post publisher who backed Bradlee on Pentagon Papers/Watergate', slug: 'katharine-graham' },
    { name: 'Bob Woodward', relationship: 'Reporter Bradlee supported through Watergate investigation', slug: 'bob-woodward' }
  ],
  'ben-glisan': [
    { name: 'Andrew Fastow', relationship: 'Enron treasurer who worked under Fastow\'s financial schemes', slug: 'andrew-fastow' },
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO during Glisan\'s participation in fraud', slug: 'jeffrey-skilling' }
  ],
  'ben-tillman': [
    { name: 'Strom Thurmond', relationship: 'Fellow South Carolina white supremacist politician', slug: 'strom-thurmond' },
    { name: 'Nathan Bedford Forrest', relationship: 'Fellow white supremacist political figure', slug: 'nathan-bedford-forrest' }
  ],
  'benny-murdani': [
    { name: 'Suharto', relationship: 'Military intelligence chief under Suharto regime', slug: 'suharto' },
    { name: 'Sarwo Edhie Wibowo', relationship: 'Fellow Indonesian military commander', slug: 'sarwo-edhie-wibowo' }
  ],
  'bernard-coard': [
    { name: 'Maurice Bishop', relationship: 'Overthrew Bishop in Grenada coup leading to US invasion', slug: 'maurice-bishop' },
    { name: 'Hudson Austin', relationship: 'Military leader who backed Coard\'s coup in Grenada', slug: 'hudson-austin' }
  ],
  'bernard-reilly': [
    { name: 'Thomas Stephens', relationship: 'Fellow tobacco industry figure in document concealment', slug: 'thomas-stephens' },
    { name: 'Edward Horrigan', relationship: 'Fellow tobacco executive', slug: 'edward-horrigan' }
  ],
  'bernd-gottweis': [
    { name: 'Paul Goldenheim', relationship: 'Fellow Purdue Pharma executive involved in OxyContin marketing', slug: 'paul-goldenheim' }
  ],
  'bernie-sanders': [
    { name: 'Elizabeth Warren', relationship: 'Fellow progressive senator and 2020 presidential rival', slug: 'elizabeth-warren' },
    { name: 'Joe Biden', relationship: '2020 Democratic primary opponent who later endorsed Biden', slug: 'joe-biden' },
    { name: 'Hillary Clinton', relationship: '2016 Democratic primary opponent', slug: 'hillary-clinton' }
  ],
  'betty-shabazz': [
    { name: 'Malcolm X', relationship: 'Wife of Malcolm X, present at his assassination', slug: 'malcolm-x' },
    { name: 'Louis Farrakhan', relationship: 'Nation of Islam leader whose rhetoric preceded Malcolm X assassination', slug: 'louis-farrakhan' },
    { name: 'Elijah Muhammad', relationship: 'Nation of Islam leader who expelled Malcolm X', slug: 'elijah-muhammad' }
  ],
  'bill-buford': [
    { name: 'Jon Burge', relationship: 'FBI agent investigating police torture under Burge', slug: 'jon-burge' }
  ],
  'bill-meierling': [
    { name: 'Lisa Nelson', relationship: 'ALEC colleague advancing corporate legislative agenda', slug: 'lisa-nelson' }
  ],
  'billy-tauzin': [
    { name: 'Liz Fowler', relationship: 'Both shaped healthcare legislation to benefit pharma industry', slug: 'liz-fowler' },
    { name: 'Max Baucus', relationship: 'Senate partner in pharma-friendly healthcare legislation', slug: 'max-baucus' }
  ],
  'birdie-africa': [
    { name: 'Ramona Africa', relationship: 'MOVE member who survived same 1985 Philadelphia bombing', slug: 'ramona-africa' },
    { name: 'Wilson Goode', relationship: 'Philadelphia mayor who authorized 1985 MOVE bombing', slug: 'wilson-goode' },
    { name: 'John Africa', relationship: 'MOVE founder killed in the 1985 bombing', slug: 'john-africa' }
  ],
  'bo-gritz': [
    { name: 'Randy Weaver', relationship: 'Negotiated Weaver\'s surrender at Ruby Ridge', slug: 'randy-weaver' },
    { name: 'Richard Secord', relationship: 'Fellow figure in covert operations circles', slug: 'richard-secord' }
  ],
  'bob-diamond': [
    { name: 'Marcus Agius', relationship: 'Barclays chairman who resigned alongside Diamond in LIBOR scandal', slug: 'marcus-agius' },
    { name: 'Tom Hayes', relationship: 'Trader convicted of LIBOR manipulation Diamond oversaw', slug: 'tom-hayes' }
  ],
  'bobby-muller': [
    { name: 'Jerry Ensminger', relationship: 'Fellow veterans\' rights activist fighting toxic exposure', slug: 'jerry-ensminger' },
    { name: 'Elmo Zumwalt', relationship: 'Admiral who supported Agent Orange veterans\' cause', slug: 'elmo-zumwalt' }
  ],
  'bobby-rush': [
    { name: 'Fred Hampton', relationship: 'Illinois Black Panther leader - Rush co-founded chapter with Hampton', slug: 'fred-hampton' },
    { name: 'Barack Obama', relationship: 'Defeated Obama in 2000 congressional primary', slug: 'barack-obama' }
  ],
  'boutros-boutros-ghali': [
    { name: 'Kofi Annan', relationship: 'Successor as UN Secretary-General', slug: 'kofi-annan' },
    { name: 'Romeo Dallaire', relationship: 'UN commander who pleaded for help during Rwanda genocide Boutros-Ghali oversaw', slug: 'romeo-dallaire' }
  ],
  'breonna-taylor': [
    { name: 'Brett Hankison', relationship: 'Officer who fired shots during fatal raid on her apartment', slug: 'brett-hankison' },
    { name: 'Joshua Jaynes', relationship: 'Detective who obtained no-knock warrant', slug: 'joshua-jaynes' },
    { name: 'Tamika Palmer', relationship: 'Mother who became civil rights activist after Breonna\'s death', slug: 'tamika-palmer' },
    { name: 'Kenneth Walker', relationship: 'Boyfriend who fired shot believing intruders were breaking in', slug: 'kenneth-walker' }
  ],
  'brian-terry': [
    { name: 'John Dodson', relationship: 'ATF whistleblower who exposed Fast and Furious after Terry\'s death', slug: 'john-dodson' },
    { name: 'Eric Holder', relationship: 'AG held in contempt over Fast and Furious gunrunning', slug: 'eric-holder' }
  ],
  'bruce-karrh': [
    { name: 'Charles Holliday', relationship: 'Fellow DuPont executive', slug: 'charles-holliday' },
    { name: 'Edward Breen', relationship: 'DuPont CEO who inherited PFAS contamination legacy', slug: 'edward-breen' }
  ],
  'bryan-stevenson': [
    { name: 'Anthony Ray Hinton', relationship: 'Won Hinton\'s freedom after 30 years on death row', slug: 'anthony-ray-hinton' },
    { name: 'Walter McMillian', relationship: 'Represented McMillian in landmark wrongful conviction case', slug: 'walter-mcmillian' },
    { name: 'Barry Scheck', relationship: 'Fellow wrongful conviction attorney and Innocence Project ally', slug: 'barry-scheck' }
  ],
  'bull-connor': [
    { name: 'Martin Luther King Jr', relationship: 'Deployed fire hoses and dogs against King\'s Birmingham marchers', slug: 'martin-luther-king-jr' },
    { name: 'George Wallace', relationship: 'Fellow Alabama segregationist', slug: 'george-wallace' },
    { name: 'Medgar Evers', relationship: 'Contemporary civil rights leader fighting same-era segregation', slug: 'medgar-evers' }
  ],
  'burl-cain': [
    { name: 'Albert Woodfox', relationship: 'Angola Prison warden who kept Woodfox in solitary for decades', slug: 'albert-woodfox' },
    { name: 'Herman Wallace', relationship: 'Angola Three member held in solitary under Cain', slug: 'herman-wallace' }
  ],
  'byron-sage': [
    { name: 'David Koresh', relationship: 'FBI negotiator during Waco siege with Koresh', slug: 'david-koresh' },
    { name: 'Jeff Jamar', relationship: 'FBI on-scene commander at Waco', slug: 'jeff-jamar' }
  ],
  'c-everett-koop': [
    { name: 'Ronald Reagan', relationship: 'Surgeon General under Reagan who broke with party on AIDS/tobacco', slug: 'ronald-reagan' },
    { name: 'Anthony Fauci', relationship: 'Fellow public health official during AIDS crisis', slug: 'anthony-fauci' }
  ],
  'cameron-todd-willingham': [
    { name: 'Rick Perry', relationship: 'Governor who refused to halt execution despite arson evidence doubts', slug: 'rick-perry' },
    { name: 'Bryan Stevenson', relationship: 'Innocence advocate whose work parallels Willingham\'s case', slug: 'bryan-stevenson' }
  ],
  'carl-oechsner': [
    { name: 'C. Everett Koop', relationship: 'Surgeon General era public health figure', slug: 'c-everett-koop' }
  ],
  'carlos-castillo-armas': [
    { name: 'Jacobo Arbenz', relationship: 'Overthrew democratically elected Arbenz in CIA-backed coup', slug: 'jacobo-arbenz' },
    { name: 'David Atlee Phillips', relationship: 'CIA officer who helped orchestrate Guatemala coup', slug: 'david-atlee-phillips' },
    { name: 'Allen Dulles', relationship: 'CIA Director who authorized Guatemala coup', slug: 'allen-dulles' }
  ],
  'carlos-ximenes-belo': [
    { name: 'Jose Ramos-Horta', relationship: 'Co-Nobel laureate for East Timor independence', slug: 'jose-ramos-horta' },
    { name: 'Xanana Gusmao', relationship: 'East Timorese independence leader', slug: 'xanana-gusmao' },
    { name: 'Suharto', relationship: 'Indonesian dictator whose occupation Belo opposed', slug: 'suharto' }
  ],
  'caroline-ellison': [
    { name: 'Sam Bankman-Fried', relationship: 'Former girlfriend and Alameda Research CEO who testified against SBF', slug: 'sam-bankman-fried' },
    { name: 'Gary Wang', relationship: 'Fellow FTX co-founder who cooperated with prosecution', slug: 'gary-wang' },
    { name: 'Nishad Singh', relationship: 'Fellow FTX executive who testified against SBF', slug: 'nishad-singh' }
  ],
  'carolyn-bryant': [
    { name: 'Emmett Till', relationship: 'Falsely accused Till, leading to his lynching', slug: 'emmett-till' },
    { name: 'Roy Bryant', relationship: 'Husband who murdered Emmett Till', slug: 'roy-bryant' },
    { name: 'JW Milam', relationship: 'Brother-in-law who participated in Till\'s murder', slug: 'jw-milam' },
    { name: 'Mamie Till-Mobley', relationship: 'Emmett\'s mother whose open-casket funeral sparked civil rights movement', slug: 'mamie-till-mobley' }
  ],
  'carrie-buck': [
    { name: 'Oliver Wendell Holmes', relationship: 'Supreme Court justice who ruled forced sterilization constitutional in Buck v. Bell', slug: 'oliver-wendell-holmes' },
    { name: 'Harry Laughlin', relationship: 'Eugenics advocate whose model law was used against Buck', slug: 'harry-laughlin' }
  ],
  'catherine-flowers': [
    { name: 'Bryan Stevenson', relationship: 'Fellow Alabama racial justice advocate', slug: 'bryan-stevenson' }
  ],
  'changpeng-zhao': [
    { name: 'Sam Bankman-Fried', relationship: 'Binance CEO whose withdrawal triggered FTX collapse', slug: 'sam-bankman-fried' },
    { name: 'Gary Gensler', relationship: 'SEC chair who pursued crypto enforcement against CZ', slug: 'gary-gensler' }
  ],
  'charles-davenport': [
    { name: 'Harry Laughlin', relationship: 'Protégé and Cold Spring Harbor eugenics colleague', slug: 'harry-laughlin' },
    { name: 'Paul Popenoe', relationship: 'Fellow eugenics movement leader', slug: 'paul-popenoe' },
    { name: 'Margaret Sanger', relationship: 'Birth control pioneer with overlapping eugenics connections', slug: 'margaret-sanger' }
  ],
  'charles-holliday': [
    { name: 'Edward Breen', relationship: 'Successor as DuPont CEO', slug: 'edward-breen' },
    { name: 'Rob Bilott', relationship: 'Attorney who sued DuPont over PFAS during Holliday\'s tenure', slug: 'rob-bilott' }
  ],
  'charles-keating': [
    { name: 'Alan Cranston', relationship: 'One of Keating Five senators who intervened for Keating', slug: 'alan-cranston' },
    { name: 'John McCain', relationship: 'One of Keating Five senators', slug: 'john-mccain' },
    { name: 'Dennis DeConcini', relationship: 'Fellow Keating Five senator', slug: 'dennis-deconcini' },
    { name: 'Donald Riegle', relationship: 'Fellow Keating Five senator', slug: 'donald-riegle' }
  ],
  'charles-kettering': [
    { name: 'Thomas Midgley', relationship: 'GM researcher whose leaded gasoline Kettering championed', slug: 'thomas-midgley' }
  ],
  'charles-scharf': [
    { name: 'Carrie Tolstedt', relationship: 'Wells Fargo exec who oversaw fake accounts scandal before Scharf', slug: 'carrie-tolstedt' },
    { name: 'Tim Sloan', relationship: 'Predecessor as Wells Fargo CEO', slug: 'timothy-sloan' }
  ],
  'charles-schumer': [
    { name: 'Bernie Sanders', relationship: 'Senate Democratic partner and progressive ally', slug: 'bernie-sanders' },
    { name: 'Joe Biden', relationship: 'Key Biden Senate legislative partner', slug: 'joe-biden' },
    { name: 'Dianne Feinstein', relationship: 'Senior Senate Democratic colleague', slug: 'dianne-feinstein' }
  ],
  'charlie-beck': [
    { name: 'Daryl Gates', relationship: 'Predecessor LAPD chief known for militarized policing', slug: 'daryl-gates' },
    { name: 'William Bratton', relationship: 'Predecessor as LAPD Chief', slug: 'william-bratton' }
  ],
  'chase-iron-eyes': [
    { name: 'LaDonna Brave Bull Allard', relationship: 'Fellow Standing Rock Sioux activist', slug: 'ladonna-brave-bull-allard' },
    { name: 'Dave Archambault II', relationship: 'Standing Rock Sioux chairman during DAPL protest', slug: 'dave-archambault-ii' },
    { name: 'Dallas Goldtooth', relationship: 'Fellow Indigenous environmental activist at Standing Rock', slug: 'dallas-goldtooth' }
  ],
  'che-guevara': [
    { name: 'Fidel Castro', relationship: 'Comrade in Cuban Revolution', slug: 'fidel-castro' },
    { name: 'Felix Rodriguez', relationship: 'CIA operative who hunted and captured Guevara in Bolivia', slug: 'felix-rodriguez' }
  ],
  'cheryl-mills': [
    { name: 'Hillary Clinton', relationship: 'Chief of Staff and longtime Clinton advisor', slug: 'hillary-clinton' },
    { name: 'Sidney Blumenthal', relationship: 'Fellow Clinton confidant', slug: 'sidney-blumenthal' }
  ],
  'chokwe-lumumba': [
    { name: 'Derrick Johnson', relationship: 'NAACP president who supported Jackson MS water crisis response', slug: 'derrick-johnson' }
  ],
  'chris-jankowski': [
    { name: 'Thomas Hofeller', relationship: 'Republican gerrymandering strategist who worked with REDMAP', slug: 'thomas-hofeller' },
    { name: 'Karl Rove', relationship: 'Republican strategist aligned with Jankowski\'s redistricting efforts', slug: 'karl-rove' }
  ],
  'chris-murphy': [
    { name: 'Fred Guttenberg', relationship: 'Gun control ally - Murphy championed reform after Parkland', slug: 'fred-guttenberg' },
    { name: 'Bernie Sanders', relationship: 'Senate ally on progressive legislation', slug: 'bernie-sanders' }
  ],
  'chris-ripley': [
    { name: 'Suzanne Scott', relationship: 'Fellow media executive - Fox News CEO', slug: 'suzanne-scott' }
  ],
  'chris-smalls': [
    { name: 'Jennifer Bates', relationship: 'Fellow Amazon warehouse worker and labor organizer', slug: 'jennifer-bates' },
    { name: 'Derrick Palmer', relationship: 'Co-founded Amazon Labor Union with Smalls', slug: 'derrick-palmer' },
    { name: 'Jeff Bezos', relationship: 'Amazon founder whose company Smalls organized against', slug: 'jeff-bezos' }
  ]
};

insertKnownAssociates(data);
