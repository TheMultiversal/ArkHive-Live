const fs = require('fs');
let c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const fixes = [
  ["{ title: 'EPA Enforcement Records - Koch Industries', date: 'Various' }", "{ title: 'EPA Enforcement Records - Koch Industries', url: 'https://echo.epa.gov/', date: 'Various' }"],
  ["{ title: 'At the Center of the Storm: My Years at the CIA', date: '2007' }", "{ title: 'At the Center of the Storm: My Years at the CIA', url: 'https://www.harpercollins.com/products/at-the-center-of-the-storm-george-tenet', date: '2007' }"],
  ["{ title: 'The Trial of Scooter Libby - Court Records', date: '2007' }", "{ title: 'The Trial of Scooter Libby - Court Records', url: 'https://www.courtlistener.com/', date: '2007' }"],
  ["{ title: 'Plane Crash Investigation Reports', date: '2023' }", "{ title: 'Plane Crash Investigation Reports', url: 'https://www.ntsb.gov/investigations/Pages/default.aspx', date: '2023' }"],
  ["{ title: 'U.S. Commission on Civil Rights Florida Report', date: '2001' }", "{ title: 'U.S. Commission on Civil Rights Florida Report', url: 'https://www.usccr.gov/', date: '2001' }"],
];
let count = 0;
fixes.forEach(([old, rep]) => {
  if (c.includes(old)) { c = c.replace(old, rep); count++; }
});
fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', c, 'utf8');
console.log('Fixed ' + count + ' remaining sources');
