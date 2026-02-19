const fs = require('fs').promises;
const path = require('path');

(async () => {
  const replPath = path.join(process.cwd(), 'scripts', '404-replacements.json');
  const raw = await fs.readFile(replPath, 'utf8');
  const { replacements } = JSON.parse(raw);

  const ops = replacements.filter(r => r.newUrl).map(r => ({ file: r.file.replace(/\\/g,'/'), oldUrl: r.oldUrl, newUrl: r.newUrl }));
  const summary = [];

  for (const op of ops) {
    const filePath = path.join(process.cwd(), op.file);
    try {
      let txt = await fs.readFile(filePath, 'utf8');
      if (!txt.includes(op.oldUrl)) {
        summary.push({ file: op.file, oldUrl: op.oldUrl, changed: false, reason: 'oldUrl not found' });
        continue;
      }
      const replaced = txt.split(op.oldUrl).join(op.newUrl);
      await fs.writeFile(filePath, replaced, 'utf8');
      summary.push({ file: op.file, oldUrl: op.oldUrl, changed: true });
    } catch (err) {
      summary.push({ file: op.file, oldUrl: op.oldUrl, changed: false, reason: String(err).slice(0,200) });
    }
  }

  const out = path.join(process.cwd(), 'scripts', 'apply-wayback-report.json');
  await fs.writeFile(out, JSON.stringify({ generatedAt: new Date().toISOString(), summary }, null, 2));
  console.log(`Applied ${summary.filter(s => s.changed).length}/${summary.length} literal replacements. Report: ${out}`);
})();