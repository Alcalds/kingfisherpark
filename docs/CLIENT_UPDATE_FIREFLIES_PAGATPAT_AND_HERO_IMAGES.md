# V4 client update — Firefly viewing, Pagatpat and Hero photography

## Client notes and placements

- **Visitor Guide > Explore gently:** Ask visitors not to touch or catch fireflies; insect repellent on skin can harm them. Do not touch mangrove leaves. Apply insect repellent **before entering the park**.
- **Visitor Guide > The mystery of the Pagatpat:** A species-identified photograph accompanies a brief teaser. The guide reveals the story during the tour; the website intentionally does not give it away.
- **HOME > Firefly Boardwalk and Fireflies + Night Kayak** and **Experiences page > the same cards:** Display the short pre-entry repellent instruction below the existing conditions note.
- **Plan Your Visit > Know Before You Go > Keep the habitat in mind:** Replace ambiguous repellent advice with the explicit before-entry timing.
- **Booking > What to Expect > Respect the habitat:** Reinforce the rules without altering any payment or booking calculations.

## Pagatpat photograph

The existing V4 asset package had no photo explicitly identified as Pagatpat. This reference uses **Pagatpat (Sonneratia alba) at the Iloilo River** by **A.C.T. Alejandre**, *CC BY-SA 4.0*, from Wikimedia Commons:
https://commons.wikimedia.org/wiki/File:Pagatpat_(Sonneratia_alba).jpg
License: https://creativecommons.org/licenses/by-sa/4.0/

The original image is linked directly (not bundled) to preserve clear attribution and photographic authenticity. **Internet access is required for that one image.** A local park panorama is shown as a fallback when offline, with a conspicuous fallback notice and updated alternative text. For a fully offline package, obtain a species-confirmed photograph from the park team and replace the URL with a local copy before going live; retain attribution/permissions when applicable. The reference photo depicts Iloilo River—not Kingfisher Park.

## Hero image fix

Subpage Hero photograph URLs previously originated in inline `--subpage-image` variables and could resolve incorrectly relative to `css/styles.css`. The Experiences Hero additionally had the wrong folder path. All five primary subpage Heroes now use explicit local `<img>` elements (document-relative paths) with existing text overlays. Visitor Guide and Booking Hero also have visible local images from V4.

## Other outstanding work

The booking page remains an interactive **demo** and explicitly says no real reservations or payments are processed; those safeguards are intentionally retained until working booking/payment integrations are built. This source update does not publish or change the already implemented Wix HOME.

## Previously approved wording retained in revised source

The Complete Experience note was already accepted/implemented in Wix as **“Activity timing depends on availability and conditions.”** The source V4 HOME and Experiences pages now use that wording instead of reintroducing the older “live booking system” text. Other earlier proposed production-copy replacements that were not explicitly confirmed in source remain subject to the future complete copy review.
