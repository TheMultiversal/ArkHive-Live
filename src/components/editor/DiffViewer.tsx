'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Minus,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Download,
  Eye,
  EyeOff,
  Filter,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

type DiffLineType = 'added' | 'removed' | 'unchanged' | 'header';

interface DiffLine {
  type: DiffLineType;
  content: string;
  oldLineNum?: number;
  newLineNum?: number;
}

interface DiffHunk {
  header: string;
  oldStart: number;
  oldCount: number;
  newStart: number;
  newCount: number;
  lines: DiffLine[];
}

interface DiffViewerProps {
  oldText: string;
  newText: string;
  oldFilename?: string;
  newFilename?: string;
  language?: string;
  viewMode?: 'unified' | 'split';
  showLineNumbers?: boolean;
  contextLines?: number;
  className?: string;
}

// ============================================================
// Diff Algorithm (Simple LCS-based)
// ============================================================

function computeDiff(oldLines: string[], newLines: string[]): DiffLine[] {
  const result: DiffLine[] = [];
  const lcs = longestCommonSubsequence(oldLines, newLines);

  let oldIndex = 0;
  let newIndex = 0;
  let lcsIndex = 0;
  let oldLineNum = 1;
  let newLineNum = 1;

  while (oldIndex < oldLines.length || newIndex < newLines.length) {
    if (lcsIndex < lcs.length && oldLines[oldIndex] === lcs[lcsIndex] && newLines[newIndex] === lcs[lcsIndex]) {
      // Unchanged line
      result.push({
        type: 'unchanged',
        content: oldLines[oldIndex],
        oldLineNum: oldLineNum++,
        newLineNum: newLineNum++,
      });
      oldIndex++;
      newIndex++;
      lcsIndex++;
    } else if (oldIndex < oldLines.length && (lcsIndex >= lcs.length || oldLines[oldIndex] !== lcs[lcsIndex])) {
      // Removed line
      result.push({
        type: 'removed',
        content: oldLines[oldIndex],
        oldLineNum: oldLineNum++,
      });
      oldIndex++;
    } else if (newIndex < newLines.length && (lcsIndex >= lcs.length || newLines[newIndex] !== lcs[lcsIndex])) {
      // Added line
      result.push({
        type: 'added',
        content: newLines[newIndex],
        newLineNum: newLineNum++,
      });
      newIndex++;
    }
  }

  return result;
}

