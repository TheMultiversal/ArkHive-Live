// Organization profile data interface, shared by all organization shard files
export interface OrganizationProfile {
  name: string;
  slug: string;
  type: string;
  description: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  members: string;
  id?: string;
}
