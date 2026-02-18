'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, Database, FileText, AlertTriangle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Shield className="w-16 h-16 text-blood-500 mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">
            Last updated: January 15, 2025
          </p>
        </motion.div>

        {/* Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-green-900/20 border border-green-700/50 p-6 mb-12"
        >
          <h2 className="text-xl font-semibold text-green-300 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Privacy Summary
          </h2>
          <ul className="space-y-2 text-green-200/80">
            <li>• We do not track individual users</li>
            <li>• We do not sell or share your data</li>
            <li>• We do not use advertising cookies</li>
            <li>• We protect whistleblower identity at all costs</li>
            <li>• We use minimal, privacy-respecting analytics</li>
          </ul>
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blood-500" />
              Introduction
            </h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                ArkHive (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard information when 
                you visit our platform.
              </p>
              <p>
                As an investigative journalism organization, we understand the critical importance 
                of privacy and anonymity. Our policies are designed to protect both our readers 
                and our sources.
              </p>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-blood-500" />
              Information We Collect
            </h2>
            <div className="text-zinc-300 space-y-4">
              <h3 className="text-lg font-semibold text-white">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information when you reach out to us (if you choose to provide it)</li>
                <li>Messages and documents submitted through our secure channels</li>
                <li>Email address if you subscribe to our newsletter</li>
                <li>Workspace data if you create a collaborative investigation account</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">Automatically Collected Information</h3>
              <p>
                We intentionally minimize automatic data collection. We do NOT collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP addresses</li>
                <li>Browser fingerprints</li>
                <li>Tracking cookies</li>
                <li>Third-party analytics that identify users</li>
              </ul>
              <p>
                We use privacy-respecting, aggregate-only analytics to understand general 
                traffic patterns without identifying individual visitors.
              </p>
            </div>
          </motion.section>

          {/* Source Protection */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-blood-500" />
              Source Protection
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 p-6 text-zinc-300 space-y-4">
              <p className="font-semibold text-white">
                Protecting our sources is our highest priority.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>SecureDrop:</strong> We operate a SecureDrop system for anonymous document 
                  submission on air-gapped computers
                </li>
                <li>
                  <strong>No Logs:</strong> Our secure submission systems do not log IP addresses 
                  or metadata
                </li>
                <li>
                  <strong>Encryption:</strong> All communications with sources are end-to-end encrypted
                </li>
                <li>
                  <strong>Legal Protection:</strong> We will never voluntarily reveal a source&apos;s 
                  identity and will fight any legal attempts to compel disclosure
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-blood-500" />
              Data Security
            </h2>
            <div className="text-zinc-300 space-y-4">
              <p>We implement robust security measures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>TLS encryption for all data in transit</li>
                <li>Encrypted storage for sensitive documents</li>
                <li>Regular security audits by independent firms</li>
                <li>Strict access controls and authentication</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </motion.section>

          {/* Cookies */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                We use only essential cookies required for basic site functionality:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Session cookies for logged-in users (workspace functionality)</li>
                <li>Security tokens to prevent CSRF attacks</li>
                <li>Preference cookies (theme, dismissed notices) stored locally</li>
              </ul>
              <p>
                We do NOT use advertising cookies, tracking pixels, or social media 
                tracking widgets.
              </p>
            </div>
          </motion.section>

          {/* Third Parties */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Third Parties</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                We do not sell, rent, or share your personal information with third parties 
                for marketing purposes. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations (see &quot;Legal Requests&quot; below)</li>
                <li>With essential service providers who are bound by confidentiality agreements</li>
              </ul>
            </div>
          </motion.section>

          {/* Legal Requests */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Legal Requests
            </h2>
            <div className="bg-yellow-900/20 border border-yellow-700/50 p-6 text-yellow-200/90 space-y-4">
              <p>
                We will challenge any legal request for user or source information that we 
                believe is overbroad, lacks proper authority, or violates press freedom.
              </p>
              <p>
                Our policy is to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notify affected users when legally permitted</li>
                <li>Require valid legal process before disclosure</li>
                <li>Provide only the minimum required information</li>
                <li>Fight requests that threaten journalistic sources</li>
              </ul>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <div className="text-zinc-300 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to any data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
              <p>
                To exercise these rights, contact us at <span className="text-blood-400">privacy@arkhive.org</span>
              </p>
            </div>
          </motion.section>

          {/* Changes */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                We may update this Privacy Policy periodically. We will notify users of 
                significant changes through a prominent notice on our website and update 
                the &quot;Last updated&quot; date.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                For privacy-related questions or concerns:
              </p>
              <ul className="space-y-2">
                <li>
                  Email: <span className="text-blood-400">privacy@arkhive.org</span>
                </li>
                <li>
                  PGP Key: Available on our <Link href="/contact" className="text-blood-400 underline">contact page</Link>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Related Documents</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/terms"
              className="flex items-center gap-2 text-zinc-400 hover:text-blood-400 transition-colors"
            >
              Terms of Service <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/methodology"
              className="flex items-center gap-2 text-zinc-400 hover:text-blood-400 transition-colors"
            >
              Methodology <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
