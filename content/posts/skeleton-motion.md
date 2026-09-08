---
title: "[AI] Skeleton animation set"
date: 2026-09-08T12:13:00+08:00
lastmod: 2026-09-09T05:48:54+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

**As of September 9, 2026:** creature mod **0.11.1** contains ten Necropolis creatures. Installation counts in this article belong to the named delivery version. The latest expansion is [Vampire and bat forms](/posts/necropolis-vampires/).

The Skeleton is installed with thirteen groups and 82 frames per scale.

![Panel comparison on the installed background, offline composite](/demos/necropolis-creatures-game-02/skeleton-centering.png)

## Placement, shadows and first display

Bodies, shadows and hover outlines are supplied at 1×/2×. Shifting the skeleton by 25 logical pixels brought its panel center to x=49.5; the walking dead moved from x=75 to x=50. These changes also affect battle-canvas placement, while preserving canvases and frame counts.

Shadows use a fixed ground line, continuous alpha and mild spatial blur, with 1× reduced from the 2× projection. Maximum adjacent-frame alpha change during walking fell from 1.083 to 0.643 for the skeleton and from 0.489 to 0.357 for the walking dead. This pixel metric does not establish flicker-free motion; the [six playback comparisons](/demos/necropolis-creatures-game-02/) show its scope.

Effects are computed during packaging and loaded as saved PNGs. A preparation benchmark of the early two-creature package measured 203.8 seconds for generated effects and 0.51 seconds for saved effects. It excluded GPU upload and startup, with OS caches unflushed; this is not a startup speedup measurement. [Raw results](/demos/necropolis-creatures-game-01/benchmark.json).

Registration, effects and installation passed resource checks without engine changes. Contact and pacing still need per-motion review. The body-only videos below are authoring previews, while the installed package includes shadows.

## Motion authoring

The repaired skeleton needs to hold together while moving. The previous
[four-pose study](/posts/skeleton-rig-study/) established editable hands and limbs;
the current pass now covers all thirteen authored groups, including reactions,
death, turns and all three melee directions.

The [complete review page](/demos/skeleton-motion-full-03/) provides a playable
video and original-frame comparison for every group.

Astra continues to write the local Blender tools after the switch from Opus-5.
The workflow now reaches into geometry, rig controls and saved animation curves.
The existing textured skull, chest and pelvis are still reused. This pass made no
new Meshy calls.

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/attack_front.gif" src="/demos/skeleton-motion-full-03/attack_front.mp4" style="width:360px;max-width:100%"></video>
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
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/moving.gif" src="/demos/skeleton-motion-full-03/moving.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>The walk loops in place. The contact check adds the intended forward displacement separately; this video does not simulate movement across a battlefield.</figcaption>
</figure>

The arm swing needed another correction: the right hand and right foot were
advancing together. Each hand now moves in opposition to its own foot, with the
weapon elbow moving alongside the wrist. Shoulder-relative wrist travel is about
0.353 model units.

The raised-sword request also applies to the forward part of the arm swing,
not the whole cycle. Following the original and the clarified feedback, blade
elevation now follows the wrist from roughly 0° behind the body to 65° in front.
Movement start/end use the revised walk endpoint.

Same-side fore/aft arm–leg correlation changes from +0.923 to −0.999 on the right
and +0.329 to −0.983 on the left. Negative correlation indicates opposing motion.
The check also requires higher blade elevation during forward arm carriage than
backward carriage. These gates catch phase and orientation regressions; they do
not replace comparison with the original.

<figure>
  <img src="/demos/skeleton-motion-full-03/walk-comparison.gif" alt="Original, previous and revised walking arm motion">
  <figcaption>Original, previous and revised versions. Each uses its eight exported frames with a fixed crop, played at a shared review rate to compare arm motion.</figcaption>
</figure>

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
  <img src="/demos/skeleton-motion-full-03/native-frames.png" alt="Original and new eight-frame holding, movement and attack sequences">
  <figcaption>Original above study for each group, at native pixel scale. Each row shares one scale and crop; frames are never fitted individually. Attack columns compare phases, not verified original playback timing. Open the image to inspect its full resolution.</figcaption>
</figure>

## Reactions and death

Hit reaction now recoils backward, settles forward and returns to holding.
Defence raises the blade, absorbs an impact and recovers.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/hitted.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/defence.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>Hit and defence retain six and eleven game frames. These videos show the dense review bake.</figcaption>
</figure>

Death passes through recoil, kneeling and a forward collapse before settling
prone. The sword stays attached. The original breaks into a bone pile; this
version retains its connected rig. A small root-height correction uses the
lowest evaluated mesh point to keep the collapse above the floor.

<figure>
  <video controls muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/death.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>The death clip finishes prone and holds its final pose. Replay it to inspect the collapse.</figcaption>
</figure>

## Turns and directional attacks

A keyed root object rotates the entire character, including the rig, controls
and geometry. VCMI plays TURN_L, flips the rendered facing, then plays TURN_R.
Both clips retain two frames and share the intermediate frontal pose.

