const fs = require('fs');

// Read profile data to extract full roles, properly handling escaped quotes
const profileContent = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Properly extract role values handling \' escapes inside single-quoted strings
const slugRoleMap = {};

// Find each profile entry
const entryPattern = /'([a-z0-9-]+)':\s*\{/g;
let match;
while ((match = entryPattern.exec(profileContent)) !== null) {
  const slug = match[1];
  const startPos = match.index + match[0].length;
  
  // Find the role line within the next ~2000 chars
  const chunk = profileContent.substring(startPos, startPos + 2000);
  const roleLineMatch = chunk.match(/role:\s*'/);
  if (!roleLineMatch) continue;
  
  const roleStart = startPos + roleLineMatch.index + roleLineMatch[0].length;
  
  // Parse the single-quoted string properly, handling \' escapes
  let role = '';
  let pos = roleStart;
  while (pos < profileContent.length) {
    const ch = profileContent[pos];
    if (ch === '\\') {
      // Escaped character
      pos++;
      if (pos < profileContent.length) {
        role += profileContent[pos];
      }
      pos++;
      continue;
    }
    if (ch === "'") {
      // End of string
      break;
    }
    role += ch;
    pos++;
  }
  
  slugRoleMap[slug] = role;
}

console.log(`Extracted ${Object.keys(slugRoleMap).length} roles from profile data`);

// Sample some to verify
const testSlugs = ['gloria-allred', 'fred-trump', 'scooter-libby', 'h-r-haldeman', 'erik-prince', 'chuck-schumer', 'chris-kempczinski', 'rod-blagojevich'];
for (const s of testSlugs) {
  if (slugRoleMap[s]) {
    console.log(`  ${s}: "${slugRoleMap[s]}"`);
  }
}

// Now fix the index page
const indexPath = 'src/app/entities/individuals/page.tsx';
let indexContent = fs.readFileSync(indexPath, 'utf8');
const lines = indexContent.split('\n');
const fixed = [];
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Parse role lines properly too
  const roleLineMatch = line.match(/^(\s*role:\s*')(.+)$/);
  if (roleLineMatch) {
    // Parse the current role value
    const afterQuote = roleLineMatch[2];
    let currentRole = '';
    let pos = 0;
    let terminated = false;
    while (pos < afterQuote.length) {
      const ch = afterQuote[pos];
      if (ch === '\\') {
        pos++;
        if (pos < afterQuote.length) {
          currentRole += afterQuote[pos];
        }
        pos++;
        continue;
      }
      if (ch === "'") {
        terminated = true;
        break;
      }
      currentRole += ch;
      pos++;
    }
    
    // Find the slug for this entry
    let slug = null;
    for (let j = i - 1; j >= Math.max(0, i - 6); j--) {
      const slugMatch = lines[j].match(/slug:\s*'([^']+)'/);
      if (slugMatch) {
        slug = slugMatch[1];
        break;
      }
    }
    
    if (slug && slugRoleMap[slug]) {
      const fullRole = slugRoleMap[slug];
      if (fullRole !== currentRole) {
        const escapedRole = fullRole.replace(/'/g, "\\'");
        // Preserve trailing comma and whitespace
        const trailingMatch = afterQuote.substring(pos).match(/^'(.*)/);
        const trailing = trailingMatch ? trailingMatch[1] : ',';
        line = roleLineMatch[1] + escapedRole + "'" + trailing;
        console.log(`Fixed role for ${slug}: "${currentRole}" -> "${fullRole}"`);
        fixes++;
      }
    } else if (!terminated) {
      console.log(`WARNING: Unterminated role at L${i+1} (slug: ${slug})`);
    }
  }
  
  fixed.push(line);
}

indexContent = fixed.join('\n');
fs.writeFileSync(indexPath, indexContent);
console.log(`\nTotal role fixes: ${fixes}`);
