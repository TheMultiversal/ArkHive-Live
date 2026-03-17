"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Building2, ChevronRight, Search, Skull, Filter } from "lucide-react";
import EntityCard from"@/components/cards/EntityCard";
import corporationData from"@/data/corporations";

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

const corporations: Entity[] = Object.values(corporationData).map((c: any) => ({
  id: c.id || c.slug,
  slug: c.slug,
  name: c.name,
  type: "corporation" as const,
  description: c.description,
  role: c.role,
  investigationCount: c.investigationCount || 0,
  riskLevel: c.riskLevel as Entity["riskLevel"],
}));

const riskOrder: Record<string, number> = { extreme: 0, high: 1, moderate: 2, low: 3 };
corporations.sort(
  (a, b) => riskOrder[a.riskLevel] - riskOrder[b.riskLevel] || a.name.localeCompare(b.name)
);

type RiskFilter = "all" | "extreme" | "high" | "moderate" | "low";

export default function CorporationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");

  const filtered = useMemo(() => {
    return corporations.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRisk = riskFilter === "all" || c.riskLevel === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [searchQuery, riskFilter]);

  const riskCounts = useMemo(
    () => ({
      all: corporations.length,
      extreme: corporations.filter((i) => i.riskLevel === "extreme").length,
      high: corporations.filter((i) => i.riskLevel === "high").length,
      moderate: corporations.filter((i) => i.riskLevel === "moderate").length,
      low: corporations.filter((i) => i.riskLevel === "low").length,
    }),
    []
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6 pt-4">
          <Link href="/" className="hover:text-blood-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/entities" className="hover:text-blood-600 transition-colors">Entities</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blood-600">Corporations</span>
        </nav>

        <div className="py-8">
          <div className="border-2 border-blood-800/60 bg-[#190800] p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <Building2 className="w-6 h-6 text-blood-600" />
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2">CORPORATIONS</h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.15em]">Follow The Money</p>
              <p className="text-sm text-zinc-500 mt-2">{corporations.length.toLocaleString()} corporations documented in the archive</p>
            </div>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
              Banks, tech giants, defense contractors, and shell companies. Every corporate profile maps their crimes, fines, and connections to government. Independently researched and maintained since 2009.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search corporations..." className="w-full pl-12 pr-4 py-3 bg-[#190800] border-2 border-[rgba(255, 80, 80,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-zinc-500" />
            {(["all","extreme","high","moderate","low"] as RiskFilter[]).map((level) => (
              <button key={level} onClick={() => setRiskFilter(level)} className={`px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${riskFilter === level ? level === "extreme" ? "border-blood-600 bg-blood-900 text-blood-400" : level === "high" ? "border-blood-700 bg-blood-900 text-blood-500" : level === "moderate" ? "border-zinc-600 bg-[#1c0a00] text-zinc-300" : level === "low" ? "border-[rgba(255, 60, 60,0.18)] bg-zinc-900 text-zinc-400" :"border-blood-700 bg-blood-900 text-white" :"border-[rgba(255, 80, 80,0.15)] bg-transparent text-zinc-500 hover:border-zinc-600"}`}>
                {level} ({riskCounts[level]})
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-zinc-500 mb-4">
          Showing {filtered.length.toLocaleString()} of {corporations.length.toLocaleString()} corporations
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((corp) => (<EntityCard key={corp.id} entity={corp} />))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-12 text-center">
            <div className="w-16 h-16 border-2 border-[rgba(255, 60, 60,0.18)] flex items-center justify-center mx-auto mb-4">
              <Skull className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold glass-text mb-2 uppercase tracking-wider">No Corporations Found</h3>
            <p className="text-zinc-500">No corporations match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}