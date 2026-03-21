"use client";

import { useState, useMemo, useCallback, useEffect } from"react";
import { useSearchParams } from"next/navigation";
import InvestigationCard, { Investigation } from"@/components/cards/InvestigationCard";
import { InvestigationIndexButton } from"@/components/InvestigationIndex";
import investigationDatabase from"@/data/investigations";
import { Search, AlertTriangle, X, ChevronLeft, ChevronRight, Skull, Shield, Scale, Globe, Landmark, Building2, Siren, FileWarning, Microscope, Radio, Crosshair, Flame, Users, DollarSign, Eye, Filter } from"lucide-react";

// Convert the data-directory investigations into the Investigation card format
const allInvestigations: Investigation[] = Object.entries(investigationDatabase).map(
 ([slug, data]) => ({
 id: slug,
 slug,
 title: data.title,
 summary: data.summary,
 category: data.category,
 severity: data.severity,
 date: data.date,
 entityCount: data.affiliations?.length || 0,
 tags: data.tags || [],
 })
);

// ──────────────────────────────────────────────────────────────────
// CATEGORY NORMALIZATION
// Maps 103+ raw categories into 15 clean, navigable super-categories
// ──────────────────────────────────────────────────────────────────
const CATEGORY_MAP: Record<string, string> = {
 // War & Military
"War Crimes":"War & Military",
"Military Operations":"War & Military",
"Covert Operations":"War & Military",
"Contractor Corruption":"War & Military",
"January 6 Response":"War & Military",

 // Election & Democracy
"Election Interference":"Elections & Democracy",
"Voter Suppression":"Elections & Democracy",
"Election Subversion":"Elections & Democracy",
"Election Integrity":"Elections & Democracy",
"Election Crimes":"Elections & Democracy",
"Election Corruption":"Elections & Democracy",

 // Financial & Economic
"Financial Crimes":"Financial Crimes",
"Financial Fraud":"Financial Crimes",
"Financial Crime":"Financial Crimes",
"Financial Markets":"Financial Crimes",
"Economic Crimes":"Financial Crimes",
"Economic Exploitation":"Financial Crimes",
"Economic Concentration":"Financial Crimes",

 // Corporate
"Corporate Crime":"Corporate Crime",
"Corporate Fraud":"Corporate Crime",
"Corporate Harm":"Corporate Crime",
"Corporate Homicide":"Corporate Crime",
"Labor Abuse":"Corporate Crime",
"Labor Rights":"Corporate Crime",
"Regulatory Failure":"Corporate Crime",
"Whistleblower Retaliation":"Corporate Crime",

 // Civil Rights & Justice
"Civil Rights":"Civil Rights & Justice",
"Civil Liberties":"Civil Rights & Justice",
"Systemic Racism":"Civil Rights & Justice",
"Systemic Injustice":"Civil Rights & Justice",
"Environmental Racism":"Civil Rights & Justice",
"Environmental Justice":"Civil Rights & Justice",
"Police Violence":"Civil Rights & Justice",
"Racism":"Civil Rights & Justice",

 // Government Abuse
"Abuse of Power":"Government Abuse",
"Government Abuse of Power":"Government Abuse",
"Government Overreach":"Government Abuse",
"Government Cover-Up":"Government Abuse",
"Government Corruption":"Government Abuse",
"Obstruction":"Government Abuse",
"Obstruction of Justice":"Government Abuse",

 // Human Rights
"Crimes Against Humanity":"Human Rights Violations",
"Genocide":"Human Rights Violations",
"Human Rights":"Human Rights Violations",
"Human Rights Violations":"Human Rights Violations",
"International Law":"Human Rights Violations",

 // Trafficking & Sexual Crimes
"Human Trafficking":"Trafficking & Sexual Crimes",
"Sex Crimes":"Trafficking & Sexual Crimes",
"Sexual Crimes":"Trafficking & Sexual Crimes",
"Sexual Misconduct":"Trafficking & Sexual Crimes",
"Criminal Conviction":"Trafficking & Sexual Crimes",

 // Corruption & Ethics
"Corruption":"Corruption & Ethics",
"Organizational Corruption":"Corruption & Ethics",
"Institutional Corruption":"Corruption & Ethics",
"Judicial Corruption":"Corruption & Ethics",
"Regulatory Capture":"Corruption & Ethics",
"Special Interest Corruption":"Corruption & Ethics",
"Ethics Violations":"Corruption & Ethics",
"Political Corruption":"Corruption & Ethics",
"Conflicts of Interest":"Corruption & Ethics",
"Political Finance":"Corruption & Ethics",
"Transparency":"Corruption & Ethics",

 // Foreign Affairs
"Foreign Corruption":"Foreign Affairs",
"Foreign Influence":"Foreign Affairs",
"Foreign Interference":"Foreign Affairs",
"Foreign Collusion":"Foreign Affairs",
"Foreign Intelligence":"Foreign Affairs",
"Foreign Policy":"Foreign Affairs",
"Geopolitics":"Foreign Affairs",
"International":"Foreign Affairs",
"Russia Connection":"Foreign Affairs",

 // Environment
"Environment":"Environment",
"Environmental":"Environment",
"Environmental Crimes":"Environment",
"Environmental Crime":"Environment",
"Climate":"Environment",

 // Public Health
"Public Health":"Public Health",
"Global Health":"Public Health",
"Research Ethics":"Public Health",
"Animal Welfare":"Public Health",
"Medical Tyranny":"Public Health",
"Human Experimentation":"Public Health",
"Pharmaceutical Fraud":"Public Health",
"Forced Medical Treatment":"Public Health",
"Vaccine Injury":"Public Health",
"Bioethics Violations":"Public Health",
"Medical Negligence":"Public Health",
"Biological Weapons":"Public Health",

 // National Security
"National Security":"National Security",
"Intelligence Failures":"National Security",
"Intelligence Manipulation":"National Security",

 // Media & Disinformation
"Disinformation":"Media & Disinformation",
"Disinformation Accountability":"Media & Disinformation",
"Media Corruption":"Media & Disinformation",
"Media Manipulation":"Media & Disinformation",
"Media & Technology":"Media & Disinformation",
"Media & Democracy":"Media & Disinformation",
"Information Warfare":"Media & Disinformation",

 // Constitutional & Political
"Constitutional Crisis":"Constitutional Crises",
"Constitutional Violations":"Constitutional Crises",
"Political Extremism":"Constitutional Crises",
"Power Structures":"Constitutional Crises",
"Global Governance":"Constitutional Crises",
"Oligarchy":"Constitutional Crises",

 // Terrorism & Extremism
"Domestic Terrorism":"Terrorism & Extremism",
"Extremism":"Terrorism & Extremism",

 // Technology & Privacy
"Technology":"Technology & Privacy",
"Privacy":"Technology & Privacy",
"Commercial Crimes":"Technology & Privacy",

 // Catch-all for bot-generated content
"General":"Other",
"Investigation":"Other",
"Accountability":"Other",
};

