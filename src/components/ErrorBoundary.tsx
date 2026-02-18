'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });

    // In production, you would send this to an error tracking service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-lg w-full">
            <div className="bg-zinc-900 border border-zinc-800 p-8 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blood-500/20 mb-6">
                <AlertTriangle className="w-8 h-8 text-blood-500" />
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-white mb-2">
                Something Went Wrong
              </h1>

              {/* Description */}
              <p className="text-zinc-400 mb-6">
                An unexpected error occurred. This has been logged and we&apos;ll 
                look into it.
              </p>

              {/* Error details (dev only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 text-left">
                  <details className="bg-zinc-800/50 border border-zinc-700 p-4">
                    <summary className="text-blood-400 cursor-pointer flex items-center gap-2">
                      <Bug className="w-4 h-4" />
                      Error Details
                    </summary>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-zinc-300 font-mono break-all">
                        {this.state.error.message}
                      </p>
                      {this.state.errorInfo && (
                        <pre className="text-xs text-zinc-500 overflow-auto max-h-40 mt-2">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      )}
                    </div>
                  </details>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center justify-center gap-2 bg-blood-600 hover:bg-blood-700 text-white font-semibold px-6 py-3 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-3 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Link>
              </div>
            </div>

            {/* Help text */}
            <p className="text-center text-zinc-500 text-sm mt-4">
              If this problem persists, please{' '}
              <Link href="/contact" className="text-blood-400 hover:underline">
                contact support
              </Link>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional wrapper for convenience
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

// Simple error display component
interface ErrorDisplayProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorDisplay({
  title = 'Error',
  message = 'Something went wrong',
  onRetry,
  className = '',
}: ErrorDisplayProps) {
  return (
    <div className={`bg-red-900/20 border border-red-800/50 p-6 text-center ${className}`}>
      <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-red-400 mb-1">{title}</h3>
      <p className="text-red-300/70 text-sm mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
}

// Inline error for forms
interface InlineErrorProps {
  message: string;
  className?: string;
}

export function InlineError({ message, className = '' }: InlineErrorProps) {
  return (
    <p className={`text-red-400 text-sm mt-1 flex items-center gap-1 ${className}`}>
      <AlertTriangle className="w-3.5 h-3.5" />
      {message}
    </p>
  );
}

export default ErrorBoundary;
