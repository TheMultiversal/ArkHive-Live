const fs = require('fs');
const file = 'src/app/entities/individuals/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Find the insertion point - before the closing ];
const marker = '\n];\n';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('ERROR: Could not find ];');
  process.exit(1);
}

const entries = `
  {
    id: "bradley-edwards-ep",
    slug: "bradley-edwards",
    name: "Bradley Edwards",
    type: "individual" as const,
    description: "Florida attorney who represented 50+ Epstein victims, filed CVRA lawsuit challenging 2008 plea deal, authored Relentless Pursuit",
    role: "Victims Rights Attorney",
    investigationCount: 1,
    riskLevel: "low" as const,
  },
  {
    id: "steven-donziger-ep",
    slug: "steven-donziger",
    name: "Steven Donziger",
    type: "individual" as const,
    description: "Environmental attorney who won $9.5B judgment against Chevron, then imprisoned in unprecedented corporate retaliation campaign",
    role: "Environmental Attorney vs Chevron",
    investigationCount: 1,
    riskLevel: "high" as const,
  },`;

content = content.substring(0, idx) + entries + content.substring(idx);
fs.writeFileSync(file, content);
console.log('Added bradley-edwards and steven-donziger to listing page');
