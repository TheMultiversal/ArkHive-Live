const fs = require('fs');

// Read the catch-all investigation file to extract data
const catchallContent = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');

// Extract catch-all investigation data
const catchallRe = /'([\w-]+)':\s*\{\s*\n\s*title:\s*'([^']+)',\s*\n\s*subtitle:\s*'([^']*)',\s*\n\s*severity:\s*'([^']+)',\s*\n\s*category:\s*'([^']+)',\s*\n\s*date:\s*'([^']+)'/g;
let m;
const investigations = {};
while ((m = catchallRe.exec(catchallContent)) !== null) {
  if (m[1] === 'welcome-to-arkhive') continue;
  investigations[m[1]] = {
    slug: m[1],
    title: m[2],
    subtitle: m[3],
    severity: m[4],
    category: m[5],
    date: m[6],
  };
}
console.log(`Extracted ${Object.keys(investigations).length} catch-all investigations`);

// Also add dedicated investigation pages
const dedicatedDirs = fs.readdirSync('src/app/investigations').filter(d => 
  d !== '[slug]' && d !== 'page.tsx' && fs.statSync(`src/app/investigations/${d}`).isDirectory()
);

console.log(`Found ${dedicatedDirs.length} dedicated investigation dirs`);

for (const slug of dedicatedDirs) {
  if (investigations[slug]) continue;
  try {
    const pageContent = fs.readFileSync(`src/app/investigations/${slug}/page.tsx`, 'utf8');
    const titleMatch = pageContent.match(/title:\s*['"]([^'"]+)['"]/);
    const severityMatch = pageContent.match(/severity:\s*['"]([^'"]+)['"]/);
    const categoryMatch = pageContent.match(/category:\s*['"]([^'"]+)['"]/);
    const dateMatch = pageContent.match(/date:\s*['"]([^'"]+)['"]/);
    
    if (titleMatch) {
      investigations[slug] = {
        slug: slug,
        title: titleMatch[1],
        subtitle: '',
        severity: severityMatch ? severityMatch[1] : 'medium',
        category: categoryMatch ? categoryMatch[1] : 'Government Abuse',
        date: dateMatch ? dateMatch[1] : 'January 1, 2020',
      };
    }
  } catch (e) {}
}

console.log(`Total investigations: ${Object.keys(investigations).length}`);

// Read timeline page and extract existing slugs
const timelineContent = fs.readFileSync('src/app/timeline/page.tsx', 'utf8');
const timelineSlugs = new Set();
const slugRe = /slug:\s*["']([^"']+)["']/g;
while ((m = slugRe.exec(timelineContent)) !== null) {
  timelineSlugs.add(m[1]);
}
console.log(`Existing timeline slugs: ${timelineSlugs.size}`);

// Find missing investigations
const missing = Object.values(investigations).filter(inv => !timelineSlugs.has(inv.slug));
console.log(`Missing from timeline: ${missing.length}`);

function parseSortDate(dateStr) {
  const monthMap = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  const fullMatch = dateStr.match(/(\w+)\s+(\d+),?\s+(\d{4})/);
  if (fullMatch) {
    const month = monthMap[fullMatch[1]] || '01';
    const day = fullMatch[2].padStart(2, '0');
    return `${fullMatch[3]}-${month}-${day}`;
  }
  const monthYear = dateStr.match(/(\w+)\s+(\d{4})/);
  if (monthYear) {
    const month = monthMap[monthYear[1]] || '01';
    return `${monthYear[2]}-${month}-01`;
  }
  const yearOnly = dateStr.match(/(\d{4})/);
  if (yearOnly) return `${yearOnly[1]}-01-01`;
  return '2020-01-01';
}

function mapCategory(cat) {
  const map = {
    'Political Corruption': 'Government Abuse',
    'Government Corruption': 'Government Abuse',
    'Government Abuse': 'Government Abuse',
    'Criminal Justice': 'Criminal Justice',
    'Civil Rights': 'Civil Liberties',
    'Civil Liberties': 'Civil Liberties',
    'Corporate Crime': 'Corporate Malfeasance',
    'Corporate Fraud': 'Corporate Malfeasance',
    'Corporate Malfeasance': 'Corporate Malfeasance',
    'Financial Crime': 'Corporate Malfeasance',
    'Foreign Policy': 'War Crimes',
    'War Crimes': 'War Crimes',
    'Crimes Against Humanity': 'Crimes Against Humanity',
    'Intelligence': 'Government Abuse',
    'Intelligence Abuse': 'Government Abuse',
    'Election Integrity': 'Government Abuse',
    'Healthcare': 'Public Health',
    'Public Health': 'Public Health',
    'Environmental': 'Environmental',
    'Environmental Crime': 'Environmental',
    'Technology': 'Technology & Privacy',
    'Surveillance': 'Technology & Privacy',
    'Technology & Privacy': 'Technology & Privacy',
    'Media': 'Media & Propaganda',
    'Media & Propaganda': 'Media & Propaganda',
    'National Security': 'Government Abuse',
    'Judicial': 'Criminal Justice',
    'Social Justice': 'Civil Liberties',
    'Economic': 'Corporate Malfeasance',
  };
  return map[cat] || cat;
}

