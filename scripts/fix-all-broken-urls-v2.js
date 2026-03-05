// Master URL fix script v2 - fixes ALL broken URLs across the codebase
// Bug fix: v1 had infinite loop when oldUrl === newUrl, and broken AP News URL

const fs = require('fs');
const path = require('path');

// Collect all page files to fix
const filesToFix = [];

function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath);
    } else if (entry.name === 'page.tsx') {
      filesToFix.push(fullPath);
    }
  }
}

collectFiles('src/app');
console.log(`Found ${filesToFix.length} page files to scan.\n`);

// ============================================================
// URL REPLACEMENT MAP: oldUrl → newUrl
// ============================================================
const urlReplacements = new Map();

// --- 1. Specific broken URLs ---
// Carroll v. Trump Trial 2 - NYT paywall → AP News
urlReplacements.set(
  'https://www.nytimes.com/2024/01/26/nyregion/trump-defamation-trial-e-jean-carroll.html',
  'https://apnews.com/article/trump-carroll-defamation-damages-trial-83200c109982f58c9575b0743e7c3771'
);
// rfrci.org DNS failure
urlReplacements.set('https://www.rfrci.org/', 'https://web.archive.org/web/2023/https://www.rfrci.org/');
// Senate.gov - removed; the backslash was an escaped quote, not a trailing slash
// soaw.org 404
urlReplacements.set('https://soaw.org/about-the-soawhinsec', 'https://soaw.org/home');

// --- 2. Wikipedia prefix removals (Dr., Col., Brig. Gen., General, etc.) ---
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._Barbara_Sampson', 'https://en.wikipedia.org/wiki/Barbara_Sampson');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._Condie', 'https://en.wikipedia.org/wiki/William_Condie');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._Eunice_Rivers', 'https://en.wikipedia.org/wiki/Eunice_Rivers');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._John_Charles_Cutler', 'https://en.wikipedia.org/wiki/John_Charles_Cutler');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._John_Mahoney', 'https://en.wikipedia.org/wiki/John_Mahoney_(physician)');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._Juan_Funes', 'https://en.wikipedia.org/wiki/Juan_Funes');
urlReplacements.set('https://en.wikipedia.org/wiki/Dr._R.C._Arnold', 'https://en.wikipedia.org/wiki/R._C._Arnold');
urlReplacements.set('https://en.wikipedia.org/wiki/Col._Thomas_Pappas', 'https://en.wikipedia.org/wiki/Thomas_Pappas_(general)');
urlReplacements.set('https://en.wikipedia.org/wiki/Brig._Gen._Janis_Karpinski', 'https://en.wikipedia.org/wiki/Janis_Karpinski');
urlReplacements.set('https://en.wikipedia.org/wiki/General_Marc_Cisneros', 'https://en.wikipedia.org/wiki/Marc_Cisneros');
urlReplacements.set('https://en.wikipedia.org/wiki/General_Maxwell_Thurman', 'https://en.wikipedia.org/wiki/Maxwell_R._Thurman');
urlReplacements.set('https://en.wikipedia.org/wiki/General_Norman_Schwarzkopf', 'https://en.wikipedia.org/wiki/Norman_Schwarzkopf_Jr.');
urlReplacements.set('https://en.wikipedia.org/wiki/General_Stephen_Townsend', 'https://en.wikipedia.org/wiki/Stephen_J._Townsend');
urlReplacements.set('https://en.wikipedia.org/wiki/General_Thomas_Waldhauser', 'https://en.wikipedia.org/wiki/Thomas_D._Waldhauser');
urlReplacements.set('https://en.wikipedia.org/wiki/Bishop_Carlos_Ximenes_Belo', 'https://en.wikipedia.org/wiki/Carlos_Filipe_Ximenes_Belo');
urlReplacements.set('https://en.wikipedia.org/wiki/First_Officer_Ahmed_Nur_Mohammod', 'https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302');
urlReplacements.set('https://en.wikipedia.org/wiki/Surgeon_General_Thomas_Parran', 'https://en.wikipedia.org/wiki/Thomas_Parran_Jr.');

