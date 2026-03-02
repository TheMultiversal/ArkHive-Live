const fs = require('fs');
const path = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(path, 'utf8');
const lines = f.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const clean = line.replace(/\\'/g, '');
  const count = (clean.match(/'/g) || []).length;
  
  if (count % 2 !== 0) {
    // Try to fix: common patterns
    // Pattern 1: "Attorney's Office" in double-quoted context - skip (it's fine in double quotes)
    if (line.includes('"') && !line.includes("'")) continue;
    
    // Pattern 2: role text contains unescaped apostrophe within single quotes  
    // e.g. role: 'Convicted in Son's ...', type: 'organization'
    // Fix by truncating the role text at the apostrophe
    const roleMatch = line.match(/role:\s*'([^']*)'s\s/);
    if (roleMatch) {
      lines[i] = line.replace(/role:\s*'([^']*)'s\s[^']*'/, `role: '${roleMatch[1]}'`);
      fixes++;
      continue;
    }
    
    // Pattern 3: name or role contains apostrophe that breaks the string
    // General fix: find the problematic apostrophe and escape it
    // Look for patterns like: 'Some Text's More' -> 'Some Text\\'s More'
    const fixed = line.replace(
      /(?<=:\s*')([^']*?[a-zA-Z])'s\s+([^']*?)(?=',?\s)/g,
      "$1\\'s $2"
    );
    if (fixed !== line) {
      lines[i] = fixed;
      fixes++;
      continue;
    }
    
    // Pattern 4: JSON-format "description" with apostrophe (double-quoted strings are fine)
    // Check if the odd count is just from double-quoted strings containing apostrophes
    const doubleQuotedContent = line.replace(/"[^"]*"/g, '');
    const dqClean = doubleQuotedContent.replace(/\\'/g, '');
    const dqCount = (dqClean.match(/'/g) || []).length;
    if (dqCount % 2 === 0) continue; // The issue is inside double quotes, which is fine for JS
    
    // Pattern 5: role truncated badly - e.g. role: 'Lehman Brothers CEO. Oversaw Lehman\'
    // with trailing backslash-quote
    if (line.match(/role:\s*'[^']*\\'/)) {
      // Fix: remove the trailing part after the last non-escaped content
      lines[i] = line.replace(/(role:\s*')([^']*?)\s+[A-Z][^']*\\'/, "$1$2'");
      if (lines[i] !== line) {
        fixes++;
        continue;
      }
    }
    
    // Mark for manual review if we can't auto-fix
    // console.log(`UNFIXED Line ${i+1}: ${line.trim().substring(0, 150)}`);
  }
}

f = lines.join('\n');
fs.writeFileSync(path, f, 'utf8');
console.log(`Applied ${fixes} fixes`);

// Re-check
const check = fs.readFileSync(path, 'utf8');
const checkLines = check.split('\n');
let remaining = 0;
for (let i = 0; i < checkLines.length; i++) {
  const line = checkLines[i];
  const clean = line.replace(/\\'/g, '');
  const count = (clean.match(/'/g) || []).length;
  if (count % 2 !== 0) {
    // Filter out false positives from double-quoted strings
    const noDoubleQuoted = line.replace(/"[^"]*"/g, '');
    const noDQClean = noDoubleQuoted.replace(/\\'/g, '');
    const noDQCount = (noDQClean.match(/'/g) || []).length;
    if (noDQCount % 2 !== 0) {
      remaining++;
      if (remaining <= 10) console.log(`Still bad Line ${i+1}: ${line.trim().substring(0, 150)}`);
    }
  }
}
console.log(`Remaining unbalanced (excluding double-quoted): ${remaining}`);
