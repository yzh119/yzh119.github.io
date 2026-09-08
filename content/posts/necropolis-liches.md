---
title: "[AI] Lich and Power Lich"
date: 2026-09-09T03:04:19+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "astra"]
---

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

Lich and Power Lich now have complete animation resources installed in the local **0.10.0** creature mod. That brings the installed roster to eight units. The accepted Wight assets remain unchanged. This stage extends the textured-model workflow to a staff-wielding ranged creature and its separately modelled upgrade.

![Lich showcase with the installed background](/demos/necropolis-liches-01/clich-showcase.png)
![Power Lich showcase with the installed background](/demos/necropolis-liches-01/cplich-showcase.png)

[All 32 clips are playable](/demos/necropolis-liches-01/). These are offline composites: holding runs at 4 fps and other clips at 8 fps for review. They are not game captures or measurements of runtime timing.

## Geometry and rig repair

The [rejected procedural study](/posts/necropolis-bootstrap/) had an unsuitable headdress and simplified armour. The replacement keeps the imagegen-guided Meshy geometry and textures. Astra authored the local Blender repair, motion and export code.

Power Lich uses a separate mesh with a pronged crown, a black orb inside a gold crescent and ankle-length chainmail. Its [concept prompt](/images/necropolis-liches/power-lich-prompt.txt) and the [base Lich prompt](/images/necropolis-liches/lich-prompt.txt) are retained.

![Power Lich concept used for mesh generation](/images/necropolis-liches/power-lich-concept.jpg)

Each mesh consumed 30 Meshy credits and each automatic rig consumed 5. The base Lich mesh was already counted in the previous article. New calls for this stage total **40 credits**: its rig, plus the Power Lich mesh and rig. Motion is authored locally rather than downloaded from the service's animation library.

The imported joint heads provide anatomical landmarks for rebuilding excessively long bone tails. Skin weights and UVs survive that repair. A measured shaft region separates the staff from the body, with a wider upper region for Power Lich's crescent and orb. The generated grip belongs to the **left hand**. A rigid socket and local grip weights keep that hand and staff together.

## Motion and remaining differences

Walking carries an upright staff. Melee lowers it toward horizontal. Ranged attacks use a different staff angle and a brief red pulse through the textured material. Existing projectile and damage configuration is unchanged.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-liches-01/cplich-shoot_front.mp4" style="width:500px;max-width:100%"></video>

Death now folds forward and settles against evaluated geometry. It remains an intact body; the original's disintegrating heap is not reproduced. There is no cloth or ragdoll simulation.

![Superseded backward death beside the current forward fold](/images/necropolis-liches/death-comparison.png)

## Failed probes

The first walk missed a foot target by **0.022439** model units. Moving the foot ahead of an already straight leg required lowering the hip. The correction computes that height from the two leg lengths.

Downward shooting later produced a **0.011859** left-arm endpoint error. A bounded projection brings the target inside the arm's reach. The largest target adjustment is approximately **0.015651** for Lich; Power Lich needs no such adjustment.

The first emission pass brightened the texture without turning it red. An existing texture connection overrode the default emission colour. The final shader explicitly multiplies the texture by red before emission, retaining surface variation.

![Failed texture-coloured flash beside the current textured red pulse](/images/necropolis-liches/emission-comparison.png)

An earlier Power Lich check also stopped before authoring because the CLI variant `power-lich` did not match the reference name `powerLich`. An explicit mapping fixes that lookup. The nearly identical early melee/shoot poses, backward death and rejected procedural appearance remain documented as superseded attempts.

## Export and installation

Each unit preserves **16 used native groups and 116 frames per scale**, including eleven frames in each ranged group. Shared mapping omits the original duplicate unused turn groups. The canvas remains 450×400, or 900×800 at 2x. Bodies, fixed-ground precomputed shadows and hover outlines are installed at both scales.

Reopened scenes pass **1,760 integer/half-frame samples**. Maximum IK endpoint error is approximately **0.00009995** model units. Staff socket checks pass, and the lowest sampled death vertex is **0.002804** above the ground. This does not exhaustively test skin intersections or chainmail contact.

All **3,333 installed files** match the candidate; **2,323 previous nonmetadata files** are preserved, with 0.9.0 backed up. Final resource validation reports **188 informational findings, zero warnings and zero errors**. A fresh client reports successful mod loading. [Resource validation](/demos/necropolis-liches-01/validation.json) and [rig measurements](/images/necropolis-liches/measurements.json) accompany the gallery. No engine source changes are needed. Both new units still await user acceptance in the game.

[PR #10](https://github.com/yzh119/vcmi/pull/10) includes the rigging request helper and local authoring/export tools. Vampire and Vampire Lord are next, followed by the mounted knights and dragons.


The next [Vampire and bat model study](/posts/necropolis-vampires/) includes concepts and high-resolution Blender stills. Those units are not installed yet.
