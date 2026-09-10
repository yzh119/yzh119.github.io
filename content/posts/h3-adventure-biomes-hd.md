---
title: "[AI] Enhancing Heroes of Might and Magic III with generative AI: adventure-map biomes and vegetation"
date: 2026-09-10T08:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

This post covers adventure-map ground, mountains and vegetation. The earlier long post remains as a development archive; map work is now published as focused updates.

## Replaceable ground materials

Grass, rough, dirt, sand, snow, swamp, subterranean and lava ground, together with roads and rivers, now use newly painted high-resolution materials. Original tile boundaries, transition geometry, masks and passability remain in control of the original assets, so added detail does not alter map rules.

![Ground-material comparison](/images/h3-environment-hd/material-redraw-compare.png)

## Mountains

Alongside grass, rough and snow, desert, swamp, subterranean and lava now have matching mountain replacements. Every object retains its original canvas, shadow and occlusion layers; only the visible body changes, preserving draw order and click bounds.

![Grass and rough mountains](/images/h3-environment-hd/mountain-variants-compare.png)

![Mountains across biomes](/images/h3-environment-hd/mountains-biomes-compare.png)

![Volcanic, desert and deadwood](/images/h3-environment-hd/volcanic-desert-deadwood-compare.png)

## Forests, brush and wetlands

Grass forests, pines, snowy trees, palms, dead trees, thorn brush and swamp reeds have been replaced group by group. These are not simple enlargements: generated art provides bark, foliage and rock detail, while the registration tool fits it back into the original object silhouette.

![Vegetation comparison](/images/h3-environment-hd/vegetation-compare.png)

![Brush and reeds](/images/h3-environment-hd/brush-reeds-compare.png)

![Natural objects across biomes](/images/h3-environment-hd/biome-objects-compare.png)

The assets are enabled in a local private mod and require no VCMI source changes. This remains an ongoing replacement pass; unrepainted objects are not presented as complete.
