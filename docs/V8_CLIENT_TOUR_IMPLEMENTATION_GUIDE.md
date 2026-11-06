# Kingfisher Park — V8 Client Nature Trail & Group Booking Revision

**Source:** The 13 client-supplied screenshot slides received on 2026-11-07 (slide 13 contains the Tour A/B rate matrix), plus the existing 2026-11-02 V7 ZIP. V7 source files are retained structurally and new material is additive, except where old public pricing would conflict with new client rates and where the simulated `booking.html` was replaced by a quote/inquiry interface.

## What changed

- New `nature-trail.html` tour guide: immersive eco tour, Malbato community immersion, BERAE (Biodiversity Enhancement / Regenerative Agriculture / Enterprise), full-day itinerary, Tahanan Greenhouse prep, food, mangrove/firefly extension, Tour A/B group-rate matrix.
- Updated `booking.html` static prototype: real group-tier rate estimate (1–10 paying adults), half-rate 4–12 year-olds, free 3-and-below, note on Early Riser; copies an inquiry that can be pasted manually into Messenger. **This is NOT a live reservation/checkout/booking confirmation.**
- Updated `experiences.html`, `index.html`, `visitor-guide.html`, `plan-your-visit.html`, `the-park.html`, `stories.html`, and `biodiversity.html` with a distinct nature-tour offer or crosslink. Original single-activity descriptions and layout preserved, but former ₱600/₱400/₱600/₱1,000 rates are no longer labeled current: **client must confirm if those individual activity prices remain valid and separately bookable.**
- Appended new styles in `css/client-tour-v8.css` rather than editing `css/styles.css`. Existing HOME hero behavior and working site scripts retained; unused simulated V7 booking.js removed from V8.
- 13 image-only crops from client slides saved as `assets/images/client-trail/*.webp`. They are low-to-medium resolution slide crops suitable for previews; original photographs from the client are strongly preferred before production. No retouch/reconstruction or text-overlay removal was performed. Bird photographs with visible credit marks were not cropped for republishing.
- Social links: Facebook / Messenger `https://web.facebook.com/KingfisherPark`, Instagram `https://www.instagram.com/kingfisherpark.coron/` (user supplied; direct public page access not verified by web browser).

## Rate table and calculations

Adult price per person based on **paying adult** count 1–10; see `data/client-tour-rates.json`.

- Tour A: full-day Nature Trail, meals included.
- Tour B: all Tour A + mangrove paddling/sunset/plankton/fireflies, meals included.
- Transport to the park: excluded; contact park to arrange.
- Children aged 3 and below: free, meal excluded, not counted in adult rate tier.
- Children aged 4–12: 50% of adult price as determined by the adult group-size tier; do not count in adult tier.
- Early Riser: +₱150 per head, +₱300 for solo; **not automatically applied** until management clarifies whether children count as heads, and whether 'solo' refers to one paying adult independent of other children.
- Groups of **more than 10 paying adults:** rate not supplied; request staff quote. Group capacity is not equal to 10 unless management explicitly sets that.

### Sample calculation
3 adults on Tour B: 3 × ₱3,900 = ₱11,700; 2 children aged 4–12: 2 × ₱1,950 = ₱3,900; base amount ₱15,600. Excludes optional Early Riser and transportation.

## Client decisions still required before Wix Bookings launch

1. Whether new Tour A/B replaces the four previously described individually priced experiences or supplements them. Until this is decided, do not publish the four V7 amounts as current on the live site.
2. Whether Tour A/B are bookable as 1–10 paying-adult groups, whether minimum departures apply, and approved date/time/resource availability. The new nature trail describes starting early; the V7 1–9 PM operating hours should not be asserted to apply to these tours.
3. Whether 30% deposit is approved and whether online full payment remains optional; refund/cancellation policy and how the outstanding balance is paid.
4. Confirm the quoted child age boundaries and any child-specific meal inclusions; Early Riser surcharge applicability to all age groups.
5. Actual visitor pickup/meeting point and transport fees.
6. Confirm ownership/rights for photos cropped from client slides. Prefer originals instead of these 720-pixel-width marketing screenshots.
7. Wix-native group bookings and class varied price options exist, **but do not by themselves guarantee accurate automatic tier pricing based on participant count, child prices, and optional add-ons**. Do not set Tour A=₱2200 or Tour B=₱3200 as universal fixed prices. Architect/test group quotation, Wix Pricing/Velo/Bookings checkout, and staff reconciliation before enabling payment.
8. Existing Wix Studio site has already installed native Book Online/Service Page/Booking Calendar/Booking Form/Thank You Page. This downloadable V8 ZIP is a **reference prototype**, not a deployment to Wix Studio or an active booking system.

## Wix Studio integration order

Review client pricing + agree site offering; revise Experiences and Book Online with **Tour A/B** cards; configure staff-managed inventory and schedules; choose an exact solution for tier pricing; connect merchant; test deposit/full-payment and confirmable references; then retire the old demo Booking/Reservation Request page, update sitewide links and finally tablet/mobile QA.

**No live payment integration or confirmed booking is represented in this archive.**
