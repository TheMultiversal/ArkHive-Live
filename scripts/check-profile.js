const fs = require('fs');
const src = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Get a well-developed profile
const start = src.indexOf("'william-barr':");
const chunk = src.substring(start, start + 4000);
console.log(chunk.substring(0, 3500));
