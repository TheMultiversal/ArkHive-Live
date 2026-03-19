"use client";

/**
 * Skip Navigation Link
 * Accessibility feature for keyboard users to skip repetitive navigation
 * WCAG 2.1 AA requirement (2.4.1 Bypass Blocks)
 */

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export default function SkipNavigation({ 
  targetId = "main-content",
  label = "Skip to main content"
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="
        absolute left-4 -top-16 z-[100]
        px-6 py-3 
        bg-blood-900 border-2 border-blood-500 
        text-white font-bold text-sm uppercase tracking-wider
        focus:top-4 
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blood-400 focus:ring-offset-2 focus:ring-offset-black
      "
      style={{
        // Ensure visible on focus
        clip: "rect(0,0,0,0)",
      }}
      onFocus={(e) => {
        e.currentTarget.style.clip = "auto";
      }}
      onBlur={(e) => {
        e.currentTarget.style.clip = "rect(0,0,0,0)";
      }}
    >
      {label}
    </a>
  );
}

/**
 * Main content wrapper with proper landmark
 * Use with SkipNavigation for proper skip link functionality
 */
interface MainContentProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function MainContent({ 
  id = "main-content", 
  children, 
  className = "" 
}: MainContentProps) {
  return (
    <main 
      id={id} 
      role="main" 
      tabIndex={-1}
      className={`outline-none ${className}`}
    >
      {children}
    </main>
  );
}
