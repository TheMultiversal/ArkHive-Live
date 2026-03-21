/**
 * Script to add or enhance timelines for investigations that are missing them or have sparse entries.
 * 
 * Strategy:
 * 1. For each investigation without timeline or with ≤3 entries:
 *    - Extract dates from content paragraphs and summary
 *    - Use eventOriginDate and lastActivityDate as bookends
 *    - Generate properly formatted timeline entries
 * 2. Insert new timelines after pageUpdatedDate line
 * 3. Replace sparse timelines with richer extracted data
 * 4. Process entries in REVERSE order within each file to preserve offsets
 * 
 * Usage: node scripts/fix-timelines.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const files = fs.readdirSync(dir).filter(f => /^[a-z0-9]\.ts$/.test(f)).sort();

const monthMap = {
  'january': '01', 'february': '02', 'march': '03', 'april': '04',
  'may': '05', 'june': '06', 'july': '07', 'august': '08',
  'september': '09', 'october': '10', 'november': '11', 'december': '12'
};

const monthNames = Object.keys(monthMap);
const monthPattern = monthNames.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join('|');

function normalizeDate(dateStr) {
  dateStr = dateStr.trim();
  
  // "Month Day, Year"
  const fullMatch = dateStr.match(/^(\w+)\s+(\d{1,2}),?\s+(\d{4})$/i);
  if (fullMatch) {
    const month = monthMap[fullMatch[1].toLowerCase()];
    if (month) return `${fullMatch[3]}-${month}-${fullMatch[2].padStart(2, '0')}`;
  }
  
  // "Month Year"
  const monthYearMatch = dateStr.match(/^(\w+)\s+(\d{4})$/i);
  if (monthYearMatch) {
    const month = monthMap[monthYearMatch[1].toLowerCase()];
    if (month) return `${monthYearMatch[2]}-${month}`;
  }
  
  // Plain year
  const yearMatch = dateStr.match(/^(\d{4})$/);
  if (yearMatch) return yearMatch[1];
  
  return null;
}

function extractDatesFromText(text) {
  const found = new Map(); // normalized date -> {date, event, priority}
  
  // Split into sentences for context
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.length > 15);
  
  for (const sentence of sentences) {
    const dateMatches = [];
    
    // Full date: "January 15, 2007"
    const fullRegex = new RegExp(`(${monthPattern})\\s+(\\d{1,2}),?\\s+(\\d{4})`, 'gi');
    for (const m of sentence.matchAll(fullRegex)) {
      dateMatches.push({ raw: m[0], index: m.index });
    }
    
    // Month Year: "January 2007" (but not already matched as full date)
    const monthYearRegex = new RegExp(`(${monthPattern})\\s+(\\d{4})`, 'gi');
    for (const m of sentence.matchAll(monthYearRegex)) {
      // Skip if this overlaps with a full date match
      const isDupe = dateMatches.some(d => Math.abs(d.index - m.index) < 3);
      if (!isDupe) dateMatches.push({ raw: m[0], index: m.index });
    }
    
    // Year references: "in 2007", "since 2006", etc.
    const yearRefRegex = /\b(?:in|since|by|from|after|before|during|until|around)\s+(\d{4})\b/gi;
    for (const m of sentence.matchAll(yearRefRegex)) {
      const isDupe = dateMatches.some(d => Math.abs(d.index - m.index) < 5);
      if (!isDupe) dateMatches.push({ raw: m[1], index: m.index });
    }
    
    // Standalone years: "The 2008 financial crisis"
    const standaloneYearRegex = /\b(\d{4})\b/g;
    for (const m of sentence.matchAll(standaloneYearRegex)) {
      const year = parseInt(m[1]);
      if (year >= 1900 && year <= 2026) {
        const isDupe = dateMatches.some(d => Math.abs(d.index - m.index) < 8);
        if (!isDupe) dateMatches.push({ raw: m[1], index: m.index });
      }
    }
    
    for (const { raw } of dateMatches) {
      const normalized = normalizeDate(raw);
      if (!normalized) continue;
      
      const year = parseInt(normalized.slice(0, 4));
      if (year > 2026 || year < 1800) continue;
      
      // Clean up the sentence for use as event description
      let event = sentence
        .replace(/^[A-Z][A-Z\s&,/-]+:\s*/, '') // Remove section headers: "THE FIRINGS: ", "PANDEMIC PREPAREDNESS: "
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/[\r\n]+/g, ' ') // Remove all newlines
        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();
      
      // Truncate intelligently
      if (event.length > 220) {
        event = event.slice(0, 217);
        const lastSpace = event.lastIndexOf(' ');
        if (lastSpace > 160) event = event.slice(0, lastSpace);
        event += '...';
      }
      
      if (event.length < 20) continue;
      
      // Prefer more specific dates and longer descriptions
      const specificity = normalized.length; // "2007" = 4, "2007-03" = 7, "2007-03-15" = 10
      
      if (!found.has(normalized) || found.get(normalized).specificity < specificity) {
        found.set(normalized, { date: normalized, event, specificity });
      }
    }
  }
  
  return found;
}

