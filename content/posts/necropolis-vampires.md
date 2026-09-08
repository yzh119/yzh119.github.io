---
title: "[AI] Vampire and bat forms"
date: 2026-09-09T04:26:09+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
lastmod: 2026-09-09T05:48:54+08:00
---

**Status checked September 9, 2026.**

## Installed animation and models

Both vampires are now installed in local mod **0.11.1**, bringing the Necropolis package to ten creatures. Each has a newly weighted humanoid rig, a separate bat for travel, and five-frame smoke transitions into and out of flight. This remains a mod-only change.

These **1400×1600 Blender stills** come from the final editable holding scenes, using the same models and skin bindings as the animation export. Click either image for the transparent original.

[![Final Vampire holding render](/images/necropolis-vampires/vampire-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-holding-blender-hd.png)

[![Final Vampire Lord holding render](/images/necropolis-vampires/vampire-lord-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-holding-blender-hd.png)

The [animation gallery](/demos/necropolis-vampires-01/) contains **29 clips**, pose sheets and creature-panel composites with the current HD background. These are offline previews, played at 4 fps for holding and 8 fps otherwise. Native battle timing and contact placement still need in-game review.

![Vampire panel, offline composite](/demos/necropolis-vampires-01/cvamp-showcase.png)

![Vampire Lord panel, offline composite](/demos/necropolis-vampires-01/cnosfe-showcase.png)

Vampire supplies 13 groups and 84 frames per scale; Vampire Lord supplies 16 and 105. Together the 1× and 2× exports add **378 body frames**, with original group counts, a 450×400 logical canvas and effect layers retained. The Lord's extra directional groups do not introduce new abilities. Death folds an intact body to the floor after raising the hands; it still differs from the original compact remains, and clothing has no physical simulation.

### Geometry and skinning failures

The first Lord had 13,521 boundary edges after coincident positions were welded. OBJ and FBX from the same task also contained extensive boundaries, so changing the container format did not resolve the damaged clothing. [Topology audit](/images/necropolis-vampires/topology-audit.json) · [Format audit](/images/necropolis-vampires/format-audit.json).

A further Meshy request reused the concept with remeshing disabled. It returned 1,950,534 triangles and a 4096 color texture, with substantially more intact clothing. This was also a new reconstruction, so the improvement cannot be attributed entirely to the remeshing setting. [Meshy image-to-3D parameters](https://docs.meshy.ai/en/api/image-to-3d).

[![New dense Lord model before animation binding](/images/necropolis-vampires/vampire-lord-dense-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-dense-blender-hd.png)

Its rigging request returned HTTP 400 without a task ID. The model also exceeds the documented [300,000-face limit for task-ID rigging](https://docs.meshy.ai/en/api/rigging). The local fallback simplified it to 159,999 faces and reused the old skeleton's joint locations. An initial decimation split the UV seams apart; welding coincident positions while retaining per-corner UVs fixed that source of cracks.

[![Rejected early animated binding with seam damage and invalid transferred weights](/images/necropolis-vampires/vampire-lord-split-seams.jpg)](/images/necropolis-vampires/vampire-lord-split-seams.png)

Skinning remained wrong after welding. Some donor boot vertices followed the head and forearm, so nearest-vertex transfer inherited those mistakes. Filtering influences by spatial position then stretched the coat badly:

[![Rejected spatially filtered binding with stretched clothing](/images/necropolis-vampires/vampire-lord-filtered-weights.jpg)](/images/necropolis-vampires/vampire-lord-filtered-weights.png)

Both final humanoids discard imported weights, repair the bone tails and use Blender bone-heat weighting. A new surface check supplements the IK checks: reopen every saved scene, sample its first, middle and last poses, and reject edges that grow beyond eight times their rest length with over 0.08 model units of absolute growth. The earlier base Vampire produced 161 large-edge violations across sampled poses. The final pair has zero across 69 pose samples. [Vampire report](/images/necropolis-vampires/vampire-skin-check-final.json) · [Lord report](/images/necropolis-vampires/vampire-lord-skin-check-final.json). This catches severe tears; it does not establish artistic acceptance.

An intermediate 0.11.0 package was briefly installed before the high-resolution holding render exposed these defects. The installed package is now the corrected 0.11.1; rejected attempts and backups remain local.

### Flight and delivery checks

The bat has five locally authored bones for its body, wing roots and tips. Filling small simple holes reduced its boundary-edge count from 196 to 52; larger or complex openings remain. Exported flight follows the native level/down/level/up sequence, with the initially oversized wingspan and low placement corrected.

Smoke experiments began with solid spheres, then a costly volume render that still looked too dense. The final transition uses 38 camera-facing planes with procedural noise and alpha. Export joins reuse the exact holding and flight PNGs, removing the small sampling differences between independently rendered endpoints.

Reopened humanoid scenes passed 1,379 integer and half-frame samples, with another 49 samples for the bat loop. The installed [resource validation](/demos/necropolis-vampires-01/validation.json) contains 238 informational findings, zero warnings and zero errors. All 4,162 installed files match the candidate hashes; 3,332 previous nonmetadata files are unchanged. The client reported successful mod loading. Battle appearance and pacing remain open for review.

The additional model cost 30 credits, bringing successful vampire-stage tasks to **130 credits**. Meshy still provides textured geometry and the earlier skeleton landmarks. Astra authors the local repair, binding, motion, rendering and packaging tools. The public [reproduction guide](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-vampires.md) records the commands and limitations; models and complete mods stay local.

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

## Animation and binding update — September 9, 2026

Both vampires are now installed in local mod **0.11.1**, bringing the Necropolis package to ten creatures. Each has a newly weighted humanoid rig, a separate bat for travel, and five-frame smoke transitions into and out of flight. This remains a mod-only change.

These **1400×1600 Blender stills** come from the final editable holding scenes, using the same models and skin bindings as the animation export. Click either image for the transparent original.

[![Final Vampire holding render](/images/necropolis-vampires/vampire-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-holding-blender-hd.png)

[![Final Vampire Lord holding render](/images/necropolis-vampires/vampire-lord-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-holding-blender-hd.png)

The [animation gallery](/demos/necropolis-vampires-01/) contains **29 clips**, pose sheets and creature-panel composites with the current HD background. These are offline previews, played at 4 fps for holding and 8 fps otherwise. Native battle timing and contact placement still need in-game review.

![Vampire panel, offline composite](/demos/necropolis-vampires-01/cvamp-showcase.png)

![Vampire Lord panel, offline composite](/demos/necropolis-vampires-01/cnosfe-showcase.png)

Vampire supplies 13 groups and 84 frames per scale; Vampire Lord supplies 16 and 105. Together the 1× and 2× exports add **378 body frames**, with original group counts, a 450×400 logical canvas and effect layers retained. The Lord's extra directional groups do not introduce new abilities. Death folds an intact body to the floor after raising the hands; it still differs from the original compact remains, and clothing has no physical simulation.

### Geometry and skinning failures

The first Lord had 13,521 boundary edges after coincident positions were welded. OBJ and FBX from the same task also contained extensive boundaries, so changing the container format did not resolve the damaged clothing. [Topology audit](/images/necropolis-vampires/topology-audit.json) · [Format audit](/images/necropolis-vampires/format-audit.json).

A further Meshy request reused the concept with remeshing disabled. It returned 1,950,534 triangles and a 4096 color texture, with substantially more intact clothing. This was also a new reconstruction, so the improvement cannot be attributed entirely to the remeshing setting. [Meshy image-to-3D parameters](https://docs.meshy.ai/en/api/image-to-3d).

[![New dense Lord model before animation binding](/images/necropolis-vampires/vampire-lord-dense-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-dense-blender-hd.png)

Its rigging request returned HTTP 400 without a task ID. The model also exceeds the documented [300,000-face limit for task-ID rigging](https://docs.meshy.ai/en/api/rigging). The local fallback simplified it to 159,999 faces and reused the old skeleton's joint locations. An initial decimation split the UV seams apart; welding coincident positions while retaining per-corner UVs fixed that source of cracks.

[![Rejected early animated binding with seam damage and invalid transferred weights](/images/necropolis-vampires/vampire-lord-split-seams.jpg)](/images/necropolis-vampires/vampire-lord-split-seams.png)

Skinning remained wrong after welding. Some donor boot vertices followed the head and forearm, so nearest-vertex transfer inherited those mistakes. Filtering influences by spatial position then stretched the coat badly:

[![Rejected spatially filtered binding with stretched clothing](/images/necropolis-vampires/vampire-lord-filtered-weights.jpg)](/images/necropolis-vampires/vampire-lord-filtered-weights.png)

Both final humanoids discard imported weights, repair the bone tails and use Blender bone-heat weighting. A new surface check supplements the IK checks: reopen every saved scene, sample its first, middle and last poses, and reject edges that grow beyond eight times their rest length with over 0.08 model units of absolute growth. The earlier base Vampire produced 161 large-edge violations across sampled poses. The final pair has zero across 69 pose samples. [Vampire report](/images/necropolis-vampires/vampire-skin-check-final.json) · [Lord report](/images/necropolis-vampires/vampire-lord-skin-check-final.json). This catches severe tears; it does not establish artistic acceptance.

An intermediate 0.11.0 package was briefly installed before the high-resolution holding render exposed these defects. The installed package is now the corrected 0.11.1; rejected attempts and backups remain local.

### Flight and delivery checks

The bat has five locally authored bones for its body, wing roots and tips. Filling small simple holes reduced its boundary-edge count from 196 to 52; larger or complex openings remain. Exported flight follows the native level/down/level/up sequence, with the initially oversized wingspan and low placement corrected.

Smoke experiments began with solid spheres, then a costly volume render that still looked too dense. The final transition uses 38 camera-facing planes with procedural noise and alpha. Export joins reuse the exact holding and flight PNGs, removing the small sampling differences between independently rendered endpoints.

Reopened humanoid scenes passed 1,379 integer and half-frame samples, with another 49 samples for the bat loop. The installed [resource validation](/demos/necropolis-vampires-01/validation.json) contains 238 informational findings, zero warnings and zero errors. All 4,162 installed files match the candidate hashes; 3,332 previous nonmetadata files are unchanged. The client reported successful mod loading. Battle appearance and pacing remain open for review.

The additional model cost 30 credits, bringing successful vampire-stage tasks to **130 credits**. Meshy still provides textured geometry and the earlier skeleton landmarks. Astra authors the local repair, binding, motion, rendering and packaging tools. The public [reproduction guide](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-vampires.md) records the commands and limitations; models and complete mods stay local.

## Original model inspection

The earlier concepts, renders and observations follow. Superseded progress statements are struck through.

Vampire and Vampire Lord are the next Necropolis units. I imported both humanoids and a separate bat into Blender and rendered high-resolution stills to inspect the generated geometry before authoring motion. Each concept is shown alongside its actual model render.

~~These are **model inspection results**. The two humanoid auto-rigs have returned, but local motion checks, the bat rig and transformation transitions remain unfinished. Neither unit is installed; the local game still uses the previous eight-creature package.~~

## Vampire

The imagegen concept uses a pale bald head, pointed ears, long claws and worn dark clothing. Meshy 7 reconstructed the textured model from this image.

![Vampire concept used for model generation](/images/necropolis-vampires/vampire-concept.jpg)

The following **1400×1600 Blender render** shows the imported pose and supplied texture. Click it for the transparent PNG at its original resolution.

[![Vampire Blender still in its imported pose](/images/necropolis-vampires/vampire-blender-hd.jpg)](/images/necropolis-vampires/vampire-blender-hd.png)

The face, clothing seams and hands can now be inspected at full size. ~~The generated fingers have not yet been tested through a claw attack.~~ [Prompt](/images/necropolis-vampires/vampire-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-audit.json) · [Render record](/images/necropolis-vampires/vampire-render.json).

## Vampire Lord

The upgrade adds a rust-orange long coat and raised collar over dark inner clothing.

![Vampire Lord concept used for model generation](/images/necropolis-vampires/vampire-lord-concept.jpg)

[![Vampire Lord Blender still with unresolved fragmented clothing](/images/necropolis-vampires/vampire-lord-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-blender-hd.png)

This **1400×1600** render exposes fragmented edges and gaps around the chest, cuffs and coat tails. Some regions look like separated triangular faces. The image records an unresolved result: the mesh or material cause needs investigation before clothing deformation and animation delivery.

[Prompt](/images/necropolis-vampires/vampire-lord-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-lord-audit.json) · [Render record](/images/necropolis-vampires/vampire-lord-render.json).

## Bat

The original creature travels in bat form, so this uses a separate generated mesh with extended wings. ~~Flight and transformation need a locally authored rig.~~

![Bat concept used for model generation](/images/necropolis-vampires/vampire-bat-concept.jpg)

[![Blender still of the bat with wings extended](/images/necropolis-vampires/vampire-bat-blender-hd.jpg)](/images/necropolis-vampires/vampire-bat-blender-hd.png)

The landscape render is **2000×1400**. The front view shows the head and spread silhouette, although the wing undersides remain dark. A [higher inspection view with stronger fill](/images/necropolis-vampires/vampire-bat-top-blender-hd.png) shows how thin the wings appear from above, along with gaps on the back. Those features need further inspection. ~~The wings remain in a static spread pose; no flapping animation exists yet.~~

[Prompt](/images/necropolis-vampires/vampire-bat-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-bat-audit.json) · [Render record](/images/necropolis-vampires/vampire-bat-render.json).

## Tools and remaining work

Three Meshy geometry requests cost 30 credits each, and two humanoid rigging requests cost 5 each: **100 credits** for this stage. All three imported color textures are 4096×4096. The stills were rendered locally in Blender 5.2.1 LTS at 64 samples, with no additional generation requests.

Astra wrote [bootstrap_portrait.py](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/bootstrap_portrait.py) to save editable inspection scenes and invoke the portrait renderer. Records include source and render hashes, actual mesh counts, texture dimensions and image-bound checks. The JPEG versions add a display background; the transparent PNGs retain the rendered resolution.

~~Next come the Lord's clothing investigation, humanoid hand and joint checks, bat wing motion, transformation transitions, claw attacks and death. Native frame counts and mod validation follow those steps. Tool code is public in the standalone repository; models and complete mod packages stay local.~~

{{< /history >}}
