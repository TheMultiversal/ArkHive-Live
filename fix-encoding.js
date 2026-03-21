const fs = require('fs');
const path = require('path');

// CP1252 Unicode codepoint -> byte value mapping (for the 0x80-0x9F range that differs from Latin-1)
const unicodeToCp1252 = new Map([
  [0x20AC, 0x80], [0x201A, 0x82], [0x0192, 0x83], [0x201E, 0x84],
  [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87], [0x02C6, 0x88],
  [0x2030, 0x89], [0x0160, 0x8A], [0x2039, 0x8B], [0x0152, 0x8C],
  [0x017D, 0x8E], [0x2018, 0x91], [0x2019, 0x92], [0x201C, 0x93],
  [0x201D, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02DC, 0x98], [0x2122, 0x99], [0x0161, 0x9A], [0x203A, 0x9B],
  [0x0153, 0x9C], [0x017E, 0x9E], [0x0178, 0x9F]
]);

// Try to reverse one level of CP1252-as-UTF8 mojibake
function tryDecodeOneLevel(str) {
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    const cp = str.charCodeAt(i);
    if (cp <= 0x7F) {
      bytes.push(cp);
    } else if (cp <= 0xFF) {
      bytes.push(cp);
    } else if (unicodeToCp1252.has(cp)) {
      bytes.push(unicodeToCp1252.get(cp));
    } else {
      // Character can't be mapped to CP1252 byte - not mojibake
      return null;
    }
  }
  const buf = Buffer.from(bytes);
  const decoded = buf.toString('utf8');
  // Check for replacement characters (means invalid UTF-8)
  if (decoded.includes('\uFFFD')) return null;
  return decoded;
}

// Fix all mojibake in a string by repeatedly decoding
function fixMojibake(str) {
  let current = str;
  let prev = str;
  for (let level = 0; level < 20; level++) {
    const decoded = tryDecodeOneLevel(current);
    if (!decoded || decoded === current) break;
    prev = current;
    current = decoded;
  }
  // One final check: if current has replacement chars, use prev
  if (current.includes('\uFFFD')) return prev;
  return current;
}

// Check if a string has mojibake indicators
function hasMojibake(str) {
  // Look for characteristic mojibake patterns
  return str.includes('\u00C3') && (
    str.includes('\u00C6') || str.includes('\u00C2') || 
    str.includes('\u0192') || str.includes('\u00E2') ||
    str.includes('\u201A') || str.includes('\u201C') ||
    str.includes('\u201D') || str.includes('\u2019') ||
    str.includes('\u2122') || str.includes('\u2026') ||
    str.includes('\u2020') || str.includes('\u2014') ||
    str.includes('\u00A2')
  );
}

// Walk directory recursively
function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        results.push(...walkDir(fullPath));
      }
    } else if (/\.(tsx?|jsx?|css|json|md)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Main
const srcDir = path.join(__dirname, 'src');
const files = walkDir(srcDir);
let fixedCount = 0;
let errorCount = 0;

for (const filePath of files) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!hasMojibake(content)) continue;
    
    const fixed = fixMojibake(content);
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      const rel = path.relative(__dirname, filePath);
      console.log(`Fixed: ${rel}`);
      fixedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
    errorCount++;
  }
}

console.log(`\nDone! Fixed ${fixedCount} files. Errors: ${errorCount}`);
