const fs = require('fs');
const filePath = 'src/app/entities/individuals/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
const fixed = [];
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // For entries with slug containing o' names, fix name from slug
  // Check if this is a name line that was truncated
  const nameMatch = line.match(/^(\s*name:\s*')(.+?)(',[^\S\r\n]*\r?)$/);
  if (nameMatch) {
    const name = nameMatch[2];
    // Check the slug 2 lines above
    if (i >= 2) {
      const slugLine = lines[i-2];
      const slugMatch = slugLine.match(/slug:\s*'([^']+)'/);
      if (slugMatch) {
        const slug = slugMatch[1];
        // Derive proper name from slug
        const expectedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        // Check specifically for truncated O' names
        if ((name.endsWith(' O') || name.endsWith(' D')) && slug.includes('o') && !name.includes('\'')) {
          // Find the proper name from the description on the next few lines
          for (let j = i+1; j < Math.min(i+5, lines.length); j++) {
            const descLine = lines[j];
            const descMatch = descLine.match(/description:\s*'([^\\]*(?:\\.[^\\]*)*)/);
            if (descMatch) {
              const desc = descMatch[1];
              // Extract the full name from the start of description
              // Usually: "FirstName O'LastName was/is..."
              const nameFromDesc = desc.match(/^([A-Z][a-z]+(?:\s+[A-Z]\.?)?\s+O'[A-Za-z]+(?:\s+[A-Z][a-z]+)?)/);
              if (nameFromDesc) {
                const fullName = nameFromDesc[1];
                line = nameMatch[1] + fullName.replace(/'/g, "\\'") + nameMatch[3];
                console.log(`Fixed name L${i+1}: "${name}" -> "${fullName}"`);
                fixes++;
                break;
              }
              // Try D' names too
              const dNameFromDesc = desc.match(/^([A-Z][a-z]+\s+D'[A-Za-z]+(?:\s+[A-Z][a-z]+)?)/);
              if (dNameFromDesc) {
                const fullName = dNameFromDesc[1];
                line = nameMatch[1] + fullName.replace(/'/g, "\\'") + nameMatch[3];
                console.log(`Fixed name L${i+1}: "${name}" -> "${fullName}"`);
                fixes++;
                break;
              }
            }
          }
        }
      }
    }
  }

  // Also fix truncated roles - check for roles that seem cut off
  // We can detect this by checking if the role matches a real role description from the profile data
  
  fixed.push(line);
}

content = fixed.join('\n');
fs.writeFileSync(filePath, content);
console.log(`\nTotal name fixes: ${fixes}`);

// Now let's also find remaining issues - check all entries have matching slugs/names
console.log('\nChecking for mismatched slug/name entries...');
const finalContent = fs.readFileSync(filePath, 'utf8');
const finalLines = finalContent.split('\n');
for (let i = 0; i < finalLines.length; i++) {
  const nameMatch2 = finalLines[i].match(/name:\s*'([^'\\]*(?:\\.[^'\\]*)*)'/);
  if (nameMatch2) {
    const name = nameMatch2[1].replace(/\\'/g, "'");
    // Check if name seems too short (single word or just one letter after space)
    if (name.match(/\s[A-Z]$/) || name.length < 4) {
      const slugLine = i >= 2 ? finalLines[i-2] : '';
      const slug = slugLine.match(/slug:\s*'([^']+)'/)?.[1] || 'unknown';
      console.log(`  Suspicious name L${i+1}: "${name}" (slug: ${slug})`);
    }
  }
}