function longestCommonSubsequence(arr1: string[], arr2: string[]): string[] {
  const m = arr1.length;
  const n = arr2.length;
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find LCS
  const lcs: string[] = [];
  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    if (arr1[i - 1] === arr2[j - 1]) {
      lcs.unshift(arr1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// ============================================================
// Component
// ============================================================

export default function DiffViewer({
  oldText,
  newText,
  oldFilename = 'Original',
  newFilename = 'Modified',
  language = 'text',
  viewMode: initialViewMode = 'unified',
  showLineNumbers = true,
  contextLines = 3,
  className,
}: DiffViewerProps) {
  const [viewMode, setViewMode] = useState(initialViewMode);
  const [showOnlyChanges, setShowOnlyChanges] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedHunks, setExpandedHunks] = useState<Set<number>>(new Set([0]));

  // Compute diff
  const diff = useMemo(() => {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');
    return computeDiff(oldLines, newLines);
  }, [oldText, newText]);

  // Stats
  const stats = useMemo(() => {
    return diff.reduce(
      (acc, line) => {
        if (line.type === 'added') acc.additions++;
        if (line.type === 'removed') acc.deletions++;
        return acc;
      },
      { additions: 0, deletions: 0 }
    );
  }, [diff]);

  // Filter lines if showing only changes
  const displayLines = useMemo(() => {
    if (!showOnlyChanges) return diff;
    return diff.filter((line) => line.type !== 'unchanged');
  }, [diff, showOnlyChanges]);

  const handleCopy = async () => {
    // Generate unified diff format
    const diffText = displayLines
      .map((line) => {
        const prefix =
          line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
        return `${prefix}${line.content}`;
      })
      .join('\n');

    await navigator.clipboard.writeText(diffText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const diffText = `--- ${oldFilename}\n+++ ${newFilename}\n` +
      displayLines
        .map((line) => {
          const prefix =
            line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
          return `${prefix}${line.content}`;
        })
        .join('\n');

    const blob = new Blob([diffText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${oldFilename}.diff`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={cn('bg-zinc-900 border border-zinc-800', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-800/50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-500">{oldFilename}</span>
            <span className="text-zinc-600">→</span>
            <span className="text-sm text-zinc-300">{newFilename}</span>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-green-500">
              <Plus className="w-3 h-3" />
              {stats.additions}
            </span>
            <span className="flex items-center gap-1 text-red-500">
              <Minus className="w-3 h-3" />
              {stats.deletions}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="flex items-center border border-zinc-700">
            <button
              onClick={() => setViewMode('unified')}
              className={cn(
                'px-3 py-1 text-xs transition-colors',
                viewMode === 'unified'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              Unified
            </button>
            <button
              onClick={() => setViewMode('split')}
              className={cn(
                'px-3 py-1 text-xs transition-colors',
                viewMode === 'split'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              Split
            </button>
          </div>

          {/* Show only changes */}
          <button
            onClick={() => setShowOnlyChanges(!showOnlyChanges)}
            className={cn(
              'p-1.5 transition-colors',
              showOnlyChanges
                ? 'text-blood-500'
                : 'text-zinc-400 hover:text-white'
            )}
            title={showOnlyChanges ? 'Show all lines' : 'Show only changes'}
          >
            {showOnlyChanges ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            title="Copy diff"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            title="Download diff"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Diff content */}
      <div className="overflow-auto">
        {viewMode === 'unified' ? (
          <UnifiedView
            lines={displayLines}
            showLineNumbers={showLineNumbers}
          />
        ) : (
          <SplitView
            lines={displayLines}
            showLineNumbers={showLineNumbers}
          />
        )}
      </div>

      {/* No changes */}
      {displayLines.length === 0 && (
        <div className="p-8 text-center text-zinc-500">
          No changes detected
        </div>
      )}
    </div>
  );
}

// ============================================================
// Unified View
// ============================================================

interface ViewProps {
  lines: DiffLine[];
  showLineNumbers: boolean;
}

function UnifiedView({ lines, showLineNumbers }: ViewProps) {
  return (
    <table className="w-full font-mono text-sm">
      <tbody>
        {lines.map((line, index) => (
          <tr
            key={index}
            className={cn(
              'border-b border-zinc-800/50',
              line.type === 'added' && 'bg-green-500/10',
              line.type === 'removed' && 'bg-red-500/10'
            )}
          >
            {showLineNumbers && (
              <>
                <td className="px-2 py-0.5 text-right text-zinc-600 select-none w-12 border-r border-zinc-800">
                  {line.oldLineNum || ''}
                </td>
                <td className="px-2 py-0.5 text-right text-zinc-600 select-none w-12 border-r border-zinc-800">
                  {line.newLineNum || ''}
                </td>
              </>
            )}
            <td className="px-2 py-0.5 w-6 text-center select-none">
              {line.type === 'added' && (
                <Plus className="w-3 h-3 text-green-500 inline" />
              )}
              {line.type === 'removed' && (
                <Minus className="w-3 h-3 text-red-500 inline" />
              )}
            </td>
            <td className="px-2 py-0.5">
              <pre
                className={cn(
                  'whitespace-pre-wrap',
                  line.type === 'added' && 'text-green-400',
                  line.type === 'removed' && 'text-red-400',
                  line.type === 'unchanged' && 'text-zinc-400'
                )}
              >
                {line.content || ' '}
              </pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ============================================================
// Split View
// ============================================================

function SplitView({ lines, showLineNumbers }: ViewProps) {
  // Separate lines for left and right panels
  const leftLines = lines.filter((l) => l.type !== 'added');
  const rightLines = lines.filter((l) => l.type !== 'removed');

  // Pad to equal lengths
  const maxLength = Math.max(leftLines.length, rightLines.length);
  while (leftLines.length < maxLength) leftLines.push({ type: 'unchanged', content: '' });
  while (rightLines.length < maxLength) rightLines.push({ type: 'unchanged', content: '' });

  return (
    <div className="flex divide-x divide-zinc-800">
      {/* Left side (old) */}
      <div className="flex-1 overflow-auto">
        <div className="px-3 py-1 text-xs text-zinc-500 bg-zinc-800/50 border-b border-zinc-800 sticky top-0">
          Original
        </div>
        <table className="w-full font-mono text-sm">
          <tbody>
            {leftLines.map((line, index) => (
              <tr
                key={index}
                className={cn(
                  'border-b border-zinc-800/50',
                  line.type === 'removed' && 'bg-red-500/10'
                )}
              >
                {showLineNumbers && (
                  <td className="px-2 py-0.5 text-right text-zinc-600 select-none w-12 border-r border-zinc-800">
                    {line.oldLineNum || ''}
                  </td>
                )}
                <td className="px-2 py-0.5">
                  <pre
                    className={cn(
                      'whitespace-pre-wrap',
                      line.type === 'removed' && 'text-red-400',
                      line.type === 'unchanged' && 'text-zinc-400'
                    )}
                  >
                    {line.content || ' '}
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side (new) */}
      <div className="flex-1 overflow-auto">
        <div className="px-3 py-1 text-xs text-zinc-500 bg-zinc-800/50 border-b border-zinc-800 sticky top-0">
          Modified
        </div>
        <table className="w-full font-mono text-sm">
          <tbody>
            {rightLines.map((line, index) => (
              <tr
                key={index}
                className={cn(
                  'border-b border-zinc-800/50',
                  line.type === 'added' && 'bg-green-500/10'
                )}
              >
                {showLineNumbers && (
                  <td className="px-2 py-0.5 text-right text-zinc-600 select-none w-12 border-r border-zinc-800">
                    {line.newLineNum || ''}
                  </td>
                )}
                <td className="px-2 py-0.5">
                  <pre
                    className={cn(
                      'whitespace-pre-wrap',
                      line.type === 'added' && 'text-green-400',
                      line.type === 'unchanged' && 'text-zinc-400'
                    )}
                  >
                    {line.content || ' '}
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { DiffViewer };
