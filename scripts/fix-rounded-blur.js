const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !['node_modules', '.next', '.git'].includes(file)) {
      results = results.concat(walkDir(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  }
  return results;
}

const srcDir = path.join(__dirname, '..', 'src');
const files = walkDir(srcDir);
let totalFixed = 0;
let filesChanged = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;

  // Remove rounded-lg, rounded-xl, rounded-2xl, rounded-md (but NOT rounded-full for now)
  content = content.replace(/\brounded-(lg|xl|2xl|md)\b/g, '');

  // Remove backdrop-blur variants
  content = content.replace(/\bbackdrop-blur(-sm|-md|-lg|-xl|-2xl)?\b/g, '');

  // Clean up double/triple spaces
  content = content.replace(/ {2,}/g, ' ');

  // Fix className=" leading space
  content = content.replace(/className=" /g, 'className="');

  // Fix trailing space before quote
  content = content.replace(/ "/g, '"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    filesChanged++;
    console.log('Fixed:', path.relative(srcDir, file));
  }
}

console.log('\nDone:', filesChanged, 'files updated');
