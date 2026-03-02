// Extract category mapping data from individual profiles
// Run: node scripts/extract-category-data.js
const fs = require('fs');

const content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Extract all profiles with their slugs and relatedInvestigations
const profileRegex = /'([a-z0-9-]+)':\s*\{[^}]*name:\s*'([^']+)'[^}]*title:\s*'([^']+)'[^}]*riskLevel:\s*'([^']+)'/g;
const relatedRegex = /relatedInvestigations:\s*\[([\s\S]*?)\]/g;

// Simpler approach: find slug keys and their relatedInvestigations
const lines = content.split('\n');
let currentSlug = null;
let currentName = null;
let currentTitle = null;
let currentRisk = null;
let inRelated = false;
let relatedBuffer = '';

const categoryMap = {}; // slug -> Set of individual slugs
const individuals = {}; // slug -> { name, title, riskLevel }

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect profile start - key pattern like 'some-slug': {
  const slugMatch = line.match(/^\s+'([a-z][a-z0-9-]+)':\s*\{/);
  if (slugMatch && !line.includes('title:') && !line.includes('name:')) {
    currentSlug = slugMatch[1];
  }
  
  // Get name
  const nameMatch = line.match(/^\s+name:\s*'([^']+)'/);
  if (nameMatch && currentSlug) {
    currentName = nameMatch[1];
  }
  
  // Get title
  const titleMatch = line.match(/^\s+title:\s*'([^']+)'/);
  if (titleMatch && currentSlug && currentName) {
    currentTitle = titleMatch[1];
  }
  
  // Get riskLevel
  const riskMatch = line.match(/riskLevel:\s*'([^']+)'/);
  if (riskMatch && currentSlug) {
    currentRisk = riskMatch[1];
  }
  
  // Detect relatedInvestigations start
  if (line.includes('relatedInvestigations:') && currentSlug && currentName) {
    // Save individual info
    individuals[currentSlug] = { name: currentName, title: currentTitle || '', riskLevel: currentRisk || 'medium' };
    
    // Check if it's all on one line
    const oneLine = line.match(/relatedInvestigations:\s*\[(.*)\]/);
    if (oneLine) {
      // Parse slugs from the one-liner
      const slugMatches = oneLine[1].matchAll(/slug:\s*'([^']+)'/g);
      for (const m of slugMatches) {
        const invSlug = m[1];
        if (!categoryMap[invSlug]) categoryMap[invSlug] = new Set();
        categoryMap[invSlug].add(currentSlug);
      }
    } else {
      inRelated = true;
      relatedBuffer = '';
    }
  }
  
  if (inRelated) {
    relatedBuffer += line;
    if (line.includes('],')) {
      inRelated = false;
      const slugMatches = relatedBuffer.matchAll(/slug:\s*'([^']+)'/g);
      for (const m of slugMatches) {
        const invSlug = m[1];
        if (!categoryMap[invSlug]) categoryMap[invSlug] = new Set();
        categoryMap[invSlug].add(currentSlug);
      }
    }
  }
}

