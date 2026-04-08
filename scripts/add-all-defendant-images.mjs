/**
 * Add imageUrl to ALL defendants in investigationDefendants.ts that are missing one.
 * Checks for both .jpg and .svg files in public/defendants/.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defFile = path.join(__dirname, '..', 'src', 'data', 'investigations', 'investigationDefendants.ts');
const imgDir = path.join(__dirname, '..', 'public', 'defendants');

// Build a map of available images: slug → extension
const imgMap = {};
for (const file of fs.readdirSync(imgDir)) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  // Prefer .jpg over .svg if both exist
  if (!imgMap[base] || ext === '.jpg') {
    imgMap[base] = ext;
  }
}

// Slug overrides for names that don't slugify cleanly
const slugOverrides = {
  'Countrywide Financial / Angelo Mozilo': 'angelo-mozilo',
  'Bear Stearns / Ralph Cioffi & Matthew Tannin': 'bear-stearns',
  'AIG / Joseph Cassano': 'aig-joseph-cassano',
  'Bank of America / Countrywide': 'bank-of-america-countrywide',
  'Columbia/HCA Healthcare': 'columbia-hca-healthcare',
  'Facebook/Meta': 'facebook-meta',
  'Richard Nixon (posthumous)': 'richard-nixon',
  'Citizens United (organizational)': 'citizens-united',
  'Internet Research Agency (IRA)': 'internet-research-agency',
  'GRU Unit 26165 (12 officers)': 'gru-unit-26165',
  'GRU Officers (12)': 'gru-officers',
  'DEA (institutional)': 'dea',
  'US Army (institutional)': 'us-army',
};

function slugify(name) {
  if (slugOverrides[name]) return slugOverrides[name];
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

let content = fs.readFileSync(defFile, 'utf-8');
let added = 0;
let alreadyHas = 0;
let notFound = 0;

// Find all lines with name: 'XXX' but no imageUrl
const lines = content.split('\n');
const newLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const nameMatch = line.match(/name:\s*'([^']+)'/);

  if (nameMatch && !line.includes('imageUrl')) {
    const name = nameMatch[1];
    const slug = slugify(name);

    if (imgMap[slug]) {
      const ext = imgMap[slug];
      const imageUrl = `/defendants/${slug}${ext}`;
      // Insert imageUrl after name
      const newLine = line.replace(
        /name:\s*'([^']+)'/,
        `name: '$1', imageUrl: '${imageUrl}'`
      );
      newLines.push(newLine);
      added++;
      console.log(`+ ${name} → ${imageUrl}`);
    } else {
      newLines.push(line);
      notFound++;
      console.log(`? No image for: ${name} (slug: ${slug})`);
    }
  } else if (nameMatch && line.includes('imageUrl')) {
    newLines.push(line);
    alreadyHas++;
  } else {
    newLines.push(line);
  }
}

content = newLines.join('\n');
fs.writeFileSync(defFile, content);

console.log(`\n=== SUMMARY ===`);
console.log(`Already had imageUrl: ${alreadyHas}`);
console.log(`Added imageUrl: ${added}`);
console.log(`No image found: ${notFound}`);
console.log(`Total defendants processed: ${alreadyHas + added + notFound}`);
