/**
 * Retry fetching defendant images that failed with HTTP 429 (rate limit).
 * Uses 3-second delays between requests to avoid throttling.
 * 
 * Usage: node scripts/retry-defendant-images.mjs
 */
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'defendants');

// Only defendants that returned 429 (have images, just rate-limited)
const RETRY = [
  { name: 'Donald Trump', wiki: 'Donald_Trump', file: 'donald-trump' },
  { name: 'Mark Meadows', wiki: 'Mark_Meadows', file: 'mark-meadows' },
  { name: 'Michael Flynn', wiki: 'Michael_Flynn', file: 'michael-flynn' },
  { name: 'Roger Stone', wiki: 'Roger_Stone', file: 'roger-stone' },
  { name: 'Linda Fairstein', wiki: 'Linda_Fairstein', file: 'linda-fairstein' },
  { name: 'Cardinal Bernard Law', wiki: 'Bernard_Francis_Law', file: 'bernard-law' },
  { name: 'Michael Cohen', wiki: 'Michael_Cohen_(lawyer)', file: 'michael-cohen' },
  { name: 'Eric Trump', wiki: 'Eric_Trump', file: 'eric-trump' },
  { name: 'Bruce Jessen', wiki: 'Bruce_Jessen', file: 'bruce-jessen' },
  { name: 'Gina Haspel', wiki: 'Gina_Haspel', file: 'gina-haspel' },
  { name: 'Alex Jones', wiki: 'Alex_Jones', file: 'alex-jones' },
  { name: 'Jeffrey Skilling', wiki: 'Jeffrey_Skilling', file: 'jeffrey-skilling' },
  { name: 'John Stumpf', wiki: 'John_Stumpf', file: 'john-stumpf' },
  { name: 'Oliver North', wiki: 'Oliver_North', file: 'oliver-north' },
  { name: 'John Poindexter', wiki: 'John_Poindexter', file: 'john-poindexter' },
  { name: 'Caspar Weinberger', wiki: 'Caspar_Weinberger', file: 'caspar-weinberger' },
  { name: 'Amber Guyger', wiki: 'Murder_of_Botham_Jean', file: 'amber-guyger' },
  { name: 'Steve Bannon', wiki: 'Steve_Bannon', file: 'steve-bannon' },
  { name: 'Clarence Thomas', wiki: 'Clarence_Thomas', file: 'clarence-thomas' },
  { name: 'Samuel Alito', wiki: 'Samuel_Alito', file: 'samuel-alito' },
  { name: 'Richard Burr', wiki: 'Richard_Burr', file: 'richard-burr' },
  { name: 'Kelly Loeffler', wiki: 'Kelly_Loeffler', file: 'kelly-loeffler' },
  { name: 'Rick Scott', wiki: 'Rick_Scott', file: 'rick-scott' },
  { name: 'Bill Cosby', wiki: 'Bill_Cosby', file: 'bill-cosby' },
  { name: 'Hank Greenberg', wiki: 'Maurice_R._Greenberg', file: 'hank-greenberg' },
  { name: 'Sam Bankman-Fried', wiki: 'Sam_Bankman-Fried', file: 'sam-bankman-fried' },
  { name: 'Changpeng Zhao', wiki: 'Changpeng_Zhao', file: 'changpeng-zhao' },
  { name: 'Do Kwon', wiki: 'Do_Kwon', file: 'do-kwon' },
  { name: 'Alex Mashinsky', wiki: 'Alex_Mashinsky', file: 'alex-mashinsky' },
  { name: 'Ghislaine Maxwell', wiki: 'Ghislaine_Maxwell', file: 'ghislaine-maxwell' },
  { name: 'J. Edgar Hoover', wiki: 'J._Edgar_Hoover', file: 'j-edgar-hoover' },
  { name: 'Richard Nixon', wiki: 'Richard_Nixon', file: 'richard-nixon' },
  { name: 'James Fields Jr.', wiki: 'Charlottesville_car_attack', file: 'james-fields-jr' },
  { name: 'John Cutler', wiki: 'John_Charles_Cutler', file: 'john-cutler' },
  { name: 'Maria Butina', wiki: 'Maria_Butina', file: 'maria-butina' },
  { name: 'Alexander Nix', wiki: 'Alexander_Nix', file: 'alexander-nix' },
  { name: 'Bob Menendez', wiki: 'Bob_Menendez', file: 'bob-menendez' },
  { name: 'Rod Blagojevich', wiki: 'Rod_Blagojevich', file: 'rod-blagojevich' },
  { name: 'Robert Bowers', wiki: 'Pittsburgh_synagogue_shooting', file: 'robert-bowers' },
  // John Eastman with correct wiki title
  { name: 'John Eastman', wiki: 'John_Eastman', file: 'john-eastman' },
  // Sidney Powell - no image found previously, skip
  // These also technically had images on first API call but 429 on download:
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'ArkHive/1.0 (accountability research; contact: arkhive.live)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchJson(res.headers.location).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse: ${data.slice(0, 200)}`)); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const follow = (u, depth = 0) => {
      if (depth > 5) { reject(new Error('Too many redirects')); return; }
      const mod = u.startsWith('https') ? https : http;
      mod.get(u, { headers: { 'User-Agent': 'ArkHive/1.0 (accountability research)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location, depth + 1);
          return;
        }
        if (res.statusCode === 429) {
          reject(new Error(`RATE LIMITED (429)`));
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const stream = fs.createWriteStream(filepath);
        res.pipe(stream);
        stream.on('finish', () => { stream.close(); resolve(); });
        stream.on('error', reject);
      }).on('error', reject);
    };
    follow(url);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const results = { success: [], failed: [] };
  let i = 0;

  for (const d of RETRY) {
    i++;
    const outPath = path.join(OUT_DIR, `${d.file}.jpg`);
    
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
      console.log(`[${i}/${RETRY.length}] SKIP ${d.name} (exists)`);
      results.success.push({ name: d.name, file: d.file, size: fs.statSync(outPath).size });
      continue;
    }

    console.log(`[${i}/${RETRY.length}] ${d.name}...`);
    
    try {
      // Step 1: API call
      await sleep(1500);
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(d.wiki)}&prop=pageimages&format=json&pithumbsize=400`;
      const data = await fetchJson(apiUrl);
      const page = Object.values(data.query?.pages || {})[0];
      
      if (!page || page.missing !== undefined) {
        console.log(`  NOT FOUND`);
        results.failed.push({ name: d.name, reason: 'Not found' });
        continue;
      }
      
      const thumb = page.thumbnail?.source;
      if (!thumb) {
        console.log(`  NO IMAGE`);
        results.failed.push({ name: d.name, reason: 'No image' });
        continue;
      }

      // Step 2: Download with delay
      await sleep(2000);
      const hiRes = thumb.replace(/\/\d+px-/, '/400px-');
      await downloadFile(hiRes, outPath);
      const stat = fs.statSync(outPath);
      console.log(`  OK (${(stat.size/1024).toFixed(0)}KB)`);
      results.success.push({ name: d.name, file: d.file, size: stat.size });
      
    } catch (err) {
      console.log(`  FAIL: ${err.message}`);
      results.failed.push({ name: d.name, reason: err.message });
      if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
      // Extra delay on errors
      await sleep(5000);
    }
  }

  console.log(`\n=== DONE: ${results.success.length} OK, ${results.failed.length} FAIL ===`);
  results.success.forEach(s => console.log(`  OK: ${s.name} → ${s.file}.jpg (${(s.size/1024).toFixed(0)}KB)`));
  results.failed.forEach(f => console.log(`  FAIL: ${f.name}: ${f.reason}`));
}

main().catch(console.error);
