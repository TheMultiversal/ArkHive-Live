'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

// ============================================================
// Types
// ============================================================

export interface ClipboardItem {
  type: string;
  value: string;
  timestamp: Date;
}

export interface UseClipboardOptions {
  timeout?: number;
  onCopy?: (text: string) => void;
  onPaste?: (text: string) => void;
  onError?: (error: Error) => void;
  historyLimit?: number;
}

export interface UseClipboardReturn {
  copied: boolean;
  copiedText: string | null;
  error: Error | null;
  supported: boolean;
  history: ClipboardItem[];
  copy: (text: string) => Promise<boolean>;
  copyFromElement: (element: HTMLElement) => Promise<boolean>;
  paste: () => Promise<string | null>;
  clear: () => void;
  clearHistory: () => void;
}

// ============================================================
// Hook Implementation
// ============================================================

export function useClipboard(options: UseClipboardOptions = {}): UseClipboardReturn {
  const {
    timeout = 2000,
    onCopy,
    onPaste,
    onError,
    historyLimit = 10,
  } = options;

  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [history, setHistory] = useState<ClipboardItem[]>([]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const supported = typeof navigator !== 'undefined' && !!navigator.clipboard;

  // Copy text to clipboard
  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!supported) {
        const err = new Error('Clipboard API not supported');
        setError(err);
        onError?.(err);
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setCopiedText(text);
        setError(null);

        // Add to history
        setHistory((prev) => {
          const newItem: ClipboardItem = {
            type: 'text',
            value: text,
            timestamp: new Date(),
          };
          return [newItem, ...prev].slice(0, historyLimit);
        });

        // Reset copied state after timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, timeout);

        onCopy?.(text);
        return true;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to copy');
        setError(error);
        setCopied(false);
        onError?.(error);
        return false;
      }
    },
    [supported, timeout, historyLimit, onCopy, onError]
  );

  // Copy from HTML element
  const copyFromElement = useCallback(
    async (element: HTMLElement): Promise<boolean> => {
      const text = element.textContent || element.innerText;
      return copy(text);
    },
    [copy]
  );

  // Paste from clipboard
  const paste = useCallback(async (): Promise<string | null> => {
    if (!supported) {
      const err = new Error('Clipboard API not supported');
      setError(err);
      onError?.(err);
      return null;
    }

    try {
      const text = await navigator.clipboard.readText();
      setError(null);
      onPaste?.(text);
      return text;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to paste');
      setError(error);
      onError?.(error);
      return null;
    }
  }, [supported, onPaste, onError]);

  // Clear copied state
  const clear = useCallback(() => {
    setCopied(false);
    setCopiedText(null);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Clear history
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    copied,
    copiedText,
    error,
    supported,
    history,
    copy,
    copyFromElement,
    paste,
    clear,
    clearHistory,
  };
}

// ============================================================
// Standalone copy function for simple use cases
// ============================================================

export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default useClipboard;
