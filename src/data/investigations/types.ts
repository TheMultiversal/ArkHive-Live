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
}
