"use client";

import Link from"next/link";
import { useState, useEffect, useRef } from"react";
import { usePathname, useRouter } from"next/navigation";
import { Menu, X, Search, Zap, UserPlus, ChevronDown } from"lucide-react";
import BleedingPyramidLogo from"@/components/ui/BleedingPyramidLogo";

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
 className={`relative flex items-center gap-1 px-2.5 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wide transition-all duration-200 rounded-lg border ${
 anyActive
 ?"text-red-400 bg-[rgba(184,0,0,0.08)] border-[rgba(184,0,0,0.30)]"
 :"text-zinc-400 hover:text-white hover:bg-[rgba(184,0,0,0.06)] border-transparent hover:border-[rgba(184,0,0,0.25)]"
 }`}
 >
 {label}
 <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
 {anyActive && <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-[rgba(184,0,0,0.40)]"/>}
 </button>
 {open && (
 <div className="absolute top-full left-0 mt-1.5 min-w-[180px] bg-[#050505] border border-[rgba(184,0,0,0.25)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(184,0,0,0.08)] z-50 overflow-hidden">
 {items.map(item => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setOpen(false)}
 className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
 isActive(item.href)
 ?"text-red-400 bg-[rgba(184,0,0,0.08)]"
 :"text-zinc-400 hover:text-white hover:bg-[rgba(184,0,0,0.06)]"
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
 { href:"/investigations", label:"Investigations"},
 { href:"/statutes", label:"Statutes"},
 { href:"/money-trail", label:"Money Trail"},
 { href:"/convictions", label:"Convictions"},
 { href:"/evidence", label:"Evidence"},
 { href:"/network", label:"Network"},
 { href:"/themes", label:"Themes"},
 { href:"/geography", label:"Geography"},
 { href:"/workspaces", label:"Workspaces"},
 { href:"/entities/agencies", label:"Agencies"},
 { href:"/entities/corporations", label:"Corporations"},
 { href:"/entities/individuals", label:"Individuals"},
 { href:"/entities/organizations", label:"Organizations"},
 { href:"/timeline", label:"Timeline"},
 { href:"/take-action", label:"Take Action"},
 { href:"/about", label:"About"},
 ];

 const topLinks = [
 { href:"/investigations", label:"Investigations"},
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
 ];

 const moreLinks = [
 { href:"/themes", label:"Themes"},
 { href:"/geography", label:"Geography"},
 { href:"/workspaces", label:"Workspaces"},
 { href:"/take-action", label:"Take Action"},
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
 ?"bg-gradient-to-b from-[#060606] to-[#020202] border-b border-[rgba(184,0,0,0.30)] shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(184,0,0,0.06)]"
 :"bg-gradient-to-b from-[#060606] to-[#020202] border-b border-[rgba(184,0,0,0.18)]"
 }`}
 >
 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(184,0,0,0.35)] to-transparent"/>

 <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6">
 <div className="flex items-center justify-between h-16 xl:h-20">
 {/* Logo */}
 <Link href="/"className="flex items-center gap-2 group">
 <BleedingPyramidLogo size={44} showWords={false} />
 <div className="hidden sm:block">
 <h1 className="text-lg xl:text-xl font-black tracking-tight text-white leading-tight relative">
 <span className="relative inline-block glass-text-hero">
 ARKHIVE
 </span>
 <sup className="text-red-400/60 text-[10px] xl:text-xs font-bold drop-shadow-[0_0_6px_rgba(184,0,0,0.3)]">&reg;</sup>
 </h1>
 <span className="text-[10px] xl:text-xs font-semibold tracking-[0.25em] glass-text-subtle uppercase drop-shadow-[0_0_6px_rgba(184,0,0,0.2)]">
 Investigation Platform
 </span>
 </div>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 flex-shrink-0" aria-label="Main navigation">
 {/* Home link */}
 <Link
 href="/"
 className={`relative px-2.5 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wide transition-all duration-200 rounded-lg border ${
 pathname ==="/"
 ?"text-red-400 bg-[rgba(184,0,0,0.08)] border-[rgba(184,0,0,0.30)]"
 :"text-zinc-400 hover:text-white hover:bg-[rgba(184,0,0,0.06)] border-transparent hover:border-[rgba(184,0,0,0.25)]"
 }`}
 >
 Home
 {pathname ==="/" && (
 <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-[rgba(184,0,0,0.40)]"/>
 )}
 </Link>
 
 {/* Top-level links - Investigations is now a direct link */}
 {topLinks.map((link) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`relative px-2.5 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wide transition-all duration-200 rounded-lg border whitespace-nowrap ${
 active
 ?"text-red-400 bg-[rgba(184,0,0,0.08)] border-[rgba(184,0,0,0.30)]"
 :"text-zinc-400 hover:text-white hover:bg-[rgba(184,0,0,0.06)] border-transparent hover:border-[rgba(184,0,0,0.25)]"
 }`}
 >
 {link.label}
 {active && (
 <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-[rgba(184,0,0,0.40)]"/>
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
 <div className="flex items-center gap-2 flex-shrink-0 ml-2">
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
 className="absolute right-0 top-1/2 -translate-y-1/2 w-64 px-4 py-2 bg-[#020202] border border-[rgba(184,0,0,0.25)] rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[rgba(184,0,0,0.45)] focus:ring-1 focus:ring-[rgba(184,0,0,0.15)] transition-all duration-300"
 autoFocus
 />
 )}
 <button
 onClick={() => setIsSearchOpen(!isSearchOpen)}
 aria-label={isSearchOpen ? "Close search" : "Open search"}
 aria-expanded={isSearchOpen}
 className="p-2 text-zinc-500 hover:text-red-400 hover:bg-[rgba(184,0,0,0.06)] rounded-lg transition-colors"
 >
 <Search className="w-5 h-5"/>
 </button>
 </div>

 {/* Submit Intel */}
 <Link
 href="/submit"
 className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#0a0000] to-[#050505] hover:from-[#120000] hover:to-[#080000] text-red-300 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl border border-[rgba(184,0,0,0.35)] hover:border-[rgba(184,0,0,0.55)] shadow-[0_0_15px_rgba(184,0,0,0.10)] hover:shadow-[0_0_25px_rgba(184,0,0,0.20)]"
 >
 <Zap className="w-3.5 h-3.5"/>
 <span>Submit Intel</span>
 </Link>

 {/* Contribute */}
 <Link
 href="/contributor"
 className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-xl border border-[rgba(184,0,0,0.20)] hover:border-[rgba(184,0,0,0.40)] hover:bg-[rgba(184,0,0,0.06)] transition-all duration-200"
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
 className="xl:hidden p-2 text-zinc-500 hover:text-red-400 hover:bg-[rgba(184,0,0,0.06)] rounded-lg transition-colors"
 >
 {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Menu */}
 {isMenuOpen && (
 <div id="mobile-menu" className="xl:hidden bg-[#020202] border-t border-[rgba(184,0,0,0.20)]">
 <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5" aria-label="Mobile navigation">
 {navLinks.map((link, index) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setIsMenuOpen(false)}
 className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 animate-slide-in rounded-lg border-l-2 ${
 active
 ?"text-red-400 bg-[rgba(184,0,0,0.06)] border-[rgba(184,0,0,0.40)]"
 :"text-zinc-400 hover:text-white hover:bg-[rgba(184,0,0,0.04)] border-transparent hover:border-[rgba(184,0,0,0.25)]"
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
 className="flex items-center gap-2 px-4 py-3 mt-3 bg-[#0a0000] glass-text font-bold uppercase tracking-wider text-sm rounded-xl border border-[rgba(184,0,0,0.30)]"
 >
 <Zap className="w-4 h-4"/>
 <span>Submit Intel</span>
 </Link>
 <Link
 href="/contributor"
 onClick={() => setIsMenuOpen(false)}
 className="flex items-center gap-2 px-4 py-3 mt-1 rounded-xl border border-[rgba(184,0,0,0.20)] text-zinc-400 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors"
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
