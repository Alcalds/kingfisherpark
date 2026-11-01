# START HERE — KINGFISHER PARK VERSION 7

**This is a complete HTML/CSS/JavaScript design prototype, not a Wix Studio export or an edited live Wix site.** Extract the entire folder and open with VS Code Live Server (or another local HTTP server). Open `index.html` to browse all pages.

Version 7 revises **seven non-HOME pages** while preserving the audited V6 HOME HTML without any modifications. **Version 6 and the approved V4 visual language remain the foundation.**

## Main changes
- **Biodiversity**: Interactive category-based wildlife photo carousel with left and right buttons, swipe and keyboard controls; ALL PHOTOS / BIRDLIFE / FLORA categories. Existing 5 bird photographs and one flora photograph; no invented species names.
- **The Park**: Editorial community photo composition, resolved public-facing internal editorial note, concise linked historical feature; existing four-photo regenerative agriculture mosaic preserved.
- **Experiences**: Alternating full-width photographic experience detail panels and a separate firefly-visit preparation feature instead of another repeated night-photo collage.
- **Stories & History**: Archive timeline, concise cross-linked community feature, and featured agriculture photo-essay layout (six existing agricultural photos preserved).
- **Plan Your Visit**: Three-stage visual timeline plus photographic scenery and inquiry guidance; no unverified facility/meeting-point claims.
- **Visitor Guide**: Three interactive responsible-visiting accordions. The visible Pagatpat area uses **local labeled mangrove habitat context** plus a link to the external, identified Pagatpat photograph; an authentic park Pagatpat photo is still required.
- **Booking**: Photographic thumbnails for the four choices; the original eight-stage JavaScript booking flow remains byte-identical and must continue to display demo/no-payment disclaimers.

## Where to find the newly designed sections
- `biodiversity.html#biodiversity` — wildlife gallery with tabs and arrows.
- `the-park.html#community`, `the-park.html#park-history` — editorial images and history teaser.
- `experiences.html#experiences`, `experiences.html#night-preparation` — full-width experience rows and visitor guidance.
- `stories.html#stories`, `stories.html#regenerative-agriculture` — timeline and agriculture photo essay.
- `plan-your-visit.html#first-visit` — visual time-of-day timeline.
- `visitor-guide.html` — responsible-visiting accordions.
- `booking.html` — unchanged steps and calculations, new option thumbnails.

## Wix Studio feasibility (read before implementing)
- See **`docs/V7_WIX_STUDIO_IMPLEMENTATION_GUIDE.md`** for each page's native Wix Studio equivalents.
- For Biodiversity, **Wix Pro Gallery** supports Slider/Slideshow and prev/next navigation arrows, and **Slideshow Repeater** has built-in arrows. Do NOT assume ordinary Slider Repeaters have built-in arrow buttons. Use native Tabs with category galleries, or custom Velo only when required.
- Wix Studio requires rebuilding these prototype structures in the editor. Copying these HTML/CSS files into Wix Studio does **not** automatically recreate native Wix elements or CMS collections.

## Client photo request
- See `docs/V7_CLIENT_PHOTO_REQUEST.md`. Highest priorities: more non-bird wildlife/flora, authentic Pagatpat, actual tour participants, entrance and visitor facilities, and dated conservation/community photos.

## Final checks before using in production
- The booking is **not a real reservation/payment system**. Do not remove demo disclosures until integrated and approved.
- Rates, opening hours, species identification, photography consent, and policies require client verification.
- HOME's deferred live-phone Lightline and landscape viewport issues are intentionally untouched.

---

# Archived Version 6 baseline and earlier project notes

# START HERE — VERSION 6 FINAL SOURCE-QA REVISION

This is a complete **HTML/CSS/JavaScript prototype**, not the live Wix Studio site. Extract this entire folder before opening; for best results use **VS Code Live Server** or an equivalent local HTTP server, rather than previewing isolated HTML files inside the ZIP.

**Where are the new photos?** Open **The Park**, then click **SEE REGENERATIVE AGRICULTURE ↘** (4 photos); open **Stories & History**, then click **VIEW AGRICULTURE PHOTO STORY ↘** (6 photos). See `docs/WHERE_THE_PHOTOS_ARE.md`.

