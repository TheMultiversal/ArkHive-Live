// ============================================================
// ACCOUNTABILITY ACTION CENTER; Type Definitions
// ============================================================
// This system powers the "What Must Be Done" section on every
// investigation, individual, corporation, agency, and organization page.
// It provides role-based, step-by-step action paths for holding
// every individual and entity accountable; regardless of time elapsed.

export type ActionRole =
  | 'citizen'
  | 'journalist'
  | 'lawyer'
  | 'elected_official'
  | 'law_enforcement'
  | 'regulator';

export const ACTION_ROLE_LABELS: Record<ActionRole, string> = {
  citizen: 'Citizen',
  journalist: 'Journalist',
  lawyer: 'Lawyer / Attorney',
  elected_official: 'Elected Official',
  law_enforcement: 'Law Enforcement',
  regulator: 'Regulator',
};

export const ACTION_ROLE_DESCRIPTIONS: Record<ActionRole, string> = {
  citizen: 'File complaints, FOIA requests, petition elected officials, and demand accountability through civic channels.',
  journalist: 'Investigate leads, file records requests, expose gaps in accountability, and inform the public.',
  lawyer: 'Pursue civil and criminal legal actions, file motions, and leverage every available statute.',
  elected_official: 'Launch investigations, issue subpoenas, introduce legislation, and exercise oversight authority.',
  law_enforcement: 'Build cases, execute warrants, coordinate with prosecutors, and bring charges.',
  regulator: 'Enforce regulations, impose penalties, revoke licenses, and refer cases for prosecution.',
};

/** A specific legal mechanism that can be used to pursue accountability */
export interface LegalMechanism {
  /** Name of the legal tool (e.g., "Civil Asset Forfeiture") */
  name: string;
  /** The law, code, or authority that enables this (e.g., "18 U.S.C. § 981") */
  statute: string;
  /** Plain English explanation of what this mechanism does */
  description: string;
  /** Whether statute of limitations applies */
  hasStatuteOfLimitations: boolean;
  /** If yes, what is it? */
  limitationPeriod?: string;
  /** Can this reach heirs / successors? */
  reachesHeirs: boolean;
  /** Who has authority to invoke this? */
  authorizedActors: string[];
  /** Current applicability to this specific case */
  applicability: 'directly_applicable' | 'potentially_applicable' | 'requires_new_action';
  /** Any notes on how to apply this to the case */
  notes?: string;
}

/** A step in the accountability process for a specific role */
export interface AccountabilityStep {
  /** Step number (1-indexed) */
  step: number;
  /** Short title for the step */
  title: string;
  /** Detailed instruction */
  description: string;
  /** What specific documents, forms, or filings are needed */
  requirements?: string[];
  /** Who to contact or file with */
  filingTarget?: string;
  /** Any template text, FOIA language, or form content */
  templateText?: string;
  /** Legal citations supporting this step */
  legalBasis?: string[];
  /** Estimated time to complete */
  estimatedTime?: string;
}

/** Role-specific action path */
export interface RoleActionPath {
  role: ActionRole;
  /** Overview of what this role can do in this specific case */
  overview: string;
  /** Ordered steps from start to finish */
  steps: AccountabilityStep[];
  /** Key legal mechanisms this role should use */
  relevantMechanisms: string[];  // references LegalMechanism.name
  /** Urgency level for this role */
  urgency: 'immediate' | 'high' | 'standard';
}

/** Identifies who currently holds wealth derived from the crimes */
export interface WealthTraceEntry {
  /** Name of current holder */
  name: string;
  /** Relationship to original perpetrator */
  relationship: string;
  /** How wealth was transferred (inheritance, trust, gift, corporate structure) */
  transferMethod: string;
  /** Estimated value if known */
  estimatedValue?: string;
  /** Legal entities involved (trusts, LLCs, foundations) */
  legalEntities?: string[];
  /** Available legal mechanisms to pursue recovery */
  recoveryMechanisms: string[];
}

/** The full accountability data for an investigation page */
export interface AccountabilityData {
  /** Investigation slug this applies to */
  investigationSlug: string;

  /** ---- WHAT HAPPENED ---- */
  /** Summary of the crimes committed */
  crimeSummary: string;
  /** Total estimated harm (financial + societal) */
  totalHarm: string;
  /** Number of victims / affected parties */
  victimsAffected: string;

  /** ---- WHO SHOULD BE HELD ACCOUNTABLE ---- */
  /** Specific individuals who should face accountability */
  primaryTargets: Array<{
    name: string;
    role: string;
    currentStatus: string;
    /** What specific accountability should look like for this person */
    accountabilityPath: string;
    /** What's blocking accountability */
    obstacles: string[];
  }>;

  /** ---- HOW TO HOLD THEM ACCOUNTABLE ---- */
  /** All legal mechanisms available */
  legalMechanisms: LegalMechanism[];

  /** ---- WEALTH TRACING ---- */
  /** Where the money went and who holds it now */
  wealthTrace: WealthTraceEntry[];

  /** ---- WHO HAS THE POWER TO ACT ---- */
  /** Specific officials / bodies with authority */
  authoritiesWithPower: Array<{
    name: string;
    title: string;
    jurisdiction: string;
    powers: string[];
    contactMethod?: string;
  }>;

  /** ---- ROLE-BASED ACTION PATHS ---- */
  /** Step-by-step instructions for each role */
  actionPaths: RoleActionPath[];

  /** ---- WHAT SUCCESS LOOKS LIKE ---- */
  /** Concrete outcomes that constitute accountability served */
  successCriteria: string[];
}
