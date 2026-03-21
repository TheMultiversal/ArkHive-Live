'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
 ArrowLeft,
 AlertTriangle,
 Users,
 Calendar,
 FileText,
 ExternalLink,
 Scale,
 DollarSign,
 ShieldAlert,
 Gavel,
 Building2,
 Link2,
 Banknote,
 Clock,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import DateDisplay from '@/components/ui/DateDisplay';

const investigation = {
 title: 'Hush Money Election Fraud',
 subtitle: 'The Stormy Daniels Case: 34 Felony Convictions',
 severity: 'critical',
 status: 'CONVICTED - 34 Felonies',
 
 // Three-tier date system
 eventOriginDate: 'Oct 27, 2016', // Date of the actual hush money payment
 lastActivityDate: 'Jan 2025',     // Most recent appeals/court activity
 pageUpdatedDate: 'Mar 17, 2026',  // When this page was last edited
 
 summary: 'Donald Trump became the first former U.S. President convicted of felony crimes. A Manhattan jury found him guilty on all 34 counts of falsifying business records to conceal hush money payments made to adult film actress Stormy Daniels to suppress her story of an affair before the 2016 election. The payments were made through Michael Cohen and disguised as legal fees to influence the election.',
 
 statutesViolated: [
  { code: 'NY Penal Law 175.10', name: 'Falsifying Business Records in the First Degree', description: 'Class E Felony. Elevated from 2nd degree because the falsification was committed with intent to commit or conceal another crime (campaign finance violations).', maxPenalty: '4 years per count' },
  { code: 'NY Penal Law 175.05', name: 'Falsifying Business Records in the Second Degree', description: 'Base offense elevated to 1st degree due to intent to commit another crime.', maxPenalty: '1 year per count' },
  { code: '52 USC 30101', name: 'Federal Election Campaign Act Violations', description: 'Payments constituted unreported campaign contributions exceeding legal limits.', maxPenalty: 'Civil and criminal penalties' },
  { code: 'NY Election Law 17-152', name: 'Conspiracy to Promote Election by Unlawful Means', description: 'Underlying crime elevating the falsification charges.', maxPenalty: 'Misdemeanor' },
  { code: '26 USC 7206', name: 'Tax Fraud (Federal)', description: 'Cohen reimbursement structured to conceal true nature of payments.', maxPenalty: '3 years' },
 ],

 verdict: {
  date: 'May 30, 2024',
  counts: 34,
  verdict: 'GUILTY on all counts',
  felonyClass: 'Class E Felony (elevated due to intent to commit/conceal another crime)',
  maxSentence: '4 years per count (136 years theoretical maximum)',
  judge: 'Justice Juan Merchan',
  juryDeliberation: '9.5 hours',
  caseNumber: 'Indictment No. 71543-23',
  court: 'Supreme Court of the State of New York, County of New York',
 },

 appealsStatus: [
  { date: 'Jul 2024', action: 'Defense files motion to dismiss citing presidential immunity', status: 'Denied' },
  { date: 'Sep 2024', action: 'Sentencing delayed pending appeals', status: 'Granted' },
  { date: 'Nov 2024', action: 'Defense appeals to First Judicial Department', status: 'Pending' },
  { date: 'Jan 2025', action: 'DOJ policy memo on prosecuting sitting president reviewed', status: 'Ongoing' },
 ],

 keyFigures: [
  { name: 'Donald Trump', role: 'Defendant. Directed payments, signed falsified checks, ultimate beneficiary of scheme.', href: '/entities/individuals/donald-trump', status: 'CONVICTED - 34 Felonies' },
  { name: 'Michael Cohen', role: 'Personal attorney. Made initial $130,000 payment via shell company. Key prosecution witness.', href: '/entities/individuals/michael-cohen', status: 'Served 13 months federal' },
  { name: 'Stormy Daniels', role: 'Adult film actress. Received $130,000 hush payment 11 days before 2016 election.', href: '/entities/individuals/stormy-daniels', status: 'Key witness' },
  { name: 'Karen McDougal', role: 'Playboy model. Received $150,000 via AMI "catch and kill" scheme.', href: '/entities/individuals/karen-mcdougal', status: 'Witness' },
  { name: 'David Pecker', role: 'CEO American Media Inc. Orchestrated "catch and kill" scheme as campaign asset.', href: '/entities/individuals/david-pecker', status: 'Cooperating witness, immunity' },
  { name: 'Allen Weisselberg', role: 'Trump Org CFO. Arranged falsified documentation and reimbursement structure.', href: '/entities/individuals/allen-weisselberg', status: 'Pled guilty to perjury in this case' },
  { name: 'Hope Hicks', role: 'Campaign Communications Director. Testified Trump knew of and was concerned about stories.', href: '/entities/individuals/hope-hicks', status: 'Witness, cried on stand' },
  { name: 'Keith Davidson', role: 'Attorney for Daniels and McDougal. Negotiated NDAs and payment terms.', href: '/entities/individuals/keith-davidson', status: 'Witness' },
  { name: 'Dylan Howard', role: 'Editor-in-Chief, National Enquirer. Executed catch and kill operations.', href: '/entities/individuals', status: 'Cooperating witness' },
  { name: 'Jeffrey McConney', role: 'Trump Org Controller. Created false ledger entries.', href: '/entities/individuals', status: 'Witness' },
  { name: 'Deborah Tarasoff', role: 'Trump Org Accounts Payable Supervisor. Processed false invoices.', href: '/entities/individuals', status: 'Witness' },
 ],

 prosecution: [
  { name: 'Alvin Bragg', role: 'Manhattan District Attorney. Brought historic indictment.', href: '/entities/individuals' },
  { name: 'Matthew Colangelo', role: 'Senior Counsel, led prosecution team.', href: '/entities/individuals' },
  { name: 'Joshua Steinglass', role: 'Assistant DA, delivered closing argument.', href: '/entities/individuals' },
  { name: 'Susan Hoffinger', role: 'Assistant DA, conducted key cross-examinations.', href: '/entities/individuals' },
 ],

 defense: [
  { name: 'Todd Blanche', role: 'Lead defense attorney.', href: '/entities/individuals' },
  { name: 'Susan Necheles', role: 'Defense attorney, cross-examined Stormy Daniels.', href: '/entities/individuals' },
  { name: 'Emil Bove', role: 'Defense attorney.', href: '/entities/individuals' },
 ],

 entitiesInvolved: [
  { name: 'Trump Organization', role: 'Corporate entity that processed false payments', href: '/entities/corporations/trump-organization', status: 'Convicted separately - 17 felonies, $1.61M fine' },
  { name: 'American Media Inc. (AMI)', role: 'National Enquirer parent company, implemented catch and kill', href: '/entities/corporations', status: 'Non-prosecution agreement' },
  { name: 'Essential Consultants LLC', role: 'Shell company created by Cohen to funnel Daniels payment', href: '/entities/corporations', status: 'Dissolved' },
  { name: 'First Republic Bank', role: 'Bank where Cohen opened shell company account', href: '/entities/corporations', status: 'Filed suspicious activity report' },
  { name: 'Trump Campaign 2016', role: 'Beneficiary of illegal election interference scheme', href: '/entities/organizations', status: 'Unindicted' },
 ],

 relatedInvestigations: [
  { title: 'Trump Organization Tax Fraud', href: '/investigations/trump-org-fraud', connection: 'Same CFO (Weisselberg), same falsification methods' },
  { title: 'Georgia Election RICO Case', href: '/investigations/georgia-rico', connection: 'Same defendant, election interference pattern' },
  { title: 'Mar-a-Lago Documents', href: '/investigations/mar-a-lago-documents', connection: 'Same defendant, obstruction pattern' },
  { title: 'January 6th Insurrection', href: '/investigations/january-6-insurrection', connection: 'Same defendant, election subversion' },
  { title: 'Fake Electors Scheme', href: '/investigations/fake-electors', connection: 'Same defendant, 2020 election fraud' },
  { title: 'Trump Foundation Fraud', href: '/investigations/trump-foundation', connection: 'Same defendant, financial fraud pattern' },
  { title: 'Trump University Fraud', href: '/investigations/trump-university', connection: 'Same defendant, fraud pattern' },
  { title: 'E. Jean Carroll Defamation', href: '/investigations/defamation', connection: 'Same defendant, civil liability' },
 ],

 paymentScheme: {
  danielsPayment: '$130,000 via shell company Essential Consultants LLC',
  mcdougalPayment: '$150,000 via American Media Inc. (National Enquirer)',
  doormanPayment: '$30,000 to suppress false Trump love child story',
  cohenReimbursement: '$420,000 (grossed up for taxes + bonus)',
  falsification: '34 checks, invoices, and ledger entries falsely labeled "legal expenses"',
 },

 moneyTrail: [
  { date: 'Oct 27, 2016', from: 'Michael Cohen (personal HELOC)', to: 'Essential Consultants LLC', amount: '$130,000', purpose: 'Cohen secures funds by taking home equity line of credit' },
  { date: 'Oct 27, 2016', from: 'Essential Consultants LLC', to: 'Keith Davidson (attorney for Daniels)', amount: '$130,000', purpose: 'Payment to silence Stormy Daniels 11 days before election' },
  { date: 'Feb 14, 2017', from: 'Donald J. Trump Revocable Trust', to: 'Michael Cohen', amount: '$35,000', purpose: 'First of 11 monthly "retainer" payments (falsely documented)' },
  { date: 'Mar-Dec 2017', from: 'Donald J. Trump personal account', to: 'Michael Cohen', amount: '$35,000/month x 10', purpose: 'Remaining "retainer" payments signed from White House' },
  { date: 'Total Reimbursement', from: 'Trump/Trump Org', to: 'Michael Cohen', amount: '$420,000', purpose: '$130K + gross-up for taxes ($180K) + $60K bonus' },
 ],

 legalOutcomes: [
  { defendant: 'Donald Trump', charge: '34 Counts Falsifying Business Records (1st Degree)', outcome: 'Guilty on all 34 counts (May 30, 2024). First former president convicted of felonies. Sentencing delayed.', statute: 'NY Penal Law 175.10' },
  { defendant: 'Michael Cohen', charge: 'Campaign Finance Violations, Tax Fraud, Lying to Congress', outcome: '3 years federal prison (December 2018). Served 13 months before COVID release.', statute: '52 USC 30109, 26 USC 7206' },
  { defendant: 'Allen Weisselberg', charge: 'Tax Fraud (Trump Org scheme), Perjury (this case)', outcome: 'Tax fraud: 5 months Rikers (2022). Perjury: 5 months Rikers (2024).', statute: 'NY Penal Law 210.15' },
  { defendant: 'AMI / David Pecker', charge: 'Campaign Finance Violations via catch and kill', outcome: 'Non-prosecution agreement (December 2018) in exchange for cooperation.', statute: '52 USC 30101' },
  { defendant: 'Trump Organization (2 LLCs)', charge: '17 Felonies: Tax Fraud, Falsifying Records, Conspiracy', outcome: 'Convicted all counts (December 2022). $1.61 million fine.', statute: 'NY Penal Law 175.10, 210.15' },
 ],

 charges: [
  { count: '1-11', description: 'Falsifying invoices from Michael Cohen', evidence: 'Monthly invoices marked "legal expenses"', documentID: 'Exhibit 35-A through 35-K' },
  { count: '12-22', description: 'Falsifying checks to Michael Cohen', evidence: 'Checks personally signed by Trump, marked "retainer"', documentID: 'Exhibit 36-A through 36-K' },
  { count: '23-34', description: 'Falsifying ledger entries', evidence: 'Trump Org general ledger entries categorizing as legal fees', documentID: 'Exhibit 37-A through 37-L' },
 ],

 coverup: [
  'The "catch and kill" scheme used American Media Inc. (National Enquirer) as a covert campaign tool to suppress damaging stories before the 2016 election',
  'Michael Cohen created the shell company Essential Consultants LLC specifically to funnel the $130,000 payment to Stormy Daniels without leaving a traceable paper trail',
  'Thirty-four business records were deliberately falsified to disguise hush money reimbursements as routine legal expenses over the course of 2017',
  'Trump personally signed reimbursement checks to Cohen from the Oval Office while serving as president, demonstrating ongoing involvement in the coverup',
  'The payment to Karen McDougal was structured through AMI to avoid campaign finance disclosure requirements, with the story permanently killed',
  'Despite public denials of any knowledge, Hope Hicks testified that Trump was aware of and deeply concerned about the stories\' impact on his campaign',
  'Cohen\'s reimbursement was grossed up to $420,000 to cover taxes and include a bonus, all disguised in Trump Organization records as a legal retainer',
  'First Republic Bank filed a Suspicious Activity Report (SAR) on the Essential Consultants LLC transaction but the election occurred before investigation',
 ],

 catchAndKill: [
  { story: 'Karen McDougal affair', payment: '$150,000', outlet: 'National Enquirer/AMI', status: 'Story killed', date: 'Aug 2016' },
  { story: 'Stormy Daniels affair', payment: '$130,000', outlet: 'Cohen/Essential Consultants', status: 'Story killed', date: 'Oct 2016' },
  { story: 'Trump doorman (false story)', payment: '$30,000', outlet: 'National Enquirer/AMI', status: 'Story killed', date: 'Jun 2016' },
 ],

 timeline: [
  { date: '2006', event: 'Alleged affair between Trump and Stormy Daniels at Lake Tahoe golf tournament' },
  { date: '2006-2007', event: 'Alleged 10-month affair between Trump and Karen McDougal' },
  { date: 'Jun 16, 2015', event: 'Trump announces presidential candidacy' },
  { date: 'Aug 2015', event: 'David Pecker meets Trump and Cohen at Trump Tower; agrees AMI will be campaign "eyes and ears" for negative stories' },
  { date: 'Jun 2016', event: 'AMI pays doorman $30,000 for (false) Trump love child story' },
  { date: 'Aug 2016', event: 'AMI pays Karen McDougal $150,000 for exclusive life rights, killing her story' },
  { date: 'Oct 7, 2016', event: 'Access Hollywood "grab them by the pussy" tape released, creating panic about additional allegations' },
  { date: 'Oct 8, 2016', event: 'Daniels attorney contacts Cohen about selling her story, citing Access Hollywood momentum' },
  { date: 'Oct 17, 2016', event: 'Cohen opens Essential Consultants LLC in Delaware' },
  { date: 'Oct 26, 2016', event: 'Cohen opens First Republic Bank account for Essential Consultants' },
  { date: 'Oct 27, 2016', event: 'Cohen wires $130,000 to Keith Davidson for Stormy Daniels, 11 days before election' },
  { date: 'Nov 8, 2016', event: 'Trump wins presidential election' },
  { date: 'Jan 2017', event: 'Trump Organization begins reimbursing Cohen, falsely documented as "legal expenses"' },
  { date: 'Feb-Dec 2017', event: '11 monthly payments of ~$35,000 each to Cohen, 9 signed by Trump personally' },
  { date: 'Jan 2018', event: 'Wall Street Journal breaks story of Daniels payment' },
  { date: 'Apr 9, 2018', event: 'FBI raids Cohen\'s office, home, hotel; discovers payment records' },
  { date: 'Aug 21, 2018', event: 'Cohen pleads guilty in SDNY, implicates "Individual-1" (Trump) as directing payments' },
  { date: 'Dec 2018', event: 'SDNY prosecutors: Trump directed payments constituting campaign finance violations' },
  { date: 'Aug 2019', event: 'Manhattan DA opens investigation' },
  { date: 'Mar 30, 2023', event: 'Manhattan grand jury indicts Trump on 34 felony counts' },
  { date: 'Apr 4, 2023', event: 'Trump arraigned in Manhattan, pleads not guilty, becomes first former president criminally charged' },
  { date: 'Apr 15, 2024', event: 'Trial begins: People of the State of New York v. Donald J. Trump' },
  { date: 'Apr 22, 2024', event: 'David Pecker testifies about August 2015 Trump Tower meeting and AMI scheme' },
  { date: 'May 7, 2024', event: 'Stormy Daniels testifies in explicit detail about alleged 2006 encounter' },
  { date: 'May 13, 2024', event: 'Michael Cohen testifies over 3 days about payment scheme and Trump direction' },
  { date: 'May 20, 2024', event: 'Defense rests without Trump testifying' },
  { date: 'May 28, 2024', event: 'Jury begins deliberations' },
  { date: 'May 30, 2024', event: 'GUILTY verdict on all 34 counts after 9.5 hours deliberation' },
  { date: 'Jul 11, 2024', event: 'Sentencing postponed pending Supreme Court immunity decision' },
  { date: 'Sep 2024', event: 'Sentencing further delayed due to appeals' },
 ],

 keyTestimony: [
  { witness: 'David Pecker', revelation: 'Confirmed August 2015 Trump Tower meeting where catch and kill scheme was devised. AMI functioned as campaign intelligence operation.', date: 'Apr 22-23, 2024' },
  { witness: 'Stormy Daniels', revelation: 'Provided graphic testimony about alleged 2006 sexual encounter and payment negotiations. Defense moved for mistrial (denied).', date: 'May 7, 2024' },
  { witness: 'Michael Cohen', revelation: 'Trump personally directed payments, knew purpose was election influence, signed reimbursement checks from Oval Office.', date: 'May 13-16, 2024' },
  { witness: 'Hope Hicks', revelation: 'Broke down crying. Confirmed Trump was "concerned" about how stories would impact campaign, not family.', date: 'May 3, 2024' },
  { witness: 'Keith Davidson', revelation: 'Negotiated NDAs for both Daniels and McDougal. Confirmed "Access Hollywood tape changed everything."', date: 'Apr 30, 2024' },
  { witness: 'Jeffrey McConney', revelation: 'Trump Org controller testified about creating the false ledger entries.', date: 'May 6, 2024' },
 ],

 sources: [
  { title: 'Manhattan DA Indictment (34 Counts)', url: 'https://www.manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf', date: 'Mar 30, 2023', type: 'Court Filing' },
  { title: 'Statement of Facts', url: 'https://www.manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Statement-of-Facts.pdf', date: 'Mar 30, 2023', type: 'Court Filing' },
  { title: 'Michael Cohen Plea Agreement (SDNY)', url: 'https://www.justice.gov/usao-sdny/press-release/file/1088966/dl', date: 'Aug 21, 2018', type: 'Federal Court Filing' },
  { title: 'AMI Non-Prosecution Agreement', url: 'https://www.justice.gov/usao-sdny/press-release/file/1115006/dl', date: 'Dec 12, 2018', type: 'Federal Agreement' },
  { title: 'SDNY Sentencing Memorandum (Cohen)', url: 'https://www.justice.gov/usao-sdny/press-release/file/1115011/dl', date: 'Dec 7, 2018', type: 'Federal Court Filing' },
  { title: 'FEC Matter Under Review 7324', url: 'https://www.fec.gov/data/legal/matter-under-review/7324/', date: '2018', type: 'Regulatory Filing' },
  { title: 'Trial Transcript Day 1', url: 'https://www.nycourts.gov/courts/1jd/supctmanh/', date: 'Apr 15, 2024', type: 'Trial Record' },
  { title: 'Verdict Sheet (34 Guilty)', url: 'https://www.nycourts.gov/', date: 'May 30, 2024', type: 'Court Record' },
  { title: 'Essential Consultants LLC Delaware Filing', url: 'https://icis.corp.delaware.gov/', date: 'Oct 17, 2016', type: 'Corporate Filing' },
  { title: 'First Republic Bank SAR (referenced in testimony)', url: '#', date: 'Oct 2016', type: 'Financial Record' },
  { title: 'Trump Organization Tax Fraud Verdict', url: 'https://www.manhattanda.org/', date: 'Dec 2022', type: 'Related Case' },
 ],
};