// --- 3. Wikipedia missing closing parens ---
urlReplacements.set('https://en.wikipedia.org/wiki/Birdie_Africa_(Michael_Moses_Ward', 'https://en.wikipedia.org/wiki/Birdie_Africa');
urlReplacements.set('https://en.wikipedia.org/wiki/John_Africa_(Vincent_Leaphart', 'https://en.wikipedia.org/wiki/John_Africa');
urlReplacements.set('https://en.wikipedia.org/wiki/Malcolm_X_(El-Hajj_Malik_El-Shabazz', 'https://en.wikipedia.org/wiki/Malcolm_X');
urlReplacements.set('https://en.wikipedia.org/wiki/Muhammad_Abdul_Aziz_(Norman_3X_Butler', 'https://en.wikipedia.org/wiki/Muhammad_Abdul_Aziz');
urlReplacements.set('https://en.wikipedia.org/wiki/Mujahid_Abdul_Halim_(Talmadge_Hayer', 'https://en.wikipedia.org/wiki/Mujahid_Abdul_Halim');
urlReplacements.set('https://en.wikipedia.org/wiki/Khalil_Islam_(Thomas_15X_Johnson', 'https://en.wikipedia.org/wiki/Khalil_Islam');
urlReplacements.set('https://en.wikipedia.org/wiki/Deborah_Johnson_(Akua_Njeri', 'https://en.wikipedia.org/wiki/Akua_Njeri');
urlReplacements.set('https://en.wikipedia.org/wiki/Rafid_Ahmed_Alwan_al-Janabi_(Curveball', 'https://en.wikipedia.org/wiki/Curveball_(informant)');
urlReplacements.set('https://en.wikipedia.org/wiki/Norfolk_Southern_(CEO_Alan_Shaw', 'https://en.wikipedia.org/wiki/Norfolk_Southern');
urlReplacements.set('https://en.wikipedia.org/wiki/Morton_County_Sheriff_(Kyle_Kirchmeier', 'https://en.wikipedia.org/wiki/Morton_County,_North_Dakota');

// --- 4. Unicode escape fixes ---
urlReplacements.set('https://en.wikipedia.org/wiki/Efra\\u00EDn_R\\u00EDos_Montt', 'https://en.wikipedia.org/wiki/Efra%C3%ADn_R%C3%ADos_Montt');
urlReplacements.set('https://en.wikipedia.org/wiki/Jacobo_\\u00C1rbenz', 'https://en.wikipedia.org/wiki/Jacobo_%C3%81rbenz');
urlReplacements.set('https://en.wikipedia.org/wiki/Juan_M\\u00E9ndez', 'https://en.wikipedia.org/wiki/Juan_E._M%C3%A9ndez');
urlReplacements.set('https://en.wikipedia.org/wiki/Oscar_Danilo_Bland\\u00F3n', 'https://en.wikipedia.org/wiki/Oscar_Danilo_Bland%C3%B3n');
urlReplacements.set('https://en.wikipedia.org/wiki/Nicol\\u00e1s_Maduro', 'https://en.wikipedia.org/wiki/Nicol%C3%A1s_Maduro');
urlReplacements.set('https://en.wikipedia.org/wiki/St\\u00e9phane_Bancel', 'https://en.wikipedia.org/wiki/St%C3%A9phane_Bancel');

