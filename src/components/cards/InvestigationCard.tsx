import Link from"next/link";
import { Calendar, ArrowRight, Skull, Users, AlertTriangle, FileText, Archive, Clock } from "lucide-react";
import EvidenceTierBadge, { type EvidenceTier } from "@/components/ui/EvidenceTierBadge";

function fmtDate(d: string | undefined): string {
  if (!d) return "Unknown";
  if (/[a-zA-Z]/.test(d)) return d;
  try {
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch { return d; }
}

export interface Investigation {
 id: string;
 slug: string;
 title: string;
 summary: string;
 category: string;
 severity:"critical"|"high"|"medium"|"low";
 /** @deprecated Use eventOriginDate/lastActivityDate */
 date: string;
 /** When the event/crime actually occurred */
 eventOriginDate?: string;
 /** Most recent development */
 lastActivityDate?: string;
 entityCount: number;
 imageUrl?: string;
 tags: string[];
 evidenceTier?: EvidenceTier;
}

interface InvestigationCardProps {
 investigation: Investigation;
 featured?: boolean;
}

const severityConfig = {
 critical: {
 classes:"bg-zinc-800 text-zinc-400 border-zinc-700",
 label:"CRITICAL THREAT",
 Icon: Skull,
 accentColor:"rgba(150, 150, 150, 0.5)",
 },
 high: {
 classes:"bg-zinc-900 text-zinc-300 border-zinc-700",
 label:"HIGH THREAT",
 Icon: AlertTriangle,
 accentColor:"rgba(168, 40, 40, 0.4)",
 },
 medium: {
 classes:"bg-zinc-900 text-zinc-300 border-[rgba(255,255,255,0.18)]",
 label:"DOCUMENTED",
 Icon: FileText,
 accentColor:"rgba(113, 113, 122, 0.3)",
 },
 low: {
 classes:"bg-[#0a0a0a] text-zinc-500 border-[rgba(255,255,255,0.15)]",
 label:"ARCHIVED",
 Icon: Archive,
 accentColor:"rgba(63, 63, 70, 0.3)",
 },
};

export default function InvestigationCard({ investigation, featured = false }: InvestigationCardProps) {
 const severity = severityConfig[investigation.severity];
 const SeverityIcon = severity.Icon;

 return (
 <Link
 href={`/investigations/${investigation.slug}`}
 aria-label={`${investigation.title} - ${severity.label} investigation in ${investigation.category} category with ${investigation.entityCount} entities`}
 className={`group block glass-card overflow-hidden ${featured ?"lg:col-span-2 lg:row-span-2":""}`}
 >
 {/* Header band with severity accent */}
 <div className={`relative ${featured ?"h-44 lg:h-56":"h-28"} bg-gradient-to-br from-zinc-950 to-black overflow-hidden`}>
 {/* Data grid pattern */}
 <div
 className="absolute inset-0 opacity-[0.06]"
 style={{
 backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.5) 1px, transparent 1px),
 linear-gradient(90deg, rgba(150, 150, 150, 0.5) 1px, transparent 1px)`,
 backgroundSize: '16px 16px'
 }}
 />

 {/* Severity gradient band (left edge) */}
 <div
 className="absolute top-0 left-0 w-[3px] h-full"
 style={{ background: `linear-gradient(180deg, ${severity.accentColor}, transparent)` }}
 />

 {/* Bottom fade */}
 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"/>

 {/* Severity Badge */}
 <div className="absolute top-3 left-3 z-20 max-w-[45%]">
 <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-black tracking-wider border truncate ${severity.classes}`}>
 <SeverityIcon className="w-3 h-3 shrink-0"/>
 <span className="truncate">{severity.label}</span>
 </span>
 </div>

 {/* Category */}
 <div className="absolute top-3 right-3 z-20 max-w-[45%]">
 <span className="px-2 py-1 bg-[rgba(0,6,20,0.90)] text-zinc-500 text-[10px] font-bold uppercase tracking-wider border border-[rgba(255,255,255,0.08)] truncate block">
 {investigation.category}
 </span>
 </div>

 {/* Entity Count */}
 <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
 {investigation.evidenceTier && (
 <EvidenceTierBadge tier={investigation.evidenceTier} size="compact" />
 )}
 <div className="flex items-center gap-1.5 text-zinc-600">
 <Users className="w-3.5 h-3.5"/>
 <span className="text-[10px] font-bold uppercase tracking-wider">{investigation.entityCount} entities</span>
 </div>
 </div>
 </div>

 {/* Content block */}
 <div className="p-4 lg:p-5">
 <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-widest mb-2.5 font-bold">
 {investigation.lastActivityDate ? (
 <>
 <Clock className="w-3 h-3 text-red-400"/>
 <span>{fmtDate(investigation.lastActivityDate)}</span>
 <span className="text-red-400">(Active)</span>
 </>
 ) : (
 <>
 <Calendar className="w-3 h-3"/>
 <span>{fmtDate(investigation.eventOriginDate || investigation.date)}</span>
 </>
 )}
 </div>

 <h3 className={`font-black glass-text mb-2 group-hover:text-white transition-colors leading-tight ${featured ?"text-xl lg:text-2xl":"text-sm"}`}>
 {investigation.title}
 </h3>

 <p className={`text-zinc-500 mb-3 line-clamp-2 leading-relaxed ${featured ?"text-sm":"text-xs"}`}>
 {investigation.summary}
 </p>

 {/* Tags */}
 <div className="flex flex-wrap gap-1.5 mb-3">
 {investigation.tags.slice(0, featured ? 5 : 3).map((tag) => (
 <Link
 key={tag}
 href={`/investigations?tag=${encodeURIComponent(tag)}`}
 onClick={(e) => e.stopPropagation()}
 className="px-2 py-0.5 bg-[rgba(0,6,20,0.88)] border border-[rgba(255,255,255,0.08)] text-zinc-600 text-[10px] font-medium uppercase tracking-wide hover:border-zinc-600/50 hover:text-white transition-colors"
 >
 {tag}
 </Link>
 ))}
 </div>

 {/* CTA with animated arrow */}
 <div className="flex items-center justify-between pt-3 border-t border-zinc-900/60">
 <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.15em] group-hover:text-white transition-colors">
 Access File
 </span>
 <ArrowRight className="w-3.5 h-3.5 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white"/>
 </div>
 </div>
 </Link>
 );
}
