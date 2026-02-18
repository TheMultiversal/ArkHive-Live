'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
}

const sizeClasses: Record<AvatarSize, { container: string; text: string; status: string }> = {
  xs: { container: 'w-6 h-6', text: 'text-[10px]', status: 'w-1.5 h-1.5' },
  sm: { container: 'w-8 h-8', text: 'text-xs', status: 'w-2 h-2' },
  md: { container: 'w-10 h-10', text: 'text-sm', status: 'w-2.5 h-2.5' },
  lg: { container: 'w-12 h-12', text: 'text-base', status: 'w-3 h-3' },
  xl: { container: 'w-16 h-16', text: 'text-lg', status: 'w-4 h-4' },
};

const statusColors: Record<AvatarStatus, string> = {
  online: 'bg-green-500',
  offline: 'bg-zinc-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = [
    'bg-blood-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-purple-700',
    'bg-orange-700',
    'bg-pink-700',
    'bg-teal-700',
    'bg-indigo-700',
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

export default function Avatar({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
}: AvatarProps) {
  const sizeConfig = sizeClasses[size];
  const initials = name ? getInitials(name) : '?';
  const bgColor = name ? getColorFromName(name) : 'bg-zinc-700';

  return (
    <div className={cn('relative inline-block', className)}>
      {src ? (
        <Image
          src={src}
          alt={alt || name || 'Avatar'}
          width={64}
          height={64}
          className={cn(
            'rounded-full object-cover border-2 border-zinc-800',
            sizeConfig.container
          )}
        />
      ) : (
        <div
          className={cn(
            'rounded-full flex items-center justify-center font-semibold text-white border-2 border-zinc-800',
            sizeConfig.container,
            sizeConfig.text,
            bgColor
          )}
          aria-label={name || 'User avatar'}
        >
          {initials}
        </div>
      )}

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-black',
            sizeConfig.status,
            statusColors[status]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}

// Avatar Group component
interface AvatarGroupProps {
  avatars: { src?: string; name?: string }[];
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  className,
}: AvatarGroupProps) {
  const displayed = avatars.slice(0, max);
  const remaining = avatars.length - max;

  const overlapClass = {
    xs: '-ml-1.5',
    sm: '-ml-2',
    md: '-ml-3',
    lg: '-ml-4',
    xl: '-ml-5',
  };

  return (
    <div className={cn('flex items-center', className)}>
      {displayed.map((avatar, index) => (
        <div
          key={index}
          className={cn(index > 0 && overlapClass[size])}
          style={{ zIndex: displayed.length - index }}
        >
          <Avatar {...avatar} size={size} />
        </div>
      ))}
      
      {remaining > 0 && (
        <div
          className={cn(
            overlapClass[size],
            sizeClasses[size].container,
            sizeClasses[size].text,
            'rounded-full flex items-center justify-center font-semibold bg-zinc-800 text-zinc-400 border-2 border-black'
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}

// Avatar with info
interface AvatarWithInfoProps extends AvatarProps {
  title: string;
  subtitle?: string;
}

export function AvatarWithInfo({
  title,
  subtitle,
  ...avatarProps
}: AvatarWithInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar {...avatarProps} />
      <div>
        <p className="font-medium text-white">{title}</p>
        {subtitle && (
          <p className="text-sm text-zinc-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
