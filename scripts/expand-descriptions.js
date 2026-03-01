#!/usr/bin/env node
/**
 * expand-descriptions.js
 *
 * 1. Expands short descriptions to detailed factual multi-sentence descriptions
 *    for 30 high-profile individuals.
 * 2. Adds knownAssociates to 7 profiles that currently have empty arrays.
 *
 * Target file: src/app/entities/individuals/[slug]/page.tsx
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// ── Description replacements ────────────────────────────────────────────────
// Each entry: [slug, newDescription]
// The script locates each profile by its slug, then finds the description line
// and replaces only the string content inside single quotes.

const descriptionReplacements = [
  [
    'jared-kushner',
    'Jared Corey Kushner served as Senior Advisor to President Donald Trump from 2017 to 2021. The real estate heir married Ivanka Trump in 2009 and wielded enormous influence over Middle East policy, the COVID-19 response, and criminal justice reform. His family received a $2 billion investment from Saudi Arabia\\\'s Public Investment Fund shortly after leaving the White House. His father Charles Kushner was convicted of tax evasion, witness tampering, and illegal campaign contributions.'
  ],
  [
    'ivanka-trump',
    'Ivanka Marie Trump served as Senior Advisor to President Donald Trump from 2017 to 2021. She leveraged her White House position to secure Chinese trademarks for her fashion brand and participated in high-level diplomatic meetings despite no government experience. She testified before the January 6th Committee and distanced herself from her father\\\'s election fraud claims.'
  ],
  [
    'michael-cohen',
    'Michael Dean Cohen served as Donald Trump\\\'s personal attorney and fixer from 2006 to 2018. He arranged hush money payments to Stormy Daniels and Karen McDougal, served as RNC Deputy Finance Chair, and was sentenced to three years in federal prison for campaign finance violations, tax evasion, and lying to Congress. He became the star witness in Trump\\\'s Manhattan criminal trial.'
  ],
  [
    'mark-meadows',
    'Mark Randall Meadows served as White House Chief of Staff from March 2020 to January 2021. He was centrally involved in efforts to overturn the 2020 election results, including pressuring state officials in Georgia and coordinating with Republican members of Congress on objecting to electoral votes. He was indicted in Georgia for his role in the RICO conspiracy.'
  ],
  [
    'roger-stone',
    'Roger Jason Stone Jr. is a longtime Republican political consultant, lobbyist, and self-described dirty trickster who served as a key ally to Donald Trump. He was convicted of seven felonies including witness tampering and lying to Congress about his WikiLeaks contacts during the 2016 campaign, then pardoned by Trump. He had documented contacts with the Proud Boys and Oath Keepers before January 6th.'
  ],
  [
    'stephen-miller',
    'Stephen Miller served as Senior Advisor for Policy in the Trump White House from 2017 to 2021. He was the architect of the Muslim travel ban, family separation policy, and restrictive immigration executive orders. Leaked emails revealed his promotion of white nationalist websites and literature to Breitbart News editors.'
  ],
  [
    'jeff-sessions',
    'Jefferson Beauregard Sessions III served as the 84th United States Attorney General from 2017 to 2018. He was forced to recuse himself from the Russia investigation, leading to the appointment of Special Counsel Robert Mueller, which enraged Trump. He implemented the zero tolerance family separation policy at the southern border.'
  ],
  [
    'rick-gates',
    'Richard William Gates III was a longtime business partner of Paul Manafort who served as deputy chairman of the Trump 2016 campaign. He pleaded guilty to conspiracy and lying to FBI investigators in the Mueller investigation and served as a key cooperating witness against Manafort.'
  ],
  [
    'bill-gates',
    'William Henry Gates III is the co-founder of Microsoft and one of the world\\\'s wealthiest individuals. He met with Jeffrey Epstein multiple times between 2011 and 2014, after Epstein\\\'s first conviction, including visits to Epstein\\\'s Manhattan townhouse. Gates acknowledged the meetings were a mistake. His divorce from Melinda Gates was partly attributed to his Epstein connections.'
  ],
  [
    'virginia-giuffre',
    'Virginia Louise Giuffre is the primary accuser and survivor-advocate in the Jeffrey Epstein sex trafficking case. She alleged she was recruited by Ghislaine Maxwell at Mar-a-Lago at age 16 and trafficked to Epstein\\\'s properties and powerful associates including Prince Andrew, Alan Dershowitz, and others. Her civil lawsuit against Prince Andrew was settled for an estimated $12 million.'
  ],
  [
    'melania-trump',
    'Melania Trump served as First Lady of the United States from 2017 to 2021. Born Melanija Knavs in Slovenia, she married Donald Trump in 2005. She was notably absent during many of Trump\\\'s legal proceedings and rarely commented publicly on his controversies, scandals, or criminal indictments.'
  ],
  [
    'scott-pruitt',
    'Edward Scott Pruitt served as EPA Administrator from 2017 to 2018. He systematically dismantled environmental regulations, rolled back Obama-era climate policies, and was forced to resign amid at least 14 separate federal investigations into his spending, travel, and ethical violations including a $50-a-night condo deal from an energy lobbyist.'
  ],
  [
    'tom-price',
    'Thomas Edmunds Price served as Secretary of Health and Human Services from 2017 to September 2017. He was forced to resign after just seven months amid revelations that he spent over $1 million in taxpayer funds on private and military jet travel, violating government travel policies.'
  ],
  [
    'rick-perry',
    'James Richard Perry served as Secretary of Energy from 2017 to 2019. He famously proposed eliminating the Department of Energy during his presidential campaign but could not remember its name during a debate. He was involved in the Ukraine pressure campaign that led to Trump\\\'s first impeachment.'
  ],
  [
    'les-wexner',
    'Leslie Herbert Wexner is the billionaire founder of L Brands (Victoria\\\'s Secret, Bath and Body Works) and Jeffrey Epstein\\\'s most significant financial patron. He granted Epstein sweeping power of attorney over his finances and gave him the Manhattan townhouse where much of the abuse occurred. He claimed Epstein misappropriated over $46 million from him.'
  ],
  [
    'pat-cipollone',
    'Pasquale Anthony Cipollone served as White House Counsel from 2018 to 2021. He provided critical testimony to the January 6th Committee, confirming he opposed Trump\\\'s efforts to overturn the 2020 election and warned against the January 6th rally. He pushed back against Sidney Powell and others in a contentious December 2020 Oval Office meeting.'
  ],
  [
    'charles-kushner',
    'Charles Kushner is a real estate developer and father of Jared Kushner. He was convicted in 2005 of tax evasion, witness tampering (hiring a prostitute to seduce his brother-in-law and recording it), and illegal campaign contributions. He was pardoned by Donald Trump in December 2020 and later appointed U.S. Ambassador to France.'
  ],
  [
    'sean-hannity',
    'Sean Patrick Hannity is a Fox News host and one of Donald Trump\\\'s closest media allies and informal advisors. Text messages revealed he communicated regularly with Mark Meadows and Trump during the January 6th insurrection, urging them to stop the violence. He was revealed as a client of Michael Cohen.'
  ],
  [
    'tucker-carlson',
    'Tucker Swanson McNear Carlson is a conservative media personality who hosted the most-watched cable news show on Fox News until his firing in 2023. Private messages revealed he despised Trump while publicly supporting him. He conducted a friendly interview with Vladimir Putin in Moscow in 2024.'
  ],
  [
    'george-conway',
    'George Thomas Conway III is a conservative attorney and prominent critic of Donald Trump, despite being married to Trump advisor Kellyanne Conway. He co-founded the Lincoln Project, an anti-Trump Republican group. His public opposition to Trump while his wife served in the administration became one of Washington\\\'s most notable political dynamics.'
  ],
  [
    'kash-patel',
    'Kashyap Pramod Patel is a former federal prosecutor and Trump loyalist who served in multiple national security roles. He was a key figure in Republican efforts to discredit the Russia investigation as a Devin Nunes aide. Trump appointed him FBI Director in 2025 despite having no FBI experience.'
  ],
  [
    'kellyanne-conway',
    'Kellyanne Elizabeth Conway served as Counselor to President Trump from 2017 to 2020. She managed Trump\\\'s successful 2016 campaign, becoming the first woman to run a winning presidential campaign. She coined the phrase "alternative facts" and repeatedly violated the Hatch Act.'
  ],
  [
    'matt-gaetz',
    'Matthew Louis Gaetz II is a former Florida congressman investigated by the DOJ for alleged sex trafficking of a 17-year-old. His associate Joel Greenberg pleaded guilty to sex trafficking and cooperated with investigators. Trump nominated him for Attorney General in 2024 but he withdrew amid scandal. Venmo payments and witness testimony were central to the investigation.'
  ],
  [
    'pete-hegseth',
    'Peter Brian Hegseth is a Fox News host and Army National Guard veteran whom Trump nominated as Secretary of Defense. His confirmation was controversial due to allegations of sexual assault, excessive drinking, financial mismanagement of veterans organizations, and a settlement with a sexual assault accuser.'
  ],
  [
    'wilbur-ross',
    'Wilbur Louis Ross Jr. served as Secretary of Commerce from 2017 to 2021. He maintained undisclosed business ties to Russian oligarchs and partners of Vladimir Putin through Navigator Holdings. Forbes accused him of lying about his net worth for years. The Paradise Papers revealed his connections to Putin\\\'s son-in-law through a shipping firm.'
  ],
  [
    'rosemary-vrablic',
    'Rosemary T. Vrablic was a senior wealth management banker at Deutsche Bank who personally managed the Trump Organization\\\'s accounts. She approved hundreds of millions in loans to Trump when no other major bank would lend to him. She resigned from Deutsche Bank in 2021 amid scrutiny of the bank\\\'s Trump lending relationships.'
  ],
  [
    'lachlan-murdoch',
    'Lachlan Keith Murdoch is the CEO of Fox Corporation and elder son of Rupert Murdoch. He took control of Fox News after the Dominion Voting Systems defamation settlement of $787.5 million and his father\\\'s retirement. Internal documents showed he was aware Fox hosts were promoting false election fraud claims.'
  ],
  [
    'brian-kolfage',
    'Brian Kolfage is a decorated Air Force veteran and triple amputee who co-founded the We Build the Wall crowdfunding campaign with Steve Bannon. He was convicted of conspiracy to commit wire fraud and money laundering for diverting over $350,000 in donor funds for personal use including a boat, luxury SUV, and cosmetic surgery.'
  ],
  [
    'viktor-yanukovych',
    'Viktor Fedorovych Yanukovych served as President of Ukraine from 2010 to 2014. He was the primary client of Paul Manafort\\\'s political consulting work in Ukraine, paying millions through offshore accounts. He fled to Russia during the 2014 Euromaidan revolution and was convicted of treason in absentia by Ukrainian courts.'
  ],
  [
    'oleg-deripaska',
    'Oleg Vladimirovich Deripaska is a Russian oligarch and aluminum magnate with close ties to Vladimir Putin. He employed Paul Manafort as a political consultant, paying him $10 million annually. He was sanctioned by the U.S. Treasury in 2018 and indicted for sanctions evasion in 2022.'
  ],
];

// ── knownAssociates additions ───────────────────────────────────────────────
// Each entry: [slug, array of associates]

const knownAssociatesAdditions = [
  [
    'jeff-bezos',
    [
      { name: 'Elon Musk', relationship: 'Tech billionaire rival and frequent public antagonist', href: '/entities/individuals/elon-musk' },
      { name: 'Donald Trump', relationship: 'Targeted by Trump over Washington Post coverage; Amazon faced antitrust pressure', href: '/entities/individuals/donald-trump' },
      { name: 'Mark Zuckerberg', relationship: 'Fellow tech CEO facing congressional scrutiny', href: '/entities/individuals/mark-zuckerberg' },
    ]
  ],
  [
    'chuck-schumer',
    [
      { name: 'Nancy Pelosi', relationship: 'Democratic congressional counterpart and ally in legislative negotiations', href: '/entities/individuals/nancy-pelosi' },
      { name: 'Mitch McConnell', relationship: 'Senate counterpart and primary legislative adversary', href: '/entities/individuals/mitch-mcconnell' },
      { name: 'Joe Biden', relationship: 'Key Senate ally who helped pass Biden legislative agenda', href: '/entities/individuals/joe-biden' },
      { name: 'Donald Trump', relationship: 'Led Senate opposition to Trump policies including impeachment trials', href: '/entities/individuals/donald-trump' },
    ]
  ],
  [
    'jamal-khashoggi',
    [
      { name: 'Mohammed bin Salman', relationship: 'Saudi Crown Prince who CIA concluded ordered his assassination', href: '/entities/individuals/mohammed-bin-salman' },
      { name: 'Donald Trump', relationship: 'Trump defended MBS despite CIA findings and continued arms sales to Saudi Arabia', href: '/entities/individuals/donald-trump' },
      { name: 'Jared Kushner', relationship: 'Maintained close relationship with MBS before and after the assassination', href: '/entities/individuals/jared-kushner' },
    ]
  ],
  [
    'rick-snyder',
    [
      { name: 'Donald Trump', relationship: 'Republican governor during Trump era; Flint water crisis overlapped with 2016 campaign', href: '/entities/individuals/donald-trump' },
    ]
  ],
  [
    'david-duke',
    [
      { name: 'Donald Trump', relationship: 'Endorsed Trump for president in 2016; Trump was slow to disavow', href: '/entities/individuals/donald-trump' },
    ]
  ],
  [
    'steven-sund',
    [
      { name: 'Donald Trump', relationship: 'Capitol Police Chief during January 6th insurrection; testified about failures', href: '/entities/individuals/donald-trump' },
      { name: 'Nancy Pelosi', relationship: 'Reported to House leadership; resigned after January 6th', href: '/entities/individuals/nancy-pelosi' },
    ]
  ],
  [
    'lloyd-austin',
    [
      { name: 'Joe Biden', relationship: 'Biden appointee as Secretary of Defense', href: '/entities/individuals/joe-biden' },
      { name: 'Donald Trump', relationship: 'Oversaw military transition from Trump administration', href: '/entities/individuals/donald-trump' },
    ]
  ],
];

// ── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extract the full description string (including escaped quotes) from a line like:
 *   description: 'some text with \' escaped quotes',
 * Returns the inner string (between the outer single quotes).
 */
