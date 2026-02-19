const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'link-check-results.json');
if (!fs.existsSync(p)) {
  console.error('link-check-results.json not found');
  process.exit(2);
}
const data = JSON.parse(fs.readFileSync(p, 'utf8'));
const broken = (data && data.summary && data.summary.broken) || (data.broken && data.broken.length) || 0;
console.log(`link-check: ${broken} broken links`);
if (broken > 0) process.exit(1);
process.exit(0);
