import type { AccountabilityData } from '@/types/accountability';

export const civilRightsRollbacksAccountability: AccountabilityData = {
  investigationSlug: 'civil-rights-rollbacks',
  crimeSummary: 'Systematic rollback of civil rights protections through Supreme Court decisions, executive actions, and legislative obstruction. The Supreme Court gutted the Voting Rights Act in Shelby County v. Holder (2013), eliminating preclearance requirements that had protected minority voting rights for 48 years. Within hours of the decision, Texas announced a strict voter ID law previously blocked by preclearance. States subsequently closed 1,688 polling places in formerly covered jurisdictions. The Court struck down affirmative action in college admissions (SFFA v. Harvard, 2023). DOJ consent decrees with police departments  -  the primary federal tool for addressing police misconduct  -  were frozen under Trump administration AG Jeff Sessions. Title VI enforcement gutted. Transgender rights rolled back through military bans and bathroom bills. The 2025 Trump administration escalated rollbacks: DEI executive orders, DOGE dismantling of federal agencies, attacks on birthright citizenship.',
  totalHarm: 'Millions of minority voters disenfranchised through voter ID laws, polling place closures, and registration purges enabled by Shelby County. 1,688 polling places closed in formerly covered jurisdictions. Police reform consent decrees frozen, allowing misconduct patterns to continue. Affirmative action eliminated in higher education. LGBTQ+ protections reversed. Federal civil rights enforcement apparatus systematically weakened.',
  victimsAffected: 'Minority voters in formerly covered jurisdictions. Students denied affirmative action. Communities under defective police departments whose consent decrees were frozen. LGBTQ+ individuals losing protections. Federal civil rights enforcement staff terminated or reassigned.',
  primaryTargets: [
    {
      name: 'Supreme Court Conservative Majority',
      role: 'Chief Justice Roberts authored Shelby County v. Holder (2013) gutting VRA preclearance. The 6-3 conservative majority struck down affirmative action (SFFA v. Harvard, 2023). The Court has systematically narrowed civil rights protections through originalist interpretation.',
      currentStatus: 'Serving lifetime appointments. 6-3 conservative majority expected to continue for decades. No accountability mechanism short of constitutional amendment or court expansion.',
      accountabilityPath: 'Court expansion. Constitutional amendments. Legislative workarounds (new coverage formula for VRA).',
      obstacles: ['Lifetime appointments', 'Supermajority requirements for amendments', 'Political will for court reform lacking'],
    },
    {
      name: 'Jeff Sessions / DOJ Under Trump',
      role: 'As AG, Sessions issued memo (November 2018) limiting DOJ consent decrees with police departments  -  the primary federal tool for addressing police misconduct patterns. Reversed Obama-era guidance on school discipline, transgender protections, and mandatory minimums.',
      currentStatus: 'Sessions no longer AG. But the damage persists  -  consent decrees were delayed or weakened, police departments were not held accountable, guidance reversals are difficult to undo.',
      accountabilityPath: 'New AG can reinstate consent decree policy. But lost time in police reform cannot be recovered  -  people were harmed by unreformed departments.',
      obstacles: ['Policy damage done', 'Administrations change approach', 'Lost reform time irrecoverable'],
    },
  ],
  legalMechanisms: [
    { name: 'Voting Rights Act Restoration', statute: 'John Lewis Voting Rights Advancement Act (proposed)', description: 'Would restore VRA preclearance with updated coverage formula responding to Shelby County. Repeatedly introduced and blocked by Senate filibuster.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
    { name: 'DOJ Pattern or Practice Investigations', statute: '34 U.S.C. § 12601 (formerly 42 U.S.C. § 14141)', description: 'Authorizes DOJ to investigate and sue police departments with patterns of civil rights violations. The primary federal police reform tool  -  weakened when consent decrees are frozen.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ Civil Rights Division'], applicability: 'directly_applicable' },
    { name: 'Equal Protection Clause / 14th Amendment', statute: 'U.S. Constitution, 14th Amendment', description: 'The foundation of civil rights law. The Supreme Court has increasingly interpreted it to prohibit race-conscious remedies while permitting race-neutral policies with disparate impact.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Federal courts', 'Congress'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'Voter Suppression Industry', relationship: 'Political and economic infrastructure for disenfranchisement', transferMethod: 'Conservative legal organizations (Heritage Foundation, Honest Elections Project/dark money network) fund voter restriction litigation and legislation. ALEC drafts model voter ID laws adopted by state legislatures. The economic benefits flow to those who win elections through restricted electorates  -  tax cuts, deregulation, corporate subsidies.', estimatedValue: 'Billions in political spending to restrict voting access; trillions in policy outcomes from restricted electorates', legalEntities: ['Heritage Foundation', 'Honest Elections Project', 'ALEC', 'State Republican parties'], recoveryMechanisms: ['VRA restoration', 'State-level voting rights expansion', 'Litigation'] },
  ],
  authoritiesWithPower: [
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Federal legislation', powers: ['Pass John Lewis VRA', 'Court reform legislation', 'Override filibuster for voting rights'] },
    { name: 'DOJ Civil Rights Division', title: 'DOJ Civil Rights Division', jurisdiction: 'Federal civil rights enforcement', powers: ['Resume pattern-or-practice investigations', 'Restore consent decree policy', 'Title VI enforcement'] },
  ],
  successCriteria: [
    'John Lewis Voting Rights Advancement Act enacted -- restoring VRA preclearance with an updated coverage formula that responds to current discriminatory practices, not just 1960s data',
    'All 1,688 polling places closed in formerly covered jurisdictions after Shelby County documented and reopened or replaced with accessible alternatives -- voters in these jurisdictions were deliberately disenfranchised',
    'DOJ pattern-or-practice investigation authority fully funded and exercised -- the Sessions-era freeze on consent decrees must never be repeated, and communities under unconstitutional policing policies need federal intervention',
    'Affirmative action replacement mechanisms developed and implemented at every university that previously used race-conscious admissions -- SFFA v. Harvard eliminated the tool but did not eliminate the need',
    'Supreme Court reform legislation enacted: enforceable ethics code, term limits, and expanded court to address the structural conservative supermajority created through norm-breaking confirmation processes',
    'State-level voting rights expansion in all 50 states: automatic voter registration, same-day registration, universal vote-by-mail option, and prohibition on voter purges without verified confirmation',
    'Complete documentation of every civil rights protection rolled back by executive action, Supreme Court decision, or legislative obstruction since 2013 -- creating a baseline for restoration',
    'Federal civil rights enforcement apparatus rebuilt: Civil Rights Division fully staffed and funded, Title VI enforcement restored, consent decrees with police departments resumed, and transgender protections codified by statute',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'The Voting Rights Act -- the crown jewel of civil rights legislation -- has been gutted. 1,688 polling places closed. Your right to vote is under attack.',
      urgency: 'immediate',
      relevantMechanisms: ['Voting Rights Act Restoration', 'Equal Protection Clause / 14th Amendment'],
      steps: [
        {
          step: 1,
          title: 'Protect Your Vote',
          description: 'Verify your voter registration at vote.org. Know your polling place. Know your state\'s voter ID requirements. Vote in every election including primaries, local elections, and special elections. The policies that affect your daily life are decided at every level.',
          estimatedTime: '30 minutes',
        },
        {
          step: 2,
          title: 'Demand VRA Restoration',
          description: 'Contact your senators to demand passage of the John Lewis Voting Rights Advancement Act. The VRA preclearance requirement protected minority voting rights for 48 years -- its elimination led to immediate, documented voter suppression.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your Senate representatives; Senate Judiciary Committee',
          templateText: 'Dear Senator [Name],\n\nSince Shelby County v. Holder (2013) gutted the Voting Rights Act, 1,688 polling places have closed in formerly covered jurisdictions. Within hours of the decision, Texas announced a voter ID law previously blocked. This is the intended consequence.\n\nI urge you to:\n1. Pass the John Lewis Voting Rights Advancement Act\n2. Support filibuster reform for voting rights legislation\n3. Fund DOJ Civil Rights Division at levels matching the threat\n\nThe right to vote is the foundation of democracy. Protect it.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 3,
          title: 'Support Voting Rights Organizations',
          description: 'Support organizations fighting voter suppression: NAACP LDF, Brennan Center for Justice, League of Women Voters, Fair Fight Action. Volunteer as a poll worker. Serve as a nonpartisan election observer.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document the impact of Shelby County. Track every closed polling place, every purged voter, every restrictive law.',
      urgency: 'immediate',
      relevantMechanisms: ['Voting Rights Act Restoration', 'DOJ Pattern or Practice Investigations'],
      steps: [
        {
          step: 1,
          title: 'Disenfranchisement Mapping',
          description: 'Create comprehensive, publicly accessible maps of polling place closures, voter purges, voter ID law impacts, and registration restrictions in formerly covered jurisdictions. Quantify the voters affected. Put faces on the statistical disenfranchisement.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Consent Decree Impact Assessment',
          description: 'Document the impact of the Sessions-era consent decree freeze. In cities where consent decrees were delayed or weakened, what happened to use of force rates, complaint volumes, and community-police relations? Quantify the cost of inaction.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Dark Money Behind Voter Suppression',
          description: 'Investigate the organizational and financial infrastructure behind voter restriction laws. Track Heritage Foundation, ALEC, and Honest Elections Project model legislation as it moves from drafting to state legislative adoption. Follow the money behind disenfranchisement.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Litigate under remaining VRA provisions (Section 2). Challenge voter ID laws. Defend consent decrees.',
      urgency: 'immediate',
      relevantMechanisms: ['Equal Protection Clause / 14th Amendment', 'Voting Rights Act Restoration', 'DOJ Pattern or Practice Investigations'],
      steps: [
        {
          step: 1,
          title: 'VRA Section 2 Litigation',
          description: 'Bring Section 2 vote dilution and vote denial cases in jurisdictions with restrictive laws. Section 2 survived Shelby County and remains the primary tool for challenging discriminatory voting practices. File in jurisdictions with the strongest evidence of racial discrimination in voting.',
          legalBasis: ['VRA Section 2', 'Fourteenth Amendment Section 1', 'Fifteenth Amendment'],
          estimatedTime: '12-36 months per case',
        },
        {
          step: 2,
          title: 'Consent Decree Defense',
          description: 'Defend existing police consent decrees from attempts to weaken or terminate them. File for contempt where consent decree terms are violated. Ensure that communities living under unconstitutional policing receive the reforms they were promised.',
          legalBasis: ['34 U.S.C. Section 12601', 'Original consent decree terms', 'Court enforcement authority'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Challenge New Restrictions',
          description: 'File immediate legal challenges to new voter restriction laws enacted after Shelby County. Use preliminary injunctions to block implementation before elections. Time is critical -- laws that suppress votes in even one election cause irreparable harm.',
          legalBasis: ['VRA Section 2', 'Equal Protection', 'Anderson-Burdick framework'],
          estimatedTime: '3-12 months per challenge',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass the John Lewis VRA. Reform the filibuster for voting rights. Fully fund DOJ Civil Rights Division.',
      urgency: 'immediate',
      relevantMechanisms: ['Voting Rights Act Restoration', 'DOJ Pattern or Practice Investigations'],
      steps: [
        {
          step: 1,
          title: 'John Lewis VRA Passage',
          description: 'Pass the John Lewis Voting Rights Advancement Act. If the filibuster blocks passage, create a carve-out exception for voting rights legislation. The right to vote is the foundation of every other right -- it warrants extraordinary procedural measures.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'DOJ Civil Rights Funding',
          description: 'Appropriate full funding for the DOJ Civil Rights Division. The Division has been systematically underfunded relative to its mandate. Pattern-or-practice investigations, Title VI enforcement, and consent decree monitoring all require adequate staffing.',
          estimatedTime: 'Appropriations cycle',
        },
        {
          step: 3,
          title: 'Court Reform Legislation',
          description: 'Introduce and build support for Supreme Court reform: term limits (18-year terms with regular appointments), enforceable ethics code with independent enforcement, and court expansion to address the structural imbalance created through norm-breaking confirmation practices.',
          estimatedTime: 'Multi-year legislative effort',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Resume aggressive pattern-or-practice investigations. Restore consent decree policy. Enforce civil rights proactively.',
      urgency: 'immediate',
      relevantMechanisms: ['DOJ Pattern or Practice Investigations'],
      steps: [
        {
          step: 1,
          title: 'Restore Consent Decree Authority',
          description: 'Rescind the Sessions memo limiting consent decrees. Resume pattern-or-practice investigations with full consent decree authority. Fast-track investigations in departments with documented civil rights violations during the enforcement freeze.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Proactive Voting Rights Enforcement',
          description: 'Use DOJ authority under VRA Section 2 and other federal voting rights statutes to proactively investigate and challenge discriminatory voting practices. Do not wait for private litigants to bear the entire cost of enforcing the right to vote.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Title VI Enforcement Restoration',
          description: 'Restore Title VI enforcement to pre-rollback levels. Investigate complaints of race discrimination by recipients of federal funding. Use fund termination authority where discrimination is documented.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Enforce remaining civil rights protections aggressively. Use administrative authority to maximum extent.',
      urgency: 'immediate',
      relevantMechanisms: ['Equal Protection Clause / 14th Amendment', 'DOJ Pattern or Practice Investigations'],
      steps: [
        {
          step: 1,
          title: 'Administrative Enforcement Maximization',
          description: 'Use Title VI, Title IX, and other administrative enforcement tools to their fullest statutory extent. When legislative and judicial avenues are closed, administrative enforcement becomes the primary civil rights tool.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'State-Level Voting Rights Standards',
          description: 'States should enact their own voting rights acts with preclearance requirements for jurisdictions with histories of discriminatory practices. If federal preclearance is gone, state-level protections can fill the gap.',
          estimatedTime: '6-12 months per state',
        },
        {
          step: 3,
          title: 'Civil Rights Data Collection',
          description: 'Mandate and maintain comprehensive civil rights data collection across all domains: voting access, police use of force, education equity, housing discrimination, employment discrimination. Data is the foundation of enforcement -- without it, violations are invisible.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
  ],
};
