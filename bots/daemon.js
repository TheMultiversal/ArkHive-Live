#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  ▄▀█ █▀█ █▄▀ █░█ █ █░█ █▀▀
//  █▀█ █▀▄ █░█ █▀█ █ ▀▄▀ ██▄
//
//  SWARM INTELLIGENCE DAEMON
//  The beating heart of the hive mind
//
//  Usage:
//    node bots/daemon.js              Start continuous operation
//    node bots/daemon.js --status     Check swarm status
//    node bots/daemon.js --stop       Graceful shutdown
//    node bots/daemon.js --once       Single scan cycle then exit
//    node bots/daemon.js --scan       Scan only (no generation)
//    node bots/daemon.js --inject     Inject pending generated profiles
//    node bots/daemon.js --reset      Clear queue and state
//    node bots/daemon.js --dashboard  Open dashboard only
//
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('./logger');
const utils = require('./utils');
const swarm = require('./swarm-engine');
const scanner = require('./scanner');
const injector = require('./injector');
const monitor = require('./monitor');
const botFactory = require('./bot-factory');

// ══════════════════════════════════════════════════════════════════
//  ASCII ART BANNER
// ══════════════════════════════════════════════════════════════════

const BANNER = `
\x1b[38;2;214;69;69m
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║     ▄▀█ █▀█ █▄▀ █░█ █ █░█ █▀▀                            ║
    ║     █▀█ █▀▄ █░█ █▀█ █ ▀▄▀ ██▄                            ║
    ║                                                           ║
    ║     ░██████╗░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░░███╗    ║
    ║     ██╔════╝░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░████║    ║
    ║     ╚█████╗░░╚██╗████╗██╔╝███████║██████╔╝██╔████╔██║    ║
    ║     ░╚═══██╗░░████╔═████║░██╔══██║██╔══██╗██║╚██╔╝██║    ║
    ║     ██████╔╝░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚═╝░██║    ║
    ║     ╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░╚═╝    ║
    ║                                                           ║
    ║     INTELLIGENCE DAEMON v2.0                              ║
    ║     Self-Replicating Investigative Swarm                  ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
\x1b[0m`;

// ══════════════════════════════════════════════════════════════════
//  CLI ARGUMENT PARSING
// ══════════════════════════════════════════════════════════════════

const args = process.argv.slice(2);
const flags = {
  status: args.includes('--status'),
  stop: args.includes('--stop'),
  once: args.includes('--once'),
  scan: args.includes('--scan'),
  inject: args.includes('--inject'),
  reset: args.includes('--reset'),
  dashboard: args.includes('--dashboard'),
  help: args.includes('--help') || args.includes('-h'),
  debug: args.includes('--debug'),
  templateOnly: args.includes('--template-only'),
  aiOnly: args.includes('--ai-only'),
  fast: args.includes('--fast'),
};

// ══════════════════════════════════════════════════════════════════
//  COMMAND HANDLERS
// ══════════════════════════════════════════════════════════════════

/**
 * Show help text
 */
function showHelp() {
  console.log(BANNER);
  console.log(`
  COMMANDS:
    node bots/daemon.js              Start the swarm daemon (continuous)
    node bots/daemon.js --once       Run a single scan+generate cycle
    node bots/daemon.js --scan       Scan for missing profiles only
    node bots/daemon.js --inject     Inject pending generated profiles
    node bots/daemon.js --status     Show current swarm status
    node bots/daemon.js --stop       Send stop signal to running daemon
    node bots/daemon.js --reset      Clear queue, state, and generated files
    node bots/daemon.js --dashboard  Start dashboard server only

  OPTIONS:
    --template-only    Use template generation (no AI/Ollama)
    --ai-only          Use AI generation only (no template fallback)
    --fast             Maximum speed: template-only, 12 workers, lower threshold
    --debug            Enable debug-level logging
    -h, --help         Show this help

  DASHBOARD:
    http://localhost:${config.monitor.httpPort}    Real-time web dashboard

  REQUIREMENTS:
    - Ollama (optional): Install from https://ollama.ai
      Run: ollama pull llama3:8b
      The swarm will auto-detect Ollama and use it for AI generation.
      Without Ollama, template-based generation is used as fallback.
`);
}

