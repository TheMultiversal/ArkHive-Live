/**
 * Dropdown Menu Component
 * Context menu / dropdown navigation
 */

'use client';

import {
  createContext,
  useContext,
  useState,
  useRef,
  forwardRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight, Check } from 'lucide-react';
import Portal from './Portal';

// Context
interface DropdownContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a DropdownMenu');
  }
  return context;
}

// Root Component
interface DropdownMenuProps {
  children?: ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, open, close, toggle, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

// Trigger Component
interface DropdownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { toggle, triggerRef } = useDropdown();

    return (
      <button
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          (triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        type="button"
        onClick={toggle}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

// Content Component
interface DropdownContentProps {
  /** Alignment relative to trigger */
  align?: 'start' | 'center' | 'end';
  /** Side to show content */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Distance from trigger */
  sideOffset?: number;
  className?: string;
  children?: ReactNode;
}

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (
    {
      children,
      align = 'start',
      side = 'bottom',
      sideOffset = 4,
      className,
    },
    ref
  ) => {
    const { isOpen, close, triggerRef } = useDropdown();
    const contentRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          close();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, close, triggerRef]);

    // Close on escape
    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          close();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, close]);

    const alignmentClasses = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    };

    const sideClasses = {
      top: `bottom-full mb-${sideOffset}`,
      right: `left-full ml-${sideOffset}`,
      bottom: `top-full mt-${sideOffset}`,
      left: `right-full mr-${sideOffset}`,
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={(node) => {
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
              (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute z-50 min-w-[8rem] py-1',
              'bg-zinc-900 border border-zinc-700 shadow-lg',
              alignmentClasses[align],
              sideClasses[side],
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

DropdownContent.displayName = 'DropdownContent';

// Item Component
interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to show before text */
  icon?: ReactNode;
  /** Shortcut key hint */
  shortcut?: string;
  /** Destructive action styling */
  destructive?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, icon, shortcut, destructive, disabled, className, onClick, ...props }, ref) => {
    const { close } = useDropdown();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onClick?.(e);
      close();
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          'flex items-center w-full px-3 py-2 text-sm text-left transition-colors',
          'focus:outline-none focus:bg-zinc-800',
          !disabled && 'hover:bg-zinc-800',
          destructive && 'text-red-400 hover:text-red-300',
          !destructive && 'text-zinc-300 hover:text-white',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
        {shortcut && (
          <span className="ml-auto text-xs text-zinc-500">{shortcut}</span>
        )}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

// Checkbox Item Component
interface DropdownCheckboxItemProps extends Omit<DropdownItemProps, 'icon'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const DropdownCheckboxItem = forwardRef<HTMLButtonElement, DropdownCheckboxItemProps>(
  ({ children, checked, onCheckedChange, className, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      onCheckedChange?.(!checked);
    };

    return (
      <DropdownItem
        ref={ref}
        icon={
          <span className="w-4 h-4 flex items-center justify-center">
            {checked && <Check className="w-3 h-3" />}
          </span>
        }
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </DropdownItem>
    );
  }
);

DropdownCheckboxItem.displayName = 'DropdownCheckboxItem';

// Separator Component
export const DropdownSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-px my-1 bg-zinc-700', className)}
      {...props}
    />
  )
);

DropdownSeparator.displayName = 'DropdownSeparator';

// Label Component
export const DropdownLabel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-3 py-1.5 text-xs font-medium text-zinc-500', className)}
      {...props}
    >
      {children}
    </div>
  )
);

DropdownLabel.displayName = 'DropdownLabel';

export default DropdownMenu;
