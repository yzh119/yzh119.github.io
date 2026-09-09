---
title: "[AI] Mounted knights and skeletal dragon animations"
date: 2026-09-09T07:23:02+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
lastmod: 2026-09-09T04:33:06+00:00
---

In-game feedback on the mounted knights was blunt: the attack looked very strange. Frame-by-frame comparison showed why. **In 0.12.0, the horse barely participated and the sword movement had been reduced to a small gesture beside the rider.** Limiting joint rotation removed large stretch warnings while also removing the defining attack poses.

The local animation mod is now **0.12.2**. Both knights have a rebuilt weapon arm and saber, with nine reauthored attack groups. All **29 groups and 205 independent 2× body frames** for the pair were rerendered so holding, walking and attacking share the same arm. Other creatures retain their models and motion; all four final-tier creatures now have corrected panel registration. All fourteen Necropolis creatures remain covered, with no VCMI engine-source changes.

![Current four-creature panel composites](/demos/necropolis-final-four-03/showcase-four.png)

The [current 55-clip gallery](/demos/necropolis-final-four-03/) uses fixed-canvas offline composites. Holding runs at 4 fps and the other review clips at 8 fps; these are inspection rates, independent of native game timing.

## Horse support and the sword cut

![Black Knight attack, 0.12.0 and the revised sequence](/images/necropolis-final-four/knight-attack-correction.png)

The reference horse rears while its rider raises the blade, then drops as the rider leans into the cut. Recovery follows the strike. The revised poses reproduce that sequence, folding the forelegs during the rear and holding the hind hooves in place along the forward axis. Upward, forward and downward attacks vary blade direction; Dread Knight retains three additional special groups.

A binding error made the larger motion unsafe. The original spatial selector missed the curved saber tip, leaving some of its vertices influenced by the horse's neck. Weapon weights also reached the rider's boot. Enlarging the gesture pulled those surfaces along with the sword.

![Rejected larger-motion probe, showing weapon and boot distortion](/images/necropolis-final-four/knight-attack-binding-failure.png)

The repair removes fused weapon-side arm and blade surfaces and builds articulated armor, a gauntlet, guard and curved saber in Blender. The weapon follows a rigid hand socket; weights no longer diffuse through its contact with the horse. The horse and remaining rider still use the existing Meshy model. No additional generation service was used. Rebuilding the arm also changes its local armor design slightly.

The first reconstruction removed too broad a surface region, cutting into the waist cloth and replacing the shoulder with a crude shape. A high-resolution still exposed those defects. Narrower selectors follow the arm segments and blade curve, retain the original textured shoulder plate and use revised armor shading.

![Rejected first arm reconstruction with damaged waist cloth and crude shoulder geometry](/images/necropolis-final-four/knight-arm-rebuild-rejected.png)

Black Knight needed a separate cleanup. Its original saber curves farther downward than Dread Knight’s, and the shared selector left a second blade fragment. The high-resolution review caught it; a model-specific curve removed the remnant before another full motion check.

![Rejected Black Knight version with an old blade remnant](/images/necropolis-final-four/black-knight-old-blade-remnant.png)

## Creature-panel alignment

All four double-wide creatures—Black Knight, Dread Knight, Bone Dragon and Ghost Dragon—now have corrected panel registration. The 0.12.1 fix covered only Dread Knight and Bone Dragon; user feedback caught the two missing variants, completed in **0.12.2**. VCMI crops double-wide creatures from logical x=170, versus x=150 for single-wide creatures. The older offline gallery used the single-wide crop and concealed the in-game offset.

Their body, shadow and outline images move **20 logical pixels right** relative to 0.12.0, bringing the idle silhouette centers to approximately **50/100** in the actual panel. Dread Knight and Bone Dragon keep their 0.12.1 correction; they were not shifted again. Every resolution retains its visible pixels. The shared combat sprites also translate, with both orientations checked. The gallery uses the actual double-wide crop.

