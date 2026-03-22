// Find entries missing eventOriginDate
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let count = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  // Find all entry slugs
  const regex = /  '([a-z0-9-]+)':\s*\{/g;
  let m;
  const slugs = [];
  while ((m = regex.exec(content)) !== null) {
    slugs.push({ slug: m[1], index: m.index });
  }
  for (let i = 0; i < slugs.length; i++) {
    const start = slugs[i].index;
    const end = i + 1 < slugs.length ? slugs[i + 1].index : content.length;
    const chunk = content.substring(start, end);
    if (!chunk.includes('eventOriginDate')) {
      count++;
      console.log(`${file}:${slugs[i].slug}`);
    }
  }
}
console.log(`\nTotal missing: ${count}`);
