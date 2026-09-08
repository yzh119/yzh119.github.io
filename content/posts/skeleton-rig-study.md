---
title: "[AI] opus -> astra: Skeleton rig and grip study"
date: 2026-09-08T11:40:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

The skeleton passed the animation format validator, but its posture and hands still
looked wrong next to the original. Before extending the pipeline to elves and
mages, I wanted one creature whose geometry and posing controls I could inspect.

The earlier work used Opus-5. For this round I switched to
[Astra](https://developers.openai.com/api/docs/models/gpt-6-astra), and the improvement
in this task has felt substantial. It wrote Blender tooling to inspect the source,
replace troublesome geometry and produce editable pose studies. The figures below
show the resulting changes, including the parts that still need work.

## Four poses

The deliverable is four independent key poses: holding, walk contact, wind-up and
strike. They have not been turned into a continuous animation.

<figure>
  <img src="/images/vcmi/skeleton-study-comparison.png" alt="Original, previous implementation and new skeleton study across four poses">
  <figcaption>Original on top, previous implementation in the middle, study below. Each row retains one camera and scale across its poses. The study also changes the camera, so this compares the whole revision. Original attack frames serve as phase references; timing is not matched yet.</figcaption>
</figure>

The pose configuration now specifies wrist and ankle positions, elbow and knee
poles, torso lean and blade direction. Each pose starts independently. Adjusting
the holding stance no longer changes every other pose through a shared set of
angle offsets.

There is still a visible gap to the original's expression, particularly the lifted
leg and open free arm during the wind-up. The new limbs are also simplified. This
is a pose study that can be edited further.

## Retaining part of the source

Inspection revealed source components that spanned anatomical joints. Assigning a
whole component to its strongest bone could attach part of an upper arm to a hand.
Reweighting by joint position brought the IK endpoints into place but left spikes
where long triangles crossed the joint.

The study keeps complete skull, chest and pelvis components with their textures:
**17,947 source vertices**. Limbs, feet and hands are reconstructed as separate
bone-shaped pieces. A new armature uses the measured rest landmarks and
joint-to-joint lengths; the imported bone lengths did not agree with the distances
to their child joints.

## Hands and weapon

Each hand has four fingers and a thumb. Their geometry has opposite chirality;
swapping bone names alone would not establish that. The finger shapes are fixed
for now, with a grip on one side and an open hand on the other.

<figure>
  <img src="/images/vcmi/skeleton-study-hands.png" alt="Isolated right-hand grip and open left hand">
  <figcaption>The character's right hand is on the left of the figure. These isolated views use inspection lighting to expose the finger and grip geometry.</figcaption>
</figure>

`RightHand` is an explicit asset setting. The source was left-handed; this study
puts the weapon on the near side of the game camera for inspection. The choice no
longer depends on a repair function reporting that it moved some vertices.

Grip, guard and blade are separate objects beneath a `WeaponGrip` socket that
copies the hand bone's transform. None has skin weights. Moving the wrist control
moves the hand and sword together.

## What Astra replaced

There were no new Meshy calls in this round. The existing asset supplied the
textured core, while Astra wrote Python to construct the new rig, limbs, hands,
weapon and pose controls in local Blender.

The skull still comes from the generated asset, so this is not a wholly procedural
skeleton. For this creature, automatic rigging and the simpler geometry could be
replaced with explicit code. Whether that approach transfers well to another
creature remains to be tested. The tools stay under VCMI's `tools/creature-art`
until that second use case establishes a useful repository boundary.

## Saved files and checks

Each pose has its own `.blend`, editable IK targets and packed textures. A manifest
records the source hash, complete profile, script hashes, Blender version, fixed
camera and measured positions.

Checks reopen all four files. The largest error among the sixteen wrist and ankle
targets is **0.000039 model units**, and blade length varies by less than
**0.000001** across poses. The checks also exercise control edits and pose resets,
and verify skin weights and embedded textures. Visual quality still needs to be
judged from the renders.

Next are proportion and key-pose refinement, then transitions and full cycles.
Shadow, overlay and mod assembly will follow animation review.

[PR #10](https://github.com/yzh119/vcmi/pull/10) includes the study generator, pose
profile, comparison tool and Blender integration checks.
