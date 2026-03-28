"use client";

import { useState } from "react";
import { FileText, Copy, Check, ChevronDown, Book, Scale, Newspaper, Globe } from "lucide-react";

/**
 * Citation Format System
 * Generates properly formatted citations in multiple styles
 */

export type CitationStyle = "bluebook" | "apa" | "mla" | "chicago" | "oscola" | "plain";

export type SourceType = 
  | "court_case"
  | "statute"
  | "book"
  | "journal"
  | "newspaper"
  | "website"
  | "government_doc"
  | "report"
  | "video"
  | "interview";

export interface CitationSource {
  type: SourceType;
  title: string;
  
  // Court cases
  caseName?: string;
  caseNumber?: string;
  court?: string;
  decisionDate?: string;
  reporter?: string;
  volume?: number;
  page?: number;
  
  // Publications
  authors?: string[];
  editors?: string[];
  publisher?: string;
  publicationDate?: string;
  publishYear?: number;
  
  // Journal/Newspaper
  journalName?: string;
  issue?: number;
  pageRange?: string;
  
  // Website
  url?: string;
  accessDate?: string;
  siteName?: string;
  
  // Government documents
  agency?: string;
  documentNumber?: string;
  
  // General
  edition?: string;
  location?: string;
}

// Citation style configurations
const styleConfig = {
  bluebook: { label: "Bluebook (Legal)", icon: Scale },
  apa: { label: "APA 7th", icon: Book },
  mla: { label: "MLA 9th", icon: FileText },
  chicago: { label: "Chicago 17th", icon: Book },
  oscola: { label: "OSCOLA (UK Legal)", icon: Scale },
  plain: { label: "Plain Text", icon: FileText },
};

/**
 * Format author names based on style
 */
function formatAuthors(authors: string[], style: CitationStyle): string {
  if (!authors || authors.length === 0) return "";
  
  switch (style) {
    case "apa":
      if (authors.length === 1) {
        const parts = authors[0].split(" ");
        const lastName = parts.pop();
        const initials = parts.map(p => p[0].toUpperCase() + ".").join(" ");
        return `${lastName}, ${initials}`;
      }
      if (authors.length <= 20) {
        return authors.map((a, i) => {
          const parts = a.split(" ");
          const lastName = parts.pop();
          const initials = parts.map(p => p[0].toUpperCase() + ".").join(" ");
          if (i === authors.length - 1) return `& ${lastName}, ${initials}`;
          return `${lastName}, ${initials}`;
        }).join(", ");
      }
      return authors.slice(0, 19).map(a => {
        const parts = a.split(" ");
        const lastName = parts.pop();
        const initials = parts.map(p => p[0].toUpperCase() + ".").join(" ");
        return `${lastName}, ${initials}`;
      }).join(", ") + "...";
      
    case "mla":
      if (authors.length === 1) {
        const parts = authors[0].split(" ");
        const lastName = parts.pop();
        return `${lastName}, ${parts.join(" ")}`;
      }
      if (authors.length === 2) {
        const first = authors[0].split(" ");
        return `${first.pop()}, ${first.join(" ")}, and ${authors[1]}`;
      }
      const firstMla = authors[0].split(" ");
      return `${firstMla.pop()}, ${firstMla.join(" ")}, et al.`;
      
    case "chicago":
      if (authors.length === 1) {
        const parts = authors[0].split(" ");
        const lastName = parts.pop();
        return `${lastName}, ${parts.join(" ")}`;
      }
      return authors.join(", ");
      
    default:
      return authors.join(", ");
  }
}

/**
 * Generate citation based on style and source type
 */
export function generateCitation(source: CitationSource, style: CitationStyle): string {
  switch (source.type) {
    case "court_case":
      return generateCourtCaseCitation(source, style);
    case "statute":
      return generateStatuteCitation(source, style);
    case "book":
      return generateBookCitation(source, style);
    case "journal":
      return generateJournalCitation(source, style);
    case "newspaper":
      return generateNewspaperCitation(source, style);
    case "website":
      return generateWebsiteCitation(source, style);
    case "government_doc":
      return generateGovernmentDocCitation(source, style);
    default:
      return generatePlainCitation(source);
  }
}

