# ARKHIVE MASTER TODO LIST — 100 ITEMS

## STATUS KEY
- [ ] Not started
- [~] In progress
- [x] Completed

---

## PHASE 1: GET BOTS RUNNING (Items 1-10) — CRITICAL/IMMEDIATE

- [x] 1. Tune swarm-config.json: lower quality threshold from 75→40 so profiles stop getting rejected
- [x] 2. Increase Ollama maxConcurrent to 4 for parallel generation
- [x] 3. Reduce Ollama timeout from 300s→180s to prevent hung requests
- [x] 4. Increase maxProfilesPerSession from 5000→50000 for unlimited runtime
- [ ] 5. Start daemon process in background (node bots/daemon.js)
- [ ] 6. Verify daemon is actively generating and injecting profiles
- [ ] 7. Monitor first 10 successful profile generations for quality
- [ ] 8. Verify injector is writing enriched data back to shard files
- [ ] 9. Check that auto-seed discovers new investigations each cycle
- [ ] 10. Confirm continuous cycle loop runs without stopping

## PHASE 2: SEED MASSIVE NEW CONTENT (Items 11-30)

- [ ] 11. Seed 500 new individual profiles (world leaders, politicians, executives)
- [ ] 12. Seed 200 new corporation profiles (Fortune 500, defense contractors, pharma)
- [ ] 13. Seed 100 new agency profiles (global intelligence, regulatory, military)
- [ ] 14. Seed 100 new organization profiles (think tanks, NGOs, lobbying groups)
- [ ] 15. Seed 300 new investigation entries (financial crimes, corruption, cover-ups)
- [ ] 16. Create seed list: all US Senators and Representatives (535 individuals)
- [ ] 17. Create seed list: all Supreme Court justices (current + recent)
- [ ] 18. Create seed list: all Federal Reserve governors and regional presidents
- [ ] 19. Create seed list: Fortune 100 CEOs and board members
- [ ] 20. Create seed list: major hedge fund managers and billionaire investors
- [ ] 21. Create seed list: global heads of state (all 195 countries)
- [ ] 22. Create seed list: major intelligence agency directors worldwide
- [ ] 23. Create seed list: top 50 defense contractors
- [ ] 24. Create seed list: top 50 pharmaceutical companies
- [ ] 25. Create seed list: top 50 tech companies
- [ ] 26. Create seed list: major media conglomerates and owners
- [ ] 27. Create seed list: international financial institutions (IMF, World Bank, BIS, etc.)
- [ ] 28. Create seed list: major lobbying firms and their clients
- [ ] 29. Create seed list: all Panama Papers / Pandora Papers named entities
- [ ] 30. Create seed list: all ICIJ investigation subjects

## PHASE 3: ENRICH EXISTING SPARSE PROFILES (Items 31-40)

- [ ] 31. Enrich all 1,889 currently sparse individual profiles
- [ ] 32. Enrich all agency profiles with leadership, controversies, budget data
- [ ] 33. Enrich all corporation profiles with financial data, lawsuits, lobbying spend
- [ ] 34. Enrich all organization profiles with funding sources, board members
- [ ] 35. Enrich all investigation entries with full narrative content (8+ paragraphs)
- [ ] 36. Add crime dossier sections to all individuals with documented legal issues
- [ ] 37. Add structured controversies to all profiles (title, evidence, dates, outcomes)
- [ ] 38. Add conspiracy sections where documented suspicious connections exist
- [ ] 39. Add family member data to all individual profiles
- [ ] 40. Add corporate holdings data to all individuals with business connections

## PHASE 4: CROSS-REFERENCE NETWORK (Items 41-50)

- [ ] 41. Map all knownAssociates connections between existing profiles
- [ ] 42. Create bi-directional links (if A references B, B should reference A)
- [ ] 43. Link all individuals to their affiliated corporations
- [ ] 44. Link all individuals to their affiliated agencies
- [ ] 45. Link all individuals to their affiliated organizations
- [ ] 46. Link all investigations to the entities they cover
- [ ] 47. Create investigation cross-references (related investigations)
- [ ] 48. Build corporate board interlocks (shared directors across companies)
- [ ] 49. Map revolving door connections (government → private sector → government)
- [ ] 50. Generate network visualization data (nodes + edges) for all entities

## PHASE 5: INVESTIGATION DEPTH (Items 51-65)

