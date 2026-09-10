---
title: "[AI]探险地图：野外守卫"
date: 2026-09-10T08:10:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

野外守卫不能只替换一张静帧，否则会在循环时闪回原版。这里把兵种动画的完整待机循环逐帧映射到探险地图对象，并保留地图对象自己的阴影和前景遮罩。

## 骷髅与僵尸

骷髅兵、骷髅勇士、僵尸与僵尸领主首先完成了循环接入。画面展示的是静态对照，游戏中播放的是完整帧序列。

![骷髅守卫](/images/h3-environment-hd/animated-skeleton-compare.png)

![僵尸守卫](/images/h3-environment-hd/animated-zombie-compare.png)

## 墓园野外守卫

随后扩展到尸巫、吸血鬼、幽灵、死神等墓园兵种的普通与升级形态。通用注册工具按目标对象的帧数安排循环，不复制或改变对象 JSON 的交互定义。

![墓园野外守卫](/images/h3-environment-hd/map-guards-necropolis-compare.png)

这一步只覆盖墓园阵营的野外守卫；其他城镇兵种会在各自美术批次中处理。资源在本地私有 mod 中启用，未改 VCMI 源码。
