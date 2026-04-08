/**
 * v3: Batch Wikipedia queries + Wikidata + SVG generation for ALL missing defendants.
 * Uses longer timeouts for slow connections.
 * Generates SVG placeholders for any that can't be found.
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'defendants');
const UA = 'ArkHiveBot/1.0 (educational research project)';

// All defendants still missing images, with Wikipedia search terms and defendant type
const defendants = [
  // INDIVIDUALS
  { name: 'Jho Low', titles: ['Jho Low'], type: 'individual' },
  { name: 'Tim Leissner', titles: ['Tim Leissner'], type: 'individual' },
  { name: 'Roger Ng', titles: ['Roger Ng (banker)'], type: 'individual' },
  { name: 'Kareem Serageldin', titles: ['Kareem Serageldin'], type: 'individual' },
  { name: 'Sidney Powell', titles: ['Sidney Powell'], type: 'individual' },
  { name: 'Kenneth Chesebro', titles: ['Kenneth Chesebro'], type: 'individual' },
  { name: 'Jeffrey Clark', titles: ['Jeffrey Clark (attorney)'], type: 'individual' },
  { name: 'Nicholas Slatten', titles: ['Nicholas Slatten'], type: 'individual' },
  { name: 'Paul Slough', titles: ['Nisour Square massacre'], type: 'individual' },
  { name: 'Evan Liberty', titles: ['Nisour Square massacre'], type: 'individual' },
  { name: 'Dustin Heard', titles: ['Nisour Square massacre'], type: 'individual' },
  { name: 'Warren Anderson', titles: ['Warren Anderson (American businessman)'], type: 'individual' },
  { name: 'Allen Weisselberg', titles: ['Allen Weisselberg'], type: 'individual' },
  { name: 'David Pecker', titles: ['David Pecker'], type: 'individual' },
  { name: 'James Mitchell', titles: ['James Mitchell (psychologist)'], type: 'individual' },
  { name: 'Andrew Fastow', titles: ['Andrew Fastow'], type: 'individual' },
  { name: 'Dylann Roof', titles: ['Dylann Roof'], type: 'individual' },
  { name: 'Travis McMichael', titles: ['Murder of Ahmaud Arbery'], type: 'individual' },
  { name: 'Gregory McMichael', titles: ['Murder of Ahmaud Arbery'], type: 'individual' },
  { name: 'William Bryan', titles: ['Murder of Ahmaud Arbery'], type: 'individual' },
  { name: 'Jackie Johnson', titles: ['Murder of Ahmaud Arbery'], type: 'individual' },
  { name: 'Brian Kolfage', titles: ['Brian Kolfage'], type: 'individual' },
  { name: 'Andrew Badolato', titles: ['We Build the Wall'], type: 'individual' },
  { name: 'Timothy Shea', titles: ['We Build the Wall'], type: 'individual' },
  { name: 'Cathy Latham', titles: ['Cathy Latham'], type: 'individual' },
  { name: 'Harlan Crow', titles: ['Harlan Crow'], type: 'individual' },
  { name: 'Jon Burge', titles: ['Jon Burge'], type: 'individual' },
  { name: 'Ivan Boesky', titles: ['Ivan Boesky'], type: 'individual' },
  { name: 'James Holmes', titles: ['2012 Aurora, Colorado shooting'], type: 'individual' },
  { name: 'Caroline Ellison', titles: ['Caroline Ellison'], type: 'individual' },
  { name: 'Gary Wang', titles: ['Gary Wang (businessman)'], type: 'individual' },
  { name: 'Derek Chauvin', titles: ['Derek Chauvin'], type: 'individual' },
  { name: 'Jason Van Dyke', titles: ['Jason Van Dyke'], type: 'individual' },
  { name: 'Daniel Pantaleo', titles: ['Death of Eric Garner'], type: 'individual' },
  { name: 'Tom Hayes', titles: ['Tom Hayes (trader)'], type: 'individual' },
  { name: 'Aleksandr Kogan', titles: ['Aleksandr Kogan'], type: 'individual' },

  // COMBO
  { name: 'Bear Stearns / Ralph Cioffi & Matthew Tannin', titles: ['Bear Stearns'], type: 'corporation', slug: 'bear-stearns' },
  { name: 'AIG / Joseph Cassano', titles: ['American International Group'], type: 'corporation', slug: 'aig-joseph-cassano' },
  { name: 'Bank of America / Countrywide', titles: ['Countrywide Financial'], type: 'corporation', slug: 'bank-of-america-countrywide' },
  { name: 'Richard Nixon (posthumous)', titles: ['Richard Nixon'], type: 'individual', slug: 'richard-nixon' },
  { name: 'Citizens United (organizational)', titles: ['Citizens United (organization)'], type: 'organization', slug: 'citizens-united' },

  // CORPORATIONS
  { name: 'Goldman Sachs', titles: ['Goldman Sachs'], type: 'corporation' },
  { name: 'JPMorgan Chase', titles: ['JPMorgan Chase'], type: 'corporation' },
  { name: 'Bank of America', titles: ['Bank of America'], type: 'corporation' },
  { name: 'Citigroup', titles: ['Citigroup'], type: 'corporation' },
  { name: 'NBCUniversal', titles: ['NBCUniversal'], type: 'corporation' },
  { name: 'Boeing Company', titles: ['Boeing'], type: 'corporation' },
  { name: 'Philip Morris', titles: ['Philip Morris International'], type: 'corporation' },
  { name: 'R.J. Reynolds', titles: ['R. J. Reynolds Tobacco Company'], type: 'corporation' },
  { name: 'British American Tobacco', titles: ['British American Tobacco'], type: 'corporation' },
  { name: 'Lorillard', titles: ['Lorillard (company)'], type: 'corporation' },
  { name: 'Liggett Group', titles: ['Liggett Group'], type: 'corporation' },
  { name: 'Altria Group', titles: ['Altria'], type: 'corporation' },
  { name: 'Union Carbide Corporation', titles: ['Union Carbide'], type: 'corporation' },
  { name: 'Dow Chemical', titles: ['Dow Chemical Company'], type: 'corporation' },
  { name: 'Trump Organization', titles: ['The Trump Organization'], type: 'corporation' },
  { name: 'Fox News', titles: ['Fox News'], type: 'corporation' },
  { name: 'ExxonMobil', titles: ['ExxonMobil'], type: 'corporation' },
  { name: 'Koch Industries', titles: ['Koch Industries'], type: 'corporation' },
  { name: 'Chevron', titles: ['Chevron Corporation'], type: 'corporation' },
  { name: 'Shell', titles: ['Shell plc'], type: 'corporation' },
  { name: 'Arthur Andersen LLP', titles: ['Arthur Andersen'], type: 'corporation' },
  { name: 'Wells Fargo', titles: ['Wells Fargo'], type: 'corporation' },
  { name: 'HSBC', titles: ['HSBC'], type: 'corporation' },
  { name: 'Deutsche Bank', titles: ['Deutsche Bank'], type: 'corporation' },
  { name: 'Credit Suisse', titles: ['Credit Suisse'], type: 'corporation' },
  { name: 'Wachovia', titles: ['Wachovia'], type: 'corporation' },
  { name: 'Spirit AeroSystems', titles: ['Spirit AeroSystems'], type: 'corporation' },
  { name: 'Columbia/HCA Healthcare', titles: ['HCA Healthcare'], type: 'corporation', slug: 'columbia-hca-healthcare' },
  { name: 'Drexel Burnham Lambert', titles: ['Drexel Burnham Lambert'], type: 'corporation' },
  { name: 'Bayer AG', titles: ['Bayer'], type: 'corporation' },
  { name: 'Morgan Stanley', titles: ['Morgan Stanley'], type: 'corporation' },
  { name: 'Purdue Pharma', titles: ['Purdue Pharma'], type: 'corporation' },
  { name: 'Barclays', titles: ['Barclays'], type: 'corporation' },
  { name: 'UBS', titles: ['UBS'], type: 'corporation' },
  { name: 'Rabobank', titles: ['Rabobank'], type: 'corporation' },
  { name: 'Cambridge Analytica', titles: ['Cambridge Analytica'], type: 'corporation' },
  { name: 'Facebook/Meta', titles: ['Meta Platforms'], type: 'corporation', slug: 'facebook-meta' },

  // GOVERNMENT/GROUPS
  { name: 'Internet Research Agency (IRA)', titles: ['Internet Research Agency'], type: 'government', slug: 'internet-research-agency' },
  { name: 'Internet Research Agency', titles: ['Internet Research Agency'], type: 'government' },
  { name: 'GRU Unit 26165 (12 officers)', titles: ['Fancy Bear'], type: 'government', slug: 'gru-unit-26165' },
  { name: 'GRU Officers (12)', titles: ['Fancy Bear'], type: 'government', slug: 'gru-officers' },
  { name: 'NYPD Detectives', titles: ['New York City Police Department'], type: 'government' },
  { name: 'City of New York', titles: ['New York City'], type: 'government' },
  { name: 'Archdiocese of Los Angeles', titles: ['Archdiocese of Los Angeles'], type: 'organization' },
  { name: 'Diocese of Rockville Centre', titles: ['Roman Catholic Diocese of Rockville Centre'], type: 'organization' },
  { name: 'Shelby County', titles: ['Shelby County, Tennessee'], type: 'government' },
  { name: 'City of Chicago', titles: ['Chicago'], type: 'government' },
  { name: 'Reagan Administration', titles: ['Ronald Reagan'], type: 'government' },
  { name: 'DEA (institutional)', titles: ['Drug Enforcement Administration'], type: 'government', slug: 'dea' },
  { name: 'US Army (institutional)', titles: ['United States Army'], type: 'government', slug: 'us-army' },
  { name: 'US Public Health Service', titles: ['United States Public Health Service'], type: 'government' },
  { name: 'Macon County Medical Society', titles: ['Tuskegee Syphilis Study'], type: 'organization' },
];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function getSlug(d) {
  return d.slug || slugify(d.name);
}

function httpGet(url, timeout = 45000) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': UA }, timeout }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpGet(res.headers.location, timeout).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(Buffer.concat(chunks));
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
      res.on('error', reject);
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    req.on('error', reject);
  });
}

async function getJSON(url) {
  const buf = await httpGet(url);
  return JSON.parse(buf.toString('utf-8'));
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Batch query Wikipedia pageimages (up to 50 titles at once)
async function batchWikipediaPageImages(titleMap) {
  const results = {};
  const titleEntries = Object.entries(titleMap);
  // Process in batches of 20 to stay well under the 50-title limit
  for (let i = 0; i < titleEntries.length; i += 20) {
    const batch = titleEntries.slice(i, i + 20);
    const titles = batch.map(([, t]) => t).join('|');
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages|pageprops&ppprop=wikibase_item&format=json&pithumbsize=400&redirects=1`;
      const data = await getJSON(url);
      const pages = data?.query?.pages || {};
      for (const pg of Object.values(pages)) {
        const title = pg.title;
        if (pg.thumbnail?.source) {
          // Find which defendant name maps to this title
          for (const [defName, searchTitle] of batch) {
            const normalized = data?.query?.normalized?.find(n => n.to === title || n.from === searchTitle);
            if (searchTitle === title || normalized?.to === title || searchTitle.replace(/_/g, ' ') === title) {
              results[defName] = { imageUrl: pg.thumbnail.source, wikidataId: pg.pageprops?.wikibase_item };
            }
          }
        }
        // Store wikidata IDs even without images
        if (pg.pageprops?.wikibase_item) {
          for (const [defName, searchTitle] of batch) {
            if (!results[defName]) {
              const normalized = data?.query?.normalized?.find(n => n.to === title || n.from === searchTitle);
              if (searchTitle === title || normalized?.to === title || searchTitle.replace(/_/g, ' ') === title) {
                results[defName] = { wikidataId: pg.pageprops.wikibase_item };
              }
            }
          }
        }
      }
    } catch (err) {
      console.log(`  Batch query error: ${err.message}`);
    }
    await sleep(2000);
  }
  return results;
}

// Query Wikidata P18/P154 for a single entity
async function getWikidataImage(wikidataId) {
  try {
    const url = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${wikidataId}&property=P18&format=json`;
    const data = await getJSON(url);
    let filename = data?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!filename) {
      const url2 = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${wikidataId}&property=P154&format=json`;
      const data2 = await getJSON(url2);
      filename = data2?.claims?.P154?.[0]?.mainsnak?.datavalue?.value;
    }
    if (!filename) return null;
    // Get the Commons URL
    const commonsUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
    const cData = await getJSON(commonsUrl);
    const pages = cData?.query?.pages;
    if (!pages) return null;
    for (const pg of Object.values(pages)) {
      const ii = pg.imageinfo?.[0];
      if (ii?.thumburl) return ii.thumburl;
      if (ii?.url) return ii.url;
    }
  } catch { /* ignore */ }
  return null;
}

