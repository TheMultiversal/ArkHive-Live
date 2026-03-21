'use client';

import React, { useState, useMemo } from 'react';
import { 
  Download, 
  FileJson, 
  FileText, 
  FileSpreadsheet, 
  CheckSquare,
  Square,
  Filter,
  Archive,
  AlertTriangle
} from 'lucide-react';

// Import investigation database
import investigationDatabase from '@/data/investigations';
import type { InvestigationData } from '@/data/investigations/types';

export type ExportFormat = 'json' | 'csv' | 'markdown';
export type ExportScope = 'all' | 'selected' | 'filtered';

interface ExportOptions {
  format: ExportFormat;
  scope: ExportScope;
  includeContent: boolean;
  includeSources: boolean;
  includeDefendants: boolean;
  includeAffiliations: boolean;
  includeKeyFacts: boolean;
  includeStatutes: boolean;
}

// Convert investigation to CSV row
function investigationToCSVRow(inv: InvestigationData, includeAll: boolean): string[] {
  const row = [
    inv.slug,
    inv.title,
    inv.severity,
    inv.status,
    inv.description,
    inv.lastUpdated || '',
    inv.defendants?.length.toString() || '0',
    inv.sources?.length.toString() || '0',
    inv.keyFacts?.length.toString() || '0'
  ];

  if (includeAll) {
    row.push(
      inv.content?.substring(0, 500) || '',
      inv.defendants?.map(d => d.name).join('; ') || '',
      inv.sources?.map(s => s.title || s.url).join('; ') || ''
    );
  }

  return row;
}

// Convert investigation to Markdown
function investigationToMarkdown(inv: InvestigationData, options: ExportOptions): string {
  let md = `# ${inv.title}\n\n`;
  md += `**Slug:** ${inv.slug}\n`;
  md += `**Severity:** ${inv.severity.toUpperCase()}\n`;
  md += `**Status:** ${inv.status}\n`;
  md += `**Last Updated:** ${inv.lastUpdated || 'Unknown'}\n\n`;
  md += `## Description\n\n${inv.description}\n\n`;

  if (options.includeContent && inv.content) {
    md += `## Full Content\n\n${inv.content}\n\n`;
  }

  if (options.includeKeyFacts && inv.keyFacts && inv.keyFacts.length > 0) {
    md += `## Key Facts\n\n`;
    for (const fact of inv.keyFacts) {
      md += `- ${fact}\n`;
    }
    md += '\n';
  }

  if (options.includeDefendants && inv.defendants && inv.defendants.length > 0) {
    md += `## Defendants (${inv.defendants.length})\n\n`;
    for (const d of inv.defendants) {
      md += `### ${d.name}\n`;
      md += `- **Role:** ${d.role}\n`;
      md += `- **Status:** ${d.status}\n`;
      if (d.charges && d.charges.length > 0) {
        md += `- **Charges:**\n`;
        for (const charge of d.charges) {
          md += `  - ${charge}\n`;
        }
      }
      if (d.sentence) md += `- **Sentence:** ${d.sentence}\n`;
      if (d.pardonDate) md += `- **Pardon Date:** ${d.pardonDate}\n`;
      if (d.notes) md += `- **Notes:** ${d.notes}\n`;
      md += '\n';
    }
  }

  if (options.includeSources && inv.sources && inv.sources.length > 0) {
    md += `## Sources (${inv.sources.length})\n\n`;
    for (const s of inv.sources) {
      md += `- [${s.title || s.url}](${s.url})`;
      if (s.date) md += ` (${s.date})`;
      md += '\n';
    }
    md += '\n';
  }

  if (options.includeStatutes && inv.relatedStatutes && inv.relatedStatutes.length > 0) {
    md += `## Related Statutes\n\n`;
    for (const statute of inv.relatedStatutes) {
      md += `- ${statute}\n`;
    }
    md += '\n';
  }

  if (options.includeAffiliations && inv.affiliations && inv.affiliations.length > 0) {
    md += `## Affiliations (${inv.affiliations.length})\n\n`;
    for (const a of inv.affiliations) {
      md += `- **${a.entityName}** (${a.entityType}): ${a.relationship}\n`;
    }
    md += '\n';
  }

  md += '---\n\n';
  return md;
}

