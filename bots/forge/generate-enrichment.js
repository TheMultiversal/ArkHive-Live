#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE FORGE — ENRICHMENT PROMPT & MERGE GENERATOR
//  Reads schema.js → generates:
//   1. AI enrichment prompts for every enrichable field
//   2. Merge strategies for every field (how to combine AI + template)
//   3. Crime dossier templates for ALL 40+ crime categories
//   4. Validation rules from quality thresholds
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const schema = require('./schema');

const OUT_DIR = path.resolve(__dirname, '../');
const OUT_FILE = path.join(OUT_DIR, 'generated-enrichment.js');

// ── Build crime dossier templates for ALL categories ───────────

function generateCrimeTemplates() {
  // Statute databases for different crime types
  const statuteMap = {
    'Financial Fraud':         ['Securities Exchange Act § 10(b) 15 U.S.C. § 78j(b)', 'Wire Fraud 18 U.S.C. § 1343', 'False Claims Act 31 U.S.C. § 3729', 'Sarbanes-Oxley Act § 302', 'RICO 18 U.S.C. § 1961'],
    'Corruption & Bribery':    ['FCPA 15 U.S.C. § 78dd-1', 'Honest Services Fraud 18 U.S.C. § 1346', 'Bribery 18 U.S.C. § 201', 'Hobbs Act 18 U.S.C. § 1951'],
    'Obstruction of Justice':  ['18 U.S.C. § 1503', 'Witness Tampering 18 U.S.C. § 1512', 'Evidence Tampering 18 U.S.C. § 1519'],
    'Money Laundering':        ['18 U.S.C. § 1956', 'Bank Secrecy Act 31 U.S.C. § 5311', 'RICO 18 U.S.C. § 1961'],
    'Conspiracy':              ['18 U.S.C. § 371', 'RICO 18 U.S.C. § 1961', 'Wire Fraud 18 U.S.C. § 1343'],
    'Environmental Crimes':    ['Clean Water Act 33 U.S.C. § 1319', 'Clean Air Act 42 U.S.C. § 7413', 'RCRA 42 U.S.C. § 6928', 'CERCLA 42 U.S.C. § 9603'],
    'Human Rights Violations': ['Torture Victim Protection Act 28 U.S.C. § 1350', 'Alien Tort Statute', 'War Crimes Act 18 U.S.C. § 2441', 'Geneva Conventions'],
    'Tax Evasion':             ['26 U.S.C. § 7201', '26 U.S.C. § 7206', 'Bank Secrecy Act 31 U.S.C. § 5311'],
    'Insider Trading':         ['Securities Exchange Act § 10(b)', 'SEC Rule 10b-5', 'Insider Trading Sanctions Act', 'STOCK Act'],
    'Regulatory Violations':   ['Administrative Procedure Act 5 U.S.C. § 706', 'Federal Register Act 44 U.S.C. § 1505'],
    'War Crimes':              ['War Crimes Act 18 U.S.C. § 2441', 'Geneva Conventions', 'Rome Statute Art. 8', 'Hague Conventions'],
    'Election Interference':   ['52 U.S.C. § 30121', 'Voting Rights Act 52 U.S.C. § 10301', 'FARA 22 U.S.C. § 611', 'CFAA 18 U.S.C. § 1030'],
    'Cybercrime & Data Theft': ['CFAA 18 U.S.C. § 1030', 'Identity Theft 18 U.S.C. § 1028', 'Wire Fraud 18 U.S.C. § 1343', 'ECPA 18 U.S.C. § 2511'],
    'Human Trafficking':       ['Trafficking Victims Protection Act 22 U.S.C. § 7102', '18 U.S.C. § 1589-1592', 'Mann Act 18 U.S.C. § 2421'],
    'Drug Trafficking':        ['Controlled Substances Act 21 U.S.C. § 841', '21 U.S.C. § 846 Conspiracy', 'RICO 18 U.S.C. § 1961', 'Money Laundering 18 U.S.C. § 1956'],
    'Arms Trafficking':        ['Arms Export Control Act 22 U.S.C. § 2778', 'ITAR 22 CFR 120-130', 'EAR 15 CFR 730-774', 'International Trafficking in Arms 22 U.S.C. § 2780'],
    'Racketeering (RICO)':     ['RICO 18 U.S.C. § 1961-1968', 'Wire Fraud 18 U.S.C. § 1343', 'Extortion 18 U.S.C. § 1951'],
    'Embezzlement':            ['18 U.S.C. § 656 (Bank Embezzlement)', '18 U.S.C. § 666 (Federal Program Fraud)', 'Wire Fraud 18 U.S.C. § 1343'],
    'Extortion & Blackmail':   ['Hobbs Act 18 U.S.C. § 1951', 'Extortion 18 U.S.C. § 873', 'Blackmail 18 U.S.C. § 873'],
    'Perjury & False Statements': ['18 U.S.C. § 1621 (Perjury)', '18 U.S.C. § 1001 (False Statements)', '18 U.S.C. § 1623 (Grand Jury)'],
    'Espionage':               ['Espionage Act 18 U.S.C. § 793-798', 'Economic Espionage Act 18 U.S.C. § 1831', 'FISA 50 U.S.C. § 1801'],
    'Terrorism Financing':     ['18 U.S.C. § 2339A-2339C (Material Support)', 'IEEPA 50 U.S.C. § 1701', 'Anti-Terrorism Act 18 U.S.C. § 2333'],
    'Sanctions Violations':    ['IEEPA 50 U.S.C. § 1701', 'OFAC Regulations 31 CFR Part 500', 'Trading with the Enemy Act 50 U.S.C. § 4301'],
    'Antitrust & Price Fixing': ['Sherman Act 15 U.S.C. § 1-7', 'Clayton Act 15 U.S.C. § 12-27', 'FTC Act 15 U.S.C. § 41-58'],
    'Intellectual Property Theft': ['Economic Espionage Act 18 U.S.C. § 1831-1839', 'Copyright Act 17 U.S.C. § 506', 'Trademark Counterfeiting 18 U.S.C. § 2320'],
    'Identity Theft & Fraud':  ['18 U.S.C. § 1028 (Identity Theft)', '18 U.S.C. § 1028A (Aggravated)', 'Fair Credit Reporting Act 15 U.S.C. § 1681'],
    'Bank Fraud':              ['18 U.S.C. § 1344 (Bank Fraud)', '18 U.S.C. § 1014 (Loan Fraud)', 'FIRREA 12 U.S.C. § 1833a'],
    'Healthcare Fraud':        ['18 U.S.C. § 1347 (Healthcare Fraud)', 'Anti-Kickback Statute 42 U.S.C. § 1320a-7b', 'Stark Law 42 U.S.C. § 1395nn'],
    'Insurance Fraud':         ['18 U.S.C. § 1033-1034 (Insurance Fraud)', 'Mail Fraud 18 U.S.C. § 1341', 'Wire Fraud 18 U.S.C. § 1343'],
    'Real Estate Fraud':       ['18 U.S.C. § 1014 (Loan Fraud)', 'Wire Fraud 18 U.S.C. § 1343', 'RESPA 12 U.S.C. § 2601'],
    'Forgery & Counterfeiting': ['18 U.S.C. § 471-473 (Counterfeiting)', '18 U.S.C. § 1017 (Government Seals)', '18 U.S.C. § 514 (Fictitious Obligations)'],
    'Child Exploitation':      ['18 U.S.C. § 2251-2260 (Sexual Exploitation)', 'PROTECT Act 18 U.S.C. § 2252A', 'Mann Act 18 U.S.C. § 2421'],
    'Domestic Violence & Abuse': ['Violence Against Women Act 34 U.S.C. § 12291', '18 U.S.C. § 2261-2262 (Interstate DV)', 'Gun Control Act 18 U.S.C. § 922(g)(8)'],
    'Stalking & Harassment':   ['18 U.S.C. § 2261A (Interstate Stalking)', '47 U.S.C. § 223 (Telecommunications Harassment)'],
    'Manslaughter & Negligent Homicide': ['18 U.S.C. § 1112 (Manslaughter)', '18 U.S.C. § 1111 (Murder)', 'State Criminal Codes'],
    'Kidnapping & False Imprisonment': ['18 U.S.C. § 1201 (Federal Kidnapping)', '18 U.S.C. § 1202 (Ransom)', 'International Parental Kidnapping 18 U.S.C. § 1204'],
    'Witness Intimidation':    ['18 U.S.C. § 1512 (Witness Tampering)', '18 U.S.C. § 1513 (Retaliation)', 'Obstruction 18 U.S.C. § 1503'],
    'Jury Tampering':          ['18 U.S.C. § 1504 (Jury Influence)', '18 U.S.C. § 1503 (Obstruction)', '18 U.S.C. § 1512 (Tampering)'],
    'Illegal Surveillance':    ['Wiretap Act 18 U.S.C. § 2511', 'ECPA 18 U.S.C. § 2701', 'FISA 50 U.S.C. § 1801', 'Fourth Amendment Violations'],
    'Civil Rights Violations': ['42 U.S.C. § 1983 (Civil Rights)', '18 U.S.C. § 241-242 (Deprivation of Rights)', 'Fair Housing Act 42 U.S.C. § 3601'],
    'Police Brutality & Misconduct': ['42 U.S.C. § 1983', '18 U.S.C. § 242 (Deprivation Under Color of Law)', 'Qualified Immunity Doctrine'],
    'Genocide & Ethnic Cleansing': ['Genocide Convention Implementation 18 U.S.C. § 1091', 'War Crimes Act 18 U.S.C. § 2441', 'Rome Statute Art. 6'],
    'Forced Labor & Modern Slavery': ['18 U.S.C. § 1589 (Forced Labor)', '18 U.S.C. § 1590 (Labor Trafficking)', 'Tariff Act 19 U.S.C. § 1307'],
    'Maritime & Admiralty Crimes': ['18 U.S.C. § 2280 (Maritime Violence)', 'Jones Act 46 U.S.C. § 30104', 'MARPOL Implementation 33 U.S.C. § 1901'],
    'Aviation Violations':     ['49 U.S.C. § 46505 (Aircraft Piracy)', 'FAA Regulations 14 CFR', '49 U.S.C. § 46316 (Safety Violations)'],
    'Nuclear & Radiological Crimes': ['Atomic Energy Act 42 U.S.C. § 2011', '18 U.S.C. § 831 (Nuclear Materials)', 'NRC Regulations 10 CFR'],
    'Biological Weapons Violations': ['18 U.S.C. § 175 (Biological Weapons)', 'Biological Weapons Convention Implementation', 'Chemical Weapons Convention 22 U.S.C. § 6701'],
    'Cultural Property Trafficking': ['National Stolen Property Act 18 U.S.C. § 2314-2315', 'Archaeological Resources Protection Act 16 U.S.C. § 470ee', 'UNESCO Convention Implementation'],
    'Wildlife Trafficking':    ['Lacey Act 16 U.S.C. § 3371', 'Endangered Species Act 16 U.S.C. § 1538', 'CITES Implementation'],
    'Illegal Logging & Deforestation': ['Lacey Act Amendment 16 U.S.C. § 3371', 'NEPA 42 U.S.C. § 4332', 'Endangered Species Act 16 U.S.C. § 1538'],
    'Water Contamination':     ['Clean Water Act 33 U.S.C. § 1319', 'Safe Drinking Water Act 42 U.S.C. § 300f', 'CERCLA 42 U.S.C. § 9603'],
    'Medical Malpractice & Negligence': ['Federal Tort Claims Act 28 U.S.C. § 2671', 'EMTALA 42 U.S.C. § 1395dd', 'State Medical Practice Acts'],
    'Academic Fraud & Plagiarism': ['Wire Fraud 18 U.S.C. § 1343', 'False Claims Act 31 U.S.C. § 3729', 'Research Misconduct 42 CFR Part 93'],
  };

  const templates = [];

  for (const category of schema.crimeCategories) {
    const statutes = statuteMap[category] || ['18 U.S.C. (applicable federal statutes)', 'State Criminal Code provisions'];

    templates.push({
      category,
      statutesBroken: statutes,
      narrativeTemplate: `\${name} is documented in connection with ${category.toLowerCase()} per ArkHive forensic analysis of public records, federal filings, and investigative documentation revealing patterns of activity warranting expanded accountability documentation in the ArkHive database.`,
      immediateActions: [
        `Comprehensive investigation into ${category.toLowerCase()} allegations`,
        'Preservation of all relevant evidence and documentation',
        'Referral to appropriate enforcement agencies',
        'Victim notification and restitution programs',
        'Institutional reform and compliance measures',
      ],
      chargesTemplate: statutes.slice(0, 3).map(s => ({
        charge: `${s.split(' ')[0]} violations`,
        penalty: 'Subject to federal sentencing guidelines',
      })),
      referencesTemplate: [
        { description: `Federal enforcement records related to ${category.toLowerCase()}`, dateRange: '2023-2025' },
        { description: 'ArkHive investigative analysis and cross-referencing', dateRange: '2025' },
      ],
    });
  }

  return templates;
}

