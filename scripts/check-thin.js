const fs = require('fs');

// List of Epstein-network individuals that are thin (only 1 associate from the audit)
const thinEpsteinProfiles = [
  'bill-richardson', 'thomas-pritzker', 'michael-steinhardt', 'haley-robson',
  'lawrence-krauss', 'stephen-hawking', 'larry-summers', 'george-church',
  'terje-roed-larsen', 'ehud-olmert', 'edgar-bronfman', 'ronald-perelman',
  'steven-hoffenberg', 'murray-gell-mann', 'frank-wilczek', 'nathan-wolfe',
  'lisa-randall', 'daniel-dennett', 'gerald-edelman', 'lee-smolin',
  'katie-couric', 'george-stephanopoulos', 'chelsea-handler', 'david-blaine',
  'mick-jagger', 'alec-baldwin', 'itzhak-perlman', 'joe-recarey',
  'michael-reiter', 'geoffrey-berman', 'audrey-strauss', 'maurene-comey',
  'alfredo-rodriguez', 'igor-zinoviev', 'nicholas-tartaglione',
  'chauntae-davies', 'teresa-helm', 'leslie-groff', 'french-officials',
  'glenn-dubin', 'mort-zuckerman', 'jes-staley',
];

const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

for (const slug of thinEpsteinProfiles) {
  const keyIdx = c.indexOf(`'${slug}': {`);
  if (keyIdx === -1) {
    console.log(`MISSING: ${slug}`);
    continue;
  }
  
  // Find knownAssociates
  const kaIdx = c.indexOf('knownAssociates:', keyIdx);
  if (kaIdx === -1 || kaIdx - keyIdx > 5000) {
    console.log(`${slug}: no knownAssociates found`);
    continue;
  }
  
  const bracketStart = c.indexOf('[', kaIdx);
  let depth = 0, bracketEnd = -1;
  for (let i = bracketStart; i < c.length; i++) {
    if (c[i] === '[') depth++;
    if (c[i] === ']') { depth--; if (depth === 0) { bracketEnd = i; break; } }
  }
  
  const kaBlock = c.substring(bracketStart, bracketEnd);
  const count = (kaBlock.match(/name:/g) || []).length;
  
  // Also check other fields
  const nextKey = c.indexOf("\n  '", keyIdx + 10);
  const profileBlock = c.substring(keyIdx, nextKey === -1 ? keyIdx + 5000 : nextKey);
  const hasTimeline = profileBlock.includes('timeline:');
  const hasSources = profileBlock.includes('sources:');
  const hasControversies = profileBlock.includes('controversies:');
  
  console.log(`${slug}: ${count} associates, timeline=${hasTimeline}, sources=${hasSources}, controversies=${hasControversies}`);
}
