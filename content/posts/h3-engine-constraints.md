---
title: "[AI] Heroes III sprite formats and engine constraints"
date: 2026-09-06T12:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "graphics", "reverse-engineering"]
lastmod: 2026-09-09T05:48:54+08:00
---

> This article records the implementation and measurements at its publication stage. Versions, costs and check counts belong to that stage. See [Vampire delivery](/posts/necropolis-vampires/) for the subsequent installation and [the standalone tools](/posts/h3-art-tools/) for maintained commands.

I want to replace Heroes III's creature art, running on [VCMI](https://vcmi.eu).

Before generating anything I read the engine to find out what it requires. There
turned out to be a pile of rules, almost none of them documented, and **none of
them error**. Break one and you get a creature that looks subtly wrong, with
nothing telling you which one.

## The canvas is taken from the first frame

`CreatureAnimation` sizes the creature from the first frame of the current group:

```cpp
auto first = forward->getImage(0, size_t(type), true);
fullWidth  = first->width();
```

But `pos.w`/`pos.h` are fixed once, when the stack is created, and every later
frame is blitted through that rectangle:

```cpp
canvas.draw(image, pos.topLeft(), Rect(0, 0, pos.w, pos.h));
```

Anything larger than the idle frame gets cropped. Anything smaller floats. So
every frame of every group has to sit on one canvas, padded with transparency.

## Position ignores the creature

`getStackPositionAtHex` derives the draw position from the hex alone — a
hardcoded `basePos(-189, -139)` plus an offset. The creature's own size never
enters it.

Frames loaded from PNG get `margins = (0,0)`, unlike `.def` frames which carry
their own. So **where you place the creature inside its canvas is the only anchor
there is**. Get it wrong and the unit hovers or sinks, with nothing downstream to
correct it.

<figure>
  <img src="/images/vcmi/idle-anchor.png" alt="Skeleton idle loop with the ground line drawn">
  <figcaption>Eight frames of the skeleton's idle loop. The red line is the ground line the engine anchors to; the feet sit on it in all eight, to the pixel. That precision is what a replacement has to reproduce.</figcaption>
</figure>

## `verticalFlip` is a horizontal mirror

The engine only needs one facing and flips for the other:

```cpp
reverse->verticalFlip();
```

`CSDL_Ext::verticalFlip` reverses pixels *within* each row — a left-right mirror.
`horizontalFlip` reverses row order. The names are the opposite of the usual
convention.

Worth knowing: it halves the art budget.

## Shadow and flags live in the palette

The first eight palette indices are not colours, they are meaning: transparency,
two shadow densities, and an owner-flag slot the engine tints per player.

A repaint has no palette, so those layers have to be supplied explicitly, as
`-shadow` and `-overlay` companion images. Overlays are **mandatory** for the
idle and hover groups — that white outline is what lights up when you mouse over
a stack.

## Scale variants share their paths

For 2x the engine looks up `SPRITES2X/<name>.json`, and `basepath` inside that
JSON resolves relative to the scale prefix. So the 1x and 2x JSON should carry
**identical** basepath and filenames; only the directory differs. A 1x set is
still required even if you only care about HD.

## Frame counts are yours

The JSON animation format replaces a group wholesale, "even if original animation
is longer". Use as many frames as you like; timing is tuned per creature
separately.

## Reading the archives while I was there

To match anything I also needed the original's numbers: canvas size, frame
counts, where the feet land. VCMI ships tools for this but they weren't
installed, and the formats are simple enough to read directly.

LOD is a flat archive: file count at offset 8, entries from `0x5c` — a 16-byte
name, offset, full size, four unused bytes, compressed size. Non-zero compressed
size means zlib.

DEF is slightly more involved: header, 256-entry palette, then blocks of group
id, frame count, eight unknown bytes, thirteen-byte frame names and frame
offsets. Each frame has a 32-byte header and one of four encodings. All 2565 defs
in `H3sprite.lod` decode; all four encodings show up.

