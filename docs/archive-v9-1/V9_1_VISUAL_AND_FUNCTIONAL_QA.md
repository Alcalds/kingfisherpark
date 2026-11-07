# Kingfisher Park V9.1 — QA and Release Notes

## Source integrity

- Eight public HTML pages present; no Nature Trail page.
- All local HTML/CSS/JS/image references present (source link audit: zero missing files).
- All internal `#anchor` links tested against target document ids (zero missing anchors).
- `node --check js/v9-pricing.js`: passed.

## Browser-rendered static visual check

Static source preview was rendered in Chromium by inlining local CSS and images. Direct local-file navigation is blocked in this test environment, so the inline renderer was used for layout verification.

- HOME at 1280px, 900px, 390px: no horizontal overflow.
- EXPERIENCES at 1280px, 900px, 390px: no horizontal overflow.
- Five image-first experience cards rendered correctly; Tour A/B cards remain vertical.
- One continuous Experiences showcase containing both individual activities and packages.
- HOME now has seven top-level sections, beginning with a clear destination introduction after the preserved Hero.
- Static preview does not prove all visual behavior on the Wix published site.

## Working JavaScript tested in inline Chromium

- HOME Living Light: selecting After Dark activates the appropriate stage and changes the context label; no runtime error in test.
- Mobile menu: toggle opens the existing menu at 390px.
- Group pricing: Tour B, 3 paying adults + 2 children aged 4–12 computes ₱15,600; 30% provisional preview is ₱4,680.
- Early Riser selected: base online amount unchanged; status displays on-site request.
- More than 10 paying adults: calculator requests quotation.

## Critical photo-audit correction

The V8 crop inventory includes several files with misleading names: `community-table.webp` actually depicts chapel architecture; `local-farm-meal.webp` is a landscape/architecture crop; `regenerative-farm.webp` and `school-farm-garden.webp` are chapel fragments. V9.1 deliberately excludes these from the affected newly revised sections and lists them for user replacement.

## Not validated / not represented as complete

- No edits were made to the user's actual Wix Studio site.
- No Wix merchant gateway, live booking calendar, deposit, staff confirmation or issued receipt was tested.
- Client decisions pending: individual activity pricing; exact full-day schedules; group-size >10 rates; proposed 30% deposit; Early Riser eligibility; approved refund terms.
- Low-resolution client presentation crops require manual replacement before production, notably Pitcher Hill hiking, aerial mangroves, Tahanan greenhouse, and Tour B sunset.
- The rest of the preserved pages require final visual QA in the user’s Wix Studio at Desktop 1280px, Tablet 900px and Mobile 390px.

## Audit status

100 written relevance/quality checks are in `V9_1_100_CHECK_RELEVANCE_AUDIT.csv`. These are source/review criteria, not a claim of 100 successful live Wix tests.

