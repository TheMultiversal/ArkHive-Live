'use client';

interface SpinnerProps {
 size?: 'sm' | 'md' | 'lg';
 className?: string;
}

const sizes = {
 sm: 'w-4 h-4 border-2',
 md: 'w-6 h-6 border-2',
 lg: 'w-8 h-8 border-3',
};

/**
 * Loading spinner component
 */
export default function Spinner({ size = 'md', className = '' }: SpinnerProps) {
 return (
 <div
 className={`${sizes[size]} border-[rgba(255, 60, 60,0.18)] border-t-blood-600 animate-spin ${className}`}
 role="status"
 aria-label="Loading"
 >
 <span className="sr-only">Loading...</span>
 </div>
 );
}
