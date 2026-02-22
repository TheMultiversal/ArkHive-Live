const fs = require('fs');
const path = require('path');
const glob = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const dirs = fs.readdirSync(baseDir);
let fixCount = 0;

for (const dir of dirs) {
  const filePath = path.join(baseDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix patterns like:
  // , ShieldAlert} from    (comma at start of line before import name)
  // ,\nShieldAlert          (comma followed by newline then import name)
  // icon,\n, ShieldAlert    (double comma across lines)
  
  // Pattern 1: line ending with comma, next line starts with , ShieldAlert or , Scale
  content = content.replace(/,\s*\n\s*,\s*(ShieldAlert|Scale)/g, ', $1');
  
  // Pattern 2: Still has leading comma before ShieldAlert/Scale in import
  content = content.replace(/,\s*,\s*(ShieldAlert|Scale)/g, ', $1');
  
  // Pattern 3: newline before , ShieldAlert at end of import
  content = content.replace(/\n,\s*(ShieldAlert|Scale)/g, ', $1');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed:', dir);
    fixCount++;
  }
}

console.log(`\nFixed ${fixCount} files`);
