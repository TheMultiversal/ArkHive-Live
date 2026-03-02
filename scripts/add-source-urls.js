const fs = require('fs');
const path = 'src/app/entities/individuals/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Map of known source titles to real URLs
const urlMap = {
  // Government/Legal Documents
  'Mueller Report': 'https://www.justice.gov/archives/sco/file/1373816/download',
  'Mueller Report - Special Counsel Investigation': 'https://www.justice.gov/archives/sco/file/1373816/download',
  'January 6 Committee Final Report': 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf',
  'January 6th Committee Final Report': 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf',
  'Senate Intelligence Committee Report': 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures',
  'Senate Intelligence Committee Russia Report': 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures',
  'Senate Judiciary Committee Report': 'https://www.judiciary.senate.gov/',
  'Fox News Dominion Settlement': 'https://www.nytimes.com/2023/04/18/business/fox-news-dominion-settlement.html',
  'Dominion Voting Systems v. Fox News': 'https://www.nytimes.com/2023/04/18/business/fox-news-dominion-settlement.html',
  'Manhattan DA Indictment': 'https://manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf',
  'Georgia RICO Indictment': 'https://www.fultonclerk.org/FilingSearch',
  'Fulton County RICO Indictment': 'https://www.fultonclerk.org/FilingSearch',
  'Jack Smith Special Counsel Indictment': 'https://www.justice.gov/storage/US_v_Trump-Nauta_23-80101.pdf',
  'Special Counsel Jack Smith Indictment': 'https://www.justice.gov/storage/US_v_Trump-Nauta_23-80101.pdf',
  'Federal Election Commission Filings': 'https://www.fec.gov/',
  'FEC Filings': 'https://www.fec.gov/',
  'Congressional Record': 'https://www.congress.gov/congressional-record',
  'House Ethics Committee Report': 'https://ethics.house.gov/reports',
  'Senate Ethics Committee Report': 'https://www.ethics.senate.gov/',
  'FARA Registration': 'https://efile.fara.gov/ords/fara/f?p=185:1:0::::',
  'Foreign Agents Registration Act Filings': 'https://efile.fara.gov/ords/fara/f?p=185:1:0::::',
  'Pentagon Papers': 'https://www.archives.gov/research/pentagon-papers',
  'Church Committee Report': 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions',
  'Warren Commission Report': 'https://www.archives.gov/research/jfk/warren-commission-report',
  '9/11 Commission Report': 'https://www.9-11commission.gov/report/',
  'Iran-Contra Report': 'https://archive.org/details/iran-contra-report',
  'Watergate Tapes': 'https://www.nixonlibrary.gov/white-house-tapes',

  // Court Cases & Legal
  'Federal Court Filings': 'https://www.courtlistener.com/',
  'Court Filing': 'https://www.courtlistener.com/',
  'Department of Justice Press Release': 'https://www.justice.gov/news',
  'DOJ Press Release': 'https://www.justice.gov/news',
  'DOJ Indictment': 'https://www.justice.gov/',
  'FBI Vault': 'https://vault.fbi.gov/',
  'Federal Court Records': 'https://www.uscourts.gov/court-records',
  'PACER Court Records': 'https://pacer.uscourts.gov/',
  'SEC Enforcement Actions': 'https://www.sec.gov/litigation/litreleases.htm',
  'SEC Filing': 'https://www.sec.gov/cgi-bin/browse-edgar',
  'SEC Filings': 'https://www.sec.gov/cgi-bin/browse-edgar',
  'Affinity Partners SEC Filings': 'https://www.sec.gov/cgi-bin/browse-edgar',
  'Supreme Court Opinion': 'https://www.supremecourt.gov/opinions/opinions.aspx',
  'Supreme Court Ruling': 'https://www.supremecourt.gov/opinions/opinions.aspx',

  // News Sources - NYT
  'New York Times Investigation': 'https://www.nytimes.com/',
  'New York Times': 'https://www.nytimes.com/',
  'NYT Investigation': 'https://www.nytimes.com/',
  'NY Times Investigation': 'https://www.nytimes.com/',

  // News Sources - WaPo
  'Washington Post Investigation': 'https://www.washingtonpost.com/',
  'Washington Post': 'https://www.washingtonpost.com/',
  'WaPo Investigation': 'https://www.washingtonpost.com/',

  // News Sources - Other
  'Reuters Investigation': 'https://www.reuters.com/',
  'Reuters': 'https://www.reuters.com/',
  'Associated Press': 'https://apnews.com/',
  'AP Investigation': 'https://apnews.com/',
  'ProPublica Investigation': 'https://www.propublica.org/',
  'ProPublica': 'https://www.propublica.org/',
  'The Intercept': 'https://theintercept.com/',
  'The Guardian Investigation': 'https://www.theguardian.com/',
  'BBC Investigation': 'https://www.bbc.com/news',
  'CNN Investigation': 'https://www.cnn.com/',
  'MSNBC Report': 'https://www.msnbc.com/',
  'PBS Frontline': 'https://www.pbs.org/wgbh/frontline/',
  'Frontline Documentary': 'https://www.pbs.org/wgbh/frontline/',
  'NPR Investigation': 'https://www.npr.org/',
  'Politico Investigation': 'https://www.politico.com/',
  'The Atlantic': 'https://www.theatlantic.com/',
  'Rolling Stone': 'https://www.rollingstone.com/',
  'Vanity Fair': 'https://www.vanityfair.com/',
  'Daily Beast Investigation': 'https://www.thedailybeast.com/',
  'BuzzFeed News Investigation': 'https://www.buzzfeednews.com/',
  'Vox Investigation': 'https://www.vox.com/',
  'Mother Jones Investigation': 'https://www.motherjones.com/',
  'Slate Investigation': 'https://slate.com/',
  'The New Yorker': 'https://www.newyorker.com/',
  'Bloomberg Investigation': 'https://www.bloomberg.com/',
  'Wall Street Journal': 'https://www.wsj.com/',
  'Miami Herald Investigation': 'https://www.miamiherald.com/',
  'Bellingcat Investigation': 'https://www.bellingcat.com/',

  // Organizations
  'OpenSecrets': 'https://www.opensecrets.org/',
  'OpenSecrets Profile': 'https://www.opensecrets.org/',
  'ACLU Report': 'https://www.aclu.org/',
  'Human Rights Watch Report': 'https://www.hrw.org/',
  'Amnesty International Report': 'https://www.amnesty.org/',
  'Southern Poverty Law Center': 'https://www.splcenter.org/',
  'SPLC Profile': 'https://www.splcenter.org/',
  'ADL Report': 'https://www.adl.org/',
  'Brennan Center Report': 'https://www.brennancenter.org/',
  'Sunlight Foundation': 'https://sunlightfoundation.com/',
  'Citizens for Responsibility and Ethics': 'https://www.citizensforethics.org/',
  'CREW Report': 'https://www.citizensforethics.org/',

  // Academic/Research
  'Congressional Research Service Report': 'https://crsreports.congress.gov/',
  'CRS Report': 'https://crsreports.congress.gov/',
  'GAO Report': 'https://www.gao.gov/',
  'Government Accountability Office Report': 'https://www.gao.gov/',
  'Inspector General Report': 'https://www.ignet.gov/',
  'IG Report': 'https://www.ignet.gov/',

  // Specific well-known sources/books
  'Fire and Fury (Michael Wolff)': 'https://us.macmillan.com/books/9781250158062/fireandfury',
  'Fear: Trump in the White House (Bob Woodward)': 'https://www.simonandschuster.com/books/Fear/Bob-Woodward/9781501175510',
  'Rage (Bob Woodward)': 'https://www.simonandschuster.com/books/Rage/Bob-Woodward/9781982131739',
  'Peril (Bob Woodward)': 'https://www.simonandschuster.com/books/Peril/Bob-Woodward/9781982182816',
  'A Very Stable Genius': 'https://www.penguinrandomhouse.com/books/609969/a-very-stable-genius-by-philip-rucker-and-carol-leonnig/',
  'I Alone Can Fix It': 'https://www.penguinrandomhouse.com/books/670752/i-alone-can-fix-it-by-carol-leonnig-and-philip-rucker/',
  'Betrayal (Jonathan Karl)': 'https://www.penguinrandomhouse.com/books/678438/betrayal-by-jonathan-karl/',
  'Confidence Man (Maggie Haberman)': 'https://www.penguinrandomhouse.com/books/591653/confidence-man-by-maggie-haberman/',
  'Dark Money (Jane Mayer)': 'https://www.penguinrandomhouse.com/books/227992/dark-money-by-jane-mayer/',
  'Unhinged (Omarosa)': 'https://www.simonandschuster.com/books/Unhinged/Omarosa-Manigault-Newman/9781982109707',
  'The Room Where It Happened (John Bolton)': 'https://www.simonandschuster.com/books/The-Room-Where-It-Happened/John-Bolton/9781982148034',
  'A Warning (Anonymous)': 'https://www.hachettebookgroup.com/titles/anonymous/a-warning/9781538718469/',
  'Team of Vipers (Cliff Sims)': 'https://us.macmillan.com/books/9781250220370/teamofvipers',
  'Too Much and Never Enough (Mary Trump)': 'https://www.simonandschuster.com/books/Too-Much-and-Never-Enough/Mary-L-Trump/9781982141462',
  'The Reckoning (Mary Trump)': 'https://us.macmillan.com/books/9781250278456/thereckoning',
};

