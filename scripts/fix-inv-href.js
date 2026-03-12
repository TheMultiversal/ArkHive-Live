const fs = require('fs');
const path = require('path');

// Find affiliations missing href in investigation files
for (let c = 97; c <= 122; c++) {
  const letter = String.fromCharCode(c);
  const f = path.join('src/data/investigations', letter + '.ts');
  if (!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');
  
  // Find affiliation objects missing href
  // Pattern: { id: '...', name: '...', type: '...', relationship: '...' } without href
  const missingHref = content.match(/\{\s*id:\s*'[^']*',\s*name:\s*'[^']*',\s*type:\s*'(individual|agency|corporation|organization)',\s*relationship:\s*'[^']*'\s*\}/g);
  if (missingHref) {
    console.log(letter + '.ts: ' + missingHref.length + ' affiliations missing href');
    // Fix them by adding href based on type and name
    missingHref.forEach(match => {
      const typeMatch = match.match(/type:\s*'([^']*)'/);
      const nameMatch = match.match(/name:\s*'([^']*)'/);
      if (typeMatch && nameMatch) {
        const type = typeMatch[1];
        const name = nameMatch[1];
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const typePlural = type + 's';
        const href = '/entities/' + typePlural + '/' + slug;
        const fixed = match.replace(/\}$/, ", href: '" + href + "' }");
        content = content.replace(match, fixed);
      }
    });
    fs.writeFileSync(f, content, 'utf8');
    console.log('  -> fixed');
  }
}
