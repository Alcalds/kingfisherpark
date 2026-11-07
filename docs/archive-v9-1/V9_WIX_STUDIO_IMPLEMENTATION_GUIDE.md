# V9 Wix Studio Implementation Reference

**Important:** This repository is an HTML/CSS/JS design reference. It does not edit, replace or connect to the existing Wix Studio website. The current Wix Bookings app and the global Header/Footer are to be preserved. Do not paste HTML from this archive into Wix native booking controls and assume it implements booking.

## Recommended page structure and design translation at Desktop 1280px

| Existing editorial page | Retain from V7 | New V9 section(s) | Source styling |
|---|---|---|---|
| HOME | V4 Hero / Lightline, established sections | Beyond the Waterways (small teaser) | `.v9-home-editorial` |
| THE PARK | Hero, living landscape, community, agriculture | BERAE three pillars | `.v9-berae`, `.v9-three-pillars` |
| EXPERIENCES | Hero, 3 individually selectable activities, night guidance | Tour A/B cards, nine stops, pricing disclosure | `.v9-eco-tours`, `.v9-tour-grid`, `.v9-rates-panel` |
| BIODIVERSITY | Gallery, habitat bridge | Birdwatching context | `.v9-birdwatch` |
| STORIES & HISTORY | Historic timeline, existing agriculture photo essay | Community weaving + school garden | `.v9-community-stories` |
| PLAN YOUR VISIT | V7 essentials, three-stage timeline, rules, visual and guide callout | Nature Trail checklist, Tahanan photo, Early Riser | `.v9-trail-prep` |
| VISITOR GUIDE | Hero, responsibility accordions, Pagatpat feature, CTA | Short policies, concise practical cards | `.v9-guide-policies` |
| BOOK ONLINE | Native Wix Bookings to be styled later | V9 prototype individual cards + package estimator specification | `.v9-book-individual`, `.v9-book-packages` |

### Main V9 palette and typography

- Forest `#0B2F24`, deeper forest `#071F19`, ivory `#FFFDF8`, soft background `#F4F0E6`, sage `#EDF2E6`, green accent `#087C35`.
- Editorial headings: Georgia, typically 38–64px depending on section, 400 weight, around 1.02 line-height, -0.04em letter-spacing.
- Body: Inter, 16–17px and 1.7–1.72 line-height; links 13px, 800 weight, 0.09em tracking.
- Page widths: preserve accepted sitewide 1160/1184px container convention in the actual Wix editor. Do not blindly alter completed parent Stacks.
- Image overlays: preserve the accepted `global.css` classes from the existing Wix project. Do not layer new overlaid gradients.

### New V9 section Inspector equivalents

| Section | Desktop layout | Gap | Section top/bottom | Container/corners | Image treatment |
|---|---|---|---|---|---|
| HOME editorial | 0.95fr / 1.05fr | 60px horizontal / 0 vertical | 94px / 94px | `#EEF3EE` full width | 22px radius; max height 510px |
| THE PARK BERAE | 3 equal cards | 20px horizontal / 0 vertical | 105px / 105px | `#FFFDF8`; card BG `#F5F6EE`, 20px corners; 1px `#DCE7DE` | 170px-high card photos, 13px radius |
| EXPERIENCES Tour A/B | 2 equal cards | 22px horizontal / 0 vertical | 105px / 105px | `#EEF3EE`; card BG `#FFFDF8`, 23px corners, 1px `#DCE7DE` | 285px-high photo, cover |
| EXPERIENCES itinerary | 1.05fr / 0.95fr | 44px horizontal / 0 vertical | within packages | disclosure 14px radius | three thumbnails, 170px tall |
| STORIES community | 2 equal image cards | 23px horizontal / 0 vertical | 95px / 95px | `#F5F3E9`; image cells BG `#FFFDF8`, radius 19px | 270px-high imagery |
| PLAN trail preparation | 0.95fr / 1.05fr | 60px horizontal / 0 vertical | 110px / 110px | `#EDF2E6` | 22px radius; max height 510px |
| GUIDE policies | 3 equal cards | 17px horizontal / 0 vertical | 82px / 82px | `#EDF2E6`; card BG `#FFFDF8`, radius 14px | no new photo |
| BOOK individual options | 3 equal cards | 18px horizontal / 0 vertical | 95px / 95px | `#FFFDF8`; card BG `#F5F6EF`, radius 19px, border 1px `#DDE8DE` | 210px-high photos |
| BOOK group estimate | 1fr / 330px summary | 36px horizontal / 0 vertical | 95px / 95px | `#F4F0E6`; left `#FFFDF8` radius 24px; right `#071F19` radius 21px | no editorial photo |

### Booking components—do not confuse design with integration

The Wix-managed Book Online/Service Page/Booking Calendar/Booking Form/Checkout/Thank You pages are already present in the user's Wix Studio site. The static V9 `booking.html` illustrates the proposed group-pricing model, but it does **not** create Wix services, reserve dates, collect deposits, or issue vouchers.

1. Keep three individual activities in the source, with rates not publicly confirmed.
2. Create Tour A and B Wix service records only once real dates, capacities, staff, and price path are decided.
3. The Tour A/B price depends on the number of paying adults. Wix's standard varied-pricing options let staff define price variations, but must **not** be assumed to derive a rate tier automatically from the adult count. Verify behavior in the actual account before enabling any payment.
4. The 30%-deposit/full-payment choice is pending approval and availability in the actual Wix account.
5. Early Riser remains an optional **on-site charge** and must not enter the online amount.
6. All Messenger-origin reservations must be recorded in the same calendar.
7. Staff should verify actual Wix booking reference, group count, payment balance and attendance at check-in.
8. Removing the header cart icon does **not** prove cart checkout is disabled. Test the actual booking flow before changing/removing other app pages.

Relevant current Wix documentation (retrieved November 2026):
- https://support.wix.com/en/article/wix-bookings-selecting-how-you-charge-for-bookings-services
- https://support.wix.com/en/article/wix-bookings-understanding-price-options
- https://support.wix.com/en/article/wix-bookings-getting-paid-offline

### Responsive implementation

The archive adds CSS media breakpoints for <=1000px and <=680px for new V9 components. Do **not** treat these as verified equivalence to Wix Studio Tablet 900px / Mobile 390px. Once page structure is approved and implemented in Wix, QA each native component and inherited V7 section at those breakpoints.
