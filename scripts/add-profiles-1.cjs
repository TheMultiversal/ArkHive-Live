const fs = require('fs');
const indDir = 'src/data/individuals';
const corpFile = 'src/data/corporations/index.ts';

function addToIndFile(letter, slug, profileText) {
  const fp = indDir + '/' + letter + '.ts';
  let c = fs.readFileSync(fp, 'utf8');
  if (c.includes("'" + slug + "'")) {
    console.log(letter + '.ts: ' + slug + ' already exists, skipping');
    return;
  }
  c = c.replace(/\n};\s*\r?\nexport default profiles;/, '\n' + profileText + '\n};\n\nexport default profiles;');
  fs.writeFileSync(fp, c);
  console.log(letter + '.ts: ' + slug + ' ADDED');
}

function addToCorp(slug, profileText) {
  let c = fs.readFileSync(corpFile, 'utf8');
  if (c.includes("'" + slug + "'")) {
    console.log('corporations: ' + slug + ' already exists, skipping');
    return;
  }
  c = c.replace(/\n};\s*\r?\nexport default corporations;/, '\n' + profileText + '\n};\n\nexport default corporations;');
  fs.writeFileSync(corpFile, c);
  console.log('corporations: ' + slug + ' ADDED');
}

// === DENNIS LEVINE (d.ts) ===
addToIndFile('d', 'dennis-levine', `  'dennis-levine': {
    name: 'Dennis Levine',
    title: 'Convicted Insider Trader; Investment Banker Whose Arrest Unraveled the 1980s Wall Street Scandals',
    role: 'Managing Director, Drexel Burnham Lambert (previously Merrill Lynch, Smith Barney, Lehman Brothers)',
    riskLevel: 'high',
    description: 'Dennis Levine was a managing director at Drexel Burnham Lambert whose arrest in May 1986 triggered the chain of events that brought down the largest insider trading conspiracy in Wall Street history. Starting in 1978 while at Smith Barney, Levine used secret accounts at Bank Leu in the Bahamas to trade on inside information about pending mergers and acquisitions, amassing $12.6 million in illegal profits from 54 stocks over eight years. An anonymous letter from a Merrill Lynch compliance officer in Caracas tipped off authorities. Levine immediately cooperated with the SEC and U.S. Attorney, implicating Ivan Boesky, who in turn brought down Michael Milken and Drexel Burnham Lambert. Levine pled guilty to four felonies and was sentenced to two years in prison.',
    birthDate: '1952',
    birthPlace: 'Queens, New York City, USA',
    education: ['Baruch College, City University of New York (BBA)', 'Baruch College (MBA)'],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Managing Director, M&A Department (1985-1986)', type: 'corporation' },
      { name: 'Merrill Lynch', role: 'Managing Director (prior to Drexel)', type: 'corporation' },
      { name: 'Smith Barney', role: 'Investment Banker (1978-1981)', type: 'corporation' },
      { name: 'Lehman Brothers', role: 'Investment Banker (1981-1984)', type: 'corporation' },
    ],
    controversies: [
      'Operated secret trading accounts at Bank Leu in Nassau, Bahamas from 1978 to 1986',
      'Earned $12.6 million in illegal profits from insider trading on 54 stocks over 8 years',
      'Tipped off Ivan Boesky with inside information about pending M&A deals',
      'His cooperation with authorities triggered the unraveling of the entire 1980s insider trading conspiracy',
      'His arrest was the first domino: Levine gave up Boesky, Boesky gave up Milken, Milken brought down Drexel',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Securities Fraud: Insider trading on material nonpublic information from 54 stocks', category: 'Federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax Evasion: Failure to report illegal trading profits', category: 'Federal' },
      { statute: '18 U.S.C. 1621', description: 'Perjury: False statements to SEC', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1978', event: 'Opens secret trading account at Bank Leu in the Bahamas; begins insider trading' },
      { date: '1985', event: 'Joins Drexel Burnham Lambert as Managing Director of M&A' },
      { date: 'May 1985', event: 'Anonymous letter from Caracas tips off Merrill Lynch compliance about suspicious trades linked to his ring' },
      { date: 'May 12, 1986', event: 'Arrested by SEC; charged with insider trading on 54 stocks totaling $12.6M in illegal profits' },
      { date: 'June 5, 1986', event: 'Pleads guilty to four felonies; begins cooperating with government, implicating Ivan Boesky' },
      { date: '1991', event: 'Sentenced to 2 years in federal prison; fined $362,000' },
    ],
    socialMedia: [],
    sources: [
      { title: 'SEC v. Dennis Levine, Litigation Release (1986)', url: 'https://www.sec.gov/litigation/litreleases/1986/lr11105.htm', date: '1986' },
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Received insider tips from Levine; subsequently exposed by Levine cooperation', href: '/entities/individuals/ivan-boesky' },
      { name: 'Michael Milken', relationship: 'Ultimately brought down through chain of cooperation starting with Levine', href: '/entities/individuals/michael-milken' },
    ],
  },`);

