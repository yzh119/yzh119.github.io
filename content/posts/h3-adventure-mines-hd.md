---
title: "[AI] Adventure map: mine terrain variants"
date: 2026-09-10T10:18:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

Adventure-map mines have distinct rock, snow, sand/subterranean, swamp and lava variants. This pass adds HD material detail to all five while retaining the original compact silhouette: entrance, timber framing and the rail running to the lower left.

![Mine terrain variants comparison](/images/h3-environment-hd/mines-terrain-compare.png)

The generated art is first cut to the original canvas, then constrained by the native transparency silhouette. Hit areas, occlusion, shadows and animation data therefore stay intact. All five resources are installed at 2×, 3× and 4×; the full adventure-resource audit reports zero errors, with no VCMI source changes.
