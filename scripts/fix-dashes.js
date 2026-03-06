const fs = require('fs');
const path = require('path');

function walk(dir) {
  let r = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && !p.includes('node_modules') && !p.includes('.next')) {
      r = r.concat(walk(p));
    } else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
      r.push(p);
    }
  }
  return r;
}

const srcDir = path.join(process.cwd(), 'src');
const files = walk(srcDir);
console.log('Total source files:', files.length);

const escEm = String.fromCharCode(92) + 'u2014'; // literal \u2014
const escEn = String.fromCharCode(92) + 'u2013'; // literal \u2013
const escCurlyLeft = String.fromCharCode(92) + 'u201C'; // literal \u201C
const escCurlyRight = String.fromCharCode(92) + 'u201D'; // literal \u201D
const escCurlyApos = String.fromCharCode(92) + 'u2019'; // literal \u2019

let filesFixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // === FIX ESCAPED \u2014 (em dash) ===
  while (content.includes(escEm)) {
    const idx = content.indexOf(escEm);
    const before = content[idx - 1] || '';
    const after = content[idx + 6] || '';
    let rep;
    if (before === ' ' && after === ' ') {
      rep = '-';
    } else if (before === ' ') {
      rep = '- ';
    } else if (after === ' ') {
      rep = ' -';
    } else {
      rep = ' - ';
    }
    content = content.substring(0, idx) + rep + content.substring(idx + 6);
  }

  // === FIX LITERAL EM DASH CHARACTER ===
  content = content.replace(/ \u2014 /g, ' - ');
  content = content.replace(/ \u2014/g, ' - ');
  content = content.replace(/\u2014 /g, ' - ');
  content = content.replace(/\u2014/g, ' - ');

  // === FIX ESCAPED \u2013 (en dash) ===
  while (content.includes(escEn)) {
    const idx = content.indexOf(escEn);
    const before = content[idx - 1] || '';
    const after = content[idx + 6] || '';
    // Between digits = date range → plain hyphen
    if (/\d/.test(before) && /\d/.test(after)) {
      content = content.substring(0, idx) + '-' + content.substring(idx + 6);
    } else {
      // General separator → hyphen (let context have spaces)
      if (before === ' ' && after === ' ') {
        content = content.substring(0, idx) + '-' + content.substring(idx + 6);
      } else if (before === ' ') {
        content = content.substring(0, idx) + '- ' + content.substring(idx + 6);
      } else if (after === ' ') {
        content = content.substring(0, idx) + ' -' + content.substring(idx + 6);
      } else {
        content = content.substring(0, idx) + '-' + content.substring(idx + 6);
      }
    }
  }

  // === FIX LITERAL EN DASH CHARACTER ===
  // Date ranges first
  content = content.replace(/(\d)\u2013(\d)/g, '$1-$2');
  content = content.replace(/ \u2013 /g, ' - ');
  content = content.replace(/ \u2013/g, ' -');
  content = content.replace(/\u2013 /g, '- ');
  content = content.replace(/\u2013/g, '-');

  // === CLEAN UP DOUBLE SPACES AROUND HYPHENS ===
  content = content.replace(/ -  /g, ' - ');
  content = content.replace(/  - /g, ' - ');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    const rel = path.relative(srcDir, file);
    console.log('Fixed:', rel);
    filesFixed++;
  }
}

console.log('\nTotal files fixed:', filesFixed);

// Verify
let remaining = 0;
for (const file of walk(srcDir)) {
  const c = fs.readFileSync(file, 'utf8');
  const litEm = (c.match(/\u2014/g) || []).length;
  const escEmCount = c.split(escEm).length - 1;
  const litEn = (c.match(/\u2013/g) || []).length;
  const escEnCount = c.split(escEn).length - 1;
  remaining += litEm + escEmCount + litEn + escEnCount;
}
console.log('Remaining em/en dashes:', remaining);
