"use client";

import { useState } from "react";
import { CheckCircle, Clock, AlertTriangle, XCircle, Shield, Eye, History, User, Calendar, FileText, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Verification Status Indicators System
 * Comprehensive verification tracking with audit trail
 */

export type VerificationLevel = "verified" | "partial" | "pending" | "disputed" | "retracted" | "unverified";

export interface VerificationCheck {
  id: string;
  type: "source" | "document" | "quote" | "fact" | "identity" | "date";
  status: "passed" | "failed" | "pending" | "skipped";
  verifier?: string;
  timestamp?: string;
  notes?: string;
}

export interface VerificationRecord {
  level: VerificationLevel;
  lastUpdated: string;
  verifiedBy?: string;
  checks: VerificationCheck[];
  notes?: string;
  disputes?: VerificationDispute[];
}

export interface VerificationDispute {
  id: string;
  reporter: string;
  date: string;
  claim: string;
  status: "open" | "resolved" | "rejected";
  resolution?: string;
}

// Verification level configuration
const levelConfig = {
  verified: {
    label: "Fully Verified",
    description: "All verification checks passed",
    icon: Shield,
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/50",
    borderColor: "border-emerald-700",
  },
  partial: {
    label: "Partially Verified",
    description: "Some checks passed, others pending",
    icon: CheckCircle,
    color: "text-blood-400",
    bgColor: "bg-blood-900/50",
    borderColor: "border-blood-700",
  },
  pending: {
    label: "Verification Pending",
    description: "Awaiting verification review",
    icon: Clock,
    color: "text-yellow-400",
    bgColor: "bg-yellow-900/50",
    borderColor: "border-yellow-700",
  },
  disputed: {
    label: "Disputed",
    description: "Verification contested - under review",
    icon: AlertTriangle,
    color: "text-orange-400",
    bgColor: "bg-orange-900/50",
    borderColor: "border-orange-700",
  },
  retracted: {
    label: "Retracted",
    description: "Source or claim has been retracted",
    icon: XCircle,
    color: "text-red-400",
    bgColor: "bg-red-900/50",
    borderColor: "border-red-700",
  },
  unverified: {
    label: "Unverified",
    description: "Not yet reviewed for verification",
    icon: Eye,
    color: "text-zinc-400",
    bgColor: "bg-zinc-900/50",
    borderColor: "border-zinc-700",
  },
};

// Check type labels
const checkTypeLabels = {
  source: "Source Authenticity",
  document: "Document Integrity",
  quote: "Quote Accuracy",
  fact: "Factual Accuracy",
  identity: "Identity Verification",
  date: "Date/Timestamp",
};

/**
 * Verification Status Badge
 */
interface VerificationStatusBadgeProps {
  level: VerificationLevel;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  showLabel?: boolean;
  className?: string;
}

export function VerificationStatusBadge({
  level,
  size = "md",
  showIcon = true,
  showLabel = true,
  className = "",
}: VerificationStatusBadgeProps) {
  const config = levelConfig[level];
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
      title={config.description}
      role="status"
      aria-label={`Verification status: ${config.label}`}
    >
      {showIcon && <Icon className={iconSizes[size]} aria-hidden="true" />}
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}

/**
 * Verification Check Item
 */
interface VerificationCheckItemProps {
  check: VerificationCheck;
  compact?: boolean;
}

export function VerificationCheckItem({ check, compact = false }: VerificationCheckItemProps) {
  const statusConfig = {
    passed: { icon: CheckCircle, color: "text-emerald-500" },
    failed: { icon: XCircle, color: "text-red-500" },
    pending: { icon: Clock, color: "text-yellow-500" },
    skipped: { icon: AlertTriangle, color: "text-zinc-500" },
  };

  const { icon: StatusIcon, color } = statusConfig[check.status];

  return (
    <div className={`flex items-start gap-2 ${compact ? "py-1" : "py-2"}`}>
      <StatusIcon className={`w-4 h-4 ${color} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <span className="text-xs font-medium text-white">
          {checkTypeLabels[check.type]}
        </span>
        {!compact && check.notes && (
          <p className="text-[10px] text-zinc-500 mt-0.5">{check.notes}</p>
        )}
        {!compact && check.verifier && (
          <p className="text-[10px] text-zinc-600 mt-0.5">
            Verified by {check.verifier} • {check.timestamp}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Verification Progress Bar
 */
interface VerificationProgressProps {
  checks: VerificationCheck[];
  className?: string;
}

export function VerificationProgress({ checks, className = "" }: VerificationProgressProps) {
  const passed = checks.filter(c => c.status === "passed").length;
  const failed = checks.filter(c => c.status === "failed").length;
  const pending = checks.filter(c => c.status === "pending").length;
  const total = checks.length;

  const passedPercent = (passed / total) * 100;
  const failedPercent = (failed / total) * 100;
  const pendingPercent = (pending / total) * 100;

  return (
    <div className={className}>
      <div className="flex items-center justify-between text-[10px] mb-1">
        <span className="text-zinc-500">Verification Progress</span>
        <span className="text-zinc-400">{passed}/{total} passed</span>
      </div>
      <div className="h-2 bg-zinc-900 flex overflow-hidden">
        <div 
          className="bg-emerald-600 transition-all"
          style={{ width: `${passedPercent}%` }}
        />
        <div 
          className="bg-red-600 transition-all"
          style={{ width: `${failedPercent}%` }}
        />
        <div 
          className="bg-yellow-600 transition-all"
          style={{ width: `${pendingPercent}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Full Verification Panel
 */
interface VerificationPanelProps {
  record: VerificationRecord;
  onReportDispute?: () => void;
  className?: string;
}

export function VerificationPanel({ record, onReportDispute, className = "" }: VerificationPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = levelConfig[record.level];
  const Icon = config.icon;

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-900/50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 ${config.bgColor} ${config.borderColor} border`}>
            <Icon className={`w-4 h-4 ${config.color}`} />
          </div>
          <div className="text-left">
            <span className={`text-sm font-bold ${config.color}`}>{config.label}</span>
            <p className="text-[10px] text-zinc-500 mt-0.5">{config.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-zinc-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-zinc-800">
          {/* Progress */}
          {record.checks.length > 0 && (
            <div className="px-4 py-3 border-b border-zinc-800/50">
              <VerificationProgress checks={record.checks} />
            </div>
          )}

          {/* Checks List */}
          <div className="px-4 py-2 border-b border-zinc-800/50">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Verification Checks
            </h4>
            <div className="space-y-1">
              {record.checks.map((check) => (
                <VerificationCheckItem key={check.id} check={check} />
              ))}
            </div>
          </div>

          {/* Meta Info */}
          <div className="px-4 py-3 flex flex-wrap gap-4 text-[10px] text-zinc-500">
            {record.verifiedBy && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>Verified by {record.verifiedBy}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Updated {record.lastUpdated}</span>
            </div>
          </div>

          {/* Disputes */}
          {record.disputes && record.disputes.length > 0 && (
            <div className="px-4 py-3 border-t border-orange-900/30 bg-orange-950/20">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {record.disputes.length} Active Dispute{record.disputes.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="space-y-2">
                {record.disputes.slice(0, 2).map((dispute) => (
                  <div key={dispute.id} className="text-xs text-zinc-400">
                    <p className="line-clamp-1">{dispute.claim}</p>
                    <p className="text-[10px] text-zinc-600 mt-0.5">
                      Reported by {dispute.reporter} • {dispute.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="px-4 py-3 border-t border-zinc-800/50 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase tracking-wider transition-colors">
              <History className="w-3 h-3" />
              View History
            </button>
            {onReportDispute && (
              <button 
                onClick={onReportDispute}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-orange-950/50 border border-orange-800 text-orange-400 hover:bg-orange-900/50 text-[10px] font-bold uppercase tracking-wider transition-colors"
              >
                <AlertTriangle className="w-3 h-3" />
                Report Issue
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Inline Verification Indicator
 * For showing verification status inline with text
 */
interface InlineVerificationProps {
  level: VerificationLevel;
  tooltip?: string;
  className?: string;
}

export function InlineVerification({ level, tooltip, className = "" }: InlineVerificationProps) {
  const config = levelConfig[level];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center ${className}`}
      title={tooltip || config.description}
      aria-label={`Verification: ${config.label}`}
    >
      <Icon className={`w-3 h-3 ${config.color}`} />
    </span>
  );
}

export default VerificationStatusBadge;
