const fs = require('fs').promises;
const path = require('path');
const https = require('https');

function fetchJson(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(new Error('timeout')); });
  });
}

(async () => {
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const raw = await fs.readFile(replPath, 'utf8');
  const obj = JSON.parse(raw);
  const replacements = obj.replacements || [];

  const pending = replacements.filter(r => !r.newUrl).map(r => ({ file: r.file, line: r.line, oldUrl: r.oldUrl }));
  console.log(`Re-checking ${pending.length} URLs against Wayback (retries=3)`);

  const found = [];
  for (const p of pending) {
    const api = `https://archive.org/wayback/available?url=${encodeURIComponent(p.oldUrl)}`;
    let resp = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        resp = await fetchJson(api, 12000);
        break;
      } catch (err) {
        if (attempt === 3) {
          resp = null;
        } else {
          await new Promise(r => setTimeout(r, 1000 * attempt));
        }
      }
    }
    const snap = resp && resp.archived_snapshots && resp.archived_snapshots.closest;
    if (snap && snap.available && snap.url) {
      found.push({ file: p.file, line: p.line, oldUrl: p.oldUrl, newUrl: snap.url });
    }
  }

  const outPath = path.join(process.cwd(), 'scripts', 'manual-archive-suggestions.json');
  await fs.writeFile(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), found }, null, 2));
  console.log(`Found ${found.length} new Wayback suggestions — report: ${outPath}`);
})();