- [ ] 51. Generate investigations for every major financial crisis (2008, S&L, Enron, etc.)
- [ ] 52. Generate investigations for every major political scandal (Watergate through present)
- [ ] 53. Generate investigations for every major intelligence operation (MKULTRA, COINTELPRO, etc.)
- [ ] 54. Generate investigations for corporate fraud cases (Theranos, FTX, Wirecard, etc.)
- [ ] 55. Generate investigations for environmental disasters (BP oil spill, Flint water, etc.)
- [ ] 56. Generate investigations for pharmaceutical scandals (opioid crisis, Vioxx, etc.)
- [ ] 57. Generate investigations for technology/privacy violations (NSA surveillance, Cambridge Analytica, etc.)
- [ ] 58. Generate investigations for military-industrial complex contracts
- [ ] 59. Generate investigations for lobbying and regulatory capture
- [ ] 60. Generate investigations for media manipulation and propaganda
- [ ] 61. Generate investigations for election interference (domestic and foreign)
- [ ] 62. Generate investigations for human rights violations by state actors
- [ ] 63. Generate investigations for offshore tax evasion (Panama Papers, etc.)
- [ ] 64. Generate investigations for international arms trafficking
- [ ] 65. Generate investigations for money laundering through real estate

## PHASE 6: DATA QUALITY AND VERIFICATION (Items 66-75)

- [ ] 66. Verify all external source URLs return relevant content (not just 200 status)
- [ ] 67. Replace any remaining generic/homepage URLs with article-specific links
- [ ] 68. Remove any remaining fabricated content (fake SEC filings, fake dates > 2025)
- [ ] 69. Ensure all date fields use consistent YYYY-MM-DD format
- [ ] 70. Deduplicate controversies entries across all profiles
- [ ] 71. Deduplicate timeline entries across all profiles
- [ ] 72. Fix entity type misclassifications (corps in individuals, etc.)
- [ ] 73. Validate all knownAssociates href links point to real profiles
- [ ] 74. Validate all relatedInvestigations slugs match real investigation entries
- [ ] 75. Run full TypeScript build verification after bulk data operations

## PHASE 7: PLATFORM FEATURES (Items 76-85)

- [ ] 76. Build entity search index for fast full-text search
- [ ] 77. Create network graph visualization page
- [ ] 78. Create statistics dashboard (total entities, connections, investigations)
- [ ] 79. Add timeline view showing events chronologically across all entities
- [ ] 80. Create "Power Map" showing top-connected entities
- [ ] 81. Add severity/risk heat map across all categories
- [ ] 82. Create API endpoint for programmatic access to entity data
- [ ] 83. Add RSS/Atom feeds for new investigations and updates
- [ ] 84. Create sitemap.xml for SEO (all entity pages)
- [ ] 85. Build entity comparison tool (side-by-side profiles)

## PHASE 8: BOT IMPROVEMENTS (Items 86-95)

- [ ] 86. Add source verification bot (checks URLs resolve to relevant content)
- [ ] 87. Add network weaver bot (auto-discovers connections between entities)
- [ ] 88. Add timeline builder bot (constructs chronologies from multiple sources)
- [ ] 89. Add quality audit bot (scores and flags thin profiles for re-enrichment)
- [ ] 90. Implement progressive enrichment (re-score and re-enrich every 24 hours)
- [ ] 91. Add investigation generator bot (creates new investigations from entity connections)
- [ ] 92. Add entity disambiguation (prevent duplicate entries for same real-world entity)
- [ ] 93. Implement entity merge tool (combine duplicate profiles)
- [ ] 94. Add enrichment priority queue (critical/high risk entities first)
- [ ] 95. Build monitoring dashboard showing real-time bot activity

## PHASE 9: SCALE AND PERFORMANCE (Items 96-100)

- [ ] 96. Optimize shard file read/write for large datasets (10k+ per type)
- [ ] 97. Implement incremental builds (only rebuild changed entity pages)
- [ ] 98. Add data export (CSV, JSON dump of entire database)
- [ ] 99. Profile and optimize Ollama request pipeline throughput
- [ ] 100. Target: 10,000 individuals, 500 agencies, 1,000 corporations, 500 organizations, 5,000 investigations

---

## CURRENT STATS
- Individuals: 2,049
- Agencies: 143
- Corporations: 210
- Organizations: 156
- Investigations: 823
- Sparse profiles needing enrichment: 1,889
- **Target: 17,000+ total entries**
