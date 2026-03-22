// check-affiliations.js
// Find investigations where affiliations seem wrong based on category mismatch
const fs = require('fs');
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

const files = fs.readdirSync(DATA_DIR).filter(f => 
  f.endsWith('.ts') && !['index.ts','types.ts','categories.ts','documents.ts','moneyTrails.ts','statutes.ts','investigationStatutes.ts'].includes(f)
);

// Check for obviously wrong affiliations: entity names that don't relate to investigation title/content
const SUSPICIOUS_COMBOS = [
  // [investigation keyword, entity name that shouldn't be there]
  ['housing', 'Weinstein'],
  ['financial', 'Weinstein'],
  ['environment', 'Weinstein'],
  ['climate', 'Weinstein'],
  ['war', 'Weinstein'],
];

let issues = 0;
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

    // Check for generic/boilerplate affiliation text
    const affMatch = block.match(/affiliations:\s*\[([\s\S]*?)\]/);
    if (!affMatch) continue;
    
    const affText = affMatch[1];
    
    // Check if all affiliations are just "Key figure in investigation" (generic)
    const relationships = [];
    const relRegex = /relationship:\s*'([^']*)'/g;
    let rm;
    while ((rm = relRegex.exec(affText)) !== null) {
      relationships.push(rm[1]);
    }
    
    const genericCount = relationships.filter(r => 
      r === 'Key figure in investigation' ||
      r === 'Federal investigation and prosecution authority' ||
      r === 'Regulatory oversight and enforcement'
    ).length;
    
    if (genericCount > 0 && genericCount >= relationships.length - 1) {
      // Check if entity names seem wrong
      const nameRegex = /name:\s*'([^']*)'/g;
      let nm;
      const names = [];
      while ((nm = nameRegex.exec(affText)) !== null) {
        names.push(nm[1]);
      }
      
      const titleMatch = block.match(/title:\s*'((?:[^'\\]|\\.)*)'/);
      const title = titleMatch ? titleMatch[1].toLowerCase() : '';
      const category = (block.match(/category:\s*'([^']*)'/) || ['',''])[1];
      
      // Flag if only generic relationships
      if (genericCount === relationships.length && relationships.length <= 2) {
        console.log(`GENERIC: ${f} -> ${slug} [${category}] affiliations: ${names.join(', ')} (all generic)`);
        issues++;
      }
    }
  }
}

console.log(`\nTotal issues: ${issues}`);
