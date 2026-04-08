/**
 * v2: Fetch defendant images using Wikidata structured data (P18/P154) + Wikipedia pageimages.
 * Three-pronged approach:
 *   1. Wikipedia pageimages API (main article thumbnail)
 *   2. Wikidata: P18 (image) for individuals, P154 (logo) for orgs
 *   3. Wikipedia article images list (fallback)
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'defendants');
const UA = 'ArkHiveBot/1.0 (educational project; contact: arkhive@example.com)';

// Defendant → [Wikipedia titles to try]
const defendants = {
  // === INDIVIDUALS ===
  'Jho Low': ['Jho Low', 'Low Taek Jho'],
  'Tim Leissner': ['Tim Leissner'],
  'Roger Ng': ['Roger Ng (banker)'],
  'Kareem Serageldin': ['Kareem Serageldin'],
  'Sidney Powell': ['Sidney Powell'],
  'Kenneth Chesebro': ['Kenneth Chesebro'],
  'Jeffrey Clark': ['Jeffrey Clark (attorney)', 'Jeffrey Bossert Clark'],
  'Nicholas Slatten': ['Nisour Square massacre'],
  'Paul Slough': ['Nisour Square massacre'],
  'Evan Liberty': ['Nisour Square massacre'],
  'Dustin Heard': ['Nisour Square massacre'],
  'Mark Forkner': ['Boeing 737 MAX groundings'],
  'Warren Anderson': ['Warren Anderson (American businessman)', 'Warren Anderson Union Carbide'],
  'Cardinal Theodore McCarrick': ['Theodore McCarrick'],
  'Allen Weisselberg': ['Allen Weisselberg'],
  'David Pecker': ['David Pecker'],
  'James Mitchell': ['James Elmer Mitchell', 'James Mitchell (psychologist)'],
  'Jose Rodriguez': ['Jose A. Rodriguez Jr.', 'Jose Rodriguez (Central Intelligence Agency)'],
  'Andrew Fastow': ['Andrew Fastow'],
  'Elizabeth Lederer': ['Central Park jogger case'],
  'Carrie Tolstedt': ['Wells Fargo account fraud scandal'],
  'Payton Gendron': ['2022 Buffalo shooting'],
  'Dylann Roof': ['Dylann Roof', 'Charleston church shooting'],
  'Travis McMichael': ['Murder of Ahmaud Arbery'],
  'Gregory McMichael': ['Murder of Ahmaud Arbery'],
  'William Bryan': ['Murder of Ahmaud Arbery'],
  'Jackie Johnson': ['Murder of Ahmaud Arbery'],
  'Brian Kolfage': ['Brian Kolfage', 'We Build the Wall'],
  'Andrew Badolato': ['We Build the Wall'],
  'Timothy Shea': ['We Build the Wall'],
  'Misty Hampton': ['Coffee County, Georgia'],
  'Cathy Latham': ['Cathy Latham'],
  'Harlan Crow': ['Harlan Crow'],
  'Jon Burge': ['Jon Burge'],
  'Ivan Boesky': ['Ivan Boesky'],
  'James Holmes': ['2012 Aurora, Colorado shooting', 'James Holmes (mass murderer)'],
  'Caroline Ellison': ['Caroline Ellison'],
  'Gary Wang': ['Gary Wang (businessman)'],
  'Robert Bowers': ['Pittsburgh synagogue shooting'],
  'Ralph Cioffi': ['Bear Stearns'],
  'Matthew Tannin': ['Bear Stearns'],
  'Patrick Crusius': ['2019 El Paso shooting'],
  'Derek Chauvin': ['Derek Chauvin', 'Murder of George Floyd'],
  'Jason Van Dyke': ['Murder of Laquan McDonald', 'Jason Van Dyke'],
  'Daniel Pantaleo': ['Death of Eric Garner'],
  'Tom Hayes': ['Tom Hayes (trader)'],
  'Aleksandr Kogan': ['Aleksandr Kogan'],
  // Combo/special names
  'Bear Stearns / Ralph Cioffi & Matthew Tannin': ['Bear Stearns'],
  'AIG / Joseph Cassano': ['Joseph Cassano', 'American International Group'],
  'Bank of America / Countrywide': ['Countrywide Financial'],
  'Richard Nixon (posthumous)': ['Richard Nixon'],
  'Citizens United (organizational)': ['Citizens United (organization)'],
  // === CORPORATIONS & ORGANIZATIONS ===
  'Goldman Sachs': ['Goldman Sachs'],
  'JPMorgan Chase': ['JPMorgan Chase'],
  'Bank of America': ['Bank of America'],
  'Citigroup': ['Citigroup'],
  'NBCUniversal': ['NBCUniversal'],
  'Boeing Company': ['Boeing'],
  'Philip Morris': ['Philip Morris International', 'Philip Morris USA'],
  'R.J. Reynolds': ['R. J. Reynolds Tobacco Company'],
  'British American Tobacco': ['British American Tobacco'],
  'Lorillard': ['Lorillard (company)'],
  'Liggett Group': ['Liggett Group'],
  'Altria Group': ['Altria'],
  'Union Carbide Corporation': ['Union Carbide'],
  'Dow Chemical': ['Dow Chemical Company', 'Dow (company)'],
  'Trump Organization': ['The Trump Organization'],
  'Fox News': ['Fox News'],
  'ExxonMobil': ['ExxonMobil'],
  'Koch Industries': ['Koch Industries'],
  'Chevron': ['Chevron Corporation'],
  'Shell': ['Shell plc'],
  'Arthur Andersen LLP': ['Arthur Andersen'],
  'Wells Fargo': ['Wells Fargo'],
  'HSBC': ['HSBC'],
  'Deutsche Bank': ['Deutsche Bank'],
  'Credit Suisse': ['Credit Suisse'],
  'Wachovia': ['Wachovia'],
  'Spirit AeroSystems': ['Spirit AeroSystems'],
  'Columbia/HCA Healthcare': ['HCA Healthcare'],
  'Drexel Burnham Lambert': ['Drexel Burnham Lambert'],
  'Bayer AG': ['Bayer'],
  'Morgan Stanley': ['Morgan Stanley'],
  'Purdue Pharma': ['Purdue Pharma'],
  'Barclays': ['Barclays'],
  'UBS': ['UBS'],
  'Rabobank': ['Rabobank'],
  'Cambridge Analytica': ['Cambridge Analytica'],
  'Facebook/Meta': ['Meta Platforms'],
  // === GOVERNMENT / GROUPS ===
  'Internet Research Agency (IRA)': ['Internet Research Agency'],
  'Internet Research Agency': ['Internet Research Agency'],
  'GRU Unit 26165 (12 officers)': ['Fancy Bear', 'GRU'],
  'GRU Officers (12)': ['Fancy Bear', 'GRU'],
  'NYPD Detectives': ['New York City Police Department'],
  'City of New York': ['New York City'],
  'Archdiocese of Los Angeles': ['Archdiocese of Los Angeles'],
  'Diocese of Rockville Centre': ['Roman Catholic Diocese of Rockville Centre'],
  'Shelby County': ['Shelby County, Tennessee'],
  'City of Chicago': ['Chicago'],
  'Reagan Administration': ['Presidency of Ronald Reagan', 'Ronald Reagan'],
  'DEA (institutional)': ['Drug Enforcement Administration'],
  'US Army (institutional)': ['United States Army'],
  'US Public Health Service': ['United States Public Health Service'],
  'Macon County Medical Society': ['Tuskegee Syphilis Study'],
};

function slugify(name) {
  const overrides = {
    'Bear Stearns / Ralph Cioffi & Matthew Tannin': 'bear-stearns',
    'AIG / Joseph Cassano': 'aig-joseph-cassano',
    'Bank of America / Countrywide': 'bank-of-america-countrywide',
    'Richard Nixon (posthumous)': 'richard-nixon',
    'Citizens United (organizational)': 'citizens-united',
    'Internet Research Agency (IRA)': 'internet-research-agency',
    'GRU Unit 26165 (12 officers)': 'gru-unit-26165',
    'GRU Officers (12)': 'gru-officers',
    'DEA (institutional)': 'dea',
    'US Army (institutional)': 'us-army',
    'Columbia/HCA Healthcare': 'columbia-hca-healthcare',
    'Facebook/Meta': 'facebook-meta',
  };
  if (overrides[name]) return overrides[name];
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function httpGet(url) {
  const mod = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    const req = mod.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpGet(res.headers.location).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        if (res.statusCode === 200) {
          const ct = res.headers['content-type'] || '';
          if (ct.includes('json') || ct.includes('text')) {
            resolve({ type: 'text', data: Buffer.concat(chunks).toString('utf-8') });
          } else {
            resolve({ type: 'binary', data: Buffer.concat(chunks) });
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
      });
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function getJSON(url) {
  const r = await httpGet(url);
  return JSON.parse(r.data);
}

async function downloadToFile(url, filepath) {
  const r = await httpGet(url);
  if (r.type === 'binary' && r.data.length > 2000) {
    fs.writeFileSync(filepath, r.data);
    return r.data.length;
  }
  return 0;
}

// Strategy 1: Wikipedia pageimages
async function tryWikipediaPageImage(titles) {
  for (const title of titles) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400&redirects=1`;
      const data = await getJSON(url);
      const pages = data?.query?.pages;
      if (!pages) continue;
      for (const pg of Object.values(pages)) {
        if (pg.thumbnail?.source) return pg.thumbnail.source;
      }
    } catch { /* ignore */ }
    await sleep(300);
  }
  return null;
}