// ── Build merge strategy map ───────────────────────────────────

function generateMergeStrategies() {
  const strategies = {};

  for (const [entityName, entityDef] of Object.entries(schema.entities)) {
    strategies[entityName] = {};

    for (const [fieldName, fieldDef] of Object.entries(entityDef.fields)) {
      strategies[entityName][fieldName] = fieldDef.mergeStrategy || 'replace';
    }

    for (const [relName, relDef] of Object.entries(entityDef.relations || {})) {
      strategies[entityName][relName] = relDef.mergeStrategy || 'dedupe-append';
    }
  }

  return strategies;
}

// ── Build enrichment prompt fragments ──────────────────────────

function generateEnrichmentPrompts() {
  const prompts = {};

  for (const [entityName, entityDef] of Object.entries(schema.entities)) {
    prompts[entityName] = {};

    for (const [fieldName, fieldDef] of Object.entries(entityDef.fields)) {
      if (fieldDef.enrichable && fieldDef.enrichPrompt) {
        prompts[entityName][fieldName] = fieldDef.enrichPrompt;
      }
    }

    for (const [relName, relDef] of Object.entries(entityDef.relations || {})) {
      if (relDef.enrichable && relDef.enrichPrompt) {
        prompts[entityName][relName] = relDef.enrichPrompt;
      }
    }
  }

  return prompts;
}

