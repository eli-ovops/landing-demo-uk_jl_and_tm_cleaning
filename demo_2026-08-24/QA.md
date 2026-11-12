# Demo QA — Revision 3 / Direction G rebuild

**Target:** 75/100 local-concept quality.  
**Current status:** `AWAITING TRUE-BROWSER AND INDEPENDENT VISUAL ACCEPTANCE`.

## Completed static checks

| Check | Result | Evidence |
| --- | --- | --- |
| Direction G implemented | PASS | `index.html` now follows the purchase-led sequence: service-first real carpet-work hero, genuine oven before/after proof, three factual service groups, two unique work scenes, then direct contact/hours close. |
| Static-only scope | PASS | No form, booking, payment, analytics or data collection. Contact routes are `tel:` and `mailto:` only. The only motion is optional CTA press feedback. |
| Asset boundary | PASS | Customer-authorised logo, genuine oven pair and real carpet/home/commercial work scenes are referenced exactly as mapped in the ledger. `carpet-before-ai.png` and excluded stock media are not referenced. |
| Facts / contact | PASS | Public phone, Gmail and Mon-Sat 08:00-18:00 match current research. No broader Cardiff/RCT service-area promise, prices, review quote/rating, owner identity or credentials appear. |
| Source asset paths | PASS | `brand-mark.jpg`, `candidate-1.jpg`, `candidate-2.jpg`, `candidate-3.jpg`, `candidate-9.jpg` and `candidate-12.jpg` exist in the Demo asset directory. |
| Script syntax and motion guard | PASS | `node --check script.js` passes. GSAP runs only for `prefers-reduced-motion: no-preference`; it is a transform-only CTA press response, and the page remains usable if the CDN script is unavailable. |
| Client-visible internal-text gate | PASS | Visible HTML has no AI, rights, prompt, authorisation, PMO or placeholder disclosure. The permitted minimal `Independent concept preview` label remains only in the footer. |

## Not passed

| Check | Status | Reason |
| --- | --- | --- |
| 1440×900 true-browser visual QA | BLOCKED | Browser security policy rejected reopening the local `file:` page. No workaround, local server or alternate automation was used. |
| 390×844 true-browser visual QA | BLOCKED | Same browser-policy block. |
| Independent final visual acceptance | AWAITING | Requires a different Owner after true-browser desktop and mobile evidence exists. |
| `CLIENT-SHOWABLE DEMO` | FAIL | It cannot pass until both viewport evidence and independent acceptance are complete. |
