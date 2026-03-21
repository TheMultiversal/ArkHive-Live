"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCompare,
  Check,
  X,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Link2,
  Calendar,
  User,
  FileText,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Plus,
  Minus,
  ArrowLeftRight,
  Scale,
  Layers,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type ComparisonResult = "match" | "conflict" | "partial" | "unique";

export interface SourceClaim {
  id: string;
  field: string;
  value: string;
  confidence?: number;
  citation?: string;
}

export interface ComparisonSource {
  id: string;
  name: string;
  type: "primary" | "secondary" | "tertiary";
  date: Date;
  author?: string;
  url?: string;
  claims: SourceClaim[];
  reliability: number; // 0-100
}

export interface ClaimComparison {
  field: string;
  sources: {
    sourceId: string;
    value: string;
    confidence?: number;
  }[];
  result: ComparisonResult;
  consensus?: string;
}

interface SourceComparisonProps {
  sources: ComparisonSource[];
  onAddSource?: () => void;
  onRemoveSource?: (sourceId: string) => void;
  className?: string;
}

// ============================================================================
// UTILITIES
// ============================================================================

const resultColors: Record<ComparisonResult, string> = {
  match: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  conflict: "text-red-400 bg-red-500/10 border-red-500/30",
  partial: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  unique: "text-zinc-400 bg-zinc-500/10 border-zinc-500/30",
};

const resultIcons: Record<ComparisonResult, React.ReactNode> = {
  match: <Check className="w-4 h-4" />,
  conflict: <X className="w-4 h-4" />,
  partial: <AlertTriangle className="w-4 h-4" />,
  unique: <Minus className="w-4 h-4" />,
};

const resultLabels: Record<ComparisonResult, string> = {
  match: "Sources Agree",
  conflict: "Conflicting Data",
  partial: "Partial Match",
  unique: "Single Source",
};

function compareValues(values: string[]): ComparisonResult {
  const uniqueValues = [...new Set(values.map((v) => v.toLowerCase().trim()))];
  if (uniqueValues.length === 1) return "match";
  if (uniqueValues.length === values.length) return "conflict";
  return "partial";
}

function findConsensus(
  claims: { value: string; confidence?: number }[]
): string | undefined {
  const valueCounts = new Map<string, { count: number; confidence: number }>();

  claims.forEach((claim) => {
    const normalized = claim.value.toLowerCase().trim();
    const existing = valueCounts.get(normalized) || { count: 0, confidence: 0 };
    valueCounts.set(normalized, {
      count: existing.count + 1,
      confidence: Math.max(existing.confidence, claim.confidence || 0),
    });
  });

  let bestValue: string | undefined;
  let bestScore = 0;

  valueCounts.forEach((data, value) => {
    const score = data.count * 2 + data.confidence / 100;
    if (score > bestScore) {
      bestScore = score;
      bestValue = value;
    }
  });

  // Return original case version
  return claims.find(
    (c) => c.value.toLowerCase().trim() === bestValue
  )?.value;
}

// ============================================================================
// SOURCE HEADER COMPONENT
// ============================================================================

interface SourceHeaderProps {
  source: ComparisonSource;
  onRemove?: () => void;
  isExpanded: boolean;
  onToggle: () => void;
}

