---
title: "[AI] Mounted knights and skeletal dragon studies"
date: 2026-09-09T07:23:02+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
---

Four Necropolis creatures remain: Black Knight, Dread Knight, Bone Dragon and Ghost Dragon. Mounted riders need coordinated horse and rider motion; dragons need separate wing, neck and tail chains. The existing walking humanoid rig does not cover either structure.

This stage has four reference concepts, three textured Meshy bootstraps and **1400×1600 static Blender renders** of all four creatures. Ghost Dragon reuses Bone Dragon geometry for a pale-material study. They are unrigged, have no completed animation set and **are not installed in the game**. These four in-game creatures still use their original artwork.

## Mounted knights

The native Black Knight rides an intact black horse, holding a curved saber in the right hand and reins in the left, with red saddle cloth. Dread Knight adds horse face, neck and leg armor and stronger shoulder spikes. The concepts retain those differences and the black, silver and red palette.

![Black Knight — concept illustration](/images/necropolis-final-four/black-knight-concept.png)

![Black Knight — static Blender bootstrap, unrigged](/images/necropolis-final-four/black-knight-blender.png)

![Dread Knight — concept illustration](/images/necropolis-final-four/dread-knight-concept.png)

![Dread Knight — static Blender bootstrap, unrigged](/images/necropolis-final-four/dread-knight-blender.png)

Each knight received eight Blender inspection views. Four horse legs, the rider, saddle and weapon are visible as three-dimensional forms. This does not establish deformation quality: sword attachment, stirrup contact, reins and possible connections near the horse's belly still require pose tests. Parts of the Dread Knight horse look faceted; normals and material response need further work.

## Skeletal dragons

![Bone Dragon — concept illustration](/images/necropolis-final-four/bone-dragon-concept.png)

![Bone Dragon — static Blender bootstrap, unrigged](/images/necropolis-final-four/bone-dragon-blender.png)

![Ghost Dragon — concept illustration](/images/necropolis-final-four/ghost-dragon-concept.png)

![Ghost Dragon — static Blender bootstrap, unrigged](/images/necropolis-final-four/ghost-dragon-blender.png)

The native Bone Dragon stands on its hind legs, with two small forearms separate from two torn wings, and flies during movement. The reconstructed back views show two wings, but their extended joints and membrane deformation have not been tested.

Ghost Dragon currently shares the exact Bone Dragon geometry. A Blender material study removes the yellow cast, maps texture luminance to pale silver-white and adds restrained emission. This allows a shared rig and motion later. The current render still looks solid: wing translucency and readability against battle backgrounds remain unfinished.

## Tools and rejected drafts

Built-in image_gen produced concepts; Meshy produced three textured meshes at **30 credits each, 90 total**. Astra wrote local inspection and material-study tools. Ghost Dragon did not require another mesh-generation charge.

![Rejected Dread Knight draft with a painted checkerboard](/images/necropolis-final-four/dreadKnight-checkerboard.jpg)

![Rejected Ghost Dragon draft with a painted checkerboard](/images/necropolis-final-four/ghostDragon-checkerboard.jpg)

Both upgrade concepts painted the checkerboard into RGB. Each was edited to a flat magenta background and keyed locally to produce the concept cutouts shown above. The rejected versions remain documented here.

Automatic remeshing was disabled to preserve detail. Each raw model has roughly 1.9 million triangles and many disconnected index components. UV seams can split those components, so the count is not a count of anatomical parts. Coincident vertices need inspection and welding, followed by reduction and silhouette comparisons before skinning.

The native resource totals are **92, 125, 84 and 88 frames**, respectively. Dread Knight includes three additional groups, so copying the Black Knight manifest would omit resources. The next work is horse gait, rider contact and sword motion, followed by dragon takeoff, flight, landing, attacks and skeletal-collapse death. Packaging follows those motion checks.

[Tools, prompts and reproduction notes](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md). Models and complete mods remain local. Concept illustrations and actual Blender renders are labeled separately below.
