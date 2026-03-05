'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
 Bell,
 Check,
 CheckCheck,
 Trash2,
 Filter,
 Settings,
 AlertTriangle,
 FileText,
 Users,
 Target,
 MessageSquare,
 Clock,
 MoreVertical,
 Eye,
 Volume2,
 VolumeX,
} from 'lucide-react';
import { format, formatDistanceToNow, isToday, isThisWeek } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface NotificationItem {
 id: string;
 type: 'alert' | 'investigation' | 'document' | 'team' | 'comment' | 'system';
 title: string;
 message: string;
 read: boolean;
 timestamp: Date;
 actionUrl?: string;
 metadata?: Record<string, unknown>;
}

// ============================================================
// Mock Data
// ============================================================

const mockNotifications: NotificationItem[] = [
 {
 id: 'notif_1',
 type: 'alert',
 title: 'Security Alert',
 message: 'Unusual access pattern detected on your account. Please verify recent activity.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 15),
 actionUrl: '/audit',
 },
 {
 id: 'notif_2',
 type: 'investigation',
 title: 'Investigation Update',
 message: 'Blackwater Massacre has been elevated to critical severity level.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60),
 actionUrl: '/investigations/blackwater-massacre',
 },
 {
 id: 'notif_3',
 type: 'comment',
 title: 'New Comment',
 message: 'Sarah Miller commented on NSA Mass Surveillance:"Found new connections..."',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
 actionUrl: '/investigations/nsa-mass-surveillance',
 },
 {
 id: 'notif_4',
 type: 'team',
 title: 'Team Invitation',
 message: 'You have been invited to join the Financial Crimes workspace.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
 actionUrl: '/workspaces',
 },
 {
 id: 'notif_5',
 type: 'document',
 title: 'Document Shared',
 message: 'James Wilson shared"Classified Report Q4"with you.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
 actionUrl: '/documents',
 },
 {
 id: 'notif_6',
 type: 'system',
 title: 'System Maintenance',
 message: 'Scheduled maintenance will occur on Jan 20, 2024 from 2-4 AM UTC.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
 },
 {
 id: 'notif_7',
 type: 'investigation',
 title: 'New Connection Found',
 message: 'Automated analysis discovered a new link between Nexus Holdings and Global Dynamics.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
 actionUrl: '/investigations',
 },
 {
 id: 'notif_8',
 type: 'alert',
 title: 'Expiring Documents',
 message: '3 documents in your workspace are set to expire within 7 days.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
 actionUrl: '/documents',
 },


 // === Expanded Notifications ===
 {
 id: 'notif_9',
 type: 'alert',
 title: 'CRITICAL: New Evidence Filed',
 message: 'Court records reveal additional co-conspirators in the January 6th investigation. 12 new names identified.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 0.5),
 actionUrl: '/investigations/january-6-insurrection',
 },
 {
 id: 'notif_10',
 type: 'investigation',
 title: 'Severity Escalation',
 message: 'Boeing Safety Crisis investigation elevated to CRITICAL after new whistleblower death reported.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
 actionUrl: '/investigations/boeing-safety-crisis',
 },
 {
 id: 'notif_11',
 type: 'alert',
 title: 'Document Declassified',
 message: 'CIA FOIA release: 847 pages of previously classified MKUltra documents now available in archive.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
 actionUrl: '/investigations/mkultra',
 },
 {
 id: 'notif_12',
 type: 'comment',
 title: 'New Analysis Posted',
 message: 'Dr. Rebecca Torres posted analysis on Epstein Network:"Flight log cross-reference reveals 14 previously unidentified passengers."',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
 actionUrl: '/investigations/epstein-network',
 },
 {
 id: 'notif_13',
 type: 'investigation',
 title: 'Investigation Linked',
 message: 'Dark Money Politics investigation linked to Leonard Leo Network - shared financial entities detected.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
 actionUrl: '/investigations/dark-money-politics',
 },
 {
 id: 'notif_14',
 type: 'alert',
 title: 'Whistleblower Submission',
 message: 'New encrypted submission received regarding FAA regulatory capture. Verification in progress.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
 actionUrl: '/investigations/faa-regulatory-capture',
 },
 {
 id: 'notif_15',
 type: 'document',
 title: 'Evidence Upload',
 message: 'Classified Pentagon Papers supplement (312 pages) uploaded to Afghanistan Papers workspace.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
 actionUrl: '/investigations/afghanistan-papers',
 },
 {
 id: 'notif_16',
 type: 'team',
 title: 'Workspace Activity',
 message: 'Financial Crimes workspace: 4 new members joined, 23 documents uploaded in the last 24 hours.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 7),
 actionUrl: '/workspaces',
 },
 {
 id: 'notif_17',
 type: 'investigation',
 title: 'Pattern Detected',
 message: 'Automated analysis found matching financial patterns between FTX Crypto Fraud and WorldCom Fraud investigations.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
 actionUrl: '/investigations/ftx-crypto-fraud',
 },
 {
 id: 'notif_18',
 type: 'alert',
 title: 'Entity Connection Alert',
 message: 'New corporate filing links Purdue Pharma shell company to 3 additional opioid distribution networks.',
 read: false,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 10),
 actionUrl: '/investigations/purdue-pharma-oxycontin',
 },
 {
 id: 'notif_19',
 type: 'investigation',
 title: 'Status Change',
 message: 'Trump Criminal Compendium - Georgia RICO case: new co-defendant plea agreement filed.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
 actionUrl: '/investigations/trump-criminal-compendium',
 },
 {
 id: 'notif_20',
 type: 'comment',
 title: 'Thread Updated',
 message: 'Marcus Chen replied on CIA Torture Program:"Senate Intelligence Committee transcript confirms additional black site locations."',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 14),
 actionUrl: '/investigations/cia-torture-program',
 },
 {
 id: 'notif_21',
 type: 'document',
 title: 'Report Published',
 message: 'ArkHive analysis report:"Flint Water Crisis - 10 Years Later: Accountability Assessment"now available.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 16),
 actionUrl: '/investigations/flint-water-crisis',
 },
 {
 id: 'notif_22',
 type: 'alert',
 title: 'Court Ruling',
 message: 'Federal judge orders release of redacted Mar-a-Lago documents search warrant materials.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18),
 actionUrl: '/investigations/mar-a-lago-documents',
 },
 {
 id: 'notif_23',
 type: 'system',
 title: 'Archive Update',
 message: 'Document archive expanded: 193 new entries cataloged across 40+ investigations.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20),
 actionUrl: '/documents',
 },
 {
 id: 'notif_24',
 type: 'investigation',
 title: 'Timeline Updated',
 message: 'COINTELPRO investigation timeline expanded with 12 newly declassified FBI memoranda dates.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
 actionUrl: '/investigations/cointelpro',
 },
 {
 id: 'notif_25',
 type: 'team',
 title: 'Member Role Change',
 message: 'You have been promoted to Senior Analyst in the Government Abuse investigations workspace.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
 actionUrl: '/workspaces',
 },
 {
 id: 'notif_26',
 type: 'alert',
 title: 'Source Verification',
 message: 'Previously unverified source on Iran-Contra investigation confirmed by secondary documentation.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26),
 actionUrl: '/investigations/iran-contra',
 },
 {
 id: 'notif_27',
 type: 'comment',
 title: 'Expert Commentary',
 message: 'Former FBI agent James Doyle commented on surveillance-expansion:"This matches internal protocols I witnessed firsthand."',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28),
 actionUrl: '/investigations/surveillance-expansion',
 },
 {
 id: 'notif_28',
 type: 'document',
 title: 'FOIA Response',
 message: 'Department of Defense FOIA response received: 1,247 pages regarding drone assassination program.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 30),
 actionUrl: '/investigations/drone-assassination-program',
 },
 {
 id: 'notif_29',
 type: 'investigation',
 title: 'New Investigation Added',
 message: 'Genocide Palestine investigation created with 47 primary sources and 23 entity connections.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
 actionUrl: '/investigations/genocide-palestine',
 },
 {
 id: 'notif_30',
 type: 'alert',
 title: 'Entity Profile Updated',
 message: 'Erik Prince entity profile updated with 8 new corporate affiliations and offshore holdings.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 74),
 actionUrl: '/entities/individuals/erik-prince',
 },
 {
 id: 'notif_31',
 type: 'system',
 title: 'Platform Statistics',
 message: 'ArkHive now tracking 826 investigations, 2,575 entities, and 201 archived documents.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 76),
 actionUrl: '/',
 },
 {
 id: 'notif_32',
 type: 'comment',
 title: 'Research Update',
 message: 'Analyst posted on Project 2025:"Heritage Foundation internal emails reveal implementation timeline for 2025-2029."',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 78),
 actionUrl: '/investigations/project-2025',
 },
 {
 id: 'notif_33',
 type: 'document',
 title: 'Leaked Document',
 message: 'Verified internal Exxon climate research memo from 1982 added to Climate Sabotage evidence board.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 80),
 actionUrl: '/investigations/exxon-climate-coverup',
 },
 {
 id: 'notif_34',
 type: 'investigation',
 title: 'Cross-Reference Complete',
 message: 'Koch Network investigation cross-referenced with ALEC Model Legislation - 156 matching legislative templates found.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 84),
 actionUrl: '/investigations/koch-network',
 },
 {
 id: 'notif_35',
 type: 'team',
 title: 'Workspace Created',
 message: 'New workspace"Corporate Accountability"created with 12 linked investigations.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 88),
 actionUrl: '/workspaces',
 },
 {
 id: 'notif_36',
 type: 'alert',
 title: 'Threat Assessment',
 message: 'QAnon Radicalization investigation: 3 new domestic terrorism incidents linked to conspiracy narratives.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 92),
 actionUrl: '/investigations/qanon-radicalization',
 },
 {
 id: 'notif_37',
 type: 'investigation',
 title: 'Evidence Update',
 message: 'Wells Fargo Fraud: New class action filing reveals additional 1.4 million fraudulent accounts.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96),
 actionUrl: '/investigations/wells-fargo-fraud',
 },
 {
 id: 'notif_38',
 type: 'document',
 title: 'Archive Addition',
 message: 'Watergate: 18 previously unreleased Nixon White House tapes transcription completed.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 100),
 actionUrl: '/investigations/watergate',
 },
 {
 id: 'notif_39',
 type: 'system',
 title: 'Security Audit Complete',
 message: 'Monthly security audit passed. All encryption protocols verified. No unauthorized access detected.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120),
 actionUrl: '/audit',
 },
 {
 id: 'notif_40',
 type: 'investigation',
 title: 'Investigation Merged',
 message: 'CIA Torture and CIA Black Sites investigations linked - shared entity network identified.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 130),
 actionUrl: '/investigations/cia-torture',
 },
 {
 id: 'notif_41',
 type: 'alert',
 title: 'Court Filing',
 message: 'Dominion Defamation: Post-settlement discovery reveals additional internal Fox News communications.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 140),
 actionUrl: '/investigations/dominion-defamation',
 },
 {
 id: 'notif_42',
 type: 'comment',
 title: 'Witness Statement',
 message: 'Anonymous source provided corroborating testimony for DuPont PFAS Poisoning health impact claims.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 150),
 actionUrl: '/investigations/dupont-pfas-poisoning',
 },
 {
 id: 'notif_43',
 type: 'team',
 title: 'Collaboration Request',
 message: 'International Consortium of Investigative Journalists requested access to Panama Papers workspace.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 160),
 actionUrl: '/investigations/panama-papers',
 },
 {
 id: 'notif_44',
 type: 'investigation',
 title: 'Severity Upgrade',
 message: 'Police Militarization investigation upgraded from medium to high severity after DOD equipment audit.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 168),
 actionUrl: '/investigations/police-militarization',
 },
 {
 id: 'notif_45',
 type: 'document',
 title: 'Transcript Added',
 message: 'Complete congressional testimony transcript added: Big Tobacco executives under oath, 1994.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 170),
 actionUrl: '/investigations/big-tobacco-coverup',
 },
 {
 id: 'notif_46',
 type: 'alert',
 title: 'Legislative Alert',
 message: 'New bill introduced targeting whistleblower protections - directly relevant to Whistleblower Persecution investigation.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 175),
 actionUrl: '/investigations/whistleblower-persecution',
 },
 {
 id: 'notif_47',
 type: 'investigation',
 title: 'Entity Network Expanded',
 message: 'Federalist Society investigation: 23 new judicial appointment connections mapped.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 180),
 actionUrl: '/investigations/federalist-society',
 },
 {
 id: 'notif_48',
 type: 'system',
 title: 'Backup Complete',
 message: 'Full database backup completed successfully. 2.4 TB archived across distributed nodes.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 190),
 actionUrl: '/audit',
 },
 {
 id: 'notif_49',
 type: 'comment',
 title: 'Analysis Published',
 message: 'Data visualization:"Mass Incarceration by the Numbers"interactive report published on platform.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 200),
 actionUrl: '/investigations/mass-incarceration',
 },
 {
 id: 'notif_50',
 type: 'alert',
 title: 'Pattern Alert',
 message: 'Algorithm detected financial transfer patterns matching money laundering signatures in Deutsche Bank records.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 210),
 actionUrl: '/investigations/deutsche-bank',
 },
 {
 id: 'notif_51',
 type: 'investigation',
 title: 'Timeline Extended',
 message: 'Opioid Crisis investigation timeline extended back to 1996 with Purdue Pharma internal marketing documents.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 220),
 actionUrl: '/investigations/opioid-crisis',
 },
 {
 id: 'notif_52',
 type: 'document',
 title: 'Declassified Material',
 message: 'National Archives release: Operation Condor cables between CIA and South American intelligence services.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 230),
 actionUrl: '/investigations/operation-condor',
 },
 {
 id: 'notif_53',
 type: 'team',
 title: 'Milestone Reached',
 message: 'Environmental Crimes workspace reached 100 verified evidence items across 8 linked investigations.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 240),
 actionUrl: '/workspaces',
 },
 {
 id: 'notif_54',
 type: 'alert',
 title: 'Breaking Development',
 message: 'Supreme Court Ethics: New financial disclosure reveals additional undisclosed luxury travel by Justice Thomas.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 250),
 actionUrl: '/investigations/supreme-court-ethics',
 },
 {
 id: 'notif_55',
 type: 'investigation',
 title: 'Source Confirmed',
 message: 'Second independent source confirms Guantanamo Bay investigation claims about unreported interrogation techniques.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 260),
 actionUrl: '/investigations/guantanamo-bay',
 },
 {
 id: 'notif_56',
 type: 'system',
 title: 'Feature Update',
 message: 'New search filters deployed: filter investigations by date range, severity, and entity type.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 280),
 actionUrl: '/investigations',
 },
 {
 id: 'notif_57',
 type: 'comment',
 title: 'Community Note',
 message: 'Community fact-check added to Voter Suppression investigation: Georgia election data independently verified.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 300),
 actionUrl: '/investigations/voter-suppression',
 },
 {
 id: 'notif_58',
 type: 'alert',
 title: 'International Update',
 message: 'UK phone hacking scandal: New arrests made in connection with surveillance of royal family members.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 320),
 actionUrl: '/investigations/phone-hacking-scandal',
 },
 {
 id: 'notif_59',
 type: 'document',
 title: 'Legal Filing Added',
 message: 'Enron Scandal: Arthur Andersen document destruction order added to evidence archive.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 340),
 actionUrl: '/investigations/enron-scandal',
 },
 {
 id: 'notif_60',
 type: 'investigation',
 title: 'Connection Mapped',
 message: 'Private Prison Industry linked to Immigration Detention investigations - shared lobbying networks identified.',
 read: true,
 timestamp: new Date(Date.now() - 1000 * 60 * 60 * 360),
 actionUrl: '/investigations/private-prison-industry',
 },
];