// --- 5. Wikipedia name corrections ---
urlReplacements.set('https://en.wikipedia.org/wiki/B.C._Franklin', 'https://en.wikipedia.org/wiki/Buck_Colbert_Franklin');
urlReplacements.set('https://en.wikipedia.org/wiki/Brian_OHara', 'https://en.wikipedia.org/wiki/Brian_O%27Hara');
urlReplacements.set('https://en.wikipedia.org/wiki/Chuck_Hoskin_Jr', 'https://en.wikipedia.org/wiki/Chuck_Hoskin_Jr.');
urlReplacements.set('https://en.wikipedia.org/wiki/Desmond_Mills_Jr', 'https://en.wikipedia.org/wiki/Murder_of_Tyre_Nichols');
urlReplacements.set('https://en.wikipedia.org/wiki/George_Stinney_Jr', 'https://en.wikipedia.org/wiki/George_Stinney');
urlReplacements.set('https://en.wikipedia.org/wiki/Edgar_Bronfman_Sr', 'https://en.wikipedia.org/wiki/Edgar_Bronfman_Sr.');
urlReplacements.set('https://en.wikipedia.org/wiki/Thomas_E._Sandefur_Jr', 'https://en.wikipedia.org/wiki/Thomas_E._Sandefur');
urlReplacements.set('https://en.wikipedia.org/wiki/Patrick_Shanahan_Jr', 'https://en.wikipedia.org/wiki/Patrick_M._Shanahan');
urlReplacements.set('https://en.wikipedia.org/wiki/Björn_Fehrm', 'https://en.wikipedia.org/wiki/Bj%C3%B6rn_Fehrm');
urlReplacements.set('https://en.wikipedia.org/wiki/Dwight_David_Eisenhower', 'https://en.wikipedia.org/wiki/Dwight_D._Eisenhower');
urlReplacements.set('https://en.wikipedia.org/wiki/Colgan_Air_3407_Families', 'https://en.wikipedia.org/wiki/Colgan_Air_Flight_3407');
urlReplacements.set('https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302_Victims', 'https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302');
urlReplacements.set('https://en.wikipedia.org/wiki/ValuJet_592_Victims', 'https://en.wikipedia.org/wiki/ValuJet_Flight_592');
urlReplacements.set('https://en.wikipedia.org/wiki/Shelley_v._Kraemer_Plaintiffs', 'https://en.wikipedia.org/wiki/Shelley_v._Kraemer');
urlReplacements.set('https://en.wikipedia.org/wiki/Pelican_Bay_Prisoners', 'https://en.wikipedia.org/wiki/Pelican_Bay_State_Prison');
urlReplacements.set('https://en.wikipedia.org/wiki/The_Green_Book_Publishers', 'https://en.wikipedia.org/wiki/The_Negro_Motorist_Green_Book');
urlReplacements.set('https://en.wikipedia.org/wiki/Five_Omar_Mualimm-ak', 'https://en.wikipedia.org/wiki/Solitary_confinement');
urlReplacements.set('https://en.wikipedia.org/wiki/French_Officials', 'https://en.wikipedia.org/wiki/Government_of_France');
urlReplacements.set('https://en.wikipedia.org/wiki/Mauricio_Rodríguez_Sánchez', 'https://en.wikipedia.org/wiki/Efra%C3%ADn_R%C3%ADos_Montt#Trial');
urlReplacements.set('https://en.wikipedia.org/wiki/Guillermo_García', 'https://en.wikipedia.org/wiki/Salvadoran_Civil_War');

// Truncated apostrophe names
urlReplacements.set('https://en.wikipedia.org/wiki/Dinesh_D', 'https://en.wikipedia.org/wiki/Dinesh_D%27Souza');
urlReplacements.set('https://en.wikipedia.org/wiki/Roberto_D', 'https://en.wikipedia.org/wiki/Roberto_De_Vido');

// --- 6. PBS fixes ---
urlReplacements.set('https://www.pbs.org/independentlens/documentaries/enron-the-smartest-guys-in-the-room/', 'https://www.pbs.org/independentlens/films/enron-the-smartest-guys-in-the-room/');
urlReplacements.set('https://www.pbs.org/show/unspoken-americas-native-american-boarding-schools/', 'https://www.pbs.org/video/unspoken-americas-native-american-boarding-schools-preview-xtlsaj/');
urlReplacements.set('https://www.pbs.org/wgbh/pages/frontline/shows/drugs/archive/noriega.html', 'https://www.pbs.org/wgbh/frontline/documentary/drug-wars/');

