'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Iraq War Lies',
  subtitle: 'The Fabrication of WMDs, the Destruction of a Nation, and the 500,000+ Dead Built on a Foundation of Deliberate Deception',
  severity: 'critical',
  status: 'EXPOSED — NO ACCOUNTABILITY',
  summary: 'On March 20, 2003, the United States invaded Iraq based on claims that Saddam Hussein possessed weapons of mass destruction and had ties to al-Qaeda. Both claims were false, and senior Bush administration officials knew they were false — or deliberately ignored intelligence that contradicted them. The invasion was pre-planned before 9/11 and justified through a systematic campaign of deception: the fabricated testimony of an Iraqi defector codenamed "Curveball," forged documents about yellowcake uranium from Niger, Colin Powell\'s knowingly misleading UN presentation, the deliberate conflation of Iraq with the September 11 attacks, and the suppression of dissenting intelligence assessments. The Downing Street Memo revealed that "intelligence and facts were being fixed around the policy." The result: over 500,000 Iraqi civilians dead, 4,431 American soldiers killed, 31,994 wounded, $3 trillion spent, the rise of ISIS, the destabilization of the entire Middle East, and the destruction of American credibility. No senior official has ever been held accountable.',
  keyFigures: [
    { name: 'George W. Bush', role: 'President who authorized the invasion based on fabricated intelligence; falsely claimed Iraq had WMDs and ties to al-Qaeda in State of the Union and other addresses', href: '/entities/individuals/george-w-bush', status: 'No accountability' },
    { name: 'Dick Cheney', role: 'Vice President and primary architect of the Iraq War; repeatedly claimed Iraq had "reconstituted nuclear weapons" despite CIA assessments to the contrary; created pressure campaign on intelligence agencies', href: '/entities/individuals/dick-cheney', status: 'No accountability' },
    { name: 'Donald Rumsfeld', role: 'Secretary of Defense who oversaw the invasion, pushed for war from the day after 9/11, ignored post-war planning, and authorized the Abu Ghraib torture regime', href: '/entities/individuals/donald-rumsfeld', status: 'Deceased (2021)' },
    { name: 'Colin Powell', role: 'Secretary of State who delivered the fabricated WMD presentation to the UN Security Council on February 5, 2003 — later called it a "blot" on his record', href: '/entities/individuals/colin-powell', status: 'Deceased (2021)' },
    { name: 'Condoleezza Rice', role: 'National Security Advisor who warned of a "mushroom cloud" and helped coordinate the public deception campaign to justify the invasion', href: '/entities/individuals/condoleezza-rice', status: 'No accountability' },
    { name: 'Paul Wolfowitz', role: 'Deputy Secretary of Defense and leading Iraq War ideologue; predicted the war would pay for itself through Iraqi oil revenue and that troops would be "greeted as liberators"', href: '/entities/individuals/paul-wolfowitz', status: 'No accountability' },
    { name: 'Douglas Feith', role: 'Under Secretary of Defense for Policy who created the Office of Special Plans to cherry-pick intelligence supporting the case for war, bypassing normal intelligence channels', href: '/entities/individuals/douglas-feith', status: 'No accountability' },
    { name: 'George Tenet', role: 'CIA Director who told Bush the WMD case was a "slam dunk" and later oversaw the fabrication of Colin Powell\'s UN presentation while suppressing dissenting intelligence', href: '/entities/individuals/george-tenet', status: 'Medal of Freedom recipient' },
    { name: 'Ahmad Chalabi', role: 'Iraqi exile and head of the Iraqi National Congress who fed fabricated intelligence about WMDs to the Pentagon and U.S. media; later revealed to have ties to Iranian intelligence', href: '/entities/individuals/ahmad-chalabi', status: 'Deceased (2015)' },
    { name: 'Rafid Ahmed Alwan al-Janabi (Curveball)', role: 'Iraqi defector whose fabricated claims about mobile biological weapons labs became the centerpiece of the WMD case — German intelligence warned he was unreliable', href: '/entities/individuals/curveball', status: 'Admitted fabrication' },
    { name: 'Scooter Libby', role: 'Cheney\'s Chief of Staff who leaked CIA officer Valerie Plame\'s identity to punish her husband for debunking the Niger yellowcake uranium claim', href: '/entities/individuals/scooter-libby', status: 'Convicted — Pardoned by Trump' },
    { name: 'John Bolton', role: 'Under Secretary of State for Arms Control who pressured intelligence analysts to exaggerate the Iraqi WMD threat and attempted to have dissenting analysts fired', href: '/entities/individuals/john-bolton', status: 'No accountability' },
    { name: 'John Yoo', role: 'DOJ Office of Legal Counsel attorney who authored the legal memos justifying the invasion and expansive executive war powers', href: '/entities/individuals/john-yoo', status: 'No accountability — UC Berkeley professor' },
    { name: 'Tony Blair', role: 'UK Prime Minister who colluded with Bush to invade Iraq; the "Downing Street Memo" revealed intelligence was "fixed around the policy"', href: '/entities/individuals/tony-blair', status: 'Found to have acted on flawed intelligence — Chilcot Inquiry' },
    { name: 'L. Paul Bremer', role: 'Head of Coalition Provisional Authority who disbanded the Iraqi army and enacted de-Baathification — decisions widely blamed for fueling the insurgency and rise of ISIS', href: '/entities/individuals/l-paul-bremer', status: 'No accountability' },
    { name: 'Judith Miller', role: 'New York Times reporter who published front-page stories based on fabricated Iraqi WMD intelligence from Chalabi, amplifying the case for war to the American public', href: '/entities/individuals/judith-miller', status: 'Discredited — Left NYT' },
  ],
  timeline: [
    { date: '1998-01-26', event: 'Project for the New American Century (Wolfowitz, Rumsfeld, Bolton, et al.) sends letter to President Clinton urging military action to remove Saddam Hussein' },
    { date: '2001-01-30', event: 'First National Security Council meeting of Bush presidency discusses Iraq invasion; Treasury Secretary O\'Neill later reports "from the very beginning, there was a conviction that Saddam Hussein was a bad person and that he needed to go"' },
    { date: '2001-09-12', event: 'One day after 9/11, Rumsfeld asks for plans to attack Iraq despite no evidence linking Iraq to the attacks; Richard Clarke reports being told to "go back over everything" to find an Iraq connection' },
    { date: '2001-11-21', event: 'Bush privately tells Rumsfeld to begin planning for the invasion of Iraq — 16 months before the war begins' },
    { date: '2002-01-29', event: 'Bush\'s State of the Union labels Iraq part of an "Axis of Evil" alongside Iran and North Korea' },
    { date: '2002-08-26', event: 'Cheney declares "there is no doubt that Saddam Hussein now has weapons of mass destruction" in speech to Veterans of Foreign Wars — a claim unsupported by the intelligence community' },
    { date: '2002-09-07', event: 'Bush and Blair cite IAEA report claiming Iraq is "six months away" from a nuclear weapon — the IAEA issues a statement saying no such report exists' },
    { date: '2002-09-08', event: 'Condoleezza Rice warns on CNN that "we don\'t want the smoking gun to be a mushroom cloud" — the same day NYT publishes Judith Miller\'s story on aluminum tubes, sourced from administration officials' },
    { date: '2002-10-01', event: 'National Intelligence Estimate on Iraqi WMD is produced in just three weeks — normally takes months; State Department\'s Bureau of Intelligence and Research (INR) dissents, calling nuclear claims "not persuasive"' },
    { date: '2002-10-07', event: 'Bush gives Cincinnati speech claiming Iraq "could have a nuclear weapon in less than a year," citing the discredited aluminum tubes claim' },
    { date: '2002-10-11', event: 'Congress authorizes the use of military force against Iraq based on the administration\'s false intelligence claims — 77 senators and 296 representatives vote yes' },
    { date: '2003-01-28', event: 'Bush\'s State of the Union includes the "16 words": "The British government has learned that Saddam Hussein recently sought significant quantities of uranium from Africa" — based on forged documents' },
    { date: '2003-02-05', event: 'Colin Powell delivers fabricated WMD presentation to the UN Security Council, including false claims about mobile bioweapons labs, aluminum tubes, and al-Qaeda links — later calls it a "blot" on his record' },
    { date: '2003-03-07', event: 'IAEA Director Mohamed ElBaradei tells the UN Security Council the Niger uranium documents are forgeries; Hans Blix reports no evidence of WMDs found by weapons inspectors' },
    { date: '2003-03-20', event: 'U.S. invades Iraq with "Shock and Awe" bombing campaign — beginning a war that would kill over 500,000 people' },
    { date: '2003-05-01', event: 'Bush declares "Mission Accomplished" aboard USS Abraham Lincoln — the war would continue for another 8 years' },
    { date: '2003-07-06', event: 'Ambassador Joseph Wilson publishes NYT op-ed revealing the Niger yellowcake uranium claim was baseless — his wife Valerie Plame\'s CIA identity is leaked in retaliation' },
    { date: '2004-01-28', event: 'David Kay, head of the Iraq Survey Group, tells Congress "we were almost all wrong" about Iraqi WMDs — no weapons of mass destruction are ever found' },
    { date: '2004-07-09', event: 'Senate Intelligence Committee report finds that key intelligence claims were "not supported by the underlying intelligence" and that the CIA was subjected to political pressure' },
    { date: '2005-05-01', event: 'Downing Street Memo leaked — minutes of July 2002 meeting between Blair and intelligence chiefs stating "intelligence and facts were being fixed around the policy" of invading Iraq' },
    { date: '2005-11-09', event: 'Curveball\'s claims about mobile bioweapons labs — the centerpiece of Powell\'s UN presentation — are confirmed to be entirely fabricated; German intelligence had warned he was unreliable' },
    { date: '2006-02-09', event: 'Scooter Libby indicted for perjury and obstruction related to the leak of Valerie Plame\'s CIA identity — he is convicted and sentenced to 30 months' },
    { date: '2016-07-06', event: 'UK Chilcot Inquiry concludes after 7 years that the Iraq War was based on "flawed intelligence and assessments" that were not challenged as they should have been' },
  ],
  legalOutcomes: [
    { defendant: 'Scooter Libby', charge: 'Perjury, obstruction of justice, and making false statements related to the Valerie Plame leak — retaliation for her husband debunking WMD claims', outcome: 'Convicted 2007; sentence commuted by Bush; fully pardoned by Trump in 2018' },
    { defendant: 'George W. Bush', charge: 'Exposed as having launched a war based on fabricated intelligence — no legal proceedings ever initiated', outcome: 'No accountability; became a rehabilitation figure; paints portraits' },
    { defendant: 'Dick Cheney', charge: 'Orchestrated political pressure campaign on intelligence agencies; made false public statements about WMDs and Iraq-al-Qaeda links', outcome: 'No accountability; never investigated, never charged' },
    { defendant: 'Tony Blair', charge: 'UK Chilcot Inquiry found he committed to war before exhausting peaceful options and presented flawed intelligence without challenge', outcome: 'Found to have acted on flawed intelligence; no legal consequences; called "devastating" but not criminal' },
    { defendant: 'Colin Powell', charge: 'Delivered fabricated intelligence to the UN Security Council; later acknowledged the information was false', outcome: 'No accountability; expressed regret; deceased 2021' },
    { defendant: 'Ahmad Chalabi', charge: 'Fed fabricated WMD intelligence to the U.S. government and media to engineer the invasion; later found to have ties to Iranian intelligence', outcome: 'Never prosecuted; briefly served in Iraqi government; died 2015' },
    { defendant: 'Curveball (Rafid al-Janabi)', charge: 'Fabricated the mobile bioweapons lab claims that became the centerpiece of the WMD case and Powell\'s UN presentation', outcome: 'Admitted in 2011 the claims were entirely fabricated; never prosecuted; lives in Germany' },
    { defendant: 'Judith Miller', charge: 'Published fabricated WMD stories in the New York Times based on administration sources, manufacturing public consent for war', outcome: 'NYT published editors\' note acknowledging flawed coverage; Miller left the paper; no legal consequences' },
    { defendant: 'Douglas Feith', charge: 'DOD Inspector General found his Office of Special Plans produced "inappropriate" intelligence assessments that misled Congress and the public', outcome: 'No legal consequences; IG report classified findings as "inappropriate" rather than criminal' },
    { defendant: 'International Criminal Court', charge: 'Iraq War found to constitute a war of aggression under international law — the "supreme international crime"', outcome: 'The U.S. does not recognize ICC jurisdiction; no international prosecution; American Service-Members\' Protection Act threatens sanctions on any country cooperating' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1001 — False Statements to Congress', description: 'Bush, Cheney, Rice, Rumsfeld, and others made at least 935 false statements about Iraq\'s WMDs and al-Qaeda ties in the two years following 9/11, as documented by the Center for Public Integrity', count: '935 documented false statements by 8 senior officials' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Coordinated campaign to manipulate intelligence, suppress dissent, and deceive Congress and the public to manufacture consent for a predetermined war', count: 'Systematic conspiracy involving the White House, Pentagon, and intelligence agencies' },
    { statute: 'U.N. Charter Article 2(4) — Prohibition on Use of Force / Crime of Aggression', description: 'The invasion of Iraq without UN Security Council authorization constituted a war of aggression — described at Nuremberg as "the supreme international crime"', count: 'War of aggression resulting in 500,000+ deaths' },
    { statute: 'Geneva Conventions — War Crimes', description: 'Deliberate targeting of civilian infrastructure, use of white phosphorus in Fallujah, torture at Abu Ghraib, and collective punishment of civilian populations', count: 'Systematic violations throughout the occupation' },
    { statute: '50 U.S.C. § 421 — Intelligence Identities Protection Act', description: 'Deliberate disclosure of CIA officer Valerie Plame\'s covert identity in retaliation for her husband\'s public debunking of the Niger uranium claim', count: 'Libby convicted; Cheney and Rove involvement established but not prosecuted' },
    { statute: '18 U.S.C. § 1505 — Obstruction of Congressional Proceedings', description: 'Withholding and manipulating intelligence provided to Congress during the Iraq War authorization debate; classification of dissenting assessments', count: 'Systematic manipulation of intelligence presented to oversight bodies' },
    { statute: '18 U.S.C. § 2340A — Torture', description: 'Abu Ghraib torture, extraordinary rendition, enhanced interrogation of Iraqi detainees — policies authorized at the highest levels of the Defense Department', count: 'Thousands of detainees subjected to torture and abuse' },
    { statute: '18 U.S.C. § 1111 — Murder / Wrongful Death', description: 'Launching a war based on known-false pretenses that resulted in the deaths of 4,431 American soldiers and over 500,000 Iraqi civilians', count: '500,000+ dead based on fabricated justification' },
    { statute: '22 U.S.C. § 2778 — Arms Export Control Act Violations', description: 'Failure to account for billions in weapons distributed in Iraq — many of which ended up in the hands of insurgents and later ISIS', count: '$1 billion+ in unaccounted weapons' },
    { statute: 'War Powers Resolution — 50 U.S.C. § 1541', description: 'Obtaining congressional authorization through deliberate deception about the threat posed by Iraq — vitiated the legal authority for war', count: 'Authorization obtained through fraud' },
  ],
  coverup: [
    'The Office of Special Plans, created by Douglas Feith under Rumsfeld\'s direction, was a shadow intelligence operation designed to bypass the CIA and cherry-pick intelligence supporting the case for war while ignoring contradictory evidence.',
    'The State Department\'s Bureau of Intelligence and Research (INR) dissented from the nuclear claims in the National Intelligence Estimate, but their objections were buried in footnotes and never communicated to Congress or the public.',
    'The CIA warned that Curveball was unreliable and that his claims about mobile bioweapons labs were uncorroborated — these warnings were suppressed before Powell\'s UN presentation.',
    'The Niger yellowcake uranium documents were obvious forgeries — the IAEA determined this within hours of receiving them — yet the claim appeared in the President\'s State of the Union address.',
    'When Ambassador Joseph Wilson publicly debunked the Niger uranium claim, the administration retaliated by leaking his wife Valerie Plame\'s covert CIA identity — destroying her career and endangering her sources.',
    'The "aluminum tubes" claim — that Iraq was purchasing tubes for uranium enrichment centrifuges — was disputed by the Department of Energy\'s own nuclear experts, who said the tubes were for conventional rockets. The administration used the claim anyway.',
    'Post-invasion, when no WMDs were found, the administration shifted the justification to "democracy promotion" and "liberation" — retroactively rewriting the entire rationale for war.',
    'The CIA destroyed 92 interrogation videotapes that may have contained evidence of torture and the unreliability of intelligence extracted under duress — obstruction of justice that was never prosecuted.',
    'The Phase II Senate Intelligence Committee investigation into whether officials misrepresented intelligence was delayed for years by Republican leadership and was only partially completed.',
    'Bush awarded the Presidential Medal of Freedom to George Tenet, Tommy Franks, and Paul Bremer — three key architects of the intelligence failure and disastrous occupation — in what critics called a "reward for failure."',
  ],
  sources: [
    { title: 'Center for Public Integrity — "935 False Statements: Iraq, The War Card"', url: 'https://publicintegrity.org/national-security/935-lies/', date: '2008-01-23' },
    { title: 'The Downing Street Memo — "Secret Intelligence Service Report of July 23, 2002"', url: 'https://web.archive.org/web/2023/https://downingstreetmemo.com/', date: '2005-05-01' },
    { title: 'Senate Select Committee on Intelligence — "Report on Pre-War Intelligence Assessments on Iraq"', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-prewar-intelligence-assessments-iraq', date: '2004-07-09' },
    { title: 'Iraq Body Count — Documented Civilian Deaths from Violence', url: 'https://www.iraqbodycount.org/', date: '2024-01-01' },
    { title: 'Colin Powell UN Presentation Full Text and Analysis', url: 'https://web.archive.org/web/2023/https://www.washingtonpost.com/wp-srv/nation/transcripts/powelltext_020503.html', date: '2003-02-05' },
    { title: 'The Guardian — "Curveball: How US Was Duped by Iraqi Fantasist"', url: 'https://www.theguardian.com/world/2011/feb/15/curveball-iraqi-defector-wmd-lies', date: '2011-02-15' },
    { title: 'UK Chilcot Inquiry — "The Iraq Inquiry Report" (12 volumes)', url: 'https://webarchive.nationalarchives.gov.uk/ukgwa/20171123122743/http://www.iraqinquiry.org.uk/', date: '2016-07-06' },
    { title: 'Brown University Costs of War Project — "Human and Budgetary Costs of the Iraq War"', url: 'https://watson.brown.edu/costsofwar/costs/human', date: '2023-09-01' },
    { title: 'The New York Times — "The Times and Iraq: A Look at Coverage" (Editors\' Note)', url: 'https://www.nytimes.com/2004/05/26/world/from-the-editors-the-times-and-iraq.html', date: '2004-05-26' },
    { title: 'Richard Clarke — "Against All Enemies: Inside America\'s War on Terror"', url: 'https://web.archive.org/web/2023/https://www.simonandschuster.com/books/Against-All-Enemies/Richard-A-Clarke/9780743260244', date: '2004-03-22' },
    { title: 'IAEA — "Status of Nuclear Inspections in Iraq" (ElBaradei Report to UN)', url: 'https://www.iaea.org/newscenter/statements/status-nuclear-inspections-iraq', date: '2003-03-07' },
  ],
};

export default function IraqWarLiesPage() {
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
