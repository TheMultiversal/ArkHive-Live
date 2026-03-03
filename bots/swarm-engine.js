// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — SWARM ENGINE
//  The hive mind: orchestrates workers, manages queues, auto-scales
// ═══════════════════════════════════════════════════════════════════

const { fork } = require('child_process');
const path = require('path');
const EventEmitter = require('events');
const config = require('./config');
const logger = require('./logger').child('SWARM');
const utils = require('./utils');
const scanner = require('./scanner');
const injector = require('./injector');

class SwarmEngine extends EventEmitter {
  constructor() {
    super();

    // Worker pool
    this.workers = new Map();       // workerId -> { process, status, currentTask, lastHeartbeat, restarts }
    this.workerCounter = 0;

    // Task queue
    this.queue = { tasks: [], completed: [], failed: [], stats: { totalGenerated: 0, totalFailed: 0, totalInjected: 0 } };
    this.processing = new Map();    // taskId -> { task, workerId, startTime }

    // State
    this.running = false;
    this.paused = false;
    this.cycleCount = 0;
    this.startTime = null;
    this.lastScanTime = null;
    this.lastScaleCheck = null;

    // Timers
    this.scanTimer = null;
    this.scaleTimer = null;
    this.heartbeatCheckTimer = null;

    // Batch injection buffer
    this.injectionBuffer = [];
    this.injectionTimer = null;

    // Stats
    this.stats = {
      totalTasksProcessed: 0,
      totalTasksFailed: 0,
      totalProfilesInjected: 0,
      totalWorkersSpawned: 0,
      totalWorkerDeaths: 0,
      totalWorkerRestarts: 0,
      avgTaskDuration: 0,
      peakWorkers: 0,
      peakQueueDepth: 0,
    };

    this._taskDurations = [];
  }

  // ══════════════════════════════════════════════════════════════
  //  LIFECYCLE
  // ══════════════════════════════════════════════════════════════

  /**
   * Start the swarm engine
   */
  async start() {
    if (this.running) {
      logger.warn('Swarm engine is already running');
      return;
    }

    this.running = true;
    this.startTime = Date.now();

    logger.banner('ARKHIVE SWARM INTELLIGENCE — ACTIVATED');
    logger.swarm('Initializing swarm engine...');

    // Load persistent queue
    this.queue = utils.loadQueue();
    logger.swarm(`Loaded queue: ${this.queue.tasks.length} pending tasks`);

    // Initial scan
    logger.swarm('Running initial profile scan...');
    await this.runScanCycle();

    // Spawn initial workers
    const initialCount = Math.max(config.workers.min, Math.min(
      Math.ceil(this.queue.tasks.length / 3),
      config.workers.max
    ));
    logger.swarm(`Spawning ${initialCount} initial workers...`);
    for (let i = 0; i < initialCount; i++) {
      await this.spawnWorker();
    }

    // Start timers
    this._startTimers();

    // Start distributing tasks
    this._distribute();

    logger.swarm('Swarm engine fully operational');
    logger.table({
      'Workers': `${this.workers.size}/${config.workers.max}`,
      'Queue Depth': this.queue.tasks.length,
      'Scan Interval': utils.formatDuration(config.scanner.scanInterval),
      'Scale Check': utils.formatDuration(config.workers.scaleCheckInterval),
    });

    this.emit('started');
  }

  /**
   * Stop the swarm engine gracefully
   */
  async stop() {
    if (!this.running) return;

    logger.swarm('Initiating graceful shutdown...');
    this.running = false;

    // Stop timers
    this._stopTimers();

    // Flush injection buffer
    await this._flushInjectionBuffer();

    // Save queue state
    utils.saveQueue(this.queue);

    // Shutdown workers
    const shutdownPromises = [];
    for (const [id, worker] of this.workers) {
      shutdownPromises.push(this._shutdownWorker(id));
    }

    // Wait for all workers with timeout
    await Promise.race([
      Promise.all(shutdownPromises),
      new Promise(resolve => setTimeout(resolve, config.workers.gracefulShutdownTimeout)),
    ]);

    // Force kill any remaining workers
    for (const [id, worker] of this.workers) {
      if (worker.process && !worker.process.killed) {
        worker.process.kill('SIGKILL');
      }
    }
    this.workers.clear();

    // Save final state
    this._saveState();

    logger.swarm('Swarm engine shut down cleanly');
    logger.table({
      'Uptime': utils.formatDuration(Date.now() - this.startTime),
      'Tasks Processed': this.stats.totalTasksProcessed,
      'Profiles Injected': this.stats.totalProfilesInjected,
      'Workers Spawned': this.stats.totalWorkersSpawned,
      'Cycles': this.cycleCount,
    });

    this.emit('stopped');
  }

