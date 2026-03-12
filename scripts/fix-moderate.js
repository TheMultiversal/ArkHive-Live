const fs = require('fs');
['g','j','l','n'].forEach(letter => {
  const f = 'src/data/individuals/' + letter + '.ts';
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/riskLevel:\s*'moderate'/g, "riskLevel: 'medium'");
  fs.writeFileSync(f, content, 'utf8');
  console.log(letter + '.ts: fixed');
});
