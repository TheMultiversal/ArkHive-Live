/**
 * Dialog Component
 * Modal dialog overlay
 */

'use client';

import {
  createContext,
  useContext,
  useState,
  forwardRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Portal from './Portal';

// Context
interface DialogContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog provider');
  }
  return context;
}

// Root Component
interface DialogProps {
  /** Controlled open state */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpen = () => {
    if (!isControlled) {
      setUncontrolledOpen(true);
    }
    onOpenChange?.(true);
  };

  const handleClose = () => {
    if (!isControlled) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
  };

  return (
    <DialogContext.Provider value={{ isOpen, open: handleOpen, close: handleClose }}>
      {children}
    </DialogContext.Provider>
  );
}

// Trigger Component
interface DialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const { open } = useDialog();

    return (
      <button
        ref={ref}
        type="button"
        onClick={open}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DialogTrigger.displayName = 'DialogTrigger';

// Content Component
interface DialogContentProps {
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showClose?: boolean;
  /** Close on overlay click */
  closeOnOverlay?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[90vw] max-h-[90vh]',
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      children,
      size = 'md',
      showClose = true,
      closeOnOverlay = true,
      closeOnEscape = true,
      className,
    },
    ref
  ) => {
    const { isOpen, close } = useDialog();

    // Handle escape key
    useEffect(() => {
      if (!closeOnEscape) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          close();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, close, closeOnEscape]);

    // Lock body scroll when open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    return (
      <AnimatePresence>
        {isOpen && (
          <Portal>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80"
              onClick={closeOnOverlay ? close : undefined}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'relative w-full bg-zinc-900 border border-zinc-700 shadow-xl',
                  'focus:outline-none',
                  sizeStyles[size],
                  className
                )}
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                {showClose && (
                  <button
                    type="button"
                    onClick={close}
                    className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                {children}
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    );
  }
);

DialogContent.displayName = 'DialogContent';

// Header Component
export const DialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pb-0', className)}
      {...props}
    >
      {children}
    </div>
  )
);

DialogHeader.displayName = 'DialogHeader';

// Title Component
export const DialogTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold text-white', className)}
      {...props}
    >
      {children}
    </h2>
  )
);

DialogTitle.displayName = 'DialogTitle';

// Description Component
export const DialogDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-zinc-400 mt-2', className)}
      {...props}
    >
      {children}
    </p>
  )
);

DialogDescription.displayName = 'DialogDescription';

// Body Component
export const DialogBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6', className)}
      {...props}
    >
      {children}
    </div>
  )
);

DialogBody.displayName = 'DialogBody';

// Footer Component
export const DialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-end gap-2 p-6 pt-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

DialogFooter.displayName = 'DialogFooter';

// Close Component
export const DialogClose = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    const { close } = useDialog();

    return (
      <button
        ref={ref}
        type="button"
        onClick={close}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DialogClose.displayName = 'DialogClose';

export default Dialog;
