import type { AccountabilityData } from '@/types/accountability';

export const catholicChurchAccountability: AccountabilityData = {
  investigationSlug: 'catholic-church-abuse',

  crimeSummary: 'For decades, the Catholic Church systematically concealed the sexual abuse of tens of thousands of children by thousands of priests worldwide. The 2002 Boston Globe Spotlight investigation exposed the scope: Cardinal Bernard Law and the Boston Archdiocese knowingly transferred predator priests between parishes rather than reporting them to police, creating new victims at each assignment. Subsequent investigations revealed the coverup was global and institutional  -  from parish to Vatican. The Pennsylvania grand jury report (2018) documented over 1,000 child victims and 300 predator priests in just six Pennsylvania dioceses. The Australian Royal Commission found 7% of all Catholic priests in Australia were accused of abuse. Billions have been paid in settlements. Multiple dioceses have filed for bankruptcy. Yet the Vatican has never fully opened its archives, and the institutional structure that enabled the abuse  -  mandatory celibacy, clerical hierarchy, canonical secrecy  -  remains fundamentally unchanged.',

  totalHarm: 'Over 100,000 documented victims in the U.S. alone (John Jay Report). Global estimates range from hundreds of thousands to millions. Thousands of predator priests identified. $4+ billion paid in U.S. settlements and legal costs. Multiple dioceses bankrupted. Victims suffer lifelong trauma including depression, substance abuse, relationship dysfunction, and elevated suicide rates. Entire generations lost faith in the institution.',

  victimsAffected: 'Over 100,000 documented victims in the U.S. (likely a significant undercount). Thousands more worldwide. Children as young as 3 were abused. Many victims were from vulnerable populations  -  poor, immigrant families; children in orphanages and residential schools; Indigenous children forcibly placed in Catholic institutions. Victims\' families devastated. The broader Catholic community betrayed by their spiritual leaders.',

  primaryTargets: [
    {
      name: 'Cardinal Bernard Law',
      role: 'Archbishop of Boston. Central figure in the coverup exposed by the Boston Globe. Transferred known predator priests between parishes for years.',
      currentStatus: 'Resigned as Archbishop of Boston in December 2002 after Globe investigation. Was reassigned to the prestigious Basilica of Santa Maria Maggiore in Rome  -  effectively promoted by the Vatican. Died in December 2017 in Rome, never having faced criminal charges.',
      accountabilityPath: 'Law died without criminal accountability. The accountability must now focus on the institutional structures he represented. His files and communications, now part of archdiocese records, can support ongoing prosecution of other perpetrators and institutional claims.',
      obstacles: [
        'Deceased (December 2017)',
        'Was effectively given Vatican sanctuary in Rome',
        'Canonical privilege limited disclosure during his lifetime',
      ],
    },
    {
      name: 'Vatican / Holy See',
      role: 'Central governing authority that received reports of abuse from worldwide dioceses and directed the response  -  which was overwhelmingly to conceal and transfer rather than report to authorities.',
      currentStatus: 'Pope Francis has made statements of apology and established Vatican commission on child protection. Has laicized some predator priests. But has not opened Vatican archives, has not mandated secular reporting, and has not fundamentally reformed the structures that enabled abuse. The Pontifical Secret (Secretum Pontificium) was formally removed from sex abuse cases in 2019 but implementation varies.',
      accountabilityPath: 'Open Vatican archives to independent investigators. Mandate reporting of all abuse allegations to secular authorities. Reform canonical law to remove barriers to prosecution. Cooperate fully with civil and criminal investigations worldwide. Implement mandatory background checks and accountability mechanisms.',
      obstacles: [
        'Vatican claims sovereign immunity as a nation-state',
        'Diplomatic immunity for Vatican officials',
        'Archives remain largely sealed',
        'Canonical law still takes precedence internally',
        'Global institution resists national jurisdiction',
      ],
    },
    {
      name: 'Cardinal Theodore McCarrick',
      role: 'Former Archbishop of Washington D.C. and one of the most powerful American cardinals. Sexually abused seminarians and minors over decades.',
      currentStatus: 'Laicized (defrocked) by the Vatican in 2019. Criminally charged with sexual assault in Massachusetts (2021)  -  charges dropped in 2023 after court ruled him incompetent to stand trial due to dementia. First U.S. cardinal ever criminally charged.',
      accountabilityPath: 'Criminal prosecution foreclosed by competency ruling. Civil claims by victims continue. Investigation into who in the Vatican and U.S. hierarchy knew about McCarrick\'s conduct and facilitated his rise to power. Vatican investigation produced a report but key witnesses disputed its findings.',
      obstacles: [
        'Ruled incompetent to stand trial',
        'Advanced age and dementia',
        'Vatican investigation seen as insufficiently independent',
      ],
    },
    {
      name: 'Dioceses Worldwide (Institutional)',
      role: 'Individual dioceses that received abuse reports and chose to conceal rather than report them, transferring predator priests to new parishes.',
      currentStatus: 'Over 30 U.S. dioceses have filed for bankruptcy. Billions paid in settlements. Some dioceses have released lists of credibly accused priests. Many have not. Compliance with reform measures varies widely.',
      accountabilityPath: 'State AG investigations (every state should have one). Grand jury investigations. Mandatory reporting legislation. Statute of limitations reform  -  many states have opened "lookback windows" allowing old claims. Bankruptcy proceedings must protect victim compensation over institutional assets.',
      obstacles: [
        'Religious liberty arguments invoked for institutional autonomy',
        'Bankruptcy used to limit victim compensation',
        'Many records destroyed or hidden',
        'Political influence and community loyalty protect institutions',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'State Grand Jury Investigations',
      statute: 'State grand jury authority varies; e.g., PA: 42 Pa.C.S. § 4548',
      description: 'The Pennsylvania grand jury model  -  comprehensive investigation of all dioceses in a state  -  has been replicated in multiple states and produced devastating evidence of institutional coverup.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['State AGs', 'County DAs'],
      applicability: 'directly_applicable',
      notes: 'Pennsylvania (2018): 300+ priests, 1,000+ victims across 6 dioceses. Illinois (2023): 451 clergy abusers across all 6 dioceses. Similar investigations underway or completed in multiple states.',
    },
    {
      name: 'Statute of Limitations Reform / Lookback Windows',
      statute: 'Varies by state; e.g., NY Child Victims Act, CA AB-218',
      description: 'Many states have reformed SOLs for child sexual abuse, opening "lookback windows" that allow victims to file claims regardless of when the abuse occurred.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['State legislatures', 'Victims and their attorneys'],
      applicability: 'directly_applicable',
      notes: 'New York\'s Child Victims Act (2019) opened a one-year lookback window that generated 10,000+ lawsuits. California AB-218 (2020) opened a 3-year window. Further reform needed in states that have not acted.',
    },
    {
      name: 'Mandatory Reporting Legislation',
      statute: 'Varies; most states have mandatory reporting but many exempt clergy communications',
      description: 'Push to eliminate clergy exemptions from mandatory reporting requirements so that priests and bishops who learn of abuse in any context must report to authorities.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['State legislatures'],
      applicability: 'directly_applicable',
      notes: 'Over 30 states still have some form of clergy-penitent privilege or religious exemption to mandatory reporting. These must be reformed.',
    },
    {
      name: 'Bankruptcy Protection Reform',
      statute: '11 U.S.C. § 101 et seq.',
      description: 'Dioceses use bankruptcy to limit victim claims and protect institutional assets. Reform needed to ensure victims are prioritized in bankruptcy proceedings.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Federal courts', 'Bankruptcy trustees', 'Congressional reform'],
      applicability: 'directly_applicable',
      notes: 'Over 30 dioceses have filed for bankruptcy. The process must protect victims, not shield assets.',
    },
    {
      name: 'RICO / Civil Conspiracy',
      statute: '18 U.S.C. § 1961-1968; State RICO statutes',
      description: 'The systematic transfer of predator priests between parishes to conceal abuse constitutes racketeering  -  a pattern of criminal activity conducted through an enterprise.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years from discovery of pattern (civil); 5 years (criminal)',
      reachesHeirs: true,
      authorizedActors: ['DOJ', 'State AGs', 'Private plaintiffs'],
      applicability: 'potentially_applicable',
      notes: 'RICO theory that the diocese/archdiocese operated as a criminal enterprise whose purpose included concealing abuse would reach institutional assets.',
    },
  ],

  wealthTrace: [
    {
      name: 'U.S. Catholic Church Assets',
      relationship: 'Institutional wealth used to pay settlements but vast assets remain',
      transferMethod: 'The Catholic Church in the U.S. owns an estimated $150+ billion in real estate, investments, and other assets. $4+ billion has been paid in settlements, but institutional wealth remains vast. Dioceses in bankruptcy have attempted to shield assets by separating parish property from diocesan holdings.',
      estimatedValue: '$150+ billion in U.S. church assets; $4+ billion paid in settlements',
      legalEntities: ['Individual dioceses (separate legal entities)', 'Parish corporations', 'Catholic Charities', 'Educational institutions', 'Healthcare systems'],
      recoveryMechanisms: ['Bankruptcy proceedings', 'Civil litigation', 'Asset tracing through diocesan restructuring'],
    },
    {
      name: 'Vatican Financial Holdings',
      relationship: 'Central authority that directed the coverup',
      transferMethod: 'Vatican\'s total wealth is unknown but includes: Vatican Bank (IOR) with assets of $5+ billion, vast real estate holdings across Rome and worldwide, art collections of incalculable value, investment holdings.',
      estimatedValue: 'Unknown; estimates range from $10 billion to $30+ billion in financial assets alone',
      legalEntities: ['Institute for the Works of Religion (IOR / Vatican Bank)', 'Administration of the Patrimony of the Apostolic See (APSA)', 'Vatican real estate holdings'],
      recoveryMechanisms: ['International litigation', 'Diplomatic pressure', 'ATS claims'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'State Attorneys General',
      title: 'Chief law enforcement officers of each state',
      jurisdiction: 'State criminal and civil enforcement',
      powers: [
        'Convene grand jury investigations',
        'Prosecute individual abusers and institutional coverup',
        'Seek mandatory reporting reform',
        'Enforce state consumer protection against fraudulent charitable solicitation',
      ],
    },
    {
      name: 'State Legislatures',
      title: 'State legislative bodies',
      jurisdiction: 'State law reform',
      powers: [
        'Reform statutes of limitations for child sexual abuse',
        'Open lookback windows for old claims',
        'Eliminate clergy exemptions from mandatory reporting',
        'Reform bankruptcy protections for institutional abusers',
      ],
    },
    {
      name: 'U.S. Congress',
      title: 'Federal legislative body',
      jurisdiction: 'Federal law and international relations',
      powers: [
        'Federal mandatory reporting legislation',
        'Diplomatic pressure on Vatican for archive access',
        'Reform federal bankruptcy law to protect abuse victims',
      ],
    },
    {
      name: 'Pope Francis / Vatican',
      title: 'Head of the Catholic Church',
      jurisdiction: 'Canonical law and institutional governance',
      powers: [
        'Open Vatican archives to independent investigators',
        'Mandate worldwide reporting to secular authorities',
        'Laicize all credibly accused priests',
        'Reform institutional structures that enabled abuse',
      ],
    },
  ],
  successCriteria: [
    'Grand jury investigation of every Catholic diocese in the United States following the Pennsylvania model -- documenting every credibly accused priest, every institutional cover-up, every transferred predator',
    'Statute of limitations reform in all 50 states eliminating time barriers for child sexual abuse claims -- with lookback windows allowing previously time-barred victims to pursue justice',
    'Mandatory reporting requirements covering all clergy with no religious exemptions in every state -- no institution has the right to conceal child abuse',
    'Full Vatican cooperation with law enforcement investigations including opening archives related to known abuser transfers between dioceses and countries',
    'Personal criminal prosecution of bishops and cardinals who participated in the cover-up through transferring known predators to new parishes with access to children',
    'Establishment of independent lay oversight boards with binding authority over clergy personnel decisions -- ending the self-policing model that enabled six decades of abuse',
    'Full financial accounting of every diocesan bankruptcy to ensure victim compensation is prioritized over institutional asset preservation',
    'Publication of all credibly accused clergy lists with full details of allegations, institutional knowledge, and transfer history -- no more sealed files',
    'Compensation fund for all victims administered independently of Church control with standardized criteria and transparent distribution',
    'Revocation of tax-exempt status for any diocese found to have used charitable solicitation while actively concealing clergy abuse -- fundraising while hiding predators constitutes fraud on donors',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'This is the largest institutional child sexual abuse coverup in history. As a citizen, support victims, demand SOL reform in your state, and push for mandatory reporting.',
      urgency: 'high',
      relevantMechanisms: ['Statute of Limitations Reform / Lookback Windows', 'Mandatory Reporting Legislation'],
      steps: [
        {
          step: 1,
          title: 'Support SOL Reform',
          description: 'Check if your state has reformed child sexual abuse statutes of limitations or opened lookback windows. If not, contact your state legislators to demand reform.',
          estimatedTime: '1 hour',
        },
        {
          step: 2,
          title: 'Demand Mandatory Reporting',
          description: 'Push to eliminate clergy exemptions from mandatory reporting in your state. No institution should be exempt from reporting child abuse.',
          filingTarget: 'State legislature',
          estimatedTime: '30 minutes',
        },
        {
          step: 3,
          title: 'Support Victims\' Organizations',
          description: 'Organizations like SNAP (Survivors Network of those Abused by Priests), BishopAccountability.org, and local victim advocacy groups need support.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The Spotlight model works. Every diocese, every state, every country needs the same investigative treatment. Many dioceses have never been independently investigated.',
      urgency: 'high',
      relevantMechanisms: ['State Grand Jury Investigations'],
      steps: [
        {
          step: 1,
          title: 'Investigate Uninvestigated Dioceses',
          description: 'Identify dioceses in your state or region that have never been subject to grand jury investigation or independent audit. Request records, interview victims, and document patterns.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Track Settlement Distribution',
          description: 'Where did the $4+ billion in settlements actually go? How many victims received compensation? What happened in diocesan bankruptcies?',
          estimatedTime: '4-8 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Lookback windows provide opportunities for victims who were previously time-barred. RICO theories can reach institutional assets. Bankruptcy proceedings need victim advocates.',
      urgency: 'high',
      relevantMechanisms: ['Statute of Limitations Reform / Lookback Windows', 'RICO / Civil Conspiracy'],
      steps: [
        {
          step: 1,
          title: 'File During Lookback Windows',
          description: 'Represent victims in states with open or upcoming lookback windows. Time is critical  -  these windows close.',
          legalBasis: ['State-specific lookback legislation'],
          estimatedTime: 'Varies by state window',
        },
        {
          step: 2,
          title: 'Bankruptcy Victim Advocacy',
          description: 'Represent victim creditor committees in diocesan bankruptcies. Challenge asset-shielding strategies. Ensure victim claims are prioritized.',
          legalBasis: ['11 U.S.C. § 101 et seq.'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Statute of limitations reform is the single most impactful legislative action. Mandatory reporting without clergy exemption. Bankruptcy reform to protect victims.',
      urgency: 'immediate',
      relevantMechanisms: ['Statute of Limitations Reform / Lookback Windows', 'Mandatory Reporting Legislation'],
      steps: [
        {
          step: 1,
          title: 'SOL Reform Legislation',
          description: 'Introduce or support legislation eliminating statutes of limitations for child sexual abuse and opening lookback windows for past claims.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'Eliminate Clergy Exemptions',
          description: 'Remove all clergy exemptions from mandatory reporting requirements. No religious privilege justifies concealing child abuse.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Grand jury investigations remain the most powerful tool. Every state should conduct a Pennsylvania-model investigation of all dioceses.',
      urgency: 'high',
      relevantMechanisms: ['State Grand Jury Investigations', 'RICO / Civil Conspiracy'],
      steps: [
        {
          step: 1,
          title: 'State Grand Jury Investigation',
          description: 'Convene grand jury to investigate all dioceses in the state. Subpoena personnel files, correspondence, and internal reports. Follow the Pennsylvania model.',
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Investigate Asset Shielding in Bankruptcies',
          description: 'Investigate whether dioceses transferred assets to parishes, schools, or affiliated entities before filing bankruptcy to shield them from victim claims.',
          legalBasis: ['11 U.S.C. § 548 (Fraudulent transfer)'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Cross-Border Transfer Investigation',
          description: 'Investigate cases where credibly accused priests were transferred to other countries to evade investigation. Coordinate with international law enforcement on predators who fled jurisdictions.',
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Tax-exempt status and charitable solicitation licensing provide regulatory leverage over Church compliance.',
      urgency: 'standard',
      relevantMechanisms: ['Mandatory Reporting Legislation'],
      steps: [
        {
          step: 1,
          title: 'Charitable Solicitation Oversight',
          description: 'Investigate whether diocesan fundraising while concealing abuse constitutes fraud upon donors. Review tax-exempt status compliance.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Background Check Requirements',
          description: 'Mandate comprehensive background checks and monitoring for all individuals in religious organizations who have access to minors. Require compliance as a condition of tax-exempt status.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Audit Diocesan Financial Disclosures',
          description: 'Conduct regulatory audits of diocesan financial disclosures to identify transfers of assets designed to shield wealth from victim claims. Treat fraudulent transfers as violations of charitable solicitation laws.',
          estimatedTime: '12-18 months',
        },
      ],
    },
  ],
};