The palette is the interesting part. From VCMI's own translation table:

```
0     transparent
1,2   shadow border      alpha 64
3,4   shadow body        alpha 128
5     selection / owner flag
6,7   shadow below selection
```

So **one def frame is really three images stacked**, separated by palette index:
the body, the ground shadow, and the white outline waiting to be tinted. Undo the
encoding and three clean layers fall out — exactly the three a replacement has to
deliver.

<figure>
  <img src="/images/vcmi/three-layers.png" alt="One DEF frame split into three layers">
  <figcaption>The same frame, split by palette index: body, sheared ground shadow, white outline.</figcaption>
</figure>

## How big the skeleton actually is

With the decoder working the target stops being a guess:

```
canvas         450 x 400, agreed by all 15 groups
ground line    y = 267, held to the pixel across idle frames
creature       42 x 79 idle, 158 x 136 across all actions
frames         82 over the 13 groups the engine knows
palette        223 distinct colours
```

Two of those changed how I think about the job.

**42 × 79.** That is the whole creature. The ribcage detail you see zoomed in is
two or three pixels in play — texture, not shape. A design has to survive being
reduced to one silhouette and three or four value masses; finer than that is
noise, and it aliases differently every frame.

<figure>
  <img src="/images/vcmi/scale-reality.png" alt="The skeleton at 1x, 2x and 4x">
  <figcaption>Left is the size the game actually draws: 42 x 79. The zooms are for our benefit, not the player's.</figcaption>
</figure>

**223 colours.** This is not limited-palette pixel art. Heroes III's creatures
were pre-rendered from 3D. Going back through a 3D pipeline is a *return* to the
original method, not a departure from it.

## Wrapping up

Reading the engine cost an afternoon. Finding any one of these by staring at a
wrong sprite would have cost considerably more.

The checks live in a validator now. The next person doesn't have to read
`CreatureAnimation.cpp` to work out why their skeleton is floating.

