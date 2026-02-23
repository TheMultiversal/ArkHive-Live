const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const check = ['alan-cranston','fazlollah-zahedi','joy-buolamwini','william-shawcross','radley-balko','theodore-roosevelt','james-earl-ray'];
check.forEach(s => {
  const found = c.includes("'" + s + "':");
  console.log(s + ': ' + (found ? 'FOUND' : 'MISSING'));
});
