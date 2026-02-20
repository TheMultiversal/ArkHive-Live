const fs = require('fs').promises;
const path = require('path');

(async () => {
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const raw = await fs.readFile(replPath, 'utf8');
  const { replacements } = JSON.parse(raw);
  const pending = replacements.filter(r => !r.newUrl && r.oldUrl).reduce((acc, r) => {
    const key = r.file.replace(/\\/g, '/');
    acc[key] = acc[key] || new Set();
    acc[key].add(r.line);
    return acc;
  }, {});

  const summary = [];
  for (const [file, linesSet] of Object.entries(pending)) {
    const filePath = path.join(process.cwd(), file);
    try {
      let txt = await fs.readFile(filePath, 'utf8');
      const lines = txt.split(/\r?\n/);
      const linesArr = Array.from(linesSet).sort((a,b)=>a-b);
      for (const ln of linesArr) {
        const idx = ln - 1;
        if (idx < 0 || idx >= lines.length) continue;
        const line = lines[idx];
        if (line.includes('TODO: dead link')) continue;
        lines[idx] = `${line} // TODO: dead link — no archive found (check scripts/404-replacements.json)`;
      }
      const newTxt = lines.join('\n');
      await fs.writeFile(filePath, newTxt, 'utf8');
      summary.push({ file, updatedLines: linesArr.length });
    } catch (err) {
      summary.push({ file, error: String(err) });
    }
  }

  const out = path.join(process.cwd(), 'scripts', 'annotate-dead-links-report.json');
  await fs.writeFile(out, JSON.stringify({ generatedAt: new Date().toISOString(), summary }, null, 2));
  console.log(`Annotated ${summary.length} files. Report: ${out}`);
})();