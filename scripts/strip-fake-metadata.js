#!/usr/bin/env node
/**
 * Clean remaining bot-generated metadata from individual profiles:
 * - Replace fake ArkHive descriptions with minimal placeholder
 * - Fix "Public Figure Under Investigation" / "Subject of Record" titles
 * - Fix "Under Investigation" / "Under review" roles
 */

const fs = require('fs');
const path = require('path');

const INDIVIDUALS_DIR = path.join(__dirname, '..', 'src', 'data', 'individuals');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  let stats = { desc: 0, title: 0, role: 0 };

  // Replace bot-generated description pattern
  // Pattern: "Name is a public figure identified through ArkHive's investigative network..."
  // Replace with just an empty placeholder
  const descRegex = /description: '([A-Z][a-z]+(?: [A-Z][a-z\-\']+)*) is a public figure identified through ArkHive\\?'s investigative network analysis of institutional power structures and accountability gaps\.[^']*?(?:investigative reports surface|accountability network)\.\s*'/g;
  content = content.replace(descRegex, (match, name) => {
    stats.desc++;
    return `description: '${name}. Profile pending review.'`;
  });

  // Also catch the variant with "Subject of Record" in description
  const descRegex2 = /description: '([A-Z][a-z]+(?: [A-Z][a-z\-\']+)*) is a subject of record in ArkHive[^']*?'/g;
  content = content.replace(descRegex2, (match, name) => {
    stats.desc++;
    return `description: '${name}. Profile pending review.'`;
  });

  // Catch any remaining "identified through ArkHive" descriptions (broader pattern)
  const descRegex3 = /description: '([^']{1,80}) is a public figure identified through ArkHive[^']*?'/g;
  content = content.replace(descRegex3, (match, prefix) => {
    stats.desc++;
    // Extract just the name (first part before any weird stuff)
    const name = prefix.replace(/\\/g, "'");
    return `description: '${name}. Profile pending review.'`;
  });

  // Fix fake titles
  content = content.replace(/title: 'Public Figure Under Investigation'/g, () => {
    stats.title++;
    return "title: 'Profile Under Review'";
  });
  content = content.replace(/title: 'Subject of Record'/g, () => {
    stats.title++;
    return "title: 'Profile Under Review'";
  });

  // Fix fake roles
  content = content.replace(/role: 'Under Investigation'/g, () => {
    stats.role++;
    return "role: ''";
  });
  content = content.replace(/role: 'Under review based on institutional connections'/g, () => {
    stats.role++;
    return "role: ''";
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return stats;
}

console.log('=== ArkHive Metadata Cleanup ===\n');

const files = fs.readdirSync(INDIVIDUALS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
  .sort();

let tD = 0, tT = 0, tR = 0;

for (const file of files) {
  const r = processFile(path.join(INDIVIDUALS_DIR, file));
  tD += r.desc;
  tT += r.title;
  tR += r.role;
  const sum = r.desc + r.title + r.role;
  if (sum > 0) {
    console.log(`${file}: -${r.desc} desc, -${r.title} titles, -${r.role} roles`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Descriptions cleaned: ${tD}`);
console.log(`Titles fixed: ${tT}`);
console.log(`Roles fixed: ${tR}`);
