'use client';

import EvidenceChainBrowser from '@/components/EvidenceChainBrowser';
import { Link2, Shield, CheckCircle, AlertTriangle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function EvidencePage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blood-500/20 border border-blood-500/50 flex items-center justify-center">
              <Link2 className="w-6 h-6 text-blood-500" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                EVIDENCE CHAIN BROWSER
              </h1>
              <p className="text-zinc-500 text-sm">
                Tracing claims to their sources
              </p>
            </div>
          </div>
          
          {/* Confidence Legend */}
          <div className="glass-card border border-zinc-800 p-4 mt-6">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">Verification Levels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-green-400 font-medium">Verified</div>
                  <div className="text-xs text-zinc-500">Multiple independent primary sources</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Link2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-blue-400 font-medium">Corroborated</div>
                  <div className="text-xs text-zinc-500">Supported by multiple sources</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-yellow-400 font-medium">Single Source</div>
                  <div className="text-xs text-zinc-500">Awaiting additional corroboration</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-red-400 font-medium">Disputed</div>
                  <div className="text-xs text-zinc-500">Conflicting evidence exists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Methodology Notice */}
        <div className="glass-card border border-zinc-800 p-4 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Our Methodology</h3>
              <p className="text-sm text-zinc-400">
                Each claim in our database is linked to supporting evidence. We track the chain from 
                assertion to source, rating confidence based on the number and quality of supporting 
                documents. Primary sources (court filings, government reports, direct evidence) carry 
                more weight than secondary reporting. When possible, we link directly to archived 
                copies of source documents.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Browser */}
        <EvidenceChainBrowser />
        
        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-zinc-900">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-500">
            <div>
              <h4 className="text-white font-semibold mb-2">Source Types</h4>
              <ul className="space-y-1">
                <li>• <span className="text-blue-400">Court Filings</span> - Indictments, motions, verdicts</li>
                <li>• <span className="text-emerald-400">Government Reports</span> - Congressional, IG, agency reports</li>
                <li>• <span className="text-purple-400">Primary Evidence</span> - Recordings, documents, photos</li>
                <li>• <span className="text-zinc-400">News Reports</span> - Verified journalism with sources</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Verification Process</h4>
              <p>
                Claims are evaluated based on: source reliability, corroboration by independent sources,
                availability of primary documentation, and consistency with established facts. We prioritize
                direct evidence over interpretive analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
