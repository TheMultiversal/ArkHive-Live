const fs = require('fs');

// Fix 1: individuals page - Samaritan's Purse URL with backslash in wrong place
let ind = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
// The URL has a literal \' in it from the escaping
const badUrl = "https://scholar.google.com/scholar?q=Samaritan%5C's%20Purse%20Financial%20Records";
const goodUrl = "https://scholar.google.com/scholar?q=Samaritan%27s+Purse+Financial+Records";
if (ind.includes(badUrl)) {
  ind = ind.replace(badUrl, goodUrl);
  console.log('Fixed Samaritan Purse URL');
}

// Also fix any other URLs with %5C' pattern (escaped backslash before apostrophe)
const badPattern = /%5C'/g;
const matches = ind.match(badPattern);
if (matches) {
  console.log(`Found ${matches.length} URLs with %5C' pattern, fixing...`);
  ind = ind.replace(/%5C'/g, "%27");
}

fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', ind, 'utf8');

// Fix 2: categories.ts - Christine Maxwell's title has unescaped apostrophe
let cats = fs.readFileSync('src/data/categories.ts', 'utf8');
// Find the broken line: title: 'Ghislaine\' 
// The title was probably "Ghislaine's Sister" but got truncated
const badLine = "{ slug: 'christine-maxwell', name: 'Christine Maxwell', title: 'Ghislaine\\'";
if (cats.includes(badLine)) {
  cats = cats.replace(badLine, "{ slug: 'christine-maxwell', name: 'Christine Maxwell', title: 'Ghislaine Maxwell\\'s Sister'");
  console.log('Fixed Christine Maxwell title');
} else {
  // Try the exact pattern from the error
  const pattern2 = "title: 'Ghislaine\\'";
  const idx = cats.indexOf(pattern2);
  if (idx !== -1) {
    // Find the end of this object entry
    const lineStart = cats.lastIndexOf('\n', idx);
    const lineEnd = cats.indexOf('\n', idx);
    const line = cats.substring(lineStart, lineEnd);
    console.log('Found broken line:', line.trim());
    // Replace just this instance
    cats = cats.replace(
      /\{ slug: 'christine-maxwell', name: 'Christine Maxwell', title: 'Ghislaine\\', riskLevel: 'high' \}/,
      "{ slug: 'christine-maxwell', name: 'Christine Maxwell', title: 'Ghislaine Maxwell\\'s Sister', riskLevel: 'high' }"
    );
    console.log('Fixed Christine Maxwell title (pattern 2)');
  }
}

// Also scan for any other unescaped apostrophes in the generated categories file
// Look for patterns like: name: 'Something's' or title: 'Something's'
const singleQuoteIssues = [];
const catLines = cats.split('\n');
for (let i = 0; i < catLines.length; i++) {
  const line = catLines[i];
  // Count single quotes - if odd, there's likely an unescaped apostrophe
  const quoteCount = (line.match(/'/g) || []).length;
  if (quoteCount % 2 !== 0 && line.includes('slug:')) {
    singleQuoteIssues.push({ line: i + 1, content: line.trim().substring(0, 100) });
  }
}
if (singleQuoteIssues.length > 0) {
  console.log(`\nFound ${singleQuoteIssues.length} lines with potential quote issues:`);
  singleQuoteIssues.forEach(issue => {
    console.log(`  Line ${issue.line}: ${issue.content}`);
  });
}

fs.writeFileSync('src/data/categories.ts', cats, 'utf8');
console.log('Done');
