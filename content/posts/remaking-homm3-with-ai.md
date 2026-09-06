---
title: "[AI] Improving Heroes III with AI"
date: 2026-09-05T20:00:00+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "rl"]
---

Heroes III came out in 1999. Twenty-seven years later people still play it, and
a group of people are still rewriting its engine from scratch.

This series documents a hobby project: standing on [VCMI](https://vcmi.eu) and
pushing the whole game forward. For fun, not commercial.

## The foundation

VCMI is an open-source Heroes III engine, reimplemented from scratch and compatible with the original's gameplay and assets. It's a good base not because it runs,
but because the extension points are already there: per-scale HD sprite trees,
JSON-defined animations, data-driven creatures and skills, Lua wired into combat.

So the tracks below can move independently.

## Art

The whole creature roster replaced, through a 3D pipeline: concept → image-to-3D →
rig → animate → render back to sprites.

One counterintuitive detail: this isn't a betrayal of the pixel look, because
**Heroes III's creatures were pre-rendered from 3D to begin with**. The
skeleton's palette holds 223 distinct colours — never limited-palette pixel art,
just a render squeezed into a low resolution. Going 3D is a return to the
original method.

Under two dollars per creature, roughly $280 for all 150. The money isn't the
problem. Art direction and per-creature review are what take time.

## A stronger AI

This one already works — it isn't a proposal.

[smanolloff](https://github.com/smanolloff/vcmi-gym) wrapped VCMI battles as a
gym environment and trained models on it. The result, MMAI, has been selectable
in the launcher since 1.7.0 and lives in `AI/MMAI/` in the main tree: ONNX
Runtime inference, separate models for attack, defence and siege, temperature
sampling, fallback to the classic AI if inference fails.

The original combat AI is decades-old heuristics — predictable and exploitable.
So this track starts from working code rather than from scratch.

## Mechanics

The engine is data-driven, so changes are cheaper than they sound: terrain
effects, stack synergies, adventure-map pacing.

A side effect may matter more than any of it: **using the RL environment as a
balance tool.** Change one number, self-play tens of thousands of battles, watch
the win rate move. Balance testing with objective, fast feedback.

## The bad idea: non-blocking turns

The worst part of turn-based multiplayer is waiting. The existing mitigation is
simultaneous turns — everyone moves at once until two players meet, then it
collapses back to alternation.

I want to try fully asynchronous: everyone moves at their own pace, conflicts
resolved only where interaction actually happens. The difficulty is entirely
there — two players grab the same mine at their own "current moment", who got
there first? Introduce a real timeline and is it still turn-based?

I haven't worked either of those out.

## On tooling and rights

Coding agents got good enough that we dared to start at all. The code is written
with Claude Code, the concept art with [FLUX.2 \[pro\]](https://bfl.ai) from Black
Forest Labs. Reading 100k lines of unfamiliar C++, reverse-engineering the `.def`
format, writing a validator — weeks of prerequisite work, now a day or two.

The tooling lives in `tools/creature-art/` in
[yzh119/vcmi](https://github.com/yzh119/vcmi).

Heroes III's assets are Ubisoft's, so derived assets aren't distributed; what we
build is tooling and original art. VCMI is a decade of other people's work —
anything useful goes back upstream.

## Written so far

- [the engine and the archive formats](/posts/h3-engine-constraints/) — the rules
  that never error, and how three images hide inside one palette
- [two metrics I got wrong](/posts/metrics-i-got-wrong/) — how the original art
  caught both

Next: mesh, rig, animation, rendering back to sprites.

First target: **one skeleton**, end to end.
