---
title: "[AI] 3D battlefield experiments"
date: 2026-09-21T01:05:15+00:00
lastmod: 2026-10-03T02:47:20+00:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "The browser now uses native VCMI combat for 28 Castle/Necropolis creatures; the TypeScript simulator is removed. Custom packs and WASM remain pending."
tags: ["vcmi", "ai", "threejs", "graphics", "castle"]
---

We want the existing 3D models in a battle where both armies can be selected and commanded under original H3 rules. [H3 Battle Lab](https://github.com/yzh119/h3-battle-lab) handles realtime presentation. Compiled VCMI now computes combat; TypeScript retains the interface, rendering and event playback.

## VCMI integration progress — October 3, 2026

The TypeScript demonstration acquired turns, retaliation, shooting and some creature abilities incrementally. Complete battles also need heroes, skills, spells, morale, luck, double-wide footprints and siege. Maintaining a second implementation would require repeated engine comparisons, so we are building an owned VCMI wrapper. The interface will send action intentions, display legal options from the engine and animate its results. The common custom-creature format will translate into VCMI creature, bonus or script configuration; new mechanics belong in the engine.

A C++ geometry check exposed an offset-row mismatch in the viewer. After correction, all 187 availability flags, 165 playable neighbor sets and **34,969 pairwise distances** agree with the native reference. The two outer columns are reserved for heroes and cannot hold creature stacks. This verifies coordinates, not complete combat parity. See the [geometry verification and migration commit](https://github.com/yzh119/h3-battle-lab/commit/22cd091).

We then initialized the native library with an owned resource profile. It contains an explicit original-LOD allowlist, engine configuration, scripts and essential files. Active modules are restricted to `core` and `vcmi`; the installed art packs, balance mods and user settings are excluded. Initialization returned the definitions of all **28 Castle and Necropolis creatures**, including upgrades. This does not mean that all 28 models are integrated into the browser.

The real server battle processor now executes a fixed shooting scenario: twenty Marksmen fire twice at twenty Walking Dead with seed 1337. The attacks deal **55 and 54 damage**. Ammunition falls from 24 to 22; the target falls from 300 to 191 HP, leaving thirteen creatures, and becomes active next. VCMI computes the damage, ammunition and turn flow. Captured native messages include authoritative before/after state; the verifier checks casualties, health and state continuity. A separate run produces identical output. An in-memory SoD fixture supplies real game state without launching the graphical client. The [isolated profile and server battle commit](https://github.com/yzh119/h3-battle-lab/commit/33fa17a) includes reproduction commands.

The browser now connects to a general native interface. Both armies can contain up to seven stacks chosen from all 28 original Castle/Necropolis creatures. VCMI supplies deployment, double-wide footprints, legal movement and attack positions, the turn queue, damage, health, counts and ammunition. The old `battle.ts` and frontend base combat-stat table have been removed. Three.js animates native movement, strikes and retaliation, updating displayed casualties at impact. See the [browser integration commit](https://github.com/yzh119/h3-battle-lab/commit/660d381).

A fixture check found that the army containers still occupied the upstream test map’s default grass while the battlefield was sand, allowing Castle stacks to inherit a native-terrain bonus. Both are now sand. Every creature in the 28-unit roster has its base engine speed in battle. The fix changes only the privately copied test fixture, preserving upstream VCMI files; see the [terrain correction commit](https://github.com/yzh119/h3-battle-lab/commit/ba8608e). The 55/54 damage measurements above belong to the earlier standalone smoke-test version.

Four native integration tests cover the full roster, double-wide deployment, movement, waiting, defense, double shots, melee retaliation and extra strikes, stale or illegal requests, victory cleanup and a fresh battle. Four browser tests passed, including real native shooting with artwork deliberately unavailable, impact timing, exact agreement between the final displayed state and the native response, defense/reset, and optional local GLB bone animation. Public CI has no game resources and checks the interface and missing-art scene; actual combat tests require a locally prepared engine and resource profile.

Each browser session owns a native process and writable profile, sharing only the prepared game data. Without a configured engine, models and armies can still be inspected and edited, while combat is disabled. The interface currently runs with the local Vite development server; static hosting and the preview server do not launch an engine. Existing models load on demand and missing models use geometric stand-ins. A 28-creature selector does not mean all 28 artworks are integrated.

Hero/skill/spell commands, configurable terrain and obstacles, custom-creature conversion, complete ability verification and WASM remain pending. The current fixture uses fixed sand terrain without obstacles or fighting heroes. The common creature JSON can be validated in the sidebar but cannot yet join a battle; its mechanics will execute only in the engine or engine scripts. WASM should later implement the same interface. VCMI-Gym is not a dependency. Installed rule mods are excluded, but the `base-reference` profile does not certify original H3 parity. Differences still need individual checks and engine-side corrections.

Codex wrote this round's native wrapper and verification code. Existing models and animations were reused without overwriting source files. The public repository still contains code only; full game resources, models and textures stay local. The previous army-editor images and notes are preserved below.

## October 3, 2026 native smoke-test record

~~This is still a separate native smoke test. The browser uses the transitional TypeScript demonstration with twelve base creature definitions. The local Archer export now has a real shooting clip; Marksman art integration remains pending. Next, the wrapper needs arbitrary army requests and ordered movement, strikes, retaliation, round and spell events for Three.js playback. Once the native interface works, WASM should implement the same boundary. VCMI-Gym is reference material; this test does not depend on it. Original H3 behavior remains the target, and differences from VCMI still require verification and engine-side handling.~~

(October 3 update: general army requests and browser event playback now work. Heroes, spells, custom packs and WASM remain pending.)

## September 21, 2026 army-editor record

These descriptions and captures refer to that version. The current engine status is described above.

[H3 Battle Lab](https://github.com/yzh119/h3-battle-lab) is a separate Three.js prototype for inspecting the existing creature models in a realtime battlefield. The camera can move closer and orbit, while animated models cast realtime shadows. The local setup also reuses our earlier HD battlefield backgrounds.

### Choosing armies

The local catalogue now contains Skeleton, Zombie, Wight, Wraith, Swordsman and Crusader. Each has idle, walk, attack, hit and death clips. Both Castle creatures remain art drafts, and the selector labels them accordingly. Loading a model in this viewer does not establish appearance acceptance.

The army editor adds a chosen creature to either team, with up to seven units per side. It can also replace or remove the selected unit. The top menu selects units on either team. Reset restores the configured composition and deployment at full health for the current page session; reloading starts from the default pair.

![Six creature types on the existing HD grass background; actual 1800 × 1200 browser capture](/images/battle-lab-roster/roster-overview.png)

Background mode supports 1–3× magnification, with the image crop and model projection changing together. The image remains flat: it supplies no terrain parallax or geometry-based occlusion. Close-up mode switches to an orbitable scene whose trees and ground are still procedural placeholders.

![Swordsman and Crusader drafts in realtime; browser capture, not an offline Blender render](/images/battle-lab-roster/roster-castle.png)

### Reusing the art pipeline

Meshy supplied the existing source models and suitable rigs. Astra authors motion, repairs, export tools and viewer code. This revision reused those assets without new Meshy generation requests. Five Blender clips are packed into one GLB per creature; repeated instances share the download but keep separate skeletons and animation mixers.

Models load on demand. A failed replacement leaves the previous army intact. The public repository contains code only; models, textures and complete resource packs stay local. Without local art, the interface explicitly identifies its geometric stand-ins. The images here are demonstrations.

### Limits at that revision

~~This is a rendering and interaction prototype with hex pathfinding, eight-step movement and fixed 25-point melee damage. It does not implement the full Heroes III combat rules or consume VCMI battle state.~~ (October 3: movement, damage and turn demonstrations have since changed. The browser now uses native VCMI and the TypeScript simulator is removed; full original-game parity remains unverified.) Blender-to-realtime material fidelity still needs review. Castle likeness and cloth work remain tracked in the [modeling article](/posts/castle-halberdier-bootstrap/).

The build, three logic tests and five browser tests passed. Coverage includes absent art, model loading, actual bone changes, army editing, team capacity, reset and failed loads. The implementation is in the [army-editor commit](https://github.com/yzh119/h3-battle-lab/commit/2e187a2).
