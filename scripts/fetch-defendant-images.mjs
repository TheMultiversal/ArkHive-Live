/**
 * Fetches defendant portrait images from Wikimedia Commons via the Wikipedia API.
 * These images are freely licensed (public domain, CC-BY-SA, GFDL, etc.).
 * 
 * Usage: node scripts/fetch-defendant-images.mjs
 */
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'defendants');

// Map of defendant name -> Wikipedia article title
// Only individuals with known Wikipedia pages
const DEFENDANTS = [
  { name: 'Ivan Boesky', wiki: 'Ivan_Boesky', file: 'ivan-boesky' },
  { name: 'Michael Milken', wiki: 'Michael_Milken', file: 'michael-milken' },
  { name: 'Dennis Levine', wiki: 'Dennis_Levine', file: 'dennis-levine' },
  // Drexel Burnham Lambert is a company - no portrait needed
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
        catch (e) { reject(new Error(`JSON parse failed: ${data.slice(0, 200)}`)); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const follow = (u) => {
      const mod = u.startsWith('https') ? https : http;
      mod.get(u, { headers: { 'User-Agent': 'ArkHive/1.0 (accountability research)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
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

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const d of DEFENDANTS) {
    console.log(`\n--- ${d.name} ---`);
    
    // Step 1: Get the main image from the Wikipedia article
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${d.wiki}&prop=pageimages&format=json&pithumbsize=400`;
    console.log(`  API: ${apiUrl}`);
    
    const data = await fetchJson(apiUrl);
    const pages = data.query?.pages;
    if (!pages) {
      console.log(`  ERROR: No pages returned`);
      continue;
    }
    
    const page = Object.values(pages)[0];
    if (page.missing !== undefined) {
      console.log(`  Wikipedia article not found: ${d.wiki}`);
      continue;
    }
    
    if (!page.thumbnail) {
      console.log(`  No thumbnail/image found on Wikipedia page`);
      // Try the original image instead
      const imgApiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${d.wiki}&prop=images&format=json&imlimit=5`;
      const imgData = await fetchJson(imgApiUrl);
      const imgPage = Object.values(imgData.query.pages)[0];
      if (imgPage.images) {
        console.log(`  Found image references: ${imgPage.images.map(i => i.title).join(', ')}`);
      }
      continue;
    }
    
    const imgUrl = page.thumbnail.source;
    const outPath = path.join(OUT_DIR, `${d.file}.jpg`);
    
    console.log(`  Image URL: ${imgUrl}`);
    console.log(`  Downloading to: ${outPath}`);
    
    await downloadFile(imgUrl, outPath);
    
    const stats = fs.statSync(outPath);
    console.log(`  SUCCESS: ${stats.size} bytes`);
  }
  
  console.log('\n=== Done ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
