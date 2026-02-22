// Merge generated index entries into the individuals page
const fs = require('fs');

const indexPath = 'src/app/entities/individuals/page.tsx';
const indexContent = fs.readFileSync(indexPath, 'utf8');
const newEntries = fs.readFileSync('scripts/generated-index-entries.ts', 'utf8');

// Find the closing ]; of the individuals array
const marker = '  },\r\n];\r\n\r\nexport default function IndividualsPage';
const insertPoint = indexContent.indexOf(marker);

if (insertPoint === -1) {
  console.error('Could not find insertion point!');
  console.error('Looking for:', JSON.stringify(marker.substring(0, 60)));
  // Try to find just ];\n
  const lines = indexContent.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '];') {
      console.log('Found ]; at line', i + 1);
    }
  }
  process.exit(1);
}

// Insert after the last },\n but before ];\n
const insertAt = insertPoint + '  },\r\n'.length;
const result = indexContent.substring(0, insertAt) + newEntries + indexContent.substring(insertAt);
fs.writeFileSync(indexPath, result, 'utf8');

// Verify
const updated = fs.readFileSync(indexPath, 'utf8');
const slugCount = (updated.match(/slug:\s*['"]/g) || []).length;
console.log(`Updated individuals page now has ${slugCount} entries`);
console.log(`File size: ${(updated.length / 1024).toFixed(0)} KB`);
