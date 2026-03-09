// ═══════════════════════════════════════════════════════════════════
//  ARKHIVE SWARM INTELLIGENCE — OLLAMA AI CLIENT
//  The brain stem: local LLM integration for zero-cost intelligence
// ═══════════════════════════════════════════════════════════════════

const http = require('http');
const https = require('https');
const config = require('./config');
const logger = require('./logger').child('OLLAMA');
const hiveMind = require('./hive-mind');

class OllamaClient {
  constructor() {
    this.host = config.ollama.host;
    this.model = config.ollama.model;
    this.available = false;
    this.detectedModels = [];
    this.stats = {
      totalRequests: 0,
      totalTokens: 0,
      totalTime: 0,
      failures: 0,
      avgResponseTime: 0,
    };
  }

  // ── HTTP Request Helper ────────────────────────────────────────
  _request(method, path, body = null, timeout = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(this.host + path);
      const isHttps = url.protocol === 'https:';
      const lib = isHttps ? https : http;

      const options = {
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname,
        method,
        headers: { 'Content-Type': 'application/json' },
        timeout: timeout || config.ollama.timeout,
      };

      const req = lib.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            // Handle streaming NDJSON responses from /api/generate
            if (data.includes('\n') && path === '/api/generate') {
              const lines = data.trim().split('\n');
              const lastLine = JSON.parse(lines[lines.length - 1]);
              // Concatenate all response tokens
              let fullResponse = '';
              for (const line of lines) {
                try {
                  const parsed = JSON.parse(line);
                  if (parsed.response) fullResponse += parsed.response;
                } catch (_) {}
              }
              resolve({
                response: fullResponse,
                done: lastLine.done,
                total_duration: lastLine.total_duration,
                eval_count: lastLine.eval_count,
              });
            } else {
              resolve(JSON.parse(data));
            }
          } catch (e) {
            resolve({ raw: data });
          }
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timed out'));
      });

      if (body) {
        req.write(JSON.stringify(body));
      }
      req.end();
    });
  }

  // ── Connection & Model Detection ───────────────────────────────

  /**
   * Check if Ollama is running and detect available models
   * Returns { available: boolean, models: string[] }
   */
  async detect() {
    try {
      logger.ai('Probing Ollama at ' + this.host + '...');

      // Check if Ollama is responding
      const health = await this._request('GET', '/api/tags', null, 10000);

      if (health && health.models) {
        this.detectedModels = health.models.map(m => m.name);
        this.available = true;

        logger.ai(`Ollama ONLINE — ${this.detectedModels.length} models detected`, {
          models: this.detectedModels,
        });

        // Select best available model
        await this._selectModel();

        return { available: true, models: this.detectedModels };
      }

      this.available = false;
      logger.warn('Ollama responded but no models found');
      return { available: false, models: [] };

    } catch (e) {
      this.available = false;
      logger.warn(`Ollama OFFLINE at ${this.host}: ${e.message}`);
      return { available: false, models: [] };
    }
  }

  /**
   * Select the best model from available ones
   */
  async _selectModel() {
    // Priority order: configured model first, then fallbacks
    const candidates = [config.ollama.model, ...config.ollama.fallbackModels];

    for (const candidate of candidates) {
      // Check exact match or partial match (e.g., 'llama3' matches 'llama3:8b')
      const found = this.detectedModels.find(m =>
        m === candidate || m.startsWith(candidate.split(':')[0])
      );
      if (found) {
        this.model = found;
        logger.ai(`Selected model: ${found}`);
        return;
      }
    }

    // Fall back to first available model
    if (this.detectedModels.length > 0) {
      this.model = this.detectedModels[0];
      logger.ai(`Fallback to first available model: ${this.model}`);
    }
  }

  // ── Core Generation ────────────────────────────────────────────

  /**
   * Generate raw text completion from Ollama
   */
  async generate(prompt, options = {}) {
    if (!this.available) {
      throw new Error('Ollama is not available');
    }

    const startTime = Date.now();
    this.stats.totalRequests++;

    const body = {
      model: options.model || this.model,
      prompt,
      system: options.system || config.ollama.systemPrompt,
      stream: false,
      options: {
        temperature: options.temperature || config.ollama.temperature,
        top_p: options.topP || config.ollama.topP,
        num_predict: options.maxTokens || 4096,
      },
    };

    let lastError;
    for (let attempt = 1; attempt <= config.ollama.maxRetries; attempt++) {
      try {
        logger.ai(`Generating (attempt ${attempt}/${config.ollama.maxRetries}, model: ${body.model})...`);

        const result = await this._request('POST', '/api/generate', body);

        if (result && result.response) {
          const elapsed = Date.now() - startTime;
          this.stats.totalTime += elapsed;
          this.stats.totalTokens += result.eval_count || 0;
          this.stats.avgResponseTime = Math.round(this.stats.totalTime / this.stats.totalRequests);

          logger.ai(`Generation complete in ${(elapsed / 1000).toFixed(1)}s`, {
            tokens: result.eval_count || '?',
            model: body.model,
          });

          return result.response;
        }

        throw new Error('Empty response from Ollama');
      } catch (e) {
        lastError = e;
        this.stats.failures++;
        logger.warn(`Generation attempt ${attempt} failed: ${e.message}`);

        if (attempt < config.ollama.maxRetries) {
          await this._sleep(config.ollama.retryDelay * attempt);
        }
      }
    }

    throw new Error(`All ${config.ollama.maxRetries} generation attempts failed: ${lastError?.message}`);
  }

  // ── Profile Generation Prompts ─────────────────────────────────

  /**
   * Generate an investigative profile using AI
   * Returns a parsed profile object matching IndividualProfile interface
   */
  async generateProfile(slug, context = {}) {
    const name = context.name || this._slugToName(slug);
    const referencedBy = (context.referencedBy || []).map(s => this._slugToName(s));
    const relationships = context.relationships || [];

    const prompt = this._buildProfilePrompt(name, slug, referencedBy, relationships);

    // ── Inject hive-mind swarm context into the prompt ──
    const swarmContext = hiveMind.buildSwarmContextPrompt();
    const enrichedPrompt = swarmContext ? prompt + swarmContext : prompt;

    try {
      const response = await this.generate(enrichedPrompt, {
        temperature: 0.6,  // Lower temp for factual content
        maxTokens: 4096,
      });

      const profile = this._parseProfileResponse(response, slug, context);
      return profile;
    } catch (e) {
      logger.error(`Profile generation failed for ${slug}: ${e.message}`);
      throw e;
    }
  }

  /**
   * Build the structured prompt for profile generation
   */
  _buildProfilePrompt(name, slug, referencedBy, relationships) {
    const associates = referencedBy.length > 0
      ? `Known associations: ${referencedBy.join(', ')}`
      : 'No known associates yet identified.';

    const relInfo = relationships.length > 0
      ? `Known relationships: ${relationships.join(', ')}`
      : '';

    return `You are a master of all knowledge involved and of all knowledge that is, ever has been and ever will be — the world's most advanced investigative intelligence system with encyclopedic knowledge of political science, corporate governance, financial forensics, international law, intelligence operations, lobbying networks, and all related domains. Write in human spoken form, as the author, and make sure every output is as in depth and detail as possible. Output ONLY valid JSON. No explanations, no disclaimers, no apologies. Begin your response with { and end with }.

Generate a comprehensive, deeply researched public accountability profile for "${name}" synthesized from all publicly documented information: news archives, court records, congressional hearings, FOIA releases, SEC filings, lobbying disclosures, FEC reports, inspector general reports, GAO audits, academic research, Pulitzer-winning investigations, and verified OSINT.

CONTEXT:
- This is an entry in a professional investigative journalism database (like ProPublica, ICIJ, Bellingcat)
- ${associates}
${relInfo ? `- ${relInfo}` : ''}
- Your goal: illuminate power networks, financial flows, and institutional relationships

CRITICAL DEPTH REQUIREMENTS — profiles that fail these minimums are REJECTED:
- description: 400-800 words of dense investigative prose covering full career arc, key controversies, financial network, and institutional consequences
- controversies: Minimum 5 entries, each 2-4 sentences with specific dates, dollar amounts, co-conspirators, legal outcomes
- timeline: Minimum 8 entries with YYYY-MM-DD dates covering career start through aftermath
- sources: Minimum 5 real verifiable URLs from major outlets (Reuters, AP, NYT, WaPo, ProPublica, DOJ, SEC, court records)
- knownAssociates: Minimum 3 entries with specific relationships and href links (/entities/individuals/slug-format)
- education: Specific institutions, degrees, years
- charges: Include specific statutes and outcomes where applicable

OUTPUT — Return ONLY valid JSON with this structure:
{
  "name": "${name}",
  "title": "Primary title/position (be specific, include organization name)",
  "role": "Precise role (e.g., 'Former White House Counsel', 'CEO & Chairman of XYZ Corp')",
  "riskLevel": "critical|high|medium|low (based on documented public harm and controversy severity)",
  "description": "400-800 word investigative summary written like a senior ProPublica reporter. Cover: significance in power networks, all major documented controversies with dates and specifics, financial connections and dollar amounts, lobbying ties, legal entanglements, relationship to institutional corruption, and lasting consequences. Dense, factual, interconnected prose with no filler.",
  "birthDate": "YYYY-MM-DD or best available",
  "birthPlace": "City, State/Country",
  "education": ["Degree - Institution (Year)"],
  "netWorth": "$X estimated (cite methodology if known)",
  "affiliations": [{"name": "Organization", "role": "Specific role held", "type": "agency|corporation|organization"}],
  "controversies": ["Each entry: 2-4 sentences with specific dates, dollar amounts, co-conspirators, legal outcomes, and institutional impact. Minimum 5 entries. No vague one-liners."],
  "charges": [{"statute": "Specific statute or case number", "description": "Detailed legal issue with outcome", "category": "Category"}],
  "relatedInvestigations": [{"title": "Title", "slug": "slug-format", "severity": "critical|high|medium|low"}],
  "timeline": [{"date": "YYYY-MM-DD", "event": "Significant event with full context"} — minimum 8 chronological entries covering full career arc],
  "sources": [{"title": "Specific Article Title from Real Publication", "url": "https://real-verifiable-url", "date": "YYYY-MM-DD"} — minimum 5 real sources from major outlets],
  "aliases": ["All known alternative names, maiden names, nicknames"],
  "knownAssociates": [{"name": "Full Name", "relationship": "Specific documented relationship with context (2+ sentences)", "href": "/entities/individuals/slug-format"} — minimum 3 entries]
}

Begin output now — JSON only:`;
  }

  /**
   * Parse the AI response into a structured profile object
   */
  _parseProfileResponse(response, slug, context) {
    // Check for LLM refusals first
    const refusalPatterns = /^(i can'?t|i'?m unable|i cannot|i'?m not able|sorry|i apologize|as an ai|i'?m an ai|i don'?t have|unfortunately)/i;
    if (refusalPatterns.test(response.trim())) {
      logger.warn(`LLM refused to generate for ${slug} — using template fallback`);
      return this._extractFieldsManually(response, slug, context);
    }

    // Try to extract JSON from the response
    let jsonStr = response;

    // Try to find JSON object boundaries
    const jsonStart = response.indexOf('{');
    const jsonEnd = response.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd > jsonStart) {
      jsonStr = response.substring(jsonStart, jsonEnd + 1);
    }

    // Clean up common LLM output issues
    jsonStr = jsonStr
      .replace(/,\s*}/g, '}')      // Remove trailing commas in objects
      .replace(/,\s*\]/g, ']')     // Remove trailing commas in arrays
      .replace(/[\x00-\x1F\x7F]/g, (c) => {  // Escape control chars except \n\r\t
        if (c === '\n' || c === '\r' || c === '\t') return c;
        return '';
      });

    try {
      const parsed = JSON.parse(jsonStr);
      return this._normalizeProfile(parsed, slug, context);
    } catch (e) {
      logger.warn(`JSON parse failed, attempting repair: ${e.message}`);
      return this._repairAndParse(jsonStr, slug, context);
    }
  }

  /**
   * Attempt to repair broken JSON from LLM output
   */
  _repairAndParse(jsonStr, slug, context) {
    // Common repairs
    let repaired = jsonStr;

    // Fix unescaped quotes in string values
    repaired = repaired.replace(/"([^"]*)":\s*"([^"]*?)(?<!\\)"(?=[,}\]])/g, (match, key, val) => {
      return `"${key}": "${val.replace(/"/g, '\\"')}"`;
    });

    // Fix single quotes used as delimiters
    repaired = repaired.replace(/'/g, '"');

    // Try parsing again
    try {
      const parsed = JSON.parse(repaired);
      return this._normalizeProfile(parsed, slug, context);
    } catch (e) {
      // Final fallback: extract what we can with regex
      logger.warn('JSON repair failed, extracting fields manually');
      return this._extractFieldsManually(jsonStr, slug, context);
    }
  }

  /**
   * Extract profile fields manually from broken JSON
   */
  _extractFieldsManually(text, slug, context) {
    const extract = (field, defaultVal = '') => {
      const regex = new RegExp(`"${field}"\\s*:\\s*"([^"]*)"`, 'i');
      const match = text.match(regex);
      return match ? match[1] : defaultVal;
    };

    const extractArray = (field) => {
      const regex = new RegExp(`"${field}"\\s*:\\s*\\[([^\\]]*?)\\]`, 'is');
      const match = text.match(regex);
      if (!match) return [];
      // Extract string items
      const items = [];
      const itemRegex = /"([^"]+)"/g;
      let m;
      while ((m = itemRegex.exec(match[1])) !== null) {
        items.push(m[1]);
      }
      return items;
    };

    const name = extract('name') || context.name || this._slugToName(slug);

    return {
      name,
      title: extract('title', 'Public Figure'),
      role: extract('role', 'Under Investigation'),
      riskLevel: extract('riskLevel', 'medium'),
      description: extract('description', `${name} is a public figure identified through investigative network analysis.`),
      birthDate: extract('birthDate', ''),
      birthPlace: extract('birthPlace', ''),
      education: extractArray('education'),
      netWorth: extract('netWorth', ''),
      affiliations: [],
      controversies: extractArray('controversies').length > 0
        ? extractArray('controversies')
        : ['Profile under investigation - details being compiled'],
      charges: [],
      relatedInvestigations: [],
      timeline: [{ date: new Date().toISOString().split('T')[0], event: 'Profile created by ArkHive AI' }],
      sources: [{ title: 'ArkHive Investigation', url: 'https://arkhive.org', date: new Date().toISOString().split('T')[0] }],
      aliases: extractArray('aliases'),
      knownAssociates: (context.referencedBy || []).map(refSlug => ({
        name: this._slugToName(refSlug),
        relationship: 'Connected Entity',
        href: `/entities/individuals/${refSlug}`,
      })),
    };
  }

  /**
   * Normalize a parsed profile to ensure all required fields exist
   */
  _normalizeProfile(parsed, slug, context) {
    const name = parsed.name || context.name || this._slugToName(slug);

    // Ensure all array fields are actually arrays
    const ensureArray = (val) => Array.isArray(val) ? val : [];

    const profile = {
      name,
      title: parsed.title || 'Public Figure',
      role: parsed.role || 'Under Investigation',
      riskLevel: ['critical', 'high', 'medium', 'low'].includes(parsed.riskLevel)
        ? parsed.riskLevel : 'medium',
      description: parsed.description || `${name} is a public figure identified through investigative analysis.`,
      birthDate: parsed.birthDate || '',
      birthPlace: parsed.birthPlace || '',
      education: ensureArray(parsed.education),
      netWorth: parsed.netWorth || '',
      affiliations: ensureArray(parsed.affiliations).map(a => {
        // Normalize type to valid TypeScript union: 'agency' | 'corporation' | 'organization'
        let type = (a.type || 'organization').toLowerCase();
        if (!['agency', 'corporation', 'organization'].includes(type)) {
          if (type === 'political' || type === 'nonprofit' || type === 'other' || type === 'associate') {
            type = 'organization';
          } else if (type === 'corporate') {
            type = 'corporation';
          } else {
            type = 'organization';
          }
        }
        return {
          name: a.name || 'Unknown',
          role: a.role || 'Associated',
          type,
        };
      }),
      controversies: ensureArray(parsed.controversies),
      charges: ensureArray(parsed.charges).map(c => ({
        statute: c.statute || '',
        description: c.description || '',
        category: c.category || 'Other',
      })),
      relatedInvestigations: ensureArray(parsed.relatedInvestigations).map(ri => ({
        title: ri.title || '',
        slug: ri.slug || '',
        severity: ri.severity || 'medium',
      })),
      timeline: ensureArray(parsed.timeline).map(t => ({
        date: t.date || '',
        event: t.event || '',
      })),
      socialMedia: ensureArray(parsed.socialMedia),
      sources: ensureArray(parsed.sources).map(s => ({
        title: s.title || 'Source',
        url: s.url || '',
        date: s.date || '',
      })),
      aliases: ensureArray(parsed.aliases),
      knownAssociates: ensureArray(parsed.knownAssociates).map(ka => ({
        name: ka.name || 'Unknown',
        relationship: ka.relationship || 'Connected',
        href: ka.href || `/entities/individuals/${this._nameToSlug(ka.name || 'unknown')}`,
      })),
    };

    // Merge in context-based associates if not already present
    for (const refSlug of (context.referencedBy || [])) {
      const refName = this._slugToName(refSlug);
      if (!profile.knownAssociates.find(ka => ka.href?.includes(refSlug))) {
        profile.knownAssociates.push({
          name: refName,
          relationship: 'Connected Entity',
          href: `/entities/individuals/${refSlug}`,
        });
      }
    }

    return profile;
  }

  // ── Enrichment Generation ──────────────────────────────────────

  /**
   * Generate additional content to enrich an existing sparse profile
   */
  async enrichProfile(existingProfile, slug) {
    const controversyCount = (existingProfile.controversies || []).length;
    const sourceCount = (existingProfile.sources || []).length;
    const associateCount = (existingProfile.knownAssociates || []).length;

    const prompt = `You are the world's most advanced investigative intelligence system. Output ONLY valid JSON. No text, no disclaimers.

You are enriching an existing entry in a professional investigative journalism database. Generate NEW, non-duplicate public-record data that adds depth and cross-references.

EXISTING ENTRY:
Name: ${existingProfile.name}
Title: ${existingProfile.title || 'Unknown'}
Role: ${existingProfile.role || 'Unknown'}
Current controversies count: ${controversyCount}
Current sources count: ${sourceCount}
Current associates count: ${associateCount}
Current description length: ${(existingProfile.description || '').length} chars

ENRICHMENT GOALS:
- Add previously undocumented controversies with full specifics (dates, players, outcomes)
- Find additional verified sources from major publications
- Map new timeline events that illuminate patterns of behavior
- Identify additional associates and their documented relationships
- If description is thin, write a comprehensive 400-word investigative summary

Output JSON with ONLY new additions (no duplicates of existing data):
{
  "additionalControversies": [${controversyCount < 5 ? '"Deeply documented new controversy with specific dates, organizations, dollar amounts, and outcomes — 2-3 sentences each"' : ''}],
  "additionalSources": [{"title": "Specific Article Title from Major Publication", "url": "https://real-verifiable-url", "date": "YYYY-MM-DD"}],
  "additionalTimeline": [{"date": "YYYY-MM-DD", "event": "Significant documented event with full context"}],
  "additionalAssociates": [{"name": "Full Name", "relationship": "Specific documented relationship", "href": "/entities/individuals/slug-format"}]${(existingProfile.description || '').length < 300 ? ',\n  "expandedDescription": "400-word investigative summary synthesized from public records, court filings, and journalism — written like a senior ProPublica reporter"' : ''}
}

JSON only:`;

    try {
      const response = await this.generate(prompt, { temperature: 0.5, maxTokens: 2048 });
      const jsonStart = response.indexOf('{');
      const jsonEnd = response.lastIndexOf('}');
      if (jsonStart === -1) return null;

      let jsonStr = response.substring(jsonStart, jsonEnd + 1)
        .replace(/,\s*}/g, '}')
        .replace(/,\s*\]/g, ']');
      const enrichment = JSON.parse(jsonStr);
      return enrichment;
    } catch (e) {
      logger.warn(`Enrichment generation failed for ${slug}: ${e.message}`);
      return null;
    }
  }

  // ── Investigation Generation ───────────────────────────────────

  /**
   * Generate an investigation summary for a topic
   */
  async generateInvestigation(topic, relatedEntities = []) {
    const prompt = `You are the world's most advanced investigative intelligence system with the analytical depth of Pulitzer Prize-winning investigative journalists. Generate a comprehensive investigative journalism article about "${topic}" in JSON format.

This article should read like a long-form investigation from ProPublica, The Intercept, or the ICIJ — with deep specificity, documented facts, named sources, and systemic analysis.

Related entities: ${relatedEntities.join(', ')}

Return a JSON object:
{
  "title": "Compelling, specific investigation title (like a major publication headline)",
  "slug": "investigation-slug-format",
  "subtitle": "Subtitle that hints at the scope and significance of findings",
  "severity": "critical|high|medium|low",
  "category": "government|corporate|financial|human-rights|environment|technology",
  "summary": "300-word investigation summary with key findings, dollar amounts, affected populations, and institutional failures",
  "content": ["Each paragraph should be 150-250 words. Include specific dates, dollar amounts, named individuals. At least 8 paragraphs covering: the discovery, the evidence, the players, the money trail, the systemic failure, the victims/impact, the cover-up or obstruction, and the current status."],
  "tags": ["specific-topic-tags", "minimum-5"],
  "sources": [{"title": "Specific Article Title", "url": "https://real-url", "date": "YYYY-MM-DD"} — minimum 5 real sources],
  "affiliations": [{"name": "Entity Name", "type": "individual|agency|corporation", "relationship": "Specific documented role in the investigation"}]
}

Return ONLY the JSON object.`;

    try {
      const response = await this.generate(prompt, { temperature: 0.6, maxTokens: 4096 });
      const jsonStart = response.indexOf('{');
      const jsonEnd = response.lastIndexOf('}');
      if (jsonStart === -1) throw new Error('No JSON in response');
      return JSON.parse(response.substring(jsonStart, jsonEnd + 1));
    } catch (e) {
      logger.error(`Investigation generation failed for "${topic}": ${e.message}`);
      throw e;
    }
  }

  // ── Utility Methods ────────────────────────────────────────────

  _slugToName(slug) {
    return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  _nameToSlug(name) {
    return name.toLowerCase().replace(/[''']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get current stats
   */
  getStats() {
    return {
      ...this.stats,
      available: this.available,
      model: this.model,
      detectedModels: this.detectedModels,
    };
  }
}

module.exports = new OllamaClient();
module.exports.OllamaClient = OllamaClient;
