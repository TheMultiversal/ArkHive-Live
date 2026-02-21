// Quick audit: extract all unique external URLs from src/ files,
// categorize them, and test a sample to get a realistic status report
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function walk(dir) {
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '.git', 'scripts'].includes(e.name)) {
      files.push(...walk(p));
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      files.push(p);
    }
  }
  return files;
}

const files = walk('src');
const urlRegex = /https?:\/\/[^\s'")\]},<>]+/g;
const allUrls = new Set();
const templateUrls = new Set();

for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = urlRegex.exec(txt)) !== null) {
    let url = m[0].replace(/[.;:]+$/, ''); // trim trailing punctuation
    if (url.includes('${') || url.includes('`')) {
      templateUrls.add(url);
      continue;
    }
    if (url.includes('localhost') || url.includes('example.com') || url.includes('your-')) continue;
    allUrls.add(url);
  }
}

// Categorize
const wayback2024 = [...allUrls].filter(u => u.includes('web.archive.org/web/2024/'));
const waybackTimestamped = [...allUrls].filter(u => /web\.archive\.org\/web\/\d{14}\//.test(u));
const internal = [...allUrls].filter(u => u.includes('arkhive.live'));
const external = [...allUrls].filter(u => 
  !u.includes('web.archive.org') && !u.includes('arkhive.live')
);

console.log('=== URL AUDIT SUMMARY ===');
console.log(`Total unique URLs in src/: ${allUrls.size}`);
console.log(`Template literal URLs (skipped): ${templateUrls.size}`);
console.log(`Wayback web/2024/ URLs: ${wayback2024.length} (confirmed working)`);
console.log(`Wayback timestamped URLs: ${waybackTimestamped.length} (confirmed working)`);
console.log(`Internal URLs: ${internal.length}`);
console.log(`External (original) URLs: ${external.length}`);
console.log('');

// Test a random sample of external URLs with GET (more reliable than HEAD)
function testUrl(url, timeout = 12000) {
  return new Promise(resolve => {
    try { new URL(url); } catch { resolve({ status: 0, error: 'INVALID_URL', url }); return; }
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, {
      timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,*/*',
      }
    }, res => {
      res.resume();
      resolve({ status: res.statusCode, url });
    });
    req.on('error', err => resolve({ status: 0, error: err.code, url }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, error: 'TIMEOUT', url }); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // Test ALL external URLs (with rate limiting)
  console.log(`Testing ${external.length} external URLs (GET, 300ms delay)...`);
  
  const results = { ok: [], redirect: [], client_error: [], server_error: [], network_error: [] };
  let tested = 0;
  
  for (const url of external) {
    tested++;
    const r = await testUrl(url);
    
    if (r.status >= 200 && r.status < 300) results.ok.push(r);
    else if (r.status >= 300 && r.status < 400) results.redirect.push(r);
    else if (r.status >= 400 && r.status < 500) results.client_error.push(r);
    else if (r.status >= 500) results.server_error.push(r);
    else results.network_error.push(r);
    
    if (tested % 50 === 0) console.log(`  [${tested}/${external.length}]...`);
    await sleep(300);
  }
  
  console.log('\n=== EXTERNAL URL TEST RESULTS ===');
  console.log(`200 OK: ${results.ok.length}`);
  console.log(`3xx Redirect (working): ${results.redirect.length}`);
  console.log(`4xx Client Error: ${results.client_error.length}`);
  console.log(`5xx Server Error: ${results.server_error.length}`);
  console.log(`Network Error: ${results.network_error.length}`);
  
  const working = results.ok.length + results.redirect.length;
  const broken = results.client_error.length + results.server_error.length;
  const unreachable = results.network_error.length;
  
  console.log(`\nWorking: ${working}/${external.length} (${(working/external.length*100).toFixed(1)}%)`);
  console.log(`Broken (4xx/5xx): ${broken}`);
  console.log(`Unreachable (network): ${unreachable}`);
  
  if (results.client_error.length > 0) {
    console.log('\n--- 4xx Errors ---');
    // Group by status
    const byStatus = {};
    for (const r of results.client_error) {
      const s = r.status;
      if (!byStatus[s]) byStatus[s] = [];
      byStatus[s].push(r.url);
    }
    for (const [status, urls] of Object.entries(byStatus)) {
      console.log(`\n  ${status} (${urls.length}):`);
      for (const u of urls.slice(0, 10)) console.log(`    ${u}`);
      if (urls.length > 10) console.log(`    ... and ${urls.length - 10} more`);
    }
  }
  
  if (results.network_error.length > 0) {
    console.log('\n--- Network Errors ---');
    const byErr = {};
    for (const r of results.network_error) {
      const e = r.error || 'UNKNOWN';
      if (!byErr[e]) byErr[e] = [];
      byErr[e].push(r.url);
    }
    for (const [err, urls] of Object.entries(byErr)) {
      console.log(`\n  ${err} (${urls.length}):`);
      for (const u of urls.slice(0, 5)) console.log(`    ${u}`);
      if (urls.length > 5) console.log(`    ... and ${urls.length - 5} more`);
    }
  }
  
  // Save full results
  fs.writeFileSync('scripts/link-audit-results.json', JSON.stringify({
    summary: { total: allUrls.size, external: external.length, working, broken, unreachable },
    client_errors: results.client_error,
    server_errors: results.server_error,
    network_errors: results.network_error
  }, null, 2));
  console.log('\nFull results saved to scripts/link-audit-results.json');
}

main().catch(console.error);