// Strategy 2: Wikidata P18 (image) or P154 (logo image)
async function tryWikidataImage(titles) {
  for (const title of titles) {
    try {
      // First, find the Wikidata entity for this Wikipedia article
      const wpUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageprops&ppprop=wikibase_item&format=json&redirects=1`;
      const wpData = await getJSON(wpUrl);
      const pages = wpData?.query?.pages;
      if (!pages) continue;
      let wikidataId = null;
      for (const pg of Object.values(pages)) {
        if (pg.pageprops?.wikibase_item) {
          wikidataId = pg.pageprops.wikibase_item;
          break;
        }
      }
      if (!wikidataId) continue;

      // Get Wikidata claims for P18 (image) and P154 (logo)
      const wdUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${wikidataId}&property=P18&format=json`;
      const wdData = await getJSON(wdUrl);
      let filename = wdData?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;

      if (!filename) {
        // Try P154 (logo)
        const wdUrl2 = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${wikidataId}&property=P154&format=json`;
        const wdData2 = await getJSON(wdUrl2);
        filename = wdData2?.claims?.P154?.[0]?.mainsnak?.datavalue?.value;
      }

      if (!filename) continue;

      // Get the actual image URL from Commons
      const commonsUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
      const commonsData = await getJSON(commonsUrl);
      const commonsPages = commonsData?.query?.pages;
      if (!commonsPages) continue;
      for (const pg of Object.values(commonsPages)) {
        const ii = pg.imageinfo?.[0];
        if (ii?.thumburl) return ii.thumburl;
        if (ii?.url) return ii.url;
      }
    } catch { /* ignore */ }
    await sleep(300);
  }
  return null;
}

// Strategy 3: Wikipedia article images list - find first non-icon image
async function tryWikipediaArticleImages(titles) {
  for (const title of titles) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=images&imlimit=20&format=json&redirects=1`;
      const data = await getJSON(url);
      const pages = data?.query?.pages;
      if (!pages) continue;
      for (const pg of Object.values(pages)) {
        const images = pg.images || [];
        for (const img of images) {
          const fn = img.title.toLowerCase();
          // Skip icons, logos, flags, maps, commons-logo, etc.
          if (fn.includes('icon') || fn.includes('flag') || fn.includes('map') ||
              fn.includes('commons-logo') || fn.includes('wikiquote') || fn.includes('wikidata') ||
              fn.includes('wikisource') || fn.includes('edit-clear') || fn.includes('question_book') ||
              fn.includes('ambox') || fn.includes('symbol') || fn.endsWith('.svg') ||
              fn.includes('gnome') || fn.includes('padlock') || fn.includes('crystal') ||
              fn.includes('folder') || fn.includes('stub') || fn.includes('portal') ||
              fn.includes('information') || fn.includes('unbalanced') || fn.includes('nuvola') ||
              fn.includes('scales') || fn.includes('p_') || fn.includes('merge') ||
              fn.includes('text-x') || fn.includes('disambig') || fn.includes('redirect') ||
              fn.includes('wiktionary') || fn.includes('wikimedia')) continue;

          // Get this image's URL
          const imgUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(img.title)}&prop=imageinfo&iiprop=url|mime&iiurlwidth=400&format=json`;
          const imgData = await getJSON(imgUrl);
          const imgPages = imgData?.query?.pages;
          if (!imgPages) continue;
          for (const iPg of Object.values(imgPages)) {
            const ii = iPg.imageinfo?.[0];
            if (!ii) continue;
            const mime = ii.mime || '';
            if (mime.includes('svg') || mime.includes('gif')) continue;
            if (ii.thumburl) return ii.thumburl;
            if (ii.url) return ii.url;
          }
          await sleep(200);
        }
      }
    } catch { /* ignore */ }
    await sleep(300);
  }
  return null;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const entries = Object.entries(defendants);
  const results = { success: [], failed: [], skipped: [] };

  console.log(`Processing ${entries.length} defendants...\n`);

  for (let i = 0; i < entries.length; i++) {
    const [name, titles] = entries[i];
    const slug = slugify(name);
    const filepath = path.join(outDir, slug + '.jpg');

    if (fs.existsSync(filepath)) {
      console.log(`[${i + 1}/${entries.length}] SKIP: ${name}`);
      results.skipped.push(name);
      continue;
    }

    console.log(`[${i + 1}/${entries.length}] ${name}`);

    // Strategy 1: Wikipedia pageimages
    let imgUrl = await tryWikipediaPageImage(titles);
    if (imgUrl) {
      try {
        const bytes = await downloadToFile(imgUrl, filepath);
        if (bytes > 0) {
          console.log(`  ✓ Wikipedia pageimage: ${Math.round(bytes / 1024)}KB`);
          results.success.push(name);
          await sleep(1000);
          continue;
        }
      } catch { /* fall through */ }
    }

    // Strategy 2: Wikidata P18/P154
    imgUrl = await tryWikidataImage(titles);
    if (imgUrl) {
      try {
        const bytes = await downloadToFile(imgUrl, filepath);
        if (bytes > 0) {
          console.log(`  ✓ Wikidata: ${Math.round(bytes / 1024)}KB`);
          results.success.push(name);
          await sleep(1000);
          continue;
        }
      } catch { /* fall through */ }
    }

    // Strategy 3: Wikipedia article images
    imgUrl = await tryWikipediaArticleImages(titles);
    if (imgUrl) {
      try {
        const bytes = await downloadToFile(imgUrl, filepath);
        if (bytes > 0) {
          console.log(`  ✓ Article images: ${Math.round(bytes / 1024)}KB`);
          results.success.push(name);
          await sleep(1000);
          continue;
        }
      } catch { /* fall through */ }
    }

    console.log(`  ✗ FAILED: no image found`);
    results.failed.push(name);
    await sleep(1000);
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Success: ${results.success.length}`);
  console.log(`Skipped: ${results.skipped.length}`);
  console.log(`Failed: ${results.failed.length}`);
  if (results.failed.length > 0) {
    console.log('\nFailed:');
    results.failed.forEach(n => console.log(`  - ${n}`));
  }

  fs.writeFileSync(path.join(__dirname, 'image-results.json'), JSON.stringify(results, null, 2));
}

main().catch(console.error);
