"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, FileSearch, Scale, AlertTriangle, Users, Building2, Globe, Shield, Zap } from "lucide-react";
import investigationDatabase from "@/data/investigations";

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  "Election Interference": <Scale className="w-4 h-4" />,
  "Election Crimes": <Scale className="w-4 h-4" />,
  "Election Corruption": <Scale className="w-4 h-4" />,
  "Obstruction of Justice": <Shield className="w-4 h-4" />,
  "Financial Crime": <Building2 className="w-4 h-4" />,
  "Financial Markets": <Building2 className="w-4 h-4" />,
  "Economic Crimes": <Building2 className="w-4 h-4" />,
  "Government Corruption": <Users className="w-4 h-4" />,
  "Government Accountability": <Users className="w-4 h-4" />,
  "Human Rights Violations": <AlertTriangle className="w-4 h-4" />,
  "Human Rights": <AlertTriangle className="w-4 h-4" />,
  "Civil Rights": <AlertTriangle className="w-4 h-4" />,
  "War Crimes": <Globe className="w-4 h-4" />,
  "International Law": <Globe className="w-4 h-4" />,
  "Foreign Influence": <Globe className="w-4 h-4" />,
  "Foreign Policy": <Globe className="w-4 h-4" />,
  "Intelligence": <Shield className="w-4 h-4" />,
  "Covert Operations": <Shield className="w-4 h-4" />,
  "Sexual Assault": <AlertTriangle className="w-4 h-4" />,
  "Abuse & Exploitation": <AlertTriangle className="w-4 h-4" />,
  "default": <FileSearch className="w-4 h-4" />,
};

// Group investigations by category
function getInvestigationsByCategory() {
  const categories: Record<string, Array<{ slug: string; title: string; severity: string }>> = {};
  
  for (const [slug, data] of Object.entries(investigationDatabase)) {
    const category = data.category || "Uncategorized";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({
      slug,
      title: data.title,
      severity: data.severity,
    });
  }
  
  // Sort categories alphabetically and limit items per category
  const sortedCategories = Object.entries(categories)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, items]) => ({
      name,
      items: items.slice(0, 4), // Show max 4 per category
      totalCount: items.length,
    }));
  
  return sortedCategories;
}

// Get severity color
function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical": return "text-red-500";
    case "high": return "text-orange-500";
    case "medium": return "text-yellow-500";
    case "low": return "text-zinc-400";
    default: return "text-zinc-400";
  }
}

export default function InvestigationsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const categories = getInvestigationsByCategory();
  
  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };
  
  return (
    <div 
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="investigations-mega-menu"
        aria-label="Investigations menu"
        className={`relative flex items-center gap-1 px-2 xl:px-3 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-transparent ${
          isOpen
            ? "text-zinc-400 bg-zinc-800 border-zinc-800"
            : "text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-800"
        }`}
      >
        Investigations
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      
      {/* Mega Menu Panel */}
      {isOpen && (
        <div 
          id="investigations-mega-menu"
          role="menu"
          aria-label="Investigation categories"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] max-h-[600px] overflow-y-auto bg-gradient-to-b from-[#0a0a0a] to-[#050202] border border-zinc-800/50 shadow-[0_8px_40px_rgba(100,100,100,0.25)] z-50"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-zinc-900 to-[#0a0a0a] border-b border-zinc-800/30 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-zinc-300" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Investigation Categories</span>
            </div>
            <Link 
              href="/investigations"
              className="text-xs text-zinc-400 hover:text-white font-semibold uppercase tracking-wider"
            >
              View All →
            </Link>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-3 gap-0">
            {categories.slice(0, 15).map((category) => (
              <div 
                key={category.name}
                className="border-b border-r border-zinc-900/50 p-4 hover:bg-zinc-800/80/30 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-zinc-300">
                    {categoryIcons[category.name] || categoryIcons["default"]}
                  </span>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider truncate">
                    {category.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500 ml-auto">
                    ({category.totalCount})
                  </span>
                </div>
                
                {/* Investigation Links */}
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/investigations/${item.slug}`}
                        className="group flex items-start gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={`mt-0.5 ${getSeverityColor(item.severity)}`}>•</span>
                        <span className="line-clamp-1 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* More link if truncated */}
                {category.totalCount > 4 && (
                  <Link
                    href={`/investigations?category=${encodeURIComponent(category.name)}`}
                    className="mt-2 inline-block text-[10px] text-zinc-300 hover:text-white font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    +{category.totalCount - 4} more
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Footer - Show more categories link */}
          {categories.length > 15 && (
            <div className="border-t border-zinc-800/30 px-6 py-3 bg-gradient-to-r from-[#0a0a0a] to-zinc-900">
              <Link 
                href="/investigations"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="w-3 h-3" />
                <span>+{categories.length - 15} more categories available</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
