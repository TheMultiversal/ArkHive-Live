'use client';

import { motion } from 'framer-motion';
import { Scale, FileText, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Scale className="w-16 h-16 text-blood-500 mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-400">
            Last updated: January 15, 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          {/* Acceptance */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                By accessing or using ArkHive (&quot;the Platform&quot;), you agree to be bound by 
                these Terms of Service. If you do not agree to all terms, you may not use 
                the Platform.
              </p>
              <p>
                We may modify these terms at any time. Continued use after changes constitutes 
                acceptance of modified terms.
              </p>
            </div>
          </motion.section>

          {/* Use of Platform */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Platform</h2>
            <div className="text-zinc-300 space-y-4">
              <h3 className="text-lg font-semibold text-white">Permitted Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and read publicly available content</li>
                <li>Share and republish content with proper attribution (see Licensing)</li>
                <li>Submit tips, documents, or information through designated channels</li>
                <li>Create workspace accounts for collaborative investigation</li>
                <li>Use for research, journalism, and public interest purposes</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">Prohibited Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempting to identify or deanonymize sources or whistleblowers</li>
                <li>Harassment or threats against any individual</li>
                <li>Unauthorized access to secure systems</li>
                <li>Submitting false information intended to mislead</li>
                <li>Using the Platform for illegal purposes</li>
                <li>Automated scraping without permission</li>
              </ul>
            </div>
          </motion.section>

          {/* Content */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">3. Content</h2>
            <div className="text-zinc-300 space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Content</h3>
              <p>
                All original reporting, analysis, and editorial content is owned by ArkHive 
                and protected by copyright. Much of our content is available under Creative 
                Commons CC BY-NC 4.0 license unless otherwise noted.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">User Submissions</h3>
              <p>
                By submitting content (tips, documents, comments), you grant ArkHive the 
                right to use, publish, and share this content for journalistic purposes. 
                You represent that you have the right to share any submitted materials.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">Third-Party Content</h3>
              <p>
                The Platform may contain links to or excerpts from third-party sources. 
                We are not responsible for third-party content accuracy or availability.
              </p>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              4. Disclaimers
            </h2>
            <div className="bg-yellow-900/20 border border-yellow-700/50 p-6 text-yellow-200/90 space-y-4">
              <p>
                <strong>Accuracy:</strong> While we strive for accuracy, information may 
                contain errors or become outdated. Verify critical information independently.
              </p>
              <p>
                <strong>&quot;AS IS&quot; Basis:</strong> The Platform is provided &quot;as is&quot; without 
                warranties of any kind. We do not guarantee uninterrupted access or 
                error-free operation.
              </p>
              <p>
                <strong>Not Legal Advice:</strong> Content on this Platform is for 
                informational purposes only and does not constitute legal, medical, 
                financial, or professional advice.
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
            <h2 className="text-2xl font-bold text-white mb-4">5. Source Protection</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-6 text-zinc-300 space-y-4">
              <p>
                Protecting the identity and safety of sources is fundamental to our mission. 
                Any attempt to identify, locate, or harm whistleblowers or sources using 
                information from this Platform is strictly prohibited and may result in 
                legal action.
              </p>
              <p>
                We will cooperate with authorities to prosecute anyone who threatens, 
                harasses, or attempts to retaliate against sources.
              </p>
            </div>
          </motion.section>

          {/* Accounts */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">6. Accounts</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                Certain features require account registration. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining account security</li>
                <li>All activity under your account</li>
                <li>Providing accurate information</li>
                <li>Promptly reporting unauthorized access</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                To the maximum extent permitted by law, ArkHive shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages 
                arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or inability to use the Platform</li>
                <li>Any content obtained from the Platform</li>
                <li>Unauthorized access to your data</li>
                <li>Actions of third parties</li>
              </ul>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                These terms shall be governed by and construed in accordance with applicable 
                international press freedom laws and conventions. We assert journalist 
                privilege and source protection rights under applicable law.
              </p>
            </div>
          </motion.section>

          {/* DMCA */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">9. Copyright & DMCA</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                We respect intellectual property rights. However, as a journalism platform, 
                much of our content involves fair use of documents and materials in the 
                public interest.
              </p>
              <p>
                For DMCA concerns, contact: <span className="text-blood-400">legal@arkhive.org</span>
              </p>
              <p>
                Note: We will vigorously defend fair use rights and will not remove 
                newsworthy content based on improper takedown requests.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                For questions about these Terms:
              </p>
              <ul className="space-y-2">
                <li>
                  Email: <span className="text-blood-400">legal@arkhive.org</span>
                </li>
                <li>
                  See our <Link href="/contact" className="text-blood-400 underline">Contact page</Link> for secure communication options
                </li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Related Documents</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="flex items-center gap-2 text-zinc-400 hover:text-blood-400 transition-colors"
            >
              Privacy Policy <ExternalLink className="w-4 h-4" />
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
