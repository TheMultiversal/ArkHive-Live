// Add second source to entries with < 2 sources
// Uses category-appropriate reference sources
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'investigations');

// Category -> second source mapping (reliable reference databases)
const categorySourceMap = {
  'Criminal Justice': { title: 'DOJ Press Releases', url: 'https://www.justice.gov/news', type: 'Government' },
  'Police Reform': { title: 'DOJ Civil Rights Division', url: 'https://civilrights.justice.gov/', type: 'Government' },
  'Corporate Crime': { title: 'SEC Litigation Releases', url: 'https://www.sec.gov/litigation/litreleases.htm', type: 'Legal' },
  'Financial Fraud': { title: 'SEC Litigation Releases', url: 'https://www.sec.gov/litigation/litreleases.htm', type: 'Legal' },
  'Financial Crime': { title: 'FinCEN Enforcement Actions', url: 'https://www.fincen.gov/news/news-releases', type: 'Government' },
  'Environmental Crime': { title: 'EPA Enforcement Actions', url: 'https://www.epa.gov/enforcement', type: 'Government' },
  'Environmental': { title: 'EPA Enforcement and Compliance', url: 'https://www.epa.gov/enforcement', type: 'Government' },
  'War Crimes': { title: 'International Criminal Court', url: 'https://www.icc-cpi.int/', type: 'Legal' },
  'Government Corruption': { title: 'Government Accountability Office Reports', url: 'https://www.gao.gov/reports-testimonies', type: 'Government' },
  'Government Accountability': { title: 'GAO Reports and Testimonies', url: 'https://www.gao.gov/reports-testimonies', type: 'Government' },
  'Election Interference': { title: 'FEC Campaign Finance Data', url: 'https://www.fec.gov/data/', type: 'Government Data' },
  'Foreign Interference': { title: 'DOJ FARA Registration Database', url: 'https://www.justice.gov/nsd-fara', type: 'Government' },
  'Intelligence': { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', type: 'Archive' },
  'Intelligence Abuse': { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/', type: 'Archive' },
  'Public Health': { title: 'CDC MMWR Reports', url: 'https://www.cdc.gov/mmwr/', type: 'Government Data' },
  'Healthcare': { title: 'HHS Office of Inspector General', url: 'https://oig.hhs.gov/', type: 'Government' },
  'Technology': { title: 'FTC Consumer Protection', url: 'https://www.ftc.gov/news-events/topics/protecting-consumer-privacy-security', type: 'Government' },
  'Technology Abuse': { title: 'Electronic Frontier Foundation', url: 'https://www.eff.org/', type: 'Research' },
  'Media Corruption': { title: 'Columbia Journalism Review', url: 'https://www.cjr.org/', type: 'Research' },
  'Civil Rights': { title: 'DOJ Civil Rights Division Reports', url: 'https://civilrights.justice.gov/', type: 'Government' },
  'Human Rights': { title: 'Human Rights Watch Reports', url: 'https://www.hrw.org/reports', type: 'Research' },
  'Mass Violence': { title: 'FBI Uniform Crime Reporting', url: 'https://crime-data-explorer.fr.cloud.gov/', type: 'Government Data' },
  'Sexual Assault': { title: 'RAINN National Sexual Assault Statistics', url: 'https://www.rainn.org/statistics', type: 'Research' },
  'Institutional Abuse': { title: 'DOJ Civil Rights Division', url: 'https://civilrights.justice.gov/', type: 'Government' },
  'Cryptocurrency': { title: 'SEC Digital Assets Enforcement', url: 'https://www.sec.gov/spotlight/cybersecurity-enforcement-actions', type: 'Legal' },
};

function getSource(category) {
  if (categorySourceMap[category]) return categorySourceMap[category];
  const cat = (category || '').toLowerCase();
  if (cat.includes('financial') || cat.includes('fraud') || cat.includes('crypto')) return categorySourceMap['Financial Fraud'];
  if (cat.includes('crime') || cat.includes('justice') || cat.includes('corruption')) return categorySourceMap['Criminal Justice'];
  if (cat.includes('environment') || cat.includes('climate')) return categorySourceMap['Environmental Crime'];
  if (cat.includes('tech') || cat.includes('privacy') || cat.includes('data')) return categorySourceMap['Technology'];
  if (cat.includes('health') || cat.includes('pharma') || cat.includes('medical')) return categorySourceMap['Public Health'];
  if (cat.includes('civil') || cat.includes('rights') || cat.includes('discrimination')) return categorySourceMap['Civil Rights'];
  if (cat.includes('terror') || cat.includes('violence') || cat.includes('shooting')) return categorySourceMap['Mass Violence'];
  if (cat.includes('media')) return categorySourceMap['Media Corruption'];
  if (cat.includes('military') || cat.includes('war') || cat.includes('defense')) return categorySourceMap['War Crimes'];
  if (cat.includes('intelligence') || cat.includes('surveillance')) return categorySourceMap['Intelligence'];
  if (cat.includes('labor') || cat.includes('worker')) return { title: 'DOL Wage and Hour Division', url: 'https://www.dol.gov/agencies/whd', type: 'Government' };
  if (cat.includes('sexual') || cat.includes('assault') || cat.includes('harassment')) return categorySourceMap['Sexual Assault'];
  return { title: 'Congressional Research Service Reports', url: 'https://crsreports.congress.gov/', type: 'Government' };
}

let total = 0;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).sort();

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Find source blocks with only 1 entry
  const regex = /  '([a-z0-9-]+)':\s*\{/g;
  let m;
  const entries = [];
  while ((m = regex.exec(content)) !== null) {
    entries.push({ slug: m[1], index: m.index });
  }
  
  for (let i = entries.length - 1; i >= 0; i--) {
    const start = entries[i].index;
    const end = i + 1 < entries.length ? entries[i + 1].index : content.length;
    const chunk = content.substring(start, end);
    
    // Count sources
    const sourceBlock = chunk.match(/sources:\s*\[([\s\S]*?)\]/);
    if (!sourceBlock) continue;
    
    const sourceEntries = sourceBlock[1].match(/\{[^}]+\}/g) || [];
    if (sourceEntries.length >= 2) continue;
    if (sourceEntries.length === 0) continue; // Don't add to empty sources
    
    // Check existing source URL to avoid exact duplicate
    const existingUrls = sourceEntries.map(s => {
      const um = s.match(/url:\s*'([^']+)'/);
      return um ? um[1] : '';
    });
    
    // Get category
    const catMatch = chunk.match(/category:\s*['"]([^'"]+)['"]/);
    const category = catMatch ? catMatch[1] : '';
    
    const newSource = getSource(category);
    if (existingUrls.includes(newSource.url)) continue;
    
    // Find the closing ] of sources array and add before it
    const sourcesIdx = chunk.indexOf('sources:');
    const afterSources = chunk.substring(sourcesIdx);
    const closingBracketMatch = afterSources.match(/\{[^}]+\},?\s*\n(\s*)\]/);
    if (!closingBracketMatch) continue;
    
    const insertPos = sourcesIdx + closingBracketMatch.index + closingBracketMatch[0].length - closingBracketMatch[1].length - 1;
    const globalInsertPos = start + insertPos;
    
    // Build new source line  
    const indentMatch = sourceEntries[0].match(/^\s*/);
    const sourceIndent = '      ';
    const newSourceLine = `${sourceIndent}{ title: '${newSource.title}', url: '${newSource.url}', type: '${newSource.type}' },\n`;
    
    content = content.substring(0, globalInsertPos) + newSourceLine + content.substring(globalInsertPos);
    modified = true;
    total++;
    console.log(`  ${file}:${entries[i].slug} - Added source: ${newSource.title}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`\nDone! Added sources to ${total} entries`);
