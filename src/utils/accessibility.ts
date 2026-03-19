/**
 * Accessibility utilities for ArkHive platform
 * WCAG 2.1 AA compliant helpers
 */

// Screen reader only class
export const srOnly = "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0";

// Generate unique IDs for ARIA relationships
let idCounter = 0;
export function generateAriaId(prefix: string): string {
  return `${prefix}-${++idCounter}`;
}

// Common ARIA labels for reusable patterns
export const ariaLabels = {
  // Navigation
  mainNav: "Main navigation",
  breadcrumb: "Breadcrumb navigation",
  pagination: "Pagination navigation",
  skipToContent: "Skip to main content",
  
  // Actions
  closeModal: "Close dialog",
  expandSection: "Expand section",
  collapseSection: "Collapse section",
  search: "Search",
  filter: "Filter results",
  sort: "Sort results",
  
  // Status
  loading: "Loading content",
  error: "Error occurred",
  success: "Action successful",
  
  // Investigation specific
  severityCritical: "Critical severity investigation",
  severityHigh: "High severity investigation",
  severityMedium: "Medium severity investigation",
  severityLow: "Low severity investigation",
  
  // Entity specific
  riskCritical: "Critical risk level entity",
  riskHigh: "High risk level entity",
  riskMedium: "Medium risk level entity",
  riskLow: "Low risk level entity",
  
  // Interactive elements
  viewDetails: "View full details",
  openInNewTab: "Opens in new tab",
  externalLink: "External link",
  downloadFile: "Download file",
};

// Severity to ARIA describedby text
export function getSeverityDescription(severity: string): string {
  const descriptions: Record<string, string> = {
    critical: "This investigation is marked as critical priority requiring immediate attention",
    high: "This investigation is marked as high priority",
    medium: "This investigation is marked as medium priority",
    low: "This investigation is marked as low priority",
  };
  return descriptions[severity] || "Investigation severity not specified";
}

// Risk level to ARIA describedby text
export function getRiskDescription(riskLevel: string): string {
  const descriptions: Record<string, string> = {
    critical: "This entity has critical risk level indicating severe accountability concerns",
    high: "This entity has high risk level indicating significant accountability concerns",
    medium: "This entity has medium risk level indicating moderate accountability concerns",
    low: "This entity has low risk level indicating limited accountability concerns",
  };
  return descriptions[riskLevel] || "Risk level not specified";
}

// Live region announcement helper
export function announceToScreenReader(message: string, politeness: "polite" | "assertive" = "polite"): void {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", politeness);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = srOnly;
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Focus management helpers
export function focusFirstElement(container: HTMLElement): void {
  const focusable = container.querySelector<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  focusable?.focus();
}

export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  container.addEventListener("keydown", handleTabKey);
  return () => container.removeEventListener("keydown", handleTabKey);
}

// ARIA attributes for common patterns
export const ariaAttributes = {
  menuButton: (expanded: boolean, controlsId: string) => ({
    "aria-haspopup": "true" as const,
    "aria-expanded": expanded,
    "aria-controls": controlsId,
  }),
  
  tab: (selected: boolean, controlsId: string) => ({
    role: "tab" as const,
    "aria-selected": selected,
    "aria-controls": controlsId,
    tabIndex: selected ? 0 : -1,
  }),
  
  tabPanel: (labelledById: string, hidden: boolean) => ({
    role: "tabpanel" as const,
    "aria-labelledby": labelledById,
    hidden,
    tabIndex: 0,
  }),
  
  accordion: (expanded: boolean, controlsId: string) => ({
    "aria-expanded": expanded,
    "aria-controls": controlsId,
  }),
  
  modal: (labelledById: string, describedById?: string) => ({
    role: "dialog" as const,
    "aria-modal": true,
    "aria-labelledby": labelledById,
    ...(describedById && { "aria-describedby": describedById }),
  }),
  
  progressBar: (value: number, min = 0, max = 100) => ({
    role: "progressbar" as const,
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuetext": `${Math.round((value / max) * 100)}%`,
  }),
};
