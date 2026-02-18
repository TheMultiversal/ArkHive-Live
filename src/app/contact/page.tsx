'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Shield, Mail, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: 'general',
    name: '',
    email: '',
    subject: '',
    message: '',
    isAnonymous: false,
    usePGP: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center px-4"
        >
          <div className="w-16 h-16 bg-green-900/50 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Message Sent</h1>
          <p className="text-zinc-400 mb-6">
            Thank you for contacting us. We will review your message and respond as soon as possible.
            {formData.isAnonymous && ' Since you submitted anonymously, we cannot reply directly.'}
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                type: 'general',
                name: '',
                email: '',
                subject: '',
                message: '',
                isAnonymous: false,
                usePGP: false,
              });
            }}
            className="px-6 py-3 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Mail className="w-16 h-16 text-blood-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Reach out to our team for press inquiries, technical support, or to report sensitive information.
            We take your privacy seriously.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Security Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Security Notice */}
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-white">Secure Contact</h3>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-zinc-500 mt-0.5" />
                  All submissions are encrypted in transit
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-zinc-500 mt-0.5" />
                  Anonymous submissions accepted
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-zinc-500 mt-0.5" />
                  PGP encryption available
                </li>
              </ul>
            </div>

            {/* Warning for Whistleblowers */}
            <div className="bg-yellow-900/20 border border-yellow-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h3 className="font-semibold text-yellow-200">For Whistleblowers</h3>
              </div>
              <p className="text-sm text-yellow-200/80 mb-4">
                If you have sensitive documents or information, please use our 
                <span className="font-semibold"> SecureDrop</span> system instead 
                of this contact form for maximum protection.
              </p>
              <a
                href="/submit"
                className="text-sm text-yellow-400 underline underline-offset-2 hover:no-underline"
              >
                Go to Secure Submission →
              </a>
            </div>

            {/* PGP Key */}
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="font-semibold text-white mb-3">Our PGP Key</h3>
              <code className="block text-xs text-zinc-400 bg-black p-3 break-all">
                Key ID: 0x7A8B9C0D<br />
                Fingerprint: 1234 5678 9ABC DEF0 1234 5678 9ABC DEF0 7A8B 9C0D
              </code>
              <button className="mt-3 text-sm text-blood-400 underline underline-offset-2 hover:no-underline">
                Download Full Key
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-6">
              {error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Inquiry Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Inquiry Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blood-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="press">Press Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="legal">Legal</option>
                  <option value="collaboration">Collaboration Request</option>
                  <option value="tip">Submit a Tip</option>
                </select>
              </div>

              {/* Anonymous Toggle */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                    className="w-4 h-4 bg-zinc-800 border-zinc-600 text-blood-500 focus:ring-blood-500"
                  />
                  <span className="text-sm text-zinc-300">Submit anonymously</span>
                </label>
                {formData.isAnonymous && (
                  <p className="text-xs text-zinc-500 mt-2 ml-7">
                    We won&apos;t be able to respond to your message directly.
                  </p>
                )}
              </div>

              {/* Name and Email (if not anonymous) */}
              {!formData.isAnonymous && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Name <span className="text-zinc-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Email <span className="text-zinc-500">(for reply)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              )}

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
                  placeholder="Brief description of your inquiry"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              {/* PGP Option */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.usePGP}
                    onChange={(e) => setFormData({ ...formData, usePGP: e.target.checked })}
                    className="w-4 h-4 bg-zinc-800 border-zinc-600 text-blood-500 focus:ring-blood-500"
                  />
                  <span className="text-sm text-zinc-300">
                    Encrypt response with PGP
                  </span>
                </label>
                {formData.usePGP && (
                  <div className="mt-3 ml-7">
                    <label className="block text-xs text-zinc-500 mb-2">
                      Paste your public PGP key:
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-white text-xs font-mono focus:outline-none focus:border-blood-500 resize-none"
                      placeholder="-----BEGIN PGP PUBLIC KEY BLOCK-----"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors',
                  isSubmitting
                    ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                    : 'bg-blood-600 text-white hover:bg-blood-700'
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
