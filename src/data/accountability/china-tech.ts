import type { AccountabilityData } from '@/types/accountability';

export const chinaTechAccountability: AccountabilityData = {
  investigationSlug: 'china-tech',
  crimeSummary: 'Chinese technology companies operating under mandatory intelligence cooperation laws pose fundamental national security risks to the United States and democratic societies worldwide. TikTok (170M U.S. users) allowed ByteDance employees in China to access American user data and surveil journalists. Huawei received $75+ billion in state subsidies to dominate global telecommunications while maintaining potential backdoor access for Chinese intelligence. China has exported surveillance technology to 80+ countries through Belt and Road, deploying systems originally designed for Uyghur repression. The National Intelligence Law (2017) legally compels all Chinese companies to cooperate with state intelligence, making genuine data security guarantees impossible.',
  totalHarm: 'TikTok collects behavioral data on 170 million Americans; Huawei equipment installed in telecommunications networks across 170+ countries; Chinese surveillance technology deployed in 80+ nations; $52 billion CHIPS Act required to address semiconductor dependence; immeasurable intelligence value of compromised data and networks',
  victimsAffected: '170 million American TikTok users whose data is accessible to Chinese government; billions of global telecommunications users on Huawei networks; populations of 80+ countries subject to Chinese-exported surveillance; journalists surveilled by ByteDance; democratic institutions undermined by algorithmic manipulation',
  primaryTargets: [
    {
      name: 'ByteDance / TikTok',
      role: 'Beijing-based company operating platform with 170M U.S. users; employees accessed American data; surveilled journalists; operates under Chinese National Intelligence Law; recommendation algorithm suppresses content critical of CCP',
      currentStatus: 'Subject to forced divestiture law (April 2024); constitutional challenge pending; Project Texas ($1.5B Oracle storage) criticized as insufficient; TikTok briefly went dark January 2025 before enforcement delayed',
      accountabilityPath: 'Enforce TikTok divestiture law; FTC enforcement for deceptive data practices; CFIUS review of any acquisition structure ensuring genuine separation from CCP influence; algorithm transparency requirements',
      obstacles: ['First Amendment legal challenge to divestiture law', 'China may block algorithm transfer as export-controlled technology', 'Any acquirer faces $200+ billion valuation', 'Structural separation may not address algorithmic influence concerns']
    },
    {
      name: 'Huawei Technologies',
      role: 'World\'s largest telecom equipment maker; founder is former PLA engineer; received $75+ billion in state subsidies; equipment could contain backdoors; dominates telecommunications in developing world through below-cost bidding',
      currentStatus: 'On U.S. Entity List since 2019; criminal charges for sanctions evasion and trade secret theft; CFO returned to China under deferred prosecution; FCC banned new equipment; company continues operating in 170+ countries',
      accountabilityPath: 'Maintain and strengthen Entity List restrictions; coordinate with allies to offer financing alternatives for developing countries; prosecute pending criminal cases; expand "rip and replace" programs for existing Huawei infrastructure',
      obstacles: ['Huawei equipment is 30-40% cheaper than alternatives', 'Many developing countries cannot afford Ericsson/Nokia alternatives without financing', 'China retaliates against countries that exclude Huawei', 'Rip and replace costs billions and takes years']
    },
    {
      name: 'Chinese Surveillance Technology Exporters (Hikvision, Dahua, SenseTime)',
      role: 'Export facial recognition, surveillance cameras, predictive policing, and social credit technology originally developed for domestic repression including Uyghur monitoring to 80+ countries worldwide',
      currentStatus: 'On U.S. Entity List; sanctioned under Global Magnitsky Act; FCC bans on new equipment; continue operating in 150+ countries with minimal international accountability',
      accountabilityPath: 'Coordinated allied export controls on surveillance technology; condition development financing on exclusion of Chinese surveillance equipment; support development of democratic alternatives; strengthen Global Magnitsky sanctions',
      obstacles: ['No international framework for controlling surveillance technology exports', 'Belt and Road financing makes Chinese systems free for recipient countries', 'Many recipient governments want surveillance capabilities', 'Limited democratic alternatives at comparable price points']
    }
  ],
  legalMechanisms: [
    {
      name: 'TikTok Forced Divestiture Law',
      statute: 'Pub.L. 118-50',
      description: 'Protecting Americans from Foreign Adversary Controlled Applications Act requires ByteDance to divest TikTok U.S. operations within approximately one year or face a nationwide ban.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ (enforcement)', 'CFIUS (acquisition review)', 'Federal courts (constitutional challenge)'],
      applicability: 'directly_applicable' as const,
      notes: 'Signed April 2024; TikTok challenged as unconstitutional under First Amendment; enforcement delayed; fundamental question of whether structural divestiture can address algorithmic influence concerns'
    },
    {
      name: 'Entity List and Export Controls',
      statute: '50 U.S.C. 4819',
      description: 'Bureau of Industry and Security administers Entity List restricting technology sales to designated Chinese companies. October 2022 semiconductor controls restricted advanced AI chips and manufacturing equipment.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['BIS', 'Commerce Department', 'OFAC'],
      applicability: 'directly_applicable' as const,
      notes: 'Most comprehensive technology restriction tool; effectiveness limited by China developing domestic alternatives; Netherlands and Japan imposed complementary controls on semiconductor equipment'
    },
    {
      name: 'IEEPA Executive Authority',
      statute: '50 U.S.C. 4565',
      description: 'International Emergency Economic Powers Act provides presidential authority to restrict transactions with foreign adversaries including technology companies posing national security threats.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['President', 'Treasury Department', 'Commerce Department'],
      applicability: 'directly_applicable' as const,
      notes: 'Basis for Trump-era executive orders against TikTok and WeChat; broad authority but subject to judicial review'
    },
    {
      name: 'CHIPS and Science Act',
      statute: 'Pub.L. 117-167',
      description: '$52 billion investment in domestic semiconductor manufacturing to reduce dangerous dependence on Taiwan and Chinese supply chains for critical chips.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Commerce Department', 'NIST', 'NSF'],
      applicability: 'directly_applicable' as const,
      notes: 'Largest U.S. industrial policy investment in decades; funds flowing to TSMC Arizona, Samsung Texas, Intel Ohio facilities; full impact will take 5-10 years'
    }
  ],
  wealthTrace: [
    {
      name: 'ByteDance / TikTok Revenue',
      relationship: 'TikTok generates $16+ billion in U.S. advertising revenue flowing to Beijing-based ByteDance',
      transferMethod: 'Advertising revenue from behavioral data profiles of 170 million Americans; ByteDance valued at $225 billion',
      estimatedValue: '$225 billion ByteDance valuation; $16+ billion annual U.S. TikTok revenue',
      legalEntities: ['ByteDance Ltd (Beijing)', 'TikTok Inc (U.S.)', 'Oracle Corporation (Project Texas)'],
      recoveryMechanisms: ['Forced divestiture', 'FTC enforcement', 'CFIUS acquisition review']
    },
    {
      name: 'Huawei Global Operations',
      relationship: 'Huawei generated $99 billion in revenue in 2023 despite U.S. sanctions, driven by Chinese domestic market and developing world dominance',
      transferMethod: 'State subsidies ($75+ billion cumulative) enabled below-cost bidding; Belt and Road financing captures developing world markets',
      estimatedValue: '$99 billion annual revenue (2023)',
      legalEntities: ['Huawei Technologies Co. Ltd', 'Subsidiaries in 170+ countries', 'Chinese state banks'],
      recoveryMechanisms: ['Entity List restrictions', 'Allied semiconductor export controls', 'Rip and replace programs']
    },
    {
      name: 'Chinese Surveillance Export Revenue',
      relationship: 'Hikvision, Dahua, SenseTime generate billions exporting surveillance technology developed for domestic repression',
      transferMethod: 'Equipment sales to 80+ countries, often bundled with Belt and Road loans; technology originally designed for Uyghur monitoring in Xinjiang',
      estimatedValue: 'Hikvision $12+ billion revenue (2023); total Chinese surveillance market exceeds $50 billion',
      legalEntities: ['Hikvision', 'Dahua Technology', 'SenseTime', 'CloudWalk', 'Megvii'],
      recoveryMechanisms: ['Entity List restrictions', 'Global Magnitsky sanctions', 'Allied surveillance technology export controls']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Bureau of Industry and Security (BIS)',
      title: 'BIS Under Secretary',
      jurisdiction: 'Export control and Entity List administration',
      powers: ['Administer Entity List restricting technology sales to Chinese companies', 'Implement semiconductor export controls', 'License technology transfers'],
      contactMethod: 'bis.doc.gov; export control violation reporting'
    },
    {
      name: 'CFIUS (Committee on Foreign Investment)',
      title: 'CFIUS Chair (Treasury Secretary)',
      jurisdiction: 'National security review of foreign investments and acquisitions',
      powers: ['Review TikTok divestiture transactions', 'Block acquisitions posing national security risks', 'Impose mitigation conditions on approved transactions'],
      contactMethod: 'home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius'
    },
    {
      name: 'House Select Committee on the CCP',
      title: 'Committee Chair',
      jurisdiction: 'Congressional oversight of Chinese Communist Party threats',
      powers: ['Investigate Chinese technology companies', 'Hold hearings', 'Recommend legislation', 'Subpoena documents and testimony'],
      contactMethod: 'selectcommitteeontheccp.house.gov'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can protect their data, advocate for stronger technology regulation, and pressure elected officials to prioritize national security over corporate lobbying.',
      steps: [
        { step: 1, title: 'Protect Personal Data', description: 'Evaluate personal use of Chinese-owned applications including TikTok. Understand that data shared on these platforms may be accessible to Chinese intelligence services under the National Intelligence Law.', legalBasis: ['Personal data rights'] },
        { step: 2, title: 'Advocate for Federal Privacy Law', description: 'Contact elected officials to support comprehensive federal data privacy legislation that would protect American data from exploitation by both domestic and foreign companies.', legalBasis: ['First Amendment right to petition'] },
        { step: 3, title: 'Support Technology Competition Funding', description: 'Advocate for continued funding of CHIPS Act implementation, 5G alternatives to Huawei, and democratic surveillance technology alternatives for developing countries.' }
      ],
      relevantMechanisms: ['CHIPS Act', 'Federal privacy legislation'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators have existing authority to significantly strengthen enforcement against Chinese technology threats but have applied tools inconsistently.',
      steps: [
        { step: 1, title: 'Enforce TikTok Divestiture', description: 'Ensure the forced divestiture law is enforced with a structure that genuinely addresses national security concerns, not merely a cosmetic corporate restructuring that leaves algorithmic control with CCP-aligned entities.', legalBasis: ['Pub.L. 118-50'] },
        { step: 2, title: 'Expand Semiconductor Export Controls', description: 'Close loopholes in semiconductor export controls that allow China to acquire advanced chips through third countries and develop workaround chip designs.', legalBasis: ['50 U.S.C. 4819'] },
        { step: 3, title: 'Coordinate Allied Technology Governance', description: 'Build multilateral technology governance frameworks with EU, Japan, South Korea, and other democratic allies to create unified standards for Chinese technology restrictions and democratic alternatives.' }
      ],
      relevantMechanisms: ['TikTok divestiture law', 'Export controls', 'Allied technology coordination'],
      urgency: 'immediate' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigative journalism can expose the full scope of Chinese technology threats and hold both Chinese companies and complicit Western institutions accountable.',
      steps: [
        { step: 1, title: 'Investigate Algorithm Manipulation', description: 'Conduct systematic research on TikTok content suppression and promotion patterns related to politically sensitive topics (Taiwan, Tibet, Tiananmen, Uyghurs, Hong Kong).', legalBasis: ['First Amendment'] },
        { step: 2, title: 'Document Surveillance Technology Deployment', description: 'Investigate Chinese surveillance technology deployments in Belt and Road countries including data sharing arrangements, system capabilities, and impact on political dissent.' },
        { step: 3, title: 'Track Corporate Lobbying Against Restrictions', description: 'Document lobbying by companies that profit from Chinese market access against technology restrictions and national security measures.' }
      ],
      relevantMechanisms: ['Lobbying disclosure records', 'Export data analysis'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'TikTok divested from ByteDance with genuine structural separation from CCP influence including algorithm independence',
    'Comprehensive federal data privacy law enacted protecting American data from foreign and domestic exploitation',
    'Huawei effectively excluded from critical infrastructure in all allied democracies with financing alternatives available for developing countries',
    'Multilateral framework for controlling surveillance technology exports established among democratic allies',
    'Semiconductor export controls maintained and loopholes closed to prevent Chinese access to advanced chips',
    'CHIPS Act investments result in viable domestic semiconductor manufacturing reducing Taiwan dependence'
  ]
};
