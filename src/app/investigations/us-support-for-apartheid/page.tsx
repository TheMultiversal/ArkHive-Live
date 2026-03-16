'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'US Support for Apartheid',
 subtitle: 'How America Propped Up South Africa\'s Racist Regime, Helped Capture Mandela, and Kept Him on a Terror Watch List Until 2008',
 severity: 'critical',
 status: 'HISTORICALLY CONFIRMED',
 summary: 'For decades, the United States actively supported South Africa\'s apartheid regime as a Cold War ally. The CIA played a direct role in the 1962 arrest of Nelson Mandela, providing his location to South African security forces. President Reagan\'s"constructive engagement"policy opposed sanctions, vetoed the Comprehensive Anti-Apartheid Act (overridden by Congress in 1986), and labeled the African National Congress a terrorist organization. Mandela remained on the US terrorism watch list until 2008. American corporations, including GM, Ford, IBM, and Coca-Cola, profited from apartheid\'s exploitative labor system. The US provided nuclear technology and diplomatic cover for a regime that classified 80% of its population as subhuman based on skin color.',
 keyFigures: [
 { name: 'Ronald Reagan', role: 'President who championed"constructive engagement"with apartheid South Africa; vetoed sanctions bill', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
 { name: 'Chester Crocker', role: 'Assistant Secretary of State who designed"constructive engagement"policy; opposed sanctions', href: '/entities/individuals/chester-crocker', status: 'Active' },
 { name: 'Nelson Mandela', role: 'ANC leader imprisoned 27 years; CIA tip led to his 1962 arrest; on US terror watch list until 2008', href: '/entities/individuals/nelson-mandela', status: 'Deceased (2013)' },
 { name: 'P.W. Botha', role: 'South African President (1978-1989) who maintained apartheid with US support', href: '/entities/individuals/pw-botha', status: 'Deceased (2006)' },
 { name: 'Dick Cheney', role: 'Congressman who voted against Mandela\'s release resolution; opposed sanctions consistently', href: '/entities/individuals/dick-cheney', status: 'Active' },
 { name: 'William Casey', role: 'CIA Director who maintained intelligence relationship with South African security services', href: '/entities/individuals/william-casey', status: 'Deceased (1987)' },
 { name: 'Jeane Kirkpatrick', role: 'UN Ambassador who frequently defended South Africa and opposed sanctions resolutions', href: '/entities/individuals/jeane-kirkpatrick', status: 'Deceased (2006)' },
 { name: 'Jerry Falwell', role: 'Evangelical leader who urged Christians to buy Krugerrands and support apartheid South Africa', href: '/entities/individuals/jerry-falwell', status: 'Deceased (2007)' },
 { name: 'Jesse Helms', role: 'Senator who filibustered sanctions bill and openly supported apartheid government', href: '/entities/individuals/jesse-helms', status: 'Deceased (2008)' },
 { name: 'Randall Robinson', role: 'TransAfrica founder who led Free South Africa Movement and lobbied for sanctions', href: '/entities/individuals/randall-robinson', status: 'Active' },
 { name: 'Desmond Tutu', role: 'Archbishop and Nobel laureate who condemned US support for apartheid', href: '/entities/individuals/desmond-tutu', status: 'Deceased (2021)' },
 { name: 'Donald Rickard', role: 'CIA agent who confirmed in 2016 interview that CIA tipped off South Africa about Mandela\'s location', href: '/entities/individuals/donald-rickard', status: 'Deceased (2016)' },
 ],
 timeline: [
 { date: '1948', event: 'National Party comes to power in South Africa; formally implements apartheid system of racial segregation and white supremacy' },
 { date: '1953', event: 'US begins providing nuclear technology to South Africa; relationship deepens through Atoms for Peace program' },
 { date: '1960', event: 'Sharpeville Massacre: South African police kill 69 peaceful protesters; US condemns but takes no concrete action' },
 { date: '1962', event: 'CIA agent Donald Rickard tips off South African intelligence about Mandela\'s location; Mandela arrested and imprisoned for 27 years' },
 { date: '1963', event: 'UN arms embargo against South Africa; US continues covert military and intelligence cooperation' },
 { date: '1971', event: 'US votes against UN General Assembly resolution declaring apartheid a crime against humanity' },
 { date: '1975', event: 'US and South Africa collaborate on covert military operations in Angola against MPLA' },
 { date: '1977', event: 'South Africa develops nuclear weapons with technology originally provided by the US' },
 { date: '1981', event: 'Reagan takes office; implements"constructive engagement"- treating apartheid government as legitimate partner' },
 { date: '1984', event: 'Desmond Tutu wins Nobel Peace Prize; Free South Africa Movement begins protests at South African embassy in DC' },
 { date: '1985', event: 'Reagan calls ANC a"terrorist organization"and Mandela a"terrorist"; Chase Manhattan and others begin disinvesting under public pressure' },
 { date: '1986', event: 'Congress overrides Reagan\'s veto to pass Comprehensive Anti-Apartheid Act, sanctions against South Africa' },
 { date: '1986', event: 'Dick Cheney votes against resolution calling for Mandela\'s release; later says he doesn\'t regret it' },
 { date: '1988', event: 'US and South Africa sign Tripartite Accord linking Angola peace to Namibian independence' },
 { date: '1990', event: 'Mandela released from prison after 27 years; apartheid begins to crumble despite years of US support' },
 { date: '1993', event: 'Mandela and de Klerk share Nobel Peace Prize; US had opposed Mandela for three decades' },
 { date: '1994', event: 'Mandela elected President of South Africa in first multiracial elections' },
 { date: '2008', event: 'Congress finally passes bill removing Mandela and ANC members from US terrorism watch list; 18 years after his release' },
 { date: '2016', event: 'CIA operative Donald Rickard confirms on film that he provided the tip that led to Mandela\'s 1962 arrest' },
 ],
 legalOutcomes: [
 { defendant: 'United States Government', charge: 'Complicity in apartheid through diplomatic support, intelligence cooperation, and obstruction of sanctions', outcome: 'No accountability; constructive engagement policy formally ended only after Congress overrode Reagan\'s veto' },
 { defendant: 'CIA', charge: 'Providing intelligence leading to Nelson Mandela\'s arrest in 1962', outcome: 'Confirmed by CIA agent Donald Rickard in 2016; no official accountability' },
 { defendant: 'US Corporations (GM, Ford, IBM, Coca-Cola)', charge: 'Profiting from apartheid labor system; providing technology used to enforce racial segregation', outcome: 'Some divested under pressure in 1980s; Khulumani Support Group lawsuit filed 2002, largely dismissed' },
 { defendant: 'IBM', charge: 'Providing computer systems used for apartheid pass book system and population registry', outcome: 'Lawsuit by South African victims dismissed under Alien Tort Statute limitations' },
 { defendant: 'Reagan Administration', charge: 'Vetoing Comprehensive Anti-Apartheid Act; providing diplomatic cover for apartheid regime', outcome: 'Veto overridden by Congress 1986; no further accountability' },
 { defendant: 'Jesse Helms', charge: 'Filibustering and opposing sanctions legislation; publicly supporting apartheid government', outcome: 'Never held accountable; served in Senate until 2003' },
 { defendant: 'South African Apartheid Government', charge: 'Crime of apartheid under international law', outcome: 'Truth and Reconciliation Commission (1996-1998) granted amnesty in exchange for testimony' },
 { defendant: 'Dick Cheney', charge: 'Voting against Mandela release resolution and against sanctions', outcome: 'Said in 2000 interview he would make the same votes again; suffered no consequences' },
 ],
 charges: [
 { statute: 'International Convention on the Suppression and Punishment of the Crime of Apartheid (1973)', description: 'US support for and complicity in the apartheid system, providing diplomatic, military, and economic assistance to a regime committing the crime of apartheid', count: 'Decades of active support including intelligence cooperation, nuclear technology, and vetoing UN resolutions' },
 { statute: 'Conspiracy Against Rights: 18 U.S.C. § 241 (domestic analog)', description: 'CIA agents conspired with South African security forces to identify and arrest anti-apartheid leaders', count: 'CIA tip directly responsible for Mandela\'s 27-year imprisonment' },
 { statute: 'Aiding and Abetting Crimes Against Humanity', description: 'US provided technology, intelligence, and diplomatic cover enabling systematic racial persecution of millions', count: '45 years of apartheid affecting 30+ million Black, Coloured, and Indian South Africans' },
 { statute: 'Nuclear Non-Proliferation Treaty Violations', description: 'US provided nuclear technology that South Africa used to develop nuclear weapons while maintaining apartheid', count: 'South Africa built 6 nuclear weapons with US-origin technology' },
 { statute: 'Violations of UN Security Council Resolutions', description: 'US circumvented arms embargo and other UN measures against apartheid South Africa', count: 'Multiple vetoes of UN Security Council resolutions condemning apartheid' },
 { statute: 'International Convention on the Elimination of All Forms of Racial Discrimination (1965)', description: 'US support for a government whose entire governing philosophy was racial supremacy', count: 'Constructive engagement policy (1981-1986) explicitly rejected punishing racial discrimination' },
 { statute: 'Economic Exploitation, Forced Labor', description: 'US corporations profited from apartheid labor system paying Black workers fraction of white wages', count: 'Hundreds of US companies operated in apartheid South Africa with exploitative labor practices' },
 { statute: 'False Designation, Terrorism Watch List Abuse', description: 'Placing Mandela and ANC on terrorism watch list to delegitimize anti-apartheid movement', count: 'Mandela remained on US terrorism watch list for 46 years (1962-2008)' },
 ],
 coverup: [
 'The CIA\'s role in Mandela\'s 1962 arrest was denied for over 50 years until agent Donald Rickard confirmed it in a 2016 documentary interview shortly before his death.',
 'Reagan framed"constructive engagement"as a diplomatic strategy to gradually reform apartheid, when in reality it provided the regime with continued legitimacy and delayed meaningful pressure.',
 'The administration labeled the ANC as a"terrorist organization"to justify continued support for the apartheid government and to discredit the anti-apartheid movement.',
 'US corporations operating in South Africa claimed they were forces for progressive change through the "Sullivan Principles"while continuing to profit from apartheid labor systems.',
 'The US vetoed numerous UN Security Council resolutions condemning apartheid, providing crucial diplomatic protection for the regime on the world stage.',
 'Jerry Falwell and the religious right actively campaigned for American Christians to support apartheid South Africa financially, framing it as opposing communism.',
 'Dick Cheney defended his vote against Mandela\'s release for decades, claiming the ANC was "properly" designated as a terrorist organization, a position he never recanted.',
 'The full extent of US-South African nuclear cooperation was classified; South Africa developed six nuclear weapons using US-origin technology and materials.',
 'Mandela and other ANC members were kept on the US terrorism watch list until 2008 - 14 years after Mandela became South Africa\'s democratically elected president.',
 ],
 sources: [
 { title: 'CIA Role in Mandela\'s Arrest Confirmed, The Guardian', url: 'https://www.theguardian.com/world/2016/may/15/cia-agent-nelson-mandela-arrest-1962', date: 'May 2016' },
 { title: 'Constructive Engagement: Ronald Reagan and South Africa, Chester Crocker', url: 'https://www.foreignaffairs.com/articles/south-africa/1980-12-01/south-africa-strategy-change', date: '1980' },
 { title: 'Congress Overrides Reagan Veto of Apartheid Sanctions, Washington Post', url: 'https://www.washingtonpost.com/archive/politics/1986/10/03/senate-overrides-reagans-veto-of-south-africa-sanctions/a633db8e-0a17-4496-b4bb-87e0e5c8b0ff/', date: 'October 1986' },
 { title: 'Mandela Removed from US Terror Watch List, CNN', url: 'https://www.cnn.com/2008/WORLD/africa/07/01/mandela.watch.list/index.html', date: 'July 2008' },
 { title: 'US Corporate Complicity in South African Apartheid, Khulumani Support Group', url: 'https://www.khulumani.net/khulumani/statements/item/611-apartheid-reparations-cases.html', date: '2002' },
 { title: 'The Color of Money: US Investment in South Africa, TransAfrica', url: 'https://www.sahistory.org.za/article/united-states-policy-toward-south-africa', date: '1985' },
 { title: 'South Africa\'s Nuclear Weapons Program, Nuclear Threat Initiative', url: 'https://www.nti.org/learn/countries/south-africa/', date: 'Ongoing' },
 { title: 'The Anti-Apartheid Movement and US Foreign Policy, Oxford Research Encyclopedia', url: 'https://oxfordre.com/americanhistory/view/10.1093/acrefore/9780199329175.001.0001/acrefore-9780199329175-e-814', date: '2020' },
 ],
};

export default function USSupportForApartheidPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,12,32,0.85)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