function generateCourtCaseCitation(source: CitationSource, style: CitationStyle): string {
  switch (style) {
    case "bluebook":
      let citation = source.caseName || source.title;
      if (source.volume && source.reporter && source.page) {
        citation += `, ${source.volume} ${source.reporter} ${source.page}`;
      }
      if (source.court && source.decisionDate) {
        citation += ` (${source.court} ${source.decisionDate})`;
      }
      return citation + ".";
      
    case "oscola":
      let oscola = source.caseName || source.title;
      if (source.decisionDate) {
        oscola += ` [${source.decisionDate}]`;
      }
      if (source.volume && source.reporter && source.page) {
        oscola += ` ${source.volume} ${source.reporter} ${source.page}`;
      }
      return oscola;
      
    default:
      return `${source.caseName || source.title}, ${source.caseNumber || ""} (${source.court || ""} ${source.decisionDate || ""})`;
  }
}

function generateStatuteCitation(source: CitationSource, style: CitationStyle): string {
  switch (style) {
    case "bluebook":
      return `${source.title}, ${source.volume || ""} U.S.C. Â§ ${source.page || ""} (${source.publishYear || ""}).`;
    default:
      return `${source.title} (${source.publishYear || ""})`;
  }
}

function generateBookCitation(source: CitationSource, style: CitationStyle): string {
  const authors = formatAuthors(source.authors || [], style);
  const year = source.publishYear || "";
  
  switch (style) {
    case "apa":
      let apa = `${authors} (${year}). `;
      apa += `<em>${source.title}</em>`;
      if (source.edition) apa += ` (${source.edition} ed.)`;
      if (source.publisher) apa += `. ${source.publisher}`;
      return apa + ".";
      
    case "mla":
      let mla = `${authors}. `;
      mla += `<em>${source.title}</em>`;
      if (source.edition) mla += `, ${source.edition} ed.`;
      if (source.publisher) mla += `, ${source.publisher}`;
      mla += `, ${year}`;
      return mla + ".";
      
    case "chicago":
      let chicago = `${authors}. `;
      chicago += `<em>${source.title}</em>`;
      if (source.location && source.publisher) {
        chicago += `. ${source.location}: ${source.publisher}`;
      } else if (source.publisher) {
        chicago += `. ${source.publisher}`;
      }
      chicago += `, ${year}`;
      return chicago + ".";
      
    default:
      return `${authors}. ${source.title}. ${source.publisher || ""}, ${year}.`;
  }
}

function generateJournalCitation(source: CitationSource, style: CitationStyle): string {
  const authors = formatAuthors(source.authors || [], style);
  
  switch (style) {
    case "apa":
      let apa = `${authors} (${source.publishYear}). ${source.title}. `;
      apa += `<em>${source.journalName}</em>`;
      if (source.volume) apa += `, <em>${source.volume}</em>`;
      if (source.issue) apa += `(${source.issue})`;
      if (source.pageRange) apa += `, ${source.pageRange}`;
      if (source.url) apa += `. ${source.url}`;
      return apa;
      
    case "mla":
      let mla = `${authors}. "${source.title}." `;
      mla += `<em>${source.journalName}</em>`;
      if (source.volume) mla += `, vol. ${source.volume}`;
      if (source.issue) mla += `, no. ${source.issue}`;
      mla += `, ${source.publishYear}`;
      if (source.pageRange) mla += `, pp. ${source.pageRange}`;
      return mla + ".";
      
    default:
      return `${authors}. "${source.title}." ${source.journalName} ${source.volume || ""}:${source.issue || ""} (${source.publishYear}).`;
  }
}

function generateNewspaperCitation(source: CitationSource, style: CitationStyle): string {
  const authors = formatAuthors(source.authors || [], style);
  
  switch (style) {
    case "apa":
      let apa = `${authors} (${source.publicationDate}). ${source.title}. `;
      apa += `<em>${source.journalName}</em>`;
      if (source.url) apa += `. ${source.url}`;
      return apa;
      
    default:
      return `${authors}. "${source.title}." ${source.journalName}, ${source.publicationDate}.`;
  }
}

