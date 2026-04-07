/**
 * Adds imageUrl fields to investigationDefendants.ts
 * for all defendants that have downloaded portrait images.
 * 
 * Usage: node scripts/add-defendant-image-urls.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEF_FILE = path.join(__dirname, '..', 'src', 'data', 'investigations', 'investigationDefendants.ts');
const IMG_DIR = path.join(__dirname, '..', 'public', 'defendants');

// Map defendant names to image file slugs
// Some defendants appear multiple times across investigations
const NAME_TO_IMAGE = {
  'Jho Low': 'jho-low',
  'Najib Razak': 'najib-razak',
  'Tim Leissner': 'tim-leissner',
  'Roger Ng': 'roger-ng',
  'Angelo Mozilo': 'angelo-mozilo',
  'Ralph Cioffi': 'ralph-cioffi',
  'Matthew Tannin': 'matthew-tannin',
  'Kareem Serageldin': 'kareem-serageldin',
  'Donald Trump': 'donald-trump',
  'Rudy Giuliani': 'rudy-giuliani',
  'John Eastman': 'john-eastman',
  'Sidney Powell': 'sidney-powell',
  'Kenneth Chesebro': 'kenneth-chesebro',
  'Mark Meadows': 'mark-meadows',
  'Jeffrey Clark': 'jeffrey-clark',
  'Paul Manafort': 'paul-manafort',
  'Michael Flynn': 'michael-flynn',
  'Roger Stone': 'roger-stone',
  'Rick Gates': 'rick-gates',
  'Nicholas Slatten': 'nicholas-slatten',
  'Paul Slough': 'paul-slough',
  'Evan Liberty': 'evan-liberty',
  'Dustin Heard': 'dustin-heard',
  'Erik Prince': 'erik-prince',
  'Dennis Muilenburg': 'dennis-muilenburg',
  'Mark Forkner': 'mark-forkner',
  'Warren Anderson': 'warren-anderson',
  'Linda Fairstein': 'linda-fairstein',
  'Elizabeth Lederer': 'elizabeth-lederer',
  'Cardinal Bernard Law': 'bernard-law',
  'Cardinal Theodore McCarrick': 'theodore-mccarrick',
  'Michael Cohen': 'michael-cohen',
  'Allen Weisselberg': 'allen-weisselberg',
  'David Pecker': 'david-pecker',
  'Donald Trump Jr.': 'donald-trump-jr',
  'Eric Trump': 'eric-trump',
  'James Mitchell': 'james-mitchell',
  'Bruce Jessen': 'bruce-jessen',
  'Gina Haspel': 'gina-haspel',
  'Jose Rodriguez': 'jose-rodriguez',
  'Alex Jones': 'alex-jones',
  'Jeffrey Skilling': 'jeffrey-skilling',
  'Kenneth Lay': 'kenneth-lay',
  'Andrew Fastow': 'andrew-fastow',
  'John Stumpf': 'john-stumpf',
  'Carrie Tolstedt': 'carrie-tolstedt',
  'Oliver North': 'oliver-north',
  'John Poindexter': 'john-poindexter',
  'Caspar Weinberger': 'caspar-weinberger',
  'Elliott Abrams': 'elliott-abrams',
  'Payton Gendron': 'payton-gendron',
  'Dylann Roof': 'dylann-roof',
  'Travis McMichael': 'travis-mcmichael',
  'Gregory McMichael': 'gregory-mcmichael',
  'William Bryan': 'william-bryan',
  'Jackie Johnson': 'jackie-johnson',
  'Amber Guyger': 'amber-guyger',
  'Steve Bannon': 'steve-bannon',
  'Brian Kolfage': 'brian-kolfage',
  'Andrew Badolato': 'andrew-badolato',
  'Timothy Shea': 'timothy-shea',
  'Misty Hampton': 'misty-hampton',
  'Cathy Latham': 'cathy-latham',
  'Clarence Thomas': 'clarence-thomas',
  'Harlan Crow': 'harlan-crow',
  'Samuel Alito': 'samuel-alito',
  'Richard Burr': 'richard-burr',
  'Kelly Loeffler': 'kelly-loeffler',
  'Jon Burge': 'jon-burge',
  'Rick Scott': 'rick-scott',
  'Bill Cosby': 'bill-cosby',
  'Ivan Boesky': 'ivan-boesky',
  'Michael Milken': 'michael-milken',
  'Dennis Levine': 'dennis-levine',
  'James Holmes': 'james-holmes',
  'Joseph Cassano': 'joseph-cassano',
  'Hank Greenberg': 'hank-greenberg',
  'Sam Bankman-Fried': 'sam-bankman-fried',
  'Caroline Ellison': 'caroline-ellison',
  'Gary Wang': 'gary-wang',
  'Changpeng Zhao': 'changpeng-zhao',
  'Do Kwon': 'do-kwon',
  'Alex Mashinsky': 'alex-mashinsky',
  'Jeffrey Epstein': 'jeffrey-epstein',
  'Ghislaine Maxwell': 'ghislaine-maxwell',
  'Robert Bowers': 'robert-bowers',
  'J. Edgar Hoover': 'j-edgar-hoover',
  'Bull Connor': 'bull-connor',
  'Byron De La Beckwith': 'byron-de-la-beckwith',
  'Richard Nixon': 'richard-nixon',
  'Patrick Crusius': 'patrick-crusius',
  'James Fields Jr.': 'james-fields-jr',
  'William Calley': 'william-calley',
  'Ernest Medina': 'ernest-medina',
  'John Cutler': 'john-cutler',
  'Derek Chauvin': 'derek-chauvin',
  'Jason Van Dyke': 'jason-van-dyke',
  'Daniel Pantaleo': 'daniel-pantaleo',
  'Maria Butina': 'maria-butina',
  'Tom Hayes': 'tom-hayes',
  'Alexander Nix': 'alexander-nix',
  'Aleksandr Kogan': 'aleksandr-kogan',
  'Bob Menendez': 'bob-menendez',
  'Rod Blagojevich': 'rod-blagojevich',
};

// Check which images actually exist
const availableImages = new Set();
for (const [name, slug] of Object.entries(NAME_TO_IMAGE)) {
  const imgPath = path.join(IMG_DIR, `${slug}.jpg`);
  if (fs.existsSync(imgPath) && fs.statSync(imgPath).size > 1000) {
    availableImages.add(name);
  }
}

console.log(`Available images: ${availableImages.size} of ${Object.keys(NAME_TO_IMAGE).length}`);

// Read the file
let content = fs.readFileSync(DEF_FILE, 'utf-8');
let addedCount = 0;
let skippedCount = 0;

// For each available image, find and update matching defendant entries
for (const name of availableImages) {
  const slug = NAME_TO_IMAGE[name];
  const imageUrl = `/defendants/${slug}.jpg`;
  
  // Skip if already has imageUrl for this defendant
  // Pattern: { name: 'Defendant Name', ... imageUrl: '/defendants/...' ... }
  
  // Escape special regex characters in name
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Find all lines with this defendant's name
  const regex = new RegExp(`(\\{ name: '${escapedName}',)`, 'g');
  
  let match;
  let offset = 0;
  const newContent = content.replace(regex, (fullMatch) => {
    // Check if imageUrl already present on this line
    // Get the rest of the line after the match
    const lineStart = content.lastIndexOf('\n', content.indexOf(fullMatch, offset)) + 1;
    const lineEnd = content.indexOf('\n', content.indexOf(fullMatch, offset));
    const line = content.substring(lineStart, lineEnd);
    
    if (line.includes('imageUrl:')) {
      skippedCount++;
      return fullMatch;
    }
    
    addedCount++;
    // Add imageUrl after the name field
    return `{ name: '${name}', imageUrl: '${imageUrl}',`;
  });
  
  content = newContent;
}

// Write the updated file
fs.writeFileSync(DEF_FILE, content, 'utf-8');

console.log(`\nDone!`);
console.log(`  Added imageUrl: ${addedCount}`);
console.log(`  Skipped (already has imageUrl): ${skippedCount}`);
console.log(`  Defendants without available image: ${Object.keys(NAME_TO_IMAGE).length - availableImages.size}`);
