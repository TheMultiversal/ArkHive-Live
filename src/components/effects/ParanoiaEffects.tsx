'use client';

import React from 'react';

interface ParanoiaWrapperProps {
 children: React.ReactNode;
 className?: string;
 intensity?: 'subtle' | 'medium' | 'intense';
}

// Stable wrapper - no visual disruption
export default function ParanoiaWrapper({ 
 children, 
 className = '',
}: ParanoiaWrapperProps) {
 return <div className={className}>{children}</div>;
}

// Disabled - no visual disruption
export function SurveillanceWarning() {
 return null;
}

// Disabled - no visual disruption
export function DataCorruption() {
 return null;
}

// Disabled - no visual disruption
export function TimestampOverlay() {
 return null;
}
