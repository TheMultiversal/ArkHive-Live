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
 Bookmark,
 BookmarkCheck,
 Target,
 Users,
 Send,
 Clock,
 ExternalLink,
 User,
 LogOut,
 FileText,
} from 'lucide-react';
import { useContributorStore } from '@/store/contributorStore';
import { formatDistanceToNow } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

type Mode = 'signin' | 'signup' | 'verify';
type DashboardTab = 'overview' | 'saved' | 'account';

export default function ContributorAuthPage() {
 const router = useRouter();
 const { signUp, signIn, verifyEmail, signOut, deleteAccount, currentUser, getVerificationCode, getBookmarks, removeBookmark } = useContributorStore();

 const [mode, setMode] = useState<Mode>(currentUser ? 'signin' : 'signup');
 const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [verificationCode, setVerificationCode] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');
 const [loading, setLoading] = useState(false);
 const [showVerificationHint, setShowVerificationHint] = useState(false);

 // Already signed in and verified - show dashboard
 if (currentUser && currentUser.verified) {
 const bookmarks = getBookmarks();
 const recentBookmarks = bookmarks.slice(0, 6);

 const dashboardTabs: { id: DashboardTab; label: string; icon: React.ReactNode }[] = [
 { id: 'overview', label: 'Overview', icon: <User className="w-4 h-4"/> },
 { id: 'saved', label: `Saved Pages (${bookmarks.length})`, icon: <Bookmark className="w-4 h-4"/> },
 { id: 'account', label: 'Account', icon: <Shield className="w-4 h-4"/> },
 ];

 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-4xl mx-auto px-4 py-8">
 {/* Dashboard Header */}
 <div className="flex items-center justify-between mb-8">
 <div>
 <h1 className="text-3xl font-black glass-text uppercase tracking-wider mb-1">
 <GlitchText text="DASHBOARD"/>
 </h1>
 <p className="text-zinc-400 text-sm">{currentUser.email}</p>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-2 px-3 py-1.5 border border-[rgba(255, 60, 60,0.18)] bg-[#1c0a00]">
 <CheckCircle className="w-3.5 h-3.5 text-blood-500"/>
 <span className="text-xs text-zinc-300 font-medium">Verified</span>
 </div>
 </div>
 </div>

 {/* Tab Navigation */}
 <div className="flex items-center gap-1 border-b border-[rgba(255, 80, 80,0.15)] mb-8">
 {dashboardTabs.map((tab) => (
 <button
 key={tab.id}
 onClick={() => setDashboardTab(tab.id)}
 className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
 dashboardTab === tab.id
 ? 'border-blood-600 text-white'
 : 'border-transparent text-zinc-500 hover:text-zinc-300'
 }`}
 >
 {tab.icon}
 {tab.label}
 </button>
 ))}
 </div>

 {/* Overview Tab */}
 {dashboardTab === 'overview' && (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
 {/* Quick Stats */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
 <div className="glass-card p-5">
 <div className="flex items-center gap-3 mb-3">
 <div className="p-2 bg-blood-950">
 <BookmarkCheck className="w-5 h-5 text-blood-500"/>
 </div>
 <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Saved Pages</span>
 </div>
 <p className="text-3xl font-black glass-text">{bookmarks.length}</p>
 </div>
 <div className="glass-card p-5">
 <div className="flex items-center gap-3 mb-3">
 <div className="p-2 bg-blood-950">
 <Target className="w-5 h-5 text-blood-500"/>
 </div>
 <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Investigations</span>
 </div>
 <p className="text-3xl font-black glass-text">{bookmarks.filter(b => b.type === 'investigation').length}</p>
 </div>
 <div className="glass-card p-5">
 <div className="flex items-center gap-3 mb-3">
 <div className="p-2 bg-[#200c00]">
 <Users className="w-5 h-5 text-zinc-400"/>
 </div>
 <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Entities</span>
 </div>
 <p className="text-3xl font-black glass-text">{bookmarks.filter(b => b.type === 'entity').length}</p>
 </div>
 </div>

 {/* Quick Actions */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
 <Link
 href="/submit"
 className="glass-card p-5 flex items-center gap-4 group hover:border-blood-700 transition-colors"
 >
 <div className="p-3 bg-blood-950 group-hover:bg-blood-900 transition-colors">
 <Send className="w-5 h-5 text-blood-500"/>
 </div>
 <div>
 <h3 className="glass-text font-bold text-sm">Submit Intelligence</h3>
 <p className="text-zinc-500 text-xs">Contribute to ongoing investigations</p>
 </div>
 </Link>
 <Link
 href="/workspaces/create"
 className="glass-card p-5 flex items-center gap-4 group hover:border-blood-700 transition-colors"
 >
 <div className="p-3 bg-[#200c00] group-hover:bg-zinc-700 transition-colors">
 <FileText className="w-5 h-5 text-zinc-400"/>
 </div>
 <div>
 <h3 className="glass-text font-bold text-sm">Create Workspace</h3>
 <p className="text-zinc-500 text-xs">Start a collaborative investigation</p>
 </div>
 </Link>
 </div>

 {/* Recent Saves */}
 <div className="mb-8">
 <div className="flex items-center justify-between mb-4">
 <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Recently Saved</h2>
 {bookmarks.length > 6 && (
 <button
 onClick={() => setDashboardTab('saved')}
 className="text-xs text-blood-500 hover:text-blood-400 transition-colors"
 >
 View All ({bookmarks.length})
 </button>
 )}
 </div>
 {recentBookmarks.length > 0 ? (
 <div className="space-y-2">
 {recentBookmarks.map((item) => (
 <Link
 key={item.id}
 href={item.href}
 className="flex items-center gap-4 p-3 glass-card hover:border-blood-800 transition-colors group"
 >
 <div className="p-1.5 bg-[#200c00]">
 {item.type === 'investigation' ? <Target className="w-3.5 h-3.5 text-blood-500"/> : <Users className="w-3.5 h-3.5 text-zinc-400"/>}
 </div>
 <div className="flex-1 min-w-0">
 <p className="text-white text-sm font-medium truncate group-hover:text-blood-500 transition-colors">{item.title}</p>
 <p className="text-zinc-600 text-xs">{item.category || item.type}</p>
 </div>
 <div className="text-zinc-600 text-xs whitespace-nowrap flex items-center gap-1">
 <Clock className="w-3 h-3"/>
 {formatDistanceToNow(new Date(item.savedAt), { addSuffix: true })}
 </div>
 </Link>
 ))}
 </div>
 ) : (
 <div className="glass-card p-8 text-center">
 <Bookmark className="w-10 h-10 text-zinc-700 mx-auto mb-3"/>
 <p className="text-zinc-400 text-sm mb-1">No saved pages yet</p>
 <p className="text-zinc-600 text-xs">Click Save on any investigation to bookmark it here</p>
 </div>
 )}
 </div>

 {/* Account Info */}
 <div className="border border-[rgba(255, 80, 80,0.15)] bg-[#1c0a00] p-4">
 <div className="flex items-start gap-3">
 <Shield className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold glass-text uppercase tracking-wider mb-1">Your Data</h3>
 <p className="text-xs text-zinc-500 leading-relaxed">
 All account data (including saved pages) is stored locally in your browser. Nothing is transmitted to our servers.
 Member since {new Date(currentUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
 </p>
 </div>
 </div>
 </div>
 </motion.div>
 )}

 {/* Saved Pages Tab */}
 {dashboardTab === 'saved' && (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
 {bookmarks.length > 0 ? (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {bookmarks.map((item) => (
 <div key={item.id} className="glass-card p-4 group flex items-start gap-3">
 <div className="p-1.5 bg-[#200c00] mt-0.5">
 {item.type === 'investigation' ? <Target className="w-4 h-4 text-blood-500"/> : <Users className="w-4 h-4 text-zinc-400"/>}
 </div>
 <div className="flex-1 min-w-0">
 <Link href={item.href} className="block group/link">
 <h3 className="text-white text-sm font-semibold group-hover/link:text-blood-500 transition-colors truncate">{item.title}</h3>
 </Link>
 <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
 {item.severity && (
 <span className="uppercase font-bold text-blood-500/70">{item.severity}</span>
 )}
 {item.category && <span>{item.category}</span>}
 <span className="flex items-center gap-1">
 <Clock className="w-3 h-3"/>
 {formatDistanceToNow(new Date(item.savedAt), { addSuffix: true })}
 </span>
 </div>
 </div>
 <div className="flex items-center gap-1">
 <Link href={item.href} className="p-1.5 text-zinc-600 hover:text-white transition-colors">
 <ExternalLink className="w-3.5 h-3.5"/>
 </Link>
 <button
 onClick={() => removeBookmark(item.href)}
 className="p-1.5 text-zinc-600 hover:text-blood-500 opacity-0 group-hover:opacity-100 transition-all"
 >
 <Trash2 className="w-3.5 h-3.5"/>
 </button>
 </div>
 </div>
 ))}
 </div>
 ) : (
 <div className="text-center py-16">
 <Bookmark className="w-16 h-16 text-zinc-700 mx-auto mb-4"/>
 <h3 className="text-xl font-semibold text-white mb-2">No saved pages</h3>
 <p className="text-zinc-400 text-sm mb-6">Click Save on any investigation to add it here</p>
 <Link
 href="/investigations"
 className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(255, 60, 60,0.18)] text-zinc-300 hover:border-blood-700 hover:text-white text-sm transition-colors"
 >
 <Target className="w-4 h-4"/>
 Browse Investigations
 </Link>
 </div>
 )}
 </motion.div>
 )}

 {/* Account Tab */}
 {dashboardTab === 'account' && (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-lg">
 <div className="glass-card p-6 mb-6">
 <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Account Details</h2>
 <div className="space-y-4">
 <div className="flex items-center justify-between py-2 border-b border-[rgba(255, 80, 80,0.15)]">
 <span className="text-zinc-500 text-sm">Email</span>
 <span className="text-white text-sm">{currentUser.email}</span>
 </div>
 <div className="flex items-center justify-between py-2 border-b border-[rgba(255, 80, 80,0.15)]">
 <span className="text-zinc-500 text-sm">Status</span>
 <span className="flex items-center gap-1.5 text-blood-500 text-sm">
 <CheckCircle className="w-3.5 h-3.5"/>
 Verified
 </span>
 </div>
 <div className="flex items-center justify-between py-2 border-b border-[rgba(255, 80, 80,0.15)]">
 <span className="text-zinc-500 text-sm">Member Since</span>
 <span className="text-white text-sm">{new Date(currentUser.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
 </div>
 <div className="flex items-center justify-between py-2 border-b border-[rgba(255, 80, 80,0.15)]">
 <span className="text-zinc-500 text-sm">Saved Pages</span>
 <span className="text-white text-sm">{bookmarks.length}</span>
 </div>
 <div className="flex items-center justify-between py-2">
 <span className="text-zinc-500 text-sm">Storage</span>
 <span className="text-zinc-400 text-sm">Browser Local Storage</span>
 </div>
 </div>
 </div>

 <div className="space-y-3">
 <button
 onClick={() => { signOut(); setMode('signin'); setSuccess('Signed out successfully.'); }}
 className="w-full px-4 py-3 border border-[rgba(255, 80, 80,0.15)] hover:border-zinc-600 text-zinc-400 hover:text-white text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
 >
 <LogOut className="w-4 h-4"/>
 Sign Out
 </button>
 <button
 onClick={() => {
 if (confirm('Are you sure? This permanently deletes your account and all saved pages. No data is stored on our servers.')) {
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

 {/* Zero Data Banner */}
 <div className="mt-6 border border-[rgba(255, 80, 80,0.15)] bg-[#1c0a00] p-4">
 <div className="flex items-start gap-3">
 <Shield className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold glass-text uppercase tracking-wider mb-1">Zero Data Collection</h3>
 <p className="text-xs text-zinc-500 leading-relaxed">
 Your account exists only in your browser&apos;s local storage. We do not collect, store, transmit, or process any personal data on our servers. No cookies, no analytics, no tracking. Clearing your browser data removes your account entirely.
 </p>
 </div>
 </div>
 </div>
 </motion.div>
 )}
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
 className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-8"
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
 <h1 className="text-xl font-black glass-text uppercase tracking-wider">
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
 <div className="flex items-start gap-2 p-3 border border-[rgba(255, 80, 80,0.15)] bg-[#1c0a00] mb-6">
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
 className="w-full pl-10 pr-4 py-3 bg-[#1c0a00] border border-[rgba(255, 60, 60,0.18)] text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
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
 className="w-full pl-10 pr-12 py-3 bg-[#1c0a00] border border-[rgba(255, 60, 60,0.18)] text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
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
 className="w-full pl-10 pr-4 py-3 bg-[#1c0a00] border border-[rgba(255, 60, 60,0.18)] text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm"
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
 className="w-full pl-10 pr-4 py-3 bg-[#1c0a00] border border-[rgba(255, 60, 60,0.18)] text-white placeholder-zinc-600 focus:border-blood-700 focus:outline-none transition-colors text-sm font-mono tracking-widest uppercase"
 placeholder="Enter code"
 required
 autoFocus
 />
 </div>
 </div>

 {/* Show verification code hint */}
 {(showVerificationHint || getVerificationCode(email || currentUser?.email || '')) && (
 <div className="p-3 border border-blood-800/60 bg-blood-950">
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
 <div className="p-3 border border-blood-900/50 bg-blood-950">
 <p className="text-sm text-blood-400">{error}</p>
 </div>
 )}
 {success && (
 <div className="p-3 border border-blood-900/50 bg-blood-950">
 <p className="text-sm text-blood-400">{success}</p>
 </div>
 )}

 {/* Submit */}
 <button
 type="submit"
 disabled={loading}
 className="w-full px-4 py-3 bg-blood-700 hover:bg-blood-600 disabled:opacity-50 glass-text font-bold uppercase tracking-wider transition-colors text-sm"
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
 <div className="mt-6 pt-4 border-t border-[rgba(255, 80, 80,0.15)] text-center">
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
 className="mt-6 border border-[rgba(255, 80, 80,0.15)] bg-[#1c0a00] p-4"
 >
 <div className="flex items-start gap-3">
 <Shield className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold glass-text uppercase tracking-wider mb-1">Zero Data Collection Policy</h3>
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
