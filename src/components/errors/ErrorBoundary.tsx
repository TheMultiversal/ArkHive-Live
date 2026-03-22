// @ts-nocheck
'use client';

/**
 * Error Boundary System
 * Comprehensive error handling with recovery options
 */

import React, { Component, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Copy, ChevronDown, ChevronUp, XCircle } from 'lucide-react';

// ============================================================================
// Types
// ============================================================================

export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface AppError {
  id: string;
  message: string;
  stack?: string;
  componentStack?: string;
  severity: ErrorSeverity;
  timestamp: number;
  context?: Record<string, unknown>;
  recoverable: boolean;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode | ((error: Error, reset: () => void) => React.ReactNode);
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: unknown[];
  level?: 'page' | 'section' | 'component';
}

// ============================================================================
// Error Context
// ============================================================================

interface ErrorContextValue {
  errors: AppError[];
  addError: (error: Omit<AppError, 'id' | 'timestamp'>) => string;
  removeError: (id: string) => void;
  clearErrors: () => void;
  reportError: (error: Error, context?: Record<string, unknown>) => void;
}

const ErrorContext = createContext<ErrorContextValue>({
  errors: [],
  addError: () => '',
  removeError: () => {},
  clearErrors: () => {},
  reportError: () => {},
});

export function useErrorContext(): ErrorContextValue {
  return useContext(ErrorContext);
}

// ============================================================================
// Error Provider
// ============================================================================

interface ErrorProviderProps {
  children: React.ReactNode;
  maxErrors?: number;
  onError?: (error: AppError) => void;
}

export function ErrorProvider({ children, maxErrors = 10, onError }: ErrorProviderProps): React.ReactElement {
  const [errors, setErrors] = useState<AppError[]>([]);

  const addError = useCallback((errorData: Omit<AppError, 'id' | 'timestamp'>): string => {
    const error: AppError = {
      ...errorData,
      id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    setErrors(prev => {
      const newErrors = [error, ...prev].slice(0, maxErrors);
      return newErrors;
    });

    onError?.(error);
    return error.id;
  }, [maxErrors, onError]);

  const removeError = useCallback((id: string) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const reportError = useCallback((error: Error, context?: Record<string, unknown>) => {
    addError({
      message: error.message,
      stack: error.stack,
      severity: 'error',
      context,
      recoverable: true,
    });
  }, [addError]);

  // Global error handler
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
      reportError(error, { type: 'unhandledRejection' });
    };

    const handleError = (event: ErrorEvent) => {
      reportError(new Error(event.message), {
        type: 'globalError',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, [reportError]);

  return (
    <ErrorContext.Provider value={{ errors, addError, removeError, clearErrors, reportError }}>
      {children}
    </ErrorContext.Provider>
  );
}

// ============================================================================
// Error Boundary Class Component
// ============================================================================

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    level: 'component',
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);

    // Log to console for development
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (this.state.hasError && prevProps.resetKeys !== this.props.resetKeys) {
      this.resetErrorBoundary();
    }
  }

  resetErrorBoundary = (): void => {
    this.props.onReset?.();
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): React.ReactNode {
    if (this.state.hasError && this.state.error) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.state.error, this.resetErrorBoundary);
      }

      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback based on level
      switch (this.props.level) {
        case 'page':
          return (
            <PageErrorFallback
              error={this.state.error}
              componentStack={this.state.errorInfo?.componentStack}
              onReset={this.resetErrorBoundary}
            />
          );
        case 'section':
          return (
            <SectionErrorFallback
              error={this.state.error}
              onReset={this.resetErrorBoundary}
            />
          );
        default:
          return (
            <ComponentErrorFallback
              error={this.state.error}
              onReset={this.resetErrorBoundary}
            />
          );
      }
    }

    return this.props.children;
  }
}

// ============================================================================
// Fallback Components
// ============================================================================

interface ErrorFallbackProps {
  error: Error;
  componentStack?: string;
  onReset?: () => void;
}

