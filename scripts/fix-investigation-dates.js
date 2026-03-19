/**
 * Investigation Date Transformation Script v3
 * 
 * Uses a state-based parser to properly handle nested structures
 */

const fs = require('fs');
const path = require('path');

const INVESTIGATIONS_DIR = path.join(__dirname, '../src/data/investigations');
const TODAY = '2025-03-18';

// Parse human-readable date to ISO format
function parseDate(dateStr) {
  if (!dateStr) return null;
  
  // Already ISO format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  
  // Handle "Month DD, YYYY" format
  const monthMap = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12'
  };
  
  const match = dateStr.match(/^(\w+)\s+(\d{1,2}),?\s*(\d{4})$/i);
  if (match) {
    const month = monthMap[match[1].toLowerCase()];
    const day = match[2].padStart(2, '0');
    const year = match[3];
    if (month) {
      return `${year}-${month}-${day}`;
    }
  }
  
  // Try parsing dates in various formats
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime()) && d.getFullYear() > 1900) {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  } catch (e) {}
  
  return null;
}

// Process file line by line with proper brace tracking
function processFile(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  
  let updateCount = 0;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Look for start of investigation entry: 'slug-name': {
    const entryMatch = line.match(/^(\s*)'([\w-]+)':\s*\{/);
    
    if (entryMatch) {
      const baseIndent = entryMatch[1];
      const slug = entryMatch[2];
      
      // Collect the entire investigation block
      let blockLines = [line];
      let braceDepth = 1;
      let j = i + 1;
      
      // Count braces properly
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      braceDepth = openBraces - closeBraces;
      
      while (j < lines.length && braceDepth > 0) {
        const nextLine = lines[j];
        blockLines.push(nextLine);
        braceDepth += (nextLine.match(/\{/g) || []).length;
        braceDepth -= (nextLine.match(/\}/g) || []).length;
        j++;
      }
      
      // Now we have the complete block from i to j-1
      const blockText = blockLines.join('\n');
      
      // Check if already has eventOriginDate
      if (blockText.includes('eventOriginDate:')) {
        // No change needed
        for (const bl of blockLines) {
          newLines.push(bl);
        }
      } else {
        // Need to add date fields
        // Extract date and lastUpdated
        const dateMatch = blockText.match(/date:\s*'([^']+)'/);
        const lastUpdatedMatch = blockText.match(/lastUpdated:\s*'([^']+)'/);
        
        if (dateMatch) {
          const eventOriginDate = parseDate(dateMatch[1]);
          const lastActivityDate = parseDate(lastUpdatedMatch ? lastUpdatedMatch[1] : dateMatch[1]);
          
          if (eventOriginDate) {
            // Find where to insert: after affiliations array, or before closing brace
            let insertIndex = -1;
            let affiliationsBracketDepth = 0;
            let foundAffiliations = false;
            
            for (let k = 0; k < blockLines.length; k++) {
              const bl = blockLines[k];
              
              if (bl.includes('affiliations:')) {
                foundAffiliations = true;
                affiliationsBracketDepth = 0;
              }
              
              if (foundAffiliations) {
                affiliationsBracketDepth += (bl.match(/\[/g) || []).length;
                affiliationsBracketDepth -= (bl.match(/\]/g) || []).length;
                
                if (affiliationsBracketDepth === 0 && bl.includes(']')) {
                  insertIndex = k;
                  foundAffiliations = false;
                  break;
                }
              }
            }
            
            // If no affiliations found, insert before closing brace
            if (insertIndex === -1) {
              insertIndex = blockLines.length - 2; // Before the }, line
            }
            
            // Determine indentation
            const indent = baseIndent + ' ';
            
            // Build new lines with date fields
            const dateFields = [
              `${indent}eventOriginDate: '${eventOriginDate}',`,
              `${indent}lastActivityDate: '${lastActivityDate || eventOriginDate}',`,
              `${indent}pageUpdatedDate: '${TODAY}',`
            ];
            
            // Insert at proper position
            const before = blockLines.slice(0, insertIndex + 1);
            const after = blockLines.slice(insertIndex + 1);
            
            for (const bl of before) {
              newLines.push(bl);
            }
            for (const df of dateFields) {
              newLines.push(df);
            }
            for (const bl of after) {
              newLines.push(bl);
            }
            
            updateCount++;
          } else {
            // Couldn't parse date, keep original
            for (const bl of blockLines) {
              newLines.push(bl);
            }
          }
        } else {
          // No date field found, keep original
          for (const bl of blockLines) {
            newLines.push(bl);
          }
        }
      }
      
      i = j;
    } else {
      // Regular line, just copy
      newLines.push(line);
      i++;
    }
  }
  
  if (updateCount > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    console.log(`  Updated ${updateCount} investigations`);
  } else {
    console.log('  No updates needed (all have dates or already updated)');
  }
  
  return updateCount;
}

// Main execution
function main() {
  console.log('Investigation Date Transformation Script v3');
  console.log('============================================');
  console.log(`Target directory: ${INVESTIGATIONS_DIR}`);
  console.log(`Page updated date: ${TODAY}`);
  
  // Get all .ts files in the directory
  const files = fs.readdirSync(INVESTIGATIONS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts')
    .map(f => path.join(INVESTIGATIONS_DIR, f));
  
  console.log(`\nFound ${files.length} investigation files`);
  
  let totalUpdates = 0;
  
  for (const file of files) {
    try {
      totalUpdates += processFile(file);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log('\n============================================');
  console.log(`Total investigations updated: ${totalUpdates}`);
}

main();
