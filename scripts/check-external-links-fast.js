const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const https = require('https');

const ROOT = process.cwd();
const URL_RE = /https?:\/\/[^\s'"\)<>\]}]+/g;
const OUT_FILE = path.join(ROOT, 'link-check-results.json');
const PROGRESS_FILE = path.join(ROOT, 'link-check-progress.json');
const TIMEOUT_MS = parseInt(process.argv[2], 10) || 5000;
const CONCURRENCY = parseInt(process.argv[3], 10) || 50;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(e.name)) continue;
      files.push(...await walk(res));
    } else {
      const ext = path.extname(e.name);
      if (['.ts', '.tsx', '.js', '.jsx', '.md', '.html', '.json'].includes(ext)) files.push(res);
    }
  }
  return files;
}

function requestUrl(url, method = 'HEAD', maxRedirects = 5, timeoutMs = TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const opts = new URL(url);
      opts.method = method;
      opts.headers = { 'User-Agent': 'arkhive-link-checker/1.0' };
      const req = lib.request(opts, (res) => {
        const { statusCode, headers } = res;
        if (statusCode >= 300 && statusCode < 400 && headers.location && maxRedirects > 0) {
          const next = new URL(headers.location, url).toString();
          res.resume();
          resolve(requestUrl(next, method, maxRedirects - 1, timeoutMs));
          return;
        }
        res.resume();
        resolve({ status: statusCode, headers, finalUrl: url });
      });
      req.setTimeout(timeoutMs, () => { req.destroy(new Error('timeout')); });
      req.on('error', (err) => reject(err));
      req.end();
    } catch (err) { reject(err); }
  });
}

async function checkUrl(url) {
  try {
    let r;
    try { r = await requestUrl(url, 'HEAD'); }
    catch (e) { /* ignore */ }
    if (!r || r.status === 405 || r.status >= 400) {
      try { r = await requestUrl(url, 'GET'); }
      catch (err) { return { error: String(err) }; }
    }
    return { status: r.status, ok: r.status >= 200 && r.status < 400, finalUrl: r.finalUrl };
  } catch (err) { return { error: String(err) }; }
}

async function findUrls() {
  const files = await walk(path.join(ROOT, 'src'));
  const map = new Map();
  for (const file of files) {
    const txt = await fs.readFile(file, 'utf8');
    const lines = txt.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      while ((m = URL_RE.exec(line)) !== null) {
        const url = m[0].replace(/[\.,;\)]+$/, '');
        if (!map.has(url)) map.set(url, { occurrences: [] });
        map.get(url).occurrences.push({ file: path.relative(ROOT, file), line: i + 1, preview: line.trim() });
      }
    }
  }
  return map;
}

async function main() {
  console.log('Scanning repo for external URLs...');
  const map = await findUrls();
  const urls = Array.from(map.keys());
  console.log(`Found ${urls.length} unique external URLs.`);

  const results = new Array(urls.length);
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= urls.length) break;
      const url = urls[i];
      try {
        const res = await checkUrl(url);
        results[i] = { url, ...res, occurrences: map.get(url).occurrences };
      } catch (err) {
        results[i] = { url, error: String(err), occurrences: map.get(url).occurrences };
      }
      if (i % 50 === 0) {
        await fs.writeFile(PROGRESS_FILE, JSON.stringify({ checked: i + 1, total: urls.length }, null, 2));
      }
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, () => worker());
  await Promise.all(workers);

  const broken = results.filter(r => r && (r.error || (r.status && r.status >= 400)));
  const out = { summary: { total: results.length, broken: broken.length, timestamp: new Date().toISOString() }, results, broken };
  await fs.writeFile(OUT_FILE, JSON.stringify(out, null, 2));
  console.log(`Done — checked ${results.length} URLs, ${broken.length} broken. Results saved to ${OUT_FILE}`);
}

main().catch(err => { console.error('Fatal error', err); process.exit(1); });