**Hero photos:** all eight pages reference local Hero images, verified by automated render and path checks; CSS-local fallback photos added. See `docs/FINAL_SOURCE_QA_2026-11-02.md`, with screenshot evidence under `docs/QA_VISUAL_REFERENCES/`.

**OPEN GUIDE:** `visitor-guide.html`, with a local mangrove aerial and an externally hosted, credited Pagatpat reference (local generic mangrove fallback); external photo not guaranteed offline. Do not confuse these with the agriculture collection.

**Important:** Booking still simulates reservations/payments; it is not a live checkout. Staff must approve photos, prices/policies and verify the published site before launch.

---

# Kingfisher Park — Version 6

**Photography & Regenerative Agriculture integration**

This build is based on the latest revised V4 Sitewide Readability source, including the firefly and Pagatpat instructions and repaired subpage Hero imagery. The user-approved visual direction from V4 was retained; this package is designated **Version 6** to distinguish it from the older reverted Version 5.

Open `index.html` with Live Server or run a local HTTP server from the project folder. Navigation is relative, and all new agriculture images are local WebP assets.

### New in Version 6
- New four-image regenerative-agriculture feature in `the-park.html`.
- New six-image regenerative-agriculture photo essay in `stories.html`.
- Two-way navigation between the new features.
- Responsive CSS for desktop, tablet and mobile; no change to HOME structure.
- Ten optimized original-source photographs, with manifest and factual alt text.

**Content sign-off:** Please verify publication permissions, photo credits, dates and details with the client before the production website goes live. The source ZIP contains 65 photos + one video; only ten selected, optimized images are included here.

See `docs/CLIENT_REVISION_V6.md` and `docs/REGENERATIVE_IMAGE_MANIFEST.json` for detailed changes and original-filename mapping.

---

## Archived development notes (earlier milestones)

# Kingfisher Park — Homepage V1

## Client Revision V3 — Living Light autoplay

The Living Light Hero now automatically progresses through Daylight, Golden Hour, and After Dark while keeping the slider, active labels, scene crossfades, tide note, and firefly intensity synchronized. Autoplay pauses for visitor interaction, when the Hero leaves the viewport, when the tab is hidden, and when reduced-motion is requested. The implementation uses browser-native JavaScript/CSS only and is designed to be portable to a Wix Studio Custom Element/Velo implementation.


This package is the first meaningful VS Code homepage prototype based on the approved **Kingfisher Park Master Development Prompt V2**.

## Included in this checkpoint

1. Header V2 using the official Kingfisher Park logo
2. Hero V1 using the current provisional aerial mangrove image
3. Custom firefly-inspired Canvas animation
4. Visit at a Glance / visitor snapshot
5. Initial Choose Your Experience preview with the current September 2026 rates

The rest of the homepage is intentionally not built yet. The next sections should only be added after this visual direction is reviewed.

## Open in VS Code

1. Extract this folder.
2. Open `kingfisher-park-homepage-v1` in VS Code.
3. Open `index.html` with Live Server.
4. Review first at **1600px desktop width**.
5. Also test 1024px, 768px, 430px, 390px and 360px widths.

## Current content status

### VERIFIED / CURRENT
- Official Kingfisher Park logo
- Kingfisher Park / Coron, Palawan identity
- Current September 2026 operating hours: 1:00 PM–9:00 PM
- Mangrove Kayak: ₱600/person
- Firefly Boardwalk: ₱400/person
- Firefly Boardwalk + kayaking for bioluminescent plankton/additional firefly viewing: ₱600/person
- All three activities: ₱1,000/person
- Booking and online payment are required for the final Wix site

### PROVISIONAL
- Hero headline and supporting copy
- Website typography and color system
- Exact Hero image crop/treatment
- Firefly particle count, intensity and movement
- Experience-card microcopy
- Online-booking presentation in the visitor snapshot

### HISTORICAL / PROVISIONAL ASSET NOTE
The kayaking photograph comes from the older Kingfisher Park asset package and is used only to demonstrate the current kayaking activity in this prototype. It does not represent a current renovated facility.

New renovated park/facility photographs remain pending and should replace temporary or outdated facility imagery when supplied.

