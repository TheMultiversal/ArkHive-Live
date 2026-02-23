const fs = require('fs');
const detail = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');

const missing = [
  'aclu','alliance-defending-freedom','american-enterprise-institute','american-petroleum-institute',
  'chinese-communist-party','us-chamber-of-commerce','donors-trust','family-research-council',
  'heartland-institute','internet-research-agency','january-6-committee','nato','who','imf',
  'world-bank','rnc','open-society-foundations','phrma','wuhan-institute-of-virology',
  'ecohealth-alliance','british-royal-family','confucius-institute','national-endowment-for-democracy',
  'icrc','un-security-council','johns-hopkins','tuskegee-institute','standing-rock','rosebud-sioux','saudi-arabia'
];

missing.forEach(slug => {
  const startIdx = detail.indexOf("'" + slug + "':");
  if (startIdx === -1) { console.log(slug + ' | NOT FOUND'); return; }
  const blockStart = detail.indexOf('{', startIdx);
  let depth = 0, i = blockStart;
  for (; i < detail.length; i++) {
    if (detail[i] === '{') depth++;
    if (detail[i] === '}') depth--;
    if (depth === 0) break;
  }
  const block = detail.substring(blockStart, i + 1);
  const membersMatch = block.match(/members:\s*'([^']+)'/);
  const members = membersMatch ? membersMatch[1] : 'N/A';
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const riskMatch = block.match(/riskLevel:\s*'([^']+)'/);
  console.log(slug + '|' + (nameMatch?nameMatch[1]:'?') + '|' + (riskMatch?riskMatch[1]:'?') + '|' + members);
});