function extractDescriptionValue(line) {
  const prefix = "description: '";
  const start = line.indexOf(prefix);
  if (start === -1) return null;
  const contentStart = start + prefix.length;
  let i = contentStart;
  while (i < line.length) {
    if (line[i] === '\\' && line[i + 1] === "'") {
      i += 2; // skip escaped quote
      continue;
    }
    if (line[i] === "'") {
      return line.substring(contentStart, i);
    }
    i++;
  }
  return null;
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('Reading file:', FILE);
  let content = fs.readFileSync(FILE, 'utf8');
  const originalLength = content.length;
  console.log(`File size: ${(originalLength / 1024 / 1024).toFixed(2)} MB (${content.split('\n').length} lines)\n`);

  let descUpdated = 0;
  let descSkipped = 0;
  let kaUpdated = 0;
  let kaSkipped = 0;

  // ── Step 1: Replace descriptions ──────────────────────────────────────

  console.log('=== DESCRIPTION REPLACEMENTS ===\n');

  for (const [slug, newDesc] of descriptionReplacements) {
    const slugMarker = "'" + slug + "'";
    const slugIdx = content.indexOf(slugMarker);
    if (slugIdx === -1) {
      console.log(`  [SKIP] ${slug}: slug not found in file`);
      descSkipped++;
      continue;
    }

    // Search for description line within ~3000 chars after slug
    const searchRegion = content.substring(slugIdx, slugIdx + 3000);
    const lines = searchRegion.split('\n');
    let descLineOffset = 0;
    let descLine = null;
    let descLineIdx = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('description:')) {
        descLine = lines[i];
        descLineIdx = i;
        break;
      }
      descLineOffset += lines[i].length + 1; // +1 for newline
    }

    if (!descLine) {
      console.log(`  [SKIP] ${slug}: description line not found`);
      descSkipped++;
      continue;
    }

    const oldDescValue = extractDescriptionValue(descLine.trim());
    if (oldDescValue === null) {
      console.log(`  [SKIP] ${slug}: could not parse description value`);
      descSkipped++;
      continue;
    }

    // Build the old and new full description strings
    const oldStr = "description: '" + oldDescValue + "'";
    const newStr = "description: '" + newDesc + "'";

    // Find and replace only the first occurrence at/after the slug position
    const absDescPos = slugIdx + descLineOffset + descLine.indexOf("description: '");
    const before = content.substring(0, absDescPos);
    const after = content.substring(absDescPos);
    const replaceIdx = after.indexOf(oldStr);

    if (replaceIdx === -1) {
      console.log(`  [SKIP] ${slug}: exact description string not found for replacement`);
      console.log(`         Looking for: ${oldStr.substring(0, 80)}...`);
      descSkipped++;
      continue;
    }

    content = before + after.substring(0, replaceIdx) + newStr + after.substring(replaceIdx + oldStr.length);
    descUpdated++;
    console.log(`  [OK]   ${slug}: ${oldDescValue.length} chars => ${newDesc.length} chars`);
  }

  // ── Step 2: Add knownAssociates ───────────────────────────────────────

  console.log('\n=== KNOWN ASSOCIATES ADDITIONS ===\n');

  for (const [slug, associates] of knownAssociatesAdditions) {
    const slugMarker = "'" + slug + "'";
    const slugIdx = content.indexOf(slugMarker);
    if (slugIdx === -1) {
      console.log(`  [SKIP] ${slug}: slug not found in file`);
      kaSkipped++;
      continue;
    }

    // Search for knownAssociates: [] within ~4000 chars after slug
    const searchRegion = content.substring(slugIdx, slugIdx + 4000);
    const emptyKA = 'knownAssociates: []';
    const kaRelPos = searchRegion.indexOf(emptyKA);

    if (kaRelPos === -1) {
      // Check if it already has populated knownAssociates
      if (searchRegion.includes('knownAssociates: [')) {
        console.log(`  [SKIP] ${slug}: knownAssociates already populated`);
      } else {
        console.log(`  [SKIP] ${slug}: knownAssociates field not found`);
      }
      kaSkipped++;
      continue;
    }

    // Build the replacement string
    const indent = '      '; // typical indentation
    let kaStr = 'knownAssociates: [\n';
    for (let i = 0; i < associates.length; i++) {
      const a = associates[i];
      kaStr += indent + '  { ';
      kaStr += "name: '" + a.name + "', ";
      kaStr += "relationship: '" + a.relationship + "', ";
      kaStr += "href: '" + a.href + "'";
      kaStr += ' }';
      if (i < associates.length - 1) kaStr += ',';
      kaStr += '\n';
    }
    kaStr += indent + ']';

    const absKAPos = slugIdx + kaRelPos;
    content = content.substring(0, absKAPos) + kaStr + content.substring(absKAPos + emptyKA.length);
    kaUpdated++;
    console.log(`  [OK]   ${slug}: added ${associates.length} associates`);
  }

  // ── Step 3: Write result ──────────────────────────────────────────────

  console.log('\n=== SUMMARY ===\n');
  console.log(`  Descriptions updated: ${descUpdated} / ${descriptionReplacements.length}`);
  console.log(`  Descriptions skipped: ${descSkipped}`);
  console.log(`  knownAssociates updated: ${kaUpdated} / ${knownAssociatesAdditions.length}`);
  console.log(`  knownAssociates skipped: ${kaSkipped}`);
  console.log(`  File size change: ${originalLength} => ${content.length} (${content.length - originalLength > 0 ? '+' : ''}${content.length - originalLength} chars)`);

  if (descUpdated > 0 || kaUpdated > 0) {
    fs.writeFileSync(FILE, content, 'utf8');
    console.log(`\n  File written successfully.`);
  } else {
    console.log(`\n  No changes made; file not written.`);
  }
}

main();
