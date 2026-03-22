// generate-statute-mappings.js
// Maps investigations to relevant federal statutes based on category and content keywords
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Category-to-statute mapping
const CATEGORY_STATUTES = {
  'Financial Crime': [
    { code: '18 U.S.C. § 1343', description: 'Wire Fraud' },
    { code: '18 U.S.C. § 1344', description: 'Bank Fraud' },
    { code: '18 U.S.C. § 1956', description: 'Money Laundering' },
  ],
  'Political Corruption': [
    { code: '18 U.S.C. § 201', description: 'Bribery of Public Officials' },
    { code: '18 U.S.C. § 1346', description: 'Honest Services Fraud' },
    { code: '18 U.S.C. § 1001', description: 'False Statements' },
  ],
  'Government Accountability': [
    { code: '18 U.S.C. § 1001', description: 'False Statements' },
    { code: '18 U.S.C. § 1505', description: 'Obstruction of Proceedings' },
    { code: '5 U.S.C. § 2302', description: 'Prohibited Personnel Practices' },
  ],
  'Corporate Accountability': [
    { code: '18 U.S.C. § 1341', description: 'Mail Fraud' },
    { code: '18 U.S.C. § 1343', description: 'Wire Fraud' },
    { code: '15 U.S.C. § 78j(b)', description: 'Securities Fraud' },
  ],
  'Economic Exploitation': [
    { code: '18 U.S.C. § 1343', description: 'Wire Fraud' },
    { code: '15 U.S.C. § 1', description: 'Sherman Antitrust Act' },
    { code: '29 U.S.C. § 201', description: 'Fair Labor Standards Act' },
  ],
  'Environmental Crime': [
    { code: '42 U.S.C. § 7413', description: 'Clean Air Act Violations' },
    { code: '33 U.S.C. § 1319', description: 'Clean Water Act Violations' },
    { code: '42 U.S.C. § 6928', description: 'RCRA Violations' },
  ],
  'Civil Rights': [
    { code: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law' },
    { code: '42 U.S.C. § 1983', description: 'Civil Action for Deprivation of Rights' },
    { code: '18 U.S.C. § 245', description: 'Federally Protected Activities' },
  ],
  'Human Rights': [
    { code: '18 U.S.C. § 2340A', description: 'Torture' },
    { code: '18 U.S.C. § 1091', description: 'Genocide' },
    { code: '18 U.S.C. § 2441', description: 'War Crimes' },
  ],
  'National Security': [
    { code: '18 U.S.C. § 793', description: 'Espionage Act' },
    { code: '50 U.S.C. § 1801', description: 'Foreign Intelligence Surveillance Act' },
    { code: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States' },
  ],
  'Institutional Corruption': [
    { code: '18 U.S.C. § 201', description: 'Bribery of Public Officials' },
    { code: '18 U.S.C. § 1346', description: 'Honest Services Fraud' },
    { code: '18 U.S.C. § 1962', description: 'RICO' },
  ],
  'Healthcare': [
    { code: '18 U.S.C. § 1347', description: 'Health Care Fraud' },
    { code: '31 U.S.C. § 3729', description: 'False Claims Act' },
    { code: '42 U.S.C. § 1320a-7b', description: 'Anti-Kickback Statute' },
  ],
  'Healthcare Fraud': [
    { code: '18 U.S.C. § 1347', description: 'Health Care Fraud' },
    { code: '31 U.S.C. § 3729', description: 'False Claims Act' },
    { code: '42 U.S.C. § 1320a-7b', description: 'Anti-Kickback Statute' },
  ],
  'Market Manipulation': [
    { code: '15 U.S.C. § 78j(b)', description: 'Securities Fraud' },
    { code: '18 U.S.C. § 1343', description: 'Wire Fraud' },
    { code: '15 U.S.C. § 78ff', description: 'Securities Exchange Act Penalties' },
  ],
  'Police Misconduct': [
    { code: '18 U.S.C. § 242', description: 'Deprivation of Rights Under Color of Law' },
    { code: '42 U.S.C. § 1983', description: 'Civil Action for Deprivation of Rights' },
    { code: '42 U.S.C. § 14141', description: 'Pattern or Practice of Police Misconduct' },
  ],
  'Systemic Racism': [
    { code: '42 U.S.C. § 1983', description: 'Civil Action for Deprivation of Rights' },
    { code: '42 U.S.C. § 2000e', description: 'Title VII Civil Rights Act' },
    { code: '52 U.S.C. § 10301', description: 'Voting Rights Act' },
  ],
  'Election Interference': [
    { code: '52 U.S.C. § 20511', description: 'Criminal Penalties for Election Fraud' },
    { code: '52 U.S.C. § 30121', description: 'Foreign National Contribution Prohibition' },
    { code: '18 U.S.C. § 594', description: 'Intimidation of Voters' },
  ],
  'Digital Privacy': [
    { code: '18 U.S.C. § 2511', description: 'Wiretap Act' },
    { code: '18 U.S.C. § 1030', description: 'Computer Fraud and Abuse Act' },
    { code: '15 U.S.C. § 45', description: 'FTC Act Section 5 (Deceptive Practices)' },
  ],
  'Surveillance': [
    { code: '50 U.S.C. § 1801', description: 'Foreign Intelligence Surveillance Act' },
    { code: '18 U.S.C. § 2511', description: 'Wiretap Act' },
    { code: '12 U.S.C. § 3401', description: 'Right to Financial Privacy Act' },
  ],
  'Military-Industrial Complex': [
    { code: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States' },
    { code: '31 U.S.C. § 3729', description: 'False Claims Act' },
    { code: '18 U.S.C. § 1001', description: 'False Statements' },
  ],
  'Corporate Monopoly': [
    { code: '15 U.S.C. § 1', description: 'Sherman Antitrust Act' },
    { code: '15 U.S.C. § 18', description: 'Clayton Antitrust Act' },
    { code: '15 U.S.C. § 45', description: 'FTC Act Section 5' },
  ],
  'Propaganda': [
    { code: '22 U.S.C. § 611', description: 'Foreign Agents Registration Act' },
    { code: '18 U.S.C. § 1001', description: 'False Statements' },
  ],
  'Investigation': [
    { code: '18 U.S.C. § 1001', description: 'False Statements' },
  ],
};

// Content keyword to additional statute mapping
const KEYWORD_STATUTES = [
  { keywords: ['RICO', 'racketeering', 'organized crime', 'enterprise'], statute: { code: '18 U.S.C. § 1962', description: 'RICO - Racketeering' } },
  { keywords: ['insider trading', 'securities fraud', 'SEC'], statute: { code: '15 U.S.C. § 78j(b)', description: 'Securities Fraud / Rule 10b-5' } },
  { keywords: ['tax evasion', 'tax fraud', 'IRS'], statute: { code: '26 U.S.C. § 7201', description: 'Tax Evasion' } },
  { keywords: ['FARA', 'foreign agent', 'foreign lobbying'], statute: { code: '22 U.S.C. § 611', description: 'Foreign Agents Registration Act' } },
  { keywords: ['torture', 'enhanced interrogation', 'waterboard'], statute: { code: '18 U.S.C. § 2340A', description: 'Torture' } },
  { keywords: ['trafficking', 'sex trafficking', 'human trafficking'], statute: { code: '18 U.S.C. § 1591', description: 'Sex Trafficking' } },
  { keywords: ['child abuse', 'child sexual', 'minors', 'CSAM'], statute: { code: '18 U.S.C. § 2251', description: 'Sexual Exploitation of Children' } },
  { keywords: ['conspiracy', 'conspired', 'conspiring'], statute: { code: '18 U.S.C. § 371', description: 'Conspiracy' } },
  { keywords: ['obstruction of justice', 'obstruct'], statute: { code: '18 U.S.C. § 1503', description: 'Obstruction of Justice' } },
  { keywords: ['perjury', 'lied under oath', 'false testimony'], statute: { code: '18 U.S.C. § 1621', description: 'Perjury' } },
  { keywords: ['antitrust', 'monopoly', 'price-fixing', 'anti-competitive'], statute: { code: '15 U.S.C. § 1', description: 'Sherman Antitrust Act' } },
  { keywords: ['environmental', 'pollution', 'contamination', 'toxic'], statute: { code: '42 U.S.C. § 9601', description: 'CERCLA (Superfund)' } },
  { keywords: ['voting rights', 'voter suppression', 'election fraud'], statute: { code: '52 U.S.C. § 10301', description: 'Voting Rights Act' } },
  { keywords: ['campaign finance', 'dark money', 'PAC'], statute: { code: '52 U.S.C. § 30101', description: 'Federal Election Campaign Act' } },
  { keywords: ['whistleblower', 'retaliation'], statute: { code: '18 U.S.C. § 1513', description: 'Witness/Whistleblower Retaliation' } },
  { keywords: ['FCPA', 'Foreign Corrupt Practices', 'foreign bribery'], statute: { code: '15 U.S.C. § 78dd-1', description: 'Foreign Corrupt Practices Act' } },
  { keywords: ['war crimes', 'Geneva', 'laws of war'], statute: { code: '18 U.S.C. § 2441', description: 'War Crimes Act' } },
  { keywords: ['drug', 'narcotic', 'controlled substance', 'DEA'], statute: { code: '21 U.S.C. § 841', description: 'Controlled Substances Act' } },
  { keywords: ['False Claims', 'overbilling', 'government fraud'], statute: { code: '31 U.S.C. § 3729', description: 'False Claims Act' } },
  { keywords: ['civil rights', 'discrimination', 'equal protection'], statute: { code: '42 U.S.C. § 1983', description: 'Civil Rights Act § 1983' } },
];

function processFiles() {
  const files = fs.readdirSync(DATA_DIR).filter(f => 
    f.endsWith('.ts') && !['index.ts','types.ts','categories.ts','documents.ts','moneyTrails.ts','statutes.ts','investigationStatutes.ts'].includes(f)
  );

  const mapping = {}; // slug -> statute[]

  for (const f of files) {
    const src = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
    
    const slugRegex = /'([a-z0-9-]+)':\s*\{/g;
    let match;
    const slugs = [];
    while ((match = slugRegex.exec(src)) !== null) {
      slugs.push({ slug: match[1], pos: match.index });
    }

    for (let i = 0; i < slugs.length; i++) {
      const { slug, pos } = slugs[i];
      const endPos = i + 1 < slugs.length ? slugs[i + 1].pos : src.length;
      const block = src.substring(pos, endPos);

      // Extract category
      const catMatch = block.match(/category:\s*'([^']*)'/);
      const category = catMatch ? catMatch[1] : '';

      // Get category-based statutes
      const statutes = new Map();
      
      // Direct category match
      if (CATEGORY_STATUTES[category]) {
        for (const s of CATEGORY_STATUTES[category]) {
          statutes.set(s.code, s);
        }
      }

      // Partial category match
      for (const [catKey, catStatutes] of Object.entries(CATEGORY_STATUTES)) {
        if (category.toLowerCase().includes(catKey.toLowerCase()) || catKey.toLowerCase().includes(category.toLowerCase())) {
          for (const s of catStatutes) {
            if (!statutes.has(s.code)) statutes.set(s.code, s);
          }
        }
      }

      // Content-based keyword matching
      const contentMatch = block.match(/content:\s*\[([\s\S]*?)\],\s*(?:tags|sources)/);
      const contentText = contentMatch ? contentMatch[1] : '';
      const summaryMatch = block.match(/summary:\s*'((?:[^'\\]|\\.)*)'/);
      const summary = summaryMatch ? summaryMatch[1] : '';
      const fullText = contentText + ' ' + summary;

      for (const { keywords, statute } of KEYWORD_STATUTES) {
        if (keywords.some(kw => fullText.toLowerCase().includes(kw.toLowerCase()))) {
          if (!statutes.has(statute.code)) {
            statutes.set(statute.code, statute);
          }
        }
      }

      // Only include if we found at least one statute
      if (statutes.size > 0) {
        mapping[slug] = Array.from(statutes.values()).slice(0, 5); // Max 5 per investigation
      }
    }
  }

  return mapping;
}

const mapping = processFiles();

// Generate the TypeScript file
let output = `/**
 * Investigation-to-Statute Cross-Reference Database
 * Maps investigation slugs to relevant federal statutes.
 * Auto-generated based on investigation categories and content analysis.
 */

const investigationStatutes: Record<string, { code: string; description?: string }[]> = {\n`;

const sortedSlugs = Object.keys(mapping).sort();
let count = 0;

for (const slug of sortedSlugs) {
  const statutes = mapping[slug];
  output += `  '${slug}': [\n`;
  for (const s of statutes) {
    output += `    { code: '${s.code}', description: '${s.description}' },\n`;
  }
  output += `  ],\n`;
  count++;
}

output += `};\n\nexport default investigationStatutes;\n`;

fs.writeFileSync(path.join(DATA_DIR, 'investigationStatutes.ts'), output, 'utf8');
console.log(`Generated statute mappings for ${count} investigations (${sortedSlugs.length} slugs)`);
