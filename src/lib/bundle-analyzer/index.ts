/**
 * Bundle Analysis Tools
 * Analyze and visualize bundle composition and sizes
 */

// ============================================================================
// Types
// ============================================================================

export interface ModuleInfo {
  name: string;
  path: string;
  size: number;
  gzipSize: number;
  dependencies: string[];
  dependents: string[];
  isEntry: boolean;
  chunk: string;
}

export interface ChunkInfo {
  name: string;
  size: number;
  gzipSize: number;
  modules: ModuleInfo[];
  isEntry: boolean;
  isInitial: boolean;
  isDynamic: boolean;
}

export interface BundleStats {
  totalSize: number;
  totalGzipSize: number;
  chunks: ChunkInfo[];
  modules: ModuleInfo[];
  assets: AssetInfo[];
  dependencies: DependencyInfo[];
  buildTime: number;
  timestamp: number;
}

export interface AssetInfo {
  name: string;
  size: number;
  gzipSize: number;
  type: 'js' | 'css' | 'image' | 'font' | 'other';
  chunk?: string;
}

export interface DependencyInfo {
  name: string;
  version: string;
  size: number;
  gzipSize: number;
  usedBy: string[];
  isDevDependency: boolean;
}

export interface BundleBudget {
  name: string;
  type: 'total' | 'chunk' | 'asset' | 'dependency';
  target?: string;
  maxSize: number;
  warningThreshold?: number;
}

export interface BudgetResult {
  budget: BundleBudget;
  actualSize: number;
  passed: boolean;
  warning: boolean;
  overBy: number;
  percentage: number;
}

// ============================================================================
// Size Formatting
// ============================================================================

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export function parseBytes(str: string): number {
  const match = str.match(/^([\d.]+)\s*(B|KB|MB|GB)?$/i);
  if (!match) return 0;
  
  const value = parseFloat(match[1]);
  const unit = (match[2] || 'B').toUpperCase();
  const multipliers: Record<string, number> = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
  };
  
  return value * (multipliers[unit] || 1);
}

// ============================================================================
// Bundle Budgets
// ============================================================================

export const DEFAULT_BUDGETS: BundleBudget[] = [
  { name: 'Total Bundle', type: 'total', maxSize: 500 * 1024, warningThreshold: 0.9 },
  { name: 'Main Entry', type: 'chunk', target: 'main', maxSize: 200 * 1024 },
  { name: 'Single Chunk', type: 'chunk', maxSize: 150 * 1024 },
  { name: 'CSS Total', type: 'asset', target: '*.css', maxSize: 100 * 1024 },
  { name: 'Single Image', type: 'asset', target: '*.{png,jpg,webp}', maxSize: 200 * 1024 },
  { name: 'React', type: 'dependency', target: 'react', maxSize: 50 * 1024 },
  { name: 'framer-motion', type: 'dependency', target: 'framer-motion', maxSize: 100 * 1024 },
];

export function checkBudgets(stats: BundleStats, budgets: BundleBudget[] = DEFAULT_BUDGETS): BudgetResult[] {
  return budgets.map(budget => {
    let actualSize = 0;

    switch (budget.type) {
      case 'total':
        actualSize = stats.totalSize;
        break;
      
      case 'chunk':
        if (budget.target) {
          const chunk = stats.chunks.find(c => c.name === budget.target);
          actualSize = chunk?.size || 0;
        } else {
          // Check all chunks against the budget
          const largestChunk = Math.max(...stats.chunks.map(c => c.size));
          actualSize = largestChunk;
        }
        break;
      
      case 'asset':
        if (budget.target) {
          const pattern = new RegExp(budget.target.replace(/\*/g, '.*').replace(/\./g, '\\.'));
          const matchingAssets = stats.assets.filter(a => pattern.test(a.name));
          actualSize = Math.max(...matchingAssets.map(a => a.size), 0);
        }
        break;
      
      case 'dependency':
        if (budget.target) {
          const dep = stats.dependencies.find(d => d.name === budget.target);
          actualSize = dep?.size || 0;
        }
        break;
    }

    const passed = actualSize <= budget.maxSize;
    const warningThreshold = budget.warningThreshold ?? 0.9;
    const warning = !passed || actualSize >= budget.maxSize * warningThreshold;
    const overBy = actualSize - budget.maxSize;
    const percentage = (actualSize / budget.maxSize) * 100;

    return {
      budget,
      actualSize,
      passed,
      warning,
      overBy,
      percentage,
    };
  });
}

// ============================================================================
// Analysis Utilities
// ============================================================================

