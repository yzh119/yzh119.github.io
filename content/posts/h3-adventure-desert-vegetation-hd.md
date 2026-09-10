---
title: "[AI] Adventure map: desert vegetation"
date: 2026-09-10T10:42:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

Desert vegetation starts with a single cactus. It is small but a frequent silhouette for reading the desert biome, so the repaint keeps the original single trunk, short right arm, olive-and-yellow highlights and narrow footprint, without adding flowers, rocks or a background.

![HD cactus comparison](/images/h3-environment-hd/desert-cactus-hd-compare.png)

The body is installed at 2×, 3× and 4×. The native canvas, shadow, occlusion and hit template remain untouched, and the full resource check still reports zero errors. The customized-body count rises from 128 to **129**; remaining resources retain their complete HD baseline while they await category-by-category review.

A two-segment column cactus followed, retaining its original spine crown and upper/lower barrel structure.

![HD column-cactus comparison](/images/h3-environment-hd/desert-column-cactus-hd-compare.png)

Customized body resources now total **130**.

<s>A slim single-segment cactus can be safely extrapolated with the same prompt.</s> The test incorrectly added barrel sections, so it was not installed; every variant still needs its own original-art comparison.

![Rejected thin-cactus comparison](/images/h3-environment-hd/desert-thin-cactus-rejected-compare.png)

The low clustered cactus uses the new native-silhouette constraint: even if a generated draft introduces extra segments, the final body may only occupy the original three-lobe transparency outline.

![HD cluster-cactus comparison](/images/h3-environment-hd/desert-cluster-cactus-hd-compare.png)

Customized body resources now total **131**.