// Generate an SVG placeholder image for defendants without photos
function generateSVG(name, type) {
  const initials = name.split(/[\s/]+/).filter(Boolean).map(w => w[0]).join('').slice(0, 3).toUpperCase();

  // Color scheme based on type
  const colors = {
    individual: { bg: '#1a0808', accent: '#8b0000', text: '#ff4444', sub: '#994444' },
    corporation: { bg: '#0a0a14', accent: '#1a1a4a', text: '#6666cc', sub: '#444488' },
    government: { bg: '#0a1408', accent: '#1a3a1a', text: '#44aa44', sub: '#336633' },
    organization: { bg: '#14100a', accent: '#3a2a1a', text: '#cc8844', sub: '#886633' },
  };
  const c = colors[type] || colors.individual;

  // Display name - truncate if needed
  let displayName = name;
  if (name.length > 28) {
    displayName = name.slice(0, 26) + '…';
  }

  // SVG with professional dark aesthetic
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c.bg}"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${c.accent}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <rect x="0" y="0" width="400" height="3" fill="${c.text}" opacity="0.4"/>
  <rect x="0" y="397" width="400" height="3" fill="${c.text}" opacity="0.2"/>
  <rect width="400" height="200" fill="url(#accent)"/>
  <!-- Grid pattern -->
  <g opacity="0.04" stroke="${c.text}" stroke-width="0.5">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i*20}" y1="0" x2="${i*20}" y2="400"/>`).join('\n    ')}
    ${Array.from({length: 20}, (_, i) => `<line x1="0" y1="${i*20}" x2="400" y2="${i*20}"/>`).join('\n    ')}
  </g>
  <!-- Initials -->
  <text x="200" y="200" font-family="'Courier New',monospace" font-size="120" font-weight="900"
    fill="${c.text}" opacity="0.15" text-anchor="middle" dominant-baseline="central"
    letter-spacing="15">${initials}</text>
  <!-- Silhouette icon based on type -->
  ${type === 'individual' ? `
  <circle cx="200" cy="145" r="45" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3"/>
  <path d="M200 195 C160 195 130 215 125 250 L275 250 C270 215 240 195 200 195Z" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3"/>
  ` : type === 'corporation' ? `
  <rect x="160" y="120" width="80" height="100" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3" rx="2"/>
  <line x1="200" y1="120" x2="200" y2="100" stroke="${c.text}" stroke-width="1.5" opacity="0.3"/>
  <rect x="175" y="135" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  <rect x="210" y="135" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  <rect x="175" y="160" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  <rect x="210" y="160" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  <rect x="175" y="185" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  <rect x="210" y="185" width="15" height="12" fill="${c.text}" opacity="0.15"/>
  ` : `
  <rect x="155" y="115" width="90" height="70" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3" rx="2"/>
  <path d="M175 115 L200 90 L225 115" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3"/>
  <rect x="188" y="155" width="24" height="30" fill="none" stroke="${c.text}" stroke-width="1.5" opacity="0.3"/>
  `}
  <!-- Name -->
  <text x="200" y="310" font-family="'Helvetica Neue',Arial,sans-serif" font-size="14" font-weight="700"
    fill="${c.text}" opacity="0.6" text-anchor="middle" letter-spacing="2"
    text-transform="uppercase">${escapeXml(displayName)}</text>
  <!-- Type label -->
  <text x="200" y="340" font-family="'Courier New',monospace" font-size="9"
    fill="${c.sub}" opacity="0.5" text-anchor="middle" letter-spacing="4"
    text-transform="uppercase">${type.toUpperCase()}</text>
  <!-- Corner accents -->
  <line x1="0" y1="15" x2="15" y2="0" stroke="${c.text}" stroke-width="0.5" opacity="0.2"/>
  <line x1="385" y1="0" x2="400" y2="15" stroke="${c.text}" stroke-width="0.5" opacity="0.2"/>
  <line x1="0" y1="385" x2="15" y2="400" stroke="${c.text}" stroke-width="0.5" opacity="0.2"/>
  <line x1="385" y1="400" x2="400" y2="385" stroke="${c.text}" stroke-width="0.5" opacity="0.2"/>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Filter to only those still needed
  const needed = defendants.filter(d => {
    const slug = getSlug(d);
    return !fs.existsSync(path.join(outDir, slug + '.jpg')) &&
           !fs.existsSync(path.join(outDir, slug + '.svg'));
  });

  console.log(`${needed.length} defendants need images (${defendants.length - needed.length} already exist)\n`);

  if (needed.length === 0) {
    console.log('All defendants have images!');
    return;
  }

  // Build title → name map for batch query
  const titleMap = {};
  for (const d of needed) {
    titleMap[d.name] = d.titles[0];
  }

  // Phase 1: Batch Wikipedia pageimages query
  console.log('Phase 1: Querying Wikipedia pageimages...');
  const wpResults = await batchWikipediaPageImages(titleMap);

  let downloaded = 0;
  let svgGenerated = 0;

  // Phase 2: Download Wikipedia images
  console.log('\nPhase 2: Downloading Wikipedia images...');
  for (const d of needed) {
    const slug = getSlug(d);
    const jpgPath = path.join(outDir, slug + '.jpg');
    if (fs.existsSync(jpgPath)) continue;

    const wp = wpResults[d.name];
    if (wp?.imageUrl) {
      try {
        const data = await httpGet(wp.imageUrl);
        if (data.length > 2000) {
          fs.writeFileSync(jpgPath, data);
          console.log(`  ✓ Wikipedia: ${d.name} (${Math.round(data.length / 1024)}KB)`);
          downloaded++;
          await sleep(1000);
          continue;
        }
      } catch (err) {
        console.log(`  ✗ Download failed for ${d.name}: ${err.message}`);
      }
    }
  }

  // Phase 3: Wikidata P18/P154 for remaining
  console.log('\nPhase 3: Querying Wikidata for remaining...');
  for (const d of needed) {
    const slug = getSlug(d);
    const jpgPath = path.join(outDir, slug + '.jpg');
    if (fs.existsSync(jpgPath)) continue;

    const wp = wpResults[d.name];
    if (wp?.wikidataId) {
      const imgUrl = await getWikidataImage(wp.wikidataId);
      if (imgUrl) {
        try {
          const data = await httpGet(imgUrl);
          if (data.length > 2000) {
            fs.writeFileSync(jpgPath, data);
            console.log(`  ✓ Wikidata: ${d.name} (${Math.round(data.length / 1024)}KB)`);
            downloaded++;
            await sleep(1500);
            continue;
          }
        } catch (err) {
          console.log(`  ✗ Wikidata download failed for ${d.name}: ${err.message}`);
        }
      }
      await sleep(1000);
    }
  }

  // Phase 4: Generate SVGs for everything still missing
  console.log('\nPhase 4: Generating SVG placeholders for remaining...');
  for (const d of needed) {
    const slug = getSlug(d);
    const jpgPath = path.join(outDir, slug + '.jpg');
    if (fs.existsSync(jpgPath)) continue;

    const svgPath = path.join(outDir, slug + '.svg');
    const svg = generateSVG(d.name, d.type);
    fs.writeFileSync(svgPath, svg);
    console.log(`  ◉ SVG: ${d.name}`);
    svgGenerated++;
  }

  console.log(`\n=== COMPLETE ===`);
  console.log(`Downloaded from web: ${downloaded}`);
  console.log(`SVG placeholders: ${svgGenerated}`);
  console.log(`Total new: ${downloaded + svgGenerated}`);
}

main().catch(console.error);
