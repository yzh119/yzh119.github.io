---
title: "[AI] Adventure map: sea and shoreline"
date: 2026-09-10T10:05:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

The water tile `WATRTL` had been omitted from the terrain build list. Objects and boats therefore had HD versions while the water itself remained at native resolution. This pass adds 2×, 3× and 4× water resources, then updates only the water body with a newly painted low-contrast ocean material.

## Preserving shoreline transitions

The water DEF places sea, sand, rock shore and foam in the same frame. Repainting the whole image would turn the shore blue, so the tool now has `--water-only`: it replaces blue-dominant water while preserving native shores, foam, tile choice and transition geometry.

![Sea and shoreline comparison](/images/h3-environment-hd/water-terrain-compare.png)

All 99 water frames, three scales and their layers passed an independent check; the full adventure-object audit passed again as well. No VCMI source was modified.