<figure>
  <img src="/demos/skeleton-motion-full-03/turn-order.gif" alt="Native turn clips in engine order with a facing flip">
  <figcaption>Turn frames composed in engine order, with holding pauses at both ends. This simulates the display flip; it is not an in-game capture.</figcaption>
</figure>

High and low attacks have separately authored torso and wrist targets. At the
strike phase the blade tip reaches approximately 1.840, 1.211 and 0.241 model
units for high, frontal and low attacks. An interpolated free-hand target in the
low strike initially exceeded reach by 0.002186 units. Bringing it closer reduced
the maximum IK error across all thirteen clips to below 0.000091.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_up.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_down.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>High and low attacks retain the established wind-up, lifted step and recovery.</figcaption>
</figure>

## Saved clips and checks

All thirteen Blender files retain native editable Actions, IK controls and packed
textures. Reopening them and sampling **577 integer and half-frame positions**
gave a maximum endpoint error of about 0.000091 model units and a blade-length
variation below 0.000001. Loop closure and the authored holding/walk transition
endpoints also passed. These checks do not detect every collision or assess the
expressiveness of the animation.

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

**Next stage:** [Skeleton Warrior, Zombie, and the remaining Necropolis roster](/posts/necropolis-upgrades/) now have a separate progress post with all upgrade animation previews.


**Showcase and shadow update (0.7.0):** these showcase figures now use the
accepted background. Walking dead moves from x=75 to x=50 inside its panel: all
160 body frames and companion shadows/outlines shift together. Skeleton keeps its
existing registration. The offset also applies within the battle canvas; visible
pixels, canvas dimensions and frame counts are preserved.

![Creature showcase comparison with the current background](/demos/necropolis-creatures-game-02/skeleton-centering.png)

These are offline composites using the game's crop, not screenshots. The user
clarified that the background sharpness concern referred to the composite. No
runtime low-resolution loading defect was established.

Previous shadows used each frame's lowest pixel as a projection anchor, then
thresholded alpha at 128. That anchor spans 4.5 logical pixels during skeleton
movement, 6.5 during its front attack and 2.5 during walking-dead movement. The
replacement uses fixed ground, continuous alpha and modest spatial blur, deriving
1x from the same 2x projection. There is no temporal averaging or animation delay.
Maximum adjacent-frame alpha change during movement falls from 1.083 to 0.643 for
skeleton and 0.489 to 0.357 for walking dead. This metric includes legitimate pose
changes and responds to blur; it is not a perceptual flicker score. Attack changes
do not all decrease. The [six playable comparisons](/demos/necropolis-creatures-game-02/)
show that scope. All 324 shadows are prebaked, body/outline content is preserved,
and final validation has zero errors or warnings. The installed package has a
backup and takes effect after restart; engine source remains unchanged.

**Game integration update:** the reviewed skeleton and walking-dead animations
are installed locally at 1x/2x: 324 body PNGs, with simplified sheared shadows and
hover outlines precomputed using VCMI algorithms. Original-DEF validation reports zero errors or
warnings, and native mod loading passed. ~~Only unupgraded CSKELE/CZOMBI are replaced;
upgrades, portraits and map art retain their originals.~~

> Update, 2026-09-09: The two upgrades were subsequently [installed](/posts/necropolis-upgrades/). Portraits and adventure-map appearances remain original.

 Existing videos remain
body-only, and full battle contact/effect review is still pending.

The user then reported the skeleton was too far right in its showcase window.
Its fixed crop starts at x=150; a new silhouette centered at x=224.5 appears at
x=74.5 inside the 100-pixel window. Per the user's request, this is fixed entirely
in mod assets. All provisional engine/schema changes were reverted. All 164
skeleton images move left 25 logical pixels (50 at 2x), placing the showcase
center at x=49.5 without clipping visible pixels or changing animation timing.
This also changes placement within the battle canvas: the holding bottom-band
mean X changes from 219.2 to 194.2, versus 196.5 in the original. It is not a
preview-only offset. Local package 0.3.0 takes effect after restarting VCMI.

![Original, previous, and corrected mod assets in an offline showcase crop](/demos/necropolis-creatures-game-01/preview-centering.png)

The figure reproduces the background and crop parameters offline; it is not a
game screenshot. The user reported stuttering on first display that subsided
afterwards.

Version 0.3.0 moves shadow and outline computation into packaging. An offline
helper calls VCMI's existing SDL3 functions and writes 324 shadow images plus
72 holding/hover outlines. Removing the generation flags lets the normal loader
read those companion PNGs. Body frames, resolution and playback timing stay intact;
no engine source changes are needed. All 396 saved effects match regenerated
native pixels, and final asset validation has zero errors or warnings.

