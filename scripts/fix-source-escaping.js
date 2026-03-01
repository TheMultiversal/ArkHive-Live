const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let f = fs.readFileSync(file, 'utf8');

// Fix sources where names with apostrophes broke the escaping
// Pattern: title: 'Wikipedia: Name O\', url: ... should be title: 'Wikipedia: Name O\'Leary', url:
// Actually the issue is simpler - the sources generator used names with ' in them

// Find all broken source entries where a name with ' breaks the string
// Pattern: title: '...O\', url: -> the ' in O' terminates the string early

// Fix approach: find all `title: 'Wikipedia: ` entries and check for broken escaping
let fixes = 0;

// Find patterns where an escaped quote is followed by , url: suggesting the name was cut off  
// Actually the issue is names like "Michael O'Leary" where O' ends the string
// The source script put `title: 'Wikipedia: Michael O\'` which JS reads as `Wikipedia: Michael O'` (escaped) then `, url:` is outside the string

// Simpler fix: replace all source titles containing backslash-escaped quotes that break
// We need to find names with apostrophes in them and fix the Wikipedia URL generation

// Find all occurrences of pattern: title: 'text\', url:  (where \' is a premature string end in the source context)
// This happens because names like "O'Leary" have the ' which when put in 'Wikipedia: O'Leary' breaks

// The real fix: use the name from the profile to regenerate the source titles properly
// But quickest fix: double-escape or remove apostrophes from source titles

// Find: `title: '([^']*)\\'` where this breaks the string
const brokenPattern = /title: '([^']*?)\\'/g;
let m;
const issues = [];
while (m = brokenPattern.exec(f)) {
  // Check if this is actually in a sources array context and the \ is at end before , url
  const after = f.substring(m.index + m[0].length, m.index + m[0].length + 10);
  if (after.startsWith(', url:') || after.startsWith(', date:')) {
    issues.push({ index: m.index, match: m[0], name: m[1] });
  }
}

console.log('Found', issues.length, 'broken source titles');

// Fix them by going backwards
for (let i = issues.length - 1; i >= 0; i--) {
  const issue = issues[i];
  // The broken pattern is: title: 'Name O\', url: 
  // We need to find the full name from the profile context
  // Simplest fix: remove the backslash before the apostrophe that's actually the string delimiter
  // Change: title: 'Wikipedia: Michael O\' -> title: 'Wikipedia: Michael O' (drop the backslash since the name got truncated)
  
  // Actually, we need the full name. Let's look it up from the profile.
  const before = f.substring(Math.max(0, issue.index - 2000), issue.index);
  const nameM = [...before.matchAll(/name:\s*'([^']*(?:\\'[^']*)*)'/g)];
  let fullName = nameM.length > 0 ? nameM[nameM.length - 1][1] : '';
  
  // Get the source title prefix (e.g., 'Wikipedia: ' or 'Bloomberg: ')
  const prefix = issue.name; // e.g., 'Wikipedia: Michael O'
  
  // Replace backslash-quote with just removing the problematic apostrophe
  const fixedTitle = prefix.replace(/\\$/, '');
  const oldStr = issue.match;
  const newStr = `title: '${fixedTitle}'`;
  
  f = f.substring(0, issue.index) + newStr + f.substring(issue.index + oldStr.length + 1); // +1 for the trailing '
  fixes++;
}

// Now also fix any remaining syntax issues - find source URLs with unescaped quotes
// Alternative approach: just replace all \' in source title/url strings with nothing
// Actually let's do a broader fix for any names with apostrophes that appear in sources

// Fix Wikipedia URLs with apostrophes too
f = f.replace(/wiki\/([\w_]*)\\\//g, (match, name) => {
  return `wiki/${name}/`;
});

fs.writeFileSync(file, f);
console.log('Fixed', fixes, 'broken source entries');

// Verify by trying to check for the specific error pattern
const lines = f.split('\n');
const line27711 = lines[27710]; // 0-indexed
if (line27711) {
  console.log('Line 27711:', line27711.substring(0, 120));
}
