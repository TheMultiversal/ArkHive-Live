// Investigation data shard
import type { InvestigationData } from './types';

const investigations_x: Record<string, InvestigationData> = {
  'xkeyscore-universal-data-collection': {
    title: 'XKeyscore Universal Data Collection',
    subtitle: 'How the NSA built a system capable of searching nearly everything a person does on the internet in real time; collecting emails, chats, browsing history, and keystrokes of millions worldwide without individual warrants',
    severity: 'critical',
    category: 'Surveillance & Privacy',
    date: 'January 28, 2011',
    lastUpdated: 'January 2, 2013',
    summary: 'XKeyscore is the NSA\'s most comprehensive internet surveillance system; described in classified training materials as covering "nearly everything a typical user does on the internet." Revealed by Edward Snowden in July 2013; XKeyscore operates across 700+ servers at approximately 150 sites worldwide; ingesting over 20 terabytes of data per day from fiber optic cables, satellite intercepts, and partnerships with foreign intelligence agencies through the Five Eyes alliance and beyond. NSA analysts can search through this vast database of internet activity using simple web-based forms; requiring no prior court authorization for queries. The system collects and indexes emails, social media activity, browsing history, search queries, chat logs, file transfers, images, documents, and even keystroke data. Internal NSA presentations boasted that XKeyscore had the "widest-reaching" collection of online data of any NSA tool.',
    content: [
      'SYSTEM ARCHITECTURE AND CAPABILITIES: XKeyscore operates as a federated query system across approximately 150 field sites in dozens of countries; including NSA facilities at Fort Meade, Maryland; Menwith Hill in the United Kingdom; Pine Gap in Australia; and sites in Germany, Japan, and other allied nations. The system ingests data at multiple collection points where fiber optic cables are tapped (upstream collection) and from PRISM; the program that collects data directly from servers of companies including Google, Facebook, Microsoft, Yahoo, Apple, and others. At full capacity, XKeyscore processes over 20 terabytes daily; so much data that it can only be stored for 3-5 days at most sites before being overwritten, though metadata is retained for 30-45 days. Selected communications flagged by analysts are moved to longer-term databases. Training slides revealed that analysts could search by name, email address, IP address, phone number, browser fingerprint, or even keywords in any language.',
      'NO WARRANT REQUIRED: Perhaps the most alarming aspect of XKeyscore is the minimal oversight required to conduct searches. According to classified NSA training materials; analysts need only fill out a simple on-screen form providing a "broad justification" for the search; no court warrant, no supervisor approval, and no probable cause determination. The analyst simply selects a justification from a dropdown menu such as "foreign intelligence" and the search proceeds. Edward Snowden testified that "I, sitting at my desk, could wiretap anyone; from you or your accountant to a federal judge to even the president, if I had a personal email." While NSA leadership disputed the breadth of this claim; the training materials confirmed that the system\'s access controls were minimal. Section 702 of the FISA Amendments Act of 2008 provided the legal framework; but critics; including FISA Court judges; found that the NSA repeatedly exceeded even these permissive boundaries.',
      'FIVE EYES AND GLOBAL PARTNERSHIPS: XKeyscore is not solely an American program. The Five Eyes alliance (United States, United Kingdom, Canada, Australia, and New Zealand) shares access to XKeyscore data. Britain\'s GCHQ; Germany\'s BND; Australia\'s ASD; and other partner agencies both contribute data to and access the system. Snowden documents revealed that Germany\'s BND fed data from its own surveillance of European communications into XKeyscore in exchange for access to NSA capabilities. Sweden and Japan also had access arrangements. This global network creates a surveillance architecture where partner nations can effectively spy on each other\'s citizens and share the results; circumventing domestic legal restrictions that might prohibit direct surveillance of their own populations. The arrangement means that even citizens of countries with strong privacy laws have their communications swept up in XKeyscore\'s global dragnet.',
      'WHAT WAS COLLECTED: Specific examples from NSA training slides demonstrated XKeyscore\'s capabilities. The system could extract and search the content of emails, Facebook chats, and other social media messages. It could identify and track users of encrypted communications tools like VPNs and Tor; ironically flagging privacy-conscious individuals for additional surveillance. Analysts could retrieve the full browsing history of any targeted individual. The system tracked HTTP activity including URLs visited, searches performed, and forms submitted. It could correlate disparate online identities to a single real person through browser cookies, login credentials, and device fingerprints. One training exercise showed how an analyst could identify every person in a given country who used a particular search engine. Another showed how to find every user of a specific encrypted email service. The system also collected and indexed document files, images, and metadata from cloud storage services.',
      'AFTERMATH AND INSUFFICIENT REFORM: The Snowden revelations about XKeyscore triggered worldwide outrage and diplomatic incidents. Brazil\'s President Dilma Rousseff cancelled a state visit to Washington after learning the NSA had monitored her personal communications. Germany was scandalized by revelations that Chancellor Angela Merkel\'s phone had been tapped. The USA FREEDOM Act of 2015 imposed modest restrictions on bulk metadata collection of phone records but did not significantly alter the internet surveillance programs like XKeyscore that operate under Section 702. The Privacy and Civil Liberties Oversight Board (PCLOB) found that the Section 702 program; which underpins much of XKeyscore\'s authority; raises "serious constitutional questions." Section 702 was reauthorized in April 2024 with expanded authority that critics called "the biggest expansion of domestic surveillance since the Patriot Act." The fundamental architecture of XKeyscore and systems like it remains operational; the NSA\'s capability to search the internet activity of virtually anyone worldwide has not been meaningfully curtailed.',
    ],
    tags: ['NSA', 'Mass Surveillance', 'Edward Snowden', 'Five Eyes', 'Section 702', 'FISA', 'Internet Privacy'],
    sources: [
      { title: 'The Guardian: XKeyscore NSA Tool', url: 'https://www.theguardian.com/world/2013/jul/31/nsa-top-secret-program-online-data', type: 'Investigative Report' },
      { title: 'Snowden Archive', url: 'https://edwardsnowden.com', type: 'Primary Source' },
      { title: 'PCLOB Section 702 Report', url: 'https://www.pclob.gov', type: 'Government Record' },
      { title: 'EFF: NSA Spying', url: 'https://www.eff.org/nsa-spying', type: 'Legal Analysis' },
      { name: 'FTC Consumer Protection', url: 'https://www.ftc.gov/enforcement' },
    ],
    affiliations: [
      { id: '1', name: 'NSA', type: 'agency', relationship: 'Built and operates XKeyscore across 700+ servers at 150 sites worldwide; processes 20+ terabytes of internet data daily; analysts can search without warrants', href: '/entities/agencies/nsa' },
      { id: '2', name: 'Edward Snowden', type: 'individual', relationship: 'Leaked classified XKeyscore training materials in 2013; revealed the system\'s capabilities and the minimal oversight governing its use', href: '/entities/individuals/edward-snowden' },
    ],
   eventOriginDate: '2008-01-01',
   lastActivityDate: '2024-04-01',
   pageUpdatedDate: '2026-03-18',
      timeline: [
     { date: '2008', event: 'Section 702 of the FISA Amendments Act of 2008 provided the legal framework; but critics; including FISA Court judges; found that the NSA repeatedly exceeded even these permissive boundaries.', type: 'legal' },
     { date: '2008-01-01', event: 'XKeyscore Universal Data Collection investigation begins — events under scrutiny originate from this period', type: 'default' },
     { date: '2015', event: 'The USA FREEDOM Act of 2015 imposed modest restrictions on bulk metadata collection of phone records but did not significantly alter the internet surveillance programs like XKeyscore that operate under Section 702.', type: 'default' },
     { date: '2024-04', event: 'The Privacy and Civil Liberties Oversight Board (PCLOB) found that the Section 702 program; which underpins much of XKeyscore\'s authority; raises ;serious constitutional questions.; Section 702 was reauthorized in...', type: 'default' },
     { date: '2024-04-01', event: 'XKeyscore Universal Data Collection — investigation remains active with ongoing developments', type: 'default' },
   ],
  },
  'forced-arbitration-consumer-rights': {
    title: 'Forced Arbitration and Consumer Rights',
    subtitle: 'How Mandatory Arbitration Clauses Strip Americans of Their Day in Court',
    severity: 'high' as const,
    category: 'Consumer Protection & Law',
    date: '2024-06-15',
    lastUpdated: '2025-01-30',
    summary: 'Over 60 million American workers and virtually all consumers are bound by mandatory arbitration clauses that waive their right to sue in court or join class actions. Arbitration outcomes overwhelmingly favor corporations, with consumers winning less than 9% of cases and recovering a fraction of what courts would award.',
    content: [
      'Forced arbitration clauses are embedded in the fine print of employment contracts, credit card agreements, nursing home admissions forms, cell phone plans, and virtually every consumer transaction in the modern economy. These clauses require disputes to be resolved through private arbitration rather than court proceedings, and nearly always include class action waivers that prevent consumers from aggregating small claims into economically viable litigation. An estimated 826 million consumer arbitration agreements are in force in the United States, covering everything from bank accounts to streaming subscriptions.',
      'The arbitration system structurally favors repeat corporate players over one-time individual claimants. Arbitrators are selected from private firms that depend on corporate clients for repeat business, creating an inherent incentive to issue favorable rulings. Research published in the Stanford Law Review found that arbitrators ruled for the corporation in 93% of consumer arbitration cases and that corporations that appeared repeatedly before the same arbitrator received increasingly favorable outcomes over time. Consumers who prevailed received average awards 35% lower than comparable court judgments.',
      'The class action waiver component may be the most consequential element. When a corporation overcharges 10 million customers by $30 each, no individual customer will spend the time and money to arbitrate a $30 claim. The class action mechanism allows aggregation of these claims into cases with sufficient value to attract legal representation. By waiving class actions, corporations immunize themselves from accountability for widespread small-dollar fraud. The Supreme Court blessed this practice in AT&T Mobility v. Concepcion (2011) and American Express v. Italian Colors (2013), decisions that Justice Kagan warned would enable companies to insulate themselves from all private enforcement.',
      'Employment arbitration creates additional power imbalances. Workers who sign arbitration agreements as a condition of employment cannot sue for wage theft, discrimination, sexual harassment, or wrongful termination in court. The #MeToo movement highlighted how these clauses silenced harassment victims and protected serial abusers. Congress responded with the Ending Forced Arbitration of Sexual Assault and Sexual Harassment Act of 2022, which exempted those specific claims, but left all other employment disputes subject to mandatory arbitration.',
      'Transparency is virtually nonexistent in the system. Arbitration proceedings are confidential, meaning that patterns of corporate misconduct never become public. Unlike court proceedings, there is no public record of complaints, evidence, or outcomes. A company can lose dozens of individual arbitrations involving the same defective product or illegal practice without any of the claimants knowing about the others. Proposals to require arbitration transparency, expand the 2022 exemption to all employment claims, and ban pre-dispute arbitration agreements in consumer contracts have been introduced repeatedly in Congress but face opposition from the U.S. Chamber of Commerce and financial services lobby.',
    ],
    tags: ['forced arbitration', 'class action waiver', 'consumer rights', 'employment law', 'arbitration clause', 'corporate immunity', 'access to justice'],
    sources: [
      'https://www.epi.org/publication/the-growing-use-of-mandatory-arbitration-access-to-the-courts-is-now-barred-for-more-than-60-million-american-workers/',
      'https://www.americanbar.org/groups/dispute_resolution/resources/DisputeResolutionProcesses/arbitration/',
      'https://www.consumerfinance.gov/data-research/research-reports/arbitration-study-report-to-congress-2015/',
      { name: 'ProPublica Investigation Database', url: 'https://www.propublica.org/' },

      { name: 'Government Accountability Office', url: 'https://www.gao.gov/reports-testimonies' },
    ],
    affiliations: [
      { id: '1', name: 'CFPB', type: 'agency', relationship: 'Completed 2015 study finding arbitration harmed consumers; issued rule banning class action waivers in 2017; Congress overturned the rule via Congressional Review Act before it took effect', href: '/entities/agencies/cfpb' },
      { id: '2', name: 'FTC', type: 'agency', relationship: 'Has authority to challenge unfair contractual terms but has not used it to address forced arbitration; defers to CFPB on financial product arbitration', href: '/entities/agencies/ftc' },
    ],
   eventOriginDate: '2011-01-01',
   lastActivityDate: '2025-01-30',
   pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2011', event: 'Concepcion (2011) and American Express v', type: 'default' },
     { date: '2013', event: 'Italian Colors (2013), decisions that Justice Kagan warned would enable companies to insulate themselves from all private enforcement', type: 'default' },
     { date: '2022', event: 'Congress responded with the Ending Forced Arbitration of Sexual Assault and Sexual Harassment Act of 2022, which exempted those specific claims, but left all other employment disputes subject to ma...', type: 'political' },
     { date: '2022', event: 'Proposals to require arbitration transparency, expand the 2022 exemption to all employment claims, and ban pre-dispute arbitration agreements in consumer contracts have been introduced repeatedly i...', type: 'default' },
   ],
  },
};

export default investigations_x;