// ── Build validation rules ─────────────────────────────────────

function generateValidationRules() {
  const rules = {};

  for (const [entityName, entityDef] of Object.entries(schema.entities)) {
    rules[entityName] = {
      requiredFields: Object.entries(entityDef.fields)
        .filter(([, f]) => f.required)
        .map(([k]) => k),
      qualityThresholds: entityDef.qualityThresholds || {},
    };
  }

  return rules;
}

// ── Master Generation ──────────────────────────────────────────

function generate() {
  const crimeTemplates = generateCrimeTemplates();
  const mergeStrategies = generateMergeStrategies();
  const enrichmentPrompts = generateEnrichmentPrompts();
  const validationRules = generateValidationRules();

  const output = `// ═══════════════════════════════════════════════════════════════════
//  AUTO-GENERATED BY ARKHIVE FORGE — DO NOT EDIT MANUALLY
//  Generated: ${new Date().toISOString()}
//  Source: bots/forge/schema.js
//  Re-generate: node bots/forge/generate-enrichment.js
// ═══════════════════════════════════════════════════════════════════

/**
 * Crime dossier templates for ALL ${crimeTemplates.length} crime categories.
 * Each template includes statute citations, narrative template, actions, charges, and references.
 * Usage: worker.js imports these and uses them to generate crime dossier entries.
 */
const CRIME_DOSSIER_TEMPLATES = ${JSON.stringify(crimeTemplates, null, 2)};

/**
 * Merge strategies for every field on every entity type.
 * 'replace' — overwrite existing value
 * 'append' — add to array
 * 'dedupe-append' — add to array, removing duplicates
 * 'deep-merge' — recursively merge objects
 */
const MERGE_STRATEGIES = ${JSON.stringify(mergeStrategies, null, 2)};

/**
 * Enrichment prompt fragments for AI generation.
 * Keyed by entity type → field name → prompt string.
 */
const ENRICHMENT_PROMPTS = ${JSON.stringify(enrichmentPrompts, null, 2)};

/**
 * Validation rules derived from schema quality thresholds.
 * Used by worker.js to validate generated profiles.
 */
const VALIDATION_RULES = ${JSON.stringify(validationRules, null, 2)};

/**
 * All crime category names from the schema.
 */
const ALL_CRIME_CATEGORIES = ${JSON.stringify(schema.crimeCategories, null, 2)};

module.exports = {
  CRIME_DOSSIER_TEMPLATES,
  MERGE_STRATEGIES,
  ENRICHMENT_PROMPTS,
  VALIDATION_RULES,
  ALL_CRIME_CATEGORIES,
};
`;

  fs.writeFileSync(OUT_FILE, output, 'utf-8');

  console.log(`✓ Generated ${OUT_FILE}`);
  console.log(`  ${crimeTemplates.length} crime dossier templates`);
  console.log(`  ${Object.keys(mergeStrategies).length} entity merge strategy maps`);
  console.log(`  ${Object.values(enrichmentPrompts).reduce((a, b) => a + Object.keys(b).length, 0)} enrichment prompts`);
  console.log(`  ${Object.keys(validationRules).length} validation rule sets`);

  return { crimeTemplates, mergeStrategies, enrichmentPrompts, validationRules };
}

if (require.main === module) {
  generate();
}

module.exports = { generate };
