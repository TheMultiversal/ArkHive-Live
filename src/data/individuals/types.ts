// Individual profile data interface — shared by all shard files
export interface IndividualProfile {
  name: string;
  title: string;
  role: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  birthDate?: string;
  birthPlace?: string;
  deathDate?: string;
  education: string[];
  netWorth?: string;
  affiliations: { name: string; role: string; type: 'agency' | 'corporation' | 'organization' }[];
  controversies: string[];
  relatedInvestigations: { title: string; slug: string; severity: string }[];
  timeline: { date: string; event: string }[];
  socialMedia?: { platform: string; handle: string }[];
  charges?: { statute: string; description: string; category: string }[];
  sources?: { title: string; url?: string; date?: string }[];
  aliases?: string[];
  knownAssociates?: { name: string; relationship: string; href?: string }[];
}
