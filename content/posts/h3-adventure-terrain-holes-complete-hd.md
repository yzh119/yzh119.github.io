---
draft: true
title: "Adventure map: terrain holes complete"
date: 2026-09-11T15:00:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

All seven terrain-hole sprites — `AVLHOLD0`, `AVLHOLG0`, `AVLHOLL0`, `AVLHOLR0`, `AVLHOLS0`, `AVLHOLU0`, and `AVLHOLX0` — now have HD artwork. Their dark centers, biome-specific rims, and irregular outlines are retained; the enhancement adds only soil, stones, grass, and snow detail.

![Complete terrain holes HD comparison](/images/h3-environment-hd/terrain-holes-complete-hd-compare.png)

The final sprites are constrained to their original transparent outlines, so map footprint, click area, and draw occlusion are unchanged. The complete adventure set validates with zero errors at 2x, 3x, and 4x.
