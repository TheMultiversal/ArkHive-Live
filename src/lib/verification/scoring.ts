/**
 * ArkHive Verification Scoring System
 * 
 * You are loved. You are appreciated. You are helping change the world for the better
 * by ensuring accountability for crimes against humanity. Your work matters.
 * 
 * This system calculates verification scores for investigations, claims, and evidence.
 * Items must reach 100% verification before being promoted to confirmed status.
 */

// Evidence types and their base verification weights
export const EVIDENCE_WEIGHTS = {
  // Tier 1: Highest weight - official legal records
  courtJudgment: 100,           // Final court judgment/verdict
  indictment: 95,               // Grand jury indictment  
  pleaAgreement: 95,            // Guilty plea with allocution
  courtFiling: 90,              // Motions, briefs, exhibits filed in court
  swornTestimony: 85,           // Under-oath testimony (trial, deposition, congressional)
  
  // Tier 2: High weight - official government records
  foiaDocument: 80,             // FOIA-released government documents
  declassifiedRecord: 80,       // Officially declassified materials
  congressionalReport: 75,      // GAO, CBO, committee reports
  inspectorGeneralReport: 75,   // IG investigations
  regulatoryFiling: 70,         // SEC, FEC, EPA filings
  
  // Tier 3: Medium weight - verifiable third-party records
  financialRecord: 65,          // Bank records, tax filings, corporate filings
  corporateFiling: 60,          // SEC 10-K, Delaware filings, etc.
  patentRecord: 60,             // USPTO patents
  academicPaper: 55,            // Peer-reviewed research (PubMed, etc.)
  journalisticInvestigation: 50, // Named sources, documented investigation
  
  // Tier 4: Lower weight - requires corroboration
  witnessStatement: 40,         // Non-sworn witness account
  leakedDocument: 35,           // Unverified leaked materials
  whistleblowerClaim: 35,       // Whistleblower allegations
  mediaReport: 30,              // News reporting without primary sources
  
  // Tier 5: Lowest weight - allegation only
  publicAllegation: 15,         // Public claims without documentation
  anonymousSource: 10,          // Anonymous claims
  patternAnalysis: 10,          // Statistical patterns without direct evidence
} as const;

export type EvidenceType = keyof typeof EVIDENCE_WEIGHTS;

// Source verification status
export enum SourceStatus {
  VERIFIED = 'verified',           // Link works, content matches claim
  ARCHIVED = 'archived',           // Original down, Wayback archive exists
  PENDING = 'pending',             // Not yet verified
  BROKEN = 'broken',               // Link dead, no archive
  DISPUTED = 'disputed',           // Counter-evidence exists
}

// Evidence item structure
export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  title: string;
  description: string;
  sourceUrl: string;
  archiveUrl?: string;              // Wayback Machine backup
  status: SourceStatus;
  dateAdded: string;
  dateVerified?: string;
  verifiedBy?: string;              // Contributor who verified
  extractedClaims: string[];        // Specific claims this evidence supports
  documentId?: string;              // Court case number, patent number, etc.
}

// Claim structure
export interface Claim {
  id: string;
  statement: string;
  category: 'fact' | 'allegation' | 'pattern';
  supportingEvidence: EvidenceItem[];
  counterEvidence: EvidenceItem[];
  verificationScore: number;
  status: 'confirmed' | 'likely' | 'alleged' | 'disputed' | 'unverified';
}

// Investigation verification summary
export interface VerificationSummary {
  investigationId: string;
  totalClaims: number;
  confirmedClaims: number;
  likelyClaims: number;
  allegedClaims: number;
  disputedClaims: number;
  unverifiedClaims: number;
  totalEvidence: number;
  verifiedEvidence: number;
  brokenLinks: number;
  overallScore: number;           // 0-100
  lastVerified: string;
  readyForPromotion: boolean;     // true if score >= 100
}

/**
 * Calculate verification score for a single claim
 */
export function calculateClaimScore(claim: Claim): number {
  if (claim.supportingEvidence.length === 0) {
    return 0;
  }

  // Sum weights of all verified supporting evidence
  let supportScore = 0;
  for (const evidence of claim.supportingEvidence) {
    if (evidence.status === SourceStatus.VERIFIED || evidence.status === SourceStatus.ARCHIVED) {
      supportScore += EVIDENCE_WEIGHTS[evidence.type];
    } else if (evidence.status === SourceStatus.PENDING) {
      supportScore += EVIDENCE_WEIGHTS[evidence.type] * 0.5; // Half weight until verified
    }
  }

  // Subtract counter-evidence impact
  let counterScore = 0;
  for (const evidence of claim.counterEvidence) {
    if (evidence.status === SourceStatus.VERIFIED || evidence.status === SourceStatus.ARCHIVED) {
      counterScore += EVIDENCE_WEIGHTS[evidence.type] * 0.5;
    }
  }

  // Net score
  const rawScore = supportScore - counterScore;

  // Normalize to 0-100 scale
  // A single court judgment (100) = 100% verified
  // Multiple lower-tier sources can combine to reach 100%
  const normalizedScore = Math.min(100, Math.max(0, rawScore));

  return normalizedScore;
}

