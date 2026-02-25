'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Facial Recognition: The End of Anonymity',
  subtitle: 'Clearview AI scraped billions of photos, police wrongfully arrested innocent Black men, and no law stops it',
  severity: 'critical',
  status: 'ONGOING - ACCELERATING',
  summary: 'Facial recognition technology has been deployed by law enforcement agencies across the United States with virtually no regulation, transparency, or accountability. Clearview AI secretly scraped over 30 billion photos from social media and the open internet to build a surveillance database, then sold access to over 600 law enforcement agencies. The technology has led to multiple documented wrongful arrests of innocent Black men, as studies show error rates of up to 34.7% for dark-skinned women. Despite proven racial bias, the technology continues to expand. Police departments use it without warrants, without informing suspects, and without disclosure to courts. No federal law regulates its use, and most state legislatures have failed to act. The technology enables a level of mass surveillance previously impossible  -  the ability to instantly identify any person captured on any camera.',
  keyFigures: [
    { name: 'Hoan Ton-That', role: 'CEO of Clearview AI; scraped 30B+ images from the internet for facial recognition database', href: '/entities/individuals/hoan-ton-that', status: 'Active' },
    { name: 'Robert Williams', role: 'First documented wrongful arrest due to facial recognition  -  a Black man falsely identified by Detroit PD', href: '/entities/individuals/robert-williams', status: 'Plaintiff' },
    { name: 'Michael Oliver', role: 'Black man wrongfully arrested by Detroit PD due to false facial recognition match', href: '/entities/individuals/michael-oliver', status: 'Plaintiff' },
    { name: 'Nijeer Parks', role: 'Black man wrongfully arrested in NJ, jailed 10 days based on false facial recognition match', href: '/entities/individuals/nijeer-parks', status: 'Plaintiff' },
    { name: 'Porcha Woodruff', role: 'Pregnant Black woman wrongfully arrested by Detroit PD based on facial recognition', href: '/entities/individuals/porcha-woodruff', status: 'Plaintiff' },
    { name: 'Joy Buolamwini', role: 'MIT researcher who proved racial bias in facial recognition systems ("Gender Shades" study)', href: '/entities/individuals/joy-buolamwini', status: 'Active - Researcher' },
    { name: 'Peter Thiel', role: 'Early investor in Clearview AI; also founded Palantir surveillance company', href: '/entities/individuals/peter-thiel', status: 'Active - Investor' },
    { name: 'Richard Schwartz', role: 'Co-founder of Clearview AI; former Rudy Giuliani aide', href: '/entities/individuals/richard-schwartz', status: 'Active' },
    { name: 'Amazon (Rekognition)', role: 'Sold facial recognition system to police; paused sales in 2020 after protests', href: '/entities/corporations/amazon', status: 'Active' },
    { name: 'James Craig', role: 'Detroit Police Chief who defended facial recognition use despite wrongful arrests', href: '/entities/individuals/james-craig', status: 'Historical' },
    { name: 'Clare Garvie', role: 'Georgetown Law researcher who documented law enforcement facial recognition use', href: '/entities/individuals/clare-garvie', status: 'Active - Researcher' },
  ],
  timeline: [
    { date: '2016', event: 'Georgetown Law study reveals half of American adults are in a law enforcement facial recognition database' },
    { date: '2017', event: 'Clearview AI founded; begins mass-scraping photos from Facebook, Instagram, YouTube, and other sites' },
    { date: 'February 2018', event: 'Joy Buolamwini publishes "Gender Shades" study proving facial recognition error rates 34.7% higher for dark-skinned women' },
    { date: '2018', event: 'Amazon\'s Rekognition system falsely matches 28 members of Congress to mugshots, primarily people of color' },
    { date: '2019', event: 'Clearview AI selling access to 600+ law enforcement agencies; database reaches 3 billion images' },
    { date: 'January 2020', event: 'New York Times expos\u00e9 reveals Clearview AI\'s existence and the scope of its database to the public' },
    { date: 'January 2020', event: 'Robert Williams wrongfully arrested in Detroit based on false facial recognition match' },
    { date: 'June 2020', event: 'Amid racial justice protests, IBM exits facial recognition; Amazon and Microsoft pause police sales' },
    { date: 'August 2020', event: 'Michael Oliver wrongfully arrested in Detroit; second known false match case' },
    { date: '2021', event: 'King County, WA and multiple cities ban government use of facial recognition' },
    { date: 'February 2022', event: 'IRS abandons plan to require facial recognition for online tax accounts after backlash' },
    { date: 'May 2022', event: 'ACLU settles lawsuit: Clearview AI banned from selling to most private companies' },
    { date: 'August 2023', event: 'Porcha Woodruff, 8 months pregnant, wrongfully arrested and detained by Detroit PD based on facial recognition' },
    { date: '2023', event: 'Clearview AI database grows to 30+ billion images; expands sales to international government agencies' },
    { date: '2024', event: 'No federal law regulating facial recognition exists; only a patchwork of local bans and restrictions' },
    { date: '2024', event: 'Multiple European countries fine Clearview AI for GDPR violations; company continues U.S. operations unaffected' },
    { date: 'Ongoing', event: 'At least 7 documented wrongful arrests of Black individuals due to facial recognition; true number likely far higher' },
  ],
  legalOutcomes: [
    { defendant: 'Clearview AI', charge: 'Scraping billions of photos from social media platforms in violation of terms of service and privacy laws', outcome: 'ACLU settlement bans sales to private companies; no ban on sales to government; fined in EU' },
    { defendant: 'Detroit Police Department', charge: 'Multiple wrongful arrests of Black men and women based on facial recognition', outcome: 'Robert Williams, Michael Oliver, and Porcha Woodruff cases; lawsuits pending/settled' },
    { defendant: 'Amazon', charge: 'Selling racially biased Rekognition system to law enforcement', outcome: 'Paused police sales in 2020; no accountability for previous uses' },
    { defendant: 'Federal Government', charge: 'Failure to regulate facial recognition technology', outcome: 'No federal law enacted; multiple bills proposed but none passed' },
    { defendant: 'Various Police Departments', charge: 'Using facial recognition without disclosure to courts, defendants, or the public', outcome: 'No systematic reforms; most departments have no public policy on the technology' },
    { defendant: 'ICE / CBP', charge: 'Using facial recognition for immigration enforcement and border surveillance', outcome: 'Programs expanded under multiple administrations; minimal Congressional oversight' },
    { defendant: 'Clearview AI', charge: 'Violating Illinois Biometric Information Privacy Act (BIPA)', outcome: 'Settlement includes ban on private sales but government use continues' },
    { defendant: 'NJ State Police', charge: 'Wrongful arrest and 10-day detention of Nijeer Parks based on false match', outcome: 'Charges dropped; Parks filed civil rights lawsuit' },
  ],
  charges: [
    { statute: '4th Amendment  -  Unreasonable Search', description: 'Using facial recognition to identify individuals without warrants, probable cause, or reasonable suspicion', count: 'Unknown number of warrantless facial recognition searches conducted by 600+ agencies' },
    { statute: '14th Amendment  -  Equal Protection', description: 'Facial recognition systems with documented racial bias disproportionately affect Black Americans', count: 'Error rates up to 34.7% higher for dark-skinned women; all known wrongful arrests are Black individuals' },
    { statute: 'Illinois BIPA (740 ILCS 14)', description: 'Collection and storage of biometric data without informed consent', count: '30+ billion photos collected without the knowledge or consent of those pictured' },
    { statute: '42 U.S.C. § 1983  -  Civil Rights Violations', description: 'Wrongful arrests depriving innocent people of liberty based on unreliable technology', count: 'At least 7 documented wrongful arrests; actual number unknown' },
    { statute: 'Brady v. Maryland  -  Disclosure Obligations', description: 'Prosecutors and police failing to disclose use of facial recognition in criminal cases', outcome: 'Systematic failure to disclose to defendants that facial recognition was used in their cases' },
    { statute: 'Computer Fraud and Abuse Act (18 U.S.C. § 1030)', description: 'Clearview AI scraped data from websites in violation of their terms of service', count: '30+ billion images scraped from Facebook, Instagram, YouTube, LinkedIn, and other platforms' },
    { statute: 'GDPR  -  EU General Data Protection Regulation', description: 'Processing of biometric data without legal basis or consent', count: 'Multiple EU countries fined Clearview AI totaling tens of millions of euros' },
    { statute: '1st Amendment  -  Chilling Effect', description: 'Mass facial recognition surveillance deters exercise of free speech and assembly rights', count: 'Documented deployment at protests and political gatherings' },
  ],
  coverup: [
    'Clearview AI operated in total secrecy for years, with no public disclosure of its database or its law enforcement clients, until a New York Times investigation exposed it in January 2020.',
    'Police departments across the country have used facial recognition without any disclosure to courts, prosecutors, or defense attorneys  -  making it impossible to challenge in criminal cases.',
    'The technology companies whose platforms were scraped  -  Facebook, Google, LinkedIn  -  sent cease-and-desist letters to Clearview AI but took no meaningful action to prevent continued scraping.',
    'Every documented wrongful arrest from facial recognition has been of a Black person, yet police departments continue to downplay the racial bias inherent in the technology.',
    'Detroit Police continued using facial recognition even after three documented wrongful arrests, with the chief claiming the technology is "just a tool" while refusing to disclose how often it\'s used.',
    'Amazon lobbied against facial recognition regulation while simultaneously selling its Rekognition system to law enforcement  -  a conflict of interest rarely covered in media.',
    'The FBI has built one of the largest facial recognition databases in the world by incorporating state DMV photos, but has provided minimal information to Congress about the scope of the system.',
    'When members of Congress were falsely matched to mugshots by Amazon\'s system, the company blamed the testing methodology rather than acknowledging the technology\'s fundamental bias.',
    'No federal law requires police to disclose when facial recognition was used to develop a lead, meaning the true number of wrongful arrests is likely far higher than the handful of documented cases.',
  ],
  sources: [
    { title: 'New York Times  -  Clearview AI Expos\u00e9', url: 'https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html', date: '2020' },
    { title: 'Gender Shades  -  Joy Buolamwini & Timnit Gebru', url: 'https://www.media.mit.edu/projects/gender-shades/overview/', date: '2018' },
    { title: 'Georgetown Law  -  The Perpetual Line-Up', url: 'https://www.perpetuallineup.org/', date: '2016' },
    { title: 'ACLU  -  Facial Recognition Technology', url: 'https://www.aclu.org/issues/privacy-technology/surveillance-technologies/face-recognition-technology', date: '2023' },
    { title: 'Washington Post  -  Porcha Woodruff Wrongful Arrest', url: 'https://www.washingtonpost.com/technology/2023/08/10/facial-recognition-arrest-detroit/', date: '2023' },
    { title: 'NIST  -  Face Recognition Vendor Test  -  Demographic Effects', url: 'https://www.nist.gov/programs-projects/face-recognition-vendor-test-frvt', date: '2019' },
    { title: 'The Intercept  -  How Police Use Facial Recognition', url: 'https://theintercept.com/2016/10/13/how-a-facial-recognition-mismatch-can-ruin-your-life/', date: '2016' },
    { title: 'MIT Technology Review  -  The Fight Against Facial Recognition', url: 'https://www.technologyreview.com/2021/02/05/1017388/activists-fighting-facial-recognition/', date: '2021' },
  ],
};

export default function FacialRecognitionPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4" />Back to Investigations</Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
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
