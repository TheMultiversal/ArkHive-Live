/**
 * E2E Test Scenarios
 * Playwright-style test definitions for ArkHive
 */

// ============================================================================
// Types
// ============================================================================

export interface TestStep {
  name: string;
  action: 'navigate' | 'click' | 'type' | 'wait' | 'assert' | 'screenshot' | 'scroll' | 'hover' | 'select' | 'upload' | 'custom';
  target?: string;
  value?: string;
  timeout?: number;
  options?: Record<string, unknown>;
}

export interface TestScenario {
  id: string;
  name: string;
  description: string;
  tags: string[];
  priority: 'critical' | 'high' | 'medium' | 'low';
  steps: TestStep[];
  setup?: TestStep[];
  teardown?: TestStep[];
  expectedDuration?: number;
}

export interface TestSuite {
  name: string;
  description: string;
  scenarios: TestScenario[];
  beforeAll?: TestStep[];
  afterAll?: TestStep[];
  beforeEach?: TestStep[];
  afterEach?: TestStep[];
}

// ============================================================================
// Test Selectors
// ============================================================================

export const selectors = {
  // Navigation
  header: '[data-testid="header"]',
  navLink: (name: string) => `[data-testid="nav-${name}"]`,
  logo: '[data-testid="logo"]',
  
  // Investigations
  investigationList: '[data-testid="investigation-list"]',
  investigationCard: '[data-testid="investigation-card"]',
  investigationTitle: '[data-testid="investigation-title"]',
  investigationSeverity: '[data-testid="severity-badge"]',
  investigationFilter: '[data-testid="investigation-filter"]',
  
  // Entities
  entityList: '[data-testid="entity-list"]',
  entityCard: '[data-testid="entity-card"]',
  entityType: '[data-testid="entity-type"]',
  entitySearch: '[data-testid="entity-search"]',
  
  // Evidence
  evidenceBoard: '[data-testid="evidence-board"]',
  evidenceItem: '[data-testid="evidence-item"]',
  evidenceUpload: '[data-testid="evidence-upload"]',
  evidenceVerify: '[data-testid="verify-button"]',
  
  // Workspace
  workspaceList: '[data-testid="workspace-list"]',
  workspaceCard: '[data-testid="workspace-card"]',
  workspaceCreate: '[data-testid="create-workspace"]',
  workspaceChat: '[data-testid="workspace-chat"]',
  workspaceMembers: '[data-testid="workspace-members"]',
  
  // Forms
  submitForm: '[data-testid="submit-form"]',
  inputField: (name: string) => `[data-testid="input-${name}"]`,
  submitButton: '[data-testid="submit-button"]',
  
  // Search
  searchInput: '[data-testid="search-input"]',
  searchResults: '[data-testid="search-results"]',
  searchResultItem: '[data-testid="search-result-item"]',
  
  // Modals
  modal: '[data-testid="modal"]',
  modalClose: '[data-testid="modal-close"]',
  modalConfirm: '[data-testid="modal-confirm"]',
  
  // Auth
  loginButton: '[data-testid="login-button"]',
  logoutButton: '[data-testid="logout-button"]',
  userMenu: '[data-testid="user-menu"]',
};

// ============================================================================
// Common Steps
// ============================================================================

export const commonSteps = {
  // Navigation
  goToHome: (): TestStep => ({
    name: 'Navigate to home page',
    action: 'navigate',
    target: '/',
  }),
  
  goToInvestigations: (): TestStep => ({
    name: 'Navigate to investigations',
    action: 'navigate',
    target: '/investigations',
  }),
  
  goToEntities: (): TestStep => ({
    name: 'Navigate to entities',
    action: 'navigate',
    target: '/entities',
  }),
  
  goToWorkspaces: (): TestStep => ({
    name: 'Navigate to workspaces',
    action: 'navigate',
    target: '/workspaces',
  }),
  
  // Wait for page load
  waitForPageLoad: (): TestStep => ({
    name: 'Wait for page to load',
    action: 'wait',
    target: 'networkidle',
    timeout: 10000,
  }),
  
  // Wait for element
  waitForElement: (selector: string, timeout = 5000): TestStep => ({
    name: `Wait for element: ${selector}`,
    action: 'wait',
    target: selector,
    timeout,
  }),
  
  // Click
  click: (selector: string): TestStep => ({
    name: `Click on ${selector}`,
    action: 'click',
    target: selector,
  }),
  
  // Type
  type: (selector: string, text: string): TestStep => ({
    name: `Type "${text}" into ${selector}`,
    action: 'type',
    target: selector,
    value: text,
  }),
  
  // Assert visible
  assertVisible: (selector: string): TestStep => ({
    name: `Assert ${selector} is visible`,
    action: 'assert',
    target: selector,
    options: { state: 'visible' },
  }),
  
  // Assert text
  assertText: (selector: string, text: string): TestStep => ({
    name: `Assert ${selector} contains "${text}"`,
    action: 'assert',
    target: selector,
    value: text,
    options: { type: 'text' },
  }),
  
  // Screenshot
  screenshot: (name: string): TestStep => ({
    name: `Take screenshot: ${name}`,
    action: 'screenshot',
    value: name,
  }),
};