// Generate export file
function generateExport(
  investigations: InvestigationData[],
  options: ExportOptions
): { content: string; filename: string; mimeType: string } {
  const timestamp = new Date().toISOString().split('T')[0];

  switch (options.format) {
    case 'json': {
      const data = investigations.map(inv => {
        const obj: Record<string, unknown> = {
          slug: inv.slug,
          title: inv.title,
          severity: inv.severity,
          status: inv.status,
          description: inv.description,
          lastUpdated: inv.lastUpdated
        };

        if (options.includeContent) obj.content = inv.content;
        if (options.includeKeyFacts) obj.keyFacts = inv.keyFacts;
        if (options.includeDefendants) obj.defendants = inv.defendants;
        if (options.includeSources) obj.sources = inv.sources;
        if (options.includeStatutes) obj.relatedStatutes = inv.relatedStatutes;
        if (options.includeAffiliations) obj.affiliations = inv.affiliations;

        return obj;
      });

      return {
        content: JSON.stringify(data, null, 2),
        filename: `arkhive-export-${timestamp}.json`,
        mimeType: 'application/json'
      };
    }

    case 'csv': {
      const headers = [
        'Slug', 'Title', 'Severity', 'Status', 'Description', 
        'Last Updated', 'Defendant Count', 'Source Count', 'Key Facts Count'
      ];

      if (options.includeContent) {
        headers.push('Content Preview', 'Defendant Names', 'Source Titles');
      }

      const rows = investigations.map(inv => 
        investigationToCSVRow(inv, options.includeContent)
      );

      // Escape CSV values
      const escapeCSV = (val: string) => {
        if (val.includes(',') || val.includes('"') || val.includes('\n')) {
          return `"${val.replace(/"/g, '""')}"`;
        }
        return val;
      };

      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(escapeCSV).join(','))
      ].join('\n');

      return {
        content: csvContent,
        filename: `arkhive-export-${timestamp}.csv`,
        mimeType: 'text/csv'
      };
    }

    case 'markdown': {
      let content = `# ArkHive Investigation Export\n\n`;
      content += `**Export Date:** ${new Date().toISOString()}\n`;
      content += `**Investigation Count:** ${investigations.length}\n\n`;
      content += `---\n\n`;

      for (const inv of investigations) {
        content += investigationToMarkdown(inv, options);
      }

      return {
        content,
        filename: `arkhive-export-${timestamp}.md`,
        mimeType: 'text/markdown'
      };
    }

    default:
      throw new Error(`Unknown format: ${options.format}`);
  }
}

