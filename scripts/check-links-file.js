const fs = require('fs').promises;
const path = require('path');
const { writeFileSync } = require('fs');

const fileArg = process.argv[2] || 'src/app/entities/individuals/[slug]/page.tsx';
const filePath = path.resolve(process.cwd(), fileArg);
const URL_RE = /https?:\/\/[^\s'"\)<>\]}]+/g;

async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    let res;
    try { res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal }); }
    catch (e) { /* fall through to GET attempt */ }
    clearTimeout(timeout);

    if (!res || res.status === 405 || res.status >= 400) {
      const controller2 = new AbortController();
      const timeout2 = setTimeout(() => controller2.abort(), 10000);
      try { res = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller2.signal }); }
      catch (err) { clearTimeout(timeout2); return { error: String(err) }; }
      clearTimeout(timeout2);
    }
    return { status: res.status, ok: res.ok, finalUrl: res.url };
  } catch (err) {
    return { error: String(err) };
  }
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
    const res = await checkUrl(url);
    results.push({ url, ...(res), occurrences: map.get(url) });
  }
  const broken = results.filter(r => r.error || (r.status && r.status >= 400));
  const outPath = path.join(process.cwd(), `link-check-results-${path.basename(fileArg).replace(/[^a-z0-9]/gi,'_')}.json`);
  writeFileSync(outPath, JSON.stringify({ file: fileArg, total: results.length, broken: broken.length, results }, null, 2));
  console.log(`Checked ${results.length} URLs — ${broken.length} broken. Results written to ${outPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
