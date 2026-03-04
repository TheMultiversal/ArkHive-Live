// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — INJECTOR
//  Surgical insertion: slips new profiles into the living codebase
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('./logger').child('INJECTOR');
const utils = require('./utils');
const shardManager = require('./shard-manager');

class Injector {
  constructor() {
    this.stats = {
      totalInjected: 0,
      totalFailed: 0,
      totalBackups: 0,
      lastInjection: null,
    };
  }

  /**
   * Inject a single profile into the correct shard file
   * Returns { success: boolean, message: string }
   */
  async injectIndividualProfile(slug, profile) {
    logger.inject(`Injecting profile: ${slug} (${profile.name})`);

    const letter = shardManager.getShardLetter(slug);

    try {
      await shardManager.acquireLock(letter);

      let content = shardManager.readShard(letter);
      if (!content) {
        shardManager.createEmptyShard(letter);
        content = shardManager.readShard(letter);
      }

      // Check if profile already exists
      const existingSlugs = utils.extractExistingIndividualSlugs(content);
      if (existingSlugs.includes(slug)) {
        logger.warn(`Profile ${slug} already exists in shard ${letter} — skipping`);
        return { success: false, message: 'Profile already exists' };
      }

      // Backup before modifying
      if (config.generation.backupBeforeInject) {
        shardManager.backupShard(letter);
        this.stats.totalBackups++;
      }

      // Generate the TypeScript literal and find insertion point
      const tsLiteral = utils.profileToTsLiteral(slug, profile);
      const insertionResult = this._findInsertionPoint(content);
      if (!insertionResult.success) {
        return { success: false, message: insertionResult.message };
      }

      // Insert the new profile
      const newContent =
        content.substring(0, insertionResult.position) +
        '\n' + tsLiteral + '\n' +
        content.substring(insertionResult.position);

      shardManager.writeShard(letter, newContent);
      this.stats.totalInjected++;
      this.stats.lastInjection = new Date().toISOString();
      logger.inject(`✓ Injected ${slug} (${profile.name}) [shard:${letter}]`);
      return { success: true, message: `Profile ${slug} injected into shard ${letter}` };
    } catch (e) {
      this.stats.totalFailed++;
      logger.error(`Injection failed for ${slug}: ${e.message}`);
      return { success: false, message: `Injection failed: ${e.message}` };
    } finally {
      shardManager.releaseLock(letter);
    }
  }

  /**
   * Inject multiple profiles across shard files (batch injection)
   * Groups by shard letter and processes each shard independently
   * Supports both new profiles (create) and replacing existing ones (enrich)
   */
  async injectBatch(profiles) {
    if (!profiles || profiles.length === 0) return { success: true, injected: 0 };

    logger.inject(`Batch injecting ${profiles.length} profiles...`);

    // Group profiles by shard letter
    const shardGroups = new Map(); // letter -> [{ slug, profile, action }]
    for (const item of profiles) {
      const letter = shardManager.getShardLetter(item.slug);
      if (!shardGroups.has(letter)) shardGroups.set(letter, []);
      shardGroups.get(letter).push(item);
    }

    let totalInjected = 0;
    let totalErrors = 0;

    // Process each shard independently (per-shard locking)
    for (const [letter, shardProfiles] of shardGroups) {
      try {
        await shardManager.acquireLock(letter);

        let content = shardManager.readShard(letter);
        if (!content) {
          shardManager.createEmptyShard(letter);
          content = shardManager.readShard(letter);
        }

        // Backup shard before modification
        if (config.generation.backupBeforeInject) {
          shardManager.backupShard(letter);
          this.stats.totalBackups++;
        }

        const existingSlugs = new Set(utils.extractExistingIndividualSlugs(content));
        const toInject = [];
        const toReplace = [];

        for (const { slug, profile, action } of shardProfiles) {
          if (existingSlugs.has(slug)) {
            if (action === 'enrich') {
              toReplace.push({ slug, profile });
            } else {
              logger.warn(`Skipping ${slug} — already exists in shard ${letter}`);
            }
            continue;
          }
          toInject.push({ slug, profile });
          existingSlugs.add(slug);
        }

        // Apply replacements for enriched profiles
        for (const { slug, profile } of toReplace) {
          const newLiteral = utils.profileToTsLiteral(slug, profile);
          const replaced = this._replaceProfileInContent(content, slug, newLiteral);
          if (replaced) {
            content = replaced;
            logger.inject(`  ~ ${slug} (enriched) [shard:${letter}]`);
          } else {
            logger.warn(`Could not replace profile for ${slug} in shard ${letter}`);
          }
        }

        // Insert new profiles
        if (toInject.length > 0) {
          const literals = toInject.map(({ slug, profile }) =>
            utils.profileToTsLiteral(slug, profile)
          ).join('\n');

          const insertionResult = this._findInsertionPoint(content);
          if (!insertionResult.success) {
            logger.error(`No insertion point in shard ${letter}: ${insertionResult.message}`);
            totalErrors += toInject.length;
            continue;
          }

          content =
            content.substring(0, insertionResult.position) +
            '\n' + literals + '\n' +
            content.substring(insertionResult.position);
        }

        const changed = toInject.length + toReplace.length;
        if (changed > 0) {
          shardManager.writeShard(letter, content);
          totalInjected += changed;
          for (const { slug, profile } of toInject) {
            logger.inject(`  + ${slug} (${profile.name}) [shard:${letter}]`);
          }
        }
      } catch (e) {
        logger.error(`Shard ${letter} injection failed: ${e.message}`);
        totalErrors += shardProfiles.length;
      } finally {
        shardManager.releaseLock(letter);
      }
    }

    this.stats.totalInjected += totalInjected;
    this.stats.totalFailed += totalErrors;
    if (totalInjected > 0) this.stats.lastInjection = new Date().toISOString();

    logger.inject(`✓ Batch complete: ${totalInjected} injected, ${totalErrors} errors`);
    return { success: totalErrors === 0, injected: totalInjected };
  }

