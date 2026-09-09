---
title: "[AI] Not bound to the original's resolution"
date: 2026-09-07T02:30:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "graphics", "blender"]
lastmod: 2026-09-09T05:48:54+08:00
---

> This article records the implementation and measurements at its publication stage. Versions, costs and check counts belong to that stage. See [Vampire delivery](/posts/necropolis-vampires/) for the subsequent installation and [the standalone tools](/posts/h3-art-tools/) for maintained commands.

Something I had been working around without noticing it was a way out: **we don't
have to render at 79 pixels tall.**

Heroes III's creatures are fixed at whatever resolution they were pre-rendered at
in 1999. What shipped is what exists. Ours are rendered on demand, so
**resolution is a parameter**.

## The engine was already ready

VCMI keeps per-scale sprite trees — `Sprites2x/`, `Sprites3x/`, `Sprites4x/`
alongside `Sprites/`. With an upscaling filter on, the engine prefers prescaled
art and falls back to xBRZ only for what is missing.

I wrote this up in [the second post](/posts/h3-engine-constraints/) as a
constraint: scale variants must share basepath and filenames. It didn't register
that it was also an exit.

## Measured

`--scale` multiplies canvas, ground line and creature height together, so the
anchor stays correct:

```
1x    450x400      ground  267    creature  79 px
2x    900x800      ground  534    creature 158 px
4x   1800x1600     ground 1068    creature 316 px
```

<figure>
  <img src="/images/vcmi/native-4x.jpg" alt="Original upscaled, native 4x, our 1x upscaled">
  <figcaption>Left: the original at 1x, scaled 4×. Middle: our native 4× render. Right: the same model at 1x, scaled 4×.</figcaption>
</figure>

The middle frame resolves ribs, finger bones, toes and the shape of the blade. The
outer two are the same information stretched — one into the original's mosaic, one
into our own blur.

**The extra detail isn't interpolated. It was always in the model; it just wasn't
being rendered.**

## What it costs

**Render time grows with the square of the scale.** 2x is four times the pixels,
and rendering all thirteen groups took long enough that the OS killed the process
once for memory. 4x is sixteen times.

**So does disk.** A creature is about 12 MB at 1x and forty-something at 2x. All
150 creatures at 4x would be tens of gigabytes, which is why VCMI's HD guidance
suggests shipping 2x and 3x rather than 4x.

## The detail that is easy to get wrong

Every scale's animation JSON must use the **same basepath and the same filenames**;
only the directory differs. The engine resolves basepath relative to the scale
prefix, so `creatures/cskele/holding_00.png` is correct in both trees and
`creatures/cskele/2x/holding_00.png` is not.

And a 1x set is still required — the HD trees are only consulted when upscaling is
turned on.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

Tools live in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline); models and complete mods stay local. [Migration and reproduction](/posts/h3-art-tools/).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

> **2026-09-09 tool migration:** Development continues in [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). The old `tools/creature-art/` and `tools/town-art/` paths correspond to `creature-art/` and `town-art/` in the new repository. Historical paths and PR links remain in this article. [Migration and reproduction details](/posts/h3-art-tools/).

Something I had been working around without noticing it was a way out: **we don't
have to render at 79 pixels tall.**

Heroes III's creatures are fixed at whatever resolution they were pre-rendered at
in 1999. What shipped is what exists. Ours are rendered on demand, so
**resolution is a parameter**.

## The engine was already ready

VCMI keeps per-scale sprite trees — `Sprites2x/`, `Sprites3x/`, `Sprites4x/`
alongside `Sprites/`. With an upscaling filter on, the engine prefers prescaled
art and falls back to xBRZ only for what is missing.

I wrote this up in [the second post](/posts/h3-engine-constraints/) as a
constraint: scale variants must share basepath and filenames. It didn't register
that it was also an exit.

## Measured

`--scale` multiplies canvas, ground line and creature height together, so the
anchor stays correct:

```
1x    450x400      ground  267    creature  79 px
2x    900x800      ground  534    creature 158 px
4x   1800x1600     ground 1068    creature 316 px
```

<figure>
  <img src="/images/vcmi/native-4x.jpg" alt="Original upscaled, native 4x, our 1x upscaled">
  <figcaption>Left: the original at 1x, scaled 4×. Middle: our native 4× render. Right: the same model at 1x, scaled 4×.</figcaption>
</figure>

The middle frame resolves ribs, finger bones, toes and the shape of the blade. The
outer two are the same information stretched — one into the original's mosaic, one
into our own blur.

**The extra detail isn't interpolated. It was always in the model; it just wasn't
being rendered.**

## What it costs

**Render time grows with the square of the scale.** 2x is four times the pixels,
and rendering all thirteen groups took long enough that the OS killed the process
once for memory. 4x is sixteen times.

**So does disk.** A creature is about 12 MB at 1x and forty-something at 2x. All
150 creatures at 4x would be tens of gigabytes, which is why VCMI's HD guidance
suggests shipping 2x and 3x rather than 4x.

## The detail that is easy to get wrong

Every scale's animation JSON must use the **same basepath and the same filenames**;
only the directory differs. The engine resolves basepath relative to the scale
prefix, so `creatures/cskele/holding_00.png` is correct in both trees and
`creatures/cskele/2x/holding_00.png` is not.

And a 1x set is still required — the HD trees are only consulted when upscaling is
turned on.

Code in [PR #10](https://github.com/yzh119/vcmi/pull/10).

{{< /history >}}