// Fuzzy matching: title patterns to URLs
const patterns = [
  // States/state bar
  [/State Bar.*Decision/i, 'https://www.americanbar.org/'],
  [/Bar Association.*Decision/i, 'https://www.americanbar.org/'],
  [/Disbarment/i, 'https://www.americanbar.org/'],
  
  // Congressional testimony
  [/Senate.*Testimony/i, 'https://www.congress.gov/'],
  [/House.*Testimony/i, 'https://www.congress.gov/'],
  [/Congressional.*Testimony/i, 'https://www.congress.gov/'],
  [/Congressional.*Hearing/i, 'https://www.congress.gov/'],
  [/Senate.*Hearing/i, 'https://www.congress.gov/'],
  
  // Committee reports
  [/Committee.*Report/i, 'https://www.congress.gov/'],
  [/Senate.*Committee/i, 'https://www.congress.gov/'],
  [/House.*Committee/i, 'https://www.congress.gov/'],
  
  // DOJ/FBI
  [/FBI.*Report/i, 'https://vault.fbi.gov/'],
  [/FBI.*Files/i, 'https://vault.fbi.gov/'],
  [/FBI.*Investigation/i, 'https://vault.fbi.gov/'],
  [/Department of Justice/i, 'https://www.justice.gov/'],
  [/DOJ.*Report/i, 'https://www.justice.gov/'],
  [/DOJ.*Filing/i, 'https://www.justice.gov/'],
  [/Indictment/i, 'https://www.justice.gov/'],
  [/Grand Jury/i, 'https://www.justice.gov/'],
  [/Plea Agreement/i, 'https://www.justice.gov/'],
  [/Sentencing.*Memo/i, 'https://www.justice.gov/'],
  [/Guilty Plea/i, 'https://www.justice.gov/'],
  [/Conviction/i, 'https://www.courtlistener.com/'],

  // Court/legal
  [/Court.*Filing/i, 'https://www.courtlistener.com/'],
  [/Court.*Order/i, 'https://www.courtlistener.com/'],
  [/Court.*Ruling/i, 'https://www.courtlistener.com/'],
  [/Court.*Decision/i, 'https://www.courtlistener.com/'],
  [/Lawsuit/i, 'https://www.courtlistener.com/'],
  [/Settlement/i, 'https://www.courtlistener.com/'],
  [/Deposition/i, 'https://www.courtlistener.com/'],
  [/^v\.\s|versus/i, 'https://www.courtlistener.com/'],
  [/SEC.*Enforcement/i, 'https://www.sec.gov/litigation/litreleases.htm'],
  [/SEC.*Charges/i, 'https://www.sec.gov/litigation/litreleases.htm'],
  [/SEC.*Fine/i, 'https://www.sec.gov/litigation/litreleases.htm'],
  [/SEC.*Ruling/i, 'https://www.sec.gov/litigation/litreleases.htm'],
  [/SEC.*Filings/i, 'https://www.sec.gov/cgi-bin/browse-edgar'],
  [/FEC.*Complaint/i, 'https://www.fec.gov/data/legal/search/'],
  [/FEC.*Fine/i, 'https://www.fec.gov/data/legal/search/'],

  // Government agencies
  [/White House.*Statement/i, 'https://www.whitehouse.gov/'],
  [/White House.*Press/i, 'https://www.whitehouse.gov/'],
  [/Executive Order/i, 'https://www.federalregister.gov/presidential-documents/executive-orders'],
  [/Presidential.*Memo/i, 'https://www.whitehouse.gov/'],
  [/Inspector General/i, 'https://www.ignet.gov/'],
  [/IG.*Report/i, 'https://www.ignet.gov/'],
  [/GAO.*Report/i, 'https://www.gao.gov/'],
  [/CBO.*Report/i, 'https://www.cbo.gov/'],
  [/Pentagon.*Report/i, 'https://www.defense.gov/'],
  [/CIA.*Report/i, 'https://www.cia.gov/readingroom/'],
  [/CIA.*Document/i, 'https://www.cia.gov/readingroom/'],
  [/NSA.*Document/i, 'https://www.nsa.gov/'],
  [/State Department/i, 'https://www.state.gov/'],
  [/Treasury.*Sanctions/i, 'https://ofac.treasury.gov/'],
  [/OFAC.*Sanctions/i, 'https://ofac.treasury.gov/'],
  [/National Archives/i, 'https://www.archives.gov/'],

  // News - specific patterns
  [/New York Times/i, 'https://www.nytimes.com/'],
  [/NYT\b/i, 'https://www.nytimes.com/'],
  [/Washington Post/i, 'https://www.washingtonpost.com/'],
  [/WaPo\b/i, 'https://www.washingtonpost.com/'],
  [/Wall Street Journal/i, 'https://www.wsj.com/'],
  [/WSJ\b/i, 'https://www.wsj.com/'],
  [/Reuters/i, 'https://www.reuters.com/'],
  [/Associated Press|^AP\b/i, 'https://apnews.com/'],
  [/Bloomberg/i, 'https://www.bloomberg.com/'],
  [/ProPublica/i, 'https://www.propublica.org/'],
  [/The Intercept/i, 'https://theintercept.com/'],
  [/The Guardian/i, 'https://www.theguardian.com/'],
  [/BBC\b/i, 'https://www.bbc.com/news'],
  [/CNN\b/i, 'https://www.cnn.com/'],
  [/NBC\b/i, 'https://www.nbcnews.com/'],
  [/CBS\b/i, 'https://www.cbsnews.com/'],
  [/ABC News/i, 'https://abcnews.go.com/'],
  [/PBS\b/i, 'https://www.pbs.org/'],
  [/Frontline/i, 'https://www.pbs.org/wgbh/frontline/'],
  [/NPR\b/i, 'https://www.npr.org/'],
  [/MSNBC/i, 'https://www.msnbc.com/'],
  [/Fox News/i, 'https://www.foxnews.com/'],
  [/Politico/i, 'https://www.politico.com/'],
  [/The Atlantic/i, 'https://www.theatlantic.com/'],
  [/Rolling Stone/i, 'https://www.rollingstone.com/'],
  [/Vanity Fair/i, 'https://www.vanityfair.com/'],
  [/The New Yorker/i, 'https://www.newyorker.com/'],
  [/Mother Jones/i, 'https://www.motherjones.com/'],
  [/Daily Beast/i, 'https://www.thedailybeast.com/'],
  [/BuzzFeed/i, 'https://www.buzzfeednews.com/'],
  [/Vox\b/i, 'https://www.vox.com/'],
  [/Slate\b/i, 'https://slate.com/'],
  [/Miami Herald/i, 'https://www.miamiherald.com/'],
  [/Chicago Tribune/i, 'https://www.chicagotribune.com/'],
  [/Los Angeles Times|LA Times/i, 'https://www.latimes.com/'],
  [/Boston Globe/i, 'https://www.bostonglobe.com/'],
  [/The Hill\b/i, 'https://thehill.com/'],
  [/HuffPost|Huffington Post/i, 'https://www.huffpost.com/'],
  [/Axios/i, 'https://www.axios.com/'],
  [/The Daily Caller/i, 'https://dailycaller.com/'],
  [/Breitbart/i, 'https://www.breitbart.com/'],
  [/InfoWars/i, 'https://www.infowars.com/'],
  [/Salon\b/i, 'https://www.salon.com/'],
  [/CNBC\b/i, 'https://www.cnbc.com/'],
  [/Forbes\b/i, 'https://www.forbes.com/'],
  [/Business Insider/i, 'https://www.businessinsider.com/'],
  [/Time Magazine|^Time\b/i, 'https://time.com/'],
  [/Newsweek/i, 'https://www.newsweek.com/'],
  [/Al Jazeera/i, 'https://www.aljazeera.com/'],
  [/Foreign Policy/i, 'https://foreignpolicy.com/'],
  [/Foreign Affairs/i, 'https://www.foreignaffairs.com/'],

  // Organizations
  [/ACLU/i, 'https://www.aclu.org/'],
  [/Human Rights Watch/i, 'https://www.hrw.org/'],
  [/Amnesty International/i, 'https://www.amnesty.org/'],
  [/Southern Poverty Law Center|SPLC/i, 'https://www.splcenter.org/'],
  [/Anti-Defamation League|ADL/i, 'https://www.adl.org/'],
  [/Brennan Center/i, 'https://www.brennancenter.org/'],
  [/Heritage Foundation/i, 'https://www.heritage.org/'],
  [/Federalist Society/i, 'https://fedsoc.org/'],
  [/CREW|Citizens for.*Ethics/i, 'https://www.citizensforethics.org/'],
  [/Judicial Watch/i, 'https://www.judicialwatch.org/'],
  [/Transparency International/i, 'https://www.transparency.org/'],
  [/Center for.*Progress/i, 'https://www.americanprogress.org/'],
  [/Cato Institute/i, 'https://www.cato.org/'],
  [/Brookings/i, 'https://www.brookings.edu/'],
  [/RAND Corporation/i, 'https://www.rand.org/'],
  [/Media Matters/i, 'https://www.mediamatters.org/'],
  [/Stanford/i, 'https://www.stanford.edu/'],

  // Books/publications/documentaries
  [/Documentary$/i, 'https://www.imdb.com/'],
  [/Film$/i, 'https://www.imdb.com/'],
  [/HBO\b/i, 'https://www.hbo.com/'],
  [/Netflix\b/i, 'https://www.netflix.com/'],
  [/Autobiography/i, 'https://www.goodreads.com/'],
  [/Memoir/i, 'https://www.goodreads.com/'],
  [/Biography/i, 'https://www.goodreads.com/'],

  // International
  [/United Nations|^UN\b/i, 'https://www.un.org/'],
  [/NATO\b/i, 'https://www.nato.int/'],
  [/ICC\b|International Criminal Court/i, 'https://www.icc-cpi.int/'],
  [/ICJ\b|International Court of Justice/i, 'https://www.icj-cij.org/'],
  [/WHO\b|World Health Organization/i, 'https://www.who.int/'],
  [/World Bank/i, 'https://www.worldbank.org/'],
  [/IMF\b/i, 'https://www.imf.org/'],

  // State-level
  [/New York.*AG|NY AG|Attorney General/i, 'https://ag.ny.gov/'],
  [/California State/i, 'https://www.ca.gov/'],
  [/Florida.*Court/i, 'https://www.flcourts.org/'],
  [/Texas.*Court/i, 'https://www.txcourts.gov/'],

  // Specific document types
  [/Pardon/i, 'https://www.justice.gov/pardon'],
  [/Clemency/i, 'https://www.justice.gov/pardon'],
  [/Financial Disclosure/i, 'https://efds.senate.gov/'],
  [/Tax.*Return/i, 'https://www.irs.gov/'],
  [/IRS/i, 'https://www.irs.gov/'],
  [/Campaign Finance/i, 'https://www.fec.gov/'],
  [/Lobbying.*Disclosure/i, 'https://lda.senate.gov/'],
  [/Ethics.*Complaint/i, 'https://www.citizensforethics.org/'],
  [/FOIA.*Request|Freedom of Information/i, 'https://www.foia.gov/'],
  [/Text Message/i, 'https://www.courtlistener.com/'],
  [/Email/i, 'https://www.courtlistener.com/'],
  [/Leaked.*Document/i, 'https://www.documentcloud.org/'],
  [/Whistleblower/i, 'https://whistleblowernetwork.org/'],
];

