---
title: "[AI] Weapon binding and emissive materials"
date: 2026-09-07T16:00:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
---

The [last post](/posts/weapon-not-on-the-hand/) said the sword was bound to the
hand. It was bound to the wrong geometry: the test that found it on one mesh
picked an arm bone on the next one. The sword still appeared in every render,
hanging vertically beside the leg like a walking stick, so nothing flagged it.

## The render was flat, and the lights were not the reason

Before the sword, the shading. Rendered frames were washing out next to the
original: a 5th-to-95th percentile brightness span of **83** where the original
def spans **169**.

I killed every light in the scene as a test. The image barely changed. A lit
scene with no lights renders black, so the model was lighting itself, but I read
the result as an over-strong ambient term and went on adjusting lights.

Two things were wrong at once. Meshy's glTF wires the base colour texture into
**Emission at strength 1** with **Metallic 1**, so the model lights itself.
And Blender's default view transform, **AgX**, is a filmic curve that compresses
highlights; it is the right default for a photographic render and the wrong one
for sprites that have to survive being scaled to 79 pixels.

Fixing both:

| | p5 | p95 | span |
|---|---|---|---|
| AgX, emissive materials | 100 | 183 | 83 |
| Standard view transform | 101 | 218 | 117 |
| plus materials un-emitted | 46 | 228 | **182** |
| original `CSKELE.DEF` | 24 | 193 | 169 |

`sanitise_materials()` now disconnects the emission links, zeroes emission
strength, and sets metallic to 0 and roughness to 0.65 on import.

## The rebind was picking the humerus

The previous fix looked for the connected component that the hand grips and that
**reaches furthest from the hand joint**. On the mesh it was written against,
that found 474 vertices reaching 0.90 units — the sword.

On the next mesh it found a 604-vertex component spanning **z 0.80 to 1.38**,
running *upward* from a hand at z 0.94. Arm bones are longer than the visible
part of a blade and start closer to the joint, so the humerus wins that test.

<figure>
  <img src="/images/vcmi/sword-components.jpg" alt="The skeleton mesh with its longest components colour-coded">
  <figcaption>The mesh is 799 separate components. Colour-coded by length: the blade is blue, red and green; yellow and magenta are the shin bones it sits beside. The arm bones the old test picked are the plain white ones at the shoulder.</figcaption>
</figure>

Distance to the nearest bone does not separate them either. I tried it: ribs bow
further from the spine than the blade does from the leg.

## What does separate them

The weights. Meshy had split the sword between **`LeftHand` at 35%** and
**`LeftFoot` at 43%** — the grip follows the fist, the tip follows the toes, and
the blade stretches between them as the leg moves. That is what made it read as
a walking stick.

Every real body part is influenced by bones that neighbour each other in the
skeleton: a femur by hip and knee, one hop apart; a rib by two spine joints,
three. Only rigid geometry held across the body picks up two bones from
different limb chains.

Measured over the whole mesh, on the skeleton's parent/child graph:

- five components at **10 hops** — 1374 vertices, all sword
- the other 173 components at **3 hops or fewer**

No threshold tuning needed. `rebind_weapon()` now takes each component's two
dominant bones, measures the hop distance between them, and rebinds anything
past 5 hops to whichever of the two is a hand.

## The sword was in the left hand

With the sword finally following the wrist, the attacks still did nothing to it:
every pose in `poses.py` swings `RightArm`, and this skeleton is left-handed.
The rebind now reports which hand it moved the weapon to, and poses are mirrored
when it says the left — bone names swap sides and the Y and Z components of each
rotation change sign, which is the relationship the stance already encoded
between its own two arms.

## The strike keys had the sign backwards

The same trap as the [reverse knees](/posts/reverse-knees/), in a different
place. The blade leaves the wrist **along the hand bone's own axis** — it is a
continuation of the forearm, not something the wrist aims independently. So the
stance decides where the blade points, and on the upper arm bone negative X
carries it forward while positive swings it behind the creature.

Every strike key was positive. The creature was slashing backwards.

Rather than guess again, I swept the arm, forearm and spine angles and measured
where the tip actually ended up. Sword tip height through each attack, after
setting the keys from that table:

