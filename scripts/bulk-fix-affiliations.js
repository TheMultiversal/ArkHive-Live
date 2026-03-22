// Bulk fix: Add second affiliation to entries with < 2 affiliations
// Maps investigation categories to appropriate agency/entity affiliations
const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Category -> default second affiliation mapping
const categoryAffiliationMap = {
  'Criminal Justice': { name: 'DOJ', type: 'agency', relationship: 'Federal oversight and prosecution authority for criminal justice violations', href: '/entities/agencies/doj' },
  'Police Reform': { name: 'DOJ', type: 'agency', relationship: 'Conducts pattern-or-practice investigations into police departments', href: '/entities/agencies/doj' },
  'Corporate Crime': { name: 'SEC', type: 'agency', relationship: 'Securities regulation and corporate fraud enforcement', href: '/entities/agencies/sec' },
  'Corporate Crime / Public Health': { name: 'FDA', type: 'agency', relationship: 'Regulatory authority over pharmaceutical and health product safety', href: '/entities/agencies/fda' },
  'Financial Fraud': { name: 'SEC', type: 'agency', relationship: 'Securities regulation and financial fraud enforcement', href: '/entities/agencies/sec' },
  'Financial Crime': { name: 'SEC', type: 'agency', relationship: 'Securities regulation and financial crime enforcement', href: '/entities/agencies/sec' },
  'Environmental Crime': { name: 'EPA', type: 'agency', relationship: 'Environmental regulation and enforcement', href: '/entities/agencies/epa' },
  'Environmental': { name: 'EPA', type: 'agency', relationship: 'Environmental regulation and enforcement authority', href: '/entities/agencies/epa' },
  'War Crimes': { name: 'DOJ', type: 'agency', relationship: 'Federal authority for war crimes prosecution and investigation', href: '/entities/agencies/doj' },
  'Government Corruption': { name: 'DOJ', type: 'agency', relationship: 'Federal prosecution authority for government corruption', href: '/entities/agencies/doj' },
  'Government Accountability': { name: 'DOJ', type: 'agency', relationship: 'Federal prosecution and oversight authority', href: '/entities/agencies/doj' },
  'Election Interference': { name: 'DOJ', type: 'agency', relationship: 'Federal election law enforcement', href: '/entities/agencies/doj' },
  'Foreign Interference': { name: 'DOJ', type: 'agency', relationship: 'Foreign agents registration and espionage enforcement', href: '/entities/agencies/doj' },
  'Intelligence': { name: 'CIA', type: 'agency', relationship: 'Central Intelligence Agency operations under investigation', href: '/entities/agencies/cia' },
  'Intelligence Abuse': { name: 'CIA', type: 'agency', relationship: 'Intelligence agency operations under investigation', href: '/entities/agencies/cia' },
  'Public Health': { name: 'FDA', type: 'agency', relationship: 'Federal public health regulatory authority', href: '/entities/agencies/fda' },
  'Healthcare': { name: 'FDA', type: 'agency', relationship: 'Federal healthcare regulatory authority', href: '/entities/agencies/fda' },
  'Healthcare Fraud': { name: 'DOJ', type: 'agency', relationship: 'Federal healthcare fraud prosecution authority', href: '/entities/agencies/doj' },
  'Technology': { name: 'FTC', type: 'agency', relationship: 'Federal Trade Commission consumer protection and antitrust enforcement', href: '/entities/agencies/ftc' },
  'Technology Abuse': { name: 'FTC', type: 'agency', relationship: 'Federal Trade Commission consumer protection enforcement', href: '/entities/agencies/ftc' },
  'Media Corruption': { name: 'FCC', type: 'agency', relationship: 'Federal Communications Commission media regulation', href: '/entities/agencies/fcc' },
  'Civil Rights': { name: 'DOJ', type: 'agency', relationship: 'Civil Rights Division enforcement authority', href: '/entities/agencies/doj' },
  'Human Rights': { name: 'DOJ', type: 'agency', relationship: 'Federal human rights enforcement authority', href: '/entities/agencies/doj' },
  'Labor Rights': { name: 'DOJ', type: 'agency', relationship: 'Federal labor law enforcement authority', href: '/entities/agencies/doj' },
  'Economic Concentration': { name: 'FTC', type: 'agency', relationship: 'Federal antitrust enforcement authority', href: '/entities/agencies/ftc' },
  'Mass Violence': { name: 'FBI', type: 'agency', relationship: 'Federal investigation authority for mass violence incidents', href: '/entities/agencies/fbi' },
  'Domestic Terrorism': { name: 'FBI', type: 'agency', relationship: 'Federal domestic terrorism investigation authority', href: '/entities/agencies/fbi' },
  'Terrorism': { name: 'FBI', type: 'agency', relationship: 'Federal terrorism investigation and prevention authority', href: '/entities/agencies/fbi' },
  'National Security': { name: 'FBI', type: 'agency', relationship: 'Federal national security investigation authority', href: '/entities/agencies/fbi' },
  'Institutional Abuse': { name: 'DOJ', type: 'agency', relationship: 'Federal institutional abuse investigation and prosecution', href: '/entities/agencies/doj' },
  'Religious Abuse': { name: 'DOJ', type: 'agency', relationship: 'Federal prosecution authority for institutional abuse', href: '/entities/agencies/doj' },
  'Housing': { name: 'DOJ', type: 'agency', relationship: 'Federal fair housing enforcement authority', href: '/entities/agencies/doj' },
  'Cryptocurrency': { name: 'SEC', type: 'agency', relationship: 'Securities regulation and cryptocurrency fraud enforcement', href: '/entities/agencies/sec' },
  'Military': { name: 'DOJ', type: 'agency', relationship: 'Federal military justice oversight', href: '/entities/agencies/doj' },
  'Immigration': { name: 'DOJ', type: 'agency', relationship: 'Federal immigration enforcement oversight', href: '/entities/agencies/doj' },
};

