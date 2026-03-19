/**
 * Fix Truncated Subtitles Script
 * 
 * Many subtitles are truncated at ~95 characters. This script fixes them
 * by using the summary field as the proper subtitle when the subtitle
 * appears truncated (ends mid-word or is very long without punctuation).
 */

const fs = require('fs');
const path = require('path');

const INVESTIGATIONS_DIR = path.join(__dirname, '../src/data/investigations');

// Check if subtitle looks truncated
function isTruncated(subtitle) {
  if (!subtitle) return false;
  
  // Common truncation indicators:
  // 1. Ends mid-word (no space before last word and ends with lowercase letter)
  // 2. Very long (over 90 chars) but doesn't end with punctuation
  // 3. Ends with incomplete phrase markers
  
  const trimmed = subtitle.trim();
  
  // Too short to be truncated
  if (trimmed.length < 80) return false;
  
  // Ends with punctuation - probably not truncated
  if (/[.!?)]$/.test(trimmed)) return false;
  
  // Clearly truncated - ends mid-word
  if (/\s[a-z]{1,5}$/i.test(trimmed) && trimmed.length > 85) {
    return true;
  }
  
  // Ends with articles/prepositions - likely truncated
  if (/\s(a|an|the|and|or|of|to|in|on|at|by|for|with|from)\s*$/i.test(trimmed)) {
    return true;
  }
  
  return false;
}

// Create a proper subtitle from summary
function createSubtitle(summary) {
  if (!summary) return null;
  
  // Take first sentence or up to 150 chars
  let subtitle = summary;
  
  // If there's a period, take up to first period
  const periodIndex = summary.indexOf('.');
  if (periodIndex > 0 && periodIndex < 200) {
    subtitle = summary.substring(0, periodIndex + 1);
  } else if (summary.length > 150) {
    // Otherwise truncate at word boundary around 150 chars
    const truncateAt = summary.lastIndexOf(' ', 150);
    if (truncateAt > 100) {
      subtitle = summary.substring(0, truncateAt) + '...';
    }
  }
  
  return subtitle;
}

// Process file
function processFile(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let fixCount = 0;
  
  // Find all subtitle/summary pairs
  const investigationPattern = /'[\w-]+':\s*\{[^}]*subtitle:\s*'([^']+)'[^}]*summary:\s*'([^']+)'/gs;
  
  const matches = [...content.matchAll(investigationPattern)];
  
  for (const match of matches) {
    const subtitle = match[1];
    const summary = match[2];
    
    if (isTruncated(subtitle)) {
      // Use summary as subtitle if it's better
      const newSubtitle = createSubtitle(summary);
      
      if (newSubtitle && newSubtitle !== subtitle) {
        // Escape single quotes in new subtitle
        const escapedSubtitle = newSubtitle.replace(/'/g, "\\'");
        const escapedOld = subtitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        const searchPattern = new RegExp(`subtitle:\\s*'${escapedOld}'`);
        const newContent = content.replace(searchPattern, `subtitle: '${escapedSubtitle}'`);
        
        if (newContent !== content) {
          content = newContent;
          fixCount++;
          console.log(`  Fixed: "${subtitle.substring(0, 50)}..." -> "${newSubtitle.substring(0, 50)}..."`);
        }
      }
    }
  }
  
  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Total fixed: ${fixCount}`);
  } else {
    console.log('  No truncated subtitles found');
  }
  
  return fixCount;
}

// Main execution
function main() {
  console.log('Fix Truncated Subtitles Script');
  console.log('================================');
  
  const files = fs.readdirSync(INVESTIGATIONS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts')
    .map(f => path.join(INVESTIGATIONS_DIR, f));
  
  console.log(`Found ${files.length} investigation files`);
  
  let totalFixes = 0;
  
  for (const file of files) {
    try {
      totalFixes += processFile(file);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log('\n================================');
  console.log(`Total subtitles fixed: ${totalFixes}`);
}

main();
