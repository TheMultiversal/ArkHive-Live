/**
 * Timeline Generation Script
 * 
 * Extracts date-event pairs from investigation content paragraphs  
 * and creates timeline arrays for each investigation.
 * 
 * Strategy:
 * 1. Parse each content paragraph for sentences containing dates
 * 2. Extract the date and a concise event description
 * 3. Assign event types based on keywords
 * 4. Sort chronologically
 * 5. Insert timeline array into each investigation
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'investigations');

const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
};

function monthNum(name) { return MONTHS[name.toLowerCase()] || 1; }

function toDateStr(year, month, day) {
  if (month > 1 || day > 1) return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  return `${year}`;
}

function dateSort(a, b) {
  return a.sortKey - b.sortKey;
}

/**
 * Determine event type from text content
 */
function classifyEvent(text) {
  const t = text.toLowerCase();
  if (/indict|arraign|guilty|sentenc|convict|acquit|plead|verdict|trial|court|judge|prosecutor|lawsuit|sued|ruling|appeal|dismissed/.test(t)) return 'legal';
  if (/died|killed|murder|death|fatal|shooting|attack|massacre|bomb|explosion|crash|collapse/.test(t)) return 'critical';
  if (/elect|vote|campaign|inaugurated|president|congress|senate|house|legislation|bill|law|executive order|signed into|appointed|confirmed|resign|impeach/.test(t)) return 'political';
  if (/million|billion|fine|penalty|settlement|paid|cost|profit|fraud|scheme|ponzi|embezzl|bankrupt/.test(t)) return 'financial';
  return 'default';
}

/**
 * Extract timeline events from content text
 */
