const fs = require('fs');
const path = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(path, 'utf8');

// Find all profiles with empty affiliations: []
const re = /affiliations:\s*\[\s*\]/g;
let match;
const emptyAffProfiles = [];

while (match = re.exec(f)) {
  // Walk backwards to find slug
  const before = f.substring(Math.max(0, match.index - 1000), match.index);
  const lines = before.split('\n');
  let slug = null;
  let name = null;
  let role = null;
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
  
  // Get name, role, description from nearby text
  const chunk = f.substring(match.index - 800, match.index + 100);
  const nameM = chunk.match(/name:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
  const roleM = chunk.match(/(?:title|role):\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
  const descM = chunk.match(/description:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
  
  if (nameM) name = nameM[1].replace(/\\'/g, "'");
  if (roleM) role = roleM[1].replace(/\\'/g, "'");
  if (descM) desc = descM[1].replace(/\\'/g, "'");
  
  emptyAffProfiles.push({ slug, name, role, desc, offset: match.index, length: match[0].length });
}

console.log(`Found ${emptyAffProfiles.length} profiles with empty affiliations`);

// Generate affiliations based on description, name, and role
function generateAffiliations(profile) {
  const { slug, name, role, desc } = profile;
  const text = `${name || ''} ${role || ''} ${desc || ''}`.toLowerCase();
  const affs = [];
  
  // Government/Political
  if (text.match(/president|white house|oval office|commander in chief/) && text.match(/united states|u\.s\.|american/)) {
    affs.push({ name: 'United States Government', role: role || 'Government Official', type: 'agency' });
  }
  if (text.match(/senator|senate/)) {
    affs.push({ name: 'United States Senate', role: 'Senator', type: 'agency' });
  }
  if (text.match(/congress|representative|house of representatives|congressman|congresswoman/)) {
    affs.push({ name: 'United States Congress', role: 'Representative', type: 'agency' });
  }
  if (text.match(/governor/)) {
    affs.push({ name: 'State Government', role: 'Governor', type: 'agency' });
  }
  if (text.match(/attorney general|department of justice|doj/)) {
    affs.push({ name: 'Department of Justice', role: 'DOJ Official', type: 'agency' });
  }
  if (text.match(/\bfbi\b/)) {
    affs.push({ name: 'Federal Bureau of Investigation', role: 'FBI Official', type: 'agency' });
  }
  if (text.match(/\bcia\b|central intelligence/)) {
    affs.push({ name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' });
  }
  if (text.match(/\bnsa\b|national security agency/)) {
    affs.push({ name: 'National Security Agency', role: 'NSA Official', type: 'agency' });
  }
  if (text.match(/pentagon|department of defense|secretary of defense|military|general |admiral /)) {
    affs.push({ name: 'Department of Defense', role: 'Defense Official', type: 'agency' });
  }
  if (text.match(/\bsec\b|securities and exchange/)) {
    affs.push({ name: 'Securities and Exchange Commission', role: 'SEC Official', type: 'agency' });
  }
  if (text.match(/\bepa\b|environmental protection/)) {
    affs.push({ name: 'Environmental Protection Agency', role: 'EPA Official', type: 'agency' });
  }
  if (text.match(/\bfda\b|food and drug/)) {
    affs.push({ name: 'Food and Drug Administration', role: 'FDA Official', type: 'agency' });
  }
  if (text.match(/police|officer|chief|sheriff|detective|nypd|lapd|cop /)) {
    affs.push({ name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' });
  }
  
  // Republican/Democrat
  if (text.match(/republican|gop|rnc|conservative party|trump admin/)) {
    affs.push({ name: 'Republican Party', role: 'Member', type: 'organization' });
  }
  if (text.match(/democrat|dnc|democratic party|biden admin|obama admin|clinton admin/)) {
    affs.push({ name: 'Democratic Party', role: 'Member', type: 'organization' });
  }
  
  // Corporate/Business
  if (text.match(/\bceo\b|chief executive|founder|chairman|executive|board of directors|corporate/)) {
    if (text.match(/goldman sachs/)) affs.push({ name: 'Goldman Sachs', role: 'Executive', type: 'corporation' });
    else if (text.match(/jpmorgan|jp morgan|chase/)) affs.push({ name: 'JPMorgan Chase', role: 'Executive', type: 'corporation' });
    else if (text.match(/meta|facebook/)) affs.push({ name: 'Meta', role: 'Executive', type: 'corporation' });
    else if (text.match(/google|alphabet/)) affs.push({ name: 'Google', role: 'Executive', type: 'corporation' });
    else if (text.match(/amazon/)) affs.push({ name: 'Amazon', role: 'Executive', type: 'corporation' });
    else if (text.match(/apple/)) affs.push({ name: 'Apple', role: 'Executive', type: 'corporation' });
    else if (text.match(/microsoft/)) affs.push({ name: 'Microsoft', role: 'Executive', type: 'corporation' });
    else if (text.match(/tesla|spacex/)) affs.push({ name: 'Tesla', role: 'Executive', type: 'corporation' });
    else if (text.match(/twitter|x corp/)) affs.push({ name: 'X Corp (Twitter)', role: 'Executive', type: 'corporation' });
    else if (text.match(/boeing/)) affs.push({ name: 'Boeing', role: 'Executive', type: 'corporation' });
    else if (text.match(/exxon/)) affs.push({ name: 'ExxonMobil', role: 'Executive', type: 'corporation' });
    else if (text.match(/pfizer/)) affs.push({ name: 'Pfizer', role: 'Executive', type: 'corporation' });
    else if (text.match(/johnson.*johnson|j&j/)) affs.push({ name: 'Johnson & Johnson', role: 'Executive', type: 'corporation' });
    else if (text.match(/purdue pharma/)) affs.push({ name: 'Purdue Pharma', role: 'Executive', type: 'corporation' });
    else if (text.match(/fox news/)) affs.push({ name: 'Fox News', role: 'Executive', type: 'corporation' });
    else if (text.match(/wells fargo/)) affs.push({ name: 'Wells Fargo', role: 'Executive', type: 'corporation' });
    else if (text.match(/blackrock/)) affs.push({ name: 'BlackRock', role: 'Executive', type: 'corporation' });
    else if (text.match(/berkshire/)) affs.push({ name: 'Berkshire Hathaway', role: 'Executive', type: 'corporation' });
    else if (text.match(/walmart/)) affs.push({ name: 'Walmart', role: 'Executive', type: 'corporation' });
    else if (text.match(/uber/)) affs.push({ name: 'Uber', role: 'Executive', type: 'corporation' });
    else if (text.match(/enron/)) affs.push({ name: 'Enron', role: 'Executive', type: 'corporation' });
    else if (text.match(/worldcom/)) affs.push({ name: 'WorldCom', role: 'Executive', type: 'corporation' });
    else if (text.match(/monsanto/)) affs.push({ name: 'Monsanto', role: 'Executive', type: 'corporation' });
  }
  
  // Media
  if (text.match(/journalist|reporter|anchor|news|media person|columnist|editor/)) {
    if (text.match(/nyt|new york times/)) affs.push({ name: 'New York Times', role: 'Journalist', type: 'corporation' });
    else if (text.match(/washington post|wapo/)) affs.push({ name: 'Washington Post', role: 'Journalist', type: 'corporation' });
    else if (text.match(/cnn/)) affs.push({ name: 'CNN', role: 'Journalist', type: 'corporation' });
    else if (text.match(/fox news|fox/)) affs.push({ name: 'Fox News', role: 'Media Figure', type: 'corporation' });
    else if (text.match(/msnbc|nbc/)) affs.push({ name: 'NBC News', role: 'Journalist', type: 'corporation' });
    else if (text.match(/cbs/)) affs.push({ name: 'CBS News', role: 'Journalist', type: 'corporation' });
    else affs.push({ name: 'Media', role: 'Journalist', type: 'corporation' });
  }
  
  // Legal
  if (text.match(/attorney|lawyer|judge|justice|court|prosecutor|defense counsel/)) {
    affs.push({ name: 'Legal Profession', role: 'Legal Professional', type: 'organization' });
  }
  
  // Military
  if (text.match(/army|navy|marines|air force|coast guard|military service|veteran|soldier|seal team/)) {
    affs.push({ name: 'United States Military', role: 'Service Member', type: 'agency' });
  }
  
  // Academic/Research
  if (text.match(/professor|university|college|academic|researcher|institute|harvard|mit|stanford|yale|columbia|princeton/)) {
    affs.push({ name: 'Academia', role: 'Academic/Researcher', type: 'organization' });
  }
  
  // Entertainment
  if (text.match(/actor|actress|director|producer|hollywood|film|movie|entertainment/)) {
    affs.push({ name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' });
  }
  if (text.match(/musician|rapper|singer|songwriter|record/)) {
    affs.push({ name: 'Music Industry', role: 'Artist', type: 'corporation' });
  }
  if (text.match(/athlete|nfl|nba|mlb|olympic|gymnast|sports/)) {
    affs.push({ name: 'Professional Sports', role: 'Athlete', type: 'organization' });
  }
  
  // International
  if (text.match(/russian|russia|kremlin|putin/)) {
    affs.push({ name: 'Russian Federation', role: 'Russian Government', type: 'agency' });
  }
  if (text.match(/chinese|china|beijing|ccp/)) {
    affs.push({ name: 'Chinese Government', role: 'Chinese Official', type: 'agency' });
  }
  if (text.match(/saudi|kingdom|riyadh|mbs/)) {
    affs.push({ name: 'Saudi Arabian Government', role: 'Saudi Official', type: 'agency' });
  }
  if (text.match(/israeli|israel|idf|mossad/)) {
    affs.push({ name: 'Israeli Government', role: 'Israeli Official', type: 'agency' });
  }
  if (text.match(/british|uk|london|parliament|royal|crown/) && !text.match(/british petroleum/)) {
    affs.push({ name: 'British Government', role: 'British Official', type: 'agency' });
  }
  
  // If we found nothing, try to generate a generic one from role
  if (affs.length === 0 && role) {
    if (text.match(/victim|killed|murdered|died|death|shot|unarmed/)) {
      affs.push({ name: 'Victim/Deceased', role: 'Victim', type: 'individual' });
    } else if (text.match(/activist|organizer|protester|advocate/)) {
      affs.push({ name: 'Civil Society', role: 'Activist', type: 'organization' });
    } else if (text.match(/whistleblow/)) {
      affs.push({ name: 'Whistleblower', role: 'Whistleblower', type: 'organization' });
    } else {
      affs.push({ name: 'Independent', role: role.substring(0, 50), type: 'organization' });
    }
  }
  
  // Deduplicate by name
  const seen = new Set();
  return affs.filter(a => {
    if (seen.has(a.name)) return false;
    seen.add(a.name);
    return true;
  });
}

// Apply replacements in reverse order
const replacements = [];
for (const profile of emptyAffProfiles) {
  const affs = generateAffiliations(profile);
  if (affs.length === 0) continue;
  
  const affStr = affs.map(a => {
    const safeName = a.name.replace(/'/g, "\\'");
    const safeRole = a.role.replace(/'/g, "\\'");
    return `{ name: '${safeName}', role: '${safeRole}', type: '${a.type}' }`;
  }).join(',\n      ');
  
  replacements.push({
    offset: profile.offset,
    length: profile.length,
    replacement: `affiliations: [\n      ${affStr},\n    ]`,
    slug: profile.slug,
  });
}

console.log(`Will populate ${replacements.length} profiles`);

// Apply in reverse
replacements.sort((a, b) => b.offset - a.offset);
for (const r of replacements) {
  f = f.substring(0, r.offset) + r.replacement + f.substring(r.offset + r.length);
}

fs.writeFileSync(path, f, 'utf8');

// Verify
const check = fs.readFileSync(path, 'utf8');
const remaining = (check.match(/affiliations:\s*\[\s*\]/g) || []).length;
console.log(`Remaining empty affiliations: ${remaining}`);
