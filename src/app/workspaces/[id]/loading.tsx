import { Users, Skull } from 'lucide-react';

export default function WorkspaceLoading() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="py-6 border-b border-zinc-800/60">
          <div className="flex items-center justify-between animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blood-950/30 border border-blood-800/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-blood-700/50" />
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-zinc-800/50 rounded w-48" />
                <div className="h-4 bg-zinc-800/30 rounded w-32" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-9 w-24 bg-zinc-800/40 rounded" />
              <div className="h-9 w-9 bg-zinc-800/40 rounded" />
            </div>
          </div>
        </div>

        <div className="py-6 grid lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Evidence Board Skeleton */}
            <div className="border border-zinc-800/60 bg-black/40 p-4 animate-pulse">
              <div className="flex items-center justify-between mb-4">
                <div className="h-5 bg-zinc-800/50 rounded w-32" />
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-zinc-800/40 rounded" />
                  <div className="h-8 w-8 bg-zinc-800/40 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square bg-zinc-800/20 rounded" />
                ))}
              </div>
            </div>

            {/* Chat Panel Skeleton */}
            <div className="border border-zinc-800/60 bg-black/40 p-4 animate-pulse">
              <div className="h-5 bg-zinc-800/50 rounded w-24 mb-4" />
              <div className="space-y-3 h-64">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 bg-zinc-800/40 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-zinc-800/30 rounded w-24" />
                      <div className="h-4 bg-zinc-800/20 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Members Skeleton */}
            <div className="border border-zinc-800/60 bg-black/40 p-4 animate-pulse">
              <div className="h-5 bg-zinc-800/50 rounded w-20 mb-3" />
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-800/40 rounded-full" />
                    <div className="h-4 bg-zinc-800/30 rounded flex-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Skeleton */}
            <div className="border border-zinc-800/60 bg-black/40 p-4 animate-pulse">
              <div className="h-5 bg-zinc-800/50 rounded w-28 mb-3" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-10 bg-zinc-800/20 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        <div className="fixed bottom-6 right-6 flex items-center gap-2 px-3 py-2 bg-black/80 border border-blood-800/30">
          <Skull className="w-4 h-4 text-blood-600 animate-pulse" />
          <span className="text-xs text-blood-500/70 uppercase tracking-wider">Accessing workspace...</span>
        </div>
      </div>
    </div>
  );
}
