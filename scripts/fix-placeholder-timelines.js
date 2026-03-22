// fix-placeholder-timelines.js
// Removes auto-generated placeholder timeline entries and generates
// content-derived entries for investigations left with empty/thin timelines

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Placeholder patterns (regex matching the event text)
const PLACEHOLDER_PATTERNS = [
  /investigation begins .{0,5} events under scrutiny originate from this period/i,
  /— investigation remains active with ongoing developments/i,
  /— Initial events documented and investigation initiated/i,
  /— Key evidence gathered and accountability analysis updated/i,
  /— Public accountability efforts reveal continued developments/i,
  /— Ongoing accountability efforts continue; key developments documented/i,
  /— Latest developments tracked; investigation updated with new findings/i,
  /— Investigation deepens as new evidence and documentation gathered/i,
];

function isPlaceholder(eventText) {
  return PLACEHOLDER_PATTERNS.some(p => p.test(eventText));
}

// Extract date-event pairs from content paragraphs
function extractEventsFromContent(content, title) {
  const events = [];
  if (!content || !Array.isArray(content)) return events;

  for (const para of content) {
    // Look for sentences with specific years
    const sentences = para.split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      // Match years 1900-2025
      const yearMatches = sentence.match(/\b(19[0-9]{2}|20[0-2][0-9])\b/g);
      if (yearMatches && sentence.length > 40 && sentence.length < 300) {
        // Use the first year found as the date
        const year = yearMatches[0];
        // Clean up the sentence
        let event = sentence.trim();
        // Skip sentences that are too generic
        if (event.match(/investigation|accountability|documented|originate/i)) continue;
        events.push({ date: year, event, type: 'default' });
      }
    }
  }

  // Deduplicate by year (keep longest event per year)
  const byYear = {};
  for (const e of events) {
    if (!byYear[e.date] || e.event.length > byYear[e.date].event.length) {
      byYear[e.date] = e;
    }
  }

  // Return up to 5 events, sorted by date
  return Object.values(byYear)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);
}

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  // Find all timeline arrays with their investigation context
  // Match pattern: slug -> { ... content: [...], ... timeline: [...] }
  const timelineRegex = /timeline:\s*\[([^\]]*)\]/g;
  let match;
  let replacements = 0;
  let removals = 0;

  // We need to process each investigation block
  // Strategy: find each 'slug': { block and extract its content + timeline
  const slugRegex = /'([a-z0-9-]+)':\s*\{/g;
  const slugPositions = [];

  while ((match = slugRegex.exec(src)) !== null) {
    slugPositions.push({ slug: match[1], pos: match.index });
  }

  // For each slug, find its timeline and content
  for (let i = 0; i < slugPositions.length; i++) {
    const { slug, pos } = slugPositions[i];
    const endPos = i + 1 < slugPositions.length ? slugPositions[i + 1].pos : src.length;
    const block = src.substring(pos, endPos);

    // Find timeline in this block
    const tlMatch = block.match(/timeline:\s*\[([\s\S]*?)\],/);
    if (!tlMatch) continue;

    const timelineStr = tlMatch[1];

    // Parse individual entries
    const entryRegex = /\{\s*date:\s*'([^']*)',\s*event:\s*'((?:[^'\\]|\\.)*)'\s*,\s*type:\s*'([^']*)'\s*\}/g;
    let entryMatch;
    const entries = [];
    const realEntries = [];
    const placeholderEntries = [];

    while ((entryMatch = entryRegex.exec(timelineStr)) !== null) {
      const entry = { date: entryMatch[1], event: entryMatch[2], type: entryMatch[3], raw: entryMatch[0] };
      entries.push(entry);
      if (isPlaceholder(entry.event)) {
        placeholderEntries.push(entry);
      } else {
        realEntries.push(entry);
      }
    }

    if (placeholderEntries.length === 0) continue;

    // Case 1: Mixed timeline - just remove placeholders
    if (realEntries.length >= 2) {
      let newTimeline = timelineStr;
      for (const ph of placeholderEntries) {
        // Remove the placeholder entry and any surrounding whitespace/newlines
        const escaped = ph.raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const removeRegex = new RegExp('\\s*' + escaped + ',?\\s*', 'g');
        newTimeline = newTimeline.replace(removeRegex, '\n     ');
      }
      // Clean up multiple newlines
      newTimeline = newTimeline.replace(/\n\s*\n\s*\n/g, '\n');

      if (newTimeline !== timelineStr) {
        const fullOld = `timeline: [${timelineStr}],`;
        const fullNew = `timeline: [${newTimeline}],`;
        src = src.replace(fullOld, fullNew);
        removals += placeholderEntries.length;
      }
    }
    // Case 2: All or mostly placeholders - try to extract from content
    else {
      // Extract content array
      const contentMatch = block.match(/content:\s*\[([\s\S]*?)\],\s*(?:tags|sources)/);
      if (contentMatch) {
        // Simple parse of content strings
        const contentStr = contentMatch[1];
        const contentEntries = [];
        const strRegex = /'((?:[^'\\]|\\.)*)'/g;
        let strMatch;
        while ((strMatch = strRegex.exec(contentStr)) !== null) {
          contentEntries.push(strMatch[1].replace(/\\'/g, "'"));
        }

        const extracted = extractEventsFromContent(contentEntries, slug);
        if (extracted.length >= 2) {
          // Build new timeline entries
          const combined = [...realEntries, ...extracted];
          // Deduplicate by date
          const seen = new Set();
          const unique = combined.filter(e => {
            const key = e.date;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          });
          unique.sort((a, b) => a.date.localeCompare(b.date));

          // Build new timeline string
          const newEntries = unique.map(e => {
            const escapedEvent = e.event.replace(/'/g, "\\'");
            return `     { date: '${e.date}', event: '${escapedEvent}', type: '${e.type}' }`;
          }).join(',\n');

          const fullOld = `timeline: [${timelineStr}],`;
          const fullNew = `timeline: [\n${newEntries},\n   ],`;
          src = src.replace(fullOld, fullNew);
          replacements++;
          removals += placeholderEntries.length;
        }
      }
    }
  }

  if (removals > 0) {
    fs.writeFileSync(filePath, src, 'utf8');
    console.log(`${fileName}: removed ${removals} placeholders, replaced ${replacements} full timelines`);
  }
  return removals;
}

// Process all files
const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts' && f !== 'categories.ts' && f !== 'documents.ts' && f !== 'moneyTrails.ts' && f !== 'statutes.ts');
let total = 0;

for (const f of files) {
  total += processFile(path.join(DATA_DIR, f));
}

console.log(`\nTotal placeholder entries processed: ${total}`);
