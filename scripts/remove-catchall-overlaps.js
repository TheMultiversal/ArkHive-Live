const fs = require('fs');
const path = require('path');

const invDir = path.join(__dirname, '..', 'src', 'app', 'investigations');

// Get dedicated investigation folders
const folders = fs.readdirSync(invDir)
  .filter(f => f !== '[slug]' && f !== 'page.tsx' && fs.statSync(path.join(invDir, f)).isDirectory());

// Get catch-all data
const catchAllFile = path.join(invDir, '[slug]', 'page.tsx');
const catchAll = fs.readFileSync(catchAllFile, 'utf8');

// Extract all slug keys from the investigationData object
const slugs = [];
const re = /^\s+['"]([a-z0-9-]+)['"]\s*:\s*\{/gm;
let m;
while ((m = re.exec(catchAll)) !== null) {
  slugs.push(m[1]);
}

// Find overlaps
const folderSet = new Set(folders);
const overlaps = slugs.filter(s => folderSet.has(s));

console.log('Dedicated folders:', folders.length);
console.log('Catch-all slugs:', slugs.length);
console.log('Overlapping:', overlaps.length);
console.log('Non-overlapping (keep):', slugs.length - overlaps.length);

if (overlaps.length === 0) {
  console.log('No overlaps to remove!');
  process.exit(0);
}

// Remove overlapping entries from catch-all
let content = catchAll;
let removed = 0;

for (const slug of overlaps) {
  // Match the full entry: 'slug': { ... }, (up to the next slug entry or closing })
  const entryRegex = new RegExp(
    `\\n\\s+['"]${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*:\\s*\\{[\\s\\S]*?(?=\\n\\s+['"][a-z0-9-]+['"]\\s*:\\s*\\{|\\n\\};)`,
    'm'
  );
  const match = content.match(entryRegex);
  if (match) {
    content = content.replace(match[0], '');
    removed++;
  } else {
    console.log('  WARNING: Could not find entry for', slug);
  }
}

fs.writeFileSync(catchAllFile, content, 'utf8');
console.log(`Removed ${removed}/${overlaps.length} overlapping entries`);

// Verify remaining
const remaining = [];
const re2 = /^\s+['"]([a-z0-9-]+)['"]\s*:\s*\{/gm;
const newContent = fs.readFileSync(catchAllFile, 'utf8');
while ((m = re2.exec(newContent)) !== null) {
  remaining.push(m[1]);
}
console.log('Remaining catch-all entries:', remaining.length);

// Check no overlaps remain
const stillOverlapping = remaining.filter(s => folderSet.has(s));
if (stillOverlapping.length > 0) {
  console.log('WARNING: Still overlapping:', stillOverlapping);
} else {
  console.log('All overlaps removed successfully!');
}
