---
title: "[AI] Milky Frog's laughing attack"
date: 2026-10-05T15:17:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Milky Frog in VCMI and Three.js: a double-wide laughing attacker, with the failed eye and mouth revisions documented."
tags: ["vcmi", "ai", "graphics", "astra", "meshy", "blender"]
---

The character reference comes from [Milky Frog](https://milkyfrog.com/). This local neutral creature occupies two hexes and attacks by holding its belly and laughing, hitting enemies adjacent to either occupied hex. Revision 34 is installed in both VCMI and the Three.js battle lab. Its appearance remains a production draft; successful integration does not establish the user's approval of its likeness.

![Idle pose, an actual high-resolution Blender still rather than concept art](/images/milky-frog-01/idle-hd.png)

![Laughing pose, an actual high-resolution Blender still](/images/milky-frog-01/laugh-hd.png)

## Repairing the face

The first model used the standing reference. Opening its mouth locally produced a frightening expression, and the user subsequently pointed out that both the eyes and mouth still looked wrong. A second Meshy job used a laughing frame from the reference video. It produced a better mouth outline, but fused the teeth into a white sheet and misread the lifted rear foot as a tail-like projection.

Astra wrote Blender tools to remove the original teeth and mouth interior, rebuild individual upper teeth, the cavity and tongue, and connect the resting face to the laugh through a shape key. Compressing the inherited dense facial mesh into a closed mouth created cheek and lip folds. Rebuilding that part of the topology and smoothing each expression separately removed the large folds.

![Rejected revision 30: protruding eyeballs and an open resting mouth](/images/milky-frog-01/rejected-idle.png)

![Rejected revision 30 laugh: teeth sitting outside the upper lip](/images/milky-frog-01/rejected-laugh.png)

Pushing the eyes into the face then hid part of the pupils. The current eyes use shallow surfaces fitted to the head, the resting mouth is a thin slit, and the teeth sit inside the revised upper lip. Intermediate frames exposed another problem: the smile-eye curves floated in front of the face and the teeth appeared too late. Revision 34 moves those curves with the facial morph and makes the teeth follow the closing lip.

![An intermediate mouth-opening pose, an actual high-resolution Blender still](/images/milky-frog-01/transition-hd.png)

Meshy supplied the textured base meshes. Astra handled local reconstruction, the skeleton and foot IK, motion, export and integration tools. Meshy remains part of this workflow; the two jobs used 30 credits each.

## Running in both clients

Three.js plays a skinned GLB with facial morphs and seven clips: idle, walk, laughing attack, hit, defend, death and victory. Selecting the creature loads its model and two-hex footprint, with picking bounds sized to its larger body. Idle, laugh and walk were inspected in the actual browser without page errors.

![The laughing animation running in the Three.js battle lab](/images/milky-frog-01/three-laugh.png)

VCMI receives frames rendered from the same 3D scenes: 137 unique battle frames at 1× and 2×, with directional and group attacks sharing the laugh. The local mod includes fixed-ground shadows, idle selection outlines, creature icons and an adventure-map animation derived from the 3D idle. It makes no VCMI source changes and does not replace the Castle or Necropolis creatures.

![The laughing attack in an actual VCMI test battle](/images/milky-frog-01/vcmi-laugh.png)

The attributes match an ordinary Hydra: 175 health, 16 attack, 18 defense, 25–45 damage and speed 5, with adjacent attacks and no retaliation. VCMI computes damage. Native tests cover enemies beside the front and rear hexes and a shared neighbor: each is hit once, while allies and distant units are spared. In the game test, six Milky Frogs eliminated two adjacent stacks of twenty Zombies in one laugh. The combat log recorded 600 actual damage, and the battle completed normally.

The local test map is `milky-frog-check.vmap`. In the battle lab, select “奶蛙” and use the attack preview to see the laugh. Models and the complete mod remain local. The public [battle lab repository](https://github.com/yzh119/h3-battle-lab) contains the code for custom double-wide units, the adjacent-attack mechanism and local creature-pack loading.
