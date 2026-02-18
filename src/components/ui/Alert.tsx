'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const variantConfig: Record<AlertVariant, {
  containerClass: string;
  iconClass: string;
  icon: ReactNode;
}> = {
  info: {
    containerClass: 'bg-blue-900/20 border-blue-700/50 text-blue-200',
    iconClass: 'text-blue-400',
    icon: <Info className="w-5 h-5" />,
  },
  success: {
    containerClass: 'bg-green-900/20 border-green-700/50 text-green-200',
    iconClass: 'text-green-400',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  warning: {
    containerClass: 'bg-yellow-900/20 border-yellow-700/50 text-yellow-200',
    iconClass: 'text-yellow-400',
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  error: {
    containerClass: 'bg-red-900/20 border-red-700/50 text-red-200',
    iconClass: 'text-red-400',
    icon: <AlertCircle className="w-5 h-5" />,
  },
};

export default function Alert({
  variant = 'info',
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
  action,
  className,
}: AlertProps) {
  const config = variantConfig[variant];

  return (
    <div
      role="alert"
      className={cn(
        'flex gap-4 p-4 border',
        config.containerClass,
        className
      )}
    >
      <div className={cn('flex-shrink-0 mt-0.5', config.iconClass)}>
        {icon || config.icon}
      </div>
      
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold mb-1">{title}</h4>
        )}
        <div className="text-sm opacity-90">{children}</div>
        
        {action && (
          <button
            onClick={action.onClick}
            className="mt-3 text-sm font-medium underline underline-offset-2 hover:no-underline"
          >
            {action.label}
          </button>
        )}
      </div>

      {dismissible && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// Animated dismissible alert
interface AnimatedAlertProps extends AlertProps {
  isVisible?: boolean;
}

export function AnimatedAlert({
  isVisible = true,
  ...props
}: AnimatedAlertProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Alert {...props} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Banner alert (full width, typically at top of page)
interface BannerAlertProps extends Omit<AlertProps, 'dismissible'> {
  dismissible?: boolean;
}

export function BannerAlert({
  variant = 'info',
  title,
  children,
  icon,
  dismissible = true,
  onDismiss,
  action,
  className,
}: BannerAlertProps) {
  const config = variantConfig[variant];

  return (
    <div
      role="alert"
      className={cn(
        'w-full px-4 py-3 border-b',
        config.containerClass,
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={config.iconClass}>
            {icon || config.icon}
          </span>
          <div className="flex items-center gap-2">
            {title && <span className="font-semibold">{title}</span>}
            <span className="text-sm opacity-90">{children}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {action && (
            <button
              onClick={action.onClick}
              className="text-sm font-medium underline underline-offset-2 hover:no-underline"
            >
              {action.label}
            </button>
          )}
          {dismissible && (
            <button
              onClick={onDismiss}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Callout (for documentation/emphasis)
interface CalloutProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({
  variant = 'info',
  title,
  children,
  className,
}: CalloutProps) {
  const config = variantConfig[variant];
  
  return (
    <div
      className={cn(
        'relative pl-4 py-3 pr-4 border-l-4',
        variant === 'info' && 'border-l-blue-500 bg-blue-900/10',
        variant === 'success' && 'border-l-green-500 bg-green-900/10',
        variant === 'warning' && 'border-l-yellow-500 bg-yellow-900/10',
        variant === 'error' && 'border-l-red-500 bg-red-900/10',
        className
      )}
    >
      {title && (
        <h4 className={cn('font-semibold mb-1', config.iconClass)}>
          {title}
        </h4>
      )}
      <div className="text-sm text-zinc-300">{children}</div>
    </div>
  );
}