/**
 * Determine claim status based on score
 */
export function getClaimStatus(score: number, hasCounterEvidence: boolean): Claim['status'] {
  if (hasCounterEvidence && score < 70) {
    return 'disputed';
  }
  if (score >= 100) {
    return 'confirmed';
  }
  if (score >= 70) {
    return 'likely';
  }
  if (score >= 30) {
    return 'alleged';
  }
  return 'unverified';
}

/**
 * Calculate overall investigation verification score
 */
export function calculateInvestigationScore(claims: Claim[]): VerificationSummary {
  if (claims.length === 0) {
    return {
      investigationId: '',
      totalClaims: 0,
      confirmedClaims: 0,
      likelyClaims: 0,
      allegedClaims: 0,
      disputedClaims: 0,
      unverifiedClaims: 0,
      totalEvidence: 0,
      verifiedEvidence: 0,
      brokenLinks: 0,
      overallScore: 0,
      lastVerified: new Date().toISOString(),
      readyForPromotion: false,
    };
  }

  let confirmedClaims = 0;
  let likelyClaims = 0;
  let allegedClaims = 0;
  let disputedClaims = 0;
  let unverifiedClaims = 0;
  let totalEvidence = 0;
  let verifiedEvidence = 0;
  let brokenLinks = 0;

  const allEvidence = new Set<string>();

  for (const claim of claims) {
    claim.verificationScore = calculateClaimScore(claim);
    claim.status = getClaimStatus(claim.verificationScore, claim.counterEvidence.length > 0);

    switch (claim.status) {
      case 'confirmed': confirmedClaims++; break;
      case 'likely': likelyClaims++; break;
      case 'alleged': allegedClaims++; break;
      case 'disputed': disputedClaims++; break;
      case 'unverified': unverifiedClaims++; break;
    }

    // Count unique evidence items
    for (const evidence of [...claim.supportingEvidence, ...claim.counterEvidence]) {
      if (!allEvidence.has(evidence.id)) {
        allEvidence.add(evidence.id);
        totalEvidence++;
        if (evidence.status === SourceStatus.VERIFIED || evidence.status === SourceStatus.ARCHIVED) {
          verifiedEvidence++;
        }
        if (evidence.status === SourceStatus.BROKEN) {
          brokenLinks++;
        }
      }
    }
  }

  // Overall score is percentage of confirmed + likely claims
  const overallScore = Math.round(((confirmedClaims + likelyClaims * 0.7) / claims.length) * 100);

  return {
    investigationId: '',
    totalClaims: claims.length,
    confirmedClaims,
    likelyClaims,
    allegedClaims,
    disputedClaims,
    unverifiedClaims,
    totalEvidence,
    verifiedEvidence,
    brokenLinks,
    overallScore,
    lastVerified: new Date().toISOString(),
    readyForPromotion: overallScore >= 100 && brokenLinks === 0,
  };
}

/**
 * Check if evidence URL is still valid
 */
export async function verifyEvidenceUrl(url: string): Promise<{ valid: boolean; status: number }> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { valid: response.ok, status: response.status };
  } catch {
    return { valid: false, status: 0 };
  }
}

/**
 * Archive URL to Wayback Machine
 */
export async function archiveToWayback(url: string): Promise<string | null> {
  try {
    const response = await fetch(`https://web.archive.org/save/${url}`, { method: 'GET' });
    if (response.ok) {
      // Extract archived URL from response headers or URL
      const archiveUrl = response.headers.get('Content-Location') || 
                         `https://web.archive.org/web/${new Date().toISOString().split('T')[0].replace(/-/g, '')}/${url}`;
      return archiveUrl;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Validate citation format (court case, patent, PubMed ID, etc.)
 */
export function validateCitation(type: EvidenceType, documentId: string): boolean {
  const patterns: Partial<Record<EvidenceType, RegExp>> = {
    courtJudgment: /^\d{1,2}[-–]\w{2,4}[-–]\d{1,6}$|^Indictment No\. \d+[-–]\d+$/i,
    indictment: /^\d{1,2}[-–]\w{2,4}[-–]\d{1,6}$|^Indictment No\. \d+[-–]\d+$/i,
    patentRecord: /^US\s?\d{1,3},?\d{3},?\d{3}$|^US\d{7,8}$/i,
    academicPaper: /^PMID:\s?\d+$|^DOI:\s?10\.\d{4,}\/\S+$/i,
    regulatoryFiling: /^MUR\s?\d+$|^File\s?No\.\s?\d+[-–]\d+$/i,
  };

  const pattern = patterns[type];
  if (!pattern) return true; // No validation rule for this type
  return pattern.test(documentId);
}

// Export verification tier thresholds
export const VERIFICATION_TIERS = {
  CONFIRMED: 100,      // Ready for promotion to confirmed facts
  HIGHLY_LIKELY: 85,   // Strong evidence, minor gaps
  LIKELY: 70,          // Preponderance of evidence
  ALLEGED: 30,         // Some supporting evidence
  UNVERIFIED: 0,       // No verified evidence yet
} as const;
