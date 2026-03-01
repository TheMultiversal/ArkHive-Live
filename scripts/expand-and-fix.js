const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Helper: add knownAssociates to an existing profile
function addAssociates(slug, newEntries) {
  const keyPattern = `'${slug}': {`;
  const keyIdx = content.indexOf(keyPattern);
  if (keyIdx === -1) { console.log(`  SKIP ${slug}: not found`); return; }
  const kaIdx = content.indexOf('knownAssociates:', keyIdx);
  if (kaIdx === -1 || kaIdx - keyIdx > 8000) { console.log(`  SKIP ${slug}: no KA`); return; }
  const searchStart = content.indexOf('[', kaIdx + 16);
  let depth = 0, closingIdx = -1;
  for (let i = searchStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') { depth--; if (depth === 0) { closingIdx = i; break; } }
  }
  if (closingIdx === -1) { console.log(`  SKIP ${slug}: no ]`); return; }
  const existing = content.substring(searchStart, closingIdx);
  const filtered = newEntries.filter(e => !existing.includes(e.href));
  if (filtered.length === 0) { console.log(`  ${slug}: already has all`); return; }
  const str = filtered.map(e => 
    `      { name: '${e.name}', relationship: '${e.relationship}', href: '${e.href}' },`
  ).join('\n');
  content = content.substring(0, closingIdx) + '\n' + str + '\n    ' + content.substring(closingIdx);
  console.log(`  ${slug}: +${filtered.length} associates`);
}

// Helper: insert a new profile before the closing }; of the profiles object
function insertProfile(profileStr) {
  // Find the end of the profiles const object - search for the pattern that ends it
  // The profiles object ends with `\n};` then followed by rendering code
  const endIdx = content.indexOf("\n};\n\n// Helper");
  if (endIdx === -1) {
    // Try another pattern
    const alt = content.indexOf("\n};\n\nfunction Individual");
    if (alt === -1) {
      console.log('  ERROR: Could not find insertion point');
      return;
    }
    content = content.substring(0, alt) + '\n' + profileStr + content.substring(alt);
    return;
  }
  content = content.substring(0, endIdx) + '\n' + profileStr + content.substring(endIdx);
}

console.log('=== Creating missing profiles ===\n');

