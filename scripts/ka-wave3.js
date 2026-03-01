const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 3: Right-wing media, international, mass shooters, Jan 6, fraud, politicians
const data = {
  'matt-walsh': [
    { name: 'Steven Crowder', relationship: 'Fellow conservative media personality and Daily Wire colleague', slug: 'steven-crowder' },
    { name: 'Ben Shapiro', relationship: 'Daily Wire co-host and conservative media ally', slug: 'ben-shapiro' }
  ],
  'steven-crowder': [
    { name: 'Matt Walsh', relationship: 'Fellow conservative media personality', slug: 'matt-walsh' },
    { name: 'Dan Bongino', relationship: 'Fellow right-wing media figure', slug: 'dan-bongino' }
  ],
  'dan-bongino': [
    { name: 'Steven Crowder', relationship: 'Fellow conservative media personality', slug: 'steven-crowder' },
    { name: 'Dennis Prager', relationship: 'Fellow right-wing media figure', slug: 'dennis-prager' },
    { name: 'Donald Trump', relationship: 'Staunch Trump supporter and former Secret Service agent', slug: 'donald-trump' }
  ],
  'dennis-prager': [
    { name: 'Dan Bongino', relationship: 'Fellow conservative media personality', slug: 'dan-bongino' },
    { name: 'Dinesh D\'Souza', relationship: 'Fellow conservative commentator and filmmaker', slug: 'dinesh-dsouza' }
  ],
  'omar-al-bashir': [
    { name: 'Paul Kagame', relationship: 'Rival African leader during Darfur crisis and regional instability', slug: 'paul-kagame' },
    { name: 'Muammar Gaddafi', relationship: 'Fellow deposed authoritarian African leader', slug: 'muammar-gaddafi' }
  ],
  'reid-hoffman': [
    { name: 'Peter Thiel', relationship: 'Fellow PayPal co-founder turned political rival', slug: 'peter-thiel' },
    { name: 'Jeffrey Epstein', relationship: 'Met with Epstein, later expressed regret', slug: 'jeffrey-epstein' },
    { name: 'Sam Altman', relationship: 'Fellow tech investor and AI industry figure', slug: 'sam-altman' }
  ],
  'guy-reffitt': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', slug: 'jacob-chansley' },
    { name: 'Donald Trump', relationship: 'Stormed Capitol in support of Trump on Jan 6', slug: 'donald-trump' }
  ],
  'bernie-madoff': [
    { name: 'Harry Markopolos', relationship: 'Whistleblower who warned SEC about Madoff for years', slug: 'harry-markopolos' },
    { name: 'Frank DiPascali', relationship: 'Madoff\'s right-hand man and key co-conspirator', slug: 'frank-dipascali' },
    { name: 'Irving Picard', relationship: 'Trustee recovering Madoff victims\' funds', slug: 'irving-picard' },
    { name: 'Peter Madoff', relationship: 'Brother and compliance officer in Madoff scheme', slug: 'peter-madoff' }
  ],
  'steve-cohen': [
    { name: 'Ken Griffin', relationship: 'Fellow hedge fund billionaire scrutinized during GameStop saga', slug: 'ken-griffin' },
    { name: 'Jordan Belfort', relationship: 'Fellow Wall Street figure connected to aggressive trading', slug: 'jordan-belfort' }
  ],
  'abdel-fattah-el-sisi': [
    { name: 'Bob Menendez', relationship: 'Menendez allegedly acted as foreign agent for Egypt', slug: 'bob-menendez' },
    { name: 'Recep Tayyip Erdogan', relationship: 'Regional rival and fellow authoritarian leader', slug: 'recep-tayyip-erdogan' },
    { name: 'Donald Trump', relationship: 'Trump called Sisi "my favorite dictator"', slug: 'donald-trump' }
  ],
  'craig-landau': [
    { name: 'Richard Sackler', relationship: 'Fellow opioid crisis executive - Purdue Pharma', slug: 'richard-sackler' },
    { name: 'Steven Collis', relationship: 'AmerisourceBergen CEO in opioid distribution chain', slug: 'steven-collis' }
  ],
  'michael-babich': [
    { name: 'John Kapoor', relationship: 'Boss at Insys Therapeutics - both convicted of opioid bribery', slug: 'john-kapoor' }
  ],
  'jon-burge': [
    { name: 'Flint Taylor', relationship: 'Attorney who fought for decades to expose Burge torture ring', slug: 'flint-taylor' },
    { name: 'Daryl Gates', relationship: 'Fellow police commander associated with systemic abuse', slug: 'daryl-gates' }
  ],
  'mohamed-noor': [
    { name: 'Kim Potter', relationship: 'Fellow Minnesota officer convicted of fatal shooting', slug: 'kim-potter' }
  ],
  'myles-cosgrove': [
    { name: 'Brett Hankison', relationship: 'Fellow officer involved in Breonna Taylor shooting', slug: 'brett-hankison' },
    { name: 'Breonna Taylor', relationship: 'Fired shots during fatal raid on Taylor\'s apartment', slug: 'breonna-taylor' },
    { name: 'Joshua Jaynes', relationship: 'Detective who obtained the warrant for Taylor raid', slug: 'joshua-jaynes' }
  ],
  'george-zimmerman': [
    { name: 'Trayvon Martin', relationship: 'Shot and killed unarmed teenager Trayvon Martin in 2012', slug: 'trayvon-martin' },
    { name: 'Darren Wilson', relationship: 'Fellow acquitted shooter in high-profile racial justice case', slug: 'darren-wilson' }
  ],
  'kyle-rittenhouse': [
    { name: 'Donald Trump', relationship: 'Visited Mar-a-Lago after acquittal, embraced by Trump', slug: 'donald-trump' }
  ],
  'dylann-roof': [
    { name: 'Robert Bowers', relationship: 'Fellow white supremacist mass shooter', slug: 'robert-bowers' },
    { name: 'Patrick Crusius', relationship: 'Fellow racially motivated mass shooter', slug: 'patrick-crusius' }
  ],
  'robert-bowers': [
    { name: 'Dylann Roof', relationship: 'Fellow white supremacist mass shooter', slug: 'dylann-roof' },
    { name: 'Payton Gendron', relationship: 'Fellow racially motivated mass shooter inspired by similar ideology', slug: 'payton-gendron' }
  ],
  'patrick-crusius': [
    { name: 'Dylann Roof', relationship: 'Fellow racially motivated mass shooter', slug: 'dylann-roof' },
    { name: 'Payton Gendron', relationship: 'Gendron cited Crusius manifesto as inspiration', slug: 'payton-gendron' }
  ],
  'payton-gendron': [
    { name: 'Patrick Crusius', relationship: 'Cited Crusius El Paso manifesto as inspiration', slug: 'patrick-crusius' },
    { name: 'Dylann Roof', relationship: 'Followed pattern of racially motivated mass shooting', slug: 'dylann-roof' },
    { name: 'Robert Bowers', relationship: 'Fellow white supremacist mass shooter', slug: 'robert-bowers' }
  ],
  'larry-brock': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant who breached Capitol', slug: 'jacob-chansley' },
    { name: 'Guy Reffitt', relationship: 'Fellow January 6 rioter convicted', slug: 'guy-reffitt' }
  ],
  'riley-june-williams': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', slug: 'jacob-chansley' },
    { name: 'Ashli Babbitt', relationship: 'Fellow January 6 participant', slug: 'ashli-babbitt' }
  ],
  'lonnie-coffman': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant - brought pipe bombs near Capitol', slug: 'jacob-chansley' },
    { name: 'Guy Reffitt', relationship: 'Fellow armed January 6 participant', slug: 'guy-reffitt' }
  ],
  'thomas-webster': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', slug: 'jacob-chansley' },
    { name: 'Guy Reffitt', relationship: 'Fellow January 6 convicted rioter', slug: 'guy-reffitt' }
  ],
  'adam-neumann': [
    { name: 'Trevor Milton', relationship: 'Fellow startup founder accused of misleading investors', slug: 'trevor-milton' },
    { name: 'Masayoshi Son', relationship: 'SoftBank CEO who massively invested in WeWork', slug: 'masayoshi-son' }
  ],
  'nikolas-cruz': [
    { name: 'Fred Guttenberg', relationship: 'Father of victim Jaime Guttenberg who became gun control activist', slug: 'fred-guttenberg' },
    { name: 'Pete Arredondo', relationship: 'Fellow mass shooting case where law enforcement response was questioned', slug: 'pete-arredondo' }
  ],
  'salvador-ramos': [
    { name: 'Pete Arredondo', relationship: 'Uvalde school police chief whose delayed response drew national outrage', slug: 'pete-arredondo' },
    { name: 'Greg Abbott', relationship: 'Texas governor who faced criticism after Uvalde shooting', slug: 'greg-abbott' }
  ],
  'james-holmes': [
    { name: 'Stephen Paddock', relationship: 'Fellow mass shooter who carried out large-scale gun attack', slug: 'stephen-paddock' }
  ],
  'stephen-paddock': [
    { name: 'James Holmes', relationship: 'Fellow mass shooter in major gun violence incident', slug: 'james-holmes' },
    { name: 'Omar Mateen', relationship: 'Perpetrator of Pulse nightclub shooting in similar era', slug: 'omar-mateen' }
  ],
  'omar-mateen': [
    { name: 'Stephen Paddock', relationship: 'Fellow mass shooter in large-scale gun attack', slug: 'stephen-paddock' },
    { name: 'Anwar al-Awlaki', relationship: 'Mateen was influenced by al-Awlaki propaganda', slug: 'anwar-al-awlaki' }
  ],
  'devin-kelley': [
    { name: 'Stephen Paddock', relationship: 'Fellow mass shooter in same period', slug: 'stephen-paddock' }
  ],
  'ethan-crumbley': [
    { name: 'James Crumbley', relationship: 'Father convicted for failing to prevent son\'s school shooting', slug: 'james-crumbley' },
    { name: 'Jennifer Crumbley', relationship: 'Mother convicted for failing to prevent son\'s school shooting', slug: 'jennifer-crumbley' }
  ],
  'james-crumbley': [
    { name: 'Ethan Crumbley', relationship: 'Son who committed Oxford High School shooting', slug: 'ethan-crumbley' },
    { name: 'Jennifer Crumbley', relationship: 'Wife - both convicted of involuntary manslaughter', slug: 'jennifer-crumbley' }
  ],
  'jennifer-crumbley': [
    { name: 'Ethan Crumbley', relationship: 'Son who committed Oxford High School shooting', slug: 'ethan-crumbley' },
    { name: 'James Crumbley', relationship: 'Husband - both convicted of involuntary manslaughter', slug: 'james-crumbley' }
  ],
  'josh-duggar': [
    { name: 'R. Kelly', relationship: 'Fellow public figure convicted of sex crimes against minors', slug: 'r-kelly' }
  ],
  'sonny-perdue': [
    { name: 'Donald Trump', relationship: 'Agriculture Secretary under Trump 2017-2021', slug: 'donald-trump' },
    { name: 'Brian Kemp', relationship: 'Fellow Georgia Republican and former governor', slug: 'brian-kemp' }
  ],
  'richard-strauss': [
    { name: 'Larry Nassar', relationship: 'Fellow university-affiliated doctor convicted of serial sexual abuse', slug: 'larry-nassar' }
  ],
  'elliott-abrams': [
    { name: 'Oliver North', relationship: 'Fellow Iran-Contra figure convicted and later pardoned', slug: 'oliver-north' },
    { name: 'Robert McFarlane', relationship: 'National Security Advisor during Iran-Contra', slug: 'robert-mcfarlane' },
    { name: 'Jeane Kirkpatrick', relationship: 'Fellow Reagan-era foreign policy hawk', slug: 'jeane-kirkpatrick' }
  ],
  'peter-liang': [
    { name: 'Daniel Pantaleo', relationship: 'Fellow NYPD officer involved in controversial killing', slug: 'daniel-pantaleo' }
  ],
  'mark-finchem': [
    { name: 'Kari Lake', relationship: 'Fellow Arizona election denier', slug: 'kari-lake' },
    { name: 'Donald Trump', relationship: 'Trump-endorsed candidate who denied 2020 election results', slug: 'donald-trump' }
  ],
  'kristi-noem': [
    { name: 'Greg Abbott', relationship: 'Fellow GOP governor competing for national prominence', slug: 'greg-abbott' },
    { name: 'Ron DeSantis', relationship: 'Fellow Republican governor and potential presidential rival', slug: 'ron-desantis' },
    { name: 'Donald Trump', relationship: 'Named as DHS Secretary by Trump in 2024', slug: 'donald-trump' }
  ],
  'louie-gohmert': [
    { name: 'Donald Trump', relationship: 'Loyal Trump ally in Congress who challenged 2020 results', slug: 'donald-trump' },
    { name: 'Jim Jordan', relationship: 'Fellow hardline Republican congressman', slug: 'jim-jordan' }
  ],
  'madison-cawthorn': [
    { name: 'Donald Trump', relationship: 'Youngest Trump-aligned congressman before scandal and defeat', slug: 'donald-trump' },
    { name: 'George Santos', relationship: 'Fellow young Republican congressman expelled in scandal', slug: 'george-santos' }
  ],
  'elise-stefanik': [
    { name: 'Donald Trump', relationship: 'Rose to Republican leadership as Trump defender', slug: 'donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'Republican House leadership colleague', slug: 'kevin-mccarthy' }
  ],
  'james-comer': [
    { name: 'Jim Jordan', relationship: 'Partner in House Republican investigations', slug: 'jim-jordan' },
    { name: 'Donald Trump', relationship: 'Led House Oversight investigations to support Trump', slug: 'donald-trump' }
  ],
  'barry-loudermilk': [
    { name: 'Donald Trump', relationship: 'Gave Capitol tour before Jan 6 that drew investigation', slug: 'donald-trump' },
    { name: 'Bennie Thompson', relationship: 'Jan 6 committee chair who investigated Loudermilk tours', slug: 'bennie-thompson' }
  ],
  'dave-rubin': [
    { name: 'Dennis Prager', relationship: 'Created Rubin Report on PragerU platform', slug: 'dennis-prager' },
    { name: 'Dan Bongino', relationship: 'Fellow conservative media personality', slug: 'dan-bongino' }
  ],
  'dinesh-dsouza': [
    { name: 'Dennis Prager', relationship: 'Fellow conservative commentator and media figure', slug: 'dennis-prager' },
    { name: 'Donald Trump', relationship: 'Pardoned by Trump in 2018 for campaign finance violation', slug: 'donald-trump' }
  ],
  'james-okeefe': [
    { name: 'Jacob Wohl', relationship: 'Fellow right-wing provocateur and disinformation figure', slug: 'jacob-wohl' },
    { name: 'Donald Trump', relationship: 'Trump supporter whose hidden camera operations targeted liberals', slug: 'donald-trump' }
  ],
  'jacob-wohl': [
    { name: 'James O\'Keefe', relationship: 'Fellow right-wing provocateur', slug: 'james-okeefe' },
    { name: 'Jack Burkman', relationship: 'Co-conspirator in multiple political hoaxes', slug: 'jack-burkman' }
  ],
  'milo-yiannopoulos': [
    { name: 'Steve Bannon', relationship: 'Former Breitbart colleague under Bannon\'s leadership', slug: 'steve-bannon' },
    { name: 'Roger Stone', relationship: 'Fellow provocateur in Trump political orbit', slug: 'roger-stone' }
  ],
  'greg-gutfeld': [
    { name: 'Tucker Carlson', relationship: 'Former Fox News colleague', slug: 'tucker-carlson' },
    { name: 'Suzanne Scott', relationship: 'Fox News CEO overseeing Gutfeld\'s programming', slug: 'suzanne-scott' }
  ],
  'duke-cunningham': [
    { name: 'William Jefferson', relationship: 'Contemporary congressman convicted of corruption', slug: 'william-jefferson' }
  ],
  'william-jefferson': [
    { name: 'Duke Cunningham', relationship: 'Fellow congressman convicted of corruption in same era', slug: 'duke-cunningham' }
  ],
  'henry-cuellar': [
    { name: 'Bob Menendez', relationship: 'Fellow Democratic congressman facing corruption charges', slug: 'bob-menendez' }
  ],
  'virginia-foxx': [
    { name: 'Betsy DeVos', relationship: 'Worked with DeVos on rolling back student protections', slug: 'betsy-devos' }
  ],
  'joe-manchin': [
    { name: 'Kyrsten Sinema', relationship: 'Fellow moderate Democratic senator who blocked party agenda', slug: 'kyrsten-sinema' },
    { name: 'Joe Biden', relationship: 'Key swing vote for Biden legislative agenda', slug: 'joe-biden' },
    { name: 'Don Blankenship', relationship: 'West Virginia coal baron connected to Manchin\'s energy politics', slug: 'don-blankenship' }
  ],
  'kyrsten-sinema': [
    { name: 'Joe Manchin', relationship: 'Fellow moderate Democratic senator who blocked filibuster reform', slug: 'joe-manchin' },
    { name: 'Joe Biden', relationship: 'Repeatedly blocked Biden\'s Build Back Better agenda', slug: 'joe-biden' }
  ],
  'strom-thurmond': [
    { name: 'Jesse Helms', relationship: 'Fellow Southern segregationist senator', slug: 'jesse-helms' },
    { name: 'Trent Lott', relationship: 'Lott praised Thurmond\'s segregationist campaign, causing scandal', slug: 'trent-lott' },
    { name: 'George Wallace', relationship: 'Fellow segregationist political figure', slug: 'george-wallace' }
  ],
  'jesse-helms': [
    { name: 'Strom Thurmond', relationship: 'Fellow segregationist senator and political ally', slug: 'strom-thurmond' },
    { name: 'Trent Lott', relationship: 'Fellow Southern conservative senator', slug: 'trent-lott' }
  ],
  'trent-lott': [
    { name: 'Strom Thurmond', relationship: 'Praised Thurmond\'s segregationist campaign at 100th birthday', slug: 'strom-thurmond' },
    { name: 'Jesse Helms', relationship: 'Fellow Southern conservative senator', slug: 'jesse-helms' }
  ],
  'joe-lieberman': [
    { name: 'John McCain', relationship: 'Close bipartisan ally and nearly chosen as McCain VP', slug: 'john-mccain' },
    { name: 'Joe Manchin', relationship: 'Both served as centrist Democrats blocking party agenda', slug: 'joe-manchin' }
  ],
  'dianne-feinstein': [
    { name: 'Kamala Harris', relationship: 'Fellow California senator who succeeded Feinstein\'s era', slug: 'kamala-harris' },
    { name: 'Chuck Grassley', relationship: 'Senate Judiciary Committee counterpart for decades', slug: 'chuck-grassley' }
  ],
  'timothy-mcveigh': [
    { name: 'Terry Nichols', relationship: 'Co-conspirator in Oklahoma City bombing', slug: 'terry-nichols' },
    { name: 'Eric Rudolph', relationship: 'Contemporary domestic terrorist of 1990s', slug: 'eric-rudolph' }
  ],
  'ted-kaczynski': [
    { name: 'Timothy McVeigh', relationship: 'Fellow domestic terrorist of 1990s era', slug: 'timothy-mcveigh' }
  ],
  'eric-rudolph': [
    { name: 'Timothy McVeigh', relationship: 'Fellow domestic terrorist of 1990s', slug: 'timothy-mcveigh' }
  ],
  'osama-bin-laden': [
    { name: 'Khalid Sheikh Mohammed', relationship: 'Principal architect of 9/11 attacks under bin Laden', slug: 'khalid-sheikh-mohammed' },
    { name: 'Anwar al-Awlaki', relationship: 'Al-Qaeda propagandist who continued bin Laden\'s mission', slug: 'anwar-al-awlaki' },
    { name: 'Ayman al-Zawahiri', relationship: 'Second-in-command who succeeded bin Laden as al-Qaeda leader', slug: 'ayman-al-zawahiri' }
  ],
  'khalid-sheikh-mohammed': [
    { name: 'Osama bin Laden', relationship: 'al-Qaeda leader who approved KSM\'s 9/11 plot', slug: 'osama-bin-laden' },
    { name: 'James Mitchell', relationship: 'CIA psychologist who waterboarded KSM 183 times', slug: 'james-mitchell' }
  ],
  'anwar-al-awlaki': [
    { name: 'Osama bin Laden', relationship: 'al-Qaeda leader whose mission al-Awlaki propagated', slug: 'osama-bin-laden' },
    { name: 'Nasser al-Awlaki', relationship: 'Father who sued US government over son\'s extrajudicial killing', slug: 'nasser-al-awlaki' },
    { name: 'Nawar al-Awlaki', relationship: 'Daughter killed in 2017 Yemen raid years after father\'s death', slug: 'nawar-al-awlaki' }
  ],
  'glenn-youngkin': [
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor elected on cultural issues platform', slug: 'greg-abbott' },
    { name: 'Ron DeSantis', relationship: 'Fellow GOP governor seen as party future', slug: 'ron-desantis' }
  ],
  'kim-reynolds': [
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor implementing conservative policies', slug: 'greg-abbott' },
    { name: 'Ron DeSantis', relationship: 'Fellow GOP governor', slug: 'ron-desantis' }
  ],
  'tate-reeves': [
    { name: 'Phil Bryant', relationship: 'Predecessor as Mississippi governor', slug: 'phil-bryant' },
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor', slug: 'greg-abbott' }
  ],
  'bill-lee': [
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor in Deep South', slug: 'greg-abbott' },
    { name: 'Brian Kemp', relationship: 'Fellow GOP governor', slug: 'brian-kemp' }
  ],
  'mike-parson': [
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor', slug: 'greg-abbott' },
    { name: 'Kim Reynolds', relationship: 'Fellow Midwestern GOP governor', slug: 'kim-reynolds' }
  ],
  'dr-oz': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed Senate candidate in Pennsylvania 2022', slug: 'donald-trump' },
    { name: 'Herschel Walker', relationship: 'Fellow Trump-endorsed candidate in 2022 midterms', slug: 'herschel-walker' }
  ],
  'herschel-walker': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed Georgia Senate candidate 2022', slug: 'donald-trump' },
    { name: 'Dr. Oz', relationship: 'Fellow Trump-endorsed candidate who lost 2022 midterm', slug: 'dr-oz' }
  ],
  'blake-masters': [
    { name: 'Peter Thiel', relationship: 'Protégé and co-author backed by Thiel in Senate race', slug: 'peter-thiel' },
    { name: 'Donald Trump', relationship: 'Trump-endorsed Arizona Senate candidate 2022', slug: 'donald-trump' }
  ],
  'joe-kent': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed congressional candidate', slug: 'donald-trump' },
    { name: 'Blake Masters', relationship: 'Fellow Trump-endorsed candidate in 2022 cycle', slug: 'blake-masters' }
  ],
  'tudor-dixon': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed Michigan governor candidate 2022', slug: 'donald-trump' },
    { name: 'Betsy DeVos', relationship: 'Michigan Republican ally and DeVos family-backed candidate', slug: 'betsy-devos' }
  ],
  'terry-nichols': [
    { name: 'Timothy McVeigh', relationship: 'Co-conspirator who built the Oklahoma City bomb', slug: 'timothy-mcveigh' }
  ],
  'sam-salehpour': [
    { name: 'Ed Pierson', relationship: 'Fellow Boeing whistleblower raising safety concerns', slug: 'ed-pierson' },
    { name: 'Dave Calhoun', relationship: 'Boeing CEO during Salehpour\'s quality allegations', slug: 'dave-calhoun' }
  ],
  'desmond-mills': [
    { name: 'Emmitt Martin', relationship: 'Fellow Memphis SCORPION unit officer charged in Tyre Nichols death', slug: 'emmitt-martin' },
    { name: 'Tadarrius Bean', relationship: 'Fellow officer charged in Tyre Nichols beating', slug: 'tadarrius-bean' },
    { name: 'Justin Smith', relationship: 'Fellow officer charged in Tyre Nichols death', slug: 'justin-smith' }
  ],
  'emmitt-martin': [
    { name: 'Desmond Mills', relationship: 'Fellow SCORPION unit officer charged in Tyre Nichols death', slug: 'desmond-mills' },
    { name: 'Tadarrius Bean', relationship: 'Fellow officer charged in Nichols beating', slug: 'tadarrius-bean' },
    { name: 'Justin Smith', relationship: 'Fellow officer charged in Nichols death', slug: 'justin-smith' }
  ],
  'tadarrius-bean': [
    { name: 'Desmond Mills', relationship: 'Fellow SCORPION unit officer charged in Nichols case', slug: 'desmond-mills' },
    { name: 'Emmitt Martin', relationship: 'Fellow officer charged in Tyre Nichols death', slug: 'emmitt-martin' }
  ],
  'justin-smith': [
    { name: 'Desmond Mills', relationship: 'Fellow SCORPION unit officer charged in Nichols death', slug: 'desmond-mills' },
    { name: 'Emmitt Martin', relationship: 'Fellow officer charged in Tyre Nichols beating', slug: 'emmitt-martin' }
  ],
  'hank-paulson': [
    { name: 'Henry Paulson', relationship: 'Same person - Treasury Secretary during 2008 financial crisis', slug: 'henry-paulson' },
    { name: 'Tim Geithner', relationship: 'Successor as Treasury Secretary who continued bailout policy', slug: 'tim-geithner' }
  ],
  'jeffrey-wigand': [
    { name: 'Geoffrey Bible', relationship: 'Philip Morris CEO who Wigand\'s testimony undermined', slug: 'geoffrey-bible' },
    { name: 'Edward Horrigan', relationship: 'Tobacco executive whose industry Wigand exposed', slug: 'edward-horrigan' },
    { name: 'Victor DeNoble', relationship: 'Fellow tobacco industry whistleblower', slug: 'victor-denoble' }
  ],
  'julian-robertson': [
    { name: 'Ray Dalio', relationship: 'Fellow hedge fund titan and Tiger Management founder', slug: 'ray-dalio' },
    { name: 'Steve Cohen', relationship: 'Fellow hedge fund manager', slug: 'steve-cohen' }
  ],
  'lisa-eisenhart': [
    { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', slug: 'jacob-chansley' },
    { name: 'Guy Reffitt', relationship: 'Fellow January 6 participant', slug: 'guy-reffitt' }
  ],
  'mark-swartz': [
    { name: 'Dennis Kozlowski', relationship: 'Co-defendant and fellow Tyco executive convicted of fraud', slug: 'dennis-kozlowski' }
  ],
  'ramesh-balwani': [
    { name: 'Elizabeth Holmes', relationship: 'Former partner and co-defendant in Theranos fraud', slug: 'elizabeth-holmes' },
    { name: 'Sunny Balwani', relationship: 'Same person - Theranos COO convicted of fraud', slug: 'sunny-balwani' }
  ],
  'timothy-rigas': [
    { name: 'John Rigas', relationship: 'Father and co-defendant in Adelphia Communications fraud', slug: 'john-rigas' }
  ]
};

insertKnownAssociates(data);
