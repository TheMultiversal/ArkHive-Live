"use client";

import { useState, useMemo } from "react";
import { Shield, AlertTriangle, CheckCircle, XCircle, FileText, Image, Clock, Hash, Eye, RefreshCw, Fingerprint, AlertOctagon } from "lucide-react";

/**
 * Evidence Tampering Detection System
 * Analyzes evidence for potential manipulation or tampering
 */

export type EvidenceType = "document" | "image" | "video" | "audio" | "text" | "link";

export type IntegrityStatus = "verified" | "suspicious" | "tampered" | "unknown";

export interface EvidenceMetadata {
  filename?: string;
  fileSize?: number;
  mimeType?: string;
  createdAt?: string;
  modifiedAt?: string;
  hash?: string;
  hashAlgorithm?: "sha256" | "sha512" | "md5";
  originalSource?: string;
}

export interface TamperingCheck {
  id: string;
  name: string;
  description: string;
  status: "pass" | "fail" | "warning" | "skipped";
  details?: string;
  severity?: "low" | "medium" | "high" | "critical";
}

export interface IntegrityReport {
  evidenceId: string;
  evidenceType: EvidenceType;
  status: IntegrityStatus;
  metadata: EvidenceMetadata;
  checks: TamperingCheck[];
  riskScore: number; // 0-100
  lastAnalyzed: string;
  warnings: string[];
  recommendations: string[];
}

// Tampering check definitions
const TAMPERING_CHECKS: Record<EvidenceType, Array<Omit<TamperingCheck, "id" | "status" | "details">>> = {
  document: [
    { name: "Hash Verification", description: "Verify file hash matches original", severity: "critical" },
    { name: "Metadata Consistency", description: "Check internal metadata for anomalies", severity: "high" },
    { name: "Edit History", description: "Analyze document edit history", severity: "medium" },
    { name: "Font Analysis", description: "Check for inconsistent fonts indicating edits", severity: "medium" },
    { name: "Author Verification", description: "Verify document author metadata", severity: "low" },
  ],
  image: [
    { name: "EXIF Analysis", description: "Check image EXIF data integrity", severity: "high" },
    { name: "Hash Verification", description: "Verify image hash matches original", severity: "critical" },
    { name: "Compression Artifacts", description: "Detect signs of re-compression or editing", severity: "high" },
    { name: "Error Level Analysis", description: "Check for ELA manipulation signatures", severity: "medium" },
    { name: "Clone Detection", description: "Detect copy-paste manipulations", severity: "medium" },
    { name: "Timestamp Verification", description: "Verify camera timestamp consistency", severity: "low" },
  ],
  video: [
    { name: "Hash Verification", description: "Verify video hash matches original", severity: "critical" },
    { name: "Frame Analysis", description: "Check for edited or inserted frames", severity: "high" },
    { name: "Audio Sync", description: "Verify audio-video synchronization", severity: "medium" },
    { name: "Encoding Consistency", description: "Check for re-encoding artifacts", severity: "medium" },
    { name: "Metadata Integrity", description: "Verify video metadata consistency", severity: "low" },
  ],
  audio: [
    { name: "Hash Verification", description: "Verify audio hash matches original", severity: "critical" },
    { name: "Waveform Analysis", description: "Check for splicing or gaps", severity: "high" },
    { name: "Background Noise", description: "Analyze background for inconsistencies", severity: "medium" },
    { name: "Encoding Check", description: "Verify consistent encoding throughout", severity: "low" },
  ],
  text: [
    { name: "Content Verification", description: "Verify text against original source", severity: "critical" },
    { name: "Encoding Consistency", description: "Check character encoding consistency", severity: "low" },
    { name: "Format Analysis", description: "Check for formatting anomalies", severity: "low" },
  ],
  link: [
    { name: "Archive Verification", description: "Compare with archived versions", severity: "high" },
    { name: "URL Integrity", description: "Verify URL hasn't changed", severity: "medium" },
    { name: "Content Hash", description: "Compare content hash with archive", severity: "critical" },
  ],
};

// Risk level configuration
const riskLevelConfig = {
  low: { label: "Low Risk", color: "text-emerald-400", bgColor: "bg-emerald-900/50", borderColor: "border-emerald-700" },
  medium: { label: "Medium Risk", color: "text-yellow-400", bgColor: "bg-yellow-900/50", borderColor: "border-yellow-700" },
  high: { label: "High Risk", color: "text-orange-400", bgColor: "bg-orange-900/50", borderColor: "border-orange-700" },
  critical: { label: "Critical", color: "text-red-400", bgColor: "bg-red-900/50", borderColor: "border-red-700" },
};

