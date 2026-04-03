const fs = require('fs');
const indDir = 'src/data/individuals';

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

// === ROBERT WILKIS (r.ts) ===
addToIndFile('r', 'robert-wilkis', `  'robert-wilkis': {
    name: 'Robert Wilkis',
    title: 'Convicted Insider Trader; Lazard Freres Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Lazard Freres & Co.',
    riskLevel: 'high',
    description: 'Robert Wilkis was an investment banker at Lazard Freres who was a core member of Dennis Levine\\'s insider trading ring during the 1980s. A close personal friend of Levine since business school, Wilkis passed material nonpublic information about Lazard\\'s pending M&A transactions to Levine, who traded on the tips through secret Bahamian bank accounts. Wilkis also maintained his own secret offshore trading account. When Levine was caught in 1986, Wilkis was swept up in the resulting prosecutions. He pleaded guilty to insider trading conspiracy and was sentenced to one year and one day in federal prison.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'Lazard Freres & Co.', role: 'Investment Banker, M&A Department', type: 'corporation' },
    ],
    controversies: [
      'Core member of Dennis Levine\\'s insider trading ring; passed M&A information from Lazard Freres deals',
      'Maintained his own secret offshore trading account for insider trading profits',
      'His participation showed the conspiracy penetrated multiple elite Wall Street firms simultaneously',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic M&A information to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes inside M&A information from Lazard Freres to Dennis Levine as part of insider trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy after Levine\\'s arrest and cooperation' },
      { date: '1987', event: 'Sentenced to 1 year and 1 day in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Close friend and ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
    ],
  },`);

// === IRA SOKOLOW (i.ts) ===
addToIndFile('i', 'ira-sokolow', `  'ira-sokolow': {
    name: 'Ira Sokolow',
    title: 'Convicted Insider Trader; Shearson Lehman Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Shearson Lehman Brothers',
    riskLevel: 'high',
    description: 'Ira Sokolow was an investment banker at Shearson Lehman Brothers who participated in Dennis Levine\\'s insider trading ring during the 1980s. Sokolow provided Levine with material nonpublic information about pending Shearson Lehman M&A transactions, which Levine traded on through secret Bahamian bank accounts. When Levine was caught and cooperated with prosecutors in 1986, Sokolow was identified and prosecuted. He pleaded guilty to insider trading conspiracy and was sentenced to one year and one day in federal prison.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Shearson Lehman Brothers', role: 'Investment Banker, M&A Department', type: 'corporation' },
    ],
    controversies: [
      'Member of Dennis Levine\\'s insider trading ring; fed him deal information from Shearson Lehman',
      'Provided nonpublic M&A intelligence that Levine traded on through secret offshore accounts',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic M&A information to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Provides inside M&A information from Shearson Lehman to Dennis Levine as part of trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy' },
      { date: '1987', event: 'Sentenced to 1 year and 1 day in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
    ],
  },`);

// === ILAN REICH (i.ts) ===
addToIndFile('i', 'ilan-reich', `  'ilan-reich': {
    name: 'Ilan Reich',
    title: 'Convicted Insider Trader; Attorney at Wachtell, Lipton, Rosen & Katz Who Betrayed Attorney-Client Privilege',
    role: 'Associate Attorney, Wachtell, Lipton, Rosen & Katz',
    riskLevel: 'high',
    description: 'Ilan Reich was an associate attorney at Wachtell, Lipton, Rosen & Katz, one of the most prestigious M&A law firms in the world, who betrayed attorney-client privilege by passing inside information about his firm\\'s pending M&A deals to Dennis Levine. Reich was a member of Levine\\'s insider trading ring and provided advance notice of major corporate transactions that Wachtell Lipton was advising on. His participation was deeply shocking to the legal profession because it demonstrated that the 1980s insider trading conspiracy had penetrated not just investment banks but Wall Street\\'s top law firms. Reich pleaded guilty to insider trading conspiracy and was sentenced to one year and one day in federal prison.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Wachtell, Lipton, Rosen & Katz', role: 'Associate Attorney, M&A Practice', type: 'corporation' },
    ],
    controversies: [
      'Betrayed attorney-client privilege by passing inside M&A information from one of America\\'s most prestigious law firms to Dennis Levine',
      'His conviction demonstrated the corruption penetrated Wall Street\\'s top law firms, not just banks',
      'Deeply shocking to the legal profession; undermined trust in attorney-client confidentiality',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic M&A information from law firm clients to Dennis Levine', category: 'Federal' },
      { statute: 'Breach of fiduciary duty', description: 'Violation of attorney-client privilege by disclosing confidential client deal information for illegal trading', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes confidential M&A client information from Wachtell Lipton to Dennis Levine, betraying attorney-client privilege' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy' },
      { date: '1987', event: 'Sentenced to 1 year and 1 day in federal prison' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Ringleader who recruited Reich into the insider trading ring', href: '/entities/individuals/dennis-levine' },
    ],
  },`);

