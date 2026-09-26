---
title: "[AI] Castle cavalry and angels"
date: 2026-09-26T12:20:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Full action sets for the Cavalier, Champion, Angel and Archangel are in the local test mod, with rebuilt angel wings, compared frame by frame with the originals; battle screenshots and art review are still to do."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "flux", "castle"]
---

None of the four units in Castle's top two tiers had a version that could go into the game. The Cavalier had offline drafts, the Champion was stuck on leg skin weights, and the Angel and Archangel had motion but the wrong models. This round all four got every animation group and went into the local Castle mod (0.17.1 to 0.20.0). They are test drafts; the art has not been signed off.

Claude Code wrote the scripts and motion this round. The Cavalier's other twelve groups came from earlier sessions; this round added the death and re-exported everything.

## Cavalier death

Death was the Cavalier's last missing group. The previous draft folded the legs by rotating them, which swung the hooves below the floor, so ground correction lifted the whole horse by **0.061**. Frames 1–4 barely moved, then frame 5 rolled over with the rider still sitting upright.

The new draft follows the original's order. The forefeet stay planted while the hindquarters sink (frames 2–4), the forelegs buckle and the belly goes down (4–6), then the horse rolls onto its side with its back to the camera (6–8). The legs are re-solved at every sample so the hooves stay on the ground and the body actually drops. The lance leaves the hand at frame 4.5 and lies flat from frame 6.

![Original (top) and new draft (bottom), eight death frames, both from the 1× game sprites at 2×](/images/castle-top-tier-01/cavalier-death.png)

Over 129 sampled times, the lance never intersects the horse's surface, and the lowest point dips **1.4 × 10⁻⁴** below the floor between two frames, which does not show in game.

## Which side the Cavalier shows

The original Cavalier faces right but shows the rider's **left** side: the lance comes up from behind the horse's neck, and the Champion's shield and rein hand are on the near side. The original is a mirrored render.

0.17.0 put the camera on the horse's right flank, which brought the lance in front of the body. 0.17.1 renders the left flank and flips the image, and goes back to the up/down attacks and turns that were made for that side.

![Left: original idle at 4×. Middle: 0.17.0, camera on the right. Right: 0.17.1, the near arm crosses in front of the lance](/images/castle-top-tier-01/cavalier-lance-side.png)

The camera angle is measured. In the original, the horse spans **83** pixels nose to tail; at 45° it spanned 66, and solving for that width gives an azimuth of 52.6°. Scale and position come from two points, the helmet top (181) and the hoof line (265).

## Champion

The original Champion has exactly the same bounding box and horse width as the Cavalier, so it reuses the Cavalier's rig, all 13 groups and the camera, and adds three things: a gold plume, a blue heater shield with a white eagle, and steel plates on the horse's neck and head. The steel is masked by the horse rig's own neck and head weights; the plume and shield are generated procedurally in Blender and follow the rider's head and left forearm.

![Original (top) and new draft (bottom): idle, front attack, upward attack, death](/images/castle-top-tier-01/champion.png)

The original's barding has a white crenellated hem, which the draft does not have yet.

## Angel and Archangel

The old Angel draft had two problems. Its concept was a knight in plate, where the original wears a white robe with blue trim, long dark hair and bare arms. And the Blender scenes had broken materials, so it rendered grey.

The new concept comes from [FLUX.2 [pro]](https://bfl.ai/) by Black Forest Labs: an empty-handed body in an A-pose without wings, a separate wing, and the sword kept from an earlier review. Meshy's [image-to-3D and rigging](https://www.meshy.ai/) built and rigged them. That took 6 FLUX images, about 27 credits, and on Meshy 150 credits for five meshes and 10 for two rigs.

![Left: the old draft, static render. Right: the new Angel body, Blender still, wings not attached](/images/castle-top-tier-01/angel-models.jpg)

Each wing has three bones hung off the chest, with weights blended by distance from the root, so body, wings and sword share one pose. <s>A folded wing bends 110–130° at the wrist; at 170° the outer part folds back onto the shoulder.</s>

### Wings rebuilt (26 September)

The first wings came from a FLUX concept of a single wing. They were short and broad, the feathers ran together, they stood straight up in flight, and folded they made a large fan behind the back. The rebuilt wings come from Meshy's text-to-3D, straight from a text prompt with no concept image. Two candidates cost 20 credits each for the preview and 10 for the texture. The one kept came back as a spread pair joined by a small piece of body, with layered coverts and separate primaries. Cut down the middle with the body removed, each half is one wing.

The poses were redone against the original frames too. In flight the original sweeps the wings back almost level, then raises them and strokes forward and down; they do not pump straight up and down. Folded, they hang flat against the back with the top above the shoulders and the tips at the thighs. Folding within the wing's own plane had turned the underside out, leaving a dark hole in the middle.

![Original (top), first wings (middle), rebuilt (bottom): idle and three flight frames](/images/castle-top-tier-01/angel-wings.png)

The original glows gold when attacking and when selected. The draft adds the glow during packaging, only on the frames that glow in the original, by pushing each pixel toward gold according to its brightness.

![Original (top) and new draft (bottom), front attack, 1× game sprites](/images/castle-top-tier-01/angel-attack.png)

The first death tipped the whole body forward from the hips, legs included, and the Angel ended lying flat. The original ends as a small heap of wings. The draft now kneels, bends forward from the lower spine, and drapes the wings over back and legs.

![Original (top) and new draft (bottom), eight death frames](/images/castle-top-tier-01/angel-death.png)

The Archangel uses the same scripts, with a bronze cuirass, white skirt, wavy sword and a shield on the left arm. Bound in the A-pose, the shield lay flat once the forearm came up; bound in the carrying pose, it stands in front of the chest. The flaming sword is an orange tint here, with no fire effect.

![Original (top) and new draft (bottom): idle, two attack frames, defence, death](/images/castle-top-tier-01/archangel.png)

The Angels' DEFs contain three shooting groups. Neither unit shoots, so those groups reuse the melee attack frames.

## What is installed

| Unit | Version | Frames | PNGs |
| --- | --- | --- | --- |
| Cavalier | 0.17.1 | 81 | 342 |
| Angel | 0.18.1 | 94 | 412 |
| Archangel | 0.19.1 | 91 | 394 |
| Champion | 0.20.0 | 81 | 342 |

Frame counts and canvases come from each unit's original DEF, and the packaging check reports 0 errors and 0 warnings. With the new wings the mod is at 0.21.0. Every install backs up the files it replaces and has a checked rollback.

The 0.17.0 Cavalier loaded in a real battle, but that was before the camera fix. The four new versions have no battle screenshots yet: the test client hung during start-up this time.

Known issues: the Angel's wings open wider than the original's in the last death frame; the Archangel's glow is too orange overall; the Cavalier's idle lance is held level where the original holds it upright; the Champion's barding lacks the white hem.
