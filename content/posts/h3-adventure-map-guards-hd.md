---
title: "[AI] Adventure map: map guards"
date: 2026-09-10T08:10:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

A map guard cannot use one replacement still: a loop would flash back to the original artwork. This pass maps full creature idle cycles frame by frame onto adventure-map objects, while retaining the map object’s own shadows and foreground masks.

## Skeletons and zombies

Skeletons, Skeleton Warriors, Zombies and Zombie Lords received the first complete cycles. The comparisons are still images; the game uses the full frame sequence.

![Skeleton guards](/images/h3-environment-hd/animated-skeleton-compare.png)

![Zombie guards](/images/h3-environment-hd/animated-zombie-compare.png)

## Necropolis map guards

The work then expanded to Liches, Vampires, Wights and Wraiths, including their upgraded forms. The shared registration tool schedules a loop to the target object’s frame count without copying or changing its JSON interaction definitions.

![Necropolis map guards](/images/h3-environment-hd/map-guards-necropolis-compare.png)

This covers Necropolis adventure-map guards only; other town creatures will be handled in their own art passes. Assets are enabled in a local private mod and do not modify VCMI source.
## Workflow correction

<s>A map guard can be upgraded by mapping a generated still or 2D loop onto every target frame.</s> Map guards are animated creatures, even where an original resource appears as a single visible pose. Their body animation now comes only from a Blender scene with a rigged 3D model and rendered frame sequence. Original canvases, foreground masks and object metadata remain in place; a new Blender shadow sequence replaces the body shadow alongside the rendered body.

## Green Dragon: first non-Necropolis guard

The Green Dragon is the first guard outside Necropolis to use this corrected path. A source-guided Meshy bootstrap supplied editable geometry; Blender then supplied the rigged holding loop, 30 separate body frames and 30 matching shadow frames. The adapter fits those renders to the original 2×, 3× and 4× canvases without changing the object definition. The native loop keeps the dragon’s compact side-on silhouette; the rendered model adds readable scales, belly plates and wing membrane at HD resolution.

![Native and Blender Green Dragon loop samples](/images/h3-environment-hd/green-dragon-guard-compare.png)

The map guard article remains a category record: additional town creatures will be added here only after their full Blender animation passes are complete. Assets are enabled in a local private mod; only the reusable pipeline code is public, and no VCMI source is modified.
## Gold Dragon: separate model, matched upgrade silhouette

The Gold Dragon is not a recoloured Green Dragon. Its left-facing, single-wing composition required a separate source-guided Meshy model, then a Blender rig adjusted into the original compact semi-crouched guard stance. It has its own 30-frame body and shadow loop at each HD scale; the final 4× body boundary is within four pixels of the native top edge while retaining the source canvas and interaction layers.

![Native and Blender Gold Dragon loop samples](/images/h3-environment-hd/gold-dragon-guard-compare.png)
## Firebird: a rejected mesh and the repaired flight loop

<s>The first Firebird Meshy bootstrap was ready to rig.</s> Eight-view inspection found that its tail and wing feathers had become disconnected fragments, so it could not deform reliably and was rejected before installation. A second, denser concept produced continuous body, wing and tail geometry. Blender supplies a restrained 28-frame wing-tension loop with matching rendered shadows, fitted to the source canvas; the high vertical side profile retains the original Firebird’s map readability without the native loop’s one oversized lateral frame.

![Native and Blender Firebird loop samples](/images/h3-environment-hd/firebird-guard-compare.png)
## Unicorn: 30-frame grounded animal loop

Unicorn is installed from a separate Meshy mesh, Blender automatic quadruped weighting, and a restrained 30-frame breathing, neck and tail loop with 30 true 3D shadows. Although its import audit exposes separate construction components, full pose review showed no visible cracks across the motion; the model is accepted on rendered continuity rather than component count alone. A shared horizontal projection calibration restores the source’s broad four-leg footprint. At 4×, the first frame matches the native left, right and bottom bounds and differs by one pixel at the top.

![Native and Blender Unicorn loop samples](/images/h3-environment-hd/unicorn-guard-compare.png)

## Stone Golem: procedural fallback rejected

<s>The fragmented Meshy Stone Golem could be repaired by a simple procedural block rig.</s> The Blender-authored modules held together correctly under rigid controllers, but the resulting form read as a mechanical block robot rather than the original weathered stone guardian. It was rejected before installation. This validates the controlled fallback technically, but visual fidelity still decides acceptance.

