'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  FileCode,
  Hash,
  Download,
  Search,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface CodeViewerProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  startLine?: number;
  maxHeight?: number;
  wrapLines?: boolean;
  showCopy?: boolean;
  showDownload?: boolean;
  showSearch?: boolean;
  className?: string;
}

// ============================================================
// Language Colors
// ============================================================

const languageColors: Record<string, string> = {
  javascript: 'text-yellow-400',
  typescript: 'text-blue-400',
  python: 'text-green-400',
  rust: 'text-orange-400',
  go: 'text-cyan-400',
  java: 'text-red-400',
  csharp: 'text-purple-400',
  cpp: 'text-pink-400',
  c: 'text-blue-300',
  html: 'text-orange-300',
  css: 'text-blue-500',
  json: 'text-yellow-300',
  markdown: 'text-zinc-300',
  sql: 'text-emerald-400',
  bash: 'text-green-300',
  shell: 'text-green-300',
  yaml: 'text-red-300',
  toml: 'text-orange-300',
  xml: 'text-zinc-400',
};

// ============================================================
// Simple Syntax Highlighter
// ============================================================

function highlightSyntax(code: string, language: string): string {
  // Keywords by language
  const keywordPatterns: Record<string, RegExp> = {
    javascript: /\b(const|let|var|function|return|if|else|for|while|class|export|import|from|async|await|try|catch|throw|new|this|null|undefined|true|false)\b/g,
    typescript: /\b(const|let|var|function|return|if|else|for|while|class|export|import|from|async|await|try|catch|throw|new|this|null|undefined|true|false|interface|type|enum|implements|extends|public|private|protected|readonly)\b/g,
    python: /\b(def|class|return|if|elif|else|for|while|import|from|as|try|except|raise|with|None|True|False|and|or|not|in|is|lambda|yield|async|await)\b/g,
    rust: /\b(fn|let|mut|const|if|else|for|while|loop|match|struct|enum|impl|trait|pub|use|mod|self|Self|return|true|false|None|Some|Ok|Err)\b/g,
  };

  let highlighted = code
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Strings
  highlighted = highlighted.replace(
    /(["'`])(?:(?!\1|\\).|\\.)*\1/g,
    '<span class="text-green-400">$&</span>'
  );

  // Comments
  highlighted = highlighted.replace(
    /(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm,
    '<span class="text-zinc-500 italic">$&</span>'
  );

  // Numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="text-purple-400">$1</span>'
  );

  // Keywords
  const pattern = keywordPatterns[language] || keywordPatterns.javascript;
  highlighted = highlighted.replace(
    pattern,
    '<span class="text-blood-400 font-semibold">$&</span>'
  );

  // Function calls
  highlighted = highlighted.replace(
    /\b([a-zA-Z_]\w*)\s*\(/g,
    '<span class="text-blue-400">$1</span>('
  );

  return highlighted;
}

// ============================================================
// Component
// ============================================================

export default function CodeViewer({
  code,
  language = 'text',
  filename,
  showLineNumbers = true,
  highlightLines = [],
  startLine = 1,
  maxHeight,
  wrapLines = false,
  showCopy = true,
  showDownload = true,
  showSearch = true,
  className,
}: CodeViewerProps) {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const lines = code.split('\n');

  // Filter lines by search
  const filteredLines = useMemo(() => {
    if (!searchQuery) return lines.map((line, i) => ({ line, index: i }));
    return lines
      .map((line, index) => ({ line, index }))
      .filter(({ line }) =>
        line.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [lines, searchQuery]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `code.${language}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={cn(
        'bg-zinc-900 border border-zinc-800',
        isFullscreen && 'fixed inset-0 z-50',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-2 border-b border-zinc-800 bg-zinc-800/50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <FileCode className={cn('w-4 h-4', languageColors[language] || 'text-zinc-400')} />
          {filename && (
            <span className="text-sm text-zinc-300">{filename}</span>
          )}
          <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5">
            {language}
          </span>
          <span className="text-xs text-zinc-600">
            {lines.length} lines
          </span>
        </div>

        <div className="flex items-center gap-1">
          {showSearch && (
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className={cn(
                'p-1.5 transition-colors',
                showSearchBar
                  ? 'text-blood-500'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          {showCopy && (
            <button
              onClick={handleCopy}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          )}
          {showDownload && (
            <button
              onClick={handleDownload}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="Download"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {showSearchBar && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b border-zinc-800"
        >
          <div className="flex items-center gap-2 p-2">
            <Search className="w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in code..."
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <span className="text-xs text-zinc-500">
                {filteredLines.length} matches
              </span>
            )}
          </div>
        </motion.div>
      )}

      {/* Code content */}
      {!collapsed && (
        <div
          className="overflow-auto font-mono text-sm"
          style={{ maxHeight: isFullscreen ? 'calc(100vh - 100px)' : maxHeight }}
        >
          <table className="w-full border-collapse">
            <tbody>
              {filteredLines.map(({ line, index }) => {
                const lineNum = index + startLine;
                const isHighlighted = highlightLines.includes(lineNum);

                return (
                  <tr
                    key={index}
                    className={cn(
                      'hover:bg-zinc-800/50 transition-colors',
                      isHighlighted && 'bg-blood-500/10'
                    )}
                  >
                    {showLineNumbers && (
                      <td className="px-3 py-0.5 text-right text-zinc-600 select-none border-r border-zinc-800 sticky left-0 bg-zinc-900">
                        <span className="flex items-center justify-end gap-1">
                          {isHighlighted && (
                            <Hash className="w-3 h-3 text-blood-500" />
                          )}
                          {lineNum}
                        </span>
                      </td>
                    )}
                    <td className="px-4 py-0.5">
                      <pre
                        className={cn(
                          'text-zinc-300',
                          wrapLines ? 'whitespace-pre-wrap' : 'whitespace-pre'
                        )}
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(line || ' ', language),
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Collapsed indicator */}
      {collapsed && (
        <div className="p-4 text-center text-zinc-500 text-sm">
          Code collapsed • Click to expand
        </div>
      )}
    </div>
  );
}

export { CodeViewer };
