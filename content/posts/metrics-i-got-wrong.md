---
title: "[AI] Art format validation"
date: 2026-09-06T18:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "testing", "ai"]
lastmod: 2026-09-09T05:48:54+08:00
---

> This article records the implementation and measurements at its publication stage. Versions, costs and check counts belong to that stage. See [Vampire delivery](/posts/necropolis-vampires/) for the subsequent installation and [the standalone tools](/posts/h3-art-tools/) for maintained commands.

The [previous post](/posts/h3-engine-constraints/) worked out what Heroes III's
engine requires and how to read its archives. This is what happened next: I wrote
two checks, felt good about both, and both handed me confident, wrong numbers.

## First: anchor drift

The validator catches things the engine won't report but the screen will. One
check I was pleased with: measure the alpha bounding box per frame and warn if
the creature wanders inside its canvas, because that reads as sliding.

Then I pointed it at Heroes III's own art. Eight warnings.

```
warning  1x: group 5 (DEATH) drifts -- ground line 9.0px, centre 23.0px
warning  1x: group 12 (ATTACK_FRONT) drifts -- ground line 3.0px, centre 50.5px
```

The original skeleton isn't broken. My thresholds were.

The twelve-pixel limit on action groups was a number I made up. But a lunge
legitimately moves the ground line, and a sword swing drags the bounding-box
centre well outside the body — `ATTACK_FRONT` alone travels 50px of centre. There
is no defensible absolute value here, so I dropped the threshold and now report
the numbers for comparison against the original.

Idle groups shouldn't have been judged on centre at all. `MOUSEON` raises its
sword from horizontal to vertical: the centre shifts 9px while **the feet never
move a pixel**. Idle is judged by the ground line alone now.

After both fixes the original scores zero errors and zero warnings, and every
synthetic fault still fires.

## Second: silhouette overlap

For the concept stage I built another gate: scale a candidate to in-game size,
extract its silhouette, score overlap against the original. 70% reads as the same
unit, under 50% won't be recognised.

It scored the first concept at 31%. Three things wrong with that number.

**The image was opaque.** Concept art from an image model isn't a cutout, so the
"silhouette" was the entire rectangle.

**Then, keying the backdrop by flood fill from the border filled in the negative
space the character encloses** — between the legs, under a sword held across the
body. Those gaps are exactly what a silhouette-first design lives on. Global
colour keying fixed it, which is also why the generator now insists on a chroma
backdrop.

**The third problem was the metric.** A free-pose concept was being compared
against one specific animation frame; facing alone can halve the score. Overlap
is simply the wrong measurement at this stage — a perfect concept would still
fail.

The gate is proportion now: width-to-height, normalised for height. Pose
independent, and it maps directly onto whether the creature occupies its hex the
way the original does. Overlap is still reported, best of both facings, marked
indicative — it becomes the real test later, when rendered frames are compared
against the frame they replace.

First skeleton concept: 51% too wide. After tightening the stance in the prompt:
14%, inside the band.

<figure>
  <img src="/images/vcmi/readability.jpg" alt="A concept checked at in-game size against the original silhouette">
  <figcaption>The corrected check. Left to right: candidate at 1x, 2x, 4x, its silhouette at in-game size, and the original's. The 1x tile is what players see.</figcaption>
</figure>

## Then the whole Necropolis roster