Code: validator and scaffolding in [PR #1](https://github.com/yzh119/vcmi/pull/1),
the LOD/DEF decoder in [PR #3](https://github.com/yzh119/vcmi/pull/3).

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

I want to replace Heroes III's creature art, running on [VCMI](https://vcmi.eu).

Before generating anything I read the engine to find out what it requires. There
turned out to be a pile of rules, almost none of them documented, and **none of
them error**. Break one and you get a creature that looks subtly wrong, with
nothing telling you which one.

## The canvas is taken from the first frame

`CreatureAnimation` sizes the creature from the first frame of the current group:

```cpp
auto first = forward->getImage(0, size_t(type), true);
fullWidth  = first->width();
```

But `pos.w`/`pos.h` are fixed once, when the stack is created, and every later
frame is blitted through that rectangle:

```cpp
canvas.draw(image, pos.topLeft(), Rect(0, 0, pos.w, pos.h));
```

Anything larger than the idle frame gets cropped. Anything smaller floats. So
every frame of every group has to sit on one canvas, padded with transparency.

## Position ignores the creature

`getStackPositionAtHex` derives the draw position from the hex alone — a
hardcoded `basePos(-189, -139)` plus an offset. The creature's own size never
enters it.

Frames loaded from PNG get `margins = (0,0)`, unlike `.def` frames which carry
their own. So **where you place the creature inside its canvas is the only anchor
there is**. Get it wrong and the unit hovers or sinks, with nothing downstream to
correct it.

<figure>
  <img src="/images/vcmi/idle-anchor.png" alt="Skeleton idle loop with the ground line drawn">
  <figcaption>Eight frames of the skeleton's idle loop. The red line is the ground line the engine anchors to; the feet sit on it in all eight, to the pixel. That precision is what a replacement has to reproduce.</figcaption>
</figure>

## `verticalFlip` is a horizontal mirror

The engine only needs one facing and flips for the other:

```cpp
reverse->verticalFlip();
```

`CSDL_Ext::verticalFlip` reverses pixels *within* each row — a left-right mirror.
`horizontalFlip` reverses row order. The names are the opposite of the usual
convention.

Worth knowing: it halves the art budget.

## Shadow and flags live in the palette

The first eight palette indices are not colours, they are meaning: transparency,
two shadow densities, and an owner-flag slot the engine tints per player.

A repaint has no palette, so those layers have to be supplied explicitly, as
`-shadow` and `-overlay` companion images. Overlays are **mandatory** for the
idle and hover groups — that white outline is what lights up when you mouse over
a stack.

## Scale variants share their paths

For 2x the engine looks up `SPRITES2X/<name>.json`, and `basepath` inside that
JSON resolves relative to the scale prefix. So the 1x and 2x JSON should carry
**identical** basepath and filenames; only the directory differs. A 1x set is
still required even if you only care about HD.

## Frame counts are yours

The JSON animation format replaces a group wholesale, "even if original animation
is longer". Use as many frames as you like; timing is tuned per creature
separately.

## Reading the archives while I was there

To match anything I also needed the original's numbers: canvas size, frame
counts, where the feet land. VCMI ships tools for this but they weren't
installed, and the formats are simple enough to read directly.

LOD is a flat archive: file count at offset 8, entries from `0x5c` — a 16-byte
name, offset, full size, four unused bytes, compressed size. Non-zero compressed
size means zlib.

DEF is slightly more involved: header, 256-entry palette, then blocks of group
id, frame count, eight unknown bytes, thirteen-byte frame names and frame
offsets. Each frame has a 32-byte header and one of four encodings. All 2565 defs
in `H3sprite.lod` decode; all four encodings show up.

The palette is the interesting part. From VCMI's own translation table:

```
0     transparent
1,2   shadow border      alpha 64
3,4   shadow body        alpha 128
5     selection / owner flag
6,7   shadow below selection
```

So **one def frame is really three images stacked**, separated by palette index:
the body, the ground shadow, and the white outline waiting to be tinted. Undo the
encoding and three clean layers fall out — exactly the three a replacement has to
deliver.

<figure>
  <img src="/images/vcmi/three-layers.png" alt="One DEF frame split into three layers">
  <figcaption>The same frame, split by palette index: body, sheared ground shadow, white outline.</figcaption>
</figure>

## How big the skeleton actually is

With the decoder working the target stops being a guess:

```
canvas         450 x 400, agreed by all 15 groups
ground line    y = 267, held to the pixel across idle frames
creature       42 x 79 idle, 158 x 136 across all actions
frames         82 over the 13 groups the engine knows
palette        223 distinct colours
```

Two of those changed how I think about the job.

**42 × 79.** That is the whole creature. The ribcage detail you see zoomed in is
two or three pixels in play — texture, not shape. A design has to survive being
reduced to one silhouette and three or four value masses; finer than that is
noise, and it aliases differently every frame.

<figure>
  <img src="/images/vcmi/scale-reality.png" alt="The skeleton at 1x, 2x and 4x">
  <figcaption>Left is the size the game actually draws: 42 x 79. The zooms are for our benefit, not the player's.</figcaption>
</figure>

**223 colours.** This is not limited-palette pixel art. Heroes III's creatures
were pre-rendered from 3D. Going back through a 3D pipeline is a *return* to the
original method, not a departure from it.

## Wrapping up

Reading the engine cost an afternoon. Finding any one of these by staring at a
wrong sprite would have cost considerably more.

The checks live in a validator now. The next person doesn't have to read
`CreatureAnimation.cpp` to work out why their skeleton is floating.

Code: validator and scaffolding in [PR #1](https://github.com/yzh119/vcmi/pull/1),
the LOD/DEF decoder in [PR #3](https://github.com/yzh119/vcmi/pull/3).

{{< /history >}}
