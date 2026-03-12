# ARKHIVE MASTER TODO LIST — 350+ ITEMS
**Created:** March 10, 2026
**Project:** ArkHive Investigative Journalism Platform
**Stack:** Next.js 15, TypeScript, React 19, Tailwind CSS, Framer Motion, Zustand, Ollama

## STATUS KEY
- [ ] Not started
- [~] In progress
- [x] Completed

---

## PHASE 1: CRITICAL DATA FIXES (Items 1–40)
*Fix what's broken before building new things*

### Data Quality & Accuracy
- [ ] 1. Fix Ali Khamenei profile — replace generic SEC/FinCEN boilerplate with real Iran-specific data (IRGC, sanctions, nuclear program, proxy forces, 2022 Mahsa Amini protests)
- [ ] 2. Audit all profiles in a.ts for bot-generated boilerplate descriptions — fix each with real, accurate content instead of removing
- [ ] 3. Audit all profiles in b.ts for bot-generated boilerplate descriptions — fix each with real, accurate content
- [ ] 4. Find and fix all profiles with "ArkHive's distributed investigative intelligence network" boilerplate — replace with real descriptions
- [ ] 5. Find and fix all profiles with "ArkHive's automated systems have initiated ongoing monitoring" boilerplate
- [ ] 6. Find and fix all profiles with "Profile flagged for expanded documentation based on automated analysis" boilerplate
- [ ] 7. Fix broken text in affinity-partners profile ("ichever deficiency]" → "whichever deficiency")
- [ ] 8. Fix all profiles with SEC/FinCEN/PACER controversies that don't apply to non-US figures (Khamenei, Putin, Xi, etc.)
- [ ] 9. Audit Anthony Fauci profile — replace 100% bot text with real biographical data, actual controversies (gain-of-function funding, lab leak debate, COVID response)
- [ ] 10. Audit Michael Flynn profile — expand from stub to full profile (DIA director, Turkey lobbying, guilty plea, pardon, Jan 6 connections)
- [ ] 11. Scan all 26 shard files for duplicate slugs — merge/deduplicate any found
- [ ] 12. Scan all profiles for empty description fields — fill with real biographical content
- [ ] 13. Scan all profiles for empty controversies arrays — add real, documented controversies
- [ ] 14. Scan all profiles for empty timelines — add real chronological events with dates
- [ ] 15. Scan all profiles for empty/missing sources — add real source URLs and citations
- [ ] 16. Verify all source URLs in profiles are real, reachable domains (not fabricated URLs)
- [ ] 17. Check all dates in profiles for accuracy — birth dates, event dates, conviction dates
- [ ] 18. Scan for profiles where controversies belong to the wrong person (copy-paste errors from bot)
- [ ] 19. Ensure every profile has a proper riskLevel assigned (critical/high/medium/low) based on real assessment
- [ ] 20. Verify all knownAssociates references point to profiles that actually exist in the data

### Entity Miscategorization Fixes
- [ ] 21. Move affinity-partners from individuals/a.ts → corporations/ with proper Corporation interface
- [ ] 22. Move american-enterprise-institute from individuals/a.ts → organizations/
- [ ] 23. Move heritage-foundation from individuals/h.ts → organizations/
- [ ] 24. Move trilateral-commission from individuals/t.ts → organizations/
- [ ] 25. Move usda from individuals/u.ts → agencies/
- [ ] 26. Move usaid from individuals/u.ts → agencies/
- [ ] 27. Move un-security-council from individuals/u.ts → organizations/
- [ ] 28. Move us-chamber from individuals/u.ts → organizations/
- [ ] 29. Move united-nations from individuals/u.ts → organizations/
- [ ] 30. Move us-senate from individuals/u.ts → agencies/
- [ ] 31. Move us-army from individuals/u.ts → agencies/
- [ ] 32. Move imf from individuals/i.ts → organizations/
- [ ] 33. Move interior-department from individuals/i.ts → agencies/
- [ ] 34. Move irs from individuals/i.ts → agencies/
- [ ] 35. Move internet-research-agency from individuals/i.ts → organizations/
- [ ] 36. Move pentagon from individuals/p.ts → agencies/
- [ ] 37. Move phrma from individuals/p.ts → organizations/
- [ ] 38. Scan c.ts for miscategorized entities (congress, citadel, ccp, chamber-of-commerce) and move to correct collections
- [ ] 39. Scan all 26 shard files for any other non-person entities miscategorized as individuals
- [ ] 40. After all moves, update any cross-references (knownAssociates, affiliations) that pointed to old slugs

