# Website audit — 2026-08-24

**Official URL:** https://jlandtmcleaning.co.uk/  
**Method:** no-login temporary Chrome renders; no interaction with the cookie banner, Book control or contact form. HTTP status alone was not used as acceptance evidence.

## Browser evidence

| Viewport | Evidence | Observed result |
|---|---|---|
| 1440×900 | `evidence/desktop.png` | Header presents the business name and tagline, logo, social icons and a long horizontal navigation (About Our Business, Gallery, Amenities, Client Reviews, Price List, Our Cleaners, Reviews, Opening Hours and “Show more …”). A generic yellow-glove stock-style hero dominates the rest of the first viewport. A cookie banner covers the lower-left page area. |
| 390×844 | `evidence/mobile.png` | The orange navigation band is visually empty, the logo separates from the name, and the business name is visibly cut off on the right rather than reflowing cleanly. The cookie banner covers much of the lower viewport, including the hero’s lower area. No direct primary contact CTA is visible in the captured first screen. |

## Audit findings

| Area | Evidence-led finding | Customer impact | Priority |
|---|---|---|---|
| Mobile layout | At 390px, “JL and TM Cleaning quality cle…” is clipped at the right edge. | A first-time mobile visitor cannot read the complete business name in the initial identity block. | P0 |
| First-screen hierarchy | Desktop presents a long menu before any concise explanation of who is served, what is offered or how to contact the business; the hero is an unbranded generic cleaning image. | The page uses valuable opening attention before visitors see the core domestic/commercial offer or direct enquiry route. | P0 |
| CTA/contact | The owned markup exposes telephone and email, but neither is the dominant first-screen CTA in the captured desktop or mobile states. A separate Book control exists; its destination was not followed. | Visitors have to discover the appropriate contact action; a prospective static page should make the known call/email route explicit rather than invent booking. | P0 |
| Navigation | The desktop has many competing labels, including both “Client Reviews” and “Reviews”, and two Price List paths. The mobile capture exposes no usable menu label. | The structure signals duplicated/unclear choices rather than a short evaluation path. | P1 |
| Proof | The page visibly shows 13 reviews and includes dated review text lower in the rendered content, but proof is not prioritised in the first screen. | Strongest public credibility is present but not doing early trust-building work. | P1 |
| Service grouping | The content evidences a long service list and prices, but the opening page does not frame a small, clearly differentiated set for domestic, tenancy/deep and business needs. | A visitor must parse many offers before understanding the most relevant service category. | P1 |
| Geo consistency | Page title/body uses Cardiff and surrounding areas; structured/contact data says Merthyr Tydfil; other owned copy says RCT and surrounding areas. | Inconsistent location language can reduce confidence; it is a content-verification issue, not a design-only issue. | P0 before any public copy |
| Broken route | Current direct URL https://jlandtmcleaning.co.uk/reviews returned a rendered `404 Not Found`, although review content appears on the home page. | A direct review route is not reliable. Do not use it in future customer-facing links until retested. | P1 |

## Link and technical boundary

The home-page rendered navigation exposes internal anchors and several service/price detail routes. This research did not mechanically follow or submit every action because the task permits only read-only site inspection and does not authorise customer-path transactions. One directly requested/reopened route, `/reviews`, visibly failed with 404. No claim is made that all other links are healthy.

Chrome's captured process output contained only a browser-level Google registration `DEPRECATED_ENDPOINT` message, not a page-specific business-function failure; it is preserved as a short note in `evidence/console.txt` and is not used as a website-quality finding.

## Opportunity framing

The case for a static one-pager is a materially clearer **browse → trust → call/email** path: one accurate geographic statement, a short verified service grouping, a compact public-proof module and a single direct contact action. It is not a claim that the business needs a redesign merely because its current site looks dated.
