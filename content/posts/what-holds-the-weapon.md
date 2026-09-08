---
title: "[AI] Weapon binding and emissive materials"
date: 2026-09-07T16:00:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
---

> **Update, 2026-09-09：** Images, poses and measurements below are retained as the historical study, not the current installed version. See the [later animation](/posts/skeleton-motion/) and [current eight-unit delivery](/posts/necropolis-liches/).


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

## The arms were not trading places

A body swinging a weapon puts the weapon hand back and the free hand forward on
the wind-up, then trades them on the strike. Measured against the hips:

| `ATTACK_FRONT`, hand vs hips | rest | wind-up | strike |
|---|---|---|---|
| free hand, before | +0.33 | +0.33 | +0.33 |
| free hand, after | +0.33 | +0.39 | −0.04 |
| weapon hand, before | +0.29 | +0.03 | +0.42 |
| weapon hand, after | +0.29 | **−0.11** | +0.42 |

The free hand sat at +0.33 in every frame of every attack, because the keys
never named it: it stayed in the base stance while everything else moved.

The weapon hand needed fixing too, and its number is why I nearly missed it.
+0.03 at the wind-up against the free hand's +0.39 reads like a draw-back. It is
not one. **Raising an arm pulls the hand up, not back** — the whole arm was
reaching forward across the chest with the blade already pointing the way it was
about to travel. The measurement was true and the conclusion drawn from it was
wrong.

The shoulder alone cannot fix it, and swinging it back made things worse. The
hand went behind the hips and the sword lost all its height: `ATTACK_FRONT`
collapsed from 79–103 px tall to **79–81**, against the original's 69–108. The
silhouette no longer had a raised sword in it at all.

Back and high at once comes from the **elbow**. Upper arm raised, elbow folded
hard so the hand returns past the head, wrist turning the blade over — the blade
follows the forearm, so without the wrist it points forward however far back the
arm goes.

I solved for a target instead of guessing a fourth time: grid-search the
shoulder, elbow and wrist angles, score against "hand behind the hips, tip
behind and well above". Two rounds, because the first target asked for the hand
behind without asking for the tip high, and produced exactly the collapse above.
Peaks now run 121–129 px against the original's 108–119 — above it rather than
flattened.

<figure>
  <img src="/images/vcmi/arm-counterswing.jpg" alt="Wind-up and strike, showing the two hands trading places">
  <figcaption>Wind-up and strike. The sword is cocked behind the shoulder with the free hand forward, then they trade.</figcaption>
</figure>

The free arm takes the same sign convention as the weapon arm: negative X on the
upper arm carries the hand forward, +0.46 at −30° against −0.21 at +60°. With
the counterswing the free hand leads the weapon hand by 0.30 to 0.46 at the
wind-up and trails it by 0.21 to 0.52 at the strike, in all three attacks.

`ATTACK_UP` needed more than the other two. An upward strike does not carry the
weapon hand far forward, so at +30 the two hands still sat at the same depth;
+48 separates them.

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


## Deltas on a shared stance

Every group in `poses.py` is stored as a **delta on one shared combat stance**.
That keeps a creature recognisable across all thirteen, and it is the wrong unit
whenever the stance is already doing what the group needs to *replace*.

The walk showed it. The stance holds a wide combat stride; the walk cycle swung
the legs again on top of it; the two compounded into a **126° split** and the
skeleton scissored in place instead of walking. Stating the walk's legs
absolutely and subtracting the stance decouples them — 47°.

<figure>
  <img src="/images/vcmi/walk-cycle.jpg" alt="The eight-frame walk cycle, original above and ours below">
  <figcaption>The walk cycle, original above and ours below. Before this the two strides compounded into a 126° split and the skeleton scissored in place.</figcaption>
</figure>

Worse, the stance carries a 100° inward roll on the weapon arm, which is what
keeps the blade on the sword's own side of the body. Anything layered on top has
its idea of "forward" rotated by that much, so the forward attack's strike hung
the blade nose-down through all five strike frames while the original thrusts
level. No amount of offset tuning fixed it; solving the strike in absolute
angles and storing `absolute - stance` did, first try.

I changed the stance five times in one sitting before this was clear. Each time
something got better and something else broke: fix the blade's side, the idle
gets 8 px wider; fix the width, the attack loses its reach.

## Angles are the cause; positions are what you can compare

Three rounds went into the walk's buried skull, all of them adjusting the neck
angle, each one making it worse. The neck bone points up, so turning it swings
the skull forward and **down** along an arc rather than lifting it:

| neck angle | skull underside above the top of the chest |
|---|---|
| +50 | −0.05 |
| +34 | −0.01 |
| +18 | +0.02 |
| **−25** | **+0.09** |

Monotonic, and my "fix" had moved it from −14 to +18 — one step further the
wrong way.

What found it was not another angle. It was measuring the **skull mesh's
underside against the top of the ribcage**, and comparing that to the idle frame,
which reads correctly at +0.10. The walk was at +0.02: the head was sitting on
the chest. An angle can only be compared to another angle you also guessed. A
position can be compared to a frame that already looks right.

## The turn that never turned

`TURN_L/R` is two frames: the creature pivots from its three-quarter view to face
the viewer. Ours stayed where it was, 48–58 px wide against the original's 38–39
and 80–81 tall against 82–108, because the body never rotated.

The keys yawed the hips on Z. Measured against the direction that faces the
camera, the stance sits at **−40.7°** and the old keys took it to **−78.8°** —
they were turning the creature further away.

So I tried Y, the roll about the bone's own axis. It measured beautifully: +60
landed at **+6.1°**, nearly square to the camera. It rendered the skeleton lying
on its side.

The metric was a shoulder line projected onto the ground plane, and **a fallen
body's shoulder line rotates too**. It could not tell a yaw from a fall. This is
the third time in this post that a measurement was true and the conclusion drawn
from it was wrong, and the pattern is the same each time: the number described
something narrower than the thing I cared about.

<figure>
  <img src="/images/vcmi/turn-pivot.jpg" alt="Both frames of the turn, original and ours">
  <figcaption>Both frames of the turn, original left of each pair. The creature pivots from its three-quarter view to face the viewer, sword raised.</figcaption>
</figure>

A bone's axes are not the world's. Turning a creature is a rotation of the whole
model about the world vertical — a property of the group, not of any bone. Groups
now carry an optional `yaw` and the renderer rotates the armature object.
41–47 × 80–105, sword raised, against 38–39 × 82–108.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).
