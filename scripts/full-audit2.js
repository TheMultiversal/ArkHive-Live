const fs = require('fs');
const path = require('path');
const validSlugs = { individuals: new Set(), agencies: new Set(), corporations: new Set(), organizations: new Set(), investigations: new Set() };
const indF = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
for (const m of indF.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)) validSlugs.individuals.add(m[1]);
const agF = fs.readFileSync('src/app/entities/agencies/[slug]/page.tsx', 'utf8');
for (const m of agF.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)) validSlugs.agencies.add(m[1]);
const coF = fs.readFileSync('src/app/entities/corporations/[slug]/page.tsx', 'utf8');
for (const m of coF.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)) validSlugs.corporations.add(m[1]);
const orF = fs.readFileSync('src/app/entities/organizations/[slug]/page.tsx', 'utf8');
for (const m of orF.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)) validSlugs.organizations.add(m[1]);
const invDir = 'src/app/investigations';
for (const d of fs.readdirSync(invDir)) { if (d !== '[slug]' && fs.statSync(path.join(invDir, d)).isDirectory()) validSlugs.investigations.add(d); }
const invSlugF = fs.readFileSync('src/app/investigations/[slug]/page.tsx', 'utf8');
for (const m of invSlugF.matchAll(/'([\w][\w-]*)'\s*:\s*\{/g)) validSlugs.investigations.add(m[1]);
console.log('Valid: Ind=' + validSlugs.individuals.size + ' Ag=' + validSlugs.agencies.size + ' Corp=' + validSlugs.corporations.size + ' Org=' + validSlugs.organizations.size + ' Inv=' + validSlugs.investigations.size);
function walk(dir) { let files = []; for (const f of fs.readdirSync(dir)) { const fp = path.join(dir, f); if (fs.statSync(fp).isDirectory()) { if (!['node_modules','.next','.next-old','.git','scripts'].includes(f)) files = files.concat(walk(fp)); } else if (f.endsWith('.tsx') || f.endsWith('.ts')) files.push(fp); } return files; }
const broken = []; const files = walk('src');
for (const file of files) { const content = fs.readFileSync(file, 'utf8'); let m; const hrefRe = /(?:href|to)[:=]\s*['"`]\/entities\/(individuals|agencies|corporations|organizations)\/([\w-]+)/g; while (m = hrefRe.exec(content)) { if (!validSlugs[m[1]].has(m[2])) broken.push({ file: file.replace(/\\/g, '/'), type: m[1], slug: m[2] }); } const invRe = /(?:href|to)[:=]\s*['"`]\/investigations\/([\w-]+)/g; while (m = invRe.exec(content)) { if (!validSlugs.investigations.has(m[1])) broken.push({ file: file.replace(/\\/g, '/'), type: 'investigation', slug: m[1] }); } }
console.log('Broken links: ' + broken.length);
const byType = {};
for (const b of broken) { byType[b.type] = byType[b.type] || []; byType[b.type].push(b); }
for (const [type, items] of Object.entries(byType)) { const u = [...new Set(items.map(i => i.slug))]; console.log(type + ' (' + u.length + ' unique missing):'); u.slice(0, 20).forEach(s => console.log('  ' + s)); if (u.length > 20) console.log('  ...and ' + (u.length - 20) + ' more'); }
