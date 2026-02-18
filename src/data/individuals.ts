// Individual profile data interface
export interface IndividualProfile {
  name: string;
  title: string;
  role: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  birthDate?: string;
  birthPlace?: string;
  education: string[];
  netWorth?: string;
  affiliations: { name: string; role: string; type: 'agency' | 'corporation' | 'organization' }[];
  controversies: string[];
  relatedInvestigations: { title: string; slug: string; severity: string }[];
  timeline: { date: string; event: string }[];
  socialMedia?: { platform: string; handle: string }[];
  // Extended fields for comprehensive profiles
  charges?: { statute: string; description: string; category: string }[];
  sources?: { title: string; url?: string; date?: string }[];
  aliases?: string[];
  knownAssociates?: { name: string; relationship: string; href?: string }[];
}

// This file will be dynamically populated from the page.tsx data
// For now, re-export from the original location to avoid breaking changes
