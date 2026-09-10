---
title: "[AI] HD battlefields and Necropolis map towns"
date: 2026-09-09T07:00:53+08:00
series: ["Enhancing Heroes III with Generative AI"]
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

## September 9, 2026 update: adventure map 0.2.0

This update extends the package to the adventure map itself: eight static terrains, three roads and the ice river, plus **AVL** scenery/terrain obstacles, **AVX** buildings and mines, and **AVW** neutral creatures. The existing Necropolis town art is deliberately excluded from this bulk pass and remains the separately authored treatment above.

This bulk pass is a high-quality scaling baseline, not an AI repaint of every frame. Each DEF retains its native canvas, animation groups, frame count, and body/shadow/overlay layers. It changes no object template, so anchors, footprint, blocking, click handling and visit logic remain in the original configuration. There are 953 object animation sets; with terrain and the existing resources, the mod contains 2,904 2×/3×/4× animation descriptions and 55,899 layer files, about 1 GB. Cache pressure on first entry to a large map remains something to watch.

Package checks verified every animation description and layer file, including dimensions. A native test map started successfully and the client log confirmed actual reads of this mod's 4× `DIRTTL` terrain tiles. That map did not contain each building or neutral-creature class, so this is not presented as in-game visual acceptance for every object. Frequent landmarks such as mines and portals can receive separate generated-art refinements later under the same registration constraints.

### Follow-up: actual art replacements

The bulk HD baseline changes little at normal zoom, so it should not be presented as an art redraw. This follow-up redraws and installs the dusty mine, grassy mine and altar. The new bodies come from generative painting; the native canvas, shadows, overlays and object logic remain intact. The left column below is the bulk-HD baseline; the right column is the actual replacement.

![Three adventure-map landmarks: baseline and actual redraw replacement](/images/h3-environment-hd/adventure-landmarks-compare.png)

### September 9, 2026: grassland and rough-terrain mountain variants

Mountains are `AVL` objects with blocking and occlusion, rather than terrain tiles. This pass paints distinct grassland and rough-terrain ridges, twin peaks, solitary crags, low shelves and rocky clefts: ten variants in total. Each new body is registered back into its native canvas while retaining the original shadows, occlusion and visit logic. The sheet below shows the bulk-HD baseline on the left and the generated mountain replacements on the right.

![Ten grassland and rough-terrain mountain variants: baseline and actual replacements](/images/h3-environment-hd/mountain-variants-compare.png)

### September 9, 2026: trees, shrubs and rocks

New mountains surrounded by old pixel vegetation would look disconnected. For objects actually loaded by the test map, this pass adds two distinct tree groups, a grassland hedgerow, a rough-terrain thorn bush and a rough-terrain rock cluster. Client logs confirm actual reads of all five 4× resources; the left side is the baseline and the right side the new painted body.

![Trees, shrubs and rocks: baseline and actual replacements](/images/h3-environment-hd/vegetation-compare.png)

### September 9, 2026: material redraws for terrain, roads and ice river

The bulk package supplied a high-resolution base, but ordinary map zoom still kept terrain close to the original palette. This pass redraws the body-layer materials for grass, rough, dirt, sand, snow, swamp, subterranean and rock terrain; dirt, gravel and cobblestone roads; and the ice river. Every tile retains its native frame, alpha silhouette and transition geometry, so tile joins, road shapes and shoreline masks remain unchanged.

The left side below is the previous HD baseline and the right side is the installed material redraw. Ordinary water and lava use original palette animation, so they are deliberately outside this static repaint pass until their animation can be preserved.

![Terrain, roads and ice river: HD baseline and material redraw](/images/h3-environment-hd/material-redraw-compare.png)

### September 9, 2026: forests and oasis across biomes

The same registered-object workflow now adds broadleaf forest, rough-terrain pine forest, snow-covered fir forest and a desert oasis. The generated body layer changes, while shadows, occlusion, visit tiles and native object templates remain intact. The left side below is the HD baseline and the right side is the installed replacement.

![Forests and oasis across biomes: HD baseline and actual replacements](/images/h3-environment-hd/biome-objects-compare.png)

### September 9, 2026: common interactive landmarks

The wishing well, tavern and graveyard now have replacement body art too. All three are static map objects, so their original canvas, shadows, occlusion and visit templates remain safely intact while the new rendering is installed. The left side below is the HD baseline and the right side is the current version.

![Common interactive landmarks: HD baseline and actual replacements](/images/h3-environment-hd/landmark-set-compare.png)

### September 9, 2026: frame-by-frame replacements for map guards

