// Fix syntax errors - precise approach using exact context from debug output
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'data', 'individuals');

const fixes = [
  // LF files: pattern is `},\n},\n\n\n `
  { file: 'd.ts', profile: 'david-solomon-fund-manager', crlf: false },
  { file: 'j.ts', profile: 'james-dahl', crlf: false },
  { file: 'l.ts', profile: 'lowell-milken', crlf: false },
  { file: 'p.ts', profile: 'peter-brant-trader', crlf: false },
  { file: 'v.ts', profile: 'victor-posner', crlf: false },
  // CRLF file: pattern is `},\r\n\r\n},\r\n\r\n\r\n `
  { file: 't.ts', profile: 'terren-peizer', crlf: true },
];

for (const { file, profile, crlf } of fixes) {
  const filePath = path.join(baseDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const NL = crlf ? '\r\n' : '\n';
  
  // Find the extra `},` line immediately before the blank lines and new profile
  // For LF files: find `},\n\n\n` at start of line (0-indent)  
  // For CRLF files: find `\r\n},\r\n\r\n\r\n`
  
  // Generic approach: find `},` on its own line before the profile, where it's at 0-indent
  const profileStart = ` '${profile}'`;
  const idx = content.indexOf(profileStart);
  if (idx === -1) {
    console.log(`SKIP: ${file} - profile '${profile}' not found`);
    continue;
  }
  
  // Look backwards from the profile key to find the extra `},`
  // The pattern before the profile should be: `},\n` (closing prev profile) then `},\n` (EXTRA) then blank lines
  const before = content.substring(Math.max(0, idx - 200), idx);
  
  // Remove the `},` line that's at 0-indent (no spaces before it)
  // It appears as `\n},\n` in LF or `\r\n},\r\n` in CRLF
  let extraBrace;
  if (crlf) {
    extraBrace = `${NL}},${NL}`;
  } else {
    extraBrace = `${NL}},${NL}`;
  }
  
  // Find the extra brace in the region before the profile
  const regionStart = Math.max(0, idx - 50);
  const region = content.substring(regionStart, idx);
  const extraIdx = region.lastIndexOf(extraBrace);
  
  if (extraIdx === -1) {
    console.log(`WARNING: ${file} - no extra }, found before '${profile}'`);
    console.log('  Region:', JSON.stringify(region));
    continue;
  }
  
  // Verify it's at 0-indent (the char before `},` should be \n)
  const absIdx = regionStart + extraIdx;
  // Remove the `},` line (keep one NL, remove `},` + one NL)
  content = content.substring(0, absIdx) + content.substring(absIdx + extraBrace.length - NL.length);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`FIXED: ${file} - removed extra }, before '${profile}'`);
}

console.log('\nDone.');
