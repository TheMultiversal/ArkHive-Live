const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Issue 1: \\\' in source titles/urls - these are names like "Roberto D'Aubuisson"
// where the apostrophe produces \\' in the output, which JS reads as literal \ then string end
// Fix: Replace \\' with just ' in these contexts
// But we need to be careful - \\' is valid in some places (description strings etc)

// Actually, let's target specifically: within sources: [...] and timeline: [...] blocks
// that are on single lines, replace \\' with '

let fixes = 0;
const lines = f.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Fix sources with broken escaping
  if (line.match(/^\s*sources:\s*\[/) && line.includes("\\\\'")) {
    lines[i] = line.replace(/\\\\'/g, "'");
    fixes++;
  }
  
  // Also fix sources added by fix-missing-fields.js that have \\'
  if (line.match(/^\s*sources:\s*\[/) && line.includes("\\'")) {
    // Replace \\' only in Wikipedia title/url parts, before ) or } or ,
    lines[i] = lines[i].replace(/\\'/g, "'");
    fixes++;
  }
  
  // Fix timelines with same issue
  if (line.match(/^\s*timeline:\s*\[/) && line.includes("\\'")) {
    lines[i] = lines[i].replace(/\\'/g, "'");
    fixes++;
  }
  
  // Fix timeline lines that have knownAssociates concatenated via \r
  if (line.includes('timeline:') && line.includes('knownAssociates:')) {
    // Split at the \r boundary between timeline end and knownAssociates start
    const parts = line.split(/\r(?=\s*knownAssociates)/);
    if (parts.length > 1) {
      lines[i] = parts[0];
      // Insert the remaining parts as new lines
      lines.splice(i + 1, 0, ...parts.slice(1));
      fixes++;
    }
  }
  
  // Fix timeline lines that have sources concatenated via \r
  if (line.includes('timeline:') && line.includes('sources:') && !line.includes("event: 'source")) {
    const parts = line.split(/\r(?=\s*sources)/);
    if (parts.length > 1) {
      lines[i] = parts[0];
      lines.splice(i + 1, 0, ...parts.slice(1));
      fixes++;
    }
  }
}

f = lines.join('\n');

// Also fix any remaining \r that's not followed by \n (bare CR)
// Replace \r that's NOT \r\n with \r\n
f = f.replace(/\r(?!\n)/g, '\r\n');

fs.writeFileSync(file, f);
console.log('Fixed', fixes, 'issues');

// Check remaining double backslash quotes
const remainingDblBs = (f.match(/\\\\'/g) || []).length;
console.log('Remaining \\\\\\047:', remainingDblBs);