// === DAVID BROWN (d.ts) ===
addToIndFile('d', 'david-brown-goldman', `  'david-brown-goldman': {
    name: 'David Brown',
    title: 'Convicted Insider Trader; Goldman Sachs Investment Banker in the Dennis Levine Ring',
    role: 'Investment Banker, Goldman Sachs & Co.',
    riskLevel: 'high',
    description: 'David Brown was a Goldman Sachs investment banker who participated in Dennis Levine\\'s insider trading ring during the 1980s. Brown shared nonpublic transaction details from Goldman Sachs deals with Levine, who traded on the information through secret offshore accounts. His participation meant that Goldman Sachs had two employees implicated in the scandal (Brown in the Levine ring, Robert Freeman in the Boesky network), demonstrating that even Wall Street\\'s most prestigious firm was deeply penetrated by the corruption. Brown pleaded guilty and cooperated with prosecutors.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Goldman Sachs', role: 'Investment Banker', type: 'corporation' },
    ],
    controversies: [
      'Member of Dennis Levine\\'s insider trading ring at Goldman Sachs',
      'Goldman Sachs had two separate employees (Brown and Robert Freeman) implicated in the scandal',
      'Shared nonpublic deal information that was traded on through secret offshore accounts',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b), SEC Rule 10b-5', description: 'Insider Trading Conspiracy: Passing material nonpublic transaction information from Goldman Sachs to Dennis Levine', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1980-1986', event: 'Passes inside deal information from Goldman Sachs to Dennis Levine as member of insider trading ring' },
      { date: '1986', event: 'Pleads guilty to insider trading conspiracy and cooperates with prosecutors' },
    ],
    socialMedia: [],
    sources: [
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Dennis Levine', relationship: 'Ringleader of the insider trading ring', href: '/entities/individuals/dennis-levine' },
      { name: 'Robert Freeman', relationship: 'Fellow Goldman Sachs employee also convicted in the scandal (separate network)', href: '/entities/individuals/robert-freeman' },
    ],
  },`);

// === LISA ANN JONES (l.ts) ===
addToIndFile('l', 'lisa-ann-jones', `  'lisa-ann-jones': {
    name: 'Lisa Ann Jones',
    title: 'Convicted Drexel Burnham Trader; Lied to SEC About Michael Milken\\'s Criminal Activities',
    role: 'Trader, Drexel Burnham Lambert High-Yield Bond Department (Beverly Hills)',
    riskLevel: 'medium',
    description: 'Lisa Ann Jones was a trader in Michael Milken\\'s high-yield bond department at Drexel Burnham Lambert\\'s Beverly Hills office. She pleaded guilty to perjury for lying to the SEC about Milken\\'s illegal activities, including secret arrangements to guarantee Ivan Boesky against losses on stock positions. Jones\\'s testimony was critical to establishing that Milken\\'s operation was not a solo endeavor but a systematic fraud enterprise with willing participants who actively concealed criminal conduct from regulators.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Trader, Michael Milken\\'s High-Yield Bond Department, Beverly Hills', type: 'corporation' },
    ],
    controversies: [
      'Lied to SEC about Milken\\'s illegal activities including secret guarantee arrangements with Boesky',
      'Her conviction proved Milken\\'s fraud was an organized enterprise with willing participants, not a solo act',
      'Active participant in concealing criminal conduct from federal regulators',
    ],
    charges: [
      { statute: '18 U.S.C. 1621', description: 'Perjury: Lying to SEC about Michael Milken\\'s criminal activities', category: 'Federal' },
      { statute: '18 U.S.C. 1505', description: 'Obstruction of Justice: Concealing evidence of securities fraud from SEC investigators', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1983-1989', event: 'Works as trader in Milken\\'s Beverly Hills high-yield bond department' },
      { date: '1989', event: 'Pleads guilty to perjury for lying to SEC about Milken\\'s illegal activities' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Connie Bruck, The Predators\\' Ball (1989)', url: 'https://www.penguinrandomhouse.com/books/331426/the-predators-ball-by-connie-bruck/', date: '1989' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Milken', relationship: 'Direct supervisor; ran the criminal enterprise she lied to protect', href: '/entities/individuals/michael-milken' },
    ],
  },`);

