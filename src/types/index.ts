/**
 * Core type definitions for ArkHive platform
 * @module types
 */

// ============================================================
// Investigation Types
// ============================================================

/**
 * Represents an investigation in the platform
 * Investigations document institutional crimes and corruption
 */
export interface Investigation {
  /** Unique identifier */
  id: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Display title of the investigation */
  title: string;
  /** Optional subtitle for additional context */
  subtitle?: string;
  /** Brief summary for cards and previews */
  summary: string;
  /** Full content paragraphs */
  content: string[];
  /** Investigation category (e.g., "Government Oversight", "Corporate Fraud") */
  category: string;
  /** Severity level indicating urgency/impact */
  severity: "critical" | "high" | "medium" | "low";
  /** Publication date (ISO string) */
  date: string;
  /** Last update date (ISO string) */
  lastUpdated: string;
  /** Number of entities involved */
  entityCount: number;
  /** Optional cover image URL */
  imageUrl?: string;
  /** Tags for categorization and search */
  tags: string[];
  /** Source citations */
  sources: Source[];
  /** Related entities and connections */
  affiliations: Affiliation[];
}

/**
 * Source citation for investigations
 * Links to evidence and supporting documentation
 */
export interface Source {
  /** Unique identifier */
  id: string;
  /** Display title of the source */
  title: string;
  /** URL to the source material */
  url: string;
  /** Type of source material */
  type: "document" | "article" | "video" | "report" | "archive" | "other";
  /** Publication or access date */
  date?: string;
  /** Brief description of the source */
  description?: string;
}

// ============================================================
// Entity Types
// ============================================================

/**
 * Represents an entity (person, organization, agency, or corporation)
 * involved in investigations
 */
export interface Entity {
  /** Unique identifier */
  id: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Display name */
  name: string;
  /** Category of entity */
  type: "agency" | "corporation" | "individual" | "organization";
  /** Brief description */
  description: string;
  /** Role in investigations */
  role: string;
  /** Number of investigations involving this entity */
  investigationCount: number;
  /** Risk assessment level */
  riskLevel: "extreme" | "high" | "moderate" | "low";
  /** Optional profile image URL */
  imageUrl?: string;
  /** Extended details based on entity type */
  details?: EntityDetails;
  /** Related entities and connections */
  affiliations: Affiliation[];
  /** IDs of related investigations */
  investigations: string[];
}

/**
 * Extended details for entities
 * Contains type-specific information based on entity category
 */
export interface EntityDetails {
  // For agencies
  /** Geographic or legal jurisdiction */
  jurisdiction?: string;
  /** Parent department or ministry */
  department?: string;
  
  // For corporations
  /** Business sector/industry */
  industry?: string;
  /** Corporate headquarters location */
  headquarters?: string;
  /** Year founded */
  founded?: string;
  
  // For individuals
  /** Current job title */
  title?: string;
  /** Employment history */
  positions?: Position[];
  
  // Common
  /** Official website URL */
  website?: string;
  /** Additional notes or context */
  notes?: string[];
}

/**
 * Employment or role position for individuals
 */
export interface Position {
  /** Job title */
  title: string;
  /** Organization name */
  organization: string;
  /** Start date (ISO string) */
  startDate?: string;
  /** End date (ISO string) */
  endDate?: string;
  /** Whether this is their current position */
  current?: boolean;
}

// ============================================================
// Affiliation/Connection Types
// ============================================================

/**
 * Represents a connection between entities or investigations
 * Used to map relationships in the network
 */
export interface Affiliation {
  /** Unique identifier */
  id: string;
  /** Display name of the connected entity */
  name: string;
  /** Type of connected entity */
  type: "agency" | "corporation" | "individual" | "organization" | "document";
  /** Description of the relationship */
  relationship: string;
  /** Link to the connected entity's page */
  href: string;
  /** Strength/type of connection */
  strength?: "direct" | "indirect" | "financial" | "regulatory" | "political";
}

// ============================================================
// Timeline Types
// ============================================================

/**
 * Represents an event on the investigation timeline
 */
export interface TimelineEvent {
  /** Unique identifier */
  id: string;
  /** Event date (ISO string) */
  date: string;
  /** Event title */
  title: string;
  /** Event description */
  description: string;
  /** Related investigation ID */
  investigationId?: string;
  /** Related entity IDs */
  entityIds?: string[];
  /** Type of timeline event */
  type: "event" | "document" | "action" | "discovery";
}

// ============================================================
// Stats Types
// ============================================================

/**
 * Platform-wide statistics
 * Used for dashboard and overview displays
 */
export interface PlatformStats {
  /** Total number of investigations */
  totalInvestigations: number;
  /** Number of tracked entities */
  entitiesTracked: number;
  /** Number of archived documents */
  documentsArchived: number;
  /** Number of active alerts */
  activeAlerts: number;
  /** Count of government agencies */
  agencyCount: number;
  /** Count of corporations */
  corporationCount: number;
  /** Count of individuals */
  individualCount: number;
}

// ============================================================
// Submission Types
// ============================================================

/**
 * User submission for tips or evidence
 */
export interface Submission {
  /** Unique identifier */
  id: string;
  /** Submission subject line */
  subject: string;
  /** Category of submission */
  category: string;
  /** Detailed description */
  description: string;
  /** Related entities mentioned */
  entities: string;
  /** Source references */
  sources: string;
  /** Optional contact information */
  contact?: string;
  /** Submission timestamp (ISO string) */
  submittedAt: string;
  /** Current review status */
  status: "pending" | "reviewing" | "researching" | "published" | "rejected";
}
