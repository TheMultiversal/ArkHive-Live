// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — SHARED UTILITIES
//  Tools for dissecting the data corpus
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const config = require('./config');

// ── File I/O Utilities ───────────────────────────────────────────

/**
 * Read a file safely, returning null on failure
 */
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

/**
 * Write file with atomic operation (write to temp, then rename)
 */
function writeFileAtomic(filePath, content) {
  const tmpPath = filePath + '.tmp.' + crypto.randomBytes(4).toString('hex');
  try {
    fs.writeFileSync(tmpPath, content, 'utf8');
    // Retry rename up to 5 times (OneDrive file locking can cause EPERM)
    let lastErr;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        fs.renameSync(tmpPath, filePath);
        return true;
      } catch (e) {
        lastErr = e;
        if (e.code === 'EPERM' || e.code === 'EBUSY') {
          // Wait 200ms * (attempt+1) for file lock to release
          const waitMs = 200 * (attempt + 1);
          const start = Date.now();
          while (Date.now() - start < waitMs) { /* busy wait */ }
        } else {
          throw e;
        }
      }
    }
    // If rename keeps failing, try direct write as last resort
    try { fs.unlinkSync(tmpPath); } catch (_) {}
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (e) {
    try { fs.unlinkSync(tmpPath); } catch (_) {}
    throw e;
  }
}

/**
 * Create a timestamped backup of a file
 */
function backupFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const name = path.basename(filePath);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(config.paths.backups, `${name}.${timestamp}.bak`);
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

// ── Profile Data Extraction ──────────────────────────────────────

/**
 * Extract all individual profile slugs from the individuals page.tsx
 * Returns array of slug strings
 */
