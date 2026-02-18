import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Building2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Entities",
  description: "Database of government agencies, corporations, and individuals connected to documented investigations on ArkHive.",
  openGraph: {
    title: "Entity Database | ArkHive",
    description: "Database of government agencies, corporations, and individuals connected to documented investigations.",
  },
};

const entityCategories = [
  {
    type: "agencies",
    label: "GOVERNMENT AGENCIES",
    subtitle: "The Architects of Control",
    description: "Federal, state, and local agencies that implement policies of harm. Their crimes, their cover-ups, their connections.",
    icon: Landmark,
    count: 0,
  },
  {
    type: "corporations",
    label: "CORPORATIONS",
    subtitle: "Profit Over People",
    description: "Big Pharma, Big Tech, defense contractors. Companies that put shareholder value above human life.",
    icon: Building2,
    count: 0,
  },
  {
    type: "individuals",
    label: "KEY INDIVIDUALS",
    subtitle: "The Names Behind The Crimes",
    description: "Politicians, executives, bureaucrats. The faces behind the policies of death and destruction.",
    icon: Users,
    count: 0,
  },
];

export default function EntitiesPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Crystal Clear */}
        <div className="py-8 lg:py-12">
          <div className="border-2 border-blood-800/60 bg-black/60 p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <span className="text-xs text-zinc-600 uppercase tracking-[0.3em]">Entity Database</span>
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-2">
                THE PERPETRATORS
              </h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.2em]">
                Every Crime Has A Name Attached
              </p>
            </div>

            <p className="text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
              Browse all documented entities—the agencies that issue the orders, the corporations that profit, 
              and the individuals who sign off on your destruction.
            </p>
          </div>
        </div>

        {/* Category Cards - Sharp */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {entityCategories.map((category) => (
            <Link
              key={category.type}
              href={`/entities/${category.type}`}
              className="group block border-2 border-zinc-800 bg-black/60 p-8 hover:border-blood-700/50 transition-all duration-300"
            >
              <div className="w-16 h-16 border-2 border-blood-800/60 bg-blood-950/30 flex items-center justify-center mb-6 group-hover:border-blood-700 transition-colors">
                <category.icon className="w-8 h-8 text-blood-600" />
              </div>
              
              <h2 className="text-xl font-black text-white mb-1 group-hover:text-blood-500 transition-colors uppercase tracking-wider">
                {category.label}
              </h2>
              <p className="text-sm text-blood-600 font-bold uppercase tracking-wider mb-4">
                {category.subtitle}
              </p>
              
              <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-zinc-600 text-sm">
                  <span className="text-xl font-bold text-white">{category.count}</span> entries
                </span>
                <span className="flex items-center gap-2 text-blood-600 font-bold uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
                  Access <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section - Sharp */}
        <div className="border-2 border-zinc-800 bg-black/60 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
              How Entity Tracking Works
            </h3>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Every entity is connected to investigations. Every profile maps their crimes, 
              connections, and the web of corruption they operate within.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-zinc-800 bg-zinc-900/30">
              <div className="text-blood-600 font-black text-2xl mb-2">01</div>
              <div className="text-white font-bold mb-2 uppercase tracking-wider">Document</div>
              <p className="text-zinc-500 text-sm">Every role, position, and documented crime recorded.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-zinc-900/30">
              <div className="text-blood-600 font-black text-2xl mb-2">02</div>
              <div className="text-white font-bold mb-2 uppercase tracking-wider">Connect</div>
              <p className="text-zinc-500 text-sm">Map relationships between agencies, corporations, and individuals.</p>
            </div>
            <div className="p-5 border border-zinc-800 bg-zinc-900/30">
              <div className="text-blood-600 font-black text-2xl mb-2">03</div>
              <div className="text-white font-bold mb-2 uppercase tracking-wider">Track</div>
              <p className="text-zinc-500 text-sm">Follow patterns of harm across multiple investigations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
