# No-archive-found link report

Summary
- Source: `scripts/404-replacements.json`
- Items with `note: "no-archive-found"`: 89 (see JSON for full list)

Next steps (recommended)
1. Manual verification: open each `oldUrl` in a browser to confirm whether the resource truly disappeared or is blocking automated requests.
2. Replace with an alternative authoritative source when available (official mirror, gov PDF, or credible news report).
3. If no alternative exists, either:
   - Replace the link with an explanatory note (e.g. `"source unavailable — archived copy not found"`), or
   - Remove the link and keep the citation text.
4. After manual edits, run `npm run check-links` to validate.

How to review quickly
- Open `scripts/404-replacements.json` and filter entries where `note` is `"no-archive-found"`.
- Prioritize top domains (justice.gov, nytimes.com, washingtonpost.com, courtlistener, etc.).

Automation notes
- I already auto-applied all Wayback replacements where a snapshot existed (`21` literal replacements applied).
- Remaining `no-archive-found` entries require manual review because automated Wayback lookup returned no snapshot or the host blocked the request.

If you want, I can:
- Manually search for replacements for these entries and propose alternatives (slow, I will open each and suggest replacements).
- Replace unreachable links with a short placeholder and add a `TODO` comment for manual follow-up.

---
Generated: scripts/404-replacements.json
