'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  X,
  Copy,
  Check,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
  QrCode,
  Link as LinkIcon,
  Download,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

interface ShareOption {
  id: string;
  name: string;
  icon: typeof Share2;
  color: string;
  getUrl: (url: string, title: string, description?: string) => string;
}

// ============================================================
// Share Options
// ============================================================

const shareOptions: ShareOption[] = [
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: Twitter,
    color: 'hover:bg-blue-500/10 hover:text-blue-400',
    getUrl: (url, title) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    color: 'hover:bg-blue-600/10 hover:text-blue-500',
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'hover:bg-blue-700/10 hover:text-blue-600',
    getUrl: (url, title, description) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: MessageCircle,
    color: 'hover:bg-green-500/10 hover:text-green-400',
    getUrl: (url, title) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    color: 'hover:bg-zinc-500/10 hover:text-zinc-300',
    getUrl: (url, title, description) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description || ''}\n\n${url}`)}`,
  },
];

// ============================================================
// Component
// ============================================================

export default function ShareModal({
  isOpen,
  onClose,
  url,
  title,
  description,
  image,
  className,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (option: ShareOption) => {
    const shareUrl = option.getUrl(url, title, description);
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        // User cancelled or error
      }
    }
  };

  // Generate QR code URL using a free QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&bgcolor=18181b&color=ffffff`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-zinc-800 shadow-2xl z-50',
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-blood-500" />
                <h2 className="font-semibold text-white">Share</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Preview */}
              <div className="p-3 bg-zinc-800/50 border border-zinc-700">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={128}
                    className="w-full h-32 object-cover mb-3"
                    unoptimized
                  />
                )}
                <h3 className="font-medium text-white text-sm line-clamp-1">
                  {title}
                </h3>
                {description && (
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                    {description}
                  </p>
                )}
              </div>

              {/* Copy Link */}
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700">
                  <LinkIcon className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                  <span className="text-sm text-zinc-400 truncate">{url}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className={cn(
                    'px-4 py-2 flex items-center gap-2 transition-colors',
                    copied
                      ? 'bg-green-600 text-white'
                      : 'bg-blood-600 text-white hover:bg-blood-700'
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Native Share (if available) */}
              {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                <button
                  onClick={handleNativeShare}
                  className="w-full py-2 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share via device
                </button>
              )}

              {/* Social Options */}
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                  Share on social media
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {shareOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleShare(option)}
                      className={cn(
                        'flex flex-col items-center gap-1 p-3 bg-zinc-800 text-zinc-400 transition-colors',
                        option.color
                      )}
                      title={option.name}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="text-[10px]">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* QR Code */}
              <div>
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <QrCode className="w-4 h-4" />
                  {showQR ? 'Hide' : 'Show'} QR Code
                </button>

                <AnimatePresence>
                  {showQR && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 flex flex-col items-center"
                    >
                      <div className="p-2 bg-zinc-800">
                        <Image
                          src={qrCodeUrl}
                          alt="QR Code"
                          width={160}
                          height={160}
                          className="w-40 h-40"
                          unoptimized
                        />
                      </div>
                      <a
                        href={qrCodeUrl}
                        download="qr-code.png"
                        className="mt-2 flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        Download QR Code
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { ShareModal };
