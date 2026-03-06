#!/usr/bin/env node
/**
 * Fix all em dashes (U+2014) across the codebase.
 * Handles both:
 *   - Literal em dash characters: —
 *   - Escaped Unicode sequences: \u2014
 * 
 * Replaces with " - " (space-hyphen-space), cleaning up any
 * doubled spaces from dashes that already had spaces.
 * 
 * Also fixes en dashes (\u2013 / –) used incorrectly.
 * For date ranges, uses plain hyphen: 2010-2017
 * For separators, uses " - "
 */

const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory() && !p.includes('node_modules') && !p.includes('.next')) {
      results = results.concat(walk(p));
    } else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
      results.push(p);
    }
  }
  return results;
}

const srcDir = path.join(__dirname, '..', 'src');
const files = walk(srcDir);

let totalFixed = 0;
let filesFixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // 1. Fix escaped \u2014 (em dash) in source — these appear in investigation pages
  //    The literal text in source is: \u2014
  const escEm = String.fromCharCode(92) + 'u2014'; // literal \u2014

  // Replace escaped em dashes with " - ", handling surrounding spaces
  while (content.includes(escEm)) {
    // Check surrounding context
    const idx = content.indexOf(escEm);
    const before = content[idx - 1] || '';
    const after = content[idx + 6] || '';

    let replacement;
    if (before === ' ' && after === ' ') {
      replacement = '-'; // already has spaces: " \u2014 " → " - "
    } else if (before === ' ') {
      replacement = '- '; // space before: " \u2014x" → " - x"
    } else if (after === ' ') {
      replacement = ' -'; // space after: "x\u2014 " → "x - "
    } else {
      replacement = ' - '; // no spaces: "x\u2014y" → "x - y"
    }

    content = content.substring(0, idx) + replacement + content.substring(idx + 6);
  }

  // 2. Fix literal em dash characters — these appear in data files
  // Pattern: handle spaces around literal em dashes
  content = content.replace(/ —( )/g, ' -$1');   // " — " → " - "
  content = content.replace(/ —/g, ' -');          // " —x" → " - x" — but need space after
  content = content.replace(/— /g, '- ');          // "x— " → "x- " — but need space before
  content = content.replace(/—/g, ' - ');          // "x—y" → "x - y"

  // 3. Fix escaped \u2013 (en dash) in source  
  const escEn = String.fromCharCode(92) + 'u2013';
  
  // En dashes between numbers (date ranges) → plain hyphen
  // Pattern in source: 2010\u20132017
  const enDashDatePattern = new RegExp('(\\d)' + escEn.replace('\\', '\\\\') + '(\\d)', 'g');
  // Can't use regex with literal backslash easily, so do manual replacement
  while (content.includes(escEn)) {
    const idx = content.indexOf(escEn);
    const before = content[idx - 1] || '';
    const after = content[idx + 6] || '';
    
    // Between digits = date range → plain hyphen
    if (/\d/.test(before) && /\d/.test(after)) {
      content = content.substring(0, idx) + '-' + content.substring(idx + 6);
    } else if (before === ' ' && after === ' ') {
      content = content.substring(0, idx) + '-' + content.substring(idx + 6);
    } else if (before === ' ') {
      content = content.substring(0, idx) + '- ' + content.substring(idx + 6);
    } else if (after === ' ') {
      content = content.substring(0, idx) + ' -' + content.substring(idx + 6);
    } else {
      content = content.substring(0, idx) + '-' + content.substring(idx + 6);
    }
  }

  // 4. Fix literal en dash characters – 
  content = content.replace(/(\d)–(\d)/g, '$1-$2'); // date ranges: 2010–2017 → 2010-2017
  content = content.replace(/ –( )/g, ' -$1');
  content = content.replace(/ –/g, ' -');
  content = content.replace(/– /g, '- ');
  content = content.replace(/–/g, '-');

  // 5. Clean up any double spaces created
  // Only in string content (between quotes), not in code
  // Actually, just clean all double spaces that aren't intentional indentation
  // Be conservative - only fix " -  " or "  - " patterns
  content = content.replace(/ -  /g, ' - ');
  content = content.replace(/  - /g, ' - ');

  if (content !== original) {
    const changes = countDifferences(original, content);
    fs.writeFileSync(file, content, 'utf8');
    const rel = path.relative(path.join(__dirname, '..', 'src'), file);
    console.log(`Fixed ${changes} dashes in ${rel}`);
    totalFixed += changes;
    filesFixed++;
  }
}

console.log(`\nDone! Fixed ${totalFixed} dashes across ${filesFixed} files.`);

function countDifferences(a, b) {
  // Rough count of changes
  const emLit = (a.match(/\u2014/g) || []).length - (b.match(/\u2014/g) || []).length;
  const escEm = a.split(String.fromCharCode(92) + 'u2014').length - b.split(String.fromCharCode(92) + 'u2014').length;
  const enLit = (a.match(/\u2013/g) || []).length - (b.match(/\u2013/g) || []).length;
  const escEn = a.split(String.fromCharCode(92) + 'u2013').length - b.split(String.fromCharCode(92) + 'u2013').length;
  return emLit + escEm + enLit + escEn;
}
