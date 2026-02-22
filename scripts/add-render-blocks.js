const fs = require('fs');
const path = require('path');

// Pages that need coverup rendering added (ALL 42)
const allPages = [
  'cambridge-analytica', 'climate-sabotage', 'covid-response', 'emoluments',
  'family-separation', 'lafayette-square', 'money-laundering', 'muslim-ban',
  'obstruction-of-justice', 'opioid-crisis', 'pardons-corruption', 'puerto-rico',
  'saudi-arms-deal', 'saudi-connections', 'sexual-assault', 'tax-evasion',
  'trump-foundation', 'trump-university', 'ukraine-extortion', 'voter-suppression',
  'build-the-wall-fraud', 'deutsche-bank', 'dominion-defamation', 'epstein-network',
  'fake-electors', 'georgia-rico', 'hush-money', 'inaugural-committee',
  'january-6-insurrection', 'mar-a-lago-documents', 'oath-keepers-sedition',
  'proud-boys-sedition', 'russian-interference', 'trump-org-fraud',
  'charlottesville', 'cointelpro', 'operation-mockingbird',
  'iran-contra', 'police-brutality', 'tuskegee-experiment', 'war-on-drugs', 'watergate'
];

const COVERUP_JSX = `
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>`;

const CHARGES_OBJECT_JSX = `
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
              <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
            </motion.div>`;

const LEGAL_OUTCOMES_JSX = `
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
            </motion.div>`;

const basePath = path.join(__dirname, '..', 'src', 'app', 'investigations');

let totalCoverup = 0;
let totalCharges = 0;
let totalLegal = 0;
let errors = [];

