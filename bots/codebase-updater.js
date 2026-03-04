// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — CODEBASE UPDATER
//  Keeps ALL hardcoded stats, counts, and listings in sync with reality
//  Runs after every injection cycle to ensure the website reflects truth
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('./logger').child('UPDATER');
const shardManager = require('./shard-manager');

const ROOT = config.paths.root;

class CodebaseUpdater {
  constructor() {
    this.stats = {
      lastUpdate: null,
      totalUpdates: 0,
      filesModified: [],
    };
  }

  // ══════════════════════════════════════════════════════════════
  //  MAIN: Run all updaters
  // ══════════════════════════════════════════════════════════════

  /**
   * Run all codebase updates. Call this after every injection flush.
   * Returns { updated: number, errors: number }
   */
  async updateAll() {
    const startTime = Date.now();
    const results = { updated: 0, errors: 0, details: [] };

    logger.info('Running full codebase update...');

    // 1. Count real data
    const counts = this._gatherCounts();
    logger.info(`Real counts: ${counts.individuals} individuals, ${counts.agencies} agencies, ${counts.corporations} corps, ${counts.organizations} orgs, ${counts.investigations} investigations`);

    // 2. Update homepage stats
    try {
      if (this._updateHomepageStats(counts)) {
        results.updated++;
        results.details.push('homepage stats');
      }
    } catch (e) {
      results.errors++;
      logger.error(`Homepage stats update failed: ${e.message}`);
    }

    // 3. Update entities hub counts
    try {
      if (this._updateEntitiesHub(counts)) {
        results.updated++;
        results.details.push('entities hub');
      }
    } catch (e) {
      results.errors++;
      logger.error(`Entities hub update failed: ${e.message}`);
    }

    // 4. Update API stats route
    try {
      if (this._updateApiStats(counts)) {
        results.updated++;
        results.details.push('API stats');
      }
    } catch (e) {
      results.errors++;
      logger.error(`API stats update failed: ${e.message}`);
    }

    // 5. Update notifications page
    try {
      if (this._updateNotifications(counts)) {
        results.updated++;
        results.details.push('notifications');
      }
    } catch (e) {
      results.errors++;
      logger.error(`Notifications update failed: ${e.message}`);
    }

    // 6. Auto-commit if anything changed
    if (results.updated > 0) {
      try {
        await this._autoCommit(counts, results);
        results.details.push('git commit');
      } catch (e) {
        logger.warn(`Auto-commit failed (non-fatal): ${e.message}`);
      }
    }

    const elapsed = Date.now() - startTime;
    this.stats.lastUpdate = new Date().toISOString();
    this.stats.totalUpdates++;
    this.stats.filesModified = results.details;

    if (results.updated > 0) {
      logger.info(`Codebase update complete in ${elapsed}ms: ${results.updated} files updated (${results.details.join(', ')})`);
    } else {
      logger.debug(`Codebase update: nothing to change (${elapsed}ms)`);
    }

    return results;
  }

  // ══════════════════════════════════════════════════════════════
  //  DATA GATHERING
  // ══════════════════════════════════════════════════════════════

