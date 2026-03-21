"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbSegment {
  label: string;
  href: string;
}

// Map URL segments to human-readable labels
const segmentLabels: Record<string, string> = {
  "investigations": "Investigations",
  "entities": "Entities",
  "agencies": "Agencies",
  "corporations": "Corporations",
  "individuals": "Individuals",
  "organizations": "Organizations",
  "workspaces": "Workspaces",
  "timeline": "Timeline",
  "about": "About",
  "submit": "Submit Intel",
  "statutes": "Statutes",
  "money-trail": "Money Trail",
  "convictions": "Convictions",
  "evidence": "Evidence",
  "network": "Network",
  "themes": "Themes",
  "figures": "Figures",
  "geography": "Geography",
  "contributor": "Contribute",
  "create": "Create",
};

// Format slug to title case
function formatSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface BreadcrumbsProps {
  /** Custom override for the current page title */
  currentPageTitle?: string;
  /** Additional custom segments to prepend */
  customSegments?: BreadcrumbSegment[];
  /** Hide the home link */
  hideHome?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export default function Breadcrumbs({ 
  currentPageTitle, 
  customSegments,
  hideHome = false,
  className = ""
}: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") return null;
  
  const pathSegments = pathname.split("/").filter(Boolean);
  
  // Build breadcrumb trail
  const breadcrumbs: BreadcrumbSegment[] = [];
  
  // Add home
  if (!hideHome) {
    breadcrumbs.push({ label: "Home", href: "/" });
  }
  
  // Add custom segments if provided
  if (customSegments) {
    breadcrumbs.push(...customSegments);
  }
  
  // Build path segments
  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    // Use custom title for last segment if provided
    const label = isLast && currentPageTitle 
      ? currentPageTitle 
      : segmentLabels[segment] || formatSlugToTitle(segment);
    
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center gap-1 text-xs ${className}`}
    >
      <ol className="flex items-center gap-1 flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isHome = crumb.href === "/";
          
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-zinc-600 flex-shrink-0" />
              )}
              
              {isLast ? (
                <span className="text-zinc-400 font-medium truncate max-w-[200px]">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1"
                >
                  {isHome && <Home className="w-3 h-3" />}
                  {!isHome && <span className="truncate max-w-[150px]">{crumb.label}</span>}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
