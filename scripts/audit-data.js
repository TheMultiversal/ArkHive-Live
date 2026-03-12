const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'individuals');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

let totalProfiles = 0, emptyTimeline = 0, emptySources = 0, emptyAssoc = 0;
let totalLines = 0;

files.forEach(f => {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = c.split('\n').length;
  totalLines += lines;
  const profiles = (c.match(/export const/g) || []).length;
  totalProfiles += profiles;
  emptyTimeline += (c.match(/timeline:\s*\[\s*\]/g) || []).length;
  emptySources += (c.match(/sources:\s*\[\s*\]/g) || []).length;
  emptyAssoc += (c.match(/associations:\s*\[\s*\]/g) || []).length;
});

console.log('=== Data Audit ===');
console.log(`Profiles: ${totalProfiles}`);
console.log(`Total lines: ${totalLines}`);
console.log(`Empty timelines: ${emptyTimeline}`);
console.log(`Empty sources: ${emptySources}`);
console.log(`Empty associations: ${emptyAssoc}`);
console.log(`2026 refs: ${files.reduce((a,f) => a + ((fs.readFileSync(path.join(dir,f),'utf8').match(/2026-/g))||[]).length, 0)}`);
console.log(`ArkHive refs: ${files.reduce((a,f) => a + ((fs.readFileSync(path.join(dir,f),'utf8').match(/ArkHive/gi))||[]).length, 0)}`);
