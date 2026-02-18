'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Circle, CheckCircle, AlertCircle, Clock, FileText, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: 'completed' | 'current' | 'upcoming' | 'warning';
  tags?: string[];
  metadata?: Record<string, string>;
}

interface TimelineProps {
  events: TimelineEvent[];
  variant?: 'default' | 'compact' | 'detailed';
  animated?: boolean;
  className?: string;
}

const statusConfig = {
  completed: {
    icon: <CheckCircle className="w-4 h-4" />,
    dotClass: 'bg-green-500 border-green-600',
    lineClass: 'bg-green-500/30',
    textClass: 'text-zinc-300',
  },
  current: {
    icon: <Circle className="w-4 h-4" />,
    dotClass: 'bg-blood-500 border-blood-600 animate-pulse',
    lineClass: 'bg-blood-500/30',
    textClass: 'text-white',
  },
  upcoming: {
    icon: <Clock className="w-4 h-4" />,
    dotClass: 'bg-zinc-600 border-zinc-500',
    lineClass: 'bg-zinc-700',
    textClass: 'text-zinc-500',
  },
  warning: {
    icon: <AlertCircle className="w-4 h-4" />,
    dotClass: 'bg-yellow-500 border-yellow-600',
    lineClass: 'bg-yellow-500/30',
    textClass: 'text-yellow-200',
  },
};

export default function Timeline({
  events,
  variant = 'default',
  animated = true,
  className,
}: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-zinc-700" />

      <div className="space-y-6">
        {events.map((event, index) => {
          const config = statusConfig[event.status || 'completed'];
          const isLast = index === events.length - 1;

          const content = (
            <div className="flex gap-4">
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={cn(
                    'w-6 h-6 flex items-center justify-center border-2',
                    config.dotClass
                  )}
                >
                  {event.icon || config.icon}
                </div>
                {/* Line to next */}
                {!isLast && (
                  <div
                    className={cn(
                      'absolute top-6 left-1/2 -translate-x-1/2 w-px h-6',
                      config.lineClass
                    )}
                  />
                )}
              </div>

              {/* Content */}
              <div className={cn('flex-1 pb-6', isLast && 'pb-0')}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <time className="text-xs text-zinc-500 font-mono">
                      {event.date}
                    </time>
                    <h4 className={cn('font-semibold mt-0.5', config.textClass)}>
                      {event.title}
                    </h4>
                  </div>
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex gap-1 flex-shrink-0">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {event.description && (
                  <p className="mt-2 text-sm text-zinc-400">
                    {event.description}
                  </p>
                )}

                {variant === 'detailed' && event.metadata && (
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(event.metadata).map(([key, value]) => (
                      <div key={key} className="text-xs">
                        <span className="text-zinc-500">{key}:</span>{' '}
                        <span className="text-zinc-300">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );

          return animated ? (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {content}
            </motion.div>
          ) : (
            <div key={event.id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}

// Horizontal Timeline (for shorter sequences)
interface HorizontalTimelineProps {
  events: Array<{
    id: string;
    label: string;
    date?: string;
    status?: 'completed' | 'current' | 'upcoming';
  }>;
  className?: string;
}

export function HorizontalTimeline({
  events,
  className,
}: HorizontalTimelineProps) {
  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <div className="flex items-center min-w-max py-4">
        {events.map((event, index) => {
          const config = statusConfig[event.status || 'completed'];
          const isLast = index === events.length - 1;

          return (
            <div key={event.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-8 h-8 flex items-center justify-center border-2',
                    config.dotClass
                  )}
                >
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <div className="mt-2 text-center">
                  <p className={cn('text-sm font-medium', config.textClass)}>
                    {event.label}
                  </p>
                  {event.date && (
                    <p className="text-xs text-zinc-500 mt-0.5">{event.date}</p>
                  )}
                </div>
              </div>
              {!isLast && (
                <div
                  className={cn(
                    'w-16 h-px mx-2',
                    event.status === 'completed'
                      ? 'bg-green-500/50'
                      : 'bg-zinc-700'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Investigation Timeline (specific to this app)
interface InvestigationTimelineEvent {
  id: string;
  date: string;
  type: 'document' | 'interview' | 'discovery' | 'leak' | 'publication';
  title: string;
  description?: string;
  source?: string;
  verified?: boolean;
}

interface InvestigationTimelineProps {
  events: InvestigationTimelineEvent[];
  className?: string;
}

const eventTypeConfig = {
  document: {
    icon: <FileText className="w-4 h-4" />,
    color: 'bg-blue-500 border-blue-600',
    label: 'Document',
  },
  interview: {
    icon: <Users className="w-4 h-4" />,
    color: 'bg-purple-500 border-purple-600',
    label: 'Interview',
  },
  discovery: {
    icon: <Circle className="w-4 h-4" />,
    color: 'bg-green-500 border-green-600',
    label: 'Discovery',
  },
  leak: {
    icon: <AlertCircle className="w-4 h-4" />,
    color: 'bg-blood-500 border-blood-600',
    label: 'Leak',
  },
  publication: {
    icon: <Shield className="w-4 h-4" />,
    color: 'bg-yellow-500 border-yellow-600',
    label: 'Publication',
  },
};

export function InvestigationTimeline({
  events,
  className,
}: InvestigationTimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blood-500/50 via-zinc-700 to-zinc-800" />

      <div className="space-y-8">
        {events.map((event, index) => {
          const config = eventTypeConfig[event.type];

          return (
            <motion.div
              key={event.id}
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={cn(
                    'w-8 h-8 flex items-center justify-center border-2 text-white',
                    config.color
                  )}
                >
                  {config.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400">
                        {config.label}
                      </span>
                      {event.verified && (
                        <span className="text-xs px-2 py-0.5 bg-green-900/50 text-green-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-white">{event.title}</h4>
                  </div>
                  <time className="text-xs text-zinc-500 font-mono flex-shrink-0">
                    {event.date}
                  </time>
                </div>

                {event.description && (
                  <p className="mt-2 text-sm text-zinc-400">
                    {event.description}
                  </p>
                )}

                {event.source && (
                  <p className="mt-2 text-xs text-zinc-500">
                    Source: <span className="text-zinc-400">{event.source}</span>
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
