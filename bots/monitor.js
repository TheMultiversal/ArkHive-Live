// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — MONITOR & DASHBOARD
//  Panopticon: watches everything, alerts on anomalies
// ═══════════════════════════════════════════════════════════════════

const http = require('http');
const config = require('./config');
const logger = require('./logger').child('MONITOR');
const utils = require('./utils');

class Monitor {
  constructor() {
    this.server = null;
    this.metrics = [];
    this.alerts = [];
    this.startTime = null;
    this.reportTimer = null;
    this._getSwarmStatus = null; // Set by daemon
    this.lastWorkerDeaths = 0;   // used to suppress repeated death alerts
  }

  /**
   * Start the HTTP dashboard server
   */
  start(getStatusFn) {
    this._getSwarmStatus = getStatusFn;
    this.startTime = Date.now();
    // initialize death count so we don't alert on historical data
    const status = this._getSwarmStatus();
    if (status && status.stats) {
      this.lastWorkerDeaths = status.stats.totalWorkerDeaths || 0;
    }

    if (!config.monitor.enableDashboard) {
      logger.info('Dashboard disabled in config');
      return;
    }

    this.server = http.createServer((req, res) => {
      this._handleRequest(req, res);
    });

    this.server.listen(config.monitor.httpPort, () => {
      logger.info(`Dashboard live at http://localhost:${config.monitor.httpPort}`);
    });

    this.server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        logger.warn(`Port ${config.monitor.httpPort} in use — dashboard disabled`);
      } else {
        logger.error(`Dashboard server error: ${err.message}`);
      }
    });

    // Start periodic status reports
    this.reportTimer = setInterval(() => {
      this._recordMetrics();
    }, config.monitor.reportInterval);
  }

  /**
   * Stop the monitor
   */
  stop() {
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
      this.reportTimer = null;
    }
    if (this.server) {
      this.server.close();
      this.server = null;
    }
  }

  /**
   * Handle HTTP requests
   */
  _handleRequest(req, res) {
    const url = new URL(req.url, `http://localhost:${config.monitor.httpPort}`);

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    switch (url.pathname) {
      case '/':
        this._serveDashboard(req, res);
        break;
      case '/api/status':
        this._serveJson(res, this._getSwarmStatus ? this._getSwarmStatus() : {});
        break;
      case '/api/metrics':
        this._serveJson(res, this.metrics.slice(-100));
        break;
      case '/api/alerts':
        this._serveJson(res, this.alerts.slice(-50));
        break;
      case '/api/queue':
        this._serveJson(res, utils.loadQueue());
        break;
      default:
        res.writeHead(404);
        res.end('Not found');
    }
  }

  _serveJson(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data, null, 2));
  }

  /**
   * Serve the HTML dashboard
   */
  _serveDashboard(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ArkHive Swarm Intelligence — Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #000; color: #e0e0e0; font-family: 'Courier New', monospace; padding: 20px; }
    h1 { color: #d64545; font-size: 1.5em; border-bottom: 2px solid #d64545; padding-bottom: 10px; margin-bottom: 20px; }
    h2 { color: #d64545; font-size: 1.1em; margin: 15px 0 10px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px; }
    .card { background: #0a0a0a; border: 1px solid #1a1a1a; padding: 15px; }
    .card:hover { border-color: #d64545; }
    .stat { font-size: 2em; color: #d64545; font-weight: bold; }
    .label { color: #666; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px; }
    .worker { background: #050505; border: 1px solid #1a1a1a; padding: 8px 12px; margin: 4px 0; display: flex; justify-content: space-between; }
    .worker.busy { border-left: 3px solid #d64545; }
    .worker.idle { border-left: 3px solid #2a6a2a; }
    .alert { background: #1a0505; border-left: 3px solid #d64545; padding: 8px 12px; margin: 4px 0; }
    .bar { height: 20px; background: #1a1a1a; margin: 5px 0; position: relative; overflow: hidden; }
    .bar-fill { height: 100%; background: #d64545; transition: width 0.5s; }
    .bar-label { position: absolute; top: 2px; left: 8px; font-size: 0.75em; z-index: 1; }
    .refresh { color: #666; font-size: 0.8em; margin-top: 20px; text-align: center; }
    .status-running { color: #2a6a2a; }
    .status-stopped { color: #d64545; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    td { padding: 4px 8px; border-bottom: 1px solid #111; }
    td:first-child { color: #666; }
    td:last-child { text-align: right; color: #d64545; font-weight: bold; }
  </style>
</head>
<body>
  <h1>⬡ ARKHIVE SWARM INTELLIGENCE</h1>
  <div id="dashboard">Loading...</div>
  <div class="refresh">Auto-refreshes every 5s</div>

  <script>
    async function update() {
      try {
        const res = await fetch('/api/status');
        const status = await res.json();
        const d = document.getElementById('dashboard');

        const pendingPct = status.queue ? Math.min(100, (status.queue.pending / 500) * 100) : 0;
        const workerPct = status.workers ? (status.workers.active / status.workers.max) * 100 : 0;

        d.innerHTML = \`
          <div class="grid">
            <div class="card">
              <div class="label">Status</div>
              <div class="stat \${status.running ? 'status-running' : 'status-stopped'}">\${status.running ? (status.paused ? 'PAUSED' : 'RUNNING') : 'STOPPED'}</div>
            </div>
            <div class="card">
              <div class="label">Uptime</div>
              <div class="stat">\${status.uptime || '0s'}</div>
            </div>
            <div class="card">
              <div class="label">Workers</div>
              <div class="stat">\${status.workers?.active || 0}/\${status.workers?.max || 0}</div>
            </div>
            <div class="card">
              <div class="label">Queue</div>
              <div class="stat">\${status.queue?.pending || 0}</div>
            </div>
            <div class="card">
              <div class="label">Profiles Injected</div>
              <div class="stat">\${status.stats?.totalProfilesInjected || 0}</div>
            </div>
            <div class="card">
              <div class="label">Cycles</div>
              <div class="stat">\${status.cycleCount || 0}</div>
            </div>
          </div>

          <h2>Worker Pool</h2>
          <div class="bar">
            <div class="bar-fill" style="width: \${workerPct}%"></div>
            <div class="bar-label">\${status.workers?.active || 0} / \${status.workers?.max || 0} workers</div>
          </div>
          \${(status.workers?.list || []).map(w => \`
            <div class="worker \${w.status}">
              <span>\${w.id} [\${w.status}]</span>
              <span>PID:\${w.pid} | \${w.currentTask || 'idle'} | done:\${w.tasksCompleted} | up:\${w.uptime}</span>
            </div>
          \`).join('')}

          <h2>Task Queue</h2>
          <div class="bar">
            <div class="bar-fill" style="width: \${pendingPct}%"></div>
            <div class="bar-label">\${status.queue?.pending || 0} pending</div>
          </div>
          <table>
            <tr><td>Processing</td><td>\${status.queue?.processing || 0}</td></tr>
            <tr><td>Completed</td><td>\${status.queue?.completed || 0}</td></tr>
            <tr><td>Failed</td><td>\${status.queue?.failed || 0}</td></tr>
            <tr><td>Injection Buffer</td><td>\${status.queue?.injectionBuffer || 0}</td></tr>
          </table>

          <h2>Performance</h2>
          <table>
            <tr><td>Tasks Processed</td><td>\${status.stats?.totalTasksProcessed || 0}</td></tr>
            <tr><td>Tasks Failed</td><td>\${status.stats?.totalTasksFailed || 0}</td></tr>
            <tr><td>Avg Task Duration</td><td>\${status.stats?.avgTaskDuration ? (status.stats.avgTaskDuration / 1000).toFixed(1) + 's' : '-'}</td></tr>
            <tr><td>Worker Deaths</td><td>\${status.stats?.totalWorkerDeaths || 0}</td></tr>
            <tr><td>Worker Restarts</td><td>\${status.stats?.totalWorkerRestarts || 0}</td></tr>
            <tr><td>Peak Workers</td><td>\${status.stats?.peakWorkers || 0}</td></tr>
            <tr><td>Peak Queue</td><td>\${status.stats?.peakQueueDepth || 0}</td></tr>
          </table>

          <h2>Scanner</h2>
          <table>
            <tr><td>Existing Profiles</td><td>\${status.scanner?.totalExisting || 0}</td></tr>
            <tr><td>Missing Profiles</td><td>\${status.scanner?.totalMissing || 0}</td></tr>
            <tr><td>Sparse Profiles</td><td>\${status.scanner?.totalSparse || 0}</td></tr>
            <tr><td>Orphan Profiles</td><td>\${status.scanner?.totalOrphans || 0}</td></tr>
            <tr><td>Last Scan</td><td>\${status.lastScan || 'never'}</td></tr>
          </table>
        \`;
      } catch (e) {
        document.getElementById('dashboard').innerHTML = '<div class="alert">Connection lost. Retrying...</div>';
      }
    }

    update();
    setInterval(update, 5000);
  </script>
</body>
</html>`);
  }

  /**
   * Record current metrics snapshot
   */
  _recordMetrics() {
    if (!this._getSwarmStatus) return;

    const status = this._getSwarmStatus();
    const metric = {
      timestamp: new Date().toISOString(),
      workers: status.workers?.active || 0,
      queuePending: status.queue?.pending || 0,
      queueProcessing: status.queue?.processing || 0,
      tasksCompleted: status.stats?.totalTasksProcessed || 0,
      profilesInjected: status.stats?.totalProfilesInjected || 0,
      memoryMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    };

    this.metrics.push(metric);

    // Trim old metrics
    const maxAge = config.monitor.metricsRetention;
    const cutoff = Date.now() - maxAge;
    this.metrics = this.metrics.filter(m => new Date(m.timestamp).getTime() > cutoff);

    // Check alert thresholds
    this._checkAlerts(status);
  }

  /**
   * Check for alert conditions
   */
  _checkAlerts(status) {
    const thresholds = config.monitor.alertThresholds;

    // Worker death rate
    if (status.stats) {
      const deathRate = status.stats.totalWorkersSpawned > 0
        ? status.stats.totalWorkerDeaths / status.stats.totalWorkersSpawned
        : 0;

      if (deathRate > thresholds.workerDeathRate && status.stats.totalWorkerDeaths > this.lastWorkerDeaths) {
        this._alert('HIGH_WORKER_DEATH_RATE', `Worker death rate: ${(deathRate * 100).toFixed(0)}%`);
      }
      // update for next check
      this.lastWorkerDeaths = status.stats.totalWorkerDeaths || 0;
    }

    // Error rate
    if (status.stats) {
      const total = status.stats.totalTasksProcessed + status.stats.totalTasksFailed;
      if (total > 5) {
        const errorRate = status.stats.totalTasksFailed / total;
        if (errorRate > thresholds.errorRate) {
          this._alert('HIGH_ERROR_RATE', `Error rate: ${(errorRate * 100).toFixed(0)}%`);
        }
      }
    }

    // Queue stall
    if (this.metrics.length >= 3) {
      const recent = this.metrics.slice(-3);
      const allSameCompleted = recent.every(m => m.tasksCompleted === recent[0].tasksCompleted);
      const hasQueue = recent[0].queuePending > 0;

      if (allSameCompleted && hasQueue) {
        this._alert('QUEUE_STALL', `Queue stalled with ${recent[0].queuePending} pending tasks`);
      }
    }
  }

  _alert(type, message) {
    // Deduplicate alerts (don't repeat within 5 minutes)
    const recentSame = this.alerts.find(a =>
      a.type === type && (Date.now() - new Date(a.timestamp).getTime()) < 300000
    );
    if (recentSame) return;

    const alert = {
      type,
      message,
      timestamp: new Date().toISOString(),
    };

    this.alerts.push(alert);
    logger.warn(`ALERT [${type}]: ${message}`);

    // Trim old alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-50);
    }
  }
}

module.exports = new Monitor();
module.exports.Monitor = Monitor;
