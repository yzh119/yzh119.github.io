---
title: "[AI] Wight and wraith animation integration"
date: 2026-09-09T01:48:31+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "astra"]
lastmod: 2026-10-03T06:45:36Z
homeSummary: "Necropolis 0.12.6 revises Wight/Wraith claw preparation and reach, with hand-weight repairs, original comparisons and Blender stills."
---

## Current version: reaching with the claw (0.12.6)

The local **0.12.6** Necropolis mod revises Wight and Wraith attacks. Their earlier model and floating delivery had been accepted, but the user now pointed out that the attacks still failed to extend a claw. Against the original reference, the replacement mostly tilted the whole body and lacked the raised-hand and reaching silhouettes. The earlier “finished” assessment no longer covers these attacks.

The right arm now rises, reaches into a swipe and recovers, with direction-specific paths. Palm and finger weights mixed with the robe are reassigned so the claw can emerge from its sleeve. An early attempt using larger joint rotations still hid the hand beside the face; the revision reworks shoulder, elbow and wrist poses with sleeve extension. A millimeter-scale hem correction keeps the garment above ground.

High-resolution review of 0.12.5 exposed a long robe strip lifted by the hand and a thin strand during the reach. The hand-selection region included cloth while leaving part of a claw bound to the torso across its boundary. Version 0.12.6 restores the cloth weights, completes the claw binding and smooths the boundary.

![Rejected 0.12.5 raised claw with cloth pulled up by the hand](/images/necro-flight-gait-20261002/ghost-cloth-rejected.jpg)

![Wight: original H3, old attack and 0.12.6; each row framed for pose review](/images/necro-flight-gait-20261002/CWIGHT-current-comparison.jpg)

![Revised Wight attack using Blender frames at an offline 8 fps review rate](/images/necro-flight-gait-20261002/CWIGHT-current.webp)

![Wraith: original H3, old attack and 0.12.6](/images/necro-flight-gait-20261002/CWRAIT-current-comparison.jpg)

![Revised Wraith attack, offline 8 fps review](/images/necro-flight-gait-20261002/CWRAIT-current.webp)

![Wight raised claw: 1400×1400 Blender still from the final scene](/images/necro-flight-gait-20261002/CWIGHT-raise-hd.jpg)

![Wight reaching claw: 1400×1400 Blender still from the final scene](/images/necro-flight-gait-20261002/CWIGHT-claw-hd.jpg)

![Wraith raised claw: 1400×1400 Blender still from the final scene](/images/necro-flight-gait-20261002/CWRAIT-raise-hd.jpg)

![Wraith reaching claw: 1400×1400 Blender still from the final scene](/images/necro-flight-gait-20261002/CWRAIT-claw-hd.jpg)

![Actual VCMI Wight/Wraith test battle using 0.12.6](/images/necro-flight-gait-20261002/ghost-battle126.jpg)

Each creature receives three attack clips plus the three `SHOOT` groups present in the source resources: 84 body frames in total, with native counts and matching shadows. Those resource groups do not grant ranged attacks. Accepted floating, holding and death assets remain unchanged. The new attacks still need player assessment; acceptance of the older delivery is not acceptance of these new poses.

The Meshy base model remains in use; Astra edits binding and animation in Blender, with no new generation call or engine modification. See the [knight and dragon article](/posts/necropolis-final-four/) for the same delivery’s hoof, flight and bite changes. Early model, floating and superseded attack records remain below.

<details>
<summary>0.9.0 model, floating and old attack record (historical)</summary>

> This article records the implementation and measurements at its publication stage. Versions, costs and check counts belong to that stage. See [Vampire delivery](/posts/necropolis-vampires/) for the subsequent installation and [the standalone tools](/posts/h3-art-tools/) for maintained commands.

The textured wight now has floating, attacking, turning, and death animations, and was installed alongside the wraith in delivery **0.9.0**. The user accepted the wight delivery. ~~Its current model and motion are now treated as the finished version~~ while work moves on to the lich.

