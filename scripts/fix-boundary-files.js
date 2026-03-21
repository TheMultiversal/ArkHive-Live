const fs = require('fs');
const path = require('path');

function errorTemplate(entityType, backLink, backLabel) {
  return `'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Entity page error:', error); }, [error]);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Something Went Wrong</h1>
        <p className="text-zinc-400 mb-8">An error occurred while loading this ${entityType} page.</p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={reset} className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link href="${backLink}" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" /> ${backLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
`;
}

function loadingTemplate() {
  return `export default function Loading() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-zinc-800 mb-6 mt-4" />
          <div className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-6 bg-zinc-800" />
              <div className="h-6 w-20 bg-zinc-800" />
              <div className="h-6 w-24 bg-zinc-800" />
            </div>
            <div className="h-10 w-3/4 bg-zinc-800 mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-zinc-800/60" />
              <div className="h-4 w-5/6 bg-zinc-800/60" />
              <div className="h-4 w-4/6 bg-zinc-800/60" />
            </div>
          </div>
          <div className="border border-zinc-800 bg-[#050505] p-6">
            <div className="h-6 w-48 bg-zinc-800 mb-4" />
            <div className="space-y-3">
              <div className="h-16 bg-zinc-900 border border-zinc-800" />
              <div className="h-16 bg-zinc-900 border border-zinc-800" />
              <div className="h-16 bg-zinc-900 border border-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
}

function notFoundTemplate(entityType, backLink, backLabel) {
  return `import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
        <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">${entityType} Not Found</h1>
        <p className="text-zinc-400 mb-8">This ${entityType.toLowerCase()} could not be located in the database.</p>
        <Link href="${backLink}" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
          <ArrowLeft className="w-4 h-4" /> ${backLabel}
        </Link>
      </div>
    </div>
  );
}
`;
}

const configs = [
  { dir: 'src/app/entities/agencies/[slug]', type: 'Agency', back: '/entities/agencies', backLabel: 'Back to Agencies' },
  { dir: 'src/app/entities/corporations/[slug]', type: 'Corporation', back: '/entities/corporations', backLabel: 'Back to Corporations' },
  { dir: 'src/app/entities/individuals/[slug]', type: 'Individual', back: '/entities/individuals', backLabel: 'Back to Individuals' },
  { dir: 'src/app/entities/organizations/[slug]', type: 'Organization', back: '/entities/organizations', backLabel: 'Back to Organizations' },
  { dir: 'src/app/investigations/[slug]', type: 'Investigation', back: '/investigations', backLabel: 'Back to Investigations' },
  { dir: 'src/app/workspaces/[id]', type: 'Workspace', back: '/workspaces', backLabel: 'Back to Workspaces' },
];

let written = 0;
for (const cfg of configs) {
  const dirPath = path.join(process.cwd(), cfg.dir);
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(path.join(dirPath, 'error.tsx'), errorTemplate(cfg.type, cfg.back, cfg.backLabel), 'utf8');
  written++;

  fs.writeFileSync(path.join(dirPath, 'loading.tsx'), loadingTemplate(), 'utf8');
  written++;

  fs.writeFileSync(path.join(dirPath, 'not-found.tsx'), notFoundTemplate(cfg.type, cfg.back, cfg.backLabel), 'utf8');
  written++;
}

// Also clean up deprecated content files
const deprecatedFiles = [
  'src/app/entities/agencies/[slug]/AgencyContent.tsx',
  'src/app/entities/corporations/[slug]/CorporationContent.tsx',
  'src/app/investigations/[slug]/InvestigationContent.tsx',
  'src/app/workspaces/[id]/WorkspaceContent.tsx',
];

for (const f of deprecatedFiles) {
  const fullPath = path.join(process.cwd(), f);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    // Only overwrite if it contains wrong content (not already cleaned)
    if (content.includes('export {};') || content.length < 100) {
      // Already cleaned, skip
    } else {
      fs.writeFileSync(fullPath, '// Deprecated - rendering handled by page.tsx\nexport {};\n', 'utf8');
      written++;
      console.log(`Cleaned deprecated: ${f}`);
    }
  }
}

console.log(`Wrote ${written} files across ${configs.length} dynamic routes`);
