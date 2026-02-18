'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass' | 'interactive';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-zinc-900/50 border border-zinc-800',
  elevated: 'bg-zinc-900 border border-zinc-800 shadow-lg shadow-black/20',
  outlined: 'bg-transparent border-2 border-zinc-700',
  glass: 'glass-card',
  interactive: 'bg-zinc-900/50 border border-zinc-800 hover:border-blood-700/50 hover:bg-zinc-900/70 transition-all cursor-pointer',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  href,
  onClick,
  className,
}: CardProps) {
  const baseClasses = cn(
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, 'block')}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} className={baseClasses} role="button" tabIndex={0}>
        {children}
      </div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

// Card subcomponents
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function CardTitle({ children, as: Tag = 'h3', className }: CardTitleProps) {
  return (
    <Tag className={cn('text-lg font-bold text-white', className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-zinc-400 mt-1', className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-zinc-800 flex items-center gap-4', className)}>
      {children}
    </div>
  );
}

// Image card variant
interface ImageCardProps extends Omit<CardProps, 'children'> {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  tags?: string[];
  footer?: ReactNode;
}

export function ImageCard({
  image,
  imageAlt,
  title,
  description,
  tags,
  footer,
  ...cardProps
}: ImageCardProps) {
  return (
    <Card {...cardProps} padding="none" variant="interactive">
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-zinc-400 line-clamp-2">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {footer && (
          <div className="mt-4 pt-4 border-t border-zinc-800">
            {footer}
          </div>
        )}
      </div>
    </Card>
  );
}

// Horizontal card variant
interface HorizontalCardProps extends Omit<CardProps, 'children'> {
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  action?: ReactNode;
}

export function HorizontalCard({
  image,
  imageAlt,
  icon,
  title,
  subtitle,
  description,
  action,
  ...cardProps
}: HorizontalCardProps) {
  return (
    <Card {...cardProps} padding="md" variant="interactive">
      <div className="flex items-start gap-4">
        {(image || icon) && (
          <div className="flex-shrink-0">
            {image ? (
              <div className="relative w-16 h-16 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center bg-blood-900/30 text-blood-500">
                {icon}
              </div>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white">{title}</h3>
          {subtitle && (
            <p className="text-sm text-blood-500">{subtitle}</p>
          )}
          {description && (
            <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{description}</p>
          )}
        </div>
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    </Card>
  );
}
