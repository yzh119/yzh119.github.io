---
title: "[AI]探险地图：地貌与植被"
date: 2026-09-10T08:00:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一篇集中记录探险地图的地面、山体与植被。此前的长文保留为开发档案；从这次起，地图更新按主题分开发布。

## 可替换的地面材质

草地、粗糙地、泥地、沙地、雪地、沼泽、地下和熔岩地面，以及道路与河流，采用新绘制的高分辨率材质。原版的格子边界、过渡形状、遮罩和可通行信息仍由原始资源决定，因此不会把画面细化误变成地图规则改动。

![地面材质对照](/images/h3-environment-hd/material-redraw-compare.png)

## 山体

草地、粗糙地、雪地之外，沙漠、沼泽、地下和熔岩也已有对应的山体替换。每个对象仍使用原来的画布、阴影和遮挡层；只更新可见主体，保持地图上的前后关系与点击范围。

![草地与粗糙地山体](/images/h3-environment-hd/mountain-variants-compare.png)

![跨地貌山体](/images/h3-environment-hd/mountains-biomes-compare.png)

![熔岩、沙漠与枯木](/images/h3-environment-hd/volcanic-desert-deadwood-compare.png)

## 林缘树冠

探险地图上八种横向、竖向和方形林缘占格也已单独替换。每种仍沿用自己的对象画布和遮挡层，因此占位关系不变；新主体补出分层叶冠、可见树干、蕨类与石块。

![林缘树冠](/images/h3-environment-hd/woodland-canopies-compare.png)

## 森林、灌木与湿地

草地森林、针叶林、雪地树林、棕榈、枯木、荆棘与沼泽芦苇已逐组替换。它们不是简单把原版放大：生成图负责补出树皮、叶簇和岩层细节，注册工具再把结果放回原对象的透明轮廓中。

![植被对照](/images/h3-environment-hd/vegetation-compare.png)

![灌木与芦苇](/images/h3-environment-hd/brush-reeds-compare.png)

![跨地貌自然物](/images/h3-environment-hd/biome-objects-compare.png)

这批资源在本地私有 mod 中启用，未改动 VCMI 源码。当前仍是持续替换，不把尚未重绘的对象称为完成。