## Firefly effect

The fireflies are a decorative interface animation, not documentary wildlife footage or a representation of actual firefly density. The implementation:

- uses native HTML Canvas + vanilla JavaScript
- reduces particle count on smaller screens
- respects `prefers-reduced-motion`
- pauses animation when the page/tab is hidden or the Hero is off-screen
- keeps particles biased toward the image side so the main Hero copy stays readable

## Booking

Buttons intentionally do not process bookings yet. They show a prototype notice. The complete simulated booking flow belongs to Stage 4 of the approved development plan.


## Stage 2 additions

Homepage V2 preserves the approved Header/Hero/firefly/visit snapshot foundation and adds:

- Full experience section polish
- A Living Mangrove Landscape
- Biodiversity archive gallery
- Day-to-Night transition
- After Dark experience story

The next stage remains:
- Conservation & Community
- Stories / History preview
- Know Before You Go
- Plan Your Visit
- Booking CTA
- Footer

Booking/payment itself remains reserved for Stage 4.


## Stage 3 additions

Homepage V3 completes the lower half of the homepage prototype:

- Conservation & Community
- Stories & History preview
- Know Before You Go
- Plan Your Visit
- Booking CTA / booking-flow preview
- Footer

The current homepage is now structurally complete enough for a full visual review.

### Next stage

Build the **interactive booking prototype**:

`Experience → Date → Time → Guests → Details → Review → Demo Payment → Confirmation`

No real payment will be processed in VS Code.


## Interactive Booking Prototype — V1

A fully interactive VS Code booking prototype has now been added at:

`booking.html`

Flow:

`Experience → Date & Time Status → Guests → Guest Details → Review → Demo Payment → Confirmation`

### Important prototype safeguards

- Current September 2026 per-person rates are used.
- Exact time slots are **not invented**. The prototype records the time as pending Kingfisher Park confirmation.
- No child, senior/PWD, resident, group, or capacity rule is invented.
- No cancellation, refund, rescheduling, no-show, payment fee, or provider rule is invented.
- No real payment credentials are requested.
- The Demo Payment step only simulates a successful transaction.
- The generated booking reference begins with `KP-DEMO-`.
- The confirmation can be printed/saved as a browser PDF for review.

### Homepage integration

All Book Now / Book / Book Your Experience actions now open the interactive booking prototype. Experience-card booking links preselect the relevant experience.


## Responsive Refinement — V2

This version keeps the approved Homepage V3 and Booking V1 functionality, then adds a focused responsive/accessibility pass:

- Mobile sticky **Book Your Experience** CTA on the homepage
- Larger mobile touch targets
- Tighter mobile hero and section spacing
- Improved small-screen experience cards
- Compact mobile booking step/total status
- Improved booking form typography on mobile
- Improved live-summary behavior on tablet/mobile
- Explicit demo-payment disclaimer
- Brief simulated checkout state
- `aria-live` updates for booking summary/status
- No new rates, schedules, booking rules, or policies were invented

See `docs/RESPONSIVE_QA.md` for the current QA checklist.


## Multi-page Architecture — V1

The homepage has been intentionally reduced to **7 primary sections**:

1. Hero
2. Visit at a Glance
3. Featured Experiences
4. Living Mangrove Landscape
5. Biodiversity Preview
6. After Dark
7. Booking CTA

Detailed content now has dedicated HTML pages:

- `the-park.html`
- `experiences.html`
- `biodiversity.html`
- `stories.html`
- `plan-your-visit.html`
- `booking.html`

This keeps the homepage focused on discovery and conversion while giving detailed content room to breathe.


## Living Light Hero — V1

The standard tourism Hero has been replaced with an interactive Kingfisher Park-specific **Living Light Hero**.

Visitors can move through:

`DAYLIGHT → GOLDEN HOUR → AFTER DARK`

The Hero uses authentic Kingfisher Park imagery and connects the firefly animation to the active time-of-day state rather than showing full fireflies all the time.

The homepage biodiversity area has also been reduced to a four-image preview, with full material remaining on `biodiversity.html`.

See:

`docs/HERO_LIVING_LIGHT_V1.md`
