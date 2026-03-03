// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — STRUCTURED LOGGER
//  Every action leaves a trace in the blood
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');

// ── ANSI Color Codes ─────────────────────────────────────────────
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  bloodRed: '\x1b[38;2;214;69;69m',
  darkRed: '\x1b[38;2;107;21;21m',
  crimson: '\x1b[38;2;180;40;40m',
  amber: '\x1b[38;2;255;191;0m',
  electric: '\x1b[38;2;0;255;136m',
  violet: '\x1b[38;2;138;43;226m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
};

// ── Log Level Configuration ──────────────────────────────────────
const LEVELS = {
  debug:   { priority: 0, color: C.gray,     icon: '·',  label: 'DEBUG'  },
  info:    { priority: 1, color: C.cyan,     icon: '◆',  label: 'INFO'   },
  warn:    { priority: 2, color: C.amber,    icon: '▲',  label: 'WARN'   },
  error:   { priority: 3, color: C.red,      icon: '✖',  label: 'ERROR'  },
  fatal:   { priority: 4, color: C.bgRed,    icon: '☠',  label: 'FATAL'  },
  // Custom swarm levels
  swarm:   { priority: 1, color: C.bloodRed, icon: '⬡',  label: 'SWARM'  },
  ai:      { priority: 1, color: C.violet,   icon: '◈',  label: 'AI'     },
  worker:  { priority: 1, color: C.electric,  icon: '⚙',  label: 'WORKER' },
  inject:  { priority: 1, color: C.blue,     icon: '◉',  label: 'INJECT' },
  scan:    { priority: 1, color: C.magenta,  icon: '◎',  label: 'SCAN'   },
  quality: { priority: 1, color: C.green,    icon: '✓',  label: 'QUALITY'},
  spawn:   { priority: 1, color: C.crimson,  icon: '◇',  label: 'SPAWN'  },
};

// ── Logger Class ─────────────────────────────────────────────────
class Logger {
  constructor(component = 'DAEMON') {
    this.component = component;
    this.logDir = config.paths.logs;
    this.minPriority = LEVELS[config.logging.level]?.priority ?? 1;
    this.sessionStart = Date.now();
    this.messageCount = 0;
    this._currentLogDate = null;
    this._logStream = null;
  }

  // Get or create file stream for today's log
  _getLogStream() {
    const today = new Date().toISOString().split('T')[0];
    if (this._currentLogDate !== today) {
      if (this._logStream) {
        try { this._logStream.end(); } catch (_) {}
      }
      this._currentLogDate = today;
      const logFile = path.join(this.logDir, `swarm-${today}.log`);
      this._logStream = fs.createWriteStream(logFile, { flags: 'a' });
    }
    return this._logStream;
  }

  _timestamp() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').replace('Z', '');
  }

  _elapsed() {
    const ms = Date.now() - this.sessionStart;
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    if (h > 0) return `${h}h${m % 60}m`;
    if (m > 0) return `${m}m${s % 60}s`;
    return `${s}s`;
  }

  _formatPlain(level, message, data) {
    const lbl = LEVELS[level]?.label || level.toUpperCase();
    const ts = this._timestamp();
    let line = `[${ts}] [${lbl.padEnd(7)}] [${this.component}] ${message}`;
    if (data !== undefined && data !== null) {
      line += ' ' + (typeof data === 'string' ? data : JSON.stringify(data));
    }
    return line;
  }

  _formatColored(level, message, data) {
    const cfg = LEVELS[level] || LEVELS.info;
    const ts = this._timestamp();
    const elapsed = this._elapsed();

    let out = '';
    out += `${C.dim}${ts}${C.reset} `;
    out += `${cfg.color}${cfg.icon} ${cfg.label.padEnd(7)}${C.reset} `;
    out += `${C.bold}${C.white}[${this.component}]${C.reset} `;
    out += message;
    if (data !== undefined && data !== null) {
      const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
      out += ` ${C.dim}${dataStr}${C.reset}`;
    }
    out += ` ${C.dim}+${elapsed}${C.reset}`;
    return out;
  }

  _write(level, message, data) {
    const cfg = LEVELS[level] || LEVELS.info;
    // Skip if below minimum priority (but always show custom swarm levels)
    if (cfg.priority < this.minPriority && cfg.priority < 2) return;

    this.messageCount++;

    // Console output
    if (config.logging.colorize) {
      console.log(this._formatColored(level, message, data));
    } else {
      console.log(this._formatPlain(level, message, data));
    }

    // File output
    if (config.logging.logToFile) {
      try {
        const stream = this._getLogStream();
        stream.write(this._formatPlain(level, message, data) + '\n');
      } catch (_) {
        // Silent fail on log write errors
      }
    }
  }

  // ── Standard Levels ──────────────────────────────────────────
  debug(msg, data)   { this._write('debug', msg, data); }
  info(msg, data)    { this._write('info', msg, data); }
  warn(msg, data)    { this._write('warn', msg, data); }
  error(msg, data)   { this._write('error', msg, data); }
  fatal(msg, data)   { this._write('fatal', msg, data); }

  // ── Swarm Levels ─────────────────────────────────────────────
  swarm(msg, data)   { this._write('swarm', msg, data); }
  ai(msg, data)      { this._write('ai', msg, data); }
  worker(msg, data)  { this._write('worker', msg, data); }
  inject(msg, data)  { this._write('inject', msg, data); }
  scan(msg, data)    { this._write('scan', msg, data); }
  quality(msg, data) { this._write('quality', msg, data); }
  spawn(msg, data)   { this._write('spawn', msg, data); }

  // ── Create child logger for a component ──────────────────────
  child(component) {
    const child = new Logger(component);
    child.sessionStart = this.sessionStart;
    return child;
  }

  // ── Display Banners ──────────────────────────────────────────
  banner(text) {
    const line = '═'.repeat(64);
    console.log('');
    console.log(`${C.bloodRed}${line}${C.reset}`);
    console.log(`${C.bloodRed}  ${C.bold}${text}${C.reset}`);
    console.log(`${C.bloodRed}${line}${C.reset}`);
    console.log('');
  }

  divider(char = '─', length = 50) {
    console.log(`${C.dim}${char.repeat(length)}${C.reset}`);
  }

  table(data) {
    if (!data || Object.keys(data).length === 0) return;
    const maxKey = Math.max(...Object.keys(data).map(k => k.length));
    for (const [key, value] of Object.entries(data)) {
      const label = key.padEnd(maxKey + 2);
      console.log(`  ${C.dim}${label}${C.reset}${C.bold}${value}${C.reset}`);
    }
  }

  progress(current, total, label = '') {
    const pct = Math.round((current / total) * 100);
    const filled = Math.round(pct / 2.5);
    const empty = 40 - filled;
    const bar = `${C.bloodRed}${'█'.repeat(filled)}${C.dim}${'░'.repeat(empty)}${C.reset}`;
    process.stdout.write(`\r  ${bar} ${C.bold}${pct}%${C.reset} ${label}  `);
    if (current >= total) console.log('');
  }

  // ── Cleanup ──────────────────────────────────────────────────
  close() {
    if (this._logStream) {
      try { this._logStream.end(); } catch (_) {}
    }
  }
}

// Export singleton + class
const defaultLogger = new Logger('DAEMON');
module.exports = defaultLogger;
module.exports.Logger = Logger;
