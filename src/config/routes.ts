// ============================================================
// Routes Configuration
// Application route definitions and URL helpers
// ============================================================

// ============================================================
// Route Definitions
// ============================================================

export const ROUTES = {
  // Public routes
  home: '/',
  about: '/about',
  timeline: '/timeline',
  submit: '/submit',

  // Investigations
  investigations: '/investigations',
  investigation: (slug: string) => `/investigations/${slug}`,

  // Entities
  entities: '/entities',
  agencies: '/entities/agencies',
  agency: (slug: string) => `/entities/agencies/${slug}`,
  corporations: '/entities/corporations',
  corporation: (slug: string) => `/entities/corporations/${slug}`,
  individuals: '/entities/individuals',
  individual: (slug: string) => `/entities/individuals/${slug}`,

  // Workspaces
  workspaces: '/workspaces',
  workspace: (id: string) => `/workspaces/${id}`,
  createWorkspace: '/workspaces/create',

  // Settings
  settings: '/settings',
  settingsProfile: '/settings/profile',
  settingsAccount: '/settings/account',
  settingsSecurity: '/settings/security',
  settingsNotifications: '/settings/notifications',

  // Auth
  login: '/auth/login',
  register: '/auth/register',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',

  // API routes
  api: {
    investigations: '/api/investigations',
    entities: '/api/entities',
    workspaces: '/api/workspaces',
    documents: '/api/documents',
    auth: '/api/auth',
    users: '/api/users',
    notifications: '/api/notifications',
    search: '/api/search',
    upload: '/api/upload',
  },
} as const;

// ============================================================
// Route Metadata
// ============================================================

export interface RouteMetadata {
  title: string;
  description: string;
  requiresAuth?: boolean;
  roles?: string[];
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'Home',
    description: 'ArkHive - Investigative Journalism Platform',
  },
  '/about': {
    title: 'About',
    description: 'Learn about ArkHive and our mission',
  },
  '/timeline': {
    title: 'Timeline',
    description: 'Investigation timeline and history',
  },
  '/submit': {
    title: 'Submit Tip',
    description: 'Submit anonymous tips and information',
  },
  '/investigations': {
    title: 'Investigations',
    description: 'Browse all investigations',
  },
  '/entities': {
    title: 'Entities',
    description: 'Browse all entities under investigation',
  },
  '/entities/agencies': {
    title: 'Agencies',
    description: 'Government agencies and regulatory bodies',
  },
  '/entities/corporations': {
    title: 'Corporations',
    description: 'Corporate entities under investigation',
  },
  '/entities/individuals': {
    title: 'Individuals',
    description: 'Key individuals involved in investigations',
  },
  '/workspaces': {
    title: 'Workspaces',
    description: 'Collaborative investigation workspaces',
    requiresAuth: true,
  },
  '/workspaces/create': {
    title: 'Create Workspace',
    description: 'Create a new investigation workspace',
    requiresAuth: true,
  },
  '/settings': {
    title: 'Settings',
    description: 'Manage your account settings',
    requiresAuth: true,
  },
  '/auth/login': {
    title: 'Login',
    description: 'Sign in to your ArkHive account',
  },
  '/auth/register': {
    title: 'Register',
    description: 'Create a new ArkHive account',
  },
};

// ============================================================
// Navigation Items
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  requiresAuth?: boolean;
  badge?: string | number;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: ROUTES.home, icon: 'home' },
  { label: 'Investigations', href: ROUTES.investigations, icon: 'search' },
  {
    label: 'Entities',
    href: ROUTES.entities,
    icon: 'building',
    children: [
      { label: 'Agencies', href: ROUTES.agencies },
      { label: 'Corporations', href: ROUTES.corporations },
      { label: 'Individuals', href: ROUTES.individuals },
    ],
  },
  { label: 'Timeline', href: ROUTES.timeline, icon: 'calendar' },
  { label: 'Workspaces', href: ROUTES.workspaces, icon: 'users', requiresAuth: true },
  { label: 'About', href: ROUTES.about, icon: 'info' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Investigations', href: ROUTES.investigations },
  { label: 'About', href: ROUTES.about },
  { label: 'Submit Tip', href: ROUTES.submit },
];

// ============================================================
// URL Helpers
// ============================================================

/**
 * Build URL with query parameters
 */
export function buildUrl(
  base: string,
  params?: Record<string, string | number | boolean | undefined>
): string {
  if (!params) return base;

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${base}?${queryString}` : base;
}

/**
 * Parse URL query parameters
 */
export function parseQueryParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URL(url, 'http://localhost').searchParams;
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

/**
 * Check if route requires authentication
 */
export function isProtectedRoute(path: string): boolean {
  const metadata = ROUTE_METADATA[path];
  return metadata?.requiresAuth ?? false;
}

/**
 * Get route metadata
 */
export function getRouteMetadata(path: string): RouteMetadata | undefined {
  // Try exact match first
  if (ROUTE_METADATA[path]) {
    return ROUTE_METADATA[path];
  }

  // Try pattern match for dynamic routes
  for (const [route, metadata] of Object.entries(ROUTE_METADATA)) {
    const pattern = route.replace(/\[.*?\]/g, '[^/]+');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(path)) {
      return metadata;
    }
  }

  return undefined;
}

/**
 * Generate breadcrumb items for a path
 */
export function generateBreadcrumbs(
  path: string
): Array<{ label: string; href: string }> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: Array<{ label: string; href: string }> = [];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const metadata = getRouteMetadata(currentPath);
    breadcrumbs.push({
      label: metadata?.title || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath,
    });
  }

  return breadcrumbs;
}
