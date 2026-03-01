const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Helper: insert new knownAssociates entries right before the closing ] of a knownAssociates array
function addAssociates(slug, newEntries) {
  // Find the profile key
  const keyPattern = `'${slug}': {`;
  const keyIdx = content.indexOf(keyPattern);
  if (keyIdx === -1) {
    console.log(`  WARNING: Could not find profile '${slug}'`);
    return;
  }
  
  // Find knownAssociates: [ after this key
  const kaStart = content.indexOf('knownAssociates: [', keyIdx);
  if (kaStart === -1 || kaStart - keyIdx > 5000) {
    console.log(`  WARNING: Could not find knownAssociates for '${slug}'`);
    return;
  }
  
  // Find the closing ] - track bracket depth
  let depth = 0;
  let closingIdx = -1;
  const searchStart = content.indexOf('[', kaStart + 'knownAssociates: '.length);
  for (let i = searchStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') {
      depth--;
      if (depth === 0) {
        closingIdx = i;
        break;
      }
    }
  }
  
  if (closingIdx === -1) {
    console.log(`  WARNING: Could not find closing ] for '${slug}' knownAssociates`);
    return;
  }
  
  // Filter out entries that already exist
  const existingBlock = content.substring(searchStart, closingIdx);
  const filtered = newEntries.filter(e => !existingBlock.includes(e.href));
  
  if (filtered.length === 0) {
    console.log(`  ${slug}: all associates already present`);
    return;
  }
  
  // Build the new entries string
  const entriesStr = filtered.map(e => 
    `      { name: '${e.name}', relationship: '${e.relationship}', href: '${e.href}' },`
  ).join('\n');
  
  // Insert before the closing ]
  const before = content.substring(0, closingIdx);
  const after = content.substring(closingIdx);
  
  // Check if the last char before ] is a newline or comma
  const trimmedBefore = before.trimEnd();
  const needsNewline = !trimmedBefore.endsWith(',');
  
  content = trimmedBefore + (needsNewline ? '' : '') + '\n' + entriesStr + '\n    ' + after;
  
  console.log(`  ${slug}: added ${filtered.length} new associates`);
}

console.log('Cross-linking pre-existing profiles to new Epstein network entities...\n');