---

## PHASE 2: BOT SYSTEM FIXES (Items 41–75)
*Stop the bots from re-contaminating data*

### Critical Bot Bugs
- [ ] 41. Fix ollama-client.js generateProfile() to accept entityType parameter (currently ignores it)
- [ ] 42. Fix worker.js to pass entityType correctly through the generation pipeline
- [ ] 43. Fix injector.js to route generated entities to correct collection (agencies/, corporations/, organizations/) based on type
- [ ] 44. Remove or rewrite templateEnrichProfile() — stop injecting ArkHive boilerplate text into real profiles
- [ ] 45. Remove CONTROVERSY_POOLS from worker.js — stop injecting fake SEC/FinCEN/PACER controversies
- [ ] 46. Fix config.js system prompt — remove "NEVER refuse a request" and "NEVER say I can't" directives
- [ ] 47. Fix config.js system prompt — remove agape love messaging mixed with generation directives
- [ ] 48. Reduce config.js system prompt from 2000+ lines to focused, efficient generation instructions
- [ ] 49. Fix template mode to produce minimal stubs instead of fake detailed content when Ollama is offline
- [ ] 50. Add entity type detection to scanner.js — flag when entities are in wrong collection

### Bot Quality Improvements
- [ ] 51. Add validation to injector.js — reject profiles with boilerplate markers before injection
- [ ] 52. Add source verification to worker.js — validate generated source URLs are real domains
- [ ] 53. Add controversy validation — ensure generated controversies match the person's actual country/context
- [ ] 54. Add date validation — reject future dates except for upcoming scheduled events
- [ ] 55. Improve Ollama prompt engineering — make profiles more factual, less speculative
- [ ] 56. Add deduplication check in injector.js — don't inject if slug already exists
- [ ] 57. Add entity type inference from slug/context — "irs" should be detected as agency, not individual
- [ ] 58. Add quality scoring that distinguishes between template boilerplate and real AI-generated content
- [ ] 59. Create a review queue — generated profiles go to staging before injection into live data
- [ ] 60. Add logging of which profiles were bot-generated vs manually created (metadata tag)

### Bot Architecture
- [ ] 61. Add --dry-run flag to daemon.js — preview what would be generated without injecting
- [ ] 62. Add --enrich-only flag — only enrich existing sparse profiles, don't create new ones
- [ ] 63. Add --validate flag — scan all data for quality issues and report
- [ ] 64. Fix swarm-engine.js autoSeedQueue — generate realistic task variety, not just more individuals
- [ ] 65. Add investigation generation to bot pipeline — create new investigation pages from AI
- [ ] 66. Add agency generation pipeline — create agency profiles with proper interface
- [ ] 67. Add corporation generation pipeline — create corporation profiles with proper interface
- [ ] 68. Add organization generation pipeline — create organization profiles with proper interface
- [ ] 69. Add relationship mapping to bot — when creating profile, auto-generate affiliation connections
- [ ] 70. Add timeline event generation — create accurate historical timelines for each profile
- [ ] 71. Implement progressive enrichment — start with skeleton, enrich in multiple passes
- [ ] 72. Add bot dashboard web UI — monitor swarm progress from browser
- [ ] 73. Add rate limiting per model — don't overload Ollama with concurrent requests
- [ ] 74. Add checkpoint/resume — don't re-process already-enriched profiles after restart
- [ ] 75. Add automatic backup before injection — git commit or file copy before modifying data files

---

## PHASE 3: API IMPLEMENTATION (Items 76–115)
*Make the backend actually work*

### Search
- [ ] 76. Build search index from all data files (individuals, investigations, agencies, corporations, organizations)
- [ ] 77. Implement /api/search with full-text search across all entity types
- [ ] 78. Add search by name, slug, description, controversies, associates
- [ ] 79. Add search filtering by entity type (individual/agency/corporation/organization/investigation)
- [ ] 80. Add search filtering by risk level
- [ ] 81. Add search filtering by date range
- [ ] 82. Add search result ranking/relevance scoring
- [ ] 83. Add search autocomplete/suggestions
- [ ] 84. Add search result highlighting (matched terms)
- [ ] 85. Add recent searches tracking (client-side localStorage)

