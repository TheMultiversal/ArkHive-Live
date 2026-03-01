// Reusable insertion engine for adding knownAssociates to profiles
// Usage: require this, call insertKnownAssociates(dataMap)
// dataMap = { 'slug': [ { name, relationship, slug }, ... ], ... }

const fs = require('fs');
const filePath = 'src/app/entities/individuals/[slug]/page.tsx';

function insertKnownAssociates(dataMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all profile positions
  const profileRegex = /^  '([a-z][a-z0-9-]*)': \{/gm;
  const profiles = [];
  let m;
  while ((m = profileRegex.exec(content)) !== null) {
    profiles.push({ slug: m[1], pos: m.index });
  }
  
  // Process in reverse order so positions don't shift
  let insertions = 0;
  let failures = [];
  
  // Build profile index
  const profileIndex = {};
  for (let i = 0; i < profiles.length; i++) {
    profileIndex[profiles[i].slug] = i;
  }
  
  // Sort slugs to process in reverse file position order
  const slugsToProcess = Object.keys(dataMap).filter(slug => {
    if (!(slug in profileIndex)) {
      failures.push({ slug, reason: 'Profile not found' });
      return false;
    }
    return true;
  }).sort((a, b) => profileIndex[b] - profileIndex[a]);
  
  for (const slug of slugsToProcess) {
    const i = profileIndex[slug];
    const start = profiles[i].pos;
    const end = i + 1 < profiles.length ? profiles[i + 1].pos : content.length;
    const block = content.substring(start, end);
    
    if (block.includes('knownAssociates')) {
      failures.push({ slug, reason: 'Already has knownAssociates' });
      continue;
    }
    
    // Find the last `    ],` before `  },` which is the end of the sources array
    // We look for the pattern:  ],\n  },  or  ],\r\n  },
    const insertMatch = block.match(/(\s*\],)\s*\n(\s*\},)\s*\n/);
    if (!insertMatch) {
      failures.push({ slug, reason: 'Could not find insertion point' });
      continue;
    }
    
    const associates = dataMap[slug];
    const kaLines = associates.map(a => {
      const escapedName = a.name.replace(/'/g, "\\'");
      const escapedRel = a.relationship.replace(/'/g, "\\'");
      return `      { name: '${escapedName}', relationship: '${escapedRel}', slug: '${a.slug}' }`;
    });
    
    const kaBlock = `    knownAssociates: [\n${kaLines.join(',\n')}\n    ],\n`;
    
    // Insert after the last `    ],` (end of sources) before `  },`
    const insertPos = start + insertMatch.index + insertMatch[1].length + 1; // +1 for \n
    content = content.substring(0, insertPos) + kaBlock + content.substring(insertPos);
    insertions++;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Insertions: ${insertions}`);
  if (failures.length > 0) {
    console.log(`Failures: ${failures.length}`);
    failures.forEach(f => console.log(`  ${f.slug}: ${f.reason}`));
  }
  return { insertions, failures };
}

module.exports = { insertKnownAssociates };
