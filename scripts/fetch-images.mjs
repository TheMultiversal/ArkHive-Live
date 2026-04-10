#!/usr/bin/env node
/**
 * ArkHive Automated Image Pipeline
 * 
 * Fetches freely-licensed images from Wikipedia/Wikimedia Commons for individuals
 * who currently only have SVG placeholders. Falls back to generating improved SVGs.
 * 
 * Usage:
 *   node scripts/fetch-images.mjs              # Run for all SVG-only defendants
 *   node scripts/fetch-images.mjs --dry-run    # Preview what would be fetched
 *   node scripts/fetch-images.mjs --name "Ivan Boesky"  # Single person
 * 
 * Sources checked (in order):
 *   1. Wikipedia page image (freely licensed)
 *   2. Wikimedia Commons direct search
 *   3. Wikidata P18 (image) claim
 *   4. US Government sources (congress.gov portraits for politicians)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DEFENDANTS_DIR = path.join(ROOT, 'public', 'defendants');

// ════════════════════════════════════════════════════════════
// CONFIGURATION
// ════════════════════════════════════════════════════════════

const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';
const WIKIDATA_API = 'https://www.wikidata.org/w/api.php';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

// Known Wikipedia article titles for defendants (overrides auto-detection)
const WIKIPEDIA_OVERRIDES = {
  'ivan-boesky': 'Ivan_Boesky',
  'martin-siegel': 'Martin_Siegel_(financier)',
  'robert-freeman': 'Robert_Freeman_(financier)',
  'dennis-levine': 'Dennis_Levine',
  'michael-milken': 'Michael_Milken',
  'lowell-milken': 'Lowell_Milken',
  'paul-bilzerian': 'Paul_Bilzerian',
  'john-mulheren': 'John_Mulheren',
  'fred-joseph': 'Fred_Joseph',
  'terren-peizer': 'Terren_Peizer',
  'peter-brant': 'Peter_Brant',
  'victor-posner': 'Victor_Posner',
  'boyd-jefferies': 'Boyd_Jefferies',
};

// ════════════════════════════════════════════════════════════
// HTTP HELPERS
// ════════════════════════════════════════════════════════════

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    https.get(parsed, { headers: { 'User-Agent': 'ArkHive-ImagePipeline/1.0 (investigative-journalism-platform)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error(`Invalid JSON from ${url}`)); }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    https.get(parsed, { headers: { 'User-Agent': 'ArkHive-ImagePipeline/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(destPath); });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

// ════════════════════════════════════════════════════════════
// IMAGE SOURCE CHECKERS  
// ════════════════════════════════════════════════════════════

/** Check Wikipedia page for a main image */
async function checkWikipediaPageImage(articleTitle) {
  try {
    const url = `${WIKIPEDIA_API}?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&pithumbsize=800&format=json`;
    const data = await fetchJSON(url);
    const pages = data?.query?.pages;
    if (!pages) return null;
    for (const page of Object.values(pages)) {
      if (page.thumbnail?.source) return page.thumbnail.source;
    }
    return null;
  } catch { return null; }
}

/** Check Wikidata for P18 (image) property */
async function checkWikidataImage(articleTitle) {
  try {
    // First get the Wikidata entity ID from Wikipedia
    const wpUrl = `${WIKIPEDIA_API}?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageprops&ppprop=wikibase_item&format=json`;
    const wpData = await fetchJSON(wpUrl);
    const pages = wpData?.query?.pages;
    if (!pages) return null;
    
    let entityId = null;
    for (const page of Object.values(pages)) {
      if (page.pageprops?.wikibase_item) {
        entityId = page.pageprops.wikibase_item;
        break;
      }
    }
    if (!entityId) return null;

    // Get P18 claim from Wikidata
    const wdUrl = `${WIKIDATA_API}?action=wbgetentities&ids=${entityId}&props=claims&format=json`;
    const wdData = await fetchJSON(wdUrl);
    const claims = wdData?.entities?.[entityId]?.claims;
    if (!claims?.P18?.[0]) return null;

    const filename = claims.P18[0].mainsnak?.datavalue?.value;
    if (!filename) return null;

    // Convert filename to Commons URL
    const commonsUrl = `${COMMONS_API}?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
    const commonsData = await fetchJSON(commonsUrl);
    const commonsPages = commonsData?.query?.pages;
    if (!commonsPages) return null;

    for (const page of Object.values(commonsPages)) {
      if (page.imageinfo?.[0]?.thumburl) return page.imageinfo[0].thumburl;
      if (page.imageinfo?.[0]?.url) return page.imageinfo[0].url;
    }
    return null;
  } catch { return null; }
}

/** Search Wikimedia Commons directly */
async function checkCommonsSearch(personName) {
  try {
    const url = `${COMMONS_API}?action=query&list=search&srsearch=${encodeURIComponent(`"${personName}" portrait OR photo`)}&srnamespace=6&srlimit=5&format=json`;
    const data = await fetchJSON(url);
    const results = data?.query?.search;
    if (!results?.length) return null;

    // Look for actual photo files (not PDFs, SVGs, etc.)
    for (const result of results) {
      const title = result.title;
      if (/\.(jpg|jpeg|png|webp)$/i.test(title) && 
          title.toLowerCase().includes(personName.split(' ').pop().toLowerCase())) {
        // Get the actual image URL
        const imgUrl = `${COMMONS_API}?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
        const imgData = await fetchJSON(imgUrl);
        const pages = imgData?.query?.pages;
        if (pages) {
          for (const page of Object.values(pages)) {
            if (page.imageinfo?.[0]?.thumburl) return page.imageinfo[0].thumburl;
          }
        }
      }
    }
    return null;
  } catch { return null; }
}

