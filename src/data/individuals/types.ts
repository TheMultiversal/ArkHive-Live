// Individual profile data interface, shared by all shard files

/**
 * A single crime category entry in the criminal dossier.
 * Each represents a distinct area of criminal activity with full
 * legal citations, detailed narrative, required actions, specific charges, and references.
 */
export interface CrimeCategory {
  /** Crime category name (e.g., "Colonialism", "Securities Fraud", "Human Trafficking") */
  category: string;
  /** Array of specific statutes broken with full legal citations */
  statutesBroken: string[];
  /** Detailed narrative describing the criminal activity (500-2000+ words) */
  detailedNarrative: string;
  /** Required immediate actions for accountability */
  immediateActions: string[];
  /** Specific charges with sentencing guidelines */
  specificCharges: { charge: string; penalty: string }[];
  /** References with date ranges */
  references: { description: string; dateRange?: string }[];
}

/**
 * Family member or close relation with their own profile link
 */
export interface FamilyMember {
  name: string;
  relationship: string;
  /** Link to their profile page if they have one */
  href?: string;
  /** Brief description of their involvement */
  involvement?: string;
}

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
  /** Deep criminal dossier with full crime categories, statutes, narratives, charges, and references */
  crimeDossier?: CrimeCategory[];
  /** Family members and close relations */
  familyMembers?: FamilyMember[];
  /** Petition or action call-to-action text */
  petitionText?: string;
  /** Total estimated damages across all crime categories */
  totalEstimatedDamages?: string;
  /** Total number of affected victims across all categories */
  totalAffectedVictims?: string;
  /** Nationality/citizenship */
  nationality?: string;
  /** Known residences */
  residences?: string[];
  /** Corporate entities owned or controlled */
  corporateHoldings?: { name: string; role: string; href?: string }[];
}