function normalizeCategory(raw: string): string {
 return CATEGORY_MAP[raw] ||"Other";
}

// Category icon mapping
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
"War & Military": Crosshair,
"Elections & Democracy": Scale,
"Financial Crimes": DollarSign,
"Corporate Crime": Building2,
"Civil Rights & Justice": Users,
"Government Abuse": Landmark,
"Human Rights Violations": Skull,
"Trafficking & Sexual Crimes": Siren,
"Corruption & Ethics": Eye,
"Foreign Affairs": Globe,
"Environment": Flame,
"Public Health": Microscope,
"National Security": Shield,
"Media & Disinformation": Radio,
"Constitutional Crises": FileWarning,
"Terrorism & Extremism": AlertTriangle,
"Technology & Privacy": Filter,
"Other": Search,
};

// Canonical category order
const CATEGORY_ORDER = [
"All",
"War & Military",
"Human Rights Violations",
"Elections & Democracy",
"Corruption & Ethics",
"Financial Crimes",
"Corporate Crime",
"Government Abuse",
"Civil Rights & Justice",
"Foreign Affairs",
"Trafficking & Sexual Crimes",
"Constitutional Crises",
"National Security",
"Public Health",
"Environment",
"Media & Disinformation",
"Terrorism & Extremism",
"Technology & Privacy",
"Other",
];

