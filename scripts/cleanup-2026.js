const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'individuals');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

let totalRemoved = 0;

files.forEach(f => {
  const fp = path.join(dir, f);
  const content = fs.readFileSync(fp, 'utf8');
  const before = (content.match(/2026-/g) || []).length;
  if (!before) return;

  const lines = content.split('\n');
  const cleaned = lines.filter(line => !line.match(/'2026-\d{2}-\d{2}'/));
  const removed = lines.length - cleaned.length;
  totalRemoved += removed;

  fs.writeFileSync(fp, cleaned.join('\n'), 'utf8');
  console.log(`${f}: removed ${removed} lines (had ${before} refs)`);
});

console.log(`\nTotal lines removed: ${totalRemoved}`);

// Verify
let remaining = 0;
files.forEach(f => {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const m = c.match(/2026-/g);
  if (m) remaining += m.length;
});
console.log(`Remaining 2026 refs: ${remaining}`);
