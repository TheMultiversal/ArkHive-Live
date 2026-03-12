#!/usr/bin/env node
/**
 * Fix remaining broken/bot description lines in individual profiles.
 * 
 * Strategy: find description lines containing ArkHive or "Profile pending review.'s",
 * look up the person's name from the nearest `name:` line above,
 * and replace the entire description value.
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

const BOT_MARKERS = [
  "ArkHive",
  "arkhive",
  "Profile pending review.'s",
  "swarm intelligence",
  "cross-reference density",
  "accountability gaps",
  "investigative network analysis",
  "institutional power structures",
];

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const outLines = [];
  let fixed = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Only target description lines
    if (!trimmed.startsWith('description:')) {
      outLines.push(line);
      continue;
    }

    // Check if this description contains any bot markers
    let isBotLine = false;
    for (const m of BOT_MARKERS) {
      if (line.includes(m)) {
        isBotLine = true;
        break;
      }
    }

    if (!isBotLine) {
      outLines.push(line);
      continue;
    }

    // Find the person's name from the nearest `name:` line above
    let name = 'Subject';
    for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
      const nameMatch = lines[j].match(/^\s*name:\s*'([^']+)'/);
      if (nameMatch) {
        name = nameMatch[1];
        break;
      }
    }

    // Get the leading whitespace
    const indent = line.match(/^(\s*)/)[1];

    // Replace the entire description line
    // We need to handle multi-line descriptions (unlikely but safe)
    // Check if this line has a proper closing: ends with ', or just '
    // Find the last ', on the line
    if (trimmed.endsWith("',") || trimmed.endsWith("'")) {
      // Single-line description — replace it
      const suffix = trimmed.endsWith("',") ? "'," : "'";
      outLines.push(`${indent}description: '${name}. Profile pending review.${suffix}`);
      fixed++;
    } else {
      // Multi-line description — consume until we find a line ending with ',
      let endIdx = i;
      for (let j = i + 1; j < lines.length && j < i + 20; j++) {
        const lt = lines[j].trim();
        // A description continues until we hit a line that ends with ', or
        // a line that starts with a new property key
        if (lt.endsWith("',") || lt.match(/^\w+:\s/)) {
          if (lt.endsWith("',")) {
            endIdx = j;
          } else {
            endIdx = j - 1;
          }
          break;
        }
      }
      outLines.push(`${indent}description: '${name}. Profile pending review.',`);
      i = endIdx; // skip consumed lines
      fixed++;
    }
  }

  if (fixed > 0) {
    fs.writeFileSync(filePath, outLines.join('\n'), 'utf-8');
  }
  return fixed;
}

console.log('=== Fix Remaining Bot Descriptions ===\n');

const files = fs.readdirSync(INDIVIDUALS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
  .sort();

let total = 0;
for (const file of files) {
  const r = processFile(path.join(INDIVIDUALS_DIR, file));
  if (r > 0) console.log(`${file}: ${r} fixed`);
  total += r;
}

console.log(`\nTotal: ${total}`);
