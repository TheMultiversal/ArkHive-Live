"use client";

import Link from "next/link";
import { X, ExternalLink, Users, Building2, Landmark, FileText, Calendar } from "lucide-react";

export interface Affiliation {
  id: string;
  name: string;
  type: "agency" | "corporation" | "individual" | "organization" | "document";
  relationship: string;
  href: string;
}

interface AffiliationsSidebarProps {
  affiliations: Affiliation[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const typeIcons = {
  agency: Landmark,
  corporation: Building2,
  individual: Users,
  organization: Users,
  document: FileText,
};

const typeColors = {
  agency: "text-blood-500 bg-blood-600/10 border-blood-600/20",
  corporation: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  individual: "text-blood-500 bg-blood-500/10 border-blood-500/20",
  organization: "text-blood-600 bg-blood-700/10 border-blood-700/20",
  other: "text-blood-500 bg-blood-500/10 border-blood-500/20",
};

export default function AffiliationsSidebar({
  affiliations,
  isOpen,
  onClose,
  title = "Affiliations & Connections",
}: AffiliationsSidebarProps) {
  const groupedAffiliations = affiliations.reduce((acc, aff) => {
    if (!acc[aff.type]) acc[aff.type] = [];
    acc[aff.type].push(aff);
    return acc;
  }, {} as Record<string, Affiliation[]>);

  const typeLabels = {
    agency: "Government Agencies",
    corporation: "Corporations",
    individual: "Key Individuals",
    organization: "Organizations",
    document: "Related Documents",
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 lg:w-96 glass border-l border-dark-700/50 z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } lg:relative lg:top-auto lg:right-auto lg:h-auto lg:transform-none lg:z-auto`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blood-500" />
              {title}
            </h3>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-dark-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Connection Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="glass-card p-3 text-center">
              <span className="block text-2xl font-bold text-blood-500">{affiliations.length}</span>
              <span className="text-xs text-dark-400">Total Connections</span>
            </div>
            <div className="glass-card p-3 text-center">
              <span className="block text-2xl font-bold text-white">{Object.keys(groupedAffiliations).length}</span>
              <span className="text-xs text-dark-400">Entity Types</span>
            </div>
          </div>

          {/* Grouped Affiliations */}
          <div className="space-y-6">
            {Object.entries(groupedAffiliations).map(([type, items]) => {
              const Icon = typeIcons[type as keyof typeof typeIcons] || Users;
              return (
                <div key={type}>
                  <h4 className="text-sm font-semibold text-dark-300 mb-3 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {typeLabels[type as keyof typeof typeLabels] || type}
                    <span className="ml-auto text-xs text-dark-500">({items.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {items.map((aff) => (
                      <Link
                        key={aff.id}
                        href={aff.href}
                        className={`block p-3 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
                          typeColors[aff.type as keyof typeof typeColors]
                        }`}
                      >
                        <span className="block text-sm font-medium text-white mb-1">
                          {aff.name}
                        </span>
                        <span className="block text-xs text-dark-400">
                          {aff.relationship}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {affiliations.length === 0 && (
            <div className="text-center py-12">
              <ExternalLink className="w-12 h-12 text-dark-600 mx-auto mb-4" />
              <p className="text-dark-400 text-sm">No affiliations found for this entry.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
