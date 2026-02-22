const fs = require('fs');

// Read profile data to extract full roles
const profileContent = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Extract ALL roles properly, handling both single and double quoted strings
const slugRoleMap = {};
const profilePattern = /'([a-z0-9-]+)':\s*\{[\s\S]*?role:\s*(['"])([\s\S]*?)\2/gm;
let m;
while ((m = profilePattern.exec(profileContent)) !== null) {
  const slug = m[1];
  const role = m[3];
  slugRoleMap[slug] = role;
}

console.log(`Found ${Object.keys(slugRoleMap).length} roles in profile data`);

// Now check the index page and fix truncated roles
const indexPath = 'src/app/entities/individuals/page.tsx';
let indexContent = fs.readFileSync(indexPath, 'utf8');
const lines = indexContent.split('\n');
const fixed = [];
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Check if this is a role line
  const roleMatch = line.match(/^(\s*role:\s*')(.+?)(',[^\S\r\n]*\r?)$/);
  if (roleMatch) {
    const currentRole = roleMatch[2].replace(/\\'/g, "'");
    
    // Find the slug for this entry (usually 3-4 lines before)
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
      // Check if the current role is a truncation of the full role
      if (fullRole.length > currentRole.length && fullRole.startsWith(currentRole.replace(/\\/g, ''))) {
        const escapedRole = fullRole.replace(/'/g, "\\'");
        line = roleMatch[1] + escapedRole + roleMatch[3];
        console.log(`Fixed role for ${slug}: "${currentRole}" -> "${fullRole}"`);
        fixes++;
      }
    }
  }
  
  fixed.push(line);
}

indexContent = fixed.join('\n');
fs.writeFileSync(indexPath, indexContent);
console.log(`\nTotal role fixes: ${fixes}`);