![Wight showcase composite using the installed background](/demos/necropolis-ghosts-01/cwight-showcase.png)

[All 32 wight and wraith clips are available in the gallery](/demos/necropolis-ghosts-01/). These are fixed-canvas offline renders. Holding plays at 4 fps and other clips at 8 fps for review, independently of runtime timing; they are not game captures.

## High-resolution Blender stills

These **1400×1600 static renders** come directly from the delivered 3D scenes. They are neither concept images nor enlarged game frames. Camera framing changes for the portraits; the model, materials and accepted Wight animation are preserved.

[![Wight: high-resolution Blender still](/images/necropolis-ghosts/wight-blender-hd.jpg)](/images/necropolis-ghosts/wight-blender-hd.png)

Wight: [transparent original PNG](/images/necropolis-ghosts/wight-blender-hd.png) · [render record](/images/necropolis-ghosts/wight-blender-hd.json)

[![Wraith: high-resolution Blender still](/images/necropolis-ghosts/wraith-blender-hd.jpg)](/images/necropolis-ghosts/wraith-blender-hd.png)

Wraith: [transparent original PNG](/images/necropolis-ghosts/wraith-blender-hd.png) · [render record](/images/necropolis-ghosts/wraith-blender-hd.json)

## Floating and attacking

The local Blender rig retains the generated robe, skull, and hands. It adds controls for the torso, neck, head, both arms, and three sections of trailing cloth. Movement bends that cloth as the character floats rather than applying a bipedal walk.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-moving.mp4" style="width:500px;max-width:100%"></video>

Attacks include preparation, a forward lunge with the robe trailing behind, and recovery. Up, front, and down variants adjust attack height. Separate turn groups work with the engine's facing flip.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-attack_front.mp4" style="width:500px;max-width:100%"></video>

Death folds and compresses the garment into a ground remnant. This is an authored spectral collapse, not a cloth simulation or physical ragdoll. **73 saved integer and half-frame death samples** were checked again; the lowest evaluated vertex was approximately **0.002986** model units above the ground.

<video controls muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-death.mp4" style="width:500px;max-width:100%"></video>

## Wraith variant

![Wraith showcase composite using the installed background](/demos/necropolis-ghosts-01/cwrait-showcase.png)

The wraith shares the garment and rig, with warm cloth tones darkened while retaining pale bone where possible. It has the same complete motion coverage. The explicit acceptance feedback concerned the wight; the wraith is delivered alongside it and can still receive separate adjustments.

Each creature exports **16 native groups and 98 frames per scale**. The three `SHOOT` groups present in the original resources are retained for resource coverage. Their presence does not add ranged attacks to these creatures, and no game mechanics were changed.

## Installed package

Version 0.9.0 adds `CWIGHT` and `CWRAIT` to the existing four creatures. It includes 1x/2x body frames, precomputed fixed-ground shadows, and hover outlines. Shadows remain the current simplified 2D projection, with no return to runtime generation on first display.

In delivery 0.9.0, all **2,324 installed files** matched the candidate package. The preceding **1,462 nonmetadata files** are unchanged. Validation reports **132 informational findings, zero warnings, and zero errors**; the [report is public](/demos/necropolis-ghosts-01/validation.json). Version 0.8.0 is backed up, and a fresh client successfully loaded the mod. Wight acceptance is recorded separately from that startup check, which does not establish complete battle acceptance for every other creature.

