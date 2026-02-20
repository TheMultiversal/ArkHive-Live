/**
 * revert-wayback-404s.js
 * 
 * Reverts web/2024/ Wayback URLs that returned 404 (no snapshot exists)
 * back to the original URLs. A dead original URL is better than a 
 * Wayback "not found" page.
 */
const fs = require('fs');
const path = require('path');

const r = JSON.parse(fs.readFileSync('link-check-results.json', 'utf8'));
const wb404 = r.broken.filter(b => b.status === 404 && b.url.includes('web.archive.org'));

// Build URL -> occurrences map
const urlOccMap = new Map();
for (const res of r.results) {
  if (res && res.occurrences) urlOccMap.set(res.url, res.occurrences);
}

let reverted = 0;

for (const b of wb404) {
  // Only revert web/2024/ prefixed URLs (our automated additions)
  const match = b.url.match(/web\.archive\.org\/web\/2024\/(https?:\/\/.+)/);
  if (!match) continue;
  
  const originalUrl = match[1];
  const waybackUrl = b.url;
  const occs = urlOccMap.get(waybackUrl);
  if (!occs) continue;
  
  for (const occ of occs) {
    const absPath = path.join(process.cwd(), occ.file);
    try {
      let txt = fs.readFileSync(absPath, 'utf8');
      if (txt.includes(waybackUrl)) {
        txt = txt.split(waybackUrl).join(originalUrl);
        fs.writeFileSync(absPath, txt, 'utf8');
        reverted++;
        console.log('Reverted:', originalUrl.slice(0, 70));
        break;
      }
    } catch {}
  }
}

console.log('\nTotal reverted:', reverted);