  /**
   * Run a single cycle then stop (--once mode)
   */
  async runOnce() {
    logger.banner('ARKHIVE SWARM — SINGLE CYCLE MODE');

    this.running = true;
    this.startTime = Date.now();

    // Scan
    await this.runScanCycle();

    if (this.queue.tasks.length === 0) {
      logger.swarm('No tasks found — nothing to do');
      return;
    }

    // Process up to batchSize * 2 tasks in single cycle for maximum throughput
    const maxTasks = Math.min(this.queue.tasks.length, config.generation.batchSize * 2);
    logger.swarm(`Processing ${maxTasks} tasks in single cycle`);

    // Spawn more workers for single cycle — use full capacity
    const workerCount = Math.min(maxTasks, config.workers.max);
    for (let i = 0; i < workerCount; i++) {
      await this.spawnWorker();
    }

    // Distribute and wait for completion
    // We need to track how many tasks we expect to process
    let tasksStarted = 0;
    let tasksFinished = 0;
    const onTaskComplete = () => { tasksFinished++; };
    this.on('task-complete', onTaskComplete);

    // Wait for workers to become ready and start distributing
    // Workers call _distribute() when they report 'ready'
    this._distribute();

    // Wait for all tasks to complete or timeout
    await new Promise((resolve) => {
      let idleTicks = 0;
      const checkInterval = setInterval(() => {
        // Count how many tasks have been started (processing + completed)
        const currentProcessing = this.processing.size;
        const pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;

        // If we have workers and pending tasks, try distributing again
        if (pendingCount > 0) {
          this._distribute();
          idleTicks = 0;
        } else if (currentProcessing > 0) {
          // Tasks still running
          idleTicks = 0;
        } else {
          // No pending tasks AND nothing processing
          idleTicks++;
          // Wait at least 5 ticks (5s) to ensure workers had time to start
          if (idleTicks >= 5) {
            clearInterval(checkInterval);
            resolve();
          }
        }

        if (!this.running) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 1000);

      // Global timeout
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, config.workers.taskTimeout * maxTasks);
    });

    this.off('task-complete', onTaskComplete);

    // Flush injections
    await this._flushInjectionBuffer();

    // Shutdown
    this.running = false;
    for (const [id] of this.workers) {
      await this._shutdownWorker(id);
    }

    utils.saveQueue(this.queue);
    this._saveState();

    logger.swarm('Single cycle complete');
    logger.table({
      'Duration': utils.formatDuration(Date.now() - this.startTime),
      'Tasks Processed': this.stats.totalTasksProcessed,
      'Profiles Injected': this.stats.totalProfilesInjected,
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  WORKER MANAGEMENT
  // ══════════════════════════════════════════════════════════════

  /**
   * Spawn a new worker process
   */
  async spawnWorker() {
    if (this.workers.size >= config.workers.max) {
      logger.debug(`Worker limit reached (${config.workers.max})`);
      return null;
    }

    this.workerCounter++;
    const workerId = `W${this.workerCounter}`;

    logger.worker(`Spawning worker ${workerId}...`);

    const workerPath = path.join(config.paths.bots, 'worker.js');
    const child = fork(workerPath, [], {
      env: {
        ...process.env,
        WORKER_ID: workerId,
        GENERATION_MODE: config.generation.mode,
        TEMPLATE_FALLBACK: config.generation.templateFallback ? '1' : '0',
      },
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });

    const workerInfo = {
      process: child,
      id: workerId,
      pid: child.pid,
      status: 'starting',
      currentTask: null,
      lastHeartbeat: Date.now(),
      restarts: 0,
      tasksCompleted: 0,
      tasksFailed: 0,
      spawnedAt: Date.now(),
    };

    this.workers.set(workerId, workerInfo);
    this.stats.totalWorkersSpawned++;
    this.stats.peakWorkers = Math.max(this.stats.peakWorkers, this.workers.size);

    // Forward stdout/stderr
    child.stdout?.on('data', (data) => {
      process.stdout.write(data);
    });
    child.stderr?.on('data', (data) => {
      process.stderr.write(data);
    });

    // Handle IPC messages from worker
    child.on('message', (msg) => this._handleWorkerMessage(workerId, msg));

    // Handle worker death
    child.on('exit', (code, signal) => {
      this._handleWorkerDeath(workerId, code, signal);
    });

    child.on('error', (err) => {
      logger.error(`Worker ${workerId} process error: ${err.message}`);
    });

    return workerId;
  }

  /**
   * Shutdown a specific worker
   */
  async _shutdownWorker(workerId) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    return new Promise((resolve) => {
      worker.status = 'shutting-down';

      // Send shutdown message
      try {
        worker.process.send({ type: 'shutdown' });
      } catch (_) {}

      // Wait for graceful shutdown
      const timeout = setTimeout(() => {
        if (worker.process && !worker.process.killed) {
          worker.process.kill('SIGTERM');
        }
        this.workers.delete(workerId);
        resolve();
      }, 10000);

      worker.process.once('exit', () => {
        clearTimeout(timeout);
        this.workers.delete(workerId);
        resolve();
      });
    });
  }

  /**
   * Handle messages from worker processes
   */
  _handleWorkerMessage(workerId, msg) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    worker.lastHeartbeat = Date.now();

    switch (msg.type) {
      case 'ready':
        worker.status = 'idle';
        logger.worker(`Worker ${workerId} is ready`);
        this._distribute();
        break;

      case 'heartbeat':
        worker.status = msg.task ? 'busy' : 'idle';
        break;

      case 'result':
        this._handleTaskResult(workerId, msg);
        break;

      case 'error':
        logger.error(`Worker ${workerId} reported error: ${msg.error}`);
        if (msg.fatal) {
          this._handleWorkerDeath(workerId, 1, 'error');
        }
        break;

      case 'shutdown-ack':
        logger.worker(`Worker ${workerId} acknowledged shutdown`);
        break;

      case 'pong':
        // Response to ping — worker is alive
        break;

      case 'status-response':
        this.emit('worker-status', { workerId, ...msg });
        break;

      default:
        logger.debug(`Unknown message from worker ${workerId}: ${msg.type}`);
    }
  }

  /**
   * Handle a task completion result from a worker
   */
  _handleTaskResult(workerId, msg) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    const { task, success, profile, quality, error, elapsed } = msg;
    worker.status = 'idle';
    worker.currentTask = null;

    // Remove from processing map
    this.processing.delete(task.id);

    // Track duration
    if (elapsed) {
      this._taskDurations.push(elapsed);
      if (this._taskDurations.length > 100) this._taskDurations.shift();
      this.stats.avgTaskDuration = Math.round(
        this._taskDurations.reduce((a, b) => a + b, 0) / this._taskDurations.length
      );
    }

    if (success) {
      worker.tasksCompleted++;
      this.stats.totalTasksProcessed++;

      // Add to injection buffer
      if (profile && task.action === 'create') {
        this.injectionBuffer.push({ slug: task.slug, profile });
        logger.swarm(`+1 profile queued for injection: ${task.slug} (quality: ${quality}/100)`);
      }

      // Move task to completed
      this.queue.completed.push({
        ...task,
        completedAt: new Date().toISOString(),
        quality,
        elapsed,
      });

      // Check if injection buffer is full
      if (this.injectionBuffer.length >= config.generation.batchSize) {
        this._flushInjectionBuffer();
      }

    } else {
      worker.tasksFailed++;
      this.stats.totalTasksFailed++;

      // Retry logic
      task.attempts = (task.attempts || 0) + 1;
      if (task.attempts < 3) {
        logger.warn(`Re-queuing task ${task.slug} (attempt ${task.attempts}/3): ${error}`);
        task.status = 'pending';
        this.queue.tasks.push(task);
      } else {
        logger.error(`Task ${task.slug} permanently failed after 3 attempts: ${error}`);
        this.queue.failed.push({
          ...task,
          failedAt: new Date().toISOString(),
          error,
        });
      }
    }

    // Save queue periodically
    if ((this.stats.totalTasksProcessed + this.stats.totalTasksFailed) % 5 === 0) {
      utils.saveQueue(this.queue);
    }

    // Try to distribute more work
    this._distribute();

    this.emit('task-complete', { task, success, quality });
  }

