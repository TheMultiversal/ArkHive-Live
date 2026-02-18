import investigationsData from '@/data/investigations.json';
import entitiesData from '@/data/entities.json';
import timelineData from '@/data/timeline.json';
import type { Investigation, Entity, TimelineEvent, Affiliation } from '@/types';

// Type assertions for JSON data
const investigations = investigationsData as Investigation[];
const entities = entitiesData as {
  agencies: Entity[];
  corporations: Entity[];
  individuals: Entity[];
};
const timeline = timelineData as TimelineEvent[];

/**
 * Get all investigations
 */
export function getInvestigations(): Investigation[] {
  return investigations;
}

/**
 * Get investigation by slug
 */
export function getInvestigationBySlug(slug: string): Investigation | undefined {
  return investigations.find((inv) => inv.slug === slug);
}

/**
 * Get investigations filtered by severity
 */
export function getInvestigationsBySeverity(
  severity: Investigation['severity']
): Investigation[] {
  return investigations.filter((inv) => inv.severity === severity);
}

/**
 * Get investigations filtered by category
 */
export function getInvestigationsByCategory(category: string): Investigation[] {
  return investigations.filter((inv) => inv.category === category);
}

/**
 * Search investigations by text
 */
export function searchInvestigations(query: string): Investigation[] {
  const lowerQuery = query.toLowerCase();
  return investigations.filter(
    (inv) =>
      inv.title.toLowerCase().includes(lowerQuery) ||
      inv.summary.toLowerCase().includes(lowerQuery) ||
      inv.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get all entities of a specific type
 */
export function getEntitiesByType(type: Entity['type']): Entity[] {
  switch (type) {
    case 'agency':
      return entities.agencies;
    case 'corporation':
      return entities.corporations;
    case 'individual':
      return entities.individuals;
    default:
      return [];
  }
}

/**
 * Get all entities across all types
 */
export function getAllEntities(): Entity[] {
  return [...entities.agencies, ...entities.corporations, ...entities.individuals];
}

/**
 * Get entity by slug and type
 */
export function getEntityBySlug(slug: string, type?: Entity['type']): Entity | undefined {
  if (type) {
    return getEntitiesByType(type).find((e) => e.slug === slug);
  }
  return getAllEntities().find((e) => e.slug === slug);
}

/**
 * Get entities by risk level
 */
export function getEntitiesByRiskLevel(riskLevel: Entity['riskLevel']): Entity[] {
  return getAllEntities().filter((e) => e.riskLevel === riskLevel);
}

/**
 * Search entities by text
 */
export function searchEntities(query: string): Entity[] {
  const lowerQuery = query.toLowerCase();
  return getAllEntities().filter(
    (e) =>
      e.name.toLowerCase().includes(lowerQuery) ||
      e.description.toLowerCase().includes(lowerQuery) ||
      e.role.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all timeline events
 */
export function getTimelineEvents(): TimelineEvent[] {
  return timeline.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get timeline events for a specific investigation
 */
export function getTimelineEventsByInvestigation(
  investigationId: string
): TimelineEvent[] {
  return timeline
    .filter((event) => event.investigationId === investigationId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get entity affiliations for an investigation
 */
export function getInvestigationAffiliations(
  investigationId: string
): Affiliation[] {
  const investigation = investigations.find((inv) => inv.id === investigationId);
  return investigation?.affiliations || [];
}

/**
 * Get platform statistics
 */
export function getPlatformStats() {
  return {
    totalInvestigations: investigations.length,
    entitiesTracked: getAllEntities().length,
    documentsArchived: investigations.reduce(
      (sum, inv) => sum + inv.sources.length,
      0
    ),
    activeAlerts: investigations.filter((inv) => inv.severity === 'critical')
      .length,
    agencyCount: entities.agencies.length,
    corporationCount: entities.corporations.length,
    individualCount: entities.individuals.length,
  };
}

/**
 * Get unique categories from all investigations
 */
export function getCategories(): string[] {
  const categories = new Set(investigations.map((inv) => inv.category));
  return Array.from(categories).sort();
}

/**
 * Get unique tags from all investigations
 */
export function getAllTags(): string[] {
  const tags = new Set(investigations.flatMap((inv) => inv.tags));
  return Array.from(tags).sort();
}
