import fs from 'fs';
import path from 'path';

const DIR = path.resolve('src/data/investigations');

// ── FILLER SOURCE TITLES (exact match) ──────────────────────────────────────
const FILLER_TITLES = new Set([
  'ProPublica Investigation Database',
  'SEC Litigation Releases',
  'SEC Litigation Releases: Crisis-Related Enforcement Actions',
  'FDA Enforcement Actions',
  'SEC EDGAR Filings',
  'DOJ Civil Rights Division',
  'DOJ Civil Rights Division Reports',
  'EPA Enforcement Actions',
  'National Security Archive',
  'Human Rights Watch Reports',
  'Congressional Research Service Reports',
  'Congressional Research Service',
  'FTC Consumer Protection',
  'DOJ Press Releases',
  'Brennan Center for Justice',
  'FBI Uniform Crime Reports',
  'HHS OIG Reports',
  'Department of Labor Reports',
  'Columbia Journalism Review',
  'Consumer Financial Protection Bureau',
]);

// ── Pattern: "Xxx Records" (auto-generated filler) ─────────────────────────
const RECORDS_PATTERN = /^[A-Za-z]+ Records$/;

// ── GENERIC AFFILIATION RELATIONSHIPS ───────────────────────────────────────
const GENERIC_RELATIONSHIPS = new Set([
  'Key figure',
  'Related entity',
  'Subject of investigation',
]);

// ── Helpers ─────────────────────────────────────────────────────────────────

function isFiller(title) {
  return FILLER_TITLES.has(title) || RECORDS_PATTERN.test(title);
}

/**
 * Process one .ts file:
 *  1. Remove filler source objects from sources arrays
 *  2. Remove self-referential affiliation objects
 *  3. Fix the 2028 future-date timeline entries
 *  4. Clean up trailing commas / blank lines
 */
