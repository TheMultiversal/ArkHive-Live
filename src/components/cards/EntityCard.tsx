import Link from"next/link";
import { Building2, Landmark, User, ArrowRight, Skull } from "lucide-react";

export interface Entity {
 id: string;
 slug: string;
 name: string;
 type:"agency"|"corporation"|"individual"|"organization";
 description: string;
 role: string;
 investigationCount: number;
 riskLevel:"extreme"|"high"|"moderate"|"low";
 imageUrl?: string;
}

interface EntityCardProps {
 entity: Entity;
}

const typeIcons = {
 agency: Landmark,
 corporation: Building2,
 individual: User,
 organization: Building2,
};

const riskColors = {
 extreme:"text-blood-500 bg-blood-900 border-blood-700",
 high:"text-blood-600 bg-blood-900 border-blood-700",
 moderate:"text-zinc-400 bg-[#1c0a00] border-zinc-600",
 low:"text-zinc-500 bg-zinc-900 border-[rgba(255, 60, 60,0.18)]",
};

const riskLabels = {
 extreme:"EXTREME THREAT",
 high:"HIGH THREAT",
 moderate:"DOCUMENTED",
 low:"ARCHIVED",
};

const typePluralPaths: Record<string, string> = {
 agency:"agencies",
 corporation:"corporations",
 individual:"individuals",
 organization:"organizations",
};

export default function EntityCard({ entity }: EntityCardProps) {
 const Icon = typeIcons[entity.type];
 const typePath = typePluralPaths[entity.type] || `${entity.type}s`;

 return (
 <Link
 href={`/entities/${typePath}/${entity.slug}`}
 aria-label={`${entity.name} - ${riskLabels[entity.riskLevel]} ${entity.type} with ${entity.investigationCount} linked investigations`}
 className="group block glass-card overflow-hidden"
 >
 <div className="p-4 lg:p-5">
 {/* Header */}
 <div className="flex items-start gap-3 mb-3">
 {/* Icon */}
 <div className="w-10 h-10 border border-blood-800/50 bg-blood-950 flex items-center justify-center flex-shrink-0 group-hover:border-blood-700 transition-colors">
 <Icon className="w-5 h-5 text-blood-600"/>
 </div>

 {/* Name & Type */}
 <div className="flex-1 min-w-0">
 <h3 className="text-sm font-black glass-text truncate group-hover:text-blood-500 transition-colors uppercase tracking-wide">
 {entity.name}
 </h3>
 <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">{entity.type}</p>
 </div>

 {/* Risk Level */}
 <div className={`px-2 py-0.5 text-[10px] font-black tracking-wider border whitespace-nowrap shrink-0 ${riskColors[entity.riskLevel]}`}>
 {riskLabels[entity.riskLevel]}
 </div>
 </div>

 {/* Role */}
 <p className="text-xs text-zinc-400 mb-2 font-medium">{entity.role}</p>

 {/* Description */}
 <p className="text-xs text-zinc-500 line-clamp-2 mb-3 leading-relaxed">{entity.description}</p>

 {/* Footer */}
 <div className="flex items-center justify-between pt-3 border-t border-zinc-900/60">
 <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] font-bold uppercase tracking-wider">
 <Skull className="w-3.5 h-3.5 text-blood-700"/>
 <span>{entity.investigationCount} investigations</span>
 </div>
 <div className="flex items-center gap-1 text-blood-700 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
 <span>Access</span>
 <ArrowRight className="w-3 h-3"/>
 </div>
 </div>
 </div>
 </Link>
 );
}
