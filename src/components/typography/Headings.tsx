/**
 * Typography system for ArkHive platform
 * Enforces proper heading hierarchy (H1 > H2 > H3 > H4)
 * WCAG 2.1 AA compliant heading structure
 */

import React from "react";

// Base heading styles for each level
const headingStyles = {
  h1: "text-2xl sm:text-4xl lg:text-5xl font-black glass-text uppercase tracking-wider",
  h2: "text-xl sm:text-2xl lg:text-3xl font-black glass-text uppercase tracking-wide",
  h3: "text-lg sm:text-xl font-bold glass-text uppercase tracking-wide",
  h4: "text-base sm:text-lg font-bold glass-text uppercase tracking-wide",
  h5: "text-sm font-bold glass-text uppercase tracking-wide",
  h6: "text-xs font-bold glass-text uppercase tracking-wide",
};

// Page section patterns
export const pageSectionStyles = {
  hero: headingStyles.h1,
  sectionTitle: headingStyles.h2,
  cardTitle: headingStyles.h3,
  subsection: headingStyles.h4,
  label: headingStyles.h5,
  micro: headingStyles.h6,
};

// Type-safe heading levels
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  visualLevel?: HeadingLevel;
  children: React.ReactNode;
}

/**
 * Semantic heading component
 * Use `level` for actual semantic level (H1-H6)
 * Use `visualLevel` to override visual styling while keeping semantic structure
 */
export function Heading({ 
  level, 
  visualLevel, 
  children, 
  className = "",
  ...props 
}: HeadingProps) {
  const Tag = level;
  const styles = headingStyles[visualLevel || level];
  
  return (
    <Tag className={`${styles} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

// Pre-configured heading components for specific use cases
interface SectionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function PageTitle({ children, className = "", ...props }: SectionProps) {
  return (
    <h1 className={`${headingStyles.h1} mb-4 ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = "", ...props }: SectionProps) {
  return (
    <h2 className={`${headingStyles.h2} mb-3 ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function CardTitle({ children, className = "", ...props }: SectionProps) {
  return (
    <h3 className={`${headingStyles.h3} mb-2 ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function SubsectionTitle({ children, className = "", ...props }: SectionProps) {
  return (
    <h4 className={`${headingStyles.h4} mb-2 ${className}`} {...props}>
      {children}
    </h4>
  );
}

// Page-level heading structure validator (dev-only)
export function validateHeadingHierarchy(container: HTMLElement): string[] {
  const errors: string[] = [];
  const headings = container.querySelectorAll<HTMLHeadingElement>("h1, h2, h3, h4, h5, h6");
  let lastLevel = 0;
  
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    
    // First heading should be h1
    if (index === 0 && level !== 1) {
      errors.push(`Page should start with h1, found h${level}`);
    }
    
    // Check for skipped levels (e.g., h1 directly to h3)
    if (level > lastLevel + 1 && lastLevel !== 0) {
      errors.push(`Heading hierarchy skip: h${lastLevel} to h${level} (should not skip levels)`);
    }
    
    lastLevel = level;
  });
  
  return errors;
}

// React hook for heading hierarchy validation in development
export function useHeadingValidation(ref: React.RefObject<HTMLElement | null>): void {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development" && ref.current) {
      const errors = validateHeadingHierarchy(ref.current);
      if (errors.length > 0) {
        console.warn("[ArkHive A11y] Heading hierarchy issues:", errors);
      }
    }
  }, [ref]);
}
