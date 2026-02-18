'use client';

import { cn } from '@/lib/utils';
import { FileX, Search, AlertCircle, FolderOpen, Inbox, Plus } from 'lucide-react';
import Link from 'next/link';

type EmptyStateVariant = 'default' | 'search' | 'error' | 'folder' | 'inbox';

interface EmptyStateProps {
  variant?: EmptyStateVariant;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const defaultContent: Record<EmptyStateVariant, { icon: React.ReactNode; title: string; description: string }> = {
  default: {
    icon: <FileX className="w-12 h-12" />,
    title: 'No data available',
    description: 'There is no data to display at this time.',
  },
  search: {
    icon: <Search className="w-12 h-12" />,
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you\'re looking for.',
  },
  error: {
    icon: <AlertCircle className="w-12 h-12" />,
    title: 'Something went wrong',
    description: 'We encountered an error while loading this content. Please try again.',
  },
  folder: {
    icon: <FolderOpen className="w-12 h-12" />,
    title: 'This folder is empty',
    description: 'Add some files or folders to get started.',
  },
  inbox: {
    icon: <Inbox className="w-12 h-12" />,
    title: 'Your inbox is empty',
    description: 'You don\'t have any messages or notifications.',
  },
};

export default function EmptyState({
  variant = 'default',
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  const defaults = defaultContent[variant];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-16 px-6 text-center',
        className
      )}
    >
      <div className="text-zinc-600 mb-6">
        {icon || defaults.icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">
        {title || defaults.title}
      </h3>
      
      <p className="text-zinc-400 max-w-md mb-6">
        {description || defaults.description}
      </p>

      {action && (
        action.href ? (
          <Link
            href={action.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blood-700 hover:bg-blood-600 text-white font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            {action.label}
          </Link>
        ) : (
          <button
            onClick={action.onClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blood-700 hover:bg-blood-600 text-white font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            {action.label}
          </button>
        )
      )}
    </div>
  );
}
