'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    questions: [
      {
        q: 'What is ArkHive?',
        a: 'ArkHive is an investigative journalism platform dedicated to exposing corruption, government overreach, and corporate malfeasance. We compile verified information from leaked documents, whistleblowers, and public records to provide transparent, fact-based reporting.',
      },
      {
        q: 'How do you verify your information?',
        a: 'We employ a rigorous multi-step verification process: 1) Cross-referencing with multiple independent sources, 2) Document authentication by forensic experts, 3) Corroboration with public records and FOIA responses, 4) Expert consultation in relevant fields. Every piece of information is assigned a verification level.',
      },
      {
        q: 'Is ArkHive affiliated with any government or political organization?',
        a: 'No. ArkHive is completely independent and operates without government funding or political affiliation. We are funded through reader donations and operate as a non-profit organization committed to press freedom.',
      },
    ],
  },
  {
    id: 'investigations',
    name: 'Investigations',
    questions: [
      {
        q: 'How are investigation severity levels determined?',
        a: 'Severity levels (Critical, High, Medium, Low) are determined based on: scale of impact on public interest, number of affected individuals, level of institutional involvement, potential for ongoing harm, and strength of evidence.',
      },
      {
        q: 'Can I submit tips or documents?',
        a: 'Yes. We have secure channels for whistleblowers and tipsters. Visit our Submit page to learn about our encrypted submission process. We protect source identity with industry-leading security measures.',
      },
      {
        q: 'How long do investigations take?',
        a: 'Investigation timelines vary significantly based on complexity, required verification, and legal review. Some investigations take months; others take years. We prioritize accuracy over speed.',
      },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy & Security',
    questions: [
      {
        q: 'How do you protect whistleblowers?',
        a: 'We use end-to-end encryption, secure drop systems, and air-gapped computers for sensitive documents. We never require identifying information from sources and operate under strict source protection protocols.',
      },
      {
        q: 'Do you collect user data?',
        a: 'We collect minimal data necessary for site operation. We do not use third-party tracking, advertising cookies, or analytics that could identify individual users. See our Privacy Policy for complete details.',
      },
      {
        q: 'Is my browsing activity logged?',
        a: 'We do not log IP addresses or create user profiles. We recommend using Tor or a VPN for additional privacy when accessing sensitive investigations.',
      },
    ],
  },
  {
    id: 'legal',
    name: 'Legal',
    questions: [
      {
        q: 'Is this information legal to view?',
        a: 'Yes. All information published on ArkHive is legal to view. We operate under press freedom protections and publish only information that serves the public interest.',
      },
      {
        q: 'How do you handle legal threats?',
        a: 'We have a dedicated legal team experienced in press freedom law. We do not remove accurate reporting due to legal pressure and will defend our journalism in court when necessary.',
      },
      {
        q: 'Can I republish your content?',
        a: 'Much of our content is available under Creative Commons licensing. Please contact us for specific republishing requests and always provide proper attribution.',
      },
    ],
  },
  {
    id: 'technical',
    name: 'Technical',
    questions: [
      {
        q: 'What browsers do you support?',
        a: 'We support all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for security. Tor Browser is fully supported for anonymous access.',
      },
      {
        q: 'Do you have an API?',
        a: 'We offer limited API access for researchers and journalists. Contact us with your use case for API key requests.',
      },
      {
        q: 'How can I access ArkHive if it\'s blocked?',
        a: 'Use Tor Browser, a VPN, or our .onion mirror site. We also maintain presence on decentralized platforms to ensure information availability.',
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((c) => c.questions.length > 0);

  const displayCategories = searchQuery ? filteredCategories : faqCategories;

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HelpCircle className="w-16 h-16 text-blood-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Find answers to common questions about ArkHive, our investigations,
              and how we protect your privacy.
            </p>
          </motion.div>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search frequently asked questions"
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                !activeCategory
                  ? 'bg-blood-600 text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white'
              )}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === category.id
                    ? 'bg-blood-600 text-white'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {displayCategories
            .filter((c) => !activeCategory || c.id === activeCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blood-500" />
                  {category.name}
                </h2>
                <div className="space-y-2">
                  {category.questions.map((faq, index) => {
                    const questionId = `${category.id}-${index}`;
                    const isExpanded = expandedQuestion === questionId;

                    return (
                      <div
                        key={questionId}
                        className="bg-zinc-900 border border-zinc-800"
                      >
                        <button
                          onClick={() =>
                            setExpandedQuestion(isExpanded ? null : questionId)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                          aria-expanded={isExpanded}
                          aria-controls={`faq-answer-${questionId}`}
                        >
                          <span className="font-medium text-zinc-200 pr-4">
                            {faq.q}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                          >
                            <ChevronRight className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                          </motion.div>
                        </button>
                        <motion.div
                          id={`faq-answer-${questionId}`}
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
        </div>

        {/* No results */}
        {searchQuery && displayCategories.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-400">No questions match your search.</p>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center bg-zinc-900 border border-zinc-800 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-zinc-400 mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blood-600 text-white font-medium hover:bg-blood-700 transition-colors"
          >
            Contact Us
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
