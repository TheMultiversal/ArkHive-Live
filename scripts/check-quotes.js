const fs = require('fs');
const f = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const lines = f.split('\n');

// Simple check: count single quotes per line, if odd (after excluding escaped ones), flag it
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Remove escaped quotes
  const clean = line.replace(/\\'/g, '');
  // Count remaining single quotes
  const count = (clean.match(/'/g) || []).length;
  if (count % 2 !== 0) {
    console.log(`Line ${i + 1} (${count} quotes): ${line.trim().substring(0, 120)}`);
  }
}
