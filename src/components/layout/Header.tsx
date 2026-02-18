"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, AlertTriangle, Zap } from "lucide-react";
import BleedingPyramidLogo from "@/components/ui/BleedingPyramidLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/investigations", label: "Investigations" },
    { href: "/workspaces", label: "Workspaces" },
    { href: "/entities/agencies", label: "Agencies" },
    { href: "/entities/corporations", label: "Corporations" },
    { href: "/entities/individuals", label: "Individuals" },
    { href: "/timeline", label: "Timeline" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-blood-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Bleeding Pyramid Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <BleedingPyramidLogo size={55} showWords={false} />
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-black tracking-tight text-white leading-tight relative">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blood-500 via-blood-600 to-blood-700 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(185,28,28,0.5)]">ARK</span>
                  <span className="bg-gradient-to-r from-blood-600 via-blood-700 to-blood-800 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(127,29,29,0.5)]">HIVE</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]" style={{ animationDuration: '3s' }}>ARKHIVE</span>
                </span>
                <sup className="text-blood-500 text-[10px] lg:text-xs font-bold drop-shadow-[0_0_6px_rgba(185,28,28,0.6)]">®</sup>
              </h1>
              <span className="text-[10px] lg:text-xs font-semibold tracking-[0.25em] text-blood-500/90 uppercase drop-shadow-[0_0_8px_rgba(185,28,28,0.4)]">
                Investigation Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white hover:bg-blood-900/20 border border-transparent hover:border-blood-700/30 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search investigations..."
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-64 px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg text-sm text-white placeholder-dark-400 focus:outline-none focus:border-blood-700 focus:ring-1 focus:ring-blood-700/30 transition-all duration-300"
                  autoFocus
                />
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-dark-400 hover:text-blood-500 hover:bg-blood-900/20 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Premium Submit Button */}
            <Link
              href="/submit"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blood-800 hover:bg-blood-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blood-950/50 hover:shadow-blood-900/60 border border-blood-700/50"
            >
              <Zap className="w-4 h-4" />
              <span>Submit Intel</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-dark-400 hover:text-white hover:bg-dark-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-zinc-800">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-dark-300 hover:text-white hover:bg-blood-900/20 rounded-lg transition-all duration-200 animate-slide-in border border-transparent hover:border-blood-700/30"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/submit"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 mt-4 bg-blood-800 text-white font-semibold rounded-lg shadow-lg shadow-blood-950/50"
            >
              <Zap className="w-4 h-4" />
              <span>Submit Intel</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
