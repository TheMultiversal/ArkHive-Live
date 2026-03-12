// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE FORGE — MASTER APPLICATION SCHEMA
//  Single source of truth for the entire application.
//  Every generator reads this schema and produces code.
//  Change the schema → re-run forge → everything updates.
// ═══════════════════════════════════════════════════════════════════

/**
 * FIELD TYPES:
 *  'string' | 'number' | 'boolean' | 'date'
 *  'string[]' | 'object[]' | 'enum'
 *  'ref:<EntityName>' — reference to another entity
 *  'rich-text' — long-form HTML/markdown content
 *
 * UI HINTS:
 *  display: 'card' | 'table' | 'badge' | 'tag' | 'hidden' | 'stat' | 'chart'
 *  widget:  'text' | 'textarea' | 'select' | 'multiselect' | 'date' | 'number' | 'toggle' | 'color'
 *
 * ENRICHMENT HINTS:
 *  enrichable: true — this field can be AI-enriched
 *  enrichPrompt: string — specific prompt fragment for AI generation
 *  mergeStrategy: 'append' | 'replace' | 'dedupe-append' | 'deep-merge'
 */

const schema = {
  version: '2.0.0',
  appName: 'ArkHive',

  // ────────────────────────────────────────────────────
  //  COLOR SYSTEM
  // ────────────────────────────────────────────────────
  theme: {
    colors: {
      primary: { 500: '#d64545', 900: '#6b1515', name: 'blood' },
      bg: { base: '#000000', surface: '#050505', card: '#0a0a0a' },
      text: { primary: '#e4e4e7', secondary: '#a1a1aa', muted: '#71717a' },
      severity: {
        critical: { bg: '#450a0a', text: '#fca5a5', border: '#dc2626' },
        high:     { bg: '#431407', text: '#fdba74', border: '#ea580c' },
        medium:   { bg: '#422006', text: '#fcd34d', border: '#d97706' },
        low:      { bg: '#052e16', text: '#86efac', border: '#16a34a' },
      },
      evidence: {
        confirmed:      { bg: '#052e16', text: '#86efac' },
        strong:         { bg: '#172554', text: '#93c5fd' },
        circumstantial: { bg: '#422006', text: '#fcd34d' },
        alleged:        { bg: '#27272a', text: '#a1a1aa' },
      },
    },
    design: {
      borderRadius: '0px', // crystal sharp — no rounding
      blur: 'none',        // no glassmorphism blur
    },
  },

  // ────────────────────────────────────────────────────
  //  ENTITY DEFINITIONS
  // ────────────────────────────────────────────────────
  entities: {

    Individual: {
      slug: 'individuals',
      icon: 'User',
      description: 'Person of interest in investigations',
      dataDir: 'src/data/individuals',
      pageDir: 'src/app/entities/individuals',
      fields: {
        name:        { type: 'string', required: true, display: 'card', widget: 'text' },
        title:       { type: 'string', required: true, display: 'card', widget: 'text' },
        role:        { type: 'string', required: true, widget: 'text' },
        riskLevel:   { type: 'enum', values: ['critical','high','medium','low'], required: true, display: 'badge' },
        description: { type: 'rich-text', required: true, enrichable: true, mergeStrategy: 'replace',
                       enrichPrompt: 'Write a 400-800 word investigative profile description with specific dates, dollar amounts, and traceable public records.' },
        birthDate:   { type: 'date', widget: 'date' },
        birthPlace:  { type: 'string', widget: 'text' },
        deathDate:   { type: 'date', widget: 'date' },
        nationality: { type: 'string', widget: 'text' },
        netWorth:    { type: 'string', widget: 'text' },
        education:   { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        aliases:     { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        residences:  { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        petitionText:         { type: 'rich-text', enrichable: true },
        totalEstimatedDamages: { type: 'string' },
        totalAffectedVictims:  { type: 'string' },
      },
      relations: {
        affiliations:          { type: 'Affiliation[]', display: 'table' },
        controversies:         { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        relatedInvestigations: { type: 'InvestigationRef[]', display: 'card' },
        timeline:              { type: 'TimelineEntry[]', enrichable: true, mergeStrategy: 'dedupe-append', display: 'chart' },
        socialMedia:           { type: 'SocialMedia[]' },
        charges:               { type: 'Charge[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        sources:               { type: 'Source[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        knownAssociates:       { type: 'Associate[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        familyMembers:         { type: 'FamilyMember[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        corporateHoldings:     { type: 'CorporateHolding[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        crimeDossier:          { type: 'CrimeCategory[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                 enrichPrompt: 'Generate 3-5 crime category entries with full statute citations (U.S.C. references), detailed 500-word narratives, specific charges with sentencing guidelines, and references with date ranges.' },
        structuredControversies: { type: 'ControversyEntry[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                   enrichPrompt: 'Generate structured controversy entries with title, detailed summary, evidence strength rating, date range, key facts, involved parties, sources, outcome, and current status.' },
        conspiracies:          { type: 'ConspiracyEntry[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                 enrichPrompt: 'Generate conspiracy entries with title, summary, plausibility rating, evidence chain, suspicious connections, unanswered questions, and pattern analysis.' },
        legalActions:          { type: 'LegalActionEntry[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                 enrichPrompt: 'Generate legal action entries with case numbers, court, jurisdiction, description, date, status, outcome, and settlement amounts.' },
        assetFreezes:          { type: 'AssetFreeze[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                 enrichPrompt: 'Generate asset freeze/seizure entries with description, date, jurisdiction, amount, and current status.' },
        whistleblowerTestimonies: { type: 'WhistleblowerTestimony[]', enrichable: true, mergeStrategy: 'dedupe-append',
                                    enrichPrompt: 'Generate whistleblower testimony entries with summary, date, source type, and identity protection status.' },
        networkNodes:          { type: 'NetworkNode[]', display: 'chart' },
        networkEdges:          { type: 'NetworkEdge[]', display: 'chart' },
      },
      qualityThresholds: {
        minControversies: 3,
        minSources: 3,
        minTimeline: 5,
        minDescriptionLength: 300,
        minKnownAssociates: 2,
        minCrimeDossier: 2,
        minStructuredControversies: 2,
      },
    },

    Agency: {
      slug: 'agencies',
      icon: 'Building2',
      description: 'Government agency under investigation',
      dataDir: 'src/data/agencies',
      pageDir: 'src/app/entities/agencies',
      fields: {
        name:         { type: 'string', required: true, display: 'card' },
        abbreviation: { type: 'string', display: 'badge' },
        jurisdiction: { type: 'string' },
        department:   { type: 'string' },
        riskLevel:    { type: 'enum', values: ['extreme','high','moderate','low'], required: true, display: 'badge' },
        description:  { type: 'rich-text', required: true, enrichable: true },
        founded:      { type: 'string' },
        budget:       { type: 'string' },
        employeeCount: { type: 'string' },
        headquarters: { type: 'string' },
        website:      { type: 'string' },
      },
      relations: {
        affiliations:          { type: 'Affiliation[]' },
        controversies:         { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        relatedInvestigations: { type: 'InvestigationRef[]' },
        timeline:              { type: 'TimelineEntry[]', enrichable: true },
        sources:               { type: 'Source[]', enrichable: true },
        keyPersonnel:          { type: 'Associate[]', enrichable: true },
        legalActions:          { type: 'LegalActionEntry[]', enrichable: true },
        whistleblowerTestimonies: { type: 'WhistleblowerTestimony[]', enrichable: true },
        structuredControversies: { type: 'ControversyEntry[]', enrichable: true },
      },
      qualityThresholds: {
        minControversies: 2,
        minSources: 2,
        minTimeline: 3,
        minDescriptionLength: 200,
      },
    },

    Corporation: {
      slug: 'corporations',
      icon: 'Landmark',
      description: 'Corporate entity under investigation',
      dataDir: 'src/data/corporations',
      pageDir: 'src/app/entities/corporations',
      fields: {
        name:         { type: 'string', required: true, display: 'card' },
        ticker:       { type: 'string', display: 'badge' },
        industry:     { type: 'string' },
        headquarters: { type: 'string' },
        founded:      { type: 'string' },
        riskLevel:    { type: 'enum', values: ['extreme','high','moderate','low'], required: true, display: 'badge' },
        description:  { type: 'rich-text', required: true, enrichable: true },
        revenue:      { type: 'string' },
        employeeCount: { type: 'string' },
        ceo:          { type: 'string' },
        website:      { type: 'string' },
      },
      relations: {
        affiliations:          { type: 'Affiliation[]' },
        subsidiaries:          { type: 'CorporateHolding[]', enrichable: true },
        controversies:         { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        relatedInvestigations: { type: 'InvestigationRef[]' },
        timeline:              { type: 'TimelineEntry[]', enrichable: true },
        sources:               { type: 'Source[]', enrichable: true },
        boardMembers:          { type: 'Associate[]', enrichable: true },
        legalActions:          { type: 'LegalActionEntry[]', enrichable: true },
        assetFreezes:          { type: 'AssetFreeze[]', enrichable: true },
        structuredControversies: { type: 'ControversyEntry[]', enrichable: true },
        crimeDossier:          { type: 'CrimeCategory[]', enrichable: true },
      },
      qualityThresholds: {
        minControversies: 2,
        minSources: 2,
        minTimeline: 3,
        minDescriptionLength: 200,
      },
    },

    Organization: {
      slug: 'organizations',
      icon: 'Globe',
      description: 'NGO, think tank, or international body under investigation',
      dataDir: 'src/data/organizations',
      pageDir: 'src/app/entities/organizations',
      fields: {
        name:         { type: 'string', required: true, display: 'card' },
        orgType:      { type: 'string' },
        riskLevel:    { type: 'enum', values: ['extreme','high','moderate','low'], required: true, display: 'badge' },
        description:  { type: 'rich-text', required: true, enrichable: true },
        founded:      { type: 'string' },
        headquarters: { type: 'string' },
        website:      { type: 'string' },
        funding:      { type: 'string' },
      },
      relations: {
        affiliations:          { type: 'Affiliation[]' },
        controversies:         { type: 'string[]', enrichable: true, mergeStrategy: 'dedupe-append' },
        relatedInvestigations: { type: 'InvestigationRef[]' },
        timeline:              { type: 'TimelineEntry[]', enrichable: true },
        sources:               { type: 'Source[]', enrichable: true },
        keyPersonnel:          { type: 'Associate[]', enrichable: true },
        legalActions:          { type: 'LegalActionEntry[]', enrichable: true },
        structuredControversies: { type: 'ControversyEntry[]', enrichable: true },
      },
      qualityThresholds: {
        minControversies: 2,
        minSources: 2,
        minTimeline: 3,
        minDescriptionLength: 200,
      },
    },

    Investigation: {
      slug: 'investigations',
      icon: 'Search',
      description: 'Investigative report documenting institutional crimes',
      dataDir: 'src/data/investigations',
      pageDir: 'src/app/investigations',
      fields: {
        title:       { type: 'string', required: true, display: 'card' },
        slug:        { type: 'string', required: true },
        subtitle:    { type: 'string' },
        summary:     { type: 'rich-text', required: true, enrichable: true },
        content:     { type: 'string[]', enrichable: true },
        category:    { type: 'string', required: true, display: 'badge' },
        severity:    { type: 'enum', values: ['critical','high','medium','low'], required: true, display: 'badge' },
        date:        { type: 'date', required: true },
        lastUpdated: { type: 'date' },
        entityCount: { type: 'number', display: 'stat' },
        imageUrl:    { type: 'string' },
        tags:        { type: 'string[]', display: 'tag' },
      },
      relations: {
        sources:      { type: 'Source[]', enrichable: true },
        affiliations: { type: 'Affiliation[]' },
      },
    },
  },

  // ────────────────────────────────────────────────────
  //  SUB-TYPE DEFINITIONS (used in relations above)
  // ────────────────────────────────────────────────────
  subTypes: {
    Affiliation: {
      fields: {
        id:           { type: 'string', required: true },
        name:         { type: 'string', required: true },
        type:         { type: 'enum', values: ['agency','corporation','individual','organization','document'] },
        relationship: { type: 'string', required: true },
        href:         { type: 'string', required: true },
        strength:     { type: 'enum', values: ['direct','indirect','financial','regulatory','political'] },
      },
    },
    Source: {
      fields: {
        id:          { type: 'string' },
        title:       { type: 'string', required: true },
        url:         { type: 'string' },
        type:        { type: 'enum', values: ['document','article','video','report','archive','other'] },
        date:        { type: 'string' },
        description: { type: 'string' },
      },
    },
    TimelineEntry: {
      fields: {
        date:  { type: 'string', required: true },
        event: { type: 'string', required: true },
      },
    },
    InvestigationRef: {
      fields: {
        title:    { type: 'string', required: true },
        slug:     { type: 'string', required: true },
        severity: { type: 'string' },
      },
    },
    SocialMedia: {
      fields: {
        platform: { type: 'string', required: true },
        handle:   { type: 'string', required: true },
      },
    },
    Charge: {
      fields: {
        statute:     { type: 'string', required: true },
        description: { type: 'string', required: true },
        category:    { type: 'string' },
      },
    },
    Associate: {
      fields: {
        name:         { type: 'string', required: true },
        relationship: { type: 'string', required: true },
        href:         { type: 'string' },
      },
    },
    FamilyMember: {
      fields: {
        name:         { type: 'string', required: true },
        relationship: { type: 'string', required: true },
        href:         { type: 'string' },
        involvement:  { type: 'string' },
      },
    },
    CorporateHolding: {
      fields: {
        name: { type: 'string', required: true },
        role: { type: 'string', required: true },
        href: { type: 'string' },
      },
    },
    CrimeCategory: {
      fields: {
        category:         { type: 'string', required: true },
        statutesBroken:   { type: 'string[]', required: true },
        detailedNarrative: { type: 'rich-text', required: true },
        immediateActions:  { type: 'string[]' },
        specificCharges:   { type: 'object[]' }, // { charge, penalty }
        references:        { type: 'object[]' }, // { description, dateRange }
      },
    },
    ControversyEntry: {
      fields: {
        title:           { type: 'string', required: true },
        summary:         { type: 'rich-text', required: true },
        evidenceStrength: { type: 'enum', values: ['confirmed','strong','circumstantial','alleged'], required: true },
        dateRange:       { type: 'string' },
        keyFacts:        { type: 'string[]', required: true },
        involvedParties: { type: 'string[]' },
        sources:         { type: 'string[]' },
        outcome:         { type: 'string' },
        ongoingStatus:   { type: 'enum', values: ['resolved','ongoing','under-investigation','covered-up'] },
      },
    },
    ConspiracyEntry: {
      fields: {
        title:                { type: 'string', required: true },
        summary:              { type: 'rich-text', required: true },
        plausibility:         { type: 'enum', values: ['documented','highly-probable','probable','speculative'], required: true },
        evidenceChain:        { type: 'string[]', required: true },
        suspiciousConnections: { type: 'string[]' },
        unansweredQuestions:   { type: 'string[]' },
        deadWitnesses:         { type: 'string[]' },
        classifiedDocuments:   { type: 'string[]' },
        patternAnalysis:       { type: 'string' },
        relatedConspiracies:   { type: 'string[]' },
      },
    },
    LegalActionEntry: {
      fields: {
        caseNumber:   { type: 'string' },
        court:        { type: 'string' },
        jurisdiction: { type: 'string' },
        description:  { type: 'string', required: true },
        date:         { type: 'string' },
        status:       { type: 'enum', values: ['pending','resolved','ongoing'] },
        outcome:      { type: 'string' },
        amount:       { type: 'string' },
      },
    },
    AssetFreeze: {
      fields: {
        description:  { type: 'string', required: true },
        date:         { type: 'string' },
        jurisdiction: { type: 'string' },
        amount:       { type: 'string' },
        status:       { type: 'enum', values: ['active','lifted'] },
      },
    },
    WhistleblowerTestimony: {
      fields: {
        summary:           { type: 'string', required: true },
        date:              { type: 'string' },
        source:            { type: 'string' },
        protectedIdentity: { type: 'boolean' },
      },
    },
    NetworkNode: {
      fields: {
        id:    { type: 'string', required: true },
        label: { type: 'string', required: true },
        type:  { type: 'string' },
      },
    },
    NetworkEdge: {
      fields: {
        from:         { type: 'string', required: true },
        to:           { type: 'string', required: true },
        relationship: { type: 'string' },
      },
    },
  },

  // ────────────────────────────────────────────────────
  //  API ROUTES TO GENERATE
  // ────────────────────────────────────────────────────
  apiRoutes: [
    { path: '/api/search',          methods: ['GET'], description: 'Full-text search across all entities and investigations' },
    { path: '/api/entities/[type]', methods: ['GET'], description: 'List entities by type with filtering, sorting, pagination' },
    { path: '/api/entities/[type]/[slug]', methods: ['GET','PATCH'], description: 'Get or update a single entity' },
    { path: '/api/investigations',  methods: ['GET'], description: 'List investigations with filtering' },
    { path: '/api/investigations/[slug]', methods: ['GET'], description: 'Get single investigation' },
    { path: '/api/network/[slug]',  methods: ['GET'], description: 'Get network graph data for an entity' },
    { path: '/api/timeline',        methods: ['GET'], description: 'Get timeline events with date range filtering' },
    { path: '/api/stats',           methods: ['GET'], description: 'Platform-wide statistics' },
    { path: '/api/export/[format]', methods: ['GET'], description: 'Export data as PDF, CSV, or JSON' },
    { path: '/api/audit',           methods: ['GET'], description: 'Audit log of all changes' },
    { path: '/api/submit',          methods: ['POST'], description: 'Submit tips and evidence' },
    { path: '/api/health',          methods: ['GET'], description: 'Health check endpoint' },
  ],

  // ────────────────────────────────────────────────────
  //  UI PAGES TO GENERATE
  // ────────────────────────────────────────────────────
  pages: [
    { path: '/dashboard',   component: 'DashboardPage',   description: 'Admin dashboard with stats, recent activity, queue status' },
    { path: '/analytics',   component: 'AnalyticsPage',   description: 'Data analytics with charts, network graphs, threat assessment' },
    { path: '/admin',       component: 'AdminPage',        description: 'Admin panel for managing entities, investigations, queue' },
    { path: '/admin/queue', component: 'QueueManagerPage', description: 'Bot queue manager — view, pause, reprioritize tasks' },
    { path: '/admin/audit', component: 'AuditLogPage',    description: 'Audit trail of all changes with diff viewer' },
    { path: '/export',      component: 'ExportPage',      description: 'Bulk export with format selection and filtering' },
  ],

  // ────────────────────────────────────────────────────
  //  ENRICHMENT CRIME CATEGORIES (expanded from 13 to 40+)
  // ────────────────────────────────────────────────────
  crimeCategories: [
    // Original 13
    'Financial Fraud', 'Corruption & Bribery', 'Obstruction of Justice', 'Money Laundering',
    'Conspiracy', 'Environmental Crimes', 'Human Rights Violations', 'Tax Evasion',
    'Insider Trading', 'Regulatory Violations', 'War Crimes', 'Election Interference',
    'Cybercrime & Data Theft',
    // Expanded 27+
    'Human Trafficking', 'Drug Trafficking', 'Arms Trafficking', 'Racketeering (RICO)',
    'Embezzlement', 'Extortion & Blackmail', 'Perjury & False Statements', 'Espionage',
    'Terrorism Financing', 'Sanctions Violations', 'Antitrust & Price Fixing',
    'Intellectual Property Theft', 'Identity Theft & Fraud', 'Bank Fraud',
    'Healthcare Fraud', 'Insurance Fraud', 'Real Estate Fraud', 'Forgery & Counterfeiting',
    'Child Exploitation', 'Domestic Violence & Abuse', 'Stalking & Harassment',
    'Manslaughter & Negligent Homicide', 'Kidnapping & False Imprisonment',
    'Witness Intimidation', 'Jury Tampering', 'Illegal Surveillance',
    'Civil Rights Violations', 'Police Brutality & Misconduct', 'Genocide & Ethnic Cleansing',
    'Forced Labor & Modern Slavery', 'Maritime & Admiralty Crimes', 'Aviation Violations',
    'Nuclear & Radiological Crimes', 'Biological Weapons Violations',
    'Cultural Property Trafficking', 'Wildlife Trafficking',
    'Illegal Logging & Deforestation', 'Water Contamination',
    'Medical Malpractice & Negligence', 'Academic Fraud & Plagiarism',
  ],

  // ────────────────────────────────────────────────────
  //  INTERNATIONAL STATUTE DATABASES
  // ────────────────────────────────────────────────────
  statuteDatabases: {
    US: {
      federal: 'United States Code (U.S.C.)',
      cfr: 'Code of Federal Regulations (CFR)',
      sec: 'Securities Exchange Act',
      prefix: 'U.S.C.',
    },
    UK: {
      criminal: 'UK Criminal Law Act',
      fraud: 'UK Fraud Act 2006',
      bribery: 'UK Bribery Act 2010',
      prefix: 'UK',
    },
    EU: {
      gdpr: 'General Data Protection Regulation',
      competition: 'EU Competition Law',
      prefix: 'EU',
    },
    International: {
      icc: 'Rome Statute of the International Criminal Court',
      geneva: 'Geneva Conventions',
      uncac: 'UN Convention Against Corruption',
      prefix: 'Intl',
    },
  },
};

module.exports = schema;