// === MARTIN SIEGEL (m.ts) ===
addToIndFile('m', 'martin-siegel', `  'martin-siegel': {
    name: 'Martin Siegel',
    title: 'Convicted Insider Trader; Former Star M&A Banker at Kidder, Peabody & Co.',
    role: 'Head of Mergers & Acquisitions, Kidder Peabody; Later Managing Director, Drexel Burnham Lambert',
    riskLevel: 'high',
    description: 'Martin Siegel was one of Wall Street\\'s most prominent mergers-and-acquisitions bankers in the 1980s, first at Kidder, Peabody & Co. and later at Drexel Burnham Lambert. He secretly sold inside information about pending mergers to arbitrageur Ivan Boesky in exchange for briefcases stuffed with cash, receiving at least $700,000 in payments. Siegel provided advance notice of major deals including Martin Marietta, Carnation Company, and other Kidder Peabody advisory clients. When caught as part of the unraveling 1980s insider trading scandal, Siegel cooperated extensively with prosecutors, leading to the $25.3 million SEC settlement against Kidder Peabody. He pleaded guilty to insider trading conspiracy and tax evasion in February 1987 and was sentenced to two months in prison.',
    birthDate: '1948',
    birthPlace: 'United States',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'Kidder, Peabody & Co.', role: 'Head of Mergers & Acquisitions (1970s-1986)', type: 'corporation' },
      { name: 'Drexel Burnham Lambert', role: 'Managing Director (1986-1987)', type: 'corporation' },
    ],
    controversies: [
      'Sold inside M&A information to Ivan Boesky in exchange for briefcases filled with cash (at least $700,000)',
      'Provided advance notice of Martin Marietta, Carnation Company, and other pending Kidder Peabody deals',
      'His cooperation exposed insider trading at Kidder Peabody and led to $25.3M SEC settlement against the firm',
      'Received remarkably lenient 2-month prison sentence for extensive cooperation',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Selling material nonpublic M&A information for cash', category: 'Federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax Evasion: Failure to report cash payments from Boesky', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1984-1986', event: 'Passes inside information about pending Kidder Peabody M&A deals to Ivan Boesky in exchange for cash payments' },
      { date: '1986', event: 'Leaves Kidder Peabody to join Drexel Burnham Lambert' },
      { date: 'February 13, 1987', event: 'Pleads guilty to insider trading conspiracy and tax evasion; cooperates extensively' },
      { date: '1987', event: 'His cooperation leads to $25.3M SEC settlement against Kidder, Peabody & Co.' },
      { date: '1990', event: 'Sentenced to 2 months in prison for his cooperation' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Paid Siegel cash for inside M&A information', href: '/entities/individuals/ivan-boesky' },
    ],
  },`);

