# V9 Tour Pricing and Booking Rules

**Status:** Content/pricing prototype, not an activated Wix Bookings payment system.

## Rate matrix

| Paying adults | Tour A / adult | Tour B / adult |
|---:|---:|---:|
| 1 | ₱4,500 | ₱5,500 |
| 2 | ₱3,000 | ₱4,000 |
| 3 | ₱2,900 | ₱3,900 |
| 4 | ₱2,800 | ₱3,800 |
| 5 | ₱2,700 | ₱3,700 |
| 6 | ₱2,600 | ₱3,600 |
| 7 | ₱2,500 | ₱3,500 |
| 8 | ₱2,400 | ₱3,400 |
| 9 | ₱2,300 | ₱3,300 |
| 10 | ₱2,200 | ₱3,200 |

Base amount = adults × current per-adult tier + children aged 4–12 × 50% of that tier. Children aged 3 and below join free without meals. A group with no paying adult has no supplied rate; it must request staff assistance. Groups with more than ten paying adults also need quotation, not an extrapolated rate.

**Tour A:** Full-day Nature Trail, community, birdwatching, regenerative farm, Pitcher Hill, Kilit Creek, Astronomy Hill, greenhouse retreat, school farm, chapel; guided, meals included.

**Tour B:** All Tour A activities plus paddling, sunset, firefly and bioluminescent-plankton experiences, subject to natural/operational conditions.

**Transport:** Not included; arrange with park staff. **Early Riser:** Optional ₱150/head or ₱300 solo, subject to eligibility, payable at park, **excluded from base price and online payment**.

**30% deposit OR 100% full payment:** Suggested policy only, **not yet approved**, not collected in static source. 30% of base amount may be shown for illustration and must not create a payment link. Outstanding balance and refund/cancellation handling require formal approval. Age eligibility and definition of “solo” for Early Riser also need confirmation.

**Existing V7 individual rates:** Historical ₱600 Mangrove Kayak, ₱400 Boardwalk and ₱600 Fireflies+Night Kayak. Their current rates are unverified; V9 shows inquiry instead of those figures. The former ₱1,000 Complete Experience is not offered as a confirmed separate package in V9.

**Operating hours:** 1:00 PM–9:00 PM retained provisionally as general visitor hours, **not** asserted as Nature Trail departure times. Use only staff-approved calendar dates and capacities when Wix is configured.

### Quality-control examples

- Tour B, 3 adults, 2 children ages 4–12: 3 × ₱3,900 + 2 × ₱1,950 = **₱15,600**. Proposed 30% illustration ₱4,680; not a live deposit.
- Tour A, 10 adults: 10 × ₱2,200 = **₱22,000**.
- Tour A, 1 adult: **₱4,500**; the two-adult rate must not be used for solo.
- 11 adults: **request quotation**, do not multiply by the ten-adult rate without management approval.

Source data lives in `data/v9-pricing-rules.json`, and a JavaScript demonstration estimator lives in `js/v9-pricing.js`. These are not connected to checkout.
