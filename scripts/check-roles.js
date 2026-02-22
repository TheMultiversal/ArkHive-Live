const fs = require('fs');
const profileFile = 'src/app/entities/individuals/[slug]/page.tsx';
const content = fs.readFileSync(profileFile, 'utf8');

// Extract roles for specific slugs
const slugs = [
  'gloria-allred', 'fred-trump', 'scooter-libby', 'manuel-contreras',
  'valerie-plame', 'chuck-schumer', 'richard-nixon', 'michael-flynn',
  'tristan-tate', 'rod-blagojevich', 'ethan-crumbley', 'jennifer-crumbley'
];

for (const slug of slugs) {
  const pattern = new RegExp(`'${slug.replace(/-/g, '-')}':\\s*\\{[\\s\\S]*?role:\\s*['"]([^'"]+)['"]`, 'm');
  const match = content.match(pattern);
  if (match) {
    console.log(`${slug}: role = "${match[1]}"`);
  } else {
    console.log(`${slug}: role NOT FOUND`);
  }
}

// Also find what role was generated for these in the index
const indexFile = 'src/app/entities/individuals/page.tsx';
const indexContent = fs.readFileSync(indexFile, 'utf8');
const lines = indexContent.split('\n');

// Check lines around the problematic entries
const checkLines = [2406, 2566, 2846, 2986, 3296, 3546, 3896, 3966, 4116, 4206, 7106, 7596, 8146, 8156, 8286];
for (const lineNum of checkLines) {
  if (lineNum <= lines.length) {
    // Show 3 lines before and current line
    const start = Math.max(0, lineNum - 5);
    const end = Math.min(lines.length, lineNum + 2);
    console.log(`\n--- Around L${lineNum} ---`);
    for (let i = start; i < end; i++) {
      console.log(`L${i+1}: ${lines[i].trim()}`);
    }
  }
}
