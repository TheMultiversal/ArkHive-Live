/**
 * Bulk color replacement script - converts all non-blood colors to blood-red/white/zinc palette.
 * 
 * Mapping strategy:
 * - red-* → blood-* (normalize to custom palette)
 * - green/emerald (success/online/verified) → blood-* for positive indicators
 * - yellow/amber (warning/caution) → zinc-* (neutral tone) 
 * - orange (high) → blood-700/800 range
 * - blue/sky/cyan/teal/indigo → blood-* or zinc-*
 * - purple/violet/fuchsia/pink → blood-*
 * - rose → blood-*
 * - lime → blood-*
 */

const fs = require('fs');
const path = require('path');
const glob = require('child_process').execSync;

// Get all TSX and CSS files in src/
const files = require('child_process')
  .execSync('dir /s /b src\\*.tsx src\\*.css', { encoding: 'utf8', cwd: process.cwd() })
  .trim()
  .split('\r\n')
  .filter(Boolean);

console.log(`Found ${files.length} files to process`);

// Comprehensive color replacement map
// Format: [regex, replacement]
const replacements = [
  // === GREEN / EMERALD → blood (for positive states) ===
  // bright greens → blood-500
  [/\bgreen-400\b/g, 'blood-400'],
  [/\bgreen-500\b/g, 'blood-500'],
  [/\bgreen-600\b/g, 'blood-600'],
  [/\bgreen-700\b/g, 'blood-700'],
  [/\bgreen-800\b/g, 'blood-800'],
  [/\bgreen-900\b/g, 'blood-900'],
  [/\bgreen-950\b/g, 'blood-950'],
  [/\bgreen-300\b/g, 'blood-400'],
  [/\bgreen-200\b/g, 'blood-300'],
  [/\bgreen-100\b/g, 'blood-200'],
  [/\bgreen-50\b/g, 'blood-100'],
  
  [/\bemerald-400\b/g, 'blood-400'],
  [/\bemerald-500\b/g, 'blood-500'],
  [/\bemerald-600\b/g, 'blood-600'],
  [/\bemerald-700\b/g, 'blood-700'],
  [/\bemerald-800\b/g, 'blood-800'],
  [/\bemerald-900\b/g, 'blood-900'],
  [/\bemerald-300\b/g, 'blood-400'],

  // === YELLOW / AMBER → zinc (muted neutral) ===
  [/\byellow-200\b/g, 'zinc-300'],
  [/\byellow-300\b/g, 'zinc-400'],
  [/\byellow-400\b/g, 'zinc-300'],
  [/\byellow-500\b/g, 'zinc-400'],
  [/\byellow-600\b/g, 'zinc-500'],
  [/\byellow-700\b/g, 'zinc-600'],
  [/\byellow-800\b/g, 'zinc-700'],
  [/\byellow-900\b/g, 'zinc-800'],
  [/\byellow-950\b/g, 'zinc-900'],

  [/\bamber-400\b/g, 'zinc-300'],
  [/\bamber-500\b/g, 'zinc-400'],
  [/\bamber-600\b/g, 'zinc-500'],
  [/\bamber-700\b/g, 'zinc-600'],
  [/\bamber-800\b/g, 'zinc-700'],
  [/\bamber-900\b/g, 'zinc-800'],

  // === ORANGE → blood-700 range ===
  [/\borange-400\b/g, 'blood-600'],
  [/\borange-500\b/g, 'blood-700'],
  [/\borange-600\b/g, 'blood-800'],
  [/\borange-700\b/g, 'blood-900'],
  [/\borange-800\b/g, 'blood-900'],
  [/\borange-900\b/g, 'blood-950'],
  [/\borange-300\b/g, 'blood-500'],

  // === BLUE / SKY / CYAN / TEAL / INDIGO → blood or zinc ===
  [/\bblue-400\b/g, 'blood-400'],
  [/\bblue-500\b/g, 'blood-500'],
  [/\bblue-600\b/g, 'blood-600'],
  [/\bblue-700\b/g, 'blood-700'],
  [/\bblue-800\b/g, 'blood-800'],
  [/\bblue-900\b/g, 'blood-900'],
  [/\bblue-950\b/g, 'blood-950'],
  [/\bblue-300\b/g, 'blood-400'],
  [/\bblue-200\b/g, 'blood-300'],

  [/\bsky-400\b/g, 'blood-400'],
  [/\bsky-500\b/g, 'blood-500'],
  [/\bsky-600\b/g, 'blood-600'],
  [/\bsky-300\b/g, 'blood-400'],

  [/\bcyan-400\b/g, 'blood-400'],
  [/\bcyan-500\b/g, 'blood-500'],
  [/\bcyan-600\b/g, 'blood-600'],
  [/\bcyan-300\b/g, 'blood-400'],

  [/\bteal-400\b/g, 'blood-400'],
  [/\bteal-500\b/g, 'blood-500'],
  [/\bteal-600\b/g, 'blood-600'],
  [/\bteal-300\b/g, 'blood-400'],

  [/\bindigo-400\b/g, 'blood-400'],
  [/\bindigo-500\b/g, 'blood-500'],
  [/\bindigo-600\b/g, 'blood-600'],
  [/\bindigo-700\b/g, 'blood-700'],
  [/\bindigo-800\b/g, 'blood-800'],
  [/\bindigo-900\b/g, 'blood-900'],
  [/\bindigo-300\b/g, 'blood-400'],

  // === PURPLE / VIOLET → blood ===
  [/\bpurple-400\b/g, 'blood-400'],
  [/\bpurple-500\b/g, 'blood-500'],
  [/\bpurple-600\b/g, 'blood-600'],
  [/\bpurple-700\b/g, 'blood-700'],
  [/\bpurple-800\b/g, 'blood-800'],
  [/\bpurple-900\b/g, 'blood-900'],
  [/\bpurple-300\b/g, 'blood-400'],

  [/\bviolet-400\b/g, 'blood-400'],
  [/\bviolet-500\b/g, 'blood-500'],
  [/\bviolet-600\b/g, 'blood-600'],
  [/\bviolet-700\b/g, 'blood-700'],
  [/\bviolet-800\b/g, 'blood-800'],
  [/\bviolet-300\b/g, 'blood-400'],

  // === ROSE → blood ===
  [/\brose-400\b/g, 'blood-400'],
  [/\brose-500\b/g, 'blood-500'],
  [/\brose-600\b/g, 'blood-600'],
  [/\brose-700\b/g, 'blood-700'],
  [/\brose-800\b/g, 'blood-800'],
  [/\brose-900\b/g, 'blood-900'],
  [/\brose-300\b/g, 'blood-400'],

  // === FUCHSIA / PINK → blood ===
  [/\bfuchsia-400\b/g, 'blood-400'],
  [/\bfuchsia-500\b/g, 'blood-500'],
  [/\bfuchsia-600\b/g, 'blood-600'],
  [/\bfuchsia-300\b/g, 'blood-400'],

  [/\bpink-400\b/g, 'blood-400'],
  [/\bpink-500\b/g, 'blood-500'],
  [/\bpink-600\b/g, 'blood-600'],
  [/\bpink-300\b/g, 'blood-400'],

  // === LIME → blood ===
  [/\blime-400\b/g, 'blood-400'],
  [/\blime-500\b/g, 'blood-500'],
  [/\blime-600\b/g, 'blood-600'],

  // === RED → blood (normalize to custom palette) ===
  [/\bred-400\b/g, 'blood-400'],
  [/\bred-500\b/g, 'blood-500'],
  [/\bred-600\b/g, 'blood-600'],
  [/\bred-700\b/g, 'blood-700'],
  [/\bred-800\b/g, 'blood-800'],
  [/\bred-900\b/g, 'blood-900'],
  [/\bred-950\b/g, 'blood-950'],
  [/\bred-300\b/g, 'blood-400'],
  [/\bred-200\b/g, 'blood-300'],
  [/\bred-100\b/g, 'blood-200'],
  [/\bred-50\b/g, 'blood-100'],

  // === HEX COLORS that are non-red ===
  // Common blue hex
  [/#3b82f6/g, '#d64545'],  // blue-500 → blood-500
  [/#2563eb/g, '#c23030'],  // blue-600 → blood-600
  [/#1d4ed8/g, '#a82828'],  // blue-700 → blood-700

  // Common green hex 
  [/#22c55e/g, '#d64545'],  // green-500 → blood-500
  [/#16a34a/g, '#c23030'],  // green-600 → blood-600

  // Common yellow/amber hex
  [/#eab308/g, '#71717a'],  // yellow-500 → zinc-500
  [/#f59e0b/g, '#71717a'],  // amber-500 → zinc-500

  // Common orange hex
  [/#f97316/g, '#a82828'],  // orange-500 → blood-700
];

let totalChanges = 0;
let filesChanged = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  let fileChanges = 0;

  replacements.forEach(([regex, replacement]) => {
    const matches = content.match(regex);
    if (matches) {
      fileChanges += matches.length;
      content = content.replace(regex, replacement);
    }
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    const relPath = path.relative(process.cwd(), file);
    console.log(`  ${fileChanges} changes in ${relPath}`);
    totalChanges += fileChanges;
    filesChanged++;
  }
});

console.log(`\nDone: ${totalChanges} replacements across ${filesChanged} files`);
