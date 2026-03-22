const { execSync } = require('child_process');
const path = require('path');

// All slugs that were removed as duplicates
const removed = [
  '911-intelligence',
  '9-11-failures',
  'lobbying-corruption',
];

for (const slug of removed) {
  try {
    const cmd = `findstr /s /c:"${slug}" src\\app\\*.tsx src\\data\\*.ts src\\components\\*.tsx src\\app\\**\\*.tsx src\\data\\**\\*.ts`;
    const out = execSync(cmd, { encoding: 'utf-8', cwd: process.cwd() });
    const lines = out.trim().split('\n').filter(l => l.trim());
    if (lines.length > 0) {
      console.log(`\n=== ${slug} (${lines.length} refs) ===`);
      lines.forEach(l => console.log('  ' + l.substring(0, 160)));
    }
  } catch (e) {
    // findstr returns exit code 1 when nothing found
    console.log(`${slug}: no references found ✓`);
  }
}
