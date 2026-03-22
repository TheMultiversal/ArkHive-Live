/**
 * Comprehensive Federal Statute Database
 * Used for cross-referencing violations across investigations
 */

export interface StatuteInfo {
  code: string;
  title: string;
  shortName: string;
  description: string;
  category: StatuteCategory;
  maxPenalty?: string;
  civilPenalty?: string;
  commonViolators?: string[];
}

export type StatuteCategory = 
  | 'fraud'
  | 'obstruction'
  | 'corruption'
  | 'campaign-finance'
  | 'foreign-influence'
  | 'tax'
  | 'securities'
  | 'antitrust'
  | 'environmental'
  | 'civil-rights'
  | 'healthcare'
  | 'national-security'
  | 'perjury'
  | 'racketeering'
  | 'money-laundering'
  | 'public-integrity'
  | 'records'
  | 'conspiracy';

export const STATUTE_CATEGORIES: Record<StatuteCategory, { name: string; color: string }> = {
  'fraud': { name: 'Fraud', color: 'text-red-400' },
  'obstruction': { name: 'Obstruction', color: 'text-orange-400' },
  'corruption': { name: 'Corruption', color: 'text-purple-400' },
  'campaign-finance': { name: 'Campaign Finance', color: 'text-blood-400' },
  'foreign-influence': { name: 'Foreign Influence', color: 'text-yellow-400' },
  'tax': { name: 'Tax', color: 'text-green-400' },
  'securities': { name: 'Securities', color: 'text-cyan-400' },
  'antitrust': { name: 'Antitrust', color: 'text-pink-400' },
  'environmental': { name: 'Environmental', color: 'text-emerald-400' },
  'civil-rights': { name: 'Civil Rights', color: 'text-amber-400' },
  'healthcare': { name: 'Healthcare Fraud', color: 'text-rose-400' },
  'national-security': { name: 'National Security', color: 'text-indigo-400' },
  'perjury': { name: 'Perjury', color: 'text-orange-300' },
  'racketeering': { name: 'Racketeering', color: 'text-red-500' },
  'money-laundering': { name: 'Money Laundering', color: 'text-violet-400' },
  'public-integrity': { name: 'Public Integrity', color: 'text-sky-400' },
  'records': { name: 'Records', color: 'text-slate-400' },
  'conspiracy': { name: 'Conspiracy', color: 'text-fuchsia-400' },
};

/**
 * Federal Statutes Database - Title 18 (Crimes and Criminal Procedure)
 */
