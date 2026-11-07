# V9 Final QA Report

**Source status:** V9 reference prototype complete; **not approved or deployed to live Wix Studio**.

## Verified source checks

- 8 public HTML pages exactly: biodiversity.html, plan-your-visit.html, the-park.html, stories.html, index.html, experiences.html, booking.html, visitor-guide.html.
- No `nature-trail.html` present; no internal links refer to a deleted page.
- Static local references (images/scripts/stylesheets and page links): **0 unresolved**.
- Internal section anchors: **0 broken**.
- Main image alt attributes: **0 missing**.
- Group pricing: **240 independent arithmetic cases** across 2 packages, 10 adult tiers, 4 child quantities, and 3 young-child quantities.
- Three adults + two 4–12-year-olds, Tour B: ₱15,600 (verified).
- Early Riser is stated as an optional on-site charge excluded from the online base estimate.
- Unconfirmed individual prices and obsolete Complete Experience are absent from public booking prices.
- No source claims to create confirmed reservations or payments.
- V9 source CSS is layered after V7/V8 CSS to preserve their appearance and original HOME scene JS.
- JavaScript syntax: `node --check js/v9-pricing.js` passed in the working environment.

## Limits / unresolved quality gates

- Browser rendering at 1280px/900px/390px **not verified**: the isolated browser returned `ERR_BLOCKED_BY_ADMINISTRATOR` for both local file and local HTTP origin. Visual layout/overflow must be checked in an accessible browser.
- No live Wix Studio pages were edited or published. Native booking controls need separate real-site configuration and testing.
- Client crops are small and must be manually replaced by higher-quality originals. Copyright and subject permissions must be confirmed.
- Individual activity rates, Tour A/B dates and capacity, 30% deposit proposal, cancellation/refund policies, groups above 10, Early Riser eligibility and precise official location/stop names remain management-dependent.
- Existing old footer/header CTA labels and nav link placements must be reconciled in live Wix Studio, where the site URL structure may differ from this source preview.
- The 100-point source/editorial audit has pending findings; it is not a certificate of production readiness.

## Re-test after Wix implementation

1. Actual schedule availability and shared guide/kayak capacity.
2. Multiple simultaneous booking attempts for last places.
3. Correct group-tier/child composition price at Wix checkout.
4. Optional deposit vs full payment where eligible; no unintended manual-payment bypass.
5. Early Riser never included in online collection.
6. Messenger-origin booking recorded in same availability calendar.
7. Genuine confirmation email, reference and accurate payment receipt.
8. Staff balance tracking and visitor check-in.
9. Responsive and accessible controls in Wix Studio.
10. Approved Wix native flow before retiring the original demo page.