function determineEventType(event) {
  const lower = event.toLowerCase();
  if (/\bcourt\b|\bjudge\b|\bsued\b|\bverdict\b|\bconvict|\bindict|\bsentenc|\bsettlement\b|\bruling\b|\btrial\b|\blawsuit\b|\bprosec|\bguilty\b|\bacquit/.test(lower)) return 'legal';
  if (/\belection\b|\bcongress\b|\bsenate\b|\bpresident|\bcampaign\b|\bvote[sd]?\b|\blegislat|\bbill\b|\bexecutive order\b|\bimpeach/.test(lower)) return 'political';
  if (/\bbillion\b|\bmillion\b|\bfund|\bprofit\b|\brevenue\b|\bfraud\b|\bfine[sd]?\b|\bpaid\b|\bcontract|\bbribe|\blobby/.test(lower)) return 'financial';
  if (/\bdeath\b|\bkilled\b|\bmassacre\b|\bcrisis\b|\bdisaster\b|\bexplosion\b|\battack\b|\bbombing\b|\bcasualt|\bassassinat/.test(lower)) return 'critical';
  return 'default';
}

function buildTimelineString(entries) {
  return entries.map(({ date, event }) => {
    const type = determineEventType(event);
    // Sanitize: remove newlines, collapse whitespace, escape single quotes
    const cleanEvent = event
      .replace(/[\r\n]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/"/g, ';') // Replace double quotes with semicolons (safer in single-quoted strings)
      .trim();
    const escapedEvent = cleanEvent.replace(/'/g, "\\'");
    return `     { date: '${date}', event: '${escapedEvent}', type: '${type}' },`;
  }).join('\n');
}

// Track results
let totalFixed = 0;
let totalEnhanced = 0;
let totalSkipped = 0;
let totalNoContent = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
  let modified = false;
  
  // Find all investigation entry keys and their positions
  const entryRegex = /\n(\s{1,4})'([a-z0-9][a-z0-9-]+)':\s*\{/g;
  const entries = [...content.matchAll(entryRegex)];
  
  // Process in REVERSE ORDER to preserve string offsets during insertion
  for (let i = entries.length - 1; i >= 0; i--) {
    const match = entries[i];
    const slug = match[2];
    const entryStart = match.index + 1; // skip the leading newline
    
    // Find the end of this entry (start of next entry, or end of object)
    let entryEnd;
    if (i < entries.length - 1) {
      entryEnd = entries[i + 1].index;
    } else {
      // Last entry - find the closing of the object (export or end of assignments)
      const exportIdx = content.indexOf('\nexport', entryStart);
      const closingIdx = content.indexOf('\n};', entryStart);
      entryEnd = Math.min(
        exportIdx > -1 ? exportIdx : content.length,
        closingIdx > -1 ? closingIdx : content.length
      );
    }
    
    const block = content.slice(entryStart, entryEnd);
    
    // Check for existing timeline
    const hasTimeline = block.includes('timeline:');
    let existingCount = 0;
    
    if (hasTimeline) {
      const tlStart = block.indexOf('timeline:');
      const afterTl = block.slice(tlStart);
      const closeBracket = afterTl.indexOf('],');
      if (closeBracket > -1) {
        const tlBlock = afterTl.slice(0, closeBracket);
        existingCount = (tlBlock.match(/\{\s*date:/g) || []).length;
      }
    }
    
    // Skip if already has good timeline
    if (existingCount > 3) {
      totalSkipped++;
      continue;
    }
    
    // Extract text content for date mining
    const summaryMatch = block.match(/summary:\s*(['"])((?:[^'"\\]|\\.)*)(\1)/);
    const summary = summaryMatch ? summaryMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
    
    // Extract content array - handle both single and double quoted string entries
    let contentText = summary + '\n';
    const contentIdx = block.indexOf('content:');
    if (contentIdx > -1) {
      const afterContent = block.slice(contentIdx);
      // Find the closing ], of the content array using a proper string-aware parser
      let depth = 0;
      let stringChar = null; // null = not in string, "'" or '"' = in that type of string
      let escaped = false;
      let endIdx = -1;
      for (let ci = afterContent.indexOf('['); ci < afterContent.length; ci++) {
        const ch = afterContent[ci];
        if (escaped) { escaped = false; continue; }
        if (ch === '\\') { escaped = true; continue; }
        if ((ch === "'" || ch === '"') && !stringChar) { stringChar = ch; continue; }
        if (ch === stringChar) { stringChar = null; continue; }
        if (stringChar) continue; // inside a string, skip
        if (ch === '[') depth++;
        if (ch === ']') { depth--; if (depth === 0) { endIdx = ci; break; } }
      }
      if (endIdx > -1) {
        const contentBlock = afterContent.slice(afterContent.indexOf('['), endIdx + 1);
        // Extract all string values (both single and double quoted)
        const singleQuoted = [...contentBlock.matchAll(/'((?:[^'\\]|\\.)*)'/g)];
        for (const sv of singleQuoted) {
          contentText += sv[1].replace(/\\'/g, "'") + '\n';
        }
        const doubleQuoted = [...contentBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)];
        for (const sv of doubleQuoted) {
          contentText += sv[1].replace(/\\"/g, '"') + '\n';
        }
      }
    }
    
    if (contentText.trim().length < 50) {
      totalNoContent++;
      continue;
    }
    
    // Extract dates from the full text
    const dateEvents = extractDatesFromText(contentText);
    
    // Also use eventOriginDate and lastActivityDate as bookend entries
    const originMatch = block.match(/eventOriginDate:\s*'(\d{4}(?:-\d{2}(?:-\d{2})?)?)'/) ;
    const lastActivityMatch = block.match(/lastActivityDate:\s*'(\d{4}(?:-\d{2}(?:-\d{2})?)?)'/) ;
    const titleMatch = block.match(/title:\s*(['"])((?:[^'"\\]|\\.)*)\1/);
    const title = titleMatch ? titleMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/'/g, '') : slug;
    
    if (originMatch && !dateEvents.has(originMatch[1])) {
      const originDate = originMatch[1];
      dateEvents.set(originDate, {
        date: originDate,
        event: `${title} investigation begins — events under scrutiny originate from this period`,
        specificity: originDate.length
      });
    }
    
    if (lastActivityMatch && !dateEvents.has(lastActivityMatch[1])) {
      const lastDate = lastActivityMatch[1];
      // Only add as a bookend if it's different enough from origin
      const originYear = originMatch ? originMatch[1].slice(0, 4) : '';
      const lastYear = lastDate.slice(0, 4);
      if (originYear !== lastYear) {
        dateEvents.set(lastDate, {
          date: lastDate,
          event: `${title} — investigation remains active with ongoing developments`,
          specificity: lastDate.length
        });
      }
    }
    
    if (dateEvents.size === 0) {
      totalSkipped++;
      continue;
    }
    
    // Sort by date and cap at 12 entries
    const sortedEntries = [...dateEvents.values()]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 12);
    
    // Skip if we can't improve on existing
    if (sortedEntries.length <= existingCount) {
      totalSkipped++;
      continue;
    }
    
    // Build the timeline block
    const timelineItems = buildTimelineString(sortedEntries);
    const timelineBlock = `   timeline: [\n${timelineItems}\n   ],`;
    
    if (!hasTimeline) {
      // INSERT after pageUpdatedDate line
      const pageUpdatedMatch = block.match(/pageUpdatedDate:\s*'[^']*',\n/);
      if (pageUpdatedMatch) {
        const insertPos = entryStart + block.indexOf(pageUpdatedMatch[0]) + pageUpdatedMatch[0].length;
        content = content.slice(0, insertPos) + timelineBlock + '\n' + content.slice(insertPos);
        modified = true;
        totalFixed++;
        console.log(`  + ADDED timeline to ${slug}: ${sortedEntries.length} entries [${file}]`);
      } else {
        // Fallback: insert after lastActivityDate or eventOriginDate
        const lastDateLine = block.match(/(?:lastActivityDate|eventOriginDate):\s*'[^']*',\n/);
        if (lastDateLine) {
          const insertPos = entryStart + block.indexOf(lastDateLine[0]) + lastDateLine[0].length;
          content = content.slice(0, insertPos) + timelineBlock + '\n' + content.slice(insertPos);
          modified = true;
          totalFixed++;
          console.log(`  + ADDED timeline to ${slug}: ${sortedEntries.length} entries (fallback-date) [${file}]`);
        } else {
          // Final fallback: insert after the affiliations array closing or before entry closing
          const affiliationsClose = block.match(/affiliations:\s*\[[\s\S]*?\],\n/);
          if (affiliationsClose) {
            const insertPos = entryStart + block.indexOf(affiliationsClose[0]) + affiliationsClose[0].length;
            content = content.slice(0, insertPos) + timelineBlock + '\n' + content.slice(insertPos);
            modified = true;
            totalFixed++;
            console.log(`  + ADDED timeline to ${slug}: ${sortedEntries.length} entries (fallback-affil) [${file}]`);
          } else {
            totalSkipped++;
            console.log(`  ? SKIPPED ${slug}: no insertion point found [${file}]`);
          }
        }
      }
    } else if (existingCount <= 3) {
      // REPLACE existing sparse timeline
      const tlStart = block.indexOf('timeline:');
      const afterTl = block.slice(tlStart);
      const closeBracket = afterTl.indexOf('],');
      
      if (closeBracket > -1) {
        const absStart = entryStart + tlStart;
        const absEnd = entryStart + tlStart + closeBracket + 2; // include "],"
        content = content.slice(0, absStart) + timelineBlock + content.slice(absEnd);
        modified = true;
        totalEnhanced++;
        console.log(`  * ENHANCED ${slug}: ${existingCount} -> ${sortedEntries.length} entries [${file}]`);
      }
    }
  }
  
  if (modified) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
    console.log(`  Saved: ${file}${DRY_RUN ? ' (dry run)' : ''}`);
  }
}

console.log(`\n=== TIMELINE FIX RESULTS${DRY_RUN ? ' (DRY RUN)' : ''} ===`);
console.log(`New timelines added: ${totalFixed}`);
console.log(`Sparse timelines enhanced: ${totalEnhanced}`);
console.log(`Skipped (good or no dates found): ${totalSkipped}`);
console.log(`No content to extract from: ${totalNoContent}`);
console.log(`Total modified: ${totalFixed + totalEnhanced}`);