// ============================================================================
// Test Scenarios
// ============================================================================

// Homepage Tests
export const homepageScenarios: TestScenario[] = [
  {
    id: 'home-001',
    name: 'Homepage loads correctly',
    description: 'Verify homepage loads with all critical elements',
    tags: ['smoke', 'homepage'],
    priority: 'critical',
    steps: [
      commonSteps.goToHome(),
      commonSteps.waitForPageLoad(),
      commonSteps.assertVisible(selectors.header),
      commonSteps.assertVisible(selectors.logo),
      { name: 'Check hero section', action: 'assert', target: '[data-testid="hero"]', options: { state: 'visible' } },
      commonSteps.screenshot('homepage-loaded'),
    ],
  },
  {
    id: 'home-002',
    name: 'Navigation links work',
    description: 'Test all main navigation links',
    tags: ['navigation', 'homepage'],
    priority: 'high',
    steps: [
      commonSteps.goToHome(),
      commonSteps.click(selectors.navLink('investigations')),
      commonSteps.waitForPageLoad(),
      { name: 'Assert on investigations page', action: 'assert', target: 'url', value: '/investigations' },
      commonSteps.goToHome(),
      commonSteps.click(selectors.navLink('entities')),
      commonSteps.waitForPageLoad(),
      { name: 'Assert on entities page', action: 'assert', target: 'url', value: '/entities' },
    ],
  },
];

// Investigation Tests
export const investigationScenarios: TestScenario[] = [
  {
    id: 'inv-001',
    name: 'Investigation list displays',
    description: 'Verify investigation list renders with cards',
    tags: ['investigations', 'list'],
    priority: 'critical',
    steps: [
      commonSteps.goToInvestigations(),
      commonSteps.waitForPageLoad(),
      commonSteps.assertVisible(selectors.investigationList),
      commonSteps.waitForElement(selectors.investigationCard),
      { name: 'Count investigation cards', action: 'assert', target: selectors.investigationCard, options: { countMin: 1 } },
      commonSteps.screenshot('investigation-list'),
    ],
  },
  {
    id: 'inv-002',
    name: 'Investigation card click opens detail',
    description: 'Click on investigation card navigates to detail page',
    tags: ['investigations', 'navigation'],
    priority: 'high',
    steps: [
      commonSteps.goToInvestigations(),
      commonSteps.waitForElement(selectors.investigationCard),
      { name: 'Click first investigation', action: 'click', target: `${selectors.investigationCard}:first-child` },
      commonSteps.waitForPageLoad(),
      { name: 'Assert on detail page', action: 'assert', target: 'url', value: '/investigations/', options: { contains: true } },
      commonSteps.assertVisible(selectors.investigationTitle),
    ],
  },
  {
    id: 'inv-003',
    name: 'Filter investigations by severity',
    description: 'Test severity filter functionality',
    tags: ['investigations', 'filter'],
    priority: 'medium',
    steps: [
      commonSteps.goToInvestigations(),
      commonSteps.waitForElement(selectors.investigationFilter),
      commonSteps.click(selectors.investigationFilter),
      { name: 'Select critical severity', action: 'click', target: '[data-value="critical"]' },
      commonSteps.waitForPageLoad(),
      { name: 'Verify filtered results', action: 'assert', target: selectors.investigationSeverity, value: 'critical' },
    ],
  },
];

// Entity Tests
export const entityScenarios: TestScenario[] = [
  {
    id: 'ent-001',
    name: 'Entity list displays',
    description: 'Verify entity list renders correctly',
    tags: ['entities', 'list'],
    priority: 'critical',
    steps: [
      commonSteps.goToEntities(),
      commonSteps.waitForPageLoad(),
      commonSteps.assertVisible(selectors.entityList),
      commonSteps.waitForElement(selectors.entityCard),
      commonSteps.screenshot('entity-list'),
    ],
  },
  {
    id: 'ent-002',
    name: 'Search entities',
    description: 'Test entity search functionality',
    tags: ['entities', 'search'],
    priority: 'high',
    steps: [
      commonSteps.goToEntities(),
      commonSteps.waitForElement(selectors.entitySearch),
      commonSteps.type(selectors.entitySearch, 'Federal'),
      { name: 'Wait for search results', action: 'wait', timeout: 1000 },
      { name: 'Verify search results', action: 'assert', target: selectors.entityCard, options: { countMin: 0 } },
    ],
  },
  {
    id: 'ent-003',
    name: 'Entity type filtering',
    description: 'Filter entities by type',
    tags: ['entities', 'filter'],
    priority: 'medium',
    steps: [
      commonSteps.goToEntities(),
      { name: 'Click agencies filter', action: 'click', target: '[data-type="agency"]' },
      commonSteps.waitForPageLoad(),
      { name: 'Verify agency entities shown', action: 'assert', target: selectors.entityType, value: 'agency' },
    ],
  },
];

