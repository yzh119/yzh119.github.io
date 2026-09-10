---
title: "[AI] Adventure map: sea landmarks"
date: 2026-09-10T09:15:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

Sea-map objects need to remain recognizable at a very small display size. This batch updates the lighthouse and whirlpool by redrawing their original silhouettes, rather than replacing map symbols with elaborate seascapes.

## Boat variants

Alongside the boat replaced earlier, the two-mast sailing ship and single-sail longboat now have their own redraws. Both retain the original hull length, mast count, sail plan and prow-and-stern silhouette.

![Sailing ship and longboat](/images/h3-environment-hd/boats-compare.png)

## Lighthouse and whirlpool

The lighthouse keeps its narrow stone tower, orange lantern roof and signal mast. The whirlpool keeps its top-down flat circular flow, foam ring and central funnel. Original canvas, shadows, occlusion and object behaviour remain unchanged.

![Lighthouse and whirlpool](/images/h3-environment-hd/sea-landmarks-compare.png)

Assets are synced into the local private mod’s 2×, 3× and 4× layers. No VCMI source was modified.
