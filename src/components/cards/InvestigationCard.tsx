import Link from"next/link";
import { Calendar, ArrowRight, Skull, Users, AlertTriangle, FileText, Archive } from"lucide-react";

export interface Investigation {
 id: string;
 slug: string;
 title: string;
 summary: string;
 category: string;
 severity:"critical"|"high"|"medium"|"low";
 date: string;
 entityCount: number;
 imageUrl?: string;
 tags: string[];
}

interface InvestigationCardProps {
 investigation: Investigation;
 featured?: boolean;
}

const severityConfig = {
 critical: {
 classes:"bg-blood-900/60 text-blood-400 border-blood-600",
 label:"CRITICAL THREAT",
 Icon: Skull,
 accentColor:"rgba(214, 69, 69, 0.5)",
 },
 high: {
 classes:"bg-blood-950/60 text-blood-500 border-blood-700",
 label:"HIGH THREAT",
 Icon: AlertTriangle,
 accentColor:"rgba(168, 40, 40, 0.4)",
 },
 medium: {
 classes:"bg-zinc-900/60 text-zinc-300 border-zinc-700",
 label:"DOCUMENTED",
 Icon: FileText,
 accentColor:"rgba(113, 113, 122, 0.3)",
 },
 low: {
 classes:"bg-zinc-900/40 text-zinc-500 border-zinc-800",
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
 className={`group block glass-card overflow-hidden ${featured ?"lg:col-span-2 lg:row-span-2":""}`}
 >
 {/* Header band with severity accent */}
 <div className={`relative ${featured ?"h-44 lg:h-56":"h-28"} bg-gradient-to-br from-zinc-950 to-black overflow-hidden`}>
 {/* Data grid pattern */}
 <div
 className="absolute inset-0 opacity-[0.06]"
 style={{
 backgroundImage: `linear-gradient(rgba(214, 69, 69, 0.5) 1px, transparent 1px),
 linear-gradient(90deg, rgba(214, 69, 69, 0.5) 1px, transparent 1px)`,
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
 <div className="absolute top-3 left-3 z-20">
 <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-black tracking-wider border ${severity.classes}`}>
 <SeverityIcon className="w-3 h-3"/>
 {severity.label}
 </span>
 </div>

 {/* Category */}
 <div className="absolute top-3 right-3 z-20">
 <span className="px-2.5 py-1 bg-black/80 text-zinc-500 text-[10px] font-bold uppercase tracking-wider border border-zinc-800/60">
 {investigation.category}
 </span>
 </div>

 {/* Entity Count */}
 <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-zinc-600">
 <Users className="w-3.5 h-3.5"/>
 <span className="text-[10px] font-bold uppercase tracking-wider">{investigation.entityCount} entities</span>
 </div>
 </div>

 {/* Content block */}
 <div className="p-4 lg:p-5">
 <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-widest mb-2.5 font-bold">
 <Calendar className="w-3 h-3"/>
 <span>{investigation.date}</span>
 </div>

 <h3 className={`font-black text-white mb-2 group-hover:text-blood-500 transition-colors leading-tight ${featured ?"text-xl lg:text-2xl":"text-sm"}`}>
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
 className="px-2 py-0.5 bg-zinc-950 border border-zinc-800/50 text-zinc-600 text-[10px] font-medium uppercase tracking-wide hover:border-blood-500/50 hover:text-blood-500 transition-colors"
 >
 {tag}
 </Link>
 ))}
 </div>

 {/* CTA with animated arrow */}
 <div className="flex items-center justify-between pt-3 border-t border-zinc-900/60">
 <span className="text-blood-600 text-[10px] font-black uppercase tracking-[0.15em] group-hover:text-blood-500 transition-colors">
 Access File
 </span>
 <ArrowRight className="w-3.5 h-3.5 text-blood-700 transition-all group-hover:translate-x-1 group-hover:text-blood-500"/>
 </div>
 </div>
 </Link>
 );
}
