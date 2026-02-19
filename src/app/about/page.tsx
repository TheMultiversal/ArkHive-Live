import type { Metadata } from "next";
import Link from "next/link";
import { Skull, Target, Eye, FileText, Users, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ArkHive - the investigative platform dedicated to documenting and exposing institutional crimes against humanity.",
  openGraph: {
    title: "About ArkHive",
    description: "Learn about ArkHive - the investigative platform dedicated to documenting and exposing institutional crimes against humanity.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Crystal Clear */}
        <div className="py-12">
          <div className="border-2 border-blood-800/60 bg-black/70 p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 border-2 border-blood-800 bg-blood-950/40 flex items-center justify-center">
              <Skull className="w-10 h-10 text-blood-700" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-4">
              ABOUT <span className="text-blood-600">ARKHIVE<sup className="text-blood-700 text-lg">®</sup></span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              The uncensored archive dedicated to documenting crimes against humanity 
              committed by governments, corporations, and their operatives.
            </p>
          </div>
        </div>

        {/* Mission - Sharp */}
        <section className="border border-zinc-800 bg-black/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blood-700" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Our Mission</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-4">
            <span className="text-white font-bold">ArkHive®</span> exists to create a permanent, 
            accessible record of institutional crimes that harm the public. Every poisoned water supply. 
            Every covered-up experiment. Every policy designed to shorten your life.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We believe that documented truth has the power to awaken the masses. Every investigation 
            is thoroughly researched, cross-referenced, and connected to a network of perpetrators.
          </p>
        </section>

        {/* How It Works - Sharp */}
        <section className="border border-zinc-800 bg-black/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-6 h-6 text-blood-700" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">How This Platform Works</h2>
          </div>
          <div className="space-y-4">
            {[
              { num: "01", title: "INFORMATION SUBMISSION", desc: "Information is submitted and verified. We accept documents, witness accounts, and leads." },
              { num: "02", title: "RESEARCH & VERIFICATION", desc: "Each piece is researched extensively. We identify all connected entities and gather evidence." },
              { num: "03", title: "DOCUMENTATION", desc: "Complete investigations published with full documentation, source citations, and entity mapping." },
              { num: "04", title: "CONNECTION MAPPING", desc: "Every entity linked across investigations. See the full scope of their crimes." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-4 border border-zinc-800 bg-zinc-900/30">
                <div className="text-blood-600 font-black text-xl">{step.num}</div>
                <div>
                  <h3 className="font-bold text-white mb-1 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Document - Sharp */}
        <section className="border border-zinc-800 bg-black/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blood-700" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">What We Document</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Public health violations & cover-ups",
              "Environmental poisoning & negligence",
              "Mass surveillance operations",
              "Corporate murder for profit",
              "Regulatory capture & corruption",
              "Constitutional violations",
              "Medical experimentation",
              "Propaganda & mind control",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 border border-zinc-800 bg-zinc-900/30">
                <span className="w-2 h-2 bg-blood-700" />
                <span className="text-zinc-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Entity Tracking - Sharp */}
        <section className="border border-zinc-800 bg-black/60 p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blood-700" />
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Entity Tracking</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Every investigation connects to a network of perpetrators. We track three categories:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-blood-900/50 bg-blood-950/30">
              <h4 className="text-blood-600 font-bold mb-2 uppercase tracking-wider">Agencies</h4>
              <p className="text-zinc-500 text-sm">Federal, state, and local government bodies.</p>
            </div>
            <div className="p-4 border border-blood-900/50 bg-blood-950/30">
              <h4 className="text-blood-600 font-bold mb-2 uppercase tracking-wider">Corporations</h4>
              <p className="text-zinc-500 text-sm">Companies profiting from your suffering.</p>
            </div>
            <div className="p-4 border border-blood-900/50 bg-blood-950/30">
              <h4 className="text-blood-600 font-bold mb-2 uppercase tracking-wider">Individuals</h4>
              <p className="text-zinc-500 text-sm">The names behind the decisions.</p>
            </div>
          </div>
        </section>

        {/* CTA - Sharp */}
        <section className="border-2 border-blood-800/60 bg-black/60 p-8 text-center">
          <div className="w-12 h-12 border-2 border-blood-800 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-blood-700" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-4">
            Have Information To Share?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Help build the archive. Submit documents, leads, or information that should be documented.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blood-700 bg-transparent text-blood-600 font-bold uppercase tracking-wider hover:bg-blood-950/40 transition-all"
          >
            Submit Information
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
