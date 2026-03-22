const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => /^[a-z0-9]\.ts$/.test(f));

const dupes = [
  'asset-forfeiture-abuse',
  'environmental-racism',
  'exxon-climate-fraud',
  'goldman-sachs-fraud',
  'iraq-sanctions',
  'immigration-detention-abuse',
  'kissinger-foreign-policy-war-crimes',
  'pfas-forever-chemicals-contamination',
  'school-to-prison-pipeline',
  'tuskegee-syphilis-experiment'
];

for (const slug of dupes) {
  console.log(`\n=== ${slug} ===`);
  for (const file of files) {
    const c = fs.readFileSync(path.join(dir, file), 'utf-8');
    const re = new RegExp("'" + slug + "':\\s*\\{", 'g');
    let match;
    while ((match = re.exec(c)) !== null) {
      const lineNum = c.substring(0, match.index).split('\n').length;
      // Find end of this entry - next top-level key or end of object
      const nextEntry = c.indexOf("\n  '", match.index + 1);
      const block = nextEntry > 0 ? c.substring(match.index, nextEntry) : c.substring(match.index, match.index + 5000);
      const hasTimeline = block.includes('timeline:');
      const timelineEntries = (block.match(/date:/g) || []).length;
      const hasSources = block.includes('sources:');
      const sourceCount = (block.match(/url:/g) || []).length;
      const hasMoneyTrails = block.includes('moneyTrails:');
      const blockLines = block.split('\n').length;
      console.log(`  ${file}:${lineNum} — ${blockLines} lines, timeline: ${hasTimeline ? timelineEntries + ' entries' : 'NONE'}, sources: ${sourceCount}, moneyTrails: ${hasMoneyTrails}`);
    }
  }
}
