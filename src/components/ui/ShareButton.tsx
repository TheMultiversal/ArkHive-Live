'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  className?: string;
}

/**
 * Share button using Web Share API with fallback
 */
export default function ShareButton({ 
  title, 
  text, 
  url, 
  className = '' 
}: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title,
      text: text || title,
      url: url || window.location.href,
    };

    // Check if Web Share API is available
    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error - fail silently
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      } catch {
        // Final fallback
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareData.url)}`,
          '_blank'
        );
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-2 px-3 py-2 border border-zinc-800 text-zinc-500 hover:border-blood-700 hover:text-blood-600 transition-colors ${className}`}
      aria-label="Share this page"
    >
      <Share2 className="w-4 h-4" />
      <span className="text-sm">Share</span>
    </button>
  );
}
