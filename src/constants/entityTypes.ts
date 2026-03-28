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
 text: 'text-red-500',
 bg: 'bg-red-500/10',
 border: 'border-red-500/50',
 },
 corporation: {
 text: 'text-red-400',
 bg: 'bg-red-400/10',
 border: 'border-red-400/50',
 },
 individual: {
 text: 'text-red-300',
 bg: 'bg-red-300/10',
 border: 'border-red-300/50',
 },
 organization: {
 text: 'text-red-200/60',
 bg: 'bg-red-200/5',
 border: 'border-red-200/30',
 },
};
