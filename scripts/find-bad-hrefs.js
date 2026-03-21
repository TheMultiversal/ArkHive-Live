const fs = require('fs');
const path = require('path');

// Scan all investigation shards for malformed entity hrefs
const shardFiles = '1 2 9 a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
const badHrefs = [];
const validPrefixes = [
  '/entities/individuals/',
  '/entities/agencies/',
  '/entities/corporations/',
  '/entities/organizations/',
];

for (const shard of shardFiles) {
  const filePath = path.join('src', 'data', 'investigations', `${shard}.ts`);
  if (!fs.existsSync(filePath)) continue;
  const data = fs.readFileSync(filePath, 'utf8');
  
  // Find all href values in affiliations
  const hrefRegex = /href:\s*'([^']+)'/g;
  let match;
  let lineNum = 0;
  const lines = data.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hrefMatch = line.match(/href:\s*'([^']+)'/);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.startsWith('/entities/') && !validPrefixes.some(p => href.startsWith(p))) {
        // Find the investigation slug this belongs to
        let slug = 'unknown';
        for (let j = i; j >= 0; j--) {
          const slugMatch = lines[j].match(/^\s*'([\w-]+)':\s*\{/);
          if (slugMatch) { slug = slugMatch[1]; break; }
        }
        
        // Find the type field nearby
        let entityType = 'unknown';
        for (let j = Math.max(0, i - 5); j <= Math.min(lines.length - 1, i + 5); j++) {
          const typeMatch = lines[j].match(/type:\s*'(individual|agency|corporation|organization)'/);
          if (typeMatch) { entityType = typeMatch[1]; break; }
        }
        
        const nameMatch = lines[i - 1] ? lines[i - 1].match(/name:\s*'([^']+)'/) : null;
        const name = nameMatch ? nameMatch[1] : 'unknown';
        
        badHrefs.push({ shard, line: i + 1, slug, href, entityType, name });
      }
    }
  }
}

console.log(`Found ${badHrefs.length} malformed entity hrefs:\n`);
badHrefs.forEach(b => {
  const pluralType = b.entityType === 'agency' ? 'agencies' : 
                     b.entityType === 'individual' ? 'individuals' :
                     b.entityType === 'corporation' ? 'corporations' :
                     b.entityType === 'organization' ? 'organizations' : 'unknown';
  const entitySlug = b.href.replace('/entities/', '');
  const correctHref = `/entities/${pluralType}/${entitySlug}`;
  console.log(`  ${b.shard}.ts:${b.line} [${b.slug}] "${b.name}" type=${b.entityType}`);
  console.log(`    BAD:  ${b.href}`);
  console.log(`    FIX:  ${correctHref}`);
});

// Group by shard for efficient fixing
const byShardCount = {};
badHrefs.forEach(b => { byShardCount[b.shard] = (byShardCount[b.shard] || 0) + 1; });
console.log('\nBy shard:', byShardCount);
