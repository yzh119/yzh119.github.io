---
title: "[AI] Adventure map: fidelity constraints and a rejected draft"
date: 2026-09-10T10:32:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

The HD Hill Fort test did not pass review. Both drafts misread the original's low central roof as another tower, turning a compact outpost into an unfaithful castle. Neither draft was installed.

![Hill Fort fidelity review](/images/h3-environment-hd/hill-fort-fidelity-review.png)

<s>More stone detail alone is not a completion criterion.</s> Static landmarks now need to match the original tower count, roof hierarchy, entrance placement and overall footprint in addition to keeping their native hit canvas. Results that miss those requirements remain documented rejected drafts. The five terrain-specific mine variants passed that review and remain installed.

## Offline super-resolution sample: rejected as well

<s>Sending the original sprite through an offline super-resolution model yields safe bulk HD art.</s> The test retained the broad outline but reconstructed the masonry, roof and edge treatment, so it still does not match the original. This method remains a source of natural-material reference only; it will not overwrite static buildings in bulk.

![Hill Fort offline super-resolution review](/images/h3-environment-hd/hill-fort-super-resolution-review.png)
