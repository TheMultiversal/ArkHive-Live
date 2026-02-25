#!/usr/bin/env node
/**
 * Generate all 345 missing investigation detail entries and listing entries.
 * Each investigation gets comprehensive data with real sources, affiliations, 
 * and cross-references to existing entity pages.
 * 
 * NO EM DASHES OR EN DASHES - uses only regular hyphens and ' - '.
 */

const fs = require('fs');
const path = require('path');

// Load entity slugs for cross-referencing
const entitySlugs = JSON.parse(fs.readFileSync('scripts/entity-slugs.json', 'utf8'));
const indSet = new Set(entitySlugs.individuals);
const agSet = new Set(entitySlugs.agencies);
const coSet = new Set(entitySlugs.corporations);
const orgSet = new Set(entitySlugs.organizations);

function makeAffiliation(id, name, type, relationship, slug) {
  let prefix = '/entities/individuals/';
  if (type === 'agency') prefix = '/entities/agencies/';
  if (type === 'corporation') prefix = '/entities/corporations/';
  if (type === 'organization') prefix = '/entities/organizations/';
  return `      { id: '${id}', name: '${name.replace(/'/g, "\\'")}', type: '${type}', relationship: '${relationship.replace(/'/g, "\\'")}', href: '${prefix}${slug}' }`;
}

function aff(id, name, type, rel, slug) {
  return makeAffiliation(String(id), name, type, rel, slug);
}

