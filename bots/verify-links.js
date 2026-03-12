#!/usr/bin/env node
/**
 * ArkHive Internal Link Verification
 * Scans all data files for href fields and verifies they resolve to existing entities/pages.
 * Run: node bots/verify-links.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'data');
const APP = path.join(ROOT, 'src', 'app');

// ── Collect all valid slugs per entity type ──────────────────

function extractSlugsFromTsRecord(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slugs = new Set();
  const regex = /^\s*'([a-z0-9][a-z0-9-]*)'\s*:/gm;
  let m;
  while ((m = regex.exec(content)) !== null) {
    slugs.add(m[1]);
  }
  return slugs;
}

// Individuals: 26 shard files a-z
const individualSlugs = new Set();
for (const letter of 'abcdefghijklmnopqrstuvwxyz') {
  const file = path.join(DATA, 'individuals', `${letter}.ts`);
  if (fs.existsSync(file)) {
    for (const s of extractSlugsFromTsRecord(file)) individualSlugs.add(s);
  }
}

// Agencies
const agencySlugs = fs.existsSync(path.join(DATA, 'agencies', 'index.ts'))
  ? extractSlugsFromTsRecord(path.join(DATA, 'agencies', 'index.ts'))
  : new Set();

// Corporations
const corpSlugs = fs.existsSync(path.join(DATA, 'corporations', 'index.ts'))
  ? extractSlugsFromTsRecord(path.join(DATA, 'corporations', 'index.ts'))
  : new Set();

// Organizations
const orgSlugs = fs.existsSync(path.join(DATA, 'organizations', 'index.ts'))
  ? extractSlugsFromTsRecord(path.join(DATA, 'organizations', 'index.ts'))
  : new Set();

// Investigations: sharded data files
const investigationSlugs = new Set();
const invDataDir = path.join(DATA, 'investigations');
if (fs.existsSync(invDataDir)) {
  for (const f of fs.readdirSync(invDataDir)) {
    if (f.endsWith('.ts') && f !== 'types.ts') {
      for (const s of extractSlugsFromTsRecord(path.join(invDataDir, f))) {
        investigationSlugs.add(s);
      }
    }
  }
}

// Investigation static routes (src/app/investigations/*)
const invAppDir = path.join(APP, 'investigations');
if (fs.existsSync(invAppDir)) {
  for (const entry of fs.readdirSync(invAppDir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== '[slug]') {
      investigationSlugs.add(entry.name);
    }
  }
}

console.log(`\n╔══════════════════════════════════════════╗`);
console.log(`║   ArkHive Internal Link Verification     ║`);
console.log(`╚══════════════════════════════════════════╝\n`);
console.log(`Valid slugs loaded:`);
console.log(`  Individuals:    ${individualSlugs.size}`);
console.log(`  Agencies:       ${agencySlugs.size}`);
console.log(`  Corporations:   ${corpSlugs.size}`);
console.log(`  Organizations:  ${orgSlugs.size}`);
console.log(`  Investigations: ${investigationSlugs.size}`);
console.log();

// ── Resolve an href to check if it's valid ───────────────────

function resolveHref(href) {
  if (!href || href === '#') return { valid: false, reason: 'placeholder href (#)' };

  // /entities/individuals/slug
  let m = href.match(/^\/entities\/individuals\/([a-z0-9-]+)$/);
  if (m) return { valid: individualSlugs.has(m[1]), reason: m[1], type: 'individual' };

  // /entities/agencies/slug
  m = href.match(/^\/entities\/agencies\/([a-z0-9-]+)$/);
  if (m) return { valid: agencySlugs.has(m[1]), reason: m[1], type: 'agency' };

  // /entities/corporations/slug
  m = href.match(/^\/entities\/corporations\/([a-z0-9-]+)$/);
  if (m) return { valid: corpSlugs.has(m[1]), reason: m[1], type: 'corporation' };

  // /entities/organizations/slug
  m = href.match(/^\/entities\/organizations\/([a-z0-9-]+)$/);
  if (m) return { valid: orgSlugs.has(m[1]), reason: m[1], type: 'organization' };

  // /investigations/slug
  m = href.match(/^\/investigations\/([a-z0-9-]+)$/);
  if (m) return { valid: investigationSlugs.has(m[1]), reason: m[1], type: 'investigation' };

  // External link or unknown pattern
  if (href.startsWith('http')) return { valid: true, reason: 'external', type: 'external' };

  return { valid: false, reason: `unknown pattern: ${href}` };
}

// ── Scan all data files for href fields ──────────────────────

const broken = [];
const stats = { checked: 0, valid: 0, broken: 0, byType: {} };

function scanTsFileForHrefs(filePath, entityType) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');

  // Match href: '/...' or href: "/..."
  const hrefRegex = /href:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    const href = m[1];
    stats.checked++;
    const result = resolveHref(href);

    if (result.valid) {
      stats.valid++;
    } else {
      stats.broken++;
      // Find line number
      const lineNum = content.substring(0, m.index).split('\n').length;
      broken.push({
        file: relPath,
        line: lineNum,
        href,
        reason: result.reason,
        type: result.type || 'unknown',
      });
    }
    stats.byType[result.type || 'unknown'] = (stats.byType[result.type || 'unknown'] || 0) + 1;
  }

  // Also scan for relatedInvestigations slugs
  const riRegex = /slug:\s*'([a-z0-9-]+)'/g;
  // Only in individual files — look for relatedInvestigations context
  if (entityType === 'individual') {
    // Find all slug values near relatedInvestigations
    const riSections = content.split('relatedInvestigations');
    for (let i = 1; i < riSections.length; i++) {
      // Take the next 2000 chars which should contain the array
      const section = riSections[i].substring(0, 2000);
      const closingBracket = section.indexOf('],');
      const arrayPart = closingBracket > 0 ? section.substring(0, closingBracket) : section;

      const slugRegex = /slug:\s*'([a-z0-9-]+)'/g;
      let sm;
      while ((sm = slugRegex.exec(arrayPart)) !== null) {
        const slug = sm[1];
        stats.checked++;
        if (investigationSlugs.has(slug)) {
          stats.valid++;
        } else {
          stats.broken++;
          // Approximate line number
          const offset = content.indexOf(`slug: '${slug}'`);
          const lineNum = offset >= 0 ? content.substring(0, offset).split('\n').length : 0;
          broken.push({
            file: relPath,
            line: lineNum,
            href: `/investigations/${slug}`,
            reason: slug,
            type: 'investigation',
          });
        }
        stats.byType['investigation-slug'] = (stats.byType['investigation-slug'] || 0) + 1;
      }
    }
  }
}

// Scan individuals
for (const letter of 'abcdefghijklmnopqrstuvwxyz') {
  const file = path.join(DATA, 'individuals', `${letter}.ts`);
  if (fs.existsSync(file)) scanTsFileForHrefs(file, 'individual');
}

// Scan investigations
if (fs.existsSync(invDataDir)) {
  for (const f of fs.readdirSync(invDataDir)) {
    if (f.endsWith('.ts') && f !== 'types.ts') {
      scanTsFileForHrefs(path.join(invDataDir, f), 'investigation');
    }
  }
}

// Scan agencies
if (fs.existsSync(path.join(DATA, 'agencies', 'index.ts'))) {
  scanTsFileForHrefs(path.join(DATA, 'agencies', 'index.ts'), 'agency');
}

// Scan corporations
if (fs.existsSync(path.join(DATA, 'corporations', 'index.ts'))) {
  scanTsFileForHrefs(path.join(DATA, 'corporations', 'index.ts'), 'corporation');
}

// Scan organizations
if (fs.existsSync(path.join(DATA, 'organizations', 'index.ts'))) {
  scanTsFileForHrefs(path.join(DATA, 'organizations', 'index.ts'), 'organization');
}

// ── Report ───────────────────────────────────────────────────

console.log(`\n── Scan Results ─────────────────────────────`);
console.log(`  Total links checked: ${stats.checked}`);
console.log(`  Valid:               ${stats.valid}`);
console.log(`  Broken:              ${stats.broken}`);
console.log(`  By target type:      ${JSON.stringify(stats.byType, null, 2)}`);

if (broken.length > 0) {
  // Group by type
  const byType = {};
  for (const b of broken) {
    if (!byType[b.type]) byType[b.type] = [];
    byType[b.type].push(b);
  }

  console.log(`\n── Broken Links (${broken.length} total) ──────────────────\n`);

  for (const [type, items] of Object.entries(byType)) {
    console.log(`\n  ▸ ${type.toUpperCase()} (${items.length} broken)\n`);
    // Deduplicate by href
    const seen = new Set();
    const unique = items.filter(i => {
      if (seen.has(i.href)) return false;
      seen.add(i.href);
      return true;
    });
    for (const item of unique.slice(0, 50)) {
      console.log(`    ${item.file}:${item.line}  →  ${item.href}`);
    }
    if (unique.length > 50) {
      console.log(`    ... and ${unique.length - 50} more`);
    }
  }

  // Generate fix suggestions
  console.log(`\n── Fix Suggestions ────────────────────────────\n`);

  // Find broken individual hrefs that could be typos
  const brokenIndividuals = broken.filter(b => b.type === 'individual');
  if (brokenIndividuals.length > 0) {
    const slugArr = [...individualSlugs];
    const uniqueBroken = [...new Set(brokenIndividuals.map(b => b.reason))];
    let fixCount = 0;
    for (const slug of uniqueBroken.slice(0, 20)) {
      // Simple Levenshtein-like check: find slugs that differ by <=2 chars
      const candidates = slugArr.filter(s => {
        if (Math.abs(s.length - slug.length) > 2) return false;
        let diff = 0;
        for (let i = 0; i < Math.max(s.length, slug.length); i++) {
          if (s[i] !== slug[i]) diff++;
          if (diff > 2) return false;
        }
        return true;
      });
      if (candidates.length > 0 && candidates.length <= 3) {
        console.log(`    "${slug}" → did you mean: ${candidates.join(', ')}?`);
        fixCount++;
      }
    }
    if (fixCount === 0) {
      console.log(`    No close matches found for broken individual links.`);
      console.log(`    These likely need new profile entries created.`);
    }
  }

  // Find broken investigation slugs
  const brokenInvestigations = broken.filter(b => b.type === 'investigation');
  if (brokenInvestigations.length > 0) {
    const uniqueSlugs = [...new Set(brokenInvestigations.map(b => b.reason))];
    console.log(`\n    ${uniqueSlugs.length} investigation slugs need pages or data entries:`);
    for (const slug of uniqueSlugs.slice(0, 30)) {
      console.log(`      - ${slug}`);
    }
  }
} else {
  console.log(`\n  ✓ All internal links are valid!\n`);
}

console.log(`\n═══════════════════════════════════════════════\n`);
