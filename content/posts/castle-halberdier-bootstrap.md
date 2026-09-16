---
title: "[AI] Castle halberdier bootstrap"
date: 2026-09-16T17:10:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "castle"]
---

The Castle roster starts with the Halberdier because it tests the full human workflow: cloth, armour, a long held weapon, and the original's upright carriage. Its battle asset is <code>CHALBD.DEF</code>: a 450×400 canvas with 67 body frames. The eight-frame holding group and six-frame moving group provide the first review targets.

![Three-quarter concept for the Castle Halberdier](/images/castle-halberdier-01/concept-34.png)

The concept fixes the features that need to survive generation: blue-and-gold tabard, brown boots, uncovered face under a steel cap, and a halberd held vertically at the left side. It is a reference for construction rather than an in-game image.

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
