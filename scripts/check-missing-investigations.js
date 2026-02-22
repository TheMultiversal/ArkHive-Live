const fs = require('fs');

// Read the dynamic route to extract investigation data for the missing pages
const content = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');

const missingSlugs = [
  'mkultra', 'tuskegee-experiment', 'cointelpro', 'operation-mockingbird',
  'war-on-drugs', 'police-brutality', 'flint-water-crisis', 'native-american-genocide',
  'japanese-internment', 'nsa-mass-surveillance', 'gulf-of-tonin', 'cia-coups',
  'kissinger-crimes', 'dark-money-politics', 'supreme-court-ethics', 'iraq-war-lies',
  'cia-torture-program', 'drone-assassination-program', 'operation-condor', 'chile-coup',
  'iran-coup', 'project-2025', 'federalist-society', 'vietnam-war-crimes',
  'abu-ghraib', 'indian-boarding-schools', 'iran-contra', 'bush-v-gore',
  'watergate', '2008-financial-crisis', 'mass-incarceration', 'health-insurance-deaths',
  'corporate-homicide', 'patriot-act', 'guantanamo-bay', 'private-prison-industry',
  'defamation', 'welcome-to-arkhive', 'gulf-of-tonkin'
];

let found = 0;
let notFound = 0;

for (const slug of missingSlugs) {
  // Find the slug in the database
  const pattern = new RegExp(`'${slug}':\\s*\\{`);
  const match = pattern.exec(content);
  if (match) {
    found++;
    // Extract the title
    const chunk = content.substring(match.index, match.index + 500);
    const titleMatch = chunk.match(/title:\s*'([^']+)'/);
    const severityMatch = chunk.match(/severity:\s*'([^']+)'/);
    const categoryMatch = chunk.match(/category:\s*'([^']+)'/);
    console.log(`FOUND: ${slug}`);
    console.log(`  title: ${titleMatch?.[1] || 'N/A'}`);
    console.log(`  severity: ${severityMatch?.[1] || 'N/A'}`);
    console.log(`  category: ${categoryMatch?.[1] || 'N/A'}`);
    
    // Check for affiliations
    const affiliations = chunk.match(/affiliations:\s*\[/);
    if (affiliations) {
      console.log(`  has affiliations: yes`);
    }
  } else {
    notFound++;
    console.log(`NOT FOUND: ${slug}`);
  }
}

console.log(`\nFound: ${found}, Not Found: ${notFound}`);
