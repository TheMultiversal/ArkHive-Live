'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import IndividualProfileView from '@/components/individuals/IndividualProfileView';
import individualData from '@/data/individuals';

export default function IndividualDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const individual = individualData[slug];

  if (!individual) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
          <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Individual Not Found</h1>
          <p className="text-zinc-400 mb-8">The individual &ldquo;{slug}&rdquo; could not be located in the database.</p>
          <Link href="/entities/individuals" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Individuals
          </Link>
        </div>
      </div>
    );
  }

  return <IndividualProfileView individual={individual} />;
}