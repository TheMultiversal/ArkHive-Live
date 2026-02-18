// ============================================================
// Application Routes Configuration
// ============================================================

export const ROUTES = {
  // Main Pages
  HOME: '/',
  ABOUT: '/about',
  SUBMIT: '/submit',
  TIMELINE: '/timeline',

  // Investigations
  INVESTIGATIONS: '/investigations',
  INVESTIGATION: (slug: string) => `/investigations/${slug}`,

  // Entities
  ENTITIES: '/entities',
  AGENCIES: '/entities/agencies',
  AGENCY: (slug: string) => `/entities/agencies/${slug}`,
  CORPORATIONS: '/entities/corporations',
  CORPORATION: (slug: string) => `/entities/corporations/${slug}`,
  INDIVIDUALS: '/entities/individuals',
  INDIVIDUAL: (slug: string) => `/entities/individuals/${slug}`,

  // Workspaces
  WORKSPACES: '/workspaces',
  WORKSPACE: (id: string) => `/workspaces/${id}`,
  WORKSPACE_CREATE: '/workspaces/create',

  // User Pages
  ANALYTICS: '/analytics',
  AUDIT: '/audit',
  TAGS: '/tags',
  TEAM: '/team',
  ACTIVITY: '/activity',
  SEARCH: '/search',
  NOTIFICATIONS: '/notifications',
  BOOKMARKS: '/bookmarks',
  RECENT: '/recent',
  DRAFTS: '/drafts',
  ARCHIVES: '/archives',
  SETTINGS: '/settings',

  // API Routes
  API: {
    INVESTIGATIONS: '/api/investigations',
    ENTITIES: '/api/entities',
    DOCUMENTS: '/api/documents',
    WORKSPACES: '/api/workspaces',
    ANALYTICS: '/api/analytics',
    AUDIT: '/api/audit',
    TAGS: '/api/tags',
    TEAMS: '/api/teams',
    ACTIVITY: '/api/activity',
    EXPORT: '/api/export',
    IMPORT: '/api/import',
    AI: '/api/ai',
    WEBHOOKS: '/api/webhooks',
    INTEGRATIONS: '/api/integrations',
    SEARCH: '/api/search',
  },
} as const;

// ============================================================
// Navigation Configuration
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
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Investigations', href: ROUTES.INVESTIGATIONS },
  {
    label: 'Entities',
    href: ROUTES.ENTITIES,
    children: [
      { label: 'All Entities', href: ROUTES.ENTITIES },
      { label: 'Agencies', href: ROUTES.AGENCIES },
      { label: 'Corporations', href: ROUTES.CORPORATIONS },
      { label: 'Individuals', href: ROUTES.INDIVIDUALS },
    ],
  },
  { label: 'Workspaces', href: ROUTES.WORKSPACES },
  { label: 'Timeline', href: ROUTES.TIMELINE },
  { label: 'About', href: ROUTES.ABOUT },
];

export const USER_NAV: NavItem[] = [
  { label: 'Dashboard', href: ROUTES.ANALYTICS, icon: 'chart' },
  { label: 'Notifications', href: ROUTES.NOTIFICATIONS, icon: 'bell' },
  { label: 'Bookmarks', href: ROUTES.BOOKMARKS, icon: 'bookmark' },
  { label: 'Recent', href: ROUTES.RECENT, icon: 'clock' },
  { label: 'Drafts', href: ROUTES.DRAFTS, icon: 'file-edit' },
  { label: 'Archives', href: ROUTES.ARCHIVES, icon: 'archive' },
  { label: 'Settings', href: ROUTES.SETTINGS, icon: 'settings' },
];

export const ADMIN_NAV: NavItem[] = [
  { label: 'Analytics', href: ROUTES.ANALYTICS, icon: 'chart' },
  { label: 'Team', href: ROUTES.TEAM, icon: 'users' },
  { label: 'Audit Log', href: ROUTES.AUDIT, icon: 'shield' },
  { label: 'Tags', href: ROUTES.TAGS, icon: 'tag' },
  { label: 'Activity', href: ROUTES.ACTIVITY, icon: 'activity' },
];

// ============================================================
// Breadcrumb Configuration
// ============================================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    
    // Handle dynamic segments
    if (segment.startsWith('[') && segment.endsWith(']')) {
      continue;
    }

    // Format label
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  }

  // Remove href from last item (current page)
  if (breadcrumbs.length > 1) {
    delete breadcrumbs[breadcrumbs.length - 1].href;
  }

  return breadcrumbs;
}

// ============================================================
// Route Helpers
// ============================================================

export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(href);
}

export function getEntityRoute(type: string, slug: string): string {
  switch (type) {
    case 'agency':
      return ROUTES.AGENCY(slug);
    case 'corporation':
      return ROUTES.CORPORATION(slug);
    case 'individual':
      return ROUTES.INDIVIDUAL(slug);
    default:
      return `${ROUTES.ENTITIES}/${slug}`;
  }
}

export function parseRouteParams(pathname: string): Record<string, string> {
  const params: Record<string, string> = {};
  const segments = pathname.split('/').filter(Boolean);

  // Extract common params
  if (segments[0] === 'investigations' && segments[1]) {
    params.slug = segments[1];
  }
  if (segments[0] === 'entities' && segments[2]) {
    params.type = segments[1];
    params.slug = segments[2];
  }
  if (segments[0] === 'workspaces' && segments[1]) {
    params.id = segments[1];
  }

  return params;
}

// ============================================================
// API Route Builders
// ============================================================

export function buildApiUrl(
  endpoint: string,
  params?: Record<string, string | number | boolean | undefined>
): string {
  const url = new URL(endpoint, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

export const api = {
  investigations: {
    list: (params?: Record<string, string | number>) => 
      buildApiUrl(ROUTES.API.INVESTIGATIONS, params),
    get: (id: string) => 
      buildApiUrl(ROUTES.API.INVESTIGATIONS, { id }),
    getBySlug: (slug: string) => 
      buildApiUrl(ROUTES.API.INVESTIGATIONS, { slug }),
  },
  entities: {
    list: (params?: Record<string, string | number>) => 
      buildApiUrl(ROUTES.API.ENTITIES, params),
    get: (id: string) => 
      buildApiUrl(ROUTES.API.ENTITIES, { id }),
    getBySlug: (slug: string) => 
      buildApiUrl(ROUTES.API.ENTITIES, { slug }),
  },
  documents: {
    list: (params?: Record<string, string | number>) => 
      buildApiUrl(ROUTES.API.DOCUMENTS, params),
    get: (id: string) => 
      buildApiUrl(ROUTES.API.DOCUMENTS, { id }),
  },
  workspaces: {
    list: (params?: Record<string, string | number>) => 
      buildApiUrl(ROUTES.API.WORKSPACES, params),
    get: (id: string) => 
      buildApiUrl(ROUTES.API.WORKSPACES, { id }),
  },
  search: (query: string, params?: Record<string, string | number>) => 
    buildApiUrl(ROUTES.API.SEARCH, { q: query, ...params }),
};

export default ROUTES;
