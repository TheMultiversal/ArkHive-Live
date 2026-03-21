const fs = require('fs');
const dir = 'src/data/investigations';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !['index.ts','types.ts','moneyTrails.ts'].includes(f));
let total = 0, reallyMissing = 0;
for (const f of files) {
  const content = fs.readFileSync(dir + '/' + f, 'utf8');
  const regex = /^\s{2}'([a-z0-9][a-z0-9-]*)'\s*:\s*\{/gm;
  let m;
  while ((m = regex.exec(content)) !== null) {
    total++;
    const slug = m[1];
    const chunk = content.substring(m.index, m.index + 2000);
    const hasTitle = chunk.match(/title:\s*['"]/);
    const hasSeverity = chunk.match(/severity:\s*['"]/);
    const hasCategory = chunk.match(/category:\s*['"]/);
    if (!hasTitle || !hasSeverity || !hasCategory) {
      reallyMissing++;
      console.log(slug + ': missing ' + (!hasTitle ? 'title ' : '') + (!hasSeverity ? 'severity ' : '') + (!hasCategory ? 'category ' : ''));
    }
  }
}
console.log('\nTotal: ' + total + ', truly missing fields: ' + reallyMissing);
