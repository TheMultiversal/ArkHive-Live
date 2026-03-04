"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Users, ChevronRight, Search, Skull, Filter } from "lucide-react";
import individualData from "@/data/individuals";
import EntityCard from "@/components/cards/EntityCard";

interface Entity {
  id: string;
  slug: string;
  name: string;
  type: "agency" | "corporation" | "individual" | "organization";
  description: string;
  role: string;
  investigationCount: number;
  riskLevel: "extreme" | "high" | "moderate" | "low";
  imageUrl?: string;
}

// Map profile riskLevel to EntityCard riskLevel
const riskMap: Record<string, "extreme" | "high" | "moderate" | "low"> = {
  critical: "extreme",
  high: "high",
  medium: "moderate",
  low: "low",
};

// Build entity list from live shard data
const individuals: Entity[] = Object.entries(individualData).map(([slug, profile]: [string, any], i) => ({
  id: `ind-${i}`,
  slug,
  name: profile.name,
  type: "individual" as const,
  description:
    (profile.description?.substring(0, 200) +
      (profile.description?.length > 200 ? "..." : "")) ||
    "Profile under investigation.",
  role: profile.role || profile.title || "Under Investigation",
  investigationCount: profile.relatedInvestigations?.length || 0,
  riskLevel: riskMap[profile.riskLevel] || "low",
}));

// Sort: highest risk first, then alphabetical
const riskOrder: Record<string, number> = { extreme: 0, high: 1, moderate: 2, low: 3 };
individuals.sort(
  (a, b) => riskOrder[a.riskLevel] - riskOrder[b.riskLevel] || a.name.localeCompare(b.name)
);

type RiskFilter = "all" | "extreme" | "high" | "moderate" | "low";

export default function IndividualsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");

  const filtered = useMemo(() => {
    return individuals.filter((ind) => {
      const matchesSearch =
        ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRisk = riskFilter === "all" || ind.riskLevel === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [searchQuery, riskFilter]);

  const riskCounts = useMemo(
    () => ({
      all: individuals.length,
      extreme: individuals.filter((i) => i.riskLevel === "extreme").length,
      high: individuals.filter((i) => i.riskLevel === "high").length,
      moderate: individuals.filter((i) => i.riskLevel === "moderate").length,
      low: individuals.filter((i) => i.riskLevel === "low").length,
    }),
    []
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6 pt-4">
          <Link href="/" className="hover:text-blood-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/entities" className="hover:text-blood-600 transition-colors">
            Entities
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blood-600">Individuals</span>
        </nav>

        {/* Header */}
        <div className="py-8">
          <div className="border-2 border-blood-800/60 bg-black/60 p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <Users className="w-6 h-6 text-blood-600" />
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
                KEY INDIVIDUALS
              </h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.15em]">
                The Names Behind The Crimes
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                {individuals.length.toLocaleString()} individuals documented in the archive
              </p>
            </div>

            <p className="text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
              Politicians, executives, operatives, and enablers. Every profile maps their crimes,
              connections, and place in the network of institutional corruption. Continuously
              expanded by ArkHive Swarm Intelligence.
            </p>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search individuals..."
              className="w-full pl-12 pr-4 py-3 bg-black/60 border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-zinc-500" />
            {(["all", "extreme", "high", "moderate", "low"] as RiskFilter[]).map((level) => (
              <button
                key={level}
                onClick={() => setRiskFilter(level)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  riskFilter === level
                    ? level === "extreme"
                      ? "border-blood-600 bg-blood-900/50 text-blood-400"
                      : level === "high"
                        ? "border-blood-700 bg-blood-900/30 text-blood-500"
                        : level === "moderate"
                          ? "border-zinc-600 bg-zinc-900/50 text-zinc-300"
                          : level === "low"
                            ? "border-zinc-700 bg-zinc-900/30 text-zinc-400"
                            : "border-blood-700 bg-blood-900/30 text-white"
                    : "border-zinc-800 bg-transparent text-zinc-500 hover:border-zinc-600"
                }`}
              >
                {level} ({riskCounts[level]})
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-zinc-500 mb-4">
          Showing {filtered.length.toLocaleString()} of{" "}
          {individuals.length.toLocaleString()} individuals
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 300).map((individual) => (
            <EntityCard key={individual.id} entity={individual} />
          ))}
        </div>

        {filtered.length > 300 && (
          <div className="border border-zinc-800 bg-black/60 p-6 text-center mt-6">
            <p className="text-zinc-400">
              Showing first 300 of {filtered.length.toLocaleString()} results. Use the search
              to narrow down.
            </p>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="border border-zinc-800 bg-black/60 p-12 text-center">
            <div className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <Skull className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
              No Individuals Found
            </h3>
            <p className="text-zinc-500">No individuals match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
