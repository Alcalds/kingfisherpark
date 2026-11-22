# V9.3 Static Source Quality Review — 21 November 2026

**Result:** Source-level checks passed. This is **not** a live Wix Studio implementation test and **not** a visual/browser acceptance certificate.

| Check | Result |
|---|---|
| V9.2 source baseline retained | PASS — all seven editorial HTML pages preserved |
| Added V9.3 CSS last in every HTML page | PASS |
| V4 source Hero JS preserved | PASS — `js/main.js` not modified |
| Beach vs BERAE separation | PASS — HOME, EXPERIENCES, PLAN YOUR VISIT and informational BOOKING page |
| Four beach cards, including restored ₱1,000 Complete Experience | PASS |
| V9.2 group tour rate table retained | PASS; age labels updated to age 11+ full-paying guests |
| 100/day, 28 incl. guide(s) limits | PASS |
| 7 days, separate beach weekdays/weekends and BERAE Tour A/B schedules | PASS |
| New age, Early Riser and 100% payment policy | PASS in public content and V9.3 operations JSON |
| New 3-day cancellation / rescheduling text | PASS |
| New photo assets | PASS — eight copied, selected images integrated into source pages |
| Leave-no-trace, life jacket and guide safety rules | PASS |
| Strong bioluminescent plankton feature on HOME | PASS; conditional and photo labelled atmospheric |
| Duplicate DOM `id` in any active HTML | PASS — none found |
| Broken local HTML/CSS/JS/image paths | PASS — none found |
| Broken same-site links / fragment anchors | PASS — none found |
| New CSS parser check | PASS — 75 top-level items, no parse errors (tinycss2) |
| Existing main.js syntax | PASS — Node.js check |
| Actual responsive rendering at 1280/900/390 | **NOT VERIFIED** — headless Chromium navigation blocked by environment policy; manually inspect extracted prototype in a normal browser |
| Actual Wix Bookings and 100% checkout | **NOT TESTED** — intentionally deferred, as instructed |
| Existing PDF visitor guide aligned to Nov 21 age/hours/rules | **NO** — PDF needs revision before public use |
| Client photo licensing/consent | **NOT VERIFIED** — check before public publishing |

## Manual QA targets
- At 1280 / 900 / 390 px: check the four beach cards display as 4 / 2 / 1 columns; no clipping of ₱1,000 rates or card descriptions.
- Verify the HOME Hero and Lightline still blend Daylight → Golden Hour → After Dark, including manual and reduced-motion behavior. The original prototype JavaScript is unchanged.
- Check the new plankton spotlight looks attractive but does not imply the photograph depicts the plankton, and respect reduced-motion CSS.
- Verify Tour A and B cards display different images and their times are accurate.
- Test anchor links (verified structurally), responsive menu, hover/focus interactions and accessibility headings.
- In actual Wix, confirm all rates, capacities, forms, staff notices, cancellation rules, payments and session limits separately before launch.