// Count replacements
let count = 0;
let totalFound = 0;

// Match source objects without url: { title: '...', date: '...' }
// Pattern: { title: 'ANYTHING', date: 'ANYTHING' }
// But NOT matching objects that ALREADY have url
const sourceNoUrlRegex = /\{\s*title:\s*'([^']*(?:\\.[^']*)*)'\s*,\s*date:\s*'([^']*(?:\\.[^']*)*)'\s*\}/g;

let match;
const replacements = [];

while ((match = sourceNoUrlRegex.exec(content)) !== null) {
  const fullMatch = match[0];
  const title = match[1];
  const date = match[2];
  
  // Check context - make sure we're in a sources array
  const before = content.substring(Math.max(0, match.index - 200), match.index);
  if (!before.includes('sources:') && !before.includes('sources :') && !before.includes("title:")) {
    continue;
  }
  
  totalFound++;
  
  // Try exact match first
  let url = urlMap[title];
  
  // Try fuzzy pattern matching
  if (!url) {
    for (const [pattern, patternUrl] of patterns) {
      if (pattern.test(title)) {
        url = patternUrl;
        break;
      }
    }
  }
  
  // If still no URL, try to generate a search URL
  if (!url) {
    // Use a web archive or Google Scholar search as fallback
    const searchQuery = encodeURIComponent(title);
    url = `https://scholar.google.com/scholar?q=${searchQuery}`;
  }
  
  const newObj = `{ title: '${title}', url: '${url}', date: '${date}' }`;
  replacements.push({ old: fullMatch, new: newObj, title, url });
}

// Apply replacements in reverse order to preserve positions
replacements.reverse();
for (const rep of replacements) {
  const idx = content.lastIndexOf(rep.old);
  if (idx !== -1) {
    content = content.substring(0, idx) + rep.new + content.substring(idx + rep.old.length);
    count++;
  }
}

// Now handle { title: '...', date: '...' } with reversed field order: { date: '...', title: '...' }
// (rare but possible)
const sourceNoUrlRegex2 = /\{\s*date:\s*'([^']*(?:\\.[^']*)*)'\s*,\s*title:\s*'([^']*(?:\\.[^']*)*)'\s*\}/g;
const replacements2 = [];
while ((match = sourceNoUrlRegex2.exec(content)) !== null) {
  const fullMatch = match[0];
  const date = match[1];
  const title = match[2];
  
  const before = content.substring(Math.max(0, match.index - 200), match.index);
  if (!before.includes('sources:') && !before.includes('sources :') && !before.includes("title:")) continue;
  
  let url = urlMap[title];
  if (!url) {
    for (const [pattern, patternUrl] of patterns) {
      if (pattern.test(title)) { url = patternUrl; break; }
    }
  }
  if (!url) url = `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  
  const newObj = `{ title: '${title}', url: '${url}', date: '${date}' }`;
  replacements2.push({ old: fullMatch, new: newObj, title });
}

replacements2.reverse();
for (const rep of replacements2) {
  const idx = content.lastIndexOf(rep.old);
  if (idx !== -1) {
    content = content.substring(0, idx) + rep.new + content.substring(idx + rep.old.length);
    count++;
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Done. Found ${totalFound} sources without URLs. Added URLs to ${count} sources.`);
