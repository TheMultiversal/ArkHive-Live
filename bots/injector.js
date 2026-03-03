// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — INJECTOR
//  Surgical insertion: slips new profiles into the living codebase
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('./logger').child('INJECTOR');
const utils = require('./utils');

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
   * Inject a single profile into the individuals page.tsx
   * Returns { success: boolean, message: string }
   */
  async injectIndividualProfile(slug, profile) {
    logger.inject(`Injecting profile: ${slug} (${profile.name})`);

    const filePath = config.paths.individuals;
    const content = utils.readFileSafe(filePath);
    if (!content) {
      return { success: false, message: 'Could not read individuals page' };
    }

    // Check if profile already exists
    const existingSlugs = utils.extractExistingIndividualSlugs(content);
    if (existingSlugs.includes(slug)) {
      logger.warn(`Profile ${slug} already exists — skipping injection`);
      return { success: false, message: 'Profile already exists' };
    }

    // Create backup before modifying
    if (config.generation.backupBeforeInject) {
      const backupPath = utils.backupFile(filePath);
      if (backupPath) {
        this.stats.totalBackups++;
        logger.inject(`Backup created: ${path.basename(backupPath)}`);
      }
    }

    // Generate the TypeScript literal
    const tsLiteral = utils.profileToTsLiteral(slug, profile);

    // Find the insertion point — right before the closing of individualData
    // We look for the last profile entry's closing `},` followed by `};` (end of object)
    // Or we insert before the generateStaticParams function
    const insertionResult = this._findInsertionPoint(content);
    if (!insertionResult.success) {
      return { success: false, message: insertionResult.message };
    }

    // Insert the new profile
    const newContent =
      content.substring(0, insertionResult.position) +
      '\n' + tsLiteral + '\n' +
      content.substring(insertionResult.position);

    // Write back atomically
    try {
      utils.writeFileAtomic(filePath, newContent);
      this.stats.totalInjected++;
      this.stats.lastInjection = new Date().toISOString();
      logger.inject(`✓ Successfully injected ${slug} (${profile.name})`);
      return { success: true, message: `Profile ${slug} injected successfully` };
    } catch (e) {
      this.stats.totalFailed++;
      logger.error(`Failed to write file after injection: ${e.message}`);
      return { success: false, message: `Write failed: ${e.message}` };
    }
  }

  /**
   * Inject multiple profiles in a single file write (batch injection)
   * More efficient than individual injections
   */
  async injectBatch(profiles) {
    if (!profiles || profiles.length === 0) return { success: true, injected: 0 };

    logger.inject(`Batch injecting ${profiles.length} profiles...`);

    const filePath = config.paths.individuals;
    let content = utils.readFileSafe(filePath);
    if (!content) {
      return { success: false, message: 'Could not read individuals page', injected: 0 };
    }

    // Create a single backup for the batch
    if (config.generation.backupBeforeInject) {
      const backupPath = utils.backupFile(filePath);
      if (backupPath) {
        this.stats.totalBackups++;
        logger.inject(`Batch backup created: ${path.basename(backupPath)}`);
      }
    }

    const existingSlugs = new Set(utils.extractExistingIndividualSlugs(content));
    const toInject = [];

    for (const { slug, profile } of profiles) {
      if (existingSlugs.has(slug)) {
        logger.warn(`Skipping ${slug} — already exists`);
        continue;
      }
      toInject.push({ slug, profile });
      existingSlugs.add(slug); // Prevent duplicates within batch
    }

    if (toInject.length === 0) {
      logger.inject('No new profiles to inject');
      return { success: true, injected: 0 };
    }

    // Generate all TypeScript literals
    const literals = toInject.map(({ slug, profile }) =>
      utils.profileToTsLiteral(slug, profile)
    ).join('\n');

    // Find insertion point
    const insertionResult = this._findInsertionPoint(content);
    if (!insertionResult.success) {
      return { success: false, message: insertionResult.message, injected: 0 };
    }

    // Insert all profiles at once
    const newContent =
      content.substring(0, insertionResult.position) +
      '\n' + literals + '\n' +
      content.substring(insertionResult.position);

    try {
      utils.writeFileAtomic(filePath, newContent);
      this.stats.totalInjected += toInject.length;
      this.stats.lastInjection = new Date().toISOString();

      logger.inject(`✓ Batch injected ${toInject.length} profiles`);
      for (const { slug, profile } of toInject) {
        logger.inject(`  + ${slug} (${profile.name})`);
      }

      return { success: true, injected: toInject.length };
    } catch (e) {
      this.stats.totalFailed += toInject.length;
      logger.error(`Batch write failed: ${e.message}`);
      return { success: false, message: `Write failed: ${e.message}`, injected: 0 };
    }
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
    const content = utils.readFileSafe(config.paths.individuals);
    const existingSlugs = content ? new Set(utils.extractExistingIndividualSlugs(content)) : new Set();

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

    // Fallback: search for `};\n` that ends the individualData object
    // by counting braces from the declaration
    const dataStart = content.indexOf('const individualData');
    if (dataStart === -1) {
      return { success: false, position: -1, message: 'Could not find individualData declaration' };
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
