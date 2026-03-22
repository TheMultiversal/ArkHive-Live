// Bulk fix: Expand sparse timelines (<4 entries) by extracting dates from content
// and generating meaningful timeline entries
const fs = require('fs');
const path = require('path');

const investigationsDir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Extract years/dates from text
function extractDatesFromText(text) {
  const dates = [];
  // Match full dates like "April 20, 2010" or "March 16, 1968"
  const fullDateRegex = /(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/gi;
  let m;
  while ((m = fullDateRegex.exec(text)) !== null) {
    const d = new Date(m[0]);
    if (!isNaN(d.getTime())) {
      dates.push({ date: d.toISOString().split('T')[0], raw: m[0], context: getContext(text, m.index) });
    }
  }
  // Match "in YYYY" style
  const yearRegex = /\b((?:19|20)\d{2})\b/g;
  while ((m = yearRegex.exec(text)) !== null) {
    const year = m[1];
    if (parseInt(year) >= 1900 && parseInt(year) <= 2026) {
      dates.push({ date: year, raw: m[0], context: getContext(text, m.index) });
    }
  }
  return dates;
}

function getContext(text, index) {
  const start = Math.max(0, index - 20);
  const end = Math.min(text.length, index + 120);
  return text.substring(start, end).replace(/\n/g, ' ').trim();
}

// Summarize a content paragraph into a timeline event
function summarizeForTimeline(paragraph, maxLen = 140) {
  // Take first sentence
  const first = paragraph.split(/\.\s+/)[0];
  if (first.length <= maxLen) return first + (first.endsWith('.') ? '' : '');
  return first.substring(0, maxLen - 3) + '...';
}

let totalFixed = 0;
let filesModified = 0;

const files = fs.readdirSync(investigationsDir).filter(f => f.endsWith('.ts'));
for (const file of files) {
  const filePath = path.join(investigationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Parse entries by finding timeline arrays
  // Pattern: 'slug': { ... timeline: [ ... ], },
  const timelineBlockRegex = /   timeline: \[\n((?:     \{ date: '[^']+', event: '[^']*(?:'[^']*)*', type: '[^']+' \},?\n)*)(   \],)/g;
  
  let tmatch;
  const replacements = [];
  
  while ((tmatch = timelineBlockRegex.exec(content)) !== null) {
    const fullBlock = tmatch[0];
    const entries = tmatch[1];
    const entryLines = entries.split('\n').filter(l => l.trim().startsWith('{ date:'));
    
    if (entryLines.length >= 4) continue; // Already has enough entries
    
    // Find the slug for this entry by looking backwards
    const before = content.substring(0, tmatch.index);
    const slugMatch = before.match(/'([^']+)':\s*\{[^}]*$/s);
    if (!slugMatch) continue;
    
    // Find the entry's content, date fields
    const slug = before.match(/  '([a-z0-9-]+)':\s*\{/g);
    if (!slug) continue;
    const lastSlug = slug[slug.length - 1].match(/'([a-z0-9-]+)'/)[1];
    
    // Get entry block
    const entryStart = before.lastIndexOf(`'${lastSlug}':`);
    const entryBlock = content.substring(entryStart, tmatch.index + fullBlock.length + 50);
    
    // Extract date and lastUpdated
    const dateMatch = entryBlock.match(/date:\s*['"]([^'"]+)['"]/);
    const lastUpdatedMatch = entryBlock.match(/lastUpdated:\s*['"]([^'"]+)['"]/);
    const eventOriginMatch = entryBlock.match(/eventOriginDate:\s*'([^']+)'/);
    const severityMatch = entryBlock.match(/severity:\s*'([^']+)'/);
    const categoryMatch = entryBlock.match(/category:\s*'([^']+)'/);
    const titleMatch = entryBlock.match(/title:\s*['"]([^'"]+)['"]/);
    
    // Extract content paragraphs
    const contentMatch = entryBlock.match(/content:\s*\[\s*\n([\s\S]*?)\n\s*\]/);
    const contentParagraphs = [];
    if (contentMatch) {
      const contentText = contentMatch[1];
      const paraRegex = /'([^']+(?:'[^']+)*)'/g;
      let pm;
      while ((pm = paraRegex.exec(contentText)) !== null) {
        contentParagraphs.push(pm[1].replace(/\\'/g, "'"));
      }
    }

    // Extract existing timeline dates to avoid duplicates
    const existingDates = new Set();
    for (const line of entryLines) {
      const dm = line.match(/date: '([^']+)'/);
      if (dm) existingDates.add(dm[1]);
    }
    
    // Check for auto-generated entries
    const hasAutoGen = entries.includes('investigation begins') || entries.includes('investigation remains active');
    
    if (!hasAutoGen && entryLines.length >= 3) continue; // Has 3 real entries, close enough
    
    // Generate new timeline entries
    const newEntries = [];
    const allContent = contentParagraphs.join(' ');
    
    // Extract meaningful dates from content
    const contentDates = extractDatesFromText(allContent);
    const seenYears = new Set();
    
    // Dedupe and sort
    const uniqueDates = [];
    for (const cd of contentDates) {
      const yearKey = cd.date.substring(0, 4);
      if (!seenYears.has(yearKey) && !existingDates.has(cd.date) && !existingDates.has(yearKey)) {
        seenYears.add(yearKey);
        uniqueDates.push(cd);
      }
    }
    uniqueDates.sort((a, b) => a.date.localeCompare(b.date));
    
    // Determine event type based on category
    const category = categoryMatch ? categoryMatch[1] : '';
    const defaultType = category.toLowerCase().includes('financial') ? 'financial' : 
                        category.toLowerCase().includes('political') || category.toLowerCase().includes('election') ? 'political' :
                        category.toLowerCase().includes('legal') || category.toLowerCase().includes('justice') ? 'legal' : 'default';
    
    // If we have auto-generated entries, replace them entirely
    if (hasAutoGen) {
      // Build new timeline from scratch
      const originDate = eventOriginMatch ? eventOriginMatch[1] : (dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : '');
      const title = titleMatch ? titleMatch[1] : lastSlug;
      
      // Start with origin event
      if (originDate && contentParagraphs.length > 0) {
        const firstSentence = contentParagraphs[0].split(/[.;]/)[0].trim();
        const eventText = firstSentence.length > 140 ? firstSentence.substring(0, 137) + '...' : firstSentence;
        newEntries.push({ date: originDate, event: eventText, type: defaultType });
      }
      
      // Add events from content dates
      for (const cd of uniqueDates.slice(0, 4)) {
        if (cd.date === originDate || cd.date.startsWith(originDate.substring(0, 4))) continue;
        const eventText = cd.context.length > 140 ? cd.context.substring(0, 137) + '...' : cd.context;
        newEntries.push({ date: cd.date, event: eventText.replace(/'/g, "\\'"), type: defaultType });
      }
      
      // If still not enough, add paragraph summaries  
      if (newEntries.length < 4 && contentParagraphs.length > 1) {
        for (let i = 1; i < contentParagraphs.length && newEntries.length < 5; i++) {
          const para = contentParagraphs[i];
          const yearMatch = para.match(/\b((?:19|20)\d{2})\b/);
          const date = yearMatch ? yearMatch[1] : originDate;
          
          // Skip if we already have this year
          if (newEntries.some(e => e.date.startsWith(date.substring(0, 4)))) continue;
          
          const summary = summarizeForTimeline(para);
          newEntries.push({ date: date, event: summary.replace(/'/g, "\\'"), type: defaultType });
        }
      }
      
      // Must have at least 4 entries
      if (newEntries.length < 4) continue; // Can't generate enough
      
      // Sort by date
      newEntries.sort((a, b) => a.date.localeCompare(b.date));
      
      // Build replacement
      const newTimelineStr = newEntries.map(e => `     { date: '${e.date}', event: '${e.event}', type: '${e.type}' },`).join('\n');
      const newBlock = `   timeline: [\n${newTimelineStr}\n   ],`;
      
      replacements.push({ old: fullBlock, new: newBlock, slug: lastSlug });
      totalFixed++;
      console.log(`  ${file}:${lastSlug} - Replaced auto-gen timeline with ${newEntries.length} entries`);
    }
  }
  
  // Apply replacements in reverse order to preserve indices
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    content = content.replace(r.old, r.new);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
  }
}

console.log(`\nDone! Fixed ${totalFixed} timelines across ${filesModified} files`);