## Basilisk: bootstrap rejected

<s>The first Basilisk Meshy mesh was ready for a low quadruped rig.</s> Its topology audit found hundreds of disconnected components, and side inspection also showed a body width that the standard ground-dragon camera could not frame reliably. It has not been animated or installed. The retry will begin with a topology-focused concept and a dedicated low-quadruped camera/rig.

<s>The topology-focused Basilisk retry produced a usable single connected mesh.</s> The simpler second concept reduced but did not solve fragmentation: its audit still found 226 components, including 220 small components. It remains unanimated and uninstalled.

## Black Dragon: 30-frame folded-wing loop

Black Dragon is installed from a separate Meshy mesh and a Blender continuous automatic-weight flying-dragon rig. Its 30 body frames and 30 true 3D shadow frames keep the folded violet-black wing, ivory horns and low tail intact through the loop. The first side-view render was narrower than the source silhouette, so every Blender-rendered frame received the same horizontal projection calibration before canvas fitting. At 4×, the first body frame matches the native left and right bounds exactly and differs by one pixel vertically.

![Native and Blender Black Dragon loop samples](/images/h3-environment-hd/black-dragon-guard-compare.png)

## Red Dragon: repaired 29-frame folded-wing loop

<s>The first semantic wing-weight pass was suitable for the Red Dragon.</s> It split at the wing root, so it was replaced with a continuous automatic-weight flying-dragon armature. The installed version has 29 Blender body frames and 29 matching 3D shadow frames. The map camera retains the native’s prominent single folded wing, while the loop uses only controlled breathing, neck, tail and wing-tension motion. At 4× the first frame matches the native vertical envelope and lands about ten pixels inside each horizontal edge; this preserves click and occlusion space without clipping the wing.

![Native and Blender Red Dragon loop samples](/images/h3-environment-hd/red-dragon-guard-compare.png)

## Red Dragon: rig pass rejected

<s>The first Red Dragon wing rig was ready for its 29-frame map loop.</s> Blender review found broken weight seams at the wing root and torso during the folded-wing pose. The imported mesh itself remains continuous, but that semantic wing-weighting method is unsuitable for it. It has not been installed; the next pass will use a continuous automatic-weight flying-dragon rig.

## Chaos Dragon: dedicated ground-dragon rig

Chaos Dragon is now installed as a separate Meshy mesh with a Blender ground-dragon armature. The first three-quarter map-camera pass compressed its width too much; a side-view pass and a broadened physical mesh restored the source silhouette. Its 29 body frames and 29 true 3D shadow frames use continuous automatic weights, with a restrained breathing, neck and tail loop. At 4×, the first frame’s body bounds exactly match the native `(79, 51)–(245, 256)` canvas envelope.

![Native and Blender Chaos Dragon loop samples](/images/h3-environment-hd/chaos-dragon-guard-compare.png)

## Azure Dragon: repaired ground-dragon loop

<s>The first Azure Dragon used a flying-dragon armature.</s> Its semantic forelimb weighting split during the loop and was rejected. The installed pass uses the dedicated continuous automatic-weight ground-dragon rig proven on Chaos Dragon. All 37 Blender body frames and 37 true 3D shadows preserve a compact breath, neck and tail loop without tearing. A shared vertical projection calibration aligns the first 4× frame’s top and bottom bounds with the native canvas; the right edge differs by one pixel.

![Native and Blender Azure Dragon loop samples](/images/h3-environment-hd/azure-dragon-guard-compare.png)

## Azure Dragon: rejected during rig validation

<s>The first Azure Dragon Meshy bootstrap was ready to install after a 37-frame Blender render.</s> Map-canvas comparison showed that the first fit was too narrow and dark. A broadened, brighter second fit corrected those proportions, but animation review exposed unstable forelimb weights that split the silhouette during the loop. It remains uninstalled. The next pass will use a dedicated low, wingless quadruped rig rather than the flying-dragon armature.

## Fairy Dragon: compact 33-frame loop

The Fairy Dragon has a separate source-guided Meshy mesh and Blender rig. The first Blender fit was too tall and narrow for the original’s curled map silhouette, so it was rerendered with a compact proportion pass before installation. The final 33 body frames and 33 matching shadow frames preserve the native canvas and land within four pixels of both horizontal body bounds at 4×.

![Native and Blender Fairy Dragon loop samples](/images/h3-environment-hd/fairy-dragon-guard-compare.png)
