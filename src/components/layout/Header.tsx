"use client";

import Link from"next/link";
import { useState, useEffect, useRef } from"react";
import { usePathname, useRouter } from"next/navigation";
import { Menu, X, Search, Zap, UserPlus, ChevronDown } from"lucide-react";
import BleedingPyramidLogo from"@/components/ui/BleedingPyramidLogo";
import InvestigationsMegaMenu from"./InvestigationsMegaMenu";

function NavDropdown({ label, items, isActive }: { label: string; items: { href: string; label: string }[]; isActive: (href: string) => boolean }) {
 const [open, setOpen] = useState(false);
 const ref = useRef<HTMLDivElement>(null);
 const anyActive = items.some(i => isActive(i.href));

 useEffect(() => {
 const handler = (e: MouseEvent) => {
 if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
 };
 document.addEventListener("mousedown", handler);
 return () => document.removeEventListener("mousedown", handler);
 }, []);

 return (
 <div ref={ref} className="relative">
 <button
 onClick={() => setOpen(!open)}
 className={`relative flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-transparent ${
 anyActive
 ?"text-zinc-400 bg-zinc-800 border-zinc-800"
 :"text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-800"
 }`}
 >
 {label}
 <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
 {anyActive && <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-zinc-600"/>}
 </button>
 {open && (
 <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-[#0d0d0d] border border-zinc-800 shadow-xl z-50">
 {items.map(item => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setOpen(false)}
 className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
 isActive(item.href)
 ?"text-white bg-zinc-800"
 :"text-zinc-400 hover:text-white hover:bg-zinc-800/80"
 }`}
 >
 {item.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 );
}

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isSearchOpen, setIsSearchOpen] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();
 const router = useRouter();

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 10);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 const navLinks = [
 { href:"/", label:"Home"},
 { href:"/statutes", label:"Statutes"},
 { href:"/money-trail", label:"Money Trail"},
 { href:"/convictions", label:"Convictions"},
 { href:"/evidence", label:"Evidence"},
 { href:"/network", label:"Network"},
 { href:"/themes", label:"Themes"},
 { href:"/figures", label:"Figures"},
 { href:"/geography", label:"Geography"},
 { href:"/workspaces", label:"Workspaces"},
 { href:"/entities/agencies", label:"Agencies"},
 { href:"/entities/corporations", label:"Corporations"},
 { href:"/entities/individuals", label:"Individuals"},
 { href:"/entities/organizations", label:"Organizations"},
 { href:"/timeline", label:"Timeline"},
 { href:"/about", label:"About"},
 ];

 const topLinks = [
 { href:"/statutes", label:"Statutes"},
 { href:"/money-trail", label:"Money Trail"},
 { href:"/convictions", label:"Convictions"},
 { href:"/evidence", label:"Evidence"},
 { href:"/network", label:"Network"},
 { href:"/timeline", label:"Timeline"},
 ];

 const entitiesLinks = [
 { href:"/entities/agencies", label:"Agencies"},
 { href:"/entities/corporations", label:"Corporations"},
 { href:"/entities/individuals", label:"Individuals"},
 { href:"/entities/organizations", label:"Organizations"},
 { href:"/figures", label:"Figures"},
 ];

 const moreLinks = [
 { href:"/themes", label:"Themes"},
 { href:"/geography", label:"Geography"},
 { href:"/workspaces", label:"Workspaces"},
 { href:"/about", label:"About"},
 ];

 const isActive = (href: string) =>
 href ==="/"? pathname ==="/": pathname.startsWith(href);

 return (
 <header
 role="banner"
 aria-label="ArkHive main header"
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 scrolled
 ?"bg-gradient-to-b from-[#0d0d0d] to-[#080808] border-b border-[rgba(255,255,255,0.25)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
 :"bg-gradient-to-b from-[#0d0d0d] to-[#080808] border-b border-[rgba(255,255,255,0.08)]"
 }`}
 >
 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent"/>

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
 <sup className="text-zinc-300 text-[10px] lg:text-xs font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">®</sup>
 </h1>
 <span className="text-[10px] lg:text-xs font-semibold tracking-[0.25em] glass-text-subtle uppercase drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
 Investigation Platform
 </span>
 </div>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
 {/* Home link */}
 <Link
 href="/"
 className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-transparent ${
 pathname ==="/"
 ?"text-zinc-400 bg-zinc-800 border-zinc-800"
 :"text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-800"
 }`}
 >
 Home
 {pathname ==="/" && (
 <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-zinc-600"/>
 )}
 </Link>
 
 {/* Investigations Mega Menu */}
 <InvestigationsMegaMenu />
 
 {/* Top-level links */}
 {topLinks.map((link) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-transparent whitespace-nowrap ${
 active
 ?"text-zinc-400 bg-zinc-800 border-zinc-800"
 :"text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-800"
 }`}
 >
 {link.label}
 {active && (
 <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-zinc-600"/>
 )}
 </Link>
 );
 })}

 {/* Entities dropdown */}
 <NavDropdown label="Entities" items={entitiesLinks} isActive={isActive} />

 {/* More dropdown */}
 <NavDropdown label="More" items={moreLinks} isActive={isActive} />
 </nav>

 {/* Actions */}
 <div className="flex items-center gap-2">
 {/* Search */}
 <div className="relative">
 {isSearchOpen && (
 <input
 type="text"
 placeholder="Search investigations..."
 aria-label="Search investigations"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 onKeyDown={(e) => {
 if (e.key === "Enter" && searchQuery.trim()) {
 router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
 setIsSearchOpen(false);
 setSearchQuery("");
 }
 if (e.key === "Escape") {
 setIsSearchOpen(false);
 setSearchQuery("");
 }
 }}
 className="absolute right-0 top-1/2 -translate-y-1/2 w-64 px-4 py-2 bg-black border border-zinc-800/50 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-600/30 transition-all duration-300 rounded-lg"
 autoFocus
 />
 )}
 <button
 onClick={() => setIsSearchOpen(!isSearchOpen)}
 aria-label={isSearchOpen ? "Close search" : "Open search"}
 aria-expanded={isSearchOpen}
 className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800/80 transition-colors"
 >
 <Search className="w-5 h-5"/>
 </button>
 </div>

 {/* Submit Intel */}
 <Link
 href="/submit"
 className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#1a1a1a] to-[#111111] hover:from-[#222222] hover:to-[#111111] text-zinc-300 text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[rgba(255,255,255,0.28)] hover:border-[rgba(255,255,255,0.50)] shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] rounded-lg"
 >
 <Zap className="w-3.5 h-3.5"/>
 <span>Submit Intel</span>
 </Link>

 {/* Contribute */}
 <Link
 href="/contributor"
 className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white border border-[rgba(255,255,255,0.15)] hover:border-zinc-700/50 hover:bg-zinc-800/80 transition-all duration-200 rounded-lg"
 >
 <UserPlus className="w-3.5 h-3.5"/>
 <span>Contribute</span>
 </Link>

 {/* Mobile Menu Toggle */}
 <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 aria-label={isMenuOpen ? "Close menu" : "Open menu"}
 aria-expanded={isMenuOpen}
 aria-controls="mobile-menu"
 className="lg:hidden p-2 text-zinc-500 hover:text-white hover:bg-zinc-800/80 transition-colors"
 >
 {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Menu */}
 {isMenuOpen && (
 <div id="mobile-menu" className="lg:hidden bg-[rgba(0,8,25,0.80)] border-t border-zinc-800">
 <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobile navigation">
 {navLinks.map((link, index) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setIsMenuOpen(false)}
 className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 animate-slide-in border-l-2 ${
 active
 ?"text-zinc-400 bg-zinc-900 border-zinc-600"
 :"text-zinc-400 hover:text-white hover:bg-zinc-800/80 border-transparent hover:border-zinc-700"
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
 className="flex items-center gap-2 px-4 py-3 mt-3 bg-zinc-800 glass-text font-bold uppercase tracking-wider text-sm border border-zinc-700"
 >
 <Zap className="w-4 h-4"/>
 <span>Submit Intel</span>
 </Link>
 <Link
 href="/contributor"
 onClick={() => setIsMenuOpen(false)}
 className="flex items-center gap-2 px-4 py-3 mt-1 border border-[rgba(255,255,255,0.15)] text-zinc-400 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
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
