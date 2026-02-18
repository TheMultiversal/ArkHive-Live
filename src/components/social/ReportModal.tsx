'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flag,
  X,
  AlertTriangle,
  Send,
  Upload,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

type ReportReason =
  | 'spam'
  | 'harassment'
  | 'hate_speech'
  | 'misinformation'
  | 'violence'
  | 'copyright'
  | 'privacy'
  | 'other';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (report: ReportSubmission) => Promise<void>;
  targetType: string;
  targetId: string;
  targetTitle?: string;
  className?: string;
}

interface ReportSubmission {
  reason: ReportReason;
  description: string;
  evidence?: File[];
  anonymous: boolean;
}

// ============================================================
// Report Reasons
// ============================================================

const reportReasons: { value: ReportReason; label: string; description: string }[] = [
  {
    value: 'spam',
    label: 'Spam',
    description: 'Unsolicited or repetitive content',
  },
  {
    value: 'harassment',
    label: 'Harassment',
    description: 'Targeted attacks or bullying',
  },
  {
    value: 'hate_speech',
    label: 'Hate Speech',
    description: 'Content promoting hatred against groups',
  },
  {
    value: 'misinformation',
    label: 'Misinformation',
    description: 'Deliberately false or misleading information',
  },
  {
    value: 'violence',
    label: 'Violence',
    description: 'Threats or promotion of violence',
  },
  {
    value: 'copyright',
    label: 'Copyright Violation',
    description: 'Unauthorized use of copyrighted material',
  },
  {
    value: 'privacy',
    label: 'Privacy Violation',
    description: 'Sharing private information without consent',
  },
  {
    value: 'other',
    label: 'Other',
    description: 'Something else not listed above',
  },
];

// ============================================================
// Component
// ============================================================

export default function ReportModal({
  isOpen,
  onClose,
  onSubmit,
  targetType,
  targetId,
  targetTitle,
  className,
}: ReportModalProps) {
  const [step, setStep] = useState<'reason' | 'details' | 'submitted'>('reason');
  const [selectedReason, setSelectedReason] = useState<ReportReason | null>(null);
  const [description, setDescription] = useState('');
  const [evidence, setEvidence] = useState<File[]>([]);
  const [anonymous, setAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEvidence(Array.from(e.target.files));
    }
  };

  const handleSubmit = async () => {
    if (!selectedReason || submitting) return;

    setSubmitting(true);
    try {
      await onSubmit({
        reason: selectedReason,
        description,
        evidence,
        anonymous,
      });
      setStep('submitted');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('reason');
    setSelectedReason(null);
    setDescription('');
    setEvidence([]);
    setAnonymous(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-zinc-900 border border-zinc-800 shadow-2xl z-50',
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 text-red-500">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">Report Content</h2>
                  {targetTitle && (
                    <p className="text-xs text-zinc-500 truncate max-w-[250px]">
                      {targetTitle}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {step === 'reason' && (
                <div className="space-y-2">
                  <p className="text-sm text-zinc-400 mb-4">
                    Why are you reporting this {targetType}?
                  </p>
                  {reportReasons.map((reason) => (
                    <button
                      key={reason.value}
                      onClick={() => {
                        setSelectedReason(reason.value);
                        setStep('details');
                      }}
                      className="w-full flex items-start gap-3 p-3 text-left bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                    >
                      <div className="w-5 h-5 mt-0.5 border border-zinc-600 group-hover:border-blood-500 flex items-center justify-center flex-shrink-0">
                        {selectedReason === reason.value && (
                          <div className="w-2.5 h-2.5 bg-blood-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {reason.label}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {reason.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {step === 'details' && (
                <div className="space-y-4">
                  <button
                    onClick={() => setStep('reason')}
                    className="text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    ← Change reason
                  </button>

                  <div className="p-3 bg-zinc-800/50 border border-zinc-700">
                    <p className="text-sm text-zinc-400">
                      Reporting for:{' '}
                      <span className="text-white font-medium">
                        {reportReasons.find((r) => r.value === selectedReason)?.label}
                      </span>
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Additional details (optional)
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide more context about why you're reporting this content..."
                      rows={4}
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 resize-none"
                    />
                  </div>

                  {/* Evidence Upload */}
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Evidence (optional)
                    </label>
                    <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-zinc-700 hover:border-zinc-600 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-zinc-500" />
                      <span className="text-sm text-zinc-500">
                        Upload screenshots or files
                      </span>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*,.pdf,.txt"
                      />
                    </label>
                    {evidence.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {evidence.map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-zinc-800 text-sm">
                            <span className="text-zinc-400 truncate">{file.name}</span>
                            <button
                              onClick={() => setEvidence(evidence.filter((_, idx) => idx !== i))}
                              className="text-zinc-500 hover:text-red-500"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Anonymous */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={cn(
                        'w-5 h-5 border flex items-center justify-center transition-colors',
                        anonymous ? 'border-blood-500 bg-blood-500' : 'border-zinc-600'
                      )}
                      onClick={() => setAnonymous(!anonymous)}
                    >
                      {anonymous && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm text-zinc-400">
                      Submit anonymously
                    </span>
                  </label>

                  {/* Warning */}
                  <div className="flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/20">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-500/80">
                      False reports may result in action against your account. Please only report genuine violations.
                    </p>
                  </div>
                </div>
              )}

              {step === 'submitted' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Report Submitted
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6">
                    Thank you for helping keep our community safe. We&apos;ll review your report and take appropriate action.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {step === 'details' && (
              <div className="flex justify-end gap-3 p-4 border-t border-zinc-800">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Submitting...' : 'Submit Report'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { ReportModal };
