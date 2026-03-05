const fs = require('fs');
const path = require('path');

// Directories to scan
const scanDirs = [
  path.join(__dirname, '..', 'src', 'app'),
  path.join(__dirname, '..', 'src', 'data'),
];

// Recursively find all .tsx and .ts files
function findFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findFiles(full, exts));
    } else if (exts.some(ext => entry.name.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

// Extract URLs from text
function extractUrls(text) {
  const regex = /https?:\/\/[^\s'")`>\]},]+/g;
  const matches = text.match(regex) || [];
  // Clean trailing punctuation that's likely not part of URL
  return matches.map(url => {
    // Strip trailing periods, commas, semicolons, colons (but not if part of port)
    url = url.replace(/[.,;]+$/, '');
    // Strip trailing parentheses only if unbalanced
    while (url.endsWith(')') && (url.split('(').length - 1) < (url.split(')').length - 1)) {
      url = url.slice(0, -1);
    }
    return url;
  });
}

// Check for malformed URLs
function checkMalformed(url) {
  const issues = [];
  if (url.includes('\\')) issues.push('contains backslash');
  if (/https?:\/\/.*https?:\/\//.test(url)) issues.push('nested http://');
  if (url.endsWith('.')) issues.push('ends with period');
  if (url.endsWith(',')) issues.push('ends with comma');
  if (url.includes('%5C')) issues.push('contains encoded backslash %5C');
  if (url.includes(' ')) issues.push('contains space');
  if (url.includes('${')) issues.push('contains template literal');
  if (!/https?:\/\/[a-zA-Z0-9]/.test(url)) issues.push('invalid domain start');
  return issues;
}

// Main
const allFiles = [];
for (const dir of scanDirs) {
  allFiles.push(...findFiles(dir, ['.tsx', '.ts']));
}

console.log(`Scanning ${allFiles.length} files...`);

const allUrls = new Set();
const urlsByFile = {};

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const urls = extractUrls(content);
  if (urls.length > 0) {
    const relPath = path.relative(path.join(__dirname, '..'), file);
    urlsByFile[relPath] = urls.length;
    for (const url of urls) {
      allUrls.add(url);
    }
  }
}

// Sort URLs
const sorted = [...allUrls].sort();

// Write to file
const outPath = path.join(__dirname, 'all-urls.txt');
fs.writeFileSync(outPath, sorted.join('\n') + '\n', 'utf8');

// Report
console.log(`\nTotal unique external URLs: ${sorted.length}`);
console.log(`Written to: scripts/all-urls.txt`);

console.log(`\nFiles with URLs (top 20 by count):`);
const fileEntries = Object.entries(urlsByFile).sort((a, b) => b[1] - a[1]).slice(0, 20);
for (const [file, count] of fileEntries) {
  console.log(`  ${count} URLs - ${file}`);
}

console.log(`\nFirst 20 URLs (sample):`);
for (let i = 0; i < Math.min(20, sorted.length); i++) {
  console.log(`  ${i + 1}. ${sorted[i]}`);
}

// Check for malformed
console.log(`\nMalformed URL check:`);
let malformedCount = 0;
for (const url of sorted) {
  const issues = checkMalformed(url);
  if (issues.length > 0) {
    malformedCount++;
    console.log(`  MALFORMED: ${url}`);
    console.log(`    Issues: ${issues.join(', ')}`);
  }
}
if (malformedCount === 0) {
  console.log('  No malformed URLs detected!');
} else {
  console.log(`\n  Total malformed: ${malformedCount}`);
}
