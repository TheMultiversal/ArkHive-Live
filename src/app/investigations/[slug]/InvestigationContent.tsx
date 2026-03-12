"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Calendar,
  AlertTriangle,
  Share2,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ExternalLink,
  FileText,
  Clock,
  Tag,
} from "lucide-react";
import AffiliationsSidebar, { Affiliation } from"@/components/layout/AffiliationsSidebar";
import investigationDatabase from"@/data/investigations";
import type { InvestigationData } from"@/data/investigations/types";
import { useContributorStore } from "@/store/contributorStore";

const defaultInvestigationData: InvestigationData = {
  title: "Investigation Template",
  subtitle: "This page will display detailed investigation content",
  severity: "medium",
  category: "Platform",
  date: "January 31, 2026",
  lastUpdated: "January 31, 2026",
  summary: "This is where the investigation summary will appear. Each investigation will include comprehensive documentation, evidence, and analysis of the topic at hand.",
  content: [
    "When you provide information for an investigation, this page will be populated with detailed content including all relevant facts, timeline of events, and documented evidence.",
    "The sidebar on the right will show all entities connected to this investigation; including government agencies, corporations, and individuals involved.",
    "Each entity will be hyperlinked to their own profile page where you can see all investigations they are connected to.",
  ],
  tags: ["Template", "Getting Started"],
  sources: [
    { title: "Sources will be listed here", url: "#", type: "Document" },
  ],
  affiliations: [
    {
      id: "1",
      name: "Department of Justice",
      type: "agency",
      relationship: "Related to ongoing investigations",
      href: "/entities/agencies/doj",
    },
    {
      id: "2",
      name: "Federal Bureau of Investigation",
      type: "agency",
      relationship: "Investigation oversight",
      href: "/entities/agencies/fbi",
    },
  ],
};

const severityColors: Record<string, string> = {
  critical: "bg-blood-600/20 text-blood-400 border-blood-600/30",
  high: "bg-blood-700/20 text-blood-500 border-blood-700/30",
  medium: "bg-blood-600/20 text-blood-500 border-blood-600/30",
  low: "bg-blood-500/20 text-blood-400 border-blood-500/30",
};

export default function InvestigationContent() {
  const params = useParams();
  const slug = params.slug as string;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { addBookmark, removeBookmark, isBookmarked, currentUser } = useContributorStore();

  const investigationData = investigationDatabase[slug] || defaultInvestigationData;
  const pageHref = `/investigations/${slug}`;
  const saved = isBookmarked(pageHref);

  if (!investigationDatabase[slug] && slug !== "template") {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <article className="flex-1 max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-zinc-400">{investigationData.category}</span>
            </nav>

            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border ${severityColors[investigationData.severity]}`}>
                  <AlertTriangle className="w-3 h-3" />
                  {investigationData.severity.toUpperCase()}
                </span>
                <span className="px-3 py-1.5 bg-zinc-900 text-zinc-400 text-xs font-medium border border-zinc-800">
                  {investigationData.category}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 leading-tight">
                {investigationData.title}
              </h1>

              <p className="text-xl text-zinc-400 mb-6">{investigationData.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{investigationData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated: {investigationData.lastUpdated}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-sm transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={() => {
                    if (!currentUser) {
                      window.location.href = '/contributor';
                      return;
                    }
                    if (saved) {
                      removeBookmark(pageHref);
                    } else {
                      addBookmark({
                        type: 'investigation',
                        title: investigationData.title,
                        href: pageHref,
                        category: investigationData.category,
                        severity: investigationData.severity,
                      });
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 border text-sm transition-colors ${
                    saved
                      ? 'bg-blood-700/20 border-blood-700 text-blood-400 hover:bg-blood-700/30'
                      : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white'
                  }`}
                >
                  {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  {saved ? 'Saved' : 'Save'}
                </button>
                <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blood-700 hover:bg-blood-600 text-white text-sm transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Connections
                </button>
              </div>
            </header>

            <div className="glass-card p-6 mb-8 border-l-4 border-blood-600">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Summary
              </h2>
              <p className="text-zinc-400 leading-relaxed">{investigationData.summary}</p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none mb-12">
              {investigationData.content.map((paragraph, index) => (
                <p key={index} className="text-zinc-400 leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-zinc-500 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {investigationData.tags.map((tag) => (
                  <Link key={tag} href={`/investigations?tag=${encodeURIComponent(tag)}`} className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Sources & Documents
              </h3>
              <div className="space-y-3">
                {investigationData.sources.map((source, index) => (
                  <a key={index} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-900 transition-colors group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-zinc-500" />
                      <div>
                        <span className="text-white group-hover:text-blood-500 transition-colors">{source.title}</span>
                        <span className="block text-xs text-zinc-600">{source.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500" />
                  </a>
                ))}
              </div>
            </div>
          </article>

          <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-24">
              <AffiliationsSidebar affiliations={investigationData.affiliations as Affiliation[]} isOpen={true} onClose={() => {}} title="Connected Entities" />
            </div>
          </aside>
        </div>
      </div>

      <AffiliationsSidebar affiliations={investigationData.affiliations as Affiliation[]} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title="Connected Entities" />
    </div>
  );
}