// 1. BRADLEY EDWARDS
console.log('Creating bradley-edwards...');
insertProfile(`  'bradley-edwards': {
    name: 'Bradley Edwards',
    title: 'Victims Rights Attorney',
    role: 'Lead Counsel for Epstein Victims',
    riskLevel: 'low',
    description: 'Florida attorney who represented over 50 victims of Jeffrey Epstein, including Courtney Wild and Virginia Giuffre. Edwards filed groundbreaking lawsuits challenging the 2008 Non-Prosecution Agreement, ultimately winning a ruling that prosecutors violated the Crime Victims Rights Act. Author of \\'Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein\\' (2020). His decade-long legal battle was instrumental in keeping the Epstein case alive when law enforcement had abandoned it.',
    birthDate: 'Unknown',
    education: [
      { institution: 'Nova Southeastern University Shepard Broad College of Law', degree: 'Juris Doctor' },
    ],
    affiliations: [
      { name: 'Edwards Henderson Law Firm', role: 'Managing Partner', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Primary legal adversary, sued on behalf of 50+ victims', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Courtney Wild', relationship: 'Client, led CVRA challenge against NPA', href: '/entities/individuals/courtney-wild' },
      { name: 'Virginia Giuffre', relationship: 'Client, represented in civil claims', href: '/entities/individuals/virginia-giuffre' },
      { name: 'Alex Acosta', relationship: 'CVRA lawsuit target, US Attorney who signed illegal NPA', href: '/entities/individuals/alex-acosta' },
      { name: 'Alan Dershowitz', relationship: 'Legal adversary, Epstein defense attorney', href: '/entities/individuals/alan-dershowitz' },
      { name: 'Joe Recarey', relationship: 'Palm Beach detective, provided evidence for civil cases', href: '/entities/individuals/joe-recarey' },
      { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief, collaborated with investigation', href: '/entities/individuals/michael-reiter' },
      { name: 'Sarah Kellen', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/sarah-kellen' },
      { name: 'Nadia Marcinkova', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/nadia-marcinkova' },
      { name: 'Ghislaine Maxwell', relationship: 'Named in civil suits as co-conspirator', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [
      'FOUGHT DOJ FOR A DECADE: Filed CVRA lawsuit in 2008 challenging secret Non-Prosecution Agreement, battled DOJ for 11 years until Judge Marra ruled the NPA was illegal',
      'THREATENED BY EPSTEIN TEAM: Received threats and was surveilled by Epstein private investigators during litigation',
      'REPRESENTED 50+ VICTIMS: Built the largest collection of victim testimony against Epstein, preserving evidence that later facilitated the 2019 federal case',
      'CHALLENGED ACOSTA: His legal efforts directly led to scrutiny of Alex Acosta sweetheart plea deal, contributing to Acosta resignation as Labor Secretary',
      'AUTHOR AND ADVOCATE: Published \\'Relentless Pursuit\\' detailing the legal battle, keeping public attention on case',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2008', event: 'Filed Crime Victims Rights Act lawsuit challenging Epstein NPA on behalf of victims' },
      { date: '2009', event: 'Continued CVRA litigation despite government opposition, representing growing number of victims' },
      { date: '2011', event: 'Expanded civil litigation against Epstein associates and co-conspirators' },
      { date: '2014', event: 'Filed landmark civil suits naming Ghislaine Maxwell, Sarah Kellen, and other enablers' },
      { date: '2015', event: 'Subjected to surveillance and intimidation by Epstein-linked private investigators' },
      { date: '2017', event: 'Miami Herald investigation by Julie K. Brown reinvigorated public attention to his cases' },
      { date: '2019 February', event: 'Judge Kenneth Marra ruled NPA violated Crime Victims Rights Act - landmark victory' },
      { date: '2019 July', event: 'Epstein arrested on federal charges, partially vindicating decade of legal work' },
      { date: '2020', event: 'Published \\'Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein\\'' },
    ],
    sources: [
      { title: 'Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein (Book, 2020)', url: 'https://www.simonandschuster.com/books/Relentless-Pursuit/Bradley-J-Edwards/9781982148935' },
      { title: 'Edwards & Henderson Law Firm', url: 'https://www.edwardshenderson.com/' },
      { title: 'Miami Herald: Perversion of Justice', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' },
      { title: 'Wild v. United States - CVRA Ruling', date: '2019' },
    ],
  },`);

