#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE — MIGRATE MONOLITHIC page.tsx TO SHARDED DATA FILES
//  One-time script: splits 4+ MB page.tsx into 26+ letter-based shards
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE = path.join(ROOT, 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');
const SHARD_DIR = path.join(ROOT, 'src', 'data', 'individuals');

console.log('═══════════════════════════════════════════════════');
console.log('  ARKHIVE SHARD MIGRATION');
console.log('═══════════════════════════════════════════════════');
console.log(`Source: ${SOURCE}`);
console.log(`Target: ${SHARD_DIR}`);

// 1. Read the monolithic file
if (!fs.existsSync(SOURCE)) {
  console.error('ERROR: Source file not found');
  process.exit(1);
}
const content = fs.readFileSync(SOURCE, 'utf8');
console.log(`\nRead ${(Buffer.byteLength(content) / 1024 / 1024).toFixed(2)} MB, ${content.split('\n').length} lines`);

// 2. Find the individualData object
const dataStart = content.indexOf('const individualData');
if (dataStart === -1) {
  console.error('ERROR: Could not find individualData declaration');
  process.exit(1);
}

// Find the opening brace of the Record<string, IndividualProfile> = { ...
// There's 'Record<...> = {', so find the '{' after '='
const eqSign = content.indexOf('=', dataStart);
const recordBrace = content.indexOf('{', eqSign);
if (recordBrace === -1) {
  console.error('ERROR: Could not find opening brace');
  process.exit(1);
}

// 3. Extract profile blocks using brace counting
const profiles = new Map(); // slug -> rawBlock (including 'slug': { ... },)
let pos = recordBrace + 1;
let extracted = 0;
let errors = 0;

while (pos < content.length) {
  // Skip whitespace
  while (pos < content.length && /\s/.test(content[pos])) pos++;

  // Check if we've hit the closing `}` of the data object
  if (content[pos] === '}') break;

  // Look for a profile entry: 'slug': { or "slug": {
  const slugMatch = content.substring(pos).match(/^['"]([a-z0-9-]+)['"]\s*:\s*\{/);
  if (!slugMatch) {
    // Try to find the next slug pattern
    const nextSlug = content.indexOf("'", pos);
    const nextSlug2 = content.indexOf('"', pos);
    if (nextSlug === -1 && nextSlug2 === -1) break;
    pos = Math.min(
      nextSlug === -1 ? Infinity : nextSlug,
      nextSlug2 === -1 ? Infinity : nextSlug2
    );
    continue;
  }

  const slug = slugMatch[1];
  const blockOpenBrace = content.indexOf('{', pos + slugMatch[0].indexOf('{'));

  // Find matching closing brace
  let depth = 0;
  let endIdx = -1;
  for (let i = blockOpenBrace; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }

  if (endIdx === -1) {
    console.error(`ERROR: Unbalanced braces for profile '${slug}' at position ${pos}`);
    errors++;
    pos += slugMatch[0].length;
    continue;
  }

  // Include trailing comma if present
  let trailingEnd = endIdx;
  while (trailingEnd < content.length && /\s/.test(content[trailingEnd])) trailingEnd++;
  if (content[trailingEnd] === ',') trailingEnd++;

  // Find the start of the line containing this profile
  let lineStart = pos;
  while (lineStart > 0 && content[lineStart - 1] !== '\n') lineStart--;

  // Extract the raw block text (indented profile literal)
  const rawBlock = content.substring(lineStart, trailingEnd).trimEnd();

  profiles.set(slug, rawBlock);
  extracted++;

  // Move past this profile
  pos = trailingEnd;
}

console.log(`\nExtracted ${extracted} profiles (${errors} errors)`);

// 4. Group profiles by first letter
const shards = new Map();
for (const [slug, block] of profiles) {
  const first = slug[0]?.toLowerCase();
  const letter = (first >= 'a' && first <= 'z') ? first : 'misc';
  if (!shards.has(letter)) shards.set(letter, []);
  shards.get(letter).push({ slug, block });
}

console.log(`\nShard distribution:`);
const sortedLetters = Array.from(shards.keys()).sort();
for (const letter of sortedLetters) {
  console.log(`  ${letter.toUpperCase()}: ${shards.get(letter).length} profiles`);
}

// 5. Ensure shard directory exists
if (!fs.existsSync(SHARD_DIR)) {
  fs.mkdirSync(SHARD_DIR, { recursive: true });
}

// 6. Write each shard file
let totalWritten = 0;
for (const [letter, entries] of shards) {
  const label = letter === 'misc' ? 'MISC' : letter.toUpperCase();
  const profileBlocks = entries.map(e => e.block).join('\n');

  const shardContent = `// AUTO-GENERATED — Shard [${label}] managed by ArkHive Swarm Intelligence
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
${profileBlocks}
};

export default profiles;
`;

  const shardPath = path.join(SHARD_DIR, `${letter}.ts`);
  fs.writeFileSync(shardPath, shardContent, 'utf8');
  totalWritten += entries.length;
  console.log(`  Wrote ${shardPath} (${entries.length} profiles, ${(Buffer.byteLength(shardContent) / 1024).toFixed(1)} KB)`);
}

// 7. Create empty shards for missing letters
const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
for (const letter of allLetters) {
  if (!shards.has(letter)) {
    const shardContent = `// AUTO-GENERATED — Shard [${letter.toUpperCase()}] managed by ArkHive Swarm Intelligence
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
};

export default profiles;
`;
    const shardPath = path.join(SHARD_DIR, `${letter}.ts`);
    fs.writeFileSync(shardPath, shardContent, 'utf8');
    console.log(`  Wrote ${shardPath} (empty shard)`);
  }
}

// 8. Create index.ts
const existingLetters = [...allLetters, 'misc'].filter(l =>
  fs.existsSync(path.join(SHARD_DIR, `${l}.ts`))
);

const imports = existingLetters.map(l => {
  const varName = l === 'misc' ? 'misc' : `shard_${l}`;
  return `import ${varName} from './${l}';`;
}).join('\n');

const spreads = existingLetters.map(l => {
  const varName = l === 'misc' ? 'misc' : `shard_${l}`;
  return `  ...${varName},`;
}).join('\n');

const indexContent = `// AUTO-GENERATED by ArkHive Swarm Intelligence — DO NOT EDIT MANUALLY
import type { IndividualProfile } from './types';
${imports}

const individualData: Record<string, IndividualProfile> = {
${spreads}
};

export default individualData;
export type { IndividualProfile };
`;

fs.writeFileSync(path.join(SHARD_DIR, 'index.ts'), indexContent, 'utf8');
console.log(`\n  Wrote index.ts`);

// 9. Verify types.ts exists
const typesPath = path.join(SHARD_DIR, 'types.ts');
if (!fs.existsSync(typesPath)) {
  console.error('WARNING: types.ts not found — please create it');
}

// 10. Update the [slug]/page.tsx to import from shards
const newPageContent = `import { notFound } from 'next/navigation';
import IndividualProfileView from '@/components/individuals/IndividualProfileView';
import individualData from '@/data/individuals';

// Generate static params for all individuals at build time
export async function generateStaticParams() {
 return Object.keys(individualData).map((slug) => ({
 slug,
 }));
}

interface PageProps {
 params: Promise<{ slug: string }>;
}

export default async function IndividualDetailPage({ params }: PageProps) {
 const { slug } = await params;
 const individual = individualData[slug];

 if (!individual) {
 notFound();
 }

 return <IndividualProfileView individual={individual} />;
}
`;

// Backup current page.tsx first
const backupDir = path.join(__dirname, 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
const backupPath = path.join(backupDir, `page.tsx.pre-shard.${Date.now()}.bak`);
fs.copyFileSync(SOURCE, backupPath);
console.log(`\n  Backed up original to ${path.basename(backupPath)}`);

// Write new page.tsx
fs.writeFileSync(SOURCE, newPageContent, 'utf8');
console.log(`  Updated ${SOURCE}`);

// 11. Summary
console.log('\n═══════════════════════════════════════════════════');
console.log(`  MIGRATION COMPLETE`);
console.log(`  ${totalWritten} profiles → ${shards.size} shard files`);
console.log(`  Old file: ${(Buffer.byteLength(content) / 1024 / 1024).toFixed(2)} MB`);

// Calculate new total size
let newTotal = 0;
for (const letter of existingLetters) {
  const p = path.join(SHARD_DIR, `${letter}.ts`);
  if (fs.existsSync(p)) newTotal += fs.statSync(p).size;
}
console.log(`  New shards: ${(newTotal / 1024 / 1024).toFixed(2)} MB total`);
console.log('═══════════════════════════════════════════════════');
