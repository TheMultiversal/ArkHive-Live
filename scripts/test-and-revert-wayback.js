// Test all web/2024/ URLs in source, revert those returning 404
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function walk(dir) {
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', '.next', '.git', 'scripts'].includes(e.name)) files.push(...walk(p));
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) files.push(p);
  }
  return files;
}

function testUrl(url, timeout = 15000) {
  return new Promise(resolve => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { 
      timeout,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, res => {
      // Follow redirects
      if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
        const loc = res.headers.location;
        if (loc) {
          // Check if redirect leads to a valid page or to a "not available" page
          res.resume();
          resolve({ status: res.statusCode, redirect: loc });
          return;
        }
      }
      res.resume();
      resolve({ status: res.statusCode });
    });
    req.on('error', err => resolve({ status: 0, error: err.code }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, error: 'TIMEOUT' }); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const files = walk('src');
  
  // Collect all web/2024/ URLs with their file locations
  const urlMap = new Map(); // url -> Set of files
  const re = /https:\/\/web\.archive\.org\/web\/2024\/[^\s'")\]},]+/g;
  
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8');
    let m;
    while ((m = re.exec(txt)) !== null) {
      if (!urlMap.has(m[0])) urlMap.set(m[0], new Set());
      urlMap.get(m[0]).add(f);
    }
  }
  
  console.log(`Found ${urlMap.size} unique web/2024/ URLs in source files`);
  
  const toRevert = []; // { waybackUrl, originalUrl, files }
  let tested = 0;
  
  for (const [waybackUrl, fileSet] of urlMap) {
    tested++;
    const result = await testUrl(waybackUrl);
    
    // Check if Wayback returns 404 (no snapshot) or redirects to "not available"
    const is404 = result.status === 404;
    const isNotAvailable = result.redirect && result.redirect.includes('/web/*/');
    const isBad = is404 || isNotAvailable;
    
    if (isBad) {
      const originalUrl = waybackUrl.replace('https://web.archive.org/web/2024/', '');
      toRevert.push({ waybackUrl, originalUrl, files: [...fileSet] });
      console.log(`[${tested}/${urlMap.size}] 404 - will revert: ${originalUrl}`);
    } else {
      if (tested % 20 === 0) console.log(`[${tested}/${urlMap.size}] OK (${result.status})`);
    }
    
    // Rate limit to avoid Wayback throttling
    await sleep(500);
  }
  
  console.log(`\nURLs to revert: ${toRevert.length}`);
  
  // Apply reverts
  let reverted = 0;
  for (const { waybackUrl, originalUrl, files: fileList } of toRevert) {
    for (const f of fileList) {
      let content = fs.readFileSync(f, 'utf8');
      if (content.includes(waybackUrl)) {
        content = content.split(waybackUrl).join(originalUrl);
        fs.writeFileSync(f, content, 'utf8');
        reverted++;
        console.log(`Reverted in ${path.relative('.', f)}: ${originalUrl}`);
      }
    }
  }
  
  console.log(`\nTotal reverted: ${reverted} instances across ${toRevert.length} URLs`);
  
  // Save results for reference
  fs.writeFileSync('scripts/wayback-test-results.json', JSON.stringify(toRevert, null, 2));
}

main().catch(console.error);
