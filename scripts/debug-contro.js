const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const idx = c.indexOf("'annie-farmer': {");
if (idx === -1) { console.log('NOT FOUND'); process.exit(1); }
const block = c.substring(idx, idx + 3000);
const lines = block.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('controversies')) {
    console.log('L' + i + ':' + JSON.stringify(lines[i]));
    // Print surrounding lines
    for (let j = i - 1; j <= i + 3; j++) {
      if (j >= 0 && j < lines.length) console.log('  context L' + j + ':' + JSON.stringify(lines[j]));
    }
    break;
  }
}
