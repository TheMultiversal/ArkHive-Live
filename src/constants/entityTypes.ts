/**
 * Entity type definitions
 * Represents the different categories of entities in investigations
 */

export const ENTITY_TYPES = ['agency', 'corporation', 'individual', 'organization'] as const;

export type EntityType = (typeof ENTITY_TYPES)[number];

/**
 * Configuration for each entity type including labels, icons, and routes
 */
export const ENTITY_CONFIG: Record<EntityType, {
  label: string;
  pluralLabel: string;
  description: string;
  route: string;
  iconName: string;
}> = {
  agency: {
    label: 'Agency',
    pluralLabel: 'Agencies',
    description: 'Government agencies and regulatory bodies',
    route: '/entities/agencies',
    iconName: 'Landmark',
  },
  corporation: {
    label: 'Corporation',
    pluralLabel: 'Corporations',
    description: 'Companies and business entities',
    route: '/entities/corporations',
    iconName: 'Building2',
  },
  individual: {
    label: 'Individual',
    pluralLabel: 'Individuals',
    description: 'Key persons of interest',
    route: '/entities/individuals',
    iconName: 'Users',
  },
  organization: {
    label: 'Organization',
    pluralLabel: 'Organizations',
    description: 'Non-governmental organizations and groups',
    route: '/entities',
    iconName: 'Network',
  },
};

/**
 * Color mappings for entity types - used for UI styling
 */
export const ENTITY_COLORS: Record<EntityType, {
  text: string;
  bg: string;
  border: string;
}> = {
  agency: {
    text: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/50',
  },
  corporation: {
    text: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/50',
  },
  individual: {
    text: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/50',
  },
  organization: {
    text: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/50',
  },
};
