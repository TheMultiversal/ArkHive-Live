/**
 * Severity level definitions for investigations
 * Used across the application to indicate investigation priority/urgency
 */

export const SEVERITY_LEVELS = ['critical', 'high', 'medium', 'low'] as const;

export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];

/**
 * Color mappings for severity levels - used for UI styling
 */
export const SEVERITY_COLORS: Record<SeverityLevel, {
  text: string;
  bg: string;
  border: string;
  badge: string;
}> = {
  critical: {
    text: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/50',
    badge: 'bg-red-600 text-white',
  },
  high: {
    text: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/50',
    badge: 'bg-orange-600 text-white',
  },
  medium: {
    text: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/50',
    badge: 'bg-yellow-600 text-black',
  },
  low: {
    text: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/50',
    badge: 'bg-blue-600 text-white',
  },
};

/**
 * Labels for severity levels - used for display purposes
 */
export const SEVERITY_LABELS: Record<SeverityLevel, string> = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

/**
 * Descriptions for severity levels - used for tooltips and help text
 */
export const SEVERITY_DESCRIPTIONS: Record<SeverityLevel, string> = {
  critical: 'Immediate threat to public safety or ongoing harm',
  high: 'Significant impact requiring urgent attention',
  medium: 'Notable concern with moderate implications',
  low: 'Minor issue or early-stage investigation',
};