A fresh-process sweep of the entire 324-frame, two-scale package took **203.8 s**
with generated effects and **0.51 s** with saved effects; another saved-effect run
took 0.49 s. The game loads frames on demand, whereas this benchmark visits every
frame. OS disk caches were not flushed, and GPU upload and game startup are outside
the measurement. This establishes the cost removed from asset preparation, not
an end-to-end startup multiplier. The [raw results](/demos/necropolis-creatures-game-01/benchmark.json)
state that scope. Restart VCMI to use the new package; first-display behavior still
needs an in-game check.

 [PR #10](https://github.com/yzh119/vcmi/pull/10)
adds installation notes and the mod canvas-registration tool.

The repaired skeleton needs to hold together while moving. The previous
[four-pose study](/posts/skeleton-rig-study/) established editable hands and limbs;
the current pass now covers all thirteen authored groups, including reactions,
death, turns and all three melee directions.

The [complete review page](/demos/skeleton-motion-full-03/) provides a playable
video and original-frame comparison for every group.

Astra continues to write the local Blender tools after the switch from Opus-5.
The workflow now reaches into geometry, rig controls and saved animation curves.
The existing textured skull, chest and pelvis are still reused. This pass made no
new Meshy calls.

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/attack_front.gif" src="/demos/skeleton-motion-full-03/attack_front.mp4" style="width:360px;max-width:100%"></video>
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
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/moving.gif" src="/demos/skeleton-motion-full-03/moving.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>The walk loops in place. The contact check adds the intended forward displacement separately; this video does not simulate movement across a battlefield.</figcaption>
</figure>

The arm swing needed another correction: the right hand and right foot were
advancing together. Each hand now moves in opposition to its own foot, with the
weapon elbow moving alongside the wrist. Shoulder-relative wrist travel is about
0.353 model units.

The raised-sword request also applies to the forward part of the arm swing,
not the whole cycle. Following the original and the clarified feedback, blade
elevation now follows the wrist from roughly 0° behind the body to 65° in front.
Movement start/end use the revised walk endpoint.

Same-side fore/aft arm–leg correlation changes from +0.923 to −0.999 on the right
and +0.329 to −0.983 on the left. Negative correlation indicates opposing motion.
The check also requires higher blade elevation during forward arm carriage than
backward carriage. These gates catch phase and orientation regressions; they do
not replace comparison with the original.

<figure>
  <img src="/demos/skeleton-motion-full-03/walk-comparison.gif" alt="Original, previous and revised walking arm motion">
  <figcaption>Original, previous and revised versions. Each uses its eight exported frames with a fixed crop, played at a shared review rate to compare arm motion.</figcaption>
</figure>

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
  <img src="/demos/skeleton-motion-full-03/native-frames.png" alt="Original and new eight-frame holding, movement and attack sequences">
  <figcaption>Original above study for each group, at native pixel scale. Each row shares one scale and crop; frames are never fitted individually. Attack columns compare phases, not verified original playback timing. Open the image to inspect its full resolution.</figcaption>
</figure>

## Reactions and death

Hit reaction now recoils backward, settles forward and returns to holding.
Defence raises the blade, absorbs an impact and recovers.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/hitted.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/defence.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>Hit and defence retain six and eleven game frames. These videos show the dense review bake.</figcaption>
</figure>

Death passes through recoil, kneeling and a forward collapse before settling
prone. The sword stays attached. The original breaks into a bone pile; this
version retains its connected rig. A small root-height correction uses the
lowest evaluated mesh point to keep the collapse above the floor.

<figure>
  <video controls muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/death.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>The death clip finishes prone and holds its final pose. Replay it to inspect the collapse.</figcaption>
</figure>

## Turns and directional attacks

A keyed root object rotates the entire character, including the rig, controls
and geometry. VCMI plays TURN_L, flips the rendered facing, then plays TURN_R.
Both clips retain two frames and share the intermediate frontal pose.

<figure>
  <img src="/demos/skeleton-motion-full-03/turn-order.gif" alt="Native turn clips in engine order with a facing flip">
  <figcaption>Turn frames composed in engine order, with holding pauses at both ends. This simulates the display flip; it is not an in-game capture.</figcaption>
</figure>

High and low attacks have separately authored torso and wrist targets. At the
strike phase the blade tip reaches approximately 1.840, 1.211 and 0.241 model
units for high, frontal and low attacks. An interpolated free-hand target in the
low strike initially exceeded reach by 0.002186 units. Bringing it closer reduced
the maximum IK error across all thirteen clips to below 0.000091.

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_up.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_down.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>High and low attacks retain the established wind-up, lifted step and recovery.</figcaption>
</figure>

## Saved clips and remaining work

All thirteen Blender files retain native editable Actions, IK controls and packed
textures. Reopening them and sampling **577 integer and half-frame positions**
gave a maximum endpoint error of about 0.000091 model units and a blade-length
variation below 0.000001. Loop closure and the authored holding/walk transition
endpoints also passed. These checks do not detect every collision or assess the
expressiveness of the animation.

~~Shadow and owner-overlay passes, complete mod assembly and actual battle review
remain. The current exports contain the body pass and have not been installed
as a complete replacement mod. The [zombie study](/posts/zombie-study/) now also
has thirteen body-animation clips. Work on the second character will inform
which Blender interfaces deserve a separate repository.~~

> Update, 2026-09-09: The complete assets are installed and retained in0.10.0, including effects, registration and the background updates above. Full battle contact/timing review remains separate.



[PR #10](https://github.com/yzh119/vcmi/pull/10) contains the limb refinements,
continuous motion generator, preview builder, saved-animation checks and
reproduction instructions.

{{< /history >}}
