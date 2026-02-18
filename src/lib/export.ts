// ============================================================
// Export Utility
// Functions for exporting data in various formats
// ============================================================

// ============================================================
// Types
// ============================================================

export type ExportFormat = 'json' | 'csv' | 'xml' | 'txt' | 'html' | 'markdown';

export interface ExportOptions {
  filename?: string;
  format?: ExportFormat;
  includeHeaders?: boolean;
  delimiter?: string;
  dateFormat?: string;
  indent?: number;
}

export interface ColumnConfig {
  key: string;
  header?: string;
  formatter?: (value: unknown) => string;
}

// ============================================================
// Download Helper
// ============================================================

/**
 * Trigger file download in browser
 */
export function downloadFile(
  content: string | Blob,
  filename: string,
  mimeType = 'text/plain'
): void {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

// ============================================================
// JSON Export
// ============================================================

/**
 * Export data as JSON file
 */
export function exportToJSON<T>(
  data: T,
  options: ExportOptions = {}
): string {
  const { filename = 'export.json', indent = 2 } = options;
  const content = JSON.stringify(data, null, indent);

  downloadFile(content, filename, 'application/json');
  return content;
}

// ============================================================
// CSV Export
// ============================================================

/**
 * Escape CSV value
 */
function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) return '';

  let str = String(value);

  // Escape quotes and wrap in quotes if contains delimiter, quotes, or newlines
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    str = `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

/**
 * Export data as CSV file
 */
export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  options: ExportOptions & { columns?: ColumnConfig[] } = {}
): string {
  const {
    filename = 'export.csv',
    includeHeaders = true,
    delimiter = ',',
    columns,
  } = options;

  if (data.length === 0) {
    downloadFile('', filename, 'text/csv');
    return '';
  }

  // Determine columns
  const columnConfigs: ColumnConfig[] =
    columns || Object.keys(data[0]).map((key) => ({ key, header: key }));

  const rows: string[] = [];

  // Headers
  if (includeHeaders) {
    const headers = columnConfigs.map((col) => escapeCSV(col.header || col.key));
    rows.push(headers.join(delimiter));
  }

  // Data rows
  for (const item of data) {
    const values = columnConfigs.map((col) => {
      const value = item[col.key];
      const formatted = col.formatter ? col.formatter(value) : value;
      return escapeCSV(formatted);
    });
    rows.push(values.join(delimiter));
  }

  const content = rows.join('\n');
  downloadFile(content, filename, 'text/csv');
  return content;
}

// ============================================================
// XML Export
// ============================================================

/**
 * Escape XML characters
 */
function escapeXML(value: unknown): string {
  if (value === null || value === undefined) return '';

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Convert object to XML string
 */
function objectToXML(obj: unknown, rootName = 'item', indent = 0): string {
  const spaces = '  '.repeat(indent);

  if (obj === null || obj === undefined) {
    return `${spaces}<${rootName}/>\n`;
  }

  if (Array.isArray(obj)) {
    return obj
      .map((item, i) => objectToXML(item, `${rootName}_${i}`, indent))
      .join('');
  }

  if (typeof obj === 'object') {
    const entries = Object.entries(obj as Record<string, unknown>);
    if (entries.length === 0) {
      return `${spaces}<${rootName}/>\n`;
    }

    let xml = `${spaces}<${rootName}>\n`;
    for (const [key, value] of entries) {
      xml += objectToXML(value, key, indent + 1);
    }
    xml += `${spaces}</${rootName}>\n`;
    return xml;
  }

  return `${spaces}<${rootName}>${escapeXML(obj)}</${rootName}>\n`;
}

/**
 * Export data as XML file
 */
export function exportToXML<T>(
  data: T,
  options: ExportOptions & { rootElement?: string; itemElement?: string } = {}
): string {
  const {
    filename = 'export.xml',
    rootElement = 'data',
    itemElement = 'item',
  } = options;

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';

  if (Array.isArray(data)) {
    xml += `<${rootElement}>\n`;
    for (const item of data) {
      xml += objectToXML(item, itemElement, 1);
    }
    xml += `</${rootElement}>`;
  } else {
    xml += objectToXML(data, rootElement);
  }

  downloadFile(xml, filename, 'application/xml');
  return xml;
}

// ============================================================
// Markdown Export
// ============================================================

/**
 * Export data as Markdown table
 */
export function exportToMarkdown<T extends Record<string, unknown>>(
  data: T[],
  options: ExportOptions & { columns?: ColumnConfig[]; title?: string } = {}
): string {
  const { filename = 'export.md', columns, title } = options;

  if (data.length === 0) {
    downloadFile('', filename, 'text/markdown');
    return '';
  }

  const columnConfigs: ColumnConfig[] =
    columns || Object.keys(data[0]).map((key) => ({ key, header: key }));

  const lines: string[] = [];

  // Title
  if (title) {
    lines.push(`# ${title}\n`);
  }

  // Table header
  const headers = columnConfigs.map((col) => col.header || col.key);
  lines.push(`| ${headers.join(' | ')} |`);

  // Separator
  const separator = columnConfigs.map(() => '---');
  lines.push(`| ${separator.join(' | ')} |`);

  // Data rows
  for (const item of data) {
    const values = columnConfigs.map((col) => {
      const value = item[col.key];
      const formatted = col.formatter ? col.formatter(value) : value;
      return String(formatted ?? '').replace(/\|/g, '\\|');
    });
    lines.push(`| ${values.join(' | ')} |`);
  }

  const content = lines.join('\n');
  downloadFile(content, filename, 'text/markdown');
  return content;
}