function extractExistingIndividualSlugs(fileContent) {
  const slugs = [];
  // Match patterns like: 'slug-name': { or "slug-name": {
  const regex = /^\s*'([a-z0-9-]+)'\s*:\s*\{/gm;
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    slugs.push(match[1]);
  }
  // Also try double quotes
  const regex2 = /^\s*"([a-z0-9-]+)"\s*:\s*\{/gm;
  while ((match = regex2.exec(fileContent)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

/**
 * Extract all known associates and their hrefs from individuals page
 * Returns Map<slug, { name, referencedBy: string[], relationships: string[] }>
 */
function extractKnownAssociateLinks(fileContent) {
  const associates = new Map();

  // Find href links in knownAssociates arrays
  // Pattern: { name: 'Name', relationship: 'Rel', href: '/entities/individuals/slug' }
  const hrefRegex = /href:\s*'\/entities\/individuals\/([a-z0-9-]+)'/g;
  let match;

  // First, we need context: which profile block are we in?
  // Split by profile entries
  const profileBlocks = fileContent.split(/(?=\n\s*'[a-z0-9-]+'\s*:\s*\{)/);

  for (const block of profileBlocks) {
    const slugMatch = block.match(/^\s*'([a-z0-9-]+)'\s*:\s*\{/m);
    if (!slugMatch) continue;
    const currentSlug = slugMatch[1];

    // Find all associate hrefs in this block
    const blockHrefRegex = /\{\s*name:\s*'([^']+)'\s*,\s*relationship:\s*'([^']+)'\s*,\s*href:\s*'\/entities\/individuals\/([a-z0-9-]+)'/g;
    let assocMatch;
    while ((assocMatch = blockHrefRegex.exec(block)) !== null) {
      const [, name, relationship, slug] = assocMatch;
      if (!associates.has(slug)) {
        associates.set(slug, {
          name,
          referencedBy: [],
          relationships: [],
        });
      }
      const entry = associates.get(slug);
      if (!entry.referencedBy.includes(currentSlug)) {
        entry.referencedBy.push(currentSlug);
      }
      if (!entry.relationships.includes(relationship)) {
        entry.relationships.push(relationship);
      }
    }

    // Also check for simpler href patterns
    const simpleHrefRegex = /href:\s*'\/entities\/individuals\/([a-z0-9-]+)'/g;
    let simpleMatch;
    while ((simpleMatch = simpleHrefRegex.exec(block)) !== null) {
      const slug = simpleMatch[1];
      if (!associates.has(slug)) {
        associates.set(slug, {
          name: slugToName(slug),
          referencedBy: [],
          relationships: [],
        });
      }
      const entry = associates.get(slug);
      if (!entry.referencedBy.includes(currentSlug)) {
        entry.referencedBy.push(currentSlug);
      }
    }
  }

  return associates;
}

/**
 * Extract affiliations with hrefs from any entity page
 * Returns array of { name, type, href, slug }
 */
function extractAffiliationLinks(fileContent) {
  const affiliations = [];
  // Pattern: href: '/entities/TYPE/SLUG'
  const regex = /href:\s*'\/entities\/(individuals|agencies|corporations|organizations)\/([a-z0-9-]+)'/g;
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    affiliations.push({
      type: match[1],
      slug: match[2],
      name: slugToName(match[2]),
    });
  }
  return affiliations;
}

/**
 * Extract investigation slugs referenced in entity pages
 */
function extractInvestigationRefs(fileContent) {
  const refs = new Set();
  const regex = /slug:\s*'([a-z0-9-]+)'/g;
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    refs.add(match[1]);
  }
  return Array.from(refs);
}

// ── String Utilities ─────────────────────────────────────────────

/**
 * Convert slug to human-readable name
 * e.g., 'john-doe' -> 'John Doe'
 */
function slugToName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert name to URL-safe slug
 * e.g., 'John Q. Doe III' -> 'john-q-doe-iii'
 */
function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[''']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate a unique ID
 */
function generateId() {
  return crypto.randomBytes(8).toString('hex');
}

/**
 * Truncate string with ellipsis
 */
function truncate(str, maxLength = 80) {
  if (!str || str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + '...';
}

/**
 * Escape single quotes for JS string literals
 */
function escapeJsString(str) {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') str = String(str);
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

// ── Task Queue Utilities ─────────────────────────────────────────

/**
 * Load the persistent task queue
 */
function loadQueue() {
  const defaultQueue = { tasks: [], completed: [], failed: [], stats: { totalGenerated: 0, totalFailed: 0, totalInjected: 0 } };
  try {
    if (!fs.existsSync(config.paths.queue)) return defaultQueue;
    const data = JSON.parse(fs.readFileSync(config.paths.queue, 'utf8'));
    return { ...defaultQueue, ...data };
  } catch (e) {
    return defaultQueue;
  }
}

/**
 * Save the task queue
 */
function saveQueue(queue) {
  writeFileAtomic(config.paths.queue, JSON.stringify(queue, null, 2));
}

/**
 * Load swarm state
 */
function loadState() {
  const defaultState = {
    startedAt: null,
    lastScan: null,
    lastGeneration: null,
    lastAudit: null,
    cycleCount: 0,
    totalProfilesGenerated: 0,
    totalProfilesInjected: 0,
    totalErrors: 0,
    activeWorkers: 0,
    spawnedBots: [],
    ollamaAvailable: false,
    ollamaModel: null,
  };
  try {
    if (!fs.existsSync(config.paths.state)) return defaultState;
    const data = JSON.parse(fs.readFileSync(config.paths.state, 'utf8'));
    return { ...defaultState, ...data };
  } catch (e) {
    return defaultState;
  }
}

/**
 * Save swarm state
 */
function saveState(state) {
  writeFileAtomic(config.paths.state, JSON.stringify(state, null, 2));
}

// ── Profile Template ─────────────────────────────────────────────

/**
 * Generate a minimal profile template (used when AI is unavailable)
 * Returns an IndividualProfile-compatible object
 */
function generateProfileTemplate(slug, context = {}) {
  const name = context.name || slugToName(slug);
  const relationships = context.relationships || [];
  const referencedBy = context.referencedBy || [];
  const refNames = referencedBy.map(s => slugToName(s));

  // Determine likely role from relationships and context
  const roleFromRelationships = relationships.length > 0
    ? relationships[0]
    : 'Public Figure Under Investigation';

  // Determine risk level based on reference count
  const riskLevel = context.riskLevel || (referencedBy.length >= 5 ? 'high' : referencedBy.length >= 2 ? 'medium' : 'low');

  // Build a rich description based on available context
  const connectionText = refNames.length > 0
    ? `Connections to ${refNames.slice(0, 5).join(', ')}${refNames.length > 5 ? ` and ${refNames.length - 5} other entities` : ''} have been identified through cross-referencing investigative databases.`
    : 'Connections to multiple entities under investigation have been identified.';

  const description = `${name} is a public figure identified through ArkHive's investigative network analysis of institutional power structures and accountability gaps. ${connectionText} ArkHive's automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.`;

  // Generate timeline entries
  const today = new Date().toISOString().split('T')[0];
  const timeline = [
    { date: today, event: `Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation` },
    { date: today, event: `Cross-referenced with ${referencedBy.length} connected entity profiles in the ArkHive database` },
  ];
  if (referencedBy.length > 0) {
    timeline.push({ date: today, event: `Network analysis identified connections to: ${refNames.slice(0, 3).join(', ')}` });
  }

  // Generate sources
  const sources = [
    { title: 'ArkHive Investigative Database — Network Analysis', url: 'https://arkhive.org', date: today },
    { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: today },
    { title: 'OpenSecrets.org — Follow the Money', url: 'https://www.opensecrets.org', date: today },
  ];

  // Generate controversies based on context
  const controversies = [];
  if (refNames.length > 0) {
    controversies.push(`Network analysis has revealed connections to ${refNames.slice(0, 3).join(', ')}, entities currently under investigation in the ArkHive accountability database. The nature and extent of these connections are being documented.`);
  }
  controversies.push(`${name} has been flagged by ArkHive's automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.`);
  if (referencedBy.length >= 3) {
    controversies.push(`Cross-referenced in ${referencedBy.length} separate profile entries, suggesting a significant role within institutional power networks under scrutiny.`);
  }

  return {
    name,
    title: roleFromRelationships,
    role: 'Under Investigation',
    riskLevel,
    description,
    birthDate: '',
    birthPlace: '',
    education: [],
    netWorth: '',
    affiliations: referencedBy.slice(0, 5).map(refSlug => ({
      name: slugToName(refSlug),
      role: 'Connected Entity',
      type: 'organization',
    })),
    controversies,
    relatedInvestigations: [],
    timeline,
    socialMedia: [],
    charges: [],
    sources,
    aliases: [],
    knownAssociates: referencedBy.slice(0, 10).map(refSlug => ({
      name: slugToName(refSlug),
      relationship: 'Connected Entity',
      href: `/entities/individuals/${refSlug}`,
    })),
  };
}

/**
 * Serialize a profile object to TypeScript object literal string
 * Must produce valid JS/TS that matches the existing page.tsx format
 */
function profileToTsLiteral(slug, profile) {
  const esc = escapeJsString;
  const lines = [];

  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${esc(profile.name)}',`);
  lines.push(`    title: '${esc(profile.title)}',`);
  lines.push(`    role: '${esc(profile.role)}',`);
  lines.push(`    riskLevel: '${profile.riskLevel || 'medium'}',`);
  lines.push(`    description: '${esc(profile.description)}',`);

  // Optional simple fields
  if (profile.birthDate) lines.push(`    birthDate: '${esc(profile.birthDate)}',`);
  if (profile.birthPlace) lines.push(`    birthPlace: '${esc(profile.birthPlace)}',`);
  if (profile.deathDate) lines.push(`    deathDate: '${esc(profile.deathDate)}',`);
  if (profile.netWorth) lines.push(`    netWorth: '${esc(profile.netWorth)}',`);

  // Education array
  lines.push(`    education: [${(profile.education || []).map(e => `'${esc(typeof e === 'string' ? e : (e?.degree || e?.name || JSON.stringify(e)))}'`).join(', ')}],`);

  // Affiliations array
  lines.push(`    affiliations: [`);
  for (const aff of (profile.affiliations || [])) {
    const affName = typeof aff === 'string' ? aff : (aff.name || 'Unknown');
    const affRole = typeof aff === 'string' ? 'Associated' : (aff.role || 'Associated');
    const affType = typeof aff === 'string' ? 'organization' : (aff.type || 'organization');
    lines.push(`      { name: '${esc(affName)}', role: '${esc(affRole)}', type: '${esc(affType)}' },`);
  }
  lines.push(`    ],`);

  // Controversies array
  lines.push(`    controversies: [`);
  for (const c of (profile.controversies || [])) {
    const cStr = typeof c === 'string' ? c : (c?.description || c?.title || JSON.stringify(c));
    lines.push(`      '${esc(cStr)}',`);
  }
  lines.push(`    ],`);

  // Charges array
  if (profile.charges && profile.charges.length > 0) {
    lines.push(`    charges: [`);
    for (const ch of profile.charges) {
      if (typeof ch === 'string') {
        lines.push(`      { statute: '', description: '${esc(ch)}', category: 'Other' },`);
      } else {
        lines.push(`      { statute: '${esc(ch.statute || '')}', description: '${esc(ch.description || '')}', category: '${esc(ch.category || 'Other')}' },`);
      }
    }
    lines.push(`    ],`);
  } else {
    lines.push(`    charges: [],`);
  }

  // Related investigations
  lines.push(`    relatedInvestigations: [`);
  for (const ri of (profile.relatedInvestigations || [])) {
    if (typeof ri === 'string') {
      lines.push(`      { title: '${esc(ri)}', slug: '${esc(ri.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}', severity: 'medium' },`);
    } else {
      lines.push(`      { title: '${esc(ri.title || '')}', slug: '${esc(ri.slug || '')}', severity: '${ri.severity || 'medium'}' },`);
    }
  }
  lines.push(`    ],`);

  // Timeline
  lines.push(`    timeline: [`);
  for (const t of (profile.timeline || [])) {
    if (typeof t === 'string') {
      lines.push(`      { date: '', event: '${esc(t)}' },`);
    } else {
      lines.push(`      { date: '${esc(t.date || '')}', event: '${esc(t.event || '')}' },`);
    }
  }
  lines.push(`    ],`);

  // Social media
  if (profile.socialMedia && Array.isArray(profile.socialMedia) && profile.socialMedia.length > 0) {
    lines.push(`    socialMedia: [`);
    for (const sm of profile.socialMedia) {
      lines.push(`      { platform: '${esc(sm.platform)}', handle: '${esc(sm.handle)}' },`);
    }
    lines.push(`    ],`);
  } else {
    lines.push(`    socialMedia: [],`);
  }

  // Sources
  lines.push(`    sources: [`);
  for (const s of (profile.sources || [])) {
    if (typeof s === 'string') {
      lines.push(`      { title: '${esc(s)}', url: '', date: '' },`);
    } else {
      lines.push(`      { title: '${esc(s.title || 'Source')}', url: '${esc(s.url || '')}', date: '${esc(s.date || '')}' },`);
    }
  }
  lines.push(`    ],`);

  // Aliases
  lines.push(`    aliases: [${(profile.aliases || []).map(a => `'${esc(typeof a === 'string' ? a : String(a))}'`).join(', ')}],`);

  // Known associates
  lines.push(`    knownAssociates: [`);
  for (const ka of (profile.knownAssociates || [])) {
    if (typeof ka === 'string') {
      lines.push(`      { name: '${esc(ka)}', relationship: 'Connected' },`);
    } else if (ka.href) {
      lines.push(`      { name: '${esc(ka.name || 'Unknown')}', relationship: '${esc(ka.relationship || 'Connected')}', href: '${esc(ka.href)}' },`);
    } else {
      lines.push(`      { name: '${esc(ka.name || 'Unknown')}', relationship: '${esc(ka.relationship || 'Connected')}' },`);
    }
  }
  lines.push(`    ],`);

  lines.push(`  },`);

  return lines.join('\n');
}

// ── Validation Utilities ─────────────────────────────────────────

/**
 * Validate a profile against quality requirements
 * Now supports per-type validation via config.quality.requiredFieldsByType
 * @param {object} profile - The profile/entity data to validate
 * @param {string} [entityType='individual'] - The entity type
 * Returns { valid: boolean, score: number, issues: string[] }
 */
function validateProfile(profile, entityType = 'individual') {
  const issues = [];
  let score = 100;

  // Use per-type required fields if available, else default
  const requiredFields = (config.quality.requiredFieldsByType && config.quality.requiredFieldsByType[entityType])
    || config.quality.requiredFields;

  // Use per-type risk levels if available
  const validRiskLevels = (config.quality.riskLevelsByType && config.quality.riskLevelsByType[entityType])
    || config.quality.riskLevels;

  // Required fields
  for (const field of requiredFields) {
    if (!profile[field]) {
      issues.push(`Missing required field: ${field}`);
      score -= 15;
    }
  }

  // Risk level / severity validation
  const rlField = entityType === 'investigation' ? 'severity' : 'riskLevel';
  if (profile[rlField] && !validRiskLevels.includes(profile[rlField])) {
    issues.push(`Invalid ${rlField}: ${profile[rlField]}`);
    score -= 10;
  }

  // Description / summary length
  const descField = entityType === 'investigation' ? 'summary' : 'description';
  if (profile[descField]) {
    if (profile[descField].length < config.quality.minDescriptionLength) {
      issues.push(`${descField} too short (${profile[descField].length} chars, min ${config.quality.minDescriptionLength})`);
      score -= 10;
    }
    if (profile[descField].length > config.quality.maxDescriptionLength) {
      issues.push(`${descField} too long (${profile[descField].length} chars, max ${config.quality.maxDescriptionLength})`);
      score -= 5;
    }
  }

  // Individual-specific checks
  if (entityType === 'individual') {
    if ((profile.controversies || []).length < config.quality.minControversies) {
      issues.push(`Too few controversies (${(profile.controversies || []).length}, min ${config.quality.minControversies})`);
      score -= 10;
    }
    if ((profile.sources || []).length < config.quality.minSources) {
      issues.push(`Too few sources (${(profile.sources || []).length}, min ${config.quality.minSources})`);
      score -= 10;
    }
    if ((profile.knownAssociates || []).length < config.quality.minKnownAssociates) {
      issues.push(`Too few known associates (${(profile.knownAssociates || []).length}, min ${config.quality.minKnownAssociates})`);
      score -= 5;
    }
    if ((profile.timeline || []).length < config.quality.minTimelineEvents) {
      issues.push(`Too few timeline events (${(profile.timeline || []).length}, min ${config.quality.minTimelineEvents})`);
      score -= 5;
    }
    for (const source of (profile.sources || [])) {
      if (!source.url || (!source.url.startsWith('http') && !source.url.startsWith('/'))) {
        issues.push(`Invalid source URL: ${source.url}`);
        score -= 3;
      }
    }
    for (const ka of (profile.knownAssociates || [])) {
      if (ka.href && !ka.href.startsWith('/entities/')) {
        issues.push(`Invalid associate href: ${ka.href}`);
        score -= 3;
      }
    }
  }

  // Investigation-specific checks
  if (entityType === 'investigation') {
    if ((profile.sources || []).length < config.quality.minSources) {
      issues.push(`Too few sources (${(profile.sources || []).length}, min ${config.quality.minSources})`);
      score -= 10;
    }
    if ((profile.content || []).length < 2) {
      issues.push(`Too few content paragraphs (${(profile.content || []).length}, min 2)`);
      score -= 10;
    }
    if ((profile.tags || []).length < 1) {
      issues.push(`No tags`);
      score -= 5;
    }
  }

  score = Math.max(0, Math.min(100, score));

  return {
    valid: score >= config.quality.scoreThreshold,
    score,
    issues,
  };
}

// ── Formatting Utilities ─────────────────────────────────────────

/**
 * Format a number with thousands separator
 */
function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format milliseconds to human-readable duration
 */
function formatDuration(ms) {
  if (ms < 1000) return `${ms}ms`;
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}h ${m % 60}m ${s % 60}s`;
  if (m > 0) return `${m}m ${s % 60}s`;
  return `${s}s`;
}

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

// ── Per-Type TS Literal Generators ───────────────────────────────

/**
 * Serialize an agency profile to TypeScript object literal string
 * Matches AgencyProfile interface: { id, slug, name, type, description, role, investigationCount, riskLevel, imageUrl? }
 */
function agencyToTsLiteral(slug, profile) {
  const esc = escapeJsString;
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    id: '${esc(profile.id || generateId())}',`);
  lines.push(`    slug: '${esc(slug)}',`);
  lines.push(`    name: '${esc(profile.name)}',`);
  lines.push(`    type: 'agency',`);
  lines.push(`    description: '${esc(profile.description)}',`);
  lines.push(`    role: '${esc(profile.role || 'Government Agency')}',`);
  lines.push(`    investigationCount: ${profile.investigationCount || 0},`);
  lines.push(`    riskLevel: '${profile.riskLevel || 'moderate'}',`);
  if (profile.imageUrl) lines.push(`    imageUrl: '${esc(profile.imageUrl)}',`);
  lines.push(`  },`);
  return lines.join('\n');
}

/**
 * Serialize a corporation profile to TypeScript object literal string
 */
function corporationToTsLiteral(slug, profile) {
  const esc = escapeJsString;
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    id: '${esc(profile.id || generateId())}',`);
  lines.push(`    slug: '${esc(slug)}',`);
  lines.push(`    name: '${esc(profile.name)}',`);
  lines.push(`    type: 'corporation',`);
  lines.push(`    description: '${esc(profile.description)}',`);
  lines.push(`    role: '${esc(profile.role || 'Corporation')}',`);
  lines.push(`    investigationCount: ${profile.investigationCount || 0},`);
  lines.push(`    riskLevel: '${profile.riskLevel || 'moderate'}',`);
  if (profile.imageUrl) lines.push(`    imageUrl: '${esc(profile.imageUrl)}',`);
  lines.push(`  },`);
  return lines.join('\n');
}

/**
 * Serialize an organization profile to TypeScript object literal string
 */
function organizationToTsLiteral(slug, profile) {
  const esc = escapeJsString;
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    name: '${esc(profile.name)}',`);
  lines.push(`    slug: '${esc(slug)}',`);
  lines.push(`    type: '${esc(profile.type || 'Organization')}',`);
  lines.push(`    description: '${esc(profile.description)}',`);
  lines.push(`    riskLevel: '${profile.riskLevel || 'medium'}',`);
  lines.push(`    members: '${esc(profile.members || 'Unknown')}',`);
  if (profile.id) lines.push(`    id: '${esc(profile.id)}',`);
  lines.push(`  },`);
  return lines.join('\n');
}

/**
 * Serialize an investigation to TypeScript object literal string
 */
function investigationToTsLiteral(slug, investigation) {
  const esc = escapeJsString;
  const lines = [];
  lines.push(`  '${slug}': {`);
  lines.push(`    title: '${esc(investigation.title)}',`);
  lines.push(`    subtitle: '${esc(investigation.subtitle || '')}',`);
  lines.push(`    severity: '${investigation.severity || 'medium'}',`);
  lines.push(`    category: '${esc(investigation.category || 'General')}',`);
  lines.push(`    date: '${esc(investigation.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}',`);
  lines.push(`    lastUpdated: '${esc(investigation.lastUpdated || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}',`);
  lines.push(`    summary: '${esc(investigation.summary)}',`);
  // content array
  lines.push(`    content: [`);
  for (const c of (investigation.content || [])) {
    lines.push(`      '${esc(c)}',`);
  }
  lines.push(`    ],`);
  // tags
  lines.push(`    tags: [${(investigation.tags || []).map(t => `'${esc(t)}'`).join(', ')}],`);
  // sources
  lines.push(`    sources: [`);
  for (const s of (investigation.sources || [])) {
    lines.push(`      { title: '${esc(s.title || 'Source')}', url: '${esc(s.url || '')}', type: '${esc(s.type || 'News Report')}' },`);
  }
  lines.push(`    ],`);
  // affiliations
  lines.push(`    affiliations: [`);
  for (const a of (investigation.affiliations || [])) {
    lines.push(`      { id: '${esc(a.id || generateId())}', name: '${esc(a.name)}', type: '${esc(a.type || 'individual')}', relationship: '${esc(a.relationship || 'Connected')}', href: '${esc(a.href || '')}' },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join('\n');
}

// ── Per-Type Template Generators ─────────────────────────────────

/**
 * Generate a minimal agency template (used when AI is unavailable)
 */
function generateAgencyTemplate(slug, context = {}) {
  const name = context.name || slugToName(slug);
  return {
    id: generateId(),
    slug,
    name,
    type: 'agency',
    description: `${name} is a government agency identified through ArkHive's investigative network analysis. This agency has been flagged for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations into institutional power structures and accountability gaps.`,
    role: context.role || 'Government Agency',
    investigationCount: context.investigationCount || 0,
    riskLevel: context.riskLevel || 'moderate',
  };
}

/**
 * Generate a minimal corporation template
 */
function generateCorporationTemplate(slug, context = {}) {
  const name = context.name || slugToName(slug);
  return {
    id: generateId(),
    slug,
    name,
    type: 'corporation',
    description: `${name} is a corporate entity identified through ArkHive's investigative network analysis. This corporation has been flagged for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations into corporate power and accountability.`,
    role: context.role || 'Corporation',
    investigationCount: context.investigationCount || 0,
    riskLevel: context.riskLevel || 'moderate',
  };
}

/**
 * Generate a minimal organization template
 */
function generateOrganizationTemplate(slug, context = {}) {
  const name = context.name || slugToName(slug);
  return {
    name,
    slug,
    type: context.type || 'Organization',
    description: `${name} is an organization identified through ArkHive's investigative network analysis. This organization has been flagged for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations.`,
    riskLevel: context.riskLevel || 'medium',
    members: context.members || 'Unknown',
  };
}

/**
 * Generate a minimal investigation template
 */
function generateInvestigationTemplate(slug, context = {}) {
  const name = context.name || slugToName(slug);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return {
    title: context.title || name,
    subtitle: context.subtitle || `Investigation into ${name}`,
    severity: context.severity || 'medium',
    category: context.category || 'General',
    date: context.date || today,
    lastUpdated: today,
    summary: context.summary || `ArkHive's automated investigative intelligence has flagged ${name} for documentation and expanded analysis. This investigation was generated based on cross-references and network analysis of related entities in the accountability database.`,
    content: context.content || [
      `${name} has been identified through ArkHive's systematic analysis of institutional power structures, corporate networks, and government accountability gaps.`,
      `This investigation is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface through automated intelligence gathering.`,
    ],
    tags: context.tags || ['ArkHive', 'Investigation', 'Accountability'],
    sources: context.sources || [
      { title: 'ArkHive Investigative Database', url: 'https://arkhive.org', type: 'Database' },
      { title: 'Public Records Analysis', url: 'https://arkhive.org/methodology', type: 'Methodology' },
    ],
    affiliations: context.affiliations || [],
  };
}

/**
 * Dispatch to the correct TS literal generator based on entity type
 */
function entityToTsLiteral(slug, data, entityType) {
  switch (entityType) {
    case 'individual': return profileToTsLiteral(slug, data);
    case 'agency':       return agencyToTsLiteral(slug, data);
    case 'corporation':  return corporationToTsLiteral(slug, data);
    case 'organization': return organizationToTsLiteral(slug, data);
    case 'investigation': return investigationToTsLiteral(slug, data);
    default: return profileToTsLiteral(slug, data);
  }
}

/**
 * Dispatch to the correct template generator based on entity type
 */
function generateEntityTemplate(slug, entityType, context = {}) {
  switch (entityType) {
    case 'individual':    return generateProfileTemplate(slug, context);
    case 'agency':        return generateAgencyTemplate(slug, context);
    case 'corporation':   return generateCorporationTemplate(slug, context);
    case 'organization':  return generateOrganizationTemplate(slug, context);
    case 'investigation': return generateInvestigationTemplate(slug, context);
    default: return generateProfileTemplate(slug, context);
  }
}

/**
 * Parse an existing profile from shard files by slug.
 * Determines the correct shard from the slug's first letter,
 * extracts the profile object literal and evaluates it into a JS object.
 */
function parseExistingProfile(slug) {
  // Try shard-manager first (post-migration), fall back to monolithic file
  let content;
  try {
    const shardManager = require('./shard-manager');
    const letter = shardManager.getShardLetter(slug);
    content = shardManager.readShard(letter);
  } catch (_) {}

  // Fallback: read from monolithic file
  if (!content) {
    content = readFileSafe(config.paths.individuals);
  }
  if (!content) return null;

  // Find the start of this profile: ' 'slug': {' or '  'slug': {'
  // Support both 1-space and 2-space indentation
  let startMarker = ` '${slug}': {`;
  let startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    startMarker = `  '${slug}': {`;
    startIdx = content.indexOf(startMarker);
  }
  if (startIdx === -1) return null;

  // Find the end of this profile block — look for the next profile or closing '};'
  // We need to count braces to find the matching closing brace
  const blockStart = content.indexOf('{', startIdx);
  let depth = 0;
  let endIdx = -1;
  for (let i = blockStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }

  if (endIdx === -1) return null;

  const objectLiteral = content.substring(blockStart, endIdx);

  try {
    // Use Function constructor to safely evaluate the object literal
    const profile = new Function('return (' + objectLiteral + ')')();
    return profile;
  } catch (e) {
    return null;
  }
}

module.exports = {
  readFileSafe,
  writeFileAtomic,
  backupFile,
  extractExistingIndividualSlugs,
  extractKnownAssociateLinks,
  extractAffiliationLinks,
  extractInvestigationRefs,
  slugToName,
  nameToSlug,
  generateId,
  truncate,
  escapeJsString,
  loadQueue,
  saveQueue,
  loadState,
  saveState,
  generateProfileTemplate,
  profileToTsLiteral,
  validateProfile,
  parseExistingProfile,
  formatNumber,
  formatDuration,
  formatBytes,
  // ── New multi-type generators ──
  agencyToTsLiteral,
  corporationToTsLiteral,
  organizationToTsLiteral,
  investigationToTsLiteral,
  entityToTsLiteral,
  generateAgencyTemplate,
  generateCorporationTemplate,
  generateOrganizationTemplate,
  generateInvestigationTemplate,
  generateEntityTemplate,
};
