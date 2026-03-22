const fs=require('fs');
const lines = fs.readFileSync('src/data/investigations/a.ts','utf8').split('\n');
for(let i=0;i<lines.length;i++){
  if(!lines[i].trim().startsWith('timeline: [')) continue;
  let j=i+1, entries=[], endJ=-1;
  while(j<lines.length){
    if(lines[j].trim().startsWith('],')){ endJ=j; break; }
    if(lines[j].trim().startsWith('{ date:')) entries.push(lines[j]);
    j++;
  }
  const hasAuto = entries.some(l=>l.includes('investigation begins')||l.includes('investigation remains'));
  if(entries.length<4 && hasAuto){
    let contentParas=[];
    for(let k=i-1;k>=Math.max(0,i-100);k--){
      if(lines[k].trim().startsWith('content: [')){
        for(let m=k+1;m<i;m++){
          if(lines[m].trim()==='],') break;
          if(lines[m].trim().startsWith("'")) contentParas.push(lines[m].trim());
        }
        break;
      }
    }
    const allContent = contentParas.join(' ');
    const years = new Set();
    let m; const yr=/\b((?:19|20)\d{2})\b/g;
    while((m=yr.exec(allContent))) years.add(m[1]);
    console.log('L'+i+': entries='+entries.length+' contentParas='+contentParas.length+' years='+[...years].sort().join(','));
  }
}
