# Make bottom season cards selectable on Pack Your Calendar

## Problem
On the Pack Your Calendar page, a user must scroll all the way to the top panel section to select a season. The two season cards that appear at the bottom (just above "Book Your Adventure", currently Brown Season / Green Season with their totals) are display-only — clicking them does nothing. If a user reaches the bottom without having selected a season, the "Book Your Adventure" button stays disabled ("Select a Season First") and they have no easy way to pick a season from where they are.

## Change
Make those two bottom season cards **clickable season selectors**, so a user can choose Brown or Green season right there above the booking button — no need to scroll back to the top.

### Where
File: `src/pages/PackYourCalendar.tsx`, the `grid grid-cols-2` block at ~lines 615-630.

### How
1. Add an `onClick` to each card that calls a season-select handler:
   - Brown card → `setSelectedSeason('brown')` and `setBookingSelection({ selectedSeason: 'brown', groupSize, totalCost })`
   - Green card → same for `'green'`
2. Add visual feedback for the selected state, matching the style language already used elsewhere on the page (the group-size and vehicle buttons):
   - Selected card: `ring-2 ring-safari-gold`, gold border, slight lift/shadow.
   - Unselected card: neutral border, `hover:bg-safari-gold/10 hover:border-safari-gold`.
3. Make both cards `cursor-pointer` and give them a transition so the selected/unselected states animate.
4. Keep showing the price totals on each card as they do now (they already compute `calculateTotalCost('brown'/'green', groupSize)`).
5. Optionally add a small "Selected" indicator (e.g. a gold check or "Selected" label) on the active card for clarity, consistent with the `TravelStyleSection` "Selected" badge pattern.

### What stays the same
- The top panel section still works as the primary selector.
- Pricing math, vehicle config, guide fee, group size, and the booking modal are untouched.
- The "Book Your Adventure" button logic is unchanged — it just becomes reachable because the user can now set `selectedSeason` from the bottom.

## Result
A user who lands on the pricing area without a season chosen can click either the Brown or Green season card right above the booking button; the card highlights as selected, the pricing breakdown appears, and the "Book Your Adventure" button enables — without scrolling back to the top.
