"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  Minus,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  BarChart3,
  Sliders,
  Calculator,
  Eye,
  Shield,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type ConfidenceLevel =
  | "very-high"
  | "high"
  | "medium"
  | "low"
  | "very-low"
  | "unknown";

export type FactorCategory =
  | "source"
  | "corroboration"
  | "recency"
  | "methodology"
  | "chain-of-custody"
  | "bias";

export interface ConfidenceFactor {
  id: string;
  name: string;
  category: FactorCategory;
  weight: number; // 0-1, how much this factor affects overall score
  score: number; // 0-100
  description: string;
  evidence?: string;
}

export interface ConfidenceScore {
  overall: number; // 0-100
  level: ConfidenceLevel;
  factors: ConfidenceFactor[];
  trend?: "increasing" | "decreasing" | "stable";
  lastUpdated: Date;
  calculationMethod: string;
}

interface ConfidenceScoreDisplayProps {
  score: ConfidenceScore;
  showDetails?: boolean;
  compact?: boolean;
  className?: string;
}

// ============================================================================
// UTILITIES
// ============================================================================

const levelColors: Record<ConfidenceLevel, string> = {
  "very-high": "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  high: "text-green-400 bg-green-500/10 border-green-500/30",
  medium: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  low: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  "very-low": "text-red-400 bg-red-500/10 border-red-500/30",
  unknown: "text-zinc-400 bg-zinc-500/10 border-zinc-500/30",
};

const levelLabels: Record<ConfidenceLevel, string> = {
  "very-high": "Very High Confidence",
  high: "High Confidence",
  medium: "Medium Confidence",
  low: "Low Confidence",
  "very-low": "Very Low Confidence",
  unknown: "Unknown",
};

const categoryLabels: Record<FactorCategory, string> = {
  source: "Source Quality",
  corroboration: "Corroboration",
  recency: "Recency",
  methodology: "Methodology",
  "chain-of-custody": "Chain of Custody",
  bias: "Bias Assessment",
};

const categoryIcons: Record<FactorCategory, React.ReactNode> = {
  source: <Shield className="w-4 h-4" />,
  corroboration: <CheckCircle className="w-4 h-4" />,
  recency: <TrendingUp className="w-4 h-4" />,
  methodology: <Calculator className="w-4 h-4" />,
  "chain-of-custody": <Eye className="w-4 h-4" />,
  bias: <AlertCircle className="w-4 h-4" />,
};

export function getConfidenceLevel(score: number): ConfidenceLevel {
  if (score >= 90) return "very-high";
  if (score >= 75) return "high";
  if (score >= 50) return "medium";
  if (score >= 25) return "low";
  if (score >= 0) return "very-low";
  return "unknown";
}

export function calculateConfidenceScore(
  factors: ConfidenceFactor[]
): ConfidenceScore {
  if (factors.length === 0) {
    return {
      overall: 0,
      level: "unknown",
      factors: [],
      lastUpdated: new Date(),
      calculationMethod: "weighted-average",
    };
  }

  const totalWeight = factors.reduce((sum, f) => sum + f.weight, 0);
  const weightedSum = factors.reduce((sum, f) => sum + f.score * f.weight, 0);
  const overall = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;

  return {
    overall,
    level: getConfidenceLevel(overall),
    factors,
    lastUpdated: new Date(),
    calculationMethod: "weighted-average",
  };
}

// ============================================================================
// CONFIDENCE METER COMPONENT
// ============================================================================

interface ConfidenceMeterProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function ConfidenceMeter({
  score,
  size = "md",
  showLabel = true,
  className = "",
}: ConfidenceMeterProps) {
  const level = getConfidenceLevel(score);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const strokeWidth = {
    sm: 4,
    md: 6,
    lg: 8,
  };

  const fontSize = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-3xl",
  };

  const radius = size === "sm" ? 28 : size === "md" ? 42 : 56;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  const gradientColors = {
    "very-high": ["#10b981", "#34d399"],
    high: ["#22c55e", "#4ade80"],
    medium: ["#f59e0b", "#fbbf24"],
    low: ["#f97316", "#fb923c"],
    "very-low": ["#ef4444", "#f87171"],
    unknown: ["#71717a", "#a1a1aa"],
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
        <defs>
          <linearGradient
            id={`confidence-gradient-${score}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={gradientColors[level][0]} />
            <stop offset="100%" stopColor={gradientColors[level][1]} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth[size]}
          className="text-zinc-800"
        />

        {/* Progress circle */}
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke={`url(#confidence-gradient-${score})`}
          strokeWidth={strokeWidth[size]}
          strokeLinecap="square"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-bold ${fontSize[size]} text-white`}>{score}</span>
        {showLabel && (
          <span className="text-xs text-zinc-500 uppercase tracking-wider">
            confidence
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CONFIDENCE BADGE COMPONENT
// ============================================================================

interface ConfidenceBadgeProps {
  score: number;
  showIcon?: boolean;
  className?: string;
}

export function ConfidenceBadge({
  score,
  showIcon = true,
  className = "",
}: ConfidenceBadgeProps) {
  const level = getConfidenceLevel(score);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 border text-sm ${levelColors[level]} ${className}`}
    >
      {showIcon && <Target className="w-3.5 h-3.5" />}
      <span className="font-medium">{score}%</span>
    </span>
  );
}