// === ROBERT FREEMAN (r.ts) ===
addToIndFile('r', 'robert-freeman', `  'robert-freeman': {
    name: 'Robert Freeman',
    title: 'Convicted Insider Trader; Former Head of Arbitrage at Goldman Sachs',
    role: 'Head of Risk Arbitrage, Goldman Sachs & Co.',
    riskLevel: 'high',
    description: 'Robert Freeman was the head of Goldman Sachs\\' risk arbitrage department who pleaded guilty to insider trading in August 1989. Freeman traded on material nonpublic information about pending block trades and corporate transactions, most notably related to the Beatrice Companies leveraged buyout. His conviction was the only insider trading case that directly reached Goldman Sachs during the 1980s scandals. He was sentenced to four months in federal prison and fined $1.1 million. His case demonstrated that the insider trading corruption extended to the very highest echelons of Wall Street\\'s most prestigious firms.',
    birthDate: '1942',
    birthPlace: 'United States',
    education: ['Dartmouth College', 'Columbia Business School (MBA)'],
    affiliations: [
      { name: 'Goldman Sachs', role: 'Head of Risk Arbitrage Department (1970s-1989)', type: 'corporation' },
    ],
    controversies: [
      'Traded on inside information about Beatrice Companies leveraged buyout and other pending transactions',
      'Only insider trading conviction to directly reach Goldman Sachs during the 1980s scandals',
      'His arrest damaged Goldman Sachs\\' reputation at the height of the insider trading prosecutions',
    ],
    charges: [
      { statute: '18 U.S.C. 1341 (Mail Fraud)', description: 'Insider trading on advance knowledge of Beatrice Companies LBO and other block trades', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: 'April 1987', event: 'Arrested at Goldman Sachs offices by federal agents' },
      { date: 'August 1989', event: 'Pleads guilty to one count of mail fraud related to insider trading' },
      { date: '1990', event: 'Sentenced to 4 months in federal prison; fined $1.1 million' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Part of the broader 1980s insider trading network', href: '/entities/individuals/ivan-boesky' },
    ],
  },`);

// === BOYD JEFFERIES (b.ts) ===
addToIndFile('b', 'boyd-jefferies', `  'boyd-jefferies': {
    name: 'Boyd Jefferies',
    title: 'Convicted Securities Violator; Founder of Jefferies & Company',
    role: 'Founder and Chairman, Jefferies & Company',
    riskLevel: 'high',
    description: 'Boyd Jefferies was the founder and chairman of Jefferies & Company, a prominent securities firm specializing in block trading. He pleaded guilty in April 1988 to two felony counts of securities violations for helping Ivan Boesky illegally "park" stock, a practice of secretly holding shares for another party to conceal true ownership and evade SEC disclosure requirements. Jefferies also assisted in market manipulation. He cooperated with prosecutors and was barred from the securities industry. His case illustrated how the insider trading conspiracy required the complicity of brokers and intermediaries, not just the traders themselves.',
    birthDate: '1930',
    birthPlace: 'United States',
    deathDate: 'February 19, 2007',
    education: [],
    affiliations: [
      { name: 'Jefferies & Company', role: 'Founder and Chairman', type: 'corporation' },
    ],
    controversies: [
      'Helped Ivan Boesky illegally park stock to conceal ownership and evade SEC disclosure requirements',
      'Assisted in market manipulation schemes connected to the broader insider trading conspiracy',
      'Cooperated with prosecutors after pleading guilty; barred from the securities industry',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Securities violations: Illegal stock parking and market manipulation for Ivan Boesky', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1984-1986', event: 'Helps Ivan Boesky illegally park stock and conceal ownership positions' },
      { date: 'April 1988', event: 'Pleads guilty to two felony counts of securities violations' },
      { date: '1988', event: 'Barred from the securities industry; cooperates with prosecutors' },
      { date: 'February 19, 2007', event: 'Dies at age 77' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Illegally parked stock and assisted market manipulation for Boesky', href: '/entities/individuals/ivan-boesky' },
    ],
  },`);