// ============================================================
// Helper Functions
// ============================================================

const typeIcons = {
 alert: <AlertTriangle className="w-5 h-5"/>,
 investigation: <Target className="w-5 h-5"/>,
 document: <FileText className="w-5 h-5"/>,
 team: <Users className="w-5 h-5"/>,
 comment: <MessageSquare className="w-5 h-5"/>,
 system: <Bell className="w-5 h-5"/>,
};

const typeColors = {
 alert: 'text-blood-500 bg-blood-500/10',
 investigation: 'text-blood-500 bg-blood-500/10',
 document: 'text-blood-500 bg-blood-500/10',
 team: 'text-blood-500 bg-blood-500/10',
 comment: 'text-blood-500 bg-blood-500/10',
 system: 'text-zinc-500 bg-zinc-500/10',
};

// ============================================================
// Components
// ============================================================

function NotificationCard({ 
 notification, 
 onMarkRead, 
 onDelete 
}: { 
 notification: NotificationItem;
 onMarkRead: (id: string) => void;
 onDelete: (id: string) => void;
}) {
 const [showMenu, setShowMenu] = useState(false);

 return (
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 20 }}
 className={`p-4 border-l-2 ${
 notification.read 
 ? 'border-zinc-700 bg-transparent' 
 : 'border-blood-500 bg-blood-500/5'
 } hover:bg-zinc-900/50 transition-colors relative group`}
 >
 <div className="flex gap-4">
 <div className={`p-2 h-fit ${typeColors[notification.type]}`}>
 {typeIcons[notification.type]}
 </div>
 
 <div className="flex-1 min-w-0">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className={`font-semibold ${notification.read ? 'text-zinc-400' : 'text-white'}`}>
 {notification.title}
 </h3>
 <p className="text-zinc-500 text-sm mt-1">{notification.message}</p>
 </div>
 
 <div className="flex items-center gap-2">
 <span className="text-zinc-600 text-xs whitespace-nowrap">
 {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
 </span>
 
 <div className="relative">
 <button
 onClick={() => setShowMenu(!showMenu)}
 className="p-1 text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
 >
 <MoreVertical className="w-4 h-4"/>
 </button>
 
 <AnimatePresence>
 {showMenu && (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="absolute right-0 top-full mt-1 w-36 glass border border-zinc-700 py-1 z-10"
 >
 {!notification.read && (
 <button
 onClick={() => {
 onMarkRead(notification.id);
 setShowMenu(false);
 }}
 className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
 >
 <Check className="w-3 h-3"/>
 Mark as read
 </button>
 )}
 {notification.actionUrl && (
 <a
 href={notification.actionUrl}
 className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
 >
 <Eye className="w-3 h-3"/>
 View details
 </a>
 )}
 <button
 onClick={() => {
 onDelete(notification.id);
 setShowMenu(false);
 }}
 className="w-full px-3 py-2 text-left text-sm text-blood-400 hover:text-blood-400 hover:bg-zinc-800 flex items-center gap-2"
 >
 <Trash2 className="w-3 h-3"/>
 Delete
 </button>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </div>
 
 {notification.actionUrl && (
 <a
 href={notification.actionUrl}
 className="inline-block mt-2 text-sm text-blood-500 hover:text-blood-400 transition-colors"
 >
 View details →
 </a>
 )}
 </div>
 </div>
 </motion.div>
 );
}

// ============================================================
// Main Page
// ============================================================

export default function NotificationsPage() {
 const [notifications, setNotifications] = useState(mockNotifications);
 const [filter, setFilter] = useState<'all' | 'unread'>('all');
 const [typeFilter, setTypeFilter] = useState<string>('all');
 const [soundEnabled, setSoundEnabled] = useState(true);

 const handleMarkRead = (id: string) => {
 setNotifications((prev) =>
 prev.map((n) => (n.id === id ? { ...n, read: true } : n))
 );
 };

 const handleDelete = (id: string) => {
 setNotifications((prev) => prev.filter((n) => n.id !== id));
 };

 const handleMarkAllRead = () => {
 setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
 };

 const handleClearAll = () => {
 setNotifications([]);
 };

 const filteredNotifications = notifications.filter((n) => {
 if (filter === 'unread' && n.read) return false;
 if (typeFilter !== 'all' && n.type !== typeFilter) return false;
 return true;
 });

 const unreadCount = notifications.filter((n) => !n.read).length;

 // Group by time
 const grouped = {
 today: filteredNotifications.filter((n) => isToday(n.timestamp)),
 thisWeek: filteredNotifications.filter((n) => !isToday(n.timestamp) && isThisWeek(n.timestamp)),
 older: filteredNotifications.filter((n) => !isThisWeek(n.timestamp)),
 };

 return (
 <div className="min-h-screen">
 <div className="max-w-4xl mx-auto px-6 py-12">
 {/* Header */}
 <div className="flex items-center justify-between mb-8">
 <div>
 <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
 <GlitchText text="NOTIFICATIONS"/>
 </h1>
 <p className="text-zinc-400">
 {unreadCount > 0 
 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
 : 'All caught up!'
 }
 </p>
 </div>

 <div className="flex items-center gap-4">
 <button
 onClick={() => setSoundEnabled(!soundEnabled)}
 className={`p-2 glass ${soundEnabled ? 'text-white' : 'text-zinc-500'}`}
 title={soundEnabled ? 'Mute notifications' : 'Enable sound'}
 >
 {soundEnabled ? <Volume2 className="w-5 h-5"/> : <VolumeX className="w-5 h-5"/>}
 </button>
 <button className="p-2 glass text-zinc-400 hover:text-white transition-colors">
 <Settings className="w-5 h-5"/>
 </button>
 </div>
 </div>

 {/* Actions Bar */}
 <div className="flex items-center justify-between mb-6">
 <div className="flex items-center gap-4">
 <div className="flex items-center glass p-1">
 <button
 onClick={() => setFilter('all')}
 className={`px-4 py-2 text-sm font-medium transition-colors ${
 filter === 'all' ? 'bg-blood-600 text-white' : 'text-zinc-400 hover:text-white'
 }`}
 >
 All
 </button>
 <button
 onClick={() => setFilter('unread')}
 className={`px-4 py-2 text-sm font-medium transition-colors ${
 filter === 'unread' ? 'bg-blood-600 text-white' : 'text-zinc-400 hover:text-white'
 }`}
 >
 Unread ({unreadCount})
 </button>
 </div>

 <select
 value={typeFilter}
 onChange={(e) => setTypeFilter(e.target.value)}
 className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-blood-500"
 >
 <option value="all">All types</option>
 <option value="alert">Alerts</option>
 <option value="investigation">Investigations</option>
 <option value="document">Documents</option>
 <option value="team">Team</option>
 <option value="comment">Comments</option>
 <option value="system">System</option>
 </select>
 </div>

 <div className="flex items-center gap-2">
 <button
 onClick={handleMarkAllRead}
 disabled={unreadCount === 0}
 className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
 >
 <CheckCheck className="w-4 h-4"/>
 Mark all read
 </button>
 <button
 onClick={handleClearAll}
 disabled={notifications.length === 0}
 className="flex items-center gap-2 px-4 py-2 text-blood-400 hover:text-blood-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
 >
 <Trash2 className="w-4 h-4"/>
 Clear all
 </button>
 </div>
 </div>

 {/* Notifications List */}
 <div className="space-y-6">
 {grouped.today.length > 0 && (
 <div>
 <h2 className="text-sm font-medium text-zinc-500 mb-3 flex items-center gap-2">
 <Clock className="w-4 h-4"/>
 Today
 </h2>
 <div className="glass-card overflow-hidden divide-y divide-zinc-800">
 <AnimatePresence>
 {grouped.today.map((notification) => (
 <NotificationCard
 key={notification.id}
 notification={notification}
 onMarkRead={handleMarkRead}
 onDelete={handleDelete}
 />
 ))}
 </AnimatePresence>
 </div>
 </div>
 )}

 {grouped.thisWeek.length > 0 && (
 <div>
 <h2 className="text-sm font-medium text-zinc-500 mb-3">This Week</h2>
 <div className="glass-card overflow-hidden divide-y divide-zinc-800">
 <AnimatePresence>
 {grouped.thisWeek.map((notification) => (
 <NotificationCard
 key={notification.id}
 notification={notification}
 onMarkRead={handleMarkRead}
 onDelete={handleDelete}
 />
 ))}
 </AnimatePresence>
 </div>
 </div>
 )}

 {grouped.older.length > 0 && (
 <div>
 <h2 className="text-sm font-medium text-zinc-500 mb-3">Older</h2>
 <div className="glass-card overflow-hidden divide-y divide-zinc-800">
 <AnimatePresence>
 {grouped.older.map((notification) => (
 <NotificationCard
 key={notification.id}
 notification={notification}
 onMarkRead={handleMarkRead}
 onDelete={handleDelete}
 />
 ))}
 </AnimatePresence>
 </div>
 </div>
 )}
 </div>

 {filteredNotifications.length === 0 && (
 <div className="text-center py-16">
 <Bell className="w-16 h-16 text-zinc-700 mx-auto mb-4"/>
 <h3 className="text-xl font-semibold text-white mb-2">No notifications</h3>
 <p className="text-zinc-400">
 {filter === 'unread' 
 ?"You've read all your notifications"
 :"You don't have any notifications yet"
 }
 </p>
 </div>
 )}
 </div>
 </div>
 );
}
