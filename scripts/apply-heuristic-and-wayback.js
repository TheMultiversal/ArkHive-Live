/**
 * apply-heuristic-and-wayback.js
 * 
 * 1. Applies the 32 real heuristic alternatives (www/non-www, domain variants)
 * 2. Looks up direct Wayback timestamps for the 27 wildcard matches
 * 3. Applies those too
 */
const fs = require('fs').promises;
const path = require('path');
const https = require('https');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetchJson(url, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(new Error('JSON parse')); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function getDirectWaybackUrl(originalUrl) {
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(originalUrl)}&timestamp=20260101`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const resp = await fetchJson(api);
      const snap = resp?.archived_snapshots?.closest;
      if (snap && snap.available && snap.url) {
        // Convert http to https for the wayback URL
        return snap.url.replace(/^http:/, 'https:');
      }
      return null;
    } catch {
      if (attempt < 3) await sleep(2000 * attempt);
    }
  }
  return null;
}

(async () => {
  const suggestions = JSON.parse(await fs.readFile('scripts/heuristic-replacement-suggestions.json', 'utf8'));
  const found = suggestions.suggestions.filter(s => s.candidate);
  
  // Separate real alternatives from Wayback wildcards
  const realAlts = found.filter(s => !s.candidate.includes('/web/*/'));
  const wildcards = found.filter(s => s.candidate.includes('/web/*/'));
  
  console.log(`Real alternatives: ${realAlts.length}`);
  console.log(`Wayback wildcards to resolve: ${wildcards.length}`);
  
  // Step 1: Apply real alternatives
  const applied = [];
  const srcDir = process.cwd();
  
  // Read all source files into memory once
  const fileCache = new Map();
  async function getFile(relPath) {
    if (!fileCache.has(relPath)) {
      const absPath = path.join(srcDir, relPath);
      try {
        fileCache.set(relPath, await fs.readFile(absPath, 'utf8'));
      } catch { return null; }
    }
    return fileCache.get(relPath);
  }
  
  // We need to find which files contain these URLs
  const linkResults = JSON.parse(await fs.readFile('link-check-results.json', 'utf8'));
  
  // Build URL -> occurrences map
  const urlOccurrences = new Map();
  for (const r of linkResults.results) {
    if (r && r.occurrences) {
      urlOccurrences.set(r.url, r.occurrences);
    }
  }
  
  // Apply real alternatives
  for (const alt of realAlts) {
    const occs = urlOccurrences.get(alt.oldUrl);
    if (!occs) continue;
    
    for (const occ of occs) {
      const relPath = occ.file.replace(/\\/g, '/');
      const absPath = path.join(srcDir, relPath);
      try {
        let txt = await fs.readFile(absPath, 'utf8');
        if (txt.includes(alt.oldUrl)) {
          txt = txt.split(alt.oldUrl).join(alt.candidate);
          await fs.writeFile(absPath, txt, 'utf8');
          fileCache.delete(relPath); // invalidate cache
          applied.push({ oldUrl: alt.oldUrl, newUrl: alt.candidate, file: relPath });
          break; // only need to replace once per unique URL (split/join replaces all)
        }
      } catch {}
    }
  }
  
  console.log(`\nApplied ${applied.length} real alternative replacements.`);
  
  // Step 2: Resolve Wayback wildcards to direct URLs
  console.log(`\nResolving ${wildcards.length} Wayback wildcard URLs...`);
  const waybackApplied = [];
  
  for (let i = 0; i < wildcards.length; i++) {
    const wc = wildcards[i];
    const directUrl = await getDirectWaybackUrl(wc.oldUrl);
    
    if (directUrl) {
      const occs = urlOccurrences.get(wc.oldUrl);
      if (!occs) continue;
      
      for (const occ of occs) {
        const relPath = occ.file.replace(/\\/g, '/');
        const absPath = path.join(srcDir, relPath);
        try {
          let txt = await fs.readFile(absPath, 'utf8');
          if (txt.includes(wc.oldUrl)) {
            txt = txt.split(wc.oldUrl).join(directUrl);
            await fs.writeFile(absPath, txt, 'utf8');
            waybackApplied.push({ oldUrl: wc.oldUrl, newUrl: directUrl, file: relPath });
            break;
          }
        } catch {}
      }
    }
    
    if ((i + 1) % 10 === 0) {
      console.log(`  [${i + 1}/${wildcards.length}] resolved`);
    }
    await sleep(800);
  }
  
  console.log(`Applied ${waybackApplied.length} Wayback direct URL replacements.`);
  
  // Write report
  const report = {
    generatedAt: new Date().toISOString(),
    realAlternatives: applied,
    waybackDirect: waybackApplied,
    totalReplaced: applied.length + waybackApplied.length,
  };
  await fs.writeFile('scripts/heuristic-apply-report.json', JSON.stringify(report, null, 2));
  console.log(`\nTotal: ${report.totalReplaced} URLs replaced. Report: scripts/heuristic-apply-report.json`);
})();
