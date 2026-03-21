import db from '../src/data/investigations/index.ts';
const slugs = Object.keys(db).sort();
for (const s of slugs) {
  const inv = db[s];
  const hasMT = inv.moneyTrail && inv.moneyTrail.length > 0 ? ' [HAS_MT]' : '';
  console.log(`${s}|${inv.category}|${inv.title.substring(0,60)}${hasMT}`);
}
console.log(`\nTOTAL: ${slugs.length}`);
console.log(`WITH MT: ${slugs.filter(s => db[s].moneyTrail && db[s].moneyTrail!.length > 0).length}`);
console.log(`WITHOUT MT: ${slugs.filter(s => !db[s].moneyTrail || db[s].moneyTrail!.length === 0).length}`);
