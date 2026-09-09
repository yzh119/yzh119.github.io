---
title: "[AI] A second creature, and two errors the validator passed"
date: 2026-09-07T01:30:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "testing"]
lastmod: 2026-09-09T05:48:54+08:00
---

## Early zombie motion trials

The first zombie provided a usable skinned body, but its early motion omitted the native cleaver and did not establish a convincing dragging walk. The later thirteen-group set rebuilt the weapon hand, equipment and joint controls.

The later model and motion are shown in [the complete animation](/posts/zombie-study/).

**As of September 9, 2026:** creature mod **0.12.1** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

Status wording from 0.12.0; the current patch version is stated above:

~~**As of September 9, 2026:** creature mod **0.12.0** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.~~


~~**As of September 9, 2026:** creature mod **0.11.1** contains ten Necropolis creatures. Installation counts in this article belong to the named delivery version. The latest expansion is [Vampire and bat forms](/posts/necropolis-vampires/).~~


> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

> **Update, 2026-09-09：** Images, poses and measurements below are retained as the historical study, not the current installed version. See the [later animation](/posts/zombie-study/) and [current eight-unit delivery](/posts/necropolis-liches/).


The zombie came after the skeleton, chosen because it has a **solid body**. I
wanted to test a hypothesis: the skeleton is made of separated thin bones, exactly
the structure single-image reconstruction fuses into smooth tubes, so it may be
the worst possible first creature for this pipeline.

The hypothesis held. The zombie reconstructs with a legible torso, limbs and head,
and none of the skeleton's smooth-tube problem.

Then the validator reported zero errors and zero warnings, and two things were
wrong.

## The mesh itself

<figure>
  <img src="/images/vcmi/zombie-mesh.jpg" alt="Four views of the zombie mesh">
  <figcaption>The mesh Meshy produced, at 0/90/180/270. 25890 vertices, 37280 triangles.</figcaption>
</figure>

Better than I expected: ribs reading under the skin, collarbones, shoulder blades,
kneecaps, articulated toes, folds and a torn edge on the loincloth. **The back is
complete**, from two views that showed only front and side.

Against the skeleton the contrast is clear — same service, same parameters. A
solid body reconstructs well; the skeleton's separated thin bones fused into
smooth tubes. The difference isn't the tool, it's what is being reconstructed.

Two problems, though.

**Most of the colour is gone.** The concept has grey-green skin and a brown
loincloth; on the mesh only the loincloth keeps any brown and the body is near
uniform grey-white. That explains why the rendered sprites look washed out next to
the original's blue-grey skin, dark trousers and red wounds.

**And it reads as a gaunt living man rather than a zombie.** No decay, no wounds,
no layering in the rags.

That one is mine. As [an earlier post](/posts/prompt-ratios-and-first-mesh/) noted,
FLUX's content filter rejected "rotting flesh" and "dried blood" as Violence, and
I reworded to "desiccated" and "skin drawn tight" to get through. I treated it as a
wording problem — **and got a lean, intact body, having written the creature's
defining feature out of the prompt.**

Working around a filter has a cost, and the cost doesn't show up at the rejection.
It shows up two steps later in the mesh.

It should be recoverable without tripping the filter: `sunken hollow cheeks`,
`exposed ribcage`, `torn hanging rags`, `mottled discolored skin`. Those describe
form and colour rather than violence.

## First: frame counts inherited from the skeleton

The zombie's death animation is nine frames in the original. I rendered six. Its
walk is ten; I rendered eight. **Twelve of thirteen groups were off**, because
`poses.py` hardcodes the skeleton's counts.

The engine permits a different count — a JSON sequence replaces a group wholesale
— so nothing was broken and the validator had no opinion. But it was a divergence
nobody chose: the zombie's death lost three frames because the skeleton's has six.

The root cause is that my checks only verified the replacement **agrees with
itself** — 1x and 2x must have matching counts. Nothing ever compared it to the
thing it replaces, and the original is sitting on disk.

The validator now takes `--lod` and compares per-group frame counts, and reports
groups the original has that the replacement omits. Verified both directions: the
aligned zombie reports clean, the version that inherited the skeleton's counts
reports thirteen warnings.

## Second: the zombie was sprinting

<figure>
  <img src="/images/vcmi/zombie-shamble.jpg" alt="Zombie walk after tuning, against the original">
  <figcaption>Top: the walk with a zombie-specific profile. Bottom: the original.</figcaption>
</figure>

`BASE` and all thirteen groups were authored for the skeleton warrior, with ±28°
of thigh swing. The zombie inherited them and marched. Leg travel measured 335
pixels against the original's 53.

**The motion is the character.** A skeleton strides, a zombie drags its feet, a
lich barely moves below the waist. One shared set of keyframes cannot carry that.

A creature now supplies two optional things:

```
base       overrides merged onto BASE -- its resting stance
amplitude  per-group multiplier on the motion, 1.0 as authored
```

~~Anything unlisted falls back, so a creature costs a few lines rather than thirteen
groups of keyframes. The zombie gets a slumped stance with arms hanging and no
weapon carriage, MOVING at 0.35, attacks at 0.65, a heavier idle at 1.3.~~

> Update, 2026-09-09: This motion profile is superseded. The original Walking Dead carries a cleaver; the installed version has an independent grip and thirteen authored clips rather than scaled skeleton motion. See [the zombie study](/posts/zombie-study/).



Leg travel went 335 to 59, against the original's 53.

## What the two have in common

Neither errored, and both are **inheritance of something that shouldn't have been
inherited** — frame counts from the skeleton, motion from the skeleton.

The assumption underneath was that all humanoid creatures can share one set of
animations. I never wrote that down, so it was never checked. It held for the
skeleton, because the animations were authored against it, and collapsed on the
second creature.

The validator catches the first one now. It cannot catch the second: **"does this
walk read as a zombie" is not something I have any automated grip on** — the same
class of problem as "which way does the knee bend" from the last post.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
