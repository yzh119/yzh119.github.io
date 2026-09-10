---
title: "Adventure map: tree clusters complete"
date: 2026-09-11T07:00:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

The tree clusters are now complete. The eight `AVLTRRO0`–`AVLTRRO7` sprites retain the original crown spacing, dead branches, rocks, depth ordering, and silhouette; only the brushwork, foliage, and lighting detail have been refined inside those bounds.

![Complete HD tree-cluster comparison](/images/h3-environment-hd/tree-clusters-complete-hd-compare.png)

That completes all 24 individual-tree and tree-cluster sprites in the `AVLTR` family. Their native alpha silhouettes are unchanged, so map occupancy, selection, and occlusion remain original. There are now **288** customized adventure-map bodies; the full set of 1,294 resources validates without errors at 2x, 3x, and 4x.
