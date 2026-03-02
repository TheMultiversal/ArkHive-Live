const fs = require('fs');
let f = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
const entry = `  'activision-harassment': {
    title: 'Activision Blizzard Workplace Harassment',
    subtitle: 'Systemic sexual harassment and discrimination at gaming giant',
    severity: 'high',
    category: 'Corporate Accountability',
    date: 'January 1, 2021',
    lastUpdated: 'March 1, 2026',
    summary: 'California DFEH lawsuit revealed pervasive sexual harassment, discrimination, and a frat boy culture at Activision Blizzard, leading to the ouster of CEO Bobby Kotick.',
    content: [
      'The California Department of Fair Employment and Housing filed suit after a two-year investigation found Activision Blizzard fostered a culture of constant sexual harassment, unequal pay, and retaliation.',
      'CEO Bobby Kotick was accused of knowing about and ignoring sexual misconduct, including a rape allegation. He was eventually forced out during the Microsoft acquisition.',
      'The scandal led to employee walkouts, regulatory scrutiny, and ultimately Microsoft\\'s $69 billion acquisition of Activision Blizzard.',
    ],
    tags: ['Corporate Accountability', 'Workplace Harassment', 'Gaming Industry'],
    sources: [
      { title: 'DFEH Lawsuit', url: 'https://www.documentcloud.org/', type: 'Legal' },
    ],
    affiliations: [],
  },
`;
const idx = f.lastIndexOf('};');
f = f.substring(0, idx) + entry + f.substring(idx);
fs.writeFileSync('src/app/investigations/[slug]/page.tsx', f, 'utf8');
console.log('Added activision-harassment');