// Fallback: if category has "Crime" -> DOJ, "Financial" -> SEC, etc.
function getDefaultAffiliation(category) {
  if (categoryAffiliationMap[category]) return categoryAffiliationMap[category];
  const cat = (category || '').toLowerCase();
  if (cat.includes('financial') || cat.includes('fraud') || cat.includes('crypto')) return categoryAffiliationMap['Financial Fraud'];
  if (cat.includes('crime') || cat.includes('justice') || cat.includes('corruption')) return categoryAffiliationMap['Criminal Justice'];
  if (cat.includes('environment') || cat.includes('climate') || cat.includes('pollution')) return categoryAffiliationMap['Environmental Crime'];
  if (cat.includes('tech') || cat.includes('privacy') || cat.includes('data')) return categoryAffiliationMap['Technology'];
  if (cat.includes('health') || cat.includes('pharma') || cat.includes('medical')) return categoryAffiliationMap['Public Health'];
  if (cat.includes('civil') || cat.includes('rights') || cat.includes('discrimination')) return categoryAffiliationMap['Civil Rights'];
  if (cat.includes('terror') || cat.includes('violence') || cat.includes('shooting')) return categoryAffiliationMap['Mass Violence'];
  if (cat.includes('media') || cat.includes('disinformation')) return categoryAffiliationMap['Media Corruption'];
  if (cat.includes('labor') || cat.includes('worker') || cat.includes('wage')) return categoryAffiliationMap['Labor Rights'];
  if (cat.includes('military') || cat.includes('war') || cat.includes('defense')) return categoryAffiliationMap['War Crimes'];
  if (cat.includes('intelligence') || cat.includes('espionage') || cat.includes('surveillance')) return categoryAffiliationMap['Intelligence'];
  if (cat.includes('election') || cat.includes('voting') || cat.includes('democracy')) return categoryAffiliationMap['Election Interference'];
  // Ultimate fallback
  return { name: 'DOJ', type: 'agency', relationship: 'Federal investigation and prosecution authority', href: '/entities/agencies/doj' };
}

let totalFixed = 0;
let skipped = 0;

const files = fs.readdirSync(investigationsDir).filter(f => f.endsWith('.ts'));
for (const file of files) {
  const filePath = path.join(investigationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all investigation entries
  const entryRegex = /'([^']+)':\s*\{[^}]*?category:\s*['"]([^'"]+)['"]/g;
  let match;
  const entries = [];
  while ((match = entryRegex.exec(content)) !== null) {
    entries.push({ slug: match[1], category: match[2], index: match.index });
  }

  for (const entry of entries) {
    // Find the affiliations array for this entry
    // Look for affiliations: [] or affiliations: [\n] between this entry and the next
    const searchStart = entry.index;
    const nextEntryIdx = entries.find(e => e.index > entry.index);
    const searchEnd = nextEntryIdx ? nextEntryIdx.index : content.length;
    const chunk = content.substring(searchStart, searchEnd);

    // Check if affiliations is empty array
    const emptyAffMatch = chunk.match(/affiliations:\s*\[\s*\]/);
    if (emptyAffMatch) {
      const aff = getDefaultAffiliation(entry.category);
      const nextId = '1';
      const replacement = `affiliations: [\n      { id: '${nextId}', name: '${aff.name}', type: '${aff.type}', relationship: '${aff.relationship}', href: '${aff.href}' },\n    ]`;
      const oldText = emptyAffMatch[0];
      // Only replace within this entry's chunk
      const globalIdx = searchStart + chunk.indexOf(oldText);
      content = content.substring(0, globalIdx) + replacement + content.substring(globalIdx + oldText.length);
      modified = true;
      totalFixed++;
      console.log(`  ${file}:${entry.slug} - Added first affiliation (${aff.name}) [was empty]`);
      continue;
    }

    // Check if only 1 affiliation
    const affBlockMatch = chunk.match(/affiliations:\s*\[\s*\n(\s*\{[^}]+\},?\s*\n)\s*\]/);
    if (affBlockMatch) {
      // Has exactly 1 affiliation - check if 2nd would be different from existing
      const existingName = affBlockMatch[1].match(/name:\s*'([^']+)'/);
      const aff = getDefaultAffiliation(entry.category);
      if (existingName && existingName[1] === aff.name) {
        skipped++;
        continue; // Skip - would add duplicate
      }
      // Find the highest id
      const idMatch = affBlockMatch[1].match(/id:\s*'(\d+)'/);
      const nextId = idMatch ? String(parseInt(idMatch[1]) + 1) : '2';
      
      const indent = affBlockMatch[1].match(/^(\s*)/)[1];
      const newAffLine = `${indent}{ id: '${nextId}', name: '${aff.name}', type: '${aff.type}', relationship: '${aff.relationship}', href: '${aff.href}' },\n`;
      
      const oldBlock = affBlockMatch[0];
      const newBlock = oldBlock.replace(/(\s*\])$/, '\n' + newAffLine + '$1');
      
      const globalIdx = searchStart + chunk.indexOf(oldBlock);
      content = content.substring(0, globalIdx) + newBlock + content.substring(globalIdx + oldBlock.length);
      modified = true;
      totalFixed++;
      console.log(`  ${file}:${entry.slug} - Added 2nd affiliation (${aff.name})`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\nDone! Fixed ${totalFixed} entries, skipped ${skipped} (would duplicate)`);