// === PAUL BILZERIAN (p.ts) ===
addToIndFile('p', 'paul-bilzerian', `  'paul-bilzerian': {
    name: 'Paul Bilzerian',
    title: 'Convicted Corporate Raider; Securities Fraud During 1980s Hostile Takeover Wave',
    role: 'Corporate Raider; Chairman of Singer Company Board',
    riskLevel: 'high',
    description: 'Paul Bilzerian was a prominent 1980s corporate raider who was convicted of securities fraud and conspiracy for concealing massive stock positions from the SEC during hostile takeover attempts of Singer Company and Cluett, Peabody & Co. He was convicted after a jury trial in June 1989 on nine counts of securities fraud, conspiracy, and tax fraud. He was sentenced to four years in federal prison and ordered to disgorge $33 million in illegal profits. Bilzerian repeatedly evaded the disgorgement judgment for decades, claiming bankruptcy while maintaining a lavish lifestyle. He is the father of social media personality Dan Bilzerian.',
    birthDate: '1950',
    birthPlace: 'United States',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'SEC', role: 'Subject of enforcement actions for concealing stock positions', type: 'agency' },
    ],
    controversies: [
      'Concealed massive stock purchases from SEC during hostile takeover bids for Singer Company and Cluett, Peabody & Co.',
      'Convicted after jury trial on 9 counts of securities fraud, conspiracy, and tax fraud',
      'Ordered to disgorge $33 million but evaded payment for decades while maintaining lavish lifestyle',
      'Declared bankruptcy multiple times while living in a $4 million Tampa mansion',
      'Father of social media celebrity Dan Bilzerian, whose wealth origins have been questioned',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Securities Fraud (9 counts): Concealing stock positions during hostile takeover attempts', category: 'Federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy to make false statements to the SEC', category: 'Federal' },
      { statute: '26 U.S.C. 7201', description: 'Tax Fraud', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1987-1988', event: 'Mounts hostile takeover attempts of Singer Company and Cluett, Peabody & Co. while concealing stock positions from SEC' },
      { date: 'June 1989', event: 'Convicted by jury on 9 counts of securities fraud, conspiracy, and tax fraud' },
      { date: '1989', event: 'Sentenced to 4 years in federal prison; ordered to disgorge $33 million' },
      { date: '1993', event: 'Files for bankruptcy, begins decades-long evasion of disgorgement judgment' },
    ],
    socialMedia: [],
    sources: [
      { title: 'United States v. Paul Bilzerian, 926 F.2d 1285 (2d Cir. 1991)', url: 'https://law.justia.com/cases/federal/appellate-courts/F2/926/1285/399267/', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [],
  },`);

// === JAMES SHERWIN (j.ts) ===
addToIndFile('j', 'james-sherwin', `  'james-sherwin': {
    name: 'James Sherwin',
    title: 'Convicted Stock Manipulator; Vice Chairman of GAF Corporation',
    role: 'Vice Chairman, GAF Corporation',
    riskLevel: 'medium',
    description: 'James Sherwin was the vice chairman of GAF Corporation who was convicted of manipulating GAF\\'s stock price during a hostile takeover attempt of Union Carbide in the mid-1980s. Sherwin directed brokers to make artificial trades to inflate GAF\\'s stock price, creating a false impression of market demand. The case required three trials (two ended in mistrials) before a jury convicted Sherwin in January 1990 of stock manipulation. He was sentenced to six months in prison. The case demonstrated how stock manipulation was used as a tool in the corporate takeover wars of the 1980s.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'GAF Corporation', role: 'Vice Chairman', type: 'corporation' },
    ],
    controversies: [
      'Directed artificial trades to inflate GAF Corporation stock price during Union Carbide takeover attempt',
      'Required three trials before conviction (two prior mistrials)',
      'Case demonstrated how stock manipulation was integral to 1980s corporate raider tactics',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Stock Manipulation: Directing artificial trades to inflate GAF stock price', category: 'Federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy: Stock manipulation during Union Carbide takeover attempt', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1986-1987', event: 'Directs artificial trades to inflate GAF Corporation stock during Union Carbide takeover attempt' },
      { date: '1988', event: 'First trial ends in mistrial' },
      { date: '1989', event: 'Second trial ends in mistrial' },
      { date: 'January 1990', event: 'Third trial results in conviction for stock manipulation and conspiracy' },
      { date: '1990', event: 'Sentenced to 6 months in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times: GAF Official Convicted of Fraud (1990)', url: 'https://www.nytimes.com/1990/01/24/business/gaf-official-convicted-of-fraud.html', date: '1990' },
    ],
    aliases: [],
    knownAssociates: [],
  },`);

