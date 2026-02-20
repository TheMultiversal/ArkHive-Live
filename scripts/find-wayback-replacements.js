/**
 * find-wayback-replacements.js
 * 
 * Checks all broken URLs (404, 410, ENOTFOUND) against the Wayback Machine API
 * with proper rate-limiting, retries, and delay between requests.
 * 
 * Outputs: scripts/wayback-replacements.json
 */
const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const RESULTS_PATH = path.join(process.cwd(), 'link-check-results.json');
const OUT_PATH = path.join(process.cwd(), 'scripts', 'wayback-replacements.json');
const DELAY_MS = 800;       // delay between requests to avoid rate-limiting
const TIMEOUT_MS = 15000;
const MAX_RETRIES = 3;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetchJson(url, timeout = TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(new Error('JSON parse error')); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function checkWayback(url) {
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const resp = await fetchJson(api);
      const snap = resp?.archived_snapshots?.closest;
      if (snap && snap.available && snap.url) {
        return snap.url;
      }
      return null; // API responded but no snapshot
    } catch (err) {
      if (attempt < MAX_RETRIES) {
        await sleep(2000 * attempt);
      }
    }
  }
  return null;
}

(async () => {
  const raw = await fs.readFile(RESULTS_PATH, 'utf8');
  const data = JSON.parse(raw);

  // Get truly broken URLs: 404, 410, ENOTFOUND, cert errors
  const broken = data.results.filter(r => {
    if (!r) return false;
    if (r.status === 404 || r.status === 410) return true;
    if (r.error && (r.error.includes('ENOTFOUND') || r.error.includes('CERT'))) return true;
    return false;
  });

  // Deduplicate by URL
  const urlMap = new Map();
  for (const b of broken) {
    if (!urlMap.has(b.url)) {
      urlMap.set(b.url, b.occurrences || []);
    }
  }

  const urls = Array.from(urlMap.keys());
  console.log(`Checking ${urls.length} truly broken URLs against Wayback Machine...`);

  const replacements = [];
  let found = 0;
  let notFound = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const waybackUrl = await checkWayback(url);

    if (waybackUrl) {
      found++;
      const occurrences = urlMap.get(url);
      for (const occ of occurrences) {
        replacements.push({
          file: occ.file.replace(/\\/g, '/'),
          line: occ.line,
          oldUrl: url,
          newUrl: waybackUrl,
          note: 'replaced-with-wayback',
        });
      }
    } else {
      notFound++;
      const occurrences = urlMap.get(url);
      for (const occ of occurrences) {
        replacements.push({
          file: occ.file.replace(/\\/g, '/'),
          line: occ.line,
          oldUrl: url,
          newUrl: null,
          note: 'no-archive-found',
        });
      }
    }

    if ((i + 1) % 25 === 0 || i === urls.length - 1) {
      console.log(`  [${i + 1}/${urls.length}] found: ${found}, not found: ${notFound}`);
    }

    // Rate limit
    if (i < urls.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  await fs.writeFile(OUT_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), replacements }, null, 2));
  console.log(`\nDone! Found ${found} Wayback snapshots, ${notFound} with no archive.`);
  console.log(`Wrote ${replacements.length} entries to ${OUT_PATH}`);
})();
