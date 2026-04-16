import type { AccountabilityData } from '@/types/accountability';

export const gulfOilSpillAccountability: AccountabilityData = {
  investigationSlug: 'gulf-oil-spill',
  crimeSummary: 'The Deepwater Horizon disaster was the result of BP and contractor failures in well design, cementing, blowout preventer maintenance, and toxic cleanup practices, enabled by a captured Minerals Management Service regulator. The explosion killed 11 workers, released 4.9 million barrels of oil into the Gulf of Mexico, and produced a corporate accountability outcome in which no senior executive served prison time despite a $65 billion financial toll.',
  totalHarm: '11 dead workers, 17 injured, 4.9 million barrels of oil spilled, $65 billion in corporate costs, 68,000 square miles of ocean affected, more than a decade of ecological damage, and continued health harm to cleanup workers and Gulf communities.',
  victimsAffected: '11 rig workers killed, thousands of Gulf Coast residents and cleanup workers exposed to oil and toxic dispersants, coastal ecosystems supporting millions of fisheries and tourism jobs, and the broader public harmed by weakened offshore safety regulation.',
  primaryTargets: [
    {
      name: 'BP plc',
      role: 'Operator of Deepwater Horizon whose cost-cutting decisions on well design, cement testing, and blowout preventer maintenance directly enabled the catastrophe.',
      currentStatus: 'Paid billions in penalties and settlements while executives avoided prison and the company returned to profitability.',
      accountabilityPath: 'Federal criminal and civil enforcement should pursue additional executive accountability, tighten offshore safety conditions, and recover penalties that were reduced through tax deductions.',
      obstacles: ['Corporate legal defenses and bankruptcy leverage', 'Political support for oil industry jobs', 'Lack of executive criminal convictions despite catastrophic deaths']
    },
    {
      name: 'Transocean Ltd.',
      role: 'Owner of the Deepwater Horizon rig; failed to maintain the blowout preventer and operated a rig with repeated safety incidents.',
      currentStatus: 'Settled criminal and civil claims but remains a major offshore drilling contractor.',
      accountabilityPath: 'Enforcement of equipment maintenance standards and civil penalties tied to contractor negligence; deeper review of rig owner responsibility in offshore disasters.',
      obstacles: ['Insurance and contractual dispute protections', 'Complex shared liability across operators and service providers']
    },
    {
      name: 'Minerals Management Service',
      role: 'Captured regulator that granted categorical environmental exemptions and failed to enforce offshore safety rules, enabling BP to operate without meaningful oversight.',
      currentStatus: 'Dissolved and reorganized after the spill, but regulatory capture remains a structural problem in offshore energy oversight.',
      accountabilityPath: 'Revise agency ethics rules, impose strict revolving-door prohibitions, and mandate independent safety oversight for offshore drilling.',
      obstacles: ['Institutional resistance within oil and gas oversight bodies', 'Industry influence on federal permitting and rulemaking']
    }
  ],
  legalMechanisms: [
    {
      name: 'Oil Pollution Act of 1990',
      statute: '33 U.S.C. 2701-2762',
      description: 'Establishes strict liability for oil spill cleanup costs, natural resource damages, and penalties for noncompliance.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '3 years for civil claims; 6 years for natural resource damages',
      reachesHeirs: false,
      authorizedActors: ['Department of Justice', 'EPA', 'National Oceanic and Atmospheric Administration'],
      applicability: 'directly_applicable' as const,
      notes: 'Provides the basis for major civil penalties and cleanup cost recovery from BP and other responsible parties.'
    },
    {
      name: 'Clean Water Act',
      statute: '33 U.S.C. 1251-1387',
      description: 'Prohibits unauthorized discharges of pollutants into U.S. waters and authorizes government penalties and injunctions.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for criminal violations; 3 years for civil penalties',
      reachesHeirs: false,
      authorizedActors: ['EPA', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Used to assess the largest penalties in U.S. maritime environmental law history.'
    },
    {
      name: 'Involuntary Manslaughter',
      statute: '18 U.S.C. 1112',
      description: 'Criminalizes unintentional killings resulting from reckless conduct; relevant to the 11 worker deaths on Deepwater Horizon.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for federal offenses',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'U.S. Attorney General'],
      applicability: 'directly_applicable' as const,
      notes: 'No senior BP executive was criminally convicted under this statute despite fatal negligence.'
    },
    {
      name: 'Obstruction of Justice',
      statute: '18 U.S.C. 1519',
      description: 'Prohibits destruction or falsification of records in federal investigations, including the deletion of flow-rate texts and other evidence.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Applies to individuals like Kurt Mix who deleted communications about the spill.'
    }
  ],
  wealthTrace: [
    {
      name: 'BP plc',
      relationship: 'Recovered from the disaster and returned to profitability while spreading costs across settlements and tax deductions.',
      transferMethod: 'Corporate compensation and tax write-offs after paying $65B in cleanup and penalties.',
      estimatedValue: '$65 billion total cost with $15.3 billion in tax deductions',
      legalEntities: ['BP plc', 'BP Exploration & Production Inc.', 'BP America Inc.'],
      recoveryMechanisms: ['Federal enforcement of penalty deductions', 'Shareholder litigation', 'Stronger Clean Water Act penalty structure']
    },
    {
      name: 'Transocean Ltd.',
      relationship: 'Paid settlements while continuing offshore rig operations, shifting risk to insurers and future contract partners.',
      transferMethod: 'Criminal and civil penalties for rig owner negligence',
      estimatedValue: '$1.4 billion',
      legalEntities: ['Transocean Ltd.', 'Transocean Offshore Inc.'],
      recoveryMechanisms: ['Contractual reform in rig ownership agreements', 'Liability rings for future spill incidents']
    },
    {
      name: 'Deepwater Horizon Claims Fund',
      relationship: 'Administered victim compensation but also became a vehicle for underpayment and fraud',
      transferMethod: 'BP-funded settlement money distributed through a court-supervised fund',
      estimatedValue: '$20 billion',
      legalEntities: ['Deepwater Horizon Claims Center', 'Court-supervised settlement'],
      recoveryMechanisms: ['Claims review for undercompensated victims', 'Stronger oversight of claims administration']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Administrator of the EPA',
      title: 'Head of the Environmental Protection Agency',
      jurisdiction: 'Federal enforcement of the Clean Water Act and environmental penalties',
      powers: ['Assess civil penalties', 'Issue cleanup orders', 'Require environmental monitoring and restoration', 'Refer criminal matters to DOJ'],
      contactMethod: 'EPA Office of Enforcement and Compliance Assurance'
    },
    {
      name: 'Assistant Attorney General for the Environment and Natural Resources Division',
      title: 'Leads DOJ environmental enforcement',
      jurisdiction: 'Federal prosecution of Clean Water Act and environmental crimes',
      powers: ['Bring criminal and civil enforcement actions', 'Negotiate settlements', 'Seek restitution and fines', 'Investigate obstruction and evidence destruction'],
      contactMethod: 'justice.gov/enrd'
    },
    {
      name: 'Chair of the Bureau of Safety and Environmental Enforcement',
      title: 'Head of offshore oil and gas safety enforcement',
      jurisdiction: 'Safety regulation for offshore drilling rigs',
      powers: ['Inspect rigs and equipment', 'Suspend or revoke leases and permits', 'Issue citations for safety violations', 'Mandate corrective actions'],
      contactMethod: 'bsee.gov'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Demand transparency, support Gulf communities, and pressure regulators and lawmakers to strengthen offshore safety and environmental accountability.',
      steps: [
        {
          step: 1,
          title: 'Support Gulf fishing and cleanup communities',
          description: 'Donate to verified local relief organizations, subscribe to independent Gulf news, and amplify the voices of affected residents.',
          requirements: ['Research verified community organizations'],
          estimatedTime: 'Ongoing'
        },
        {
          step: 2,
          title: 'Submit public comments on offshore drilling rules',
          description: 'File comments during BSEE and BOEM rulemakings demanding stronger blowout preventer, well design, and chemical dispersant controls.',
          requirements: ['Access to Regulations.gov', 'Time to draft comments'],
          legalBasis: ['33 U.S.C. 1251-1387', '33 U.S.C. 2701-2762'],
          estimatedTime: '1-2 hours per rulemaking'
        },
        {
          step: 3,
          title: 'Contact elected officials about Gulf compensation and oversight',
          description: 'Demand that Congress fund additional compensation reviews, inspect offshore safety governance, and restore environmental enforcement budgets.',
          requirements: ['Congressional contact information'],
          estimatedTime: '30 minutes'
        }
      ],
      relevantMechanisms: ['Clean Water Act', 'Oil Pollution Act of 1990', 'BSEE safety rulemaking'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate the regulatory capture that enabled the spill, report on health effects, and expose gaps in cleanup and compensation for Gulf communities.',
      steps: [
        {
          step: 1,
          title: 'Document Gulf cleanup worker harms',
          description: 'Interview former cleanup workers and review medical studies showing respiratory, neurological, and psychological impacts.',
          requirements: ['Access to health studies', 'Worker interviews'],
          estimatedTime: '1-3 months'
        },
        {
          step: 2,
          title: 'Trace executive decision making and documents',
          description: 'Use litigation records and public filings to document BP cost-cutting memos, Halliburton cement test failures, and Transocean BOP maintenance lapses.',
          requirements: ['Access to court records and corporate filings'],
          legalBasis: ['Freedom of Information Act'],
          estimatedTime: '3-6 months'
        },
        {
          step: 3,
          title: 'Expose regulatory capture at MMS and BSEE',
          description: 'Report on ethics lapses, industry influence, and weak enforcement within offshore drilling oversight agencies.',
          requirements: ['Public records requests', 'Former regulator interviews'],
          estimatedTime: '2-4 months'
        }
      ],
      relevantMechanisms: ['FOIA', 'BSEE/BOM public records'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'The EPA, DOJ, and BSEE have the authority to enforce existing safety and environmental laws and to demand stronger oversight for offshore drilling operations.',
      steps: [
        {
          step: 1,
          title: 'Pursue additional enforcement under the Oil Pollution Act and Clean Water Act',
          description: 'Review whether remaining civil and criminal penalties are sufficient and whether additional assessments on BP and contractors are warranted.',
          requirements: ['Inter-agency enforcement review'],
          legalBasis: ['33 U.S.C. 1251-1387', '33 U.S.C. 2701-2762'],
          filingTarget: 'EPA/DOJ enforcement divisions',
          estimatedTime: '6-12 months'
        },
        {
          step: 2,
          title: 'Strengthen offshore blowout preventer and well control rules',
          description: 'Use BSEE rulemaking authority to require redundant safety systems, independent testing, and stricter maintenance standards.',
          requirements: ['BSEE rulemaking docket'],
          legalBasis: ['30 C.F.R. Part 250'],
          estimatedTime: '12-18 months'
        },
        {
          step: 3,
          title: 'Investigate evidence destruction and obstruction',
          description: 'Re-examine cases of deleted communications and withheld documents to determine whether further obstruction charges are appropriate.',
          requirements: ['DOJ investigative resources'],
          legalBasis: ['18 U.S.C. 1519'],
          estimatedTime: '6-12 months'
        }
      ],
      relevantMechanisms: ['Clean Water Act', 'Oil Pollution Act', 'Obstruction of Justice'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Congress should demand accountability for offshore drilling safety failures, restore agency independence, and ensure Gulf communities receive full compensation and environmental recovery funding.',
      steps: [
        {
          step: 1,
          title: 'Hold congressional hearings on Deepwater Horizon accountability',
          description: 'Summon BP, Transocean, Halliburton, and former MMS officials to testify about regulatory capture and safety failures.',
          requirements: ['House and Senate committee authority'],
          estimatedTime: '3-6 months'
        },
        {
          step: 2,
          title: 'Increase oversight funding for BSEE and EPA Gulf enforcement',
          description: 'Provide dedicated appropriations for offshore drilling inspections, safety research, and long-term Gulf ecosystem monitoring.',
          requirements: ['Appropriations legislation'],
          estimatedTime: 'Annual appropriations cycle'
        },
        {
          step: 3,
          title: 'Mandate offshore safety whistleblower protections',
          description: 'Create statutory protections for rig workers and contractors who report safety violations, oil leaks, and evidence destruction.',
          requirements: ['Draft legislation'],
          legalBasis: ['Whistleblower Protection Act'],
          estimatedTime: 'One legislative session'
        }
      ],
      relevantMechanisms: ['Congressional oversight', 'Appropriations power', 'Whistleblower legislation'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'BP and responsible contractors are required to pay full penalties without offsetting tax deductions',
    'At least one senior executive is held personally accountable for the Deepwater Horizon tragedy',
    'BSEE and EPA offshore safety rules are strengthened and enforced to prevent another disaster',
    'Gulf communities receive independent review and additional compensation for underpaid claims',
    'Whistleblower protections for offshore safety reporting are enacted',
    'A transparent, public audit of deepwater drilling oversight and permitting is completed'
  ]
};