// Workspace Tests
export const workspaceScenarios: TestScenario[] = [
  {
    id: 'ws-001',
    name: 'Workspace list displays',
    description: 'Verify workspace list renders',
    tags: ['workspaces', 'list'],
    priority: 'critical',
    steps: [
      commonSteps.goToWorkspaces(),
      commonSteps.waitForPageLoad(),
      commonSteps.assertVisible(selectors.workspaceList),
    ],
  },
  {
    id: 'ws-002',
    name: 'Create new workspace',
    description: 'Test workspace creation flow',
    tags: ['workspaces', 'create'],
    priority: 'high',
    steps: [
      commonSteps.goToWorkspaces(),
      commonSteps.click(selectors.workspaceCreate),
      commonSteps.waitForElement(selectors.submitForm),
      commonSteps.type(selectors.inputField('name'), 'Test Workspace'),
      commonSteps.type(selectors.inputField('description'), 'A test workspace for E2E testing'),
      commonSteps.click(selectors.submitButton),
      commonSteps.waitForPageLoad(),
      { name: 'Verify workspace created', action: 'assert', target: 'url', value: '/workspaces/', options: { contains: true } },
    ],
  },
  {
    id: 'ws-003',
    name: 'Workspace evidence board',
    description: 'Test evidence board functionality',
    tags: ['workspaces', 'evidence'],
    priority: 'high',
    steps: [
      { name: 'Navigate to workspace', action: 'navigate', target: '/workspaces/test-workspace' },
      commonSteps.waitForElement(selectors.evidenceBoard),
      commonSteps.assertVisible(selectors.evidenceBoard),
      commonSteps.screenshot('evidence-board'),
    ],
  },
  {
    id: 'ws-004',
    name: 'Upload evidence',
    description: 'Test evidence upload functionality',
    tags: ['workspaces', 'evidence', 'upload'],
    priority: 'high',
    steps: [
      { name: 'Navigate to workspace', action: 'navigate', target: '/workspaces/test-workspace' },
      commonSteps.waitForElement(selectors.evidenceUpload),
      commonSteps.click(selectors.evidenceUpload),
      { name: 'Upload file', action: 'upload', target: 'input[type="file"]', value: 'test-document.pdf' },
      { name: 'Wait for upload', action: 'wait', timeout: 5000 },
      { name: 'Verify upload success', action: 'assert', target: '[data-testid="upload-success"]', options: { state: 'visible' } },
    ],
  },
];

// Search Tests
export const searchScenarios: TestScenario[] = [
  {
    id: 'search-001',
    name: 'Global search works',
    description: 'Test global search functionality',
    tags: ['search'],
    priority: 'critical',
    steps: [
      commonSteps.goToHome(),
      commonSteps.click(selectors.searchInput),
      commonSteps.type(selectors.searchInput, 'government'),
      { name: 'Wait for results', action: 'wait', timeout: 2000 },
      commonSteps.assertVisible(selectors.searchResults),
    ],
  },
  {
    id: 'search-002',
    name: 'Search result click',
    description: 'Click search result navigates correctly',
    tags: ['search', 'navigation'],
    priority: 'high',
    steps: [
      commonSteps.goToHome(),
      commonSteps.type(selectors.searchInput, 'investigation'),
      commonSteps.waitForElement(selectors.searchResultItem),
      commonSteps.click(`${selectors.searchResultItem}:first-child`),
      commonSteps.waitForPageLoad(),
      { name: 'Verify navigation', action: 'assert', target: 'url', options: { notEqual: '/' } },
    ],
  },
];