export function findDuplicates(modules: ModuleInfo[]): Map<string, ModuleInfo[]> {
  const byName = new Map<string, ModuleInfo[]>();
  
  modules.forEach(mod => {
    const baseName = mod.name.split('/').pop() || mod.name;
    const existing = byName.get(baseName) || [];
    existing.push(mod);
    byName.set(baseName, existing);
  });

  // Filter to only duplicates
  const duplicates = new Map<string, ModuleInfo[]>();
  byName.forEach((mods, name) => {
    if (mods.length > 1) {
      duplicates.set(name, mods);
    }
  });

  return duplicates;
}

export function findLargestModules(modules: ModuleInfo[], count = 10): ModuleInfo[] {
  return [...modules]
    .sort((a, b) => b.size - a.size)
    .slice(0, count);
}

export function findUnusedExports(modules: ModuleInfo[]): ModuleInfo[] {
  // Modules with no dependents (except entries)
  return modules.filter(mod => 
    !mod.isEntry && mod.dependents.length === 0
  );
}

export function calculateTreeShakingPotential(modules: ModuleInfo[]): number {
  const unusedSize = findUnusedExports(modules)
    .reduce((sum, mod) => sum + mod.size, 0);
  const totalSize = modules.reduce((sum, mod) => sum + mod.size, 0);
  
  return totalSize > 0 ? (unusedSize / totalSize) * 100 : 0;
}

export interface DependencyGraph {
  nodes: Array<{ id: string; size: number; depth: number }>;
  edges: Array<{ source: string; target: string }>;
}

export function buildDependencyGraph(modules: ModuleInfo[]): DependencyGraph {
  const nodes: Array<{ id: string; size: number; depth: number }> = [];
  const edges: Array<{ source: string; target: string }> = [];
  const depths = new Map<string, number>();

  // Calculate depths
  const entryModules = modules.filter(m => m.isEntry);
  const queue: Array<{ mod: ModuleInfo; depth: number }> = 
    entryModules.map(m => ({ mod: m, depth: 0 }));
  
  while (queue.length > 0) {
    const { mod, depth } = queue.shift()!;
    
    if (!depths.has(mod.name) || depths.get(mod.name)! > depth) {
      depths.set(mod.name, depth);
      
      mod.dependencies.forEach(depName => {
        const depMod = modules.find(m => m.name === depName);
        if (depMod) {
          queue.push({ mod: depMod, depth: depth + 1 });
        }
      });
    }
  }

  // Build nodes and edges
  modules.forEach(mod => {
    nodes.push({
      id: mod.name,
      size: mod.size,
      depth: depths.get(mod.name) || 0,
    });

    mod.dependencies.forEach(dep => {
      edges.push({ source: mod.name, target: dep });
    });
  });

  return { nodes, edges };
}

// ============================================================================
// Report Generation
// ============================================================================

export interface AnalysisReport {
  summary: {
    totalSize: string;
    totalGzipSize: string;
    chunkCount: number;
    moduleCount: number;
    dependencyCount: number;
    buildTime: string;
  };
  budgetResults: BudgetResult[];
  largestModules: Array<{ name: string; size: string; percentage: number }>;
  largestDependencies: Array<{ name: string; size: string; percentage: number }>;
  duplicates: Array<{ name: string; count: number; wastedSize: string }>;
  recommendations: string[];
}

export function generateAnalysisReport(stats: BundleStats, budgets?: BundleBudget[]): AnalysisReport {
  const budgetResults = checkBudgets(stats, budgets);
  const largestModules = findLargestModules(stats.modules, 10);
  const duplicates = findDuplicates(stats.modules);

  const recommendations: string[] = [];

  // Generate recommendations
  const failedBudgets = budgetResults.filter(r => !r.passed);
  if (failedBudgets.length > 0) {
    recommendations.push(`${failedBudgets.length} budget(s) exceeded. Consider code splitting or removing unused code.`);
  }

  if (duplicates.size > 0) {
    recommendations.push(`Found ${duplicates.size} duplicate modules. Consider deduplicating with npm dedupe.`);
  }

  const treeShakingPotential = calculateTreeShakingPotential(stats.modules);
  if (treeShakingPotential > 5) {
    recommendations.push(`${treeShakingPotential.toFixed(1)}% potential tree-shaking savings detected.`);
  }

  const largeDeps = stats.dependencies.filter(d => d.size > 100 * 1024);
  if (largeDeps.length > 0) {
    recommendations.push(`${largeDeps.length} large dependencies found. Consider lighter alternatives.`);
  }

  return {
    summary: {
      totalSize: formatBytes(stats.totalSize),
      totalGzipSize: formatBytes(stats.totalGzipSize),
      chunkCount: stats.chunks.length,
      moduleCount: stats.modules.length,
      dependencyCount: stats.dependencies.length,
      buildTime: `${stats.buildTime}ms`,
    },
    budgetResults,
    largestModules: largestModules.map(m => ({
      name: m.name,
      size: formatBytes(m.size),
      percentage: (m.size / stats.totalSize) * 100,
    })),
    largestDependencies: stats.dependencies
      .sort((a, b) => b.size - a.size)
      .slice(0, 10)
      .map(d => ({
        name: d.name,
        size: formatBytes(d.size),
        percentage: (d.size / stats.totalSize) * 100,
      })),
    duplicates: Array.from(duplicates.entries()).map(([name, mods]) => ({
      name,
      count: mods.length,
      wastedSize: formatBytes(mods.slice(1).reduce((sum, m) => sum + m.size, 0)),
    })),
    recommendations,
  };
}

