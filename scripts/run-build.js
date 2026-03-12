const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('npx next build', { 
    encoding: 'utf-8', 
    cwd: __dirname,
    timeout: 600000,
    stdio: ['pipe', 'pipe', 'pipe']
  });
  fs.writeFileSync('build-result.txt', 'SUCCESS\n' + out);
  console.log('BUILD: SUCCESS');
} catch (e) {
  const combined = (e.stdout || '') + '\n' + (e.stderr || '');
  fs.writeFileSync('build-result.txt', 'FAILED\n' + combined);
  // Find errors
  const lines = combined.split('\n');
  const errLines = lines.filter(l => /error|Parsing|Unexpected|failed/i.test(l));
  console.log('BUILD: FAILED');
  console.log('Error count:', errLines.length);
  errLines.slice(0, 20).forEach(l => console.log(l));
}
