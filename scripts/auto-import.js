/*
Generic automatic importer for ArkHive data.
Place JSON files under "data/" with names:
  investigations.json
  entities-individuals.json
  entities-agencies.json
  entities-corporations.json
  entities-organizations.json
  documents.json
  timeline.json
  notifications.json
  sources.json

Each file should contain an array of objects matching the shape used
in the corresponding page.tsx. The importer will merge new entries,
avoid duplicates, and update counts/indices accordingly.

Running: node scripts/auto-import.js
*/

const fs = require('fs');
const path = require('path');

function readJson(name) {
  const file = path.join('data', name);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file,'utf8'));
  } catch (e) {
    console.error('Failed to parse', file, e);
    return null;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// (helper removed; functionality implemented inline where needed)

// generic processor

// investigations.json -> add to catch-all investigations
function importInvestigations() {
  const data = readJson('investigations.json');
  if (!data) return;
  const page = 'src/app/investigations/[slug]/page.tsx';
  let content = fs.readFileSync(page,'utf8');
  let added = 0;

  // locate investigationDatabase object boundaries
  const startIdx = content.indexOf('const investigationDatabase');
  if (startIdx === -1) {
    console.error('investigationDatabase not found');
    return;
  }
  const braceIdx = content.indexOf('{', startIdx);
  if (braceIdx === -1) return;
  let depth = 0;
  let endIdx = -1;
  // improved parser: ignore braces inside strings
  let inSingle=false, inDouble=false, inBacktick=false, esc=false;
  for (let i = braceIdx; i < content.length; i++) {
    const ch = content[i];
    if (esc) {
      esc = false;
    } else if (ch === '\\') {
      esc = true;
    } else if (inSingle) {
      if (ch === "'") inSingle = false;
    } else if (inDouble) {
      if (ch === '"') inDouble = false;
    } else if (inBacktick) {
      if (ch === '`') inBacktick = false;
    } else {
      if (ch === "'") inSingle = true;
      else if (ch === '"') inDouble = true;
      else if (ch === '`') inBacktick = true;
      else if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) { endIdx = i; break; }
      }
    }
  }
  if (endIdx === -1) return;

  // extract objectSubstr for duplicate checking
  const objectSubstr = content.substring(braceIdx, endIdx);

  const placeholderIdx = content.indexOf('// Placeholder data');
  for (const inv of data) {
    const slug = inv.slug;
    if (!slug) continue;
    const re = new RegExp("'" + slug + "'\\s*:");
    const exists = re.test(objectSubstr);
    console.log('DEBUG check slug', slug, 'exists?', exists);
    if (exists) continue;
    const txt = JSON.stringify(inv, null, 2)
      .replace(/\"([^\"']+)\":/g, '$1:')
      .replace(/\"/g, "'");
    const insertion = `  '${slug}': ${txt},\n`;
    console.log('DEBUG inserting', slug, 'len', insertion.length);
    content = content.slice(0, endIdx) + insertion + content.slice(endIdx);
    // update endIdx to after inserted chunk
    endIdx += insertion.length;
    added++;
  }

  // reposition any newly added slugs to just before placeholder comment
  if (added && placeholderIdx !== -1) {
    for (const inv of data) {
      const slug = inv.slug;
      if (!slug) continue;
      const pattern = `  '${slug}':`;
      const firstIdx = content.indexOf(pattern);
      if (firstIdx !== -1 && firstIdx < placeholderIdx) {
        // extract entry text by finding next closing brace and comma
        const rest = content.slice(firstIdx);
        const closing = rest.indexOf('},');
        if (closing !== -1) {
          const entryText = rest.slice(0, closing+2);
          // remove from original location
          content = content.slice(0, firstIdx) + content.slice(firstIdx+entryText.length);
          // insert before placeholder
          const insertPos = content.indexOf('// Placeholder data');
          content = content.slice(0, insertPos) + entryText + '\n' + content.slice(insertPos);
        }
      }
    }
  }

  if (added) fs.writeFileSync(page, content);
  console.log(`importInvestigations: added ${added}`);
}

// Entities
function importEntities(type) {
  const file = `entities-${type}.json`;
  const data = readJson(file);
  if (!data) return;
  const catchall = `src/app/entities/${type}/[slug]/page.tsx`;
  if (!fs.existsSync(catchall)) return;
  let content = fs.readFileSync(catchall, 'utf8');
  let added = 0;
  for (const ent of data) {
    const slug = ent.slug;
    if (!slug) continue;
    const re = new RegExp("'" + slug + "'\\s*:");
    if (re.test(content)) continue;
    const txt = JSON.stringify(ent, null, 2)
      .replace(/"([^"']+)":/g, '$1:')
      .replace(/"/g, "'");
    content = content.replace(/\};\s*$/,
      `  '${slug}': ${txt},\n};`);

    added++;
  }
  if (added) fs.writeFileSync(catchall, content);
  console.log(`importEntities(${type}): added ${added}`);
}

// documents
function importDocuments() {
  const data = readJson('documents.json');
  if (!data) return;
  const page = 'src/app/documents/page.tsx';
  let content = fs.readFileSync(page,'utf8');
  let maxId = 0;
  const idRe = /id:\s*'([0-9]+)'/g;
  let m;
  while ((m = idRe.exec(content)) !== null) {
    maxId = Math.max(maxId, parseInt(m[1]));
  }
  let added=0;
  for (const doc of data) {
    if (!doc.id) doc.id = (++maxId).toString();
    const re = new RegExp("id:\s*'"+doc.id+"'");
    if (re.test(content)) continue;
    const txt = JSON.stringify(doc, null, 2)
      .replace(/"([^"']+)":/g, '$1:')
      .replace(/"/g, "'");
    content = content.replace(/]\);$/,'  '+txt+',\n];');
    added++;
  }
  if (added) fs.writeFileSync(page, content);
  console.log(`importDocuments: added ${added}`);
}

// timeline
function importTimeline() {
  const data = readJson('timeline.json');
  if (!data) return;
  const page = 'src/app/timeline/page.tsx';
  let content = fs.readFileSync(page,'utf8');
  let existing = new Set();
  const slugRe = /slug:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = slugRe.exec(content))!==null) existing.add(m[1]);
  let added=0;
  for (const e of data) {
    if (!e.slug || existing.has(e.slug)) continue;
    const txt = JSON.stringify(e,null,2).replace(/"([^"']+)":/g,'$1:').replace(/"/g,"'");
    // append before ];
    content = content.replace(/\n\];$/,'\n  '+txt+',\n];');
    added++;
  }
  if (added) fs.writeFileSync(page, content);
  console.log(`importTimeline: added ${added}`);
}

