---
title: "[AI] Castle roster bootstrap"
date: 2026-09-16T17:10:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "All fourteen Castle units have independently reviewed Meshy meshes. Halberdier, Pikeman and Swordsman passed local holding/walking review; Griffin gait is still being rebuilt. No Castle unit is installed in the game."
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
| Archer | Meshy humanoid rig; 8-frame front-shot review passes continuity; release and up/down groups next |
| Griffin | mesh and 8-frame holding accepted; 4-frame gait rejected pending leg/tail reweighting |
| Swordsman | Meshy humanoid rig plus local 8-frame holding and walking review accepted |
| Monk | Meshy humanoid rig; 6-frame holding/walk accepted, 10-frame cast gesture needs refinement |
| Cavalier | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Angel | Meshy humanoid rig, four local wing bones and 8-frame holding wing review accepted; flight/two-handed sword next |
| Marksman | Meshy humanoid rig passed static review; holding-crossbow and shooting review next |
| Royal Griffin | four local wing bones and 8-frame holding wing review accepted; ground gait needs rebuild |
| Crusader | Meshy humanoid rig; 8-frame holding/walk accepted, 7-frame double strike awaits sword-weight repair |
| Zealot | Meshy humanoid rig; 6-frame holding, 6-frame walk and 14-frame cast preliminary review complete |
| Champion | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Archangel | Meshy humanoid rig, four local wing bones and 8-frame holding wing review accepted; flight/two-handed sword next |

## Griffin and Swordsman motion calibration

The original Griffin has eight holding frames and four walking frames; the Swordsman has eight of each. Both tests use the original 450×400 canvas. Each now has a stable local holding review: the Griffin uses continuous weights for wings, neck and tail, while the Swordsman keeps sword, shield and armour intact in the rest pose.

<s>The first Griffin trial rigidly parented 2,829 disconnected components to bones. Its chest feathers separated in motion. Continuous surface weights repaired holding, but its gait then pulled apart layered surfaces near the legs and tail, so the four-frame walk was rejected.</s>

<s>The Swordsman's eight-frame gait was also rejected: layered components around the skirt and shield side separate. Its holding and walking Actions are saved independently; the rejected walk will not enter DEF assembly.</s>

Update: the Swordsman now uses a Meshy humanoid rig (an additional 5 credits), with Astra authoring the local holding and walking Actions. Both eight-frame clips were reviewed at 450×400. The left and right feet travel 0.105 and 0.089 model units front-to-back, while the sword hand travels 0.072. Side review keeps sword, shield and skirt continuous, so this local walk review is accepted. It is still not DEF output or a game installation.

Crusader and Monk each now use their own Meshy humanoid rig (an additional 5 credits each); neither reuses the Swordsman's mesh or weights. The Crusader's eight-frame holding and walking reviews pass intact. Its seven-frame double-strike test is rejected because part of the sword remains weighted to the body chain, and will return after a local rebind. The Monk's six-frame holding and walking reviews pass; its ten-frame front cast is saved as a gesture calibration. The robe remains intact, but the raised-hand amplitude needs refinement, so it is not a final spell delivery.

These trials show that a convincing Meshy surface is not automatically an animatable continuous character topology. The next pass will rebuild local weights from visible joints and connected regions. Until then, these are Blender review assets only: no creature frames, shadows, overlays, DEF output, or game installation.

After static review of the Angel Meshy humanoid rig, Astra did not rotate the whole wing as one object. It located wing components by position among 1,356 connected components of the shared surface. Four local root/tip bones control 10,319 wing vertices; an eight-frame restrained wing review keeps armour, two-handed sword and torso still. This is a holding-wing result only: flight and sword motion remain to be authored.

Archangel completed the same local wing process on its separate mesh: 8,888 position-classified wing vertices are assigned to four root/tip bones. The eight-frame review keeps upgraded armour, torso and two-handed sword stable. It does not reuse Angel vertex groups, and is not flight or game installation.

Cavalier and Champion each ran a local horse-and-rider probe against their own meshes and original alpha-height anchors. Holding, walking, front lance, move start and move end pass crop checks; a three-frame side review also keeps the horse legs, rider, barding and lance connected through the gait. This is still a probe: each needs its complete 87-frame action set and per-action timing before export.

Royal Griffin uses its own mesh for four root/tip wing bones and 24,793 component-classified wing vertices. Its eight-frame holding wing review passes; its ground gait will not reuse the rejected Griffin leg/tail weights.

The Archer now has a separate Meshy-rig pose check after its earlier rejected local attempt: a five-key raised-crossbow motion keeps both sleeves and the light crossbow connected through the aiming pose. The first front-shot review now uses the original eight-frame group count at 450×400: raise, aim, recoil and return remain continuous. It still has no separate bolt release and no up/down groups, so it is not a finished firing clip.

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
