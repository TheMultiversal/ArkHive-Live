"use client";

import { useState } from "react";
import { Scale, FileText, ExternalLink, CheckCircle, AlertTriangle, Building2, Hash, Calendar, Gavel, Copy, Check } from "lucide-react";

/**
 * PACER Document Validation
 * Public Access to Court Electronic Records
 * Validates and displays federal court document references
 */

// Federal court districts
export const FEDERAL_DISTRICTS = {
  // Circuit Courts
  "1st Cir.": "First Circuit Court of Appeals",
  "2nd Cir.": "Second Circuit Court of Appeals",
  "3rd Cir.": "Third Circuit Court of Appeals",
  "4th Cir.": "Fourth Circuit Court of Appeals",
  "5th Cir.": "Fifth Circuit Court of Appeals",
  "6th Cir.": "Sixth Circuit Court of Appeals",
  "7th Cir.": "Seventh Circuit Court of Appeals",
  "8th Cir.": "Eighth Circuit Court of Appeals",
  "9th Cir.": "Ninth Circuit Court of Appeals",
  "10th Cir.": "Tenth Circuit Court of Appeals",
  "11th Cir.": "Eleventh Circuit Court of Appeals",
  "D.C. Cir.": "D.C. Circuit Court of Appeals",
  "Fed. Cir.": "Federal Circuit Court of Appeals",
  
  // District Courts (abbreviated selection)
  "S.D.N.Y.": "Southern District of New York",
  "E.D.N.Y.": "Eastern District of New York",
  "N.D.N.Y.": "Northern District of New York",
  "W.D.N.Y.": "Western District of New York",
  "C.D. Cal.": "Central District of California",
  "N.D. Cal.": "Northern District of California",
  "S.D. Cal.": "Southern District of California",
  "E.D. Cal.": "Eastern District of California",
  "D.D.C.": "District of Columbia",
  "N.D. Ill.": "Northern District of Illinois",
  "S.D. Fla.": "Southern District of Florida",
  "M.D. Fla.": "Middle District of Florida",
  "N.D. Tex.": "Northern District of Texas",
  "S.D. Tex.": "Southern District of Texas",
  "E.D. Va.": "Eastern District of Virginia",
} as const;

export type CourtDistrict = keyof typeof FEDERAL_DISTRICTS;

// Document types in PACER
export const DOCUMENT_TYPES = {
  complaint: "Complaint",
  answer: "Answer",
  motion: "Motion",
  order: "Order",
  judgment: "Judgment",
  indictment: "Indictment",
  information: "Information",
  plea: "Plea Agreement",
  sentencing: "Sentencing Memorandum",
  appeal: "Notice of Appeal",
  brief: "Brief",
  opinion: "Opinion",
  transcript: "Transcript",
  exhibit: "Exhibit",
} as const;

export type DocumentType = keyof typeof DOCUMENT_TYPES;

/**
 * PACER Document Reference
 */
export interface PACERDocument {
  id: string;
  caseNumber: string;
  caseName: string;
  court: CourtDistrict | string;
  documentNumber?: number;
  documentType?: DocumentType;
  filingDate: string;
  title: string;
  pageCount?: number;
  pacerUrl?: string;
  localCopyUrl?: string;
  verified?: boolean;
  verifiedDate?: string;
}

/**
 * Parse a case citation string
 * e.g., "United States v. Smith, No. 1:20-cr-00123 (S.D.N.Y.)"
 */
export function parseCaseCitation(citation: string): Partial<PACERDocument> | null {
  // Pattern: Case Name, No. X:YY-XX-NNNNN (Court)
  const pattern = /(.+?),?\s*No\.\s*(\d+:\d{2}-\w+-\d+)\s*\(([^)]+)\)/i;
  const match = citation.match(pattern);
  
  if (match) {
    return {
      caseName: match[1].trim(),
      caseNumber: match[2].trim(),
      court: match[3].trim(),
    };
  }
  
  return null;
}

/**
 * Generate PACER lookup URL
 */
export function getPACERUrl(caseNumber: string, court: string): string {
  // Note: Actual PACER requires authentication
  // This generates the public lookup URL
  return `https://www.uscourts.gov/court-records/find-case-pacer`;
}

/**
 * PACER Document Card Component
 */
interface PACERDocumentCardProps {
  document: PACERDocument;
  onVerify?: (doc: PACERDocument) => void;
  className?: string;
}

