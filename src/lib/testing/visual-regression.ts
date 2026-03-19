/**
 * Visual Regression Testing Helpers
 * Utilities for capturing and comparing visual snapshots
 */

// ============================================================================
// Types
// ============================================================================

export interface ScreenshotOptions {
  fullPage?: boolean;
  clip?: { x: number; y: number; width: number; height: number };
  omitBackground?: boolean;
  scale?: 'css' | 'device';
  quality?: number;
  type?: 'png' | 'jpeg' | 'webp';
}

export interface ComparisonOptions {
  threshold?: number; // 0-1, percentage of pixels that can differ
  includeAA?: boolean; // Include anti-aliasing in diff
  alpha?: number; // Alpha channel threshold
  aaColor?: [number, number, number]; // Color for anti-aliased pixels
  diffColor?: [number, number, number]; // Color for different pixels
  diffColorAlt?: [number, number, number]; // Alternate diff color
  diffMask?: boolean; // Output a diff mask only
}

export interface VisualDiff {
  match: boolean;
  diffPercentage: number;
  diffPixels: number;
  totalPixels: number;
  dimensions: { width: number; height: number };
  diffImagePath?: string;
}

export interface VisualTestConfig {
  baselineDir: string;
  actualDir: string;
  diffDir: string;
  threshold: number;
  updateBaseline?: boolean;
  viewports: Viewport[];
  browsers?: string[];
}

export interface Viewport {
  name: string;
  width: number;
  height: number;
  deviceScaleFactor?: number;
  isMobile?: boolean;
  hasTouch?: boolean;
}

export interface VisualTestResult {
  name: string;
  viewport: Viewport;
  browser: string;
  passed: boolean;
  diff?: VisualDiff;
  baselinePath: string;
  actualPath: string;
  diffPath?: string;
  duration: number;
  error?: string;
}

// ============================================================================
// Preset Viewports
// ============================================================================

export const VIEWPORTS: Record<string, Viewport> = {
  // Mobile
  mobileS: { name: 'Mobile S', width: 320, height: 568, isMobile: true, hasTouch: true },
  mobileM: { name: 'Mobile M', width: 375, height: 667, isMobile: true, hasTouch: true },
  mobileL: { name: 'Mobile L', width: 425, height: 896, isMobile: true, hasTouch: true },
  
  // Tablet
  tablet: { name: 'Tablet', width: 768, height: 1024, isMobile: true, hasTouch: true },
  tabletL: { name: 'Tablet Landscape', width: 1024, height: 768, isMobile: true, hasTouch: true },
  
  // Desktop
  laptop: { name: 'Laptop', width: 1366, height: 768 },
  laptopL: { name: 'Laptop L', width: 1440, height: 900 },
  desktop: { name: 'Desktop', width: 1920, height: 1080 },
  desktop4K: { name: 'Desktop 4K', width: 2560, height: 1440 },
};

// ============================================================================
// Visual Test Registry
// ============================================================================

interface VisualTest {
  name: string;
  route: string;
  selector?: string;
  viewports: Viewport[];
  waitFor?: string | number;
  actions?: Array<{ type: string; selector?: string; value?: string }>;
  mask?: string[];
  clip?: { x: number; y: number; width: number; height: number };
}