// ============================================================================
// HTML Report
// ============================================================================

export function generateHtmlReport(stats: BundleStats, budgets?: BundleBudget[]): string {
  const report = generateAnalysisReport(stats, budgets);

  const budgetRows = report.budgetResults.map(r => `
    <tr class="${r.passed ? 'passed' : 'failed'}">
      <td>${r.budget.name}</td>
      <td>${formatBytes(r.actualSize)}</td>
      <td>${formatBytes(r.budget.maxSize)}</td>
      <td>${r.percentage.toFixed(1)}%</td>
      <td>${r.passed ? '✓' : '✗'}</td>
    </tr>
  `).join('');

  const moduleRows = report.largestModules.map(m => `
    <tr>
      <td class="truncate">${m.name}</td>
      <td>${m.size}</td>
      <td>${m.percentage.toFixed(1)}%</td>
    </tr>
  `).join('');

  const depRows = report.largestDependencies.map(d => `
    <tr>
      <td>${d.name}</td>
      <td>${d.size}</td>
      <td>${d.percentage.toFixed(1)}%</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <title>Bundle Analysis Report - ArkHive</title>
  <style>
    :root { --blood: #6b6b6b; --bg: #0a0a0a; --card: #18181b; --border: #27272a; --text: #e4e4e7; --muted: #71717a; }
    body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 2rem; }
    h1, h2 { color: var(--blood); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
    .stat { background: var(--card); border: 1px solid var(--border); padding: 1.5rem; }
    .stat-value { font-size: 2rem; font-weight: bold; }
    .stat-label { color: var(--muted); font-size: 0.875rem; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid var(--border); }
    th { background: var(--card); }
    .passed { background: rgba(34, 197, 94, 0.1); }
    .failed { background: rgba(160, 160, 160, 0.1); }
    .truncate { max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .recommendations { background: var(--card); border: 1px solid var(--border); padding: 1.5rem; }
    .recommendations li { margin: 0.5rem 0; color: var(--muted); }
  </style>
</head>
<body>
  <h1>Bundle Analysis Report</h1>
  <p style="color: var(--muted);">Generated: ${new Date(stats.timestamp).toLocaleString()}</p>

  <div class="grid">
    <div class="stat">
      <div class="stat-value">${report.summary.totalSize}</div>
      <div class="stat-label">Total Size</div>
    </div>
    <div class="stat">
      <div class="stat-value">${report.summary.totalGzipSize}</div>
      <div class="stat-label">Gzipped</div>
    </div>
    <div class="stat">
      <div class="stat-value">${report.summary.chunkCount}</div>
      <div class="stat-label">Chunks</div>
    </div>
    <div class="stat">
      <div class="stat-value">${report.summary.moduleCount}</div>
      <div class="stat-label">Modules</div>
    </div>
    <div class="stat">
      <div class="stat-value">${report.summary.buildTime}</div>
      <div class="stat-label">Build Time</div>
    </div>
  </div>

  <h2>Budget Results</h2>
  <table>
    <thead><tr><th>Budget</th><th>Actual</th><th>Max</th><th>Usage</th><th>Status</th></tr></thead>
    <tbody>${budgetRows}</tbody>
  </table>

  <h2>Largest Modules</h2>
  <table>
    <thead><tr><th>Module</th><th>Size</th><th>% of Total</th></tr></thead>
    <tbody>${moduleRows}</tbody>
  </table>

  <h2>Largest Dependencies</h2>
  <table>
    <thead><tr><th>Package</th><th>Size</th><th>% of Total</th></tr></thead>
    <tbody>${depRows}</tbody>
  </table>

  ${report.recommendations.length > 0 ? `
  <h2>Recommendations</h2>
  <div class="recommendations">
    <ul>
      ${report.recommendations.map(r => `<li>${r}</li>`).join('')}
    </ul>
  </div>
  ` : ''}
</body>
</html>
  `;
}

// ============================================================================
// Exports
// ============================================================================

export default {
  formatBytes,
  parseBytes,
  checkBudgets,
  DEFAULT_BUDGETS,
  findDuplicates,
  findLargestModules,
  findUnusedExports,
  calculateTreeShakingPotential,
  buildDependencyGraph,
  generateAnalysisReport,
  generateHtmlReport,
};
