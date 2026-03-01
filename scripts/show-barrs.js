const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Print both profiles to compare
for (const slug of ['bill-barr', 'william-barr']) {
  const idx = content.indexOf("'" + slug + "': {");
  if (idx === -1) { console.log(slug + ': NOT FOUND'); continue; }
  
  // Find the end of this profile (next profile start)
  const nextProfile = content.indexOf("\n  },\n", idx + 10);
  const end = nextProfile !== -1 ? nextProfile + 5 : idx + 5000;
  
  console.log('=== ' + slug + ' (chars: ' + (end - idx) + ') ===');
  console.log(content.substring(idx, end));
  console.log('\n\n');
}
