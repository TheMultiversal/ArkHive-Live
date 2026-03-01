const fs = require('fs');
const path = 'src/app/entities/organizations/[slug]/page.tsx';
let f = fs.readFileSync(path, 'utf8');

// These 6 have multiline empty sources: [\n    ]
// Based on context: les-wexner-foundation (before clinton-foundation), clinton-foundation (before cfr), cfr, edge-foundation, nyas (before united-nations), and the last org before closing

const sourceMappings = {
  'les-wexner-foundation': [
    { title: 'Wexner Foundation Official Website', url: 'https://www.wexnerfoundation.org/' },
    { title: 'Columbus Dispatch - Wexner Foundation Epstein Ties', url: 'https://www.dispatch.com/story/news/2019/09/12/les-wexner-and-jeffrey-epstein/3726892007/' },
  ],
  'clinton-foundation': [
    { title: 'Clinton Foundation Official Website', url: 'https://www.clintonfoundation.org/' },
    { title: 'AP - Clinton Foundation Donors', url: 'https://apnews.com/article/clinton-foundation-donors-2016' },
  ],
  'cfr': [
    { title: 'Council on Foreign Relations Official Website', url: 'https://www.cfr.org/' },
    { title: 'CFR History and Mission', url: 'https://www.cfr.org/about' },
  ],
  'edge-foundation': [
    { title: 'Edge.org Official Website', url: 'https://www.edge.org/' },
    { title: 'New York Times - John Brockman and Edge Foundation', url: 'https://www.nytimes.com/2019/09/06/business/media/john-brockman-edge-jeffrey-epstein.html' },
  ],
  'nyas': [
    { title: 'New York Academy of Sciences Official Website', url: 'https://www.nyas.org/' },
    { title: 'NYAS History', url: 'https://www.nyas.org/about/' },
  ],
  'terramar': [
    { title: 'Reuters - Ghislaine Maxwell Terramar Project', url: 'https://www.reuters.com/article/us-people-ghislaine-maxwell-terramar-idUSKCN24J2AU' },
    { title: 'Independent - Terramar Project Dissolved After Epstein Arrest', url: 'https://www.independent.co.uk/news/world/americas/ghislaine-maxwell-terramar-project-jeffrey-epstein-ocean-charity-a9006576.html' },
  ],
};

// Find and replace empty sources: [] patterns (single-line or multiline)
const re = /sources:\s*\[\s*\]/g;
let match;
let replacements = [];

while (match = re.exec(f)) {
  const ctx = f.substring(Math.max(0, match.index - 500), match.index);
  let slug = null;
  const lines = ctx.split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const sm = lines[i].match(/['"]([\w-]+)['"]\s*:\s*\{/);
    if (sm) { slug = sm[1]; break; }
  }
  if (slug) {
    replacements.push({ offset: match.index, length: match[0].length, slug });
  }
}

console.log('Found slugs:', replacements.map(r => r.slug));

// Apply in reverse order to preserve offsets
replacements.reverse();
for (const r of replacements) {
  const sources = sourceMappings[r.slug];
  if (sources) {
    const sourcesStr = sources.map(s => 
      `{ title: '${s.title}', url: '${s.url}' }`
    ).join(',\n      ');
    const replacement = `sources: [\n      ${sourcesStr},\n    ]`;
    f = f.substring(0, r.offset) + replacement + f.substring(r.offset + r.length);
    console.log(`Fixed sources for: ${r.slug}`);
  } else {
    console.log(`No mapping for: ${r.slug}`);
  }
}

fs.writeFileSync(path, f, 'utf8');

// Verify
const check = fs.readFileSync(path, 'utf8');
const remaining = (check.match(/sources:\s*\[\s*\]/g) || []).length;
const remainingML = (check.match(/sources:\s*\[\s*\]/g) || []).length;
console.log(`Remaining empty sources (single-line): ${remaining}`);
console.log(`Remaining empty sources (multi-line): ${remainingML}`);
