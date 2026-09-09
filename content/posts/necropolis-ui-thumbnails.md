---
title: "[AI] High-resolution Necropolis UI thumbnails"
date: 2026-09-09T12:58:07+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

The town backdrop and combat creatures had received higher-resolution artwork, while the small creature icons and building thumbnails remained blurry. These windows load separate resources; replacing a building on the town panorama does not update its recruitment thumbnail.

The new local **necropolis-ui-hd 0.1.0** provides two portrait sizes for all fourteen Necropolis creatures and covers **44 building slots**, with 2×, 3× and 4× images. It changes no VCMI engine source or existing combat animation. Original 1× resources remain the fallback, including unrelated factions and selection frames.

![Actual client town screen with the replacement small icons](/demos/necropolis-ui-01/native-town.png)

## Building thumbnails

The building list, construction details and fort recruitment screen share `HALLNECR`, whose original frames are 150×70. Its 44 slots contain **36 distinct images**. Each was repainted using the original as a reference, retaining separate mage-guild, fortification, civic-hall and creature-dwelling upgrade stages. Duplicate slots reuse the same new image.

The images add stonework, carvings, roof and terrain detail, with some changes to local architectural design. These are generative repaints rather than sharpening or pixel-exact restoration. Existing town layers still determine clickable buildings, overlap and construction state; this package replaces their thumbnails.

![Seven base recruitment buildings, original and HD; offline comparison](/demos/necropolis-ui-01/dwelling-comparison.png)

The [complete comparison page](/demos/necropolis-ui-01/) includes every slot, including base and upgraded dwellings.

## Creature portraits

Town growth icons use `CPRSMALL`, at a logical 32×32. Garrison portraits and related displays use `TWCRPORT`, at 58×64. Necropolis occupies slots 58–71 in both atlases; creature IDs cannot be used directly as portrait indices.

The portraits were rendered again from delivered Blender scenes, preserving their models, materials and poses. Large masters are 580×640; small masters are 320×320 with closer framing. The first wider framing made heads too small at 32 pixels, so the small portraits received a separate close view for helmets, hoods, crowns and dragon heads. Large portraits use the current creature backdrop; small icons retain transparency.

![All fourteen creatures, original and HD small and large portraits; offline comparison](/demos/necropolis-ui-01/creature-comparison.png)

There were no new Meshy requests. Existing creatures retain the results of the earlier Meshy and local modeling work. Astra authored camera, rendering, index-mapping and packaging tools; building thumbnails used the built-in image generator.

## Native loading and display size

The independent UI mod is installed and enabled locally, with **203 files**. Installed and private copies match the candidate hashes. Checks cover dimensions, paths and target slots at all three scales, with zero errors and warnings.

The client used `xbrz4`; its log records reads of the new **4× PNG** creature portraits and seven base recruitment-building thumbnails, along with entry into the fort screen. This verifies actual resource loading, without claiming every building was opened manually. [Validation](/demos/necropolis-ui-01/validation.json) and the [observed resource list](/demos/necropolis-ui-01/native-loads.json) are retained. Only the town capture above is a native screenshot; comparison sheets are offline layouts.

The user still felt that the game was not showing the artwork's full potential. The 4× setting controls internal asset and rendering scale; interface scaling separately determines the size of windows on screen, followed by presentation at the display's resolution. Fixed portrait and creature-panel sizes compress master-image detail. Most current creature animations were also rendered natively at 2×; larger caches add no new detail. The next comparison should separate interface size from higher native render resolution, rather than treating the scale number as the outcome.

Tool code lives in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). Models, complete mods and extracted original resources remain local; the blog publishes visual demonstrations.