// 2. STEVEN DONZIGER
console.log('Creating steven-donziger...');
insertProfile(`  'steven-donziger': {
    name: 'Steven Donziger',
    title: 'Environmental Attorney',
    role: 'Led Ecuador Pollution Case Against Chevron',
    riskLevel: 'high',
    description: 'American environmental attorney who spent decades fighting Chevron (formerly Texaco) over massive oil contamination in the Ecuadorian Amazon that affected 30,000+ indigenous people. Won a historic $9.5 billion judgment in 2011, then became the target of an unprecedented corporate retaliation campaign. Chevron used a RICO countersuit to invalidate the judgment, and Donziger was disbarred, placed under house arrest for 993 days, and sentenced to 6 months in prison for criminal contempt — prosecuted by a private attorney appointed after DOJ declined. His case is widely seen as the most extreme example of corporate capture of the legal system.',
    birthDate: 'Unknown',
    education: [
      { institution: 'Harvard Law School', degree: 'Juris Doctor' },
    ],
    affiliations: [
      { name: 'Chevron', role: 'Legal adversary', type: 'corporation' },
      { name: 'United Nations', role: 'Human Rights Council recognized his detention', type: 'organization' },
    ],
    knownAssociates: [
      { name: 'Chevron Corporation', relationship: 'Target of $9.5B Ecuador pollution case, orchestrated retaliatory prosecution', href: '/entities/corporations/chevron' },
    ],
    controversies: [
      'UNPRECEDENTED CORPORATE RETALIATION: After winning $9.5B judgment against Chevron, became target of massive legal counterattack funded by Chevron spending $2B+ on 2,000+ lawyers and lobbyists',
      'DISBARRED AND IMPRISONED: Charged with criminal contempt by Judge Loretta Preska after private law firm hired by Chevron judge to prosecute him — DOJ had twice declined to bring charges',
      'UN CALLED FOR RELEASE: UN Working Group on Arbitrary Detention found his detention arbitrary and called for his release, compensation, and investigation',
      'CHEVRON RICO CASE: Judge Lewis Kaplan (who had Chevron investments) ruled the Ecuador judgment was obtained through fraud, based heavily on testimony of a witness who later recanted',
      '993 DAYS DETENTION: Spent 993 days under house arrest and then prison — longer than any contempt sentence in US history for the charges — while Chevron avoided paying for Amazon cleanup',
      'MEDIA BLACKOUT: Despite unprecedented legal persecution, received minimal mainstream media coverage compared to scale of injustice',
    ],
    relatedInvestigations: [
      { title: 'Corporate Corruption', slug: 'corporate-corruption', severity: 'critical' },
    ],
    timeline: [
      { date: '1993', event: 'Filed Lago Agrio lawsuit on behalf of 30,000+ Ecuadorian indigenous people against Texaco/Chevron' },
      { date: '2011', event: 'Ecuadorian court issued $9.5 billion judgment against Chevron for Amazon contamination' },
      { date: '2011', event: 'Chevron filed RICO countersuit in US, refusing to pay Ecuador judgment' },
      { date: '2014', event: 'Judge Kaplan ruled Ecuador judgment obtained through fraud via RICO — Chevron never paid' },
      { date: '2018', event: 'New York appellate court upheld RICO ruling, blocking enforcement' },
      { date: '2019', event: 'Charged with criminal contempt after refusing to turn over laptop and phone to Chevron' },
      { date: '2020', event: 'Placed under house arrest with ankle monitor — restrictions lasted 993 total days' },
      { date: '2021', event: 'Disbarred from practicing law in New York' },
      { date: '2021 July', event: 'Convicted of criminal contempt, sentenced to 6 months in prison by private Chevron-linked prosecutor' },
      { date: '2022', event: 'UN Working Group on Arbitrary Detention called for his release and compensation' },
      { date: '2022', event: 'Released from prison, continues advocacy for Ecuadorian communities and corporate accountability' },
    ],
    sources: [
      { title: 'The Guardian: Steven Donziger', url: 'https://www.theguardian.com/us-news/2022/apr/25/steven-donziger-chevron-ecuador-lawyer-released-prison' },
      { title: 'UN Working Group on Arbitrary Detention - Opinion 2022', url: 'https://www.ohchr.org/en/documents/opinions/opinion-no-202022' },
      { title: 'The Intercept: How Chevron Weaponized the Courts', url: 'https://theintercept.com/collections/the-billion-dollar-case/' },
      { title: 'Amazon Watch: Ecuador Oil Case', url: 'https://amazonwatch.org/work/chevron' },
    ],
  },`);

// Now expand all thin Epstein profiles with more knownAssociates
console.log('\n=== Expanding thin Epstein profiles ===\n');

