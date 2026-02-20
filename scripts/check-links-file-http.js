const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const https = require('https');

const fileArg = process.argv[2] || 'src/app/entities/individuals/[slug]/page.tsx';
const filePath = path.resolve(process.cwd(), fileArg);
const URL_RE = /https?:\/\/[^\s'"\)<>\]}]+/g;

function requestUrl(url, method = 'HEAD', maxRedirects = 5) {
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
          resolve(requestUrl(next, method, maxRedirects - 1));
          return;
        }
        res.resume();
        resolve({ status: statusCode, headers, finalUrl: url });
      });
      req.setTimeout(10000, () => { req.destroy(new Error('timeout')); });
      req.on('error', (err) => reject(err));
      req.end();
    } catch (err) { reject(err); }
  });
}

async function checkUrl(url) {
  try {
    let r;
    try { r = await requestUrl(url, 'HEAD'); }
    catch (e) { /* HEAD failed, try GET */ }
    if (!r || r.status === 405 || r.status >= 400) {
      try { r = await requestUrl(url, 'GET'); }
      catch (err) { return { error: String(err) }; }
    }
    return { status: r.status, ok: r.status >= 200 && r.status < 400, finalUrl: r.finalUrl };
  } catch (err) { return { error: String(err) }; }
}

async function main() {
  const txt = await fs.readFile(filePath, 'utf8');
  const lines = txt.split(/\r?\n/);
  const map = new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let m;
    while ((m = URL_RE.exec(line)) !== null) {
      const url = m[0].replace(/[\.,;\)]+$/, '');
      if (!map.has(url)) map.set(url, []);
      map.get(url).push({ line: i + 1, preview: line.trim() });
    }
  }
  const urls = Array.from(map.keys());
  console.log(`Found ${urls.length} unique external URLs in ${fileArg}`);

  const results = [];
  for (const url of urls) {
    process.stdout.write(`Checking ${url}\n`);
    const res = await checkUrl(url);
    results.push({ url, ...(res), occurrences: map.get(url) });
  }

  const broken = results.filter(r => r.error || (r.status && r.status >= 400));
  const outPath = path.join(process.cwd(), `link-check-results-${path.basename(fileArg).replace(/[^a-z0-9]/gi,'_')}.json`);
  await fs.writeFile(outPath, JSON.stringify({ file: fileArg, total: results.length, broken: broken.length, results }, null, 2));
  console.log(`Checked ${results.length} URLs — ${broken.length} broken. Results written to ${outPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
