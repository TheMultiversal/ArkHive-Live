// Investigation data interface, shared by all investigation shard files

export interface InvestigationAffiliation {
  id: string;
  name: string;
  type: 'individual' | 'agency' | 'corporation' | 'organization';
  relationship: string;
  href: string;
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
}
