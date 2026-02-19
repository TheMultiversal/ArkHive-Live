import Link from "next/link";
import { Eye, Github, Twitter, Mail, ExternalLink, Skull } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    investigations: [
      { href: "/investigations", label: "All Investigations" },
      { href: "/investigations?category=health", label: "Public Health" },
      { href: "/investigations?category=environment", label: "Environment" },
      { href: "/investigations?category=surveillance", label: "Surveillance" },
      { href: "/investigations?category=corruption", label: "Corruption" },
    ],
    entities: [
      { href: "/entities/agencies", label: "Government Agencies" },
      { href: "/entities/corporations", label: "Corporations" },
      { href: "/entities/individuals", label: "Key Individuals" },
      { href: "/entities/organizations", label: "Organizations" },
    ],
    resources: [
      { href: "/timeline", label: "Timeline" },
      { href: "/documents", label: "Documents" },
      { href: "/sources", label: "Sources" },
      { href: "/methodology", label: "Methodology" },
    ],
    about: [
      { href: "/about", label: "About Us" },
      { href: "/submit", label: "Submit Information" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  };

  return (
    <footer className="relative z-20 mt-auto border-t border-blood-900/30 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-blood-600/20 blur-md group-hover:blur-lg transition-all" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blood-700 to-blood-900 flex items-center justify-center shadow-lg shadow-blood-900/50">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight bg-gradient-to-r from-blood-500 to-blood-700 bg-clip-text text-transparent">ARKHIVE</h3>
                <p className="text-[10px] tracking-[0.15em] text-blood-600/70 uppercase">Truth Archive</p>
              </div>
            </Link>
            <p className="text-sm text-dark-400 mb-4 max-w-xs leading-relaxed">
              Documenting and exposing institutional actions that harm public health, 
              safety, and civil liberties.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-dark-400 hover:text-blood-500 hover:bg-blood-600/10 border border-transparent hover:border-blood-600/20 rounded-lg transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-dark-400 hover:text-blood-500 hover:bg-blood-600/10 border border-transparent hover:border-blood-600/20 rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:tips@arkhive.org"
                className="p-2.5 text-dark-400 hover:text-blood-500 hover:bg-blood-600/10 border border-transparent hover:border-blood-600/20 rounded-lg transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blood-600 rounded-full" />
              Investigations
            </h4>
            <ul className="space-y-2">
              {footerLinks.investigations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-blood-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blood-600 rounded-full" />
              Entities
            </h4>
            <ul className="space-y-2">
              {footerLinks.entities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-blood-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blood-600 rounded-full" />
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-blood-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blood-600 rounded-full" />
              About
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-blood-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            © {currentYear} ArkHive. All information is provided for educational purposes.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-dark-500 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blood-600"></span>
              </span>
              Documenting the truth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
