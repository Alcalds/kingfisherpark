# Kingfisher Park — Version 6 Source QA (November 2, 2026)

## Scope and method
Audited the **actual Version 6 ZIP**, not the previously drafted claims. All eight page Heroes were rendered at **1280 × 840** and **390 × 844** with the page's CSS and local image data embedded into the browser test document. Direct `file://` and localhost browser navigation were restricted by the testing environment; browser screenshots therefore establish visual rendering of the bundled markup/styles/assets, **not** independent deployment validation. The local HTML, JS, image and link files were also checked directly.

## Hero image audit

| Page | Primary local Hero image | Browser render | CSS fallback |
|---|---|---|---|
| HOME | `assets/images/hero/mangrove-aerial.webp` (3-scene Hero) | Loaded | Existing Hero background |
| The Park | `assets/images/landscape/park-panorama.webp` | Loaded | Added |
| Experiences | `assets/images/night/night-boardwalk.webp` | Loaded | Added |
| Biodiversity | `assets/images/biodiversity/birdlife-01.webp` | Loaded | Added |
| Stories & History | `assets/images/community/local-craft-2026.webp` | Loaded | Added |
| Plan Your Visit | `assets/images/night/night-boardwalk.webp` | Loaded | Added |
| Visitor Guide | `assets/images/hero/mangrove-aerial.webp` | Loaded | Added |
| Booking | `assets/images/night/night-boardwalk.webp` | Loaded | Added |

The Photos **were actually present and renderable** in the previous Version 6 ZIP, despite the reported blank Heroes. To reduce loading fragility, this revision retains the primary `<img>` elements and adds local CSS fallbacks. Images must be tested from a **fully extracted folder**, ideally using VS Code Live Server or a local HTTP server; opening individual files inside a ZIP/archive preview can break relative paths. The source still reuses the night-boardwalk photograph across pages; this is a content limitation, not a missing image.

## Where the ten agriculture photographs appear

1. **The Park → Growing with the landscape**, below Conservation & Community and before The Park Through Time: **four** photos (aerial growing landscape, fieldwork, gourds, crops/soil).
2. **Stories & History → Scenes from the growing landscape**, toward the lower portion of the page: **six** photos (garden plots, trellis/support work, crop growth, farm animals, plant care, planting preparation).

New Hero jump-links take readers directly to each section. These are not placed in HOME, Booking, Visitor Guide, or the other pages and are not advertised as bookable tourism experiences.

## What OPEN GUIDE shows

`OPEN GUIDE` leads to `visitor-guide.html`, a complete separate page. Its primary Hero uses the **local mangrove aerial photograph**. The **Explore gently** area shows the firefly and mangrove protection advice, followed by a **Pagatpat reference photograph**. This Pagatpat photo is currently an **external Wikimedia Commons URL** (with original author, license, and location credit); the site switches to a generic local mangrove panorama if it fails to load and explicitly labels the fallback as general mangrove imagery. **The external Pagatpat photo could not be independently downloaded/hosted locally in this environment**. Obtain a client-supplied species-verified photograph for a fully self-contained production website. The external photograph is **not** claimed to be taken at Kingfisher Park.

## Corrections since the first V6 ZIP

- Added local CSS Hero-image fallbacks on all six secondary Hero types and explicit source references for all eight pages.
- Added clear jump-links to the new photo sections from The Park and Stories Heroes.
- Corrected an oversized desktop agriculture mosaic (previously ~1,854px tall; now ~630px at 1280px) without changing its four-photo layout.
- Repaired three broken section links: Experiences → The Park; The Park → Biodiversity; Biodiversity → After Dark on Experiences.
- Repaired a malformed Biodiversity gallery paragraph.
- Synchronized previously accepted production-facing text in HOME, the reused Living Landscape section, Booking CTA summaries, Biodiversity, Plan Your Visit, and Footer. The eight-step booking simulation still **clearly discloses that it does not take real payment or create real reservations**; its payment warnings were **not removed**.
- Updated the Booking JS's Complete Experience note to the previously accepted: **“Activity timing depends on availability and conditions.”**

## Final automated verification

- **8** valid HTML page sources, each with a local Hero image.
- **10** agriculture images referenced in two sections (**4 + 6**); all ten were visibly loaded when scrolled into view at Desktop and Mobile widths.
- **212** internal page links; all checked local page targets and fragment anchors exist.
- **0** missing local images, CSS/JS resources or CSS-linked images.
- **0** duplicate HTML IDs and **0** invalid local image files.
- CSS syntax parses; JavaScript files pass `node --check`.
- Smoke tests passed: mobile menu open/close, Lightline input, booking selection, booking script initialization.
- Desktop 1280px and Mobile 390px Hero previews rendered without whole-page horizontal overflow in the tested views.

## Remaining items that require client or deployment review

1. **Pagatpat:** external reference photo is not a guaranteed offline asset. Request an authentic, rights-cleared Kingfisher Park photo or download and license-compliantly host the verified Commons file when network access is available.
2. **Production photographs:** additional up-to-date facility/entrance, visitor experiences and real night-kayaking photographs remain needed; several pages intentionally reuse the current night-boardwalk asset.
3. **Policies and payment:** Privacy Policy and Booking Terms are not implemented as published policy pages. The eight-stage booking flow is still a simulation, not live reservations. Do not present it as an operational payment system.
4. **Browser/live-site validation:** Test on the actual publishing domain and target devices after uploading; the in-container browser prevented direct local-URL navigation.
5. **Permissions/captions:** client staff should verify reuse permission, locations, dates and photo subjects before publishing.

This is a **source-verified Version 6 prototype**, not a certified production-ready website.
