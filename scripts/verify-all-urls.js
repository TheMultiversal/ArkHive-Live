// Comprehensive URL verifier - checks HTTP status of every external URL in the codebase
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Read the URL list
const urlFile = path.join(__dirname, 'all-urls.txt');
const allUrls = fs.readFileSync(urlFile, 'utf8').split('\n').filter(u => u.trim());

console.log(`Total URLs to verify: ${allUrls.length}`);

// Track results
const results = {
  ok: [],        // 200-399
  broken: [],    // 404, connection refused, etc
  paywall: [],   // 403 (paywalls)
  timeout: [],   // timed out
  redirect: [],  // permanent redirects
  error: [],     // other errors
};

function checkUrl(url, retries = 1) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const timeout = 10000; // 10 seconds
    
    try {
      const req = protocol.get(url, {
        timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
        // Don't follow redirects automatically so we can see them
        maxRedirects: 0,
      }, (res) => {
        // Consume the response to free up the socket
        res.resume();
        resolve({ url, status: res.statusCode, location: res.headers.location });
      });
      
      req.on('timeout', () => {
        req.destroy();
        if (retries > 0) {
          resolve(checkUrl(url, retries - 1));
        } else {
          resolve({ url, status: 'TIMEOUT', error: 'Request timed out' });
        }
      });
      
      req.on('error', (err) => {
        if (retries > 0) {
          resolve(checkUrl(url, retries - 1));
        } else {
          resolve({ url, status: 'ERROR', error: err.message });
        }
      });
    } catch (e) {
      resolve({ url, status: 'ERROR', error: e.message });
    }
  });
}

async function checkBatch(urls, batchSize = 30) {
  const results = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(url => checkUrl(url)));
    results.push(...batchResults);
    
    const progress = Math.min(i + batchSize, urls.length);
    const broken = results.filter(r => r.status === 404 || r.status === 410 || r.status === 'ERROR').length;
    process.stdout.write(`\rChecked ${progress}/${urls.length} (${broken} broken so far)`);
  }
  console.log('');
  return results;
}

async function main() {
  console.log('Starting URL verification...\n');
  
  const allResults = await checkBatch(allUrls, 30);
  
  // Categorize
  const broken = [];
  const errors = [];
  const timeouts = [];
  const ok = [];
  
  for (const r of allResults) {
    if (r.status === 404 || r.status === 410) {
      broken.push(r);
    } else if (r.status === 'TIMEOUT') {
      timeouts.push(r);
    } else if (r.status === 'ERROR') {
      errors.push(r);
    } else if (r.status >= 200 && r.status < 400) {
      ok.push(r);
    } else if (r.status === 403) {
      // Paywall/forbidden - note but not necessarily broken
      ok.push(r); // Still "works" from user perspective (paywall page loads)
    } else if (r.status >= 400) {
      broken.push(r);
    } else {
      ok.push(r);
    }
  }
  
  console.log('\n=== RESULTS ===');
  console.log(`✓ OK (2xx/3xx): ${ok.length}`);
  console.log(`✗ Broken (404/410/4xx): ${broken.length}`);
  console.log(`⚠ Timeouts: ${timeouts.length}`);
  console.log(`⚠ Errors: ${errors.length}`);
  
  // Write detailed broken report
  const report = {
    summary: {
      total: allUrls.length,
      ok: ok.length,
      broken: broken.length,
      timeouts: timeouts.length,
      errors: errors.length,
    },
    broken: broken.map(r => ({ url: r.url, status: r.status })),
    errors: errors.map(r => ({ url: r.url, error: r.error })),
    timeouts: timeouts.map(r => ({ url: r.url })),
  };
  
  fs.writeFileSync(path.join(__dirname, 'url-check-report.json'), JSON.stringify(report, null, 2));
  
  // Print broken URLs
  if (broken.length > 0) {
    console.log('\n=== BROKEN URLs (404/4xx) ===');
    broken.forEach(r => console.log(`  [${r.status}] ${r.url}`));
  }
  
  if (errors.length > 0) {
    console.log('\n=== CONNECTION ERRORS ===');
    errors.forEach(r => console.log(`  [${r.error}] ${r.url}`));
  }
  
  if (timeouts.length > 0) {
    console.log('\n=== TIMEOUTS ===');
    timeouts.forEach(r => console.log(`  ${r.url}`));
  }
  
  console.log('\nFull report saved to scripts/url-check-report.json');
}

main().catch(console.error);
