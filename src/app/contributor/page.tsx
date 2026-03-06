'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
 Mail,
 Lock,
 Eye,
 EyeOff,
 ArrowLeft,
 Shield,
 AlertTriangle,
 CheckCircle,
 KeyRound,
 UserPlus,
 LogIn,
 Trash2,
} from 'lucide-react';
import { useContributorStore } from '@/store/contributorStore';

type Mode = 'signin' | 'signup' | 'verify';

export default function ContributorAuthPage() {
 const router = useRouter();
 const { signUp, signIn, verifyEmail, signOut, deleteAccount, currentUser, getVerificationCode } = useContributorStore();

 const [mode, setMode] = useState<Mode>(currentUser ? 'signin' : 'signup');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [verificationCode, setVerificationCode] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');
 const [loading, setLoading] = useState(false);
 const [showVerificationHint, setShowVerificationHint] = useState(false);

 // Already signed in and verified
 if (currentUser && currentUser.verified) {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-lg mx-auto px-4">
 <Link
 href="/"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Home
 </Link>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-zinc-800 bg-black/80 p-8"
 >
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 border-2 border-blood-700 flex items-center justify-center">
 <CheckCircle className="w-5 h-5 text-blood-500"/>
 </div>
 <div>
 <h1 className="text-xl font-black text-white uppercase tracking-wider">Signed In</h1>
 <p className="text-sm text-zinc-400">{currentUser.email}</p>
 </div>
 </div>

 <p className="text-zinc-400 text-sm mb-6">
 Your contributor account is active and verified. You can now submit intelligence and create workspaces.
 </p>

 <div className="flex flex-col gap-3">
 <Link
 href="/submit"
 className="w-full px-4 py-3 bg-blood-700 hover:bg-blood-600 text-white font-bold uppercase tracking-wider text-center transition-colors text-sm"
 >
 Submit Intelligence
 </Link>
 <Link
 href="/workspaces/create"
 className="w-full px-4 py-3 border-2 border-zinc-700 hover:border-blood-700 text-white font-bold uppercase tracking-wider text-center transition-colors text-sm"
 >
 Create Workspace
 </Link>
 <button
 onClick={() => { signOut(); setMode('signin'); setSuccess('Signed out successfully.'); }}
 className="w-full px-4 py-3 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white text-sm uppercase tracking-wider transition-colors"
 >
 Sign Out
 </button>
 <button
 onClick={() => {
 if (confirm('Are you sure? This permanently deletes your account. No data is stored on our servers.')) {
 deleteAccount();
 setMode('signup');
 setSuccess('Account deleted. All local data removed.');
 }
 }}
 className="w-full px-4 py-3 border border-blood-900/50 hover:border-blood-700 text-blood-400 hover:text-blood-400 text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
 >
 <Trash2 className="w-3 h-3"/>
 Delete Account
 </button>
 </div>
 </motion.div>

 {/* Zero Data Banner */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.2 }}
 className="mt-6 border border-zinc-800 bg-zinc-900/50 p-4"
 >
 <div className="flex items-start gap-3">
 <Shield className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Zero Data Collection</h3>
 <p className="text-xs text-zinc-500 leading-relaxed">
 Your account exists only in your browser&apos;s local storage. We do not collect, store, transmit, or process any personal data on our servers. No cookies, no analytics, no tracking. Clearing your browser data removes your account entirely.
 </p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 );
 }

 // Signed in but NOT verified
 if (currentUser && !currentUser.verified && mode !== 'verify') {
 setMode('verify');
 setEmail(currentUser.email);
 }

 const handleSignUp = async () => {
 setError('');
 setSuccess('');
 setLoading(true);

 if (password !== confirmPassword) {
 setError('Passwords do not match');
 setLoading(false);
 return;
 }

 const result = signUp(email, password);
 setLoading(false);

 if (result.ok) {
 setMode('verify');
 setSuccess('Account created. Check below for your verification code.');
 setShowVerificationHint(true);
 } else {
 setError(result.error || 'Sign up failed');
 }
 };

 const handleSignIn = async () => {
 setError('');
 setSuccess('');
 setLoading(true);

 const result = signIn(email, password);
 setLoading(false);

 if (result.ok) {
 const store = useContributorStore.getState();
 if (store.currentUser && !store.currentUser.verified) {
 setMode('verify');
 setSuccess('Please verify your email to continue.');
 } else {
 setSuccess('Signed in successfully.');
 router.refresh();
 }
 } else {
 setError(result.error || 'Sign in failed');
 }
 };

 const handleVerify = async () => {
 setError('');
 setSuccess('');
 setLoading(true);

 const result = verifyEmail(email || currentUser?.email || '', verificationCode);
 setLoading(false);

 if (result.ok) {
 setSuccess('Email verified! You can now contribute.');
 router.refresh();
 } else {
 setError(result.error || 'Verification failed');
 }
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (mode === 'signup') handleSignUp();
 else if (mode === 'signin') handleSignIn();
 else if (mode === 'verify') handleVerify();
 };

 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-lg mx-auto px-4">
 <Link
 href="/"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Home
 </Link>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-blood-800/60 bg-black/80 p-8"
 >
 {/* Header */}
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 border-2 border-blood-700 flex items-center justify-center">
 {mode === 'verify' ? (
 <KeyRound className="w-5 h-5 text-blood-500"/>
 ) : mode === 'signup' ? (
 <UserPlus className="w-5 h-5 text-blood-500"/>
 ) : (
 <LogIn className="w-5 h-5 text-blood-500"/>
 )}
 </div>
 <div>
 <h1 className="text-xl font-black text-white uppercase tracking-wider">
 {mode === 'verify' ? 'Verify Email' : mode === 'signup' ? 'Create Account' : 'Sign In'}
 </h1>
 <p className="text-xs text-zinc-500">
 {mode === 'verify'
 ? 'Enter the verification code'
 : 'Required to submit intel or create workspaces'}
 </p>
 </div>
 </div>

 {/* Warning Banner */}
 <div className="flex items-start gap-2 p-3 border border-zinc-800 bg-zinc-900/50 mb-6">
 <AlertTriangle className="w-4 h-4 text-blood-500 flex-shrink-0 mt-0.5"/>
 <p className="text-xs text-zinc-400 leading-relaxed">
 {mode === 'verify'
 ? 'Since ArkHive collects zero data, the verification code is displayed below for demonstration. In a production environment, this would be sent via email.'
 : 'ArkHive stores your account locally in your browser only. No personal data is ever sent to or stored on our servers. We have zero access to your information.'}
 </p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-4">
 {mode !== 'verify' && (
 <>
 {/* Email */}
 <div>
 <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
 Email Address
 </label>
 <div className="relative">
 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
 placeholder="your@email.com"
 required
 autoFocus
 />
 </div>
 </div>

 {/* Password */}
 <div>
 <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
 Password
 </label>
 <div className="relative">
 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
 <input
 type={showPassword ? 'text' : 'password'}
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="w-full pl-10 pr-12 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
 placeholder="Min 6 characters"
 required
 minLength={6}
 />
 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
 >
 {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
 </button>
 </div>
 </div>

 {/* Confirm Password (sign up only) */}
 {mode === 'signup' && (
 <div>
 <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
 Confirm Password
 </label>
 <div className="relative">
 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
 <input
 type={showPassword ? 'text' : 'password'}
 value={confirmPassword}
 onChange={(e) => setConfirmPassword(e.target.value)}
 className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
 placeholder="Re-enter password"
 required
 minLength={6}
 />
 </div>
 </div>
 )}
 </>
 )}

 {/* Verification Code */}
 {mode === 'verify' && (
 <>
 <div>
 <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
 Verification Code
 </label>
 <div className="relative">
 <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
 <input
 type="text"
 value={verificationCode}
 onChange={(e) => setVerificationCode(e.target.value)}
 className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm font-mono tracking-widest uppercase"
 placeholder="Enter code"
 required
 autoFocus
 />
 </div>
 </div>

 {/* Show verification code hint */}
 {(showVerificationHint || getVerificationCode(email || currentUser?.email || '')) && (
 <div className="p-3 border border-blood-800/60 bg-blood-950/30">
 <p className="text-xs text-zinc-400 mb-1">Your verification code (demo mode):</p>
 <p className="text-lg font-mono font-bold text-blood-500 tracking-[0.3em]">
 {getVerificationCode(email || currentUser?.email || '') || 'Code expired, sign up again'}
 </p>
 </div>
 )}
 </>
 )}

 {/* Error / Success messages */}
 {error && (
 <div className="p-3 border border-blood-900/50 bg-blood-950/30">
 <p className="text-sm text-blood-400">{error}</p>
 </div>
 )}
 {success && (
 <div className="p-3 border border-blood-900/50 bg-blood-950/30">
 <p className="text-sm text-blood-400">{success}</p>
 </div>
 )}

 {/* Submit */}
 <button
 type="submit"
 disabled={loading}
 className="w-full px-4 py-3 bg-blood-700 hover:bg-blood-600 disabled:opacity-50 text-white font-bold uppercase tracking-wider transition-colors text-sm"
 >
 {loading
 ? 'Processing...'
 : mode === 'verify'
 ? 'Verify Email'
 : mode === 'signup'
 ? 'Create Account'
 : 'Sign In'}
 </button>
 </form>

 {/* Toggle sign in / sign up */}
 {mode !== 'verify' && (
 <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
 <p className="text-sm text-zinc-500">
 {mode === 'signin' ? (
 <>
 Don&apos;t have an account?{' '}
 <button
 onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
 className="text-blood-500 hover:text-blood-400 font-bold transition-colors"
 >
 Sign Up
 </button>
 </>
 ) : (
 <>
 Already have an account?{' '}
 <button
 onClick={() => { setMode('signin'); setError(''); setSuccess(''); }}
 className="text-blood-500 hover:text-blood-400 font-bold transition-colors"
 >
 Sign In
 </button>
 </>
 )}
 </p>
 </div>
 )}
 </motion.div>

 {/* Zero Data Collection Banner */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.2 }}
 className="mt-6 border border-zinc-800 bg-zinc-900/50 p-4"
 >
 <div className="flex items-start gap-3">
 <Shield className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Zero Data Collection Policy</h3>
 <ul className="text-xs text-zinc-500 leading-relaxed space-y-1">
 <li>- Account data is stored only in your browser&apos;s local storage</li>
 <li>- No personal data is transmitted to or stored on our servers</li>
 <li>- No cookies, analytics, trackers, or fingerprinting</li>
 <li>- No IP addresses, location data, or usage metrics are logged</li>
 <li>- Clearing browser data permanently deletes your account</li>
 <li>- You can delete your account at any time from this page</li>
 </ul>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 );
}
