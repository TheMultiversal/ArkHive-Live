const fs = require('fs');
const detail = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('src/app/entities/organizations/page.tsx', 'utf8');

const indexMatches = index.match(/slug:\s*'([^']+)'/g);
const indexSlugs = indexMatches.map(m => m.match(/'([^']+)'/)[1]);

const detailMatches = detail.match(/'([a-z0-9-]+)':\s*\{/g);
const detailSlugs = detailMatches.map(m => m.match(/'([^']+)'/)[1]);

// Aliases to skip (redirect entries, duplicates, or agency duplicates)
const skipSlugs = ['ccp', 'china-gov', 'chamber-of-commerce', 'us-chamber', 'api', 'fop', 'wef', 'wuhan-institute-virology', 'cia', 'fbi-org', 'nsa-org'];

const missing = detailSlugs.filter(s => !indexSlugs.includes(s) && !skipSlugs.includes(s));

missing.forEach(slug => {
  // Find the block for this slug
  const startIdx = detail.indexOf("'" + slug + "':");
  if (startIdx === -1) { console.log(slug + ' | NOT FOUND'); return; }
  
  const blockStart = detail.indexOf('{', startIdx);
  // Find matching close - count braces
  let depth = 0;
  let i = blockStart;
  for (; i < detail.length; i++) {
    if (detail[i] === '{') depth++;
    if (detail[i] === '}') depth--;
    if (depth === 0) break;
  }
  const block = detail.substring(blockStart, i + 1);
  
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const typeMatch = block.match(/type:\s*'([^']+)'/);
  const riskMatch = block.match(/riskLevel:\s*'([^']+)'/);
  const descMatch = block.match(/description:\s*'([^']{1,200})/);
  
  const name = nameMatch ? nameMatch[1] : '??';
  const type = typeMatch ? typeMatch[1] : '??';
  const risk = riskMatch ? riskMatch[1] : '??';
  const desc = descMatch ? descMatch[1] : '??';
  const isAlias = block.includes('alias entry') || block.includes('See ');
  
  console.log(JSON.stringify({ slug, name, type, risk, desc: desc.substring(0, 150), isAlias }));
});