/**
 * Show status of running daemon
 */
function showStatus() {
  // Try to load saved state
  const state = utils.loadState();
  const queue = utils.loadQueue();

  if (!state.startedAt) {
    console.log('\n  No daemon state found. The swarm may not be running.\n');

    // Check PID file
    if (fs.existsSync(config.paths.pid)) {
      const pid = parseInt(fs.readFileSync(config.paths.pid, 'utf8').trim());
      console.log(`  PID file exists: ${pid}`);
      try {
        process.kill(pid, 0); // Check if process exists
        console.log('  Process is running.');
      } catch (e) {
        console.log('  Process is NOT running (stale PID file).');
        fs.unlinkSync(config.paths.pid);
      }
    }
    return;
  }

  console.log(BANNER);
  logger.divider('═', 60);

  const uptime = state.startedAt ? utils.formatDuration(Date.now() - new Date(state.startedAt).getTime()) : '?';

  logger.table({
    'Status': 'RUNNING',
    'Started': state.startedAt,
    'Uptime': uptime,
    'Cycles': state.cycleCount || 0,
    'Last Scan': state.lastScan || 'never',
  });

  logger.divider();
  console.log('  QUEUE:');
  logger.table({
    'Pending': queue.tasks?.filter(t => t.status === 'pending').length || 0,
    'Completed': queue.completed?.length || 0,
    'Failed': queue.failed?.length || 0,
  });

  logger.divider();
  console.log('  PERFORMANCE:');
  logger.table({
    'Profiles Generated': state.totalProfilesGenerated || 0,
    'Profiles Injected': state.totalProfilesInjected || 0,
    'Errors': state.totalErrors || 0,
    'Workers': state.activeWorkers || 0,
  });

  if (state.stats) {
    logger.divider();
    console.log('  WORKERS:');
    logger.table({
      'Total Spawned': state.stats.totalWorkersSpawned || 0,
      'Deaths': state.stats.totalWorkerDeaths || 0,
      'Restarts': state.stats.totalWorkerRestarts || 0,
      'Peak': state.stats.peakWorkers || 0,
    });
  }

  if (state.scanner) {
    logger.divider();
    console.log('  SCANNER:');
    logger.table({
      'Existing Profiles': state.scanner.totalExisting || 0,
      'Missing Profiles': state.scanner.totalMissing || 0,
      'Sparse Profiles': state.scanner.totalSparse || 0,
      'Orphan Profiles': state.scanner.totalOrphans || 0,
    });
  }

  // Show generated but not injected
  const pending = injector.listPendingGenerated();
  if (pending.length > 0) {
    logger.divider();
    console.log(`  PENDING INJECTION: ${pending.length} profiles`);
    pending.slice(0, 10).forEach(slug => {
      console.log(`    - ${slug} (${utils.slugToName(slug)})`);
    });
    if (pending.length > 10) {
      console.log(`    ... and ${pending.length - 10} more`);
    }
  }

  logger.divider('═', 60);
}

/**
 * Send stop signal to running daemon
 */
function sendStop() {
  // Create stop flag file
  fs.writeFileSync(config.paths.stop, Date.now().toString());
  console.log('\n  Stop signal sent.');

  // Also try to kill by PID
  if (fs.existsSync(config.paths.pid)) {
    const pid = parseInt(fs.readFileSync(config.paths.pid, 'utf8').trim());
    try {
      process.kill(pid, 'SIGTERM');
      console.log(`  SIGTERM sent to PID ${pid}`);
    } catch (e) {
      console.log(`  Could not signal PID ${pid} (may already be stopped)`);
    }
  }

  console.log('  The daemon will shut down gracefully.\n');
}

