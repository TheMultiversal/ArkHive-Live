const fs = require('fs');

// Generate 50+ notifications tied to real investigations and platform activity
const newNotifications = [
  // === UNREAD ALERTS (recent, investigating-related) ===
  { type: 'alert', title: 'CRITICAL: New Evidence Filed', message: 'Court records reveal additional co-conspirators in the January 6th investigation. 12 new names identified.', read: false, hours: 0.5, url: '/investigations/january-6-insurrection' },
  { type: 'investigation', title: 'Severity Escalation', message: 'Boeing Safety Crisis investigation elevated to CRITICAL after new whistleblower death reported.', read: false, hours: 1.5, url: '/investigations/boeing-safety-crisis' },
  { type: 'alert', title: 'Document Declassified', message: 'CIA FOIA release: 847 pages of previously classified MKUltra documents now available in archive.', read: false, hours: 2, url: '/investigations/mkultra' },
  { type: 'comment', title: 'New Analysis Posted', message: 'Dr. Rebecca Torres posted analysis on Epstein Network: "Flight log cross-reference reveals 14 previously unidentified passengers."', read: false, hours: 3, url: '/investigations/epstein-network' },
  { type: 'investigation', title: 'Investigation Linked', message: 'Dark Money Politics investigation linked to Leonard Leo Network  -  shared financial entities detected.', read: false, hours: 4, url: '/investigations/dark-money-politics' },
  { type: 'alert', title: 'Whistleblower Submission', message: 'New encrypted submission received regarding FAA regulatory capture. Verification in progress.', read: false, hours: 5, url: '/investigations/faa-regulatory-capture' },
  { type: 'document', title: 'Evidence Upload', message: 'Classified Pentagon Papers supplement (312 pages) uploaded to Afghanistan Papers workspace.', read: false, hours: 6, url: '/investigations/afghanistan-papers' },
  { type: 'team', title: 'Workspace Activity', message: 'Financial Crimes workspace: 4 new members joined, 23 documents uploaded in the last 24 hours.', read: false, hours: 7, url: '/workspaces' },
  { type: 'investigation', title: 'Pattern Detected', message: 'Automated analysis found matching financial patterns between FTX Crypto Fraud and WorldCom Fraud investigations.', read: false, hours: 8, url: '/investigations/ftx-crypto-fraud' },
  { type: 'alert', title: 'Entity Connection Alert', message: 'New corporate filing links Purdue Pharma shell company to 3 additional opioid distribution networks.', read: false, hours: 10, url: '/investigations/purdue-pharma-oxycontin' },

  // === READ BUT RECENT (last 2 days) ===
  { type: 'investigation', title: 'Status Change', message: 'Trump Criminal Compendium  -  Georgia RICO case: new co-defendant plea agreement filed.', read: true, hours: 12, url: '/investigations/trump-criminal-compendium' },
  { type: 'comment', title: 'Thread Updated', message: 'Marcus Chen replied on CIA Torture Program: "Senate Intelligence Committee transcript confirms additional black site locations."', read: true, hours: 14, url: '/investigations/cia-torture-program' },
  { type: 'document', title: 'Report Published', message: 'ArkHive analysis report: "Flint Water Crisis  -  10 Years Later: Accountability Assessment" now available.', read: true, hours: 16, url: '/investigations/flint-water-crisis' },
  { type: 'alert', title: 'Court Ruling', message: 'Federal judge orders release of redacted Mar-a-Lago documents search warrant materials.', read: true, hours: 18, url: '/investigations/mar-a-lago-documents' },
  { type: 'system', title: 'Archive Update', message: 'Document archive expanded: 193 new entries cataloged across 40+ investigations.', read: true, hours: 20, url: '/documents' },
  { type: 'investigation', title: 'Timeline Updated', message: 'COINTELPRO investigation timeline expanded with 12 newly declassified FBI memoranda dates.', read: true, hours: 22, url: '/investigations/cointelpro' },
  { type: 'team', title: 'Member Role Change', message: 'You have been promoted to Senior Analyst in the Government Abuse investigations workspace.', read: true, hours: 24, url: '/workspaces' },
  { type: 'alert', title: 'Source Verification', message: 'Previously unverified source on Iran-Contra investigation confirmed by secondary documentation.', read: true, hours: 26, url: '/investigations/iran-contra' },
  { type: 'comment', title: 'Expert Commentary', message: 'Former FBI agent James Doyle commented on surveillance-expansion: "This matches internal protocols I witnessed firsthand."', read: true, hours: 28, url: '/investigations/surveillance-expansion' },
  { type: 'document', title: 'FOIA Response', message: 'Department of Defense FOIA response received: 1,247 pages regarding drone assassination program.', read: true, hours: 30, url: '/investigations/drone-assassination-program' },

  // === OLDER NOTIFICATIONS (3-7 days) ===
  { type: 'investigation', title: 'New Investigation Added', message: 'Genocide Palestine investigation created with 47 primary sources and 23 entity connections.', read: true, hours: 72, url: '/investigations/genocide-palestine' },
  { type: 'alert', title: 'Entity Profile Updated', message: 'Erik Prince entity profile updated with 8 new corporate affiliations and offshore holdings.', read: true, hours: 74, url: '/entities/individuals/erik-prince' },
  { type: 'system', title: 'Platform Statistics', message: 'ArkHive now tracking 385 investigations, 2,007 entities, and 201 archived documents.', read: true, hours: 76, url: '/' },
  { type: 'comment', title: 'Research Update', message: 'Analyst posted on Project 2025: "Heritage Foundation internal emails reveal implementation timeline for 2025-2029."', read: true, hours: 78, url: '/investigations/project-2025' },
  { type: 'document', title: 'Leaked Document', message: 'Verified internal Exxon climate research memo from 1982 added to Climate Sabotage evidence board.', read: true, hours: 80, url: '/investigations/exxon-climate-coverup' },
  { type: 'investigation', title: 'Cross-Reference Complete', message: 'Koch Network investigation cross-referenced with ALEC Model Legislation  -  156 matching legislative templates found.', read: true, hours: 84, url: '/investigations/koch-network' },
  { type: 'team', title: 'Workspace Created', message: 'New workspace "Corporate Accountability" created with 12 linked investigations.', read: true, hours: 88, url: '/workspaces' },
  { type: 'alert', title: 'Threat Assessment', message: 'QAnon Radicalization investigation: 3 new domestic terrorism incidents linked to conspiracy narratives.', read: true, hours: 92, url: '/investigations/qanon-radicalization' },
  { type: 'investigation', title: 'Evidence Update', message: 'Wells Fargo Fraud: New class action filing reveals additional 1.4 million fraudulent accounts.', read: true, hours: 96, url: '/investigations/wells-fargo-fraud' },
  { type: 'document', title: 'Archive Addition', message: 'Watergate: 18 previously unreleased Nixon White House tapes transcription completed.', read: true, hours: 100, url: '/investigations/watergate' },

  // === WEEK+ OLD ===
  { type: 'system', title: 'Security Audit Complete', message: 'Monthly security audit passed. All encryption protocols verified. No unauthorized access detected.', read: true, hours: 120, url: '/audit' },
  { type: 'investigation', title: 'Investigation Merged', message: 'CIA Torture and CIA Black Sites investigations linked  -  shared entity network identified.', read: true, hours: 130, url: '/investigations/cia-torture' },
  { type: 'alert', title: 'Court Filing', message: 'Dominion Defamation: Post-settlement discovery reveals additional internal Fox News communications.', read: true, hours: 140, url: '/investigations/dominion-defamation' },
  { type: 'comment', title: 'Witness Statement', message: 'Anonymous source provided corroborating testimony for DuPont PFAS Poisoning health impact claims.', read: true, hours: 150, url: '/investigations/dupont-pfas-poisoning' },
  { type: 'team', title: 'Collaboration Request', message: 'International Consortium of Investigative Journalists requested access to Panama Papers workspace.', read: true, hours: 160, url: '/investigations/panama-papers' },
  { type: 'investigation', title: 'Severity Upgrade', message: 'Police Militarization investigation upgraded from medium to high severity after DOD equipment audit.', read: true, hours: 168, url: '/investigations/police-militarization' },
  { type: 'document', title: 'Transcript Added', message: 'Complete congressional testimony transcript added: Big Tobacco executives under oath, 1994.', read: true, hours: 170, url: '/investigations/big-tobacco-coverup' },
  { type: 'alert', title: 'Legislative Alert', message: 'New bill introduced targeting whistleblower protections  -  directly relevant to Whistleblower Persecution investigation.', read: true, hours: 175, url: '/investigations/whistleblower-persecution' },
  { type: 'investigation', title: 'Entity Network Expanded', message: 'Federalist Society investigation: 23 new judicial appointment connections mapped.', read: true, hours: 180, url: '/investigations/federalist-society' },
  { type: 'system', title: 'Backup Complete', message: 'Full database backup completed successfully. 2.4 TB archived across distributed nodes.', read: true, hours: 190, url: '/audit' },
  { type: 'comment', title: 'Analysis Published', message: 'Data visualization: "Mass Incarceration by the Numbers" interactive report published on platform.', read: true, hours: 200, url: '/investigations/mass-incarceration' },
  { type: 'alert', title: 'Pattern Alert', message: 'Algorithm detected financial transfer patterns matching money laundering signatures in Deutsche Bank records.', read: true, hours: 210, url: '/investigations/deutsche-bank' },
  { type: 'investigation', title: 'Timeline Extended', message: 'Opioid Crisis investigation timeline extended back to 1996 with Purdue Pharma internal marketing documents.', read: true, hours: 220, url: '/investigations/opioid-crisis' },
  { type: 'document', title: 'Declassified Material', message: 'National Archives release: Operation Condor cables between CIA and South American intelligence services.', read: true, hours: 230, url: '/investigations/operation-condor' },
  { type: 'team', title: 'Milestone Reached', message: 'Environmental Crimes workspace reached 100 verified evidence items across 8 linked investigations.', read: true, hours: 240, url: '/workspaces' },
  { type: 'alert', title: 'Breaking Development', message: 'Supreme Court Ethics: New financial disclosure reveals additional undisclosed luxury travel by Justice Thomas.', read: true, hours: 250, url: '/investigations/supreme-court-ethics' },
  { type: 'investigation', title: 'Source Confirmed', message: 'Second independent source confirms Guantanamo Bay investigation claims about unreported interrogation techniques.', read: true, hours: 260, url: '/investigations/guantanamo-bay' },
  { type: 'system', title: 'Feature Update', message: 'New search filters deployed: filter investigations by date range, severity, and entity type.', read: true, hours: 280, url: '/investigations' },
  { type: 'comment', title: 'Community Note', message: 'Community fact-check added to Voter Suppression investigation: Georgia election data independently verified.', read: true, hours: 300, url: '/investigations/voter-suppression' },
  { type: 'alert', title: 'International Update', message: 'UK phone hacking scandal: New arrests made in connection with surveillance of royal family members.', read: true, hours: 320, url: '/investigations/phone-hacking-scandal' },
  { type: 'document', title: 'Legal Filing Added', message: 'Enron Scandal: Arthur Andersen document destruction order added to evidence archive.', read: true, hours: 340, url: '/investigations/enron-scandal' },
  { type: 'investigation', title: 'Connection Mapped', message: 'Private Prison Industry linked to Immigration Detention investigations  -  shared lobbying networks identified.', read: true, hours: 360, url: '/investigations/private-prison-industry' },
];

