const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 7: H-K profiles
const data = {
  'hal-knight': [
    { name: 'Martin Tabert', relationship: 'Connected to convict leasing system Knight enforced', slug: 'martin-tabert' }
  ],
  'hamid-khan': [
    { name: 'Clare Garvie', relationship: 'Fellow surveillance technology critic', slug: 'clare-garvie' },
    { name: 'Jeff Brantingham', relationship: 'PredPol founder whose predictive policing Khan opposed', slug: 'jeff-brantingham' }
  ],
  'harrison-trevathan': [
    { name: 'Thomas Parran', relationship: 'Fellow Public Health Service official during Tuskegee era', slug: 'thomas-parran' }
  ],
  'harry-laughlin': [
    { name: 'Charles Davenport', relationship: 'Mentor and Cold Spring Harbor eugenics colleague', slug: 'charles-davenport' },
    { name: 'Carrie Buck', relationship: 'Model eugenics law used to sterilize Buck', slug: 'carrie-buck' },
    { name: 'Oliver Wendell Holmes', relationship: 'Justice who upheld Laughlin\'s sterilization law in Buck v. Bell', slug: 'oliver-wendell-holmes' }
  ],
  'harry-markopolos': [
    { name: 'Bernie Madoff', relationship: 'Whistleblower who warned SEC about Madoff scam for a decade', slug: 'bernie-madoff' },
    { name: 'David Kotz', relationship: 'SEC IG who investigated why Markopolos\'s warnings were ignored', slug: 'david-kotz' },
    { name: 'Christopher Cox', relationship: 'SEC chairman who failed to act on Markopolos\'s tips', slug: 'christopher-cox' }
  ],
  'harry-truman': [
    { name: 'Dwight D. Eisenhower', relationship: 'Successor as president', slug: 'dwight-d-eisenhower' },
    { name: 'J. Robert Oppenheimer', relationship: 'Truman ordered atomic bombs Oppenheimer built', slug: 'j-robert-oppenheimer' },
    { name: 'Joseph McCarthy', relationship: 'McCarthy attacked Truman administration over communism', slug: 'joseph-mccarthy' },
    { name: 'Douglas MacArthur', relationship: 'Fired MacArthur during Korean War', slug: 'douglas-macarthur' }
  ],
  'hassan-sheikh-mohamud': [
    { name: 'Mohamed Farrah Aidid', relationship: 'Predecessor era Somali warlord', slug: 'mohamed-farrah-aidid' }
  ],
  'hector-gramajo': [
    { name: 'Efrain Rios Montt', relationship: 'Guatemalan military under Rios Montt during genocide', slug: 'efrain-rios-montt' },
    { name: 'Rigoberta Menchu', relationship: 'Nobel laureate who fought for justice against Gramajo\'s atrocities', slug: 'rigoberta-menchu' }
  ],
  'heinz-jakob-neusser': [
    { name: 'Herbert Diess', relationship: 'VW executive during emissions scandal', slug: 'herbert-diess' },
    { name: 'Matthias Mueller', relationship: 'VW CEO who managed emission scandal aftermath', slug: 'matthias-mueller' }
  ],
  'henry-cabot-lodge-jr': [
    { name: 'Dwight D. Eisenhower', relationship: 'Served as UN Ambassador under Eisenhower', slug: 'dwight-d-eisenhower' },
    { name: 'Dean Rusk', relationship: 'Fellow official overseeing Vietnam involvement', slug: 'dean-rusk' }
  ],
  'henry-clay-frick': [
    { name: 'Andrew Carnegie', relationship: 'Business partner at Carnegie Steel', slug: 'andrew-carnegie' },
    { name: 'Allan Pinkerton', relationship: 'Hired Pinkerton agents to break Homestead Strike', slug: 'allan-pinkerton' }
  ],
  'henry-dawes': [
    { name: 'Theodore Roosevelt', relationship: 'President during era of Dawes Act allotment implementation', slug: 'theodore-roosevelt' },
    { name: 'Richard Henry Pratt', relationship: 'Fellow architect of assimilationist Native American policy', slug: 'richard-henry-pratt' }
  ],
  'henry-knox': [
    { name: 'George Armstrong Custer', relationship: 'Early war department figure whose policies shaped Indian Wars', slug: 'george-armstrong-custer' }
  ],
  'henry-shaw': [
    { name: 'Thomas Morgan', relationship: 'Fellow Bureau of Indian Affairs official', slug: 'thomas-morgan' }
  ],
  'henry-waxman': [
    { name: 'C. Everett Koop', relationship: 'Worked with Koop on tobacco regulation', slug: 'c-everett-koop' },
    { name: 'Geoffrey Bible', relationship: 'Philip Morris CEO whom Waxman grilled in Congress', slug: 'geoffrey-bible' }
  ],
  'herbert-diess': [
    { name: 'Matthias Mueller', relationship: 'Predecessor as VW CEO', slug: 'matthias-mueller' },
    { name: 'Oliver Schmidt', relationship: 'VW executive imprisoned for emissions fraud during Diess era', slug: 'oliver-schmidt' },
    { name: 'Daniel Carder', relationship: 'WVU researcher who discovered VW cheat device', slug: 'daniel-carder' }
  ],
  'herbert-needleman': [
    { name: 'Clair Patterson', relationship: 'Fellow scientist who fought lead industry', slug: 'clair-patterson' },
    { name: 'Robert Kehoe', relationship: 'Lead industry scientist who opposed Needleman\'s research', slug: 'robert-kehoe' },
    { name: 'Alice Hamilton', relationship: 'Pioneer industrial toxicologist whose work Needleman continued', slug: 'alice-hamilton' }
  ],
  'herman-wallace': [
    { name: 'Albert Woodfox', relationship: 'Fellow Angola Three member held in solitary for decades', slug: 'albert-woodfox' },
    { name: 'Robert King', relationship: 'Fellow Angola Three member', slug: 'robert-king' },
    { name: 'Burl Cain', relationship: 'Angola Prison warden who kept Wallace in solitary', slug: 'burl-cain' }
  ],
  'hiram-price': [
    { name: 'Henry Dawes', relationship: 'Fellow architect of Native American allotment policy', slug: 'henry-dawes' },
    { name: 'Richard Henry Pratt', relationship: 'Boarding school creator during Price\'s BIA tenure', slug: 'richard-henry-pratt' }
  ],
  'hoan-ton-that': [
    { name: 'Joy Buolamwini', relationship: 'AI researcher who criticizes facial recognition Clearview AI built', slug: 'joy-buolamwini' },
    { name: 'Clare Garvie', relationship: 'Surveillance researcher who documented Clearview\'s reach', slug: 'clare-garvie' }
  ],
  'homer-hoyt': [
    { name: 'Frederick Babcock', relationship: 'Fellow architect of racist real estate appraisal', slug: 'frederick-babcock' },
    { name: 'Robert Moses', relationship: 'Contemporary urban planner who enforced housing segregation', slug: 'robert-moses' }
  ],
  'hope-macallister': [
    { name: 'Dave Archambault II', relationship: 'Standing Rock leader during DAPL fight MacAllister supported', slug: 'dave-archambault-ii' }
  ],
  'howard-jones': [
    { name: 'Daniel Ellsberg', relationship: 'Fellow figure who documented government deception about warfare', slug: 'daniel-ellsberg' }
  ],
  'howard-udell': [
    { name: 'Michael Friedman', relationship: 'Fellow Purdue Pharma executive who pled guilty to misbranding OxyContin', slug: 'michael-friedman' },
    { name: 'Paul Goldenheim', relationship: 'Fellow Purdue exec who pled guilty alongside Udell', slug: 'paul-goldenheim' },
    { name: 'Richard Sackler', relationship: 'Sackler family head who directed OxyContin marketing Udell helped execute', slug: 'richard-sackler' }
  ],
  'hudson-austin': [
    { name: 'Bernard Coard', relationship: 'Coup partner in Grenada who overthrew Maurice Bishop', slug: 'bernard-coard' },
    { name: 'Maurice Bishop', relationship: 'Grenadian leader overthrown and killed by Austin', slug: 'maurice-bishop' }
  ],
  'hugh-thompson-jr': [
    { name: 'William Calley', relationship: 'Officer whose My Lai massacre Thompson tried to stop', slug: 'william-calley' },
    { name: 'Seymour Hersh', relationship: 'Journalist who exposed My Lai massacre Thompson witnessed', slug: 'seymour-hersh' }
  ],
  'hughes-van-ellis': [
    { name: 'Viola Fletcher', relationship: 'Fellow elderly Tulsa Race Massacre survivor seeking reparations', slug: 'viola-fletcher' },
    { name: 'Lessie Randle', relationship: 'Fellow Tulsa Massacre survivor and descendant', slug: 'lessie-randle' }
  ],
  'hugo-banzer': [
    { name: 'Henry Kissinger', relationship: 'Kissinger supported Banzer\'s coup as part of Operation Condor', slug: 'henry-kissinger' }
  ],
  'ian-gibbons': [
    { name: 'Elizabeth Holmes', relationship: 'Theranos scientist who died before testifying against Holmes', slug: 'elizabeth-holmes' },
    { name: 'Tyler Shultz', relationship: 'Fellow Theranos whistleblower', slug: 'tyler-shultz' }
  ],
  'ida-b-wells': [
    { name: 'Frederick Douglass', relationship: 'Fellow civil rights pioneer and anti-lynching ally', slug: 'frederick-douglass' },
    { name: 'Mamie Till-Mobley', relationship: 'Wells\' anti-lynching crusade continued by Till case', slug: 'mamie-till-mobley' }
  ],
  'irving-picard': [
    { name: 'Bernie Madoff', relationship: 'Court-appointed trustee recovering billions for Madoff victims', slug: 'bernie-madoff' },
    { name: 'Jeffry Picower', relationship: 'Largest Madoff beneficiary from whom Picard recovered $7.2B', slug: 'jeffry-picower' },
    { name: 'Frank DiPascali', relationship: 'Madoff co-conspirator whose cooperation aided recovery', slug: 'frank-dipascali' }
  ],
  'j-parnell-thomas': [
    { name: 'Joseph McCarthy', relationship: 'Fellow Red Scare figure - HUAC chairman before McCarthy', slug: 'joseph-mccarthy' },
    { name: 'Dalton Trumbo', relationship: 'Hollywood Ten writer Thomas cited for contempt', slug: 'dalton-trumbo' }
  ],
  'j-robert-oppenheimer': [
    { name: 'Edward Teller', relationship: 'Colleague who testified against Oppenheimer at security hearing', slug: 'edward-teller' },
    { name: 'Lewis Strauss', relationship: 'AEC chairman who orchestrated Oppenheimer\'s security clearance revocation', slug: 'lewis-strauss' },
    { name: 'Harry Truman', relationship: 'President who ordered atomic bombs Oppenheimer built', slug: 'harry-truman' },
    { name: 'Dwight D. Eisenhower', relationship: 'President who revoked Oppenheimer\'s clearance', slug: 'dwight-d-eisenhower' }
  ],
  'jack-remondi': [
    { name: 'Albert Lord', relationship: 'Predecessor as Sallie Mae/Navient leader', slug: 'albert-lord' },
    { name: 'Betsy DeVos', relationship: 'Education Secretary who eased student loan regulations', slug: 'betsy-devos' }
  ],
  'jack-weinstein': [
    { name: 'Elmo Zumwalt', relationship: 'Agent Orange case judge - Zumwalt ordered the defoliant', slug: 'elmo-zumwalt' }
  ],
  'jacobo-arbenz': [
    { name: 'Carlos Castillo Armas', relationship: 'Military officer who overthrew Arbenz in CIA coup', slug: 'carlos-castillo-armas' },
    { name: 'Allen Dulles', relationship: 'CIA Director who orchestrated coup against Arbenz', slug: 'allen-dulles' },
    { name: 'Sam Zemurray', relationship: 'United Fruit Company head who lobbied for Arbenz overthrow', slug: 'sam-zemurray' }
  ],
  'jaime-zapata': [
    { name: 'Brian Terry', relationship: 'Fellow US federal agent killed in Mexico border violence', slug: 'brian-terry' },
    { name: 'Eric Holder', relationship: 'AG during Fast and Furious operation linked to agents\' deaths', slug: 'eric-holder' }
  ],
  'james-angleton': [
    { name: 'Lee Harvey Oswald', relationship: 'CIA counterintelligence chief whose files on Oswald remain controversial', slug: 'lee-harvey-oswald' },
    { name: 'Edward Lansdale', relationship: 'Fellow CIA officer in covert operations', slug: 'edward-lansdale' },
    { name: 'David Atlee Phillips', relationship: 'CIA officer in Angleton\'s anti-Castro network', slug: 'david-atlee-phillips' },
    { name: 'George de Mohrenschildt', relationship: 'CIA-connected figure who knew Oswald and reported to Angleton', slug: 'george-de-mohrenschildt' }
  ],
  'james-baker': [
    { name: 'George H.W. Bush', relationship: 'Secretary of State and chief political strategist for Bush', slug: 'george-hw-bush' },
    { name: 'Ronald Reagan', relationship: 'White House Chief of Staff under Reagan', slug: 'ronald-reagan' }
  ],
  'james-black': [
    { name: 'Lee Raymond', relationship: 'Exxon CEO during era Black\'s climate research was suppressed', slug: 'lee-raymond' },
    { name: 'Naomi Oreskes', relationship: 'Historian who documented suppression of research Black conducted', slug: 'naomi-oreskes' }
  ],
  'james-bopp': [
    { name: 'David Keene', relationship: 'Fellow conservative legal-political figure', slug: 'david-keene' },
    { name: 'Chris Jankowski', relationship: 'Fellow Republican redistricting strategist', slug: 'chris-jankowski' }
  ],
  'james-bosbous': [
    { name: 'Thomas Beasley', relationship: 'CCA private prison colleague', slug: 'thomas-beasley' }
  ],
  'james-craig': [
    { name: 'Phillip Brailsford', relationship: 'Fellow police figure in controversial policing', slug: 'philip-brailsford' }
  ],
  'james-davis-cpd': [
    { name: 'Edward Hanrahan', relationship: 'Fellow Chicago law enforcement figure', slug: 'edward-hanrahan' }
  ],
  'james-forsyth': [
    { name: 'George Armstrong Custer', relationship: 'Fellow 7th Cavalry commander at Wounded Knee massacre', slug: 'george-armstrong-custer' },
    { name: 'Philip Sheridan', relationship: 'Commanding general during Indian Wars', slug: 'philip-sheridan' }
  ],
  'james-knox-polk': [
    { name: 'Winfield Scott', relationship: 'General who led Mexico invasion under Polk', slug: 'winfield-scott' },
    { name: 'Martin Van Buren', relationship: 'Predecessor whose expansionist policies Polk continued', slug: 'martin-van-buren' }
  ],
  'james-liang': [
    { name: 'Oliver Schmidt', relationship: 'Fellow VW engineer convicted in emissions fraud', slug: 'oliver-schmidt' },
    { name: 'Matthias Mueller', relationship: 'VW CEO during scandal era', slug: 'matthias-mueller' }
  ],
  'james-loewen': [
    { name: 'Elliot Jaspin', relationship: 'Fellow researcher documenting racial expulsions', slug: 'elliot-jaspin' },
    { name: 'Richard Rothstein', relationship: 'Fellow housing segregation historian', slug: 'richard-rothstein' }
  ],
  'james-risen': [
    { name: 'Jeffrey Sterling', relationship: 'CIA officer Risen protected as source, Sterling was prosecuted', slug: 'jeffrey-sterling' },
    { name: 'Edward Snowden', relationship: 'Fellow national security whistleblowing figure', slug: 'edward-snowden' },
    { name: 'James Bamford', relationship: 'Fellow national security journalist', slug: 'james-bamford' }
  ],
  'james-w-english': [
    { name: 'Bull Connor', relationship: 'Fellow Birmingham era segregationist figure', slug: 'bull-connor' }
  ],
  'jan-brewer': [
    { name: 'Russell Pearce', relationship: 'Arizona legislator behind SB1070 that Brewer signed', slug: 'russell-pearce' },
    { name: 'Joe Arpaio', relationship: 'Maricopa County sheriff who enforced immigration under Brewer', slug: 'joe-arpaio' }
  ],
  'jan-hasselman': [
    { name: 'Chase Iron Eyes', relationship: 'Standing Rock legal ally', slug: 'chase-iron-eyes' },
    { name: 'Dave Archambault II', relationship: 'Standing Rock Sioux chairman Hasselman represented', slug: 'dave-archambault-ii' }
  ],
  'janis-karpinski': [
    { name: 'Geoffrey Miller', relationship: 'Gitmo commander who brought harsh techniques to Abu Ghraib under Karpinski', slug: 'geoffrey-miller' },
    { name: 'Ricardo Sanchez', relationship: 'Commanding general whom Karpinski blamed for Abu Ghraib abuses', slug: 'ricardo-sanchez' },
    { name: 'Lynndie England', relationship: 'Soldier under Karpinski\'s command convicted at Abu Ghraib', slug: 'lynndie-england' }
  ],
  'jason-forge': [
    { name: 'Allen Stanford', relationship: 'Prosecutor who convicted Stanford of Ponzi scheme', slug: 'allen-stanford' }
  ],
  'jay-carney': [
    { name: 'Barack Obama', relationship: 'White House Press Secretary under Obama', slug: 'barack-obama' },
    { name: 'Jeff Bezos', relationship: 'Became Amazon head of communications after White House', slug: 'jeff-bezos' }
  ],
  'jay-dickey': [
    { name: 'Fred Guttenberg', relationship: 'Dickey Amendment blocked gun research that families like Guttenberg\'s later fought to reverse', slug: 'fred-guttenberg' }
  ],
  'jba-robertson': [
    { name: 'AJ Smitherman', relationship: 'Governor during Tulsa Race Massacre', slug: 'aj-smitherman' },
    { name: 'Dick Rowland', relationship: 'Failed to protect Rowland or Black Tulsa from massacre', slug: 'dick-rowland' }
  ],
  'jc-robert': [
    { name: 'Thomas Parran', relationship: 'Fellow public health official during unethical research era', slug: 'thomas-parran' }
  ],
  'jean-bertrand-aristide': [
    { name: 'Michel Martelly', relationship: 'Later Haitian president from opposing political faction', slug: 'michel-martelly' },
    { name: 'Francois Duvalier', relationship: 'Aristide rose against Duvalier family dictatorship', slug: 'francois-duvalier' },
    { name: 'Gilbert Bigio', relationship: 'Haitian oligarch who opposed Aristide\'s populism', slug: 'gilbert-bigio' }
  ],
  'jeane-kirkpatrick': [
    { name: 'Elliott Abrams', relationship: 'Fellow Reagan-era Central America hawk', slug: 'elliott-abrams' },
    { name: 'Ronald Reagan', relationship: 'UN Ambassador under Reagan', slug: 'ronald-reagan' }
  ],
  'jeff-brantingham': [
    { name: 'Hamid Khan', relationship: 'Activist who led campaigns against Brantingham\'s PredPol system', slug: 'hamid-khan' },
    { name: 'Kristian Lum', relationship: 'Researcher who demonstrated Brantingham\'s algorithm perpetuated bias', slug: 'kristian-lum' }
  ],
  'jeff-jamar': [
    { name: 'David Koresh', relationship: 'FBI on-scene commander during Waco siege', slug: 'david-koresh' },
    { name: 'Byron Sage', relationship: 'FBI negotiator at Waco under Jamar\'s command', slug: 'byron-sage' },
    { name: 'Larry Potts', relationship: 'FBI HQ supervisor during Waco', slug: 'larry-potts' }
  ],
  'jeffrey-amherst': [
    { name: 'Henry Knox', relationship: 'Secretary of War who continued policies toward Native Americans', slug: 'henry-knox' }
  ],
  'jeffrey-sterling': [
    { name: 'James Risen', relationship: 'Journalist Sterling leaked to about CIA\'s Operation Merlin', slug: 'james-risen' },
    { name: 'John Kiriakou', relationship: 'Fellow CIA whistleblower prosecuted for leaks', slug: 'john-kiriakou' }
  ],
  'jeffry-picower': [
    { name: 'Bernie Madoff', relationship: 'Largest Madoff investment fund beneficiary - withdrew $7.2B', slug: 'bernie-madoff' },
    { name: 'Irving Picard', relationship: 'Trustee who recovered $7.2B from Picower estate', slug: 'irving-picard' }
  ],
  'jennifer-abruzzo': [
    { name: 'Chris Smalls', relationship: 'NLRB General Counsel during Amazon unionization drive', slug: 'chris-smalls' },
    { name: 'Stuart Appelbaum', relationship: 'Union leader aligned with Abruzzo\'s pro-labor agenda', slug: 'stuart-appelbaum' }
  ],
  'jennifer-bates': [
    { name: 'Chris Smalls', relationship: 'Fellow Amazon worker labor organizer', slug: 'chris-smalls' },
    { name: 'Derrick Palmer', relationship: 'Fellow Amazon Labor Union organizer', slug: 'derrick-palmer' },
    { name: 'Jeff Bezos', relationship: 'Amazon founder whose warehouses Bates organized', slug: 'jeff-bezos' }
  ],
  'jerry-del-missier': [
    { name: 'Bob Diamond', relationship: 'Barclays colleague during LIBOR scandal', slug: 'bob-diamond' },
    { name: 'Tom Hayes', relationship: 'Fellow LIBOR manipulation figure', slug: 'tom-hayes' }
  ],
  'jerry-ensminger': [
    { name: 'Bobby Muller', relationship: 'Fellow veterans\' advocate fighting toxic exposure', slug: 'bobby-muller' },
    { name: 'Claudia Peterson', relationship: 'Fellow Camp Lejeune contamination activist', slug: 'claudia-peterson' }
  ],
  'jerry-falwell': [
    { name: 'Franklin Graham', relationship: 'Fellow evangelical leader and Republican ally', slug: 'franklin-graham' },
    { name: 'Robert Jeffress', relationship: 'Fellow evangelical political figure', slug: 'robert-jeffress' },
    { name: 'Donald Trump', relationship: 'Falwell\'s son endorsed Trump; senior Falwell built evangelical-GOP alliance', slug: 'donald-trump' }
  ],
  'jesse-daniel-ames': [
    { name: 'Ida B. Wells', relationship: 'Fellow anti-lynching crusader', slug: 'ida-b-wells' }
  ],
  'jesse-gagliano': [
    { name: 'Donald Vidrine', relationship: 'Fellow BP Deepwater Horizon figure who raised cement concerns', slug: 'donald-vidrine' },
    { name: 'Tony Hayward', relationship: 'BP CEO during Deepwater Horizon disaster', slug: 'tony-hayward' }
  ],
  'jesse-jackson': [
    { name: 'Martin Luther King Jr', relationship: 'Was with MLK when assassinated; continued civil rights leadership', slug: 'martin-luther-king-jr' },
    { name: 'Ralph Abernathy', relationship: 'Fellow SCLC leader and MLK associate', slug: 'ralph-abernathy' },
    { name: 'Louis Farrakhan', relationship: 'Complicated relationship as parallel Black leaders', slug: 'louis-farrakhan' }
  ],
  'jesse-jones': [
    { name: 'Homer Hoyt', relationship: 'Fellow figure in New Deal era housing policy', slug: 'homer-hoyt' }
  ],
  'jesse-washington': [
    { name: 'Ida B. Wells', relationship: 'Wells\' anti-lynching work documented cases like Washington\'s', slug: 'ida-b-wells' }
  ],
  'jim-garrison': [
    { name: 'Clay Shaw', relationship: 'Prosecuted Shaw for JFK assassination conspiracy', slug: 'clay-shaw' },
    { name: 'Lee Harvey Oswald', relationship: 'Investigated Oswald\'s New Orleans connections', slug: 'lee-harvey-oswald' },
    { name: 'Mark Lane', relationship: 'JFK conspiracy researcher who supported Garrison\'s theory', slug: 'mark-lane' }
  ],
  'jim-watkins': [
    { name: 'Ron Watkins', relationship: 'Son who ran 8chan/8kun, suspected of being Q', slug: 'ron-watkins' }
  ],
  'jimmy-carter': [
    { name: 'Ronald Reagan', relationship: 'Lost presidency to Reagan amid Iran hostage crisis', slug: 'ronald-reagan' },
    { name: 'Cyrus Hashemi', relationship: 'Iran crisis figure whose October Surprise dealings may have cost Carter election', slug: 'cyrus-hashemi' }
  ],
  'jimmy-harrell': [
    { name: 'Donald Vidrine', relationship: 'Fellow rig supervisor during Deepwater Horizon explosion', slug: 'donald-vidrine' },
    { name: 'Mike Williams', relationship: 'Transocean electronics technician who was on rig during explosion', slug: 'mike-williams' }
  ],
  'joe-kelso': [
    { name: 'Robert Houghton', relationship: 'LAPD detective in RFK assassination investigation', slug: 'robert-houghton' }
  ],
  'john-africa': [
    { name: 'Ramona Africa', relationship: 'MOVE member who survived 1985 Philadelphia bombing', slug: 'ramona-africa' },
    { name: 'Wilson Goode', relationship: 'Philadelphia mayor who ordered MOVE compound bombing', slug: 'wilson-goode' },
    { name: 'Birdie Africa', relationship: 'Child survivor of MOVE bombing', slug: 'birdie-africa' },
    { name: 'Frank Powell', relationship: 'Officer who dropped the bomb on MOVE', slug: 'frank-powell' }
  ],
  'john-anjain': [
    { name: 'Darlene Keju', relationship: 'Fellow Marshall Islands nuclear testing survivor', slug: 'darlene-keju' },
    { name: 'Lewis Strauss', relationship: 'AEC chairman who authorized Pacific nuclear tests', slug: 'lewis-strauss' }
  ],
  'john-carreyrou': [
    { name: 'Elizabeth Holmes', relationship: 'Wall Street Journal reporter who exposed Theranos fraud', slug: 'elizabeth-holmes' },
    { name: 'Tyler Shultz', relationship: 'Key Theranos whistleblower source for Carreyrou', slug: 'tyler-shultz' },
    { name: 'Erika Cheung', relationship: 'Theranos whistleblower who came to Carreyrou', slug: 'erika-cheung' }
  ],
  'john-charles-cutler': [
    { name: 'Thomas Parran', relationship: 'Surgeon General who oversaw PHS when Cutler ran Guatemala experiments', slug: 'thomas-parran' },
    { name: 'Eunice Rivers', relationship: 'Fellow PHS figure connected to unethical medical research', slug: 'eunice-rivers' },
    { name: 'Susan Reverby', relationship: 'Historian who discovered Cutler\'s Guatemala experiments', slug: 'susan-reverby' }
  ],
  'john-chivington': [
    { name: 'George Armstrong Custer', relationship: 'Fellow US military officer who massacred Native Americans', slug: 'george-armstrong-custer' },
    { name: 'Kit Carson', relationship: 'Fellow perpetrator of violence against Indigenous peoples', slug: 'kit-carson' }
  ],
  'john-collier': [
    { name: 'Dillon S. Myer', relationship: 'Successor as BIA Commissioner', slug: 'dillon-s-myer' },
    { name: 'Henry Dawes', relationship: 'Dawes Act allotment policy Collier tried to reform', slug: 'henry-dawes' }
  ],
  'john-connally': [
    { name: 'Lee Harvey Oswald', relationship: 'Wounded in JFK assassination Oswald allegedly committed', slug: 'lee-harvey-oswald' },
    { name: 'Abraham Zapruder', relationship: 'Filmed assassination motorcade showing Connally being shot', slug: 'abraham-zapruder' },
    { name: 'Ben Barnes', relationship: 'Political protégé who claimed October Surprise involvement', slug: 'ben-barnes' }
  ]
};

insertKnownAssociates(data);