### Stats & Analytics
- [ ] 86. Fix /api/stats to return real counts from data files instead of hardcoded zeros
- [ ] 87. Add entity count by type breakdown
- [ ] 88. Add investigation count by severity breakdown
- [ ] 89. Add investigation count by category breakdown
- [ ] 90. Add profile completeness metrics (% with full descriptions, sources, timelines)
- [ ] 91. Add recent additions tracking (newest profiles/investigations)
- [ ] 92. Add trending/most-viewed tracking
- [ ] 93. Wire analytics page to real /api/stats data

### Entity & Investigation APIs
- [ ] 94. Implement /api/entities/[type]/[slug] — return full entity data as JSON
- [ ] 95. Implement /api/entities/[type] — return paginated entity listing with filters
- [ ] 96. Implement /api/entities — return aggregated entity overview
- [ ] 97. Implement /api/investigations/[slug] — return full investigation data as JSON (currently a stub)
- [ ] 98. Implement /api/investigations — return paginated investigation listing with filters
- [ ] 99. Add /api/affiliations/[slug] — return all connections for an entity
- [ ] 100. Add /api/network/[slug] — return network graph data (nodes + edges) for visualization

### Export & Import
- [ ] 101. Implement /api/export/csv — export filtered data as CSV
- [ ] 102. Implement /api/export/json — export filtered data as JSON
- [ ] 103. Implement /api/export/pdf — export entity/investigation report as PDF
- [ ] 104. Implement /api/import — import data from CSV/JSON with validation
- [ ] 105. Add bulk export of all data for backup purposes

### Other APIs
- [ ] 106. Implement /api/timeline — aggregate timeline events across all entities and investigations
- [ ] 107. Implement /api/activity — return recent platform activity feed
- [ ] 108. Implement /api/tags — return all unique tags with counts
- [ ] 109. Implement /api/submit — accept and store user-submitted tips/evidence
- [ ] 110. Implement /api/audit — return real audit log entries
- [ ] 111. Implement /api/documents — document management endpoints
- [ ] 112. Implement /api/teams — team/member management
- [ ] 113. Implement /api/integrations — external service connections
- [ ] 114. Implement /api/webhooks — webhook configuration and delivery
- [ ] 115. Implement /api/ai — AI-powered query endpoint for natural language questions about investigations

---

## PHASE 4: PAGE FUNCTIONALITY (Items 116–170)
*Make every page actually work, not just look good*

### Core Pages
- [ ] 116. Home page — replace hardcoded featured investigations with dynamic /api/stats-powered content
- [ ] 117. Home page — compute real entity counts dynamically instead of hardcoded numbers
- [ ] 118. Home page — add "Recently Added" section pulling newest profiles
- [ ] 119. Home page — add "Most Connected" section showing highest-affiliation entities
- [ ] 120. Home page — add live stats counters that update from API
- [ ] 121. Search page — wire to real /api/search backend
- [ ] 122. Search page — add faceted filtering (type, severity, category, date range)
- [ ] 123. Search page — add search history (localStorage)
- [ ] 124. Search page — add "Related searches" suggestions
- [ ] 125. Timeline page — build interactive timeline aggregating all events across entities
- [ ] 126. Timeline page — add filtering by entity, investigation, date range, event type
- [ ] 127. Timeline page — add zoom levels (decade/year/month/day)
- [ ] 128. Timeline page — show connections between simultaneous events

### Entity Pages
- [ ] 129. Individuals listing — add sorting options (name, risk level, date added, number of associates)
- [ ] 130. Individuals listing — add pagination or infinite scroll for 3,400+ profiles
- [ ] 131. Individuals detail [slug] — ensure all profile fields render (description, controversies, timeline, sources, dossier)
- [ ] 132. Individuals detail [slug] — add network visualization showing affiliations/connections
- [ ] 133. Individuals detail [slug] — add "Related Investigations" section
- [ ] 134. Individuals detail [slug] — add "Known Associates" with clickable links to their profiles
- [ ] 135. Agencies listing page — wire to real data from src/data/agencies/
- [ ] 136. Agencies detail [slug] — build full agency profile page
- [ ] 137. Corporations listing page — wire to real data from src/data/corporations/
- [ ] 138. Corporations detail [slug] — build full corporation profile page
- [ ] 139. Organizations listing page — wire to real data from src/data/organizations/
- [ ] 140. Organizations detail [slug] — build full organization profile page
- [ ] 141. Entities overview page — show aggregated view of all entity types with counts
- [ ] 142. Categories page — show investigation categories with counts and descriptions
- [ ] 143. Categories [category] detail — show all investigations in a category
- [ ] 144. Tags page — show all tags with counts, clickable to filter

