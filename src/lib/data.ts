import investigationDatabase from '@/data/investigations';
import individualData from '@/data/individuals';
import agencyData from '@/data/agencies';
import corporationData from '@/data/corporations';
import organizationData from '@/data/organizations';
import type { Investigation, Entity, TimelineEvent, Affiliation } from '@/types';

// Convert the investigation database (Record<string, InvestigationData>) into Investigation[] 
const investigations: Investigation[] = Object.entries(investigationDatabase).map(([slug, inv]) => ({
 id: slug,
 slug,
 title: inv.title,
 subtitle: inv.subtitle || '',
 summary: inv.summary,
 content: inv.content || [],
 category: inv.category,
 severity: inv.severity,
 date: inv.date,
 lastUpdated: inv.lastUpdated || inv.date,
 entityCount: inv.affiliations?.length || 0,
 tags: inv.tags || [],
 sources: (inv.sources || []).map((s, i) => ({
  id: `src-${slug}-${i}`,
  title: s.title,
  url: s.url,
  type: (s.type?.toLowerCase() || 'other') as 'document' | 'article' | 'video' | 'report' | 'archive' | 'other',
 })),
 affiliations: (inv.affiliations || []).map((a) => ({
  id: a.id,
  name: a.name,
  type: a.type as 'individual' | 'agency' | 'corporation' | 'organization',
  relationship: a.relationship,
  href: a.href || `/entities/${a.type === 'individual' ? 'individuals' : a.type === 'agency' ? 'agencies' : a.type === 'corporation' ? 'corporations' : 'organizations'}/${a.id}`,
  strength: 'direct' as const,
 })),
}));

// Convert entity data records into Entity[]
function recordToEntities(record: Record<string, unknown>, type: Entity['type']): Entity[] {
 return Object.entries(record).map(([slug, data]) => {
  const d = data as Record<string, unknown>;
  return {
   id: (d.id as string) || slug,
   slug,
   name: (d.name as string) || slug,
   type,
   description: (d.description as string) || '',
   role: (d.role as string) || (d.type as string) || type,
   investigationCount: (d.investigationCount as number) || 0,
   riskLevel: ((d.riskLevel as string) || 'moderate') as Entity['riskLevel'],
   affiliations: [],
   investigations: [],
  };
 });
}

const agencies = recordToEntities(agencyData, 'agency');
const corporations = recordToEntities(corporationData, 'corporation');
const individuals = recordToEntities(individualData, 'individual');
// organizations don't have a separate unified type yet — adapt similarly
const organizations = recordToEntities(organizationData || {}, 'organization');

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
 return agencies;
 case 'corporation':
 return corporations;
 case 'individual':
 return individuals;
 case 'organization':
 return organizations;
 default:
 return [];
 }
}

/**
 * Get all entities across all types
 */
export function getAllEntities(): Entity[] {
 return [...agencies, ...corporations, ...individuals, ...organizations];
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
 // Timeline derived from investigations
 const events: TimelineEvent[] = investigations.map((inv) => ({
  id: inv.id,
  date: inv.date,
  sortDate: inv.date,
  title: inv.title,
  description: inv.summary,
  category: inv.category,
  severity: inv.severity,
  slug: inv.slug,
  tags: inv.tags,
  investigationId: inv.id,
  type: 'event' as const,
 }));
 return events.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
 );
}

/**
 * Get timeline events for a specific investigation
 */
export function getTimelineEventsByInvestigation(
 investigationId: string
): TimelineEvent[] {
 return getTimelineEvents()
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
 agencyCount: agencies.length,
 corporationCount: corporations.length,
 individualCount: individuals.length,
 organizationCount: organizations.length,
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