// === BRUCE LEE NEWBERG (b.ts) ===
addToIndFile('b', 'bruce-lee-newberg', `  'bruce-lee-newberg': {
    name: 'Bruce Lee Newberg',
    title: 'Convicted Drexel Burnham Trader; Participated in Michael Milken\\'s Racketeering Enterprise',
    role: 'Trader, Drexel Burnham Lambert High-Yield Bond Department (Beverly Hills)',
    riskLevel: 'high',
    description: 'Bruce Lee Newberg was a trader who worked directly with Michael Milken in Drexel Burnham Lambert\\'s high-yield bond department in Beverly Hills. He was convicted of racketeering and securities fraud for his role in illegal stock parking and other fraudulent schemes orchestrated from Milken\\'s department. Newberg\\'s conviction was significant because it demonstrated that the criminal conduct in the Beverly Hills office was not limited to Milken but was an organized enterprise with multiple active participants.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Trader, Michael Milken\\'s High-Yield Bond Department, Beverly Hills', type: 'corporation' },
    ],
    controversies: [
      'Convicted of racketeering and fraud for illegal stock parking and other schemes in Milken\\'s operation',
      'His conviction proved Milken\\'s department was a systematic criminal enterprise, not one man acting alone',
      'Participated in concealing stock ownership and manipulating markets at Milken\\'s direction',
    ],
    charges: [
      { statute: '18 U.S.C. 1961-1968 (RICO)', description: 'Racketeering: Participation in pattern of criminal activity in Milken\\'s junk bond operation', category: 'Federal' },
      { statute: '15 U.S.C. 78j(b)', description: 'Securities Fraud: Illegal stock parking and market manipulation', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1984-1989', event: 'Participates in illegal stock parking and fraudulent schemes in Milken\\'s Beverly Hills operation' },
      { date: '1990', event: 'Convicted of racketeering and securities fraud' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Jesse Kornbluth, Highly Confident (1992)', url: 'https://archive.org/details/highlyconfidentc00korn', date: '1992' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Michael Milken', relationship: 'Direct supervisor who orchestrated the criminal enterprise', href: '/entities/individuals/michael-milken' },
    ],
  },`);

