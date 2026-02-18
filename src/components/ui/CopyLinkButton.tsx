'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface CopyLinkButtonProps {
  url?: string; // If not provided, uses current URL
  className?: string;
}

/**
 * Button to copy page URL to clipboard
 */
export default function CopyLinkButton({ url, className = '' }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const linkToCopy = url || window.location.href;
    const success = await copyToClipboard(linkToCopy);
    
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-3 py-2 border border-zinc-800 text-zinc-500 hover:border-blood-700 hover:text-blood-600 transition-colors ${className}`}
      aria-label={copied ? 'Link copied' : 'Copy link'}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-500" />
          <span className="text-sm text-emerald-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-sm">Copy Link</span>
        </>
      )}
    </button>
  );
}
