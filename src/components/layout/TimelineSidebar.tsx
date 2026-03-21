'use client';

import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, X, AlertTriangle, Gavel, Building2, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TimelineEvent {
  date: string;
  event: string;
  type?: 'critical' | 'legal' | 'political' | 'financial' | 'default';
}

interface TimelineSidebarProps {
  events: TimelineEvent[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  maxVisible?: number;
}

const eventTypeConfig = {
  critical: {
    icon: AlertTriangle,
    color: 'text-zinc-300',
    borderColor: 'border-zinc-700',
    bgColor: 'bg-zinc-900',
  },
  legal: {
    icon: Gavel,
    color: 'text-yellow-500',
    borderColor: 'border-yellow-600',
    bgColor: 'bg-yellow-950',
  },
  political: {
    icon: Building2,
    color: 'text-blue-500',
    borderColor: 'border-blue-600',
    bgColor: 'bg-blue-950',
  },
  financial: {
    icon: DollarSign,
    color: 'text-green-500',
    borderColor: 'border-green-600',
    bgColor: 'bg-green-950',
  },
  default: {
    icon: Clock,
    color: 'text-zinc-500',
    borderColor: 'border-zinc-700',
    bgColor: 'bg-zinc-900',
  },
};

export default function TimelineSidebar({ 
  events, 
  isOpen, 
  onClose, 
  title = 'Timeline',
  maxVisible = 8,
}: TimelineSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!events || events.length === 0) return null;

  const displayEvents = isExpanded ? events : events.slice(0, maxVisible);
  const hasMore = events.length > maxVisible;

  // Mobile drawer
  const mobileDrawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-full w-80 bg-[#0a0a0a] border-l border-[rgba(255,255,255,0.15)] z-50 overflow-y-auto lg:hidden"
          >
            <div className="p-4 border-b border-[rgba(255,255,255,0.15)] flex items-center justify-between sticky top-0 bg-[#0a0a0a]">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-zinc-300" />
                {title}
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-[rgba(255,80,80,0.1)] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <TimelineContent 
                events={displayEvents} 
                hasMore={hasMore}
                isExpanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
                totalCount={events.length}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Desktop sidebar
  const desktopSidebar = (
    <div className="hidden lg:block glass-card p-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3">
        <Clock className="w-4 h-4 text-zinc-300" />
        {title}
        <span className="ml-auto text-xs text-zinc-600">{events.length} events</span>
      </h3>
      <TimelineContent 
        events={displayEvents} 
        hasMore={hasMore}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        totalCount={events.length}
      />
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileDrawer}
    </>
  );
}

function TimelineContent({ 
  events, 
  hasMore, 
  isExpanded, 
  onToggle,
  totalCount,
}: { 
  events: TimelineEvent[];
  hasMore: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  totalCount: number;
}) {
  return (
    <div className="space-y-0">
      {events.map((event, index) => {
        const config = eventTypeConfig[event.type || 'default'];
        const Icon = config.icon;
        
        return (
          <div key={index} className="relative pl-6 pb-4 last:pb-0">
            {/* Connector line */}
            {index < events.length - 1 && (
              <div className="absolute left-[9px] top-5 w-[2px] h-full bg-zinc-800" />
            )}
            
            {/* Event dot */}
            <div className={`absolute left-0 top-1 w-5 h-5 flex items-center justify-center ${config.bgColor} border ${config.borderColor}`}>
              <Icon className={`w-3 h-3 ${config.color}`} />
            </div>
            
            {/* Event content */}
            <div className="min-w-0">
              <p className={`text-xs font-mono ${config.color} mb-0.5`}>{event.date}</p>
              <p className="text-sm text-zinc-300 leading-snug">{event.event}</p>
            </div>
          </div>
        );
      })}
      
      {/* Show more/less button */}
      {hasMore && (
        <button
          onClick={onToggle}
          className="w-full mt-4 pt-3 border-t border-zinc-800 flex items-center justify-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show {totalCount - events.length} More Events
            </>
          )}
        </button>
      )}
    </div>
  );
}
