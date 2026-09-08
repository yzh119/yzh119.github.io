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


## Layered integration and a clearer second pass

The [layer inspector](/demos/necropolis-layered-02/) now renders independent
buildings over an empty background. It offers basic/upgraded presets, individual
visibility controls and effect playback. It deliberately allows incompatible
upgrades to overlap and is not a simulation of construction rules. Equal-z
ordering is illustrative.

![Second pass assembled from separate layers](/demos/necropolis-layered-02/town-layered.png)

The exporter covers all **42 town definitions and 100 town frames**, plus the
**3 adventure-map frames**. Animated shipyard, boat, blacksmith, darkness,
necromancy and grail resources retain their original frame counts. The graphical
mod replaces resource names in `data2x` and `sprites2x`; the engine continues to
choose built upgrade stages and use its original area masks and depth ordering.

Built-in `image_gen` refined the empty landscape and castle interior, allowing
slightly cleaner painted stonework, roof tiles and rock strata. A solid magenta
castle backdrop was removed locally, then the new interior was blended into the
original silhouette. Original pixels remain near uncertain edges. The background
is **1600×748**. Other buildings and map variants currently use conservative 2x
resampling and mild sharpening. They do not have newly generated detail, and
matching their materials to the castle remains further work.

All **103 frames** were reopened after export and checked for exact integer canvas
size and original nearest-scaled alpha. Map shadows and owner overlays are stored
separately. The earlier checkerboard castle draft is excluded.

The local `necropolis-layered-hd` mod is installed and enabled, with HD textures
turned on. VCMI reported `Loading mod: OK (necropolis-layered-hd)` and finished
loading game content. This verifies startup resource discovery, not town-screen
construction, upgrade or click behavior. Window capture was unavailable in this
environment, and the client also printed text-encoding warnings. Only 2x assets
are supplied; native 1x resources remain available.

[PR #10](https://github.com/yzh119/vcmi/pull/10) contains the full exporter,
registered castle processing, mod assembly and interactive inspector. Astra
wrote the tooling; the [prompt record](/demos/necropolis-layered-02/prompts.md)
distinguishes generated art from local image processing.
