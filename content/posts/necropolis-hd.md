---
title: "[AI] opus -> astra: Necropolis HD study"
date: 2026-09-08T14:34:06+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

After the creature animations, the next art study covers the Necropolis town
panorama and adventure-map exterior. Enlarging the original assets leaves stone,
roof and graveyard details soft. Astra wrote the extraction tool; the built-in
`image_gen` tool edited the original references for a higher-resolution comparison.

The [original/HD comparison page](/demos/necropolis-hd-01/) lets you switch views
and open the full images. These are visual studies, not installed game assets.

## Town panorama

The original backdrop is **800×374**. The faction config adds **42** structure and
effect definitions, including upgrade stages. The reference tool composes **23**
selected upgraded layers at their configured coordinates. This is an assembled
asset reference, not a screenshot of a particular save.

![Necropolis HD panorama study](/demos/necropolis-hd-01/town-hd.png)

The generated image is **1832×858**. It retains the broad layout, dark palette,
rocky setting and foreground graveyard while adding masonry, window and roof
detail. The requested dimensions were not returned exactly, and building outlines
and positions still need registration against the original layers.

A flattened panorama cannot serve as the game's town background: unbuilt
structures must disappear, upgrades change appearances, and interaction areas
and draw order must remain valid. Integration needs separate background,
building and effect assets.

## Adventure-map castle

The original village, fortified castle and capitol each use a **192×192** canvas.
This pass starts with the fortified exterior.

![HD castle draft with a painted checkerboard background](/demos/necropolis-hd-01/map-fort-draft-checkerboard.png)

The draft is **1254×1254**, but its background is not transparent. Inspection
shows an RGB image with checkerboard pixels. A background-removal edit still
returned no alpha channel. The draft is useful for reviewing detail; it is not
ready to install as a sprite.

VCMI already loads DATA2X/3X/4X and SPRITES2X/3X/4X assets. Proper alpha, exact
pixel dimensions, original anchoring and player-color behavior are still needed,
along with the town layers. Click areas and map footprints have not been changed.

The [complete prompts](/demos/necropolis-hd-01/prompts.md) retain the composition,
size and transparency requirements. [PR #10](https://github.com/yzh119/vcmi/pull/10)
adds the reference extractor, layer inventory and integration notes.
