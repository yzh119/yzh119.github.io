---
title: "[AI]探险地图：全量高清覆盖校验"
date: 2026-09-10T09:30:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一轮不是新增一张概念图，而是核对所有探险地图资源是否真的有 HD 层。审计发现此前 active package 漏装了 `AVA`、`AVG`、`AVM`、`AVS`、`AVR`、`AVT` 与 `AVZ` 七类资源：它们没有损坏，只是根本没有 2×、3×、4× override。

已用保留原始帧、阴影、前景遮挡和序列定义的构建流程补齐这些基线资源，并在本地启用 mod 上运行全量校验：

| 项目 | 结果 |
| --- | ---: |
| 探险资源 | 1,294 |
| 动画/静态帧 | 20,547 |
| body、shadow、overlay 图层 | 61,641 |
| 倍率 | 2×、3×、4× |
| 缺帧、序列或画布错误 | 0 |

校验器只检查资源完整性和几何一致性，允许后续生成式重绘替换主体图。因此这证明所有探险资源已有高清覆盖基线，不等于每个对象都已重绘。公开工具库已加入可重复运行的 [`verify_adventure_assets.py`](https://github.com/yzh119/h3-art-pipeline/blob/main/environment-art/verify_adventure_assets.py)。VCMI 源码没有修改。
