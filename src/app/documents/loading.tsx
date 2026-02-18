import { FileText } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icon */}
        <div className="w-20 h-20 mx-auto mb-6 border-2 border-blood-700/50 bg-blood-950/20 flex items-center justify-center animate-pulse">
          <FileText className="w-10 h-10 text-blood-600" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-lg font-bold text-white uppercase tracking-wider">
            ACCESSING DOCUMENT VAULT
          </p>
          <p className="text-sm text-zinc-500">
            Decrypting classified files...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-zinc-900 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-blood-900 via-blood-600 to-blood-900 animate-shimmer" 
                 style={{ backgroundSize: '200% 100%' }} />
          </div>
        </div>

        {/* Warning */}
        <p className="mt-6 text-xs text-zinc-700 uppercase tracking-widest">
          Your connection is being monitored
        </p>
      </div>
    </div>
  );
}
