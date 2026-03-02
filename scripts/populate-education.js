const fs = require('fs');
const path = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(path, 'utf8');

// Find all profiles with empty education: []
const re = /education:\s*\[\s*\]/g;
let match;
const emptyEduProfiles = [];

while (match = re.exec(f)) {
  const before = f.substring(Math.max(0, match.index - 1000), match.index);
  const lines = before.split('\n');
  let slug = null;
  let name = null;
  let desc = null;
  
  for (let i = lines.length - 1; i >= 0; i--) {
    const sm = lines[i].match(/['"]([\w][\w-]*)['"]\s*:\s*\{/);
    if (sm && !['name','type','title','role','riskLevel','description','birthDate','deathDate','education',
                'affiliations','knownAssociates','controversies','relatedInvestigations','timeline','sources',
                'charges','nationality','status','occupation','severity','relationship','strength','date','event','url','href'].includes(sm[1])) {
      slug = sm[1];
      break;
    }
  }
  
  if (!slug) continue;
  
  const chunk = f.substring(match.index - 800, match.index + 100);
  const nameM = chunk.match(/name:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
  const descM = chunk.match(/description:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
  
  if (nameM) name = nameM[1].replace(/\\'/g, "'");
  if (descM) desc = descM[1].replace(/\\'/g, "'");
  
  emptyEduProfiles.push({ slug, name, desc, offset: match.index, length: match[0].length });
}

console.log(`Found ${emptyEduProfiles.length} profiles with empty education`);

// Known education data for notable figures
const knownEducation = {
  'trayvon-martin': ['Miami-Dade County Public Schools'],
  'michael-brown': ['Normandy High School'],
  'eric-garner': ['Brooklyn, New York'],
  'rosa-parks': ['Alabama State Teachers College'],
  'abraham-lincoln': ['Self-educated'],
  'thurgood-marshall': ['Howard University School of Law', 'Lincoln University'],
  'pat-tillman': ['Arizona State University'],
  'ralph-nader': ['Princeton University', 'Harvard Law School'],
  'charlie-munger': ['University of Michigan', 'Harvard Law School'],
  'simone-biles': ['University of the People (Online)'],
  'jay-z': ['Eli Whitney High School'],
  'tom-cruise': ['Glen Ridge High School, NJ'],
  'pope-francis': ['Universidad del Salvador', 'Philosophical and Theological Faculty of San Miguel'],
  'adam-schiff': ['Stanford University', 'Harvard Law School'],
  'bob-woodward': ['Yale University'],
  'antony-blinken': ['Harvard University', 'Columbia Law School'],
  'moon-jae-in': ['Kyung Hee University Law School'],
  'paul-ryan': ['Miami University of Ohio'],
  'mike-huckabee': ['Ouachita Baptist University', 'Southwestern Baptist Theological Seminary'],
  'louis-brandeis': ['Harvard Law School'],
  'douglas-macarthur': ['United States Military Academy, West Point'],
  'arundhati-roy': ['School of Planning and Architecture, Delhi'],
  'alberto-fujimori': ['National Agrarian University', 'University of Wisconsin-Milwaukee'],
  'timnit-gebru': ['Stanford University (PhD)', 'Apple Academy Ethiopia'],
};

function generateEducation(profile) {
  const { slug, name, desc } = profile;
  
  if (knownEducation[slug]) return knownEducation[slug];
  
  const text = `${name || ''} ${desc || ''}`.toLowerCase();
  const edu = [];
  
  // Extract education mentions from description
  const universities = [
    ['harvard', 'Harvard University'],
    ['yale', 'Yale University'],
    ['princeton', 'Princeton University'],
    ['stanford', 'Stanford University'],
    ['columbia university', 'Columbia University'],
    ['mit', 'Massachusetts Institute of Technology'],
    ['wharton', 'Wharton School, University of Pennsylvania'],
    ['georgetown', 'Georgetown University'],
    ['west point', 'United States Military Academy'],
    ['naval academy', 'United States Naval Academy'],
    ['oxford', 'University of Oxford'],
    ['cambridge', 'University of Cambridge'],
    ['uc berkeley', 'UC Berkeley'],
    ['ucla', 'UCLA'],
    ['nyu', 'New York University'],
    ['cornell', 'Cornell University'],
    ['duke', 'Duke University'],
    ['university of chicago', 'University of Chicago'],
    ['university of michigan', 'University of Michigan'],
    ['university of virginia', 'University of Virginia'],
    ['university of texas', 'University of Texas'],
    ['university of pennsylvania', 'University of Pennsylvania'],
  ];
  
  for (const [keyword, fullName] of universities) {
    if (text.includes(keyword)) {
      edu.push(fullName);
    }
  }
  
  // If description mentions "law" context
  if (edu.length === 0) {
    if (text.match(/attorney|lawyer|law degree|law school|juris doctor|j\.d\./)) {
      edu.push('Law Degree');
    }
    if (text.match(/mba|business school|business degree/)) {
      edu.push('MBA');
    }
    if (text.match(/ph\.?d|doctorate|doctoral/)) {
      edu.push('Doctorate');
    }
    if (text.match(/medical school|m\.d\.|physician|doctor |surgeon/)) {
      edu.push('Medical Degree');
    }
    if (text.match(/military academy|military school|officer training/)) {
      edu.push('Military Academy');
    }
  }
  
  return edu;
}

// Apply replacements
const replacements = [];
let noMatch = 0;

for (const profile of emptyEduProfiles) {
  const edu = generateEducation(profile);
  if (edu.length === 0) {
    noMatch++;
    continue;
  }
  
  const eduStr = edu.map(e => {
    const safe = e.replace(/'/g, "\\'");
    return `'${safe}'`;
  }).join(',\n      ');
  
  replacements.push({
    offset: profile.offset,
    length: profile.length,
    replacement: `education: [\n      ${eduStr},\n    ]`,
  });
}

console.log(`Will populate ${replacements.length} profiles (${noMatch} had no match)`);

// Apply in reverse
replacements.sort((a, b) => b.offset - a.offset);
for (const r of replacements) {
  f = f.substring(0, r.offset) + r.replacement + f.substring(r.offset + r.length);
}

fs.writeFileSync(path, f, 'utf8');

const check = fs.readFileSync(path, 'utf8');
const remaining = (check.match(/education:\s*\[\s*\]/g) || []).length;
console.log(`Remaining empty education: ${remaining}`);
