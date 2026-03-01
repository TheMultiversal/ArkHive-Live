const fs = require('fs');
const f = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
const lines = f.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (/sources:\s*\[\s*\]/.test(lines[i])) {
    // Walk backwards to find the slug
    let slug = 'unknown';
    for (let j = i; j >= Math.max(0, i - 30); j--) {
      const m = lines[j].match(/['"]([\w-]+)['"]\s*:\s*\{/);
      if (m) { slug = m[1]; break; }
    }
    console.log(`Line ${i + 1}: slug="${slug}" => "${lines[i].trim()}"`);
  }
}