  /**
   * Count all real entities/investigations across the codebase
   */
  _gatherCounts() {
    const counts = {
      individuals: 0,
      agencies: 0,
      corporations: 0,
      organizations: 0,
      investigations: 0,
      totalEntities: 0,
    };

    // Individuals — from shards
    if (shardManager.isActive()) {
      counts.individuals = shardManager.extractAllSlugs().length;
    } else {
      // Fallback: parse monolithic file
      const content = this._readSafe(config.paths.individuals);
      if (content) {
        counts.individuals = (content.match(/^\s*'[a-z0-9-]+'\s*:\s*\{/gm) || []).length;
      }
    }

    // Agencies
    const agencyContent = this._readSafe(path.join(ROOT, 'src', 'app', 'entities', 'agencies', 'page.tsx'));
    if (agencyContent) {
      counts.agencies = (agencyContent.match(/slug:/g) || []).length;
    }

    // Corporations
    const corpContent = this._readSafe(path.join(ROOT, 'src', 'app', 'entities', 'corporations', 'page.tsx'));
    if (corpContent) {
      counts.corporations = (corpContent.match(/slug:/g) || []).length;
    }

    // Organizations
    const orgContent = this._readSafe(path.join(ROOT, 'src', 'app', 'entities', 'organizations', 'page.tsx'));
    if (orgContent) {
      counts.organizations = (orgContent.match(/slug:/g) || []).length;
    }

    // Investigations — detail pages
    const invContent = this._readSafe(path.join(ROOT, 'src', 'app', 'investigations', '[slug]', 'page.tsx'));
    if (invContent) {
      counts.investigations = (invContent.match(/'[a-z0-9-]+'\s*:\s*\{/g) || []).length;
    }

    counts.totalEntities = counts.individuals + counts.agencies + counts.corporations + counts.organizations;

    return counts;
  }

  // ══════════════════════════════════════════════════════════════
  //  FILE UPDATERS
  // ══════════════════════════════════════════════════════════════

  /**
   * Update homepage stats object in src/app/page.tsx
   * Returns true if file was modified
   */
  _updateHomepageStats(counts) {
    const filePath = path.join(ROOT, 'src', 'app', 'page.tsx');
    let content = this._readSafe(filePath);
    if (!content) return false;

    // Match the stats block: totalInvestigations: NNN,
    // The homepage may have various comment formats above the const
    const newStats = `// Real statistics from the archive — auto-updated by ArkHive Swarm Intelligence
const stats = {
 totalInvestigations: ${counts.investigations},
 entitiesTracked: ${counts.totalEntities},`;

    const statsRegex = /\/\/\s*Real statistics[^\r\n]*\r?\nconst stats = \{\r?\n\s*totalInvestigations:\s*\d+[^\r\n]*\r?\n\s*entitiesTracked:\s*\d+[^\r\n]*/;
    const match = content.match(statsRegex);
    if (!match) {
      logger.warn('Could not find stats block in homepage');
      return false;
    }

    const updated = content.replace(statsRegex, newStats);
    if (updated === content) return false; // No change needed

    fs.writeFileSync(filePath, updated, 'utf8');
    logger.info(`Updated homepage: ${counts.investigations} investigations, ${counts.totalEntities} entities`);
    return true;
  }

  /**
   * Update entities hub page counts in src/app/entities/page.tsx
   */
  _updateEntitiesHub(counts) {
    const filePath = path.join(ROOT, 'src', 'app', 'entities', 'page.tsx');
    let content = this._readSafe(filePath);
    if (!content) return false;

    let modified = false;

    // Update each count individually using regex
    const replacements = [
      { type: 'agencies', count: counts.agencies },
      { type: 'corporations', count: counts.corporations },
      { type: 'individuals', count: counts.individuals },
      { type: 'organizations', count: counts.organizations },
    ];

    for (const { type, count } of replacements) {
      // Match the pattern: type:"agencies", ... count: NNN,
      // The count line appears a few lines after the type line
      const typeRegex = new RegExp(
        `(type:\\s*"${type}"[\\s\\S]*?count:\\s*)\\d+`,
      );
      const match = content.match(typeRegex);
      if (match) {
        const oldCount = match[0].match(/count:\s*(\d+)/)?.[1];
        if (oldCount && parseInt(oldCount) !== count) {
          content = content.replace(typeRegex, `$1${count}`);
          modified = true;
          logger.info(`Updated entities hub: ${type} count ${oldCount} → ${count}`);
        }
      }
    }

    if (!modified) return false;
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  /**
   * Update API stats route in src/app/api/stats/route.ts
   */
  _updateApiStats(counts) {
    const filePath = path.join(ROOT, 'src', 'app', 'api', 'stats', 'route.ts');
    let content = this._readSafe(filePath);
    if (!content) return false;

    let modified = false;

    // Update totalInvestigations
    const invRegex = /(totalInvestigations:\s*)\d+/;
    if (content.match(invRegex)) {
      const old = content.match(invRegex)[0];
      const replacement = `totalInvestigations: ${counts.investigations}`;
      if (old !== replacement) {
        content = content.replace(invRegex, `$1${counts.investigations}`);
        modified = true;
      }
    }

    // Update totalEntities
    const entRegex = /(totalEntities:\s*)\d+/;
    if (content.match(entRegex)) {
      const old = content.match(entRegex)[0];
      const replacement = `totalEntities: ${counts.totalEntities}`;
      if (old !== replacement) {
        content = content.replace(entRegex, `$1${counts.totalEntities}`);
        modified = true;
      }
    }

    if (!modified) return false;
    fs.writeFileSync(filePath, content, 'utf8');
    logger.info(`Updated API stats route`);
    return true;
  }

  /**
   * Update the notifications page stats message
   */
  _updateNotifications(counts) {
    const filePath = path.join(ROOT, 'src', 'app', 'notifications', 'page.tsx');
    let content = this._readSafe(filePath);
    if (!content) return false;

    // Match the platform statistics notification message
    const statsMsg = `ArkHive now tracking ${counts.investigations} investigations, ${counts.totalEntities.toLocaleString()} entities, and 201 archived documents.`;
    const msgRegex = /ArkHive now tracking \d+ investigations, [\d,]+ entities, and \d+ archived documents\./;

    const match = content.match(msgRegex);
    if (!match) return false;

    if (match[0] === statsMsg) return false; // Already up to date

    content = content.replace(msgRegex, statsMsg);
    fs.writeFileSync(filePath, content, 'utf8');
    logger.info(`Updated notifications page stats`);
    return true;
  }

  // ══════════════════════════════════════════════════════════════
  //  AUTO GIT COMMIT
  // ══════════════════════════════════════════════════════════════

  /**
   * Auto-commit changes after injection + update cycle
   */
  async _autoCommit(counts, results) {
    const { execSync } = require('child_process');
    const opts = { cwd: ROOT, stdio: 'pipe', timeout: 30000 };

    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', opts).toString().trim();
      if (!status) return;

      // Stage data files and updated source files
      execSync('git add src/data/individuals/ src/app/page.tsx src/app/entities/page.tsx src/app/api/stats/route.ts src/app/notifications/page.tsx', opts);

      // Check if anything was actually staged
      const staged = execSync('git diff --cached --stat', opts).toString().trim();
      if (!staged) return;

      const msg = `bot: auto-update (${counts.individuals} individuals, ${counts.totalEntities} entities, ${counts.investigations} investigations)`;
      execSync(`git commit -m "${msg}"`, opts);
      logger.info(`Auto-committed: ${msg}`);
    } catch (e) {
      // Non-fatal — don't crash the engine over a git issue
      logger.debug(`Git commit skipped: ${e.message}`);
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  UTILITIES
  // ══════════════════════════════════════════════════════════════

  _readSafe(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (_) {
      return null;
    }
  }

  getStats() {
    return { ...this.stats };
  }
}

module.exports = new CodebaseUpdater();
module.exports.CodebaseUpdater = CodebaseUpdater;
