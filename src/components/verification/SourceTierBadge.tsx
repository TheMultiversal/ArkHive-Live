"use client";

import { Shield, FileCheck, FileText, AlertTriangle, ExternalLink, CheckCircle, Clock, XCircle } from "lucide-react";

/**
 * Source Tier System for ArkHive
 * 
 * PRIMARY (Tier 1): Court records, official documents, signed testimony
 * SECONDARY (Tier 2): Verified journalism, academic research, official reports
 * TERTIARY (Tier 3): News articles, public statements, social media
 * UNVERIFIED: Pending verification
 */

export type SourceTier = "primary" | "secondary" | "tertiary" | "unverified";

export type VerificationStatus = "verified" | "pending" | "disputed" | "retracted";

interface SourceTierBadgeProps {
  tier: SourceTier;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const tierConfig = {
  primary: {
    label: "Primary Source",
    description: "Court records, official documents, signed testimony",
    icon: Shield,
    classes: "bg-emerald-900/80 border-emerald-600 text-emerald-400",
    iconClasses: "text-emerald-500",
  },
  secondary: {
    label: "Secondary Source",
    description: "Verified journalism, academic research, official reports",
    icon: FileCheck,
    classes: "bg-blood-900/80 border-blood-600 text-blood-400",
    iconClasses: "text-blood-500",
  },
  tertiary: {
    label: "Tertiary Source",
    description: "News articles, public statements, social media",
    icon: FileText,
    classes: "bg-yellow-900/80 border-yellow-600 text-yellow-400",
    iconClasses: "text-yellow-500",
  },
  unverified: {
    label: "Unverified",
    description: "Source pending verification - treat with caution",
    icon: AlertTriangle,
    classes: "bg-zinc-900/80 border-zinc-600 text-zinc-400",
    iconClasses: "text-zinc-500",
  },
};

const sizeClasses = {
  sm: {
    badge: "px-1.5 py-0.5 text-[9px]",
    icon: "w-2.5 h-2.5",
  },
  md: {
    badge: "px-2 py-1 text-[10px]",
    icon: "w-3 h-3",
  },
  lg: {
    badge: "px-3 py-1.5 text-xs",
    icon: "w-4 h-4",
  },
};

export function SourceTierBadge({ 
  tier, 
  size = "md", 
  showLabel = true,
  className = "" 
}: SourceTierBadgeProps) {
  const config = tierConfig[tier];
  const sizeConfig = sizeClasses[size];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 border font-bold uppercase tracking-wider ${config.classes} ${sizeConfig.badge} ${className}`}
      title={config.description}
      role="status"
      aria-label={`Source tier: ${config.label}`}
    >
      <Icon className={`${sizeConfig.icon} ${config.iconClasses}`} aria-hidden="true" />
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}

/**
 * Verification Status Badge
 */
interface VerificationBadgeProps {
  status: VerificationStatus;
  date?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const verificationConfig = {
  verified: {
    label: "Verified",
    icon: CheckCircle,
    classes: "bg-emerald-900/60 border-emerald-700 text-emerald-400",
  },
  pending: {
    label: "Pending Review",
    icon: Clock,
    classes: "bg-yellow-900/60 border-yellow-700 text-yellow-400",
  },
  disputed: {
    label: "Disputed",
    icon: AlertTriangle,
    classes: "bg-orange-900/60 border-orange-700 text-orange-400",
  },
  retracted: {
    label: "Retracted",
    icon: XCircle,
    classes: "bg-red-900/60 border-red-700 text-red-400",
  },
};

export function VerificationBadge({ 
  status, 
  date,
  size = "md",
  className = "" 
}: VerificationBadgeProps) {
  const config = verificationConfig[status];
  const sizeConfig = sizeClasses[size];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 border font-bold uppercase tracking-wider ${config.classes} ${sizeConfig.badge} ${className}`}
      title={date ? `${config.label} on ${date}` : config.label}
      role="status"
      aria-label={`Verification status: ${config.label}`}
    >
      <Icon className={`${sizeConfig.icon}`} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  );
}

/**
 * Source Card Component
 * Displays a source with its tier, verification status, and link
 */
interface Source {
  id: string;
  title: string;
  url: string;
  tier: SourceTier;
  verification: VerificationStatus;
  publishDate?: string;
  verifiedDate?: string;
  publisher?: string;
  archiveUrl?: string;
  description?: string;
}

interface SourceCardProps {
  source: Source;
  compact?: boolean;
  className?: string;
}

export function SourceCard({ source, compact = false, className = "" }: SourceCardProps) {
  return (
    <div 
      className={`bg-zinc-950 border border-zinc-800 hover:border-zinc-800/50 transition-colors ${className}`}
    >
      <div className={compact ? "p-3" : "p-4"}>
        {/* Header with badges */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap gap-1.5">
            <SourceTierBadge tier={source.tier} size="sm" />
            <VerificationBadge status={source.verification} size="sm" />
          </div>
          {source.archiveUrl && (
            <a
              href={source.archiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              title="View archived version"
              aria-label="View archived version of source"
            >
              <Clock className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Title */}
        <h4 className={`font-bold text-white mb-1 ${compact ? "text-sm" : "text-base"}`}>
          {source.title}
        </h4>

        {/* Publisher and date */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
          {source.publisher && <span>{source.publisher}</span>}
          {source.publisher && source.publishDate && <span>•</span>}
          {source.publishDate && <span>{source.publishDate}</span>}
        </div>

        {/* Description */}
        {!compact && source.description && (
          <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
            {source.description}
          </p>
        )}

        {/* Link */}
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-medium uppercase tracking-wider transition-colors"
          aria-label={`View source: ${source.title} (opens in new tab)`}
        >
          View Source
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

/**
 * Source Tier Legend
 * Explains the tier system to users
 */
interface SourceTierLegendProps {
  compact?: boolean;
  className?: string;
}

export function SourceTierLegend({ compact = false, className = "" }: SourceTierLegendProps) {
  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      <div className={compact ? "p-3" : "p-4"}>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
          Source Tier System
        </h4>
        <div className="space-y-2">
          {(Object.entries(tierConfig) as [SourceTier, typeof tierConfig.primary][]).map(([tier, config]) => (
            <div key={tier} className="flex items-start gap-2">
              <SourceTierBadge tier={tier} size="sm" showLabel={false} />
              <div>
                <span className="text-xs font-medium text-white">{config.label}</span>
                {!compact && (
                  <p className="text-[10px] text-zinc-500 mt-0.5">{config.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SourceTierBadge;
