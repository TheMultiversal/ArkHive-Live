/**
 * Batch fetches defendant portrait images from Wikimedia Commons via the Wikipedia API.
 * Only downloads freely licensed images (public domain, CC-BY-SA, GFDL, etc.).
 * 
 * Usage: node scripts/fetch-all-defendant-images.mjs
 */
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'defendants');

// All individual human defendants across all investigations
// Deduplicated by file slug. Organizations/institutions excluded.
const DEFENDANTS = [
  // 1mdb-scandal
  { name: 'Jho Low', wiki: 'Jho_Low', file: 'jho-low' },
  { name: 'Najib Razak', wiki: 'Najib_Razak', file: 'najib-razak' },
  { name: 'Tim Leissner', wiki: 'Tim_Leissner', file: 'tim-leissner' },
  { name: 'Roger Ng', wiki: 'Roger_Ng', file: 'roger-ng' },
  // financial-crisis-accountability-failure
  { name: 'Angelo Mozilo', wiki: 'Angelo_Mozilo', file: 'angelo-mozilo' },
  { name: 'Ralph Cioffi', wiki: 'Ralph_Cioffi', file: 'ralph-cioffi' },
  { name: 'Matthew Tannin', wiki: 'Matthew_Tannin', file: 'matthew-tannin' },
  { name: 'Kareem Serageldin', wiki: 'Kareem_Serageldin', file: 'kareem-serageldin' },
  // 2020-election-overturn
  { name: 'Donald Trump', wiki: 'Donald_Trump', file: 'donald-trump' },
  { name: 'Rudy Giuliani', wiki: 'Rudy_Giuliani', file: 'rudy-giuliani' },
  { name: 'John Eastman', wiki: 'John_Eastman_(attorney)', file: 'john-eastman' },
  { name: 'Sidney Powell', wiki: 'Sidney_Powell', file: 'sidney-powell' },
  { name: 'Kenneth Chesebro', wiki: 'Kenneth_Chesebro', file: 'kenneth-chesebro' },
  { name: 'Mark Meadows', wiki: 'Mark_Meadows', file: 'mark-meadows' },
  { name: 'Jeffrey Clark', wiki: 'Jeffrey_Clark_(lawyer)', file: 'jeffrey-clark' },
  // 2016-election
  { name: 'Paul Manafort', wiki: 'Paul_Manafort', file: 'paul-manafort' },
  { name: 'Michael Flynn', wiki: 'Michael_Flynn', file: 'michael-flynn' },
  { name: 'Roger Stone', wiki: 'Roger_Stone', file: 'roger-stone' },
  { name: 'Rick Gates', wiki: 'Rick_Gates_(political_consultant)', file: 'rick-gates' },
  // blackwater-massacre
  { name: 'Nicholas Slatten', wiki: 'Nicholas_Slatten', file: 'nicholas-slatten' },
  { name: 'Paul Slough', wiki: 'Paul_Slough', file: 'paul-slough' },
  { name: 'Evan Liberty', wiki: 'Evan_Liberty', file: 'evan-liberty' },
  { name: 'Dustin Heard', wiki: 'Dustin_Heard', file: 'dustin-heard' },
  { name: 'Erik Prince', wiki: 'Erik_Prince', file: 'erik-prince' },
  // boeing-safety-crisis
  { name: 'Dennis Muilenburg', wiki: 'Dennis_Muilenburg', file: 'dennis-muilenburg' },
  { name: 'Mark Forkner', wiki: 'Mark_Forkner', file: 'mark-forkner' },
  // bhopal-disaster
  { name: 'Warren Anderson', wiki: 'Warren_Anderson_(American_businessman)', file: 'warren-anderson' },
  // central-park-five
  { name: 'Linda Fairstein', wiki: 'Linda_Fairstein', file: 'linda-fairstein' },
  { name: 'Elizabeth Lederer', wiki: 'Elizabeth_Lederer', file: 'elizabeth-lederer' },
  // catholic-church-abuse
  { name: 'Cardinal Bernard Law', wiki: 'Bernard_Francis_Law', file: 'bernard-law' },
  { name: 'Cardinal Theodore McCarrick', wiki: 'Theodore_Edgar_McCarrick', file: 'theodore-mccarrick' },
  // hush-money
  { name: 'Michael Cohen', wiki: 'Michael_Cohen_(lawyer)', file: 'michael-cohen' },
  { name: 'Allen Weisselberg', wiki: 'Allen_Weisselberg', file: 'allen-weisselberg' },
  { name: 'David Pecker', wiki: 'David_Pecker', file: 'david-pecker' },
  // trump-org-fraud
  { name: 'Donald Trump Jr.', wiki: 'Donald_Trump_Jr.', file: 'donald-trump-jr' },
  { name: 'Eric Trump', wiki: 'Eric_Trump', file: 'eric-trump' },
  // cia-torture
  { name: 'James Mitchell', wiki: 'James_Elmer_Mitchell', file: 'james-mitchell' },
  { name: 'Bruce Jessen', wiki: 'Bruce_Jessen', file: 'bruce-jessen' },
  { name: 'Gina Haspel', wiki: 'Gina_Haspel', file: 'gina-haspel' },
  { name: 'Jose Rodriguez', wiki: 'Jose_A._Rodriguez_Jr.', file: 'jose-rodriguez' },
  // covid-misinfo
  { name: 'Alex Jones', wiki: 'Alex_Jones', file: 'alex-jones' },
  // enron-fraud
  { name: 'Jeffrey Skilling', wiki: 'Jeffrey_Skilling', file: 'jeffrey-skilling' },
  { name: 'Kenneth Lay', wiki: 'Kenneth_Lay', file: 'kenneth-lay' },
  { name: 'Andrew Fastow', wiki: 'Andrew_Fastow', file: 'andrew-fastow' },
  // wells-fargo-fraud
  { name: 'John Stumpf', wiki: 'John_Stumpf', file: 'john-stumpf' },
  { name: 'Carrie Tolstedt', wiki: 'Carrie_Tolstedt', file: 'carrie-tolstedt' },
  // arms-trafficking (Iran-Contra)
  { name: 'Oliver North', wiki: 'Oliver_North', file: 'oliver-north' },
  { name: 'John Poindexter', wiki: 'John_Poindexter', file: 'john-poindexter' },
  { name: 'Caspar Weinberger', wiki: 'Caspar_Weinberger', file: 'caspar-weinberger' },
  { name: 'Elliott Abrams', wiki: 'Elliott_Abrams', file: 'elliott-abrams' },
  // buffalo-massacre
  { name: 'Payton Gendron', wiki: 'Buffalo_shooting', file: 'payton-gendron' },
  // charleston-massacre
  { name: 'Dylann Roof', wiki: 'Dylann_Roof', file: 'dylann-roof' },
  // ahmaud-arbery-murder
  { name: 'Travis McMichael', wiki: 'Murder_of_Ahmaud_Arbery', file: 'travis-mcmichael' },
  { name: 'Gregory McMichael', wiki: 'Murder_of_Ahmaud_Arbery', file: 'gregory-mcmichael' },
  { name: 'William Bryan', wiki: 'Murder_of_Ahmaud_Arbery', file: 'william-bryan' },
  { name: 'Jackie Johnson', wiki: 'Jackie_Johnson_(district_attorney)', file: 'jackie-johnson' },
  // botham-jean-murder
  { name: 'Amber Guyger', wiki: 'Murder_of_Botham_Jean', file: 'amber-guyger' },
  // build-the-wall-fraud
  { name: 'Steve Bannon', wiki: 'Steve_Bannon', file: 'steve-bannon' },
  { name: 'Brian Kolfage', wiki: 'Brian_Kolfage', file: 'brian-kolfage' },
  { name: 'Andrew Badolato', wiki: 'Andrew_Badolato', file: 'andrew-badolato' },
  { name: 'Timothy Shea', wiki: 'Timothy_Shea_(fundraiser)', file: 'timothy-shea' },
  // coffee-county
  { name: 'Misty Hampton', wiki: 'Misty_Hampton', file: 'misty-hampton' },
  { name: 'Cathy Latham', wiki: 'Cathy_Latham', file: 'cathy-latham' },
  // crow-network / scotus-corruption
  { name: 'Clarence Thomas', wiki: 'Clarence_Thomas', file: 'clarence-thomas' },
  { name: 'Harlan Crow', wiki: 'Harlan_Crow', file: 'harlan-crow' },
  { name: 'Samuel Alito', wiki: 'Samuel_Alito', file: 'samuel-alito' },
  // pandemic-profiteering
  { name: 'Richard Burr', wiki: 'Richard_Burr', file: 'richard-burr' },
  { name: 'Kelly Loeffler', wiki: 'Kelly_Loeffler', file: 'kelly-loeffler' },
  // chicago-police-torture
  { name: 'Jon Burge', wiki: 'Jon_Burge', file: 'jon-burge' },
  // columbia-hca-fraud
  { name: 'Rick Scott', wiki: 'Rick_Scott', file: 'rick-scott' },
  // bill-cosby
  { name: 'Bill Cosby', wiki: 'Bill_Cosby', file: 'bill-cosby' },
  // 1980s-insider-trading
  { name: 'Ivan Boesky', wiki: 'Ivan_Boesky', file: 'ivan-boesky' },
  // aurora-shooting
  { name: 'James Holmes', wiki: 'James_Holmes_(mass_murderer)', file: 'james-holmes' },
  // aig-bailout
  { name: 'Joseph Cassano', wiki: 'Joseph_Cassano', file: 'joseph-cassano' },
  { name: 'Hank Greenberg', wiki: 'Maurice_R._Greenberg', file: 'hank-greenberg' },
  // crypto-exchange-fraud
  { name: 'Sam Bankman-Fried', wiki: 'Sam_Bankman-Fried', file: 'sam-bankman-fried' },
  { name: 'Caroline Ellison', wiki: 'Caroline_Ellison', file: 'caroline-ellison' },
  { name: 'Gary Wang', wiki: 'Gary_Wang_(businessman)', file: 'gary-wang' },
  { name: 'Changpeng Zhao', wiki: 'Changpeng_Zhao', file: 'changpeng-zhao' },
  { name: 'Do Kwon', wiki: 'Do_Kwon', file: 'do-kwon' },
  { name: 'Alex Mashinsky', wiki: 'Alex_Mashinsky', file: 'alex-mashinsky' },
  // child-exploitation
  { name: 'Jeffrey Epstein', wiki: 'Jeffrey_Epstein', file: 'jeffrey-epstein' },
  { name: 'Ghislaine Maxwell', wiki: 'Ghislaine_Maxwell', file: 'ghislaine-maxwell' },
  // antisemitic-violence
  { name: 'Robert Bowers', wiki: 'Pittsburgh_synagogue_shooting', file: 'robert-bowers' },
  // civil-rights
  { name: 'J. Edgar Hoover', wiki: 'J._Edgar_Hoover', file: 'j-edgar-hoover' },
  { name: 'Bull Connor', wiki: 'Bull_Connor', file: 'bull-connor' },
  { name: 'Byron De La Beckwith', wiki: 'Byron_De_La_Beckwith', file: 'byron-de-la-beckwith' },
  // wall-street-bailout (individuals already covered above)
  // war-on-drugs
  { name: 'Richard Nixon', wiki: 'Richard_Nixon', file: 'richard-nixon' },
  // white-supremacist-violence
  { name: 'Patrick Crusius', wiki: '2019_El_Paso_shooting', file: 'patrick-crusius' },
  { name: 'James Fields Jr.', wiki: 'Charlottesville_car_attack', file: 'james-fields-jr' },
  // my-lai-massacre
  { name: 'William Calley', wiki: 'William_Calley', file: 'william-calley' },
  { name: 'Ernest Medina', wiki: 'Ernest_Medina', file: 'ernest-medina' },
  // tuskegee-experiment
  { name: 'John Cutler', wiki: 'John_Charles_Cutler', file: 'john-cutler' },
  // police-brutality
  { name: 'Derek Chauvin', wiki: 'Derek_Chauvin', file: 'derek-chauvin' },
  { name: 'Jason Van Dyke', wiki: 'Jason_Van_Dyke', file: 'jason-van-dyke' },
  { name: 'Daniel Pantaleo', wiki: 'Death_of_Eric_Garner', file: 'daniel-pantaleo' },
  // russian-interference
  { name: 'Maria Butina', wiki: 'Maria_Butina', file: 'maria-butina' },
  // libor-scandal
  { name: 'Tom Hayes', wiki: 'Tom_Hayes_(trader)', file: 'tom-hayes' },
  // cambridge-analytica
  { name: 'Alexander Nix', wiki: 'Alexander_Nix', file: 'alexander-nix' },
  { name: 'Aleksandr Kogan', wiki: 'Aleksandr_Kogan', file: 'aleksandr-kogan' },
  // bribery-corruption
  { name: 'Bob Menendez', wiki: 'Bob_Menendez', file: 'bob-menendez' },
  { name: 'Rod Blagojevich', wiki: 'Rod_Blagojevich', file: 'rod-blagojevich' },
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

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const results = { success: [], skipped: [], failed: [] };

  for (const d of DEFENDANTS) {
    const outPath = path.join(OUT_DIR, `${d.file}.jpg`);
    
    // Skip if already downloaded
    if (fs.existsSync(outPath)) {
      const stat = fs.statSync(outPath);
      if (stat.size > 1000) {
        console.log(`  SKIP ${d.name} — already exists (${(stat.size/1024).toFixed(0)}KB)`);
        results.skipped.push(d.name);
        continue;
      }
    }

    console.log(`\n--- ${d.name} ---`);
    
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(d.wiki)}&prop=pageimages&format=json&pithumbsize=400`;
      const data = await fetchJson(apiUrl);
      const pages = data.query?.pages;
      
      if (!pages) {
        console.log(`  NO PAGES returned`);
        results.failed.push({ name: d.name, reason: 'No pages' });
        continue;
      }

      const page = Object.values(pages)[0];
      if (page.missing !== undefined) {
        console.log(`  MISSING — Wikipedia article not found: ${d.wiki}`);
        results.failed.push({ name: d.name, reason: 'Article not found' });
        continue;
      }

      const thumb = page.thumbnail?.source;
      if (!thumb) {
        console.log(`  NO IMAGE on Wikipedia page`);
        results.failed.push({ name: d.name, reason: 'No image on page' });
        continue;
      }

      // Get a higher-res version (600px)
      const hiRes = thumb.replace(/\/\d+px-/, '/400px-');
      console.log(`  Downloading: ${hiRes.substring(0, 80)}...`);
      
      await downloadFile(hiRes, outPath);
      const stat = fs.statSync(outPath);
      console.log(`  SUCCESS — ${(stat.size/1024).toFixed(0)}KB`);
      results.success.push({ name: d.name, file: d.file, size: stat.size });
      
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      results.failed.push({ name: d.name, reason: err.message });
      // Clean up partial file
      if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
    }

    // Rate limit: 200ms between requests
    await sleep(200);
  }

  // Summary
  console.log('\n\n========== SUMMARY ==========');
  console.log(`SUCCESS: ${results.success.length}`);
  console.log(`SKIPPED (already exists): ${results.skipped.length}`);
  console.log(`FAILED: ${results.failed.length}`);
  
  if (results.success.length > 0) {
    console.log('\n--- Successfully Downloaded ---');
    results.success.forEach(s => console.log(`  ✓ ${s.name} → /defendants/${s.file}.jpg (${(s.size/1024).toFixed(0)}KB)`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n--- Failed ---');
    results.failed.forEach(f => console.log(`  ✗ ${f.name}: ${f.reason}`));
  }

  // Output imageUrl mapping for easy copy-paste into code
  const allWithImages = [...results.success.map(s => s.file), ...results.skipped.map(name => {
    const d = DEFENDANTS.find(dd => dd.name === name);
    return d ? d.file : null;
  }).filter(Boolean)];
  
  if (allWithImages.length > 0) {
    console.log('\n\n--- imageUrl mapping (for investigationDefendants.ts) ---');
    allWithImages.forEach(f => {
      const d = DEFENDANTS.find(dd => dd.file === f);
      if (d) console.log(`  '${d.name}': '/defendants/${d.file}.jpg',`);
    });
  }
}

main().catch(console.error);
