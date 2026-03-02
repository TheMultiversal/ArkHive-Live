const fs = require('fs');

let c = fs.readFileSync('src/data/categories.ts', 'utf8');

// Fix truncated names - use escaped apostrophes for names with apostrophes
c = c.replace(/name: 'Dinesh D'/g, "name: 'Dinesh D\\'Souza'");
c = c.replace(/name: 'William O'/g, "name: 'William O\\'Neal'");
c = c.replace(/name: 'Michael O'/g, "name: 'Michael O\\'Leary'");

fs.writeFileSync('src/data/categories.ts', c);
console.log('Fixed truncated names');

// Verify
const content = fs.readFileSync('src/data/categories.ts', 'utf8');
['dinesh-dsouza', 'william-oneal', 'michael-oleary'].forEach(slug => {
  const match = content.match(new RegExp(`slug: '${slug}'.*?name: '([^']*(?:\\\\'[^']*)?)'`));
  if (match) console.log(slug, '=>', match[1]);
});
