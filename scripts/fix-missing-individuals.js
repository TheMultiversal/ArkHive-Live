/**
 * fix-missing-individuals.js
 * Adds minimal individual profiles for the 9 remaining broken individual entity links
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

const MISSING_INDIVIDUALS = {
  // koch-brothers -> k.ts (we'll use koch-brothers as the slug in k.ts)
  'k.ts': {
    'koch-brothers': {
      name: 'Koch Brothers (Charles & David)',
      title: 'Industrialists & Political Donors',
      role: 'Koch Industries Executives',
      riskLevel: 'critical',
      description: 'Charles and David Koch built a vast political influence network through Koch Industries, funding climate change denial, deregulation efforts, and far-right political campaigns. Their dark money network reshaped American politics.',
      education: ['MIT (Charles)', 'MIT (David)'],
      affiliations: [
        { name: 'Koch Industries', role: 'CEO / Executive VP', type: 'corporation' }
      ],
      controversies: [
        'Funded climate change denial campaigns for decades',
        'Built vast dark money political network',
        'Koch Industries environmental violations',
        'Anti-union and anti-worker campaigns'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1967', event: 'Charles Koch takes control of Koch Industries' },
        { date: '2010', event: 'Koch network becomes major force in Citizens United era' }
      ],
    },
  },
  // franklin-raines -> f.ts
  'f.ts': {
    'franklin-raines': {
      name: 'Franklin Raines',
      title: 'Former CEO of Fannie Mae',
      role: 'Financial Executive',
      riskLevel: 'high',
      description: 'Franklin Raines served as CEO of Fannie Mae from 1999-2004. Forced to resign after an accounting scandal that overstated earnings by $6.3 billion. The company paid $400 million in fines.',
      education: ['Harvard University', 'Oxford University (Rhodes Scholar)'],
      affiliations: [
        { name: 'Fannie Mae', role: 'Former CEO', type: 'corporation' }
      ],
      controversies: [
        '$6.3 billion accounting scandal at Fannie Mae',
        'Received $90 million in compensation based on inflated earnings',
        'SEC civil charges settled for $24.7 million'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1999', event: 'Becomes CEO of Fannie Mae' },
        { date: '2004', event: 'Forced to resign amid accounting scandal' }
      ],
    },
  },
  // adolf-hitler -> h.ts (already has a.ts full, use h for historical context)
  'h.ts': {
    'adolf-hitler': {
      name: 'Adolf Hitler',
      title: 'Dictator of Nazi Germany',
      role: 'Historical Figure - War Criminal',
      riskLevel: 'critical',
      description: 'Leader of Nazi Germany responsible for the Holocaust, World War II, and the systematic murder of six million Jews and millions of others. His regime represents the ultimate failure of accountability.',
      education: [],
      affiliations: [
        { name: 'Nazi Party', role: 'Führer', type: 'organization' }
      ],
      controversies: [
        'The Holocaust - systematic genocide of 6 million Jews',
        'Started World War II causing 70+ million deaths',
        'Operation Paperclip - Nazi scientists recruited by US after war',
        'Industrialists who funded Nazi rise to power faced minimal accountability'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1933', event: 'Becomes Chancellor of Germany' },
        { date: '1945', event: 'Death in Berlin bunker' }
      ],
    },
  },
  // rahm-emanuel -> r.ts... actually slug starts with 'r' but could be in any
  // Let me check - the shard is based on first letter of slug
  'r.ts': {
    'rahm-emanuel': {
      name: 'Rahm Emanuel',
      title: 'Former Mayor of Chicago / Ambassador to Japan',
      role: 'Political Figure',
      riskLevel: 'high',
      description: 'Former White House Chief of Staff, US Representative, and Mayor of Chicago. Accused of covering up the Laquan McDonald shooting video until after his re-election.',
      education: ['Northwestern University', 'Sarah Lawrence College'],
      affiliations: [
        { name: 'City of Chicago', role: 'Former Mayor', type: 'agency' }
      ],
      controversies: [
        'Alleged cover-up of Laquan McDonald police shooting video',
        'Closed 50 Chicago public schools in predominantly Black neighborhoods',
        'Mental health clinic closures under his administration'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '2011', event: 'Elected Mayor of Chicago' },
        { date: '2015', event: 'Laquan McDonald video cover-up controversy' }
      ],
    },
  },
  // joseph-kennedy-sr -> j.ts
  'j.ts': {
    'joseph-kennedy-sr': {
      name: 'Joseph P. Kennedy Sr.',
      title: 'Businessman & Political Figure',
      role: 'Historical Figure',
      riskLevel: 'high',
      description: 'Patriarch of the Kennedy political dynasty. Made fortune through alleged bootlegging, insider trading, and Hollywood dealings. Served as SEC Chairman and Ambassador to the UK.',
      education: ['Harvard University'],
      affiliations: [
        { name: 'SEC', role: 'First Chairman', type: 'agency' }
      ],
      controversies: [
        'Alleged bootlegging operations during Prohibition',
        'Insider trading before securities regulation',
        'Lobotomy of daughter Rosemary Kennedy',
        'Appeasement of Nazi Germany as UK Ambassador'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1934', event: 'Appointed first SEC Chairman' },
        { date: '1938', event: 'Ambassador to United Kingdom' }
      ],
    },
  },
  // leonard-peltier -> l.ts
  'l.ts': {
    'leonard-peltier': {
      name: 'Leonard Peltier',
      title: 'Indigenous Rights Activist / Political Prisoner',
      role: 'Activist',
      riskLevel: 'high',
      description: 'Native American activist and member of AIM convicted of killing two FBI agents in 1975. Many consider him a political prisoner, citing coerced witnesses, suppressed evidence, and prosecutorial misconduct.',
      education: [],
      affiliations: [
        { name: 'American Indian Movement', role: 'Member', type: 'organization' }
      ],
      controversies: [
        'Convicted on disputed evidence for killing two FBI agents',
        'Considered a political prisoner by Amnesty International',
        'FBI misconduct during investigation',
        'Multiple appeals and clemency petitions denied'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1975', event: 'Pine Ridge shootout - two FBI agents killed' },
        { date: '1977', event: 'Convicted of two counts of first-degree murder' }
      ],
    },
  },
  // frances-kelsey -> f.ts (already adding franklin-raines here)
  // We need to handle multiple additions to same file
  // Actually, let me put her in f.ts as well
  'f.ts+': {
    'frances-kelsey': {
      name: 'Frances Oldham Kelsey',
      title: 'FDA Pharmacologist',
      role: 'Government Scientist / Whistleblower',
      riskLevel: 'low',
      description: 'FDA reviewer who refused to approve thalidomide for US market despite intense pharmaceutical industry pressure, preventing a major health catastrophe in America.',
      education: ['McGill University', 'University of Chicago (PhD, MD)'],
      affiliations: [
        { name: 'FDA', role: 'Drug Reviewer', type: 'agency' }
      ],
      controversies: [
        'Faced intense industry pressure to approve thalidomide',
        'Her resistance saved thousands of American babies from birth defects',
        'Received Presidents Award for Distinguished Federal Civilian Service'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1960', event: 'Refuses to approve thalidomide for US market' },
        { date: '1962', event: 'Receives award from President Kennedy' }
      ],
    },
  },
  // alfred-moore-waddell -> a.ts
  'a.ts': {
    'alfred-moore-waddell': {
      name: 'Alfred Moore Waddell',
      title: 'White Supremacist Coup Leader',
      role: 'Historical Figure',
      riskLevel: 'critical',
      description: 'Led the 1898 Wilmington massacre and coup, the only successful violent overthrow of an elected government in US history. White supremacists murdered Black citizens and installed Waddell as mayor.',
      education: [],
      affiliations: [
        { name: 'City of Wilmington', role: 'Installed Mayor', type: 'agency' }
      ],
      controversies: [
        'Led 1898 Wilmington massacre - only successful US coup',
        'Mob murdered Black citizens and burned Black-owned newspaper',
        'Overthrew democratically elected multiracial government',
        'Installed as mayor by white supremacist mob'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1898-11-10', event: 'Leads Wilmington massacre and coup' }
      ],
    },
  },
  // josephus-daniels -> j.ts (already adding joseph-kennedy-sr here)
  'j.ts+': {
    'josephus-daniels': {
      name: 'Josephus Daniels',
      title: 'Newspaper Publisher / Secretary of the Navy',
      role: 'Historical Figure',
      riskLevel: 'high',
      description: 'Newspaper editor who used his Wilmington paper to incite the 1898 Wilmington massacre through racist propaganda. Later served as Secretary of the Navy under Woodrow Wilson.',
      education: [],
      affiliations: [
        { name: 'US Navy', role: 'Former Secretary', type: 'agency' }
      ],
      controversies: [
        'Used newspaper to incite 1898 Wilmington massacre',
        'Published racist propaganda targeting Black citizens',
        'Helped plan the violent overthrow of elected government',
        'Never held accountable for role in massacre'
      ],
      relatedInvestigations: [],
      timeline: [
        { date: '1898', event: 'Incites Wilmington massacre through newspaper' },
        { date: '1913', event: 'Appointed Secretary of the Navy' }
      ],
    },
  },
};

// Add profiles to shard files
function addToShard(shardFile, profiles) {
  const filePath = path.join(INDIVIDUALS_DIR, shardFile);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  for (const [slug, profile] of Object.entries(profiles)) {
    if (content.includes(`'${slug}':`)) {
      console.log(`  [SKIP] ${slug} already exists in ${shardFile}`);
      continue;
    }
    
    // Build the profile string manually for proper formatting
    const profileStr = buildProfileString(slug, profile);
    
    // Insert before the closing }; and export
    content = content.replace(
      /\r?\n};\r?\n\r?\nexport default profiles;/,
      `,\n${profileStr}\n};\n\nexport default profiles;`
    );
    
    console.log(`  [ADD] ${slug} → ${shardFile}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function buildProfileString(slug, p) {
  const lines = [];
  lines.push(` '${slug}': {`);
  lines.push(`   name: ${JSON.stringify(p.name)},`);
  lines.push(`   title: ${JSON.stringify(p.title)},`);
  lines.push(`   role: ${JSON.stringify(p.role)},`);
  lines.push(`   riskLevel: ${JSON.stringify(p.riskLevel)},`);
  lines.push(`   description: ${JSON.stringify(p.description)},`);
  lines.push(`   education: ${JSON.stringify(p.education)},`);
  
  // Affiliations
  lines.push(`   affiliations: [`);
  for (const aff of p.affiliations) {
    lines.push(`     { name: ${JSON.stringify(aff.name)}, role: ${JSON.stringify(aff.role)}, type: ${JSON.stringify(aff.type)} },`);
  }
  lines.push(`   ],`);
  
  // Controversies
  lines.push(`   controversies: [`);
  for (const c of p.controversies) {
    lines.push(`     ${JSON.stringify(c)},`);
  }
  lines.push(`   ],`);
  
  // Related investigations
  lines.push(`   relatedInvestigations: [],`);
  
  // Timeline
  lines.push(`   timeline: [`);
  for (const t of p.timeline) {
    lines.push(`     { date: ${JSON.stringify(t.date)}, event: ${JSON.stringify(t.event)} },`);
  }
  lines.push(`   ],`);
  
  lines.push(` },`);
  return lines.join('\n');
}

// Process each shard
console.log('=== ADDING MISSING INDIVIDUAL PROFILES ===\n');

// Group entries by actual shard file (handle the '+' suffix for multiple additions)
const shardMap = {};
for (const [key, profiles] of Object.entries(MISSING_INDIVIDUALS)) {
  const actualFile = key.replace('+', '');
  if (!shardMap[actualFile]) shardMap[actualFile] = {};
  Object.assign(shardMap[actualFile], profiles);
}

for (const [shardFile, profiles] of Object.entries(shardMap)) {
  console.log(`Processing ${shardFile}...`);
  addToShard(shardFile, profiles);
}

console.log('\nDone!');