function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf-8');
  let lines = original.split(/\r?\n/);

  let changed = false;
  let fillerRemoved = 0;
  let affRemoved = 0;
  let futureFixed = 0;

  // ── Pass 1: Remove filler sources ────────────────────────────────────
  // Strategy: Track depth inside sources: [...] blocks.
  // Accumulate object text, check title, decide to keep or drop.

  let result = [];
  let inSourcesArray = false;
  let bracketDepth = 0;
  let objectLines = [];
  let inObject = false;
  let objectDepth = 0;
  let sourcesArrayStart = -1;
  let sourcesEntries = [];  // [{lines: [...], isFiller: bool}]
  let sourcesArrayLines = []; // raw lines inside the array (not including the [ and ] lines themselves)

  // Similarly for affiliations
  let inAffArray = false;
  let affBracketDepth = 0;
  let affObjectLines = [];
  let affInObject = false;
  let affObjectDepth = 0;
  let affEntries = [];

  // We'll do two passes: one for sources, one for affiliations,
  // then a final pass for future dates

  // ── Sources pass ─────────────────────────────────────────────────────
  result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!inSourcesArray) {
      // Detect start of sources array
      if (/sources:\s*\[/.test(line)) {
        inSourcesArray = true;
        bracketDepth = 0;
        objectLines = [];
        inObject = false;
        sourcesEntries = [];

        // Count opening brackets on this line
        for (const ch of line) {
          if (ch === '[') bracketDepth++;
          if (ch === ']') bracketDepth--;
        }

        // If the array opens and closes on the same line, skip processing
        if (bracketDepth <= 0) {
          inSourcesArray = false;
          result.push(line);
          continue;
        }

        result.push(line); // push the "sources: [" line
        continue;
      }
      result.push(line);
      continue;
    }

    // We're inside a sources array
    // Track brackets
    for (const ch of line) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }

    if (bracketDepth <= 0) {
      // Array is closing
      // Process accumulated entries - decide what to keep
      const kept = [];
      const fillerEntries = [];
      for (const entry of sourcesEntries) {
        if (entry.isFiller) {
          fillerEntries.push(entry);
        } else {
          kept.push(entry);
        }
      }

      // If removing all filler would leave 0 sources, keep the first filler
      let toOutput;
      if (kept.length === 0 && fillerEntries.length > 0) {
        toOutput = [fillerEntries[0]];
        fillerRemoved += fillerEntries.length - 1;
      } else {
        toOutput = kept;
        fillerRemoved += fillerEntries.length;
      }

      if (fillerEntries.length > 0) changed = true;

      // Output kept entries
      for (let j = 0; j < toOutput.length; j++) {
        const entry = toOutput[j];
        for (const eLine of entry.lines) {
          result.push(eLine);
        }
      }

      // Push the closing line
      result.push(line);
      inSourcesArray = false;
      continue;
    }

    // Still inside array - accumulate object lines
    if (!inObject) {
      if (trimmed.startsWith('{')) {
        inObject = true;
        objectDepth = 0;
        objectLines = [line];
        for (const ch of line) {
          if (ch === '{') objectDepth++;
          if (ch === '}') objectDepth--;
        }
        if (objectDepth <= 0) {
          // Single-line object
          inObject = false;
          const fullText = objectLines.join('\n');
          const titleMatch = fullText.match(/title:\s*'([^']+)'/);
          const title = titleMatch ? titleMatch[1] : '';
          sourcesEntries.push({ lines: [...objectLines], isFiller: isFiller(title) });
          objectLines = [];
        }
        continue;
      }
      // Blank/whitespace line between entries — skip them (we'll regenerate spacing)
      continue;
    }

    // Inside an object
    objectLines.push(line);
    for (const ch of line) {
      if (ch === '{') objectDepth++;
      if (ch === '}') objectDepth--;
    }
    if (objectDepth <= 0) {
      inObject = false;
      const fullText = objectLines.join('\n');
      const titleMatch = fullText.match(/title:\s*'([^']+)'/);
      const title = titleMatch ? titleMatch[1] : '';
      sourcesEntries.push({ lines: [...objectLines], isFiller: isFiller(title) });
      objectLines = [];
    }
  }

  lines = result;

  // ── Affiliations pass ────────────────────────────────────────────────
  result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!inAffArray) {
      if (/affiliations:\s*\[/.test(line)) {
        inAffArray = true;
        affBracketDepth = 0;
        affObjectLines = [];
        affInObject = false;
        affEntries = [];

        for (const ch of line) {
          if (ch === '[') affBracketDepth++;
          if (ch === ']') affBracketDepth--;
        }

        if (affBracketDepth <= 0) {
          inAffArray = false;
          result.push(line);
          continue;
        }

        result.push(line);
        continue;
      }
      result.push(line);
      continue;
    }

    for (const ch of line) {
      if (ch === '[') affBracketDepth++;
      if (ch === ']') affBracketDepth--;
    }

    if (affBracketDepth <= 0) {
      // Process accumulated affiliation entries
      for (const entry of affEntries) {
        if (entry.isGeneric) {
          affRemoved++;
          changed = true;
        } else {
          for (const eLine of entry.lines) {
            result.push(eLine);
          }
        }
      }
      result.push(line);
      inAffArray = false;
      continue;
    }

    if (!affInObject) {
      if (trimmed.startsWith('{')) {
        affInObject = true;
        affObjectDepth = 0;
        affObjectLines = [line];
        for (const ch of line) {
          if (ch === '{') affObjectDepth++;
          if (ch === '}') affObjectDepth--;
        }
        if (affObjectDepth <= 0) {
          affInObject = false;
          const fullText = affObjectLines.join('\n');
          const relMatch = fullText.match(/relationship:\s*'([^']+)'/);
          const rel = relMatch ? relMatch[1] : '';
          affEntries.push({ lines: [...affObjectLines], isGeneric: GENERIC_RELATIONSHIPS.has(rel) });
          affObjectLines = [];
        }
        continue;
      }
      continue;
    }

    affObjectLines.push(line);
    for (const ch of line) {
      if (ch === '{') affObjectDepth++;
      if (ch === '}') affObjectDepth--;
    }
    if (affObjectDepth <= 0) {
      affInObject = false;
      const fullText = affObjectLines.join('\n');
      const relMatch = fullText.match(/relationship:\s*'([^']+)'/);
      const rel = relMatch ? relMatch[1] : '';
      affEntries.push({ lines: [...affObjectLines], isGeneric: GENERIC_RELATIONSHIPS.has(rel) });
      affObjectLines = [];
    }
  }

  lines = result;

  // ── Future dates pass ────────────────────────────────────────────────
  result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Fix timeline entries with date: '2028' and template text
    if (/date:\s*'2028'/.test(line) && /Continued developments in/.test(line)) {
      // Replace with a more reasonable date
      result.push(line.replace("date: '2028'", "date: '2024'").replace(
        /Continued developments in ([^']+) with new evidence emerging/,
        'Ongoing developments and continued investigative reporting'
      ));
      futureFixed++;
      changed = true;
    } else {
      result.push(line);
    }
  }

  lines = result;

  // ── Cleanup pass: fix trailing commas, double blanks ─────────────────
  // Remove trailing commas before ] (with possible whitespace/newlines between)
  let text = lines.join('\r\n');

  // Fix: comma followed by optional whitespace/newlines then ]
  text = text.replace(/,(\s*)\]/g, '$1]');

  // Remove consecutive blank lines (more than 1)
  text = text.replace(/(\r?\n){3,}/g, '\r\n\r\n');

  // Ensure CRLF
  text = text.replace(/\r?\n/g, '\r\n');

  // Ensure file ends with single newline
  text = text.replace(/\s+$/, '\r\n');

  if (changed) {
    fs.writeFileSync(filePath, text, 'utf-8');
  }

  return { fillerRemoved, affRemoved, futureFixed, changed };
}

// ── Main ────────────────────────────────────────────────────────────────────
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();

let totalFiller = 0;
let totalAff = 0;
let totalFuture = 0;
let filesChanged = 0;

for (const file of files) {
  const fullPath = path.join(DIR, file);
  const { fillerRemoved, affRemoved, futureFixed, changed } = processFile(fullPath);
  if (changed) {
    filesChanged++;
    console.log(`${file}: removed ${fillerRemoved} filler sources, ${affRemoved} generic affiliations, ${futureFixed} future dates`);
  }
  totalFiller += fillerRemoved;
  totalAff += affRemoved;
  totalFuture += futureFixed;
}

console.log(`\n── TOTAL ──`);
console.log(`Files changed: ${filesChanged}`);
console.log(`Filler sources removed: ${totalFiller}`);
console.log(`Generic affiliations removed: ${totalAff}`);
console.log(`Future dates fixed: ${totalFuture}`);
