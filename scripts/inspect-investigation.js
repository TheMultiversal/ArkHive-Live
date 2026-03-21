const fs = require('fs');

const shardFiles = '1 2 9 a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
const categories = {};
const investigations = [];

for (const shard of shardFiles) {
  const filePath = `src/data/investigations/${shard}.ts`;
  if (!fs.existsSync(filePath)) continue;
  const data = fs.readFileSync(filePath, 'utf8');
  
  const entryRegex = /^\s*'([\w-]+)':\s*\{/gm;
  let match;
  while ((match = entryRegex.exec(data)) !== null) {
    const slug = match[1];
    const startIdx = match.index;
    
    const chunk = data.substring(startIdx, startIdx + 3000);
    const titleMatch = chunk.match(/title:\s*'([^']+)'/);
    const categoryMatch = chunk.match(/category:\s*'([^']+)'/);
    const severityMatch = chunk.match(/severity:\s*'([^']+)'/);
    const dateMatch = chunk.match(/\bdate:\s*'([^']+)'/);
    
    const affSection = chunk.match(/affiliations:\s*\[([\s\S]*?)\]/);
    const affNames = [];
    if (affSection) {
      const nameMatches = affSection[1].matchAll(/name:\s*'([^']+)'/g);
      for (const nm of nameMatches) affNames.push(nm[1]);
    }
    
    const title = titleMatch ? titleMatch[1] : slug;
    const category = categoryMatch ? categoryMatch[1] : 'Unknown';
    const severity = severityMatch ? severityMatch[1] : 'medium';
    const date = dateMatch ? dateMatch[1] : 'Unknown';
    
    categories[category] = (categories[category] || 0) + 1;
    investigations.push({ slug, title, category, severity, date, affiliations: affNames, shard });
  }
}

console.log('=== CATEGORIES (sorted by count) ===');
const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1]);
sorted.forEach(([cat, count]) => console.log(`${count.toString().padStart(4)} - ${cat}`));
console.log(`\nTotal unique categories: ${sorted.length}`);
console.log(`Total investigations parsed: ${investigations.length}`);

const samples = investigations.filter(i => i.affiliations.length > 0).slice(0, 5);
samples.forEach(s => {
  console.log(`\n${s.slug}:`);
  console.log(`  Title: ${s.title}`);
  console.log(`  Category: ${s.category}`);
  console.log(`  Severity: ${s.severity}`);
  console.log(`  Affiliations: ${s.affiliations.join(', ')}`);
});
