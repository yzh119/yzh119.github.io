---
title: "[AI] opus -> astra: Skeleton animation set"
date: 2026-09-08T12:13:00+08:00
lastmod: 2026-09-08T12:46:14+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

The repaired skeleton needs to hold together while moving. The previous
[four-pose study](/posts/skeleton-rig-study/) established editable hands and limbs;
the current pass now covers all thirteen authored groups, including reactions,
death, turns and all three melee directions.

The [complete review page](/demos/skeleton-motion-full-01/) provides a playable
video and original-frame comparison for every group.

Astra continues to write the local Blender tools after the switch from Opus-5.
The workflow now reaches into geometry, rig controls and saved animation curves.
The existing textured skull, chest and pelvis are still reused. This pass made no
new Meshy calls.

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-01/attack_front.gif" src="/demos/skeleton-motion-full-01/attack_front.mp4" style="width:360px;max-width:100%"></video>
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
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-01/moving.gif" src="/demos/skeleton-motion-full-01/moving.mp4" style="width:360px;max-width:100%"></video>
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
retain **13 groups and 82 frames per scale**: eight each for holding, movement
and the three attacks; two each for movement start/end and turns; eleven each
for hover and defence; six each for hit and death. Both 1× and 2× are rendered.

<figure>
  <img src="/demos/skeleton-motion-full-01/native-frames.png" alt="Original and new eight-frame holding, movement and attack sequences">
  <figcaption>Original above study for each group, at native pixel scale. Each row shares one scale and crop; frames are never fitted individually. Attack columns compare phases, not verified original playback timing. Open the image to inspect its full resolution.</figcaption>
</figure>

## Reactions and death

Hit reaction now recoils backward, settles forward and returns to holding.
Defence raises the blade, absorbs an impact and recovers.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-01/hitted.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-01/defence.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>Hit and defence retain six and eleven game frames. These videos show the dense review bake.</figcaption>
</figure>

Death passes through recoil, kneeling and a forward collapse before settling
prone. The sword stays attached. The original breaks into a bone pile; this
version retains its connected rig. A small root-height correction uses the
lowest evaluated mesh point to keep the collapse above the floor.

<figure>
  <video controls muted playsinline preload="metadata" src="/demos/skeleton-motion-full-01/death.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>The death clip finishes prone and holds its final pose. Replay it to inspect the collapse.</figcaption>
</figure>

## Turns and directional attacks

A keyed root object rotates the entire character, including the rig, controls
and geometry. VCMI plays TURN_L, flips the rendered facing, then plays TURN_R.
Both clips retain two frames and share the intermediate frontal pose.

<figure>
  <img src="/demos/skeleton-motion-full-01/turn-order.gif" alt="Native turn clips in engine order with a facing flip">
  <figcaption>Turn frames composed in engine order, with holding pauses at both ends. This simulates the display flip; it is not an in-game capture.</figcaption>
</figure>

High and low attacks have separately authored torso and wrist targets. At the
strike phase the blade tip reaches approximately 1.840, 1.211 and 0.241 model
units for high, frontal and low attacks. An interpolated free-hand target in the
low strike initially exceeded reach by 0.002186 units. Bringing it closer reduced
the maximum IK error across all thirteen clips to below 0.000091.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-01/attack_up.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-01/attack_down.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>High and low attacks retain the established wind-up, lifted step and recovery.</figcaption>
</figure>

## Saved clips and remaining work

All thirteen Blender files retain native editable Actions, IK controls and packed
textures. Reopening them and sampling **577 integer and half-frame positions**
gave a maximum endpoint error of about 0.000091 model units and a blade-length
variation below 0.000001. Loop closure and the authored holding/walk transition
endpoints also passed. These checks do not detect every collision or assess the
expressiveness of the animation.

Shadow and owner-overlay passes, complete mod assembly and actual battle review
remain. The current exports contain the body pass and have not been installed
as a complete replacement mod. The **zombie is the next creature after the skeleton**.
A second character should clarify which Blender interfaces deserve a separate
repository.

[PR #10](https://github.com/yzh119/vcmi/pull/10) contains the limb refinements,
continuous motion generator, preview builder, saved-animation checks and
reproduction instructions.
