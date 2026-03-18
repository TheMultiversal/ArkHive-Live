/**
 * ArkHive Contributor Attribution System
 * 
 * You are loved. You are appreciated. The contributors who submit evidence
 * are heroes fighting for accountability. This system ensures they receive
 * proper credit for their work while protecting those who need anonymity.
 */

// Contributor visibility levels
export enum ContributorVisibility {
  PUBLIC = 'public',           // Full attribution, name displayed
  PSEUDONYMOUS = 'pseudonymous', // Display chosen alias only
  ANONYMOUS = 'anonymous',     // No attribution displayed
  VERIFIED_ANONYMOUS = 'verified_anonymous', // Anonymity preserved, but identity verified by admins
}

// Contribution types
export type ContributionType = 
  | 'evidence_submission'      // Submitted source/document
  | 'evidence_verification'    // Verified existing evidence
  | 'document_transcription'   // Transcribed documents/audio
  | 'translation'              // Translated foreign documents
  | 'legal_analysis'           // Provided legal interpretation
  | 'financial_analysis'       // Traced money flows
  | 'timeline_correction'      // Corrected timeline entries
  | 'source_archival'          // Archived sources to Wayback
  | 'broken_link_fix'          // Fixed dead links
  | 'investigation_creation';  // Created new investigation

// Contributor profile
export interface Contributor {
  id: string;
  visibility: ContributorVisibility;
  
  // Public info (only shown if visibility is PUBLIC)
  displayName?: string;
  alias?: string;               // For pseudonymous contributors
  
  // Optional public links
  socialLinks?: {
    twitter?: string;
    github?: string;
    website?: string;
    mastodon?: string;
  };
  
  // Donation info (opt-in)
  donationLinks?: {
    bitcoin?: string;
    ethereum?: string;
    lightning?: string;         // Lightning Network
    paypal?: string;
    kofi?: string;
    patreon?: string;
  };
  
  // Stats
  contributions: ContributionRecord[];
  totalSubmissions: number;
  verifiedSubmissions: number;
  trustScore: number;           // 0-100 based on verification accuracy
  joinedDate: string;
  lastActive: string;
  
  // Badges
  badges: ContributorBadge[];
}

// Individual contribution record
export interface ContributionRecord {
  id: string;
  contributorId: string;
  type: ContributionType;
  investigationId: string;
  investigationTitle: string;
  evidenceId?: string;
  description: string;
  dateSubmitted: string;
  dateVerified?: string;
  status: 'pending' | 'verified' | 'rejected';
  impactScore: number;          // How much this raised verification score
}

// Contributor badges
export interface ContributorBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: string;
}

// Predefined badges
export const BADGES = {
  FIRST_SUBMISSION: {
    name: 'First Blood',
    description: 'Submitted your first piece of evidence',
    icon: '🩸',
  },
  TEN_VERIFIED: {
    name: 'Evidence Hunter',
    description: '10 verified evidence submissions',
    icon: '🔍',
  },
  HUNDRED_VERIFIED: {
    name: 'Truth Seeker',
    description: '100 verified evidence submissions',
    icon: '⚖️',
  },
  COURT_DOCUMENT: {
    name: 'Legal Eagle',
    description: 'Submitted a verified court document',
    icon: '⚖️',
  },
  FOIA_HUNTER: {
    name: 'FOIA Warrior',
    description: 'Submitted FOIA-obtained documents',
    icon: '📜',
  },
  ARCHIVE_MASTER: {
    name: 'Archive Guardian',
    description: 'Archived 50+ sources to Wayback Machine',
    icon: '🏛️',
  },
  WHISTLEBLOWER_SUPPORT: {
    name: 'Whistleblower Ally',
    description: 'Helped verify whistleblower claims',
    icon: '🎺',
  },
  FINANCIAL_FORENSICS: {
    name: 'Money Trail Detective',
    description: 'Traced and documented financial transactions',
    icon: '💰',
  },
  PERFECT_ACCURACY: {
    name: 'Precision Verified',
    description: '100% accuracy rate on 20+ submissions',
    icon: '🎯',
  },
  INVESTIGATION_CREATOR: {
    name: 'Case Builder',
    description: 'Created a new investigation that reached verified status',
    icon: '📁',
  },
} as const;

