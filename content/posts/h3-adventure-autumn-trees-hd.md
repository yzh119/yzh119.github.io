---
title: "[AI] Adventure map: autumn trees"
date: 2026-09-10T10:52:00+08:00
series: ["Enhancing Heroes of Might and Magic III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

Autumn trees begin with the smallest two-tree combination. The HD repaint retains the original depth order: a taller yellow-green canopy behind, a shorter orange-yellow canopy at lower left, plus their thin trunks and spacing.

![HD autumn twin-tree comparison](/images/h3-environment-hd/autumn-twin-trees-hd-compare.png)

The body uses the native transparency silhouette constraint, so the new paint cannot extend beyond the original form; canvas, occlusion, shadows and hit template are unchanged. It is installed at 2×, 3× and 4×, the full check reports zero errors, and customized body resources now total **133**.

A second twin-tree shape and two grove combinations followed. Every body is clipped to its own native transparency silhouette, so the larger groves retain their original canopy edge and map-occlusion extent.

![HD autumn-grove comparison](/images/h3-environment-hd/autumn-grove-hd-compare.png)

Customized body resources now total **136**.