// Read the current file
let content = fs.readFileSync('src/app/notifications/page.tsx', 'utf8');

// Generate the notification entries
const entries = newNotifications.map((n, i) => {
  const id = i + 9; // Start after notif_8
  const title = n.title.replace(/'/g, "\\'");
  const message = n.message.replace(/'/g, "\\'");
  const urlLine = n.url ? `\n    actionUrl: '${n.url}',` : '';
  
  return `  {
    id: 'notif_${id}',
    type: '${n.type}',
    title: '${title}',
    message: '${message}',
    read: ${n.read},
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * ${n.hours}),${urlLine}
  }`;
});

// Find the closing of mockNotifications array - after notif_8
const notif8Idx = content.indexOf("notif_8");
if (notif8Idx === -1) {
  console.error('Could not find notif_8');
  process.exit(1);
}

const bracketIdx = content.indexOf('];', notif8Idx);
const before = content.slice(0, bracketIdx);
const after = content.slice(bracketIdx);

const newBlock = '\n\n  // === Expanded Notifications ===\n' + entries.join(',\n') + ',\n';
const newContent = before + newBlock + after;

fs.writeFileSync('src/app/notifications/page.tsx', newContent);

// Count
const total = (newContent.match(/id: 'notif_/g) || []).length;
console.log(`Total notifications: ${total}`);
