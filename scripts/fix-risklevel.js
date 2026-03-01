const fs = require('fs');
const files = [
  'src/app/entities/individuals/page.tsx',
  'src/app/entities/corporations/page.tsx',
];
for (const f of files) {
  let c = fs.readFileSync(f, 'utf-8');
  const before = (c.match(/riskLevel: "medium"/g) || []).length;
  c = c.replaceAll('riskLevel: "medium"', 'riskLevel: "moderate"');
  fs.writeFileSync(f, c);
  console.log(`${f}: fixed ${before} "medium" -> "moderate"`);
}
