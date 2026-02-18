'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

type VoteType = 'up' | 'down' | null;

interface VoteButtonsProps {
  upvotes: number;
  downvotes: number;
  userVote?: VoteType;
  onVote: (vote: VoteType) => void | Promise<void>;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  showCount?: boolean;
  showNet?: boolean;
  disabled?: boolean;
  className?: string;
}

// ============================================================
// Component
// ============================================================

export default function VoteButtons({
  upvotes,
  downvotes,
  userVote,
  onVote,
  size = 'md',
  layout = 'horizontal',
  showCount = true,
  showNet = false,
  disabled = false,
  className,
}: VoteButtonsProps) {
  const [animating, setAnimating] = useState<VoteType>(null);
  const netVotes = upvotes - downvotes;

  const sizeClasses = {
    sm: 'p-1',
    md: 'p-1.5',
    lg: 'p-2',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const handleVote = async (vote: VoteType) => {
    if (disabled) return;
    
    const newVote = userVote === vote ? null : vote;
    setAnimating(vote);
    
    try {
      await onVote(newVote);
    } finally {
      setTimeout(() => setAnimating(null), 300);
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-1',
        layout === 'vertical' && 'flex-col',
        className
      )}
    >
      {/* Upvote */}
      <button
        onClick={() => handleVote('up')}
        disabled={disabled}
        className={cn(
          'relative transition-all',
          sizeClasses[size],
          userVote === 'up'
            ? 'text-green-500 bg-green-500/10'
            : 'text-zinc-500 hover:text-green-500 hover:bg-green-500/5',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <motion.div
          animate={animating === 'up' ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <ThumbsUp className={iconSizes[size]} />
        </motion.div>
        
        {/* Particle effect */}
        {animating === 'up' && userVote !== 'up' && (
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full bg-green-500/30"
          />
        )}
      </button>

      {/* Count */}
      {showCount && (
        <div className={cn('min-w-[24px] text-center', textSizes[size])}>
          {showNet ? (
            <motion.span
              key={netVotes}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'font-medium',
                netVotes > 0 ? 'text-green-500' : netVotes < 0 ? 'text-red-500' : 'text-zinc-500'
              )}
            >
              {netVotes > 0 ? `+${netVotes}` : netVotes}
            </motion.span>
          ) : (
            <div className={cn(
              'flex items-center gap-1',
              layout === 'vertical' && 'flex-col'
            )}>
              <motion.span
                key={upvotes}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 font-medium"
              >
                {upvotes}
              </motion.span>
              <span className="text-zinc-600">/</span>
              <motion.span
                key={downvotes}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 font-medium"
              >
                {downvotes}
              </motion.span>
            </div>
          )}
        </div>
      )}

      {/* Downvote */}
      <button
        onClick={() => handleVote('down')}
        disabled={disabled}
        className={cn(
          'relative transition-all',
          sizeClasses[size],
          userVote === 'down'
            ? 'text-red-500 bg-red-500/10'
            : 'text-zinc-500 hover:text-red-500 hover:bg-red-500/5',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <motion.div
          animate={animating === 'down' ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <ThumbsDown className={iconSizes[size]} />
        </motion.div>
        
        {/* Particle effect */}
        {animating === 'down' && userVote !== 'down' && (
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full bg-red-500/30"
          />
        )}
      </button>
    </div>
  );
}

// ============================================================
// Simple Vote Button (single direction)
// ============================================================

interface SimpleVoteButtonProps {
  count: number;
  voted: boolean;
  onVote: () => void | Promise<void>;
  direction?: 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function SimpleVoteButton({
  count,
  voted,
  onVote,
  direction = 'up',
  size = 'md',
  disabled = false,
  className,
}: SimpleVoteButtonProps) {
  const [animating, setAnimating] = useState(false);
  const Icon = direction === 'up' ? ThumbsUp : ThumbsDown;
  const activeColor = direction === 'up' ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10';
  const hoverColor = direction === 'up' ? 'hover:text-green-500' : 'hover:text-red-500';

  const sizeClasses = {
    sm: 'px-2 py-1 gap-1 text-xs',
    md: 'px-3 py-1.5 gap-1.5 text-sm',
    lg: 'px-4 py-2 gap-2 text-base',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const handleClick = async () => {
    if (disabled) return;
    setAnimating(true);
    try {
      await onVote();
    } finally {
      setTimeout(() => setAnimating(false), 300);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center transition-all',
        sizeClasses[size],
        voted ? activeColor : cn('text-zinc-500 bg-zinc-800', hoverColor),
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <motion.div animate={animating ? { scale: [1, 1.2, 1] } : {}}>
        <Icon className={iconSizes[size]} />
      </motion.div>
      <motion.span
        key={count}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-medium"
      >
        {count}
      </motion.span>
    </button>
  );
}

export { VoteButtons };
