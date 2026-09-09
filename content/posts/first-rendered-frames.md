---
title: "[AI] Rendering back to sprite frames"
date: 2026-09-06T21:30:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender"]
lastmod: 2026-09-09T05:48:54+08:00
---

## First-render debugging

The initial holding render tested imports, rigging and transparent output, exposing optimization and material problems. Later work replaced the old skeleton appearance and expanded the trial into a full animation set.

The later model and motion are shown in [the complete animation](/posts/skeleton-motion/).

**As of September 9, 2026:** creature mod **0.12.1** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

Status wording from 0.12.0; the current patch version is stated above:

~~**As of September 9, 2026:** creature mod **0.12.0** covers all fourteen Necropolis creatures. Measurements here retain their delivery-version scope; see [mounted knights and skeletal dragons](/posts/necropolis-final-four/) for the latest integration.~~


~~**As of September 9, 2026:** creature mod **0.11.1** contains ten Necropolis creatures. Installation counts in this article belong to the named delivery version. The latest expansion is [Vampire and bat forms](/posts/necropolis-vampires/).~~


> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

> **Update, 2026-09-09：** Images, poses and measurements below are retained as the historical study, not the current installed version. See the [later animation](/posts/skeleton-motion/) and [current eight-unit delivery](/posts/necropolis-liches/).


The pipeline closes:

```
concept    FLUX.2 [pro]        front view for style, A-pose for reconstruction
mesh       Meshy image-to-3D   quad topology, 20k
rig        Meshy rigging       24-bone humanoid
animation  Blender, keyframed  thirteen groups
render     Blender, ortho      450x400 canvas, feet on y=267
```

The skeleton's idle now renders as eight frames, 79 px tall, feet on y=267, with
**the ground line not moving across the loop** — which is what the original does
and what the validator checks.

Three things went wrong on the way, none of them the thing I expected.

## My own optimisation broke the rigging

The first rigging request was rejected outright:

```
Pose estimation failed, please provide a valid model
```

Orientation checked out — Y was the tallest axis, as it should be. The problem was
the pose, and the pose was my own doing.

To get the concept through the proportion gate I had tightened the prompt: arms
against the ribs, sword low across the body, short step. **That is exactly the
shape that defeats pose estimation** — an auto-rigger needs to see limbs clear of
the torso.

Two things had quietly become one. The proportion gate governs how the *rendered
frames* sit on a hex; the image the mesh is built from needs a *riggable* neutral
pose. The compact in-game stance is supposed to come from the animation, not from
the concept.

So the roster now separates `design` — what the creature looks like, shared by
every view — from `pose`, which applies only to the front view. A separate `apose`
view brings its own neutral stance and skips the proportion hint entirely, because
the hint fights it directly. Regenerated, it passed first time: 5 credits, 24
standard humanoid bones.

## The camera has to be measured, not computed

The engine offers no way to nudge a sprite afterwards. The frame's own canvas and
where the creature sits inside it are the only anchor there is, so the camera has
to be solved rather than eyeballed.

I wrote the analytic solve first: project every vertex into camera space, derive
`ortho_scale` from the height you want, derive the shift from where the feet have
to land. The arithmetic was self-consistent — `span_y / units_per_px` came out at
exactly 79.

It rendered 51 px.

The projection and the render disagreed somewhere I never located. Rather than keep
chasing it: **render a probe frame, measure its alpha bounding box, correct.**
Measurement is ground truth, one frame at one sample costs nothing, and it adapts
to whatever a future model does.

One trap inside that. Scale and position cannot be corrected together — rescaling
moves the feet, so a position correction computed against the old scale overshoots.
The first version diverged while looking like it was working: feet at 208, then
199, then 130. Split into two phases — height first, then position — it converges
in three rounds.

Calibration also has to run *after* the pose is applied. The rig arrives in an
A-pose and the combat stance is hunched; calibrating first left the creature 2 px
too tall and 2 px too low.

## The animations are written, not retargeted

Meshy's rigging throws in a walk and a run. Heroes III wants thirteen groups:
three attack directions, hit, defend, death, two turns, idle, hover.

I didn't go looking for a motion library. The originals are short, stylised and
specific — eight frames for an attack, two for a turn — and nothing in a library
matches that. Retargeting onto a rig with non-standard proportions tends to go
wrong on its own, too.

A shared `BASE` carries the combat stance and each group adds only the motion that
distinguishes it. The bone names are the Mixamo lineage — Hips, Spine02, RightArm,
LeftUpLeg — so the poses are written directly against them.

## Where it stands

<figure>
  <img src="/images/vcmi/render-vs-original.jpg" alt="Rendered idle frames against the original">
  <figcaption>Rendered frames on top, original below. Size and anchor land; the pose does not.</figcaption>
</figure>

Size, anchor and ground-line stability are right. Two things are visibly not: the
arms read as reaching forward rather than holding the sword low, and the value
contrast is weaker than the original.

## Addendum: the sword wasn't in the mesh

I suspected the pose, so I rendered four candidate combat stances — different arm
heights, different amounts of hunch.

They scored 35%, 33%, 35%, 33%.

**That result was the answer: at 79 pixels the arm angle cannot move the
silhouette.** The pose was never the bottleneck.

The sword was. The A-pose prompt asked for the weapon "held straight down at the
side clear of the leg" — friendly to pose estimation, hostile to everything after
it. Tucked against the leg it reconstructs as a thin sliver that vanishes from the
side, and in the original **the sword is most of what makes the skeleton
readable**.

Asking for the blade held out to the side, fully visible against the background
and not overlapping the torso, puts it in the mesh.

<figure>
  <img src="/images/vcmi/sword-in-mesh.jpg" alt="Sword tucked against the leg versus held clear">
  <figcaption>Left: sword against the leg, gone after reconstruction. Middle: held clear, the blade survives. Right: the original.</figcaption>
</figure>

Overlap actually dropped, 36% to 21%: the blade now points forward where the
original angles it back across the body, which widens the bounding box (0.67
against 0.52). But the sword is rigged to the hand, so that is a pose problem
rather than a missing-object problem. One of those is fixable.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
