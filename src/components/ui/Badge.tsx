'use client';

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
 children: React.ReactNode;
 variant?: BadgeVariant;
 size?: BadgeSize;
 icon?: React.ReactNode;
 removable?: boolean;
 onRemove?: () => void;
 className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
 default: 'bg-[#000c20] text-zinc-300 border-[rgba(60,160,255,0.18)]',
 primary: 'bg-blood-900 text-blood-400 border-blood-700',
 success: 'bg-blood-900 text-blood-400 border-blood-700',
 warning: 'bg-[#000c20] text-zinc-300 border-zinc-600/50',
 danger: 'bg-blood-900 text-blood-400 border-blood-700',
 info: 'bg-blood-900 text-blood-400 border-blood-700',
 outline: 'bg-transparent text-zinc-400 border-zinc-600',
};

const sizeClasses: Record<BadgeSize, string> = {
 sm: 'px-2 py-0.5 text-xs',
 md: 'px-2.5 py-1 text-xs',
 lg: 'px-3 py-1.5 text-sm',
};

export default function Badge({
 children,
 variant = 'default',
 size = 'md',
 icon,
 removable,
 onRemove,
 className,
}: BadgeProps) {
 return (
 <span
 className={cn(
 'inline-flex items-center gap-1.5 font-medium border',
 variantClasses[variant],
 sizeClasses[size],
 className
 )}
 >
 {icon && <span className="flex-shrink-0">{icon}</span>}
 {children}
 {removable && (
 <button
 onClick={onRemove}
 className="flex-shrink-0 ml-1 hover:text-white transition-colors"
 aria-label="Remove"
 >
 <svg className="w-3 h-3"viewBox="0 0 12 12"fill="none">
 <path
 d="M9 3L3 9M3 3l6 6"
 stroke="currentColor"
 strokeWidth="1.5"
 strokeLinecap="round"
 />
 </svg>
 </button>
 )}
 </span>
 );
}

// Preset badges for common use cases
export function SeverityBadge({ severity }: { severity: 'critical' | 'high' | 'medium' | 'low' }) {
 const config = {
 critical: { variant: 'danger' as const, label: 'Critical' },
 high: { variant: 'warning' as const, label: 'High' },
 medium: { variant: 'info' as const, label: 'Medium' },
 low: { variant: 'success' as const, label: 'Low' },
 };
 const { variant, label } = config[severity];
 return <Badge variant={variant}>{label}</Badge>;
}

export function RiskBadge({ level }: { level: 'critical' | 'high' | 'medium' | 'low' }) {
 return <SeverityBadge severity={level} />;
}

export function StatusBadge({ status }: { status: 'active' | 'pending' | 'closed' | 'archived' }) {
 const config = {
 active: { variant: 'success' as const, label: 'Active' },
 pending: { variant: 'warning' as const, label: 'Pending' },
 closed: { variant: 'default' as const, label: 'Closed' },
 archived: { variant: 'outline' as const, label: 'Archived' },
 };
 const { variant, label } = config[status];
 return <Badge variant={variant}>{label}</Badge>;
}

export function CategoryBadge({ category }: { category: string }) {
 return <Badge variant="outline">{category}</Badge>;
}

export function VerificationBadge({ verified }: { verified: boolean }) {
 return verified ? (
 <Badge variant="success"icon={
 <svg className="w-3 h-3"viewBox="0 0 12 12"fill="none">
 <path d="M2 6l3 3 5-6"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/>
 </svg>
 }>
 Verified
 </Badge>
 ) : (
 <Badge variant="warning">Unverified</Badge>
 );
}