// Trigger browser download
function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Main Export Component
export function DataExporter() {
  const [options, setOptions] = useState<ExportOptions>({
    format: 'json',
    scope: 'all',
    includeContent: false,
    includeSources: true,
    includeDefendants: true,
    includeAffiliations: true,
    includeKeyFacts: true,
    includeStatutes: true
  });

  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(new Set());
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [isExporting, setIsExporting] = useState(false);

  const investigations = useMemo(() => Object.values(investigationDatabase), []);

  // Apply filters
  const filteredInvestigations = useMemo(() => {
    return investigations.filter(inv => {
      if (severityFilter !== 'all' && inv.severity !== severityFilter) {
        return false;
      }
      return true;
    });
  }, [investigations, severityFilter]);

  // Get final export list based on scope
  const exportList = useMemo(() => {
    switch (options.scope) {
      case 'all':
        return investigations;
      case 'filtered':
        return filteredInvestigations;
      case 'selected':
        return investigations.filter(inv => selectedSlugs.has(inv.slug));
      default:
        return investigations;
    }
  }, [investigations, filteredInvestigations, selectedSlugs, options.scope]);

  // Toggle selection
  const toggleSelect = (slug: string) => {
    const newSet = new Set(selectedSlugs);
    if (newSet.has(slug)) {
      newSet.delete(slug);
    } else {
      newSet.add(slug);
    }
    setSelectedSlugs(newSet);
  };

  // Select all / none
  const selectAll = () => {
    setSelectedSlugs(new Set(filteredInvestigations.map(inv => inv.slug)));
  };

  const selectNone = () => {
    setSelectedSlugs(new Set());
  };

  // Handle export
  const handleExport = () => {
    if (exportList.length === 0) {
      alert('No investigations to export.');
      return;
    }

    setIsExporting(true);
    try {
      const { content, filename, mimeType } = generateExport(exportList, options);
      downloadFile(content, filename, mimeType);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const formatIcons: Record<ExportFormat, React.ReactNode> = {
    json: <FileJson className="w-5 h-5" />,
    csv: <FileSpreadsheet className="w-5 h-5" />,
    markdown: <FileText className="w-5 h-5" />
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Download className="w-6 h-6 text-zinc-300" />
        <h2 className="text-2xl font-bold text-white">Export Data</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Options */}
        <div className="space-y-4">
          {/* Format Selection */}
          <div className="glass-card p-4">
            <h3 className="text-white font-semibold mb-3">Export Format</h3>
            <div className="grid grid-cols-3 gap-2">
              {(['json', 'csv', 'markdown'] as ExportFormat[]).map(fmt => (
                <button
                  key={fmt}
                  onClick={() => setOptions({ ...options, format: fmt })}
                  className={`p-3 border flex flex-col items-center gap-2 transition-colors ${
                    options.format === fmt
                      ? 'bg-zinc-500/20 border-zinc-600 text-zinc-400'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-600'
                  }`}
                >
                  {formatIcons[fmt]}
                  <span className="text-sm uppercase">{fmt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scope Selection */}
          <div className="glass-card p-4">
            <h3 className="text-white font-semibold mb-3">Export Scope</h3>
            <div className="space-y-2">
              {[
                { value: 'all', label: `All Investigations (${investigations.length})` },
                { value: 'filtered', label: `Filtered Results (${filteredInvestigations.length})` },
                { value: 'selected', label: `Selected Only (${selectedSlugs.size})` }
              ].map(opt => (
                <label
                  key={opt.value}
                  className="flex items-center gap-3 p-2 cursor-pointer hover:bg-zinc-800/50"
                >
                  <input
                    type="radio"
                    name="scope"
                    value={opt.value}
                    checked={options.scope === opt.value}
                    onChange={() => setOptions({ ...options, scope: opt.value as ExportScope })}
                    className="accent-zinc-500"
                  />
                  <span className="text-zinc-300">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Data Fields */}
          <div className="glass-card p-4">
            <h3 className="text-white font-semibold mb-3">Include Data</h3>
            <div className="space-y-2">
              {[
                { key: 'includeKeyFacts', label: 'Key Facts' },
                { key: 'includeDefendants', label: 'Defendants' },
                { key: 'includeSources', label: 'Sources' },
                { key: 'includeStatutes', label: 'Related Statutes' },
                { key: 'includeAffiliations', label: 'Affiliations' },
                { key: 'includeContent', label: 'Full Content (Large)' }
              ].map(opt => (
                <label
                  key={opt.key}
                  className="flex items-center gap-3 p-2 cursor-pointer hover:bg-zinc-800/50"
                >
                  <input
                    type="checkbox"
                    checked={options[opt.key as keyof ExportOptions] as boolean}
                    onChange={(e) => setOptions({ 
                      ...options, 
                      [opt.key]: e.target.checked 
                    })}
                    className="accent-zinc-500"
                  />
                  <span className="text-zinc-300">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExport}
            disabled={isExporting || exportList.length === 0}
            className={`w-full py-3 px-4 flex items-center justify-center gap-2 font-bold transition-colors ${
              exportList.length > 0
                ? 'bg-zinc-600 hover:bg-zinc-700 text-white'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            {isExporting ? (
              <>
                <Archive className="w-5 h-5 animate-pulse" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Export {exportList.length} Investigation{exportList.length !== 1 ? 's' : ''}
              </>
            )}
          </button>
        </div>

        {/* Right Column - Selection */}
        <div className="glass-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Select Investigations</h3>
            <div className="flex gap-2">
              {/* Severity Filter */}
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-sm text-white"
              >
                <option value="all">All Severity</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                onClick={selectAll}
                className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 hover:text-white"
              >
                All
              </button>
              <button
                onClick={selectNone}
                className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 hover:text-white"
              >
                None
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto space-y-1">
            {filteredInvestigations.map(inv => (
              <button
                key={inv.slug}
                onClick={() => toggleSelect(inv.slug)}
                className={`w-full p-2 flex items-center gap-3 text-left transition-colors ${
                  selectedSlugs.has(inv.slug)
                    ? 'bg-zinc-500/10 border-l-2 border-zinc-600'
                    : 'hover:bg-zinc-800/50'
                }`}
              >
                {selectedSlugs.has(inv.slug) ? (
                  <CheckSquare className="w-4 h-4 text-zinc-300 flex-shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white truncate">{inv.title}</div>
                  <div className="text-xs text-zinc-500 flex gap-2">
                    <span className={`uppercase ${
                      inv.severity === 'critical' ? 'text-red-400' :
                      inv.severity === 'high' ? 'text-orange-400' :
                      inv.severity === 'medium' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {inv.severity}
                    </span>
                    <span>ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·</span>
                    <span>{inv.status}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Warning for large exports */}
      {options.includeContent && exportList.length > 10 && (
        <div className="glass-card p-4 flex items-start gap-3 border-yellow-500/50">
          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <div>
            <p className="text-yellow-400 font-semibold">Large Export Warning</p>
            <p className="text-sm text-zinc-400">
              Including full content for {exportList.length} investigations may result in a large file. 
              Consider exporting in batches or excluding full content.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Quick export button for single investigation
export function QuickExportButton({ investigation }: { investigation: InvestigationData }) {
  const handleQuickExport = (format: ExportFormat) => {
    const options: ExportOptions = {
      format,
      scope: 'selected',
      includeContent: true,
      includeSources: true,
      includeDefendants: true,
      includeAffiliations: true,
      includeKeyFacts: true,
      includeStatutes: true
    };

    const { content, filename, mimeType } = generateExport([investigation], options);
    downloadFile(content, filename, mimeType);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleQuickExport('json')}
        className="p-2 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-colors"
        title="Export as JSON"
      >
        <FileJson className="w-4 h-4 text-zinc-400" />
      </button>
      <button
        onClick={() => handleQuickExport('markdown')}
        className="p-2 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-colors"
        title="Export as Markdown"
      >
        <FileText className="w-4 h-4 text-zinc-400" />
      </button>
    </div>
  );
}

export default DataExporter;