// Now build category definitions
const categories = {
  'sexual-assault': {
    name: 'Sexual Assault & Misconduct',
    description: 'Individuals with documented sexual assault, harassment, abuse, or misconduct allegations and convictions.',
    matchSlugs: ['sexual-assault', 'sexual-exploitation', 'sexual-harassment', 'cosby-sexual-assault', 'weinstein-sexual-assault', 'sex-trafficking', 'sex-trafficking-network', 'elite-trafficking', 'epstein-network', 'global-trafficking'],
  },
  'election-interference': {
    name: 'Election Interference',
    description: 'Individuals involved in documented election interference, voter suppression, and attempts to overturn democratic elections.',
    matchSlugs: ['election-interference', 'election-denial', 'election-disinformation', 'election-misinformation', 'federal-election-conspiracy', 'russian-election-interference', '2020-election-overturn', 'fake-electors', 'georgia-rico', 'january-6-insurrection'],
  },
  'financial-fraud': {
    name: 'Financial Fraud',
    description: 'Individuals involved in financial fraud, embezzlement, securities fraud, and corporate corruption.',
    matchSlugs: ['financial-fraud', 'corporate-fraud-scandals', 'financial-crisis-profiteering', 'trump-org-fraud', 'securities-fraud', '2008-financial-crisis', 'bernie-madoff-ponzi', 'enron-fraud', 'ftx-crypto-fraud', 'theranos-fraud'],
  },
  'human-trafficking': {
    name: 'Human Trafficking',
    description: 'Individuals connected to human trafficking, sex trafficking, and forced labor operations.',
    matchSlugs: ['global-trafficking', 'human-trafficking', 'sex-trafficking', 'elite-trafficking', 'epstein-network', 'sex-trafficking-network'],
  },
  'obstruction-of-justice': {
    name: 'Obstruction of Justice',
    description: 'Individuals documented to have obstructed justice, tampered with witnesses, destroyed evidence, or interfered with legal proceedings.',
    matchSlugs: ['obstruction-of-justice', 'mueller-obstruction', 'obstruction'],
  },
  'tax-evasion': {
    name: 'Tax Evasion',
    description: 'Individuals involved in tax evasion, tax fraud, and systematic tax avoidance schemes.',
    matchSlugs: ['tax-evasion', 'corporate-tax-avoidance', 'billionaire-tax-avoidance', 'panama-papers', 'pandora-papers'],
  },
  'money-laundering': {
    name: 'Money Laundering',
    description: 'Individuals connected to money laundering operations, shell companies, and illicit financial networks.',
    matchSlugs: ['money-laundering', 'russian-money-laundering', 'deutsche-bank-laundering', 'panama-papers'],
  },
  'bribery-corruption': {
    name: 'Bribery & Corruption',
    description: 'Individuals involved in bribery, public corruption, influence peddling, and abuse of power.',
    matchSlugs: ['bribery-corruption', 'menendez-bribery', 'corruption', 'dark-money', 'citizens-united'],
  },
  'campaign-finance': {
    name: 'Campaign Finance Crimes',
    description: 'Individuals who violated campaign finance laws, made illegal contributions, or engaged in straw donor schemes.',
    matchSlugs: ['campaign-finance', 'hush-money', 'citizens-united', 'dark-money'],
  },
  'seditious-conspiracy': {
    name: 'Seditious Conspiracy',
    description: 'Individuals charged with or connected to seditious conspiracy against the United States government.',
    matchSlugs: ['oath-keepers-sedition', 'january-6-insurrection', 'seditious-conspiracy', 'proud-boys-sedition'],
  },
  'racketeering': {
    name: 'Racketeering (RICO)',
    description: 'Individuals charged under RICO statutes or documented as part of criminal enterprises.',
    matchSlugs: ['georgia-rico', 'racketeering', 'rico'],
  },
  'war-crimes': {
    name: 'War Crimes & Crimes Against Humanity',
    description: 'Individuals connected to war crimes, crimes against humanity, genocide, and violations of international law.',
    matchSlugs: ['war-crimes', 'iraq-war-lies', 'vietnam-war-crimes', 'cia-torture-program', 'drone-warfare', 'laos-secret-bombing', 'cambodia-bombing', 'agent-orange', 'abu-ghraib', 'guantanamo'],
  },
  'environmental-crimes': {
    name: 'Environmental Crimes',
    description: 'Individuals and corporate officers responsible for environmental destruction, pollution, and climate disinformation.',
    matchSlugs: ['environmental-crime', 'exxon-climate-coverup', 'dupont-pfas-poisoning', 'water-contamination-nationwide', 'flint-water-crisis', 'deepwater-horizon', 'corporate-environmental-destruction', 'climate-sabotage'],
  },
  'civil-rights-violations': {
    name: 'Civil Rights Violations',
    description: 'Individuals who violated civil rights, engaged in racial discrimination, voter suppression, or systematic oppression.',
    matchSlugs: ['civil-rights-violations', 'voter-suppression', 'gerrymandering', 'muslim-ban', 'family-separation', 'police-brutality', 'racial-injustice', 'cointelpro', 'jim-crow'],
  },
  'government-surveillance': {
    name: 'Government Surveillance & Privacy Violations',
    description: 'Individuals involved in mass surveillance programs, warrantless wiretapping, and privacy violations.',
    matchSlugs: ['nsa-mass-surveillance', 'government-surveillance', 'surveillance-state', 'patriot-act'],
  },
  'corporate-homicide': {
    name: 'Corporate Homicide',
    description: 'Corporate executives and officials whose decisions directly caused preventable deaths.',
    matchSlugs: ['corporate-homicide', 'boeing-safety-crisis', 'boeing-737-max', 'lion-air-610', 'ethiopian-airlines-302', 'opioid-crisis', 'pharmaceutical-price-gouging', 'health-insurance-deaths'],
  },
  'perjury': {
    name: 'Perjury & False Statements',
    description: 'Individuals documented to have committed perjury or made false statements to federal investigators or Congress.',
    matchSlugs: ['perjury', 'false-statements', 'lying-to-congress'],
  },
  'wire-fraud': {
    name: 'Wire Fraud',
    description: 'Individuals charged with or connected to wire fraud schemes.',
    matchSlugs: ['wire-fraud', 'fraud', 'financial-fraud'],
  },
  'securities-fraud': {
    name: 'Securities Fraud',
    description: 'Individuals involved in securities fraud, insider trading, market manipulation, and investment schemes.',
    matchSlugs: ['securities-fraud', 'insider-trading', 'bernie-madoff-ponzi', 'enron-fraud', 'ftx-crypto-fraud'],
  },
};