export const FEDERAL_STATUTES: StatuteInfo[] = [
  // === FRAUD ===
  {
    code: '18 U.S.C. § 1341',
    title: 'Mail Fraud',
    shortName: 'Mail Fraud',
    description: 'Using the mail system to execute any scheme to defraud or obtain money/property by false pretenses',
    category: 'fraud',
    maxPenalty: '20 years (30 years if affecting financial institution)',
  },
  {
    code: '18 U.S.C. § 1343',
    title: 'Wire Fraud',
    shortName: 'Wire Fraud',
    description: 'Using interstate wire communications to execute any scheme to defraud',
    category: 'fraud',
    maxPenalty: '20 years (30 years if affecting financial institution)',
  },
  {
    code: '18 U.S.C. § 1344',
    title: 'Bank Fraud',
    shortName: 'Bank Fraud',
    description: 'Knowingly executing a scheme to defraud a financial institution or obtain money from a bank',
    category: 'fraud',
    maxPenalty: '30 years + $1M fine',
  },
  {
    code: '18 U.S.C. § 1346',
    title: 'Honest Services Fraud',
    shortName: 'Honest Services',
    description: 'Depriving another of the intangible right of honest services (typically bribery or kickback schemes)',
    category: 'fraud',
    maxPenalty: '20 years',
  },
  {
    code: '18 U.S.C. § 1347',
    title: 'Health Care Fraud',
    shortName: 'Healthcare Fraud',
    description: 'Defrauding any health care benefit program',
    category: 'healthcare',
    maxPenalty: '10 years (life if death results)',
  },
  {
    code: '18 U.S.C. § 1349',
    title: 'Conspiracy to Commit Fraud',
    shortName: 'Fraud Conspiracy',
    description: 'Conspiracy to commit mail, wire, bank, or healthcare fraud',
    category: 'conspiracy',
    maxPenalty: 'Same as underlying offense',
  },

  // === OBSTRUCTION ===
  {
    code: '18 U.S.C. § 1503',
    title: 'Obstruction of Justice',
    shortName: 'Obstruction',
    description: 'Corruptly, or by threats or force, endeavoring to influence, intimidate, or impede any grand or petit juror, or officer in any court',
    category: 'obstruction',
    maxPenalty: '10 years',
  },
  {
    code: '18 U.S.C. § 1505',
    title: 'Obstruction of Proceedings Before Departments',
    shortName: 'Congressional Obstruction',
    description: 'Obstructing proceedings before departments, agencies, or Congress',
    category: 'obstruction',
    maxPenalty: '5 years (8 years if domestic terrorism)',
  },
  {
    code: '18 U.S.C. § 1510',
    title: 'Obstruction of Criminal Investigations',
    shortName: 'Investigation Obstruction',
    description: 'Willfully endeavoring by means of bribery to obstruct or delay criminal investigation',
    category: 'obstruction',
    maxPenalty: '5 years',
  },
  {
    code: '18 U.S.C. § 1512',
    title: 'Tampering with Witness, Victim, or Informant',
    shortName: 'Witness Tampering',
    description: 'Using intimidation, threats, or corrupt persuasion to influence testimony or obstruct official proceedings',
    category: 'obstruction',
    maxPenalty: '20 years (30 years if bodily injury)',
  },
  {
    code: '18 U.S.C. § 1519',
    title: 'Destruction of Records in Federal Investigations',
    shortName: 'Evidence Destruction',
    description: 'Destroying, altering, or falsifying records with intent to obstruct investigation',
    category: 'obstruction',
    maxPenalty: '20 years',
  },

  // === CORRUPTION & BRIBERY ===
  {
    code: '18 U.S.C. § 201',
    title: 'Bribery of Public Officials',
    shortName: 'Federal Bribery',
    description: 'Giving or receiving anything of value to influence official acts of public officials',
    category: 'corruption',
    maxPenalty: '15 years + disqualification from office',
  },
  {
    code: '18 U.S.C. § 666',
    title: 'Theft or Bribery Concerning Programs Receiving Federal Funds',
    shortName: 'Federal Program Bribery',
    description: 'Theft, embezzlement, or bribery involving organizations receiving federal funds',
    category: 'corruption',
    maxPenalty: '10 years',
  },
  {
    code: '18 U.S.C. § 1951',
    title: 'Hobbs Act - Extortion',
    shortName: 'Hobbs Act',
    description: 'Interference with commerce through extortion, robbery, or threats',
    category: 'corruption',
    maxPenalty: '20 years',
  },
  {
    code: '18 U.S.C. § 1952',
    title: 'Travel Act',
    shortName: 'Travel Act',
    description: 'Interstate travel or use of mail in aid of racketeering enterprises',
    category: 'racketeering',
    maxPenalty: '5 years (20 years if violence)',
  },

  // === CAMPAIGN FINANCE ===
  {
    code: '52 U.S.C. § 30109',
    title: 'Federal Election Campaign Act Enforcement',
    shortName: 'FEC Violations',
    description: 'Violations of federal campaign finance laws',
    category: 'campaign-finance',
    maxPenalty: '5 years + civil penalties',
  },
  {
    code: '52 U.S.C. § 30116',
    title: 'Campaign Contribution Limits',
    shortName: 'Contribution Limits',
    description: 'Exceeding contribution limits to federal candidates or committees',
    category: 'campaign-finance',
    civilPenalty: 'Up to 200% of violation amount',
  },
  {
    code: '52 U.S.C. § 30118',
    title: 'Corporate/Labor Union Contributions',
    shortName: 'Corporate Contributions',
    description: 'Illegal contributions from corporations or labor unions to federal campaigns',
    category: 'campaign-finance',
    maxPenalty: '5 years',
  },
  {
    code: '52 U.S.C. § 30121',
    title: 'Foreign National Contribution Prohibition',
    shortName: 'Foreign Contributions',
    description: 'Soliciting, accepting, or receiving contributions from foreign nationals',
    category: 'foreign-influence',
    maxPenalty: '5 years + civil penalties',
  },
  {
    code: '52 U.S.C. § 30122',
    title: 'Straw Donor Contributions',
    shortName: 'Straw Donors',
    description: 'Contributing in another person\'s name to circumvent contribution limits',
    category: 'campaign-finance',
    maxPenalty: '5 years',
  },

  // === FOREIGN INFLUENCE ===
  {
    code: '22 U.S.C. § 611-621',
    title: 'Foreign Agents Registration Act (FARA)',
    shortName: 'FARA',
    description: 'Requiring agents of foreign principals to register and disclose activities',
    category: 'foreign-influence',
    maxPenalty: '5 years + $250K fine',
  },
  {
    code: '18 U.S.C. § 951',
    title: 'Agents of Foreign Governments',
    shortName: 'Unregistered Foreign Agent',
    description: 'Acting as an agent of a foreign government without prior notification to the Attorney General',
    category: 'foreign-influence',
    maxPenalty: '10 years',
  },
  {
    code: '18 U.S.C. § 793',
    title: 'Espionage - Gathering Defense Information',
    shortName: 'Espionage',
    description: 'Gathering, transmitting, or losing defense information',
    category: 'national-security',
    maxPenalty: '10 years (death if wartime)',
  },
  {
    code: '18 U.S.C. § 794',
    title: 'Espionage - Gathering Information for Foreign Government',
    shortName: 'Foreign Espionage',
    description: 'Delivering defense information to foreign governments',
    category: 'national-security',
    maxPenalty: 'Death or life imprisonment',
  },
  {
    code: '50 U.S.C. § 1801',
    title: 'Foreign Intelligence Surveillance Act (FISA)',
    shortName: 'FISA',
    description: 'Procedures for surveillance of foreign powers and their agents',
    category: 'national-security',
    maxPenalty: 'Varies by violation',
  },

  // === TAX CRIMES ===
  {
    code: '26 U.S.C. § 7201',
    title: 'Tax Evasion',
    shortName: 'Tax Evasion',
    description: 'Willfully attempting to evade or defeat any tax',
    category: 'tax',
    maxPenalty: '5 years + $250K fine',
  },
  {
    code: '26 U.S.C. § 7206',
    title: 'Tax Fraud - False Statements',
    shortName: 'Tax Fraud',
    description: 'Making false statements on tax returns',
    category: 'tax',
    maxPenalty: '3 years + $250K fine',
  },
  {
    code: '26 U.S.C. § 7212',
    title: 'Obstruction of Tax Administration',
    shortName: 'IRS Obstruction',
    description: 'Corruptly or by force obstructing or impeding tax administration',
    category: 'tax',
    maxPenalty: '3 years',
  },

  // === SECURITIES ===
  {
    code: '15 U.S.C. § 78j(b)',
    title: 'Securities Fraud (Rule 10b-5)',
    shortName: 'Securities Fraud',
    description: 'Deceptive practices in connection with securities transactions',
    category: 'securities',
    maxPenalty: '20 years + $5M fine (individuals)',
  },
  {
    code: '15 U.S.C. § 78ff',
    title: 'Securities Exchange Act Violations',
    shortName: 'SEC Act Violations',
    description: 'Criminal penalties for violations of the Securities Exchange Act',
    category: 'securities',
    maxPenalty: '20 years + $5M fine',
  },
  {
    code: '15 U.S.C. § 78dd-1',
    title: 'Foreign Corrupt Practices Act (FCPA)',
    shortName: 'FCPA',
    description: 'Bribing foreign officials to obtain or retain business',
    category: 'corruption',
    maxPenalty: '5 years + $250K fine (individuals), $2M (corporations)',
  },

  // === ANTITRUST ===
  {
    code: '15 U.S.C. § 1',
    title: 'Sherman Act - Restraint of Trade',
    shortName: 'Sherman Act § 1',
    description: 'Combinations, contracts, or conspiracies in restraint of trade',
    category: 'antitrust',
    maxPenalty: '10 years + $1M fine (individuals), $100M (corporations)',
  },
  {
    code: '15 U.S.C. § 2',
    title: 'Sherman Act - Monopolization',
    shortName: 'Sherman Act § 2',
    description: 'Monopolizing, attempting to monopolize, or conspiring to monopolize',
    category: 'antitrust',
    maxPenalty: '10 years + $1M fine',
  },
  {
    code: '15 U.S.C. § 18',
    title: 'Clayton Act - Anticompetitive Mergers',
    shortName: 'Clayton Act',
    description: 'Mergers or acquisitions that substantially lessen competition',
    category: 'antitrust',
    civilPenalty: 'Divestiture, injunction',
  },

  // === RACKETEERING ===
  {
    code: '18 U.S.C. § 1961-1968',
    title: 'RICO - Racketeer Influenced and Corrupt Organizations',
    shortName: 'RICO',
    description: 'Pattern of racketeering activity in connection with an enterprise',
    category: 'racketeering',
    maxPenalty: '20 years (life if underlying = life) + forfeiture',
  },
  {
    code: '18 U.S.C. § 1962',
    title: 'RICO Prohibited Activities',
    shortName: 'RICO Violations',
    description: 'Operating enterprise through pattern of racketeering',
    category: 'racketeering',
    maxPenalty: '20 years per count + treble damages civil',
  },

  // === MONEY LAUNDERING ===
  {
    code: '18 U.S.C. § 1956',
    title: 'Money Laundering',
    shortName: 'Money Laundering',
    description: 'Conducting financial transactions with proceeds of unlawful activity',
    category: 'money-laundering',
    maxPenalty: '20 years + $500K or 2x value laundered',
  },
  {
    code: '18 U.S.C. § 1957',
    title: 'Monetary Transactions in Criminally Derived Property',
    shortName: 'Crime Proceeds',
    description: 'Engaging in monetary transactions exceeding $10,000 from criminal proceeds',
    category: 'money-laundering',
    maxPenalty: '10 years',
  },
  {
    code: '31 U.S.C. § 5324',
    title: 'Structuring Financial Transactions',
    shortName: 'Structuring',
    description: 'Structuring transactions to evade reporting requirements',
    category: 'money-laundering',
    maxPenalty: '5 years + $250K fine',
  },

  // === PERJURY & FALSE STATEMENTS ===
  {
    code: '18 U.S.C. § 1001',
    title: 'False Statements',
    shortName: 'False Statements',
    description: 'Making false statements to federal agencies or officials',
    category: 'perjury',
    maxPenalty: '5 years (8 if terrorism-related)',
  },
  {
    code: '18 U.S.C. § 1621',
    title: 'Perjury',
    shortName: 'Perjury',
    description: 'Willfully making false material statements under oath',
    category: 'perjury',
    maxPenalty: '5 years',
  },
  {
    code: '18 U.S.C. § 1623',
    title: 'False Declarations Before Grand Jury',
    shortName: 'Grand Jury Perjury',
    description: 'False material declarations in grand jury or court proceedings',
    category: 'perjury',
    maxPenalty: '5 years',
  },

  // === RECORDS & DOCUMENTS ===
  {
    code: '18 U.S.C. § 2071',
    title: 'Concealment or Destruction of Records',
    shortName: 'Federal Records',
    description: 'Willfully concealing, removing, or destroying federal records',
    category: 'records',
    maxPenalty: '3 years + disqualification from office',
  },
  {
    code: '44 U.S.C. § 3106',
    title: 'Presidential Records Act Violations',
    shortName: 'Presidential Records',
    description: 'Unlawful removal or destruction of presidential records',
    category: 'records',
    civilPenalty: 'Injunction, recovery of records',
  },

  // === PUBLIC INTEGRITY ===
  {
    code: '5 U.S.C. § 7323-7324',
    title: 'Hatch Act',
    shortName: 'Hatch Act',
    description: 'Restricts federal employees from engaging in partisan political activity',
    category: 'public-integrity',
    maxPenalty: 'Removal from office + $1K fine',
  },
  {
    code: '18 U.S.C. § 208',
    title: 'Conflict of Interest',
    shortName: 'Conflict of Interest',
    description: 'Government employee participating in matters with personal financial interest',
    category: 'public-integrity',
    maxPenalty: '5 years + $50K fine',
  },
  {
    code: '18 U.S.C. § 209',
    title: 'Supplementation of Salary',
    shortName: 'Illegal Compensation',
    description: 'Receiving supplemental salary from private sources for government duties',
    category: 'public-integrity',
    maxPenalty: '1 year',
  },
  {
    code: '18 U.S.C. § 219',
    title: 'Officers Acting as Agents of Foreign Principals',
    shortName: 'Foreign Principal Agent',
    description: 'Public official acting as agent of foreign principal',
    category: 'foreign-influence',
    maxPenalty: '2 years',
  },
  {
    code: '28 U.S.C. § 455',
    title: 'Disqualification of Justice, Judge, or Magistrate',
    shortName: 'Judicial Recusal',
    description: 'Mandatory recusal requirements for federal judges',
    category: 'public-integrity',
    civilPenalty: 'Reversal of decisions, removal',
  },
  {
    code: '5 U.S.C. App. 101-111',
    title: 'Ethics in Government Act - Financial Disclosure',
    shortName: 'Financial Disclosure',
    description: 'Financial disclosure requirements for senior government officials',
    category: 'public-integrity',
    civilPenalty: '$50K per violation',
  },

  // === CIVIL RIGHTS ===
  {
    code: '18 U.S.C. § 241',
    title: 'Conspiracy Against Rights',
    shortName: 'Civil Rights Conspiracy',
    description: 'Conspiracy to deprive persons of constitutional rights',
    category: 'civil-rights',
    maxPenalty: '10 years (life if death results)',
  },
  {
    code: '18 U.S.C. § 242',
    title: 'Deprivation of Rights Under Color of Law',
    shortName: 'Color of Law',
    description: 'Officials depriving persons of constitutional rights under color of law',
    category: 'civil-rights',
    maxPenalty: '10 years (life/death if death results)',
  },
  {
    code: '52 U.S.C. § 20511',
    title: 'Voting Rights Act Violations',
    shortName: 'Voting Rights',
    description: 'Criminal penalties for voting rights violations',
    category: 'civil-rights',
    maxPenalty: '5 years',
  },

  // === CONSPIRACY ===
  {
    code: '18 U.S.C. § 371',
    title: 'Conspiracy to Defraud the United States',
    shortName: 'Federal Conspiracy',
    description: 'Conspiracy to commit offense against or defraud the United States',
    category: 'conspiracy',
    maxPenalty: '5 years',
  },
  {
    code: '18 U.S.C. § 372',
    title: 'Conspiracy to Impede Officer',
    shortName: 'Officer Conspiracy',
    description: 'Conspiracy to prevent officer from discharging duties',
    category: 'conspiracy',
    maxPenalty: '6 years',
  },
  {
    code: '18 U.S.C. § 2384',
    title: 'Seditious Conspiracy',
    shortName: 'Seditious Conspiracy',
    description: 'Conspiracy to overthrow or destroy by force the government of the United States',
    category: 'national-security',
    maxPenalty: '20 years',
  },

  // === FALSE CLAIMS ===
  {
    code: '31 U.S.C. § 3729-3733',
    title: 'False Claims Act',
    shortName: 'False Claims',
    description: 'Submitting false claims for payment to the federal government',
    category: 'fraud',
    civilPenalty: 'Treble damages + $11K-$23K per claim',
  },

  // === ENVIRONMENTAL ===
  {
    code: '42 U.S.C. § 7413',
    title: 'Clean Air Act Violations',
    shortName: 'Clean Air Act',
    description: 'Criminal penalties for violations of the Clean Air Act',
    category: 'environmental',
    maxPenalty: '5 years + $1M/day fine',
  },
  {
    code: '33 U.S.C. § 1319',
    title: 'Clean Water Act Violations',
    shortName: 'Clean Water Act',
    description: 'Criminal penalties for violations of the Clean Water Act',
    category: 'environmental',
    maxPenalty: '3 years (negligent), 6 years (knowing)',
  },

  // === ANTI-KICKBACK ===
  {
    code: '42 U.S.C. § 1320a-7b',
    title: 'Anti-Kickback Statute',
    shortName: 'Anti-Kickback',
    description: 'Prohibition against kickbacks in federal healthcare programs',
    category: 'healthcare',
    maxPenalty: '10 years + $100K fine',
  },
];

