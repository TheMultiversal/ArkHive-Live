import Link from"next/link";
import { Eye, Twitter, Mail, ExternalLink, Skull } from"lucide-react";

export default function Footer() {
 const currentYear = new Date().getFullYear();

 const footerLinks = {
 investigations: [
 { href:"/investigations", label:"All Investigations"},
 { href:"/investigations?category=Public Health", label:"Public Health"},
 { href:"/investigations?category=Environment", label:"Environment"},
 { href:"/investigations?category=Technology & Privacy", label:"Surveillance"},
 { href:"/investigations?category=Corruption & Ethics", label:"Corruption"},
 ],
 entities: [
 { href:"/entities/agencies", label:"Government Agencies"},
 { href:"/entities/corporations", label:"Corporations"},
 { href:"/entities/individuals", label:"Key Individuals"},
 { href:"/entities/organizations", label:"Organizations"},
 ],
 resources: [
 { href:"/timeline", label:"Timeline"},
 { href:"/archives", label:"Archives"},
 { href:"/documents", label:"Documents"},
 { href:"/sources", label:"Sources"},
 { href:"/methodology", label:"Methodology"},
 { href:"/search", label:"Search"},
 { href:"/tags", label:"Tags"},
 ],
 about: [
 { href:"/about", label:"About Us"},
 { href:"/faq", label:"FAQ"},
 { href:"/submit", label:"Submit Information"},
 { href:"/contact", label:"Contact"},
 { href:"/privacy", label:"Privacy Policy"},
 { href:"/terms", label:"Terms of Service"},
 ],
 platform: [
 { href:"/recent", label:"Recent"},
 { href:"/archives", label:"Saved Pages"},
 { href:"/contributor", label:"Dashboard"},
 { href:"/offline", label:"Offline Access"},
 ],
 };

 return (
 <footer className="relative z-20 mt-auto border-t border-[rgba(255, 80, 80,0.15)] bg-gradient-to-b from-[#200c00] to-[#120600] gloss">
 {/* Top accent line */}
 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood-600/50 to-transparent"/>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Main Footer Content */}
 <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
 {/* Brand */}
 <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
 <Link href="/"className="flex items-center gap-3 mb-4 group">
 <div className="relative">
 <div className="relative w-10 h-10 bg-gradient-to-br from-[#502000] to-[#381800] flex items-center justify-center border border-[rgba(255, 80, 80,0.25)]" style={{boxShadow: 'inset 0 1px 0 rgba(255,120,120,0.15)'}}>
 <Eye className="w-5 h-5 text-white"/>
 </div>
 </div>
 <div>
 <h3 className="text-lg font-black tracking-tight glass-text-hero">ARKHIVE</h3>
 <p className="text-[10px] tracking-[0.15em] text-blood-600/70 uppercase">Truth Archive</p>
 </div>
 </Link>
 <p className="text-sm glass-text-muted mb-4 max-w-xs leading-relaxed">
 Documenting and exposing institutional actions that harm public health, 
 safety, and civil liberties.
 </p>
 <div className="flex items-center gap-1">
 <a
 href="https://x.com/ArkHiveLives"
 target="_blank"
 rel="noopener noreferrer"
 className="p-2.5 text-zinc-600 hover:text-blood-500 hover:bg-blood-950 border border-transparent hover:border-blood-800 transition-all"
 >
 <Twitter className="w-4 h-4"/>
 </a>
 <a
 href="mailto:tips@arkhive.org"
 className="p-2.5 text-zinc-600 hover:text-blood-500 hover:bg-blood-950 border border-transparent hover:border-blood-800 transition-all"
 >
 <Mail className="w-4 h-4"/>
 </a>
 </div>
 </div>

 {/* Links */}
 <div>
 <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
 <span className="w-1 h-3 bg-blood-600"/>
 Investigations
 </h4>
 <ul className="space-y-2">
 {footerLinks.investigations.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-zinc-500 hover:text-blood-500 transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
 <span className="w-1 h-3 bg-blood-600"/>
 Entities
 </h4>
 <ul className="space-y-2">
 {footerLinks.entities.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-zinc-500 hover:text-blood-500 transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
 <span className="w-1 h-3 bg-blood-600"/>
 Resources
 </h4>
 <ul className="space-y-2">
 {footerLinks.resources.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-zinc-500 hover:text-blood-500 transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
 <span className="w-1 h-3 bg-blood-600"/>
 About
 </h4>
 <ul className="space-y-2">
 {footerLinks.about.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-zinc-500 hover:text-blood-500 transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
 <span className="w-1 h-3 bg-blood-600"/>
 Platform
 </h4>
 <ul className="space-y-2">
 {footerLinks.platform.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-sm text-zinc-500 hover:text-blood-500 transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Bottom Bar */}
 <div className="py-6 border-t border-blood-900 flex flex-col sm:flex-row items-center justify-between gap-4">
 <p className="text-xs text-zinc-600 uppercase tracking-wider">
 © {currentYear} ArkHive. All information is provided for educational purposes.
 </p>
 <div className="flex items-center gap-4">
 <span className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-2">
 <span className="relative flex h-1.5 w-1.5">
 <span className="animate-ping absolute inline-flex h-full w-full bg-blood-500 opacity-75"></span>
 <span className="relative inline-flex h-1.5 w-1.5 bg-blood-600"></span>
 </span>
 Documenting the truth
 </span>
 </div>
 </div>
 </div>
 </footer>
 );
}