  /**
   * Replace an existing profile block in content with a new one
   * Returns the updated content string, or null if replacement failed
   */
  _replaceProfileInContent(content, slug, newLiteral) {
    // Find the start: ' 'slug': {' or '  'slug': {'
    // Support both 1-space and 2-space indentation
    let startIdx = content.indexOf(` '${slug}': {`);
    if (startIdx === -1) startIdx = content.indexOf(`  '${slug}': {`);
    if (startIdx === -1) return null;

    // Find the matching closing brace from `{`
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

    // Check for trailing comma
    let trailingEnd = endIdx;
    if (content[trailingEnd] === ',') trailingEnd++;

    // Replace: from the start of the profile line to after the closing brace+comma
    // Find the start of the line (go back to previous newline)
    let lineStart = startIdx;
    while (lineStart > 0 && content[lineStart - 1] !== '\n') lineStart--;

    return content.substring(0, lineStart) + newLiteral + '\n' + content.substring(trailingEnd);
  }

  /**
   * Save generated profiles to JSON files in the generated/ directory
   * This provides a persistent record even if injection fails
   */
  saveToGenerated(slug, profile) {
    const outPath = path.join(config.paths.generated, `${slug}.json`);
    try {
      fs.writeFileSync(outPath, JSON.stringify(profile, null, 2));
      return outPath;
    } catch (e) {
      logger.warn(`Could not save generated profile for ${slug}: ${e.message}`);
      return null;
    }
  }

  /**
   * Load a previously generated profile from disk
   */
  loadGenerated(slug) {
    const filePath = path.join(config.paths.generated, `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      return null;
    }
  }

  /**
   * List all generated but not-yet-injected profiles
   */
  listPendingGenerated() {
    const generatedDir = config.paths.generated;
    if (!fs.existsSync(generatedDir)) return [];

    const files = fs.readdirSync(generatedDir).filter(f => f.endsWith('.json'));
    const existingSlugs = new Set(shardManager.extractAllSlugs());

    return files
      .map(f => f.replace('.json', ''))
      .filter(slug => !existingSlugs.has(slug));
  }

  // ── Internal Methods ───────────────────────────────────────────

  /**
   * Find the correct insertion point in the individuals page.tsx
   * Returns { success: boolean, position: number, message: string }
   */
  _findInsertionPoint(content) {
    // Strategy 1: Find the line with generateStaticParams or the end of the data object
    // The data object ends with `};` and then the page component follows

    // Look for the pattern where the last profile entry ends and the data object closes
    // Pattern: `  },\n};` or `  },\n\n` followed by function/export
    const patterns = [
      // Match end of data before generateStaticParams
      /(\n\s*\};\s*\n+(?:\/\/[^\n]*\n)*\s*(?:export\s+)?(?:async\s+)?function\s+generateStaticParams)/,
      // Match end of data before export default
      /(\n\s*\};\s*\n+(?:\/\/[^\n]*\n)*\s*(?:export\s+default|const\s+\w+Page))/,
      // Match the very last `},` before `};` (end of Record object)
      /(\n\s*\},\s*\n\};)/,
    ];

    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match) {
        // Insert just before this match
        const position = content.indexOf(match[1]);
        if (position !== -1) {
          return { success: true, position, message: 'Found insertion point' };
        }
      }
    }

    // Fallback: search for the data object declaration
    // Support both monolithic format (const individualData) and shard format (const profiles)
    let dataStart = content.indexOf('const individualData');
    if (dataStart === -1) dataStart = content.indexOf('const profiles');
    if (dataStart === -1) {
      return { success: false, position: -1, message: 'Could not find data object (individualData or profiles)' };
    }

    // Find the opening brace of the Record
    const openBrace = content.indexOf('{', content.indexOf('{', dataStart) + 1);
    if (openBrace === -1) {
      return { success: false, position: -1, message: 'Could not find data object opening brace' };
    }

    // Walk through and find matching close brace
    let depth = 1;
    let i = openBrace + 1;
    while (i < content.length && depth > 0) {
      if (content[i] === '{') depth++;
      else if (content[i] === '}') depth--;
      if (depth > 0) i++;
    }

    if (depth !== 0) {
      return { success: false, position: -1, message: 'Unbalanced braces in data object' };
    }

    // i is at the closing `}` of the data object
    // Find the last `},` before it (end of last profile)
    const lastProfileEnd = content.lastIndexOf('},', i);
    if (lastProfileEnd === -1) {
      return { success: false, position: -1, message: 'Could not find last profile entry' };
    }

    // Insert after the last profile's closing `},`
    return { success: true, position: lastProfileEnd + 2, message: 'Found insertion point via brace matching' };
  }

  /**
   * Get injector stats
   */
  getStats() {
    return { ...this.stats };
  }
}

module.exports = new Injector();
module.exports.Injector = Injector;