// The massive investigation data - each with title, subtitle, severity, category, date, lastUpdated, summary, content, tags, sources, affiliations
const investigations = {
'1980s-insider-trading': {
  title: '1980s Insider Trading Scandals',
  subtitle: 'Wall Street corruption and securities fraud during the Reagan era',
  severity: 'high',
  category: 'Financial Crimes',
  date: 'May 12, 1986',
  lastUpdated: 'February 25, 2026',
  summary: 'The 1980s insider trading scandals exposed massive Wall Street corruption. Ivan Boesky, Michael Milken, and others manipulated markets using non-public information, defrauding investors of billions. The scandals led to landmark SEC enforcement actions, criminal convictions, and the passage of stronger securities fraud laws.',
  content: [
    'IVAN BOESKY: Arbitrageur Ivan Boesky made hundreds of millions trading on inside tips from investment bankers. He paid $100 million in penalties in 1986 and cooperated with prosecutors, leading to further investigations. His cooperation brought down Michael Milken and exposed a web of insider trading across Wall Street.',
    'MICHAEL MILKEN AND DREXEL BURNHAM: Michael Milken, the "junk bond king" at Drexel Burnham Lambert, was indicted on 98 counts of racketeering and fraud in 1989. He pleaded guilty to securities violations, paid $600 million in fines, and served 22 months in prison. Drexel itself collapsed in 1990, filing for bankruptcy after paying $650 million in penalties.',
    'DENNIS LEVINE: Investment banker Dennis Levine at Drexel Burnham was the first major figure caught, in 1986. He had earned $12.6 million in illegal profits from insider trading over five years. His cooperation led investigators to Boesky, who in turn led to Milken.',
    'MARTIN SIEGEL: Kidder Peabody investment banker Martin Siegel passed confidential merger information to Boesky in exchange for suitcases of cash. He pleaded guilty and cooperated with prosecutors.',
    'INSIDER TRADING SANCTIONS ACT: Congress passed the Insider Trading Sanctions Act in 1984 and the Insider Trading and Securities Fraud Enforcement Act in 1988, dramatically increasing penalties for securities fraud and establishing bounties for whistleblowers.',
    'SEC ENFORCEMENT: Under Enforcement Director Gary Lynch, the SEC brought landmark cases that established critical legal precedents for prosecuting insider trading. The agency demonstrated that even the most powerful Wall Street figures were not above the law.',
    'BROADER IMPACT: The scandals revealed a culture of corruption on Wall Street where insider trading was widespread and viewed as a normal cost of doing business. The investigations exposed how investment banks, arbitrageurs, and corporate raiders colluded to manipulate markets at the expense of ordinary investors.',
  ],
  tags: ['Insider Trading', 'Securities Fraud', 'Wall Street', 'SEC', 'Fraud', 'Reagan Era'],
  sources: [
    { title: 'SEC v. Boesky - Enforcement Action', url: 'https://www.sec.gov/litigation/litreleases/lr11288.htm', type: 'Government Record' },
    { title: 'United States v. Milken - DOJ Case', url: 'https://www.justice.gov/archives/jm/criminal-resource-manual-1663-milken', type: 'Court Document' },
    { title: 'Den of Thieves by James B. Stewart', url: 'https://www.penguinrandomhouse.com/books/72124/den-of-thieves-by-james-b-stewart/', type: 'Book' },
  ],
  affiliations: [
    aff(1, 'SEC', 'agency', 'Prosecuted insider trading cases', 'sec'),
  ],
},

'1mdb-scandal': {
  title: '1MDB Sovereign Wealth Fund Scandal',
  subtitle: 'Billions stolen from Malaysian sovereign wealth fund',
  severity: 'critical',
  category: 'Financial Crimes',
  date: 'July 2, 2015',
  lastUpdated: 'February 25, 2026',
  summary: 'The 1Malaysia Development Berhad (1MDB) scandal involved the theft of over $4.5 billion from a Malaysian sovereign wealth fund. Goldman Sachs facilitated the fraud through bond offerings, earning hundreds of millions in fees while billions were diverted to corrupt officials, luxury real estate, and Hollywood productions.',
  content: [
    'CREATION AND LOOTING: 1MDB was established in 2009 as a strategic development fund for Malaysia. Between 2009 and 2015, approximately $4.5 billion was misappropriated from the fund by high-ranking officials and their associates. The money was laundered through shell companies across multiple countries.',
    'JHO LOW: Malaysian financier Jho Low orchestrated the scheme, using a network of shell companies and offshore accounts to divert funds. He purchased luxury properties in New York and Beverly Hills, a $250 million superyacht, and invested in Hollywood films including "The Wolf of Wall Street" - a movie about financial fraud.',
    'GOLDMAN SACHS INVOLVEMENT: Goldman Sachs raised $6.5 billion in bonds for 1MDB between 2012 and 2013, earning approximately $600 million in fees - far above market rates. Goldman banker Tim Leissner pleaded guilty to money laundering and conspiracy. In 2020, Goldman agreed to pay over $5 billion globally to settle 1MDB-related charges.',
    'NAJIB RAZAK: Malaysian Prime Minister Najib Razak received nearly $700 million in 1MDB funds deposited into his personal bank accounts. He was convicted in 2020 and sentenced to 12 years in prison. He exhausted his appeals and began serving his sentence in 2022.',
    'DOJ CIVIL FORFEITURE: The U.S. DOJ filed civil forfeiture complaints seeking to recover over $1.7 billion in assets purchased with stolen 1MDB funds, including real estate, artwork, and a private jet. It was the largest kleptocracy enforcement action in DOJ history.',
    'GLOBAL MONEY LAUNDERING: The scandal exposed how stolen funds were laundered through financial institutions in Singapore, Switzerland, Luxembourg, and the United States. Several banks were penalized or shuttered for compliance failures.',
  ],
  tags: ['1MDB', 'Goldman Sachs', 'Money Laundering', 'Kleptocracy', 'Malaysia', 'Securities Fraud'],
  sources: [
    { title: 'DOJ 1MDB Forfeiture Complaints', url: 'https://www.justice.gov/archives/opa/page/file/877156/download', type: 'Government Record' },
    { title: 'Goldman Sachs 1MDB Settlement', url: 'https://www.sec.gov/news/press-release/2020-265', type: 'Government Record' },
    { title: 'WSJ 1MDB Investigation Series', url: 'https://www.wsj.com/specialcoverage/1mdb', type: 'Investigation' },
  ],
  affiliations: [
    aff(1, 'Goldman Sachs', 'corporation', 'Facilitated bond sales, earned $600M in fees', 'goldman-sachs'),
    aff(2, 'DOJ', 'agency', 'Largest kleptocracy enforcement action in history', 'doj'),
  ],
},

'2016-election': {
  title: '2016 Presidential Election Interference',
  subtitle: 'Russian interference and domestic manipulation of the 2016 election',
  severity: 'critical',
  category: 'Election Interference',
  date: 'June 14, 2016',
  lastUpdated: 'February 25, 2026',
  summary: 'The 2016 presidential election was targeted by a sweeping Russian interference campaign including hacking, social media manipulation, and contacts with the Trump campaign. The Mueller investigation documented "sweeping and systematic" foreign interference, 140+ Trump-Russia contacts, and 10+ instances of potential obstruction of justice.',
  content: [
    'RUSSIAN HACKING: Russian military intelligence (GRU) hacked the Democratic National Committee and Hillary Clinton campaign chairman John Podesta, releasing stolen emails through WikiLeaks. The timing of releases was coordinated to inflict maximum political damage.',
    'SOCIAL MEDIA WARFARE: The Internet Research Agency, a Russian troll farm, conducted a massive social media influence operation reaching an estimated 126 million Americans on Facebook alone. They created fake American personas, organized real-world rallies, and spread divisive content on race, immigration, and gun rights.',
    'TRUMP TOWER MEETING: On June 9, 2016, Donald Trump Jr., Jared Kushner, and Paul Manafort met with Russian nationals at Trump Tower after being promised "dirt" on Hillary Clinton as "part of Russia and its government\'s support for Mr. Trump."',
    'CAMBRIDGE ANALYTICA: Data firm Cambridge Analytica harvested personal data from 87 million Facebook users without consent, using it for political targeting on behalf of the Trump campaign. The firm was connected to Steve Bannon and funded by Robert Mercer.',
    'MUELLER INVESTIGATION: Special Counsel Robert Mueller\'s investigation resulted in 34 indictments, 7 guilty pleas, and documented extensive Russian interference. The report detailed 10 instances of potential obstruction of justice by Trump but concluded a sitting president could not be indicted per DOJ policy.',
    'OBSTRUCTION OF JUSTICE: Trump fired FBI Director James Comey, attempted to fire Mueller, dangled pardons to witnesses, and publicly attacked cooperating witnesses. Mueller wrote that "if we had confidence after a thorough investigation of the facts that the President clearly did not commit obstruction of justice, we would so state."',
  ],
  tags: ['Election Interference', 'Russia', 'Mueller', 'Hacking', 'Social Media', 'Obstruction'],
  sources: [
    { title: 'Mueller Report (Volumes I and II)', url: 'https://www.justice.gov/archives/sco/file/1373816/download', type: 'Government Report' },
    { title: 'Senate Intelligence Committee Report', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', type: 'Government Report' },
  ],
  affiliations: [
    aff(1, 'Internet Research Agency', 'corporation', 'Russian troll farm, social media manipulation', 'internet-research-agency'),
    aff(2, 'Cambridge Analytica', 'corporation', 'Harvested data from 87M Facebook users', 'cambridge-analytica'),
    aff(3, 'FBI', 'agency', 'Investigated Russian interference', 'fbi'),
    aff(4, 'DOJ', 'agency', 'Special Counsel investigation', 'doj'),
  ],
},

'abacus-scandal': {
  title: 'Goldman Sachs Abacus CDO Fraud',
  subtitle: 'Goldman profited from securities designed to fail',
  severity: 'high',
  category: 'Financial Crimes',
  date: 'April 16, 2010',
  lastUpdated: 'February 25, 2026',
  summary: 'Goldman Sachs designed and sold a synthetic CDO called Abacus 2007-AC1 while secretly allowing hedge fund Paulson & Co. to select the underlying mortgage-backed securities - and then bet against them. Goldman paid a then-record $550 million SEC settlement.',
  content: [
    'THE SCHEME: In 2007, Goldman Sachs created Abacus 2007-AC1, a synthetic collateralized debt obligation. Hedge fund manager John Paulson, who was betting against the housing market, helped select the underlying reference securities. Goldman then sold the CDO to investors without disclosing Paulson\'s role or his short position.',
    'INVESTOR LOSSES: Investors in Abacus, including IKB Deutsche Industriebank and ACA Financial Guaranty, lost approximately $1 billion. Paulson & Co. profited roughly $1 billion by betting against the securities he had helped select.',
    'SEC ENFORCEMENT: The SEC charged Goldman Sachs with fraud on April 16, 2010. Goldman paid $550 million to settle - the largest SEC penalty against a Wall Street firm at the time. Goldman neither admitted nor denied wrongdoing.',
    'FABRICE TOURRE: Goldman vice president Fabrice Tourre, who marketed the deal, was found personally liable by a jury in 2013. He had described the markets as "the whole building is about to collapse anytime now" in internal emails while selling the product to clients.',
    'SYSTEMIC FRAUD: Abacus was one of approximately 25 similar CDOs Goldman created. The SEC case exposed how Wall Street firms profited by creating complex financial products designed to fail, then betting against their own clients.',
  ],
  tags: ['Goldman Sachs', 'CDO', 'Securities Fraud', 'Financial Crisis', 'SEC', 'Subprime'],
  sources: [
    { title: 'SEC v. Goldman Sachs - Complaint', url: 'https://www.sec.gov/litigation/complaints/2010/comp21489.pdf', type: 'Court Document' },
    { title: 'SEC Settlement Announcement', url: 'https://www.sec.gov/news/press/2010/2010-123.htm', type: 'Government Record' },
  ],
  affiliations: [
    aff(1, 'Goldman Sachs', 'corporation', 'Created and sold fraudulent CDO', 'goldman-sachs'),
    aff(2, 'SEC', 'agency', '$550M settlement - largest against Wall Street firm at time', 'sec'),
  ],
},

'activision-harassment': {
  title: 'Activision Blizzard Workplace Harassment',
  subtitle: 'Systematic sexual harassment and discrimination in gaming industry',
  severity: 'high',
  category: 'Corporate Misconduct',
  date: 'July 20, 2021',
  lastUpdated: 'February 25, 2026',
  summary: 'California\'s DFEH sued Activision Blizzard in 2021 for fostering a "frat boy" culture of constant sexual harassment, discrimination, and retaliation. The investigation revealed widespread abuse, leading to CEO Bobby Kotick\'s departure and a $54.3 million settlement.',
  content: [
    'DFEH LAWSUIT: California\'s Department of Fair Employment and Housing filed suit after a two-year investigation, alleging pervasive sexual harassment, gender discrimination, and a toxic "frat boy" workplace culture. Women were subjected to groping, unwanted advances, and were paid less than male counterparts.',
    'CUBE CRAWLS: The lawsuit described "cube crawls" where male employees drank excessively and "crawled" through cubicles engaging in inappropriate behavior toward female employees. Male employees openly joked about rape, played video games during work while delegating tasks to female coworkers.',
    'BOBBY KOTICK: CEO Bobby Kotick reportedly knew about sexual misconduct allegations for years and failed to report them to the board. The Wall Street Journal reported he was aware of specific incidents including an employee rape allegation. Kotick departed when Microsoft acquired Activision in 2023.',
    'EEOC SETTLEMENT: The EEOC reached an $18 million settlement with Activision Blizzard in 2021. California separately reached a $54.3 million settlement in 2024 for equal pay violations affecting thousands of female employees.',
    'EMPLOYEE WALKOUT: Over 1,000 Activision Blizzard employees staged a walkout in July 2021, demanding accountability and systemic changes. Workers formed an internal advocacy group and pushed for better workplace protections.',
    'INDUSTRY-WIDE PROBLEM: The Activision case highlighted systemic harassment across the gaming industry, with similar allegations at Riot Games, Ubisoft, and other major studios.',
  ],
  tags: ['Sexual Harassment', 'Workplace Discrimination', 'Gaming Industry', 'Corporate Culture', 'MeToo'],
  sources: [
    { title: 'DFEH v. Activision Blizzard - Complaint', url: 'https://aboutblaw.com/YJw', type: 'Court Document' },
    { title: 'WSJ - Activision CEO Bobby Kotick Knew', url: 'https://www.wsj.com/articles/activision-videogames-bobby-kotick-sexual-misconduct-allegations-11637075680', type: 'Investigation' },
    { title: 'EEOC v. Activision Blizzard Settlement', url: 'https://www.eeoc.gov/newsroom/activision-blizzard-pay-18-million-settle-eeoc-sexual-harassment-and-retaliation-suit', type: 'Government Record' },
  ],
  affiliations: [],
},

'adelphia-fraud': {
  title: 'Adelphia Communications Fraud',
  subtitle: 'Rigas family looted publicly traded cable company of billions',
  severity: 'high',
  category: 'Financial Crimes',
  date: 'July 24, 2002',
  lastUpdated: 'February 25, 2026',
  summary: 'The Rigas family, founders of Adelphia Communications, systematically looted the company of billions of dollars through fraudulent transactions, treating the publicly traded company as a personal piggy bank while hiding $2.3 billion in debt from investors.',
  content: [
    'THE FRAUD: Adelphia was the sixth-largest cable company in the U.S. when it collapsed. The Rigas family hid $2.3 billion in liabilities from investors, used company funds for personal stock purchases, funded family businesses, and built a private golf course with corporate money.',
    'JOHN RIGAS: Adelphia founder John Rigas was convicted of conspiracy, securities fraud, and bank fraud in 2004. He was sentenced to 15 years in federal prison. He used company funds to buy $252 million in Adelphia stock to cover family margin calls.',
    'TIMOTHY RIGAS: CFO Timothy Rigas received a 20-year sentence. He fabricated financial results and structured complex off-balance-sheet transactions to conceal the true extent of the family\'s borrowing.',
    'BANKRUPTCY: Adelphia filed for Chapter 11 bankruptcy in June 2002, one of the largest bankruptcies in U.S. history at the time. Shareholders lost billions.',
    'SEC ACTION: The SEC sued the Rigas family for one of the most extensive financial frauds ever to take place at a public company. The family agreed to forfeit more than $1.5 billion in assets.',
  ],
  tags: ['Corporate Fraud', 'Securities Fraud', 'Cable Industry', 'Bankruptcy', 'Rigas Family'],
  sources: [
    { title: 'SEC v. Adelphia Communications', url: 'https://www.sec.gov/litigation/litreleases/lr17627.htm', type: 'Government Record' },
    { title: 'DOJ Rigas Conviction', url: 'https://www.justice.gov/archive/dag/cftf/chargingdocs/adelcomplaint.pdf', type: 'Court Document' },
  ],
  affiliations: [],
},

'adelphia-scandal': {
  title: 'Adelphia Corporate Governance Scandal',
  subtitle: 'How a family treated a public company as personal property',
  severity: 'high',
  category: 'Corporate Misconduct',
  date: 'March 27, 2002',
  lastUpdated: 'February 25, 2026',
  summary: 'The Adelphia scandal exposed catastrophic corporate governance failures where the founding Rigas family controlled the board, blocked oversight, and systematically diverted company resources for personal use while auditors and regulators failed to intervene.',
  content: [
    'GOVERNANCE FAILURES: The Rigas family controlled the Adelphia board of directors, appointing family members and allies to key positions. There was no independent audit committee oversight. The board rubber-stamped transactions that enriched the family at shareholder expense.',
    'AUDITOR FAILURES: Deloitte & Touche served as Adelphia\'s auditor and failed to detect or report the massive fraud. The firm later paid $167.5 million to settle claims from Adelphia\'s creditors.',
    'CO-BORROWING AGREEMENTS: The Rigas family entities were "co-borrowers" on credit facilities with Adelphia, allowing them to draw on the company\'s credit without shareholder knowledge. This arrangement was not properly disclosed in financial statements.',
    'REGULATORY RESPONSE: The Adelphia case, alongside Enron and WorldCom, led to the Sarbanes-Oxley Act of 2002, which strengthened corporate governance requirements, auditor independence rules, and criminal penalties for financial fraud.',
  ],
  tags: ['Corporate Governance', 'Audit Failure', 'Sarbanes-Oxley', 'Board Oversight', 'Fraud'],
  sources: [
    { title: 'SEC Adelphia Enforcement Actions', url: 'https://www.sec.gov/litigation/litreleases/lr17627.htm', type: 'Government Record' },
  ],
  affiliations: [],
},

'agricultural-policy': {
  title: 'Agricultural Policy and Corporate Control',
  subtitle: 'How corporate agribusiness captured food policy',
  severity: 'medium',
  category: 'Corporate Capture',
  date: 'January 15, 2020',
  lastUpdated: 'February 25, 2026',
  summary: 'U.S. agricultural policy has been systematically captured by corporate agribusiness interests. Farm subsidies overwhelmingly benefit large corporations while small farmers are squeezed out. Monsanto, now Bayer, monopolized seeds through patents, and USDA policy has prioritized industry profits over food safety and farmer welfare.',
  content: [
    'SUBSIDY CAPTURE: Between 1995 and 2023, the federal government paid over $450 billion in farm subsidies, with the top 10% of recipients collecting 78% of all payments. Corporate mega-farms receive millions while small farmers struggle to survive.',
    'SEED MONOPOLY: Monsanto (acquired by Bayer in 2018) controlled approximately 80% of the U.S. corn seed market and 93% of the soybean seed market through patents on genetically modified seeds. Farmers who saved seeds were sued for patent infringement.',
    'USDA CAPTURE: Department of Agriculture leadership under Trump included Sonny Perdue, who oversaw policies favoring large agribusiness operations. Trade war bailouts disproportionately went to large operations.',
    'MEATPACKING MONOPOLY: Four companies - Tyson, JBS, Cargill, and National Beef - control over 80% of U.S. beef processing. This concentration drives down prices paid to ranchers while consumer prices rise.',
    'PESTICIDE DEREGULATION: EPA under Trump relaxed restrictions on pesticides including chlorpyrifos, which causes brain damage in children, benefiting manufacturers like Dow Chemical at the expense of farmworker safety.',
  ],
  tags: ['Agriculture', 'Corporate Capture', 'Monsanto', 'Farm Subsidies', 'Food Policy', 'USDA'],
  sources: [
    { title: 'EWG Farm Subsidy Database', url: 'https://farm.ewg.org/', type: 'Database' },
    { title: 'USDA Economic Research Service', url: 'https://www.ers.usda.gov/', type: 'Government Data' },
  ],
  affiliations: [
    aff(1, 'Monsanto', 'corporation', 'Seed monopoly, patent enforcement against farmers', 'monsanto'),
    aff(2, 'USDA', 'agency', 'Regulatory capture by agribusiness interests', 'usda'),
    aff(3, 'DuPont', 'corporation', 'Chemical manufacturing, pesticide production', 'dupont'),
  ],
},

};

// I'll continue building this, but first let me write what we have and 
// the framework for the remaining entries
console.log('Defined', Object.keys(investigations).length, 'investigations so far');
console.log('Need to define', 345 - Object.keys(investigations).length, 'more');