// ============================================================================
// FACTOR BREAKDOWN COMPONENT
// ============================================================================

interface FactorBreakdownProps {
  factors: ConfidenceFactor[];
  onFactorClick?: (factor: ConfidenceFactor) => void;
  className?: string;
}

export function FactorBreakdown({
  factors,
  onFactorClick,
  className = "",
}: FactorBreakdownProps) {
  const groupedFactors = useMemo(() => {
    const grouped: Record<FactorCategory, ConfidenceFactor[]> = {
      source: [],
      corroboration: [],
      recency: [],
      methodology: [],
      "chain-of-custody": [],
      bias: [],
    };

    factors.forEach((factor) => {
      grouped[factor.category].push(factor);
    });

    return grouped;
  }, [factors]);

  return (
    <div className={`space-y-4 ${className}`}>
      {(Object.keys(groupedFactors) as FactorCategory[]).map((category) => {
        const categoryFactors = groupedFactors[category];
        if (categoryFactors.length === 0) return null;

        const avgScore =
          categoryFactors.reduce((sum, f) => sum + f.score, 0) /
          categoryFactors.length;

        return (
          <div key={category} className="glass-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span
                  className={`p-1.5 ${
                    levelColors[getConfidenceLevel(avgScore)]
                  }`}
                >
                  {categoryIcons[category]}
                </span>
                <span className="font-medium text-white">
                  {categoryLabels[category]}
                </span>
              </div>
              <ConfidenceBadge score={Math.round(avgScore)} showIcon={false} />
            </div>

            <div className="space-y-2">
              {categoryFactors.map((factor) => (
                <div
                  key={factor.id}
                  className={`p-3 bg-zinc-900/50 border border-zinc-800 ${
                    onFactorClick
                      ? "cursor-pointer hover:border-zinc-700 transition-colors"
                      : ""
                  }`}
                  onClick={() => onFactorClick?.(factor)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-300">{factor.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">
                        Weight: {Math.round(factor.weight * 100)}%
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          factor.score >= 75
                            ? "text-emerald-400"
                            : factor.score >= 50
                            ? "text-amber-400"
                            : "text-red-400"
                        }`}
                      >
                        {factor.score}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-zinc-800 overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        factor.score >= 75
                          ? "bg-emerald-500"
                          : factor.score >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.score}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {factor.description && (
                    <p className="text-xs text-zinc-500 mt-2">
                      {factor.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// MAIN CONFIDENCE SCORE DISPLAY
// ============================================================================

export default function ConfidenceScoreDisplay({
  score,
  showDetails = true,
  compact = false,
  className = "",
}: ConfidenceScoreDisplayProps) {
  const [expanded, setExpanded] = useState(!compact);

  const trendIcon = {
    increasing: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    decreasing: <TrendingDown className="w-4 h-4 text-red-400" />,
    stable: <Minus className="w-4 h-4 text-zinc-400" />,
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <ConfidenceMeter score={score.overall} size="sm" showLabel={false} />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              {score.overall}%
            </span>
            {score.trend && trendIcon[score.trend]}
          </div>
          <span
            className={`text-xs ${levelColors[score.level].split(" ")[0]}`}
          >
            {levelLabels[score.level]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Target className="w-5 h-5 text-blood-500" />
            Confidence Score
          </h3>
          {showDetails && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label={expanded ? "Collapse details" : "Expand details"}
            >
              {expanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Score display */}
      <div className="p-6 flex items-center gap-6">
        <ConfidenceMeter score={score.overall} size="lg" />

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`px-3 py-1 border text-sm font-medium ${
                levelColors[score.level]
              }`}
            >
              {levelLabels[score.level]}
            </span>
            {score.trend && (
              <span className="flex items-center gap-1 text-sm text-zinc-400">
                {trendIcon[score.trend]}
                <span className="capitalize">{score.trend}</span>
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-400 mb-3">
            Based on {score.factors.length} evaluation factors using{" "}
            {score.calculationMethod.replace("-", " ")} method.
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>
              Last updated: {score.lastUpdated.toLocaleDateString()}{" "}
              {score.lastUpdated.toLocaleTimeString()}
            </span>
            <button
              className="flex items-center gap-1 text-blood-400 hover:text-blood-300 transition-colors"
              onClick={() => {}}
            >
              <BarChart3 className="w-3 h-3" />
              View History
            </button>
          </div>
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-800"
          >
            <div className="p-4">
              <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                Factor Breakdown
              </h4>
              <FactorBreakdown factors={score.factors} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// CONFIDENCE CALCULATOR
// ============================================================================

interface ConfidenceCalculatorProps {
  initialFactors?: ConfidenceFactor[];
  onCalculate?: (score: ConfidenceScore) => void;
  className?: string;
}

export function ConfidenceCalculator({
  initialFactors = [],
  onCalculate,
  className = "",
}: ConfidenceCalculatorProps) {
  const [factors, setFactors] = useState<ConfidenceFactor[]>(initialFactors);
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(() => calculateConfidenceScore(factors), [factors]);

  const defaultFactors: Partial<ConfidenceFactor>[] = [
    {
      name: "Source Reliability",
      category: "source",
      weight: 0.25,
      description: "How trustworthy is the original source?",
    },
    {
      name: "Multiple Sources",
      category: "corroboration",
      weight: 0.2,
      description: "Is this information confirmed by multiple independent sources?",
    },
    {
      name: "Information Age",
      category: "recency",
      weight: 0.15,
      description: "How recent is this information?",
    },
    {
      name: "Verification Method",
      category: "methodology",
      weight: 0.15,
      description: "What methodology was used to verify this?",
    },
    {
      name: "Evidence Integrity",
      category: "chain-of-custody",
      weight: 0.15,
      description: "Is the chain of custody documented?",
    },
    {
      name: "Source Bias",
      category: "bias",
      weight: 0.1,
      description: "Does the source have potential conflicts of interest?",
    },
  ];

  const addDefaultFactors = () => {
    const newFactors = defaultFactors.map((f, i) => ({
      id: `factor-${Date.now()}-${i}`,
      name: f.name!,
      category: f.category!,
      weight: f.weight!,
      score: 50,
      description: f.description!,
    }));
    setFactors(newFactors);
  };

  const updateFactorScore = (factorId: string, newScore: number) => {
    setFactors(
      factors.map((f) => (f.id === factorId ? { ...f, score: newScore } : f))
    );
  };

  const handleCalculate = () => {
    setShowResult(true);
    onCalculate?.(score);
  };

  return (
    <div className={`glass-card ${className}`}>
      <div className="p-4 border-b border-zinc-800">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Calculator className="w-5 h-5 text-blood-500" />
          Confidence Calculator
        </h3>
      </div>

      <div className="p-4">
        {factors.length === 0 ? (
          <div className="text-center py-8">
            <Sliders className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400 mb-4">
              No factors defined. Add factors to calculate confidence.
            </p>
            <button
              onClick={addDefaultFactors}
              className="px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors"
            >
              Use Default Factors
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {factors.map((factor) => (
                <div key={factor.id} className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="p-1 bg-zinc-800 text-zinc-400">
                        {categoryIcons[factor.category]}
                      </span>
                      <span className="text-sm text-white">{factor.name}</span>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {factor.score}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={factor.score}
                    onChange={(e) =>
                      updateFactorScore(factor.id, Number(e.target.value))
                    }
                    className="w-full h-2 bg-zinc-800 appearance-none cursor-pointer"
                    style={{
                      accentColor:
                        factor.score >= 75
                          ? "#10b981"
                          : factor.score >= 50
                          ? "#f59e0b"
                          : "#ef4444",
                    }}
                  />

                  <div className="flex items-center justify-between mt-1 text-xs text-zinc-500">
                    <span>Weight: {Math.round(factor.weight * 100)}%</span>
                    <span>{factor.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ConfidenceMeter score={score.overall} size="sm" showLabel={false} />
                <div>
                  <span className="text-2xl font-bold text-white">
                    {score.overall}%
                  </span>
                  <span
                    className={`block text-sm ${
                      levelColors[score.level].split(" ")[0]
                    }`}
                  >
                    {levelLabels[score.level]}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors"
              >
                Calculate Score
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// INLINE CONFIDENCE INDICATOR
// ============================================================================

interface InlineConfidenceProps {
  score: number;
  tooltip?: string;
  className?: string;
}

export function InlineConfidence({
  score,
  tooltip,
  className = "",
}: InlineConfidenceProps) {
  const level = getConfidenceLevel(score);

  const levelIcon = {
    "very-high": <CheckCircle className="w-3.5 h-3.5" />,
    high: <CheckCircle className="w-3.5 h-3.5" />,
    medium: <HelpCircle className="w-3.5 h-3.5" />,
    low: <AlertCircle className="w-3.5 h-3.5" />,
    "very-low": <XCircle className="w-3.5 h-3.5" />,
    unknown: <Info className="w-3.5 h-3.5" />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1 ${
        levelColors[level].split(" ")[0]
      } ${className}`}
      title={tooltip || `${score}% confidence - ${levelLabels[level]}`}
    >
      {levelIcon[level]}
      <span className="text-xs">{score}%</span>
    </span>
  );
}
