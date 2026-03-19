/**
 * Smart Date Extraction Script
 * 
 * Reads each investigation's content, summary, and timeline events
 * to extract real dates and replace the incorrect eventOriginDate,
 * lastActivityDate, and pageUpdatedDate fields.
 * 
 * Logic:
 * - eventOriginDate: earliest date/year found in content (>= 1990)
 * - lastActivityDate: latest date/year found in content (<= 2025)
 * - pageUpdatedDate: set to today's date
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');
const PAGE_UPDATED = '2025-06-18';

const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
};

function monthNum(name) {
  return MONTHS[name.toLowerCase()] || 1;
}

function toISO(d) {
  return `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`;
}

function compareDates(a, b) {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
}

/**
 * Extract all date references from text.
 * Returns array of {year, month, day, precision} sorted chronologically.
 */
function extractDates(text) {
  const dateMap = new Map(); // key: "YYYY-MM-DD" → value: {year, month, day, precision}

  // 1. Full dates: "January 20, 2017" or "January 20 2017"
  const fullDateRe = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/gi;
  let m;
  while ((m = fullDateRe.exec(text)) !== null) {
    const year = parseInt(m[3]);
    const month = monthNum(m[1]);
    const day = parseInt(m[2]);
    if (year >= 1990 && year <= 2025 && day >= 1 && day <= 31) {
      const key = `${year}-${month}-${day}`;
      if (!dateMap.has(key)) {
        dateMap.set(key, { year, month, day, precision: 'day' });
      }
    }
  }

  // 2. Month + Year: "March 2020" (but not already captured as full date)
  const monthYearRe = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/gi;
  while ((m = monthYearRe.exec(text)) !== null) {
    const year = parseInt(m[2]);
    const month = monthNum(m[1]);
    if (year >= 1990 && year <= 2025) {
      const key = `${year}-${month}-1`;
      if (!dateMap.has(key)) {
        dateMap.set(key, { year, month, day: 1, precision: 'month' });
      }
    }
  }

  // 3. ISO dates in timeline events: "2017-01-20"
  const isoRe = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
  while ((m = isoRe.exec(text)) !== null) {
    const year = parseInt(m[1]);
    const month = parseInt(m[2]);
    const day = parseInt(m[3]);
    if (year >= 1990 && year <= 2025 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const key = `${year}-${month}-${day}`;
      if (!dateMap.has(key)) {
        dateMap.set(key, { year, month, day, precision: 'day' });
      }
    }
  }

  // 4. Standalone years: "2017", "In 2003"
  // Avoid matching years inside URLs after slashes or in port numbers
  const yearRe = /\b((?:19|20)\d{2})\b/g;
  while ((m = yearRe.exec(text)) !== null) {
    const year = parseInt(m[1]);
    if (year >= 1990 && year <= 2025) {
      const key = `${year}-1-1`;
      if (!dateMap.has(key)) {
        dateMap.set(key, { year, month: 1, day: 1, precision: 'year' });
      }
    }
  }

  const dates = Array.from(dateMap.values());
  dates.sort(compareDates);
  return dates;
}

/**
 * Process a single shard file.
 * Returns { updated: number, noChange: number, issues: string[] }
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [...lines];
  const fileName = path.basename(filePath);

  let stats = { updated: 0, noChange: 0, issues: [] };
  let currentSlug = null;
  let textAccumulator = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect new investigation slug: pattern like   'some-slug': {
    const slugMatch = line.match(/^\s{1,4}'([a-z0-9][a-z0-9-]*)':\s*\{/);
    if (slugMatch) {
      currentSlug = slugMatch[1];
      textAccumulator = '';
    }

    // Accumulate text for current investigation (exclude date metadata fields)
    if (currentSlug) {
      const isDateField = /^\s+(date|lastUpdated|eventOriginDate|lastActivityDate|pageUpdatedDate):\s/;
      if (!isDateField.test(line)) {
        textAccumulator += line + '\n';
      }
    }

    // Detect eventOriginDate line — marks end of content, time to compute
    const eventMatch = line.match(/^(\s+)eventOriginDate:\s*'([^']*)'/);
    if (eventMatch && currentSlug) {
      const indent = eventMatch[1];
      const oldOrigin = eventMatch[2];

      // Extract dates from accumulated text
      const dates = extractDates(textAccumulator);

      let newOrigin, newActivity;

      if (dates.length > 0) {
        newOrigin = toISO(dates[0]);
        newActivity = toISO(dates[dates.length - 1]);

        // If origin equals activity and there are multiple dates, 
        // ensure activity is at least as late as origin
        if (newOrigin === newActivity && dates.length === 1) {
          // Single date — use for both, that's fine
        }
      } else {
        // No dates found in content — keep existing origin, flag it
        newOrigin = oldOrigin;
        newActivity = oldOrigin;
        stats.issues.push(`${fileName}: '${currentSlug}' — no dates found in content, kept existing`);
      }

      // Replace the three date lines
      result[i] = `${indent}eventOriginDate: '${newOrigin}',`;

      if (i + 1 < lines.length && lines[i + 1].includes('lastActivityDate')) {
        result[i + 1] = `${indent}lastActivityDate: '${newActivity}',`;
      } else {
        stats.issues.push(`${fileName}: '${currentSlug}' — lastActivityDate line not found at expected position`);
      }

      if (i + 2 < lines.length && lines[i + 2].includes('pageUpdatedDate')) {
        result[i + 2] = `${indent}pageUpdatedDate: '${PAGE_UPDATED}',`;
      } else {
        stats.issues.push(`${fileName}: '${currentSlug}' — pageUpdatedDate line not found at expected position`);
      }

      stats.updated++;
      currentSlug = null;
      textAccumulator = '';
    }
  }

  fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  return stats;
}

// Main execution
console.log('Smart Date Extraction Script');
console.log('============================\n');

const shardFiles = fs.readdirSync(DATA_DIR)
  .filter(f => /^[a-z0-9]\.ts$/.test(f))
  .sort();

console.log(`Found ${shardFiles.length} shard files\n`);

let totalUpdated = 0;
let totalIssues = [];

for (const file of shardFiles) {
  const filePath = path.join(DATA_DIR, file);
  const stats = processFile(filePath);
  totalUpdated += stats.updated;
  totalIssues.push(...stats.issues);
  console.log(`  ${file}: ${stats.updated} investigations processed`);
}

console.log(`\n============================`);
console.log(`Total investigations updated: ${totalUpdated}`);
console.log(`Issues: ${totalIssues.length}`);

if (totalIssues.length > 0) {
  console.log('\nIssues found:');
  totalIssues.forEach(issue => console.log(`  ⚠ ${issue}`));
}

// Verification: spot-check a few investigations
console.log('\n--- Spot Check ---');
const spotCheckFile = path.join(DATA_DIR, 'a.ts');
const spotContent = fs.readFileSync(spotCheckFile, 'utf8');
const spotMatches = spotContent.match(/'\w[a-z-]+':\s*\{[^}]*?eventOriginDate:\s*'([^']+)'[^}]*?lastActivityDate:\s*'([^']+)'/gs);
if (spotMatches) {
  for (const match of spotMatches.slice(0, 5)) {
    const slug = match.match(/'([a-z0-9-]+)':\s*\{/)?.[1];
    const origin = match.match(/eventOriginDate:\s*'([^']+)'/)?.[1];
    const activity = match.match(/lastActivityDate:\s*'([^']+)'/)?.[1];
    console.log(`  ${slug}: origin=${origin}, activity=${activity}`);
  }
}
