"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  AlertTriangle,
  Share2,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  FileText,
  Clock,
  Tag,
  Copy,
  Check,
  Users,
  BookOpen,
  Hash,
  Shield,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import AffiliationsSidebar, { Affiliation } from "@/components/layout/AffiliationsSidebar";
import TimelineSidebar from "@/components/layout/TimelineSidebar";
import DateDisplay from "@/components/ui/DateDisplay";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RelatedInvestigations from "@/components/layout/RelatedInvestigations";
import { useKeyboardNavigation, KeyboardNavIndicator } from "@/hooks/useKeyboardNavigation";
import ReadingProgress from "@/components/ui/ReadingProgress";
import investigationDatabase from "@/data/investigations";
import type { InvestigationData } from "@/data/investigations/types";
import { useContributorStore } from "@/store/contributorStore";

/* ── Helpers ─────────────────────────────────────────── */

interface ParsedSection {
  id: string;
  header: string | null;
  body: string;
}

function parseContent(content: string[]): ParsedSection[] {
  return content.map((paragraph, index) => {
    const match = paragraph.match(/^([A-Z][A-Z\s'''\-&.,/()0-9]{2,}?):\s*(.+)$/s);
    if (match) {
      return { id: `section-${index}`, header: match[1].trim(), body: match[2].trim() };
    }
    return { id: `section-${index}`, header: null, body: paragraph };
  });
}

function readingStats(content: string[]) {
  const words = content.join(" ").split(/\s+/).filter(Boolean).length;
  return { words, minutes: Math.max(1, Math.ceil(words / 250)) };
}

function investigationStatus(data: InvestigationData) {
  const raw = data.lastActivityDate || data.lastUpdated;
  if (!raw) return { label: "Unknown", cls: "text-zinc-500 border-zinc-700" };
  try {
    const months = (Date.now() - new Date(raw).getTime()) / 2.592e9;
    if (months < 6) return { label: "Active", cls: "text-blood-400 border-blood-700" };
    if (months < 24) return { label: "Monitoring", cls: "text-yellow-500 border-yellow-800" };
    return { label: "Historical", cls: "text-zinc-400 border-zinc-700" };
  } catch {
    return { label: "Unknown", cls: "text-zinc-500 border-zinc-700" };
  }
}

function sourceTypeSummary(sources: { type: string }[]) {
  const counts: Record<string, number> = {};
  sources.forEach(s => { counts[s.type] = (counts[s.type] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

/* ── Constants ───────────────────────────────────────── */

const defaultInvestigationData: InvestigationData = {
  title: "Investigation Template",
  subtitle: "This page will display detailed investigation content",
  severity: "medium",
  category: "Platform",
  date: "January 31, 2026",
  lastUpdated: "January 31, 2026",
  summary: "This is where the investigation summary will appear.",
  content: [
    "Investigation content will be populated with detailed findings.",
  ],
  tags: ["Template"],
  sources: [{ title: "Sources will be listed here", url: "#", type: "Document" }],
  affiliations: [
    { id: "1", name: "Department of Justice", type: "agency", relationship: "Related", href: "/entities/agencies/doj" },
  ],
};

const severityColors: Record<string, string> = {
  critical: "bg-blood-900 text-blood-400 border-blood-600",
  high: "bg-blood-950 text-blood-500 border-blood-700",
  medium: "bg-blood-900 text-blood-500 border-blood-600",
  low: "bg-blood-950 text-blood-400 border-blood-500",
};

const severityBarColors: Record<string, string> = {
  critical: "from-blood-800 via-blood-500 to-blood-800",
  high: "from-blood-900 via-blood-600 to-blood-900",
  medium: "from-[#3a1500] via-[#6b2400] to-[#3a1500]",
  low: "from-zinc-800 via-zinc-600 to-zinc-800",
};

/* ── Component ───────────────────────────────────────── */

export default function InvestigationContent() {
  const params = useParams();
  const slug = params.slug as string;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const { addBookmark, removeBookmark, isBookmarked, currentUser } = useContributorStore();

  const data = investigationDatabase[slug] || defaultInvestigationData;
  const pageHref = `/investigations/${slug}`;
  const saved = isBookmarked(pageHref);
  const hasTimeline = data.timeline && data.timeline.length > 0;

  const investigationSlugs = useMemo(() => Object.keys(investigationDatabase).sort(), []);
  const { hasPrevious, hasNext, currentIndex, totalItems } = useKeyboardNavigation({
    items: investigationSlugs,
    currentItem: slug,
    basePath: "/investigations/",
  });

  const sections = useMemo(() => parseContent(data.content), [data.content]);
  const stats = useMemo(() => readingStats(data.content), [data.content]);
  const status = useMemo(() => investigationStatus(data), [data]);
  const srcSummary = useMemo(() => sourceTypeSummary(data.sources), [data.sources]);
  const tocSections = useMemo(() => sections.filter(s => s.header), [sections]);

  const handleCopyLink = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleShare = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: data.title, text: data.subtitle, url: window.location.href });
    } else {
      handleCopyLink();
    }
  }, [data.title, data.subtitle, handleCopyLink]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (!investigationDatabase[slug] && slug !== "template") {
    notFound();
  }

  const entityCount = data.affiliations.length;
  const sourceCount = data.sources.length;
  const timelineCount = data.timeline?.length || 0;

  return (
    <>
      <ReadingProgress targetSelector="article" position="top" />

      {/* ── Severity indicator bar ── */}
      <div className={`h-1 bg-gradient-to-r ${severityBarColors[data.severity]}`} />

      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">

            {/* ── MAIN ARTICLE ── */}
            <article className="flex-1 max-w-4xl">

              {/* Breadcrumbs + keyboard nav */}
              <div className="flex items-center justify-between mb-6">
                <Breadcrumbs currentPageTitle={data.title} />
                <KeyboardNavIndicator
                  hasPrevious={hasPrevious}
                  hasNext={hasNext}
                  currentIndex={currentIndex}
                  totalItems={totalItems}
                  className="hidden sm:flex"
                />
              </div>

              {/* ── HEADER ── */}
              <header className="mb-8">
                {/* Severity + Category + Status badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border ${severityColors[data.severity]}`}>
                    <AlertTriangle className="w-3 h-3" />
                    {data.severity.toUpperCase()}
                  </span>
                  <span className="px-3 py-1.5 bg-[#1c0a00] text-zinc-400 text-xs font-medium border border-[rgba(255,80,80,0.15)]">
                    {data.category}
                  </span>
                  <span className={`px-3 py-1.5 text-xs font-bold border ${status.cls} bg-black/50`}>
                    {status.label}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black glass-text mb-4 leading-tight break-words">
                  {data.title}
                </h1>
                <p className="text-base sm:text-xl text-zinc-400 mb-6 break-words">
                  {data.subtitle}
                </p>

                {/* ── Investigation at a Glance ── */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <DateDisplay
                    eventOriginDate={data.eventOriginDate}
                    lastActivityDate={data.lastActivityDate}
                    pageUpdatedDate={data.pageUpdatedDate}
                    legacyDate={data.date}
                    legacyLastUpdated={data.lastUpdated}
                    variant="full"
                    className="flex-1 min-w-[260px]"
                  />
                  <div className="glass-card p-4 flex-1 min-w-[200px]">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2 mb-3">
                      At a Glance
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-zinc-500" />
                        <div>
                          <div className="text-sm text-zinc-300">{stats.minutes} min</div>
                          <div className="text-[10px] text-zinc-600">{stats.words.toLocaleString()} words</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zinc-500" />
                        <div>
                          <div className="text-sm text-zinc-300">{entityCount}</div>
                          <div className="text-[10px] text-zinc-600">entities</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-zinc-500" />
                        <div>
                          <div className="text-sm text-zinc-300">{sourceCount}</div>
                          <div className="text-[10px] text-zinc-600">sources</div>
                        </div>
                      </div>
                      {timelineCount > 0 && (
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-zinc-500" />
                          <div>
                            <div className="text-sm text-zinc-300">{timelineCount}</div>
                            <div className="text-[10px] text-zinc-600">events</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 bg-[#1c0a00] hover:bg-[#200c00] border border-[rgba(255,80,80,0.15)] text-white text-sm transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button onClick={handleCopyLink} className="flex items-center gap-2 px-4 py-2 bg-[#1c0a00] hover:bg-[#200c00] border border-[rgba(255,80,80,0.15)] text-white text-sm transition-colors">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy Link"}
                  </button>
                  <button
                    onClick={() => {
                      if (!currentUser) { window.location.href = "/contributor"; return; }
                      if (saved) { removeBookmark(pageHref); } else {
                        addBookmark({ type: "investigation", title: data.title, href: pageHref, category: data.category, severity: data.severity });
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 border text-sm transition-colors ${
                      saved ? "bg-blood-900 border-blood-700 text-blood-400 hover:bg-blood-800" : "bg-[#1c0a00] hover:bg-[#200c00] border-[rgba(255,80,80,0.15)] text-white"
                    }`}
                  >
                    {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    {saved ? "Saved" : "Save"}
                  </button>
                  <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blood-700 hover:bg-blood-600 text-white text-sm transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Connections
                  </button>
                  {hasTimeline && (
                    <button onClick={() => setIsTimelineOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm transition-colors">
                      <Clock className="w-4 h-4" />
                      Timeline
                    </button>
                  )}
                </div>
              </header>

              {/* ── SUMMARY ── */}
              <div className="glass-card p-6 mb-8 border-l-4 border-blood-600">
                <h2 className="text-lg font-bold glass-text mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blood-500" />
                  Summary
                </h2>
                <p className="text-zinc-400 leading-relaxed">{data.summary}</p>
              </div>

              {/* ── TABLE OF CONTENTS ── */}
              {tocSections.length >= 3 && (
                <div className="glass-card mb-8 overflow-hidden">
                  <button
                    onClick={() => setTocOpen(v => !v)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-zinc-300">
                      <Hash className="w-4 h-4 text-blood-500" />
                      Table of Contents
                      <span className="text-[10px] text-zinc-600 font-normal ml-1">
                        {tocSections.length} sections
                      </span>
                    </span>
                    {tocOpen ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                  </button>
                  {tocOpen && (
                    <div className="px-4 pb-4 border-t border-zinc-800/50">
                      <ol className="space-y-1 mt-3">
                        {tocSections.map((s, i) => (
                          <li key={s.id}>
                            <button
                              onClick={() => scrollToSection(s.id)}
                              className="flex items-center gap-2 w-full text-left py-1.5 px-2 hover:bg-blood-950/40 transition-colors text-sm group"
                            >
                              <span className="text-[10px] text-zinc-600 w-5 text-right font-mono">{i + 1}</span>
                              <span className="text-zinc-400 group-hover:text-blood-400 transition-colors">
                                {s.header!.split(" ").map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(" ")}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              {/* ── CONTENT WITH AUTO SECTION HEADERS ── */}
              <div className="prose prose-invert prose-lg max-w-none mb-12 space-y-0">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-8 scroll-mt-28">
                    {section.header && (
                      <h3 className="text-base sm:text-lg font-black text-zinc-200 mb-2 flex items-center gap-2 border-b border-zinc-800/60 pb-2">
                        <span className="w-1 h-5 bg-blood-600 inline-block flex-shrink-0" />
                        {section.header.split(" ").map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(" ")}
                      </h3>
                    )}
                    <p className="text-zinc-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* ── KEY ACCOUNTABILITY ── */}
              {data.affiliations.length > 0 && (
                <div className="glass-card p-6 mb-8 border-l-4 border-blood-800">
                  <h3 className="text-lg font-bold glass-text mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blood-500" />
                    Key Accountability
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data.affiliations.map((aff) => (
                      <Link
                        key={aff.id}
                        href={aff.href}
                        className="flex items-start gap-3 p-3 bg-black/40 hover:bg-blood-950/30 border border-zinc-800/50 hover:border-blood-800/50 transition-colors group"
                      >
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-[10px] font-bold border ${
                          aff.type === "individual" ? "bg-blood-950 border-blood-800 text-blood-400"
                          : aff.type === "agency" ? "bg-blue-950 border-blue-800 text-blue-400"
                          : aff.type === "corporation" ? "bg-yellow-950 border-yellow-800 text-yellow-400"
                          : "bg-zinc-900 border-zinc-700 text-zinc-400"
                        }`}>
                          {aff.type === "individual" ? "IND" : aff.type === "agency" ? "GOV" : aff.type === "corporation" ? "CORP" : "ORG"}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-zinc-200 group-hover:text-blood-400 transition-colors truncate">
                            {aff.name}
                          </div>
                          <div className="text-[11px] text-zinc-500 leading-snug">
                            {aff.relationship}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── TAGS ── */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-zinc-500 mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag) => (
                    <Link key={tag} href={`/investigations?tag=${encodeURIComponent(tag)}`} className="px-3 py-1.5 bg-[#1c0a00] hover:bg-[#200c00] text-zinc-400 text-sm transition-colors border border-transparent hover:border-blood-900/50">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── SOURCES & DOCUMENTS ── */}
              <div className="glass-card p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold glass-text flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blood-500" />
                    Sources & Documents
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                    {srcSummary.map(([type, count]) => (
                      <span key={type} className="px-2 py-0.5 bg-black/40 border border-zinc-800/50">
                        {count} {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {data.sources.map((source, index) => (
                    <a key={index} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-black/30 hover:bg-blood-950/20 border border-zinc-800/40 hover:border-blood-900/40 transition-colors group">
                      <div className="flex items-center gap-3 min-w-0">
                        <FileText className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-sm text-zinc-300 group-hover:text-blood-400 transition-colors block truncate">
                            {source.title}
                          </span>
                          <span className="text-[10px] text-zinc-600">{source.type}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blood-500 flex-shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Investigations */}
              <RelatedInvestigations
                currentSlug={slug}
                currentData={data}
                maxRecommendations={4}
                className="mt-8"
              />
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <AffiliationsSidebar affiliations={data.affiliations as Affiliation[]} isOpen={true} onClose={() => {}} title="Connected Entities" />
                {hasTimeline && (
                  <TimelineSidebar events={data.timeline || []} isOpen={true} onClose={() => {}} title="Key Timeline" />
                )}
              </div>
            </aside>
          </div>
        </div>

        {/* Mobile drawers */}
        <div className="lg:hidden">
          <AffiliationsSidebar affiliations={data.affiliations as Affiliation[]} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title="Connected Entities" />
          {hasTimeline && (
            <TimelineSidebar events={data.timeline || []} isOpen={isTimelineOpen} onClose={() => setIsTimelineOpen(false)} title="Key Timeline" />
          )}
        </div>
      </div>
    </>
  );
}
