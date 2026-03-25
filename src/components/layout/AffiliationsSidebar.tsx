"use client";

import Link from"next/link";
import { X, ExternalLink, Users, Building2, Landmark, FileText, Calendar } from"lucide-react";

export interface Affiliation {
 id: string;
 name: string;
 type:"agency"|"corporation"|"individual"|"organization"|"document";
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
 agency:"text-zinc-300 bg-zinc-900 border-zinc-800",
 corporation:"text-zinc-400 bg-zinc-900 border-zinc-800",
 individual:"text-zinc-300 bg-zinc-900 border-zinc-800",
 organization:"text-zinc-500 bg-zinc-900 border-zinc-800",
 other:"text-zinc-300 bg-zinc-900 border-zinc-800",
};

export default function AffiliationsSidebar({
 affiliations,
 isOpen,
 onClose,
 title ="Affiliations & Connections",
}: AffiliationsSidebarProps) {
 const groupedAffiliations = affiliations.reduce((acc, aff) => {
 if (!acc[aff.type]) acc[aff.type] = [];
 acc[aff.type].push(aff);
 return acc;
 }, {} as Record<string, Affiliation[]>);

 const typeLabels = {
 agency:"Government Agencies",
 corporation:"Corporations",
 individual:"Key Individuals",
 organization:"Organizations",
 document:"Related Documents",
 };

 return (
 <>
 {/* Overlay */}
 {isOpen && (
 <div
 className="fixed inset-0 bg-[#080808] z-40 lg:hidden"
 onClick={onClose}
 />
 )}

 {/* Sidebar */}
 <aside
 className={`fixed top-0 right-0 h-full w-[calc(100vw-3rem)] max-w-80 lg:max-w-96 lg:w-96 glass border-l border-[rgba(255,255,255,0.08)] z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
 isOpen ?"translate-x-0":"translate-x-full"
 } lg:relative lg:top-auto lg:right-auto lg:h-auto lg:transform-none lg:z-auto`}
 >
 <div className="p-6">
 {/* Header */}
 <div className="flex items-center justify-between mb-6">
 <h3 className="text-lg font-bold glass-text flex items-center gap-2">
 <ExternalLink className="w-5 h-5 text-zinc-300"/>
 {title}
 </h3>
 <button
 onClick={onClose}
 className="lg:hidden p-2 text-zinc-500 hover:text-white hover:bg-[#0a0a0a] transition-colors"
 >
 <X className="w-5 h-5"/>
 </button>
 </div>

 {/* Connection Stats */}
 <div className="grid grid-cols-2 gap-3 mb-6">
 <div className="glass-card p-3 text-center">
 <span className="block text-2xl font-bold text-zinc-300">{affiliations.length}</span>
 <span className="text-xs text-zinc-500">Total Connections</span>
 </div>
 <div className="glass-card p-3 text-center">
 <span className="block text-2xl font-bold glass-text">{Object.keys(groupedAffiliations).length}</span>
 <span className="text-xs text-zinc-500">Entity Types</span>
 </div>
 </div>

 {/* Grouped Affiliations */}
 <div className="space-y-6">
 {Object.entries(groupedAffiliations).map(([type, items]) => {
 const Icon = typeIcons[type as keyof typeof typeIcons] || Users;
 return (
 <div key={type}>
 <h4 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
 <Icon className="w-4 h-4"/>
 {typeLabels[type as keyof typeof typeLabels] || type}
 <span className="ml-auto text-xs text-zinc-600">({items.length})</span>
 </h4>
 <div className="space-y-2">
 {items.map((aff) => (
 <Link
 key={aff.id}
 href={aff.href || '#'}
 className={`block p-3 border transition-all duration-200 hover:scale-[1.02] ${
 typeColors[aff.type as keyof typeof typeColors]
 }`}
 >
 <span className="block text-sm font-medium text-white mb-1">
 {aff.name}
 </span>
 <span className="block text-xs text-zinc-500">
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
 <ExternalLink className="w-12 h-12 text-zinc-700 mx-auto mb-4"/>
 <p className="text-zinc-500 text-sm">No affiliations found for this entry.</p>
 </div>
 )}
 </div>
 </aside>
 </>
 );
}
