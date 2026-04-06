'use client';

import { ReactNode } from 'react';

export interface GlitchTextProps {
 children?: ReactNode;
 text?: string;
 className?: string;
 triggerWords?: string[];
 intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({
 children,
 text,
 className = '',
}: GlitchTextProps) {
 const content = text || children;

 return (
   <span className={`relative inline-block ${className}`}>
     {content}
   </span>
 );
}

// Wrapper component - renders text cleanly without glitch effects
export function GlitchParagraph({
 children,
 className = '',
}: {
 children: string;
 className?: string;
 triggerWords?: string[];
}) {
 return <span className={className}>{children}</span>;
}

// Named export for compatibility
export { GlitchText };
