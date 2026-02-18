'use client';

import { motion } from 'framer-motion';
import { 
  Search, FileCheck, Users, Shield, 
  CheckCircle2, AlertCircle, Scale, Eye,
  FileText, Database, Lock, Zap
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: Search,
    title: 'Initial Discovery',
    description: 'Investigations begin with tips, document leaks, public records requests, or patterns identified in data analysis.',
    details: [
      'Secure intake through encrypted channels',
      'Initial credibility assessment',
      'Background research on key claims',
      'Identification of primary sources'
    ]
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'All documents undergo rigorous authentication before being used as sources.',
    details: [
      'Metadata analysis and forensic examination',
      'Chain of custody verification',
      'Cross-reference with known authentic documents',
      'Expert consultation when needed'
    ]
  },
  {
    icon: Users,
    title: 'Source Corroboration',
    description: 'Information is verified through multiple independent sources before publication.',
    details: [
      'Minimum of two independent confirmations',
      'Source credibility evaluation',
      'Assessment of potential bias or motive',
      'Documentation of source reliability'
    ]
  },
  {
    icon: Shield,
    title: 'Legal & Ethical Review',
    description: 'All investigations pass through legal review and ethical evaluation.',
    details: [
      'Public interest justification',
      'Potential harm assessment',
      'Source protection measures',
      'Right of reply to subjects'
    ]
  }
];

const principles = [
  {
    icon: CheckCircle2,
    title: 'Accuracy First',
    description: 'We prioritize getting it right over getting it first. Every fact is checked, every claim verified.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We disclose our methods, acknowledge uncertainty, and correct errors promptly and prominently.'
  },
  {
    icon: Shield,
    title: 'Source Protection',
    description: 'We never reveal sources without consent. We use secure technology and will fight legal demands.'
  },
  {
    icon: Scale,
    title: 'Fairness',
    description: 'Subjects have the right to respond. We present multiple perspectives and acknowledge complexity.'
  },
  {
    icon: AlertCircle,
    title: 'Independence',
    description: 'Editorial decisions are made independently. We have no financial ties to subjects we cover.'
  },
  {
    icon: Lock,
    title: 'Accountability',
    description: 'We stand behind our reporting and accept responsibility for our work.'
  }
];

const evidenceTypes = [
  {
    type: 'Primary Documents',
    icon: FileText,
    standard: 'Authenticated original documents from direct sources',
    reliability: 'Highest'
  },
  {
    type: 'Official Records',
    icon: Database,
    standard: 'Government filings, court records, regulatory documents',
    reliability: 'High'
  },
  {
    type: 'Named Sources',
    icon: Users,
    standard: 'On-record statements from identifiable individuals',
    reliability: 'High'
  },
  {
    type: 'Anonymous Sources',
    icon: Shield,
    standard: 'Protected sources with corroborating evidence',
    reliability: 'Moderate-High'
  },
  {
    type: 'Data Analysis',
    icon: Zap,
    standard: 'Statistical patterns and computational findings',
    reliability: 'Variable'
  }
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blood-500">Methodology</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Rigorous journalism demands rigorous methods. Here&apos;s how we ensure 
            accuracy, protect sources, and maintain editorial integrity.
          </p>
        </motion.div>

        {/* Investigation Process */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Investigation Process
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blood-500/10 p-3 shrink-0">
                    <step.icon className="w-6 h-6 text-blood-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blood-500 font-mono text-sm">
                        STEP {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                          <CheckCircle2 className="w-4 h-4 text-blood-500 shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Core Principles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-zinc-900/30 border border-zinc-800/50 p-5 hover:border-blood-500/30 transition-colors"
              >
                <principle.icon className="w-8 h-8 text-blood-500 mb-3" />
                <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                <p className="text-zinc-500 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Evidence Standards */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Evidence Standards
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-800/50">
                  <th className="text-left p-4 text-sm font-semibold text-zinc-300">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-zinc-300 hidden md:table-cell">Standard</th>
                  <th className="text-left p-4 text-sm font-semibold text-zinc-300">Reliability</th>
                </tr>
              </thead>
              <tbody>
                {evidenceTypes.map((evidence, index) => (
                  <tr key={evidence.type} className="border-t border-zinc-800">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <evidence.icon className="w-5 h-5 text-blood-500" />
                        <span className="text-white font-medium">{evidence.type}</span>
                      </div>
                    </td>
                    <td className="p-4 text-zinc-400 text-sm hidden md:table-cell">
                      {evidence.standard}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium ${
                        evidence.reliability === 'Highest' 
                          ? 'bg-blood-500/20 text-blood-400'
                          : evidence.reliability === 'High'
                          ? 'bg-green-500/20 text-green-400'
                          : evidence.reliability === 'Moderate-High'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-zinc-500/20 text-zinc-400'
                      }`}>
                        {evidence.reliability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Corrections Policy */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blood-900/20 border border-blood-800/50 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Corrections Policy</h2>
            <div className="text-zinc-300 space-y-4">
              <p>
                We correct errors promptly and transparently. Corrections are noted at 
                the top of affected articles with a clear explanation of what was changed 
                and when.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blood-500 shrink-0 mt-0.5" />
                  <span>Minor corrections (typos, dates) are noted at article bottom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blood-500 shrink-0 mt-0.5" />
                  <span>Significant corrections are noted prominently at article top</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blood-500 shrink-0 mt-0.5" />
                  <span>Major errors may result in article retraction with explanation</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-400 mt-4">
                To report an error, contact: <span className="text-blood-400">corrections@arkhive.org</span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-zinc-400 mb-4">Questions about our methodology?</p>
          <Link
            href="/contact"
            className="inline-block bg-blood-600 hover:bg-blood-700 text-white font-semibold px-6 py-3 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
