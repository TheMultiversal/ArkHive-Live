"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Network, Search, Skull, Filter, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GlitchText from"@/components/effects/GlitchText";
import organizationData from"@/data/organizations";

const riskColors: Record<string, { bg: string; border: string; text: string }> = {
  critical: { bg: "bg-zinc-900", border: "border-zinc-600", text: "text-zinc-300" },
  high: { bg: "bg-zinc-900", border: "border-zinc-700", text: "text-zinc-600" },
  medium: { bg: "bg-zinc-900", border: "border-zinc-400", text: "text-zinc-400" },
  low: { bg: "bg-zinc-900", border: "border-zinc-600", text: "text-zinc-300" },
};

const organizations = Object.values(organizationData);

type RiskFilter = "all" | "critical" | "high" | "medium" | "low";

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");

  const filtered = useMemo(() => {
    return organizations.filter((org) => {
      const matchesSearch =
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRisk = riskFilter === "all" || org.riskLevel === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [searchQuery, riskFilter]);

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Network className="w-12 h-12 text-zinc-300" />
            <GlitchText text="ORGANIZATIONS" className="text-2xl sm:text-4xl font-bold tracking-wider" />
          </div>
          <p className="text-zinc-400 max-w-3xl">
            Organizations, think tanks, advocacy groups, and networks that shape policy, coordinate power, and operate in the shadows. Follow the connections.
          </p>
          <p className="text-sm text-zinc-500 mt-2">{organizations.length} organizations documented in the archive</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search organizations..." className="w-full pl-12 pr-4 py-3 bg-[#080808] border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-zinc-500" />
            {(["all", "critical", "high", "medium", "low"] as RiskFilter[]).map((level) => (
              <button key={level} onClick={() => setRiskFilter(level)} className={`px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${riskFilter === level ? "border-zinc-700 bg-zinc-800 text-white" : "border-[rgba(255,255,255,0.15)] bg-transparent text-zinc-500 hover:border-zinc-600"}`}>
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((org, index) => (
            <motion.div key={org.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
              <Link href={`/entities/organizations/${org.slug}`}>
                <div className="glass-card p-6 h-full hover:border-zinc-600 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-zinc-300" />
                      <span className={`text-xs px-2 py-1 ${riskColors[org.riskLevel]?.bg || ""} ${riskColors[org.riskLevel]?.border || ""} border ${riskColors[org.riskLevel]?.text || ""}`}>
                        {org.riskLevel.toUpperCase()}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{org.name}</h3>
                  <p className="text-sm text-zinc-500 mb-3">{org.type}</p>
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{org.description}</p>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Users className="w-4 h-4" />
                    <span>{org.members}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-[rgba(255,255,255,0.15)] bg-[#080808] p-12 text-center">
            <div className="w-16 h-16 border-2 border-[rgba(255,255,255,0.18)] flex items-center justify-center mx-auto mb-4">
              <Skull className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold glass-text mb-2 uppercase tracking-wider">No Organizations Found</h3>
            <p className="text-zinc-500">No organizations match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}