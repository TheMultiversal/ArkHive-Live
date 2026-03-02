const fs = require('fs');
const path = require('path');

const replacements = [
  ['text-dark-300', 'text-zinc-400'],
  ['text-dark-400', 'text-zinc-500'],
  ['text-dark-500', 'text-zinc-600'],
  ['text-dark-600', 'text-zinc-700'],
  ['bg-dark-950', 'bg-black'],
  ['bg-dark-900/50', 'bg-black/50'],
  ['bg-dark-900', 'bg-black'],
  ['bg-dark-800/50', 'bg-zinc-900/50'],
  ['bg-dark-800', 'bg-zinc-900'],
  ['bg-dark-700', 'bg-zinc-800'],
  ['hover:bg-dark-800', 'hover:bg-zinc-900'],
  ['hover:bg-dark-700', 'hover:bg-zinc-800'],
  ['border-dark-800/50', 'border-zinc-800/50'],
  ['border-dark-800', 'border-zinc-800'],
  ['border-dark-700/50', 'border-zinc-800/50'],
  ['border-dark-700', 'border-zinc-800'],
  ['border-dark-600', 'border-zinc-700'],
  ['placeholder-dark-400', 'placeholder-zinc-600'],
  ['rounded-full', ''],
  ['rounded-2xl ', ''],
  ['rounded-xl ', ''],
  ['rounded-lg ', ''],
  ['rounded-md ', ''],
  ['backdrop-blur-xl', ''],
  ['backdrop-blur-md', ''],
  ['backdrop-blur-sm', ''],
  ['backdrop-blur-lg', ''],
  ['backdrop-blur ', ''],
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walkDir(filePath));
      }
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  }
  return results;
}

const srcDir = path.join(__dirname, '..', 'src');
const files = walkDir(srcDir);
let totalReplacements = 0;
let filesChanged = 0;

// Exceptions - don't remove rounded-full from these patterns (they're functional like ping animations)
const roundedFullExceptions = ['animate-ping', 'animate-pulse'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;
  
  for (const [from, to] of replacements) {
    if (from === 'rounded-full') {
      // Only remove rounded-full from Tailwind class strings, skip ping/pulse indicators
      // We'll be more conservative here - just replace it
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('rounded-full') && !lines[i].includes('animate-ping')) {
          const count = (lines[i].match(/rounded-full/g) || []).length;
          lines[i] = lines[i].replace(/rounded-full/g, '');
          totalReplacements += count;
        }
      }
      content = lines.join('\n');
    } else {
      while (content.includes(from)) {
        content = content.replace(from, to);
        totalReplacements++;
      }
    }
  }
  
  // Clean up double spaces from removals
  content = content.replace(/  +/g, ' ').replace(/ "/g, '"').replace(/" /g, '"');
  // Fix className=" class" patterns
  content = content.replace(/className=" /g, 'className="');
  content = content.replace(/ "/g, '"');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    filesChanged++;
    console.log(`Fixed: ${path.relative(srcDir, file)}`);
  }
}

console.log(`\nTotal: ${totalReplacements} replacements in ${filesChanged} files`);
