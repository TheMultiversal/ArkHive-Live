// Automated investigation quality audit
// Scans all shard files and identifies weak investigations

import { readFileSync } from 'fs';
import { join } from 'path';

const dataDir = join(process.cwd(), 'src', 'data', 'investigations');
const shardFiles = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','9'];

const results = [];

for (const shard of shardFiles) {
  const filePath = join(dataDir, `${shard}.ts`);
  let content;
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch {
    continue;
  }

  // Find all investigation slugs
  const slugRegex = /^\s*'([a-z0-9][\w-]+)':\s*\{/gm;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    const startIdx = match.index;
    
    // Find the investigation block - look for the closing },\n  ' pattern or end of export
    // Count content array items
    const afterStart = content.slice(startIdx, startIdx + 15000); // reasonable max size
    
    const contentMatches = afterStart.match(/content:\s*\[/);
    let contentCount = 0;
    if (contentMatches) {
      const contentStart = afterStart.indexOf('content: [');
      if (contentStart !== -1) {
        let depth = 0;
        let inString = false;
        let escaping = false;
        let items = 0;
        for (let i = contentStart + 10; i < afterStart.length; i++) {
          const c = afterStart[i];
          if (escaping) { escaping = false; continue; }
          if (c === '\\') { escaping = true; continue; }
          if (c === "'" && !inString) { inString = true; items++; continue; }
          if (c === "'" && inString) { inString = false; continue; }
          if (!inString) {
            if (c === '[') depth++;
            if (c === ']') { if (depth === 0) break; depth--; }
          }
        }
        contentCount = items;
      }
    }

    // Count timeline entries
    const timelineCount = (afterStart.match(/\{\s*date:\s*'/g) || []).length;
    
    // Count sources
    const sourceCount = (afterStart.match(/\{\s*title:\s*'/g) || []).length;
    
    // Count affiliations  
    const affCount = (afterStart.match(/\{\s*id:\s*'/g) || []).length;
    
    // Count tags
    const tagSection = afterStart.match(/tags:\s*\[([\s\S]*?)\]/);
    const tagCount = tagSection ? (tagSection[1].match(/'/g) || []).length / 2 : 0;

    // Check severity
    const sevMatch = afterStart.match(/severity:\s*'(\w+)'/);
    const severity = sevMatch ? sevMatch[1] : 'unknown';

    results.push({
      shard,
      slug,
      severity,
      content: contentCount,
      sources: sourceCount,
      affiliations: affCount,
      timeline: timelineCount,
      tags: Math.round(tagCount),
    });
  }
}

// Sort by quality score (lower = worse)
results.sort((a, b) => {
  const scoreA = a.content * 2 + a.timeline * 3 + a.affiliations * 2 + a.sources * 2;
  const scoreB = b.content * 2 + b.timeline * 3 + b.affiliations * 2 + b.sources * 2;
  return scoreA - scoreB;
});

console.log(`Total investigations: ${results.length}\n`);

// Show CRITICAL ones (lowest scores)
const critical = results.filter(r => 
  r.content <= 3 || r.timeline <= 2 || r.affiliations <= 2 || r.sources <= 2
);
console.log(`=== CRITICAL (${critical.length}) - content<=3 OR timeline<=2 OR affiliations<=2 OR sources<=2 ===`);
for (const r of critical) {
  console.log(`  [${r.shard}] ${r.slug} | sev:${r.severity} | c:${r.content} s:${r.sources} a:${r.affiliations} t:${r.timeline} tags:${r.tags}`);
}

console.log(`\n=== BELOW MINIMUM (content<=5 OR timeline<=4 OR affiliations<=3) ===`);
const belowMin = results.filter(r => 
  !critical.includes(r) && (r.content <= 5 || r.timeline <= 4 || r.affiliations <= 3)
);
console.log(`Count: ${belowMin.length}`);
for (const r of belowMin.slice(0, 30)) {
  console.log(`  [${r.shard}] ${r.slug} | sev:${r.severity} | c:${r.content} s:${r.sources} a:${r.affiliations} t:${r.timeline} tags:${r.tags}`);
}