// === RICHARD WIGTON (r.ts) ===
addToIndFile('r', 'richard-wigton', `  'richard-wigton': {
    name: 'Richard Wigton',
    title: 'Accused Insider Trader; Kidder Peabody Arbitrage Head Whose Charges Were Dropped',
    role: 'Head of Arbitrage, Kidder, Peabody & Co.',
    riskLevel: 'medium',
    description: 'Richard Wigton was the head of the arbitrage department at Kidder, Peabody & Co. who became one of the most visible casualties of the 1980s insider trading prosecutions when he was dramatically arrested on the trading floor by federal agents in February 1987. He was handcuffed and perp-walked past his colleagues in a scene designed for maximum public humiliation by U.S. Attorney Rudolph Giuliani\\'s office. The charges against Wigton were dropped in May 1989 when prosecutors determined their evidence was insufficient. His case became the most prominent example of prosecutorial overreach during the scandal, but also raises uncomfortable questions about whether dismissed charges equate to innocence, or whether a guilty participant merely benefited from insufficient evidence. His career was destroyed regardless of the outcome.',
    birthDate: 'Unknown',
    birthPlace: 'United States',
    education: [],
    affiliations: [
      { name: 'Kidder, Peabody & Co.', role: 'Head of Arbitrage Department', type: 'corporation' },
    ],
    controversies: [
      'Dramatically arrested on Kidder Peabody trading floor; handcuffed and perp-walked past colleagues in February 1987',
      'Charges dropped May 1989 due to insufficient evidence; career destroyed regardless',
      'Case became symbol of Giuliani\\'s aggressive and arguably abusive prosecutorial tactics',
      'Raises unresolved question of whether dismissal equated to innocence or merely insufficient proof',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Insider Trading Conspiracy (DROPPED): Charges dropped May 1989 for insufficient evidence', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: 'February 12, 1987', event: 'Arrested on the Kidder Peabody trading floor by federal agents; handcuffed and perp-walked in front of colleagues' },
      { date: 'May 1989', event: 'All charges dropped by prosecutors due to insufficient evidence' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times: Wall Street Figure Is Arrested (1987)', url: 'https://www.nytimes.com/1987/02/13/business/wall-street-figure-is-arrested.html', date: '1987' },
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: [],
    knownAssociates: [],
  },`);

// === JOHN MULHEREN (j.ts) ===
addToIndFile('j', 'john-mulheren', `  'john-mulheren': {
    name: 'John Mulheren',
    title: 'Acquitted on Appeal; Jamie Securities Head Convicted Then Freed in 1980s Insider Trading Scandal',
    role: 'Chairman, Jamie Securities Co.',
    riskLevel: 'high',
    description: 'John A. Mulheren Jr. was the head of Jamie Securities and a close associate of Ivan Boesky who was convicted of conspiracy and stock manipulation for artificially propping up stock prices at Boesky\\'s direction. His case took a dramatic and bizarre turn when he was arrested while allegedly driving to Boesky\\'s home with a loaded assault rifle, apparently intending to kill the man who had betrayed him to prosecutors. Mulheren\\'s conviction was overturned on appeal by the Second Circuit Court of Appeals in 1991, which found insufficient evidence that his trades were manipulative rather than legitimate market activity. His acquittal on appeal represents another gap in the accountability record of the 1980s scandals.',
    birthDate: 'October 13, 1949',
    birthPlace: 'United States',
    deathDate: 'June 18, 2003',
    education: [],
    affiliations: [
      { name: 'Jamie Securities Co.', role: 'Founder and Chairman', type: 'corporation' },
    ],
    controversies: [
      'Convicted of conspiracy and stock manipulation for propping up prices at Boesky\\'s direction',
      'Arrested while allegedly driving to Boesky\\'s home with a loaded assault rifle after being betrayed',
      'Conviction overturned on appeal by Second Circuit in 1991; another accountability failure',
      'Close associate of Ivan Boesky who allegedly participated in manipulative trading schemes',
    ],
    charges: [
      { statute: '15 U.S.C. 78j(b)', description: 'Securities Fraud: Stock manipulation at Boesky\\'s direction (OVERTURNED ON APPEAL)', category: 'Federal' },
      { statute: '18 U.S.C. 371', description: 'Conspiracy: Stock manipulation scheme with Ivan Boesky (OVERTURNED ON APPEAL)', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1986-1988', event: 'Allegedly manipulated stock prices at Ivan Boesky\\'s direction through Jamie Securities' },
      { date: '1988', event: 'Arrested while allegedly driving to Boesky\\'s home with a loaded assault rifle' },
      { date: '1990', event: 'Convicted of conspiracy and stock manipulation by jury' },
      { date: '1991', event: 'Second Circuit Court of Appeals overturns conviction; finds insufficient evidence of manipulation' },
      { date: 'June 18, 2003', event: 'Dies at age 53' },
    ],
    socialMedia: [],
    sources: [
      { title: 'United States v. Mulheren, 938 F.2d 364 (2d Cir. 1991)', url: 'https://law.justia.com/cases/federal/appellate-courts/F2/938/364/394960/', date: '1991' },
    ],
    aliases: ['John A. Mulheren Jr.'],
    knownAssociates: [
      { name: 'Ivan Boesky', relationship: 'Close associate who directed Mulheren\\'s alleged stock manipulation; later betrayed him to prosecutors', href: '/entities/individuals/ivan-boesky' },
    ],
  },`);

