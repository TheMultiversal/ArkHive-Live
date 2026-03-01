#!/usr/bin/env node
/**
 * expand-wave2.js
 * Adds knownAssociates arrays to 34 more individual profiles in page.tsx
 * Wave 2 expansion — same approach as expand-all.js
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// ── Expansion Data ──────────────────────────────────────────────
// Each slug maps to an array of { name, relationship, href } objects.
// Only profiles that are MISSING knownAssociates will be modified.

const expansionData = {

  // ═══════════════════════════════════════════════════════════════
  //  TRUMP ERA & POLITICS
  // ═══════════════════════════════════════════════════════════════

  'jd-vance': [
    { name: 'Donald Trump', relationship: 'Selected as Vice Presidential running mate for 2024 presidential campaign after initially being a vocal Trump critic', href: '/entities/individuals/donald-trump' },
    { name: 'Peter Thiel', relationship: 'Billionaire venture capitalist mentor who invested in Vance\\\'s career and funded his 2022 Ohio Senate campaign with $15 million', href: '/entities/individuals/peter-thiel' },
    { name: 'Mitch McConnell', relationship: 'Senate Republican leader and Kentucky colleague; McConnell initially opposed Vance\\\'s Senate candidacy', href: '/entities/individuals/mitch-mcconnell' },
    { name: 'Ron DeSantis', relationship: 'Fellow Republican who competed for Trump\\\'s favor before Vance secured the VP nomination', href: '/entities/individuals/ron-desantis' },
  ],

  'roy-cohn': [
    { name: 'Donald Trump', relationship: 'Served as Trump\\\'s personal attorney and ruthless mentor throughout the 1970s-80s, teaching him to never apologize and always attack', href: '/entities/individuals/donald-trump' },
    { name: 'Joseph McCarthy', relationship: 'Served as chief counsel to Senator McCarthy during the Army-McCarthy hearings in 1954', href: '/entities/individuals/joseph-mccarthy' },
    { name: 'Roger Stone', relationship: 'Fellow political operative in New York Republican circles; both shaped aggressive political tactics that defined modern GOP', href: '/entities/individuals/roger-stone' },
    { name: 'Rupert Murdoch', relationship: 'Mutual associate in New York media and political power circles during the 1970s-80s', href: '/entities/individuals/rupert-murdoch' },
  ],

  'ajit-pai': [
    { name: 'Donald Trump', relationship: 'Trump-appointed FCC Chairman from 2017-2021 who controversially repealed Obama-era net neutrality protections', href: '/entities/individuals/donald-trump' },
    { name: 'Mitch McConnell', relationship: 'Senate Republican leader who championed Pai\\\'s FCC nomination and supported his deregulatory agenda', href: '/entities/individuals/mitch-mcconnell' },
    { name: 'Mark Zuckerberg', relationship: 'Meta CEO whose platforms were directly affected by FCC regulatory decisions on internet governance', href: '/entities/individuals/mark-zuckerberg' },
  ],

  'lee-zeldin': [
    { name: 'Donald Trump', relationship: 'Trump-appointed EPA Administrator and longtime loyal congressional ally who defended Trump during first impeachment', href: '/entities/individuals/donald-trump' },
    { name: 'Scott Pruitt', relationship: 'Predecessor as EPA head known for aggressive regulatory rollbacks; Zeldin continued deregulatory approach', href: '/entities/individuals/scott-pruitt' },
    { name: 'Kevin McCarthy', relationship: 'House Republican colleague who supported Zeldin\\\'s gubernatorial bid in New York', href: '/entities/individuals/kevin-mccarthy' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  HISTORICAL FIGURES
  // ═══════════════════════════════════════════════════════════════

  'jack-ruby': [
    { name: 'Lee Harvey Oswald', relationship: 'Shot and killed Oswald on live television on November 24, 1963, two days after JFK assassination', href: '/entities/individuals/lee-harvey-oswald' },
    { name: 'John F. Kennedy', relationship: 'Connected to JFK assassination through killing of accused assassin Oswald, fueling decades of conspiracy theories', href: '/entities/individuals/john-f-kennedy' },
  ],

  'malcolm-x': [
    { name: 'Martin Luther King Jr.', relationship: 'Fellow civil rights leader with contrasting philosophies — King advocated nonviolent integration while Malcolm X initially promoted Black separatism', href: '/entities/individuals/martin-luther-king-jr' },
    { name: 'Elijah Muhammad', relationship: 'Nation of Islam leader and former mentor whom Malcolm X followed devotedly before breaking away in 1964 over personal and ideological disputes', href: '/entities/individuals/elijah-muhammad' },
  ],

  'gary-webb': [
    { name: 'Oliver North', relationship: 'Webb\\\'s "Dark Alliance" series exposed CIA-Contra cocaine trafficking networks that North helped coordinate', href: '/entities/individuals/oliver-north' },
    { name: 'Ronald Reagan', relationship: 'CIA-backed Contra cocaine trafficking exposed by Webb occurred under the Reagan administration\\\'s covert foreign policy', href: '/entities/individuals/ronald-reagan' },
  ],

  'janet-reno': [
    { name: 'Bill Clinton', relationship: 'Served as Clinton\\\'s Attorney General for all eight years (1993-2001), the first woman to hold the position; oversaw Waco siege and Elian Gonzalez case', href: '/entities/individuals/bill-clinton' },
  ],

  'john-kerry': [
    { name: 'Joe Biden', relationship: 'Fellow longtime Democratic leader; both served in Obama administration and coordinated on climate and foreign policy', href: '/entities/individuals/joe-biden' },
    { name: 'Barack Obama', relationship: 'Served as Obama\\\'s Secretary of State from 2013-2017, negotiating the Iran nuclear deal and Paris Climate Agreement', href: '/entities/individuals/barack-obama' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  POLITICAL FIGURES & ACTIVISTS
  // ═══════════════════════════════════════════════════════════════

  'david-hogg': [
    { name: 'Donald Trump', relationship: 'Became target of Trump allies and conspiracy theorists after surviving the 2018 Parkland shooting and advocating for gun control', href: '/entities/individuals/donald-trump' },
  ],

  'nancy-mace': [
    { name: 'Donald Trump', relationship: 'Alternated between publicly criticizing Trump after January 6th and seeking his endorsement for reelection', href: '/entities/individuals/donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'House Republican colleague who navigated McCarthy\\\'s contentious speakership battles', href: '/entities/individuals/kevin-mccarthy' },
  ],

  'adam-lanza': [
    { name: 'Neil Heslin', relationship: 'Father of six-year-old Jesse Lewis, one of 20 children killed by Lanza at Sandy Hook Elementary on December 14, 2012', href: '/entities/individuals/neil-heslin' },
    { name: 'Robbie Parker', relationship: 'Father of six-year-old Emilie Parker, one of 20 children killed by Lanza at Sandy Hook Elementary', href: '/entities/individuals/robbie-parker' },
  ],

  'anthony-weiner': [
    { name: 'Hillary Clinton', relationship: 'Discovery of Clinton emails on Weiner\\\'s laptop triggered FBI investigation reopening 11 days before 2016 election', href: '/entities/individuals/hillary-clinton' },
    { name: 'James Comey', relationship: 'FBI Director who reopened Clinton email investigation in October 2016 after agents found emails on Weiner\\\'s seized laptop', href: '/entities/individuals/james-comey' },
  ],

  'eliot-spitzer': [
    { name: 'Donald Trump', relationship: 'New York political contemporary; both operated in Manhattan\\\'s intertwined worlds of politics, real estate, and media', href: '/entities/individuals/donald-trump' },
  ],

  'ed-buck': [
    { name: 'Adam Schiff', relationship: 'Received campaign donations from Buck before Buck\\\'s arrest; Schiff donated the contributions to charity after the charges', href: '/entities/individuals/adam-schiff' },
  ],

  'steve-scalise': [
    { name: 'Donald Trump', relationship: 'Close Trump ally and House Republican leader; Trump visited Scalise in hospital after 2017 congressional baseball shooting', href: '/entities/individuals/donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'Served together in House Republican leadership for years; Scalise ran for Speaker after McCarthy\\\'s removal', href: '/entities/individuals/kevin-mccarthy' },
    { name: 'Jim Jordan', relationship: 'Fellow House Republican leader who competed with Scalise for Speaker nomination after McCarthy\\\'s ouster', href: '/entities/individuals/jim-jordan' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  MEDIA FIGURES
  // ═══════════════════════════════════════════════════════════════

  'andy-ngo': [
    { name: 'Donald Trump', relationship: 'Right-wing journalist whose coverage of Antifa and Portland protests aligned with Trump\\\'s law-and-order messaging', href: '/entities/individuals/donald-trump' },
  ],

  'tim-pool': [
    { name: 'Donald Trump', relationship: 'Pro-Trump media personality who hosted content amplifying Trump\\\'s political messaging', href: '/entities/individuals/donald-trump' },
    { name: 'Elon Musk', relationship: 'Hosted prominent Twitter/X Spaces events with Musk, helping promote the platform after Musk\\\'s acquisition', href: '/entities/individuals/elon-musk' },
  ],

  'ben-shapiro': [
    { name: 'Donald Trump', relationship: 'Initially a prominent Never Trump conservative who gradually shifted to supporting Trump\\\'s policies while maintaining occasional criticism', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Bannon', relationship: 'Former Breitbart colleague who Shapiro publicly broke with over Bannon\\\'s embrace of the alt-right movement', href: '/entities/individuals/steve-bannon' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  REPUBLICAN POLITICIANS
  // ═══════════════════════════════════════════════════════════════

  'rick-santorum': [
    { name: 'Donald Trump', relationship: 'Republican predecessor in presidential campaigns; ran for president in 2012 and 2016 before Trump reshaped the party', href: '/entities/individuals/donald-trump' },
    { name: 'Newt Gingrich', relationship: 'Fellow 2012 Republican presidential primary candidate who split the conservative vote', href: '/entities/individuals/newt-gingrich' },
    { name: 'Mitt Romney', relationship: 'Chief rival in the 2012 Republican presidential primary; Santorum won 11 states before conceding', href: '/entities/individuals/mitt-romney' },
  ],

  'michele-bachmann': [
    { name: 'Donald Trump', relationship: 'Early Trump supporter and fellow outsider politician who helped lay the groundwork for populist conservative movement', href: '/entities/individuals/donald-trump' },
    { name: 'Sarah Palin', relationship: 'Fellow Tea Party leader and prominent female conservative voice who energized the Republican base', href: '/entities/individuals/sarah-palin' },
  ],

  'herman-cain': [
    { name: 'Donald Trump', relationship: 'Loyal presidential supporter who attended Trump\\\'s Tulsa rally in June 2020 and died of COVID-19 weeks later', href: '/entities/individuals/donald-trump' },
  ],

  'bob-good': [
    { name: 'Donald Trump', relationship: 'Initially opposed Trump by endorsing DeSantis, then desperately sought Trump\\\'s endorsement when facing a primary challenge', href: '/entities/individuals/donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'Voted against McCarthy for Speaker of the House in January 2023 contested election', href: '/entities/individuals/kevin-mccarthy' },
  ],

  'chip-roy': [
    { name: 'Donald Trump', relationship: 'Conservative Freedom Caucus member who sometimes broke with Trump on government spending and procedural issues', href: '/entities/individuals/donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'Opposed McCarthy\\\'s Speaker bid and demanded conservative policy concessions during 2023 Speaker vote', href: '/entities/individuals/kevin-mccarthy' },
  ],

  'dan-crenshaw': [
    { name: 'Donald Trump', relationship: 'Republican congressman who occasionally pushed back on Trump\\\'s election fraud claims while generally supporting his agenda', href: '/entities/individuals/donald-trump' },
  ],

  'byron-donalds': [
    { name: 'Donald Trump', relationship: 'Trump ally and VP shortlist candidate who nominated Jim Jordan for Speaker during 2023 leadership crisis', href: '/entities/individuals/donald-trump' },
    { name: 'Matt Gaetz', relationship: 'Florida Republican colleague and conservative ally in the House Freedom Caucus', href: '/entities/individuals/matt-gaetz' },
  ],

  'clay-higgins': [
    { name: 'Donald Trump', relationship: 'Fiercely loyal Trump supporter who was present at the Capitol on January 6th and later faced ethics scrutiny', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Scalise', relationship: 'Fellow Louisiana Republican congressman and political ally in the House', href: '/entities/individuals/steve-scalise' },
  ],

  'ralph-norman': [
    { name: 'Donald Trump', relationship: 'Loyal Trump ally who texted Chief of Staff Mark Meadows urging him to invoke martial law to overturn the 2020 election', href: '/entities/individuals/donald-trump' },
    { name: 'Mark Meadows', relationship: 'Communicated directly with Trump\\\'s Chief of Staff about overturning 2020 election results via text messages revealed by January 6th Committee', href: '/entities/individuals/mark-meadows' },
  ],

  'anna-paulina-luna': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed congressional candidate who won Florida\\\'s 13th district in 2022 as a vocal MAGA supporter', href: '/entities/individuals/donald-trump' },
    { name: 'Matt Gaetz', relationship: 'Florida Republican colleague and political ally who supported her congressional campaigns', href: '/entities/individuals/matt-gaetz' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  LAW ENFORCEMENT & CORPORATE
  // ═══════════════════════════════════════════════════════════════

  'bob-kroll': [
    { name: 'Derek Chauvin', relationship: 'Led the Minneapolis Police Federation union that defended officers including Chauvin after George Floyd\\\'s murder', href: '/entities/individuals/derek-chauvin' },
    { name: 'Donald Trump', relationship: 'Appeared on stage wearing a "Cops for Trump" shirt at Trump\\\'s 2019 Minneapolis rally', href: '/entities/individuals/donald-trump' },
  ],

  'mortimer-sackler': [
    { name: 'Richard Sackler', relationship: 'Nephew and fellow Purdue Pharma board member who aggressively promoted OxyContin sales despite knowing addiction risks', href: '/entities/individuals/richard-sackler' },
    { name: 'Raymond Sackler', relationship: 'Brother and co-owner of Purdue Pharma who shared responsibility for the company\\\'s role in the opioid epidemic', href: '/entities/individuals/raymond-sackler' },
    { name: 'Arthur Sackler', relationship: 'Brother who built the original Sackler pharmaceutical fortune through aggressive marketing of Valium', href: '/entities/individuals/arthur-sackler' },
  ],

  'alex-gorsky': [
    { name: 'Richard Sackler', relationship: 'Fellow pharmaceutical executive during the opioid epidemic; J&J faced parallel lawsuits for its role in opioid crisis', href: '/entities/individuals/richard-sackler' },
    { name: 'Donald Trump', relationship: 'Served on Trump\\\'s manufacturing advisory council before it was disbanded after Charlottesville', href: '/entities/individuals/donald-trump' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  SCAMMERS & FRAUD
  // ═══════════════════════════════════════════════════════════════

  'billy-mcfarland': [
    { name: 'Donald Trump', relationship: 'Pardoned by Trump in January 2025 before completing his supervised release from Fyre Festival fraud conviction', href: '/entities/individuals/donald-trump' },
  ],

  'anna-sorokin': [
    { name: 'Donald Trump', relationship: 'Became a cultural figure during the Trump era; her fraud case spotlighted wealth-obsessed culture in New York\\\'s elite circles', href: '/entities/individuals/donald-trump' },
  ],

};

// ── Utility Functions ───────────────────────────────────────────

function buildKnownAssociatesBlock(associates, indent = '    ', lineEnding = '\n') {
  const lines = [`${indent}knownAssociates: [`];
  associates.forEach((a) => {
    // Apostrophes in the data are already escaped as \\' in the template literals above,
    // but we need to handle the actual string values at runtime
    const rel = a.relationship;
    const name = a.name;
    const href = a.href || '';
    if (href) {
      lines.push(`${indent}  { name: '${name}', relationship: '${rel}', href: '${href}' },`);
    } else {
      lines.push(`${indent}  { name: '${name}', relationship: '${rel}' },`);
    }
  });
  lines.push(`${indent}],`);
  return lines.join(lineEnding);
}

function findAffiliationsClose(source, profileStart) {
  // From the profile start, find 'affiliations: [' then find its matching '],'
  const affIdx = source.indexOf('affiliations: [', profileStart);
  if (affIdx === -1) return -1;

  // Count bracket depth to find the matching close
  let depth = 0;
  for (let i = affIdx; i < source.length; i++) {
    if (source[i] === '[') depth++;
    if (source[i] === ']') {
      depth--;
      if (depth === 0) {
        // Find the end of LINE containing this ']'
        const lineEnd = source.indexOf('\n', i);
        return lineEnd !== -1 ? lineEnd : i;
      }
    }
  }
  return -1;
}

// ── Main Script ─────────────────────────────────────────────────

function run() {
  console.log('Reading source file...');
  let source = fs.readFileSync(SOURCE_FILE, 'utf8');
  // Detect line ending style
  const lineEnding = source.includes('\r\n') ? '\r\n' : '\n';
  console.log(`File size: ${(source.length / 1024 / 1024).toFixed(2)} MB, ${source.split('\n').length} lines (line endings: ${lineEnding === '\r\n' ? 'CRLF' : 'LF'})`);

  const slugs = Object.keys(expansionData);
  let inserted = 0;
  let skipped = 0;
  let errors = [];

  for (const slug of slugs) {
    // Find the profile key in the source
    const key = `'${slug}':`;
    const profileIdx = source.indexOf(key);

    if (profileIdx === -1) {
      errors.push(`  ✗ ${slug}: Profile not found in source`);
      continue;
    }

    // Check if this profile already has knownAssociates
    // Find the end of this profile (next top-level key or end of object)
    const nextKeyPattern = /\n  '[a-z]/;
    const afterProfile = source.substring(profileIdx + key.length);
    const nextKeyMatch = afterProfile.match(nextKeyPattern);
    const profileEnd = nextKeyMatch
      ? profileIdx + key.length + nextKeyMatch.index
      : source.length;
    const profileChunk = source.substring(profileIdx, profileEnd);

    if (profileChunk.includes('knownAssociates:')) {
      console.log(`  ⊘ ${slug}: Already has knownAssociates — skipping`);
      skipped++;
      continue;
    }

    // Find the insertion point: after affiliations array closes
    const insertAfter = findAffiliationsClose(source, profileIdx);
    if (insertAfter === -1) {
      errors.push(`  ✗ ${slug}: Could not find affiliations closing bracket`);
      continue;
    }

    // Make sure insertion point is within this profile
    if (insertAfter > profileEnd) {
      errors.push(`  ✗ ${slug}: Affiliations close found outside profile bounds`);
      continue;
    }

    // Build the knownAssociates block
    const block = buildKnownAssociatesBlock(expansionData[slug], '    ', lineEnding);

    // Insert after the affiliations closing line
    source = source.substring(0, insertAfter + 1) + lineEnding + block + lineEnding + source.substring(insertAfter + 1);

    console.log(`  ✓ ${slug}: Inserted ${expansionData[slug].length} associates`);
    inserted++;
  }

  // Write back
  console.log(`\nWriting modified file...`);
  fs.writeFileSync(SOURCE_FILE, source, 'utf8');

  const newLines = source.split('\n').length;
  console.log(`\n${'═'.repeat(50)}`);
  console.log(`Done! Results:`);
  console.log(`  Inserted: ${inserted}`);
  console.log(`  Skipped (already present): ${skipped}`);
  console.log(`  Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.log(`\nErrors:`);
    errors.forEach(e => console.log(e));
  }
  console.log(`  New line count: ${newLines}`);
  console.log(`${'═'.repeat(50)}`);
}

run();
