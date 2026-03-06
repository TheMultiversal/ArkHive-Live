// Corporation profile data interface, shared by all corporation shard files
export interface CorporationProfile {
  id: string;
  slug: string;
  name: string;
  type: 'corporation';
  description: string;
  role: string;
  investigationCount: number;
  riskLevel: 'extreme' | 'high' | 'moderate' | 'low';
  imageUrl?: string;
}