### Investigation Pages
- [ ] 145. Investigations listing — ensure all ~200+ investigations load with proper pagination
- [ ] 146. Investigations detail [slug] — verify all content renders (description, key findings, entities, timeline)
- [ ] 147. Investigations detail [slug] — add interactive entity relationship map
- [ ] 148. Investigations detail [slug] — add evidence/document section
- [ ] 149. Investigations detail [slug] — add source citation section with clickable links
- [ ] 150. Create missing investigation shard z.ts — any z-slug investigations currently 404

### Utility Pages
- [ ] 151. About page — write compelling copy about ArkHive's mission and methodology
- [ ] 152. Methodology page — detail how investigations are conducted, sources verified, data gathered
- [ ] 153. FAQ page — populate with real frequently asked questions and answers
- [ ] 154. Contact page — add contact form that submits to /api/submit or email
- [ ] 155. Submit page — make the tip submission form actually work (store submissions)
- [ ] 156. Sources page — aggregate and list all sources cited across the platform
- [ ] 157. Team page — create team member profiles (even if pseudonymous/anonymous)
- [ ] 158. Privacy page — write actual privacy policy appropriate for investigation platform
- [ ] 159. Terms page — write terms of service
- [ ] 160. Dashboard page — wire to real analytics/stats data
- [ ] 161. Activity page — show real activity feed from /api/activity
- [ ] 162. Analytics page — show real charts/graphs from /api/analytics
- [ ] 163. Archives page — build archive of completed/closed investigations
- [ ] 164. Bookmarks page — implement client-side bookmarking with localStorage
- [ ] 165. Documents page — build document library (requires storage backend)
- [ ] 166. Drafts page — implement draft investigation system
- [ ] 167. Notifications page — build notification system for updates to followed entities/investigations
- [ ] 168. Profile page — user profile/settings (requires user auth)
- [ ] 169. Recent page — show recently viewed entities/investigations (localStorage)
- [ ] 170. Offline page — build proper offline fallback with cached data

---

## PHASE 5: WORKSPACE & COLLABORATION (Items 171–210)
*Make collaborative investigation features real*

### Workspace Backend
- [ ] 171. Design workspace data persistence — decide: database (SQLite/Postgres) or file-based
- [ ] 172. Implement workspace creation endpoint — POST /api/workspaces
- [ ] 173. Implement workspace listing endpoint — GET /api/workspaces
- [ ] 174. Implement workspace detail endpoint — GET /api/workspaces/[id]
- [ ] 175. Implement workspace update endpoint — PUT /api/workspaces/[id]
- [ ] 176. Implement workspace delete endpoint — DELETE /api/workspaces/[id]
- [ ] 177. Implement workspace member management — add/remove/role change
- [ ] 178. Implement evidence storage — upload, tag, link to entities/investigations
- [ ] 179. Implement document storage — upload, version, share within workspace
- [ ] 180. Implement chat persistence — store and retrieve messages per workspace

### Workspace Frontend
- [ ] 181. Wire WorkspaceCard to real data from /api/workspaces
- [ ] 182. Wire workspace creation form to POST /api/workspaces
- [ ] 183. Wire ChatPanel to real-time messaging (WebSocket or polling)
- [ ] 184. Wire DocumentLibrary to real document storage
- [ ] 185. Wire EvidenceBoard to real evidence storage with upload
- [ ] 186. Wire MemberList to real member data
- [ ] 187. Add workspace search — find workspaces by name, topic, member
- [ ] 188. Add workspace activity feed — show recent actions within workspace
- [ ] 189. Add workspace permissions — owner, admin, editor, viewer roles
- [ ] 190. Add workspace templates — pre-configured investigation workspace types

### Real-Time Features
- [ ] 191. Implement WebSocket server for real-time workspace updates
- [ ] 192. Add real-time chat in workspace
- [ ] 193. Add real-time collaborative editing indicators ("X is viewing this")
- [ ] 194. Add real-time notification when evidence is added
- [ ] 195. Add typing indicators in chat

