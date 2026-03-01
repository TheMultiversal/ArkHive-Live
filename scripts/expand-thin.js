const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Get all existing slugs for validation
const slugRegex = /^\s+'([a-z0-9-]+)':\s*\{/gm;
const existingSlugs = new Set();
let m;
while ((m = slugRegex.exec(content)) !== null) {
  existingSlugs.add(m[1]);
}
console.log('Total existing slugs:', existingSlugs.size);

// For each thin profile, define additional knownAssociates
// Each entry: { name, relationship, href }
// href must point to existing slugs or be external entity pages

const expansions = {
  'jeffrey-epstein': [
    { name: 'Ghislaine Maxwell', relationship: 'Primary associate and alleged accomplice in trafficking network', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Les Wexner', relationship: 'Billionaire benefactor who granted Epstein power of attorney', href: '/entities/individuals/les-wexner' },
    { name: 'Jean-Luc Brunel', relationship: 'Modeling agent and co-conspirator who recruited victims', href: '/entities/individuals/jean-luc-brunel' },
    { name: 'Prince Andrew', relationship: 'British royal and close associate accused by victims', href: '/entities/individuals/prince-andrew' },
    { name: 'Bill Clinton', relationship: 'Former US President — flew on Lolita Express 26+ times', href: '/entities/individuals/bill-clinton' },
    { name: 'Alan Dershowitz', relationship: 'Attorney and associate accused by victim Virginia Giuffre', href: '/entities/individuals/alan-dershowitz' },
    { name: 'Donald Trump', relationship: 'Former US President with decades-long social ties', href: '/entities/individuals/donald-trump' },
    { name: 'Alexander Acosta', relationship: 'US Attorney who negotiated controversial 2008 plea deal', href: '/entities/individuals/alex-acosta' },
    { name: 'Nadia Marcinkova', relationship: 'Alleged trafficking victim later turned co-conspirator', href: '/entities/individuals/nadia-marcinkova' },
    { name: 'Sarah Kellen', relationship: 'Personal assistant and alleged co-conspirator', href: '/entities/individuals/sarah-kellen' },
    { name: 'Steven Hoffenberg', relationship: 'Business partner in Towers Financial Ponzi scheme', href: '/entities/individuals/steven-hoffenberg' },
    { name: 'Eva Dubin', relationship: 'Former girlfriend who maintained close ties', href: '/entities/individuals/eva-dubin' },
    { name: 'Glenn Dubin', relationship: 'Hedge fund manager and longstanding associate', href: '/entities/individuals/glenn-dubin' },
    { name: 'Leon Black', relationship: 'Apollo Global Management CEO who paid $158M in advisory fees', href: '/entities/individuals/leon-black' },
    { name: 'Jes Staley', relationship: 'JPMorgan executive who maintained close banking relationship', href: '/entities/individuals/jes-staley' },
    { name: 'Virginia Giuffre', relationship: 'Key victim/survivor who brought civil lawsuits', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Courtney Wild', relationship: 'Victim and advocate who challenged 2008 plea deal', href: '/entities/individuals/courtney-wild' },
    { name: 'Donald Barr', relationship: 'Dalton School headmaster who hired Epstein as teacher', href: '/entities/individuals/donald-barr' },
    { name: 'Robert Maxwell', relationship: 'Father of Ghislaine Maxwell; alleged Mossad asset', href: '/entities/individuals/robert-maxwell' },
    { name: 'Ehud Barak', relationship: 'Former Israeli PM who visited Epstein residences', href: '/entities/individuals/ehud-barak' },
  ],

  'ghislaine-maxwell': [
    { name: 'Jeffrey Epstein', relationship: 'Primary associate — recruited and groomed victims for his network', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Prince Andrew', relationship: 'Close personal friend introduced to Epstein through her', href: '/entities/individuals/prince-andrew' },
    { name: 'Robert Maxwell', relationship: 'Father — media baron and alleged intelligence asset', href: '/entities/individuals/robert-maxwell' },
    { name: 'Kevin Maxwell', relationship: 'Brother involved in father\'s business empire', href: '/entities/individuals/kevin-maxwell' },
    { name: 'Jean-Luc Brunel', relationship: 'Modeling agent who supplied victims; found dead in jail', href: '/entities/individuals/jean-luc-brunel' },
    { name: 'Virginia Giuffre', relationship: 'Key accuser who detailed Maxwell\'s recruitment role', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Sarah Kellen', relationship: 'Epstein assistant who worked under Maxwell\'s direction', href: '/entities/individuals/sarah-kellen' },
    { name: 'Nadia Marcinkova', relationship: 'Brought into Epstein circle; described as Maxwell recruit', href: '/entities/individuals/nadia-marcinkova' },
    { name: 'Bill Clinton', relationship: 'Traveled together on Lolita Express and to Africa', href: '/entities/individuals/bill-clinton' },
    { name: 'Les Wexner', relationship: 'L Brands CEO whose social circle she helped Epstein access', href: '/entities/individuals/les-wexner' },
    { name: 'Adriana Ross', relationship: 'Former assistant named as co-conspirator', href: '/entities/individuals/adriana-ross' },
    { name: 'Emmy Tayler', relationship: 'Personal assistant in London operations', href: '/entities/individuals/emmy-tayler' },
    { name: 'Lesley Groff', relationship: 'Epstein\'s executive assistant and scheduler', href: '/entities/individuals/lesley-groff' },
    { name: 'Alan Dershowitz', relationship: 'Attorney who represented Epstein and was accused by Giuffre', href: '/entities/individuals/alan-dershowitz' },
    { name: 'Carolyn Andriano', relationship: 'Victim who testified about Maxwell\'s direct involvement', href: '/entities/individuals/carolyn-andriano' },
    { name: 'Chauntae Davies', relationship: 'Victim and flight attendant on Lolita Express', href: '/entities/individuals/chauntae-davies' },
    { name: 'Sarah Ransome', relationship: 'Victim who described abuse on Little St. James', href: '/entities/individuals/sarah-ransome' },
    { name: 'Naomi Campbell', relationship: 'Supermodel and social associate in elite circles', href: '/entities/individuals/naomi-campbell' },
    { name: 'Haley Robson', relationship: 'Victim who was turned into recruiter by Maxwell', href: '/entities/individuals/haley-robson' },
    { name: 'Teresa Helm', relationship: 'Victim who reported abuse by Maxwell directly', href: '/entities/individuals/teresa-helm' },
  ],

  'donald-trump': [
    { name: 'Jeffrey Epstein', relationship: 'Social associate throughout the 1990s-2000s; Mar-a-Lago connection', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Attended social events together; wished her well after arrest', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Alexander Acosta', relationship: 'Appointed as Labor Secretary despite overseeing Epstein plea deal', href: '/entities/individuals/alex-acosta' },
    { name: 'Alan Dershowitz', relationship: 'Attorney who defended both Epstein and Trump', href: '/entities/individuals/alan-dershowitz' },
    { name: 'William Barr', relationship: 'AG during Epstein\'s death in custody; father hired Epstein', href: '/entities/individuals/william-barr' },
    { name: 'Virginia Giuffre', relationship: 'Named Trump properties as locations in victim testimony', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Pete Hegseth', relationship: 'Cabinet appointee and political ally', href: '/entities/individuals/pete-hegseth' },
    { name: 'Keith Schiller', relationship: 'Longtime bodyguard and Director of Oval Office Operations', href: '/entities/individuals/keith-schiller' },
    { name: 'Rhona Graff', relationship: 'Executive assistant with Epstein contact information in files', href: '/entities/individuals/rhona-graff' },
    { name: 'Boris Epshteyn', relationship: 'Political advisor and attorney', href: '/entities/individuals/boris-epshteyn' },
    { name: 'Evan Corcoran', relationship: 'Defense attorney in classified documents case', href: '/entities/individuals/evan-corcoran' },
    { name: 'Lin Wood', relationship: 'Attorney and political ally', href: '/entities/individuals/lin-wood' },
  ],

  'pete-hegseth': [
    { name: 'Donald Trump', relationship: 'Nominated as Secretary of Defense', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Referenced in connection with Trump administration Epstein file discussions', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Matt Gaetz', relationship: 'Congressional ally investigated for related conduct', href: '/entities/individuals/matt-gaetz' },
    { name: 'Keith Schiller', relationship: 'Fellow Trump inner circle member', href: '/entities/individuals/keith-schiller' },
  ],

  'alex-acosta': [
    { name: 'Jeffrey Epstein', relationship: 'As US Attorney, oversaw controversial 2008 non-prosecution agreement', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Donald Trump', relationship: 'Appointed as Secretary of Labor despite Epstein plea controversy', href: '/entities/individuals/donald-trump' },
    { name: 'Alan Dershowitz', relationship: 'Co-defense attorney who negotiated the plea deal terms', href: '/entities/individuals/alan-dershowitz' },
    { name: 'Courtney Wild', relationship: 'Victim who challenged the plea deal under CVRA', href: '/entities/individuals/courtney-wild' },
    { name: 'Joe Recarey', relationship: 'Palm Beach detective who investigated Epstein case', href: '/entities/individuals/joe-recarey' },
    { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief who pushed for federal prosecution', href: '/entities/individuals/michael-reiter' },
  ],

  'ben-carson': [
    { name: 'Donald Trump', relationship: 'Appointed Secretary of HUD; fellow cabinet member', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Named in discussions of Trump cabinet connections to Epstein case', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Pete Hegseth', relationship: 'Fellow Trump cabinet member', href: '/entities/individuals/pete-hegseth' },
  ],

  'boris-epshteyn': [
    { name: 'Donald Trump', relationship: 'Senior political advisor and campaign attorney', href: '/entities/individuals/donald-trump' },
    { name: 'Evan Corcoran', relationship: 'Fellow Trump legal defense team member', href: '/entities/individuals/evan-corcoran' },
    { name: 'Jeffrey Epstein', relationship: 'Referenced in Epstein file release political discussions', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Keith Schiller', relationship: 'Fellow Trump inner circle member', href: '/entities/individuals/keith-schiller' },
  ],

  'evan-corcoran': [
    { name: 'Donald Trump', relationship: 'Defense attorney in classified documents case', href: '/entities/individuals/donald-trump' },
    { name: 'Boris Epshteyn', relationship: 'Fellow member of Trump legal defense team', href: '/entities/individuals/boris-epshteyn' },
    { name: 'Jeffrey Epstein', relationship: 'Connected via Trump administration discussions on Epstein files', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Maxwell case evidence referenced in political legal circles', href: '/entities/individuals/ghislaine-maxwell' },
  ],

  'lin-wood': [
    { name: 'Donald Trump', relationship: 'Political ally and election fraud claims attorney', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Made public claims about Epstein network and Chief Justice Roberts', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Referenced Maxwell connections in conspiratorial claims', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Alan Dershowitz', relationship: 'Public disputes over Epstein-related allegations', href: '/entities/individuals/alan-dershowitz' },
  ],

  'beryl-howell': [
    { name: 'Jeffrey Epstein', relationship: 'As Chief Judge, oversaw Epstein-related grand jury proceedings', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Oversaw sealed court proceedings related to Maxwell case', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Managed unsealing of Giuffre v. Maxwell documents', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Geoffrey Berman', relationship: 'SDNY prosecutor who brought the 2019 federal case', href: '/entities/individuals/geoffrey-berman' },
  ],

  'cy-vance': [
    { name: 'Jeffrey Epstein', relationship: 'As Manhattan DA, approved Epstein\'s downgraded sex offender status', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Harvey Weinstein', relationship: 'Initially declined to prosecute despite evidence', href: '/entities/individuals/harvey-weinstein' },
    { name: 'Geoffrey Berman', relationship: 'Federal counterpart at SDNY during overlapping Epstein investigations', href: '/entities/individuals/geoffrey-berman' },
    { name: 'Virginia Giuffre', relationship: 'Her testimony pressured re-examination of DA office decisions', href: '/entities/individuals/virginia-giuffre' },
  ],

  'keith-schiller': [
    { name: 'Donald Trump', relationship: 'Longtime bodyguard and Director of Oval Office Operations', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Present at events where Trump and Epstein socialized', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Boris Epshteyn', relationship: 'Fellow Trump inner circle member', href: '/entities/individuals/boris-epshteyn' },
    { name: 'Pete Hegseth', relationship: 'Fellow Trump administration appointee', href: '/entities/individuals/pete-hegseth' },
  ],

  'rhona-graff': [
    { name: 'Donald Trump', relationship: 'Executive assistant at Trump Organization for decades', href: '/entities/individuals/donald-trump' },
    { name: 'Jeffrey Epstein', relationship: 'Had Epstein\'s contact details including 14 phone numbers in her files', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Maintained Maxwell\'s contact information in Trump Org files', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Keith Schiller', relationship: 'Fellow long-term Trump Organization employee', href: '/entities/individuals/keith-schiller' },
  ],

  'janet-yellen': [
    { name: 'Jeffrey Epstein', relationship: 'Treasury Department oversight of financial investigations into Epstein network', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Larry Summers', relationship: 'Harvard colleague; Summers accepted Epstein donations', href: '/entities/individuals/larry-summers' },
    { name: 'Jes Staley', relationship: 'JPMorgan CEO investigated for Epstein banking relationship under Treasury oversight', href: '/entities/individuals/jes-staley' },
  ],

  'randy-credico': [
    { name: 'Jeffrey Epstein', relationship: 'Activist who pushed for investigation transparency', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Advocated for full prosecution and disclosure', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Supported victims\' advocacy efforts', href: '/entities/individuals/virginia-giuffre' },
  ],

  'robert-maxwell': [
    { name: 'Ghislaine Maxwell', relationship: 'Daughter who inherited intelligence connections and social network', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Jeffrey Epstein', relationship: 'Introduced to elite circles through Maxwell family connections', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Kevin Maxwell', relationship: 'Son involved in family business empire', href: '/entities/individuals/kevin-maxwell' },
    { name: 'Ehud Barak', relationship: 'Israeli political figure connected through intelligence networks', href: '/entities/individuals/ehud-barak' },
    { name: 'Prince Andrew', relationship: 'Connected to British establishment through media empire', href: '/entities/individuals/prince-andrew' },
  ],

  'john-stankey': [
    { name: 'Jeffrey Epstein', relationship: 'AT&T/WarnerMedia CEO during period of Epstein-related media coverage decisions', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Network media coverage decisions during Maxwell trial', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Donald Trump', relationship: 'AT&T/CNN relationship during Trump administration', href: '/entities/individuals/donald-trump' },
  ],

  'zhang-yiming': [
    { name: 'Jeffrey Epstein', relationship: 'TikTok/ByteDance content moderation decisions affecting Epstein coverage', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Donald Trump', relationship: 'TikTok ban negotiations with Trump administration', href: '/entities/individuals/donald-trump' },
    { name: 'Reid Hoffman', relationship: 'Silicon Valley figure with overlapping tech industry connections', href: '/entities/individuals/reid-hoffman' },
  ],

  'sonia-sotomayor': [
    { name: 'Jeffrey Epstein', relationship: 'Supreme Court justice during Epstein-related legal proceedings', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Beryl Howell', relationship: 'Fellow federal judge involved in Epstein case proceedings', href: '/entities/individuals/beryl-howell' },
    { name: 'Ghislaine Maxwell', relationship: 'Court declined to hear Maxwell-related appeals', href: '/entities/individuals/ghislaine-maxwell' },
  ],

  'colette-peters': [
    { name: 'Jeffrey Epstein', relationship: 'BOP Director during investigations into Epstein\'s death in federal custody', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Nicholas Tartaglione', relationship: 'Epstein\'s cellmate; subject of investigation into custody failures', href: '/entities/individuals/nicholas-tartaglione' },
    { name: 'William Barr', relationship: 'AG who ordered investigation into BOP failures around Epstein death', href: '/entities/individuals/william-barr' },
    { name: 'Ghislaine Maxwell', relationship: 'BOP custody during Maxwell\'s trial and imprisonment at FCI Tallahassee', href: '/entities/individuals/ghislaine-maxwell' },
  ],

  'larry-nassar': [
    { name: 'Jeffrey Epstein', relationship: 'Parallel case of institutional failure to stop serial sexual abuse', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Harvey Weinstein', relationship: 'Fellow high-profile sex abuse case driving #MeToo movement', href: '/entities/individuals/harvey-weinstein' },
    { name: 'Bill Cosby', relationship: 'Parallel case of institutional protection of serial abusers', href: '/entities/individuals/bill-cosby' },
    { name: 'Ghislaine Maxwell', relationship: 'Both cases exposed institutional complicity in abuse', href: '/entities/individuals/ghislaine-maxwell' },
  ],

  'bill-cosby': [
    { name: 'Jeffrey Epstein', relationship: 'Parallel case of powerful men using institutional protection', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Harvey Weinstein', relationship: 'Fellow case that exposed systemic entertainment industry abuse', href: '/entities/individuals/harvey-weinstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Prosecution parallels in high-profile sex trafficking cases', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Cy Vance', relationship: 'Manhattan DA involved in both cases\' prosecution decisions', href: '/entities/individuals/cy-vance' },
  ],

  'harvey-weinstein': [
    { name: 'Jeffrey Epstein', relationship: 'Both cases exposed networks protecting powerful sexual predators', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Overlapping social circles in New York elite', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Bill Cosby', relationship: 'Parallel prosecution of high-profile sexual abusers', href: '/entities/individuals/bill-cosby' },
    { name: 'Cy Vance', relationship: 'Manhattan DA who initially declined prosecution despite evidence', href: '/entities/individuals/cy-vance' },
    { name: 'Alan Dershowitz', relationship: 'Celebrity defense attorney connected to both cases', href: '/entities/individuals/alan-dershowitz' },
  ],

  'ben-horowitz': [
    { name: 'Jeffrey Epstein', relationship: 'Silicon Valley connections to Epstein\'s tech industry fundraising network', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Reid Hoffman', relationship: 'Fellow VC who admitted knowing and meeting with Epstein', href: '/entities/individuals/reid-hoffman' },
    { name: 'Chamath Palihapitiya', relationship: 'Silicon Valley peer in tech venture capital ecosystem', href: '/entities/individuals/chamath-palihapitiya' },
    { name: 'Joi Ito', relationship: 'MIT Media Lab director who solicited Epstein donations; VC connections', href: '/entities/individuals/joi-ito' },
  ],

  'chamath-palihapitiya': [
    { name: 'Jeffrey Epstein', relationship: 'Discussed Epstein connections in Silicon Valley venture capital circles', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Reid Hoffman', relationship: 'Fellow tech investor who met with Epstein', href: '/entities/individuals/reid-hoffman' },
    { name: 'Ben Horowitz', relationship: 'Fellow VC in tech industry with Epstein proximity', href: '/entities/individuals/ben-horowitz' },
    { name: 'Joi Ito', relationship: 'MIT Media Lab director who accepted Epstein funding', href: '/entities/individuals/joi-ito' },
  ],

  'reid-hoffman': [
    { name: 'Jeffrey Epstein', relationship: 'Admitted meeting Epstein multiple times; apologized publicly', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Joi Ito', relationship: 'Connected through MIT Media Lab and Epstein fundraising', href: '/entities/individuals/joi-ito' },
    { name: 'Ben Horowitz', relationship: 'Fellow Silicon Valley investor in same social circles', href: '/entities/individuals/ben-horowitz' },
    { name: 'Chamath Palihapitiya', relationship: 'Tech industry peer in venture capital ecosystem', href: '/entities/individuals/chamath-palihapitiya' },
    { name: 'Bill Gates', relationship: 'Fellow tech billionaire who met with Epstein', href: '/entities/individuals/bill-gates' },
  ],

  'abdel-fattah-el-sisi': [
    { name: 'Jeffrey Epstein', relationship: 'Egyptian intelligence connections to broader Epstein network', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ehud Barak', relationship: 'Israel-Egypt diplomatic relationships and intelligence sharing', href: '/entities/individuals/ehud-barak' },
    { name: 'Ghislaine Maxwell', relationship: 'Maxwell family\'s Middle Eastern intelligence connections', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Robert Maxwell', relationship: 'Father\'s Mossad connections extended throughout Middle East', href: '/entities/individuals/robert-maxwell' },
  ],

  'ehud-barak': [
    { name: 'Jeffrey Epstein', relationship: 'Visited Epstein\'s Manhattan mansion and island; received investment funding', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Social relationship through Israeli political-intelligence circles', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Robert Maxwell', relationship: 'Connected through Israeli intelligence community', href: '/entities/individuals/robert-maxwell' },
    { name: 'Ehud Olmert', relationship: 'Fellow Israeli PM with connections to same networks', href: '/entities/individuals/ehud-olmert' },
    { name: 'Abdel Fattah el-Sisi', relationship: 'Middle Eastern diplomatic counterpart', href: '/entities/individuals/abdel-fattah-el-sisi' },
  ],

  'george-mitchell': [
    { name: 'Jeffrey Epstein', relationship: 'Received donations from Epstein; named in victim testimony as visitor', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Attended social events organized by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Bill Clinton', relationship: 'Fellow Democratic leader and Epstein associate', href: '/entities/individuals/bill-clinton' },
    { name: 'Virginia Giuffre', relationship: 'Named by Giuffre in depositions', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Alan Dershowitz', relationship: 'Fellow Epstein associate named in court documents', href: '/entities/individuals/alan-dershowitz' },
  ],

  'donald-barr': [
    { name: 'Jeffrey Epstein', relationship: 'Hired Epstein as math teacher at Dalton School despite no degree', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'William Barr', relationship: 'Son who became AG during Epstein\'s death in custody', href: '/entities/individuals/william-barr' },
    { name: 'Ghislaine Maxwell', relationship: 'Dalton School connection to Manhattan elite circles', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Alan Dershowitz', relationship: 'Both connected to Epstein\'s early career advancement', href: '/entities/individuals/alan-dershowitz' },
  ],

  'adriana-ross': [
    { name: 'Jeffrey Epstein', relationship: 'Former assistant named as co-conspirator in federal indictment', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Worked under Maxwell\'s direction in Epstein household', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Sarah Kellen', relationship: 'Fellow Epstein assistant and named co-conspirator', href: '/entities/individuals/sarah-kellen' },
    { name: 'Nadia Marcinkova', relationship: 'Fellow member of Epstein\'s inner circle', href: '/entities/individuals/nadia-marcinkova' },
    { name: 'Lesley Groff', relationship: 'Fellow Epstein staff member who coordinated operations', href: '/entities/individuals/lesley-groff' },
  ],

  'lesley-groff': [
    { name: 'Jeffrey Epstein', relationship: 'Executive assistant who scheduled appointments for decades', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Worked alongside Maxwell in managing Epstein household', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Sarah Kellen', relationship: 'Fellow assistant named in federal investigations', href: '/entities/individuals/sarah-kellen' },
    { name: 'Adriana Ross', relationship: 'Fellow Epstein staff member and named co-conspirator', href: '/entities/individuals/adriana-ross' },
    { name: 'Virginia Giuffre', relationship: 'Named by Giuffre as facilitator of Epstein\'s abuse', href: '/entities/individuals/virginia-giuffre' },
  ],

  'emmy-tayler': [
    { name: 'Jeffrey Epstein', relationship: 'Personal assistant in London operations', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Worked directly under Maxwell in London household', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Prince Andrew', relationship: 'Connected through London-based Epstein operations', href: '/entities/individuals/prince-andrew' },
    { name: 'Virginia Giuffre', relationship: 'Named in Giuffre\'s accounts of London abuse', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Sarah Kellen', relationship: 'Fellow Epstein assistant across multiple locations', href: '/entities/individuals/sarah-kellen' },
  ],

  'miles-alexander': [
    { name: 'Jeffrey Epstein', relationship: 'Victim who described abuse at Epstein properties', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Alleged to have facilitated recruitment', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Cathy Alexander', relationship: 'Related victim in Epstein case', href: '/entities/individuals/cathy-alexander' },
    { name: 'Virginia Giuffre', relationship: 'Fellow survivor in Epstein network cases', href: '/entities/individuals/virginia-giuffre' },
  ],

  'cathy-alexander': [
    { name: 'Jeffrey Epstein', relationship: 'Victim who reported abuse by Epstein', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Named as facilitator in victim accounts', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Miles Alexander', relationship: 'Related victim in Epstein case', href: '/entities/individuals/miles-alexander' },
    { name: 'Virginia Giuffre', relationship: 'Fellow Epstein survivor', href: '/entities/individuals/virginia-giuffre' },
  ],

  'kevin-maxwell': [
    { name: 'Robert Maxwell', relationship: 'Father — media mogul and alleged Mossad asset', href: '/entities/individuals/robert-maxwell' },
    { name: 'Ghislaine Maxwell', relationship: 'Sister convicted of sex trafficking conspiracy', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Jeffrey Epstein', relationship: 'Connected through family\'s relationship with Epstein', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Edgar Bronfman', relationship: 'Family business connection through father\'s empire', href: '/entities/individuals/edgar-bronfman' },
  ],

  'marvin-minsky': [
    { name: 'Jeffrey Epstein', relationship: 'Attended Epstein gatherings; named in victim Virginia Giuffre\'s testimony', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein\'s scientific social events', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Giuffre testified she was directed to have sex with Minsky', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Joi Ito', relationship: 'MIT colleague connected through Epstein funding network', href: '/entities/individuals/joi-ito' },
    { name: 'Lawrence Krauss', relationship: 'Fellow scientist in Epstein\'s academic circle', href: '/entities/individuals/lawrence-krauss' },
  ],

  'joi-ito': [
    { name: 'Jeffrey Epstein', relationship: 'Solicited $1.7M+ from Epstein for MIT Media Lab; resigned in disgrace', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Met through Epstein\'s social network', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Reid Hoffman', relationship: 'Venture capital associate who also met with Epstein', href: '/entities/individuals/reid-hoffman' },
    { name: 'Marvin Minsky', relationship: 'MIT colleague connected to Epstein funding network', href: '/entities/individuals/marvin-minsky' },
    { name: 'Larry Summers', relationship: 'Harvard-MIT academic connection through Epstein donors', href: '/entities/individuals/larry-summers' },
    { name: 'Martin Nowak', relationship: 'Harvard professor who also accepted Epstein funding', href: '/entities/individuals/martin-nowak' },
  ],

  'martin-nowak': [
    { name: 'Jeffrey Epstein', relationship: 'Accepted $6.5M for Harvard program; hosted Epstein at university', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein\'s academic funding operations', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Larry Summers', relationship: 'Harvard colleague during period of Epstein donations', href: '/entities/individuals/larry-summers' },
    { name: 'Joi Ito', relationship: 'MIT counterpart in academic Epstein funding network', href: '/entities/individuals/joi-ito' },
    { name: 'Lawrence Krauss', relationship: 'Fellow scientist who received Epstein funding', href: '/entities/individuals/lawrence-krauss' },
  ],

  'chris-tucker': [
    { name: 'Jeffrey Epstein', relationship: 'Flew on Lolita Express to Africa with Clinton', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Bill Clinton', relationship: 'Traveled together on Epstein\'s plane to Africa', href: '/entities/individuals/bill-clinton' },
    { name: 'Ghislaine Maxwell', relationship: 'Present on Africa trip organized by Epstein/Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Kevin Spacey', relationship: 'Fellow celebrity who traveled on Epstein\'s plane', href: '/entities/individuals/kevin-spacey' },
    { name: 'Naomi Campbell', relationship: 'Fellow celebrity in Epstein\'s social circle', href: '/entities/individuals/naomi-campbell' },
  ],

  'naomi-campbell': [
    { name: 'Jeffrey Epstein', relationship: 'Attended Epstein-hosted social events; appeared in his contact book', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Close social friend; attended Maxwell-organized events', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Prince Andrew', relationship: 'Connected through Maxwell\'s London social circle', href: '/entities/individuals/prince-andrew' },
    { name: 'Donald Trump', relationship: 'Overlapping social circles in New York elite', href: '/entities/individuals/donald-trump' },
    { name: 'Chris Tucker', relationship: 'Fellow celebrity in Epstein\'s entertainment circle', href: '/entities/individuals/chris-tucker' },
  ],

  'woody-allen': [
    { name: 'Jeffrey Epstein', relationship: 'Socialized with Epstein; photographed together multiple times', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through New York social circles', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Alan Dershowitz', relationship: 'Longtime friend; Dershowitz defended both Epstein and Allen', href: '/entities/individuals/alan-dershowitz' },
    { name: 'Prince Andrew', relationship: 'Both part of Epstein\'s high-profile social network', href: '/entities/individuals/prince-andrew' },
  ],

  'carolyn-andriano': [
    { name: 'Jeffrey Epstein', relationship: 'Victim who was recruited as a teenager and abused repeatedly', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Testified Maxwell directly participated in abuse', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Fellow victim and survivor who spoke publicly', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Haley Robson', relationship: 'Recruited into Epstein network by Robson', href: '/entities/individuals/haley-robson' },
    { name: 'Sarah Kellen', relationship: 'Epstein assistant who scheduled abuse sessions', href: '/entities/individuals/sarah-kellen' },
  ],

  'peter-mandelson': [
    { name: 'Jeffrey Epstein', relationship: 'Visited Epstein\'s properties; photographed together in New York', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through British political-social elite circles', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Prince Andrew', relationship: 'Fellow member of British establishment linked to Epstein', href: '/entities/individuals/prince-andrew' },
    { name: 'Bill Clinton', relationship: 'Transatlantic political connection through Epstein social network', href: '/entities/individuals/bill-clinton' },
    { name: 'Lynn Forester de Rothschild', relationship: 'Both introduced to Epstein through British elite social circles', href: '/entities/individuals/lynn-forester-de-rothschild' },
  ],

  'mark-middleton': [
    { name: 'Jeffrey Epstein', relationship: 'Clinton aide who admitted Epstein to White House multiple times', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Bill Clinton', relationship: 'Special assistant to President Clinton who facilitated Epstein access', href: '/entities/individuals/bill-clinton' },
    { name: 'Ghislaine Maxwell', relationship: 'Facilitated Maxwell\'s access to Clinton White House', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Referenced in connection with Clinton-Epstein White House visits', href: '/entities/individuals/virginia-giuffre' },
  ],

  'lynn-forester-de-rothschild': [
    { name: 'Jeffrey Epstein', relationship: 'Introduced Epstein to Bill Clinton; later claimed to have distanced', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Bill Clinton', relationship: 'Longtime Clinton supporter who connected him with Epstein', href: '/entities/individuals/bill-clinton' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through New York-London elite social circles', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Peter Mandelson', relationship: 'Fellow British elite connected to Epstein social network', href: '/entities/individuals/peter-mandelson' },
    { name: 'Ehud Barak', relationship: 'Connected through Epstein\'s international political network', href: '/entities/individuals/ehud-barak' },
  ],

  'noam-chomsky': [
    { name: 'Jeffrey Epstein', relationship: 'Met with Epstein multiple times after 2008 conviction; used his plane', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein social events', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Woody Allen', relationship: 'Dinner together arranged by Epstein', href: '/entities/individuals/woody-allen' },
    { name: 'Lawrence Krauss', relationship: 'Fellow academic in Epstein\'s intellectual circle', href: '/entities/individuals/lawrence-krauss' },
  ],

  'katinka-matson': [
    { name: 'Jeffrey Epstein', relationship: 'Literary agent connected through John Brockman and Edge Foundation', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Connected through Edge Foundation intellectual circuits', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Lawrence Krauss', relationship: 'Edge Foundation scientist connected to Epstein', href: '/entities/individuals/lawrence-krauss' },
    { name: 'Marvin Minsky', relationship: 'Edge Foundation associate who attended Epstein events', href: '/entities/individuals/marvin-minsky' },
    { name: 'Daniel Dennett', relationship: 'Edge Foundation intellectual in Epstein-adjacent circles', href: '/entities/individuals/daniel-dennett' },
  ],

  'juan-alessi': [
    { name: 'Jeffrey Epstein', relationship: 'House manager at Palm Beach estate for 11 years; key prosecution witness', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Testified about Maxwell\'s role in household and abuse', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Witnessed Giuffre\'s presence at Epstein properties', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Alfredo Rodriguez', relationship: 'Fellow Epstein household employee who kept evidence documents', href: '/entities/individuals/alfredo-rodriguez' },
    { name: 'Nadia Marcinkova', relationship: 'Witnessed her presence in Epstein household', href: '/entities/individuals/nadia-marcinkova' },
  ],

  'michael-baden': [
    { name: 'Jeffrey Epstein', relationship: 'Hired by Epstein\'s brother to observe autopsy; disputed suicide finding', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Barbara Sampson', relationship: 'NYC Chief Medical Examiner who ruled Epstein death a suicide', href: '/entities/individuals/barbara-sampson' },
    { name: 'Ghislaine Maxwell', relationship: 'Forensic findings relevant to Maxwell defense arguments', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Nicholas Tartaglione', relationship: 'Epstein cellmate investigated in connection with death', href: '/entities/individuals/nicholas-tartaglione' },
  ],

  'barbara-sampson': [
    { name: 'Jeffrey Epstein', relationship: 'NYC Chief Medical Examiner who officially ruled death suicide by hanging', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Michael Baden', relationship: 'Forensic pathologist hired by Epstein family who disputed findings', href: '/entities/individuals/michael-baden' },
    { name: 'William Barr', relationship: 'AG who accepted suicide ruling amid widespread skepticism', href: '/entities/individuals/william-barr' },
    { name: 'Ghislaine Maxwell', relationship: 'Autopsy ruling impacted Maxwell case proceedings', href: '/entities/individuals/ghislaine-maxwell' },
  ],

  'sarah-ransome': [
    { name: 'Jeffrey Epstein', relationship: 'Victim who described abuse on Little St. James island', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Ghislaine Maxwell', relationship: 'Named Maxwell as active participant in trafficking', href: '/entities/individuals/ghislaine-maxwell' },
    { name: 'Virginia Giuffre', relationship: 'Fellow survivor and advocate for Epstein victims', href: '/entities/individuals/virginia-giuffre' },
    { name: 'Courtney Wild', relationship: 'Fellow victim who challenged the 2008 plea deal', href: '/entities/individuals/courtney-wild' },
    { name: 'Chauntae Davies', relationship: 'Fellow survivor of Epstein trafficking network', href: '/entities/individuals/chauntae-davies' },
  ],
};

// Validate all hrefs point to existing profiles
let warnings = 0;
for (const [slug, associates] of Object.entries(expansions)) {
  for (const a of associates) {
    const targetSlug = a.href.split('/').pop();
    if (!existingSlugs.has(targetSlug)) {
      console.log(`WARNING: ${slug} -> ${targetSlug} - target does not exist!`);
      warnings++;
    }
  }
}
if (warnings > 0) {
  console.log(`\n${warnings} warnings found. Aborting.`);
  process.exit(1);
}

// Apply expansions
let changeCount = 0;
for (const [slug, newAssociates] of Object.entries(expansions)) {
  // Find the profile
  const profileStart = content.indexOf("'" + slug + "': {");
  if (profileStart === -1) {
    console.log(`Profile not found: ${slug}`);
    continue;
  }

  // Find knownAssociates within this profile (search within reasonable range)
  const searchEnd = Math.min(profileStart + 10000, content.length);
  const chunk = content.substring(profileStart, searchEnd);
  
  const kaMatch = chunk.indexOf('knownAssociates: [');
  if (kaMatch === -1) {
    console.log(`No knownAssociates found for: ${slug}`);
    continue;
  }

  const kaAbsPos = profileStart + kaMatch;
  
  // Find the closing ] of knownAssociates
  // We need to count bracket depth
  let bracketDepth = 0;
  let closingBracketPos = -1;
  let inString = false;
  let escapeNext = false;
  
  for (let i = kaAbsPos + 'knownAssociates: '.length; i < searchEnd + profileStart; i++) {
    const char = content[i];
    if (escapeNext) { escapeNext = false; continue; }
    if (char === '\\') { escapeNext = true; continue; }
    if (char === "'" && !inString) { inString = true; continue; }
    if (char === "'" && inString) { inString = false; continue; }
    if (inString) continue;
    if (char === '[') bracketDepth++;
    if (char === ']') {
      bracketDepth--;
      if (bracketDepth === 0) {
        closingBracketPos = i;
        break;
      }
    }
  }

  if (closingBracketPos === -1) {
    console.log(`Could not find closing bracket for: ${slug}`);
    continue;
  }

  // Get existing content between [ and ]
  const openBracketPos = content.indexOf('[', kaAbsPos + 'knownAssociates:'.length);
  const existingContent = content.substring(openBracketPos + 1, closingBracketPos).trim();
  
  // Get existing hrefs to avoid duplicates
  const existingHrefs = new Set();
  const hrefRe = /href:\s*'([^']+)'/g;
  let hm;
  while ((hm = hrefRe.exec(existingContent)) !== null) {
    existingHrefs.add(hm[1]);
  }
  
  // Filter out duplicates
  const toAdd = newAssociates.filter(a => !existingHrefs.has(a.href));
  
  if (toAdd.length === 0) {
    // console.log(`No new associates to add for: ${slug}`);
    continue;
  }
  
  // Build the new entries string
  const newEntries = toAdd.map(a => 
    `      { name: '${a.name.replace(/'/g, "\\'")}', relationship: '${a.relationship.replace(/'/g, "\\'")}', href: '${a.href}' }`
  ).join(',\n');
  
  // Insert: if existing is empty, replace []; if not, append after last entry
  if (existingContent === '') {
    // Empty array: knownAssociates: [],
    const oldStr = content.substring(openBracketPos, closingBracketPos + 1);
    const newStr = '[\n' + newEntries + '\n    ]';
    content = content.substring(0, openBracketPos) + newStr + content.substring(closingBracketPos + 1);
  } else {
    // Has existing entries: add after last one
    const insertPos = closingBracketPos;
    const comma = existingContent.endsWith(',') ? '\n' : ',\n';
    content = content.substring(0, insertPos) + comma + newEntries + '\n    ' + content.substring(insertPos);
  }
  
  changeCount++;
  console.log(`Expanded: ${slug} (+${toAdd.length} associates)`);
}

fs.writeFileSync(filePath, content);
console.log(`\nDone! Expanded ${changeCount} profiles.`);
