// Investigation data interface, shared by all investigation shard files

export interface MoneyTransaction {
  date: string;
  from: string;
  to: string;
  amount: string;
  purpose: string;
  documented: boolean;
}

export interface InvestigationAffiliation {
  id: string;
  name: string;
  type: 'individual' | 'agency' | 'corporation' | 'organization';
  relationship: string;
  href?: string;
}

export interface InvestigationSource {
  title: string;
  url: string;
  type: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  type?: 'critical' | 'legal' | 'political' | 'financial' | 'default';
}

/** Tracks where money/wealth ended up after crimes  -  "Where is the Money Now" */
export interface WealthDestination {
  /** Name of current holder or entity */
  name: string;
  /** Relationship to original perpetrator or crime */
  relationship: string;
  /** How wealth was transferred or concealed */
  transferMethod: string;
  /** Estimated current value */
  estimatedValue?: string;
  /** Legal entities involved (trusts, LLCs, foundations) */
  legalEntities?: string[];
  /** Available legal mechanisms to pursue recovery */
  recoveryMechanisms?: string[];
  /** Whether restitution was ordered and status */
  restitutionStatus?: 'paid' | 'partial' | 'unpaid' | 'evaded' | 'unknown';
  /** Original amount ordered vs collected */
  orderedAmount?: string;
  collectedAmount?: string;
}

export type ConvictionStatus = 'convicted' | 'indicted' | 'charged' | 'acquitted' | 'pardoned' | 'pending' | 'settled' | 'appealing' | 'incarcerated' | 'released';

export interface Defendant {
  name: string;
  role: string;
  status: ConvictionStatus;
  charges?: string[];
  sentence?: string;
  fine?: string;
  restitution?: string;
  indictmentDate?: string;
  convictionDate?: string;
  releaseDate?: string;
  pardonDate?: string;
  pardonedBy?: string;
  appealStatus?: 'pending' | 'granted' | 'denied' | 'withdrawn';
  notes?: string;
  imageUrl?: string;
}

export interface InvestigationData {
  title: string;
  subtitle: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  date: string;
  lastUpdated: string;
  // Three-tier date system (optional for backward compatibility)
  eventOriginDate?: string;
  lastActivityDate?: string;
  pageUpdatedDate?: string;
  summary: string;
  content: string[];
  tags: string[];
  sources: InvestigationSource[];
  affiliations: InvestigationAffiliation[];
  // Timeline events for sidebar display
  timeline?: TimelineEvent[];
  // Money trail data for financial flow visualization
  moneyTrail?: MoneyTransaction[];
  // Related federal statutes
  statutes?: { code: string; description?: string }[];
  // Defendants tracked for conviction data
  defendants?: Defendant[];
  // "Where is the Money Now"  -  tracks current location of wealth from crimes
  whereIsTheMoneyNow?: WealthDestination[];
  // "Scrubbed from the Internet"  -  information that has been removed, suppressed, or destroyed
  scrubbedFromInternet?: ScrubbedItem[];
}

/** Tracks information that has been removed, suppressed, classified, or destroyed */
export interface ScrubbedItem {
  /** What was removed or suppressed */
  title: string;
  /** Category of suppression */
  type: 'removed' | 'redacted' | 'classified' | 'sealed' | 'deleted' | 'destroyed' | 'gagged' | 'buried';
  /** Description of what was scrubbed and its significance */
  description: string;
  /** Original source or location if known */
  originalSource?: string;
  /** When it was discovered missing or removed */
  dateRemoved?: string;
  /** Who is responsible for the removal or suppression */
  removedBy?: string;
  /** Archive or cached version URL if available */
  archiveUrl?: string;
  /** Whether it has been recovered or preserved */
  recoveryStatus: 'recovered' | 'partial' | 'lost' | 'preserved' | 'ongoing';
}
