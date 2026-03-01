const fs = require('fs');
const src = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

// Find all profiles missing knownAssociates field entirely
const slugRegex = /^  '([\w-]+)':\s*\{/gm;
let match;
const noField = [];
const emptyArray = [];

while ((match = slugRegex.exec(src)) !== null) {
    const slug = match[1];
    const start = match.index;
    const chunk = src.substring(start, start + 15000);
    const nameMatch = chunk.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'UNKNOWN';
    
    // Check if knownAssociates field exists
    const hasKA = chunk.match(/knownAssociates:\s*\[/);
    if (!hasKA) {
        const descMatch = chunk.match(/description:\s*['"]([^'"]{0,100})/);
        const desc = descMatch ? descMatch[1] : '';
        noField.push({ slug, name, desc: desc.substring(0, 60) });
    } else {
        const kaMatch = chunk.match(/knownAssociates:\s*\[([^\]]*)\]/);
        if (kaMatch && !kaMatch[1].trim()) {
            emptyArray.push({ slug, name });
        }
    }
}

console.log('=== NO knownAssociates FIELD (' + noField.length + ') ===');
noField.forEach(p => console.log(p.slug));

console.log('\n=== EMPTY knownAssociates ARRAY (' + emptyArray.length + ') ===');
emptyArray.slice(0, 20).forEach(p => console.log(p.slug + ' | ' + p.name));
if (emptyArray.length > 20) console.log('... and', emptyArray.length - 20, 'more');