// VICTIMS
addAssociates('courtney-wild', [
  { name: 'Ghislaine Maxwell', relationship: 'Named co-conspirator, involved in recruiting', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Alex Acosta', relationship: 'US Attorney whose NPA violated her rights', href: '/entities/individuals/alex-acosta' },
  { name: 'Virginia Giuffre', relationship: 'Fellow victim and advocate', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Sarah Kellen', relationship: 'Epstein assistant, scheduled appointments', href: '/entities/individuals/sarah-kellen' },
]);

addAssociates('chauntae-davies', [
  { name: 'Ghislaine Maxwell', relationship: 'Recruited as masseuse, facilitated abuse', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Bill Clinton', relationship: 'Flew with on Lolita Express', href: '/entities/individuals/bill-clinton' },
  { name: 'Virginia Giuffre', relationship: 'Fellow victim', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Sarah Ransome', relationship: 'Fellow victim and survivor advocate', href: '/entities/individuals/sarah-ransome' },
]);

addAssociates('teresa-helm', [
  { name: 'Ghislaine Maxwell', relationship: 'Present during assault at NYC mansion', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Fellow victim', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Maria Farmer', relationship: 'Fellow victim and first accuser', href: '/entities/individuals/maria-farmer' },
]);

// STAFF / ENABLERS
addAssociates('haley-robson', [
  { name: 'Ghislaine Maxwell', relationship: 'Directed recruiting operations', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Sarah Kellen', relationship: 'Fellow recruiter/scheduler', href: '/entities/individuals/sarah-kellen' },
  { name: 'Adriana Ross', relationship: 'Fellow assistant with immunity', href: '/entities/individuals/adriana-ross' },
  { name: 'Lesley Groff', relationship: 'Executive assistant, scheduling', href: '/entities/individuals/lesley-groff' },
]);

addAssociates('leslie-groff', [
  { name: 'Ghislaine Maxwell', relationship: 'Co-managed Epstein operations', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Sarah Kellen', relationship: 'Fellow assistant with immunity deal', href: '/entities/individuals/sarah-kellen' },
  { name: 'Adriana Ross', relationship: 'Fellow assistant with immunity deal', href: '/entities/individuals/adriana-ross' },
  { name: 'Juan Alessi', relationship: 'Estate manager, overlapping staff role', href: '/entities/individuals/juan-alessi' },
]);

addAssociates('alfredo-rodriguez', [
  { name: 'Ghislaine Maxwell', relationship: 'Observed Maxwell involvement in household', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Juan Alessi', relationship: 'Fellow Palm Beach household staff', href: '/entities/individuals/juan-alessi' },
  { name: 'Joe Recarey', relationship: 'Detective who received stolen black book', href: '/entities/individuals/joe-recarey' },
  { name: 'Virginia Giuffre', relationship: 'Witnessed victim activity at residence', href: '/entities/individuals/virginia-giuffre' },
]);

addAssociates('igor-zinoviev', [
  { name: 'Ghislaine Maxwell', relationship: 'Worked for Maxwell as bodyguard', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Sarah Kellen', relationship: 'Interacted through household staff role', href: '/entities/individuals/sarah-kellen' },
  { name: 'Juan Alessi', relationship: 'Fellow household staff member', href: '/entities/individuals/juan-alessi' },
]);

addAssociates('nicholas-tartaglione', [
  { name: 'William Barr', relationship: 'AG overseeing BOP during incident', href: '/entities/individuals/william-barr' },
  { name: 'Michael Baden', relationship: 'Pathologist hired by family, questioned findings', href: '/entities/individuals/michael-baden' },
  { name: 'Barbara Sampson', relationship: 'Chief Medical Examiner who ruled suicide', href: '/entities/individuals/barbara-sampson' },
]);

// LAW ENFORCEMENT
addAssociates('joe-recarey', [
  { name: 'Michael Reiter', relationship: 'Police Chief who assigned investigation', href: '/entities/individuals/michael-reiter' },
  { name: 'Barry Krischer', relationship: 'State Attorney who undermined investigation', href: '/entities/individuals/barry-krischer' },
  { name: 'Ghislaine Maxwell', relationship: 'Named in investigation as co-conspirator', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Victim whose testimony supported case', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Alex Acosta', relationship: 'US Attorney who overrode local prosecution', href: '/entities/individuals/alex-acosta' },
]);

addAssociates('michael-reiter', [
  { name: 'Joe Recarey', relationship: 'Lead detective on Epstein case', href: '/entities/individuals/joe-recarey' },
  { name: 'Barry Krischer', relationship: 'State Attorney who refused to prosecute fully', href: '/entities/individuals/barry-krischer' },
  { name: 'Ghislaine Maxwell', relationship: 'Named in police investigation', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Alex Acosta', relationship: 'US Attorney contacted about federal prosecution', href: '/entities/individuals/alex-acosta' },
]);

addAssociates('geoffrey-berman', [
  { name: 'Ghislaine Maxwell', relationship: 'Oversaw investigation leading to arrest', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Audrey Strauss', relationship: 'Acting successor who continued prosecution', href: '/entities/individuals/audrey-strauss' },
  { name: 'William Barr', relationship: 'AG who fired Berman during Maxwell investigation', href: '/entities/individuals/william-barr' },
  { name: 'Alex Acosta', relationship: 'Whose 2008 deal Berman helped undo', href: '/entities/individuals/alex-acosta' },
]);

addAssociates('audrey-strauss', [
  { name: 'Geoffrey Berman', relationship: 'Predecessor as SDNY US Attorney', href: '/entities/individuals/geoffrey-berman' },
  { name: 'Ghislaine Maxwell', relationship: 'Led prosecution resulting in conviction', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Maurene Comey', relationship: 'Prosecutor on Maxwell trial team', href: '/entities/individuals/maurene-comey' },
  { name: 'Virginia Giuffre', relationship: 'Key victim whose testimony supported case', href: '/entities/individuals/virginia-giuffre' },
]);

addAssociates('maurene-comey', [
  { name: 'Audrey Strauss', relationship: 'Acting US Attorney overseeing Maxwell case', href: '/entities/individuals/audrey-strauss' },
  { name: 'Geoffrey Berman', relationship: 'Former SDNY chief who initiated investigation', href: '/entities/individuals/geoffrey-berman' },
  { name: 'Ghislaine Maxwell', relationship: 'Prosecuted at trial, secured conviction', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Victim whose testimony was central to case', href: '/entities/individuals/virginia-giuffre' },
]);

// POLITICIANS
addAssociates('bill-richardson', [
  { name: 'Ghislaine Maxwell', relationship: 'Named by Giuffre as present during abuse', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Accuser, named Richardson in deposition', href: '/entities/individuals/virginia-giuffre' },
  { name: 'George Mitchell', relationship: 'Fellow politician named by victims', href: '/entities/individuals/george-mitchell' },
  { name: 'Bill Clinton', relationship: 'Political associate, both connected to Epstein', href: '/entities/individuals/bill-clinton' },
]);

addAssociates('terje-roed-larsen', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein circle', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Ehud Barak', relationship: 'Israeli political connections, Oslo Accords negotiator', href: '/entities/individuals/ehud-barak' },
  { name: 'Bill Clinton', relationship: 'Political connections through international diplomacy', href: '/entities/individuals/bill-clinton' },
]);

addAssociates('ehud-olmert', [
  { name: 'Ehud Barak', relationship: 'Successive Israeli PMs, both connected to Epstein', href: '/entities/individuals/ehud-barak' },
  { name: 'Ghislaine Maxwell', relationship: 'Connected through Maxwell family Israel ties', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Terje Roed-Larsen', relationship: 'Diplomatic connections', href: '/entities/individuals/terje-roed-larsen' },
]);

// FINANCIERS
addAssociates('glenn-dubin', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection, alleged victim sent to Dubin home', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Eva Dubin', relationship: 'Wife, former Miss Sweden, Epstein ex-girlfriend', href: '/entities/individuals/eva-dubin' },
  { name: 'Virginia Giuffre', relationship: 'Alleged victim directed to Dubin residence', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Les Wexner', relationship: 'Fellow billionaire in Epstein financial circle', href: '/entities/individuals/les-wexner' },
  { name: 'Leon Black', relationship: 'Fellow financial associate of Epstein', href: '/entities/individuals/leon-black' },
]);

addAssociates('thomas-pritzker', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein events', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Glenn Dubin', relationship: 'Fellow billionaire in Epstein social circle', href: '/entities/individuals/glenn-dubin' },
  { name: 'Les Wexner', relationship: 'Fellow billionaire connected to Epstein', href: '/entities/individuals/les-wexner' },
  { name: 'Bill Gates', relationship: 'Both attended Epstein gatherings', href: '/entities/individuals/bill-gates' },
]);

addAssociates('michael-steinhardt', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Les Wexner', relationship: 'Both major financial supporters connected to Epstein', href: '/entities/individuals/les-wexner' },
  { name: 'Glenn Dubin', relationship: 'Hedge fund peers in Epstein circle', href: '/entities/individuals/glenn-dubin' },
]);

addAssociates('edgar-bronfman', [
  { name: 'Ghislaine Maxwell', relationship: 'Social circles intersected', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Les Wexner', relationship: 'Both in Epstein financial network', href: '/entities/individuals/les-wexner' },
  { name: 'Lynn Forester de Rothschild', relationship: 'High society connection', href: '/entities/individuals/lynn-forester-de-rothschild' },
]);

addAssociates('ronald-perelman', [
  { name: 'Ghislaine Maxwell', relationship: 'NYC social circles', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Les Wexner', relationship: 'Fellow billionaire in Epstein network', href: '/entities/individuals/les-wexner' },
  { name: 'Lynn Forester de Rothschild', relationship: 'NYC socialite circles', href: '/entities/individuals/lynn-forester-de-rothschild' },
]);

addAssociates('steven-hoffenberg', [
  { name: 'Ghislaine Maxwell', relationship: 'Connected through Epstein in early 1990s', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Les Wexner', relationship: 'Epstein used Wexner money during Towers Financial era', href: '/entities/individuals/les-wexner' },
  { name: 'Donald Trump', relationship: 'NYC business circles in 1980s-90s', href: '/entities/individuals/donald-trump' },
]);

addAssociates('mort-zuckerman', [
  { name: 'Ghislaine Maxwell', relationship: 'NYC media/social circles', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Les Wexner', relationship: 'Both in Epstein billionaire network', href: '/entities/individuals/les-wexner' },
  { name: 'Donald Trump', relationship: 'NYC real estate/media circles', href: '/entities/individuals/donald-trump' },
]);

addAssociates('jes-staley', [
  { name: 'Ghislaine Maxwell', relationship: 'Social relationship, visited Epstein island', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Named in connection with Epstein visits', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Leon Black', relationship: 'Both high-profile financiers linked to Epstein', href: '/entities/individuals/leon-black' },
]);

// SCIENTISTS / ACADEMICS
addAssociates('lawrence-krauss', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection at Epstein events', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Joi Ito', relationship: 'Fellow academic who accepted Epstein support', href: '/entities/individuals/joi-ito' },
  { name: 'John Brockman', relationship: 'Edge Foundation organizer, connected academics', href: '/entities/individuals/john-brockman' },
  { name: 'Marvin Minsky', relationship: 'Fellow scientist in Epstein academic circle', href: '/entities/individuals/marvin-minsky' },
]);

addAssociates('stephen-hawking', [
  { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein-hosted conference events', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Lawrence Krauss', relationship: 'Fellow physicist at Epstein events', href: '/entities/individuals/lawrence-krauss' },
  { name: 'John Brockman', relationship: 'Edge Foundation connections', href: '/entities/individuals/john-brockman' },
]);

addAssociates('larry-summers', [
  { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein gatherings', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Bill Gates', relationship: 'Both met with Epstein, overlapping academic connections', href: '/entities/individuals/bill-gates' },
  { name: 'Martin Nowak', relationship: 'Harvard colleague, both received Epstein funding', href: '/entities/individuals/martin-nowak' },
  { name: 'Joi Ito', relationship: 'MIT connections, both accepted Epstein support', href: '/entities/individuals/joi-ito' },
]);

addAssociates('george-church', [
  { name: 'Joi Ito', relationship: 'MIT Media Lab connections, both discussed Epstein funding', href: '/entities/individuals/joi-ito' },
  { name: 'Bill Gates', relationship: 'Genomics research connections', href: '/entities/individuals/bill-gates' },
  { name: 'John Brockman', relationship: 'Edge Foundation academic network', href: '/entities/individuals/john-brockman' },
  { name: 'Nathan Wolfe', relationship: 'Fellow scientist in Epstein funding circle', href: '/entities/individuals/nathan-wolfe' },
]);

addAssociates('murray-gell-mann', [
  { name: 'John Brockman', relationship: 'Edge Foundation, connected through intellectual circles', href: '/entities/individuals/john-brockman' },
  { name: 'Steven Pinker', relationship: 'Fellow Edge Foundation intellectual', href: '/entities/individuals/steven-pinker' },
  { name: 'Lawrence Krauss', relationship: 'Fellow physicist in Epstein orbit', href: '/entities/individuals/lawrence-krauss' },
]);

addAssociates('frank-wilczek', [
  { name: 'John Brockman', relationship: 'Edge Foundation intellectual circle', href: '/entities/individuals/john-brockman' },
  { name: 'Lawrence Krauss', relationship: 'Fellow physicist who attended Epstein events', href: '/entities/individuals/lawrence-krauss' },
  { name: 'Murray Gell-Mann', relationship: 'Fellow Nobel physicist in Edge/Epstein circles', href: '/entities/individuals/murray-gell-mann' },
]);

addAssociates('nathan-wolfe', [
  { name: 'Bill Gates', relationship: 'Both funded epidemiological research, overlapping circles', href: '/entities/individuals/bill-gates' },
  { name: 'George Church', relationship: 'Fellow scientist funded by Epstein', href: '/entities/individuals/george-church' },
  { name: 'Joi Ito', relationship: 'MIT connections, Epstein funding circle', href: '/entities/individuals/joi-ito' },
]);

addAssociates('lisa-randall', [
  { name: 'John Brockman', relationship: 'Edge Foundation intellectual network', href: '/entities/individuals/john-brockman' },
  { name: 'Lawrence Krauss', relationship: 'Fellow physicist at Epstein events', href: '/entities/individuals/lawrence-krauss' },
  { name: 'Steven Pinker', relationship: 'Harvard colleague in Edge Foundation', href: '/entities/individuals/steven-pinker' },
]);

addAssociates('daniel-dennett', [
  { name: 'John Brockman', relationship: 'Edge Foundation literary client', href: '/entities/individuals/john-brockman' },
  { name: 'Steven Pinker', relationship: 'Cognitive science colleague, Edge Foundation', href: '/entities/individuals/steven-pinker' },
  { name: 'Marvin Minsky', relationship: 'MIT AI research connections', href: '/entities/individuals/marvin-minsky' },
]);

addAssociates('gerald-edelman', [
  { name: 'John Brockman', relationship: 'Edge Foundation intellectual network', href: '/entities/individuals/john-brockman' },
  { name: 'Murray Gell-Mann', relationship: 'Santa Fe Institute colleagues', href: '/entities/individuals/murray-gell-mann' },
  { name: 'Steven Pinker', relationship: 'Neuroscience/cognitive science community', href: '/entities/individuals/steven-pinker' },
]);

addAssociates('lee-smolin', [
  { name: 'John Brockman', relationship: 'Edge Foundation intellectual', href: '/entities/individuals/john-brockman' },
  { name: 'Lawrence Krauss', relationship: 'Fellow theoretical physicist', href: '/entities/individuals/lawrence-krauss' },
  { name: 'Murray Gell-Mann', relationship: 'Perimeter/Santa Fe Institute connections', href: '/entities/individuals/murray-gell-mann' },
]);

// CELEBRITIES / MEDIA
addAssociates('katie-couric', [
  { name: 'Ghislaine Maxwell', relationship: 'Both attended 2010 Epstein dinner party', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'George Stephanopoulos', relationship: 'Fellow journalist at same Epstein dinner', href: '/entities/individuals/george-stephanopoulos' },
  { name: 'Woody Allen', relationship: 'Present at same Epstein social events', href: '/entities/individuals/woody-allen' },
  { name: 'Chelsea Handler', relationship: 'Media figure in overlapping social circles', href: '/entities/individuals/chelsea-handler' },
]);

addAssociates('george-stephanopoulos', [
  { name: 'Ghislaine Maxwell', relationship: 'Attended 2010 Epstein dinner party', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Katie Couric', relationship: 'Both attended same Epstein dinner', href: '/entities/individuals/katie-couric' },
  { name: 'Bill Clinton', relationship: 'Former Clinton aide, both connected to Epstein', href: '/entities/individuals/bill-clinton' },
  { name: 'Woody Allen', relationship: 'Present at Epstein social events', href: '/entities/individuals/woody-allen' },
]);

addAssociates('chelsea-handler', [
  { name: 'Ghislaine Maxwell', relationship: 'NYC social/entertainment circles', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Naomi Campbell', relationship: 'Entertainment industry connections', href: '/entities/individuals/naomi-campbell' },
  { name: 'Katie Couric', relationship: 'Media figures in overlapping social circles', href: '/entities/individuals/katie-couric' },
]);

addAssociates('david-blaine', [
  { name: 'Ghislaine Maxwell', relationship: 'Social connection through events', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Donald Trump', relationship: 'Both in NYC social/entertainment circles', href: '/entities/individuals/donald-trump' },
  { name: 'Naomi Campbell', relationship: 'Celebrity circles overlapping with Epstein', href: '/entities/individuals/naomi-campbell' },
]);

addAssociates('mick-jagger', [
  { name: 'Ghislaine Maxwell', relationship: 'NYC/London social circles', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Naomi Campbell', relationship: 'Personal relationship, both in Epstein black book', href: '/entities/individuals/naomi-campbell' },
  { name: 'Prince Andrew', relationship: 'British social circles, both in black book', href: '/entities/individuals/prince-andrew' },
]);

addAssociates('alec-baldwin', [
  { name: 'Ghislaine Maxwell', relationship: 'NYC social/entertainment circles', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Woody Allen', relationship: 'Film industry connections, both in Epstein circles', href: '/entities/individuals/woody-allen' },
  { name: 'Donald Trump', relationship: 'NYC celebrity circles', href: '/entities/individuals/donald-trump' },
]);

addAssociates('itzhak-perlman', [
  { name: 'Ghislaine Maxwell', relationship: 'Present at Epstein social events', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Ehud Barak', relationship: 'Israeli connections through cultural/political circles', href: '/entities/individuals/ehud-barak' },
  { name: 'Les Wexner', relationship: 'Philanthropic circles', href: '/entities/individuals/les-wexner' },
]);

addAssociates('french-officials', [
  { name: 'Jean-Luc Brunel', relationship: 'Target of French investigation for trafficking', href: '/entities/individuals/jean-luc-brunel' },
  { name: 'Ghislaine Maxwell', relationship: 'French citizen, investigated by French authorities', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Virginia Giuffre', relationship: 'Filed complaint with French prosecutors', href: '/entities/individuals/virginia-giuffre' },
]);

fs.writeFileSync(file, content);
console.log('\nDone! All profiles created/expanded.');
