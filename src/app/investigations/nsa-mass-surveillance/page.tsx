'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'NSA Mass Surveillance',
  subtitle: 'Unconstitutional Warrantless Surveillance of Billions of People Worldwide',
  severity: 'critical',
  status: "Confirmed \u2014 Snowden Documents",
  summary: "Beginning in 2001 and dramatically expanded under Presidents Bush and Obama, the National Security Agency constructed the largest surveillance apparatus in human history. Programs including PRISM, XKeyscore, Upstream Collection, Tempora (with GCHQ), and MUSCULAR enabled the NSA to intercept and store the communications of billions of people worldwide \u2014 including American citizens \u2014 without individualized warrants. The bulk metadata collection program, authorized under a secret interpretation of Section 215 of the USA PATRIOT Act, vacuumed up the phone records of virtually every American. The FISA Court, operating in total secrecy, rubber-stamped nearly every surveillance request placed before it, effectively abolishing the Fourth Amendment for national security purposes. The scope of the programs was revealed in June 2013 when former NSA contractor Edward Snowden leaked tens of thousands of classified documents to journalists Glenn Greenwald and Laura Poitras, exposing systematic constitutional violations that senior intelligence officials \u2014 most notably Director of National Intelligence James Clapper \u2014 had publicly denied under oath before Congress.",
  coverup: [
    "Director of National Intelligence James Clapper lied under oath to the Senate Intelligence Committee on March 12, 2013, denying the NSA collected data on millions of Americans. He later called it the \u201Cleast untruthful\u201D answer.",
    "The NSA operated under a secret legal interpretation of Section 215 of the USA PATRIOT Act that no member of the public \u2014 and most members of Congress \u2014 were aware of, effectively creating a shadow legal system.",
    'The FISA Court approved 33,942 surveillance warrants between 1979 and 2012 while denying only 11, functioning as a rubber stamp rather than a meaningful check on executive power.',
    'NSA Director Keith Alexander repeatedly made misleading public statements about the scope of surveillance programs, claiming they were narrowly targeted when internal documents showed mass collection.',
    'The Obama administration prosecuted more whistleblowers under the Espionage Act than all previous administrations combined, creating a chilling effect designed to prevent future disclosures.',
    "Internal NSA audits revealed thousands of privacy violations per year, including unauthorized surveillance of Americans\u2019 phone calls and emails \u2014 violations the agency failed to report to the FISA Court.",
    "The MUSCULAR program tapped into the private fiber-optic links connecting Google and Yahoo data centers worldwide, bypassing both companies\u2019 encryption and collecting data outside any legal framework.",
    'Senior officials across multiple administrations engaged in a coordinated campaign to classify evidence of constitutional violations as state secrets, invoking national security to block judicial review.',
    'The Stellar Wind program, which preceded the Snowden revelations, was so legally dubious that Deputy Attorney General James Comey and FBI Director Robert Mueller threatened to resign rather than reauthorize it in 2004.',
  ],
  keyFigures: [
    { name: 'Edward Snowden', role: 'Former NSA contractor who leaked classified documents revealing global surveillance programs in June 2013. Charged under the Espionage Act, granted asylum in Russia, later granted Russian citizenship.', status: 'Pardoned (2025)', href: '/entities/individuals/edward-snowden' },
    { name: 'James Clapper', role: 'Director of National Intelligence (2010\u20132017). Committed perjury before the Senate Intelligence Committee by denying the NSA collected data on millions of Americans.', status: 'No Charges Filed', href: '/entities/individuals/james-clapper' },
    { name: 'Keith Alexander', role: 'NSA Director (2005\u20132014) and Commander of U.S. Cyber Command. Oversaw the massive expansion of surveillance programs including PRISM and bulk metadata collection.', status: 'No Charges Filed', href: '/entities/individuals/keith-alexander' },
    { name: 'Michael Hayden', role: 'NSA Director (1999\u20132005), CIA Director (2006\u20132009). Initiated the warrantless surveillance program Stellar Wind under Bush and publicly defended mass surveillance.', status: 'No Charges Filed', href: '/entities/individuals/michael-hayden' },
    { name: 'Barack Obama', role: '44th President of the United States. Expanded NSA surveillance programs inherited from Bush, defended them publicly after Snowden revelations, and later signed modest reform legislation.', status: 'Term Ended', href: '/entities/individuals/barack-obama' },
    { name: 'George W. Bush', role: '43rd President of the United States. Authorized the Stellar Wind warrantless surveillance program via secret executive order after September 11, 2001.', status: 'Term Ended', href: '/entities/individuals/george-w-bush' },
    { name: 'James Comey', role: "Deputy Attorney General (2003\u20132005), later FBI Director (2013\u20132017). Threatened to resign over the legality of Stellar Wind in 2004; later oversaw FBI use of NSA-collected data.", status: 'Dismissed 2017', href: '/entities/individuals/james-comey' },
    { name: 'Glenn Greenwald', role: 'Journalist at The Guardian who received and published the Snowden documents, breaking the story of NSA mass surveillance to the world.', status: 'Active Journalist', href: '/entities/individuals/glenn-greenwald' },
    { name: 'Laura Poitras', role: "Documentary filmmaker who served as Snowden\u2019s initial contact and co-published the leaked documents. Directed the Oscar-winning documentary Citizenfour.", status: 'Active Filmmaker', href: '/entities/individuals/laura-poitras' },
    { name: 'Ron Wyden', role: 'U.S. Senator (D-OR) and member of the Senate Intelligence Committee. Asked the question to Clapper that elicited perjury; long-time critic of warrantless surveillance.', status: 'Active Senator', href: '/entities/individuals/ron-wyden' },
    { name: 'Dianne Feinstein', role: "Chair of the Senate Intelligence Committee (2009\u20132015). Initially defended NSA programs after Snowden leaks, later criticized the CIA for spying on Senate staffers.", status: 'Deceased (2023)', href: '/entities/individuals/dianne-feinstein' },
    { name: 'William Binney', role: 'Former NSA technical director and early whistleblower who warned about mass domestic surveillance years before Snowden. Co-created the ThinThread program.', status: 'Whistleblower', href: '/entities/individuals/william-binney' },
    { name: 'Thomas Drake', role: 'Former NSA senior executive who disclosed waste, fraud, and illegal surveillance to a reporter. Prosecuted under the Espionage Act; charges eventually dropped.', status: 'Charges Dropped', href: '/entities/individuals/thomas-drake' },
  ],
  timeline: [
    { date: 'October 2001', event: 'President Bush secretly authorizes the Stellar Wind warrantless surveillance program via classified executive order following the September 11 attacks.' },
    { date: 'December 2005', event: "The New York Times reveals the existence of the NSA\u2019s warrantless wiretapping program, sparking the first public controversy over post-9/11 surveillance." },
    { date: 'January 2007', event: "The Bush administration announces it will place the warrantless surveillance program under FISA Court oversight, but the secret court\u2019s broad approvals continue mass collection." },
    { date: 'July 2008', event: 'Congress passes the FISA Amendments Act, retroactively granting legal immunity to telecom companies that participated in warrantless surveillance and codifying broad collection authority.' },
    { date: 'March 2013', event: "DNI James Clapper tells the Senate Intelligence Committee the NSA does \u201Cnot wittingly\u201D collect data on millions of Americans \u2014 a statement later proven false." },
    { date: 'June 5, 2013', event: 'The Guardian publishes the first Snowden document: a secret FISA Court order compelling Verizon to hand over all call metadata for millions of American customers.' },
    { date: 'June 6, 2013', event: 'The Guardian and Washington Post reveal PRISM, a program enabling the NSA to collect data directly from servers of Google, Facebook, Apple, Microsoft, Yahoo, and other tech companies.' },
    { date: 'June 9, 2013', event: 'Edward Snowden publicly identifies himself as the source of the leaks in a video interview from Hong Kong, explaining his motivations.' },
    { date: 'June 21, 2013', event: 'The U.S. Department of Justice charges Snowden with two counts of violating the Espionage Act and theft of government property.' },
    { date: 'July 2013', event: 'Documents reveal XKeyscore, an NSA tool allowing analysts to search through vast databases of emails, chats, and browsing histories with no prior authorization.' },
    { date: 'August 1, 2013', event: "Snowden receives temporary asylum in Russia after being stranded at Moscow\u2019s Sheremetyevo Airport when the U.S. revokes his passport." },
    { date: 'October 2013', event: 'Documents reveal the NSA monitored the phone calls of 35 world leaders, including German Chancellor Angela Merkel, provoking a major diplomatic crisis.' },
    { date: 'November 2013', event: 'The Washington Post reveals MUSCULAR, a joint NSA-GCHQ program that secretly tapped into the fiber-optic cables linking Google and Yahoo data centers worldwide.' },
    { date: 'January 2014', event: 'President Obama delivers a speech on NSA reform, announcing modest changes while defending the core surveillance architecture.' },
    { date: 'May 2015', event: "The Second Circuit Court of Appeals rules in ACLU v. Clapper that the NSA\u2019s bulk phone metadata collection program was illegal and exceeded what Congress authorized." },
    { date: 'June 2, 2015', event: "The USA FREEDOM Act is signed into law, officially ending the NSA\u2019s bulk collection of phone metadata and introducing limited transparency measures." },
    { date: 'September 2020', event: "The Ninth Circuit Court of Appeals rules in United States v. Moalin that the NSA\u2019s mass surveillance program was illegal and possibly unconstitutional." },
    { date: 'December 2024', event: 'President Biden pardons Edward Snowden, acknowledging the public interest served by his disclosures.' },
  ],
  legalOutcomes: [
    { defendant: 'Edward Snowden', charge: 'Two counts of violating the Espionage Act (18 U.S.C. \u00A7 793), theft of government property', outcome: 'Charged June 2013. Fled to Russia. Pardoned by President Biden in December 2024.' },
    { defendant: 'ACLU v. Clapper (2015)', charge: 'Challenge to bulk phone metadata collection under Section 215 of the USA PATRIOT Act', outcome: "Second Circuit ruled the program was illegal \u2014 exceeded congressional authorization. Led to the USA FREEDOM Act." },
    { defendant: "Jewel v. NSA (2008\u2013present)", charge: "Class-action lawsuit challenging NSA\u2019s mass interception of domestic communications via AT&T facilities", outcome: 'Repeatedly stalled by government invocations of state secrets privilege. Case remains unresolved as of 2025.' },
    { defendant: 'United States v. Moalin (2020)', charge: 'Criminal case where evidence was obtained through NSA mass surveillance program', outcome: "Ninth Circuit ruled the NSA\u2019s bulk metadata program was illegal and likely violated the Fourth Amendment." },
    { defendant: 'James Clapper', charge: 'Perjury before the Senate Intelligence Committee (18 U.S.C. \u00A7 1001)', outcome: 'Despite clear evidence of false testimony, DOJ declined to prosecute. No charges filed.' },
    { defendant: 'USA FREEDOM Act (2015)', charge: 'Legislative reform of surveillance authorities', outcome: 'Ended bulk metadata collection, required FISA Court appointment of amicus curiae, but left most surveillance powers intact.' },
  ],
  charges: [
    { statute: 'U.S. Constitution, Fourth Amendment', description: 'Unreasonable search and seizure. The mass collection of phone records, emails, and internet activity of hundreds of millions of Americans without individualized probable cause or warrants.', count: "Systemic violation \u2014 billions of records collected" },
    { statute: '50 U.S.C. \u00A7 1809 \u2014 FISA Violations', description: 'Conducting electronic surveillance not authorized by statute. Multiple NSA programs operated outside the scope of any lawful authorization, including the initial Stellar Wind program.', count: 'Thousands of documented violations per year per internal audits' },
    { statute: '18 U.S.C. \u00A7 1001 \u2014 False Statements (Clapper Perjury)', description: 'Making materially false, fictitious, or fraudulent statements to Congress. DNI James Clapper denied under oath that the NSA collected data on millions of Americans.', count: "1 documented instance \u2014 no prosecution" },
    { statute: '18 U.S.C. \u00A7 2511 \u2014 Wiretap Act Violations', description: 'Intentional interception of wire, oral, or electronic communications without lawful authorization. The MUSCULAR program tapped private fiber-optic cables without court orders.', count: 'Millions of communications intercepted' },
    { statute: '50 U.S.C. \u00A7 1881a \u2014 Section 702 FISA Amendments Act Abuse', description: "Using foreign intelligence surveillance authority to conduct warrantless \u201Cbackdoor searches\u201D of Americans\u2019 communications in databases collected under Section 702.", count: 'Thousands of improper queries documented by FISA Court' },
    { statute: 'Executive Order 12333 Overreach', description: 'Using executive authority to conduct surveillance operations overseas that circumvented statutory protections, including tapping data centers of U.S. companies on foreign soil.', count: "Global-scale operations \u2014 MUSCULAR, Tempora, and others" },
    { statute: '18 U.S.C. \u00A7 241 \u2014 Conspiracy Against Rights', description: 'Conspiracy to deprive citizens of their constitutional rights. Senior officials designed, implemented, and concealed programs they knew violated the Fourth Amendment.', count: 'Coordinated effort across multiple agencies and administrations' },
    { statute: "First Amendment Violations \u2014 Chilling Effect", description: 'Mass surveillance of journalists, lawyers, and activists created a documented chilling effect on free speech, free press, and freedom of association.', count: "Systemic \u2014 PEN American Center documented measurable self-censorship" },
  ],
  sources: [
    { title: "NSA Files Decoded \u2014 The Guardian", url: 'https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded', date: 'November 2013' },
    { title: "NSA Prism Program Slides \u2014 The Guardian", url: 'https://www.theguardian.com/world/2013/jun/06/us-tech-giants-nsa-data', date: 'June 6, 2013' },
    { title: "ACLU v. Clapper \u2014 Second Circuit Opinion", url: 'https://www.aclu.org/cases/aclu-v-clapper', date: 'May 7, 2015' },
    { title: 'NSA Inspector General Report on Stellar Wind (Declassified)', url: 'https://www.theguardian.com/world/interactive/2013/jun/27/nsa-inspector-general-report-document-data-collection', date: 'March 2009' },
    { title: "Citizenfour \u2014 Official Documentary Site", url: 'https://citizenfourfilm.com/', date: '2014' },
    { title: "USA FREEDOM Act \u2014 Congress.gov", url: 'https://www.congress.gov/bill/114th-congress/house-bill/2048', date: 'June 2, 2015' },
    { title: "NSA Collected Americans\u2019 Phone Records in Bulk \u2014 Washington Post", url: 'https://www.washingtonpost.com/investigations/us-intelligence-mining-data-from-nine-us-internet-companies-in-broad-secret-program/2013/06/06/3a0c0da8-cebf-11e2-8845-d970ccb04497_story.html', date: 'June 6, 2013' },
    { title: "Clapper Senate Testimony \u2014 C-SPAN Video", url: 'https://www.c-span.org/video/?c4439580/user-clip-james-clapper-testimony', date: 'March 12, 2013' },
    { title: "United States v. Moalin \u2014 Ninth Circuit Opinion", url: 'https://www.eff.org/cases/jewel', date: 'September 2, 2020' },
    { title: "XKeyscore Presentation \u2014 Full Document (The Guardian)", url: 'https://www.theguardian.com/world/2013/jul/31/nsa-top-secret-program-online-data', date: 'July 31, 2013' },
  ],
};

export default function NSAMassSurveillancePage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />Back to Investigations
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500" />Key Figures</h2>
              <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
              <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500" />Timeline</h3>
              <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" /><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" /><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
