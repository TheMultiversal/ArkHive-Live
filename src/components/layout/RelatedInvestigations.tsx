"use client";

import Link from "next/link";
import { Lightbulb, ArrowRight, AlertTriangle } from "lucide-react";
import investigationDatabase from "@/data/investigations";
import type { InvestigationData } from "@/data/investigations/types";

interface RecommendedInvestigation {
  slug: string;
  title: string;
  category: string;
  severity: string;
  relevanceScore: number;
  matchReason: string;
}

const severityColors: Record<string, string> = {
  critical: "text-red-500 border-red-500/30",
  high: "text-orange-500 border-orange-500/30",
  medium: "text-yellow-500 border-yellow-500/30",
  low: "text-zinc-400 border-zinc-500/30",
};

interface RelatedInvestigationsProps {
  currentSlug: string;
  currentData: InvestigationData;
  maxRecommendations?: number;
  className?: string;
}

export default function RelatedInvestigations({
  currentSlug,
  currentData,
  maxRecommendations = 4,
  className = "",
}: RelatedInvestigationsProps) {
  // Find related investigations based on multiple criteria
  const recommendations: RecommendedInvestigation[] = [];
  
  const currentTags = new Set(currentData.tags?.map(t => t.toLowerCase()) || []);
  const currentAffiliations = new Set(currentData.affiliations?.map(a => a.name.toLowerCase()) || []);
  const currentCategory = currentData.category?.toLowerCase() || "";
  
  for (const [slug, data] of Object.entries(investigationDatabase)) {
    // Skip current investigation
    if (slug === currentSlug) continue;
    
    let relevanceScore = 0;
    const matchReasons: string[] = [];
    
    // Same category = high relevance
    if (data.category?.toLowerCase() === currentCategory) {
      relevanceScore += 30;
      matchReasons.push("Same category");
    }
    
    // Shared tags = medium relevance
    const dataTags = new Set(data.tags?.map(t => t.toLowerCase()) || []);
    const sharedTags = [...currentTags].filter(t => dataTags.has(t));
    if (sharedTags.length > 0) {
      relevanceScore += sharedTags.length * 10;
      matchReasons.push(`${sharedTags.length} shared tags`);
    }
    
    // Shared affiliations = high relevance
    const dataAffiliations = new Set(data.affiliations?.map(a => a.name.toLowerCase()) || []);
    const sharedAffiliations = [...currentAffiliations].filter(a => dataAffiliations.has(a));
    if (sharedAffiliations.length > 0) {
      relevanceScore += sharedAffiliations.length * 15;
      matchReasons.push(`${sharedAffiliations.length} connected entities`);
    }
    
    // Same severity gives a small boost
    if (data.severity === currentData.severity) {
      relevanceScore += 5;
    }
    
    // Only include if there's some relevance
    if (relevanceScore > 0) {
      recommendations.push({
        slug,
        title: data.title,
        category: data.category,
        severity: data.severity,
        relevanceScore,
        matchReason: matchReasons[0] || "Related investigation",
      });
    }
  }
  
  // Sort by relevance and take top N
  recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore);
  const topRecommendations = recommendations.slice(0, maxRecommendations);
  
  if (topRecommendations.length === 0) return null;
  
  return (
    <div className={`border border-zinc-800/40 bg-gradient-to-b from-[#0a0a0a] to-[#050202] ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800/30 px-4 py-3 flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-zinc-300" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          You Might Also Investigate
        </h3>
      </div>
      
      {/* Recommendations */}
      <div className="divide-y divide-zinc-800/50">
        {topRecommendations.map((rec) => (
          <Link
            key={rec.slug}
            href={`/investigations/${rec.slug}`}
            className="block p-4 hover:bg-zinc-800/80/30 transition-colors group"
          >
            <div className="flex items-start gap-3">
              {/* Severity indicator */}
              <span className={`mt-1 flex-shrink-0 ${severityColors[rec.severity]}`}>
                <AlertTriangle className="w-4 h-4" />
              </span>
              
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-2 transition-colors">
                  {rec.title}
                </h4>
                
                {/* Metadata */}
                <div className="mt-1 flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">{rec.category}</span>
                  <span className="text-zinc-700">ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢</span>
                  <span className="text-zinc-300/70">{rec.matchReason}</span>
                </div>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
      
      {/* View all link */}
      <div className="border-t border-zinc-800/30 px-4 py-2">
        <Link
          href={`/investigations?category=${encodeURIComponent(currentData.category)}`}
          className="text-xs text-zinc-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
        >
          <span>View all {currentData.category} investigations</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
