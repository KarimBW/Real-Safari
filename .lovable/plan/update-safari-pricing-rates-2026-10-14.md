# Update safari pricing rates

## New rates (per person, per vehicle)

| Vehicle occupancy | Low season (Green) | High season (Brown) |
|---|---|---|
| 2 people sharing | RM 5,850 PP | RM 7,500 PP |
| 3 people sharing | RM 4,000 PP | RM 5,700 PP |

Calculation stays the same: total = (rate × people) summed per vehicle, plus the flat RM 1,750 guided add-on per booking.

## Current rates being replaced

- 2-person: Green RM 8,480 PP → **RM 5,850 PP**; Brown RM 9,430 PP → **RM 7,500 PP**
- 3+ person: Green RM 5,500 PP → **RM 4,000 PP**; Brown RM 6,500 PP → **RM 5,700 PP**

## Changes

1. **`src/pages/PackYourCalendar.tsx`** — update the season pricing data (Brown/Green `twoPersons` and `threePersons` rates) so the cost calculator, per-person vehicle breakdown lines, and season cards all show the new figures.
2. **`src/components/Safari/TravelStyleSection.tsx`** — update any displayed rates.
3. **`src/components/Safari/PackageOverview.tsx`** — update any displayed rates.
4. **`mem://business/pricing`** — save the new rates as the standing pricing rule.
5. Search the codebase for any other hardcoded old prices (8,480 / 9,430 / 5,500 / 6,500) and update them.

## Verification

- Check the build log for errors.
- Confirm the calculator: e.g. Green 2-pax = 2 × 5,850 = RM 11,700; Brown 3-pax = 3 × 5,700 = RM 17,100; guided adds RM 1,750 once per booking.

## Note

The guide fee (RM 1,750 flat per booking) and the "PP per vehicle line, total at bottom" display stay unchanged.
