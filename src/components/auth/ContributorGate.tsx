'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, UserPlus, Shield } from 'lucide-react';
import { useContributorStore } from '@/store/contributorStore';

interface ContributorGateProps {
 children: React.ReactNode;
 action?: string;
}

export default function ContributorGate({ children, action = 'perform this action' }: ContributorGateProps) {
 const { currentUser } = useContributorStore();

 // User is signed in and verified - show gated content
 if (currentUser && currentUser.verified) {
 return <>{children}</>;
 }

 // User needs to sign in or verify
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-lg mx-auto px-4">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-8 mt-8"
 >
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 border-2 border-blood-700 flex items-center justify-center">
 <Lock className="w-6 h-6 text-blood-500"/>
 </div>
 <div>
 <h1 className="text-xl font-black glass-text uppercase tracking-wider">Contributor Access Required</h1>
 <p className="text-sm text-zinc-400">Sign in or create an account to {action}</p>
 </div>
 </div>

 <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
 {currentUser && !currentUser.verified
 ? 'Your email has not been verified yet. Please complete verification to continue.'
 : 'To protect the integrity of our investigations, contributors must create an account with email verification. This is the only feature that requires an account.'}
 </p>

 <div className="flex flex-col gap-3">
 <Link
 href="/contributor"
 className="w-full px-4 py-3 bg-blood-700 hover:bg-blood-600 glass-text font-bold uppercase tracking-wider text-center transition-colors text-sm flex items-center justify-center gap-2"
 >
 <UserPlus className="w-4 h-4"/>
 {currentUser ? 'Verify Email' : 'Sign In / Create Account'}
 </Link>
 </div>

 {/* Zero Data Promise */}
 <div className="mt-6 pt-4 border-t border-[rgba(80,180,255,0.15)] flex items-start gap-2">
 <Shield className="w-4 h-4 text-blood-500 flex-shrink-0 mt-0.5"/>
 <p className="text-xs text-zinc-500 leading-relaxed">
 ArkHive collects zero personal data. Your account is stored only in your browser&apos;s local storage. No data is ever sent to our servers.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 );
}