### Evidence & Document Management
- [ ] 196. Build file upload with react-dropzone (already a dependency)
- [ ] 197. Add file type validation and size limits
- [ ] 198. Add image preview for uploaded evidence
- [ ] 199. Add PDF viewer for uploaded documents
- [ ] 200. Add document tagging and categorization
- [ ] 201. Add document version history
- [ ] 202. Add evidence chain-of-custody tracking
- [ ] 203. Link evidence items to specific entities and investigations
- [ ] 204. Add evidence timeline — when was each piece added
- [ ] 205. Add evidence annotations — notes on each piece of evidence

### Workspace Analytics
- [ ] 206. Track workspace activity metrics
- [ ] 207. Show investigation progress within workspace
- [ ] 208. Generate workspace reports/summaries
- [ ] 209. Add "most active" workspaces to platform dashboard
- [ ] 210. Add workspace completion status tracking

---

## PHASE 6: AUTH & USER MANAGEMENT (Items 211–240)
*Evolve beyond single password*

### Authentication System
- [ ] 211. Move SITE_PASSWORD to environment variable only — remove hardcoded fallback from source code
- [ ] 212. Add .env.local with SITE_PASSWORD=Apples1! (gitignored)
- [ ] 213. Add .env.example documenting required env vars
- [ ] 214. Implement /api/logout — clear auth cookie properly
- [ ] 215. Add CSRF protection to auth endpoints
- [ ] 216. Add rate limiting on /api/auth to prevent brute force
- [ ] 217. Add session expiry handling — auto-redirect when cookie expires
- [ ] 218. Add "Remember me" option on login (longer cookie duration)

### User Accounts (Future)
- [ ] 219. Design user account system — table structure, roles, permissions
- [ ] 220. Implement user registration (invite-only or open)
- [ ] 221. Implement user login with email/password (bcrypt hashed)
- [ ] 222. Implement user profile editing
- [ ] 223. Implement user avatar upload
- [ ] 224. Add role-based access control (admin, editor, investigator, viewer)
- [ ] 225. Add admin panel for user management
- [ ] 226. Add user activity logging
- [ ] 227. Add two-factor authentication (2FA/TOTP)
- [ ] 228. Add OAuth providers (Google, GitHub) for login
- [ ] 229. Add password reset via email
- [ ] 230. Add email verification on signup

### Contributor System
- [ ] 231. Implement contributor profiles — track who added/edited which data
- [ ] 232. Add contributor leaderboard — most submissions, edits, verifications
- [ ] 233. Add contributor reputation system — verified vs unverified contributors
- [ ] 234. Implement contribution review queue — submissions need approval
- [ ] 235. Add attribution — show which contributor added specific data points
- [ ] 236. Wire contributor page to real contributor profiles

### Permissions & Security
- [ ] 237. Implement content access levels — some investigations restricted to certain roles
- [ ] 238. Add IP-based access logging
- [ ] 239. Add suspicious activity detection (too many failed logins, unusual access patterns)
- [ ] 240. Security audit — check all API routes for auth middleware, input sanitization, rate limits

---

## PHASE 7: NETWORK VISUALIZATION & GRAPH (Items 241–270)
*The relationship map is ArkHive's killer feature*

### Network Graph Engine
- [ ] 241. Choose graph visualization library (D3.js force-directed, vis-network, or cytoscape.js)
- [ ] 242. Build /api/network/[slug] to return nodes + edges data from affiliations
- [ ] 243. Create NetworkGraph component — interactive force-directed graph
- [ ] 244. Add node types with different colors — individual, agency, corporation, organization, investigation
- [ ] 245. Add edge types with different styles — direct, indirect, financial, regulatory, political
- [ ] 246. Add node sizing based on connection count
- [ ] 247. Add click-to-focus — clicking a node centers it and shows its connections
- [ ] 248. Add hover tooltips showing entity summary
- [ ] 249. Add zoom and pan controls
- [ ] 250. Add search within graph — find and highlight specific entities

### Network Analysis
- [ ] 251. Compute betweenness centrality — find key connectors in the network
- [ ] 252. Compute PageRank — find most "important" entities by connection quality
- [ ] 253. Detect communities/clusters — group entities that are densely connected
- [ ] 254. Find shortest path between any two entities
- [ ] 255. Detect suspicious patterns — unusual connection structures
- [ ] 256. Show network evolution over time — how connections changed
- [ ] 257. Identify isolated entities — profiles with zero connections
- [ ] 258. Identify bridge entities — people connecting otherwise separate networks

