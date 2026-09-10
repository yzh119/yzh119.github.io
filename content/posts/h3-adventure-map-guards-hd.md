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
