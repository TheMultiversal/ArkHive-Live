/**
 * Verification Components Index
 * Centralized exports for ArkHive verification system
 */

// Source Tier System
export { 
  default as SourceTierBadge,
  VerificationBadge,
  SourceCard,
  SourceTierLegend,
  type SourceTier,
  type VerificationStatus,
} from "./SourceTierBadge";

// Wayback Machine Integration
export {
  default as ArchiveStatus,
  ArchiveLink,
  SourceArchivePanel,
  useWaybackArchive,
  getWaybackUrl,
  getSaveToWaybackUrl,
  checkWaybackArchive,
  formatWaybackTimestamp,
} from "./WaybackArchive";

// PACER Document System
export {
  default as PACERDocumentCard,
  PACERCitation,
  CourtDocumentsList,
  parseCaseCitation,
  getPACERUrl,
  FEDERAL_DISTRICTS,
  DOCUMENT_TYPES,
  type PACERDocument,
  type CourtDistrict,
  type DocumentType,
} from "./PACERDocument";

// Verification Status System
export {
  default as VerificationStatusBadge,
  VerificationCheckItem,
  VerificationProgress,
  VerificationPanel,
  InlineVerification,
  type VerificationLevel,
  type VerificationCheck,
  type VerificationRecord,
  type VerificationDispute,
} from "./VerificationStatus";

// Evidence Tampering Detection
export {
  default as IntegrityPanel,
  IntegrityBadge,
  RiskScore,
  TamperingCheckItem,
  QuickIntegrityCheck,
  type EvidenceType,
  type IntegrityStatus,
  type TamperingCheck,
  type IntegrityReport,
  type EvidenceMetadata,
} from "./TamperingDetection";

// Blockchain Hash Verification
export {
  default as HashRecordCard,
  HashDisplay,
  HashChain,
  VerificationResultDisplay,
  useHashVerification,
  generateSHA256,
  generateFileHash,
  formatHash,
  type HashAlgorithm,
  type HashRecord,
  type VerificationResult,
} from "./BlockchainHash";

// Citation Format System
export {
  default as CitationDisplay,
  generateCitation,
  getSourceTypeIcon,
  type CitationStyle,
  type SourceType,
  type CitationSource,
} from "./CitationSystem";

// Source Comparison
export {
  default as SourceComparison,
  SideBySideComparison,
  QuickCompare,
  type ComparisonResult,
  type SourceClaim,
  type ComparisonSource,
  type ClaimComparison,
} from "./SourceComparison";

// Confidence Scoring
export {
  default as ConfidenceScoreDisplay,
  ConfidenceMeter,
  ConfidenceBadge,
  FactorBreakdown,
  ConfidenceCalculator,
  InlineConfidence,
  getConfidenceLevel,
  calculateConfidenceScore,
  type ConfidenceLevel,
  type FactorCategory,
  type ConfidenceFactor,
  type ConfidenceScore,
} from "./ConfidenceScore";

// Audit Log
export {
  default as AuditLog,
  AuditTimeline,
  AuditStats,
  type AuditAction,
  type AuditCategory,
  type AuditEntry,
} from "./AuditLog";