// Accessibility Tests
export const accessibilityScenarios: TestScenario[] = [
  {
    id: 'a11y-001',
    name: 'Keyboard navigation',
    description: 'Test keyboard navigation throughout app',
    tags: ['accessibility', 'keyboard'],
    priority: 'high',
    steps: [
      commonSteps.goToHome(),
      { name: 'Tab to first interactive element', action: 'custom', options: { action: 'press', key: 'Tab' } },
      { name: 'Verify focus visible', action: 'assert', target: ':focus', options: { state: 'visible' } },
      { name: 'Tab through navigation', action: 'custom', options: { action: 'press', key: 'Tab', times: 5 } },
      { name: 'Activate with Enter', action: 'custom', options: { action: 'press', key: 'Enter' } },
    ],
  },
  {
    id: 'a11y-002',
    name: 'Screen reader landmarks',
    description: 'Verify ARIA landmarks are present',
    tags: ['accessibility', 'aria'],
    priority: 'medium',
    steps: [
      commonSteps.goToHome(),
      commonSteps.assertVisible('[role="main"]'),
      commonSteps.assertVisible('[role="navigation"]'),
      commonSteps.assertVisible('[role="banner"]'),
      commonSteps.assertVisible('[role="contentinfo"]'),
    ],
  },
  {
    id: 'a11y-003',
    name: 'Color contrast',
    description: 'Verify color contrast meets WCAG standards',
    tags: ['accessibility', 'visual'],
    priority: 'medium',
    steps: [
      commonSteps.goToHome(),
      { name: 'Run axe accessibility check', action: 'custom', options: { action: 'axe', rules: ['color-contrast'] } },
    ],
  },
];

// Performance Tests
export const performanceScenarios: TestScenario[] = [
  {
    id: 'perf-001',
    name: 'Homepage load time',
    description: 'Homepage loads within acceptable time',
    tags: ['performance', 'homepage'],
    priority: 'critical',
    expectedDuration: 3000,
    steps: [
      { name: 'Start performance measurement', action: 'custom', options: { action: 'startMeasure' } },
      commonSteps.goToHome(),
      commonSteps.waitForPageLoad(),
      { name: 'End measurement', action: 'custom', options: { action: 'endMeasure', maxDuration: 3000 } },
    ],
  },
  {
    id: 'perf-002',
    name: 'Investigation list performance',
    description: 'Investigation list renders quickly with many items',
    tags: ['performance', 'investigations'],
    priority: 'high',
    expectedDuration: 2000,
    steps: [
      commonSteps.goToInvestigations(),
      { name: 'Measure render time', action: 'custom', options: { action: 'measureRender', maxDuration: 2000 } },
      { name: 'Scroll performance', action: 'scroll', options: { distance: 5000, smooth: true } },
      { name: 'FPS check', action: 'custom', options: { action: 'checkFPS', minFPS: 30 } },
    ],
  },
];

// ============================================================================
// Test Suites
// ============================================================================

export const smokeTestSuite: TestSuite = {
  name: 'Smoke Tests',
  description: 'Quick verification of critical functionality',
  scenarios: [
    homepageScenarios[0], // Homepage loads
    investigationScenarios[0], // Investigation list
    entityScenarios[0], // Entity list
    workspaceScenarios[0], // Workspace list
    searchScenarios[0], // Global search
  ],
};

export const regressionTestSuite: TestSuite = {
  name: 'Regression Tests',
  description: 'Full regression test suite',
  scenarios: [
    ...homepageScenarios,
    ...investigationScenarios,
    ...entityScenarios,
    ...workspaceScenarios,
    ...searchScenarios,
    ...accessibilityScenarios,
  ],
};

export const performanceTestSuite: TestSuite = {
  name: 'Performance Tests',
  description: 'Performance and load time tests',
  scenarios: performanceScenarios,
};

// ============================================================================
// Test Runner Helpers
// ============================================================================

export function getScenariosByTag(tag: string): TestScenario[] {
  const allScenarios = [
    ...homepageScenarios,
    ...investigationScenarios,
    ...entityScenarios,
    ...workspaceScenarios,
    ...searchScenarios,
    ...accessibilityScenarios,
    ...performanceScenarios,
  ];
  
  return allScenarios.filter(s => s.tags.includes(tag));
}

export function getScenariosByPriority(priority: TestScenario['priority']): TestScenario[] {
  const allScenarios = [
    ...homepageScenarios,
    ...investigationScenarios,
    ...entityScenarios,
    ...workspaceScenarios,
    ...searchScenarios,
    ...accessibilityScenarios,
    ...performanceScenarios,
  ];
  
  return allScenarios.filter(s => s.priority === priority);
}

export function getAllScenarios(): TestScenario[] {
  return [
    ...homepageScenarios,
    ...investigationScenarios,
    ...entityScenarios,
    ...workspaceScenarios,
    ...searchScenarios,
    ...accessibilityScenarios,
    ...performanceScenarios,
  ];
}

// Default export
export default {
  selectors,
  commonSteps,
  homepageScenarios,
  investigationScenarios,
  entityScenarios,
  workspaceScenarios,
  searchScenarios,
  accessibilityScenarios,
  performanceScenarios,
  smokeTestSuite,
  regressionTestSuite,
  performanceTestSuite,
};