Map guards are animated, so replacing only the first frame would cause visible popping at idle. Map skeletons and zombies now use the eight-frame holding cycles produced for the creature work, mapped over their native 30- and 28-frame adventure-object sequences. Every frame is registered to its original canvas and visible area; the map's own shadows and overlays remain. The sheets below sample the original HD baseline and the installed cycles.

![Map skeleton animation: HD baseline and frame-by-frame replacement](/images/h3-environment-hd/animated-skeleton-compare.png)

![Map zombie animation: HD baseline and frame-by-frame replacement](/images/h3-environment-hd/animated-zombie-compare.png)

The same approach now covers Skeleton Warriors, Walking Dead, Zombie Lords, Liches, Power Liches, Vampires, Vampire Lords, Wights and Wraiths. Resource names and upgrade relationships were checked before selecting each eight-frame creature cycle, so an upgrade does not accidentally reuse the base unit's artwork. The sheet below compares the first frame for ten map guards; every replacement on the right is installed as a full cycle.

![Necropolis map guards: HD baseline and frame-by-frame replacements](/images/h3-environment-hd/map-guards-necropolis-compare.png)

### September 9, 2026: desert, swamp and subterranean mountains

Mountain work now extends to desert mesas, moss-covered swamp crags and crystalline subterranean cliffs. Each new body is registered to the corresponding native mountain canvas and retains its occlusion, shadow and footprint. Multiple native variants remain in use per biome; this is not a single background pasted over the map. The left side below is the HD baseline and the right side is the actual replacement.

![Desert, swamp and subterranean mountains: HD baseline and actual replacements](/images/h3-environment-hd/mountains-biomes-compare.png)

### September 10, 2026: volcanic, palm and deadwood scenery

Volcanic terrain now has lava-fissure mountains, desert terrain has multiple palm layouts, and deadwood clusters cover rough, dead and volcanic edges. These are independent map objects: the new body art is fitted only to the existing alpha area while shadows, occlusion, footprints and click templates remain unchanged. The left side below is the HD baseline and the right side is the installed version.

![Volcanic, palm and deadwood scenery: HD baseline and actual replacements](/images/h3-environment-hd/volcanic-desert-deadwood-compare.png)

### September 10, 2026: thorn brush and swamp plants

Small vegetation is now being redrawn by biome too. Rough-terrain thorn brush retains a dry, low-saturation silhouette, while swamp scenery uses reeds, wet roots and fungi. Each group is registered to multiple native layouts and retains the original object shadows and occlusion. The left side below is the HD baseline and the right side is the installed replacement.

![Thorn brush and swamp plants: HD baseline and actual replacements](/images/h3-environment-hd/brush-reeds-compare.png)

### September 10, 2026: pyramid, ship and obelisks

This batch adds a desert pyramid, a sailing ship and the three colored obelisks. Green, red and blue remain distinct rendered variants rather than being flattened into one gray model; every new body continues to use the original object canvas, shadows and visit template. The left side below is the HD baseline and the right side is the installed version.

![Pyramid, ship and obelisks: HD baseline and actual replacements](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

### September 10, 2026: giant redwood

The giant redwood is a frequent multi-tile scenery landmark, so it now has an individual high-detail body replacement. Roots and canopy are registered only within the native visible area, leaving the original shadows, occlusion and map footprint unchanged.

![Giant redwood: HD baseline and actual replacement](/images/h3-environment-hd/redwood-compare.png)

The client was then started on the actual `Good to Go` map. Logs confirm that the active `h3-environment-hd` package parsed successfully and actually read the local 4× giant redwood `AVXREDW` and newly redrawn rough-rock resources. The test map later reached an existing AI animation-state error, so this is evidence of asset loading rather than a claim of full-playthrough stability.

### September 10, 2026: castle landmark

`AVXTHRN` is a large static castle-style map landmark. This pass replaces its body art while retaining the original canvas, shadows, occlusion, footprint and visit template; it does not replace the town system or town-interface resources. The left side below is the HD baseline and the right side is the current version.

![Castle landmark: HD baseline and actual replacement](/images/h3-environment-hd/castle-landmark-compare.png)

### September 10, 2026: shipyard, marketplace and watering hole

Three common functional landmarks now have replacements: shipyard, marketplace and watering hole. The watering hole is an independent static object rather than the global sea or lava palette animation, so it can be redrawn without affecting water animation. All objects retain their original canvas, shadows, occlusion and visit templates.

![Shipyard, marketplace and watering hole: HD baseline and actual replacements](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)