// Build final output for each category
const output = {};
for (const [catSlug, catDef] of Object.entries(categories)) {
  const individualSlugs = new Set();
  for (const matchSlug of catDef.matchSlugs) {
    if (categoryMap[matchSlug]) {
      for (const indSlug of categoryMap[matchSlug]) {
        individualSlugs.add(indSlug);
      }
    }
  }
  
  const people = [];
  for (const slug of individualSlugs) {
    if (individuals[slug]) {
      people.push({ slug, ...individuals[slug] });
    }
  }
  
  // Sort by name
  people.sort((a, b) => a.name.localeCompare(b.name));
  
  output[catSlug] = {
    ...catDef,
    count: people.length,
    individuals: people,
  };
  
  console.log(`${catDef.name}: ${people.length} individuals`);
}

// Write the category data file
let tsContent = `// Auto-generated category data - maps crime categories to individuals\n`;
tsContent += `// Generated: ${new Date().toISOString()}\n\n`;
tsContent += `export interface CategoryIndividual {\n  slug: string;\n  name: string;\n  title: string;\n  riskLevel: string;\n}\n\n`;
tsContent += `export interface CategoryData {\n  name: string;\n  description: string;\n  individuals: CategoryIndividual[];\n}\n\n`;
tsContent += `export const categoryDatabase: Record<string, CategoryData> = {\n`;

for (const [catSlug, catData] of Object.entries(output)) {
  tsContent += `  '${catSlug}': {\n`;
  tsContent += `    name: '${catData.name.replace(/'/g, "\\'")}',\n`;
  tsContent += `    description: '${catData.description.replace(/'/g, "\\'")}',\n`;
  tsContent += `    individuals: [\n`;
  for (const person of catData.individuals) {
    tsContent += `      { slug: '${person.slug}', name: '${person.name.replace(/'/g, "\\'")}', title: '${person.title.replace(/'/g, "\\'")}', riskLevel: '${person.riskLevel}' },\n`;
  }
  tsContent += `    ],\n`;
  tsContent += `  },\n`;
}

tsContent += `};\n\n`;
tsContent += `export const allCategorySlugs = ${JSON.stringify(Object.keys(output))};\n`;

fs.writeFileSync('src/data/categories.ts', tsContent, 'utf8');
console.log('\nWrote src/data/categories.ts');
console.log(`Total categories: ${Object.keys(output).length}`);
console.log(`Total unique individuals across all categories: ${new Set(Object.values(output).flatMap(c => c.individuals.map(i => i.slug))).size}`);