// Calculate risk level from score
function getRiskLevel(score: number): "low" | "medium" | "high" | "critical" {
  if (score < 25) return "low";
  if (score < 50) return "medium";
  if (score < 75) return "high";
  return "critical";
}

/**
 * Integrity Status Badge
 */
interface IntegrityBadgeProps {
  status: IntegrityStatus;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const statusConfig = {
  verified: { icon: Shield, label: "Verified Authentic", color: "text-emerald-400", bgColor: "bg-emerald-900/50", borderColor: "border-emerald-700" },
  suspicious: { icon: AlertTriangle, label: "Suspicious", color: "text-yellow-400", bgColor: "bg-yellow-900/50", borderColor: "border-yellow-700" },
  tampered: { icon: AlertOctagon, label: "Tampering Detected", color: "text-red-400", bgColor: "bg-red-900/50", borderColor: "border-red-700" },
  unknown: { icon: Eye, label: "Not Analyzed", color: "text-zinc-400", bgColor: "bg-zinc-900/50", borderColor: "border-zinc-700" },
};

export function IntegrityBadge({ status, size = "md", className = "" }: IntegrityBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[9px]",
    md: "px-2 py-1 text-[10px]",
    lg: "px-3 py-1.5 text-xs",
  };

  const iconSizes = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 border font-bold uppercase tracking-wider ${config.bgColor} ${config.borderColor} ${config.color} ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label={`Evidence integrity: ${config.label}`}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  );
}

/**
 * Risk Score Display
 */
interface RiskScoreProps {
  score: number;
  className?: string;
}

export function RiskScore({ score, className = "" }: RiskScoreProps) {
  const level = getRiskLevel(score);
  const config = riskLevelConfig[level];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-2 bg-zinc-900">
        <div
          className={`h-full transition-all ${
            level === "low" ? "bg-emerald-500" :
            level === "medium" ? "bg-yellow-500" :
            level === "high" ? "bg-orange-500" :
            "bg-red-500"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-xs font-bold ${config.color}`}>{score}%</span>
    </div>
  );
}

/**
 * Tampering Check Item
 */
interface TamperingCheckItemProps {
  check: TamperingCheck;
  compact?: boolean;
}

