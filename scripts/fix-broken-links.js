/**
 * fix-broken-links.js
 * 
 * This script fixes all broken affiliation hrefs in investigation data files by:
 * 1. Remapping duplicate/alternate slugs to existing canonical slugs
 * 2. Adding missing entity entries to the respective data files
 * 3. Fixing invalid href formats
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const INV_DIR = path.join(DATA_DIR, 'investigations');

// ========== REMAPPINGS ==========
// These are alternate slugs that should point to existing entities
const SLUG_REMAPS = {
  // Agencies
  'department-of-justice': 'doj',
  'bureau-of-indian-affairs': 'bia',
  'us-supreme-court': 'supreme-court',
  'us-public-health-service': 'public-health-service',
  'department-of-veterans-affairs': 'va', // va will be added as new
  'russian-gru': 'gru',
  'indian-health-service': 'ihs', // ihs will be added as new
};

// ========== NEW AGENCY ENTRIES ==========
const NEW_AGENCIES = {
  'sba': {
    id: 'sba-1',
    slug: 'sba',
    name: 'Small Business Administration',
    type: 'agency',
    description: 'Federal agency providing support to small businesses. Faced scrutiny over PPP loan fraud during COVID-19 pandemic, with billions in fraudulent claims.',
    role: 'Federal Independent Agency',
    investigationCount: 2,
    riskLevel: 'moderate',
  },
  'tsa': {
    id: 'tsa-1',
    slug: 'tsa',
    name: 'Transportation Security Administration',
    type: 'agency',
    description: 'Created post-9/11 to secure transportation systems. Criticized for invasive screening, racial profiling, and massive budget with questionable effectiveness.',
    role: 'Federal Security Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'fincen': {
    id: 'fincen-1',
    slug: 'fincen',
    name: 'Financial Crimes Enforcement Network',
    type: 'agency',
    description: 'Bureau of the Treasury Department that combats financial crimes. FinCEN Files leak revealed major banks moving trillions in suspicious transactions.',
    role: 'Federal Bureau (Treasury)',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'dol': {
    id: 'dol-1',
    slug: 'dol',
    name: 'Department of Labor',
    type: 'agency',
    description: 'Federal department responsible for labor standards, workplace safety, and employment. Accused of weakening worker protections and enabling wage theft.',
    role: 'Federal Executive Department',
    investigationCount: 9,
    riskLevel: 'high',
  },
  'nlrb': {
    id: 'nlrb-1',
    slug: 'nlrb',
    name: 'National Labor Relations Board',
    type: 'agency',
    description: 'Independent federal agency enforcing labor law. Accused of being captured by corporate interests and failing to protect workers organizing rights.',
    role: 'Federal Independent Agency',
    investigationCount: 2,
    riskLevel: 'moderate',
  },
  'eeoc': {
    id: 'eeoc-1',
    slug: 'eeoc',
    name: 'Equal Employment Opportunity Commission',
    type: 'agency',
    description: 'Federal agency enforcing civil rights laws against workplace discrimination. Chronically underfunded with massive case backlogs.',
    role: 'Federal Independent Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'ftc': {
    id: 'ftc-1',
    slug: 'ftc',
    name: 'Federal Trade Commission',
    type: 'agency',
    description: 'Federal agency protecting consumers and promoting competition. Decades of regulatory capture allowed monopolies to form across tech, pharma, and finance.',
    role: 'Federal Independent Agency',
    investigationCount: 31,
    riskLevel: 'extreme',
  },
  'eac': {
    id: 'eac-1',
    slug: 'eac',
    name: 'Election Assistance Commission',
    type: 'agency',
    description: 'Independent federal agency created by HAVA to assist election administration. Criticized for inadequate response to voting system vulnerabilities.',
    role: 'Federal Independent Agency',
    investigationCount: 2,
    riskLevel: 'moderate',
  },
  'nasa': {
    id: 'nasa-1',
    slug: 'nasa',
    name: 'National Aeronautics and Space Administration',
    type: 'agency',
    description: 'Federal space agency responsible for aeronautics and space research. Challenger and Columbia disasters revealed institutional failures and safety culture problems.',
    role: 'Federal Independent Agency',
    investigationCount: 3,
    riskLevel: 'moderate',
  },
  'gao': {
    id: 'gao-1',
    slug: 'gao',
    name: 'Government Accountability Office',
    type: 'agency',
    description: 'Congressional watchdog agency that audits and investigates federal spending. Reports frequently ignored by agencies they investigate.',
    role: 'Congressional Agency',
    investigationCount: 3,
    riskLevel: 'low',
  },
  'british-colonial-government': {
    id: 'bcg-1',
    slug: 'british-colonial-government',
    name: 'British Colonial Government',
    type: 'agency',
    description: 'Historical colonial administration responsible for exploitation, forced labor, and systematic oppression across Asia, Africa, and the Americas.',
    role: 'Historical Colonial Power',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'harris-county-da': {
    id: 'hcda-1',
    slug: 'harris-county-da',
    name: 'Harris County District Attorney',
    type: 'agency',
    description: 'District attorney office for Harris County, Texas. History of prosecutorial misconduct and wrongful convictions.',
    role: 'County Law Enforcement',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'texas-dcj': {
    id: 'tdcj-1',
    slug: 'texas-dcj',
    name: 'Texas Department of Criminal Justice',
    type: 'agency',
    description: 'Texas state prison system consistently ranked among the worst for conditions, heat deaths, and denial of basic medical care to inmates.',
    role: 'State Corrections Agency',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'european-commission': {
    id: 'ec-1',
    slug: 'european-commission',
    name: 'European Commission',
    type: 'agency',
    description: 'Executive branch of the European Union. Involved in regulatory actions against tech monopolies and environmental enforcement.',
    role: 'International Governing Body',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'united-states': {
    id: 'us-1',
    slug: 'united-states',
    name: 'United States Government',
    type: 'agency',
    description: 'Federal government of the United States of America. Subject of numerous investigations into corruption, civil rights violations, and abuse of power.',
    role: 'Federal Government',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'va': {
    id: 'va-1',
    slug: 'va',
    name: 'Department of Veterans Affairs',
    type: 'agency',
    description: 'Federal department providing healthcare and benefits to military veterans. Notorious wait-time scandal, systemic failures in veteran care, and widespread corruption.',
    role: 'Federal Executive Department',
    investigationCount: 7,
    riskLevel: 'extreme',
  },
  'chicago-police-department': {
    id: 'cpd-1',
    slug: 'chicago-police-department',
    name: 'Chicago Police Department',
    type: 'agency',
    description: 'Municipal police force with documented history of torture, cover-ups, and civil rights violations including the Jon Burge torture cases.',
    role: 'Municipal Law Enforcement',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'aec': {
    id: 'aec-1',
    slug: 'aec',
    name: 'Atomic Energy Commission',
    type: 'agency',
    description: 'Predecessor to the NRC and DOE. Conducted nuclear weapons tests exposing communities to radiation and covered up health effects for decades.',
    role: 'Historical Federal Agency',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'ssa': {
    id: 'ssa-1',
    slug: 'ssa',
    name: 'Social Security Administration',
    type: 'agency',
    description: 'Federal agency administering Social Security programs. Faced criticism for office closures, disability claim backlogs, and inadequate fraud prevention.',
    role: 'Federal Independent Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'louisiana-deq': {
    id: 'ldeq-1',
    slug: 'louisiana-deq',
    name: 'Louisiana Department of Environmental Quality',
    type: 'agency',
    description: 'State environmental agency criticized for failing to protect Cancer Alley communities from petrochemical pollution and environmental racism.',
    role: 'State Environmental Agency',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'dot': {
    id: 'dot-1',
    slug: 'dot',
    name: 'Department of Transportation',
    type: 'agency',
    description: 'Federal department overseeing transportation infrastructure and safety. Criticized for inadequate rail safety enforcement and infrastructure neglect.',
    role: 'Federal Executive Department',
    investigationCount: 2,
    riskLevel: 'moderate',
  },
  'ferc': {
    id: 'ferc-1',
    slug: 'ferc',
    name: 'Federal Energy Regulatory Commission',
    type: 'agency',
    description: 'Independent agency regulating energy markets. Accused of rubber-stamping pipeline projects and prioritizing industry over environmental and community concerns.',
    role: 'Federal Independent Agency',
    investigationCount: 2,
    riskLevel: 'high',
  },
  'ihs': {
    id: 'ihs-1',
    slug: 'ihs',
    name: 'Indian Health Service',
    type: 'agency',
    description: 'Federal health service for Indigenous peoples. Chronically underfunded with systemic failures leading to preventable deaths and forced sterilizations.',
    role: 'Federal Health Agency',
    investigationCount: 2,
    riskLevel: 'extreme',
  },
  'hud': {
    id: 'hud-1',
    slug: 'hud',
    name: 'Department of Housing and Urban Development',
    type: 'agency',
    description: 'Federal department responsible for housing policy. History of redlining enforcement, public housing failures, and corruption scandals.',
    role: 'Federal Executive Department',
    investigationCount: 4,
    riskLevel: 'high',
  },
  'israeli-government': {
    id: 'ig-1',
    slug: 'israeli-government',
    name: 'Government of Israel',
    type: 'agency',
    description: 'National government of Israel. Subject of investigations related to occupation policies, surveillance technology exports, and military operations.',
    role: 'National Government',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'fmcsa': {
    id: 'fmcsa-1',
    slug: 'fmcsa',
    name: 'Federal Motor Carrier Safety Administration',
    type: 'agency',
    description: 'Agency regulating commercial motor vehicles. Criticized for insufficient safety enforcement and industry-friendly regulations.',
    role: 'Federal Regulatory Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'nrc': {
    id: 'nrc-1',
    slug: 'nrc',
    name: 'Nuclear Regulatory Commission',
    type: 'agency',
    description: 'Federal agency regulating nuclear power and materials. Critics cite regulatory capture and inadequate safety oversight of aging nuclear plants.',
    role: 'Federal Independent Agency',
    investigationCount: 2,
    riskLevel: 'high',
  },
  'jioa': {
    id: 'jioa-1',
    slug: 'jioa',
    name: 'Joint Intelligence Objectives Agency',
    type: 'agency',
    description: 'Military intelligence agency that ran Operation Paperclip, recruiting Nazi scientists and war criminals to work for the United States after WWII.',
    role: 'Historical Military Intelligence',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'finra': {
    id: 'finra-1',
    slug: 'finra',
    name: 'Financial Industry Regulatory Authority',
    type: 'agency',
    description: 'Self-regulatory organization overseeing broker-dealers. Criticized as industry-captured with insufficient enforcement against Wall Street misconduct.',
    role: 'Self-Regulatory Organization',
    investigationCount: 2,
    riskLevel: 'high',
  },
  'cpuc': {
    id: 'cpuc-1',
    slug: 'cpuc',
    name: 'California Public Utilities Commission',
    type: 'agency',
    description: 'State regulatory agency overseeing utilities. Corruption scandals involving cozy relationships with PG&E amid deadly wildfire and gas explosion disasters.',
    role: 'State Regulatory Agency',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'fra': {
    id: 'fra-1',
    slug: 'fra',
    name: 'Federal Railroad Administration',
    type: 'agency',
    description: 'Federal agency regulating railroad safety. Criticized for weak enforcement, deferred maintenance oversight, and industry lobbying influence.',
    role: 'Federal Regulatory Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'department-of-education': {
    id: 'doed-1',
    slug: 'department-of-education',
    name: 'Department of Education',
    type: 'agency',
    description: 'Federal department overseeing education policy. Failed to protect students from predatory for-profit colleges and student loan servicer abuses.',
    role: 'Federal Executive Department',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
  'nhtsa': {
    id: 'nhtsa-1',
    slug: 'nhtsa',
    name: 'National Highway Traffic Safety Administration',
    type: 'agency',
    description: 'Federal agency responsible for vehicle safety. Slow to act on defect investigations, allowing dangerous vehicles to remain on roads.',
    role: 'Federal Regulatory Agency',
    investigationCount: 2,
    riskLevel: 'moderate',
  },
  'occ': {
    id: 'occ-1',
    slug: 'occ',
    name: 'Office of the Comptroller of the Currency',
    type: 'agency',
    description: 'Federal bank regulator that failed to prevent the 2008 financial crisis and has been accused of regulatory capture by the banking industry.',
    role: 'Federal Bank Regulator',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'bafin': {
    id: 'bafin-1',
    slug: 'bafin',
    name: 'Federal Financial Supervisory Authority (BaFin)',
    type: 'agency',
    description: 'German financial regulatory authority that failed to detect the Wirecard fraud despite whistleblower warnings, instead investigating the whistleblowers.',
    role: 'International Financial Regulator',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'osc': {
    id: 'osc-1',
    slug: 'osc',
    name: 'Office of Special Counsel',
    type: 'agency',
    description: 'Independent federal agency that investigates whistleblower complaints and Hatch Act violations. Criticized for inconsistent enforcement.',
    role: 'Federal Independent Agency',
    investigationCount: 1,
    riskLevel: 'moderate',
  },
};

// ========== NEW CORPORATION ENTRIES ==========
const NEW_CORPORATIONS = {
  'tyson-foods': {
    id: 'tyson-1',
    slug: 'tyson-foods',
    name: 'Tyson Foods',
    type: 'corporation',
    description: 'Major meat processing corporation. Investigations into worker exploitation, environmental contamination, and COVID-19 workplace safety violations.',
    role: 'Meat Processing Corporation',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'israel-aerospace-industries': {
    id: 'iai-1',
    slug: 'israel-aerospace-industries',
    name: 'Israel Aerospace Industries',
    type: 'corporation',
    description: 'Israeli defense and aerospace manufacturer. Produces surveillance drones and military technology used in controversial operations.',
    role: 'Defense Contractor',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'anduril': {
    id: 'anduril-1',
    slug: 'anduril',
    name: 'Anduril Industries',
    type: 'corporation',
    description: 'Defense technology company founded by Palmer Luckey. Develops AI-powered surveillance systems and autonomous military technology.',
    role: 'Defense Technology Startup',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'wr-grace': {
    id: 'wrg-1',
    slug: 'wr-grace',
    name: 'W.R. Grace and Company',
    type: 'corporation',
    description: 'Chemical company responsible for asbestos contamination in Libby, Montana, causing hundreds of deaths. Declared bankruptcy to limit liability.',
    role: 'Chemical Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'manville': {
    id: 'manville-1',
    slug: 'manville',
    name: 'Johns-Manville Corporation',
    type: 'corporation',
    description: 'Major asbestos manufacturer that knowingly exposed workers to deadly asbestos fibers for decades while suppressing health studies.',
    role: 'Asbestos Manufacturer',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'shell': {
    id: 'shell-1',
    slug: 'shell',
    name: 'Shell (Royal Dutch Shell)',
    type: 'corporation',
    description: 'Oil and gas multinational with documented environmental destruction in Nigeria, climate change denial, and complicity in human rights abuses.',
    role: 'Oil & Gas Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'general-atomics': {
    id: 'ga-1',
    slug: 'general-atomics',
    name: 'General Atomics',
    type: 'corporation',
    description: 'Defense contractor that manufactures the Predator and Reaper drones used in controversial targeted killing programs across multiple countries.',
    role: 'Defense Contractor',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'abbvie': {
    id: 'abbvie-1',
    slug: 'abbvie',
    name: 'AbbVie',
    type: 'corporation',
    description: 'Pharmaceutical corporation known for aggressive patent gaming on Humira and price gouging. Accused of prioritizing profits over patient access.',
    role: 'Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'aig': {
    id: 'aig-1',
    slug: 'aig',
    name: 'American International Group (AIG)',
    type: 'corporation',
    description: 'Insurance giant whose reckless credit default swap dealings nearly collapsed the global economy in 2008, requiring a $182 billion taxpayer bailout.',
    role: 'Insurance Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'turing-pharmaceuticals': {
    id: 'turing-1',
    slug: 'turing-pharmaceuticals',
    name: 'Turing Pharmaceuticals',
    type: 'corporation',
    description: 'Martin Shkreli\'s company that infamously raised the price of Daraprim by 5,000%, becoming a symbol of pharmaceutical price gouging.',
    role: 'Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'binance': {
    id: 'binance-1',
    slug: 'binance',
    name: 'Binance',
    type: 'corporation',
    description: 'Largest cryptocurrency exchange. Charged with money laundering, sanctions violations, and operating an unlicensed money transmitting business.',
    role: 'Cryptocurrency Exchange',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'bayer': {
    id: 'bayer-1',
    slug: 'bayer',
    name: 'Bayer AG',
    type: 'corporation',
    description: 'German chemical and pharmaceutical corporation. Acquired Monsanto and inherited Roundup cancer lawsuits. Historical ties to IG Farben.',
    role: 'Chemical/Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'barclays': {
    id: 'barclays-1',
    slug: 'barclays',
    name: 'Barclays',
    type: 'corporation',
    description: 'British multinational bank involved in LIBOR manipulation scandal, sanctions busting, and enabling Jeffrey Epstein\'s financial operations.',
    role: 'Banking Corporation',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'gd-searle': {
    id: 'gds-1',
    slug: 'gd-searle',
    name: 'G.D. Searle & Company',
    type: 'corporation',
    description: 'Pharmaceutical company that pushed through FDA approval of aspartame despite safety concerns. Later acquired by Monsanto.',
    role: 'Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'high',
  },
  'us-radium-corporation': {
    id: 'usrc-1',
    slug: 'us-radium-corporation',
    name: 'United States Radium Corporation',
    type: 'corporation',
    description: 'Company responsible for the Radium Girls tragedy. Workers were poisoned by radium paint while company executives knew of the dangers.',
    role: 'Historical Manufacturing',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'chemie-grunenthal': {
    id: 'cg-1',
    slug: 'chemie-grunenthal',
    name: 'Chemie Grünenthal',
    type: 'corporation',
    description: 'German pharmaceutical company that manufactured thalidomide, causing severe birth defects in thousands of children worldwide.',
    role: 'Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'merck': {
    id: 'merck-1',
    slug: 'merck',
    name: 'Merck & Co.',
    type: 'corporation',
    description: 'Pharmaceutical giant that concealed cardiovascular risks of Vioxx, contributing to tens of thousands of deaths before the drug was withdrawn.',
    role: 'Pharmaceutical Corporation',
    investigationCount: 1,
    riskLevel: 'extreme',
  },
  'ey': {
    id: 'ey-1',
    slug: 'ey',
    name: 'Ernst & Young (EY)',
    type: 'corporation',
    description: 'Big Four accounting firm that signed off on Wirecard\'s fraudulent financials for years, failing in its fundamental auditing duty.',
    role: 'Accounting/Consulting Firm',
    investigationCount: 1,
    riskLevel: 'high',
  },
};

// ========== NEW ORGANIZATION ENTRIES ==========
const NEW_ORGANIZATIONS = {
  'arabella-advisors': {
    name: 'Arabella Advisors',
    slug: 'arabella-advisors',
    type: 'organization',
    description: 'Consulting firm managing a network of dark money nonprofit organizations used for political influence on both sides.',
    riskLevel: 'high',
    members: 'Unknown',
  },
  'china': {
    name: 'Government of China',
    slug: 'china',
    type: 'organization',
    description: 'Government of the People\'s Republic of China. Subject of investigations into surveillance, IP theft, Uyghur detention, and technology espionage.',
    riskLevel: 'critical',
    members: 'State apparatus',
  },
};

// ========== STEP 1: Fix remappings in investigation files ==========
function fixRemappings() {
  console.log('\n=== FIXING SLUG REMAPPINGS IN INVESTIGATION FILES ===');
  let totalFixes = 0;
  
  const invFiles = fs.readdirSync(INV_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  
  for (const file of invFiles) {
    const filePath = path.join(INV_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let fileChanged = false;
    
    for (const [oldSlug, newSlug] of Object.entries(SLUG_REMAPS)) {
      // Match href patterns like /entities/agencies/department-of-justice
      const patterns = [
        new RegExp(`(/entities/agencies/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
        new RegExp(`(/entities/corporations/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
        new RegExp(`(/entities/individuals/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
        new RegExp(`(/entities/organizations/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
      ];
      
      for (const pattern of patterns) {
        const matches = content.match(pattern);
        if (matches) {
          content = content.replace(pattern, `$1${newSlug}`);
          totalFixes += matches.length;
          fileChanged = true;
          console.log(`  [${file}] Remapped ${oldSlug} → ${newSlug} (${matches.length}x)`);
        }
      }
    }
    
    if (fileChanged) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
  
  console.log(`Total remappings: ${totalFixes}`);
  return totalFixes;
}

// ========== STEP 2: Fix invalid href format ==========
function fixInvalidHrefs() {
  console.log('\n=== FIXING INVALID HREF FORMATS ===');
  let totalFixes = 0;
  
  const invFiles = fs.readdirSync(INV_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  
  for (const file of invFiles) {
    const filePath = path.join(INV_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix /entities/industries/pharmaceutical -> remove it or remap
    if (content.includes('/entities/industries/pharmaceutical')) {
      // There's no "industries" entity type, remove the affiliation or fix the href
      // Let's remap to the closest corporation match
      content = content.replace(/\/entities\/industries\/pharmaceutical/g, '/entities/corporations/pfizer');
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFixes++;
      console.log(`  [${file}] Fixed invalid /entities/industries/pharmaceutical → /entities/corporations/pfizer`);
    }
  }
  
  console.log(`Total invalid href fixes: ${totalFixes}`);
  return totalFixes;
}

// ========== STEP 3: Add new entities to data files ==========
function addNewAgencies() {
  console.log('\n=== ADDING NEW AGENCIES ===');
  const filePath = path.join(DATA_DIR, 'agencies', 'index.ts');
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let added = 0;
  for (const [slug, entry] of Object.entries(NEW_AGENCIES)) {
    if (content.includes(`'${slug}':`)) {
      console.log(`  [SKIP] ${slug} already exists`);
      continue;
    }
    
    // Insert before the closing }; of the agencies object
    const entryStr = `  '${slug}': ${JSON.stringify(entry, null, 4).replace(/^/gm, '  ').trim()},\n`;
    content = content.replace(/\n};\n\nexport default/, `\n${entryStr}};\n\nexport default`);
    added++;
    console.log(`  [ADD] ${slug}: ${entry.name}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added ${added} new agencies`);
  return added;
}

function addNewCorporations() {
  console.log('\n=== ADDING NEW CORPORATIONS ===');
  const filePath = path.join(DATA_DIR, 'corporations', 'index.ts');
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let added = 0;
  for (const [slug, entry] of Object.entries(NEW_CORPORATIONS)) {
    if (content.includes(`'${slug}':`)) {
      console.log(`  [SKIP] ${slug} already exists`);
      continue;
    }
    
    const entryStr = `  '${slug}': ${JSON.stringify(entry, null, 4).replace(/^/gm, '  ').trim()},\n`;
    content = content.replace(/\n};\n\nexport default/, `\n${entryStr}};\n\nexport default`);
    added++;
    console.log(`  [ADD] ${slug}: ${entry.name}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added ${added} new corporations`);
  return added;
}

function addNewOrganizations() {
  console.log('\n=== ADDING NEW ORGANIZATIONS ===');
  const filePath = path.join(DATA_DIR, 'organizations', 'index.ts');
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let added = 0;
  for (const [slug, entry] of Object.entries(NEW_ORGANIZATIONS)) {
    if (content.includes(`'${slug}':`)) {
      console.log(`  [SKIP] ${slug} already exists`);
      continue;
    }
    
    const entryStr = `  '${slug}': ${JSON.stringify(entry, null, 4).replace(/^/gm, '  ').trim()},\n`;
    content = content.replace(/\n};\n\nexport default/, `\n${entryStr}};\n\nexport default`);
    added++;
    console.log(`  [ADD] ${slug}: ${entry.name}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added ${added} new organizations`);
  return added;
}

// ========== MAIN ==========
console.log('=== FIX BROKEN LINKS SCRIPT ===');
console.log(`Time: ${new Date().toISOString()}\n`);

const remaps = fixRemappings();
const invalidFixes = fixInvalidHrefs();
const newAgencies = addNewAgencies();
const newCorps = addNewCorporations();
const newOrgs = addNewOrganizations();

console.log('\n=== SUMMARY ===');
console.log(`Slug remappings applied: ${remaps}`);
console.log(`Invalid hrefs fixed: ${invalidFixes}`);
console.log(`New agencies added: ${newAgencies}`);
console.log(`New corporations added: ${newCorps}`);
console.log(`New organizations added: ${newOrgs}`);

// Note: Individual entries (koch-brothers, adolf-hitler, etc.) are NOT added by this script
// because IndividualProfile has many required fields. These are low-count references.
console.log('\n=== REMAINING (not auto-fixable) ===');
console.log('Individual entities with broken refs (need manual data):');
console.log('  - koch-brothers (2 refs)');
console.log('  - franklin-raines (1 ref)');
console.log('  - adolf-hitler (1 ref)');
console.log('  - rahm-emanuel (1 ref)');
console.log('  - joseph-kennedy-sr (1 ref)');
console.log('  - leonard-peltier (1 ref)');
console.log('  - frances-kelsey (1 ref)');
console.log('  - alfred-moore-waddell (1 ref)');
console.log('  - josephus-daniels (1 ref)');
console.log('These individuals need full profile data to be added.');