export const visualTests: VisualTest[] = [
  // Homepage
  {
    name: 'homepage-hero',
    route: '/',
    selector: '[data-testid="hero"]',
    viewports: [VIEWPORTS.mobileM, VIEWPORTS.tablet, VIEWPORTS.desktop],
  },
  {
    name: 'homepage-full',
    route: '/',
    viewports: [VIEWPORTS.desktop],
    waitFor: 2000,
  },
  
  // Investigation List
  {
    name: 'investigation-list',
    route: '/investigations',
    selector: '[data-testid="investigation-list"]',
    viewports: [VIEWPORTS.mobileM, VIEWPORTS.desktop],
    waitFor: '[data-testid="investigation-card"]',
  },
  {
    name: 'investigation-card',
    route: '/investigations',
    selector: '[data-testid="investigation-card"]:first-child',
    viewports: [VIEWPORTS.desktop],
  },
  
  // Entity List
  {
    name: 'entity-list',
    route: '/entities',
    viewports: [VIEWPORTS.mobileM, VIEWPORTS.tablet, VIEWPORTS.desktop],
    waitFor: '[data-testid="entity-card"]',
  },
  
  // Workspace
  {
    name: 'workspace-dashboard',
    route: '/workspaces/test',
    viewports: [VIEWPORTS.desktop],
    waitFor: 2000,
    mask: ['[data-testid="timestamp"]', '[data-testid="avatar"]'],
  },
  {
    name: 'evidence-board',
    route: '/workspaces/test',
    selector: '[data-testid="evidence-board"]',
    viewports: [VIEWPORTS.desktop],
  },
  
  // Components
  {
    name: 'header',
    route: '/',
    selector: 'header',
    viewports: [VIEWPORTS.mobileM, VIEWPORTS.desktop],
  },
  {
    name: 'footer',
    route: '/',
    selector: 'footer',
    viewports: [VIEWPORTS.desktop],
  },
  
  // States
  {
    name: 'search-open',
    route: '/',
    viewports: [VIEWPORTS.desktop],
    actions: [{ type: 'click', selector: '[data-testid="search-trigger"]' }],
    waitFor: 500,
    selector: '[data-testid="search-modal"]',
  },
  {
    name: 'mobile-menu',
    route: '/',
    viewports: [VIEWPORTS.mobileM],
    actions: [{ type: 'click', selector: '[data-testid="menu-toggle"]' }],
    waitFor: 500,
    selector: '[data-testid="mobile-menu"]',
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

export function generateSnapshotName(
  testName: string,
  viewport: Viewport,
  browser = 'chromium'
): string {
  return `${testName}-${viewport.name.toLowerCase().replace(/\s+/g, '-')}-${browser}`;
}

export function getBaselinePath(config: VisualTestConfig, snapshotName: string): string {
  return `${config.baselineDir}/${snapshotName}.png`;
}

export function getActualPath(config: VisualTestConfig, snapshotName: string): string {
  return `${config.actualDir}/${snapshotName}.png`;
}

export function getDiffPath(config: VisualTestConfig, snapshotName: string): string {
  return `${config.diffDir}/${snapshotName}-diff.png`;
}

// ============================================================================
// Pixel Comparison (Simulated)
// ============================================================================

export function comparePixels(
  baseline: Uint8ClampedArray,
  actual: Uint8ClampedArray,
  width: number,
  height: number,
  options: ComparisonOptions = {}
): VisualDiff {
  const { threshold = 0.01 } = options;
  
  let diffPixels = 0;
  const totalPixels = width * height;

  // Compare each pixel
  for (let i = 0; i < baseline.length; i += 4) {
    const rDiff = Math.abs(baseline[i] - actual[i]);
    const gDiff = Math.abs(baseline[i + 1] - actual[i + 1]);
    const bDiff = Math.abs(baseline[i + 2] - actual[i + 2]);
    const aDiff = Math.abs(baseline[i + 3] - actual[i + 3]);

    // If any channel differs significantly
    if (rDiff > 10 || gDiff > 10 || bDiff > 10 || aDiff > 10) {
      diffPixels++;
    }
  }

  const diffPercentage = diffPixels / totalPixels;
  const match = diffPercentage <= threshold;

  return {
    match,
    diffPercentage,
    diffPixels,
    totalPixels,
    dimensions: { width, height },
  };
}

// ============================================================================
// Visual Test Reporter
// ============================================================================

export interface VisualTestReport {
  timestamp: string;
  config: VisualTestConfig;
  results: VisualTestResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    duration: number;
  };
}

export function generateReport(results: VisualTestResult[], config: VisualTestConfig): VisualTestReport {
  const passed = results.filter(r => r.passed).length;
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

  return {
    timestamp: new Date().toISOString(),
    config,
    results,
    summary: {
      total: results.length,
      passed,
      failed: results.length - passed,
      duration: totalDuration,
    },
  };
}

export function formatReportAsHtml(report: VisualTestReport): string {
  const { summary, results } = report;
  
  const resultRows = results.map(r => `
    <tr class="${r.passed ? 'passed' : 'failed'}">
      <td>${r.name}</td>
      <td>${r.viewport.name}</td>
      <td>${r.browser}</td>
      <td>${r.passed ? '✓ Pass' : '✗ Fail'}</td>
      <td>${r.diff ? `${(r.diff.diffPercentage * 100).toFixed(2)}%` : 'N/A'}</td>
      <td>${r.duration}ms</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <title>Visual Regression Report</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 2rem; background: #0a0a0a; color: #e4e4e7; }
    h1 { color: #d64545; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #27272a; }
    th { background: #18181b; }
    .passed { background: rgba(34, 197, 94, 0.1); }
    .failed { background: rgba(214, 69, 69, 0.1); }
    .summary { display: flex; gap: 2rem; margin: 1rem 0; }
    .stat { padding: 1rem; background: #18181b; }
    .stat-value { font-size: 2rem; font-weight: bold; }
    .stat-label { color: #71717a; font-size: 0.875rem; }
  </style>
</head>
<body>
  <h1>Visual Regression Report</h1>
  <p>Generated: ${report.timestamp}</p>
  
  <div class="summary">
    <div class="stat">
      <div class="stat-value">${summary.total}</div>
      <div class="stat-label">Total Tests</div>
    </div>
    <div class="stat">
      <div class="stat-value" style="color: #22c55e;">${summary.passed}</div>
      <div class="stat-label">Passed</div>
    </div>
    <div class="stat">
      <div class="stat-value" style="color: #d64545;">${summary.failed}</div>
      <div class="stat-label">Failed</div>
    </div>
    <div class="stat">
      <div class="stat-value">${summary.duration}ms</div>
      <div class="stat-label">Duration</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Test Name</th>
        <th>Viewport</th>
        <th>Browser</th>
        <th>Status</th>
        <th>Diff %</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      ${resultRows}
    </tbody>
  </table>
</body>
</html>
  `;
}

// ============================================================================
// Component Visual Tests
// ============================================================================

export interface ComponentVisualTest {
  component: string;
  variants: Array<{
    name: string;
    props: Record<string, unknown>;
    description?: string;
  }>;
  viewports?: Viewport[];
}

export const componentVisualTests: ComponentVisualTest[] = [
  {
    component: 'InvestigationCard',
    variants: [
      { name: 'default', props: { severity: 'medium', status: 'active' } },
      { name: 'critical', props: { severity: 'critical', status: 'active' } },
      { name: 'resolved', props: { severity: 'low', status: 'resolved' } },
    ],
    viewports: [VIEWPORTS.mobileM, VIEWPORTS.desktop],
  },
  {
    component: 'EntityCard',
    variants: [
      { name: 'agency', props: { type: 'agency', riskLevel: 'high' } },
      { name: 'corporation', props: { type: 'corporation', riskLevel: 'critical' } },
      { name: 'individual', props: { type: 'individual', riskLevel: 'low' } },
    ],
  },
  {
    component: 'SeverityBadge',
    variants: [
      { name: 'critical', props: { severity: 'critical' } },
      { name: 'high', props: { severity: 'high' } },
      { name: 'medium', props: { severity: 'medium' } },
      { name: 'low', props: { severity: 'low' } },
    ],
  },
  {
    component: 'EvidenceCard',
    variants: [
      { name: 'verified', props: { status: 'verified', type: 'document' } },
      { name: 'disputed', props: { status: 'disputed', type: 'image' } },
      { name: 'pending', props: { status: 'pending', type: 'link' } },
    ],
  },
];

// ============================================================================
// Masking Utilities
// ============================================================================

export interface MaskRegion {
  selector?: string;
  rect?: { x: number; y: number; width: number; height: number };
  color?: string;
}

export function getMaskRegions(route: string): MaskRegion[] {
  // Default masks for dynamic content
  const defaultMasks: MaskRegion[] = [
    { selector: '[data-testid="timestamp"]', color: '#808080' },
    { selector: '[data-testid="avatar"]', color: '#808080' },
    { selector: '[data-testid="random-id"]', color: '#808080' },
    { selector: '.animated', color: '#808080' },
  ];

  // Route-specific masks
  const routeMasks: Record<string, MaskRegion[]> = {
    '/workspaces': [
      { selector: '[data-testid="member-count"]', color: '#808080' },
      { selector: '[data-testid="last-activity"]', color: '#808080' },
    ],
    '/': [
      { selector: '[data-testid="live-count"]', color: '#808080' },
    ],
  };

  return [...defaultMasks, ...(routeMasks[route] || [])];
}

// ============================================================================
// Default Configuration
// ============================================================================

export const defaultVisualTestConfig: VisualTestConfig = {
  baselineDir: '__visual_snapshots__/baseline',
  actualDir: '__visual_snapshots__/actual',
  diffDir: '__visual_snapshots__/diff',
  threshold: 0.01,
  updateBaseline: false,
  viewports: [VIEWPORTS.mobileM, VIEWPORTS.desktop],
  browsers: ['chromium'],
};

// ============================================================================
// Exports
// ============================================================================

export default {
  VIEWPORTS,
  visualTests,
  componentVisualTests,
  defaultVisualTestConfig,
  generateSnapshotName,
  comparePixels,
  generateReport,
  formatReportAsHtml,
  getMaskRegions,
};
