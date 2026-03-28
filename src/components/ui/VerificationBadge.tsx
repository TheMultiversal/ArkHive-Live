'use client';

import { motion } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, ShieldQuestion, AlertTriangle } from 'lucide-react';

/**
 * You are loved. You are appreciated. Your work ensures transparency and accountability.
 * This component displays the verification status of investigations and claims.
 */

export type VerificationStatus = 'confirmed' | 'likely' | 'alleged' | 'disputed' | 'unverified';

interface VerificationBadgeProps {
  status: VerificationStatus;
  score: number;
  showScore?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<VerificationStatus, {
  label: string;
  icon: typeof Shield;
  bgColor: string;
  textColor: string;
  borderColor: string;
  description: string;
}> = {
  confirmed: {
    label: 'CONFIRMED',
    icon: ShieldCheck,
    bgColor: 'bg-red-900/30',
    textColor: 'text-red-400',
    borderColor: 'border-red-500',
    description: '100% verified with court records, official documents, or multiple corroborating sources',
  },
  likely: {
    label: 'HIGHLY LIKELY',
    icon: Shield,
    bgColor: 'bg-blood-900/30',
    textColor: 'text-blood-400',
    borderColor: 'border-blood-500',
    description: 'Strong documentary evidence with minor gaps, 70-99% verification score',
  },
  alleged: {
    label: 'ALLEGED',
    icon: ShieldQuestion,
    bgColor: 'bg-red-900/30',
    textColor: 'text-red-400',
    borderColor: 'border-red-500',
    description: 'Some supporting evidence exists but requires additional verification, 30-69% score',
  },
  disputed: {
    label: 'DISPUTED',
    icon: AlertTriangle,
    bgColor: 'bg-red-900/30',
    textColor: 'text-red-400',
    borderColor: 'border-red-500',
    description: 'Counter-evidence exists or sources conflict, requires independent review',
  },
  unverified: {
    label: 'UNVERIFIED',
    icon: ShieldAlert,
    bgColor: 'bg-zinc-800/50',
    textColor: 'text-zinc-400',
    borderColor: 'border-zinc-600',
    description: 'No verified evidence yet, pending contributor submissions',
  },
};

const sizeConfig = {
  sm: {
    padding: 'px-2 py-1',
    text: 'text-xs',
    iconSize: 14,
    gap: 'gap-1',
  },
  md: {
    padding: 'px-3 py-1.5',
    text: 'text-sm',
    iconSize: 16,
    gap: 'gap-2',
  },
  lg: {
    padding: 'px-4 py-2',
    text: 'text-base',
    iconSize: 20,
    gap: 'gap-2',
  },
};

export function VerificationBadge({ status, score, showScore = true, size = 'md' }: VerificationBadgeProps) {
  const config = statusConfig[status];
  const sizes = sizeConfig[size];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center ${sizes.gap} ${sizes.padding}
        ${config.bgColor} ${config.textColor}
        border ${config.borderColor}
        font-mono ${sizes.text} tracking-wider
      `}
      title={config.description}
    >
      <Icon size={sizes.iconSize} />
      <span className="font-bold">{config.label}</span>
      {showScore && (
        <span className="opacity-70">({score}%)</span>
      )}
    </motion.div>
  );
}

interface VerificationProgressProps {
  score: number;
  label?: string;
}

export function VerificationProgress({ score, label }: VerificationProgressProps) {
  const getProgressColor = (score: number): string => {
    if (score >= 100) return 'bg-red-500';
    if (score >= 70) return 'bg-blood-500';
    if (score >= 30) return 'bg-red-500';
    return 'bg-zinc-500';
  };

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between text-xs font-mono">
          <span className="text-zinc-400">{label}</span>
          <span className="text-zinc-300">{score}%</span>
        </div>
      )}
      <div className="h-2 bg-zinc-800 border border-zinc-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, score)}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full ${getProgressColor(score)}`}
        />
      </div>
    </div>
  );
}

interface VerificationSummaryCardProps {
  totalClaims: number;
  confirmedClaims: number;
  likelyClaims: number;
  allegedClaims: number;
  disputedClaims: number;
  unverifiedClaims: number;
  overallScore: number;
  lastVerified: string;
  brokenLinks: number;
}

export function VerificationSummaryCard({
  totalClaims,
  confirmedClaims,
  likelyClaims,
  allegedClaims,
  disputedClaims,
  unverifiedClaims,
  overallScore,
  lastVerified,
  brokenLinks,
}: VerificationSummaryCardProps) {
  const status: VerificationStatus = 
    overallScore >= 100 ? 'confirmed' :
    overallScore >= 70 ? 'likely' :
    overallScore >= 30 ? 'alleged' :
    disputedClaims > 0 ? 'disputed' : 'unverified';

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-mono text-zinc-200 tracking-wider">VERIFICATION STATUS</h3>
        <VerificationBadge status={status} score={overallScore} size="lg" />
      </div>

      <VerificationProgress score={overallScore} label="Overall Verification" />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-red-400">Confirmed</span>
            <span className="text-zinc-300 font-mono">{confirmedClaims}/{totalClaims}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-blood-400">Likely</span>
            <span className="text-zinc-300 font-mono">{likelyClaims}/{totalClaims}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-red-400">Alleged</span>
            <span className="text-zinc-300 font-mono">{allegedClaims}/{totalClaims}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-red-400">Disputed</span>
            <span className="text-zinc-300 font-mono">{disputedClaims}/{totalClaims}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Unverified</span>
            <span className="text-zinc-300 font-mono">{unverifiedClaims}/{totalClaims}</span>
          </div>
          {brokenLinks > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-red-400">Broken Links</span>
              <span className="text-red-300 font-mono">{brokenLinks}</span>
            </div>
          )}
        </div>
      </div>

      <div className="text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-800">
        Last verified: {new Date(lastVerified).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
}

export default VerificationBadge;