function generateWebsiteCitation(source: CitationSource, style: CitationStyle): string {
  const authors = source.authors ? formatAuthors(source.authors, style) : source.siteName;
  
  switch (style) {
    case "apa":
      let apa = `${authors}. `;
      if (source.publicationDate) apa += `(${source.publicationDate}). `;
      apa += `${source.title}. `;
      if (source.siteName && source.siteName !== authors) apa += `<em>${source.siteName}</em>. `;
      if (source.url) apa += source.url;
      return apa;
      
    case "mla":
      let mla = source.authors ? `${authors}. ` : "";
      mla += `"${source.title}." `;
      if (source.siteName) mla += `<em>${source.siteName}</em>, `;
      if (source.publicationDate) mla += `${source.publicationDate}, `;
      if (source.url) mla += source.url;
      if (source.accessDate) mla += `. Accessed ${source.accessDate}`;
      return mla + ".";
      
    default:
      return `${source.title}. ${source.siteName || ""}. ${source.url || ""}`;
  }
}

function generateGovernmentDocCitation(source: CitationSource, style: CitationStyle): string {
  switch (style) {
    case "bluebook":
      let bluebook = source.agency || "";
      bluebook += `, ${source.title}`;
      if (source.documentNumber) bluebook += ` ${source.documentNumber}`;
      if (source.publishYear) bluebook += ` (${source.publishYear})`;
      return bluebook + ".";
      
    default:
      return `${source.agency || ""}. ${source.title}. ${source.publishYear || ""}.`;
  }
}

function generatePlainCitation(source: CitationSource): string {
  let plain = source.title;
  if (source.authors?.length) plain = `${source.authors.join(", ")}. ${plain}`;
  if (source.publishYear) plain += ` (${source.publishYear})`;
  if (source.url) plain += `. ${source.url}`;
  return plain;
}

/**
 * Citation Display Component
 */
interface CitationDisplayProps {
  source: CitationSource;
  style?: CitationStyle;
  showStyleSelector?: boolean;
  className?: string;
}

export function CitationDisplay({ 
  source, 
  style: initialStyle = "bluebook",
  showStyleSelector = true,
  className = "" 
}: CitationDisplayProps) {
  const [style, setStyle] = useState<CitationStyle>(initialStyle);
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const citation = generateCitation(source, style);
  const config = styleConfig[style];
  const Icon = config.icon;

  const copyCitation = () => {
    // Remove HTML tags for clipboard
    const plainText = citation.replace(/<\/?em>/g, "");
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-zinc-950 border border-zinc-800 ${className}`}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-zinc-300" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Citation</span>
        </div>

        {showStyleSelector && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-700 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <Icon className="w-3 h-3" />
              <span>{config.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-zinc-900 border border-zinc-700 z-10">
                {(Object.entries(styleConfig) as [CitationStyle, typeof styleConfig.bluebook][]).map(([key, config]) => {
                  const StyleIcon = config.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => { setStyle(key); setDropdownOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left hover:bg-zinc-800 transition-colors ${
                        style === key ? "text-zinc-400 bg-zinc-900/50" : "text-zinc-400"
                      }`}
                    >
                      <StyleIcon className="w-3 h-3" />
                      <span>{config.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Citation Text */}
      <div className="p-4">
        <div 
          className="text-sm text-zinc-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: citation }}
        />
      </div>

      {/* Actions */}
      <div className="px-4 py-2 border-t border-zinc-800/50 flex justify-end">
        <button
          onClick={copyCitation}
          className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase tracking-wider transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-red-500" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

/**
 * Source Type Icon helper
 */
export function getSourceTypeIcon(type: SourceType) {
  switch (type) {
    case "court_case":
    case "statute":
      return Scale;
    case "book":
    case "journal":
      return Book;
    case "newspaper":
      return Newspaper;
    case "website":
      return Globe;
    default:
      return FileText;
  }
}

export default CitationDisplay;
