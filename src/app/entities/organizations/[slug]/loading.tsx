export default function Loading() {
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
