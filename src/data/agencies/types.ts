// Agency profile data interface, shared by all agency shard files
export interface AgencyProfile {
  id: string;
  slug: string;
  name: string;
  type: 'agency';
  description: string;
  role: string;
  investigationCount: number;
  riskLevel: 'extreme' | 'high' | 'moderate' | 'low';
  imageUrl?: string;
}
