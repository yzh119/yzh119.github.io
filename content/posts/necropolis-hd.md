---
title: "[AI] opus -> astra: Necropolis HD study"
date: 2026-09-08T14:34:06+08:00
lastmod: 2026-09-08T17:07:21+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

**Next stage:** [Skeleton Warrior, Zombie, and the remaining Necropolis roster](/posts/necropolis-upgrades/) now have a separate progress post with all upgrade animation previews.


**Small-panel update:** the accepted pass reduces fine rubble and soil mottling
so masonry, rock planes and ground cracks remain distinct at 200×260. The
[current showcase and shadow comparison](/demos/necropolis-creatures-game-02/)
also includes walking-dead centering. Both creature articles now use this background.
The master remains 1100×1430; see the [current image](/demos/necropolis-creatures-game-02/background.png)
and [edit prompt](/demos/necropolis-creatures-game-02/background-prompt.txt).

![Walking-dead centering on the current background, composed offline](/demos/necropolis-creatures-game-02/czombi-comparison.png)

The user clarified that the sharpness concern referred to our composite, rather
than confirming a runtime loading problem. The installed creature package is now
0.7.0, retaining both panel sizes at 1x through 4x without engine changes.

**Creature showcase update:** the Necropolis ruin backdrop now has a detailed
replacement for both its 100×130 and 100×120 panels. A built-in `image_gen` edit
kept the original environment layout; a second edit strengthened masonry, rock
planes and ground definition after feedback. The comparison uses actual 2x output.

![Original, first HD pass, refined background, and two creature composites](/demos/necropolis-creature-backdrop-02/comparison.png)

These are offline composites with the game's crop and saved body/shadow layers,
not screenshots. Both generated masters are 1100×1430. The second prompt requested
more pixels, but the tool returned the same dimensions; the visible change comes
from the revised detail and edges. The [final master](/demos/necropolis-creature-backdrop-02/generated.png),
[first prompt](/demos/necropolis-creature-backdrop-02/prompt-first.txt) and
[refinement prompt](/demos/necropolis-creature-backdrop-02/prompt.txt) are available.

The installed creature mod is now **0.5.0**, with eight background PNGs covering
both panel sizes at 1x through 4x. The short panel crops ten logical pixels from
the bottom of the shared master. Logical dimensions and creature crop positions
stay fixed; existing animation files, registration and precomputed effects are
preserved. Final asset validation still reports zero errors or warnings. These
shared resources affect every Necropolis creature showcase. Restart VCMI to load
them; no engine or faction configuration changes are involved.

After the creature animations, the next art study covers the Necropolis town
panorama and adventure-map exterior. Enlarging the original assets leaves stone,
roof and graveyard details soft. Astra wrote the extraction tool; the built-in
`image_gen` tool edited the original references for a higher-resolution comparison.

**Latest:** the remaining 41 town layers now have generated static interior detail, and the local mod is updated to 0.3.0. The [third comparison](/demos/necropolis-layered-03/) switches versions while keeping the same buildings and effects selected.

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
is **1600×748**. ~~Other buildings and map variants currently use conservative 2x
resampling and mild sharpening. They do not have newly generated detail, and
matching their materials to the castle remains further work.~~

> Update, 2026-09-09: All41remaining town layers subsequently received generated detail; see the section below and [third layer inspector](/demos/necropolis-layered-03/). Adventure-map variants still use conservative resampling.



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


## Detail across the remaining buildings

The second pass enlarged most buildings without generating new detail. This pass
edits each of the remaining **41 layers** individually: five mage-guild stages,
four hall stages, fortifications, all seven dwelling types and their upgrades,
service buildings, bone pit and cemetery additions. Together with the existing
castle, all **42 town layers** now have generated detail in their static regions.

![Town assembled with all refined building interiors](/demos/necropolis-layered-03/town-layered.png)

Built-in `image_gen` handled the artwork; Astra wrote reference preparation,
registration and checking tools. Each original was padded onto a square magenta
canvas. Generated subject bounds were fitted back to the original, and the new
texture was blended inside the original alpha. Masonry, slate, doors and windows
are clearer, with some changes to internal ornament and materials. Source pixels
remain near uncertain edges. Preserving alpha does not imply exact agreement of
internal architectural geometry.

The [building comparison sheet](/demos/necropolis-layered-03/building-comparison.png)
shows six examples. The [interactive inspector](/demos/necropolis-layered-03/)
can switch the previous/current base images without changing selected buildings
or animated overlays.

Town animations draw frame zero as a base beneath later partial frames. We protect
the union of those overlay regions, with a small additional margin, from texture
changes in the base. Water, smoke, flame and glow therefore retain the previous
base pixels as well as their animation. All **58 overlay frames are byte-identical**
to version 0.2, and every frame retains its dimensions and alpha. An independent
pixel audit used NumPy installed in the project's virtual environment and
confirmed visible texture changes in every newly refined layer.

The local mod is now **0.3.0**, with the installed 0.2 copy backed up. Browser
checks verified empty/basic/upgraded counts of 0/21/23, exact pixel agreement
between the empty canvas and the separate background, and a changing image when
switching building versions. These checks do not add native construction, upgrade
or click-test coverage. Adventure-map variants remain the second-pass assets.

[PR #10](https://github.com/yzh119/vcmi/pull/10) adds per-building reference
preparation and static-interior registration. The [41 prompts](/demos/necropolis-layered-03/prompts.md)
and [pixel-audit results](/demos/necropolis-layered-03/validation.json) accompany
the gallery.