| | wind-up | strike | recover |
|---|---|---|---|
| `ATTACK_UP` | 2.8 | 2.2 | 0.6 |
| `ATTACK_FRONT` | 2.6 | 1.0 | 0.4 |
| `ATTACK_DOWN` | 2.5 | 0.2 | 0.3 |

<figure>
  <img src="/images/vcmi/attack-arc.jpg" alt="Three frames of the forward attack, original and ours">
  <figcaption>Forward attack at wind-up, extension and follow-through. Original left of each pair, ours right.</figcaption>
</figure>

The resting guard sits at 0.4 with the blade crossing the shins, which is where
the original holds it. The old stance left it hanging off the hip on the far
side from the direction the creature faces.

## The poses were the wrong shape

With the sword working, the frames could finally be compared to the original as
shapes. Every `.def` frame stores its own content box, so the original's
dimensions are readable directly — and three groups were wrong in ways that are
obvious once written down as numbers.

| | original | before | after |
|---|---|---|---|
| idle, width × height | 44 × 80 | 29 × 80 | 40 × 80 |
| guard | 36–61 × 82–109 | 40–85 × 70–80 | 40–68 × 80–111 |
| walk | 54–72 × 71–76 | 37–54 × 78–85 | 41–53 × 71–73 |

**The idle was a column.** Legs nearly together, knees barely bent, which reads
as standing to attention rather than braced. Opening the stride and bending both
knees brings it to 40.

**The guard was inverted.** The original's parry is its *tallest* and one of its
*narrowest* poses — the blade goes up in front of the body. Ours swung the blade
out sideways and crouched behind it, which came out wider than its own idle and
shorter. Raising the arm and folding the elbow hard puts the blade at 68° above
horizontal.

<figure>
  <img src="/images/vcmi/pose-shapes.jpg" alt="Idle, guard and walk, original and ours">
  <figcaption>Idle, guard, walk. Original left of each pair, ours right. The guard still opens to 68° where the original is nearly vertical.</figcaption>
</figure>

**The walk stood up straight.** The original creeps — torso pitched well
forward, head ahead of the hips, sword carried out horizontally instead of
hanging. Standing upright gave a silhouette both too narrow and too tall, which
is what a vertical spine does to a side view.

The zombie's profile now pins its own feet rather than inheriting the skeleton's,
since a shamble should not pick up the brace.

The walk overshot first. Twice these values folded the torso double and swung
the sword out in front of it, at 73–91 wide. The values in the table are the
midpoint of the two measurements.

## Calibrating on the wrong frame

The walk's height would not come down, and the reason was in the camera, not the
pose. Each render calibrated the camera against the group it was about to draw —
render a probe frame, measure the alpha bounding box, correct until the creature
is 79 px tall. That is right for one group and wrong across thirteen, because it
forces **every** group's first frame to exactly 79.

The original does not work that way. It walks at 71–76 and guards at 82–109
against an 80 px idle: it crouches to move and reaches up to parry. Rescaling
each group to a fixed height flattens both.

Calibrating once on the idle and rendering every group through that camera:

| | original | ours |
|---|---|---|
| walk | 71–76 | 71–74 |
| guard | 82–109 | 80–111 |
| forward attack | 69–108 | 79–103 |

The widths still lagged on the walk — 41–53 against 54–72. Not the stride:
swinging the legs 45% further moved the silhouette by a single pixel, because at
this camera angle the stride runs almost straight into the lens. The original
gets its width from carrying the sword out level rather than letting it hang.

I first wrote that off as impossible, on the grounds that the blade is welded in
line with the forearm. That was true when the sword was weighted to a foot. It
is not true now: the rebind gives the hand bone full weight over the blade, so
the wrist aims it directly — **-70° puts it at +3 above horizontal where 0
leaves it at -68**. Reaching for the same angle with the shoulder instead threw
the whole silhouette out to 64–81 px wide and dropped it to 59 tall.

Fixing one thing had removed a constraint I was still reasoning under.

## Camera angle

Heroes III's creatures are three-quarter views facing right. I had been
rendering at azimuth 0 — straight on — which foreshortened every swing towards
the lens. The default is now **-40°**. Same model and same poses; the arc is
now visible.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10), which now carries the
material fix, the hop-distance rebind, pose mirroring and the corrected strike
keys.