export function TamperingCheckItem({ check, compact = false }: TamperingCheckItemProps) {
  const statusIcons = {
    pass: { icon: CheckCircle, color: "text-emerald-500" },
    fail: { icon: XCircle, color: "text-red-500" },
    warning: { icon: AlertTriangle, color: "text-yellow-500" },
    skipped: { icon: Eye, color: "text-zinc-500" },
  };

  const { icon: StatusIcon, color } = statusIcons[check.status];
  const severityConfig = check.severity ? riskLevelConfig[check.severity] : null;

  return (
    <div className={`flex items-start gap-2 ${compact ? "py-1" : "py-2"}`}>
      <StatusIcon className={`w-4 h-4 ${color} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-white">{check.name}</span>
          {severityConfig && (
            <span className={`text-[8px] px-1 py-0.5 ${severityConfig.bgColor} ${severityConfig.borderColor} border ${severityConfig.color} uppercase tracking-wider font-bold`}>
              {check.severity}
            </span>
          )}
        </div>
        {!compact && (
          <>
            <p className="text-[10px] text-zinc-500 mt-0.5">{check.description}</p>
            {check.details && (
              <p className="text-[10px] text-zinc-400 mt-1 p-2 bg-black/30 border border-zinc-800">
                {check.details}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Evidence Integrity Panel
 */
interface IntegrityPanelProps {
  report: IntegrityReport;
  onReanalyze?: () => void;
  className?: string;
}

export function IntegrityPanel({ report, onReanalyze, className = "" }: IntegrityPanelProps) {
  const [showAllChecks, setShowAllChecks] = useState(false);
  const config = statusConfig[report.status];
  const Icon = config.icon;

  const failedChecks = report.checks.filter(c => c.status === "fail" || c.status === "warning");
  const passedChecks = report.checks.filter(c => c.status === "pass");

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-4 h-4 text-zinc-300" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">Evidence Integrity</span>
        </div>
        {onReanalyze && (
          <button
            onClick={onReanalyze}
            className="p-1.5 text-zinc-600 hover:text-white transition-colors"
            title="Re-analyze evidence"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Status Banner */}
      <div className={`px-4 py-3 ${config.bgColor} border-b ${config.borderColor}`}>
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${config.color}`} />
          <div>
            <span className={`text-sm font-bold ${config.color}`}>{config.label}</span>
            <p className="text-xs text-zinc-400 mt-0.5">
              Last analyzed: {report.lastAnalyzed}
            </p>
          </div>
        </div>
      </div>

      {/* Risk Score */}
      <div className="px-4 py-3 border-b border-zinc-800/50">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
          Tampering Risk Score
        </span>
        <RiskScore score={report.riskScore} />
      </div>

      {/* Metadata */}
      {report.metadata && (
        <div className="px-4 py-3 border-b border-zinc-800/50">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
            Evidence Metadata
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {report.metadata.filename && (
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-zinc-600" />
                <span className="text-zinc-400 truncate">{report.metadata.filename}</span>
              </div>
            )}
            {report.metadata.hash && (
              <div className="flex items-center gap-2">
                <Hash className="w-3 h-3 text-zinc-600" />
                <span className="text-zinc-400 font-mono text-[10px] truncate">
                  {report.metadata.hash.substring(0, 16)}...
                </span>
              </div>
            )}
            {report.metadata.createdAt && (
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-zinc-600" />
                <span className="text-zinc-400">{report.metadata.createdAt}</span>
              </div>
            )}
            {report.metadata.mimeType && (
              <div className="flex items-center gap-2">
                <Image className="w-3 h-3 text-zinc-600" />
                <span className="text-zinc-400">{report.metadata.mimeType}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Failed/Warning Checks */}
      {failedChecks.length > 0 && (
        <div className="px-4 py-3 border-b border-red-900/30 bg-red-950/20">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-2">
            Issues Detected ({failedChecks.length})
          </span>
          <div className="space-y-1">
            {failedChecks.map((check) => (
              <TamperingCheckItem key={check.id} check={check} compact />
            ))}
          </div>
        </div>
      )}

      {/* Warnings */}
      {report.warnings.length > 0 && (
        <div className="px-4 py-3 border-b border-yellow-900/30 bg-yellow-950/20">
          <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block mb-2">
            Warnings
          </span>
          <ul className="space-y-1">
            {report.warnings.map((warning, idx) => (
              <li key={idx} className="text-xs text-yellow-200/80 flex items-start gap-2">
                <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* All Checks Toggle */}
      <div className="px-4 py-2 border-b border-zinc-800/50">
        <button
          onClick={() => setShowAllChecks(!showAllChecks)}
          className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-wider transition-colors"
        >
          {showAllChecks ? "Hide" : "Show"} All Checks ({report.checks.length})
        </button>
      </div>

      {/* All Checks */}
      {showAllChecks && (
        <div className="px-4 py-3 border-b border-zinc-800/50 max-h-64 overflow-y-auto">
          <div className="space-y-1">
            {report.checks.map((check) => (
              <TamperingCheckItem key={check.id} check={check} />
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {report.recommendations.length > 0 && (
        <div className="px-4 py-3">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
            Recommendations
          </span>
          <ul className="space-y-1">
            {report.recommendations.map((rec, idx) => (
              <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                <Shield className="w-3 h-3 flex-shrink-0 mt-0.5 text-zinc-500" />
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Quick Integrity Check Component
 * Compact view for inline use
 */
interface QuickIntegrityCheckProps {
  status: IntegrityStatus;
  riskScore: number;
  checksPassed: number;
  checksTotal: number;
  className?: string;
}

export function QuickIntegrityCheck({
  status,
  riskScore,
  checksPassed,
  checksTotal,
  className = "",
}: QuickIntegrityCheckProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-3 px-3 py-2 ${config.bgColor} border ${config.borderColor} ${className}`}>
      <Icon className={`w-4 h-4 ${config.color}`} />
      <div className="flex-1">
        <span className={`text-xs font-bold ${config.color}`}>{config.label}</span>
        <p className="text-[10px] text-zinc-500">
          {checksPassed}/{checksTotal} checks passed • Risk: {riskScore}%
        </p>
      </div>
    </div>
  );
}

export default IntegrityPanel;
