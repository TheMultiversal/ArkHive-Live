// ============================================================
// Export Types
// Types for data export functionality
// ============================================================

// ============================================================
// Export Formats
// ============================================================

export type ExportFormat = 'json' | 'csv' | 'xml' | 'pdf' | 'xlsx' | 'html' | 'markdown';

export interface ExportFormatInfo {
  format: ExportFormat;
  label: string;
  extension: string;
  mimeType: string;
  description: string;
  supportsImages: boolean;
  supportsTables: boolean;
  supportsFormatting: boolean;
}

export const EXPORT_FORMATS: Record<ExportFormat, ExportFormatInfo> = {
  json: {
    format: 'json',
    label: 'JSON',
    extension: '.json',
    mimeType: 'application/json',
    description: 'Machine-readable format, ideal for data interchange',
    supportsImages: false,
    supportsTables: true,
    supportsFormatting: false,
  },
  csv: {
    format: 'csv',
    label: 'CSV',
    extension: '.csv',
    mimeType: 'text/csv',
    description: 'Spreadsheet-compatible, simple tabular data',
    supportsImages: false,
    supportsTables: true,
    supportsFormatting: false,
  },
  xml: {
    format: 'xml',
    label: 'XML',
    extension: '.xml',
    mimeType: 'application/xml',
    description: 'Structured data format with schema support',
    supportsImages: false,
    supportsTables: true,
    supportsFormatting: false,
  },
  pdf: {
    format: 'pdf',
    label: 'PDF',
    extension: '.pdf',
    mimeType: 'application/pdf',
    description: 'Portable document format, ideal for printing',
    supportsImages: true,
    supportsTables: true,
    supportsFormatting: true,
  },
  xlsx: {
    format: 'xlsx',
    label: 'Excel',
    extension: '.xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    description: 'Microsoft Excel spreadsheet',
    supportsImages: true,
    supportsTables: true,
    supportsFormatting: true,
  },
  html: {
    format: 'html',
    label: 'HTML',
    extension: '.html',
    mimeType: 'text/html',
    description: 'Web page format with styling',
    supportsImages: true,
    supportsTables: true,
    supportsFormatting: true,
  },
  markdown: {
    format: 'markdown',
    label: 'Markdown',
    extension: '.md',
    mimeType: 'text/markdown',
    description: 'Plain text with simple formatting',
    supportsImages: true,
    supportsTables: true,
    supportsFormatting: true,
  },
};

// ============================================================
// Export Options
// ============================================================

export interface ExportOptions {
  format: ExportFormat;
  filename?: string;
  includeHeaders?: boolean;
  includeMetadata?: boolean;
  includeTimestamp?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
  filters?: Record<string, unknown>;
  columns?: ExportColumn[];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  compression?: boolean;
  password?: string;
}

export interface ExportColumn {
  key: string;
  label: string;
  width?: number;
  formatter?: (value: unknown) => string;
  include: boolean;
}

// ============================================================
// Export Types (What to export)
// ============================================================

export type ExportType =
  | 'investigation'
  | 'investigations'
  | 'entity'
  | 'entities'
  | 'workspace'
  | 'document'
  | 'evidence'
  | 'timeline'
  | 'report'
  | 'audit-log';

export interface ExportTypeInfo {
  type: ExportType;
  label: string;
  description: string;
  supportedFormats: ExportFormat[];
  defaultColumns: ExportColumn[];
}

// ============================================================
// Export Job
// ============================================================

export type ExportStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

export interface ExportJob {
  id: string;
  type: ExportType;
  format: ExportFormat;
  status: ExportStatus;
  progress: number;
  totalItems: number;
  processedItems: number;
  options: ExportOptions;
  downloadUrl?: string;
  error?: string;
  createdAt: Date;
  completedAt?: Date;
  expiresAt?: Date;
  userId: string;
  fileSize?: number;
}

// ============================================================
// Export Result
// ============================================================

export interface ExportResult {
  success: boolean;
  job?: ExportJob;
  downloadUrl?: string;
  filename?: string;
  fileSize?: number;
  itemCount?: number;
  error?: string;
}

// ============================================================
// Export History
// ============================================================

export interface ExportHistoryItem {
  id: string;
  type: ExportType;
  format: ExportFormat;
  status: ExportStatus;
  filename: string;
  fileSize: number;
  itemCount: number;
  createdAt: Date;
  downloadUrl?: string;
  expiresAt?: Date;
}

// ============================================================
// Bulk Export
// ============================================================

export interface BulkExportRequest {
  items: Array<{
    type: ExportType;
    id: string;
  }>;
  format: ExportFormat;
  options?: Partial<ExportOptions>;
  combinedFile?: boolean;
}

export interface BulkExportResult {
  success: boolean;
  jobs: ExportJob[];
  errors?: Array<{
    type: ExportType;
    id: string;
    error: string;
  }>;
}

// ============================================================
// Report Export
// ============================================================

export interface ReportExportOptions extends ExportOptions {
  title: string;
  subtitle?: string;
  author?: string;
  organization?: string;
  logo?: string;
  headerText?: string;
  footerText?: string;
  pageSize?: 'letter' | 'a4' | 'legal';
  orientation?: 'portrait' | 'landscape';
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  sections?: ReportSection[];
}

export interface ReportSection {
  id: string;
  title: string;
  type: 'summary' | 'table' | 'chart' | 'timeline' | 'map' | 'text' | 'images';
  include: boolean;
  order: number;
  pageBreakBefore?: boolean;
  data?: unknown;
}

// ============================================================
// Import Types (for completeness)
// ============================================================

export type ImportFormat = 'json' | 'csv' | 'xml' | 'xlsx';

export interface ImportOptions {
  format: ImportFormat;
  mapping?: Record<string, string>;
  skipDuplicates?: boolean;
  updateExisting?: boolean;
  dryRun?: boolean;
  validateOnly?: boolean;
}

export interface ImportResult {
  success: boolean;
  totalRows: number;
  importedRows: number;
  skippedRows: number;
  errors: Array<{
    row: number;
    field?: string;
    error: string;
  }>;
  warnings: Array<{
    row: number;
    message: string;
  }>;
}
