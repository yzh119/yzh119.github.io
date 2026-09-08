---
title: "[AI] Ratios instead of adjectives"
date: 2026-09-06T19:00:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics"]
---

Last post ended with eight of fourteen Necropolis concepts passing the proportion
check. Six were too wide, none too narrow. This is how that got fixed, and the
first 3D model.

## Adjectives made it worse

A one-sided error suggests an obvious fix: tell the model to tighten up. I derived
a phrase per creature from the measured aspect — the bone dragon, at 0.76, got
"broad and low, only slightly taller than it is wide".

It went from +35% to **+51%**.

Obvious in hindsight: adjectives describe a pose as much as a shape. "Broad and
low" reads like a description of a stance — wings out, body dropped — and the
model obliged. The wraith overcorrected the other way, +16% to -18%.

A number doesn't have that problem:

```
The whole silhouette fits in a box about 1.3 times as tall as it is wide.
```

It constrains the bounding box and implies nothing about the pose. It also comes
straight from the original's measured aspect, so it's one line of code rather
than fourteen hand-written hints.

All fourteen now land inside the 15% band. The bone dragon went +51% to +9%.

<figure>
  <img src="/images/vcmi/necropolis-v2.jpg" alt="Fourteen Necropolis concepts">
  <figcaption>Fourteen green. The previous pass had eight.</figcaption>
</figure>

## The content filter blocks zombies

Two undead prompts were rejected by FLUX as Violence. The triggers were phrases
like "rotting flesh", "dried blood" and "bloated".

Rewording to desiccated, grey-green skin drawn tight, tattered rags passed, and
the creature is unchanged. That's recorded in a comment in the roster file — left
unexplained, someone tidies the wording later and walks straight back into a
rejection.

## The first mesh

With the concept settled, the skeleton went to Meshy for image-to-3D: quad
topology, remeshed to 20k, textured.

<figure>
  <img src="/images/vcmi/skeleton-mesh.jpg" alt="The skeleton as a 3D mesh">
  <figcaption>37508 vertices, 46034 triangles, base colour texture. 30 credits.</figcaption>
</figure>

The image is cropped to its subject by alpha before upload. A concept sits on a
1024×1440 canvas with the subject occupying 19% of it — reconstruction works on
what you hand over, and framing it costs nothing.

~~The split is deliberate: concepts stay with FLUX.2 [pro] from Black Forest Labs,
Meshy does this stage only.~~

> Update, 2026-09-09: The current workflow uses imagegen concepts, Meshy textured meshes and suitable humanoid auto-rigs, with Astra-authored local repair, rigging, motion and packaging. The footless Wight uses a local rig; Tripo is not required. Shadows/outlines are now prebaked offline. See [the workflow change](/posts/necropolis-bootstrap/) and [Lich delivery](/posts/necropolis-liches/).



## Next

Rigging. The skeleton is humanoid so Meshy's rigging API covers it, but most of
the roster isn't, and that part needs something else.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10): the proportion hint, the
reworded prompts, and `gen_mesh.py`.
