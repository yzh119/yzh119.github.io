---
title: "[AI] HD battlefields and Necropolis map towns"
date: 2026-09-09T07:00:53+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

Clearer creatures and town interiors made the soft battlefield scenery and adventure-map towns more noticeable. **h3-environment-hd 0.1.0** adds 14 common battlefield redraws and three Necropolis map forms, including their ownership flags. WenQuanYi and LiSu remain the Chinese fonts.

The mod is installed and enabled locally. Client logs confirm successful parsing and loading, and actual reads of the new 3× capitol body, shadow and ownership overlay. All 14 battlefield files passed name, dimension and opacity checks; individual battles on every terrain have not been tested. No VCMI engine source was changed.

## Battlefields

The set covers three dirt scenes, desert and shore, two grass scenes, two snow scenes, swamp, rough, subterranean, lava and ship combat. The redraws retain the broad composition and standing area while adding material detail. Special magical fields, siege walls and separate obstacles are outside this pass.

Built-in image_gen produced the artwork; Astra wrote extraction, registration and packaging tools. Actual generated images measured roughly 1504–1506×1045–1046, then became exact **1600×1112 (2×)** resources. These are not native 3× or 4× generations. Comparisons below use equal display sizes; the HD links open the final images.

![dirt birches](/images/h3-environment-hd/dirt_birches-compare.jpg)

[HD](/images/h3-environment-hd/dirt_birches-hd.jpg)

![dirt hills](/images/h3-environment-hd/dirt_hills-compare.jpg)

[HD](/images/h3-environment-hd/dirt_hills-hd.jpg)

![dirt pines](/images/h3-environment-hd/dirt_pines-compare.jpg)

[HD](/images/h3-environment-hd/dirt_pines-hd.jpg)

![sand mesas](/images/h3-environment-hd/sand_mesas-compare.jpg)

[HD](/images/h3-environment-hd/sand_mesas-hd.jpg)

![sand shore](/images/h3-environment-hd/sand_shore-compare.jpg)

[HD](/images/h3-environment-hd/sand_shore-hd.jpg)

![grass hills](/images/h3-environment-hd/grass_hills-compare.jpg)

[HD](/images/h3-environment-hd/grass_hills-hd.jpg)

![grass pines](/images/h3-environment-hd/grass_pines-compare.jpg)

[HD](/images/h3-environment-hd/grass_pines-hd.jpg)

![snow mountains](/images/h3-environment-hd/snow_mountains-compare.jpg)

[HD](/images/h3-environment-hd/snow_mountains-hd.jpg)

![snow trees](/images/h3-environment-hd/snow_trees-compare.jpg)

[HD](/images/h3-environment-hd/snow_trees-hd.jpg)

![swamp trees](/images/h3-environment-hd/swamp_trees-compare.jpg)

[HD](/images/h3-environment-hd/swamp_trees-hd.jpg)

![rough](/images/h3-environment-hd/rough-compare.jpg)

[HD](/images/h3-environment-hd/rough-hd.jpg)

![subterranean](/images/h3-environment-hd/subterranean-compare.jpg)

[HD](/images/h3-environment-hd/subterranean-hd.jpg)

![lava](/images/h3-environment-hd/lava-compare.jpg)

[HD](/images/h3-environment-hd/lava-hd.jpg)

![ship](/images/h3-environment-hd/ship-compare.jpg)

[HD](/images/h3-environment-hd/ship-hd.jpg)

## Map towns and ownership flags

![Three Necropolis map forms with red and blue ownership, offline composites](/images/h3-environment-hd/map-flags.png)

Village, fort and capitol are supplied at 2×, 3× and 4×. The new bodies fit the original 192×192 canvas and body bounds, with smooth generated alpha. Object footprint, blocking and visit positions retain the original configuration. The visual silhouette has changed; it is not pixel-identical to the original alpha. Shadows retain the native mask.

The old ground pennants occupied about 14×5 pixels. Enlarging that mask exposed its stair steps. Smooth pennant geometry now attaches at the original pole positions, with a separate player-color overlay. The capitol's upper flag follows the new tower rather than floating beside it. Red and blue were checked in offline composites; every player color has not been checked in the game.

## Font rendering

![The same fonts rendered at 2× and 3×](/images/h3-environment-hd/fonts.png)

Both Chinese fonts already contain outlines. The relevant change is their rasterization size before the interface reaches the screen. Automatic upscaling currently selects at most 2×; this Retina display suggests an interface scale near 2.72×, leaving the 2× text to be enlarged again.

The existing `video.upscalingFilter` setting is now `xbrz3`. Families, logical sizes and `fontScale` are unchanged. Client logs show LiSu increasing from 44 to 66 points and small WenQuanYi text from 26 to 39 points, confirming the 3× rasterization. The comparison uses actual SDL_ttf glyphs followed by a Pillow approximation of screen scaling. **It is not a game screenshot**, and 2.72× is inferred from display dimensions.

This is a global internal rendering setting and increases cache and GPU-memory demand. Sustained frame rate and first-battle latency still need observation. Creature art remains the existing 2× set; no 4× creature animation was rendered in this pass. Encoding-conversion errors remain in the client log and also occur in the earlier log; this setting does not fix those errors.

## Rejected versions

![Castle draft with a painted checkerboard](/images/h3-environment-hd/checkerboard-failure.jpg)

The first fort draft painted a checkerboard into RGB. A flat magenta revision allowed local color-key extraction. Another attempt clipped the new art to the old pixel silhouette and blended old edge pixels; the boundary became softer, so the final version uses generated alpha.

![Ownership overlay before registration and smoothing](/images/h3-environment-hd/flag-failure.png)

This intermediate composite retained the old flag mask. The upper flag floated beside the tower, and the ground pennants remained blocky. After the user's feedback, the upper mask was registered again and ground flags were redrawn. The red/blue sheet above shows the installed result.

Reproduction tools and prompts are in [environment-art in h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline/tree/main/environment-art). Complete mods, original game data and generated production assets stay local; the blog carries demonstrations.
