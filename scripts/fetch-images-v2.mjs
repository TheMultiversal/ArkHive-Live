#!/usr/bin/env node
/**
 * ArkHive Enhanced Image Pipeline v2
 * 
 * Multi-source image fetcher for defendants with SVG-only placeholders.
 * Searches across multiple freely-licensed image repositories.
 * Falls back to generating high-quality investigation-themed SVG placeholders.
 * 
 * Usage:
 *   node scripts/fetch-images-v2.mjs              # Full run
 *   node scripts/fetch-images-v2.mjs --dry-run    # Preview only
 *   node scripts/fetch-images-v2.mjs --svg-only   # Only regenerate SVGs (no downloads)
 *   node scripts/fetch-images-v2.mjs --name "Ivan Boesky"  # Single person
 * 
 * Sources in priority order:
 *   1. Wikipedia page image (freely licensed)
 *   2. Wikidata P18 (image) property
 *   3. Wikidata label search → P18
 *   4. All images on Wikipedia article → Commons license check
 *   5. Wikimedia Commons multi-strategy search
 *   6. OpenVerse (Creative Commons image aggregator — Flickr, museums, etc.)
 *   7. US Government sources (federal mugshots/press photos = public domain)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DEFENDANTS_DIR = path.join(ROOT, 'public', 'defendants');
const DATA_DIR = path.join(ROOT, 'src', 'data', 'investigations');

// ════════════════════════════════════════════════════════════
// CONFIGURATION
// ════════════════════════════════════════════════════════════

const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';
const WIKIDATA_API = 'https://www.wikidata.org/w/api.php';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const OPENVERSE_API = 'https://api.openverse.org/v1/images/';

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
  'andrew-fastow': 'Andrew_Fastow',
  'allen-weisselberg': 'Allen_Weisselberg',
  'david-pecker': 'David_Pecker',
  'jho-low': 'Jho_Low',
  'tim-leissner': 'Tim_Leissner',
  'roger-ng': 'Roger_Ng',
  'derek-chauvin': 'Derek_Chauvin',
  'jason-van-dyke': 'Jason_Van_Dyke_(police_officer)',
  'daniel-pantaleo': 'Daniel_Pantaleo',
  'sidney-powell': 'Sidney_Powell',
  'kenneth-chesebro': 'Kenneth_Chesebro',
  'jeffrey-clark': 'Jeffrey_Clark_(attorney)',
  'caroline-ellison': 'Caroline_Ellison',
  'gary-wang': 'Gary_Wang',
  'tom-hayes': 'Tom_Hayes_(trader)',
  'travis-mcmichael': 'Travis_McMichael',
  'gregory-mcmichael': 'Gregory_McMichael',
  'william-bryan': 'William_Bryan_(murderer)',
  'harlan-crow': 'Harlan_Crow',
  'jon-burge': 'Jon_Burge',
  'warren-anderson': 'Warren_Anderson_(businessman)',
  'james-mitchell': 'James_Elmer_Mitchell',
  'kareem-serageldin': 'Kareem_Serageldin',
  'aleksandr-kogan': 'Aleksandr_Kogan',
  'nicholas-slatten': 'Nisour_Square_massacre',
  'paul-slough': 'Nisour_Square_massacre',
  'evan-liberty': 'Nisour_Square_massacre',
  'dustin-heard': 'Nisour_Square_massacre',
  'james-sherwin': 'GAF_Corporation',
  'jackie-johnson': null,  // Skip — no useful Wikipedia article
  'james-holmes': 'James_Holmes_(mass_murderer)',
  'andrew-badolato': null,
  'timothy-shea': null,
  'cathy-latham': null,
};

// Slugs where ALL automated search sources will return wrong person
// (names too common across multiple databases)
const FULL_SKIP_BLACKLIST = new Set([
  'david-brown-goldman',  // "David Brown" — impossibly common name
  'david-brown',          // Same orphaned duplicate
  'david-solomon-sam',    // "David Solomon" matches Goldman Sachs CEO (different person)
  'david-solomon',        // Same orphaned duplicate
  'jackie-johnson',       // Very common name, every source returns wrong person
]);

// Slugs where Commons/OpenVerse text search finds wrong person
// but Wikipedia article images or Wikidata might still work
const COMMONS_SEARCH_BLACKLIST = new Set([
  'david-solomon-sam',    // Matches Goldman Sachs CEO David Solomon (different person)
  'david-solomon',        // Same
  'salim-b-lewis',        // "Lewis head" too generic
  'jack-rabinowitz',      // "Rabinowitz general" too generic
  'paul-berkman',         // "Berkman general" too generic
  'jackie-johnson',       // Common name, wrong matches
  'lisa-ann-jones',       // "Jones drexel" too generic
  'dustin-heard',         // "Heard guard" matches Amber Heard results
  'evan-liberty',         // "Liberty guard" too generic
  'cathy-latham',         // "Latham former" too generic
  'james-sutton-regan',   // "Regan managing" too generic
]);

// Wikidata entity IDs known to be wrong person
const WIKIDATA_BLACKLIST = new Set([
  'Q449466',    // David Brown — wrong David Brown
  'Q205282',    // William Bryan — wrong William Bryan  
  'Q6132250',   // James Dahl — wrong James Dahl
  'Q105703825', // Fred Joseph — wrong person
  'Q955098',    // James Mitchell — American dancer/actor, NOT the CIA psychologist
  'Q447585',    // Robert Freeman — American politician (1931-2020), NOT the Goldman trader
  'Q106715225', // Lorillard — American farmer/rancher, NOT the tobacco company
  'Q173779',    // Liggett Group — may match wrong entity
]);

// Minimum image file size (bytes) to consider valid
const MIN_IMAGE_SIZE = 5000;

// Rate limit between API calls (ms)
const RATE_LIMIT = 250;

// ════════════════════════════════════════════════════════════
// HTTP HELPERS
// ════════════════════════════════════════════════════════════

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(parsed, { 
      headers: { 'User-Agent': 'ArkHive-ImagePipeline/2.0 (investigative-journalism-platform; contact@arkhive.org)' },
      timeout: 10000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error(`Invalid JSON from ${url}`)); }
      });
    }).on('error', reject).on('timeout', () => reject(new Error('Timeout')));
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(parsed, { 
      headers: { 'User-Agent': 'ArkHive-ImagePipeline/2.0' },
      timeout: 30000,
    }, (res) => {
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
    }).on('error', reject).on('timeout', () => reject(new Error('Download timeout')));
  });
}

const delay = ms => new Promise(r => setTimeout(r, ms));

// ════════════════════════════════════════════════════════════
// SOURCE 1: Wikipedia Page Image (freely licensed main image)
// ════════════════════════════════════════════════════════════

async function checkWikipediaPageImage(articleTitle) {
  if (!articleTitle) return null;
  try {
    const url = `${WIKIPEDIA_API}?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&pithumbsize=800&format=json`;
    const data = await fetchJSON(url);
    const pages = data?.query?.pages;
    if (!pages) return null;
    for (const page of Object.values(pages)) {
      if (page.thumbnail?.source) return { url: page.thumbnail.source, source: 'Wikipedia' };
    }
    return null;
  } catch { return null; }
}

// ════════════════════════════════════════════════════════════
// SOURCE 2: Wikidata P18 via article title
// ════════════════════════════════════════════════════════════

async function checkWikidataViaArticle(articleTitle) {
  if (!articleTitle) return null;
  try {
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
    return await getWikidataP18Image(entityId);
  } catch { return null; }
}

async function getWikidataP18Image(entityId) {
  try {
    const wdUrl = `${WIKIDATA_API}?action=wbgetentities&ids=${entityId}&props=claims&format=json`;
    const wdData = await fetchJSON(wdUrl);
    const claims = wdData?.entities?.[entityId]?.claims;
    
    // Check P18 (image) and P154 (logo for organizations)
    const imageProps = ['P18', 'P154'];
    for (const prop of imageProps) {
      if (!claims?.[prop]?.[0]) continue;
      const filename = claims[prop][0].mainsnak?.datavalue?.value;
      if (!filename) continue;
      const thumbUrl = await getCommonsThumbUrl(filename);
      if (thumbUrl) return { url: thumbUrl, source: `Wikidata ${prop}` };
    }
    return null;
  } catch { return null; }
}

async function getCommonsThumbUrl(filename) {
  try {
    const url = `${COMMONS_API}?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800&format=json`;
    const data = await fetchJSON(url);
    const pages = data?.query?.pages;
    if (!pages) return null;
    for (const page of Object.values(pages)) {
      // Check if the image is freely licensed
      const meta = page.imageinfo?.[0]?.extmetadata;
      const license = meta?.LicenseShortName?.value || '';
      // Accept CC, PD, or government work licenses
      if (license && !isFreelyLicensed(license)) continue;
      return page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url || null;
    }
    return null;
  } catch { return null; }
}

function isFreelyLicensed(license) {
  const lower = license.toLowerCase();
  return lower.includes('cc') || lower.includes('public domain') || lower.includes('pd') ||
         lower.includes('gfdl') || lower.includes('government') || lower.includes('free') ||
         lower.includes('copyrighted free use') || lower.includes('attribution');
}

// ════════════════════════════════════════════════════════════
// SOURCE 3: Wikidata search by label → P18
// ════════════════════════════════════════════════════════════

async function checkWikidataLabelSearch(personName, defContext) {
  try {
    const url = `${WIKIDATA_API}?action=wbsearchentities&search=${encodeURIComponent(personName)}&language=en&type=item&limit=5&format=json`;
    const data = await fetchJSON(url);
    if (!data?.search?.length) return null;
    
    // Build context terms from defendant info for disambiguation
    const contextLower = [
      defContext?.role || '',
      defContext?.investigation || '',
    ].join(' ').toLowerCase();
    
    for (const result of data.search) {
      // Skip known wrong entities
      if (WIKIDATA_BLACKLIST.has(result.id)) continue;
      
      const desc = (result.description || '').toLowerCase();
      const label = (result.label || '').toLowerCase();
      
      // Require the label to closely match our person's name
      const nameParts = personName.toLowerCase().split(/\s+/);
      const lastNameMatch = nameParts.some(p => p.length > 2 && label.includes(p));
      if (!lastNameMatch) continue;
      
      // Check description for relevance — prefer matches that overlap with our context
      const descRelevant = desc.includes('person') || desc.includes('businessman') || desc.includes('financier') ||
          desc.includes('trader') || desc.includes('criminal') || desc.includes('convicted') ||
          desc.includes('banker') || desc.includes('investor') || desc.includes('attorney') ||
          desc.includes('lawyer') || desc.includes('officer') || desc.includes('police') ||
          desc.includes('american') || desc.includes('fugitive') || desc.includes('ceo') ||
          desc.includes('executive') || desc.includes('company') || desc.includes('corporation') ||
          desc.includes('organization') || desc.includes('firm') || desc.includes('murderer');
      
      if (!descRelevant) continue;
      
      const img = await getWikidataP18Image(result.id);
      if (img) return { ...img, source: `Wikidata label search (${result.id}: ${desc.substring(0, 50)})` };
    }
    return null;
  } catch { return null; }
}

// ════════════════════════════════════════════════════════════
// SOURCE 4: All images on Wikipedia article → check licensing
// ════════════════════════════════════════════════════════════

async function checkWikipediaAllImages(articleTitle) {
  if (!articleTitle) return null;
  try {
    // Get all images embedded in the article
    const url = `${WIKIPEDIA_API}?action=query&titles=${encodeURIComponent(articleTitle)}&prop=images&imlimit=50&format=json`;
    const data = await fetchJSON(url);
    const pages = data?.query?.pages;
    if (!pages) return null;

    for (const page of Object.values(pages)) {
      const images = page.images || [];
      for (const img of images) {
        const title = img.title;
        // Skip non-image files
        if (!title || !/\.(jpg|jpeg|png|webp|gif)$/i.test(title)) continue;
        // Skip common icons, logos, flags, etc. that aren't portraits
        if (/flag|icon|logo|seal|coat.of.arms|map|commons-logo|wikidata|edit-clear|question/i.test(title)) continue;
        
        // Check if this image is freely licensed on Commons
        const commonsUrl = `${COMMONS_API}?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800&format=json`;
        const commonsData = await fetchJSON(commonsUrl);
        const commonsPages = commonsData?.query?.pages;
        if (!commonsPages) continue;

        for (const cp of Object.values(commonsPages)) {
          if (cp.missing !== undefined) continue; // Not on Commons
          const meta = cp.imageinfo?.[0]?.extmetadata;
          const license = meta?.LicenseShortName?.value || '';
          if (isFreelyLicensed(license)) {
            const thumbUrl = cp.imageinfo?.[0]?.thumburl || cp.imageinfo?.[0]?.url;
            if (thumbUrl) return { url: thumbUrl, source: `Wikipedia article image (${license})` };
          }
        }
        await delay(100); // Rate limit Commons checks
      }
    }
    return null;
  } catch { return null; }
}

// ════════════════════════════════════════════════════════════
// SOURCE 5: Wikimedia Commons multi-strategy search
// ════════════════════════════════════════════════════════════

async function checkCommonsSearch(personName, slug, contextTerms = []) {
  // Skip slugs known to produce false positives in Commons search
  if (COMMONS_SEARCH_BLACKLIST.has(slug)) return null;
  
  const searchQueries = [
    `"${personName}"`,
    `"${personName}" portrait`,
    `"${personName}" photo`,
    `"${personName}" mugshot`,
  ];

  // Only add context-based searches for uncommon last names (>5 chars)
  const lastName = personName.split(' ').pop();
  if (lastName.length > 5) {
    searchQueries.push(...contextTerms.slice(0, 2).map(t => `"${personName}" ${t}`));
  }

  for (const query of searchQueries) {
    try {
      const url = `${COMMONS_API}?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=10&format=json`;
      const data = await fetchJSON(url);
      const results = data?.query?.search;
      if (!results?.length) continue;

      const lastNameLower = lastName.toLowerCase();
      const firstNameLower = personName.split(' ')[0].toLowerCase();
      
      for (const result of results) {
        const title = result.title;
        // Must be an image file
        if (!/\.(jpg|jpeg|png|webp)$/i.test(title)) continue;
        const titleLower = title.toLowerCase();
        // Require BOTH first and last name in the file title (stronger verification)
        // OR full name as a quoted phrase match
        const hasFullName = titleLower.includes(firstNameLower) && titleLower.includes(lastNameLower);
        const hasExactName = titleLower.includes(personName.toLowerCase().replace(/\s+/g, '_')) ||
                             titleLower.includes(personName.toLowerCase().replace(/\s+/g, ' '));
        if (!hasFullName && !hasExactName) continue;
        
        // Verify it's freely licensed and get URL
        const imgUrl = `${COMMONS_API}?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800&format=json`;
        const imgData = await fetchJSON(imgUrl);
        const pages = imgData?.query?.pages;
        if (!pages) continue;

        for (const page of Object.values(pages)) {
          const meta = page.imageinfo?.[0]?.extmetadata;
          const license = meta?.LicenseShortName?.value || '';
          if (isFreelyLicensed(license)) {
            const thumbUrl = page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url;
            if (thumbUrl) return { url: thumbUrl, source: `Commons search ("${query}")` };
          }
        }
      }
      await delay(100);
    } catch { continue; }
  }
  return null;
}

// ════════════════════════════════════════════════════════════
// SOURCE 6: OpenVerse (Creative Commons image search)
// ════════════════════════════════════════════════════════════

async function checkOpenVerse(personName, contextTerms = []) {
  const queries = [
    `"${personName}"`,  // Exact phrase match
  ];

  for (const query of queries) {
    try {
      const url = `${OPENVERSE_API}?q=${encodeURIComponent(query)}&license_type=commercial&page_size=5`;
      const data = await fetchJSON(url);
      if (!data?.results?.length) continue;
      
      const firstNameLower = personName.split(' ')[0].toLowerCase();
      const lastNameLower = personName.split(' ').pop().toLowerCase();
      const fullNameLower = personName.toLowerCase();
      
      for (const result of data.results) {
        // Verify the result is relevant — require BOTH first and last name in title/tags
        const titleLower = (result.title || '').toLowerCase();
        const tagsStr = (result.tags || []).map(t => t.name).join(' ').toLowerCase();
        const combined = titleLower + ' ' + tagsStr;
        
        const hasBothNames = combined.includes(firstNameLower) && combined.includes(lastNameLower);
        const hasFullName = combined.includes(fullNameLower);
        
        if (!hasBothNames && !hasFullName) continue;
        
        // Skip tiny images
        if (result.width < 200 || result.height < 200) continue;
        const imgUrl = result.url || result.thumbnail;
        if (imgUrl) return { url: imgUrl, source: `OpenVerse (${result.source || 'unknown'})` };
      }
      await delay(500); // OpenVerse rate limit is stricter
    } catch { continue; }
  }
  return null;
}

// ════════════════════════════════════════════════════════════
// DEFENDANT DATA LOADER
// ════════════════════════════════════════════════════════════

function loadDefendantContext() {
  // Parse the central investigationDefendants.ts file
  const context = {};
  try {
    const defFile = path.join(DATA_DIR, 'investigationDefendants.ts');
    const content = fs.readFileSync(defFile, 'utf-8');
    
    // Split by investigation key (e.g., '1mdb-scandal':)
    const invSections = content.split(/\n\s*'([^']+)':\s*\[/);
    
    for (let i = 1; i < invSections.length; i += 2) {
      const investigation = invSections[i]; // e.g. '1mdb-scandal'
      const section = invSections[i + 1] || '';
      
      // Find each defendant block within this investigation section
      const defBlocks = section.split(/\{\s*name:/);
      for (let j = 1; j < defBlocks.length; j++) {
        const block = defBlocks[j];
        const name = block.match(/^\s*'([^']+)'/)?.[1];
        const imageUrl = block.match(/imageUrl:\s*'([^']+)'/)?.[1] || '';
        const role = block.match(/role:\s*'([^']+)'/)?.[1] || '';
        const status = block.match(/status:\s*'([^']+)'/)?.[1] || '';
        
        if (!name || !imageUrl) continue;
        
        // Extract slug from imageUrl: '/defendants/some-slug.svg' or '.jpg'
        const slugMatch = imageUrl.match(/\/defendants\/([^.]+)\./);
        const slug = slugMatch?.[1];
        
        if (slug) {
          context[slug] = { name, role, status, investigation };
        }
      }
    }
  } catch (e) {
    console.warn('  ⚠ Could not load defendant context:', e.message);
  }
  return context;
}

// ════════════════════════════════════════════════════════════
// HIGH-QUALITY SVG GENERATION
// ════════════════════════════════════════════════════════════

function getInvestigationTheme(investigation) {
  const themes = {
    'insider trading': { accent: '#ff4444', bg2: '#1a0808', icon: 'chart', label: 'FINANCIAL CRIME' },
    'insider-trading': { accent: '#ff4444', bg2: '#1a0808', icon: 'chart', label: 'FINANCIAL CRIME' },
    '1mdb': { accent: '#ff6b35', bg2: '#1a0d05', icon: 'globe', label: 'INTERNATIONAL FRAUD' },
    'election': { accent: '#8b5cf6', bg2: '#0d0818', icon: 'vote', label: 'ELECTION CRIME' },
    'blackwater': { accent: '#ef4444', bg2: '#1a0505', icon: 'shield', label: 'WAR CRIME' },
    'murder': { accent: '#dc2626', bg2: '#1a0000', icon: 'alert', label: 'MURDER' },
    'arbery': { accent: '#dc2626', bg2: '#1a0000', icon: 'alert', label: 'HATE CRIME' },
    'police': { accent: '#3b82f6', bg2: '#050d1a', icon: 'badge', label: 'POLICE BRUTALITY' },
    'brutality': { accent: '#3b82f6', bg2: '#050d1a', icon: 'badge', label: 'POLICE BRUTALITY' },
    'hush': { accent: '#eab308', bg2: '#1a1505', icon: 'money', label: 'CAMPAIGN FINANCE' },
    'trump': { accent: '#eab308', bg2: '#1a1505', icon: 'money', label: 'FINANCIAL FRAUD' },
    'crypto': { accent: '#06b6d4', bg2: '#051518', icon: 'crypto', label: 'CRYPTO FRAUD' },
    'ftx': { accent: '#06b6d4', bg2: '#051518', icon: 'crypto', label: 'CRYPTO FRAUD' },
    'tobacco': { accent: '#84cc16', bg2: '#0d1505', icon: 'skull', label: 'PUBLIC HEALTH' },
    'cambridge': { accent: '#a855f7', bg2: '#0d0518', icon: 'eye', label: 'DATA EXPLOITATION' },
    'wall': { accent: '#f59e0b', bg2: '#1a1305', icon: 'wall', label: 'FRAUD' },
    'enron': { accent: '#f97316', bg2: '#1a0d05', icon: 'chart', label: 'CORPORATE FRAUD' },
    'torture': { accent: '#ef4444', bg2: '#1a0505', icon: 'alert', label: 'TORTURE' },
    'climate': { accent: '#22c55e', bg2: '#051a08', icon: 'globe', label: 'CLIMATE DENIAL' },
    'church': { accent: '#a855f7', bg2: '#0d0518', icon: 'alert', label: 'INSTITUTIONAL ABUSE' },
    'catholic': { accent: '#a855f7', bg2: '#0d0518', icon: 'alert', label: 'INSTITUTIONAL ABUSE' },
    'bhopal': { accent: '#ef4444', bg2: '#1a0505', icon: 'skull', label: 'INDUSTRIAL DISASTER' },
    'libor': { accent: '#f59e0b', bg2: '#1a1305', icon: 'chart', label: 'MARKET MANIPULATION' },
    'russian': { accent: '#ef4444', bg2: '#1a0505', icon: 'globe', label: 'FOREIGN INTERFERENCE' },
    'bailout': { accent: '#eab308', bg2: '#1a1505', icon: 'money', label: 'FINANCIAL CRISIS' },
    'aurora': { accent: '#dc2626', bg2: '#1a0000', icon: 'alert', label: 'MASS SHOOTING' },
    'default': { accent: '#ff4444', bg2: '#1a0808', icon: 'person', label: 'UNDER INVESTIGATION' },
  };
  
  if (!investigation) return themes.default;
  const lower = investigation.toLowerCase();
  for (const [key, theme] of Object.entries(themes)) {
    if (key !== 'default' && lower.includes(key)) return theme;
  }
  return themes.default;
}

function getStatusConfig(status) {
  const configs = {
    'convicted': { color: '#ef4444', label: 'CONVICTED', symbol: '■' },
    'guilty-plea': { color: '#ef4444', label: 'GUILTY PLEA', symbol: '■' },
    'sentenced': { color: '#ef4444', label: 'SENTENCED', symbol: '■' },
    'settled': { color: '#f59e0b', label: 'SETTLED', symbol: '◆' },
    'plea-deal': { color: '#f59e0b', label: 'PLEA DEAL', symbol: '◆' },
    'cooperating': { color: '#3b82f6', label: 'COOPERATING', symbol: '●' },
    'acquitted': { color: '#22c55e', label: 'ACQUITTED', symbol: '○' },
    'released': { color: '#a855f7', label: 'RELEASED', symbol: '△' },
    'fugitive': { color: '#dc2626', label: 'FUGITIVE', symbol: '▲' },
    'pardoned': { color: '#eab308', label: 'PARDONED', symbol: '★' },
    'deceased': { color: '#6b7280', label: 'DECEASED', symbol: '†' },
    'indicted': { color: '#f97316', label: 'INDICTED', symbol: '◇' },
    'pending': { color: '#f97316', label: 'PENDING', symbol: '◇' },
    'default': { color: '#71717a', label: 'SUBJECT', symbol: '—' },
  };
  if (!status) return configs.default;
  return configs[status] || configs.default;
}

function generateIconPath(iconType) {
  switch (iconType) {
    case 'chart':
      return `<path d="M140 240 L140 180 L170 180 L170 240 M185 240 L185 160 L215 160 L215 240 M230 240 L230 140 L260 140 L260 240" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>`;
    case 'globe':
      return `<circle cx="200" cy="190" r="50" fill="none" stroke="{{ACCENT}}" stroke-width="1.5" opacity="0.1"/>
      <ellipse cx="200" cy="190" rx="25" ry="50" fill="none" stroke="{{ACCENT}}" stroke-width="1" opacity="0.08"/>
      <line x1="150" y1="190" x2="250" y2="190" stroke="{{ACCENT}}" stroke-width="1" opacity="0.08"/>`;
    case 'shield':
      return `<path d="M200 135 L240 155 L240 195 C240 220 220 240 200 250 C180 240 160 220 160 195 L160 155 Z" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>`;
    case 'alert':
      return `<path d="M200 140 L245 235 L155 235 Z" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <line x1="200" y1="175" x2="200" y2="210" stroke="{{ACCENT}}" stroke-width="2.5" opacity="0.12"/>
      <circle cx="200" cy="222" r="3" fill="{{ACCENT}}" opacity="0.12"/>`;
    case 'badge':
      return `<circle cx="200" cy="185" r="40" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <polygon points="200,140 206,165 230,165 210,180 218,205 200,190 182,205 190,180 170,165 194,165" fill="none" stroke="{{ACCENT}}" stroke-width="1" opacity="0.08"/>`;
    case 'money':
      return `<text x="200" y="200" font-family="serif" font-size="80" fill="{{ACCENT}}" opacity="0.08" text-anchor="middle" dominant-baseline="central">$</text>`;
    case 'crypto':
      return `<circle cx="200" cy="185" r="45" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <text x="200" y="195" font-family="monospace" font-size="40" fill="{{ACCENT}}" opacity="0.1" text-anchor="middle" dominant-baseline="central">BTC</text>`;
    case 'skull':
      return `<circle cx="200" cy="175" r="35" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <path d="M175 220 L225 220 L225 235 L175 235 Z" fill="none" stroke="{{ACCENT}}" stroke-width="1.5" opacity="0.1"/>`;
    case 'eye':
      return `<ellipse cx="200" cy="190" rx="55" ry="30" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <circle cx="200" cy="190" r="15" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>`;
    case 'vote':
      return `<rect x="170" y="150" width="60" height="80" rx="0" fill="none" stroke="{{ACCENT}}" stroke-width="2" opacity="0.12"/>
      <path d="M185 190 L195 200 L215 175" fill="none" stroke="{{ACCENT}}" stroke-width="3" opacity="0.12"/>`;
    default: // person
      return `<circle cx="200" cy="155" r="35" fill="none" stroke="{{ACCENT}}" stroke-width="1.5" opacity="0.15"/>
      <path d="M200 195 C165 195 140 215 135 245 L265 245 C260 215 235 195 200 195Z" fill="none" stroke="{{ACCENT}}" stroke-width="1.5" opacity="0.15"/>`;
  }
}

function generateEnhancedSVG(slug, name, role, status, investigation) {
  const theme = getInvestigationTheme(investigation);
  const statusCfg = getStatusConfig(status);
  const initials = name.split(/[\s-]+/).filter(w => w.length > 0).map(w => w[0].toUpperCase()).slice(0, 2).join('');
  const accent = theme.accent;
  const bg2 = theme.bg2;
  
  // Generate a unique angle for the gradient based on the name (for variety)
  const nameHash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const gradAngle = (nameHash % 4) * 0.25;
  
  // Unique scan line position
  const scanY = 50 + (nameHash % 300);
  
  const iconSvg = generateIconPath(theme.icon).replace(/\{\{ACCENT\}\}/g, accent);
  
  // Truncate role to fit
  const displayRole = role.length > 42 ? role.substring(0, 39) + '...' : role;
  const roleFontSize = displayRole.length > 35 ? 8 : displayRole.length > 25 ? 9 : 10;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${gradAngle}" y2="1">
      <stop offset="0%" stop-color="${bg2}"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="${accent}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.08"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="400" fill="url(#bg)"/>
  <rect width="400" height="180" fill="url(#glow)"/>
  <rect y="300" width="400" height="100" fill="url(#bottomFade)"/>
  
  <!-- Grid -->
  <g opacity="0.035" stroke="${accent}" stroke-width="0.5">
    ${Array.from({length: 21}, (_, i) => `<line x1="${i*20}" y1="0" x2="${i*20}" y2="400"/>`).join('')}
    ${Array.from({length: 21}, (_, i) => `<line x1="0" y1="${i*20}" x2="400" y2="${i*20}"/>`).join('')}
  </g>
  
  <!-- Scan line -->
  <rect x="0" y="${scanY}" width="400" height="1" fill="${accent}" opacity="0.06"/>
  
  <!-- Top accent bar -->
  <rect x="0" y="0" width="400" height="2" fill="${accent}" opacity="0.5"/>
  
  <!-- Investigation theme icon (background) -->
  ${iconSvg}
  
  <!-- Large initials -->
  <text x="200" y="195" font-family="'Courier New',monospace" font-size="110" font-weight="900" fill="${accent}" opacity="0.08" text-anchor="middle" dominant-baseline="central" letter-spacing="12">${initials}</text>
  
  <!-- Person silhouette -->
  <circle cx="200" cy="150" r="40" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.25"/>
  <path d="M200 195 C165 195 138 213 133 245 L267 245 C262 213 235 195 200 195Z" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.25"/>
  
  <!-- Status indicator -->
  <rect x="15" y="15" width="${(statusCfg.label.length * 8) + 24}" height="22" fill="${statusCfg.color}" opacity="0.15"/>
  <rect x="15" y="15" width="3" height="22" fill="${statusCfg.color}" opacity="0.6"/>
  <text x="28" y="30" font-family="'Courier New',monospace" font-size="10" font-weight="700" fill="${statusCfg.color}" opacity="0.8" letter-spacing="1.5">${statusCfg.label}</text>
  
  <!-- Name -->
  <text x="200" y="295" font-family="'Helvetica Neue',Arial,sans-serif" font-size="15" font-weight="700" fill="${accent}" opacity="0.75" text-anchor="middle" letter-spacing="2">${name.toUpperCase()}</text>
  
  <!-- Role -->
  <text x="200" y="318" font-family="'Helvetica Neue',Arial,sans-serif" font-size="${roleFontSize}" fill="${accent}" opacity="0.35" text-anchor="middle" letter-spacing="0.5">${displayRole}</text>
  
  <!-- Investigation label -->
  <text x="200" y="345" font-family="'Courier New',monospace" font-size="8" fill="${accent}" opacity="0.3" text-anchor="middle" letter-spacing="3">${theme.label}</text>
  
  <!-- Corner brackets -->
  <polyline points="0,20 0,0 20,0" fill="none" stroke="${accent}" stroke-width="1" opacity="0.2"/>
  <polyline points="380,0 400,0 400,20" fill="none" stroke="${accent}" stroke-width="1" opacity="0.2"/>
  <polyline points="0,380 0,400 20,400" fill="none" stroke="${accent}" stroke-width="1" opacity="0.2"/>
  <polyline points="380,400 400,400 400,380" fill="none" stroke="${accent}" stroke-width="1" opacity="0.2"/>
  
  <!-- Bottom accent bar -->
  <rect x="0" y="398" width="400" height="2" fill="${accent}" opacity="0.25"/>
  
  <!-- Diagonal corner cuts -->
  <line x1="0" y1="12" x2="12" y2="0" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
  <line x1="388" y1="0" x2="400" y2="12" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
  <line x1="0" y1="388" x2="12" y2="400" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
  <line x1="388" y1="400" x2="400" y2="388" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
</svg>`;
}

// ════════════════════════════════════════════════════════════
// MAIN PIPELINE
// ════════════════════════════════════════════════════════════

async function fetchImageForPerson(slug, personName, contextTerms, dryRun, svgOnly, defInfo) {
  const jpgPath = path.join(DEFENDANTS_DIR, `${slug}.jpg`);
  const pngPath = path.join(DEFENDANTS_DIR, `${slug}.png`);
  
  // Skip if already has a real image
  if (fs.existsSync(jpgPath) && fs.statSync(jpgPath).size > MIN_IMAGE_SIZE) {
    return { slug, status: 'skip', reason: 'Has JPG already' };
  }
  if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > MIN_IMAGE_SIZE) {
    return { slug, status: 'skip', reason: 'Has PNG already' };
  }

  // Full skip for names that are too common for any automated search
  const forceSkipImage = FULL_SKIP_BLACKLIST.has(slug);

  if (!svgOnly && !forceSkipImage) {
    const wikiTitle = WIKIPEDIA_OVERRIDES[slug] !== undefined ? WIKIPEDIA_OVERRIDES[slug] : personName.replace(/\s+/g, '_');
    
    console.log(`  🔍 [${slug}] Searching...`);
    
    // Source 1: Wikipedia page image
    let result = await checkWikipediaPageImage(wikiTitle);
    if (result) { console.log(`     ✓ Found via ${result.source}`); }
    
    // Source 2: Wikidata via article
    if (!result) {
      await delay(RATE_LIMIT);
      result = await checkWikidataViaArticle(wikiTitle);
      if (result) console.log(`     ✓ Found via ${result.source}`);
    }
    
    // Source 3: Wikidata label search
    if (!result) {
      await delay(RATE_LIMIT);
      result = await checkWikidataLabelSearch(personName, defInfo);
      if (result) console.log(`     ✓ Found via ${result.source}`);
    }
    
    // Source 4: All Wikipedia article images
    if (!result && wikiTitle) {
      await delay(RATE_LIMIT);
      result = await checkWikipediaAllImages(wikiTitle);
      if (result) console.log(`     ✓ Found via ${result.source}`);
    }
    
    // Source 5: Commons multi-strategy search
    if (!result) {
      await delay(RATE_LIMIT);
      result = await checkCommonsSearch(personName, slug, contextTerms);
      if (result) console.log(`     ✓ Found via ${result.source}`);
    }
    
    // Source 6: OpenVerse
    if (!result) {
      await delay(RATE_LIMIT);
      result = await checkOpenVerse(personName, contextTerms);
      if (result) console.log(`     ✓ Found via ${result.source}`);
    }
    
    if (result) {
      if (dryRun) {
        return { slug, status: 'would-download', source: result.source, url: result.url };
      }
      
      // Download
      try {
        const ext = result.url.match(/\.(jpg|jpeg|png|webp)/i)?.[1]?.toLowerCase() || 'jpg';
        const destPath = path.join(DEFENDANTS_DIR, `${slug}.${ext === 'jpeg' ? 'jpg' : ext}`);
        await downloadFile(result.url, destPath);
        const size = fs.statSync(destPath).size;
        if (size < MIN_IMAGE_SIZE) {
          fs.unlinkSync(destPath);
          console.log(`     ✗ Downloaded but too small (${size}B), discarded`);
        } else {
          return { slug, status: 'downloaded', source: result.source, size: `${(size / 1024).toFixed(1)}KB` };
        }
      } catch (err) {
        console.log(`     ✗ Download failed: ${err.message}`);
      }
    } else {
      console.log(`     ✗ No image found across all sources`);
    }
  }
  
  // Generate enhanced SVG placeholder
  const investigation = defInfo?.investigation || '';
  const role = defInfo?.role || '';
  const defStatus = defInfo?.status || '';
  
  const svgPath = path.join(DEFENDANTS_DIR, `${slug}.svg`);
  const svg = generateEnhancedSVG(slug, personName, role, defStatus, investigation);
  
  if (!dryRun) {
    fs.writeFileSync(svgPath, svg, 'utf-8');
    return { slug, status: 'svg-upgraded', investigation, role: role.substring(0, 40) };
  } else {
    return { slug, status: 'would-upgrade-svg', investigation, role: role.substring(0, 40) };
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

function getContextTerms(defInfo) {
  const terms = [];
  if (defInfo?.role) {
    // Extract meaningful words from role
    const words = defInfo.role.toLowerCase().split(/[\s,;]+/);
    const meaningful = words.filter(w => 
      w.length > 3 && !['the', 'and', 'for', 'was', 'who', 'that', 'with', 'from'].includes(w)
    );
    terms.push(...meaningful.slice(0, 3));
  }
  if (defInfo?.investigation) {
    terms.push(defInfo.investigation.replace(/[-_]/g, ' '));
  }
  return terms;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const svgOnly = args.includes('--svg-only');
  const nameFlag = args.indexOf('--name');
  const singleName = nameFlag !== -1 ? args[nameFlag + 1] : null;

  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  ArkHive Enhanced Image Pipeline v2                     ║');
  console.log('║  Sources: Wikipedia → Wikidata → Commons → OpenVerse   ║');
  console.log(`║  Mode: ${(svgOnly ? 'SVG ONLY' : dryRun ? 'DRY RUN' : 'LIVE').padEnd(49)}║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  // Load defendant context for better searches and SVG generation
  console.log('Loading defendant data from investigation files...');
  const defContext = loadDefendantContext();
  console.log(`  Found context for ${Object.keys(defContext).length} defendants\n`);

  let targets;
  if (singleName) {
    const slug = singleName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    targets = [{ slug, name: singleName }];
  } else {
    targets = getAllSVGOnlyDefendants();
  }

  console.log(`Found ${targets.length} individuals with SVG-only placeholders.\n`);

  const results = { downloaded: [], svgUpgraded: [], notFound: [], skipped: [], errors: [] };

  for (const target of targets) {
    // Use defendant context for better name and search terms
    const defInfo = defContext[target.slug];
    const personName = defInfo?.name || target.name;
    const contextTerms = getContextTerms(defInfo);
    
    try {
      const result = await fetchImageForPerson(target.slug, personName, contextTerms, dryRun, svgOnly, defInfo);
      
      if (result.status === 'downloaded' || result.status === 'would-download') {
        results.downloaded.push(result);
        console.log(`  ✅ ${result.slug} — ${result.source}`);
      } else if (result.status === 'svg-upgraded' || result.status === 'would-upgrade-svg') {
        results.svgUpgraded.push(result);
        console.log(`  🎨 ${result.slug} — SVG upgraded (${result.investigation || 'unknown'})`);
      } else if (result.status === 'not-found') {
        results.notFound.push(result);
      } else if (result.status === 'skip') {
        results.skipped.push(result);
      } else {
        results.errors.push(result);
        console.log(`  ❌ ${result.slug} — ${result.reason}`);
      }
    } catch (err) {
      results.errors.push({ slug: target.slug, status: 'error', reason: err.message });
      console.log(`  ❌ ${target.slug} — Error: ${err.message}`);
    }
    
    await delay(RATE_LIMIT);
  }

  console.log('\n══════════════════════════════════════════════════════════');
  console.log(`  Images Found:    ${results.downloaded.length}`);
  console.log(`  SVGs Upgraded:   ${results.svgUpgraded.length}`);
  console.log(`  Already Had JPG: ${results.skipped.length}`);
  console.log(`  Errors:          ${results.errors.length}`);
  console.log('══════════════════════════════════════════════════════════');

  if (results.downloaded.length > 0) {
    console.log('\n📸 Images found:');
    results.downloaded.forEach(r => console.log(`   ✅ ${r.slug} — ${r.source} ${r.size || ''}`));
  }
}

main().catch(console.error);
