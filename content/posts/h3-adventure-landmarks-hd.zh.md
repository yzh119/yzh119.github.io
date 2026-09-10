---
title: "[AI]用生成式 AI 增强英雄无敌3：探险地图地标"
date: 2026-09-10T08:05:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一篇记录可交互地标与大型静态地标的高清替换。地标不同于整张背景：未建造状态、升级形态、前后遮挡和点击范围都必须保留，因此新图只进入原资源的主体层。

## 资源与服务地标

矿井、祭坛、水井、酒馆、墓园、绿洲、金字塔、船只和三色方尖碑已有替换。所有对象继续沿用原始阴影、遮罩和元数据。

![早期地标](/images/h3-environment-hd/adventure-landmarks-compare.png)

![水井、酒馆与墓园](/images/h3-environment-hd/landmark-set-compare.png)

![金字塔、船只与方尖碑](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

## 大型地标

巨型红木和大型城堡式地标也已重绘，保留原来的透明轮廓与层级关系。

![巨型红木](/images/h3-environment-hd/redwood-compare.png)

![大型城堡地标](/images/h3-environment-hd/castle-landmark-compare.png)

## 水边功能建筑

船坞、市场与饮水点已单独接入；它们不是平铺背景，因此仍可维持原游戏的对象行为。

![船坞、市场与饮水点](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

本地以 Good to Go 地图启动验证时，客户端日志实际读取了新的红木和岩石 4× 资源。此项验证证明 mod 解析和资源选择正确；它不等同于完整通关测试。VCMI 源码没有修改。
