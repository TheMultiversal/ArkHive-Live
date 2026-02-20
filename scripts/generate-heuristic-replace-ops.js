const fs = require('fs').promises;
const path = require('path');
(async () => {
  const suggPath = path.join(process.cwd(), 'scripts', 'heuristic-replacement-suggestions.json');
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const suggRaw = await fs.readFile(suggPath, 'utf8');
  const replRaw = await fs.readFile(replPath, 'utf8');
  const { suggestions } = JSON.parse(suggRaw);
  const { replacements } = JSON.parse(replRaw);

  const ops = [];
  const byOld = new Map();
  for (const r of replacements) {
    if (!r.oldUrl) continue;
    if (!byOld.has(r.oldUrl)) byOld.set(r.oldUrl, []);
    byOld.get(r.oldUrl).push(r);
  }

  for (const s of suggestions) {
    if (!s.candidate) continue;
    if (s.candidate.includes('/web/*/')) continue; // skip wildcard archive pages
    const old = s.oldUrl;
    const occs = byOld.get(old) || [];
    for (const occ of occs) {
      const filePath = path.join(process.cwd(), occ.file);
      const txt = await fs.readFile(filePath, 'utf8');
      const lines = txt.split(/\r?\n/);
      const idx = Math.max(0, occ.line - 1);
      const start = Math.max(0, idx - 3);
      const end = Math.min(lines.length - 1, idx + 3);
      const oldSlice = lines.slice(start, end + 1).join('\n');
      if (!oldSlice.includes(old)) {
        console.warn(`SKIP (context mismatch) ${occ.file}:${occ.line}`);
        continue;
      }
      const newSlice = oldSlice.split(old).join(s.candidate);
      if (oldSlice === newSlice) continue;
      ops.push({ filePath, oldString: oldSlice, newString: newSlice });
    }
  }

  const out = path.join(process.cwd(), 'scripts', 'heuristic-replace-ops.json');
  await fs.writeFile(out, JSON.stringify(ops, null, 2));
  console.log(`Wrote ${ops.length} heuristic replace operations to ${out}`);
})();