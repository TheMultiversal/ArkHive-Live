// Script to audit all external URLs in investigation source data
// and fix known broken patterns
const fs = require('fs');
const path = require('path');

// Read the main investigation [slug] file
const slugFile = 'src/app/investigations/[slug]/page.tsx';
let content = fs.readFileSync(slugFile, 'utf8');

// Find all URLs
const urlRegex = /url:\s*'(https?:\/\/[^']+)'/g;
let match;
const urls = [];
const brokenPatterns = [];

while ((match = urlRegex.exec(content)) !== null) {
  const url = match[1];
  const lineNum = content.substring(0, match.index).split('\n').length;
  urls.push({ url, line: lineNum });
  
  // Check for known broken patterns
  if (url.includes('web.archive.org/web/*/')) {
    brokenPatterns.push({ url, line: lineNum, issue: 'Wayback wildcard URL (*/)', fix: 'Remove wildcard' });
  }
  if (url.includes('web.archive.org/web/20221209082934/http://web.archive.org/web/20221209082934/')) {
    brokenPatterns.push({ url, line: lineNum, issue: 'Triple-nested archive.org URL', fix: 'Simplify to single archive URL' });
  }
  if (url.match(/\s/)) {
    brokenPatterns.push({ url, line: lineNum, issue: 'URL contains whitespace' });
  }
  if (url.endsWith('.')) {
    brokenPatterns.push({ url, line: lineNum, issue: 'URL ends with period' });
  }
}

console.log(`Total URLs found: ${urls.length}`);
console.log(`\nBroken patterns found: ${brokenPatterns.length}`);
brokenPatterns.forEach(bp => {
  console.log(`  Line ${bp.line}: ${bp.issue}`);
  console.log(`    ${bp.url.substring(0, 120)}...`);
});

// --- FIX ALL BROKEN PATTERNS ---

// 1. Fix web.archive.org/web/*/ wildcard patterns
// Replace: web.archive.org/web/*/URL -> just the direct URL
content = content.replace(
  /https:\/\/web\.archive\.org\/web\/\*\/(https?:\/\/[^']+)/g,
  (match, directUrl) => directUrl
);

// 2. Fix triple-nested archive.org URLs
content = content.replace(
  /http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/[^']+)/g,
  (match, directUrl) => `https://web.archive.org/web/2024/${directUrl}`
);

// 3. Fix double-nested archive.org URLs
content = content.replace(
  /http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/[^']+)/g,
  (match, directUrl) => `https://web.archive.org/web/2024/${directUrl}`
);

fs.writeFileSync(slugFile, content, 'utf8');

// Now do the same for all investigation-specific pages
const investigationsDir = 'src/app/investigations';
let fixedCount = 0;

function processFile(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  const original = fileContent;
  
  // Fix wildcard archive.org
  fileContent = fileContent.replace(
    /https:\/\/web\.archive\.org\/web\/\*\/(https?:\/\/[^']+)/g,
    (match, directUrl) => directUrl
  );
  
  // Fix triple-nested
  fileContent = fileContent.replace(
    /http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/[^']+)/g,
    (match, directUrl) => `https://web.archive.org/web/2024/${directUrl}`
  );
  
  // Fix double-nested
  fileContent = fileContent.replace(
    /http:\/\/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org\/web\/\d+\/(https?:\/\/[^']+)/g,
    (match, directUrl) => `https://web.archive.org/web/2024/${directUrl}`
  );
  
  if (fileContent !== original) {
    fs.writeFileSync(filePath, fileContent, 'utf8');
    fixedCount++;
    console.log(`  Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(investigationsDir);

// Also process entities
walkDir('src/app/entities');

console.log(`\nFixed ${fixedCount} files with broken URL patterns`);

// Final recount
const finalContent = fs.readFileSync(slugFile, 'utf8');
const remainingWildcard = (finalContent.match(/web\.archive\.org\/web\/\*\//g) || []).length;
const remainingNested = (finalContent.match(/web\.archive\.org\/web\/\d+\/http:\/\/web\.archive\.org/g) || []).length;
console.log(`\nRemaining wildcard archive URLs: ${remainingWildcard}`);
console.log(`Remaining nested archive URLs: ${remainingNested}`);