function extractTimelineEvents(paragraphs) {
  const events = [];
  const seen = new Set();

  for (const paragraph of paragraphs) {
    // Split into sentences
    const sentences = paragraph.split(/(?<=[.!?])\s+/);
    
    for (const sentence of sentences) {
      // Skip very short sentences
      if (sentence.length < 30) continue;

      // Look for dates in this sentence
      let dateStr = null;
      let sortKey = 0;

      // Full date: "January 20, 2017"
      const fullMatch = sentence.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/i);
      if (fullMatch) {
        const year = parseInt(fullMatch[3]);
        const month = monthNum(fullMatch[1]);
        const day = parseInt(fullMatch[2]);
        if (year >= 1800 && year <= 2026) {
          dateStr = toDateStr(year, month, day);
          sortKey = year * 10000 + month * 100 + day;
        }
      }

      // Month + Year: "March 2020" (only if no full date found)
      if (!dateStr) {
        const monthMatch = sentence.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/i);
        if (monthMatch) {
          const year = parseInt(monthMatch[2]);
          const month = monthNum(monthMatch[1]);
          if (year >= 1800 && year <= 2026) {
            dateStr = toDateStr(year, month, 1);
            sortKey = year * 10000 + month * 100;
          }
        }
      }

      // Year only: "In 2017" or "By 2003" (only if no other date found)
      if (!dateStr) {
        const yearMatch = sentence.match(/\b(?:in|by|since|during|until|after|before|around|circa)?\s*((?:1[89]\d{2}|20[0-2]\d))\b/i);
        if (yearMatch) {
          const year = parseInt(yearMatch[1]);
          if (year >= 1800 && year <= 2026) {
            dateStr = `${year}`;
            sortKey = year * 10000;
          }
        }
      }

      if (!dateStr) continue;

      // Create concise event description
      let eventText = sentence.trim();
      // Remove trailing period if present
      eventText = eventText.replace(/\.$/, '');
      
      // Truncate long sentences at a readable point
      if (eventText.length > 200) {
        const cutPoint = eventText.lastIndexOf('. ', 200);
        if (cutPoint > 80) {
          eventText = eventText.substring(0, cutPoint);
        } else {
          eventText = eventText.substring(0, 197) + '...';
        }
      }

      // Deduplicate by date+first30chars
      const dedupeKey = `${dateStr}:${eventText.substring(0, 30)}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      events.push({
        date: dateStr,
        event: eventText,
        type: classifyEvent(eventText),
        sortKey
      });
    }
  }

  // Sort chronologically and limit to 15 events max
  events.sort(dateSort);
  return events.slice(0, 15).map(({ date, event, type }) => ({ date, event, type }));
}

/**
 * Process a shard file to add timeline data
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [];
  const fileName = path.basename(filePath);
  let stats = { added: 0, skipped: 0 };

  let i = 0;
  while (i < lines.length) {
    const slugMatch = lines[i].match(/^\s{1,4}'([a-z0-9][a-z0-9-]*)':\s*\{/);
    if (!slugMatch) {
      result.push(lines[i]);
      i++;
      continue;
    }

    const slug = slugMatch[1];
    
    // Track braces to find end, collect content arrays, find insertion point
    let braceCount = 0;
    let contentParagraphs = [];
    let inContent = false;
    let hasTimeline = false;
    let closingBraceLine = -1;
    let investigationLines = [];
    
    for (let j = i; j < lines.length; j++) {
      const line = lines[j];
      investigationLines.push(line);
      
      for (const ch of line) {
        if (ch === '{') braceCount++;
        if (ch === '}') braceCount--;
      }

      // Detect content array
      if (line.match(/^\s+content:\s*\[/)) inContent = true;
      if (inContent) {
        const textMatch = line.match(/^\s+'(.+)',?\s*$/);
        if (textMatch) {
          // Unescape the string
          let text = textMatch[1];
          text = text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n');
          contentParagraphs.push(text);
        }
        if (line.match(/^\s+\],?\s*$/)) inContent = false;
      }

      // Detect existing timeline
      if (line.match(/^\s+timeline:\s*\[/)) hasTimeline = true;

      if (braceCount <= 0 && j > i) {
        closingBraceLine = j;
        break;
      }
    }

    // Generate timeline if no existing one and we have content
    if (!hasTimeline && contentParagraphs.length > 0) {
      const events = extractTimelineEvents(contentParagraphs);
      
      if (events.length >= 2) {
        // Find the line just before pageUpdatedDate (or the closing brace of the investigation)
        // Insert timeline before the closing of the investigation
        // Find the last content line before the closing brace
        const insertBefore = investigationLines.length - 1; // before the closing },
        
        // Build timeline array
        const timelineLines = ['   timeline: ['];
        for (const evt of events) {
          const escapedEvent = evt.event.replace(/'/g, "\\'");
          timelineLines.push(`     { date: '${evt.date}', event: '${escapedEvent}', type: '${evt.type}' },`);
        }
        timelineLines.push('   ],');

        // Insert timeline into investigation lines
        const finalLines = [
          ...investigationLines.slice(0, insertBefore),
          ...timelineLines,
          ...investigationLines.slice(insertBefore)
        ];
        
        result.push(...finalLines);
        stats.added++;
      } else {
        result.push(...investigationLines);
        stats.skipped++;
      }
    } else {
      result.push(...investigationLines);
      if (hasTimeline) stats.skipped++;
      else stats.skipped++;
    }

    i += investigationLines.length;
  }

  fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  return stats;
}

// Main
console.log('Timeline Generation Script');
console.log('=========================\n');

const shardFiles = fs.readdirSync(DATA_DIR)
  .filter(f => /^[a-z0-9]\.ts$/.test(f))
  .sort();

let totalAdded = 0;
let totalSkipped = 0;

for (const file of shardFiles) {
  const stats = processFile(path.join(DATA_DIR, file));
  totalAdded += stats.added;
  totalSkipped += stats.skipped;
  console.log(`  ${file}: +${stats.added} timelines (${stats.skipped} skipped)`);
}

console.log(`\n=========================`);
console.log(`Timelines added: ${totalAdded}`);
console.log(`Skipped: ${totalSkipped}`);
