import Link from "next/link";
import { Building2, Landmark, User, ArrowRight, Skull } from "lucide-react";

export interface Entity {
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
  extreme: "text-blood-500 bg-blood-900/50 border-blood-700",
  high: "text-blood-600 bg-blood-900/30 border-blood-700",
  moderate: "text-zinc-400 bg-zinc-900/50 border-zinc-600",
  low: "text-zinc-500 bg-zinc-900/30 border-zinc-700",
};

const riskLabels = {
  extreme: "EXTREME THREAT",
  high: "HIGH THREAT",
  moderate: "DOCUMENTED",
  low: "ARCHIVED",
};

const typePluralPaths: Record<string, string> = {
  agency: "agencies",
  corporation: "corporations",
  individual: "individuals",
  organization: "organizations",
};

export default function EntityCard({ entity }: EntityCardProps) {
  const Icon = typeIcons[entity.type];
  const typePath = typePluralPaths[entity.type] || `${entity.type}s`;

  return (
    <Link
      href={`/entities/${typePath}/${entity.slug}`}
      className="group block border border-zinc-800 bg-black/60 overflow-hidden hover:border-blood-700/50 transition-all duration-300"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon - Sharp */}
          <div className="w-12 h-12 border-2 border-blood-800/60 bg-blood-950/30 flex items-center justify-center flex-shrink-0 group-hover:border-blood-700 transition-colors">
            <Icon className="w-6 h-6 text-blood-600" />
          </div>

          {/* Name & Type */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate group-hover:text-blood-500 transition-colors uppercase tracking-wide">
              {entity.name}
            </h3>
            <p className="text-sm text-zinc-500 uppercase tracking-wider">{entity.type}</p>
          </div>

          {/* Risk Level - Sharp */}
          <div className={`px-2.5 py-1 text-xs font-bold border ${riskColors[entity.riskLevel]}`}>
            {riskLabels[entity.riskLevel]}
          </div>
        </div>

        {/* Role */}
        <p className="text-sm text-zinc-400 mb-3 font-medium">{entity.role}</p>

        {/* Description */}
        <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{entity.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Skull className="w-4 h-4 text-blood-600" />
            <span>{entity.investigationCount} investigations</span>
          </div>
          <div className="flex items-center gap-1 text-blood-600 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Access</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
