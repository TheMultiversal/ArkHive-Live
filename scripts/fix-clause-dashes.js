#!/usr/bin/env node
/**
 * fix-clause-dashes.js
 * Replaces standalone hyphens used as em-dash-style clause joiners with semicolons.
 * Only targets " - " between two independent clauses (lowercase letter before, lowercase after).
 * Preserves legitimate uses like titles, labels, date ranges, lists, and proper names.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

function getFiles(dir, ext, results = []) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      getFiles(fp, ext, results);
    } else if (fp.endsWith(ext)) {
      results.push(fp);
    }
  }
  return results;
}

// Words that commonly appear before a dash in legitimate label/title contexts
const TITLE_WORDS_BEFORE = new Set([
  'investigation', 'report', 'analysis', 'overview', 'summary',
  'document', 'program', 'project', 'operation', 'act',
]);

let totalFixed = 0;
let totalSkipped = 0;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let fileFixed = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are clearly structural (imports, types, keys, urls, hrefs)
    if (/^\s*(import |export |\/\/|const |let |var |type |interface )/.test(line)) continue;
    if (/href:|url:|slug:|id:/.test(line)) continue;
    
    // Find all " - " occurrences in this line
    let newLine = line;
    let changed = false;
    
    // We process from right to left to preserve indices
    const matches = [];
    let searchIdx = 0;
    while (true) {
      const idx = newLine.indexOf(' - ', searchIdx);
      if (idx === -1) break;
      matches.push(idx);
      searchIdx = idx + 3;
    }
    
    for (const idx of matches.reverse()) {
      const before = newLine.substring(0, idx);
      const after = newLine.substring(idx + 3);
      
      // Get the character just before and just after
      const charBefore = before.length > 0 ? before[before.length - 1] : '';
      const charAfter = after.length > 0 ? after[0] : '';
      
      // SKIP: Date ranges like "2009 - 2015" or "1973 - present"
      if (/\d$/.test(before) && /^\d/.test(after)) continue;
      if (/\d$/.test(before) && /^(present|ongoing|current)/i.test(after)) continue;
      
      // SKIP: Inside object keys/property definitions
      if (/:\s*'[^']*$/.test(before) === false && /^\s*\w+:/.test(line)) continue;
      
      // SKIP: Title-style separators (capitalized word after dash)
      // Like "Fox News - Investigation" or "CIA - Central Intelligence Agency"
      if (/^[A-Z][a-z]/.test(after) && /[A-Z]/.test(charBefore)) continue;
      
      // SKIP: List-style dashes at start of content
      if (/^\s*'?\s*$/.test(before)) continue;
      
      // SKIP: Abbreviation expansions like "LRAD - Long Range"
      if (/[A-Z]{2,}$/.test(before.trim())) continue;
      
      // SKIP: Role/title separators like "Director - Operations"
      if (/^[A-Z]/.test(after) && /[a-z)]$/.test(charBefore) === false) continue;
      
      // TARGET: Clause joiners - lowercase/punctuation before, lowercase after
      // Pattern: "word - word" where it joins two independent clauses
      if (/[a-z,;:)\d'".]$/.test(charBefore) && /^[a-z]/.test(charAfter)) {
        // This looks like a clause joiner
        newLine = before + '; ' + after;
        changed = true;
        fileFixed++;
      }
      // Also catch: "word - Word" where the word after starts with capital (new clause)
      // But only if the word before ends in lowercase (indicating mid-sentence)
      else if (/[a-z)\d'".]$/.test(charBefore) && /^[A-Z][a-z]/.test(after)) {
        // Check it's not a name/title after the dash
        const wordAfter = after.match(/^(\w+)/);
        const titleWords = new Set(['The', 'This', 'These', 'That', 'Those', 'It', 'Its', 'He', 'She', 'They', 'We', 'His', 'Her', 'No', 'Not', 'But', 'Yet', 'So', 'Each', 'Every', 'Most', 'Many', 'Some', 'All', 'Any', 'Few', 'Both']);
        if (wordAfter && titleWords.has(wordAfter[1])) {
          newLine = before + '; ' + after;
          changed = true;
          fileFixed++;
        }
        // Also catch when it clearly continues a thought
        else if (/[a-z]$/.test(charBefore)) {
          // Check context more carefully - is this really a clause break?
          const wordBefore = before.match(/(\w+)$/);
          if (wordBefore) {
            // Common clause-ending words
            const clauseEnders = ['it', 'them', 'him', 'her', 'us', 'me', 'you', 'that', 'this', 'there', 'here',
              'today', 'now', 'then', 'ever', 'never', 'always', 'often', 'still', 'yet', 'too', 'also',
              'away', 'down', 'out', 'up', 'off', 'back', 'over', 'ago', 'else',
              'all', 'both', 'each', 'any', 'some', 'none', 'much', 'more', 'most', 'least',
              'well', 'far', 'long', 'hard', 'fast', 'early', 'late', 'soon', 'again',
              'public', 'private', 'federal', 'military', 'political', 'economic', 'financial',
              'responsible', 'accountable', 'compliant', 'transparent', 'effective', 'independent',
              'oversight', 'investigation', 'evidence', 'documents', 'records', 'report', 'reports'];
            // Past tense / past participle patterns
            if (/(?:ed|ied|ted|sed|ned|red|ged|ked|led|med|ped|ved|wed|xed|zed|own|awn|orn|ent|unt|ung|ong|ght|ost|est)$/.test(wordBefore[1])) {
              newLine = before + '; ' + after;
              changed = true;
              fileFixed++;
            } else if (clauseEnders.includes(wordBefore[1].toLowerCase())) {
              newLine = before + '; ' + after;
              changed = true;
              fileFixed++;
            }
          }
        }
      }
    }
    
    if (changed) {
      lines[i] = newLine;
    }
  }

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    const rel = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`  ${rel}: ${fileFixed} fixed`);
  }
  
  totalFixed += fileFixed;
}

console.log('=== Fix Clause-Joining Dashes ===\n');

const tsFiles = getFiles(path.join(SRC_DIR, 'data'), '.ts');
const tsxFiles = getFiles(path.join(SRC_DIR, 'app'), '.tsx');
const componentFiles = getFiles(path.join(SRC_DIR, 'components'), '.tsx');
const allFiles = [...tsFiles, ...tsxFiles, ...componentFiles];

console.log(`Scanning ${allFiles.length} files...\n`);

for (const f of allFiles) {
  processFile(f);
}

console.log(`\n=== COMPLETE: ${totalFixed} clause-joining dashes replaced with semicolons ===`);