// 1. JEFFREY EPSTEIN - Add major missing associates
console.log('1. jeffrey-epstein:');
addAssociates('jeffrey-epstein', [
  // Inner circle
  { name: 'Ehud Barak', relationship: 'Israeli PM, business partner, visited NYC apartment frequently', href: '/entities/individuals/ehud-barak' },
  { name: 'Glenn Dubin', relationship: 'Hedge fund billionaire, longstanding friend, victim alleged abuse in his home', href: '/entities/individuals/glenn-dubin' },
  { name: 'Eva Dubin', relationship: 'Former Miss Sweden, wife of Glenn Dubin, Epstein ex-girlfriend', href: '/entities/individuals/eva-dubin' },
  { name: 'Thomas Pritzker', relationship: 'Hyatt hotel heir, flew on Lolita Express, social associate', href: '/entities/individuals/thomas-pritzker' },
  { name: 'Michael Steinhardt', relationship: 'Hedge fund pioneer, co-invested in education ventures', href: '/entities/individuals/michael-steinhardt' },
  { name: 'Lynn Forester de Rothschild', relationship: 'Socialite, introduced Epstein to powerful figures', href: '/entities/individuals/lynn-forester-de-rothschild' },
  { name: 'Ronald Perelman', relationship: 'Revlon billionaire, in black book, social connection', href: '/entities/individuals/ronald-perelman' },
  { name: 'Edgar Bronfman', relationship: 'Seagram heir, social and financial connection', href: '/entities/individuals/edgar-bronfman' },
  // Legal/Political
  { name: 'George Mitchell', relationship: 'Former Senate Majority Leader, named by Virginia Giuffre', href: '/entities/individuals/george-mitchell' },
  { name: 'Bill Richardson', relationship: 'Former NM Governor, named by Virginia Giuffre', href: '/entities/individuals/bill-richardson' },
  { name: 'Kenneth Starr', relationship: 'Former Solicitor General, joined Epstein defense team 2007', href: '/entities/individuals/kenneth-starr' },
  { name: 'William Barr', relationship: 'AG overseeing BOP during Epstein death, father hired Epstein at Dalton', href: '/entities/individuals/william-barr' },
  { name: 'Jay Lefkowitz', relationship: 'Attorney, helped negotiate 2008 plea deal', href: '/entities/individuals/jay-lefkowitz' },
  // Maxwell family
  { name: 'Christine Maxwell', relationship: 'Ghislaine sister, tech entrepreneur, social connection', href: '/entities/individuals/christine-maxwell' },
  { name: 'Isabel Maxwell', relationship: 'Ghislaine sister, tech/telecom connections', href: '/entities/individuals/isabel-maxwell' },
  { name: 'Kevin Maxwell', relationship: 'Ghislaine brother, Maxwell family connection', href: '/entities/individuals/kevin-maxwell' },
  // Staff/Enablers
  { name: 'Lesley Groff', relationship: 'Executive assistant, scheduled massage appointments, immunity deal', href: '/entities/individuals/lesley-groff' },
  { name: 'Adriana Ross', relationship: 'Assistant, witnessed abuse, immunity deal', href: '/entities/individuals/adriana-ross' },
  { name: 'Haley Robson', relationship: 'Victim turned recruiter, brought underage girls', href: '/entities/individuals/haley-robson' },
  { name: 'Emmy Tayler', relationship: 'Maxwell assistant, arranged travel and logistics', href: '/entities/individuals/emmy-tayler' },
  { name: 'Juan Alessi', relationship: 'Palm Beach estate manager 1990-2002, key witness', href: '/entities/individuals/juan-alessi' },
  { name: 'Alfredo Rodriguez', relationship: 'Butler, stole black book, sentenced for obstruction, died 2015', href: '/entities/individuals/alfredo-rodriguez' },
  // Scientists/Academics
  { name: 'Marvin Minsky', relationship: 'MIT AI pioneer, visited island, alleged in Giuffre deposition', href: '/entities/individuals/marvin-minsky' },
  { name: 'Lawrence Krauss', relationship: 'Physicist, publicly defended Epstein, visited island', href: '/entities/individuals/lawrence-krauss' },
  { name: 'Joi Ito', relationship: 'MIT Media Lab director, accepted donations, resigned', href: '/entities/individuals/joi-ito' },
  { name: 'Stephen Hawking', relationship: 'Attended Epstein-hosted conference on island', href: '/entities/individuals/stephen-hawking' },
  { name: 'Larry Summers', relationship: 'Former Harvard president, flew on Lolita Express', href: '/entities/individuals/larry-summers' },
  { name: 'George Church', relationship: 'Harvard geneticist, discussed business ventures', href: '/entities/individuals/george-church' },
  { name: 'Martin Nowak', relationship: 'Harvard mathematician, $6.5M donation to his program', href: '/entities/individuals/martin-nowak' },
  { name: 'Steven Pinker', relationship: 'Harvard psychologist, connections to Epstein circle', href: '/entities/individuals/steven-pinker' },
  { name: 'John Brockman', relationship: 'Literary agent, Edge Foundation, connected academics to Epstein', href: '/entities/individuals/john-brockman' },
  { name: 'Nathan Wolfe', relationship: 'Epidemiologist, received Epstein funding', href: '/entities/individuals/nathan-wolfe' },
  // Steven Hoffenberg
  { name: 'Steven Hoffenberg', relationship: 'Towers Financial partner, $460M Ponzi scheme, claimed Epstein was co-conspirator', href: '/entities/individuals/steven-hoffenberg' },
  // Politicians
  { name: 'Peter Mandelson', relationship: 'British politician, stayed at Epstein properties', href: '/entities/individuals/peter-mandelson' },
  { name: 'Ehud Olmert', relationship: 'Israeli PM, connections through Barak', href: '/entities/individuals/ehud-olmert' },
  // Celebrities/Media
  { name: 'Chris Tucker', relationship: 'Actor, flew on Lolita Express to Africa with Clinton', href: '/entities/individuals/chris-tucker' },
  { name: 'Naomi Campbell', relationship: 'Supermodel, in black book, social associate', href: '/entities/individuals/naomi-campbell' },
  { name: 'Woody Allen', relationship: 'Director, dined with Epstein post-conviction', href: '/entities/individuals/woody-allen' },
  { name: 'David Blaine', relationship: 'Entertainer, performed at Epstein parties', href: '/entities/individuals/david-blaine' },
  { name: 'Katie Couric', relationship: 'Journalist, attended Epstein dinner party', href: '/entities/individuals/katie-couric' },
  // Victims
  { name: 'Maria Farmer', relationship: 'First known accuser (1996), reported to FBI and NYPD', href: '/entities/individuals/maria-farmer' },
  { name: 'Annie Farmer', relationship: 'Victim, abused at Zorro Ranch age 16, testified at Maxwell trial', href: '/entities/individuals/annie-farmer' },
  { name: 'Courtney Wild', relationship: 'Victim, challenged 2008 plea deal under CVRA', href: '/entities/individuals/courtney-wild' },
  { name: 'Carolyn Andriano', relationship: 'Victim, recruited age 14, key Maxwell trial witness', href: '/entities/individuals/carolyn-andriano' },
  { name: 'Sarah Ransome', relationship: 'Victim, trapped on island, attempted swimming escape', href: '/entities/individuals/sarah-ransome' },
  { name: 'Chauntae Davies', relationship: 'Victim, personal masseuse, raped on island', href: '/entities/individuals/chauntae-davies' },
  { name: 'Teresa Helm', relationship: 'Victim, assaulted at NYC mansion', href: '/entities/individuals/teresa-helm' },
  // Law enforcement
  { name: 'Joe Recarey', relationship: 'Palm Beach detective, led initial investigation, died 2018 age 50', href: '/entities/individuals/joe-recarey' },
  { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief, fought for prosecution', href: '/entities/individuals/michael-reiter' },
  { name: 'Barry Krischer', relationship: 'Palm Beach State Attorney, reduced charges despite evidence', href: '/entities/individuals/barry-krischer' },
  { name: 'Geoffrey Berman', relationship: 'SDNY US Attorney, brought 2019 federal charges', href: '/entities/individuals/geoffrey-berman' },
  // Prison/death
  { name: 'Nicholas Tartaglione', relationship: 'Cellmate, former cop convicted of quadruple murder', href: '/entities/individuals/nicholas-tartaglione' },
  { name: 'Michael Baden', relationship: 'Pathologist hired by Epstein family, questioned suicide ruling', href: '/entities/individuals/michael-baden' },
]);

// 2. GHISLAINE MAXWELL
console.log('\n2. ghislaine-maxwell:');
addAssociates('ghislaine-maxwell', [
  { name: 'Ehud Barak', relationship: 'Israeli PM, introduced by Maxwell, business connections', href: '/entities/individuals/ehud-barak' },
  { name: 'Eva Dubin', relationship: 'Friend, Epstein ex-girlfriend, Maxwell sent victims to Dubin home', href: '/entities/individuals/eva-dubin' },
  { name: 'Adriana Ross', relationship: 'Assistant, witnessed abuse, received immunity', href: '/entities/individuals/adriana-ross' },
  { name: 'Emmy Tayler', relationship: 'Personal assistant, arranged logistics', href: '/entities/individuals/emmy-tayler' },
  { name: 'Christine Maxwell', relationship: 'Sister, tech entrepreneur', href: '/entities/individuals/christine-maxwell' },
  { name: 'Isabel Maxwell', relationship: 'Sister, telecom connections', href: '/entities/individuals/isabel-maxwell' },
  { name: 'Kevin Maxwell', relationship: 'Brother, Maxwell family', href: '/entities/individuals/kevin-maxwell' },
  { name: 'Maria Farmer', relationship: 'Victim, assaulted by Maxwell and Epstein in 1996', href: '/entities/individuals/maria-farmer' },
  { name: 'Annie Farmer', relationship: 'Victim, testified at Maxwell trial', href: '/entities/individuals/annie-farmer' },
  { name: 'Carolyn Andriano', relationship: 'Victim, key witness at Maxwell trial', href: '/entities/individuals/carolyn-andriano' },
  { name: 'Sarah Ransome', relationship: 'Victim, trafficked to Epstein island', href: '/entities/individuals/sarah-ransome' },
  { name: 'Naomi Campbell', relationship: 'Supermodel, social circle', href: '/entities/individuals/naomi-campbell' },
  { name: 'Juan Alessi', relationship: 'Estate manager, key witness on Maxwell involvement', href: '/entities/individuals/juan-alessi' },
  { name: 'Haley Robson', relationship: 'Recruiter of minors, worked under Maxwell direction', href: '/entities/individuals/haley-robson' },
  { name: 'Lesley Groff', relationship: 'Co-assistant, scheduled victims', href: '/entities/individuals/lesley-groff' },
]);

// 3. BILL CLINTON
console.log('\n3. bill-clinton:');
addAssociates('bill-clinton', [
  { name: 'Chris Tucker', relationship: 'Actor, traveled with Clinton on Epstein jet to Africa', href: '/entities/individuals/chris-tucker' },
  { name: 'Mark Middleton', relationship: 'WH aide, arranged Clinton-Epstein meetings, died 2022', href: '/entities/individuals/mark-middleton' },
  { name: 'Lynn Forester de Rothschild', relationship: 'Socialite, introduced to Clinton by Epstein', href: '/entities/individuals/lynn-forester-de-rothschild' },
]);

// 4. ALAN DERSHOWITZ
console.log('\n4. alan-dershowitz:');
addAssociates('alan-dershowitz', [
  { name: 'Kenneth Starr', relationship: 'Co-counsel on Epstein defense team', href: '/entities/individuals/kenneth-starr' },
  { name: 'Steven Pinker', relationship: 'Harvard colleague, connected in Epstein academic circle', href: '/entities/individuals/steven-pinker' },
  { name: 'Virginia Giuffre', relationship: 'Accuser, settled defamation claims', href: '/entities/individuals/virginia-giuffre' },
]);

// 5. LES WEXNER  
console.log('\n5. les-wexner:');
addAssociates('les-wexner', [
  { name: 'Maria Farmer', relationship: 'Victim, worked at Wexner estate where assaulted', href: '/entities/individuals/maria-farmer' },
  { name: 'Virginia Giuffre', relationship: 'Victim, connected through Epstein-Wexner relationship', href: '/entities/individuals/virginia-giuffre' },
]);

// 6. DONALD TRUMP
console.log('\n6. donald-trump:');
addAssociates('donald-trump', [
  { name: 'William Barr', relationship: 'Attorney General, oversaw BOP during Epstein death in custody', href: '/entities/individuals/william-barr' },
  { name: 'Alex Acosta', relationship: 'Labor Secretary pick, gave Epstein 2008 sweetheart deal as US Attorney', href: '/entities/individuals/alex-acosta' },
]);

// 7. PRINCE ANDREW
console.log('\n7. prince-andrew:');
addAssociates('prince-andrew', [
  { name: 'Virginia Giuffre', relationship: 'Accuser, photographed together, settled for £12M', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Ehud Barak', relationship: 'Israeli PM, both in Epstein inner circle', href: '/entities/individuals/ehud-barak' },
  { name: 'Sarah Ransome', relationship: 'Victim, trafficked within Epstein-Maxwell network', href: '/entities/individuals/sarah-ransome' },
]);

// 8. BILL GATES
console.log('\n8. bill-gates:');
addAssociates('bill-gates', [
  { name: 'Joi Ito', relationship: 'MIT Media Lab director, both received/gave Epstein-linked funds', href: '/entities/individuals/joi-ito' },
  { name: 'Larry Summers', relationship: 'Both attended Epstein gatherings, Harvard connections', href: '/entities/individuals/larry-summers' },
  { name: 'Nathan Wolfe', relationship: 'Epidemiologist funded by both Gates Foundation and Epstein', href: '/entities/individuals/nathan-wolfe' },
]);

// 9. JEAN-LUC BRUNEL
console.log('\n9. jean-luc-brunel:');
addAssociates('jean-luc-brunel', [
  { name: 'Virginia Giuffre', relationship: 'Victim, named Brunel as abuser', href: '/entities/individuals/virginia-giuffre' },
  { name: 'Naomi Campbell', relationship: 'Supermodel, connected through modeling industry', href: '/entities/individuals/naomi-campbell' },
  { name: 'Sarah Ransome', relationship: 'Victim, trafficked within network', href: '/entities/individuals/sarah-ransome' },
]);

// 10. LEON BLACK
console.log('\n10. leon-black:');
addAssociates('leon-black', [
  { name: 'Jeffrey Epstein', relationship: 'Financial advisor, paid $158M+ in fees, extensive business dealings', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Ghislaine Maxwell', relationship: 'Social connection through Epstein', href: '/entities/individuals/ghislaine-maxwell' },
  { name: 'Glenn Dubin', relationship: 'Both major Epstein financial associates', href: '/entities/individuals/glenn-dubin' },
]);

// 11. HARVEY WEINSTEIN - limited Epstein connection
console.log('\n11. harvey-weinstein:');
addAssociates('harvey-weinstein', [
  { name: 'Ghislaine Maxwell', relationship: 'Social circles overlapped in NYC/Hollywood', href: '/entities/individuals/ghislaine-maxwell' },
]);

// Also fix the bill-barr duplicate - Add redirect from bill-barr to william-barr
// Find the bill-barr profile and update it to mention the Epstein connection
console.log('\n12. bill-barr (merge with william-barr reference):');
const billBarrIdx = content.indexOf("'bill-barr': {");
if (billBarrIdx !== -1) {
  // Find knownAssociates for bill-barr
  addAssociates('bill-barr', [
    { name: 'Jeffrey Epstein', relationship: 'AG overseeing BOP during death in custody; father hired Epstein at Dalton', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Donald Barr', relationship: 'Father, hired Epstein at Dalton School in 1974', href: '/entities/individuals/donald-barr' },
  ]);
}

// Fix empty knownAssociates arrays
console.log('\n13. Filling empty knownAssociates:');

// barry-krischer
addAssociates('barry-krischer', [
  { name: 'Jeffrey Epstein', relationship: 'State Attorney who reduced charges to single prostitution count', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Joe Recarey', relationship: 'Detective whose findings Krischer downgraded', href: '/entities/individuals/joe-recarey' },
  { name: 'Michael Reiter', relationship: 'Police Chief who fought for prosecution', href: '/entities/individuals/michael-reiter' },
]);

// michael-baden
addAssociates('michael-baden', [
  { name: 'Jeffrey Epstein', relationship: 'Hired by Epstein family to observe autopsy', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Barbara Sampson', relationship: 'NYC Chief Medical Examiner who ruled suicide', href: '/entities/individuals/barbara-sampson' },
]);

// barbara-sampson  
addAssociates('barbara-sampson', [
  { name: 'Jeffrey Epstein', relationship: 'Ruled his death suicide by hanging', href: '/entities/individuals/jeffrey-epstein' },
  { name: 'Michael Baden', relationship: 'Pathologist who disputed the suicide ruling', href: '/entities/individuals/michael-baden' },
]);

// Write the modified content
fs.writeFileSync(file, content);
console.log('\nDone! Cross-linking complete.');