/**
 * Run scan-only mode
 */
async function runScanOnly() {
  console.log(BANNER);
  logger.swarm('Scan-only mode');

  const results = await scanner.fullScan();
  const tasks = scanner.generateTasks();

  logger.divider();
  console.log('\n  TOP MISSING PROFILES:');
  const missing = results.missingProfiles
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 20);

  for (const m of missing) {
    console.log(`    [P${m.priority.toString().padStart(4)}] ${m.slug} — ${m.name} (refs: ${m.referencedBy.length})`);
  }

  if (results.sparseProfiles.length > 0) {
    console.log(`\n  SPARSE PROFILES (need enrichment): ${results.sparseProfiles.length}`);
    results.sparseProfiles.slice(0, 10).forEach(s => {
      console.log(`    - ${s} (${utils.slugToName(s)})`);
    });
  }

  console.log('');
}

/**
 * Inject all pending generated profiles
 */
async function runInject() {
  console.log(BANNER);
  logger.inject('Injection mode — injecting all pending generated profiles');

  const pending = injector.listPendingGenerated();
  if (pending.length === 0) {
    logger.inject('No pending profiles to inject');
    return;
  }

  logger.inject(`Found ${pending.length} pending profiles`);

  const profiles = [];
  for (const slug of pending) {
    const profile = injector.loadGenerated(slug);
    if (profile) {
      profiles.push({ slug, profile });
    }
  }

  const result = await injector.injectBatch(profiles);
  logger.inject(`Injection complete: ${result.injected} profiles injected`);
}

/**
 * Reset all state
 */
function runReset() {
  console.log('\n  Resetting swarm state...');

  const filesToDelete = [
    config.paths.queue,
    config.paths.state,
    config.paths.pid,
    config.paths.stop,
  ];

  for (const f of filesToDelete) {
    if (fs.existsSync(f)) {
      fs.unlinkSync(f);
      console.log(`    Deleted: ${path.basename(f)}`);
    }
  }

  // Clear generated directory
  const genDir = config.paths.generated;
  if (fs.existsSync(genDir)) {
    const files = fs.readdirSync(genDir);
    for (const f of files) {
      fs.unlinkSync(path.join(genDir, f));
    }
    console.log(`    Cleared ${files.length} generated profiles`);
  }

  console.log('  Reset complete.\n');
}

/**
 * Start dashboard-only mode
 */
function runDashboardOnly() {
  console.log(BANNER);
  logger.info(`Starting dashboard at http://localhost:${config.monitor.httpPort}`);

  monitor.start(() => {
    const state = utils.loadState();
    const queue = utils.loadQueue();
    return {
      running: false,
      paused: false,
      uptime: state.startedAt ? utils.formatDuration(Date.now() - new Date(state.startedAt).getTime()) : '0s',
      workers: { active: 0, min: config.workers.min, max: config.workers.max, list: [] },
      queue: {
        pending: queue.tasks?.filter(t => t.status === 'pending').length || 0,
        processing: 0,
        completed: queue.completed?.length || 0,
        failed: queue.failed?.length || 0,
        injectionBuffer: 0,
      },
      stats: state.stats || {},
      scanner: state.scanner || {},
      injector: injector.getStats(),
      lastScan: state.lastScan,
      cycleCount: state.cycleCount || 0,
    };
  });

  console.log(`\n  Dashboard running at http://localhost:${config.monitor.httpPort}`);
  console.log('  Press Ctrl+C to stop.\n');
}

// ══════════════════════════════════════════════════════════════════
//  MAIN DAEMON
// ══════════════════════════════════════════════════════════════════