function generateTags(inv) {
  const tags = [];
  const title = inv.title.toLowerCase();
  if (title.includes('trump') || title.includes('maga')) tags.push('Trump');
  if (title.includes('cia') || title.includes('intelligence')) tags.push('CIA');
  if (title.includes('fbi')) tags.push('FBI');
  if (title.includes('russia') || title.includes('russian')) tags.push('Russia');
  if (title.includes('election')) tags.push('Elections');
  if (title.includes('war') || title.includes('military')) tags.push('Military');
  if (title.includes('surveillance') || title.includes('privacy')) tags.push('Surveillance');
  if (title.includes('fraud') || title.includes('corruption')) tags.push('Corruption');
  if (title.includes('climate') || title.includes('environment')) tags.push('Environment');
  if (title.includes('police') || title.includes('law enforcement')) tags.push('Law Enforcement');
  if (title.includes('corporate') || title.includes('company')) tags.push('Corporate');
  if (title.includes('health') || title.includes('pharma') || title.includes('medical')) tags.push('Healthcare');
  if (title.includes('drone') || title.includes('assassination')) tags.push('Extrajudicial');
  if (title.includes('media') || title.includes('propaganda')) tags.push('Media');
  if (title.includes('trafficking') || title.includes('pedophile')) tags.push('Human Trafficking');
  if (title.includes('court') || title.includes('judicial') || title.includes('scotus')) tags.push('Judiciary');
  if (title.includes('cover') || title.includes('suppression')) tags.push('Cover-Up');
  if (tags.length === 0) {
    const cat = inv.category.toLowerCase();
    if (cat.includes('government')) tags.push('Government');
    if (cat.includes('corporate')) tags.push('Corporate');
    if (cat.includes('civil')) tags.push('Civil Rights');
    if (cat.includes('war')) tags.push('Conflict');
    if (cat.includes('crime')) tags.push('Crime');
  }
  if (tags.length === 0) tags.push('Investigation');
  return tags;
}

// Build new timeline entries
const newEntries = missing.map(inv => {
  const sortDate = parseSortDate(inv.date);
  const category = mapCategory(inv.category);
  const tags = generateTags(inv);
  const title = inv.title.replace(/'/g, "\\'");
  const description = (inv.subtitle || inv.title).replace(/'/g, "\\'");
  
  return `  {
    date: '${inv.date.replace(/'/g, "\\'")}',
    sortDate: '${sortDate}',
    title: '${title}',
    description: '${description}',
    category: '${category}',
    severity: '${inv.severity}',
    slug: '${inv.slug}',
    tags: [${tags.map(t => `'${t}'`).join(', ')}],
  }`;
});

console.log(`Generated ${newEntries.length} new timeline entries`);

// Find the closing bracket of the timelineEvents array
const arrayEndIdx = timelineContent.indexOf('\n];');
if (arrayEndIdx === -1) {
  console.error('Could not find end of timelineEvents array');
  process.exit(1);
}

let newContent = timelineContent.slice(0, arrayEndIdx);

// Remove duplicate nsa-mass-surveillance
const firstNsa = newContent.indexOf("slug: 'nsa-mass-surveillance'") !== -1 
  ? newContent.indexOf("slug: 'nsa-mass-surveillance'")
  : newContent.indexOf('slug: "nsa-mass-surveillance"');

if (firstNsa !== -1) {
  const secondNsa = newContent.indexOf("slug: 'nsa-mass-surveillance'", firstNsa + 1) !== -1
    ? newContent.indexOf("slug: 'nsa-mass-surveillance'", firstNsa + 1)
    : newContent.indexOf('slug: "nsa-mass-surveillance"', firstNsa + 1);
    
  if (secondNsa !== -1) {
    let braceStart = newContent.lastIndexOf('{', secondNsa);
    let searchBack = braceStart - 1;
    while (searchBack >= 0 && (newContent[searchBack] === ' ' || newContent[searchBack] === '\n' || newContent[searchBack] === ',')) {
      searchBack--;
    }
    let braceEnd = newContent.indexOf('},', secondNsa);
    if (braceEnd !== -1) {
      braceEnd += 2;
      newContent = newContent.slice(0, searchBack + 1) + newContent.slice(braceEnd);
      console.log('Removed duplicate nsa-mass-surveillance entry');
    }
  }
}

// Append new entries
const insertBlock = ',\n\n  // === Additional Investigation Timeline Events ===\n' + newEntries.join(',\n');
newContent = newContent + insertBlock + '\n];' + timelineContent.slice(arrayEndIdx + 3);

fs.writeFileSync('src/app/timeline/page.tsx', newContent);

// Verify
const verifyContent = fs.readFileSync('src/app/timeline/page.tsx', 'utf8');
const allSlugs = [];
const dupRe = /slug:\s*["']([^"']+)["']/g;
while ((m = dupRe.exec(verifyContent)) !== null) {
  allSlugs.push(m[1]);
}
const uniqueSlugs = new Set(allSlugs);
console.log(`Final timeline entries: ${allSlugs.length}, unique slugs: ${uniqueSlugs.size}`);
const dupes = allSlugs.filter((s, i) => allSlugs.indexOf(s) !== i);
if (dupes.length > 0) {
  console.log('Duplicates:', [...new Set(dupes)]);
} else {
  console.log('No duplicates');
}
