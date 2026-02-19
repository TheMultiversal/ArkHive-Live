/**
 * Severity level configuration for investigations
 */
export const SEVERITY_CONFIG = {
  critical: {
    label: '⚠ CRITICAL',
    color: 'bg-blood-900/50 text-blood-500 border-blood-700',
    description: 'Immediate threat to public safety',
  },
  high: {
    label: 'HIGH THREAT',
    color: 'bg-blood-900/40 text-blood-500 border-blood-700',
    description: 'Significant documented harm',
  },
  medium: {
    label: 'DOCUMENTED',
    color: 'bg-blood-950/40 text-blood-600 border-blood-800',
    description: 'Verified concerns requiring attention',
  },
  low: {
    label: 'ARCHIVED',
    color: 'bg-zinc-900/50 text-zinc-400 border-zinc-700',
    description: 'Historical or resolved issues',
  },
} as const;

/**
 * Risk level configuration for entities
 */
export const RISK_CONFIG = {
  extreme: {
    label: 'EXTREME THREAT',
    color: 'text-blood-500 bg-blood-900/50 border-blood-700',
    description: 'Direct involvement in documented harm',
  },
  high: {
    label: 'HIGH THREAT',
    color: 'text-blood-600 bg-blood-900/30 border-blood-700',
    description: 'Significant pattern of harmful actions',
  },
  moderate: {
    label: 'DOCUMENTED',
    color: 'text-zinc-400 bg-zinc-900/50 border-zinc-600',
    description: 'Connection to investigations under review',
  },
  low: {
    label: 'ARCHIVED',
    color: 'text-zinc-500 bg-zinc-900/30 border-zinc-700',
    description: 'Minor or historical involvement',
  },
} as const;

/**
 * Entity type configuration
 */
export const ENTITY_TYPES = {
  agency: {
    label: 'Government Agency',
    pluralLabel: 'Government Agencies',
    path: '/entities/agencies',
  },
  corporation: {
    label: 'Corporation',
    pluralLabel: 'Corporations',
    path: '/entities/corporations',
  },
  individual: {
    label: 'Individual',
    pluralLabel: 'Individuals',
    path: '/entities/individuals',
  },
  organization: {
    label: 'Organization',
    pluralLabel: 'Organizations',
    path: '/entities/organizations',
  },
} as const;

/**
 * Evidence type configuration
 */
export const EVIDENCE_TYPES = {
  document: { label: 'Document', icon: 'FileText' },
  image: { label: 'Image', icon: 'Image' },
  video: { label: 'Video', icon: 'Video' },
  audio: { label: 'Audio', icon: 'Mic' },
  link: { label: 'Link', icon: 'Link2' },
  note: { label: 'Note', icon: 'StickyNote' },
  timeline: { label: 'Timeline', icon: 'Calendar' },
} as const;

/**
 * Verification status configuration
 */
export const VERIFICATION_STATUS = {
  verified: {
    label: 'Verified',
    color: 'text-emerald-400/70 bg-emerald-500/10',
    icon: 'Check',
  },
  disputed: {
    label: 'Disputed',
    color: 'text-amber-400/70 bg-amber-500/10',
    icon: 'AlertTriangle',
  },
  pending: {
    label: 'Pending',
    color: 'text-white/40 bg-white/5',
    icon: 'Clock',
  },
  unverified: {
    label: 'Unverified',
    color: 'text-white/30 bg-white/5',
    icon: 'HelpCircle',
  },
} as const;

/**
 * Investigation categories
 */
export const INVESTIGATION_CATEGORIES = [
  'Public Health',
  'Environmental',
  'Surveillance',
  'Civil Liberties',
  'Corporate',
  'Government',
  'Medical',
  'Financial',
  'Military',
  'Other',
] as const;

/**
 * Paranoia trigger words for glitch effects
 */
export const PARANOIA_TRIGGER_WORDS = [
  'government', 'death', 'cover-up', 'coverup', 'conspiracy', 'kill', 'killed',
  'murder', 'vaccine', 'classified', 'secret', 'hidden', 'truth', 'lies',
  'corruption', 'fda', 'cdc', 'cia', 'fbi', 'nsa', 'control', 'surveillance',
  'experiment', 'poison', 'toxic', 'cancer', 'radiation', 'fluoride',
] as const;

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { href: '/investigations', label: 'Investigations' },
  { href: '/entities', label: 'Entities' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/workspaces', label: 'Workspaces' },
  { href: '/about', label: 'About' },
  { href: '/submit', label: 'Submit' },
] as const;

/**
 * Site metadata
 */
export const SITE_CONFIG = {
  name: 'ArkHive',
  shortName: 'ArkHive',
  description: 'An investigative platform exposing the truth about government, corporate, and institutional actions affecting public health and safety.',
  url: 'https://arkhive.org',
  author: 'ArkHive Team',
  keywords: ['investigation', 'government', 'transparency', 'public health', 'corporate accountability'],
} as const;