export default function HushMoneyPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link
 href="/investigations"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Investigations
 </Link>

 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8"
 >
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">
 {investigation.severity}
 </span>
 <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400 animate-pulse">
 {investigation.status}
 </span>
 </div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2">
 <GlitchText text={investigation.title} />
 </h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed mb-6">{investigation.summary}</p>
 
 {/* Three-tier Date Display */}
 <DateDisplay
 eventOriginDate={investigation.eventOriginDate}
 lastActivityDate={investigation.lastActivityDate}
 pageUpdatedDate={investigation.pageUpdatedDate}
 variant="compact"
 className="border-t border-zinc-800/50 pt-4"
 />
 </motion.div>

 {/* Verdict */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="border-2 border-zinc-800/60 bg-zinc-900 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-zinc-300"/>
 Historic Conviction - {investigation.verdict.date}
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
 <div className="border border-zinc-700/50 bg-black p-4 text-center">
 <p className="text-4xl font-bold text-zinc-300">{investigation.verdict.counts}</p>
 <p className="text-sm text-zinc-400">Felony Counts</p>
 </div>
 <div className="border border-zinc-700/50 bg-black p-4 text-center col-span-2">
 <p className="text-2xl font-bold text-zinc-400">{investigation.verdict.verdict}</p>
 <p className="text-sm text-zinc-400">Unanimous Jury Verdict</p>
 </div>
 <div className="border border-zinc-700/50 bg-black p-4 text-center">
 <p className="text-xl font-bold text-zinc-300">{investigation.verdict.juryDeliberation}</p>
 <p className="text-sm text-zinc-400">Deliberation</p>
 </div>
 </div>
 <div className="space-y-2 text-zinc-300">
 <p><strong className="text-white">Judge:</strong> {investigation.verdict.judge}</p>
 <p><strong className="text-white">Felony Class:</strong> {investigation.verdict.felonyClass}</p>
 <p><strong className="text-white">Maximum Sentence:</strong> {investigation.verdict.maxSentence}</p>
 </div>
 </motion.div>

 {/* Payment Scheme */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <DollarSign className="w-5 h-5 text-zinc-300"/>
 The Payment Scheme
 </h2>
 <div className="space-y-3">
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start">
 <span className="text-white">Stormy Daniels Payment</span>
 <span className="text-zinc-300 font-bold">{investigation.paymentScheme.danielsPayment}</span>
 </div>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start">
 <span className="text-white">Karen McDougal Payment</span>
 <span className="text-zinc-300 font-bold">{investigation.paymentScheme.mcdougalPayment}</span>
 </div>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start">
 <span className="text-white">Doorman Payment</span>
 <span className="text-zinc-300 font-bold">{investigation.paymentScheme.doormanPayment}</span>
 </div>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start">
 <span className="text-white">Cohen Reimbursement (grossed up)</span>
 <span className="text-zinc-300 font-bold">{investigation.paymentScheme.cohenReimbursement}</span>
 </div>
 </div>
 <div className="border border-[rgba(255,255,255,0.15)] bg-zinc-900 p-4">
 <p className="text-zinc-300 font-bold">Falsification Method:</p>
 <p className="text-zinc-300">{investigation.paymentScheme.falsification}</p>
 </div>
 </div>
 </motion.div>

 {/* Key Figures */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-zinc-300"/>
 Key Figures
 </h2>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {investigation.keyFigures.map((figure, idx) => (
 <Link
 key={idx}
 href={figure.href}
 className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4 hover:border-zinc-700 transition-colors group"
 >
 <div className="flex justify-between items-start">
 <div>
 <h3 className="font-bold glass-text group-hover:text-white">{figure.name}</h3>
 <p className="text-sm text-zinc-400">{figure.role}</p>
 </div>
 <span className="text-xs text-zinc-400">{figure.status}</span>
 </div>
 </Link>
 ))}
 </div>
 </motion.div>

 {/* Charges */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-zinc-300"/>
 34 Felony Counts - Falsifying Business Records
 </h2>
 <div className="space-y-3">
 {investigation.charges.map((charge, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start mb-2">
 <span className="text-zinc-300 font-bold">Counts {charge.count}</span>
 <span className="text-xs text-zinc-400">GUILTY</span>
 </div>
 <p className="text-zinc-300">{charge.description}</p>
 <p className="text-sm text-zinc-500 mt-1">Evidence: {charge.evidence}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Catch and Kill */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="border-2 border-zinc-700/60 bg-zinc-900 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-zinc-400"/>
 &quot;Catch and Kill&quot; Scheme
 </h2>
 <div className="space-y-3">
 {investigation.catchAndKill.map((item, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start mb-2">
 <h3 className="font-bold glass-text">{item.story}</h3>
 <span className="text-zinc-300">{item.payment}</span>
 </div>
 <p className="text-sm text-zinc-400">Outlet: {item.outlet}</p>
 <p className="text-xs text-zinc-400">{item.status}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Key Testimony */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4">
 Key Trial Testimony
 </h2>
 <div className="space-y-3">
 {investigation.keyTestimony.map((test, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <h3 className="font-bold text-zinc-300">{test.witness}</h3>
 <p className="text-zinc-300">{test.revelation}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Timeline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-zinc-300"/>
 Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
 {investigation.timeline.map((item, idx) => (
 <div key={idx} className="flex gap-4 border-l-2 border-[rgba(255,255,255,0.18)] pl-4 hover:border-zinc-600 transition-colors">
 <span className="text-zinc-300 font-mono text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
 <span className="text-zinc-300">{item.event}</span>
 </div>
 ))}
 </div>
 </motion.div>

 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p><p className="text-xs text-zinc-500 mt-1">Statute: {item.statute}</p></div>))}</div>
 </motion.div>

 {/* Statutes Violated */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Gavel className="w-5 h-5 text-zinc-300"/>Statutes Violated</h2>
 <div className="space-y-3">{investigation.statutesViolated.map((statute, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex justify-between items-start mb-2"><span className="font-mono text-zinc-300 font-bold">{statute.code}</span><span className="text-xs text-zinc-500">Max: {statute.maxPenalty}</span></div><p className="font-bold text-white text-sm">{statute.name}</p><p className="text-xs text-zinc-400 mt-1">{statute.description}</p></div>))}</div>
 </motion.div>

 {/* Money Trail */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.54 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Banknote className="w-5 h-5 text-zinc-300"/>Money Trail</h2>
 <div className="space-y-3">{investigation.moneyTrail.map((item, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex justify-between items-start mb-2"><span className="font-mono text-zinc-400 text-xs">{item.date}</span><span className="text-zinc-300 font-bold">{item.amount}</span></div><div className="text-sm"><span className="text-zinc-500">From:</span> <span className="text-white">{item.from}</span></div><div className="text-sm"><span className="text-zinc-500">To:</span> <span className="text-white">{item.to}</span></div><p className="text-xs text-zinc-400 mt-2">{item.purpose}</p></div>))}</div>
 </motion.div>

 {/* Appeals Status */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-zinc-300"/>Appeals Status</h2>
 <div className="space-y-3">{investigation.appealsStatus.map((item, idx) => (<div key={idx} className="flex gap-4 border-l-2 border-[rgba(255,255,255,0.18)] pl-4"><span className="text-zinc-300 font-mono text-sm whitespace-nowrap min-w-[80px]">{item.date}</span><div className="flex-1"><p className="text-zinc-300 text-sm">{item.action}</p><span className="text-xs text-zinc-400">{item.status}</span></div></div>))}</div>
 </motion.div>

 {/* Related Investigations */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Link2 className="w-5 h-5 text-zinc-300"/>Related Investigations</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{investigation.relatedInvestigations.map((inv, idx) => (<Link key={idx} href={inv.href} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-700 transition-colors group"><p className="font-bold glass-text group-hover:text-white text-sm">{inv.title}</p><p className="text-xs text-zinc-500 mt-1">{inv.connection}</p></Link>))}</div>
 </motion.div>

 {/* Prosecution Team */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Gavel className="w-5 h-5 text-zinc-300"/>Prosecution Team</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{investigation.prosecution.map((person, idx) => (<Link key={idx} href={person.href} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-700 transition-colors group"><p className="font-bold glass-text group-hover:text-white text-sm">{person.name}</p><p className="text-xs text-zinc-500">{person.role}</p></Link>))}</div>
 </motion.div>

 {/* Defense Team */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }} className="border-2 border-zinc-800/60 bg-zinc-900 p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-500"/>Defense Team</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{investigation.defense.map((person, idx) => (<Link key={idx} href={person.href} className="p-3 bg-[#0a0a0a] border border-zinc-700 hover:border-zinc-500 transition-colors group"><p className="font-bold text-zinc-300 group-hover:text-white text-sm">{person.name}</p><p className="text-xs text-zinc-500">{person.role}</p></Link>))}</div>
 </motion.div>

 {/* Entities Involved */}
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-zinc-300"/>Entities Involved</h2>
 <div className="space-y-3">{investigation.entitiesInvolved.map((entity, idx) => (<Link key={idx} href={entity.href} className="block p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-700 transition-colors group"><div className="flex justify-between items-start"><p className="font-bold glass-text group-hover:text-white">{entity.name}</p><span className="text-xs text-zinc-400">{entity.status}</span></div><p className="text-xs text-zinc-400 mt-1">{entity.role}</p></Link>))}</div>
 </motion.div>

 {/* Sources */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.45 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-zinc-300"/>
 Sources & Documentation
 </h2>
 <div className="space-y-3">
 {investigation.sources.map((source, idx) => (
 <a
 key={idx}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-3 hover:border-zinc-700 transition-colors group"
 >
 <div>
 <h3 className="text-zinc-300 group-hover:text-white transition-colors">{source.title}</h3>
 <p className="text-xs text-zinc-500">{source.date}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white"/>
 </a>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 );
}
