/**
 * Collapsible Component
 * Expandable/collapsible content with smooth animation
 */

'use client';

import {
  createContext,
  useContext,
  useState,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Context
interface CollapsibleContextValue {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('Collapsible components must be used within a Collapsible');
  }
  return context;
}

// Root Component
interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ open: controlledOpen, defaultOpen = false, onOpenChange, children, className, ...props }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const toggle = () => {
      const newValue = !isOpen;
      if (!isControlled) {
        setUncontrolledOpen(newValue);
      }
      onOpenChange?.(newValue);
    };

    const open = () => {
      if (!isControlled) {
        setUncontrolledOpen(true);
      }
      onOpenChange?.(true);
    };

    const close = () => {
      if (!isControlled) {
        setUncontrolledOpen(false);
      }
      onOpenChange?.(false);
    };

    return (
      <CollapsibleContext.Provider value={{ isOpen, toggle, open, close }}>
        <div ref={ref} className={cn('', className)} {...props}>
          {children}
        </div>
      </CollapsibleContext.Provider>
    );
  }
);

Collapsible.displayName = 'Collapsible';

// Trigger Component
interface CollapsibleTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Show chevron icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: ReactNode;
}

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ children, showIcon = true, icon, className, ...props }, ref) => {
    const { isOpen, toggle } = useCollapsible();

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className={cn(
          'flex items-center justify-between w-full text-left',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-500',
          className
        )}
        {...props}
      >
        {children}
        {showIcon && (
          <span
            className={cn(
              'ml-2 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          >
            {icon || <ChevronDown className="w-4 h-4" />}
          </span>
        )}
      </button>
    );
  }
);

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

// Content Component
interface CollapsibleContentProps {
  /** Force mount (render even when closed) */
  forceMount?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, forceMount = false, className }, ref) => {
    const { isOpen } = useCollapsible();

    return (
      <AnimatePresence initial={false}>
        {(isOpen || forceMount) && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={cn('overflow-hidden', className)}
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

CollapsibleContent.displayName = 'CollapsibleContent';

export default Collapsible;
