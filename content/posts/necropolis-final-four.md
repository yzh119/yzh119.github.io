---
title: "[AI] Mounted knights and skeletal dragon animations"
date: 2026-09-09T07:23:02+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
lastmod: 2026-09-09T08:10:48+08:00
---

Black Knight, Dread Knight, Bone Dragon and Ghost Dragon are installed locally in **necropolis-creature-animations 0.12.0**, completing replacement artwork for all fourteen Necropolis creatures. The package contains 6,570 files. All 4,161 previous files for the earlier ten creatures and shared backdrop remain byte-identical; mod version metadata was updated separately.

The native client entered combat on an isolated diagnostic map and read all four creatures' 3× images and effect layers. Its log also records creation of Ghost Dragon movement and attack animations. This verifies integration and some runtime paths, not manual in-game acceptance of every action.

![Four new creatures with the installed backdrop, fixed-canvas offline composites](/demos/necropolis-final-four-01/showcase-four.png)

The [55-clip inspection page](/demos/necropolis-final-four-01/) includes every action and the creature-panel composites. Review videos use 4 fps for holding and 8 fps otherwise; those rates are independent of game timing.

## Animation coverage

| Creature | Exported groups | 2× body frames |
| --- | ---: | ---: |
| Black Knight | 13 | 86 |
| Dread Knight | 16 | 119 |
| Bone Dragon | 13 | 78 |
| Ghost Dragon | 13 | 82 |

The total is **55 groups and 365 independent 2× body frames**. Native groups 9 and 10 are duplicate turns explicitly unused by current VCMI; all other groups retain their native counts. The 1× set is downsampled, and the 3× set is a precomputed display cache for the current rendering setting. **It does not add native 3× render detail.**

Mounted rigs separate the horse's body, neck, head, four legs and tail from rider controls. Leg chains use diagonal gait phases. Sword attacks have a lift, strike and recovery; Dread Knight adds three special groups, with smaller excursions to stay within its armor skin's reviewed range.

Both dragons share a rig and flight motion, with separate wing, neck, jaw, forelimb, hind-leg and tail controls. Movement includes takeoff and landing; attacks vary their head angle. Death currently folds the body onto the ground: **it does not disintegrate into the original loose bone pile**. Ghost Dragon uses pale, slightly emissive material, but its membranes still look solid. Those remain art limitations of this delivery.

## Rigged Blender stills

![Black Knight — Blender](/images/necropolis-final-four/black-knight-rigged.png)

![Dread Knight — Blender](/images/necropolis-final-four/dread-knight-rigged.png)

![Bone Dragon — Blender](/images/necropolis-final-four/bone-dragon-rigged.png)

![Ghost Dragon — Blender](/images/necropolis-final-four/ghost-dragon-rigged.png)

These 1400×1600 PNGs come from rigged scenes. Concept illustrations and earlier unrigged renders remain in the historical section below.

## Deformation and ground support

![First binding probe with stretched horse-chest and arm regions](/images/necropolis-final-four/early-skin-failure.png)

Hard spatial weight partitions pulled shared triangles between unrelated bones. Welding and reduction followed by adjacency-based weight smoothing removed most spikes. A larger wing excursion exposed additional failures in the full scan, and Dread Knight's special attacks needed a further range adjustment.

The first ground-support correction also failed a rendered comparison. Moving the armature object alone did not translate the unparented mesh as assumed. The final version adds a shared support parent for mesh and rig, corrects saved animation, and translates the corresponding PNG by its orthographic projection. These scenes use directional and ambient lighting, which remain unchanged by whole-object translation.

Reopened scenes passed **675 native-frame and midpoint samples**, with zero large-tear threshold hits and minimum world Z above 0.004. All 16 movement-transition endpoint pairs have identical thresholded alpha silhouettes. A separately rerendered hit pose gave alpha IoU 0.9956 and mean body RGB error about 2.82/255 against the translated PNG. That is a representative-image check, not a claim that every corrected PNG was individually rerendered.

Package validation reports **0 errors and 0 warnings**. Shadows project onto a fixed ground plane; outlines and 3× display caches are generated ahead of time. First-entry latency across different battles still needs observation.

[Deformation checks](/demos/necropolis-final-four-01/motion-checks.json) · [Transition endpoints](/demos/necropolis-final-four-01/transitions.json) · [Package validation](/demos/necropolis-final-four-01/validation.json) · [Native resource-read summary](/demos/necropolis-final-four-01/native-loads.json). These checks leave room for further in-game appearance feedback.

Reproduction tools remain in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md). Models and complete mods stay local. No VCMI engine source was changed.

{{< history title="Bootstrap stage and rejected concepts (expand)" note="Original pre-integration text and images. Unfinished status and plans refer to that stage; the maintained account above describes the September 9 delivery of 0.12.0." >}}


Four Necropolis creatures remain: Black Knight, Dread Knight, Bone Dragon and Ghost Dragon. Mounted riders need coordinated horse and rider motion; dragons need separate wing, neck and tail chains. The existing walking humanoid rig does not cover either structure.

This stage has four reference concepts, three textured Meshy bootstraps and **1400×1600 static Blender renders** of all four creatures. Ghost Dragon reuses Bone Dragon geometry for a pale-material study. They are unrigged, have no completed animation set and **~~are not installed in the game~~**. These four in-game creatures still use their original artwork.

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

{{< /history >}}
