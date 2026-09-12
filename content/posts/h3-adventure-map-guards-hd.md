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
## Azure Dragon: rejected during rig validation

<s>The first Azure Dragon Meshy bootstrap was ready to install after a 37-frame Blender render.</s> Map-canvas comparison showed that the first fit was too narrow and dark. A broadened, brighter second fit corrected those proportions, but animation review exposed unstable forelimb weights that split the silhouette during the loop. It remains uninstalled. The next pass will use a dedicated low, wingless quadruped rig rather than the flying-dragon armature.

## Fairy Dragon: compact 33-frame loop

The Fairy Dragon has a separate source-guided Meshy mesh and Blender rig. The first Blender fit was too tall and narrow for the original’s curled map silhouette, so it was rerendered with a compact proportion pass before installation. The final 33 body frames and 33 matching shadow frames preserve the native canvas and land within four pixels of both horizontal body bounds at 4×.

![Native and Blender Fairy Dragon loop samples](/images/h3-environment-hd/fairy-dragon-guard-compare.png)
