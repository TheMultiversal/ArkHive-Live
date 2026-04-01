/**
 * Fix generic tags across all investigation data files.
 * Replaces template tag arrays with investigation-specific tags.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(import.meta.dirname, '..', 'src', 'data', 'investigations');

// Generic tag patterns to detect (as stringified regexes)
const GENERIC_PATTERNS = [
  /tags:\s*\['Government Accountability',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Financial Crime',\s*'Fraud',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Corporate Fraud',\s*'Fraud',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Corporate Influence',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Media & Disinformation',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Environmental',\s*'Environment',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Technology & Privacy',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Technology & Privacy',\s*'Civil Liberties',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Civil Rights',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Civil Rights',\s*'Human Rights',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Corporate Accountability',\s*'Investigation',\s*'Accountability'\]/,
  // Semi-generic patterns (have a category but padded with Investigation/Accountability)
  /tags:\s*\['Abuse & Exploitation',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Financial Crime',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Labor Rights',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Financial Crime',\s*'Environment',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Criminal Justice',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Political Corruption',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Military-Industrial',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Violence & Justice',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Public Health',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Violence & Justice',\s*'Gun Violence',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['Financial Crime',\s*'Political Corruption',\s*'Investigation',\s*'Accountability'\]/,
  /tags:\s*\['International',\s*'Investigation',\s*'Accountability'\]/,
];

// Slug -> specific tags mapping
const TAG_MAP = {
  // a.ts
  'abacus-scandal': ['Goldman Sachs', 'Abacus CDO', 'Securities Fraud', 'Financial Crisis', 'SEC', 'Synthetic CDO'],
  'adelphia-fraud': ['Adelphia', 'Rigas Family', 'Cable Television', 'Securities Fraud', 'Corporate Fraud', 'Self-Dealing'],
  'adelphia-scandal': ['Adelphia', 'Corporate Governance', 'Rigas', 'Accounting Fraud', 'Deloitte', 'Corporate Crime'],
  'agricultural-policy': ['Agricultural Policy', 'Corporate Agriculture', 'Monsanto', 'Farm Subsidy', 'USDA', 'Food Policy', 'Agribusiness'],

  // c.ts
  'china-cyber-espionage': ['China', 'Cyber Espionage', 'APT', 'National Security', 'PLA', 'OPM Breach', 'State-Sponsored Hacking'],

  // d.ts
  'defense-tech-oligarchy': ['Defense Technology', 'Tech Oligarchy', 'Palantir', 'DOGE', 'Military-Industrial Complex', 'Surveillance', 'Silicon Valley'],
  'disinformation': ['Disinformation', 'Fake News', 'Social Media', 'Propaganda', 'Deepfakes', 'Information Warfare', 'Media Literacy'],

  // f.ts
  'family-separation-policy': ['Family Separation', 'Zero Tolerance', 'Immigration', 'Child Detention', 'CBP', 'HHS', 'Trump Administration'],
  'far-right': ['Far Right', 'Extremism', 'White Nationalism', 'Domestic Terrorism', 'Radicalization', 'Online Extremism'],
  'far-right-media': ['Far Right Media', 'Propaganda', 'Radicalization', 'Social Media', 'YouTube', 'Monetized Extremism'],
  'financial-crisis-profiteering': ['Financial Crisis', 'Profiteering', 'Wall Street', 'Foreclosure', 'Private Equity', 'Bailout', '2008'],
  'foreign-bribery': ['Foreign Bribery', 'FCPA', 'Corruption', 'Corporate Crime', 'DOJ', 'SEC', 'International'],
  'foreign-interference': ['Foreign Interference', 'Russia', 'Saudi Arabia', 'Israel', 'China', 'FARA', 'Election Interference', 'Lobbying'],
  'fossil-fuel-lobbying': ['Fossil Fuel', 'Lobbying', 'Climate Denial', 'Koch Industries', 'Oil Industry', 'Carbon Emissions', 'Dark Money'],
  'fyre-festival': ['Fyre Festival', 'Billy McFarland', 'Influencer Marketing', 'Wire Fraud', 'Consumer Fraud', 'FTC'],

  // g.ts
  'goldman-sachs-fraud': ['Goldman Sachs', 'Financial Fraud', 'Abacus', '1MDB', 'SEC', 'Wall Street', 'Securities Fraud'],
  'guatemala-experiments': ['Guatemala', 'Medical Experiments', 'STD Experiments', 'Human Rights', 'Bioethics', 'U.S. Public Health Service'],

  // h.ts
  'housing-crisis': ['Housing Crisis', 'Subprime Mortgage', 'Foreclosure', 'Predatory Lending', 'Homelessness', 'Wall Street', 'Redlining'],
  'housing-financialization': ['Housing Financialization', 'Private Equity', 'Corporate Landlords', 'Blackstone', 'Rent Crisis', 'Wall Street Landlords'],

  // i.ts
  'influencer-scams': ['Influencer Fraud', 'Social Media', 'FTC', 'Crypto Promotion', 'Deceptive Marketing', 'Pump and Dump'],
  'insurance-denials': ['Insurance Denials', 'Health Insurance', 'Prior Authorization', 'UnitedHealth', 'Claims Denial', 'Healthcare'],
  'intelligence-impunity': ['Intelligence Community', 'CIA', 'NSA', 'Impunity', 'Classified Operations', 'Oversight Failure', 'Whistleblower'],

  // k.ts
  'kids-for-cash': ['Kids for Cash', 'Judicial Corruption', 'Ciavarella', 'Conahan', 'Juvenile Justice', 'Pennsylvania', 'RICO'],
  'korematsu-case': ['Japanese Internment', 'Korematsu', 'Supreme Court', 'Civil Liberties', 'Executive Order 9066', 'Wartime Injustice', 'Racial Discrimination'],

  // l.ts
  'leonard-leo': ['Leonard Leo', 'Dark Money', 'Federalist Society', 'Judicial Appointments', 'Supreme Court', 'Conservative Network'],
  'lgbtq-discrimination': ['LGBTQ Rights', 'Discrimination', 'Marriage Equality', 'Employment Discrimination', 'Civil Rights', 'Anti-LGBTQ Legislation'],

  // m.ts
  'mississippi-welfare': ['Mississippi', 'Welfare Fraud', 'TANF', 'Brett Favre', 'Government Corruption', 'Poverty', 'Public Funds'],

  // n.ts
  'nypd-chokehold': ['Police Violence', 'NYPD', 'Chokehold', 'Eric Garner', 'Use of Force', 'Excessive Force'],
  'nypd-racial-profiling': ['Racial Profiling', 'Stop and Frisk', 'NYPD', 'Bloomberg', 'Civil Rights', 'Fourth Amendment'],

  // r.ts
  'right-wing-disinfo': ['Right Wing Disinformation', 'Conspiracy Theory', 'QAnon', 'Social Media', 'Radicalization', 'Online Extremism'],
  'right-wing-media': ['Right Wing Media', 'Fox News', 'Sinclair', 'Talk Radio', 'Media Polarization', 'Propaganda'],
  'rothstein-ponzi': ['Ponzi Scheme', 'Scott Rothstein', 'Attorney Fraud', 'Wire Fraud', 'Florida', 'Legal Ethics'],
  'roundup-cancer': ['Roundup', 'Glyphosate', 'Monsanto', 'Bayer', 'Cancer', 'EPA', 'Pesticide', 'Mass Tort'],
  'russian-influence': ['Russia', 'Putin', 'GRU', 'Election Interference', 'Disinformation', 'Cyber Warfare', 'Covert Operations'],

  // s.ts
  'sackler-family': ['Opioid Crisis', 'Sackler Family', 'Purdue Pharma', 'OxyContin', 'Pharmaceutical Crime', 'Bankruptcy', 'Opioid Deaths'],
  'sandy-hook-disinfo': ['Sandy Hook', 'Alex Jones', 'InfoWars', 'Conspiracy Theory', 'Defamation', 'Mass Shooting Denial'],
  'santos-fraud': ['George Santos', 'Congressional Fraud', 'Wire Fraud', 'Identity Theft', 'Campaign Finance', 'House Ethics'],
  'saudi-arms-sales': ['Saudi Arabia', 'Arms Sales', 'Yemen War', 'Military-Industrial Complex', 'War Crimes', 'Lockheed Martin', 'Raytheon'],
  'sec-failures': ['SEC', 'Regulatory Failure', 'Madoff', 'Revolving Door', 'Financial Regulation', 'Whistleblower', 'Enforcement'],
  'silicon-valley-politics': ['Silicon Valley', 'Tech Politics', 'Dark Money', 'Elon Musk', 'DOGE', 'Platform Power', 'Lobbying'],
  'social-engineering-fraud': ['Social Engineering', 'Cybercrime', 'BEC', 'Romance Scams', 'Deepfake', 'Phishing', 'Elder Fraud'],
  'spac-fraud': ['SPAC', 'Blank Check', 'Securities Fraud', 'Nikola', 'SEC', 'Retail Investor', 'Wall Street'],
  'stand-your-ground': ['Stand Your Ground', 'Castle Doctrine', 'NRA', 'ALEC', 'Gun Violence', 'Racial Profiling', 'Self-Defense'],
  'surveillance-capitalism': ['Surveillance Capitalism', 'Data Mining', 'Big Tech', 'Privacy', 'Behavioral Modification', 'Shoshana Zuboff'],

  // t.ts
  'tech-billionaire-influence': ['Tech Billionaire', 'Political Influence', 'Elon Musk', 'Peter Thiel', 'Platform Power', 'Oligarchy', 'Dark Money'],
  'tech-industry-sexism': ['Tech Industry Sexism', 'Gender Discrimination', 'Silicon Valley', 'Harassment', 'Equal Pay', 'Diversity'],
  'tech-monopolies': ['Tech Monopoly', 'Antitrust', 'Google', 'Amazon', 'Apple', 'Meta', 'Market Dominance'],
  'tech-oligarchy': ['Tech Oligarchy', 'Billionaire Power', 'Platform Control', 'Regulatory Capture', 'Corporate Lobbying', 'Democracy'],
  'teen-nicotine-addiction': ['Vaping', 'Juul', 'Nicotine Addiction', 'Youth Health', 'FDA', 'E-Cigarette', 'Tobacco Industry'],
  'telecom-privacy': ['Telecom Privacy', 'Location Data', 'NSA', 'SIM Swapping', 'AT&T', 'T-Mobile', 'Surveillance', 'Data Breach'],
  'trail-of-tears': ['Trail of Tears', 'Native American', 'Indian Removal Act', 'Andrew Jackson', 'Cherokee', 'Genocide', 'Forced Relocation'],
  'trayvon-martin': ['Trayvon Martin', 'George Zimmerman', 'Stand Your Ground', 'Racial Profiling', 'Civil Rights', 'Sanford Police'],
  'tyco-scandal': ['Tyco International', 'Dennis Kozlowski', 'Corporate Fraud', 'Executive Theft', 'Securities Fraud', 'Corporate Governance'],
  'tyre-nichols': ['Tyre Nichols', 'Memphis Police', 'SCORPION Unit', 'Police Violence', 'Excessive Force', 'DOJ'],

  // u.ts
  'ukraine-policy': ['Ukraine', 'Foreign Policy', 'Impeachment', 'Military Aid', 'Zelensky', 'Trump', 'Quid Pro Quo'],

  // w.ts
  'white-supremacy': ['White Supremacy', 'Systemic Racism', 'Racial Justice', 'Civil Rights', 'Institutional Racism', 'Jim Crow', 'Structural Inequality'],

  // === Batch 2: Semi-generic patterns ===

  // c.ts
  'child-exploitation': ['Child Exploitation', 'CSAM', 'Trafficking', 'Online Safety', 'DOJ', 'NCMEC', 'Section 230'],
  'child-sexual-abuse': ['Child Sexual Abuse', 'Institutional Abuse', 'Mandatory Reporting', 'Clergy Abuse', 'Cover-up', 'Grooming'],

  // d.ts
  'donor-crimes': ['Dark Money', 'Campaign Finance', 'Political Donors', 'Corruption', 'Pay-to-Play', 'Citizens United'],
  'dupont-crimes': ['DuPont', 'PFAS', 'Chemical Contamination', 'Corporate Crime', 'Environmental Pollution', 'Teflon', 'C8'],

  // f.ts
  'fast-food-labor': ['Fast Food', 'Wage Theft', 'Labor Rights', 'Minimum Wage', 'Fight for $15', 'Worker Exploitation'],
  'fossil-fuel-crimes': ['Fossil Fuel', 'Environmental Crime', 'Climate Fraud', 'Oil Spill', 'Pipeline', 'Carbon Emissions'],

  // g.ts
  'gig-economy-exploitation': ['Gig Economy', 'Uber', 'Lyft', 'DoorDash', 'Worker Misclassification', 'Labor Rights', 'AB5'],

  // i.ts
  'ice-detention-deaths': ['ICE', 'Detention Deaths', 'Immigration', 'CBP', 'Private Prisons', 'Medical Neglect', 'DHS'],

  // m.ts
  'menendez-bribery': ['Menendez', 'Bribery', 'Senate Corruption', 'Gold Bars', 'FARA', 'Egypt', 'New Jersey'],
  'military-industrial-ai': ['Military AI', 'Autonomous Weapons', 'Pentagon', 'Artificial Intelligence', 'Killer Robots', 'Project Maven'],
  'military-industrial-complex': ['Military-Industrial Complex', 'Defense Spending', 'Pentagon', 'Lockheed Martin', 'Revolving Door', 'War Profiteering'],
  'military-readiness': ['Military Readiness', 'Defense Waste', 'Pentagon Audit', 'Troop Welfare', 'Base Closures', 'Procurement Fraud'],
  'monsanto-crimes': ['Monsanto', 'Bayer', 'Roundup', 'Glyphosate', 'PCB Contamination', 'Agent Orange', 'GMO'],

  // p.ts
  'protest-violence': ['Protest Violence', 'State Violence', 'Police Brutality', 'Tear Gas', 'Civil Liberties', 'First Amendment'],
  'public-health-threats': ['Public Health', 'Environmental Health', 'Toxic Exposure', 'Cancer Cluster', 'Water Contamination', 'Lead Poisoning'],
  'pulse-shooting': ['Pulse Nightclub', 'Orlando', 'Mass Shooting', 'LGBTQ Violence', 'Gun Violence', 'Domestic Terrorism'],
  'purdue-pharma': ['Purdue Pharma', 'Opioid Crisis', 'OxyContin', 'Sackler Family', 'Pharmaceutical Fraud', 'FDA', 'Addiction'],

  // r.ts
  'religious-abuse': ['Religious Abuse', 'Institutional Abuse', 'Clergy', 'Cover-up', 'Mandatory Reporting', 'Survivor Advocacy'],
  'russia-ukraine-war': ['Russia-Ukraine War', 'Putin', 'NATO', 'War Crimes', 'Bucha', 'International Law', 'Sanctions'],

  // s.ts
  'school-shootings': ['School Shootings', 'Gun Violence', 'Mass Shooting', 'Active Shooter', 'Gun Control', 'NRA', 'Youth Safety'],
  'scientology-abuses': ['Scientology', 'David Miscavige', 'Cult', 'Sea Org', 'Disconnection', 'Forced Labor', 'Tax Exemption'],
  'serial-killings': ['Serial Killings', 'Criminal Investigation', 'FBI', 'Cold Case', 'Forensic Science', 'Victim Advocacy'],
  'sex-trafficking': ['Sex Trafficking', 'Human Trafficking', 'TVPA', 'Exploitation', 'DOJ', 'Polaris Project', 'Survivor Rights'],
  'sexual-exploitation': ['Sexual Exploitation', 'Power Abuse', 'Institutional Failure', 'Victim Rights', 'DOJ', 'Cover-up'],
  'sexual-harassment': ['Sexual Harassment', 'MeToo', 'Workplace', 'Title VII', 'EEOC', 'Forced Arbitration', 'Power Abuse'],
  'spacey-assault': ['Kevin Spacey', 'Sexual Assault', 'Old Vic', 'MeToo', 'Criminal Trial', 'Power Abuse'],
  'starbucks-union-busting': ['Starbucks', 'Union Busting', 'NLRB', 'Unfair Labor Practice', 'Howard Schultz', 'Workers United'],
  'sutherland-springs-shooting': ['Sutherland Springs', 'Mass Shooting', 'Gun Violence', 'Air Force', 'Background Check', 'NICS Failure'],

  // t.ts
  'tamir-rice-shooting': ['Tamir Rice', 'Police Violence', 'Cleveland', 'Child Victim', 'Grand Jury', 'Use of Force', 'DOJ'],
  'tech-labor-exploitation': ['Tech Labor', 'Worker Exploitation', 'Gig Economy', 'Content Moderation', 'Contractor Abuse', 'Silicon Valley'],
  'texas-border-cruelty': ['Texas Border', 'Operation Lone Star', 'Greg Abbott', 'Immigration', 'Cruelty', 'Razor Wire', 'Migrant Deaths'],
  'tree-of-life-massacre': ['Tree of Life', 'Pittsburgh', 'Antisemitic Violence', 'Mass Shooting', 'White Supremacy', 'Gun Violence'],
  'trump-admin-2': ['Trump Administration', 'Second Term', 'DOGE', 'Executive Power', 'Project 2025', 'Democratic Erosion'],
  'trump-admin-corruption': ['Trump Administration', 'Corruption', 'Emoluments', 'Self-Dealing', 'Nepotism', 'Financial Conflicts'],
  'trump-administration': ['Trump Administration', 'Executive Power', 'Norm Violation', 'DOJ Politicization', 'Institutional Damage'],
  'trump-corruption': ['Trump Corruption', 'Financial Fraud', 'Tax Fraud', 'Emoluments', 'Self-Dealing', 'NY AG', 'Manhattan DA'],
  'trump-impeachment': ['Trump Impeachment', 'Ukraine', 'Abuse of Power', 'Obstruction', 'January 6', 'Senate Trial'],
  'trump-tax-cuts': ['Trump Tax Cuts', 'TCJA', 'Tax Policy', 'Wealth Inequality', 'Corporate Tax', 'Deficit', 'Trickle-down'],
  'turkey-authoritarianism': ['Turkey', 'Erdogan', 'Authoritarianism', 'Press Freedom', 'Political Prisoners', 'Coup', 'Kurdish Repression'],
  'tyre-nichols-murder': ['Tyre Nichols', 'Memphis Police', 'SCORPION Unit', 'Police Violence', 'Excessive Force', 'Body Camera'],

  // w.ts
  'walmart-labor': ['Walmart', 'Labor Rights', 'Wage Theft', 'Union Suppression', 'Working Conditions', 'Worker Safety'],
  'war-on-terror-abuses': ['War on Terror', 'CIA', 'NSA', 'Torture', 'Mass Surveillance', 'Drone Strikes', 'Rendition'],
  'wartime-civil-liberties': ['Wartime Civil Liberties', 'Alien and Sedition Acts', 'PATRIOT Act', 'Japanese Internment', 'Habeas Corpus', 'First Amendment'],
  'white-supremacist-terrorism': ['White Supremacist Terrorism', 'Domestic Terrorism', 'Hate Crime', 'FBI', 'Radicalization', 'Lone Wolf'],
  'white-supremacist-violence': ['White Supremacist Violence', 'Hate Crime', 'Racial Violence', 'Extremism', 'ADL', 'SPLC'],
  'worker-misclassification': ['Worker Misclassification', 'Gig Economy', 'Uber', 'Independent Contractor', 'DOL', 'AB5', 'Labor Rights'],
};

function findSlugForLine(lines, lineIndex) {
  for (let i = lineIndex; i >= Math.max(0, lineIndex - 40); i--) {
    const match = lines[i].match(/^\s*'([a-z0-9-]+)':\s*\{/);
    if (match) return match[1];
  }
  return null;
}

function isGenericTagLine(line) {
  return GENERIC_PATTERNS.some(p => p.test(line));
}

let totalFixed = 0;
let totalSkipped = 0;

const files = readdirSync(DATA_DIR).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

for (const filename of files) {
  const filepath = join(DATA_DIR, filename);
  const content = readFileSync(filepath, 'utf-8');
  const lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    if (isGenericTagLine(lines[i])) {
      const slug = findSlugForLine(lines, i);
      if (slug && TAG_MAP[slug]) {
        const newTags = TAG_MAP[slug].map(t => `'${t}'`).join(', ');
        const indent = lines[i].match(/^(\s*)/)[1];
        lines[i] = `${indent}tags: [${newTags}],`;
        console.log(`  FIXED: ${filename}:${i + 1} ${slug}`);
        totalFixed++;
        changed = true;
      } else {
        console.log(`  SKIP: ${filename}:${i + 1} slug=${slug} (no mapping)`);
        totalSkipped++;
      }
    }
  }

  if (changed) {
    writeFileSync(filepath, lines.join('\n'), 'utf-8');
    console.log(`  => Saved ${filename}`);
  }
}

console.log(`\nDone: ${totalFixed} fixed, ${totalSkipped} skipped`);
