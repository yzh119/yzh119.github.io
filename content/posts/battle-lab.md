---
title: "[AI] 3D battlefield experiments"
date: 2026-09-21T01:05:15+00:00
lastmod: 2026-09-21T01:05:15+00:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Six local creature types, editable armies and existing HD backgrounds in a Three.js battlefield, with realtime captures."
tags: ["vcmi", "ai", "threejs", "graphics", "castle"]
---

[H3 Battle Lab](https://github.com/yzh119/h3-battle-lab) is a separate Three.js prototype for inspecting the existing creature models in a realtime battlefield. The camera can move closer and orbit, while animated models cast realtime shadows. The local setup also reuses our earlier HD battlefield backgrounds.

## Choosing armies

The local catalogue now contains Skeleton, Zombie, Wight, Wraith, Swordsman and Crusader. Each has idle, walk, attack, hit and death clips. Both Castle creatures remain art drafts, and the selector labels them accordingly. Loading a model in this viewer does not establish appearance acceptance.

The army editor adds a chosen creature to either team, with up to seven units per side. It can also replace or remove the selected unit. The top menu selects units on either team. Reset restores the configured composition and deployment at full health for the current page session; reloading starts from the default pair.

![Six creature types on the existing HD grass background; actual 1800 × 1200 browser capture](/images/battle-lab-roster/roster-overview.png)

Background mode supports 1–3× magnification, with the image crop and model projection changing together. The image remains flat: it supplies no terrain parallax or geometry-based occlusion. Close-up mode switches to an orbitable scene whose trees and ground are still procedural placeholders.

![Swordsman and Crusader drafts in realtime; browser capture, not an offline Blender render](/images/battle-lab-roster/roster-castle.png)

## Reusing the art pipeline

Meshy supplied the existing source models and suitable rigs. Astra authors motion, repairs, export tools and viewer code. This revision reused those assets without new Meshy generation requests. Five Blender clips are packed into one GLB per creature; repeated instances share the download but keep separate skeletons and animation mixers.

Models load on demand. A failed replacement leaves the previous army intact. The public repository contains code only; models, textures and complete resource packs stay local. Without local art, the interface explicitly identifies its geometric stand-ins. The images here are demonstrations.

## Current limits

This is a rendering and interaction prototype with hex pathfinding, eight-step movement and fixed 25-point melee damage. It does not implement the full Heroes III combat rules or consume VCMI battle state. Blender-to-realtime material fidelity still needs review. Castle likeness and cloth work remain tracked in the [modeling article](/posts/castle-halberdier-bootstrap/).

The build, three logic tests and five browser tests passed. Coverage includes absent art, model loading, actual bone changes, army editing, team capacity, reset and failed loads. The implementation is in the [army-editor commit](https://github.com/yzh119/h3-battle-lab/commit/2e187a2).
