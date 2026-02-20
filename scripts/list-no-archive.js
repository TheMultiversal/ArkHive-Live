const fs = require('fs').promises;
const path = require('path');
(async ()=>{
  const p = path.join(process.cwd(),'scripts','404-replacements.json');
  const raw = await fs.readFile(p,'utf8');
  const obj = JSON.parse(raw);
  const map = new Map();
  for (const r of obj.replacements) {
    if (!r.oldUrl) continue;
    if (r.newUrl) continue;
    const u = r.oldUrl;
    if (!map.has(u)) map.set(u, []);
    map.get(u).push({file:r.file,line:r.line});
  }
  const arr = Array.from(map.entries()).map(([url,occ])=>({url,count:occ.length,occ}));
  arr.sort((a,b)=>b.count-a.count);
  console.log(JSON.stringify({ total: arr.length, items: arr.slice(0,200) }, null, 2));
})();