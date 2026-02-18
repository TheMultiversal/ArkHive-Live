import Link from "next/link";
import { Calendar, ArrowRight, Skull, Users } from "lucide-react";

export interface Investigation {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  severity: "critical" | "high" | "medium" | "low";
  date: string;
  entityCount: number;
  imageUrl?: string;
  tags: string[];
}

interface InvestigationCardProps {
  investigation: Investigation;
  featured?: boolean;
}

const severityColors = {
  critical: "bg-blood-900/50 text-blood-500 border-blood-700",
  high: "bg-blood-900/40 text-blood-500 border-blood-700",
  medium: "bg-blood-950/40 text-blood-600 border-blood-800",
  low: "bg-zinc-900/50 text-zinc-400 border-zinc-700",
};

const severityLabels = {
  critical: "⚠ CRITICAL",
  high: "HIGH THREAT",
  medium: "DOCUMENTED",
  low: "ARCHIVED",
};

export default function InvestigationCard({ investigation, featured = false }: InvestigationCardProps) {
  return (
    <Link
      href={`/investigations/${investigation.slug}`}
      className={`group block border border-blood-900/50 bg-black/60 overflow-hidden hover:border-blood-700/60 transition-all duration-300 ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      {/* Image Placeholder / Header */}
      <div className={`relative ${featured ? "h-48 lg:h-64" : "h-32"} bg-gradient-to-br from-zinc-900 to-black overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        
        {/* Decorative Grid Pattern - Sharp */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Severity Badge - Sharp */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border ${severityColors[investigation.severity]}`}>
            <Skull className="w-3 h-3" />
            {severityLabels[investigation.severity]}
          </span>
        </div>

        {/* Category - Sharp */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1.5 bg-black/80 text-zinc-400 text-xs font-medium border border-zinc-800">
            {investigation.category}
          </span>
        </div>

        {/* Entity Count */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 text-zinc-500">
          <Users className="w-4 h-4" />
          <span className="text-xs">{investigation.entityCount} entities linked</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{investigation.date}</span>
        </div>

        <h3 className={`font-bold text-white mb-2 group-hover:text-blood-500 transition-colors ${featured ? "text-xl lg:text-2xl" : "text-lg"}`}>
          {investigation.title}
        </h3>

        <p className={`text-zinc-500 mb-4 line-clamp-2 ${featured ? "text-base" : "text-sm"}`}>
          {investigation.summary}
        </p>

        {/* Tags - Sharp */}
        <div className="flex flex-wrap gap-2 mb-4">
          {investigation.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center text-blood-600 text-sm font-bold uppercase tracking-wider group-hover:gap-3 gap-2 transition-all">
          <span>Access File</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
