'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface GhostButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

// Lightweight ghost button - no Framer Motion, pure CSS transitions
export default function GhostButton({ 
  children, 
  onClick, 
  href,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
}: GhostButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      border-blood-700 text-blood-500
      hover:bg-blood-700 hover:text-white hover:border-blood-600
      active:bg-blood-800
    `,
    secondary: `
      border-gray-600 text-gray-400
      hover:bg-gray-600 hover:text-white hover:border-gray-500
      active:bg-gray-700
    `,
  };

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const buttonClasses = `
    inline-flex items-center justify-center
    ${sizeStyles[size]}
    bg-transparent border-2 ${variantStyles[variant]}
    font-bold uppercase tracking-wider
    transition-all duration-200 ease-out
    hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]
    active:scale-95
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
