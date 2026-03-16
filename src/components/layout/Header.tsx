"use client";

import Link from"next/link";
import { useState, useEffect } from"react";
import { usePathname } from"next/navigation";
import { Menu, X, Search, Zap, UserPlus } from"lucide-react";
import BleedingPyramidLogo from"@/components/ui/BleedingPyramidLogo";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isSearchOpen, setIsSearchOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 10);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 const navLinks = [
 { href:"/", label:"Home"},
 { href:"/investigations", label:"Investigations"},
 { href:"/workspaces", label:"Workspaces"},
 { href:"/entities/agencies", label:"Agencies"},
 { href:"/entities/corporations", label:"Corporations"},
 { href:"/entities/individuals", label:"Individuals"},
 { href:"/entities/organizations", label:"Organizations"},
 { href:"/timeline", label:"Timeline"},
 { href:"/about", label:"About"},
 ];

 const isActive = (href: string) =>
 href ==="/"? pathname ==="/": pathname.startsWith(href);

 return (
 <header
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 scrolled
 ?"bg-gradient-to-b from-[rgba(0,30,80,0.65)] to-[rgba(0,15,45,0.80)] border-b border-[rgba(60,160,255,0.2)] shadow-[0_4px_30px_rgba(0,100,220,0.1)] gloss"
 :"bg-gradient-to-b from-[rgba(0,20,55,0.40)] to-[rgba(0,10,35,0.55)] border-b border-blood-900/20"
 }`}
 >
 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood-500/80 to-transparent"/>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16 lg:h-20">
 {/* Logo */}
 <Link href="/"className="flex items-center gap-3 group">
 <BleedingPyramidLogo size={55} showWords={false} />
 <div className="hidden sm:block">
 <h1 className="text-lg lg:text-xl font-black tracking-tight text-white leading-tight relative">
 <span className="relative inline-block glass-text-hero">
 ARKHIVE
 </span>
 <sup className="text-blood-500 text-[10px] lg:text-xs font-bold drop-shadow-[0_0_6px_rgba(0,85,184,0.6)]">®</sup>
 </h1>
 <span className="text-[10px] lg:text-xs font-semibold tracking-[0.25em] glass-text-subtle uppercase drop-shadow-[0_0_8px_rgba(0,85,184,0.4)]">
 Investigation Platform
 </span>
 </div>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex items-center gap-0.5">
 {navLinks.map((link) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-transparent ${
 active
 ?"text-blood-400 bg-blood-900/20 border-blood-800/40"
 :"text-zinc-400 hover:text-white hover:bg-blood-900/10 hover:border-blood-800/20"
 }`}
 >
 {link.label}
 {active && (
 <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-blood-500"/>
 )}
 </Link>
 );
 })}
 </nav>

 {/* Actions */}
 <div className="flex items-center gap-2">
 {/* Search */}
 <div className="relative">
 {isSearchOpen && (
 <input
 type="text"
 placeholder="Search investigations..."
 className="absolute right-0 top-1/2 -translate-y-1/2 w-64 px-4 py-2 bg-black border border-blood-900/50 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 focus:ring-1 focus:ring-blood-700/30 transition-all duration-300"
 autoFocus
 />
 )}
 <button
 onClick={() => setIsSearchOpen(!isSearchOpen)}
 className="p-2 text-zinc-500 hover:text-blood-500 hover:bg-blood-900/10 transition-colors"
 >
 <Search className="w-5 h-5"/>
 </button>
 </div>

 {/* Submit Intel */}
 <Link
 href="/submit"
 className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[rgba(0,60,140,0.5)] to-[rgba(0,30,80,0.7)] hover:from-[rgba(0,80,180,0.6)] hover:to-[rgba(0,40,100,0.8)] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[rgba(60,160,255,0.3)] hover:border-[rgba(60,160,255,0.5)] shadow-[0_0_15px_rgba(0,100,220,0.15)] hover:shadow-[0_0_25px_rgba(0,100,220,0.3)] gloss-hover"
 >
 <Zap className="w-3.5 h-3.5"/>
 <span>Submit Intel</span>
 </Link>

 {/* Contribute */}
 <Link
 href="/contributor"
 className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white border border-[rgba(60,160,255,0.12)] hover:border-blood-800/50 hover:bg-blood-900/10 transition-all duration-200"
 >
 <UserPlus className="w-3.5 h-3.5"/>
 <span>Contribute</span>
 </Link>

 {/* Mobile Menu Toggle */}
 <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="lg:hidden p-2 text-zinc-500 hover:text-white hover:bg-blood-900/10 transition-colors"
 >
 {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Menu */}
 {isMenuOpen && (
 <div className="lg:hidden bg-[rgba(0,8,25,0.80)] border-t border-blood-900/30">
 <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
 {navLinks.map((link, index) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setIsMenuOpen(false)}
 className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 animate-slide-in border-l-2 ${
 active
 ?"text-blood-400 bg-blood-900/15 border-blood-500"
 :"text-zinc-400 hover:text-white hover:bg-blood-900/10 border-transparent hover:border-blood-700/50"
 }`}
 style={{ animationDelay: `${index * 50}ms` }}
 >
 {link.label}
 </Link>
 );
 })}
 <Link
 href="/submit"
 onClick={() => setIsMenuOpen(false)}
 className="flex items-center gap-2 px-4 py-3 mt-3 bg-blood-800 glass-text font-bold uppercase tracking-wider text-sm border border-blood-700/50"
 >
 <Zap className="w-4 h-4"/>
 <span>Submit Intel</span>
 </Link>
 <Link
 href="/contributor"
 onClick={() => setIsMenuOpen(false)}
 className="flex items-center gap-2 px-4 py-3 mt-1 border border-[rgba(60,160,255,0.12)] text-zinc-400 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
 >
 <UserPlus className="w-4 h-4"/>
 <span>Contribute</span>
 </Link>
 </nav>
 </div>
 )}
 </header>
 );
}
