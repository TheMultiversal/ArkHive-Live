const fs = require('fs');
const path = require('path');

// Scan all investigation pages for entity hrefs
const invDir = 'src/app/investigations';
const invFiles = [];
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkDir(p);
    else if (e.isFile() && p.endsWith('page.tsx')) invFiles.push(p);
  }
}
walkDir(invDir);

const hrefRe = /href:\s*['"]\/entities\/([^\/]+)\/([^'\"]+)['"]/g;
const found = {};
for (const file of invFiles) {
  const txt = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = hrefRe.exec(txt)) !== null) {
    const type = m[1];
    const slug = m[2];
    if (!found[type]) found[type] = new Set();
    found[type].add(slug);
  }
}

let totalStubs = 0;
for (const type of Object.keys(found)) {
  const set = found[type];
  const catchall = `src/app/entities/${type}/[slug]/page.tsx`;
  if (!fs.existsSync(catchall)) {
    console.log(`No catchall for type ${type}, skipping`);
    continue;
  }
  let content = fs.readFileSync(catchall, 'utf8');
  let additions = 0;
  for (const slug of set) {
    if (content.includes(`'${slug}'`)) continue;
    // create skeleton depending on type
    let stub = `  '${slug}': {
    name: '${slug.replace(/-/g,' ')}',
`;
    if (type === 'individuals') {
      stub += `    title: '',
    role: '',
    riskLevel: 'low',
    description: '',
    education: [],
    affiliations: [],
    controversies: [],
    relatedInvestigations: [],
    timeline: [],
  }`;
    } else if (type === 'agencies') {
      stub += `    acronym: '',
    type: '',
    riskLevel: 'low',
    description: '',
    founded: '',
    headquarters: '',
    employees: '',
    budget: '',
    jurisdiction: '',
    controversies: [],
    relatedInvestigations: [],
    keyFigures: [],
  }`;
    } else if (type === 'corporations') {
      stub += `    ticker: '',
    industry: '',
    riskLevel: 'low',
    description: '',
    founded: '',
    headquarters: '',
    employees: '',
    revenue: '',
    ceo: '',
    controversies: [],
    subsidiaries: [],
    relatedInvestigations: [],
  }`;
    } else if (type === 'organizations') {
      stub += `    type: '',
    riskLevel: 'low',
    description: '',
    founded: '',
    headquarters: '',
    controversies: [],
    relatedInvestigations: [],
    keyFigures: [],
    timeline: [],
  }`;
    } else {
      stub += `    // unknown type stub
  }`;
    }
    // append stub before closing }; of data object
    const idx = content.lastIndexOf('};');
    if (idx !== -1) {
      content = content.slice(0, idx) + stub + ',\n' + content.slice(idx);
      additions++;
      totalStubs++;
    }
  }
  if (additions > 0) {
    fs.writeFileSync(catchall, content);
    console.log(`Added ${additions} stubs to ${type}`);
  }
}

console.log(`Total stubs created: ${totalStubs}`);
