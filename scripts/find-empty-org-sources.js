const fs = require('fs');
const f = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const re = /sources:\s*\[\s*\]/g;
let m;
while (m = re.exec(f)) {
  const ctx = f.substring(Math.max(0, m.index - 500), m.index);
  const lines = ctx.split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const sl = lines[i].match(/['"]([\w-]+)['"]\s*:\s*\{/);
    if (sl) {
      console.log(sl[1], 'at offset', m.index);
      break;
    }
  }
}