Astra wrote the binding, motion, and packaging tools, using the textured mesh from the imagegen/Meshy process documented previously. [PR #10](https://github.com/yzh119/vcmi/pull/10) contains the code and reproduction notes. The [rejected procedural designs and bootstrap failures](/posts/necropolis-bootstrap/) remain published as a separate record; future failures will be documented too.

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

Lich and Power Lich are now installed in [the next delivery](/posts/necropolis-liches/), with complete animations and further failed-probe records.

The textured wight now has floating, attacking, turning, and death animations, and is installed alongside the wraith in the local **0.9.0** package. The user accepted the wight delivery. Its current model and motion are now treated as the finished version while work moves on to the lich.

![Wight showcase composite using the installed background](/demos/necropolis-ghosts-01/cwight-showcase.png)

[All 32 wight and wraith clips are available in the gallery](/demos/necropolis-ghosts-01/). These are fixed-canvas offline renders. Holding plays at 4 fps and other clips at 8 fps for review, independently of runtime timing; they are not game captures.

## High-resolution Blender stills

These **1400×1600 static renders** come directly from the delivered 3D scenes. They are neither concept images nor enlarged game frames. Camera framing changes for the portraits; the model, materials and accepted Wight animation are preserved.

[![Wight: high-resolution Blender still](/images/necropolis-ghosts/wight-blender-hd.jpg)](/images/necropolis-ghosts/wight-blender-hd.png)

Wight: [transparent original PNG](/images/necropolis-ghosts/wight-blender-hd.png) · [render record](/images/necropolis-ghosts/wight-blender-hd.json)

[![Wraith: high-resolution Blender still](/images/necropolis-ghosts/wraith-blender-hd.jpg)](/images/necropolis-ghosts/wraith-blender-hd.png)

Wraith: [transparent original PNG](/images/necropolis-ghosts/wraith-blender-hd.png) · [render record](/images/necropolis-ghosts/wraith-blender-hd.json)

## Floating and attacking

The local Blender rig retains the generated robe, skull, and hands. It adds controls for the torso, neck, head, both arms, and three sections of trailing cloth. Movement bends that cloth as the character floats rather than applying a bipedal walk.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-moving.mp4" style="width:500px;max-width:100%"></video>

Attacks include preparation, a forward lunge with the robe trailing behind, and recovery. Up, front, and down variants adjust attack height. Separate turn groups work with the engine's facing flip.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-attack_front.mp4" style="width:500px;max-width:100%"></video>

Death folds and compresses the garment into a ground remnant. This is an authored spectral collapse, not a cloth simulation or physical ragdoll. **73 saved integer and half-frame death samples** were checked again; the lowest evaluated vertex was approximately **0.002986** model units above the ground.

<video controls muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-death.mp4" style="width:500px;max-width:100%"></video>

## Wraith variant

![Wraith showcase composite using the installed background](/demos/necropolis-ghosts-01/cwrait-showcase.png)

The wraith shares the garment and rig, with warm cloth tones darkened while retaining pale bone where possible. It has the same complete motion coverage. The explicit acceptance feedback concerned the wight; the wraith is delivered alongside it and can still receive separate adjustments.

Each creature exports **16 native groups and 98 frames per scale**. The three `SHOOT` groups present in the original resources are retained for resource coverage. Their presence does not add ranged attacks to these creatures, and no game mechanics were changed.

## Installed package

Version 0.9.0 adds `CWIGHT` and `CWRAIT` to the existing four creatures. It includes 1x/2x body frames, precomputed fixed-ground shadows, and hover outlines. Shadows remain the current simplified 2D projection, with no return to runtime generation on first display.

All **2,324 installed files** match the candidate package. The preceding **1,462 nonmetadata files** are unchanged. Validation reports **132 informational findings, zero warnings, and zero errors**; the [report is public](/demos/necropolis-ghosts-01/validation.json). Version 0.8.0 is backed up, and a fresh client successfully loaded the mod. Wight acceptance is recorded separately from that startup check, which does not establish complete battle acceptance for every other creature.

Astra wrote the binding, motion, and packaging tools, using the textured mesh from the imagegen/Meshy process documented previously. [PR #10](https://github.com/yzh119/vcmi/pull/10) contains the code and reproduction notes. The [rejected procedural designs and bootstrap failures](/posts/necropolis-bootstrap/) remain published as a separate record; future failures will be documented too.

{{< /history >}}

</details>
