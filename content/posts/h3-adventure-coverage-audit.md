---
title: "[AI] Adventure map: full HD coverage audit"
date: 2026-09-10T09:30:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

This pass is not a new concept image. It verifies that every adventure-map resource actually has an HD layer. The audit found that the active package had omitted seven resource families—`AVA`, `AVG`, `AVM`, `AVS`, `AVR`, `AVT` and `AVZ`. They were not damaged; they simply had no 2×, 3× or 4× overrides.

The missing baseline was generated with original frames, shadows, foreground occlusion and sequence definitions preserved, then checked against the enabled local mod:

| Item | Result |
| --- | ---: |
| Adventure resources | 1,294 |
| Animated/static frames | 20,547 |
| Body, shadow and overlay layers | 61,641 |
| Scales | 2×, 3×, 4× |
| Missing frames, sequence or canvas errors | 0 |

The verifier checks resource completeness and geometry only, so later generative repaint passes may replace visible bodies. This proves complete HD baseline coverage, not that every object has been artistically repainted.

A VCMI test-client startup then mounted **74,739 files** from `h3-environment-hd` in **182 ms** and initialized the renderer without resource-parsing errors. The test was intentionally ended during startup, so it is not presented as a full map playthrough. The public tool repository now includes the repeatable [`verify_adventure_assets.py`](https://github.com/yzh119/h3-art-pipeline/blob/main/environment-art/verify_adventure_assets.py). No VCMI source was modified.
