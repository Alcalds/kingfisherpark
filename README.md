# Kingfisher Park V9.2 — Visitor Confidence Refinement

**Design-review website prototype only.** Not a Wix Studio deployment or connected payment/booking system.

## Eight public pages

`index.html`, `the-park.html`, `experiences.html`, `biodiversity.html`, `stories.html`, `plan-your-visit.html`, `visitor-guide.html`, `booking.html`.

The separate V8 Nature Trail page remains removed. The approved HOME Lightline and original branding are retained.

## V9.2 updates

- Destination offer is clearer on HOME; visitor-oriented copy revised across eight pages.
- EXPERIENCES retains one unified section with **3 image-first individual cards followed by 2 larger package cards**.
- Confirmed individual rates: **₱600 Mangrove Kayak, ₱400 Firefly Boardwalk, ₱600 Fireflies + Night Kayak**.
- Tour A / Tour B group pricing calculator now uses the **10-person rate for all groups of 11+ paying adults** (A ₱2,200/adult, B ₱3,200/adult); safety/capacity still requires staff confirmation.
- Booking source includes an **illustrative choice of 30% deposit or 100% upfront**, neither live nor client-approved for collection. **Early Riser is on-site only**.
- Multi-individual activity estimate is a copyable inquiry; it does not reserve calendar places.
- HOME mobile title overlap corrected. Sticky mobile Book Now shortcut clears the Lightline while the Hero remains in view.
- Existing photos are retained unchanged; prepare improved originals from `docs/V9_2_PHOTO_PREPARATION_LIST.csv` when ready.

## Current handoff documents

- `docs/V9_2_CLIENT_STAFF_INFORMATION_CHECKLIST.md`
- `docs/V9_2_PAGE_REVISION_AND_HANDOFF.md`
- `docs/V9_2_WIX_BOOKINGS_IMPLEMENTATION_BOUNDARIES.md`
- `docs/V9_2_PHOTO_PREPARATION_LIST.csv`
- `docs/V9_2_STATIC_QA.json` and `docs/V9_2_TEST_RESULTS.json`

Historical V7/V8/V9/V9.1 documents are preserved in `docs/archive-v9-1/` for traceability. They **do not override V9.2** when they contain earlier decisions (e.g., "request a quote" for 11+ groups or "unconfirmed" individual rates).

## Preview

Open `index.html` from the extracted folder or serve the folder with a basic local web server. The visual and static scripts are bundled. `booking.html` is for **pricing/design review only**; it does not write to the live Wix Bookings calendar, accept payments or issue confirmation emails.
