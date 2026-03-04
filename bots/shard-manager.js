// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — SHARD MANAGER
//  Splits the monolithic data into per-letter shard files
//  Enables concurrent writes without corruption
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const config = require('./config');
const logger = require('./logger').child('SHARDS');

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ALL_SHARDS = [...LETTERS, 'misc'];

class ShardManager {
  constructor() {
    this.shardDir = path.join(config.paths.root, 'src', 'data', 'individuals');
    this._locks = new Map(); // per-shard async locks
  }

  // ── Shard Resolution ───────────────────────────────────────────

  /**
   * Get the shard letter for a slug (a-z or 'misc')
   */
  getShardLetter(slug) {
    const first = (slug || '')[0]?.toLowerCase();
    if (first && first >= 'a' && first <= 'z') return first;
    return 'misc';
  }

  /**
   * Get the file path for a shard
   */
  getShardPath(letter) {
    return path.join(this.shardDir, `${letter}.ts`);
  }

  /**
   * Get the shard path for a specific slug
   */
  getShardPathForSlug(slug) {
    return this.getShardPath(this.getShardLetter(slug));
  }

  // ── Read Operations ────────────────────────────────────────────

  /**
   * Check if sharding is active (shard directory + index.ts exist)
   */
  isActive() {
    return fs.existsSync(path.join(this.shardDir, 'index.ts'));
  }

  /**
   * Read all shard files — returns Map<letter, fileContent>
   */
  readAllShards() {
    const shards = new Map();
    for (const letter of ALL_SHARDS) {
      const p = this.getShardPath(letter);
      if (fs.existsSync(p)) {
        shards.set(letter, fs.readFileSync(p, 'utf8'));
      }
    }
    return shards;
  }

  /**
   * Read a single shard file, returns content or null
   */
  readShard(letter) {
    const p = this.getShardPath(letter);
    try { return fs.readFileSync(p, 'utf8'); } catch (_) { return null; }
  }

  /**
   * Get concatenated content of all shards (for scanner compatibility)
   */
  getCombinedContent() {
    let combined = '';
    const shards = this.readAllShards();
    for (const [, content] of shards) {
      combined += content + '\n';
    }
    return combined;
  }

  /**
   * Extract all individual slugs from all shards
   */
  extractAllSlugs() {
    const slugs = [];
    const shards = this.readAllShards();
    for (const [, content] of shards) {
      const regex = /^\s*'([a-z0-9-]+)'\s*:\s*\{/gm;
      let match;
      while ((match = regex.exec(content)) !== null) {
        slugs.push(match[1]);
      }
    }
    return slugs;
  }

  // ── Write Operations ───────────────────────────────────────────

  /**
   * Write content to a shard file atomically
   */
  writeShard(letter, content) {
    const filePath = this.getShardPath(letter);
    const tmpPath = filePath + '.tmp.' + crypto.randomBytes(4).toString('hex');
    try {
      fs.writeFileSync(tmpPath, content, 'utf8');
      let lastErr;
      for (let attempt = 0; attempt < 5; attempt++) {
        try {
          fs.renameSync(tmpPath, filePath);
          return true;
        } catch (e) {
          lastErr = e;
          if (e.code === 'EPERM' || e.code === 'EBUSY') {
            const waitMs = 200 * (attempt + 1);
            const start = Date.now();
            while (Date.now() - start < waitMs) { /* busy wait */ }
          } else { throw e; }
        }
      }
      try { fs.unlinkSync(tmpPath); } catch (_) {}
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    } catch (e) {
      try { fs.unlinkSync(tmpPath); } catch (_) {}
      throw e;
    }
  }

  /**
   * Backup a shard file before modification
   */
  backupShard(letter) {
    const filePath = this.getShardPath(letter);
    if (!fs.existsSync(filePath)) return null;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(config.paths.backups, `shard-${letter}.${timestamp}.bak`);
    fs.copyFileSync(filePath, backupPath);
    return backupPath;
  }

  // ── Per-Shard Locking ──────────────────────────────────────────

  /**
   * Acquire a per-shard lock (async spin-lock)
   * Multiple shards can be written simultaneously
   */
  async acquireLock(letter) {
    while (this._locks.get(letter)) {
      await new Promise(r => setTimeout(r, 20));
    }
    this._locks.set(letter, true);
  }

  releaseLock(letter) {
    this._locks.delete(letter);
  }

  // ── Shard File Generation ──────────────────────────────────────

  /**
   * Create an empty shard file for a given letter
   */
  createEmptyShard(letter) {
    const label = letter === 'misc' ? 'MISC' : letter.toUpperCase();
    const content = `// AUTO-GENERATED — Shard [${label}] managed by ArkHive Swarm Intelligence
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
};

export default profiles;
`;
    this.writeShard(letter, content);
  }

  /**
   * Create index.ts that re-exports all shards merged
   */
  createIndexFile() {
    // Find which shard files actually exist
    const existingLetters = ALL_SHARDS.filter(l => fs.existsSync(this.getShardPath(l)));

    const imports = existingLetters.map(l => {
      const varName = l === 'misc' ? 'misc' : `shard_${l}`;
      return `import ${varName} from './${l}';`;
    }).join('\n');

    const spreads = existingLetters.map(l => {
      const varName = l === 'misc' ? 'misc' : `shard_${l}`;
      return `  ...${varName},`;
    }).join('\n');

    const content = `// AUTO-GENERATED by ArkHive Swarm Intelligence — DO NOT EDIT MANUALLY
import type { IndividualProfile } from './types';
${imports}

const individualData: Record<string, IndividualProfile> = {
${spreads}
};

export default individualData;
export type { IndividualProfile };
`;
    const indexPath = path.join(this.shardDir, 'index.ts');
    fs.writeFileSync(indexPath, content, 'utf8');
    return indexPath;
  }

  /**
   * Ensure the shard directory exists
   */
  ensureDir() {
    if (!fs.existsSync(this.shardDir)) {
      fs.mkdirSync(this.shardDir, { recursive: true });
    }
  }

  /**
   * Get list of all shard letters (for iteration)
   */
  getAllShardLetters() {
    return ALL_SHARDS;
  }
}

module.exports = new ShardManager();
module.exports.ShardManager = ShardManager;
module.exports.ALL_SHARDS = ALL_SHARDS;
