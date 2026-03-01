const fs = require('fs');
const src = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');

const slugRegex = /^  '([\w-]+)':\s*\{/gm;
let match;
const thin = [];
const empty = [];
let total = 0;

while ((match = slugRegex.exec(src)) !== null) {
    const slug = match[1];
    const start = match.index;
    const chunk = src.substring(start, start + 15000);
    const nameMatch = chunk.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'UNKNOWN';
    const kaMatch = chunk.match(/knownAssociates:\s*\[([^\]]*)\]/);
    if (kaMatch) {
        const associates = kaMatch[1].trim();
        if (!associates) {
            empty.push({ slug, name });
        } else {
            const count = associates.split(',').filter(s => s.trim()).length;
            if (count <= 2) {
                thin.push({ slug, name, count });
            }
        }
    } else {
        empty.push({ slug, name: name + ' (NO KA FIELD)' });
    }
    total++;
}

// Also check for profiles with very short descriptions
const shortDesc = [];
const descRegex = /^  '([\w-]+)':\s*\{/gm;
let m2;
while ((m2 = descRegex.exec(src)) !== null) {
    const slug = m2[1];
    const start = m2.index;
    const chunk = src.substring(start, start + 15000);
    const descMatch = chunk.match(/description:\s*['"]([^'"]*)['"]/);
    if (descMatch && descMatch[1].length < 80) {
        shortDesc.push({ slug, desc: descMatch[1], len: descMatch[1].length });
    }
}

// Check for profiles with empty controversies
const noContro = [];
const cRegex = /^  '([\w-]+)':\s*\{/gm;
let m3;
while ((m3 = cRegex.exec(src)) !== null) {
    const slug = m3[1];
    const start = m3.index;
    const chunk = src.substring(start, start + 15000);
    const nameMatch = chunk.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'UNKNOWN';
    const ctMatch = chunk.match(/controversies:\s*\[([^\]]*)\]/);
    if (ctMatch && !ctMatch[1].trim()) {
        noContro.push({ slug, name });
    }
    if (!ctMatch) {
        noContro.push({ slug, name: name + ' (NO FIELD)' });
    }
}

console.log('Total profiles:', total);
console.log('Empty knownAssociates:', empty.length);
console.log('Thin (1-2 associates):', thin.length);
console.log('Short descriptions (<80 chars):', shortDesc.length);
console.log('No controversies:', noContro.length);

console.log('\n=== EMPTY knownAssociates ===');
empty.slice(0, 50).forEach(e => console.log('  ' + e.slug + ' | ' + e.name));
if (empty.length > 50) console.log('  ... and', empty.length - 50, 'more');

console.log('\n=== THIN (1-2 associates) ===');
thin.forEach(t => console.log('  ' + t.slug + ' | ' + t.name + ' | ' + t.count));

console.log('\n=== SHORT descriptions ===');
shortDesc.slice(0, 30).forEach(s => console.log('  ' + s.slug + ' | ' + s.len + ' chars'));
if (shortDesc.length > 30) console.log('  ... and', shortDesc.length - 30, 'more');

console.log('\n=== NO controversies ===');
noContro.slice(0, 30).forEach(c => console.log('  ' + c.slug + ' | ' + c.name));
if (noContro.length > 30) console.log('  ... and', noContro.length - 30, 'more');
