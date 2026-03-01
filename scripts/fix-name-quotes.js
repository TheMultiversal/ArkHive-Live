// Fix unescaped apostrophes in name fields and re-check everything
const fs = require('fs');
let content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
let fixes = 0;
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes("{ name: '")) continue;
  
  const nameStart = line.indexOf("{ name: '") + "{ name: '".length;
  const relStart = line.indexOf("', relationship:");
  if (relStart <= nameStart) continue;
  
  const nameVal = line.substring(nameStart, relStart);
  let hasIssue = false;
  for (let j = 0; j < nameVal.length; j++) {
    if (nameVal[j] === "'" && (j === 0 || nameVal[j-1] !== '\\')) {
      hasIssue = true;
      break;
    }
  }
  
  if (hasIssue) {
    let fixed = '';
    for (let j = 0; j < nameVal.length; j++) {
      if (nameVal[j] === "'" && (j === 0 || nameVal[j-1] !== '\\')) {
        fixed += "\\'";
      } else {
        fixed += nameVal[j];
      }
    }
    const newLine = line.substring(0, nameStart) + fixed + line.substring(relStart);
    if (newLine !== line) {
      lines[i] = newLine;
      fixes++;
      console.log('Fixed name L' + (i + 1) + ': ' + nameVal + ' -> ' + fixed);
    }
  }
}

content = lines.join('\n');
fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', content);
console.log('Total name fixes:', fixes);