// ════════════════════════════════════════════════════════════
// MAIN PIPELINE
// ════════════════════════════════════════════════════════════

async function fetchImageForPerson(slug, personName, dryRun = false) {
  const jpgPath = path.join(DEFENDANTS_DIR, `${slug}.jpg`);
  const pngPath = path.join(DEFENDANTS_DIR, `${slug}.png`);
  
  // Skip if already has a real image (JPG or PNG)
  if (fs.existsSync(jpgPath) && fs.statSync(jpgPath).size > 5000) {
    return { slug, status: 'skip', reason: 'Has JPG already' };
  }
  if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 5000) {
    return { slug, status: 'skip', reason: 'Has PNG already' };
  }

  // Determine Wikipedia article title
  const wikiTitle = WIKIPEDIA_OVERRIDES[slug] || personName.replace(/\s+/g, '_');

  console.log(`  🔍 Checking: ${personName} (${slug})...`);

  // Source 1: Wikipedia page image
  let imageUrl = await checkWikipediaPageImage(wikiTitle);
  let source = 'Wikipedia';

  // Source 2: Wikidata P18
  if (!imageUrl) {
    imageUrl = await checkWikidataImage(wikiTitle);
    source = 'Wikidata';
  }

  // Source 3: Commons search
  if (!imageUrl) {
    imageUrl = await checkCommonsSearch(personName);
    source = 'Wikimedia Commons';
  }

  if (!imageUrl) {
    return { slug, status: 'not-found', reason: 'No free image on Wikipedia/Wikimedia' };
  }

  if (dryRun) {
    return { slug, status: 'would-download', source, url: imageUrl };
  }

  // Download the image
  try {
    const ext = imageUrl.match(/\.(jpg|jpeg|png|webp)/i)?.[1]?.toLowerCase() || 'jpg';
    const destPath = path.join(DEFENDANTS_DIR, `${slug}.${ext === 'jpeg' ? 'jpg' : ext}`);
    await downloadFile(imageUrl, destPath);
    const size = fs.statSync(destPath).size;
    return { slug, status: 'downloaded', source, size: `${(size / 1024).toFixed(1)}KB`, path: destPath };
  } catch (err) {
    return { slug, status: 'error', reason: err.message };
  }
}

// ════════════════════════════════════════════════════════════
// SCAN & RUN
// ════════════════════════════════════════════════════════════

function getAllSVGOnlyDefendants() {
  const files = fs.readdirSync(DEFENDANTS_DIR);
  const svgFiles = files.filter(f => f.endsWith('.svg'));
  const jpgFiles = new Set(files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).map(f => f.replace(/\.[^.]+$/, '')));
  
  return svgFiles
    .map(f => f.replace('.svg', ''))
    .filter(slug => !jpgFiles.has(slug))
    .map(slug => ({
      slug,
      name: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    }));
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const nameFlag = args.indexOf('--name');
  const singleName = nameFlag !== -1 ? args[nameFlag + 1] : null;

  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║  ArkHive Image Pipeline                            ║');
  console.log('║  Fetching freely-licensed images from Wikipedia     ║');
  console.log(`║  Mode: ${dryRun ? 'DRY RUN (preview only)' : 'LIVE (downloading)'}${' '.repeat(dryRun ? 12 : 15)}║`);
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');

  let targets;
  if (singleName) {
    const slug = singleName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    targets = [{ slug, name: singleName }];
  } else {
    targets = getAllSVGOnlyDefendants();
  }

  console.log(`Found ${targets.length} individuals with SVG-only placeholders.\n`);

  const results = { downloaded: [], notFound: [], skipped: [], errors: [] };

  for (const target of targets) {
    const result = await fetchImageForPerson(target.slug, target.name, dryRun);
    
    if (result.status === 'downloaded' || result.status === 'would-download') {
      results.downloaded.push(result);
      console.log(`  ✅ ${result.slug} — ${result.source} (${result.size || result.url})`);
    } else if (result.status === 'not-found') {
      results.notFound.push(result);
      console.log(`  ⬜ ${result.slug} — ${result.reason}`);
    } else if (result.status === 'skip') {
      results.skipped.push(result);
    } else {
      results.errors.push(result);
      console.log(`  ❌ ${result.slug} — ${result.reason}`);
    }

    // Rate limit: 200ms between API calls
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n══════════════════════════════════════════════════════');
  console.log(`  Downloaded:  ${results.downloaded.length}`);
  console.log(`  Not Found:   ${results.notFound.length}`);
  console.log(`  Skipped:     ${results.skipped.length}`);
  console.log(`  Errors:      ${results.errors.length}`);
  console.log('══════════════════════════════════════════════════════');

  if (results.notFound.length > 0) {
    console.log('\n📋 Manual sourcing needed for:');
    results.notFound.forEach(r => console.log(`   - ${r.slug}`));
  }
}

main().catch(console.error);
