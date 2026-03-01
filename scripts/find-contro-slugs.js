const fs = require('fs');
const c = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
const positions = [3410242, 3412030, 3413660, 3456092, 3457644, 3460652, 3462017, 3465091, 3471451, 3474627, 3476174, 3477343];

positions.forEach((p, i) => {
  const pre = c.substring(Math.max(0, p - 5000), p);
  const lines = pre.split('\n');
  for (let j = lines.length - 1; j >= 0; j--) {
    const m = lines[j].match(/'([a-z0-9-]+)':\s*\{/);
    if (m) {
      console.log(i + ': ' + m[1]);
      break;
    }
  }
});