// notifications
function importNotifications() {
  const data = readJson('notifications.json');
  if (!data) return;
  const page = 'src/app/notifications/page.tsx';
  let content = fs.readFileSync(page,'utf8');
  let maxId = 0;
  const idRe = /id:\s*'notif_(\d+)'/g;
  let m;
  while ((m = idRe.exec(content))!==null) maxId = Math.max(maxId, parseInt(m[1]));
  let added=0;
  for (const n of data) {
    maxId++;
    n.id = 'notif_'+maxId;
    const txt = JSON.stringify(n,null,2).replace(/"([^"']+)":/g,'$1:').replace(/"/g,"'");
    content = content.replace(/\];/, txt+',\n];');
    added++;
  }
  if (added) fs.writeFileSync(page, content);
  console.log(`importNotifications: added ${added}`);
}

// sources
function importSources() {
  const data = readJson('sources.json');
  if (!data) return;
  const page = 'src/app/sources/page.tsx';
  let content = fs.readFileSync(page,'utf8');
  let maxId = 0;
  const idRe = /id:\s*'([0-9]+)'/g;
  let m;
  while ((m = idRe.exec(content))!==null) maxId = Math.max(maxId, parseInt(m[1]));
  let added=0;
  for (const s of data) {
    maxId++;
    s.id = String(maxId);
    const txt = JSON.stringify(s,null,2).replace(/"([^"']+)":/g,'$1:').replace(/"/g,"'");
    content = content.replace(/\];/, txt+',\n];');
    added++;
  }
  if (added) fs.writeFileSync(page, content);
  console.log(`importSources: added ${added}`);
}

// run all
importInvestigations();
importEntities('individuals');
importEntities('agencies');
importEntities('corporations');
importEntities('organizations');
importDocuments();
importTimeline();
importNotifications();
importSources();

console.log('Auto-import complete');
