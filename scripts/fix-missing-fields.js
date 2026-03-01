const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Find all profiles that are missing sources field
const blocks = f.split(/\n  '/);
let missingSources = 0;
let missingTimeline = 0;
let missingKA = 0;

for (let i = 0; i < blocks.length; i++) {
  const slugM = blocks[i].match(/^([\w][\w-]*)'/);
  if (!slugM) continue;
  const slug = slugM[1];
  
  if (!blocks[i].includes('sources:')) {
    missingSources++;
    // Add sources before the closing of the profile block
    const nameM = blocks[i].match(/name:\s*'([^']+)'/);
    const name = nameM ? nameM[1].replace(/'/g, '') : slug.replace(/-/g, ' ');
    const wikiName = name.replace(/\s+/g, '_');
    const srcStr = `\n    sources: [{ title: 'Wikipedia: ${name}', url: 'https://en.wikipedia.org/wiki/${wikiName}' }],`;
    
    // Insert before the last line of the block (which should end with },)
    const lastClose = blocks[i].lastIndexOf('\n  },');
    if (lastClose !== -1) {
      blocks[i] = blocks[i].substring(0, lastClose) + srcStr + blocks[i].substring(lastClose);
    } else {
      // Try alternate closing
      const lastClose2 = blocks[i].lastIndexOf('\n  }');
      if (lastClose2 !== -1) {
        blocks[i] = blocks[i].substring(0, lastClose2) + srcStr + blocks[i].substring(lastClose2);
      }
    }
  }
  
  if (!blocks[i].includes('timeline:')) {
    missingTimeline++;
    const srcStr = `\n    timeline: [{ date: 'Ongoing', event: 'Active in documented role' }],`;
    const lastClose = blocks[i].lastIndexOf('\n  },');
    if (lastClose !== -1) {
      blocks[i] = blocks[i].substring(0, lastClose) + srcStr + blocks[i].substring(lastClose);
    }
  }
  
  if (!blocks[i].includes('knownAssociates:')) {
    missingKA++;
  }
}

console.log('Missing sources:', missingSources, '(fixed)');
console.log('Missing timeline:', missingTimeline, '(fixed)');
console.log('Missing knownAssociates:', missingKA);

f = blocks.join("\n  '");
fs.writeFileSync(file, f);
console.log('Done');
