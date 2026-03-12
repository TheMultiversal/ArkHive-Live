#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE FORGE — MASTER ORCHESTRATOR
//
//  The single command that builds the entire application from schema.
//  Run this whenever the schema changes and everything regenerates.
//
//  Usage:
//    node bots/forge/forge.js              # run all generators
//    node bots/forge/forge.js --types      # only types
//    node bots/forge/forge.js --components # only components
//    node bots/forge/forge.js --api        # only API routes
//    node bots/forge/forge.js --enrichment # only enrichment
//    node bots/forge/forge.js --tests      # only tests
//    node bots/forge/forge.js --stats      # show schema stats
// ═══════════════════════════════════════════════════════════════════

const schema = require('./schema');

function parseArgs() {
  const args = new Set();
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith('--')) args.add(arg.slice(2));
  }
  return args;
}

function banner() {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════════════╗');
  console.log('  ║           ARKHIVE FORGE v' + schema.version + '                 ║');
  console.log('  ║     Schema-Driven Code Generation System         ║');
  console.log('  ╚═══════════════════════════════════════════════════╝');
  console.log('');
}

function stats() {
  const entities = Object.keys(schema.entities).length;
  const subTypes = Object.keys(schema.subTypes).length;
  const totalFields = Object.values(schema.entities).reduce((sum, e) =>
    sum + Object.keys(e.fields).length + Object.keys(e.relations || {}).length, 0
  );
  const enrichableFields = Object.values(schema.entities).reduce((sum, e) =>
    sum + Object.entries({ ...e.fields, ...(e.relations || {}) })
      .filter(([, f]) => f.enrichable).length, 0
  );
  const apiRoutes = schema.apiRoutes.length;
  const crimeCategories = schema.crimeCategories.length;
  const pages = schema.pages?.length || 0;

  console.log('  Schema Statistics:');
  console.log(`    ${entities} entity types`);
  console.log(`    ${subTypes} sub-types`);
  console.log(`    ${totalFields} total fields`);
  console.log(`    ${enrichableFields} enrichable fields`);
  console.log(`    ${apiRoutes} API routes`);
  console.log(`    ${crimeCategories} crime categories`);
  console.log(`    ${pages} generated pages`);
  console.log('');
}

async function main() {
  const flags = parseArgs();
  const runAll = flags.size === 0 || flags.has('all');

  banner();
  stats();

  const startTime = Date.now();
  let modulesRun = 0;

  // 1. Types
  if (runAll || flags.has('types')) {
    console.log('── Generating TypeScript Types ──────────────────────\n');
    const { generate } = require('./generate-types');
    generate();
    console.log('');
    modulesRun++;
  }

  // 2. Components
  if (runAll || flags.has('components')) {
    console.log('── Generating React Components ─────────────────────\n');
    const { generate } = require('./generate-components');
    generate();
    console.log('');
    modulesRun++;
  }

  // 3. API Routes
  if (runAll || flags.has('api')) {
    console.log('── Generating API Routes ───────────────────────────\n');
    const { generate } = require('./generate-api-routes');
    generate();
    console.log('');
    modulesRun++;
  }

  // 4. Enrichment
  if (runAll || flags.has('enrichment')) {
    console.log('── Generating Enrichment Templates ─────────────────\n');
    const { generate } = require('./generate-enrichment');
    generate();
    console.log('');
    modulesRun++;
  }

  // 5. Tests
  if (runAll || flags.has('tests')) {
    console.log('── Generating Test Suites ─────────────────────────\n');
    const { generate } = require('./generate-tests');
    generate();
    console.log('');
    modulesRun++;
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('═══════════════════════════════════════════════════════');
  console.log(`  FORGE COMPLETE — ${modulesRun} generators ran in ${elapsed}s`);
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
  console.log('  Next steps:');
  console.log('    npm run dev     — start dev server to see changes');
  console.log('    node bots/forge/parallel-enrich.js — bulk enrich profiles');
  console.log('    node bots/daemon.js — start enrichment daemon');
  console.log('');
}

main().catch(err => {
  console.error('Forge failed:', err);
  process.exit(1);
});
