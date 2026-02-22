const fs = require('fs');
const c = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
const missing = [
  'native-american-genocide','japanese-internment','nsa-mass-surveillance',
  'gulf-of-tonin','cia-coups','kissinger-crimes','dark-money-politics',
  'supreme-court-ethics','iraq-war-lies','cia-torture-program',
  'drone-assassination-program','operation-condor','chile-coup','iran-coup',
  'project-2025','federalist-society','vietnam-war-crimes','abu-ghraib',
  'indian-boarding-schools','bush-v-gore','2008-financial-crisis',
  'mass-incarceration','health-insurance-deaths','corporate-homicide',
  'patriot-act','guantanamo-bay','private-prison-industry'
];
for (const s of missing) {
  const has = c.includes("'" + s + "'") || c.includes('"' + s + '"');
  console.log(has ? 'HAS' : 'MISS', s);
}