// === FRED JOSEPH (f.ts) ===
addToIndFile('f', 'fred-joseph', `  'fred-joseph': {
    name: 'Fred Joseph',
    title: 'Former CEO of Drexel Burnham Lambert; Escaped Criminal Charges Despite Presiding Over Systemic Fraud',
    role: 'Chief Executive Officer, Drexel Burnham Lambert Inc.',
    riskLevel: 'high',
    description: 'Frederick H. Joseph was the CEO of Drexel Burnham Lambert during the period when the firm operated the most corrupt trading operation in Wall Street history under Michael Milken. As CEO, Joseph bore ultimate executive responsibility for the criminal enterprise that resulted in six corporate felony convictions and $650 million in fines. Despite his position at the top of the organization, Joseph was NEVER criminally charged. The SEC barred him from serving as CEO of a securities firm, but he never spent a single day in prison. He later returned to the financial industry at Morgan Stanley in a compliance role. Meanwhile, over 10,000 rank-and-file Drexel employees lost their jobs and livelihoods when the firm collapsed. Joseph\\'s case is one of the most egregious examples of the two-tiered justice system in American financial regulation: the organization is destroyed and ordinary workers suffer, while the executive who presided over the criminal enterprise walks free.',
    birthDate: '1937',
    birthPlace: 'United States',
    deathDate: 'May 21, 2009',
    education: ['Harvard Business School (MBA)'],
    affiliations: [
      { name: 'Drexel Burnham Lambert', role: 'Chief Executive Officer (1985-1990)', type: 'corporation' },
      { name: 'Morgan Stanley', role: 'Managing Director, Compliance (post-Drexel)', type: 'corporation' },
    ],
    controversies: [
      'As CEO of Drexel, presided over the most corrupt trading operation in Wall Street history',
      'NEVER criminally charged despite firm pleading guilty to 6 felonies and paying $650M in fines',
      'SEC barred him from being CEO of a securities firm, but he never spent a day in prison',
      'Later returned to Wall Street at Morgan Stanley while 10,000+ Drexel employees lost their livelihoods',
      'Embodies the two-tiered justice system: executives walk free while workers pay the price',
    ],
    charges: [
      { statute: 'SEC Administrative Action', description: 'Failure to Supervise: Barred from serving as CEO of a securities firm. NEVER criminally charged.', category: 'Federal' },
    ],
    relatedInvestigations: [
      { title: '1980s Insider Trading Scandals', slug: '1980s-insider-trading', severity: 'critical' },
    ],
    timeline: [
      { date: '1985', event: 'Becomes CEO of Drexel Burnham Lambert' },
      { date: '1988-12-21', event: 'Drexel pleads guilty to 6 felonies and pays $650M; Joseph was CEO throughout the criminal conduct' },
      { date: '1990-02-13', event: 'Drexel files for bankruptcy under Joseph\\'s leadership; 10,000+ employees lose jobs' },
      { date: '1993', event: 'SEC bars Joseph from serving as CEO of a securities firm; never criminally charged' },
      { date: '1990s', event: 'Returns to Wall Street at Morgan Stanley in compliance and advisory role' },
      { date: 'May 21, 2009', event: 'Dies at age 72' },
    ],
    socialMedia: [],
    sources: [
      { title: 'NY Times Obituary: Fred Joseph (2009)', url: 'https://www.nytimes.com/2009/05/23/business/23joseph.html', date: '2009' },
      { title: 'James B. Stewart, Den of Thieves (1991)', url: 'https://www.simonandschuster.com/books/Den-of-Thieves/James-B-Stewart/9780671792275', date: '1991' },
    ],
    aliases: ['Frederick H. Joseph'],
    knownAssociates: [
      { name: 'Michael Milken', relationship: 'Head of the high-yield bond department that Joseph, as CEO, was responsible for supervising', href: '/entities/individuals/michael-milken' },
    ],
  },`);

console.log('\nDone! All new profiles added.');
