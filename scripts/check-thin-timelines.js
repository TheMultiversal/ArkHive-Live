// check-thin-timelines.js
// Find investigations with fewer than 2 real timeline entries
const fs = require('fs');
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

const PLACEHOLDER_PATTERNS = [
  /investigation begins .{0,5} events under scrutiny originate from this period/i,
  /— investigation remains active with ongoing developments/i,
  /— Initial events documented and investigation initiated/i,
  /— Key evidence gathered and accountability analysis updated/i,
  /— Public accountability efforts reveal continued developments/i,
  /— Ongoing accountability efforts continue; key developments documented/i,
  /— Latest developments tracked; investigation updated with new findings/i,
  /— Investigation deepens as new evidence and documentation gathered/i,
];

function isPlaceholder(text) {
  return PLACEHOLDER_PATTERNS.some(p => p.test(text));
}

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts') && !['index.ts','types.ts','categories.ts','documents.ts','moneyTrails.ts','statutes.ts'].includes(f));

let thin = 0;
let empty = 0;

for (const f of files) {
  const src = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  
  // Find each slug and its timeline
  const slugRegex = /'([a-z0-9-]+)':\s*\{/g;
  let match;
  const slugPositions = [];
  while ((match = slugRegex.exec(src)) !== null) {
    slugPositions.push({ slug: match[1], pos: match.index });
  }
  
  for (let i = 0; i < slugPositions.length; i++) {
    const { slug, pos } = slugPositions[i];
    const endPos = i + 1 < slugPositions.length ? slugPositions[i + 1].pos : src.length;
    const block = src.substring(pos, endPos);
    
    const tlMatch = block.match(/timeline:\s*\[([\s\S]*?)\],/);
    if (!tlMatch) {
      console.log(`MISSING: ${f} -> ${slug} (no timeline array)`);
      empty++;
      continue;
    }
    
    const entryRegex = /\{\s*date:\s*'([^']*)',\s*event:\s*'((?:[^'\\]|\\.)*)'/g;
    let em;
    let count = 0;
    let placeholders = 0;
    while ((em = entryRegex.exec(tlMatch[1])) !== null) {
      count++;
      if (isPlaceholder(em[2])) placeholders++;
    }
    
    const real = count - placeholders;
    if (real < 2) {
      console.log(`THIN: ${f} -> ${slug} (${real} real, ${placeholders} placeholder, ${count} total)`);
      thin++;
    }
    if (count === 0) empty++;
  }
}

console.log(`\nTotal thin timelines (<2 real entries): ${thin}`);
console.log(`Total empty/missing: ${empty}`);
