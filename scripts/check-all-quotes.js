const fs = require('fs');

const files = [
  'src/app/investigations/[slug]/page.tsx',
  'src/app/entities/individuals/[slug]/page.tsx',
  'src/app/entities/organizations/[slug]/page.tsx',
];

for (const file of files) {
  const f = fs.readFileSync(file, 'utf8');
  const lines = f.split('\n');
  let issues = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const clean = line.replace(/\\'/g, '');
    const count = (clean.match(/'/g) || []).length;
    if (count % 2 !== 0) {
      if (issues < 5) console.log(`${file} Line ${i + 1}: ${line.trim().substring(0, 120)}`);
      issues++;
    }
  }
  if (issues > 0) console.log(`${file}: ${issues} lines with unbalanced quotes`);
  else console.log(`${file}: CLEAN`);
}
