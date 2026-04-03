// Fix syntax errors in all 6 individual profile files
// Issue: extra `},` line before each newly inserted profile (profiles object was prematurely closed)
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'data', 'individuals');

const fixes = [
  { file: 'd.ts', profile: 'david-solomon-fund-manager' },
  { file: 'j.ts', profile: 'james-dahl' },
  { file: 'l.ts', profile: 'lowell-milken' },
  { file: 'p.ts', profile: 'peter-brant-trader' },
  { file: 'v.ts', profile: 'victor-posner' },
  { file: 't.ts', profile: 'terren-peizer' },
];

for (const { file, profile } of fixes) {
  const filePath = path.join(baseDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const NL = content.includes('\r\n') ? '\r\n' : '\n';

  // Pattern: previous profile closes with `  },\n},\n\n\n 'slug': {`
  // Need to remove the extra `},` line
  // The extra `},` is the premature close of profiles object, needs to be removed
  const pattern = `  },${NL}},${NL}${NL}${NL} '${profile}'`;
  const replacement = `  },${NL}${NL}${NL} '${profile}'`;
  
  if (content.includes(pattern)) {
    content = content.replace(pattern, replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`FIXED: ${file} - removed extra }, before '${profile}'`);
  } else {
    // Try alternate pattern with fewer newlines
    const alt1 = `  },${NL}},${NL}${NL} '${profile}'`;
    const alt2 = `  },${NL}},${NL} '${profile}'`;
    if (content.includes(alt1)) {
      content = content.replace(alt1, `  },${NL}${NL} '${profile}'`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`FIXED (alt1): ${file}`);
    } else if (content.includes(alt2)) {
      content = content.replace(alt2, `  },${NL} '${profile}'`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`FIXED (alt2): ${file}`);
    } else {
      console.log(`WARNING: ${file} - could not find expected pattern for '${profile}'`);
      // Show surrounding context for debugging
      const idx = content.indexOf(`'${profile}'`);
      if (idx > -1) {
        const context = content.substring(Math.max(0, idx - 100), idx + 50);
        console.log('  Context:', JSON.stringify(context));
      }
    }
  }
}

console.log('\nDone.');
