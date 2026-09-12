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
