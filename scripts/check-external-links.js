const fs = require('fs').promises;
const path = require('path');
const { writeFileSync } = require('fs');

const ROOT = process.cwd();
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.md', '.html', '.json'];
const URL_RE = /https?:\/\/[^\s'"\)<>\]}]+/g;
const OUT_FILE = path.join(ROOT, 'link-check-results.json');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(e.name)) continue;
      files.push(...await walk(res));
    } else {
      if (EXTENSIONS.includes(path.extname(e.name))) files.push(res);
    }
  }
  return files;
}

async function findUrls() {
  const files = await walk(path.join(ROOT, 'src'));
  const map = new Map(); // url -> { occurrences: [{file,line,preview}] }

  for (const file of files) {
    const txt = await fs.readFile(file, 'utf8');
    const lines = txt.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      while ((m = URL_RE.exec(line)) !== null) {
        const url = m[0].replace(/[,;\.)]+$/, '');
        if (!map.has(url)) map.set(url, { occurrences: [] });
        map.get(url).occurrences.push({ file: path.relative(ROOT, file), line: i + 1, preview: line.trim() });
      }
    }
  }
  return map;
}

function timeoutFetch(ms) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller;
}

async function checkUrl(url) {
  try {
    const controller = timeoutFetch(10000);
    // try HEAD first
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal });
    if (res.status === 405 || res.status === 501 || res.status === 0 || res.status >= 400) {
      // some servers disallow HEAD — fallback to GET
      const controller2 = timeoutFetch(10000);
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller2.signal });
    }
    return { status: res.status, ok: res.ok, finalUrl: res.url };
  } catch (err) {
    return { error: String(err) };
  }
}

async function main() {
  console.log('Scanning source files for external URLs...');
  const map = await findUrls();
  const urls = Array.from(map.keys()).filter(u => !u.includes(process.env.NEXT_PUBLIC_SITE_URL || 'arkhive.org'));
  console.log(`Found ${urls.length} unique external URLs.`);

  const results = [];
  const CONCURRENCY = 8;
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const checks = await Promise.all(batch.map(u => checkUrl(u)));
    for (let j = 0; j < batch.length; j++) {
      const url = batch[j];
      results.push({ url, ...checks[j], occurrences: map.get(url).occurrences });
    }
  }

  const broken = results.filter(r => (r.error || (r.status && r.status >= 400)) );
  const summary = { total: results.length, broken: broken.length, timestamp: new Date().toISOString() };
  const out = { summary, results, broken };
  writeFileSync(OUT_FILE, JSON.stringify(out, null, 2));
  console.log(`Checked ${results.length} URLs — ${broken.length} broken (written to ${OUT_FILE}).`);
}

main().catch(err => { console.error(err); process.exit(1); });
