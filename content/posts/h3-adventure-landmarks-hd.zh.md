---
title: "[AI]探险地图：地标"
date: 2026-09-10T08:05:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一篇记录可交互地标与大型静态地标的高清替换。地标不同于整张背景：未建造状态、升级形态、前后遮挡和点击范围都必须保留，因此新图只进入原资源的主体层。

## 小型知识建筑

女巫小屋与学习石碑也已重绘。前者保留低矮草顶、烟柱和根系，后者保留圆顶、石柱和中央书台；两者都只增强材质，不改变地图上的识别体量。

![女巫小屋与学习石碑](/images/h3-environment-hd/knowledge-buildings-compare.png)

## 资源与服务地标

矿井、祭坛、水井、酒馆、墓园、绿洲、金字塔、船只和三色方尖碑已有替换。所有对象继续沿用原始阴影、遮罩和元数据。

![早期地标](/images/h3-environment-hd/adventure-landmarks-compare.png)

![水井、酒馆与墓园](/images/h3-environment-hd/landmark-set-compare.png)

![金字塔、船只与方尖碑](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

## 地貌水井变体

粗糙地与雪地水井也分别重绘：保留原版的小型石井、短木柱和屋顶比例，粗糙地保留陶瓦与苔藓，雪地则使用积雪屋顶和覆雪石砌。

![粗糙地与雪地水井](/images/h3-environment-hd/well-biomes-compare.png)

## 大型地标

巨型红木和大型城堡式地标也已重绘，保留原来的透明轮廓与层级关系。

![巨型红木](/images/h3-environment-hd/redwood-compare.png)

![大型城堡地标](/images/h3-environment-hd/castle-landmark-compare.png)

## 魔法与知识地标

魔法泉与先知小屋也已加入替换。主体重新绘制后仍套回原有轮廓、阴影和交互资源，因此不会影响访问规则。

![魔法泉与先知小屋](/images/h3-environment-hd/functional-landmarks-compare.png)

## 瞭望塔与龙之国重做

此前的巨型红木虽然更清晰，却仍像一棵普通树；这次将它重做为可一眼辨认的瞭望塔：外置螺旋梯、环形观景台、瞭望亭、望远镜和旗帜都进入主体轮廓。

![瞭望塔](/images/h3-environment-hd/observatory-compare.png)

~~龙之国的第一版把石制神殿扩张成了巨型龙巢，这个方向偏离了原作。~~ 修订版重新以原始轮廓为准：保留紧凑山墙、方形门洞、两侧石柱和暖灰砂岩配色，只增强砌石、风化和苔藓细节。

![忠实原作的龙之国](/images/h3-environment-hd/dragon-utopia-faithful-compare.png)

## 水边功能建筑

船坞、市场与饮水点已单独接入；它们不是平铺背景，因此仍可维持原游戏的对象行为。

![船坞、市场与饮水点](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

本地以 Good to Go 地图启动验证时，客户端日志实际读取了新的红木和岩石 4× 资源。此项验证证明 mod 解析和资源选择正确；它不等同于完整通关测试。VCMI 源码没有修改。