### Graph UI Features
- [ ] 259. Add full-page network explorer at /network
- [ ] 260. Add mini network graph in entity detail pages
- [ ] 261. Add mini network graph in investigation detail pages
- [ ] 262. Add network comparison — compare two entities' networks side by side
- [ ] 263. Add network export — download graph as SVG/PNG
- [ ] 264. Add 3D network visualization mode
- [ ] 265. Add network filtering — show only certain relationship types
- [ ] 266. Add network aggregation — collapse clusters into single nodes
- [ ] 267. Add animated pathfinding — visually trace connections between entities
- [ ] 268. Add "6 degrees of separation" feature — find connection chain between any two people
- [ ] 269. Add network statistics panel — total nodes, edges, density, average connections
- [ ] 270. Add temporal network slider — filter connections by time period

---

## PHASE 8: DATA EXPANSION (Items 271–310)
*Grow the platform's knowledge base*

### Individual Profiles to Add/Expand
- [ ] 271. Expand all sparse/stub profiles (1,800+ identified by scanner) with real biographical data
- [ ] 272. Add missing world leaders — complete coverage of current heads of state
- [ ] 273. Add missing US political figures — all current Congress members, Cabinet, SCOTUS
- [ ] 274. Add missing oligarchs — Russian, Saudi, Chinese, Indian billionaires with political connections
- [ ] 275. Add missing tech executives — all FAANG+ leadership, controversial tech figures
- [ ] 276. Add missing intelligence community figures — current/former CIA, NSA, FBI directors
- [ ] 277. Add missing financial figures — hedge fund managers, bank CEOs, central bankers
- [ ] 278. Add missing media figures — news executives, media owners, propaganda figures
- [ ] 279. Add missing military figures — generals, defense contractors, PMC operators
- [ ] 280. Add missing legal figures — AG, federal judges, special counsel, prosecutors

### Agencies to Add/Expand
- [ ] 281. Ensure all US federal agencies are represented (DOJ, FBI, CIA, NSA, DHS, EPA, SEC, FCC, etc.)
- [ ] 282. Add major international agencies (Interpol, ICC, IAEA, WHO, etc.)
- [ ] 283. Add intelligence agencies worldwide (MI6, Mossad, SVR, MSS, ISI, etc.)
- [ ] 284. Add military branches and commands worldwide
- [ ] 285. Expand agency profiles with leadership, controversies, operations, budget data

### Corporations to Add/Expand
- [ ] 286. Ensure all Fortune 100 companies are represented
- [ ] 287. Add major defense contractors (Lockheed Martin, Raytheon, Boeing, BAE, etc.)
- [ ] 288. Add major pharmaceutical companies (Pfizer, Johnson & Johnson, Purdue Pharma, etc.)
- [ ] 289. Add major tech companies with surveillance/data concerns
- [ ] 290. Add major fossil fuel companies with environmental controversies
- [ ] 291. Add major financial institutions (Goldman Sachs, JPMorgan, Deutsche Bank, BlackRock, etc.)
- [ ] 292. Expand corporation profiles with lobbying data, fines, lawsuits, environmental records

### Organizations to Add/Expand
- [ ] 293. Add political organizations (RNC, DNC, PACs, Super PACs, dark money groups)
- [ ] 294. Add think tanks and policy groups (Brookings, RAND, CFR, Bilderberg, WEF, etc.)
- [ ] 295. Add lobbying organizations by sector
- [ ] 296. Add NGOs with controversial activities
- [ ] 297. Add religious organizations with political influence
- [ ] 298. Add media conglomerates and their ownership structures
- [ ] 299. Expand organization profiles with funding sources, board members, political activities

