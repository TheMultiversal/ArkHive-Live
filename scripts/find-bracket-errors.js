const fs = require('fs');
const files = fs.readdirSync('src/data/investigations').filter(f => /^[a-z0-9]\.ts$/.test(f)).map(f => 'src/data/investigations/' + f);

for (const f of files) {
  const content = fs.readFileSync(f, 'utf-8');
  let depth = 0;
  let inString = false;
  let escaped = false;
  let errors = [];
  let line = 1;
  
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    if (ch === '\n') { line++; continue; }
    if (ch === '\r') continue;
    
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    
    if (ch === "'" && !inString) { inString = "'"; continue; }
    if (ch === "'" && inString === "'") { inString = false; continue; }
    if (ch === '"' && !inString) { inString = '"'; continue; }
    if (ch === '"' && inString === '"') { inString = false; continue; }
    if (ch === '`' && !inString) { inString = '`'; continue; }
    if (ch === '`' && inString === '`') { inString = false; continue; }
    
    if (inString) continue;
    
    if (ch === '[') depth++;
    if (ch === ']') {
      depth--;
      if (depth < 0) {
        errors.push('LINE ' + line + ': extra ] (depth < 0)');
        depth = 0;
      }
    }
  }
  
  if (depth !== 0 || errors.length > 0) {
    console.log(f + ': BRACKET ISSUES (final depth: ' + depth + ')');
    for (const e of errors) console.log('  ' + e);
    if (depth > 0) console.log('  Missing ' + depth + ' closing bracket(s)');
  } else {
    console.log(f + ': OK');
  }
}