export function PACERDocumentCard({ document, onVerify, className = "" }: PACERDocumentCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCitation = () => {
    const citation = `${document.caseName}, No. ${document.caseNumber} (${document.court})`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const courtName = FEDERAL_DISTRICTS[document.court as CourtDistrict] || document.court;

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800/50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-zinc-500" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Federal Court Record</span>
        </div>
        {document.verified && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-900/50 border border-emerald-700 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
            <CheckCircle className="w-3 h-3" />
            Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Case Name */}
        <h4 className="text-sm font-bold text-white mb-2">
          {document.caseName}
        </h4>

        {/* Case Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
          <div className="flex items-start gap-2">
            <Hash className="w-3 h-3 text-zinc-600 mt-0.5" />
            <div>
              <span className="text-zinc-500 block">Case Number</span>
              <span className="text-zinc-300 font-mono">{document.caseNumber}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Building2 className="w-3 h-3 text-zinc-600 mt-0.5" />
            <div>
              <span className="text-zinc-500 block">Court</span>
              <span className="text-zinc-300">{courtName}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-3 h-3 text-zinc-600 mt-0.5" />
            <div>
              <span className="text-zinc-500 block">Filing Date</span>
              <span className="text-zinc-300">{document.filingDate}</span>
            </div>
          </div>
          {document.documentType && (
            <div className="flex items-start gap-2">
              <FileText className="w-3 h-3 text-zinc-600 mt-0.5" />
              <div>
                <span className="text-zinc-500 block">Document Type</span>
                <span className="text-zinc-300">{DOCUMENT_TYPES[document.documentType]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Document Title */}
        {document.title && (
          <div className="mb-3 p-2 bg-black/50 border border-zinc-800">
            <span className="text-xs text-zinc-500 block mb-1">Document Title</span>
            <span className="text-sm text-zinc-300">{document.title}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/50">
          <button
            onClick={copyCitation}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase tracking-wider transition-colors"
            title="Copy case citation"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? "Copied" : "Copy Citation"}
          </button>
          
          {document.pacerUrl && (
            <a
              href={document.pacerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              PACER
            </a>
          )}
          
          {document.localCopyUrl && (
            <a
              href={document.localCopyUrl}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              <FileText className="w-3 h-3" />
              View Document
            </a>
          )}

          {onVerify && !document.verified && (
            <button
              onClick={() => onVerify(document)}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-950 border border-emerald-800 text-emerald-400 hover:bg-emerald-900 text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              <CheckCircle className="w-3 h-3" />
              Verify
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * PACER Citation Inline Component
 * For inline references in text
 */
interface PACERCitationProps {
  caseNumber: string;
  caseName?: string;
  court?: string;
  className?: string;
}

export function PACERCitation({ caseNumber, caseName, court, className = "" }: PACERCitationProps) {
  return (
    <span 
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 bg-zinc-900 border border-zinc-700 text-[10px] font-mono ${className}`}
      title={caseName ? `${caseName}${court ? ` (${court})` : ""}` : undefined}
    >
      <Gavel className="w-3 h-3 text-zinc-500" />
      <span className="text-zinc-300">{caseNumber}</span>
    </span>
  );
}

/**
 * Court Documents List
 * Displays a list of PACER documents for an investigation
 */
interface CourtDocumentsListProps {
  documents: PACERDocument[];
  title?: string;
  onVerify?: (doc: PACERDocument) => void;
  className?: string;
}

export function CourtDocumentsList({ 
  documents, 
  title = "Court Records",
  onVerify,
  className = "" 
}: CourtDocumentsListProps) {
  if (documents.length === 0) {
    return (
      <div className={`bg-zinc-950 border border-zinc-800 p-6 text-center ${className}`}>
        <Scale className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
        <p className="text-zinc-500 text-sm">No court records available</p>
      </div>
    );
  }

  return (
    <div className={`bg-zinc-950 border border-zinc-800/30 ${className}`}>
      <div className="border-b border-zinc-800/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-zinc-300" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        <span className="text-xs text-zinc-500">{documents.length} documents</span>
      </div>
      
      <div className="divide-y divide-zinc-800/50">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 hover:bg-zinc-900/50 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {doc.documentType && (
                    <span className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-700 text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                      {DOCUMENT_TYPES[doc.documentType]}
                    </span>
                  )}
                  {doc.verified && (
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                  )}
                </div>
                <h4 className="text-sm font-medium text-white truncate">{doc.title}</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  {doc.caseNumber} • {doc.court} • {doc.filingDate}
                </p>
              </div>
              <div className="flex gap-1">
                {doc.localCopyUrl && (
                  <a
                    href={doc.localCopyUrl}
                    className="p-1.5 text-zinc-600 hover:text-white transition-colors"
                    title="View document"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                )}
                {doc.pacerUrl && (
                  <a
                    href={doc.pacerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-zinc-600 hover:text-white transition-colors"
                    title="View on PACER"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PACERDocumentCard;
