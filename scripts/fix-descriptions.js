#!/usr/bin/env node
/**
 * Fix broken descriptions left by the previous metadata cleanup attempt.
 * The regex didn't properly handle escaped quotes in description strings.
 * 
 * This script does character-by-character parsing to find and replace
 * bot-generated description strings.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

const BOT_DESC_MARKERS = [
  "identified through ArkHive",
  "Profile pending review.'s investigative network",
  "is a public figure identified through ArkHive",
  "is a subject of record in ArkHive",
  "ArkHive\\'s investigative network analysis",
  "ArkHive's investigative network analysis",
  "flagged by ArkHive\\'s automated",
  "flagged by ArkHive's automated",
  "ArkHive\\'s automated swarm intelligence",
  "ArkHive's automated swarm intelligence",
  "ArkHive\\'s distributed investigative",
  "ArkHive's distributed investigative",
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let fixed = 0;
  const outLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a description line with bot content
    const descMatch = line.match(/^(\s*description:\s*)'(.*)$/);
    if (descMatch) {
      const prefix = descMatch[1];
      const rest = descMatch[2]; // everything after the opening quote
      
      // Check if this description contains bot markers
      let isBotDesc = false;
      for (const marker of BOT_DESC_MARKERS) {
        if (rest.includes(marker)) {
          isBotDesc = true;
          break;
        }
      }
      
      if (isBotDesc) {
        // Extract the person's name from the description
        // Pattern: "Name is a public figure..." or "Name. Profile pending review.'s..."
        let name = '';
        
        // Try: "Name. Profile pending review.'s..." (broken from previous script)
        const brokenMatch = rest.match(/^((?:[A-Z][a-z\'\-]+\.?\s*)+)\.\s*Profile pending review/);
        if (brokenMatch) {
          name = brokenMatch[1].trim();
        }
        
        // Try: "Name is a public figure identified..."
        if (!name) {
          const nameMatch = rest.match(/^((?:[A-Z][a-z\'\-]+\.?\s*)+)\s+is a (?:public figure|subject of record)/);
          if (nameMatch) {
            name = nameMatch[1].trim();
          }
        }
        
        // Try: "Name has been flagged..."
        if (!name) {
          const flaggedMatch = rest.match(/^((?:[A-Z][a-z\'\-]+\.?\s*)+)\s+has been flagged/);
          if (flaggedMatch) {
            name = flaggedMatch[1].trim();
          }
        }

        // Fallback: just use what we can get
        if (!name) {
          // Get the name field from previous lines
          for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
            const nm = lines[j].match(/name:\s*'([^']+)'/);
            if (nm) { name = nm[1]; break; }
          }
        }
        
        if (!name) name = 'Subject';
        
        // Find where the description string actually ends (handling escaped quotes)
        // We need to find the complete original description string and replace the whole line
        let fullDesc = rest;
        let lineIdx = i;
        
        // Count from the start: find closing unescaped quote
        let pos = 0;
        let foundEnd = false;
        while (pos < fullDesc.length) {
          if (fullDesc[pos] === '\\' && pos + 1 < fullDesc.length && fullDesc[pos + 1] === "'") {
            pos += 2; // skip escaped quote
          } else if (fullDesc[pos] === "'") {
            foundEnd = true;
            break;
          } else {
            pos++;
          }
        }
        
        if (foundEnd) {
          // The string ends at position `pos` — replace everything
          const afterString = fullDesc.substring(pos); // includes closing ' and rest of line
          outLines.push(`${prefix}'${name}. Profile pending review.${afterString}`);
          fixed++;
          continue;
        } else {
          // Multi-line string? Unlikely but handle it
          // Just replace this line and consume until we find the end
          let combined = fullDesc;
          let endLineIdx = i;
          for (let j = i + 1; j < lines.length && j < i + 10; j++) {
            combined += '\n' + lines[j];
            // Check for closing quote
            let p2 = 0;
            let found2 = false;
            const scanStr = lines[j];
            while (p2 < scanStr.length) {
              if (scanStr[p2] === '\\' && p2 + 1 < scanStr.length && scanStr[p2 + 1] === "'") {
                p2 += 2;
              } else if (scanStr[p2] === "'") {
                found2 = true;
                const afterStr = scanStr.substring(p2);
                outLines.push(`${prefix}'${name}. Profile pending review.${afterStr}`);
                i = j; // skip consumed lines
                fixed++;
                break;
              } else {
                p2++;
              }
            }
            if (found2) break;
          }
          if (!foundEnd) {
            outLines.push(line); // couldn't parse, keep original
          }
          continue;
        }
      }
    }
    
    outLines.push(line);
  }

  if (fixed > 0) {
    fs.writeFileSync(filePath, outLines.join('\n'), 'utf-8');
  }
  return fixed;
}

console.log('=== ArkHive Description Fix ===\n');

const files = fs.readdirSync(INDIVIDUALS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
  .sort();

let total = 0;
for (const file of files) {
  const r = processFile(path.join(INDIVIDUALS_DIR, file));
  if (r > 0) console.log(`${file}: ${r} descriptions fixed`);
  total += r;
}

console.log(`\nTotal descriptions fixed: ${total}`);