![All four creatures before and after registration, actual panel crop; offline composites](/images/necropolis-final-four/all-four-panel-centering.png)

## High-resolution Blender stills

![Black Knight with the revised arm, Blender still](/images/necropolis-final-four/black-knight-rigged-02.png)

![Dread Knight with the revised arm, Blender still](/images/necropolis-final-four/dread-knight-rigged-02.png)

![Bone Dragon, Blender still](/images/necropolis-final-four/bone-dragon-rigged.png)

![Ghost Dragon, Blender still](/images/necropolis-final-four/ghost-dragon-rigged.png)

These are actual **1400×1600 Blender renders**. The knight images use the revised scenes; dragon images retain the 0.12.0 scenes. Earlier portraits and concepts remain in the historical sections.

## Checks and remaining differences

Reopened knight scenes were checked at **381 native-frame and midpoint poses**, with zero large-tear threshold hits. Revised PNGs were rendered directly with their ground-support parent, followed by fixed-ground shadows, outlines and a 3× display cache. Package validation reports **0 errors and 0 warnings**. Those checks do not establish that an attack looks right in combat, as the feedback on the previous release demonstrated.

The final four creatures still total **55 groups and 365 independent 2× body frames**. The 1× set is downsampled; 3× images are a precomputed scaling cache, not newly rendered 3× detail. Native duplicate-turn groups 9 and 10 are unused by current VCMI; other groups retain their original counts.

Dragon death still folds the body onto the ground instead of scattering individual bones, and Ghost Dragon's membranes remain visually solid. Both dragons retain their models and motion, with canvas translations for panel registration. The 0.12.0 client log established combat integration for all four creatures; this update checks replacement resources and saved scenes, without claiming complete manual in-game review of every action.

[Deformation checks](/demos/necropolis-final-four-03/motion-checks.json) · [Attack pose measurements](/demos/necropolis-final-four-03/attack-audit.json) · [Package validation](/demos/necropolis-final-four-03/validation.json). Reproduction tools are in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md). Models and complete mods remain local.

{{< history title="0.12.1 partial panel correction (historical)" note="This version corrected only Dread Knight and Bone Dragon. The current account covers all four variants." >}}

## Creature-panel alignment

~~Further feedback identified left-aligned Bone Dragon and Dread Knight panels. VCMI crops double-wide creatures from logical x=170, versus x=150 for single-wide creatures. The previous offline gallery used the single-wide crop and concealed the in-game offset. Within the real 100-pixel window, these two idle silhouettes were centered near x=30.~~

~~Their body, shadow and outline images now move **20 logical pixels right**, bringing the center near x=50. Every resolution uses an integer translation and retains its visible pixels. **This is not a panel-only offset**: the existing configuration shares combat sprites, so their battle images move too, with both orientations checked. The current gallery uses the real double-wide crop.~~

![Bone Dragon and Dread Knight, before and after in the actual panel crop; offline composites](/images/necropolis-final-four/panel-centering-correction.png)



~~Other creatures retain their models and motion; Bone Dragon also receives a canvas-position correction.~~

~~Bone Dragon only receives the canvas translation described above; Ghost Dragon assets are unchanged.~~

[0.12.1 gallery](/demos/necropolis-final-four-02/)

{{< /history >}}

{{< history title="Initial 0.12.0 animation delivery and rejected attacks (expand)" note="Earlier text and images are retained below. Limited knight motion did not establish visual quality, and the old gallery used the wrong crop for double-wide panels. The maintained 0.12.2 account above supersedes those results." >}}

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

~~Mounted rigs separate the horse's body, neck, head, four legs and tail from rider controls. Leg chains use diagonal gait phases. Sword attacks have a lift, strike and recovery; Dread Knight adds three special groups, with smaller excursions to stay within its armor skin's reviewed range.~~

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

{{< /history >}}

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