// === SALIM B. LEWIS (s.ts) ===
addToIndFile('s', 'salim-b-lewis', `  'salim-b-lewis': {
    name: 'Salim B. Lewis',
    title: 'Convicted Stock Manipulator; Head of S.B. Lewis & Company',
    role: 'Principal, S.B. Lewis & Company',
    riskLevel: 'medium',
    description: 'Salim B. Lewis (known as Sandy Lewis) was the head of S.B. Lewis & Company, a Wall Street brokerage firm. He pleaded guilty in October 1990 to manipulating the stock price of Fireman\\'s Fund Insurance to benefit his firm\\'s trading positions. Lewis was fined $250,000 and placed on probation. He was permanently banned from the securities industry. His father, Salim L. Lewis (known as Cy Lewis), had been the managing partner of Bear Stearns. The younger Lewis\\'s conviction was part of the broader wave of 1980s financial crime prosecutions that reshaped Wall Street oversight.',
    birthDate: '1940',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'S.B. Lewis & Company', role: 'Founder and Principal', type: 'corporation' },
    ],
    controversies: [
      'Manipulated stock price of Fireman\\'s Fund Insurance to benefit trading positions',
      'Permanently banned from the securities industry after conviction',
      'Son of Bear Stearns managing partner Cy Lewis; represented fall of Wall Street dynasty',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Stock Manipulation: Artificially inflating Fireman\\'s Fund Insurance stock price', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980s', event: 'Manipulates Fireman\\'s Fund Insurance stock to benefit trading positions' },
      { date: 'October 1990', event: 'Pleads guilty to stock manipulation; fined $250,000; placed on probation' },
      { date: '1990', event: 'Permanently banned from the securities industry' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times: Sandy Lewis Pleads Guilty (1990)', url: 'https://www.nytimes.com/1990/10/05/business/sandy-lewis-pleads-guilty.html', date: '1990' },
    ],
    aliases: ['Sandy Lewis'],
    knownAssociates: [],
  },`);

// === CORPORATIONS ===

// Drexel Burnham Lambert
addToCorp('drexel-burnham-lambert', `  'drexel-burnham-lambert': {
    id: 'drexel-burnham-lambert',
    slug: 'drexel-burnham-lambert',
    name: 'Drexel Burnham Lambert Inc.',
    type: 'corporation',
    description: 'Fifth-largest U.S. investment bank destroyed by the 1980s insider trading scandal. Center of Michael Milken\\'s junk bond empire. Pled guilty to 6 felonies, fined $650M, filed bankruptcy in 1990 destroying 10,000+ jobs.',
    role: 'Investment Banking, Junk Bond Underwriting',
    investigationCount: 1,
    riskLevel: 'extreme',
  },`);

// Kidder, Peabody & Co.
addToCorp('kidder-peabody', `  'kidder-peabody': {
    id: 'kidder-peabody',
    slug: 'kidder-peabody',
    name: 'Kidder, Peabody & Co.',
    type: 'corporation',
    description: 'Major Wall Street investment bank implicated in 1980s insider trading through Martin Siegel. Paid $25.3M SEC settlement. Reputation destroyed; sold to PaineWebber in 1994. Ceased to exist as independent entity.',
    role: 'Investment Banking, Mergers & Acquisitions',
    investigationCount: 1,
    riskLevel: 'high',
  },`);

console.log('\nDone! All profiles added.');
