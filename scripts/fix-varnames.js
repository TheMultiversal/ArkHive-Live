const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'app', 'investigations');
const dirs = fs.readdirSync(baseDir);
let fixCount = 0;

for (const dir of dirs) {
  const filePath = path.join(baseDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Detect which variable name is used for the data
  const usesInvestigationData = /const investigationData\s*=/.test(content);
  const usesInvestigation = /const investigation\s*=/.test(content);
  
  if (!usesInvestigationData && !usesInvestigation) continue;
  
  const correctVar = usesInvestigationData ? 'investigationData' : 'investigation';
  const wrongVar = usesInvestigationData ? 'investigation' : 'investigationData';
  
  // In the JSX section (after return), find uses of the wrong variable
  const returnIdx = content.indexOf('return (');
  if (returnIdx === -1) continue;
  
  const jsxPart = content.substring(returnIdx);
  const original = jsxPart;
  
  // Replace wrong variable references in JSX
  // Only replace standalone variable name (not within string constants)
  const wrongPattern = new RegExp(`\\{${wrongVar}\\.`, 'g');
  const fixedJsx = jsxPart.replace(wrongPattern, `{${correctVar}.`);
  
  if (fixedJsx !== original) {
    content = content.substring(0, returnIdx) + fixedJsx;
    fs.writeFileSync(filePath, content);
    const count = (original.match(wrongPattern) || []).length;
    console.log(`Fixed ${count} wrong var refs in: ${dir} (${wrongVar} -> ${correctVar})`);
    fixCount++;
  }
}

console.log(`\nFixed ${fixCount} files`);
