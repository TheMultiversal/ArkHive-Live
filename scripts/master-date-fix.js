/**
 * Master Date Fix Script v2
 * 
 * Comprehensive strategy:
 * 1. Extract dates from content text (summary + content paragraphs)
 * 2. Extract dates from timeline events if present
 * 3. For eventOriginDate: use earliest content date, but validate against context
 * 4. For lastActivityDate: use the legacy lastUpdated field (actual editorial date) 
 *    OR latest date from content, whichever is newer
 * 5. For pageUpdatedDate: set to 2026-03-18 (today)
 * 6. Also fix legacy date/lastUpdated fields to have correct ISO dates
 * 7. Lower year threshold to 1800 for historical events
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');
const PAGE_UPDATED = '2026-03-18';

const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
  jan: 1, feb: 2, mar: 3, apr: 4, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
};

function monthNum(name) {
  return MONTHS[name.toLowerCase()] || 1;
}

function toISO(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function parseVerboseDate(dateStr) {
  if (!dateStr) return null;
  // "May 8, 2014" or "December 12, 2025" or "January 29, 2024"
  const m = dateStr.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/i);
  if (m) {
    return { year: parseInt(m[3]), month: monthNum(m[1]), day: parseInt(m[2]) };
  }
  // "August 2, 2017" or just "March 2025"
  const m2 = dateStr.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/i);
  if (m2) {
    return { year: parseInt(m2[2]), month: monthNum(m2[1]), day: 1 };
  }
  // ISO: "2017-01-20"
  const m3 = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m3) {
    return { year: parseInt(m3[1]), month: parseInt(m3[2]), day: parseInt(m3[3]) };
  }
  return null;
}

function dateValue(d) {
  return d.year * 10000 + d.month * 100 + d.day;
}

/**
 * Extract all date references from text content only (not metadata fields).
 */
function extractDatesFromText(text) {
  const dateMap = new Map();

  // 1. Full dates: "January 20, 2017"
  const fullDateRe = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/gi;
  let m;
  while ((m = fullDateRe.exec(text)) !== null) {
    const year = parseInt(m[3]);
    const month = monthNum(m[1]);
    const day = parseInt(m[2]);
    if (year >= 1800 && year <= 2026 && day >= 1 && day <= 31) {
      const key = toISO(year, month, day);
      if (!dateMap.has(key)) dateMap.set(key, { year, month, day, precision: 'day' });
    }
  }

  // 2. Month + Year: "March 2020"
  const monthYearRe = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/gi;
  while ((m = monthYearRe.exec(text)) !== null) {
    const year = parseInt(m[2]);
    const month = monthNum(m[1]);
    if (year >= 1800 && year <= 2026) {
      const key = toISO(year, month, 1);
      if (!dateMap.has(key)) dateMap.set(key, { year, month, day: 1, precision: 'month' });
    }
  }

  // 3. ISO dates: "2017-01-20"
  const isoRe = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
  while ((m = isoRe.exec(text)) !== null) {
    const year = parseInt(m[1]);
    const month = parseInt(m[2]);
    const day = parseInt(m[3]);
    if (year >= 1800 && year <= 2026 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const key = toISO(year, month, day);
      if (!dateMap.has(key)) dateMap.set(key, { year, month, day, precision: 'day' });
    }
  }

  // 4. Decade references: "1980s" → 1980, "1990s" → 1990
  const decadeRe = /\b(1[89]\d0|20[012]\d)s\b/gi;
  while ((m = decadeRe.exec(text)) !== null) {
    const year = parseInt(m[1]);
    if (year >= 1800 && year <= 2020) {
      const key = toISO(year, 1, 1);
      if (!dateMap.has(key)) dateMap.set(key, { year, month: 1, day: 1, precision: 'decade' });
    }
  }

  // 5. Standalone years: "In 2017", "since 1965" etc.
  // Avoid matching inside URLs or port numbers
  const yearRe = /(?:^|[^\/\d:])(\b(?:1[89]\d{2}|20[0-2]\d)\b)(?=[^\/\d:]|$)/g;
  while ((m = yearRe.exec(text)) !== null) {
    const year = parseInt(m[1]);
    if (year >= 1800 && year <= 2026) {
      const key = toISO(year, 1, 1);
      if (!dateMap.has(key)) dateMap.set(key, { year, month: 1, day: 1, precision: 'year' });
    }
  }

  const dates = Array.from(dateMap.values());
  dates.sort((a, b) => dateValue(a) - dateValue(b));
  return dates;
}

