// fix-sources.js
// 1. Convert bare URL strings in sources arrays to proper objects
// 2. Normalize { name: ... } to { title: ... } format for consistency
const fs = require('fs');
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Map common URLs to proper source names and types
const URL_MAP = {
  'propublica.org': { title: 'ProPublica Investigation Database', type: 'Investigation' },
  'sec.gov': { title: 'SEC Litigation Releases', type: 'Government' },
  'justice.gov': { title: 'DOJ Public Records', type: 'Government' },
  'gao.gov': { title: 'Government Accountability Office', type: 'Government' },
  'congress.gov': { title: 'Congressional Record', type: 'Government' },
  'nytimes.com': { title: 'New York Times Investigation', type: 'Investigation' },
  'washingtonpost.com': { title: 'Washington Post Investigation', type: 'Investigation' },
  'reuters.com': { title: 'Reuters Investigation', type: 'Investigation' },
  'theguardian.com': { title: 'The Guardian Investigation', type: 'Investigation' },
  'bbc.com': { title: 'BBC Investigation', type: 'Investigation' },
  'bbc.co.uk': { title: 'BBC Investigation', type: 'Investigation' },
  'opensecrets.org': { title: 'OpenSecrets Financial Disclosures', type: 'Financial Record' },
  'transparency.org': { title: 'Transparency International', type: 'Report' },
  'icij.org': { title: 'ICIJ Investigations', type: 'Investigation' },
  'aclu.org': { title: 'ACLU Reports', type: 'Report' },
  'hrw.org': { title: 'Human Rights Watch', type: 'Report' },
  'amnesty.org': { title: 'Amnesty International', type: 'Report' },
  'fbi.gov': { title: 'FBI Records', type: 'Government' },
  'irs.gov': { title: 'IRS Records', type: 'Government' },
  'fdic.gov': { title: 'FDIC Records', type: 'Government' },
  'epa.gov': { title: 'EPA Records', type: 'Government' },
  'oig.hhs.gov': { title: 'HHS Inspector General', type: 'Government' },
  'cdc.gov': { title: 'CDC Records', type: 'Government' },
  'census.gov': { title: 'U.S. Census Bureau', type: 'Government' },
  'whitehouse.gov': { title: 'White House Records', type: 'Government' },
  'supremecourt.gov': { title: 'Supreme Court Records', type: 'Government' },
  'courtlistener.com': { title: 'Court Records Archive', type: 'Court Filing' },
};

function getSourceInfo(url) {
  for (const [domain, info] of Object.entries(URL_MAP)) {
    if (url.includes(domain)) return info;
  }
  // Extract domain name for title
  try {
    const hostname = new URL(url).hostname.replace('www.', '');
    const parts = hostname.split('.');
    const name = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    return { title: `${name} Records`, type: 'Reference' };
  } catch {
    return { title: 'Source Document', type: 'Reference' };
  }
}

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  let bareFixed = 0;
  let nameFixed = 0;

  // Fix bare URL strings in sources arrays
  // Pattern: sources: [ ... 'https://...' ... ]
  // Replace 'https://...' with { title: '...', url: 'https://...', type: '...' }
  src = src.replace(/sources:\s*\[([\s\S]*?)\]/g, (fullMatch, contents) => {
    let newContents = contents;
    // Find bare strings that are URLs
    newContents = newContents.replace(/(?<!\{[^}]*)'(https?:\/\/[^']+)'/g, (m, url) => {
      const info = getSourceInfo(url);
      bareFixed++;
      return `{ title: '${info.title}', url: '${url}', type: '${info.type}' }`;
    });
    return `sources: [${newContents}]`;
  });

  // Fix { name: '...' } to { title: '...' } in sources
  // Match: { name: 'X', url: 'Y' }
  src = src.replace(/\{\s*name:\s*'((?:[^'\\]|\\.)*)'\s*,\s*url:\s*'((?:[^'\\]|\\.)*)'\s*\}/g, (m, name, url) => {
    nameFixed++;
    return `{ title: '${name}', url: '${url}', type: 'Reference' }`;
  });

  if (bareFixed > 0 || nameFixed > 0) {
    fs.writeFileSync(filePath, src, 'utf8');
    console.log(`${fileName}: ${bareFixed} bare URLs fixed, ${nameFixed} name->title conversions`);
  }
  return { bareFixed, nameFixed };
}

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts') && !['index.ts','types.ts','categories.ts','documents.ts','moneyTrails.ts','statutes.ts'].includes(f));

let totalBare = 0;
let totalName = 0;

for (const f of files) {
  const { bareFixed, nameFixed } = processFile(path.join(DATA_DIR, f));
  totalBare += bareFixed;
  totalName += nameFixed;
}

console.log(`\nTotal: ${totalBare} bare URLs fixed, ${totalName} name->title fixes`);
