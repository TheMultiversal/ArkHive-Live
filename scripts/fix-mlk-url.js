const fs = require('fs');
let c = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');

// Fix MLK FBI vault URL ending with period
const badUrl = "https://web.archive.org/web/2024/https://vault.fbi.gov/Martin%20Luther%20King%2C%20Jr.";
const goodUrl = "https://vault.fbi.gov/Martin%20Luther%20King%2C%20Jr.";
if (c.includes(badUrl)) {
  c = c.replace(badUrl, goodUrl);
  console.log('Fixed MLK FBI vault URL');
}

// Also fix any remaining URLs that incorrectly use web.archive.org/web/2024/ prefix where the original URL is fine
// The archive prefix is only needed when the original site is down

fs.writeFileSync('src/app/investigations/[slug]/page.tsx', c, 'utf8');
console.log('Done');