const SEVERITY_ORDER: Record<string, number> = { critical: 0, high: 1, medium: 2, low: 3 };

const ITEMS_PER_PAGE = 24;

// ──────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ──────────────────────────────────────────────────────────────────
export default function InvestigationsPage() {
 const searchParams = useSearchParams();
 const [searchQuery, setSearchQuery] = useState("");
 const [activeCategory, setActiveCategory] = useState("All");
 const [activeSeverity, setActiveSeverity] = useState("");
 const [sortBy, setSortBy] = useState<"alpha"|"newest"|"oldest"|"severity">("alpha");
 const [currentPage, setCurrentPage] = useState(1);
 const [showFilters, setShowFilters] = useState(false);

 // Read tag or category from URL search params
 useEffect(() => {
 const tag = searchParams.get('tag');
 const cat = searchParams.get('category');
 if (tag) {
 setSearchQuery(tag);
 setCurrentPage(1);
 }
 if (cat) {
 setActiveCategory(cat);
 setCurrentPage(1);
 }
 }, [searchParams]);

 // Normalize + compute category counts once
 const { normalizedData, categoryCounts } = useMemo(() => {
 const normalized = allInvestigations.map((inv) => ({
 ...inv,
 normalizedCategory: normalizeCategory(inv.category),
 }));
 const counts: Record<string, number> = {};
 normalized.forEach((inv) => {
 counts[inv.normalizedCategory] = (counts[inv.normalizedCategory] || 0) + 1;
 });
 return { normalizedData: normalized, categoryCounts: counts };
 }, []);

 // Filter + sort
 const filtered = useMemo(() => {
 let results = normalizedData;

 // Category filter
 if (activeCategory !=="All") {
 results = results.filter((inv) => inv.normalizedCategory === activeCategory);
 }

 // Severity filter
 if (activeSeverity) {
 results = results.filter((inv) => inv.severity === activeSeverity);
 }

 // Search
 if (searchQuery) {
 const q = searchQuery.toLowerCase();
 results = results.filter(
 (inv) =>
 inv.title.toLowerCase().includes(q) ||
 inv.summary.toLowerCase().includes(q) ||
 inv.category.toLowerCase().includes(q) ||
 inv.normalizedCategory.toLowerCase().includes(q) ||
 inv.tags.some((t) => t.toLowerCase().includes(q))
 );
 }

 // Sort
 results = [...results].sort((a, b) => {
 switch (sortBy) {
 case"alpha":
 return a.title.localeCompare(b.title);
 case"newest": {
 const da = new Date(a.date).getTime();
 const db = new Date(b.date).getTime();
 return db - da;
 }
 case"oldest": {
 const da = new Date(a.date).getTime();
 const db = new Date(b.date).getTime();
 return da - db;
 }
 case"severity":
 return (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9);
 default:
 return 0;
 }
 });

 return results;
 }, [normalizedData, activeCategory, activeSeverity, searchQuery, sortBy]);

 // Pagination
 const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
 const paginatedResults = useMemo(
 () => filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE),
 [filtered, currentPage]
 );

 // Reset page when filters change
 const handleCategoryChange = useCallback((cat: string) => {
 setActiveCategory(cat);
 setCurrentPage(1);
 }, []);

 const handleSeverityChange = useCallback((sev: string) => {
 setActiveSeverity(sev);
 setCurrentPage(1);
 }, []);

 const handleSearchChange = useCallback((val: string) => {
 setSearchQuery(val);
 setCurrentPage(1);
 }, []);

 const handleSortChange = useCallback((val:"alpha"|"newest"|"oldest"|"severity") => {
 setSortBy(val);
 setCurrentPage(1);
 }, []);

 // Severity counts for the stat bar
 const severityCounts = useMemo(() => {
 const counts = { critical: 0, high: 0, medium: 0, low: 0 };
 filtered.forEach((inv) => {
 counts[inv.severity as keyof typeof counts]++;
 });
 return counts;
 }, [filtered]);

 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 {/* ── HEADER ───────────────────────────────────────────── */}
 <div className="py-8 lg:py-12">
 <div className="border-2 border-zinc-800/60 bg-[#080808] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-4 mb-6">
 <span className="h-[2px] flex-1 bg-gradient-to-r from-zinc-700 to-transparent"/>
 <span className="text-xs text-zinc-600 uppercase tracking-[0.3em]">Declassified Files</span>
 <span className="h-[2px] flex-1 bg-gradient-to-l from-zinc-700 to-transparent"/>
 </div>
 <div className="text-center mb-6">
 <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black glass-text uppercase tracking-wider mb-2">
 INVESTIGATIONS
 </h1>
 <p className="text-sm sm:text-lg text-zinc-500 font-bold uppercase tracking-[0.2em]">
 {allInvestigations.length} Cases Exposed
 </p>
 </div>
 <p className="text-zinc-400 leading-relaxed text-center max-w-3xl mx-auto">
 Every document here represents a crime. Every file exposes a lie. Every investigation
 traces the web of corruption from the shadows into the light.
 </p>
 </div>
 </div>

 {/* ── CATEGORY TABS ────────────────────────────────────── */}
 <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
 <div className="flex gap-1 min-w-max pb-2">
 {CATEGORY_ORDER.map((cat) => {
 const count = cat ==="All"? allInvestigations.length : (categoryCounts[cat] || 0);
 if (cat !=="All"&& count === 0) return null;
 const isActive = activeCategory === cat;
 const IconComp = cat !=="All"? CATEGORY_ICONS[cat] : null;
 return (
 <button
 key={cat}
 onClick={() => handleCategoryChange(cat)}
 className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${
 isActive
 ?"bg-zinc-800 border-zinc-700 text-zinc-400"
 :"bg-black/40 border-[rgba(255,255,255,0.08)] text-zinc-500 hover:text-zinc-300 hover:border-[rgba(255,255,255,0.18)]"
 }`}
 >
 {IconComp && <IconComp className="w-3.5 h-3.5"/>}
 <span>{cat}</span>
 <span className={`ml-1 text-[10px] ${isActive ?"text-zinc-300":"text-zinc-600"}`}>
 {count}
 </span>
 </button>
 );
 })}
 </div>
 </div>

 {/* ── SEARCH + CONTROLS ────────────────────────────────── */}
 <div className="flex flex-col sm:flex-row gap-3 mb-6">
 {/* Search */}
 <div className="flex-1 relative">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => handleSearchChange(e.target.value)}
 placeholder="Search investigations, topics, entities..."
 className="w-full pl-11 pr-10 py-2.5 bg-[#080808] border border-[rgba(255,255,255,0.15)] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
 />
 {searchQuery && (
 <button
 onClick={() => handleSearchChange("")}
 className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
 >
 <X className="w-4 h-4"/>
 </button>
 )}
 </div>

 {/* Sort */}
 <select
 value={sortBy}
 onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
 className="px-4 py-2.5 bg-[#080808] border border-[rgba(255,255,255,0.15)] text-zinc-300 text-sm focus:outline-none focus:border-zinc-700"
 >
 <option value="alpha">A - Z</option>
 <option value="newest">Newest First</option>
 <option value="oldest">Oldest First</option>
 <option value="severity">Severity</option>
 </select>

 {/* Severity filter */}
 <select
 value={activeSeverity}
 onChange={(e) => handleSeverityChange(e.target.value)}
 className="px-4 py-2.5 bg-[#080808] border border-[rgba(255,255,255,0.15)] text-zinc-300 text-sm focus:outline-none focus:border-zinc-700"
 >
 <option value="">All Severity</option>
 <option value="critical">Critical</option>
 <option value="high">High</option>
 <option value="medium">Medium</option>
 <option value="low">Low</option>
 </select>

 {/* Quick Index */}
 <InvestigationIndexButton />
 </div>

 {/* ── RESULTS BAR ──────────────────────────────────────── */}
 <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border border-[rgba(255,255,255,0.08)] bg-black/40 px-4 py-3">
 <div className="flex items-center gap-4">
 <p className="text-sm text-zinc-400">
 <span className="glass-text font-bold">{filtered.length}</span> investigation{filtered.length !== 1 ?"s":""}
 {activeCategory !=="All"&& (
 <span className="text-zinc-300 ml-1">in {activeCategory}</span>
 )}
 </p>
 {(searchQuery || activeSeverity) && (
 <button
 onClick={() => { setSearchQuery(""); setActiveSeverity(""); setCurrentPage(1); }}
 className="text-xs text-zinc-300 hover:text-white transition-colors"
 >
 Clear filters
 </button>
 )}
 </div>
 <div className="flex items-center gap-3 text-xs">
 <span className="flex items-center gap-1.5">
 <span className="w-2 h-2 bg-zinc-700"/>
 <span className="text-zinc-500">{severityCounts.critical} Critical</span>
 </span>
 <span className="flex items-center gap-1.5">
 <span className="w-2 h-2 bg-zinc-800"/>
 <span className="text-zinc-500">{severityCounts.high} High</span>
 </span>
 <span className="flex items-center gap-1.5">
 <span className="w-2 h-2 bg-zinc-600"/>
 <span className="text-zinc-500">{severityCounts.medium + severityCounts.low} Other</span>
 </span>
 </div>
 </div>

 {/* ── GRID ─────────────────────────────────────────────── */}
 {paginatedResults.length > 0 ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {paginatedResults.map((investigation) => (
 <InvestigationCard
 key={investigation.id}
 investigation={investigation}
 />
 ))}
 </div>
 ) : (
 <div className="border border-[rgba(255,255,255,0.15)] bg-[#080808] p-12 text-center">
 <div className="w-16 h-16 border-2 border-[rgba(255,255,255,0.18)] flex items-center justify-center mx-auto mb-4">
 <AlertTriangle className="w-8 h-8 text-zinc-600"/>
 </div>
 <h2 className="text-xl font-bold glass-text mb-2 uppercase tracking-wider">No Files Found</h2>
 <p className="text-zinc-500 max-w-md mx-auto">
 No investigations match your search criteria. Adjust your filters or check back
 as new evidence is declassified.
 </p>
 </div>
 )}

 {/* ── PAGINATION ───────────────────────────────────────── */}
 {totalPages > 1 && (
 <div className="flex items-center justify-center gap-2 mt-10">
 <button
 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
 disabled={currentPage === 1}
 className="p-2 border border-[rgba(255,255,255,0.15)] text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
 >
 <ChevronLeft className="w-4 h-4"/>
 </button>

 {Array.from({ length: totalPages }, (_, i) => i + 1)
 .filter((page) => {
 // Show first, last, and pages near current
 if (page === 1 || page === totalPages) return true;
 if (Math.abs(page - currentPage) <= 2) return true;
 return false;
 })
 .reduce<(number |"ellipsis")[]>((acc, page, idx, arr) => {
 if (idx > 0 && page - (arr[idx - 1] as number) > 1) {
 acc.push("ellipsis");
 }
 acc.push(page);
 return acc;
 }, [])
 .map((item, idx) =>
 item ==="ellipsis"? (
 <span key={`e-${idx}`} className="px-2 text-zinc-600">...</span>
 ) : (
 <button
 key={item}
 onClick={() => setCurrentPage(item as number)}
 className={`w-9 h-9 text-sm font-bold border transition-colors ${
 currentPage === item
 ?"bg-zinc-800 border-zinc-700 text-zinc-400"
 :"border-[rgba(255,255,255,0.15)] text-zinc-500 hover:text-white hover:border-zinc-600"
 }`}
 >
 {item}
 </button>
 )
 )}

 <button
 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
 disabled={currentPage === totalPages}
 className="p-2 border border-[rgba(255,255,255,0.15)] text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
 >
 <ChevronRight className="w-4 h-4"/>
 </button>
 </div>
 )}

 </div>
 </div>
 );
}