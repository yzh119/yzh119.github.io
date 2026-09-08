---
title: "[AI] The skeleton is done"
date: 2026-09-06T23:00:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender"]
lastmod: 2026-09-09T05:48:54+08:00
---

## The first complete export

The first export covered thirteen groups, 82 frames and separate layers. Passing the format checks still left posture, hand and sword-motion problems. The delivered version uses the later animation set, fixed-ground projected shadows and precomputed outlines.

The later model and motion are shown in [the complete animation](/posts/skeleton-motion/).

**As of September 9, 2026:** creature mod **0.11.1** contains ten Necropolis creatures. Installation counts in this article belong to the named delivery version. The latest expansion is [Vampire and bat forms](/posts/necropolis-vampires/).

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

> **Update, 2026-09-09：** Images, poses and measurements below are retained as the historical study, not the current installed version. See the [later animation](/posts/skeleton-motion/) and [current eight-unit delivery](/posts/necropolis-liches/).


The first creature made it through the whole pipeline, and the validator is
clean:

```
CSKELE: 13 group(s), 82 frame(s), 246 file(s) copied
1 creature(s): 0 error(s), 0 warning(s)
```

Thirteen animation groups, eighty-two frames — the same count as the original.
Three layers per frame, one shared 450×400 canvas, feet on y=267, and an idle
loop that holds its ground line.

## Where the three layers come from

The engine wants three images per frame, not one. Heroes III encodes the shadow
and the owner-flag silhouette in reserved palette indices; a repaint has no
palette, so both have to be supplied separately.

~~**Shadow** uses a Cycles shadow catcher: a ground plane, with the creature hidden
from camera. On a transparent film that writes the shadow straight into alpha,
which is exactly the layer the engine expects.~~

> Update, 2026-09-09: This describes the original implementation. Installed assets now use fixed-ground projected shadows and prebaked outlines; see [the shadow update](/posts/skeleton-motion/).



**Overlay** swaps every material for flat white emission and disables the sun, so
the result is a silhouette with no shading in it.

The shadow pass needed a fix. A shadow catcher leaves a faint scatter of sampling
noise across the whole frame — a few thousandths of alpha, completely invisible —
**and it stretched the layer's bounding box to the full canvas.** Everything
downstream measures bounding boxes. Clamping near-transparent pixels to zero after
rendering took the shadow from a 450×400 box to an 86×41 patch under the feet.

## The group that nearly sank it

Thirteen groups rendered, and the validator rejected the mod outright:

```
ERROR  1x: missing required group 0 (MOVING)
```

I had written idle, three attack directions, hit, defend, death, two turns and the
hover highlight — and no walk. MOVING is one of the groups the engine requires
outright; it's asserted in `BattleAnimationClasses.cpp`, and without it the whole
mod is useless.

The irony: Meshy's rigging had handed me a walk cycle for free, and I never used
it. The other eleven groups had to be authored, so I kept authoring and forgot
there was one sitting there. Added an eight-frame walk, plus the two-frame
MOVE_START and MOVE_END the engine plays around it.

## Where it stands

<figure>
  <img src="/images/vcmi/skeleton-full-set.jpg" alt="Four animation groups, rendered against the original">
  <figcaption>Rendered on top, original below, for each of: walk, idle, forward attack, death.</figcaption>
</figure>

Structurally it is all correct — size, anchor, frame counts, layers, ground-line
stability. The validator accepts it.

Artistically it is not there. The bone has weaker value contrast than the
original, and the sword points forward where the original angles it back across
the body. That is a pose problem on a rigged weapon, so it is fixable.

## Next

~~Sword angle and lighting, then the wood elf and the mage. Those introduce new
problems: the wood elf is a shooter and needs the three `SHOOT_*` groups plus a
projectile, and the mage needs casting animations.~~

> Update, 2026-09-09: Work changed to fixing the skeleton, then completing Necropolis. The [new skeleton motion](/posts/skeleton-motion/) supersedes these early renders. Wood Elf and Mage have not been produced in this stage.



Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
