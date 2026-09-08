---
title: "[AI] opus -> astra: Skeleton motion"
date: 2026-09-08T12:13:00+08:00
lastmod: 2026-09-08T12:28:32+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

The repaired skeleton needs to hold together while moving. The previous
[four-pose study](/posts/skeleton-rig-study/) established editable hands and limbs;
this pass turns them into five clips: holding, walking, frontal attack, movement
start and movement end.

Astra continues to write the local Blender tools after the switch from Opus-5.
The workflow now reaches into geometry, rig controls and saved animation curves.
The existing textured skull, chest and pelvis are still reused. This pass made no
new Meshy calls.

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/images/vcmi/skeleton-motion-attack_front.gif?v=review-04" src="/images/vcmi/skeleton-motion-attack_front.mp4?v=review-04" style="width:360px;max-width:100%"></video>
  <figcaption>Frontal attack at 30 fps and twice the game scale. Pause or scrub to inspect the wind-up, step, strike and recovery. This is the body pass.</figcaption>
</figure>

The rear foot supports the attack. The front foot lifts, lands farther forward,
then lifts again to return. Key hand orientations interpolate with quaternions;
the grip, guard and blade remain rigid children of the weapon socket. The free
hand still uses its fixed open shape, without individual finger animation.

The limbs now have curved, tapered shafts, paired forearm and lower-leg bones,
and broader joint ends. Procedural surface shading reads stored rest positions
so that its noise stays attached to the bone as the character moves.

## Foot contact and playback

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/images/vcmi/skeleton-motion-moving.gif?v=review-04" src="/images/vcmi/skeleton-motion-moving.mp4?v=review-04" style="width:360px;max-width:100%"></video>
  <figcaption>The walk loops in place. The contact check adds the intended forward displacement separately; this video does not simulate movement across a battlefield.</figcaption>
</figure>

The first walk carried the sword too flat, with both hands crowded near the
chest. Following visual feedback, the blade now stays raised at 57–73 degrees
above horizontal. The weapon wrist is higher, the free hand is lower, and torso
lean is reduced. Start/end transitions share the revised carriage. These are
authored angles, not a frame-by-frame measurement of the original. The videos
and contact sheet show the revised version.

VCMI advances walking frames at `10 * speedFactor / walkAnimationTime` per second
and moves the creature at `2 * speedFactor / walkAnimationTime` hexes per second.
An eight-frame cycle consequently travels **1.6 hexes**, or **70.4 pixels** along
a horizontal row of 44-pixel hex steps.

The authoring tool converts that travel through the fixed camera. During stance,
the foot moves backward relative to the body at the matching rate. Adding root
travel back should leave the ankle in one place. This currently tests straight
horizontal movement; diagonal routes and interrupted walks need engine review.

Reopening the first bake exposed drift between otherwise correct integer frames.
Python key insertion had produced Bezier curves despite the linear interpolation
preference. Setting the actual Action keys to linear reduced the measured drift
from about **0.47 pixels to below 0.0033 pixels** at subframes.

The 30 fps bake is for inspection. Melee attacks run at a fixed frame rate in the
engine, so replacing the original frames with a dense bake would slow the action
down. The `attackAnimationTime` setting does not control melee attacks. Exports
retain **8/8/8/2/2 frames** for the five groups, at both 1× and 2× resolution.

<figure>
  <img src="/images/vcmi/skeleton-motion-native-frames.png?v=review-04" alt="Original and new eight-frame holding, movement and attack sequences">
  <figcaption>Original above study for each group, at native pixel scale. Each row shares one scale and crop; frames are never fitted individually. Attack columns compare phases, not verified original playback timing. Open the image to inspect its full resolution.</figcaption>
</figure>

## Saved clips and remaining work

All five Blender files retain native editable Actions, IK controls and packed
textures. Reopening them and sampling **245 integer and half-frame positions**
gave a maximum endpoint error of about 0.000089 model units and a blade-length
variation below 0.000001. Loop closure and the authored holding/walk transition
endpoints also passed. These checks do not detect every collision or assess the
expressiveness of the animation.

The skeleton still needs its remaining hover, hit, death, defence, turn and directional
attack groups, followed by shadow and owner-overlay passes, complete mod assembly
and actual battle review. The **zombie is the next creature after the skeleton**.
A second character should clarify which Blender interfaces deserve a separate
repository.

[PR #10](https://github.com/yzh119/vcmi/pull/10) contains the limb refinements,
continuous motion generator, preview builder, saved-animation checks and
reproduction instructions.
