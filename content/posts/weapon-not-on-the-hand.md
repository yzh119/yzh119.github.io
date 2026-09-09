---
title: "[AI] The sword was welded to the pelvis"
date: 2026-09-06T23:50:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender"]
lastmod: 2026-09-09T05:48:54+08:00
---

## Weapon proportions and the first binding attempt

This attempt addressed an oversized sword and a weapon that did not follow the hand. Later inspection found that the first equipment detector could select the wrong mesh. The delivered skeleton uses rebuilt hands and a separate weapon attachment.

The later model and motion are shown in [the complete animation](/posts/skeleton-motion/).

**As of September 9, 2026:** creature mod ~~0.12.1~~ **0.12.2** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

Status wording from 0.12.0; the current patch version is stated above:

~~**As of September 9, 2026:** creature mod **0.12.0** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.~~


~~**As of September 9, 2026:** creature mod **0.11.1** contains ten Necropolis creatures. Installation counts in this article belong to the named delivery version. The latest expansion is [Vampire and bat forms](/posts/necropolis-vampires/).~~


> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

> **Update, 2026-09-09：** Images, poses and measurements below are retained as the historical study, not the current installed version. See the [later animation](/posts/skeleton-motion/) and [current eight-unit delivery](/posts/necropolis-liches/).


The skeleton's sword had two problems. One took three rounds to fix. The other I
nearly missed entirely.

## First: the length

At the concept stage I first asked for the weapon "held straight down at the side
clear of the leg" — friendly to pose estimation. It reconstructed as a thin sliver
and vanished from the side view.

Asking for it "held out to the side well away from the body" put the sword in the
mesh, and made it nearly as long as the figure, held at arm's length like a
fishing rod.

The third version added a size constraint — no longer than half the figure's
height, elbow bent, hand near the hip — and landed. Silhouette overlap went 21% to
37%, aspect 0.47 against the original's 0.52.

<figure>
  <img src="/images/vcmi/sword-proportion.jpg" alt="An over-long sword against a proportioned one">
  <figcaption>Left: sword nearly as tall as the figure. Middle: with the proportion constraint. Right: the original.</figcaption>
</figure>

**Each fix created the next problem**, because each one only constrained the
dimension that had just gone wrong.

## Second: the sword didn't follow the hand

The pose still looked wrong, so I assumed the wrist angle and swept five hand
rotations.

Five identical images.

Assuming the range was too narrow, I swept five more with different axes.
**Identical again.**

<figure>
  <img src="/images/vcmi/identical-sweeps.jpg" alt="Five hand rotations producing identical renders">
  <figcaption>Five different wrist angles. The sword does not move.</figcaption>
</figure>

It was not the parameters. The weights looked fine — `RightHand` dominates 3180
vertices — but rotating it 90° moved their centroid by 0.05 units. **A long blade
attached to a hand sweeps a long way through a 90° turn.** Those 3180 vertices
were the hand bones themselves.

Looking it up by position instead: the sword was weighted to **`Hips`**.

Meshy's auto-rig treats the mesh as one body and assigns a fused weapon to whatever
bone is nearest its centre of mass. The sword hangs beside the leg, so that was
the pelvis. The arm swings through an attack and the sword stays put — every attack
animation is wrong, and nothing reports it. The rig is valid, the animation plays,
the sword just doesn't move.

## Find it geometrically, not by weight

The fix rebinds in Blender using geometry rather than weights: **the connected
component the hand is gripping** — some vertices within 16 cm of the hand joint —
that reaches furthest from it. Every other component near the hand is a finger,
and a finger is a few centimetres where a weapon is limb-length.

The skeleton mesh has 906 connected components, since every bone is separate. That
test picks one of 474 vertices reaching 0.90 units: the sword.

<figure>
  <img src="/images/vcmi/sword-rebound.jpg" alt="The attack animation after rebinding, against the original">
  <figcaption>Forward attack after rebinding on top, original below. The sword travels with the arm now.</figcaption>
</figure>

One trap on the way: `armature.data.bones[].head` is not in the same space as the
mesh after a glTF import. Reading it put the hand 23 units away and matched
nothing. The pose bone matrix is the one to use.

## What to take from it

Both bugs presented as tuning problems. The over-long sword genuinely was one. The
motionless sword was not, and I swept ten parameter values before noticing.

The tell is simple enough: **sweep a parameter, and if the results are identical,
you are not adjusting the thing you think you are.** I should have stopped at the
first five identical frames instead of running five more.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
