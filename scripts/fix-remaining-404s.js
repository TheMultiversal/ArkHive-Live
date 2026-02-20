/**
 * fix-remaining-404s.js
 * 
 * For each remaining 404 URL still in the codebase:
 * 1. Try a GET request (some sites 404 HEAD but serve GET)
 * 2. If truly dead, wrap with Wayback web/2024/ prefix
 * 3. Apply replacements
 */
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const CONCURRENCY = 20;
const TIMEOUT_MS = 10000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function requestUrl(url, timeout = TIMEOUT_MS) {
  return new Promise((resolve) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const req = lib.request(url, { method: 'GET', timeout, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
        // Consume body but don't store
        res.resume();
        res.on('end', () => resolve({ status: res.statusCode }));
      });
      req.on('error', () => resolve({ status: 0 }));
      req.on('timeout', () => { req.destroy(); resolve({ status: 0 }); });
      req.end();
    } catch { resolve({ status: 0 }); }
  });
}

(async () => {
  const linkResults = JSON.parse(fsSync.readFileSync('link-check-results.json', 'utf8'));
  const broken404 = linkResults.results.filter(r => r && r.status === 404);
  
  // Find URLs still present in codebase
  const remaining = [];
  for (const b of broken404) {
    for (const occ of (b.occurrences || [])) {
      const absPath = path.join(process.cwd(), occ.file);
      try {
        const txt = fsSync.readFileSync(absPath, 'utf8');
        if (txt.includes(b.url)) {
          remaining.push({ url: b.url, file: occ.file, line: occ.line });
          break;
        }
      } catch {}
    }
  }
  
  // Deduplicate by URL
  const uniqueUrls = [...new Set(remaining.map(r => r.url))];
  console.log(`Testing ${uniqueUrls.length} unique 404 URLs with GET requests...`);
  
  // Check which are truly dead via GET
  const results = [];
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= uniqueUrls.length) break;
      const url = uniqueUrls[i];
      const res = await requestUrl(url);
      results.push({ url, status: res.status, alive: res.status >= 200 && res.status < 400 });
    }
  }
  
  const workers = Array.from({ length: Math.min(CONCURRENCY, uniqueUrls.length) }, () => worker());
  await Promise.all(workers);
  
  const alive = results.filter(r => r.alive);
  const dead = results.filter(r => !r.alive);
  console.log(`GET results: ${alive.length} alive, ${dead.length} dead`);
  
  if (alive.length > 0) {
    console.log(`\nAlive URLs (false positives from HEAD check):`);
    alive.forEach(r => console.log(`  [${r.status}] ${r.url.slice(0, 80)}`));
  }
  
  // For dead URLs, apply Wayback web/2024/ prefix
  console.log(`\nApplying Wayback prefix to ${dead.length} truly dead URLs...`);
  
  // Build occurrence map
  const urlOccMap = new Map();
  for (const r of linkResults.results) {
    if (r && r.occurrences) urlOccMap.set(r.url, r.occurrences);
  }
  
  let applied = 0;
  let skipped = 0;
  
  // Skip URLs that are already Wayback URLs
  const deadNonWayback = dead.filter(d => !d.url.includes('web.archive.org') && !d.url.includes('archive.org/details'));
  
  for (const d of deadNonWayback) {
    const newUrl = 'https://web.archive.org/web/2024/' + d.url;
    const occs = urlOccMap.get(d.url);
    if (!occs) continue;
    
    for (const occ of occs) {
      const absPath = path.join(process.cwd(), occ.file.replace(/\\/g, '/'));
      try {
        let txt = await fs.readFile(absPath, 'utf8');
        if (txt.includes(d.url)) {
          txt = txt.split(d.url).join(newUrl);
          await fs.writeFile(absPath, txt, 'utf8');
          applied++;
          break;
        }
      } catch {}
    }
  }
  
  console.log(`Applied Wayback prefix to ${applied} URLs.`);
  console.log(`Skipped ${deadNonWayback.length - applied} (not found in files).`);
  console.log(`Skipped ${dead.length - deadNonWayback.length} (already Wayback/archive.org URLs).`);
  
  // Save report
  const report = {
    generatedAt: new Date().toISOString(),
    alive: alive.map(r => ({ url: r.url, status: r.status })),
    deadWithWayback: applied,
    skippedWaybackUrls: dead.filter(d => d.url.includes('archive.org')).map(d => d.url),
  };
  await fs.writeFile('scripts/fix-remaining-404s-report.json', JSON.stringify(report, null, 2));
  console.log(`\nReport: scripts/fix-remaining-404s-report.json`);
})();
