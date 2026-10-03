---
title: "[AI] 3D battlefield experiments"
date: 2026-09-21T01:05:15+00:00
lastmod: 2026-10-03T05:49:52+00:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "The browser now uses native VCMI combat for 28 Castle/Necropolis creatures; the TypeScript simulator is removed. Heroes, combat spells and custom-creature imports through isolated VCMI mods are connected; WASM remains pending."
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

Six native integration tests cover the full roster, double-wide deployment, movement, waiting, defense, double shots, melee retaliation and extra strikes, stale or illegal requests, victory cleanup and a fresh battle. Seven browser tests passed, including real native shooting with artwork deliberately unavailable, impact timing, exact agreement between the final displayed state and the native response, defense/reset, seven-slot army editing, complete-town production presets, canvas consistency, and optional local GLB bone animation. Public CI has no game resources and checks the interface and missing-art scene; actual combat tests require a locally prepared engine and resource profile.

Each army now has seven clickable numbered slots. Empty slots accept a creature and count directly; removing a stack preserves the gap, and battle creation/reset retain its slot ID. The blue army in the capture occupies only slots 1 and 7, which remain identifiable in native state. Overview and close-up use the same canvas rectangle; overview restores the selected backdrop, including after window resizing. See the [seven-slot army and canvas fix](https://github.com/yzh119/h3-battle-lab/commit/fb0d9a3).

The **十周城镇产出** button fills all fourteen army slots with ten weeks of complete-town production. Upgraded creatures are selected initially; clearing the checkbox chooses their basic forms. Complete towns include the castle and faction growth buildings, excluding the Grail, external dwellings, hero/artifact bonuses and random-week effects. VCMI computes weekly growth through `CGTownInstance::getGrowthInfo` and returns the ten-week counts; the GUI has no growth formula. By tier, Castle supplies **280, 180, 170, 80, 60, 40, 20**, and Necropolis **300, 160, 140, 80, 60, 40, 20**. Slots remain editable before battle, and reset restores the configured armies. Native and browser tests verify the fourteen-stack creation and reset. See the [complete-town preset commit](https://github.com/yzh119/h3-battle-lab/commit/e9ade93).

Either army can now use **VCMI battle AI**, and a one-step button lets us inspect one decision at a time. The native bridge calls the compiled `BattleEvaluator::selectStackAction` with two simulation turns, then executes the chosen action through the same server battle processor. TypeScript sends requests and plays the resulting events. Real native tests verified AI shooting and a completed battle; browser tests verified single-step and automatic turns for both sides. ~~This stack-action interface does not yet include hero spell, retreat or surrender decisions.~~ (October 3 update: hero spell selection now uses the same compiled evaluator; retreat and surrender remain pending.)

Hovering a battlefield model or an occupied army slot shows attack, defense, damage, speed, health, count and ammunition. Before battle these come from native creature definitions; during battle they come from the current stack state, including the defense value after defending. Army previews now request native deployment: the fourteen-stack preset keeps the same hexes when battle begins. The hex grid is visible by default with stronger lines. See the [VCMI AI, hover attributes and deployment correction commit](https://github.com/yzh119/h3-battle-lab/commit/260ecb8).

![Seven-slot army bars with real native battle state; actual browser capture using procedural models and scenery](/images/battle-lab-roster/seven-slots-native.png)

Each browser session owns a native process and writable profile, sharing only the prepared game data. Without a configured engine, models and armies can still be inspected and edited, while combat is disabled. The interface currently runs with the local Vite development server; static hosting and the preview server do not launch an engine. ~~Existing models load on demand and missing models use geometric stand-ins. A 28-creature selector does not mean all 28 artworks are integrated.~~ (2026-10-03 update: all 28 local Castle and Necropolis models are now integrated. Each passed actual browser loading and checks for changing skeletal transforms. All fourteen models also loaded in the upgraded ten-week army preset. The public checkout continues to use procedural stand-ins.)

The exporter also handles actions that use different skeletons or scene roots, including vampire bat transformations and cavalry death scenes. Each scene retains its geometry, skeleton and transforms, and animation switches the visible form. Model sizing skips inactive scenes at zero scale, avoiding invalid skinned bounding boxes in Three.js. Original Blender files were preserved. Loading and animation checks do not establish appearance acceptance. See the [alternate skeleton loading fix](https://github.com/yzh119/h3-battle-lab/commit/9de5333).

## Heroes and combat magic, October 3, 2026

Either army can now enable a custom hero with attack, defense, spell power, knowledge, up to eight original secondary skills and their mastery levels, and an explicit spellbook. These heroes have no specialties or combat artifacts. VCMI supplies army bonuses, skill effects, spell mastery, mana capacity and spell costs.

The spellbook displays **60 original combat spells**, current costs and availability, and legal targets supplied by the engine. Select a spell and target, then confirm the cast. Single targets can also be chosen on the battlefield; Teleport and other two-target spells use an ordered list. VCMI enforces one hero cast per side per round; casting normally leaves the same stack active. Native state also determines immunity, mass effects, resurrection, summons and the controller of hypnotized stacks. Summons and clones become additional rendered units, using procedural models when artwork is unavailable.

**Thirteen native integration tests and eleven browser tests passed.** Native checks cover Magic Arrow damage/cost/cooldown, expert mass Haste, two-target Teleport, Clone, water-elemental summoning, Resurrection, Animate Dead, control after Hypnotize and AI spell selection. Browser checks cast through the actual spellbook and verify damage, mana and summoned-unit rendering. Exposing sixty spells does not establish complete verification of all sixty. The fixture has no siege, so Earthquake remains unavailable. See the [native heroes, skills and spellcasting commit](https://github.com/yzh119/h3-battle-lab/commit/46acd5e).

Artwork now loads in the background. Army edits, complete-town presets and reset take effect immediately with procedural models; failed loads retain the chosen creature. A Cavalier loading test had taken about 55 seconds. Alternate-scene exports carried repeated geometry and textures; exact binary payloads and texture sources are now shared while each scene keeps its skeleton and animations. Cavalier shrank from about **178 MiB to 37 MiB**, and its loading/animation test took about **five seconds** in this run. These timings describe one local browser, rather than performance on every device. Original Blender scenes remain untouched, and previous exports are backed up. See the [scene resource sharing commit](https://github.com/yzh119/h3-battle-lab/commit/37dca55).

The wrapper and adaptation code live in this repository, preserving upstream VCMI sources. Future rule adaptations should use mods/plugins where supported; any necessary source changes will be tracked here as reviewable patches with reproducible builds.

## Archangel Resurrection, October 3, 2026

The **战斗魔法与兵种能力** panel now distinguishes hero magic from creature abilities. In the original Castle/Necropolis roster, Archangel Resurrection requires an active target choice. Native state supplies the available ability, remaining casts and current availability; native target queries include eligible dead stacks. Choose a target in the list or on the battlefield, then confirm VCMI's `MONSTER_SPELL` action. It consumes the creature's action and cast rather than hero mana or the hero's per-round spell allowance.

A native test had one Archangel restore ten dead Pikemen to **ten creatures and 100 HP**, reducing remaining casts from **one to zero**. Later rounds did not replenish the cast. Enemy/undead targets, noncasters and repeat use were rejected without state changes. The browser exercised the actual ability menu and displayed the restored stack and native spell event. **Nineteen native integration tests and thirteen browser tests passed.** This scenario does not establish complete creature/spell parity, and casting animation still needs refinement. See the [active creature ability integration commit](https://github.com/yzh119/h3-battle-lab/commit/b0e4a1f).

## Custom creatures, October 3, 2026

The common creature JSON can now join native battles. Import a file under **自定义兵种**, select its creatures in the army editor and set their counts. The format includes a version, unique author ID, label, display group, base statistics and mechanisms. Artwork uses the same author ID; missing GLBs use procedural models. The [public format guide](https://github.com/yzh119/h3-battle-lab/blob/main/docs/custom-creatures.md) links the Schema and example pack.

VCMI does not allow new creature IDs to be registered after initialization. Import therefore validates the entire pack, generates a standard `battle-lab-custom` mod, prepares an isolated resource profile and starts a candidate engine. The session changes only after successful native initialization; failures preserve the previous process. Later files append to the current page's pack, with duplicate IDs rejected. Reset and reconnect preserve imported definitions; a page reload returns to the base profile. Custom mode is explicitly labeled, and original creature IDs and statistics remain protected.

Eight mechanisms currently map to native bonuses: flight, additional attacks, regeneration, retaliation counts, blocked retaliation, shooters, undead and death cloud. Compiled VCMI determines attack ranges, cloud victims/casualties, regeneration and retaliation limits. The converter produces configuration only; TypeScript has no mechanism interpreter. The authoring `faction` field currently groups the selector, while imported creatures belong to the native neutral faction. Regeneration follows VCMI's current first-activation processing each round. These limits are documented; further behavior still requires native bonuses or engine scripts.

**Seventeen native integration tests and twelve browser tests passed.** New native checks cover custom statistics/flight, melee extra attacks and blocked retaliation, double shots, death-cloud damage to adjacent living allies and immunity for undead neighbors, healing only the injured top creature, and zero/two retaliation limits. Browser checks import a creature, start combat, request native AI, reset, reject duplicate imports while retaining the session, reconnect and start another battle. Reconnection also preserves hero settings. Three resource-free converter tests cover whole-pack validation, protected original IDs and profile isolation. See the [custom-creature mod integration commit](https://github.com/yzh119/h3-battle-lab/commit/9707150).

~~Hero/skill/spell commands, configurable terrain and obstacles, custom-creature conversion, complete ability verification and WASM remain pending. The current fixture uses fixed sand terrain without obstacles or fighting heroes.~~ (October 3 update: custom heroes, skills and spell commands are connected. Named heroes, specialties, artifacts, configurable terrain/obstacles, ~~custom-creature conversion~~, complete rule verification and WASM remain pending. The fixture still uses fixed sand without initial obstacles; spell-created obstacles are engine-managed.) ~~The common creature JSON can be validated in the sidebar but cannot yet join a battle;~~ (October 3 update: standard mod conversion and native battle imports are now connected, as described above.) its mechanics will execute only in the engine or engine scripts. WASM should later implement the same interface. VCMI-Gym is not a dependency. Installed rule mods are excluded, but the `base-reference` profile does not certify original H3 parity. Differences still need individual checks and engine-side corrections.

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