async function startDaemon() {
  console.log(BANNER);

  // Apply mode overrides
  if (flags.templateOnly) {
    config.generation.mode = 'template';
    logger.info('Mode: template-only (no AI)');
  }
  if (flags.aiOnly) {
    config.generation.mode = 'ai';
    config.generation.templateFallback = false;
    logger.info('Mode: AI-only (no template fallback)');
  }
  if (flags.fast) {
    config.generation.mode = 'template';
    config.generation.batchSize = 50;
    config.generation.enrichExisting = false; // No point enriching without AI
    config.scanner.maxProfilesPerCycle = 200;
    config.workers.max = 12;
    config.quality.scoreThreshold = 40;
    logger.info('Mode: FAST — template generation, max workers, lower quality threshold');
  }
  if (flags.debug) {
    config.logging.level = 'debug';
    logger.info('Debug logging enabled');
  }

  // Check for existing daemon
  if (fs.existsSync(config.paths.pid)) {
    const existingPid = parseInt(fs.readFileSync(config.paths.pid, 'utf8').trim());
    try {
      process.kill(existingPid, 0);
      logger.error(`Daemon already running (PID: ${existingPid}). Use --stop first.`);
      process.exit(1);
    } catch (e) {
      // Stale PID file — remove it
      fs.unlinkSync(config.paths.pid);
    }
  }

  // Clean up stop flag
  if (fs.existsSync(config.paths.stop)) {
    fs.unlinkSync(config.paths.stop);
  }

  // Write PID file
  fs.writeFileSync(config.paths.pid, process.pid.toString());

  // Start monitor/dashboard
  monitor.start(() => swarm.getStatus());

  // Start swarm engine
  if (flags.once) {
    await swarm.runOnce();
  } else {
    // Start self-replication evaluation loop BEFORE the blocking start()
    const replicationLoop = setInterval(async () => {
      if (!swarm.running) {
        clearInterval(replicationLoop);
        return;
      }

      const status = swarm.getStatus();
      await botFactory.evaluate(status);
    }, 60000); // Check every 60s

    // Stop signal detection loop
    const stopDetection = setInterval(() => {
      if (fs.existsSync(config.paths.stop)) {
        logger.swarm('Stop signal detected');
        clearInterval(stopDetection);
        clearInterval(replicationLoop);
        shutdown();
      }
    }, 5000);

    // This blocks until the swarm is stopped
    await swarm.start();

    clearInterval(replicationLoop);
    clearInterval(stopDetection);
  }
}

// ══════════════════════════════════════════════════════════════════
//  SHUTDOWN HANDLERS
// ══════════════════════════════════════════════════════════════════

async function shutdown() {
  logger.swarm('Initiating graceful shutdown...');

  // Stop swarm engine
  await swarm.stop();

  // Kill spawned bots
  await botFactory.killAll();

  // Stop monitor
  monitor.stop();

  // Clean up PID file
  try { fs.unlinkSync(config.paths.pid); } catch (_) {}
  try { fs.unlinkSync(config.paths.stop); } catch (_) {}

  // Close logger
  logger.close();

  logger.banner('SWARM INTELLIGENCE DAEMON — OFFLINE');
  process.exit(0);
}

// Signal handlers
process.on('SIGINT', () => {
  console.log('\n');
  shutdown();
});

process.on('SIGTERM', () => {
  shutdown();
});

process.on('uncaughtException', (err) => {
  logger.fatal(`Uncaught exception in daemon: ${err.message}\n${err.stack}`);
  shutdown();
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection in daemon: ${reason}`);
});

// ══════════════════════════════════════════════════════════════════
//  ENTRY POINT
// ══════════════════════════════════════════════════════════════════

async function main() {
  if (flags.help) {
    showHelp();
  } else if (flags.status) {
    showStatus();
  } else if (flags.stop) {
    sendStop();
  } else if (flags.scan) {
    await runScanOnly();
  } else if (flags.inject) {
    await runInject();
  } else if (flags.reset) {
    runReset();
  } else if (flags.dashboard) {
    runDashboardOnly();
  } else {
    await startDaemon();
  }
}

main().catch(err => {
  logger.fatal(`Daemon crashed: ${err.message}\n${err.stack}`);
  process.exit(1);
});
