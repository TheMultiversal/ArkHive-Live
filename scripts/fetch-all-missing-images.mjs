/**
 * Fetch images for ALL defendants missing imageUrl.
 * Uses Wikipedia pageimages API to get main article images (portraits, logos, HQ photos).
 * Falls back to Wikimedia Commons search if Wikipedia article doesn't have an image.
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'defendants');

// Map each missing defendant name to a Wikipedia article search term
// Key = exact defendant name from investigationDefendants.ts
// Value = Wikipedia article title (or array of fallback titles)
const defendantSearchMap = {
  // === INDIVIDUALS ===
  'Jho Low': ['Jho Low'],
  'Tim Leissner': ['Tim Leissner'],
  'Roger Ng': ['Roger Ng (banker)'],
  'Kareem Serageldin': ['Kareem Serageldin'],
  'Sidney Powell': ['Sidney Powell'],
  'Kenneth Chesebro': ['Kenneth Chesebro'],
  'Jeffrey Clark': ['Jeffrey Clark (attorney)'],
  'Nicholas Slatten': ['Nicholas Slatten'],
  'Paul Slough': ['Nisour Square massacre'],
  'Evan Liberty': ['Nisour Square massacre'],
  'Dustin Heard': ['Nisour Square massacre'],
  'Mark Forkner': ['Boeing 737 MAX groundings'],
  'Warren Anderson': ['Warren Anderson (American businessman)'],
  'Cardinal Theodore McCarrick': ['Theodore McCarrick'],
  'Allen Weisselberg': ['Allen Weisselberg'],
  'David Pecker': ['David Pecker'],
  'James Mitchell': ['James Elmer Mitchell'],
  'Jose Rodriguez': ['Jose A. Rodriguez Jr.'],
  'Andrew Fastow': ['Andrew Fastow'],
  'Elizabeth Lederer': ['Central Park jogger case'],
  'Carrie Tolstedt': ['Wells Fargo account fraud scandal'],
  'Payton Gendron': ['2022 Buffalo shooting'],
  'Dylann Roof': ['Dylann Roof'],
  'Travis McMichael': ['Murder of Ahmaud Arbery'],
  'Gregory McMichael': ['Murder of Ahmaud Arbery'],
  'William Bryan': ['Murder of Ahmaud Arbery'],
  'Jackie Johnson': ['Murder of Ahmaud Arbery'],
  'Brian Kolfage': ['Brian Kolfage'],
  'Andrew Badolato': ['We Build the Wall'],
  'Timothy Shea': ['We Build the Wall'],
  'Misty Hampton': ['Misty Hampton'],
  'Cathy Latham': ['Cathy Latham'],
  'Harlan Crow': ['Harlan Crow'],
  'Jon Burge': ['Jon Burge'],
  'Ivan Boesky': ['Ivan Boesky'],
  'James Holmes': ['James Holmes (mass murderer)'],
  'Caroline Ellison': ['Caroline Ellison'],
  'Gary Wang': ['Gary Wang'],
  'Robert Bowers': ['Pittsburgh synagogue shooting'],
  'Ralph Cioffi': ['Bear Stearns'],
  'Matthew Tannin': ['Bear Stearns'],
  'Patrick Crusius': ['2019 El Paso shooting'],
  'Derek Chauvin': ['Derek Chauvin'],
  'Jason Van Dyke': ['Murder of Laquan McDonald', 'Jason Van Dyke'],
  'Daniel Pantaleo': ['Death of Eric Garner'],
  'Tom Hayes': ['Tom Hayes (trader)'],
  'Aleksandr Kogan': ['Aleksandr Kogan'],

  // Combo / special names
  'Bear Stearns / Ralph Cioffi & Matthew Tannin': ['Bear Stearns'],
  'AIG / Joseph Cassano': ['AIG', 'Joseph Cassano'],
  'Bank of America / Countrywide': ['Bank of America'],
  'Richard Nixon (posthumous)': ['Richard Nixon'],
  'Citizens United (organizational)': ['Citizens United (organization)'],

  // === CORPORATIONS ===
  'Goldman Sachs': ['Goldman Sachs'],
  'JPMorgan Chase': ['JPMorgan Chase'],
  'Bank of America': ['Bank of America'],
  'Citigroup': ['Citigroup'],
  'NBCUniversal': ['NBCUniversal'],
  'Boeing Company': ['Boeing'],
  'Philip Morris': ['Philip Morris International'],
  'R.J. Reynolds': ['R. J. Reynolds Tobacco Company'],
  'British American Tobacco': ['British American Tobacco'],
  'Lorillard': ['Lorillard (company)'],
  'Liggett Group': ['Liggett Group'],
  'Altria Group': ['Altria'],
  'Union Carbide Corporation': ['Union Carbide'],
  'Dow Chemical': ['Dow Chemical Company'],
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
  'GRU Unit 26165 (12 officers)': ['GRU (Russian Federation)', 'Fancy Bear'],
  'GRU Officers (12)': ['GRU (Russian Federation)', 'Fancy Bear'],
  'NYPD Detectives': ['New York City Police Department'],
  'City of New York': ['New York City'],
  'Archdiocese of Los Angeles': ['Archdiocese of Los Angeles'],
  'Diocese of Rockville Centre': ['Roman Catholic Diocese of Rockville Centre'],
  'Shelby County': ['Shelby County, Tennessee'],
  'City of Chicago': ['Chicago'],
  'Reagan Administration': ['Presidency of Ronald Reagan'],
  'DEA (institutional)': ['Drug Enforcement Administration'],
  'US Army (institutional)': ['United States Army'],
  'US Public Health Service': ['United States Public Health Service'],
  'Macon County Medical Society': ['Tuskegee Syphilis Study'],
};

function slugify(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Special slug overrides for combo names
function getSlug(name) {
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
  return overrides[name] || slugify(name);
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'ArkHiveBot/1.0 (educational project)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpsGet(res.headers.location).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        if (res.statusCode === 200) {
          const contentType = res.headers['content-type'] || '';
          if (contentType.includes('json') || contentType.includes('text')) {
            resolve(Buffer.concat(chunks).toString('utf-8'));
          } else {
            resolve(Buffer.concat(chunks));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

async function getWikipediaImage(articleTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=400&redirects=1`;
  const raw = await httpsGet(url);
  const data = JSON.parse(raw);
  const pages = data.query?.pages;
  if (!pages) return null;
  for (const pg of Object.values(pages)) {
    if (pg.thumbnail?.source) return pg.thumbnail.source;
  }
  return null;
}

async function searchCommonsImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' portrait OR photo OR logo')}&srnamespace=6&srlimit=3&format=json`;
  const raw = await httpsGet(url);
  const data = JSON.parse(raw);
  const results = data.query?.search;
  if (!results?.length) return null;
  // Get the image URL from the first result
  for (const result of results) {
    const title = result.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
    const infoRaw = await httpsGet(infoUrl);
    const infoData = JSON.parse(infoRaw);
    const pages = infoData.query?.pages;
    if (!pages) continue;
    for (const pg of Object.values(pages)) {
      const ii = pg.imageinfo?.[0];
      if (ii?.thumburl) return ii.thumburl;
      if (ii?.url) return ii.url;
    }
  }
  return null;
}

async function downloadImage(imgUrl, filepath) {
  const data = await httpsGet(imgUrl);
  if (Buffer.isBuffer(data) && data.length > 1000) {
    fs.writeFileSync(filepath, data);
    return true;
  }
  return false;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const entries = Object.entries(defendantSearchMap);
  const results = { success: [], failed: [], skipped: [] };

  console.log(`Processing ${entries.length} defendants...\n`);

  for (let i = 0; i < entries.length; i++) {
    const [name, searchTerms] = entries[i];
    const slug = getSlug(name);
    const ext = '.jpg';
    const filepath = path.join(outDir, slug + ext);

    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`[${i + 1}/${entries.length}] SKIP (exists): ${name} → ${slug}${ext}`);
      results.skipped.push(name);
      continue;
    }

    // Also check for PNG
    if (fs.existsSync(path.join(outDir, slug + '.png'))) {
      console.log(`[${i + 1}/${entries.length}] SKIP (exists .png): ${name}`);
      results.skipped.push(name);
      continue;
    }

    let downloaded = false;

    // Try Wikipedia pageimages API first (best source for main article images)
    for (const term of searchTerms) {
      if (downloaded) break;
      try {
        console.log(`[${i + 1}/${entries.length}] Wikipedia: "${term}" ...`);
        const imgUrl = await getWikipediaImage(term);
        if (imgUrl) {
          const ok = await downloadImage(imgUrl, filepath);
          if (ok) {
            const size = Math.round(fs.statSync(filepath).size / 1024);
            console.log(`  ✓ Downloaded ${size}KB → ${slug}${ext}`);
            results.success.push(name);
            downloaded = true;
          }
        }
      } catch (err) {
        console.log(`  ✗ Wikipedia error: ${err.message}`);
      }
      await sleep(500);
    }

    // Fall back to Commons search
    if (!downloaded) {
      try {
        console.log(`  → Trying Commons search for "${name}" ...`);
        const imgUrl = await searchCommonsImage(name);
        if (imgUrl) {
          const ok = await downloadImage(imgUrl, filepath);
          if (ok) {
            const size = Math.round(fs.statSync(filepath).size / 1024);
            console.log(`  ✓ Downloaded (Commons) ${size}KB → ${slug}${ext}`);
            results.success.push(name);
            downloaded = true;
          }
        }
      } catch (err) {
        console.log(`  ✗ Commons error: ${err.message}`);
      }
      await sleep(500);
    }

    if (!downloaded) {
      console.log(`  ✗ FAILED: No image found for "${name}"`);
      results.failed.push(name);
    }

    // Rate limiting: 1.5s between requests
    await sleep(1500);
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Success: ${results.success.length}`);
  console.log(`Skipped (already exist): ${results.skipped.length}`);
  console.log(`Failed: ${results.failed.length}`);
  if (results.failed.length > 0) {
    console.log('\nFailed defendants:');
    results.failed.forEach(n => console.log(`  - ${n}`));
  }

  // Write failed list for later retry
  if (results.failed.length > 0) {
    fs.writeFileSync(path.join(__dirname, 'failed-defendants.json'), JSON.stringify(results.failed, null, 2));
  }
}

main().catch(console.error);