for (const page of allPages) {
  const filePath = path.join(basePath, page, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    errors.push(`${page}: file not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if imports need updating
  const needsShieldAlert = content.includes('coverup') && !content.includes('ShieldAlert');
  const needsScale = (content.includes('legalOutcomes') || content.includes('charges')) && !content.includes('Scale');
  
  if (needsShieldAlert) {
    // Add ShieldAlert to the lucide-react import
    const importMatch = content.match(/(import\s*\{[^}]*)(}\s*from\s*'lucide-react')/);
    if (importMatch) {
      const existingImports = importMatch[1];
      if (!existingImports.includes('ShieldAlert')) {
        content = content.replace(importMatch[0], existingImports + ', ShieldAlert' + importMatch[2]);
        modified = true;
      }
    }
  }
  
  if (needsScale) {
    const importMatch = content.match(/(import\s*\{[^}]*)(}\s*from\s*'lucide-react')/);
    if (importMatch) {
      const existingImports = importMatch[1];
      if (!existingImports.includes('Scale')) {
        content = content.replace(
          /(import\s*\{[^}]*)(}\s*from\s*'lucide-react')/,
          '$1, Scale$2'
        );
        modified = true;
      }
    }
  }
  
  // 1. Add COVERUP rendering (before the grid div)
  const hasCoverupData = /coverup:\s*\[/.test(content);
  const hasCoverupRender = /coverup\.map/.test(content);
  
  if (hasCoverupData && !hasCoverupRender) {
    // Find the grid div and insert coverup before it
    const gridPattern = /(\s*<div className="grid grid-cols-1)/;
    const gridMatch = content.match(gridPattern);
    if (gridMatch) {
      content = content.replace(gridPattern, COVERUP_JSX + '\n$1');
      modified = true;
      totalCoverup++;
    } else {
      errors.push(`${page}: could not find grid div for coverup insertion`);
    }
  }
  
  // 2. Add CHARGES rendering (in the left column, after Key Figures)
  // Only for pages where charges are objects with {statute, description, count}
  const hasChargesObjectData = /charges:\s*\[\s*\{[\s\S]*?statute:/.test(content);
  const hasChargesObjectRender = /charge\.statute/.test(content);
  // Also check if charges are rendered as simple strings
  const hasChargesStringRender = /charges\.map/.test(content) && !hasChargesObjectRender;
  
  if (hasChargesObjectData && !hasChargesObjectRender) {
    // If existing string-based charges render exists, replace it
    if (hasChargesStringRender) {
      // Find the existing charges rendering section and replace with object-based one
      // Look for patterns like: charges.map((charge, idx) => (<div key={idx} className="... <p ...>{charge}</p>
      const chargesStringRender = content.match(/<motion\.div[^>]*>[^]*?charges\.map[^]*?<\/motion\.div>/);
      if (chargesStringRender) {
        // This is complex - skip for now, will handle differently
      }
    }
    
    // Find the Key Figures section end and insert charges after it
    // The Key Figures section ends with </motion.div> followed by either </div> or another <motion.div>
    // Look for the lg:col-span-2 div and find suitable insertion point
    const colSpanIdx = content.indexOf('lg:col-span-2');
    if (colSpanIdx !== -1) {
      // Find the closing </div> of the left column's content area
      // We need to find the end of the Key Figures motion.div
      // Looking for </motion.div> after Key Figures within the col-span-2
      const afterColSpan = content.substring(colSpanIdx);
      
      // Find the LAST </motion.div> before the closing </div> of col-span-2
      // The col-span-2 contains motion.divs, and ends with </div>
      // Find closing of Key Figures section - look for the first </motion.div> after keyFigures
      const keyFiguresIdx = afterColSpan.indexOf('keyFigures');
      if (keyFiguresIdx !== -1) {
        const afterKeyFigures = afterColSpan.substring(keyFiguresIdx);
        const firstMotionClose = afterKeyFigures.indexOf('</motion.div>');
        if (firstMotionClose !== -1) {
          const insertionPoint = colSpanIdx + keyFiguresIdx + firstMotionClose + '</motion.div>'.length;
          // Check if charges rendering already exists right after
          const after = content.substring(insertionPoint, insertionPoint + 200);
          if (!after.includes('charge.statute') && !after.includes('Charges')) {
            content = content.substring(0, insertionPoint) + CHARGES_OBJECT_JSX + content.substring(insertionPoint);
            modified = true;
            totalCharges++;
          }
        }
      }
    }
  }
  
  // 3. Add LEGAL OUTCOMES rendering (in the sidebar, before Sources)
  const hasLegalData = /legalOutcomes:\s*\[/.test(content);
  const hasLegalRender = /legalOutcomes\.map/.test(content);
  
  if (hasLegalData && !hasLegalRender) {
    // Find the Sources section in the sidebar and insert before it
    // Look for the Sources heading/section
    const sourcesHeadingPatterns = [
      /([ \t]*<motion\.div[^>]*className="glass-card[^"]*"[^>]*>\s*\n?\s*<h3[^>]*>Sources<\/h3>)/,
      /([ \t]*<motion\.div[^>]*className="glass-card[^"]*"[^>]*>\s*<h3[^>]*>[^<]*Sources[^<]*<\/h3>)/,
      // Single line variant
      /([ \t]*<motion\.div[^>]*>\s*\n?\s*<h3[^>]*>[^<]*Sources)/,
    ];
    
    let inserted = false;
    for (const pattern of sourcesHeadingPatterns) {
      const match = content.match(pattern);
      if (match) {
        const idx = content.indexOf(match[0]);
        content = content.substring(0, idx) + LEGAL_OUTCOMES_JSX + '\n' + content.substring(idx);
        modified = true;
        totalLegal++;
        inserted = true;
        break;
      }
    }
    
    if (!inserted) {
      // Try a simpler pattern - find "Sources" text in JSX heading
      const sourcesIdx = content.indexOf('>Sources<');
      if (sourcesIdx !== -1) {
        // Walk backwards to find the start of this motion.div
        const beforeSources = content.substring(0, sourcesIdx);
        const lastMotionDiv = beforeSources.lastIndexOf('<motion.div');
        if (lastMotionDiv !== -1) {
          // Find the whitespace/newline before it
          let insertAt = lastMotionDiv;
          while (insertAt > 0 && content[insertAt - 1] === ' ') insertAt--;
          if (insertAt > 0 && content[insertAt - 1] === '\n') insertAt--;
          
          content = content.substring(0, insertAt) + '\n' + LEGAL_OUTCOMES_JSX + content.substring(insertAt);
          modified = true;
          totalLegal++;
          inserted = true;
        }
      }
    }
    
    if (!inserted) {
      errors.push(`${page}: could not find Sources section for legalOutcomes insertion`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${page}`);
  }
}

console.log(`\nSummary:`);
console.log(`  Coverup renderers added: ${totalCoverup}`);
console.log(`  Charges renderers added: ${totalCharges}`);
console.log(`  Legal Outcomes renderers added: ${totalLegal}`);
if (errors.length > 0) {
  console.log(`  Errors:`);
  errors.forEach(e => console.log(`    - ${e}`));
}
