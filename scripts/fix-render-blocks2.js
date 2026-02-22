const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', 'src', 'app', 'investigations');

// All pages that still need rendering fixes
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

let stats = { coverup: 0, charges: 0, legalOutcomes: 0, imports: 0, errors: [] };

for (const page of allPages) {
  const filePath = path.join(basePath, page, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Detect data variable name
  const dataVar = content.includes('investigationData.') ? 'investigationData' : 'investigation';
  
  // 1. Fix imports - ensure ShieldAlert and Scale are imported
  const hasCoverupData = /coverup:\s*\[/.test(content);
  const hasLegalData = /legalOutcomes:\s*\[/.test(content);
  const hasChargesObjData = /charges:\s*\[\s*\n?\s*\{[\s\S]*?statute:/.test(content);
  
  if (hasCoverupData && !content.includes('ShieldAlert')) {
    content = content.replace(/(import\s*\{[^}]*)(}\s*from\s*'lucide-react')/, '$1, ShieldAlert$2');
    changed = true;
    stats.imports++;
  }
  if ((hasLegalData || hasChargesObjData) && !content.includes('Scale')) {
    content = content.replace(/(import\s*\{[^}]*)(}\s*from\s*'lucide-react')/, '$1, Scale$2');
    changed = true;
    stats.imports++;
  }
  
  // Remove broken coverup insertions from first script (misplaced inside other sections)
  // The broken pattern is the coverup block inside a section that's not supposed to have it
  if (content.includes('coverup.map') && page === 'cambridge-analytica') {
    // Remove the badly inserted block
    const badBlock = /\n\s*<motion\.div initial=\{\{ opacity: 0, y: 20 \}\}[^>]*>\s*<h2[^>]*><ShieldAlert[^/]*\/>The Cover-Up<\/h2>\s*<div[^>]*>\{investigation\.coverup\.map[^}]*\}\)<\/div>\s*<\/motion\.div>/;
    if (badBlock.test(content)) {
      content = content.replace(badBlock, '');
      changed = true;
    }
  }
  if (content.includes('coverup.map') && page === 'emoluments') {
    const badBlock = /\n\s*<motion\.div initial=\{\{ opacity: 0, y: 20 \}\}[^>]*>\s*<h2[^>]*><ShieldAlert[^/]*\/>The Cover-Up<\/h2>\s*<div[^>]*>\{investigation\.coverup\.map[^}]*\}\)<\/div>\s*<\/motion\.div>/;
    if (badBlock.test(content)) {
      content = content.replace(badBlock, '');
      changed = true;
    }
  }
  
  // 2. Add missing COVERUP rendering
  const hasCoverupRender = /coverup\.map/.test(content);
  if (hasCoverupData && !hasCoverupRender) {
    // Strategy: Find the best insertion point
    // a) Before {/* Sources */} comment
    // b) Before grid div
    // c) Before Sources heading
    
    const coverupBlock = `
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{${dataVar}.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.section>
`;
    // For emoluments-style pages, use motion.div not motion.section
    const coverupBlockAlt = `
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{${dataVar}.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>
`;
    
    let inserted = false;
    
    // Try inserting before {/* Sources */}
    if (content.includes('{/* Sources */}')) {
      const block = content.includes('motion.section') ? coverupBlock : coverupBlockAlt;
      content = content.replace('{/* Sources */}', block + '        {/* Sources */}');
      inserted = true;
    }
    
    if (!inserted) {
      stats.errors.push(`${page}: still missing coverup render`);
    } else {
      changed = true;
      stats.coverup++;
    }
  }
  
  // 3. Add missing LEGAL OUTCOMES rendering
  const hasLegalRender = /legalOutcomes\.map/.test(content);
  if (hasLegalData && !hasLegalRender) {
    const legalBlock = `
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h2>
          <div className="space-y-3">{${dataVar}.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
        </motion.section>
`;
    const legalBlockAlt = `
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h2>
          <div className="space-y-3">{${dataVar}.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
        </motion.div>
`;
    
    let inserted = false;
    
    // Try inserting before {/* Sources */}
    if (content.includes('{/* Sources */}')) {
      const block = content.includes('motion.section') ? legalBlock : legalBlockAlt;
      content = content.replace('{/* Sources */}', block + '        {/* Sources */}');
      inserted = true;
    }
    
    // Try inserting before Sources heading in sidebar
    if (!inserted) {
      // Look for Sources in sidebar (motion.div with Sources text)
      const sourcesPatterns = [
        /([ \t]*<motion\.div[^>]*>\s*\n?\s*<h3[^>]*>[^<]*Sources)/,
      ];
      for (const pat of sourcesPatterns) {
        const m = content.match(pat);
        if (m) {
          const idx = content.indexOf(m[0]);
          const block = content.includes('motion.section') ? legalBlock : legalBlockAlt;
          // For sidebar pages, use the sidebar-style legal outcomes
          const sidebarLegal = `
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">{${dataVar}.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
            </motion.div>
`;
          content = content.substring(0, idx) + sidebarLegal + content.substring(idx);
          inserted = true;
          break;
        }
      }
    }
    
    // Last resort: try before "Sources & Documentation" or any sources-related heading
    if (!inserted) {
      const sourcesDoc = content.indexOf('Sources &amp; Documentation');
      const sourcesDoc2 = content.indexOf('Sources & Documentation');
      const sourcesSimple = content.indexOf('>Sources<');
      let srcIdx = -1;
      if (sourcesDoc !== -1) srcIdx = sourcesDoc;
      else if (sourcesDoc2 !== -1) srcIdx = sourcesDoc2;
      else if (sourcesSimple !== -1) srcIdx = sourcesSimple;
      
      if (srcIdx !== -1) {
        // Walk backwards to find the start of the containing element
        const before = content.substring(0, srcIdx);
        const lastOpen = Math.max(before.lastIndexOf('<motion.section'), before.lastIndexOf('<motion.div'));
        if (lastOpen !== -1) {
          // Go back further to find the start of the line / whitespace
          let insertAt = lastOpen;
          while (insertAt > 0 && content[insertAt-1] !== '\n') insertAt--;
          
          const block = content.includes('motion.section') ? legalBlock : legalBlockAlt;
          content = content.substring(0, insertAt) + block + '\n' + content.substring(insertAt);
          inserted = true;
        }
      }
    }
    
    if (!inserted) {
      stats.errors.push(`${page}: still missing legalOutcomes render`);
    } else {
      changed = true;
      stats.legalOutcomes++;
    }
  }
  
  // 4. Add missing CHARGES rendering (object-style with statute/description/count)
  const hasChargesObjRender = /charge\.statute/.test(content);
  if (hasChargesObjData && !hasChargesObjRender) {
    const chargesBlock = `
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
          <div className="space-y-3">{${dataVar}.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
        </motion.section>
`;
    const chargesBlockAlt = `
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
          <div className="space-y-3">{${dataVar}.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
        </motion.div>
`;
    
    let inserted = false;
    
    // Try inserting before {/* Sources */} (but BEFORE legalOutcomes if that was just inserted)
    if (content.includes('{/* Sources */}')) {
      const block = content.includes('motion.section') ? chargesBlock : chargesBlockAlt;
      // Insert before the legalOutcomes block if it was just added, or before Sources
      // Actually just insert before Sources - order is charges then legal then sources
      content = content.replace('{/* Sources */}', block + '        {/* Sources */}');
      inserted = true;
    }
    
    // For grid-layout pages, insert after Key Figures in the left column
    if (!inserted) {
      const colSpanIdx = content.indexOf('lg:col-span-2');
      if (colSpanIdx !== -1) {
        const afterColSpan = content.substring(colSpanIdx);
        const keyFiguresIdx = afterColSpan.indexOf('keyFigures') || afterColSpan.indexOf('Key Figures');
        if (keyFiguresIdx !== -1) {
          const afterKF = afterColSpan.substring(keyFiguresIdx);
          const firstClose = afterKF.indexOf('</motion.div>');
          if (firstClose !== -1) {
            const insertionPoint = colSpanIdx + keyFiguresIdx + firstClose + '</motion.div>'.length;
            const after = content.substring(insertionPoint, insertionPoint + 200);
            if (!after.includes('charge.statute') && !after.includes('Charges')) {
              const chargesSidebar = `
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
              <div className="space-y-3">{${dataVar}.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
            </motion.div>`;
              content = content.substring(0, insertionPoint) + chargesSidebar + content.substring(insertionPoint);
              inserted = true;
            }
          }
        }
      }
    }
    
    if (!inserted) {
      stats.errors.push(`${page}: still missing charges render`);
    } else {
      changed = true;
      stats.charges++;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${page}`);
  }
}

console.log(`\nResults:`);
console.log(`  Coverup renders added: ${stats.coverup}`);
console.log(`  Charges renders added: ${stats.charges}`);
console.log(`  Legal Outcomes renders added: ${stats.legalOutcomes}`);
console.log(`  Import fixes: ${stats.imports}`);
if (stats.errors.length) {
  console.log(`  Remaining errors:`);
  stats.errors.forEach(e => console.log(`    - ${e}`));
}