export function PageErrorFallback({ error, componentStack, onReset }: ErrorFallbackProps): React.ReactElement {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyErrorDetails = () => {
    const details = `${error.message}\n\n${error.stack || ''}\n\nComponent Stack:\n${componentStack || ''}`;
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-2xl w-full glass-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-zinc-800/50 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-zinc-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-400">Something went wrong</h1>
            <p className="text-sm text-zinc-500">An unexpected error has occurred</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 mb-6">
          <p className="text-sm text-zinc-300 font-mono">{error.message}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {onReset && (
            <button
              onClick={onReset}
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white text-sm flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          )}
          <a
            href="/"
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </a>
          <button
            onClick={copyErrorDetails}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy Details'}
          </button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-400"
        >
          <Bug className="w-4 h-4" />
          Technical Details
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showDetails && (
          <div className="mt-4 space-y-4">
            {error.stack && (
              <div className="bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Stack Trace</p>
                <pre className="text-xs text-zinc-400 overflow-x-auto whitespace-pre-wrap font-mono">
                  {error.stack}
                </pre>
              </div>
            )}
            {componentStack && (
              <div className="bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Component Stack</p>
                <pre className="text-xs text-zinc-400 overflow-x-auto whitespace-pre-wrap font-mono">
                  {componentStack}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionErrorFallback({ error, onReset }: ErrorFallbackProps): React.ReactElement {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-zinc-400">Section Error</h3>
          <p className="text-xs text-zinc-400 mt-1">{error.message}</p>
          {onReset && (
            <button
              onClick={onReset}
              className="mt-3 px-3 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ComponentErrorFallback({ error, onReset }: ErrorFallbackProps): React.ReactElement {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-800/30 border border-zinc-700/50 text-xs">
      <AlertTriangle className="w-3 h-3 text-zinc-400" />
      <span className="text-zinc-300">Error loading component</span>
      {onReset && (
        <button
          onClick={onReset}
          className="text-zinc-400 hover:text-white"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Error Toast
// ============================================================================

interface ErrorToastProps {
  error: AppError;
  onDismiss: () => void;
}

export function ErrorToast({ error, onDismiss }: ErrorToastProps): React.ReactElement {
  const severityConfig = {
    info: { bg: 'bg-blood-900/80', border: 'border-blood-700', icon: 'text-blood-400' },
    warning: { bg: 'bg-yellow-900/80', border: 'border-yellow-700', icon: 'text-yellow-400' },
    error: { bg: 'bg-zinc-800/80', border: 'border-zinc-700', icon: 'text-zinc-400' },
    critical: { bg: 'bg-zinc-800', border: 'border-zinc-600', icon: 'text-zinc-300' },
  };

  const config = severityConfig[error.severity];

  useEffect(() => {
    if (error.severity !== 'critical') {
      const timer = setTimeout(onDismiss, 5000);
      return () => clearTimeout(timer);
    }
  }, [error.severity, onDismiss]);

  return (
    <div className={`${config.bg} ${config.border} border p-4 shadow-lg max-w-sm`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className={`w-5 h-5 ${config.icon} flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white">{error.message}</p>
          <p className="text-xs text-zinc-400 mt-1">
            {new Date(error.timestamp).toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="text-zinc-400 hover:text-white"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Error Toast Container
// ============================================================================

export function ErrorToastContainer(): React.ReactElement {
  const { errors, removeError } = useErrorContext();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {errors.slice(0, 3).map(error => (
        <ErrorToast
          key={error.id}
          error={error}
          onDismiss={() => removeError(error.id)}
        />
      ))}
    </div>
  );
}

// ============================================================================
// Error Display Components
// ============================================================================

interface ErrorListProps {
  errors: AppError[];
  onClear?: () => void;
  onDismiss?: (id: string) => void;
}

export function ErrorList({ errors, onClear, onDismiss }: ErrorListProps): React.ReactElement {
  if (errors.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-500">
        No errors recorded
      </div>
    );
  }

  return (
    <div>
      {onClear && errors.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={onClear}
            className="text-xs text-zinc-500 hover:text-zinc-400"
          >
            Clear All
          </button>
        </div>
      )}
      <div className="space-y-3">
        {errors.map(error => (
          <div key={error.id} className="bg-zinc-900 border border-zinc-800 p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                <SeverityBadge severity={error.severity} />
                <div>
                  <p className="text-sm text-zinc-300">{error.message}</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {new Date(error.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              {onDismiss && (
                <button
                  onClick={() => onDismiss(error.id)}
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SeverityBadgeProps {
  severity: ErrorSeverity;
}

export function SeverityBadge({ severity }: SeverityBadgeProps): React.ReactElement {
  const config = {
    info: 'bg-blood-900/50 text-blood-400',
    warning: 'bg-yellow-900/50 text-yellow-400',
    error: 'bg-zinc-800/50 text-zinc-400',
    critical: 'bg-zinc-800 text-zinc-300',
  };

  return (
    <span className={`px-2 py-0.5 text-xs uppercase tracking-wider ${config[severity]}`}>
      {severity}
    </span>
  );
}

// ============================================================================
// Async Error Boundary (for Suspense)
// ============================================================================

interface AsyncErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export function AsyncErrorBoundary({ children, fallback, onError }: AsyncErrorBoundaryProps): React.ReactElement {
  return (
    <ErrorBoundary
      fallback={fallback || (
        <div className="p-4 text-center text-zinc-500">
          Failed to load content
        </div>
      )}
      onError={(error) => onError?.(error)}
      level="component"
    >
      {children}
    </ErrorBoundary>
  );
}

// ============================================================================
// HOC: withErrorBoundary
// ============================================================================

export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options?: Omit<ErrorBoundaryProps, 'children'>
): React.FC<P> {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const WithErrorBoundary: React.FC<P> = (props) => (
    <ErrorBoundary {...options}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundary.displayName = `withErrorBoundary(${displayName})`;

  return WithErrorBoundary;
}

// ============================================================================
// Hooks
// ============================================================================

export function useErrorHandler(): (error: Error, context?: Record<string, unknown>) => void {
  const { reportError } = useErrorContext();
  return reportError;
}

export function useAsyncError(): (promise: Promise<unknown>) => Promise<unknown> {
  const { reportError } = useErrorContext();

  return useCallback(async (promise: Promise<unknown>) => {
    try {
      return await promise;
    } catch (error) {
      if (error instanceof Error) {
        reportError(error);
      }
      throw error;
    }
  }, [reportError]);
}

// ============================================================================
// Retry Utilities
// ============================================================================

interface RetryConfig {
  maxAttempts?: number;
  delayMs?: number;
  backoff?: 'linear' | 'exponential';
  onRetry?: (attempt: number, error: Error) => void;
}

export async function retryAsync<T>(
  fn: () => Promise<T>,
  config: RetryConfig = {}
): Promise<T> {
  const { maxAttempts = 3, delayMs = 1000, backoff = 'exponential', onRetry } = config;

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      if (attempt < maxAttempts) {
        onRetry?.(attempt, lastError);
        
        const delay = backoff === 'exponential'
          ? delayMs * Math.pow(2, attempt - 1)
          : delayMs * attempt;
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

// Default export
export default ErrorBoundary;
