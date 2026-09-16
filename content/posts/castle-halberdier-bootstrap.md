---
title: "[AI] Castle roster bootstrap"
date: 2026-09-16T17:10:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "All fourteen Castle units have independently reviewed Meshy meshes. Halberdier and Pikeman passed local holding/walking review; Griffin and Swordsman have stable holding but rejected gait trials because of Meshy layered topology. No Castle unit is installed in the game."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "castle"]
---

The Castle roster now has independently reviewed meshes for all fourteen units: Pikeman, Halberdier, Archer, Marksman, Griffin, Royal Griffin, Swordsman, Crusader, Monk, Zealot, Cavalier, Champion, Angel and Archangel. They span long held equipment, a two-handed light crossbow, a winged quadruped, shield-and-sword combat, and an unarmed spellcaster. Each asset needs its own mesh and its own animation constraints.

![Three-quarter concept for the Castle Halberdier](/images/castle-halberdier-01/concept-34.png)

The concept fixes the features that need to survive generation: blue-and-gold tabard, brown boots, uncovered face under a steel cap, and a halberd held vertically at the left side. It is a reference for construction rather than an in-game image.

## All fourteen meshes

![Fourteen independently reviewed Castle mesh bootstraps, ordered by level and upgrade](/images/castle-halberdier-01/roster-bootstrap-01.png)

All fourteen models were generated from separate reviewed concepts and then checked from eight Blender angles. Accepted Meshy mesh tasks consumed 420 credits; the earlier rejected four-view Halberdier request consumed another 30. The Halberdier and Pikeman are now past the first local rig stage: both have holding and walking review sequences at their original 450×400 canvas. The Archer holds its crossbow in the static and holding review, but its first raised-shooting test exposed separated sleeve topology and was rejected. The remaining units have accepted mesh reviews and move on to creature-specific local rigs.

| Unit | reviewed state |
| --- | --- |
| Halberdier | mesh, local rig, 8-frame holding and 6-frame walk |
| Pikeman | mesh, local rig, 7-frame holding and 6-frame walk |
| Archer | mesh and holding review; shooting rig needs repair |
| Griffin | mesh and 8-frame holding accepted; 4-frame gait rejected pending leg/tail reweighting |
| Swordsman | mesh and 8-frame holding accepted; 8-frame gait rejected pending skirt/shield-side rebind |
| Monk | mesh review; hand-gesture and spell rig next |
| Cavalier | mesh review; mounted and charge rig next |
| Angel | mesh review; flight and two-handed-sword rig next |
| Marksman | mesh review; shares the upcoming repaired two-hand crossbow interface |
| Royal Griffin | mesh review; wing and ground rig next |
| Crusader | mesh review; sword-and-shield double-strike rig next |
| Zealot | mesh review; hand-gesture and spell rig next |
| Champion | mesh review; mounted and charge rig next |
| Archangel | mesh review; flight and two-handed-sword rig next |

## Griffin and Swordsman motion calibration

The original Griffin has eight holding frames and four walking frames; the Swordsman has eight of each. Both tests use the original 450×400 canvas. Each now has a stable local holding review: the Griffin uses continuous weights for wings, neck and tail, while the Swordsman keeps sword, shield and armour intact in the rest pose.

<s>The first Griffin trial rigidly parented 2,829 disconnected components to bones. Its chest feathers separated in motion. Continuous surface weights repaired holding, but its gait then pulled apart layered surfaces near the legs and tail, so the four-frame walk was rejected.</s>

<s>The Swordsman's eight-frame gait was also rejected: layered components around the skirt and shield side separate. Its holding and walking Actions are saved independently; the rejected walk will not enter DEF assembly.</s>

These trials show that a convincing Meshy surface is not automatically an animatable continuous character topology. The next pass will rebuild local weights from visible joints and connected regions. Until then, these are Blender review assets only: no creature frames, shadows, overlays, DEF output, or game installation.

## Meshy mesh

<s>The first Meshy request used the complete four-view sheet as one input image. It spent 30 credits and returned several copies of the halberd without a person, so it was rejected before rigging or animation.</s>

The second request used the single three-quarter panel. It also used 30 credits and returned a textured human mesh with the tabard, armour and halberd intact. Its source object has 404,705 vertices. Meshy's automatic rig endpoint returned HTTP 400 for this asset and did not create a rig task or consume rigging credits.

![Meshy review render of the accepted Halberdier mesh](/images/castle-halberdier-01/meshy-review.png)

## Local rig and motion review

Astra authored the Blender-side recovery instead of retrying the automatic rig. The Meshy export is 972 disconnected mesh components, so conventional smooth weighting would pull its clothing and weapon apart. The local rig assigns each component rigidly to an anatomical bone; 51 vertically aligned halberd components are attached to the left-hand weapon bone. The rest pose remains intact, and the weapon stays connected while the arm moves.

![Eight-frame holding clip, shown here at frame one](/images/castle-halberdier-01/local-rig-holding.png)

The first holding loop has eight authored frames. The six-frame walking review keeps the halberd upright and gives the holding arm a restrained swing alongside the opposite arm and legs. It is deliberately a review render: no creature frames, shadows, overlays, DEF packing, or game installation have been produced from it yet.

![Six-frame walking review, frame three](/images/castle-halberdier-01/local-rig-walk.png)

The next pass is to inspect the walk against the original group frame by frame, then author the remaining <code>CHALBD.DEF</code> groups before any local mod is assembled. Meshy supplies the textured geometry; Astra supplies the local rig, motion, render and validation tooling.
