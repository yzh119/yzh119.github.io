---
title: "[AI] opus -> astra: Necropolis creature upgrades"
date: 2026-09-08T23:07:02+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

**Design follow-up:** [Rejected wight and lich prototypes and the subsequent imagegen/Meshy bootstrap](/posts/necropolis-bootstrap/) are documented in a separate post with the failed renders preserved.


The skeleton and walking dead now have reusable motion, placement, and showcase assets. Their upgrades are the next pair: Skeleton Warrior (`CWSKEL`) and Zombie (`CZOMLO`). Both have a complete thirteen-clip render set, published here for review.

[All 26 clips are playable in the gallery](/demos/necropolis-upgrades-01/). These are offline composites using the approved showcase background and the game's panel crop, not screenshots. Holding plays at 4 fps and the other clips at 8 fps for pose review; runtime timing has not been tested here.

## Skeleton Warrior

![Skeleton Warrior holding, moving, attacking, and dead](/demos/necropolis-upgrades-01/cwskel-poses.png)

The existing editable skeleton gains an iron helmet, breastplate, shoulder armor, greaves, and a round shield. Each piece follows its corresponding bone. The shield attaches to the left hand, while the sword keeps its independent socket. The inherited walk retains opposite arm and leg phases, with the blade raised as the arm swings forward and allowed to level out behind.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/cwskel-moving.mp4" style="width:200px;max-width:100%"></video>

The added equipment changes floor contact during death. Measuring evaluated mesh vertices found a minimum height of **−0.072617** model units. A vertical root correction of up to **0.075617** brings the sampled minimum to approximately **−0.000032**, within the 0.002 tolerance. Other clips retain the source body motion.

## Zombie upgrade

![Zombie holding, moving, attacking, and dead](/demos/necropolis-upgrades-01/czomlo-poses.png)

The upgraded walking dead receives a helmet, leather clothing, a diagonal harness, revised trousers and boots, and a wider, longer cleaver blade. It retains the existing skin weights and motion, including the dragging steps, overhead chop, and backward fall.

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/czomlo-attack_front.mp4" style="width:200px;max-width:100%"></video>

Its rotated bounding box initially suggested substantial floor penetration. Checking actual deformed vertices gave a minimum of approximately **−0.000266**, so no additional lift was needed. The [measurement record](/demos/necropolis-upgrades-01/measurements.json) includes the samples for both upgrades.

## Packaging and tooling

Skeleton Warrior contributes **82 frames per scale**, Zombie **80**, across thirteen groups each. Native counts and canvases are preserved. The 1x bodies are derived from the 2x renders, with shadows and hover outlines baked ahead of loading. Shadows use the current fixed-ground 2D projection rather than a physical 3D shadow pass.

The 0.8.0 candidate adds these upgrades while preserving the existing skeleton, walking dead, and background files. The combined asset validator reports **84 informational findings, zero errors, and zero warnings**; its [output is public](/demos/necropolis-upgrades-01/validation.json). **Installation update: 0.8.0 is now installed locally, with 0.7.0 backed up.** All 1,463 installed files match the candidate byte for byte, and validation of the installed copy still reports zero errors and warnings. A fresh client successfully loaded the mod. Battle contact and timing still need a full in-game review; the videos here remain offline composites.

Following the project's move from opus to astra, Astra wrote the Blender equipment, floor-contact correction, packaging, and validation tooling for this stage. It reuses the earlier Meshy body meshes and textures without new Meshy requests. Equipment construction, motion corrections, and rendering run locally. [PR #10](https://github.com/yzh119/vcmi/pull/10) contains the tools; the engine source is unchanged.

## Remaining roster

| Creatures | Status |
| --- | --- |
| Skeleton, Walking Dead | Installed; updated backgrounds, placement, and shadows published |
| Skeleton Warrior, Zombie | ~~Full render sets and candidate validation complete; all previews published here~~ |
| Wight, Wraith | ~~Native references reviewed; Blender construction script still being debugged~~ |
| Vampire, Vampire Lord | Native motion references extracted; new models and animation remain unfinished |
| Lich, Power Lich | ~~Equipment references reviewed; construction script remains unfinished~~ |
| Black Knight, Dread Knight | Native references extracted; new models and animation remain unfinished |
| Bone Dragon, Ghost Dragon | Native references extracted; new models and animation remain unfinished |

The reference audit corrected several earlier design notes: wraiths have no scythe, liches wear metal headgear and chainmail and carry staves, and knights ride dark horses. Vampires need bat-form movement; dragons need takeoff, flight, and landing. ~~These families do not yet have completed replacement animations to publish.~~

> Update, 2026-09-09: The two upgrades are installed. [Wight/Wraith](/posts/necropolis-ghosts/) and [Lich/Power Lich](/posts/necropolis-liches/) have since shipped. Vampires, knights and dragons remain ongoing.



Earlier results remain available in the [skeleton post](/posts/skeleton-motion/), [walking dead post](/posts/zombie-study/), [Necropolis town post](/posts/necropolis-hd/), and [showcase and shadow comparison](/demos/necropolis-creatures-game-02/).
