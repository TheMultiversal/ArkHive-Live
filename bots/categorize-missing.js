#!/usr/bin/env node
/**
 * Categorize the 281 missing entities by type (agency, corporation, individual, organization)
 * by analyzing the JSON content and existing data patterns.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GEN_DIR = path.join(ROOT, 'bots', 'generated');
const DATA_DIR = path.join(ROOT, 'src', 'data');

const missingSlugs = JSON.parse(fs.readFileSync(path.join(ROOT, 'bots', 'missing-entities.json'), 'utf8'));

// Known agency/org/corp indicators
const agencyIndicators = [
  'bureau', 'department', 'administration', 'commission', 'agency', 'office',
  'authority', 'service', 'guard', 'corps', 'command', '-fbi', '-cia', '-nsa',
  '-dea', '-atf', '-fda', '-epa', '-fcc', '-ftc', '-sec', '-fema', '-noaa',
  '-dhs', '-doj', '-doi', '-irs', '-usps', '-gsa', '-bop', '-bia', '-cdc',
  'police', 'enforcement', 'intelligence', 'security', 'marshal', 'regulatory',
  'customs'
];

const corpIndicators = [
  'inc', 'corp', 'corporation', 'company', 'group', 'llc', 'ltd', 'plc',
  'holdings', 'technologies', 'labs', 'motors', 'aerospace', 'pharmaceutical',
  'financial', 'capital', 'management', 'systems', 'industries', 'enterprises',
  'associates', 'partners', 'advisors', 'solutions', 'global', 'international-',
  'bank-of', 'credit-'
];

const orgIndicators = [
  'foundation', 'institute', 'council', 'society', 'association', 'organization',
  'club', 'committee', 'forum', 'center', 'project', 'coalition', 'alliance',
  'movement', 'network', 'party', 'pac', 'union', 'watch', 'endowment',
  'university', 'school'
];

// Hardcoded known types for ambiguous ones
const knownTypes = {
  // Agencies
  'afp': 'agency', 'atf': 'agency', 'bop': 'agency', 'bia': 'agency',
  'dea': 'agency', 'doi': 'agency', 'easa': 'agency', 'fema': 'agency',
  'fop': 'agency', 'gsa': 'agency', 'noaa': 'agency', 'oss': 'agency',
  'usps': 'agency', 'savak': 'agency', 'mossad': 'agency',
  'army-corps-of-engineers': 'agency', 'capitol-police': 'agency',
  'park-police': 'agency', 'secret-service': 'agency',
  'lapd-ig': 'agency', 'palm-beach-pd': 'agency', 'baltimore-pd': 'agency',
  'michigan-deq': 'agency', 'manhattan-da': 'agency', 'fulton-county-da': 'agency',
  'usvi-ag': 'agency', 'nsa-org': 'agency', 'fbi-org': 'agency',
  'transport-canada': 'agency',
  
  // Corporations
  '3m-company': 'corporation', 'academi-blackwater': 'corporation',
  'alibaba-group': 'corporation', 'alphabet-google': 'corporation',
  'alphabet-inc': 'corporation', 'amazon-corp': 'corporation',
  'amazon-inc': 'corporation', 'apple-inc': 'corporation',
  'astrazeneca-plc': 'corporation', 'bae-systems': 'corporation',
  'bear-stearns': 'corporation', 'bechtel-corporation': 'corporation',
  'blackrock-inc': 'corporation', 'bp-corporation': 'corporation',
  'bytedance-ltd': 'corporation', 'chevron': 'corporation',
  'citigroup': 'corporation', 'colony-capital': 'corporation',
  'credit-suisse': 'corporation', 'crocus-group': 'corporation',
  'deutsche-bank-ag': 'corporation', 'dow-chemical-company': 'corporation',
  'dupont-de-nemours': 'corporation', 'exxonmobil-corporation': 'corporation',
  'gazprom': 'corporation', 'goldman-sachs': 'corporation',
  'hsbc-holdings': 'corporation', 'hsbc': 'corporation',
  'huawei-technologies': 'corporation', 'jpmorgan-chase': 'corporation',
  'juul-labs': 'corporation', 'kbr-inc': 'corporation',
  'l-brands': 'corporation', 'l3harris-technologies': 'corporation',
  'las-vegas-sands': 'corporation', 'leidos': 'corporation',
  'lockheed-martin': 'corporation', 'meta-platforms': 'corporation',
  'meta-platforms-inc': 'corporation', 'microsoft-corporation': 'corporation',
  'moderna-inc': 'corporation', 'monsanto-company': 'corporation',
  'monsanto-bayer': 'corporation', 'monsanto': 'corporation',
  'nissan': 'corporation', 'northrop-grumman': 'corporation',
  'novartis-ag': 'corporation', 'nso-group': 'corporation',
  'nvidia-corporation': 'corporation', 'openai-inc': 'corporation',
  'palantir': 'corporation', 'pfizer-inc': 'corporation',
  'procter-gamble': 'corporation', 'raytheon': 'corporation',
  'saudi-aramco': 'corporation', 'shell-oil-company': 'corporation',
  'shell-plc': 'corporation', 'smartmatic': 'corporation',
  'spacex': 'corporation', 'tencent-holdings': 'corporation',
  'tesla-inc': 'corporation', 'tesla-motors': 'corporation',
  'truth-social': 'corporation', 'volkswagen': 'corporation',
  'walmart': 'corporation', 'wells-fargo': 'corporation',
  'columbus-nova': 'corporation', 'nexus-holdings': 'corporation',
  'saic': 'corporation', 'att': 'corporation',
  'arthur-andersen': 'corporation', 'towers-financial': 'corporation',
  'bayer-ag': 'corporation', 'bank-of-america': 'corporation',
  'harris-corporation': 'corporation',
  
  // Organizations
  'aipac': 'organization', 'alec': 'organization',
  'bilderberg-group': 'organization', 'bohemian-club': 'organization',
  'brookings-institution': 'organization', 'cfr': 'organization',
  'club-of-rome': 'organization', 'edge-foundation': 'organization',
  'federalist-society': 'organization', 'freedom-caucus': 'organization',
  'gettr': 'organization', 'great-america-pac': 'organization',
  'gratitude-america': 'organization', 'interlochen': 'organization',
  'john-birch-society': 'organization', 'karin-models': 'organization',
  'knights-of-malta': 'organization', 'ku-klux-klan': 'organization',
  'mc2': 'organization', 'mc2-model-management': 'organization',
  'mit': 'organization', 'mypillow': 'organization',
  'nyas': 'organization', 'one-america-news': 'organization',
  'opus-dei': 'organization', 'parler': 'organization',
  'project-veritas': 'organization', 'qanon': 'organization',
  'skull-and-bones-society': 'organization', 'stop-the-steal': 'organization',
  'terramar': 'organization', 'the-bulwark': 'organization',
  'the-lincoln-project': 'organization', 'three-percenters': 'organization',
  'alt-right': 'organization', 'dalton-school': 'organization',
  'democratic-party': 'organization', 'tuskegee-institute': 'organization',
  'fraud-guarantee': 'organization', 'lindell-management': 'organization',
  'scl-group': 'organization', 'breitbart-news': 'organization',
  'southern-trust': 'organization', 'financial-trust': 'organization',
  'americas-project': 'organization', 'tree-africa': 'organization',
  'washington-free-beacon': 'organization', 'washington-post': 'organization',
  'allied-security-operations-group': 'organization',
  
  // Some well-known entities that are corps/orgs
  'dominion-voting': 'corporation',
  'blackstone-group': 'corporation',
  'bridgewater-associates': 'corporation',
  'carlyle-group': 'corporation',
  'apollo-global': 'corporation',
  'citadel-llc': 'corporation',
  'renaissance-technologies': 'corporation',
  'founders-fund': 'corporation',
  'liberty-strategic-capital': 'corporation',
  'state-street-corporation': 'corporation',
  'vanguard-group': 'corporation',
  'berkshire-hathaway': 'corporation',
  'cardinal-health': 'corporation',
  'mckesson': 'corporation',
  'amerisourcebergen': 'corporation',
  'unitedhealth-group': 'corporation',
  'johnson-and-johnson': 'corporation',
  'merck-and-company': 'corporation',
  'booz-allen-hamilton': 'corporation',
  'general-dynamics': 'corporation',
  'halliburton-company': 'corporation',
};

function categorize(slug, data) {
  // Check hardcoded first
  if (knownTypes[slug]) return knownTypes[slug];
  
  // Check name patterns
  const name = (data.name || '').toLowerCase();
  const slugLower = slug.toLowerCase();
  
  for (const ind of agencyIndicators) {
    if (slugLower.includes(ind) || name.includes(ind)) return 'agency';
  }
  
  for (const ind of orgIndicators) {
    if (slugLower.includes(ind) || name.includes(ind)) return 'organization';
  }
  
  for (const ind of corpIndicators) {
    if (slugLower.includes(ind) || name.includes(ind)) return 'corporation';
  }
  
  // Default: individual (most are people)
  return 'individual';
}

const categorized = { individual: [], agency: [], corporation: [], organization: [] };

for (const slug of missingSlugs) {
  const data = JSON.parse(fs.readFileSync(path.join(GEN_DIR, `${slug}.json`), 'utf8'));
  const type = categorize(slug, data);
  categorized[type].push({ slug, data });
}

console.log('\n=== MISSING ENTITIES BY TYPE ===');
console.log(`Individuals: ${categorized.individual.length}`);
console.log(`Agencies: ${categorized.agency.length}`);
console.log(`Corporations: ${categorized.corporation.length}`);
console.log(`Organizations: ${categorized.organization.length}`);
console.log(`Total: ${missingSlugs.length}`);

// Output for review
for (const [type, items] of Object.entries(categorized)) {
  console.log(`\n--- ${type.toUpperCase()} (${items.length}) ---`);
  items.forEach(i => console.log(`  ${i.slug}: ${i.data.name}`));
}

// Save categorized list
fs.writeFileSync(path.join(ROOT, 'bots', 'missing-categorized.json'), JSON.stringify(categorized, null, 2));
console.log('\nFull categorized list written to bots/missing-categorized.json');
