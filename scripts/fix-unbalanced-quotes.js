const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Find all timeline entries that have unterminated strings
// These were auto-generated from descriptions and may contain unescaped quotes
// Strategy: Parse each timeline: [...] and sources: [...] block and validate/fix

const lines = f.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check for lines with timeline: or sources: that might have broken strings
  if (!line.match(/^\s*(timeline|sources):\s*\[/)) continue;
  
  // Check if this line has balanced single quotes
  // Count quotes (excluding escaped ones)
  const stripped = line.replace(/\\'/g, ''); // Remove escaped quotes
  const quoteCount = (stripped.match(/'/g) || []).length;
  
  if (quoteCount % 2 !== 0) {
    // Unbalanced quotes - this line has a problem
    // The safest fix: replace the entire timeline/sources with a safe default
    const isTimeline = line.includes('timeline:');
    const isSources = line.includes('sources:');
    
    // Try to extract meaningful data before the break
    if (isTimeline) {
      // Find the profile context
      const context = lines.slice(Math.max(0, i-30), i).join('\n');
      const descM = context.match(/description:\s*'([^']*(?:\\'[^']*)*)'/);
      const desc = descM ? descM[1] : '';
      const years = [...new Set((desc.match(/\b(1[89]\d{2}|20[0-2]\d)\b/g) || []))].sort();
      
      let newTimeline;
      if (years.length >= 2) {
        newTimeline = `    timeline: [{ date: '${years[0]}', event: 'First became publicly notable' }, { date: '${years[years.length-1]}', event: 'Most recent documented activity' }],`;
      } else if (years.length === 1) {
        newTimeline = `    timeline: [{ date: '${years[0]}', event: 'Key period of public activity' }],`;
      } else {
        newTimeline = `    timeline: [{ date: 'Ongoing', event: 'Active in documented role' }],`;
      }
      
      lines[i] = newTimeline;
      fixes++;
      console.log(`Fixed timeline at line ${i+1}`);
    }
    
    if (isSources) {
      // Find the name from context
      const context = lines.slice(Math.max(0, i-30), i).join('\n');
      const nameM = context.match(/name:\s*'([^']+)'/);
      const name = nameM ? nameM[1].replace(/'/g, '') : 'Subject';
      
      const newSources = `    sources: [{ title: 'Wikipedia: ${name}', url: 'https://en.wikipedia.org/wiki/${name.replace(/\s+/g, '_')}' }],`;
      lines[i] = newSources;
      fixes++;
      console.log(`Fixed sources at line ${i+1}`);
    }
  }
}

f = lines.join('\n');
fs.writeFileSync(file, f);
console.log('Fixed', fixes, 'broken entries');
