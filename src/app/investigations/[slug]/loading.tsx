import { FileText, Skull } from 'lucide-react';

export default function InvestigationLoading() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header Skeleton */}
 <div className="py-8 lg:py-12">
 <div className="border-2 border-blood-800 bg-[#190800] p-6 lg:p-8 animate-pulse">
 <div className="flex items-start gap-4 mb-6">
 <div className="w-14 h-14 bg-blood-950 border border-blood-800 flex items-center justify-center">
 <FileText className="w-6 h-6 text-blood-700/50"/>
 </div>
 <div className="flex-1 space-y-3">
 <div className="h-8 bg-[#200c00] rounded w-3/4"/>
 <div className="h-4 bg-zinc-800 rounded w-1/4"/>
 </div>
 </div>
 <div className="space-y-2">
 <div className="h-4 bg-zinc-900 rounded w-full"/>
 <div className="h-4 bg-zinc-900 rounded w-5/6"/>
 <div className="h-4 bg-zinc-900 rounded w-4/6"/>
 </div>
 </div>
 </div>

 <div className="grid lg:grid-cols-3 gap-6">
 {/* Main Content Skeleton */}
 <div className="lg:col-span-2 space-y-6">
 <div className="border border-[rgba(255, 60, 60,0.08)] bg-black/40 p-6 animate-pulse">
 <div className="h-6 bg-[#200c00] rounded w-1/4 mb-4"/>
 <div className="space-y-3">
 {[...Array(6)].map((_, i) => (
 <div key={i} className="h-4 bg-zinc-800 rounded"style={{ width: `${85 - i * 10}%` }} />
 ))}
 </div>
 </div>
 </div>

 {/* Sidebar Skeleton */}
 <div className="space-y-4">
 <div className="border border-[rgba(255, 60, 60,0.08)] bg-black/40 p-4 animate-pulse">
 <div className="h-5 bg-[#200c00] rounded w-1/3 mb-3"/>
 <div className="space-y-2">
 {[...Array(4)].map((_, i) => (
 <div key={i} className="h-10 bg-zinc-800 rounded"/>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Loading indicator */}
 <div className="fixed bottom-6 right-6 flex items-center gap-2 px-3 py-2 bg-[rgba(0,6,20,0.90)] border border-blood-800">
 <Skull className="w-4 h-4 text-blood-600 animate-pulse"/>
 <span className="text-xs text-blood-500/70 uppercase tracking-wider">Loading classified data...</span>
 </div>
 </div>
 </div>
 );
}
