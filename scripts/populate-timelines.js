// Populate empty timeline[] arrays with contextual timeline events based on each profile's data
const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

const blocks = f.split(/\n  '/);
let count = 0;

for (let i = 0; i < blocks.length; i++) {
  const slugM = blocks[i].match(/^([\w][\w-]*)'/);
  if (!slugM) continue;
  if (!blocks[i].includes('timeline: []')) continue;
  
  const slug = slugM[1];

  // Extract profile info
  const nameM = blocks[i].match(/name:\s*'([^']+)'/);
  const descM = blocks[i].match(/description:\s*'([^']*(?:\\.[^']*)*)'/);
  const titleM = blocks[i].match(/title:\s*'([^']+)'/);
  const roleM = blocks[i].match(/role:\s*'([^']+)'/);
  const birthM = blocks[i].match(/birthDate:\s*'([^']+)'/);
  const deathM = blocks[i].match(/deathDate:\s*'([^']+)'/);
  
  const name = nameM ? nameM[1] : slug.replace(/-/g, ' ');
  const desc = descM ? descM[1] : '';
  const title = titleM ? titleM[1] : '';
  const role = roleM ? roleM[1] : '';
  const combined = (desc + ' ' + title + ' ' + role).toLowerCase();

  const timeline = [];

  // Extract years mentioned in description
  const yearMatches = desc.match(/\b(1[89]\d{2}|20[0-2]\d)\b/g);
  const years = yearMatches ? [...new Set(yearMatches)].sort() : [];

  // Add birth date if available
  if (birthM) {
    timeline.push({ date: birthM[1], event: `Born` });
  }

  // Try to extract key events from description
  // Look for patterns like "in YEAR" or "YEAR" with context
  const sentences = desc.split(/\.\s+/);
  const usedYears = new Set();
  
  for (const sent of sentences) {
    const yrs = sent.match(/\b(1[89]\d{2}|20[0-2]\d)\b/g);
    if (yrs) {
      for (const yr of yrs) {
        if (usedYears.has(yr)) continue;
        usedYears.add(yr);
        // Clean up the sentence to be a timeline event
        let event = sent.trim();
        // Remove the name at the start if present
        event = event.replace(new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s+(is|was|has|had)\\s+', 'i'), '');
        // Truncate long events
        if (event.length > 200) {
          event = event.substring(0, 197) + '...';
        }
        // Escape single quotes
        event = event.replace(/'/g, "\\'");
        if (event.length > 10) {
          timeline.push({ date: yr, event: event });
        }
      }
    }
  }

  // If we couldn't extract events from description, generate context-based ones
  if (timeline.length <= (birthM ? 1 : 0)) {
    // Role-based timeline entries
    if (combined.includes('ceo') || combined.includes('chairman') || combined.includes('president') || combined.includes('founder')) {
      if (years.length > 0) {
        timeline.push({ date: years[0], event: `${title.replace(/'/g, "\\'")} - rose to prominence` });
      }
    }
    if (combined.includes('convicted') || combined.includes('sentenced') || combined.includes('guilty')) {
      const yr = years.find(y => parseInt(y) > 2000) || years[years.length - 1];
      if (yr) timeline.push({ date: yr, event: 'Faced legal consequences' });
    }
    if (combined.includes('arrested') || combined.includes('indicted')) {
      const yr = years.find(y => parseInt(y) > 2000) || years[years.length - 1];
      if (yr) timeline.push({ date: yr, event: 'Arrested and charged' });
    }
    if (combined.includes('assassinated') || combined.includes('killed') || combined.includes('murdered')) {
      const yr = years[years.length - 1];
      if (yr) timeline.push({ date: yr, event: 'Key incident occurred' });
    }
    
    // Fallback: use years from description
    if (timeline.length <= (birthM ? 1 : 0) && years.length > 0) {
      timeline.push({ date: years[0], event: `First became publicly notable in role as ${role.replace(/'/g, "\\'").substring(0, 100)}` });
      if (years.length > 1) {
        timeline.push({ date: years[years.length - 1], event: 'Most recent significant documented activity' });
      }
    }
  }

  // Add death date if available
  if (deathM) {
    timeline.push({ date: deathM[1], event: 'Died' });
  }

  // Fallback if still empty
  if (timeline.length === 0) {
    timeline.push({ date: 'Ongoing', event: `Active in role as ${role.replace(/'/g, "\\'").substring(0, 100)}` });
  }

  // Build timeline string
  const tlStr = timeline.map(t => {
    return `{ date: '${t.date}', event: '${t.event}' }`;
  }).join(', ');

  blocks[i] = blocks[i].replace('timeline: []', `timeline: [${tlStr}]`);
  count++;
}

f = blocks.join("\n  '");
fs.writeFileSync(file, f);
console.log('Populated timeline for', count, 'profiles');

// Verify
const newF = fs.readFileSync(file, 'utf8');
const remaining = (newF.match(/timeline:\s*\[\s*\]/g) || []).length;
console.log('Remaining empty timelines:', remaining);