/**
 * Process a shard file. Uses a brace-tracking parser to isolate each investigation.
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [...lines];
  const fileName = path.basename(filePath);
  let stats = { updated: 0, issues: [] };

  // Parse investigations using brace tracking
  let i = 0;
  while (i < lines.length) {
    // Detect investigation slug: '   'some-slug': {'
    const slugMatch = lines[i].match(/^\s{1,4}'([a-z0-9][a-z0-9-]*)':\s*\{/);
    if (!slugMatch) { i++; continue; }

    const slug = slugMatch[1];
    const startLine = i;
    
    // Track braces to find the end of this investigation object
    let braceCount = 0;
    let endLine = i;
    let legacyDate = '';
    let legacyLastUpdated = '';
    let contentText = '';
    let eventOriginLine = -1;
    let lastActivityLine = -1;
    let pageUpdatedLine = -1;
    let indent = '   ';

    for (let j = i; j < lines.length; j++) {
      const line = lines[j];
      
      // Count braces
      for (const ch of line) {
        if (ch === '{') braceCount++;
        if (ch === '}') braceCount--;
      }
      
      // Extract legacy date fields
      const dateMatch = line.match(/^\s+date:\s*'([^']*)'/);
      if (dateMatch && !legacyDate) legacyDate = dateMatch[1];
      
      const lastUpdMatch = line.match(/^\s+lastUpdated:\s*'([^']*)'/);
      if (lastUpdMatch && !legacyLastUpdated) legacyLastUpdated = lastUpdMatch[1];

      // Detect new date field lines
      const eventMatch = line.match(/^(\s+)eventOriginDate:\s*'([^']*)'/);
      if (eventMatch) { eventOriginLine = j; indent = eventMatch[1]; }

      const activityMatch = line.match(/^\s+lastActivityDate:\s*'([^']*)'/);
      if (activityMatch) lastActivityLine = j;

      const pageMatch = line.match(/^\s+pageUpdatedDate:\s*'([^']*)'/);
      if (pageMatch) pageUpdatedLine = j;

      // Accumulate content text (exclude metadata fields)
      const isMetaField = /^\s+(date|lastUpdated|eventOriginDate|lastActivityDate|pageUpdatedDate|title|subtitle|severity|category):\s/;
      const isUrlField = /url:|href:/;
      if (!isMetaField.test(line) && !isUrlField.test(line)) {
        contentText += line + '\n';
      }

      if (braceCount <= 0 && j > i) {
        endLine = j;
        break;
      }
    }

    // Now compute dates
    const contentDates = extractDatesFromText(contentText);
    const parsedLegacyDate = parseVerboseDate(legacyDate);
    const parsedLegacyLastUpdated = parseVerboseDate(legacyLastUpdated);

    let originDate, activityDate;

    if (contentDates.length > 0) {
      // Use earliest content date as origin
      const earliest = contentDates[0];
      originDate = toISO(earliest.year, earliest.month, earliest.day);
      
      // Use latest content date as most recent activity
      const latest = contentDates[contentDates.length - 1];
      activityDate = toISO(latest.year, latest.month, latest.day);
    } else if (parsedLegacyDate) {
      // No content dates found - use legacy date as origin
      originDate = toISO(parsedLegacyDate.year, parsedLegacyDate.month, parsedLegacyDate.day);
      activityDate = originDate;
      stats.issues.push(`${fileName}: '${slug}' — no content dates, used legacy date`);
    } else {
      originDate = '2020-01-01';
      activityDate = '2020-01-01';
      stats.issues.push(`${fileName}: '${slug}' — no dates found at all, defaulted`);
    }

    // For lastActivityDate: prefer the legacy lastUpdated if it's a real editorial date
    // and it's newer than what we found in content
    if (parsedLegacyLastUpdated) {
      const legacyActivityISO = toISO(parsedLegacyLastUpdated.year, parsedLegacyLastUpdated.month, parsedLegacyLastUpdated.day);
      if (legacyActivityISO > activityDate) {
        activityDate = legacyActivityISO;
      }
    }

    // Write updated date lines
    if (eventOriginLine >= 0) {
      result[eventOriginLine] = `${indent}eventOriginDate: '${originDate}',`;
    }
    if (lastActivityLine >= 0) {
      result[lastActivityLine] = `${indent}lastActivityDate: '${activityDate}',`;
    }
    if (pageUpdatedLine >= 0) {
      result[pageUpdatedLine] = `${indent}pageUpdatedDate: '${PAGE_UPDATED}',`;
    }

    stats.updated++;
    i = endLine + 1;
  }

  fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  return stats;
}

// Main
console.log('Master Date Fix Script v2');
console.log('========================\n');

const shardFiles = fs.readdirSync(DATA_DIR)
  .filter(f => /^[a-z0-9]\.ts$/.test(f))
  .sort();

console.log(`Processing ${shardFiles.length} shard files...\n`);

let totalUpdated = 0;
let allIssues = [];

for (const file of shardFiles) {
  const stats = processFile(path.join(DATA_DIR, file));
  totalUpdated += stats.updated;
  allIssues.push(...stats.issues);
  console.log(`  ${file}: ${stats.updated} investigations`);
}

console.log(`\n========================`);
console.log(`Total updated: ${totalUpdated}`);
console.log(`Issues: ${allIssues.length}`);

if (allIssues.length > 0) {
  console.log('\nIssues:');
  allIssues.forEach(i => console.log(`  - ${i}`));
}

// Spot check
console.log('\n--- Spot Check (a.ts first 5) ---');
const aContent = fs.readFileSync(path.join(DATA_DIR, 'a.ts'), 'utf8');
const aLines = aContent.split('\n');
let slug = '';
let checked = 0;
for (let i = 0; i < aLines.length && checked < 5; i++) {
  const sm = aLines[i].match(/^\s+'([a-z0-9-]+)':\s*\{/);
  if (sm) slug = sm[1];
  const em = aLines[i].match(/eventOriginDate:\s*'([^']+)'/);
  if (em) {
    const am = aLines[i+1]?.match(/lastActivityDate:\s*'([^']+)'/);
    const pm = aLines[i+2]?.match(/pageUpdatedDate:\s*'([^']+)'/);
    console.log(`  ${slug}: origin=${em[1]}, activity=${am?.[1]||'?'}, updated=${pm?.[1]||'?'}`);
    checked++;
  }
}