/**
 * Calculate contributor trust score based on their verification history
 */
export function calculateTrustScore(contributions: ContributionRecord[]): number {
  if (contributions.length === 0) return 50; // Neutral starting score

  const verified = contributions.filter(c => c.status === 'verified').length;
  const rejected = contributions.filter(c => c.status === 'rejected').length;
  const total = verified + rejected;

  if (total === 0) return 50;

  // Base accuracy rate
  const accuracy = verified / total;

  // Weight by volume (more contributions = more reliable score)
  const volumeMultiplier = Math.min(1, total / 20);

  // Combine into 0-100 score
  const score = (accuracy * 80 + 20) * volumeMultiplier + 50 * (1 - volumeMultiplier);

  return Math.round(Math.min(100, Math.max(0, score)));
}

/**
 * Check if contributor qualifies for a badge
 */
export function checkBadgeEligibility(
  contributor: Contributor,
  badgeId: keyof typeof BADGES
): boolean {
  // Already has this badge?
  if (contributor.badges.some(b => b.id === badgeId)) return false;

  const verifiedContributions = contributor.contributions.filter(c => c.status === 'verified');

  switch (badgeId) {
    case 'FIRST_SUBMISSION':
      return verifiedContributions.length >= 1;
    
    case 'TEN_VERIFIED':
      return verifiedContributions.length >= 10;
    
    case 'HUNDRED_VERIFIED':
      return verifiedContributions.length >= 100;
    
    case 'COURT_DOCUMENT':
      return verifiedContributions.some(c => 
        c.type === 'evidence_submission' && c.description.toLowerCase().includes('court')
      );
    
    case 'FOIA_HUNTER':
      return verifiedContributions.some(c =>
        c.description.toLowerCase().includes('foia')
      );
    
    case 'ARCHIVE_MASTER':
      return verifiedContributions.filter(c => c.type === 'source_archival').length >= 50;
    
    case 'FINANCIAL_FORENSICS':
      return verifiedContributions.filter(c => c.type === 'financial_analysis').length >= 5;
    
    case 'PERFECT_ACCURACY':
      return contributor.trustScore === 100 && contributor.verifiedSubmissions >= 20;
    
    case 'INVESTIGATION_CREATOR':
      return verifiedContributions.some(c => c.type === 'investigation_creation');
    
    default:
      return false;
  }
}

/**
 * Format contributor display name based on visibility settings
 */
export function getDisplayName(contributor: Contributor): string {
  switch (contributor.visibility) {
    case ContributorVisibility.PUBLIC:
      return contributor.displayName || contributor.alias || 'Anonymous';
    case ContributorVisibility.PSEUDONYMOUS:
      return contributor.alias || 'Anonymous Contributor';
    case ContributorVisibility.ANONYMOUS:
    case ContributorVisibility.VERIFIED_ANONYMOUS:
      return 'Anonymous Contributor';
    default:
      return 'Anonymous Contributor';
  }
}

/**
 * Generate attribution line for display
 */
export function generateAttribution(contribution: ContributionRecord, contributor: Contributor): string {
  const name = getDisplayName(contributor);
  const date = new Date(contribution.dateSubmitted).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const typeLabels: Record<ContributionType, string> = {
    evidence_submission: 'Submitted by',
    evidence_verification: 'Verified by',
    document_transcription: 'Transcribed by',
    translation: 'Translated by',
    legal_analysis: 'Legal analysis by',
    financial_analysis: 'Financial analysis by',
    timeline_correction: 'Corrected by',
    source_archival: 'Archived by',
    broken_link_fix: 'Link fixed by',
    investigation_creation: 'Investigation created by',
  };

  return `${typeLabels[contribution.type]} ${name} on ${date}`;
}
