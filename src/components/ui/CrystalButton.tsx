'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CrystalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

// Crystal clear glass button - sharp edges, transparent glass effect
export default function CrystalButton({ 
  children, 
  onClick, 
  href,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
}: CrystalButtonProps) {
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  const variantStyles = {
    primary: `
      bg-transparent border-2 border-blood-600
      text-blood-600
      hover:bg-blood-950/30 hover:text-blood-500 hover:border-blood-500
      hover:shadow-[0_0_30px_rgba(153,27,27,0.4),inset_0_0_20px_rgba(153,27,27,0.15)]
    `,
    secondary: `
      bg-transparent border-2 border-zinc-500
      text-zinc-400
      hover:bg-zinc-500/10 hover:text-zinc-300 hover:border-zinc-400
      hover:shadow-[0_0_30px_rgba(161,161,170,0.2),inset_0_0_20px_rgba(161,161,170,0.1)]
    `,
    danger: `
      bg-transparent border-2 border-blood-700
      text-blood-600
      hover:bg-blood-900/20 hover:text-blood-500 hover:border-blood-600
      hover:shadow-[0_0_30px_rgba(127,29,29,0.4),inset_0_0_20px_rgba(127,29,29,0.15)]
    `,
  };

  const buttonContent = (
    <>
      {/* Crystal edge highlights */}
      <span className="absolute inset-0 border border-white/5" />
      <span className="absolute top-0 left-0 w-4 h-[2px] bg-gradient-to-r from-current to-transparent opacity-40" />
      <span className="absolute top-0 left-0 h-4 w-[2px] bg-gradient-to-b from-current to-transparent opacity-40" />
      <span className="absolute top-0 right-0 w-4 h-[2px] bg-gradient-to-l from-current to-transparent opacity-40" />
      <span className="absolute top-0 right-0 h-4 w-[2px] bg-gradient-to-b from-current to-transparent opacity-40" />
      <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-gradient-to-r from-current to-transparent opacity-40" />
      <span className="absolute bottom-0 left-0 h-4 w-[2px] bg-gradient-to-t from-current to-transparent opacity-40" />
      <span className="absolute bottom-0 right-0 w-4 h-[2px] bg-gradient-to-l from-current to-transparent opacity-40" />
      <span className="absolute bottom-0 right-0 h-4 w-[2px] bg-gradient-to-t from-current to-transparent opacity-40" />
      
      {/* Icon */}
      {icon && <span className="mr-3 relative z-10">{icon}</span>}
      
      {/* Text */}
      <span className="relative z-10 font-bold uppercase tracking-[0.2em]">{children}</span>
    </>
  );

  const buttonClasses = `
    relative inline-flex items-center justify-center
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    transition-all duration-300 ease-out
    active:scale-[0.97]
    group
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
}