// --- 7. True 404 Wikipedia pages (people without Wikipedia articles) → Google search ---
const wiki404Names = [
  'Barry_Krischer', 'Basil_Barimo', 'Becky_Barr', 'Bernard_Reilly', 'Bernd_Gottweis',
  'Bhavye_Suneja', 'Bill_McSherry', 'Bill_Meierling', 'Bosquet_Wev', 'Bruce_Karrh',
  'Byron_Sage', 'C._Sidney_Carlton', 'Carl_Oechsner', 'Catherine_Berthet',
  'Catherine_Flowers', 'Chauntae_Davies', 'Chief_John_Gustafson', 'Chris_Chadwick',
  'Chris_Jankowski', 'Christian_Bittar', 'Clare_Garvie', 'Clariss_Moore',
  'Claudia_Peterson', 'Claudia_Russ_Anderson', 'Courtney_Bowden', 'Craig_Landau',
  'Curtis_Ewbank', 'Cynthia_Cole', 'Dan_Wyant', 'Daniel_Carder', 'Daniel_Hamburger',
  'Daniel_Rigmaiden', 'Geoffrey_Bible', 'Jerry_Ensminger', 'Jerry_del_Missier',
  'Jesse_Daniel_Ames', 'Jesse_Gagliano', 'Jimmy_Harrell', 'Joe_Jacobsen', 'Joe_Kelso',
  'John_Anjain', 'John_Schoettler', 'Jon_Ostrower', 'Joseph_Rivers', 'Joseph_Weekley',
  'Juana_Majel-Dixon', 'Julian_Khater', 'Karl_Uecker', 'Katinka_Matson',
  'Katricia_Dotson_Africa', 'Keith_Leverkuhn', 'Kristian_Lum', 'Kurt_Mix',
  'Laurence_Teeter', 'Lessie_Benningfield_Randle', 'Lirio_Liu', 'Lisa_Brunner',
  'Liz_Fowler', 'Mahendra_Amin', 'Margaret_Gilligan', 'Mark_Swartz',
  'Michael_D._Powell', 'Michael_Stumo', 'Michael_Teal', 'Naoise_Ryan',
  'Natalie_Kitroeff', 'Nathan_Wessler', 'Nguyen_Viet_Nhan', 'Nicholas_Calio',
  'Nicole_Smith-Holt', 'Nijeer_Parks', 'Nishad_Singh', 'Nurcahyo_Utomo',
  'Orville_Kelly', 'Pamela_Foster', 'Paul_Goldenheim', 'Paul_Njoroge',
  'Peggy_Gilligan', 'Peter_Robison', 'Porcha_Woodruff', 'R.J._Lehmann',
  'Ray_Conner', 'Red_Fawn_Fallis', 'Richard_Dorenkamp', 'Robert_Hugin',
  'Robert_J._Martens', 'Robert_Kaluza', 'Robin_Arkley_II', 'Roy_Martin_Mitchell',
  'Sanjiv_Singh', 'Santiago_Paredes', 'Stan_Deal', 'Stuart_Johnson',
  'Terrell_Don_Hutto', 'Terry_Dehko', 'Terry_Farr', 'Thane_Eugene_Cesar',
  'Todd_Curtis', 'Tom_Gentile', 'Ton_That_Tung', 'Tor_Stumo', 'Tree_Africa',
  'Victor_DeNoble', 'Wilbur_Tennant', 'William_H._Craig', 'Yared_Getachew',
  'Ziad_Ojakli', 'Zipporah_Kuria',
  'Dean_Bortniker', 'Dorenda_Baker', 'Duke_Tran', 'Earl_Lawrence', 'Earl_Stadtman',
  'Erin_Keating', 'David_Gitlin', 'David_Hinson', 'David_Kotz', 'David_Rainey',
  'David_Reyes', 'David_Voth', 'Deanne_Criswell', 'Denny_Heck', 'Dominic_Gates',
  'Duane_Parde', 'Ed_Pierson', 'Edmund_Giambastiani', 'Edward_Breen',
  'Elizabeth_Lund', 'Emmitt_Martin_III', 'Hal_Knight', 'Hamid_Khan',
  'Harrison_Trevathan', 'Greg_Smith', 'Gregore_Sambor', 'Gregory_Travis',
  'David_Boulter', 'David_Gelles',
];

