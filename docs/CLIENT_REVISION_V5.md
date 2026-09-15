# Kingfisher Park — Client Revision V5

## Compact reservation-request booking model

This revision responds to staff feedback that the mobile booking experience should be much simpler and should not require visitors to scroll through a long multi-step booking workflow.

### What changed

- Replaced the previous 8-step prototype with one compact reservation-request form.
- Mobile flow is now: **Book Now → Short Form → Request Received**.
- Required fields are limited to:
  - Experience
  - Preferred date
  - Number of guests
  - Full name
  - Mobile / WhatsApp
- Email is optional.
- Special request is optional and collapsed by default.
- Experience pricing remains visible in the booking form, where it is useful for decision-making.
- The form does not ask for payment.
- Submission is explicitly described as a **reservation request**, not a confirmed booking.
- Exact activity time is not requested because final time slots have not yet been confirmed by the client.

### Mangrove Kayak tide information

When Mangrove Kayak is selected, the form immediately shows:

> Tide-dependent: availability depends on low/high tide conditions and suitable water depth.

The Complete Experience also carries a tide notice because it includes Mangrove Kayak.

### What to Expect

The previous dedicated "What to Expect" booking stage is now an expandable disclosure directly inside the form. This keeps the information available without lengthening the booking process.

### Mobile behavior

The booking page has a special compact mobile layout:

- compact floating header;
- reduced page chrome;
- single booking card;
- two-column compact fields where space permits;
- footer hidden on mobile booking view;
- optional fields collapsed;
- very short-height phones hide non-essential expandable detail to avoid a long page.

The target is to keep the primary form at or near one phone viewport on common modern phones. When the on-screen keyboard opens, limited browser scrolling may still occur; this is normal mobile form behavior and avoids shrinking inputs below accessible sizes.

### Wix Studio implementation path

This revision is intentionally Wix-compatible.

- Layout, fields, dropdown, date picker, button and disclosures can be recreated with native Wix Studio elements.
- The live form can be implemented with Wix Forms / CMS and Velo as needed.
- Staff notification and request storage can be configured in Wix.
- Dynamic experience/tide notes can be handled with Velo or conditional element states.
- No custom payment system is needed for this reservation-request version.
- The prototype submission remains local-only and does not transmit visitor data.

### Future upgrade path

If Kingfisher Park later confirms fixed schedules, capacities, cancellation rules and payment requirements, this compact request form can be upgraded to Wix Bookings / eCommerce without changing the site's overall visual language.