With a metric worth trusting, all fourteen Necropolis creatures in one batch.
Front views at 1024x1440, generated with FLUX.2 [pro] from [Black Forest Labs](https://bfl.ai) — 4.5 credits each, 63 in total, about 63 cents.

Proportions are measured per creature, because they aren't close: wight 0.33,
liches 0.41, humanoids 0.45–0.53, dragons 0.76, mounted knights 0.81–0.84. One
faction-wide number would pass a wight shaped like a knight.

Eight of fourteen made it.

<figure>
  <img src="/images/vcmi/necropolis.jpg" alt="Fourteen Necropolis concepts with proportion scores">
  <figcaption>All fourteen, front views. Green means proportion is inside the 15% band; red means it isn't.</figcaption>
</figure>

The interesting part: **all six failures are too wide, none too narrow**. That
isn't noise, it's a bias. Image models like to give a character room — planted
stance, arms out, wings open — and Heroes III's creatures are compact because
they have to sit on a hex. "Compact upright framing" in the prompt wasn't enough
weight against it.

The bias is one-sided, so it's clear which way to correct it.

## Same lesson twice

Two checks, two rounds of feeling good about them, two sets of confident wrong
numbers. Both fixed the same way: **run it against data whose answer you already
know.**

A metric needs to be run against data whose answer you already know, or you
don't know what it measures. The original art was sitting right there.

Code: the preview tool and the drift-check calibration in
[PR #6](https://github.com/yzh119/vcmi/pull/6), the concept gate and the batch
generation in [PR #10](https://github.com/yzh119/vcmi/pull/10).

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

The [previous post](/posts/h3-engine-constraints/) worked out what Heroes III's
engine requires and how to read its archives. This is what happened next: I wrote
two checks, felt good about both, and both handed me confident, wrong numbers.

## First: anchor drift

The validator catches things the engine won't report but the screen will. One
check I was pleased with: measure the alpha bounding box per frame and warn if
the creature wanders inside its canvas, because that reads as sliding.

Then I pointed it at Heroes III's own art. Eight warnings.

```
warning  1x: group 5 (DEATH) drifts -- ground line 9.0px, centre 23.0px
warning  1x: group 12 (ATTACK_FRONT) drifts -- ground line 3.0px, centre 50.5px
```

The original skeleton isn't broken. My thresholds were.

The twelve-pixel limit on action groups was a number I made up. But a lunge
legitimately moves the ground line, and a sword swing drags the bounding-box
centre well outside the body — `ATTACK_FRONT` alone travels 50px of centre. There
is no defensible absolute value here, so I dropped the threshold and now report
the numbers for comparison against the original.

Idle groups shouldn't have been judged on centre at all. `MOUSEON` raises its
sword from horizontal to vertical: the centre shifts 9px while **the feet never
move a pixel**. Idle is judged by the ground line alone now.

After both fixes the original scores zero errors and zero warnings, and every
synthetic fault still fires.

## Second: silhouette overlap

For the concept stage I built another gate: scale a candidate to in-game size,
extract its silhouette, score overlap against the original. 70% reads as the same
unit, under 50% won't be recognised.

It scored the first concept at 31%. Three things wrong with that number.

**The image was opaque.** Concept art from an image model isn't a cutout, so the
"silhouette" was the entire rectangle.

**Then, keying the backdrop by flood fill from the border filled in the negative
space the character encloses** — between the legs, under a sword held across the
body. Those gaps are exactly what a silhouette-first design lives on. Global
colour keying fixed it, which is also why the generator now insists on a chroma
backdrop.

**The third problem was the metric.** A free-pose concept was being compared
against one specific animation frame; facing alone can halve the score. Overlap
is simply the wrong measurement at this stage — a perfect concept would still
fail.

The gate is proportion now: width-to-height, normalised for height. Pose
independent, and it maps directly onto whether the creature occupies its hex the
way the original does. Overlap is still reported, best of both facings, marked
indicative — it becomes the real test later, when rendered frames are compared
against the frame they replace.

First skeleton concept: 51% too wide. After tightening the stance in the prompt:
14%, inside the band.

<figure>
  <img src="/images/vcmi/readability.jpg" alt="A concept checked at in-game size against the original silhouette">
  <figcaption>The corrected check. Left to right: candidate at 1x, 2x, 4x, its silhouette at in-game size, and the original's. The 1x tile is what players see.</figcaption>
</figure>

## Then the whole Necropolis roster

With a metric worth trusting, all fourteen Necropolis creatures in one batch.
Front views at 1024x1440, generated with FLUX.2 [pro] from [Black Forest Labs](https://bfl.ai) — 4.5 credits each, 63 in total, about 63 cents.

Proportions are measured per creature, because they aren't close: wight 0.33,
liches 0.41, humanoids 0.45–0.53, dragons 0.76, mounted knights 0.81–0.84. One
faction-wide number would pass a wight shaped like a knight.

Eight of fourteen made it.

<figure>
  <img src="/images/vcmi/necropolis.jpg" alt="Fourteen Necropolis concepts with proportion scores">
  <figcaption>All fourteen, front views. Green means proportion is inside the 15% band; red means it isn't.</figcaption>
</figure>

The interesting part: **all six failures are too wide, none too narrow**. That
isn't noise, it's a bias. Image models like to give a character room — planted
stance, arms out, wings open — and Heroes III's creatures are compact because
they have to sit on a hex. "Compact upright framing" in the prompt wasn't enough
weight against it.

The bias is one-sided, so it's clear which way to correct it.

## Same lesson twice

Two checks, two rounds of feeling good about them, two sets of confident wrong
numbers. Both fixed the same way: **run it against data whose answer you already
know.**

A metric needs to be run against data whose answer you already know, or you
don't know what it measures. The original art was sitting right there.

Code: the preview tool and the drift-check calibration in
[PR #6](https://github.com/yzh119/vcmi/pull/6), the concept gate and the batch
generation in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
