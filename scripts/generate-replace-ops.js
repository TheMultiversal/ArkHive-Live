const fs = require('fs').promises;
const path = require('path');

(async () => {
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const replRaw = await fs.readFile(replPath, 'utf8');
  const { replacements } = JSON.parse(replRaw);

  const ops = [];
  for (const r of replacements) {
    if (!r.newUrl) continue; // only auto-replace with Wayback
    const filePath = path.join(process.cwd(), r.file);
    const txt = await fs.readFile(filePath, 'utf8');
    const lines = txt.split(/\r?\n/);
    const idx = r.line - 1;
    const start = Math.max(0, idx - 3);
    const end = Math.min(lines.length - 1, idx + 3);
    const oldSlice = lines.slice(start, end + 1).join('\n');
    // Replace only the URL literal within that slice
    const urlLiteral = r.oldUrl;
    const replacedSlice = oldSlice.replace(urlLiteral, r.newUrl);
    if (oldSlice === replacedSlice) {
      console.warn(`No change in slice for ${r.file}:${r.line}`);
      continue;
    }
    ops.push({ filePath: path.join(process.cwd(), r.file), oldString: oldSlice, newString: replacedSlice });
  }

  const out = path.join(process.cwd(), 'scripts', 'replace-ops.json');
  await fs.writeFile(out, JSON.stringify(ops, null, 2));
  console.log(`Wrote ${ops.length} replace operations to ${out}`);
})();