for (const name of wiki404Names) {
  const oldUrl = `https://en.wikipedia.org/wiki/${name}`;
  const readableName = name.replace(/_/g, ' ').replace(/\./g, '');
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(readableName)}`;
  urlReplacements.set(oldUrl, searchUrl);
}

// ============================================================
// APPLY ALL FIXES
// ============================================================

let totalFixes = 0;
let totalFiles = 0;
const fixDetails = [];

for (const filePath of filesToFix) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileFixCount = 0;

  // Apply direct URL replacements - sort by length DESC to prevent partial matches
  const sortedReplacements = [...urlReplacements.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [oldUrl, newUrl] of sortedReplacements) {
    if (oldUrl === newUrl) continue;
    if (!content.includes(oldUrl)) continue;
    
    // Use boundary-aware replacement: only match URLs that end at a quote/space/paren
    // to avoid matching "wiki/Dinesh_D" inside a URL that already has more chars
    const escaped = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped + "(?=['\"`\\s,)\\]}])", 'g');
    let count = 0;
    content = content.replace(regex, () => { count++; return newUrl; });
    if (count > 0) {
      fileFixCount += count;
      fixDetails.push({ file: filePath, old: oldUrl.substring(0, 80), count });
    }
  }

  // Wrap Reuters 401 URLs in archive.org
  const reutersRegex = /'(https:\/\/www\.reuters\.com\/[^']+)'/g;
  let reutersMatch;
  const reutersToWrap = [];
  while ((reutersMatch = reutersRegex.exec(content)) !== null) {
    const url = reutersMatch[1];
    if (!url.startsWith('https://web.archive.org/')) {
      reutersToWrap.push(url);
    }
  }
  for (const url of reutersToWrap) {
    const wrapped = `https://web.archive.org/web/2024/${url}`;
    content = content.split(`'${url}'`).join(`'${wrapped}'`);
    fileFixCount++;
    fixDetails.push({ file: filePath, old: `Reuters → archive.org: ${url.substring(0, 60)}`, count: 1 });
  }

  // Wrap WSJ 401 URLs in archive.org
  const wsjRegex = /'(https:\/\/www\.wsj\.com\/[^']+)'/g;
  let wsjMatch;
  const wsjToWrap = [];
  while ((wsjMatch = wsjRegex.exec(content)) !== null) {
    const url = wsjMatch[1];
    if (!url.startsWith('https://web.archive.org/')) {
      wsjToWrap.push(url);
    }
  }
  for (const url of wsjToWrap) {
    const wrapped = `https://web.archive.org/web/2024/${url}`;
    content = content.split(`'${url}'`).join(`'${wrapped}'`);
    fileFixCount++;
    fixDetails.push({ file: filePath, old: `WSJ → archive.org: ${url.substring(0, 60)}`, count: 1 });
  }

  // Handle truncated Wikipedia URLs ending with single letter before quote
  // e.g., wiki/Michael_O' or wiki/James_O'
  // These were caused by apostrophe truncation, so check name context
  const truncRegex = /url:\s*'https:\/\/en\.wikipedia\.org\/wiki\/([A-Z][a-z]+)_([A-Z])'/g;
  let truncMatch;
  while ((truncMatch = truncRegex.exec(content)) !== null) {
    const fullMatch = truncMatch[0];
    const firstName = truncMatch[1];
    const lastInitial = truncMatch[2];
    // We already fixed Dinesh_D and Roberto_D above, skip those
    if (content.indexOf(fullMatch) === -1) continue;
    const readableName = `${firstName} ${lastInitial}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(readableName)}`;
    const replacement = fullMatch.replace(
      /https:\/\/en\.wikipedia\.org\/wiki\/[A-Z][a-z]+_[A-Z]/,
      searchUrl
    );
    content = content.replace(fullMatch, replacement);
    fileFixCount++;
    fixDetails.push({ file: filePath, old: `Truncated wiki: ${firstName}_${lastInitial}`, count: 1 });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    totalFiles++;
    totalFixes += fileFixCount;
    console.log(`✓ ${path.relative('.', filePath)}: ${fileFixCount} fixes`);
  }
}

console.log(`\n${'='.repeat(50)}`);
console.log(`TOTAL: ${totalFixes} URL fixes across ${totalFiles} files`);
console.log(`${'='.repeat(50)}`);

if (fixDetails.length > 0) {
  console.log('\nDetailed fixes:');
  for (const d of fixDetails) {
    console.log(`  [${d.count}x] ${path.relative('.', d.file)} — ${d.old}`);
  }
}
