const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Strategy: Find all profiles with apostrophes in their names and regenerate sources
// The root cause is names like "Michael O'Leary" where the ' breaks source string literals

// First, find all instances of names with apostrophes in the individualData object
const namePattern = /name:\s*'([^']*\\'[^']*)'/g;
let m;
const namesWithApostrophes = [];
while (m = namePattern.exec(f)) {
  namesWithApostrophes.push({
    name: m[1],
    clean: m[1].replace(/\\'/g, "'"),  // Michael O'Leary
    safe: m[1].replace(/\\'/g, ""),     // Michael OLeary (safe for strings)
    wiki: m[1].replace(/\\'/g, "'").replace(/\s+/g, '_'),  // Michael_O'Leary
    wikiSafe: m[1].replace(/\\'/g, "").replace(/\s+/g, '_'), // Michael_OLeary
    index: m.index
  });
}

console.log('Found', namesWithApostrophes.length, 'names with apostrophes');

// Now find and fix all broken source entries globally
// Pattern 1: Wikipedia: Name O\', url: 'https://en.wikipedia.org/wiki/Name_O\'
// This is totally broken - the \' in both title and URL break things

// Fix all sources that contain backslash-apostrophe sequences that break JS parsing
// Strategy: Replace the entire sources array for profiles with apostrophe names

let fixes = 0;
for (const nameInfo of namesWithApostrophes) {
  // Replace any occurrence of this name in title/url with apostrophe-free version
  const escapedName = nameInfo.name; // e.g. Michael O\'Leary
  const cleanName = nameInfo.clean; // Michael O'Leary
  const safeName = nameInfo.safe; // Michael OLeary
  const wikiName = nameInfo.wikiSafe; // Michael_OLeary
  
  // Fix Wikipedia title references
  const wikiTitle = `Wikipedia: ${cleanName}`;
  const safeWikiTitle = `Wikipedia: ${safeName}`;
  
  // Fix the Wikipedia URL
  const brokenWikiUrl = `https://en.wikipedia.org/wiki/${nameInfo.wiki}`;
  const safeWikiUrl = `https://en.wikipedia.org/wiki/${wikiName}`;
}

// More direct approach: Fix all malformed source entries line by line
const lines = f.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('sources:')) continue;
  if (!line.includes("\\'")) continue;
  
  // This line has escaped apostrophes in sources - fix them
  // Remove all \' within source title/url strings and replace with empty
  // But we need to be careful not to break the overall string structure
  
  let fixed = line;
  // Replace patterns like: title: 'Wikipedia: Name O\', -> title: 'Wikipedia: Name O',
  // The \' followed by , url: or }, means the quote is actually the string delimiter
  fixed = fixed.replace(/title: '([^']*)\\'(,\s*url:)/g, "title: '$1'$2");
  fixed = fixed.replace(/title: '([^']*)\\'(,\s*date:)/g, "title: '$1'$2");
  fixed = fixed.replace(/title: '([^']*)\\'(\s*})/g, "title: '$1'$2");
  
  // Fix URLs: url: 'https://...Name_O\' } -> url: 'https://...Name_O' }
  fixed = fixed.replace(/url: '([^']*)\\'(\s*})/g, "url: '$1'$2");
  fixed = fixed.replace(/url: '([^']*)\\'(,\s*date:)/g, "url: '$1'$2");
  fixed = fixed.replace(/url: '([^']*)\\'(\s*,)/g, "url: '$1'$2");
  
  // Fix mid-string apostrophes: 'Wikipedia: O\'Leary', -> 'Wikipedia: OLeary',
  // Actually these mid-string ones should be fine as \' is valid JS escape
  // The problem is only when \' appears at the END of a string value before the delimiter
  
  if (fixed !== line) {
    lines[i] = fixed;
    fixes++;
    console.log(`Fixed line ${i+1}: ${fixed.substring(0, 100)}...`);
  }
}

f = lines.join('\n');

// Also fix any title: 'text' url: (missing comma between title and url)
f = f.replace(/' url: '/g, "', url: '");

fs.writeFileSync(file, f);
console.log('Fixed', fixes, 'lines with escaping issues');

// Check for remaining issues
const remaining = (f.match(/\\'\s*,\s*url:/g) || []).length;
const remaining2 = (f.match(/\\'\s*}/g) || []).length;
console.log("Remaining \\' before , url:", remaining);
console.log("Remaining \\' before }:", remaining2);