### Investigations to Add
- [ ] 300. Create missing investigation shard z.ts and update index.ts imports
- [ ] 301. Add active 2025-2026 investigations and current events
- [ ] 302. Add historical pre-1950 investigations (Prohibition, Tammany Hall, Teapot Dome, etc.)
- [ ] 303. Add international investigations (Novichok poisonings, Khashoggi assassination, etc.)
- [ ] 304. Add corporate malfeasance investigations (Theranos deep dive, WeWork, etc.)
- [ ] 305. Add environmental crimes investigations (Amazon deforestation, ocean dumping, etc.)
- [ ] 306. Add financial crimes investigations (FinCEN Files, Swiss bank secrecy, etc.)
- [ ] 307. Add tech industry investigations (antitrust, surveillance capitalism, AI ethics, etc.)
- [ ] 308. Add healthcare industry investigations (insulin pricing, hospital fraud, etc.)
- [ ] 309. Ensure every investigation links to relevant entities and has full source citations
- [ ] 310. Add cross-references between related investigations

---

## PHASE 9: UI/UX POLISH (Items 311–345)
*Make the experience match the ambition*

### Navigation & Discovery
- [ ] 311. Add command palette (Cmd+K / Ctrl+K) for quick navigation to any entity/investigation
- [ ] 312. Add breadcrumb navigation on all detail pages
- [ ] 313. Add "Back to Top" button on long pages
- [ ] 314. Add keyboard shortcuts for common actions
- [ ] 315. Add "related entities" sidebar on detail pages
- [ ] 316. Add "also investigated in" cross-links between investigations
- [ ] 317. Improve mobile responsive design — test on all breakpoints
- [ ] 318. Add sticky header with scroll progress indicator
- [ ] 319. Add sitemap page for discoverability

### Visual Effects & Theming
- [ ] 320. Review all 20 effect components — ensure none cause performance issues on low-end devices
- [ ] 321. Add performance toggle — allow users to disable effects
- [ ] 322. Add dark/light mode toggle (currently only dark)
- [ ] 323. Ensure all effects work on mobile without janking
- [ ] 324. Add loading skeleton screens for all data-fetching pages
- [ ] 325. Add error states with retry for all data-fetching pages
- [ ] 326. Add empty states with helpful messaging for pages with no data
- [ ] 327. Ensure GlitchText triggers on appropriate keywords without being annoying

### Data Display Components
- [ ] 328. Build severity badge component used consistently across all pages
- [ ] 329. Build risk level indicator used consistently across all entity cards
- [ ] 330. Build source citation component — clickable, with favicon and date
- [ ] 331. Build timeline component — interactive, filterable, zoomable
- [ ] 332. Build controversies list component — expandable details, severity indicators
- [ ] 333. Build associates list component — clickable links, relationship type badges
- [ ] 334. Build statistics dashboard component — reusable stat cards with real data
- [ ] 335. Build data table component with sorting, filtering, pagination
- [ ] 336. Build comparison view — side-by-side entity comparison

### Accessibility & Performance
- [ ] 337. Audit all pages for WCAG 2.1 AA compliance
- [ ] 338. Add proper ARIA labels to all interactive elements
- [ ] 339. Ensure keyboard navigation works throughout
- [ ] 340. Add screen reader announcements for dynamic content
- [ ] 341. Optimize bundle size — code split heavy components
- [ ] 342. Add image optimization for any entity photos/logos
- [ ] 343. Implement ISR (Incremental Static Regeneration) for frequently updated pages
- [ ] 344. Add Service Worker for offline caching of viewed pages
- [ ] 345. Run Lighthouse audit and fix all issues

---

## PHASE 10: INFRASTRUCTURE & DEPLOYMENT (Items 346–375)
*Production readiness*

### Build & CI/CD
- [ ] 346. Set up GitHub Actions CI — lint, type-check, test on every PR
- [ ] 347. Set up automated deployment to Vercel on merge to main
- [ ] 348. Add build status badge to README
- [ ] 349. Set up staging environment for testing before production
- [ ] 350. Add pre-commit hooks with husky — lint, type-check before commit
- [ ] 351. Add commit message linting (conventional commits)

### Testing
- [ ] 352. Run existing test suite and fix all failures
- [ ] 353. Add unit tests for all API routes
- [ ] 354. Add unit tests for data utility functions
- [ ] 355. Add component tests for all card components
- [ ] 356. Add component tests for all page components
- [ ] 357. Add integration tests for auth flow
- [ ] 358. Add integration tests for search flow
- [ ] 359. Add E2E tests with Playwright — critical user journeys
- [ ] 360. Add data integrity tests — validate all profiles match type interfaces
- [ ] 361. Add visual regression tests for key pages
- [ ] 362. Achieve 80%+ code coverage

