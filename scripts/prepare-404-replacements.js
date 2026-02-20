const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const resultsPath = path.join(process.cwd(), 'link-check-results.json');
const outPath = path.join(process.cwd(), 'scripts', '404-replacements.json');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 8000 }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

(async () => {
  const raw = await fs.readFile(resultsPath, 'utf8');
  const data = JSON.parse(raw);
  const entries = data.results.filter(r => r.status === 404);
  console.log(`Found ${entries.length} 404 entries; checking Wayback snapshots...`);

  const replacements = [];
  for (const e of entries) {
    try {
      const api = `https://archive.org/wayback/available?url=${encodeURIComponent(e.url)}`;
      const resp = await fetchJson(api);
      const snap = resp && resp.archived_snapshots && resp.archived_snapshots.closest;
      if (snap && snap.available && snap.url) {
        // prepare replacements for all occurrences
        for (const occ of e.occurrences) {
          replacements.push({ file: occ.file.replace(/\\/g, '/'), line: occ.line, oldUrl: e.url, newUrl: snap.url, note: 'replaced-with-wayback' });
        }
      } else {
        for (const occ of e.occurrences) {
          replacements.push({ file: occ.file.replace(/\\/g, '/'), line: occ.line, oldUrl: e.url, newUrl: null, note: 'no-archive-found' });
        }
      }
    } catch (err) {
      for (const occ of e.occurrences) {
        replacements.push({ file: occ.file.replace(/\\/g, '/'), line: occ.line, oldUrl: e.url, newUrl: null, note: `error:${String(err).slice(0,120)}` });
      }
    }
  }

  await fs.writeFile(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), replacements }, null, 2));
  console.log(`Wrote ${replacements.length} replacement items to ${outPath}`);
})();
