const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const https = require('https');

function requestStatus(url, timeout = 8000) {
  return new Promise((resolve) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const req = lib.request(url, { method: 'HEAD' }, (res) => {
        resolve({ url, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
        res.resume();
      });
      req.on('error', (e) => resolve({ url, error: String(e) }));
      req.setTimeout(timeout, () => { req.destroy(); resolve({ url, error: 'timeout' }); });
      req.end();
    } catch (err) { resolve({ url, error: String(err) }); }
  });
}

function variantsForUrl(u) {
  try {
    const url = new URL(u);
    const host = url.host;
    const pathStr = url.pathname + (url.search || '');
    const variants = new Set();

    // original
    variants.add(u);

    // www <-> no-www
    if (host.startsWith('www.')) variants.add(url.protocol + '//' + host.replace(/^www\./,'') + pathStr);
    else variants.add(url.protocol + '//' + 'www.' + host + pathStr);

    // domain-specific heuristics
    if (host.endsWith('.nytimes.com') && host.startsWith('int.')) {
      variants.add(url.protocol + '//' + host.replace(/^int\./,'www.') + pathStr);
      variants.add(url.protocol + '//' + 'www.nytimes.com' + pathStr);
    }

    if (host.includes('courtlistener')) {
      variants.add(url.protocol + '//' + 'www.courtlistener.com' + pathStr);
      variants.add(url.protocol + '//' + 'courtlistener.com' + pathStr);
    }

    if (host.includes('manhattanda')) {
      variants.add(url.protocol + '//' + 'www.manhattanda.org' + pathStr);
      variants.add(url.protocol + '//' + 'manhattanda.org' + pathStr);
    }

    if (host.includes('oversight.house.gov')) {
      variants.add(url.protocol + '//' + 'oversight.house.gov' + pathStr);
    }

    if (host.includes('whitehouse.gov')) {
      variants.add('https://www.whitehouse.gov' + pathStr);
    }

    if (host.includes('supremecourt.gov')) {
      variants.add('https://www.supremecourt.gov' + pathStr);
      variants.add('https://web.archive.org/web/*/' + u);
    }

    // Wayback wildcard page as a fallback to look for snapshots
    variants.add('https://web.archive.org/web/*/' + u);

    return Array.from(variants);
  } catch (err) { return [u]; }
}

(async () => {
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const raw = await fs.readFile(replPath, 'utf8');
  const { replacements } = JSON.parse(raw);
  const pending = replacements.filter(r => !r.newUrl && r.oldUrl).map(r => r.oldUrl);
  const unique = Array.from(new Set(pending));
  console.log(`Checking ${unique.length} unique no-archive URLs with heuristics...`);

  const suggestions = [];
  for (const u of unique) {
    const cand = variantsForUrl(u);
    let found = null;
    for (const v of cand) {
      const res = await requestStatus(v);
      if (res.ok) { found = v; suggestions.push({ oldUrl: u, candidate: v, status: res.status }); break; }
    }
    if (!found) suggestions.push({ oldUrl: u, candidate: null });
  }

  const out = path.join(process.cwd(), 'scripts', 'heuristic-replacement-suggestions.json');
  await fs.writeFile(out, JSON.stringify({ generatedAt: new Date().toISOString(), suggestions }, null, 2));
  console.log(`Wrote suggestions (${suggestions.filter(s=>s.candidate).length} found) to ${out}`);
})();