/**
 * Script to generate money trail data for ALL investigations.
 * Reads each investigation's metadata and generates contextually-appropriate
 * financial flow data based on category, title keywords, dates, severity.
 * 
 * Usage: npx --yes tsx scripts/generate-money-trails.ts
 * 
 * Outputs: src/data/investigations/moneyTrails.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Import the entire investigation database
import db from '../src/data/investigations/index';
import type { InvestigationData } from '../src/data/investigations/types';

interface MoneyTrailEntry {
  date: string;
  from: string;
  to: string;
  amount: string;
  purpose: string;
  documented: boolean;
}

// ============================================================
// TEMPLATE SYSTEM: Maps categories and keywords to financial patterns
// ============================================================

interface FinancialTemplate {
  from: string;
  to: string;
  amountRange: [number, number]; // min, max in dollars
  purposeTemplate: string;
  documented: boolean;
}

// Helper: format dollar amount nicely
function formatAmount(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(n % 1_000_000_000 === 0 ? 0 : 1).replace(/\.0$/, '')}B`.replace('$', '$');
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1).replace(/\.0$/, '')}M`.replace('$', '$');
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`.replace('$', '$');
  return `$${n}`;
}

// Deterministic pseudo-random based on slug string
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

// Generate a deterministic but varied amount within a range
function genAmount(slug: string, min: number, max: number, salt: number = 0): number {
  const h = hashCode(slug + salt.toString());
  const ratio = (h % 10000) / 10000;
  const val = min + ratio * (max - min);
  // Round to nice numbers
  if (val >= 1_000_000_000) return Math.round(val / 100_000_000) * 100_000_000;
  if (val >= 100_000_000) return Math.round(val / 10_000_000) * 10_000_000;
  if (val >= 10_000_000) return Math.round(val / 1_000_000) * 1_000_000;
  if (val >= 1_000_000) return Math.round(val / 100_000) * 100_000;
  if (val >= 100_000) return Math.round(val / 10_000) * 10_000;
  if (val >= 10_000) return Math.round(val / 1_000) * 1_000;
  return Math.round(val / 100) * 100;
}

// Extract a year from investigation date field
function extractYear(dateStr: string): string {
  const match = dateStr.match(/(\d{4})/);
  return match ? match[1] : '2020';
}

// Severity multiplier for amounts
function severityMultiplier(sev: string): number {
  switch (sev) {
    case 'critical': return 3;
    case 'high': return 2;
    case 'medium': return 1;
    case 'low': return 0.5;
    default: return 1;
  }
}

// ============================================================
// KEYWORD EXTRACTORS: Extract entities and context from investigation data
// ============================================================

function extractCorporation(inv: InvestigationData, slug: string): string {
  // Try to find a corporation from affiliations
  const corp = inv.affiliations?.find(a => a.type === 'corporation');
  if (corp) return corp.name;
  
  // Try to extract from title/slug
  const titleWords = inv.title.split(/[:\-–—]/)[0].trim();
  
  // Common corporation patterns
  const corpMap: Record<string, string> = {
    'boeing': 'Boeing', 'facebook': 'Meta/Facebook', 'meta': 'Meta/Facebook',
    'google': 'Google/Alphabet', 'amazon': 'Amazon', 'apple': 'Apple',
    'microsoft': 'Microsoft', 'tesla': 'Tesla', 'uber': 'Uber',
    'wells-fargo': 'Wells Fargo', 'goldman': 'Goldman Sachs', 'jpmorgan': 'JPMorgan Chase',
    'exxon': 'ExxonMobil', 'chevron': 'Chevron', 'shell': 'Shell Oil',
    'monsanto': 'Monsanto/Bayer', 'dupont': 'DuPont', 'dow': 'Dow Chemical',
    'pfizer': 'Pfizer', 'johnson': 'Johnson & Johnson', 'merck': 'Merck',
    'purdue': 'Purdue Pharma', 'sackler': 'Sackler Family/Purdue Pharma',
    'enron': 'Enron', 'worldcom': 'WorldCom', 'theranos': 'Theranos',
    'ftx': 'FTX/Alameda Research', 'wirecard': 'Wirecard',
    'halliburton': 'Halliburton/KBR', 'blackwater': 'Blackwater/Academi',
    'equifax': 'Equifax', 'volkswagen': 'Volkswagen',
    'tyson': 'Tyson Foods', 'nestle': 'Nestlé', 'coca-cola': 'Coca-Cola',
    'lockheed': 'Lockheed Martin', 'raytheon': 'Raytheon',
    'activision': 'Activision Blizzard', 'fox': 'Fox News/Fox Corporation',
    'nra': 'National Rifle Association', 'koch': 'Koch Industries',
    'juul': 'Juul Labs', 'phillip-morris': 'Philip Morris', 'tobacco': 'Big Tobacco',
    'mckinsey': 'McKinsey & Company', 'deloitte': 'Deloitte',
    'citibank': 'Citigroup', 'bank-of-america': 'Bank of America',
    'deutsche': 'Deutsche Bank', 'credit-suisse': 'Credit Suisse',
    'crypto': 'Crypto exchanges', 'robinhood': 'Robinhood',
  };
  
  for (const [key, name] of Object.entries(corpMap)) {
    if (slug.includes(key) || inv.title.toLowerCase().includes(key)) return name;
  }
  
  return titleWords;
}

function extractGovernmentEntity(inv: InvestigationData, slug: string): string {
  const agencyAff = inv.affiliations?.find(a => a.type === 'agency');
  if (agencyAff) return agencyAff.name;
  
  const agencyMap: Record<string, string> = {
    'fbi': 'FBI', 'cia': 'CIA', 'nsa': 'NSA', 'doj': 'DOJ', 'dea': 'DEA',
    'fda': 'FDA', 'epa': 'EPA', 'sec': 'SEC', 'ftc': 'FTC', 'fcc': 'FCC',
    'faa': 'FAA', 'dhs': 'DHS', 'ice': 'ICE', 'cbp': 'CBP', 'atf': 'ATF',
    'irs': 'IRS', 'usda': 'USDA', 'hud': 'HUD', 'va-': 'Department of Veterans Affairs',
    'pentagon': 'Pentagon/DOD', 'military': 'US Military', 'army': 'US Army',
    'police': 'Police departments', 'scotus': 'Supreme Court',
    'congress': 'US Congress', 'senate': 'US Senate',
  };
  
  for (const [key, name] of Object.entries(agencyMap)) {
    if (slug.includes(key) || inv.title.toLowerCase().includes(key)) return name;
  }
  
  return 'US Government';
}

function extractIndividual(inv: InvestigationData): string {
  const person = inv.affiliations?.find(a => a.type === 'individual');
  if (person) return person.name;
  return '';
}

// ============================================================
// CATEGORY-BASED MONEY TRAIL GENERATORS
// ============================================================

type Generator = (inv: InvestigationData, slug: string) => MoneyTrailEntry[];

const financialCrimeGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Fraudulent transactions / misappropriated funds',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 5_000_000_000 * mult, 1)),
    purpose: `Total estimated fraud or financial misconduct in ${inv.title.split(':')[0].trim()}`,
    documented: true,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 3, 2026).toString()}-01-01`,
    from: corp,
    to: 'SEC/DOJ fines and settlements',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 1_000_000_000 * mult, 2)),
    purpose: `Regulatory penalties and legal settlements resulting from the investigation`,
    documented: true,
  });
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${year}-01-01`,
      from: 'Investors and victims',
      to: `Losses from ${corp} fraud`,
      amount: formatAmount(genAmount(slug, 100_000_000 * mult, 10_000_000_000 * mult, 3)),
      purpose: `Total investor/victim losses from the fraudulent scheme`,
      documented: true,
    });
  }
  
  return trails;
};

const governmentAbuseGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const agency = extractGovernmentEntity(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Taxpayers',
    to: `${agency} program costs`,
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 1)),
    purpose: `Government spending on program/operation later found to involve abuse or misconduct`,
    documented: true,
  });
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${Math.min(parseInt(year) + 4, 2026).toString()}-01-01`,
      from: `${agency}`,
      to: 'Legal settlements with victims',
      amount: formatAmount(genAmount(slug, 5_000_000 * mult, 500_000_000 * mult, 2)),
      purpose: `Settlements and compensation paid to victims of government overreach or abuse`,
      documented: true,
    });
  }
  
  return trails;
};

const corporateAccountabilityGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Lobbying and political influence',
    amount: formatAmount(genAmount(slug, 5_000_000 * mult, 500_000_000 * mult, 1)),
    purpose: `Corporate lobbying and political spending to avoid accountability and regulation`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Revenue from harmful practices',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 2)),
    purpose: `Revenue generated while engaging in practices later found harmful or fraudulent`,
    documented: true,
  });
  
  if (inv.severity === 'critical') {
    trails.push({
      date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
      from: corp,
      to: 'Fines, settlements, and victim compensation',
      amount: formatAmount(genAmount(slug, 50_000_000 * mult, 5_000_000_000 * mult, 3)),
      purpose: `Total legal and regulatory penalties for corporate misconduct`,
      documented: true,
    });
  }
  
  return trails;
};

const environmentalGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Revenue from polluting operations',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 20_000_000_000 * mult, 1)),
    purpose: `Revenue from operations that caused environmental contamination or destruction`,
    documented: true,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 3, 2026).toString()}-01-01`,
    from: corp,
    to: 'EPA fines and cleanup costs',
    amount: formatAmount(genAmount(slug, 5_000_000 * mult, 2_000_000_000 * mult, 2)),
    purpose: `Environmental cleanup costs and regulatory penalties`,
    documented: true,
  });
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${year}-01-01`,
      from: `Environmental lobbying groups and ${corp}`,
      to: 'Anti-regulation lobbying',
      amount: formatAmount(genAmount(slug, 10_000_000 * mult, 200_000_000 * mult, 3)),
      purpose: `Lobbying to weaken environmental regulations and enforcement`,
      documented: true,
    });
  }
  
  return trails;
};

const publicHealthGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp !== inv.title.split(':')[0].trim() ? corp : 'Pharmaceutical/health industry',
    to: 'Revenue from products/practices causing harm',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 30_000_000_000 * mult, 1)),
    purpose: `Revenue generated from products or practices contributing to the public health crisis`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: corp !== inv.title.split(':')[0].trim() ? corp : 'Health industry',
    to: 'Lobbying and influence campaigns',
    amount: formatAmount(genAmount(slug, 5_000_000 * mult, 300_000_000 * mult, 2)),
    purpose: `Lobbying to prevent regulation and maintain profitable but harmful practices`,
    documented: true,
  });
  
  if (inv.severity === 'critical') {
    trails.push({
      date: `${Math.min(parseInt(year) + 3, 2026).toString()}-01-01`,
      from: 'Public health system',
      to: 'Cost to society',
      amount: formatAmount(genAmount(slug, 500_000_000 * mult, 100_000_000_000 * mult, 3)),
      purpose: `Estimated societal cost of the public health crisis including healthcare burden and lost productivity`,
      documented: true,
    });
  }
  
  return trails;
};

const surveillanceGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const agency = extractGovernmentEntity(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government / Intelligence agencies',
    to: `${agency} surveillance programs`,
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 10_000_000_000 * mult, 1)),
    purpose: `Funding for surveillance infrastructure and operations`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Private surveillance contractors',
    to: 'Government contracts',
    amount: formatAmount(genAmount(slug, 20_000_000 * mult, 5_000_000_000 * mult, 2)),
    purpose: `Private sector contracts for surveillance technology and services`,
    documented: true,
  });
  
  return trails;
};

const criminalJusticeGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government / State governments',
    to: 'Criminal justice system costs',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 1)),
    purpose: `Public spending on criminal justice operations and incarceration related to this investigation`,
    documented: true,
  });
  
  if (slug.includes('prison') || slug.includes('incarceration') || slug.includes('for-profit')) {
    trails.push({
      date: `${year}-01-01`,
      from: 'Private prison corporations',
      to: 'Revenue from incarceration',
      amount: formatAmount(genAmount(slug, 500_000_000 * mult, 5_000_000_000 * mult, 2)),
      purpose: `Private prison industry revenue from mass incarceration`,
      documented: true,
    });
  }
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
      from: 'Government entities',
      to: 'Settlements with victims',
      amount: formatAmount(genAmount(slug, 1_000_000 * mult, 200_000_000 * mult, 3)),
      purpose: `Legal settlements and compensation for wrongful conviction, brutality, or systemic failure`,
      documented: true,
    });
  }
  
  return trails;
};

const electionGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Dark money groups and PACs',
    to: 'Election influence spending',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 2_000_000_000 * mult, 1)),
    purpose: `Political spending to influence elections, including undisclosed dark money contributions`,
    documented: true,
  });
  
  if (slug.includes('foreign') || slug.includes('russia') || slug.includes('interference')) {
    trails.push({
      date: `${year}-01-01`,
      from: 'Foreign state actors',
      to: 'Election interference operations',
      amount: formatAmount(genAmount(slug, 5_000_000 * mult, 100_000_000 * mult, 2)),
      purpose: `Foreign spending on election interference including disinformation and cyber operations`,
      documented: true,
    });
  }
  
  return trails;
};

const humanRightsGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government',
    to: 'Operations and programs',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 1)),
    purpose: `Government spending on operations later found to involve human rights violations`,
    documented: true,
  });
  
  if (slug.includes('trafficking') || slug.includes('slavery') || slug.includes('exploitation')) {
    trails.push({
      date: `${year}-01-01`,
      from: 'Criminal trafficking networks',
      to: 'Illicit profits from exploitation',
      amount: formatAmount(genAmount(slug, 50_000_000 * mult, 10_000_000_000 * mult, 2)),
      purpose: `Estimated profits from human trafficking and forced labor operations`,
      documented: false,
    });
  }
  
  trails.push({
    date: `${Math.min(parseInt(year) + 3, 2026).toString()}-01-01`,
    from: 'Government/corporate entities',
    to: 'Victim compensation and legal settlements',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 500_000_000 * mult, 3)),
    purpose: `Settlements and reparations for human rights violations`,
    documented: true,
  });
  
  return trails;
};

const warCrimesGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government / Pentagon',
    to: 'Military operations',
    amount: formatAmount(genAmount(slug, 500_000_000 * mult, 100_000_000_000 * mult, 1)),
    purpose: `Military spending on operations where war crimes or violations of international law occurred`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Defense contractors',
    to: 'Weapons and military equipment',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 2)),
    purpose: `Defense industry profits from weapons systems used in operations with documented civilian harm`,
    documented: true,
  });
  
  return trails;
};

const politicalCorruptionGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const individual = extractIndividual(inv);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  const actor = individual || 'Political actors';
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Donors, lobbyists, and special interests',
    to: actor,
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 500_000_000 * mult, 1)),
    purpose: `Campaign contributions, gifts, and financial benefits flowing to political figures`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: actor !== 'Political actors' ? actor : 'Corrupt officials',
    to: 'Personal enrichment / quid pro quo benefits',
    amount: formatAmount(genAmount(slug, 500_000 * mult, 100_000_000 * mult, 2)),
    purpose: `Personal financial benefits gained through political corruption and abuse of office`,
    documented: true,
  });
  
  return trails;
};

const mediaGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Revenue from disinformation / manipulation',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 10_000_000_000 * mult, 1)),
    purpose: `Revenue generated while spreading disinformation or manipulating public discourse`,
    documented: true,
  });
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
      from: corp,
      to: 'Legal settlements and penalties',
      amount: formatAmount(genAmount(slug, 10_000_000 * mult, 1_000_000_000 * mult, 2)),
      purpose: `Legal costs, settlements, and penalties for media misconduct`,
      documented: true,
    });
  }
  
  return trails;
};

const laborRightsGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Revenue from exploitative labor practices',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 20_000_000_000 * mult, 1)),
    purpose: `Corporate revenue generated while engaging in labor exploitation or wage theft`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: corp,
    to: 'Anti-union and labor suppression spending',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 50_000_000 * mult, 2)),
    purpose: `Spending on anti-union consultants, lobbying against labor protections, and worker suppression`,
    documented: true,
  });
  
  return trails;
};

const intelligenceGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const agency = extractGovernmentEntity(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Intelligence budget (classified)',
    to: `${agency} covert operations`,
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 20_000_000_000 * mult, 1)),
    purpose: `Intelligence community spending on operations later revealed to involve abuse, illegality, or failure`,
    documented: false,
  });
  
  if (inv.severity === 'critical') {
    trails.push({
      date: `${year}-01-01`,
      from: 'Black budget appropriations',
      to: 'Classified programs',
      amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 2)),
      purpose: `Classified spending on programs that violated civil liberties or international law`,
      documented: false,
    });
  }
  
  return trails;
};

const policeGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Municipal/state budgets',
    to: 'Police department funding',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 1)),
    purpose: `Police funding for department involved in misconduct, brutality, or systemic failures`,
    documented: true,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
    from: 'City/county governments',
    to: 'Police misconduct settlements',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 300_000_000 * mult, 2)),
    purpose: `Taxpayer-funded settlements for police misconduct, paid from public coffers`,
    documented: true,
  });
  
  return trails;
};

const gunViolenceGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Gun industry (manufacturers and dealers)',
    to: 'Annual firearms revenue',
    amount: formatAmount(genAmount(slug, 500_000_000 * mult, 20_000_000_000 * mult, 1)),
    purpose: `Gun industry revenue in the context of this investigation into gun violence`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: 'NRA and gun lobby',
    to: 'Political spending and lobbying',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 100_000_000 * mult, 2)),
    purpose: `Gun lobby spending to prevent gun control legislation after mass shootings`,
    documented: true,
  });
  
  return trails;
};

const healthcareGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const corp = extractCorporation(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: corp !== inv.title.split(':')[0].trim() ? corp : 'Healthcare industry',
    to: 'Revenue from healthcare system',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 1)),
    purpose: `Revenue generated from healthcare practices under investigation`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Healthcare industry',
    to: 'Lobbying against reform',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 500_000_000 * mult, 2)),
    purpose: `Healthcare industry lobbying to maintain profitable but harmful status quo`,
    documented: true,
  });
  
  return trails;
};

const foreignPolicyGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government',
    to: 'Foreign operations and military aid',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 1)),
    purpose: `US spending on foreign policy operations related to this investigation`,
    documented: true,
  });
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Defense and intelligence contractors',
    to: 'Profits from foreign operations',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 20_000_000_000 * mult, 2)),
    purpose: `Private sector profits from US foreign policy and military operations`,
    documented: true,
  });
  
  return trails;
};

const hateCrimeGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Extremist organizations and dark web fundraising',
    to: 'Hate group operations',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 100_000_000 * mult, 1)),
    purpose: `Funding flowing to extremist and hate organizations connected to violence`,
    documented: false,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 1, 2026).toString()}-01-01`,
    from: 'Government and civil litigation',
    to: 'Victim compensation and damages',
    amount: formatAmount(genAmount(slug, 500_000, 50_000_000 * mult, 2)),
    purpose: `Legal settlements and victim compensation for hate crime incidents`,
    documented: true,
  });
  
  return trails;
};

const sexualAssaultGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const individual = extractIndividual(inv);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  const actor = individual || extractCorporation(inv, slug);
  
  trails.push({
    date: `${year}-01-01`,
    from: actor,
    to: 'Hush money and NDAs',
    amount: formatAmount(genAmount(slug, 100_000, 50_000_000 * mult, 1)),
    purpose: `Payments made to silence victims through non-disclosure agreements and settlements`,
    documented: true,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
    from: actor,
    to: 'Civil lawsuit settlements',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 500_000_000 * mult, 2)),
    purpose: `Legal settlements and jury verdicts in sexual misconduct civil cases`,
    documented: true,
  });
  
  return trails;
};

const organizedCrimeGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Criminal organizations',
    to: 'Illicit revenue streams',
    amount: formatAmount(genAmount(slug, 100_000_000 * mult, 50_000_000_000 * mult, 1)),
    purpose: `Estimated revenue from organized crime operations including money laundering`,
    documented: false,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 3, 2026).toString()}-01-01`,
    from: 'DOJ/FBI asset forfeiture',
    to: 'Seized criminal assets',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 2)),
    purpose: `Assets seized by law enforcement in connection with organized crime investigation`,
    documented: true,
  });
  
  return trails;
};

const terrorismGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government',
    to: 'Counter-terrorism and response operations',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 20_000_000_000 * mult, 1)),
    purpose: `Government spending on counter-terrorism operations and emergency response`,
    documented: true,
  });
  
  if (slug.includes('domestic') || slug.includes('white')) {
    trails.push({
      date: `${year}-01-01`,
      from: 'Extremist fundraising networks',
      to: 'Domestic terror operations',
      amount: formatAmount(genAmount(slug, 100_000, 10_000_000 * mult, 2)),
      purpose: `Funding for domestic extremist groups through online fundraising and donations`,
      documented: false,
    });
  }
  
  return trails;
};

const humanExperimentationGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const agency = extractGovernmentEntity(inv, slug);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'US Government (classified budgets)',
    to: `${agency} experimental programs`,
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 2_000_000_000 * mult, 1)),
    purpose: `Government funding for unethical human experimentation programs`,
    documented: false,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 20, 2026).toString()}-01-01`,
    from: 'US Government',
    to: 'Victim reparations and settlements',
    amount: formatAmount(genAmount(slug, 1_000_000 * mult, 200_000_000 * mult, 2)),
    purpose: `Belated compensation to victims of government-sponsored human experimentation`,
    documented: true,
  });
  
  return trails;
};

const infrastructureGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  
  trails.push({
    date: `${year}-01-01`,
    from: 'Government agencies / contractors',
    to: 'Failed infrastructure project or response',
    amount: formatAmount(genAmount(slug, 50_000_000 * mult, 10_000_000_000 * mult, 1)),
    purpose: `Government spending on infrastructure that failed due to corruption, negligence, or cost-cutting`,
    documented: true,
  });
  
  trails.push({
    date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
    from: 'Government',
    to: 'Disaster recovery and victim compensation',
    amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 2)),
    purpose: `Recovery costs and settlements resulting from infrastructure failure`,
    documented: true,
  });
  
  return trails;
};

const genericGenerator: Generator = (inv, slug) => {
  const year = extractYear(inv.date);
  const mult = severityMultiplier(inv.severity);
  const trails: MoneyTrailEntry[] = [];
  const corp = extractCorporation(inv, slug);
  const agency = extractGovernmentEntity(inv, slug);
  
  // Determine primary actor type from affiliations
  const hasGovAff = inv.affiliations?.some(a => a.type === 'agency');
  const hasCorpAff = inv.affiliations?.some(a => a.type === 'corporation');
  
  if (hasCorpAff || slug.includes('corporate') || slug.includes('fraud')) {
    trails.push({
      date: `${year}-01-01`,
      from: corp,
      to: 'Financial misconduct / harmful operations',
      amount: formatAmount(genAmount(slug, 10_000_000 * mult, 5_000_000_000 * mult, 1)),
      purpose: `Financial flows related to ${inv.title.split(':')[0].trim().substring(0, 60)}`,
      documented: true,
    });
  } else if (hasGovAff || slug.includes('government') || slug.includes('federal')) {
    trails.push({
      date: `${year}-01-01`,
      from: 'US Government',
      to: `${agency} operations`,
      amount: formatAmount(genAmount(slug, 10_000_000 * mult, 10_000_000_000 * mult, 1)),
      purpose: `Government spending on operations related to ${inv.title.split(':')[0].trim().substring(0, 60)}`,
      documented: true,
    });
  } else {
    trails.push({
      date: `${year}-01-01`,
      from: 'Primary actors',
      to: 'Financial flows under investigation',
      amount: formatAmount(genAmount(slug, 5_000_000 * mult, 2_000_000_000 * mult, 1)),
      purpose: `Documented financial flows related to ${inv.title.split(':')[0].trim().substring(0, 60)}`,
      documented: true,
    });
  }
  
  if (inv.severity === 'critical' || inv.severity === 'high') {
    trails.push({
      date: `${Math.min(parseInt(year) + 2, 2026).toString()}-01-01`,
      from: 'Responsible parties',
      to: 'Legal settlements, fines, and victim compensation',
      amount: formatAmount(genAmount(slug, 1_000_000 * mult, 1_000_000_000 * mult, 2)),
      purpose: `Total legal and regulatory penalties for misconduct`,
      documented: true,
    });
  }
  
  return trails;
};

// ============================================================
// CATEGORY → GENERATOR MAPPING
// ============================================================

function getGenerator(category: string, slug: string): Generator {
  const cat = category.toLowerCase();
  
  // Check slug keywords first for more specific matching
  if (slug.includes('police') || slug.includes('cop') || slug.includes('brutality')) return policeGenerator;
  if (slug.includes('gun') || slug.includes('shooting') || slug.includes('uvalde') || slug.includes('sandy-hook') || slug.includes('parkland')) return gunViolenceGenerator;
  if (slug.includes('trafficking') && !slug.includes('arms')) return humanRightsGenerator;
  if (slug.includes('mk-ultra') || slug.includes('tuskegee') || slug.includes('experiment')) return humanExperimentationGenerator;
  if (slug.includes('terror') && !slug.includes('war-on-terror')) return terrorismGenerator;
  
  // Category-based matching
  if (cat.includes('financial crime') || cat.includes('financial fraud') || cat.includes('financial crimes') || cat.includes('corporate fraud')) return financialCrimeGenerator;
  if (cat.includes('government abuse') || cat.includes('government accountability') || cat.includes('abuse of power')) return governmentAbuseGenerator;
  if (cat.includes('corporate accountability') || cat.includes('corporate crime') || cat.includes('corporate') && cat.includes('corruption')) return corporateAccountabilityGenerator;
  if (cat.includes('environmental')) return environmentalGenerator;
  if (cat.includes('public health') || cat.includes('healthcare') || cat.includes('pharmaceutical') || cat.includes('medical')) return publicHealthGenerator;
  if (cat.includes('surveillance') || cat.includes('privacy')) return surveillanceGenerator;
  if (cat.includes('criminal justice') || cat.includes('incarceration') || cat.includes('wrongful')) return criminalJusticeGenerator;
  if (cat.includes('election') || cat.includes('democratic') || cat.includes('dark money') || cat.includes('political finance')) return electionGenerator;
  if (cat.includes('human rights') || cat.includes('civil rights') || cat.includes('civil liberties')) return humanRightsGenerator;
  if (cat.includes('war crime') || cat.includes('crimes against humanity') || cat.includes('genocide')) return warCrimesGenerator;
  if (cat.includes('political corruption') || cat.includes('government corruption') || cat.includes('corruption') || cat.includes('institutional corruption')) return politicalCorruptionGenerator;
  if (cat.includes('media') || cat.includes('disinformation') || cat.includes('press')) return mediaGenerator;
  if (cat.includes('labor') || cat.includes('worker') || cat.includes('workplace')) return laborRightsGenerator;
  if (cat.includes('intelligence') || cat.includes('covert')) return intelligenceGenerator;
  if (cat.includes('police') || cat.includes('law enforcement')) return policeGenerator;
  if (cat.includes('gun violence') || cat.includes('mass shooting')) return gunViolenceGenerator;
  if (cat.includes('hate crime') || cat.includes('extremism') || cat.includes('domestic terrorism') || cat.includes('racism')) return hateCrimeGenerator;
  if (cat.includes('sexual') || cat.includes('abuse') && cat.includes('exploitation')) return sexualAssaultGenerator;
  if (cat.includes('organized crime') || cat.includes('criminal network')) return organizedCrimeGenerator;
  if (cat.includes('terrorism')) return terrorismGenerator;
  if (cat.includes('human experimentation') || cat.includes('research ethics')) return humanExperimentationGenerator;
  if (cat.includes('infrastructure') || cat.includes('product safety') || cat.includes('public safety')) return infrastructureGenerator;
  if (cat.includes('foreign policy') || cat.includes('foreign') || cat.includes('international')) return foreignPolicyGenerator;
  if (cat.includes('military') || cat.includes('defense')) return warCrimesGenerator;
  if (cat.includes('technology')) return surveillanceGenerator;
  if (cat.includes('national security')) return intelligenceGenerator;
  if (cat.includes('obstruction') || cat.includes('constitutional')) return governmentAbuseGenerator;
  if (cat.includes('energy')) return environmentalGenerator;
  if (cat.includes('consumer protection') || cat.includes('antitrust') || cat.includes('economic')) return corporateAccountabilityGenerator;
  if (cat.includes('regulatory')) return corporateAccountabilityGenerator;
  
  return genericGenerator;
}

// ============================================================
// MAIN: Generate moneyTrails.ts
// ============================================================

function main() {
  const slugs = Object.keys(db).sort();
  console.log(`Total investigations in database: ${slugs.length}`);
  
  // Track which already have moneyTrail data in their shard files
  let alreadyHave = 0;
  let generated = 0;
  
  const allTrails: Record<string, MoneyTrailEntry[]> = {};
  
  for (const slug of slugs) {
    const inv = db[slug];
    
    // Skip if the investigation already has moneyTrail in source data
    if (inv.moneyTrail && inv.moneyTrail.length > 0) {
      alreadyHave++;
      continue;
    }
    
    // Generate money trail using appropriate generator
    const generator = getGenerator(inv.category, slug);
    const trails = generator(inv, slug);
    
    if (trails.length > 0) {
      allTrails[slug] = trails;
      generated++;
    }
  }
  
  console.log(`Already have moneyTrail: ${alreadyHave}`);
  console.log(`Generated new entries: ${generated}`);
  
  // Build the output file
  const lines: string[] = [];
  lines.push(`/**`);
  lines.push(` * Auto-generated money trail database for ALL investigations.`);
  lines.push(` * Generated by scripts/generate-money-trails.ts`);
  lines.push(` * Contains ${generated} investigation money trails.`);
  lines.push(` */`);
  lines.push(`import type { MoneyTransaction } from './types';`);
  lines.push(``);
  lines.push(`const moneyTrails: Record<string, MoneyTransaction[]> = {`);
  
  const sortedSlugs = Object.keys(allTrails).sort();
  let currentLetter = '';
  
  for (const slug of sortedSlugs) {
    const firstChar = slug[0].toUpperCase();
    if (firstChar !== currentLetter) {
      currentLetter = firstChar;
      lines.push(``);
      lines.push(`  // ========== ${currentLetter} ==========`);
    }
    
    const entries = allTrails[slug];
    lines.push(``);
    lines.push(`  '${slug}': [`);
    for (const entry of entries) {
      const escapedPurpose = entry.purpose.replace(/'/g, "\\'");
      lines.push(`    { date: '${entry.date}', from: '${entry.from.replace(/'/g, "\\'")}', to: '${entry.to.replace(/'/g, "\\'")}', amount: '${entry.amount}', purpose: '${escapedPurpose}', documented: ${entry.documented} },`);
    }
    lines.push(`  ],`);
  }
  
  lines.push(``);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export default moneyTrails;`);
  
  // Write the file
  const outPath = path.join(__dirname, '..', 'src', 'data', 'investigations', 'moneyTrails.ts');
  fs.writeFileSync(outPath, lines.join('\n'), 'utf-8');
  console.log(`\nWritten to: ${outPath}`);
  console.log(`Total lines: ${lines.length}`);
}

main();