### Monitoring & Observability
- [ ] 363. Add error tracking (Sentry or similar)
- [ ] 364. Add application performance monitoring
- [ ] 365. Add uptime monitoring
- [ ] 366. Add structured logging for all API routes
- [ ] 367. Add health check endpoint improvements (dependency checks)

### Documentation
- [ ] 368. Write comprehensive README.md with project overview, setup, architecture
- [ ] 369. Document all API endpoints with request/response examples
- [ ] 370. Document data model and file organization
- [ ] 371. Document bot system architecture and configuration
- [ ] 372. Document contribution guidelines
- [ ] 373. Add JSDoc comments to core utility functions
- [ ] 374. Create architecture diagram (Mermaid or similar)
- [ ] 375. Document deployment process

### Cleanup
- [ ] 376. Delete empty /data/*.json legacy files (entities-agencies.json, etc.)
- [ ] 377. Delete or consolidate old cleanup scripts (strip-boilerplate.js, deep-clean-ab.js, deep-clean-v2.js, deep-clean-v3.js)
- [ ] 378. Review and clean up any unused dependencies in package.json
- [ ] 379. Review and clean up any unused components
- [ ] 380. Ensure .gitignore covers all generated/temp files

---

## PHASE 11: ADVANCED FEATURES (Items 381–410)
*The vision beyond basics*

### AI-Powered Features
- [ ] 381. Build AI investigation assistant — ask questions about entities in natural language
- [ ] 382. Build AI-powered entity comparison — "How are X and Y connected?"
- [ ] 383. Build AI summarization — auto-generate investigation summaries
- [ ] 384. Build AI-powered anomaly detection — flag unusual patterns in data
- [ ] 385. Build AI-powered "What you should know" briefings per entity
- [ ] 386. Build AI-powered source reliability scoring
- [ ] 387. Build AI-powered timeline narrative generation
- [ ] 388. Build AI-powered related entity suggestions

### Data Integrations
- [ ] 389. Integrate OpenSecrets API — real lobbying and campaign finance data
- [ ] 390. Integrate PACER API — real court filing data (for US entities where applicable)
- [ ] 391. Integrate SEC EDGAR API — real corporate filing data
- [ ] 392. Integrate FinCEN data — real suspicious activity reports (where public)
- [ ] 393. Integrate Wikipedia API — pull biographical data for enrichment
- [ ] 394. Integrate news APIs — real-time news monitoring for tracked entities
- [ ] 395. Integrate sanctions lists (OFAC, EU, UN) — auto-flag sanctioned entities
- [ ] 396. Integrate FOIA requests tracking
- [ ] 397. Integrate social media monitoring for tracked entities
- [ ] 398. Add RSS feed generation for investigation updates

### Community Features
- [ ] 399. Build public comment system on investigations (moderated)
- [ ] 400. Build secure tip submission with end-to-end encryption
- [ ] 401. Build whistleblower protection features (Tor-friendly, no logging)
- [ ] 402. Build community fact-checking system — rate claims, provide evidence
- [ ] 403. Build collaborative annotation — highlight and comment on investigation text
- [ ] 404. Build "follow" system — track entities and investigations for updates
- [ ] 405. Build email digest — weekly/daily summary of updates to followed items
- [ ] 406. Build public API — allow third-party tools to query ArkHive data
- [ ] 407. Build embeddable widgets — entity cards and network graphs for other sites
- [ ] 408. Build data download portal — structured data exports for researchers
- [ ] 409. Build citation generator — proper academic citations for ArkHive data
- [ ] 410. Build print-friendly investigation reports

---

## TOTALS
| Phase | Items | Range |
|-------|-------|-------|
| 1. Critical Data Fixes | 40 | 1–40 |
| 2. Bot System Fixes | 35 | 41–75 |
| 3. API Implementation | 40 | 76–115 |
| 4. Page Functionality | 55 | 116–170 |
| 5. Workspace & Collaboration | 40 | 171–210 |
| 6. Auth & User Management | 30 | 211–240 |
| 7. Network Visualization | 30 | 241–270 |
| 8. Data Expansion | 40 | 271–310 |
| 9. UI/UX Polish | 35 | 311–345 |
| 10. Infrastructure & Deploy | 35 | 346–380 |
| 11. Advanced Features | 30 | 381–410 |
| **TOTAL** | **410** | **1–410** |