function SourceHeader({
  source,
  onRemove,
  isExpanded,
  onToggle,
}: SourceHeaderProps) {
  const tierColors = {
    primary: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    secondary: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    tertiary: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  };

  return (
    <div className="border-b border-zinc-800">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onToggle}
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label={isExpanded ? "Collapse source" : "Expand source"}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white truncate">
                {source.name}
              </span>
              <span
                className={`text-xs px-2 py-0.5 border ${
                  tierColors[source.type]
                }`}
              >
                {source.type}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {source.date.toLocaleDateString()}
              </span>
              {source.author && (
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {source.author}
                </span>
              )}
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {source.claims.length} claims
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Reliability indicator */}
          <div className="flex items-center gap-1">
            <div className="w-16 h-1.5 bg-zinc-800 overflow-hidden">
              <div
                className={`h-full ${
                  source.reliability >= 80
                    ? "bg-emerald-500"
                    : source.reliability >= 50
                    ? "bg-amber-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${source.reliability}%` }}
              />
            </div>
            <span className="text-xs text-zinc-500">{source.reliability}%</span>
          </div>

          {source.url && (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="View source"
            >
              <Link2 className="w-4 h-4" />
            </a>
          )}

          {onRemove && (
            <button
              onClick={onRemove}
              className="text-zinc-500 hover:text-red-400 transition-colors"
              aria-label="Remove source"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// COMPARISON ROW COMPONENT
// ============================================================================

interface ComparisonRowProps {
  comparison: ClaimComparison;
  sources: ComparisonSource[];
  showDifferences: boolean;
}

function ComparisonRow({
  comparison,
  sources,
  showDifferences,
}: ComparisonRowProps) {
  const [expanded, setExpanded] = useState(false);

  if (showDifferences && comparison.result === "match") {
    return null;
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="border-b border-zinc-800/50 last:border-0"
    >
      <div
        className="flex items-stretch cursor-pointer hover:bg-zinc-900/50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Field name */}
        <div className="w-48 flex-shrink-0 p-3 border-r border-zinc-800 flex items-center gap-2">
          <span
            className={`p-1 ${resultColors[comparison.result]}`}
            title={resultLabels[comparison.result]}
          >
            {resultIcons[comparison.result]}
          </span>
          <span className="text-sm text-zinc-300 font-medium truncate">
            {comparison.field}
          </span>
        </div>

        {/* Source values */}
        <div className="flex-1 flex">
          {sources.map((source) => {
            const claim = comparison.sources.find(
              (s) => s.sourceId === source.id
            );

            return (
              <div
                key={source.id}
                className="flex-1 p-3 border-r border-zinc-800/50 last:border-0"
              >
                {claim ? (
                  <div>
                    <p
                      className={`text-sm ${
                        claim.value === comparison.consensus
                          ? "text-emerald-400"
                          : comparison.result === "conflict"
                          ? "text-red-300"
                          : "text-zinc-300"
                      }`}
                    >
                      {claim.value}
                    </p>
                    {claim.confidence !== undefined && (
                      <span className="text-xs text-zinc-500 mt-1 inline-block">
                        {claim.confidence}% confidence
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-zinc-600 italic">
                    No data
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Consensus */}
        <div className="w-48 flex-shrink-0 p-3 border-l border-zinc-800 flex items-center">
          {comparison.consensus ? (
            <span className="text-sm text-emerald-400">
              {comparison.consensus}
            </span>
          ) : comparison.result === "conflict" ? (
            <span className="text-sm text-red-400">Disputed</span>
          ) : (
            <span className="text-sm text-zinc-500">ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</span>
          )}
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-zinc-900/30"
          >
            <div className="p-4 space-y-2">
              <h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Analysis
              </h4>
              <p className="text-sm text-zinc-300">
                {comparison.result === "match" && (
                  <>All {comparison.sources.length} sources agree on this value.</>
                )}
                {comparison.result === "conflict" && (
                  <>
                    Sources provide conflicting information.{" "}
                    {comparison.consensus
                      ? `Consensus suggests "${comparison.consensus}" based on reliability scoring.`
                      : "No consensus could be determined."}
                  </>
                )}
                {comparison.result === "partial" && (
                  <>
                    Some sources agree while others differ.{" "}
                    {comparison.consensus &&
                      `Most likely value: "${comparison.consensus}".`}
                  </>
                )}
                {comparison.result === "unique" && (
                  <>Only one source provides data for this field.</>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================================
// COMPARISON SUMMARY
// ============================================================================

interface ComparisonSummaryProps {
  comparisons: ClaimComparison[];
}

function ComparisonSummary({ comparisons }: ComparisonSummaryProps) {
  const counts = useMemo(() => {
    return comparisons.reduce(
      (acc, c) => {
        acc[c.result]++;
        return acc;
      },
      { match: 0, conflict: 0, partial: 0, unique: 0 } as Record<
        ComparisonResult,
        number
      >
    );
  }, [comparisons]);

  const total = comparisons.length;
  const agreementRate = total > 0 ? Math.round((counts.match / total) * 100) : 0;

  return (
    <div className="glass-card p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-zinc-300" />
          Comparison Summary
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">{agreementRate}%</span>
          <span className="text-sm text-zinc-400">agreement</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {(Object.keys(counts) as ComparisonResult[]).map((result) => (
          <div
            key={result}
            className={`p-3 border ${resultColors[result]}`}
          >
            <div className="flex items-center gap-2 mb-1">
              {resultIcons[result]}
              <span className="text-sm font-medium capitalize">{result}</span>
            </div>
            <div className="text-2xl font-bold">{counts[result]}</div>
            <div className="text-xs opacity-70">
              {total > 0 ? Math.round((counts[result] / total) * 100) : 0}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function SourceComparison({
  sources,
  onAddSource,
  onRemoveSource,
  className = "",
}: SourceComparisonProps) {
  const [expandedSources, setExpandedSources] = useState<Set<string>>(
    new Set(sources.map((s) => s.id))
  );
  const [showDifferences, setShowDifferences] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  // Generate comparisons
  const comparisons = useMemo<ClaimComparison[]>(() => {
    // Collect all unique fields
    const allFields = new Set<string>();
    sources.forEach((source) => {
      source.claims.forEach((claim) => {
        allFields.add(claim.field);
      });
    });

    // Build comparisons
    return Array.from(allFields).map((field) => {
      const sourceClaims: ClaimComparison["sources"] = [];

      sources.forEach((source) => {
        const claim = source.claims.find((c) => c.field === field);
        if (claim) {
          sourceClaims.push({
            sourceId: source.id,
            value: claim.value,
            confidence: claim.confidence,
          });
        }
      });

      const values = sourceClaims.map((c) => c.value);
      const result: ComparisonResult =
        sourceClaims.length === 1 ? "unique" : compareValues(values);

      return {
        field,
        sources: sourceClaims,
        result,
        consensus:
          result !== "unique" && result !== "match"
            ? findConsensus(sourceClaims)
            : result === "match"
            ? sourceClaims[0]?.value
            : undefined,
      };
    });
  }, [sources]);

  const toggleSource = (sourceId: string) => {
    const newExpanded = new Set(expandedSources);
    if (newExpanded.has(sourceId)) {
      newExpanded.delete(sourceId);
    } else {
      newExpanded.add(sourceId);
    }
    setExpandedSources(newExpanded);
  };

  if (sources.length === 0) {
    return (
      <div className={`glass-card p-8 text-center ${className}`}>
        <Layers className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-zinc-300 mb-2">
          No Sources to Compare
        </h3>
        <p className="text-sm text-zinc-500 mb-4">
          Add at least two sources to begin comparison analysis.
        </p>
        {onAddSource && (
          <button
            onClick={onAddSource}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Source
          </button>
        )}
      </div>
    );
  }

  if (sources.length === 1) {
    return (
      <div className={`glass-card p-8 text-center ${className}`}>
        <GitCompare className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-zinc-300 mb-2">
          Add Another Source
        </h3>
        <p className="text-sm text-zinc-500 mb-4">
          Comparison requires at least two sources.
        </p>
        {onAddSource && (
          <button
            onClick={onAddSource}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Source
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Summary */}
      <ComparisonSummary comparisons={comparisons} />

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDifferences(!showDifferences)}
            className={`flex items-center gap-2 px-3 py-1.5 border transition-colors text-sm ${
              showDifferences
                ? "bg-zinc-700/20 border-zinc-600/50 text-zinc-400"
                : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-zinc-300"
            }`}
          >
            {showDifferences ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
            {showDifferences ? "Showing Differences" : "Show All"}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 border transition-colors ${
              viewMode === "grid"
                ? "bg-zinc-700 border-zinc-600 text-white"
                : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-zinc-300"
            }`}
            aria-label="Grid view"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("compact")}
            className={`p-2 border transition-colors ${
              viewMode === "compact"
                ? "bg-zinc-700 border-zinc-600 text-white"
                : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-zinc-300"
            }`}
            aria-label="Compact view"
          >
            <Minimize2 className="w-4 h-4" />
          </button>

          {onAddSource && (
            <button
              onClick={onAddSource}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Source
            </button>
          )}
        </div>
      </div>

      {/* Source Headers */}
      <div className="glass-card overflow-hidden mb-4">
        {sources.map((source) => (
          <SourceHeader
            key={source.id}
            source={source}
            onRemove={onRemoveSource ? () => onRemoveSource(source.id) : undefined}
            isExpanded={expandedSources.has(source.id)}
            onToggle={() => toggleSource(source.id)}
          />
        ))}
      </div>

      {/* Comparison Table */}
      <div className="glass-card overflow-hidden">
        {/* Table Header */}
        <div className="flex items-stretch border-b border-zinc-700 bg-zinc-900/50">
          <div className="w-48 flex-shrink-0 p-3 border-r border-zinc-700">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Field
            </span>
          </div>
          <div className="flex-1 flex">
            {sources.map((source) => (
              <div
                key={source.id}
                className="flex-1 p-3 border-r border-zinc-700/50 last:border-0"
              >
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider truncate block">
                  {source.name}
                </span>
              </div>
            ))}
          </div>
          <div className="w-48 flex-shrink-0 p-3 border-l border-zinc-700">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              Consensus
            </span>
          </div>
        </div>

        {/* Comparison Rows */}
        <AnimatePresence mode="popLayout">
          {comparisons
            .filter((c) => !showDifferences || c.result !== "match")
            .map((comparison) => (
              <ComparisonRow
                key={comparison.field}
                comparison={comparison}
                sources={sources}
                showDifferences={showDifferences}
              />
            ))}
        </AnimatePresence>

        {showDifferences &&
          comparisons.filter((c) => c.result !== "match").length === 0 && (
            <div className="p-8 text-center">
              <Check className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-zinc-400">All sources are in agreement!</p>
            </div>
          )}
      </div>
    </div>
  );
}

// ============================================================================
// SIDE-BY-SIDE COMPARISON
// ============================================================================

interface SideBySideComparisonProps {
  sourceA: ComparisonSource;
  sourceB: ComparisonSource;
  className?: string;
}

export function SideBySideComparison({
  sourceA,
  sourceB,
  className = "",
}: SideBySideComparisonProps) {
  // Get all unique fields
  const allFields = useMemo(() => {
    const fields = new Set<string>();
    sourceA.claims.forEach((c) => fields.add(c.field));
    sourceB.claims.forEach((c) => fields.add(c.field));
    return Array.from(fields).sort();
  }, [sourceA, sourceB]);

  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex border-b border-zinc-700 bg-zinc-900/50">
        <div className="flex-1 p-4 border-r border-zinc-700">
          <h3 className="font-medium text-white">{sourceA.name}</h3>
          <p className="text-sm text-zinc-500">{sourceA.type} source</p>
        </div>
        <div className="px-4 flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5 text-zinc-600" />
        </div>
        <div className="flex-1 p-4 border-l border-zinc-700">
          <h3 className="font-medium text-white">{sourceB.name}</h3>
          <p className="text-sm text-zinc-500">{sourceB.type} source</p>
        </div>
      </div>

      {/* Comparison rows */}
      {allFields.map((field) => {
        const claimA = sourceA.claims.find((c) => c.field === field);
        const claimB = sourceB.claims.find((c) => c.field === field);
        const match = claimA && claimB && claimA.value === claimB.value;

        return (
          <div
            key={field}
            className="flex border-b border-zinc-800/50 last:border-0"
          >
            <div className="flex-1 p-3 border-r border-zinc-800/50">
              {claimA ? (
                <div>
                  <p className="text-xs text-zinc-500 mb-1">{field}</p>
                  <p
                    className={`text-sm ${
                      match ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {claimA.value}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-zinc-600 italic">ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
              )}
            </div>

            <div className="w-10 flex items-center justify-center bg-zinc-900/30">
              {claimA && claimB ? (
                match ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )
              ) : (
                <Minus className="w-4 h-4 text-zinc-600" />
              )}
            </div>

            <div className="flex-1 p-3 border-l border-zinc-800/50">
              {claimB ? (
                <div>
                  <p className="text-xs text-zinc-500 mb-1">{field}</p>
                  <p
                    className={`text-sm ${
                      match ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {claimB.value}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-zinc-600 italic">ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// QUICK COMPARE WIDGET
// ============================================================================

interface QuickCompareProps {
  sources: ComparisonSource[];
  field: string;
  className?: string;
}

export function QuickCompare({ sources, field, className = "" }: QuickCompareProps) {
  const values = sources
    .map((s) => {
      const claim = s.claims.find((c) => c.field === field);
      return claim ? { source: s.name, value: claim.value } : null;
    })
    .filter(Boolean) as { source: string; value: string }[];

  const uniqueValues = [...new Set(values.map((v) => v.value))];
  const allMatch = uniqueValues.length === 1;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`p-1 ${allMatch ? resultColors.match : resultColors.conflict}`}
      >
        {allMatch ? (
          <Check className="w-3 h-3" />
        ) : (
          <AlertTriangle className="w-3 h-3" />
        )}
      </span>
      <span className="text-xs text-zinc-400">
        {values.length} source{values.length !== 1 ? "s" : ""}
        {!allMatch && ` (${uniqueValues.length} values)`}
      </span>
    </div>
  );
}