// ============================================================
// HTML Export
// ============================================================

/**
 * Export data as HTML table
 */
export function exportToHTML<T extends Record<string, unknown>>(
  data: T[],
  options: ExportOptions & { columns?: ColumnConfig[]; title?: string; styles?: string } = {}
): string {
  const {
    filename = 'export.html',
    columns,
    title = 'Export',
    styles = '',
  } = options;

  const columnConfigs: ColumnConfig[] =
    columns || (data.length > 0 ? Object.keys(data[0]).map((key) => ({ key, header: key })) : []);

  const defaultStyles = `
    body { font-family: system-ui, sans-serif; margin: 20px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #1a1a1a; color: white; }
    tr:nth-child(even) { background-color: #f9f9f9; }
    tr:hover { background-color: #f1f1f1; }
  `;

  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${escapeXML(title)}</title>
  <style>${styles || defaultStyles}</style>
</head>
<body>
  <h1>${escapeXML(title)}</h1>
  <table>
    <thead>
      <tr>
        ${columnConfigs.map((col) => `<th>${escapeXML(col.header || col.key)}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
`;

  for (const item of data) {
    html += '      <tr>\n';
    for (const col of columnConfigs) {
      const value = item[col.key];
      const formatted = col.formatter ? col.formatter(value) : value;
      html += `        <td>${escapeXML(formatted)}</td>\n`;
    }
    html += '      </tr>\n';
  }

  html += `    </tbody>
  </table>
</body>
</html>`;

  downloadFile(html, filename, 'text/html');
  return html;
}

// ============================================================
// Print Export
// ============================================================

/**
 * Open print dialog for data
 */
export function printData<T extends Record<string, unknown>>(
  data: T[],
  options: { columns?: ColumnConfig[]; title?: string } = {}
): void {
  const html = exportToHTML(data, { ...options, filename: '' });

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
  }
}

// ============================================================
// Universal Export
// ============================================================

/**
 * Export data in specified format
 */
export function exportData<T>(
  data: T,
  options: ExportOptions & { columns?: ColumnConfig[] } = {}
): string {
  const { format = 'json' } = options;

  switch (format) {
    case 'json':
      return exportToJSON(data, options);
    case 'csv':
      return exportToCSV(data as Record<string, unknown>[], options);
    case 'xml':
      return exportToXML(data, options);
    case 'markdown':
      return exportToMarkdown(data as Record<string, unknown>[], options);
    case 'html':
      return exportToHTML(data as Record<string, unknown>[], options);
    default:
      return exportToJSON(data, options);
  }
}
