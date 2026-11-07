# Kingfisher Park — Version 7: Wix Studio Implementation Guide

**Baseline:** Version 6 final source audit, 2 November 2026. The HOME page HTML is unchanged. This Version 7 update is a design and interaction prototype for the seven non-HOME pages, not a production-ready booking deployment.

## Build order

Keep the existing global Wix Studio Header/Footer and the accepted 1280px Desktop, 900px Tablet, and 390px Mobile editing widths. No extra breakpoint is required merely to build the new sections. Preserve the approved 14px starting side padding on smaller breakpoints; position internal elements as necessary. Recreate each feature with native Wix Studio elements first.

| Page | Version 7 feature | Native Wix Studio implementation | Images / content status |
|---|---|---|---|
| Biodiversity | Horizontal, arrow-controlled wildlife gallery with ALL PHOTOS, BIRDLIFE and FLORA tabs; 6 unique photos | **Wix Pro Gallery** set to Slider or horizontal scrolling, navigation arrows enabled; add **Tabs** (or three tab buttons + gallery show/hide). Assign each category its own gallery with existing photo subset. Avoid regular Slider Repeater when native prev/next arrows are required; those arrows are not included in that Repeater layout. Alternative: Wix **Slideshow Repeater** with built-in arrow controls. | 5 bird images, 1 flower. No unverified species names. Ask client for more flora and fauna photos. |
| The Park | Editorial community photos + succinct 2010 archival teaser, linking to Stories | Native **CSS Grid Containers**, one primary image, two secondary images, two-column archive teaser | Archive captions retained. Agriculture mosaic kept in current V6 implementation. |
| Experiences | Alternating full-width image-and-details panels and separate evening visitor-preparation block | Native **Grid** or **Repeater with Cards** at Desktop, Stack/one-column on Mobile; simple static note panels | Real currently available photos only. Never describe the night-sky image as actual kayak participants. |
| Stories & History | Chronological editorial timeline; compact community teaser; six-photo agriculture photo essay with lead feature | Native **Stacks/Containers**, vertical divider and dot shapes, existing six image cards in a two/three-column photo essay | Archive dates must be accurate. Agriculture shown as a community activity, not a bookable tour. |
| Plan Your Visit | Daylight-to-night sequence with image per stage; two scenic images and staff-contact CTA | Native **Stack / Timeline**, image elements and a two-column grid. | Scenic images are not claimed to show the entrance or meeting point. Request operational photographs. |
| Visitor Guide | Three practical accordions for before arrival, habitat protection, during the tour | Native **Accordion** element with first panel open. Use print-friendly expanded content in exported print version. | Preserve firefly/mangrove precautions. Externally hosted Pagatpat photograph requires authentic local photo replacement. |
| Booking | Four image thumbnails within the existing experience selection controls | Add an **Image** inside each existing radio/selection card; do not rebuild step transitions, pricing, or payment logic. | Retain explicit simulation disclosure: no actual reservation, payment processing, or final slot confirmation. |

## Biodiversity behavior (exact design contract)

- Gallery category buttons: ALL PHOTOS (6), BIRDLIFE (5), FLORA (1). Do not duplicate Flora to fake a multi-image category.
- Desktop: ~3 images partially visible, tablet ~2, mobile ~1 with swipe. Native Pro Gallery arrows. No autoplay. Select a photo to see a larger view if native expanded view is enabled.
- Include descriptive text or species name **only when verified by the client**. All photo alt texts should remain descriptive but non-speculative.
- Accessible control labels for previous/next; active category visually distinct. The standalone prototype implements scroll-snap, category switching, keyboard navigation and disabled arrows; Wix's built-in Pro Gallery replaces those JavaScript mechanics.
- Native Wix Pro Gallery arrows may not be shown in expanded mobile view; touch swipe is expected there.

## Photos still needed from client

1. **Biodiversity**: correctly identified mangrove species including actual Pagatpat, additional flora/flowers, crabs, insects, other wildlife, plus park location and photo consent. Ask for 10–15 additional suitable photographs, not just birds.
2. **Experiences**: recent, authentic Firefly Boardwalk tours, day kayak and night kayak with visitors (without flash or wildlife disturbance); guides and preparation process. Five to eight photos.
3. **Plan Your Visit / Guide**: park entrance and sign, verified meeting point, pathways, arrival/briefing, any facilities **only if these actually exist**; authentic Pagatpat species photograph. Five to eight photos.
4. **The Park / Stories**: recent landscape and conservation/community work, date-labeled historical comparison, regenerative farming with confirmed activity information, photographer permission. Six to eight photos.

Do not attach facility claims, rates, species labels, conservation-impact statistics, transport options or active-program status without client confirmation. Existing public rates and operating hours need final reconfirmation.

## Known non-blocking limitations / before launch

- The Visitor Guide currently uses a LOCAL mangrove landscape photo as clearly labeled habitat context, with a link to an independently identified Pagatpat image on Wikimedia. Replace the contextual image with an authenticated Kingfisher Park Pagatpat photograph when available.
- The booking workflow remains a *prototype simulation*, not a live booking or payment integration. Do **not** remove its disclosures until functional integrations and policies are approved.
- The privacy/booking-terms footer text must link to approved legal pages before publication.
- External staff contact and photo licensing must be checked before publication.
- The HOME mobile landscape / actual-phone Lightline QA previously deferred remains outstanding; this update intentionally leaves the HOME page intact.

## Version notes

Version 7 contains seven redesigned non-HOME pages while preserving the same assets and common design system. `index.html` is bit-identical to the audited Version 6 source. `css/styles.css` receives *only scoped rules* under `.kp-v7-*` for the redesigned pages; `js/main.js` adds a Biodiversity gallery controller that runs only when `[data-wildlife-explorer]` is present. `css/booking.css` adds scoped photographic card styling; the eight-stage `js/booking.js` file is untouched.
