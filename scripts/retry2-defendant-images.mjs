/**
 * Final retry for remaining rate-limited defendants.
 * 5-second delays between all operations.
 */
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'defendants');

const RETRY = [
  { name: 'Steve Bannon', wiki: 'Steve_Bannon', file: 'steve-bannon' },
  { name: 'Sam Bankman-Fried', wiki: 'Sam_Bankman-Fried', file: 'sam-bankman-fried' },
  { name: 'Bill Cosby', wiki: 'Bill_Cosby', file: 'bill-cosby' },
  { name: 'Ghislaine Maxwell', wiki: 'Ghislaine_Maxwell', file: 'ghislaine-maxwell' },
  { name: 'Richard Nixon', wiki: 'Richard_Nixon', file: 'richard-nixon' },
  { name: 'Alex Jones', wiki: 'Alex_Jones', file: 'alex-jones' },
  { name: 'Samuel Alito', wiki: 'Samuel_Alito', file: 'samuel-alito' },
  { name: 'Kelly Loeffler', wiki: 'Kelly_Loeffler', file: 'kelly-loeffler' },
  { name: 'John Poindexter', wiki: 'John_Poindexter', file: 'john-poindexter' },
  { name: 'John Stumpf', wiki: 'John_Stumpf', file: 'john-stumpf' },
  { name: 'Do Kwon', wiki: 'Do_Kwon', file: 'do-kwon' },
  { name: 'Alexander Nix', wiki: 'Alexander_Nix', file: 'alexander-nix' },
  { name: 'John Cutler', wiki: 'John_Charles_Cutler', file: 'john-cutler' },
  { name: 'Andrew Fastow', wiki: 'Andrew_Fastow', file: 'andrew-fastow' },
  { name: 'Derek Chauvin', wiki: 'Derek_Chauvin', file: 'derek-chauvin' },
  { name: 'Jon Burge', wiki: 'Jon_Burge', file: 'jon-burge' },
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'ArkHive-Research/1.0 (arkhive.live; accountability journalism)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchJson(res.headers.location).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error`)); }
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
      mod.get(u, { headers: { 'User-Agent': 'ArkHive-Research/1.0 (arkhive.live)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location, depth + 1); return;
        }
        if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
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
  let ok = 0, fail = 0;

  for (let i = 0; i < RETRY.length; i++) {
    const d = RETRY[i];
    const outPath = path.join(OUT_DIR, `${d.file}.jpg`);
    
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
      console.log(`[${i+1}] SKIP ${d.name}`);
      ok++;
      continue;
    }

    await sleep(4000);
    console.log(`[${i+1}] ${d.name}...`);
    
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(d.wiki)}&prop=pageimages&format=json&pithumbsize=400`;
      const data = await fetchJson(apiUrl);
      const page = Object.values(data.query?.pages || {})[0];
      
      if (!page || page.missing !== undefined || !page.thumbnail?.source) {
        console.log(`  NO IMAGE`);
        fail++;
        continue;
      }
      
      await sleep(3000);
      const thumb = page.thumbnail.source.replace(/\/\d+px-/, '/400px-');
      await downloadFile(thumb, outPath);
      const sz = fs.statSync(outPath).size;
      console.log(`  OK (${(sz/1024).toFixed(0)}KB)`);
      ok++;
    } catch (err) {
      console.log(`  FAIL: ${err.message}`);
      fail++;
      if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
      await sleep(8000);
    }
  }

  console.log(`\nDONE: ${ok} ok, ${fail} fail`);
  console.log(`Total files: ${fs.readdirSync(OUT_DIR).length}`);
}

main().catch(console.error);
