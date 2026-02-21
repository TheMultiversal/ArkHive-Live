// Improved link checker - skips template literal URLs, focuses on src/ only
const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const https = require('https');

const ROOT = process.cwd();
const URL_RE = /https?:\/\/[^\s'"\)<>\]}]+/g;
const OUT_FILE = path.join(ROOT, 'link-check-results.json');
const TIMEOUT_MS = parseInt(process.argv[2], 10) || 8000;
const CONCURRENCY = parseInt(process.argv[3], 10) || 30;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', '.next', 'scripts'].includes(e.name)) continue;
      files.push(...await walk(res));
    } else {
      const ext = path.extname(e.name);
      if (['.ts', '.tsx'].includes(ext)) files.push(res);
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
      opts.headers = { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      };
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
  let skippedTemplate = 0;
  let skippedExample = 0;
  
  for (const file of files) {
    const txt = await fs.readFile(file, 'utf8');
    const lines = txt.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      while ((m = URL_RE.exec(line)) !== null) {
        let url = m[0].replace(/[\.,;\)]+$/, '');
        
        // Skip template literal URLs
        if (url.includes('${') || line.includes('`') && line.includes('${')) {
          skippedTemplate++;
          continue;
        }
        
        // Skip example/placeholder URLs
        if (url.includes('example.com') || url.includes('placeholder') || url.includes('yourdomain')) {
          skippedExample++;
          continue;
        }
        
        // Skip localhost
        if (url.includes('localhost') || url.includes('127.0.0.1')) continue;
        
        if (!map.has(url)) map.set(url, { occurrences: [] });
        map.get(url).occurrences.push({ file: path.relative(ROOT, file), line: i + 1 });
      }
    }
  }
  console.log(`Skipped: ${skippedTemplate} template literals, ${skippedExample} example URLs`);
  return map;
}

async function main() {
  console.log('Scanning src/ for external URLs...');
  const map = await findUrls();
  const urls = Array.from(map.keys());
  console.log(`Found ${urls.length} unique external URLs to check.`);

  const results = new Array(urls.length);
  let idx = 0;
  let checked = 0;
  
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
      checked++;
      if (checked % 100 === 0) console.log(`  ${checked}/${urls.length} checked...`);
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, () => worker());
  await Promise.all(workers);

  const broken = results.filter(r => r && (r.error || (r.status && r.status >= 400)));
  
  // Categorize broken links
  const categories = { 
    '404': [], '403': [], '401': [], '410': [], 
    timeout: [], connection: [], dns: [], ssl: [], other: [] 
  };
  
  for (const r of broken) {
    if (r.error) {
      if (r.error.includes('timeout')) categories.timeout.push(r);
      else if (r.error.includes('ECONNREFUSED') || r.error.includes('ECONNRESET')) categories.connection.push(r);
      else if (r.error.includes('ENOTFOUND')) categories.dns.push(r);
      else if (r.error.includes('CERT') || r.error.includes('SSL') || r.error.includes('ERR_TLS')) categories.ssl.push(r);
      else categories.other.push(r);
    } else {
      const key = String(r.status);
      if (categories[key]) categories[key].push(r);
      else categories.other.push(r);
    }
  }
  
  console.log(`\n=== Results ===`);
  console.log(`Total URLs: ${results.length}`);
  console.log(`Broken: ${broken.length}`);
  console.log(`  404 Not Found: ${categories['404'].length}`);
  console.log(`  403 Forbidden: ${categories['403'].length}`);
  console.log(`  401 Unauthorized: ${categories['401'].length}`);
  console.log(`  410 Gone: ${categories['410'].length}`);
  console.log(`  Timeout: ${categories.timeout.length}`);
  console.log(`  Connection errors: ${categories.connection.length}`);
  console.log(`  DNS failures: ${categories.dns.length}`);
  console.log(`  SSL errors: ${categories.ssl.length}`);
  console.log(`  Other: ${categories.other.length}`);
  
  // Show 404s (most actionable)
  if (categories['404'].length > 0) {
    console.log(`\n--- 404 URLs ---`);
    for (const r of categories['404']) {
      const isWayback = r.url.includes('web.archive.org');
      console.log(`  ${isWayback ? '[WAYBACK] ' : ''}${r.url}`);
    }
  }
  
  if (categories.dns.length > 0) {
    console.log(`\n--- DNS failures (dead domains) ---`);
    for (const r of categories.dns) console.log(`  ${r.url}`);
  }

  const out = { 
    summary: { total: results.length, broken: broken.length, categories: Object.fromEntries(Object.entries(categories).map(([k,v]) => [k, v.length])), timestamp: new Date().toISOString() }, 
    results, 
    broken 
  };
  await fs.writeFile(OUT_FILE, JSON.stringify(out, null, 2));
  console.log(`\nResults saved to ${OUT_FILE}`);
}

main().catch(err => { console.error('Fatal error', err); process.exit(1); });
