const { insertKnownAssociates } = require('./ka-engine.js');

// Wave 2: Profiles 1-100 (Trump-era politics, corporate, law enforcement)
const data = {
  'john-bolton': [
    { name: 'Donald Trump', relationship: 'Served as National Security Advisor under Trump 2018-2019', slug: 'donald-trump' },
    { name: 'Mike Pompeo', relationship: 'Fellow cabinet member and sometime rival in Trump administration', slug: 'mike-pompeo' },
    { name: 'Fiona Hill', relationship: 'NSC colleague who testified at impeachment hearings', slug: 'fiona-hill' }
  ],
  'john-kelly': [
    { name: 'Donald Trump', relationship: 'White House Chief of Staff 2017-2019 who later criticized Trump', slug: 'donald-trump' },
    { name: 'James Mattis', relationship: 'Fellow retired general in Trump cabinet', slug: 'james-mattis' },
    { name: 'Kirstjen Nielsen', relationship: 'DHS Secretary who served under Kelly as Chief of Staff', slug: 'kirstjen-nielsen' }
  ],
  'merrick-garland': [
    { name: 'Jack Smith', relationship: 'Appointed Smith as Special Counsel for Trump investigations', slug: 'jack-smith' },
    { name: 'Joe Biden', relationship: 'Nominated as Attorney General by Biden in 2021', slug: 'joe-biden' },
    { name: 'Lisa Monaco', relationship: 'Deputy Attorney General under Garland', slug: 'lisa-monaco' }
  ],
  'yevgeny-vindman': [
    { name: 'Alexander Vindman', relationship: 'Twin brother and fellow NSC official who testified at Trump impeachment', slug: 'alexander-vindman' },
    { name: 'Donald Trump', relationship: 'Reassigned from NSC after brother testified against Trump', slug: 'donald-trump' }
  ],
  'tanya-chutkan': [
    { name: 'Jack Smith', relationship: 'Presided over Special Counsel Smith\'s Jan 6 case against Trump', slug: 'jack-smith' },
    { name: 'Donald Trump', relationship: 'Judge assigned to Trump January 6 federal case', slug: 'donald-trump' }
  ],
  'scott-mcafee': [
    { name: 'Fani Willis', relationship: 'Ruled on Willis disqualification motion in Georgia RICO case', slug: 'fani-willis' },
    { name: 'Donald Trump', relationship: 'Presided over Georgia election interference case against Trump', slug: 'donald-trump' }
  ],
  'jacob-chansley': [
    { name: 'Donald Trump', relationship: 'Stormed Capitol on Jan 6 as self-proclaimed Trump supporter', slug: 'donald-trump' },
    { name: 'Guy Reffitt', relationship: 'Fellow January 6 defendant', slug: 'guy-reffitt' },
    { name: 'Ashli Babbitt', relationship: 'Fellow January 6 participant killed during Capitol breach', slug: 'ashli-babbitt' }
  ],
  'jenna-ellis': [
    { name: 'Rudy Giuliani', relationship: 'Partner on Trump legal team challenging 2020 election', slug: 'rudy-giuliani' },
    { name: 'Donald Trump', relationship: 'Served on Trump campaign legal team', slug: 'donald-trump' },
    { name: 'Sidney Powell', relationship: 'Fellow Trump legal team member and Georgia co-defendant', slug: 'sidney-powell' }
  ],
  'christina-bobb': [
    { name: 'Donald Trump', relationship: 'Served as Trump attorney during Mar-a-Lago documents case', slug: 'donald-trump' },
    { name: 'Rudy Giuliani', relationship: 'Worked with Giuliani on post-election legal efforts', slug: 'rudy-giuliani' }
  ],
  'mary-trump': [
    { name: 'Donald Trump', relationship: 'Niece who authored exposé "Too Much and Never Enough"', slug: 'donald-trump' },
    { name: 'Maryanne Trump Barry', relationship: 'Aunt - retired federal judge', slug: 'maryanne-trump-barry' },
    { name: 'Fred Trump', relationship: 'Father - nephew of Donald Trump\'s father', slug: 'fred-trump' }
  ],
  'maryanne-trump-barry': [
    { name: 'Donald Trump', relationship: 'Sister - retired federal judge who criticized Trump privately', slug: 'donald-trump' },
    { name: 'Mary Trump', relationship: 'Niece who recorded Barry\'s criticism of Donald', slug: 'mary-trump' },
    { name: 'Fred Trump', relationship: 'Father - patriarch of Trump family', slug: 'fred-trump' }
  ],
  'franklin-graham': [
    { name: 'Donald Trump', relationship: 'Prominent evangelical supporter and spiritual advisor to Trump', slug: 'donald-trump' },
    { name: 'Robert Jeffress', relationship: 'Fellow evangelical leader and Trump supporter', slug: 'robert-jeffress' },
    { name: 'Jerry Falwell', relationship: 'Fellow evangelical leader and political ally', slug: 'jerry-falwell' }
  ],
  'robert-jeffress': [
    { name: 'Donald Trump', relationship: 'Pastor who served on Trump evangelical advisory board', slug: 'donald-trump' },
    { name: 'Franklin Graham', relationship: 'Fellow evangelical leader and Trump supporter', slug: 'franklin-graham' }
  ],
  'arthur-engoron': [
    { name: 'Donald Trump', relationship: 'Judge who found Trump liable for fraud totaling $454M', slug: 'donald-trump' },
    { name: 'Letitia James', relationship: 'NY AG who brought civil fraud case before Engoron', slug: 'letitia-james' }
  ],
  'stephanie-grisham': [
    { name: 'Donald Trump', relationship: 'White House Press Secretary who never held a briefing', slug: 'donald-trump' },
    { name: 'Melania Trump', relationship: 'Chief of Staff to First Lady Melania Trump', slug: 'melania-trump' },
    { name: 'Cassidy Hutchinson', relationship: 'Fellow Trump insider turned critic', slug: 'cassidy-hutchinson' }
  ],
  'johnny-mcentee': [
    { name: 'Donald Trump', relationship: 'Director of Presidential Personnel and close Trump aide', slug: 'donald-trump' },
    { name: 'Stephen Miller', relationship: 'Fellow Trump loyalist in White House', slug: 'stephen-miller' }
  ],
  'steven-mnuchin': [
    { name: 'Donald Trump', relationship: 'Treasury Secretary under Trump 2017-2021', slug: 'donald-trump' },
    { name: 'Jared Kushner', relationship: 'Worked closely with Kushner on economic policy in Trump admin', slug: 'jared-kushner' },
    { name: 'Gary Cohn', relationship: 'Fellow Goldman Sachs veteran in Trump economic team', slug: 'gary-cohn' }
  ],
  'phil-waldron': [
    { name: 'Rudy Giuliani', relationship: 'Presented election fraud PowerPoint to Trump team and Congress', slug: 'rudy-giuliani' },
    { name: 'Donald Trump', relationship: 'Retired colonel who pushed election fraud theories to Trump circle', slug: 'donald-trump' }
  ],
  'anatoli-samochornov': [
    { name: 'Donald Trump', relationship: 'Russian translator at Trump Tower meeting in 2016', slug: 'donald-trump' },
    { name: 'Natalia Veselnitskaya', relationship: 'Translated for Veselnitskaya at Trump Tower meeting', slug: 'natalia-veselnitskaya' }
  ],
  'joe-tacopina': [
    { name: 'Donald Trump', relationship: 'Attorney who represented Trump in E. Jean Carroll defamation case', slug: 'donald-trump' },
    { name: 'Alvin Bragg', relationship: 'Opposed Bragg\'s prosecution of Trump in hush money case', slug: 'alvin-bragg' }
  ],
  'amy-berman-jackson': [
    { name: 'Roger Stone', relationship: 'Presided over Stone criminal trial and sentencing', slug: 'roger-stone' },
    { name: 'Paul Manafort', relationship: 'Presided over Manafort obstruction case', slug: 'paul-manafort' },
    { name: 'Donald Trump', relationship: 'Judge in multiple cases connected to Trump associates', slug: 'donald-trump' }
  ],
  'lewis-kaplan': [
    { name: 'Donald Trump', relationship: 'Judge who presided over E. Jean Carroll defamation trials', slug: 'donald-trump' },
    { name: 'Jessica Leeds', relationship: 'Accuser whose claims were part of Carroll trial context', slug: 'jessica-leeds' }
  ],
  'beryl-howell': [
    { name: 'Jack Smith', relationship: 'Chief Judge who authorized grand jury subpoenas for Trump probe', slug: 'jack-smith' },
    { name: 'Donald Trump', relationship: 'Oversaw multiple grand jury proceedings related to Trump', slug: 'donald-trump' }
  ],
  'jessica-leeds': [
    { name: 'Donald Trump', relationship: 'Accused Trump of groping her on airplane in late 1970s', slug: 'donald-trump' },
    { name: 'Jill Harth', relationship: 'Fellow Trump accuser who came forward publicly', slug: 'jill-harth' }
  ],
  'jill-harth': [
    { name: 'Donald Trump', relationship: 'Filed sexual harassment lawsuit against Trump in 1997', slug: 'donald-trump' },
    { name: 'Jessica Leeds', relationship: 'Fellow Trump accuser', slug: 'jessica-leeds' }
  ],
  'bill-kristol': [
    { name: 'Steve Schmidt', relationship: 'Fellow Never Trump conservative and Lincoln Project figure', slug: 'steve-schmidt' },
    { name: 'Donald Trump', relationship: 'Prominent Never Trump Republican and conservative critic', slug: 'donald-trump' }
  ],
  'steve-schmidt': [
    { name: 'Bill Kristol', relationship: 'Fellow Never Trump Republican commentator', slug: 'bill-kristol' },
    { name: 'Donald Trump', relationship: 'Co-founded Lincoln Project opposing Trump re-election', slug: 'donald-trump' },
    { name: 'John McCain', relationship: 'Former senior strategist for McCain 2008 presidential campaign', slug: 'john-mccain' }
  ],
  'bernie-ebbers': [
    { name: 'Scott Sullivan', relationship: 'WorldCom CFO who cooperated in fraud case against Ebbers', slug: 'scott-sullivan' },
    { name: 'Jack Grubman', relationship: 'Telecom analyst whose recommendations propped up WorldCom', slug: 'jack-grubman' }
  ],
  'cardinal-bernard-law': [
    { name: 'Cardinal Theodore McCarrick', relationship: 'Fellow cardinal accused of covering up sexual abuse', slug: 'cardinal-theodore-mccarrick' },
    { name: 'John Geoghan', relationship: 'Priest whose abuse Law covered up for decades', slug: 'john-geoghan' }
  ],
  'cardinal-theodore-mccarrick': [
    { name: 'Cardinal Bernard Law', relationship: 'Fellow cardinal implicated in abuse cover-up scandal', slug: 'cardinal-bernard-law' },
    { name: 'Pope Francis', relationship: 'Defrocked by Pope Francis in 2019 after abuse findings', slug: 'pope-francis' }
  ],
  'tony-hayward': [
    { name: 'Bob Dudley', relationship: 'Successor as BP CEO after Deepwater Horizon disaster', slug: 'robert-dudley' },
    { name: 'Donald Vidrine', relationship: 'BP well site leader during Deepwater Horizon explosion', slug: 'donald-vidrine' },
    { name: 'Thad Allen', relationship: 'Coast Guard Admiral who led federal spill response', slug: 'thad-allen' }
  ],
  'joseph-hazelwood': [
    { name: 'Lawrence Rawl', relationship: 'Exxon CEO at time of Valdez oil spill', slug: 'lawrence-rawl' }
  ],
  'brett-hankison': [
    { name: 'Breonna Taylor', relationship: 'One of officers involved in fatal raid on Taylor\'s apartment', slug: 'breonna-taylor' },
    { name: 'Myles Cosgrove', relationship: 'Fellow officer who fired shots during Breonna Taylor raid', slug: 'myles-cosgrove' },
    { name: 'Joshua Jaynes', relationship: 'Detective who obtained no-knock warrant for Taylor raid', slug: 'joshua-jaynes' }
  ],
  'jeronimo-yanez': [
    { name: 'Philando Castile', relationship: 'Shot and killed Castile during traffic stop in 2016', slug: 'philando-castile' }
  ],
  'william-campbell': [
    { name: 'Bobby Kotick', relationship: 'Fellow corporate figure in pharmaceutical/corporate misconduct', slug: 'bobby-kotick' }
  ],
  'kathe-sackler': [
    { name: 'David Sackler', relationship: 'Fellow Sackler family member and Purdue Pharma director', slug: 'david-sackler' },
    { name: 'Richard Sackler', relationship: 'Relative and Purdue Pharma executive who pushed OxyContin', slug: 'richard-sackler' },
    { name: 'Arthur Sackler', relationship: 'Uncle who founded Sackler pharmaceutical empire', slug: 'arthur-sackler' }
  ],
  'david-sackler': [
    { name: 'Kathe Sackler', relationship: 'Fellow Sackler family member and Purdue Pharma director', slug: 'kathe-sackler' },
    { name: 'Richard Sackler', relationship: 'Father and Purdue Pharma chairman who drove OxyContin sales', slug: 'richard-sackler' },
    { name: 'Arthur Sackler', relationship: 'Grandfather who built Sackler pharmaceutical dynasty', slug: 'arthur-sackler' }
  ],
  'allen-stanford': [
    { name: 'Bernie Madoff', relationship: 'Fellow Ponzi scheme operator during same financial era', slug: 'bernie-madoff' },
    { name: 'Tom Petters', relationship: 'Contemporary fraudster convicted of similar investment schemes', slug: 'tom-petters' }
  ],
  'tom-petters': [
    { name: 'Allen Stanford', relationship: 'Contemporary Ponzi scheme operator', slug: 'allen-stanford' },
    { name: 'Bernie Madoff', relationship: 'Fellow fraudster in same era of large-scale Ponzi schemes', slug: 'bernie-madoff' }
  ],
  'scott-rothstein': [
    { name: 'Bernie Madoff', relationship: 'Fellow Ponzi scheme operator convicted in similar timeframe', slug: 'bernie-madoff' },
    { name: 'Allen Stanford', relationship: 'Contemporary fraudster running parallel Ponzi scheme', slug: 'allen-stanford' }
  ],
  'tim-cook': [
    { name: 'Satya Nadella', relationship: 'Fellow Big Tech CEO and competitor', slug: 'satya-nadella' },
    { name: 'Mark Zuckerberg', relationship: 'Publicly criticized Facebook privacy practices', slug: 'mark-zuckerberg' }
  ],
  'satya-nadella': [
    { name: 'Tim Cook', relationship: 'Fellow Big Tech CEO and competitor', slug: 'tim-cook' },
    { name: 'Sam Altman', relationship: 'Key partner via Microsoft\'s massive investment in OpenAI', slug: 'sam-altman' }
  ],
  'michael-bloomberg': [
    { name: 'Donald Trump', relationship: 'Ran against Trump-era politics in 2020 presidential bid', slug: 'donald-trump' },
    { name: 'Ray Dalio', relationship: 'Fellow billionaire financier and philanthropist', slug: 'ray-dalio' }
  ],
  'david-solomon': [
    { name: 'Lloyd Blankfein', relationship: 'Predecessor as Goldman Sachs CEO', slug: 'lloyd-blankfein' },
    { name: 'Jamie Dimon', relationship: 'Fellow Wall Street bank CEO and frequent comparator', slug: 'jamie-dimon' }
  ],
  'brian-moynihan': [
    { name: 'Jamie Dimon', relationship: 'Fellow major bank CEO', slug: 'jamie-dimon' },
    { name: 'Warren Buffett', relationship: 'Berkshire Hathaway is major Bank of America shareholder', slug: 'warren-buffett' }
  ],
  'ken-griffin': [
    { name: 'Jordan Belfort', relationship: 'Both associated with aggressive Wall Street trading practices', slug: 'jordan-belfort' },
    { name: 'Steve Cohen', relationship: 'Fellow hedge fund billionaire', slug: 'steve-cohen' }
  ],
  'jordan-belfort': [
    { name: 'Ken Griffin', relationship: 'Fellow Wall Street figure scrutinized for trading practices', slug: 'ken-griffin' },
    { name: 'Bernie Madoff', relationship: 'Fellow convicted Wall Street fraudster', slug: 'bernie-madoff' }
  ],
  'john-kapoor': [
    { name: 'John Hammergren', relationship: 'Fellow pharmaceutical executive implicated in opioid crisis', slug: 'john-hammergren' },
    { name: 'Richard Sackler', relationship: 'Parallel opioid crisis figure - Kapoor pushed fentanyl spray', slug: 'richard-sackler' }
  ],
  'john-hammergren': [
    { name: 'Steven Collis', relationship: 'Fellow pharmaceutical distributor CEO under DEA scrutiny', slug: 'steven-collis' },
    { name: 'John Kapoor', relationship: 'Fellow pharma executive convicted in opioid-related case', slug: 'john-kapoor' }
  ],
  'steven-collis': [
    { name: 'John Hammergren', relationship: 'Fellow pharmaceutical distributor CEO - McKesson', slug: 'john-hammergren' },
    { name: 'Craig Landau', relationship: 'Endo Pharmaceuticals CEO in opioid distribution chain', slug: 'craig-landau' }
  ],
  'damon-hininger': [
    { name: 'George Zoley', relationship: 'Fellow private prison executive - GEO Group CEO', slug: 'george-zoley' },
    { name: 'Robert Crants', relationship: 'Early CCA/CoreCivic executive who built private prison model', slug: 'robert-crants' }
  ],
  'george-zoley': [
    { name: 'Damon Hininger', relationship: 'Fellow private prison executive - CoreCivic CEO', slug: 'damon-hininger' },
    { name: 'Thomas Beasley', relationship: 'CCA co-founder who pioneered private prison industry', slug: 'thomas-beasley' }
  ],
  'james-taiclet': [
    { name: 'Greg Hayes', relationship: 'Fellow defense contractor CEO - Raytheon/RTX', slug: 'greg-hayes' },
    { name: 'Lloyd Austin', relationship: 'Defense Secretary overseeing major Lockheed Martin contracts', slug: 'lloyd-austin' }
  ],
  'greg-hayes': [
    { name: 'James Taiclet', relationship: 'Fellow defense contractor CEO - Lockheed Martin', slug: 'james-taiclet' },
    { name: 'Lloyd Austin', relationship: 'Defense Secretary - major Raytheon customer', slug: 'lloyd-austin' }
  ],
  'warren-buffett': [
    { name: 'Brian Moynihan', relationship: 'Berkshire Hathaway is major Bank of America shareholder', slug: 'brian-moynihan' },
    { name: 'Charlie Munger', relationship: 'Decades-long business partner at Berkshire Hathaway', slug: 'charlie-munger' },
    { name: 'Bill Gates', relationship: 'Close friend and fellow billionaire philanthropist', slug: 'bill-gates' }
  ],
  'ray-dalio': [
    { name: 'Michael Bloomberg', relationship: 'Fellow billionaire financier and public policy figure', slug: 'michael-bloomberg' },
    { name: 'Jamie Dimon', relationship: 'Wall Street peer and economic commentator', slug: 'jamie-dimon' }
  ],
  'kamala-harris': [
    { name: 'Joe Biden', relationship: 'Vice President under Biden, chosen as running mate in 2020', slug: 'joe-biden' },
    { name: 'Donald Trump', relationship: '2024 presidential election opponent', slug: 'donald-trump' },
    { name: 'Merrick Garland', relationship: 'Attorney General in Biden-Harris administration', slug: 'merrick-garland' }
  ],
  'trevor-milton': [
    { name: 'Charlie Javice', relationship: 'Contemporary startup fraud case - similar deception tactics', slug: 'charlie-javice' },
    { name: 'Adam Neumann', relationship: 'Fellow startup founder accused of misleading investors', slug: 'adam-neumann' }
  ],
  'charlie-javice': [
    { name: 'Trevor Milton', relationship: 'Contemporary startup fraud case', slug: 'trevor-milton' },
    { name: 'Jamie Dimon', relationship: 'JPMorgan Chase CEO whose bank acquired Frank for $175M', slug: 'jamie-dimon' }
  ],
  'carlos-watson': [
    { name: 'Charlie Javice', relationship: 'Fellow startup founder charged with fraud in similar era', slug: 'charlie-javice' },
    { name: 'Trevor Milton', relationship: 'Contemporary startup fraud defendant', slug: 'trevor-milton' }
  ],
  'doug-mcmillon': [
    { name: 'Sam Walton', relationship: 'Founded Walmart that McMillon now leads as CEO', slug: 'sam-walton' },
    { name: 'Chris Smalls', relationship: 'Labor organizer challenging retail warehouse conditions', slug: 'chris-smalls' }
  ],
  'howard-schultz': [
    { name: 'Chris Smalls', relationship: 'Starbucks faced union drives similar to worker activism', slug: 'chris-smalls' },
    { name: 'Tim Cook', relationship: 'Fellow corporate leader facing labor scrutiny', slug: 'tim-cook' }
  ],
  'brian-chesky': [
    { name: 'Adam Neumann', relationship: 'Fellow tech disruptor founder in sharing/real estate economy', slug: 'adam-neumann' },
    { name: 'Tim Cook', relationship: 'Fellow tech CEO navigating regulatory battles', slug: 'tim-cook' }
  ],
  'mike-wirth': [
    { name: 'Lee Raymond', relationship: 'Former ExxonMobil CEO - fellow fossil fuel executive', slug: 'lee-raymond' },
    { name: 'Rex Tillerson', relationship: 'Former Exxon CEO and fellow oil industry leader', slug: 'rex-tillerson' }
  ],
  'werner-baumann': [
    { name: 'Edward Breen', relationship: 'DuPont CEO dealing with similar chemical contamination legacy', slug: 'edward-breen' },
    { name: 'Hugh Grant', relationship: 'Monsanto CEO whose merger with Bayer Baumann oversaw', slug: 'hugh-grant-monsanto' }
  ],
  'edward-breen': [
    { name: 'Werner Baumann', relationship: 'Fellow chemical company CEO facing contamination lawsuits', slug: 'werner-baumann' },
    { name: 'Rob Bilott', relationship: 'Attorney who exposed DuPont PFAS contamination', slug: 'rob-bilott' },
    { name: 'Ellen Kullman', relationship: 'Predecessor as DuPont CEO', slug: 'ellen-kullman' }
  ],
  'kevin-burns': [
    { name: 'Albert Bourla', relationship: 'Fellow executive navigating health product controversy', slug: 'albert-bourla' }
  ],
  'albert-bourla': [
    { name: 'Stephane Bancel', relationship: 'Fellow COVID-19 vaccine maker CEO - Moderna', slug: 'stephane-bancel' },
    { name: 'Andrew Witty', relationship: 'Fellow pharmaceutical CEO during COVID era', slug: 'andrew-witty' }
  ],
  'stephane-bancel': [
    { name: 'Albert Bourla', relationship: 'Fellow COVID-19 vaccine CEO - Pfizer', slug: 'albert-bourla' },
    { name: 'Anthony Fauci', relationship: 'Worked with Fauci on mRNA vaccine development', slug: 'anthony-fauci' }
  ],
  'andrew-witty': [
    { name: 'Albert Bourla', relationship: 'Fellow pharma CEO during pandemic era', slug: 'albert-bourla' },
    { name: 'David Cordani', relationship: 'Fellow healthcare industry CEO', slug: 'david-cordani' }
  ],
  'david-cordani': [
    { name: 'Andrew Witty', relationship: 'Fellow healthcare CEO - UnitedHealth Group', slug: 'andrew-witty' },
    { name: 'Stephen Hemsley', relationship: 'Predecessor at UnitedHealth Group', slug: 'stephen-hemsley' },
    { name: 'Karen Ignagni', relationship: 'Insurance industry lobbying leader', slug: 'karen-ignagni' }
  ],
  'mark-schneider': [
    { name: 'James Quincey', relationship: 'Fellow food/beverage CEO facing public health criticism', slug: 'james-quincey' },
    { name: 'Ramon Laguarta', relationship: 'PepsiCo CEO - peer in food industry', slug: 'ramon-laguarta' }
  ],
  'james-quincey': [
    { name: 'Ramon Laguarta', relationship: 'PepsiCo CEO - primary beverage competitor', slug: 'ramon-laguarta' },
    { name: 'Mark Schneider', relationship: 'Nestle CEO - fellow food industry leader', slug: 'mark-schneider' }
  ],
  'chris-kempczinski': [
    { name: 'Ramon Laguarta', relationship: 'Fellow food industry CEO', slug: 'ramon-laguarta' },
    { name: 'Howard Schultz', relationship: 'Fellow quick-service/restaurant CEO', slug: 'howard-schultz' }
  ],
  'ramon-laguarta': [
    { name: 'James Quincey', relationship: 'Coca-Cola CEO - primary beverage rival', slug: 'james-quincey' },
    { name: 'Chris Kempczinski', relationship: 'McDonald\'s CEO - PepsiCo major restaurant supplier', slug: 'chris-kempczinski' }
  ],
  'bobby-kotick': [
    { name: 'Satya Nadella', relationship: 'Microsoft acquired Activision Blizzard under Kotick', slug: 'satya-nadella' },
    { name: 'Les Moonves', relationship: 'Fellow media executive ousted amid misconduct allegations', slug: 'les-moonves' }
  ],
  'martin-shkreli': [
    { name: 'Jordan Belfort', relationship: 'Fellow convicted Wall Street figure known for public notoriety', slug: 'jordan-belfort' },
    { name: 'John Kapoor', relationship: 'Fellow pharmaceutical executive convicted of fraud', slug: 'john-kapoor' }
  ],
  'les-moonves': [
    { name: 'Bobby Kotick', relationship: 'Fellow media executive facing workplace misconduct allegations', slug: 'bobby-kotick' },
    { name: 'Matt Lauer', relationship: 'Fellow media executive ousted during #MeToo movement', slug: 'matt-lauer' }
  ],
  'geoffrey-bible': [
    { name: 'Edward Horrigan', relationship: 'Fellow tobacco executive who faced litigation', slug: 'edward-horrigan' },
    { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed tobacco industry practices', slug: 'jeffrey-wigand' }
  ],
  'mary-barra': [
    { name: 'Tim Cook', relationship: 'Fellow CEO navigating EV and tech transformation', slug: 'tim-cook' },
    { name: 'Doug McMillon', relationship: 'Fellow Fortune 500 CEO', slug: 'doug-mcmillon' }
  ],
  'bob-menendez': [
    { name: 'Henry Cuellar', relationship: 'Fellow Democratic congressman facing corruption charges', slug: 'henry-cuellar' },
    { name: 'Abdel Fattah el-Sisi', relationship: 'Egyptian president - Menendez accused of acting as foreign agent for Egypt', slug: 'abdel-fattah-el-sisi' }
  ],
  'george-santos': [
    { name: 'Kevin McCarthy', relationship: 'House Speaker who initially protected Santos before expulsion', slug: 'kevin-mccarthy' },
    { name: 'Nancy Mace', relationship: 'Republican colleague who pushed for Santos expulsion', slug: 'nancy-mace' }
  ],
  'recep-tayyip-erdogan': [
    { name: 'Vladimir Putin', relationship: 'Strategic partner and rival managing Turkey-Russia relations', slug: 'vladimir-putin' },
    { name: 'Donald Trump', relationship: 'Maintained close personal relationship with Trump', slug: 'donald-trump' },
    { name: 'Abdel Fattah el-Sisi', relationship: 'Regional rival as authoritarian Middle Eastern leader', slug: 'abdel-fattah-el-sisi' }
  ],
  'rodrigo-duterte': [
    { name: 'Narendra Modi', relationship: 'Fellow strongman leader accused of human rights abuses', slug: 'narendra-modi' },
    { name: 'Donald Trump', relationship: 'Praised by Trump and maintained friendly relationship', slug: 'donald-trump' }
  ],
  'narendra-modi': [
    { name: 'Donald Trump', relationship: 'Cultivated close relationship with Trump administration', slug: 'donald-trump' },
    { name: 'Recep Tayyip Erdogan', relationship: 'Fellow leader of rising authoritarian power', slug: 'recep-tayyip-erdogan' },
    { name: 'Vladimir Putin', relationship: 'Maintained strategic partnership with Russia', slug: 'vladimir-putin' }
  ],
  'nicolas-maduro': [
    { name: 'Fidel Castro', relationship: 'Ideological predecessor and Venezuelan-Cuban alliance partner', slug: 'fidel-castro' },
    { name: 'Vladimir Putin', relationship: 'Key ally providing military and economic support to Venezuela', slug: 'vladimir-putin' }
  ],
  'darren-wilson': [
    { name: 'Michael Brown', relationship: 'Shot and killed Michael Brown in Ferguson, Missouri in 2014', slug: 'michael-brown' },
    { name: 'Thomas Jackson', relationship: 'Ferguson police chief during Brown shooting aftermath', slug: 'thomas-jackson' }
  ],
  'timothy-loehmann': [
    { name: 'Tamir Rice', relationship: 'Officer who shot and killed 12-year-old Tamir Rice in 2014', slug: 'tamir-rice' }
  ],
  'daniel-pantaleo': [
    { name: 'Eric Garner', relationship: 'Officer whose chokehold killed Eric Garner in 2014', slug: 'eric-garner' }
  ],
  'jason-van-dyke': [
    { name: 'Laquan McDonald', relationship: 'Shot Laquan McDonald 16 times, convicted of murder', slug: 'laquan-mcdonald' }
  ],
  'amber-guyger': [
    { name: 'Botham Jean', relationship: 'Off-duty officer who shot and killed Jean in his own apartment', slug: 'botham-jean' }
  ],
  'kim-potter': [
    { name: 'Daunte Wright', relationship: 'Officer who fatally shot Wright claiming taser confusion', slug: 'daunte-wright' }
  ],
  'philip-brailsford': [
    { name: 'Daniel Shaver', relationship: 'Officer who shot and killed unarmed Daniel Shaver in hotel hallway', slug: 'daniel-shaver' }
  ],
  'michael-slager': [
    { name: 'Walter Scott', relationship: 'Officer who shot Walter Scott in the back while fleeing', slug: 'walter-scott' }
  ],
  'greg-abbott': [
    { name: 'Brian Kemp', relationship: 'Fellow Republican governor implementing restrictive policies', slug: 'brian-kemp' },
    { name: 'Ron DeSantis', relationship: 'Fellow GOP governor competing on border enforcement', slug: 'ron-desantis' },
    { name: 'Donald Trump', relationship: 'Key Trump ally on border and immigration enforcement', slug: 'donald-trump' }
  ],
  'brian-kemp': [
    { name: 'Greg Abbott', relationship: 'Fellow Republican governor', slug: 'greg-abbott' },
    { name: 'Donald Trump', relationship: 'Refused Trump\'s pressure to overturn Georgia 2020 results', slug: 'donald-trump' },
    { name: 'Fani Willis', relationship: 'Fulton County DA who investigated election interference in Kemp\'s state', slug: 'fani-willis' }
  ],
  'tommy-tuberville': [
    { name: 'Donald Trump', relationship: 'Strong Trump supporter who blocked military promotions', slug: 'donald-trump' },
    { name: 'Lloyd Austin', relationship: 'Blocked Austin\'s military nominations over abortion policy', slug: 'lloyd-austin' }
  ],
  'r-kelly': [
    { name: 'Bill Cosby', relationship: 'Fellow entertainment figure convicted of sexual abuse', slug: 'bill-cosby' },
    { name: 'Harvey Weinstein', relationship: 'Fellow serial predator convicted during #MeToo era', slug: 'harvey-weinstein' }
  ],
  'larry-nassar': [
    { name: 'Lou Anna Simon', relationship: 'MSU President who resigned over handling of Nassar abuse', slug: 'lou-anna-simon' },
    { name: 'Simone Biles', relationship: 'Prominent survivor who testified against Nassar', slug: 'simone-biles' }
  ],
  'bill-cosby': [
    { name: 'R. Kelly', relationship: 'Fellow entertainment figure convicted of sexual assault', slug: 'r-kelly' },
    { name: 'Harvey Weinstein', relationship: 'Fellow high-profile sexual predator case', slug: 'harvey-weinstein' }
  ],
  'kevin-spacey': [
    { name: 'Harvey Weinstein', relationship: 'Fellow entertainment figure accused during #MeToo movement', slug: 'harvey-weinstein' },
    { name: 'Jeffrey Epstein', relationship: 'Flew on Epstein\'s private jet multiple times', slug: 'jeffrey-epstein' }
  ],
  'matt-lauer': [
    { name: 'Charlie Rose', relationship: 'Fellow TV anchor fired for sexual misconduct in same period', slug: 'charlie-rose' },
    { name: 'Les Moonves', relationship: 'Fellow media figure ousted during #MeToo movement', slug: 'les-moonves' },
    { name: 'Harvey Weinstein', relationship: 'His firing was triggered by #MeToo wave started by Weinstein case', slug: 'harvey-weinstein' }
  ],
  'charlie-rose': [
    { name: 'Matt Lauer', relationship: 'Fellow TV host fired for sexual misconduct', slug: 'matt-lauer' },
    { name: 'Les Moonves', relationship: 'CBS colleague also terminated during #MeToo', slug: 'les-moonves' }
  ],
  'brett-ratner': [
    { name: 'Harvey Weinstein', relationship: 'Fellow Hollywood figure accused of sexual misconduct', slug: 'harvey-weinstein' },
    { name: 'Kevin Spacey', relationship: 'Fellow entertainment figure accused during #MeToo era', slug: 'kevin-spacey' }
  ]
};

insertKnownAssociates(data);
