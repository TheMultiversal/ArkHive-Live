const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dotNext = path.join(root, '.next');

// Clean .next
if (fs.existsSync(dotNext)) {
  fs.rmSync(dotNext, { recursive: true, force: true });
  console.log('Cleaned .next');
}

try {
  const out = execSync('npx next build', {
    cwd: root,
    encoding: 'utf-8',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024,
  });
  console.log('BUILD_SUCCESS');
  // Show last few lines
  const lines = out.split('\n');
  lines.slice(-10).forEach(l => console.log(l));
} catch (e) {
  console.log('BUILD_FAILED');
  const output = (e.stderr || '') + '\n' + (e.stdout || '');
  // Find error lines
  const lines = output.split('\n');
  const errLines = lines.filter(l => /Type error|Parsing|Unexpected token|Failed to compile/i.test(l));
  errLines.forEach(l => console.log('  ERR:', l.trim()));
  // Show context
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Type error') || lines[i].includes('Failed to compile')) {
      for (let j = Math.max(0, i - 2); j < Math.min(lines.length, i + 8); j++) {
        console.log('  |', lines[j]);
      }
      console.log('  ---');
    }
  }
}