  /**
   * Handle worker process death
   */
  _handleWorkerDeath(workerId, code, signal) {
    const worker = this.workers.get(workerId);
    if (!worker) return;

    this.stats.totalWorkerDeaths++;
    logger.warn(`Worker ${workerId} died (code: ${code}, signal: ${signal})`);

    // Re-queue the task the worker was processing
    if (worker.currentTask) {
      const task = worker.currentTask;
      task.status = 'pending';
      task.attempts = (task.attempts || 0) + 1;
      this.queue.tasks.unshift(task); // Re-queue at front
      this.processing.delete(task.id);
      logger.warn(`Re-queued task ${task.slug} from dead worker`);
    }

    this.workers.delete(workerId);

    // Self-healing: restart worker if under min and not shutting down
    if (this.running && !this.paused && this.workers.size < config.workers.min) {
      if (worker.restarts < config.workers.maxRestartsPerWorker) {
        logger.swarm(`Self-healing: respawning worker (${this.workers.size}/${config.workers.min} min)`);
        this.stats.totalWorkerRestarts++;

        setTimeout(() => {
          if (this.running) this.spawnWorker();
        }, config.workers.restartCooldown);
      } else {
        logger.error(`Worker ${workerId} exceeded max restarts (${config.workers.maxRestartsPerWorker})`);
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  TASK DISTRIBUTION
  // ══════════════════════════════════════════════════════════════

  /**
   * Distribute pending tasks to idle workers
   */
  _distribute() {
    if (!this.running || this.paused) return;

    const pendingTasks = this.queue.tasks.filter(t => t.status === 'pending');
    const idleWorkers = Array.from(this.workers.values()).filter(w => w.status === 'idle');

    if (pendingTasks.length === 0 || idleWorkers.length === 0) return;

    // Sort tasks by priority (descending)
    pendingTasks.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const toAssign = Math.min(pendingTasks.length, idleWorkers.length);

    for (let i = 0; i < toAssign; i++) {
      const task = pendingTasks[i];
      const worker = idleWorkers[i];

      task.status = 'processing';
      worker.status = 'busy';
      worker.currentTask = task;

      this.processing.set(task.id, {
        task,
        workerId: worker.id,
        startTime: Date.now(),
      });

      try {
        worker.process.send({ type: 'task', task });
        logger.debug(`Assigned ${task.slug} to ${worker.id}`);
      } catch (e) {
        logger.error(`Failed to send task to ${worker.id}: ${e.message}`);
        task.status = 'pending';
        worker.status = 'idle';
        worker.currentTask = null;
        this.processing.delete(task.id);
      }
    }

    // Track peak queue depth
    this.stats.peakQueueDepth = Math.max(this.stats.peakQueueDepth, pendingTasks.length);
  }

  // ══════════════════════════════════════════════════════════════
  //  SCAN & QUEUE MANAGEMENT
  // ══════════════════════════════════════════════════════════════

  /**
   * Run a scan cycle: find missing profiles and add to queue
   */
  async runScanCycle() {
    this.cycleCount++;
    logger.scan(`Running scan cycle #${this.cycleCount}...`);

    const results = await scanner.fullScan();
    const tasks = scanner.generateTasks(config.scanner.maxProfilesPerCycle);

    // Add new tasks to queue (avoiding duplicates)
    const existingIds = new Set([
      ...this.queue.tasks.map(t => t.slug),
      ...this.queue.completed.map(t => t.slug),
      ...Array.from(this.processing.values()).map(p => p.task.slug),
    ]);

    let added = 0;
    for (const task of tasks) {
      if (!existingIds.has(task.slug) && this.queue.tasks.length < config.scanner.maxQueueSize) {
        this.queue.tasks.push(task);
        existingIds.add(task.slug);
        added++;
      }
    }

    if (added > 0) {
      logger.scan(`Added ${added} new tasks to queue (total: ${this.queue.tasks.length})`);
    } else {
      logger.scan('No new tasks to add');
    }

    this.lastScanTime = new Date().toISOString();
    utils.saveQueue(this.queue);

    this.emit('scan-complete', { added, total: this.queue.tasks.length });

    return results;
  }

  // ══════════════════════════════════════════════════════════════
  //  AUTO-SCALING
  // ══════════════════════════════════════════════════════════════

  /**
   * Check and adjust worker count based on queue depth
   */
  async _autoScale() {
    if (!this.running || this.paused) return;

    const pendingCount = this.queue.tasks.filter(t => t.status === 'pending').length;
    const currentWorkers = this.workers.size;

    // Scale up
    if (pendingCount > config.workers.scaleUpThreshold && currentWorkers < config.workers.max) {
      const needed = Math.min(
        Math.ceil(pendingCount / 5),
        config.workers.max - currentWorkers
      );
      logger.swarm(`Auto-scaling UP: adding ${needed} workers (queue: ${pendingCount}, workers: ${currentWorkers})`);

      for (let i = 0; i < needed; i++) {
        await this.spawnWorker();
      }
    }

    // Scale down
    if (pendingCount <= config.workers.scaleDownThreshold && currentWorkers > config.workers.min) {
      const excess = currentWorkers - config.workers.min;
      const toRemove = Math.min(excess, Math.ceil(excess / 2)); // Remove half the excess

      logger.swarm(`Auto-scaling DOWN: removing ${toRemove} workers (queue: ${pendingCount}, workers: ${currentWorkers})`);

      let removed = 0;
      for (const [id, worker] of this.workers) {
        if (removed >= toRemove) break;
        if (worker.status === 'idle') {
          await this._shutdownWorker(id);
          removed++;
        }
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  INJECTION BUFFER
  // ══════════════════════════════════════════════════════════════

  /**
   * Flush the injection buffer — inject all buffered profiles
   */
  async _flushInjectionBuffer() {
    if (this.injectionBuffer.length === 0) return;

    const batch = [...this.injectionBuffer];
    this.injectionBuffer = [];

    logger.inject(`Flushing injection buffer: ${batch.length} profiles`);

    const result = await injector.injectBatch(batch);

    if (result.success) {
      this.stats.totalProfilesInjected += result.injected;
      this.queue.stats.totalInjected += result.injected;
      utils.saveQueue(this.queue);

      this.emit('injection-complete', { count: result.injected });
    } else {
      logger.error(`Batch injection failed: ${result.message}`);
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  TIMERS & HEALTH CHECKS
  // ══════════════════════════════════════════════════════════════

  _startTimers() {
    // Periodic scan timer
    this.scanTimer = setInterval(() => {
      this.runScanCycle();
    }, config.scanner.scanInterval);

    // Auto-scale timer
    this.scaleTimer = setInterval(() => {
      this._autoScale();
    }, config.workers.scaleCheckInterval);

    // Heartbeat check timer
    this.heartbeatCheckTimer = setInterval(() => {
      this._checkWorkerHealth();
    }, config.workers.heartbeatInterval * 2);

    // Injection flush timer (flush every 30s regardless)
    this.injectionTimer = setInterval(() => {
      this._flushInjectionBuffer();
    }, 30000);
  }

  _stopTimers() {
    if (this.scanTimer) clearInterval(this.scanTimer);
    if (this.scaleTimer) clearInterval(this.scaleTimer);
    if (this.heartbeatCheckTimer) clearInterval(this.heartbeatCheckTimer);
    if (this.injectionTimer) clearInterval(this.injectionTimer);
    this.scanTimer = null;
    this.scaleTimer = null;
    this.heartbeatCheckTimer = null;
    this.injectionTimer = null;
  }

  /**
   * Check worker health via heartbeats
   */
  _checkWorkerHealth() {
    const now = Date.now();
    const timeout = config.workers.heartbeatTimeout;

    for (const [id, worker] of this.workers) {
      if (worker.status === 'shutting-down') continue;

      const timeSinceHeartbeat = now - worker.lastHeartbeat;
      if (timeSinceHeartbeat > timeout) {
        logger.warn(`Worker ${id} missed heartbeat (${utils.formatDuration(timeSinceHeartbeat)} since last)`);

        // Try pinging first
        try {
          worker.process.send({ type: 'ping' });
        } catch (e) {
          // Worker IPC is dead — kill it
          logger.error(`Worker ${id} IPC dead — killing process`);
          try { worker.process.kill('SIGKILL'); } catch (_) {}
          this._handleWorkerDeath(id, null, 'heartbeat-timeout');
        }
      }

      // Check for stuck tasks
      if (worker.currentTask) {
        const taskInfo = this.processing.get(worker.currentTask.id);
        if (taskInfo && (now - taskInfo.startTime) > config.workers.taskTimeout) {
          logger.warn(`Worker ${id} has task stuck for ${utils.formatDuration(now - taskInfo.startTime)} — killing`);
          try { worker.process.kill('SIGTERM'); } catch (_) {}
        }
      }
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  STATE & STATUS
  // ══════════════════════════════════════════════════════════════

  _saveState() {
    const state = {
      startedAt: this.startTime ? new Date(this.startTime).toISOString() : null,
      lastScan: this.lastScanTime,
      cycleCount: this.cycleCount,
      totalProfilesGenerated: this.stats.totalTasksProcessed,
      totalProfilesInjected: this.stats.totalProfilesInjected,
      totalErrors: this.stats.totalTasksFailed,
      activeWorkers: this.workers.size,
      stats: this.stats,
      scanner: scanner.getResults().stats,
    };
    utils.saveState(state);
  }

  /**
   * Get comprehensive status for display
   */
  getStatus() {
    const workerList = Array.from(this.workers.entries()).map(([id, w]) => ({
      id,
      pid: w.pid,
      status: w.status,
      currentTask: w.currentTask?.slug || null,
      tasksCompleted: w.tasksCompleted,
      tasksFailed: w.tasksFailed,
      uptime: utils.formatDuration(Date.now() - w.spawnedAt),
    }));

    return {
      running: this.running,
      paused: this.paused,
      uptime: this.startTime ? utils.formatDuration(Date.now() - this.startTime) : '0s',

      workers: {
        active: this.workers.size,
        min: config.workers.min,
        max: config.workers.max,
        list: workerList,
      },

      queue: {
        pending: this.queue.tasks.filter(t => t.status === 'pending').length,
        processing: this.processing.size,
        completed: this.queue.completed.length,
        failed: this.queue.failed.length,
        injectionBuffer: this.injectionBuffer.length,
      },

      stats: this.stats,
      scanner: scanner.stats,
      injector: injector.getStats(),

      lastScan: this.lastScanTime,
      cycleCount: this.cycleCount,
    };
  }

  /**
   * Print a formatted status report to console
   */
  printStatus() {
    const status = this.getStatus();
    logger.divider('═', 60);
    logger.banner('SWARM STATUS REPORT');

    logger.table({
      'Status': status.running ? (status.paused ? 'PAUSED' : 'RUNNING') : 'STOPPED',
      'Uptime': status.uptime,
      'Cycle': status.cycleCount,
      'Last Scan': status.lastScan || 'never',
    });

    logger.divider();
    console.log('  WORKERS:');
    logger.table({
      'Active': `${status.workers.active}/${status.workers.max}`,
      'Spawned Total': status.stats.totalWorkersSpawned,
      'Deaths': status.stats.totalWorkerDeaths,
      'Restarts': status.stats.totalWorkerRestarts,
      'Peak': status.stats.peakWorkers,
    });

    for (const w of status.workers.list) {
      console.log(`    ${w.id} [${w.status}] PID:${w.pid} tasks:${w.tasksCompleted}/${w.tasksFailed} task:${w.currentTask || '-'} up:${w.uptime}`);
    }

    logger.divider();
    console.log('  QUEUE:');
    logger.table({
      'Pending': status.queue.pending,
      'Processing': status.queue.processing,
      'Completed': status.queue.completed,
      'Failed': status.queue.failed,
      'Injection Buffer': status.queue.injectionBuffer,
      'Peak Depth': status.stats.peakQueueDepth,
    });

    logger.divider();
    console.log('  PERFORMANCE:');
    logger.table({
      'Tasks Processed': status.stats.totalTasksProcessed,
      'Tasks Failed': status.stats.totalTasksFailed,
      'Profiles Injected': status.stats.totalProfilesInjected,
      'Avg Task Duration': utils.formatDuration(status.stats.avgTaskDuration),
    });

    logger.divider('═', 60);
  }
}

module.exports = new SwarmEngine();
module.exports.SwarmEngine = SwarmEngine;