/**
 * Parse statute code to normalized format
 * Handles variations like "18 USC 1512", "18 U.S.C. § 1512", etc.
 */
export function normalizeStatuteCode(code: string): string {
  // Remove extra whitespace
  let normalized = code.trim();
  
  // Standardize U.S.C. format
  normalized = normalized.replace(/U\.?S\.?C\.?/gi, 'U.S.C.');
  
  // Standardize section symbol
  normalized = normalized.replace(/[§Sec\.Section]+\s*/gi, '§ ');
  
  // Add section symbol if missing
  if (!normalized.includes('§')) {
    normalized = normalized.replace(/(\d+)\s*U\.S\.C\.\s*(\d+)/i, '$1 U.S.C. § $2');
  }
  
  // Standardize spacing
  normalized = normalized.replace(/\s+/g, ' ');
  
  return normalized;
}

/**
 * Find statute info by code (supports partial matching)
 */
export function findStatute(code: string): StatuteInfo | undefined {
  const normalized = normalizeStatuteCode(code);
  
  // Exact match first
  const exact = FEDERAL_STATUTES.find(s => 
    normalizeStatuteCode(s.code) === normalized
  );
  if (exact) return exact;
  
  // Partial match - extract numbers and compare
  const codeMatch = normalized.match(/(\d+)\s*U\.S\.C\.\s*§?\s*(\d+)/i);
  if (codeMatch) {
    const [, title, section] = codeMatch;
    return FEDERAL_STATUTES.find(s => {
      const sMatch = s.code.match(/(\d+)\s*U\.S\.C\.\s*§?\s*(\d+)/i);
      return sMatch && sMatch[1] === title && sMatch[2] === section;
    });
  }
  
  return undefined;
}

/**
 * Get all statutes in a category
 */
export function getStatutesByCategory(category: StatuteCategory): StatuteInfo[] {
  return FEDERAL_STATUTES.filter(s => s.category === category);
}

/**
 * Extract statute codes from text content
 * Finds patterns like "18 U.S.C. 1512" or "52 U.S.C. § 30121"
 */
export function extractStatutesFromText(text: string): string[] {
  const patterns = [
    /\d+\s+U\.?S\.?C\.?\s*§?\s*\d+[\-\d]*/gi,
    /\d+\s+U\.?S\.?C\.?\s*[Ss]ec(?:tion)?\.?\s*\d+[\-\d]*/gi,
  ];
  
  const found = new Set<string>();
  
  for (const pattern of patterns) {
    const matches = text.match(pattern) || [];
    matches.forEach(m => found.add(normalizeStatuteCode(m)));
  }
  
  return Array.from(found);
}
