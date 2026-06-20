## Flyer update — driver fix

Revise the existing Real Safari flyer (`/mnt/documents/real-safari-flyer-v3.png`) so the vehicle in the central scene has a proper driver — the specific guide from the uploaded reference photo — sitting in the front driver's seat.

### Steps

1. Use `imagegen--edit_image` with two inputs:
   - The current flyer base (`/mnt/documents/real-safari-flyer-base.png`)
   - The uploaded guide reference (`user-uploads://ed893bcd-0da0-45e5-8135-ce376bac5b68.jpeg`) — Black man, black cap, sunglasses, beard, white shirt
   
   Prompt the model to replace the vehicle scene so the guide is clearly seated in the front driver's seat behind the steering wheel of the safari 4x4, preserving his likeness (cap, sunglasses, beard, white shirt). Keep everything else (layout, three photo panels, tagline, contact bar, savanna backdrop) identical.

2. Re-composite the real Real Safari logo (`public/lovable-uploads/40b013e5-2309-4502-8173-45799a40ea4e.png`) onto the top-left of the new base using PIL, same sizing/margins as v3.

3. Save as `/mnt/documents/real-safari-flyer-v4.png` and present it for review.

### Notes
- No code changes to the website.
- If the AI edit can't preserve the guide's likeness well in one pass, do a second edit pass focused only on the driver area.
