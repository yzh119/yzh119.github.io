---
title: "[AI] Adventure map: biomes and vegetation"
date: 2026-09-10T08:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

This post covers adventure-map ground, mountains and vegetation. The earlier long post remains as a development archive; ~~map work is now published as focused updates.~~ Updates are now consolidated by broad category, so this page is the public record for natural scenery rather than a stream of small asset posts.

## Replaceable ground materials

Grass, rough, dirt, sand, snow, swamp, subterranean and lava ground, together with roads and rivers, now use newly painted high-resolution materials. Original tile boundaries, transition geometry, masks and passability remain in control of the original assets, so added detail does not alter map rules.

![Ground-material comparison](/images/h3-environment-hd/material-redraw-compare.png)

## Mountains

Alongside grass, rough and snow, desert, swamp, subterranean and lava now have matching mountain replacements. Every object retains its original canvas, shadow and occlusion layers; only the visible body changes, preserving draw order and click bounds.

![Grass and rough mountains](/images/h3-environment-hd/mountain-variants-compare.png)

![Mountains across biomes](/images/h3-environment-hd/mountains-biomes-compare.png)

![Volcanic, desert and deadwood](/images/h3-environment-hd/volcanic-desert-deadwood-compare.png)

## Woodland canopies

The eight horizontal, vertical and square woodland-canopy footprints on the adventure map have their own replacements. Each retains its native object canvas and occlusion layers, preserving occupancy while the new bodies add layered foliage, visible trunks, ferns and stones.

![Woodland canopies](/images/h3-environment-hd/woodland-canopies-compare.png)

## Forests, brush and wetlands

Grass forests, pines, snowy trees, palms, dead trees, thorn brush and swamp reeds have been replaced group by group. These are not simple enlargements: generated art provides bark, foliage and rock detail, while the registration tool fits it back into the original object silhouette.

![Vegetation comparison](/images/h3-environment-hd/vegetation-compare.png)

![Brush and reeds](/images/h3-environment-hd/brush-reeds-compare.png)

![Natural objects across biomes](/images/h3-environment-hd/biome-objects-compare.png)

## Natural-scenery expansion

The current pass extends the same treatment to static environmental landmarks: rock clusters and ravines, rocky and snowy hills, snow trees and fallen logs, flowering shrubs, frozen lakes, shallow rocky water and cloud cover. Each body now reuses the original alpha mask exactly, so its footprint, occlusion and click geometry remain unchanged while the visible materials become clearer.

The complete **AVLR** ridge set is now included: rough-land rocks, subterranean stalagmites, snow forms, grass and desert variants, coastal stacks with wave foam, and the associated static trees. ~~This expansion also completes the small static lava pools, wetland woodland, waterside trees and floating-leaf patches. Source-directory audits found no remaining unenhanced AVLR, AVLL, AVLW, AVLY or AVLK sprite.~~ A frame audit subsequently showed that lava pools and floating-leaf patches are animated, so they have returned to their native sequences until Blender models and rendered animation loops exist. The static wetland woodland and waterside trees remain installed; the AVLR, AVLW and AVLY source audits have no unenhanced sprite.

The **AVLS** static natural-scenery family is now complete. It includes dry, grassland and frozen brush; swamp reeds, ferns, lilies, ponds, fallen logs and groundcover; snow shrubs and pine forests; exposed roots, animal remains, fungal ground cover; and the underground stalagmite set. A source-directory audit found no remaining unenhanced AVLS sprite. Every body uses exact-mask registration, so clearer vegetation, wood and mineral surfaces do not alter map placement or occlusion.

The assets are enabled in a local private mod and require no VCMI source changes. This remains an ongoing replacement pass; unrepainted objects are not presented as complete.
