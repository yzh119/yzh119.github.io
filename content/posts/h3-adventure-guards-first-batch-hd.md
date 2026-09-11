---
title: "Adventure map: guards, first batch"
date: 2026-09-12T07:00:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

<s>The first 28 single-frame adventure-map guards now have HD artwork in the game, covering dragons, elementals, creatures and special monsters from Heroes of Might and Magic III. Every result starts from its matching original; enhancement adds only brushwork and material detail, without changing identity, pose or proportions.</s> This batch has been withdrawn. Guards remain animated creatures on the adventure map, not static decorations; even when the current resource exposes one frame, a single 2D image cannot replace them. They have returned to native artwork and must go through Blender 3D modelling, rigging and rendered sequences before a future installation.

![Guards first batch: original and HD comparison](/images/h3-environment-hd/adventure-guards-first-batch-hd-compare.png)

Each result is constrained back to its original transparent silhouette, preserving native footprint, click area and draw order. <s>Animated objects no longer repeat a single image across every frame: the new tool requires frame-for-frame input, preserving original timing, shadows and overlays.</s> This is still 2D frame generation and does not meet this project’s requirement for animated art. Animated objects have been removed from this workflow: they must go through Blender 3D modelling, rigging and a rendered sequence before installation; the native animation remains in use until then. Full 2×, 3× and 4× resource validation reports zero errors.
